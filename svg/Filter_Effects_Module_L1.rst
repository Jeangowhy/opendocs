.. container:: head

   |W3C|

   .. rubric:: Filter Effects Module Level 1
      :name: title
      :class: p-name no-ref

   `Editor’s Draft <https://www.w3.org/standards/types#ED>`__, 5 March
   2024

   More details about this document

   .. container::

      This version:
         https://drafts.fxtf.org/filter-effects-1/
      Latest published version:
         https://www.w3.org/TR/filter-effects-1/
      Previous Versions:
         https://www.w3.org/TR/2018/WD-filter-effects-1-20181124/
         https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/
         https://www.w3.org/TR/2013/WD-filter-effects-1-20131126/
         https://www.w3.org/TR/2013/WD-filter-effects-20130523/
         https://www.w3.org/TR/2012/WD-filter-effects-20121025/
      Test Suite:
         http://test.csswg.org/suites/filter-effects/nightly-unstable/
      Feedback:
         `Inline In Spec <#issues-index>`__
      Editors:
         `Dirk Schulze <mailto:dschulze@adobe.com>`__ (Adobe Inc.)
         `Dean Jackson <mailto:dino@apple.com>`__ (Apple Inc.)
         `Chris Harrelson <mailto:chrishtr@google.com>`__ (Google)
      Former Editors:
         Vincent Hardy
         `Erik Dahlström <mailto:erik@dahlström.net>`__ (Invited Expert)
      Issue Tracking:
         `GitHub
         Issues <https://github.com/w3c/fxtf-drafts/labels/filter-effects-1>`__
      Suggest an Edit for this Spec:
         `GitHub
         Editor <https://github.com/w3c/fxtf-drafts/blob/main/filter-effects-1/Overview.bs>`__

   .. container::

   `Copyright <https://www.w3.org/policies/#copyright>`__ © 2024 `World
   Wide Web Consortium <https://www.w3.org/>`__. W3C\ :sup:`®`
   `liability <https://www.w3.org/policies/#Legal_Disclaimer>`__,
   `trademark <https://www.w3.org/policies/#W3C_Trademarks>`__ and
   `permissive document
   license <https://www.w3.org/copyright/software-license/>`__ rules
   apply.

   --------------

.. container:: p-summary

   .. rubric:: Abstract
      :name: abstract
      :class: no-num no-toc no-ref heading settled

   Filter effects are a way of processing an element’s rendering before
   it is displayed in the document. Typically, rendering an element via
   CSS or SVG can conceptually be described as if the element, including
   its children, are drawn into a buffer (such as a raster image) and
   then that buffer is composited into the elements parent. Filters
   apply an effect before the compositing stage. Examples of such
   effects are blurring, changing color intensity and warping the image.

   Although originally designed for use in SVG, filter effects are a set
   of operations to apply on an image buffer and therefore can be
   applied to nearly any presentational environment, including CSS. They
   are triggered by a style instruction (the
   `filter <#propdef-filter>`__ property). This specification describes
   filters in a manner that allows them to be used in content styled by
   CSS, such as HTML and SVG. It also defines a CSS property value
   function that produces a CSS
   `<image> <https://drafts.csswg.org/css-images-3/#typedef-image>`__
   value.

.. _sotd:

Status of this document
-----------------------

.. container::

   This is a public copy of the editors’ draft. It is provided for
   discussion only and may change at any moment. Its publication here
   does not imply endorsement of its contents by W3C. Don’t cite this
   document other than as work in progress.

   `GitHub Issues <https://github.com/w3c/fxtf-drafts/issues>`__ are
   preferred for discussion of this specification. When filing an issue,
   please put the text “filter-effects” in the title, preferably like
   this: “[filter-effects] *…summary of comment…*\ ”. All issues and
   comments are
   `archived <https://lists.w3.org/Archives/Public/public-fxtf-archive/>`__,
   and there is also a `historical
   archive <http://lists.w3.org/Archives/Public/public-fx/>`__.

   This document was produced by the `CSS Working
   Group <https://www.w3.org/groups/wg/css>`__ (part of the `Style
   Activity <https://www.w3.org/Style/>`__).

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

   This document is governed by the `03 November 2023 W3C Process
   Document <https://www.w3.org/2023/Process-20231103/>`__.

.. container::

.. _contents:

Table of Contents
-----------------

#. `1 Introduction <#intro>`__
#. `2 Module interactions <#placement>`__
#. `3 Values <#values>`__
#. `4 Terminology <#definitions>`__
#. `5 Graphic filters: the filter property <#FilterProperty>`__
#. `6 Filter Functions <#filter-functions>`__

   #. `6.1 Supported Filter Functions <#supported-filter-functions>`__
   #. `6.2 Computed Values of Filter Functions <#computed-values-of-filter-functions>`__
   #. `6.3 Serialization of Filter Functions <#serialization-of-filter-functions>`__
   #. `6.4 Interpolation of Filter Functions <#interpolation-of-filter-functions>`__

#. `7 SVG Filter Sources: the filter element <#FilterElement>`__
#. `8 Filter Region <#FilterEffectsRegion>`__
#. `9 Filter primitives <#FilterPrimitivesOverview>`__

   #. `9.1 Overview <#FilterPrimitivesOverviewIntro>`__
   #. `9.2 Common filter primitive attributes <#CommonAttributes>`__
   #. `9.3 Filter primitive tree <#FilterPrimitiveTree>`__
   #. `9.4 Filter primitive subregion <#FilterPrimitiveSubRegion>`__
   #. `9.5 Filter primitive feBlend <#feBlendElement>`__
   #. `9.6 Filter primitive feColorMatrix <#feColorMatrixElement>`__
   #. `9.7 Filter primitive feComponentTransfer <#feComponentTransferElement>`__

      #. `9.7.1 Transfer function feFuncR <#feFuncRElement>`__
      #. `9.7.2 Transfer function feFuncG <#feFuncGElement>`__
      #. `9.7.3 Transfer function feFuncB <#feFuncBElement>`__
      #. `9.7.4 Transfer function feFuncA <#feFuncAElement>`__

   #. `9.8 Filter primitive feComposite <#feCompositeElement>`__
   #. `9.9 Filter primitive feConvolveMatrix <#feConvolveMatrixElement>`__
   #. `9.10 Filter primitive feDiffuseLighting <#feDiffuseLightingElement>`__
   #. `9.11 Filter primitive feDisplacementMap <#feDisplacementMapElement>`__
   #. `9.12 Filter primitive feDropShadow <#feDropShadowElement>`__
   #. `9.13 Filter primitive feFlood <#feFloodElement>`__

      #. `9.13.1 The flood-color property <#FloodColorProperty>`__
      #. `9.13.2 The flood-opacity property <#FloodOpacityProperty>`__

   #. `9.14 Filter primitive feGaussianBlur <#feGaussianBlurElement>`__
   #. `9.15 Filter primitive feImage <#feImageElement>`__
   #. `9.16 Filter primitive feMerge <#feMergeElement>`__

      #. `9.16.1 Merge node feMergeNode <#feMergeNodeElement>`__

   #. `9.17 Filter primitive feMorphology <#feMorphologyElement>`__
   #. `9.18 Filter primitive feOffset <#feOffsetElement>`__
   #. `9.19 Filter primitive feSpecularLighting <#feSpecularLightingElement>`__
   #. `9.20 Filter primitive feTile <#feTileElement>`__
   #. `9.21 Filter primitive feTurbulence <#feTurbulenceElement>`__

#. `10 The color-interpolation-filters property <#ColorInterpolationFiltersProperty>`__
#. `11 Light source elements and properties <#LightSourceDefinitions>`__

   #. `11.1 Introduction <#LightSourceIntro>`__
   #. `11.2 Light source feDistantLight <#feDistantLightElement>`__
   #. `11.3 Light source fePointLight <#fePointLightElement>`__
   #. `11.4 Light source feSpotLight <#feSpotLightElement>`__
   #. `11.5 The lighting-color property <#LightingColorProperty>`__

#. `12 Filter CSS <image> values <#FilterCSSImageValue>`__

   #. `12.1 Interpolating filter() <#interpolating-filter-image>`__

#. `13 Shorthands defined in terms of the filter element <#ShorthandEquivalents>`__

   #. `13.1 Filter primitive representation <#FilterPrimitiveRepresentation>`__

      #. `13.1.1 grayscale <#grayscaleEquivalent>`__
      #. `13.1.2 sepia <#sepiaEquivalent>`__
      #. `13.1.3 saturate <#saturateEquivalent>`__
      #. `13.1.4 hue-rotate <#huerotateEquivalent>`__
      #. `13.1.5 invert <#invertEquivalent>`__
      #. `13.1.6 opacity <#opacityEquivalent>`__
      #. `13.1.7 brightness <#brightnessEquivalent>`__
      #. `13.1.8 contrast <#contrastEquivalent>`__
      #. `13.1.9 blur <#blurEquivalent>`__
      #. `13.1.10 drop-shadow <#dropshadowEquivalent>`__

   #. `13.2 Filter region for shorthands <#filter-region-for-shorthands>`__

#. `14 Animation of Filters <#animation-of-filters>`__

   #. `14.1 Interpolation of Filter Function Lists <#interpolation-of-filters>`__
   #. `14.2 Addition <#addition>`__
   #. `14.3 Accumulation <#accumulation>`__

#. `15 Privacy and Security Considerations <#priv-sec>`__

   #. `15.1 Tainted Filter Primitives <#tainted-filter-primitives>`__
   #. `15.2 feDisplacementMap Restrictions <#fedisplacemnentmap-restrictions>`__
   #. `15.3 Origin Restrictions <#origin-restrictions>`__
   #. `15.4 Timing Attacks <#timing-attack>`__

#.  `Appendix A: The deprecated enable-background property <#AccessBackgroundImage>`__
#.  `Appendix B: DOM interfaces <#DOMInterfaces>`__

   #.  `Interface SVGFilterElement <#InterfaceSVGFilterElement>`__
   #.  `Interface SVGFilterPrimitiveStandardAttributes <#InterfaceSVGFilterPrimitiveStandardAttributes>`__
   #.  `Interface SVGFEBlendElement <#InterfaceSVGFEBlendElement>`__
   #.  `Interface SVGFEColorMatrixElement <#InterfaceSVGFEColorMatrixElement>`__
   #.  `Interface SVGFEComponentTransferElement <#InterfaceSVGFEComponentTransferElement>`__
   #.  `Interface SVGComponentTransferFunctionElement <#InterfaceSVGComponentTransferFunctionElement>`__
   #.  `Interface SVGFEFuncRElement <#InterfaceSVGFEFuncRElement>`__
   #.  `Interface SVGFEFuncGElement <#InterfaceSVGFEFuncGElement>`__
   #.  `Interface SVGFEFuncBElement <#InterfaceSVGFEFuncBElement>`__
   #.  `Interface SVGFEFuncAElement <#InterfaceSVGFEFuncAElement>`__
   #.  `Interface SVGFECompositeElement <#InterfaceSVGFECompositeElement>`__
   #.  `Interface SVGFEConvolveMatrixElement <#InterfaceSVGFEConvolveMatrixElement>`__
   #.  `Interface SVGFEDiffuseLightingElement <#InterfaceSVGFEDiffuseLightingElement>`__
   #.  `Interface SVGFEDistantLightElement <#InterfaceSVGFEDistantLightElement>`__
   #.  `Interface SVGFEPointLightElement <#InterfaceSVGFEPointLightElement>`__
   #.  `Interface SVGFESpotLightElement <#InterfaceSVGFESpotLightElement>`__
   #.  `Interface SVGFEDisplacementMapElement <#InterfaceSVGFEDisplacementMapElement>`__
   #.  `Interface SVGFEDropShadowElement <#InterfaceSVGFEDropShadowElement>`__
   #.  `Interface SVGFEFloodElement <#InterfaceSVGFEFloodElement>`__
   #.  `Interface SVGFEGaussianBlurElement <#InterfaceSVGFEGaussianBlurElement>`__
   #.  `Interface SVGFEImageElement <#InterfaceSVGFEImageElement>`__
   #.  `Interface SVGFEMergeElement <#InterfaceSVGFEMergeElement>`__
   #.  `Interface SVGFEMergeNodeElement <#InterfaceSVGFEMergeNodeElement>`__
   #.  `Interface SVGFEMorphologyElement <#InterfaceSVGFEMorphologyElement>`__
   #.  `Interface SVGFEOffsetElement <#InterfaceSVGFEOffsetElement>`__
   #.  `Interface SVGFESpecularLightingElement <#InterfaceSVGFESpecularLightingElement>`__
   #.  `Interface SVGFETileElement <#InterfaceSVGFETileElement>`__
   #.  `Interface SVGFETurbulenceElement <#InterfaceSVGFETurbulenceElement>`__

#.  `Changes <#changes>`__
#.  `Acknowledgments <#acknowledgments>`__
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

#.  `Property Index <#property-index>`__
#.  `IDL Index <#idl-index>`__
#.  `Issues Index <#issues-index>`__

.. container::

   .. rubric:: 1. Introduction\ ` <#intro>`__
      :name: intro
      :class: heading settled

   *This section is not normative*

   A filter effect is a graphical operation that is applied to an
   element as it is drawn into the document. It is an image-based
   effect, in that it takes zero or more images as input, a number of
   parameters specific to the effect, and then produces an image as
   output. The output image is either rendered into the document instead
   of the original element, used as an input image to another filter
   effect, or provided as a CSS image value.

   A simple example of a filter effect is a “flood”. It takes no image
   inputs but has a parameter defining a color. The effect produces an
   output image that is completely filled with the given color. A
   slightly more complex example is an “inversion” which takes a single
   image input (typically an image of the element as it would normally
   be rendered into its parent) and adjusts each pixel such that they
   have the opposite color values.

   Filter effects are exposed with two levels of complexity:

   #. A small set of canned filter functions that are given by name.
      While not particularly powerful, these are convenient and easily
      understood and provide a simple approach to achieving common
      effects, such as blurring. The canned filters can also be animated
      by `[CSS3-ANIMATIONS] <#biblio-css3-animations>`__.

   #. A graph of individual filter effects described in markup that
      define an overall effect. The graph is agnostic to its input in
      that the effect can be applied to any content. While such graphs
      are the combination of effects that may be simple in isolation,
      the graph as a whole can produce complex effects. An example is
      given below.

   .. container:: example
      :name: example-6d81ccb9

      ` <#example-6d81ccb9>`__ In this example, an image is filtered
      with the `<grayscale()> <#funcdef-filter-grayscale>`__ filter
      function.
      .. code:: highlight

         #image {
             filter: grayscale(100%);
         }

      .. container:: figure

         |Example for grayscale filter applied to image|
         An image without filter (left) and the same filter with a 100%
         grayscale filter (right).

   .. container:: example
      :name: example-f7874f10

      ` <#example-f7874f10>`__ The following shows an example of graph
      of individual filter effects.

      .. container:: figure

         |Example Filter|
         Initial example for a filtered object.

      `View this example as SVG <examples/filters01.svg>`__

      The filter effect used in the example above is repeated here with
      reference numbers in the left column before each of the six filter
      primitives:

      1
      2
      3
      4
      5
      6
      .. code:: highlight

         <filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="200" height="120">
           <desc>Produces a 3D lighting effect.</desc>
           <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
           <feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>
           <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75"
                               specularExponent="20" lighting-color="#bbbbbb"
                               result="specOut">
             <fePointLight x="-5000" y="-10000" z="20000"/>
           </feSpecularLighting>
           <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
           <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                        k1="0" k2="1" k3="1" k4="0" result="litPaint"/>
           <feMerge>
             <feMergeNode in="offsetBlur"/>
             <feMergeNode in="litPaint"/>
           </feMerge>
         </filter>

      The following pictures show the intermediate image results from
      each of the six filter elements:

      .. container:: primitive

         .. container::

            |filters01 - original source graphic|
            Source graphic

         .. container::

            |filters01 - after filter element 1|
            After filter primitive 1

         .. container::

            |filters01 - after filter element 2|
            After filter primitive 2

         .. container:: primitive

            |filters01 - after filter element 3|
            After filter primitive 3

         .. container::

            |filters01 - after filter element 4|
            After filter primitive 4

         .. container::

            |filters01 - after filter element 5|
            After filter primitive 5

         .. container::

            |filters01 - after filter element 6|
            After filter primitive 6

      #. Filter primitive
         `feGaussianBlur <#elementdef-fegaussianblur>`__ takes input
         `SourceAlpha <#attr-valuedef-in-sourcealpha>`__, which is the
         alpha channel of the source graphic. The result is stored in a
         temporary buffer named "blur". Note that "blur" is used as
         input to both filter primitives 2 and 3.

      #. Filter primitive `feOffset <#elementdef-feoffset>`__ takes
         buffer "blur", shifts the result in a positive direction in
         both x and y, and creates a new buffer named "offsetBlur". The
         effect is that of a drop shadow.

      #. Filter primitive
         `feSpecularLighting <#elementdef-fespecularlighting>`__, uses
         buffer "blur" as a model of a surface elevation and generates a
         lighting effect from a single point source. The result is
         stored in buffer "specOut".

      #. Filter primitive `feComposite <#elementdef-fecomposite>`__
         masks out the result of filter primitive 3 by the original
         source graphics alpha channel so that the intermediate result
         is no bigger than the original source graphic.

      #. Filter primitive `feComposite <#elementdef-fecomposite>`__
         composites the result of the specular lighting with the
         original source graphic.

      #. Filter primitive `feMerge <#elementdef-femerge>`__ composites
         two layers together. The lower layer consists of the drop
         shadow result from filter primitive 2. The upper layer consists
         of the specular lighting result from filter primitive 5.

   .. rubric:: 2. Module interactions\ ` <#placement>`__
      :name: placement
      :class: heading settled

   This specification defines a set of CSS properties that affect the
   visual rendering of elements to which those properties are applied;
   these effects are applied after elements have been sized and
   positioned according to the `Visual formatting
   model <https://www.w3.org/TR/CSS2/visuren.html>`__ from
   `[CSS21] <#biblio-css21>`__. Some values of these properties result
   in the creation of a `containing
   block <https://drafts.csswg.org/css-display-4/#containing-block>`__,
   and/or the creation of a `stacking
   context <https://www.w3.org/TR/CSS21/visuren.html#x43>`__.

   The compositing model follows the SVG compositing model
   `[SVG11] <#biblio-svg11>`__: first any filter effect is applied, then
   any clipping, masking and opacity
   `[CSS3COLOR] <#biblio-css3color>`__. These effects all apply after
   any other CSS effects such as
   `border <https://drafts.csswg.org/css-backgrounds-3/#propdef-border>`__
   `[CSS3BG] <#biblio-css3bg>`__.

   Some property and element definitions in this specification require
   an SVG 1.1 implementation `[SVG11] <#biblio-svg11>`__. UAs without
   support for SVG must not implement the
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
   `flood-color <#propdef-flood-color>`__,
   `flood-opacity <#propdef-flood-opacity>`__ and
   `lighting-color <#propdef-lighting-color>`__ properties as well as
   the `filter <#elementdef-filter>`__ element, the
   `feMergeNode <#elementdef-femergenode>`__ element, the `transfer
   function elements <#transfer-function-element>`__ and the `filter
   primitive <#filter-primitive>`__ elements.

   .. rubric:: 3. Values\ ` <#values>`__
      :name: values
      :class: heading settled

   This specification follows the `CSS property definition
   conventions <https://www.w3.org/TR/CSS21/about.html#property-defs>`__
   from `[CSS21] <#biblio-css21>`__. Value types not defined in these
   specifications are defined in CSS Values and Units Module Level 3
   `[CSS3VAL] <#biblio-css3val>`__.

   In addition to the property-specific values listed in their
   definitions, all properties defined in this specification also accept
   the
   `inherit <https://www.w3.org/TR/CSS21/cascade.html#value-def-inherit>`__
   keyword as their property value. For readability it has not been
   repeated explicitly.

   .. rubric:: 4. Terminology\ ` <#definitions>`__
      :name: definitions
      :class: heading settled

   When used in this specification, terms have the meanings assigned in
   this section.

   filter primitive, ``filter-primitive``
      The set of elements that control the output of a
      `filter <#elementdef-filter>`__ element, particularly:
      `feSpotLight <#elementdef-fespotlight>`__,
      `feBlend <#elementdef-feblend>`__,
      `feColorMatrix <#elementdef-fecolormatrix>`__,
      `feComponentTransfer <#elementdef-fecomponenttransfer>`__,
      `feComposite <#elementdef-fecomposite>`__,
      `feConvolveMatrix <#elementdef-feconvolvematrix>`__,
      `feDiffuseLighting <#elementdef-fediffuselighting>`__,
      `feDisplacementMap <#elementdef-fedisplacementmap>`__,
      `feDropShadow <#elementdef-fedropshadow>`__,
      `feFlood <#elementdef-feflood>`__,
      `feGaussianBlur <#elementdef-fegaussianblur>`__,
      `feImage <#elementdef-feimage>`__,
      `feMerge <#elementdef-femerge>`__,
      `feMorphology <#elementdef-femorphology>`__,
      `feOffset <#elementdef-feoffset>`__,
      `feSpecularLighting <#elementdef-fespecularlighting>`__,
      `feTile <#elementdef-fetile>`__,
      `feTurbulence <#elementdef-feturbulence>`__.

   pass through filter
      The pass through filter output is equal to the primary input of
      the filter primitive.

   .. rubric:: 5. Graphic filters: the `filter <#propdef-filter>`__
      property\ ` <#FilterProperty>`__
      :name: FilterProperty
      :class: heading settled

   The description of the `filter <#propdef-filter>`__ property is as
   follows:

   Name:
   filter
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   none `\| <https://drafts.csswg.org/css-values-4/#comb-one>`__
   `<filter-value-list> <#typedef-filter-value-list>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   none
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   All elements. In SVG, it applies to `container
   elements <https://svgwg.org/svg2-draft/struct.html#container-element>`__
   without the
   `defs <https://svgwg.org/svg2-draft/struct.html#elementdef-defs>`__
   element, all `graphics
   elements <https://svgwg.org/svg2-draft/struct.html#graphics-element>`__
   and the
   `use <https://svgwg.org/svg2-draft/struct.html#elementdef-use>`__
   element.
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   no
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   n/a
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   as specified
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   See prose in `Animation of Filters <#animation-of-filters>`__.
   Media:
   visual
   .. code:: prod

      <filter-value-list> = [ <filter-function> | <url> ]+

   <url>
      A filter reference to a `filter <#elementdef-filter>`__ element.
      For example url(commonfilters.svg#filter). If the filter
      references a non-existent object or the referenced object is not a
      filter element, then the whole filter chain is ignored. No filter
      is applied to the object.

   `<filter-function> <#typedef-filter-function>`__
      See `Filter Functions <#filter-functions>`__.

   none
      No filter effect gets applied.

   A value other than none for the `filter <#propdef-filter>`__ property
   results in the creation of a `containing
   block <https://drafts.csswg.org/css-display-4/#containing-block>`__
   for absolute and fixed positioned descendants unless the element it
   applies to is a document root element in the current `browsing
   context <https://html.spec.whatwg.org/multipage/document-sequences.html#browsing-context>`__.
   The list of functions are applied in the order provided.

   The first filter function or `filter <#elementdef-filter>`__
   reference in the list takes the element
   (`SourceGraphic <#attr-valuedef-in-sourcegraphic>`__) as the input
   image. Subsequent operations take the output from the previous filter
   function or filter reference as the input image. filter element
   reference functions can specify an alternate input, but still uses
   the previous output as its SourceGraphic.

   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   has no affect for Filter Functions. Filter Functions must operate in
   the sRGB color space.

   A computed value of other than none results in the creation of a
   `stacking context <https://www.w3.org/TR/CSS21/zindex.html>`__
   `[CSS21] <#biblio-css21>`__ the same way that CSS
   `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__
   does. All the elements descendants are rendered together as a group
   with the filter effect applied to the group as a whole.

   The `filter <#propdef-filter>`__ property has no effect on the
   geometry of the target element’s CSS boxes, although filter can
   contribute to the element’s `ink overflow
   area <https://drafts.csswg.org/css-overflow-3/#ink-overflow-region>`__.

   Conceptually, any parts of the drawing are effected by filter
   operations. This includes any content, background, borders, text
   decoration, outline and visible scrolling mechanism of the element to
   which the filter is applied, and those of its descendants. The filter
   operations are applied in the element’s `local coordinate
   system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__.

   The compositing model follows the `SVG compositing
   model <https://www.w3.org/TR/SVG11/render.html#Introduction>`__
   `[SVG11] <#biblio-svg11>`__: first any filter effect is applied, then
   any clipping, masking and opacity. As per SVG, the application of
   `filter <#propdef-filter>`__ has no effect on hit-testing.

   The `filter <#propdef-filter>`__ property is a `presentation
   attribute <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute>`__
   for SVG elements.

   ` <#issue-95bcf4be>`__ How does filter behave on fixed background
   images? `[Issue
   #238] <https://github.com/w3c/fxtf-drafts/issues/238>`__

   .. rubric:: 6. Filter Functions\ ` <#filter-functions>`__
      :name: filter-functions
      :class: heading settled

   .. rubric:: 6.1. Supported Filter
      Functions\ ` <#supported-filter-functions>`__
      :name: supported-filter-functions
      :class: heading settled

   .. code:: prod

      <filter-function> = <blur()> | <brightness()> | <contrast()> | <drop-shadow()> |    
      <grayscale()> | <hue-rotate()> | <invert()> | <opacity()> | <sepia()> | <saturate()>

   Unless defined otherwise, omitted values default to the `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation.

   Note: For some filter functions the default value for omitted values
   differes from their `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation. For the convenience of content creators, the
   default value for omitted values for
   `<grayscale()> <#funcdef-filter-grayscale>`__,
   `<sepia()> <#funcdef-filter-sepia>`__ and
   `<invert()> <#funcdef-filter-invert>`__ is 1 (apply the effect to
   100%) while the initial value for interpolation is 0 (no effect).

   .. code:: prod

      blur() = blur( <length>? )

   Applies a Gaussian blur to the input image. The passed parameter
   defines the value of the standard deviation to the Gaussian function.
   The parameter is specified a CSS length, but does not accept
   percentage values. The markup equivalent of this function is `given
   below <#blurEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 0px.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 0px.

   Note: Standard deviation is different to
   `box-shadow <https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow>`__
   s blur radius.

   The `ink overflow
   rectangle <https://drafts.csswg.org/css-overflow-3/#ink-overflow-rectangle>`__
   for a Gaussian blur is the axis-aligned boundary of the area in which
   the implementation draws the blur.

   | Note: A true Gaussian blur has theoretically infinite extent, but
     in practice all implementations use a finite-area approximation of
     a Gaussian blur. At the time of writing (January 2024) all major
     implementations use the familiar three-pass box blur approximation,
     which has extent:
   | ``((3 * sqrt(2 * π) / 4) * σ)``.

   .. code:: prod

      brightness() = brightness( [ <number> |  <percentage> ]? )

   Applies a linear multiplier to input image, making it appear more or
   less bright. A value of 0% will create an image that is completely
   black. A value of 100% leaves the input unchanged. Other values are
   linear multipliers on the effect. Values of amount over 100% are
   allowed, providing brighter results. The markup equivalent of this
   function is `given below <#brightnessEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 1.

   .. code:: prod

      contrast() = contrast( [ <number> |  <percentage> ]? )

   Adjusts the contrast of the input. A value of 0% will create an image
   that is completely gray. A value of 100% leaves the input unchanged.
   Values of amount over 100% are allowed, providing results with more
   contrast. The markup equivalent of this function is `given
   below <#contrastEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 1.

   .. code:: prod

      drop-shadow() = drop-shadow( [ <color>? && <length>{2,3} ] )

   Applies a drop shadow effect to the input image. A drop shadow is
   effectively a blurred, offset version of the input image’s alpha mask
   drawn in a particular color, composited below the image. Values are
   interpreted as for
   `box-shadow <https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow>`__
   `[CSS3BG] <#biblio-css3bg>`__ but with the optional 3rd
   `<length> <https://drafts.csswg.org/css-values-4/#length-value>`__
   value being the standard deviation instead of blur radius. The markup
   equivalent of this function is `given
   below <#dropshadowEquivalent>`__.

   The default value for omitted values is missing length values set to
   0 and the missing used color is taken from the color property.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is all length values set to 0 and the used color
   set to
   `transparent <https://drafts.csswg.org/css-color-4/#valdef-color-transparent>`__.

   Note: Spread values or multiple shadows are not accepted for this
   level of the specification.

   Note: Standard deviation is different to
   `box-shadow <https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow>`__
   s blur radius.

   The `ink overflow
   rectangle <https://drafts.csswg.org/css-overflow-3/#ink-overflow-rectangle>`__
   for a drop shadow is the extent of the offsets, plus the extent of
   the blur (if any) as described for
   `<blur()> <#funcdef-filter-blur>`__.

   .. code:: prod

      grayscale() = grayscale( [ <number> |  <percentage> ]? )

   Converts the input image to grayscale. The passed parameter defines
   the proportion of the conversion. A value of 100% is completely
   grayscale. A value of 0% leaves the input unchanged. Values between
   0% and 100% are linear multipliers on the effect. Values of amount
   over 100% are allowed but UAs must clamp the values to 1. The markup
   equivalent of this function is `given
   below <#grayscaleEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 0.

   .. code:: prod

      hue-rotate() = hue-rotate( [ <angle> | <zero> ]? )

   Applies a hue rotation on the input image. The passed parameter
   defines the number of degrees around the color circle the input
   samples will be adjusted. A value of 0deg leaves the input unchanged.
   Implementations must not normalize this value in order to allow
   animations beyond 360deg. The markup equivalent of this function is
   `given below <#huerotateEquivalent>`__.

   The unit identifier may be omitted if the
   `<angle> <https://drafts.csswg.org/css-values-4/#angle-value>`__ is
   zero.

   Default value when omitted is 0deg.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 0deg.

   .. code:: prod

      invert() = invert( [ <number> |  <percentage> ]? )

   Inverts the samples in the input image. The passed parameter defines
   the proportion of the conversion. A value of 100% is completely
   inverted. A value of 0% leaves the input unchanged. Values between 0%
   and 100% are linear multipliers on the effect. Values of amount over
   100% are allowed but UAs must clamp the values to 1. The markup
   equivalent of this function is `given below <#invertEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 0.

   .. code:: prod

      opacity() = opacity( [ <number> |  <percentage> ]? )

   Applies transparency to the samples in the input image. The passed
   parameter defines the proportion of the conversion. A value of 0% is
   completely transparent. A value of 100% leaves the input unchanged.
   Values between 0% and 100% are linear multipliers on the effect. This
   is equivalent to multiplying the input image samples by amount.
   Values of amount over 100% are allowed but UAs must clamp the values
   to 1. The markup equivalent of this function is `given
   below <#opacityEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 1.

   Note: The opacity filter function is not meant to be a shorthand of
   the
   `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__
   property. Furthermore, it allows setting the transparency of
   intermediate filter primitive results before passing to the next
   filter primitive. If the opacity filter function is set as last
   filter primitive, the value of the opacity property is multiplied on
   top of the value of the filter function, which may result in a more
   transparent content.

   .. code:: prod

      saturate() = saturate( [ <number> |  <percentage> ]? )

   Saturates the input image. The passed parameter defines the
   proportion of the conversion. A value of 0% is completely
   un-saturated. A value of 100% leaves the input unchanged. Other
   values are linear multipliers on the effect. Values of amount over
   100% are allowed, providing super-saturated results. The markup
   equivalent of this function is `given below <#saturateEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 1.

   .. code:: prod

      sepia() = sepia( [ <number> |  <percentage> ]? )

   Converts the input image to sepia. The passed parameter defines the
   proportion of the conversion. A value of 100% is completely sepia. A
   value of 0% leaves the input unchanged. Values between 0% and 100%
   are linear multipliers on the effect. Values of amount over 100% are
   allowed but UAs must clamp the values to 1. The markup equivalent of
   this function is `given below <#sepiaEquivalent>`__.

   Negative values are not allowed.

   Default value when omitted is 1.

   The `initial
   value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
   for interpolation is 0.

   .. rubric:: 6.2. Computed Values of Filter
      Functions\ ` <#computed-values-of-filter-functions>`__
      :name: computed-values-of-filter-functions
      :class: heading settled

   The values in a `<filter-function> <#typedef-filter-function>`__ are
   computed as specified, with these exceptions:

   -  Omitted values are included and compute to their defaults.

   -  `<drop-shadow()> <#funcdef-filter-drop-shadow>`__ starts with the
      computed value of
      `<color> <https://drafts.csswg.org/css-color-5/#typedef-color>`__
      followed by the computed value of the
      `<length> <https://drafts.csswg.org/css-values-4/#length-value>`__
      values.

   .. rubric:: 6.3. Serialization of Filter
      Functions\ ` <#serialization-of-filter-functions>`__
      :name: serialization-of-filter-functions
      :class: heading settled

   To serialize the `<filter-function> <#typedef-filter-function>`__,
   serialize as per their individual grammars, in the order the grammars
   are written in, avoiding
   `<calc()> <https://drafts.csswg.org/css-values-4/#funcdef-calc>`__
   expressions where possible, serialize filter arguments as specified,
   avoiding <calc()> transformations, joining space-separated tokens
   with a single space, and following each serialized comma with a
   single space.

   .. rubric:: 6.4. Interpolation of Filter
      Functions\ ` <#interpolation-of-filter-functions>`__
      :name: interpolation-of-filter-functions
      :class: heading settled

   For interpolation of values in
   `<filter-function> <#typedef-filter-function>`__\ s, the steps
   corresponding to the first matching condition in the following list
   must be run:

   `<blur()> <#funcdef-filter-blur>`__
      Interpolate values as
      `length <https://drafts.csswg.org/css-transitions/#animtype-length>`__.

   `<brightness()> <#funcdef-filter-brightness>`__
   `<contrast()> <#funcdef-filter-contrast>`__
   `<grayscale()> <#funcdef-filter-grayscale>`__
   `<invert()> <#funcdef-filter-invert>`__
   `<opacity()> <#funcdef-filter-opacity>`__
   `<saturate()> <#funcdef-filter-saturate>`__
   `<sepia()> <#funcdef-filter-sepia>`__
      Convert percentage values to numbers with 0% being relative to 0
      and 100% relative to 1. Interpolate values
      `number <https://drafts.csswg.org/css-transitions/#animtype-number>`__.

   `<hue-rotate()> <#funcdef-filter-hue-rotate>`__
      Interpolate values as
      `number <https://drafts.csswg.org/css-transitions/#animtype-number>`__.

   `<drop-shadow()> <#funcdef-filter-drop-shadow>`__
      Interpolate values as `shadow
      list <https://drafts.csswg.org/css-transitions/#animtype-shadow-list>`__.

   .. rubric:: 7. SVG Filter Sources: the
      `filter <#elementdef-filter>`__ element\ ` <#FilterElement>`__
      :name: FilterElement
      :class: heading settled

   Name:
   ``filter``
   Categories:
   None.
   Content model:
   Any number of the following elements, in any order:

   -  `descriptive <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermDescriptiveElement>`__
      —
      `desc <https://svgwg.org/svg2-draft/struct.html#elementdef-desc>`__,
      `title <https://svgwg.org/svg2-draft/struct.html#elementdef-title>`__,
      `metadata <https://svgwg.org/svg2-draft/struct.html#elementdef-metadata>`__
   -  `filter primitive <#elementdef-filter-primitive>`__ —
      `feBlend <#elementdef-feblend>`__,
      `feFlood <#elementdef-feflood>`__,
      `feColorMatrix <#elementdef-fecolormatrix>`__,
      `feComponentTransfer <#elementdef-fecomponenttransfer>`__,
      `feComposite <#elementdef-fecomposite>`__,
      `feConvolveMatrix <#elementdef-feconvolvematrix>`__,
      `feDiffuseLighting <#elementdef-fediffuselighting>`__,
      `feDisplacementMap <#elementdef-fedisplacementmap>`__,
      `feDropShadow <#elementdef-fedropshadow>`__,
      `feGaussianBlur <#elementdef-fegaussianblur>`__,
      `feImage <#elementdef-feimage>`__,
      `feMerge <#elementdef-femerge>`__,
      `feMorphology <#elementdef-femorphology>`__,
      `feOffset <#elementdef-feoffset>`__,
      `feSpecularLighting <#elementdef-fespecularlighting>`__,
      `feTile <#elementdef-fetile>`__,
      `feTurbulence <#elementdef-feturbulence>`__
   -  `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__
   -  `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
   -  `set <https://svgwg.org/specs/animations/#elementdef-set>`__

   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `externalResourcesRequired <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#ExternalResourcesRequiredAttribute>`__
   -  `x <#element-attrdef-filter-x>`__
   -  `y <#element-attrdef-filter-y>`__
   -  `width <#element-attrdef-filter-width>`__
   -  `height <#element-attrdef-filter-height>`__
   -  `filterUnits <#element-attrdef-filter-filterunits>`__
   -  `primitiveUnits <#element-attrdef-filter-primitiveunits>`__

   DOM Interfaces:
   `SVGFilterElement <#InterfaceSVGFilterElement>`__
   The description of the `filter <#elementdef-filter>`__ element
   follows:

   <number-optional-number> =
   `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__
   <number>?

   *Attribute definitions:*

   ``filterUnits`` = "``userSpaceOnUse`` \| ``objectBoundingBox``"
      See `filter region <#filter-region>`__.

   ``primitiveUnits`` = "``userSpaceOnUse`` \| ``objectBoundingBox``"
      Specifies the coordinate system for the various length values
      within the `filter primitives <#filter-primitive>`__ and for the
      attributes that define the `filter primitive
      subregion <#filter-primitive-subregion>`__.

      If `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ is
      equal to
      `userSpaceOnUse <#attr-valuedef-primitiveunits-userspaceonuse>`__,
      any length values within the filter definitions represent values
      in the current `local coordinate
      system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__
      in place at the time when the `filter <#elementdef-filter>`__
      element is referenced (i.e., the user coordinate system for the
      element referencing the filter element via a
      `filter <#propdef-filter>`__ property).

      If `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ is
      equal to
      `objectBoundingBox <#attr-valuedef-primitiveunits-objectboundingbox>`__,
      then any length values within the filter definitions represent
      fractions or percentages of the bounding box on the referencing
      element (see `object bounding box
      units <https://svgwg.org/svg2-draft/coords.html#ObjectBoundingBoxUnits>`__).
      Note that if only one number was specified in a
      `<number-optional-number> <#typedef-number-optional-number>`__
      value this number is expanded out before the primitiveUnits
      computation takes place.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ is
      `userSpaceOnUse <#attr-valuedef-primitiveunits-userspaceonuse>`__.

      Animatable: yes.

   ``x`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      See `filter region <#filter-region>`__.

   ``y`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      See `filter region <#filter-region>`__.

   ``width`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      See `filter region <#filter-region>`__.

   ``height`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      See `filter region <#filter-region>`__.

   ``filterRes``\ \ ` <#element-attrdef-filter-filterres>`__ = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The *filterRes* attribute was removed from the specification. See
      SVG 1.1 specification for the defintion
      `[SVG11] <#biblio-svg11>`__.

   Properties inherit into the `filter <#elementdef-filter>`__ element
   from its ancestors; properties do *not* inherit from the element
   referencing the filter element.

   `filter <#elementdef-filter>`__ elements are never rendered directly;
   their only usage is as something that can be referenced using the
   `filter <#propdef-filter>`__ property. The
   `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__
   property does not apply to the filter element; thus, filter elements
   are not directly rendered even if the display property is set to a
   value other than none, and filter elements are available for
   referencing even when the display property on the filter element or
   any of its ancestors is set to none.

   .. rubric:: 8. Filter Region\ ` <#FilterEffectsRegion>`__
      :name: FilterEffectsRegion
      :class: heading settled

   A `filter <#elementdef-filter>`__ element can define a filter region
   on the canvas to which a given filter effect applies and can provide
   a resolution for any intermediate continuous tone images used to
   process any raster-based `filter primitives <#filter-primitive>`__.
   The filter element has the following attributes which work together
   to define the filter region:

   `filterUnits <#element-attrdef-filter-filterunits>`__
      Defines the coordinate system for attributes
      `x <#element-attrdef-filter-x>`__,
      `y <#element-attrdef-filter-y>`__,
      `width <#element-attrdef-filter-width>`__,
      `height <#element-attrdef-filter-height>`__.

      If `filterUnits <#element-attrdef-filter-filterunits>`__ is equal
      to `userSpaceOnUse <#attr-valuedef-filterunits-userspaceonuse>`__,
      `x <#element-attrdef-filter-x>`__,
      `y <#element-attrdef-filter-y>`__,
      `width <#element-attrdef-filter-width>`__,
      `height <#element-attrdef-filter-height>`__ represent values in
      the current user coordinate system in place at the time when the
      `filter <#elementdef-filter>`__ element is referenced (i.e., the
      user coordinate system for the element referencing the filter
      element via a `filter <#propdef-filter>`__ property).

      If `filterUnits <#element-attrdef-filter-filterunits>`__ is equal
      to
      `objectBoundingBox <#attr-valuedef-filterunits-objectboundingbox>`__,
      then `x <#element-attrdef-filter-x>`__,
      `y <#element-attrdef-filter-y>`__,
      `width <#element-attrdef-filter-width>`__,
      `height <#element-attrdef-filter-height>`__ represent fractions or
      percentages of the bounding box on the referencing element (see
      `object bounding box
      units <https://svgwg.org/svg2-draft/coords.html#ObjectBoundingBoxUnits>`__).

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `filterUnits <#element-attrdef-filter-filterunits>`__ is
      `objectBoundingBox <#attr-valuedef-filterunits-objectboundingbox>`__.

      Animatable: yes.

   `x <#element-attrdef-filter-x>`__, `y <#element-attrdef-filter-y>`__, `width <#element-attrdef-filter-width>`__, `height <#element-attrdef-filter-height>`__
      These attributes define a rectangular region on the canvas to
      which this filter applies.

      The coordinate system for these attributes depends on the value
      for attribute
      `filterUnits <#element-attrdef-filter-filterunits>`__.

      The bounds of this rectangle act as a hard clipping region for
      each `filter primitive <#filter-primitive>`__ included with a
      given `filter <#elementdef-filter>`__ element; thus, if the effect
      of a given filter primitive would extend beyond the bounds of the
      rectangle (this sometimes happens when using a
      `feGaussianBlur <#elementdef-fegaussianblur>`__ filter primitive
      with a very large
      `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__),
      parts of the effect will get clipped.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `x <#element-attrdef-filter-x>`__ and
      `y <#element-attrdef-filter-y>`__ is -10%.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `width <#element-attrdef-filter-width>`__ and
      `height <#element-attrdef-filter-height>`__ is 120%.

      ng of the element which referenced the filter.

      Animatable: yes.

   Note: Both of the two possible value for
   `filterUnits <#element-attrdef-filter-filterunits>`__ (i.e.,
   `objectBoundingBox <#attr-valuedef-filterunits-objectboundingbox>`__
   and `userSpaceOnUse <#attr-valuedef-filterunits-userspaceonuse>`__)
   result in a `filter region <#filter-region>`__ whose coordinate
   system has its X-axis and Y-axis each parallel to the X-axis and
   Y-axis, respectively, of the `local coordinate
   system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__
   for the element to which the filter will be applied.

   Note: Sometimes implementers can achieve faster performance when the
   filter region can be mapped directly to device pixels; thus, for best
   performance on display devices, it is suggested that authors define
   their region such that the user agent can align the `filter
   region <#filter-region>`__ pixel-for-pixel with the background. In
   particular, for best filter effects performance, avoid rotating or
   skewing the user coordinate system.

   Note: It is often necessary to provide padding space because the
   filter effect might impact bits slightly outside the tight-fitting
   `bounding
   box <https://svgwg.org/svg2-draft/coords.html#bounding-box>`__ on a
   given object. For these purposes, it is possible to provide negative
   percentage values for `x <#element-attrdef-filter-x>`__,
   `y <#element-attrdef-filter-y>`__ and percentages values greater than
   100% for `width <#element-attrdef-filter-width>`__,
   `height <#element-attrdef-filter-height>`__. This, for example, is
   why the defaults for the filter region are
   ``x="-10%" y="-10%" width="120%" height="120%"``.

   .. rubric:: 9. Filter primitives\ ` <#FilterPrimitivesOverview>`__
      :name: FilterPrimitivesOverview
      :class: heading settled

   .. rubric:: 9.1. Overview\ ` <#FilterPrimitivesOverviewIntro>`__
      :name: FilterPrimitivesOverviewIntro
      :class: heading settled

   This section describes the various filter primitives that can be
   assembled to achieve a particular filter effect.

   Unless otherwise stated, all image filters operate on premultiplied
   RGBA samples. Some filters like
   `feColorMatrix <#elementdef-fecolormatrix>`__ and
   `feComponentTransfer <#elementdef-fecomponenttransfer>`__ work more
   naturally on non-premultiplied data. For the time of the filter
   operation, all color values must temporarily be transformed to the
   required color multiplication of the current filter.

   Note: All input images are assumed to be in premultiplied RGBA. User
   agents may optimize performance by using non-premultiplied data
   buffering.

   All raster effect filtering operations take 1 to N input RGBA images,
   additional attributes as parameters, and produce a single output RGBA
   image.

   The RGBA result from each filter primitive will be clamped into the
   allowable ranges for colors and opacity values. Thus, for example,
   the result from a given `filter primitive <#filter-primitive>`__ will
   have any negative color values or opacity values adjusted up to
   color/opacity of zero.

   The color space in which a particular `filter
   primitive <#filter-primitive>`__ performs its operations is
   determined by the value of the property
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   on the given filter primitive. A different property,
   `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__
   determines the color space for other color operations. Because these
   two properties have different initial values
   (color-interpolation-filters has an initial value of
   `linearRGB <#valdef-color-interpolation-filters-linearrgb>`__ whereas
   color-interpolation has an initial value of
   `sRGB <#valdef-color-interpolation-filters-srgb>`__), in some cases
   to achieve certain results (e.g., when coordinating gradient
   interpolation with a filtering operation) it will be necessary to
   explicitly set color-interpolation to linearRGB or
   color-interpolation-filters to sRGB on particular elements. Note that
   the examples below do not explicitly set either color-interpolation
   or color-interpolation-filters, so the initial values for these
   properties apply to the examples.

   Sometimes `filter primitives <#filter-primitive>`__ result in
   undefined pixels. For example, filter primitive
   `feOffset <#elementdef-feoffset>`__ can shift an image down and to
   the right, leaving undefined pixels at the top and left. In these
   cases, the undefined pixels are set to transparent black.

   To provide high quality rendering, all filter primitives should
   operate in a device dependent coordinate space, the operating
   coordinate space, taking device pixel density, user space
   transformations and zooming into account. To provide a platform
   independent alignment, attribute and property values are often
   relative to a coordinate system described by the
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__
   attribute. User agents must scale these relative attributes and
   properties to the `operating coordinate
   space <#operating-coordinate-space>`__.

   Note: On high resolution devices, attribute and property values that
   are relative to the
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ usually
   need to be scaled up. User agents may reduce the resolution of filter
   primitives on limited platform resources.

   Note: Some attribute or property values from the filter primitives
   `feConvolveMatrix <#elementdef-feconvolvematrix>`__ and `light
   sources <#light-source>`__ can not be mapped from the coordinate
   space defined by the
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ attribute
   to the `operating coordinate space <#operating-coordinate-space>`__.

   .. rubric:: 9.2. Common filter primitive
      attributes\ ` <#CommonAttributes>`__
      :name: CommonAttributes
      :class: heading settled

   The following filter primitive attributes are available for all
   filter primitives:

   *Attribute definitions:*

   ``x`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      The minimum x coordinate for the subregion which restricts
      calculation and rendering of the given `filter
      primitive <#filter-primitive>`__. See `filter primitive
      subregion <#filter-primitive-subregion>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `x <#element-attrdef-filter-primitive-x>`__ is 0%.

      Animatable: yes.

   ``y`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      The minimum y coordinate for the subregion which restricts
      calculation and rendering of the given `filter
      primitive <#filter-primitive>`__. See `filter primitive
      subregion <#filter-primitive-subregion>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `y <#element-attrdef-filter-primitive-y>`__ is 0%.

      Animatable: yes.

   ``width`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      The width of the subregion which restricts calculation and
      rendering of the given `filter primitive <#filter-primitive>`__.
      See `filter primitive subregion <#filter-primitive-subregion>`__.

      A negative or zero value disables the effect of the given filter
      primitive (i.e., the result is a transparent black image).

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `width <#element-attrdef-filter-primitive-width>`__ is 100%.

      Animatable: yes.

   ``height`` = "`<length-percentage> <https://drafts.csswg.org/css-values-4/#typedef-length-percentage>`__"
      The height of the subregion which restricts calculation and
      rendering of the given `filter primitive <#filter-primitive>`__.
      See `filter primitive subregion <#filter-primitive-subregion>`__.

      A negative or zero value must disable the effect of the given
      filter primitive (i.e., the result is a transparent black image).

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `height <#element-attrdef-filter-primitive-height>`__ is 100%.

      Animatable: yes.

   ``result`` = "*<filter-primitive-reference>*"
      `<filter-primitive-reference> <#typedef-result-filter-primitive-reference>`__
      is an
      `<custom-ident> <https://drafts.csswg.org/css-values-4/#identifier-value>`__
      `[CSS3VAL] <#biblio-css3val>`__ and an assigned name for this
      `filter primitive <#filter-primitive>`__. If supplied, then
      graphics that result from processing this filter primitive can be
      referenced by an `in <#element-attrdef-filter-primitive-in>`__
      attribute on a subsequent filter primitive within the same
      `filter <#elementdef-filter>`__ element. If no value is provided,
      the output will only be available for re-use as the implicit input
      into the next filter primitive if that filter primitive provides
      no value for its in attribute.

   Most filter primitives take other filter primitives as input. The
   following attribute is representative for all input attributes to
   reference other filter primitives:

   *Attribute definitions:*

   ``in`` = "`SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ *\|* `SourceAlpha <#attr-valuedef-in-sourcealpha>`__ *\|* `BackgroundImage <#attr-valuedef-in-backgroundimage>`__ *\|* `BackgroundAlpha <#attr-valuedef-in-backgroundalpha>`__ *\|* `FillPaint <#attr-valuedef-in-fillpaint>`__ *\|* `StrokePaint <#attr-valuedef-in-strokepaint>`__ *\|* `<filter-primitive-reference> <#typedef-result-filter-primitive-reference>`__"
      Identifies input for the given filter primitive. The value can be
      either one of six keywords or can be a string which matches a
      previous `result <#element-attrdef-filter-primitive-result>`__
      attribute value within the same `filter <#elementdef-filter>`__
      element. If no value is provided and this is the first `filter
      primitive <#filter-primitive>`__, then this filter primitive will
      use `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ as its
      input. If no value is provided and this is a subsequent filter
      primitive, then this filter primitive will use the result from the
      previous filter primitive as its input.

      If the value for
      `result <#element-attrdef-filter-primitive-result>`__ appears
      multiple times within a given `filter <#elementdef-filter>`__
      element, then a reference to that result will use the closest
      preceding `filter primitive <#filter-primitive>`__ with the given
      value for attribute result.

      Forward references to results are not allowed, and will be treated
      as if no result was specified.

      References to non-existent results will be treated as if no result
      was specified.

      Definitions for the six keywords:

      ``SourceGraphic``
         This keyword represents the graphics elements that were the
         original input into the `filter <#elementdef-filter>`__
         element. For raster effects `filter
         primitives <#filter-primitive>`__, the graphics elements will
         be rasterized into an initially clear RGBA raster in image
         space. Pixels left untouched by the original graphic will be
         left clear. The image is specified to be rendered in linear
         RGBA pixels. The alpha channel of this image captures any
         anti-aliasing specified by SVG. (Since the raster is linear,
         the alpha channel of this image will represent the exact
         percent coverage of each pixel.)

      ``SourceAlpha``
         This keyword represents the graphics elements that were the
         original input into the `filter <#elementdef-filter>`__
         element. `SourceAlpha <#attr-valuedef-in-sourcealpha>`__ has
         all of the same rules as
         `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ except that
         only the alpha channel is used. The input image is an RGBA
         image consisting of implicitly black color values for the RGB
         channels, but whose alpha channel is the same as SourceGraphic.

         Note: If this option is used, then some implementations might
         need to rasterize the graphics elements in order to extract the
         alpha channel.

      ``BackgroundImage``
         This keyword represents the back drop defined by the current
         isolation group behind the `filter region <#filter-region>`__
         at the time that the `filter <#elementdef-filter>`__ element
         was invoked. See
         `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__
         property `[COMPOSITING-1] <#biblio-compositing-1>`__.

      ``BackgroundAlpha``
         Same as `BackgroundImage <#attr-valuedef-in-backgroundimage>`__
         except only the alpha channel is used. See
         `SourceAlpha <#attr-valuedef-in-sourcealpha>`__ and the
         `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__
         property `[COMPOSITING-1] <#biblio-compositing-1>`__.

      ``FillPaint``
         This keyword represents the value of the
         `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__
         property on the target element for the filter effect. The
         `FillPaint <#attr-valuedef-in-fillpaint>`__ image has
         conceptually infinite extent. Frequently this image is opaque
         everywhere, but it might not be if the "paint" itself has
         alpha, as in the case of a gradient or pattern which itself
         includes transparent or semi-transparent parts. If fill
         references a paint server, then the coordinate space of the
         paint server is the coordinate space defined for the filtered
         object. E.g if the paint server requires to use the
         `objectBoundingBox <#attr-valuedef-primitiveunits-objectboundingbox>`__
         of the object, the object bounding box of the filtered object
         defines the reference size of the paint server. If the paint
         server requires to use the
         `userSpaceOnUse <#attr-valuedef-primitiveunits-userspaceonuse>`__,
         the nearest viewport in the `local coordinate
         system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__
         of the filtered object defines the reference size of the paint
         server.

      ``StrokePaint``
         This keyword represents the value of the
         `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__
         property on the target element for the filter effect. The
         `StrokePaint <#attr-valuedef-in-strokepaint>`__ image has
         conceptually infinite extent. See
         `FillPaint <#attr-valuedef-in-fillpaint>`__ above for more
         details.

      Animatable: yes.

   .. rubric:: 9.3. Filter primitive tree\ ` <#FilterPrimitiveTree>`__
      :name: FilterPrimitiveTree
      :class: heading settled

   Filter primitives with no or one filter primitive input can be linked
   together to a filter chain. E.g. the filter primitive representation
   of a `<filter-value-list> <#typedef-filter-value-list>`__ with two or
   more `<filter-function> <#typedef-filter-function>`__\ s is an
   example of a filter chain. Every filter primitive takes the result of
   the previous filter primitive as input.

   .. container:: example
      :name: example-fd38116b

      ` <#example-fd38116b>`__ A simple example of a
      `filter <#elementdef-filter>`__ element with its filter primitive
      children.
      .. code:: highlight

         <filter id="filter">
           <feColorMatrix type="hueRotate" values="45"/>
           <feOffset dx="10" dy="10"/>
           <feGaussianBlur stdDeviation="3"/>
         </filter>

      `feColorMatrix <#elementdef-fecolormatrix>`__,
      `feOffset <#elementdef-feoffset>`__ and
      `feGaussianBlur <#elementdef-fegaussianblur>`__ create a filter
      chain.

      `feColorMatrix <#elementdef-fecolormatrix>`__ takes SourceGraphic
      as input. The result is the input of
      `feOffset <#elementdef-feoffset>`__ with its result being the
      input of `feGaussianBlur <#elementdef-fegaussianblur>`__.

   Some filter primitives may have more than one filter primitive
   inputs. With the use of the
   `in <#element-attrdef-filter-primitive-in>`__ and
   `result <#element-attrdef-filter-primitive-result>`__ attributes it
   is possible to combine multiple filter primitives to a complex filter
   structure. Due to the non-forward reference restriction of filter
   primitives, every filter structure can be represented as a tree, the
   filter primitive tree\ \ ` <#filter-primitive-tree>`__. The root
   filter primitive of the filter primitive tree is the most
   subsequential primitive of `filter <#elementdef-filter>`__ elements
   filter primitive children.

   A filter chain is one possible filter structure that can also be
   represented in a filter primitive tree. Therefore, filter chains are
   referred to as filter primitive trees onwards as well.

   A `filter <#elementdef-filter>`__ element may have one or more filter
   primitive trees. The filter primitive tree whose subsequent filter
   primitive is the last filter primitive child of the filter elements
   is the primary filter primitive
   tree\ \ ` <#primary-filter-primitive-tree>`__.

   Only the primary filter primitive tree contributes to the filter
   process. Implementations may chose to ignore all other possible
   filter primitive trees.

   If a `filter <#elementdef-filter>`__ element has no filter primitive
   tree then the element the filter applies to does not get rendered.

   .. container:: example
      :name: example-2c693d1d

      ` <#example-2c693d1d>`__ An example of multiple filter primitive
      trees:
      .. code:: highlight

         <filter id="filter">
           <-- The first filter primitive tree. Ignored for filter process. -->
           <feColorMatrix type="hueRotate" values="45"/>
           <feOffset dx="10" dy="10"/>
           <feGaussianBlur stdDeviation="3"/>
           <-- The primary filter primitive tree. -->
           <feFlood flood-color="green" result="flood"/>
           <feComposite operator="in" in="SourceAlpha" in2="flood"/>
         </filter>

      The above filter has 2 filter primitive trees with the filter
      primitives:

      #. `feColorMatrix <#elementdef-fecolormatrix>`__,
         `feOffset <#elementdef-feoffset>`__ and
         `feGaussianBlur <#elementdef-fegaussianblur>`__ (with
         feGaussianBlur being the root filter primitive of the tree) as
         well as

      #. `feFlood <#elementdef-feflood>`__ and
         `feComposite <#elementdef-fecomposite>`__ (with feComposite as
         the root filter primitive of the tree).

      Both filter primitive trees are not connected. Only the 2nd, the
      primary filter primitive tree contributes to the filter process.
      The first tree can get ignored by implementations.

   .. rubric:: 9.4. Filter primitive
      subregion\ ` <#FilterPrimitiveSubRegion>`__
      :name: FilterPrimitiveSubRegion
      :class: heading settled

   All `filter primitives <#filter-primitive>`__ have attributes
   `x <#element-attrdef-filter-primitive-x>`__,
   `y <#element-attrdef-filter-primitive-y>`__,
   `width <#element-attrdef-filter-primitive-width>`__ and
   `height <#element-attrdef-filter-primitive-height>`__ which together
   identify a filter primitive subregion which restricts calculation and
   rendering of the given filter primitive. The x, y, width and height
   attributes are defined according to the same rules as other filter
   primitives coordinate and length attributes and thus represent values
   in the coordinate system established by attribute
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
   `filter <#elementdef-filter>`__ element.

   `x <#element-attrdef-filter-primitive-x>`__,
   `y <#element-attrdef-filter-primitive-y>`__,
   `width <#element-attrdef-filter-primitive-width>`__ and
   `height <#element-attrdef-filter-primitive-height>`__ default to the
   union (i.e., tightest fitting bounding box) of the subregions defined
   for all referenced nodes. If there are no referenced nodes (e.g., for
   `feImage <#elementdef-feimage>`__ or
   `feTurbulence <#elementdef-feturbulence>`__), or one or more of the
   referenced nodes is a standard input (one of
   `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__,
   `SourceAlpha <#attr-valuedef-in-sourcealpha>`__,
   `BackgroundImage <#attr-valuedef-in-backgroundimage>`__,
   `BackgroundAlpha <#attr-valuedef-in-backgroundalpha>`__,
   `FillPaint <#attr-valuedef-in-fillpaint>`__ or
   `StrokePaint <#attr-valuedef-in-strokepaint>`__), or for
   `feTile <#elementdef-fetile>`__ (which is special because its
   principal function is to replicate the referenced node in X and Y and
   thereby produce a usually larger result), the default subregion is
   0%, 0%, 100%, 100%, where as a special-case the percentages are
   relative to the dimensions of the `filter region <#filter-region>`__,
   thus making the default `filter primitive
   subregion <#filter-primitive-subregion>`__ equal to the filter
   region.

   If the `filter primitive subregion <#filter-primitive-subregion>`__
   has a negative or zero width or height, the effect of the filter
   primitive is disabled.

   The `filter region <#filter-region>`__ acts as a hard clip clipping
   rectangle on the filter primitive’s input image(s).

   The `filter primitive subregion <#filter-primitive-subregion>`__ acts
   as a hard clip clipping rectangle on the filter primitive result.

   All intermediate offscreens are defined to not exceed the
   intersection of the `filter primitive
   subregion <#filter-primitive-subregion>`__ with the `filter
   region <#filter-region>`__. The filter region and any of the filter
   primitive subregions are to be set up such that all offscreens are
   made big enough to accommodate any pixels which even partly intersect
   with either the filter region or the filter primitive subregions.

   .. container:: example
      :name: example-ee9442c9

      ` <#example-ee9442c9>`__ `feTile <#elementdef-fetile>`__
      references a previous filter primitive and then stitches the tiles
      together based on the `filter primitive
      subregion <#filter-primitive-subregion>`__ of the referenced
      filter primitive in order to fill its own filter primitive
      subregion.
      .. code:: highlight

         <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
           <defs>
             <filter id="flood" x="0" y="0" width="100%" height="100%" primitiveUnits="objectBoundingBox">
                <feFlood x="25%" y="25%" width="50%" height="50%"
                   flood-color="green" flood-opacity="0.75"/>
             </filter>
             <filter id="blend" primitiveUnits="objectBoundingBox">
                <feBlend x="25%" y="25%" width="50%" height="50%"
                   in2="SourceGraphic" mode="multiply"/>
             </filter>
             <filter id="merge" primitiveUnits="objectBoundingBox">
                <feMerge x="25%" y="25%" width="50%" height="50%">
                 <feMergeNode in="SourceGraphic"/>
                 <feMergeNode in="FillPaint"/>
                </feMerge>
             </filter>
           </defs>

           <g fill="none" stroke="blue" stroke-width="4">
              <rect width="200" height="200"/>
              <line x2="200" y2="200"/>
              <line x1="200" y2="200"/>
           </g>
           <circle fill="green" filter="url(#flood)" cx="100" cy="100" r="90"/>

           <g transform="translate(200 0)">
             <g fill="none" stroke="blue" stroke-width="4">
                <rect width="200" height="200"/>
                <line x2="200" y2="200"/>
                <line x1="200" y2="200"/>
             </g>
             <circle fill="green" filter="url(#blend)" cx="100" cy="100" r="90"/>
           </g>

           <g transform="translate(0 200)">
             <g fill="none" stroke="blue" stroke-width="4">
                <rect width="200" height="200"/>
                <line x2="200" y2="200"/>
                <line x1="200" y2="200"/>
             </g>
             <circle fill="green" fill-opacity="0.5" filter="url(#merge)" cx="100" cy="100" r="90"/>
           </g>
         </svg>

      .. container:: figure

         |Example for subregions|
         Example for subregions

      `View this example as SVG <examples/filtersubregion00.svg>`__

      In the example above there are three rectangles that each have a
      cross and a circle in them. The circle element in each one has a
      different filter applied, but with the same `filter primitive
      subregion <#filter-primitive-subregion>`__. The filter output
      should be limited to the filter primitive subregion so you should
      never see the circles themselves, just the rectangles that make up
      the filter primitive subregion.

      -  The upper left rectangle shows an
         `feFlood <#elementdef-feflood>`__ with `flood-opacity:
         75% <#propdef-flood-opacity>`__ so the cross should be visible
         through the green rect in the middle.

      -  The lower left rectangle shows an
         `feMerge <#elementdef-femerge>`__ that merges
         `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ with
         `FillPaint <#attr-valuedef-in-fillpaint>`__. Since the circle
         has ``fill-opacity="0.5"`` it will also be transparent so that
         the cross is visible through the green rect in the middle.

      -  The upper right rectangle shows an
         `feBlend <#elementdef-feblend>`__ that has ``mode="multiply"``.
         Since the circle in this case isn’t transparent the result is
         totally opaque. The rect should be dark green and the cross
         should not be visible through it.

   .. rubric:: 9.5. Filter primitive
      `feBlend <#elementdef-feblend>`__\ ` <#feBlendElement>`__
      :name: feBlendElement
      :class: heading settled

   Name:
   ``feBlend``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `in2 <#element-attrdef-feblend-in2>`__
   -  `mode <#element-attrdef-feblend-mode>`__

   DOM Interfaces:
   `SVGFEBlendElement <#InterfaceSVGFEBlendElement>`__
   This filter blends two objects together using commonly used imaging
   software blending modes. It performs a pixel-wise combination of two
   input images. (See `[COMPOSITING-1] <#biblio-compositing-1>`__.)

   *Attribute definitions:*

   ``mode`` = "`<blend-mode> <https://drafts.fxtf.org/compositing-2/#ltblendmodegt>`__"
      One of the blend modes defined by “Compositing and Blending Level
      1” `[COMPOSITING-1] <#biblio-compositing-1>`__ with the input
      `in <#element-attrdef-filter-primitive-in>`__ representing the
      source ``Cs`` and the second input
      `in2 <#element-attrdef-feblend-in2>`__ representing the
      `backdrop <https://drafts.fxtf.org/compositing-2/#backdrop>`__
      ``Cb``. The output of this filter primitive ``Cm`` is the result
      of blending ``Cs`` with ``Cb``.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `mode <#element-attrdef-feblend-mode>`__ is
      `normal <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-normal>`__.

      Animatable: yes.

   ``no-composite`` = "``no-composite``\ \ ` <#attr-valuedef-no-composite-no-composite>`__"
      If the `no-composite <#element-attrdef-feblend-no-composite>`__
      attribute is present, the specified blend mode must not apply
      alpha compositing. See
      `Blending <https://drafts.fxtf.org/compositing-1/#blending>`__
      `[COMPOSITING-1] <#biblio-compositing-1>`__ for the "mixing"
      formula without compositing. Otherwise, implementations must
      combine the blend mode specified by
      `mode <#element-attrdef-feblend-mode>`__ with the `Source
      Over <https://drafts.fxtf.org/compositing-1/#porterduffcompositingoperators_srcover>`__
      composite operator. See
      `Blending <https://drafts.fxtf.org/compositing-1/#blending>`__
      [COMPOSITING-1] for the "mixing" formula with compositing.

      Note: This attribute is an addition to the
      `feBlend <#elementdef-feblend>`__ element defintion in SVG 1.1.
      `no-composite <#element-attrdef-feblend-no-composite>`__, when
      specified, is meant to avoid "double-compositing" effects when
      blending an input source with the backdrop of the filtered object
      (E.g. using the
      `BackgroundImage <#attr-valuedef-in-backgroundimage>`__ filter
      primitive). For the majority of use cases authors will not need to
      specify the no-composite attribute.

      Animatable: no.

   ``in2`` = "*(see* `in <#element-attrdef-filter-primitive-in>`__ *attribute)*"
      The second input image to the blending operation.

      Animatable: yes.

   The
   `normal <https://drafts.fxtf.org/compositing-1/#valdef-blend-mode-normal>`__
   blend mode with alpha compositing is equivalent to
   ``operator="over"`` on the `feComposite <#elementdef-fecomposite>`__
   filter primitive, matches the blending method used by
   `feMerge <#elementdef-femerge>`__ and matches the `simple alpha
   compositing <https://www.w3.org/TR/SVG11/masking.html#SimpleAlphaBlending>`__
   technique used in SVG for all compositing outside of filter effects.

   .. container:: example
      :name: example-50c05d26

      ` <#example-50c05d26>`__
      .. code:: highlight

         <svg width="5cm" height="5cm" viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg">
           <title>Example feBlend - Examples of feBlend modes</title>
           <desc>Five text strings blended into a gradient,
                 with one text string for each of the five feBlend modes.</desc>
           <defs>
             <linearGradient id="MyGradient" gradientUnits="userSpaceOnUse"
                     x1="100" y1="0" x2="300" y2="0">
               <stop offset="0" stop-color="#000000" />
               <stop offset=".33" stop-color="#ffffff" />
               <stop offset=".67" stop-color="#ff0000" />
               <stop offset="1" stop-color="#808080" />
             </linearGradient>
             <filter id="Normal">
               <feBlend mode="normal" in2="BackgroundImage" in="SourceGraphic"/>
             </filter>
             <filter id="Multiply">
               <feBlend mode="multiply" in2="BackgroundImage" in="SourceGraphic"/>
             </filter>
             <filter id="Screen">
               <feBlend mode="screen" in2="BackgroundImage" in="SourceGraphic"/>
             </filter>
             <filter id="Darken">
               <feBlend mode="darken" in2="BackgroundImage" in="SourceGraphic"/>
             </filter>
             <filter id="Lighten">
               <feBlend mode="lighten" in2="BackgroundImage" in="SourceGraphic"/>
             </filter>
           </defs>
           <rect fill="none" stroke="blue"
                 x="1" y="1" width="498" height="498"/>
           <g isolation="isolate" >
             <rect x="100" y="20" width="300" height="460" fill="url(#MyGradient)" />
             <g font-family="Verdana" font-size="75" fill="#888888" fill-opacity=".6" >
               <text x="50" y="90" filter="url(#Normal)" >Normal</text>
               <text x="50" y="180" filter="url(#Multiply)" >Multiply</text>
               <text x="50" y="270" filter="url(#Screen)" >Screen</text>
               <text x="50" y="360" filter="url(#Darken)" >Darken</text>
               <text x="50" y="450" filter="url(#Lighten)" >Lighten</text>
             </g>
           </g>
         </svg>

      .. container:: figure

         |Example of feBlend|
         Example of feBlend

      `View this example as SVG <examples/feBlend.svg>`__

   .. rubric:: 9.6. Filter primitive
      `feColorMatrix <#elementdef-fecolormatrix>`__\ ` <#feColorMatrixElement>`__
      :name: feColorMatrixElement
      :class: heading settled

   Name:
   ``feColorMatrix``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `type <#element-attrdef-fecolormatrix-type>`__
   -  `values <#element-attrdef-fecolormatrix-values>`__

   DOM Interfaces:
   `SVGFEColorMatrixElement <#InterfaceSVGFEColorMatrixElement>`__
   This filter applies a matrix transformation:

   :math:`\begin{bmatrix}
   {R'} \\
   {G'} \\
   {B'} \\
   {A'} \\
   1
   \end{bmatrix} = {\begin{bmatrix}
   a_{00} & a_{01} & a_{02} & a_{03} & a_{04} \\
   a_{10} & a_{11} & a_{12} & a_{13} & a_{14} \\
   a_{20} & a_{21} & a_{22} & a_{23} & a_{24} \\
   a_{30} & a_{31} & a_{32} & a_{33} & a_{34} \\
   0 & 0 & 0 & 0 & 1
   \end{bmatrix} \cdot \begin{bmatrix}
   R \\
   G \\
   B \\
   A \\
   1
   \end{bmatrix}}`
   on the RGBA color and alpha values of every pixel on the input
   graphics to produce a result with a new set of RGBA color and alpha
   values.

   The calculations are performed on non-premultiplied color values.

   *Attribute definitions:*

   ``type`` = "``matrix`` \| ``saturate`` \| ``hueRotate`` \| ``luminanceToAlpha``"
      Indicates the type of matrix operation. The keyword
      `matrix <#attr-valuedef-type-matrix>`__ indicates that a full 5x4
      matrix of values will be provided. The other keywords represent
      convenience shortcuts to allow commonly used color operations to
      be performed without specifying a complete matrix.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `type <#element-attrdef-fecolormatrix-type>`__ is
      `matrix <#attr-valuedef-type-matrix>`__.

      Animatable: yes.

   ``values`` = "*list of* `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__\ *\ s*"
      The contents of `values <#element-attrdef-fecolormatrix-values>`__
      depends on the value of attribute
      `type <#element-attrdef-fecolormatrix-type>`__:

      -  For ``type="matrix"``,
         `values <#element-attrdef-fecolormatrix-values>`__ is a list of
         20 matrix values (a00 a01 a02 a03 a04 a10 a11 ... a34),
         separated by whitespace and/or a comma. For example, the
         identity matrix could be expressed as:

         ::

            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"

      -  For ``type="saturate"``,
         `values <#element-attrdef-fecolormatrix-values>`__ is a single
         real number value. A
         `saturate <#attr-valuedef-type-saturate>`__ operation is
         equivalent to the following matrix operation:

         :math:`\begin{bmatrix}
         {R'} \\
         {G'} \\
         {B'} \\
         {A'} \\
         1
         \end{bmatrix} = {\begin{bmatrix}
         {0.213 + 0.787s} & {0.715 - 0.715s} & {0.072 - 0.072s} & 0 & 0 \\
         {0.213 - 0.213s} & {0.715 + 0.285s} & {0.072 - 0.072s} & 0 & 0 \\
         {0.213 - 0.213s} & {0.715 - 0.715s} & {0.072 + 0.928s} & 0 & 0 \\
         0 & 0 & 0 & 1 & 0 \\
         0 & 0 & 0 & 0 & 1
         \end{bmatrix} \cdot \begin{bmatrix}
         R \\
         G \\
         B \\
         A \\
         1
         \end{bmatrix}}`

         Note: A value of 0 produces a fully desaturated (grayscale)
         filter result, while a value of 1 passes the filter input image
         through unchanged. Values outside the 0..1 range under- or
         oversaturates the filter input image respectively.

         Note: The precision of the luminance coefficients increased in
         comparison to previous specification texts
         `[Cmam] <#biblio-cmam>`__.

      -  For ``type="hueRotate"``,
         `values <#element-attrdef-fecolormatrix-values>`__ is a single
         one real number value (degrees). A
         `hueRotate <#attr-valuedef-type-huerotate>`__ operation is
         equivalent to the following matrix operation:

         :math:`\begin{bmatrix}
         {R'} \\
         {G'} \\
         {B'} \\
         {A'} \\
         1
         \end{bmatrix} = {\begin{bmatrix}
         a_{00} & a_{01} & a_{02} & 0 & 0 \\
         a_{10} & a_{11} & a_{12} & 0 & 0 \\
         a_{20} & a_{21} & a_{22} & 0 & 0 \\
         0 & 0 & 0 & 1 & 0 \\
         0 & 0 & 0 & 0 & 1
         \end{bmatrix} \cdot \begin{bmatrix}
         R \\
         G \\
         B \\
         A \\
         1
         \end{bmatrix}}`

         where the terms a00, a01, etc. are calculated as follows:

         :math:`{\begin{bmatrix}
         a_{00} & a_{01} & a_{02} \\
         a_{10} & a_{11} & a_{12} \\
         a_{20} & a_{21} & a_{22}
         \end{bmatrix} = {\begin{bmatrix}
         {+ 0.213} & {+ 0.715} & {+ 0.072} \\
         {+ 0.213} & {+ 0.715} & {+ 0.072} \\
         {+ 0.213} & {+ 0.715} & {+ 0.072}
         \end{bmatrix} + \cos}}{{{({\mathit{hueRotate}\mathit{value}})} \cdot \begin{bmatrix}
         {+ 0.787} & {- 0.715} & {- 0.072} \\
         {- 0.213} & {+ 0.285} & {- 0.072} \\
         {- 0.213} & {- 0.715} & {+ 0.928}
         \end{bmatrix}} + \sin}{{({\mathit{hueRotate}\mathit{value}})} \cdot \begin{bmatrix}
         {- 0.213} & {- 0.715} & {+ 0.928} \\
         {+ 0.143} & {+ 0.140} & {- 0.283} \\
         {- 0.787} & {+ 0.715} & {+ 0.072}
         \end{bmatrix}}`

         Thus, the upper left term of the hue matrix turns out to be:

         :math:`{a_{00} = {0.2127 + \cos}}{{{({\mathit{hueRotate}\mathit{value}})} \cdot 0.7873} - \sin}{{({\mathit{hueRotate}\mathit{value}})} \cdot 0.2127}`

      -  For ``type="luminanceToAlpha"``,
         `values <#element-attrdef-fecolormatrix-values>`__ is not
         applicable. A
         `luminanceToAlpha <#attr-valuedef-type-luminancetoalpha>`__
         operation is equivalent to the following matrix operation:

         :math:`\begin{bmatrix}
         {R'} \\
         {G'} \\
         {B'} \\
         {A'} \\
         1
         \end{bmatrix} = {\begin{bmatrix}
         0 & 0 & 0 & 0 & 0 \\
         0 & 0 & 0 & 0 & 0 \\
         0 & 0 & 0 & 0 & 0 \\
         0.2126 & 0.7152 & 0.0722 & 0 & 0 \\
         0 & 0 & 0 & 0 & 1
         \end{bmatrix} \cdot \begin{bmatrix}
         R \\
         G \\
         B \\
         A \\
         1
         \end{bmatrix}}`

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `values <#element-attrdef-fecolormatrix-values>`__

      if ``type="matrix"``
         defaults to the identity matrix

      if ``type="saturate"``
         defaults to the value 1

      if ``type="hueRotate"``
         defaults to the value 0 which results in the identity matrix.

      If the number of entries in the
      `values <#element-attrdef-fecolormatrix-values>`__ list does not
      match the required number of entries by the
      `type <#element-attrdef-fecolormatrix-type>`__, the filter
      primitive acts as a `pass through
      filter <#pass-through-filter>`__.

      Animatable: yes.

   .. container:: example
      :name: example-05772ccd

      ` <#example-05772ccd>`__
      .. code:: highlight

         <svg width="8cm" height="5cm" viewBox="0 0 800 500"
              xmlns="http://www.w3.org/2000/svg">
           <title>Example feColorMatrix - Examples of feColorMatrix operations</title>
           <desc>Five text strings showing the effects of feColorMatrix:
                 an unfiltered text string acting as a reference,
                 use of the feColorMatrix matrix option to convert to grayscale,
                 use of the feColorMatrix saturate option,
                 use of the feColorMatrix hueRotate option,
                 and use of the feColorMatrix luminanceToAlpha option.</desc>
           <defs>
             <linearGradient id="MyGradient" gradientUnits="userSpaceOnUse"
                     x1="100" y1="0" x2="500" y2="0">
               <stop offset="0" stop-color="#ff00ff" />
               <stop offset=".33" stop-color="#88ff88" />
               <stop offset=".67" stop-color="#2020ff" />
               <stop offset="1" stop-color="#d00000" />
             </linearGradient>
             <filter id="Matrix" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feColorMatrix type="matrix" in="SourceGraphic"
                    values=".33 .33 .33 0 0
                            .33 .33 .33 0 0
                            .33 .33 .33 0 0
                            .33 .33 .33 0 0"/>
             </filter>
             <filter id="Saturate40" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feColorMatrix type="saturate" in="SourceGraphic" values="0.4"/>
             </filter>
             <filter id="HueRotate90" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feColorMatrix type="hueRotate" in="SourceGraphic" values="90"/>
             </filter>
             <filter id="LuminanceToAlpha" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feColorMatrix type="luminanceToAlpha" in="SourceGraphic" result="a"/>
               <feComposite in="SourceGraphic" in2="a" operator="in" />
             </filter>
           </defs>
           <rect fill="none" stroke="blue"
                 x="1" y="1" width="798" height="498"/>
           <g font-family="Verdana" font-size="75"
                     font-weight="bold" fill="url(#MyGradient)" >
             <rect x="100" y="0" width="500" height="20" />
             <text x="100" y="90">Unfiltered</text>
             <text x="100" y="190" filter="url(#Matrix)" >Matrix</text>
             <text x="100" y="290" filter="url(#Saturate40)" >Saturate</text>
             <text x="100" y="390" filter="url(#HueRotate90)" >HueRotate</text>
             <text x="100" y="490" filter="url(#LuminanceToAlpha)" >Luminance</text>
           </g>
         </svg>

      .. container:: figure

         |Example|
         Example of feColorMatrix

      `View this example as SVG <examples/feColorMatrix.svg>`__

   .. rubric:: 9.7. Filter primitive
      `feComponentTransfer <#elementdef-fecomponenttransfer>`__\ ` <#feComponentTransferElement>`__
      :name: feComponentTransferElement
      :class: heading settled

   Name:
   ``feComponentTransfer``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `feFuncR <#elementdef-fefuncr>`__, `feFuncG <#elementdef-fefuncg>`__,
   `feFuncB <#elementdef-fefuncb>`__, `feFuncA <#elementdef-fefunca>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__

   DOM Interfaces:
   `SVGFEComponentTransferElement <#InterfaceSVGFEComponentTransferElement>`__
   This filter primitive performs component-wise remapping of data as
   follows:

   ::

      R' = feFuncR( R )G' = feFuncG( G )
      B' = feFuncB( B )
      A' = feFuncA( A )

   for every pixel. It allows operations like brightness adjustment,
   contrast adjustment, color balance or thresholding.

   The calculations are performed on non-premultiplied color values.

   The child elements of a
   `feComponentTransfer <#elementdef-fecomponenttransfer>`__ element
   specify the transfer functions for the four channels:

   -  `feFuncR <#elementdef-fefuncr>`__ - transfer function for the red
      component of the input graphic

   -  `feFuncG <#elementdef-fefuncg>`__ - transfer function for the
      green component of the input graphic

   -  `feFuncB <#elementdef-fefuncb>`__ - transfer function for the blue
      component of the input graphic

   -  `feFuncA <#elementdef-fefunca>`__ - transfer function for the
      alpha component of the input graphic

   The set of `feFuncR <#elementdef-fefuncr>`__,
   `feFuncG <#elementdef-fefuncg>`__, `feFuncB <#elementdef-fefuncb>`__,
   `feFuncA <#elementdef-fefunca>`__ elements are also called transfer
   function elements.

   The following rules apply to the processing of the
   `feComponentTransfer <#elementdef-fecomponenttransfer>`__ element:

   -  If more than one `transfer function
      element <#transfer-function-element>`__ of the same kind is
      specified, the last occurrence is to be used.

   -  If any of the `transfer function
      elements <#transfer-function-element>`__ are unspecified, the
      `feComponentTransfer <#elementdef-fecomponenttransfer>`__ must be
      processed as if those transfer function elements were specified
      with their `type <#element-attrdef-fecomponenttransfer-type>`__
      attributes set to identity.

   .. rubric:: 9.7.1. Transfer function
      `feFuncR <#elementdef-fefuncr>`__\ ` <#feFuncRElement>`__
      :name: feFuncRElement
      :class: heading settled

   Name:
   ``feFuncR``
   Categories:
   `transfer function element <#transfer-function-element>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `transfer function element
      attributes <#transfer-function-element-attributes>`__\  —
      `type <#element-attrdef-fecomponenttransfer-type>`__,
      `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__,
      `slope <#element-attrdef-fecomponenttransfer-slope>`__,
      `intercept <#element-attrdef-fecomponenttransfer-intercept>`__,
      `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__,
      `exponent <#element-attrdef-fecomponenttransfer-exponent>`__,
      `offset <#element-attrdef-fecomponenttransfer-offset>`__

   DOM Interfaces:
   `SVGFEFuncRElement <#InterfaceSVGFEFuncRElement>`__
   The attributes below are the transfer function element attributes,
   which apply to the `transfer function
   elements <#transfer-function-element>`__.

   *Attribute definitions:*

   ``type`` = "`identity <#attr-valuedef-type-identity>`__ \| `table <#attr-valuedef-type-table>`__ \| `discrete <#attr-valuedef-type-discrete>`__ \| `linear <#attr-valuedef-type-linear>`__ \| `gamma <#attr-valuedef-type-gamma>`__"
      Indicates the type of component transfer function. The type of
      function determines the applicability of the other attributes.

      In the following, C is the initial component (e.g.,
      `feFuncR <#elementdef-fefuncr>`__), C' is the remapped component;
      both in the closed interval [0,1].

      -  For ``identity``:

         ::

            C' = C

      -  For ``table``, the function is defined by linear interpolation
         between values given in the attribute
         `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__.
         The table has *n+1* values (i.e., v\ :sub:`0` to v\ :sub:`n`)
         specifying the start and end values for *n* evenly sized
         interpolation regions. Interpolations use the following
         formula:

         For a value ``C < 1`` find ``k`` such that:

         ``k/n <= C < (k+1)/n``

         The result ``C'`` is given by:

         ``C' = v``\ :sub:```k```\ ``+ (C - k/n)*n * (v``\ :sub:```k+1```\ ``- v``\ :sub:```k```\ ``)``

         If ``C = 1`` then:

         ``C' = v``\ :sub:```n```\ ``.``

      -  For ``discrete``, the function is defined by the step function
         given in the attribute
         `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__,
         which provides a list of *n* values (i.e., v\ :sub:`0` to
         v\ :sub:`n-1`) in order to identify a step function consisting
         of *n* steps. The step function is defined by the following
         formula:

         For a value ``C < 1`` find ``k`` such that:

         ``k/n <= C < (k+1)/n``

         The result ``C'`` is given by:

         ``C' = v``\ :sub:```k```

         If ``C = 1`` then:

         ``C' = v``\ :sub:```n-1```\ ``.``

      -  For ``linear``, the function is defined by the following linear
         equation:

         ``C' =``\ ```slope`` <#element-attrdef-fecomponenttransfer-slope>`__\ ``* C +``\ ```intercept`` <#element-attrdef-fecomponenttransfer-intercept>`__

      -  For ``gamma``, the function is defined by the following
         exponential function:

         ``C' =``\ ```amplitude`` <#element-attrdef-fecomponenttransfer-amplitude>`__\ ``* pow(C,``\ ```exponent`` <#element-attrdef-fecomponenttransfer-exponent>`__\ ``) +``\ ```offset`` <#element-attrdef-fecomponenttransfer-offset>`__

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `type <#element-attrdef-fecomponenttransfer-type>`__ is
      `identity <#attr-valuedef-type-identity>`__.

      Animatable: yes.

   ``tableValues`` = "*(list of* `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__\ *\ s)*"
      When ``type="table"``, the list of
      `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__
      s *v0,v1,...vn*, separated by white space and/or a comma, which
      define the lookup table. An empty list results in an identity
      transfer function.

      If the attribute is not specified, then the effect is as if an
      empty list were provided.

      Animatable: yes.

   ``slope`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      When ``type="linear"``, the slope of the linear function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `slope <#element-attrdef-fecomponenttransfer-slope>`__ is 1.

      Animatable: yes.

   ``intercept`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      When ``type="linear"``, the intercept of the linear function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `intercept <#element-attrdef-fecomponenttransfer-intercept>`__
      is 0.

      Animatable: yes.

   ``amplitude`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      When ``type="gamma"``, the amplitude of the gamma function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__
      is 1.

      Animatable: yes.

   ``exponent`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      When ``type="gamma"``, the exponent of the gamma function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `exponent <#element-attrdef-fecomponenttransfer-exponent>`__
      is 1.

      Animatable: yes.

   ``offset`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      When ``type="gamma"``, the offset of the gamma function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `offset <#element-attrdef-fecomponenttransfer-offset>`__ is 0.

      Animatable: yes.

   .. container:: example
      :name: example-49a7ba07

      ` <#example-49a7ba07>`__
      .. code:: highlight

         <svg width="8cm" height="4cm" viewBox="0 0 800 400"
              xmlns="http://www.w3.org/2000/svg">
           <title>Example feComponentTransfer - Examples of feComponentTransfer operations</title>
           <desc>Four text strings showing the effects of feComponentTransfer:
                 an identity function acting as a reference,
                 use of the feComponentTransfer table option,
                 use of the feComponentTransfer linear option,
                 and use of the feComponentTransfer gamma option.</desc>
           <defs>
             <linearGradient id="MyGradient" gradientUnits="userSpaceOnUse"
                     x1="100" y1="0" x2="600" y2="0">
               <stop offset="0" stop-color="#ff0000" />
               <stop offset=".33" stop-color="#00ff00" />
               <stop offset=".67" stop-color="#0000ff" />
               <stop offset="1" stop-color="#000000" />
             </linearGradient>
             <filter id="Identity" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feComponentTransfer>
                 <feFuncR type="identity"/>
                 <feFuncG type="identity"/>
                 <feFuncB type="identity"/>
                 <feFuncA type="identity"/>
               </feComponentTransfer>
             </filter>
             <filter id="Table" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feComponentTransfer>
                 <feFuncR type="table" tableValues="0 0 1 1"/>
                 <feFuncG type="table" tableValues="1 1 0 0"/>
                 <feFuncB type="table" tableValues="0 1 1 0"/>
               </feComponentTransfer>
             </filter>
             <filter id="Linear" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feComponentTransfer>
                 <feFuncR type="linear" slope=".5" intercept=".25"/>
                 <feFuncG type="linear" slope=".5" intercept="0"/>
                 <feFuncB type="linear" slope=".5" intercept=".5"/>
               </feComponentTransfer>
             </filter>
             <filter id="Gamma" filterUnits="objectBoundingBox"
                     x="0%" y="0%" width="100%" height="100%">
               <feComponentTransfer>
                 <feFuncR type="gamma" amplitude="2" exponent="5" offset="0"/>
                 <feFuncG type="gamma" amplitude="2" exponent="3" offset="0"/>
                 <feFuncB type="gamma" amplitude="2" exponent="1" offset="0"/>
               </feComponentTransfer>
             </filter>
           </defs>
           <rect fill="none" stroke="blue"
                 x="1" y="1" width="798" height="398"/>
           <g font-family="Verdana" font-size="75"
                     font-weight="bold" fill="url(#MyGradient)" >
             <rect x="100" y="0" width="600" height="20" />
             <text x="100" y="90">Identity</text>
             <text x="100" y="190" filter="url(#Table)" >TableLookup</text>
             <text x="100" y="290" filter="url(#Linear)" >LinearFunc</text>
             <text x="100" y="390" filter="url(#Gamma)" >GammaFunc</text>
           </g>
         </svg>

      .. container:: figure

         |Example for feComponentTransfer|
         Example for feComponentTransfer

      `View this example as SVG <examples/feComponentTransfer.svg>`__

   .. rubric:: 9.7.2. Transfer function
      `feFuncG <#elementdef-fefuncg>`__\ ` <#feFuncGElement>`__
      :name: feFuncGElement
      :class: heading settled

   Name:
   ``feFuncG``
   Categories:
   `transfer function element <#transfer-function-element>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `transfer function element
      attributes <#transfer-function-element-attributes>`__\  —
      `type <#element-attrdef-fecomponenttransfer-type>`__,
      `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__,
      `slope <#element-attrdef-fecomponenttransfer-slope>`__,
      `intercept <#element-attrdef-fecomponenttransfer-intercept>`__,
      `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__,
      `exponent <#element-attrdef-fecomponenttransfer-exponent>`__,
      `offset <#element-attrdef-fecomponenttransfer-offset>`__

   DOM Interfaces:
   `SVGFEFuncGElement <#InterfaceSVGFEFuncGElement>`__
   See `feFuncR <#elementdef-fefuncr>`__ for the definitions of the
   attribute values.

   .. rubric:: 9.7.3. Transfer function
      `feFuncB <#elementdef-fefuncb>`__\ ` <#feFuncBElement>`__
      :name: feFuncBElement
      :class: heading settled

   Name:
   ``feFuncB``
   Categories:
   `transfer function element <#transfer-function-element>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `transfer function element
      attributes <#transfer-function-element-attributes>`__\  —
      `type <#element-attrdef-fecomponenttransfer-type>`__,
      `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__,
      `slope <#element-attrdef-fecomponenttransfer-slope>`__,
      `intercept <#element-attrdef-fecomponenttransfer-intercept>`__,
      `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__,
      `exponent <#element-attrdef-fecomponenttransfer-exponent>`__,
      `offset <#element-attrdef-fecomponenttransfer-offset>`__

   DOM Interfaces:
   `SVGFEFuncBElement <#InterfaceSVGFEFuncBElement>`__
   See `feFuncR <#elementdef-fefuncr>`__ for the definitions of the
   attribute values.

   .. rubric:: 9.7.4. Transfer function
      `feFuncA <#elementdef-fefunca>`__\ ` <#feFuncAElement>`__
      :name: feFuncAElement
      :class: heading settled

   Name:
   ``feFuncA``
   Categories:
   `transfer function element <#transfer-function-element>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `transfer function element
      attributes <#transfer-function-element-attributes>`__\  —
      `type <#element-attrdef-fecomponenttransfer-type>`__,
      `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__,
      `slope <#element-attrdef-fecomponenttransfer-slope>`__,
      `intercept <#element-attrdef-fecomponenttransfer-intercept>`__,
      `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__,
      `exponent <#element-attrdef-fecomponenttransfer-exponent>`__,
      `offset <#element-attrdef-fecomponenttransfer-offset>`__

   DOM Interfaces:
   `SVGFEFuncAElement <#InterfaceSVGFEFuncAElement>`__
   See `feFuncR <#elementdef-fefuncr>`__ for the definitions of the
   attribute values.

   .. rubric:: 9.8. Filter primitive
      `feComposite <#elementdef-fecomposite>`__\ ` <#feCompositeElement>`__
      :name: feCompositeElement
      :class: heading settled

   Name:
   ``feComposite``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `in2 <#element-attrdef-fecomposite-in2>`__
   -  `operator <#element-attrdef-fecomposite-operator>`__
   -  `k1 <#element-attrdef-fecomposite-k1>`__
   -  `k2 <#element-attrdef-fecomposite-k2>`__
   -  `k3 <#element-attrdef-fecomposite-k3>`__
   -  `k4 <#element-attrdef-fecomposite-k4>`__

   DOM Interfaces:
   `SVGFECompositeElement <#InterfaceSVGFECompositeElement>`__
   This filter performs the combination of the two input images
   pixel-wise in image space using one of the Porter-Duff
   `[PORTERDUFF] <#biblio-porterduff>`__ compositing operations:
   `over <#attr-valuedef-fecomposite-operator-over>`__, in, atop, out,
   xor, lighter `[COMPOSITING-1] <#biblio-compositing-1>`__.
   Additionally, a component-wise *arithmetic* operation (with the
   result clamped between [0..1]) can be applied.

   The *arithmetic* operation is useful for combining the output from
   the `feDiffuseLighting <#elementdef-fediffuselighting>`__ and
   `feSpecularLighting <#elementdef-fespecularlighting>`__ filters with
   texture data. It is also useful for implementing *dissolve*. If the
   *arithmetic* operation is chosen, each result pixel is computed using
   the following formula:

   ::

      result = k1*i1*i2 + k2*i1 + k3*i2 + k4

   where:

   -  ``i1`` and ``i2`` indicate the corresponding pixel channel values
      of the input image, which map to
      `in <#element-attrdef-filter-primitive-in>`__ and
      `in2 <#element-attrdef-fecomposite-in2>`__ respectively

   -  ``k1, k2, k3`` and ``k4`` indicate the values of the attributes
      with the same name

   For this filter primitive, the extent of the resulting image might
   grow as described in the section that describes the `filter primitive
   subregion <#filter-primitive-subregion>`__.

   *Attribute definitions:*

   ``operator`` = "``over`` \| ``in`` \| ``out`` \| ``atop`` \| ``xor`` \| ``lighter``\ \ ` <#attr-valuedef-fecomposite-operator-lighter>`__ \| ``arithmetic``"
      The compositing operation that is to be performed. All of the
      `operator <#element-attrdef-fecomposite-operator>`__ types except
      arithmetic match the corresponding operation as described in
      `[COMPOSITING-1] <#biblio-compositing-1>`__ with
      `in <#element-attrdef-filter-primitive-in>`__ representing the
      source and `in2 <#element-attrdef-fecomposite-in2>`__ representing
      the destination. The arithmetic operator is described above.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `operator <#element-attrdef-fecomposite-operator>`__ is
      `over <#attr-valuedef-fecomposite-operator-over>`__.

      Animatable: yes.

   ``k1`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Only applicable if ``operator="arithmetic"``.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `k1 <#element-attrdef-fecomposite-k1>`__ is 0.

      Animatable: yes.

   ``k2`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Only applicable if ``operator="arithmetic"``.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `k2 <#element-attrdef-fecomposite-k2>`__ is 0.

      Animatable: yes.

   ``k3`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Only applicable if ``operator="arithmetic"``.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `k3 <#element-attrdef-fecomposite-k3>`__ is 0.

      Animatable: yes.

   ``k4`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Only applicable if ``operator="arithmetic"``.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `k4 <#element-attrdef-fecomposite-k4>`__ is 0.

      Animatable: yes.

   ``in2`` = "*(see* `in <#element-attrdef-filter-primitive-in>`__ *attribute)*"
      The second input image to the compositing operation.

      Animatable: yes.

   Note: Compositing and Blending
   `[COMPOSITING-1] <#biblio-compositing-1>`__ defines more compositing
   keywords. The functionality of the additional keywords can be
   archived by switching the input filter primitives
   `in <#element-attrdef-filter-primitive-in>`__ and
   `in2 <#element-attrdef-fecomposite-in2>`__.

   .. container:: example
      :name: example-5847e5f6

      ` <#example-5847e5f6>`__
      .. code:: highlight

         <svg width="330" height="195" viewBox="0 0 1100 650"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <title>Example feComposite - Examples of feComposite operations</title>
           <desc>Four rows of six pairs of overlapping triangles depicting
                 the six different feComposite operators under different
                 opacity values and different clearing of the background.</desc>
           <defs>
             <desc>Define two sets of six filters for each of the six compositing operators.
                   The first set wipes out the background image by flooding with opaque white.
                   The second set does not wipe out the background, with the result
                   that the background sometimes shines through and is other cases
                   is blended into itself (i.e., "double-counting").</desc>
             <filter id="overFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="inFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="outFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="atopFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="xorFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="arithmeticFlood" filterUnits="objectBoundingBox"
                     x="-5%" y="-5%" width="110%" height="110%">
               <feFlood flood-color="#ffffff" flood-opacity="1" result="flood"/>
               <feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                            operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/>
               <feMerge> <feMergeNode in="flood"/> <feMergeNode in="comp"/> </feMerge>
             </filter>
             <filter id="overNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="over" result="comp"/>
             </filter>
             <filter id="inNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="in" result="comp"/>
             </filter>
             <filter id="outNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="out" result="comp"/>
             </filter>
             <filter id="atopNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="atop" result="comp"/>
             </filter>
             <filter id="xorNoFlood" filterUnits="objectBoundingBox" x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" operator="xor" result="comp"/>
             </filter>
             <filter id="arithmeticNoFlood" filterUnits="objectBoundingBox"
                     x="-5%" y="-5%" width="110%" height="110%">
               <feComposite in="SourceGraphic" in2="BackgroundImage" result="comp"
                            operator="arithmetic" k1=".5" k2=".5" k3=".5" k4=".5"/>
             </filter>
             <path id="Blue100" d="M 0 0 L 100 0 L 100 100 z" fill="#00ffff" />
             <path id="Red100" d="M 0 0 L 0 100 L 100 0 z" fill="#ff00ff" />
             <path id="Blue50" d="M 0 125 L 100 125 L 100 225 z" fill="#00ffff" fill-opacity=".5" />
             <path id="Red50" d="M 0 125 L 0 225 L 100 125 z" fill="#ff00ff" fill-opacity=".5" />
             <g id="TwoBlueTriangles">
               <use xlink:href="#Blue100"/>
               <use xlink:href="#Blue50"/>
             </g>
             <g id="BlueTriangles">
               <use transform="translate(275,25)" xlink:href="#TwoBlueTriangles"/>
               <use transform="translate(400,25)" xlink:href="#TwoBlueTriangles"/>
               <use transform="translate(525,25)" xlink:href="#TwoBlueTriangles"/>
               <use transform="translate(650,25)" xlink:href="#TwoBlueTriangles"/>
               <use transform="translate(775,25)" xlink:href="#TwoBlueTriangles"/>
               <use transform="translate(900,25)" xlink:href="#TwoBlueTriangles"/>
             </g>
           </defs>

           <rect fill="none" stroke="blue" x="1" y="1" width="1098" height="648"/>
           <g font-family="Verdana" font-size="40" shape-rendering="crispEdges">
             <desc>Render the examples using the filters that draw on top of
                   an opaque white surface, thus obliterating the background.</desc>
             <g isolation="isolate">
               <text x="15" y="75">opacity 1.0</text>
               <text x="15" y="115" font-size="27">(with feFlood)</text>
               <text x="15" y="200">opacity 0.5</text>
               <text x="15" y="240" font-size="27">(with feFlood)</text>
               <use xlink:href="#BlueTriangles"/>
               <g transform="translate(275,25)">
                 <use xlink:href="#Red100" filter="url(#overFlood)" />
                 <use xlink:href="#Red50" filter="url(#overFlood)" />
                 <text x="5" y="275">over</text>
               </g>
               <g transform="translate(400,25)">
                 <use xlink:href="#Red100" filter="url(#inFlood)" />
                 <use xlink:href="#Red50" filter="url(#inFlood)" />
                 <text x="35" y="275">in</text>
               </g>
               <g transform="translate(525,25)">
                 <use xlink:href="#Red100" filter="url(#outFlood)" />
                 <use xlink:href="#Red50" filter="url(#outFlood)" />
                 <text x="15" y="275">out</text>
               </g>
               <g transform="translate(650,25)">
                 <use xlink:href="#Red100" filter="url(#atopFlood)" />
                 <use xlink:href="#Red50" filter="url(#atopFlood)" />
                 <text x="10" y="275">atop</text>
               </g>
               <g transform="translate(775,25)">
                 <use xlink:href="#Red100" filter="url(#xorFlood)" />
                 <use xlink:href="#Red50" filter="url(#xorFlood)" />
                 <text x="15" y="275">xor</text>
               </g>
               <g transform="translate(900,25)">
                 <use xlink:href="#Red100" filter="url(#arithmeticFlood)" />
                 <use xlink:href="#Red50" filter="url(#arithmeticFlood)" />
                 <text x="-25" y="275">arithmetic</text>
               </g>
             </g>
             <g transform="translate(0,325)" isolation="isolate">
             <desc>Render the examples using the filters that do not obliterate
                   the background, thus sometimes causing the background to continue
                   to appear in some cases, and in other cases the background
                   image blends into itself ("double-counting").</desc>
               <text x="15" y="75">opacity 1.0</text>
               <text x="15" y="115" font-size="27">(without feFlood)</text>
               <text x="15" y="200">opacity 0.5</text>
               <text x="15" y="240" font-size="27">(without feFlood)</text>
               <use xlink:href="#BlueTriangles"/>
               <g transform="translate(275,25)">
                 <use xlink:href="#Red100" filter="url(#overNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#overNoFlood)" />
                 <text x="5" y="275">over</text>
               </g>
               <g transform="translate(400,25)">
                 <use xlink:href="#Red100" filter="url(#inNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#inNoFlood)" />
                 <text x="35" y="275">in</text>
               </g>
               <g transform="translate(525,25)">
                 <use xlink:href="#Red100" filter="url(#outNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#outNoFlood)" />
                 <text x="15" y="275">out</text>
               </g>
               <g transform="translate(650,25)">
                 <use xlink:href="#Red100" filter="url(#atopNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#atopNoFlood)" />
                 <text x="10" y="275">atop</text>
               </g>
               <g transform="translate(775,25)">
                 <use xlink:href="#Red100" filter="url(#xorNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#xorNoFlood)" />
                 <text x="15" y="275">xor</text>
               </g>
               <g transform="translate(900,25)">
                 <use xlink:href="#Red100" filter="url(#arithmeticNoFlood)" />
                 <use xlink:href="#Red50" filter="url(#arithmeticNoFlood)" />
                 <text x="-25" y="275">arithmetic</text>
               </g>
             </g>
           </g>
         </svg>

      .. container:: figure

         |Example of feComposite|
         Example of feComposite

      `View this example as SVG <examples/feComposite.svg>`__

   .. rubric:: 9.9. Filter primitive
      `feConvolveMatrix <#elementdef-feconvolvematrix>`__\ ` <#feConvolveMatrixElement>`__
      :name: feConvolveMatrixElement
      :class: heading settled

   Name:
   ``feConvolveMatrix``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `order <#element-attrdef-order>`__
   -  `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__
   -  `divisor <#element-attrdef-feconvolvematrix-divisor>`__
   -  `bias <#element-attrdef-feconvolvematrix-bias>`__
   -  `targetX <#element-attrdef-feconvolvematrix-targetx>`__
   -  `targetY <#element-attrdef-feconvolvematrix-targety>`__
   -  `edgeMode <#element-attrdef-feconvolvematrix-edgemode>`__
   -  `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__
   -  `preserveAlpha <#element-attrdef-feconvolvematrix-preservealpha>`__

   DOM Interfaces:
   `SVGFEConvolveMatrixElement <#InterfaceSVGFEConvolveMatrixElement>`__
   feConvolveMatrix applies a matrix convolution filter effect. A
   convolution combines pixels in the input image with neighboring
   pixels to produce a resulting image. A wide variety of imaging
   operations can be achieved through convolutions, including blurring,
   edge detection, sharpening, embossing and beveling.

   A matrix convolution is based on an n-by-m matrix (the convolution
   kernel) which describes how a given pixel value in the input image is
   combined with its neighboring pixel values to produce a resulting
   pixel value. Each result pixel is determined by applying the kernel
   matrix to the corresponding source pixel and its neighboring pixels.
   The basic convolution formula which is applied to each color value
   for a given pixel is:

   :math:`{color}_{X,Y} = {\frac{{\sum\limits_{i = 0}^{{orderY} - 1}{\sum\limits_{j = 0}^{{orderX} - 1}{source}_{{{x - {targetX}} + j},{{y - \mathit{targetY}} + i}}}} \cdot {kernalMatrix}_{{{{orderX} - j} - 1,}{{{orderY} - i} - 1}}}{divisor} + {{bias} \cdot {alpha}_{x,y}}}`
   where "orderX" and "orderY" represent the X and Y values for the
   `order <#element-attrdef-order>`__ attribute, "targetX" represents
   the value of the
   `targetX <#element-attrdef-feconvolvematrix-targetx>`__ attribute,
   "targetY" represents the value of the
   `targetY <#element-attrdef-feconvolvematrix-targety>`__ attribute,
   "kernelMatrix" represents the value of the
   `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__
   attribute, "divisor" represents the value of the
   `divisor <#element-attrdef-feconvolvematrix-divisor>`__ attribute,
   and "bias" represents the value of the
   `bias <#element-attrdef-feconvolvematrix-bias>`__ attribute.

   In the above formulas the values in the kernel matrix are applied
   such that the kernel matrix is rotated 180 degrees relative to the
   source and destination images in order to match convolution theory as
   described in many computer graphics textbooks.

   To illustrate, suppose you have a input image which is 5 pixels by 5
   pixels, whose color values for one of the color channels are as
   follows:

   :math:`\begin{bmatrix}
   0 & 20 & 40 & 235 & 235 \\
   100 & 120 & 140 & 235 & 235 \\
   200 & 220 & 240 & 235 & 235 \\
   255 & 255 & 255 & 255 & 255 \\
   255 & 255 & 255 & 255 & 255
   \end{bmatrix}`
   and you define a 3-by-3 convolution kernel as follows:

   :math:`\begin{bmatrix}
   1 & 2 & 3 \\
   4 & 5 & 6 \\
   7 & 8 & 9
   \end{bmatrix}`
   Let’s focus on the color value at the second row and second column of
   the image (source pixel value is 120). Assuming the simplest case
   (where the input image’s pixel grid aligns perfectly with the
   kernel’s pixel grid) and assuming default values for attributes
   `divisor <#element-attrdef-feconvolvematrix-divisor>`__,
   `targetX <#element-attrdef-feconvolvematrix-targetx>`__ and
   `targetY <#element-attrdef-feconvolvematrix-targety>`__, then
   resulting color value will be:

   :math:`{resultChannel}_{2,2} = \frac{{{{{{{{{9 \cdot 0} + {8 \cdot 20}} + {7 \cdot 40}} + {6 \cdot 100}} + {5 \cdot 120}} + {4 \cdot 140}} + {3 \cdot 200}} + {2 \cdot 220}} + {1 \cdot 240}}{{{{{{{{9 + 8} + 7} + 6} + 5} + 4} + 3} + 2} + 1}`
   Because they operate on pixels, matrix convolutions are inherently
   resolution-dependent. To make
   `feConvolveMatrix <#elementdef-feconvolvematrix>`__ produce
   resolution-independent results, an explicit value should be provided
   for the attribute
   `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__.

   `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__,
   in combination with the other attributes, defines an implicit pixel
   grid in the filter effects coordinate system (i.e., the coordinate
   system established by the
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__
   attribute). The input image will be temporarily rescaled to match its
   pixels with kernelUnitLength. The convolution happens on the
   resampled image. After applying the convolution, the image is
   resampled back to the original resolution.

   When the image must be resampled to match the coordinate system
   defined by
   `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__
   prior to convolution, or resampled to match the device coordinate
   system after convolution, it is recommended that high quality viewers
   make use of appropriate interpolation techniques, for example
   bilinear or bicubic. Depending on the speed of the available
   interpolents, this choice may be affected by the
   `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
   property setting. Note that implementations might choose approaches
   that minimize or eliminate resampling when not necessary to produce
   proper results, such as when the document is zoomed out such that
   kernelUnitLength is considerably smaller than a device pixel.

   *Attribute definitions:*

   ``order`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      Indicates the number of cells in each dimension for
      `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__.
      The values provided must be
      `<integer> <https://drafts.csswg.org/css-values-4/#integer-value>`__
      s greater than zero. Values that are not integers will be
      truncated, i.e. rounded to the closest integer value towards zero.
      The first number, <orderX>, indicates the number of columns in the
      matrix. The second number, <orderY>, indicates the number of rows
      in the matrix. If <orderY> is not provided, it defaults to
      <orderX>.

      It is recommended that only small values (e.g., 3) be used; higher
      values may result in very high CPU overhead and usually do not
      produce results that justify the impact on performance.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `order <#element-attrdef-order>`__ is 3.

      Animatable: yes.

   ``kernelMatrix`` = "*<list of numbers>*"
      The list of
      `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__
      s that make up the kernel matrix for the convolution. Values are
      separated by space characters and/or a comma. The number of
      entries in the list must equal <orderX> times <orderY>.

      If the result of ``orderX * orderY`` is not equal to the the
      number of entries in the value list, the filter primitive acts as
      a `pass through filter <#pass-through-filter>`__.

      ` <#issue-4fd9d6f6>`__ How to behave on invalid number of entries
      in the value list? `[Issue
      #237] <https://github.com/w3c/fxtf-drafts/issues/237>`__

      Animatable: yes.

   ``divisor`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      After applying the
      `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__
      to the input image to yield a number, that number is divided by
      `divisor <#element-attrdef-feconvolvematrix-divisor>`__ to yield
      the final destination color value. A divisor that is the sum of
      all the matrix values tends to have an evening effect on the
      overall color intensity of the result. If the specified divisor is
      0 then the default value will be used instead.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      is the sum of all values in
      `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__,
      with the exception that if the sum is zero, then the divisor is
      set to 1.

      Animatable: yes.

   ``bias`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      After applying the
      `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__
      to the input image to yield a number and applying the
      `divisor <#element-attrdef-feconvolvematrix-divisor>`__, the
      `bias <#element-attrdef-feconvolvematrix-bias>`__ attribute is
      added to each component. One application of bias is when it is
      desirable to have .5 gray value be the zero response of the
      filter. The bias property shifts the range of the filter. This
      allows representation of values that would otherwise be clamped to
      0 or 1.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `bias <#element-attrdef-feconvolvematrix-bias>`__ is 0.

      Animatable: yes.

   ``targetX`` = "`<integer> <https://drafts.csswg.org/css-values-4/#integer-value>`__"
      Determines the positioning in X of the convolution matrix relative
      to a given target pixel in the input image. The leftmost column of
      the matrix is column number zero. The value must be such that: 0
      <= targetX < orderX. By default, the convolution matrix is
      centered in X over each pixel of the input image (i.e., targetX =
      floor ( orderX / 2 )).

      Animatable: yes.

   ``targetY`` = "`<integer> <https://drafts.csswg.org/css-values-4/#integer-value>`__"
      Determines the positioning in Y of the convolution matrix relative
      to a given target pixel in the input image. The topmost row of the
      matrix is row number zero. The value must be such that: 0 <=
      targetY < orderY. By default, the convolution matrix is centered
      in Y over each pixel of the input image (i.e., targetY = floor (
      orderY / 2 )).

      Animatable: yes.

   ``edgeMode`` = "`duplicate <#attr-valuedef-fegaussianblur-edgemode-duplicate>`__ \| `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__ \| `mirror <#attr-valuedef-feguassianblur-edgemode-mirror>`__ \| none"
      Determines how to extend the input image as necessary with color
      values so that the matrix operations can be applied when the
      kernel is positioned at or near the edge of the input image.

      duplicate indicates that the input image is extended along each of
      its borders as necessary by duplicating the color values at the
      given edge of the input image.

      Original N-by-M image, where m=M-1 and n=N-1:

      :math:`\begin{bmatrix}
      11 & 12 & {\text{.}\text{.}\text{.}} & {1m} & {1M} \\
      21 & 22 & {\text{.}\text{.}\text{.}} & {2m} & {2M} \\
      {\text{.}\text{.}\text{.}} & {\text{.}\text{.}\text{.}} & {\text{.}\text{.}\text{.}} & {\text{.}\text{.}\text{.}} & {\text{.}\text{.}\text{.}} \\
      {n1} & {n2} & {\text{.}\text{.}\text{.}} & {nm} & {nM} \\
      {N1} & {N2} & {\text{.}\text{.}\text{.}} & {Nm} & {NM}
      \end{bmatrix}`

      Extended by two pixels using duplicate:

      :math:`\begin{bmatrix}
      11 & 11 & 11 & 12 & \ldots & {1m} & {1M} & {1M} & {1M} \\
      11 & 11 & 11 & 12 & \ldots & {1m} & {1M} & {1M} & {1M} \\
      11 & 11 & 11 & 12 & \ldots & {1m} & {1M} & {1M} & {1M} \\
      21 & 21 & 21 & 22 & \ldots & {2m} & {2M} & {2M} & {2M} \\
      \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
      {n1} & {n1} & {n1} & {n2} & \ldots & {nm} & {nM} & {nM} & {nM} \\
      {N1} & {N1} & {N1} & {N2} & \ldots & {Nm} & {NM} & {NM} & {NM} \\
      {N1} & {N1} & {N1} & {N2} & \ldots & {Nm} & {NM} & {NM} & {NM} \\
      {N1} & {N1} & {N1} & {N2} & \ldots & {Nm} & {NM} & {NM} & {NM}
      \end{bmatrix}`

      `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__ indicates
      that the input image is extended by taking the color values from
      the opposite edge of the image.

      Extended by two pixels using
      `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__:

      :math:`\begin{bmatrix}
      \mathit{nm} & \mathit{nM} & \mathit{n1} & \mathit{n2} & \ldots & \mathit{nm} & \mathit{nM} & \mathit{n1} & \mathit{n2} \\
      \mathit{Nm} & \mathit{NM} & \mathit{N1} & \mathit{N2} & \ldots & \mathit{Nm} & \mathit{NM} & \mathit{N1} & \mathit{N2} \\
      1m & 1M & 11 & 12 & \ldots & 1m & 1M & 11 & 12 \\
      2m & 2M & 21 & 22 & \ldots & 2m & 2M & 21 & 22 \\
      \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
      \mathit{nm} & \mathit{nM} & \mathit{n1} & \mathit{n2} & \ldots & \mathit{nm} & \mathit{nM} & \mathit{n1} & \mathit{n2} \\
      \mathit{Nm} & \mathit{NM} & \mathit{N1} & \mathit{N2} & \ldots & \mathit{Nm} & \mathit{NM} & \mathit{N1} & \mathit{N2} \\
      1m & 1M & 11 & 12 & \ldots & 1m & 1M & 11 & 12 \\
      2m & 2M & 21 & 22 & \ldots & 2m & 2M & 21 & 22
      \end{bmatrix}`

      `mirror <#attr-valuedef-feguassianblur-edgemode-mirror>`__
      indicates that the input image is extended by taking color values
      mirrored across the edge being sampled beyond.

      Extended by two pixels using
      `mirror <#attr-valuedef-feguassianblur-edgemode-mirror>`__:

      :math:`\begin{bmatrix}
      \mathit{22} & \mathit{21} & \mathit{21} & \mathit{22} & \ldots & \mathit{2m} & \mathit{2M} & \mathit{2M} & \mathit{2m} \\
      \mathit{12} & \mathit{11} & \mathit{11} & \mathit{12} & \ldots & \mathit{1m} & \mathit{1M} & \mathit{1M} & \mathit{1m} \\
      12 & 11 & 11 & 12 & \ldots & 1m & 1M & 1M & 1m \\
      22 & 21 & 21 & 22 & \ldots & 2m & 2M & 2M & 2m \\
      \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
      \mathit{n2} & \mathit{n1} & \mathit{n1} & \mathit{n2} & \ldots & \mathit{nm} & \mathit{nM} & \mathit{nM} & \mathit{nm} \\
      \mathit{N2} & \mathit{N1} & \mathit{N1} & \mathit{N2} & \ldots & \mathit{Nm} & \mathit{NM} & \mathit{NM} & \mathit{Nm} \\
      N2 & N1 & N1 & N2 & \ldots & Nm & NM & NM & Nm \\
      n2 & n1 & n1 & n2 & \ldots & nm & nM & nM & nm
      \end{bmatrix}`

      The value none indicates that the input image is extended with
      pixel values of zero for R, G, B and A.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `edgeMode <#element-attrdef-feconvolvematrix-edgemode>`__ is
      duplicate.

      Animatable: yes.

   ``kernelUnitLength`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The first number is the <dx> value. The second number is the <dy>
      value. If the <dy> value is not specified, it defaults to the same
      value as <dx>. Indicates the intended distance in current filter
      units (i.e., units as determined by the value of attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__)
      between successive columns and rows, respectively, in the
      `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__.
      By specifying value(s) for
      `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__,
      the kernel becomes defined in a scalable, abstract coordinate
      system. If kernelUnitLength is not specified, the default value is
      one pixel in the offscreen bitmap, which is a pixel-based
      coordinate system, and thus potentially not scalable. For some
      level of consistency across display media and user agents, it is
      necessary that a value be provided for kernelUnitLength. In some
      implementations, the most consistent results and the fastest
      performance will be achieved if the pixel grid of the temporary
      off-screen images aligns with the pixel grid of the kernel.

      If a negative or zero value is specified the default value will be
      used instead.

      Note: This attribute is deprecated and will be removed. It does
      not provide a reliable way to create platform independent results.
      Future versions of this specification will cover this use case.

      Animatable: yes.

   ``preserveAlpha`` = "*false \| true*"
      A value of
      `false <https://drafts.csswg.org/mediaqueries-5/#valdef-custom-media-false>`__
      indicates that the convolution will apply to all channels,
      including the alpha channel. In this case the
      ``ALPHA``\ :sub:```X,Y``` of the `convolution
      formula <#feConvolveMatrixElementFormula>`__ for a given pixel is:

      | ``ALPHA``\ :sub:```X,Y```\ `` = ( ``
      | ``              SUM``\ :sub:```I=0 to [``\ `\ ```orderY`` <#element-attrdef-order>`__\ :sub:`\ ``-1]```\ `` { ``
      | ``                SUM``\ :sub:```J=0 to [``\ `\ ```orderX`` <#element-attrdef-order>`__\ :sub:`\ ``-1]```\ `` { ``
      | ``                  SOURCE``\ :sub:```X-``\ `\ ```targetX`` <#element-attrdef-feconvolvematrix-targetx>`__\ :sub:`\ ``+J, Y-``\ `\ ```targetY`` <#element-attrdef-feconvolvematrix-targety>`__\ :sub:`\ ``+I```\ `` * ``\ ```kernelMatrix`` <#element-attrdef-feconvolvematrix-kernelmatrix>`__\ ```orderX`` <#element-attrdef-order>`__\ :sub:`\ ``-J-1, ``\ `\ ```orderY`` <#element-attrdef-order>`__\ :sub:`\ ``-I-1```\ `` ``
      | ``                } ``
      | ``              } ``
      | ``            ) / ``\ ```divisor`` <#element-attrdef-feconvolvematrix-divisor>`__\ `` + ``\ ```bias`` <#element-attrdef-feconvolvematrix-bias>`__\ `` ``

      A value of "true" indicates that the convolution will only apply
      to the color channels. In this case, the filter will temporarily
      unpremultiply the color component values and apply the kernel. In
      this case the ``ALPHA``\ :sub:```X,Y``` of the `convolution
      formula <#feConvolveMatrixElementFormula>`__ for a given pixel is:

      ``ALPHA``\ :sub:```X,Y```\ `` = SOURCE``\ :sub:```X,Y```

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `preserveAlpha <#element-attrdef-feconvolvematrix-preservealpha>`__
      is
      `false <https://drafts.csswg.org/mediaqueries-5/#valdef-custom-media-false>`__.

      Animatable: yes.

   .. rubric:: 9.10. Filter primitive
      `feDiffuseLighting <#elementdef-fediffuselighting>`__\ ` <#feDiffuseLightingElement>`__
      :name: feDiffuseLightingElement
      :class: heading settled

   Name:
   ``feDiffuseLighting``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
   and exactly one `light sources <#light-source>`__ element, in any
   order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `surfaceScale <#element-attrdef-fediffuselighting-surfacescale>`__
   -  `diffuseConstant <#element-attrdef-fediffuselighting-diffuseconstant>`__
   -  `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__

   DOM Interfaces:
   `SVGFEDiffuseLightingElement <#InterfaceSVGFEDiffuseLightingElement>`__
   This filter primitive lights an image using the alpha channel as a
   bump map. The resulting image is an RGBA opaque image based on the
   light color with alpha = 1.0 everywhere. The lighting calculation
   follows the standard diffuse component of the Phong lighting model.
   The resulting image depends on the light color, light position and
   surface geometry of the input bump map.

   The light map produced by this filter primitive can be combined with
   a texture image using the multiply term of the *arithmetic*
   `feComposite <#elementdef-fecomposite>`__ compositing method.
   Multiple `light sources <#light-source>`__ can be simulated by adding
   several of these light maps together before applying it to the
   texture image.

   The formulas below make use of 3x3 filters. Because they operate on
   pixels, such filters are inherently resolution-dependent. To make
   `feDiffuseLighting <#elementdef-fediffuselighting>`__ produce
   resolution-independent results, an explicit value should be provided
   for the attribute
   `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__.

   `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__,
   in combination with the other attributes, defines an implicit pixel
   grid in the filter effects coordinate system (i.e., the coordinate
   system established by the
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__
   attribute). The input image will be temporarily rescaled to match its
   pixels with kernelUnitLength. The 3x3 filters are applied to the
   resampled image. After applying the filter, the image is resampled
   back to its original resolution.

   Note: Depending on the speed of the available interpolates, this
   choice may be affected by the
   `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
   property setting.

   Note: Implementations might choose approaches that minimize or
   eliminate resampling when not necessary to produce proper results,
   such as when the document is zoomed out such that
   `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__
   is considerably smaller than a device pixel.

   For the formulas that follow, the
   ``Norm(A``\ :sub:```x```\ ``,A``\ :sub:```y```\ ``,A``\ :sub:```z```\ ``)``
   function is defined as:

   :math:`\mathit{Norm}{{({A_{x},A_{y},A_{z}})} = \sqrt{{A_{x}^{2} + A_{y}^{2}} + A_{z}^{2}}}`
   Note: User agents may use the the "fast inverse square root" to
   optimize the equation and avoid time differences on extrema color
   values. See `Privacy and Security Considerations <#priv-sec>`__
   section for more details about timing attacks.

   The resulting RGBA image is computed as follows:

   | ``D``\ :sub:```r```\ ``= k``\ :sub:```d```\ ``* N.L * L``\ :sub:```r```
   | ``D``\ :sub:```g```\ ``= k``\ :sub:```d```\ ``* N.L * L``\ :sub:```g```
   | ``D``\ :sub:```b```\ ``= k``\ :sub:```d```\ ``* N.L * L``\ :sub:```b```
   | ``D``\ :sub:```a```\ ``= 1.0``

   where

   | k\ :sub:`d` = diffuse lighting constant
   | N = surface normal unit vector, a function of x and y
   | L = unit vector pointing from surface to light, a function of x and
     y in the point and spot light cases
   | L\ :sub:`r`,L\ :sub:`g`,L\ :sub:`b` = RGB components of light, a
     function of x and y in the spot light case

   N is a function of x and y and depends on the surface gradient as
   follows:

   The surface described by the input alpha image I(x,y) is:

   ``Z (x,y) = surfaceScale * I(x,y)``

   Surface normal is calculated using the Sobel gradient 3x3 filter.
   Different filter kernels are used depending on whether the given
   pixel is on the interior or an edge. For each case, the formula is:

   | ``N``\ :sub:```x```\ ``(x,y) = - surfaceScale * FACTOR``\ :sub:```x```\ ``*``
   | ``           (K``\ :sub:```x```\ ``(0,0)*I(x-dx,y-dy) + K``\ :sub:```x```\ ``(1,0)*I(x,y-dy) + K``\ :sub:```x```\ ``(2,0)*I(x+dx,y-dy) +``
   | ``            K``\ :sub:```x```\ ``(0,1)*I(x-dx,y)    + K``\ :sub:```x```\ ``(1,1)*I(x,y)    + K``\ :sub:```x```\ ``(2,1)*I(x+dx,y)    +``
   | ``            K``\ :sub:```x```\ ``(0,2)*I(x-dx,y+dy) + K``\ :sub:```x```\ ``(1,2)*I(x,y+dy) + K``\ :sub:```x```\ ``(2,2)*I(x+dx,y+dy))``
   | ``N``\ :sub:```y```\ ``(x,y) = - surfaceScale * FACTOR``\ :sub:```y```\ ``*``
   | ``           (K``\ :sub:```y```\ ``(0,0)*I(x-dx,y-dy) + K``\ :sub:```y```\ ``(1,0)*I(x,y-dy) + K``\ :sub:```y```\ ``(2,0)*I(x+dx,y-dy) +``
   | ``            K``\ :sub:```y```\ ``(0,1)*I(x-dx,y)    + K``\ :sub:```y```\ ``(1,1)*I(x,y)    + K``\ :sub:```y```\ ``(2,1)*I(x+dx,y)    +``
   | ``            K``\ :sub:```y```\ ``(0,2)*I(x-dx,y+dy) + K``\ :sub:```y```\ ``(1,2)*I(x,y+dy) + K``\ :sub:```y```\ ``(2,2)*I(x+dx,y+dy))``
   | ``N``\ :sub:```z```\ ``(x,y) = 1.0``
   | ``N = (N``\ :sub:```x```\ ``, N``\ :sub:```y```\ ``, N``\ :sub:```z```\ ``) / Norm((N``\ :sub:```x```\ ``,N``\ :sub:```y```\ ``,N``\ :sub:```z```\ ``))``

   In these formulas, the ``dx`` and ``dy`` values (e.g.,
   ``I(x-dx,y-dy)``), represent deltas relative to a given ``(x,y)``
   position for the purpose of estimating the slope of the surface at
   that point. These deltas are determined by the value (explicit or
   implicit) of attribute
   `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__.

   Top/left corner:
   Top row:
   Top/right corner:
   | FACTOR\ :sub:`x`\ =2/(3*dx)
   | K\ :sub:`x` =
   |     |  0  0  0 \|
   |     |  0 -2  2 \|
   |     |  0 -1  1 \|
   | FACTOR\ :sub:`y`\ =2/(3*dy)
   | K\ :sub:`y` =  
   |     |  0  0  0 \|
   |     |  0 -2 -1 \|
   |     |  0  2  1 \|

   | FACTOR\ :sub:`x`\ =1/(3*dx)
   | K\ :sub:`x` =
   |     |  0  0  0 \|
   |     | -2  0  2 \|
   |     | -1  0  1 \|
   | FACTOR\ :sub:`y`\ =1/(2*dy)
   | K\ :sub:`y` =  
   |     |  0  0  0 \|
   |     | -1 -2 -1 \|
   |     |  1  2  1 \|

   | FACTOR\ :sub:`x`\ =2/(3*dx)
   | K\ :sub:`x` =
   |     |  0  0  0 \|
   |     | -2  2  0 \|
   |     | -1  1  0 \|
   | FACTOR\ :sub:`y`\ =2/(3*dy)
   | K\ :sub:`y` =  
   |     |  0  0  0 \|
   |     | -1 -2  0 \|
   |     |  1  2  0 \|

   Left column:
   Interior pixels:
   Right column:
   | FACTOR\ :sub:`x`\ =1/(2*dx)
   | K\ :sub:`x` =
   |     | 0 -1  1 \|
   |     | 0 -2  2 \|
   |     | 0 -1  1 \|
   | FACTOR\ :sub:`y`\ =1/(3*dy)
   | K\ :sub:`y` =  
   |     |  0 -2 -1 \|
   |     |  0  0  0 \|
   |     |  0  2  1 \|

   | FACTOR\ :sub:`x`\ =1/(4*dx)
   | K\ :sub:`x` =
   |     | -1  0  1 \|
   |     | -2  0  2 \|
   |     | -1  0  1 \|
   | FACTOR\ :sub:`y`\ =1/(4*dy)
   | K\ :sub:`y` =  
   |     | -1 -2 -1 \|
   |     |  0  0  0 \|
   |     |  1  2  1 \|

   | FACTOR\ :sub:`x`\ =1/(2*dx)
   | K\ :sub:`x` =
   |     | -1  1  0\|
   |     | -2  2  0\|
   |     | -1  1  0\|
   | FACTOR\ :sub:`y`\ =1/(3*dy)
   | K\ :sub:`y` =  
   |     | -1 -2  0 \|
   |     |  0  0  0 \|
   |     |  1  2  0 \|

   Bottom/left corner:
   Bottom row:
   Bottom/right corner:
   | FACTOR\ :sub:`x`\ =2/(3*dx)
   | K\ :sub:`x` =
   |     | 0 -1  1 \|
   |     | 0 -2  2 \|
   |     | 0  0  0 \|
   | FACTOR\ :sub:`y`\ =2/(3*dy)
   | K\ :sub:`y` =  
   |     |  0 -2 -1 \|
   |     |  0  2  1 \|
   |     |  0  0  0 \|

   | FACTOR\ :sub:`x`\ =1/(3*dx)
   | K\ :sub:`x` =
   |     | -1  0  1 \|
   |     | -2  0  2 \|
   |     |  0  0  0 \|
   | FACTOR\ :sub:`y`\ =1/(2*dy)
   | K\ :sub:`y` =  
   |     | -1 -2 -1 \|
   |     |  1  2  1 \|
   |     |  0  0  0 \|

   | FACTOR\ :sub:`x`\ =2/(3*dx)
   | K\ :sub:`x` =
   |     | -1  1  0 \|
   |     | -2  2  0 \|
   |     |  0  0  0 \|
   | FACTOR\ :sub:`y`\ =2/(3*dy)
   | K\ :sub:`y` =  
   |     | -1 -2  0 \|
   |     |  1  2  0 \|
   |     |  0  0  0 \|

   L, the unit vector from the image sample to the light, is calculated
   as follows:

   For Infinite `light sources <#light-source>`__ it is constant:

   | ``L``\ :sub:```x```\ ``= cos(azimuth)*cos(elevation)``
   | ``L``\ :sub:```y```\ ``= sin(azimuth)*cos(elevation)``
   | ``L``\ :sub:```z```\ ``= sin(elevation)``

   For Point and spot lights it is a function of position:

   | ``L``\ :sub:```x```\ ``= Light``\ :sub:```x```\ ``- x``
   | ``L``\ :sub:```y```\ ``= Light``\ :sub:```y```\ ``- y``
   | ``L``\ :sub:```z```\ ``= Light``\ :sub:```z```\ ``- Z(x,y)``
   | ``L = (L``\ :sub:```x```\ ``, L``\ :sub:```y```\ ``, L``\ :sub:```z```\ ``) / Norm(L``\ :sub:```x```\ ``, L``\ :sub:```y```\ ``, L``\ :sub:```z```\ ``)``

   where Light\ :sub:`x`, Light\ :sub:`y`, and Light\ :sub:`z` are the
   input light position.

   L\ :sub:`r`,L\ :sub:`g`,L\ :sub:`b`, the light color vector, is a
   function of position in the spot light case only:

   | ``L``\ :sub:```r```\ ``= Light``\ :sub:```r```\ ``*pow((-L.S),specularExponent)``
   | ``L``\ :sub:```g```\ ``= Light``\ :sub:```g```\ ``*pow((-L.S),specularExponent)``
   | ``L``\ :sub:```b```\ ``= Light``\ :sub:```b```\ ``*pow((-L.S),specularExponent)``

   where S is the unit vector pointing from the light to the point
   (pointsAtX, pointsAtY, pointsAtZ) in the x-y plane:

   | ``S``\ :sub:```x```\ ``= pointsAtX - Light``\ :sub:```x```
   | ``S``\ :sub:```y```\ ``= pointsAtY - Light``\ :sub:```y```
   | ``S``\ :sub:```z```\ ``= pointsAtZ - Light``\ :sub:```z```
   | ``S = (S``\ :sub:```x```\ ``, S``\ :sub:```y```\ ``, S``\ :sub:```z```\ ``) / Norm(S``\ :sub:```x```\ ``, S``\ :sub:```y```\ ``, S``\ :sub:```z```\ ``)``

   If L.S is positive, no light is present. (L\ :sub:`r` = L\ :sub:`g` =
   L\ :sub:`b` = 0). If
   `limitingConeAngle <#element-attrdef-fespotlight-limitingconeangle>`__
   is specified, -L.S < cos(limitingConeAngle) also indicates that no
   light is present.

   *Attribute definitions:*

   ``surfaceScale`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      height of surface when A\ :sub:`in` = 1.

      If the attribute is not specified, then the effect is as if a
      value of 1 were specified.

      Animatable: yes.

   ``diffuseConstant`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      kd in Phong lighting model. In SVG, this can be any non-negative
      number.

      If the attribute is not specified, then the effect is as if a
      value of 1 were specified.

      Animatable: yes.

   ``kernelUnitLength`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The first number is the <dx> value. The second number is the <dy>
      value. If the <dy> value is not specified, it defaults to the same
      value as <dx>. Indicates the intended distance in current filter
      units (i.e., units as determined by the value of attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__) for
      ``dx`` and ``dy``, respectively, in the `surface normal
      calculation formulas <#SurfaceNormalCalculations>`__. By
      specifying value(s) for
      `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__,
      the kernel becomes defined in a scalable, abstract coordinate
      system. If kernelUnitLength is not specified, the ``dx`` and
      ``dy`` values should represent very small deltas relative to a
      given ``(x,y)`` position, which might be implemented in some cases
      as one pixel in the intermediate image offscreen bitmap, which is
      a pixel-based coordinate system, and thus potentially not
      scalable. For some level of consistency across display media and
      user agents, it is necessary that a value be provided for
      kernelUnitLength.

      If a negative or zero value is specified the default value will be
      used instead.

      Note: This attribute is deprecated and will be removed. It does
      not provide a reliable way to create platform independent results.
      Future versions of this specification will cover this use case.

      Animatable: yes.

   The `light source <#light-source>`__ is defined by one of the child
   elements `feDistantLight <#elementdef-fedistantlight>`__,
   `fePointLight <#elementdef-fepointlight>`__ or
   `feSpotLight <#elementdef-fespotlight>`__. The light color is
   specified by property `lighting-color <#propdef-lighting-color>`__.

   .. rubric:: 9.11. Filter primitive
      `feDisplacementMap <#elementdef-fedisplacementmap>`__\ ` <#feDisplacementMapElement>`__
      :name: feDisplacementMapElement
      :class: heading settled

   Name:
   ``feDisplacementMap``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `in2 <#element-attrdef-fedisplacementmap-in2>`__
   -  `scale <#element-attrdef-fedisplacementmap-scale>`__
   -  `xChannelSelector <#element-attrdef-fedisplacementmap-xchannelselector>`__
   -  `yChannelSelector <#element-attrdef-fedisplacementmap-ychannelselector>`__

   DOM Interfaces:
   `SVGFEDisplacementMapElement <#InterfaceSVGFEDisplacementMapElement>`__
   ` <#issue-1d845580>`__ Implementations do not match specification.
   `[Issue #113] <https://github.com/w3c/fxtf-drafts/issues/113>`__

   This filter primitive uses the pixels values from the image from
   `in2 <#element-attrdef-fedisplacementmap-in2>`__ to spatially
   displace the image from
   `in <#element-attrdef-filter-primitive-in>`__. This is the
   transformation to be performed:

   ::

      P'(x,y) ← P( x + scale * (XC(x,y) - .5), y + scale * (YC(x,y) - .5))

   where P(x,y) is the input image,
   `in <#element-attrdef-filter-primitive-in>`__, and P'(x,y) is the
   destination. XC(x,y) and YC(x,y) are the component values of the
   channel designated by the
   `xChannelSelector <#element-attrdef-fedisplacementmap-xchannelselector>`__
   and
   `yChannelSelector <#element-attrdef-fedisplacementmap-ychannelselector>`__.
   For example, to use the R component of
   `in2 <#element-attrdef-fedisplacementmap-in2>`__ to control
   displacement in x and the G component of Image2 to control
   displacement in y, set xChannelSelector to "R" and yChannelSelector
   to "G".

   The displacement map,
   `in2 <#element-attrdef-fedisplacementmap-in2>`__, defines the inverse
   of the mapping performed.

   The input image `in <#element-attrdef-filter-primitive-in>`__ is to
   remain premultiplied for this filter primitive. The calculations
   using the pixel values from
   `in2 <#element-attrdef-fedisplacementmap-in2>`__ are performed using
   non-premultiplied color values.

   This filter can have arbitrary non-localized effect on the input
   which might require substantial buffering in the processing pipeline.
   However with this formulation, any intermediate buffering needs can
   be determined by `scale <#element-attrdef-fedisplacementmap-scale>`__
   which represents the maximum range of displacement in either x or y.

   When applying this filter, the source pixel location will often lie
   between several source pixels.

   Note: Depending on the speed of the available interpolents, this
   choice may be affected by the
   `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
   property setting.

   Note: A future version of this spec will define the interpolation
   method to be used when distorting the source image making UAs
   rendering result more interoperable.

   The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property only applies to the
   `in2 <#element-attrdef-fedisplacementmap-in2>`__ source image and
   does not apply to the `in <#element-attrdef-filter-primitive-in>`__
   source image. The in source image must remain in its current color
   space.

   *Attribute definitions:*

   ``scale`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Displacement scale factor. The amount is expressed in the
      coordinate system established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      When the value of this attribute is 0, this operation has no
      effect on the source image.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `scale <#element-attrdef-fedisplacementmap-scale>`__ is 0.

      Animatable: yes.

   ``xChannelSelector`` = "*R \| G \| B \| A*"
      Indicates which channel from
      `in2 <#element-attrdef-fedisplacementmap-in2>`__ to use to
      displace the pixels in
      `in <#element-attrdef-filter-primitive-in>`__ along the x-axis.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `xChannelSelector <#element-attrdef-fedisplacementmap-xchannelselector>`__
      is `A <https://drafts.csswg.org/css-color-5/#valdef-lab-a>`__.

      Animatable: yes.

   ``yChannelSelector`` = "*R \| G \| B \| A*"
      Indicates which channel from
      `in2 <#element-attrdef-fedisplacementmap-in2>`__ to use to
      displace the pixels in
      `in <#element-attrdef-filter-primitive-in>`__ along the y-axis.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `yChannelSelector <#element-attrdef-fedisplacementmap-ychannelselector>`__
      is `A <https://drafts.csswg.org/css-color-5/#valdef-lab-a>`__.

      Animatable: yes.

   ``in2`` = "*(see* `in <#element-attrdef-filter-primitive-in>`__ *attribute)*"
      The second input image, which is used to displace the pixels in
      the image from attribute
      `in <#element-attrdef-filter-primitive-in>`__. See defintion for
      in attribute.

      Animatable: yes.

   .. rubric:: 9.12. Filter primitive
      `feDropShadow <#elementdef-fedropshadow>`__\ ` <#feDropShadowElement>`__
      :name: feDropShadowElement
      :class: heading settled

   Name:
   ``feDropShadow``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__
   -  `dx <#element-attrdef-fedropshadow-dx>`__
   -  `dy <#element-attrdef-fedropshadow-dy>`__

   DOM Interfaces:
   `SVGFEDropShadowElement <#InterfaceSVGFEDropShadowElement>`__
   This filter creates a drop shadow of the input image. It is a
   shorthand filter, and is defined in terms of combinations of other
   `filter primitives <#filter-primitive>`__. The expectation is that it
   can be optimized more easily by implementations.

   The result of a `feDropShadow <#elementdef-fedropshadow>`__ filter
   primitive is equivalent to the following:

   .. code:: highlight

      <feGaussianBlur in="alpha-channel-of-feDropShadow-in"   stdDeviation="stdDeviation-of-feDropShadow"/>
      <feOffset dx="dx-of-feDropShadow"   dy="dy-of-feDropShadow" result="offsetblur"/>
      <feFlood flood-color="flood-color-of-feDropShadow"  flood-opacity="flood-opacity-of-feDropShadow"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="in-of-feDropShadow"/>
      </feMerge>

   The above divided into steps:

   #. Take the alpha channel of the input to the
      `feDropShadow <#elementdef-fedropshadow>`__ filter primitive and
      the `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__
      on the feDropShadow and do processing as if the following
      `feGaussianBlur <#elementdef-fegaussianblur>`__ was applied:

      .. code:: highlight

         <feGaussianBlur in="alpha-channel-of-feDropShadow-in" stdDeviation="stdDeviation-of-feDropShadow"/>

   #. Offset the result of step 1 by
      `dx <#element-attrdef-fedropshadow-dx>`__ and
      `dy <#element-attrdef-fedropshadow-dy>`__ as specified on the
      `feDropShadow <#elementdef-fedropshadow>`__ element, equivalent to
      applying an `feOffset <#elementdef-feoffset>`__ with these
      parameters:

      .. code:: highlight

         <feOffset dx="dx-of-feDropShadow" dy="dy-of-feDropShadow" result="offsetblur"/>

   #. Do processing as if an `feFlood <#elementdef-feflood>`__ element
      with `flood-color <#propdef-flood-color>`__ and
      `flood-opacity <#propdef-flood-opacity>`__ as specified on the
      `feDropShadow <#elementdef-fedropshadow>`__ was applied:

      .. code:: highlight

         <feFlood flood-color="flood-color-of-feDropShadow" flood-opacity="flood-opacity-of-feDropShadow"/>

   #. Composite the result of the `feFlood <#elementdef-feflood>`__ in
      step 3 with the result of the `feOffset <#elementdef-feoffset>`__
      in step 2 as if an `feComposite <#elementdef-fecomposite>`__
      filter primitive with ``operator="in"`` was applied:

      .. code:: highlight

         <feComposite in2="offsetblur" operator="in"/>

   #. Finally merge the result of the previous step, doing processing as
      if the following `feMerge <#elementdef-femerge>`__ was performed:

      .. code:: highlight

         <feMerge>
           <feMergeNode/>
           <feMergeNode in="in-of-feDropShadow"/>
         </feMerge>

   Note: that while the definition of the
   `feDropShadow <#elementdef-fedropshadow>`__ filter primitive says
   that it can be expanded into an equivalent tree it is not required
   that it is implemented like that. The expectation is that user agents
   can optimize the handling by not having to do all the steps
   separately.

   Beyond the DOM interface
   `SVGFEDropShadowElement <#InterfaceSVGFEDropShadowElement>`__ there
   is no way of accessing the internals of the
   `feDropShadow <#elementdef-fedropshadow>`__ filter primitive, meaning
   if the filter primitive is implemented as an equivalent tree then
   that tree must not be exposed to the DOM.

   *Attribute definitions:*

   ``dx`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      The x offset of the drop shadow.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `dx <#element-attrdef-fedropshadow-dx>`__ is 2.

      This attribute is then forwarded to the
      `dx <#element-attrdef-feoffset-dx>`__ attribute of the internal
      `feOffset <#elementdef-feoffset>`__ element.

      Animatable: yes.

   ``dy`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      The y offset of the drop shadow.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `dy <#element-attrdef-fedropshadow-dy>`__ is 2.

      This attribute is then forwarded to the
      `dy <#element-attrdef-feoffset-dy>`__ attribute of the internal
      `feOffset <#elementdef-feoffset>`__ element.

      Animatable: yes.

   ``stdDeviation`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The standard deviation for the blur operation in the drop shadow.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__
      is 2.

      This attribute is then forwarded to the
      `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__
      attribute of the internal
      `feGaussianBlur <#elementdef-fegaussianblur>`__ element.

      Animatable: yes.

   .. rubric:: 9.13. Filter primitive
      `feFlood <#elementdef-feflood>`__\ ` <#feFloodElement>`__
      :name: feFloodElement
      :class: heading settled

   Name:
   ``feFlood``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__

   DOM Interfaces:
   `SVGFEFloodElement <#InterfaceSVGFEFloodElement>`__
   This filter primitive creates a rectangle filled with the color and
   opacity values from properties `flood-color <#propdef-flood-color>`__
   and `flood-opacity <#propdef-flood-opacity>`__. The rectangle is as
   large as the `filter primitive
   subregion <#filter-primitive-subregion>`__ established by the
   `feFlood <#elementdef-feflood>`__ element.

   .. rubric:: 9.13.1. The `flood-color <#propdef-flood-color>`__
      property\ ` <#FloodColorProperty>`__
      :name: FloodColorProperty
      :class: heading settled

   Name:
   flood-color
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   `<color> <https://drafts.csswg.org/css-color-5/#typedef-color>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   black
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   `feFlood <#elementdef-feflood>`__ and
   `feDropShadow <#elementdef-fedropshadow>`__ elements
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   no
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   n/a
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   as specified
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   by computed value
   Media:
   visual
   The `flood-color <#propdef-flood-color>`__ property indicates what
   color to used to flood the current `filter primitive
   subregion <#filter-primitive-subregion>`__.

   The `flood-color <#propdef-flood-color>`__ property is a
   `presentation
   attribute <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute>`__
   for SVG elements.

   .. rubric:: 9.13.2. The `flood-opacity <#propdef-flood-opacity>`__
      property\ ` <#FloodOpacityProperty>`__
      :name: FloodOpacityProperty
      :class: heading settled

   Name:
   flood-opacity
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   `<'opacity'> <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   1
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   `feFlood <#elementdef-feflood>`__ and
   `feDropShadow <#elementdef-fedropshadow>`__ elements
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   no
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   n/a
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   the specified value converted to a number, clamped to the range [0,1]
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   by computed value
   Media:
   visual
   The `flood-opacity <#propdef-flood-opacity>`__ property defines the
   opacity value to use across the entire `filter primitive
   subregion <#filter-primitive-subregion>`__. If the
   `flood-color <#propdef-flood-color>`__ value includes an alpha
   channel, the alpha channel gets multiplied with the computed value of
   the flood-opacity property.

   The `flood-opacity <#propdef-flood-opacity>`__ property is a
   `presentation
   attribute <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute>`__
   for SVG elements.

   .. rubric:: 9.14. Filter primitive
      `feGaussianBlur <#elementdef-fegaussianblur>`__\ ` <#feGaussianBlurElement>`__
      :name: feGaussianBlurElement
      :class: heading settled

   Name:
   ``feGaussianBlur``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__
   -  `edgeMode <#element-attrdef-fegaussianblur-edgemode>`__

   DOM Interfaces:
   `SVGFEGaussianBlurElement <#InterfaceSVGFEGaussianBlurElement>`__
   This filter primitive performs a Gaussian blur on the input image.

   The Gaussian blur kernel is an approximation of the normalized
   convolution:

   ``G(x,y) = H(x)I(y)``

   where

   ``H(x) = exp(-x``\ :sup:```2```\ ``/ (2s``\ :sup:```2```\ ``)) / sqrt(2π * s``\ :sup:```2```\ ``)``

   and

   ``I(y) = exp(-y``\ :sup:```2```\ ``/ (2t``\ :sup:```2```\ ``)) / sqrt(2π * t``\ :sup:```2```\ ``)``

   with "s" being the standard deviation in the x direction and "t"
   being the standard deviation in the y direction, as specified by
   `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__.

   The value of
   `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__ can
   be either one or two numbers. If two numbers are provided, the first
   number represents a standard deviation value along the x-axis of the
   current coordinate system and the second value represents a standard
   deviation in Y. If one number is provided, then that value is used
   for both X and Y.

   Even if only one value is provided for
   `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__, this
   can be implemented as a separable convolution.

   For larger values of "s" (s >= 2.0), an approximation can be used:
   Three successive box-blurs build a piece-wise quadratic convolution
   kernel, which approximates the Gaussian kernel to within roughly 3%.

   ``let d = floor(s * 3 * sqrt(2 * π) / 4 + 0.5)``

   ... if d is odd, use three box-blurs of size "d", centered on the
   output pixel.

   ... if d is even, two box-blurs of size "d" (the first one centered
   on the pixel boundary between the output pixel and the one to the
   left, the second one centered on the pixel boundary between the
   output pixel and the one to the right) and one box blur of size "d+1"
   centered on the output pixel.

   The approximation formula also applies correspondingly to "t".

   Frequently this operation will take place on alpha-only images, such
   as that produced by the built-in input,
   `SourceAlpha <#attr-valuedef-in-sourcealpha>`__. The implementation
   may notice this and optimize the single channel case. This
   optimization must be omitted if it leads to privacy concerns of any
   matter. (See section `Privacy and Security
   Considerations <#priv-sec>`__ for more details about timing attacks.)
   If the input has infinite extent and is constant (e.g
   `FillPaint <#attr-valuedef-in-fillpaint>`__ where the fill is a solid
   color), this operation has no effect. If the input has infinite
   extent and the filter result where the fill is a solid color) is the
   input to an `feTile <#elementdef-fetile>`__, the filter is evaluated
   with `periodic boundary
   conditions <http://en.wikipedia.org/wiki/Periodic_boundary_conditions>`__.

   *Attribute definitions:*

   ``stdDeviation`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The standard deviation for the blur operation. If two
      `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__
      s are provided, the first number represents a standard deviation
      value along the x-axis of the coordinate system established by
      attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element. The second value
      represents a standard deviation in Y. If one number is provided,
      then that value is used for both X and Y.

      A negative value or a value of zero disables the effect of the
      given filter primitive (i.e., the result is the filter input
      image).

      If `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__
      is 0 in only one of X or Y, then the effect is that the blur is
      only applied in the direction that has a non-zero value.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__ is
      0.

      Animatable: yes.

   ``edgeMode`` = "`duplicate <#attr-valuedef-fegaussianblur-edgemode-duplicate>`__ \| `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__ \| `mirror <#attr-valuedef-feguassianblur-edgemode-mirror>`__ \| none"
      Determines how to extend the input image as necessary with color
      values so that the matrix operations can be applied when the
      kernel is positioned at or near the edge of the input image.

      ``duplicate`` indicates that the input image is extended along
      each of its borders as necessary by duplicating the color values
      at the given edge of the input image.

      Original N-by-M image, where m=M-1 and n=N-1:

      ``wrap`` indicates that the input image is extended by taking the
      color values from the opposite edge of the image.

      ``mirror`` indicates that the input image is extended by taking
      color values mirrored across the edge being sampled beyond.

      The value none indicates that the input image is extended with
      pixel values of zero for R, G, B and A.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `edgeMode <#element-attrdef-fegaussianblur-edgemode>`__ is
      none.

      Animatable: yes.

   `The example <#intro>`__ at the start of this chapter makes use of
   the `feGaussianBlur <#elementdef-fegaussianblur>`__ filter primitive
   to create a drop shadow effect.

   .. rubric:: 9.15. Filter primitive
      `feImage <#elementdef-feimage>`__\ ` <#feImageElement>`__
      :name: feImageElement
      :class: heading settled

   Name:
   ``feImage``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `animateTransform <https://svgwg.org/specs/animations/#elementdef-animateTransform>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `externalResourcesRequired <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#ExternalResourcesRequiredAttribute>`__
   -  `preserveAspectRatio <#element-attrdef-feimage-preserveaspectratio>`__
   -  `xlink:href <#element-attrdef-feimage-xlinkhref>`__
   -  `href <#element-attrdef-feimage-href>`__
   -  `crossorigin <#element-attrdef-feimage-crossorigin>`__

   DOM Interfaces:
   `SVGFEImageElement <#InterfaceSVGFEImageElement>`__
   This filter primitive refers to a graphic external to this filter
   element, which is loaded or rendered into an RGBA raster and becomes
   the result of the filter primitive.

   This filter primitive can refer to an external image or can be a
   reference to another piece of SVG. It produces an image similar to
   the built-in image source
   `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ except that the
   graphic comes from an external source.

   If the `href <#element-attrdef-feimage-href>`__ references a
   stand-alone image resource such as a JPEG, PNG or SVG file, then the
   image resource is rendered according to the behavior of the
   `image <https://svgwg.org/svg2-draft/embedded.html#elementdef-image>`__
   element; otherwise, the referenced resource is rendered according to
   the behavior of the
   `use <https://svgwg.org/svg2-draft/struct.html#elementdef-use>`__
   element. In either case, the current user coordinate system depends
   on the value of attribute
   `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
   `filter <#elementdef-filter>`__ element. The processing of the
   `preserveAspectRatio <#element-attrdef-feimage-preserveaspectratio>`__
   attribute on the `feImage <#elementdef-feimage>`__ element is
   identical to that of the image element.

   A `href <#element-attrdef-feimage-href>`__ reference that is an empty
   image (zero width or zero height), that fails to download, is
   non-existent, or that cannot be displayed (e.g. because it is not in
   a supported image format) fills the filter primitive subregion with
   transparent black.

   When the referenced image must be resampled to match the device
   coordinate system, it is recommended that high quality viewers make
   use of appropriate interpolation techniques, for example bilinear or
   bicubic. Depending on the speed of the available interpolents, this
   choice may be affected by the
   `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
   property setting.

   *Attribute definitions:*

   ``xlink:href`` = "`<url> <#typedef-filter-url>`__"
      See `href <#element-attrdef-feimage-href>`__ attribute.

      Animatable: yes.

      Note: This *xlink:href* attribute is deprecated and should not be
      used in new content, it’s included for backwards compatibility
      reasons only. Authors should use the
      `href <#element-attrdef-feimage-href>`__ attribute instead.

   ``href`` = "`<url> <#typedef-filter-url>`__"
      An `<url> <#typedef-filter-url>`__ to an image resource or to an
      element. If both, the
      `xlink:href <#element-attrdef-feimage-xlinkhref>`__ and the
      `href <#element-attrdef-feimage-href>`__ attribute are specified,
      the latter overrides the first definition.

      Animatable: yes.

   ``preserveAspectRatio`` = "*[defer] <align> [<meetOrSlice>]*"
      See
      `preserveAspectRatio <#element-attrdef-feimage-preserveaspectratio>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `preserveAspectRatio <#element-attrdef-feimage-preserveaspectratio>`__
      is xMidYMid meet.

      Animatable: yes.

   ``crossorigin`` = "*anonymous* \| *use-credentials*"
      The
      `crossorigin <https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin>`__
      attribute is a CORS settings attribute. Its purpose is to allow
      images from third-party sites that allow cross-origin access to be
      used with `feDisplacementMap <#elementdef-fedisplacementmap>`__.
      For the defintion see
      `crossorigin <https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin>`__
      attribute for the
      `img <https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element>`__
      tag `[HTML] <#biblio-html>`__ and the `Privacy and Security
      Considerations <#priv-sec>`__ section in this specification.

      Animatable: no.

   .. container:: example
      :name: example-d975b48d

      ` <#example-d975b48d>`__ The following example illustrates how
      images are placed relative to an object. From left to right:

      -  The default placement of an image. Note that the image is
         centered in the `filter region <#filter-region>`__ and has the
         maximum size that will fit in the region consistent with
         preserving the aspect ratio.

      -  The image stretched to fit the bounding box of an object.

      -  The image placed using user coordinates. Note that the image is
         first centered in a box the size of the `filter
         region <#filter-region>`__ and has the maximum size that will
         fit in the box consistent with preserving the aspect ratio.
         This box is then shifted by the given
         `x <#element-attrdef-filter-primitive-x>`__ and
         `y <#element-attrdef-filter-primitive-y>`__ values relative to
         the viewport the object is in.

      .. code:: highlight

         <svg width="600" height="250" viewBox="0 0 600 250"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
           <title>Example feImage - Examples of feImage use</title>
           <desc>Three examples of using feImage, the first showing the
                 default rendering, the second showing the image fit
                 to a box and the third showing the image
                 shifted and clipped.</desc>
           <defs>
             <filter id="Default">
               <feImage xlink:href="smiley.png" />
             </filter>
             <filter id="Fitted" primitiveUnits="objectBoundingBox">
               <feImage xlink:href="smiley.png"
                  x="0" y="0" width="100%" height="100%"
                  preserveAspectRatio="none"/>
             </filter>
             <filter id="Shifted">
               <feImage xlink:href="smiley.png"
                  x="500" y="5"/>
             </filter>
           </defs>
           <rect fill="none" stroke="blue"
                 x="1" y="1" width="598" height="248"/>
           <g>
             <rect x="50"  y="25" width="100" height="200" filter="url(#Default)"/>
             <rect x="50"  y="25" width="100" height="200" fill="none" stroke="green"/>
             <rect x="250" y="25" width="100" height="200" filter="url(#Fitted)"/>
             <rect x="250" y="25" width="100" height="200" fill="none" stroke="green"/>
             <rect x="450" y="25" width="100" height="200" filter="url(#Shifted)"/>
             <rect x="450" y="25" width="100" height="200" fill="none" stroke="green"/>
           </g>
         </svg>

      .. container:: figure

         |Example feImage — Examples of feImage use|
         Example of feImage

      `View this example as SVG <examples/feImage-01.svg>`__

   .. rubric:: 9.16. Filter primitive
      `feMerge <#elementdef-femerge>`__\ ` <#feMergeElement>`__
      :name: feMergeElement
      :class: heading settled

   Name:
   ``feMerge``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `feMergeNode <#elementdef-femergenode>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__

   DOM Interfaces:
   `SVGFEMergeElement <#InterfaceSVGFEMergeElement>`__
   This filter primitive composites input image layers on top of each
   other using the *over* operator with *Input1* (corresponding to the
   first `feMergeNode <#elementdef-femergenode>`__ child element) on the
   bottom and the last specified input, *InputN* (corresponding to the
   last feMergeNode child element), on top.

   Many effects produce a number of intermediate layers in order to
   create the final output image. This filter allows us to collapse
   those into a single image. Although this could be done by using n-1
   Composite-filters, it is more convenient to have this common
   operation available in this form, and offers the implementation some
   additional flexibility.

   Each `feMerge <#elementdef-femerge>`__ element can have any number of
   `feMergeNode <#elementdef-femergenode>`__ subelements, each of which
   has an `in <#element-attrdef-filter-primitive-in>`__ attribute.

   The canonical implementation of feMerge is to render the entire
   effect into one RGBA layer, and then render the resulting layer on
   the output device. In certain cases (in particular if the output
   device itself is a continuous tone device), and since merging is
   associative, it might be a sufficient approximation to evaluate the
   effect one layer at a time and render each layer individually onto
   the output device bottom to top.

   If the topmost image input is
   `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__ and this
   `feMerge <#elementdef-femerge>`__ is the last filter primitive in the
   filter, the implementation is encouraged to render the layers up to
   that point, and then render the SourceGraphic directly from its
   vector description on top.

   `The example <#intro>`__ at the start of this chapter makes use of
   the `feMerge <#elementdef-femerge>`__ filter primitive to composite
   two intermediate filter results together.

   .. rubric:: 9.16.1. Merge node
      `feMergeNode <#elementdef-femergenode>`__\ ` <#feMergeNodeElement>`__
      :name: feMergeNodeElement
      :class: heading settled

   Name:
   ``feMergeNode``
   Categories:
   None.
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__

   DOM Interfaces:
   `SVGFEMergeNodeElement <#InterfaceSVGFEMergeNodeElement>`__
   .. rubric:: 9.17. Filter primitive
      `feMorphology <#elementdef-femorphology>`__\ ` <#feMorphologyElement>`__
      :name: feMorphologyElement
      :class: heading settled

   Name:
   ``feMorphology``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `operator <#element-attrdef-femorphology-operator>`__
   -  `radius <#element-attrdef-femorphology-radius>`__

   DOM Interfaces:
   `SVGFEMorphologyElement <#InterfaceSVGFEMorphologyElement>`__
   This filter primitive performs "fattening" or "thinning" of artwork.
   It is particularly useful for fattening or thinning an alpha channel.

   The dilation (or erosion) kernel is a rectangle with a width of
   2\*\ *x-radius* and a height of 2\*\ *y-radius*. In dilation, the
   output pixel is the individual component-wise maximum of the
   corresponding R,G,B,A values in the input image’s kernel rectangle.
   In erosion, the output pixel is the individual component-wise minimum
   of the corresponding R,G,B,A values in the input image’s kernel
   rectangle.

   Frequently this operation will take place on alpha-only images, such
   as that produced by the built-in input,
   `SourceAlpha <#attr-valuedef-in-sourcealpha>`__. In that case, the
   implementation might want to optimize the single channel case. This
   optimization must be omitted if it leads to privacy concerns of any
   matter. (See section `Privacy and Security
   Considerations <#priv-sec>`__ for more details.)

   If the input has infinite extent and is constant (e.g
   `FillPaint <#attr-valuedef-in-fillpaint>`__ where the fill is a solid
   color), this operation has no effect. If the input has infinite
   extent and the filter result is the input to an
   `feTile <#elementdef-fetile>`__, the filter is evaluated with
   `periodic boundary
   conditions <http://en.wikipedia.org/wiki/Periodic_boundary_conditions>`__.

   Because `feMorphology <#elementdef-femorphology>`__ operates on
   premultipied color values, it will always result in color values less
   than or equal to the alpha channel.

   *Attribute definitions:*

   ``operator`` = "*erode \| dilate*"
      A keyword indicating whether to erode (i.e., thin) or dilate
      (fatten) the source graphic.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `operator <#element-attrdef-femorphology-operator>`__ is
      erode.

      Animatable: yes.

   ``radius`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The radius (or radii) for the operation. If two
      `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__
      s are provided, the first number represents a x-radius and the
      second value represents a y-radius. If one number is provided,
      then that value is used for both X and Y. The values are in the
      coordinate system established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      A negative or zero value disables the effect of the given filter
      primitive (i.e., the result is the filter input image).

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `radius <#element-attrdef-femorphology-radius>`__ is 0.

      Animatable: yes.

   .. container:: example
      :name: example-131071e3

      ` <#example-131071e3>`__
      .. code:: highlight

         <svg width="5cm" height="7cm" viewBox="0 0 700 500"
              xmlns="http://www.w3.org/2000/svg">
           <title>Example feMorphology - Examples of erode and dilate</title>
           <desc>Five text strings drawn as outlines.
                 The first is unfiltered. The second and third use 'erode'.
                 The fourth and fifth use 'dilate'.</desc>
           <defs>
             <filter id="Erode3">
               <feMorphology operator="erode" in="SourceGraphic" radius="3" />
             </filter>
             <filter id="Erode6">
               <feMorphology operator="erode" in="SourceGraphic" radius="6" />
             </filter>
             <filter id="Dilate3">
               <feMorphology operator="dilate" in="SourceGraphic" radius="3" />
             </filter>
             <filter id="Dilate6">
               <feMorphology operator="dilate" in="SourceGraphic" radius="6" />
             </filter>
           </defs>
           <rect fill="none" stroke="blue" stroke-width="2"
                 x="1" y="1" width="698" height="498"/>
           <g isolation="isolate" >
             <g font-family="Verdana" font-size="75"
                       fill="none" stroke="black" stroke-width="6" >
               <text x="50" y="90">Unfiltered</text>
               <text x="50" y="180" filter="url(#Erode3)" >Erode radius 3</text>
               <text x="50" y="270" filter="url(#Erode6)" >Erode radius 6</text>
               <text x="50" y="360" filter="url(#Dilate3)" >Dilate radius 3</text>
               <text x="50" y="450" filter="url(#Dilate6)" >Dilate radius 6</text>
             </g>
           </g>
         </svg>

      .. container:: figure

         |Example of feMorphology|
         Example of feMorphology

      `View this example as SVG <examples/feMorphology.svg>`__

   .. rubric:: 9.18. Filter primitive
      `feOffset <#elementdef-feoffset>`__\ ` <#feOffsetElement>`__
      :name: feOffsetElement
      :class: heading settled

   Name:
   ``feOffset``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `dx <#element-attrdef-feoffset-dx>`__
   -  `dy <#element-attrdef-feoffset-dy>`__

   DOM Interfaces:
   `SVGFEOffsetElement <#InterfaceSVGFEOffsetElement>`__
   This filter primitive offsets the input image relative to its current
   position in the image space by the specified vector.

   This is important for effects like drop shadows.

   When applying this filter, the destination location may be offset by
   a fraction of a pixel in device space. In this case a high quality
   viewer should make use of appropriate interpolation techniques, for
   example bilinear or bicubic. This is especially recommended for
   dynamic viewers where this interpolation provides visually smoother
   movement of images. For static viewers this is less of a concern.
   Close attention should be made to the
   `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__
   property setting to determine the authors intent.

   *Attribute definitions:*

   ``dx`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      The amount to offset the input graphic along the x-axis. The
      offset amount is expressed in the coordinate system established by
      attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `dx <#element-attrdef-feoffset-dx>`__ is 0.

      Animatable: yes.

   ``dy`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      The amount to offset the input graphic along the y-axis. The
      offset amount is expressed in the coordinate system established by
      attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `dy <#element-attrdef-feoffset-dy>`__ is 0.

      Animatable: yes.

   `The example <#intro>`__ at the start of this chapter makes use of
   the `feOffset <#elementdef-feoffset>`__ filter primitive to offset
   the drop shadow from the original source graphic.

   .. rubric:: 9.19. Filter primitive
      `feSpecularLighting <#elementdef-fespecularlighting>`__\ ` <#feSpecularLightingElement>`__
      :name: feSpecularLightingElement
      :class: heading settled

   Name:
   ``feSpecularLighting``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
   and exactly one `light sources <#light-source>`__ element, in any
   order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__
   -  `surfaceScale <#element-attrdef-fespecularlighting-surfacescale>`__
   -  `specularConstant <#element-attrdef-fespecularlighting-specularconstant>`__
   -  `specularExponent <#element-attrdef-fespecularlighting-specularexponent>`__
   -  `kernelUnitLength <#element-attrdef-fespecularlighting-kernelunitlength>`__

   DOM Interfaces:
   `SVGFESpecularLightingElement <#InterfaceSVGFESpecularLightingElement>`__
   This filter primitive lights a source graphic using the alpha channel
   as a bump map. The resulting image is an RGBA image based on the
   light color. The lighting calculation follows the standard specular
   component of the Blinn-Phong lighting model. The resulting image
   depends on the light color, light position and surface geometry of
   the input bump map. The result of the lighting calculation is added.
   The filter primitive assumes that the viewer is at infinity in the z
   direction (i.e., the unit vector in the eye direction is (0,0,1)
   everywhere).

   Note: This filter primitive produces an image which contains the
   specular reflection part of the lighting calculation. Such a map is
   intended to be combined with a texture from a second filter primitive
   using the *add* term of the *arithmetic*
   `feComposite <#elementdef-fecomposite>`__ method. Multiple `light
   sources <#light-source>`__ can be simulated by adding several of
   these light maps before applying it to the texture image.

   The resulting RGBA image is computed as follows:

   ``S``\ :sub:```r```\ ``= k``\ :sub:```s```\ ``* pow(N.H, specularExponent) * L``\ :sub:```r``
   `\ ``S``\ :sub:```g```\ ``= k``\ :sub:```s```\ ``* pow(N.H, specularExponent) * L``\ :sub:```g``
   `\ ``S``\ :sub:```b```\ ``= k``\ :sub:```s```\ ``* pow(N.H, specularExponent) * L``\ :sub:```b``
   `\ ``S``\ :sub:```a```\ ``= max(S``\ :sub:```r,```\ ``S``\ :sub:```g,```\ ``S``\ :sub:```b```\ ``)``

   where

   | k\ :sub:`s` = specular lighting constant
   | N = surface normal unit vector, a function of x and y
   | H = "halfway" unit vector between eye unit vector and light unit
     vector
   | L\ :sub:`r`,L\ :sub:`g`,L\ :sub:`b` = RGB components of light

   See `feDiffuseLighting <#elementdef-fediffuselighting>`__ for
   definition of N and (L\ :sub:`r`, L\ :sub:`g`, L\ :sub:`b`).

   The definition of H reflects our assumption of the constant eye
   vector E = (0,0,1):

   ``H = (L + E) / Norm(L+E)``

   where L is the light unit vector.

   Unlike the `feDiffuseLighting <#elementdef-fediffuselighting>`__, the
   `feSpecularLighting <#elementdef-fespecularlighting>`__ filter
   produces a non-opaque image. This is due to the fact that the
   specular result (S\ :sub:`r`,S\ :sub:`g`,S\ :sub:`b`,S\ :sub:`a`) is
   meant to be added to the textured image. The alpha channel of the
   result is the max of the color components, so that where the specular
   light is zero, no additional coverage is added to the image and a
   fully white highlight will add opacity.

   The `feDiffuseLighting <#elementdef-fediffuselighting>`__ and
   `feSpecularLighting <#elementdef-fespecularlighting>`__ filters will
   often be applied together. An implementation may detect this and
   calculate both maps in one pass, instead of two.

   *Attribute definitions:*

   ``surfaceScale`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      height of surface when A\ :sub:`in` = 1.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `surfaceScale <#element-attrdef-fespecularlighting-surfacescale>`__
      is 1.

      Animatable: yes.

   ``specularConstant`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      ks in Phong lighting model. In SVG, this can be any non-negative
      number.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `specularConstant <#element-attrdef-fespecularlighting-specularconstant>`__
      is 1.

      Animatable: yes.

   ``specularExponent`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Exponent for specular term, larger is more "shiny".

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `specularExponent <#element-attrdef-fespecularlighting-specularexponent>`__
      is 1.

      Animatable: yes.

   ``kernelUnitLength`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The first number is the <dx> value. The second number is the <dy>
      value.

      If the <dy> value is not specified, it defaults to the same value
      as <dx>. Indicates the intended distance in current filter units
      (i.e., units as determined by the value of attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__) for
      ``dx`` and ``dy``, respectively, in the `surface normal
      calculation formulas <#SurfaceNormalCalculations>`__. By
      specifying value(s) for
      `kernelUnitLength <#element-attrdef-fespecularlighting-kernelunitlength>`__,
      the kernel becomes defined in a scalable, abstract coordinate
      system.

      If
      `kernelUnitLength <#element-attrdef-fespecularlighting-kernelunitlength>`__
      is not specified, the ``dx`` and ``dy`` values should represent
      very small deltas relative to a given ``(x,y)`` position, which
      might be implemented in some cases as one pixel in the
      intermediate image offscreen bitmap, which is a pixel-based
      coordinate system, and thus potentially not scalable. For some
      level of consistency across display media and user agents, it is
      necessary that a value be provided for kernelUnitLength.

      Animatable: yes.

   The light source is defined by one of the child elements
   `feDistantLight <#elementdef-fedistantlight>`__,
   `fePointLight <#elementdef-fepointlight>`__ or
   `feSpotLight <#elementdef-fespotlight>`__. The light color is
   specified by property `lighting-color <#propdef-lighting-color>`__.

   `The example <#intro>`__ at the start of this chapter makes use of
   the `feSpecularLighting <#elementdef-fespecularlighting>`__ filter
   primitive to achieve a highly reflective, 3D glowing effect.

   .. rubric:: 9.20. Filter primitive
      `feTile <#elementdef-fetile>`__\ ` <#feTileElement>`__
      :name: feTileElement
      :class: heading settled

   Name:
   ``feTile``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `in <#element-attrdef-filter-primitive-in>`__

   DOM Interfaces:
   `SVGFETileElement <#InterfaceSVGFETileElement>`__
   This filter primitive fills a target rectangle with a repeated, tiled
   pattern of an input image. The target rectangle is as large as the
   `filter primitive subregion <#filter-primitive-subregion>`__
   established by the `feTile <#elementdef-fetile>`__ element.

   Typically, the input image has been defined with its own `filter
   primitive subregion <#filter-primitive-subregion>`__ in order to
   define a reference tile. `feTile <#elementdef-fetile>`__ replicates
   the reference tile in both X and Y to completely fill the target
   rectangle. The top/left corner of each given tile is at location
   ``(x + i*width, y + j*height)``, where ``(x,y)`` represents the
   top/left of the input image’s filter primitive subregion, ``width``
   and ``height`` represent the width and height of the input image’s
   filter primitive subregion, and ``i`` and ``j`` can be any integer
   value. In most cases, the input image will have a smaller filter
   primitive subregion than the feTile in order to achieve a repeated
   pattern effect.

   Implementers must take appropriate measures in constructing the tiled
   image to avoid artifacts between tiles, particularly in situations
   where the user to device transform includes shear and/or rotation.
   Unless care is taken, interpolation can lead to edge pixels in the
   tile having opacity values lower or higher than expected due to the
   interaction of painting adjacent tiles which each have partial
   overlap with particular pixels.

   .. rubric:: 9.21. Filter primitive
      `feTurbulence <#elementdef-feturbulence>`__\ ` <#feTurbulenceElement>`__
      :name: feTurbulenceElement
      :class: heading settled

   Name:
   ``feTurbulence``
   Categories:
   `filter primitive <#filter-primitive>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `presentation
      attributes <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermPresentationAttribute>`__\ 
      — alignment-baseline, baseline-shift,
      `clip <https://drafts.fxtf.org/css-masking-1/#propdef-clip>`__,
      `clip-path <https://drafts.fxtf.org/css-masking-1/#propdef-clip-path>`__,
      `clip-rule <https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule>`__,
      `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__,
      `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__,
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__,
      `color-rendering <https://www.w3.org/TR/SVG2/painting.html#ColorRenderingProperty>`__,
      `cursor <https://drafts.csswg.org/css-ui-4/#propdef-cursor>`__,
      `direction <https://drafts.csswg.org/css-writing-modes-3/#propdef-direction>`__,
      `display <https://drafts.csswg.org/css-display-3/#propdef-display>`__,
      dominant-baseline, enable-background,
      `fill <https://svgwg.org/svg2-draft/painting.html#FillProperty>`__,
      `fill-opacity <https://svgwg.org/svg2-draft/painting.html#FillOpacityProperty>`__,
      `fill-rule <https://svgwg.org/svg2-draft/painting.html#FillRuleProperty>`__,
      `filter <#propdef-filter>`__,
      `flood-color <#propdef-flood-color>`__,
      `flood-opacity <#propdef-flood-opacity>`__,
      `font <https://drafts.csswg.org/css-fonts-4/#propdef-font>`__,
      font-family,
      `font-size <https://drafts.csswg.org/css-fonts-4/#propdef-font-size>`__,
      `font-size-adjust <https://drafts.csswg.org/css-fonts-5/#propdef-font-size-adjust>`__,
      font-stretch, font-style, font-variant, font-weight,
      glyph-orientation-horizontal, glyph-orientation-vertical,
      `image-rendering <https://drafts.csswg.org/css-images-3/#propdef-image-rendering>`__,
      `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__,
      kerning,
      `letter-spacing <https://drafts.csswg.org/css-text-4/#propdef-letter-spacing>`__,
      `lighting-color <#propdef-lighting-color>`__,
      `marker <https://svgwg.org/svg2-draft/painting.html#MarkerProperty>`__,
      `marker-end <https://svgwg.org/svg2-draft/painting.html#MarkerEndProperty>`__,
      `marker-mid <https://svgwg.org/svg2-draft/painting.html#MarkerMidProperty>`__,
      `marker-start <https://svgwg.org/svg2-draft/painting.html#MarkerStartProperty>`__,
      `mask <https://drafts.fxtf.org/css-masking-1/#propdef-mask>`__,
      `opacity <https://drafts.csswg.org/css-color-4/#propdef-opacity>`__,
      `overflow <https://drafts.csswg.org/css-overflow-3/#propdef-overflow>`__,
      `pointer-events <https://drafts.csswg.org/css-ui-4/#propdef-pointer-events>`__,
      `shape-rendering <https://svgwg.org/svg2-draft/painting.html#ShapeRenderingProperty>`__,
      `stop-color <https://svgwg.org/svg2-draft/pservers.html#StopColorProperty>`__,
      `stop-opacity <https://svgwg.org/svg2-draft/pservers.html#StopOpacityProperty>`__,
      `stroke <https://svgwg.org/svg2-draft/painting.html#StrokeProperty>`__,
      `stroke-dasharray <https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty>`__,
      `stroke-dashoffset <https://svgwg.org/svg2-draft/painting.html#StrokeDashoffsetProperty>`__,
      `stroke-linecap <https://svgwg.org/svg2-draft/painting.html#StrokeLinecapProperty>`__,
      `stroke-linejoin <https://svgwg.org/svg2-draft/painting.html#StrokeLinejoinProperty>`__,
      `stroke-miterlimit <https://svgwg.org/svg2-draft/painting.html#StrokeMiterlimitProperty>`__,
      `stroke-opacity <https://svgwg.org/svg2-draft/painting.html#StrokeOpacityProperty>`__,
      `stroke-width <https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty>`__,
      `text-anchor <https://svgwg.org/svg2-draft/text.html#TextAnchorProperty>`__,
      `text-decoration <https://drafts.csswg.org/css-text-decor-4/#propdef-text-decoration>`__,
      `text-rendering <https://svgwg.org/svg2-draft/painting.html#TextRenderingProperty>`__,
      `unicode-bidi <https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi>`__,
      `visibility <https://drafts.csswg.org/css-display-4/#propdef-visibility>`__,
      `word-spacing <https://drafts.csswg.org/css-text-4/#propdef-word-spacing>`__,
      `writing-mode <https://drafts.csswg.org/css-writing-modes-4/#propdef-writing-mode>`__
   -  `filter primitive attributes <#filter-primitive-attributes>`__
      —`x <#element-attrdef-filter-primitive-x>`__,
      `y <#element-attrdef-filter-primitive-y>`__,
      `width <#element-attrdef-filter-primitive-width>`__,
      `height <#element-attrdef-filter-primitive-height>`__,
      `result <#element-attrdef-filter-primitive-result>`__
   -  `class <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#ClassAttribute>`__
   -  `style <https://www.w3.org/TR/2011/REC-SVG11-20110816/styling.html#StyleAttribute>`__
   -  `baseFrequency <#element-attrdef-feturbulence-basefrequency>`__
   -  `numOctaves <#element-attrdef-feturbulence-numoctaves>`__
   -  `seed <#element-attrdef-feturbulence-seed>`__
   -  `stitchTiles <#element-attrdef-feturbulence-stitchtiles>`__
   -  `type <#element-attrdef-feturbulence-type>`__

   DOM Interfaces:
   `SVGFETurbulenceElement <#InterfaceSVGFETurbulenceElement>`__
   This filter primitive creates an image using the Perlin turbulence
   function. It allows the synthesis of artificial textures like clouds
   or marble. For a detailed description the of the Perlin turbulence
   function, see "Texturing and Modeling" `[TaM] <#biblio-tam>`__. The
   resulting image will fill the entire `filter primitive
   subregion <#filter-primitive-subregion>`__ for this filter primitive.

   It is possible to create bandwidth-limited noise by synthesizing only
   one octave.

   The C code below shows the exact algorithm used for this filter
   effect. The `filter primitive
   subregion <#filter-primitive-subregion>`__ is to be passed as the
   arguments fTileX, fTileY, fTileWidth and fTileHeight.

   For fractalSum, you get a turbFunctionResult that is aimed at a range
   of -1 to 1 (the actual result might exceed this range in some cases).
   To convert to a color or alpha value, use the formula
   ``colorValue = (turbFunctionResult + 1) / 2``, then clamp to the
   range 0 to 1.

   For turbulence, you get a turbFunctionResult that is aimed at a range
   of 0 to 1 (the actual result might exceed this range in some cases).
   To convert to a color or alpha value, use the formula
   ``colorValue = turbFunctionResult``, then clamp to the range 0 to 1.

   The following order is used for applying the pseudo random numbers.
   An initial seed value is computed based on the
   `seed <#element-attrdef-feturbulence-seed>`__ attribute. Then the
   implementation computes the lattice points for R, then continues
   getting additional pseudo random numbers relative to the last
   generated pseudo random number and computes the lattice points for G,
   and so on for B and A.

   The generated color and alpha values are in the color space
   determined by the
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property:

   .. code:: svgsamplecompressed

      /* Produces results in the range [1, 2**31 - 2].
      Algorithm is: r = (a * r) mod m
      where a = 16807 and m = 2**31 - 1 = 2147483647
      See [Park & Miller], CACM vol. 31 no. 10 p. 1195, Oct. 1988
      To test: the algorithm should produce the result 1043618065
      as the 10,000th generated number if the original seed is 1.
      */
      #define RAND_m 2147483647 /* 2**31 - 1 */
      #define RAND_a 16807 /* 7**5; primitive root of m */
      #define RAND_q 127773 /* m / a */
      #define RAND_r 2836 /* m % a */
      long setup_seed(long lSeed)
      {
        if (lSeed <= 0) lSeed = -(lSeed % (RAND_m - 1)) + 1;
        if (lSeed > RAND_m - 1) lSeed = RAND_m - 1;
        return lSeed;
      }
      long random(long lSeed)
      {
        long result;
        result = RAND_a * (lSeed % RAND_q) - RAND_r * (lSeed / RAND_q);
        if (result <= 0) result += RAND_m;
        return result;
      }
      #define BSize 0x100
      #define BM 0xff
      #define PerlinN 0x1000
      #define NP 12 /* 2^PerlinN */
      #define NM 0xfff
      static uLatticeSelector[BSize + BSize + 2];
      static double fGradient[4][BSize + BSize + 2][2];
      struct StitchInfo
      {
        int nWidth; // How much to subtract to wrap for stitching.
        int nHeight;
        int nWrapX; // Minimum value to wrap.
        int nWrapY;
      };
      static void init(long lSeed)
      {
        double s;
        int i, j, k;
        lSeed = setup_seed(lSeed);
        for(k = 0; k < 4; k++)
        {
          for(i = 0; i < BSize; i++)
          {
            uLatticeSelector[i] = i;
            do {
               for (j = 0; j < 2; j++)
                 fGradient[k][i][j] = (double)(((lSeed = random(lSeed)) % (BSize + BSize)) - BSize) / BSize;
            } while(fGradient[k][i][0] == 0 && fGradient[k][i][1] == 0);
            s = double(sqrt(fGradient[k][i][0] * fGradient[k][i][0] + fGradient[k][i][1] * fGradient[k][i][1]));
            if (s > 1) {
                i--; // discard the current random vector; try it again.
                continue;
            }
            fGradient[k][i][0] /= s;
            fGradient[k][i][1] /= s;
          }
        }
        while(--i)
        {
          k = uLatticeSelector[i];
          uLatticeSelector[i] = uLatticeSelector[j = (lSeed = random(lSeed)) % BSize];
          uLatticeSelector[j] = k;
        }
        for(i = 0; i < BSize + 2; i++)
        {
          uLatticeSelector[BSize + i] = uLatticeSelector[i];
          for(k = 0; k < 4; k++)
            for(j = 0; j < 2; j++)
              fGradient[k][BSize + i][j] = fGradient[k][i][j];
        }
      }
      #define s_curve(t) ( t * t * (3. - 2. * t) )
      #define lerp(t, a, b) ( a + t * (b - a) )
      double noise2(int nColorChannel, double vec[2], StitchInfo *pStitchInfo)
      {
        int bx0, bx1, by0, by1, b00, b10, b01, b11;
        double rx0, rx1, ry0, ry1, *q, sx, sy, a, b, t, u, v;
        register i, j;
        t = vec[0] + PerlinN;
        bx0 = (int)t;
        bx1 = bx0+1;
        rx0 = t - (int)t;
        rx1 = rx0 - 1.0f;
        t = vec[1] + PerlinN;
        by0 = (int)t;
        by1 = by0+1;
        ry0 = t - (int)t;
        ry1 = ry0 - 1.0f;
        // If stitching, adjust lattice points accordingly.
        if(pStitchInfo != NULL)
        {
          if(bx0 >= pStitchInfo->nWrapX)
            bx0 -= pStitchInfo->nWidth;
          if(bx1 >= pStitchInfo->nWrapX)
            bx1 -= pStitchInfo->nWidth;
          if(by0 >= pStitchInfo->nWrapY)
            by0 -= pStitchInfo->nHeight;
          if(by1 >= pStitchInfo->nWrapY)
            by1 -= pStitchInfo->nHeight;
        }
        bx0 &= BM;
        bx1 &= BM;
        by0 &= BM;
        by1 &= BM;
        i = uLatticeSelector[bx0];
        j = uLatticeSelector[bx1];
        b00 = uLatticeSelector[i + by0];
        b10 = uLatticeSelector[j + by0];
        b01 = uLatticeSelector[i + by1];
        b11 = uLatticeSelector[j + by1];
        sx = double(s_curve(rx0));
        sy = double(s_curve(ry0));
        q = fGradient[nColorChannel][b00]; u = rx0 * q[0] + ry0 * q[1];
        q = fGradient[nColorChannel][b10]; v = rx1 * q[0] + ry0 * q[1];
        a = lerp(sx, u, v);
        q = fGradient[nColorChannel][b01]; u = rx0 * q[0] + ry1 * q[1];
        q = fGradient[nColorChannel][b11]; v = rx1 * q[0] + ry1 * q[1];
        b = lerp(sx, u, v);
        return lerp(sy, a, b);
      }
      double turbulence(int nColorChannel, double *point, double fBaseFreqX, double fBaseFreqY,
                int nNumOctaves, bool bFractalSum, bool bDoStitching,
                double fTileX, double fTileY, double fTileWidth, double fTileHeight)
      {
        StitchInfo stitch;
        StitchInfo *pStitchInfo = NULL; // Not stitching when NULL.
        // Adjust the base frequencies if necessary for stitching.
        if(bDoStitching)
        {
          // When stitching tiled turbulence, the frequencies must be adjusted
          // so that the tile borders will be continuous.
          if(fBaseFreqX != 0.0)
          {
            double fLoFreq = double(floor(fTileWidth * fBaseFreqX)) / fTileWidth;
            double fHiFreq = double(ceil(fTileWidth * fBaseFreqX)) / fTileWidth;
            if(fBaseFreqX / fLoFreq < fHiFreq / fBaseFreqX)
              fBaseFreqX = fLoFreq;
            else
              fBaseFreqX = fHiFreq;
          }
          if(fBaseFreqY != 0.0)
          {
            double fLoFreq = double(floor(fTileHeight * fBaseFreqY)) / fTileHeight;
            double fHiFreq = double(ceil(fTileHeight * fBaseFreqY)) / fTileHeight;
            if(fBaseFreqY / fLoFreq < fHiFreq / fBaseFreqY)
              fBaseFreqY = fLoFreq;
            else
              fBaseFreqY = fHiFreq;
          }
          // Set up initial stitch values.
          pStitchInfo = &stitch;
          stitch.nWidth = int(fTileWidth * fBaseFreqX + 0.5f);
          stitch.nWrapX = fTileX * fBaseFreqX + PerlinN + stitch.nWidth;
          stitch.nHeight = int(fTileHeight * fBaseFreqY + 0.5f);
          stitch.nWrapY = fTileY * fBaseFreqY + PerlinN + stitch.nHeight;
        }
        double fSum = 0.0f;
        double vec[2];
        vec[0] = point[0] * fBaseFreqX;
        vec[1] = point[1] * fBaseFreqY;
        double ratio = 1;
        for(int nOctave = 0; nOctave < nNumOctaves; nOctave++)
        {
          if(bFractalSum)
            fSum += double(noise2(nColorChannel, vec, pStitchInfo) / ratio);
          else
            fSum += double(fabs(noise2(nColorChannel, vec, pStitchInfo)) / ratio);
          vec[0] *= 2;
          vec[1] *= 2;
          ratio *= 2;
          if(pStitchInfo != NULL)
          {
            // Update stitch values. Subtracting PerlinN before the multiplication and
            // adding it afterward simplifies to subtracting it once.
            stitch.nWidth *= 2;
            stitch.nWrapX = 2 * stitch.nWrapX - PerlinN;
            stitch.nHeight *= 2;
            stitch.nWrapY = 2 * stitch.nWrapY - PerlinN;
          }
        }
        return fSum;
      }

   *Attribute definitions:*

   ``baseFrequency`` = "`<number-optional-number> <#typedef-number-optional-number>`__"
      The base frequency (frequencies) parameter(s) for the noise
      function. If two
      `<number> <https://drafts.csswg.org/css-values-4/#number-value>`__\ s
      are provided, the first number represents a base frequency in the
      X direction and the second value represents a base frequency in
      the Y direction. If one number is provided, then that value is
      used for both X and Y.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `baseFrequency <#element-attrdef-feturbulence-basefrequency>`__ is
      0.

      Negative values are
      `unsupported <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermUnsupportedValue>`__.

      Animatable: yes.

   ``numOctaves`` = "`<integer> <https://drafts.csswg.org/css-values-4/#integer-value>`__"
      The numOctaves parameter for the noise function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `numOctaves <#element-attrdef-feturbulence-numoctaves>`__ is
      1.

      Negative values are
      `unsupported <http://www.w3.org/TR/2008/REC-SVGTiny12-20081222/intro.html#TermUnsupportedValue>`__.

      Animatable: yes.

      Note: The contribution of each additional octave to the color and
      alpha values in the final image is one-half of the preceding
      octave. At some point, the contribution of additional octaves
      becomes smaller than the color resolution for a given color depth.
      UAs may clamp the specified value for numOctaves during the
      processing depending on the supported color depth. (For example:
      For a color depth of 8 bits per channel, the UA may clamp the
      value of numOctaves to 9.)

   ``seed`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      The starting number for the pseudo random number generator.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `seed <#element-attrdef-feturbulence-seed>`__ is 0.

      When the seed number is handed over to the algorithm above it must
      first be truncated, i.e. rounded to the closest integer value
      towards zero.

      Animatable: yes.

   ``stitchTiles`` = "*stitch \| noStitch*"
      If ``stitchTiles="noStitch"``, no attempt is made to achieve
      smooth transitions at the border of tiles which contain a
      turbulence function. Sometimes the result will show clear
      discontinuities at the tile borders.

      If ``stitchTiles="stitch"``, then the user agent will
      automatically adjust baseFrequency-x and baseFrequency-y values
      such that the `feTurbulence <#elementdef-feturbulence>`__ node’s
      width and height (i.e., the width and height of the current
      subregion) contains an integral number of the Perlin tile width
      and height for the first octave. The baseFrequency will be
      adjusted up or down depending on which way has the smallest
      relative (not absolute) change as follows: Given the frequency,
      calculate ``lowFreq=floor(width*frequency)/width`` and
      ``hiFreq=ceil(width*frequency)/width``. If frequency/lowFreq <
      hiFreq/frequency then use lowFreq, else use hiFreq. While
      generating turbulence values, generate lattice vectors as normal
      for Perlin Noise, except for those lattice points that lie on the
      right or bottom edges of the active area (the size of the
      resulting tile). In those cases, copy the lattice vector from the
      opposite edge of the active area.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `stitchTiles <#element-attrdef-feturbulence-stitchtiles>`__ is
      noStitch.

      Animatable: yes.

   ``type`` = "*fractalNoise \| turbulence*"
      Indicates whether the filter primitive should perform a noise or
      turbulence function.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `type <#element-attrdef-feturbulence-type>`__ is turbulence.

      Animatable: yes.

   .. container:: example
      :name: example-a47584c3

      ` <#example-a47584c3>`__
      .. code:: highlight

         <svg width="450px" height="325px" viewBox="0 0 450 325"
              xmlns="http://www.w3.org/2000/svg">
           <title>Example feTurbulence - Examples of feTurbulence operations</title>
           <desc>Six rectangular areas showing the effects of
                 various parameter settings for feTurbulence.</desc>
           <g  font-family="Verdana" text-anchor="middle" font-size="10" >
             <defs>
               <filter id="Turb1" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2"/>
               </filter>
               <filter id="Turb2" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="turbulence" baseFrequency="0.1" numOctaves="2"/>
               </filter>
               <filter id="Turb3" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="8"/>
               </filter>
               <filter id="Turb4" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="4"/>
               </filter>
               <filter id="Turb5" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="4"/>
               </filter>
               <filter id="Turb6" filterUnits="objectBoundingBox"
                       x="0%" y="0%" width="100%" height="100%">
                 <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1"/>
               </filter>
             </defs>

             <rect x="1" y="1" width="448" height="323"
                   fill="none" stroke="blue" stroke-width="1"  />

             <rect x="25" y="25" width="100" height="75" filter="url(#Turb1)"  />
             <text x="75" y="117">type=turbulence</text>
             <text x="75" y="129">baseFrequency=0.05</text>
             <text x="75" y="141">numOctaves=2</text>

             <rect x="175" y="25" width="100" height="75" filter="url(#Turb2)"  />
             <text x="225" y="117">type=turbulence</text>
             <text x="225" y="129">baseFrequency=0.1</text>
             <text x="225" y="141">numOctaves=2</text>

             <rect x="325" y="25" width="100" height="75" filter="url(#Turb3)"  />
             <text x="375" y="117">type=turbulence</text>
             <text x="375" y="129">baseFrequency=0.05</text>
             <text x="375" y="141">numOctaves=8</text>

             <rect x="25" y="180" width="100" height="75" filter="url(#Turb4)"  />
             <text x="75" y="272">type=fractalNoise</text>
             <text x="75" y="284">baseFrequency=0.1</text>
             <text x="75" y="296">numOctaves=4</text>

             <rect x="175" y="180" width="100" height="75" filter="url(#Turb5)"  />
             <text x="225" y="272">type=fractalNoise</text>
             <text x="225" y="284">baseFrequency=0.4</text>
             <text x="225" y="296">numOctaves=4</text>

             <rect x="325" y="180" width="100" height="75" filter="url(#Turb6)"  />
             <text x="375" y="272">type=fractalNoise</text>
             <text x="375" y="284">baseFrequency=0.1</text>
             <text x="375" y="296">numOctaves=1</text>
           </g>
         </svg>

      .. container:: figure

         |Example of feTurbulence|
         Example of feTurbulence

      `View this example as SVG <examples/feTurbulence.svg>`__

   .. rubric:: 10. The
      `color-interpolation-filters <#propdef-color-interpolation-filters>`__
      property\ ` <#ColorInterpolationFiltersProperty>`__
      :name: ColorInterpolationFiltersProperty
      :class: heading settled

   The description of the
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property is as follows:

   Name:
   color-interpolation-filters
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   auto `\| <https://drafts.csswg.org/css-values-4/#comb-one>`__ sRGB \|
   linearRGB
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   linearRGB
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   All `filter primitives <#filter-primitive>`__
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   yes
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   n/a
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   as specified
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   discrete
   Media:
   visual

   auto\ \ ` <#valdef-color-interpolation-filters-auto>`__
      Indicates that the user agent can choose either the
      `sRGB <#valdef-color-interpolation-filters-srgb>`__ or
      `linearRGB <#valdef-color-interpolation-filters-linearrgb>`__
      spaces for filter effects color operations. This option indicates
      that the author doesn’t require that color operations occur in a
      particular color space.

   sRGB
      Indicates that filter effects color operations should occur in the
      gamma-encoded
      `sRGB <https://drafts.csswg.org/css-color-4/#sRGB-space>`__ color
      space.

   linearRGB
      Indicates that filter effects color operations should occur in the
      `linear-light
      sRGB <https://drafts.csswg.org/css-color-4/#sRGB-linear-space>`__
      color space.

   The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property specifies the color space for imaging operations performed
   via filter effects.

   Note: The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property just has an affect on filter operations. Therefore, it has
   no effect on filter primitives like
   `feOffset <#elementdef-feoffset>`__,
   `feImage <#elementdef-feimage>`__, `feTile <#elementdef-fetile>`__ or
   `feFlood <#elementdef-feflood>`__.

   Note: The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   has a different initial value than
   `color-interpolation <https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty>`__.
   color-interpolation-filters has an initial value of
   `linearRGB <#valdef-color-interpolation-filters-linearrgb>`__, where
   as color-interpolation has an initial value of
   `sRGB <#valdef-color-interpolation-filters-srgb>`__. Thus, in the
   default case, filter effects operations occur in the linearRGB color
   space, whereas all other color interpolations occur by default in the
   sRGB color space.

   Note: The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property has no affect on Filter Functions, which operate in the sRGB
   color space.

   The
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   property is a `presentation
   attribute <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute>`__
   for SVG elements.

   .. rubric:: 11. Light source elements and
      properties\ ` <#LightSourceDefinitions>`__
      :name: LightSourceDefinitions
      :class: heading settled

   .. rubric:: 11.1. Introduction\ ` <#LightSourceIntro>`__
      :name: LightSourceIntro
      :class: heading settled

   The following sections define the elements that define a light
   source, `feDistantLight <#elementdef-fedistantlight>`__,
   `fePointLight <#elementdef-fepointlight>`__ and
   `feSpotLight <#elementdef-fespotlight>`__, and property
   `lighting-color <#propdef-lighting-color>`__, which defines the color
   of the light.

   .. rubric:: 11.2. Light source
      `feDistantLight <#elementdef-fedistantlight>`__\ ` <#feDistantLightElement>`__
      :name: feDistantLightElement
      :class: heading settled

   Name:
   ``feDistantLight``
   Categories:
   `light source <#light-source>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `azimuth <#element-attrdef-fedistantlight-azimuth>`__
   -  `elevation <#element-attrdef-fedistantlight-elevation>`__

   DOM Interfaces:
   `SVGFEDistantLightElement <#InterfaceSVGFEDistantLightElement>`__
   *Attribute definitions:*

   ``azimuth`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Direction angle for the light source on the XY plane (clockwise),
      in degrees from the x axis.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `azimuth <#element-attrdef-fedistantlight-azimuth>`__ is 0.

      Animatable: yes.

   ``elevation`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Direction angle for the light source from the XY plane towards the
      Z-axis, in degrees. Note that the positive Z-axis points towards
      the viewer.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `elevation <#element-attrdef-fedistantlight-elevation>`__ is
      0.

      Animatable: yes.

   The following diagram illustrates the angles which
   `azimuth <#element-attrdef-fedistantlight-azimuth>`__ and
   `elevation <#element-attrdef-fedistantlight-elevation>`__ represent
   in an XYZ coordinate system.

   .. container:: figure

      |Angles which azimuth and elevation represent|
      Angles which azimuth and elevation represent

   .. rubric:: 11.3. Light source
      `fePointLight <#elementdef-fepointlight>`__\ ` <#fePointLightElement>`__
      :name: fePointLightElement
      :class: heading settled

   Name:
   ``fePointLight``
   Categories:
   `light source <#light-source>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `x <#element-attrdef-fepointlight-x>`__
   -  `y <#element-attrdef-fepointlight-y>`__
   -  `z <#element-attrdef-fepointlight-z>`__

   DOM Interfaces:
   `SVGFEPointLightElement <#InterfaceSVGFEPointLightElement>`__
   *Attribute definitions:*

   ``x`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      X location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `x <#element-attrdef-fepointlight-x>`__ is 0.

      Animatable: yes.

   ``y`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Y location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `y <#element-attrdef-fepointlight-y>`__ is 0.

      Animatable: yes.

   ``z`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Z location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element, assuming that, in the
      initial `local coordinate
      system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__
      , the positive Z-axis comes out towards the person viewing the
      content and assuming that one unit along the Z-axis equals `one
      unit in X and
      Y <https://www.w3.org/TR/SVG11/coords.html#Units_viewport_percentage>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `z <#element-attrdef-fepointlight-z>`__ is 0.

      Animatable: yes.

   .. rubric:: 11.4. Light source
      `feSpotLight <#elementdef-fespotlight>`__\ ` <#feSpotLightElement>`__
      :name: feSpotLightElement
      :class: heading settled

   Name:
   ``feSpotLight``
   Categories:
   `light source <#light-source>`__
   Content model:
   Any number of `descriptive
   elements <https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement>`__,
   `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__,
   `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__,
   `set <https://svgwg.org/specs/animations/#elementdef-set>`__
   elements, in any order.
   Attributes:

   -  `core
      attributes <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermCoreAttributes>`__\ 
      —
      `id <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#IDAttribute>`__,
      `xml:base <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLBaseAttribute>`__,
      `xml:lang <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLLangAttribute>`__,
      `xml:space <https://www.w3.org/TR/2011/REC-SVG11-20110816/struct.html#XMLSpaceAttribute>`__
   -  `x <#element-attrdef-fespotlight-x>`__
   -  `y <#element-attrdef-fespotlight-y>`__
   -  `z <#element-attrdef-fespotlight-z>`__
   -  `pointsAtX <#element-attrdef-fespotlight-pointsatx>`__
   -  `pointsAtY <#element-attrdef-fespotlight-pointsaty>`__
   -  `pointsAtZ <#element-attrdef-fespotlight-pointsatz>`__
   -  `specularExponent <#element-attrdef-fespotlight-specularexponent>`__
   -  `limitingConeAngle <#element-attrdef-fespotlight-limitingconeangle>`__

   DOM Interfaces:
   `SVGFESpotLightElement <#InterfaceSVGFESpotLightElement>`__
   *Attribute definitions:*

   ``x`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      X location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `x <#element-attrdef-fespotlight-x>`__ is 0.

      Animatable: yes.

   ``y`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Y location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `y <#element-attrdef-fespotlight-y>`__ is 0.

      Animatable: yes.

   ``z`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Z location for the light source in the coordinate system
      established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element, assuming that, in the
      initial `local coordinate
      system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__,
      the positive Z-axis comes out towards the person viewing the
      content and assuming that one unit along the Z-axis equals `one
      unit in X and
      Y <https://www.w3.org/TR/SVG11/coords.html#Units_viewport_percentage>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `z <#element-attrdef-fespotlight-z>`__ is 0.

      Animatable: yes.

   ``pointsAtX`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      X location in the coordinate system established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element of the point at which the
      light source is pointing.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `pointsAtX <#element-attrdef-fespotlight-pointsatx>`__ is 0.

      Animatable: yes.

   ``pointsAtY`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Y location in the coordinate system established by attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element of the point at which the
      light source is pointing.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `pointsAtY <#element-attrdef-fespotlight-pointsaty>`__ is 0.

      Animatable: yes.

   ``pointsAtZ`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Z location in the coordinate system established by the attribute
      `primitiveUnits <#element-attrdef-filter-primitiveunits>`__ on the
      `filter <#elementdef-filter>`__ element of the point at which the
      light source is pointing, assuming that, in the initial `local
      coordinate
      system <https://drafts.csswg.org/css-transforms-1/#local-coordinate-system>`__,
      the positive Z-axis comes out towards the person viewing the
      content and assuming that one unit along the Z-axis equals `one
      unit in X and
      Y <https://www.w3.org/TR/SVG11/coords.html#Units_viewport_percentage>`__.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for `pointsAtZ <#element-attrdef-fespotlight-pointsatz>`__ is 0.

      Animatable: yes.

   ``specularExponent`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      Exponent value controlling the focus for the light source.

      The `initial
      value <https://svgwg.org/svg2-draft/types.html#TermInitialValue>`__
      for
      `specularExponent <#element-attrdef-fespotlight-specularexponent>`__
      is 1.

      See section `Filter primitive
      <feDiffuseLighting> <#feDiffuseLightingElement>`__ for how to use
      `specularExponent <#element-attrdef-fespotlight-specularexponent>`__.

      Note:
      `specularExponent <#element-attrdef-fespotlight-specularexponent>`__
      for `feSpotLight <#elementdef-fespotlight>`__ serves a different
      use case than
      `specularExponent <#element-attrdef-fespecularlighting-specularexponent>`__
      for `feSpecularLighting <#elementdef-fespecularlighting>`__.

      Animatable: yes.

   ``limitingConeAngle`` = "`<number> <https://drafts.csswg.org/css-values-4/#number-value>`__"
      A limiting cone which restricts the region where the light is
      projected. No light is projected outside the cone.
      `limitingConeAngle <#element-attrdef-fespotlight-limitingconeangle>`__
      represents the angle in degrees between the spot light axis (i.e.
      the axis between the light source and the point to which it is
      pointing at) and the spot light cone. User agents should apply a
      smoothing technique such as anti-aliasing at the boundary of the
      cone.

      If no value is specified, then no limiting cone will be applied.

      Animatable: yes.

   .. rubric:: 11.5. The `lighting-color <#propdef-lighting-color>`__
      property\ ` <#LightingColorProperty>`__
      :name: LightingColorProperty
      :class: heading settled

   Name:
   lighting-color
   `Value: <https://www.w3.org/TR/css-values/#value-defs>`__
   `<color> <https://drafts.csswg.org/css-color-5/#typedef-color>`__
   `Initial: <https://www.w3.org/TR/css-cascade/#initial-values>`__
   white
   `Applies to: <https://www.w3.org/TR/css-cascade/#applies-to>`__
   `feDiffuseLighting <#elementdef-fediffuselighting>`__ and
   `feSpecularLighting <#elementdef-fespecularlighting>`__ elements
   `Inherited: <https://www.w3.org/TR/css-cascade/#inherited-property>`__
   no
   `Percentages: <https://www.w3.org/TR/css-values/#percentages>`__
   n/a
   `Computed value: <https://www.w3.org/TR/css-cascade/#computed>`__
   as specified
   `Canonical
   order: <https://www.w3.org/TR/cssom/#serializing-css-values>`__
   per grammar
   `Animation
   type: <https://www.w3.org/TR/web-animations/#animation-type>`__
   by computed value
   Media:
   visual
   The `lighting-color <#propdef-lighting-color>`__ property defines the
   color of the light source for `filter
   primitives <#filter-primitive>`__
   `feDiffuseLighting <#elementdef-fediffuselighting>`__ and
   `feSpecularLighting <#elementdef-fespecularlighting>`__.

   The `lighting-color <#propdef-lighting-color>`__ property is a
   `presentation
   attribute <https://www.w3.org/TR/2011/REC-SVG11-20110816/intro.html#TermPresentationAttribute>`__
   for SVG elements.

   .. rubric:: 12. Filter CSS
      `<image> <https://drafts.csswg.org/css-images-3/#typedef-image>`__
      values\ ` <#FilterCSSImageValue>`__
      :name: FilterCSSImageValue
      :class: heading settled

   CSS
   `<image> <https://drafts.csswg.org/css-images-3/#typedef-image>`__
   values can be filtered with the filter functions specified for the
   CSS `filter <#propdef-filter>`__ property. This specification
   introduces the <image> `<filter()> <#funcdef-filter>`__ function with
   the following syntax:

   .. code:: prod

      filter() = filter( [ <image> | <string> ], <filter-value-list> )

   The `<filter()> <#funcdef-filter>`__ function takes two arguments.
   The first argument is an
   `<image> <https://drafts.csswg.org/css-images-3/#typedef-image>`__.
   The second is a filter function list as specified for the CSS
   `filter <#propdef-filter>`__ property. The function takes the <image>
   parameter and applies the filter rules, returning a processing image.
   Filter- and filter effect regions are sized according to the
   `concrete object
   size <https://drafts.csswg.org/css-images-3/#concrete-object-size>`__
   of the input <image>.

   Note: Since the dimension and origin of the original image must be
   preserved, some filter effects like
   `<drop-shadow()> <#funcdef-filter-drop-shadow>`__ on a fully opaque
   image may not have any affect.

   For the `<blur()> <#funcdef-filter-blur>`__ function the
   `edgeMode <#element-attrdef-fegaussianblur-edgemode>`__ attribute on
   the `feGaussianBlur <#elementdef-fegaussianblur>`__ element is set to
   duplicate. This produces more pleasant results on the edges of the
   filtered input image.

   .. rubric:: 12.1. Interpolating
      filter()\ ` <#interpolating-filter-image>`__
      :name: interpolating-filter-image
      :class: heading settled

   If both the starting and ending image are
   `<filter()> <#funcdef-filter>`__\ s which may only differ by their
   used filter functions, they must be interpolated by interpolating
   their filter function lists as described in section `Interpolation of
   Filters <#interpolation-of-filters>`__. Otherwise, they must be
   interpolated as generic
   `<image> <https://drafts.csswg.org/css-images-3/#typedef-image>`__\ s.
   If the filter function interpolation can not be performed, the images
   must be interpolated as generic <image>s.

   .. rubric:: 13. Shorthands defined in terms of the
      `filter <#elementdef-filter>`__
      element\ ` <#ShorthandEquivalents>`__
      :name: ShorthandEquivalents
      :class: heading settled

   .. rubric:: 13.1. Filter primitive
      representation\ ` <#FilterPrimitiveRepresentation>`__
      :name: FilterPrimitiveRepresentation
      :class: heading settled

   Below are the equivalents for each of the filter functions expressed
   in terms of the 'filter element' element. The parameters from the
   function are labeled with brackets in the following style: [amount].
   In the case of parameters that are percentage values, they are
   converted to real numbers.

   .. rubric:: 13.1.1. grayscale\ ` <#grayscaleEquivalent>`__
      :name: grayscaleEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="grayscale">
        <feColorMatrix type="matrix"
                   values="
          (0.2126 + 0.7874 * [1 - amount]) (0.7152 - 0.7152  * [1 - amount]) (0.0722 - 0.0722 * [1 - amount]) 0 0
          (0.2126 - 0.2126 * [1 - amount]) (0.7152 + 0.2848  * [1 - amount]) (0.0722 - 0.0722 * [1 - amount]) 0 0
          (0.2126 - 0.2126 * [1 - amount]) (0.7152 - 0.7152  * [1 - amount]) (0.0722 + 0.9278 * [1 - amount]) 0 0
          0 0 0 1 0"/>
      </filter>

   .. rubric:: 13.1.2. sepia\ ` <#sepiaEquivalent>`__
      :name: sepiaEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="sepia">
        <feColorMatrix type="matrix"
                   values="
          (0.393 + 0.607 * [1 - amount]) (0.769 - 0.769 * [1 - amount]) (0.189 - 0.189 * [1 - amount]) 0 0
          (0.349 - 0.349 * [1 - amount]) (0.686 + 0.314 * [1 - amount]) (0.168 - 0.168 * [1 - amount]) 0 0
          (0.272 - 0.272 * [1 - amount]) (0.534 - 0.534 * [1 - amount]) (0.131 + 0.869 * [1 - amount]) 0 0
          0 0 0 1 0"/>
      </filter>

   .. rubric:: 13.1.3. saturate\ ` <#saturateEquivalent>`__
      :name: saturateEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="saturate">
        <feColorMatrix type="saturate" values="[amount]"/>
      </filter>

   .. rubric:: 13.1.4. hue-rotate\ ` <#huerotateEquivalent>`__
      :name: huerotateEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="hue-rotate">
        <feColorMatrix type="hueRotate" values="[angle]"/>
      </filter>

   .. rubric:: 13.1.5. invert\ ` <#invertEquivalent>`__
      :name: invertEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="invert">
        <feComponentTransfer>
            <feFuncR type="table" tableValues="[amount] (1 - [amount])"/>
            <feFuncG type="table" tableValues="[amount] (1 - [amount])"/>
            <feFuncB type="table" tableValues="[amount] (1 - [amount])"/>
        </feComponentTransfer>
      </filter>

   .. rubric:: 13.1.6. opacity\ ` <#opacityEquivalent>`__
      :name: opacityEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="opacity">
        <feComponentTransfer>
            <feFuncA type="table" tableValues="0 [amount]"/>
        </feComponentTransfer>
      </filter>

   .. rubric:: 13.1.7. brightness\ ` <#brightnessEquivalent>`__
      :name: brightnessEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="brightness">
        <feComponentTransfer>
            <feFuncR type="linear" slope="[amount]"/>
            <feFuncG type="linear" slope="[amount]"/>
            <feFuncB type="linear" slope="[amount]"/>
        </feComponentTransfer>
      </filter>

   .. rubric:: 13.1.8. contrast\ ` <#contrastEquivalent>`__
      :name: contrastEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="contrast">
        <feComponentTransfer>
            <feFuncR type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
            <feFuncG type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
            <feFuncB type="linear" slope="[amount]" intercept="-(0.5 * [amount]) + 0.5"/>
        </feComponentTransfer>
      </filter>

   .. rubric:: 13.1.9. blur\ ` <#blurEquivalent>`__
      :name: blurEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="blur">
        <feGaussianBlur stdDeviation="[radius radius]" edgeMode="[edge mode]" >
      </filter>

   Where edge mode computes to none for the `filter <#propdef-filter>`__
   property and to duplicate for the CSS Image
   `<filter()> <#funcdef-filter>`__ function.

   Note: The `<blur()> <#funcdef-filter-blur>`__ function may increase
   the UA defined filter region. See `Filter region for
   shorthands <#filter-region-for-shorthands>`__.

   .. rubric:: 13.1.10. drop-shadow\ ` <#dropshadowEquivalent>`__
      :name: dropshadowEquivalent
      :class: heading settled

   .. code:: highlight

      <filter id="drop-shadow">
        <feGaussianBlur in="[alpha-channel-of-input]" stdDeviation="[radius]"/>
        <feOffset dx="[offset-x]" dy="[offset-y]" result="offsetblur"/>
        <feFlood flood-color="[color]"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="[input-image]"/>
        </feMerge>
      </filter>

   Note: The `<drop-shadow()> <#funcdef-filter-drop-shadow>`__ function
   may increase the UA defined filter region. See `Filter region for
   shorthands <#filter-region-for-shorthands>`__.

   .. rubric:: 13.2. Filter region for
      shorthands\ ` <#filter-region-for-shorthands>`__
      :name: filter-region-for-shorthands
      :class: heading settled

   All shorthand filters implemented with filter primitives in the
   previous subsection must have a UA defined `filter
   region <#filter-region>`__. The filter region must cover the visual
   content of an element including overflowing content, graphical
   control elements such as scrollbars,
   `border <https://drafts.csswg.org/css-backgrounds-3/#propdef-border>`__/`border-image <https://drafts.csswg.org/css-backgrounds-3/#propdef-border-image>`__,
   `box-shadow <https://drafts.csswg.org/css-backgrounds-3/#propdef-box-shadow>`__,
   `text-shadow <https://drafts.csswg.org/css-text-decor-4/#propdef-text-shadow>`__
   and `outline <https://drafts.csswg.org/css-ui-4/#propdef-outline>`__.
   Furthermore, if a shorthand filter expands this visible area like it
   is the case for `<blur()> <#funcdef-filter-blur>`__ or
   `<drop-shadow()> <#funcdef-filter-drop-shadow>`__ the filter region
   must cover this area as well.

   Note: For the handling of `filter sources <#FilterElement>`__ see
   section `Filter region <#FilterEffectsRegion>`__.

   .. rubric:: 14. Animation of Filters\ ` <#animation-of-filters>`__
      :name: animation-of-filters
      :class: heading settled

   .. rubric:: 14.1. Interpolation of Filter Function
      Lists\ ` <#interpolation-of-filters>`__
      :name: interpolation-of-filters
      :class: heading settled

   For interpolation between one filter and a second, the steps
   corresponding to the first matching condition in the following list
   must be run:

   ` <#from-to-animation-equal>`__\ If both filters have a `<filter-value-list> <#typedef-filter-value-list>`__ of same length without `<url> <#typedef-filter-url>`__ and for each `<filter-function> <#typedef-filter-function>`__ for which there is a corresponding item in each list
      Interpolate each `<filter-function> <#typedef-filter-function>`__
      pair following the rules in section `Interpolation of Filter
      Functions <#interpolation-of-filter-functions>`__.
   ` <#from-to-animation-unequal>`__\ If both filters have a `<filter-value-list> <#typedef-filter-value-list>`__ of different length without `<url> <#typedef-filter-url>`__ and for each `<filter-function> <#typedef-filter-function>`__ for which there is a corresponding item in each list
      #. Append the missing equivalent
         `<filter-function> <#typedef-filter-function>`__\ s from the
         longer list to the end of the shorter list. The new added
         <filter-function>s must be initialized to their initial values
         for interpolation.
      #. Interpolate each
         `<filter-function> <#typedef-filter-function>`__ pair following
         the rules in section `Interpolation of Filter
         Functions <#interpolation-of-filter-functions>`__.
   ` <#interpolation-none-filter-functions>`__\ If one filter is none and the other is a `<filter-value-list> <#typedef-filter-value-list>`__ without `<url> <#typedef-filter-url>`__
      #. Replace none with the corresponding
         `<filter-value-list> <#typedef-filter-value-list>`__ of the
         other filter. The new
         `<filter-function> <#typedef-filter-function>`__\ s must be
         initialized to their initial values for interpolation.
      #. Interpolate each
         `<filter-function> <#typedef-filter-function>`__ pair following
         the rules in section `Interpolation of Filter
         Functions <#interpolation-of-filter-functions>`__.
   ` <#no-interpolation>`__\ Otherwise
      Use discrete interpolation.

   ` <#issue-f7e128e9>`__ Compute distance of filter functions. `[Issue
   #91] <https://github.com/w3c/fxtf-drafts/issues/91>`__

   .. rubric:: 14.2. Addition\ ` <#addition>`__
      :name: addition
      :class: heading settled

   It is possible to combine independent animations of
   `<filter-value-list> <#typedef-filter-value-list>`__\ s
   `[SVG11] <#biblio-svg11>`__.

   Given two filter values representing an base value
   (``base filter list``) and a value to add (``added filter list``),
   returns the concatenation of the the two lists:
   ‘\ ``base filter list`` ``added filter list``\ ’.

   .. container:: example
      :name: example-39a9a3b0

      ` <#example-39a9a3b0>`__ The following SVG animation has two
      `animate <https://svgwg.org/specs/animations/#elementdef-animate>`__
      elements animating `filter <#propdef-filter>`__ property of the
      `rect <https://svgwg.org/svg2-draft/shapes.html#elementdef-rect>`__
      element. Both specified animations are additive and have a
      duration of ``10s``.
      .. code:: highlight

         <rect width="200px" filter="none" ...>
           <animate attributeName="filter" from="blur(0px)" to="blur(10px)" dur="10s"
                    additive="sum"/>
           <animate attributeName="filter" from="sepia(0)" to="sepia(1)" dur="10s"
                    additive="sum"/>
         </rect>

      After ``5s``, the `used
      value <https://drafts.csswg.org/css-cascade-5/#used-value>`__ of
      `filter <#propdef-filter>`__ is blur(5px) sepia(0.5).

   .. rubric:: 14.3. Accumulation\ ` <#accumulation>`__
      :name: accumulation
      :class: heading settled

   Accumulation of
   `<filter-value-list> <#typedef-filter-value-list>`__\ s follows the
   same matching and extending rules as
   `interpolation <#interpolation-of-filters>`__, falling back to
   `replace <https://drafts.csswg.org/web-animations-1/#composite-operation-replace>`__
   behavior if the lists do not match. However instead of interpolating
   the matching `<filter-function> <#typedef-filter-function>`__ pairs,
   their arguments are arithmetically added together - except in the
   case of <filter-function>s whose initial value for interpolation is
   1, which combine using one-based addition:

   ``V``\ :sub:```result``` = ``V``\ :sub:```a``` + ``V``\ :sub:```b```
   - 1

   .. rubric:: 15. Privacy and Security Considerations\ ` <#priv-sec>`__
      :name: priv-sec
      :class: heading settled

   .. rubric:: 15.1. Tainted Filter
      Primitives\ ` <#tainted-filter-primitives>`__
      :name: tainted-filter-primitives
      :class: heading settled

   It is important that the timing of any filter operation is
   independent of pixel values derived from the filtered content or
   other sources potentially containing privacy-sensitive information.

   The following `filter primitives <#filter-primitive>`__ may have
   access to pixel values that potentially contain privacy-sensitive
   information, either from the filtered object itself or other sources
   such as CSS styling. These primitives must be flagged as "tainted".

   #. `feFlood <#elementdef-feflood>`__ when the `specified
      value <https://drafts.csswg.org/css-cascade-5/#specified-value>`__
      of the `flood-color <#propdef-flood-color>`__ property computes to
      currentColor,

   #. `feDropShadow <#elementdef-fedropshadow>`__ when the `specified
      value <https://drafts.csswg.org/css-cascade-5/#specified-value>`__
      value of the `flood-color <#propdef-flood-color>`__ property
      computes to currentColor,

   #. `feDiffuseLighting <#elementdef-fediffuselighting>`__, when the
      `specified
      value <https://drafts.csswg.org/css-cascade-5/#specified-value>`__
      value of the `lighting-color <#propdef-lighting-color>`__ property
      computes to currentColor

   #. `feSpecularLighting <#elementdef-fespecularlighting>`__ when the
      `specified
      value <https://drafts.csswg.org/css-cascade-5/#specified-value>`__
      value of the `lighting-color <#propdef-lighting-color>`__ property
      computes to currentColor,

   #. `feImage <#elementdef-feimage>`__, when the
      `<url> <#typedef-filter-url>`__ reference points to an element or
      fetches a resource with the fetching mode *No-CORS* and

   #. the filter primitives:
      `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__,
      `SourceAlpha <#attr-valuedef-in-sourcealpha>`__,
      `BackgroundImage <#attr-valuedef-in-backgroundimage>`__,
      `BackgroundAlpha <#attr-valuedef-in-backgroundalpha>`__,
      `FillPaint <#attr-valuedef-in-fillpaint>`__ and
      `StrokePaint <#attr-valuedef-in-strokepaint>`__.

   `feFlood <#elementdef-feflood>`__,
   `feDropShadow <#elementdef-fedropshadow>`__,
   `feDiffuseLighting <#elementdef-fediffuselighting>`__ and
   `feSpecularLighting <#elementdef-fespecularlighting>`__ are
   primitives with one or more CSS properties that take
   `<color> <https://drafts.csswg.org/css-color-5/#typedef-color>`__ as
   property value. <color> consists of (amongst others) the currentColor
   keyword. The `used
   value <https://drafts.csswg.org/css-cascade-5/#used-value>`__ for
   currentColor derives from the
   `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__
   property. Since color can be set by the
   `:visited <https://drafts.csswg.org/selectors-4/#visited-pseudo>`__
   pseudo selector, it potentially contains privacy-sensitive
   information and therefore these primitives must be marked as tainted.

   `feImage <#elementdef-feimage>`__ can reference cross-domain images
   as well as document fragments such as SVG `graphics
   elements <https://svgwg.org/svg2-draft/struct.html#graphics-element>`__.
   These references potentially contain privacy-sensitive information
   and therefore the primitive must be marked as tainted.

   The filter primitives
   `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__,
   `SourceAlpha <#attr-valuedef-in-sourcealpha>`__,
   `BackgroundImage <#attr-valuedef-in-backgroundimage>`__,
   `BackgroundAlpha <#attr-valuedef-in-backgroundalpha>`__,
   `FillPaint <#attr-valuedef-in-fillpaint>`__ and
   `StrokePaint <#attr-valuedef-in-strokepaint>`__ either reference
   document fragments such as SVG `graphics
   elements <https://svgwg.org/svg2-draft/struct.html#graphics-element>`__
   or style information that may derive directly or indirectly from the
   `color <https://drafts.csswg.org/css-color-4/#propdef-color>`__
   property. Therefore these primitives must be marked as tainted.

   Every `filter primitive <#filter-primitive>`__ that has a "tainted"
   flagged filter primitive as input must be flagged as "tainted" as
   well.

   Filter operations must be implemented in such a way that they always
   take the same amount of time regardless of the pixel values if one of
   the input filter primitives is flagged as "tainted".

   Note: This specification aggravates the restrictions to filter
   primitives based on implementation feedback from user agents.

   .. rubric:: 15.2.
      \ `feDisplacementMap <#elementdef-fedisplacementmap>`__
      Restrictions\ ` <#fedisplacemnentmap-restrictions>`__
      :name: fedisplacemnentmap-restrictions
      :class: heading settled

   If `feDisplacementMap <#elementdef-fedisplacementmap>`__ has a
   "tainted" flagged filter primitive as input and this input filter
   primitive is used as displacement map (referenced by
   `in2 <#element-attrdef-fedisplacementmap-in2>`__), then
   feDisplacementMap must not proceed with the filter operation and acts
   as a `pass through filter <#pass-through-filter>`__.

   .. rubric:: 15.3. Origin Restrictions\ ` <#origin-restrictions>`__
      :name: origin-restrictions
      :class: heading settled

   User agents must use the `CORS
   request <https://fetch.spec.whatwg.org/#cors-request>`__ defined by
   the `[Fetch] <#biblio-fetch>`__ specification for the
   `filter <#propdef-filter>`__ property. When fetching, user agents
   must use "Anonymous" mode, set the referrer source to the
   stylesheet’s URL and set the origin to the URL of the containing
   document. If this results in network errors, the effect is as if the
   value none had been specified.

   .. rubric:: 15.4. Timing Attacks\ ` <#timing-attack>`__
      :name: timing-attack
      :class: heading settled

   If any of the above rules are not followed, an attacker could infer
   information and mount a timing attack.

   A timing attack is a method of obtaining information about content
   that is otherwise protected, based on studying the amount of time it
   takes for an operation to occur. If, for example, red pixels took
   longer to draw than green pixels, one might be able to reconstruct a
   rough image of the element being rendered, without ever having access
   to the content of the element. Security studies show that timing
   differences on arithmetic operations can be caused by the hardware
   architecture or compiler `[ArTD] <#biblio-artd>`__.

   .. rubric:: Appendix A: The deprecated enable-background
      property\ ` <#AccessBackgroundImage>`__
      :name: AccessBackgroundImage
      :class: no-num heading settled

   SVG 1.1 introduced the enable-background property
   `[SVG11] <#biblio-svg11>`__. The property defined the back drop under
   the `filter region <#filter-region>`__ at the time that the
   `filter <#elementdef-filter>`__ element was invoked. The concept
   defined by this property was identified to be incompatible with the
   model of stacking context in CSS at the time writing this
   specification. UAs can choose to implement the enable-background
   property as defined in SVG 1.1 but will not be compatible to this
   specification or to CSS Compositing and Blending
   `[COMPOSITING-1] <#biblio-compositing-1>`__.

   This specification does not support the enable-background property.
   UAs must support the
   `isolation <https://drafts.fxtf.org/compositing-2/#propdef-isolation>`__
   property instead `[COMPOSITING-1] <#biblio-compositing-1>`__.

   .. rubric:: Appendix B: DOM interfaces\ ` <#DOMInterfaces>`__
      :name: DOMInterfaces
      :class: no-num heading settled

   .. rubric:: Interface
      SVGFilterElement\ ` <#InterfaceSVGFilterElement>`__
      :name: InterfaceSVGFilterElement
      :class: heading settled

   The ``SVGFilterElement`` interface corresponds to the
   `filter <#elementdef-filter>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFilterElement : SVGElement {
        readonly attribute SVGAnimatedEnumeration filterUnits;
        readonly attribute SVGAnimatedEnumeration primitiveUnits;
        readonly attribute SVGAnimatedLength x;
        readonly attribute SVGAnimatedLength y;
        readonly attribute SVGAnimatedLength width;
        readonly attribute SVGAnimatedLength height;
      };

      SVGFilterElement includes SVGURIReference;

   .. container::

      Attributes:
         ``filterUnits``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `filterUnits <#element-attrdef-filter-filterunits>`__ on the
            given `filter <#elementdef-filter>`__ element. Takes one of
            the constants defined in
            `SVGUnitTypes <https://svgwg.org/svg2-draft/types.html#InterfaceSVGUnitTypes>`__.

         ``primitiveUnits``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `primitiveUnits <#element-attrdef-filter-primitiveunits>`__
            on the given `filter <#elementdef-filter>`__ element. Takes
            one of the constants defined in
            `SVGUnitTypes <https://svgwg.org/svg2-draft/types.html#InterfaceSVGUnitTypes>`__.

         ``x``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute `x <#element-attrdef-filter-x>`__
            on the given `filter <#elementdef-filter>`__ element.

         ``y``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute `y <#element-attrdef-filter-y>`__
            on the given `filter <#elementdef-filter>`__ element.

         ``width``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `width <#element-attrdef-filter-width>`__ on the given
            `filter <#elementdef-filter>`__ element.

         ``height``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `height <#element-attrdef-filter-height>`__ on the given
            `filter <#elementdef-filter>`__ element.

   .. rubric:: Interface
      SVGFilterPrimitiveStandardAttributes\ ` <#InterfaceSVGFilterPrimitiveStandardAttributes>`__
      :name: InterfaceSVGFilterPrimitiveStandardAttributes
      :class: heading settled

   .. code:: idl

      interface mixin SVGFilterPrimitiveStandardAttributes {
        readonly attribute SVGAnimatedLength x;
        readonly attribute SVGAnimatedLength y;
        readonly attribute SVGAnimatedLength width;
        readonly attribute SVGAnimatedLength height;
        readonly attribute SVGAnimatedString result;
      };

   .. container::

      Attributes:
         ``x``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `x <#element-attrdef-filter-primitive-x>`__ on the given
            element.

         ``y``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `y <#element-attrdef-filter-primitive-y>`__ on the given
            element.

         ``width``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `width <#element-attrdef-filter-primitive-width>`__ on the
            given element.

         ``height``,  of type `SVGAnimatedLength <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedLength>`__, readonly
            Corresponds to attribute
            `height <#element-attrdef-filter-primitive-height>`__ on the
            given element.

         ``result``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `result <#element-attrdef-filter-primitive-result>`__ on the
            given element.

   .. rubric:: Interface
      SVGFEBlendElement\ ` <#InterfaceSVGFEBlendElement>`__
      :name: InterfaceSVGFEBlendElement
      :class: heading settled

   The ``SVGFEBlendElement`` interface corresponds to the
   `feBlend <#elementdef-feblend>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEBlendElement : SVGElement {

        // Blend Mode Types
        const unsigned short SVG_FEBLEND_MODE_UNKNOWN = 0;
        const unsigned short SVG_FEBLEND_MODE_NORMAL = 1;
        const unsigned short SVG_FEBLEND_MODE_MULTIPLY = 2;
        const unsigned short SVG_FEBLEND_MODE_SCREEN = 3;
        const unsigned short SVG_FEBLEND_MODE_DARKEN = 4;
        const unsigned short SVG_FEBLEND_MODE_LIGHTEN = 5;
        const unsigned short SVG_FEBLEND_MODE_OVERLAY = 6;
        const unsigned short SVG_FEBLEND_MODE_COLOR_DODGE = 7;
        const unsigned short SVG_FEBLEND_MODE_COLOR_BURN = 8;
        const unsigned short SVG_FEBLEND_MODE_HARD_LIGHT = 9;
        const unsigned short SVG_FEBLEND_MODE_SOFT_LIGHT = 10;
        const unsigned short SVG_FEBLEND_MODE_DIFFERENCE = 11;
        const unsigned short SVG_FEBLEND_MODE_EXCLUSION = 12;
        const unsigned short SVG_FEBLEND_MODE_HUE = 13;
        const unsigned short SVG_FEBLEND_MODE_SATURATION = 14;
        const unsigned short SVG_FEBLEND_MODE_COLOR = 15;
        const unsigned short SVG_FEBLEND_MODE_LUMINOSITY = 16;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedString in2;
        readonly attribute SVGAnimatedEnumeration mode;
      };

      SVGFEBlendElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Blend Mode Types”:
         ``SVG_FEBLEND_MODE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_FEBLEND_MODE_NORMAL``
            Corresponds to value 'normal'.

         ``SVG_FEBLEND_MODE_MULTIPLY``
            Corresponds to value 'multiply'.

         ``SVG_FEBLEND_MODE_SCREEN``
            Corresponds to value 'screen'.

         ``SVG_FEBLEND_MODE_DARKEN``
            Corresponds to value 'darken'.

         ``SVG_FEBLEND_MODE_LIGHTEN``
            Corresponds to value 'lighten'.

         ``SVG_FEBLEND_MODE_OVERLAY``
            Corresponds to value
            '`overlay <https://drafts.csswg.org/css-position-4/#propdef-overlay>`__'.

         ``SVG_FEBLEND_MODE_COLOR_DODGE``
            Corresponds to value 'color-dodge'.

         ``SVG_FEBLEND_MODE_COLOR_BURN``
            Corresponds to value 'color-burn'.

         ``SVG_FEBLEND_MODE_HARD_LIGHT``
            Corresponds to value 'hard-light'.

         ``SVG_FEBLEND_MODE_SOFT_LIGHT``
            Corresponds to value 'soft-light'.

         ``SVG_FEBLEND_MODE_DIFFERENCE``
            Corresponds to value 'difference'.

         ``SVG_FEBLEND_MODE_EXCLUSION``
            Corresponds to value 'exclusion'.

         ``SVG_FEBLEND_MODE_HUE``
            Corresponds to value 'hue'.

         ``SVG_FEBLEND_MODE_SATURATION``
            Corresponds to value 'saturation'.

         ``SVG_FEBLEND_MODE_COLOR``
            Corresponds to value
            '`color <https://drafts.csswg.org/css-color-4/#propdef-color>`__'.

         ``SVG_FEBLEND_MODE_LUMINOSITY``
            Corresponds to value 'luminosity'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feBlend <#elementdef-feblend>`__ element.

         ``in2``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in2 <#element-attrdef-feblend-in2>`__ on the given
            `feBlend <#elementdef-feblend>`__ element.

         ``mode``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `mode <#element-attrdef-feblend-mode>`__ on the given
            `feBlend <#elementdef-feblend>`__ element. Takes one of the
            SVG_FEBLEND_MODE\_\* constants defined on this interface.

   .. rubric:: Interface
      SVGFEColorMatrixElement\ ` <#InterfaceSVGFEColorMatrixElement>`__
      :name: InterfaceSVGFEColorMatrixElement
      :class: heading settled

   The ``SVGFEColorMatrixElement`` interface corresponds to the
   `feColorMatrix <#elementdef-fecolormatrix>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEColorMatrixElement : SVGElement {

        // Color Matrix Types
        const unsigned short SVG_FECOLORMATRIX_TYPE_UNKNOWN = 0;
        const unsigned short SVG_FECOLORMATRIX_TYPE_MATRIX = 1;
        const unsigned short SVG_FECOLORMATRIX_TYPE_SATURATE = 2;
        const unsigned short SVG_FECOLORMATRIX_TYPE_HUEROTATE = 3;
        const unsigned short SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA = 4;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedEnumeration type;
        readonly attribute SVGAnimatedNumberList values;
      };

      SVGFEColorMatrixElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Color Matrix Types”:
         ``SVG_FECOLORMATRIX_TYPE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_FECOLORMATRIX_TYPE_MATRIX``
            Corresponds to value 'matrix'.

         ``SVG_FECOLORMATRIX_TYPE_SATURATE``
            Corresponds to value 'saturate'.

         ``SVG_FECOLORMATRIX_TYPE_HUEROTATE``
            Corresponds to value 'hueRotate'.

         ``SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA``
            Corresponds to value 'luminanceToAlpha'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feColorMatrix <#elementdef-fecolormatrix>`__ element.

         ``type``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `type <#element-attrdef-fecolormatrix-type>`__ on the given
            `feColorMatrix <#elementdef-fecolormatrix>`__ element. Takes
            one of the SVG_FECOLORMATRIX_TYPE\_\* constants defined on
            this interface.

         ``values``,  of type `SVGAnimatedNumberList <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumberList>`__, readonly
            Corresponds to attribute
            `values <#element-attrdef-fecolormatrix-values>`__ on the
            given `feColorMatrix <#elementdef-fecolormatrix>`__ element.

   .. rubric:: Interface
      SVGFEComponentTransferElement\ ` <#InterfaceSVGFEComponentTransferElement>`__
      :name: InterfaceSVGFEComponentTransferElement
      :class: heading settled

   The ``SVGFEComponentTransferElement`` interface corresponds to the
   `feComponentTransfer <#elementdef-fecomponenttransfer>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEComponentTransferElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
      };

      SVGFEComponentTransferElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

   .. rubric:: Interface
      SVGComponentTransferFunctionElement\ ` <#InterfaceSVGComponentTransferFunctionElement>`__
      :name: InterfaceSVGComponentTransferFunctionElement
      :class: heading settled

   This interface defines a base interface used by the component
   transfer function interfaces.

   .. code:: idl

      [Exposed=Window]
      interface SVGComponentTransferFunctionElement : SVGElement {

        // Component Transfer Types
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN = 0;
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY = 1;
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_TABLE = 2;
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE = 3;
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_LINEAR = 4;
        const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_GAMMA = 5;

        readonly attribute SVGAnimatedEnumeration type;
        readonly attribute SVGAnimatedNumberList tableValues;
        readonly attribute SVGAnimatedNumber slope;
        readonly attribute SVGAnimatedNumber intercept;
        readonly attribute SVGAnimatedNumber amplitude;
        readonly attribute SVGAnimatedNumber exponent;
        readonly attribute SVGAnimatedNumber offset;
      };

   .. container::

      Constants in group “Component Transfer Types”:
         ``SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY``
            Corresponds to value 'identity'.

         ``SVG_FECOMPONENTTRANSFER_TYPE_TABLE``
            Corresponds to value 'table'.

         ``SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE``
            Corresponds to value 'discrete'.

         ``SVG_FECOMPONENTTRANSFER_TYPE_LINEAR``
            Corresponds to value 'linear'.

         ``SVG_FECOMPONENTTRANSFER_TYPE_GAMMA``
            Corresponds to value 'gamma'.

   .. container::

      Attributes:
         ``type``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element. Takes one of the SVG_FECOMPONENTTRANSFER_TYPE\_\*
            constants defined on this interface.

         ``tableValues``,  of type `SVGAnimatedNumberList <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumberList>`__, readonly
            Corresponds to attribute
            `tableValues <#element-attrdef-fecomponenttransfer-tablevalues>`__
            on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element. Takes one of the SVG_FECOLORMATRIX_TYPE\_\*
            constants defined on this interface.

         ``slope``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `slope <#element-attrdef-fecomponenttransfer-slope>`__ on
            the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

         ``intercept``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `intercept <#element-attrdef-fecomponenttransfer-intercept>`__
            on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

         ``amplitude``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `amplitude <#element-attrdef-fecomponenttransfer-amplitude>`__
            on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

         ``exponent``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `exponent <#element-attrdef-fecomponenttransfer-exponent>`__
            on the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

         ``offset``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `offset <#element-attrdef-fecomponenttransfer-offset>`__ on
            the given
            `feComponentTransfer <#elementdef-fecomponenttransfer>`__
            element.

   .. rubric:: Interface
      SVGFEFuncRElement\ ` <#InterfaceSVGFEFuncRElement>`__
      :name: InterfaceSVGFEFuncRElement
      :class: heading settled

   The ``SVGFEFuncRElement`` interface corresponds to the
   `feFuncR <#elementdef-fefuncr>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEFuncRElement : SVGComponentTransferFunctionElement {
      };

   .. rubric:: Interface
      SVGFEFuncGElement\ ` <#InterfaceSVGFEFuncGElement>`__
      :name: InterfaceSVGFEFuncGElement
      :class: heading settled

   The ``SVGFEFuncGElement`` interface corresponds to the
   `feFuncG <#elementdef-fefuncg>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEFuncGElement : SVGComponentTransferFunctionElement {
      };

   .. rubric:: Interface
      SVGFEFuncBElement\ ` <#InterfaceSVGFEFuncBElement>`__
      :name: InterfaceSVGFEFuncBElement
      :class: heading settled

   The ``SVGFEFuncBElement`` interface corresponds to the
   `feFuncB <#elementdef-fefuncb>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEFuncBElement : SVGComponentTransferFunctionElement {
      };

   .. rubric:: Interface
      SVGFEFuncAElement\ ` <#InterfaceSVGFEFuncAElement>`__
      :name: InterfaceSVGFEFuncAElement
      :class: heading settled

   The ``SVGFEFuncAElement`` interface corresponds to the
   `feFuncA <#elementdef-fefunca>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEFuncAElement : SVGComponentTransferFunctionElement {
      };

   .. rubric:: Interface
      SVGFECompositeElement\ ` <#InterfaceSVGFECompositeElement>`__
      :name: InterfaceSVGFECompositeElement
      :class: heading settled

   The ``SVGFECompositeElement`` interface corresponds to the
   `feComposite <#elementdef-fecomposite>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFECompositeElement : SVGElement {

        // Composite Operators
        const unsigned short SVG_FECOMPOSITE_OPERATOR_UNKNOWN = 0;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_OVER = 1;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_IN = 2;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_OUT = 3;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_ATOP = 4;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_XOR = 5;
        const unsigned short SVG_FECOMPOSITE_OPERATOR_ARITHMETIC = 6;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedString in2;
        readonly attribute SVGAnimatedEnumeration operator;
        readonly attribute SVGAnimatedNumber k1;
        readonly attribute SVGAnimatedNumber k2;
        readonly attribute SVGAnimatedNumber k3;
        readonly attribute SVGAnimatedNumber k4;
      };

      SVGFECompositeElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Composite Operators”:
         ``SVG_FECOMPOSITE_OPERATOR_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_FECOMPOSITE_OPERATOR_OVER``
            Corresponds to value
            `over <#attr-valuedef-fecomposite-operator-over>`__.

         ``SVG_FECOMPOSITE_OPERATOR_IN``
            Corresponds to value
            `in <#attr-valuedef-fecomposite-operator-in>`__.

         ``SVG_FECOMPOSITE_OPERATOR_OUT``
            Corresponds to value
            `out <#attr-valuedef-fecomposite-operator-out>`__.

         ``SVG_FECOMPOSITE_OPERATOR_ATOP``
            Corresponds to value
            `atop <#attr-valuedef-fecomposite-operator-atop>`__.

         ``SVG_FECOMPOSITE_OPERATOR_XOR``
            Corresponds to value
            `xor <#attr-valuedef-fecomposite-operator-xor>`__.

         ``SVG_FECOMPOSITE_OPERATOR_ARITHMETIC``
            Corresponds to value
            `arithmetic <#attr-valuedef-fecomposite-operator-arithmetic>`__.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

         ``in2``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in2 <#element-attrdef-fecomposite-in2>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

         ``operator``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `operator <#element-attrdef-fecomposite-operator>`__ on the
            given `feComposite <#elementdef-fecomposite>`__ element.

         ``k1``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `k1 <#element-attrdef-fecomposite-k1>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

         ``k2``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `k2 <#element-attrdef-fecomposite-k2>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

         ``k3``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `k3 <#element-attrdef-fecomposite-k3>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

         ``k4``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `k4 <#element-attrdef-fecomposite-k4>`__ on the given
            `feComposite <#elementdef-fecomposite>`__ element.

   .. rubric:: Interface
      SVGFEConvolveMatrixElement\ ` <#InterfaceSVGFEConvolveMatrixElement>`__
      :name: InterfaceSVGFEConvolveMatrixElement
      :class: heading settled

   The ``SVGFEConvolveMatrixElement`` interface corresponds to the
   `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEConvolveMatrixElement : SVGElement {

        // Edge Mode Values
        const unsigned short SVG_EDGEMODE_UNKNOWN = 0;
        const unsigned short SVG_EDGEMODE_DUPLICATE = 1;
        const unsigned short SVG_EDGEMODE_WRAP = 2;
        const unsigned short SVG_EDGEMODE_NONE = 3;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedInteger orderX;
        readonly attribute SVGAnimatedInteger orderY;
        readonly attribute SVGAnimatedNumberList kernelMatrix;
        readonly attribute SVGAnimatedNumber divisor;
        readonly attribute SVGAnimatedNumber bias;
        readonly attribute SVGAnimatedInteger targetX;
        readonly attribute SVGAnimatedInteger targetY;
        readonly attribute SVGAnimatedEnumeration edgeMode;
        readonly attribute SVGAnimatedNumber kernelUnitLengthX;
        readonly attribute SVGAnimatedNumber kernelUnitLengthY;
        readonly attribute SVGAnimatedBoolean preserveAlpha;
      };

      SVGFEConvolveMatrixElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Edge Mode Values”:
         ``SVG_EDGEMODE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_EDGEMODE_DUPLICATE``
            Corresponds to value
            `duplicate <#attr-valuedef-fegaussianblur-edgemode-duplicate>`__.

         ``SVG_EDGEMODE_WRAP``
            Corresponds to value
            `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__.

         ``SVG_EDGEMODE_NONE``
            Corresponds to value 'none'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``orderX``,  of type `SVGAnimatedInteger <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger>`__, readonly
            Corresponds to attribute `order <#element-attrdef-order>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``orderY``,  of type `SVGAnimatedInteger <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger>`__, readonly
            Corresponds to attribute `order <#element-attrdef-order>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``kernelMatrix``,  of type `SVGAnimatedNumberList <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumberList>`__, readonly
            Corresponds to attribute
            `kernelMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``divisor``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `divisor <#element-attrdef-feconvolvematrix-divisor>`__ on
            the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``bias``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `bias <#element-attrdef-feconvolvematrix-bias>`__ on the
            given `feConvolveMatrix <#elementdef-feconvolvematrix>`__
            element.

         ``targetX``,  of type `SVGAnimatedInteger <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger>`__, readonly
            Corresponds to attribute
            `targetX <#element-attrdef-feconvolvematrix-targetx>`__ on
            the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``targetY``,  of type `SVGAnimatedInteger <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger>`__, readonly
            Corresponds to attribute
            `targetY <#element-attrdef-feconvolvematrix-targety>`__ on
            the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``edgeMode``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `edgeMode <#element-attrdef-feconvolvematrix-edgemode>`__ on
            the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``kernelUnitLengthX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``kernelUnitLengthY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-feconvolvematrix-kernelunitlength>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

         ``preserveAlpha``,  of type `SVGAnimatedBoolean <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedBoolean>`__, readonly
            Corresponds to attribute
            `preserveAlpha <#element-attrdef-feconvolvematrix-preservealpha>`__
            on the given
            `feConvolveMatrix <#elementdef-feconvolvematrix>`__ element.

   .. rubric:: Interface
      SVGFEDiffuseLightingElement\ ` <#InterfaceSVGFEDiffuseLightingElement>`__
      :name: InterfaceSVGFEDiffuseLightingElement
      :class: heading settled

   The ``SVGFEDiffuseLightingElement`` interface corresponds to the
   `feDiffuseLighting <#elementdef-fediffuselighting>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEDiffuseLightingElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedNumber surfaceScale;
        readonly attribute SVGAnimatedNumber diffuseConstant;
        readonly attribute SVGAnimatedNumber kernelUnitLengthX;
        readonly attribute SVGAnimatedNumber kernelUnitLengthY;
      };

      SVGFEDiffuseLightingElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feDiffuseLighting <#elementdef-fediffuselighting>`__
            element.

         ``surfaceScale``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `surfaceScale <#element-attrdef-fediffuselighting-surfacescale>`__
            on the given
            `feDiffuseLighting <#elementdef-fediffuselighting>`__
            element.

         ``diffuseConstant``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `diffuseConstant <#element-attrdef-fediffuselighting-diffuseconstant>`__
            on the given
            `feDiffuseLighting <#elementdef-fediffuselighting>`__
            element.

         ``kernelUnitLengthX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__
            on the given
            `feDiffuseLighting <#elementdef-fediffuselighting>`__
            element.

         ``kernelUnitLengthY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-fediffuselighting-kernelunitlength>`__
            on the given
            `feDiffuseLighting <#elementdef-fediffuselighting>`__
            element.

   .. rubric:: Interface
      SVGFEDistantLightElement\ ` <#InterfaceSVGFEDistantLightElement>`__
      :name: InterfaceSVGFEDistantLightElement
      :class: heading settled

   The ``SVGFEDistantLightElement`` interface corresponds to the
   `feDistantLight <#elementdef-fedistantlight>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEDistantLightElement : SVGElement {
        readonly attribute SVGAnimatedNumber azimuth;
        readonly attribute SVGAnimatedNumber elevation;
      };

   .. container::

      Attributes:
         ``azimuth``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `azimuth <#element-attrdef-fedistantlight-azimuth>`__ on the
            given `feDistantLight <#elementdef-fedistantlight>`__
            element.

         ``elevation``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `elevation <#element-attrdef-fedistantlight-elevation>`__ on
            the given `feDistantLight <#elementdef-fedistantlight>`__
            element.

   .. rubric:: Interface
      SVGFEPointLightElement\ ` <#InterfaceSVGFEPointLightElement>`__
      :name: InterfaceSVGFEPointLightElement
      :class: heading settled

   The ``SVGFEPointLightElement`` interface corresponds to the
   `fePointLight <#elementdef-fepointlight>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEPointLightElement : SVGElement {
        readonly attribute SVGAnimatedNumber x;
        readonly attribute SVGAnimatedNumber y;
        readonly attribute SVGAnimatedNumber z;
      };

   .. container::

      Attributes:
         ``x``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `x <#element-attrdef-fepointlight-x>`__ on the given
            `fePointLight <#elementdef-fepointlight>`__ element.

         ``y``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `y <#element-attrdef-fepointlight-y>`__ on the given
            `fePointLight <#elementdef-fepointlight>`__ element.

         ``z``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `z <#element-attrdef-fepointlight-z>`__ on the given
            `fePointLight <#elementdef-fepointlight>`__ element.

   .. rubric:: Interface
      SVGFESpotLightElement\ ` <#InterfaceSVGFESpotLightElement>`__
      :name: InterfaceSVGFESpotLightElement
      :class: heading settled

   The ``SVGFESpotLightElement`` interface corresponds to the
   `feSpotLight <#elementdef-fespotlight>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFESpotLightElement : SVGElement {
        readonly attribute SVGAnimatedNumber x;
        readonly attribute SVGAnimatedNumber y;
        readonly attribute SVGAnimatedNumber z;
        readonly attribute SVGAnimatedNumber pointsAtX;
        readonly attribute SVGAnimatedNumber pointsAtY;
        readonly attribute SVGAnimatedNumber pointsAtZ;
        readonly attribute SVGAnimatedNumber specularExponent;
        readonly attribute SVGAnimatedNumber limitingConeAngle;
      };

   .. container::

      Attributes:
         ``x``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `x <#element-attrdef-fespotlight-x>`__ on the given
            `feSpotLight <#elementdef-fespotlight>`__ element.

         ``y``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `y <#element-attrdef-fespotlight-y>`__ on the given
            `feSpotLight <#elementdef-fespotlight>`__ element.

         ``z``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `z <#element-attrdef-fespotlight-z>`__ on the given
            `feSpotLight <#elementdef-fespotlight>`__ element.

         ``pointsAtX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `pointsAtX <#element-attrdef-fespotlight-pointsatx>`__ on
            the given `feSpotLight <#elementdef-fespotlight>`__ element.

         ``pointsAtY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `pointsAtY <#element-attrdef-fespotlight-pointsaty>`__ on
            the given `feSpotLight <#elementdef-fespotlight>`__ element.

         ``pointsAtZ``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `pointsAtZ <#element-attrdef-fespotlight-pointsatz>`__ on
            the given `feSpotLight <#elementdef-fespotlight>`__ element.

         ``specularExponent``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `specularExponent <#element-attrdef-fespotlight-specularexponent>`__
            on the given `feSpotLight <#elementdef-fespotlight>`__
            element.

         ``limitingConeAngle``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `limitingConeAngle <#element-attrdef-fespotlight-limitingconeangle>`__
            on the given `feSpotLight <#elementdef-fespotlight>`__
            element.

   .. rubric:: Interface
      SVGFEDisplacementMapElement\ ` <#InterfaceSVGFEDisplacementMapElement>`__
      :name: InterfaceSVGFEDisplacementMapElement
      :class: heading settled

   The ``SVGFEDisplacementMapElement`` interface corresponds to the
   `feDisplacementMap <#elementdef-fedisplacementmap>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEDisplacementMapElement : SVGElement {

        // Channel Selectors
        const unsigned short SVG_CHANNEL_UNKNOWN = 0;
        const unsigned short SVG_CHANNEL_R = 1;
        const unsigned short SVG_CHANNEL_G = 2;
        const unsigned short SVG_CHANNEL_B = 3;
        const unsigned short SVG_CHANNEL_A = 4;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedString in2;
        readonly attribute SVGAnimatedNumber scale;
        readonly attribute SVGAnimatedEnumeration xChannelSelector;
        readonly attribute SVGAnimatedEnumeration yChannelSelector;
      };

      SVGFEDisplacementMapElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Channel Selectors”:
         ``SVG_CHANNEL_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_CHANNEL_R``
            Corresponds to value
            '`R <https://svgwg.org/svg2-draft/geometry.html#RProperty>`__'.

         ``SVG_CHANNEL_G``
            Corresponds to value 'G'.

         ``SVG_CHANNEL_B``
            Corresponds to value 'B'.

         ``SVG_CHANNEL_A``
            Corresponds to value 'A'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feDisplacementMap <#elementdef-fedisplacementmap>`__
            element.

         ``in2``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in2 <#element-attrdef-fedisplacementmap-in2>`__ on the
            given `feDisplacementMap <#elementdef-fedisplacementmap>`__
            element.

         ``scale``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `scale <#element-attrdef-fedisplacementmap-scale>`__ on the
            given `feDisplacementMap <#elementdef-fedisplacementmap>`__
            element.

         ``xChannelSelector``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `xChannelSelector <#element-attrdef-fedisplacementmap-xchannelselector>`__
            on the given
            `feDisplacementMap <#elementdef-fedisplacementmap>`__
            element. Takes one of the SVG_CHANNEL\_\* constants defined
            on this interface.

         ``yChannelSelector``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `yChannelSelector <#element-attrdef-fedisplacementmap-ychannelselector>`__
            on the given
            `feDisplacementMap <#elementdef-fedisplacementmap>`__
            element. Takes one of the SVG_CHANNEL\_\* constants defined
            on this interface.

   .. rubric:: Interface
      SVGFEDropShadowElement\ ` <#InterfaceSVGFEDropShadowElement>`__
      :name: InterfaceSVGFEDropShadowElement
      :class: heading settled

   The ``SVGFEDropShadowElement`` interface corresponds to the
   `feDropShadow <#elementdef-fedropshadow>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEDropShadowElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedNumber dx;
        readonly attribute SVGAnimatedNumber dy;
        readonly attribute SVGAnimatedNumber stdDeviationX;
        readonly attribute SVGAnimatedNumber stdDeviationY;

        undefined setStdDeviation(float stdDeviationX, float stdDeviationY);
      };

      SVGFEDropShadowElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feDropShadow <#elementdef-fedropshadow>`__ element.

         ``dx``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `dx <#element-attrdef-fedropshadow-dx>`__ on the given
            `feDropShadow <#elementdef-fedropshadow>`__ element.

         ``dy``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `dy <#element-attrdef-fedropshadow-dy>`__ on the given
            `feDropShadow <#elementdef-fedropshadow>`__ element.

         ``stdDeviationX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__
            on the given `feDropShadow <#elementdef-fedropshadow>`__
            element. Contains the X component of attribute stdDeviation.

         ``stdDeviationY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__
            on the given `feDropShadow <#elementdef-fedropshadow>`__
            element. Contains the Y component of attribute stdDeviation.

   .. container::

      Methods:
         ``setStdDeviation(stdDeviationX, stdDeviationY)``
            Sets the values for attribute
            `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__.

            .. container::

               ``stdDeviationX``
                  The X component of attribute
                  `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__.

               ``stdDeviationY``
                  The Y component of attribute
                  `stdDeviation <#element-attrdef-fedropshadow-stddeviation>`__.

   .. rubric:: Interface
      SVGFEFloodElement\ ` <#InterfaceSVGFEFloodElement>`__
      :name: InterfaceSVGFEFloodElement
      :class: heading settled

   The ``SVGFEFloodElement`` interface corresponds to the
   `feFlood <#elementdef-feflood>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEFloodElement : SVGElement {
      };

      SVGFEFloodElement includes SVGFilterPrimitiveStandardAttributes;

   .. rubric:: Interface
      SVGFEGaussianBlurElement\ ` <#InterfaceSVGFEGaussianBlurElement>`__
      :name: InterfaceSVGFEGaussianBlurElement
      :class: heading settled

   The ``SVGFEGaussianBlurElement`` interface corresponds to the
   `feGaussianBlur <#elementdef-fegaussianblur>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEGaussianBlurElement : SVGElement {

        // Edge Mode Values
        const unsigned short SVG_EDGEMODE_UNKNOWN = 0;
        const unsigned short SVG_EDGEMODE_DUPLICATE = 1;
        const unsigned short SVG_EDGEMODE_WRAP = 2;
        const unsigned short SVG_EDGEMODE_NONE = 3;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedNumber stdDeviationX;
        readonly attribute SVGAnimatedNumber stdDeviationY;
        readonly attribute SVGAnimatedEnumeration edgeMode;

        undefined setStdDeviation(float stdDeviationX, float stdDeviationY);
      };

      SVGFEGaussianBlurElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Edge Mode Values”:
         ``SVG_EDGEMODE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_EDGEMODE_DUPLICATE``
            Corresponds to value 'duplicate'.

         ``SVG_EDGEMODE_WRAP``
            Corresponds to value
            `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__.

         ``SVG_EDGEMODE_NONE``
            Corresponds to value 'none'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feGaussianBlur <#elementdef-fegaussianblur>`__ element.

         ``stdDeviationX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__
            on the given `feGaussianBlur <#elementdef-fegaussianblur>`__
            element. Contains the X component of attribute stdDeviation.

         ``stdDeviationY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__
            on the given `feGaussianBlur <#elementdef-fegaussianblur>`__
            element. Contains the Y component of attribute stdDeviation.

         ``edgeMode``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `edgeMode <#element-attrdef-fegaussianblur-edgemode>`__ on
            the given `feGaussianBlur <#elementdef-fegaussianblur>`__
            element. Takes one of the SVG_EDGEMODE\_\* constants defined
            on this interface.

   .. container::

      Methods:
         ``setStdDeviation(stdDeviationX, stdDeviationY)``
            Sets the values for attribute
            `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__.

            .. container::

               ``stdDeviationX``
                  The X component of attribute
                  `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__.

               ``stdDeviationY``
                  The Y component of attribute
                  `stdDeviation <#element-attrdef-fegaussianblur-stddeviation>`__.

   .. rubric:: Interface
      SVGFEImageElement\ ` <#InterfaceSVGFEImageElement>`__
      :name: InterfaceSVGFEImageElement
      :class: heading settled

   The ``SVGFEImageElement`` interface corresponds to the
   `feImage <#elementdef-feimage>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEImageElement : SVGElement {
        readonly attribute SVGAnimatedPreserveAspectRatio preserveAspectRatio;
        readonly attribute SVGAnimatedString crossOrigin;
      };

      SVGFEImageElement includes SVGFilterPrimitiveStandardAttributes;
      SVGFEImageElement includes SVGURIReference;

   .. container::

      Attributes:
         ``preserveAspectRatio``,  of type `SVGAnimatedPreserveAspectRatio <https://svgwg.org/svg2-draft/coords.html#InterfaceSVGAnimatedPreserveAspectRatio>`__, readonly
            Corresponds to attribute
            `preserveAspectRatio <#element-attrdef-feimage-preserveaspectratio>`__
            on the given `feImage <#elementdef-feimage>`__ element.

         ``crossOrigin``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            The crossOrigin IDL attribute must reflect the
            `crossorigin <#element-attrdef-feimage-crossorigin>`__
            content attribute, limited to only known values.

   .. rubric:: Interface
      SVGFEMergeElement\ ` <#InterfaceSVGFEMergeElement>`__
      :name: InterfaceSVGFEMergeElement
      :class: heading settled

   The ``SVGFEMergeElement`` interface corresponds to the
   `feMerge <#elementdef-femerge>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEMergeElement : SVGElement {
      };

      SVGFEMergeElement includes SVGFilterPrimitiveStandardAttributes;

   .. rubric:: Interface
      SVGFEMergeNodeElement\ ` <#InterfaceSVGFEMergeNodeElement>`__
      :name: InterfaceSVGFEMergeNodeElement
      :class: heading settled

   The ``SVGFEMergeNodeElement`` interface corresponds to the
   `feMergeNode <#elementdef-femergenode>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEMergeNodeElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
      };

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feMergeNode <#elementdef-femergenode>`__ element.

   .. rubric:: Interface
      SVGFEMorphologyElement\ ` <#InterfaceSVGFEMorphologyElement>`__
      :name: InterfaceSVGFEMorphologyElement
      :class: heading settled

   The ``SVGFEMorphologyElement`` interface corresponds to the
   `feMorphology <#elementdef-femorphology>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEMorphologyElement : SVGElement {

        // Morphology Operators
        const unsigned short SVG_MORPHOLOGY_OPERATOR_UNKNOWN = 0;
        const unsigned short SVG_MORPHOLOGY_OPERATOR_ERODE = 1;
        const unsigned short SVG_MORPHOLOGY_OPERATOR_DILATE = 2;

        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedEnumeration operator;
        readonly attribute SVGAnimatedNumber radiusX;
        readonly attribute SVGAnimatedNumber radiusY;
      };

      SVGFEMorphologyElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Morphology Operators”:
         ``SVG_MORPHOLOGY_OPERATOR_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_MORPHOLOGY_OPERATOR_ERODE``
            Corresponds to value 'erode'.

         ``SVG_MORPHOLOGY_OPERATOR_DILATE``
            Corresponds to value 'dilate'.

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feMorphology <#elementdef-femorphology>`__ element.

         ``operator``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `operator <#element-attrdef-femorphology-operator>`__ on the
            given `feMorphology <#elementdef-femorphology>`__ element.
            Takes one of the SVG_MORPHOLOGY_OPERATOR\_\* constants
            defined on this interface.

         ``radiusX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `radius <#element-attrdef-femorphology-radius>`__ on the
            given `feMorphology <#elementdef-femorphology>`__ element.
            Contains the X component of attribute radius.

         ``radiusY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `radius <#element-attrdef-femorphology-radius>`__ on the
            given `feMorphology <#elementdef-femorphology>`__ element.
            Contains the Y component of attribute radius.

   .. rubric:: Interface
      SVGFEOffsetElement\ ` <#InterfaceSVGFEOffsetElement>`__
      :name: InterfaceSVGFEOffsetElement
      :class: heading settled

   The ``SVGFEOffsetElement`` interface corresponds to the
   `feOffset <#elementdef-feoffset>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFEOffsetElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedNumber dx;
        readonly attribute SVGAnimatedNumber dy;
      };

      SVGFEOffsetElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feOffset <#elementdef-feoffset>`__ element.

         ``dx``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `dx <#element-attrdef-feoffset-dx>`__ on the given
            `feOffset <#elementdef-feoffset>`__ element.

         ``dy``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `dy <#element-attrdef-feoffset-dy>`__ on the given
            `feOffset <#elementdef-feoffset>`__ element.

   .. rubric:: Interface
      SVGFESpecularLightingElement\ ` <#InterfaceSVGFESpecularLightingElement>`__
      :name: InterfaceSVGFESpecularLightingElement
      :class: heading settled

   The ``SVGFESpecularLightingElement`` interface corresponds to the
   `feSpecularLighting <#elementdef-fespecularlighting>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFESpecularLightingElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
        readonly attribute SVGAnimatedNumber surfaceScale;
        readonly attribute SVGAnimatedNumber specularConstant;
        readonly attribute SVGAnimatedNumber specularExponent;
        readonly attribute SVGAnimatedNumber kernelUnitLengthX;
        readonly attribute SVGAnimatedNumber kernelUnitLengthY;
      };

      SVGFESpecularLightingElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

         ``surfaceScale``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `surfaceScale <#element-attrdef-fespecularlighting-surfacescale>`__
            on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

         ``specularConstant``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `specularConstant <#element-attrdef-fespecularlighting-specularconstant>`__
            on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

         ``specularExponent``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `specularExponent <#element-attrdef-fespecularlighting-specularexponent>`__
            on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

         ``kernelUnitLengthX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-fespecularlighting-kernelunitlength>`__
            on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

         ``kernelUnitLengthY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `kernelUnitLength <#element-attrdef-fespecularlighting-kernelunitlength>`__
            on the given
            `feSpecularLighting <#elementdef-fespecularlighting>`__
            element.

   .. rubric:: Interface
      SVGFETileElement\ ` <#InterfaceSVGFETileElement>`__
      :name: InterfaceSVGFETileElement
      :class: heading settled

   The ``SVGFETileElement`` interface corresponds to the
   `feTile <#elementdef-fetile>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFETileElement : SVGElement {
        readonly attribute SVGAnimatedString in1;
      };

      SVGFETileElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Attributes:
         ``in1``,  of type `SVGAnimatedString <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedString>`__, readonly
            Corresponds to attribute
            `in <#element-attrdef-filter-primitive-in>`__ on the given
            `feTile <#elementdef-fetile>`__ element.

   .. rubric:: Interface
      SVGFETurbulenceElement\ ` <#InterfaceSVGFETurbulenceElement>`__
      :name: InterfaceSVGFETurbulenceElement
      :class: heading settled

   The ``SVGFETurbulenceElement`` interface corresponds to the
   `feTurbulence <#elementdef-feturbulence>`__ element.

   .. code:: idl

      [Exposed=Window]
      interface SVGFETurbulenceElement : SVGElement {

        // Turbulence Types
        const unsigned short SVG_TURBULENCE_TYPE_UNKNOWN = 0;
        const unsigned short SVG_TURBULENCE_TYPE_FRACTALNOISE = 1;
        const unsigned short SVG_TURBULENCE_TYPE_TURBULENCE = 2;

        // Stitch Options
        const unsigned short SVG_STITCHTYPE_UNKNOWN = 0;
        const unsigned short SVG_STITCHTYPE_STITCH = 1;
        const unsigned short SVG_STITCHTYPE_NOSTITCH = 2;

        readonly attribute SVGAnimatedNumber baseFrequencyX;
        readonly attribute SVGAnimatedNumber baseFrequencyY;
        readonly attribute SVGAnimatedInteger numOctaves;
        readonly attribute SVGAnimatedNumber seed;
        readonly attribute SVGAnimatedEnumeration stitchTiles;
        readonly attribute SVGAnimatedEnumeration type;
      };

      SVGFETurbulenceElement includes SVGFilterPrimitiveStandardAttributes;

   .. container::

      Constants in group “Turbulence Types”:
         ``SVG_TURBULENCE_TYPE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_TURBULENCE_TYPE_FRACTALNOISE``
            Corresponds to value 'fractalNoise'.

         ``SVG_TURBULENCE_TYPE_TURBULENCE``
            Corresponds to value 'turbulence'.

      Constants in group “Stitch Options”:
         ``SVG_STITCHTYPE_UNKNOWN``
            The type is not one of predefined types. It is invalid to
            attempt to define a new value of this type or to attempt to
            switch an existing value to this type.

         ``SVG_STITCHTYPE_STITCH``
            Corresponds to value 'stitch'.

         ``SVG_STITCHTYPE_NOSTITCH``
            Corresponds to value 'noStitch'.

   .. container::

      Attributes:
         ``baseFrequencyX``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `baseFrequency <#element-attrdef-feturbulence-basefrequency>`__
            on the given `feTurbulence <#elementdef-feturbulence>`__
            element. Contains the X component of the baseFrequency
            attribute.

         ``baseFrequencyY``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `baseFrequency <#element-attrdef-feturbulence-basefrequency>`__
            on the given `feTurbulence <#elementdef-feturbulence>`__
            element. Contains the Y component of the baseFrequency
            attribute.

         ``numOctaves``,  of type `SVGAnimatedInteger <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger>`__, readonly
            Corresponds to attribute
            `numOctaves <#element-attrdef-feturbulence-numoctaves>`__ on
            the given `feTurbulence <#elementdef-feturbulence>`__
            element.

         ``seed``,  of type `SVGAnimatedNumber <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedNumber>`__, readonly
            Corresponds to attribute
            `seed <#element-attrdef-feturbulence-seed>`__ on the given
            `feTurbulence <#elementdef-feturbulence>`__ element.

         ``stitchTiles``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `stitchTiles <#element-attrdef-feturbulence-stitchtiles>`__
            on the given `feTurbulence <#elementdef-feturbulence>`__
            element. Takes one of the SVG_TURBULENCE_TYPE\_\* constants
            defined on this interface.

         ``type``,  of type `SVGAnimatedEnumeration <https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedEnumeration>`__, readonly
            Corresponds to attribute
            `type <#element-attrdef-feturbulence-type>`__ on the given
            `feTurbulence <#elementdef-feturbulence>`__ element. Takes
            one of the SVG_STITCHTYPE\_\* constants defined on this
            interface.

   .. rubric:: Changes\ ` <#changes>`__
      :name: changes
      :class: no-num heading settled

   The following significant changes were made since the `25 November
   2014 Working
   Draft <https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/>`__.

   -  Editorial changes.

   -  Add description elements to content model of all elements.

   -  Clarify that crossorigin is not animatable.

   -  `<hue-rotate()> <#funcdef-filter-hue-rotate>`__ takes unitless
      zero.

   -  Allow author to change order of
      `<color> <https://drafts.csswg.org/css-color-5/#typedef-color>`__
      and
      `<length> <https://drafts.csswg.org/css-values-4/#length-value>`__
      values of `<drop-shadow()> <#funcdef-filter-drop-shadow>`__.
      Change grammar to put <color> first. Differentiate between initial
      value for interpolation and default values for omitted values.

   -  Define animation type of CSS properties.

   -  Make `feColorMatrix <#elementdef-fecolormatrix>`__ and
      `feConvolveMatrix <#elementdef-feconvolvematrix>`__ a pass through
      on unfulfilled pre-conditions.

   -  Make `feTurbulence <#elementdef-feturbulence>`__ algorithms
      respect uniformity.

   -  Apply properties that apply to all graphics elements to the use
      element as well.

   -  Corrected filter primitive representation of
      `<saturate()> <#funcdef-filter-saturate>`__.

   -  Extend SVG DOM SVGFEBlendElement enumerations with new blend
      modes.

   The following significant changes were made since the `26 November
   2013 Working
   Draft <https://www.w3.org/TR/2013/WD-filter-effects-1-20131126/>`__.

   -  Removed Custom Filters.

   -  Allow the
      `script <https://svgwg.org/svg2-draft/interact.html#elementdef-script>`__
      element in the content model everywhere.

   -  Support all blend modes from CSS Blending specification for
      `feBlend <#elementdef-feblend>`__.

   -  Support all non-duplicated compositing modes from CSS Blending
      specification for `feComposite <#elementdef-fecomposite>`__.

   -  Added no-composite attribute to `feBlend <#elementdef-feblend>`__
      to avoid double compositing.

   -  Corrections on shorthands syntax.

   -  Added definition for shorthand filter regions.

   The following significant changes were made since the `25 October
   2012 Working
   Draft <https://www.w3.org/TR/2012/WD-filter-effects-20121025/>`__.

   -  Correction of brightness short hand filter.

   -  New syntax for Custom Filter function.

   -  Add at-function rule for Custom Filters.

   -  Allow Custom Filter function to be used as extension for future
      filter features.

   -  Remove unnecessary attributes and uniforms on shaders.

   -  Redefine origin of shader coordinate space to bottom left.

   -  Remove now unnecessary filter-margin properties.

   See more detailed and longterm changes in the
   `ChangeLog <ChangeLog>`__.

   .. rubric:: Acknowledgments\ ` <#acknowledgments>`__
      :name: acknowledgments
      :class: no-num heading settled

   The editors would like to thank Robert O’Callahan, Coralie Mercier,
   Chris Lilley, Nikos Andronikos, Stephen Chenney, Simon Fraser,
   Tavmjong Bah, Robert Longson, Cameron McCormack, Brad Kemper, Tab
   Atkins, Brian Birtles, Michael Mullany, Rik Cabanier, Anne van
   Kesteren, Boris Zbarsky, Kristopher Giesing, Stephen White, Jasper
   van de Gronde, Kang-Hao Lu, Paul LeBeau, Debarshi Ray, Jarek Foksa,
   Sebastian Zartner, Yuqian Li, Amelia Bellamy-Royds and Max Vujovic
   for their careful reviews, comments, and corrections.

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
   :name: example-ae2b6bc0

   ` <#example-ae2b6bc0>`__
   This is an example of an informative example.

Informative notes begin with the word “Note” and are set apart from the
normative text with ``class="note"``, like this:

Note, this is an informative note.

Advisements are normative sections styled to evoke special attention and
are set apart from other normative text with
``<strong class="advisement">``, like this: **UAs MUST provide an
accessible alternative.**

.. _w3c-conformance-classes:

 Conformance classes\ ` <#w3c-conformance-classes>`__
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

 Partial implementations\ ` <#w3c-partial>`__
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

 Implementations of Unstable and Proprietary Features\ ` <#w3c-conform-future-proofing>`__
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To avoid clashes with future stable CSS features, the CSSWG recommends
`following best practices <http://www.w3.org/TR/CSS/#future-proofing>`__
for the implementation of
`unstable <http://www.w3.org/TR/CSS/#unstable>`__ features and
`proprietary
extensions <http://www.w3.org/TR/CSS/#proprietary-extension>`__ to CSS.

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
http://www.w3.org/Style/CSS/Test/. Questions should be directed to the
`public-css-testsuite@w3.org <http://lists.w3.org/Archives/Public/public-css-testsuite>`__
mailing list.

Index\ ` <#index>`__
--------------------

.. _index-defined-here:

Terms defined by this specification\ ` <#index-defined-here>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  amplitude

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-amplitude>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-amplitude>`__\ ,
      in § 9.7.1

-  `arithmetic <#attr-valuedef-fecomposite-operator-arithmetic>`__\ , in
   § 9.8
-  `atop <#attr-valuedef-fecomposite-operator-atop>`__\ , in § 9.8
-  `auto <#valdef-color-interpolation-filters-auto>`__\ , in § 10
-  azimuth

   -  `attribute for
      SVGFEDistantLightElement <#dom-svgfedistantlightelement-azimuth>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDistantLight <#element-attrdef-fedistantlight-azimuth>`__\ , in
      § 11.2

-  `BackgroundAlpha <#attr-valuedef-in-backgroundalpha>`__\ , in § 9.2
-  `BackgroundImage <#attr-valuedef-in-backgroundimage>`__\ , in § 9.2
-  `baseFrequency <#element-attrdef-feturbulence-basefrequency>`__\ , in
   § 9.21
-  `baseFrequencyX <#dom-svgfeturbulenceelement-basefrequencyx>`__\ , in
   § Unnumbered section
-  `baseFrequencyY <#dom-svgfeturbulenceelement-basefrequencyy>`__\ , in
   § Unnumbered section
-  bias

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-bias>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-bias>`__\ , in
      § 9.9

-  `blur() <#funcdef-filter-blur>`__\ , in § 6.1
-  `brightness() <#funcdef-filter-brightness>`__\ , in § 6.1
-  `color-interpolation-filters <#propdef-color-interpolation-filters>`__\ ,
   in § 10
-  `contrast() <#funcdef-filter-contrast>`__\ , in § 6.1
-  `crossOrigin <#dom-svgfeimageelement-crossorigin>`__\ , in
   § Unnumbered section
-  `crossorigin <#element-attrdef-feimage-crossorigin>`__\ , in § 9.15
-  diffuseConstant

   -  `attribute for
      SVGFEDiffuseLightingElement <#dom-svgfediffuselightingelement-diffuseconstant>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDiffuseLighting <#element-attrdef-fediffuselighting-diffuseconstant>`__\ ,
      in § 9.10

-  `discrete <#attr-valuedef-type-discrete>`__\ , in § 9.7.1
-  divisor

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-divisor>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-divisor>`__\ ,
      in § 9.9

-  `drop-shadow() <#funcdef-filter-drop-shadow>`__\ , in § 6.1
-  `duplicate <#attr-valuedef-fegaussianblur-edgemode-duplicate>`__\ ,
   in § 9.14
-  dx

   -  `attribute for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-dx>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEOffsetElement <#dom-svgfeoffsetelement-dx>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feDropShadow <#element-attrdef-fedropshadow-dx>`__\ , in § 9.12
   -  `element-attr for feOffset <#element-attrdef-feoffset-dx>`__\ , in
      § 9.18

-  dy

   -  `attribute for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-dy>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEOffsetElement <#dom-svgfeoffsetelement-dy>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feDropShadow <#element-attrdef-fedropshadow-dy>`__\ , in § 9.12
   -  `element-attr for feOffset <#element-attrdef-feoffset-dy>`__\ , in
      § 9.18

-  edgeMode

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-edgemode>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-edgemode>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-edgemode>`__\ ,
      in § 9.9
   -  `element-attr for
      feGaussianBlur <#element-attrdef-fegaussianblur-edgemode>`__\ , in
      § 9.14

-  elevation

   -  `attribute for
      SVGFEDistantLightElement <#dom-svgfedistantlightelement-elevation>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDistantLight <#element-attrdef-fedistantlight-elevation>`__\ ,
      in § 11.2

-  exponent

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-exponent>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-exponent>`__\ ,
      in § 9.7.1

-  `feBlend <#elementdef-feblend>`__\ , in § 9.5
-  `feColorMatrix <#elementdef-fecolormatrix>`__\ , in § 9.6
-  `feComponentTransfer <#elementdef-fecomponenttransfer>`__\ , in § 9.7
-  `feComposite <#elementdef-fecomposite>`__\ , in § 9.8
-  `feConvolveMatrix <#elementdef-feconvolvematrix>`__\ , in § 9.9
-  `feDiffuseLighting <#elementdef-fediffuselighting>`__\ , in § 9.10
-  `feDisplacementMap <#elementdef-fedisplacementmap>`__\ , in § 9.11
-  `feDistantLight <#elementdef-fedistantlight>`__\ , in § 11.2
-  `feDropShadow <#elementdef-fedropshadow>`__\ , in § 9.12
-  `feFlood <#elementdef-feflood>`__\ , in § 9.13
-  `feFuncA <#elementdef-fefunca>`__\ , in § 9.7.4
-  `feFuncB <#elementdef-fefuncb>`__\ , in § 9.7.3
-  `feFuncG <#elementdef-fefuncg>`__\ , in § 9.7.2
-  `feFuncR <#elementdef-fefuncr>`__\ , in § 9.7.1
-  `feGaussianBlur <#elementdef-fegaussianblur>`__\ , in § 9.14
-  `feImage <#elementdef-feimage>`__\ , in § 9.15
-  `feMerge <#elementdef-femerge>`__\ , in § 9.16
-  `feMergeNode <#elementdef-femergenode>`__\ , in § 9.16.1
-  `feMorphology <#elementdef-femorphology>`__\ , in § 9.17
-  `feOffset <#elementdef-feoffset>`__\ , in § 9.18
-  `fePointLight <#elementdef-fepointlight>`__\ , in § 11.3
-  `feSpecularLighting <#elementdef-fespecularlighting>`__\ , in § 9.19
-  `feSpotLight <#elementdef-fespotlight>`__\ , in § 11.4
-  `feTile <#elementdef-fetile>`__\ , in § 9.20
-  `feTurbulence <#elementdef-feturbulence>`__\ , in § 9.21
-  `FillPaint <#attr-valuedef-in-fillpaint>`__\ , in § 9.2
-  filter

   -  `(element) <#elementdef-filter>`__\ , in § 7
   -  `(property) <#propdef-filter>`__\ , in § 5

-  `filter() <#funcdef-filter>`__\ , in § 12
-  `<filter-function> <#typedef-filter-function>`__\ , in § 6.1
-  `filter primitive <#filter-primitive>`__\ , in § 4
-  `filter-primitive <#elementdef-filter-primitive>`__\ , in § 4
-  `filter primitive attributes <#filter-primitive-attributes>`__\ , in
   § 9.2
-  `<filter-primitive-reference> <#typedef-result-filter-primitive-reference>`__\ ,
   in § 9.2
-  `filter primitive subregion <#filter-primitive-subregion>`__\ , in
   § 9.4
-  `filter primitive tree <#filter-primitive-tree>`__\ , in § 9.3
-  `filter region <#filter-region>`__\ , in § 8
-  `filterRes <#element-attrdef-filter-filterres>`__\ , in § 7
-  filterUnits

   -  `attribute for
      SVGFilterElement <#dom-svgfilterelement-filterunits>`__\ , in
      § Unnumbered section
   -  `element-attr for
      filter <#element-attrdef-filter-filterunits>`__\ , in § 7

-  `<filter-value-list> <#typedef-filter-value-list>`__\ , in § 5
-  `flood-color <#propdef-flood-color>`__\ , in § 9.13.1
-  `flood-opacity <#propdef-flood-opacity>`__\ , in § 9.13.2
-  `gamma <#attr-valuedef-type-gamma>`__\ , in § 9.7.1
-  `grayscale() <#funcdef-filter-grayscale>`__\ , in § 6.1
-  height

   -  `attribute for
      SVGFilterElement <#dom-svgfilterelement-height>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFilterPrimitiveStandardAttributes <#dom-svgfilterprimitivestandardattributes-height>`__\ ,
      in § Unnumbered section
   -  `element-attr for filter <#element-attrdef-filter-height>`__\ , in
      § 7
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-height>`__\ ,
      in § 9.2

-  `href <#element-attrdef-feimage-href>`__\ , in § 9.15
-  `hue-rotate() <#funcdef-filter-hue-rotate>`__\ , in § 6.1
-  `hueRotate <#attr-valuedef-type-huerotate>`__\ , in § 9.6
-  `identity <#attr-valuedef-type-identity>`__\ , in § 9.7.1
-  in

   -  `attr-value for
      feComposite/operator <#attr-valuedef-fecomposite-operator-in>`__\ ,
      in § 9.8
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-in>`__\ , in
      § 9.2

-  in1

   -  `attribute for
      SVGFEBlendElement <#dom-svgfeblendelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEColorMatrixElement <#dom-svgfecolormatrixelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEComponentTransferElement <#dom-svgfecomponenttransferelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEDiffuseLightingElement <#dom-svgfediffuselightingelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEDisplacementMapElement <#dom-svgfedisplacementmapelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEMergeNodeElement <#dom-svgfemergenodeelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEMorphologyElement <#dom-svgfemorphologyelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEOffsetElement <#dom-svgfeoffsetelement-in1>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-in1>`__\ ,
      in § Unnumbered section
   -  `attribute for SVGFETileElement <#dom-svgfetileelement-in1>`__\ ,
      in § Unnumbered section

-  in2

   -  `attribute for
      SVGFEBlendElement <#dom-svgfeblendelement-in2>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-in2>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFEDisplacementMapElement <#dom-svgfedisplacementmapelement-in2>`__\ ,
      in § Unnumbered section
   -  `element-attr for feBlend <#element-attrdef-feblend-in2>`__\ , in
      § 9.5
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-in2>`__\ , in § 9.8
   -  `element-attr for
      feDisplacementMap <#element-attrdef-fedisplacementmap-in2>`__\ ,
      in § 9.11

-  intercept

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-intercept>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-intercept>`__\ ,
      in § 9.7.1

-  `invert() <#funcdef-filter-invert>`__\ , in § 6.1
-  k1

   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-k1>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-k1>`__\ , in § 9.8

-  k2

   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-k2>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-k2>`__\ , in § 9.8

-  k3

   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-k3>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-k3>`__\ , in § 9.8

-  k4

   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-k4>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-k4>`__\ , in § 9.8

-  kernelMatrix

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-kernelmatrix>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-kernelmatrix>`__\ ,
      in § 9.9

-  kernelUnitLength

   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-kernelunitlength>`__\ ,
      in § 9.9
   -  `element-attr for
      feDiffuseLighting <#element-attrdef-fediffuselighting-kernelunitlength>`__\ ,
      in § 9.10
   -  `element-attr for
      feSpecularLighting <#element-attrdef-fespecularlighting-kernelunitlength>`__\ ,
      in § 9.19

-  kernelUnitLengthX

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-kernelunitlengthx>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEDiffuseLightingElement <#dom-svgfediffuselightingelement-kernelunitlengthx>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-kernelunitlengthx>`__\ ,
      in § Unnumbered section

-  kernelUnitLengthY

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-kernelunitlengthy>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEDiffuseLightingElement <#dom-svgfediffuselightingelement-kernelunitlengthy>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-kernelunitlengthy>`__\ ,
      in § Unnumbered section

-  `lighter <#attr-valuedef-fecomposite-operator-lighter>`__\ , in § 9.8
-  `lighting-color <#propdef-lighting-color>`__\ , in § 11.5
-  `light source <#light-source>`__\ , in § 11.1
-  limitingConeAngle

   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-limitingconeangle>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-limitingconeangle>`__\ ,
      in § 11.4

-  `linear <#attr-valuedef-type-linear>`__\ , in § 9.7.1
-  `linearRGB <#valdef-color-interpolation-filters-linearrgb>`__\ , in
   § 10
-  `luminanceToAlpha <#attr-valuedef-type-luminancetoalpha>`__\ , in
   § 9.6
-  `matrix <#attr-valuedef-type-matrix>`__\ , in § 9.6
-  `mirror <#attr-valuedef-feguassianblur-edgemode-mirror>`__\ , in
   § 9.14
-  mode

   -  `attribute for
      SVGFEBlendElement <#dom-svgfeblendelement-mode>`__\ , in
      § Unnumbered section
   -  `element-attr for feBlend <#element-attrdef-feblend-mode>`__\ , in
      § 9.5

-  no-composite

   -  `attr-value for
      no-composite <#attr-valuedef-no-composite-no-composite>`__\ , in
      § 9.5
   -  `element-attr for
      feBlend <#element-attrdef-feblend-no-composite>`__\ , in § 9.5

-  `<number-optional-number> <#typedef-number-optional-number>`__\ , in
   § 7
-  numOctaves

   -  `attribute for
      SVGFETurbulenceElement <#dom-svgfeturbulenceelement-numoctaves>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feTurbulence <#element-attrdef-feturbulence-numoctaves>`__\ , in
      § 9.21

-  objectBoundingBox

   -  `attr-value for
      filterUnits <#attr-valuedef-filterunits-objectboundingbox>`__\ ,
      in § 7
   -  `attr-value for
      primitiveUnits <#attr-valuedef-primitiveunits-objectboundingbox>`__\ ,
      in § 7

-  offset

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-offset>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-offset>`__\ ,
      in § 9.7.1

-  `opacity() <#funcdef-filter-opacity>`__\ , in § 6.1
-  `operating coordinate space <#operating-coordinate-space>`__\ , in
   § 9.1
-  operator

   -  `attribute for
      SVGFECompositeElement <#dom-svgfecompositeelement-operator>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEMorphologyElement <#dom-svgfemorphologyelement-operator>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComposite <#element-attrdef-fecomposite-operator>`__\ , in § 9.8
   -  `element-attr for
      feMorphology <#element-attrdef-femorphology-operator>`__\ , in
      § 9.17

-  `order <#element-attrdef-order>`__\ , in § 9.9
-  `orderX <#dom-svgfeconvolvematrixelement-orderx>`__\ , in
   § Unnumbered section
-  `orderY <#dom-svgfeconvolvematrixelement-ordery>`__\ , in
   § Unnumbered section
-  `out <#attr-valuedef-fecomposite-operator-out>`__\ , in § 9.8
-  `over <#attr-valuedef-fecomposite-operator-over>`__\ , in § 9.8
-  `pass through filter <#pass-through-filter>`__\ , in § 4
-  pointsAtX

   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-pointsatx>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-pointsatx>`__\ , in
      § 11.4

-  pointsAtY

   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-pointsaty>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-pointsaty>`__\ , in
      § 11.4

-  pointsAtZ

   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-pointsatz>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-pointsatz>`__\ , in
      § 11.4

-  preserveAlpha

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-preservealpha>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-preservealpha>`__\ ,
      in § 9.9

-  preserveAspectRatio

   -  `attribute for
      SVGFEImageElement <#dom-svgfeimageelement-preserveaspectratio>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feImage <#element-attrdef-feimage-preserveaspectratio>`__\ , in
      § 9.15

-  `primary filter primitive tree <#primary-filter-primitive-tree>`__\ ,
   in § 9.3
-  primitiveUnits

   -  `attribute for
      SVGFilterElement <#dom-svgfilterelement-primitiveunits>`__\ , in
      § Unnumbered section
   -  `element-attr for
      filter <#element-attrdef-filter-primitiveunits>`__\ , in § 7

-  `radius <#element-attrdef-femorphology-radius>`__\ , in § 9.17
-  `radiusX <#dom-svgfemorphologyelement-radiusx>`__\ , in § Unnumbered
   section
-  `radiusY <#dom-svgfemorphologyelement-radiusy>`__\ , in § Unnumbered
   section
-  result

   -  `attribute for
      SVGFilterPrimitiveStandardAttributes <#dom-svgfilterprimitivestandardattributes-result>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-result>`__\ ,
      in § 9.2

-  `saturate <#attr-valuedef-type-saturate>`__\ , in § 9.6
-  `saturate() <#funcdef-filter-saturate>`__\ , in § 6.1
-  scale

   -  `attribute for
      SVGFEDisplacementMapElement <#dom-svgfedisplacementmapelement-scale>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDisplacementMap <#element-attrdef-fedisplacementmap-scale>`__\ ,
      in § 9.11

-  seed

   -  `attribute for
      SVGFETurbulenceElement <#dom-svgfeturbulenceelement-seed>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feTurbulence <#element-attrdef-feturbulence-seed>`__\ , in § 9.21

-  `sepia() <#funcdef-filter-sepia>`__\ , in § 6.1
-  setStdDeviation(stdDeviationX, stdDeviationY)

   -  `method for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-setstddeviation>`__\ ,
      in § Unnumbered section
   -  `method for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-setstddeviation>`__\ ,
      in § Unnumbered section

-  slope

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-slope>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-slope>`__\ ,
      in § 9.7.1

-  `SourceAlpha <#attr-valuedef-in-sourcealpha>`__\ , in § 9.2
-  `SourceGraphic <#attr-valuedef-in-sourcegraphic>`__\ , in § 9.2
-  specularConstant

   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-specularconstant>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpecularLighting <#element-attrdef-fespecularlighting-specularconstant>`__\ ,
      in § 9.19

-  specularExponent

   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-specularexponent>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-specularexponent>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feSpecularLighting <#element-attrdef-fespecularlighting-specularexponent>`__\ ,
      in § 9.19
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-specularexponent>`__\ ,
      in § 11.4

-  `sRGB <#valdef-color-interpolation-filters-srgb>`__\ , in § 10
-  stdDeviation

   -  `element-attr for
      feDropShadow <#element-attrdef-fedropshadow-stddeviation>`__\ , in
      § 9.12
   -  `element-attr for
      feGaussianBlur <#element-attrdef-fegaussianblur-stddeviation>`__\ ,
      in § 9.14

-  stdDeviationX

   -  `attribute for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-stddeviationx>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-stddeviationx>`__\ ,
      in § Unnumbered section

-  stdDeviationY

   -  `attribute for
      SVGFEDropShadowElement <#dom-svgfedropshadowelement-stddeviationy>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-stddeviationy>`__\ ,
      in § Unnumbered section

-  stitchTiles

   -  `attribute for
      SVGFETurbulenceElement <#dom-svgfeturbulenceelement-stitchtiles>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feTurbulence <#element-attrdef-feturbulence-stitchtiles>`__\ , in
      § 9.21

-  `StrokePaint <#attr-valuedef-in-strokepaint>`__\ , in § 9.2
-  surfaceScale

   -  `attribute for
      SVGFEDiffuseLightingElement <#dom-svgfediffuselightingelement-surfacescale>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFESpecularLightingElement <#dom-svgfespecularlightingelement-surfacescale>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDiffuseLighting <#element-attrdef-fediffuselighting-surfacescale>`__\ ,
      in § 9.10
   -  `element-attr for
      feSpecularLighting <#element-attrdef-fespecularlighting-surfacescale>`__\ ,
      in § 9.19

-  `SVG_CHANNEL_A <#dom-svgfedisplacementmapelement-svg_channel_a>`__\ ,
   in § Unnumbered section
-  `SVG_CHANNEL_B <#dom-svgfedisplacementmapelement-svg_channel_b>`__\ ,
   in § Unnumbered section
-  `SVG_CHANNEL_G <#dom-svgfedisplacementmapelement-svg_channel_g>`__\ ,
   in § Unnumbered section
-  `SVG_CHANNEL_R <#dom-svgfedisplacementmapelement-svg_channel_r>`__\ ,
   in § Unnumbered section
-  `SVG_CHANNEL_UNKNOWN <#dom-svgfedisplacementmapelement-svg_channel_unknown>`__\ ,
   in § Unnumbered section
-  `SVGComponentTransferFunctionElement <#svgcomponenttransferfunctionelement>`__\ ,
   in § Unnumbered section
-  SVG_EDGEMODE_DUPLICATE

   -  `const for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-svg_edgemode_duplicate>`__\ ,
      in § Unnumbered section
   -  `const for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-svg_edgemode_duplicate>`__\ ,
      in § Unnumbered section

-  SVG_EDGEMODE_NONE

   -  `const for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-svg_edgemode_none>`__\ ,
      in § Unnumbered section
   -  `const for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-svg_edgemode_none>`__\ ,
      in § Unnumbered section

-  SVG_EDGEMODE_UNKNOWN

   -  `const for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-svg_edgemode_unknown>`__\ ,
      in § Unnumbered section
   -  `const for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-svg_edgemode_unknown>`__\ ,
      in § Unnumbered section

-  SVG_EDGEMODE_WRAP

   -  `const for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-svg_edgemode_wrap>`__\ ,
      in § Unnumbered section
   -  `const for
      SVGFEGaussianBlurElement <#dom-svgfegaussianblurelement-svg_edgemode_wrap>`__\ ,
      in § Unnumbered section

-  `SVGFEBlendElement <#svgfeblendelement>`__\ , in § Unnumbered section
-  `SVG_FEBLEND_MODE_COLOR <#dom-svgfeblendelement-svg_feblend_mode_color>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_COLOR_BURN <#dom-svgfeblendelement-svg_feblend_mode_color_burn>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_COLOR_DODGE <#dom-svgfeblendelement-svg_feblend_mode_color_dodge>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_DARKEN <#dom-svgfeblendelement-svg_feblend_mode_darken>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_DIFFERENCE <#dom-svgfeblendelement-svg_feblend_mode_difference>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_EXCLUSION <#dom-svgfeblendelement-svg_feblend_mode_exclusion>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_HARD_LIGHT <#dom-svgfeblendelement-svg_feblend_mode_hard_light>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_HUE <#dom-svgfeblendelement-svg_feblend_mode_hue>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_LIGHTEN <#dom-svgfeblendelement-svg_feblend_mode_lighten>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_LUMINOSITY <#dom-svgfeblendelement-svg_feblend_mode_luminosity>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_MULTIPLY <#dom-svgfeblendelement-svg_feblend_mode_multiply>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_NORMAL <#dom-svgfeblendelement-svg_feblend_mode_normal>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_OVERLAY <#dom-svgfeblendelement-svg_feblend_mode_overlay>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_SATURATION <#dom-svgfeblendelement-svg_feblend_mode_saturation>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_SCREEN <#dom-svgfeblendelement-svg_feblend_mode_screen>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_SOFT_LIGHT <#dom-svgfeblendelement-svg_feblend_mode_soft_light>`__\ ,
   in § Unnumbered section
-  `SVG_FEBLEND_MODE_UNKNOWN <#dom-svgfeblendelement-svg_feblend_mode_unknown>`__\ ,
   in § Unnumbered section
-  `SVGFEColorMatrixElement <#svgfecolormatrixelement>`__\ , in
   § Unnumbered section
-  `SVG_FECOLORMATRIX_TYPE_HUEROTATE <#dom-svgfecolormatrixelement-svg_fecolormatrix_type_huerotate>`__\ ,
   in § Unnumbered section
-  `SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA <#dom-svgfecolormatrixelement-svg_fecolormatrix_type_luminancetoalpha>`__\ ,
   in § Unnumbered section
-  `SVG_FECOLORMATRIX_TYPE_MATRIX <#dom-svgfecolormatrixelement-svg_fecolormatrix_type_matrix>`__\ ,
   in § Unnumbered section
-  `SVG_FECOLORMATRIX_TYPE_SATURATE <#dom-svgfecolormatrixelement-svg_fecolormatrix_type_saturate>`__\ ,
   in § Unnumbered section
-  `SVG_FECOLORMATRIX_TYPE_UNKNOWN <#dom-svgfecolormatrixelement-svg_fecolormatrix_type_unknown>`__\ ,
   in § Unnumbered section
-  `SVGFEComponentTransferElement <#svgfecomponenttransferelement>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_discrete>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_GAMMA <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_gamma>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_identity>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_LINEAR <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_linear>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_TABLE <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_table>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN <#dom-svgcomponenttransferfunctionelement-svg_fecomponenttransfer_type_unknown>`__\ ,
   in § Unnumbered section
-  `SVGFECompositeElement <#svgfecompositeelement>`__\ , in § Unnumbered
   section
-  `SVG_FECOMPOSITE_OPERATOR_ARITHMETIC <#dom-svgfecompositeelement-svg_fecomposite_operator_arithmetic>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_ATOP <#dom-svgfecompositeelement-svg_fecomposite_operator_atop>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_IN <#dom-svgfecompositeelement-svg_fecomposite_operator_in>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_OUT <#dom-svgfecompositeelement-svg_fecomposite_operator_out>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_OVER <#dom-svgfecompositeelement-svg_fecomposite_operator_over>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_UNKNOWN <#dom-svgfecompositeelement-svg_fecomposite_operator_unknown>`__\ ,
   in § Unnumbered section
-  `SVG_FECOMPOSITE_OPERATOR_XOR <#dom-svgfecompositeelement-svg_fecomposite_operator_xor>`__\ ,
   in § Unnumbered section
-  `SVGFEConvolveMatrixElement <#svgfeconvolvematrixelement>`__\ , in
   § Unnumbered section
-  `SVGFEDiffuseLightingElement <#svgfediffuselightingelement>`__\ , in
   § Unnumbered section
-  `SVGFEDisplacementMapElement <#svgfedisplacementmapelement>`__\ , in
   § Unnumbered section
-  `SVGFEDistantLightElement <#svgfedistantlightelement>`__\ , in
   § Unnumbered section
-  `SVGFEDropShadowElement <#svgfedropshadowelement>`__\ , in
   § Unnumbered section
-  `SVGFEFloodElement <#svgfefloodelement>`__\ , in § Unnumbered section
-  `SVGFEFuncAElement <#svgfefuncaelement>`__\ , in § Unnumbered section
-  `SVGFEFuncBElement <#svgfefuncbelement>`__\ , in § Unnumbered section
-  `SVGFEFuncGElement <#svgfefuncgelement>`__\ , in § Unnumbered section
-  `SVGFEFuncRElement <#svgfefuncrelement>`__\ , in § Unnumbered section
-  `SVGFEGaussianBlurElement <#svgfegaussianblurelement>`__\ , in
   § Unnumbered section
-  `SVGFEImageElement <#svgfeimageelement>`__\ , in § Unnumbered section
-  `SVGFEMergeElement <#svgfemergeelement>`__\ , in § Unnumbered section
-  `SVGFEMergeNodeElement <#svgfemergenodeelement>`__\ , in § Unnumbered
   section
-  `SVGFEMorphologyElement <#svgfemorphologyelement>`__\ , in
   § Unnumbered section
-  `SVGFEOffsetElement <#svgfeoffsetelement>`__\ , in § Unnumbered
   section
-  `SVGFEPointLightElement <#svgfepointlightelement>`__\ , in
   § Unnumbered section
-  `SVGFESpecularLightingElement <#svgfespecularlightingelement>`__\ ,
   in § Unnumbered section
-  `SVGFESpotLightElement <#svgfespotlightelement>`__\ , in § Unnumbered
   section
-  `SVGFETileElement <#svgfetileelement>`__\ , in § Unnumbered section
-  `SVGFETurbulenceElement <#svgfeturbulenceelement>`__\ , in
   § Unnumbered section
-  `SVGFilterElement <#svgfilterelement>`__\ , in § Unnumbered section
-  `SVGFilterPrimitiveStandardAttributes <#svgfilterprimitivestandardattributes>`__\ ,
   in § Unnumbered section
-  `SVG_MORPHOLOGY_OPERATOR_DILATE <#dom-svgfemorphologyelement-svg_morphology_operator_dilate>`__\ ,
   in § Unnumbered section
-  `SVG_MORPHOLOGY_OPERATOR_ERODE <#dom-svgfemorphologyelement-svg_morphology_operator_erode>`__\ ,
   in § Unnumbered section
-  `SVG_MORPHOLOGY_OPERATOR_UNKNOWN <#dom-svgfemorphologyelement-svg_morphology_operator_unknown>`__\ ,
   in § Unnumbered section
-  `SVG_STITCHTYPE_NOSTITCH <#dom-svgfeturbulenceelement-svg_stitchtype_nostitch>`__\ ,
   in § Unnumbered section
-  `SVG_STITCHTYPE_STITCH <#dom-svgfeturbulenceelement-svg_stitchtype_stitch>`__\ ,
   in § Unnumbered section
-  `SVG_STITCHTYPE_UNKNOWN <#dom-svgfeturbulenceelement-svg_stitchtype_unknown>`__\ ,
   in § Unnumbered section
-  `SVG_TURBULENCE_TYPE_FRACTALNOISE <#dom-svgfeturbulenceelement-svg_turbulence_type_fractalnoise>`__\ ,
   in § Unnumbered section
-  `SVG_TURBULENCE_TYPE_TURBULENCE <#dom-svgfeturbulenceelement-svg_turbulence_type_turbulence>`__\ ,
   in § Unnumbered section
-  `SVG_TURBULENCE_TYPE_UNKNOWN <#dom-svgfeturbulenceelement-svg_turbulence_type_unknown>`__\ ,
   in § Unnumbered section
-  `table <#attr-valuedef-type-table>`__\ , in § 9.7.1
-  tableValues

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-tablevalues>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-tablevalues>`__\ ,
      in § 9.7.1

-  targetX

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-targetx>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-targetx>`__\ ,
      in § 9.9

-  targetY

   -  `attribute for
      SVGFEConvolveMatrixElement <#dom-svgfeconvolvematrixelement-targety>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feConvolveMatrix <#element-attrdef-feconvolvematrix-targety>`__\ ,
      in § 9.9

-  `transfer function element <#transfer-function-element>`__\ , in
   § 9.7
-  `transfer function element
   attributes <#transfer-function-element-attributes>`__\ , in § 9.7.1
-  type

   -  `attribute for
      SVGComponentTransferFunctionElement <#dom-svgcomponenttransferfunctionelement-type>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFEColorMatrixElement <#dom-svgfecolormatrixelement-type>`__\ ,
      in § Unnumbered section
   -  `attribute for
      SVGFETurbulenceElement <#dom-svgfeturbulenceelement-type>`__\ , in
      § Unnumbered section
   -  `element-attr for
      feColorMatrix <#element-attrdef-fecolormatrix-type>`__\ , in § 9.6
   -  `element-attr for
      feComponentTransfer <#element-attrdef-fecomponenttransfer-type>`__\ ,
      in § 9.7.1
   -  `element-attr for
      feTurbulence <#element-attrdef-feturbulence-type>`__\ , in § 9.21

-  `<url> <#typedef-filter-url>`__\ , in § 5
-  userSpaceOnUse

   -  `attr-value for
      filterUnits <#attr-valuedef-filterunits-userspaceonuse>`__\ , in
      § 7
   -  `attr-value for
      primitiveUnits <#attr-valuedef-primitiveunits-userspaceonuse>`__\ ,
      in § 7

-  values

   -  `attribute for
      SVGFEColorMatrixElement <#dom-svgfecolormatrixelement-values>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feColorMatrix <#element-attrdef-fecolormatrix-values>`__\ , in
      § 9.6

-  width

   -  `attribute for
      SVGFilterElement <#dom-svgfilterelement-width>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFilterPrimitiveStandardAttributes <#dom-svgfilterprimitivestandardattributes-width>`__\ ,
      in § Unnumbered section
   -  `element-attr for filter <#element-attrdef-filter-width>`__\ , in
      § 7
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-width>`__\ ,
      in § 9.2

-  `wrap <#attr-valuedef-fegaussianblur-edgemode-wrap>`__\ , in § 9.14
-  x

   -  `attribute for
      SVGFEPointLightElement <#dom-svgfepointlightelement-x>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-x>`__\ , in
      § Unnumbered section
   -  `attribute for SVGFilterElement <#dom-svgfilterelement-x>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFilterPrimitiveStandardAttributes <#dom-svgfilterprimitivestandardattributes-x>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      fePointLight <#element-attrdef-fepointlight-x>`__\ , in § 11.3
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-x>`__\ , in § 11.4
   -  `element-attr for filter <#element-attrdef-filter-x>`__\ , in § 7
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-x>`__\ , in
      § 9.2

-  xChannelSelector

   -  `attribute for
      SVGFEDisplacementMapElement <#dom-svgfedisplacementmapelement-xchannelselector>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDisplacementMap <#element-attrdef-fedisplacementmap-xchannelselector>`__\ ,
      in § 9.11

-  `xlink:href <#element-attrdef-feimage-xlinkhref>`__\ , in § 9.15
-  `xor <#attr-valuedef-fecomposite-operator-xor>`__\ , in § 9.8
-  y

   -  `attribute for
      SVGFEPointLightElement <#dom-svgfepointlightelement-y>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-y>`__\ , in
      § Unnumbered section
   -  `attribute for SVGFilterElement <#dom-svgfilterelement-y>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFilterPrimitiveStandardAttributes <#dom-svgfilterprimitivestandardattributes-y>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      fePointLight <#element-attrdef-fepointlight-y>`__\ , in § 11.3
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-y>`__\ , in § 11.4
   -  `element-attr for filter <#element-attrdef-filter-y>`__\ , in § 7
   -  `element-attr for
      filter-primitive <#element-attrdef-filter-primitive-y>`__\ , in
      § 9.2

-  yChannelSelector

   -  `attribute for
      SVGFEDisplacementMapElement <#dom-svgfedisplacementmapelement-ychannelselector>`__\ ,
      in § Unnumbered section
   -  `element-attr for
      feDisplacementMap <#element-attrdef-fedisplacementmap-ychannelselector>`__\ ,
      in § 9.11

-  z

   -  `attribute for
      SVGFEPointLightElement <#dom-svgfepointlightelement-z>`__\ , in
      § Unnumbered section
   -  `attribute for
      SVGFESpotLightElement <#dom-svgfespotlightelement-z>`__\ , in
      § Unnumbered section
   -  `element-attr for
      fePointLight <#element-attrdef-fepointlight-z>`__\ , in § 11.3
   -  `element-attr for
      feSpotLight <#element-attrdef-fespotlight-z>`__\ , in § 11.4

.. _index-defined-elsewhere:

Terms defined by reference\ ` <#index-defined-elsewhere>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  [COMPOSITING-1] defines the following terms:

   -  normal

-  [COMPOSITING-2] defines the following terms:

   -  <blend-mode>
   -  backdrop
   -  isolation

-  [CSS-CASCADE-5] defines the following terms:

   -  specified value
   -  used value

-  [CSS-COLOR-4] defines the following terms:

   -  color
   -  opacity
   -  srgb
   -  srgb-linear
   -  transparent

-  [CSS-COLOR-5] defines the following terms:

   -  <color>
   -  a

-  [CSS-DISPLAY-3] defines the following terms:

   -  display

-  [CSS-DISPLAY-4] defines the following terms:

   -  containing block
   -  visibility

-  [CSS-FONTS-4] defines the following terms:

   -  font
   -  font-size

-  [CSS-FONTS-5] defines the following terms:

   -  font-size-adjust

-  [CSS-IMAGES-3] defines the following terms:

   -  <image>
   -  concrete object size
   -  image-rendering

-  [CSS-MASKING-1] defines the following terms:

   -  clip
   -  clip-path
   -  clip-rule
   -  mask

-  [CSS-OVERFLOW-3] defines the following terms:

   -  ink overflow area
   -  ink overflow rectangle
   -  overflow

-  [CSS-POSITION-4] defines the following terms:

   -  overlay

-  [CSS-TEXT-4] defines the following terms:

   -  letter-spacing
   -  word-spacing

-  [CSS-TEXT-DECOR-4] defines the following terms:

   -  text-decoration
   -  text-shadow

-  [CSS-TRANSFORMS-1] defines the following terms:

   -  local coordinate system

-  [CSS-UI-4] defines the following terms:

   -  cursor
   -  outline
   -  pointer-events

-  [CSS-VALUES-4] defines the following terms:

   -  &&
   -  +
   -  ,
   -  <angle>
   -  <custom-ident>
   -  <integer>
   -  <length-percentage>
   -  <length>
   -  <number>
   -  <percentage>
   -  <string>
   -  <zero>
   -  ?
   -  calc()
   -  {a,b}
   -  \|

-  [CSS-WRITING-MODES-3] defines the following terms:

   -  direction
   -  unicode-bidi

-  [CSS-WRITING-MODES-4] defines the following terms:

   -  writing-mode

-  [CSS21] defines the following terms:

   -  stacking context

-  [CSS3BG] defines the following terms:

   -  border
   -  border-image
   -  box-shadow

-  [Fetch] defines the following terms:

   -  cors request

-  [HTML] defines the following terms:

   -  browsing context
   -  img

-  [MEDIAQUERIES-5] defines the following terms:

   -  false

-  [SELECTORS-4] defines the following terms:

   -  :visited

-  [SVG-ANIMATIONS] defines the following terms:

   -  animate
   -  animatetransform
   -  set

-  [SVG11] defines the following terms:

   -  simple alpha compositing

-  [SVG12T] defines the following terms:

   -  unsupported

-  [SVG2] defines the following terms:

   -  SVGAnimatedBoolean
   -  SVGAnimatedEnumeration
   -  SVGAnimatedInteger
   -  SVGAnimatedLength
   -  SVGAnimatedNumber
   -  SVGAnimatedNumberList
   -  SVGAnimatedPreserveAspectRatio
   -  SVGAnimatedString
   -  SVGElement
   -  SVGURIReference
   -  SVGUnitTypes
   -  bounding box
   -  color-interpolation
   -  color-rendering
   -  container element
   -  defs
   -  desc
   -  descriptive element
   -  fill
   -  fill-opacity
   -  fill-rule
   -  graphics element
   -  image
   -  initial value
   -  marker
   -  marker-end
   -  marker-mid
   -  marker-start
   -  metadata
   -  object bounding box units
   -  r
   -  rect
   -  script
   -  shape-rendering
   -  stop-color
   -  stop-opacity
   -  stroke
   -  stroke-dasharray
   -  stroke-dashoffset
   -  stroke-linecap
   -  stroke-linejoin
   -  stroke-miterlimit
   -  stroke-opacity
   -  stroke-width
   -  text-anchor
   -  text-rendering
   -  title
   -  use

-  [WEB-ANIMATIONS-1] defines the following terms:

   -  composite operation replace

-  [WEBIDL] defines the following terms:

   -  Exposed
   -  float
   -  undefined
   -  unsigned short

References\ ` <#references>`__
------------------------------

.. _normative:

Normative References\ ` <#normative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[COMPOSITING-1]
   Rik Cabanier; Nikos Andronikos. `Compositing and Blending Level
   1 <https://drafts.fxtf.org/compositing-1/>`__. URL:
   https://drafts.fxtf.org/compositing-1/
[COMPOSITING-2]
   `Compositing and Blending Level
   2 <https://drafts.fxtf.org/compositing-2/>`__. Editor's Draft. URL:
   https://drafts.fxtf.org/compositing-2/
[CSS-CASCADE-5]
   Elika Etemad; Miriam Suzanne; Tab Atkins Jr.. `CSS Cascading and
   Inheritance Level 5 <https://drafts.csswg.org/css-cascade-5/>`__.
   URL: https://drafts.csswg.org/css-cascade-5/
[CSS-COLOR-4]
   Tab Atkins Jr.; Chris Lilley; Lea Verou. `CSS Color Module Level
   4 <https://drafts.csswg.org/css-color/>`__. URL:
   https://drafts.csswg.org/css-color/
[CSS-COLOR-5]
   Chris Lilley; et al. `CSS Color Module Level
   5 <https://drafts.csswg.org/css-color-5/>`__. URL:
   https://drafts.csswg.org/css-color-5/
[CSS-DISPLAY-3]
   Elika Etemad; Tab Atkins Jr.. `CSS Display Module Level
   3 <https://drafts.csswg.org/css-display/>`__. URL:
   https://drafts.csswg.org/css-display/
[CSS-DISPLAY-4]
   `CSS Display Module Level
   4 <https://drafts.csswg.org/css-display-4/>`__. Editor's Draft. URL:
   https://drafts.csswg.org/css-display-4/
[CSS-FONTS-4]
   Chris Lilley. `CSS Fonts Module Level
   4 <https://drafts.csswg.org/css-fonts-4/>`__. URL:
   https://drafts.csswg.org/css-fonts-4/
[CSS-FONTS-5]
   Chris Lilley. `CSS Fonts Module Level
   5 <https://drafts.csswg.org/css-fonts-5/>`__. URL:
   https://drafts.csswg.org/css-fonts-5/
[CSS-IMAGES-3]
   Tab Atkins Jr.; Elika Etemad; Lea Verou. `CSS Images Module Level
   3 <https://drafts.csswg.org/css-images-3/>`__. URL:
   https://drafts.csswg.org/css-images-3/
[CSS-MASKING-1]
   Dirk Schulze; Brian Birtles; Tab Atkins Jr.. `CSS Masking Module
   Level 1 <https://drafts.fxtf.org/css-masking-1/>`__. URL:
   https://drafts.fxtf.org/css-masking-1/
[CSS-OVERFLOW-3]
   Elika Etemad; Florian Rivoal. `CSS Overflow Module Level
   3 <https://drafts.csswg.org/css-overflow-3/>`__. URL:
   https://drafts.csswg.org/css-overflow-3/
[CSS-POSITION-4]
   `CSS Positioned Layout Module Level
   4 <https://drafts.csswg.org/css-position-4/>`__. Editor's Draft. URL:
   https://drafts.csswg.org/css-position-4/
[CSS-TEXT-4]
   Elika Etemad; et al. `CSS Text Module Level
   4 <https://drafts.csswg.org/css-text-4/>`__. URL:
   https://drafts.csswg.org/css-text-4/
[CSS-TEXT-DECOR-4]
   Elika Etemad; Koji Ishii. `CSS Text Decoration Module Level
   4 <https://drafts.csswg.org/css-text-decor-4/>`__. URL:
   https://drafts.csswg.org/css-text-decor-4/
[CSS-TRANSFORMS-1]
   Simon Fraser; et al. `CSS Transforms Module Level
   1 <https://drafts.csswg.org/css-transforms/>`__. URL:
   https://drafts.csswg.org/css-transforms/
[CSS-TRANSITIONS-1]
   David Baron; et al. `CSS
   Transitions <https://drafts.csswg.org/css-transitions/>`__. URL:
   https://drafts.csswg.org/css-transitions/
[CSS-UI-4]
   Florian Rivoal. `CSS Basic User Interface Module Level
   4 <https://drafts.csswg.org/css-ui-4/>`__. URL:
   https://drafts.csswg.org/css-ui-4/
[CSS-VALUES-4]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   4 <https://drafts.csswg.org/css-values-4/>`__. URL:
   https://drafts.csswg.org/css-values-4/
[CSS-WRITING-MODES-3]
   Elika Etemad; Koji Ishii. `CSS Writing Modes Level
   3 <https://drafts.csswg.org/css-writing-modes-3/>`__. URL:
   https://drafts.csswg.org/css-writing-modes-3/
[CSS-WRITING-MODES-4]
   Elika Etemad; Koji Ishii. `CSS Writing Modes Level
   4 <https://drafts.csswg.org/css-writing-modes-4/>`__. URL:
   https://drafts.csswg.org/css-writing-modes-4/
[CSS21]
   Bert Bos; et al. `Cascading Style Sheets Level 2 Revision 1 (CSS 2.1)
   Specification <https://drafts.csswg.org/css2/>`__. URL:
   https://drafts.csswg.org/css2/
[CSS3BG]
   Elika Etemad; Brad Kemper. `CSS Backgrounds and Borders Module Level
   3 <https://drafts.csswg.org/css-backgrounds/>`__. URL:
   https://drafts.csswg.org/css-backgrounds/
[CSS3VAL]
   Tab Atkins Jr.; Elika Etemad. `CSS Values and Units Module Level
   3 <https://drafts.csswg.org/css-values-3/>`__. URL:
   https://drafts.csswg.org/css-values-3/
[Fetch]
   Anne van Kesteren. `Fetch
   Standard <https://fetch.spec.whatwg.org/>`__. Living Standard. URL:
   https://fetch.spec.whatwg.org/
[HTML]
   Anne van Kesteren; et al. `HTML
   Standard <https://html.spec.whatwg.org/multipage/>`__. Living
   Standard. URL: https://html.spec.whatwg.org/multipage/
[MEDIAQUERIES-5]
   Dean Jackson; et al. `Media Queries Level
   5 <https://drafts.csswg.org/mediaqueries-5/>`__. URL:
   https://drafts.csswg.org/mediaqueries-5/
[RFC2119]
   S. Bradner. `Key words for use in RFCs to Indicate Requirement
   Levels <https://datatracker.ietf.org/doc/html/rfc2119>`__. March
   1997. Best Current Practice. URL:
   https://datatracker.ietf.org/doc/html/rfc2119
[SELECTORS-4]
   Elika Etemad; Tab Atkins Jr.. `Selectors Level
   4 <https://drafts.csswg.org/selectors/>`__. URL:
   https://drafts.csswg.org/selectors/
[SVG-ANIMATIONS]
   `SVG Animations Level 2 <https://svgwg.org/specs/animations/>`__.
   Editor's Draft. URL: https://svgwg.org/specs/animations/
[SVG11]
   Erik Dahlström; et al. `Scalable Vector Graphics (SVG) 1.1 (Second
   Edition) <https://www.w3.org/TR/SVG11/>`__. 16 August 2011. REC. URL:
   https://www.w3.org/TR/SVG11/
[SVG2]
   Amelia Bellamy-Royds; et al. `Scalable Vector Graphics (SVG)
   2 <https://svgwg.org/svg2-draft/>`__. URL:
   https://svgwg.org/svg2-draft/
[WEB-ANIMATIONS-1]
   Brian Birtles; et al. `Web
   Animations <https://drafts.csswg.org/web-animations-1/>`__. URL:
   https://drafts.csswg.org/web-animations-1/
[WEBIDL]
   Edgar Chen; Timothy Gu. `Web IDL
   Standard <https://webidl.spec.whatwg.org/>`__. Living Standard. URL:
   https://webidl.spec.whatwg.org/

.. _informative:

Informative References\ ` <#informative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[ArTD]
   B. Jacob. `Arithmetic Timing
   Differences <https://wiki.mozilla.org/User:Bjacob/ArithmeticTimingDifferences>`__.
   URL: https://wiki.mozilla.org/User:Bjacob/ArithmeticTimingDifferences
[Cmam]
   IEC. `IEC 61966-2-1:1999 Colour measurement and management - Part
   2-1: Colour management - Default RGB colour space -
   sRGB <https://webstore.iec.ch/publication/6169>`__. URL:
   https://webstore.iec.ch/publication/6169
[CSS3-ANIMATIONS]
   David Baron; et al. `CSS Animations Level
   1 <https://drafts.csswg.org/css-animations/>`__. URL:
   https://drafts.csswg.org/css-animations/
[CSS3COLOR]
   Tantek Çelik; Chris Lilley; David Baron. `CSS Color Module Level
   3 <https://drafts.csswg.org/css-color-3/>`__. URL:
   https://drafts.csswg.org/css-color-3/
[PORTERDUFF]
   Thomas Porter; Tom Duff. Compositing digital images. July 1984.
[TaM]
   Ebert et al, AP Professional. Texturing and Modeling. 1994.

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
   Media
   `color-interpolation-filters <#propdef-color-interpolation-filters>`__
   auto \| sRGB \| linearRGB
   linearRGB
   All filter primitives
   yes
   n/a
   discrete
   per grammar
   as specified
   visual
   `filter <#propdef-filter>`__
   none \| <filter-value-list>
   none
   All elements. In SVG, it applies to container elements without the
   defs element, all graphics elements and the use element.
   no
   n/a
   See prose in Animation of Filters.
   per grammar
   as specified
   visual
   `flood-color <#propdef-flood-color>`__
   <color>
   black
   feFlood and feDropShadow elements
   no
   n/a
   by computed value
   per grammar
   as specified
   visual
   `flood-opacity <#propdef-flood-opacity>`__
   <'opacity'>
   1
   feFlood and feDropShadow elements
   no
   n/a
   by computed value
   per grammar
   the specified value converted to a number, clamped to the range [0,1]
   visual
   `lighting-color <#propdef-lighting-color>`__
   <color>
   white
   feDiffuseLighting and feSpecularLighting elements
   no
   n/a
   by computed value
   per grammar
   as specified
   visual

IDL Index\ ` <#idl-index>`__
----------------------------

.. code:: idl

   [Exposed=Window]
   interface SVGFilterElement : SVGElement {
     readonly attribute SVGAnimatedEnumeration filterUnits;
     readonly attribute SVGAnimatedEnumeration primitiveUnits;
     readonly attribute SVGAnimatedLength x;
     readonly attribute SVGAnimatedLength y;
     readonly attribute SVGAnimatedLength width;
     readonly attribute SVGAnimatedLength height;
   };

   SVGFilterElement includes SVGURIReference;

   interface mixin SVGFilterPrimitiveStandardAttributes {
     readonly attribute SVGAnimatedLength x;
     readonly attribute SVGAnimatedLength y;
     readonly attribute SVGAnimatedLength width;
     readonly attribute SVGAnimatedLength height;
     readonly attribute SVGAnimatedString result;
   };

   [Exposed=Window]
   interface SVGFEBlendElement : SVGElement {

     // Blend Mode Types
     const unsigned short SVG_FEBLEND_MODE_UNKNOWN = 0;
     const unsigned short SVG_FEBLEND_MODE_NORMAL = 1;
     const unsigned short SVG_FEBLEND_MODE_MULTIPLY = 2;
     const unsigned short SVG_FEBLEND_MODE_SCREEN = 3;
     const unsigned short SVG_FEBLEND_MODE_DARKEN = 4;
     const unsigned short SVG_FEBLEND_MODE_LIGHTEN = 5;
     const unsigned short SVG_FEBLEND_MODE_OVERLAY = 6;
     const unsigned short SVG_FEBLEND_MODE_COLOR_DODGE = 7;
     const unsigned short SVG_FEBLEND_MODE_COLOR_BURN = 8;
     const unsigned short SVG_FEBLEND_MODE_HARD_LIGHT = 9;
     const unsigned short SVG_FEBLEND_MODE_SOFT_LIGHT = 10;
     const unsigned short SVG_FEBLEND_MODE_DIFFERENCE = 11;
     const unsigned short SVG_FEBLEND_MODE_EXCLUSION = 12;
     const unsigned short SVG_FEBLEND_MODE_HUE = 13;
     const unsigned short SVG_FEBLEND_MODE_SATURATION = 14;
     const unsigned short SVG_FEBLEND_MODE_COLOR = 15;
     const unsigned short SVG_FEBLEND_MODE_LUMINOSITY = 16;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedString in2;
     readonly attribute SVGAnimatedEnumeration mode;
   };

   SVGFEBlendElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEColorMatrixElement : SVGElement {

     // Color Matrix Types
     const unsigned short SVG_FECOLORMATRIX_TYPE_UNKNOWN = 0;
     const unsigned short SVG_FECOLORMATRIX_TYPE_MATRIX = 1;
     const unsigned short SVG_FECOLORMATRIX_TYPE_SATURATE = 2;
     const unsigned short SVG_FECOLORMATRIX_TYPE_HUEROTATE = 3;
     const unsigned short SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA = 4;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedEnumeration type;
     readonly attribute SVGAnimatedNumberList values;
   };

   SVGFEColorMatrixElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEComponentTransferElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
   };

   SVGFEComponentTransferElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGComponentTransferFunctionElement : SVGElement {

     // Component Transfer Types
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN = 0;
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY = 1;
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_TABLE = 2;
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE = 3;
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_LINEAR = 4;
     const unsigned short SVG_FECOMPONENTTRANSFER_TYPE_GAMMA = 5;

     readonly attribute SVGAnimatedEnumeration type;
     readonly attribute SVGAnimatedNumberList tableValues;
     readonly attribute SVGAnimatedNumber slope;
     readonly attribute SVGAnimatedNumber intercept;
     readonly attribute SVGAnimatedNumber amplitude;
     readonly attribute SVGAnimatedNumber exponent;
     readonly attribute SVGAnimatedNumber offset;
   };

   [Exposed=Window]
   interface SVGFEFuncRElement : SVGComponentTransferFunctionElement {
   };

   [Exposed=Window]
   interface SVGFEFuncGElement : SVGComponentTransferFunctionElement {
   };

   [Exposed=Window]
   interface SVGFEFuncBElement : SVGComponentTransferFunctionElement {
   };

   [Exposed=Window]
   interface SVGFEFuncAElement : SVGComponentTransferFunctionElement {
   };

   [Exposed=Window]
   interface SVGFECompositeElement : SVGElement {

     // Composite Operators
     const unsigned short SVG_FECOMPOSITE_OPERATOR_UNKNOWN = 0;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_OVER = 1;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_IN = 2;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_OUT = 3;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_ATOP = 4;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_XOR = 5;
     const unsigned short SVG_FECOMPOSITE_OPERATOR_ARITHMETIC = 6;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedString in2;
     readonly attribute SVGAnimatedEnumeration operator;
     readonly attribute SVGAnimatedNumber k1;
     readonly attribute SVGAnimatedNumber k2;
     readonly attribute SVGAnimatedNumber k3;
     readonly attribute SVGAnimatedNumber k4;
   };

   SVGFECompositeElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEConvolveMatrixElement : SVGElement {

     // Edge Mode Values
     const unsigned short SVG_EDGEMODE_UNKNOWN = 0;
     const unsigned short SVG_EDGEMODE_DUPLICATE = 1;
     const unsigned short SVG_EDGEMODE_WRAP = 2;
     const unsigned short SVG_EDGEMODE_NONE = 3;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedInteger orderX;
     readonly attribute SVGAnimatedInteger orderY;
     readonly attribute SVGAnimatedNumberList kernelMatrix;
     readonly attribute SVGAnimatedNumber divisor;
     readonly attribute SVGAnimatedNumber bias;
     readonly attribute SVGAnimatedInteger targetX;
     readonly attribute SVGAnimatedInteger targetY;
     readonly attribute SVGAnimatedEnumeration edgeMode;
     readonly attribute SVGAnimatedNumber kernelUnitLengthX;
     readonly attribute SVGAnimatedNumber kernelUnitLengthY;
     readonly attribute SVGAnimatedBoolean preserveAlpha;
   };

   SVGFEConvolveMatrixElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEDiffuseLightingElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedNumber surfaceScale;
     readonly attribute SVGAnimatedNumber diffuseConstant;
     readonly attribute SVGAnimatedNumber kernelUnitLengthX;
     readonly attribute SVGAnimatedNumber kernelUnitLengthY;
   };

   SVGFEDiffuseLightingElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEDistantLightElement : SVGElement {
     readonly attribute SVGAnimatedNumber azimuth;
     readonly attribute SVGAnimatedNumber elevation;
   };

   [Exposed=Window]
   interface SVGFEPointLightElement : SVGElement {
     readonly attribute SVGAnimatedNumber x;
     readonly attribute SVGAnimatedNumber y;
     readonly attribute SVGAnimatedNumber z;
   };

   [Exposed=Window]
   interface SVGFESpotLightElement : SVGElement {
     readonly attribute SVGAnimatedNumber x;
     readonly attribute SVGAnimatedNumber y;
     readonly attribute SVGAnimatedNumber z;
     readonly attribute SVGAnimatedNumber pointsAtX;
     readonly attribute SVGAnimatedNumber pointsAtY;
     readonly attribute SVGAnimatedNumber pointsAtZ;
     readonly attribute SVGAnimatedNumber specularExponent;
     readonly attribute SVGAnimatedNumber limitingConeAngle;
   };

   [Exposed=Window]
   interface SVGFEDisplacementMapElement : SVGElement {

     // Channel Selectors
     const unsigned short SVG_CHANNEL_UNKNOWN = 0;
     const unsigned short SVG_CHANNEL_R = 1;
     const unsigned short SVG_CHANNEL_G = 2;
     const unsigned short SVG_CHANNEL_B = 3;
     const unsigned short SVG_CHANNEL_A = 4;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedString in2;
     readonly attribute SVGAnimatedNumber scale;
     readonly attribute SVGAnimatedEnumeration xChannelSelector;
     readonly attribute SVGAnimatedEnumeration yChannelSelector;
   };

   SVGFEDisplacementMapElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEDropShadowElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedNumber dx;
     readonly attribute SVGAnimatedNumber dy;
     readonly attribute SVGAnimatedNumber stdDeviationX;
     readonly attribute SVGAnimatedNumber stdDeviationY;

     undefined setStdDeviation(float stdDeviationX, float stdDeviationY);
   };

   SVGFEDropShadowElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEFloodElement : SVGElement {
   };

   SVGFEFloodElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEGaussianBlurElement : SVGElement {

     // Edge Mode Values
     const unsigned short SVG_EDGEMODE_UNKNOWN = 0;
     const unsigned short SVG_EDGEMODE_DUPLICATE = 1;
     const unsigned short SVG_EDGEMODE_WRAP = 2;
     const unsigned short SVG_EDGEMODE_NONE = 3;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedNumber stdDeviationX;
     readonly attribute SVGAnimatedNumber stdDeviationY;
     readonly attribute SVGAnimatedEnumeration edgeMode;

     undefined setStdDeviation(float stdDeviationX, float stdDeviationY);
   };

   SVGFEGaussianBlurElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEImageElement : SVGElement {
     readonly attribute SVGAnimatedPreserveAspectRatio preserveAspectRatio;
     readonly attribute SVGAnimatedString crossOrigin;
   };

   SVGFEImageElement includes SVGFilterPrimitiveStandardAttributes;
   SVGFEImageElement includes SVGURIReference;

   [Exposed=Window]
   interface SVGFEMergeElement : SVGElement {
   };

   SVGFEMergeElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEMergeNodeElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
   };

   [Exposed=Window]
   interface SVGFEMorphologyElement : SVGElement {

     // Morphology Operators
     const unsigned short SVG_MORPHOLOGY_OPERATOR_UNKNOWN = 0;
     const unsigned short SVG_MORPHOLOGY_OPERATOR_ERODE = 1;
     const unsigned short SVG_MORPHOLOGY_OPERATOR_DILATE = 2;

     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedEnumeration operator;
     readonly attribute SVGAnimatedNumber radiusX;
     readonly attribute SVGAnimatedNumber radiusY;
   };

   SVGFEMorphologyElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFEOffsetElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedNumber dx;
     readonly attribute SVGAnimatedNumber dy;
   };

   SVGFEOffsetElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFESpecularLightingElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
     readonly attribute SVGAnimatedNumber surfaceScale;
     readonly attribute SVGAnimatedNumber specularConstant;
     readonly attribute SVGAnimatedNumber specularExponent;
     readonly attribute SVGAnimatedNumber kernelUnitLengthX;
     readonly attribute SVGAnimatedNumber kernelUnitLengthY;
   };

   SVGFESpecularLightingElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFETileElement : SVGElement {
     readonly attribute SVGAnimatedString in1;
   };

   SVGFETileElement includes SVGFilterPrimitiveStandardAttributes;

   [Exposed=Window]
   interface SVGFETurbulenceElement : SVGElement {

     // Turbulence Types
     const unsigned short SVG_TURBULENCE_TYPE_UNKNOWN = 0;
     const unsigned short SVG_TURBULENCE_TYPE_FRACTALNOISE = 1;
     const unsigned short SVG_TURBULENCE_TYPE_TURBULENCE = 2;

     // Stitch Options
     const unsigned short SVG_STITCHTYPE_UNKNOWN = 0;
     const unsigned short SVG_STITCHTYPE_STITCH = 1;
     const unsigned short SVG_STITCHTYPE_NOSTITCH = 2;

     readonly attribute SVGAnimatedNumber baseFrequencyX;
     readonly attribute SVGAnimatedNumber baseFrequencyY;
     readonly attribute SVGAnimatedInteger numOctaves;
     readonly attribute SVGAnimatedNumber seed;
     readonly attribute SVGAnimatedEnumeration stitchTiles;
     readonly attribute SVGAnimatedEnumeration type;
   };

   SVGFETurbulenceElement includes SVGFilterPrimitiveStandardAttributes;

Issues Index\ ` <#issues-index>`__
----------------------------------

.. container::

   .. container:: issue

      How does filter behave on fixed background images? `[Issue
      #238] <https://github.com/w3c/fxtf-drafts/issues/238>`__
      `↵ <#issue-95bcf4be>`__

   .. container:: issue

      How to behave on invalid number of entries in the value list?
      `[Issue #237] <https://github.com/w3c/fxtf-drafts/issues/237>`__
      `↵ <#issue-4fd9d6f6>`__

   .. container:: issue

      Implementations do not match specification. `[Issue
      #113] <https://github.com/w3c/fxtf-drafts/issues/113>`__
      `↵ <#issue-1d845580>`__

   .. container:: issue

      Compute distance of filter functions. `[Issue
      #91] <https://github.com/w3c/fxtf-drafts/issues/91>`__
      `↵ <#issue-f7e128e9>`__

**✔**\ MDN

.. container:: feature

   `SVGComponentTransferFunctionElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGComponentTransferFunctionElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEBlendElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEBlendElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEColorMatrixElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEColorMatrixElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEComponentTransferElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEComponentTransferElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFECompositeElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFECompositeElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEConvolveMatrixElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEConvolveMatrixElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEDiffuseLightingElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDiffuseLightingElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEDisplacementMapElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDisplacementMapElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEDistantLightElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDistantLightElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEDropShadowElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEDropShadowElement>`__

   In all current engines.

   .. container:: support

      Firefox30+Safari6+Chrome13+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `SVGFEFloodElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFloodElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEFuncAElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncAElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEFuncBElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncBElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEFuncGElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncGElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEFuncRElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEFuncRElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEGaussianBlurElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEGaussianBlurElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**⚠**\ MDN

.. container:: feature

   `SVGFEImageElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEImageElement>`__

   In only one current engine.

   .. container:: support

      Firefox114+SafariNoneChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `SVGFEImageElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEImageElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEMergeElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEMergeNodeElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMergeNodeElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEMorphologyElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEMorphologyElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEOffsetElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEOffsetElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFEPointLightElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFEPointLightElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFESpecularLightingElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpecularLightingElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFESpotLightElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFESpotLightElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFETileElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFETileElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFETurbulenceElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFETurbulenceElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `SVGFilterElement <https://developer.mozilla.org/en-US/docs/Web/API/SVGFilterElement>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**⚠**\ MDN

.. container:: feature

   `filter <https://developer.mozilla.org/en-US/docs/Web/CSS/filter>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari9.1+Chrome53+

      --------------

      Opera40+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView53+Samsung Internet?Opera Mobile41+

.. container:: feature

   `Attribute/filter <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filter>`__

   In no current engines.

   .. container:: support

      Firefox?Safari?Chrome?

      --------------

      Opera?Edge?

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `filter-function/blur <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/brightness <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/contrast <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/drop-shadow <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/grayscale <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/hue-rotate <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/invert <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/opacity <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/opacity>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/saturate <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function/sepia <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `filter-function <https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android53+Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `Attribute/href <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/href>`__

   In all current engines.

   .. container:: support

      Firefox51+Safari12.1+Chrome50+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠**\ MDN

.. container:: feature

   `Attribute/color-interpolation-filters <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/color-interpolation-filters>`__

   In no current engines.

   .. container:: support

      Firefox?Safari?Chrome?

      --------------

      Opera?Edge?

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠**\ MDN

.. container:: feature

   `Attribute/flood-color <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-color>`__

   In no current engines.

   .. container:: support

      Firefox?Safari?Chrome?

      --------------

      Opera?Edge?

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠**\ MDN

.. container:: feature

   `Attribute/flood-opacity <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/flood-opacity>`__

   In no current engines.

   .. container:: support

      Firefox?Safari?Chrome?

      --------------

      Opera?Edge?

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠**\ MDN

.. container:: feature

   `Attribute/lighting-color <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/lighting-color>`__

   In no current engines.

   .. container:: support

      Firefox?Safari?Chrome?

      --------------

      Opera?Edge?

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/mode <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/mode>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feBlend <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBlend>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feColorMatrix <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feComponentTransfer <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/k1 <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k1>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)NoneIEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet1.5+Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/k2 <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k2>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)NoneIEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet1.5+Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/k3 <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k3>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)NoneIEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet1.5+Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/k4 <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/k4>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)NoneIEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet1.5+Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feComposite <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)18IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet1.5+Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attribute/bias <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/bias>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/divisor <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/divisor>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/edgeMode <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/edgeMode>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/in <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Attribute/in <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/kernelMatrix <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kernelMatrix>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/kernelUnitLength <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kernelUnitLength>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/order <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/order>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/preserveAlpha <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAlpha>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/targetX <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/targetX>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/targetY <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/targetY>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feConvolveMatrix <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome6+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/diffuseConstant <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/diffuseConstant>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/kernelUnitLength <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/kernelUnitLength>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/surfaceScale <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/surfaceScale>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feDiffuseLighting <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/scale <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/scale>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/xChannelSelector <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/xChannelSelector>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/yChannelSelector <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/yChannelSelector>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feDisplacementMap <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/azimuth <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/azimuth>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/elevation <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/elevation>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feDistantLight <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feDropShadow <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow>`__

   In all current engines.

   .. container:: support

      Firefox30+Safari6+Chrome13+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feFlood <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feFuncA <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feFuncB <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feFuncG <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feFuncR <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/stdDeviation <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stdDeviation>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)18IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feGaussianBlur <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)18IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**⚠**\ MDN

.. container:: feature

   `Attribute/crossorigin <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/crossorigin>`__

   In only one current engine.

   .. container:: support

      Firefox114+SafariNoneChromeNone

      --------------

      Opera?EdgeNone

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feImage <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feMerge <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feMergeNode <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/radius <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/radius>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feMorphology <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feOffset <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/fePointLight <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/specularConstant <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/specularConstant>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feSpecularLighting <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/limitingConeAngle <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/limitingConeAngle>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/pointsAtX <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtX>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/pointsAtY <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtY>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/pointsAtZ <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/pointsAtZ>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feSpotLight <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/feTile <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Attribute/baseFrequency <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/baseFrequency>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/numOctaves <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/numOctaves>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/seed <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/seed>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/stitchTiles <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stitchTiles>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/type <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/feTurbulence <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IEYes

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/filterUnits <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/filterUnits>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/height <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/height>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/primitiveUnits <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/primitiveUnits>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/width <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/width>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/x <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/x>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attribute/y <https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/y>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/filter <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari6+Chrome5+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebViewYesSamsung Internet?Opera Mobile10.1+

|image1|

.. |W3C| image:: https://www.w3.org/StyleSheets/TR/2021/logos/W3C
   :width: 72px
   :height: 48px
   :target: https://www.w3.org/
.. |Example for grayscale filter applied to image| image:: https://drafts.fxtf.org/filter-effects/images/grayscale.svg
   :width: 451px
   :height: 260px
.. |Example Filter| image:: https://drafts.fxtf.org/filter-effects/examples/filters01.png
.. |filters01 - original source graphic| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-0.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 1| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-1.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 2| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-2.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 3| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-3.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 4| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-4.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 5| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-5.png
   :width: 115px
   :height: 70px
.. |filters01 - after filter element 6| image:: https://drafts.fxtf.org/filter-effects/examples/filters01-6.png
   :width: 115px
   :height: 70px
.. |Example for subregions| image:: https://drafts.fxtf.org/filter-effects/examples/filtersubregion00.png
.. |Example of feBlend| image:: https://drafts.fxtf.org/filter-effects/examples/feBlend.png
.. |Example| image:: https://drafts.fxtf.org/filter-effects/examples/feColorMatrix.png
.. |Example for feComponentTransfer| image:: https://drafts.fxtf.org/filter-effects/examples/feComponentTransfer.png
.. |Example of feComposite| image:: https://drafts.fxtf.org/filter-effects/examples/feComposite.png
.. |Example feImage — Examples of feImage use| image:: https://drafts.fxtf.org/filter-effects/examples/feImage-01.png
.. |Example of feMorphology| image:: https://drafts.fxtf.org/filter-effects/examples/feMorphology.png
.. |Example of feTurbulence| image:: https://drafts.fxtf.org/filter-effects/examples/feTurbulence.png
.. |Angles which azimuth and elevation represent| image:: https://drafts.fxtf.org/filter-effects/examples/azimuth-elevation.svg
   :width: 480px
   :height: 360px
.. |image1| image:: data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Ym94PSIwIDAgMTAwIDEwMCIgd2lkdGg9IjI0Ij48ZyBzdHJva2U9ImJsdWUiIHN0cm9rZS13aWR0aD0iNiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iYmx1ZSIgc3Ryb2tlPSJub25lIiBkPSJNIDUgOTUgTCA1IDM1IEwgNTAgMTAgTCA1MCA5NSIgLz48cGF0aCBkPSJNIDEgMzcgTCA1NCA4IiAvPjxwYXRoIGZpbGw9ImJsdWUiIHN0cm9rZT0ibm9uZSIgZD0iTSAxIDQwIHYgLTYgbCA2MCAtMzIgdiA2IHoiIC8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3OSIgcj0iMTUiPjwvY2lyY2xlPjxjaXJjbGUgZmlsbD0iYmx1ZSIgc3Ryb2tlPSJub25lIiBjeD0iNzUiIGN5PSI3OSIgcj0iNCI+PC9jaXJjbGU+PHBhdGggZD0iTSA3NSA3OSBMIDY1IDQ5IEwgNTUgNDkiIC8+PHBhdGggZD0iTSA2NyA1NSBMIDQ4IDY5IiAvPjwvZz48L3N2Zz4=
   :target: /bikeshed/filter-effects/
