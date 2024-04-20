#!/usr/bin/env bash

# find | grep '.rst'
while read rst; do
    if [[ -f "$rst" ]]; then
        echo cat $rst >> $0 
    fi
done <<EOF
./index.rst

=========
/Group B
=========

./basic/mathjax.rst
./basic/accessibility.rst
./basic/mathematics.rst
./basic/community.rst
./basic/bugs.rst
./basic/a11y-extensions.rst
./basic/explorer-commands.rst
./basic/legacy-accessibility.rst

=========
/Group W
=========

./web/start.rst
./web/configuration.rst
./web/components/index.rst
./web/components/combined.rst
./web/components/input.rst
./web/components/output.rst
./web/components/accessibility.rst
./web/components/misc.rst
./web/typeset.rst
./web/hosting.rst
./web/webpack.rst
./web/examples.rst

=========
/Group S
=========

./server/start.rst
./server/overview.rst
./server/examples.rst
./server/components.rst
./server/preload.rst
./server/direct.rst

=========
/Group I
=========

./input/tex/index.rst
./input/tex/differences.rst
./input/tex/delimiters.rst
./input/tex/html.rst
./input/tex/macros.rst
./input/tex/eqnumbers.rst
./input/tex/extensions.rst
./input/tex/macros/index.rst
./input/tex/extensions/index.rst
./input/tex/extensions/action.rst
./input/tex/extensions/ams.rst
./input/tex/extensions/amscd.rst
./input/tex/extensions/autobold.rst
./input/tex/extensions/autoload-all.rst
./input/tex/extensions/autoload.rst
./input/tex/extensions/bbox.rst
./input/tex/extensions/begingroup.rst
./input/tex/extensions/boldsymbol.rst
./input/tex/extensions/braket.rst
./input/tex/extensions/bussproofs.rst
./input/tex/extensions/cancel.rst
./input/tex/extensions/cases.rst
./input/tex/extensions/centernot.rst
./input/tex/extensions/color.rst
./input/tex/extensions/colortbl.rst
./input/tex/extensions/colorv2.rst
./input/tex/extensions/configmacros.rst
./input/tex/extensions/empheq.rst
./input/tex/extensions/enclose.rst
./input/tex/extensions/extpfeil.rst
./input/tex/extensions/gensymb.rst
./input/tex/extensions/html.rst
./input/tex/extensions/mathtools.rst
./input/tex/extensions/mediawiki-texvc.rst
./input/tex/extensions/mhchem.rst
./input/tex/extensions/newcommand.rst
./input/tex/extensions/noerrors.rst
./input/tex/extensions/noundefined.rst
./input/tex/extensions/physics.rst
./input/tex/extensions/require.rst
./input/tex/extensions/setoptions.rst
./input/tex/extensions/tagformat.rst
./input/tex/extensions/textcomp.rst
./input/tex/extensions/textmacros.rst
./input/tex/extensions/unicode.rst
./input/tex/extensions/upgreek.rst
./input/tex/extensions/verb.rst
./input/asciimath.rst
./input/mathml.rst

=========
/Group O
=========

./output/index.rst
./output/lazy.rst
./output/linebreaks.rst
./output/fonts.rst
./output/browser.rst
./output/html.rst
./output/mathml.rst
./output/svg.rst

=========
/Group C
=========

./options/index.rst
./options/input/index.rst
./options/input/asciimath.rst
./options/input/mathml.rst
./options/input/tex.rst
./options/output/index.rst
./options/output/chtml.rst
./options/output/svg.rst
./options/document.rst
./options/accessibility.rst
./options/menu.rst
./options/safe.rst
./options/startup/index.rst
./options/startup/loader.rst
./options/startup/startup.rst

=========
/Group A
=========

./advanced/typeset.rst
./advanced/extensions.rst
./advanced/model.rst
./advanced/synchronize.rst

./api/index.rst
./api/components.rst
./api/direct.rst

./misc/faq.rst
./misc/badges.rst
./misc/articles.rst

=========
/Group U
=========

./upgrading/v2.rst
./upgrading/index.rst
./upgrading/whats-new-3.0.rst
./upgrading/whats-new-3.1.rst
./upgrading/whats-new-3.2.rst
./upgrading/earlier/index.rst
./upgrading/earlier/jsMath.rst
./upgrading/earlier/upgrade.rst
./upgrading/earlier/whats-new-1.1.rst
./upgrading/earlier/whats-new-2.0.rst
./upgrading/earlier/whats-new-2.1.rst
./upgrading/earlier/whats-new-2.2.rst
./upgrading/earlier/whats-new-2.3.rst
./upgrading/earlier/whats-new-2.4.rst
./upgrading/earlier/whats-new-2.5.rst
./upgrading/earlier/whats-new-2.6.rst
./upgrading/earlier/whats-new-2.7.rst

EOF

exit

==============================================================================

/MathJax Documentation - Readme
===============================

[![Documentation Status](https://readthedocs.org/projects/mathjax/badge/?version=latest)](https://docs.mathjax.org)


Beautiful and accessible math in all browsers.
----------------------------------------------

MathJax is an open-source JavaScript display engine for LaTeX, MathML, and
AsciiMath notation that works in all modern browsers, as well as server-side in node applications.  It was designed with
the goal of consolidating the recent advances in web technologies into a
single, definitive, math-on-the-web platform supporting the major browsers
and operating systems.  It requires no setup on the part of the user (no
plugins to download or software to install), so the page author can write
web documents that include mathematics and be confident that users will be
able to view it naturally and easily.  Simply include MathJax and some
mathematics in a web page, and MathJax does the rest.

See <http://www.mathjax.org/> or <https://github.com/mathjax/MathJax/> for additional details.

Beautiful documentation.
---------

The MathJax installation and usage documentation is available in this repository. The documents are also
available on the MathJax web site online at <http://docs.mathjax.org>.  Please help us improve the documentation!
You can use the editor feature on github to simplify this.
Community
---------

The main MathJax website is <https://www.mathjax.org>, and it includes
announcements and other important information.  MathJax is maintained and
distributed on GitHub at <https://github.com/mathjax/MathJax>, and the source code is housed at <https://github.com/mathjax/MathJax-src>.  A user forum
for asking questions and getting assistance is hosted at Google, and the
bug tracker is hosted at GitHub:

Bug tracker:         <https://github.com/mathjax/MathJax/issues>  
MathJax-Users Group: <https://groups.google.com/group/mathjax-users>

Before reporting a bug, please check that it has not already been reported.
Please use the bug tracker for reporting bugs rather than the help forum, and use the forum rather than the bug tracker for asking usage questions.

License
-------

Just like MathJax, this documentation is license under Apache License, Version 2.0.

::

    > Copyright (c) 2009-2020 The MathJax Consortium
    >
    > Licensed under the Apache License, Version 2.0 (the "License");
    > you may not use this file except in compliance with the License.
    > You may obtain a copy of the License at
    >
    >  http://www.apache.org/licenses/LICENSE-2.0
    >
    > Unless required by applicable law or agreed to in writing, software
    > distributed under the License is distributed on an "AS IS" BASIS,
    > WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    > See the License for the specific language governing permissions and
    > limitations under the License.

############################
/MathJax Documentation Index
############################

MathJax is an open-source JavaScript display engine for LaTeX,
MathML, and AsciiMath notation that works in all modern browsers,
with built-in support for assistive technology like screen readers.

Version 3.0 of MathJax is a complete rewrite of MathJax from the
ground up, and its usage and configuration is significantly different
from that of MathJax version 2.  Use the green menu at the bottom of
the sidebar on the left to access the version 2 documentation if you
need it.

.. _toc-basics:
.. toctree::
    :caption: The Basics
    :name: basics
    :maxdepth: 1

    What is MathJax?                  <basic/mathjax>
    MathJax Accessibility Features    <basic/accessibility>
    Writing Mathematics for MathJax   <basic/mathematics>
    The MathJax Community             <basic/community>
    Reporting Issues with MathJax     <basic/bugs>
    
.. _toc-mathjax-web:
.. toctree::
   :caption: Including MathJax in a Web Page
   :name: browser-components
   :maxdepth: 1
    
    Getting Started with Components   <web/start>
    Configuring and Loading MathJax   <web/configuration>
    The MathJax Components            <web/components/index>
    Typesetting and Converting Math   <web/typeset>
    Hosting Your Own Copy of MathJax  <web/hosting>
    Making a Custom Build of MathJax  <web/webpack>
    Examples in a Browser             <web/examples>

.. _toc-mathjax-node:
.. toctree::
   :caption: MathJax on a Server Using NodeJS
   :name: server-nodejs
   :maxdepth: 2

   Getting Started with Node          <server/start>
   Three Ways to Use MathJax in Node  <server/overview>
   Examples in Node                   <server/examples>

.. _toc-mathjax-input:
.. toctree::
   :caption: MathJax Input
   :maxdepth: 1

   TeX and LaTeX Support              <input/tex/index>
   MathML Support                     <input/mathml>
   AsciiMath Support                  <input/asciimath>
   
.. _toc-mathjax-output:
.. toctree::
   :caption: MathJax Output
   :maxdepth: 2
   :titlesonly:

   Output Formats                     <output/index>
   Lazy Typesetting                   <output/lazy>
   Line Breaking                      <output/linebreaks>
   Font Support                       <output/fonts>
   Browser Support                    <output/browser>

.. _toc-configuration-options:
.. toctree::
    :caption: Configuration Options
    :name: configuration-options
    :maxdepth: 2

    Configuring MathJax               <options/index>

.. _toc-advanced-topics:
.. toctree::
    :caption: Advanced topics
    :name: advanced-topics
    :maxdepth: 1

    MathJax in Dynamic Content        <advanced/typeset>
    Custom Extensions                 <advanced/extensions>
    The MathJax Processing Model      <advanced/model>
    Synchronizing Your Code with MathJax <advanced/synchronize>

.. _toc-mathjax-api:
.. toctree::
    :caption: The MathJax API
    :name: api
    :maxdepth: 2

    Using the MathJax API             <api/index>

.. _toc-miscellaneous:
.. toctree::
    :caption: Miscellaneous
    :name: miscellaneous
    :maxdepth: 1

    MathJax FAQ                       <misc/faq>
    MathJax Badges and Logo           <misc/badges>
    Articles and Presentations        <misc/articles>

.. _toc-mathjax-updates:
.. toctree::
    :caption: MathJax Updates
    :name: mathjax-updates
    :maxdepth: 2
    :titlesonly:

    Upgrading from Version 2.x        <upgrading/v2>
    What's New                        <upgrading/index>

------

.. image:: https://img.shields.io/badge/powered%20by-NumFOCUS-orange.svg?style=flat&amp;colorA=E1523D&amp;colorB=007D8A
   :alt: powered-by NumFocus
   :target: http://www.numfocus.org

MathJax is a Sponsored Project of NumFOCUS, a 501(c)(3) nonprofit
charity in the United States. NumFOCUS provides MathJax with fiscal,
legal, and administrative support to help ensure the health and
sustainability of the project. Visit `numfocus.org <http://www.numfocus.org>`__ for more
information.

------

This version of the documentation was built |today|.

|-----|
.. _what-is-MathJax:

####################
/B. What is MathJax?
####################

MathJax is an open-source JavaScript display engine for LaTeX, MathML,
and AsciiMath notation that works in all modern browsers.  It was
designed with the goal of consolidating the recent advances in web
technologies into a single, definitive, math-on-the-web platform
supporting the major browsers and operating systems, including those
on mobile devices.  It requires no setup on the part of the user (no
plugins to download or software to install), so the page author can
write web documents that include mathematics and be confident that
users will be able to view it naturally and easily.  One simply
includes MathJax and some mathematics in a web page, and MathJax does
the rest.

MathJax uses web-based fonts to produce high-quality typesetting that
scales and prints at full resolution, unlike mathematics included as
bitmapped images.  With MathJax, mathematics is text-based rather than
image-based, and so it is available for search engines, meaning that
your equations can be searchable, just like the text of your pages.
MathJax allows page authors to write formulas using TeX and LaTeX
notation, `MathML <http://www.w3.org/TR/MathML3>`__ (a World Wide Web
Consortium standard for representing mathematics in XML format), or
`AsciiMath <http://asciimath.org/>`__ notation.  MathJax can generate
output in several formats, including HTML with CSS styling, or
scalable vector graphics (SVG) images.

MathJax includes the ability to generate speakable text versions of
your mathematical expressions that can be used with screen readers,
providing accessibility for the visually impaired.  The assistive
support in MathJax also includes an interactive expression explorer
that helps these users to "walk through" an expression one piece at a
time, rather than having to listen to a complex expression all at
once, and the ability to "collapse" portions of the expressions to
allow a more simplified expression to be read, and only expanded if
more detail is desired.

MathJax is modular, so it can load components only when necessary, and
can be extended to include new capabilities as needed.  MathJax is
highly configurable, allowing authors to customize it for the special
requirements of their web sites.  Unlike earlier versions of MathJax,
version 3 can be packaged into a single file, or included as part of
larger bundles for those sites that manage their javascript assets in
that way.

Finally, MathJax has a rich application programming interface (API)
that can be used to make the mathematics on your web pages interactive
and dynamic.  Version 3 has been rewritten in ES6 using Typescript (a
version of javascript that includes type-checking and the ability to
transpile to ES5).  It was designed to be used as easily on a server
(as part of a ``node.js`` application) as it is in a browser.  This makes
pre-processing of web pages containing mathematics much easier than
with version 2, so web sites can perform all the math processing once
up front, rather than having the browser do it each time the page is
viewed.

|-----|
.. _accessibility:

##########################
/B. Accessibility Features
##########################

MathJax's mission is to provide the best tools for mathematics on the
web. Naturally, this means for everyone and thus accessibility is an
important concern for us.


.. _mathjax-ui-a11y:

MathJax User Interface
======================

The MathJax user interface currently consists of the :ref:`MathJax
Menu <menu-options>` and the various MathJax messages, such as
syntax error messages from the TeX input processor.

The user interface for version 2 was localized to over 20 languages
and many more partial localizations thanks to the fantastic support of
`the community at TranslateWiki.net
<https://translatewiki.net/wiki/Translating:MathJax>`__.  Localization
is not yet available in version 3, but is on the roadmap for a future
version.

The MathJax Menu follows WCAG 2.0 guidelines. Each MathJax fragment is
included in the tab order; the menu can be triggered via the space or
menu key; and navigation in the menu is possible using the arrow keys.


MathJax Accessibility Extensions
================================

The :ref:`MathJax Accessibility extensions <a11y-extensions>` provide
several tools and features that enable universal rendering of
mathematics on the web. They enhance rendering both visually and
aurally. In particular:

- An innovative responsive rendering of mathematical content through collapsing
  and exploration of subexpressions.
- An aural rendering tool providing on-the-fly speech-text for mathematical
  content and its subexpressions using various rule sets.
- Tactile rendering tool enabling Nemeth Braille output on a connected Braille
  displays.
- An exploration tool, allowing for meaningful exploration of mathematical
  content including multiple highlighting features, magnification and
  synchronized aural rendering.

The Accessibility Extensions support the widest selection of browsers,
operating systems, and assistive technologies as they only require
the use of well-supported web standards such as WAI-ARIA, in
particular labels and live regions.

The Accessibility Extensions can be enabled using the MathJax
Contextual Menu (right-click on any typeset expression), and are
loaded automatically when enabled.  The contextual menu code is
included in all the combined MathJax components, such as ``tex-chtml``
and ``mml-svg``.  If you are making a custom configuration, you can
include ``ui/menu`` to enable the contextual menu, or you can include
any of the :ref:`a11y extensions <accessibility-components>` explicitly.

See the :ref:`accessibility-options` section for details about how to
configure the extensions.

.. _screenreader-support:

Screen Reader Support
=====================

Some screen readers support MathML, MathJax's internal format.
Screenreaders like ChromeVox, JAWS (on IE), and TextHelp support
MathJax directly (most only version 2); other screenreaders are
supported by the ``assistive-mml`` extension as of version 3.0.1.

The ``assistive-mml`` extension embeds visually hidden MathML alongside
MathJax's visual rendering while hiding the visual rendering from
assistive technology (AT) such as screenreaders. This allows most
MathML-enabled screenreaders to read out the underlying
mathematics. It's important to note that Presentation MathML is
usually not expressive enough to voice the mathematics properly in all
circumstances, which is why screenreaders have to rely on heuristics
to analyze the MathML semantically.

The quality of MathML support in screenreaders varies greatly, with
different levels of MathML feature support, different speech rule
sets, and different voicing technologies.

The expected result for MathJax given the current state of technology
is roughly the following:

* The visually-hidden MathML is read out correctly by AT (i.e., not
  just the character strings but, e.g., ``<mfrac>`` leads to
  "fraction"; this will vary with the MathML support of the
  screenreader).
* The visual rendering is not read out by AT
* The MathJax Menu triggers AT to say "clickable" before each math element.

  * This allows keyboard users to enter the MathJax Menu via space or menu key.

* The visually hidden MathML does not get an outline (usually placed
  at an odd location due to the target of the outline being visually
  hidden).

  * except in iOS VoiceOver, where this allows the user to hook into VoiceOver's exploration features.

-----

More Information
================

.. toctree::

   Accessibility extensions                <a11y-extensions>
   Available explorer keyboard commands    <explorer-commands>
   Legacy Assistive Support in v2          <legacy-accessibility>

|-----|
.. _basic-mathematics:

###################################
/B. Writing Mathematics for MathJax
###################################


.. _math-in-html:

Putting mathematics in a web page
=================================

To put mathematics in your web page, you can use TeX and LaTeX
notation, MathML notation, AsciiMath notation, or a combination of all
three within the same page; the MathJax configuration tells MathJax
which you want to use, and how you plan to indicate the mathematics
when you are using TeX/LaTeX or AsciiMath notation.  These three
formats are described in more detail below.


.. _tex-input:

TeX and LaTeX input
-------------------

Mathematics that is written in TeX or LaTeX format is indicated using
*math delimiters* that surround the mathematics, telling MathJax what
part of your page represents mathematics and what is normal text.
There are two types of equations: ones that occur within a paragraph
(in-line mathematics), and larger equations that appear separated from
the rest of the text on lines by themselves (displayed mathematics).

The default math delimiters are ``$$...$$`` and ``\[...\]`` for
displayed mathematics, and ``\(...\)`` for in-line mathematics.  Note
in particular that the ``$...$`` in-line delimiters are **not** used
by default.  That is because dollar signs appear too often in
non-mathematical settings, which could cause some text to be treated
as mathematics unexpectedly.  For example, with single-dollar
delimiters, "... the cost is $2.50 for the first one, and $2.00 for
each additional one ..." would cause the phrase "2.50 for the first
one, and" to be treated as mathematics since it falls between dollar
signs.  See the section on :ref:`TeX and LaTeX Math Delimiters
<tex-delimiters>` for more information on using dollar signs as
delimiters.

Here is a complete sample page containing TeX mathematics (see the
`MathJax Web Demos Repository <https://github.com/mathjax/MathJax-demos-web>`__
for more).

.. code-block:: html

    <!DOCTYPE html>
    <html>
    <head>
    <title>MathJax TeX Test Page</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>
    </head>
    <body>
    When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are
    $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
    </body>
    </html>

Since the TeX notation is part of the text of the page, there are some
caveats that you must keep in mind when you enter your mathematics. In
particular, you need to be careful about the use of less-than signs,
since those are what the browser uses to indicate the start of a tag
in HTML. Putting a space on both sides of the less-than sign should be
sufficient, but see :ref:`TeX and LaTeX support <tex-support>` for
more details.

If you are using MathJax within a blog, wiki, or other content
management system, the markup language used by that system may
interfere with the TeX notation used by MathJax.  For example, if your
blog uses Markdown notation for authoring your pages, the underscores
used by TeX to indicate subscripts may be confused with the use of
underscores by Markdown to indicate italics, and the two uses may
prevent your mathematics from being displayed.  See :ref:`TeX and
LaTeX support <tex-support>` for some suggestions about how to deal
with the problem.

There are a number of extensions for the TeX input processor that are
loaded by combined components that include the TeX input format (e.g.,
``tex-chtml.js``), and others that are loaded automatically when
needed.  See :ref:`TeX and LaTeX Extensions <tex-extensions>` for
details on TeX extensions that are available.


.. _mathml-input:

MathML input
------------

For mathematics written in MathML notation, you mark your mathematics
using standard ``<math>`` tags, where ``<math display="block">``
represents displayed mathematics and ``<math display="inline">`` or
just ``<math>`` represents in-line mathematics.

MathML notation will work with MathJax in HTML files, not just XHTML
files, even in older browsers and that the web page need not be served
with any special MIME-type.  Note, however, that in HTML (as opposed to
XHTML), you should **not** include a namespace prefix for your ``<math>``
tags; for example, you should not use ``<m:math>`` except in an XHTML file
where you have tied the ``m`` namespace to the MathML DTD by adding the
``xmlns:m="http://www.w3.org/1998/Math/MathML"`` attribute to your file's
``<html>`` tag.

In order to make your MathML work in the widest range of situations,
it is recommended that you include the
``xmlns="http://www.w3.org/1998/Math/MathML"`` attribute on all
``<math>`` tags in your document (and this is preferred to the use of
a namespace prefix like ``m:`` above, since those are deprecated in
HTML5), although this is not strictly required.

Here is a complete sample page containing MathML mathematics (see the
`MathJax Web Demos Repository <https://github.com/mathjax/MathJax-demos-web>`__
for more).

.. code-block:: html

    <!DOCTYPE html>
    <html>
    <head>
    <title>MathJax MathML Test Page</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js">
    </script>
    </head>
    <body>

    <p>
    When
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>a</mi><mo>&#x2260;</mo><mn>0</mn>
    </math>,
    there are two solutions to
    <math xmlns="http://www.w3.org/1998/Math/MathML">
      <mi>a</mi><msup><mi>x</mi><mn>2</mn></msup>
      <mo>+</mo> <mi>b</mi><mi>x</mi>
      <mo>+</mo> <mi>c</mi> <mo>=</mo> <mn>0</mn>
    </math>
    and they are
    <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
      <mi>x</mi> <mo>=</mo>
      <mrow>
        <mfrac>
          <mrow>
            <mo>&#x2212;</mo>
            <mi>b</mi>
            <mo>&#x00B1;</mo>
            <msqrt>
              <msup><mi>b</mi><mn>2</mn></msup>
              <mo>&#x2212;</mo>
              <mn>4</mn><mi>a</mi><mi>c</mi>
            </msqrt>
          </mrow>
          <mrow>
            <mn>2</mn><mi>a</mi>
          </mrow>
        </mfrac>
      </mrow>
      <mtext>.</mtext>
    </math>
    </p>

    </body>
    </html>

When entering MathML notation in an HTML page (rather than an XHTML
page), you should **not** use self-closing tags, as these are not part
of HTML, but should use explicit open and close tags for all your math
elements.  For example, you should use

.. code-block:: html

    <mspace width="5pt"></mspace>

rather than ``<mspace width="5pt" />`` in an HTML document.  If you
use the self-closing form, some browsers will not build the math tree
properly, and MathJax will receive a damaged math structure, which
will not be rendered as the original notation would have been.
Typically, this will cause parts of your expression to not be
displayed.  Unfortunately, there is nothing MathJax can do about that,
since the browser has incorrectly interpreted the tags long before
MathJax has a chance to work with them.

See the :ref:`MathML <mathml-support>` page for more on MathJax's
MathML support.


.. _asciimath-input:

AsciiMath input
---------------

MathJax v2.0 introduced a new input format, AsciiMath notation, by
incorporating `ASCIIMathML <https://en.wikipedia.org/wiki/ASCIIMathML>`_.
This input processor has not been fully ported to MathJax version 3
yet, but there is a version of it that uses the legacy version 2 code
to patch it into MathJax version 3.  None of the combined components
currently include it, so you would need to specify it explicitly in
your MathJax configuration in order to use it.  See the
:ref:`AsciiMath <asciimath-support>` page for more details.

By default, you mark mathematical expressions written in AsciiMath by
surrounding them in "back-ticks", i.e., ```...```.

Here is a complete sample page containing AsciiMath notation:

.. code-block:: html

    <!DOCTYPE html>
    <html>
    <head>
    <title>MathJax AsciiMath Test Page</title>
    <script>
    MathJax = {
      loader: {load: ['input/asciimath', 'output/chtml']}
    }
    </script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
    </script>
    <body>

    <p>When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and
    they are</p>
    <p style="text-align:center">
      `x = (-b +- sqrt(b^2-4ac))/(2a) .`
    </p>

    </body>
    </html>

See the :ref:`AsciiMath support <AsciiMath-support>` page for more on
MathJax's AsciiMath support and how to configure it.


.. _math-in-strings:

Putting Math in Javascript Strings
==================================

If your are using javascript to process mathematics, and need to put a
TeX or LaTeX expression in a string literal, you need to be aware that
javascript uses the backslash (``\``) as a special character in
strings.  Since TeX uses the backslash to indicate a macro name, you
often need backslashes in your javascript strings.  In order to
achieve this, you must double all the backslashes that you want to
have as part of your javascript string.  For example,

.. code-block:: javascript

   var math = '\\frac{1}{\\sqrt{x^2 + 1}}';

This can be particularly confusing when you are using the LaTeX macro
`\\`, which must both be doubled, as `\\\\`.  So you would do

.. code-block:: javascript

   var array = '\\begin{array}{cc} a & b \\\\ c & d \\end{array}';

to produce an array with two rows.

|-----|
.. _MathJax-community:

#########################
/B. The MathJax Community
#########################

If you are an active MathJax user, you may wish to become involved in
the wider community of MathJax users.  The MathJax project maintains
forums where users can ask questions about how to use MathJax, make
suggestions about future features for MathJax, and present their own
solutions to problems that they have faced.  There is also a
bug-tracking system where you can report errors that you have found
with MathJax in your environment.


.. _community-forums:

Mailing Lists
=============

If you need help using MathJax or you have solutions you want to
share, please post to the `MathJax Users Google Group
<https://groups.google.com/forum/#!forum/mathjax-users>`__. We try
hard to answer questions quickly, and users are welcome to help with
that as well. Also, users can post code snippets showing how they have
used MathJax, so it may be a good place to find the examples you are
looking for.

If you want to discuss MathJax development, please use the `MathJax
Dev Google Group
<https://groups.google.com/forum/#!forum/mathjax-dev>`_. We made this
group to discuss anything beyond what an end-user might be interested
in, so if you have any suggestions or questions about MathJax
performance, technology, or design, feel free to submit it to the
group.

The community is only as good as the users who participate, so if you
have something to offer, please take time to make a post on one of our
groups.


.. _community-tracker:

Issue tracking
==============

Found a bug or want to suggest an improvement? Post it to our `issue
tracker <http://github.com/mathjax/MathJax/issues>`_. We monitor the
tracker closely, and work hard to respond to problems quickly.

Before you create a new issue, however, please search the issues to
see if it has already been reported. You could also be using an
outdated version of MathJax, so be sure to :ref:`upgrade your copy
<mathjax-git>` to verify that the problem persists in the
latest version.

See the section on :ref:`Reporting Issues <reporting-issues>` for more
detailed instructions.


.. _community-documentation:

Documentation
=============

The source for this documentation can be found `on github
<https://github.com/mathjax/mathjax-docs/>`__.  You can file bug
reports on the documentation's `bug tracker
<https://github.com/mathjax/mathjax-docs/issues>`__ and actively
contribute to the public `documentation wiki
<https://github.com/mathjax/mathjax-docs/wiki>`__.


.. _badge:

"Powered by MathJax"
====================

If you are using MathJax and want to show your support, please
consider using our :ref:`"Powered by MathJax" badge <mathjax-badges>`.

|-----|
.. _reporting-issues:

####################
/B. Reporting Issues
####################

If you come across a problem with MathJax, please report it so that the
development team and other users are aware and can look into it. It is
important that you report your problem following the steps outlined here
because this will help us to rapidly establish the nature of the problem
and work towards a solution effectively.

To report a problem, please follow these steps:

-  Have you cleared your browser cache, quit your browser, and restarted
   it? If not, please do so first and check if the problem persists.
   `These instructions <http://www.wikihow.com/Clear-Your-Browser's-Cache>`__
   tell you how to clear your cache on the major browsers.
   
-  Have you turned off other extensions and plugins in your browser, and
   restarted it?
   
-  Have a look at the math rendering examples on
   `www.mathjax.org <https://www.mathjax.org>`__ to see if you experience
   problems there as well. This might help you to determine the nature
   of your problem.
   
-  If possible, check whether the problem has been solved in the latest
   MathJax release.
   
-  Search through the `MathJax User
   Group <https://groups.google.com/forum/#!forum/mathjax-users>`__ and the
   `MathJax issue tracker <https://github.com/mathjax/MathJax/issues>`__ to see if
   anyone else has come across the problem before.
   
-  Found a real and new problem? Please report it to the `MathJax issue
   tracker <https://github.com/mathjax/MathJax/issues>`__ including the
   following information:

   -  A detailed description of the problem. What exactly is not working
      as you expected? What do you see?
      
   -  The MathJax version you are working with, your operating system,
      and full browser information including all version information.
      
   -  If at all possible, a pointer to a webpage that is publicly
      available and exhibits the problem. This makes sure that we can
      reproduce the problem and test possible solutions.  You can
      create minimal examples using such tools as `jsfiddle
      <https://jsfiddle.net/>`__, `jsbin <https://jsbin.com>`__,
      `codepen <https://codepen.io>`__, or `codesandbox
      <https://codesandbox.io>`__.


|-----|
.. |bkey| raw:: html

   <kbd>

.. |ekey| raw:: html

   </kbd>
                
.. raw:: html

  <style>
  kbd  {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }
  </style>
  <br/>


.. _a11y-extensions:

###########################
/B. Accessibility Extension
###########################

MathJax offers accessibility support via its own built-in extension that
provides a choice of support options as well as a high degree of
personalization.  The extension can be activated either via the context menu,
which itself is fully accessible, or by default using configuration
options. Similarly its various features and options are best selected via the
:ref:`MathJax Menu <menu-options>` or programmatically using the
:ref:`accessibility options <accessibility-options>`.  We discuss
the different features of the accessibility tool at the hand of the context
menu, roughly in the order in which they appear.

Most features of the Accessibility extensions are based on technology provided by
the `Speech Rule Engine <https://speechruleengine.org>`__. For some more details
and information please also see there.

MathJax's supports the widest selection of browsers, operating systems, and
assistive technologies as they only require the use of well-supported web
standards such as WAI-ARIA, in particular labels and live regions.

Interactive Exploration
=======================

The main feature is an interactive exploration mode that allows a reader to
traverse and explore sub-expressions step-by-step. The explorer is activated in
the context menu by checking the `Activate` item in the `Accessibility`
sub-menu.


Once a math expression is focused, the explorer can be started by pressing the
|bkey| Enter |ekey| key. The cursor keys then allow traversal of the expression.


.. toctree::
   :maxdepth: 1
   
   Available keyboard commands <explorer-commands>


During traversal, focused sub-expressions are highlighted and optionally
magnified. In addition, an aural rendering is pushed to a screen reader, if one
is available, and a tactile rendering can be read on a Braille display, if one
is connected.


Speech & Braille Support
========================

Both aural and tactile rendering can be controlled via the options in the
`Speech` sub-menu. `Speech Output` and `Braille Output`, respectively,
control whether or not speech or Braille output is generated. If speech is
generated, it is by default also displayed in `Speech Subtitles`, which can be
switched off and hidden. Braille on the other hand is by default hidden but can
be displayed by switching on the `Braille Subtitles`.

Speech is generally generated with respect to the currently chosen locale (if it
is available).  In addition, there are a number of different rule sets that can
be chosen for translating math to text, where each can have a number of
different preferences for how a particular expression is spoken. By default, MathJax
uses the `MathSpeak` rule set in `Verbose` mode; however, the menu allows this
to be changed to either the `ClearSpeak` or `ChromeVox`. Each rule set has
several different preference settings; three in the case of MathSpeak, for example,
which primarily influence the length of produced text.  `ClearSpeak
<https://docs.wiris.com/en/mathtype/mathtype_desktop/accessibility/clearspeak>`__
on the other hand has a large number of preferences that allow very fine-tuned
control over how different types of expressions are spoken. The MathJax menu
allows a smart choice of preferences by only displaying the preferences that
are currently relevant for the sub-expression that is currently explored.
The `Select Preferences` option opens a selection box for all possible
ClearSpeak preference choices.

Some rule-set and preference settings can also be controlled by keyboard
commands. This allows the user to have the same expression read in different
variants without having to leave the exploration mode.  The |bkey| > |ekey| key
switches rule sets between MathSpeak and ClearSpeak if both are available for
the current locale. The |bkey| < |ekey| key cycles preferences for the currently
active rule set.  For ClearSpeak rules, preference cycling depends on the type
of the currently explored sub-expression, similar to smart selection of menu
entries.

The speech language can be adjusted in the `Language` sub-menu in the
`Speech` options.  MathJax currently only supports speech in English,
French, German, and Spanish.  The only available Braille output is
Nemeth. We are hoping to add more in the future.

In addition to voicing expressions, the explorer allows for queries on
sub-expression, such as getting positional information with respect to the
context, as well as summaries of the sub-expression currently explored.
   


Abstraction
===========

In addition to textual summaries of expressions, MathJax offers the
possibility to abstract certain sub-expressions so that the entire
sub-expression is visually replaced by a placeholder symbol and
interactive traversal treats it as a single element. This allows the
reader to abstract away details and to better observe the overall
structure of a formula.

Abstraction can be triggered either via mouse click on a collapsible
expression or via pressing the |bkey| Enter |ekey| key during keyboard
exploration. Expressions that can be abstracted can also be discovered
using some of the highlighting features.


Highlight
=========

During interactive exploration, the sub-expression that is explorered is
automatically highlighted, by default with a blue background color. The
highlighting can be customized by changing `Background` or `Foreground`
colors in in the `Highlight` sub-menu of the MathJax contextual menu.
In addition, the opacity of both `Background` and `Foreground` can be
adjusted by two slider bars underneath the respective sub-menus.

The `Highlight` sub-menu also provides a choice of highlighters for
marking collapsible sub-expressions: The `Flame` highlighter permanently
colors collapsible sub-expressions while successively darkening the
background for nested collapsible expressions. The `Hover` highlighter
colors each collapsible sub-expression only when hovering over it with
the mouse pointer.

A final highlighting feature is `Tree Coloring`, in which expressions are
visually distinguished by giving neighbouring symbols different, ideally
contrasting foreground colors.
   

Magnification
=============

During exploration, the accessibility extension can optionally magnify
the sub-expression that is currently explored. The zoomed version of
the expression is overlaid on the original one when traversing the
formula. For keyboard exploration, this can be switched on in the
`Magnification` sub-menu by selecting the `Keyboard` option.

A similar effect can be achieved by exploring an expression with the mouse.
When using the `Mouse` option in the `Magnification` sub-menu, the
sub-expression over which the mouse pointer hovers is zoomed.

The zoom factor of the magnification can also be adjusted.  The values
available in the context menu are `200%`, `300%`, `400%`, and
`500%`.


Semantic Info
=============

The `Semantic Info` sub-menu contains a number of options that allow the reader to see
the semantic classifications MathJax applies to a particular sub-expression, by
hovering over it with the mouse pointer. The choices here are


* `Type`
  is an immutable property of an expression that is independent
  of its particular position in a formula. Note, however that types can change
  depending on the subject area of a document.
* `Role`
  is dependent on the context of a sub-expression in the overall expression.
* `Prefix`
  is information pertaining to the position of a
  sub-expression. Examples are ``'exponent'``, ``'radicand'``, etc. These would
  also be spoken during interactive exploration.
              
For more details on all of these concepts, see also the documentation of the
`Speech Rule Engine <https://speechruleengine.org>`__.

.. _explorer-commands:

.. raw:: html

  <style>
  td.first {
    vertical-align: top;
    width: 7.5em;
  }
  kbd  {
    display: inline-block;
    padding: 3px 5px;
    font-size: 11px;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: #fafbfc;
    border: solid 1px #c6cbd1;
    border-bottom-color: #959da5;
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 #959da5;
  }
  </style>
  <br/>

##############################
/B. Keyboard Explorer Commands
##############################


The keyboard explorer is used to interact with a mathematical expression using
keyboard commands. Interaction allows a reader to traverse an expression in a
mathematical meaningful way, examining sub-expressions and diving into details as
they see fit.

The keyboard explorer supports multiple types of output: Speech and
Braille output for the sub-expression that is explored, magnification of that
sub-expression, and synchronised highlighting with the navigation.

Navigation can be started when a MathJax expression is focused and quit at any
time during the exploration.  When navigation is restarted, the application will
continue where the user has left off within the expression.


Overview of key bindings
========================

Essential Keys
--------------

.. _essential-keys:
.. raw:: html

        <table>
        <tr><td class="first"><kbd>Enter</kbd></td><td>Activate explorer. Requires math expression to have the focus.
        </td></tr>
        <tr><td class="first"><kbd>Escape</kbd></td><td>Leave exploration mode.
        </td></tr>
        <tr><td class="first">&emsp;</td></tr>
        
        <tr><td class="first"><kbd>Down</kbd></td><td>Explore next lower level of the formula
        by moving down in the sub-expression tree. Exploration will start at the
        left-most sub-expression on the level.</td></tr>
        
        <tr><td class="first"><kbd>Up</kbd></td><td>Move up the sub-expression tree.</td></tr>
        <tr><td class="first"><kbd>Right</kbd></td><td>Navigate the expression horizontally by moving to the next sub-expression on the current level.</td></tr>
        <tr><td class="first"><kbd>Left</kbd></td><td>Navigate the expression horizontally by moving to the previous sub-expression on the current level.</td></tr>
        </table>
        <br/>


An earcon is played as indicator that the boundary of an expression has been
reached in either direction.


Advanced Options
----------------

.. _advanced-options:
.. raw:: html

        <table>
        <tr><td class="first"><kbd>Tab</kbd></td><td>Repeat previous speech-text or announcement.</td></tr>
        <tr><td class="first"><kbd>Space</kbd></td><td>Get positional information; i.e., the current level in the sub-expression tree as well as collapsibility/expandability of the current subexpression.</td></tr>
        <tr><td class="first"><kbd>Enter</kbd></td><td>Collapse or expand expression under cursor, if possible.
        Speech-text is regenerated to match.</td></tr>
        <tr><td class="first"><kbd>Home</kbd></td><td>Navigate directly to top-most level of expression.</td></tr>
        <tr><td class="first"><kbd>X</kbd></td><td>Summarise the expression under cursor, without collapsing it.</td></tr>
        <tr><td class="first"><kbd>Z</kbd></td><td>Give detailed description of expression under cursor, without expanding it.</td></tr>
        <tr><td class="first"><kbd>V</kbd></td><td>Start new virtual cursor from the current position.</td></tr>
        <tr><td class="first"><kbd>P</kbd></td><td>Go to last position or previous virtual cursor</td></tr>
        <tr><td class="first"><kbd>U</kbd></td><td>Undo all virtual cursors; i.e.; go to position where first virtual cursor was started.</td></tr>
        <tr><td class="first"><kbd>&gt;</kbd></td><td>Switch rule sets between MathSpeak and ClearSpeak, if both are available for the current locale.</td></tr>
        <tr><td class="first"><kbd>&lt;</kbd></td><td>Cycle styles or preferences for the currently active rule sets.</td></tr>
        </table>
        <br/>


Special key combinations for navigating tables
----------------------------------------------

.. _special-keys:
.. raw:: html

        <table>
        <tr><td class="first"><kbd>Shift</kbd>+<kbd> Down</kbd></td><td>Move one cell vertically down in the table.</td></tr>
        <tr><td class="first"><kbd>Shift</kbd>+<kbd> Up</kbd></td><td>Move one cell vertically up in the table.</td></tr>
        <tr><td class="first"><kbd>Shift</kbd>+<kbd> Right</kbd></td><td>Move one cell horizontally right in the table.</td></tr>
        <tr><td class="first"><kbd>Shift</kbd>+<kbd> Left</kbd></td><td>Move one cell horizontally left in the table.</td></tr>
        <tr><td class="first">&emsp;</td></tr>
        <tr><td class="first"><kbd>0-9</kbd>+<kbd>0-9</kbd></td><td>Move directly to cell (n,m) if it exists.
            (0,0) is cell (10,10).</td></tr>
        </table>
        </br>
        

Special Notes
=============

.. note::

   Depending on the implementation quality of the particular
   browser/screenreader/OS combination (especially Chrome and IE), users might
   have to disable screenreader reading modes (e.g., "browse mode" in NVDA,
   "virtual cursor" in JAWS) before being able to launch the MathJax explorer application.



|-----|
.. _legacy_accessibility:

##################################
/B. Legacy Assistive Support in v2
##################################

Interactions between screen readers and MathJax are delicate and vary
from browser to browser, operating system to operating system, and
screen reader to screen reader.  The following information was
gathered over time for version 2 of MathJax and various
browser/operating-system/screen-reader combinations.  The information
is several years old, and my no longer be completely accurate, as
features in browsers and screen readers change regularly.  Because
this information changes regularly with updates to browsers and screen
readers, we are unable to maintin a table like this for version 3.

Support Matrix (AssistiveMML.js)
================================

Below is a summary of results for MathML enabled screenreaders and the
legacy AssistiveMML extension, based on tests as well as user reports.

.. raw:: html

  <table>
      <thead>
          <tr>
              <th>Screenreader</th>
              <th>Browser</th>
              <th>OS</th>
              <th>Usable?</th>
              <th>Bugs</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>ChromeVox</td>
              <td>Chrome</td>
              <td>any</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>any</td>
              <td>WinXP</td>
              <td>DNA</td>
              <td><a href="https://github.com/nvaccess/nvda/issues/5555#issuecomment-160598962">MathPlayer 4 does not support WinXP</a></td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>Chrome</td>
              <td>any</td>
              <td>DNA</td>
              <td><a href="https://github.com/nvaccess/nvda/issues/5555#issuecomment-160503827">Chrome issues prevent MathML support by NVDA</a></td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>Firefox</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>Firefox</td>
              <td>Win8.1</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>Firefox</td>
              <td>Win10</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>MS Edge</td>
              <td>Win10</td>
              <td>DNA</td>
              <td><a href="https://github.com/nvaccess/nvda/issues/5555#issuecomment-160598962">Edge issues prevent MathML support by NVDA</a></td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>IE11</td>
              <td>Win8.1</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>IE10</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>NVDA</td>
              <td>IE9</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>any</td>
              <td>WinXP</td>
              <td>DNA</td>
              <td><a href="http://www.freedomscientific.com/Downloads/jaws/jaws16features#JAWSXP">JAWS 15 was the last version to support Windows XP but MathML support in JAWS starts with JAWS 16</a></td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>Chrome</td>
              <td>any</td>
              <td>DNA</td>
              <td><a href="http://www.freedomscientific.com/Downloads/jaws/jaws16features">JAWS only supports IE and Firefox</a></td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>Firefox</td>
              <td>Win8.1</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>Firefox</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>Firefox</td>
              <td>Win10</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>MS Edge</td>
              <td>Win10</td>
              <td>DNA</td>
              <td><a href="http://www.freedomscientific.com/Downloads/jaws/jaws16features">JAWS only supports IE and Firefox</a></td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>IE11</td>
              <td>Win8.1</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>IE10</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>JAWS</td>
              <td>IE9</td>
              <td>Win7</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>VoiceOver</td>
              <td>Safari</td>
              <td>OSX</td>
              <td>+1</td>
              <td>see notes below</td>
          </tr>
          <tr>
              <td>VoiceOver</td>
              <td>Chrome</td>
              <td>OSX</td>
              <td>DNA</td>
              <td>Chrome and VoiceOver issues prevent MathML support in this combination.</td>
          </tr>
          <tr>
              <td>VoiceOver</td>
              <td>Firefox</td>
              <td>OSX</td>
              <td>DNA</td>
              <td>Chrome and Firefox issues prevent MathML support in this combination.</td>
          </tr>
          <tr>
              <td>Orca</td>
              <td>Firefox</td>
              <td>Ubuntu 15.10</td>
              <td>+1</td>
              <td>no bugs</td>
          </tr>
          <tr>
              <td>Orca</td>
              <td>Web</td>
              <td>Ubuntu 15.10</td>
              <td>DNA</td>
              <td><a href="https://mail.gnome.org/archives/orca-list/2015-July/msg00010.html">Chrome issues prevent MathML support by ORCA</a></td>
          </tr>
          <tr>
              <td>Orca</td>
              <td>Chrome(ium)</td>
              <td>Ubuntu 15.10</td>
              <td>DNA</td>
              <td><a href="https://mail.gnome.org/archives/orca-list/2015-July/msg00010.html">Chrome issues prevent MathML support by ORCA</a></td>
          </tr>
      </tbody>
  </table>
  <br/>

Notes on Apple VoiceOver
========================

* **VoiceOver** on OSX

  * *Safari*. The visually-hidden MathML is read out and gets an
    outline. Visual rendering is ignored correctly. VoiceOver
    sometimes drops parts of the equation due to its partial MathML
    support.
  * *Chrome*. The visually-hidden MathML is detected but VoiceOver
    does not read it correctly (only e.g., "4 items detected; math";
    this seems like a VO bug); an outline is added. Visual rendering
    is ignored correctly.
  * *Firefox*. The visually-hidden MathML is only read as a string of
    contained characters; an outline is added. Visual rendering is
    ignored correctly.

* **VoiceOver** on iOS

  * The "slide two fingers from top to read screen" method will read
    the visually-hidden MathML. Visual rendering is ignored correctly.
  * Manual exploration.

    * Exploration by swiping left/right will read the visually-hidden MathML. Visual rendering is ignored correctly.
    * Tapping on an equation does not work due to the visually-hidden MathML being placed in a 1px box.


Notes on MathPlayer 4 and Internet Explorer 11
==============================================

Design Science suggests that you always use IE's Enterprise mode for
MathPlayer in IE11, `see their documentation
<http://www.dessci.com/en/products/mathplayer/tech/default.htm#Enterprise_mode>`__.
However, it seems that this is only required for MathPlayer's visual
rendering to work and this additionally requires the MathPlayer
BrowserHelperAddon to be active in IE.

Unfortunately, the MathPlayer BrowserHelperAddon can lead to
crashes. E.g., if you switch MathJax's output to the NativeMML output,
MathPlayer will crash IE11; you'll have to clear the MathJax cookie
to reset things. Also, in a plain MathML sample (without MathJax),
clicking on the MathPlayer rendering will crash IE11.

Using IE's Enterprise mode should work with NVDA and the AssistiveMML extension
but they don't seem to work with NVDA and plain MathML pages.

We suggest you do not switch on IE's Enterprise mode on pages using MathJax and
we also have to strongly suggest that you **not** use the BrowserHelperAddon with MathJax
on IE11.

|-----|
.. _getting-started-components:

###########################################
/W. Getting Started with MathJax Components
###########################################

MathJax allows you to include mathematics in your web pages, either
using LaTeX, MathML, or AsciiMath notation, and the mathematics will
be processed using JavaScript to produce HTML or SVG for viewing in
any modern browser.


.. _mathjax-components:

MathJax Components
==================

To make using MathJax easier in web pages, the various pieces that
make up MathJax have been packaged into separate files called
"components".  For example, there is a component for MathML input, and
one for SVG output, and the various TeX extensions are packaged as
separate components.  You can mix and match the various components to
customize MathJax to suit your particular needs (this is described in
detail in the section on :ref:`configure-mathjax` below); the
individual component files that you specify are loaded when MathJax
starts up.

There are also components that combine several others into one larger
file that loads everything you need to run MathJax all at once.  These
represent some of the standard combinations of input and output
formats, and you will probably find one of these that suits your
needs.  You can :ref:`configure <configure-mathjax>` the various
components in order to customize how they run, even when they are
loaded as part of a combined component.  For example, you can set the
delimiters to be used for in-line and displayed math for the TeX input
component whether the TeX component was loaded individually, or as
part of the ``tex-chtml`` component.

It is even possible for you to create your own components or custom
builds of MathJax, or incorporate the MathJax components into larger
files that contain other assets your website might need (see the
section on :ref:`web-custom-build` for more details).

-----

.. _accessing-mathjax:

Ways of Accessing MathJax
=========================

There are two ways to access MathJax for inclusion in web pages: link
to a content delivery network (CDN) like ``cdn.jsdelivr.net`` to obtain a
copy of MathJax, or download and install a copy of MathJax on your own
server (for network access) or hard disk (for local use without a
network connection).  The first method is described below, while the
second is discussed in the section on :ref:`web-hosting`.

This page gives the quickest and easiest ways
to get MathJax up and running on your web site, but you may want to
read the details in the linked sections in order to customize the
setup for your pages.


.. _mathjax-CDN:

Using MathJax from a Content Delivery Network (CDN)
---------------------------------------------------

The easiest way to use MathJax is to link directly to a public
installation available through a Content Distribution Network (CDN).
When you use a CDN, there is no need to install MathJax yourself, and
you can begin using MathJax right away.  The CDN will automatically
arrange for your readers to download MathJax files from a fast, nearby
server.

To use MathJax from a CDN, you need to do three things:

1.  Include a MathJax configuration in your page (this may be optional
    in some cases).

2.  Link to MathJax in the web pages that are to include mathematics.

3.  Put mathematics into your web pages so that MathJax can display
    it.

.. _cdn-list:

There are many free CDN services that provide copies of MathJax. Most
of them require you to specify a particular version of MathJax to
load, but some provide "rolling releases", i.e., links that update to
the latest available version upon release (note that we also provide a
means of obtaining the latest version automatically, described below).

- `jsdelivr.com <https://jsdelivr.com>`__  [latest or specific version] (recommended)
- `unpkg.com <https://unpkg.com/>`__ [latest or specific version]
- `cdnjs.com <https://cdnjs.com>`__
- `raw.githack.com <http://raw.githack.com>`__
- `gitcdn.xyz <http://gitcdn.xyz/>`__
- `cdn.statically.io <http://cdn.statically.io>`__
 

To jump start using ``jsdelivr``, you accomplish the first two steps by putting

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
   </script>

into the ``<head>`` block of your document.  (It can also go in the
``<body>`` if necessary, but the head is to be preferred.)  This will
load the latest 3.x.x version of MathJax from the distributed server,
configure it to recognize mathematics in both TeX and MathML notation,
and ask it to generate its output using HTML with CSS (the CommonHTML
output format) to display the mathematics.

.. warning::

  The ``tex-mml-chtml.js`` file includes all the pieces needed for
  MathJax to process these two input formats and produce this
  output format.  There are several other choices with different
  input/output combinations, and you can even configure MathJax to
  load components individually.

  We list this file here because it will get you started quickly with
  MathJax without having to worry too much about configurations; but
  since it is one of the most general of the combined component files,
  it is also one of the largest, so you might want to consider a
  smaller one that is more tailored to your needs.  See the section on
  :ref:`web-configuration` for more details on how this is done, and
  on :ref:`web-components` for information about the components
  themselves.

If you use the code snippet given above, you will not need to change
the URL whenever MathJax is updated and the version changes, because
``jsdelivr`` offers the ``mathjax@3`` notation for obtaining the
``tex-mml-chtml.js`` file from the latest version (3.x.x) available on
the CDN.

.. _latest-version:

Getting the Latest Version
--------------------------

Although ``jsdelivr`` provides a means of getting the latest version
automatically, as described above, not all CDNs have a mechanism for
that.  For such CDNs, MathJax provides a ``latest.js`` file that can
be used to obtain the latest (3.x.x) version of MathJax.  For example,
``cdnjs`` doesn't have a mechanism for getting the latest 3.x.x
version automatically, so you can use

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-mml-chtml.js">
   </script>

to obtain the latest (3.x.x) version of the ``tex-mml-chtml``
component from ``cdnjs``; even though you have started by asking for
version 3.0.0, the ``latest.js`` script will switch to the latest
3.x.x version automatically.


.. _specific_version:

Getting a Specific Version
--------------------------

It is also possible to always use a specific version, regardless of
the current version of MathJax.  To do this, simply give the full
version number in the URL; for example:

.. code-block:: html

   <script id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-mml-chtml.js">
   </script>

will always load version 3.0.0 of the ``tex-mml-chtml.js`` combined
component file.

Other CDNs have slightly different formats for how to specify the
version number.  For example, ``cdnjs`` uses the following:

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-mml-chtml.js">
   </script>

to get the same file.


.. _polyfill:

Browser Compatibility
---------------------

MathJax supports all modern browsers (Chrome, Safari,
Firefox, Edge), and most mobile browsers.  Include the
`polyfill <https://polyfill.io/v3/>`__ library in order to support
earlier browser versions (see their `browser support
<https://polyfill.io/v3/supported-browsers/>`__ page for details).
In particular, to allow MathJax version 3 to work with IE11, include the line

.. code-block:: html

   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

before the script that loads MathJax.

-----


.. _configure-mathjax:

Configuring MathJax
===================

The combined component files, like ``tex-mml-chtml.js``, include default
settings for the various options available in MathJax.  You may need
to adjust those to suit your needs.  For example, the TeX input
component does not enable single dollar signs as delimiters for
in-line mathematics because single dollar signs appear frequently in
normal text, e.g. "The price is $50 for the first one, and $40 for
each additional one", and it would be confusing the have "50 for the
first one, and" be typeset as mathematics.

If you wish to enable single dollar signs as in-line math delimiters,
you need to tell MathJax that by providing an explicit MathJax
configuration.  That is accomplished by using a ``<script>`` tag to
set the ``MathJax`` global variable to hold a configuration for
MathJax and placing that script before the one that loads the MathJax
component file that you are using.  For example

.. code-block:: html

   <script>
   MathJax = {
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']]
     }
   };
   </script>
   <script id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
   </script>

configures MathJax's TeX input component to use ``$...$`` and
``\(...\)`` as delimiters for inline-math (this enabling single
dollar signs as math delimiters), and then loads the ``tex-chtml.js``
component for TeX input and CommonHTML output.

There are many options that can be set in this way.  See the section
on :ref:`web-configuration` for more details, and on
:ref:`configuring-mathjax` for information on the available options
for the various components.

-----


.. _writing-mathematics:

Putting Mathematics in a Web Page
=================================

Once MathJax is configured and loaded, it will look through your web
page for mathematics for it to process.  There are three available
formats for that mathematics: TeX/LaTeX, MathML, and AsciiMath.  The
TeX/LaTeX and AsciiMath formats are plain text formats that use
special delimiter characters to separate the mathematics from the rest
of the text of your document, while the MathML format is an XML format
that uses "tags" (similar to HTML tags) to represent the mathematics.
TeX and AsciiMath are often written by hand, but MathML usually is
generated by mathematical software or specialized editors.

See the section on :ref:`basic-mathematics` for more details about how
to enter mathematics in these three formats.

Note that once MathJax has processed the page, it will not run
again without you explicitly telling it to.  For example, if you add
new mathematics to the page after MathJax has already run, that math
will not be processed by MathJax until you request that to happen.
See the section on :ref:`typeset-math` for details of how to do that.

-----


.. _web-what-now:

Where to Go from Here?
======================

If you have followed the instructions above, you should now have
MathJax installed and configured on your web server, and you should be
able to use it to write web pages that include mathematics.  At this
point, you can start making pages that contain mathematical content!

You could also read more about the details of how to :ref:`customize
MathJax <web-configuration>`.

You can also check out the :ref:`MathJax examples <web-examples>` for
illustrations of using MathJax.

..
   If you are trying to use MathJax in blog or wiki software or in some
   other content-management system, you might want to read about :ref:`using
   MathJax in popular platforms <platforms>`.

If you are working on dynamic pages that include mathematics, you
might want to read about the :ref:`MathJax Application Programming
Interface <mathjax-api>` (its API), so you know how to include
mathematics in your interactive pages.

Finally, if you have questions or comments, or want to help support
MathJax, you could visit the :ref:`MathJax community forums
<community-forums>` or the :ref:`MathJax bug tracker
<community-tracker>`.

|-----|
.. _web-configuration:

###################################
/W. Configuring and Loading MathJax
###################################

The configuration, loading, and startup processes for MathJax version
3 are different from those of version 2 in a number of ways.  Where
version 2 had several different methods for configuring MathJax,
version 3 streamlines the process and has only one, as described
below.  In version 2, you always loaded ``MathJax.js``, and added a
``config=...`` parameter to provide a combined configuration file, but
in version 3 you load one of several different files, depending on
your needs (so you can avoid multiple file transfers, and also use
MathJax synchronously, which was not possible in version 2).

If you use one of the combined component files in version 3, like
``mml-chtml``, you may not need to do any configuration at all.

-----

.. _configuration:

Configuring MathJax
===================

To configure MathJax, you use a global object named `MathJax` that
contains configuration data for the various components of MathJax.
For example, to configure the TeX input component to use single dollar
signs as in-line math delimiters (in addition to the usual ``\(...\)``
delimiters) and the SVG output component to use a global font cache
for all expressions on the page, you would use

.. code-block:: javascript

   MathJax = {
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']]
     },
     svg: {
       fontCache: 'global'
     }
   };

The sections below describe the different places you could put such a
configuration.  For information on the options that you can set for
each of the components, see the :ref:`configuration` pages.


.. _inline-configuration:

Configuration Using an In-Line Script
-------------------------------------

The easiest way to configure MathJax is to place the ``MathJax``
object in a ``<script>`` tag just before the script that loads MathJax
itself.  For example:

.. code-block:: html

   <script>
   MathJax = {
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']]
     },
     svg: {
       fontCache: 'global'
     }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
   </script>

This will configure the TeX input component to use single dollar
signs as in-line math delimiters, and the SVG output component to use
a global font cache (rather than a separate cache for each expression
on the page), and then loads the latest version of the ``tex-svg``
component file from the ``jsdelivr`` CDN.  This will typeset any TeX
mathematics on the page, producing SVG versions of the expressions.


.. _local-configuration-file:

Using a Local File for Configuration
------------------------------------

If you are using the same MathJax configuration over multiple pages,
you may find it convenient to store your configuration in a separate
JavaScript file that you load into the page.  For example, you could
create a file called ``mathjax-config.js`` that contains

.. code-block:: javascript

   window.MathJax = {
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']]
     },
     svg: {
       fontCache: 'global'
     }
   };

and then use

.. code-block:: html

   <script src="mathjax-config.js" defer></script>
   <script type="text/javascript" id="MathJax-script" defer
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
   </script>

to first load your configuration file, and then load the ``tex-svg``
component from the ``jsdelivr`` CDN.

Note that here we use the ``defer`` attribute on both scripts so that
they will execute in order, but still not block the rest of the page
while the files are being downloaded to the browser.  If the ``async``
attribute were used, there is no guarantee that the configuration
would run first, and so you could get instances where MathJax doesn't
get properly configured, and they would seem to occur randomly.


.. _config-loads-mathjax:

Configuring and Loading in One Script
-------------------------------------

It is possible to have the MathJax configuration file also load
MathJax as well, which would be another way to handle the problem of
synchronizing the two scripts described above.  For example, you could
make the file ``load-mathjax.js`` containing

.. code-block:: javascript

   window.MathJax = {
     tex: {
       inlineMath: [['$', '$'], ['\\(', '\\)']]
     },
     svg: {
       fontCache: 'global'
     }
   };
   
   (function () {
     var script = document.createElement('script');
     script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
     script.async = true;
     document.head.appendChild(script);
   })();

and then simply link to that file via

.. code-block:: html

   <script src="load-mathjax.js" async></script>

This script can be ``async`` because it doesn't have to synchronize
with any other script.  This will allow it to run as soon as it loads
(since it is small, there is little cost to that), meaning the script
to load MathJax itself will be inserted as soon as possible, so that
MathJax can begin downloading as early as possible.  (If this script
were loaded with ``defer``, it would not run until the page was ready,
so the script to load MathJax would not be inserted until then, and
you would have to wait for MathJax to be downloaded before it could
run.)


.. _v2-to-v3-converter:

Converting Your v2 Configuration to v3
--------------------------------------

Because the version 3 configuration options are somewhat different
from their version 2 counterparts, we provide an automated
`configuration conversion tool
<https://mathjax.github.io/MathJax-demos-web/convert-configuration/convert-configuration.html>`__
to help you move from version 2 to version 3.  Simply paste your
current :meth:`MathJax.Hub.Config()` call into the converter, press
``Convert`` and you should get the equivalent version 3 configuration,
and comments about any options that could not be translated to version
3 (some options are not yet implements, others no longer make sense in
version 3).  See the instructions on the linked page for more details.

-----

.. _loading-mathjax:

Loading MathJax
===============

Once you have configured MathJax, you then load the MathJax component
file that you want to use.  Most often, this will mean you load a
combined component that loads everything you need to run MathJax with
a particular input and output format.  For example, the ``tex-svg``
component would allow you to process TeX input and produce SVG output.
To do so, use a script like the following

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
   </script>

to get the latest (3.x.x) version of the ``tex-svg`` component in ES5
format (the only one currently available) from the ``jsdelivr`` CDN.
This takes advantage of the feature of ``jsdeliver`` that allows you
to get the latest version using the ``mathjax@3`` notation.  For a
specific version, you would use

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-svg.js">
   </script>

to always get the 3.0.0 version of the ``tex-svg`` component.

Other CDNs have slightly different formats for how to specify the
version number.  For example, ``cdnjs`` uses the following:

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/tex-svg.js">
   </script>

Some CDNs don't provide a means of getting the latest version
automatically.  For these, MathJax provides a ``latest.js`` file that
will do that for you.  For example, ``cdnjs`` doesn't have a mechanism
for getting the latest 3.x.x version automatically.  If you want to do
that using ``cdnjs``, then use

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.0.0/es5/latest?tex-svg.js">
   </script>

to obtain the latest (3.x.x) version of the ``tex-svg`` component.

See :ref:`web-components` for a list of the various components you can
choose and descriptions of their contents.  See the :ref:`list of CDNs
<cdn-list>` for the URLs for a number of CDNs that serve MathJax.

Note that the script that loads the MathJax component file should
*follow* the script that configures MathJax (otherwise MathJax will not
know what configuration you need).  If you use one of the combined
component files in version 3, you may not need to do any configuration
at all.


.. _loader-load-explicit:

Loading Components Individually
-------------------------------

If none of the combined component files suits your needs, you can
specify the individual components you want by setting the ``load``
array in the ``loader`` section of your MathJax configuration and
loading the ``startup`` component.

For example

.. code-block:: html

   <script>
   MathJax = {
     loader: {
       load: ['input/tex-base', 'output/svg', 'ui/menu', '[tex]/require']
     },
     tex: {
       packages: ['base', 'require']
     }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/startup.js">
   </script>

would cause the base TeX input, the SVG output, the contextual menu
code, and the TeX ``\require`` macro extension components to be loaded
(and would tell TeX to use the ``require`` extension in addition to the
base TeX macros).  In this way, you can load exactly the components
you want.  Note, however, that each component will be loaded as a
separate file, so it is better to use a combined component file if
possible.


.. _loader-load-combined:

Loading Additional Components
-----------------------------

You can use the ``load`` array described in the previous section to
load additional components even if you are using one of the combined
components.  For example

.. code-block:: html

   <script>
   MathJax = {
     loader: {
       load: ['[tex]/colorv2']
     },
     tex: {
       packages: {'[+]': 'colorv2'},
       autoload: {color: []}
     }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3.0.0/es5/tex-chtml.js">
   </script>

would load the version-2-compatible ``\color`` macro, inform TeX to
add that to the packages that it already has loaded, and not autoload
the default version 3 ``color`` (the LaTeX-compatible one).  This is
done on top of the ``tex-chtml`` combined configuration file, so the
TeX input and CommonHTML output formats are already included (as are
the contextual menu, and several TeX packages; see
:ref:`web-components` for details).


.. _startup-action:

Performing Actions During Startup
=================================

MathJax allows you several ways to hook into the MathJax startup
process so that you can do additional configuration, perform actions
after the initial typesetting, and so on.  Because MathJax version 3
uses *promises* for its synchronization, they are what MathJax
provides in order for you to hook into the startup process.  There are
two main hooks that you can set in the ``startup`` block of your
configuration: the :func:`ready()` function and the
:func:`pageReady()` function.

The :func:`ready()` function is what MathJax calls when all the
components of MathJax have been loaded.  It builds the internal
structures needed by MathJax, creates functions in the ``MathJax``
object to make typesetting and format conversion easy for you,
performs the initial typesetting call, and sets up a promise for when
that is complete.  You can override the :func:`ready()` function with
one of your own to override the startup process completely, or to
perform actions before or after the usual initialization.  For
example, you could do additional setup before MathJax created the
objects it needs, or you could hook into the typesetting promise to
synchronize other actions with the completion of the initial
typesetting.  Examples of these are given below.

The :func:`pageReady()` function is performed when MathJax is ready
(all its components are loaded, and the internal objects have been
created), and the page itself is ready (i.e., it is OK to typeset the
page).  The default is for :func:`pageReady()` to perform the initial
typesetting of the page, but you can override that to perform other
actions instead, such as delaying the initial typesetting while other
content is loaded dynamically, for example.  The :func:`ready()`
function sets up the call to :func:`pageReady()` as part of its
default action.

The return value of :func:`pageReady()` is a promise that is resolved
when the initial typesetting is finished (it is the return value of
the initial :meth:`MathJax.typesetPromise()` call).  If you override
the :func:`pageReady()` method, your function should return a promise
as well.  If your function calls
:meth:`MathJax.startup.defaultPageReady()`, then you should return the
promise that it returns (or a promise obtained from its :func:`then()`
or :func:`catch()` methods).  The :attr:`MathJax.startup.promise` will
resolve when the promise you return is resolved; if you don't return a
promise, :attr:`MathJax.startup.promise` will resolve immediately,
which may mean that it resolves too early.

Using these two functions separately or in combination gives you full
control over the actions that MathJax takes when it starts up, and
allows you to customize MathJax's startup process to suit your needs.
Several examples are given below for common situations.

.. _initialization-actions:

Performing Actions During Initialization
----------------------------------------

If you want to perform actions after MathJax has loaded all the needed
components, you can set the :func:`ready()` function to a function that does
the needed actions, and then calls
:meth:`MathJax.startup.defaultReady()` to perform the usual
startup process.

Actions coming before the :meth:`MathJax.startup.defaultReady()`
call are run before any initialization has been done.  In particular,
this is before any input or output jax are created, so this is where
customization of the MathJax object definitions could be performed.
For example, you could modify the configuration blocks at this point,
or you could create subclasses of the MathJax objects that override
some of their methods to produce custom behavior, and then register
those subclasses with MathJax so they will be used in place of the
originals.

Actions coming after the :meth:`MathJax.startup.defaultReady()`
call are run after initialization is complete.  In particular, all the
internal objects used by MathJax (e.g., the input and output jax, the
math document, the DOM adaptor, etc) will have been created, and the
typesetting and conversion methods will have been created in the
``MathJax`` object.  Also the :attr:`MathJax.startup.promise` value
will hold a promise that is resolved when the initial typesetting is
complete, but note that the typesetting has not yet been performed at
this point.

.. code-block:: javascript

   window.MathJax = {
     startup: {
       ready: () => {
         console.log('MathJax is loaded, but not yet initialized');
         MathJax.startup.defaultReady();
         console.log('MathJax is initialized, and the initial typeset is queued');
       }
     }
   };

The next section shows how to use the :attr:`MathJax.startup.promise`
to synchronize with the initial typesetting action.


.. _post-typesetting:

Performing Actions After Typesetting
------------------------------------

Often, you may need to wait for MathJax to finish typesetting the page
before you perform some action.  To accomplish this, you can override
the :func:`ready()` function, having it perform the
:meth:`MathJax.startup.defaultReady()` action, and then use the
:attr:`MathJax.startup.promise` to queue your actions; these will be
performed after the initial typesetting is complete.

.. code-block:: javascript

   window.MathJax = {
     startup: {
       ready: () => {
         MathJax.startup.defaultReady();
         MathJax.startup.promise.then(() => {
           console.log('MathJax initial typesetting complete');
         });
       }
     }
   };

As an alternative, you can override the :func:`pageReady()` function,
and use the promise returned from the
:meth:`MathJax.startup.defaultPageReady()` function:

.. code-block:: javascript

   window.MathJax = {
     startup: {
       pageReady: () => {
         return MathJax.startup.defaultPageReady().then(() => {
           console.log('MathJax initial typesetting complete');
         });
       }
     }
   };

Be sure that you return the promise that you obtain from
:func:`then()` method, otherwise :attr:`MathJax.startup.promise` will
resolve before the initial typesetting (and your code) has been
performed.

-----

.. _configure-after-load:

Configuring MathJax After it is Loaded
======================================

The global variable ``MathJax`` is used to store the configuration for
MathJax.  Once MathJax is loaded, however, MathJax changes the
``MathJax`` variable to contain the various methods needed to control
MathJax.  The initial configuration that you provided is moved to the
:attr:`MathJax.config` property so that its contents doesn't conflict
with the new values provides in ``MathJax``.  This occurs when the
MathJax component you have requested is loaded (and before the
:func:`ready()` function is called).

Once MathJax has created the objects that it needs (like the input and
output jax), changes to the configuration may not have any effect, as
the configuration values were used during the creation of the objects,
and that is already complete.  Most objects make a copy of their
configuration from your original ``MathJax`` object, so changing the
values in :attr:`MathJax.config` after the objects are created will
not change their configurations.  (You can change
:attr:`MathJax.config` values for objects that haven't been created
yet, but not for ones that have.)

For some objects, like input and output jax, document handlers, and
math documents, the local copies of the configuration settings are
stored in the :attr:`options` property of the object, and you may be
able to set the value there.  For example,
:attr:`MathJax.startup.output.options.scale` is the scaling value for
the output, and you can set that at any time to affect any subsequent
typeset calls.

Note that some options are moved to sub-objects when the main object
is created. For example, with the TeX input jax, the ``inlineMath``
and similar options are used to create a ``FindTeX`` object that is
stored at :attr:`MathJax.startup.input[0].findTeX`; but in this case, the
``FindTeX`` object uses the configuration once when it is created, so
changing :attr:`MathJax.startup.input[0].findTeX.options` will not affect
it.  (There is a :meth:`getPatterns()` method if the ``FindTeX``
object that could be used to refresh the object if the options are
changed, however.)

If you need to change the configuration for an object whose options
can't be changed once it is created, then you will need to create a
new version of that object after you change the configuration.  For
example, if you change :attr:`MathJax.config.tex.inlineMath` after
MathJax has started up, that will not affect the TeX input jax, as
described above.  In this case, you can call
:meth:`MathJax.startup.getComponents()` to ask MathJax to recreate all
the internal objects (like :attr:`MathJax.startup.input`).  This will
cause them to be created using the new configuration options.  Note,
however, that MathJax will no longer know about any mathematics that
has already been typeset, as that data was stored in the objects that
have been discarded when the new ones are created.

|-----|
.. _web-components:

##########################
/W. The MathJax Components
##########################

In order to make it possible to customize what parts of MathJax you
include in your web pages, the MathJax code has been broken into
individual pieces, called "components".  These are designed to share
common code, so that you don't download the same thing more than once,
while still making it possible to only download the parts that you
need.  There are individual components for the various input and
output processors in MathJax, for the various TeX extensions, for the
contextual menu, and for other specialized pieces, such as the
assistive technology support.  These can be mixed and matched in
whatever combinations you need.

There are some obvious combinations of components, for example, TeX
input together with SVG output, or MathML input with CommonHTML
output.  MathJax provides a number of these common combinations as
complete packages that contain everything you need to run mathjax in
your page in a single file, though you can also configure additional
extensions to be loaded as well.

Components provide a great deal of flexibility in determining the
pieces of MathJax that you use.  You can even make your own custom
builds of MathJax that package exactly the pieces that you want to
use.  See :ref:`web-custom-build` for more details about how to do
that.

See the :ref:`loading-mathjax` section for details about how to
specify and load MathJax components.

See the :ref:`configuring-mathjax` section for details about how to
configure the various MathJax components.

-----

.. toctree::
   :caption: The Components
   :maxdepth: 2

   combined

.. toctree::
   :maxdepth: 2

   input

.. toctree::
   :maxdepth: 2

   output

.. toctree::
   :maxdepth: 2

   accessibility

.. toctree::
   :maxdepth: 2

   misc

|-----|
.. _combined-components:

#######################
/W. Combined Components
#######################

Currently there are eight combined components, whose contents are
described below:

* :ref:`tex-chtml-component`
* :ref:`tex-chtml-full-component`
* :ref:`tex-svg-component`
* :ref:`tex-svg-full-component`
* :ref:`tex-mml-chtml-component`
* :ref:`tex-mml-svg-component`
* :ref:`mml-chtml-component`
* :ref:`mml-svg-component`

The combined components include everything needed to run MathJax in
your web pages.  Each includes at least one input processor, an output
processor, the data needed for the MathJax TeX font, the contextual
menu code, and the :ref:`startup-component` component.

Unlike the other components, these combined components should be
loaded directly via a `<script>` tag, not through the ``load`` array
in your MathJax configuration.  So a typical use would be

.. code-block:: html

   <script>
   MathJax = {
     // your configuration here, if needed
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
   </script>

to load the `tex-chtml` component, for example.

-----


.. _tex-chtml-component:

tex-chtml
=========

The `tex-chtml` component loads the :ref:`input/tex <tex-component>`
component and the :ref:`output/chtml <chtml-component>`, along with
the contextual menu component, and the startup component.

The `input/tex` component loads the :ref:`tex-ams`, :ref:`tex-newcommand`,
:ref:`tex-require`, :ref:`tex-autoload`, :ref:`tex-configmacros`, and
:ref:`tex-noundefined` extensions, which means that most other extensions
will be loaded automatically when needed, or you can use the
``\require`` macro to load them explicitly.

-----


.. _tex-chtml-full-component:

tex-chtml-full
==============

The `tex-chtml-full` component loads the :ref:`input/tex-full
<tex-component>` component and the :ref:`output/chtml
<chtml-component>`, along with the contextual menu component, and the
startup component.

The `input/tex-full` component loads the code for all the TeX
extensions, and configures TeX to use all but the :ref:`tex-physics`
and :ref:`tex-colorv2` extensions.

-----


.. _tex-svg-component:

tex-svg
=======

The `tex-svg` component loads the :ref:`input/tex <tex-component>`
component and the :ref:`output/svg <svg-component>`, along with
the contextual menu component, and the startup component.

The `input/tex` component loads the :ref:`tex-ams`, :ref:`tex-newcommand`,
:ref:`tex-require`, :ref:`tex-autoload`, :ref:`tex-configmacros`, and
:ref:`tex-noundefined` extensions, which means that most other extensions
will be loaded automatically when needed, or you can use the
``\require`` macro to load them explicitly.

-----


.. _tex-svg-full-component:

tex-svg-full
============

The `tex-svg-full` component loads the :ref:`input/tex-full
<tex-component>` component and the :ref:`output/svg <svg-component>`,
along with the contextual menu component, and the startup component.

The `input/tex-full` component loads the code for all the TeX
extensions, and configures TeX to use all but the :ref:`tex-physics`
and :ref:`tex-colorv2` extensions.

-----


.. _tex-mml-chtml-component:

tex-mml-chtml
=============

The `tex-mml-chtml` component loads the :ref:`input/tex
<tex-component>` and :ref:`mathml-component` components and the
:ref:`output/chtml <chtml-component>`, along with the contextual menu
component, and the startup component.

The `input/tex` component loads the :ref:`tex-ams`, :ref:`tex-newcommand`,
:ref:`tex-require`, :ref:`tex-autoload`, :ref:`tex-configmacros`, and
:ref:`tex-noundefined` extensions, which means that most other extensions
will be loaded automatically when needed, or you can use the
``\require`` macro to load them explicitly.

-----


.. _tex-mml-svg-component:

tex-mml-svg
===========

The `tex-mml-svg` component loads the :ref:`input/tex
<tex-component>` and :ref:`mathml-component` components and the
:ref:`output/svg <svg-component>`, along with the contextual menu
component, and the startup component.

The `input/tex` component loads the :ref:`tex-ams`, :ref:`tex-newcommand`,
:ref:`tex-require`, :ref:`tex-autoload`, :ref:`tex-configmacros`, and
:ref:`tex-noundefined` extensions, which means that most other extensions
will be loaded automatically when needed, or you can use the
``\require`` macro to load them explicitly.

-----


.. _mml-chtml-component:

mml-chtml
=========

The `mml-chtml` component loads the :ref:`mathml-component` component
and the :ref:`output/chtml <chtml-component>`, along with the
contextual menu component, and the startup component.

-----


.. _mml-svg-component:

mml-svg
=======

The `mml-svg` component loads the :ref:`mathml-component` component
and the :ref:`output/svg <svg-component>`, along with the
contextual menu component, and the startup component.

|-----|

.. _input-components:

####################
/W. Input Components
####################

Currently there are three MathJax input formats, each packaged into
its own component.

* :ref:`tex-component`
* :ref:`mathml-component`
* :ref:`asciimath-component`

These are described in more detail below.  See the
:ref:`input-options` section for details about configuring these
components.

-----


.. _tex-component:

input/tex
=========

The TeX input format is packaged in three different ways, depending on
which extensions are included in the component.  This gives you
several possible trade-offs between file size and feature
completeness.  See the :ref:`tex-input` section for details about the
TeX input processor.

When you include one of the TeX input components, MathJax will define
a function to convert TeX strings into the output format that
has been loaded.  See the :ref:`convert-math` section for details.

input/tex
---------

This is the standard TeX input component.  It includes the main
TeX/LaTeX input parser, along with the base definitions for the most
common macros and environments.  It also includes the :ref:`tex-ams`,
:ref:`tex-newcommand`, :ref:`tex-require`, :ref:`tex-autoload`,
:ref:`tex-configmacros`, and :ref:`tex-noundefined` extensions.  The
remaining extensions (other than :ref:`tex-physics` and
:ref:`tex-colorv2`) are loaded automatically when needed, or you can
use ``\require`` to load any of them explicitly.  This will cause the
extensions to be loaded dynamically, so if you are calling MathJax's
typesetting or conversion methods yourself, you should use the
promise-based versions in order to handle that properly.

See the :ref:`tex-options` section for information about
configuring this component.

input/tex-full
--------------

This is the most complete TeX input component.  It includes the main
TeX/LaTeX input parser, along with all the TeX extensions, and is
configured to enable all of them other than :ref:`tex-physics` and
:ref:`tex-colorv2`.  You can add these two to the ``packages`` array
in the ``tex`` section of your MathJax configuration, though you
should remove the :ref:`tex-color` extension if you add the
:ref:`tex-colorv2` extension, and should remove the :ref:`tex-braket`
extension if you enable the :ref:`tex-physics` package.

See the :ref:`tex-options` section for information about
configuring this component.

input/tex-base
--------------

This is a minimal TeX input component.  It includes the main TeX/LaTeX
input parser, along with the base definitions for the most common
macros and environments.  No other extensions are included, so no
extensions are autoloaded, and you can not use ``\require``.  For this
component, you must explicitly load the extensions you want to use,
and add them to the ``packages`` array.

See the :ref:`tex-options` section for information about
configuring this component.


TeX Extension Packages
----------------------

Each of the TeX extensions listed in the :ref:`extension-list` has its
own component.  The name of the component is the name of the extension
preceded by ``[tex]/``; so the component for the ``enclose``
extension is ``[tex]/enclose``.  You can include any of the extension
components in the ``load`` array of the ``loader`` section of your
MathJax configuration, and add the extension to the ``packages`` array
in the ``tex`` block.  For example:

.. code-block:: html

   window.MathJax = {
     loader: {load: ['[tex]/enclose']},
     tex: {
       packages: {'[+]', ['enclose']}
     }
   };

Of course, if you are using one of the packages that includes the
:ref:`tex-autoload` extension, then you don't have to load the
extensions explicitly (except for :ref:`tex-physics` and
:ref:`tex-colorv2`), as they will be loaded automatically when first
used.

In addition, there is a ``[tex]/all-packages`` component that includes
all the packages, and configures the TeX input processors to include
all of them except :ref:`tex-physics` and :ref:`tex-colorv2`.  The
`input/tex-base` and `[tex]/all-packages` components together are
effectively the same as the `input/tex-full` component.

See the :ref:`tex-extension-options` section for information about
configuring the TeX extensions.


-----


.. _mathml-component:

input/mml
============

The `input/mml` component contains the MathML input processor,
including the function that identifies MathML within the page.  See
the :ref:`mathml-input` section for details concerning the MathML
input processor.  When you include the `input/mml` component,
MathJax will define a function to convert serialized MathML strings
into the output format that has been loaded.  See the
:ref:`convert-math` section for details.

* See the :ref:`mathml-output` section for details about MathML output.

* See the :ref:`mathml-options` section for information about
  configuring this component.

-----


.. _asciimath-component:

input/asciimath
===============

The `input/asciimath` component contains the AsciiMath input
processor, including the function that identifies AsciiMath within the
page.  See :ref:`asciimath-input` section or details concerning the
AsciiMath input processor.  When you include the `input/asciimath`
component, MathJax will define a function to convert AsciiMath strings
into the output format that has been loaded.  See the
:ref:`convert-math` section for details.

See the :ref:`asciimath-options` section for information about
configuring this component.

.. note::

   The AsciiMath input jax has not been fully ported to version 3
   yet.  The AsciiMath component includes legacy MathJax 2 code
   patched into the MathJax 3 framework.  That makes the AsciiMath
   component larger than usual, and slower than the other input
   components.

|-----|
.. _output-components:

#####################
/W. Output Components
#####################

Currently there are two MathJax output formats, each packaged into
its own component.

* :ref:`chtml-component`
* :ref:`svg-component`

These are described in more detail below.

.. note::

   The `NativeMML` output jax from version 2 has not been ported to
   version 3, and is unlikely to be.  See the :ref:`mathml-output`
   section for details.

-----


.. _chtml-component:

output/chtml
============

The `output/chtml` component includes the CommonHTML output processor.
When loaded, it causes data for handling the MathJax TeX font to be
loaded as well (via a separate component).  Currently, this is the
only font available in version 3 (see the :ref:`font-support` section
for more information).  The `output/chtml/fonts/tex` component holds
the font data.

* See the :ref:`html-output` section for details on the CommonHTML
  output processor.

* See the :ref:`chtml-options` section for information about
  configuring this component.

-----


.. _svg-component:

output/svg
==========

The `output/svg` component includes the SVG output processor.
When loaded, it causes data for handling the MathJax TeX font to be
loaded as well (via a separate component).  Currently, this is the
only font available in version 3 (see the :ref:`font-support` section
for more information).  The `output/svg/fonts/tex` component holds
the font data.

* See the :ref:`svg-output` section for details on the SVG
  output processor.

* See the :ref:`svg-options` section for information about
  configuring this component.

|-----|
.. _accessibility-components:

############################
/W. Accessibility Components
############################

Currently, there are three components designed specifically to support
assistive technology.

* :ref:`semantic-enrich-component`
* :ref:`complexity-component`
* :ref:`explorer-component`
* :ref:`assistive-mml-component`

To load one of these components, include the component name in the
:attr:`load` array of the :attr:`loader` block of your MathJax
configuration.  For example:

.. code-block:: html

   <script>
   MathJax = {
     loader: {
       load: ['a11y/semantic-enrich']
     }
   }
   </script>

to load the `semantic-enrich` extension.

.. note::

   The `auto-collapse` extension has not yet been converted to version
   3, but will be in a future release.

.. note::

   The `assistive-menu` extension is now part of the standard
   :ref:`contextual menu extension <menu-component>`, so doesn't have
   to be loaded separately.

-----

.. _semantic-enrich-component:

a11y/semantic-enrich
====================

The `semantic-enrich` component connects MathJax with the `Speech
Rule Engine <https://github.com/zorkow/speech-rule-engine>`_, which
allows MathJax to generate speech strings for the mathematics that it
processes.  These can be attached to the output for use by screen
readers, or for use with the :ref:`explorer-component` component
described below.

See the :ref:`semantic-enrich-options` section for information about
configuring this component.

-----


.. _complexity-component:

a11y/complexity
===============

The `complexity` component computes a complexity measure for each
element within an expression, and allows complex expressions to
"collapse" to make them both shorter, and simpler to read.  The
collapsed portions can be expanded with a click of the mouse, or by
keyboard actions when using the :ref:`explorer-component` extension
described below.

See the :ref:`complexity-options` section for information about
configuring this component.

-----


.. _explorer-component:

a11y/explorer
=============

The `explorer` component allows readers to explore a mathematical
expression interactively.  When an expression is focused (by tabbing to
it, or by clicking on it), a reader can "enter" the expression by
pressing shift-space on the keyboard.  The arrow keys then move the
reader through the expression (down moves to more detail by selecting
the first subexpression of the selected expression, up moves to more
complete expressions, while left and right move through the
sub-expressions at the current level).  See the :ref:`accessibility`
section for more details about using the expression explorer and its
various features.

See the :ref:`explorer-options` section for information about
configuring this component.

-----


.. _assistive-mml-component:

a11y/assistive-mml
==================

The `assistive-mml` component embeds visually hidden MathML alongside
MathJax's visual rendering while hiding the visual rendering from
assistive technology (AT) such as screenreaders. This allows most
MathML-enabled screenreaders to read out the underlying
mathematics. It's important to note that Presentation MathML is
usually not expressive enough to voice the mathematics properly in all
circumstances, which is why screenreaders have to rely on heuristics
to analyze the MathML semantically.  See the
:ref:`screenreader-support` section for more details about screen
reader support via the `assistive-mml` extension.

See the :ref:`assistive-mml-options` section for information about
configuring this component.


|-----|
.. _misc-components:

############################
/W. Miscellaneous Components
############################

There are several miscellaneous components that don't fit into other
categories.  These are:

* :ref:`startup-component`
* :ref:`safe-component`
* :ref:`menu-component`
* :ref:`litedom-component`
* :ref:`core-component`
* :ref:`loader-component`

They are described in more detail below.

----


.. _startup-component:

startup
=======

The `startup` component is the one that you would use if you are not
using a :ref:`combined component <combined-components>`, but are using
the ``load`` array to specify the components you want to load.  Like a
combined component, you would load this directly via a `<script>` tag,
as in

.. code-block:: html

   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
   </script>

This is the component that manages the global :data:`MathJax` object.
It is responsible for creating the needed objects (like the input and
output jax), and for adding the typesetting and conversion methods
described in the :ref:`web-typeset` section.

See the :ref:`startup-options` section for information about
configuring this component.

-----


.. _safe-component:

ui/safe
=======

The `ui/safe` component is intended for use in situations where your
readers will be allowed to enter mathematical notation into your pages
themselves, such as a question-and-answer site, or a blog with user
comments.  It filters the mathematics on the page to make sure that
certain values within the mathematics are not misused by the reader to
cause problems on your page.  For example, the ``\href`` macro
normally could be used to insert ``javascript:`` URLs into the page;
the `ui/safe` extension can be used to prevent that.

See the :ref:`safe-options` section for more information on what is
filtered and how to control the level of filtering being performed.
See :ref:`safe-typesetting` for additional details.

-----


.. _menu-component:

ui/menu
=======

The `ui/menu` component implements the MathJax contextual menu, which
allows you to obtain the MathML or original format of the mathematics,
change parameters about the output renderer, enable accessibility
features, and so on.

See the :ref:`menu-options` section for information about
configuring this component.

-----


.. _litedom-component:

adaptors/liteDOM
================

The `adaptors/liteDOM` component implements an alternative to the
browser DOM that can be used to parse HTML pages outside of a
browser.  This can be used in Node applications that don't have access
to a browser DOM, or in webworkers that can't access the document DOM.

-----


.. _core-component:

core
====

The `core` component includes the code that is required for all other
components, including the base classes for input and output jax, math
documents, math items within those documents, DOM adaptors, and so
on.  This component is loaded automatically when needed, so you don't
usually have to load it yourself.  But you can include it if you are
creating your own combined component.

-----


.. _loader-component:

loader
======

The `loader` component contains the code needed to load other
components.  It is included automatically by the
:ref:`startup-component` component, but if you don't want the features
created by the `startup` module, you can use the `loader` component
instead to load the MathJax component you need.  You can even use it
as a general loader for other javascript, if you want.

See the :ref:`loader-options` section for information about
configuring this component.

|-----|
.. _web-typeset:

##########################################
/W. Typesetting and Converting Mathematics
##########################################

There are two main uses for MathJax:

* Typesetting all the mathematics within a web page, and
* Converting a string containing mathematics into another form.

In version 2, MathJax could perform the first function very well, but
it was much harder to do the second.  MathJax version 3 makes both
easy to do.  Both these tasks are described below.


.. _typeset-page:

Typesetting Math in a Web Page
==============================

MathJax makes it easy to typeset all the math in a web page, and in
fact it will do this automatically when it is first loaded unless you
configure it not to.  So this is one of the easiest actions to perform
in MathJax; if your page is static, there is nothing to do but load
MathJax.

If your page is dynamic, and you may be adding math after the page is
loaded, then you will need to tell MathJax to typeset the mathematics
once it has been inserted into the page.  There are two methods for
doing that: :meth:`MathJax.typeset()` and
:meth:`MathJax.typesetPromise()`.

The first of these, :meth:`MathJax.typeset()`, typesets the page, and
does so immediately and synchronously, so when the call finishes, the
page will have been typeset.  Note, however, that if the math includes
actions that require additional files to be loaded (e.g., TeX input
that uses `\require`, or that includes autoloaded extensions), then
an error will be thrown.  You can use the ``try/catch`` command to
trap this condition.

The second, :meth:`MathJax.typesetPromise()`, performs the typesetting
asynchronously, and returns a promise that is resolved when the
typesetting is complete.  This properly handles loading of external
files, so if you are expecting to process TeX input that can include
`\require` or autoloaded extensions, you should use this form of
typesetting.  It can be used with ``await`` as part of a larger
``async`` function.

Both functions take an optional argument, which is an array of elements
whose content should be processed.  An element can be either an actual
DOM element, or a CSS selector string for an element or collection of
elements.  Supplying an array of elements will restrict the
typesetting to the contents of those elements only.

.. _typeset-async:

Handling Asynchronous Typesetting
---------------------------------

It is generally a bad idea to try to perform multiple asynchronous
typesetting calls simultaneously, so if you are using
:meth:`MathJax.typesetPromise()` to make several typeset calls, you
should chain them using the promises they return.  For example:

.. code-block:: javascript

   MathJax.typesetPromise().then(() => {
     // modify the DOM here
     MathJax.typesetPromise();
   }).catch((err) => console.log(err.message));

This approach can get complicated fast, however, so you may want to
maintain a promise that can be used to chain the later typesetting
calls.  For example,

.. code-block:: javascript

   let promise = Promise.resolve();  // Used to hold chain of typesetting calls

   function typeset(code) {
     promise = promise.then(() => MathJax.typesetPromise(code()))
                      .catch((err) => console.log('Typeset failed: ' + err.message));
     return promise;
   }

Then you can use :meth:`typeset()` to run code that changes the DOM
and typesets the result.  The :meth:`code` that you pass it does the
DOM modifications and returns the array of elements to typeset, or
:data:`null` to typeset the whole page.  E.g.,

.. code-block:: javascript

   typeset(() => {
     const math = document.querySelector('#math');
     math.innerHTML = '$$\\frac{a}{1-a^2}$$';
     return [math];
   });

would replace the contents of the element with ``id="math"`` with the
specified fraction and have MathJax typeset it (asynchronously).
Because the :meth:`then()` call returns the result of
:meth:`MathJax.typesetPromise()`, which is itself a promise, the
:meth:`then()` will not resolve until that promise is resolved; i.e.,
not until the typesetting is complete.  Finally, since the
:meth:`typeset()` function returns the :data:`promise`, you can use
``await`` in an ``async`` function to wait for the typesetting to
complete:

.. code-block:: javascript

   await typeset(...);

Note that this doesn't take the initial typesetting that MathJax
performs into account, so you might want to use
:attr:`MathJax.startup.promise` in place of :data:`promise` above.
I.e., simply use

.. code-block:: javascript

   function typeset(code) {
     MathJax.startup.promise = MathJax.startup.promise
       .then(() => MathJax.typesetPromise(code()))
       .catch((err) => console.log('Typeset failed: ' + err.message));
     return MathJax.startup.promise;
   }

This avoids the need for the global :data:`promise` variable, and
makes sure that your typesetting doesn't occur until the initial
typesetting is complete.

.. _tex-reset:

Resetting Automatic Equation Numbering
--------------------------------------

The TeX input jax allows you to automatically number equations. When
modifying a page, this can lead to problems as numbered equations may
be removed and added; most commonly, duplicate labels lead to issues.

You can reset equation numbering using the command

   .. describe:: MathJax.texReset([start])

where ``start`` is the number at which to start equation numbering.


.. _typeset-clear:

Updating Previously Typeset Content
-----------------------------------

MathJax keeps track of all the math that it has typeset within your
page.  This is so that if you change the output renderer (using the
MathJax contextual menu), it can be changed to use the new format, for
example; or if you change the accessibility settings, say to enable
the expression explorer, all the math can be updated to include the
speech strings that it uses.  If you modify the page to include new
mathematics and call :meth:`MathJax.typeset()` or
:meth:`MathJax.typesetPromise()`, the newly typeset mathematics will be
added to the list of already typeset mathematics, as you would expect.

If you modify the page to remove content that contains typeset
mathematics, you will need to tell MathJax about that so that it knows
the typeset math that you are removing is no longer on the page.  You
do this by using the :meth:`MathJax.typesetClear()` method.

When called with no arguments, :meth:`MathJax.typesetClear()` tells
MathJax to forget about all the math that has been typeset so far.
Note that the math will remain in the page as typeset math, but
MathJax will no longer know anything about it.  For example, that
means that changes to the output renderer or accessibility settings
will not affect any of the math that was typeset previously.

If you remove math from only a portion of the page, you can call
:meth:`MathJax.typesetClear()` passing it an array of container
elements that have been (or will be) removed, and MathJax will forget
about the math that is within those containers, while remembering the
rest of the math on the page.  For example, if you have an element
with ``id="has-math"`` that you have previously typeset, and you are
planning to replace the contents of this element with new content
(stored in a variable ``new_html``) that needs to be typeset, you
might use something like:

.. code-block:: javascript

   const node = document.getElementById('has-math');
   MathJax.typesetClear([node]);
   node.innerHTML = new_html;
   MathJax.typesetPromise([node]).then(() => {
     // the new content is has been typeset
   });

The argument passed to :meth:`MathJax.typsetClear()` can be an actual
DOM element, as in the example above, or a CSS selector string (e.g.,
``'#has-math'``), or an array of these.  The selector can specify more
than one container element (e.g., via a class selector).

If you are using automatic equation numbers and insert new content in
the middle of the page, that may require the equation numbers to be
adjusted throughout the page.  In that case, you can do

.. code-block:: javascript

   MathJax.startup.document.state(0);
   MathJax.texReset();
   MathJax.typeset();

to force MathJax to reset the page to the state it was before MathJax
processed it (i.e., remove its typeset math), reset the TeX automatic
line numbering and labels, and then re-typeset the contents of the
page from scratch.


.. _get-math-items:

Looking up the Math on the Page
-------------------------------

MathJax saves its information about a particular expression that it
has typeset in an object called a ``MathItem``; each typeset
expression has an associated MathItem.  You can look up the MathItems
using the :meth:`MathJax.startup.document.getMathItemsWithin()`
function.  You pass this a container element (or a CSS selector for an
element or collection of elements, or an array of containers or
selectors) and it will return an array of the MathItems that are
within those containers.  E.g.,

.. code-block:: javascript

   MathJax.startup.document.getMathItemsWithin(document.body);

will return an array of all the MathItems for the typeset math on the
page.  See the `MathItem definition
<https://github.com/mathjax/MathJax-src/blob/master/ts/core/MathItem.ts>`__
for details on the contents of the MathItem structure.  The MathItem
is the v3 replacement for the v2 `ElementJax` object, and
:meth:`getMathItemsWithin()` performs a
similar function to the v2 function :meth:`MathJax.Hub.getAllJax()`.


.. _safe-typesetting:

Typesetting User-Supplied Content
---------------------------------

Mathematics formats like LaTeX and MathML allow a powerful range of
layout options, including access to hyperlinks, CSS styles, font
selection and sizing, spacing, and so on.  Such features give you a
great deal of flexibility in producing the mathematics for your pages,
but if your readers are allowed to enter mathematics into your pages
(e.g., for a question-and-answer site, or in comments on a blog),
these features can be abused to cause problems for other readers and
pose a potential security risk to them.  For example, the TeX
``\href`` command can be used to insert ``javascript:`` links into the
page, while the ``\style`` macro could be used to disrupt the user
interface or layout of your pages.

In order to limit the potential interference that could be caused by
the mathematics entered by your readers, MathJax provides the
`ui/safe` extension.  This extension filters the mathematics on the
page in order to try to remove problematic attributes, like javascript
links, or font sizes that are too large or too small, or style
settings that would be disruptive to the page layout.  If your page
allows your readers to post content that includes mathematics
processed by MathJax, you should strongly consider using the
`ui/safe` extension.

See the :ref:`safe-options` section for details of how to load and
configure the `ui/safe` extension.



.. _load-for-math:

Loading MathJax Only on Pages with Math
---------------------------------------

The MathJax combined configuration files are large, and so you may
wish to include MathJax in your page only if it is necessary.  If you
are using a content-management system that puts headers and footers
into your pages automatically, you may not want to include MathJax
directly, unless most of your pages include math, as that would load
MathJax on *all* your pages.  Once MathJax has been loaded, it should
be in the browser's cache and load quickly on subsequent pages, but
the first page a reader looks at will load more slowly.  In order to
avoid that, you can use a script like the following one that checks to
see if the content of the page seems to include math, and only loads
MathJax if it does.  Note that this is not a very sophisticated test,
and it may think there is math in some cases when there really isn't
but it should reduce the number of pages on which MathJax will have to
be loaded.

Create a file called ``check-for-tex.js`` containing the following:

.. code-block:: javascript

   (function () {
     var body = document.body.textContent;
     if (body.match(/(?:\$|\\\(|\\\[|\\begin\{.*?})/)) {
       if (!window.MathJax) {
         window.MathJax = {
           tex: {
             inlineMath: {'[+]': [['$', '$']]}
           }
         };
       }
       var script = document.createElement('script');
       script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
       document.head.appendChild(script);
     }
   })();

and then use

.. code-block:: html

   <script src="check-for-tex.js" defer></script>

in order to load the script when the page content is ready.  Note
that you will want to include the path to the location where you
stored ``check-for-tex.js``, that you should change
``tex-chtml.js`` to whatever component file you want to use, and that
the ``window.MathJax`` value should be set to whatever configuration
you want to use.  In this case, it just adds dollar signs to the
in-line math delimiters.  Finally, adjust the ``body.match()`` regular
expression to match whatever you are using for math delimiters.

This simply checks if there is something that looks like a TeX in-line
or displayed math delimiter, and loads MathJax if there is.  If you
are using different delimiters, you will need to change the pattern to
include those (and exclude any that you don't use).  If you are using
AsciiMath instead of TeX, then change the pattern to look for the
AsciiMath delimiters.

If you are using MathML, you may want to use

.. code-block:: javascript

   if (document.body.querySelector('math')) {...}

for the test instead (provided you aren't using namespace prefixes,
like `<m:math>`).

-----

.. _convert-math:

Converting a Math String to Other Formats
=========================================

An important use case for MathJax is to convert a string containing
mathematics (in one of the three forms that MathJax understands) and
convert it into another form (either MathML, or one of the output
formats that MathJax supports).  This was difficult to do in MathJax
version 2, but easy to do in version 3.

When MathJax starts up, it creates methods for converting from the
input format(s) to the output format(s) that you have loaded, and to
MathML format.  For example, if you have loaded the MathML input jax
and the SVG output jax (say by using the ``mml-svg`` component), then
MathJax will create the following conversion methods for you:

   .. describe:: MathJax.mathml2svg(math[,options])
                 MathJax.mathml2svgPromise(math[,options])
                 MathJax.mathml2mml(math[,options])
                 MathJax.mathml2mmlPromise(math[,options])

If you had loaded the TeX input jax as well, you would also get four
more methods, with ``tex`` in place of ``mathml``.

As the names imply, the ``Promise`` functions perform the conversion
asynchronously, and return promises, while the others operate
synchronously and return the converted form immediately.  The first
two functions (and any others like them) produce DOM elements as the
results of the conversion, with the promise versions passing that to
their :meth:`then()` functions as their argument (see the section on
:ref:`convert-async` below), and the non-promise versions returning
them directly.  You can insert these DOM elements into the document
directly, or you can use their :attr:`outerHTML` property to obtain
their serialized string form.

The functions that convert to MathML produce serialized MathML strings
automatically, rather than DOM elements.  (You can use the browser's
:attr:`DOMParser` object to convert the string into a MathML DOM tree
if you need one.)


.. _conversion-options:

Conversion Options
------------------

All four of these functions require an argument that is the math
string to be converted (e.g., the serialized MathML string, or in the
case of :meth:`tex2chtml()`, the TeX or LaTeX string).  You can also
pass a second argument that is an object containing options that
control the conversion process.  The options that can be included are:

* :attr:`display`, a boolean specifying whether the math is in
  display-mode or not (for TeX input).  Default is ``true``.
* :attr:`em`, a number giving the number of pixels in an ``em`` for
  the surrounding font.  Default is ``16``.
* :attr:`ex`, a number giving the number of pixels in an ``ex`` for
  the surrounding font.  Default is ``8``.
* :attr:`containerWidth`, a number giving the width of the container,
  in pixels.  Default is 80 times the :attr:`ex` value.
* :attr:`lineWidth'`, a number giving the line-breaking width in
  ``em`` units.  Default is a very large number (100000), so
  effectively no line breaking.
* :attr:`scale`, a number giving a scaling factor to apply to the
  resulting conversion.  Default is 1.

For example,

.. code-block:: javascript

   let html = MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: false});

would convert the TeX expression ``\sqrt{x^2+1}`` to HTML as an
in-line expression, with ``em`` size being 12 pixels and ``ex`` size
being 6 pixels.  The result will be a DOM element containing the HTML
for the expression.  Similarly,

.. code-block:: javascript
   
   let html = MathJax.tex2chtml('\\sqrt{x^2+1}', {em: 12, ex: 6, display: false});
   let text = html.outerHTML;

sets :data:`text` to be the serialized HTML string for the expression.


.. _get-metrics:

Obtaining the Output Metrics
----------------------------

Since the :attr:`em`, :attr:`ex`, and :attr:`containerWidth` all
depend on the location where the math will be placed in the document
(they are values based on the surrounding text font and the container
elements width), MathJax provides a method for obtaining these values
from a given DOM element.  The method

   .. describe:: MathJax.getMetricsFor(node, display)

takes a DOM element (``node``) and a boolean (``display``), indicating
if the math is in display mode or not, and returns an object
containing all six of the options listed above.  You can pass this
object directly to the conversion methods discussed above.  So you can
do something like

.. code-block:: javascript

   let node = document.querySelector('#math');
   let options = MathJax.getMetricsFor(node, true);
   let html = MathJax.tex2svg('\\sqrt{x^2+1}', options);
   node.appendChild(html);

in order to get the correct metrics for the (eventual) location of
the math that is being converted.  Of course, it would be easier to
simply insert the TeX code into the page and use
:meth:`MathJax.typeset()` to typeset it, but this is just an example
to show you how to obtain the metrics from a particular location in
the page.

Note that obtaining the metrics causes a page refresh, so it is
expensive to do this.  If you need to get the metrics from many
different locations, there are more efficient ways, but these are
advanced topics to be dealt with elsewhere.


.. _conversion-stylesheet:

Obtaining the Output Stylesheet
-------------------------------

The output from the SVG and CommonHTML output jax both depend on CSS
stylesheets in order to properly format their results.  You can obtain
the SVG stylesheet element by calling

.. code-block:: javascript

   MathJax.svgStylesheet();

and the HTML stylesheet from

.. code-block:: javascript

   MathJax.chtmlStylesheet();

The CommonHTML output jax CSS can be quite large, so the output jax
tries to minimize the stylesheet by including only the styles that are
actually needed for the mathematics that has been processed by the
output jax.  That means you should request the stylesheet only *after*
you have typeset the mathematics itself.

Moreover, if you typeset several expressions, the stylesheet will
include everything needed for all the expressions you have typeset.
If you want to reset the stylesheet, then use

.. code-block:: javascript

   MathJax.startup.output.clearCache();

if the output jax is the CommonHTML output jax.  So if you want to
produce the style sheet for a single expression, issue the
:meth:`clearCache()` command just before the :meth:`tex2chtml()` call.


.. _convert-async:

Asynchronous Conversion
-----------------------

If you are converting TeX or LaTeX that might use `\require` to load
extensions, or where extensions might be autoloaded, you will either
need to use one of the "full" components that include all the
extensions, or preload all the extensions you need if you plan to use
the synchronous calls listed above.  Otherwise, you can use the
promise-based calls, which handle the loading of extensions
transparently.

For example,

.. code-block:: javascript

   let node = document.querySelector('#math');
   let options = MathJax.getMetricsFor(node, true);
   MathJax.tex2chtmlPromise('\\require{bbox}\\bbox[red]{\\sqrt{x^2+1}}', options)
     .then((html) => {
       node.appendChild(html);
       let sheet = document.querySelector('#MJX-CHTML-styles');
       if (sheet) sheet.parentNode.removeChild(sheet);
       document.head.appendChild(MathJax.chtmlStylesheet());
     });

would get the metrics for the element with ``id="math"``, convert
the TeX expression using those metrics (properly handling the
asynchronous load needed for the ``\require`` command); then when the
expression is typeset, it is added to the document and the CHTML
stylesheet is updated.

|-----|
.. _web-hosting:

####################################
/W. Hosting Your Own Copy of MathJax
####################################

We recommend using a CDN service if you can, but you can also install
MathJax on your own server, or locally on your own hard disk.  You may
need to do this if you are :ref:`creating a custom build
<web-custom-build>` of MathJax, for example, or if you wish to use
MathJax off-line.


.. _obtain-mathjax:

Acquiring the MathJax Code
==========================

In order to host your own version of MathJax, you must first obtain a
copy of the MathJax code.  That can be done in several ways, the
easiest being to use ``npm`` (the node package manager), or ``git`` to
get MathJax from its GitHub development repository.


.. _mathjax-npm:

Getting MathJax via npm
-----------------------

To include MathJax in your project, use the command

.. code-block:: shell

   npm install mathjax@3

This will install MathJax in ``node_modules/mathjax`` subdirectory of
your current directory.  It will include the pre-built components in
the ``node_modules/mathjax/es5`` directory.  (Note that it is
important to use ``mathjax@3``, as we are still making v2 releases,
and so the latest mathjax npm package may not be the v3 one.  The
``latest`` version on ``npmjs.com`` appears to be chronological rather
than by version number.)

If you need access to the source code, as well.  Then use

.. code-block:: shell

   npm install mathjax-full@3

which installs MathJax in the ``node_modules/mathjax-full``
subdirectory, the source files for the components in
``node_modules/mathjax-full/components/src``, the typescript source
files for MathJax in ``node_modules/mathjax-full/ts``, and the
compiled javascript files from the typescript source in
``node_modules/mathjax-full/js``.


.. _mathjax-git:

Getting MathJax via git
-----------------------

To obtain a copy of MathJax from the GitHub component repository, use the
command

.. code-block:: shell

   git clone https://github.com/mathjax/MathJax.git mathjax

This will install a copy of MathJax in the ``mathjax/es5`` directory.

If you need access to the source code as well, then use

.. code-block:: shell

   git clone https://github.com/mathjax/MathJax-src.git mathjax

which will install the source code for MathJax in the
``mathjax`` sub-directory of your current directory.  You will need to
compile the typescript source files and build the component files by
hand, as they are not part of the repository itself.  To do this, do
the following:

.. code-block:: shell

   cd mathjax
   npm install
   npm run compile
   npm run make-components
   cd ..

This will compile the typescript source files from the ``mathjax/ts``
directory into javascript files in the ``mathjax/js`` directory, and
then will build the component files from ``mathjax/components/src``
into the ``mathjax/es5`` directory.


.. _serve-files:

Make the Files Available
========================

Once you have acquired the MathJax files by one of the methods
described above, you need to make the proper files available on your
web server.  Note that most of the files in the MathJax distribution
are not needed on the server.  For example, the ``mathjax/ts``
directory is typescript source code for MathJax, and this is compiled
into the javascript files found in the ``mathjax/js`` directory.  But
even these are not the files you want on your server.  These
javascript files are further processed into the MathJax components
stored in the ``mathjax/es5`` files using the data in the
``mathjax/components/src`` directory.

It is the contents of the ``mathjax/es5`` directory that
you want to make available on your server, as these are the files that
are served from the CDNs that provide MathJax.  You should move them
to a convenient location on your server.  This might be a top-level
directory called ``mathjax``, for example.


.. _link-files:

Linking to you Your Copy of MathJax
===================================

You can include MathJax in your web page by putting

.. code-block:: html

    <script src="path-to-MathJax/tex-chtml.js" id="MathJax-script" async></script>

in your document's ``<head>`` block.  Here, ``tex-chtml.js`` is the
combined component that you are loading, and this is just an example; you
will need to pick the one you want to use.  See the section on
:ref:`web-configuration` for more details.

The ``path-to-MathJax`` should be replaced by the URL for the main
MathJax directory, so if you have put the ``mathjax/es5``
directory at the top level of you server's web site and named it
``mathjax``, you could use

.. code-block:: html

    <script src="/mathjax/tex-chtml.js" id="MathJax-script" async></script>

to load MathJax in your page.  For example, your page could look like

.. code-block:: html

    <html>
        <head>
            ...
            <script src="/mathjax/tex-chtml.js" id="MathJax-script" async></script>
        </head>
        <body>
            ...
        </body>
    </html>


.. _same-origin-policy:

Fonts on Shared Servers
=======================

Typically, you want to have MathJax installed on the same server as
your web pages that use MathJax. There are times, however, when that
may be impractical, or when you want to use a MathJax installation at
a different site. For example, a departmental server at
``www.math.yourcollege.edu`` might like to use a college-wide
installation at ``www.yourcollege.edu`` rather than installing a
separate copy on the departmental machine. MathJax can certainly be
loaded from another server, but there is one important caveat ---
The same-origin security policy for cross-domain
scripting.

Some browsers' (e.g., Firefox's) interpretation of the same-origin
policy is more strict than most other browsers, and it affects how
fonts are loaded with the ``@font-face`` CSS directive. MathJax’s
CommonHTML output modes use this directive to load web-based math
fonts into a page when the user doesn’t have them installed locally on
their own computer. These browsers' security policies, however, only allow
this when the fonts come from the same server as the web page itself,
so if you load MathJax (and hence its web fonts) from a different
server, they won’t be able to access those web fonts. In this case,
MathJax’s CommonHTML output mode will not show the correct
fonts.

There is a solution to this, however, if you manage the server where
MathJax is installed, and if that server is running the Apache web
software. In the remote server’s MathJax folder, create a file
called ``.htaccess`` that contains the following lines:

:: 

    <FilesMatch "\.(ttf|otf|eot|woff)$">
    <IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    </IfModule>
    </FilesMatch>

and make sure the permissions allow the server to read this file. (The
file’s name starts with a period, which causes it to be an "invisible"
file on unix-based operating systems. Some systems, particularly those
with graphical user interfaces, may not allow you to create such
files, so you might need to use the command-line interface to
accomplish this.)

This file should make it possible for pages at other sites to load
MathJax from this server in such a way that Firefox (and the other
browsers with similar same-origin policies that apply to fonts) will
be able to download the web-based fonts. If you want to restrict the
sites that can access the web fonts, change the
``Access-Control-Allow-Origin`` line to something like:

::

   Header set Access-Control-Allow-Origin "http://www.math.yourcollege.edu"

so that only pages at ``www.math.yourcollege.edu`` will be able to
download the fonts from this site. See the open font library
discussion of web-font linking for more details.


.. _firefox-local-fonts:

Firefox and Local Fonts
=======================

Firefox's same-origin security policy affects its ability to load
web-based fonts, as described above. This has implications not only to
cross-domain loading of MathJax, but also to using MathJax locally
from your hard disk. Firefox's interpretation of the same-origin
policy for local files used to be that the "same domain" for a page is
the directory where that page exists, or any of its subdirectories.
This allowed MathJax to be loaded from a subdirectory of the director
where the web page was loaded.

This is no longer the case with Firefox starting with version 68 and
going forward (see `their documentation
<https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp#Local_File_Security_in_Firefox_68>`__).
Now there is no same origin for a ``file://`` URL (the origin for a
page loaded from a ``file://`` URL is unique).

This means there are limited options for using MathJax in Firefox with
a local copy of MathJax.  The easiest option is to use the SVG output
renderer rather than the CommonHTML output, as that does not require
fonts to be loaded, so avoids the same-origin issue.  Alternatively,
you could install the MathJax TeX fonts as system fonts so that
Firefox doesn't have to try to load them as web fonts.  

This is an unfortunate restriction for MathJax (though we understand
their reasoning), but it is a limitation imposed by Firefox's
security model that MathJax can not circumvent. Currently, this is not
a problem for other browsers, though there is no guarantee that it
won't be in the future.

|-----|
.. _web-custom-build:

####################################
/W. Making a Custom Build of MathJax
####################################

MathJax provides a number of combined components that load everything
you need to run MathJax with a given input and output format.  Still,
you might find that none of the ones we provide fully suit your
needs, and that you would like to include additional components in the
build, or perhaps want to include customized configuration options.

You can use the MathJax component build tools to make your own custom
component that has exactly the pieces and configuration that you
want. You can also use them to make a custom extension, for example a
TeX input extension, that takes advantage of the components already
loaded, but implements additional functionality.
These possibilities are described in :ref:`custom-component` below.

It is also possible to make a completely custom build of MathJax that
doesn't use the MathJax components at all, but includes direct calls
to the MathJax source files.  This is described in :ref:`custom-build`
below.

If you wish to include MathJax as part of a larger project, you can
use either of the techniques to do that, and make a webpacked file
that includes your own project code as well as MathJax.


.. _getting-ready:

Getting Things Ready
====================

Your first step is to download a copy of MathJax via ``npm`` or
``git``, as described in the section on :ref:`obtain-mathjax`.

* If you use ``npm``, you will want to install the ``mathjax-full``
  package rather than the ``mathjax`` package, since the former
  includes all the source code, in both its original and compiled
  forms, along with the webpacked components.

..

* If you use ``git``, be sure to run the commands to compile and make
  the components, as listed in :ref:`mathjax-git`.

In either case, you should have a ``js``, an ``es5``, and a
``components`` directory, either in the ``node_modules/mathjax-full``
directory (for ``npm`` installations) or in the main directory (for
``git`` installations).

Your second step is to obtain the tools needed to package your custom
code using ``webpack``.  Use the commands

.. code-block:: shell

   npm install webpack
   npm install webpack-cli
   npm install terser-webpack-plugin
   npm install babel-loader
   npm install @babel/core
   npm install @babel/preset-env

to install ``webpack`` and its needed libraries.  Once this is done,
you should be able to make the components described below.  The
building instructions assume you used ``npm`` to acquire MathJax; if
you used ``git``, then you will need to remove
``node_modules/mathjax-full`` from the paths that include them.

-----


.. _custom-component:

Building a Custom Component
===========================

MathJax comes with a number of predefined components, and you can use
`their definitions
<https://github.com/mathjax/MathJax-src/tree/master/components/src>`__ as a starting
point for your own custom component.  There are also custom component
examples (with documentation) in the `MathJax web demos repository
<https://github.com/mathjax/MathJax-demos-web#customization>`__, which are
similar to the ones described here.

There are two kinds of components you could build:

* A **combined component** that brings together several other
  components (the ``tex-chtml`` component is a combined component)

..

* A **extension component** that contains what is needed for one
  feature and can be loaded along with other components to add
  that feature to MathJax.

We describe how you can create each of these below.  In both cases,
you should create a directory to hold your component's support files.
You will need the main control file for the component (that includes
the code that defines the component), and a webpack control file that
will tell MathJax's build tools how to handle your component.  These
will be discussed in the sections below.


.. _custom-combined:

A Custom Combined Component
---------------------------

After downloading a copy of MathJax as described in the section on
:ref:`getting-ready`, make the directory for your component and
``cd`` to that directory.  We will assume the directory is called
``custom-mathjax`` for this discussion.

For this example, we will create a custom build that has the TeX input
jax and the SVG output jax, and we will load the ``newcommand``,
``ams``, and ``configmacros`` extensions, but will not include
``require`` or ``autoload``, so the user will not be able load any
additional TeX extensions.  This component also includes the
contextual menu.


The Control File
................

Create a javascript file to house the component and call it
``custom-mathjax.js``.  The file should contain the following code (we
assume here that you used ``npm`` to install MathJax.  If not, you may
need to adjust the locations in the :func:`require()` commands).

.. code-block:: javascript

   //
   //  Initialize the MathJax startup code
   //
   require('mathjax-full/components/src/startup/lib/startup.js');

   //
   //  Get the loader module and indicate the modules that
   //  will be loaded by hand below
   //
   const {Loader} = require('mathjax-full/js/components/loader.js');
   Loader.preLoad(
     'loader', 'startup',
     'core',
     'input/tex-base',
     '[tex]/ams',
     '[tex]/newcommand',
     '[tex]/configmacros',
     'output/svg', 'output/svg/fonts/tex.js',
     'ui/menu'
   );

   //
   // Load the components that we want to combine into one component
   //   (the ones listed in the preLoad() call above)
   //
   require('mathjax-full/components/src/core/core.js');

   require('mathjax-full/components/src/input/tex-base/tex-base.js');
   require('mathjax-full/components/src/input/tex/extensions/ams/ams.js');
   require('mathjax-full/components/src/input/tex/extensions/newcommand/newcommand.js');
   require('mathjax-full/components/src/input/tex/extensions/configmacros/configmacros.js');

   require('mathjax-full/components/src/output/svg/svg.js');
   require('mathjax-full/components/src/output/svg/fonts/tex/tex.js');

   require('mathjax-full/components/src/ui/menu/menu.js');

   //
   // Update the configuration to include any updated values
   //
   const {insert} = require('mathjax-full/js/util/Options.js');
   insert(MathJax.config, {
     tex: {
       packages: {'[+]': ['ams', 'newcommand', 'configmacros']}
     }
   });

   //
   // Loading this component will cause all the normal startup
   //   operations to be performed
   //
   require('mathjax-full/components/src/startup/startup.js');


This loads the various components that we want to include in the
combined component, including the standard startup code so that the
usual startup process is included.


The Webpack Configuration
.........................

Next, create the file ``webpack.config.js`` that includes the
following:

.. code-block:: javascript

   const PACKAGE = require('mathjax-full/components/webpack.common.js');

   module.exports = PACKAGE(
     'custom-mathjax',                     // the name of the package to build
     '../node_modules/mathjax-full/js',    // location of the mathjax library
     [],                                   // packages to link to
     __dirname,                            // our directory
     '.'                                   // where to put the packaged component
   );

This file gives the name that will be used for this component
(``custom-mathjax`` in this case), a pointer to where the MathJax
javascript code is to be found (adjust this to suit your setup), an
array of components that we assume are already loaded when this one is
loaded (none in this case), the directory name we are working in
(always ``__dirname``), and the directory where we want the final
packaged component to go (the default is the
``mathjax-full/es5`` directory, but we set it to the directory
containing the source files, and the component will end with
``.min.js``).

Most of the real work is done by the
``mathjax-full/components/webpack.common.js`` file, which is included in
the first line here.


Building the Component
......................

Once these two files are ready, you are ready to build the component.
First, make sure that you have obtained the needed tools as described
in :ref:`getting-ready` above.  Then you should be able to use the
command

.. code-block:: shell

   node ../node_modules/mathjax-full/components/bin/makeAll

to process your custom build.  You should end up with a file
``custom-mathjax.min.js`` in the directory with the other files.  If
you put this on your web server, you can load it into your web pages
in place of loading MathJax from a CDN.  This file will include all
that you need to run MathJax on your pages.  Just add

.. code-block:: html

   <script src="custom-mathjax.min.js" id="MathJax-script" async></script>

to your page and you should be in business (adjust the URL to point to
wherever you have placed the ``custom-mathjax.min.js`` file).

Configuring the Component
.........................

Note that you can still include a  ``MathJax = {...}`` definition in
your web page before loading this custom MathJax build if you want to
customize the configuration for a specific page.  You could also
include configuration within the component itself, as we did for the
TeX ``packages`` array.  This will override any page-provided
configuration, however, so if you want to provide non-standard
defaults that can still be overridden in the page, use

.. code-block:: javascript

   //
   // Update the configuration to include any updated values
   //
   const {insert} = require('mathjax-full/js/util/Options.js');
   insert(MathJax.config, {tex: {packages: {'[+]': ['ams', 'newcommand', 'configmacros']}}}, false);
   MathJax.config = insert({
     // your default options here
   }, MathJax.config);

which will update the TeX packages, and then merge the user's
configuration options into your defaults and set
:attr:`MathJax.config` to the combined options.


Fonts for CommonHTML
....................

If you include the CommonHTML output jax in your custom build, the
actual web fonts are not included in the webpacked file, so you will
probably need to include `fontURL` in the `chtml`
block of your configuration and have it provide a URL where the fonts
can be found.  They are in the
``mathjax-full/es5/output/chtml/fonts/woff-v2`` directory, and
you can put them on your server, or simply point `fontURL` to one of
the CDN directories for the fonts.


.. _custom-extension:

A Custom Extension
------------------

Making a custom extension is very similar to making a custom combined
component.  The main difference is that the extension may rely on
other components, so you need to tell the build system about that so
that it doesn't include the code from those other components.  You
also don't load the extension file directly (like you do the combined
component above), but instead include it in the `load` array of the
`loader` configuration block, and MathJax loads it itself, as
discussed below.

For this example, we make a custom TeX extension that defines new TeX
commands implemented by javascript functions.

The commands implemented here provide the ability to generate
MathML token elements from within TeX by hand. This allows more
control over the content and attributes of the elements produced. The
macros are ``\mi``, ``\mo``, ``\mn``, ``\ms``, and ``\mtext``, and
they each take an argument that is the text to be used as the content
of the corresponding MathML element. The text is not further processed
by TeX, but the extension does convert sequences of the form
``\uNNNN`` (where the ``N`` are hexadecimal digits) into the
corresponding unicode character; e.g., ``\mi{\u2460}`` would produce
U+2460, a circled digit 1, as the content of an ``mi`` element.


The Extension File
..................

After downloading a copy of MathJax as described in the section on
:ref:`getting-ready`, create a directory for the extension named
``custom-extension`` and ``cd`` to it.  Then create the file ``mml.js``
containing the following text:

.. code-block:: javascript

    import {Configuration}  from '../node_modules/mathjax-full/js/input/tex/Configuration.js';
    import {CommandMap} from '../node_modules/mathjax-full/js/input/tex/SymbolMap.js';
    import TexError from '../node_modules/mathjax-full/js/input/tex/TexError.js';

    /**
     * This function prevents multi-letter mi elements from being
     *   interpreted as TEXCLASS.OP
     */
    function classORD(node) {
       this.getPrevClass(node);
       return this;
    }

    /**
     *  Convert \uXXXX to corresponding unicode characters within a string
     */
    function convertEscapes(text) {
       return text.replace(/\\u([0-9A-F]{4})/gi, (match, hex) => String.fromCharCode(parseInt(hex,16)));
    }

    /**
     * Allowed attributes on any token element other than the ones with default values
     */
    const ALLOWED = {
       style: true,
       href: true,
       id: true,
       class: true
    };

    /**
     * Parse a string as a set of attribute="value" pairs.
     */
    function parseAttributes(text, type) {
       const attr = {};
       if (text) {
          let match;
          while ((match = text.match(/^\s*((?:data-)?[a-z][-a-z]*)\s*=\s*(?:"([^"]*)"|(.*?))(?:\s+|,\s*|$)/i))) {
             const name = match[1], value = match[2] || match[3]
             if (type.defaults.hasOwnProperty(name) || ALLOWED.hasOwnProperty(name) || name.substr(0,5) === 'data-') {
                attr[name] = convertEscapes(value);
             } else {
                throw new TexError('BadAttribute', 'Unknown attribute "%1"', name);
             }
             text = text.substr(match[0].length);
          }
          if (text.length) {
             throw new TexError('BadAttributeList', 'Can\'t parse as attributes: %1', text);
          }
       }
       return attr;
    }

    /**
     *  The mapping of control sequence to function calls
     */
    const MmlMap = new CommandMap('mmlMap', {
       mi: ['mmlToken', 'mi'],
       mo: ['mmlToken', 'mo'],
       mn: ['mmlToken', 'mn'],
       ms: ['mmlToken', 'ms'],
       mtext: ['mmlToken', 'mtext']
    }, {
       mmlToken(parser, name, type) {
          const typeClass = parser.configuration.nodeFactory.mmlFactory.getNodeClass(type);
          const def = parseAttributes(parser.GetBrackets(name), typeClass);
          const text = convertEscapes(parser.GetArgument(name));
          const mml = parser.create('node', type, [parser.create('text', text)], def);
          if (type === 'mi') mml.setTeXclass = classORD;
          parser.Push(mml);
       }
    });

    /**
     * The configuration used to enable the MathML macros
     */
    const MmlConfiguration = Configuration.create(
       'mml', {handler: {macro: ['mmlMap']}}
    );


The comments explain what this code is doing.  The main piece needed
to make it a TeX extension is the ``Configuration`` created in the
last few lines.  It creates a TeX package named ``mml`` that handles
macros through a ``CommandMap`` named ``mmlMap`` that is defined just
above it. That command map defines five macros described at the
beginning of this section, each of which is tied to a method named
``mmlToken`` in the object that follows, passing it the name of the
MathML token element to create.  The ``mmlToken`` method is the one
that is called by the TeX parser when the ``\mi`` and other macros are
called.  It gets the argument to the macro, and any optional
attributes, and creates the MathML element with the attributes, using
the argument as the text of the element.


The Webpack Configuration
.........................

Next, create the file ``webpack.config.js`` that includes the
following:

.. code-block:: javascript

   const PACKAGE = require('mathjax-full/components/webpack.common.js');

   module.exports = PACKAGE(
     'mml',                                // the name of the package to build
     '../node_modules/mathjax-full/js',    // location of the mathjax library
     [                                     // packages to link to
        'components/src/core/lib',
        'components/src/input/tex-base/lib'
     ],
     __dirname,                            // our directory
     '.'                                   // where to put the packaged component
   );

This file gives the name that will be used for this component (``mml``
in this case), a pointer to where the MathJax javascript code is to be
found (adjust this to suit your setup), an array of components that we
assume are already loaded when this one is loaded (the ``core`` and
``tex-base`` components in this case), the directory name we are
working in (always ``__dirname``), and the directory where we want the
final packaged component to go (the default is the
``mathjax-full/es5`` directory, but we set it to the directory
containing the source files, and the component will end with
``.min.js``).

Most of the real work is done by the
``mathjax-full/components/webpack.common.js`` file, which is included in
the first line here.


Building the Extension
......................

Once these two files are ready, you are ready to build the component.
First, make sure that you have obtained the needed tools as described
in :ref:`getting-ready` above.  Then you should be able to use the
command

.. code-block:: shell

   node ../node_modules/mathjax-full/components/bin/makeAll

to process your custom build.  You should end up with a file
``mml.min.js`` in the directory with the other files.  If
you put this on your web server, you can load it as a component by
putting it in the ``load`` array of the ``loader`` block of your
configuration, as descrinbed below.


Loading the Extension
.....................

To load your custom extension, you will need to tell MathJax where it
is located, and include it in the file to be loaded on startup.
MathJax allows you to define paths to locations where your extensions
are stored, and then you can refer to the extensions in that location
by using a prefix that represents that location.  MathJax has a
pre-defined prefix, ``mathjax`` that is the default prefix when none
is specified explicitly, and it refers to the location where the main
MathJax file was loaded (e.g., the file ``tex-svg.js``, or
``startup.js``).

You can define your own prefix to point to the location of your
extensions by using the ``paths`` object in the ``loader`` block of
your configuration.  In our case (see code below), we add a ``custom``
prefix, and have it point to the URL of our extension (in this case,
the same directory as the HTML file that loads it, represented by the
URL ``.``).  We use the ``custom`` prefix to specify
``[custom]/mml.min.js`` in the ``load`` array so that our extension
will be loaded.

Finally, we add the ``mml`` extension to the ``packages`` array in the
``tex`` block of our configuration via the special notation ``{'[+]':
[...]}`` that tells MathJax to append the given array to the existing
``packages`` array that is already in the configuration by default.
So this uses all the packages that were already specified, plus our
new ``mml`` package that is defined in our extension.

The configuration and loading of MathJax now looks something like this:

.. code-block:: html

   <script>
   MathJax = {
      loader: {
         load: ['[custom]/mml.min.js'],
         paths: {custom: '.'}
      },
      tex: {
         packages: {'[+]': ['mml']}
      }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
   </script>

You should change the ``custom: '.'`` line to point to the actual URL for
your server.

This example loads the ``tex-chtml.js`` combined component, so the TeX
input is already loaded when our extension is loaded.  If you are
using ``startup.js`` instead, and including ``input/tex`` in the
``load`` array, you will need to tell MathJax that your extension
depends on the ``input/tex`` extension so that it waits to load your
extension until after the TeX input jax is loaded.  To do that, add a
``dependencies`` block to your configuration like the following:

.. code-block:: html

   <script>
   MathJax = {
      loader: {
         load: ['input/tex', 'output/chtml', '[custom]/mml.min.js'],
         paths: {custom: '.'},
         dependencies: {'[custom]/mml.min.js': ['input/tex']}
      },
      tex: {
         packages: {'[+]': ['mml']}
      }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
   </script>

This example can be seen live in the `MathJax 3 demos
<https://github.com/mathjax/MathJax-demos-web/blob/master/custom-tex-extension/mml.md>`__
repository.

-----


.. _custom-build:

A Custom MathJax Build
======================

It is possible to make a completely custom build of MathJax that is
not based on other MathJax components at all.  The following example
shows how to make a custom build that provides a function for
obtaining the speech string for a given TeX math string.  This example
is similar to one in the `MathJax3 demos
<https://github.com/mathjax/MathJax-demos-web/blob/master/custom-build/custom-mathjax.md>`__
repository.

After downloading a copy of MathJax as described in the section on
:ref:`getting-ready`, create a directory called ``mathjax-speech`` and
``cd`` into it.


The Custom Build File
---------------------

Create the custom MathJax file named ``mathjax-speech.js`` containing
the following:

.. code-block:: javascript

  //
  //  Load the desired components
  //
  const mathjax     = require('mathjax-full/js/mathjax.js').mathjax;      // MathJax core
  const TeX         = require('mathjax-full/js/input/tex.js').TeX;        // TeX input
  const MathML      = require('mathjax-full/js/input/mathml.js').MathML;  // MathML input
  const browser     = require('mathjax-full/js/adaptors/browserAdaptor.js').browserAdaptor; // browser DOM
  const Enrich      = require('mathjax-full/js/a11y/semantic-enrich.js').EnrichHandler;     // semantic enrichment
  const Register    = require('mathjax-full/js/handlers/html.js').RegisterHTMLHandler;      // the HTML handler
  const AllPackages = require('mathjax-full/js/input/tex/AllPackages').AllPackages;         // all TeX packages
  const STATE       = require('mathjax-full/js/core/MathItem.js').STATE;

  const sreReady    = require('mathjax-full/js/a11y/sre.js').sreReady();    // SRE promise;

  //
  //  Register the HTML handler with the browser adaptor and add the semantic enrichment
  //
  Enrich(Register(browser()), new MathML());

  //
  //  Initialize mathjax with a blank DOM.
  //
  const html = mathjax.document('', {
     sre: {
       speech: 'shallow',           // add speech to the enriched MathML
     },
     InputJax: new TeX({
        packages: AllPackages.filter((name) => name !== 'bussproofs'),  // Bussproofs needs an output jax
        macros: {require: ['', 1]}      // Make \require a no-op since all packages are loaded
     })
  });

  //
  //  The user's configuration object
  //
  const CONFIG = window.MathJax || {};

  //
  //  The global MathJax object
  //
  window.MathJax = {
     version: mathjax.version,
     html: html,
     sreReady: sreReady,

     tex2speech(tex, display = true) {
       const math = new html.options.MathItem(tex, html.inputJax[0], display);
       return mathjax.handleRetriesFor(() => math.convert(html, STATE.CONVERT)).then(() => {
         let speech = '';
         math.root.walkTree(node => {
           const attributes = node.attributes.getAllAttributes();
           console.log(attributes);
           if (!speech && attributes['data-semantic-speech'] &&
               !attributes['data-semantic-parent']) {
             speech = attributes['data-semantic-speech'];
           }
         });
         return speech || 'no speech text generated';
       });
     }
  };

  //
  // Perform ready function, if there is one
  //
  if (CONFIG.ready) {
    sreReady.then(CONFIG.ready);
  }

Unlike the component-based example above, this custom build calls on
the MathJax source files directly.  The ``require`` commands at the
beginning of the file load the needed objects, and the rest of the
code instructs MathJax to create a ``MathDocument`` object for
handling the conversions that we will be doing (using a TeX input
jax), and then defines a global ``MathJax`` object that has the
:meth:`tex2speech()` function that our custom build offers.


The Webpack Configuration
-------------------------

Next, create the file ``webpack.config.js`` that includes the
following:

.. code-block:: javascript

   const PACKAGE = require('mathjax-full/components/webpack.common.js');

   module.exports = PACKAGE(
     'mathjax-speech',                     // the name of the package to build
     '../node_modules/mathjax-full/js',    // location of the mathjax library
     [],                                   // packages to link to
     __dirname,                            // our directory
     '.'                                   // where to put the packaged component
   );

This file gives the name that will be used for this component
(``mathjax-speech`` in this case), a pointer to where the MathJax
javascript code is to be found (adjust this to suit your setup), an
array of components that we assume are already loaded when this one is
loaded (none, since this is a self-contained build), the directory
name we are working in (always ``__dirname``), and the directory where
we want the final packaged component to go (the default is the
``mathjax-full/es5`` directory, but we set it to the directory
containing the source files, and the component will end with
``.min.js``).

Most of the real work is done by the
``mathjax-full/components/webpack.common.js`` file, which is included in
the first line here.


Building the Custom File
------------------------

Once these two files are ready, you are ready to make your custom
build.  First, make sure that you have obtained the needed tools as
described in :ref:`getting-ready` above.  Then you should be able to
use the command

.. code-block:: shell

   node ../node_modules/mathjax-full/components/bin/makeAll

to process your custom build.  You should end up with a file
``mathjax-speech.min.js`` in the directory with the other files.  it
will contain just the parts of MathJax that are needed to implement
the :meth:`MathJax.tex2speech()` command defined in the file above.
Note that this is not enough to do normal typesetting (for example, no
output jax has been included), so this is a minimal file for producing
the speech strings from TeX input.


Using the File in a Web Page
----------------------------

If you put the ``mathjax-speech.min.js`` file on your web server, you
can load it into your web pages in place of loading MathJax from a
CDN.  This fill will include all that you need to use the
:meth:`MathJax.tex2speech()` command in your pages.  Just add

.. code-block:: html

   <script src="mathjax-speech.min.js" id="MathJax-script" async></script>

to your page (adjust the URL to point to wherever you have placed the
``custom-mathjax.min.js`` file).  Then you can use javascript calls
like

.. code-block:: javascript

   const speech = await MathJax.tex2speech('\\sqrt{x^2+1}', true);

to obtain a text string that contains the speech text for the square
root given in the TeX string.

Note, however, that the Speech-Rule Engine (SRE) that underlies the
speech generation loads asynchronously, so you have to be sure that
SRE is ready before you make such a call.  The ``mathjax-speech.js``
file provides two ways of handling the synchronization with SRE.  The
first is to use the global ``MathJax`` variable to include a
:meth:`ready()` function that is called when SRE is ready.  For
example,

.. code-block:: javascript

   window.speechReady = false;
   window.MathJax = {
      ready: () => {
         window.speechReady = true;
      }
   };

would set the global variable :data:`speechReady` to true when SRE is
ready to run (so you can check that value to see if speech can be
generated yet).  A more sophisticated :meth:`ready()` function could
allow you to queue translations to be performed, and when SRE is ready,
it performs them.  Alternatively, if you have a user interface that
allows users to transform TeX expressions, for example, then you could
initially disable to buttons that trigger speech generation, and use
the :meth:`ready()` function to enable them.  That way, the user can't
ask for speech translation until it can be produced.

The second method of synchronizing with SRE is through the fact that
the code sets :attr:`MathJax.sreReady` to a promise that is resolves
when SRE is ready, which you can use to make sure SRE is ready when you
want to do speech generation.  For example

.. code-block:: javascript

   function showSpeech(tex, display = false) {
      MathJax.sreReady = MathJax.sreReady.then(async () => {
        const speech = await MathJax.tex2speech(tex, display);
        const output = document.getElementById('speech');
        output.innerHTML = '';
        output.appendChild(document.createTextNode(speech));
      });
   }

provides a function that lets you specify a TeX string to translate,
and then (asynchronously) generates the speech for it and displays it
as the contents of the DOM element with ``id="speech"`` in the page.

|-----|
.. _web-examples:

#########################
/W. Examples in a Browser
#########################

There are a number of example files in the `MathJax web demo repository
<https://github.com/mathjax/MathJax-demos-web>`__ (see the `list of demos
<https://github.com/mathjax/MathJax-demos-web#samples-of-mathjax-v3>`__).
These include documentation as well as live examples that you can
run.

In addition, there are examples for:

* :ref:`Configuring MathJax using an external script <local-configuration-file>`
* :ref:`Configuring and loading MathJax using one local file <config-loads-mathjax>`
* :ref:`Synchronizing with MathJax using promises <typeset-async>`
* :ref:`Resetting TeX equation numbering <tex-reset>`
* :ref:`Updating previously typeset content <typeset-clear>`
* :ref:`Looking up the math on the page <get-math-items>`
* :ref:`Loading MathJax only on pages with math <load-for-math>`
* :ref:`Automatic Section Numbering<tex-tagformat-section-numbers>`

..

* :ref:`A replacement for the NativeMML output jax <NativeMML>`

..

* :ref:`Backward Compatibility for TeX input <v2-compatibility-example>`
* :ref:`Locating MathJax v2 math script tags <math-script-example>`


|-----|
.. _node-start:

#############################
/S. Getting Started with Node
#############################

**This page is still under construction.**

See the `MathJax node demos
<https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__ for
examples of how to use MathJax from a `node` application.  These are
categorized into three groups

* `Examples using MathJax components the simple way
  <https://github.com/mathjax/MathJax-demos-node/tree/master/simple#simple-component-examples>`__
* `Examples using MathJax components via the startup module
  <https://github.com/mathjax/MathJax-demos-node/tree/master/component#component-based-examples>`__
* `Examples using MathJax components loaded by hand
  <https://github.com/mathjax/MathJax-demos-node/tree/master/preload#preloaded-component-examples>`__
* `Examples using MathJax modules directly
  <https://github.com/mathjax/MathJax-demos-node/tree/master/direct#non-component-based-examples>`__.

More information will be coming to this section in the future.

|-----|
.. _node-three-ways:

#####################################
/S. Three Ways to Use MathJax in Node
#####################################

.. toctree::
   :maxdepth: 1

   Using MathJax Components      <components>
   Loading Components by Hand    <preload>
   Linking to MathJax Directly   <direct>

|-----|
.. _node-examples:

###############################
/S. Examples of MathJax in Node
###############################

**This page is still under construction.**

See the `MathJax node demos
<https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__ for
examples of how to use MathJax from a `node` application.  These are
categorized into three groups

* `Examples using MathJax components via the startup module
  <https://github.com/mathjax/MathJax-demos-node/tree/master/component#component-based-examples>`__
* `Examples using MathJax components loaded by hand
  <https://github.com/mathjax/MathJax-demos-node/tree/master/preload#preloaded-component-examples>`__
* `Examples using MathJax modules directly
  <https://github.com/mathjax/MathJax-demos-node/tree/master/direct#non-component-based-examples>`__.

More information will be coming to this section in the future.

|-----|
.. _node-components:

####################################
/S. Using MathJax Components in Node
####################################

**This page is still under construction.**

It is possible to use MathJax in a `node` application in essentially
the same was that it is used in a browser.  in particular, you can
load MathJax components and configure MathJax using a global
:data:`MathJax` object and loading the :ref:`startup-component`
component or a :ref:`combined component <combined-components>` file
via node's ``require()`` command.

See the `MathJax node demos
<https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__ for
examples of how to use MathJax from a `node` application.  in
particular, see the `component-based examples
<https://github.com/mathjax/MathJax-demos-node/tree/master/component#component-based-examples>`__
for illustrations of how to use MathJax components in a `node`
application.
  
More information will be coming to this section in the future.

|-----|
.. _node-preload:

########################################
/S. Loading Components by Hand in NodeJS
########################################

**This page is still under construction.**

In a `node` application, you can load components individually yourself
via node's ``require()`` command, rather than relying on MathJax
:ref:`loader-component`, which operates asynchronously.  This gives
you the ability to work with MathJax synchronously (i.e., without the
need to use promises).  It also gives you more complete control over
the loading of components, though in this case you do need to take
care to load dependencies yourself, and to make sure the components
are loaded in the right order.

This approach lets you take advantage of using the convenient
packaging of MathJax into individual components, the configuration of
MathJax through the global :data:`MathJax` variable, and its automatic
creation of objects and methods by the :ref:`startup-component`
component, while still allowing you to work completely synchronously
with the MathJax code.  (Or you can still use promises as well ---
it's up to you!)

See the `MathJax node demos
<https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__ for
examples of how to use MathJax from a `node` application.  in
particular, see the `preloading examples
<https://github.com/mathjax/MathJax-demos-node/tree/master/preload#preloaded-component-examples>`__
for illustrations of how to load MathJax components by hand in a
`node` application.
  
More information will be coming to this section in the future.

|-----|
.. _node-direct:

#######################################
/S. Linking to MathJax Directly in Node
#######################################

**This page is still under construction.**

`Node` applications can link directly to MathJax source code, rather
than using :ref:`MathJax components <web-components>`.  This provides
the lowest-level access to the MathJax code, and is more complicated
than using components, but it gives you the greatest flexibility as
well.

See the `MathJax node demos
<https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__ for
examples of how to use MathJax from a `node` application.  in
particular, see the `non-component-based examples
<https://github.com/mathjax/MathJax-demos-node/tree/master/direct#non-component-based-examples>`__
for illustrations of how to use MathJax modules directly in a `node`
application, rather than using the pre-packaged components.
  
More information will be coming to this section in the future.

|-----|
.. _tex-support:

#########################
/I. TeX and LaTeX Support
#########################

The support for `TeX` and `LaTeX` in MathJax involves two functions:
the first looks for mathematics within your web page (indicated by
math delimiters like ``$$...$$``) and marks the mathematics for later
processing by MathJax, and the second is what converts the TeX
notation into MathJax's internal format, where one of MathJax's output
processors then displays it in the web page.  In MathJax version 2,
these were separated into distinct components (the ``tex2jax``
preprocessor and the TeX input jax), but in version 3, the ``tex2jax``
functions have been folded into the TeX input jax.

The TeX input jax can be configured to look for whatever markers you
want to use for your math delimiters.  See the :ref:`TeX configuration
options <tex-options>` section for details on how to customize the
delimiters, and other options for TeX input.

The TeX input processor handles conversion of your mathematical
notation into MathJax's internal format (which is essentially MathML),
and so acts as a TeX to MathML converter.  The TeX input processor
can also be customized through the use of extensions that define
additional functionality (see the :ref:`tex-extensions` section).

Note: if you are not familiar with TeX/LaTeX, a good starting point is
the `LaTeX Wiki book <http://en.wikibooks.org/wiki/LaTeX>`_.

-----

.. toctree::
   :caption: More Information
   :maxdepth: 2

   differences
   delimiters
   html
   macros
   eqnumbers
   extensions

.. toctree::
   :maxdepth: 1

   extensions/index
   macros/index

|-----|
.. _tex-differences:

###############################
/I. Differences from Actual TeX
###############################

Since MathJax renders for the web and TeX is a print layout engine,
there are natural limitations to which parts of TeX can be supported
in a reasonable way. Accordingly, there are several differences
between "real" TeX/LaTeX systems and MathJax's TeX Input.

First and foremost, the TeX input processor implements **only** the
math-mode macros of TeX and LaTeX, not the text-mode macros.  MathJax
expects that you will use standard HTML tags to handle formatting the
text of your page; MathJax only handles the mathematics.  So, for
example, MathJax does not implement ``\emph`` or
``\begin{enumerate}...\end{enumerate}`` or other text-mode macros or
environments.  You must use HTML to handle such formatting tasks.  If
you need a LaTeX-to-HTML converter, you should consider `other options
<http://www.google.com/search?q=latex+to+html+converter>`_.

There are two exception to this rule. First, MathJax supports the
``\ref`` macro outside of math-mode. Second, MathJax supports some
macros that add text within math-mode (such as ``\text{}``) as well as
``$...$`` and ``\(...\)`` to switch back into math-mode, along with
``\$`` to escape a dollar sign.  MathJax does not perform other macros
inside these text blocks, however, in general.  So, for example,
``\text{some \textbf{bold} text}`` will produce the output "some
\\textbf{bold} text", not "some **bold** text".

There is an extension (new in version 3.1) that implements a number
of text-mode macros within the ``\text{}`` macro and other ones that
produce text-mode material.  See the :ref:`tex-textmacros`
documentation for details.

Second, some features in MathJax might be necessarily limited.  For
example, MathJax only implements a limited subset of the ``array``
environment's preamble; i.e., only the ``l``, ``r``, ``c``, and ``|``
characters alongside ``:`` for dashed lines --- everything else is
ignored.

|-----|
.. _tex-delimiters:

#################################
/I. TeX and LaTeX math delimiters
#################################

By default, the TeX processor uses the LaTeX math delimiters, which
are ``\(...\)`` for in-line math, and ``\[...\]`` for displayed
equations.  It also recognizes the TeX delimiters ``$$...$$`` for
displayed equations, but it does **not** define ``$...$`` as in-line
math delimiters.  That is because dollar signs appear too often in
non-mathematical settings, which could cause some text to be treated
as mathematics unexpectedly.  For example, with single-dollar
delimiters, "... the cost is $2.50 for the first one, and $2.00 for
each additional one ..." would cause the phrase "2.50 for the first
one, and" to be treated as mathematics since it falls between dollar
signs.  For this reason, if you want to use single dollar signs for
in-line math mode, you must enable that explicitly in your
configuration:

.. code-block:: javascript

    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
      }
    };

You can use ``\$`` to prevent a dollar sign from being treated as a
math delimiter within the text of your web page, e.g., use "... the
cost is \$2.50 for the first one, and \$2.00 for each additional one
..." to prevent these dollar signs from being used as math delimiters
in a web page where dollar signs have been configured to be in-line
delimiters.

Note that, as opposed to true LaTeX, MathJax processes all
environments when wrapped inside math delimiters, even those like
``\begin{equation}...\end{equation}`` that are supposed to be used to
initiate math mode.  By default, MathJax will also render all
environments outside of delimiters, e.g.,
``\begin{matrix}...\end{matrix}`` would be processed even if it is not
in math mode delimiters, though you are encouraged to use proper
delimiters for these cases to make your files more compatible with
actual LaTeX.  This functionality can be controlled via the
``processEnvironments`` option in the :ref:`tex configuration options
<tex-options>`.

See the :ref:`tex configuration options <tex-options>` page, for
additional configuration parameters that you can specify for the
TeX input processor.

|-----|
.. _tex-in-html:

###################################
/I. TeX and LaTeX in HTML documents
###################################

.. _html-special-chars:

HTML Special Characters
=======================

Keep in mind that your mathematics is part of an HTML document, so you
need to be aware of the special characters used by HTML as part of its
markup.  There cannot be HTML tags within the math delimiters (other
than ``<br>``, ``<wbr>``, and HTML comments) as TeX-formatted math
does not include HTML tags.  Also, since the mathematics is initially
given as text in the page, you need to be careful that your
mathematics doesn't look like HTML tags to the browser, which parses
the page before MathJax gets to see it.  In particular, that means
that you have to be careful about things like less-than and
greater-than signs (``<`` and ``>``), and ampersands (``&``), which
have special meaning to web browsers.  For example,

.. code-block:: latex

	... when $x<y$ we have ...

will cause a problem, because the browser will think ``<y`` is the
beginning of a tag named ``y`` (even though there is no such tag in
HTML).  When this happens, the browser will think the tag continues up
to the next ``>`` in the document (typically the end of the next
actual tag in the HTML file), and you may notice that you are missing
part of the text of the document.  In the example above, the "``<y``"
and "``we have ...``" will not be displayed because the browser thinks
it is part of the tag starting at ``<y``.  This is one indication you
can use to spot this problem; it is a common error and should be
avoided.

Usually, it is sufficient simply to put spaces around these symbols to
cause the browser to avoid them, so

.. code-block:: latex

	... when $x < y$ we have ...

should work.  Alternatively, you can use the HTML entities ``&lt;``,
``&gt;`` and ``&amp;`` to encode these characters so that the browser
will not interpret them, but MathJax will.  E.g.,

.. code-block:: latex

	  ... when $x &lt; y$ we have ...

Finally, there are ``\lt`` and ``\gt`` macros defined to make it
easier to enter ``<`` and ``>`` using TeX-like syntax:

.. code-block:: latex

        ... when $x \lt y$ we have ...

Again, keep in mind that the browser interprets your text before
MathJax does.


.. _tex-markdown:

Interactions with Content-Management Systems
============================================

Another source of difficulty is when MathJax is used in
content-management systems that have their own document processing
commands that are interpreted before the HTML page is created.  For
example, many blogs and wikis use formats like Markdown to allow you
to create the content of your pages.  In Markdown, the underscore is
used to indicate italics, and this usage will conflict with MathJax's
use of the underscore to indicate a subscript.  Since Markdown is
applied to the page first, it may convert your subscript markers into
italics (inserting ``<i>`` or ``<em>`` tags into your mathematics,
which will cause MathJax to ignore the math).

Such systems need to be told not to modify the mathematics that
appears between math delimiters.  That usually involves modifying the
content-management system itself, which is beyond the means of most
page authors.  If you are lucky, someone else will already have done
this for you, and you may be able to find a MathJax plugin for your
system using a web search.

If there is no plugin for your system, or if the plugin doesn't handle
the subtleties of isolating the mathematics from the other markup that
it supports, then you may have to "trick" the content-management
system into leaving your mathematics untouched.  Most
content-management systems provide some means of indicating text that
should not be modified ("verbatim" text), often for giving code
snippets for computer languages.  You may be able use that to enclose
your mathematics so that the system leaves it unchanged and MathJax
can process it.  For example, in Markdown, the back-tick (`````) is
used to mark verbatim text, so

.. code-block:: latex

    ... we have `\(x_1 = 132\)` and `\(x_2 = 370\)` and so ...

may be able to protect the underscores from being processed by
Markdown.

Alternatively, some content-management systems use the backslash
(``\``) as a special character for "escaping" other characters, and
you may be able to use that to prevent it from converting underscores
to italics.  That is, you might be able to use

.. code-block:: latex

    ... we have $x\_1 = 132$ and $x\_2 = 370$ and so ...

to avoid the underscores from making ``1 = 132$ and $x`` into italics.

If your system uses backslashes in this way, that can help with
italics, but it also causes difficulties in other ways.  Because TeX
uses this character to indicate a macro name, you need to be able to
pass a backslash along to the page so that MathJax will be able to
identify macro names; but if the content-management system is using
them as escapes, it will remove the backslashes as part of its
processing, and they won't make it into the final web page.  In such
systems, you may have to double the backslashes in order to obtain a
single backslash in your HTML page.  For example, you may have to do

.. code-block:: latex

    \\begin{array}{cc}
      a & b \\\\
      c & c
    \\end{array}

to get an array with the four entries *a*, *b*, *c*, and *d* in two
rows.  Note in particular that if you want ``\\`` you will have to
double *both* backslashes, giving ``\\\\``.

That may also affect how you enter the math delimiters.  Since the
defaults are ``\(...\)`` and ``\[...\]``, if your system uses ``\`` as
an escape of its own, you may need to use ``\\(...\\)`` and
``\\[...\\]`` instead in order to get ``\(...\)`` and ``\[...\]`` into
the page where MathJax can process it.

Finally, if you have enabled single dollar signs as math delimiters
and you want to include a literal dollar sign in your web page (one
that doesn't represent a math delimiter), you will need to prevent
MathJax from using it as a math delimiter.  If you also enable the
``processEscapes`` configuration parameter (it is enabled by default),
then you can use ``\$`` in the text of your page to get a dollar sign
(without the backslash) in the end.  Alternatively, you can use
something like ``<span>$</span>`` to isolate the dollar sign so that
MathJax will not use it as a delimiter.

|-----|
.. _tex-macros:

#######################
/I. Defining TeX macros
#######################

You can use the ``\def``, ``\newcommand``, ``\renewcommand``,
``\newenvironment``, ``\renewenvironment``, and ``\let`` commands to
create your own macros and environments.  Unlike actual TeX, however,
in order for MathJax to process such definitions, they must be 
enclosed in math delimiters (since MathJax only processes macros in 
math-mode).  For example

.. code-block:: latex

    \(
       \def\RR{{\bf R}}
       \def\bold#1{{\bf #1}}
    \)

would define ``\RR`` to produce a bold-faced "R", and ``\bold{...}``
to put its argument into bold face.  Both definitions would be
available throughout the rest of the page.

You can include macro definitions in the ``macros`` section of the
``tex`` blocks of your configuration, but they must be represented as
javascript objects.  For example, the two macros above can be
pre-defined in the configuration by

.. code-block:: javascript

    window.MathJax = {
      tex: {
        macros: {
	  RR: "{\\bf R}",
	  bold: ["{\\bf #1}", 1]
	}
      }
    };

Here you give the macro as a ``name: value`` pair, where the ``name``
is the name of the control sequence (without the backslash) that you
are defining, and ``value`` is either the replacement string for the
macro (when there are no arguments) or an array consisting of the
replacement string followed by the number of arguments for the macro
and, optionally, default values for optional arguments.

Note that the replacement string is given as a javascript string
literal, and the backslash has special meaning in javascript strings.
So to get an actual backslash in the string you must double it, as in
the examples above.

Similarly, you can create new environments with the ``environments``
section of the ``tex`` block of your configuration.

See :ref:`tex-configmacros-options` for more details on the ``macros``
and ``environments`` configuration blocks.

|-----|
.. _tex-eq-numbers:

################################
/I. Automatic Equation Numbering
################################

The TeX input processing in MathJax can be configured to add equation
numbers to displayed equations automatically.  This functionality is
turned off by default, but it is easy to configure MathJax to produce
automatic equation numbers by adding:

.. code-block:: javascript

    window.MathJax = {
      tex: {
        tags: 'ams'
      }
    };

to tell the TeX input processor to use the AMS numbering rules (where
only certain environments produce numbered equations, as they would be
in LaTeX).  It is also possible to set the tagging to ``'all'``, so that
every displayed equation will get a number, regardless of the
environment used.

You can use ``\notag`` or ``\nonumber`` to prevent
individual equations from being numbered, and ``\tag{}`` can be used
to override the usual equation number with your own symbol instead (or
to add an equation tag even when automatic numbering is off).

Note that the AMS environments come in two forms: starred and
unstarred.  The unstarred versions produce equation numbers (when
``tags`` is set to ``'ams'``) and the starred ones don't.  For example

.. code-block::  latex

    \begin{equation}
       E = mc^2
    \end{equation}

will be numbered, while

.. code-block::  latex

    \begin{equation*}
       e^{\pi i} + 1 = 0
    \end{equation*}

will not be numbered (when ``tags`` is ``'ams'``).

You can use ``\label`` to give an equation an identifier that you can
use to refer to it later, and then use ``\ref`` or ``\eqref`` within
your document to insert the actual equation number at that location,
as a reference. For example,

.. code-block:: latex

    In equation \eqref{eq:sample}, we find the value of an
    interesting integral:

    \begin{equation}
      \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
      \label{eq:sample}
    \end{equation}

includes a labeled equation and a reference to that equation.  Note
that references can come before the corresponding formula as well as
after them.

You can configure the way that numbers are displayed and how the
references to them by including the ``tagformat`` extension, and
setting options within the ``tagformat`` block of your ``tex``
configuration.  See the :ref:`tex-tagformat` extension for more
details.

If you are using automatic equation numbering and modifying the page
dynamically, you can run into problems due to duplicate labels. See
:ref:`tex-reset` for how to address this.

|-----|
.. _tex-extensions:

############################
/I. TeX and LaTeX extensions
############################

While MathJax includes nearly all of the Plain TeX math macros, and
many of the LaTeX macros and environments, not everything is
implemented in the core TeX input processor.  Some less-used commands
are defined in extensions to the TeX processor.  MathJax will load
some extensions automatically when you first use the commands they
implement (for example, the ``\color`` macro is implemented in the
``color`` extension, but MathJax loads this extension itself when you
use that macro).  While most extensions are set up to load
automatically, there are a few that you would need to load explicitly
yourself.  See the :ref:`tex-autoload` extension below for how to
configure which extensions to autoload.


.. _load-tex-extension:

Loading TeX Extensions
======================

To enable one of the TeX extensions you need to do two things: load
the extension, and configure TeX to include it in its package setup.
For the first, to load an extension as a component, add its name to
the ``load`` array in the ``loader`` block of your MathJax
configuration.  For example, to load the ``color`` extension, add
``'[tex]/color'`` to the load array, as in the example below.  To do
the second, add the extension name to ``packages`` array in the
``tex`` block of your configuration.  You can use the special
``'[+]'`` notation to append it to the default packages (so you don't
need to know what they are).  For example:

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/color']},
     tex: {packages: {'[+]': ['color']}}
   };

will load the ``color`` extension and configure the TeX input jax to
enable it.

A number of extensions are already loaded and configured in the
components that contain the TeX extension.  The ``input/tex``, and the
combined components containing ``tex`` and not ending in ``-full``
include the ``ams``, ``newcommand``, ``noundefined``, ``require``,
``autoload``, and ``configmacros`` extensions, with the other
extensions being autoloaded as needed.  The ``input/tex-base``
component has no extensions loaded, while the ``input/tex-full`` and
the combined extensions ending in ``-full`` load all the extensions.

If you load a component that has an extension you don't want to use,
you can disable it by removing it from the ``package`` array in the
``tex`` block of your MathJax configuration.  For example, to disable
``\require`` and autoloading of extensions, use

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['require', 'autoload']}}
   };

if you are using, for example, the ``tex-chtml.js`` combined component
file.


.. _extensions-at-runtime:

Loading Extensions at Run Time
==============================

You can also load these extensions from within a math expression using
the non-standard ``\require{extension}`` macro.  For example

.. code-block:: latex

    \(\require{color}\)

would load the `color` extension into the page.  This way you you can
load extensions into pages that didn't load them in their
configurations (and prevents you from having to load all the
extensions into all pages even if they aren't used).


.. _tex-configure-extension:

Configuring TeX Extensions
==========================

Some extensions have options that control their behavior.  For
example, the `color` extension allows you to set the padding and
border-width used for the ``\colorbox`` and ``\fcolorbox`` macros.
Such extensions are configured using a block within the ``tex``
configuration of your MathJax configuration object.  The block has the
same name as the extension, and contains the options you want to set
for that extension.  For example,

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/color']},
     tex: {
       packages: {'[+]': ['color']},
       color: {
         padding: '5px'
       }
     }
   };

would set the padding for ``\colorbox`` to be 5 pixels.

See the :ref:`configuring-mathjax` section for details about how to
configure MathJax in general, and :ref:`tex-extension-options` for the
options for individual extensions.

For extensions that are not loaded explicitly but may be loaded via
the `autoload` package or the ``\require`` macro, you can't include
the configuration within the ``tex`` block, because MathJax will not
know the options that are available (since the extension hasn't been
loaded yet).  In that case, move the configuration block to the top
level of the MathJax configuration object and prefix it with
``[tex]/``, as in:

.. code-block:: javascript

   window.MathJax = {
     '[tex]/color': {
       padding: '5px'
     }
   };

|-----|
.. _tex-commands:

################################
/I. Supported TeX/LaTeX commands
################################

This is a long list of the TeX macros supported by MathJax.  If the
macro is defined in an extension, the name of the extension follows
the macro name.  If the extension is in brackets, the extension will
be loaded automatically when the macro or environment is first used.

More complete details about how to use these macros, with examples and
explanations, is available at Carol Fisher's `TeX Commands Available
in MathJax
<http://www.onemathematicalcat.org/MathJaxDocumentation/TeXSyntax.htm>`_
page. (These were written for MathJax v2, but most of the information
is still correct for v3.)

In the following tables, the first column lists the macro (or
character, or environment), and the second column indicates which
package(s) defines the macro.  If none is listed, then it is in the
base package.  If the package name is in bold, then it is preloaded by
the components that include the TeX input jax (except for
``input/tex-base``, which only includes the base package).  If the
package name is in italics, then the package is *not* autoloaded by
the :ref:`tex-autoload` extension.

Note that most macros are not processed inside text-mode material
(such as that within ``\text{}`` and other similar macros).  The
:ref:`tex-textmacros` extension makes additional macros available in
text mode, as listed in the documentation for that extension.


.. raw:: html

   <style>
   .wy-table-responsive table {width: 100%}
   .rst-content .wy-table-responsive table code.literal {background: inherit}
   </style>


Symbols
-------

.. list-table::
   :widths: 70 30

   * - ``_``
     -
   * - ``.``
     -
   * - ``'``
     -
   * - ``’``
     -
   * - ``(``
     -
   * - ``)``
     - **base**, *physics*
   * - ``[``
     -
   * - ``]``
     - **base**, *physics*
   * - ``{``
     -
   * - ``}``
     -
   * - ``@``
     - **amscd**
   * - ``/``
     -
   * - ``\``  (backslash-space)
     -
   * - ``\_``
     -
   * - ``\,``
     -
   * - ``\;``
     -
   * - ``\:``
     - **base**, *mathtools*
   * - ``\!``
     -
   * - ``\{``
     -
   * - ``\}``
     -
   * - ``\\``
     -
   * - ``\&``
     -
   * - ``\#``
     -
   * - ``\%``
     -
   * - ``\>``
     -
   * - ``\|``
     - **base**, **braket**
   * - ``\$``
     -
   * - ``&``
     - **base**, *cases*
   * - ``#``
     -
   * - ``%``
     -
   * - ``^``
     -
   * - ``<``
     -
   * - ``>``
     -
   * - ``|``
     - **base**, **braket**, *physics*
   * - ``~``
     -


A
-

.. list-table::
   :widths: 70 30

   * - ``\above``
     -
   * - ``\abovewithdelims``
     -
   * - ``\Aboxed``
     - *mathtools*
   * - ``\abs``
     - *physics*
   * - ``\absolutevalue``
     - *physics*
   * - ``\acomm``
     - *physics*
   * - ``\acos``
     - *physics*
   * - ``\acosecant``
     - *physics*
   * - ``\acosine``
     - *physics*
   * - ``\acot``
     - *physics*
   * - ``\acotangent``
     - *physics*
   * - ``\acsc``
     - *physics*
   * - ``\acute``
     -
   * - ``\adjustlimits``
     - *mathtools*
   * - ``\admat``
     - *physics*
   * - ``\aleph``
     -
   * - ``\alpha``
     -
   * - ``\alwaysDashedLine``
     - **bussproofs**
   * - ``\alwaysNoLine``
     - **bussproofs**
   * - ``\alwaysRootAtBottom``
     - **bussproofs**
   * - ``\alwaysRootAtTop``
     - **bussproofs**
   * - ``\alwaysSingleLine``
     - **bussproofs**
   * - ``\alwaysSolidLine``
     - **bussproofs**
   * - ``\amalg``
     -
   * - ``\And``
     -
   * - ``\angle``
     -
   * - ``\anticommutator``
     - *physics*
   * - ``\antidiagonalmatrix``
     - *physics*
   * - ``\approx``
     -
   * - ``\approxeq``
     - **ams**
   * - ``\arccos``
     - **base**, *physics*
   * - ``\arccosecant``
     - *physics*
   * - ``\arccosine``
     - *physics*
   * - ``\arccot``
     - *physics*
   * - ``\arccotangent``
     - *physics*
   * - ``\arccsc``
     - *physics*
   * - ``\arcsec``
     - *physics*
   * - ``\arcsecant``
     - *physics*
   * - ``\arcsin``
     - **base**, *physics*
   * - ``\arcsine``
     - *physics*
   * - ``\arctan``
     - **base**, *physics*
   * - ``\arctangent``
     - *physics*
   * - ``\arg``
     -
   * - ``\array``
     -
   * - ``\ArrowBetweenLines``
     - *mathtools*
   * - ``\arrowvert``
     -
   * - ``\Arrowvert``
     -
   * - ``\asec``
     - *physics*
   * - ``\asecant``
     - *physics*
   * - ``\asin``
     - *physics*
   * - ``\asine``
     - *physics*
   * - ``\ast``
     -
   * - ``\asymp``
     -
   * - ``\atan``
     - *physics*
   * - ``\atangent``
     - *physics*
   * - ``\atop``
     -
   * - ``\atopwithdelims``
     -
   * - ``\AXC``
     - **bussproofs**
   * - ``\Axiom``
     - **bussproofs**
   * - ``\AxiomC``
     - **bussproofs**


B
-

.. list-table::
   :widths: 70 30

   * - ``\backepsilon``
     - **ams**
   * - ``\backprime``
     - **ams**
   * - ``\backsim``
     - **ams**
   * - ``\backsimeq``
     - **ams**
   * - ``\backslash``
     -
   * - ``\bar``
     -
   * - ``\barwedge``
     - **ams**
   * - ``\Bbb``
     -
   * - ``\Bbbk``
     - **ams**
   * - ``\bbFont``
     -
   * - ``\bbox``
     - **bbox**
   * - ``\bcancel``
     - **cancel**
   * - ``\because``
     - **ams**
   * - ``\begin``
     -
   * - ``\beta``
     -
   * - ``\beth``
     - **ams**
   * - ``\between``
     - **ams**
   * - ``\bf``
     -
   * - ``\BIC``
     - **bussproofs**
   * - ``\big``
     -
   * - ``\Big``
     -
   * - ``\bigcap``
     -
   * - ``\bigcirc``
     -
   * - ``\bigcup``
     -
   * - ``\bigg``
     -
   * - ``\Bigg``
     -
   * - ``\biggl``
     -
   * - ``\Biggl``
     -
   * - ``\biggm``
     -
   * - ``\Biggm``
     -
   * - ``\biggr``
     -
   * - ``\Biggr``
     -
   * - ``\bigl``
     -
   * - ``\Bigl``
     -
   * - ``\bigm``
     -
   * - ``\Bigm``
     -
   * - ``\bigodot``
     -
   * - ``\bigoplus``
     -
   * - ``\bigotimes``
     -
   * - ``\bigr``
     -
   * - ``\Bigr``
     -
   * - ``\bigsqcup``
     -
   * - ``\bigstar``
     - **ams**
   * - ``\bigtimes``
     - *mathtools*
   * - ``\bigtriangledown``
     -
   * - ``\bigtriangleup``
     -
   * - ``\biguplus``
     -
   * - ``\bigvee``
     -
   * - ``\bigwedge``
     -
   * - ``\BinaryInf``
     - **bussproofs**
   * - ``\BinaryInfC``
     - **bussproofs**
   * - ``\binom``
     - **ams**
   * - ``\blacklozenge``
     - **ams**
   * - ``\blacksquare``
     - **ams**
   * - ``\blacktriangle``
     - **ams**
   * - ``\blacktriangledown``
     - **ams**
   * - ``\blacktriangleleft``
     - **ams**
   * - ``\blacktriangleright``
     - **ams**
   * - ``\bmod``
     -
   * - ``\bmqty``
     - *physics*
   * - ``\boldsymbol``
     - **boldsymbol**
   * - ``\bot``
     -
   * - ``\bowtie``
     -
   * - ``\Box``
     - **ams**
   * - ``\boxdot``
     - **ams**
   * - ``\boxed``
     - **base**, **ams**
   * - ``\boxminus``
     - **ams**
   * - ``\boxplus``
     - **ams**
   * - ``\boxtimes``
     - **ams**
   * - ``\bqty``
     - *physics*
   * - ``\Bqty``
     - *physics*
   * - ``\bra``
     - **braket**, *physics*
   * - ``\Bra``
     - **braket**
   * - ``\brace``
     -
   * - ``\bracevert``
     -
   * - ``\brack``
     -
   * - ``\braket``
     - **braket**, *physics*
   * - ``\Braket``
     - **braket**
   * - ``\breve``
     -
   * - ``\buildrel``
     -
   * - ``\bullet``
     -
   * - ``\bumpeq``
     - **ams**
   * - ``\Bumpeq``
     - **ams**


C
-

.. list-table::
   :widths: 70 30

   * - ``\cal``
     -
   * - ``\cancel``
     - **cancel**
   * - ``\cancelto``
     - **cancel**
   * - ``\cap``
     -
   * - ``\Cap``
     - **ams**
   * - ``\cases``
     -
   * - ``\cdot``
     -
   * - ``\cdotp``
     -
   * - ``\cdots``
     -
   * - ``\ce``
     - **mhchem**
   * - ``\cellcolor``
     - *colortbl*
   * - ``\celsius``
     - *gensymb*
   * - ``\centercolon``
     - *mathtools*
   * - ``\centerdot``
     - **ams**
   * - ``\centernot``
     - *centernot*
   * - ``\centerOver``
     - *centernot*
   * - ``\cfrac``
     - **ams**
   * - ``\check``
     -
   * - ``\checkmark``
     - **ams**
   * - ``\chi``
     -
   * - ``\choose``
     -
   * - ``\circ``
     -
   * - ``\circeq``
     - **ams**
   * - ``\circlearrowleft``
     - **ams**
   * - ``\circlearrowright``
     - **ams**
   * - ``\circledast``
     - **ams**
   * - ``\circledcirc``
     - **ams**
   * - ``\circleddash``
     - **ams**
   * - ``\circledR``
     - **ams**
   * - ``\circledS``
     - **ams**
   * - ``\clap``
     - *mathtools*
   * - ``\class``
     - **html**
   * - ``\clubsuit``
     -
   * - ``\colon``
     -
   * - ``\colonapprox``
     - *mathtools*
   * - ``\Colonapprox``
     - *mathtools*
   * - ``\coloneq``
     - *mathtools*
   * - ``\Coloneq``
     - *mathtools*
   * - ``\coloneqq``
     - *mathtools*
   * - ``\Coloneqq``
     - *mathtools*
   * - ``\colonsim``
     - *mathtools*
   * - ``\Colonsim``
     - *mathtools*
   * - ``\color``
     - **color**, *colorv2*
   * - ``\colorbox``
     - **color**
   * - ``\columncolor``
     - *colortbl*
   * - ``\comm``
     - *physics*
   * - ``\commutator``
     - *physics*
   * - ``\complement``
     - **ams**
   * - ``\cong``
     -
   * - ``\coprod``
     -
   * - ``\cos``
     - **base**, *physics*
   * - ``\cosecant``
     - *physics*
   * - ``\cosh``
     - **base**, *physics*
   * - ``\cosine``
     - *physics*
   * - ``\cot``
     - **base**, *physics*
   * - ``\cotangent``
     - *physics*
   * - ``\coth``
     - **base**, *physics*
   * - ``\cp``
     - *physics*
   * - ``\cr``
     -
   * - ``\cramped``
     - *mathtools*
   * - ``\crampedclap``
     - *mathtools*
   * - ``\crampedllap``
     - *mathtools*
   * - ``\crampedrlap``
     - *mathtools*
   * - ``\crampedsubstack``
     - *mathtools*
   * - ``\cross``
     - *physics*
   * - ``\crossproduct``
     - *physics*
   * - ``\csc``
     - **base**, *physics*
   * - ``\csch``
     - *physics*
   * - ``\cssId``
     - **html**
   * - ``\cup``
     -
   * - ``\Cup``
     - **ams**
   * - ``\curl``
     - *physics*
   * - ``\curlyeqprec``
     - **ams**
   * - ``\curlyeqsucc``
     - **ams**
   * - ``\curlyvee``
     - **ams**
   * - ``\curlywedge``
     - **ams**
   * - ``\curvearrowleft``
     - **ams**
   * - ``\curvearrowright``
     - **ams**


D
-

.. list-table::
   :widths: 70 30

   * - ``\dagger``
     -
   * - ``\daleth``
     - **ams**
   * - ``\dashedLine``
     - **bussproofs**
   * - ``\dashleftarrow``
     - **ams**
   * - ``\dashrightarrow``
     - **ams**
   * - ``\dashv``
     -
   * - ``\dbinom``
     - **ams**
   * - ``\dblcolon``
     - *mathtools*
   * - ``\dd``
     - *physics*
   * - ``\ddagger``
     -
   * - ``\ddddot``
     - **ams**
   * - ``\dddot``
     - **ams**
   * - ``\ddot``
     -
   * - ``\ddots``
     -
   * - ``\DeclareMathOperator``
     - **ams**
   * - ``\DeclarePairedDelimiters``
     - *mathtools*
   * - ``\DeclarePairedDelimitersX``
     - *mathtools*
   * - ``\DeclarePairedDelimitersXPP``
     - *mathtools*
   * - ``\def``
     - **newcommand**
   * - ``\definecolor``
     - **color**
   * - ``\deg``
     -
   * - ``\degree``
     - *gensymb*
   * - ``\delta``
     -
   * - ``\Delta``
     -
   * - ``\derivative``
     - *physics*
   * - ``\det``
     - **base**, *physics*
   * - ``\determinant``
     - *physics*
   * - ``\dfrac``
     - **ams**
   * - ``\diagdown``
     - **ams**
   * - ``\diagonalmatrix``
     - *physics*
   * - ``\diagup``
     - **ams**
   * - ``\diamond``
     -
   * - ``\Diamond``
     - **ams**
   * - ``\diamondsuit``
     -
   * - ``\diffd``
     - *physics*
   * - ``\differential``
     - *physics*
   * - ``\digamma``
     - **ams**
   * - ``\dim``
     -
   * - ``\displaylines``
     -
   * - ``\displaystyle``
     -
   * - ``\div``
     - **base**, *physics*
   * - ``\divergence``
     - *physics*
   * - ``\divideontimes``
     - **ams**
   * - ``\divsymbol``
     -
   * - ``\dmat``
     - *physics*
   * - ``\dot``
     -
   * - ``\doteq``
     -
   * - ``\Doteq``
     - **ams**
   * - ``\doteqdot``
     - **ams**
   * - ``\dotplus``
     - **ams**
   * - ``\dotproduct``
     - *physics*
   * - ``\dots``
     -
   * - ``\dotsb``
     -
   * - ``\dotsc``
     -
   * - ``\dotsi``
     -
   * - ``\dotsm``
     -
   * - ``\dotso``
     -
   * - ``\doublebarwedge``
     - **ams**
   * - ``\doublecap``
     - **ams**
   * - ``\doublecup``
     - **ams**
   * - ``\downarrow``
     -
   * - ``\Downarrow``
     -
   * - ``\downdownarrows``
     - **ams**
   * - ``\downharpoonleft``
     - **ams**
   * - ``\downharpoonright``
     - **ams**
   * - ``\dv``
     - *physics*
   * - ``\dyad``
     - *physics*


E
-

.. list-table::
   :widths: 70 30

   * - ``\ell``
     -
   * - ``\empheqbigl``
     - *empheq*
   * - ``\empheqbiglangle``
     - *empheq*
   * - ``\empheqbiglbrace``
     - *empheq*
   * - ``\empheqbiglbrack``
     - *empheq*
   * - ``\empheqbiglceil``
     - *empheq*
   * - ``\empheqbiglfloor``
     - *empheq*
   * - ``\empheqbiglparen``
     - *empheq*
   * - ``\empheqbiglvert``
     - *empheq*
   * - ``\empheqbiglVert``
     - *empheq*
   * - ``\empheqbigr``
     - *empheq*
   * - ``\empheqbigrangle``
     - *empheq*
   * - ``\empheqbigrbrace``
     - *empheq*
   * - ``\empheqbigrbrack``
     - *empheq*
   * - ``\empheqbigrceil``
     - *empheq*
   * - ``\empheqbigrfloor``
     - *empheq*
   * - ``\empheqbigrparen``
     - *empheq*
   * - ``\empheqbigrvert``
     - *empheq*
   * - ``\empheqbigrVert``
     - *empheq*
   * - ``\empheql``
     - *empheq*
   * - ``\empheqlangle``
     - *empheq*
   * - ``\empheqlbrace``
     - *empheq*
   * - ``\empheqlbrack``
     - *empheq*
   * - ``\empheqlceil``
     - *empheq*
   * - ``\empheqlfloor``
     - *empheq*
   * - ``\empheqlparen``
     - *empheq*
   * - ``\empheqlvert``
     - *empheq*
   * - ``\empheqlVert``
     - *empheq*
   * - ``\empheqr``
     - *empheq*
   * - ``\empheqrangle``
     - *empheq*
   * - ``\empheqrbrace``
     - *empheq*
   * - ``\empheqrbrack``
     - *empheq*
   * - ``\empheqrceil``
     - *empheq*
   * - ``\empheqrfloor``
     - *empheq*
   * - ``\empheqrparen``
     - *empheq*
   * - ``\empheqrvert``
     - *empheq*
   * - ``\empheqrVert``
     - *empheq*
   * - ``\emptyset``
     -
   * - ``\enclose``
     - **enclose**
   * - ``\end``
     -
   * - ``\enspace``
     -
   * - ``\epsilon``
     -
   * - ``\eqalign``
     -
   * - ``\eqalignno``
     -
   * - ``\eqcirc``
     - **ams**
   * - ``\eqcolon``
     - *mathtools*
   * - ``\Eqcolon``
     - *mathtools*
   * - ``\eqqcolon``
     - *mathtools*
   * - ``\Eqqcolon``
     - *mathtools*
   * - ``\eqref``
     - **ams**
   * - ``\eqsim``
     - **ams**
   * - ``\eqslantgtr``
     - **ams**
   * - ``\eqslantless``
     - **ams**
   * - ``\equiv``
     -
   * - ``\erf``
     - *physics*
   * - ``\eta``
     -
   * - ``\eth``
     - **ams**
   * - ``\ev``
     - *physics*
   * - ``\eval``
     - *physics*
   * - ``\evaluated``
     - *physics*
   * - ``\exists``
     -
   * - ``\exp``
     - **base**, *physics*
   * - ``\expectationvalue``
     - *physics*
   * - ``\exponential``
     - *physics*
   * - ``\expval``
     - *physics*


F
-

.. list-table::
   :widths: 70 30

   * - ``\fallingdotseq``
     - **ams**
   * - ``\fbox``
     -
   * - ``\fCenter``
     - **bussproofs**
   * - ``\fcolorbox``
     - **color**
   * - ``\fderivative``
     - *physics*
   * - ``\fdv``
     - *physics*
   * - ``\Finv``
     - **ams**
   * - ``\flat``
     -
   * - ``\flatfrac``
     - *physics*
   * - ``\forall``
     -
   * - ``\frac``
     - **base**, **ams**
   * - ``\frak``
     -
   * - ``\framebox``
     -
   * - ``\frown``
     -
   * - ``\functionalderivative``
     - *physics*


G
-

.. list-table::
   :widths: 70 30

   * - ``\Game``
     - **ams**
   * - ``\gamma``
     -
   * - ``\Gamma``
     -
   * - ``\gcd``
     -
   * - ``\ge``
     -
   * - ``\genfrac``
     - **ams**
   * - ``\geq``
     -
   * - ``\geqq``
     - **ams**
   * - ``\geqslant``
     - **ams**
   * - ``\gets``
     -
   * - ``\gg``
     -
   * - ``\ggg``
     - **ams**
   * - ``\gggtr``
     - **ams**
   * - ``\gimel``
     - **ams**
   * - ``\gnapprox``
     - **ams**
   * - ``\gneq``
     - **ams**
   * - ``\gneqq``
     - **ams**
   * - ``\gnsim``
     - **ams**
   * - ``\grad``
     - *physics*
   * - ``\gradient``
     - *physics*
   * - ``\gradientnabla``
     - *physics*
   * - ``\grave``
     -
   * - ``\gt``
     -
   * - ``\gtrapprox``
     - **ams**
   * - ``\gtrdot``
     - **ams**
   * - ``\gtreqless``
     - **ams**
   * - ``\gtreqqless``
     - **ams**
   * - ``\gtrless``
     - **ams**
   * - ``\gtrsim``
     - **ams**
   * - ``\gvertneqq``
     - **ams**


H
-

.. list-table::
   :widths: 70 30

   * - ``\hat``
     -
   * - ``\hbar``
     -
   * - ``\hbox``
     -
   * - ``\hdashline``
     -
   * - ``\heartsuit``
     -
   * - ``\hfil``
     -
   * - ``\hfill``
     -
   * - ``\hfilll``
     -
   * - ``\hline``
     -
   * - ``\hom``
     -
   * - ``\hookleftarrow``
     -
   * - ``\hookrightarrow``
     -
   * - ``\hphantom``
     -
   * - ``\href``
     - **html**
   * - ``\hskip``
     -
   * - ``\hslash``
     - **ams**
   * - ``\hspace``
     -
   * - ``\huge``
     -
   * - ``\Huge``
     -
   * - ``\hypcosecant``
     - *physics*
   * - ``\hypcosine``
     - *physics*
   * - ``\hypcotangent``
     - *physics*
   * - ``\hypsecant``
     - *physics*
   * - ``\hypsine``
     - *physics*
   * - ``\hyptangent``
     - *physics*


I
-

.. list-table::
   :widths: 70 30

   * - ``\identitymatrix``
     - *physics*
   * - ``\idotsint``
     - **ams**
   * - ``\iff``
     -
   * - ``\iiiint``
     - **ams**
   * - ``\iiint``
     -
   * - ``\iint``
     -
   * - ``\Im``
     - **base**, *physics*
   * - ``\imaginary``
     - *physics*
   * - ``\imat``
     - *physics*
   * - ``\imath``
     -
   * - ``\impliedby``
     - **ams**
   * - ``\implies``
     - **ams**
   * - ``\in``
     -
   * - ``\inf``
     -
   * - ``\infty``
     -
   * - ``\injlim``
     - **ams**
   * - ``\innerproduct``
     - *physics*
   * - ``\int``
     -
   * - ``\intercal``
     - **ams**
   * - ``\intop``
     -
   * - ``\iota``
     -
   * - ``\ip``
     - *physics*
   * - ``\it``
     -


J
-

.. list-table::
   :widths: 70 30

   * - ``\jmath``
     -
   * - ``\Join``
     - **ams**


K
-

.. list-table::
   :widths: 70 30

   * - ``\kappa``
     -
   * - ``\ker``
     -
   * - ``\kern``
     -
   * - ``\ket``
     - **braket**, *physics*
   * - ``\Ket``
     - **braket**
   * - ``\ketbra``
     - **braket**, *physics*
   * - ``\Ketbra``
     - **braket**


L
-

.. list-table::
   :widths: 70 30

   * - ``\label``
     -
   * - ``\lambda``
     -
   * - ``\Lambda``
     -
   * - ``\land``
     -
   * - ``\langle``
     -
   * - ``\laplacian``
     - *physics*
   * - ``\large``
     -
   * - ``\Large``
     -
   * - ``\LARGE``
     -
   * - ``\LaTeX``
     -
   * - ``\lbrace``
     -
   * - ``\lbrack``
     -
   * - ``\lceil``
     -
   * - ``\ldotp``
     -
   * - ``\ldots``
     -
   * - ``\le``
     -
   * - ``\leadsto``
     - **ams**
   * - ``\left``
     -
   * - ``\Leftarrow``
     -
   * - ``\leftarrow``
     -
   * - ``\leftarrowtail``
     - **ams**
   * - ``\leftharpoondown``
     -
   * - ``\leftharpoonup``
     -
   * - ``\LeftLabel``
     - **bussproofs**
   * - ``\leftleftarrows``
     - **ams**
   * - ``\Leftrightarrow``
     -
   * - ``\leftrightarrow``
     -
   * - ``\leftrightarrows``
     - **ams**
   * - ``\leftrightharpoons``
     - **ams**
   * - ``\leftrightsquigarrow``
     - **ams**
   * - ``\leftroot``
     -
   * - ``\leftthreetimes``
     - **ams**
   * - ``\leq``
     -
   * - ``\leqalignno``
     -
   * - ``\leqq``
     - **ams**
   * - ``\leqslant``
     - **ams**
   * - ``\lessapprox``
     - **ams**
   * - ``\lessdot``
     - **ams**
   * - ``\lesseqgtr``
     - **ams**
   * - ``\lesseqqgtr``
     - **ams**
   * - ``\lessgtr``
     - **ams**
   * - ``\lesssim``
     - **ams**
   * - ``\let``
     - **newcommand**
   * - ``\lfloor``
     -
   * - ``\lg``
     -
   * - ``\lgroup``
     -
   * - ``\lhd``
     - **ams**
   * - ``\lim``
     -
   * - ``\liminf``
     -
   * - ``\limits``
     -
   * - ``\limsup``
     -
   * - ``\ll``
     -
   * - ``\LL``
     - **bussproofs**
   * - ``\llap``
     -
   * - ``\llcorner``
     - **ams**
   * - ``\Lleftarrow``
     - **ams**
   * - ``\lll``
     - **ams**
   * - ``\llless``
     - **ams**
   * - ``\lmoustache``
     -
   * - ``\ln``
     - **base**, *physics*
   * - ``\lnapprox``
     - **ams**
   * - ``\lneq``
     - **ams**
   * - ``\lneqq``
     - **ams**
   * - ``\lnot``
     -
   * - ``\lnsim``
     - **ams**
   * - ``\log``
     - **base**, *physics*
   * - ``\logarithm``
     - *physics*
   * - ``\longleftarrow``
     -
   * - ``\Longleftarrow``
     -
   * - ``\Longleftrightarrow``
     -
   * - ``\longleftrightarrow``
     -
   * - ``\longleftrightarrows``
     - **mhchem**
   * - ``\longLeftrightharpoons``
     - **mhchem**
   * - ``\longmapsto``
     -
   * - ``\longrightarrow``
     -
   * - ``\Longrightarrow``
     -
   * - ``\longrightleftharpoons``
     - **mhchem**
   * - ``\longRightleftharpoons``
     - **mhchem**
   * - ``\looparrowleft``
     - **ams**
   * - ``\looparrowright``
     - **ams**
   * - ``\lor``
     -
   * - ``\lower``
     -
   * - ``\lozenge``
     - **ams**
   * - ``\lparen``
     - *mathtools*
   * - ``\lrcorner``
     - **ams**
   * - ``\Lsh``
     - **ams**
   * - ``\lt``
     -
   * - ``\ltimes``
     - **ams**
   * - ``\lvert``
     - **ams**
   * - ``\lVert``
     - **ams**
   * - ``\lvertneqq``
     - **ams**


M
-

.. list-table::
   :widths: 70 30

   * - ``\maltese``
     - **ams**
   * - ``\mapsto``
     -
   * - ``\mathbb``
     -
   * - ``\mathbf``
     -
   * - ``\mathbfcal``
     -
   * - ``\mathbffrak``
     -
   * - ``\mathbfit``
     -
   * - ``\mathbfscr``
     -
   * - ``\mathbfsf``
     -
   * - ``\mathbfsfit``
     -
   * - ``\mathbfsfup``
     -
   * - ``\mathbfup``
     -
   * - ``\mathbin``
     -
   * - ``\mathcal``
     -
   * - ``\mathchoice``
     -
   * - ``\mathclap``
     - *mathtools*
   * - ``\mathclose``
     -
   * - ``\mathfrak``
     -
   * - ``\mathinner``
     -
   * - ``\mathit``
     -
   * - ``\mathllap``
     - *mathtools*
   * - ``\mathmakebox``
     - *mathtools*
   * - ``\mathmbox``
     - *mathtools*
   * - ``\mathnormal``
     -
   * - ``\mathop``
     -
   * - ``\mathopen``
     -
   * - ``\mathord``
     -
   * - ``\mathpunct``
     -
   * - ``\mathrel``
     -
   * - ``\mathring``
     - **ams**
   * - ``\mathrlap``
     - *mathtools*
   * - ``\mathrm``
     -
   * - ``\mathscr``
     -
   * - ``\mathsf``
     -
   * - ``\mathsfit``
     -
   * - ``\mathsfup``
     -
   * - ``\mathstrut``
     -
   * - ``\mathtip``
     - **action**
   * - ``\mathtoolsset``
     - *mathtools*
   * - ``\mathtt``
     -
   * - ``\mathup``
     -
   * - ``\matrix``
     -
   * - ``\matrixdeterminant``
     - *physics*
   * - ``\matrixel``
     - *physics*
   * - ``\matrixelement``
     - *physics*
   * - ``\matrixquantity``
     - *physics*
   * - ``\max``
     -
   * - ``\mbox``
     -
   * - ``\mdet``
     - *physics*
   * - ``\measuredangle``
     - **ams**
   * - ``\mel``
     - *physics*
   * - ``\mho``
     - **ams**
   * - ``\micro``
     - *gensymb*
   * - ``\mid``
     -
   * - ``\middle``
     -
   * - ``\min``
     -
   * - ``\minCDarrowheight``
     - **amscd**
   * - ``\minCDarrowwidth``
     - **amscd**
   * - ``\mit``
     -
   * - ``\mkern``
     -
   * - ``\mmlToken``
     -
   * - ``\mod``
     -
   * - ``\models``
     -
   * - ``\MoveEqLeft``
     - *mathtools*
   * - ``\moveleft``
     -
   * - ``\moveright``
     -
   * - ``\mp``
     -
   * - ``\mqty``
     - *physics*
   * - ``\mskip``
     -
   * - ``\mspace``
     -
   * - ``\MTFlushSpaceAbove``
     - *mathtools*
   * - ``\MTFlushSpaceBelow``
     - *mathtools*
   * - ``\MTThinColon``
     - *mathtools*
   * - ``\mu``
     -
   * - ``\multimap``
     - **ams**


N
-

.. list-table::
   :widths: 70 30

   * - ``\nabla``
     -
   * - ``\natural``
     -
   * - ``\naturallogarithm``
     - *physics*
   * - ``\ncong``
     - **ams**
   * - ``\ndownarrow``
     - *mathtools*
   * - ``\ne``
     -
   * - ``\nearrow``
     -
   * - ``\neg``
     -
   * - ``\negmedspace``
     - **ams**
   * - ``\negthickspace``
     - **ams**
   * - ``\negthinspace``
     -
   * - ``\neq``
     -
   * - ``\newcommand``
     - **newcommand**
   * - ``\newenvironment``
     - **newcommand**
   * - ``\Newextarrow``
     - **extpfeil**
   * - ``\newline``
     -
   * - ``\newtagform``
     - *mathtools*
   * - ``\nexists``
     - **ams**
   * - ``\ngeq``
     - **ams**
   * - ``\ngeqq``
     - **ams**
   * - ``\ngeqslant``
     - **ams**
   * - ``\ngtr``
     - **ams**
   * - ``\ni``
     -
   * - ``\nleftarrow``
     - **ams**
   * - ``\nLeftarrow``
     - **ams**
   * - ``\nleftrightarrow``
     - **ams**
   * - ``\nLeftrightarrow``
     - **ams**
   * - ``\nleq``
     - **ams**
   * - ``\nleqq``
     - **ams**
   * - ``\nleqslant``
     - **ams**
   * - ``\nless``
     - **ams**
   * - ``\nmid``
     - **ams**
   * - ``\nobreakspace``
     - **ams**
   * - ``\nolimits``
     -
   * - ``\noLine``
     - **bussproofs**
   * - ``\nonscript``
     -
   * - ``\nonumber``
     -
   * - ``\norm``
     - *physics*
   * - ``\normalsize``
     -
   * - ``\not``
     -
   * - ``\notag``
     - **ams**
   * - ``\notChar``
     -
   * - ``\notin``
     -
   * - ``\nparallel``
     - **ams**
   * - ``\nprec``
     - **ams**
   * - ``\npreceq``
     - **ams**
   * - ``\nrightarrow``
     - **ams**
   * - ``\nRightarrow``
     - **ams**
   * - ``\nshortmid``
     - **ams**
   * - ``\nshortparallel``
     - **ams**
   * - ``\nsim``
     - **ams**
   * - ``\nsubseteq``
     - **ams**
   * - ``\nsubseteqq``
     - **ams**
   * - ``\nsucc``
     - **ams**
   * - ``\nsucceq``
     - **ams**
   * - ``\nsupseteq``
     - **ams**
   * - ``\nsupseteqq``
     - **ams**
   * - ``\ntriangleleft``
     - **ams**
   * - ``\ntrianglelefteq``
     - **ams**
   * - ``\ntriangleright``
     - **ams**
   * - ``\ntrianglerighteq``
     - **ams**
   * - ``\nu``
     -
   * - ``\nuparrow``
     - *mathtools*
   * - ``\nvdash``
     - **ams**
   * - ``\nvDash``
     - **ams**
   * - ``\nVdash``
     - **ams**
   * - ``\nVDash``
     - **ams**
   * - ``\nwarrow``
     -


O
-

.. list-table::
   :widths: 70 30

   * - ``\odot``
     -
   * - ``\ohm``
     - *gensymb*
   * - ``\oint``
     -
   * - ``\oldstyle``
     -
   * - ``\omega``
     -
   * - ``\Omega``
     -
   * - ``\omicron``
     -
   * - ``\ominus``
     -
   * - ``\op``
     - *physics*
   * - ``\operatorname``
     - **ams**
   * - ``\oplus``
     -
   * - ``\order``
     - *physics*
   * - ``\ordinarycolon``
     - *mathtools*
   * - ``\oslash``
     -
   * - ``\otimes``
     -
   * - ``\outerproduct``
     - *physics*
   * - ``\over``
     -
   * - ``\overbrace``
     -
   * - ``\overbracket``
     - *mathtools*
   * - ``\overleftarrow``
     -
   * - ``\overleftrightarrow``
     -
   * - ``\overline``
     -
   * - ``\overparen``
     -
   * - ``\overrightarrow``
     -
   * - ``\overset``
     -
   * - ``\overunderset``
     -
   * - ``\overwithdelims``
     -
   * - ``\owns``
     -


P
-

.. list-table::
   :widths: 70 30

   * - ``\parallel``
     -
   * - ``\partial``
     -
   * - ``\partialderivative``
     - *physics*
   * - ``\paulimatrix``
     - *physics*
   * - ``\pb``
     - *physics*
   * - ``\pderivative``
     - *physics*
   * - ``\pdv``
     - *physics*
   * - ``\perp``
     -
   * - ``\perthousand``
     - *gensymb*
   * - ``\phantom``
     -
   * - ``\phi``
     -
   * - ``\Phi``
     -
   * - ``\pi``
     -
   * - ``\Pi``
     -
   * - ``\pitchfork``
     - **ams**
   * - ``\pm``
     -
   * - ``\pmat``
     - *physics*
   * - ``\pmatrix``
     -
   * - ``\pmb``
     -
   * - ``\pmod``
     -
   * - ``\pmqty``
     - *physics*
   * - ``\Pmqty``
     - *physics*
   * - ``\pod``
     -
   * - ``\poissonbracket``
     - *physics*
   * - ``\pqty``
     - *physics*
   * - ``\Pr``
     - **base**, *physics*
   * - ``\prec``
     -
   * - ``\precapprox``
     - **ams**
   * - ``\preccurlyeq``
     - **ams**
   * - ``\preceq``
     -
   * - ``\precnapprox``
     - **ams**
   * - ``\precneqq``
     - **ams**
   * - ``\precnsim``
     - **ams**
   * - ``\precsim``
     - **ams**
   * - ``\prescript``
     - *mathtools*
   * - ``\prime``
     -
   * - ``\principalvalue``
     - *physics*
   * - ``\Probability``
     - *physics*
   * - ``\prod``
     -
   * - ``\projlim``
     - **ams**
   * - ``\propto``
     -
   * - ``\psi``
     -
   * - ``\Psi``
     -
   * - ``\pu``
     - **mhchem**
   * - ``\pv``
     - *physics*
   * - ``\PV``
     - *physics*


Q
-

.. list-table::
   :widths: 70 30

   * - ``\qall``
     - *physics*
   * - ``\qand``
     - *physics*
   * - ``\qas``
     - *physics*
   * - ``\qassume``
     - *physics*
   * - ``\qc``
     - *physics*
   * - ``\qcc``
     - *physics*
   * - ``\qcomma``
     - *physics*
   * - ``\qelse``
     - *physics*
   * - ``\qeven``
     - *physics*
   * - ``\qfor``
     - *physics*
   * - ``\qgiven``
     - *physics*
   * - ``\qif``
     - *physics*
   * - ``\qin``
     - *physics*
   * - ``\qinteger``
     - *physics*
   * - ``\qlet``
     - *physics*
   * - ``\qodd``
     - *physics*
   * - ``\qor``
     - *physics*
   * - ``\qotherwise``
     - *physics*
   * - ``\qq``
     - *physics*
   * - ``\qqtext``
     - *physics*
   * - ``\qquad``
     -
   * - ``\qsince``
     - *physics*
   * - ``\qthen``
     - *physics*
   * - ``\qty``
     - *physics*
   * - ``\quad``
     -
   * - ``\quantity``
     - *physics*
   * - ``\QuaternaryInf``
     - **bussproofs**
   * - ``\QuaternaryInfC``
     - **bussproofs**
   * - ``\QuinaryInf``
     - **bussproofs**
   * - ``\QuinaryInfC``
     - **bussproofs**
   * - ``\qunless``
     - *physics*
   * - ``\qusing``
     - *physics*


R
-

.. list-table::
   :widths: 70 30

   * - ``\raise``
     -
   * - ``\rangle``
     -
   * - ``\rank``
     - *physics*
   * - ``\rbrace``
     -
   * - ``\rbrack``
     -
   * - ``\rceil``
     -
   * - ``\Re``
     - **base**, *physics*
   * - ``\real``
     - *physics*
   * - ``\ref``
     -
   * - ``\refeq``
     - *mathtools*
   * - ``\renewcommand``
     - **newcommand**
   * - ``\renewenvironment``
     - **newcommand**
   * - ``\renewtagform``
     - *mathtools*
   * - ``\Res``
     - *physics*
   * - ``\Residue``
     - *physics*
   * - ``\restriction``
     - **ams**
   * - ``\rfloor``
     -
   * - ``\rgroup``
     -
   * - ``\rhd``
     - **ams**
   * - ``\rho``
     -
   * - ``\right``
     -
   * - ``\Rightarrow``
     -
   * - ``\rightarrow``
     -
   * - ``\rightarrowtail``
     - **ams**
   * - ``\rightharpoondown``
     -
   * - ``\rightharpoonup``
     -
   * - ``\RightLabel``
     - **bussproofs**
   * - ``\rightleftarrows``
     - **ams**
   * - ``\rightleftharpoons``
     - **base**, **ams**
   * - ``\rightrightarrows``
     - **ams**
   * - ``\rightsquigarrow``
     - **ams**
   * - ``\rightthreetimes``
     - **ams**
   * - ``\risingdotseq``
     - **ams**
   * - ``\RL``
     - **bussproofs**
   * - ``\rlap``
     -
   * - ``\rm``
     -
   * - ``\rmoustache``
     -
   * - ``\root``
     -
   * - ``\rootAtBottom``
     - **bussproofs**
   * - ``\rootAtTop``
     - **bussproofs**
   * - ``\rowcolor``
     - *colortbl*
   * - ``\rparen``
     - *mathtools*
   * - ``\Rrightarrow``
     - **ams**
   * - ``\Rsh``
     - **ams**
   * - ``\rtimes``
     - **ams**
   * - ``\rule``
     -
   * - ``\Rule``
     -
   * - ``\rvert``
     - **ams**
   * - ``\rVert``
     - **ams**


S
-

.. list-table::
   :widths: 70 30

   * - ``\S``
     -
   * - ``\sbmqty``
     - *physics*
   * - ``\scr``
     -
   * - ``\scriptscriptstyle``
     -
   * - ``\scriptsize``
     -
   * - ``\scriptstyle``
     -
   * - ``\searrow``
     -
   * - ``\sec``
     - **base**, *physics*
   * - ``\secant``
     - *physics*
   * - ``\sech``
     - *physics*
   * - ``\set``
     - **braket**
   * - ``\Set``
     - **braket**
   * - ``\setminus``
     -
   * - ``\sf``
     -
   * - ``\sharp``
     -
   * - ``\shortmid``
     - **ams**
   * - ``\shortparallel``
     - **ams**
   * - ``\shortvdotswithin``
     - *mathtools*
   * - ``\shoveleft``
     - **ams**, *mathtools*
   * - ``\shoveright``
     - **ams**, *mathtools*
   * - ``\sideset``
     - **ams**
   * - ``\sigma``
     -
   * - ``\Sigma``
     -
   * - ``\sim``
     -
   * - ``\simeq``
     -
   * - ``\sin``
     - **base**, *physics*
   * - ``\sine``
     - *physics*
   * - ``\singleLine``
     - **bussproofs**
   * - ``\sinh``
     - **base**, *physics*
   * - ``\skew``
     -
   * - ``\SkipLimits``
     - **ams**
   * - ``\small``
     -
   * - ``\smallfrown``
     - **ams**
   * - ``\smallint``
     -
   * - ``\smallmatrixquantity``
     - *physics*
   * - ``\smallsetminus``
     - **ams**
   * - ``\smallsmile``
     - **ams**
   * - ``\smash``
     -
   * - ``\smdet``
     - *physics*
   * - ``\smile``
     -
   * - ``\smqty``
     - *physics*
   * - ``\solidLine``
     - **bussproofs**
   * - ``\Space``
     -
   * - ``\space``
     -
   * - ``\spadesuit``
     -
   * - ``\sphericalangle``
     - **ams**
   * - ``\splitdfrac``
     - *mathtools*
   * - ``\splitfrac``
     - *mathtools*
   * - ``\spmqty``
     - *physics*
   * - ``\sPmqty``
     - *physics*
   * - ``\sqcap``
     -
   * - ``\sqcup``
     -
   * - ``\sqrt``
     -
   * - ``\sqsubset``
     - **ams**
   * - ``\sqsubseteq``
     -
   * - ``\sqsupset``
     - **ams**
   * - ``\sqsupseteq``
     -
   * - ``\square``
     - **ams**
   * - ``\stackbin``
     -
   * - ``\stackrel``
     -
   * - ``\star``
     -
   * - ``\strut``
     -
   * - ``\style``
     - **html**
   * - ``\subset``
     -
   * - ``\Subset``
     - **ams**
   * - ``\subseteq``
     -
   * - ``\subseteqq``
     - **ams**
   * - ``\subsetneq``
     - **ams**
   * - ``\subsetneqq``
     - **ams**
   * - ``\substack``
     - **ams**
   * - ``\succ``
     -
   * - ``\succapprox``
     - **ams**
   * - ``\succcurlyeq``
     - **ams**
   * - ``\succeq``
     -
   * - ``\succnapprox``
     - **ams**
   * - ``\succneqq``
     - **ams**
   * - ``\succnsim``
     - **ams**
   * - ``\succsim``
     - **ams**
   * - ``\sum``
     -
   * - ``\sup``
     -
   * - ``\supset``
     -
   * - ``\Supset``
     - **ams**
   * - ``\supseteq``
     -
   * - ``\supseteqq``
     - **ams**
   * - ``\supsetneq``
     - **ams**
   * - ``\supsetneqq``
     - **ams**
   * - ``\surd``
     -
   * - ``\svmqty``
     - *physics*
   * - ``\swarrow``
     -
   * - ``\symbb``
     -
   * - ``\symbf``
     -
   * - ``\symbfcal``
     -
   * - ``\symbffrak``
     -
   * - ``\symbfit``
     -
   * - ``\symbfscr``
     -
   * - ``\symbfsf``
     -
   * - ``\symbfsfit``
     -
   * - ``\symbfsfup``
     -
   * - ``\symbfup``
     -
   * - ``\symcal``
     -
   * - ``\symfrak``
     -
   * - ``\symit``
     -
   * - ``\symnormal``
     -
   * - ``\symrm``
     -
   * - ``\symscr``
     -
   * - ``\symsf``
     -
   * - ``\symsfit``
     -
   * - ``\symsfup``
     -
   * - ``\symtt``
     -
   * - ``\symup``
     -


T
-

.. list-table::
   :widths: 70 30

   * - ``\tag``
     - **ams**
   * - ``\tan``
     - **base**, *physics*
   * - ``\tangent``
     - *physics*
   * - ``\tanh``
     - **base**, *physics*
   * - ``\tau``
     -
   * - ``\tbinom``
     - **ams**
   * - ``\TeX``
     -
   * - ``\text``
     -
   * - ``\textacutedbl``
     - *textcomp*
   * - ``\textasciiacute``
     - *textcomp*
   * - ``\textasciibreve``
     - *textcomp*
   * - ``\textasciicaron``
     - *textcomp*
   * - ``\textasciicircum``
     - *textcomp*
   * - ``\textasciidieresis``
     - *textcomp*
   * - ``\textasciimacron``
     - *textcomp*
   * - ``\textasciitilde``
     - *textcomp*
   * - ``\textasteriskcentered``
     - *textcomp*
   * - ``\textbackslash``
     - *textcomp*
   * - ``\textbaht``
     - *textcomp*
   * - ``\textbar``
     - *textcomp*
   * - ``\textbardbl``
     - *textcomp*
   * - ``\textbf``
     -
   * - ``\textbigcircle``
     - *textcomp*
   * - ``\textblank``
     - *textcomp*
   * - ``\textborn``
     - *textcomp*
   * - ``\textbraceleft``
     - *textcomp*
   * - ``\textbraceright``
     - *textcomp*
   * - ``\textbrokenbar``
     - *textcomp*
   * - ``\textbullet``
     - *textcomp*
   * - ``\textcelsius``
     - *textcomp*
   * - ``\textcent``
     - *textcomp*
   * - ``\textcentoldstyle``
     - *textcomp*
   * - ``\textcircledP``
     - *textcomp*
   * - ``\textclap``
     - *mathtools*
   * - ``\textcolonmonetary``
     - *textcomp*
   * - ``\textcolor``
     - **color**
   * - ``\textcompwordmark``
     - *textcomp*
   * - ``\textcopyleft``
     - *textcomp*
   * - ``\textcopyright``
     - *textcomp*
   * - ``\textcurrency``
     - *textcomp*
   * - ``\textdagger``
     - *textcomp*
   * - ``\textdaggerdbl``
     - *textcomp*
   * - ``\textdegree``
     - *textcomp*
   * - ``\textdied``
     - *textcomp*
   * - ``\textdiscount``
     - *textcomp*
   * - ``\textdiv``
     - *textcomp*
   * - ``\textdivorced``
     - *textcomp*
   * - ``\textdollar``
     - *textcomp*
   * - ``\textdollaroldstyle``
     - *textcomp*
   * - ``\textdong``
     - *textcomp*
   * - ``\textdownarrow``
     - *textcomp*
   * - ``\texteightoldstyle``
     - *textcomp*
   * - ``\textellipsis``
     - *textcomp*
   * - ``\textemdash``
     - *textcomp*
   * - ``\textendash``
     - *textcomp*
   * - ``\textestimated``
     - *textcomp*
   * - ``\texteuro``
     - *textcomp*
   * - ``\textexclamdown``
     - *textcomp*
   * - ``\textfiveoldstyle``
     - *textcomp*
   * - ``\textflorin``
     - *textcomp*
   * - ``\textfouroldstyle``
     - *textcomp*
   * - ``\textfractionsolidus``
     - *textcomp*
   * - ``\textgravedbl``
     - *textcomp*
   * - ``\textgreater``
     - *textcomp*
   * - ``\textguarani``
     - *textcomp*
   * - ``\textinterrobang``
     - *textcomp*
   * - ``\textinterrobangdown``
     - *textcomp*
   * - ``\textit``
     -
   * - ``\textlangle``
     - *textcomp*
   * - ``\textlbrackdbl``
     - *textcomp*
   * - ``\textleftarrow``
     - *textcomp*
   * - ``\textless``
     - *textcomp*
   * - ``\textlira``
     - *textcomp*
   * - ``\textllap``
     - *mathtools*
   * - ``\textlnot``
     - *textcomp*
   * - ``\textlquill``
     - *textcomp*
   * - ``\textmarried``
     - *textcomp*
   * - ``\textmho``
     - *textcomp*
   * - ``\textminus``
     - *textcomp*
   * - ``\textmu``
     - *textcomp*
   * - ``\textmusicalnote``
     - *textcomp*
   * - ``\textnaira``
     - *textcomp*
   * - ``\textnineoldstyle``
     - *textcomp*
   * - ``\textnormal``
     -
   * - ``\textnumero``
     - *textcomp*
   * - ``\textohm``
     - *textcomp*
   * - ``\textonehalf``
     - *textcomp*
   * - ``\textoneoldstyle``
     - *textcomp*
   * - ``\textonequarter``
     - *textcomp*
   * - ``\textonesuperior``
     - *textcomp*
   * - ``\textopenbullet``
     - *textcomp*
   * - ``\textordfeminine``
     - *textcomp*
   * - ``\textordmasculine``
     - *textcomp*
   * - ``\textparagraph``
     - *textcomp*
   * - ``\textperiodcentered``
     - *textcomp*
   * - ``\textpertenthousand``
     - *textcomp*
   * - ``\textperthousand``
     - *textcomp*
   * - ``\textpeso``
     - *textcomp*
   * - ``\textpm``
     - *textcomp*
   * - ``\textquestiondown``
     - *textcomp*
   * - ``\textquotedblleft``
     - *textcomp*
   * - ``\textquotedblright``
     - *textcomp*
   * - ``\textquoteleft``
     - *textcomp*
   * - ``\textquoteright``
     - *textcomp*
   * - ``\textrangle``
     - *textcomp*
   * - ``\textrbrackdbl``
     - *textcomp*
   * - ``\textrecipe``
     - *textcomp*
   * - ``\textreferencemark``
     - *textcomp*
   * - ``\textregistered``
     - *textcomp*
   * - ``\textrightarrow``
     - *textcomp*
   * - ``\textrlap``
     - *mathtools*
   * - ``\textrm``
     -
   * - ``\textrquill``
     - *textcomp*
   * - ``\textsection``
     - *textcomp*
   * - ``\textservicemark``
     - *textcomp*
   * - ``\textsevenoldstyle``
     - *textcomp*
   * - ``\textsf``
     -
   * - ``\textsixoldstyle``
     - *textcomp*
   * - ``\textsterling``
     - *textcomp*
   * - ``\textstyle``
     -
   * - ``\textsurd``
     - *textcomp*
   * - ``\textthreeoldstyle``
     - *textcomp*
   * - ``\textthreequarters``
     - *textcomp*
   * - ``\textthreesuperior``
     - *textcomp*
   * - ``\texttildelow``
     - *textcomp*
   * - ``\texttimes``
     - *textcomp*
   * - ``\texttip``
     - **action**
   * - ``\texttrademark``
     - *textcomp*
   * - ``\texttt``
     -
   * - ``\texttwooldstyle``
     - *textcomp*
   * - ``\texttwosuperior``
     - *textcomp*
   * - ``\textunderscore``
     - *textcomp*
   * - ``\textup``
     -
   * - ``\textuparrow``
     - *textcomp*
   * - ``\textvisiblespace``
     - *textcomp*
   * - ``\textwon``
     - *textcomp*
   * - ``\textyen``
     - *textcomp*
   * - ``\textzerooldstyle``
     - *textcomp*
   * - ``\tfrac``
     - **ams**
   * - ``\therefore``
     - **ams**
   * - ``\theta``
     -
   * - ``\Theta``
     -
   * - ``\thickapprox``
     - **ams**
   * - ``\thicksim``
     - **ams**
   * - ``\thinspace``
     -
   * - ``\TIC``
     - **bussproofs**
   * - ``\tilde``
     -
   * - ``\times``
     -
   * - ``\tiny``
     -
   * - ``\Tiny``
     -
   * - ``\to``
     -
   * - ``\toggle``
     - **action**
   * - ``\top``
     -
   * - ``\tr``
     - *physics*
   * - ``\Tr``
     - *physics*
   * - ``\trace``
     - *physics*
   * - ``\Trace``
     - *physics*
   * - ``\triangle``
     -
   * - ``\triangledown``
     - **ams**
   * - ``\triangleleft``
     -
   * - ``\trianglelefteq``
     - **ams**
   * - ``\triangleq``
     - **ams**
   * - ``\triangleright``
     -
   * - ``\trianglerighteq``
     - **ams**
   * - ``\TrinaryInf``
     - **bussproofs**
   * - ``\TrinaryInfC``
     - **bussproofs**
   * - ``\tripledash``
     - **mhchem**
   * - ``\tt``
     -
   * - ``\twoheadleftarrow``
     - **ams**
   * - ``\twoheadrightarrow``
     - **ams**


U
-

.. list-table::
   :widths: 70 30

   * - ``\UIC``
     - **bussproofs**
   * - ``\ulcorner``
     - **ams**
   * - ``\UnaryInf``
     - **bussproofs**
   * - ``\UnaryInfC``
     - **bussproofs**
   * - ``\underbrace``
     -
   * - ``\underbracket``
     - *mathtools*
   * - ``\underleftarrow``
     -
   * - ``\underleftrightarrow``
     -
   * - ``\underline``
     -
   * - ``\underparen``
     -
   * - ``\underrightarrow``
     -
   * - ``\underset``
     -
   * - ``\unicode``
     - **unicode**
   * - ``\unlhd``
     - **ams**
   * - ``\unrhd``
     - **ams**
   * - ``\upalpha``
     - *upgreek*
   * - ``\uparrow``
     -
   * - ``\Uparrow``
     -
   * - ``\upbeta``
     - *upgreek*
   * - ``\upchi``
     - *upgreek*
   * - ``\updelta``
     - *upgreek*
   * - ``\Updelta``
     - *upgreek*
   * - ``\updownarrow``
     -
   * - ``\Updownarrow``
     -
   * - ``\upepsilon``
     - *upgreek*
   * - ``\upeta``
     - *upgreek*
   * - ``\upgamma``
     - *upgreek*
   * - ``\Upgamma``
     - *upgreek*
   * - ``\upharpoonleft``
     - **ams**
   * - ``\upharpoonright``
     - **ams**
   * - ``\upiota``
     - *upgreek*
   * - ``\upkappa``
     - *upgreek*
   * - ``\uplambda``
     - *upgreek*
   * - ``\Uplambda``
     - *upgreek*
   * - ``\uplus``
     -
   * - ``\upmu``
     - *upgreek*
   * - ``\upnu``
     - *upgreek*
   * - ``\upomega``
     - *upgreek*
   * - ``\Upomega``
     - *upgreek*
   * - ``\upomicron``
     - *upgreek*
   * - ``\upphi``
     - *upgreek*
   * - ``\Upphi``
     - *upgreek*
   * - ``\uppi``
     - *upgreek*
   * - ``\Uppi``
     - *upgreek*
   * - ``\uppsi``
     - *upgreek*
   * - ``\Uppsi``
     - *upgreek*
   * - ``\uprho``
     - *upgreek*
   * - ``\uproot``
     -
   * - ``\upsigma``
     - *upgreek*
   * - ``\Upsigma``
     - *upgreek*
   * - ``\upsilon``
     -
   * - ``\Upsilon``
     -
   * - ``\uptau``
     - *upgreek*
   * - ``\uptheta``
     - *upgreek*
   * - ``\Uptheta``
     - *upgreek*
   * - ``\upuparrows``
     - **ams**
   * - ``\upupsilon``
     - *upgreek*
   * - ``\Upupsilon``
     - *upgreek*
   * - ``\upvarepsilon``
     - *upgreek*
   * - ``\upvarphi``
     - *upgreek*
   * - ``\upvarpi``
     - *upgreek*
   * - ``\upvarrho``
     - *upgreek*
   * - ``\upvarsigma``
     - *upgreek*
   * - ``\upvartheta``
     - *upgreek*
   * - ``\upxi``
     - *upgreek*
   * - ``\Upxi``
     - *upgreek*
   * - ``\upzeta``
     - *upgreek*
   * - ``\urcorner``
     - **ams**
   * - ``\usetagform``
     - *mathtools*


V
-

.. list-table::
   :widths: 70 30

   * - ``\va``
     - *physics*
   * - ``\var``
     - *physics*
   * - ``\varDelta``
     - **ams**
   * - ``\varepsilon``
     -
   * - ``\varGamma``
     - **ams**
   * - ``\variation``
     - *physics*
   * - ``\varinjlim``
     - **ams**
   * - ``\varkappa``
     - **ams**
   * - ``\varLambda``
     - **ams**
   * - ``\varliminf``
     - **ams**
   * - ``\varlimsup``
     - **ams**
   * - ``\varnothing``
     - **ams**
   * - ``\varOmega``
     - **ams**
   * - ``\varphi``
     -
   * - ``\varPhi``
     - **ams**
   * - ``\varpi``
     -
   * - ``\varPi``
     - **ams**
   * - ``\varprojlim``
     - **ams**
   * - ``\varpropto``
     - **ams**
   * - ``\varPsi``
     - **ams**
   * - ``\varrho``
     -
   * - ``\varsigma``
     -
   * - ``\varSigma``
     - **ams**
   * - ``\varsubsetneq``
     - **ams**
   * - ``\varsubsetneqq``
     - **ams**
   * - ``\varsupsetneq``
     - **ams**
   * - ``\varsupsetneqq``
     - **ams**
   * - ``\vartheta``
     -
   * - ``\varTheta``
     - **ams**
   * - ``\vartriangle``
     - **ams**
   * - ``\vartriangleleft``
     - **ams**
   * - ``\vartriangleright``
     - **ams**
   * - ``\varUpsilon``
     - **ams**
   * - ``\varXi``
     - **ams**
   * - ``\vb``
     - *physics*
   * - ``\vcenter``
     -
   * - ``\vdash``
     -
   * - ``\vDash``
     - **ams**
   * - ``\Vdash``
     - **ams**
   * - ``\vdot``
     - *physics*
   * - ``\vdots``
     -
   * - ``\vdotswithin``
     - *mathtools*
   * - ``\vec``
     -
   * - ``\vectorarrow``
     - *physics*
   * - ``\vectorbold``
     - *physics*
   * - ``\vectorunit``
     - *physics*
   * - ``\vee``
     -
   * - ``\veebar``
     - **ams**
   * - ``\verb``
     - **verb**
   * - ``\Vert``
     -
   * - ``\vert``
     -
   * - ``\vmqty``
     - *physics*
   * - ``\vnabla``
     - *physics*
   * - ``\vphantom``
     -
   * - ``\vqty``
     - *physics*
   * - ``\vu``
     - *physics*
   * - ``\Vvdash``
     - **ams**


W
-

.. list-table::
   :widths: 70 30

   * - ``\wedge``
     -
   * - ``\widehat``
     -
   * - ``\widetilde``
     -
   * - ``\wp``
     -
   * - ``\wr``
     -


X
-

.. list-table::
   :widths: 70 30

   * - ``\xcancel``
     - **cancel**
   * - ``\xhookleftarrow``
     - *mathtools*
   * - ``\xhookrightarrow``
     - *mathtools*
   * - ``\xi``
     -
   * - ``\Xi``
     -
   * - ``\xleftarrow``
     - **ams**
   * - ``\xLeftarrow``
     - *mathtools*
   * - ``\xleftharpoondown``
     - *mathtools*
   * - ``\xleftharpoonup``
     - *mathtools*
   * - ``\xleftrightarrow``
     - *mathtools*, **mhchem**
   * - ``\xLeftrightarrow``
     - *mathtools*
   * - ``\xleftrightharpoons``
     - *mathtools*
   * - ``\xLeftrightharpoons``
     - **mhchem**
   * - ``\xlongequal``
     - **extpfeil**
   * - ``\xmapsto``
     - **extpfeil**, *mathtools*
   * - ``\xmat``
     - *physics*
   * - ``\xmathstrut``
     - *mathtools*
   * - ``\xmatrix``
     - *physics*
   * - ``\xrightarrow``
     - **ams**
   * - ``\xRightarrow``
     - *mathtools*
   * - ``\xrightharpoondown``
     - *mathtools*
   * - ``\xrightharpoonup``
     - *mathtools*
   * - ``\xrightleftharpoons``
     - *mathtools*, **mhchem**
   * - ``\xRightleftharpoons``
     - **mhchem**
   * - ``\xtofrom``
     - **extpfeil**
   * - ``\xtwoheadleftarrow``
     - **extpfeil**
   * - ``\xtwoheadrightarrow``
     - **extpfeil**


Y
-

.. list-table::
   :widths: 70 30

   * - ``\yen``
     - **ams**


Z
-

.. list-table::
   :widths: 70 30

   * - ``\zeromatrix``
     - *physics*
   * - ``\zeta``
     -
   * - ``\zmat``
     - *physics*


Environments
------------

.. list-table::
   :widths: 70 30

   * - ``align``
     - **ams**
   * - ``align*``
     - **ams**
   * - ``alignat``
     - **ams**
   * - ``alignat*``
     - **ams**
   * - ``aligned``
     - **ams**
   * - ``alignedat``
     - **ams**
   * - ``array``
     -
   * - ``bmatrix``
     - **ams**
   * - ``Bmatrix``
     - **ams**
   * - ``bmatrix*``
     - *mathtools*
   * - ``Bmatrix*``
     - *mathtools*
   * - ``bsmallmatrix``
     - *mathtools*
   * - ``Bsmallmatrix``
     - *mathtools*
   * - ``bsmallmatrix*``
     - *mathtools*
   * - ``Bsmallmatrix*``
     - *mathtools*
   * - ``cases``
     - **ams**
   * - ``cases*``
     - *mathtools*
   * - ``CD``
     - **amscd**
   * - ``crampedsubarray``
     - *mathtools*
   * - ``dcases``
     - *mathtools*
   * - ``dcases*``
     - *mathtools*
   * - ``drcases``
     - *mathtools*
   * - ``drcases*``
     - *mathtools*
   * - ``empheq``
     - *empheq*
   * - ``eqnarray``
     -
   * - ``eqnarray*``
     - **ams**
   * - ``equation``
     -
   * - ``equation*``
     - **ams**
   * - ``flalign``
     - **ams**
   * - ``flalign*``
     - **ams**
   * - ``gather``
     - **ams**
   * - ``gather*``
     - **ams**
   * - ``gathered``
     - **ams**
   * - ``lgathered``
     - *mathtools*
   * - ``matrix``
     - **ams**
   * - ``matrix*``
     - *mathtools*
   * - ``multline``
     - **ams**
   * - ``multline*``
     - **ams**
   * - ``multlined``
     - *mathtools*
   * - ``numcases``
     - *cases*
   * - ``pmatrix``
     - **ams**
   * - ``pmatrix*``
     - *mathtools*
   * - ``prooftree``
     - **bussproofs**
   * - ``psmallmatrix``
     - *mathtools*
   * - ``psmallmatrix*``
     - *mathtools*
   * - ``rcases``
     - *mathtools*
   * - ``rcases*``
     - *mathtools*
   * - ``rgathered``
     - *mathtools*
   * - ``smallmatrix``
     - **ams**, *physics*
   * - ``smallmatrix*``
     - *mathtools*
   * - ``split``
     - **ams**
   * - ``spreadlines``
     - *mathtools*
   * - ``subarray``
     - **ams**
   * - ``subnumcases``
     - *cases*
   * - ``vmatrix``
     - **ams**
   * - ``Vmatrix``
     - **ams**
   * - ``vmatrix*``
     - *mathtools*
   * - ``Vmatrix*``
     - *mathtools*
   * - ``vsmallmatrix``
     - *mathtools*
   * - ``Vsmallmatrix``
     - *mathtools*
   * - ``vsmallmatrix*``
     - *mathtools*
   * - ``Vsmallmatrix*``
     - *mathtools*
   * - ``xalignat``
     - **ams**
   * - ``xalignat*``
     - **ams**
   * - ``xxalignat``
     - **ams**


|-----|
.. _extension-list:

################################
/I. The TeX/LaTeX Extension List
################################

The main extensions are described below:

.. toctree::
   :maxdepth: 1

   action
   ams
   amscd
   autoload
   bbox
   boldsymbol
   braket
   bussproofs
   cancel
   cases
   centernot
   color
   colortbl
   colorv2
   configmacros
   empheq
   enclose
   extpfeil
   gensymb
   html
   mathtools
   mhchem
   newcommand
   noerrors
   noundefined
   physics
   require
   setoptions
   tagformat
   textcomp
   textmacros
   unicode
   upgreek
   verb

These extensions have not yet been ported to version 3:

.. toctree::
   :maxdepth: 1

   autobold
   autoload-all
   begingroup
   mediawiki-texvc

See the :ref:`custom-extension` section for how to create your own TeX
extension.

|-----|
.. _tex-action:

###########
//E. action
###########

The `action` extension gives you access to the MathML ``<maction>``
element.  It defines three new non-standard macros:

.. describe:: \\mathtip{math}{tip}

    Use ``tip`` (in math mode) as tooltip for ``math``.

.. describe:: \\texttip{math}{tip}

    Use ``tip`` (plain text) as tooltip for ``math``.

.. describe:: \\toggle{math1}{math2}...\\endtoggle

    Show ``math1``, and when clicked, show ``math2``, and so on.
    When the last one is clicked, go back to ``math1``.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `action` extension explicitly, add
``'[tex]/action'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'action'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/action']},
     tex: {packages: {'[+]': ['action']}}
   };

Alternatively, use ``\require{action}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
package is loaded.

-----


.. _tex-action-commands:


action Commands
---------------

The `action` extension implements the following macros:
``\mathtip``, ``\texttip``, ``\toggle``


|-----|
.. _tex-ams:

########
//E. ams
########

The `ams` extension implements AMS math environments and macros, and
macros for accessing the characters in the AMS symbol fonts.  This
extension is already loaded in all the components that include
the TeX input jax, other than ``input/tex-base``.  See the :ref:`list
of control sequences <tex-ams-commands>` for details about what commands
are implemented in this extension.

To load the `ams` extension explicitly (when using
``input/tex-base`` for example), add ``'[tex]/ams'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'ams'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/ams']},
     tex: {packages: {'[+]': ['ams']}}
   };

Alternatively, use ``\require{ams}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

Since the `ams` extension is included in the combined
components that contain the TeX input jax, it will already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['ams']}}
   };


-----


.. _tex-ams-options:


ams Options
-----------

Adding the `ams` extension to the ``packages`` array defines an
``ams`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

  MathJax = {
    tex: {
      ams: {
        multlineWidth: '100%',
        multlineIndent: '1em'
      }
    }
  };


.. _tex-ams-multlineWidth:
.. describe:: multlineWidth: '100%'

The width to use for multline environments.

.. _tex-ams-multlineIndent:
.. describe:: multlineIndent: '1em'

The margin to use on both sides of multline environments.


.. note::

   The ``mutlineWidth`` option used to be in the main ``tex`` block,
   but as of version 3.2, it is now in the ``ams`` sub-block of the
   ``tex`` block.  Version 3.2 includes code to move the configuration
   from its old location to its new one, but that
   backward-compatibility code will be removed in a future version.


-----


.. _tex-ams-commands:


ams Commands
------------

The `ams` extension implements the following macros:
``\approxeq``, ``\backepsilon``, ``\backprime``, ``\backsim``, ``\backsimeq``, ``\barwedge``, ``\Bbbk``, ``\because``, ``\beth``, ``\between``, ``\bigstar``, ``\binom``, ``\blacklozenge``, ``\blacksquare``, ``\blacktriangle``, ``\blacktriangledown``, ``\blacktriangleleft``, ``\blacktriangleright``, ``\Box``, ``\boxdot``, ``\boxed``, ``\boxminus``, ``\boxplus``, ``\boxtimes``, ``\bumpeq``, ``\Bumpeq``, ``\Cap``, ``\centerdot``, ``\cfrac``, ``\checkmark``, ``\circeq``, ``\circlearrowleft``, ``\circlearrowright``, ``\circledast``, ``\circledcirc``, ``\circleddash``, ``\circledR``, ``\circledS``, ``\complement``, ``\Cup``, ``\curlyeqprec``, ``\curlyeqsucc``, ``\curlyvee``, ``\curlywedge``, ``\curvearrowleft``, ``\curvearrowright``, ``\daleth``, ``\dashleftarrow``, ``\dashrightarrow``, ``\dbinom``, ``\ddddot``, ``\dddot``, ``\DeclareMathOperator``, ``\dfrac``, ``\diagdown``, ``\diagup``, ``\Diamond``, ``\digamma``, ``\divideontimes``, ``\Doteq``, ``\doteqdot``, ``\dotplus``, ``\doublebarwedge``, ``\doublecap``, ``\doublecup``, ``\downdownarrows``, ``\downharpoonleft``, ``\downharpoonright``, ``\eqcirc``, ``\eqref``, ``\eqsim``, ``\eqslantgtr``, ``\eqslantless``, ``\eth``, ``\fallingdotseq``, ``\Finv``, ``\frac``, ``\Game``, ``\genfrac``, ``\geqq``, ``\geqslant``, ``\ggg``, ``\gggtr``, ``\gimel``, ``\gnapprox``, ``\gneq``, ``\gneqq``, ``\gnsim``, ``\gtrapprox``, ``\gtrdot``, ``\gtreqless``, ``\gtreqqless``, ``\gtrless``, ``\gtrsim``, ``\gvertneqq``, ``\hslash``, ``\idotsint``, ``\iiiint``, ``\impliedby``, ``\implies``, ``\injlim``, ``\intercal``, ``\Join``, ``\leadsto``, ``\leftarrowtail``, ``\leftleftarrows``, ``\leftrightarrows``, ``\leftrightharpoons``, ``\leftrightsquigarrow``, ``\leftthreetimes``, ``\leqq``, ``\leqslant``, ``\lessapprox``, ``\lessdot``, ``\lesseqgtr``, ``\lesseqqgtr``, ``\lessgtr``, ``\lesssim``, ``\lhd``, ``\llcorner``, ``\Lleftarrow``, ``\lll``, ``\llless``, ``\lnapprox``, ``\lneq``, ``\lneqq``, ``\lnsim``, ``\looparrowleft``, ``\looparrowright``, ``\lozenge``, ``\lrcorner``, ``\Lsh``, ``\ltimes``, ``\lvert``, ``\lVert``, ``\lvertneqq``, ``\maltese``, ``\mathring``, ``\measuredangle``, ``\mho``, ``\multimap``, ``\ncong``, ``\negmedspace``, ``\negthickspace``, ``\nexists``, ``\ngeq``, ``\ngeqq``, ``\ngeqslant``, ``\ngtr``, ``\nleftarrow``, ``\nLeftarrow``, ``\nleftrightarrow``, ``\nLeftrightarrow``, ``\nleq``, ``\nleqq``, ``\nleqslant``, ``\nless``, ``\nmid``, ``\nobreakspace``, ``\notag``, ``\nparallel``, ``\nprec``, ``\npreceq``, ``\nrightarrow``, ``\nRightarrow``, ``\nshortmid``, ``\nshortparallel``, ``\nsim``, ``\nsubseteq``, ``\nsubseteqq``, ``\nsucc``, ``\nsucceq``, ``\nsupseteq``, ``\nsupseteqq``, ``\ntriangleleft``, ``\ntrianglelefteq``, ``\ntriangleright``, ``\ntrianglerighteq``, ``\nvdash``, ``\nvDash``, ``\nVdash``, ``\nVDash``, ``\operatorname``, ``\pitchfork``, ``\precapprox``, ``\preccurlyeq``, ``\precnapprox``, ``\precneqq``, ``\precnsim``, ``\precsim``, ``\projlim``, ``\restriction``, ``\rhd``, ``\rightarrowtail``, ``\rightleftarrows``, ``\rightleftharpoons``, ``\rightrightarrows``, ``\rightsquigarrow``, ``\rightthreetimes``, ``\risingdotseq``, ``\Rrightarrow``, ``\Rsh``, ``\rtimes``, ``\rvert``, ``\rVert``, ``\shortmid``, ``\shortparallel``, ``\shoveleft``, ``\shoveright``, ``\sideset``, ``\SkipLimits``, ``\smallfrown``, ``\smallsetminus``, ``\smallsmile``, ``\sphericalangle``, ``\sqsubset``, ``\sqsupset``, ``\square``, ``\Subset``, ``\subseteqq``, ``\subsetneq``, ``\subsetneqq``, ``\substack``, ``\succapprox``, ``\succcurlyeq``, ``\succnapprox``, ``\succneqq``, ``\succnsim``, ``\succsim``, ``\Supset``, ``\supseteqq``, ``\supsetneq``, ``\supsetneqq``, ``\tag``, ``\tbinom``, ``\tfrac``, ``\therefore``, ``\thickapprox``, ``\thicksim``, ``\triangledown``, ``\trianglelefteq``, ``\triangleq``, ``\trianglerighteq``, ``\twoheadleftarrow``, ``\twoheadrightarrow``, ``\ulcorner``, ``\unlhd``, ``\unrhd``, ``\upharpoonleft``, ``\upharpoonright``, ``\upuparrows``, ``\urcorner``, ``\varDelta``, ``\varGamma``, ``\varinjlim``, ``\varkappa``, ``\varLambda``, ``\varliminf``, ``\varlimsup``, ``\varnothing``, ``\varOmega``, ``\varPhi``, ``\varPi``, ``\varprojlim``, ``\varpropto``, ``\varPsi``, ``\varSigma``, ``\varsubsetneq``, ``\varsubsetneqq``, ``\varsupsetneq``, ``\varsupsetneqq``, ``\varTheta``, ``\vartriangle``, ``\vartriangleleft``, ``\vartriangleright``, ``\varUpsilon``, ``\varXi``, ``\vDash``, ``\Vdash``, ``\veebar``, ``\Vvdash``, ``\xleftarrow``, ``\xrightarrow``, ``\yen``

And the following environments:
``align*``, ``align``, ``alignat*``, ``alignat``, ``aligned``, ``alignedat``, ``bmatrix``, ``Bmatrix``, ``cases``, ``eqnarray*``, ``gather*``, ``gather``, ``gathered``, ``matrix``, ``multline*``, ``multline``, ``pmatrix``, ``smallmatrix``, ``split``, ``subarray``, ``vmatrix``, ``Vmatrix``


|-----|
.. _tex-amscd:

##########
//E. amscd
##########

The `amscd` extensions implements the `CD` environment for commutative
diagrams.  See the `AMScd guide
<http://www.jmilne.org/not/Mamscd.pdf>`__ for more information on how
to use the `CD` environment.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `amscd` extension explicitly, add
``'[tex]/amscd'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'amscd'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/amscd']},
     tex: {packages: {'[+]': ['amscd']}}
   };

Alternatively, use ``\require{amscd}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-amscd-options:

amscd Options
-------------

Adding the `amscd` extension to the ``packages`` array defines an
``amscd`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

   MathJax = {
     tex: {
       amscd: {
         colspace: '5pt',
         rowspace: '5pt',
         harrowsize: '2.75em',
         varrowsize: '1.75em',
         hideHorizontalLabels: false
       }
     }
   };

.. _tex-amscd-colspace:
.. describe:: colspace: '5pt'

   This gives the amount of space to use between columns in the
   commutative diagram.

.. _tex-amscd-rowspace:
.. describe:: rowspace: '5pt'

   This gives the amount of space to use between rows in the
   commutative diagram.

.. _tex-amscd-harrowsize:
.. describe:: harrowsize: '2.75em'

   This gives the minimum size for horizontal arrows in the
   commutative diagram.

.. _tex-amscd-varrowsize:
.. describe:: varrowsize: '1.75em'

   This gives the minimum size for vertical arrows in the
   commutative diagram.

.. _tex-amscd-hideHorizontalLabels:
.. describe:: hideHorizontalLabels: false

   This determines whether horizontal arrows with labels above or
   below will use ``\smash`` in order to hide the height of the
   labels.  (Labels above or below horizontal arrows can cause excess
   space between rows, so setting this to ``true`` can improve the
   look of the diagram.)


-----


.. _tex-amscd-commands:


amscd Commands
--------------

The `amscd` extension implements the following macros:
``@``, ``\minCDarrowheight``, ``\minCDarrowwidth``

And the following environments:
``CD``


|-----|
.. _tex-autobold:

#############
//E. autobold
#############

The `autobold` extension is no longer available in MathJax version 3.

|-----|
.. _tex-autoload-all:

#################
//E. autoload-all
#################

The `autoload-all` extension has been replaced by the :ref:`tex-autoload`
extension, which is more easily configurable.

|-----|
.. _tex-autoload:

#############
//E. autoload
#############

The `autoload` extension predefines all the macros from the extensions
that haven't been loaded already so that they automatically load the
needed extension when they are first used, with the exception of the
:ref:`tex-physics` package, since it redefines standard macros, and
the :ref:`tex-ams` package, due to the large number of macros it contains.

The `autoload` extension is loaded in all the components that include
the TeX input jax, other than ``input/tex-base``.  That means that the
TeX input jax essentially has access to all the extensions, even if
they aren't loaded initially, and you should never have to use
``\require`` or load other extensions (except `physics`) explicitly
unless you want to.

You can control which extensions `autoload` will load using the
``autoload`` object in the ``tex`` block of your MathJax
configuration.  This object contains `key: value` pairs where the
`key` is the name of an extension, and `value` is an array listing the
macro names that cause that extension to be loaded.  If environments
can also cause the extension to be loaded, `value` is an array
consisting of two sub-arrays, the first being the names of the macros
that cause the extension to autoload, and the second being the names
of the environments that cause the extension to be loaded.

For example,

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         verb: ['verb']
       }
     }
   };

says that the ``\verb`` command should load the :ref:`tex-verb`
extension when it is first used.

If the array is empty, then that extension will not be loaded, so to
prevent `autoload` from loading an extension, assign it the empty
array.  E.g.,

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         verb: []
       }
     }
   };

says that the `verb` extension will not be autoloaded.

.. note::
   
   The `autoload` extension defines ``\color`` to be the one from the
   :ref:`tex-color` extension (the LaTeX-compatible one rather than
   the non-standard MathJax version).  If you wish to use the
   non-standard version-2 ``\color`` macro from the :ref:`tex-colorv2`
   extension instead, use the following:

   .. code-block:: javascript

      window.MathJax = {
        tex: {
          autoload: {
            color: [],
            colorv2: ['color']
          }
        }
      };


This extension is already loaded in all the components that
include the TeX input jax, other than ``input/tex-base``.  To load the
`autoload` extension explicitly (when using ``input/tex-base`` for
example), add ``'[tex]/autoload'`` to the ``load`` array of the
``loader`` block of your MathJax configuration, and add
``'autoload'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/autoload']},
     tex: {packages: {'[+]': ['autoload']}}
   };

Since the `autoload` extension is included in the combined
components that contain the TeX input jax, it will already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['autload']}}
   };

-----

.. _tex-autoload-options:

autoload Options
----------------

Adding the `autoload` extension to the ``packages`` array defines an
``autoload`` sub-block to the ``tex`` configuration block.  This block
contains `key: value` pairs where the `key` is a TeX package name, and
the `value` is an array of macros that cause that package to be loaded,
or an array consisting of two arrays, the first giving names of macros
and the second names of environments; the first time any of them are
used, the extension will be loaded automatically.

The default autoload definitions are the following:

.. code-block:: javascript

   MathJax = {
     tex: {
       autoload: expandable({
         action: ['toggle', 'mathtip', 'texttip'],
         amscd: [[], ['CD']],
         bbox: ['bbox'],
         boldsymbol: ['boldsymbol'],
         braket: ['bra', 'ket', 'braket', 'set', 'Bra', 'Ket', 'Braket', 'Set', 'ketbra', 'Ketbra'],
         cancel: ['cancel', 'bcancel', 'xcancel', 'cancelto'],
         color: ['color', 'definecolor', 'textcolor', 'colorbox', 'fcolorbox'],
         enclose: ['enclose'],
         extpfeil: ['xtwoheadrightarrow', 'xtwoheadleftarrow', 'xmapsto',
                    'xlongequal', 'xtofrom', 'Newextarrow'],
         html: ['href', 'class', 'style', 'cssId'],
         mhchem: ['ce', 'pu'],
         newcommand: ['newcommand', 'renewcommand', 'newenvironment', 'renewenvironment', 'def', 'let'],
         unicode: ['unicode'],
         verb: ['verb']
       }
     }
   };

To prevent an extension from autoloading, set its value to an empty
array.  E.g., to not autoload the `color` extension, use

.. code-block:: javascript

   MathJax = {
     tex: {
       autoload: expandable({
         color: []
       }
     }
   };

If you define your own extensions, and they have a prefix other than
``[tex]``, then include that in the extension name.  For instance,

.. code-block:: javascript

   MathJax = {
     tex: {
       autoload: expandable({
         '[extensions]/myExtension' : ['myMacro', 'myOtherMacro']
       }
     }
   };

See the :ref:`loader-options` section for details about how to define
your own prefixes, like the ``[extensions]`` prefix used here.

|-----|
.. _tex-bbox:

#########
//E. bbox
#########

The `bbox` extension defines a new macro for adding background colors,
borders, and padding to your math expressions.

.. describe:: \\bbox[options]{math}

    puts a bounding box around ``math`` using the provided ``options``.
    The options can be one of the following:

    1.  A color name used for the background color.
    2.  A dimension (e.g., ``2px``) to be used as a padding around the
        mathematics (on all sides).
    3.  Style attributes to be applied to the mathematics (e.g.,
        ``border: 1px solid red``).
    4.  A combination of these separated by commas.

Here are some examples:

.. code-block:: latex

    \bbox[red]{x+y}      % a red box behind x+y
    \bbox[2pt]{x+1}      % an invisible box around x+y with 2pt of extra space
    \bbox[red,2pt]{x+1}  % a red box around x+y with 2pt of extra space
    \bbox[5px, border: 2px solid red]
                         % a 2px red border around the math 5px away

This extension is loaded automatically when the `autoload` extension
is used.  To load the `bbox` extension explicitly, add
``'[tex]/bbox'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'bbox'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/bbox']},
     tex: {packages: {'[+]': ['bbox']}}
   };

Alternatively, use ``\require{bbox}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-bbox-commands:


bbox Commands
-------------

The `bbox` extension implements the following macros:
``\bbox``


|-----|
.. _tex-begingroup:

###############
//E. begingroup
###############

The `begingroup` extension has not yet been translated to version 3,
so currently it is not available.  It should be included in a future
release of MathJax.

..
   The `begingroup` extension implements commands that provide a
   mechanism for localizing macro definitions so that they are not
   permanent.  This is useful if you have a blog site, for example, and
   want to isolate changes that your readers make in their comments so
   that they don't affect later comments.

   It defines two new non-standard macros, ``\begingroup`` and
   ``\endgroup``, that are used to start and stop a local namespace for
   macros.  Any macros that are defined between the ``\begingroup`` and
   ``\endgroup`` will be removed after the ``\endgroup`` is executed.
   For example, if you put ``\(\begingroup\)`` at the top of each reader's
   comments and ``\(\endgroup\)`` at the end, then any macros they define
   within their response will be removed after it is processed.

   In addition to these two macros, the `begingroup` extension defines
   the standard ``\global`` and ``\gdef`` control sequences from TeX.
   (The ``\let``, ``\def``, ``\newcommand``, and ``\newenvironment``
   control sequences are already defined in the core TeX input jax.)

   To use this extension in your own configurations, add it to the
   `extensions` array in the TeX block.

   .. code-block:: javascript

       TeX: {
         extensions: ["begingroup.js"]
       }

   This extension is **not** included in any of the combined configurations,
   and will not be loaded automatically, so you must include it
   explicitly in your configuration if you wish to use these commands.

|-----|
.. _tex-boldsymbol:

###############
//E. boldsymbol
###############

The `boldsymbol` extension defines the ``\boldsymbol`` LaTeX macro
that produces a bold version of its argument, provided bold versions
of the required characters are available.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `boldsymbol` extension explicitly (when using
``input/tex-base`` for example), add ``'[tex]/boldsymbol'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'boldsymbol'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/boldsymbol']},
     tex: {packages: {'[+]': ['boldsymbol']}}
   };

Alternatively, use ``\require{boldsymbol}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-boldsymbol-commands:


boldsymbol Commands
-------------------

The `boldsymbol` extension implements the following macros:
``\boldsymbol``


|-----|
.. _tex-braket:

###########
//E. braket
###########

The `braket` extension defines the following macros for producing the
`bra-ket notation <https://en.wikipedia.org/wiki/Bra–ket_notation>`__
and set notation used in quantum mechanics

  .. describe:: \\bra{math}
                \\ket{math}
                \\braket{math}
                \\set{math}
                \\Bra{math}
                \\Ket{math}
                \\Braket{math}
                \\Set{math}

and the non-standard macros

  .. describe:: \\ketbra{math}
                \\Ketbra{math}


See the documentation for the LaTeX `braket package
<https://ctan.org/pkg/braket?lang=en>`__ for details of how these are
used.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `braket` extension explicitly (when using
``input/tex-base`` for example), add ``'[tex]/braket'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'braket'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/braket']},
     tex: {packages: {'[+]': ['braket']}}
   };

Alternatively, use ``\require{braket}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-braket-commands:


braket Commands
---------------

The `braket` extension implements the following macros:
``\|``, ``\bra``, ``\Bra``, ``\braket``, ``\Braket``, ``\ket``, ``\Ket``, ``\ketbra``, ``\Ketbra``, ``\set``, ``\Set``, ``|``


|-----|
.. _tex-bussproofs:

###############
//E. bussproofs
###############

The `bussproofs` extension implements the ``bussproofs`` style package from
LaTeX. See the `CTAN page <https://www.ctan.org/pkg/bussproofs>`__ for
more information and documentation of `bussproofs`.

Note that there are a couple of important differences between the use
of the package in MathJax compared to actual LaTeX.  First, proofs
always have to be in a `prooftree` environment, i.e., inference macros
are only recognised if they are enclosed in ``\begin{prooftree}`` and
``\end{prooftree}``. Consequently the ``\DisplayProof`` command is not
necessary.

Second, unlike in the LaTeX package, options for abbreviated inference
rule macros do not have to be manually set. All abbreviated macros are
directly available. Thus commands like ``\BinaryInfC`` and ``\BIC``
can be used immediately and interchangeably.


For example:

.. code-block:: latex

    \begin{prooftree}
    \AxiomC{}
    \RightLabel{Hyp$^{1}$}
    \UnaryInfC{$P$}
    \AXC{$P\to Q$}
    \RL{$\to_E$}
    \BIC{$Q^2$}
    \AXC{$Q\to R$} 
    \RL{$\to_E$} 
    \BIC{$R$} 
    \AXC{$Q$} 
    \RL{Rit$^2$} 
    \UIC{$Q$}
    \RL{$\wedge_I$} 
    \BIC{$Q\wedge R$} 
    \RL{$\to_I$$^1$} 
    \UIC{$P\to Q\wedge R$}
    \end{prooftree}

Also note that the `bussproofs` commands for sequent calculus derivations are
not yet fully implemented.


This extension is loaded automatically when the `autoload` extension
is used.  To load the `bussproofs` extension explicitly, add
``'[tex]/bussproofs'`` to the ``load`` array of the ``loader`` block
of your MathJax configuration, and add ``'bussproofs'`` to the
``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/bussproofs']},
     tex: {packages: {'[+]': ['bussproofs']}}
   };

Alternatively, use ``\require{bussproofs}`` in a TeX expression to
load it dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-bussproofs-commands:


bussproofs Commands
-------------------

The `bussproofs` extension implements the following macros:
``\alwaysDashedLine``, ``\alwaysNoLine``, ``\alwaysRootAtBottom``, ``\alwaysRootAtTop``, ``\alwaysSingleLine``, ``\alwaysSolidLine``, ``\AXC``, ``\Axiom``, ``\AxiomC``, ``\BIC``, ``\BinaryInf``, ``\BinaryInfC``, ``\dashedLine``, ``\fCenter``, ``\LeftLabel``, ``\LL``, ``\noLine``, ``\QuaternaryInf``, ``\QuaternaryInfC``, ``\QuinaryInf``, ``\QuinaryInfC``, ``\RightLabel``, ``\RL``, ``\rootAtBottom``, ``\rootAtTop``, ``\singleLine``, ``\solidLine``, ``\TIC``, ``\TrinaryInf``, ``\TrinaryInfC``, ``\UIC``, ``\UnaryInf``, ``\UnaryInfC``

And the following environments:
``prooftree``


|-----|
.. _tex-cancel:

###########
//E. cancel
###########

The `cancel` extension defines the following macros:

.. describe:: \\cancel{math}

    Strikeout ``math`` from lower left to upper right.

.. describe:: \\bcancel{math}

    Strikeout ``math`` from upper left to lower right.

.. describe:: \\xcancel{math}

    Strikeout ``math`` with an "X".

.. describe:: \\cancelto{value}{math}

    Strikeout ``math`` with an arrow going to ``value``.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `cancel` extension explicitly, add
``'[tex]/cancel'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'cancel'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/cancel']},
     tex: {packages: {'[+]': ['cancel']}}
   };

Alternatively, use ``\require{cancel}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-cancel-commands:


cancel Commands
---------------

The `cancel` extension implements the following macros:
``\bcancel``, ``\cancel``, ``\cancelto``, ``\xcancel``


|-----|
.. _tex-cases:

##########
//E. cases
##########


The `cases` extension implements the ``cases`` style package from LaTeX.  It
provides environments ``numcases`` and ``subnumcases`` for formulas with
separately enumerated cases.  See the `CTAN page
<https://www.ctan.org/pkg/cases>`__ for more information and documentation of
`cases`.

This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `cases` extension, add ``'[tex]/cases'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'cases'`` to the ``packages`` array of the ``tex`` block.


.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/cases']},
     tex: {packages: {'[+]': ['cases']}}
   };


You can configure the `autoload` extension to load `cases` via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         cases: [[], ['numcases', 'subnumcases']]
       }
     }
   };


Alternatively, use ``\require{cases}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-cases-commands:


cases Commands
--------------

The `cases` extension implements the following macros:
``&``

And the following environments:
``numcases``, ``subnumcases``


|-----|
.. _tex-centernot:

##############
//E. centernot
##############

The `centernot` extension implements the ``centernot`` style package from
LaTeX. It provides the ``\centernot`` command which can be used as a replacement
of the standard ``\not`` command and generally leads to a better alignment of
the slash with the operator it negates. This can be observed with the following
two examples:


.. code-block:: latex

  \begin{array}{c}
    A \not\longrightarrow B\\
    A \centernot\longrightarrow B
  \end{array}


.. code-block:: latex

  \begin{array}{c}
    A \nparallel B\\
    A \not\parallel B\\
    A \centernot\parallel B
  \end{array}

See also the `CTAN page <https://www.ctan.org/pkg/centernot>`__ for more
information and documentation of `centernot`.

In addition to ``\centernot`` the package also implements the non-standard
``\centerOver``.

.. describe:: \centerOver{symbol1}{symbol2}

    Overlays ``symbol2`` centered on top of ``symbol1``.


This package is not autoloaded, so you must request it explicitly if you want to
use it.  To load the `centernot` extension, add ``'[tex]/centernot'`` to the
``load`` array of the ``loader`` block of your MathJax configuration, and add
``'centernot'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/centernot']},
     tex: {packages: {'[+]': ['centernot']}}
   };



You can configure the `autoload` extension to load `centernot` via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         centernot: ['centernot', 'centerOver']
       }
     }
   };


Alternatively, use ``\require{centernot}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-centernot-commands:


centernot Commands
------------------

The `centernot` extension implements the following macros:
``\centernot``, ``\centerOver``


|-----|
.. _tex-color:

##########
//E. color
##########

The `color` extension defines the ``\color`` macro as in the LaTeX
`color` package, along with ``\colorbox``, ``\fcolorbox``, and
``\definecolor``.  It declares the standard set of colors (`Apricot`,
`Aquamarine`, `Bittersweet`, and so on), and provides the RGB, rgb,
and grey-scale color spaces in addition to named colors.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `color` extension explicitly, add
``'[tex]/color'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'color'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/color']},
     tex: {packages: {'[+]': ['color']}}
   };

Alternatively, use ``\require{color}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

.. note::

   In version 2, a non-standard ``\color`` macro was the default
   implementation, but in version 3, the standard LaTeX one is now the
   default.  The difference between the two is that the standard
   ``\color`` macro is a switch (everything that follows it is in the
   new color), whereas the non-standard version 2 ``\color`` macro
   takes an argument that is the mathematics to be colored.  That is,
   in version 2, you would do

   .. code-block:: latex

      \color{red}{x} + \color{blue}{y}

   to get a red *x* added to a blue *y*.  But in version 3 (and in
   LaTeX itself), you would do
   
   .. code-block:: latex

      {\color{red} x} + {\color{blue} y}

   If you want the old version 2 behavior, use the :ref:`tex-colorv2`
   extension instead.

-----


.. _tex-color-options:

color Options
-------------

Adding the `color` extension to the ``packages`` array defines a
``color`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

   MathJax = {
     tex: {
       color: {
         padding: '5px',
         borderWidth: '2px'
       }
     }
   };

.. _tex-color-padding:
.. describe:: padding: '5px'

   This gives the padding to use for color boxes with background colors.

.. _tex-color-borderWidth:
.. describe:: borderWidth: '2px'

   This gives the border width to use with framed color boxes produced
   by ``\fcolorbox``.

-----


.. _tex-color-commands:


color Commands
--------------

The `color` extension implements the following macros:
``\color``, ``\colorbox``, ``\definecolor``, ``\fcolorbox``, ``\textcolor``


|-----|
.. _tex-colortbl:

#############
//E. colortbl
#############

The `colortbl` extension partially implements the ``colortbl`` style package
from LaTeX. It allows coloring of rows, columns and individual cell of tables.
See the `CTAN page <https://www.ctan.org/pkg/colortbl>`__ for more information
and documentation of `colortbl`. But note that MathJax currently does not
implement any commands for styling or coloring table boundaries. In addition,
MathJax implement some of the `colortbl` commands differently:


.. describe:: \rowcolor[model]{color}

   Allows to color a single row in a table. It needs to be used in the first
   cell of a row to color. If used elsewhere an error is thrown.

.. describe:: \columncolor[model]{color}

   Allows to color a single column. It needs to be used in the first **cell** of
   the column to color. If used elsewhere an error is thrown.

   Note, that it is unlike its LaTeX counterpart that is used in the layout
   specification of a table environment (e.g., ``array``). While MathJax will not
   throw an error of a ``\columncolor`` is used in the arguments of the table
   environment, it will be ignored.

   In addition overhang arguments are currently not handled. That is MathJax
   ignores up to two optional bracketed arguments after the mandatory color
   argument.

.. describe:: \cellcolor[model]{color}

   Allows to color a single cell. It can be used anywhere in the cell to color.


The order of precedence of the color commands is as follows: ``\cellcolor > \rowcolor > \columncolor``.
See the example below for all three commands in action.

.. code-block:: latex

  \begin{array}{|l|c|}
    \rowcolor[gray]{.5}\columncolor{red} one & two\\
    \rowcolor{lightblue} three & four\\\hline
    five & six \\
    \rowcolor{magenta}seven & \cellcolor{green}eight
  \end{array}


This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `colortbl` extension, add ``'[tex]/colortbl'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'colortbl'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/colortbl']},
     tex: {packages: {'[+]': ['colortbl']}}
   };

You can configure the `autoload` extension to load `colortbl` via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         colortbl: ['cellcolor', 'columncolor', 'rowcolor']
       }
     }
   };



Alternatively, use ``\require{colortbl}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-colortbl-commands:


colortbl Commands
-----------------

The `colortbl` extension implements the following macros:
``\cellcolor``, ``\columncolor``, ``\rowcolor``


|-----|
.. _tex-colorv2:

############
//E. colorv2
############

The `colorv2` extension defines the ``\color`` macro to be the
non-standard macro that is the default in MathJax version 2, namely,
it takes two arguments, one the name of the color (or an HTML color of
the form ``#RGB`` or ``#RRGGBB``), and the second the math to be
colored.  This is in contrast to the standard LaTeX ``\color``
command, which is a switch that changes the color of everything that
follows it.

This extension is **not** loaded automatically when the `autoload`
extension is used.  To load the `color` extension explicitly, add
``'[tex]/color'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'color'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/colorv2']},
     tex: {packages: {'[+]': ['color']}}
   };

or, use ``\require{colorv2}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

Alternatively, you can configure the `autoload` package to load
`colorv2` when ``\color`` is used rather than the (LaTeX-compatible)
`color` extension:

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         color: [],            // don't autoload the color extension
         colorv2: ['color']    // autoload colorv2 on the first use of \color
       }
     }
   };

-----


.. _tex-colorv2-commands:


colorv2 Commands
----------------

The `colorv2` extension implements the following macros:
``\color``


|-----|
.. _tex-configmacros:

#################
//E. configmacros
#################

The `configmacros` extension provides the ``macros`` and
``environments`` configuration options for the ``tex`` block of your
MathJax configuration.  This allows you to predefine custom macros end
environments for your page using javascript.  For example,

.. code-block:: javascript

    window.MathJax = {
      tex: {
        macros: {
	  RR: "{\\bf R}",
	  bold: ["{\\bf #1}", 1]
	},
        environments: {
          braced: ["\\left\\{", "\\right\\}"]
        }
      }
    };

defines a macro ``\RR`` that produces a bold "R", while
``\bold{math}`` typesets the ``math`` using the bold font (see
:ref:`tex-macros` for more information).  It also creates the
``braced`` environment that puts ``\left\{`` and ``\right\}`` around
its contents.

This extension is already loaded in all the components that
include the TeX input jax, other than ``input/tex-base``.  To load the
`configmacros` extension explicitly (when using ``input/tex-base`` for
example), add ``'[tex]/configmacros'`` to the ``load`` array of the
``loader`` block of your MathJax configuration, and add
``'configmacros'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/configmacros']},
     tex: {packages: {'[+]': ['configmacros']}}
   };

Since the `configmacros` extension is included in the combined
components that contain the TeX input jax, it may already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['configmacros']}}
   };

-----


.. _tex-configmacros-options:

configmacros Options
--------------------

The `configmacros` extension adds a ``macros`` option to the ``tex``
block that lets you pre-define macros, and the ``environments`` option
that lets you pre-define your own environments.

.. _tex-macros-option:
.. describe:: macros: {}

    This lists macros to define before the TeX input processor begins.
    These are `name: value` pairs where the `name` gives the name of
    the TeX macro to be defined, and `value` gives the replacement
    text for the macro.  The `value` can be a simple replacement
    string, or an array of the form `[value, n]`, where `value` is the
    replacement text and `n` is the number of parameters for the
    macro.  The array can have a third entry:  either a string that is
    the default value to give for an optional (bracketed) parameter
    when the macro is used, or an array consisting of template strings
    that are used to separate the various parameters.  The first
    template must precede the first parameter, the second must precede
    the second, and so on until the final which must end the last
    parameter to the macro.  See the examples below.

    Note that since the `value` is a javascript string,
    backslashes in the replacement text must be doubled to prevent
    them from acting as javascript escape characters.

    For example,

    .. code-block:: javascript
 
        macros: {
          RR: '{\\bf R}',                    // a simple string replacement
          bold: ['\\boldsymbol{#1}',1] ,     // this macro has one parameter
          ddx: ['\\frac{d#2}{d#1}', 2, 'x'], // this macro has an optional parameter that defaults to 'x'
          abc: ['(#1)', 1, [null, '\\cba']]  // equivalent to \def\abc#1\cba{(#1)}
        }

    would ask the TeX processor to define four new macros:  ``\RR``,
    which produces a bold-face "R", and ``\bold{...}``, which takes one
    parameter and sets it in the bold-face font, ``\ddx``, which has
    an optional (bracketed) parameter that defaults to ``x``, so that
    ``\ddx{y}`` produces ``\frac{dy}{dx}`` while ``\ddx[t]{y}``
    produces ``\frac{dy}{dt}``, and ``\abc`` that is equivalent to
    ``\def\abc#1\cba{(#1)}``.

.. _tex-environments-option:
.. describe:: environments: {}

   This lists environments to define before the TeX input processor
   begins.  These are `name: value` pairs where the `name` gives the
   name of the environment to be defined, and `value` gives an array
   that defines the material to go before and after the content of the
   environment.  The array is of the form `[before, after, n, opt]`
   where `before` is the material that replaces the ``\begin{name}``,
   `after` is the material that replaces ``\end{name}``, `n` is the
   number of parameters that follow the ``\begin{name}``, and `opt` is
   the default value used for an optional parameter that would follow
   ``\begin{name}`` in brackets.  The parameters can be inserted into
   the `before` string using ``#1``, ``#2``, etc., where ``#1`` is the
   optional parameter, if there is one.

   Note that since the `before` and `after` values are javascript
   strings, backslashes in the replacement text must be doubled to
   prevent them from acting as javascript escape characters.

   For example,

   .. code-block:: javascript
 
      environments: {
        braced: ['\\left\\{', '\\right\\}'],
        ABC: ['(#1)(#2)(', ')', 2, 'X']
      }

   would define two environments, ``braced`` and ``ABC``, where

   .. code-block:: latex

      \begin{braced} \frac{x}{y} \end{braced}

   would produce the fraction `x`/`y` in braces that stretch to the
   height of the fraction, while
   
   .. code-block:: latex

      \begin{ABC}{Z} xyz \end{ABC}

   would produce ``(X)(Z)(xyz)``, and

   .. code-block:: latex
                
      \begin{ABC}[Y]{Z} xyz \end{ABC}

   would produce ``(Y)(Z)(xyz)``.
 

|-----|
.. _tex-empheq:

###########
//E. empheq
###########


The `empheq` extension partially implements the ``empheq`` style package from
LaTeX.  The package provides macros and environments for emphasising equations.
See the :ref:`list of control sequences <tex-empheq-commands>` for details about
what commands are implemented in this extension.  Note, that the current
implementation of the ``empheq`` environment supports only the ``left`` and
``right`` options. Also see the `CTAN page <https://www.ctan.org/pkg/empheq>`__
for more information and documentation of `empheq`.

This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `empheq` extension, add ``'[tex]/empheq'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'empheq'`` to the ``packages`` array of the ``tex`` block.


.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/empheq']},
     tex: {packages: {'[+]': ['empheq']}}
   };


You can configure the `autoload` extension to load `empheq` when the
``empheq`` environment is first used via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         empheq: [[], ['empheq']]
       }
     }
   };



Alternatively, use ``\require{empheq}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-empheq-commands:


empheq Commands
---------------

The `empheq` extension implements the following macros:
``\empheqbigl``, ``\empheqbiglangle``, ``\empheqbiglbrace``, ``\empheqbiglbrack``, ``\empheqbiglceil``, ``\empheqbiglfloor``, ``\empheqbiglparen``, ``\empheqbiglvert``, ``\empheqbiglVert``, ``\empheqbigr``, ``\empheqbigrangle``, ``\empheqbigrbrace``, ``\empheqbigrbrack``, ``\empheqbigrceil``, ``\empheqbigrfloor``, ``\empheqbigrparen``, ``\empheqbigrvert``, ``\empheqbigrVert``, ``\empheql``, ``\empheqlangle``, ``\empheqlbrace``, ``\empheqlbrack``, ``\empheqlceil``, ``\empheqlfloor``, ``\empheqlparen``, ``\empheqlvert``, ``\empheqlVert``, ``\empheqr``, ``\empheqrangle``, ``\empheqrbrace``, ``\empheqrbrack``, ``\empheqrceil``, ``\empheqrfloor``, ``\empheqrparen``, ``\empheqrvert``, ``\empheqrVert``

And the following environments:
``empheq``


|-----|
.. _tex-enclose:

############
//E. enclose
############

The `enclose` extension gives you access to the MathML ``<menclose>``
element for adding boxes, ovals, strikethroughs, and other marks over
your mathematics.  It defines the following non-standard macro:

.. describe:: \\enclose{notation}[attributes]{math}

    Where ``notation`` is a comma-separated list of MathML
    ``<menclose>`` notations (e.g., ``circle``, ``left``,
    ``updiagonalstrike``, ``longdiv``, etc.), ``attributes`` are
    MathML attribute values allowed on the ``<menclose>`` element
    (e.g., ``mathcolor="red"``, ``mathbackground="yellow"``), and
    ``math`` is the mathematics to be enclosed. See the `MathML 3
    specification <http://www.w3.org/TR/MathML/chapter3.html#presm.menclose>`_
    for more details on ``<menclose>``.

For example

.. code-block:: latex

   \enclose{circle}[mathcolor="red"]{x}
   \enclose{circle}[mathcolor="red"]{\color{black}{x}}
   \enclose{circle,box}{x}
   \enclose{circle}{\enclose{box}{x}}

This extension is loaded automatically when the `autoload` extension
is used.  To load the `enclose` extension explicitly, add
``'[tex]/enclose'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'enclose'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/enclose']},
     tex: {packages: {'[+]': ['enclose']}}
   };

Alternatively, use ``\require{enclose}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-enclose-commands:


enclose Commands
----------------

The `enclose` extension implements the following macros:
``\enclose``


|-----|
.. _tex-extpfeil:

#############
//E. extpfeil
#############

The `extpfeil` extension adds more macros for producing extensible
arrows, including ``\xtwoheadrightarrow``, ``\xtwoheadleftarrow``,
``\xmapsto``, ``\xlongequal``, ``\xtofrom``, and a non-standard
``\Newextarrow`` for creating your own extensible arrows.  The latter
has the form

.. describe:: \\Newextarrow{\\cs}{lspace,rspace}{unicode-char}

    where ``\cs`` is the new control sequence name to be defined,
    ``lspace`` and ``rspace`` are integers representing the amount of
    space (in suitably small units) to use at the left and right of
    text that is placed above or below the arrow, and ``unicode-char``
    is a number representing a unicode character position in either
    decimal or hexadecimal notation.

For example

.. code-block:: latex

   \Newextarrow{\xrightharpoonup}{5,10}{0x21C0}

defines an extensible right harpoon with barb up.  Note that MathJax
knows how to stretch only a limited number of characters, so you may
not actually get a stretchy character this way.  The characters that
can be stretched may also depend on the font you have selected.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `extpfeil` extension explicitly, add
``'[tex]/extpfeil'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'extpfeil'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/extpfeil']},
     tex: {packages: {'[+]': ['extpfeil']}}
   };

Alternatively, use ``\require{extpfeil}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-extpfeil-commands:


extpfeil Commands
-----------------

The `extpfeil` extension implements the following macros:
``\Newextarrow``, ``\xlongequal``, ``\xmapsto``, ``\xtofrom``, ``\xtwoheadleftarrow``, ``\xtwoheadrightarrow``


|-----|
.. _tex-gensymb:

############
//E. gensymb
############

The `gensymb` extension implements the ``gensymb`` style package from LaTeX. It
provides a number of macros for unit notation.  See the `CTAN page
<https://www.ctan.org/pkg/gensymb>`__ for more information and documentation of
`gensymb`.

Note that not all the characters for this package are yet included in the
MathJax fonts so output might vary on clients.

This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `gensymb` extension, add ``'[tex]/gensymb'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'gensymb'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/gensymb']},
     tex: {packages: {'[+]': ['gensymb']}}
   };


You can configure the `autoload` extension to load `gensymb` via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         gensymb: ['celsius', 'degree', 'micro', 'ohm', 'perthousand']
       }
     }
   };



Alternatively, use ``\require{gensymb}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-gensymb-commands:


gensymb Commands
----------------

The `gensymb` extension implements the following macros:
``\celsius``, ``\degree``, ``\micro``, ``\ohm``, ``\perthousand``


|-----|
.. _tex-html:

#########
//E. html
#########

The `html` extension gives you access to some HTML features like
styles, classes, element ID's, and clickable links.  It defines the
following non-standard macros:

.. describe:: \\href{url}{math}

    Makes ``math`` be a link to the page given by ``url``.  Note that
    the url is not processed by TeX, but is given as the literal url.
    In actual TeX or LaTeX, special characters must be escaped; so,
    for example, a url containing a ``#`` would need to use ``\#`` in
    the url in actual TeX.  That is not necessary in MathJax, and if
    you do use ``\#``, it will produce ``/#`` in the url (since the
    ``\`` will be inserted into the url verbatim, and browsers will
    convert that to ``/`` (thinking it is a DOS directory separator).

.. describe:: \\class{name}{math}

    Attaches the CSS class ``name`` to the output associated with
    ``math`` when it is included in the HTML page.  This allows your
    CSS to style the element.

.. describe:: \\cssId{id}{math}

    Attaches an id attribute with value ``id`` to the output
    associated with ``math`` when it is included in the HTML page.
    This allows your CSS to style the element, or your javascript to
    locate it on the page.

.. describe:: \\style{css}{math}

    Adds the give ``css`` declarations to the element associated with
    ``math``.

For example:

.. code-block:: latex

    x \href{why-equal.html}{=} y^2 + 1

    (x+1)^2 = \class{hidden}{(x+1)(x+1)}

    (x+1)^2 = \cssId{step1}{\style{visibility:hidden}{(x+1)(x+1)}}

.. Note::

   For the ``\href`` macro, the `url` parameter is not processed
   further, as it is in actual TeX, so you do not need to quote special
   characters.  For example, ``\href{#section1}{x}`` is fine, but
   ``\href{\#section}{x}`` will not work as expected.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `html` extension explicitly, add
``'[tex]/html'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'html'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/html']},
     tex: {packages: {'[+]': ['html']}}
   };

Alternatively, use ``\require{html}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-html-commands:


html Commands
-------------

The `html` extension implements the following macros:
``\class``, ``\cssId``, ``\href``, ``\style``


|-----|
.. _tex-mathtools:

##############
//E. mathtools
##############


The `mathtools` extension implements the ``mathtools`` style package from
LaTeX. The package provides a number of tools for advanced mathematical
typesetting. See the `CTAN page <https://www.ctan.org/pkg/mathtools>`__ for
more information and documentation of `mathtools`.

This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `mathtools` extension, add ``'[tex]/mathtools'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'mathtools'`` to the ``packages`` array of the ``tex`` block.


.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/mathtools']},
     tex: {packages: {'[+]': ['mathtools']}}
   };



Alternatively, use ``\require{mathtools}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-mathtools-options:


mathtools Options
-----------------

Adding the `mathtools` extension to the ``packages`` array defines an
``mathtools`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

  MathJax = {
    tex: {
      mathtools: {
        multlinegap: '1em',
        multlined-pos: 'c',
        firstline-afterskip: '',
        lastline-preskip: '',
        smallmatrix-align: 'c',
        shortvdotsadjustabove: '.2em',
        shortvdotsadjustbelow: '.2em',
        centercolon: false,
        centercolon-offset: '.04em',
        thincolon-dx: '-.04em',
        thincolon-dw: '-.08em',
        use-unicode: false,
        prescript-sub-format: '',
        prescript-sup-format: '',
        prescript-arg-format: '',
        allow-mathtoolsset: true,
        pairedDelimiters: {},
        tagforms: {}
      }
    }
  };


.. _tex-mathtools-multlinegap:
.. describe:: multlinegap: '1em'

Horizontal space for multlined environments.

.. _tex-mathtools-multlined-pos:
.. describe:: multlined-pos: 'c'

Default alignment for multlined environments.

.. _tex-mathtools-firstline-afterskip:
.. describe:: firstline-afterskip: ''

Space for first line of multlined (overrides multlinegap).

.. _tex-mathtools-lastline-preskip:
.. describe:: lastline-preskip: ''

Space for last line of multlined (overrides multlinegap).

.. _tex-mathtools-smallmatrix-align:
.. describe:: smallmatrix-align: 'c'

Default alignment for smallmatrix environments.

.. _tex-mathtools-shortvdotsadjustabove:
.. describe:: shortvdotsadjustabove: '.2em'

Space to remove above ``\shortvdots``.

.. _tex-mathtools-shortvdotsadjustbelow:
.. describe:: shortvdotsadjustbelow: '.2em'

Space to remove below ``\shortvdots``.

.. _tex-mathtools-centercolon:
.. describe:: centercolon: false

True to have colon automatically centered.

.. _tex-mathtools-centercolon-offset:
.. describe:: centercolon-offset: '.04em'

Vertical adjustment for centered colons.

.. _tex-mathtools-thincolon-dx:
.. describe:: thincolon-dx: '-.04em'

Horizontal adjustment for thin colons (e.g., ``\coloneqq``).

.. _tex-mathtools-thincolon-dw:
.. describe:: thincolon-dw: '-.08em'

Width adjustment for thin colons.

.. _tex-mathtools-use-unicode:
.. describe:: use-unicode: false

True to use unicode characters rather than multi-character version for ``\coloneqq``, etc., when possible.

.. _tex-mathtools-prescript-sub-format:
.. describe:: prescript-sub-format: ''

Format for ``\prescript`` subscript.

.. _tex-mathtools-prescript-sup-format:
.. describe:: prescript-sup-format: ''

Format for ``\prescript`` superscript.

.. _tex-mathtools-prescript-arg-format:
.. describe:: prescript-arg-format: ''

Format for ``\prescript`` base.

.. _tex-mathtools-allow-mathtoolsset:
.. describe:: allow-mathtoolsset: true

True to allow ``\mathtoolsset`` to change settings.

.. _tex-mathtools-pairedDelimiters:
.. describe:: pairedDelimiters: {}

Predefined paired delimiters of the form ``name: [left, right, body, argcount, pre, post]``.

.. _tex-mathtools-tagforms:
.. describe:: tagforms: {}

Tag form definitions of the form ``name: [left, right, format]``.

-----


.. _tex-mathtools-commands:


mathtools Commands
------------------

The `mathtools` extension implements the following macros:
``\:``, ``\Aboxed``, ``\adjustlimits``, ``\ArrowBetweenLines``, ``\bigtimes``, ``\centercolon``, ``\clap``, ``\colonapprox``, ``\Colonapprox``, ``\coloneq``, ``\Coloneq``, ``\coloneqq``, ``\Coloneqq``, ``\colonsim``, ``\Colonsim``, ``\cramped``, ``\crampedclap``, ``\crampedllap``, ``\crampedrlap``, ``\crampedsubstack``, ``\dblcolon``, ``\DeclarePairedDelimiters``, ``\DeclarePairedDelimitersX``, ``\DeclarePairedDelimitersXPP``, ``\eqcolon``, ``\Eqcolon``, ``\eqqcolon``, ``\Eqqcolon``, ``\lparen``, ``\mathclap``, ``\mathllap``, ``\mathmakebox``, ``\mathmbox``, ``\mathrlap``, ``\mathtoolsset``, ``\MoveEqLeft``, ``\MTFlushSpaceAbove``, ``\MTFlushSpaceBelow``, ``\MTThinColon``, ``\ndownarrow``, ``\newtagform``, ``\nuparrow``, ``\ordinarycolon``, ``\overbracket``, ``\prescript``, ``\refeq``, ``\renewtagform``, ``\rparen``, ``\shortvdotswithin``, ``\shoveleft``, ``\shoveright``, ``\splitdfrac``, ``\splitfrac``, ``\textclap``, ``\textllap``, ``\textrlap``, ``\underbracket``, ``\usetagform``, ``\vdotswithin``, ``\xhookleftarrow``, ``\xhookrightarrow``, ``\xLeftarrow``, ``\xleftharpoondown``, ``\xleftharpoonup``, ``\xleftrightarrow``, ``\xLeftrightarrow``, ``\xleftrightharpoons``, ``\xmapsto``, ``\xmathstrut``, ``\xRightarrow``, ``\xrightharpoondown``, ``\xrightharpoonup``, ``\xrightleftharpoons``

And the following environments:
``bmatrix*``, ``Bmatrix*``, ``bsmallmatrix*``, ``Bsmallmatrix*``, ``bsmallmatrix``, ``Bsmallmatrix``, ``cases*``, ``crampedsubarray``, ``dcases*``, ``dcases``, ``drcases*``, ``drcases``, ``lgathered``, ``matrix*``, ``multlined``, ``pmatrix*``, ``psmallmatrix*``, ``psmallmatrix``, ``rcases*``, ``rcases``, ``rgathered``, ``smallmatrix*``, ``spreadlines``, ``vmatrix*``, ``Vmatrix*``, ``vsmallmatrix*``, ``Vsmallmatrix*``, ``vsmallmatrix``, ``Vsmallmatrix``


|-----|
.. _tex-mediawiki-texvc:

####################
//E. mediawiki-texvc
####################

The `mediawiki-texvc` extension predefines macros that match
the behavior of the `MediaWiki Math Extension 
<https://www.mediawiki.org/wiki/Extension:Math>`__.

This extension has not yet been translated to version 3, so currently
it is not available.  It should be included in a future release of
MathJax.

|-----|
.. _tex-mhchem:

###########
//E. mhchem
###########

The `mhchem` extensions implements the ``\ce`` and ``\pu``
chemical equation macros of the LaTeX `mhchem` package.  See the
`mhchem home page <https://mhchem.github.io/MathJax-mhchem/>`__ for more
information and documentation for `mhchem`.

For example

.. code-block:: latex

    \ce{C6H5-CHO}
    \ce{$A$ ->[\ce{+H2O}] $B$}
    \ce{SO4^2- + Ba^2+ -> BaSO4 v}

This extension is loaded automatically when the `autoload` extension
is used.  To load the `mhchem` extension explicitly, add
``'[tex]/mhchem'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'mhchem'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/mhchem']},
     tex: {packages: {'[+]': ['mhchem']}}
   };

Alternatively, use ``\require{mhchem}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

.. note::

   The implementation of the `mhchem` extension was completely
   rewritten for MathJax by the author of the original LaTeX package.
   The older version was still available MathJax version 2.7, but it
   is no longer part of MathJax version 3.  Only the newer version of
   `mhchem` is available.

-----


.. _tex-mhchem-commands:


mhchem Commands
---------------

The `mhchem` extension implements the following macros:
``\ce``, ``\longleftrightarrows``, ``\longLeftrightharpoons``, ``\longrightleftharpoons``, ``\longRightleftharpoons``, ``\pu``, ``\tripledash``, ``\xleftarrow``, ``\xleftrightarrow``, ``\xLeftrightharpoons``, ``\xrightarrow``, ``\xrightleftharpoons``, ``\xRightleftharpoons``


|-----|
.. _tex-newcommand:

###############
//E. newcommand
###############

The `newcommand` extension provides the ``\def``, ``\newcommand``,
``\renewcommand``, ``\let``, ``\newenvironment``, and
``\renewenvironment`` macros for creating new macros and environments
in TeX.  For example,

.. code-block:: latex

    \(
       \def\RR{{\bf R}}
       \def\bold#1{{\bf #1}}
    \)

defines a macro ``\RR`` that produces a bold "R", while
``\bold{math}`` typesets its argument using a bold font.  See
:ref:`tex-macros` for more information.

This extension is already loaded in all the components that
include the TeX input jax, other than ``input/tex-base``.  To load the
`newcommand` extension explicitly (when using ``input/tex-base`` for
example), add ``'[tex]/newcommand'`` to the ``load`` array of the
``loader`` block of your MathJax configuration, and add
``'newcommand'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/newcommand']},
     tex: {packages: {'[+]': ['newcommand']}}
   };

Alternatively, use ``\require{newcommand}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
package is loaded.

Since the `nnewcommand` extension is included in the combined
components that contain the TeX input jax, it may already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['newcommand']}}
   };


-----


.. _tex-newcommand-commands:


newcommand Commands
-------------------

The `newcommand` extension implements the following macros:
``\def``, ``\let``, ``\newcommand``, ``\newenvironment``, ``\renewcommand``, ``\renewenvironment``


|-----|
.. _tex-noerrors:

#############
//E. noerrors
#############

The `noerrors` extension prevents TeX error messages from being
displayed and shows the original TeX code instead.

.. note::
   
   In version 2 of MathJax, you could configure the CSS that
   applied to the display of the original TeX.  In version 3, the
   original TeX is shown via an `merror` MathML element instead.

.. note::
   
   In version 2, this extension was included in all the combined
   configuration files that contain the TeX input jax, but in MathJax
   version 3, you must load it explicitly if you want to use it.

To load the `noerrors` extension, add ``'[tex]/noerrors'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'noerrors'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/noerrors']},
     tex: {packages: {'[+]': ['noerrors']}}
   };



|-----|
.. _tex-noundefined:

################
//E. noundefined
################

The `noundefined` extension causes undefined control sequences to be
shown as their macro names rather than generating error messages. So
``$X_{\xyz}$`` would display as an "X" with a subscript consisting of the
text ``\xyz`` in red.

.. note::

   In version 2, the styling for the undefined macro could be
   configured.  In version 3, this is not yet implemented.

This extension is already loaded in all the components that
include the TeX input jax, other than ``input/tex-base``.  To load the
`ams` extension explicitly (when using ``input/tex-base`` for
example), add ``'[tex]/noundefined'`` to the ``load`` array of the ``loader``
block of your MathJax configuration, and add ``'noundefined'`` to the
``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/noundefined']},
     tex: {packages: {'[+]': ['noundefined']}}
   };

Since the `noundefined` extension is included in the combined
components that contain the TeX input jax, it may already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['noundefined']}}
   };


-----


.. _tex-noundefined-options:

noundefined Options
-------------------

Adding ``'[tex]/noundefined'`` to the ``packages`` array defines a
``noundefined`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

   MathJax = {
     tex: {
       noundefined: {
         color: 'red',
         background: '',
         size: ''
       }
     }
   };

.. _tex-noundefined-color:
.. describe:: color: 'red'

   This gives the color to use for the text of the undefined macro
   name, or an empty string to make the color the same as the
   surrounding mathematics.

.. _tex-noundefined-background:
.. describe:: background: ''

   This gives the color to use for the background for the undefined
   macro name, or an empty string to have no background color.

.. _tex-noundefined-size:
.. describe:: size: ''

   This gives the size to use for the undefined macro name (e.g.,
   ``90%`` or ``12px``), or an empty string to keep the size the same
   as the surrounding mathematics.


|-----|
.. _tex-physics:

############
//E. physics
############

The `physics` extension implements much of the LaTeX `physics package
<https://ctan.org/pkg/physics?lang=en>`_, which defines simple, yet
flexible macros for typesetting equations via:

* Automatic bracing
* Vector notation
* Derivatives
* Dirac bra-ket notation
* Matrix macros
* Additional trig functions and other convenient operators
* Flat fractions and other useful miscellaneous math macros

See the `documentation
<http://mirrors.ctan.org/macros/latex/contrib/physics/physics.pdf>`_
for the LaTeX package for more information.

This package is not autoloaded, due to the fact that it redefines many
standard macros, so you must request it explicitly if you want to use
it.  To load the `physics` extension, add ``'[tex]/physics'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'physics'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/physics']},
     tex: {packages: {'[+]': ['physics']}}
   };

Alternatively, use ``\require{physics}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
package is loaded.

-----


.. _tex-physics-options:


physics Options
---------------

Adding the `physics` extension to the ``packages`` array defines an
``physics`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

  MathJax = {
    tex: {
      physics: {
        italicdiff: false,
        arrowdel: false
      }
    }
  };


.. _tex-physics-italicdiff:
.. describe:: italicdiff: false

This corresponds to the ``italicdiff`` option of the `physics` LaTeX package to
use italic form for the `d` in the ``\differential`` and ``\derivative```
commands.

.. _tex-physics-arrowdel:
.. describe:: arrowdel: false

This corresponds to the ``arrowdel`` option of the `physics` LaTeX package to
use vector notation over the nabla symbol.

Note, that the `physics` extension does not implement the `notrig` option.

-----


.. _tex-physics-commands:


physics Commands
----------------

The `physics` extension implements the following macros:
``\abs``, ``\absolutevalue``, ``\acomm``, ``\acos``, ``\acosecant``, ``\acosine``, ``\acot``, ``\acotangent``, ``\acsc``, ``\admat``, ``\anticommutator``, ``\antidiagonalmatrix``, ``\arccos``, ``\arccosecant``, ``\arccosine``, ``\arccot``, ``\arccotangent``, ``\arccsc``, ``\arcsec``, ``\arcsecant``, ``\arcsin``, ``\arcsine``, ``\arctan``, ``\arctangent``, ``\asec``, ``\asecant``, ``\asin``, ``\asine``, ``\atan``, ``\atangent``, ``\bmqty``, ``\bqty``, ``\Bqty``, ``\bra``, ``\braket``, ``\comm``, ``\commutator``, ``\cos``, ``\cosecant``, ``\cosh``, ``\cosine``, ``\cot``, ``\cotangent``, ``\coth``, ``\cp``, ``\cross``, ``\crossproduct``, ``\csc``, ``\csch``, ``\curl``, ``\dd``, ``\derivative``, ``\det``, ``\determinant``, ``\diagonalmatrix``, ``\diffd``, ``\differential``, ``\div``, ``\divergence``, ``\dmat``, ``\dotproduct``, ``\dv``, ``\dyad``, ``\erf``, ``\ev``, ``\eval``, ``\evaluated``, ``\exp``, ``\expectationvalue``, ``\exponential``, ``\expval``, ``\fderivative``, ``\fdv``, ``\flatfrac``, ``\functionalderivative``, ``\grad``, ``\gradient``, ``\gradientnabla``, ``\hypcosecant``, ``\hypcosine``, ``\hypcotangent``, ``\hypsecant``, ``\hypsine``, ``\hyptangent``, ``\identitymatrix``, ``\Im``, ``\imaginary``, ``\imat``, ``\innerproduct``, ``\ip``, ``\ket``, ``\ketbra``, ``\laplacian``, ``\ln``, ``\log``, ``\logarithm``, ``\matrixdeterminant``, ``\matrixel``, ``\matrixelement``, ``\matrixquantity``, ``\mdet``, ``\mel``, ``\mqty``, ``\naturallogarithm``, ``\norm``, ``\op``, ``\order``, ``\outerproduct``, ``\partialderivative``, ``\paulimatrix``, ``\pb``, ``\pderivative``, ``\pdv``, ``\pmat``, ``\pmqty``, ``\Pmqty``, ``\poissonbracket``, ``\pqty``, ``\Pr``, ``\principalvalue``, ``\Probability``, ``\pv``, ``\PV``, ``\qall``, ``\qand``, ``\qas``, ``\qassume``, ``\qc``, ``\qcc``, ``\qcomma``, ``\qelse``, ``\qeven``, ``\qfor``, ``\qgiven``, ``\qif``, ``\qin``, ``\qinteger``, ``\qlet``, ``\qodd``, ``\qor``, ``\qotherwise``, ``\qq``, ``\qqtext``, ``\qsince``, ``\qthen``, ``\qty``, ``\quantity``, ``\qunless``, ``\qusing``, ``\rank``, ``\Re``, ``\real``, ``\Res``, ``\Residue``, ``\sbmqty``, ``\sec``, ``\secant``, ``\sech``, ``\sin``, ``\sine``, ``\sinh``, ``\smallmatrixquantity``, ``\smdet``, ``\smqty``, ``\spmqty``, ``\sPmqty``, ``\svmqty``, ``\tan``, ``\tangent``, ``\tanh``, ``\tr``, ``\Tr``, ``\trace``, ``\Trace``, ``\va``, ``\var``, ``\variation``, ``\vb``, ``\vdot``, ``\vectorarrow``, ``\vectorbold``, ``\vectorunit``, ``\vmqty``, ``\vnabla``, ``\vqty``, ``\vu``, ``\xmat``, ``\xmatrix``, ``\zeromatrix``, ``\zmat``

And the following environments:
``smallmatrix``


|-----|
.. _tex-require:

############
//E. require
############

The `require` extension defines the non-standard ``\require`` macro
that allows you to load extensions from within a math expression in a
web page.  For example:

.. code-block:: latex

   \(\require{enclose} \enclose{circle}{x}\)

would load the :ref:`tex-enclose` extension, making the following
``\enclose`` command available for use.

An extension only needs to be loaded once, and then it is available
for all subsequent typeset expressions.

This extension is already loaded in all the components that
include the TeX input jax, other than ``input/tex-base``.  To load the
`require` extension explicitly (when using ``input/tex-base`` for
example), add ``'[tex]/require'`` to the ``load`` array of the
``loader`` block of your MathJax configuration, and add ``'require'``
to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/require']},
     tex: {packages: {'[+]': ['require']}}
   };

Since the `require` extension is included in the combined
components that contain the TeX input jax, it may already be in
the package list.  In that case, if you want to disable it, you can
remove it:

.. code-block:: javascript

   window.MathJax = {
     tex: {packages: {'[-]': ['require']}}
   };


-----

.. _tex-require-options:

require Options
---------------

Adding the `require` extension to the ``packages`` array defines a
``require`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

   MathJax = {
     tex: {
       require: {
         allow: {
           base: false,
           'all-packages': false
         },
         defaultAllow: true
      }
    };

.. _tex-require-allow:
.. describe:: allow: {...}

   This sub-object indicates which extensions can be loaded by
   ``\require``.  The keys are the package names, and the value is
   ``true`` to allow the extension to be loaded, and ``false`` to
   disallow it.  If an extension is not in the list, the default value
   is given by ``defaultAllow``, described below.

.. _tex-require-defaultAllow:
.. describe:: defaultAllow: true

   This is the value used for any extensions that are requested, but
   are not in the ``allow`` object described above.  If set to
   ``true``, any extension not listed in ``allow`` will be allowed;
   if ``false``, only the ones listed in ``allow`` (with value
   ``true``) will be allowed.

-----


.. _tex-require-commands:


require Commands
----------------

The `require` extension implements the following macros: ``\require``

|-----|
.. _tex-setoptions:

###############
//E. setoptions
###############

The `setoptions` extension implements a non-standard ``\setOptions``
macro that allows you to change the options for a TeX package, or for
the TeX input jax itself, from within a TeX expression.

.. describe:: \setOptions[package]{options}

    Sets the options for `package` to the ones given in `options`.
    Here, `options` is a collection of space-separated option names
    (to be set to ``true``) or `option=value` declarations, where the
    given option will get the specified value.  If the value contains
    spaces, it can be enclosed in braces, which will not become part
    of the value.

For example:

.. code-block:: latex

   \[
     \setOptions{tagSide=left}
     E = mc^2 \tag{1}
   \]
   
   \[
     \setOptions{tagSide=right}
     e^{\pi 1} + 1 = 0 \tag{2}
   \]

would typeset the first expression with its tag on the left, and the
second (and subsequent) expressions with tags on the right.

To change a package setting, use the package name as an optional
bracket argument:

.. code-block:: latex

   \[
     \setOptions[physics]{arrowdel=true}
     \grad
     \setOptions[physics]{arrowdel=false}
   \]

Here the gradient symbol with have an arrow, but subsequent ones will not.

Note that any changes made by ``\setOptions`` are global, so will
affect all the following expressions.  If you want a local change,
you will need to set the value back to its original one explicitly.


Because changing the option settings can cause adverse consequences,
and so could be misused in a setting where users are provided the TeX
content for your site, the `setoptions` package is not autoloaded,
it does not appear in the list of all packages, and it can not be
loaded with ``\require{}``.  You must include it in the package list
explicitly if you want to allow its use.

To load the `setoptions` extension, add ``'[tex]/setoptions'`` to the
``load`` array of the ``loader`` block of your MathJax configuration, and add
``'setoptions'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/centernot']},
     tex: {packages: {'[+]': ['centernot']}}
   };


-----

.. _tex-setoptions-require:

The \require command with setoptions
------------------------------------

If the `require` package is enabled, `setoptions` modifies
``\require`` to allow passing of options for the required package (and
makes the original ``\require`` macro available as ``\Require``).  So
the new syntax is:

.. describe:: \require[options]{package}

where `options` is a list of options in the same format as used by
``\setOptions``, and ``package`` is the name of the extension to load.
This command is equivalent to:

.. code-block:: latex

   \Require{package}\setOptions[package]{options}

meaning that the package is loaded and then its options are set.

For example:

.. code-block:: latex

   \require[harrowsize=3em]{amscd}

would load the `amscd` extension and then set its ``harrowsize``
option to ``3em``.

Note that the same rules apply to which options can be set for which
package as those that govern ``\setOptions`` itself.


-----

.. _tex-setoptions-options:


setoptions Options
------------------

Adding the `setoptions` extension to the ``packages`` array defines a
``setoptions`` sub-block of the ``tex`` configuration block with the
following values:

.. code-block:: javascript

  MathJax = {
    tex: {
      setoptions: {
        filterPackage: SetOptionsUtil.filterPackage,  // filter for whether a package can be configured
        filterOption: SetOptionsUtil.filterOption,    // filter for whether an option can be set
        filterValue: SetOptionsUtil.filterValue,      // filter for the value to assign to an option
        allowPackageDefault: true,       // default for allowing packages when not explicitly set in allowOptions
        allowOptionsDefault: true,       // default for allowing option that isn't explicitly set in allowOptions
        allowOptions: {                  // list of packages to allow/disallow, and their options to allow/disallow
          //
          //  top-level tex items can be set, but not these ones
          //    (that leaves digits and the tagging options that can be set)
          //
          tex: {
            FindTeX: false,
            formatError: false,
            package: false,
            baseURL: false,
            tags: false,          // would require a new TeX input jax instance
            maxBuffer: false,
            maxMaxros: false,
            macros: false,
            environments: false
          },
          //
          // These packages can't be configured at all
          //
          setoptions: false,
          autoload: false,
          require: false,
          configmacros: false,
          tagformat: false
        }
      }
    }
  };


.. _tex-setoptions-filterPackage:
.. describe:: filterPackage: SetOptionsUtil.filterPackage

   This is a function that is called to determine if a package can
   have its options set or not.  It is passed the TeX parser and the
   name of the extension as its arguments, and returns true if the
   package allows its options to be configured and false otherwise.
   The default is to first check that the named package exists, then
   check if the package is explicitly allowed by its entry in the
   ``allowOptions`` property being either ``true`` or a list of the
   ``allowOptions`` property. The entry can either be ``true``, allowing all options of the package to be set, or a list of the options that are allowed to be set. If the entry is
   explicitly ``false`` or the ``allowPackageDefault`` option is
   ``false``, an error is issued.  You can supply your own function to
   process the package names in another way if you wish.

.. _tex-setoptions-filterOption:
.. describe:: filterOption: SetOptionsUtil.filterOption

   This is a function that is called to determine whether an option
   can be set for a given package.  It is passed the TeX parser, the
   package name, and the option name as its arguments, and returns
   true if that option can be set for that package, and false
   otherwise.  The default is to check if the option is listed
   explicitly in the list of options for the given package in the
   ``allowOptions``. If the value is explicitly false, or if it is
   not listed and the ``allowOptionDefault`` is false, then produce an
   error. Otherwise check that the option actually exists for the
   package, and report an error if not, otherwise allow the option to
   be set.  You can supply your own function to process the option
   names in another way if you wish.

.. _tex-setoptions-filterValue:
.. describe:: filterValue: SetOptionsUtil.filterValue

   This is a function that is called to check the value provided for a
   given option is allowed.  It is passed the TeX parser, the package
   name, the option name, and the new option value as its arguments,
   and it returns the value to be used for the option.  The default is
   simply to return the value it is given, but you can use this to
   alter the value, or to produce an error if the value is not valid.

.. _tex-setoptions-allowPackageDefault:
.. describe:: allowPackageDefault: true

   This indicates how to handle packages that are not listed
   explicitly in the ``allowOptions`` list.  If ``true``, packages
   that are not listed are allowed to have their options set. If the value is
   ``false``, only the packages that are listed as ``true`` or have
   explicit option lists can have their options set.
   
.. _tex-setoptions-allowOptionsDefault:
.. describe:: allowOptionsDefault: true

   This indicates how to handle options that are not listed explicitly
   in the ``allowOptions`` list for a given package.  If ``true``,
   options that are not listed are allowed to be set, and if ``false``,
   only the options that are listed explicitly as ``true`` for the given
   package can have their options set.

.. _tex-setoptions-allowOptions:
.. describe:: allowOptions: {...}

   This is a list of the packages that indicates whether their options
   can be set or not, and which options can be set.  If a package name
   appears and is explicitly set to ``false``, that package's options
   can't be set.  If it is ``true`` and ``allowOptionsDefault`` is
   true, then any of its options can be set.  If it is an explicit
   list of options, then if the option is listed as ``true``, it can
   be set, and if ``false`` it can not.  If an option is not listed,
   then the value of ``allowOptionsDefault`` is used to determine
   whether it can be set or not.  If a package does not appear
   explicitly in the list, then the value of ``allowPackageDefault``
   is used to determine if the package's options can be set or not.

   You can include additional package names and their options in this
   list.  The defaults are set to allow reasonable security without
   having to list every single option that can be set.
              
-----


.. _tex-setoptions-commands:


setoptions Commands
-------------------

The `setoptions` extension implements the following macros:
``\setOptions``

|-----|
.. _tex-tagformat:

##############
//E. tagformat
##############

The `tagformat` extension provides the ability to customize the format
of the equation tags and automatic equation numbers.  You do this by
providing functions in the ``tagformat`` object of the ``tex`` block
of your MathJax configuration.  The functions you can provide are
listed in the :ref:`tex-tagformat-options` section.

To load the `tagformat` extension, add ``'[tex]/tagformat'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'tagformat'`` to the ``packages`` array of the ``tex``
block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/tagformat']},
     tex: {packages: {'[+]': ['tagformat']}}
   };


-----

.. _tex-tagformat-options:

tagformat Options
-----------------

Adding the `tagformat` extension to the ``packages`` array adds a
``tagformat`` sub-object to the ``tex`` configuration block with the
following values:

.. code-block:: javascript

   tagformat: {
      number: (n) => n.toString(),
      tag:    (tag) => '(' + tag + ')',
      id:     (id) => 'mjx-eqn:' + id.replace(/\s/g, '_'),
      url:    (id, base) => base + '#' + encodeURIComponent(id),
    }

.. describe:: number: function (n) {return n.toString()}

   A function that tells MathJax what tag to use for equation number
   ``n``.  This could be used to have the equations labeled by a
   sequence of symbols rather than numbers, or to use section and
   subsection numbers instead.

.. describe:: tag: function (n) {return '(' + n + ')'}

   A function that tells MathJax how to format an equation number for
   displaying as a tag for an equation.  This is what appears in the
   margin of a tagged or numbered equation.

.. describe:: id: function (n) {return 'mjx-eqn:' + n.replace(/\\s/g, '_')}

   A function that tells MathJax what ID to use as an anchor for the
   equation (so that it can be used in URL references).

.. describe:: url: function (id, base) {return base + '#' + encodeURIComponent(id)}

   A function that takes an equation ID and base URL and returns the
   URL to link to it.  The ``base`` value is taken from the
   :ref:`baseURL <tex-baseURL>` value, so that links can be make within
   a page even if it has a ``<base>`` element that sets the base URL
   for the page to a different location.

-----

.. _tex-tagformat-section-numbers:

Example: Section Numbering
--------------------------

This example shows one way to provide section numbers for the
automatic equation numbers generated when the ``tags`` option in the
``tex`` configuration block is set to ``'ams'`` or ``'all'``.

.. code-block:: javascript

    MathJax = {
      section: 1,
      tex: {
        tagformat: {
	  number: (n) => MathJax.config.section + '.' + n,
          id: (tag) => 'eqn-id:' + tag
	}
      },
      startup: {
        ready() {
          MathJax.startup.defaultReady();
          MathJax.startup.input[0].preFilters.add(({math}) => {
            if (math.inputData.recompile) {
              MathJax.config.section = math.inputData.recompile.section;
            }
          });
          MathJax.startup.input[0].postFilters.add(({math}) => {
            if (math.inputData.recompile) {
              math.inputData.recompile.section = MathJax.config.section;
            }
          });
        }
      }
    };

This arranges for automatic equation numbers to be of the form
``1.n``, and uses ids of the form ``eqn-id:1.n`` as the ``id``
attribute of the tags within the web page.  It also sets up pre- and
post-filters for the TeX input jax that arrange for the section number
to be properly handled for automatically numbered equations that
contain forward references to later expressions.  This example uses
the modern function notation (using ``=>``), but you could also use
``function (n) {return ...}``.

You can adjust the section number using JavaScript by setting the
``MathJax.config.section`` variable.  It is also possible to create
TeX macros for controlling the section number.  Here is one
possibility:

.. code-block:: javascript

    MathJax = {
      startup: {
        ready() {
          const Configuration = MathJax._.input.tex.Configuration.Configuration;
          const CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
          new CommandMap('sections', {
            nextSection: 'NextSection',
            setSection: 'SetSection',
          }, {
            NextSection(parser, name) {
              MathJax.config.section++;
              parser.tags.counter = parser.tags.allCounter = 0;
            },
            SetSection(parser, name) {
              const n = parser.GetArgument(name);
              MathJax.config.section = parseInt(n);
            }
          });
          Configuration.create(
            'sections', {handler: {macro: ['sections']}}
          );
          MathJax.startup.defaultReady();
        }
      }
    };

Of course, you will want to merge this configuration in with the rest
of your configuration options.

This makes two new macros available: ``\nextSection``, which
increments the section counter, and ``\setSection{n}``, which sets the
section number to ``n``.  Note that these must be issued within math
delimiters in order for MathJax to process them.  In order to prevent
them from producing any output in your page, you could enclose them
within a hidden element.  For example,

.. code-block:: html

   <span style="display: hidden">\(\nextSection\)</span>

or something similar.  

|-----|
.. _tex-textcomp:

#############
//E. textcomp
#############


The `textcomp` extension implements the old ``textcomp`` style package from
LaTeX.  The macros of the package are now part of LaTeX's base package. The
`textcomp` extension provides a number of text macros that can be used in math
mode as well. See the `CTAN page <https://www.ctan.org/pkg/textcomp>`__ for
more information and documentation of `textcomp`.

This package is not autoloaded, so you must request it explicitly if you want to
use it.  To load the `textcomp` extension, add ``'[tex]/textcomp'`` to the
``load`` array of the ``loader`` block of your MathJax configuration, and add
``'textcomp'`` to the ``packages`` array of the ``tex`` block.  The macros
provided in `textcomp` can be used equally in math and text mode. In order to
make them available in text mode they have to be explicitly added to the
packages of the `textmacros` extension.


.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/textmacros', '[tex]/textcomp']},
     tex: {packages: {'[+]': ['textmacros']}}
     textmacros: {packages: {'[+]': ['textcomp']}}
   };



Alternatively, use ``\require{textcomp}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.



-----


.. _tex-textcomp-commands:


textcomp Commands
-----------------

The `textcomp` extension implements the following macros:
``\textacutedbl``, ``\textasciiacute``, ``\textasciibreve``, ``\textasciicaron``, ``\textasciicircum``, ``\textasciidieresis``, ``\textasciimacron``, ``\textasciitilde``, ``\textasteriskcentered``, ``\textbackslash``, ``\textbaht``, ``\textbar``, ``\textbardbl``, ``\textbigcircle``, ``\textblank``, ``\textborn``, ``\textbraceleft``, ``\textbraceright``, ``\textbrokenbar``, ``\textbullet``, ``\textcelsius``, ``\textcent``, ``\textcentoldstyle``, ``\textcircledP``, ``\textcolonmonetary``, ``\textcompwordmark``, ``\textcopyleft``, ``\textcopyright``, ``\textcurrency``, ``\textdagger``, ``\textdaggerdbl``, ``\textdegree``, ``\textdied``, ``\textdiscount``, ``\textdiv``, ``\textdivorced``, ``\textdollar``, ``\textdollaroldstyle``, ``\textdong``, ``\textdownarrow``, ``\texteightoldstyle``, ``\textellipsis``, ``\textemdash``, ``\textendash``, ``\textestimated``, ``\texteuro``, ``\textexclamdown``, ``\textfiveoldstyle``, ``\textflorin``, ``\textfouroldstyle``, ``\textfractionsolidus``, ``\textgravedbl``, ``\textgreater``, ``\textguarani``, ``\textinterrobang``, ``\textinterrobangdown``, ``\textlangle``, ``\textlbrackdbl``, ``\textleftarrow``, ``\textless``, ``\textlira``, ``\textlnot``, ``\textlquill``, ``\textmarried``, ``\textmho``, ``\textminus``, ``\textmu``, ``\textmusicalnote``, ``\textnaira``, ``\textnineoldstyle``, ``\textnumero``, ``\textohm``, ``\textonehalf``, ``\textoneoldstyle``, ``\textonequarter``, ``\textonesuperior``, ``\textopenbullet``, ``\textordfeminine``, ``\textordmasculine``, ``\textparagraph``, ``\textperiodcentered``, ``\textpertenthousand``, ``\textperthousand``, ``\textpeso``, ``\textpm``, ``\textquestiondown``, ``\textquotedblleft``, ``\textquotedblright``, ``\textquoteleft``, ``\textquoteright``, ``\textrangle``, ``\textrbrackdbl``, ``\textrecipe``, ``\textreferencemark``, ``\textregistered``, ``\textrightarrow``, ``\textrquill``, ``\textsection``, ``\textservicemark``, ``\textsevenoldstyle``, ``\textsixoldstyle``, ``\textsterling``, ``\textsurd``, ``\textthreeoldstyle``, ``\textthreequarters``, ``\textthreesuperior``, ``\texttildelow``, ``\texttimes``, ``\texttrademark``, ``\texttwooldstyle``, ``\texttwosuperior``, ``\textunderscore``, ``\textuparrow``, ``\textvisiblespace``, ``\textwon``, ``\textyen``, ``\textzerooldstyle``


|-----|
.. _tex-textmacros:

###############
//E. textmacros
###############

The `textmacros` extension adds the ability to process some text-mode
macros within ``\text{}`` and other macros that produce text-mode
material.  See the :ref:`tex-differences` section for how text-mode is
handled without this extension.

This extension is not loaded automatically, and can't be loaded via
the `autoload` extension.  To load the `textmacros` extension, add
``'[tex]/textmacros'`` to the ``load`` array of the ``loader`` block
of your MathJax configuration, and add ``'textmacros'`` to the
``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/textmacros']},
     tex: {packages: {'[+]': ['textmacros']}}
   };

Alternatively, use ``\require{textmacros}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
package is loaded.

Available Macros:
=================

The macros available in text mode with this extension are listed
below.  In addition, any macro that is defined via ``\def`` or
``\newcommand`` or in the ``macros`` section of the ``tex``
configuration block will also be processed if they only contain macros
from the list below.

.. raw:: html

   <style>
   .wy-table-responsive table {width: 100%}
   .rst-content .wy-table-responsive table code.literal {background: inherit}
   </style>


Additional Special Characters
-----------------------------

.. list-table::

   * - ``~``
     - non-breaking space
   * - \`
     - open quote (use two for double quote)
   * - ``'``
     - close quote (use two for double quote)


Math Mode Delimiters
--------------------

.. list-table::

   * - ``$``
     - start/end math mode
   * - ``\(``
     - start math mode
   * - ``\)``
     - end math mode


Quoted Special Characters
-------------------------

.. list-table::

   * - ``\$``
     - literal dollar sign
   * - ``\_``
     - literal underscore
   * - ``\%``
     - literal percent
   * - ``\{``
     - literal open brace
   * - ``\}``
     - literal close brace
   * - ``\``  (backslash-space)
     - literal space
   * - ``\&``
     - literal ampersand
   * - ``\#``
     - literal hash mark
   * - ``\\``
     - literal backslash


Text Accents
------------

.. list-table::

   * - ``\'``
     - acute accent
   * - ``\```
     - grave accent
   * - ``\^``
     - circumflex accent
   * - ``\"``
     - umlaut accent
   * - ``\~``
     - tilde accent
   * - ``\=``
     - macron accent
   * - ``\.``
     - over dot accent
   * - ``\u``
     - breve accent
   * - ``\v``
     - caron accent


Font Control
------------

.. list-table::

   * - ``\emph``
     - emphasized text
   * - ``\rm``
     - roman text
   * - ``\oldstyle``
     - oldstyle numerals
   * - ``\cal``
     - calligraphic text
   * - ``\it``
     - italic text
   * - ``\bf``
     - bold text
   * - ``\scr``
     - script text
   * - ``\frak``
     - Fraktur text
   * - ``\sf``
     - sans-serif text
   * - ``\tt``
     - typewriter text
   * - ``\Bbb``
     - blackboard-bold text
   * - ``\textrm``
     - roman text
   * - ``\textit``
     - italic text
   * - ``\textbf``
     - bold text
   * - ``\textsf``
     - sans-serif text
   * - ``\texttt``
     - typewriter text


Size Control
------------

.. list-table::

   * - ``\tiny``
     - very tiny size
   * - ``\Tiny``
     - tiny size
   * - ``\scriptsize``
     - size of super- and subscripts
   * - ``\small``
     - small size
   * - ``\normalsize``
     - standard size
   * - ``\large``
     - large size
   * - ``\Large``
     - larger sizse
   * - ``\LARGE``
     - very large size
   * - ``\huge``
     - even larger size
   * - ``\Huge``
     - largest size


Special Characters
------------------

.. list-table::

   * - ``\dagger``
     - †
   * - ``\ddagger``
     - ‡
   * - ``\S``
     - §


Spacing Commands
----------------

.. list-table::

   * - ``\,``
     - thin space
   * - ``\:``
     - medium space
   * - ``\>``
     - medium space
   * - ``\;``
     - thick space
   * - ``\!``
     - negative thin space
   * - ``\enspace``
     - en-space
   * - ``\quad``
     - quad space
   * - ``\qquad``
     - double quad space
   * - ``\thinspace``
     - thin space
   * - ``\negthinspace``
     - negative thin space
   * - ``\hskip``
     - horizontal skip (by following amount)
   * - ``\hspace``
     - horizontal space (of a given size)
   * - ``\kern``
     - kern (by a given size)
   * - ``\rule``
     - line of a given width and height
   * - ``\Rule``
     - box with given dimensions
   * - ``\Space``
     - space with given dimensions


Color Commands
--------------

.. list-table::

   * - ``\color``
     - set text color
   * - ``\textcolor``
     - set text color
   * - ``\colorbox``
     - make colored box
   * - ``\fcolorbox``
     - make framed colored box


HTML Commands
-------------

.. list-table::

   * - ``\href``
     - make hyperlink
   * - ``\style``
     - specify CSS styles
   * - ``\class``
     - specify CSS class
   * - ``\cssId``
     - specify CSS id
   * - ``\unicode``
     - character from unicode value


Equation Numbers
----------------

.. list-table::

   * - ``\ref``
     - cite a labeled equation
   * - ``\eqref``
     -  cite a labeled equation with parentheses

-----

Additional Packages
===================

You can configure the `textmacros` extension to use additional
packages, just as you can specify additional math TeX packages.
Normally, these should be pckages designed for text mode, but it is
possible to load some of the regular TeX packages as text macros.  For example

.. code:: javascript

   MathJax = {
     loader: {load: ['[tex]/textmacros', '[tex]/bbox']},
     tex: {
       packages: {'[+]': {'textmacros'}},
       textmacros: {
         packages: {'[+]': ['bbox']}
       }
     }
   }

would make the :ref:`tex-bbox` extension available in text mode, so
you could use ``\bbox`` inside ``\text{}``, for example.  Not all
math-mode extensions are appropriate for textmode, but some can be
usefully employed in text mode.

|-----|
.. _tex-unicode:

############
//E. unicode
############

The `unicode` extension implements a (non-standard) ``\unicode{}``
macro that allows arbitrary unicode code points to be entered in your
mathematics.  You can specify the height and depth of the character
(the width is determined by the browser), and the default font from
which to take the character.

Examples:

.. code-block:: latex

    \unicode{65}                        % the character 'A'
    \unicode{x41}                       % the character 'A'
    \unicode[.55,0.05]{x22D6}           % less-than with dot, with height .55em and depth 0.05em
    \unicode[.55,0.05][Geramond]{x22D6} % same taken from Geramond font
    \unicode[Garamond]{x22D6}           % same, but with default height, depth of .8em,.2em

Once a size and font are provided for a given unicode point, they need
not be specified again in subsequent ``\unicode{}`` calls for that
character.

The result of ``\unicode{...}`` will have TeX class `ORD` (i.e., it
will act like a variable).  Use ``\mathbin{...}``, ``\mathrel{...}``,
etc., to specify a different class.

Note that a font list can be given in the ``\unicode{}`` macro.  If
not is provided, MathJax will use its own fonts, if possible, and then
the default font list for unknown characters if not.

.. note::

   In version 2, you could configure the default font to be used for
   ``\unicode`` characters if one wasn't given explicitly.  This has
   not been implemented in version 3.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `unicode` extension explicitly, add
``'[tex]/unicode'`` to the ``load`` array of the ``loader`` block of
your MathJax configuration, and add ``'unicode'`` to the ``packages``
array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/unicode']},
     tex: {packages: {'[+]': ['unicode']}}
   };

Alternatively, use ``\require{unicode}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-unicode-commands:


unicode Commands
----------------

The `unicode` extension implements the following macros:
``\unicode``


|-----|
.. _tex-upgreek:

############
//E. upgreek
############

The `upgreek` extension implements the ``upgreek`` style package from LaTeX. It
provides upright Greek characters for both lower and upper cases.  See the `CTAN
page <https://www.ctan.org/pkg/upgreek>`__ for more information and
documentation of `upgreek`.

Note, that the extension does not implement the font selection options from the
LaTeX package.

This package is not autoloaded, so you must request it explicitly if you want to use it.
To load the `upgreek` extension, add ``'[tex]/upgreek'`` to the ``load`` array of the ``loader`` block of your
MathJax configuration, and add ``'upgreek'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/upgreek']},
     tex: {packages: {'[+]': ['upgreek']}}
   };


You can configure the `autoload` extension to load `upgreek` via

.. code-block:: javascript

   window.MathJax = {
     tex: {
       autoload: {
         upgreek: ['upalpha', 'upbeta', 'upchi', 'updelta', 'Updelta', 'upepsilon',
                   'upeta', 'upgamma', 'Upgamma', 'upiota', 'upkappa', 'uplambda',
                   'Uplambda', 'upmu', 'upnu', 'upomega', 'Upomega', 'upomicron',
                   'upphi', 'Upphi', 'uppi', 'Uppi', 'uppsi', 'Uppsi', 'uprho',
                   'upsigma', 'Upsigma', 'uptau', 'uptheta', 'Uptheta', 'upupsilon',
                   'Upupsilon', 'upvarepsilon', 'upvarphi', 'upvarpi', 'upvarrho',
                   'upvarsigma', 'upvartheta', 'upxi', 'Upxi', 'upzeta']
       }
     }
   };


Alternatively, use ``\require{upgreek}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-upgreek-commands:


upgreek Commands
----------------

The `upgreek` extension implements the following macros:
``\upalpha``, ``\upbeta``, ``\upchi``, ``\updelta``, ``\Updelta``, ``\upepsilon``, ``\upeta``, ``\upgamma``, ``\Upgamma``, ``\upiota``, ``\upkappa``, ``\uplambda``, ``\Uplambda``, ``\upmu``, ``\upnu``, ``\upomega``, ``\Upomega``, ``\upomicron``, ``\upphi``, ``\Upphi``, ``\uppi``, ``\Uppi``, ``\uppsi``, ``\Uppsi``, ``\uprho``, ``\upsigma``, ``\Upsigma``, ``\uptau``, ``\uptheta``, ``\Uptheta``, ``\upupsilon``, ``\Upupsilon``, ``\upvarepsilon``, ``\upvarphi``, ``\upvarpi``, ``\upvarrho``, ``\upvarsigma``, ``\upvartheta``, ``\upxi``, ``\Upxi``, ``\upzeta``


|-----|
.. _tex-verb:

#########
//E. verb
#########

The `verb` extension defines the ``\verb`` LaTeX macro that typesets
its argument "verbatim" (without further processing) in a monospaced
(typewriter) font.  The first character after the ``\verb`` command is
used as a delimiter for the argument, which is everything up to the
next copy of the delimiter character). E.g.

.. code-block:: latex

   \verb|\sqrt{x}|

will typeset ``\sqrt{x}`` as a literal string.

Note that, due to how MathJax locates math strings within the
document, the argument to ``\verb`` must have balanced braces, so
``\verb|{|`` is not valid in a web page (use ``\mathtt{\{}`` instead).
If you are passing TeX strings to :meth:`MathJax.tex2svg()` or
:meth:`MathJax.tex2chtml()`, however, braces don't have to be balanced.  So

.. code-block:: javascript

   const html = MathJax.tex2chtml('\\verb|{|');

is valid.

This extension is loaded automatically when the `autoload` extension
is used.  To load the `verb` extension explicitly (when using
``input/tex-base`` for example), add ``'[tex]/verb'`` to the
``load`` array of the ``loader`` block of your MathJax configuration,
and add ``'verb'`` to the ``packages`` array of the ``tex`` block.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['[tex]/verb']},
     tex: {packages: {'[+]': ['verb']}}
   };

Alternatively, use ``\require{verb}`` in a TeX expression to load it
dynamically from within the math on the page, if the `require`
extension is loaded.

-----


.. _tex-verb-commands:


verb Commands
-------------

The `verb` extension implements the following macros:
``\verb``


|-----|
.. _asciimath-support:

#####################
/I. AsciiMath Support
#####################

The support for AsciiMath in MathJax involves two functions: the first
looks for mathematics within your web page (indicated by delimiters
like ```...```) and marks the mathematics for later processing by
MathJax, and the second is what converts the AsciiMath notation into
MathJax's internal format, where one of MathJax's output processors
then displays it in the web page.  In MathJax version 2, these were
separated into distinct components (the ``asciimath2jax`` preprocessor
and the AsciiMath input jax), but in version 3, the ``asciimath2jax``
functions have been folded into the AsciiMath input jax.

The AsciiMath input jax actually includes a copy of ``ASCIIMathML.js``
itself (see the `AsciiMath home page <http://asciimath.org>`__ for
details).  This means that the results of MathJax's AsciiMath
processing should be the same as using the actual ``ASCIIMathML.js``
package (at least as far as the MathML that it generates is
concerned).  Thanks go to David Lippman for writing the initial
version of the AsciiMath preprocessor and input jax and for the
ongoing improvements from the AsciiMath community.

The AsciiMath input jax handles only the original ASCIIMathML notation
(from ASCIIMathML v1.4.7), not the extended LaTeXMathML notation added
in version 2.0 of ASCIIMathML, though the AsciiMath input jax does
expose the tables that define the symbols that AsciiMath processes,
and so it would be possible to extend them to include additional
symbols.  In general, it is probably better to use MathJax's :ref:`TeX
input jax <TeX-support>` to handle LaTeX notation.

AsciiMath can be configured to look for whatever markers you want to
use for your math delimiters.  See the :ref:`AsciiMath
configuration options <asciimath-options>` section for details
on how to customize the action of the AsciiMath input jax.


.. _loading-asciimath:

Loading the AsciiMath Component
===============================

The AsciiMath input jax has not yet been fully ported to version 3.
Instead, the AsciiMath component uses the version 2 AsciiMath
input jax together with some of the legacy version 2 code patched into
the version 3 framework.  This is less efficient, and somewhat larger,
than a pure version-3 solution would be, and it can complicate
the configuration process.  A full version-3 port of AsciiMath is
planned for a future release.

Because AsciiMath hasn't been fully ported to version 3, none of the
combined components include it.  So in order to use AsciiMath
notation, you will need to configure MathJax to load it yourself by
adding ``input/asciimath`` to the ``load`` array in the ``loader``
block of your MathJax configuration.  For example,

.. code-block:: html

   <script>
   MathJax = {
     loader: {load: ['input/asciimath', 'output/chtml', 'ui/menu']},
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
   </script>

would load the AsciiMath input jax, the CommonHTML output jax, and the
contextual menu component.


.. _asciimath-delimiters:

AsciiMath delimiters
====================

By default, the AsciiMath processor defines the back-tick
(`````) as the delimiters for mathematics in AsciiMath format.  It
does **not** define ``$...$`` as math delimiters.  That is because
dollar signs appear too often in non-mathematical settings, which
could cause some text to be treated as mathematics unexpectedly.  For
example, with single-dollar delimiters, "... the cost is $2.50 for the
first one, and $2.00 for each additional one ..." would cause the
phrase "2.50 for the first one, and" to be treated as mathematics
since it falls between dollar signs.  For this reason, if you want to
use single-dollars for AsciiMath notation, you must enable that
explicitly in your configuration:

.. code-block:: javascript

    window.MathJax = {
      loader: {
        load: ['input/asciimath']
      },
      asciimath: {
        delimiters: [['$','$'], ['`','`']]
      }
    });

Note that the dollar signs are frequently used as a delimiter for
mathematics in the TeX format, and you can not enable the dollar-sign
delimiter for both.  It is probably best to leave dollar signs for TeX
notation.

See the :ref:`asciimath-options` page, for additional configuration
parameters that you can specify for the AsciiMath input processor.


.. _asciimath-in-html:

AsciiMath in HTML documents
===========================

The AsciiMath syntax is described on the official `AsciiMath homepage
<http://asciimath.org>`_.

Keep in mind that your mathematics is part of an HTML document, so you
need to be aware of the special characters used by HTML as part of its
markup.  There cannot be HTML tags within the math delimiters (other
than ``<br>``, ``<wbr>``, and HTML comments) as AsciiMath-formatted
math does not include HTML tags.  Also, since the mathematics is
initially given as text in the page, you need to be careful that your
mathematics doesn't look like HTML tags to the browser, which parses
the page before MathJax gets to see it.  In particular, that means
that you have to be careful about things like less-than and
greater-than signs (``<`` and ``>``), and ampersands (``&``), which
have special meaning to web browsers.  For example,

.. code:: latex

	... when `x<y` we have ...

will cause a problem, because the browser will think ``<y`` is the
beginning of a tag named ``y`` (even though there is no such tag in
HTML).  When this happens, the browser will think the tag continues up
to the next ``>`` in the document (typically the end of the next
actual tag in the HTML file), and you may notice that you are missing
part of the text of the document.  In the example above, the "``<y``"
and "``we have ...``" will not be displayed because the browser thinks
it is part of the tag starting at ``<y``.  This is one indication you
can use to spot this problem; it is a common error and should be
avoided.

Usually, it is sufficient simply to put spaces around these symbols to
cause the browser to avoid them, so

.. code:: latex

	... when `x < y` we have ...

should work.  Alternatively, you can use the HTML entities ``&lt;``,
``&gt;`` and ``&amp;`` to encode these characters so that the browser
will not interpret them, but MathJax will.  E.g.,

.. code-block:: html

	  ... when `x &lt; y` we have ...

Keep in mind that the browser interprets your text before MathJax
does.

|-----|
.. _mathml-support:

##################
/I. MathML Support
##################

The support for MathML in MathJax involves two functions: the first
looks for ``<math>`` tags within your document and marks them for
later processing by MathJax, and the second converts the MathML to the
internal format used by MathJax, where one of MathJax's output
processors then displays it in the web page.

In addition, MathJax's internal format is essentially MathML (with a
few additions), implemented as javascript objects rather than DOM
elements.  MathJax's various input processors all convert their
original format into this internal MathML format, and its output
processors take this MathML and produce the proper output from it.
Because the internal format is MathML-based, MathJax provides the
ability to convert to and from MathML notation.

Although some browsers have native support for rendering MathML, not
all do, and so MathJax makes it possible to view MathML notation in
*all* browsers.  Even for those that do support MathML, it may be
valuable to use MathJax, since that will produce consistent output
across all browsers, and MathJax implements features and functionality
that is not available in some native MathML implementations.

.. _mathml-in-html:

MathML in HTML pages
====================

For MathML that is handled via the preprocessor, you should not use
named MathML entities, but rather use numeric entities like
``&#x221A;`` or unicode characters embedded in the page itself.  The
reason is that entities are replaced by the browser before MathJax
runs, and some browsers report errors for unknown entities.  For
browsers that are not MathML-aware, that will cause errors to be
displayed for the MathML entities.  While that might not occur in the
browser you are using to compose your pages, it can happen with other
browsers, so you should avoid the named entities whenever possible.
If you must use named entities, you may need to declare them in the
`DOCTYPE` declaration by hand.

When you use MathML in an HTML document rather than an XHTML one
(MathJax will work with both), you should not use the "self-closing"
form for MathML tags with no content, but should use separate open and
close tags.  That is, use

.. code-block:: html

    <mspace width="thinmathspace"></mspace>

rather than ``<mspace width="thinmathspace" />``.  This is because
HTML does not have self-closing tags, and some browsers will get the
nesting of tags wrong if you attempt to use them.  For example, with
``<mspace width="1em" />``, since there is no closing tag, the rest of
the mathematics will become the content of the ``<mspace>`` tag; but
since ``<mspace>`` should have no content, the rest of the mathematics
will not be displayed.  This is a common error that should be avoided.
Modern browsers that support HTML5 should be able to handle
self-closing tags, but older browsers have problems with them, so if
you want your mathematics to be visible to the widest audience, do not
use the self-closing form in HTML documents.


.. _mathml-tags:

Supported MathML tags
=====================

MathJax supports the `MathML3.0 <http://www.w3.org/TR/MathML3/>`_
mathematics tags, with some limitations.  The MathML
support is still under active development, so some tags are not yet
implemented, and some features are not fully developed, but are
coming.

The deficiencies include:

- No support for alignment groups in tables.

- Not all attributes are supported for tables.  E.g., ``columnspan``
  and ``rowspan`` are not implemented yet.

- Experimental support for the elementary math tags: ``mstack``, ``mlongdiv``,
  ``msgroup``, ``msrow``, ``mscarries``, and ``mscarry`` (via the ``mml3`` extension, see below).

- Experimental support for bidirectional mathematics (via the ``mml3`` extension, see below).

See the `results of the MathML3.0 test suite
<http://www.w3.org/Math/testsuite/results/tests.html>`_ for details.


.. _mathml-content-mathml:

Content MathML
==============

The version 2 ``content-mathml`` extension is not yet available in
version 3.

..
   To use Content MathML in your documents, simply include
   ``"content-mathml.js"`` in the ``extensions`` array of your MathML
   configuration block.  For example

   .. code-block:: html

       <script type="text/x-mathjax-config">
       MathJax.Hub.Config({
         MathML: {
           extensions: ["content-mathml.js"]
         }
       });
       </script>

   Note that this script tag must come *before* the script that loads
   ``MathJax.js`` itself.

   For more information, see :doc:`options/extensions/Content-MathML`.


.. _mathml-mml3:

Experimental mml3 extension
===========================

MathML includes a number of tags that support elementary-school
mathematics, like ``<mstack>`` and ``<mlongdiv>``.  MathJax has only
experimental support for these tags via the `mml3` extension.  This
uses an XSLT transform to convert these tags into other presentation
MathML tags that MathJax has implemented. This does a reasonable job
for some constructs, and a poorer job for others, but it does make it
possible to process elementary math within MathJax.  Better support is
planned for the future.

To activate experimental features in your documents, simply include
``[mml]/mml3`` in the ``load`` array of the ``loader`` section of your
configuration:


.. code-block:: javascript

   MathJax = {
     loader: {load: ['[mml]/mml3']}
   };


This will install a pre-filter on the MathML input jax that performs
the XSLT transform before processing it.


.. _mathml-semantics-annotations:

Semantics and Annotations
=========================

Some popular annotation formats like TeX, Maple, or Content MathML are
often included in the MathML source via the ``semantics`` element.
This is particularly true of MathML that is generated by other
software, such as editors or computational tools.

MathJax provides access to these annotations through the ``"Show Math
As"`` menu, via the ``Annotations`` submenu.  See the `MathML Annotation Framework 
<http://www.w3.org/TR/MathML/chapter5.html#mixing.semantic.annotations>`_ and
the :ref:`menu-options` documentation for details.

|-----|
.. _output-formats:

##########################
/O. MathJax Output Formats
##########################

Currently, MathJax can render math in three ways:

- Using HTML and CSS to lay out the mathematics,
- Using Scalable Vector Graphics (SVG) to lay out the mathematics, or
- As a serialized MathML string.

The first two are implemented by the ``CommonHTML`` and ``SVG`` output
processors.  The third is a consequence of the fact that MathJax uses
MathML as its internal format.  While MathJax version 2 included a
``NativeMML`` output processor that produced MathML notation for those
browsers that support it, this has been dropped from version 3.  See
the :ref:`mathml-output` section for more information on how to get
MathML output.

If you are using one of the combined component files, then this will
select one of these output processors for you.  If the component file
ends in ``-chtml``, then it is the CommonHTML output processor, while
if it ends in ``-svg`` then the SVG output processor will be used.

If you are performing your own in-line or file-based configuration,
you select which one you want to use by including either
``'output/chtml'`` or ``'output/svg'`` in the ``load`` array of the
``loader`` section of your MathJax configuration.  For example

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ["input/tex", "output/chtml"]}
   };

would specify TeX input and CommonHTML output for the mathematics
in your document.

.. warning::

   The ``PreviewHTML``, ``PlainSource``, and ``NativeMML`` output
   formats from version 2 are not available in version 3.  These may
   be available in future releases if there is demand for them.

-----

.. toctree::
   :caption: More Information
   :maxdepth: 1

   html
   svg
   mathml

|-----|
.. _lazy-typesetting:

####################
/O. Lazy Typesetting
####################

MathJax offers an extension that is designed to improve the
performance of pages with large numbers of equations. It implements a
"lazy typesetting" approach that only processes an expression when it
comes into view.  This means that expressions will not be typeset when
they are not visible, and your readers will not have to wait for the
entire document to typeset, speeding up their initial view of the
page. Furthermore, any expressions that are never seen will not be
typeset, saving the processing time that would normally have been
spent on those expressions.

This also helps with the situation where you may link to a particular
location in your page (via a URL with a hash); typesetting the
material above that point can cause the browser to change the scroll
position, and so the user may not end up at the proper location in the
page. With the lazy extension, the material above that point is not
typeset until the user scrolls upwards, and so there is no position
change.

To use the lazy typesetting extension, simply add it to your
configuration as follows:

.. code-block:: latex

   MathJax = {
     loader: {load: ['ui/lazy']}
   };

This will adjust the typesetting pipeline to implement the
lazy-typesetting functionality.

Lazy typesetting works best with SVG output, but changes with the way
the CommonHTML output handles its stylesheet updates make the CHTML
output nearly as fast. With TeX input, the lazy extension makes sure
that previous expressions are processed by TeX (though not output to
the page) so that any macro definitions or automatic equation numbers
are in place when the visible expressions are processed. Currently,
documents that contain ``\ref`` or ``\eqref`` links may not yet work
properly, since target equations may not have been typeset, and so the
link location may not be marked in the document. In particular,
forward references are unlikely to work, and backward references will
work only if the target expression has already been typeset. We hope
to improve this situation in a future release.


.. _lazy-options:

Lazy Typesetting Options
------------------------

Adding the `ui/lazy` extension to the `loader.load` array adds the
following options to the MathJax configuration:

.. code-block:: javascript

   MathJax = {
     options: {
       lazyMargin: '200px',
       lazyAlwaysTypeset: null
     }
   };

.. _lazy-lazyMargin:
.. describe:: lazyMargin: '200px'

   This gives the extent of the typesetting margin outside the visible
   viewport.  When mathematics appears within this range of the
   viewport, it will be typeset.  This allows typesetting to occur
   slightly before the math appears in the window, for a smoother
   effect.

.. _lazy-lazyAlwaysTypeset:
.. describe:: lazyAlwaysTypeset: null

   This gives an array of containers whose math expressions should
   always be typset during the initial typesetting pass, rather than
   waiting for them to scroll into view.  This may be useful if
   MathJax output appears in diagrams or other layout that must be
   sized and placed during initial page layout.

|-----|
.. _automatic-linebreaking:

###########################
/O. Automatic Line Breaking
###########################

Automatic line breaking has not yet been implemented in MathJax
version 3, but is high on our list for inclusion in a future release.

|-----|
.. _font-support:

########################
/O. MathJax Font Support
########################

MathJax version 3 currently supports only one font, the MathJax TeX
font.  Version 2 provides the following fonts:

* MathJax TeX (default)
* STIX General
* Asana Math
* Neo Euler
* Gyre Pagella
* Gyre Termes
* Latin Modern

MathJax contains customized webfont versions of these fonts. In particular,
these customized versions are split over several files to minimize the page
load.

MathJax 3 will support these fonts in a future version.


.. _user-defined-fonts:

Use of Other Fonts
==================

In version 2 of MathJax, it was difficult to adjust the fonts in use
(once loaded), or to replace individual or collections of characters
being used.  For example, switching the variables and function names
to use a sans-serif font rather than the standard serifed font is
quite difficult in version 2.  The structure of the font data in
version 3 has been completely redesigned to make such changes easier.

Since browsers do not provide APIs to access font metrics, MathJax has
to ship with the necessary font data; this font data is generated
during development and cannot be determined easily on the fly.  The
tools for creating the data needed by MathJax have not yet been
created for version 3 (the data for the MathJax TeX font was
converted from the version 2 format by hand).  These tools are high on
the list for inclusion in the next version of MathJax, which should
provide the additional fonts missing from the initial release of
version 3.  At that point, the details of how to mix-and-match font
characters, and how to create the data files for your own fonts for
use in MathJax, will be provided.


..
   Font configuration
   ==================

   Page authors can configure their font preference for each :ref:`output
   format <output-formats>` separately, see :ref:`HTML-CSS output
   processor <configure-HTML-CSS>` and :ref:`SVG output processor
   <configure-SVG>`. MathJax will download the necessary webfonts and
   fontdata dynamically and only those files necessary for the content.

   For the HTML-CSS output, MathJax will download webfonts in the
   appropriate webfont format (depending on the client browser); for the
   SVG output, MathJax will download path data that corresponds to the
   fonts.

   The :ref:`HTML-CSS output processor <configure-HTML-CSS>` will prefer
   locally installed copies of the webfonts to minimize page load. Page
   authors can set a preference via the ``availableFonts`` and
   ``preferredFont`` options and they can configure the webfont via the
   ``webFont`` option. Please note that except for STIX General, the
   usual distributions of the supported fonts do not work for technical
   reasons. You can download the webfonts from the `MathJax repository
   <https://github.com/mathjax/MathJax/tree/master/fonts/HTML-CSS>`_.

   The :ref:`SVG output processor <configure-SVG>` will not use fonts
   directly but rather uses derived SVG path data to draw paths
   corresponding to characters. The page author can configure the font
   via the ``font`` option.

   There is currently no method for switching fonts after MathJax has
   loaded.  Similarly, page users cannot change the font configuration at
   this time except by installing their preferred fonts locally.


.. _unknown-characters:

Character fallbacks
===================

No font contains a suitable glyph for every character specified in the
Unicode standard. When MathJax encounters a character that isn't in
the font that it is using, it will fall back to other fonts in a variety
of ways.

First, MathJax enhances Unicode coverage of its default TeX fonts,
e.g., combining two double integrals ``U+222C`` when a quadruple
integral ``U+2A0C`` is used. However, this cannot create every
character specified in Unicode. Next, MathJax will run through a
fallback chain within the configured fonts (e.g., upright Greek will
be substituted with italic Greek).

Finally, when all else fails, MathJax will ask the browser to provide
the glyph from a system font.  Since in that final case, MathJax will
not have the necessary data on the glyph's bounding box, MathJax will
guess these metrics.  When run in a browser, MathJax will be able to
determine the character's width, but not its height and depth, so it
will use default values these metrics.  Measuring the width can
negatively affect the rendering speed, and guessing the height and
depth can reduce the quality of the resulting output.  When used on a
server or in a command-line application, MathJax won't even be able to
determine the width, and that has an even more serous consequences for
the layout, in general.  Thus it is best to use only the characters
that are in the MathJax fonts when using server-side rendering.

|-----|
.. _browser-compatibility:

#########################
/O. Browser Compatibility
#########################

Extensive browser support is an important goal for MathJax; at the
same time, MathJax does require a certain minimum level of browser
functionality.  While MathJax version 2 went to great lengths to
remain compatible with early versions of most browsers (even back to
IE6), MathJax version 3 relies on more modern browser features, and so
older browsers are no longer supported.

The CommonHTML and SVG output supports all modern browsers (Chrome, Safari,
Firefox, Edge), and most mobile browsers.  Include the
`polyfill <https://polyfill.io/v3/>`__ library in order to support
earlier browser versions (see their `browser support
<https://polyfill.io/v3/supported-browsers/>`__ page for details).
In particular, to allow MathJax version 3 to work with IE11, include the line

.. code-block:: html

   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

before the script that loads MathJax.

Please `file issues on GitHub
<https://github.com/mathjax/MathJax/issues>`__ if you notice
inaccuracies or problems.  It may help to add a screenshot; we
suggest services such as `browsershots.org
<http://browsershots.org>`__, `saucelabs.com <http://saucelabs.com>`__,
or `browserstack.com <http://browserstack.com>`__ for obtaining them.


.. _viewport-meta:

Viewport meta tag
=================

The viewport meta tag provides the browser with instructions regarding
viewports and zooming. This way, web developers can control how a
webpage is displayed on a mobile device.

Incorrect or missing viewport information can confuse MathJax's layout
process, leading to very small font sizes. We recommend that you use
standard values such as the following:

.. code-block:: html

  <meta name="viewport" content="width=device-width, initial-scale=1">


.. _ie-emulation-modes:

Internet Explorer Emulation modes
=================================

Internet Explorer provides so-called emulation modes for backward
compatibility to its legacy versions. These emulation modes have been
deprecated since Internet Explorer 11, cf. `Microsoft documentation
<https://msdn.microsoft.com/en-us/library/jj676915.aspx>`_.

MathJax is fastest when in the standards mode of each IE version, so
it is best to force the highest mode possible. That can be
accomplished by adding

.. code-block:: html

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

at the top of the ``<head>`` section of your HTML documents.

.. note::

  This line must come at the beginning of the ``<head>``, before
  any stylesheets, scripts, or other content are loaded.

Note that versions of IE prior to 11 are no longer supported in
MathJax version 3.

|-----|
.. _html-output:

################
/O. HTML Support
################

The `CommonHTML` output processor renders your mathematics using HTML
with CSS styling.  It produces high-quality output in all modern
browsers, with results that are consistent across browsers and
operating systems.  This is MathJax's primary output mode since
MathJax version 2.6. Its major advantage is its quality, consistency,
and the fact that its output is independent of the browser, operating
system, and user environment.  This means you can pre-process
mathematics on a server, without needing to know the browser, what
fonts are available, and so on.  (In version 2, both the ``HTML-CSS``
and ``NativeMML`` processors produced different output for different
browsers and user environments.)

The CommonHTML output uses web-based fonts so that users don't have to
have math fonts installed on their computers, but will use locally
installed ones if they are available. It currently only supports
MathJax's default TeX fonts (see the :ref:`font-support` section for
more information).

See :ref:`chtml-options` for information about the options that
control the CommonHTML output.

|-----|
.. _mathml-output:

##################
/O. MathML Support
##################

MathJax uses MathML as the basis for its internal format for
mathematical expressions, so MathML support is built into MathJax at a
fundamental level.  There is a :ref:`MathML input jax <mathml-input>`
for converting from MathML elements into the internal format
(javascript objects representing the MathML elements), and there is a
mechanism that can convert the internal format into a serialized
MathML string provided by :meth:`MathJax.startup.toMML()` (if you are
using MathJax components).

.. _NativeMML:

While MathJax version 2 included a `NativeMML` output jax for
producing MathML output in the web page, because MathML is not
available in the Chrome, Edge, and IE browsers, because the MathML
support in Safari and Firefox don't include all the features needed by
MathJax (e.g., the `<mlabeledtr>` element needed for labeled
equations), and because the quality of the results in Safari and
Firefox are not always comparable to the output from MathJax, the
`NativeMML` output jax is no longer provided in MathJax version 3.

You can, however, use MathJax's MathML serialization features to
implement your own native MathML output if you wish.  Here is one
example that does so for TeX input to MathML output.

.. code-block:: html

   <style>
   mjx-container[display="block"] {
     display: block;
     margin: 1em 0;
   }
   </style>
   <script>
   MathJax = {
     //
     //  Load only TeX input and the contextual menu
     //
     loader: {load: ['input/tex', 'ui/menu']},
     //
     //  When page is ready, render the math in the document
     //
     //
     //  When page is ready:
     //    disable the assistive-mathml menu item
     //    render the document, handling require and autoload calls
     //
     startup: {
       pageReady() {
         MathJax.startup.document.menu.menu.findID('Accessibility', 'AssistiveMml').disable();
         MathJax._.mathjax.mathjax.handleRetriesFor(() => MathJax.startup.document.render());
       }
     },
     //
     //  Override the usual typeset render action with one that generates MathML output
     //
     options: {
       renderActions: {
         assistiveMml: [],  // disable assistive mathml
         typeset: [150,
           (doc) => {for (math of doc.math) {MathJax.config.renderMathML(math, doc)}},
           (math, doc) => MathJax.config.renderMathML(math, doc)
         ]
       },
       menuOptions: {
         settings: {
           assistiveMml: false
         }
       }
     },
     //
     // The action to use for rendering MathML
     //
     renderMathML(math, doc) {
       math.typesetRoot = document.createElement('mjx-container');
       math.typesetRoot.innerHTML = MathJax.startup.toMML(math.root);
       math.display && math.typesetRoot.setAttribute('display', 'block');
     }
   };
   </script>
   <script type="text/javascript" id="MathJax-script" async
     src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
   </script>

This example uses the :ref:`startup-component` component to load just
the :ref:`input/tex <tex-component>` and :ref:`contextual menu
<menu-component>` components, and defines a new render action that
replaces the standard ``typeset`` action with one that creates a
MathJax container element and stores it in :attr:`math.typesetRoot`,
then converts the internal format to a MathML string (via
:meth:`MathJax.startup.toMML()`) and has the browser parse that into
DOM element (via :attr:`innerHTML`).  A later render action will move
the container and its MathML contents into the DOM at the proper
location.  For math that is in display style, the container is marked
with an attribute so that CSS can be used to make the container be a
block-level element with some top and bottom margin.

The example also takes several steps to disable the Assistive MathML
extension that inserts hidden MathML for the usual output renders.
This is unneeded since we are generating MathML ourselves as the
primary output.  Setting the :attr:`menuOptions.settings.assistiveMml`
option to ``false`` turns off the assistive MathML in the contextual
menu. The :func:`pageReady()` function also includes a line that
disables the assistive-MathML item in the menu, so user's can't
accidentally turn it on again.  Finally, the `assistiveMml` render
action is disabled, since it will never be activated (overkill
perhaps, but no need to run the usual code for nothing).

.. note::

   MathJax's version 2 NativeMML output processor worked around
   various limitations of Firefox/Gecko and Safari/WebKit (e.g., to
   provide support for equation labels), but this approach does not,
   as it just uses the generic MathML.

|-----|
.. _svg-output:

###############
/O. SVG Support
###############

The ``SVG`` output processor uses `Scalable Vector Graphics` to render
the mathematics on the page.  SVG is supported in all the major
browsers and most mobile devices; note, however, that Internet
Explorer prior to IE9 does not support SVG (MathJax version 3 doesn't
support these in any case), and IE9 only does in "IE9 standards mode",
not its emulation modes for earlier versions.  The SVG output mode is
high quality, and displays and prints well in all browsers. Since it
uses SVG data instead of font files, it is not affected by user-based
web-font blocking, or other character placement issues that sometimes
occur with the HTML-based output.

One advantage to the SVG output is that it is relatively
self-contained (it does not rely heavily on CSS, though it does use
some in certain circumstances), so it can be saved and used as an
independent image.  One disadvantage of this mode is that its
variable-width tables become fixed size once they are typeset, and
don't rescale if the window size changes (for example).

In version 2, equation tags and numbers where produced using a fixed
width as well, so the equation number would not change with changes in
window size.  In version 3, however, equation numbers now are based on
the container size, and move with changes in its size, just as they do
with CommonHTML output.

Finally, because mathematical characters in SVG output are produced by
SVG paths, not characters in a font, they can't be copy and pasted, as the
output of the CommonHTML processor can.

See :ref:`svg-options` for information about the options that
control the SVG output.

|-----|
.. _configuring-mathjax:

#######################
/C. Configuring MathJax
#######################

The various components of MathJax, including its input and output
processors, its extensions, and the MathJax core,
all can be configured though a :data:`MathJax` global object that
specifies the configuration you want to use.  The :data:`MathJax`
object consists of sub-objects that configure the individual
components of MathJax.  For example, the :ref:`input/tex <tex-input>`
component is configured through a ``tex`` block within the
:data:`MathJax` object, while the :ref:`startup-component` component
is configured through the ``startup`` block.

These blocks are JavaScript objects that includes ``name: value``
pairs giving the names of parameters and their values, with pairs
separated by commas.  Be careful not to include a comma after the last
value, however, as some browsers will fail to process the
configuration if you do.

Some blocks may contain further sub-blocks.  For example, the ``tex``
block can have a ``macros`` sub-block that pre-defines macros, and a
``tagformat`` block (when the :ref:`tex-tagformat` component is used)
to define how equation tags are displayed and handled.

For example,

.. code-block:: javascript

    window.MathJax = {
      loader: {
        load: ['[tex]/tagformat']
      },
      startup: {
        pageReady: () => {
          alert('Running MathJax');
          return MathJax.startup.defaultPageReady();
        }
      },
      tex: {
        packages: {'[+]': ['tagformat']},
        tagSide: 'left',
        macros: {
	  RR: '{\\bf R}',
	  bold: ['{\\bf #1}',1]
	},
        tagformat: {
           tag: (n) => '[' + n + ']'
        }
      }
    };

is a configuration that asks for the :ref:`tex-tagformat` extension to
be loaded, sets up the :ref:`startup-component` component to have a
function that it runs when the page (and MathJax) are ready (the
function issues an alert and then does the usual :meth:`pageReady()`
function, which typesets the page), configures the :ref:`TeX input
<tex-input>` component to use the `tagformat` extension, asks for
displayed equations to be typeset to the left (rather than centered),
defines two macros, and finally set the tagging so that it uses square
brackets rather than parentheses for equation numbers and tags.

Note the special notation used with the ``packages`` option above.
The ``packages`` property is an array of extension names, but the
configuration uses a special object to add to that array rather than
replace it.  If the option you are setting is an array, and you
provide an object that has a single properly whose name is ``'[+]'``
and whose value is an array, then that array will be appended to the
default value for the option you are setting.  So in the example
above, the ``'tagformat'`` string is added to the default ``packages``
array (without your needing to know what that default value is).

Similarly, if you use an object with a single property whose name is
``'[-]'`` and whose value is an array, the elements in that array are
*removed* from the default value of the option you are setting.  For
example,

.. code-block:: javascript

   packages: {'[-]': ['autoload', 'require']}

would **remove** the `autoload` and `require` packages from the default
``packages`` array.

Finally, you can combine ``'[+]'`` and ``'[-]'`` in one object to do
both actions.  E.g.,

.. code-block:: javascript

   packages: {'[+]': ['enclose'], '[-]': ['autoload', 'require']}

would remove the `autoload` and `require` packages from the default
``packages`` array, and add `enclose` to the result.

-----

In the links below, the various options are first listed with their
default values as a complete configuration block, and then each option
is explained further below that.

.. toctree::
   :caption: More Information
   :maxdepth: 2
   :titlesonly:

   input/index
   output/index
   document
   accessibility
   menu
   safe
   startup/index

|-----|
.. _input-options:

###########################
/C. Input Processor Options
###########################

.. toctree::
   :maxdepth: 1

   tex
   mathml
   asciimath

-----

.. _input-common-options:

Options Common to All Input Processors
======================================

There are no options that are common to all input jax, but a number of
the :ref:`document-options` affect what portions of the document will
be processed by the input jax that scan the page for delimiters (i.e.,
TeX and AsciiMath).  In particular, the options that correspond to the
version-2 options ``skipTags``, ``includeTags``, and similar options
for the various v2 pre-processors are now document-level options.

|-----|
.. _asciimath-options:

#####################################
/C. AsciiMath Input Processor Options
#####################################

The options below control the operation of the :ref:`AsciiMath input
processor <asciimath-input>` that is run when you include
``'input/asciimath'`` in the in the ``load`` array of the ``loader``
block of your MathJax configuration, or if you load a combined
component that includes the AsciiMath input jax (none currently do,
since the AsciiMath input has not been fully ported to version 3).
They are listed with their default values.  To set any of these
options, include an ``asciimath`` section in your :data:`MathJax` global
object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      asciimath: {
        fixphi: true,              // true for TeX mapping, false for unicode mapping
        displaystyle: true,        // true for displaystyle typesetting, false for in-line
        decimalsign: '.'           // character to use for decimal separator
      }
    };

-----


Option Descriptions
===================

.. _asciimath-fixphi:
.. describe:: fixphi: true

   Determines whether MathJax will switch the Unicode values for
   ``phi`` and ``varphi``. If set to ``true`` MathJax will use the TeX
   mapping, otherwise the Unicode mapping.

.. _asciimath-displaystyle:
.. describe:: displaystyle: true

   Determines whether operators like summation symbols will have their
   limits above and below the operators (true) or to their right
   (false).  The former is how they would appear in displayed
   equations that are shown on their own lines, while the latter is
   better suited to in-line equations so that they don't interfere
   with the line spacing so much.

.. _asciimath-decimalsign:
.. describe:: decimalsign: "."

   This is the character to be used for decimal points in numbers.  If
   you change this to ``','``, then you need to be careful about
   entering points or intervals.  E.g., use ``(1, 2)`` rather than
   ``(1,2)`` in that case.

The remaining options are described in the
:ref:`input-common-options` section.

-----


Developer Options
=================

In addition to the options listed above, low-level options intended
for developers include the following:

.. _asciimath-FindAsciiMath:
.. describe:: FindAsciiMath: null

   The ``FindAsciiMath`` object instance that will override the default
   one.  This allows you to create a subclass of ``FindAsciiMath`` and
   pass that to the AsciiMath input jax.  A ``null`` value means use the
   default ``FindAsciiMath`` class and make a new instance of that.

|-----|
.. _mathml-options:

##################################
/C. MathML Input Processor Options
##################################

The options below control the operation of the :ref:`MathML input
processor <mathml-input>` that is run when you include
``'input/mml'`` in the ``load`` array of the ``loader`` block of
your MathJax configuration, or if you load a combined component that
includes the MathML input jax.  They are listed with their default
values.  To set any of these options, include an ``mml`` section in
your :data:`MathJax` global object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      mml: {
        parseAs: 'html',                     // or 'xml'
        forceReparse: false,                 // true to serialize and re-parse all MathML
        parseError: function (node) {        // function to process parsing errors
          this.error(this.adaptor.textContent(node).replace(/\n.*/g, ''));
        },
        verify: {                            // parameters controlling verification of MathML
          checkArity: true,                  //   check if number of children is correct
          checkAttributes: false,            //   check if attribute names are valid
          fullErrors: false,                 //   display full error messages or just error node
          fixMmultiscripts: true,            //   fix unbalanced mmultiscripts
          fixMtables: true                   //   fix incorrect nesting in mtables
        }
      }
    };

-----


Option Descriptions
===================

.. _mathml-parseAs:
.. describe:: parseAs: 'html'

   Specifies how MathML strings should be parsed:  as XML or as HTML.
   When set to ``'xml'``, the browser's XML parser is used, which is
   more strict about format (e.g., matching end tags) than the HTML
   parser, which is the default.  In node application (where the
   ``liteDOM`` is used), these both use the same parser, which is not
   very strict.

.. _mathml-forceReparse:
.. describe:: forceReparse: false

   Specifies whether MathJax will serialize and re-parse MathML found
   in the document.  This can be useful if you want to do XML parsing
   of the MathML from an HTML document.

.. _mathml-parseError:
.. describe:: parseError: (node) => {...}

   Specifies a function to be called when there is a parsing error in
   the MathML (usually only happens with XML parsing).  The ``node``
   is a DOM node containing the error text.  Your function can process
   that in any way it sees fit.  The default is to call the MathML
   input processor's error function with the text of the error (which
   will create an ``merror`` node with the error message).  Note that
   this function runs with ``this`` being the MathML input processor
   object.


.. _mathml-verify:
.. describe:: verify: {...}

   This object controls what verification/modifications are to be
   performed on the MathML that is being processed by MathJax.
   The values that can be included in the :attr:`verify` object are
   the following:

   .. _mathml-verify-checkArity:
   .. describe:: checkArity: true

      This specifies whether the number of children is verified or
      not.  The default is to check for the correct number of
      children.  If the number is wrong, the node is replaced by an
      ``<merror>`` node containing either a message indicating the
      wrong number of children, or the name of the node itself,
      depending on the setting of :attr:`fullErrors` below.

   .. _mathml-verify-checkAttributes:
   .. describe:: checkAttributes: false

      This specifies whether the names of all attributes are checked
      to see if they are valid on the given node (i.e., they have a
      default value, or are one of the standard attributes such as
      :attr:`style`, :attr:`class`, :attr:`id`, :attr:`href`, or a
      :attr:`data-` attribute.  If an attribute is in error, the node
      is either placed inside an ``<merror>`` node (so that it is
      marked in the output as containing an error), or is replaced by
      an ``<merror>`` containing a full message indicating the bad
      attribute, depending on the setting of :attr:`fullErrors` below.

      Currently only names are checked, not values.  Value
      verification may be added in a future release.

   .. _mathml-verify-fullErrors:
   .. describe:: fullErrors: false

      This specifies whether a full error message is displayed when a
      node produces an error, or whether just the node name is
      displayed (or the node itself in the case of attribute errors).

   .. _mathml-verify-fixMmultiscripts:
   .. describe:: fixMmultiscripts: true

      This specifies whether extra ``<none/>`` entries are added to
      ``<mmultiscripts>`` elements to balance the super- and
      subscripts, as required by the specification, or whether to
      generate an error instead.

   .. _mathml-verify-fixMtables:
   .. describe:: fixMtables: true

      This specifies whether missing ``<mtable>``, ``<mtr>`` and
      ``<mtd>`` elements are placed around cells or not.  When
      ``true``, MathJax will attempt to correct the table structure if
      these elements are missing from the tree.  For example, an
      ``<mtr>`` element that is not within an ``<mtable>`` will have
      an ``<mtable>`` placed around it automatically, and an
      ``<mtable>`` containing an ``<mi>`` as a direct child node will
      have an ``<mtr>`` and ``<mtd>`` inserted around the ``<mi>``.


-----


Developer Options
=================

In addition to the options listed above, low-level options intended
for developers include the following:

.. _mathml-FindMathML:
.. describe:: FindMathML: null

   The ``FindMathML`` object instance that will override the default
   one.  This allows you to create a subclass of ``FindMathML`` and
   pass that to the MathML input jax.  A ``null`` value means use the
   default ``FindMathML`` class and make a new instance of that.

.. _mathml-MathMLCompile:
.. describe:: MathMLCompile: null

   The ``MathMLCompile`` object instance that will override the
   default one.  This allows you to create a subclass of
   ``MathMLCompile`` and pass that to the MathML input jax.  A
   ``null`` value means use the default ``MathMLCompile`` class and
   make a new instance of that.

|-----|
.. _tex-options:

###############################
/C. TeX Input Processor Options
###############################

The options below control the operation of the :ref:`TeX input
processor <tex-input>` that is run when you include ``'input/tex'``,
``'input/tex-full'``, or ``'input/tex-base'`` in the ``load`` array of
the ``loader`` block of your MathJax configuration, or if you load a
combined component that includes the TeX input jax.  They are listed
with their default values.  To set any of these options, include a
``tex`` section in your :data:`MathJax` global object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      tex: {
        packages: ['base'],        // extensions to use
        inlineMath: [              // start/end delimiter pairs for in-line math
          ['\\(', '\\)']
        ],
        displayMath: [             // start/end delimiter pairs for display math
          ['$$', '$$'],
          ['\\[', '\\]']
        ],
        processEscapes: true,      // use \$ to produce a literal dollar sign
        processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
        processRefs: true,         // process \ref{...} outside of math mode
        digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
                                   // pattern for recognizing numbers
        tags: 'none',              // or 'ams' or 'all'
        tagSide: 'right',          // side for \tag macros
        tagIndent: '0.8em',        // amount to indent tags
        useLabelIds: true,         // use label name rather than tag for ids
        maxMacros: 10000,          // maximum number of macro substitutions per expression
        maxBuffer: 5 * 1024,       // maximum size for the internal TeX string (5K)
        baseURL:                   // URL for use with links to tags (when there is a <base> tag in effect)
           (document.getElementsByTagName('base').length === 0) ?
            '' : String(document.location).replace(/#.*$/, '')),
        formatError:               // function called when TeX syntax errors occur
            (jax, err) => jax.formatError(err)
      }
    };

Note that some extensions make additional options available.  See the
:ref:`tex-extension-options` section below for details.

.. note::

   The default for ``processEscapes`` has changed from
   ``false`` in version 2 to ``true`` in version 3.

.. note::

   Prior to version 3.2, the ``multlineWidth`` option used to be in the
   main ``tex`` block, but it is now in the ``ams`` sub-block of the
   ``tex`` block.  Version 3.2 includes code to move the configuration
   from its old location to its new one, but that
   backward-compatibility code will be removed in a future version.

-----


Option Descriptions
===================

.. _tex-packages:
.. describe:: packages: ['base']

   This array lists the names of the packages that should be
   initialized by the TeX input processor.  The :ref:`input/tex
   <tex-input>` and :ref:`input/tex-full <tex-input>` components
   automatically add to this list the packages that they load.  If you
   explicitly load addition tex extensions, you should add them to
   this list.  For example:

   .. code-block:: javascript

      MathJax = {
        loader: {load: ['[tex]/enclose']},
        tex: {
          packages: {'[+]': ['enclose']}
        }
      };

   This loads the :ref:`tex-enclose` extension and activates it by
   including it in the package list.

   You can remove packages from the default list using ``'[-]'``
   rather than ``[+]``, as in the followiong example:

   .. code-block:: javascript

      MathJax = {
        tex: {
          packages: {'[-]': ['noundefined']}
        }
      };

   This would disable the :ref:`tex-noundefined` extension, so that
   unknown macro names would cause error messages rather than be
   displayed in red.

   If you need to both remove some default packages and add new ones,
   you can do so by including both within the braces:

   .. code-block:: javascript

      MathJax = {
        loader: {load: ['[tex]/enclose']},
        tex: {
          packages: {'[-]': ['noundefined', 'autoload'], '[+]': ['enclose']}
        }
      };

   This disables the :ref:`tex-noundefined` and :ref:`tex-autoload`
   extensions, and adds in the :ref:`tex-enclose` extension.


.. _tex-inlineMath:
.. describe:: inlineMath: [['\\\(','\\\)']]

    This is an array of pairs of strings that are to be used as
    in-line math delimiters.  The first in each pair is the initial
    delimiter and the second is the terminal delimiter.  You can have
    as many pairs as you want.  For example,

    .. code-block:: javascript

        inlineMath: [ ['$','$'], ['\\(','\\)'] ]

    would cause MathJax to look for ``$...$`` and ``\(...\)`` as
    delimiters for in-line mathematics.  (Note that the single dollar
    signs are not enabled by default because they are used too
    frequently in normal text, so if you want to use them for math
    delimiters, you must specify them explicitly.)

    Note that the delimiters can't look like HTML tags (i.e., can't
    include the less-than sign), as these would be turned into tags by
    the browser before MathJax has the chance to run.  You can only
    include text, not tags, as your math delimiters.

.. _tex-displayMath:
.. describe:: displayMath: [ ['$$','$$'], ['\\\[','\\\]'] ]

    This is an array of pairs of strings that are to be used as
    delimiters for displayed equations.  The first in each pair is the
    initial delimiter and the second is the terminal delimiter.  You
    can have as many pairs as you want.

    Note that the delimiters can't look like HTML tags (i.e., can't
    include the less-than sign), as these would be turned into tags by
    the browser before MathJax has the chance to run.  You can only
    include text, not tags, as your math delimiters.

.. _tex-processEscapes:
.. describe:: processEscapes: false

    When set to ``true``, you may use ``\$`` to represent a literal
    dollar sign, rather than using it as a math delimiter, and ``\\``
    to represent a literal backslash (so that you can use ``\\\$`` to
    get a literal ``\$`` or ``\\$...$`` to get a backslash just before
    in-line math).  When ``false``, ``\$`` will not be altered, and
    its dollar sign may be considered part of a math delimiter.
    Typically this is set to ``true`` if you enable the ``$ ... $``
    in-line delimiters, so you can type ``\$`` and MathJax will
    convert it to a regular dollar sign in the rendered document.

.. _tex-processRefs:
.. describe:: processRefs: true

    When set to ``true``, MathJax will process ``\ref{...}`` outside 
    of math mode.

.. _tex-processEnvironments:
.. describe:: processEnvironments: true

    When ``true``, `tex2jax` looks not only for the in-line and
    display math delimiters, but also for LaTeX environments 
    (``\begin{something}...\end{something}``) and marks them for
    processing by MathJax.  When ``false``, LaTeX environments will
    not be processed outside of math mode.


.. _tex-digits:
.. describe:: digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/

   This gives a regular expression that is used to identify numbers
   during the parsing of your TeX expressions.  By default, the
   decimal point is ``.`` and you can use ``{,}`` between every three
   digits before that.  If you want to use ``{,}`` as the decimal
   indicator, use

   .. code-block:: javascript

      MathJax = {
        tex: {
          digits: /^(?:[0-9]+(?:\{,\}[0-9]*)?|\{,\}[0-9]+)/
        }
      };

.. _tex-tags:
.. describe:: tags: 'none'

   This controls whether equations are numbered and how.  By default
   it is set to ``'none'`` to be compatible with earlier versions of
   MathJax where auto-numbering was not performed (so pages will not
   change their appearance).  You can change this to ``'ams'`` for
   equations numbered as the `AMSmath` package would do, or ``'all'``
   to get an equation number for every displayed equation.

.. _tex-tagSide:
.. describe:: tagSide: 'right'

    This specifies the side on which ``\tag{}`` macros will place the
    tags, and on which automatic equation numbers will appear.  Set it
    to ``'left'`` to place the tags on the left-hand side.

.. _tex-tagIndent:
.. describe:: tagIndent: "0.8em"

    This is the amount of indentation (from the right or left) for the
    tags produced by the ``\tag{}`` macro or by automatic equation
    numbers.

.. _tex-useLabelIds:
.. describe:: useLabelIds: true

   This controls whether element IDs for tags use the ``\label`` name
   or the equation number.  When ``true``, use the label, when
   ``false``, use the equation number.

.. _tex-maxMacros:
.. describe:: maxMacros: 10000

    Because a definition of the form ``\def\x{\x} \x`` would cause MathJax 
    to loop infinitely, the ``maxMacros`` constant will limit the number of 
    macro substitutions allowed in any expression processed by MathJax.  

.. _tex-maxBuffer:
.. describe:: maxBuffer: 5 * 1024

    Because a definition of the form ``\def\x{\x aaa} \x`` would loop 
    infinitely, and at the same time stack up lots of a's in MathJax's 
    equation buffer, the ``maxBuffer`` constant is used to limit the size of 
    the string being processed by MathJax.  It is set to 5KB, which should 
    be sufficient for any reasonable equation.

.. raw:: html

   <style>
   .rst-content dl.describe > dt:first-child {
     margin-bottom: 0;
   }
   .rst-content dl.describe > dt + dt {
     margin-top: 0;
     border-top: none;
     padding-left: 6em;
   }
   .rst-content dl.describe > dt + dd {
     margin-top: 6px;
   }
   </style>

.. _tex-baseURL:
.. describe:: baseURL: (document.getElementsByTagName('base').length === 0) ?
                       '' : String(document.location).replace(/#.*$/, ''))

   This is the base URL to use when creating links to tagged equations
   (via ``\ref{}`` or ``\eqref{}``) when there is a ``<base>`` element
   in the document that would affect those links.  You can set this
   value by hand if MathJax doesn't produce the correct link.

.. _tex-formatError:
.. describe:: formatError: (jax, err) => jax.formatError(err)

   This is a function that is called when the TeX input jax reports a
   syntax or other error in the TeX that it is processing.  The
   default is to generate an ``<merror>`` MathML element with the
   message indicating the error that occurred.  You can override the
   function to perform other tasks, like recording the message,
   replacing the message with an alternative message, or throwing the
   error so that MathJax will stop at that point (you can catch the
   error using promises or a ``try/carch`` block).


The remaining options are described in the
:ref:`input-common-options` section.

-----

Developer Options
=================

In addition to the options listed above, low-level options intended
for developers include the following:

.. _tex-FindTeX:
.. describe:: FindTeX: null

   The ``FindTeX`` object instance that will override the default
   one.  This allows you to create a subclass of ``FindTeX`` and
   pass that to the TeX input jax.  A ``null`` value means use the
   default ``FindTeX`` class and make a new instance of that.
              

-----

.. _tex-extension-options:

TeX Extension Options
=====================

Several of the TeX extensions make additional options available in the
``tex`` block of your MathJax configuration.  These are described
below.  Note that the :ref:`input/tex <tex-input>` component, and the
combined components that load the TeX input jax, include a number of
these extensions automatically, so some these options will be
available by default.

For example, the :ref:`tex-configmacros` package adds a ``macros``
block to the ``tex`` configuration block that allows you to pre-define
macros for use in TeX espressions:

.. code-block:: javascript

   MathJax = {
     tex: {
       macros: {
         R: '\\mathbf{R}'
       }
     }
   }

The options for the various TeX packages (that have options) are
described in the links below:

* :ref:`tex-ams-options`
* :ref:`tex-amscd-options`
* :ref:`tex-autoload-options`
* :ref:`tex-color-options`
* :ref:`tex-configmacros-options`
* :ref:`tex-mathtools-options`
* :ref:`tex-noundefined-options`
* :ref:`tex-physics-options`
* :ref:`tex-require-options`
* :ref:`tex-setoptions-options`
* :ref:`tex-tagformat-options`

-----

Setting Options from within TeX Expressions
===========================================

It is sometimes convenient to be able to change the value of a TeX or
TeX extension option from within a TeX expression.  For example, you
might want to change the tag side for an individual expression.  The
:ref:`tex-setoptions` extension allows you to do just that.  It
defines a ``\setOptions`` macro that allows you to change the values
of options for the TeX parser, or the options for a given TeX package.

Because this functionality can have potential adverse consequences on
a page that allows community members to enter TeX notation, this
extension is not loaded by default, and can't be loaded by
`\require{}`.  You must load it and add it to the tex package list
explicitly in order to allow the options to be set.  The extension has
configuration parameters that allow you to control which packages and
options can be modified from within a TeX expression, and you may wish
to adjust those if you are using this macro in a community setting.


|-----|
.. _output-options:

############################
/C. Output Processor Options
############################

There are a number of configuration options that are common to all the
output processors.  These are described following the links below,
which give the options that are specific to the particular output jax.

.. toctree::
    :maxdepth: 1

    chtml
    svg

-----

.. _output-common-options:

Options Common to All Output Processors
=======================================

The following options are common to all the output processors listed
above.  They are given here with their default values, using the
``chtml`` block as an example.

.. code-block:: javascript

    MathJax = {
      chtml: {
        scale: 1,                      // global scaling factor for all expressions
        minScale: .5,                  // smallest scaling factor to use
        mtextInheritFont: false,       // true to make mtext elements use surrounding font
        merrorInheritFont: false,      // true to make merror text use surrounding font
        mtextFont: '',                 // font to use for mtext, if not inheriting (empty means use MathJax fonts)
        merrorFont: 'serif',           // font to use for merror, if not inheriting (empty means use MathJax fonts)
        unknownFamily: 'serif',        // font to use for character that aren't in MathJax's fonts
        mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
        skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
        exFactor: .5,                  // default size of ex in em units
        displayAlign: 'center',        // default for indentalign when set to 'auto'
        displayIndent: '0'             // default for indentshift when set to 'auto'
      }
    };

.. note::

   The ``matchFontHeight`` option is no longer available on the SVG
   output processor, so it is no longer listed here.  It is now
   described among the CommonHTML output options.

-----


Option Descriptions
===================

.. _output-scale:
.. describe:: scale: 1

   The scaling factor for math compared to the surrounding text.  The
   `CommonHTML` output processor tries to match the ex-size of the
   mathematics with that of the text where it is placed, but you may
   want to adjust the results using this scaling factor.  The user can
   also adjust this value using the contextual menu item associated
   with the typeset mathematics.

.. _output-minScale:
.. describe:: minScale: .5

   This gives a minimum scale factor for the scaling used by MathJax
   to match the equation to the surrounding text.  This will prevent
   MathJax from making the mathematics too small.

.. _output-mtextInheritFont:
.. describe:: mtextInheritFont: false

   This setting controls whether ``<mtext>`` elements will be typeset
   using the math fonts or the font of the surrounding text.  When
   ``false``, the :ref:`mtextFont <output-mtextFont>` will be used,
   unless it is blank, in which case math fonts will be used, as they
   are for other token elements; when ``true``, the font will be
   inherited from the surrounding text, when possible, depending on
   the ``mathvariant`` for the element (some math variants, such as
   ``fraktur`` can't be inherited from the surroundings).

.. _output-merrorInheritFont:
.. describe:: merrorInheritFont: false

   This setting controls whether the text for ``<merror>`` elements
   will be typeset using the math fonts or the font of the surrounding
   text.  When ``false``, the :ref:`merrorFont <output-merrorFont>`
   will be used; when ``true``, the font will be inherited from the
   surrounding text, when possible, depending on the ``mathvariant``
   for the element (some math variants, such as ``fraktur`` can't be
   inherited from the surroundings).

.. _output-mtextFont:
.. describe:: mtextFont: ''

   This specifies the font family to use for ``<mtext>`` elements when
   :ref:`mtextInheritFont <output-mtextInheritFont>` is ``false`` (and
   is ignored if it is ``true``).  It can be a comma-separated list of
   font-family names.  If it is empty, then the math fonts are used,
   as they are with other token elements.

.. _output-merrorFont:
.. describe:: merrorFont: 'serif'

   This specifies the font family to use for ``<merror>`` elements
   when :ref:`merrorInheritFont <output-merrorInheritFont>` is
   ``false`` (and is ignored if it is ``true``).  It can be a
   comma-separated list of font-family names.  If it is empty, then
   the math fonts are used, as they are with other token elements.

.. _output-unknownFamily:
.. describe:: unknownFamily: 'serif'

   This specifies the font family to use for characters that are not
   found in the MathJax math fonts.  For example, if you enter unicode
   characters directly, these may not be in MathJax's font, and so
   they will be taken from the font specified here.

.. _output-mathmlSpacing:
.. describe:: mathmlSpacing: false

   This specifies whether to use TeX spacing or MathML spacing when
   typesetting the math.  When ``true``, MathML spacing rules are
   used; when ``false``, the TeX rules are used.

.. _output-skipAttributes:
.. describe:: skipAttributes: {}

   This object gives a list of non-standard attributes (e.g., RFDa
   attributes) that will **not** be transferred from MathML element to
   their corresponding DOM elements in the typeset output.  For
   example, with

   .. code-block:: javascript

      skipAttributes: {
          data-my-attr: true
      }

   a MathML element like ``<mi data-my-attr="some data">x</mi>`` will
   not have the ``data-my-attr`` attribute on the ``<mjx-mi>`` element
   created by the CommonHTML output processor to represent the
   ``<mi>`` element (normally, any non-standard attributes are
   retained in the output).

.. _output-exFactor:
.. describe:: exFactor: .5

   This is the size of an ex in comparison to 1 em that is to be used
   when the ex-size can't be determined (e.g., when running in a Node
   application, where the size of DOM elements can't be determined).

.. _output-displayAlign:
.. describe:: displayAlign: 'center'

   This determines how displayed equations will be aligned (left,
   center, or right).  The default is ``'center'``.

.. _output-displayIndent:
.. describe:: displayIndent: 0

   This gives the amount of indentation that should be used for
   displayed equations.  The default is ``0``.  A value of ``'1em'``,
   for example, would introduce an extra 1 em of space from whichever
   margin the equation is aligned to, or an offset from the center
   position if the expression is centered.  Note that negative values
   are allowed.

-----

Developer Options
=================

In addition to the options listed above, low-level options intended
for developers include the following:

.. _output-wrapperFactory:
.. describe:: wrapperFactory: null

   The ``WrapperFactory`` object instance to use for creating wrappers
   for the internal MathML objects.  This allows you to create a
   subclass of ``WrapperFactory`` and pass that to the output jax.
   A ``null`` value means use the default ``WrapperFactory`` class and
   make a new instance of that.
   
.. _output-font:
.. describe:: font: null

   The ``FontData`` object instance to use for creating wrappers
   for the internal MathML objects.  This allows you to create a
   subclass of ``FontData`` and pass that to the output jax.
   A ``null`` value means use the default ``FontData`` class and
   make a new instance of that.
  
   
.. _output-cssStyles:
.. describe:: cssStyles: null

   The ``CssStyles`` object instance to use for creating wrappers
   for the internal MathML objects.  This allows you to create a
   subclass of ``CssStyles`` and pass that to the output jax.
   A ``null`` value means use the default ``CssStyles`` class and
   make a new instance of that.
.. _chtml-options:

#######################################
/C. CommonHTML Output Processor Options
#######################################

The options below control the operation of the :ref:`CommonHTML output
processor <html-output>` that is run when you include
``'output/chtml'`` in the ``load`` array of the ``loader`` block of
your MathJax configuration, or if you load a combined component that
includes the CommonHTML output jax.  They are listed with their default
values.  To set any of these options, include a ``chtml`` section in
your :data:`MathJax` global object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      chtml: {
        scale: 1,                      // global scaling factor for all expressions
        minScale: .5,                  // smallest scaling factor to use
        mtextInheritFont: false,       // true to make mtext elements use surrounding font
        merrorInheritFont: true,       // true to make merror text use surrounding font
        mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
        skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
        exFactor: .5,                  // default size of ex in em units
        displayAlign: 'center',        // default for indentalign when set to 'auto'
        displayIndent: '0',            // default for indentshift when set to 'auto'
        matchFontHeight: true,         // true to match ex-height of surrounding font
        fontURL: '[mathjax]/components/output/chtml/fonts/woff-v2',   // The URL where the fonts are found
        adaptiveCSS: true              // true means only produce CSS that is used in the processed equations
      }
    };

-----


Option Descriptions
===================

.. _chtml-matchFontHeight:
.. describe:: matchFontHeight: true

   This setting controls whether MathJax will scale the mathematics so
   that the ex-height of the math fonts matches the ex-height of the
   surrounding fonts.  This makes the math match the surroundings
   better, but if the surrounding font does not have its ex-height set
   properly (and not all fonts do), it can cause the math to *not*
   match the surrounding text.  While this will make the lower-case
   letters match the surrounding fonts, the upper case letters may not
   match (that would require the font height and ex-height to have the
   same ratio in the surrounding text as in the math fonts, which is
   unlikely).

.. _chtml-fontURL:
.. describe:: fontURL: '[mathjax]/components/output/chtml/fonts/woff-v2'

   This is the URL to the location where the MathJax fonts are
   stored.  In the default, ``[mathjax]`` is replaced by the location
   from which you have loaded MathJax.  You should include a complete
   URL to the location of the fonts you want to use.

.. _chtml-adaptiveCSS:
.. describe:: adaptiveCSS: true

   This setting controls how the CommonHTML output jax handles the CSS
   styles that it generates.  When true, this means that only the CSS
   needed for the math that has been processed on the page so far is
   generated.  When false, the CSS needed for all elements and all
   characters in the MathJax font are generated.  This is an extremely
   large amount of CSS, and that can have an effect on the performance
   of your page, so it is best to leave this as ``true``.  You can
   reset the information about what CSS is needed by using the command

   .. code-block:: javascript

      MathJax.startup.document.output.clearCache();

   to clear the font cache.

The remaining options are described in the
:ref:`output-common-options` section.

|-----|
.. _svg-options:

################################
/C. SVG Output Processor Options
################################

The options below control the operation of the :ref:`SVG output
processor <svg-output>` that is run when you include ``'output/svg'``
in the ``load`` array of the ``loader`` block of your MathJax
configuration, or if you load a combined component that includes the
CommonHTML output jax.  They are listed with their default values.  To
set any of these options, include an ``svg`` section in your
:data:`MathJax` global object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      svg: {
        scale: 1,                      // global scaling factor for all expressions
        minScale: .5,                  // smallest scaling factor to use
        mtextInheritFont: false,       // true to make mtext elements use surrounding font
        merrorInheritFont: true,       // true to make merror text use surrounding font
        mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
        skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
        exFactor: .5,                  // default size of ex in em units
        displayAlign: 'center',        // default for indentalign when set to 'auto'
        displayIndent: '0',            // default for indentshift when set to 'auto'
        fontCache: 'local',            // or 'global' or 'none'
        localID: null,                 // ID to use for local font cache (for single equation processing)
        internalSpeechTitles: true,    // insert <title> tags with speech content
        titleID: 0                     // initial id number to use for aria-labeledby titles
      }
    };

-----


Option Descriptions
===================

.. _svg-fontCache:
.. describe:: fontCache: 'local'

   This setting determines how the SVG output jax manages characters
   that appear multiple times in an equation or on a page.  The SVG
   processor uses SVG paths to display the characters in your math
   expressions, and when a character is used more than once, it is
   possible to reuse the same path description; this can save space in
   the SVG image, as the paths can be quite complex.  When set to
   ``'local'``, MathJax will cache font paths on an express-by-expression
   (each expression has its own cache within the SVG image itself),
   which makes the SVG self-contained, but still allows for some
   savings if characters are repeated.  When set to ``'global'``, a
   single cache is used for all paths on the page; this gives the most
   savings, but makes the images dependent on other elements of the
   page.  When set to ``'none'``, no caching is done and explicit paths
   are used for every character in the expression.

.. describe:: internalSpeechTitles: true

   This tells the SVG output jax whether to put speech text into
   ``<title>`` elements within the SVG (when set to ``'true'``), or to
   use an ``aria-label`` attribute instead.  Neither of these control
   whether speech strings are generated (that is handled by the
   :ref:`semantic-enrich-options` settings); this setting only tells
   what to do with a speech string when it has been generated or
   included as an attribute on the root MathML element.


The remaining options are described in the
:ref:`output-common-options` section.

-----

Developer Options
=================

In addition to the options listed above, low-level options intended
for developers include the following:

.. _svg-localID:
.. describe:: localID: null

   This gives the ID prefix to use for the paths stored in a local
   font cache when :attr:`fontCache` is set to ``'local'``.  This is
   useful if you need to process multiple equations by hand and want
   to generate unique ids for each equation, even if MathJax is
   restarted between equations.  If set to ``null``, no prefix is
   used.

.. _svg-titleID:
.. describe:: titleID: 0

   This gives the initial number used to make unique ``<title>`` ids
   when :attr:`internalSpeechTitles` is ``true``.  This is useful if
   you need to process multiple equations by hand and want to generate
   unique ids for each equation, even if MathJax is restarted between
   equations.

|-----|
.. _document-options:

####################
/C. Document Options
####################

The options below control the operation of the ``MathDocument`` object
created by MathJax to process the mathematics in your web page.  They
are listed with their default values.  To set any of these options,
include an ``options`` section in your :data:`MathJax` global object.

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      options: {
        skipHtmlTags: [            //  HTML tags that won't be searched for math
            'script', 'noscript', 'style', 'textarea', 'pre',
            'code', 'annotation', 'annotation-xml'
        ],
        includeHtmlTags: {         //  HTML tags that can appear within math
            br: '\n', wbr: '', '#comment': ''
        },
        ignoreHtmlClass: 'tex2jax_ignore',    //  class that marks tags not to search
        processHtmlClass: 'tex2jax_process',  //  class that marks tags that should be searched
        compileError: function (doc, math, err) {doc.compileError(math, err)},
        typesetError: function (doc, math, err) {doc.typesetError(math, err)},
        renderActions: {...}
      }
    };

-----


Option Descriptions
===================

.. raw:: html

   <style>
   .rst-content dl.describe > dt:first-child {
     margin-bottom: 0;
   }
   .rst-content dl.describe > dt + dt {
     margin-top: 0;
     border-top: none;
     padding-left: 6em;
   }
   .rst-content dl.describe > dt + dd {
     margin-top: 6px;
   }
   </style>


.. _skipHtmlTags:
.. describe:: skipHtmlTags: ['script', 'noscript', 'style', 'textarea',
                         'pre', 'code', 'annotation', 'annotation-xml']

    This array lists the names of the tags whose contents should not
    be processed by MathJaX (other than to look for ignore/process
    classes as listed below).  You can add to (or remove from) this
    list to prevent MathJax from processing mathematics in specific
    contexts.  E.g.,

    .. code-block:: javascript

       skipHtmlTags: {'[-]': ['code', 'pre'], '[+]': ['li']}

    would remove ``'code'`` and ``'pre'`` tags from the list, while
    adding ``'li'`` tags to the list.

.. _includeHtmlTags:
.. describe:: includeHtmlTags: {br: '\n', wbr: '', '#comment': ''}

   This object specifies what tags can appear within a math
   expression, and what text to replace them by within the math.  The
   default is to allow ``<br>``, which becomes a newline, and ``<wbr>``
   and HTML comments, which are removed entirely.

.. _ignoreHtmlClass:
.. describe:: ignoreHtmlClass: 'mathjax_ignore'

    This is the class name used to mark elements whose contents should
    not be processed by MathJax (other than to look for the
    ``processHtmlClass`` pattern below).  Note that this is a regular
    expression, and so you need to be sure to quote any `regexp`
    special characters.  The pattern is inserted into one that
    requires your pattern to match a complete word, so setting
    ``ignoreHtmlClass: 'class2'`` would cause it to match an element with
    ``class='class1 class2 class3'`` but not ``class='myclass2'``.
    Note that you can assign several classes by separating them by the
    vertical line character (``|``).  For instance, with
    ``ignoreHtmlClass: 'class1|class2'`` any element assigned a class of
    either ``class1`` or ``class2`` will be skipped.  This could also
    be specified by ``ignoreHtmlClass: 'class[12]'``, which matches
    ``class`` followed by either a ``1`` or a ``2``.

.. _processHtmlClass:
.. describe:: processHtmlClass: 'mathjax_process'

    This is the class name used to mark elements whose contents
    *should* be processed by MathJax.  This is used to restart
    processing within tags that have been marked as ignored via the
    ``ignoreHtmlClass`` or to cause a tag that appears in the ``skipHtmlTags``
    list to be processed rather than skipped.  Note that this is a
    regular expression, and so you need to be sure to quote any
    `regexp` special characters.  The pattern is inserted into one
    that requires your pattern to match a complete word, so setting
    ``processHtmlClass: 'class2'`` would cause it to match an element with
    ``class='class1 class2 class3'`` but not ``class='myclass2'``.
    Note that you can assign several classes by separating them by the
    vertical line character (``|``).  For instance, with
    ``processHtmlClass: 'class1|class2'`` any element assigned a class of
    either ``class1`` or ``class2`` will have its contents processed.
    This could also be specified by ``processHtmlClass: 'class[12]'``,
    which matches ``class`` followed by either a ``1`` or a ``2``.

.. _document-compileError:
.. describe:: compileError: function (doc, math, err) {doc.compileError(math, err)}

   This is the function called whenever there is an uncaught error
   while an input jax is running (i.e., during the document's
   :meth:`compile()` call).  The arguments are the ``MathDocument`` in
   which the error occurred, the ``MathItem`` for the expression where
   it occurred, and the ``Error`` object for the uncaught error.  The
   default action is to call the document's default
   :meth:`compileError()` function, which sets :attr:`math.root` to a
   math element containing an error message (i.e.,
   ``<math><merror><mtext>Math input error<mtext></merror></math>``).
   You can replace this with your own function for trapping run-time
   errors in the input processors.

.. _document-typesetError:
.. describe:: typesetError: function (doc, math, err) {doc.typesetError(math, err)}

   This is the function called whenever there is an uncaught error
   while an output jax is running (i.e., during the document's
   :meth:`typeset()` call).  The arguments are the ``MathDocument`` in
   which the error occurred, the ``MathItem`` for the expression where
   it occurred, and the ``Error`` object for the uncaught error.  The
   default action is to call the document's default
   :meth:`typesetError()` function, which sets
   :attr:`math.typesetRoot` to a ``<span>`` element containing the
   text ``Math output error``.  You can replace this with your own
   function for trapping run-time errors in the output processors.

.. _document-renderActions:
.. describe:: renderActions: {...}

   This is an object that specifies the actions to take during the
   :meth:`MathJax.typeset()` (and its underlying
   :meth:`MathJax.startup.document.render()` call), and the various
   conversion functions, such as :meth:`MathJax.tex2svg()` (and their
   underlying :meth:`MathJax.startup.document.convert()` call).  The
   structure of the object is ``name: value`` pairs separated by
   commas, where the ``name`` gives an identifier for each action, and
   the ``value`` is an array consisting of a number and zero, one, or two
   functions, followed optionally by a boolean value.

   The number gives the priority of the action (lower numbers are
   executed first when the actions are performed).  The first function
   gives the action to perform when a document is rendered as a whole,
   and the second a function to perform when an individual expression
   is converted or re-rendered.  These can be given either as an
   explicit function, or as a string giving the name of a method to
   call (the first should be a method of a ``MathDocument``, and the
   second of a ``MathItem``).  If either is an empty string, that
   action is not performed.  If the function is missing, the method
   name is taken from the ``name`` of the action.  The boolean value
   tells whether the second function should be performed during a
   :meth:`convert()` call (when true) or only during a
   :meth:`rerender()` call (when false).

   For example,

   .. code-block:: javascript

      MathJax = {
        options: {
          renderActions: {
            compile: [MathItem.STATE.COMPILED],
            metrics: [MathItem.STATE.METRICS, 'getMetrics', '', false]
          }
        }
      };

   specifies two actions, the first called ``compile`` that uses the
   :meth:`compile()` method of the ``MathDocument`` and ``MathItem``,
   and the second called ``metrics`` that uses the :meth:`getMetric()`
   call for the ``MathDocument`` when the document is rendered, but
   does nothing during a :meth:`rerender()` or :meth:`convert()` call
   or an individual ``MathItem``.

   If the first function is given explicitly, it should take one
   argument, the ``MathDocument`` on which it is running.  If the
   second function is given explicitly, it should take two arguments,
   the ``MathItem`` that is being processed, and the ``MathDocument``
   in which it exists.

   The default value includes actions for the main calls needed to
   perform rendering of math: ``find``, ``compile``, ``metrics``,
   ``typeset``, ``update``, and ``reset``.  These find the math in the
   document, call the input jax on the math that was located, obtain
   the metric information for the location of the math, call the
   output jax to convert the internal format to the output format,
   insert the output into the document, and finally reset the internal
   flags so that a subsequent typesetting action will process
   properly.

   You can add your own actions by adding new named actions to the
   ``renderActions`` object, or override existing ones by re-using an
   existing name from above.  See the :ref:`mathml-output` section for
   an example of doing this.  The priority number tells where in the
   list your actions will be performed.

   Loading extensions may cause additional actions to be inserted into
   the list.  For example, the :ref:`menu-component` component inserts
   an action to add the menu event handlers to the math after it is
   inserted into the page.

-----

Developer Options
=================

.. _document-OutputJax:
.. describe:: OutputJax: null

   The ``OutputJax`` object instance to use for this
   ``MathDocument``.  If you are using MathJax components, the
   :ref:`startup-component` component will create this automatically.
   If you are writing a Node application accessing MathJax code
   directly, you will need to create the output jax yourself and pass
   it to the document through this option.

.. _document-InputJax:
.. describe:: InputJax: null

   The ``InputJax`` object instance to use for this
   ``MathDocument``.  If you are using MathJax components, the
   :ref:`startup-component` component will create this automatically.
   If you are writing a Node application accessing MathJax code
   directly, you will need to create the input jax yourself and pass
   it to the document through this option.

.. _document-MmlFactory:
.. describe:: MmlFactory: null

   The ``MmlFactory`` object instance to use for creating the internal
   MathML objects. This allows you to create a subclass of
   ``MmlFactory`` and pass that to the document.  A ``null`` value
   means use the default ``MmlFactory`` class and make a new instance
   of that.

.. _document-MathList:
.. describe:: MathList: DefaultMathList

   The ``MathList`` object class to use for managing the list of
   ``MathItem`` objects associated with the ``MathDocument``.  This
   allows you to create a subclass of ``MathList`` and pass that to
   the document.
   
.. _document-MathItem:
.. describe:: MathItem: DefaultMathItem

   The ``MathItem`` object class to use for maintaining the
   information about a single expression in a ``MathDocument``.  This
   allows you to create a subclass of ``MathItem`` and pass that to
   the document.  The document ``Handler`` object may define its own
   subclass of ``MathItem`` and use that as the default instead.  For
   example, the HTML handler uses ``HTMLMathItem`` objects for this
   option.
   
-----

.. raw:: html

   <span></span>
.. _accessibility-options:

####################################
/C. Accessibility Extensions Options
####################################

MathJax contains several extensions meant to support those who need
assistive technology, such as screen readers.  See the
:ref:`accessibility-components` page for more details.  The options
that control these extensions are listed below.

* :ref:`semantic-enrich-options`
* :ref:`complexity-options`
* :ref:`explorer-options`
* :ref:`assistive-mml-options`

Because the accessibility extensions are controlled by the settings of
the MathJax contextual menu, you may use the :ref:`menu-options` to
control whether they are enabled or not.  There are settings below
that can be used to *disable* the extensions, in case they are loaded
automatically, but these are not the settings that control whether the
extensions themselves are loaded.  That is controlled by the menu
settings:

.. code-block:: javascript

   MathJax = {
     options: {
       menuOptions: {
         settings: {
           assistiveMml: true,   // true to enable assistive MathML
           collapsible: false,   // true to enable collapsible math
           explorer: false      // true to enable the expression explorer
         }
       }
     }
   };

Note that there is no control for the semantic enrichment *per se*,
but it is enabled automatically by enabling the collapsible math or
the expression explorer.

Although you can load the extensions explicitly using the
:ref:`loader-options`, it is probably better to use the men u options
above, so that if a user turns the extensions off, they will not incur
the network and startup costs of loading the extensions they will not
be using.

-----

.. _semantic-enrich-options:

Semantic-Enrich Extension Options
=================================

This extension coordinates the creation and embedding of semantic
information generated by the enrichment process within the MathJax
output for use by the other extensions.

The `semantic-enrich` extension adds two actions to the document's
default :ref:`renderActions <document-renderActions>` object: an
``enrich`` action to perform the semantic enrichment, and an
``attachSpeech`` action to attach speech (if it is being generated) to
the output.

The Configuration Block
-----------------------

.. code-block:: javascript

   MathJax = {
     options: {
       enableEnrichment: true,   // false to disable enrichment
       sre: {
         speech: 'none',         // or 'shallow', or 'deep'
         domain: 'mathspeak',    // speech rules domain
         style: 'default',       // speech rules style
         locale: 'en'            // the language to use (en, fr, es, de, it)
       },
       enrichError: (doc, math, err) => doc.enrichError(doc, math, err),  // function to call if enrichment fails
     }
   };

Option Descriptions
-------------------

.. _semantic-enrich-enableEnrichment:
.. describe:: enableEnrichment: true

   This setting controls whether semantic enrichment is applied to the
   internal MathML representation of the mathematics in the page.
   This is controlled automatically by the settings of the context
   menu, so you should not need to adjust it yourself.  You can,
   however, use it to disable semantic enrichment if the
   `semantic-enrich` component has been loaded automatically and you
   don't need that.

.. _semantic-sre:
.. describe:: sre: {...}

   This block sets configuration values for the Speech-Rule Engine
   (SRE) that underlies MathJax's semantic enrichment features.  See
   the `SRE documentation
   <https://github.com/zorkow/speech-rule-engine/tree/master#options-to-control-speech-output>`__
   for more details.

.. _semantic-enrich-error:
.. describe:: enrichError: (doc, math, err) => doc.enrichError(doc, math, err)

   This setting provides a function that gets called when the semantic
   enrichment process fails for some reason.  The default is to call
   the MathDocument's ``enrichError()`` method, which simply prints a
   warning message in the browser console window.  The original
   (unenriched) MathML will be used for the output of the expression.
   You can override the default tbehavior by providing a function that
   does whatever you want, such as recording the error, or replacing
   the original MathML with alterntiave MathML containing an error
   message.

.. note::

   As of version 3.1.3, the ``enrichSpeech`` option has been renamed
   as ``speech`` in the ``sre`` block of the configuration.

-----

.. _complexity-options:

Complexity Extension Options
============================

This extension generates a complexity metric and inserts elements 
that allow the expressions to be collapsed by the user by clicking 
on the expression based on that metric.  Use the ``'a11y/complexity'``
block of your MathJax configuration to configure the extension.

The `complexity` extension adds a ``complexity`` action to the
document's default :ref:`renderActions <document-renderActions>`
object.

The Configuration Block
-----------------------

.. code-block:: javascript

   MathJax = {
     options: {
       enableComplexity: true,       // set to false to disable complexity computations
       makeCollapsible: true         // insert mactions to allow collapsing
     }
   };

Option Descriptions
-------------------

.. _complexity-enableComplexity:
.. describe:: enableComplexity: true

   This setting controls whether the `complexity` extension is to run
   or not.  The value is controlled automatically by the settings of
   the context menu, so you should not need to adjust it yourself.
   You can, however, use it to disable it if the `complexity`
   component has been loaded automatically and you don't need it.

.. _complexity-makeCollapsible:
.. describe:: makeCollapsible: true

   This setting determines whether the extension will insert
   ``<maction>`` elements to allow complex expressions to be
   "collapsed" so that they take up less space, and produce condensed
   speech strings that are simpler to listen to.  When false, the
   expression is not altered, but elements are marked (internally) if
   they would be collapsible.


Developer Options
-----------------

.. _complexity-identifyCollapsible:
.. describe:: identifyCollapsible: true

   This setting determines whether the complexity numbers computed for
   each element in the expression should take collapsing into
   account.  If true, parents of collapsible elements will get
   complexities that reflect the collapsible elements being
   collapsed.  When false, the complexities assume no collapsing will
   take place.

.. _complexity-Collapse:
.. describe:: Collapse: Collapse

   The ``Collapse`` object class to use for creating the ``<maction>``
   elements needed for collapsing complex expressions.  This allows
   you to create a subclass of ``Collapse`` and pass that to the
   document.

.. _complexity-ComplexityVisitor:
.. describe:: ComplexityVisitor: ComplexityVisitor

   The ``ComplexityVisitor`` object class to use for managing the
   computations of complexity values.  This allows you to create a
   subclass of ``ComplexityVisitor`` and pass that to the document.

-----

.. _explorer-options:

Explorer Extension Options
==========================

This extension provides support for interactive exploration of
expressions within the page.  See the :ref:`accessibility` page for
details about how this works.

The `explorer` extension adds an ``explorable`` action to the
document's default :ref:`renderActions <document-renderActions>`
object.

The Configuration Block
-----------------------

.. code-block:: javascript

   MathJax = {
     options: {
       enableExplorer: true,                // set to false to disable the explorer
       a11y: {
         speech: true,                      // switch on speech output
         braille: true,                     // switch on Braille output
         subtitles: true,                   // show speech as a subtitle
         viewBraille: false,                // display Braille output as subtitles

         backgroundColor: 'Blue',           // color for background of selected sub-expression
         backgroundOpacity: .2,             // opacity for background of selected sub-expression
         foregroundColor: 'Black',          // color to use for text of selected sub-expression
         foregroundOpacity: 1,              // opacity for text of selected sub-expression

         highlight: 'None',                 // type of highlighting for collapsible sub-expressions
         flame: false,                      // color collapsible sub-expressions
         hover: false,                      // show collapsible sub-expression on mouse hovering

         treeColoring: false,               // tree color expression

         magnification: 'None',             // type of magnification
         magnify: '400%',                   // percentage of magnification of zoomed expressions
         keyMagnifier: false,               // switch on magnification via key exploration
         mouseMagnifier: false,             // switch on magnification via mouse hovering
         align: 'top',                      // placement of magnified expression

         infoType: false,                   // show semantic type on mouse hovering
         infoRole: false,                   // show semantic role on mouse hovering
         infoPrefix: false,                 // show speech prefixes on mouse hovering
       }
     }
   };

Option Descriptions
-------------------

.. _explorer-enableExplorer:
.. describe:: enableExplorer: true

   This setting controls whether the `explorer` extension is to run
   or not.  The value is controlled automatically by the settings of
   the context menu, so you should not need to adjust it yourself.
   You can, however, use it to disable it if the `explorer`
   component has been loaded automatically and you don't need it.

The a11y options belong roughly to one of the following four categories:

Speech Options
^^^^^^^^^^^^^^

.. _explorer-speech:
.. describe:: speech: true

   Sets if speech output is produced. By default speech is computed for every
   expression on the page and output once the explorer is started.

.. _explorer-braille:
.. describe:: braille: true

   Sets whether or not Braille is produced and output for an expression.                 
              

.. _explorer-subtitles:
.. describe:: subtitles: true

   This option indicates whether the speech string for the selected
   sub-expression will be shown as a subtitle under the expression as
   it is explored.

.. _explorer-viewBraille:
.. describe:: viewBraille: false

   This option indicates whether Braille output will be displayed under the
   expression as it is explored.

.. note::

   As of version 3.1.3, the ``speechRules`` option has been broken
   into two separate options, ``domain`` and ``style``, in the ``sre``
   block of the configuration.  See the :ref:`semantic-enrich-options`
   above for more.


Highlighting Options
^^^^^^^^^^^^^^^^^^^^

.. _explorer-foregroundColor:
.. describe:: foregroundColor: 'Black'

   This specifies the color to use for the text of the selected
   sub-expression during expression exploration.  The color should be
   chosen from among the following: ``'Blue'``, ``'Red'``,
   ``'Green'``, ``'Yellow'``, ``'Cyan'``, ``'Magenta'``, ``'White'``,
   and ``'Black'``.

.. _explorer-foregroundOpacity:
.. describe:: foregroundOpacity: 1

   This indicates the opacity to use for the text of the selected
   sub-expression.

.. _explorer-backgroundColor:
.. describe:: backgroundColor: 'Blue'

   This specifies the background color to use for the selected
   sub-expression during expression exploration.  The color should be
   chosen from among the following: ``'Blue'``, ``'Red'``,
   ``'Green'``, ``'Yellow'``, ``'Cyan'``, ``'Magenta'``, ``'White'``,
   and ``'Black'``.

.. _explorer-backgroundOpacity:
.. describe:: backgroundOpacity: .2

   This indicates the opacity to use for the background color of the
   selected sub-expression.

.. _explorer-highlight:
.. describe:: highlight: 'None'

   Chooses a particular highlighter for showing collapsible
   sub-expressions. Choices are ``'None'``, ``'Flame'``, and ``'Hover'``.
              
.. _explorer-flame:
.. describe:: flame: false

   This flag switches on the Flame highlighter, which permanently highlights
   collapsible sub-expressions, with successively darkening background for
   nested collapsible expressions.

.. _explorer-hover:
.. describe:: hover: false

   This switches on the Hover highlighter that highlights collapsible
   sub-expression when hovering over them with a the mouse pointer.

   Note, that having both ``'hover'`` and ``'flame'`` set to true can lead to
   unexpected side-effects.
              
.. _explorer-treeColoring:
.. describe:: treeColoring: false

   This setting enables tree coloring, by which expressions are visually
   distinguished by giving neighbouring symbols different, ideally contrasting
   foreground colors.
              

Magnification Options
^^^^^^^^^^^^^^^^^^^^^

.. _explorer-magnification:
.. describe:: magnification: 'None'

   This option specifies a particular magnifier for enlarging
   sub-expressions. Choices are ``'None'``, ``'Keyboard'``, and ``'Mouse'``.
              

.. _explorer-magnify:
.. describe:: magnify: '400%'

   This gives the magnification factor (as a percent) to use for the zoomed
   sub-expression when zoomed sub-expressions are being displayed during
   expression exploration.  The default is 400%.

.. _explorer-keyMagnifier:
.. describe:: keyMagnifier: false

   Switches on zooming of sub-expressions during keyboard exploration of an
   expression.
              
.. _explorer-mouseMagnifier:
.. describe:: mouseMagnifier: false

   Switches on zooming of sub-expressions by hovering with the mouse
   pointer.
              
   Note, using both ``'keyMagnifier'`` and ``'mouseMagnifier`` together can lead
   to unwanted side-effect.

.. _explorer-align:
.. describe:: align: 'top'

   This setting tells where to place the zoomed version of the
   selected sub-expression, when zoomed sub-expressions are being
   displayed during expression exploration.

Semantic Info Options
^^^^^^^^^^^^^^^^^^^^^

Semantic information explorers are a feature that displays some semantic
information of a sub-expression when hovering over it with the mouse
pointer. Note, multiple information explorers work well together.

.. _explorer-infoType:
.. describe:: infoType: false

   Activates an explorer that investigates the semantic type of sub-expressions.
   The type is an immutable property of an expression, that is independent of
   its particular position in a formula. Note, however that types can change
   depending on subject area of a document.

.. _explorer-infoRole:
.. describe:: infoRole: false

   Activates an explorer to present the semantic role of a sub-expression, which
   is dependent on its context in the overall expression.

.. _explorer-infoPrefix:
.. describe:: infoPrefix: false

   Activates explorer for prefix information, which pertains to the position of
   a sub-expression. Examples are ``'exponent'``, ``'radicand'``, etc. These
   would also be announced during interactive exploration with speech output.
              
   For more details on these concepts, see also the documentation of the
   `Speech Rule Engine <https://speechruleengine.org>`__.

.. note::

   While multiple keyboard-based exploration techniques work well together and
   can be easily employed simultaneously, switching on multiple mouse-based
   exploration tools can lead to unexpected interactions of the tools and often
   unpredictable side effects.

.. _assistive-mml-options:

Assisitve-MML Extension Options
===============================

This extension adds visually hidden MathML to MathJax's output that
can be voiced by some screen readers.  See the
:ref:`screenreader-support` section for more details on how this
works.

The `assisitive-mml` extension is included in all the combined
components, and is active by default, so screen reader users will not
need to do anything to activate it.  There is a menu item that
controls whether to insert the assistive MathML, so visual users can
turn it off if they wish.

The extension adds an action to the document's default
:ref:`renderActions <document-renderActions>` object that does the
MathML insertion.  You can disable that by using the following
configuration.


.. code-block:: javascript

   MathJax = {
     options: {
       enableAssistiveMml: false
     }
   };


|-----|
.. _menu-options:

###########################
/C. Contextual Menu Options
###########################

The `ui/menu` component implements the contextual menu that you get
when you right-click (or control-click) on a typeset expression.  The
settings in the menu are "sticky", which means that they are saved
from page to page and session to session (though they web-site
specific, so each web site has its own saved settings).

As a page author, you can alter the default settings of the menu by
using the ``menuOptions`` block of the ``options`` section of your
MathJax configuration, as described below.

The `ui/menu` component adds a render action called ``addMenu`` that
attaches the menu event handlers to the typeset output. (It also adds
a second render action called ``checkLoading`` that mediates the
loading of extensions needed by the contextual menu.  For example,
when the assistive :ref:`explorer-component` component is first
activated, MathJax may need to load the `a11y/explorer` component;
this render action makes sure that has happened before any math is
typeset.)

If you want to disable the contextual menu, you can set the
:attr:`enableMenu` option to ``false``:

-----

The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      options: {
        enableMenu: true,          // set to false to disable the menu
        menuOptions: {
          settings: {
            texHints: true,        // put TeX-related attributes on MathML
            semantics: false,      // put original format in <semantic> tag in MathML
            zoom: 'NoZoom',        // or 'Click' or 'DoubleClick' as zoom trigger
            zscale: '200%',        // zoom scaling factor
            renderer: 'CHTML',     // or 'SVG'
            alt: false,            // true if ALT required for zooming
            cmd: false,            // true if CMD required for zooming
            ctrl: false,           // true if CTRL required for zooming
            shift: false,          // true if SHIFT required for zooming
            scale: 1,              // scaling factor for all math
            inTabOrder: true,      // true if tabbing includes math

            assistiveMml: true,    // true if hidden assistive MathML should be generated for screen readers
            collapsible: false,    // true if complex math should be collapsible
            explorer: false,       // true if the expression explorer should be active
          },
          annotationTypes: {
            TeX: ['TeX', 'LaTeX', 'application/x-tex'],
            StarMath: ['StarMath 5.0'],
            Maple: ['Maple'],
            ContentMathML: ['MathML-Content', 'application/mathml-content+xml'],
            OpenMath: ['OpenMath']
          }
        }
      }
    };

-----


Option Descriptions
===================

.. _menu-enableMenu:
.. describe:: enableMenu: true

   This controls whether the MathJax contextual menu will be added to
   the typeset mathematics or not.
   
.. _menu-settings:
.. describe:: settings: {...}

   These settings give the default menu settings for the page, though
   a user can change them using the menu.  These are described in the
   comments in the example above.

.. _menu-annotationTypes:
.. describe:: annotationTypes: {...}

   These are the settings for the "Annotation" submenu of the "Show
   Math As" menu. If the ``<math>`` root element has a ``<semantics>``
   child that contains one of the specified annotation formats, the
   source will be available via the "Show Math As" and "Copy to
   Clipboard" menus. Each format has a list of possible encodings. For
   example, the line

   .. code-block:: javascript
                   
      TeX: ['TeX', 'LaTeX', 'application/x-tex']

   maps an annotation with an encoding of ``TeX``, ``LaTeX``, or
   ``application/x-tex`` to the "TeX" entry in the "Annotation"
   sub-menus.

-----


Developer Options
=================

.. code-block:: javascript

    MathJax = {
      options: {
        MenuClass: Menu,
        menuOptions: {
          jax: {
            CHTML: null,
            SVG: null
          }
        }
      }
    };

.. _menu-MenuClass:
.. describe:: menuClass:  Menu

   The ``Menu`` object class to use for creating the menu.  This
   allows you to create a subclass of ``Menu`` and pass that to
   the document in pace of the default one.

.. _menu-jax:
.. describe:: jax: {CHTML: null, SVG: null}

   This lists the output jax instances to be used for the different
   output formats.  These will get set up automatically by the menu
   code if you don't specify one, so it is only necessary to set these
   if you want to manage the options specially.

|-----|
.. _safe-options:

##########################
/C. Safe Extension Options
##########################

The `ui/safe` component provides a means of filtering the various
attributes of the mathematics on the page so that certain limitations
on their content is enforced.  This allows you to prevent
``javascript:`` or ``data:`` URLs from appearing in :attr:`href`
attributes, for example, which would otherwise cause potential
security issues.

All mathematics processed by MathJax is converted into an internal
MathML structure, regardless of its initial format in the page.  The
`ui/safe` extension works by walking the internal MathML tree for the
mathematics and checking the attributes of the nodes in the tree to
maker sure they comply with the restrictions you specify.

To load the `ui/safe` extension, add ``'ui/safe'`` to the ``load``
array of the ``loader`` block of your MathJax configuration.

.. code-block:: javascript

   window.MathJax = {
     loader: {load: ['ui/safe']},
   };

The `ui/safe` extension can filter several classes of information:
URLs, class names, css IDs, and css style declarations.  The filtering
for these can each be set to one of three different values: ``'all'``,
``'safe'`` or ``'none'``.  When set to ``'all'`` no filtering is
performed (all values are allowed); when set to ``'none'`` the value
is always cleared (no value can be set for that attribute); and when
set to ``'safe'`` the values are filtered using additional criteria
given in the options, as listed below.

-----


The Configuration Block
=======================

.. code-block:: javascript

    MathJax = {
      options: {
        safeOptions: {
          allow: {
            //
            //  Values can be "all", "safe", or "none"
            //
            URLs:    'safe',   // safe are in safeProtocols below
            classes: 'safe',   // safe start with mjx- (can be set by pattern below)
            cssIDs:  'safe',   // safe start with mjx- (can be set by pattern below)
            styles:  'safe'    // safe are in safeStyles below
          },
          //
          //  Which URL protocols are allowed
          //
          safeProtocols: {
            http: true,
            https: true,
            file: true,
            javascript: false,
            data: false
          },
          //
          //  Which styles are allowed
          //
          safeStyles: {
            color: true,
            backgroundColor: true,
            border: true,
            cursor: true,
            margin: true,
            padding: true,
            textShadow: true,
            fontFamily: true,
            fontSize: true,
            fontStyle: true,
            fontWeight: true,
            opacity: true,
            outline: true
          },
          lengthMax: 3,                           // Largest padding/border/margin, etc. in em's
          scriptsizemultiplierRange: [.6, 1],     // Valid range for scriptsizemultiplier
          scriptlevelRange: [-2, 2],              // Valid range for scriptlevel
          classPattern: /^mjx-[-a-zA-Z0-9_.]+$/,  // Pattern for allowed class names
          idPattern: /^mjx-[-a-zA-Z0-9_.]+$/,     // Pattern for allowed ids
          dataPattern: /^data-mjx-/               // Pattern for data attributes
        }
      }
    };

-----


Option Descriptions
===================

.. _safe-allow:
.. describe:: allow: {...}

   These settings control what level of filtering to perform for each
   of the categories provided.  When set to ``'all'`` no filtering is
   performed (all values are allowed); when set to ``'none'`` the
   value is always cleared (no value can be set for that attribute);
   and when set to ``'safe'`` the values are filtered using additional
   criteria given in the remaining options.

.. _safe-safeProtocols:
.. describe:: safeProtocols: {...}

   This object controls which internet protocols are allowed to be
   used in URLs within the mathematics (in :attr:`href` and
   :attr:`src` attributes).  A protocol whose value is give as
   ``true`` will be allowed, and one given as ``false`` will not be.
   For example, the default is to allow ``http:``, ``https:``, and
   ``file:`` protocols, but not ``javascript:`` or ``data:``
   protocols.  A protocol that is not listed is considered to be
   ``false``.

.. _safe-safeStyles:
.. describe:: safeStyles: {...}

   This object specifies which CSS style properties are allowed to be
   specified in the :attr:`style` attribute of a MathML node.  When
   set to ``true`` that style (and any sub-styles of the style) are
   allowed; when ``false`` or not listed, the style is not allowed to
   be specified.  For example, since :attr:`border` is ``true``, the
   :attr:`style` attribute can include :attr:`border`,
   :attr:`border-top`, :attr:`border-top-width`, and so on.  Some
   style values may be further filtered based on other configuration
   options.

.. _safe-lengthMax:
.. describe:: lengthMax: 3

   This specifies the largest dimension allowed for styles like
   :attr:`padding`, :attr:`border`, :attr:`margin`, etc. These are
   limited in order to prevent users from making borders that are
   gigantic, for example.  The values of these attributes must have
   absolute value less than this value (in ems).
     
.. _safe-scriptsizemultiplierRange:
.. describe:: scriptsizemultiplierRange: [.6, 1]

   This specifies the range of values allowed for the
   :attr:`scriptsizemultiplier` MathML attribute (for ``<math>`` and
   ``<mstyle>`` nodes).  These are filtered to prevent users from
   making super- and subscripts too large (or too small).

.. _safe-scriptlevelRange:
.. describe:: scriptlevelRange: [-2, 2]

   This specifies the range of values allowed for the
   :attr:`scriptlevel` MathML attribute (for ``<math>`` and
   ``<mstyle>`` nodes).  These are filtered to prevent users from
   making text that is too large (via negative :attr:`scriptlevel`) or
   too small (via large :attr:`scriptlevel`).

.. _safe-classPattern:
.. describe:: classPattern: /^mjx-[-a-zA-Z0-9_.]+$/

   This gives a regular expression used to determine if a class name
   is allowed to be specified.  The default is to allow names starting
   with ``mjx-`` and containing letters, numbers, minus, period, and
   underscore.

.. _safe-idPattern:
.. describe:: idPattern: /^mjx-[-a-zA-Z0-9_.]+$/

   This gives a regular expression used to determine what node
   :attr:`id` values are allowed to be specified.  The default is to
   allow ids starting with ``mjx-`` and containing letters, numbers,
   minus, period, and underscore.

.. _safe-dataPattern:
.. describe:: dataPattern: /^data-mjx-/

   This gives a regular expression used to determine what :attr:`data-`
   attribute names are allowed to be specified.  The default is to
   allow :attr:`data-` attributes whose names begin with ``data-mjx-``.

-----


Developer Options
=================

.. code-block:: javascript

    MathJax = {
      options: {
        safeOptions: {
          //
          //  CSS styles that have Top/Right/Bottom/Left versions
          //
          styleParts: {
            border: true,
            padding: true,
            margin: true,
            outline: true
          },
          //
          //  CSS styles that are lengths needing max/min testing
          //    A string value means test that style value;
          //    An array gives [min,max] in em's
          //    Otherwise use [-lengthMax,lengthMax] from above
          //
          styleLengths: {
            borderTop: 'borderTopWidth',
            borderRight: 'borderRightWidth',
            borderBottom: 'borderBottomWidth',
            borderLeft: 'borderLeftWidth',
            paddingTop: true,
            paddingRight: true,
            paddingBottom: true,
            paddingLeft: true,
            marginTop: true,
            marginRight: true,
            marginBottom: true,
            marginLeft: true,
            outlineTop: true,
            outlineRight: true,
            outlineBottom: true,
            outlineLeft: true,
            fontSize: [.707, 1.44]
          }
        }
      }
    };

.. _safe-styleParts:
.. describe:: styleParts: {...}

   This object indicates which safe styles have
   ``Top``/``Right``/``Bottom``/``Left`` versions (so that the
   sub-parts can be properly checked).  If you extend the
   :attr:`safeStyles` to include others that have these four
   sub-properties, be sure to add them here.

.. _safe-styleLengths:
.. describe:: styleLengths: {...}

   This object lists the styles that are lengths that need to be
   tested.  A string value means test that style's value (e.g.,
   :attr:`borderTop` is set to ``'borderTopWidth'``, so the border's
   width is tested).  An array value gives the minimum and maximum
   value (in ems) that the property can have, and ``true`` means use
   ``[-lengthMax, lengthMax]`` using the :attr:`lengthMax` option
   listed above.


|-----|
.. _startup-loader-options:

##############################
/C. Startup and Loader Options
##############################

MathJax's components system is based on two tools that handler loading
the various components and setting up the objects and methods needed
to use the loaded components.  They both use options to control their
actions, as described below.

.. toctree::
    :maxdepth: 1

    loader
    startup

-----

These modules use the global :data:`MathJax` object to determine what
you want loaded, and alter that object to include the methods and
objects that they set up.  The initial value of :data:`MathJax` is
saved as :attr:`MathJax.config`, and other properties are added to
:data:`MathJax` depending on the components that get loaded.  For
example, the `startup` component adds :meth:`MathJax.startup`, which
contains the objects that the `startup` module creates, like the input
and output jax, the math document object, the DOM adaptor, and so on.
See the :ref:`MathJax API <mathjax-api>` documentation for more
information.

The :data:`MathJax` variable can also contain configuration blocks
intended for individual components when they are loaded.  For example,
it can have a ``tex`` block to configure the :ref:`input/tex
<tex-input>` component.  See :ref:`configuration` for more details.

Note that you must set up the global :data:`MathJax` object **before**
loading MathJax itself.  If you try to that afterward, you will
overwrite the :data:`MathJax` variable, and all the values that
MathJax has set in them.  See the :ref:`configure-after-load` section
for more about how to change the configuration after MathJax is loaded
if you need to do that.

|-----|
.. _loader-options:

##################
/C. Loader Options
##################

The `loader` component is the one responsible for loading the
requested MathJax components.  It is configured using the ``loader``
block in your MathJax configuration object.  The ``loader`` block can
also contain sub-blocks of configuration options for individual
components, as described below in :ref:`loader-component-options`.

-----

The Configuration Block
=======================

In the example below, :data:`Loader` represents the
:attr:`MathJax.loader` object, for brevity.

.. code-block:: javascript

    MathJax = {
      loader: {
        load: [],                                    // array of components to load
        ready: Loader.defaultReady.bind(Loader),     // function to call when everything is loaded
        failed: function (error) {                   // function to call if a component fails to load
          console.log(`MathJax(${error.package || '?'}): ${error.message}`);
        },
        paths: {mathjax: Loader.getRoot()},          // the path prefixes for use in specifying components
        source: {},                                  // the URLs for components, when defaults aren't right
        dependencies: {},                            // arrays of dependencies for each component
        provides: {},                                // components provided by each component
        require: null,                               // function to use for loading components
        pathFlters: []                               // functions to use to process package names
      }
    };

-----


Option Descriptions
===================

.. _loader-load:
.. describe:: load: []

   This array lists the components that you want to load.  If you are
   using a combined component file, you may not need to request any
   additional components.  If you are using the :ref:`startup-component`
   component explicitly, then you will need to list all the components
   you want to load.

.. _loader-ready:
.. describe:: ready: MathJax.loader.defaultReady.bind(MathJax.loader)

   This is a function that is called when all the components have been
   loaded successfully.  By default, it simply calls the
   :ref:`startup-component` component's :ref:`ready() <startup-ready>`
   function, if there is one.  You can override this with your own
   function, can call :meth:`MathJax.loader.defaultReady()` after
   doing whatever startup you need to do.  See also the
   :ref:`loader-component-options` section for how to tie into
   individual components being loaded.

.. _loader-failed:
.. describe:: failed: (error) => console.log(`MathJax(${error.package || '?'}): ${error.message}`)}

   This is a function that is called if one or more of the components
   fails to load properly.  The default is to print a message to the
   console log, but you can override it to trap loading errors in
   MathJax components.  See also the :ref:`loader-component-options`
   section below for how to trap individual component errors.

.. _loader-paths:
.. describe:: paths: {mathjax: Loader.getRoot()}

   This object links path prefixes to their actual locations.  By
   default, the ``mathjax`` prefix is predefined to be the location
   from which the MathJax file is being loaded.  You can use
   ``[mathjax]/...`` to identify a component, and this prefix is
   prepended automatically for any that doesn't already have a
   prefix.  For example, ``input/tex`` will become
   ``[mathjax]/input/jax`` automatically.

   When the TeX :ref:`tex-require` extension is loaded, an additional
   ``tex`` path is created in order to be able to load the various TeX
   extensions.

   You can define your own prefixes, for example,

   .. code-block:: javascript

      MathJax = {
        loader: {
          paths: {custom: 'https://my.site.com/mathjax'},
          load: ['[custom]/myComponent']
        }
      };

   which defines a ``custom`` prefix that you can used to access
   custom extensions.  The URL can even be to a different server than
   where you loaded the main MathJax code, so you can host your own
   custom extensions and still use a CDN for the main MathJax code.

   You can define as many different paths as you need.  Note that
   paths can refer to other paths, so you could do

   .. code-block:: javascript

      MathJax = {
        loader: {
          paths: {
            custom: 'https://my.site.com/mathjax',
            extensions: '[custom]/extensions'
          },
          load: ['[extensions]/myExtension']
        }
      };

   to define the ``extensions`` prefix in terms of the ``custom`` prefix.

.. _loader-source:
.. describe:: source: {}

   This object allows you to override the default locations of
   components and provide a specific location on a
   component-by-component basis.  For example:

   .. code-block:: javascript

      MathJax = {
        loader: {
          source: {
            'special/extension': 'https://my.site.com/mathjax/special/extension.js'
          },
          load: ['special/extension']
        }
      };

   gives an explicit location to obtain the ``special/extension`` component.


.. _loader-dependencies:
.. describe:: dependencies: {}

   This object maps component names to arrays of names of components
   that must be loaded before the given one.  The
   :ref:`startup-component` component pre-populates this object with
   the dependencies among the MathJax components, but you can add your
   own dependencies if you make custom components that rely on others.
   For example, if you make a custom TeX extension that relies on
   another TeX component, you would want to indicate that dependency
   so that if your extension is loaded via ``\require``, for example,
   the loader will automatically load the dependencies first.

   .. code-block:: javascript

      MathJax = {
        loader: {
          source: {
            '[tex]/myExtension: 'https://my.site.com/mathjax/tex/myExtension.js'},
          },
          dependencies: {
            '[tex]/myExtension': ['input/tex-base', '[tex]/newcommand', '[tex]/enclose']
          }
        }
      };

   This would cause the :ref:`tex-newcommand` and :ref:`tex-enclose`
   components to be loaded prior to loading your extension, and would
   load your extension from the given URL even though you may be
   getting MathJax from a CDN.


.. _loader-provides:
.. describe:: provides: {}

   This object indicates the components that are provided by a
   component that may include several sub-components.  For example,
   the `input/tex` component loads the :ref:`tex-newcommand` component
   (and several others), so the ``provides`` object indicates that via

   .. code-block:: javascript

      loader: {
        provides: {
          'input/tex': [
            'input/tex-base',
            '[tex]/ams',
            '[tex]/newcommand',
            '[tex]/noundefined',
            '[tex]/require',
            '[tex]/autoload',
            '[tex]/configmacros'
          ]
        }
      }

   The :ref:`startup-component` component pre-populates this object
   with the dependencies among the MathJax components, but if you
   define your own custom components that include other components,
   you may need to declare the components that it provides, so that if
   another component has one of them as a dependency, that dependency
   will not be loaded again (since your code already includes it).

   For example, if your custom component `[tex]/myExtension` depends
   on the :ref:`tex-newcommand` and :ref:`tex-enclose` components,
   then

   .. code-block:: javascript

      MathJax = {
        loader: {
          source: {
            '[tex]/myExtension: 'https://my.site.com/mathjax/tex/myExtension.js'},
          },
          dependencies: {
            '[tex]/myExtension': ['input/tex-base', '[tex]/newcommand', '[tex]/enclose']
          },
          load: ['input/tex', '[tex]/myExtension']
        }
      };

      will load the `input/tex` component, which provides both
      `input/tex-base` and `[tex]/newcommand`, and then load
      `[tex]/enclose` before loading your `[tex]/myExtension`.

.. _loader-require:
.. describe:: require: null

   This is a function to use for loading components.  It should accept
   a string that is the location of the component to load, and should
   do whatever is needed to load that component.  If the loading is
   asynchronous, it should return a promise that is resolved when the
   component is loaded, otherwise it should return nothing.  If there
   is an error loading the component, it should throw an error.

   If set ``null``, the default is to insert a ``<script>`` tag into
   the document that loads the component.

   For use in `node` applications, set this value to ``require``, which
   will use node's ``require`` command to load components.  E.g.

   .. code-block:: javascript

      MathJax = {
        loader: {
          require: require
        }
      };

.. _loader-pathFilters:
.. describe:: pathFilters: []

   This is an array of functions that are used to process the names of
   components to produce the actual URL used to locate the component.
   There are built-in filters that perform actions like converting the
   prefix ``[tex]`` to the path for the TeX extensions, and adding
   `.js` to the end of the name, and so on.  You can provide your own
   filters if you need to manage the URLs in a different way.  The
   array consists of entries that are either functions that take a
   data object as an argument, or an array consisting of such a
   function and a number representing its priority in the list of
   filters (lower numbers are earlier in the list).  The data object
   that is passed to these functions is

   .. code-block:: javascript

      {
        name: string,            // the current name for the package (this becomes the url in the end)
        original: string,        // the original package name (should not be modified)
        addExtension: boolean,   // true if .js should be added to this name at some stage in the filter list
      }

   The filter can change the `name` value to move it closer to the
   final URL used for loading the given package.  The `original`
   property should be the original name of the package, and should not
   be modified.

   The function should return ``true`` if the `name` should be further
   processed by other filters in the list, and ``false`` to end
   processing with the `name` now representing the final URL for the
   component.

   There are three default filters: one that replaces `name` with its
   value in the ``source`` list, if any; one that normalizes package
   names by adding ``[mathjax]/`` if there is no prefix or protocol
   already, and adding ``.js`` if there is no extension; and one
   that replaced prefixes with their values in the ``paths`` list.
   These have priorities 0, 10, and 20, respectively, and you can use
   priorities (including negative ones) with your own functions to
   insert them into this list in any location.

-----


.. _loader-component-options:

Component Configuration
=======================

In addition to the options listed above, individual components can be
configured in the ``loader`` block by using a sub-block with the
component's name, and any of the options listed below.  For example,

.. code-block:: javascript

   MathJax = {
     loader: {
       load: ['input/tex'],
       'input/tex': {
         ready: (name) => console.log(name + ' ready'),
         failed: (error) => console.log(error.package + ' failed')
       }
     }
   };

which sets up ``ready()`` and ``failed()`` functions to process when
the `input/tex` component is either loaded successfully or fails to load.

.. _loader-component-ready:
.. describe:: ready: undefined

   This is a function that has an argument that is the name of the
   component being loaded, and is called when the component and all
   its dependencies are fully loaded.

   .. _loader-component-failed:
.. describe:: failed: undefined

   This is a function that has an argument that is a ``PackageError``
   object (which is a subclass of ``Error`` with an extra field, that
   being ``package``, the name of the component being loaded).  It is
   called when the component fails to load (and that can be because
   one of its dependencies fails to load).

.. _loader-component-checkReady:
.. describe:: checkReady: undefined

   This is a function that takes no argument and is called when the
   component is loaded, but before the ``ready()`` function is
   called.  It can be used o do post-processing after the component is
   loaded, but before other components are signaled that it is ready.
   For example, it could be used to load other components; e.g., the
   `output/chtml` component can use its configuration to determine
   which font to load, and then load that.  If this function returns a
   promise object, the ``ready()`` function will not be called until
   the promise is resolved.

|-----|
.. _startup-options:

###################
/C. Startup Options
###################

The `startup` component is responsible for creating the objects needed
by MathJax to perform the mathematical typesetting of your pages, and
for setting up the methods you may need to call in order to do that.
It is configured using the ``startup`` block in your configuration
object.

-----

The Configuration Block
=======================

In the example below, :data:`Startup` represents the
:attr:`MathJax.startup` object, for brevity.

.. code-block:: javascript

    MathJax = {
      startup: {
        elements: null,          // The elements to typeset (default is document body)
        typeset: true,           // Perform initial typeset?
        ready: Startup.defaultReady.bind(Startup),          // Called when components are loaded
        pageReady: Startup.defaultPageReady.bind(Startup),  // Called when MathJax and page are ready
        document: document,      // The document (or fragment or string) to work in
        invalidOption: 'warn',   // Are invalid options fatal or produce an error?
        optionError: OPTIONS.optionError,  // Function used to report invalid options
        input: [],               // The names of the input jax to use from among those loaded
        output: null,            // The name for the output jax to use from among those loaded
        handler: null,           // The name of the handler to register from among those loaded
        adaptor: null            // The name for the DOM adaptor to use from among those loaded
      }
    };

-----


Option Descriptions
===================

.. _startup-elements:
.. describe:: elements: null

   This is either ``null`` or an array of DOM elements whose contents
   should be typeset.  The elements can either be actual DOM elements,
   or strings that give CSS selectors for the elements to typeset.

.. _startup-typeset:
.. describe:: typeset: true

   This determines whether the initial typesetting action should be
   performed when the page is ready.

.. _startup-ready:
.. describe:: ready: MathJax.startup.defaultReady.bind(Startup)

   This is a function that is called when MathJax is loaded and ready
   to go.  It is called by the :ref:`loader-component` when all the
   components are loaded.  The default action is to create all the
   objects needed for MathJax, and set up the call to the
   :meth:`pageReady()` function below.  You can override this function
   if you want to modify the setup process; see :ref:`startup-action`
   for more details.  Note that this function may be called before the
   page is complete, so unless you are modifying the objects created
   by the `startup` module, replacing :meth:`pageReady()` may be the
   better choice.

.. _startup-pageReady:
.. describe:: pageReady: MathJax.startup.defaultPageReady.bind(Startup)

   This is a function that is called when MathJax is ready to go and
   the page is ready to be processed.  The default action is to
   perform the initial typesetting of the page and return the promise
   that resolves what that is complete, but you can override it to do
   whatever you would like, though you should return the promise from
   the :meth:`MathJax.startup.defaultPageReady()` function if you call
   it.  See :ref:`startup-action` for more details and examples of how
   to do this.

.. _startup-document:
.. describe:: document: document

   This is the document (or fragment or string of serialized HTML)
   that you want to process.  By default (for in-browser use) it is
   the browser document.  When there is no global :data:`document`
   variable, it is an empty HTML document.

.. _startup-invalidOption:
.. describe:: invalidOption: 'warn'   // or 'fatal'

   This determines whether an invalid option will cause a fatal error
   (when set to ``'fatal'``) that stops MathJax from running, or a
   warning (when set to ``'warn'``) that allows MathJax to go on.
   Prior to version 3.2, invalid options were fatal, but this option
   now allows control over that behavior.

.. _startup-optionError:
.. describe:: optionError: OPTIONS.optionError

   This option gives a function that is called whenever there is an
   invalid option provided by the user.  It takes two string
   arguments, the first being the message, and the second being the
   name of the invalid option.  The default function looks at the
   ``invalidOption`` value and if it is ``'fatal'`` it throws an error
   using the given message, otherwise it logs the message to the
   browser console, allowing further options to be processed.

.. _startup-input:
.. describe:: input: []

   This is an array of names of input processors that you want to use,
   from among the ones that have been loaded.  So if you have loaded
   the code for several input jax, but only want to use the ``tex``
   input jax, for example, set this to ``['tex']``.  If set to an
   empty array, then all loaded input jax are used.

.. _startup-output:
.. describe:: output: null

   This is the name of the output processor that you want to use,
   from among the ones that have been loaded.  So if you have loaded
   the code for several output jax, but only want to use the ``svg``
   output jax, for example, set this to ``'svg'``.  If set to ``null``
   or an empty string, then the first output jax that is loaded will
   be used.

.. _startup-handler:
.. describe:: handler: null

   This is the name of the document handler that you want to use,
   from among the ones that have been loaded.  Currently, there is
   only one handler, the HTML handler, so unless you are creating your
   own handlers, leave this as ``null``.

.. _startup-adaptor:
.. describe:: adaptor: null

   This is the name of the DOM adaptor that you want to use, from
   among the ones that have been loaded.  By default the components
   load the ``browser`` adaptor, but you can load the ``liteDOM``
   adaptor for use in `node` applications; if you do, it will set this
   value so that it will be used automatically.

|-----|
.. _typeset-math:

##############################
/A. MathJax in Dynamic Content
##############################

**This page is under construction**

If you are writing a dynamic web page where content containing
mathematics may appear after MathJax has already typeset the rest of
the page, then you will need to tell MathJax to look for mathematics
in the page again when that new content is produced.  To do that, you
need to use the :meth:`MathJax.typeset()` method.  This will cause
MathJax to look for unprocessed mathematics on the page and typeset
it, leaving unchanged any math that has already been typeset.

This command runs synchronously, but if the mathematics on the page
uses ``\require`` or causes an extension to be auto-loaded (via the
:ref:`tex-autoload` component), this will cause the typeset call to
fail.  In this case, you should use :meth:`MathJax.typesetPromise()`
instead.  This returns a promise that is resolves when the typesetting
is complete.

You should not start more than one typesetting operation at a time, so
if you are using :meth:`MathJax.typesetPromise()` and will be calling
it more than once, you may want to retain the promise it returns and
chain your subsequent typeset calls to it.  See the
:ref:`typeset-async` section for more details.

More information will be coming to this section in the future.

|-----|
.. _custom-extensions:

#####################
/A. Custom Extensions
#####################

**This page is under construction**

See the :ref:`custom-component` section for an example of building
custom extensions to MathJax.

See also the `MathJax Web Demos
<https://github.com/mathjax/MathJax-demos-web#customization>`__
repository for some customization examples for use in the browser, and
the `MathJax Node Demos
<https://github.com/mathjax/MathJax-demos-node/tree/master/custom-tex-extension>`__
for a custom extension in node.

More information will be coming to this section in the future.

|-----|
.. _processing-model:

################################
/A. The MathJax Processing Model
################################

**This page is under construction**

|-----|
.. _synchronization:

########################################
/A. Synchronizing your code with MathJax
########################################

**This page is under construction**

MathJax version 2 used `queues`, `callbacks`, and `signals` as a means
of coordinating your code with the actions of MathJax.  Version 3 uses
the more modern tool know as a `promise
<https://developers.google.com/web/fundamentals/primers/promises>`__
to synchronize your code with MathJax.
See the :ref:`typeset-async` section for examples of typesetting using
promises.

In addition to promises, MathJax version 3 introduces
a :ref:`renderActions <document-renderactions>` configuration option
that provides a means of linking into MathJax's processing pipeline.
This is a priorities list of functions to call during processing,
which includes the default actions of finding the math in the page,
compiling it into the internal format, getting font metrics for the
surrounding text, typesetting the mathematics, inserting the math into
the page, adding menu actions, and so on.  You can insert your own
functions into this chain to add more functionality, or even remove
the existing steps to trim down what MathJax does.

More information will be coming to this section in the future.

|-----|
.. _mathjax-api:

#########################
/A. Using the MathJax API
#########################

**This page is under construction**


.. toctree::
   :maxdepth: 1

   components
   direct

|-----|
.. _api-components:

#####################
/A. The Component API
#####################

**This page is under construction**

|-----|
.. _api-direct:

##################
/A. The Direct API
##################

**This page is under construction**

|-----|
.. _FAQ:

######################################
/A. MathJax Frequently Asked Questions
######################################

* :ref:`faq-license`
* :ref:`faq-slow-no-math`
* :ref:`faq-ie-support`
* :ref:`faq-ie-meta`
* :ref:`faq-size-issues`
* :ref:`faq-safe`
* :ref:`faq-content-mml`
* :ref:`faq-create-math`
* :ref:`faq-report-issue`
* :ref:`faq-missing-macro`
* :ref:`faq-user-macros`

-----


.. _faq-license:

Which license is MathJax distributed under?
===========================================

MathJax is distributed under the `Apache License, Version
2.0 <https://github.com/mathjax/MathJax/blob/master/LICENSE>`__.


.. _faq-slow-no-math:

Will MathJax make my page load slower even if there's no math?
==============================================================

It depends on how you have configured and loaded MathJax.  The
combined component files like `tex-chtml.js` contain a full copy of
MathJax and all the components needed for it to process the given
input and output format, including all the font data (but not the
actual fonts themselves).  So these files can be quite large, and can
take some time to download.  On the other hand, it is a single file
(unlike in version 2, where multiple files needed to be loaded), so
there should not be the delays associated with establishing multiple
connections to a server.  If you use the `async` attribute on the
script that loads MathJax, that allows the browser to put off loading
MathJax until the rest of the page is ready, so that can help speed up
your initial page loading as well.


.. _faq-ie-support:

Mathematics is not rendering properly in IE. How do I fix that?
===============================================================

Currently, MathJax version 3 only supports IE11, so if you are using
an earlier version, you will need to update your copy, or use a
different browser.

If you are using IE11, then please open the MathJax homepage at
`www.mathjax.org <https://www.mathjax.org/#samples>`__ in IE to see if
that loads correctly.  If the MathJax website does not display
mathematics properly, there may be an issue with your security
settings in Internet Explorer. Please check the following settings:

-  "Active Scripting" under the Scripting section should be enabled, as
   it allows JavaScript to run.
-  "Run ActiveX controls and Plugins" should be enabled (or prompted) in
   the "ActiveX Controls and Plugins" section.
-  "Script ActiveX controls marked safe for scripting" needs to be
   enabled (or prompted) in the same "ActiveX Controls and Plugins"
   section. Note that it requires a restart of IE if you change this
   setting.
-  "Font Download" has to be enabled (or prompted) in the "Downloads"
   section. This is required for MathJax to use web-based fonts for
   optimal viewing experience.

You may need to select Custom Level security to make these changes. If
you have verified that the above settings are correct, tried clearing
your cache and restarting IE.  If you are still experiencing problems
with displaying mathematics on ``www.mathjax.org``, we would
appreciate it if you reported the problem to the `MathJax issue
tracker <https://github.com/mathjax/MathJax/issues>`__ so we can look
into it.  See the section on `issue tracking <#issue-tracking>`__ for
details.

If the MathJax site *does* render properly, this indicates that there
may be something wrong with the webpage you were trying to view
initially.  If you manage that website, then make sure that it is
using :ref:`the latest version of MathJax <mathjax-CDN>`, and that you have
included the line

   <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

before the script that loads MathJax itself.  If you *don't* manage
the website yourself, you may have to report the issue to the
maintainers of the site in order to have it resolved.


.. _faq-ie-meta:

What should IE's X-UA-Compatible meta tag be set to?
====================================================

We strongly suggest to follow Microsoft's suggestion to use ``IE=edge``. That
is, in the document ``<head>`` include

.. code-block:: html

     <meta http-equiv="X-UA-Compatible" content="IE=edge">

before any other tags in the ``<head>``.  This will force all IE
versions to use their latest engine which is the optimal setting for
MathJax. For more information, see the `Microsoft documentation on
compatibility modes
<https://msdn.microsoft.com/en-us/library/dn384051(v=vs.85).aspx>`__.


.. _faq-size-issues:

Some of my mathematics is too large or too small. How do I get it right?
========================================================================

MathJax renders mathematics dynamically so that formulas and symbols
are nicely integrated into the surrounding text --- with matching font
size, margins, and baseline.  In other words: it should look right. If
your mathematics is too large or too small in comparison to its
surroundings, you may be using the incorrect typesetting
style. Following LaTeX conventions, MathJax supports two typesetting
styles: in-line and "display" equations (one set off from the
paragraph as a separate line). For in-line equations, MathJax tries
hard to maintain the inter-line spacing. This means things like
fractions and roots are vertically compressed, and smaller fonts are
used. Display equations are shown as a separate paragraph and can be
rendered with more space and slightly larger fonts. The standard
delimiters for in-line equations in TeX notation are ``\(...\)``,
while those for display equations are ``$$...$$`` or ``\[...\]``, but
both types of delimiters can be customized. For how to configure
MathJax to scale all mathematics relative to the surrounding text,
check our documentation for :ref:`output-options`.


.. _faq-safe:

My mathematics is private. Is it safe to use MathJax?
=====================================================

Yes. MathJax is JavaScript code that is runs within the user's
browser, so your site's actual content never leaves the browser while
MathJax is rendering. If you are using MathJax from a CDN, it
interacts with a web server to get font data and MathJax code, but
this is all put together in the browser of the reader. If you have
concerns about cross-site scripting, you can access the CDN service
using the secure ``https`` protocol to prevent tampering with the code
between the CDN and a browser; or, if you prefer, you can install
MathJax on your own web server, or for off-line use. MathJax does not
reference scripts from other websites. The MathJax code is, of course,
open source which means that you can `review it and inspect its
integrity <https://github.com/mathjax/MathJax-src>`__.


.. _faq-content-mml:

Does MathJax support Presentation and/or Content MathML?
========================================================

MathML comes in two types: Presentation MathML, which describes what
an equation looks like, and Content MathML, which describes what an
equation means. By default, MathJax works with Presentation MathML and
offers an extension for Content MathML, see :ref:`the documentation on
MathML support <mathml-content-mathml>`, which has not yet been converted to
version 3.

You can also convert your Content MathML expressions to Presentation
MathML using ``xslt``, see for example David Carlisle's `web-xslt
collection <https://github.com/davidcarlisle/web-xslt>`__. A more
detailed explanation of the difference between Content and
Presentation MathML can be found in the module `"Presentation MathML
Versus Content MathML" <https://cnx.org/content/m31620/latest/>`__ at
``cnx.org``.


.. _faq-create-math:

How do I create mathematical expressions for display with MathJax?
==================================================================

MathJax is a method to display mathematics. It is not an authoring
environment, and so you will need another program to create mathematical
expressions. The most common languages for mathematics on the computer
are (La)TeX and MathML, and there are many authoring tools for these
languages.

LaTeX code is essentially plain text, and so you do not need a special program
to write it (although complete LaTeX authoring environments do exist). If
you are not familiar with LaTeX, you will need some determination to
learn and master the language due to its specialized nature and rich
vocabulary of symbols. There are various good tutorials on the net, but
there is no one-size-fits-all best one. A good starting point is the
`TeX User Group <http://www.tug.org/begin.html>`__, or have a look at
the `LaTeX Wiki book <http://en.wikibooks.org/wiki/LaTeX>`__.

`MathML <http://www.w3.org/Math/>`__ is an XML-based web format for
mathematical expressions. MathML3, the latest version, has been an
official W3C recommendation since October 2010. MathML is widely
supported by Computer Algebra Systems and can be created with a choice
of authoring tools, including Microsoft Office with the
`MathType <http://www.dessci.com/en/products/MathType/>`__ equation
editor. A list of software the supports MathML may be found in `The W3C
MathML software list <http://www.w3.org/Math/wiki/Tools>`__.


.. _faq-report-issue:

I ran into a problem with MathJax. How do I report it?
======================================================

See the section on :ref:`reporting-issues` for the
steps to take when you think you have found a bug in MathJax.


.. _faq-missing-macro:

Why doesn't the TeX macro ``\something`` work?
==============================================

It really depends on what ``\something`` is. We have a full list of
the :ref:`tex-commands`. If the command you want
to use is not in this list, you may be able to define a TeX macro for
it yourself, or if you want to get really advanced, you can define
custom JavaScript that implements it (see the :ref:`Custom Extensions
<custom-extension>` section for details).

Keep in mind that MathJax is meant for typesetting **math** on the
web. It only replicates the math functionality of LaTeX and not the
text formatting capabilities.  Any text formatting on the web should
be done in HTML and CSS, not TeX. If you would like to convert full
TeX documents into HTML to publish online, you should use a TeX to
HTML converter like `LaTeXML <http://dlmf.nist.gov/LaTeXML/>`__,
`Tralics <http://www-sop.inria.fr/apics/tralics/>`__, or `tex4ht
<https://tug.org/tex4ht/>`__, but you should
realize that TeX conversion tools are unlikely produce results as good
as controlling the HTML and CSS source yourself.


.. _faq-user-macros:

Does MathJax support user-defined TeX macros?
=============================================

Yes, you can define TeX macros in MathJax the same way you do in LaTeX
with ``\newcommand``, or ``\def``.  An example is
``\newcommand{\water}{{\rm H_{2}O}}``, which will output the chemical
formula for water when you use the ``\water`` command. The
``\renewcommand`` command works as well. You can also store macros in
the MathJax configuration. For more information, see :ref:`the
documentation <tex-commands>`.

|-----|
.. _mathjax-badges:

##################
/A. MathJax Badges
##################

We are proud of the work we have done on MathJax, and we hope you are
proud to use it. If you would like to show your support for the MathJax
project, please consider including one of our "Powered by MathJax" web
badges on your pages that use it.

The MathJax Badges
==================

.. raw:: html

      <table>
      <thead>
      <tr>
      <td>Badge</td>
      <td>HTML to Use</td>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>
      <a href="https://www.mathjax.org/"><br />
      <img title="Powered by MathJax" src="https://www.mathjax.org/badge/badge.gif" border="0" alt="Powered by MathJax" /><br />
      </a>
      </td>
      <td>
      <pre>&lt;a href="https://www.mathjax.org"&gt;
          &lt;img title="Powered by MathJax"
          src="https://www.mathjax.org/badge/badge.gif"
          border="0" alt="Powered by MathJax" /&gt;
      &lt;/a&gt;</pre>
      </td>
      </tr>
      <tr>
      <td>
      <a href="https://www.mathjax.org"><br />
      <img title="Powered by MathJax" src="https://www.mathjax.org/badge/badge-square.png" border="0" alt="Powered by MathJax" /><br />
      </a>
      </td>
      <td>
      <pre>&lt;a href="https://www.mathjax.org"&gt;
          &lt;img title="Powered by MathJax"
          src="https://www.mathjax.org/badge/badge-square.png"
          border="0" alt="Powered by MathJax" /&gt;
      &lt;/a&gt;</pre>
      </td>
      </tr>
      <tr>
      <td>
      <a href="https://www.mathjax.org"><br />
      <img title="Powered by MathJax" src="https://www.mathjax.org/badge/badge-square-2.png" border="0" alt="Powered by MathJax" /><br />
      </a>
      </td>
      <td>
      <pre>&lt;a href="https://www.mathjax.org"&gt;
          &lt;img title="Powered by MathJax"
          src="https://www.mathjax.org/badge/badge-square-2.png"
          border="0" alt="Powered by MathJax" /&gt;
      &lt;/a&gt;</pre>
      </td>
      </tr>
      <tr>
      <td>
      <a href="https://www.mathjax.org"><br />
      <img title="Powered by MathJax" src="https://www.mathjax.org/badge/badge-square-3.png" border="0" alt="Powered by MathJax" /><br />
      </a>
      </td>
      <td>
      <pre>&lt;a href="https://www.mathjax.org"&gt;
          &lt;img title="Powered by MathJax"
          src="https://www.mathjax.org/badge/badge-square-3.png"
          border="0" alt="Powered by MathJax" /&gt;
      &lt;/a&gt;</pre>
      </td>
      </tr>
      </tbody>
      </table>

Thanks to our friends at OER Glue for designing the last two badges.

The MathJax Logo
================

.. raw:: html

      <table>
      <tr>
      <td>
      <a href="https://www.mathjax.org"><br />
      <img title="Powered by MathJax" src="https://www.mathjax.org/badge/mj_logo.png" border="0" alt="Powered by MathJax" /><br />
      </a>
      </td>
      <td>
      <pre>&lt;a href="https://www.mathjax.org"&gt;
	  &lt;img title="Powered by MathJax"
	  src="https://www.mathjax.org/badge/mj_logo.png"
	  border="0" alt="Powered by MathJax" /&gt;
      &lt;/a&gt;</pre>
      </td>
      </tr>
      </table>

Alternative versions
====================

While we do not allow the modification of the badges or the logo, we are
open to requests for different versions.

-  An `SVG version <https://www.mathjax.org/badge/badge-square.svg>`__
   of the square badge is available.
-  Smaller versions of the main logo are available

   -  `96x20 <https://www.mathjax.org/badge/logo2.png>`__
   -  `60x20 <https://www.mathjax.org/badge/mj_logo_60x20.png>`__
   -  `60x12 <https://www.mathjax.org/badge/mj_logo_60x12.png>`__
   -  `60x12 <https://www.mathjax.org/badge/logo_60x12.gif>`__
      (gif)

Rules
=====

We are committed to maintaining the highest standards of excellence for
MathJax, and part of that is avoiding confusion and misleading
impressions; therefore, if you do use our badge or logo, we ask that you
observe these simple rules (for the fine print, see below):

Things You Can Do
-----------------

-  Use the MathJax Logo or Badges in marketing, and other publicity
   materials related to MathJax.
-  Distribute unchanged MathJax products (code, development tools,
   documentation) as long as you distribute them without charge.
-  Describe your own software as "based on MathJax technology", or
   "incorporating MathJax source code" if your software includes
   modified MathJax products.
-  Link to MathJax’s website(s) by using the logos and badges we
   provide.
-  Use MathJax's word marks in describing and advertising your services
   or products relating to a MathJax product, so long as you don't do
   anything that might mislead customers. For example, it's OK if your
   website says, "Customization services for MathJax available here".
-  Make t-shirts, desktop wallpaper, or baseball caps though only for
   yourself and your friends (meaning people from whom you don't receive
   anything of value in return).

Things You Cannot Do
--------------------

-  Alter our logo or badges in any way.
-  Use our logo or badge online without including the link to the
   MathJax home page.
-  Place our logo or badges in such close proximity to other content
   that it is indistinguishable.
-  Make our logo or badges the most distinctive or prominent feature on
   your website, printed material or other content.
-  Use our logo or badges in a way that suggests any type of association
   or partnership with MathJax or approval, sponsorship or endorsement
   by MathJax (unless allowed via a license from us).
-  Use our logo or badges in a way that is harmful, deceptive, obscene
   or otherwise objectionable to the average person.
-  Use our logo or badges on websites or other places containing content
   associated with hate speech, pornography, gambling or illegal
   activities.
-  Use our logo or badges in, or in connection with, content that
   disparages us or sullies our reputation.


And now the fine print:
-----------------------

*The words and logotype "MathJax," the MathJax badges, and any
combination of the foregoing, whether integrated into a larger whole or
standing alone, are MathJax’s trademarks. You are authorized to use our
trademarks under the terms and conditions above, and only on the further
condition that you download the trademarks directly from our website.
MathJax retains full, unfettered, and sole discretion to revoke this
trademark license for any reason whatsoever or for no specified reason.*

|-----|
.. _articles:

##############################
/A. Articles and Presentations
##############################


Articles
========

-  `Towards Universal Rendering in MathJax (W4A 2016)
   <https://dl.acm.org/doi/10.1145/2899475.2899494>`__
   by Davide Cervone, Peter Krautzberger, Volker Sorge, *MathJax*, *2016*
-  `Towards ARIA Standards for Mathematical Markup (DEIMS 2016)
   <https://mathjax.github.io/papers/DEIMS16/deims16.pdf>`__
   by Davide Cervone, Peter Krautzberger, Volker Sorge, *MathJax*, *2016*
-  `Employing Semantic Analysis for Enhanced Accessibility 
   Features in MathJax (ADS, CCNC 2016)
   <https://ieeexplore.ieee.org/document/7444948>`__
   by Davide Cervone, Peter Krautzberger, Volker Sorge, *MathJax*, *2016*
-  `Whitepaper: Towards MathJax v3.0
   <http://mathjax.github.io/papers/towards-v3/towards-mathjax-v3.pdf>`__
   by Peter Krautzberger, Davide Cervone, Volker Sorge, *MathJax*, *2015*
-  `Towards Meaningful Visual Abstraction of Mathematical Notation 
   (MathUI, CICM 2015)
   <https://mathjax.github.io/papers/MathUI15/mathui15.pdf>`__
   by Davide Cervone, Peter Krautzberger, Volker Sorge, *MathJax*, *2016*
-  `MathML forges
   on <http://radar.oreilly.com/2013/11/mathml-forges-on.html>`__
   by Peter Krautzberger, *MathJax*, *2014*
-  `MathJax: A Platform for Mathematics on the Web", Notices of the AMS
   <http://www.ams.org/notices/201202/rtx120200312p.pdf>`__
   by Davide Cervone, *MathJax*, *2012*
-  `Accessible Pages with
   MathJax <https://www.mathjax.org/accessible-pages-with-mathjax/>`__
   by Neil Soiffer *Design Science, Inc.*, *2010*
-  `Mathematics E-learning Community Benefits from
   MathJax <https://www.mathjax.org/mathematics-e-learning-community-benefits-from-mathjax/>`__
   by Hylke Koers, *MathJax*, *2010*
   

Presentations
=============

-  `Barrierereie Mathematik im Netz (in German) <http://pkra.github.io/slides-gaad16/>`__
   by Peter Krautzberger, *MathJax*, *FernUni Hagen, Global Accessibility Awareness Day, 2016*
-  `Evolving Math Web Standards from a Usability Perspective <https://pkra.github.io/slides-JMM16/>`__
   by Peter Krautzberger, Davide Cervone, Volker Sorge, *MathJax*, *2016 Joint Mathematics Meetings in Seattle*
-  `MathJax -- beautiful mathematics on the web <http://pkra.github.io/slides-mathjax/>`__
   by Peter Krautzberger, *MathJax*, *2014*
-  `MathML: math made for the web and beyond <http://pkra.github.io/webinar-slides-aptara/>`__
   by Peter Krautzberger, *MathJax*, *2013*
-  `MathJax: The Past and the Future <http://www.math.union.edu/~dpvc/talks/2013-01-11.jmm/welcome.html>`__
   by `Davide P. Cervone <http://www.math.union.edu/~dpvc/>`__ *2013
   Joint Mathematics Meetings in San Diego*
-  `MathJax from an Author's Point of View <http://www.math.union.edu/~dpvc/talks/2013-01-12.jmm/welcome.html>`__
   by `Davide P. Cervone <http://www.math.union.edu/~dpvc/>`__ *2013
   Joint Mathematics Meetings in San Diego*
-  `MathJax: a JavaScript-based engine for including TeX and MathML in
   HTML <http://www.math.union.edu/~dpvc/talks/2010-01-15.mathjax/>`__
   by `Davide P. Cervone <http://www.math.union.edu/~dpvc/>`__ *2010
   Joint Mathematics Meetings in San Francisco*
-  `MathType, Math Markup, and the Goal of Cut and
   Paste <https://mathjax.github.io/papers/JMM/2010/miner-jmm2010/>`__ by Robert Miner *2010 Joint
   Mathematics Meetings in San Francisco*

|-----|
.. _upgrade-v2:

###########################
/U. Upgrading from v2 to v3
###########################

MathJax v3 is a complete rewrite of MathJax from the ground up (see
:ref:`whats-new-3.0`), and so its internal structure is quite
different from that of version 2.  That means MathJax v3 is **not** a
drop-in replacement for MathJax v2, and upgrading to version 3 takes
some adjustment to your web pages.  The sections below describe the
changes you will need to make, and the most important differences
between v2 and v3.

.. warning::

   If you are using the ``latest.js`` feature of MathJax v2 on a CDN,
   note that this will **not** update to version 3 automatically,
   since there are significant and potentially breaking changes in
   version 3.  There is, however, a bug in ``latest.js`` in versions
   2.7.5 and below; when the current version is 3.0 or higher,
   ``latest.js`` will not use the highest version of 2.x, but instead
   will use the version from which ``latest.js`` has been taken.  For
   example, if you load ``latest.js`` from version 2.7.3, it currently
   is giving you version 2.7.5 as the latest version, when version 3
   is released to the CDN, your pages will revert to using version
   2.7.3 again.  This behavior has been corrected in version 2.7.6, so
   if you change to loading ``latest.js`` from version 2.7.6, you
   should get the latest 2.x version regardless of the presence of
   version 3 on the CDN.

MathJax v3 is still a work in progress; not all features of version
2 have been converted to version 3 yet, and some may not be.  MathJax
v2 will continue to be maintained as we work to move more features
into version 3, but MathJax v2 likely will not see much further
development, just maintenance, once MathJax v3 is fully converted.

* :ref:`v2-configuration-changes`
* :ref:`v2-loading-changes`
* :ref:`v2-api-changes`
* :ref:`v2-jax-changes`
* :ref:`v2-not-available`
* :ref:`v2-not-ported`
* :ref:`v2-contextual-menu-changes`
* :ref:`v2-mathjax-node`
* :ref:`v2-compatibility-example`

-----

.. _v2-configuration-changes:

Configuration Changes
=====================

There are a number of changes in version 3 that affect how MathJax is
configured.  In version 2, there were several ways to provide
configuration for MathJax; in MathJax 3, when you are using
:ref:`MathJax components <web-components>`, there is now only one,
which is to set the :data:`MathJax` global to contain the
configuration information prior to loading MathJax.  In particular,
you no longer call :meth:`MathJax.Hub.Config()`, and this function does
not exist in MathJax v3.  See the section :ref:`configuration` for
more details on how to configure MathJax.

In addition to requiring the use of the :data:`MathJax` global
variable for setting the configuration, the organization of the
configuration options have been changed to accommodate the new
internal structure of MathJax, and some of their names have changed as
well.  To help you convert your existing version 2 configurations to
version 3, we provide a `conversion tool
<https://mathjax.github.io/MathJax-demos-web/convert-configuration/convert-configuration.html>`_
that you can use to obtain a version 3 configuration that is as close
as possible to your current one.

Not all configuration parameters can be converted directly, however.
For some of these, it is because the version 2 features have not yet
been ported to version 3, but for others, the version 2 feature may
simply not exist in the new architecture of version 3.  For example,
MathJax v2 updates the page in phases, first removing the math source
expressions (e.g., the TeX code), then inserts a preview expression
(fast to create, but not as accurately laid out), and then goes back
and produces high-quality typeset versions, which it inserts in chunks
between page updates.  MathJax version 3 does not work that way (it
does not change the page until the math is entirely typeset), and so
the options that control the math preview and the chunking of the
equations for display simply have no counterparts in version 3.

Finally, configurations that change the MathJax code via augmenting
the existing MathJax objects, or that hook into MathJax's processing
pipeline via :meth:`MathJax.Hub.Register.StartupHook()` or one of the
other hook mechanisms will not carry over to version 3.  MathJax v3
does not use the queues, signals, and callbacks that are central to
version 2, so code that relies on them will have to be updated.  See
the :ref:`web-configuration` section for some approaches to these
issues.

-----


.. _v2-loading-changes:

Changes in Loading MathJax
==========================

Just as there are changes in how MathJax is configured, there are also
changes in how MathJax is loaded.  With version 2, you load
``MathJax.js`` and indicate a combined configuration file using
``?config=`` followed by the name of the configuration file.  This
always required at least two files to be loaded (and often more than
that), and the second file was always loaded asynchronously, meaning
MathJax always operated asynchronously.

In version 3, there is no longer a ``MathJax.js`` file, and you load a
combined component file directly.  E.g., you load ``tex-chtml.js`` to
get TeX with CommonHTML output.  This reduces the number of files that
need to be requested, and improves performance.  See
:ref:`loading-mathjax` for more details.

Just as there is no need to use ``?config=`` in version 3, the other
parameters that could be set in this way also are absent from
version 3.  So, for example, you can't set ``delayStartupUntil`` in
the script that loads MathJax.

The startup sequence operates fundamentally differently in version 3
from how it did in version 2.  In version 2, MathJax would begin its
startup process immediately upon MathJax being loaded, queuing action
to perform configuration blocks, load extensions and jax, do the
initial typesetting, and so on.  It was difficult to insert your own
actions into this sequence, and timing issues could occur if you
didn't put your configuration in the right place.

In version 3, synchronization with MathJax is done through ES6
promises, rather than MathJax's queues and signals, and MathJax's
startup process is more straight-forward.  You can insert your own
code into the startup process more easily, and can replace the default
startup actions entirely, if you wish.  The actions MathJax
takes during startup are better separated so that you can pick and
choose the ones you want to perform.  See the :ref:`startup-actions`
section for more details on how to accomplish this.

-----


.. _v2-api-changes:

Changes in the MathJax API
==========================

Because the internals have been completely redesigned, its :ref:`API
<api>` has changed, and so if you have been calling MathJax functions,
or have modified MathJax internals by augmenting the existing MathJax
objects, that code will no longer work with version 3, and will have
to be modified.  Some of the more important changes are discussed
below.

* The :meth:`MathJax.Hub.Typeset()` function has been replaced by the
  :meth:`MathJax.typesetPromise()` and :meth:`MathJax.typeset()`
  functions.  In fact, the :attr:`MathJax.Hub` has been removed
  entirely.

..

* The queues, signals, and callbacks that are central to version 2
  have been replaced by ES6 promises in version 3.  In particular, you
  can use :attr:`MathJax.startup.promise` as a replacement for
  :meth:`MathJax.Hub.Queue()`.  See the :ref:`typeset-async` section
  for how this is done.  See the :ref:`v2-compatibility-example` below
  for code that may make it possible for you to use your version 2
  code in version 3.

..

* The :meth:`MathJax.Hub.Register.StartupHook()` and other related
  hooks have been replaced by ``ready()`` functions in the
  :ref:`loader-component` component.  So code that relies on these
  hooks to alter MathJax need to be reworked.  The
  :ref:`startup-actions` section shows some mechanisms that can be
  used for this.

..

* Version 2 configurations could include an :meth:`Augment` block that
  could be used to add (or override) methods and data in the main
  MathJax objects.  In version 3, this should be handled through
  subclassing the MathJax object classes, and passing the new classes
  to the objects that use them.  This can be done during the `startup`
  component's ``ready()`` function, when the MathJax classes are
  available, but before any of their instances have been created.  See
  the :ref:`startup-actions` section for some ideas on how this can be
  done.

..

* The ``Augment`` configuration blocks and :meth:`StartupHooks()`
  function described above could be used in version 2 to extend
  MathJax's capabilities, and in particular, to extend the TeX input
  jax by adding new javascript-based macros.  These version-2
  mechanisms are not available in version 3; instead, TeX extensions
  are more formalized in version 3.  See the :ref:`custom-component`
  section for an example of how this can be done.

..

.. _math-script-example:

* In version 2, the mathematics that is located by MathJax is removed
  from the page and stored in special ``<script>`` tags within the
  page.  These are not visible to the reader, but mark the location
  and content of the math on the page.  It was possible in version 2
  for programs to create these ``<script>`` tags themselves, avoiding
  the need for MathJax to look for math delimiters, and for the page
  author to encode HTML special characters like ``<``, ``>``, and
  ``&`` in their mathematics.  Version 3 does not alter the document
  in this way, and does not store the math that it locates in tags in
  the page.  Instead, it keeps an external list of math objects (of the
  ``MathItem`` class).  So if you wish to use such scripts to store
  the math in the page initially, you can replace the ``find`` action
  in the :ref:`renderActions <document-renderActions>` list to use a
  function that locates the scripts and creates the needed
  ``MathItem`` objects.  For example

  .. code-block:: javascript

     MathJax = {
       options: {
         renderActions: {
           find: [10, function (doc) {
             for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
               const display = !!node.type.match(/; *mode=display/);
               const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
               const text = document.createTextNode('');
               node.parentNode.replaceChild(text, node);
               math.start = {node: text, delim: '', n: 0};
               math.end = {node: text, delim: '', n: 0};
               doc.math.push(math);
             }
           }, '']
         }
       }
     };

  should find the scripts that MathJax version 2 normally would have
  created.

  Note that this will *replace* the standard ``find`` action that
  looks for math delimiters with this one that looks for the MathJax
  v2 script tags instead.  If you want to do *both* the original
  delimiter search *and* the search for script tags, then change the
  ``find:`` above to ``findScript:`` so that it doesn't replace the
  default ``find`` action.  That way, both actions will occur.

-----


.. _v2-jax-changes:

Changes in Input and Output Jax
===============================

The input and output processors (called "jax") are core pieces of
MathJax.  All three input processors from version 2 are present in
version 3, but the :ref:`AsciiMath <asciimath-support>` processor has
not been fully ported to version 3, and currently consists of the
legacy version 2 code patched onto the version 3 framework.  This is
larger and less efficient than a full version 3 port, which should be
included in a future release.

In version 2, MathJax used preprocessors (`tex2jax`, `mml2jax`,
`asciimath2jax`, and `jsMath2jax`) to locate the mathematics in the
page and prepare it for the input jax.  There was really no need to
have these be separate pieces, so in version 3, these have been folded
into their respective input jax.  That means that you don't load them
separately, and the configuration options of the preprocessor and
input jax have been combined.  For example, the ``tex2jax`` and
``TeX`` options now both occur in the ``tex`` configuration block.

MathJax version 2 included six different output jax, which had been
developed over time to serve different purposes.  The original
HTML-CSS output jax had the greatest browser coverage, but its output
was browser-dependent, its font detection was fragile, and it was the
slowest of the output processors.  The CommonHTML output jax was a
more modern remake of the HTML output that was both browser
independent, and considerably faster.  The SVG output jax produced SVG
images rather than HTML DOM trees, and did not require web fonts in
order to display the math, so the results could be made
self-contained.  MathJax version 3 includes the CommonHTML and SVG
output jax, but has dropped the older, slower HTML-CSS output format.

MathJax 2 also included an output format that produced MathML for
those browsers that support it.  Since only Firefox and Safari
currently implement MathML rendering (with no support in IE, Edge, or
Chrome), and because MathJax can't control the quality or coverage of
the MathML support in the browser, MathJax version 3 has dropped the
NativeMML output format for now.  Should the browser situation improve
in the future, it could be added again.  See :ref:`mathml-output` for
more on this, and for an example of how to implement MathML output
yourself.

There are few changes within the supported input and output jax, as
described below:

Input Changes
-------------

There are two changes in the TeX input jax that can affect backward
compatibility with existing TeX content in your pages.

The first concerns the ``\color`` macro; in version 2, ``\color`` is a
non-standard in that it takes two arguments (the color an the math to
be shown in that color), while the authentic LaTeX version is a switch
that changes the color of everything that follows it.  The
LaTeX-compatible one was available as an extension.  In version 3,
both versions are extensions (see ), with the LaTeX-compatible one
being autoloaded when ``\color`` is first used.  See the
:ref:`tex-color` and :ref:`tex-colorv2` extensions for more
information, and how to configure MathJax to use the original
version-2 ``\color`` macro.

The other incompatibility is that the names of some extensions have
been changed in version 3.  For example, `AMScd` in version 2 is now
`amscd` in version 3.  This means that you need to use
``\require{amscd}`` rather than ``\require{AMScd}`` to load the `CD`
environment.  In order to support existing content that uses
``\require``, you can use the code in the
:ref:`v2-compatibility-example` section below.

Some other changes include:

* The `autoload-all` extension has been rename `autoload`, and is more
  flexible and configurable than the original.

..

* There are two new extensions, :ref:`tex-braket` and
  :ref:`tex-physics`.

..

* The configuration options for controlling the format of equation
  numbers have been moved to an extension; see the
  :ref:`tex-tagformat` documentation for details.

..

* The ``useMathMLspacing`` options for the various input jax have been
  moved to the output jax instead, as the ``mathmlSpacing`` option.

..

* The ``processEscapes`` option for the `tex2jax` preprocessor (now
  for the TeX input jax) had a default value of ``false`` in version 2,
  but has default value ``true`` in version 3.

..

* The functionality of the `MathChoice` extension has been moved to
  the base TeX package.

..

* The non-standard ``UPDIAGONALARROW`` and ``ARROW`` notations have
  been removed from the ``menclose`` element.  These have been
  replaced by the standard ``northeastarrow`` notation.


Output Changes
--------------

There are several important changes to the output jax in version 3,
and several things that aren't yet implemented, but will be in a
future version.  One such feature is linebreaking, which hasn't been
ported to version 3 yet. Another is that only the MathJax TeX font is
currently available in version 3.  See :ref:`v2-not-ported` for a list of
features that are still being converted.

In addition, there a few other changes of importance:

* There are no more image fonts.  These were for use with the HTML-CSS
  output jax, and since that is not included in MathJax version 3,
  neither are the image fonts.  Since those took up a lot of disk
  space, this should make locally hosted MathJax installations smaller.

..

* For expressions with equation numbers, the SVG output jax now has
  these expressions float with the size of the container element, just
  like they do in HTML output.  This was not the case in version 2, so
  this is an important improvement for dynamic pages.

..

* The font used for characters that aren't in the font used by MathJax
  used to be controlled by the ``undefinedFont`` configuration
  parameter in version 2, but in version 3, you should use CSS to set
  this instead.  For example,

  .. code-block:: css

     mjx-container mjx-utext {
       font-family: my-favorite-font;
     }
     mjx-container svg text {
       font-family: my-favorite-font;
     }

  would select the ``my-favorite-font`` to be used for unknown
  characters.  The first declaration is for the CommonHTML output, and
  the second for the SVG output.  Once advantage of this approach is
  that you can specify the CSS separately for each variant; e.g.,

  .. code-block:: css

     mjx-container mjx-utext[variant="sans-serif"] {
       font-family: my-sans-serif-font;
     }
     mjx-container svg text[data-variant="sans-serif"] {
       font-family: my-sans-serif-font;
     }

  would set the font to use for characters that aren't in the MathJax
  fonts and that have requested the sans-serif variant.

..

* Version 3 only implements the CommonHTML and SVG output jax.  The
  original HTML-CSS output jax has been dropped, a has the NativeMML.
  The PreviewHTML and PlainSource output jax have not been ported to
  version 3, though they may be in the future, if there is interest.

-----

.. _v2-not-available:

No Longer Applies to Version 3
==============================

A number of version 2 features have been removed as part of the
redesign of MathJax version 3.  These are described below.

* In version 3, MathJax no longer updates the page in small "chunks",
  but instead updates the page as a whole (a future version may
  include an extension that updates in smaller pieces).  This has an
  impact on a number of version 2 features.  First, because there is
  no incremental update, the MathJax message bar (usually in the lower
  left corner) that indicated the progress of the typesetting is no
  longer needed, and is not part of MathJax version 3.  Of course, the
  configuration options that control it have also been removed, as
  have the options for equation chunking (that controlled how many
  equations to process between screen updates.

..

* Similarly, since the page updating is done all at once, there is no
  need for the math preview versions that were displayed while the
  equations where being typeset.  So the `fast-preview` extension and
  `PreviewHTML` output jax have been removed, along with the
  configuration options for them.

..

* The `PlainSource` output jax has not be ported to version 3, though
  it may be in the future; it can be handled in other ways in
  version 3.  As mentioned above, the `NativeMML` has been dropped
  from version 3, though it is not hard to :ref:`implement a
  replacement <NativeMML>` if you want.

..

* The `autobold` TeX extension is no longer available in version 3,
  and is unlikely to be ported in the future.

..

* The `mhchem` TeX extension in version 2 came in two forms:  the
  original extension that didn't match the LaTeX implementation
  perfectly, and a rewrite by the author of the original LaTeX package
  that made it compatible with LaTeX.  The legacy version could be
  selected by a configuration option.  This is no longer possible in
  version 3 (the legacy version is no longer provided).

..

* The `handle-floats` extension for HTML output has been removed, as
  its functionality is now part of the standard CommonHTML output.

..

* The `jsMath2jax` preprocessor has been dropped.  This was used to
  help bridge jsMath users to MathJax, but since it has been a decade
  since MathJax was introduced, the need for jsMath conversion should
  be very small at this point.

..

* The `MatchWebFonts` extension is no longer available.  This was
  sometimes needed for HTML-CSS output, which relied on the fonts
  being in place when it ran.  The CommonHTML output is less
  susceptible to font issues, and this is no longer necessary.

..

* The `FontWarnings` extension is no longer available, since it was
  for the HTML-CSS output jax, which is not part of MathJax
  version 3.

..

* The `HelpDialog` extension is not included in version 3.  Its
  functionality is incorporated into the :ref:`menu-component`
  directly.

..

* The `toMathML` extension is no longer provided in version 3.
  Instead, you can use :meth:`MathJax.startup.toMML()` if you are
  using MathJax components, or can use the ``SerializedMMLVisitor``
  object if you are calling MathJax modules directly.

..

* The configuration blocks no longer allow the ``style`` option that
  were available in version 2.  Instead, you should use CSS
  stylesheets and CSS style files directly.

..

* Synchronization with MathJax in version 2 was handled via queues,
  signals, and callbacks.  In version 3, these have been replaced by
  ES6 promises.  See :ref:`synchronization` for more details.

-----


.. _v2-not-ported:

Not Yet Ported to Version 3
===========================

As MathJax 3 is still a work in progress, not all of the version 2
features have been converted to the new code base yet, though we hope
to include them in version 3 in a future release.  Among the most
important ones are the following.

* Currently, automatic line breaking support is missing from
  version 3.  This is a key feature to be included in a future
  release.

..

* The MathJax v3 output jax currently only support one font, the
  MathJax TeX fonts.  Improved font support is an important goal for
  version 3, and this is one of the next features to be addressed.  We
  will be rebuilding the fonts used for MathJax, and making additional
  web fonts available in a future release.  We also plan to make the
  tools used for creating the necessary font data available for use in
  porting your own fonts for use with MathJax.

..

* The localization mechanism available in version 2 has not yet been
  incorporated into version 3, so currently MathJax v3 is available
  only in English.  This is an important feature that will be added to
  MathJax v3 in a future release.

..

* The `begingroup` and `mediawiki-texvc` TeX extensions haven't been
  ported to version 3 yet, but should be in the future.

..

* The `auto-collapse` assistive extension is not yet available for
  version 3.  If there is enough interest, that will also be ported to
  the new code base.


-----


.. _v2-contextual-menu-changes:

Contextual Menu Changes
=======================

The contextual menu has been reorganized to make it easier to access
some functions, and to add new ones.  One major new features is the
`Copy to Clipboard` submenu, which mirrors the `Show Math As` menu,
but sends the output to the clipboard rather than displaying it on
screen.  This is a feature that has been requested for a long time,
and we are pleased to be able to offer it in version 3.

There is also a new `Reset to defaults` item that resets all the saved
settings to their original values (effectively clearing any custom
settings).

The contextual menu now stores its data using the ``localStorage``
object in the browser, rather than using cookies like version 2 does.
This should be more efficient and more secure, but does mean older
browsers may not be able to save their settings from session to
session (if they don't support ``localStorage``).

The accessibility menu options are now built into the contextual menu,
so there is no longer an `accessibility-menu` extension.  They also
have been reorganized in the menu to make it easier to access the more
important features.  The `auto-collapse` extension has not yet been
ported to version 3, however.  The equation explorer has been expanded
and improved; see :ref:`accessibility` for details.

Finally, the ``showMathMenu`` and ``showMathMenuMSIE`` options have
been removed.  The need for separate handling of the menu in IE is no
longer applicable, and you control whether the contextual menu is
attached to the typeset mathematics using the ``enableMenu`` property
of the ``options`` block of the MathJax configuration (see
the :ref:`menu-options` documentation).

-----


.. _v2-mathjax-node:

MathJax in Node
===============

Version 2 of MathJax was designed to work in a browser, and relied
heavily on the presence of the browser window, document, DOM, and
other browser-specific objects.  Using MathJax on a server to
pre-process mathematics (e.g., to convert a TeX string to an SVG
image, for example), was not easy in version 2.  The `mathjax-node
<https://github.com/mathjax/mathjax-node>` project made that possible,
but required a completely different way of interacting with MathJax,
and was not as easy to use or as reliable as we would have liked.

Version 3 has server-side use as an important use-case to support, and
so it is possible to use MathJax in a `node` application in
essentially the same way as in a browser, with only a few minor
adjustments to the configuration to allow for that.  This should make
it much easier to use MathJax on a server, as it will work the same
there as for your web-based applications.  It is also possible to link
to MathJax at a lower level and access the MathJax modules directly.
See the section on :ref:`using MathJax in node <node-start>`, and the
:ref:`MathJax API <mathjax-api>` for more information on these
possibilities.

-----

.. _v2-compatibility-example:

Version 2 Compatibility Example
===============================

The following example causes the ``\color`` macro to be the original
one from version 2, and sets up the ``\require`` macro to translate
the old package names into the new ones.  This should make MathJax v3
handle existing content properly.

Be sure to convert your version-2 configuration to a version-3 one via
the `conversion tool
<https://mathjax.github.io/MathJax-demos-web/convert-configuration/convert-configuration.html>`__
that we provide.

.. code-block:: html

   <script>
   MathJax = {
     startup: {
       //
       //  Mapping of old extension names to new ones
       //
       requireMap: {
         AMSmath: 'ams',
         AMSsymbols: 'ams',
         AMScd: 'amscd',
         HTML: 'html',
         noErrors: 'noerrors',
         noUndefined: 'noundefined'
       },
       ready: function () {
         //
         //  Replace the require command map with a new one that checks for
         //    renamed extensions and converts them to the new names.
         //
         var CommandMap = MathJax._.input.tex.SymbolMap.CommandMap;
         var requireMap = MathJax.config.startup.requireMap;
         var RequireLoad = MathJax._.input.tex.require.RequireConfiguration.RequireLoad;
         var RequireMethods = {
           Require: function (parser, name) {
             var required = parser.GetArgument(name);
             if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
               throw new TexError('BadPackageName', 'Argument for %1 is not a valid package name', name);
             }
             if (requireMap.hasOwnProperty(required)) {
               required = requireMap[required];
             }
             RequireLoad(parser, required);
           }
         };
         new CommandMap('require', {require: 'Require'}, RequireMethods);
         //
         //  Do the usual startup
         //
         return MathJax.startup.defaultReady();
       }
     },
     tex: {
       autoload: {
         color: [],          // don't autoload the color extension
         colorv2: ['color'], // do autoload the colorv2 extension
       }
     }
   };
   </script>
   <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

This uses the ``tex-chtml.js`` combined component, so change this to
whichever one you want.

If your website uses the MathJax API to queue typeset calls via

.. code-block:: javascript

   MathJax.Hub.Queue(['Typeset', MathJax.Hub]);

for example, these calls will need to be converted to use the
:ref:`MathJax 3 API <api>`.  You may be able to use the following code
to patch into MathJax version 3, which provides implementations for
:meth:`MathJax.Hub.Typeset()`, and :meth:`MathJax.Hub.Queue()`.  It
also flags usages of :meth:`MathJax.Hub.Register.StartupHook()` and
the other hook-registering commands, and that you have converted your
:meth:`MathJax.Hub.Config()` and ``x-mathjax-config`` scripts to their
version 3 counterparts (use the `conversion tool <https://mathjax.github.io/MathJax-demos-web/convert-configuration/convert-configuration.html>`__).

Add the following lines right after the ``new CommandMap()`` call in
the code above:

.. code-block:: javascript

         //
         // Add a replacement for MathJax.Callback command
         //
         MathJax.Callback = function (args) {
           if (Array.isArray(args)) {
             if (args.length === 1 && typeof(args[0]) === 'function') {
               return args[0];
             } else if (typeof(args[0]) === 'string' && args[1] instanceof Object &&
                       typeof(args[1][args[0]]) === 'function') {
               return Function.bind.apply(args[1][args[0]], args.slice(1));
             } else if (typeof(args[0]) === 'function') {
               return Function.bind.apply(args[0], [window].concat(args.slice(1)));
             } else if (typeof(args[1]) === 'function') {
               return Function.bind.apply(args[1], [args[0]].concat(args.slice(2)));
             }
           } else if (typeof(args) === 'function') {
             return args;
           }
           throw Error("Can't make callback from given data");
         };
         //
         // Add a replacement for MathJax.Hub commands
         //
         MathJax.Hub = {
           Queue: function () {
             for (var i = 0, m = arguments.length; i < m; i++) {
                var fn = MathJax.Callback(arguments[i]);
                MathJax.startup.promise = MathJax.startup.promise.then(fn);
             }
             return MathJax.startup.promise;
           },
           Typeset: function (elements, callback) {
              var promise = MathJax.typesetPromise(elements);
              if (callback) {
                promise = promise.then(callback);
              }
              return promise;
           },
           Register: {
              MessageHook: function () {console.log('MessageHooks are not supported in version 3')},
              StartupHook: function () {console.log('StartupHooks are not supported in version 3')},
              LoadHook: function () {console.log('LoadHooks are not supported in version 3')}
           },
           Config: function () {console.log('MathJax configurations should be converted for version 3')}
         };
         //
         //  Warn about x-mathjax-config scripts
         //
         if (document.querySelector('script[type="text/x-mathjax-config"]')) {
           throw Error('x-mathjax-config scripts should be converted to MathJax global variable');
         }

With this you may be able to get away with using your existing version
2 code to interact with version 3.  But if not, either a more
sophisticated compatibility module will be needed, or better yet,
convert to the new version 3 API.

|-----|

#########################
/U. What's New in MathJax
#########################

.. toctree::
    :name: whats-new
    :maxdepth: 1

    In MathJax v3.2 <whats-new-3.2>
    In MathJax v3.1 <whats-new-3.1>
    In MathJax v3.0 <whats-new-3.0>
    In Earlier Versions <earlier/index>

|-----|
.. _whats-new-3.0:

##############################
/U. What's New in MathJax v3.0
##############################

MathJax version 3 is a complete rewrite from the ground up, with the
goal of modernizing MathJax’s internal infrastructure, bringing it
more flexibility for use with contemporary web technologies, making it
easier to use with NodeJS for pre-processing and server-side support,
and making it faster to render your mathematics.


.. _improved-speed:

Improved Speed
==============

There were a number of design goals to the version 3 rewrite.  A
primary one was to improve the rendering speed of MathJax, and we feel
we have accomplished that.  Because the two versions operate so
differently, it is difficult to make precise comparisons, but in tests
that render a complete page with several hundred expressions, we see
a reduction in rendering time of between 60 and 80 percent, depending
on the browser and type of computer.


.. _more-flexibility:

More Flexibility
================

Another goal was to make MathJax 3 more flexible for web developers
using MathJax as part of a larger framework, while still keeping it
easy to use in simple settings.  To that end, we have broken down the
actions that MathJax takes into smaller units than in version 2, and
made it possible to call on them individually, or replace them with
alternative versions of your own.  For example, the typesetting
process has been broken into a number of pieces, including finding the
math in the page, compiling it into the internal format (MathML),
getting metric data for the location of the math, converting the math
into the output format, inserting it into the page, adding menu event
handlers, and so on.  You have control over which of these to perform,
and can modify or remove the existing actions, or add new ones of your
own.  See the :ref:`renderActions <document-renderActions>`
documentation for details.


.. _synhronous-conversion:

Synchronous Conversion
======================

A key feature that we wanted to include in version 3 is the ability to
run MathJax synchronously, and in particular, to provide a function
that can translate an input string (say a TeX expression) into an
output DOM tree (say an SVG image).  This was not really possible in
version 2, since its operation was inherently asynchronous at a
fundamental level.  With MathJax version 3, this is straight-forward,
as we provide a synchronous typesetting path, both within the page,
and for individual expressions, provided you load all the components
you need ahead of time.  See :ref:`web-typeset` for details.


.. _no-queues-signals-callbacks:

No Queues, Signals, Callbacks
=============================

One of the more difficult aspects of working with MathJax version 2
was having to synchronize your actions with those of MathJax.  This
involved using `queues`, `callbacks`, and `signals` to mediate the
asynchronous actions of MathJax.  Since these were not standard
javascript paradigms, they caused confusion (and headaches) for many
developers trying to use MathJax.  With version 3, MathJax has the
option of working synchronously (as described above), but it still
allows for asynchronous operation (e.g., to allow TeX's ``\require``
command to load extensions dynamically) if you wish.  This no longer
relies on queues, callbacks, and signals, however.  Instead, these
actions are managed through the ES6 `promise
<https://developers.google.com/web/fundamentals/primers/promises>`__,
which is a javascript standard, and should make integrating MathJax
into your own applications more straight-forward.


.. _package-managers:

Package Manager Support
=======================

Because MathJax version 2 used its own loading mechanism for accessing
its components, and because there was no method for combining all the
pieces needed by MathJax into one file, MathJax did not work well with
javascript packaging systems like ``webpack``.  Version 3 resolves
that problem, so it should interoperate better with modern web
workflows.  You can make your own custom single-file builds of MathJax
(see :ref:`web-custom-build`) or can include it as one component of a
larger asset file.

.. _introducing-components:

MathJax Components
==================

MathJax 3 still provides a loading mechanism similar to the one from
version 2, however, so you can still customize the extensions that is
loads, so that you only load the ones you need (though this does
require that you use MathJax in its asynchronous mode).  The various
pieces of MathJax have been packaged into "components" that can be
mixed and matched as needed, and which you configure through a global
:data:`MathJax` variable (see :ref:`web-examples`).  This
is how MathJax is being distributed through the various CDNs that host
it.  When loaded this way, MathJax will automatically set up all the
objects and functions that you need to use the components you have
loaded, giving you easy access to typesetting and conversion functions
for the input and output formats you have selected.  See the section
on :ref:`web-components` for more information.  You can also create
your own custom components to complement or replace the ones provided
on the CDN (see :ref:`custom-extension` for more).

.. _startup-actions:

Startup Actions
===============

If you use any of the :ref:`combined component <combined-components>`
files, MathJax will perform a number of actions during its startup
process.  In particular, it will create the input and output jax, math
document, DOM adaptor, and other objects that are needed in order to
perform typesetting in your document.  You can access these through
the :attr:`MathJax.startup` object, if you need to.  MathJax will also
set up functions that perform typesetting for you, and conversion
between the various input and output formats that you have loaded.
This should make it easy to perform the most important actions
available in MathJax.  See :ref:`web-typeset` for more details.


.. _server-side-use:

Server-Side MathJax
===================

While MathJax 2 was designed for use in a web browser, an important
use case that this left unaddressed is pre-processing mathematics on a
server.  For version 2, we provided `mathjax-node
<https://github.com/mathjax/mathjax-node>`__ to fill this gap, but it
is not as flexible or easy to use as many would have liked.  MathJax 3
resolves this problem by being designed to work with `node`
applications in essentially the same way as in a browser.  That is,
you can load MathJax components, configure them through the
:data:`MathJax` global variable, and call the same functions for
typesetting and conversion as you do within a browser.  This makes
parallel development for both the browser and server much easier.

Moreover, node applications can access MathJax modules directly
(without the packaging used for MathJax components). This gives you
the most direct access to MathJax's features, and the most flexibility
in modifying MathJax's actions.  See :ref:`node-examples` for
examples of how this is done.


.. _ES6-typescript:

ES6 and Typescript
==================

MathJax 3 is written using ES6 modules and the `Typescript
<https://www.typescriptlang.org>`__ language.  This means the source
code includes type information (which improves the code reliability),
and allows MathJax to be down-compiled to ES5 for older browsers while
still taking advantage of modern javascript programming techniques.
It also means that you can produce pure ES6 versions of MathJax
(rather than ES5) if you wish; these should be smaller and faster than
their ES5 equivalents, though they will only run in modern browsers
that support ES6, and so limit your readership.  We may provide both
ES6 and ES5 versions on the CDN in the future.

-----

New Features for Existing Components
====================================

In addition to the new structure for MathJax described above, some new
features have been added to existing pieces of MathJax.

TeX Input Extensions
--------------------

There are two new TeX input extensions: :ref:`tex-braket` and
:ref:`tex-physics`.  Also, some functionality that was built into the TeX
input jax in version 2 has been moved into extensions in version 3.
This includes the :ref:`macros <tex-configmacros>` configuration
option, the :ref:`tag formatting <tex-tagformat>` configuration
options, and the :ref:`require <tex-require>` macro.  The new
:ref:`tex-autoload` extension replaces the older `autoload-all`
extension, is more configurable, and is included in the TeX input
components by default.  There a several extensions that are not yet
ported to version 3, including the `autobold`, `mediawiki-texvc`, and
the third-party extensions.  


SVG Output
----------

The SVG output for equations with labels has been improved so that the
positions of the labels now react to changes in the container width
(just like they do in the HTML output formats).


Improved Expression Explorer
----------------------------

The interactive expression explorer has been improved in a number of
ways.  It now includes better heuristics for creating the speech text
for the expressions you explore, provides more keyboard control of the
features in play during your exploration, adds support for braille
output, adds support for zooming on subexpressions, and more.  See the
:ref:`accessibility` page for more details.


|-----|
.. _whats-new-3.1:

##############################
/U. What's New in MathJax v3.1
##############################

Version 3.1 includes a number of new features, as well as bug fixes
for several issues with version 3.0.  These are described below.

* :ref:`v3.1-tex-package-name-changes`
* :ref:`v3.1-tex-format-error`
* :ref:`v3.1-tex-noundefined-options`
* :ref:`v3.1-tex-textmacros`
* :ref:`v3.1-safe`
* :ref:`v3.1-accessibility`
* :ref:`v3.1-mathml-verification-options`
* :ref:`v3.1-output-options`
* :ref:`v3.1-startup-promise`
* :ref:`v3.1-typesetClear`
* :ref:`v3.1-getMathItemsWithin`
* :ref:`v3.1-sreReady`
* :ref:`v3.1-liteDOM`
* :ref:`v3.1-demos`

------

.. _v3.1-tex-package-name-changes:

TeX Package Name Changes
========================

The names of several tex packages have been changed to conform to a
new naming convention.  All package names are now entirely in lower
case.  The mixed case naming used in the past proved to be
problematic, and so four extensions have been renamed to all lower
case:  ``amscd``, ``colorv2``, ``configmacros``, and ``tagformat``.

If you are using the component system to load MathJax, the old names
will continue to work for now, but the backward-compatibility support
may be removed in the future, so you should change the names to their
lower case versions for protection against future changed.  Note that
the names need to be changed in not only in the :attr:`tex.packages`
array but also in the name of their configuration options, if any, and
in the `autoload` configuration (e.g., if you are disabling the
autoloading of the ``colorv2`` extension).

If you are using direct imports of the MathJax modules, you will need
to change to the new names now, as there is no backward-compatibility
option for that.

.. _v3.1-tex-format-error:

TeX Error Formatting
====================

There is a new :attr:`formatError` option for the TeX input jax that
provides a function that is called when a syntax or other error occurs
during the processing of a TeX expression.  This can be used to trap
the errors for reporting purposes, or to process the errors in other
ways.  See the :ref:`formatError <tex-formatError>` documentation.


.. _v3.1-tex-noundefined-options:

Noundefined Package Options
===========================

The ``noundefined`` package now has configuration options similar to
the ones available in the ones available in version 2.  These include
the ability to set the text color, background color, and size of the
text to use for disoplaying undefined macro names within TeX formulas.
See the :ref:`noundefined options <tex-noundefined-options>` for
details.


.. _v3.1-tex-textmacros:

New `textmacros` Package
========================

There is a new `textmacros` package for the TeX input jax that
provides support for processing a number of text-mode macros when they
appear inside ``\text{}`` or other similar settings that produce
text-mode material.  This allows you to quote TeX special characters,
create accented characters, change fonts and sizes, add spacing, etc.,
within text-mode material.  See the :ref:`tex-textmacros` page
for complete details.


.. _v3.1-safe:

New Safe Extension
==================

The `Safe` extension hs now been ported from v2 to v3.  This
extensions allows you to filter the values used in the attributes of
the underlying MathML that is generated from the TeX, AsciiMath, or
MathML input.  This can be used to prevent certain URLs from being
used, or certain CSS styles from being used, etc.  See
:ref:`safe-typesetting` for more details.


.. _v3.1-accessibility:

New Accessibility Features
==========================

MathJax's accessibility code has undergone some internal improvements
for speed and reliability.  In addition, there is now a localization
of the speech output for the German language.  The accessibility
contextual menu has been updated to include the ability to select the
localization language (in the `speech` submenu), and to expose
additional features, such as the ability to set the opacity of the
foreground and background colors in the `highlight` submenu.  Finally,
there is a new control panel for managing the Clearspeak preferences
available in the `Clearspeak rules` submenu of the `Speech` menu.  See
the :ref:`a11y-extensions` for more details.


.. _v3.1-mathml-verification-options:

MathML Verification Options
===========================

The MathML input jax has the ability to check and report or
(sometimes) correct errors in MathML trees, but the options that
control this checking were not documented, and could not be changed
easily.  Version 3.1 exposes these options so they can be set in the
configuration block for the MathML input jax.


.. _v3.1-output-options:

New Output Configuration Options
================================

There are two new output configuration options, and updated behavior
and defaults for two existing options.  These options control the
fonts used for ``<mtext>`` and ``<merror>`` elements.  The original
:attr:`mtextInheritFont` and :attr:`merrorInheritFont` properties
controlled whether these elements used the same font as the
surrounding text, but neither worked properly in version 3.0.  This
has been fixed in version 3.1 so these now properly cause the
surrounding font to be used for the contents of the specified elements
when set to ``true``.

If these are set to ``false``, the new :attr:`mtextFont` and
:attr:`merrorFont` properties specify a font family (or list of families)
to use fort the content of these elements.  This allows you to force
a specific font to be used for the text within mathematics.  If these
are set to an empty string, then the MathJax fonts will be used.

The defaults for these are

.. code-block:: javascript

   mtextInheritFont: false,
   merrorInheritFont: false,
   mtextFont: '',
   merrorFont: 'serif',

which means that the MathJax fonts will be used for ``<mtext>``
elements, and the browser's serif font will be used for ``<merror>``
text.  See the :ref:`output-common-options` for more information.

**Note:** the default for :attr:`merrorInheritFont` has been changed from
``true`` to ``false`` now that :attr:`merrorFont` is available.


.. _v3.1-startup-promise:

Startup Promise Revisions
=========================

The :attr:`MathJax.startup.promise` now works in a more intuitive way.
In the past, it was initially set to be a promise that resolves when
MathJax is ready and the ``DOMContentLoaded`` event occurs, and was
changed by the :meth:`startup.pageReady()` function to one that
resolve when the initial typesetting is finished.  So you could not
use :attr:`MathJax.startup.promise` to tell when the initial
typesetting is complete without overriding the
:meth:`startup.pageReady()` method as well.

In version 3.1, the :attr:`MathJax.startup.promise` has been changed
to one that resolves when the action of the :meth:`startup.pageReady()`
method is finished (which includes the initial typesetting action).
That makes this promise a reliable way to determine when the initial
typesetting is finished.

See the sections on :ref:`startup-action`, on :ref:`typeset-async`,
and on the :ref:`pageReady() <startup-pageready>` for more
details.


.. _v3.1-typesetClear:

New API for Clearing Typeset Content
====================================

If you are dynamically adding and removing content from your page, you
need to tell MathJax abiout what you are doing so that it can typeset
any new mathematics, and forget about any old typeset mathematics that
you have removed.  In version 3.0, the :meth:`MathJax.typesetClear()`
method could be used to tell MathJax to forget about *all* the
mathematics that is ahs typeset, but if you only removed some of it,
there was no easy way to tell it to forget about only the math you
removed.  This situation has been improved in version 3.1 by allowing
the :meth:`MathJax.typesetClear()` method to accept an array of
elements whose contents should be forgotten.  See :ref:`typeset-clear`
for more details.


.. _v3.1-getMathItemsWithin:

New API for Getting Math within a Container
===========================================

MathJax keeps track of the math that you have typeset using a list of
objects called `MathItems`.  These store the original math string, the
locatino of the math in the document, the input jax used to process
it, and so on.  In the past, you had access to these through a list
stored in the `MathDocument` object stored at :attr:`MathJax.startup.document`, 
but it was not easy to get access to the individual MathItems in a
convenient way.  In v3.1 there is now a function
:meth:`MathJax.startup.document.getMathItemsWithin()` that returns all
the MathItems for the typeset math within a DOM container element (or
collection of DOM elements).  See :ref:`get-math-items` for details.


.. _v3.1-sreReady:

Change to SRE Interface
=======================

In version 3.0.5, The `a11y/sre` module exposed a value
:attr:`sreReady` that was a promise that would be resolved when the
Speech-Rule Engine was ready to use.  Due to changes in SRE (which can
now be configured to load localized translation data, and so may
become un-ready while that is happening), the :attr:`sreReady` value
in version 3.1.0 is now a function returning a promise, so should be
called as :meth:`sreReady()`.


.. _v3.1-liteDOM:

Fixes to the LiteDOM and DOMAdaptors
====================================

The `LiteDOM` in version 3.0.5 failed to process comments correctly:
they were properly read and ignored, but where not included in the
output when the DOM is serialized.  In version 3.1.0, this has been
fixes so that comments are properly maintained.  In addition, the
:attr:`doctype` of the document is now retained by the `LiteDOM`, and
can be accessed by a new :meth:`doctype()` method of the `DOMAdaptor`
class (and its subclasses).


.. _v3.1-demos:

Updated Demos
=============

The `web <https://github.com/mathjax/MathJax-demos-web#MathJax-demos-web>`__
and `node <https://github.com/mathjax/MathJax-demos-node#MathJax-demos-node>`__
examples have been updated to use the new features available in
version 3.1.0, and to include more examples.  In particular, the node
examples now include demonstrations of using the simpler loading
mechanism for node applications, using puppeteer to perform
server-side processing, and using JSDOM for server-side processing.

|-----|
.. _whats-new-3.2:

##############################
/U. What's New in MathJax v3.2
##############################

Version 3.2 includes a number of new features, as well as bug fixes
for several issues with version 3.1.  The new features are described
below.

* :ref:`v3.2-lazy-typesetting`
* :ref:`v3.2-css-updates`
* :ref:`v3.2-tex-packages`
* :ref:`v3.2-mml3`
* :ref:`v3.2-hindi`
* :ref:`v3.2-other`

..

* :ref:`v3.2-breaking`


See also the `release notes
<https://github.com/mathjax/MathJax-src/releases/tag/3.2.0#bugs>`__
for the list of bugs that have been fixed in version 3.2.


------

.. _v3.2-lazy-typesetting:

Lazy Typesetting
================

Although MathJax version 3 is already an order of magnitude faster
than version 2, with version 3.2 we offer a new extension that is
designed to make pages with large numbers of equations perform even
better.  It implements a "lazy typesetting" approach that only
typesets an expression when it comes into view, which means that
expressions will not be typeset when they are not visible.  Your
readers will not have to wait for the entire document to typeset,
which can speed up their initial view of the page.  Furthermore, any
expressions that are never seen will not be typeset.  This also helps
with the situation where you may link to a particular location in your
page (via a URL with a hash); in version 2, typesetting the material
above that point can cause the browser to change the scroll position,
and so the user may not end up at the proper location in the page.
With the lazy extension, the material above that point is not typeset
until the user scrolls upwards, and so there is no position change.

Lazy typesetting works best with SVG output, but changes (discussed
below) with the way the CommonHTML output handles its stylesheet
updates make the CHTML output nearly as fast.  With TeX input, the
lazy extension makes sure that previous expressions are processed by
TeX (though not output to the page) so that any macro definitions or
automatic equation numbers are in place when the visible expressions
are processed.  Currently, documents that contain ``\ref`` or ``\eqref``
links may not yet work properly, since target equations may not have
been typeset, and so the link location may not be marked in the
document.  In particular, forward references are unlikely to work, and
backward references will work only if the target expression has
already been typeset.  We hope to improve this situation in a future
release.

See the :ref:`lazy-typesetting` documentation for information on how
to configure MathJax to use this new feature.

-----

.. _v3.2-css-updates:

CSS Updates
===========

MathJax's CHTML output handles the characters that appear in the math
on the page by storing information about their bounding boxes and text
content in a CSS stylesheet.  When additional math is typeset, this
stylesheet may need to be updated, and in previous versions, MathJax
would replace the entire stylesheet with a new one.  This can cause
visual flashing, and can be expensive as the browser must re-evaluate
all the rules and apply them again.  In version 3.2, the CHTML output
now adds rules to the stylesheet individually, so the older rules are
not replaced, and only the new rules must be evaluated and applied.
This makes updates must faster, and is of particular benefit to the
lazy-typesetting extension described above, as the page can be updated
many times as equations scroll into view.  This change makes the CHTML
output work almost as smoothly as SVG output with the lazy extension.

-----

.. _v3.2-tex-packages:

New TeX Packages
================

Version 3.2 includes nine new TeX extension packages:

* :ref:`tex-cases` — provides environments for individually numbered cases.
* :ref:`tex-centernot` — implements a centered `\not` command (and a non-standard `\centerOver` that places one symbol centered on top of another).
* :ref:`tex-colortbl` — provides macros for coloring cells of an array or alignment.
* :ref:`tex-empheq` — an environment for placing material to the left or right of an alignment that has individual equation numbers.
* :ref:`tex-gensymb` — provides macros for some specific units.
* :ref:`tex-mathtools` — offers a range of macros and environments for advanced mathematical typesetting.
* :ref:`tex-setoptions` — provides the ability to change some TeX input jax options from within an expression (e.g., to change the tag side).
* :ref:`tex-textcomp` — provides a range of macros for specifying various text characters.
* :ref:`tex-upgreek` — provides macros for upright Greek characters.

These are all included in the components that end in ``-full`` (and
include the TeX input jax), and you can load individual ones as you
would other tex packages.  Note, however, that none of these are
autoloaded, though you can configure the `autoload` extension to do
so, if you wish.  See the :ref:`tex-autoload` documentation for details.

In addition to these new packages, some of the older packages have been updated:

* The `ams` package now includes ``flalign``, ``xalign``, and ``xxalign``
  environments.  In addition, the ``multline`` extension has been made
  more compatible with actual LaTeX.  In the past, ``multline`` was set
  to be 85% of the container width, but now it is set to 100%, but
  with a 1em indent on both sides; when there is a tag, the indent on
  the tag side is increased by the width of the tag, as is the case in
  LaTeX.  The width was stored in the ``multlineWidth`` configuration
  option in the ``tex`` configuration block.  That has now been moved to
  the ``ams`` block in the ``tex`` configuration, and there is a new
  ``multlineIndent`` value.  These are set to ``100%`` and ``1em``
  respectively.  To obtain the old behavior, set them to ``85%`` and
  ``0``.  Currently, if ``multlineWidth`` is found in the main ``tex``
  option block, it will be moved to the ``ams`` block, but that
  backward-compatibility code will be removed in a future release.

..

* The `physics` package now implements all macros, even those that are
  not officially documented, but are nevertheless available in LaTeX.
  In addition, it now implements the ``italicdiff`` and ``arrowdel``
  options.

..

* The following macros have been added to the indicated package:
    * ``\overunderset`` (ams) — a combination of ``\overset`` and ``\underset``.
    * ``\stackbin`` (ams) — similar to ``\stackrel`` but produces a symbol with the spacing of a binary operator.
    * ``\nonscript`` (base) — apply the following spacing only when in display and text styles.
    * ``\boxed`` (base) — puts a frame around an expression.
    * ``\framebox`` (base) — puts a frame around a text argument.
    * ``\ip``, ``\Bqty``, ``\qsince``, ``\Residue`` (physics) — originally missing from the physics package.

-----

.. _v3.2-mml3:

MathML Extensions
=================

The MML3 extension from version 2 has been ported to version 3 and is
available to be included when you load the MathML input jax.  This
extension implements the MathML3 elementary math tags (like ``<mstack>``
and ``<mlongdiv>``) using an XSLT transform to convert these tags into
other presentation MathML tags that MathJax has implemented.  This
does a reasonable job for some constructs, and a poorer job for
others, but it does make it possible to process elementary math within
MathJax v3.  This is an experimental extension as a stop-gap measure
until these tags are fully implemented within core MathJax.

See the :ref:`mathml-mml3` documentation for information on how to
configure MathJax to use this new feature.

-----

.. _v3.2-hindi:

Explorer Update
===============

The Speech-Rule Engine (SRE) that underlies MathJax's assistive
technology support has been updated to the most recent version
(3.3.3).  This includes support for the Hindi language, so that the
expression explorer can generate speech in Hindi (as well as its other
languages: English, French, German, Italian, Spanish, together with
Braille support in Nemeth).

See the `SRE release notes <https://github.com/zorkow/speech-rule-engine/releases>`__ for details.

This release also ports the remaining missing features for the
explorer to v3.  This includes summarising expressions and navigation
of tabular expressions, like matrices or equation systems.  See the
:ref:`keyboard command <special-keys>` documentation for details.

.. _v3.2-sre4:

As of v3.2.1 MathJax pulls in SRE v4 which supports as Catalan, Danish,
Norwegian (Bokmal and Nynorsk) and Swedish as additional languages. It also
integrates SRE code directly making use of its promise structure, instead of
loading it as an external package. Consequently the old `sreReady` method will
be deprecated and the loophole to use speech rule engine directly via the `SRE`
namespace in the browser, is closed.

See the `SRE release notes
<https://github.com/zorkow/speech-rule-engine/releases/v4.0.0>`__ as well as the
`MathJax v3.2.1 release notes
<https://github.com/mathjax/MathJax-src/releases/v3.2.1>`__ for details.

-----

.. _v3.2-other:

Other New Features
==================

In addition to the major features listed above, there are some minor new features as well:

* Packages can now be specified for the `textmacros` extension to the
  TeX input jax.  This allows you to configure additional macros that
  can be processed within text mode.  See the :ref:`tex-textmacros`
  documentation for details.

..

* Processing of raw Unicode characters in TeX input has been improved.
  In the past, nearly all non-ASCII characters would be placed within
  an ``<mo>`` element, which is not always the best tag to use.  In
  version 3.2, processing of raw Unicode characters is more nuanced,
  so that letters are placed in ``<mi>`` elements and other symbols in
  ``<mo>``.  For example, a literal Greek alpha (U+03B1) will produce
  ``<mi>&#x03B1;</mi>`` (which is what is generated by ``\alpha``) rather
  than ``<mo>&#x03B1;</mo>`` as in earlier versions.  This should
  provide better results, though perhaps still not perfect in all
  cases.

..

* In the past, errors in the MathJax configuration options (such as an
  unknown option) would produce a fatal error and MathJax would not
  run.  In version 3.2, such errors now produce non-fatal warnings
  instead, and MathJax will continue to process the remaining options
  (and then typeset the page).  This means that changes to the options
  (like those described in the breaking changes section below)
  will not cause your pages to fail outright (though the old options
  will have no effect).  You can configure MathJax to make such errors
  fatal again, if you wish, and you can provide a function that will
  be called when there is an option error so that you can more easily
  trap such errors and handle them yourself.  See the :ref:`startup-options`
  for more details.

..

* The component loader uses a set of filters to convert a component
  specification (like ``[tex]/physics``) to the full URL for loading the
  extension.  In the past, it was difficult to hook into that
  filtering mechanism, but in version 3.2, you can now configure
  additional filters for the loader.  See the :ref:`loader-options`
  documentation for more details.

-----

.. _v3.2-breaking:

Breaking Changes in this Release
================================

Some of the changes made to the options to accommodate the updated
speech-rule engine are potentially breaking changes, in that the
previous options (``enrichSpeech``, ``a11y.locale``, ``a11y.speechRules``)
are no longer valid options.  Version 3.1.4 includes code to transfer
the old options to their new locations, but that code has been removed
in version 3.2.  As errors in options are no longer fatal (unless you
configure them to be), this change will no longer cause MathJax to
fail, but will cause warning messages in the browser console, so look
there for such error reports.

Similarly, the code that automatically renames the older TeX package
names to their current all-lower-case versions (e.g., ``configMacros``
to ``configmacros`` and ``colorV2`` to ``colorv2``) has been removed from
version 3.2.  If you are using old package names, you will need to
update your configuration.  This applies to ``\require{}`` macros that
refer to the older names as well as their names in the ``loader``
section, the ``tex.packages`` array, and the ``tex.autoload`` block.

Version 3.2 removes the ``matchFontHeight`` option for the SVG output
jax, since it only applies to the CommonHTML output, but was
previously allowed in the ``svg`` configuration block, while doing
nothing.

Version 3.2 removes of the ``toArray()`` method from the ``LinkedList``
class (and its subclasses), so any custom code that uses that should
switch to using ``Array.from(...)`` around the list instead.

Finally, the ``Box.ts`` and ``CssStyles.ts`` (and their associated ``.js``
files) have been moved from the ``output`` directories to the ``util``
directory.  Compatibility files were placed in the original locations
so that older code would continue to work, but these have been removed
in v3.2, so you should modify any custom code that loads these files
to obtain them from the ``util`` directory instead.


|-----|

#################################
/U. What's New inEarlier Versions
#################################

.. toctree::
    :name: whats-new-earlier
    :maxdepth: 1

    What's New in MathJax v2.7 <whats-new-2.7>
    What's New in MathJax v2.6 <whats-new-2.6>
    What's New in MathJax v2.5 <whats-new-2.5>
    What's New in MathJax v2.4 <whats-new-2.4>
    What's New in MathJax v2.3 <whats-new-2.3>
    What's New in MathJax v2.2 <whats-new-2.2>
    What's New in MathJax v2.1 <whats-new-2.1>
    What's New in MathJax v2.0 <whats-new-2.0>
    What's New in MathJax v1.1 <whats-new-1.1>
    Migrating from MathJax v1.0 to v1.1 <upgrade>
    Converting to MathJax from jsMath <jsMath>

-----

The links above may refer to sections of the documentation for version
2.7 that are no longer present in the documentation for version 3.  In
such cases, the links have been removed.  The original versions are
available in the `version 2 documentation
<http://docs.mathjax.org/en/v2.7-latest/upgrading/index.html>`__
pages.

|-----|
.. _jsMath-support:

*************************************
/U. Converting to MathJax from jsMath
*************************************

MathJax is the successor to the popular `jsMath
<http://www.math.union.edu/locate/jsMath/>`_ package for rendering
mathematics in web pages.  Like jsMath, MathJax works by locating and
processing the mathematics within the webpage once it has been loaded
in the browser by a user viewing your web pages.  If you are using
jsMath with its ``tex2math`` preprocessor, then switching to MathJax
should be easy, and is simply a matter of configuring MathJax
appropriately.  See the section on Loading and Configuring MathJax
for details.

On the other hand, if you are using jsMath's ``<span
class="math">...</span>`` and ``<div class="math">...</div>`` tags to
mark the mathematics in your document, then you should use MathJax's
``jsMath2jax`` preprocessor when you switch to MathJax.  To do this,
include ``"jsMath2jax.js"`` in the `extensions` array of your
configuration, with the `jax` array set to include ``"input/TeX"``.  For 
example,

.. code-block:: html

    <script type="text/x-mathjax-config">
       MathJax.Hub.Config({
        extensions: ["jsMath2jax.js"]
      });
    </script>
    <script
      src="https://example.com/MathJax.js?config=TeX-AMS_CHTML">
    </script>

would load the ``jsMath2jax`` preprocessor, along with a configuration 
file that processes TeX input and produces HTML-with-CSS output.

There are a few configuration options for ``jsMath2jax``, which you
can find in the ``config/default.js`` file, or in the jsMath
configuration options section.

If you are generating your jsMath documents programmatically, it would be
better to convert from generating the jsMath ``<span>`` and ``<div>`` tags
to producing the corresponding MathJax ``<script>`` tags.  You would use
``<script type="math/tex">`` in place of ``<span class="math">`` and
``<script type="math/tex; mode=display">`` in place of ``<div
class="math">``.  See the section on How mathematics is stored in the
page for more details.
.. _upgrade:

***************************************
/U. Migrating from MathJax v1.0 to v1.1
***************************************

MathJax v1.1 fixes a number of bugs in v1.0, and improves support for
new versions of browsers and mobile devices.  It includes changes to
increase its performance, and to make it more compliant with HTML5.  It
has more flexible configuration options, and the ability to load
configuration files that combine multiple files into a single one to
increase loading speed when MathJax starts up.  Finally, MathJax.org now
offers MathJax as a web service through a distributed "cloud" server.

This document describes the changes you may need to make to your MathJax
configurations in order to take advantage of these improvements.


Configuration Changes
=====================

The main changes that you will see as a page author are in the way that
MathJax can be loaded and configured.  If you have been using in-line
configuration by putting a :meth:`MathJax.Hub.Config()` call in the body of
the ``<script>`` tag that loads MathJax, then your site should work
unchanged with version 1.1 of MathJax.  You may wish to consider moving to
the new HTML5-compliant method of configuring MathJax, however, which uses
a separate ``<script>`` tag to specify the configuration.  That tag should
come **before** the one that loads ``MathJax.js``, and should have
``type="text/x-mathjax-config"`` rather than ``type="text/javascript"``.
For example,

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js">
      MathJax.Hub.Config({
        jax: ["input/TeX","output/HTML-CSS"],
        extensions: ["tex2jax.js"]
      });
    </script>

would become

.. code-block:: html

    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        jax: ["input/TeX","output/HTML-CSS"],
        extensions: ["tex2jax.js"]
      });
    </script>
    <script type="text/javascript" src="/MathJax/MathJax.js"></script>

instead.  This will make sure your pages pass HTML5 validation.  Be sure
that you put the configuration block **before** the script that loads
MathJax.  See `Loading and Configuring MathJax` for more
details.

If your page simply loads ``MathJax.js`` and relies on
``config/MathJax.js``, then you will need to modify your ``<script>`` tag
in order to use MathJax v1.1.  This is because MathJax no longer loads a
default configuration file; you are required to explicitly specify the
configuration file if you use one.  Furthermore, the name of the
``config/MathJax.js`` file was a source of confusion, so it has been
renamed ``config/default.js`` instead.  Thus, if you used

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js"></script>

in the past, you should replace it with

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js?config=default"></script>

instead.  If you don't do this, you will receive a warning message that
directs you to a page that explains how to update your script tags to use
the new configuration format.


Combined Configurations
=======================

New with version 1.1 is the ability to combine several files into a single
configuration file, and to load that via the same script that loads
MathJax.  This should make configuring MathJax easier, and also helps to
speed up the initial loading of MathJax's components, since only one file
needs to be downloaded.

MathJax comes with four pre-built configurations, and our hope is that one
of these will suit your needs.  They are described in more detail in the
`Using a Configuration File` section.  To load one,
add ``?config=filename`` (where ``filename`` is the name of the
configuration file without the ``.js``) to the URL that loads
``MathJax.js``.  For example

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js">
      MathJax.Hub.Config({
        jax: ["input/TeX","output/CommonHTML"],
        extensions: ["tex2jax.js","AMSmath.js","AMSsymbols.js"]
      });
    </script>

could be replaced by the single line

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js?config=TeX-AMS_CHTML"></script>

In this way, you don't have to include the in-line configuration, and all
the needed files will be downloaded when MathJax starts up.  For complete
details about the contents of the combined configuration files, see the
`Common Configurations` section.

If you want to use a pre-defined configuration file, but want to modify some
of the configuration parameters, you can use both a
``text/x-mathjax-config`` block and a ``config=filename`` parameter in
combination.  For example,

.. code-block:: html

    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [ ['$','$'], ['\\(','\\)'] ],
          processEscapes: true
        }
      });
    </script>
    <script type="text/javascript" src="/MathJax/MathJax.js?config=TeX-AMS_CHTML"></script>

would load the ``TeX-AMS_HTML`` configuration file, but would reconfigure
the inline math delimiters to include ``$...$`` in addition to
``\(...\)``, and would set the ``processEscapes`` parameter to ``true``.


Loading MathJax from a CDN
==========================

The MathJax installation is fairly substantial (due to the large number of
images needed for the image fonts), and so you may not want to (or be able
to) store MathJax on your own server.  Keeping MathJax up to date can also
be a maintenance problem, and you might prefer to let others handle that
for you.  In either case, using the MathJax distributed network service may be
the best way for you to obtain MathJax.  That way you can be sure you are
using an up-to-date version of MathJax, and that the server will be fast
and reliable.

See `Loading MathJax from a CDN` for more information.

Change in default TeX delimiters
================================

In addition to the fact that MathJax v1.1 no longer loads a default
configuration file, there is a second configuration change that could
affect your pages.  The ``config/MathJax.js`` file properly configured the
`tex2jax` preprocessor to use only ``\(...\)`` and not ``$...$`` for in-line
math delimiters, but the `tex2jax` preprocessor itself incorrectly
defaulted to including ``$...$`` as in-line math delimiters.  The result
was that if you used in-line configuration to specify the ``tex2jax``
preprocessor, single-dollar delimiters were enabled by default, while if
you used file-based configuration, they weren't.

This inconsistency was an error, and the correct behavior was supposed to
have the single-dollar delimiters disabled in both cases.  This is now
true in v1.1 of MathJax.  This means that if you used in-line
configuration to specify the `tex2jax` preprocessor, you will need to
change your configuration to explicitly enable the single-dollar
delimiters if you want to use them.

For example, if you had

.. code-block:: html

    <script type="text/javascript" src="/MathJax/MathJax.js">
      MathJax.Hub.Config({
        jax: ["input/TeX","output/HTML-CSS"],
        extensions: ["tex2jax.js"]
      });
    </script>

and you want to use single-dollar delimiters for in-line math, then you
should replace this with

.. code-block:: html

    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        jax: ["input/TeX","output/HTML-CSS"],
        extensions: ["tex2jax.js"],
        tex2jax: {
          inlineMath: [ ['$','$'], ['\\(','\\)'] ],
          processEscapes: true
        }
      });
    </script>
    <script type="text/javascript" src="/MathJax/MathJax.js"></script>

The same technique can be used in conjunction with a combined
configuration file.  For example

.. code-block:: html

    <script type="text/x-mathjax-config">
      MathJax.Hub.Config({
        tex2jax: {
          inlineMath: [ ['$','$'], ['\\(','\\)'] ],
          processEscapes: true
        }
      });
    </script>
    <script type="text/javascript" src="/MathJax/MathJax.js?config=TeX-AMS_CHTML"></script>

will load the pre-defined ``TeX-AMS_CHTML`` configuration, but will modify
the settings to allow ``$...$`` delimiters, and to process ``\$`` to
produce dollar signs within the text of the page.


New Distribution Location
=========================

Version 1.0 of MathJax was distributed through `SourceForge`, but the
development of MathJax has switched to `GitHub
<https://github.com/mathjax/MathJax/>`_, which is now the primary location
for MathJax source code and distributions.  The SourceForge repository will
no longer be actively maintained (and hasn't been since November 2010), and
so you will not be able to obtain updates through ``svn`` if you checked
out MathJax from there.

You may be able to switch to using the MathJax CDN (see above) rather than
hosting your own copy of MathJax, and avoid the problem of updates all
together.  If you must install your own copy, however, you should follow
the instructions at `Installing and Testing MathJax`,
using either ``git`` or ``svn`` as described to obtain your copy from
GitHub.  This will allow you to keep your copy of MathJax up to date as
development continues.

We apologize for the inconvenience of having to switch distributions, but
the git-to-svn bridge we tried to implement to keep both copies in synch
turned out to be unreliable, and so the SourceForge distribution was
retired in favor of the GitHub site.
..**** _whats-new-1.1:
U. /
******************************
What's New in MathJax v1.1
**************************

MathJax version 1.1 includes a number of important improvements and
enhancements over version 1.0.  We have worked hard to fix bugs, improve
support for browsers and mobile devices, process TeX and MathML better, and
increase MathJax's performance.

In addition to these changes, MathJax.org now offers MathJax as a network
service.  Instead of having to install MathJax on your own server, you can
link to our content delivery network (CDN) to get fast access to 
up-to-date and past versions of MathJax.  See `Loading MathJax from 
the CDN` for more details.

The following sections outline the changes in v1.1:

Optimization
============

* Combined configuration files that load all the needed files in one piece 
  rather than loading them individually.  This simplifies configuration 
  and speeds up typesetting of the mathematics on the page.

* Improved responsiveness to mouse events during typesetting.

* Parallel downloading of files needed by MathJax, for faster startup 
  times.

* Shorter timeout for web fonts, so if they can't be downloaded, you don't 
  have to wait so long.

* Rollover to image fonts if a web font fails to load (so you don't have 
  to wait for *every* font to fail.

* The MathJax files are now packed only with `yuicompressor` rather than a 
  custom compressor.  The CDN serves gzipped versions, which end up being
  smaller than the gzipped custom-packed files.

* Improved rendering speed in IE by removing ``position:relative`` from 
  the style for mathematics.

* Improved rendering speed for most browsers by isolating the mathematics
  from the page during typesetting (avoids full page reflows).


Enhancements
============

* Allow the input and output jax configuration blocks to specify extensions
  to be loaded when the jax is loaded (this avoids needing to load them up 
  front, so they don't have to be loaded on pages that don't include 
  mathematics, for example).

* Better handling of background color from style attributes.

* Ability to pass configuration parameters via script URL.

* Support HTML5 compliant configuration syntax.

* Switch the Git repository from storing the fonts in `fonts.zip` to 
  storing the `fonts/` directory directly.

* Improved About box.

* Added a minimum scaling factor (so math won't get too small).


TeX Support
============

* Added support for ``\href``, ``\style``, ``\class``, ``\cssId``.
* Avoid recursive macro definitions and other resource consumption possibilities.
* Fix for ``\underline`` bug.
* Fix for bug with ``\fbox``.
* Fix height problem with ``\raise`` and ``\lower``.
* Fix problem with ``\over`` used inside array entries.
* Fix problem with nesting of math delimiters inside text-mode material.
* Fix single digit super- and subscripts followed by punctuation.
* Make sure `movablelimits` is off for ``\underline`` and related macros.
* Fix problem with dimensions given with ``pc`` units.


MathML Support
==============

* Fix ``&lt;`` and ``&amp;`` being translated too early.
* Handle self-closing tags in HTML files better.
* Combine adjacent relational operators in ``<mo>`` tags.
* Fix entity name problems.
* Better support for MathML namespaces.
* Properly handle comments within MathML in IE.
* Properly consider ``<mspace>`` and ``<mtext>`` as space-like.
* Improved support for ``<maction>`` with embellished operators.


Other Bug Fixes
===============

* Fixed CSS bleed through with zoom and other situations.
* Fixed problems with ``showMathMenuMSIE`` when set to ``false``.
* Replaced illegal prefix characters in cookie name.
* Improved placement of surd for square roots and n-th roots.
* Fixed layer obscuring math from MathPlayer for screen readers.
* Newlines in CDATA comments are now handled properly.
* Resolved conflict between `jsMath2jax` and `tex2jax` both processing the 
  same equation.
* Fixed problem with ``class="tex2jax_ignore"`` affecting the processing of 
  sibling elements.


Browser Support
===============

**Android**

* Added detection and configuration for Android browser.
* Allow use of OTF web fonts in Android 2.2.


**Blackberry**

* MathJax now works with OS version 6.


**Chrome**

* Use OTF web fonts rather than SVG fonts for version 4 and above.


**Firefox**

* Added Firefox 4 detection and configuration.
* Fix for extra line-break bug when displayed equations are in 
  preformatted text.
* Updated fonts so that FF 3.6.13 and above can read them.


**Internet Explorer**

* Changes for compatibility with IE9.
* Fix for IE8 incorrectly parsing MathML.
* Fix for IE8 namespace problem.
* Fix for null ``parentNode`` problem.
* Fix for ``outerHTML`` not quoting values of attributes.

**iPhone/iPad**

* Added support for OTF web fonts in iOS4.2.

**Nokia**

* MathJax now works with Symbian\ :sup:`3`\ .

**Opera**

* Prevent Opera from using STIX fonts unless explicitly requested via the 
  font menu (since Opera can't display many of the characters).
* Fixed bad em-size detection in 10.61.
* Fixed a problem with the About dialog in Opera 11.


**Safari**

* Use OTF web fonts for Safari/PC.


**WebKit**

* Better version detection.
.. _whats-new-2.0:

******************************
/U. What's New in MathJax v2.0
******************************

MathJax version 2.0 includes many new and improved features, including
much better speeds in Internet Explorer, a new AsciiMath input
processor, a new `SVG` output processor, support for additional
LaTeX commands, and many bug fixes, to name just a few of the changes.


Major speed improvement for HTML-CSS output, particularly in IE
===============================================================

The HTML-CSS output processing was redesigned to avoid the page
reflows that were the main source of the speed problem in Internet
Explorer 8 and 9.  For test pages having between 20 and 50 typeset
expressions, we see an 80% reduction in output processing time for
IE8, a 50% reduction for IE9, and between 15% and 25% reduction for
most other browsers over the corresponding v1.1a times.  Since the
processing time in v1.1a grows non-linearly in IE, you should see even
larger savings for pages with more equations when using v2.0.  Forcing
IE7 emulation mode is no longer necessary (and indeed is no longer
recommended).


Reduced flickering during typsetting
====================================

In the past, each expression was displayed as soon as it was typeset,
which caused a lot of visual flickering as MathJax processed the page.
In v2.0, the output is processed in blocks so that typeset expressions
are revealed in groups.  This reduces the visual distraction, and also
speeds up the processing.  The number of equations in a block can be
controlled through the ``EqnChunk`` parameter in the HTML-CSS or SVG
block of your configuration.  See the `configuration options for
HTML-CSS` and `configuration options for SVG` pages for details.

If the page URL includes a hash reference (a link to a particular
location within the page), MathJax v2.0 will jump to that location
after the page has finished typsetting.  (Since the size of the page
may have changed due to the mathematical typsetting, that location may
no longer be visible on screen, so MathJax moves there when it is done
with the initial typesetting.)  You can control this behavior with the
``positionToHash`` parameter in the main section of your
configuration.  See the `core configuration options` page for details.


Automatic equation numbering of TeX formulas
============================================

The TeX input jax now can be configured to add equation numbers
(though the default is not to number equations so that existing pages
will not change their appearance).  This is controlled through the
``equationNumbers`` section of the ``TeX`` block of your configuration
(see the `equation numbering` section for
details).  You can request that the numbering follow the AMS-style
numbering of environments, or you can request that every displayed
equation be numbered.  There are now ``\label``, ``\ref``, and
``\eqref`` commands to make it easier to link to particular equations
within the document.


Automatic line breaking of long displayed equations
===================================================

MathJax now implements the MathML3 specification for automatic line
breaking of displayed equations in its HTML-CSS output.  This is
disabled by default, but can be enabled via the ``linebreaks`` section
of the ``HTML-CSS`` or ``SVG`` block of your configuration (see the
`automatic line breaking` section for
details).  Note that automatic line breaking only applies to displayed
equations, not in-line equations, unless they are themselves longer
than a line.  The algorithm uses the nesting depth, the type of
operator, the size of spaces, and other factors to decide on the
breakpoints, but it does not know the meaning of the mathematics, and
may not choose the optimal breakpoints.  We will continue to work on
the algorithm as we gain information from its actual use in the field.


New AsciiMath input jax and SVG output jax
==========================================

MathJax currently processes math in either `TeX` and
`LaTeX` format, or `MathML` notation; version 2.0 augments
that to include `AsciiMath` notation (see `the ASCIIMathML
home page <http://www1.chapman.edu/~jipsen/mathml/asciimath.html>`_
for details on this format).  This is a notation that is easier for
students to use than TeX, and has been requested by the user
community.  See the `AsciiMath support` page
for details.

In addition to the HTML-CSS and Native MathML output available in
v1.1, MathJax v2.0 includes an `SVG`-based output jax.  This should
prove to be more reliable than the HTML-CSS output, as it avoids some
CSS, web-font, and printing issues that the HTML-CSS output suffers
from, and it currently has no browser-dependent code.  The SVG mode
even works in some ebook readers (like Apple iBooks and Calibre).  See
the `output formats` documentation for details.


New combined configuration files
================================

Pre-defined configuration files that include the AsciiMath and SVG
processors are now available with MathJax v2.0. These include
``AM_HTMLorMML``, ``TeX-AMS-MML_SVG``, and ``TeX-MML-AM_HTMLorMML``.
See the `common configurations` section for details.


MathJax contextual menu now available on mobile devices
=======================================================

MathJax v2.0 provides access to its contextual menu in mobile devices
that are based on the WebKit (Safari) and Gecko (Firefox) engines.
For Mobile Firefox, the menu is accessed by a tap-and-hold on any
expression rendered by MathJax (this is Mobile Firefox's standard
method of triggering a contextual menu).  In Mobile Safari, use a
double-tap-and-hold (you may need to zoom in a bit to be able to
accomplish this).  This is the first step toward providing a better
interface for mobile devices.


Improved support for screen readers
===================================

Some issues surrounding the use of screen readers and their
interaction with MathPlayer have been resolved in MathJax v2.0.  In
particular, there are additional menu items that allow the user finer
control over some aspects of MathJax's interface that were interfering
with some screen readers' ability to properly identify the
mathematics.  Several stability issues with MathPlayer have also been
addressed.  In Internet Explorer when MathPlayer is installed, there
is now a new contextual menu item to allow you to specify what events
are handled by MathJax and what should be handled by MathPlayer.  This
gives you finer control over MathPlayer's interaction with some screen
readers.


Many new TeX additions and enhancements
=======================================

* New `mhchem` chemistry extension (adds ``\ce``, ``\cf``, and ``\cee`` macros)

* New `cancel` extension (adds ``\cancel``, ``\bcancel``, ``\xcancel``, and ``\cancelto`` macros)

* New `extpfeil` extension (adds more stretchy arrows)

* New `color` extension (makes ``\color`` work as a switch, as in LaTeX).
  Adds ``\definecolor``, other color models, LaTeX named colors,
  ``\colorbox``, ``\fcolorbox``, etc.

* New `begingroup` extension to allow macro definitions to be
  localized. Adds ``\begingroup`` and ``\endgroup`` for isolating macro
  declarations, and defines ``\let``, ``\renewenvironment``, ``\global``, and
  ``\gdef``.

* New `enclose` extension to give TeX access to ``<menclose>`` elements.
  Adds ``\enclose{type}[attributes]{math}`` macro.

* New `action` extension to give TeX access to ``<maction>`` elements.
  Adds ``\mathtip{math}{tip}``, ``\texttip{math}{tip}``, and
  ``\toggle{math1}{math2}...\endtoggle`` macros.

* New ``\mmToken{type}[attributes]{text}`` macro for producing ``<mo>``,
  ``<mi>``, ``<mtext>``, and other token MathML elements directly.

* New ``\bbox[color;attributes]{math}`` macro to add background color,
  padding, borders, etc.

* New ``\middle`` macro for stretchy delimiters between ``\left`` and ``\right``.

* New ``\label``, ``\ref``, and ``\eqref`` macros for numbered equations.

* Better implementation of ``\not`` so it produces proper MathML when possible.

* Better implementation of ``\dots`` that selects ``\ldots`` or ``\cdots``
  depending on the context.

* Better implementation of ``\cases`` that automatically uses ``\text`` on
  the second entry in each row.

* Safer implementation of ``\require`` that only allows loading from
  extensions directory.

* Allow ``\newcommand`` to provide a default parameter.

* Allow ``\\`` to take an optional argument that specifies additional
  space between lines.

* Allow ``\\`` to be used anywhere (to force a line break), not just in
  arrays.

* Allow optional alignment parameter for array, aligned, and gathered
  environments.

See the `TeX support` page for details on these
extensions and macros.


Font enhancements
=================

*  Work around for the OS X Lion STIX font problem.

*  Support for STIX-1.1 fonts (detection of which version you have,
   and use data appropriate for that).

*  New WOFF versions of the web fonts (smaller, so faster to
   download).

*  Data for more stretchy characters in HTML-CSS output.

*  Add support for Unicode planes 1 through 10 (not just the Math
   Alphabet block) in HTML-CSS output.

*  Increased timeout for web fonts (since it was switching to image
   fonts too often, especially for mobile devices).

*  Only switch to image fonts if the first web font fails to load (if
   we can access one, assume we can access them all).

*  Allow ``<mtext>`` elements to use the page font rather than MathJax
   fonts (optionally).  This is controlled by the ``mtextFontInerhit``
   configuration parameter for HTML-CSS and SVG output jax.

*  Provide better control over the font used for characters that are
   not in the MathJax fonts.

*  Allow Firefox to use web-based fonts when a local URL uses MathJax
   from the CDN (in the past it would force image fonts when that was
   not necessary).


Interface improvements
======================

*  The MathJax contextual menu has been reorganized to make it easier
   to get the source view, and to control the parameters for
   MathPlayer in IE.

*  The MathJax contextual menu is available in mobile devices (see
   description above).

*  Warning messages are issued if you switch renderers to one that is
   inappropriate for your browser.

*  MathJax now starts processing the page on the ``DOMContentLoaded``
   event rather than the page ``onload`` event (this allows the
   mathematics to appear sooner).

*  Native MathML output is now scaled to better match the surrounding
   font (like it is for HTML-CSS output).

*  Better CSS styling for NativeMML output in Firefox in order to
   handle ``\cal`` and other fonts.

*  MathML output now (optionally) includes class names to help mark
   special situations generated by the TeX input jax.  (This lets the
   MathML from the Show Source menu item better reproduce the original
   TeX output.)

*  MathJax now loads the menu and zoom code (if they haven't been
   loaded already) after the initial typesetting has occurred so that
   they will be available immediately when a user needs those
   features, but do not delay the initial typesetting of the
   mathematics.

*  For the `tex2jax` preprocessor, the ``processClass`` can now be
   used to override the ``skipTags`` to force a tag that is usually
   skipped to have its contents be processed.

*  The `noErrors` and `noUndefined` extensions can now be disabled via
   a configuration option (since they are included in many of the
   combined configuration files).  See the `noErrors` and
   `noUndefined` sections of the `TeX support` page for more information.

*  There is a new :meth:`MathJax.Hub.setRenderer()` function that can
   be used to switch the current renderer.  See the `MathJax Hub
   API` documentation for details.

*  A user-defined macros is no longer overridden if an extension is
   loaded that redefines that macro.

*  Improved web-font detection reliability.


.. _important-changes-2.0:

Important changes from previous versions
========================================

*  The default renderer for Firefox has been changed from `NativeMML` to
   `HTML-CSS` (in those configurations that choose between the two).
   The only browser that defaults to `NativeMML` is now IE with
   MathPlayer installed.  You can configure this to your liking using
   the `MMLorHTML configuration options`.

*  `NativeMML` output will now be selected in IE9 when MathPlayer is
   present (since IE9 was released the same day as MathJax v1.1a, and
   there had been problems with IE9 beta releases, we weren't sure if
   MathPlayer would work with the official release, and so did not
   select NativeMML by default.)

*  The performance improvements in IE8 and IE9 now make it unnecessary
   to use a ``<meta>`` tag to force IE7 emulation mode.  In fact IE9 in
   IE9 standards mode now runs faster than IE9 in IE7 standards mode,
   and IE8 in IE8 standards mode is comparable to IE8 in IE7 standards
   mode.  We now recommend that you use 

   .. code-block:: html

       <meta http-equiv="X-UA-Compatible" content="IE=edge">

   to obtain the highest emulation mode available in IE, which
   will be the fastest one for MathJax 2.0.

*  The `tex2jax` preprocessor now balances braces when looking for the
   closing math delimiter.  That allows expressions like

   .. code-block:: latex

       $y = x^2 \hbox{ when $x > 2$}$

   to be properly parsed as a single math expression rather than two
   separate ones with unbalanced braces.  The old behavior can be
   obtained by setting ``balanceBraces`` to false in the ``tex2jax``
   block of your configuration.  (See the `tex2jax configuration
   options` for details.)

*  If you are hosting your own copy of MathJax on your server, and
   that copy is being used from pages in a different domain, you will
   have set up the access control parameters for the font directory to
   allow Firefox to access the font files properly.  Since MathJax 2.0
   includes fonts in WOFF format, you will need to include ``woff`` in
   you access control declaration for the fonts.  E.g., use
   ::

       <FilesMatch "\.(ttf|otf|eot|woff)$">
       <IfModule mod_headers.c>
       Header set Access-Control-Allow-Origin "*"
       </IfModule>
       </FilesMatch>

   in the ``.htaccess` file for the ``MathJax/fonts`` directory if you
   are using the Apache web server.  See `Notes about shared
   installations` for details.

*  The ``\cases`` macro now properly places the second column in text
   mode not math mode.  In the past, one needed to use ``\text`` in
   the second column to achieve the proper results; pages that did
   this will still work properly in v2.0.  Pages that took advantage
   of the math mode in the second column will need to be adjusted.

*  The ``\dots`` macro now produces ``\ldots`` or ``\cdots`` depending
   on the context (in the past, ``\dots`` always produced ``\ldots``).

*  A one pixel padding has been added above and below HTML-CSS and SVG
   output so that math on successive lines of a paragraph won't bump
   into each other.

*  There is a new `MathPlayer` submenu of the `Math Settings` menu in
   the MathJax contextual menu that allows the user to control what
   events are passed on to MathPlayer.  This allows better control for
   those using assistive devices like screen readers.  When menu
   events are being passed on to MathPlayer, the MathJax menu can be
   obtained by ALT-clicking on a typeset expression (so the user can
   still access MathJax's other features).

*  In order to improve stability with IE when MathPlayer is installed,
   MathJax now adds the namespace and object bindings that are needed
   for MathPlayer at the time that MathJax is first loaded, rather
   than waiting for the `NativeMML` output jax to be loaded.  Since
   this is before the configuration information has been obtained,
   this will happen regardless of whether the `NativeMML` output jax
   is requested.  This means that IE may ask the user to allow
   MathPlayer to be used, and may show the MathPlayer splash dialog
   even when MathPlayer is not in the end used by MathJax.  Note that
   this setup can only be performed if MathJax is loaded explicitly as
   part of the initial web page; if it is injected into the page later
   by adding a ``<script>`` tag to the page dynamically, then
   MathPlayer will be set up when the `NativeMML` jax is loaded as in
   the past, and some stability issues may occur if events are passed
   to MathPlayer.

*  The MathJax typesetting is now started on ``DOMContentLoaded``
   rather than at the page ``onload`` event, when possible, so that
   means MathJax may start typesetting the page earlier than in the
   past.  This should speed up typesetting one pages with lots of
   images or side-bar content, for example.

*  MathJax now attempts to determine whether the page's ``onload``
   event had already occurred, and if it has, it does not try to wait
   for the ``DOMContentLoaded`` or ``onload`` event before doing its
   initial typeset pass.  This means that it is no longer necessary to
   call ``MathJax.Hub.Startup.onload()`` by hand if you insert MathJax
   into the page dynamically (e.g., from a GreaseMonkey script).

*  If the page URL includes a hash reference (a link to a particular
   location within the page), MathJax v2.0 will jump to that location
   after the page has finished typsetting.  Since the size of the page
   may have changed due to the mathematical typsetting, that location
   may no longer be visible on screen, so MathJax moves there when it
   is done with the initial typesetting.  You can control this
   behavior with the ``positionToHash`` parameter in the main section
   of your configuration (see `core configuration options`).

*  In the event that MathJax is not able to load the configuration file
   you have specified in the script tag that loads ``MathJax.js`` via
   ``config=filename``, it will no longer issue the warning message
   about a missing configuration.  The configuration process changed
   in v1.1, and that message was to help page maintainers update their
   configurations, but it turns out that for users with slow network
   connections, MathJax could time out waiting for the configuration
   file and would issue the warning message in that case, even though
   the page included the proper configuration.  That should no longer
   occur in MathJax v2.0.


Other enhancements
==================

*  Use prioritized lists of callbacks for StartupHooks, MessageHooks,
   LoadHooks, PreProcessors, and pre- and post-filters on the input jax.

*  Updated operator dictionary to correspond to current W3C version.

*  Improved browser detection for Gecko and WebKit browsers.

*  Make prefilters and postfilters for all input jax, and make them into
   hook lists rather than a single hook.

*  Use ``<mi>`` rather than ``<mo>`` for ``\sin``, ``\cos``, and other
   such functions, for ``\mathop{\rm...}`` and ``\operatorname``.

*  Add ``&ApplyFunction;`` after ``\mathop{}`` and other macros that are
   functions (e.g., ``\sin``).

*  The ``MathJax_Preview`` style has been moved from ``HTML-CSS/jax.js`` to
   ``MathJax.js``, since it is common to all output.

*  The `autobold` extension now uses ``\boldsymbol`` rather than
   ``\bf`` so that it will affect more characters.

*  Make units of ``mu``'s be relative to the scriptlevel (as they
   are supposed to be).

*  Reorganized the event-handling code to make it more modular and reduce
   redundancy in the different output jax.

*  Modified CSS in `NativeMML` output for Firefox to use local copies of
   the web fonts, if they are available.

*  Error messages now have the MathJax contextual menu.

*  Better handling of some characters not in the web fonts (remap to
   locations where they exist, when possible).

*  Better choice of accent characters in some cases.

*  Better handling of pseudo-scripts (like primes).

*  Better sizing of characters introduced by ``\unicode{}``, or
   otherwise outside of the fonts known to MathJax.

*  Provide a new extension to handle tagged equations better in
   `HTML-CSS` output when there are floating elements that might
   reduce the area available to displayed equations.  (See the
   HTML-CSS extensions section of the `output formats` documentation
   for details.)

*  Use a text font for ``\it`` rather than the math italics, so
   spacing is better.

*  Handle italic correction better in `HTML-CSS` output

*  Handle ``href`` attributes better, especially when on ``<math>``
   elements.

*  Allow ``\sqrt\frac{}{}`` without producing an error.


Other bug fixes
===============

*  MathPlayer setup changed to prevent crashes.

*  Moved remapping of ``<mo>`` contents to the output jax so that the
   original contents aren't changed.

*  Don't combine ``mathvariant`` with ``fontstyle`` or ``fontweight``
   (as per the MathML specification).

*  Isolate non-standard attributes on MathML elements so that they don't
   interfere with the inner workings of MathJax.

*  Properly handle width of border and padding in merrors in `HTML-CSS`
   output.

*  Properly handle lower-case Greek better.

*  Process weight and style of unknown characters properly.

*  Fixed spacing problems with ``\cong`` in MathJax web fonts .

*  Choose better sizes for ``\widehat`` and ``\widetilde``

*  Fixed problem with detecting em/ex sizes when uses in mobile devices
   with small screen widths.

*  Fixed MathML output when dimensions of ``mu``'s are used in TeX input.

*  Better handling of table borders from TeX.

*  Fixed some problems with table widths and heights, and spacing.

*  Better handling of colored backgrounds in `HTML-CSS` output.

*  Handle border and padding CSS styles better in `HTML-CSS` output.

*  Fixed multline environment to put tags on bottom row when
   ``TagSide`` is set to ``right``.

*  Force reflow after equations are typeset so that some rendering
   problems in tables are corrected in Firefox and WebKit browsers.

*  Fixed a number of bugs with the size of zoom boxes and the size of their
   content.

*  Have equations with tags zoom into a full-width zoom box to
   accommodate the tag.

*  Fixed positioning problem with zoom boxes in NativeMML mode.

*  Don't allow mouse events on zoomed math.

*  Fixed ``MathJax.Hub.getJaxFor()`` and ``MathJax.Hub.isJax()`` to
   properly handle elements that are part of an output jax's output
   (in particular, you can find the element jax from any DOM element
   in the output).

*  Fixed a number of font anomalies (problems in the data files).

*  Fixed problem where ``<mspace>`` with a background color would not
   always overlay previous items.

*  Fixed a problem with colored ``<mspace>`` elements being too tall in
   IE/quirks mode.

*  Fixed problem where ``<mtable>`` with ``equalrows="true"`` would
   not produce equal height rows.

*  Allow ``<mpadded>`` background color to be specified exactly (i.e.,
   without the 1px padding) when one of its dimensions is given
   explicitly (or there is no content).

*  Avoiding flicker problem with hover zoom trigger in Firefox.

*  Fix ``\unicode`` bug with font names that include spaces.

*  Remove internal multiple spaces in token elements as per the MathML
   specification.

*  Work around HTML5 removing namespaces, so that ``xmlns:xlink``
   becomes ``xlink`` with no namespace, which confuses the XML parsers.

*  Fix ``MathJax.Message.Set()`` and ``MathJax.Message.Clear()`` so
   that a delay of 0 is properly handled.

*  Produce better MathML for ``\bmod``, ``\mod``, and ``\pmod``.

*  Don't allow Safari/Windows to use STIX fonts since it can't access
   characters in Plane1 (the mathematical alphabets).

*  Fix ``\thickapprox`` to use the correct glyph in `HTML-CSS` output
   with MathJax web fonts.

*  Make style attributes work on ``<mstyle>`` elements.

*  Better handling of border and padding on MathML elements in
   `HTML-CSS` output.

*  Fixed error with size of ``\:`` space.

*  Allow delimiter of ``.`` on ``\genfrac`` (it was accidentally rejected).

*  Handle AMSmath control sequences with stars better (``\cs{*}`` no longer
   counts as ``\cs*``).

*  Fixed wrong character number in stretchy data for `U+221A`.

*  Fixed ``<annotation-xml>`` to use the proper scaling in `HTML-CSS`
   output.

*  Fixed a problem with combining characters when they are used as
   accents.

*  Fixed a problem in Firefox with ``\mathchoice`` when the contents have
   negative width.

*  TeX input jax no longer incorrectly combines ``<mo>`` elements that have
   different variants, styles, classes, or id's.

*  Fixed the ``scriptlevel`` when ``<munderover>`` has base with
   ``movablelimits="true"`` in non-display mode.

*  Fixed typo in implementation of ``SimpleSUPER``.

*  Fixed typo in self-closing flag for ``<mprescript>`` tag.

*  Prevent infinite loop if one of the jax fails to load (due to failure
   to compile or timeout waiting for it to load).

*  Fixed a whitespace issue in token elements with IE/quirks mode in
   the `MathML` input jax.

*  Make sure height is above depth when making spaces and rules in
   `HTML-CSS` and `SVG` output.

*  Fixed `HTML-CSS` tooltip to be work properly when a restart occurs
   within the tooltip.

*  Fixed problem with size of colored backgrounds on ``<mo>`` in some
   circumstances in `HTML-CSS` output.

*  Make ``\ulcorner``, etc. use more appropriate unicode positions, and remap
   those positions to the locations in the MathJax web fonts.


Some technical changes
======================

*  Break the processing phase into two separate phases to do input
   processing separately from output processing (they used to be
   interleaved).  This makes it easier to implement forward references
   for the ``\ref`` macro.

*  Make ``Font Preference`` menu honor the ``imageFont`` setting.

*  Changed the name of the preview filter commands to ``previewFilter``
   in all preprocessors.

*  Make ``^`` and ``_`` be stretchy even though that isn't in the W3C
   dictionary.

*  Fixed `HTML-CSS` output problem when a multi-character token element has
   characters taken from multiple fonts.

*  Force message text to be black in FontWarnings and configuration
   warnings.

*  Added ``Find()`` and ``IndexOf()`` commands to menus to locate menu items.

*  Added menu signals for post/unpost and activation of menu items.

*  Added signals for typesetting of unknown characters.

*  Added signals for zoom/unzoom.

*  Added More signals for error conditions.

*  Allow preferences to select MathML output for Safari with late enough
   version.

*  Improved `About MathJax` box.

*  Have `tex2jax` handle empty delimiter arrays and don't scan page if
   there is nothing to look for.

*  Make delay following a `processing` message configurable and lengthen
   it to make browser more responsive during typesetting.

*  Make thin rules be in pixels to try to improve results in IE
   (disappearing division lines).

*  Mark all output elements as ``isMathJax``, so it can be used to identify
   what elements are part of mathematical output.

*  Force MathZoom and MathMenu to wait for the ``Begin Styles`` message
   before inserting their styles so when they are included in the
   combined files, the author can still configure them.

*  Add default id's to the jax base object classes.

*  Mark top-level math element as having a ``texError`` when it is one (to
   make it easier to recognize).

*  Have ``Update()`` method ask ElementJax to determine if it needs updating
   (which in turn asks the associated input jax).

*  Make ``Remove()`` work for just clearing output (without detaching) if
   desired.

*  Have ElementJax store input and output jax ID's rather than pointers
   (to help avoid circular references for cleanup purposes).

*  Move input/output jax and preprocessor registries from ``Hub.config`` to
   Hub itself (they are not user configurable through ``Hub.Config``, and so
   even though they are configurations, they don't belong there).

*  Make sure embelished large ops are type ``OP`` not ``ORD`` to get spacing
   right.

*  Added ``MathJax.HTML.getScript()`` to get the contents of a script (needed
   since it works differently in different browsers).

*  Move code that prevents numbers from being treated as a unit for
   super- and subscripts to the super- and subscript routine in the
   `TeX` input jax (prevents making changes to ``\text{}``,
   ``\hbox{}``, ``\href{}``, etc.).

*  Make `mml2jax` work better with IE namespaces (IE9 no longer seems to
   list the ``xmlns`` entries on the ``<html>`` element).
.. _whats-new-2.1:

******************************
/U. What's New in MathJax v2.1
******************************

MathJax v2.1 is primarily a bug-fix release.  Numerous display bugs, line-breaking problems, and interface issues have been resolved.  The following lists indicate the majority of the bugs that have been fixed for this release.


Interface
=========

* Make NativeMML output properly handle iOS double-tap-and-hold, and issue warning message when switching to NativeMML output.
* Use ``scrollIntoView`` to handle ``positionToHash`` rather than setting the document location to prevent pages from refreshing after MathJax finishes processing the math.
* Handle positioning to a hash URL when the link is to an element within SVG output.
* Make ``href``'s work in SVG mode in all browsers.
* Fix problem with opening the "Show Math As" window in WebKit (affected Chrome 18, and Safari 5.1.7).
* Use MathJax message area rather than window status line for ``maction`` with ``actiontype='statusline'`` to avoid security restrictions in some browsers.
* Fix issue where zoom box for math that has been wrapped to the beginning of a line would be positioned at the end of the previous line.
* Fix a problem where IE would try to typset the page before it was completely available, causing it to not typeset all the math on the page (or in some cases *any* of the math).
* Allow decimal scale values in the dialog for setting the scale.
* Fix SVG output so that setting the scale will rescale the existing mathematics.
* Add close button to About box and don't make clicking box close it (only clicking button).
* Make About box show 'woff or otf' when otf fonts are used (since both are requested).
* Have output jax properly skip math when the input jax has had an internal failure and so didn't produce any element jax.
* Produce ``MathJax.Hub`` signal when ``[Math Processing Error]`` is generated.


Line-breaking
=============

* Fix problem with SVG output disappearing during line breaks when equation numbers are also present.
* Fix problem with potential infinite loop when an ``<mspace>`` is an embellished operator that causes a linebreak to occur.
* Allow line breaks within the base of ``<msubsup>`` to work so that the super and subscripts stay with the last line of the base.
* Fix ``<mfenced>`` so that when it contains a line break the delimiters and separators are not lost.
* Allow line breaks at delimiters and separators in <mfenced> elements.
* Fix issue with line breaking where some lines were going over the maximum width.
* Fix problem with line breaking inside ``<semantics>`` elements.
* Fix problem with line breaking where the incorrect width was being used to determine breakpoint penalties, so some long lines were not being broken.


HTML-CSS/SVG display
====================

* Fix several Chrome alignment and sizing issues, including problems with horizontal lines at the tops of roots, fraction bars being too long, etc.
* Resolve a problem with how much space is reserved for math equations when a minimum font size is set in the browser.
* Force final math span to be remeasured so that we are sure the container is the right size.
* Fix alignment problem in ``<msubsup>``.
* Fix processing error when rowalign has a bad value.
* Fix a vertical placement problem with stretched elements in mtables in HTML-CSS, and improve performance for placeing the extension characters.
* Handle spacing for U+2061 (function apply) better.
* Better handling of primes and other pseudo scripts in HTML-CSS and SVG output.
* Fixed a problem with ``<mmultiscripts>`` in SVG mode that caused processing error messages.
* Fix misplaced ``\vec`` arrows in Opera and IE.
* Make ``<mi>`` with more than one letter have ``texClass`` OP rather than ORD in certain cases so it will space as a function.
* Make HTML snippet handler accept a string as contents, even if not enclosed in braces.
* Fix spacing for functions that have powers (e.g., ``\sin^2 x``).
* Fix problem with SVG handling of ``\liminf`` and ``\limsup`` where the second half of the function name was dropped.
* Fixed a problem where HTML-CSS and SVG output could leave partial equations in the DOM when the equation processing was interrupted to load a file.
* Fix problems with ``<mtable>``, ``<ms>``, and ``<mmultiscripts>`` which weren't handling styles.
* Make column widths and row heights take minsize into account in ``<mtable>``.
* Fix typo in ``handle-floats.js`` that caused it to not compile.
* Fix problem in HTML-CSS output with ``<msubsup>`` when super- or subscript has explicit style.


TeX emulation
=============

* Allow negative dimensions for ``\\[]`` but clip to 0 since this isn't really allowed in MathML.
* Fixed problem where \\ with whitespace followed by [ would incorrectly be interpreted as \\[dimen].
* Make ``jsMath2jax`` run before other preprocessors so that ``tex2jax`` won't grab environments from inside the jsMath spans and divs before jsMath2jax sees them.
* Fix issue with ``\vec`` not producing the correct character for ``\vec{\mathbf{B}}`` and similar constructs.
* Combine multiple primes into single unicode characters.
* Updated the unicode characters used for some accents and a few other characters to more appropriate choices.  See issues #116, #119, and #216 in the MathJax issue tracker on GitHub.
* Remove unwanted 'em' from ``eqnarray columnwidth`` values.
* Make eqnarray do equation numbering when numbering is enabled.
* Make vertical stretchy characters stand on the baseline, and improve spacing of some stretchy chars.
* Make ``mtextFontInherit`` use the style and weight indicated in the math, so that ``\textbf`` and ``\textit`` will work properly.
* Add ``\textcolor`` macro to the color extension.
* Added RGB color model to the color extension.
* Automatically load the AMSmath extension when needed by the ``mhchem`` extension.
* Add ``<<=>`` arrow to ``mhchecm`` extension
* Fix alignment of prescripts in ``mhchem`` to properly right-justify the scripts.
* Expose the CE object in the ``mhchem`` extension.
* Make ``autoload-all`` skip extensions that are already loaded, and not redefine user-defined macros.
* Fix most extensions to not overwrite user defined macros when the extension is loaded.
* Ignore ``\label{}`` with no label.
* Make ``\injlim`` and friends produce single ``<mi>`` elements for their names rather than one for each letter.
* Handle primes followed by superscript as real TeX does in TeX input jax.
* Handle a few more negations (e.g., of arrows) to produce the proper Unicode points for these.
* Don't produce a processing error when ``\limits`` is used without a preceding operator.


MathML Handling
===============

* Prevent align attribute on ``<mtable>`` from applying to ``<mover>/<munder>/<munderover>`` elements.
* Ignore ``_moz-math-*`` attributes in MathML input so they don't appear in MathML output.
* Prevent duplicate ``xmlns`` attributes in "Show Math As -> MathML".
* Fixed a problem in MathML output where dimensions given to ``<mpadded>`` with leading +'s could lose the plus and become absolute rather than relative.
* Fix ``setTeXclass`` for ``TeXatom`` so that it handles the spacing for relations correctly.
* Add more CSS to isolate ``NativeMML`` output from page.
* Handle setup of MathPlayer better for IE10, and avoid some IE10 bugs in setting the document namespace for MathML.


Fonts
======

* Fix a problem where bold-script didn't work properly in STIX fonts.
* Work around Chrome bug with MathJax web fonts that affects some combining characters.
* Remove dependencies of TeX->MathML conversion on the choice of fonts (TeX versus STIX).
* For stretchy characters that don't have a single-character version in the MathJax fonts, make sure they are properly sized when not stretched or stretched to a small size.
* Fix an error with ``U+u005E`` (^) which caused it to show as a plus when used as a stretchy accent.
* Fix a problem with greek letters in STIX font producing the wrong letter (an offset was off by one).
* Handle more characters in sans-serif-italic and bold-italic STIX fonts... _whats-new-2.2:

******************************
/U. What's New in MathJax v2.2
******************************

MathJax v2.2 includes a number of new features, as well a more than 40
important bug fixes.


Features:
=========

* Localization of MathJax user interface.  (German and French
  translations currently available in addition to English.)

* Commutative diagrams via the ``AMScd`` extension.

* New Safe-mode extension that allows you to restrict potentially
  dangerous features of MathJax when it is used in a shared
  environment (e.g., href to javascript, styles and classes, etc.)

* Improve MathML rendering for ``mfenced`` and ``mlabeldtr`` elements in
  browsers that don't support them well.

* Experimental Content MathML support.


TeX input:
==========

* Avoid potential infinite loops in ``\mathchoice`` constructs.
  (`Issue #373 <https://github.com/mathjax/MathJax/issues/373>`_)

* Add error message when an environment closes with unbalanced braces.
  (`Issue #454 <https://github.com/mathjax/MathJax/issues/454>`_)

* Allow spaces in the RGB, rgb, and greyscale color specifications.
  (`Issue #446 <https://github.com/mathjax/MathJax/issues/446>`_)

* Process ``\$`` in ``\text`` arguments.  (ssue #349)

* Preserve spaces within ``\verb`` arguments.  (`Issue #381 <https://github.com/mathjax/MathJax/issues/381>`_)

* Make ``\smallfrown`` and ``\smallsmile`` come from the variant font so
  they have the correct size.  (`Issue #436 <https://github.com/mathjax/MathJax/issues/436>`_)

* Make the input TeX jax generate mrow plus mo elements rather than
  mfenced elements (for better compatibility with native MathML
  implementations).

* Make ``\big`` and its relatives use script or scriptscript fonts
  (although size is still absolute, as it is in TeX) so that it
  balances the text weight in scripts.  (`Issue #350 <https://github.com/mathjax/MathJax/issues/350>`_)

* Convert true and false attributes to booleans in ``\mmlToken``.
  (`Issue #451 <https://github.com/mathjax/MathJax/issues/451>`_)


AsciiMath:
==========

* Rename AsciiMath config option from ``decimal`` to ``decimalsign``.
  (`Issue #384 <https://github.com/mathjax/MathJax/issues/384>`_)


Fonts:
======

* Add Greek Delta to SVG fonts. (`Issue #347 <https://github.com/mathjax/MathJax/issues/347>`_)

* Fix monospace space character to be the same width as the other
  monospace characters.  (`Issue #380 <https://github.com/mathjax/MathJax/issues/380>`_)

* Better handling of unknown or invalid values for mathvariant or
  values not supported by generic fonts.


MathML:
=======

* Handle empty child nodes better.

* Improved MathML rendering for ``mfenced`` and ``mlabeldtr`` elements.

* Ignore ``linebreak`` attribute on ``mspace`` when dimensional attributes are
  set. (`Issue #388 <https://github.com/mathjax/MathJax/issues/388>`_)

* Implement ``rowspacing``/``columnspacing`` for ``mtable`` in native MathML
  output in Firefox using cell padding.


HTML-CSS/SVG output
===================

* Allow ``\color`` to override link color in SVG output.  (`Issue #427
  <https://github.com/mathjax/MathJax/issues/427>`_)

* Add min-width to displayed equations with labels so that they cause
  their containers to have non-zero width (like when they are in a
  table cell or an absolutely positioned element).  (`Issue #428 <https://github.com/mathjax/MathJax/issues/428>`_)

* Fix a processing error with elements that contain hyperlinks.
  (`Issue #364 <https://github.com/mathjax/MathJax/issues/364>`_)

* Try to isolate MathJax from CSS transitions.  (`Issue #449 <https://github.com/mathjax/MathJax/issues/449>`_)

* Go back to using em's (rounded to nearest pixel) for Chrome.
  Rounding makes the placement work more reliably, while still being
  in relative units.  (`Issue #443 <https://github.com/mathjax/MathJax/issues/443>`_)

* Prevent error when math contains characters outside of the MathJax
  fonts.  (`Issue #441 <https://github.com/mathjax/MathJax/issues/441>`_)

* Make final math size be in relative units so that it prints even if
  print media has a different font size.  (`Issue #386 <https://github.com/mathjax/MathJax/issues/386>`_)

* Don't scale line thickness for ``menclose`` elements (so lines won't
  disappear in scripts).  (`Issue #414 <https://github.com/mathjax/MathJax/issues/414>`_)

* Fix ``fontdata.js`` to allow it to be included in combined configuration
  files.  (`Issue #413 <https://github.com/mathjax/MathJax/issues/413>`_)

* Makes math-based tooltips be spaced properly when rendered.  (`Issue
  #412 <https://github.com/mathjax/MathJax/issues/412>`_)

* Fix Math Processing Error when ``&ApplyFunction``; is used without
  preceding content.  (`Issue #410 <https://github.com/mathjax/MathJax/issues/410>`_)

* Fix a problem using an empty table as a super- or subscript.
  (`Issue #392 <https://github.com/mathjax/MathJax/issues/392>`_)

* Handle the case where selection in maction is invalid or out of
  range.  (`Issue #365 <https://github.com/mathjax/MathJax/issues/365>`_)

* Add a pixel extra around the SVG output to accommodate antialiasing
  pixels.  (`Issue #383 <https://github.com/mathjax/MathJax/issues/383>`_)

* Fix Math Processing Error for ``msubsup``/``msub``/``msup`` elements.

* Limit the number of repetition to build stretchy chars in HTML-CSS.
  (`Issue #366 <https://github.com/mathjax/MathJax/issues/366>`_)

* Fix Math Processing Error in ``mmultiscripts``/``menclose``. (`Issue
  362) <https://github.com/mathjax/MathJax/issues/62)>`_


Interface:
==========

* Make zoom work properly with expressions that have full width (e.g.,
  tagged equations).

* Handle zooming when it is inside a scrollable element when it is not
  the main body element.  (`Issue #435 <https://github.com/mathjax/MathJax/issues/435>`_)

* Update math processing errors to include original format and actual
  error message in the "Show Math As" menu.  (`Issue #450 <https://github.com/mathjax/MathJax/issues/450>`_)

* Add a Help dialog box (rather than link to mathjax.org).

* Remove the v1.0 configuration warning.  (`Issue #445 <https://github.com/mathjax/MathJax/issues/445>`_)

* Trap errors while saving cookies (and go on silently).  (`Issue #374
  <https://github.com/mathjax/MathJax/issues/374>`_)

* Fix typo in IE warning message.  (`Issue #397 <https://github.com/mathjax/MathJax/issues/397>`_)

* Use UA string sniffing for identifying Firefox and handle detecting
  mobile versions better.

* Make MathML source show non-BMP characters properly.  (`Issue #361 <https://github.com/mathjax/MathJax/issues/361>`_)

* Make tool tips appear above zoom boxes.  (`Issue #351 <https://github.com/mathjax/MathJax/issues/351>`_)


Miscellaneous:
==============

* Allow preview for preprocessors to be just a plain string (rather
  than requiring ``[string]``).

* Remap back-tick to back-quote.  (`Issue #402 <https://github.com/mathjax/MathJax/issues/402>`_)

* Handle script tags in ``HTML.Element()`` so they work in IE.
  (`Issue #342 <https://github.com/mathjax/MathJax/issues/342>`_)

* Add the ``MathJax_Preview`` class to the ``ignoreClass`` list so that
  ``tex2jax`` and ``asciimath2jax`` won't process previews accidentally.
  (`Issue #378 <https://github.com/mathjax/MathJax/issues/378>`_)

* Fix processing errors with various table and menclose attributes.
  (`Issue #367 <https://github.com/mathjax/MathJax/issues/367>`_)

* Use ``hasOwnProperty()`` when checking file specification objects
  (prevents problems when ``Object.prototype`` has been modified).
  (`Issue #352 <https://github.com/mathjax/MathJax/issues/352>`_)
.. _whats-new-2.3:

******************************
/U. What's New in MathJax v2.3
******************************


MathJax v2.3 includes a number of new features, as well a more than 30 
important bug fixes.


Features:
=========

* *New webfonts:* MathJax v2.3 adds new webfonts for ``STIX``, ``Asana 
  Math``, ``Neo Euler``, ``Gyre Pagella``, ``Gyre Termes``, and 
  ``Latin Modern``.

* *Localization improvements:* MathJax has been accepted into 
  TranslateWiki.net. Thanks to the TWN community we could add
  12 complete and over 20 partial translations.

* *MathML improvements:* MathJax’s "Show Math as" menu will now expose
  the MathML annotation features. There are also two new preview
  options for the MathML input mode: ``mathml`` (now the default),
  which uses the original MathML as a preview, and ``altimage``, which
  uses the ``<math>`` element's ``altimg`` (if any) for the preview.

* *Miscellaneous improvements:* A new extension ``MatchWebFonts``
  improves the interaction with the surrounding content when that uses
  a webfont. A new configuration method allows configurations to be
  specified using a regular JavaScript variable ``window.MathJax``.
  
* MathJax is now available as a Bower package thanks to 
  community contributions.


TeX input:
==========

* Prevent the TeX pre-processor from rendering TeX in MathML
  annotation-xml elements.
  (`Issue #484 <https://github.com/mathjax/MathJax/issues/484>`_)
* Fix sizing issue in ``cases`` environment
  (`Issue #485 <https://github.com/mathjax/MathJax/issues/485>`_)


Fonts:
======

* Fix block-letter capital I (U+2111) appearing as J in MathJax font
  (`Issue #555 <https://github.com/mathjax/MathJax/issues/555>`_)


MathML:
=======

* Improved workarounds for MathML output on WebKit 
  (`Issue #482 <https://github.com/mathjax/MathJax/issues/482>`_)
* Handle empty ``multiscript``, ``mlabeledtr``, and other nodes in Native MathML output
  (`Issue #486 <https://github.com/mathjax/MathJax/issues/486>`_)
* Replace non-standard ``MJX-arrow`` class by new ``menclose`` notation
  (`Issue #481 <https://github.com/mathjax/MathJax/issues/481>`_)
* Fix incorrect widths in Firefox MathML output
  (`Issue #558 <https://github.com/mathjax/MathJax/issues/558>`_)
* Fix display math not being centered in XHTML
  (`Issue #650 <https://github.com/mathjax/MathJax/issues/650>`_)
* Fix problem when LaTeX code appears in ``annotation`` node
  (`Issue #484 <https://github.com/mathjax/MathJax/issues/484>`_)


HTML-CSS/SVG output
===================

* Fix MathJax not rendering in Chrome when sessionStorage is disabled
  (`Issue #584 <https://github.com/mathjax/MathJax/issues/584>`_)
* Fix ``\mathchoice`` error with linebreaking in SVG output
  (`Issue #604 <https://github.com/mathjax/MathJax/issues/604>`_)
* Fix poor linebreaking of "flat" MathML with unmatched parentheses
  (`Issue #523 <https://github.com/mathjax/MathJax/issues/523>`_)


Interface:
==========

* Fix Double-Click zoom trigger 
  (`Issue #590 <https://github.com/mathjax/MathJax/issues/590>`_)

Miscellaneous:
==============

* Localization: improved fallbacks for IETF tags
  (`Issue #492 <https://github.com/mathjax/MathJax/issues/492>`_)
* Localization: support RTL in messages
  (`Issue #627 <https://github.com/mathjax/MathJax/issues/627>`_)
* Improve PNG compression
  (`Issue #44 <https://github.com/mathjax/MathJax/issues/44>`_)
.. _whats-new-2.4:

******************************
/U. What's New in MathJax v2.4
******************************



MathJax v2.4 is primarily a bug fix release. Over 80 display bugs,
line-breaking problems, and interface issues have been resolved; for a
detailed listing please check the `release
milestone <https://github.com/mathjax/MathJax/issues?milestone=2&state=closed>`__.
The following are some of the highlights.

Security
========

-  `#256 <https://github.com/mathjax/MathJax/issues/256>`__ Enable
   Content Security Policy compatibility.

Interface
=========

-  `#240 <https://github.com/mathjax/MathJax/issues/240>`__ prevent two
   identical uses of ``\tag`` to cause identical element id.
-  `#348 <https://github.com/mathjax/MathJax/issues/348>`__ fix
   ``Show Math as`` window crashing in IE8.
-  `#559 <https://github.com/mathjax/MathJax/issues/559>`__ remove user
   cookie configuration.
-  `#821 <https://github.com/mathjax/MathJax/issues/821>`__ resolve 
   cookie-related error in sandboxed iframes on Chrome.
-  `#623 <https://github.com/mathjax/MathJax/issues/623>`__ fix
   localization on IE6--8.
-  `#685 <https://github.com/mathjax/MathJax/issues/685>`__ fix MathMenu
   and MathZoom extensions loading when ``showMathMenu`` set to false.
-  `#734 <https://github.com/mathjax/MathJax/issues/734>`__ compress
   menu PNGs.
-  `#814 <https://github.com/mathjax/MathJax/issues/814>`__ add
   TeX/Asciimath as annotation-xml to MathML output.

Line-breaking
=============

-  `#617 <https://github.com/mathjax/MathJax/issues/617>`__ add
   linebreaking support for ``mmultiscript`` elements.
-  `#687 <https://github.com/mathjax/MathJax/issues/687>`__ fix forced
   line breaking aligning badly.
-  `#707 <https://github.com/mathjax/MathJax/issues/707>`__ fix ignored
   line breaks between two ``mtext`` elements.

HTML-CSS/SVG/nativeMML display
==============================

-  `#387 <https://github.com/mathjax/MathJax/issues/387>`__ fix missing
   styling for ``merror`` in SVG output.
-  `#391 <https://github.com/mathjax/MathJax/issues/391>`__ fix
   linebreaking within fractions in SVG output.
-  `#423 <https://github.com/mathjax/MathJax/issues/423>`__,
   `#460 <https://github.com/mathjax/MathJax/issues/460>`__,
   `#749 <https://github.com/mathjax/MathJax/issues/749>`__,
   `#824 <https://github.com/mathjax/MathJax/issues/824>`__ Zoom
   improvements: fix zoom box overflow in mobile Safari, fix zoom box
   for widths in ``px``, fix zoom box overlay in Chrome.
-  `#470 <https://github.com/mathjax/MathJax/issues/470>`__ fix AMScd
   rendering in native MathML output.
-  `#473 <https://github.com/mathjax/MathJax/issues/473>`__ override
   ``text-ident`` of enclosing paragraph.
-  `#476 <https://github.com/mathjax/MathJax/issues/476>`__ improve big
   Downarrows.
-  `#580 <https://github.com/mathjax/MathJax/issues/580>`__ prevent CSS
   from overriding MathJax's em/ex detection.
-  `#619 <https://github.com/mathjax/MathJax/issues/619>`__ fix:
   vertical stretching arrows in table cells can cause extra space
   between rows.
-  `#699 <https://github.com/mathjax/MathJax/issues/699>`__ fix table
   column spacing in NativeMathML output on Firefox.
-  `#701 <https://github.com/mathjax/MathJax/issues/701>`__ fix clipping
   of stretched delimiters in HTML-CSS output.
-  `#703 <https://github.com/mathjax/MathJax/issues/703>`__ fix math
   axis not scaled in script sizes.
-  `#715 <https://github.com/mathjax/MathJax/issues/715>`__ fix hat
   ``^`` too large with local STIX fonts in HTML-CSS.
-  `#744 <https://github.com/mathjax/MathJax/issues/744>`__ improve root
   symbol rendering in ever-changing but always buggy Chrome.
-  `#770 <https://github.com/mathjax/MathJax/issues/770>`__ add support
   for dotted borders to SVG output.
-  `#820 <https://github.com/mathjax/MathJax/issues/820>`__ fix integral
   overlapping with superscript using STIX fonts.
-  `#813 <https://github.com/mathjax/MathJax/issues/813>`__ remove
   some redundant fixes for Native MML on Firefox 29+.

TeX emulation
=============

-  `#367 <https://github.com/mathjax/MathJax/issues/376>`__ prevent
   ``\mmltoken`` from creating ``annotation`` elements.
-  `#377 <https://github.com/mathjax/MathJax/issues/377>`__ improve
   ``&nbsp;`` handling.
-  `#389 <https://github.com/mathjax/MathJax/issues/389>`__ fix
   operating spacing in ``\split`` and ``\multiline`` environments.
-  `#477 <https://github.com/mathjax/MathJax/issues/477>`__,
   `#459 <https://github.com/mathjax/MathJax/issues/459>`__ add
   ``\textsf`` and ``\texttt`` macros and enable ``mtextInheritFont``
   for them.
-  `#547 <https://github.com/mathjax/MathJax/issues/547>`__ fix
   misalignment in nested fractions in HTML-CSS and SVG output.
-  `#624 <https://github.com/mathjax/MathJax/issues/624>`__ fix AMScd on
   IE6--7.
-  `#632 <https://github.com/mathjax/MathJax/issues/632>`__ fix ``\Big``
   not accepting delimiters in braces
-  `#667 <https://github.com/mathjax/MathJax/issues/667>`__ fix loop in
   ``bbox``.
-  `#691 <https://github.com/mathjax/MathJax/issues/691>`__ enable
   multiple ``\label`` in multiline environments like ``align``,
   ``eqnarray``, and ``gather``.
-  `#719 <https://github.com/mathjax/MathJax/issues/719>`__ empty array
   lines should get correct height.
-  `#739 <https://github.com/mathjax/MathJax/issues/739>`__ fix
   ``\operatorname*`` and ``\DeclareMathOperator*``.
-  `#746 <https://github.com/mathjax/MathJax/issues/746>`__ fix spacing
   for ``\left ... \right``.
-  `#793 <https://github.com/mathjax/MathJax/issues/793>`__ allow
   unmatched groups in ``\begin`` \\end\` substitutions.
-  `#794 <https://github.com/mathjax/MathJax/issues/794>`__ fix spacing
   for ``\bmod``.

Asciimath
=========

-  `#353 <https://github.com/mathjax/MathJax/issues/353>`__ add option
   for TeX-like ``\phi`` and ``\varphii`` behavior.
-  `#743 <https://github.com/mathjax/MathJax/issues/743>`__ add
   ``mmlSpacing`` option and set to true.
-  `#747 <https://github.com/mathjax/MathJax/issues/747>`__ fix
   processing error with invisible grouping.

MathML Handling
===============

-  `#328 <https://github.com/mathjax/MathJax/issues/328>`__ remove
   ``_moz-*``-attributes and improve MathML processing in Firefox.
-  `#460 <https://github.com/mathjax/MathJax/issues/469>`__ fix default
   value of ``mo@symmetric``.
-  `#478 <https://github.com/mathjax/MathJax/issues/478>`__ make
   ``mfenced`` element equivalent to its expanded form
-  `#561 <https://github.com/mathjax/MathJax/issues/561>`__ implement
   ``menclose`` notation ``phaseorangle``.
-  `#578 <https://github.com/mathjax/MathJax/issues/578>`__ fix quote
   attributes for ``ms`` elements.
-  `#614 <https://github.com/mathjax/MathJax/issues/614>`__ handle
   nested ``math`` elements better.
-  `#684 <https://github.com/mathjax/MathJax/issues/684>`__ fix handling
   of double primes in superscripts.
-  `#691 <https://github.com/mathjax/MathJax/issues/696>`__,
   `#692 <https://github.com/mathjax/MathJax/issues/692>`__, update
   Content MathML extension: fix IE11, plus with leading negative
   number.
-  `#763 <https://github.com/mathjax/MathJax/issues/763>`__ fix
   ``mglyph`` elements rendering too small.

Fonts
=====

-  `#501 <https://github.com/mathjax/MathJax/issues/501>`__ add
   workaround for broken Fedora STIX fonts configuration.
-  `#517 <https://github.com/mathjax/MathJax/issues/517>`__ reset
   min/max width for MathJax font test.
-  `#576 <https://github.com/mathjax/MathJax/issues/576>`__ improve font
   matching.
-  `#615 <https://github.com/mathjax/MathJax/issues/615>`__ check
   validity of font names.
-  `#681 <https://github.com/mathjax/MathJax/issues/681>`__ fix MathJax
   font test breaking responsive layout.
-  `#711 <https://github.com/mathjax/MathJax/issues/711>`__ detect new
   webfonts when locally installed.
-  `#697 <https://github.com/mathjax/MathJax/issues/697>`__ fix
   bold-italic for new webfonts.

Localization
============

-  `#753 <https://github.com/mathjax/MathJax/issues/753>`__ update
   locales from translatewiki.net; add Vietnamese, Asturia, Polish,
   Catalan, Czech, Kannada locales.
-  `#777 <https://github.com/mathjax/MathJax/issues/777>`__ fix menu
   orientation for RTL languages.

Misc.
=====

-  `#586 <https://github.com/mathjax/MathJax/issues/586>`__ add all
   input processors to ``default.js``.
-  `#658 <https://github.com/mathjax/MathJax/issues/658>`__ fix IE 11
   recognized as Firefox.
-  `#730 <https://github.com/mathjax/MathJax/issues/730>`__ ignore
   rendering targets that have been removed from document.
-  `#735 <https://github.com/mathjax/MathJax/issues/735>`__ work around
   webfont bug in Chrome 32+.
-  `#738 <https://github.com/mathjax/MathJax/issues/738>`__ improve
   workaround for fixed position bug in old IE versions.
-  `#737 <https://github.com/mathjax/MathJax/issues/737>`__ add
   third-party path variable (for centralized custom extension hosting).
.. _whats-new-2.5:

******************************
/U. What's New in MathJax v2.5
******************************

MathJax v2.5 includes a number of new features, as well a more than 70 important bug fixes. The following are some of the highlights.

Features
--------

* *Speed improvements.* The HTML-CSS output performance was improved by 30-40% (depending on content complexity, with higher gains in more complex content such as very long documents).
* *New output for fast preview.* The new CommonHTML output provides a rough but 10x-faster rendering. The ``CHTML-preview`` extension will use this fast output as a preview mode for HTML-CSS or SVG output.
* *Improved Content MathML support.* Content MathML is now fully supported via a new extension, in particular this allows customization of the conversion process.
* *Improved elementary math support* The experimental support for elementary math elements has been significantly improved special thanks to David Carlisle.
* *NodeJS compatibility*. Enable the implementation of a NodeJS API (released as `MathJax-node <https://github.com/mathjax/MathJax-node>`__).

Numerous display bugs, line-breaking problems, and interface issues have been resolved; for a detailed listing please check the `release milestone <https://github.com/mathjax/MathJax/issues?milestone=4&state=closed>`__.

Interface
---------

*   `#834 <https://github.com/mathjax/MathJax/issues/834>`__ Fix incorrect line-width when zooming which can cause line-breaking problems.
*   `#918 <https://github.com/mathjax/MathJax/issues/918>`__ Fix zoom box size in NativeMML output.
*   `#835 <https://github.com/mathjax/MathJax/issues/835>`__ Fix zoom for equations extending beyond their bounding box.
*   `#893 <https://github.com/mathjax/MathJax/issues/893>`__ Fix outdated ARIA values for HTML-CSS and SVG output.
*   `#860 <https://github.com/mathjax/MathJax/issues/860>`__, `#502 <https://github.com/mathjax/MathJax/issues/502>`__ Preserve RDFa, microdata, aria labels, and other attributes in HTML-CSS and SVG output.
*   `#935 <https://github.com/mathjax/MathJax/issues/935>`__ Escape special characters in TeX annotations.
*   `#912 <https://github.com/mathjax/MathJax/issues/912>`__ Fix missing ``mstyle`` attributes in ``toMathML`` output.
*   `#971 <https://github.com/mathjax/MathJax/issues/971>`__ Fix lost attributes when ``toMathML`` is restarted.

Line-breaking
-------------

*   `#949 <https://github.com/mathjax/MathJax/issues/949>`__ Fix processing error due to empty elements.

HTML-CSS/SVG/nativeMML display
------------------------------

*   `#863 <https://github.com/mathjax/MathJax/issues/863>`__ Fix broken MathML preview in MathML pre-processor.
*   `#891 <https://github.com/mathjax/MathJax/issues/891>`__ Fix deprecated regexp affecting mtable alignment.
*   `#323 <https://github.com/mathjax/MathJax/issues/323>`__ Improve MathPlayer compatibility on Internet Explorer 10+.
*   `#826 <https://github.com/mathjax/MathJax/issues/826>`__ Scale content in fallback fonts.
*   `#898 <https://github.com/mathjax/MathJax/issues/898>`__ Fix invalid SVG output when using fallback characters.
*   `#800 <https://github.com/mathjax/MathJax/issues/800>`__ Fix misplaced background color for stretched mphantom elements in SVG output.
*   `#490 <https://github.com/mathjax/MathJax/issues/490>`__ Fix ``\overline`` issues in combination with text-style limits.
*   `#829 <https://github.com/mathjax/MathJax/issues/829>`__ Implement ``\delimitershortfall``, ``\delimiterfactor``.
*   `#775 <https://github.com/mathjax/MathJax/issues/775>`__ Fix lost text content in SVG output.
*   `#917 <https://github.com/mathjax/MathJax/issues/>`__ Fix cases of incorrect bounding boxes in HTML-CSS output.
*   `#807 <https://github.com/mathjax/MathJax/issues/807>`__ Fix clipping of table columns in HTML-CSS output.
*   `#804 <https://github.com/mathjax/MathJax/issues/804>`__ Fix cases of uneven subscripts.
*   `#944 <https://github.com/mathjax/MathJax/issues/944>`__ Fix rendering error when scaling-all-math of labeled equations.
*   `#930 <https://github.com/mathjax/MathJax/issues/930>`__ Fix SVG output failure when ``<math>`` element has inline styles with border or padding.
*   `#931 <https://github.com/mathjax/MathJax/issues/931>`__ Fix baseline alignment in Safari 6.2/7.1/8.0.
*   `#937 <https://github.com/mathjax/MathJax/issues/937>`__ Fix incorrect width in MathJax font data affecting underlining.
*   `#966 <https://github.com/mathjax/MathJax/issues/966>`__ Fix SVG output overlapping when using prefix notation.
*   `#993 <https://github.com/mathjax/MathJax/issues/993>`__ Add workaround for Native MathML in Gecko to re-enable ``mlabeledtr`` etc.
*   `#1002 <https://github.com/mathjax/MathJax/issues/1002>`__ Enable SVG output to inherit surrounding text color.

TeX emulation
-------------

*   `#881 <https://github.com/mathjax/MathJax/issues/881>`__ Allow ``\newenvironment`` to process optional parameters.
*   `#889 <https://github.com/mathjax/MathJax/issues/889>`__ remove extra space around some parenthesis constructs.
*   `#856 <https://github.com/mathjax/MathJax/issues/856>`__ Recognize comma as decimal delimiter in units.
*   `#877 <https://github.com/mathjax/MathJax/issues/877>`__ Fix bug related to multiple accent having different width.
*   `#832 <https://github.com/mathjax/MathJax/issues/832>`__ Fix multline environment not being centered in HTML-CSS output.
*   `#776 <https://github.com/mathjax/MathJax/issues/776>`__ Fix stretchy delimiters of ``binom`` and ``choose``.
*   `#900 <https://github.com/mathjax/MathJax/issues/900>`__ Fix ``\buildrel`` getting TeX class ORD instead of REL.
*   `#890 <https://github.com/mathjax/MathJax/issues/890>`__ Enable px as dimension in ``\\[...]``.
*   `#901 <https://github.com/mathjax/MathJax/issues/901>`__ Allow ``\limits`` in more cases and add errors for some cases of multiple subscripts.
*   `#903 <https://github.com/mathjax/MathJax/issues/903>`__ Allow ``\hfill`` to set alignment in matrices and arrays (for old fashioned TeX layout).
*   `#902 <https://github.com/mathjax/MathJax/issues/902>`__ Convert ``\eqalignno`` and ``\leqalignno`` into ``mlabeledtr``.
*   `#906 <https://github.com/mathjax/MathJax/issues/906>`__ Allow comma separated parameters in ``\mmlToken``.
*   `#913 <https://github.com/mathjax/MathJax/issues/913>`__ Allow attributes in ``\mmlToken`` whose defaults are false or blank.
*   `#972 <https://github.com/mathjax/MathJax/issues/972>`__ Fix autoload of the ``color`` extension.
*   `#375 <https://github.com/mathjax/MathJax/issues/475>`__ Add ``\{``, ``\}``, and ``\\`` to macros working within ``\text{}`` etc.
*   `#969 <https://github.com/mathjax/MathJax/issues/969>`__ Fix incorrect spacing with some ``\frac`` constructs.
*   `#982 <https://github.com/mathjax/MathJax/issues/982>`__ Fix incorrect spacing in ``aligned`` environments.
*   `#1013 <https://github.com/mathjax/MathJax/issues/1013>`__ Fix processing error caused by ``'`` in commutative diagrams using ``AMScd.js``.
*   `#1005 <https://github.com/mathjax/MathJax/issues/1005>`__ Add ``wikipedia-texvc.js`` extension.

Asciimath
---------

*   `#851 <https://github.com/mathjax/MathJax/issues/851>`__ Prevent leading space in quote from causing processing errors.
*   `#431 <https://github.com/mathjax/MathJax/issues/431>`__ Fix handling of special characters in exponents.
*   `#741 <https://github.com/mathjax/MathJax/issues/741>`__ Add underbrace macro.
*   `#857 <https://github.com/mathjax/MathJax/issues/857>`__ Update AsciiMathML to 2.2; changes include `improve entity handling <https://github.com/mathjax/asciimathml/issues/2>`__, `add triangle macro <https://github.com/mathjax/asciimathml/issues/4>`__, `map ast to asterisk <https://github.com/mathjax/asciimathml/issues/6>`__, `allow input of row vectors <https://github.com/mathjax/asciimathml/issues/11>`__, `allow lambda <https://github.com/mathjax/asciimathml/issues/12>`__, `switch phi/varphi mapping <https://github.com/mathjax/asciimathml/issues/14>`__, `add underbrace macro <https://github.com/mathjax/asciimathml/issues/18>`__, `handle empty nodes better <https://github.com/mathjax/asciimathml/issues/24>`__, `add vector norm macro <https://github.com/mathjax/asciimathml/issues/26>`__, `improve @ macro <https://github.com/mathjax/asciimathml/issues/27>`__.

MathML Handling
---------------

*   `#847 <https://github.com/mathjax/MathJax/issues/847>`__ Fix line-breaks in annotation elements.
*   `#805 <https://github.com/mathjax/MathJax/issues/805>`__ Prevent empty annotation elements from causing math processing errors.
*   `#769 <https://github.com/mathjax/MathJax/issues/769>`__ Update ``indentshift`` implementation to meet clarified MathML specification.
*   `#768 <https://github.com/mathjax/MathJax/issues/768>`__ Fix processing of percentage values for ``indenshift``.
*   `#839 <https://github.com/mathjax/MathJax/issues/839>`__ Update inheritance of ``displaystyle`` in ``mtable`` to meet clarified MathML specification.
*   `#695 <https://github.com/mathjax/MathJax/issues/695>`__ Allow Content MathML conversion to be customized.
*   `#964 <https://github.com/mathjax/MathJax/issues/964>`__ Move experimental support for elementary math and RTL to its own extension.

Fonts
-----

*   `#845 <https://github.com/mathjax/MathJax/issues/845>`__ Fix webfont bug in Safari 7.
*   `#950 <https://github.com/mathjax/MathJax/issues/950>`__ Fix webfont bug in IE 11.

Localization
------------

*   `#979 <https://github.com/mathjax/MathJax/issues/979>`__ Updated locales thanks to Translatewiki.net; activate locales for Scots and Southern Balochi.

APIs
-----

*   `#873 <https://github.com/mathjax/MathJax/issues/873>`__ Combine array of elements when typesetting.
*   `#693 <https://github.com/mathjax/MathJax/issues/693>`__ Add API to allow listeners to be cleared.


Misc.
-----

*   `#870 <https://github.com/mathjax/MathJax/issues/870>`__ Add Composer package information.
*   `#872 <https://github.com/mathjax/MathJax/issues/872>`__ Add small delay between input and output phase to prevent performance degradation.
*   `#1016 <https://github.com/mathjax/MathJax/issues/1016>`__ Fix bug related to ``<script>`` elements with namespace prefix, e.g., in xHTML.
.. _whats-new-2.6:

******************************
/U. What's New in MathJax v2.6
******************************

MathJax v2.6 includes a number of new features, as well a more than 30 important bug fixes. The following are some of the highlights.

Features
--------

* *Improved CommonHTML output.* The CommonHTML output now provides the same layout quality and MathML support as the HTML-CSS and SVG output. It is on average 40% faster than the other outputs and the markup it produces are identical on all browsers and thus can also be pre-generated on the server via MathJax-node. The fast preview mechanism introduced in v2.5 continues to develop as a separate output as `PreviewHTML` and the `fast-preview` extension.
* *Accessibility improvements.* We thank the AT community for their guidance, support, and feedback in our efforts towards making MathJax completely accessible to all users.

  * *Screenreader compatibility.* The new ``AssistiveMML`` extension enables compatibility with most MathML-capable screenreaders by inserting visually-hidden MathML alongside MathJax's visual output. See `screenreader support` for details on the expected behavior as well as background on the limitations due to lack of web standards and browser/OS technology.
  * *Accessible UI.* We have improved the accessibility of the MathJax menu to enable assistive technology users to easily access its features, cf. `MathJax UI`.
* *PlainSource Output.* The new PlainSource output will revert the rendering back to the input format; in the case of MathML, the output will prefer TeX and AsciiMath from ``<annotation-xml>`` elements. This helps with accessibility and copy&paste of document fragments.
* *Semi-slim MathJax repository for bower*. You can now use ``bower install components/MathJax`` to install a fork of MathJax without PNG fonts. **Many thanks** to `@minrk <https://github.com/minrk>`__ from the IPython/Jupyter team and to the team at `components <https://github.com/components>`__!
* *MathJax via npm*. You can now use ``npm install mathjax`` to install a copy of MathJax without PNG fonts.
* *Deprecated: MMLorHTML extension.* We have deprecated the ``MMLorHTML`` extension. For a detailed guide on configuring MathJax to choose different outputs on different browsers, please see `Automatic Selection of the Output Processor` for more information.

Numerous bugs and issues have also been resolved; for a detailed listing please check the `release milestone <https://github.com/mathjax/MathJax/issues?q=milestone%3A%22MathJax+v2.6%22+is%3Aclosed>`__.


Interface
---------

*   `#938 <https://github.com/mathjax/MathJax/issues/938>`__ Expose MathML for accessibility; cf. `screenreader support`.
*   `#939 <https://github.com/mathjax/MathJax/issues/939>`__ Make MathJax contextual menu properly accessible.
*   `#1088 <https://github.com/mathjax/MathJax/issues/1088>`__  MathJax Menu: drop PNG images in menu.
*   `#1210 <https://github.com/mathjax/MathJax/issues/1210>`__  Update ``MathZoom.js``: global border-box support. **Special thanks** to `@CalebKester <https://github.com/CalebKester>`__
*   `#1273 <https://github.com/mathjax/MathJax/issues/1273>`__  Improve handling of hash in URL.


HTML/SVG/nativeMML display
------------------------------

*   `#1095 <https://github.com/mathjax/MathJax/issues/1095>`__ HTML-CSS output: prevent collapse of table borders.
*   `#596 <https://github.com/mathjax/MathJax/issues/596>`__ SVG Output: Fix overlapping equation labels in SVG output
*   `#994 <https://github.com/mathjax/MathJax/issues/994>`__ SVG Output: Change default ``blacker`` setting to `1`.
*   `#995 <https://github.com/mathjax/MathJax/issues/995>`__ SVG output: fix baseline alignment issues.
*   `#995 <https://github.com/mathjax/MathJax/issues/995>`__ SVG output: fix failure to scale all but the first glyph in a fraction when ``useFontCache=false``.
*   `#1035  <https://github.com/mathjax/MathJax/issues/1035>`__ PreviewHTML output: fix fractions formatting in WebKit and IE.
*   `#1233  <https://github.com/mathjax/MathJax/issues/1233>`__ SVG output: make maligngroup and malignmark produce no output.
*   `#1282  <https://github.com/mathjax/MathJax/issues/1282>`__ HTML-CSS output: reduce "bumpiness" of focus outline.
*   `#1314  <https://github.com/mathjax/MathJax/issues/1314>`__ HTML-CSS output: prevent clipping of extremely long strings.
*   `#1316  <https://github.com/mathjax/MathJax/issues/1316>`__ SVG output: preserve non-breaking space in ``mtext`` elements.
*   `#1332  <https://github.com/mathjax/MathJax/issues/1332>`__ HTML-CSS output: fix width calculations for mrows with embellished operators  that could stretch but don't actually.

TeX emulation
-------------

*   `#567 <https://github.com/mathjax/MathJax/issues/567>`__ Add macro for ``overparen`` and ``underparen`` to provide stretchy arcs above/below
*   `#956 <https://github.com/mathjax/MathJax/issues/956>`__ Simplify the ``mhchem`` extension to use multiscripts, cf. #1072.
*   `#1028 <https://github.com/mathjax/MathJax/issues/1028>`__ Fix spacing in ``\alignedat``.
*   `#1194 <https://github.com/mathjax/MathJax/issues/1194>`__ Fix problem where automatic numbering affects ``\binom`` and friends.
*   `#1199 <https://github.com/mathjax/MathJax/issues/1199>`__ Fix problem with dot delimiter not being recognized as a delimiter.
*   `#1224 <https://github.com/mathjax/MathJax/issues/1224>`__ Handle braces properly in text mode when looking for matching math delimiters.
*   `#1225 <https://github.com/mathjax/MathJax/issues/1225>`__ Fix ``\operatorname`` not ignoring ``\limits`` that follow immediately after.
*   `#1229 <https://github.com/mathjax/MathJax/issues/1229>`__ Fix wrong spacing of trailing binary operators.
*   `#1272 <https://github.com/mathjax/MathJax/issues/1272>`__ Fix spacing of ``\eqnarray`` environment.
*   `#1295 <https://github.com/mathjax/MathJax/issues/1295>`__ Handle ``scriptlevel`` set on arrays via an ``mstyle`` node (affects ``\smallmatrix``).
*   `#1312 <https://github.com/mathjax/MathJax/issues/1312>`__ Improve heuristics for adding U+2061 (invisible function application).

Asciimath
---------

* `asciimath/#31 <https://github.com/asciimath/asciimathml/issues/31>`__ Add support for ``overparen``, ``underparen`` to produce ``mover`` and ``munder`` constructs.
* `asciimath/#35 <https://github.com/asciimath/asciimathml/issues/35>`__ Add support for ``bowtie``, ``ltimes`` and ``rtimes``.
* `asciimath/#40 <https://github.com/asciimath/asciimathml/issues/40>`__ Improve parsing of brackets within brackets.
* `asciimath/#43 <https://github.com/asciimath/asciimathml/issues/43>`__ Improve detection of non-matrices.


MathML
------

*   `#1072 <https://github.com/mathjax/MathJax/issues/1072>`__ Right-justify prescripts in ``mmultiscript`` elements (after clarification in MathML 3 editors' draft); cf. #956.
*   `#1089  <https://github.com/mathjax/MathJax/issues/1089>`__ Fix ``toMathML`` from changing ``<maligngroup>`` to ``<malign>``
*   `#1188  <https://github.com/mathjax/MathJax/issues/1188>`__ Fix ``mmultiscripts`` with odd number of post-scripts not rendering correctly.
*   `#1231  <https://github.com/mathjax/MathJax/issues/1231>`__ Fix ``<math>`` element not being treated as an ``<mrow>`` for embellished operator spacing.
*   `#1233  <https://github.com/mathjax/MathJax/issues/1233>`__ Make ``<maligngroup>`` and ``<malignmark>`` be self-closing in MathML input.
*   `#1238  <https://github.com/mathjax/MathJax/issues/1238>`__ Fix Content MathML extension not handling namespace prefixes.
*   `#1257  <https://github.com/mathjax/MathJax/issues/1257>`__ Improve ``mml3.js``: better RTL support in HTML-CSS; improved IE/Edge compatibility.
*   `#1323  <https://github.com/mathjax/MathJax/issues/1323>`__ Content-mathml extension: improve handling of empty Presentation MathML nodes.

Fonts
-----

*   `#928 <https://github.com/mathjax/MathJax/issues/928>`__ Add data for stretchy ``U+2322 (FROWN)``, ``U+2323 (SMILE)``, and also ``U+2312 (ARC)`` to be aliases for the top and bottom parentheses. This enables stretchy constructions; cf. also #567.
*   `#1211 <https://github.com/mathjax/MathJax/issues/1211>`__ Fix web font detection for Gyre-Pagella etc. in IE10+.
*   `#1251 <https://github.com/mathjax/MathJax/issues/1251>`__ Fix primes in STIX-web font being too small in SVG output.

Localization
------------

*   `#1248 <https://github.com/mathjax/MathJax/issues/1248>`__ Updated locales thanks to the contributors at Translatewiki.net; activate locales for Bulgarian, Sicilian, Lithuanian, and Laki.

APIs
-----

*   `#1216 <https://github.com/mathjax/MathJax/issues/1216>`__ Add debugging tips to console output.

Misc.
-----

*   `#1074 <https://github.com/mathjax/MathJax/issues/1074>`__ Fix regression in v2.5 regarding MathPlayer on IE9.
*   `#1036  <https://github.com/mathjax/MathJax/issues/1036>`__ Improve CDN rollover behavior.
*   `#1085 <https://github.com/mathjax/MathJax/issues/1085>`__ Fix detection of Windows Phone mobile IE.
*   `#1155 <https://github.com/mathjax/MathJax/issues/1155>`__ Work around websites using user agent filtering
*   `#1173 <https://github.com/mathjax/MathJax/issues/1173>`__ Avoid warning message in debug mode.
*   `#1208 <https://github.com/mathjax/MathJax/issues/1208>`__ Fix CHTML preview from setting chunking parameters even when disabled.
*   `#1214 <https://github.com/mathjax/MathJax/issues/1214>`__ semi-slim official MathJax repository for bower; use ``bower install components/MathJax`` for a copy without PNG fonts. Special thanks to `@minrk <https://github.com/minrk>`__ from the IPython/Jupyter team and to the team at `components <https://github.com/components>`__!
*   `#1254 <https://github.com/mathjax/MathJax/issues/1254>`__ Improve examples in ``/test``: add viewport meta tags, improve dynamic examples.
*   `#1328 <https://github.com/mathjax/MathJax/issues/1328>`__ Add package.json for publishing on npm, excluding PNG fonts.
.. _whats-new-2.7:

******************************
/U. What's New in MathJax v2.7
******************************

MathJax v2.7 is primarily a bug-fix release with over 60 important bug
fixes, in particular to the CommonHTML output. In addition, this
release adds several new features as an opt-in. The following are some
of the highlights.

Features
--------

* *Common HTML output improvements* Several important bugs in the
  layout model have been fixed, in particular tabular layout is now
  much more robust.
* *Accessibility improvements.* After the completion of the MathJax
  Accessibility Extensions, we are integrating the opt-in for the
  MathJax menu into the core distribution. We are grateful to the web
  accessibility community for their guidance, support, and feedback in
  our efforts towards making MathJax completely accessible to all
  users. This allows end-users to opt into the following features via
  the MathJax Menu:

  * *Responsive Equations.* An innovative responsive rendering of
    mathematical content through collapsing and exploration of
    subexpressions.
  * *Universal aural Rendering.* An aural rendering tool providing
    on-the-fly speech-text for mathematical content and its
    subexpressions using various rule sets.
  * *Full Exploration.* A fully accessible exploration tool, allowing
    for meaningful exploration of mathematical content including
    multiple highlighting features and synchronized aural rendering.
  * For more information check the `release announcement
    <https://www.mathjax.org/mathjax-accessibility-extensions-v1-now-available/>`__
    and the dedicated repository at `mathjax/mathjax-a11y
    <https://github.com/mathjax/MathJax-a11y>`__.

For a detailed listing please check the `release milestone <https://github.com/mathjax/MathJax/milestone/14?closed=1>`__.


Accessibility
-------------

* `mathajx-dev/#20 <https://github.com/mathjax/MathJax-dev/issues/20>`__ Add the Menu extension from the `MathJax Accessibility tools <https://github.com/mathjax/MathJax-a11y>`__ to all combined configuration files.
* `#1465 <https://github.com/mathjax/MathJax/issues/1465>`__ CHTML and HTML-CSS output: do not add ``role=math`` by default.
* `#1483 <https://github.com/mathjax/MathJax/issues/1483>`__ Catch IE8 errors with inserting MathML from AssistiveMML extension.
* `#1513 <https://github.com/mathjax/MathJax/issues/1513>`__ Disable the AssistiveMML extension when the output renderer is PlainSource.

Interface
---------

* `#1463 <https://github.com/mathjax/MathJax/issues/1463>`__ Reset message strings for ``messageStyle=simple`` for each typeset.
* `#1556 <https://github.com/mathjax/MathJax/issues/1556>`__ Improve menu placement.
* `#1627 <https://github.com/mathjax/MathJax/issues/1627>`__ Add Accessibility submenu.

HTML/SVG/nativeMML display
------------------------------

* `#1454 <https://github.com/mathjax/MathJax/issues/1454>`__ SVG output: Use full location URL for ``xlink`` references in SVG ``<use>`` elements.
* `#1457 <https://github.com/mathjax/MathJax/issues/1457>`__ Common-HTML output: Fix problem with characters from Unicode Plane 1 not being mapped to the MathJax fonts properly
* `#1458 <https://github.com/mathjax/MathJax/issues/1458>`__ SVG output: Fix problem with container width when math is scaled.
* `#1459 <https://github.com/mathjax/MathJax/issues/1459>`__ CommonHTML output: Improve ``getNode()`` to fix processing errors when line-breaking.
* `#1460 <https://github.com/mathjax/MathJax/issues/1460>`__ HTML-CSS output: Adjust position of rule for square root when it is made via ``createRule()``.
* `#1461 <https://github.com/mathjax/MathJax/issues/1461>`__ HTML-CSS output: Make sure ``0`` remains ``0`` when rounding to pixels (plus a bit).
* `#1462 <https://github.com/mathjax/MathJax/issues/1462>`__ CommonHTML output: Bubble percentage widths up while line breaking.
* `#1475 <https://github.com/mathjax/MathJax/issues/1475>`__ PreviewHTML: Avoid error when ``\overset`` or ``\underset`` is empty.
* `#1479 <https://github.com/mathjax/MathJax/issues/1479>`__ All outputs: Properly determine (shrink-wrapping) container widths.
* `#1503 <https://github.com/mathjax/MathJax/issues/1503>`__ CommonHTML output: Handle adjusting table cell heights properly.
* `#1507 <https://github.com/mathjax/MathJax/issues/1507>`__ SVG output: Remove invalid ``src`` attribute from ``<mglyph>`` output.
* `#1510 <https://github.com/mathjax/MathJax/issues/1510>`__ CommonHTML output: Prevent CSS bleed-through for box-sizing.
* `#1512 <https://github.com/mathjax/MathJax/issues/1512>`__ CommonHTML output: make ``<mglyph>`` scale image size by hand.
* `#1530 <https://github.com/mathjax/MathJax/issues/1530>`__ All outputs: Fix problem with Safari inserting line breaks before in-line math.
* `#1533 <https://github.com/mathjax/MathJax/issues/1533>`__ CommonHTML output: improve aligning labels with their table rows.
* `#1534 <https://github.com/mathjax/MathJax/issues/1534>`__ CommonHTML output: ensure output stays a table-cell when focused.
* `#1538 <https://github.com/mathjax/MathJax/issues/1538>`__ All outputs: Don't let preview width interfere with the determination of the container width.
* `#1542 <https://github.com/mathjax/MathJax/issues/1542>`__ CommonHTML output: improve stretching ``<mover>`` in ``<mtd>`` elements.
* `#1547 <https://github.com/mathjax/MathJax/issues/1547>`__ HTML-CSS output: improve line breaks within fractions.
* `#1549 <https://github.com/mathjax/MathJax/issues/1549>`__ All outputs: Improve determination of line-breaking parent element.
* `#1550 <https://github.com/mathjax/MathJax/issues/1550>`__ CommonHTML output: Improve vector arrow positioning.
* `#1552 <https://github.com/mathjax/MathJax/issues/1552>`__ All outputs: Handle ``href`` correctly when line breaking.
* `#1574 <https://github.com/mathjax/MathJax/issues/1574>`__ HTML-CSS and SVG output: Use ``currentColor`` for ``menclose`` with no ``mathcolor``.
* `#1595 <https://github.com/mathjax/MathJax/issues/1595>`__ CommonHTML output: Properly scale elements with ``font-family`` specified.

TeX emulation
-------------

* `#1455 <https://github.com/mathjax/MathJax/issues/1455>`__ Fix ``TeX.Environment()`` to use the correct end environment.
* `#1464 <https://github.com/mathjax/MathJax/issues/1464>`__ Make sure ``resetEquationNumbers`` is always defined.
* `#1484 <https://github.com/mathjax/MathJax/issues/1484>`__ Mark accented operators as not having movable limits.
* `#1485 <https://github.com/mathjax/MathJax/issues/1485>`__ Allow line breaks within ``TeXAtom`` elements
* `#1508 <https://github.com/mathjax/MathJax/issues/1508>`__ Surround ``\middle`` with ``OPEN`` and ``CLOSE`` TeXAtoms to match TeX spacing
* `#1509 <https://github.com/mathjax/MathJax/issues/1509>`__ Make delimiters (in particular arrows) symmetric for ``\left`` and ``\right``.
* `#1514 <https://github.com/mathjax/MathJax/issues/1514>`__ Don't unwrap rows when creating fenced elements.
* `#1523 <https://github.com/mathjax/MathJax/issues/1523>`__ Don't copy environment into ``array`` environments.
* `#1537 <https://github.com/mathjax/MathJax/issues/1537>`__ mhchem: add config parameter to select mhchem v3.0.
* `#1596 <https://github.com/mathjax/MathJax/issues/1596>`__ Prevent ``\require{mhchem}`` to override one already loaded.
* `#1551 <https://github.com/mathjax/MathJax/issues/1551>`__ Allow ``<wbr>`` in TeX code.
* `#1565 <https://github.com/mathjax/MathJax/issues/1565>`__ Handle ``\+SPACE`` in macro definitions.
* `#1569 <https://github.com/mathjax/MathJax/issues/1569>`__ Treat control sequences as a unit when matching a macro template.
* `#1587 <https://github.com/mathjax/MathJax/issues/1587>`__ Make sure ``trimSpaces()`` doesn't remove tailing space in ``\+SPACE``.
* `#1602 <https://github.com/mathjax/MathJax/issues/>`__ Handle ``\ref`` properly when there is a ``<base>`` tag.


Asciimath
---------

* `asciimath/f649ba4 <https://github.com/asciimath/asciimathml/commit/f649ba49f639b7e5322d6552193226c03e88ba7e>`__ Add ``newsymbol`` command for adding a new symbol object


MathML
------

* `#1505 <https://github.com/mathjax/MathJax/issues/1505>`__ Handle ``rowlines=""`` and ``rowlines=" "`` like ``rowlines="none"``.
* `#1511 <https://github.com/mathjax/MathJax/issues/1511>`__ Don't convert attribute to boolean unless the default is a boolean.
* `#1526 <https://github.com/mathjax/MathJax/issues/1526>`__ Make minus in ``<mn>`` produce ``U+2212`` rather than ``U+002D``.
* `#1567 <https://github.com/mathjax/MathJax/issues/1567>`__ Fix spacing for initial fraction in exponent position.

Fonts
-----

* `#1521 <https://github.com/mathjax/MathJax/issues/1521>`__ STIX fonts: Make left arrow use combining left arrow for accents.
* `#1092 <https://github.com/mathjax/MathJax/issues/1092>`__ STIX fonts: Make ``U+222B`` (integral) stretchy.
* `#1154 <https://github.com/mathjax/MathJax/issues/1154>`__ STIX fonts: Remap ``|`` to variant form (with descender) and map variant to original form.
* `#1175 <https://github.com/mathjax/MathJax/issues/1175>`__ Use ``U+007C`` and ``U+2016`` for delimiters rather than ``U+2223`` and ``U+2225``.
* `#1421 <https://github.com/mathjax/MathJax/issues/1421>`__ MathJax TeX fonts: Fix SVG font data for stretchy characters.
* `#1418 <https://github.com/mathjax/MathJax/issues/1418>`__ Alias ``U+2206`` to ``U+0394`` and remove incorrect ``U+2206`` from SVG font files.
* `#1187 <https://github.com/mathjax/MathJax/issues/1187>`__ Make height and depth of minus match that of plus (needed for TeX-layout super/subscript algorithm to work properly), and adjust for that when it is used as an extender in stretchy characters.
* `#1546 <https://github.com/mathjax/MathJax/issues/1546>`__ MathJax TeX fonts: Add stretchy data for ``U+20D7``.



Localization
------------

* `#1604 <https://github.com/mathjax/MathJax/issues/1604>`__ Updated locales thanks to the contributors at Translatewiki.net; activate locale for Zazaki.

APIs
-----

* `#1504 <https://github.com/mathjax/MathJax/issues/1504>`__ Make ``getJaxForMath()`` work even during chunking.
* `#1522 <https://github.com/mathjax/MathJax/issues/1522>`__ Add Third Party Extensions Repository to the Ajax paths as ``[Contrib]``.
* `#1525 <https://github.com/mathjax/MathJax/issues/1525>`__ Allow MathJax root to be configured.

Misc.
-----

* `#1456 <https://github.com/mathjax/MathJax/issues/1456>`__ Prevent removal of DOM elements while MathJax is running from stopping processing, or to leaving duplicate math in place.
* `#1524 <https://github.com/mathjax/MathJax/issues/1524>`__ Prevent pre-processors from adding duplicate preview elements.
* `#1554 <https://github.com/mathjax/MathJax/issues/1554>`__ Safe extension: Add filtering of CSS styles like ``padding``, ``margin``.
* `#1590 <https://github.com/mathjax/MathJax/issues/1590>`__ Set previews to have ``display:none``.
* `#1591 <https://github.com/mathjax/MathJax/issues/1591>`__ Change ``rev=`` to ``V=`` in cache breaking code.

