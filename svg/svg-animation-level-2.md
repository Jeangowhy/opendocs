#!/usr/bin/env bash
curl -s https://svgwg.org/specs/animations/ | /od/html2md.ts >>$0

exit
===========================================================================

SVG Animations Level 2
======================

W3C Editor’s Draft _08 March 2023_
----------------------------------

This version: https://svgwg.org/specs/animations/

Latest version:

GitHub repository: https://github.com/w3c/svgwg/tree/master/specs/animations

Feedback:

[www-svg@w3.org](mailto:www-svg@w3.org) with subject line “`[svg-animation] … _message topic_ …`” ([archive][www-svg])

Editor:

Brian Birtles, Mozilla<[bbirtles@mozilla.com](mailto:bbirtles@mozilla.com)\>

[Copyright][Copyright] © 2023 [W3C][w3c]® ([MIT][www.csail.mit.edu], [ERCIM][www.ercim.eu], [Keio][www.keio.ac.jp], [Beihang][ev.buaa.edu.cn]). W3C [liability][Legal_Disclaimer], [trademark][W3C_Trademarks] and [document use][copyright-documents] rules apply.

* * *

Abstract
--------

This specification defines SVG Animations, a set of features based on SMIL for declaratively animating SVG content.

Status of This Document
-----------------------

_This section describes the status of this document at the time of its publication. Other documents may supersede this document. A list of current W3C publications and the latest revision of this technical report can be found in the [W3C technical reports index][W3CTR] at http://www.w3.org/TR/_.

This document is the 08 March 2023 **Editor’s Draft** of SVG Animation. The purpose of this specification is to separate out SVG's animation features into a separate document.

Comments on this Editor’s Draft are welcome. Comments can be sent to [www-svg@w3.org](mailto:www-svg@w3.org), the public email list for issues related to vector graphics on the Web. This list is [archived][www-svg] and senders must agree to have their message publicly archived from their first posting. To subscribe send an email to [www-svg-request@w3.org](mailto:www-svg-request@w3.org) with the word `subscribe` in the subject line.

This document has been produced by the [W3C SVG Working Group][SVGWG] as part of the [Graphics Activity][Activity] within the [W3C Interaction Domain][Interaction]. The goals of the W3C SVG Working Group are discussed in the [W3C SVG Charter][svg-2019.html]. The W3C SVG Working Group maintains a public Web page, [http://www.w3.org/Graphics/SVG/][Graphics-SVG], that contains further background information. The authors of this document are the SVG Working Group participants.

This document was produced by a group operating under the [5 February 2004 W3C Patent Policy][Patent-Policy-20040205]. W3C maintains a [public list of any patent disclosures][pp-impl-1948-status] made in connection with the deliverables of the group; that page also includes instructions for disclosing a patent. An individual who has actual knowledge of a patent which the individual believes contains [Essential Claim(s)][def-essential] must disclose the information in accordance with [section 6 of the W3C Patent Policy][sec-Disclosure].

Publication as a Editor’s Draft does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.

A list of current W3C Recommendations and other technical documents can be found at [http://www.w3.org/TR/][W3CTR]. W3C publications may be updated, replaced, or obsoleted by other documents at any time.

This document is governed by the [1 August 2014 W3C Process Document][Process-20140801].

Table of Contents
-----------------

1.  [1. Introduction]
    1.  [1.1. Module interactions]
2.  [2. Animation elements]
    1.  [2.1. Overview]
    2.  [2.2. Definitions]
    3.  [2.3. Relationship to SMIL Animation]
    4.  [2.4. Animation elements example]
    5.  [2.5. Attributes to identify the target element for an animation]
    6.  [2.6. Attributes to identify the target attribute or property for an animation]
    7.  [2.7. Animation with namespaces]
    8.  [2.8. Paced animation and complex types]
    9.  [2.9. Attributes to control the timing of the animation]
        1.  [2.9.1. Clock values]
    10.  [2.10. Attributes that define animation values over time]
    11.  [2.11. Attributes that control whether animations are additive]
    12.  [2.12. Inheritance]
    13.  [2.13. The ‘animate’ element]
    14.  [2.14. The ‘set’ element]
    15.  [2.15. The ‘discard’ element]
    16.  [2.16. The ‘animateMotion’ element]
    17.  [2.17. The ‘animateTransform’ element]
    18.  [2.18. Elements, attributes and properties that can be animated]
    19.  [2.19. Implicit ARIA Semantics]
3.  [3. Animation using the SVG DOM]
4.  [4. Extensions to SVG 2]
    1.  [4.1. Extensions to the ‘svg’ element]
    2.  [4.2. Extensions to conditional processing elements]
5.  [5. IDL]
    1.  [5.1. Interface TimeEvent]
    2.  [5.2. Interface SVGAnimationElement]
    3.  [5.3. Interface SVGAnimateElement]
    4.  [5.4. Interface SVGSetElement]
    5.  [5.5. Interface SVGAnimateMotionElement]
    6.  [5.6. Interface SVGMPathElement]
    7.  [5.7. Interface SVGAnimateTransformElement]
    8.  [5.8. Interface SVGDiscardElement]
    9.  [5.9. Extensions to interface SVGSVGElement]
6.  [6. References]
    1.  [6.1. Normative references]
    2.  [6.2. Non-normative references]
7.  [7. Changes since SVG 1.1 Second Edition]

/1. [Introduction][intro] 
--------------------------

_This section is non-normative._

SVG supports the ability to change vector graphics over time. SVG content can be animated in the following ways:

*   Using SVG's [animation elements]. SVG document fragments can describe time-based modifications to the document's elements. Using the various animation elements, authors can define motion paths, or interpolate the element's attributes and style properties. These effects can be chained together or triggered in response to other events in the document.
*   Using [CSS Animations][WD-css-animations-1-20120403] [CSSANIMATIONS]. A CSS module that describes a way for authors to animate the values of CSS properties over time, using keyframes. The behavior of these keyframe animations can be controlled by specifying their duration, number of repeats, and repeating behavior.
*   Using [CSS Transitions][WD-css-transitions-1-20120403] [CSS3TRANSITIONS]. A CSS module that allows changes to values of CSS properties to occur smoothly over a specified duration.
*   Using the [SVG DOM][svgdom]. The SVG DOM is defined based on the DOM4 specification [DOM4]. Every attribute and style sheet setting is accessible to scripting, and SVG offers a set of additional DOM interfaces to support efficient animation via scripting. (See [example] below.)

### 1.1. [Module interactions][placement] 

This module extends definitions in SVG 2[SVG2]

/2. [Animation elements][AnimationElements] 
--------------------------------------------

### 2.1. [Overview][AnimationElementsIntro] 

SVG's animation elements were developed in collaboration with the W3C Synchronized Multimedia (SYMM) Working Group, developers of the [Synchronized Multimedia Integration Language (SMIL) 3.0 Specification][REC-SMIL3-20081201] [SMIL].

The SYMM Working Group, in collaboration with the SVG Working Group, has authored the [SMIL Animation specification][REC-smil-animation-20010904] [SMILANIM], which represents a general-purpose XML animation feature set. SVG incorporates the animation features defined in the SMIL Animation specification and provides some SVG-specific extensions.

For an introduction to the approach and features available in any language that supports SMIL Animation, see [SMIL Animation overview][AnimationFramework] and [SMIL Animation animation model][AnimationModel] ([SMILANIM], sections 2 and 3). For the list of animation features which go beyond SMIL Animation, see [SVG extensions to SMIL Animation].

### 2.2. [Definitions][AnimationDefinitions] 

animation element

An animation element is an element that can be used to animate the attribute or property value of another element. The following elements are animation elements: ‘[animate]’, ‘[animateMotion]’, ‘[animateTransform]’, ‘[discard]’ and ‘[set]’.

animation event attribute

An animation event attribute is an [event attribute][TermEventAttribute] that specifies script to run for a particular animation-related event. See [Animation event attributes][AnimationEvents]. The animation event attributes are ‘[onbegin][OnBeginEventAttribute]’, ‘[onend][OnEndEventAttribute]’ and ‘[onrepeat][OnRepeatEventAttribute]’.

### 2.3. [Relationship to SMIL Animation][RelationshipToSMILAnimation] 

SVG is a host language in terms of SMIL Animation and therefore introduces additional constraints and features as permitted by that specification. Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for SVG's animation elements and attributes is the [SMIL Animation][REC-smil-animation-20010904] specification [SMILANIM].

SVG supports the following three animation elements which are defined in the SMIL Animation specification:

*   ‘[animate]’

    allows attributes and properties to be assigned different values over time

*   ‘[set]’

    a convenient shorthand for ‘[animate]’, which produces a discrete change to an animated attribute or property. It is most commonly used with values which do not support linear interpolation, such as the [visibility][VisibilityControl] property

*   ‘[animateMotion]’

    moves an element along a motion path

Additionally, SVG includes the following compatible extensions to SMIL Animation:

*   ‘[animateTransform]’

    modifies one of SVG's transformation values over time, such as the [transform][TransformProperty] property or the ‘[patternTransform][PatternElementPatternTransformAttribute]’ attribute.

*   ‘[path]’ attribute

    SVG allows any feature from SVG's [path data][PathData] syntax to be specified in a ‘[path]’ attribute to the ‘[animateMotion]’ element (SMIL Animation only allows a subset of SVG's path data syntax within a ‘[path]’ attribute)

*   ‘[mpath]’ element

    SVG allows an ‘[animateMotion]’ element to contain a child ‘[mpath]’ element which references an SVG ‘[path][PathElement]’ element or [shape][TermShapeElement] element as the definition of the motion path

*   ‘[keyPoints]’ attribute

    SVG adds a ‘[keyPoints]’ attribute to the ‘[animateMotion]’ to provide precise control of the velocity of motion path animations

*   ‘[rotate]’ attribute

    SVG adds a ‘[rotate]’ attribute to the ‘[animateMotion]’ to control whether an object is automatically rotated so that its x-axis points in the same direction (or opposite direction) as the directional tangent vector of the motion path

For compatibility with other aspects of the language, SVG uses [URL references][TermURLReference] via an ‘[href]’ attribute to identify the elements which are to be targets of the animations, as allowed in SMIL 3.0.

SMIL Animation requires that the host language define the meaning for _document begin_ and the _document end_. Since an ‘[svg][SVGElement]’ is sometimes the root of the XML document tree and other times can be a component of a parent XML grammar, the document begin for a given [SVG document fragment][TermSVGDocumentFragment] is defined to be the exact time at which the ‘[svg][SVGElement]’ element's [load event][LoadEvent] is triggered. The document end of an SVG document fragment is the point at which the document fragment has been released and is no longer being processed by the user agent. However, nested ‘[svg][SVGElement]’ elements within an SVG document do not constitute document fragments in this sense, and do not define a separate document begin; all times within the nested SVG fragment are relative to the document time defined for the root ‘[svg][SVGElement]’ element.

For SVG, the term presentation time indicates the position in the timeline relative to the document begin of a given document fragment.

### 2.4. [Animation elements example][AnimationElementsExample] 

Example anim01 below demonstrates each of SVG's four animation elements.

```xml
<?xml version="1.0" standalone="no"?>
<svg width="8cm" height="3cm"  viewBox="0 0 800 300"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Example anim01 - demonstrate animation elements</desc>
  <rect x="1" y="1" width="798" height="298"
        fill="none" stroke="blue" stroke-width="2" />
  <!-- The following illustrates the use of the 'animate' element
        to animate a rectangles x, y, and width attributes so that
        the rectangle grows to ultimately fill the viewport. -->
  <rect id="RectElement" x="300" y="100" width="300" height="100"
        fill="rgb(255,255,0)"  >
    <animate attributeName="x" begin="0s" dur="9s"
             fill="freeze" from="300" to="0" />
    <animate attributeName="y" begin="0s" dur="9s"
             fill="freeze" from="100" to="0" />
    <animate attributeName="width" begin="0s" dur="9s"
             fill="freeze" from="300" to="800" />
    <animate attributeName="height" begin="0s" dur="9s"
             fill="freeze" from="100" to="300" />
  </rect>
  <!-- Set up a new user coordinate system so that
        the text string's origin is at (0,0), allowing
        rotation and scale relative to the new origin -->
  <g transform="translate(100,100)" >
    <!-- The following illustrates the use of the 'set', 'animateMotion',
         'animate' and 'animateTransform' elements. The 'text' element
         below starts off hidden (i.e., invisible). At 3 seconds, it:
           \* becomes visible
           \* continuously moves diagonally across the viewport
           \* changes color from blue to dark red
           \* rotates from -30 to zero degrees
           \* scales by a factor of three. -->
    <text id="TextElement" x="0" y="0"
          font-family="Verdana" font-size="35.27" visibility="hidden"  >
      It's alive!
      <set attributeName="visibility" to="visible"
           begin="3s" dur="6s" fill="freeze" />
      <animateMotion path="M 0 0 L 100 100"
           begin="3s" dur="6s" fill="freeze" />
      <animate attributeName="fill"
           from="rgb(0,0,255)" to="rgb(128,0,0)"
           begin="3s" dur="6s" fill="freeze" />
      <animateTransform attributeName="transform"
           type="rotate" from="-30" to="0"
           begin="3s" dur="6s" fill="freeze" />
      <animateTransform attributeName="transform"
           type="scale" from="1" to="3" additive="sum"
           begin="3s" dur="6s" fill="freeze" />
    </text>
  </g>
</svg>
```

Example anim01

![Example anim01 - at zero seconds][anim01a.png] At zero seconds

 

![Example anim01 - at three seconds][anim01b.png] At three seconds

![Example anim01 - at six seconds][anim01c.png] At six seconds

 

![Example anim01 - at nine seconds][anim01d.png] At nine seconds

[View this example as SVG (SVG-enabled browsers only)][anim01.svg]

The sections below describe the various animation attributes and elements.

### 2.5. [Attributes to identify the target element for an animation][TargetElement] 

The following attribute is common to all animation elements and identifies the target element for the animation.

_Attribute definitions:_

Name : href

Value : URL[URL][attribute-url]

Initial value : (none)

Animatable : no

A [URL reference][TermURLReference] to the element which is the target of this animation element and which therefore will be modified over time.

The URL must point to exactly one target element which is capable of being the target of the given animation element. If the URL points to multiple target elements, if the given target element is not capable of being a target of the given animation element, or if the given target element is not part of the current document, then the animation element will not affect any target element. However, the animation element will still operate normally with regard to its timing properties. Specifically, [TimeEvent]s are dispatched and the animation element can be used as [syncbase] in an identical fashion to when the URL refers to a valid target element.

If the ‘[href]’ attribute or the deprecated ‘[xlink:href][XLinkHrefAttribute]’ attribute is not provided, then the target element will be the immediate parent element of the current animation element. The behavior when both ‘[href]’ and ‘[xlink:href][XLinkHrefAttribute]’ are specified is defined by the common handling for [deprecated XLink attributes][XLinkRefAttrs].

Refer to the descriptions of the individual animation elements for any restrictions on what types of elements can be targets of particular types of animations.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: Specifying the animation target][SpecifyingAnimationTarget] ([SMILANIM], section 3.1).

[issue9] Reference the deprecated ‘[xlink:href][XLinkHrefAttribute]’ attribute and its handling as defined in [SVG 2][XLinkRefAttrs].

### 2.6. [Attributes to identify the target attribute or property for an animation][TargetAttributes] 

The following attribute identifies the target attribute or property for the given [target element] whose value changes over time.

_Attribute definitions:_

Name : attributeName

Value : [Name][NT-Name] [EBNF][syntax]

Initial value : (none)

Animatable : no

Specifies the name of the target property or attribute.

Unlike [SMIL Animation][REC-smil-animation-20010904], the attributeType attribute is not supported by SVG. SVG's animation elements follow the behavior defined for the auto value of attributeType. That is, when determining if ‘[attributeName]’ corresponds to an attribute name or a CSS property name, the implementation must first search through the list of CSS properties for a matching property name. If no matching property is found, the implementation must search for a matching attribute on the target element.

When referencing an attribute, an XMLNS prefix may be used to indicate the XML namespace for the attribute. The prefix will be interpreted in the scope of the current (i.e., the referencing) animation element. Otherwise the implementation must use the default XML namespace for the target element.

Note that, as a result of the behavior, it is not possible to animate the list of coordinates specified by the ‘[x][TextElementXAttribute]’ and ‘[y][TextElementYAttribute]’ attributes on ‘[text][TextElement]’ and ‘[tspan][TextElement]’ elements. This is because ‘x’ and ‘y’ are also CSS properties where they only accept a single length as a value.

Due to the complex mapping between characters and glyphs, using the list-based syntax for ‘[x][TextElementXAttribute]’ and ‘[y][TextElementYAttribute]’ to specify glyph positions does not scale well to anything beyond very simple Latin text and its use is discouraged. Authors who nevertheless wish to animate this list of coordinates may be able to achieve a comparable effect using the ‘[dx][TextElementDXAttribute]’ and ‘[dy][TextElementDYAttribute]’ attributes instead since these names to not overlap with CSS properties.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: Specifying the animation target][SpecifyingAnimationTarget] ([SMILANIM], section 3.1).

### 2.7. [Animation with namespaces][Animation.nsexample] 

Example animns01 below shows a namespace prefix being resolved to a namespace name in the scope of the referencing element, and that namespace name being used (regardless of the prefix which happens to be used in the target scope) to identify the attribute being animated.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <title>Demonstration of the resolution of namespaces for animation</title>
  <!-- at the point of definition, the QName a:href resolves to the namespace
       name "http://www.w3.org/1999/xlink" and the local name "href" -->
  <g xmlns:a="http://www.w3.org/1999/xlink">
    <animate attributeName="a:href" href="#foo" dur="2s" to="two.png" fill="freeze"/>
  </g>
  <!-- at the point of use, the namespace name "http://www.w3.org/1999/xlink"
       happens to be bound to the namespace prefix 'b' -->
  <g xmlns:b="http://www.w3.org/1999/xlink">
    <image id="foo" b:href="one.png" x="35" y="50" width="410" height="160"/>
  </g>
</svg>
```

[View this example as SVG (SVG-enabled browsers only)][animns01.svg]

### 2.8. [Paced animation and complex types][complexDistances] 

Paced animations assume a notion of distance between the various animation values defined by the ‘[to]’, ‘[from]’, ‘[by]’ and ‘[values]’ attributes. Distance is defined only for scalar types (such as [<length>][lengths]), colors and the subset of transformation types that are supported by ‘[animateTransform]’. In the list of distance functions below, Va and Vb represent the two values the distance between which is being calculated.

Since paced animation is intended to produce an animation with an even pace of change, it does not make sense to define distance functions for all data types. Distance can be usefully defined for types whose values are n\-dimensional vectors (including scalars, which are 1-dimensional vectors). For example, a [<length>][lengths] value is a scalar value, and a [<color>][colors] value is a 3-dimensional vector. Thus attributes of these types can have paced animation applied to them. On the other hand, a [<dasharray>][DataTypeDasharray] (as used by [‘stroke-dasharray’][StrokeDasharrayProperty]) is a list of scalars (1-dimensional vectors), and [<points>][DataTypePoints] (as used by the [‘points’][PolygonElementPointsAttribute] attribute on a [‘polygon’][PolygonElement]) is a list of 2-dimensional vectors. Therefore, these types do not have a distance function defined and cannot have paced animation applied to them.

The distance functions for types that support paced animation are as follows:

*   [<integer>][integers], [<length>][lengths] and [<number>][numbers]

        distance(Va, Vb) = |Va − Vb|

    Examples: animating the ‘[x][TextElementXAttribute]’ attribute on a ‘[text][TextElement]’, or the [stroke-width][StrokeWidthProperty] property on a ‘[circle][CircleElement]’.

*   [<color>][colors]

        distance(Va, Vb) = sqrt((Va.red − Vb.red)2 + (Va.green − Vb.green)2 + (Va.blue − Vb.blue)2), where:

    Vi.red is the red component of the Vi color value,

    Vi.green is the green component of the Vi color value, and

    Vi.blue is the blue component of the Vi color value.

    Each of the color component values is usually in the range [0, 1\], where 0 represents none of that color component, and 1 represents the maximum amount of that color component, in the sRGB gamut [SRGB]. Since [<color>][colors] values may specify colors outside of the sRGB gamut, these component values may lie outside the range [0, 1\].

    Example: animating the [fill][FillProperty] property on an ‘[ellipse][EllipseElement]’.

*   Transform definitions of type 'translate'

        distance(Va, Vb) = sqrt((Va.tx − Vb.tx)2 + (Va.ty − Vb.ty)2), where:

    Vi.tx is the x component of the Vi translation transform value, and

    Vi.ty is the y component of the Vi translation transform value.

    Example (for all transform definition types): animating the [transform][TransformProperty] attribute on a ‘[g][GElement]’ using ‘[animateTransform]’.

*   Transform definitions of type 'scale'

        distance(Va, Vb) = sqrt((Va.sx − Vb.sx)2 + (Va.sy − Vb.sy)2), where:

    Vi.sx is the x component of the Vi scale transform value, and

    Vi.sy is the y component of the Vi scale transform value.

    Note that, as when specifying scale transformations in a [<transform-list>][typedef-transform-list], if the y component of the scale is omitted it is implicitly equal to the x component.

*   Transform definitions of type 'rotate', 'skewX' and 'skewY'

        distance(Va, Vb) = sqrt((Va.angle − Vb.angle)2), where:

    Vi.angle is the angle component of the Vi rotation or skew transform value.

    Since the distance function for rotations is not in terms of the rotation center point components, a paced animation that changes the rotation center point may not appear to have a paced movement when the animation is applied.

Distance functions for all other data types are not defined. If calcMode="paced" is used on an animation of an attribute or property whose type is not one of those listed above, the animation effect is undefined. [SVG user agents][TermUserAgent] may choose to perform the animation as if calcMode="linear", but this is not required. Authors are recommended not to specify paced animation on types not listed above.

### 2.9. [Attributes to control the timing of the animation][TimingAttributes] 

The following attributes are the animation timing attributes. They are common to all animation elements and control the timing of the animation, including what causes the animation to start and end, whether the animation runs repeatedly, and whether to retain the end state the animation once the animation ends.

In the syntax specifications that follow, optional white space is indicated as "S", defined as follows:

S ::= (#x20 | #x9 | #xD | #xA)\*

[issue2] Align with whitespace used in CSS and SVG, adding #xC to S.

_Attribute definitions:_

Name : begin

Value : [begin-value-list]

Initial value : 0s

Animatable : no

[issue3] Attribute syntax needs fixing.

Defines when the element should begin (i.e. become active).

The attribute value is a semicolon separated list of values.

begin-value-list ::= [begin-value] (S? ";" S? begin-value-list )?

A semicolon separated list of begin values. The interpretation of a list of begin times is detailed in SMIL Animation's section on ["Evaluation of begin and end time lists"][Timing-EvaluationOfBeginEndTimeLists].

begin-value ::= ( [offset-value] | [syncbase-value] | [event-value] | [repeat-value] | [accessKey-value] | [wallclock-sync-value] | ["indefinite"] )

Describes the element begin.

offset-value ::= ( S? "+" | "-" S? )? ( [Clock-value] )

For SMIL Animation, this describes the element begin as an offset from an implicit syncbase. For SVG, the implicit syncbase begin is defined to be relative to the document begin. Negative begin times are entirely valid and easy to compute, as long as there is a resolved document begin time.

syncbase-value ::= ( Id-value "." ( "begin" | "end" ) ) ( S? ("+"|"-") S? [Clock-value] )?

Describes a syncbase and an optional offset from that syncbase. The element begin is defined relative to the begin or active end of another animation. A syncbase consists of an ID reference to another animation element followed by either `begin` or `end` to identify whether to synchronize with the beginning or active end of the referenced animation element.

event-value ::= ( Id-value "." )? ( event-ref ) ( S? ("+"|"-") S? [Clock-value] )?

Describes an event and an optional offset that determine the element begin. The animation begin is defined relative to the time that the event is raised. The list of event-symbols available for a given event-base element is the list of event attributes available for the given element as defined in the [Scripting and Interactivity][interact] chapter, with the one difference that the leading 'on' is removed from the event name (i.e., the animation event name is 'click', not 'onclick'). A list of all events supported by SVG can be found in [Complete list of supported events][SVGEvents]. Details of event-based timing are described in [SMIL Animation: Unifying Event-based and Scheduled Timing][Unifying].

repeat-value ::= ( Id-value "." )? "repeat(" integer ")" ( S? ("+"|"-") S? [Clock-value] )?

Describes a qualified repeat event. The element begin is defined relative to the time that the repeat event is raised with the specified iteration value.

accessKey-value ::= "accessKey(" character ")" ( S? ("+"|"-") S? [Clock-value] )?

Describes an accessKey that determines the element begin. The element begin is defined relative to the time that the accessKey character is input by the user.

wallclock-sync-value ::= "wallclock(" wallclock-value ")"

Describes the element begin as a real-world clock time. The wallclock time syntax is based upon syntax defined in Representation of dates and times [ISO8601].

"indefinite"

The begin of the animation will be determined by a "beginElement()" method call or a hyperlink targeted to the element.

The animation DOM methods are described in [IDL].

Hyperlink-based timing is described in [SMIL Animation: Hyperlinks and timing][HyperlinkSemantics].

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'begin' attribute][SpecifyingAnimationTarget] ([SMILANIM], section 3.2.1).

Name : dur

Value : [Clock-value] | "media" | "indefinite"

Initial value : indefinite

Animatable : no


[issue4] Attribute syntax needs fixing.

Specifies the simple duration.

The attribute value can be one of the following:

[Clock-value]

Specifies the length of the simple duration in [presentation time]. Value must be greater than 0.

"media"

Specifies the simple duration as the intrinsic media duration. This is only valid for elements that define media.  
(For SVG's [animation elements], if 'media' is specified, the attribute will be ignored.)

"indefinite"

Specifies the simple duration as indefinite.

If the animation does not have a ‘[dur]’ attribute, the simple duration is indefinite. Note that interpolation will not work if the simple duration is indefinite (although this may still be useful for ‘[set]’ elements). Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'dur' attribute][DurAttribute] ([SMILANIM], section 3.2.1).

Name : end

Value : [end-value-list]

Initial value : (none)

Animatable : no


[issue5] Attribute syntax needs fixing.

Defines an end value for the animation that can constrain the active duration. The attribute value is a semicolon separated list of values.

end-value-list ::= [end-value] (S? ";" S? end-value-list )?

A semicolon separated list of end values. The interpretation of a list of end times is detailed below.

end-value ::= ( [offset-value] | [syncbase-value] | [event-value] | [repeat-value] | [accessKey-value] | [wallclock-sync-value] | "indefinite" )

Describes the active end of the animation.

A value of 'indefinite' specifies that the end of the animation will be determined by an [endElement] method call (the animation DOM methods are described in [IDL]).

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'end' attribute][EndActiveAttribute] ([SMILANIM], section 3.3.2).

Name :            min                            max

Value :          [Clock-value] | "media"         [Clock-value] | "media"

Initial value :   0s                             (none)

Animatable :      no                              no



[issue6] Attribute syntax needs fixing.

The ‘[min]’ and ‘[max]’ attributes specify the minimum and maximum value of the active duration, respectively.

The attribute values can be either of the following:

[Clock-value]

Specifies the length of the minimum or maximum value of the active duration, measured in local time.

Value must be greater than 0.

"media"

Specifies the minimum value of the active duration as the intrinsic media duration. This is only valid for elements that define media. (For SVG's [animation elements], if 'media' is specified, the attribute will be ignored.)

The initial value for ‘[min]’ is '0' and there is no initial value for ‘[max]’. In both cases, this does not constrain the active duration at all.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for these attributes is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: The min and max attributes][MinMax] ([SMILANIM], section 3.3.3).

Name : restart

Value : always | whenNotActive | never

Initial value : always

Animatable : no


always

The animation can be restarted at any time. This is the default value.

whenNotActive

The animation can only be restarted when it is not active (i.e. after the active end). Attempts to restart the animation during its active duration are ignored.

never

The element cannot be restarted for the remainder of the current simple duration of the parent time container. (In the case of SVG, since the parent time container is the SVG document fragment, then the animation cannot be restarted for the remainder of the document duration.)

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'restart' attribute][RestartAttribute] ([SMILANIM], section 3.3.7).

Name : repeatCount

Value : [<number>][numbers] | indefinite

Initial value : (none)

Animatable : no


Specifies the number of iterations of the animation function. It can have the following attribute values:

[<number>][numbers]

This is a (base 10) "floating point" numeric value that specifies the number of iterations. It can include partial iterations expressed as fraction values. A fractional value describes a portion of the [simple duration][SpecifyingAnimationFunction]. Values must be greater than 0.

indefinite

The animation is defined to repeat indefinitely (i.e. until the document ends).

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'repeatCount' attribute][RepeatCountAttribute] ([SMILANIM], section 3.3.1).

Name : repeatDur

Value : [Clock-value] | "indefinite"

Initial value : (none)

Animatable : no


[issue7] Attribute syntax needs fixing.

Specifies the total duration for repeat. It can have the following attribute values:

[Clock-value]

Specifies the duration in [presentation time] to repeat the animation function `**f(t)**`.

"indefinite"

The animation is defined to repeat indefinitely (i.e. until the document ends).

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'repeatDur' attribute][RepeatDurAttribute] ([SMILANIM], section 3.3.1).

Name : fill

Value : freeze | remove

Initial value : remove

Animatable : no


This attribute can have the following values:

freeze

The animation effect [F(t)][AnimationModel] is defined to freeze the effect value at the last value of the active duration. The animation effect is "frozen" for the remainder of the document duration (or until the animation is restarted - see [SMIL Animation: Restarting animation][Restart]).

remove

The animation effect is removed (no longer applied) when the active duration of the animation is over. After the active end of the animation,the animation no longer affects the target (unless the animation is restarted - see [SMIL Animation: Restarting animation][Restart]).

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'fill' attribute][FillAttribute] ([SMILANIM], section 3.3.5).

The [SMIL Animation][REC-smil-animation-20010904] specification [SMILANIM] defines the detailed processing rules associated with the above attributes. Except for any SVG-specific rules explicitly mentioned in this specification, the SMIL Animation specification is the normative definition of the processing rules for the above attributes.

#### 2.9.1. [Clock values][ClockValueSyntax] 

    Clock values have the same syntax as in [SMIL Animation][REC-smil-animation-20010904] specification [SMILANIM]. The grammar for clock values is repeated here:

    Clock-val         ::= Full-clock-val | Partial-clock-val
                          | Timecount-val
    Full-clock-val    ::= Hours ":" Minutes ":" Seconds ("." Fraction)?
    Partial-clock-val ::= Minutes ":" Seconds ("." Fraction)?
    Timecount-val     ::= Timecount ("." Fraction)? (Metric)?
    Metric            ::= "h" | "min" | "s" | "ms"
    Hours             ::= DIGIT+; any positive number
    Minutes           ::= 2DIGIT; range from 00 to 59
    Seconds           ::= 2DIGIT; range from 00 to 59
    Fraction          ::= DIGIT+
    Timecount         ::= DIGIT+
    2DIGIT            ::= DIGIT DIGIT
    DIGIT             ::= [0-9]

For Timecount values, the default metric suffix is "s" (for seconds). No embedded white space is allowed in clock values, although leading and trailing white space characters will be ignored.

Clock values describe [presentation time].

The following are examples of legal clock values:

*   Full clock values:   `02:30:03`    = 2 hours, 30 minutes and 3 seconds  
      `50:00:10.25` = 50 hours, 10 seconds and 250 milliseconds
*   Partial clock value:   `02:33`   = 2 minutes and 33 seconds  
      `00:10.5` = 10.5 seconds = 10 seconds and 500 milliseconds
*   Timecount values:  
      `3.2h`    = 3.2 hours = 3 hours and 12 minutes  
      `45min`   = 45 minutes  
      `30s`     = 30 seconds  
      `5ms`     = 5 milliseconds  
      `12.467`  = 12 seconds and 467 milliseconds

Fractional values are just (base 10) floating point definitions of seconds. Thus:

  `00.5s`     = 500 milliseconds  
  `00:00.005` = 5 milliseconds

### 2.10. [Attributes that define animation values over time][ValueAttributes] 

The following attributes are the animation value attributes. They are common to elements ‘[animate]’, ‘[animateMotion]’ and ‘[animateTransform]’. These attributes define the values that are assigned to the target attribute or property over time. The attributes below provide control over the relative timing of keyframes and the interpolation method between discrete values.

_Attribute definitions:_

Name : calcMode

Value : discrete | linear | paced | spline

Initial value : (none)

Animatable : no

Specifies the interpolation mode for the animation. This can take any of the following values. The default mode is 'linear', however if the attribute does not support linear interpolation (e.g. for strings), the ‘[calcMode]’ attribute is ignored and discrete interpolation is used.

discrete

This specifies that the animation function will jump from one value to the next without any interpolation.

linear

Simple linear interpolation between values is used to calculate the animation function. Except for ‘[animateMotion]’, this is the default ‘[calcMode]’.

paced

Defines interpolation to produce an even pace of change across the animation. This is only supported for the data types for which there is an appropriate distance function defined, which includes only scalar numeric types plus the types listed in [Paced animation and complex types]. If 'paced' is specified, any ‘[keyTimes]’ or ‘[keySplines]’ will be ignored. For ‘[animateMotion]’, this is the default ‘[calcMode]’. Authors are discouraged from using paced animation on types that do not have a distance function defined, due to its unpredictable behavior in some user agents.

spline

Interpolates from one value in the ‘[values]’ list to the next according to a time function defined by a cubic Bézier spline. The points of the spline are defined in the ‘[keyTimes]’ attribute, and the control points for each interval are defined in the ‘[keySplines]’ attribute.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'calcMode' attribute][CalcModeAttribute] ([SMILANIM], section 3.2.3).

Name : values

Value : (see below)

Initial value : (none)

Animatable : no


The ‘[values]’ attribute specifies a sequence of values to use over the course of the animation.

The attribute is parsed as follows:

1.  Let attribute be the value of the ‘[values]’ attribute.
2.  Let values be a list of strings formed by splitting attribute at each U+003B SEMICOLON character.
3.  Strip any leading and trailing [white space characters][TermWhiteSpaceCharacter] from each value of values.
4.  Remove the final value in values if it is the empty string.
5.  Parse each value in values using the rules for parsing the attribute identified by the ‘[href]’, and ‘[attributeName]’ attributes.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'values' attribute][ValuesAttribute] ([SMILANIM], section 3.2.2).

Name : keyTimes

Value : [<number>][numbers] [; [<number>][numbers] * ;?

Initial value : (none)

Animatable : no


A semicolon-separated list of time values used to control the pacing of the animation. Each time in the list corresponds to a value in the ‘[values]’ attribute list, and defines when the value is used in the animation function.

Each time value in the ‘[keyTimes]’ list is specified as a floating point value between 0 and 1 (inclusive), representing a proportional offset into the simple duration of the animation element.

If the last semicolon separator is followed by either just white space or no more characters, ignore both the separator and the trailing white space.

For animations specified with a ‘[values]’ list, the ‘[keyTimes]’ attribute if specified must have exactly as many values as there are in the ‘[values]’ attribute. For from/to/by animations, the ‘[keyTimes]’ attribute if specified must have two values.

Each successive time value must be greater than or equal to the preceding time value.

The ‘[keyTimes]’ list semantics depends upon the interpolation mode:

*   For linear and spline animation, the first time value in the list must be 0, and the last time value in the list must be 1. The key time associated with each value defines when the value is set; values are interpolated between the key times.
*   For discrete animation, the first time value in the list must be 0. The time associated with each value defines when the value is set; the animation function uses that value until the next time defined in ‘[keyTimes]’.

If the interpolation mode is 'paced', the ‘[keyTimes]’ attribute is ignored.

If there are any errors in the ‘[keyTimes]’ specification (bad values, too many or too few values), the document fragment is in error (see [error processing][ErrorProcessing]).

If the simple duration is indefinite, any ‘[keyTimes]’ specification will be ignored.

Because paced animation interpolation is unspecified for some value types, authors are encouraged to use 'linear' animation interpolation with calculated ‘[keyTimes]’ to achieve particular interpolation behavior for these types.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'keyTimes' attribute][KeyTimesAttribute] ([SMILANIM], section 3.2.3).

Name : keySplines

Value : [<control-point>] [; [<control-point>]\* ;?

Initial value : (none)

Animatable : no

where:

<control-point> = [<number>][numbers] ,? [<number>][numbers] ,? [<number>][numbers] ,? [<number>][numbers]

A set of Bézier control points associated with the ‘[keyTimes]’ list, defining a cubic Bézier function that controls interval pacing. The attribute value is a semicolon-separated list of control point descriptions.

If the last semicolon separator is followed by either just white space or no more characters, ignore both the separator and the trailing white space.

Each control point description is a set of four values: `x1 y1 x2 y2`, describing the Bézier control points for one time segment. Note: [SMIL][adef-keySplines] allows these values to be separated either by commas with optional whitespace, or by whitespace alone. The ‘[keyTimes]’ values that define the associated segment are the Bézier "anchor points", and the ‘[keySplines]’ values are the control points. Thus, there must be one fewer sets of control points than there are ‘[keyTimes]’.

The values must all be in the range 0 to 1.

This attribute is ignored unless the ‘[calcMode]’ is set to 'spline'.

If there are any errors in the ‘[keySplines]’ specification (bad values, too many or too few values), the document fragment is in error (see [error processing][ErrorProcessing]).

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'keySplines' attribute][KeySplinesAttribute] ([SMILANIM], section 3.2.3).

Name : from, to, by

Value : (see below)

Initial value : (none)

Animatable : no


The ‘[from]’ and ‘[to]’ attributes specify the starting and ending value of the animation, while the ‘[by]’ attribute specifies a relative offset value for the animation.

All three attributes must be parsed using the rules for parsing the attribute identified by the ‘[href]’ and ‘[attributeName]’ attributes.

For example, if ‘[href]’ identified a ‘[circle][CircleElement]’ element and ‘[attributeName]’ is 'stroke-width', then the ‘[from]’, ‘[to]’ or ‘[by]’ attribute is parsed as a [<percentage>][percentages] | [<length>][lengths].

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for these attributes is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: Animation function values][FromAttribute] ([SMILANIM], section 3.2.2).

The [SMIL Animation][REC-smil-animation-20010904] specification [SMILANIM] defines the detailed processing rules associated with the above attributes. Except for any SVG-specific rules explicitly mentioned in this specification, the SMIL Animation specification is the normative definition of the processing rules for the above attributes.

The animation values specified in the animation element must be legal values for the specified attribute. Leading and trailing white space, and white space before and after semicolon separators, will be ignored.

All values specified must be legal values for the specified attribute (as defined in the associated namespace). If any values are not legal, the document fragment is in error (see [error processing][ErrorProcessing]).

If a list of values is used, the animation will apply the values in order over the course of the animation. If a list of ‘[values]’ is specified, any ‘[from]’, ‘[to]’ and ‘[by]’ attribute values are ignored.

The processing rules for the variants of _from/by/to_ animations are described in [Animation function values][AnimFuncValues] with the following exception.

In order to provide behavior that is intuitive and consistent between discrete animations with an explicitly specified ‘[from]’ attribute (e.g. "from-to animation") and those where the underlying value is used (e.g. "to animation"), the behavior of discrete to-animation in SVG deviates from the definition in SMIL Animation. As with a discrete from-to animation, a discrete to animation will set the underlying value for the first half of the simple duration (or, if a ‘[keyTimes]’ list is provided, until the simple duration specified by the second value in the ‘[keyTimes]’ list) and the ‘[to]’ value for the remainder of the simple duration.

The following figure illustrates the interpretation of the ‘[keySplines]’ attribute. Each diagram illustrates the effect of ‘[keySplines]’ settings for a single interval (i.e. between the associated pairs of values in the ‘[keyTimes]’ and ‘[values]’ lists.). The horizontal axis can be thought of as the input value for the _unit progress_ of interpolation within the interval - i.e. the pace with which interpolation proceeds along the given interval. The vertical axis is the resulting value for the _unit progress_, yielded by the function that the ‘[keySplines]’ attribute defines. Another way of describing this is that the horizontal axis is the input _unit time_ for the interval, and the vertical axis is the output _unit time_. See also the section [Timing and real-world clock times][TimingAndRealWorldClockTime].

Examples of keySplines

![Example keySplines01 - keySplines of 0 0 1 1 (the default)][keySplines01.svg] keySplines="0 0 1 1" (the default)

![Example keySplines01 - keySplines of .5 0 .5 1][keySplines02.svg] keySplines=".5 0 .5 1"

![Example keySplines01 - keySplines of 0 .75 .25 1][keySplines03.svg] keySplines="0 .75 .25 1"

![Example keySplines01 - keySplines of 1 0 .25 .25][keySplines04.svg]keySplines="1 0 .25 .25"

To illustrate the calculations, consider the simple example:

<animate dur="4s" values="10; 20" keyTimes="0; 1"
     calcMode="spline" **keySplines**\=_{as in table}_ />

Using the ‘[keySplines]’ values for each of the four cases above, the approximate interpolated values as the animation proceeds are:

    keySplines values     

    Value of        Initial   After     After     After    Final 
    ‘keySplines’    value     1s        2s        3s       value
    =============   =======   =======   =======   =======  ======
     0  0  1  1     10.0      12.5      15.0      17.5     20.0
    .5  0 .5  1     10.0      11.0      15.0      19.0     20.0
    0 .75 .25 1     10.0      18.0      19.3      19.8     20.0
    1   0 .25 .25   10.0      10.1      10.6      16.9     20.0

For a formal definition of Bézier spline calculation, see [FOLEY-VANDAM], pp. 488-491.

### 2.11. [Attributes that control whether animations are additive][AdditionAttributes] 

It is frequently useful to define animation as an offset or delta to an attribute's value, rather than as absolute values.

A simple "grow" animation can increase the width of an object by 10 pixels:

```xml
<rect width="20px" ...>
  <animate attributeName="width" from="0px" to="10px" dur="10s"
           additive="sum"/>
</rect>
```

It is frequently useful for repeated animations to build upon the previous results, accumulating with each iteration.

The following example causes the rectangle to continue to grow with each repeat of the animation:

```xml
<rect width="20px" ...>
  <animate attributeName="width" from="0px" to="10px" dur="10s"
           additive="sum" accumulate="sum" repeatCount="5"/>
</rect>
```

At the end of the first repetition, the rectangle has a width of 30 pixels. At the end of the second repetition, the rectangle has a width of 40 pixels. At the end of the fifth repetition, the rectangle has a width of 70 pixels.

For more information about additive animations, see [SMIL Animation: Additive animation][AdditiveAnim]. For more information on cumulative animations, see [SMIL Animation: Controlling behavior of repeating animation - Cumulative animation][Accumulate].

The following attributes are the animation addition attributes, which are common to elements ‘[animate]’, ‘[animateMotion]’ and ‘[animateTransform]’.

_Attribute definitions:_

Name : additive

Value : replace | sum

Initial value : replace

Animatable : no


Controls whether or not the animation is additive.

replace

Specifies that the animation will override the underlying value of the attribute and other lower priority animations. This is the default, however the behavior is also affected by the animation value attributes ‘[by]’ and ‘[to]’, as described in [SMIL Animation: How from, to and by attributes affect additive behavior][FromToByAndAdditive].

sum

Specifies that the animation will add to the underlying value of the attribute and other lower priority animations.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'additive' attribute][AdditiveAttribute] ([SMILANIM], section 3.3.6).

Name : accumulate

Value : none | sum

Initial value : none

Animatable : no

Controls whether or not the animation is cumulative.

none

Specifies that repeat iterations are not cumulative. This is the default.

sum

Specifies that each repeat iteration after the first builds upon the last value of the previous iteration.

This attribute is ignored if the target attribute value does not support addition, or if the animation element does not repeat.

Cumulative animation is not defined for "_to animation_".

This attribute will be ignored if the animation function is specified with only the ‘[to]’ attribute.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this attribute is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'accumulate' attribute][AccumulateAttribute] ([SMILANIM], section 3.3.1).

### 2.12. [Inheritance][Inheritance] 

SVG allows both attributes and properties to be animated. If a given attribute or property is inheritable by descendants, then animations on a parent element such as a ‘[g][GElement]’ element has the effect of propagating the attribute or property animation values to descendant elements as the animation proceeds; thus, descendant elements can inherit animated attributes and properties from their ancestors.

### 2.13. [The ‘animate’ element][AnimateElement] 

The ‘[animate]’ element is used to animate a single attribute or property over time.

This example makes a rectangle repeatedly fade away over 5 seconds:

```xml
<rect>
  <animate attributeName="opacity"
         from="1" to="0" dur="5s" repeatCount="indefinite" />
</rect>
```

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this element is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'animate' element][animateElement] ([SMILANIM], section 4.1).

‘animate’

Categories:

[Animation element]

Content model:

Any number of the following elements, in any order:

*   [descriptive elements][TermDescriptiveElement] — ‘[desc][DescElement]’, ‘[title][TitleElement]’, ‘[metadata][MetadataElement]’

[script][ScriptElement]

Attributes:

*   [animation addition attributes] — ‘[additive]’, ‘[accumulate]’
*   [animation event attributes] — ‘[onbegin][OnBeginEventAttribute]’, ‘[onend][OnEndEventAttribute]’, ‘[onrepeat][OnRepeatEventAttribute]’
*   [animation target element attributes] — ‘[href]’
*   [animation attribute target attributes] — ‘[attributeName]’
*   [animation timing attributes] — ‘[begin]’, ‘[dur]’, ‘[end]’, ‘[min]’, ‘[max]’, ‘[restart]’, ‘[repeatCount]’, ‘[repeatDur]’, ‘[fill]’
*   [animation value attributes] — ‘[calcMode]’, ‘[values]’, ‘[keyTimes]’, ‘[keySplines]’, ‘[from]’, ‘[to]’, ‘[by]’
*   [conditional processing attributes][TermConditionalProcessingAttribute] — ‘[requiredExtensions][RequiredExtensionsAttribute]’, ‘[systemLanguage][SystemLanguageAttribute]’
*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [global event attributes][globaleventhandlers] — ‘[oncancel][EventAttributes]’, ‘[oncanplay][EventAttributes]’, ‘[oncanplaythrough][EventAttributes]’, ‘[onchange][EventAttributes]’, ‘[onclick][EventAttributes]’, ‘[onclose][EventAttributes]’, ‘[oncuechange][EventAttributes]’, ‘[ondblclick][EventAttributes]’, ‘[ondrag][EventAttributes]’, ‘[ondragend][EventAttributes]’, ‘[ondragenter][EventAttributes]’, ‘[ondragexit][EventAttributes]’, ‘[ondragleave][EventAttributes]’, ‘[ondragover][EventAttributes]’, ‘[ondragstart][EventAttributes]’, ‘[ondrop][EventAttributes]’, ‘[ondurationchange][EventAttributes]’, ‘[onemptied][EventAttributes]’, ‘[onended][EventAttributes]’, ‘[onerror][EventAttributes]’, ‘[onfocus][EventAttributes]’, ‘[oninput][EventAttributes]’, ‘[oninvalid][EventAttributes]’, ‘[onkeydown][EventAttributes]’, ‘[onkeypress][EventAttributes]’, ‘[onkeyup][EventAttributes]’, ‘[onload][EventAttributes]’, ‘[onloadeddata][EventAttributes]’, ‘[onloadedmetadata][EventAttributes]’, ‘[onloadstart][EventAttributes]’, ‘[onmousedown][EventAttributes]’, ‘[onmouseenter][EventAttributes]’, ‘[onmouseleave][EventAttributes]’, ‘[onmousemove][EventAttributes]’, ‘[onmouseout][EventAttributes]’, ‘[onmouseover][EventAttributes]’, ‘[onmouseup][EventAttributes]’, ‘[onpause][EventAttributes]’, ‘[onplay][EventAttributes]’, ‘[onplaying][EventAttributes]’, ‘[onprogress][EventAttributes]’, ‘[onratechange][EventAttributes]’, ‘[onreset][EventAttributes]’, ‘[onresize][EventAttributes]’, ‘[onscroll][EventAttributes]’, ‘[onseeked][EventAttributes]’, ‘[onseeking][EventAttributes]’, ‘[onselect][EventAttributes]’, ‘[onshow][EventAttributes]’, ‘[onstalled][EventAttributes]’, ‘[onsubmit][EventAttributes]’, ‘[onsuspend][EventAttributes]’, ‘[ontimeupdate][EventAttributes]’, ‘[ontoggle][EventAttributes]’, ‘[onvolumechange][EventAttributes]’, ‘[onwaiting][EventAttributes]’, ‘[onwheel][EventAttributes]’
*   [document element event attributes][documentandelementeventhandlers] — ‘[oncopy][EventAttributes]’, ‘[oncut][EventAttributes]’, ‘[onpaste][EventAttributes]’
*   [presentation attributes][TermPresentationAttribute] —

DOM Interfaces:

*   [SVGAnimateElement]

The [color-interpolation][ColorInterpolationProperty] property applies to color interpolations that result from animations using the ‘[animate]’ element.

For a list of attributes and properties that can be animated using the ‘[animate]’ element, see [Elements, attributes and properties that can be animated].

### 2.14. [The ‘set’ element][SetElement] 

The ‘[set]’ element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The ‘[set]’ element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this element is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'set' element][setElement] ([SMILANIM], section 4.2).

‘set’

Categories:

[Animation element]

Content model:

Any number of the following elements, in any order:

*   [descriptive elements][TermDescriptiveElement] — ‘[desc][DescElement]’, ‘[title][TitleElement]’, ‘[metadata][MetadataElement]’

[script][ScriptElement]

Attributes:

*   [animation event attributes] — ‘[onbegin][OnBeginEventAttribute]’, ‘[onend][OnEndEventAttribute]’, ‘[onrepeat][OnRepeatEventAttribute]’
*   [animation target element attributes] — ‘[href]’
*   [animation attribute target attributes] — ‘[attributeName]’
*   [animation timing attributes] — ‘[begin]’, ‘[dur]’, ‘[end]’, ‘[min]’, ‘[max]’, ‘[restart]’, ‘[repeatCount]’, ‘[repeatDur]’, ‘[fill]’
*   [conditional processing attributes][TermConditionalProcessingAttribute] — ‘[requiredExtensions][RequiredExtensionsAttribute]’, ‘[systemLanguage][SystemLanguageAttribute]’
*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [global event attributes][globaleventhandlers] — ‘[oncancel][EventAttributes]’, ‘[oncanplay][EventAttributes]’, ‘[oncanplaythrough][EventAttributes]’, ‘[onchange][EventAttributes]’, ‘[onclick][EventAttributes]’, ‘[onclose][EventAttributes]’, ‘[oncuechange][EventAttributes]’, ‘[ondblclick][EventAttributes]’, ‘[ondrag][EventAttributes]’, ‘[ondragend][EventAttributes]’, ‘[ondragenter][EventAttributes]’, ‘[ondragexit][EventAttributes]’, ‘[ondragleave][EventAttributes]’, ‘[ondragover][EventAttributes]’, ‘[ondragstart][EventAttributes]’, ‘[ondrop][EventAttributes]’, ‘[ondurationchange][EventAttributes]’, ‘[onemptied][EventAttributes]’, ‘[onended][EventAttributes]’, ‘[onerror][EventAttributes]’, ‘[onfocus][EventAttributes]’, ‘[oninput][EventAttributes]’, ‘[oninvalid][EventAttributes]’, ‘[onkeydown][EventAttributes]’, ‘[onkeypress][EventAttributes]’, ‘[onkeyup][EventAttributes]’, ‘[onload][EventAttributes]’, ‘[onloadeddata][EventAttributes]’, ‘[onloadedmetadata][EventAttributes]’, ‘[onloadstart][EventAttributes]’, ‘[onmousedown][EventAttributes]’, ‘[onmouseenter][EventAttributes]’, ‘[onmouseleave][EventAttributes]’, ‘[onmousemove][EventAttributes]’, ‘[onmouseout][EventAttributes]’, ‘[onmouseover][EventAttributes]’, ‘[onmouseup][EventAttributes]’, ‘[onpause][EventAttributes]’, ‘[onplay][EventAttributes]’, ‘[onplaying][EventAttributes]’, ‘[onprogress][EventAttributes]’, ‘[onratechange][EventAttributes]’, ‘[onreset][EventAttributes]’, ‘[onresize][EventAttributes]’, ‘[onscroll][EventAttributes]’, ‘[onseeked][EventAttributes]’, ‘[onseeking][EventAttributes]’, ‘[onselect][EventAttributes]’, ‘[onshow][EventAttributes]’, ‘[onstalled][EventAttributes]’, ‘[onsubmit][EventAttributes]’, ‘[onsuspend][EventAttributes]’, ‘[ontimeupdate][EventAttributes]’, ‘[ontoggle][EventAttributes]’, ‘[onvolumechange][EventAttributes]’, ‘[onwaiting][EventAttributes]’, ‘[onwheel][EventAttributes]’
*   [document element event attributes][documentandelementeventhandlers] — ‘[oncopy][EventAttributes]’, ‘[oncut][EventAttributes]’, ‘[onpaste][EventAttributes]’
*   ‘[to]’

DOM Interfaces:

*   [SVGSetElement]

_Attribute definitions:_

Name

Value

Initial value

Animatable

to

<value>

(none)

no

Specifies the value for the attribute during the duration of the ‘[set]’ element. The argument value must match the attribute type.

For a list of attributes and properties that can be animated using the ‘[set]’ element, see [Elements, attributes and properties that can be animated].

### 2.15. [The ‘discard’ element][DiscardElement] 

SVG 2 Requirement:

Have the ‘[discard]’ element to declaratively discard elements from the document tree.

Resolution:

[SVG 2 will support the discard element.][29-svg-minutes.html]

Purpose:

To conserve memory while displaying long-running documents.

Owner:

Cyril ([ACTION-3319][actions_3319])

‘discard’

Categories:

[Animation element]

Content model:

Any number of the following elements, in any order:eElement">descriptive elements — ‘[desc][DescElement]’, ‘[title][TitleElement]’, ‘[metadata][MetadataElement]’[script][ScriptElement]

Attributes:

*   [conditional processing attributes][TermConditionalProcessingAttribute] — ‘[requiredExtensions][RequiredExtensionsAttribute]’, ‘[systemLanguage][SystemLanguageAttribute]’
*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [aria attributes][TermARIAAttribute] — ‘[aria-activedescendant][aria-activedescendant]’, ‘[aria-atomic][aria-atomic]’, ‘[aria-autocomplete][aria-autocomplete]’, ‘[aria-busy][aria-busy]’, ‘[aria-checked][aria-checked]’, ‘[aria-colcount][aria-colcount]’, ‘[aria-colindex][aria-colindex]’, ‘[aria-colspan][aria-colspan]’, ‘[aria-controls][aria-controls]’, ‘[aria-current][aria-current]’, ‘[aria-describedby][aria-describedby]’, ‘[aria-details][aria-details]’, ‘[aria-disabled][aria-disabled]’, ‘[aria-dropeffect][aria-dropeffect]’, ‘[aria-errormessage][aria-errormessage]’, ‘[aria-expanded][aria-expanded]’, ‘[aria-flowto][aria-flowto]’, ‘[aria-grabbed][aria-grabbed]’, ‘[aria-haspopup][aria-haspopup]’, ‘[aria-hidden][aria-hidden]’, ‘[aria-invalid][aria-invalid]’, ‘[aria-keyshortcuts][aria-keyshortcuts]’, ‘[aria-label][aria-label]’, ‘[aria-labelledby][aria-labelledby]’, ‘[aria-level][aria-level]’, ‘[aria-live][aria-live]’, ‘[aria-modal][aria-modal]’, ‘[aria-multiline][aria-multiline]’, ‘[aria-multiselectable][aria-multiselectable]’, ‘[aria-orientation][aria-orientation]’, ‘[aria-owns][aria-owns]’, ‘[aria-placeholder][aria-placeholder]’, ‘[aria-posinset][aria-posinset]’, ‘[aria-pressed][aria-pressed]’, ‘[aria-readonly][aria-readonly]’, ‘[aria-relevant][aria-relevant]’, ‘[aria-required][aria-required]’, ‘[aria-roledescription][aria-roledescription]’, ‘[aria-rowcount][aria-rowcount]’, ‘[aria-rowindex][aria-rowindex]’, ‘[aria-rowspan][aria-rowspan]’, ‘[aria-selected][aria-selected]’, ‘[aria-setsize][aria-setsize]’, ‘[aria-sort][aria-sort]’, ‘[aria-valuemax][aria-valuemax]’, ‘[aria-valuemin][aria-valuemin]’, ‘[aria-valuenow][aria-valuenow]’, ‘[aria-valuetext][aria-valuetext]’, ‘[role][RoleAttribute]’
*   ‘[begin]’
*   ‘[href]’

DOM Interfaces:

The [‘discard’] element allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an [SVG user agent][TermUserAgent]. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents. This element will not be processed by static SVG viewers.

The [‘discard’] element may occur wherever the [‘animate’][AnimateElement] element may.

_Attribute definitions:_

Name

Value

Initial value

Animatable

href

URL[URL][attribute-url]

(none)

no

An [URL reference][TermURLReference] that identifies the [target element][TargetElement] to discard. See the definition of [‘href’][HrefAttribute] on [animation elements] for details on identifying a target element. Note, however, that unlike other [animation elements], the ‘[discard]’ element does not support the deprecated ‘[xlink:href][XLinkHrefAttribute]’ attribute.

Note that if the target element is not part of the [current SVG document fragment][TermCurrentSVGDocumentFragment] then whether the target element will be removed or not is defined by the host language.

If the ‘[href]’ attribute is not provided, then the target element will be the immediate parent element of the discard element.

Name

Value

Initial value

Animatable

begin

[<begin-value-list>][BeginValueListSyntax]

0s

no

[issue19] Attribute syntax needs fixing.

Indicates when the target element will be discarded. See the definition of [‘begin’][BeginAttribute] on [animation elements] for details.

The [‘discard’] element has an implicit [simple duration][Timing-DefiningSimpleDur] of "indefinite". As soon as the element's [active duration][Timing-ComputingActiveDur] starts, the [SVG user agent][TermUserAgent] discards the element identified by the [‘href’] attribute ([SMIL], section 5.4.5). The removal operation acts as if [`removeChild`][dom-node-removechild] were called on the parent of the target element with the target element as parameter. [DOM4] The [SVG user agent][TermUserAgent] must remove the target node as well as all of its attributes and descendants.

After removal of the [target element][TargetElement], the [‘discard’] element is no longer useful. It must also be discarded following the target element removal. If the [‘href’] attribute has an [invalid][TermInvalidValue] URL reference (the target element did not exist, for example), the [‘discard’] element itself must still be removed following activation.

[Seeking backwards][Timing-HyperlinksAndTiming] in the timeline ([SMIL], section 5.4.5) must not re-insert the discarded elements. Discarded elements are intended to be completely removed from memory. So, authors are encouraged to set the [‘playbackorder’] attribute to "forwardonly" when using the [‘discard’] element.

The [‘discard’] element itself can be discarded prior to its activation, in which case it will never trigger the removal of its own target element. [SVG user agents][TermUserAgent] must allow the [‘discard’] element to be the target of another [‘discard’] element.

The following example demonstrates a simple usage of the [‘discard’] element. The list below describes relevant behavior in the document timeline of this example:

At time = 0:

When the document timeline starts, the blue ellipse starts to move down the page.

At time = 1 second:

The red rectangle starts moving up the page.

At time = 2 seconds:

The [‘animateTransform’][AnimateTransformElement] on the [‘ellipse’][EllipseElement] ends. The [‘ellipse’][EllipseElement] and its children are also discarded, as it is the [target element][TargetElement] of a [‘discard’] with begin="2". The green [‘polygon’][PolygonElement] starts to move across the page.

At time = 3 seconds:

The animation on the red rectangle ends. The rectangle and its children are discarded as it is the target of a [‘discard’] element with begin="3".

At time = 4 seconds:

The animation on the green triangle ends. The green [‘polygon’][PolygonElement] and its children are discarded as it is the target of a [‘discard’] element with begin="4".

<svg xmlns="http://www.w3.org/2000/svg" width="352" height="240" playbackorder="forwardonly">
    
  <ellipse cx="98.5" cy="17.5" rx="20.5" ry="17.5" fill="blue" stroke="black" 
           transform="translate(9 252) translate(3 -296)">
    <animateTransform attributeName="transform" begin="0s" dur="2s" fill="remove"
                      calcMode="linear" type="translate" additive="sum"
                      from="0 0" to="-18 305"/>
    <discard begin="2s"/>
  </ellipse>
  
  <rect x="182" y="-39" width="39" height="30" fill="red" stroke="black"
        transform="translate(30 301)">
    <animateTransform attributeName="transform" begin="1s" dur="2s" fill="remove"
                      calcMode="linear" type="translate" additive="sum"
                      from="0 0" to="-26 -304"/>
    <discard begin="3s"/>
  </rect>
  
  <polygon points="-66,83.5814 -43,123.419 -89,123.419" fill="green" stroke="black" 
           transform="matrix(1 0 0 1.1798 0 -18.6096)">
    <animateTransform attributeName="transform" begin="2s" dur="2s"
                      fill="remove" calcMode="linear" type="translate" additive="sum"
                      from="0 0" to="460 63.5699"/>
    <discard begin="4s"/>
  </polygon>
</svg>

[View this example as SVG (SVG-enabled browsers only)]

### 2.16. [The ‘animateMotion’ element][AnimateMotionElement] 

The ‘[animateMotion]’ element causes a referenced element to move along a motion path.

Except for any SVG-specific rules explicitly mentioned in this specification, the normative definition for this element is the [SMIL Animation][REC-smil-animation-20010904] specification. In particular, see [SMIL Animation: 'animateMotion' element][animateMotionElement] ([SMILANIM], section 4.3).

‘animateMotion’

Categories:

[Animation element]

Content model:

Any number of [descriptive elements][TermDescriptiveElement], ‘[script][ScriptElement]’ and at most one ‘[mpath]’ element, in any order.

Attributes:

*   [animation addition attributes] — ‘[additive]’, ‘[accumulate]’
*   [animation event attributes] — ‘[onbegin][OnBeginEventAttribute]’, ‘[onend][OnEndEventAttribute]’, ‘[onrepeat][OnRepeatEventAttribute]’
*   [animation target element attributes] — ‘[href]’
*   [animation timing attributes] — ‘[begin]’, ‘[dur]’, ‘[end]’, ‘[min]’, ‘[max]’, ‘[restart]’, ‘[repeatCount]’, ‘[repeatDur]’, ‘[fill]’
*   [animation value attributes] — ‘[calcMode]’, ‘[values]’, ‘[keyTimes]’, ‘[keySplines]’, ‘[from]’, ‘[to]’, ‘[by]’
*   [conditional processing attributes][TermConditionalProcessingAttribute] — ‘[requiredExtensions][RequiredExtensionsAttribute]’, ‘[systemLanguage][SystemLanguageAttribute]’
*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [global event attributes][globaleventhandlers] — ‘[oncancel][EventAttributes]’, ‘[oncanplay][EventAttributes]’, ‘[oncanplaythrough][EventAttributes]’, ‘[onchange][EventAttributes]’, ‘[onclick][EventAttributes]’, ‘[onclose][EventAttributes]’, ‘[oncuechange][EventAttributes]’, ‘[ondblclick][EventAttributes]’, ‘[ondrag][EventAttributes]’, ‘[ondragend][EventAttributes]’, ‘[ondragenter][EventAttributes]’, ‘[ondragexit][EventAttributes]’, ‘[ondragleave][EventAttributes]’, ‘[ondragover][EventAttributes]’, ‘[ondragstart][EventAttributes]’, ‘[ondrop][EventAttributes]’, ‘[ondurationchange][EventAttributes]’, ‘[onemptied][EventAttributes]’, ‘[onended][EventAttributes]’, ‘[onerror][EventAttributes]’, ‘[onfocus][EventAttributes]’, ‘[oninput][EventAttributes]’, ‘[oninvalid][EventAttributes]’, ‘[onkeydown][EventAttributes]’, ‘[onkeypress][EventAttributes]’, ‘[onkeyup][EventAttributes]’, ‘[onload][EventAttributes]’, ‘[onloadeddata][EventAttributes]’, ‘[onloadedmetadata][EventAttributes]’, ‘[onloadstart][EventAttributes]’, ‘[onmousedown][EventAttributes]’, ‘[onmouseenter][EventAttributes]’, ‘[onmouseleave][EventAttributes]’, ‘[onmousemove][EventAttributes]’, ‘[onmouseout][EventAttributes]’, ‘[onmouseover][EventAttributes]’, ‘[onmouseup][EventAttributes]’, ‘[onpause][EventAttributes]’, ‘[onplay][EventAttributes]’, ‘[onplaying][EventAttributes]’, ‘[onprogress][EventAttributes]’, ‘[onratechange][EventAttributes]’, ‘[onreset][EventAttributes]’, ‘[onresize][EventAttributes]’, ‘[onscroll][EventAttributes]’, ‘[onseeked][EventAttributes]’, ‘[onseeking][EventAttributes]’, ‘[onselect][EventAttributes]’, ‘[onshow][EventAttributes]’, ‘[onstalled][EventAttributes]’, ‘[onsubmit][EventAttributes]’, ‘[onsuspend][EventAttributes]’, ‘[ontimeupdate][EventAttributes]’, ‘[ontoggle][EventAttributes]’, ‘[onvolumechange][EventAttributes]’, ‘[onwaiting][EventAttributes]’, ‘[onwheel][EventAttributes]’
*   [document element event attributes][documentandelementeventhandlers] — ‘[oncopy][EventAttributes]’, ‘[oncut][EventAttributes]’, ‘[onpaste][EventAttributes]’
*   ‘[path]’
*   ‘[keyPoints]’
*   ‘[rotate]’
*   ‘[origin]’

DOM Interfaces:

*   [SVGAnimateMotionElement]

_Attribute definitions:_

Name

Value

Initial value

Animatable

calcMode

discrete | linear | paced | spline

paced

no

Specifies the interpolation mode for the animation. Refer to general description of the ‘[calcMode]’ attribute above. The only difference is that the default value for the ‘[calcMode]’ for ‘[animateMotion]’ is 'paced'. See [SMIL Animation: 'calcMode' attribute for 'animateMotion'][MotionCalcModeAttribute].

Name

Value

Initial value

Animatable

path

[svg-path][PathDataBNF][EBNF][syntax]

(none)

no

The motion path, expressed in the same format and interpreted the same way as the [d][DProperty] geometric property for the ‘[path][PathElement]’ element. The effect of a motion path animation is to add a supplemental transformation matrix onto the [CTM][current-transformation-matrix] for the referenced object which causes a translation along the x- and y-axes of the current user coordinate system by the computed X and Y values computed over time.

Name

Value

Initial value

Animatable

keyPoints

[<number>][numbers] [; [<number>][numbers]\* ;?

(none)

no

‘[keyPoints]’ takes a semicolon-separated list of floating point values between 0 and 1 and indicates how far along the motion path the object shall move at the moment in time specified by corresponding ‘[keyTimes]’ value. Distance calculations use the user agent's [distance along the path][DistanceAlongAPath] algorithm. Each progress value in the list corresponds to a value in the ‘[keyTimes]’ attribute list.

If a list of ‘[keyPoints]’ is specified, there must be exactly as many values in the ‘[keyPoints]’ list as in the ‘[keyTimes]’ list.

If the last semicolon separator is followed by either just white space or no more characters, ignore both the separator and the trailing white space.

If there are any errors in the ‘[keyPoints]’ specification (bad values, too many or too few values), then the document is in error (see [Error processing][ErrorProcessing]).

Name

Value

Initial value

Animatable

rotate

[<number>][numbers] | auto | auto-reverse

0

no

The ‘[rotate]’ attribute post-multiplies a supplemental transformation matrix onto the [CTM][current-transformation-matrix] of the target element to apply a rotation transformation about the origin of the current user coordinate system. The rotation transformation is applied after the supplemental translation transformation that is computed due to the ‘[path]’ attribute.

auto

Indicates that the object is rotated over time by the angle of the direction (i.e., directional tangent vector) of the motion path.

auto-reverse

Indicates that the object is rotated over time by the angle of the direction (i.e., directional tangent vector) of the motion path plus 180 degrees.

[<number>][numbers]

Indicates that the target element has a constant rotation transformation applied to it, where the rotation angle is the specified number of degrees.

Name

Value

Initial value

Animatable

origin

default

default

no

The ‘[origin]’ attribute is [defined in the SMIL Animation specification][MotionOriginAttribute] ([SMILANIM], section 4.3). It has no effect in SVG.

‘mpath’

Categories:

None

Content model:

Any number of the following elements, in any order:

*   [descriptive elements][TermDescriptiveElement] — ‘[desc][DescElement]’, ‘[title][TitleElement]’, ‘[metadata][MetadataElement]’

[script][ScriptElement]

Attributes:

*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [global event attributes][globaleventhandlers] — ‘[oncancel][EventAttributes]’, ‘[oncanplay][EventAttributes]’, ‘[oncanplaythrough][EventAttributes]’, ‘[onchange][EventAttributes]’, ‘[onclick][EventAttributes]’, ‘[onclose][EventAttributes]’, ‘[oncuechange][EventAttributes]’, ‘[ondblclick][EventAttributes]’, ‘[ondrag][EventAttributes]’, ‘[ondragend][EventAttributes]’, ‘[ondragenter][EventAttributes]’, ‘[ondragexit][EventAttributes]’, ‘[ondragleave][EventAttributes]’, ‘[ondragover][EventAttributes]’, ‘[ondragstart][EventAttributes]’, ‘[ondrop][EventAttributes]’, ‘[ondurationchange][EventAttributes]’, ‘[onemptied][EventAttributes]’, ‘[onended][EventAttributes]’, ‘[onerror][EventAttributes]’, ‘[onfocus][EventAttributes]’, ‘[oninput][EventAttributes]’, ‘[oninvalid][EventAttributes]’, ‘[onkeydown][EventAttributes]’, ‘[onkeypress][EventAttributes]’, ‘[onkeyup][EventAttributes]’, ‘[onload][EventAttributes]’, ‘[onloadeddata][EventAttributes]’, ‘[onloadedmetadata][EventAttributes]’, ‘[onloadstart][EventAttributes]’, ‘[onmousedown][EventAttributes]’, ‘[onmouseenter][EventAttributes]’, ‘[onmouseleave][EventAttributes]’, ‘[onmousemove][EventAttributes]’, ‘[onmouseout][EventAttributes]’, ‘[onmouseover][EventAttributes]’, ‘[onmouseup][EventAttributes]’, ‘[onpause][EventAttributes]’, ‘[onplay][EventAttributes]’, ‘[onplaying][EventAttributes]’, ‘[onprogress][EventAttributes]’, ‘[onratechange][EventAttributes]’, ‘[onreset][EventAttributes]’, ‘[onresize][EventAttributes]’, ‘[onscroll][EventAttributes]’, ‘[onseeked][EventAttributes]’, ‘[onseeking][EventAttributes]’, ‘[onselect][EventAttributes]’, ‘[onshow][EventAttributes]’, ‘[onstalled][EventAttributes]’, ‘[onsubmit][EventAttributes]’, ‘[onsuspend][EventAttributes]’, ‘[ontimeupdate][EventAttributes]’, ‘[ontoggle][EventAttributes]’, ‘[onvolumechange][EventAttributes]’, ‘[onwaiting][EventAttributes]’, ‘[onwheel][EventAttributes]’
*   [document element event attributes][documentandelementeventhandlers] — ‘[oncopy][EventAttributes]’, ‘[oncut][EventAttributes]’, ‘[onpaste][EventAttributes]’
*   ‘[href]’

DOM Interfaces:

*   [SVGMPathElement]

_Attribute definitions:_

Name

Value

Initial value

Animatable

href

URL[URL][attribute-url]

(none)

no

A [URL reference][TermURLReference] to the ‘[path][PathElement]’ element or [shape][TermShapeElement] element which defines the motion path. Refer to the common handling defined for [URL reference attributes][linkRefAttrs] and [deprecated XLink attributes][XLinkRefAttrs].

For ‘[animateMotion]’, the specified values for ‘[from]’, ‘[by]’, ‘[to]’ and ‘[values]’ consists of x, y coordinate pairs, with a single comma and/or white space separating the x coordinate from the y coordinate. For example, from="33,15" specifies an x coordinate value of 33 and a y coordinate value of 15.

If provided, the ‘[values]’ attribute must consists of a list of x, y coordinate pairs. Coordinate values are separated by at least one white space character or a comma. Additional white space around the separator is allowed. For example, values="10,20;30,20;30,40" or values="10mm,20mm;30mm,20mm;30mm,40mm". Each coordinate represents a [<length>][lengths]. Attributes ‘[from]’, ‘[by]’, ‘[to]’ and ‘[values]’ specify a shape on the current canvas which represents the motion path.

Two options are available which allow definition of a motion path using any of SVG's [path data][PathData] commands:

*   the ‘[path]’ attribute defines a motion path directly on ‘[animateMotion]’ element using any of SVG's [path data][PathData] commands.
*   the ‘[mpath]’ sub-element provides the ability to reference an external ‘[path][PathElement]’ element or [shape][TermShapeElement] element as the definition of the motion path. If the ‘[mpath]’ sub-element refers to a [shape][TermShapeElement] element, the motion path is defined by the [equivalent path][TermEquivalentPath] of the [shape][TermShapeElement] element.

Note that SVG's [path data][PathData] commands can only contain values in local coordinate system, whereas ‘[from]’, ‘[by]’, ‘[to]’ and ‘[values]’ can specify coordinates in local coordinate system or using unit identifiers. See [Units][Units].

The various (x,y) points of the shape provide a supplemental transformation matrix onto the [CTM][current-transformation-matrix] for the referenced object which causes a translation along the x- and y-axes of the current user coordinate system by the (x,y) values of the shape computed over time. Thus, the referenced object is translated over time by the offset of the motion path relative to the origin of the current user coordinate system. The supplemental transformation is applied on top of any transformations due to the target element's [transform][TransformProperty] property or any animations on that attribute due to ‘[animateTransform]’ elements on the target element.

The ‘[additive]’ and ‘[accumulate]’ attributes apply to ‘[animateMotion]’ elements. Multiple ‘[animateMotion]’ elements all simultaneously referencing the same target element can be additive with respect to each other; however, the transformations which result from the ‘[animateMotion]’ elements are always supplemental to any transformations due to the target element's [transform][TransformProperty] property or any ‘[animateTransform]’ elements.

The default calculation mode (‘[calcMode]’) for ‘[animateMotion]’ is "paced". This will produce constant velocity motion along the specified path. Note that while animateMotion elements can be additive, it is important to observe that the addition of two or more "paced" (constant velocity) animations might not result in a combined motion animation with constant velocity.

When a path is combined with "discrete", "linear" or "spline" ‘[calcMode]’ settings, and if attribute ‘[keyPoints]’ is not provided, the number of values is defined to be the number of points defined by the path, unless there are "move to" commands within the path. A "move to" command within the path (i.e. other than at the beginning of the path description) A "move to" command does not count as an additional point when dividing up the duration, or when associating ‘[keyTimes]’, ‘[keySplines]’ and ‘[keyPoints]’ values. When a path is combined with a "paced" ‘[calcMode]’ setting, all "move to" commands are considered to have 0 length (i.e. they always happen instantaneously), and is not considered in computing the pacing.

For more flexibility in controlling the velocity along the motion path, the ‘[keyPoints]’ attribute provides the ability to specify the progress along the motion path for each of the ‘[keyTimes]’ specified values. If specified, ‘[keyPoints]’ causes ‘[keyTimes]’ to apply to the values in ‘[keyPoints]’ rather than the points specified in the ‘[values]’ attribute array or the points on the ‘[path]’ attribute.

The override rules for ‘[animateMotion]’ are as follows. Regarding the definition of the motion path, the ‘[mpath]’ element overrides the ‘[path]’ attribute, which overrides ‘[values]’, which overrides ‘[from]’, ‘[by]’ and ‘[to]’. Regarding determining the points which correspond to the ‘[keyTimes]’ attributes, the ‘[keyPoints]’ attribute overrides ‘[path]’, which overrides ‘[values]’, which overrides ‘[from]’, ‘[by]’ and ‘[to]’.

At any time _t_ within a motion path animation of duration _dur_, the computed coordinate (x,y) along the motion path is determined by finding the point (x,y) which is _t/dur_ distance along the motion path using the user agent's [distance along the path][DistanceAlongAPath] algorithm.

The following example demonstrates the supplemental transformation matrices that are computed during a motion path animation.

Example animMotion01 shows a triangle moving along a motion path.

<?xml version="1.0" standalone="no"?>
<svg width="5cm" height="3cm"  viewBox="0 0 500 300"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Example animMotion01 - demonstrate motion animation computations</desc>
  <rect x="1" y="1" width="498" height="298"
        fill="none" stroke="blue" stroke-width="2" />
  <!-- Draw the outline of the motion path in blue, along
          with three small circles at the start, middle and end. -->
  <path id="path1" d="M100,250 C 100,50 400,50 400,250"
        fill="none" stroke="blue" stroke-width="7.06"  />
  <circle cx="100" cy="250" r="17.64" fill="blue"  />
  <circle cx="250" cy="100" r="17.64" fill="blue"  />
  <circle cx="400" cy="250" r="17.64" fill="blue"  />
  <!-- Here is a triangle which will be moved about the motion path.
       It is defined with an upright orientation with the base of
       the triangle centered horizontally just above the origin. -->
  <path d="M-25,-12.5 L25,-12.5 L 0,-87.5 z"
        fill="yellow" stroke="red" stroke-width="7.06"  >
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" >
       <mpath href="#path1"/>
    </animateMotion>
  </path>
</svg>

Example animMotion01tion01a.png"/>  
At zero seconds ![Example animMotion01 - at three seconds][animMotion01b.png]  
At three seconds ![Example animMotion01 - at six seconds][animMotion01c.png]  
At six seconds

[View this example as SVG (SVG-enabled browsers only)][animMotion01.svg]

The following table shows the supplemental transformation matrices that are applied to achieve the effect of the motion path animation.

Example animMotion01 time slices

After 0s

After 3s

After 6s

Supplemental transform due to movement along motion path

translate(100,250)

translate(250,100)

translate(400,250)

Supplemental transform due to rotate="auto"

rotate(-90)

rotate(0)

rotate(90)

For a list of elements that can be animated using the ‘[animateMotion]’ element, see [Elements, attributes and properties that can be animated].

### 2.17. [The ‘animateTransform’ element][AnimateTransformElement] 

The ‘[animateTransform]’ element animates a transformation attribute on a target element, thereby allowing animations to control translation, scaling, rotation and/or skewing.

[issue8] This section should talk about the [transform][TransformProperty] property.

‘animateTransform’

Categories:

[Animation element]

Content model:

Any number of the following elements, in any order:

*   [descriptive elements][TermDescriptiveElement] — ‘[desc][DescElement]’, ‘[title][TitleElement]’, ‘[metadata][MetadataElement]’

[script][ScriptElement]

Attributes:

*   [animation addition attributes] — ‘[additive]’, ‘[accumulate]’
*   [animation event attributes] — ‘[onbegin][OnBeginEventAttribute]’, ‘[onend][OnEndEventAttribute]’, ‘[onrepeat][OnRepeatEventAttribute]’
*   [animation target element attributes] — ‘[href]’
*   [animation attribute target attributes] — ‘[attributeName]’
*   [animation timing attributes] — ‘[begin]’, ‘[dur]’, ‘[end]’, ‘[min]’, ‘[max]’, ‘[restart]’, ‘[repeatCount]’, ‘[repeatDur]’, ‘[fill]’
*   [animation value attributes] — ‘[calcMode]’, ‘[values]’, ‘[keyTimes]’, ‘[keySplines]’, ‘[from]’, ‘[to]’, ‘[by]’
*   [conditional processing attributes][TermConditionalProcessingAttribute] — ‘[requiredExtensions][RequiredExtensionsAttribute]’, ‘[systemLanguage][SystemLanguageAttribute]’
*   [core attributes][TermCoreAttribute] — ‘[id][IDAttribute]’, ‘[tabindex][SVGElementTabindexAttribute]’, ‘[autofocus][SVGElementAutofocusAttribute]’, ‘[lang][LangAttribute]’, ‘[xml:space][XMLSpaceAttribute]’, ‘[class][ClassAttribute]’, ‘[style][StyleAttribute]’
*   [global event attributes][globaleventhandlers] — ‘[oncancel][EventAttributes]’, ‘[oncanplay][EventAttributes]’, ‘[oncanplaythrough][EventAttributes]’, ‘[onchange][EventAttributes]’, ‘[onclick][EventAttributes]’, ‘[onclose][EventAttributes]’, ‘[oncuechange][EventAttributes]’, ‘[ondblclick][EventAttributes]’, ‘[ondrag][EventAttributes]’, ‘[ondragend][EventAttributes]’, ‘[ondragenter][EventAttributes]’, ‘[ondragexit][EventAttributes]’, ‘[ondragleave][EventAttributes]’, ‘[ondragover][EventAttributes]’, ‘[ondragstart][EventAttributes]’, ‘[ondrop][EventAttributes]’, ‘[ondurationchange][EventAttributes]’, ‘[onemptied][EventAttributes]’, ‘[onended][EventAttributes]’, ‘[onerror][EventAttributes]’, ‘[onfocus][EventAttributes]’, ‘[oninput][EventAttributes]’, ‘[oninvalid][EventAttributes]’, ‘[onkeydown][EventAttributes]’, ‘[onkeypress][EventAttributes]’, ‘[onkeyup][EventAttributes]’, ‘[onload][EventAttributes]’, ‘[onloadeddata][EventAttributes]’, ‘[onloadedmetadata][EventAttributes]’, ‘[onloadstart][EventAttributes]’, ‘[onmousedown][EventAttributes]’, ‘[onmouseenter][EventAttributes]’, ‘[onmouseleave][EventAttributes]’, ‘[onmousemove][EventAttributes]’, ‘[onmouseout][EventAttributes]’, ‘[onmouseover][EventAttributes]’, ‘[onmouseup][EventAttributes]’, ‘[onpause][EventAttributes]’, ‘[onplay][EventAttributes]’, ‘[onplaying][EventAttributes]’, ‘[onprogress][EventAttributes]’, ‘[onratechange][EventAttributes]’, ‘[onreset][EventAttributes]’, ‘[onresize][EventAttributes]’, ‘[onscroll][EventAttributes]’, ‘[onseeked][EventAttributes]’, ‘[onseeking][EventAttributes]’, ‘[onselect][EventAttributes]’, ‘[onshow][EventAttributes]’, ‘[onstalled][EventAttributes]’, ‘[onsubmit][EventAttributes]’, ‘[onsuspend][EventAttributes]’, ‘[ontimeupdate][EventAttributes]’, ‘[ontoggle][EventAttributes]’, ‘[onvolumechange][EventAttributes]’, ‘[onwaiting][EventAttributes]’, ‘[onwheel][EventAttributes]’
*   [document element event attributes][documentandelementeventhandlers] — ‘[oncopy][EventAttributes]’, ‘[oncut][EventAttributes]’, ‘[onpaste][EventAttributes]’
*   ‘[type]’

DOM Interfaces:

*   [SVGAnimateTransformElement]

_Attribute definitions:_

Name

Value

Initial value

Animatable

type

translate | scale | rotate | skewX | skewY

translate

no

Indicates the type of transformation which is to have its values change over time.

The ‘[from]’, ‘[by]’ and ‘[to]’ attributes take a value expressed using the same syntax that is available for the given transformation type:

*   For a type="translate", each individual value is expressed as <tx> [,<ty>\].
*   For a type="scale", each individual value is expressed as <sx> [,<sy>\].
*   For a type="rotate", each individual value is expressed as <rotate-angle> [<cx> <cy>\].
*   For a type="skewX" and type="skewY", each individual value is expressed as <skew-angle>.

(See [The ‘transform’ property][TransformProperty].)

The ‘[values]’ attribute for the ‘[animateTransform]’ element consists of a semicolon-separated list of values, where each individual value is expressed as described above for ‘[from]’, ‘[by]’ and ‘[to]’.

The animation effect for ‘[animateTransform]’ is post-multiplied to the underlying value for additive ‘[animateTransform]’ animations (see below) instead of added to the underlying value, due to the specific behavior of ‘[animateTransform]’.

_From-to_, _from-by_ and _by animations_ are defined in SMIL to be equivalent to a corresponding _values animation_. See the [Animation function values][AnimFuncValues] section of SMIL Animation ([SMILANIM], section 3.2.2). However, _to animations_ are a mixture of additive and non-additive behavior, as described in the [How from, to and by attributes affect additive behavior][FromToByAndAdditive] section of SMIL Animation ([SMILANIM], section 3.3.6). _To animations_ provide specific functionality to get a smooth change from the underlying value to the ‘[to]’ attribute value, which conflicts mathematically with the requirement for additive transform animations to be post-multiplied. As a consequence, in SVG 1.1 the behavior of _to animations_ for ‘[animateTransform]’ is undefined. Authors are suggested to use _from-to_, _from-by_, _by_ or _values animations_ to achieve any desired transform animation.

If [‘calcMode’] has the value 'paced', then the "distance" for the transformation is calculated as further described in [Paced animations and complex types].

When an animation is active, the effect of non-additive ‘[animateTransform]’ (i.e., additive="replace") is to replace the given attribute's value with the transformation defined by the ‘[animateTransform]’. The effect of additive (i.e., additive="sum") is to post-multiply the transformation matrix corresponding to the transformation defined by this ‘[animateTransform]’.

To illustrate:

```xml
<rect transform="skewX(30)"...>
  <animateTransform attributeName="transform"
                    type="rotate" from="0" to="90" dur="5s"
                    additive="replace" fill="freeze"/>
  <animateTransform attributeName="transform"
                    type="scale" from="1" to="2" dur="5s"
                    additive="replace" fill="freeze"/>
</rect>
```

In the code snippet above, because the both animations have additive="replace", the first animation overrides the transformation on the rectangle itself and the second animation overrides the transformation from the first animation; therefore, at time 5 seconds, the visual result of the above two animations would be equivalent to the following static rectangle:

```xml
<rect transform="scale(2)" ... />

<rect transform="skewX(30)"...>
  <animateTransform attributeName="transform"
                    type="rotate" from="0" to="90" dur="5s"
                    additive="sum" fill="freeze"/>
  <animateTransform attributeName="transform"
                    type="scale" from="1" to="2" dur="5s"
                    additive="sum" fill="freeze"/>
</rect>
```

In this code snippet, because the both animations have additive="sum", the first animation post-multiplies its transformation to any transformations on the rectangle itself and the second animation post-multiplies its transformation to any transformation from the first animation; therefore, at time 5 seconds, the visual result of the above two animations would be equivalent to the following static rectangle:

<rect transform="skewX(30) rotate(90) scale(2)" ... />

The zero value used when performing a _by animation_ with type="scale" is indeed 0. Thus, performing the following animation causes the rectangle to be invisible at time 0s (since the animated transform list value is 'scale(0)'), and be scaled back to its original size at time 5s (since the animated transform list value is 'scale(1)'):

<rect width="100" height="100">
  <animateTransform attributeName="transform"
                    type="scale" by="1" dur="5s" fill="freeze"/>
</rect>

When a transform animation has accumulate='sum', the accumulation that occurs for each completed repetition of the animation is computed on the values specified in the ‘[animateTransform]’ element's [animation value attributes] (i.e., ‘[values]’, ‘[from]’, ‘[to]’ and ‘[by]’) and not on the transformation matrix that these values represent.

For example, in the following code snippet, 3 is added to the scale value at the start of each repetition:

<rect width="100" height="100">
  <animateTransform attributeName="transform"
                    type="scale" from="2" to="3" repeatCount="3" dur="4s"
                    fill="freeze"/>
</rect>

The following graph and table shows the animated [transform][TransformProperty] value on the ‘[rect][RectElement]’ over the course of the animation:

![The scale value animates from 2 to 12 with discontinuities at 4s and 8s.][cumulative-transform-graph-1.png]

Time

Value

0s

scale(2)

1s

scale(2.25)

2s

scale(2.5)

3s

scale(2.75)

4s

scale(5)

5s

scale(5.25)

6s

scale(5.5)

7s

scale(5.75)

8s

scale(8)

9s

scale(8.25)

10s

scale(8.5)

11s

scale(8.75)

12s

scale(9)

Transform item types that can have multiple values – 'translate', 'scale' and 'rotate' – are treated as vectors and accumulation is performed with vector addition. Optional values that are omitted are taken to have their usual implied value: 1 for the <sy> component of a 'scale' and 0 for the <tx> component of a 'translate' and the <cx cy> components of a 'rotate'.

For example, consider the following code snippet, which has a cumulative transform animation of type 'rotate':

<rect width="100" height="100">
  <animateTransform attributeName="transform"
                    type="rotate" from="0 30 40" to="10 30 40"
                    repeatCount="2" dur="1s" fill="freeze"/>
</rect>

At time 1 second, the animated value of [transform][TransformProperty] on the ‘[rect][RectElement]’ will jump from 'rotate(10 30 40)' to 'rotate(10 60 80)', because the effect of the accumulation is to take the value at the end of the first repetition, '10 30 40', and add to it the value at simple duration t = 0s, which is '0 30 40'.

For a list of attributes and properties that can be animated using the ‘[animateTransform]’ element, see [Elements, attributes and properties that can be animated].

### 2.18. [Elements, attributes and properties that can be animated][AnimationAttributesAndProperties] 

The following lists all of the elements which can be animated by an ‘[animateMotion]’ element:

*   ‘[svg][SVGElement]’
*   ‘[g][GElement]’
*   ‘[defs][DefsElement]’
*   ‘[use][UseElement]’
*   ‘[image][ImageElement]’
*   ‘[switch][SwitchElement]’
*   ‘[path][PathElement]’
*   ‘[rect][RectElement]’
*   ‘[circle][CircleElement]’
*   ‘[ellipse][EllipseElement]’
*   ‘[line][LineElement]’
*   ‘[polyline][PolylineElement]’
*   ‘[polygon][PolygonElement]’
*   ‘[text][TextElement]’
*   ‘[clipPath][ClipPathElement]’
*   ‘[mask][MaskElement]’
*   ‘[a][AElement]’
*   ‘[foreignObject][ForeignObjectElement]’

Each attribute or property within this specification indicates whether or not it can be animated by SVG's animation elements. Animatable attributes and properties are designated as follows:

Animatable: yes.

whereas attributes and properties that cannot be animated are designated:

Animatable: no.

Some properties are defined as being animatable but only for non-additive animations:

Animatable: yes (non-additive).

SVG has a number of different data types used for its various supported attributes and properties. For those attributes and properties that can be animated, the following table indicates which animation elements can be used to animate each of the basic data types. If a given attribute or property can take values of keywords (which are not additive) or numeric values (which are additive), then additive animations are possible if the subsequent animation uses a numeric value even if the base animation uses a keyword value; however, if the subsequent animation uses a keyword value, additive animation is not possible.

Animatable data types

Data type

Additive?

‘[animate]’

‘[set]’

‘[animateTransform]’

Notes

[<angle>][angles]

yes

yes

yes

no

 

[<color>][colors]

yes

yes

yes

no

Only additive if each value can be converted to an RGB color.

[<frequency>][frequency]

no

no

no

no

 

[<integer>][integers]

yes

yes

yes

no

 

[<length>][lengths]

yes

yes

yes

no

 

[<number>][numbers]

yes

yes

yes

no

 

[<paint>][SpecifyingPaint]

yes

yes

yes

no

Only additive if each value can be converted to an RGB color.

[<percentage>][percentages]

yes

yes

yes

no

 

[<time>][time]

no

no

no

no

 

URL

no

yes

yes

no

 

All other data types used in animatable attributes and properties

no

yes

yes

no

 

Any deviation from the above table or other special note about the animation capabilities of a particular attribute or property is included in the section of the specification where the given attribute or property is defined.

### 2.19. [Implicit ARIA Semantics][implicit-aria-semantics] 

[Animation elements] have no default implied ARIA semantics. Furthermore, no role may be applied to [animation elements].

/3. [Animation using the SVG DOM][DOMAnimationExample] 
-------------------------------------------------------

Example dom01 shows a simple animation using the DOM.

<?xml version="1.0" standalone="no"?>
<svg width="4cm" height="2cm" viewBox="0 0 400 200"
     xmlns="http://www.w3.org/2000/svg"
     onload="StartAnimation(evt)">
  <script type="application/ecmascript"><![CDATA[
    var timevalue = 0;
    var timer\_increment = 50;
    var max\_time = 5000;
    var text\_element;
    function StartAnimation(evt) {
      text\_element = evt.target.ownerDocument.getElementById("TextElement");
      ShowAndGrowElement();
    }
    function ShowAndGrowElement() {
      timevalue = timevalue + timer\_increment;
      if (timevalue > max\_time)
        return;
      // Scale the text string gradually until it is 20 times larger
      scalefactor = (timevalue \* 20.) / max\_time;
      text\_element.setAttribute("transform", "scale(" + scalefactor + ")");
      // Make the string more opaque
      opacityfactor = timevalue / max\_time;
      text\_element.setAttribute("opacity", opacityfactor);
      // Call ShowAndGrowElement again <timer\_increment> milliseconds later.
      setTimeout("ShowAndGrowElement()", timer\_increment)
    }
    window.ShowAndGrowElement = ShowAndGrowElement
  ]></script>
  <rect x="1" y="1" width="398" height="198"
        fill="none" stroke="blue" stroke-width="2"/>
  <g transform="translate(50,150)" fill="red" font-size="7">
    <text id="TextElement">SVG</text>
  </g>
</svg>

Example dom01

![Example dom01 - at zero seconds][dom01a.png]  
At zero seconds

![Example dom01 - at three seconds][dom01b.png]  
At 2.5 seconds

![Example dom01 - at six seconds][dom01c.png]  
At five seconds

[View this example as SVG (SVG-enabled browsers only)][dom01.svg]

The above SVG file contains a single graphics element, a text string that says "SVG". The animation loops for 5 seconds. The text string starts out small and transparent and grows to be large and opaque. Here is an explanation of how this example works:

*   The onload="StartAnimation(evt)" attribute indicates that, once the document has been fully loaded and processed, invoke ECMAScript function `StartAnimation`.
*   The ‘[script][ScriptElement]’ element defines the ECMAScript which makes the animation happen. The `StartAnimation()` function is only called once to give a value to global variable `text_element` and to make the initial call to `ShowAndGrowElement()`. `ShowAndGrowElement()` is called every 50 milliseconds and resets the [transform][TransformProperty] and ‘[style][StyleAttribute]’ attributes on the text element to new values each time it is called. At the end of `ShowAndGrowElement`, the function tells the ECMAScript engine to call itself again after 50 more milliseconds.
*   The ‘[g][GElement]’ element shifts the coordinate system so that the origin is shifted toward the lower-left of the viewing area. It also defines the fill color and font-size to use when drawing the text string.
*   The ‘[text][TextElement]’ element contains the text string and is the element whose attributes get changed during the animation.

If scripts are modifying the same attributes or properties that are being animated by SVG's [animation elements], the scripts modify the base value for the animation. If a base value is modified while an animation element is animating the corresponding attribute or property, the animations are required to adjust dynamically to the new base value.

If a script is modifying a property on the override style sheet at the same time that an [animation element] is animating that property, the result is implementation-dependent; thus, it is recommended that this be avoided.

/4. [Extensions to SVG 2][extensions] 
--------------------------------------

This specification extends the definitions in SVG 2 [SVG2] in the following ways.

### 4.1. [Extensions to the ‘svg’ element][SVGElement] 

SVG 2 Requirement:

Should support the playbackorder attribute to inform UA to not display controls to seek backwards.

Resolution:

[Support the playbackorder attribute.][T20-39-02]

Purpose:

To inform UA to not display controls to seek backwards.

Owner:

Cyril

SVG 2 Requirement:

Support a means for having SMIL animations start before their time container has fully loaded.

Resolution:

[Timeline control.][T20-23-57]

Purpose:

To start animations before the SVG document is fully loaded (useful for large SVG documents).

Owner:

Cyril

_Attribute definitions:_

Name

Value

Initial value

Animatable

playbackorder

forwardonly | all

all

no

Indicates whether it is possible to seek backwards in the document. In earlier versions of SVG there was no need to put restrictions on the direction of seeking but with the newly introduced facilities for long-running documents (e.g. the ‘[discard]’ element) there is sometimes a need to restrict this.

If ‘playbackorder’ is set to 'forwardonly', the content will likely contain ‘[discard]’ elements or scripts that destroy resources, thus seeking back in the document fragment's timeline may result in missing content. If ‘playbackorder’ is 'forwardonly', the content should not provide a way, through hyperlinking or script, of seeking backwards in the timeline. Similarly the UA should disable any controls it may provide in the user interface for seeking backwards. Content with playbackorder="forwardonly" that provides a mechanism for seeking backwards in time may result in undefined behavior or a document that is in error.

[issue20] Can't we define this so that there is no undefined behavior?

Attribute values have the following meanings:

'forwardonly'

This file is intended to be played only in the forward direction, sequentially, therefore seeking backwards should not be allowed.

'all'

Indicates that the document is authored appropriately for seeking in both directions.

Name

Value

Initial value

Animatable

timelinebegin

loadend | loadbegin

loadend

no

Controls the initialization of the timeline for the [SVG document fragment][TermSVGDocumentFragment].

The [outermost svg element][TermOutermostSVGElement] of an [SVG document fragment][TermSVGDocumentFragment] defines a _timeline_. Absolute times used by [animation elements] in an [SVG document fragment][TermSVGDocumentFragment] are relative to the document fragment's _timeline_.

By default, the _timeline_ is initialized when the document fragment's [`load`][LoadEvent] event is fired but for progressively loaded animations, the author may set this attribute to 'loadend', thus allowing the timeline to begin as the document loads, rather than waiting until the complete document is loaded.

Attribute values have the following meanings:

'loadend'

The document fragment's timeline starts the moment the [`load`][LoadEvent] event for the [outermost svg element][TermOutermostSVGElement] is triggered.

'loadbegin'

The document's timeline starts at the moment the [outermost svg element][TermOutermostSVGElement]'s _start-tag_ (as defined in [XML 1.0][sec-starttags] [XML10] or [HTML][syntax-start-tag] [HTML] when using the HTML parser) is fully parsed.

### 4.2. [Extensions to conditional processing elements][ConditionalProcessing] 

If the conditional statement on the ‘[requiredExtensions][RequiredExtensionsAttribute]’ and ‘[systemLanguage][SystemLanguageAttribute]’ attributes on [animation elements] fails, the animation will never be triggered.

/5. [IDL][IDL] 
---------------

Below are the DOM interfaces for the elements defined in this chapter. In addition, [TimeEvent], which is from [SMIL Animation][REC-smil-animation-20010904], is included here for easy reference.

### 5.1. [Interface TimeEvent][InterfaceTimeEvent] 

The [TimeEvent] interface, defined in [SMIL Animation: Supported interfaces][DOMSupport], provides specific contextual information associated with Time events.

The different types of events that can occur are:

**beginEvent**

This event is raised when the element local timeline begins to play. It will be raised each time the element begins the active duration (i.e. when it restarts, but not when it repeats). It may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was begun with the [beginElement] or [beginElementAt] methods. Note that if an element is restarted while it is currently playing, the element will raise an end event and another begin event, as the element restarts.

*   Bubbles: No
*   Cancelable: No
*   Context Info: None

**endEvent**

This event is raised at the active end of the element. Note that this event is not raised at the simple end of each repeat. This event may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was ended with the [endElement] or [endElementAt] methods. Note that if an element is restarted while it is currently playing, the element will raise an end event and another begin event, as the element restarts.

*   Bubbles: No
*   Cancelable: No
*   Context Info: None

**repeatEvent**

This event is raised when an element local timeline repeats. It will be raised each time the element repeats, after the first iteration.  
The event provides a numerical indication of which repeat iteration is beginning. The value is a 0-based integer, but the repeat event is not raised for the first iteration and so the observed values of the detail attribute will be >= 1.

*   Bubbles: No
*   Cancelable: No
*   Context Info: detail (current iteration)

[Exposed=Window\]
interface **TimeEvent** : [Event][interface-event] {

  readonly attribute [WindowProxy][windowproxy]? [view];
  readonly attribute long [detail];

  undefined [initTimeEvent](DOMString typeArg, [Window][window]? viewArg, long detailArg);
};

Attributes:

**view** (readonly [WindowProxy][windowproxy]?)

The [view] attribute identifies the [Window][window] from which the event was generated.

**detail** (readonly long)

Specifies some detail information about the Event, depending on the type of the event. For this event type, indicates the repeat number for the animation.

Operations:

undefined **initTimeEvent**(DOMString typeArg, [Window][window]? viewArg, long detailArg)

The [initTimeEvent] method is used to initialize the value of a [TimeEvent] created with `document.createEvent()`. This method may only be called before the [TimeEvent] has been dispatched via the dispatchEvent method, though it may be called multiple times during that phase if necessary. If called multiple times, the final invocation takes precedence.

Parameters

1.  DOMString typeArg
    
    Specifies the event type.
    
2.  [Window][window]? viewArg
    
    Specifies the Event's [Window][window].
    
3.  long detailArg
    
    Specifies the Event's detail.
    

### 5.2. [Interface SVGAnimationElement][InterfaceSVGAnimationElement] 

The [SVGAnimationElement] interface is the base interface for all of the animation element interfaces: [SVGAnimateElement], [SVGSetElement], [SVGAnimateMotionElement] and [SVGAnimateTransformElement].

Unlike other SVG DOM interfaces, the SVG DOM does not specify convenience DOM properties corresponding to the various language attributes on SVG's animation elements. Specification of these convenience properties in a way that will be compatible with future versions of SMIL Animation is expected in a future version of SVG. The current method for accessing and modifying the attributes on the animation elements is to use the standard `getAttribute`, `setAttribute`, `getAttributeNS` and `setAttributeNS` defined in [DOM4][dom] [DOM4].

SMIL Animation supports several methods for controlling the behavior of animation: `beginElement()`, `beginElementAt()`, `endElement()` and `endElementAt()`. These methods are used to begin and end the active duration of an element. Authors can (but are not required to) declare the timing to respond to the DOM using the following syntax:

<animate begin="indefinite" end="indefinite" .../>

If a DOM method call is made to begin or end the element (using `beginElement()`, `beginElementAt()`, `endElement()` or `endElementAt()`), each method call creates a single instance time (in the appropriate instance times list). These times are then interpreted as part of the semantics of lists of times, as described in [Evaluation of begin and end time lists][Timing-EvaluationOfBeginEndTimeLists].

*   The instance time associated with a `beginElement()` or `endElement()` call is the current presentation time at the time of the DOM method call.
*   The instance time associated with a `beginElementAt()` or `endElementAt()` call is the current presentation time at the time of the DOM method call, plus or minus the specified offset.
*   Note that `beginElement()` is subject to the ‘[restart]’ attribute in the same manner that event-based begin timing is. Refer also to [SMIL Animation: Restarting animation][Restart] ([SMILANIM], section 3.3.7).

[Exposed=Window\]
interface **SVGAnimationElement** : [SVGElement][InterfaceSVGElement] {

  readonly attribute [SVGElement][InterfaceSVGElement]? [targetElement];

  attribute [EventHandler][eventhandler] [onbegin];
  attribute [EventHandler][eventhandler] [onend];
  attribute [EventHandler][eventhandler] [onrepeat];

  float [getStartTime]();
  float [getCurrentTime]();
  float [getSimpleDuration]();

  undefined [beginElement]();
  undefined [beginElementAt](float offset);
  undefined [endElement]();
  undefined [endElementAt](float offset);
};

[SVGAnimationElement] includes [SVGTests][InterfaceSVGTests];

Attributes:

**targetElement** (readonly [SVGElement][InterfaceSVGElement]?)

The element which is being animated. If no target element is being animated (for example, because the URL in 'animate/href' does not match a valid element) the value returned is null.

**onbegin** ([EventHandler][eventhandler])

The event handler for the [beginEvent][BeginEvent].

**onend** ([EventHandler][eventhandler])

The event handler for the [endEvent][EndEvent].

**onrepeat** ([EventHandler][eventhandler])

The event handler for the [repeatEvent][RepeatEvent].

Operations:

float **getStartTime**()

Returns the begin time, in seconds, for this animation element's current interval, if it exists, regardless of whether the interval has begun yet. If there is no current interval, then a DOMException with code INVALID\_STATE\_ERR is thrown.

Returns

The start time, in seconds, of this animation element's current interval.

Exceptions

[DOMException][idl-DOMException], code INVALID\_STATE\_ERR

The animation element does not have a current interval.

float **getCurrentTime**()

Returns the current time in seconds relative to time zero for the given time container.

Returns

The current time in seconds relative to time zero for the given time container.

float **getSimpleDuration**()

Returns the number of seconds for the simple duration for this animation. If the simple duration is undefined (e.g., the end time is indefinite), then an exception is raised.

Returns

number of seconds for the simple duration for this animation.

Exceptions

[DOMException][idl-DOMException], code NOT\_SUPPORTED\_ERR

The simple duration is not determined on the given element.

undefined **beginElement**()

Creates a begin instance time for the current time. The new instance time is added to the [_begin instance times list_][Timing-BeginEnd-InstanceTimesLists]. The behavior of this method is equivalent to `beginElementAt(0)`.

undefined **beginElementAt**(float offset)

Creates a begin instance time for the current time plus the specified offset. The new instance time is added to the [_begin instance times list_][Timing-BeginEnd-InstanceTimesLists].

Parameters

1.  float offset
    
    The offset from the current document time, in seconds, at which to begin the element.
    

undefined **endElement**()

Creates an end instance time for the current time. The new instance time is added to the [_end instance times list_][Timing-BeginEnd-InstanceTimesLists]. The behavior of this method is equivalent to `endElementAt(0)`.

undefined **endElementAt**(float offset)

Creates a end instance time for the current time plus the specified offset. The new instance time is added to the [_end instance times list_][Timing-BeginEnd-InstanceTimesLists].

Parameters

1.  float offset
    
    The offset from the current document time, in seconds, at which to end the element.
    

### 5.3. [Interface SVGAnimateElement][InterfaceSVGAnimateElement] 

The [SVGAnimateElement] interface corresponds to the ‘[animate]’ element.

Object-oriented access to the attributes of the ‘[animate]’ element via the SVG DOM is not available.

[Exposed=Window\]
interface **SVGAnimateElement** : [SVGAnimationElement] {
};

### 5.4. [Interface SVGSetElement][InterfaceSVGSetElement] 

The [SVGSetElement] interface corresponds to the ‘[set]’ element.

Object-oriented access to the attributes of the ‘[set]’ element via the SVG DOM is not available.

[Exposed=Window\]
interface **SVGSetElement** : [SVGAnimationElement] {
};

### 5.5. [Interface SVGAnimateMotionElement][InterfaceSVGAnimateMotionElement] 

The [SVGAnimateMotionElement] interface corresponds to the ‘[animateMotion]’ element.

Object-oriented access to the attributes of the ‘[animateMotion]’ element via the SVG DOM is not available.

[Exposed=Window\]
interface **SVGAnimateMotionElement** : [SVGAnimationElement] {
};

### 5.6. [Interface SVGMPathElement][InterfaceSVGMPathElement] 

The [SVGMPathElement] interface corresponds to the ‘[mpath]’ element.

[Exposed=Window\]
interface **SVGMPathElement** : [SVGElement][InterfaceSVGElement] {
};

[SVGMPathElement] includes [SVGURIReference][InterfaceSVGURIReference];

### 5.7. [Interface SVGAnimateTransformElement][InterfaceSVGAnimateTransformElement] 

The [SVGAnimateTransformElement] interface corresponds to the ‘[animateTransform]’ element.

Object-oriented access to the attributes of the ‘[animateTransform]’ element via the SVG DOM is not available.

[Exposed=Window\]
interface **SVGAnimateTransformElement** : [SVGAnimationElement] {
};

### 5.8. [Interface SVGDiscardElement][InterfaceSVGDiscardElement] 

The [SVGDiscardElement] interface corresponds to the ‘[discard]’ element.

Object-oriented access to the attributes of the ‘[discard]’ element via the SVG DOM is not available.

[Exposed=Window\]
interface **SVGDiscardElement** : [SVGAnimationElement] {
};

### 5.9. [Extensions to interface SVGSVGElement][InterfaceSVGSVGElement] 

partial interface **SVGSVGElement** {
  undefined [pauseAnimations]();
  undefined [unpauseAnimations]();
  boolean [animationsPaused]();
  float [getCurrentTime]();
  undefined [setCurrentTime](float seconds);
};

The **pauseAnimations** and **unpauseAnimations** methods are used to pause and unpause all of the animations within the [SVG document fragment][TermSVGDocumentFragment].

When pauseAnimations() is called, the following steps are run:

1.  If the current ‘[svg][SVGElement]’ element is not the [outermost svg element][TermOutermostSVGElement], then return.
2.  Pause the timeline that controls SVG animations for the [SVG document fragment][TermSVGDocumentFragment] that the ‘[svg][SVGElement]’ element is in.

When unpauseAnimations() is called, the following steps are run:

1.  If the current ‘[svg][SVGElement]’ element is not the [outermost svg element][TermOutermostSVGElement], then return.
2.  Unpause the timeline that controls SVG animations for the [SVG document fragment][TermSVGDocumentFragment] that the ‘[svg][SVGElement]’ element is in.

The [pauseAnimations] and [unpauseAnimations] methods only affect animations defined using SVG's [animation elements]. They have no effect on CSS Transitions or Animations [CSS3ANIMATIONS][CSS3TRANSITIONS] or animations created using script.

The **animationsPaused** method returns whether SVG animation timeline has been paused. When animationsPaused() is called, true is returned if the timeline that controls SVG animations for the [SVG document fragment][TermSVGDocumentFragment] that the ‘[svg][SVGElement]’ element in has been paused by [pauseAnimations]; otherwise, false is returned.

The **getCurrentTime** and **setCurrentTime** methods are used to get and set the current time of the timeline that controls SVG animations. When getCurrentTime() is called, the following steps are run:

1.  If the timeline for the [current SVG document fragment][TermCurrentSVGDocumentFragment] has not yet begun, then return 0.
    
    This is the case, for example, if the [outermost svg element][TermOutermostSVGElement] has its ‘[timelinebegin]’ attribute set to 'loadend' and the load event has not yet fired.
    
2.  Otherwise, the timeline for the [current SVG document fragment][TermCurrentSVGDocumentFragment] has begun. Return the current time in seconds relative to the start time of the timeline.

When setCurrentTime(seconds) is called, the following steps are run:

1.  If the current ‘[svg][SVGElement]’ element is not the [outermost svg element][TermOutermostSVGElement], then return.
2.  If the timeline for the [current SVG document fragment][TermCurrentSVGDocumentFragment] has begun, then the timeline's current time (in seconds, relative to the start time of the timeline) is set to seconds.
3.  Otherwise, the timeline has not begun. seconds is recorded on the [current SVG document fragment][TermCurrentSVGDocumentFragment] as the time to be seeked to once the timeline has begun. If multiple calls to [setCurrentTime] are made before the timeline has begun, the most recent call's time will be used to seek the timeline once it begins.

/6. [References][refs] 
-----------------------

### 6.1. [Normative references][normrefs] 

[DOM2VIEWS\]

[Document Object Model (DOM) Level 2 Views Specification][REC-DOM-Level-2-Views-20001113], A. Le Hors, L. Cable, eds. World Wide Web Consortium, 13 November 2000.  
This edition of DOM 2 Views is http://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/.  
The [latest edition of DOM 2 Views][DOM-Level-2-Views] is available at http://www.w3.org/TR/DOM-Level-2-Views/.

[DOM4\]

[DOM4][WD-dom-20140204], A. van Kesteren, A. Gregor, Ms2ger, A. Russell, R. Berjon, eds. World Wide Web Consortium, 04 February 2014.  
This edition of DOM4 is http://www.w3.org/TR/2014/WD-dom-20140204/.  
The [latest edition of DOM4][dom] is available at http://www.w3.org/TR/dom/.

[HTML\]

[HTML5 A vocabulary and associated APIs for HTML and XHTML][html5], I. Hickson, R. Berjon, S. Faulkner, T. Leithead, E.D. Navara, E. O'Connor, S. Pfeiffer, eds. World Wide Web Consortium, 28 October 2014. W3C Recommendation.  
This edition of HTML5 is [http://www.w3.org/TR/2014/REC-html5-20141028/][REC-html5-20141028].  
The [latest version of html][html] is available at [http://www.w3.org/TR/html/][html].

[ISO8601\]

[Data elements and interchange formats - Information interchange - Representation of dates and times][catalogue_detail?csnumber=40874], International Organization for Standardization, 2004. Available at http://www.iso.org/iso/catalogue\_detail?csnumber=40874.

**[RFC2119\]**

[Key words for use in RFCs to Indicate Requirement Levels][rfc2119], S. Bradner, March 1997.  
Available at http://tools.ietf.org/html/rfc2119.

[SMIL\]

[Synchronized Multimedia Integration Language (SMIL 3.0)][REC-SMIL3-20081201], D. Bulterman _et al._, eds. 01 December 2008.  
This edition of SMIL is http://www.w3.org/TR/2008/REC-SMIL3-20081201/.  
The [latest edition of SMIL][smil] is available at http://www.w3.org/TR/smil/.

[SMILANIM\]

[SMIL Animation][2001/REC-smil-animation-20010904], P. Schmitz, A. Cohen. World Wide Web Consortium, 04 September 2001.  
This edition of SMIL Animation is http://www.w3.org/TR/2001/REC-smil-animation-20010904/.  
The [latest edition of SMIL Animation][smil-animation] is available at http://www.w3.org/TR/smil-animation/.

[SRGB\]

IEC 61966-2-1/Amd 1:2003 : Multimedia systems and equipment — Colour measurement and management — Part 2-1: Colour management — Default RGB colour space — sRGB, International Electrotechnical Commission, 2003.  
Available at [https://webstore.iec.ch/publication/6168][pub6168].  
See also [http://www.color.org/chardata/rgb/srgb.xalter][srgb.xalter] for technical data and color profiles.

**[SVG2\]**

[Scalable Vector Graphics (SVG) 2][2015/WD-SVG2-20150409], N. Andronikos, T. Bah, A. Bellamy-Royds, B. Birtles, C. Concolato, E. Dahlström, C. Lilley, C. McCormack, D. Schepers, D. Schulze, R. Schwerdtfeger, S. Takagi, J. Watt, eds. World Wide Web Consortium, 09 April 2015.  
This edition of SVG 2 is http://www.w3.org/TR/2015/WD-SVG2-20150409/.  
The [latest edition of SVG 2][SVG2] is available at http://www.w3.org/TR/SVG2/.

[XML10\]

[Extensible Markup Language (XML) 1.0 (Fifth Edition)][REC-xml-20081126], T. Bray, J. Paoli, C. M. Sperberg-McQueen, E. Maler, F. Yergeau, eds. World Wide Web Consortium, 26 November 2008.  
This edition of XML 1.0 is http://www.w3.org/TR/2008/REC-xml-20081126/.  
The [latest edition of XML 1.0][xml] is available at http://www.w3.org/TR/xml/.

### 6.2. [Non-normative references][nonnormrefs] 

[CSS3ANIMATIONS\]

[CSS Animations][WD-css-animations-1-20120403], D. Jackson, D. Hyatt, C. Marrin, S. Galineau, L. D. Baron, eds. World Wide Web Consortium, 3 April 2012. W3C Working Draft. (Work in progress.)  
This edition of CSS Animations is http://www.w3.org/TR/2012/WD-css-animations-1-20120403/.  
The [latest edition of CSS Animations][charmod] is available at http://www.w3.org/TR/css-animations-1/.

[CSS3TRANSITIONS\]

[CSS Transitions][WD-css-transitions-1-20120403], D. Jackson, D. Hyatt, C. Marrin, L. D. Baron, eds. World Wide Web Consortium, 3 April 2012. W3C Working Draft. (Work in progress.)  
This edition of CSS Transitions is http://www.w3.org/TR/2012/WD-css-transitions-1-20120403/.  
The [latest edition of CSS Transitions][css-transitions-1] is available at http://www.w3.org/TR/css-transitions-1/.

[FOLEY-VANDAM\]

Computer Graphics: Principles and Practice, Second Edition, J. D. Foley, A. van Dam, S. K. Feiner, J. F. Hughes, R. L. Phillips. Addison-Wesley, 1995.

/7. [Changes since SVG 1.1 Second Edition][ChangesSinceSVG11] 
--------------------------------------------------------------

*   Removed the attributeType attribute.
*   Folded the ElementTimeControl interface into [SVGAnimationElement].
*   Removed the animateColor element.
*   Added the onbegin, onend and onrepeat attributes to the [SVGAnimationElement] interface.
*   The ‘[values]’, ‘[keyTimes]’ and ‘[keySplines]’ attributes now ignore the last semicolon separator if it's not followed by a value.
*   Allowed the ‘[mpath]’ element to refer to a [shape][TermShapeElement] element.
*   Added the ‘[discard]’ element
*   Added the ‘[timelinebegin]’ and ‘[playbackorder]’ attributes on the ‘[svg][SVGElement]’ element.

<!-- Anchor Definitions -->
[svgdom]: https://svgwg.org/svg2-draft/svgdom.html
[TermEventAttribute]: https://svgwg.org/svg2-draft/interact.html#TermEventAttribute
[AnimationEvents]: https://svgwg.org/svg2-draft/interact.html#AnimationEvents
[VisibilityControl]: https://svgwg.org/svg2-draft/render.html#VisibilityControl
[TransformProperty]: https://svgwg.org/svg2-draft/coords.html#TransformProperty
[PatternElementPatternTransformAttribute]: https://svgwg.org/svg2-draft/pservers.html#PatternElementPatternTransformAttribute
[PathData]: https://svgwg.org/svg2-draft/paths.html#PathData
[PathElement]: https://svgwg.org/svg2-draft/paths.html#PathElement
[TermShapeElement]: https://svgwg.org/svg2-draft/shapes.html#TermShapeElement
[TermURLReference]: https://svgwg.org/svg2-draft/linking.html#TermURLReference
[SVGElement]: https://svgwg.org/svg2-draft/struct.html#SVGElement
[TermSVGDocumentFragment]: https://svgwg.org/svg2-draft/struct.html#TermSVGDocumentFragment
[LoadEvent]: https://svgwg.org/svg2-draft/interact.html#LoadEvent
[attribute-url]: https://svgwg.org/svg2-draft/types.html#attribute-url
[XLinkHrefAttribute]: https://svgwg.org/svg2-draft/linking.html#XLinkHrefAttribute
[XLinkRefAttrs]: https://svgwg.org/svg2-draft/linking.html#XLinkRefAttrs
[syntax]: https://svgwg.org/svg2-draft/types.html#syntax
[TextElementXAttribute]: https://svgwg.org/svg2-draft/text.html#TextElementXAttribute
[TextElementYAttribute]: https://svgwg.org/svg2-draft/text.html#TextElementYAttribute
[TextElement]: https://svgwg.org/svg2-draft/text.html#TextElement
[TextElementDXAttribute]: https://svgwg.org/svg2-draft/text.html#TextElementDXAttribute
[TextElementDYAttribute]: https://svgwg.org/svg2-draft/text.html#TextElementDYAttribute
[DataTypeDasharray]: https://svgwg.org/svg2-draft/painting.html#DataTypeDasharray
[StrokeDasharrayProperty]: https://svgwg.org/svg2-draft/painting.html#StrokeDasharrayProperty
[DataTypePoints]: https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
[PolygonElementPointsAttribute]: https://svgwg.org/svg2-draft/shapes.html#PolygonElementPointsAttribute
[PolygonElement]: https://svgwg.org/svg2-draft/shapes.html#PolygonElement
[StrokeWidthProperty]: https://svgwg.org/svg2-draft/painting.html#StrokeWidthProperty
[CircleElement]: https://svgwg.org/svg2-draft/shapes.html#CircleElement
[FillProperty]: https://svgwg.org/svg2-draft/painting.html#FillProperty
[EllipseElement]: https://svgwg.org/svg2-draft/shapes.html#EllipseElement
[GElement]: https://svgwg.org/svg2-draft/struct.html#GElement
[TermUserAgent]: https://svgwg.org/svg2-draft/conform.html#TermUserAgent
[interact]: https://svgwg.org/svg2-draft/interact.html
[SVGEvents]: https://svgwg.org/svg2-draft/interact.html#SVGEvents
[TermWhiteSpaceCharacter]: https://svgwg.org/svg2-draft/text.html#TermWhiteSpaceCharacter
[ErrorProcessing]: https://svgwg.org/svg2-draft/implnote.html#ErrorProcessing
[TermDescriptiveElement]: https://svgwg.org/svg2-draft/struct.html#TermDescriptiveElement
[DescElement]: https://svgwg.org/svg2-draft/struct.html#DescElement
[TitleElement]: https://svgwg.org/svg2-draft/struct.html#TitleElement
[MetadataElement]: https://svgwg.org/svg2-draft/struct.html#MetadataElement
[ScriptElement]: https://svgwg.org/svg2-draft/interact.html#ScriptElement
[TermConditionalProcessingAttribute]: https://svgwg.org/svg2-draft/struct.html#TermConditionalProcessingAttribute
[RequiredExtensionsAttribute]: https://svgwg.org/svg2-draft/struct.html#RequiredExtensionsAttribute
[SystemLanguageAttribute]: https://svgwg.org/svg2-draft/struct.html#SystemLanguageAttribute
[TermCoreAttribute]: https://svgwg.org/svg2-draft/struct.html#TermCoreAttribute
[IDAttribute]: https://svgwg.org/svg2-draft/struct.html#IDAttribute
[SVGElementTabindexAttribute]: https://svgwg.org/svg2-draft/struct.html#SVGElementTabindexAttribute
[SVGElementAutofocusAttribute]: https://svgwg.org/svg2-draft/struct.html#SVGElementAutofocusAttribute
[LangAttribute]: https://svgwg.org/svg2-draft/struct.html#LangAttribute
[XMLSpaceAttribute]: https://svgwg.org/svg2-draft/struct.html#XMLSpaceAttribute
[ClassAttribute]: https://svgwg.org/svg2-draft/styling.html#ClassAttribute
[StyleAttribute]: https://svgwg.org/svg2-draft/styling.html#StyleAttribute
[EventAttributes]: https://svgwg.org/svg2-draft/interact.html#EventAttributes
[TermPresentationAttribute]: https://svgwg.org/svg2-draft/styling.html#TermPresentationAttribute
[ColorInterpolationProperty]: https://svgwg.org/svg2-draft/painting.html#ColorInterpolationProperty
[TermARIAAttribute]: https://svgwg.org/svg2-draft/struct.html#TermARIAAttribute
[RoleAttribute]: https://svgwg.org/svg2-draft/struct.html#RoleAttribute
[TermCurrentSVGDocumentFragment]: https://svgwg.org/svg2-draft/struct.html#TermCurrentSVGDocumentFragment
[TermInvalidValue]: https://svgwg.org/svg2-draft/types.html#TermInvalidValue
[PathDataBNF]: https://svgwg.org/svg2-draft/paths.html#PathDataBNF
[DProperty]: https://svgwg.org/svg2-draft/paths.html#DProperty
[DistanceAlongAPath]: https://svgwg.org/svg2-draft/paths.html#DistanceAlongAPath
[linkRefAttrs]: https://svgwg.org/svg2-draft/linking.html#linkRefAttrs
[TermEquivalentPath]: https://svgwg.org/svg2-draft/paths.html#TermEquivalentPath
[Units]: https://svgwg.org/svg2-draft/coords.html#Units
[RectElement]: https://svgwg.org/svg2-draft/shapes.html#RectElement
[DefsElement]: https://svgwg.org/svg2-draft/struct.html#DefsElement
[UseElement]: https://svgwg.org/svg2-draft/struct.html#UseElement
[ImageElement]: https://svgwg.org/svg2-draft/embedded.html#ImageElement
[SwitchElement]: https://svgwg.org/svg2-draft/struct.html#SwitchElement
[LineElement]: https://svgwg.org/svg2-draft/shapes.html#LineElement
[PolylineElement]: https://svgwg.org/svg2-draft/shapes.html#PolylineElement
[AElement]: https://svgwg.org/svg2-draft/linking.html#AElement
[ForeignObjectElement]: https://svgwg.org/svg2-draft/embedded.html#ForeignObjectElement
[SpecifyingPaint]: https://svgwg.org/svg2-draft/painting.html#SpecifyingPaint
[TermOutermostSVGElement]: https://svgwg.org/svg2-draft/struct.html#TermOutermostSVGElement
[InterfaceSVGElement]: https://svgwg.org/svg2-draft/types.html#InterfaceSVGElement
[InterfaceSVGTests]: https://svgwg.org/svg2-draft/types.html#InterfaceSVGTests
[BeginEvent]: https://svgwg.org/svg2-draft/interact.html#BeginEvent
[EndEvent]: https://svgwg.org/svg2-draft/interact.html#EndEvent
[RepeatEvent]: https://svgwg.org/svg2-draft/interact.html#RepeatEvent
[InterfaceSVGURIReference]: https://svgwg.org/svg2-draft/types.html#InterfaceSVGURIReference

[www-svg]: http://lists.w3.org/Archives/Public/www-svg/
[Copyright]: http://www.w3.org/Consortium/Legal/ipr-notice#Copyright
[w3c]: http://www.w3.org/
[www.csail.mit.edu]: http://www.csail.mit.edu/
[www.ercim.eu]: http://www.ercim.eu/
[www.keio.ac.jp]: http://www.keio.ac.jp/
[ev.buaa.edu.cn]: http://ev.buaa.edu.cn/
[Legal_Disclaimer]: http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer
[W3C_Trademarks]: http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks
[copyright-documents]: http://www.w3.org/Consortium/Legal/copyright-documents
[W3CTR]: http://www.w3.org/TR/
[SVGWG]: http://www.w3.org/Graphics/SVG/WG
[Activity]: http://www.w3.org/Graphics/Activity
[Interaction]: http://www.w3.org/Interaction/
[svg-2019.html]: https://www.w3.org/Graphics/SVG/svg-2019.html
[Graphics-SVG]: http://www.w3.org/Graphics/SVG/
[Patent-Policy-20040205]: http://www.w3.org/Consortium//
[pp-impl-1948-status]: http://www.w3.org/2004/01/pp-impl/19480/status
[def-essential]: http://www.w3.org/Consortium/Patent-Policy-20040205/#def-essential
[sec-Disclosure]: http://www.w3.org/Consortium/Patent-Policy-20040205/#sec-Disclosure
[Process-20140801]: http://www.w3.org/2014/Process-20140801/
[WD-css-animations-1-20120403]: http://www.w3.org/TR/2012/WD-css-animations-1-20120403/
[WD-css-transitions-1-20120403]: http://www.w3.org/TR/2012/WD-css-transitions-1-20120403/
[REC-SMIL3-20081201]: http://www.w3.org/TR/2008/REC-SMIL3-20081201/
[REC-smil-animation-20010904]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/
[AnimationFramework]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AnimationFramework
[AnimationModel]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AnimationModel
[OnBeginEventAttribute]: http://svgwg.org/svg2-draft/interact.html#OnBeginEventAttribute
[OnEndEventAttribute]: http://svgwg.org/svg2-draft/interact.html#OnEndEventAttribute
[OnRepeatEventAttribute]: http://svgwg.org/svg2-draft/interact.html#OnRepeatEventAttribute
[anim01a.png]: https://svgwg.org/specs/animations/images/anim01a.png
[anim01b.png]: https://svgwg.org/specs/animations/images/anim01b.png
[anim01c.png]: https://svgwg.org/specs/animations/images/anim01c.png
[anim01d.png]: https://svgwg.org/specs/animations/images/anim01d.png
[anim01.svg]: https://svgwg.org/specs/animations/images/anim01.svg
[SpecifyingAnimationTarget]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#SpecifyingAnimationTarget
[NT-Name]: http://www.w3.org/TR/xml/#NT-Name
[animns01.svg]: https://svgwg.org/specs/animations/images/animns01.svg
[lengths]: https://www.w3.org/TR/css3-values/#lengths
[colors]: https://www.w3.org/TR/css3-values/#colors
[integers]: https://www.w3.org/TR/css3-values/#integers
[numbers]: https://www.w3.org/TR/css3-values/#numbers
[typedef-transform-list]: http://dev.w3.org/csswg/css-transforms/#typedef-transform-list
[Timing-EvaluationOfBeginEndTimeLists]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-EvaluationOfBeginEndTimeLists
[Unifying]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Unifying
[HyperlinkSemantics]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#HyperlinkSemantics
[DurAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#DurAttribute
[EndActiveAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#EndActiveAttribute
[MinMax]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#MinMax
[RestartAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#RestartAttribute
[SpecifyingAnimationFunction]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#SpecifyingAnimationFunction
[RepeatCountAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#RepeatCountAttribute
[RepeatDurAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#RepeatDurAttribute
[Restart]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Restart
[FillAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#FillAttribute
[CalcModeAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#CalcModeAttribute
[ValuesAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#ValuesAttribute
[KeyTimesAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#KeyTimesAttribute
[adef-keySplines]: http://www.w3.org/TR/2008/REC-SMIL3-20081201/smil-animation.html#adef-keySplines
[KeySplinesAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#KeySplinesAttribute
[percentages]: https://www.w3.org/TR/css3-values/#percentages
[FromAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromAttribute
[AnimFuncValues]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AnimFuncValues
[TimingAndRealWorldClockTime]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#TimingAndRealWorldClockTime
[keySplines01.svg]: https://svgwg.org/specs/animations/images/keySplines01.svg
[keySplines02.svg]: https://svgwg.org/specs/animations/images/keySplines02.svg
[keySplines03.svg]: https://svgwg.org/specs/animations/images/keySplines03.svg
[keySplines04.svg]: https://svgwg.org/specs/animations/images/keySplines04.svg
[AdditiveAnim]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAnim
[Accumulate]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Accumulate
[FromToByAndAdditive]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#FromToByAndAdditive
[AdditiveAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AdditiveAttribute
[AccumulateAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#AccumulateAttribute
[animateElement]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#animateElement
[globaleventhandlers]: https://html.spec.whatwg.org/multipage/webappapis.html#globaleventhandlers
[documentandelementeventhandlers]: https://html.spec.whatwg.org/multipage/webappapis.html#documentandelementeventhandlers
[setElement]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#setElement
[29-svg-minutes.html]: http://www.w3.org/2012/03/29-svg-minutes.html
[actions_3319]: http://www.w3.org/Graphics/SVG/WG/track/actions/3319
[aria-activedescendant]: https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant
[aria-atomic]: https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
[aria-autocomplete]: https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete
[aria-busy]: https://www.w3.org/TR/wai-aria-1.1/#aria-busy
[aria-checked]: https://www.w3.org/TR/wai-aria-1.1/#aria-checked
[aria-colcount]: https://www.w3.org/TR/wai-aria-1.1/#aria-colcount
[aria-colindex]: https://www.w3.org/TR/wai-aria-1.1/#aria-colindex
[aria-colspan]: https://www.w3.org/TR/wai-aria-1.1/#aria-colspan
[aria-controls]: https://www.w3.org/TR/wai-aria-1.1/#aria-controls
[aria-current]: https://www.w3.org/TR/wai-aria-1.1/#aria-current
[aria-describedby]: https://www.w3.org/TR/wai-aria-1.1/#aria-describedby
[aria-details]: https://www.w3.org/TR/wai-aria-1.1/#aria-details
[aria-disabled]: https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
[aria-dropeffect]: https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect
[aria-errormessage]: https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage
[aria-expanded]: https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
[aria-flowto]: https://www.w3.org/TR/wai-aria-1.1/#aria-flowto
[aria-grabbed]: https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed
[aria-haspopup]: https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
[aria-hidden]: https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
[aria-invalid]: https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
[aria-keyshortcuts]: https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts
[aria-label]: https://www.w3.org/TR/wai-aria-1.1/#aria-label
[aria-labelledby]: https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby
[aria-level]: https://www.w3.org/TR/wai-aria-1.1/#aria-level
[aria-live]: https://www.w3.org/TR/wai-aria-1.1/#aria-live
[aria-modal]: https://www.w3.org/TR/wai-aria-1.1/#aria-modal
[aria-multiline]: https://www.w3.org/TR/wai-aria-1.1/#aria-multiline
[aria-multiselectable]: https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable
[aria-orientation]: https://www.w3.org/TR/wai-aria-1.1/#aria-orientation
[aria-owns]: https://www.w3.org/TR/wai-aria-1.1/#aria-owns
[aria-placeholder]: https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder
[aria-posinset]: https://www.w3.org/TR/wai-aria-1.1/#aria-posinset
[aria-pressed]: https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
[aria-readonly]: https://www.w3.org/TR/wai-aria-1.1/#aria-readonly
[aria-relevant]: https://www.w3.org/TR/wai-aria-1.1/#aria-relevant
[aria-required]: https://www.w3.org/TR/wai-aria-1.1/#aria-required
[aria-roledescription]: https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription
[aria-rowcount]: https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount
[aria-rowindex]: https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex
[aria-rowspan]: https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan
[aria-selected]: https://www.w3.org/TR/wai-aria-1.1/#aria-selected
[aria-setsize]: https://www.w3.org/TR/wai-aria-1.1/#aria-setsize
[aria-sort]: https://www.w3.org/TR/wai-aria-1.1/#aria-sort
[aria-valuemax]: https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax
[aria-valuemin]: https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin
[aria-valuenow]: https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow
[aria-valuetext]: https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext
[AnimateElement]: https://svgwg.org/specs/animations/#AnimateElement
[TargetElement]: https://svgwg.org/specs/animations/#TargetElement
[HrefAttribute]: https://svgwg.org/specs/animations/#HrefAttribute
[BeginValueListSyntax]: https://svgwg.org/specs/animations/#BeginValueListSyntax
[BeginAttribute]: https://svgwg.org/specs/animations/#BeginAttribute
[Timing-DefiningSimpleDur]: http://www.w3.org/TR/2008/REC-SMIL3-20081201/smil-timing.html#Timing-DefiningSimpleDur
[Timing-ComputingActiveDur]: http://www.w3.org/TR/2008/REC-SMIL3-20081201/smil-timing.html#Timing-ComputingActiveDur
[dom-node-removechild]: http://www.w3.org/TR/2012/WD-dom-20120405/#dom-node-removechild
[Timing-HyperlinksAndTiming]: http://www.w3.org/TR/2008/REC-SMIL3-20081201/smil-timing.html#Timing-HyperlinksAndTiming
[AnimateTransformElement]: https://svgwg.org/specs/animations/#AnimateTransformElement
[animateMotionElement]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#animateMotionElement
[MotionCalcModeAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#MotionCalcModeAttribute
[current-transformation-matrix]: https://www.w3.org/TR/css-transforms-1/#current-transformation-matrix
[MotionOriginAttribute]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#MotionOriginAttribute
[animMotion01b.png]: https://svgwg.org/specs/animations/images/animMotion01b.png
[animMotion01c.png]: https://svgwg.org/specs/animations/images/animMotion01c.png
[animMotion01.svg]: https://svgwg.org/specs/animations/images/animMotion01.svg
[cumulative-transform-graph-1.png]: https://svgwg.org/specs/animations/images/cumulative-transform-graph-1.png
[ClipPathElement]: https://drafts.fxtf.org/css-masking-1/#ClipPathElement
[MaskElement]: https://drafts.fxtf.org/css-masking-1/#MaskElement
[angles]: https://www.w3.org/TR/css-values/#angles
[frequency]: https://www.w3.org/TR/css3-values/#frequency
[time]: https://www.w3.org/TR/css3-values/#time
[dom01a.png]: https://svgwg.org/specs/animations/images/dom01a.png
[dom01b.png]: https://svgwg.org/specs/animations/images/dom01b.png
[dom01c.png]: https://svgwg.org/specs/animations/images/dom01c.png
[dom01.svg]: https://svgwg.org/specs/animations/images/dom01.svg
[T20-39-02]: http://www.w3.org/2012/03/29-svg-irc#T20-39-02
[T20-23-57]: http://www.w3.org/2012/03/29-svg-irc#T20-23-57
[sec-starttags]: http://www.w3.org/TR/2006/REC-xml-20060816/#sec-starttags
[syntax-start-tag]: http://www.w3.org/TR/html5/syntax.html#syntax-start-tag
[DOMSupport]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#DOMSupport
[interface-event]: https://dom.spec.whatwg.org/#interface-event
[windowproxy]: https://html.spec.whatwg.org/multipage/window-object.html#windowproxy
[window]: https://html.spec.whatwg.org/multipage/window-object.html#window
[dom]: http://www.w3.org/TR/dom/
[eventhandler]: https://html.spec.whatwg.org/multipage/webappapis.html#eventhandler
[idl-DOMException]: https://heycam.github.io/webidl/#idl-DOMException
[Timing-BeginEnd-InstanceTimesLists]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/#Timing-BeginEnd-InstanceTimesLists
[REC-DOM-Level-2-Views-20001113]: http://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/
[DOM-Level-2-Views]: http://www.w3.org/TR/DOM-Level-2-Views/
[WD-dom-20140204]: http://www.w3.org/TR/2014/WD-dom-20140204/
[html5]: http://www.w3.org/TR/html5/
[REC-html5-20141028]: http://www.w3.org/TR/2014/REC-html5-20141028/
[html]: http://www.w3.org/TR/html/
[catalogue_detail?csnumber=40874]: http://www.iso.org/iso/catalogue_detail?csnumber=40874
[rfc2119]: http://tools.ietf.org/html/rfc2119
[smil]: http://www.w3.org/TR/smil/
[2001/REC-smil-animation-20010904]: http://www.w3.org/TR/2001/REC-smil-animation-20010904/
[smil-animation]: http://www.w3.org/TR/smil-animation/
[pub6168]: https://webstore.iec.ch/publication/6168
[srgb.xalter]: http://www.color.org/chardata/rgb/srgb.xalter
[2015/WD-SVG2-20150409]: http://www.w3.org/TR/2015/WD-SVG2-20150409/
[SVG2]: http://www.w3.org/TR/SVG2/
[REC-xml-20081126]: http://www.w3.org/TR/2008/REC-xml-20081126/
[xml]: http://www.w3.org/TR/xml/
[charmod]: http://www.w3.org/TR/charmod/
[css-transitions-1]: http://www.w3.org/TR/css-transitions-1/