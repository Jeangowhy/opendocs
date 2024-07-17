
.. code::bash

    while read -r url
    do
      echo $url
      #if [[ $url =~ .*index ]]; then
         curl $url                                 \
         | sed -n '/page-content/,/next-chapter/p' \
         | pandoc -trst -rhtml --column=80 --list-table=false >> $0
         #break
      #fi
    done << EOF
https://exploringjs.com/deep-js/index.html
https://exploringjs.com/deep-js/toc.html
https://exploringjs.com/deep-js/pt_frontmatter.html
https://exploringjs.com/deep-js/ch_about-book.html
https://exploringjs.com/deep-js/pt_types-values-variables.html
https://exploringjs.com/deep-js/ch_type-coercion.html
https://exploringjs.com/deep-js/ch_destructuring-algorithm.html
https://exploringjs.com/deep-js/ch_environments.html
https://exploringjs.com/deep-js/ch_global-scope.html
https://exploringjs.com/deep-js/pt_data.html
https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html
https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html
https://exploringjs.com/deep-js/ch_shared-mutable-state.html
https://exploringjs.com/deep-js/pt_object-property-attributes.html
https://exploringjs.com/deep-js/ch_property-attributes-intro.html
https://exploringjs.com/deep-js/ch_protecting-objects.html
https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html
https://exploringjs.com/deep-js/ch_enumerability.html
https://exploringjs.com/deep-js/pt_oop-techniques.html
https://exploringjs.com/deep-js/ch_creating-class-instances.html
https://exploringjs.com/deep-js/ch_copying-class-instances.html
https://exploringjs.com/deep-js/ch_immutable-collection-wrappers.html
https://exploringjs.com/deep-js/pt_regular-expressions.html
https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html
https://exploringjs.com/deep-js/pt_miscellaneous.html
https://exploringjs.com/deep-js/ch_implementing-promises.html
https://exploringjs.com/deep-js/ch_proxies.html
https://exploringjs.com/deep-js/ch_missing-chapters-site.html
EOF

    exit


Deep JavaScript: Theory and techniques
======================================

   |Book cover with diver|

      .. container::

         .. container::

            |axel-head.small|

         .. container::

            `Dr. Axel Rauschmayer <http://dr-axel.de/>`__
            Blogger (`2ality <http://2ality.com/>`__), book author, trainer


.. _about-the-book:

About the book
--------------

   This book dives deeply into JavaScript:

   -  It teaches practical techniques for using the language better.
   -  It teaches how the language works and why. What it teaches is firmly
      grounded in the ECMAScript specification (which the book explains and
      refers to).
   -  It covers only the language (ignoring platform-specific features such as
      browser APIs) but not exhaustively. Instead, it focuses on a selection of
      important topics.


.. _previews:

Read all chapters
-----------------

   -  Free to read online (except for three bonus chapters): 
      `HTML version <https://exploringjs.com/deep-js/toc.html>`__
   -  Previews (50%): 
      `PDF file <https://exploringjs.com/deep-js/downloads/deep-js-preview-book.pdf>`__, 
      `EPUB file <https://exploringjs.com/deep-js/downloads/deep-js-preview-book.epub>`__, 
      `MOBI file <https://exploringjs.com/deep-js/downloads/deep-js-preview-book.mobi>`__
   -  `Table of contents of the full book <https://exploringjs.com/deep-js/downloads/complete-toc.html>`__


.. _buy:

Buy the book
------------

   `Buy “Deep JavaScript“ for USD 39 <https://payhip.com/b/09Od>`__

   If you buy the digital package, you get the book in four DRM-free versions:

   -  PDF file
   -  ZIP archive with ad-free HTML
   -  EPUB file
   -  MOBI file


.. _discounts:

Discounts and bulk purchases
----------------------------

   -  Discounts: If a digital package is beyond your means, you can get a
      discount via `this form <https://docs.google.com/forms/d/e/1FAIpQLSfUOlOIx7wEPv8AK4-YapGSmpBeJRIcy-t56iX4LNJISHzWpw/viewform>`__.
   -  Bulk purchases: If you intend to buy more than 10 digital copies, please
      contact me via email at ``dr_axel AT icloud.com`` and I’ll help you make
      the purchase (Payhip doesn’t currently directly support bulk purchases).


.. _about-the-author:

About the author
----------------

   |axel-head.large| `Dr. Axel Rauschmayer <http://dr-axel.de/>`__ specializes in
   JavaScript and web development. He `blogs <http://www.2ality.com/>`__, writes
   books and teaches classes.
   Axel has been writing about JavaScript `since 2009 <http://2ality.com/2009/02/javascript-is-becoming-nice-language.html>`__.

   `Praise for Axel’s books <https://twitter.com/exploringjs/timelines/798422922461347840?ref_src=twsrc%5Etfw>`__

.. |Book cover with diver| image:: https://exploringjs.com/deep-js/img-homepage/cover-homepage.jpg
   :width: 262px
   :height: 375px
   :target: toc.html
.. |axel-head.small| image:: https://exploringjs.com/deep-js/img-homepage/axel-head.jpg
   :width: 46px
.. |axel-head.large| image:: https://exploringjs.com/deep-js/img-homepage/axel-head.jpg
   :width: 186px



Table of contents
=================

   -  `I Frontmatter <https://exploringjs.com/deep-js/pt_frontmatter.html>`__

      -  `1 About this book <https://exploringjs.com/deep-js/ch_about-book.html>`__

         -  `1.1 Where is the homepage of this book? <https://exploringjs.com/deep-js/ch_about-book.html#where-is-the-homepage-of-this-book>`__
         -  `1.2 What is in this book? <https://exploringjs.com/deep-js/ch_about-book.html#what-is-in-this-book>`__
         -  `1.3 What do I get for my money? <https://exploringjs.com/deep-js/ch_about-book.html#what-do-i-get-for-my-money>`__
         -  `1.4 How can I preview the content? <https://exploringjs.com/deep-js/ch_about-book.html#how-can-i-preview-the-content>`__
         -  `1.5 How do I report errors? <https://exploringjs.com/deep-js/ch_about-book.html#how-do-i-report-errors>`__
         -  `1.6 Tips for reading <https://exploringjs.com/deep-js/ch_about-book.html#tips-for-reading>`__
         -  `1.7 Notations and conventions <https://exploringjs.com/deep-js/ch_about-book.html#notations-and-conventions>`__
         -  `1.8 Acknowledgements <https://exploringjs.com/deep-js/ch_about-book.html#acknowledgements>`__

   -  `II Types, values, variables <https://exploringjs.com/deep-js/pt_types-values-variables.html>`__

      -  `2 Type coercion in JavaScript <https://exploringjs.com/deep-js/ch_type-coercion.html>`__

         -  `2.1 What is type coercion? <https://exploringjs.com/deep-js/ch_type-coercion.html#what-is-type-coercion>`__
         -  `2.2 Operations that help implement coercion in the ECMAScript specification <https://exploringjs.com/deep-js/ch_type-coercion.html#operations-that-help-implement-coercion-in-the-ecmascript-specification>`__
         -  `2.3 Intermission: expressing specification algorithms in JavaScript <https://exploringjs.com/deep-js/ch_type-coercion.html#intermission-expressing-specification-algorithms-in-javascript>`__
         -  `2.4 Example coercion algorithms <https://exploringjs.com/deep-js/ch_type-coercion.html#example-coercion-algorithms>`__
         -  `2.5 Operations that coerce <https://exploringjs.com/deep-js/ch_type-coercion.html#operations-that-coerce>`__
         -  `2.6 Glossary: terms related to type conversion <https://exploringjs.com/deep-js/ch_type-coercion.html#glossary-terms-related-to-type-conversion>`__

      -  `3 The destructuring algorithm <https://exploringjs.com/deep-js/ch_destructuring-algorithm.html>`__

         -  `3.1 Preparing for the pattern matching algorithm <https://exploringjs.com/deep-js/ch_destructuring-algorithm.html#preparing-for-the-pattern-matching-algorithm>`__
         -  `3.2 The pattern matching algorithm <https://exploringjs.com/deep-js/ch_destructuring-algorithm.html#the-pattern-matching-algorithm>`__
         -  `3.3 Empty object patterns and Array patterns <https://exploringjs.com/deep-js/ch_destructuring-algorithm.html#empty-object-patterns-and-array-patterns>`__
         -  `3.4 Applying the algorithm <https://exploringjs.com/deep-js/ch_destructuring-algorithm.html#applying-the-algorithm>`__

      -  `4 Environments: under the hood of variables <https://exploringjs.com/deep-js/ch_environments.html>`__

         -  `4.1 Environment: data structure for managing variables <https://exploringjs.com/deep-js/ch_environments.html#environment-data-structure-for-managing-variables>`__
         -  `4.2 Recursion via environments <https://exploringjs.com/deep-js/ch_environments.html#recursion-via-environments>`__
         -  `4.3 Nested scopes via environments <https://exploringjs.com/deep-js/ch_environments.html#nested-scopes-via-environments>`__
         -  `4.4 Closures and environments <https://exploringjs.com/deep-js/ch_environments.html#closures-environments>`__

      -  `5 A detailed look at global variables <https://exploringjs.com/deep-js/ch_global-scope.html>`__

         -  `5.1 Scopes <https://exploringjs.com/deep-js/ch_global-scope.html#scopes>`__
         -  `5.2 Lexical environments <https://exploringjs.com/deep-js/ch_global-scope.html#lexical-environments>`__
         -  `5.3 The global object <https://exploringjs.com/deep-js/ch_global-scope.html#the-global-object>`__
         -  `5.4 In browsers, globalThis does not point directly to the global object <https://exploringjs.com/deep-js/ch_global-scope.html#window-proxy>`__
         -  `5.5 The global environment <https://exploringjs.com/deep-js/ch_global-scope.html#the-global-environment>`__
         -  `5.6 Conclusion: Why does JavaScript have both normal global variables and the global object? <https://exploringjs.com/deep-js/ch_global-scope.html#conclusion-why-does-javascript-have-both-normal-global-variables-and-the-global-object>`__
         -  `5.7 Further reading and sources of this chapter <https://exploringjs.com/deep-js/ch_global-scope.html#further-reading-and-sources-of-this-chapter>`__

   -  `III Working with data <https://exploringjs.com/deep-js/pt_data.html>`__

      -  `6 Copying objects and Arrays <https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html>`__

         -  `6.1 Shallow copying vs. deep copying <https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html#shallow-copying-vs.-deep-copying>`__
         -  `6.2 Shallow copying in JavaScript <https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html#shallow-copying-in-javascript>`__
         -  `6.3 Deep copying in JavaScript <https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html#deep-copying-in-javascript>`__
         -  `6.4 Further reading <https://exploringjs.com/deep-js/ch_copying-objects-and-arrays.html#further-reading>`__

      -  `7 Updating data destructively and non-destructively <https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html>`__

         -  `7.1 Examples: updating an object destructively and non-destructively <https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html#examples-updating-an-object-destructively-and-non-destructively>`__
         -  `7.2 Examples: updating an Array destructively and non-destructively <https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html#examples-updating-an-array-destructively-and-non-destructively>`__
         -  `7.3 Manual deep updating <https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html#manual-deep-updating>`__
         -  `7.4 Implementing generic deep updating <https://exploringjs.com/deep-js/ch_updating-destructively-and-nondestructively.html#implementing-generic-deep-updating>`__

      -  `8 The problems of shared mutable state and how to avoid them <https://exploringjs.com/deep-js/ch_shared-mutable-state.html>`__
         -  `8.1 What is shared mutable state and why is it problematic? <https://exploringjs.com/deep-js/ch_shared-mutable-state.html#what-is-shared-mutable-state-and-why-is-it-problematic>`__
         -  `8.2 Avoiding sharing by copying data <https://exploringjs.com/deep-js/ch_shared-mutable-state.html#avoiding-sharing-by-copying-data>`__
         -  `8.3 Avoiding mutations by updating non-destructively <https://exploringjs.com/deep-js/ch_shared-mutable-state.html#avoiding-mutations-by-updating-non-destructively>`__
         -  `8.4 Preventing mutations by making data immutable <https://exploringjs.com/deep-js/ch_shared-mutable-state.html#preventing-mutations-by-making-data-immutable>`__
         -  `8.5 Libraries for avoiding shared mutable state <https://exploringjs.com/deep-js/ch_shared-mutable-state.html#libraries-for-avoiding-shared-mutable-state>`__

   -  `IV OOP: object property attributes <https://exploringjs.com/deep-js/pt_object-property-attributes.html>`__

      -  `9 Property attributes: an introduction <https://exploringjs.com/deep-js/ch_property-attributes-intro.html>`__

         -  `9.1 The structure of objects <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#the-structure-of-objects>`__
         -  `9.2 Property descriptors <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#property-descriptors>`__
         -  `9.3 Retrieving descriptors for properties <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#retrieving-descriptors-for-properties>`__
         -  `9.4 Defining properties via descriptors <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#defining-properties-via-descriptors>`__
         -  `9.5 Object.create(): Creating objects via descriptors <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#object.create-creating-objects-via-descriptors>`__
         -  `9.6 Use cases for Object.getOwnPropertyDescriptors() <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#use-cases-for-object.getownpropertydescriptors>`__
         -  `9.7 Omitting descriptor properties <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#omitting-descriptor-properties>`__
         -  `9.8 What property attributes do built-in constructs use? <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#what-property-attributes-do-built-in-constructs-use>`__
         -  `9.9 API: property descriptors <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#api-property-descriptors>`__
         -  `9.10 Further reading <https://exploringjs.com/deep-js/ch_property-attributes-intro.html#further-reading-1>`__

      -  `10 Protecting objects from being changed <https://exploringjs.com/deep-js/ch_protecting-objects.html>`__

         -  `10.1 Levels of protection: preventing extensions, sealing, freezing <https://exploringjs.com/deep-js/ch_protecting-objects.html#levels-of-protection-preventing-extensions-sealing-freezing>`__
         -  `10.2 Preventing extensions of objects <https://exploringjs.com/deep-js/ch_protecting-objects.html#preventing-extensions-of-objects>`__
         -  `10.3 Sealing objects <https://exploringjs.com/deep-js/ch_protecting-objects.html#sealing-objects>`__
         -  `10.4 Freezing objects <https://exploringjs.com/deep-js/ch_protecting-objects.html#freezing-objects>`__
         -  `10.5 Further reading <https://exploringjs.com/deep-js/ch_protecting-objects.html#further-reading-2>`__

      -  `11 Properties: assignment vs. definition <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html>`__

         -  `11.1 Assignment vs. definition <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html#assignment-vs.-definition>`__
         -  `11.2 Assignment and definition in theory (optional) <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html#assignment-and-definition-in-theory-optional>`__
         -  `11.3 Definition and assignment in practice <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html#definition-and-assignment-in-practice>`__
         -  `11.4 Which language constructs use definition, which assignment? <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html#which-language-constructs-use-definition-which-assignment>`__
         -  `11.5 Further reading and sources of this chapter <https://exploringjs.com/deep-js/ch_property-assignment-vs-definition.html#further-reading-and-sources-of-this-chapter-1>`__

      -  `12 Enumerability of properties <https://exploringjs.com/deep-js/ch_enumerability.html>`__

         -  `12.1 How enumerability affects property-iterating constructs <https://exploringjs.com/deep-js/ch_enumerability.html#how-enumerability-affects-property-iterating-constructs>`__
         -  `12.2 The enumerability of pre-defined and created properties <https://exploringjs.com/deep-js/ch_enumerability.html#the-enumerability-of-pre-defined-and-created-properties>`__
         -  `12.3 Use cases for enumerability <https://exploringjs.com/deep-js/ch_enumerability.html#use-cases-for-enumerability>`__
         -  `12.4 Conclusion <https://exploringjs.com/deep-js/ch_enumerability.html#conclusion>`__

   -  `V OOP: techniques <https://exploringjs.com/deep-js/pt_oop-techniques.html>`__

      -  `13 Techniques for instantiating classes <https://exploringjs.com/deep-js/ch_creating-class-instances.html>`__

         -  `13.1 The problem: initializing a property asynchronously <https://exploringjs.com/deep-js/ch_creating-class-instances.html#the-problem-initializing-a-property-asynchronously>`__
         -  `13.2 Solution: Promise-based constructor <https://exploringjs.com/deep-js/ch_creating-class-instances.html#solution-promise-based-constructor>`__
         -  `13.3 Solution: static factory method <https://exploringjs.com/deep-js/ch_creating-class-instances.html#solution-static-factory-method>`__
         -  `13.4 Subclassing a Promise-based constructor (optional) <https://exploringjs.com/deep-js/ch_creating-class-instances.html#subclassing-a-promise-based-constructor-optional>`__
         -  `13.5 Conclusion <https://exploringjs.com/deep-js/ch_creating-class-instances.html#conclusion-1>`__
         -  `13.6 Further reading <https://exploringjs.com/deep-js/ch_creating-class-instances.html#further-reading-3>`__

      -  `14 Copying instances of classes: .clone() vs. copy constructors <https://exploringjs.com/deep-js/ch_copying-class-instances.html>`__

         -  `14.1 .clone() methods <https://exploringjs.com/deep-js/ch_copying-class-instances.html#clone-methods>`__
         -  `14.2 Static factory methods <https://exploringjs.com/deep-js/ch_copying-class-instances.html#static-factory-methods>`__
         -  `14.3 Acknowledgements <https://exploringjs.com/deep-js/ch_copying-class-instances.html#acknowledgements-1>`__

      -  `15 Immutable wrappers for collections <https://exploringjs.com/deep-js/ch_immutable-collection-wrappers.html>`__

         -  `15.1 Wrapping objects <https://exploringjs.com/deep-js/ch_immutable-collection-wrappers.html#wrapping-objects>`__
         -  `15.2 An immutable wrapper for Maps <https://exploringjs.com/deep-js/ch_immutable-collection-wrappers.html#an-immutable-wrapper-for-maps>`__
         -  `15.3 An immutable wrapper for Arrays <https://exploringjs.com/deep-js/ch_immutable-collection-wrappers.html#an-immutable-wrapper-for-arrays>`__

   -  `VI Regular expressions <https://exploringjs.com/deep-js/pt_regular-expressions.html>`__

      -  `16 Regular expressions: lookaround assertions by example <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html>`__

         -  `16.1 Cheat sheet: lookaround assertions <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#cheat-sheet-lookaround-assertions>`__
         -  `16.2 Warnings for this chapter <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#warnings-for-this-chapter>`__
         -  `16.3 Example: Specifying what comes before or after a match (positive lookaround) <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-specifying-what-comes-before-or-after-a-match-positive-lookaround>`__
         -  `16.4 Example: Specifying what does not come before or after a match (negative lookaround) <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-specifying-what-does-not-come-before-or-after-a-match-negative-lookaround>`__
         -  `16.5 Interlude: pointing lookaround assertions inward <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#interlude-pointing-lookaround-assertions-inward>`__
         -  `16.6 Example: match strings not starting with 'abc' <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-match-strings-not-starting-with-abc>`__
         -  `16.7 Example: match substrings that do not contain '.mjs' <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-match-substrings-that-do-not-contain-.mjs>`__
         -  `16.8 Example: skipping lines with comments <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-skipping-lines-with-comments>`__
         -  `16.9 Example: smart quotes <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#example-smart-quotes>`__
         -  `16.10 Acknowledgements <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#acknowledgements-2>`__
         -  `16.11 Further reading <https://exploringjs.com/deep-js/ch_regexp-lookaround-assertions.html#further-reading-4>`__

   -  `VII Miscellaneous topics <https://exploringjs.com/deep-js/pt_miscellaneous.html>`__

      -  `17 Exploring Promises by implementing them <https://exploringjs.com/deep-js/ch_implementing-promises.html>`__

         -  `17.1 Refresher: states of Promises <https://exploringjs.com/deep-js/ch_implementing-promises.html#refresher-states-of-promises>`__
         -  `17.2 Version 1: Stand-alone Promise <https://exploringjs.com/deep-js/ch_implementing-promises.html#version-1-stand-alone-promise>`__
         -  `17.3 Version 2: Chaining .then() calls <https://exploringjs.com/deep-js/ch_implementing-promises.html#version-2-chaining-.then-calls>`__
         -  `17.4 Convenience method .catch() <https://exploringjs.com/deep-js/ch_implementing-promises.html#convenience-method-.catch>`__
         -  `17.5 Omitting reactions <https://exploringjs.com/deep-js/ch_implementing-promises.html#omitting-reactions>`__
         -  `17.6 The implementation <https://exploringjs.com/deep-js/ch_implementing-promises.html#the-implementation>`__
         -  `17.7 Version 3: Flattening Promises returned from .then() callbacks <https://exploringjs.com/deep-js/ch_implementing-promises.html#version-3-flattening-promises-returned-from-.then-callbacks>`__
         -  `17.8 Version 4: Exceptions thrown in reaction callbacks <https://exploringjs.com/deep-js/ch_implementing-promises.html#version-4-exceptions-thrown-in-reaction-callbacks>`__
         -  `17.9 Version 5: Revealing constructor pattern <https://exploringjs.com/deep-js/ch_implementing-promises.html#version-5-revealing-constructor-pattern>`__

      -  `18 Metaprogramming with Proxies <https://exploringjs.com/deep-js/ch_proxies.html>`__

         -  `18.1 Overview <https://exploringjs.com/deep-js/ch_proxies.html#overview-proxies>`__
         -  `18.2 Programming versus metaprogramming <https://exploringjs.com/deep-js/ch_proxies.html#programming-vs-metaprogramming>`__
         -  `18.3 Proxies explained <https://exploringjs.com/deep-js/ch_proxies.html#proxies-explained>`__
         -  `18.4 Use cases for Proxies <https://exploringjs.com/deep-js/ch_proxies.html#proxy-use-cases>`__
         -  `18.5 The design of the Proxy API <https://exploringjs.com/deep-js/ch_proxies.html#design-proxy-api>`__
         -  `18.6 FAQ: Proxies <https://exploringjs.com/deep-js/ch_proxies.html#faq-proxies>`__
         -  `18.7 Reference: the Proxy API <https://exploringjs.com/deep-js/ch_proxies.html#reference-proxy-api>`__
         -  `18.8 Conclusion <https://exploringjs.com/deep-js/ch_proxies.html#conclusion-proxies>`__
         -  `18.9 Further reading <https://exploringjs.com/deep-js/ch_proxies.html#further-reading-proxies>`__

      -  `19 Where are the remaining chapters? <https://exploringjs.com/deep-js/ch_missing-chapters-site.html>`__


   - VII MISCELLANEOUS TOPICS

      -  19 Exploring Promises by implementing them

         -  19.1 Refresher: states of Promises
         -  19.2 Version 1: Stand-alone Promise
         -  19.3 Version 2: Chaining .then() calls
         -  19.4 Convenience method .catch()
         -  19.5 Omitting reactions
         -  19.6 The implementation
         -  19.7 Version 3: Flattening Promises returned from .then() callbacks
         -  19.8 Version 4: Exceptions thrown in reaction callbacks
         -  19.9 Version 5: Revealing constructor pattern

      -  20 Metaprogramming with Proxies

         -  20.1 Overview
         -  20.2 Programming versus metaprogramming
         -  20.3 Proxies explained
         -  20.4 Use cases for Proxies
         -  20.5 The design of the Proxy API
         -  20.6 FAQ: Proxies
         -  20.7 Reference: the Proxy API
         -  20.8 Conclusion
         -  20.9 Further reading

      -  21 The property .name of functions (bonus)

         -  21.1 Names of functions
         -  21.2 Constructs that provide names for functions
         -  21.3 Things to look out for with names of functions
         -  21.4 Changing the names of functions
         -  21.5 The function property .name in the ECMAScript specification


.. _pt_frontmatter:


PART I Frontmatter
==================


.. _ch_about-book:


1 About this book
=================

   --------------

      -  1.1 `Where is the homepage of this book? <#where-is-the-homepage-of-this-book>`__
      -  1.2 `What is in this book? <#what-is-in-this-book>`__
      -  1.3 `What do I get for my money? <#what-do-i-get-for-my-money>`__
      -  1.4 `How can I preview the content? <#how-can-i-preview-the-content>`__
      -  1.5 `How do I report errors? <#how-do-i-report-errors>`__
      -  1.6 `Tips for reading <#tips-for-reading>`__
      -  1.7 `Notations and conventions <#notations-and-conventions>`__

         -  1.7.1 `What is a type signature? Why am I seeing static types in this book? <#what-is-a-type-signature-why-am-i-seeing-static-types-in-this-book>`__
         -  1.7.2 `What do the notes with icons mean? <#what-do-the-notes-with-icons-mean>`__

      -  1.8 `Acknowledgements <#acknowledgements>`__

   --------------


.. _where-is-the-homepage-of-this-book:

1.1 Where is the homepage of this book?
---------------------------------------

   The homepage of “Deep JavaScript” is
   ```exploringjs.com/deep-js/`` <https://exploringjs.com/deep-js/>`__


.. _what-is-in-this-book:

1.2 What is in this book?
-------------------------

   This book dives deeply into JavaScript:

   -  It teaches practical techniques for using the language better.
   -  It teaches how the language works and why. What it teaches is firmly
      grounded in the ECMAScript specification (which the book explains and
      refers to).
   -  It covers only the language (ignoring platform-specific features such as
      browser APIs) but not exhaustively. Instead, it focuses on a selection of
      important topics.


.. _what-do-i-get-for-my-money:

1.3 What do I get for my money?
-------------------------------

   If you buy this book, you get:

   -  The current content in four DRM-free versions:

      -  PDF file
      -  ZIP archive with ad-free HTML
      -  EPUB file
      -  MOBI file

   -  Any future content that is added to this edition. How much I can add
      depends on the sales of this book.

   The current price is introductory. It will increase as more content is added.


.. _how-can-i-preview-the-content:

1.4 How can I preview the content?
----------------------------------

   `On the homepage of this book <https://exploringjs.com/deep-js/#previews>`__,
   there are extensive previews for all versions of this book.


.. _how-do-i-report-errors:

1.5 How do I report errors?
---------------------------

   -  The HTML version of this book has a link to comments at the end of each
      chapter.
   -  They jump to GitHub issues, which `you can also access
      directly <https://github.com/rauschma/deep-js/issues>`__.


.. _tips-for-reading:

1.6 Tips for reading
--------------------

   -  You can read the chapters in any order. Each one is self-contained but
      occasionally, there are references to other chapters with further
      information.
   -  The headings of some sections are marked with “(optional)” meaning that
      they are non-essential. You will still understand the remainders of their
      chapters if you skip them.


.. _notations-and-conventions:

1.7 Notations and conventions
-----------------------------


.. _what-is-a-type-signature-why-am-i-seeing-static-types-in-this-book:

1.7.1 What is a type signature? Why am I seeing static types in this book?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For example, you may see:

   .. code::javascript

         Number.isFinite(num: number): boolean

   That is called the *type signature* of ``Number.isFinite()``. This notation,
   especially the static types ``number`` of ``num`` and ``boolean`` of the
   result, are not real JavaScript. The notation is borrowed from the
   compile-to-JavaScript language TypeScript (which is mostly just JavaScript
   plus static typing).

   Why is this notation being used? It helps give you a quick idea of how a
   function works. The notation is explained in detail in `a 2ality blog
   post <https://2ality.com/2018/04/type-notation-typescript.html>`__, but is
   usually relatively intuitive.


.. _what-do-the-notes-with-icons-mean:

1.7.2 What do the notes with icons mean?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container:: notebox

      |eye-regular.svg|  **Reading instructions**

      Explains how to best read the content.

   .. container:: notebox

      |external-link-regular.svg|  **External content**

      Points to additional, external, content.

   .. container:: notebox

      |lightbulb-regular.svg|  **Tip**

      Gives a tip related to the current content.

   .. container:: notebox

      |question-circle-regular.svg|  **Question**

      Asks and answers a question pertinent to the current content (think FAQ).

   .. container:: notebox

      |exclamation-triangle-regular.svg|  **Warning**

      Warns about pitfalls, etc.

   .. container:: notebox

      |cogs-regular.svg|  **Details**

      Provides additional details, complementing the current content. It is
      similar to a footnote.


.. _acknowledgements:

1.8 Acknowledgements
--------------------

   -  Thanks to Allen Wirfs-Brock for his advice via Twitter and blog post
      comments. It helped make this book better.

   -  More people who contributed are acknowledged in the chapters.

   `Comments <https://github.com/rauschma/deep-js/issues/1>`__

.. |eye-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px
.. |external-link-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/external-link-regular.svg
   :height: 24px
.. |lightbulb-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/lightbulb-regular.svg
   :height: 24px
.. |question-circle-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/question-circle-regular.svg
   :height: 24px
.. |exclamation-triangle-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/exclamation-triangle-regular.svg
   :height: 24px
.. |cogs-regular.svg| image:: https://exploringjs.com/deep-js/img-book/img/icons/cogs-regular.svg
   :height: 24px


.. _pt_types-values-variables:


PART II Types, values, variables
================================


.. _ch_type-coercion:


2 Type coercion in JavaScript
=============================

   --------------

      -  2.1 `What is type coercion? <#what-is-type-coercion>`__

         -  2.1.1 `Dealing with type coercion <#dealing-with-type-coercion>`__

      -  2.2 `Operations that help implement coercion in the ECMAScript specification <#operations-that-help-implement-coercion-in-the-ecmascript-specification>`__

         -  2.2.1 `Converting to primitive types and objects <#converting-to-primitive-types-and-objects>`__
         -  2.2.2 `Converting to numeric types <#converting-to-numeric-types>`__
         -  2.2.3 `Converting to property keys <#converting-to-property-keys>`__
         -  2.2.4 `Converting to Array indices <#converting-to-array-indices>`__
         -  2.2.5 `Converting to Typed Array elements <#converting-to-typed-array-elements>`__

      -  2.3 `Intermission: expressing specification algorithms in JavaScript <#intermission-expressing-specification-algorithms-in-javascript>`__
      -  2.4 `Example coercion algorithms <#example-coercion-algorithms>`__

         -  2.4.1 `ToPrimitive() <#toprimitive>`__
         -  2.4.2 `ToString() and related operations <#tostring-and-related-operations>`__
         -  2.4.3 `ToPropertyKey() <#topropertykey>`__
         -  2.4.4 `ToNumeric() and related operations <#tonumeric-and-related-operations>`__

      -  2.5 `Operations that coerce <#operations-that-coerce>`__

         -  2.5.1 `Addition operator (+) <#addition-operator>`__
         -  2.5.2 `Abstract Equality Comparison (==) <#abstract-equality-comparison>`__

      -  2.6 `Glossary: terms related to type conversion <#glossary-terms-related-to-type-conversion>`__

   --------------

   In this chapter, we examine the role of *type coercion* in JavaScript. We
   will go relatively deeply into this subject and, e.g., look into how the
   ECMAScript specification handles coercion.


.. _what-is-type-coercion:

2.1 What is type coercion?
--------------------------

   Each operation (function, operator, etc.) expects its parameters to have
   certain types. If a value doesn’t have the right type for a parameter, three
   common options for, e.g., a function are:

   1. The function can throw an exception:

      .. container:: sourceCode
         :name: cb2

         .. code:: js

            function multiply(x, y) {
              if (typeof x !== 'number' || typeof y !== 'number') {
                throw new TypeError();
              }
              // ···
            }

   2. The function can return an error value:

      .. container:: sourceCode
         :name: cb3

         .. code:: js

            function multiply(x, y) {
              if (typeof x !== 'number' || typeof y !== 'number') {
                return NaN;
              }
              // ···
            }

   3. The function can convert its arguments to useful values:

      .. container:: sourceCode
         :name: cb4

         .. code:: js

            function multiply(x, y) {
              if (typeof x !== 'number') {
                x = Number(x);
              }
              if (typeof y !== 'number') {
                y = Number(y);
              }
              // ···
            }

   In (3), the operation performs an implicit type conversion. That is called
   *type coercion*.

   JavaScript initially didn’t have exceptions, which is why it uses coercion
   and error values for most of its operations:

   .. code::javascript

         // Coercion
         assert.equal(3 * true, 3);

         // Error values
         assert.equal(1 / 0, Infinity);
         assert.equal(Number('xyz'), NaN);

   However, there are also cases (especially when it comes to newer features)
   where it throws exceptions if an argument doesn’t have the right type:

   -  Accessing properties of ``null`` or ``undefined``:

      .. container:: sourceCode
         :name: cb6

         .. code:: repl

            > undefined.prop
            TypeError: Cannot read property 'prop' of undefined
            > null.prop
            TypeError: Cannot read property 'prop' of null
            > 'prop' in null
            TypeError: Cannot use 'in' operator to search for 'prop' in null

   -  Using symbols:

      .. container:: sourceCode
         :name: cb7

         .. code:: repl

            > 6 / Symbol()
            TypeError: Cannot convert a Symbol value to a number

   -  Mixing bigints and numbers:

      .. container:: sourceCode
         :name: cb8

         .. code:: repl

            > 6 / 3n
            TypeError: Cannot mix BigInt and other types

   -  New-calling or function-calling values that don’t support that operation:

      .. container:: sourceCode
         :name: cb9

         .. code:: repl

            > 123()
            TypeError: 123 is not a function
            > (class {})()
            TypeError: Class constructor  cannot be invoked without 'new'

            > new 123
            TypeError: 123 is not a constructor
            > new (() => {})
            TypeError: (intermediate value) is not a constructor

   -  Changing read-only properties (only throws in strict mode):

      .. container:: sourceCode
         :name: cb10

         .. code:: repl

            > 'abc'.length = 1
            TypeError: Cannot assign to read only property 'length'
            > Object.freeze({prop:3}).prop = 1
            TypeError: Cannot assign to read only property 'prop'


.. _dealing-with-type-coercion:

2.1.1 Dealing with type coercion
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Two common ways of dealing with coercion are:

   -  A caller can explicitly convert values so that they have the right types.
      For example, in the following interaction, we want to multiply two numbers
      encoded as strings:

      .. container:: sourceCode
         :name: cb11

         .. code:: js

            let x = '3';
            let y = '2';
            assert.equal(Number(x) * Number(y), 6);

   -  A caller can let the operation make the conversion for them:

      .. container:: sourceCode
         :name: cb12

         .. code:: js

            let x = '3';
            let y = '2';
            assert.equal(x * y, 6);

   I usually prefer the former, because it clarifies my intention: I expect
   ``x`` and ``y`` not to be numbers, but want to multiply two numbers.


.. _operations-that-help-implement-coercion-in-the-ecmascript-specification:

2.2 Operations that help implement coercion in the ECMAScript specification
---------------------------------------------------------------------------

   The following sections describe the most important internal functions used by
   the ECMAScript specification to convert actual parameters to expected types.

   For example, in TypeScript, we would write:

   .. code::javascript

         function isNaN(number: number) {
           // ···
         }

   In the specification, this looks `as
   follows <https://tc39.es/ecma262/#sec-multiplicative-operators-runtime-semantics-evaluation>`__
   (translated to JavaScript, so that it is easier to understand):

   .. code::javascript

         function isNaN(number) {
           let num = ToNumber(number);
           // ···
         }


.. _converting-to-primitive-types-and-objects:

2.2.1 Converting to primitive types and objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Whenever primitive types or objects are expected, the following conversion
   functions are used:

   -  ``ToBoolean()``
   -  ``ToNumber()``
   -  ``ToBigInt()``
   -  ``ToString()``
   -  ``ToObject()``

   These internal functions have analogs in JavaScript that are very similar:

   .. code:: repl

         > Boolean(0)
         false
         > Boolean(1)
         true

         > Number('123')
         123

   After the introduction of bigints, which exists alongside numbers, the
   specification often uses ``ToNumeric()`` where it previously used
   ``ToNumber()``. Read on for more information.


.. _converting-to-numeric-types:

2.2.2 Converting to numeric types
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   At the moment, JavaScript has `two built-in numeric
   types <https://tc39.es/ecma262/#sec-numeric-types>`__: number and bigint.

   -  ``ToNumeric()`` returns a numeric value ``num``. Its callers usually
      invoke a method ``mthd`` of the specification type of ``num``:

      ::

         Type(num)::mthd(···)

      Among others, the following operations use ``ToNumeric``:

      -  Prefix and postfix ``++`` operator
      -  ``*`` operator

   -  ``ToInteger(x)`` is used whenever a number without a fraction is expected.
      The range of the result is often restricted further afterwards.

      -  It calls ``ToNumber(x)`` and removes the fraction (similar to
         ``Math.trunc()``).
      -  Operations that use ``ToInteger()``:

         -  ``Number.prototype.toString(radix?)``
         -  ``String.prototype.codePointAt(pos)``
         -  ``Array.prototype.slice(start, end)``
         -  Etc.

   -  ``ToInt32()``, ``ToUint32()`` coerce numbers to 32-bit integers and are
      used by bitwise operators (see
      tbl. `1 <#tbl:bitwise-number-operator-coercion>`__).

      -  ``ToInt32()``: signed, range [−2\ :sup:`31`, 2\ :sup:`31`\ −1] (limits
         are included)
      -  ``ToUint32()``: unsigned (hence the ``U``), range [0, 2\ :sup:`32`\ −1]
         (limits are included)

   .. container::
      :name: tbl:bitwise-number-operator-coercion

      .. table:: Table 1: Coercion of the operands of bitwise number operators
      (BigInt operators don’t limit the number of bits).

         =================== ============= ============== ===========
         Operator            Left operand  Right operand  result type
         =================== ============= ============== ===========
         ``<<``              ``ToInt32()`` ``ToUint32()`` ``Int32``
         signed ``>>``       ``ToInt32()`` ``ToUint32()`` ``Int32``
         unsigned ``>>>``    ``ToInt32()`` ``ToUint32()`` ``Uint32``
         ``&``, ``^``, ``|`` ``ToInt32()`` ``ToUint32()`` ``Int32``
         ``~``               —             ``ToInt32()``  ``Int32``
         =================== ============= ============== ===========


.. _converting-to-property-keys:

2.2.3 Converting to property keys
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``ToPropertyKey()`` returns a string or a symbol and is used by:

   -  The bracket operator ``[]``
   -  Computed property keys in object literals
   -  The left-hand side of the ``in`` operator
   -  ``Object.defineProperty(_, P, _)``
   -  ``Object.fromEntries()``
   -  ``Object.getOwnPropertyDescriptor()``
   -  ``Object.prototype.hasOwnProperty()``
   -  ``Object.prototype.propertyIsEnumerable()``
   -  Several methods of ``Reflect``


.. _converting-to-array-indices:

2.2.4 Converting to Array indices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  ``ToLength()`` is used (directly) mainly for string indices.

      -  Helper function for ``ToIndex()``
      -  Range of result ``l``: 0 ≤ ``l`` ≤ 2\ :sup:`53`\ −1

   -  ``ToIndex()`` is used for Typed Array indices.

      -  Main difference with ``ToLength()``: throws an exception if argument is
         out of range.
      -  Range of result ``i``: 0 ≤ ``i`` ≤ 2\ :sup:`53`\ −1

   -  ``ToUint32()`` is used for Array indices.

      -  Range of result ``i``: 0 ≤ ``i`` < 2\ :sup:`32`\ −1 (the upper limit is
         excluded, to leave room for the ``.length``)


.. _converting-to-typed-array-elements:

2.2.5 Converting to Typed Array elements
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   When we set the value of a Typed Array element, one of the following
   conversion functions is used:

   -  ``ToInt8()``
   -  ``ToUint8()``
   -  ``ToUint8Clamp()``
   -  ``ToInt16()``
   -  ``ToUint16()``
   -  ``ToInt32()``
   -  ``ToUint32()``
   -  ``ToBigInt64()``
   -  ``ToBigUint64()``


.. _intermission-expressing-specification-algorithms-in-javascript:

2.3 Intermission: expressing specification algorithms in JavaScript
-------------------------------------------------------------------

   In the remainder of this chapter, we’ll encounter several specification
   algorithms, but “implemented” as JavaScript. The following list shows how
   some frequently used patterns are translated from specification to
   JavaScript:

   -  | Spec: If Type(value) is String
      | JavaScript: ``if (TypeOf(value) === 'string')``
      | (very loose translation; ``TypeOf()`` is defined below)

   -  | Spec: If IsCallable(method) is true
      | JavaScript: ``if (IsCallable(method))``
      | (``IsCallable()`` is defined below)

   -  | Spec: Let numValue be ToNumber(value)
      | JavaScript: ``let numValue = Number(value)``

   -  | Spec: Let isArray be IsArray(O)
      | JavaScript: ``let isArray = Array.isArray(O)``

   -  | Spec: If O has a [[NumberData]] internal slot
      | JavaScript: ``if ('__NumberData__' in O)``

   -  | Spec: Let tag be Get(O, @@toStringTag)
      | JavaScript: ``let tag = O[Symbol.toStringTag]``

   -  | Spec: Return the string-concatenation of “[object ", tag, and "]”.
      | JavaScript: ``return '[object ' + tag + ']';``

   ``let`` (and not ``const``) is used to match the language of the
   specification.

   Some things are omitted – for example, the `ReturnIfAbrupt
   shorthands <https://tc39.es/ecma262/#sec-returnifabrupt-shorthands>`__ ``?``
   and ``!``.

   .. code::javascript

         /**
          * An improved version of typeof
          */
         function TypeOf(value) {
           const result = typeof value;
           switch (result) {
             case 'function':
               return 'object';
             case 'object':
               if (value === null) {
                 return 'null';
               } else {
                 return 'object';
               }
             default:
               return result;
           }
         }

         function IsCallable(x) {
           return typeof x === 'function';
         }


.. _example-coercion-algorithms:

2.4 Example coercion algorithms
-------------------------------


.. _toprimitive:

2.4.1 ``ToPrimitive()``
~~~~~~~~~~~~~~~~~~~~~~~

   `The operation
   ``ToPrimitive()`` <https://tc39.es/ecma262/#sec-toprimitive>`__ is an
   intermediate step for many coercion algorithms (some of which we’ll see later
   in this chapter). It converts an arbitrary values to primitive values.

   ``ToPrimitive()`` is used often in the spec because most operators can only
   work with primitive values. For example, we can use the addition operator
   (``+``) to add numbers and to concatenate strings, but we can’t use it to
   concatenate Arrays.

   This is what the JavaScript version of ``ToPrimitive()`` looks like:

   .. code::javascript

         /**
          * @param hint Which type is preferred for the result:
          *             string, number, or don’t care?
          */
         function ToPrimitive(input: any,
           hint: 'string'|'number'|'default' = 'default') {
             if (TypeOf(input) === 'object') {
               let exoticToPrim = input[Symbol.toPrimitive]; // (A)
               if (exoticToPrim !== undefined) {
                 let result = exoticToPrim.call(input, hint);
                 if (TypeOf(result) !== 'object') {
                   return result;
                 }
                 throw new TypeError();
               }
               if (hint === 'default') {
                 hint = 'number';
               }
               return OrdinaryToPrimitive(input, hint);
             } else {
               // input is already primitive
               return input;
             }
           }

   ``ToPrimitive()`` lets objects override the conversion to primitive via
   ``Symbol.toPrimitive`` (line A). If an object doesn’t do that, it is passed
   on to ``OrdinaryToPrimitive()``:

   .. code::javascript

         function OrdinaryToPrimitive(O: object, hint: 'string' | 'number') {
           let methodNames;
           if (hint === 'string') {
             methodNames = ['toString', 'valueOf'];
           } else {
             methodNames = ['valueOf', 'toString'];
           }
           for (let name of methodNames) {
             let method = O[name];
             if (IsCallable(method)) {
               let result = method.call(O);
               if (TypeOf(result) !== 'object') {
                 return result;
               }
             }
           }
           throw new TypeError();
         }


.. _which-hints-do-callers-of-toprimitive-use:

2.4.1.1 Which hints do callers of ``ToPrimitive()`` use?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The parameter ``hint`` can have one of three values:

   -  ``'number'`` means: if possible, ``input`` should be converted to a
      number.
   -  ``'string'`` means: if possible, ``input`` should be converted to a
      string.
   -  ``'default'`` means: there is no preference for either numbers or strings.

   These are a few examples of how various operations use ``ToPrimitive()``:

   -  ``hint === 'number'``. The following operations prefer numbers:

      -  ``ToNumeric()``
      -  ``ToNumber()``
      -  ``ToBigInt()``, ``BigInt()``
      -  Abstract Relational Comparison (``<``)

   -  ``hint === 'string'``. The following operations prefer strings:

      -  ``ToString()``
      -  ``ToPropertyKey()``

   -  ``hint === 'default'``. The following operations are neutral w.r.t. the
      type of the returned primitive value:

      -  Abstract Equality Comparison (``==``)
      -  Addition Operator (``+``)
      -  ``new Date(value)`` (``value`` can be either a number or a string)

   As we have seen, the default behavior is for ``'default'`` being handled as
   if it were ``'number'``. Only instances of ``Symbol`` and ``Date`` override
   this behavior (shown later).


.. _which-methods-are-called-to-convert-objects-to-primitives:

2.4.1.2 Which methods are called to convert objects to Primitives?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If the conversion to primitive isn’t overridden via ``Symbol.toPrimitive``,
   ``OrdinaryToPrimitive()`` calls either or both of the following two methods:

   -  ``'toString'`` is called first if ``hint`` indicates that we’d like the
      primitive value to be a string.
   -  ``'valueOf'`` is called first if ``hint`` indicates that we’d like the
      primitive value to be a number.

   The following code demonstrates how that works:

   .. code::javascript

         const obj = {
           toString() { return 'a' },
           valueOf() { return 1 },
         };

         // String() prefers strings:
         assert.equal(String(obj), 'a');

         // Number() prefers numbers:
         assert.equal(Number(obj), 1);

   A method with the property key ``Symbol.toPrimitive`` overrides the normal
   conversion to primitive. That is only done twice in the standard library:

   -  ``Symbol.prototype[Symbol.toPrimitive](hint)``

      -  If the receiver is an instance of ``Symbol``, this method always
         returns the wrapped symbol.
      -  The rationale is that instances of ``Symbol`` have a ``.toString()``
         method that returns strings. But even if ``hint`` is ``'string'``,
         ``.toString()`` should not be called so that we don’t accidentally
         convert instances of ``Symbol`` to strings (which are a completely
         different kind of property key).

   -  ``Date.prototype[Symbol.toPrimitive](hint)``

      -  Explained in more detail next.


.. _date.prototypesymbol.toprimitive:

2.4.1.3 ``Date.prototype[Symbol.toPrimitive]()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This is how Dates handle being converted to primitive values:

   .. code::javascript

         Date.prototype[Symbol.toPrimitive] = function (
           hint: 'default' | 'string' | 'number') {
             let O = this;
             if (TypeOf(O) !== 'object') {
               throw new TypeError();
             }
             let tryFirst;
             if (hint === 'string' || hint === 'default') {
               tryFirst = 'string';
             } else if (hint === 'number') {
               tryFirst = 'number';
             } else {
               throw new TypeError();
             }
             return OrdinaryToPrimitive(O, tryFirst);
           };

   The only difference with the default algorithm is that ``'default'`` becomes
   ``'string'`` (and not ``'number'``). This can be observed if we use
   operations that set ``hint`` to ``'default'``:

   -  `The ``==``
      operator <#abstract-equality-comparison>`__ coerces
      objects to primitives (with a default hint) if the other operand is a
      primitive value other than ``undefined``, ``null``, and ``boolean``. In
      the following interaction, we can see that the result of coercing the date
      is a string:

      .. container:: sourceCode
         :name: cb22

         .. code:: js

            const d = new Date('2222-03-27');
            assert.equal(
              d == 'Wed Mar 27 2222 01:00:00 GMT+0100'
                   + ' (Central European Standard Time)',
              true);

   -  `The ``+`` operator <#addition-operator>`__ coerces
      both operands to primitives (with a default hint). If one of the results
      is a string, it performs string concatenation (otherwise it performs
      numeric addition). In the following interaction, we can see that the
      result of coercing the date is a string because the operator returns a
      string.

      .. container:: sourceCode
         :name: cb23

         .. code:: js

            const d = new Date('2222-03-27');
            assert.equal(
              123 + d,
              '123Wed Mar 27 2222 01:00:00 GMT+0100'
                + ' (Central European Standard Time)');


.. _tostring-and-related-operations:

2.4.2 ``ToString()`` and related operations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This is the JavaScript version of ``ToString()``:

   .. code::javascript

         function ToString(argument) {
           if (argument === undefined) {
             return 'undefined';
           } else if (argument === null) {
             return 'null';
           } else if (argument === true) {
             return 'true';
           } else if (argument === false) {
             return 'false';
           } else if (TypeOf(argument) === 'number') {
             return Number.toString(argument);
           } else if (TypeOf(argument) === 'string') {
             return argument;
           } else if (TypeOf(argument) === 'symbol') {
             throw new TypeError();
           } else if (TypeOf(argument) === 'bigint') {
             return BigInt.toString(argument);
           } else {
             // argument is an object
             let primValue = ToPrimitive(argument, 'string'); // (A)
             return ToString(primValue);
           }
         }

   Note how this function uses ``ToPrimitive()`` as an intermediate step for
   objects, before converting the primitive result to a string (line A).

   ``ToString()`` deviates in an interesting way from how ``String()`` works: If
   ``argument`` is a symbol, the former throws a ``TypeError`` while the latter
   doesn’t. Why is that? The default for symbols is that converting them to
   strings throws exceptions:

   .. code:: repl

         > const sym = Symbol('sym');

         > ''+sym
         TypeError: Cannot convert a Symbol value to a string
         > `${sym}`
         TypeError: Cannot convert a Symbol value to a string

   That default is overridden in ``String()`` and
   ``Symbol.prototype.toString()`` (both are described in the next subsections):

   .. code:: repl

         > String(sym)
         'Symbol(sym)'
         > sym.toString()
         'Symbol(sym)'


.. _string:

2.4.2.1 ``String()``
~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         function String(value) {
           let s;
           if (value === undefined) {
             s = '';
           } else {
             if (new.target === undefined && TypeOf(value) === 'symbol') {
               // This function was function-called and value is a symbol
               return SymbolDescriptiveString(value);
             }
             s = ToString(value);
           }
           if (new.target === undefined) {
             // This function was function-called
             return s;
           }
           // This function was new-called
           return StringCreate(s, new.target.prototype); // simplified!
         }

   ``String()`` works differently, depending on whether it is invoked via a
   function call or via ``new``. It uses
   ```new.target`` <https://exploringjs.com/es6/ch_classes.html#sec_allocating-and-initializing-instances>`__
   to distinguish the two.

   These are the helper functions ``StringCreate()`` and
   ``SymbolDescriptiveString()``:

   .. code::javascript

         /** 
          * Creates a String instance that wraps `value`
          * and has the given protoype.
          */
         function StringCreate(value, prototype) {
           // ···
         }

         function SymbolDescriptiveString(sym) {
           assert.equal(TypeOf(sym), 'symbol');
           let desc = sym.description;
           if (desc === undefined) {
             desc = '';
           }
           assert.equal(TypeOf(desc), 'string');
           return 'Symbol('+desc+')';
         }


.. _symbol.prototype.tostring:

2.4.2.2 ``Symbol.prototype.toString()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In addition to ``String()``, we can also use method ``.toString()`` to
   convert a symbol to a string. Its specification looks as follows.

   .. code::javascript

         Symbol.prototype.toString = function () {
           let sym = thisSymbolValue(this);
           return SymbolDescriptiveString(sym);
         };
         function thisSymbolValue(value) {
           if (TypeOf(value) === 'symbol') {
             return value;
           }
           if (TypeOf(value) === 'object' && '__SymbolData__' in value) {
             let s = value.__SymbolData__;
             assert.equal(TypeOf(s), 'symbol');
             return s;
           }
         }


.. _object.prototype.tostring:

2.4.2.3 ``Object.prototype.toString``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The default specification for ``.toString()`` looks as follows:

   .. code::javascript

         Object.prototype.toString = function () {
           if (this === undefined) {
             return '[object Undefined]';
           }
           if (this === null) {
             return '[object Null]';
           }
           let O = ToObject(this);
           let isArray = Array.isArray(O);
           let builtinTag;
           if (isArray) {
             builtinTag = 'Array';
           } else if ('__ParameterMap__' in O) {
             builtinTag = 'Arguments';
           } else if ('__Call__' in O) {
             builtinTag = 'Function';
           } else if ('__ErrorData__' in O) {
             builtinTag = 'Error';
           } else if ('__BooleanData__' in O) {
             builtinTag = 'Boolean';
           } else if ('__NumberData__' in O) {
             builtinTag = 'Number';
           } else if ('__StringData__' in O) {
             builtinTag = 'String';
           } else if ('__DateValue__' in O) {
             builtinTag = 'Date';
           } else if ('__RegExpMatcher__' in O) {
             builtinTag = 'RegExp';
           } else {
             builtinTag = 'Object';
           }
           let tag = O[Symbol.toStringTag];
           if (TypeOf(tag) !== 'string') {
             tag = builtinTag;
           }
           return '[object ' + tag + ']';
         };

   This operation is used if we convert plain objects to strings:

   .. code:: repl

         > String({})
         '[object Object]'

   By default, it is also used if we convert instances of classes to strings:

   .. code::javascript

         class MyClass {}
         assert.equal(
           String(new MyClass()), '[object Object]');

   Normally, we would override ``.toString()`` in order to configure the string
   representation of ``MyClass``, but we can also change what comes after
   “\ ``object``\ ” inside the string with the square brackets:

   .. code::javascript

         class MyClass {}
         MyClass.prototype[Symbol.toStringTag] = 'Custom!';
         assert.equal(
           String(new MyClass()), '[object Custom!]');

   It is interesting to compare the overriding versions of ``.toString()`` with
   the original version in ``Object.prototype``:

   .. code:: repl

         > ['a', 'b'].toString()
         'a,b'
         > Object.prototype.toString.call(['a', 'b'])
         '[object Array]'

         > /^abc$/.toString()
         '/^abc$/'
         > Object.prototype.toString.call(/^abc$/)
         '[object RegExp]'


.. _topropertykey:

2.4.3 ``ToPropertyKey()``
~~~~~~~~~~~~~~~~~~~~~~~~~

   ``ToPropertyKey()`` is used by, among others, the bracket operator. This is
   how it works:

   .. code::javascript

         function ToPropertyKey(argument) {
           let key = ToPrimitive(argument, 'string'); // (A)
           if (TypeOf(key) === 'symbol') {
             return key;
           }
           return ToString(key);
         }

   Once again, objects are converted to primitives before working with
   primitives.


.. _tonumeric-and-related-operations:

2.4.4 ``ToNumeric()`` and related operations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``ToNumeric()`` is used by, among others, by the multiplication operator
   (``*``). This is how it works:

   .. code::javascript

         function ToNumeric(value) {
           let primValue = ToPrimitive(value, 'number');
           if (TypeOf(primValue) === 'bigint') {
             return primValue;
           }
           return ToNumber(primValue);
         }


.. _tonumber:

2.4.4.1 ``ToNumber()``
~~~~~~~~~~~~~~~~~~~~~~

   ``ToNumber()`` works as follows:

   .. code::javascript

         function ToNumber(argument) {
           if (argument === undefined) {
             return NaN;
           } else if (argument === null) {
             return +0;
           } else if (argument === true) {
             return 1;
           } else if (argument === false) {
             return +0;
           } else if (TypeOf(argument) === 'number') {
             return argument;
           } else if (TypeOf(argument) === 'string') {
             return parseTheString(argument); // not shown here
           } else if (TypeOf(argument) === 'symbol') {
             throw new TypeError();
           } else if (TypeOf(argument) === 'bigint') {
             throw new TypeError();
           } else {
             // argument is an object
             let primValue = ToPrimitive(argument, 'number');
             return ToNumber(primValue);
           }
         }

   The structure of ``ToNumber()`` is similar to the structure of
   ``ToString()``.


.. _operations-that-coerce:

2.5 Operations that coerce
--------------------------


.. _addition-operator:

2.5.1 Addition operator (``+``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This is how JavaScript’s addition operator is specified:

   .. code::javascript

         function Addition(leftHandSide, rightHandSide) {
           let lprim = ToPrimitive(leftHandSide);
           let rprim = ToPrimitive(rightHandSide);
           if (TypeOf(lprim) === 'string' || TypeOf(rprim) === 'string') { // (A)
             return ToString(lprim) + ToString(rprim);
           }
           let lnum = ToNumeric(lprim);
           let rnum = ToNumeric(rprim);
           if (TypeOf(lnum) !== TypeOf(rnum)) {
             throw new TypeError();
           }
           let T = Type(lnum);
           return T.add(lnum, rnum); // (B)
         }

   Steps of this algorithm:

   -  Both operands are converted to primitive values.
   -  If one of the results is a string, both are converted to strings and
      concatenated (line A).
   -  Otherwise, both operands are converted to numeric values and added (line
      B). ``Type()`` returns the ECMAScript specification type of ``lnum``.
      ``.add()`` is a method of `numeric
      types <https://tc39.es/ecma262/#sec-numeric-types>`__.


.. _abstract-equality-comparison:

2.5.2 Abstract Equality Comparison (``==``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         /** Loose equality (==) */
         function abstractEqualityComparison(x, y) {
           if (TypeOf(x) === TypeOf(y)) {
             // Use strict equality (===)
             return strictEqualityComparison(x, y);
           }

           // Comparing null with undefined
           if (x === null && y === undefined) {
             return true;
           }
           if (x === undefined && y === null) {
             return true;
           }

           // Comparing a number and a string
           if (TypeOf(x) === 'number' && TypeOf(y) === 'string') {
             return abstractEqualityComparison(x, Number(y));
           }
           if (TypeOf(x) === 'string' && TypeOf(y) === 'number') {
             return abstractEqualityComparison(Number(x), y);
           }

           // Comparing a bigint and a string
           if (TypeOf(x) === 'bigint' && TypeOf(y) === 'string') {
             let n = StringToBigInt(y);
             if (Number.isNaN(n)) {
               return false;
             }
             return abstractEqualityComparison(x, n);
           }
           if (TypeOf(x) === 'string' && TypeOf(y) === 'bigint') {
             return abstractEqualityComparison(y, x);
           }

           // Comparing a boolean with a non-boolean
           if (TypeOf(x) === 'boolean') {
             return abstractEqualityComparison(Number(x), y);
           }
           if (TypeOf(y) === 'boolean') {
             return abstractEqualityComparison(x, Number(y));
           }

           // Comparing an object with a primitive
           // (other than undefined, null, a boolean)
           if (['string', 'number', 'bigint', 'symbol'].includes(TypeOf(x))
             && TypeOf(y) === 'object') {
               return abstractEqualityComparison(x, ToPrimitive(y));
             }
           if (TypeOf(x) === 'object'
             && ['string', 'number', 'bigint', 'symbol'].includes(TypeOf(y))) {
               return abstractEqualityComparison(ToPrimitive(x), y);
             }
           
           // Comparing a bigint with a number
           if ((TypeOf(x) === 'bigint' && TypeOf(y) === 'number')
             || (TypeOf(x) === 'number' && TypeOf(y) === 'bigint')) {
               if ([NaN, +Infinity, -Infinity].includes(x)
                 || [NaN, +Infinity, -Infinity].includes(y)) {
                   return false;
                 }
               if (isSameMathematicalValue(x, y)) {
                 return true;
               } else {
                 return false;
               }
             }
           
           return false;
         }

   The following operations are not shown here:

   -  ```strictEqualityComparison()`` <https://tc39.es/ecma262/#sec-strict-equality-comparison>`__
   -  ```StringToBigInt()`` <https://tc39.es/ecma262/#sec-stringtobigint>`__
   -  ```isSameMathematicalValue()`` <https://tc39.es/ecma262/#mathematical-value>`__


.. _glossary-terms-related-to-type-conversion:

2.6 Glossary: terms related to type conversion
----------------------------------------------

   Now that we have taken a closer look at how JavaScript’s type coercion works,
   let’s conclude with a brief glossary of terms related to type conversion:

   -  In *type conversion*, we want the output value to have a given type. If
      the input value already has that type, it is simply returned unchanged.
      Otherwise, it is converted to a value that has the desired type.

   -  *Explicit type conversion* means that the programmer uses an operation (a
      function, an operator, etc.) to trigger a type conversion. Explicit
      conversions can be:

      -  *Checked*: If a value can’t be converted, an exception is thrown.
      -  *Unchecked*: If a value can’t be converted, an error value is returned.

   -  What *type casting* is, depends on the programming language. For example,
      in Java, it is explicit checked type conversion.

   -  *Type coercion* is implicit type conversion: An operation automatically
      converts its arguments to the types it needs. Can be checked or unchecked
      or something in-between.

   [Source: `Wikipedia <https://en.wikipedia.org/wiki/Type_conversion>`__]

   `Comments <https://github.com/rauschma/deep-js/issues/2>`__


.. _ch_destructuring-algorithm:


3 The destructuring algorithm
=============================

   --------------

      -  3.1 `Preparing for the pattern matching algorithm <#preparing-for-the-pattern-matching-algorithm>`__

         -  3.1.1 `Using declarative rules for specifying the matching algorithm <#using-declarative-rules-for-specifying-the-matching-algorithm>`__
         -  3.1.2 `Evaluating expressions based on the declarative rules <#evaluating-expressions-based-on-the-declarative-rules>`__

      -  3.2 `The pattern matching algorithm <#the-pattern-matching-algorithm>`__

         -  3.2.1 `Patterns <#patterns>`__
         -  3.2.2 `Rules for variable <#rules-for-variable>`__
         -  3.2.3 `Rules for object patterns <#rules-for-object-patterns>`__
         -  3.2.4 `Rules for Array patterns <#rules-for-array-patterns>`__

      -  3.3 `Empty object patterns and Array patterns <#empty-object-patterns-and-array-patterns>`__
      -  3.4 `Applying the algorithm <#applying-the-algorithm>`__

         -  3.4.1 `Background: passing parameters via matching <#background-passing-parameters-via-matching>`__
         -  3.4.2 `Using move2() <#using-move2>`__
         -  3.4.3 `Using move1() <#using-move1>`__
         -  3.4.4 `Conclusion: Default values are a feature of pattern parts <#conclusion-default-values-are-a-feature-of-pattern-parts>`__

   --------------

   In this chapter, we look at destructuring from a different angle: as a
   recursive pattern matching algorithm.

   The algorithm will give us a better understanding of default values. That
   will be useful at the end, where we’ll try to figure out how the following
   two functions differ:

   .. code::javascript

         function move({x=0, y=0} = {})         { ··· }
         function move({x, y} = { x: 0, y: 0 }) { ··· }


.. _preparing-for-the-pattern-matching-algorithm:

3.1 Preparing for the pattern matching algorithm
------------------------------------------------

   A destructuring assignment looks like this:

   .. code::javascript

         «pattern» = «value»

   We want to use ``pattern`` to extract data from ``value``.

   We will now look at an algorithm for performing this kind of assignment. This
   algorithm is known in functional programming as *pattern matching* (short:
   *matching*). It specifies the operator ``←`` (“match against”) that matches a
   ``pattern`` against a ``value`` and assigns to variables while doing so:

   .. code::javascript

         «pattern» ← «value»

   We will only explore destructuring assignment, but destructuring variable
   declarations and destructuring parameter definitions work similarly. We won’t
   go into advanced features, either: Computed property keys, property value
   shorthands, and object properties and array elements as assignment targets,
   are beyond the scope of this chapter.

   The specification for the match operator consists of declarative rules that
   descend into the structures of both operands. The declarative notation may
   take some getting used to, but it makes the specification more concise.


.. _using-declarative-rules-for-specifying-the-matching-algorithm:

3.1.1 Using declarative rules for specifying the matching algorithm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The declarative rules used in this chapter operate on input and produce the
   result of the algorithm via side effects. This is one such rule (which we’ll
   see again later):

   -  (2c) ``{key: «pattern», «properties»} ← obj``

      .. container:: sourceCode
         :name: cb43

         .. code:: js

            «pattern» ← obj.key
            {«properties»} ← obj

   This rule has the following parts:

   -  (2c) is the *number* of the rule. The number is used to refer to the rule.
   -  The *head* (first line) describes what the input must look like so that
      this rule can be applied.
   -  The *body* (remaining lines) describes what happens if the rule is
      applied.

   In rule (2c), the head means that this rule can be applied if there is an
   object pattern with at least one property (whose key is ``key``) and zero or
   more remaining properties. The effect of this rule is that execution
   continues with the property value pattern being matched against ``obj.key``
   and the remaining properties being matched against ``obj``.

   Let’s consider one more rule from this chapter:

   -  (2e) ``{} ← obj`` (no properties left)

      .. container:: sourceCode
         :name: cb44

         .. code:: js

            // We are finished

   In rule (2e), the head means that this rule is executed if the empty object
   pattern ``{}`` is matched against a value ``obj``. The body means that, in
   this case, we are done.

   Together, rule (2c) and rule (2e) form a declarative loop that iterates over
   the properties of the pattern on the left-hand side of the arrow.


.. _evaluating-expressions-based-on-the-declarative-rules:

3.1.2 Evaluating expressions based on the declarative rules
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The complete algorithm is specified via a sequence of declarative rules.
   Let’s assume we want to evaluate the following matching expression:

   ::

      {first: f, last: l} ← obj

   To apply a sequence of rules, we go over them from top to bottom and execute
   the first applicable rule. If there is a matching expression in the body of
   that rule, the rules are applied again. And so on.

   Sometimes the head includes a condition that also determines if a rule is
   applicable – for example:

   -  | (3a) ``[«elements»] ← non_iterable``
      | ``if (!isIterable(non_iterable))``

      .. container:: sourceCode
         :name: cb46

         .. code:: js

            throw new TypeError();


.. _the-pattern-matching-algorithm:

3.2 The pattern matching algorithm
----------------------------------


.. _patterns:

3.2.1 Patterns
~~~~~~~~~~~~~~

   A pattern is either:

   -  A variable: ``x``
   -  An object pattern: ``{«properties»}``
   -  An Array pattern: ``[«elements»]``

   The next three sections specify rules for handling these three cases in
   matching expressions.


.. _rules-for-variable:

3.2.2 Rules for variable
~~~~~~~~~~~~~~~~~~~~~~~~

   -  

      1. ``x ← value`` (including ``undefined`` and ``null``)

      .. container:: sourceCode
         :name: cb47

         .. code:: js

            x = value


.. _rules-for-object-patterns:

3.2.3 Rules for object patterns
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  (2a) ``{«properties»} ← undefined`` (illegal value)

      .. container:: sourceCode
         :name: cb48

         .. code:: js

            throw new TypeError();

   -  (2b) ``{«properties»} ← null`` (illegal value)

      .. container:: sourceCode
         :name: cb49

         .. code:: js

            throw new TypeError();

   -  (2c) ``{key: «pattern», «properties»} ← obj``

      .. container:: sourceCode
         :name: cb50

         .. code:: js

            «pattern» ← obj.key
            {«properties»} ← obj

   -  (2d) ``{key: «pattern» = default_value, «properties»} ← obj``

      .. container:: sourceCode
         :name: cb51

         .. code:: js

            const tmp = obj.key;
            if (tmp !== undefined) {
              «pattern» ← tmp
            } else {
              «pattern» ← default_value
            }
            {«properties»} ← obj

   -  (2e) ``{} ← obj`` (no properties left)

      .. container:: sourceCode
         :name: cb52

         .. code:: js

            // We are finished

   Rules 2a and 2b deal with illegal values. Rules 2c–2e loop over the
   properties of the pattern. In rule 2d, we can see that a default value
   provides an alternative to match against if there is no matching property in
   ``obj``.


.. _rules-for-array-patterns:

3.2.4 Rules for Array patterns
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   **Array pattern and iterable.** The algorithm for Array destructuring starts
   with an Array pattern and an iterable:

   -  | (3a) ``[«elements»] ← non_iterable`` (illegal value)
      | ``if (!isIterable(non_iterable))``

      .. container:: sourceCode
         :name: cb53

         .. code:: js

            throw new TypeError();

   -  | (3b) ``[«elements»] ← iterable``
      | ``if (isIterable(iterable))``

      .. container:: sourceCode
         :name: cb54

         .. code:: js

            const iterator = iterable[Symbol.iterator]();
            «elements» ← iterator

   Helper function:

   .. code::javascript

         function isIterable(value) {
           return (value !== null
             && typeof value === 'object'
             && typeof value[Symbol.iterator] === 'function');
         }

   **Array elements and iterator.** The algorithm continues with:

   -  The elements of the pattern (left-hand side of the arrow)
   -  The iterator that was obtained from the iterable (right-hand side of the
      arrow)

   These are the rules:

   -  (3c) ``«pattern», «elements» ← iterator``

      .. container:: sourceCode
         :name: cb56

         .. code:: js

            «pattern» ← getNext(iterator) // undefined after last item
            «elements» ← iterator

   -  (3d) ``«pattern» = default_value, «elements» ← iterator``

      .. container:: sourceCode
         :name: cb57

         .. code:: js

            const tmp = getNext(iterator);  // undefined after last item
            if (tmp !== undefined) {
              «pattern» ← tmp
            } else {
              «pattern» ← default_value
            }
            «elements» ← iterator

   -  (3e) ``, «elements» ← iterator`` (hole, elision)

      .. container:: sourceCode
         :name: cb58

         .. code:: js

            getNext(iterator); // skip
            «elements» ← iterator

   -  (3f) ``...«pattern» ← iterator`` (always last part!)

      .. container:: sourceCode
         :name: cb59

         .. code:: js

            const tmp = [];
            for (const elem of iterator) {
              tmp.push(elem);
            }
            «pattern» ← tmp

   -  (3g) ``← iterator`` (no elements left)

      .. container:: sourceCode
         :name: cb60

         .. code:: js

            // We are finished

   Helper function:

   .. code::javascript

         function getNext(iterator) {
           const {done,value} = iterator.next();
           return (done ? undefined : value);
         }

   An iterator being finished is similar to missing properties in objects.


.. _empty-object-patterns-and-array-patterns:

3.3 Empty object patterns and Array patterns
--------------------------------------------

   Interesting consequence of the algorithm’s rules: We can destructure with
   empty object patterns and empty Array patterns.

   Given an empty object pattern ``{}``: If the value to be destructured is
   neither ``undefined`` nor ``null``, then nothing happens. Otherwise, a
   ``TypeError`` is thrown.

   .. code::javascript

         const {} = 123; // OK, neither undefined nor null
         assert.throws(
           () => {
             const {} = null;
           },
           /^TypeError: Cannot destructure 'null' as it is null.$/)

   Given an empty Array pattern ``[]``: If the value to be destructured is
   iterable, then nothing happens. Otherwise, a ``TypeError`` is thrown.

   .. code::javascript

         const [] = 'abc'; // OK, iterable
         assert.throws(
           () => {
             const [] = 123; // not iterable
           },
           /^TypeError: 123 is not iterable$/)

   In other words: Empty destructuring patterns force values to have certain
   characteristics, but have no other effects.


.. _applying-the-algorithm:

3.4 Applying the algorithm
--------------------------

   In JavaScript, named parameters are simulated via objects: The caller uses an
   object literal and the callee uses destructuring. This simulation is
   explained in detail in `“JavaScript for impatient
   programmers” <https://exploringjs.com/impatient-js/ch_callables.html#named-parameters>`__.
   The following code shows an example: function ``move1()`` has two named
   parameters, ``x`` and ``y``:

   .. code::javascript

         function move1({x=0, y=0} = {}) { // (A)
           return [x, y];
         }
         assert.deepEqual(
           move1({x: 3, y: 8}), [3, 8]);
         assert.deepEqual(
           move1({x: 3}), [3, 0]);
         assert.deepEqual(
           move1({}), [0, 0]);
         assert.deepEqual(
           move1(), [0, 0]);

   There are three default values in line A:

   -  The first two default values allow us to omit ``x`` and ``y``.
   -  The third default value allows us to call ``move1()`` without parameters
      (as in the last line).

   But why would we define the parameters as in the previous code snippet? Why
   not as follows?

   .. code::javascript

         function move2({x, y} = { x: 0, y: 0 }) {
           return [x, y];
         }

   To see why ``move1()`` is correct, we are going to use both functions in two
   examples. Before we do that, let’s see how the passing of parameters can be
   explained via matching.


.. _background-passing-parameters-via-matching:

3.4.1 Background: passing parameters via matching
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For function calls, *formal parameters* (inside function definitions) are
   matched against *actual parameters* (inside function calls). As an example,
   take the following function definition and the following function call.

   .. code::javascript

         function func(a=0, b=0) { ··· }
         func(1, 2);

   The parameters ``a`` and ``b`` are set up similarly to the following
   destructuring.

   .. code::javascript

         [a=0, b=0] ← [1, 2]


.. _using-move2:

3.4.2 Using ``move2()``
~~~~~~~~~~~~~~~~~~~~~~~

   Let’s examine how destructuring works for ``move2()``.

   **Example 1.** The function call ``move2()`` leads to this destructuring:

   .. code::javascript

         [{x, y} = { x: 0, y: 0 }] ← []

   The single Array element on the left-hand side does not have a match on the
   right-hand side, which is why ``{x,y}`` is matched against the default value
   and not against data from the right-hand side (rules 3b, 3d):

   .. code::javascript

         {x, y} ← { x: 0, y: 0 }

   The left-hand side contains *property value shorthands*. It is an
   abbreviation for:

   .. code::javascript

         {x: x, y: y} ← { x: 0, y: 0 }

   This destructuring leads to the following two assignments (rules 2c, 1):

   .. code::javascript

         x = 0;
         y = 0;

   This is what we wanted. However, in the next example, we are not as lucky.

   **Example 2.** Let’s examine the function call ``move2({z: 3})`` which leads
   to the following destructuring:

   .. code::javascript

         [{x, y} = { x: 0, y: 0 }] ← [{z: 3}]

   There is an Array element at index 0 on the right-hand side. Therefore, the
   default value is ignored and the next step is (rule 3d):

   .. code::javascript

         {x, y} ← { z: 3 }

   That leads to both ``x`` and ``y`` being set to ``undefined``, which is not
   what we want. The problem is that ``{x,y}`` is not matched against the
   default value, anymore, but against ``{z:3}``.


.. _using-move1:

3.4.3 Using ``move1()``
~~~~~~~~~~~~~~~~~~~~~~~

   Let’s try ``move1()``.

   **Example 1:** ``move1()``

   .. code::javascript

         [{x=0, y=0} = {}] ← []

   We don’t have an Array element at index 0 on the right-hand side and use the
   default value (rule 3d):

   .. code::javascript

         {x=0, y=0} ← {}

   The left-hand side contains property value shorthands, which means that this
   destructuring is equivalent to:

   .. code::javascript

         {x: x=0, y: y=0} ← {}

   Neither property ``x`` nor property ``y`` have a match on the right-hand
   side. Therefore, the default values are used and the following destructurings
   are performed next (rule 2d):

   .. code::javascript

         x ← 0
         y ← 0

   That leads to the following assignments (rule 1):

   .. code::javascript

         x = 0
         y = 0

   Here, we get what we want. Let’s see if our luck holds with the next example.

   **Example 2:** ``move1({z: 3})``

   .. code::javascript

         [{x=0, y=0} = {}] ← [{z: 3}]

   The first element of the Array pattern has a match on the right-hand side and
   that match is used to continue destructuring (rule 3d):

   .. code::javascript

         {x=0, y=0} ← {z: 3}

   Like in example 1, there are no properties ``x`` and ``y`` on the right-hand
   side and the default values are used:

   .. code::javascript

         x = 0
         y = 0

   It works as desired! This time, the pattern with ``x`` and ``y`` being
   matched against ``{z:3}`` is not a problem, because they have their own local
   default values.


.. _conclusion-default-values-are-a-feature-of-pattern-parts:

3.4.4 Conclusion: Default values are a feature of pattern parts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The examples demonstrate that default values are a feature of pattern parts
   (object properties or Array elements). If a part has no match or is matched
   against ``undefined`` then the default value is used. That is, the pattern is
   matched against the default value, instead.

   `Comments <https://github.com/rauschma/deep-js/issues/3>`__


.. _ch_environments:


4 Environments: under the hood of variables
===========================================

   --------------

      -  4.1 `Environment: data structure for managing variables <#environment-data-structure-for-managing-variables>`__
      -  4.2 `Recursion via environments <#recursion-via-environments>`__

         -  4.2.1 `Executing the code <#executing-the-code>`__

      -  4.3 `Nested scopes via environments <#nested-scopes-via-environments>`__

         -  4.3.1 `Executing the code <#executing-the-code-1>`__

      -  4.4 `Closures and environments <#closures-environments>`__

   --------------

   In this chapter, we take a closer look at how the ECMAScript language
   specification handles variables.


.. _environment-data-structure-for-managing-variables:

4.1 Environment: data structure for managing variables
------------------------------------------------------

   An environment is the data structure that the ECMAScript specification uses
   to manage variables. It is a dictionary whose keys are variable names and
   whose values are the values of those variables. Each scope has its associated
   environment. Environments must be able to support the following phenomena
   related to variables:

   -  Recursion
   -  Nested scopes
   -  Closures

   We’ll use examples to illustrate how that is done for each phenomenon.


.. _recursion-via-environments:

4.2 Recursion via environments
------------------------------

   We’ll tackle recursion first. Consider the following code:

   .. code::javascript

         function f(x) {
           return x * 2;
         }
         function g(y) {
           const tmp = y + 1;
           return f(tmp);
         }
         assert.equal(g(3), 8);

   For each function call, you need fresh storage space for the variables
   (parameters and local variables) of the called function. This is managed via
   a stack of so-called *execution contexts*, which are references to
   environments (for the purpose of this chapter). Environments themselves are
   stored on the heap. That is necessary because they occasionally live on after
   execution has left their scopes (we’ll see that when exploring *closures*).
   Therefore, they themselves can’t be managed via a stack.


.. _executing-the-code:

4.2.1 Executing the code
~~~~~~~~~~~~~~~~~~~~~~~~

   While executing the code, we make the following pauses:

   .. code::javascript

         function f(x) {
           // Pause 3
           return x * 2;
         }
         function g(y) {
           const tmp = y + 1;
           // Pause 2
           return f(tmp);
         }
         // Pause 1
         assert.equal(g(3), 8);

   This is what happens:

   -  Pause 1 – before calling ``g()`` (fig. `1 <#fig:env_recursion_1>`__).

   -  Pause 2 – while executing ``g()`` (fig. `2 <#fig:env_recursion_2>`__).

   -  Pause 3 – while executing ``f()`` (fig. `3 <#fig:env_recursion_3>`__).

   -  Remaining steps: Every time there is a ``return``, one execution context
      is removed from the stack.

   .. figure:: https://exploringjs.com/deep-js/img-book/2b95071da8e32b930245629814cc451e50073b6f.svg
      :name: fig:env_recursion_1
      :width: 329px
      :height: 83px

      Figure 1: Recursion, pause 1 – before calling ``g()``: The execution
      context stack has one entry, which points to the top-level environment. In
      that environment, there are two entries; one for ``f()`` and one for
      ``g()``.

   .. figure:: https://exploringjs.com/deep-js/img-book/0bacb0e71d1ea2689bc9b38f1a68c402502679e3.svg
      :name: fig:env_recursion_2
      :width: 329px
      :height: 152px

      Figure 2: Recursion, pause 2 – while executing ``g()``: The top of the
      execution context stack points to the environment that was created for
      ``g()``. That environment contains entries for the argument ``y`` and for
      the local variable ``tmp``.

   .. figure:: https://exploringjs.com/deep-js/img-book/af7cc820b469e4260e0be5a22d068e3499d4b400.svg
      :name: fig:env_recursion_3
      :width: 329px
      :height: 199px

      Figure 3: Recursion, pause 3 – while executing ``f()``: The top execution
      context now points to the environment for ``f()``.


.. _nested-scopes-via-environments:

4.3 Nested scopes via environments
----------------------------------

   We use the following code to explore how nested scopes are implemented via
   environments.

   .. code::javascript

         function f(x) {
           function square() {
             const result = x * x;
             return result;
           }
           return square();
         }
         assert.equal(f(6), 36);

   Here, we have three nested scopes: The top-level scope, the scope of ``f()``,
   and the scope of ``square()``. Observations:

   -  The scopes are connected. An inner scope “inherits” all the variables of
      an outer scope (minus the ones it shadows).
   -  Nesting scopes as a mechanism is independent of recursion. The latter is
      best managed by a stack of independent environments. The former is a
      relationship that each environment has with the environment “in which” it
      is created.

   Therefore, the environment of each scope points to the environment of the
   surrounding scope via a field called ``outer``. When we are looking up the
   value of a variable, we first search for its name in the current environment,
   then in the outer environment, then in the outer environment’s outer
   environment, etc. The whole chain of outer environments contains all
   variables that can currently be accessed (minus shadowed variables).

   When you make a function call, you create a new environment. The outer
   environment of that environment is the environment in which the function was
   created. To help set up the field ``outer`` of environments created via
   function calls, each function has an internal property named ``[[Scope]]``
   that points to its “birth environment”.


.. _executing-the-code-1:

4.3.1 Executing the code
~~~~~~~~~~~~~~~~~~~~~~~~

   These are the pauses we are making while executing the code:

   .. code::javascript

         function f(x) {
           function square() {
             const result = x * x;
             // Pause 3
             return result;
           }
           // Pause 2
           return square();
         }
         // Pause 1
         assert.equal(f(6), 36);

   This is what happens:

   -  Pause 1 – before calling ``f()`` (fig. `4 <#fig:env_nested_1>`__).
   -  Pause 2 – while executing ``f()`` (fig. `5 <#fig:env_nested_2>`__).
   -  Pause 3 – while executing ``square()`` (fig. `6 <#fig:env_nested_3>`__).
   -  After that, ``return`` statements pop execution entries off the stack.

   .. figure:: https://exploringjs.com/deep-js/img-book/e12d144c2fc060853e7322470da3a6ba8e471bfe.svg
      :name: fig:env_nested_1
      :width: 406px
      :height: 50px

      Figure 4: Nested scopes, pause 1 – before calling ``f()``: The top-level
      environment has a single entry, for ``f()``. The birth environment of
      ``f()`` is the top-level environment. Therefore, ``f``\ ’s ``[[Scope]]``
      points to it.

   .. figure:: https://exploringjs.com/deep-js/img-book/657fdcb718885f17e67783e11afc0016b1083b9c.svg
      :name: fig:env_nested_2
      :width: 408px
      :height: 118px

      Figure 5: Nested scopes, pause 2 – while executing ``f()``: There is now
      an environment for the function call ``f(6)``. The outer environment of
      that environment is the birth environment of ``f()`` (the top-level
      environment at index 0). We can see that the field ``outer`` was set to
      the value of ``f``\ ’s ``[[Scope]]``. Furthermore, the ``[[Scope]]`` of
      the new function ``square()`` is the environment that was just created.

   .. figure:: https://exploringjs.com/deep-js/img-book/d595f9cbc7bb0b755addcfc707cf48ff2b55162a.svg
      :name: fig:env_nested_3
      :width: 408px
      :height: 171px

      Figure 6: Nested scopes, pause 3 – while executing ``square()``: The
      previous pattern was repeated: the ``outer`` of the most recent
      environment was set up via the ``[[Scope]]`` of the function that we just
      called. The chain of scopes created via ``outer``, contains all variables
      that are active right now. For example, we can access ``result``,
      ``square``, and ``f`` if we want to. Environments reflect two aspects of
      variables. First, the chain of outer environments reflects the nested
      static scopes. Second, the stack of execution contexts reflects what
      function calls were made, dynamically.


.. _closures-environments:

4.4 Closures and environments
-----------------------------

   To see how environments are used to implement
   `closures <https://exploringjs.com/impatient-js/ch_variables-assignment.html#closures>`__,
   we are using the following example:

   .. code::javascript

         function add(x) {
           return (y) => { // (A)
             return x + y;
           };
         }
         assert.equal(add(3)(1), 4); // (B)

   What is going on here? ``add()`` is a function that returns a function. When
   we make the nested function call ``add(3)(1)`` in line B, the first parameter
   is for ``add()``, the second parameter is for the function it returns. This
   works because the function created in line A does not lose the connection to
   its birth scope when it leaves that scope. The associated environment is kept
   alive by that connection and the function still has access to variable ``x``
   in that environment (``x`` is free inside the function).

   This nested way of calling ``add()`` has an advantage: if you only make the
   first function call, you get a version of ``add()`` whose parameter ``x`` is
   already filled in:

   .. code::javascript

         const plus2 = add(2);
         assert.equal(plus2(5), 7);

   Converting a function with two parameters into two nested functions with one
   parameter each, is called *currying*. ``add()`` is a curried function.

   Only filling in some of the parameters of a function is called *partial
   application* (the function has not been fully applied yet). `Method
   ``.bind()`` of
   functions <https://exploringjs.com/impatient-js/ch_single-objects.html#function-prototype-bind>`__
   performs partial application. In the previous example, we can see that
   partial application is simple if a function is curried.


.. _executing-the-code-2:

4.4.0.1 Executing the code
~~~~~~~~~~~~~~~~~~~~~~~~~~

   As we are executing the following code, we are making three pauses:

   .. code::javascript

         function add(x) {
           return (y) => {
             // Pause 3: plus2(5)
             return x + y;
           }; // Pause 1: add(2)
         }
         const plus2 = add(2);
         // Pause 2
         assert.equal(plus2(5), 7);

   This is what happens:

   -  Pause 1 – during the execution of ``add(2)``
      (fig. `7 <#fig:env_closure_2>`__).
   -  Pause 2 – after the execution of ``add(2)``
      (fig. `8 <#fig:env_closure_3>`__).
   -  Pause 3 – while executing ``plus2(5)`` (fig. `9 <#fig:env_closure_4>`__).

   .. figure:: https://exploringjs.com/deep-js/img-book/03f87f43da9fae732c84c5b5b44f8c8ebb2eda55.svg
      :name: fig:env_closure_2
      :width: 406px
      :height: 113px

      Figure 7: Closures, pause 1 – during the execution of ``add(2)``: We can
      see that the function returned by ``add()`` already exists (see bottom
      right corner) and that it points to its birth environment via its internal
      property ``[[Scope]]``. Note that ``plus2`` is still in its temporal dead
      zone and uninitialized.

   .. figure:: https://exploringjs.com/deep-js/img-book/526cc0ec7124079baf5abc621d5e7a48ba3abadd.svg
      :name: fig:env_closure_3
      :width: 406px
      :height: 114px

      Figure 8: Closures, pause 2 – after the execution of ``add(2)``: ``plus2``
      now points to the function returned by ``add(2)``. That function keeps its
      birth environment (the environment of ``add(2)``) alive via its
      ``[[Scope]]``.

   .. figure:: https://exploringjs.com/deep-js/img-book/7988da7d93136b58790420c7b353c4f2b252a7f7.svg
      :name: fig:env_closure_4
      :width: 406px
      :height: 142px

      Figure 9: Closures, pause 3 – while executing ``plus2(5)``: The
      ``[[Scope]]`` of ``plus2`` is used to set up the ``outer`` of the new
      environment. That’s how the current function gets access to ``x``.


.. _ch_global-scope:


5 A detailed look at global variables
=====================================

   --------------

      -  5.1 `Scopes <#scopes>`__
      -  5.2 `Lexical environments <#lexical-environments>`__
      -  5.3 `The global object <#the-global-object>`__
      -  5.4 `In browsers, globalThis does not point directly to the global object <#window-proxy>`__
      -  5.5 `The global environment <#the-global-environment>`__

         -  5.5.1 `Script scope and module scopes <#script-scope-and-module-scopes>`__
         -  5.5.2 `Creating variables: declarative record vs. object record <#creating-variables-declarative-record-vs.-object-record>`__
         -  5.5.3 `Getting or setting variables <#getting-or-setting-variables>`__
         -  5.5.4 `Global ECMAScript variables and global host variables <#global-ecmascript-variables-and-global-host-variables>`__

      -  5.6 `Conclusion: Why does JavaScript have both normal global variables and the global object? <#conclusion-why-does-javascript-have-both-normal-global-variables-and-the-global-object>`__
      -  5.7 `Further reading and sources of this chapter <#further-reading-and-sources-of-this-chapter>`__

   --------------

   In this chapter, we take a detailed look at how JavaScript’s global variables
   work. Several interesting phenomena play a role: the scope of scripts, the
   so-called *global object*, and more.


.. _scopes:

5.1 Scopes
----------

   The *lexical scope* (short: *scope*) of a variable is the region of a program
   where it can be accessed. JavaScript’s scopes are *static* (they don’t change
   at runtime) and they can be nested – for example:

   .. code::javascript

         function func() { // (A)
           const aVariable = 1;
           if (true) { // (B)
             const anotherVariable = 2;
           }
         }

   The scope introduced by the ``if`` statement (line B) is nested inside the
   scope of function ``func()`` (line A).

   The innermost surrounding scope of a scope S is called the *outer scope* of
   S. In the example, ``func`` is the outer scope of ``if``.


.. _lexical-environments:

5.2 Lexical environments
------------------------

   In the JavaScript language specification, scopes are “implemented” via
   *lexical environments*. They consist of two components:

   -  An *environment record* that maps variable names to variable values (think
      dictionary). This is the actual storage space for the variables of the
      scope. The name-value entries in the record are called *bindings*.

   -  A reference to the *outer environment* – the environment for the outer
      scope.

   The tree of nested scopes is therefore represented by a tree of environments
   linked by outer environment references.


.. _the-global-object:

5.3 The global object
---------------------

   The global object is an object whose properties become global variables.
   (We’ll examine soon how exactly it fits into the tree of environments.) It
   can be accessed via the following global variables:

   -  Available on all platforms:
      ```globalThis`` <https://exploringjs.com/impatient-js/ch_variables-assignment.html#globalThis>`__.
      The name is based on the fact that it has the same value as ``this`` in
      global scope.
   -  Other variables for the global object are not available on all platforms:

      -  ``window`` is the classic way of referring to the global object. It
         works in normal browser code, but not in *Web Workers* (processes
         running concurrently to the normal browser process) and not on Node.js.
      -  ``self`` is available everywhere in browsers (including in Web
         Workers). But it isn’t supported by Node.js.
      -  ``global`` is only available on Node.js.


.. _window-proxy:

5.4 In browsers, ``globalThis`` does not point directly to the global object
----------------------------------------------------------------------------

   In browsers, ``globalThis`` does not point directly to the global, there is
   an indirection. As an example, consider an iframe on a web page:

   -  Whenever the ``src`` of the iframe changes, it gets a new global object.
   -  However, ``globalThis`` always has the same value. That value can be
      checked from outside the iframe, as demonstrated below (inspired by `an
      example in the ``globalThis``
      proposal <https://github.com/tc39/proposal-global#html-and-the-windowproxy>`__).

   File ``parent.html``:

   .. code:: html

         <iframe src="iframe.html?first"></iframe>
         <script>
           const iframe = document.querySelector('iframe');
           const icw = iframe.contentWindow; // `globalThis` of iframe

           iframe.onload = () => {
             // Access properties of global object of iframe
             const firstGlobalThis = icw.globalThis;
             const firstArray = icw.Array;
             console.log(icw.iframeName); // 'first'

             iframe.onload = () => {
               const secondGlobalThis = icw.globalThis;
               const secondArray = icw.Array;

               // The global object is different
               console.log(icw.iframeName); // 'second'
               console.log(secondArray === firstArray); // false

               // But globalThis is still the same
               console.log(firstGlobalThis === secondGlobalThis); // true
             };
             iframe.src = 'iframe.html?second';
           };
         </script>

   File ``iframe.html``:

   .. code:: html

         <script>
           globalThis.iframeName = location.search.slice(1);
         </script>

   How do browsers ensure that ``globalThis`` doesn’t change in this scenario?
   They internally distinguish two objects:

   -  ```Window`` <https://html.spec.whatwg.org/multipage/window-object.html#the-window-object>`__
      is the global object. It changes whenever the location changes.
   -  ```WindowProxy`` <https://html.spec.whatwg.org/multipage/window-object.html#the-windowproxy-exotic-object>`__
      is an object that forwards all accesses to the current ``Window``. This
      object never changes.

   In browsers, ``globalThis`` refers to the ``WindowProxy``; everywhere else,
   it directly refers to the global object.


.. _the-global-environment:

5.5 The global environment
--------------------------

   The global scope is the “outermost” scope – it has no outer scope. Its
   environment is the *global environment*. Every environment is connected with
   the global environment via a chain of environments that are linked by outer
   environment references. The outer environment reference of the global
   environment is ``null``.

   The global environment record uses two environment records to manage its
   variables:

   -  An *object environment record* has the same interface as a normal
      environment record, but keeps its bindings in a JavaScript object. In this
      case, the object is the global object.

   -  A normal (*declarative*) environment record that has its own storage for
      its bindings.

   Which of these two records is used when will be explained soon.


.. _script-scope-and-module-scopes:

5.5.1 Script scope and module scopes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In JavaScript, we are only in global scope at the top levels of scripts. In
   contrast, each module has its own scope that is a subscope of the script
   scope.

   If we ignore the relatively complicated rules for how variable bindings are
   added to the global environment, then global scope and module scopes work as
   if they were nested code blocks:

   .. code::javascript

         { // Global scope (scope of *all* scripts)

           // (Global variables)

           { // Scope of module 1
             ···
           }
           { // Scope of module 2
             ···
           }
           // (More module scopes)
         }


.. _creating-variables-declarative-record-vs.-object-record:

5.5.2 Creating variables: declarative record vs. object record
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In order to create a variable that is truly global, we must be in global
   scope – which is only the case at the top level of scripts:

   -  Top-level ``const``, ``let``, and ``class`` create bindings in the
      declarative environment record.
   -  Top-level ``var`` and function declarations create bindings in the object
      environment record.

   .. code:: html

         <script>
           const one = 1;
           var two = 2;
         </script>
         <script>
           // All scripts share the same top-level scope:
           console.log(one); // 1
           console.log(two); // 2
           
           // Not all declarations create properties of the global object:
           console.log(globalThis.one); // undefined
           console.log(globalThis.two); // 2
         </script>


.. _getting-or-setting-variables:

5.5.3 Getting or setting variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   When we get or set a variable and both environment records have a binding for
   that variable, then the declarative record wins:

   .. code:: html

         <script>
           let myGlobalVariable = 1; // declarative environment record
           globalThis.myGlobalVariable = 2; // object environment record

           console.log(myGlobalVariable); // 1 (declarative record wins)
           console.log(globalThis.myGlobalVariable); // 2
         </script>


.. _global-ecmascript-variables-and-global-host-variables:

5.5.4 Global ECMAScript variables and global host variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In addition to variables created via ``var`` and function declarations, the
   global object contains the following properties:

   -  All built-in global variables of ECMAScript
   -  All built-in global variables of the host platform (browser, Node.js,
      etc.)

   Using ``const`` or ``let`` guarantees that global variable declarations
   aren’t influencing (or influenced by) the built-in global variables of
   ECMAScript and host platform.

   For example, browsers have `the global variable
   ``.location`` <https://developer.mozilla.org/en-US/docs/Web/API/Window/location>`__:

   .. code::javascript

         // Changes the location of the current document:
         var location = 'https://example.com';

         // Shadows window.location, doesn’t change it:
         let location = 'https://example.com';

   If a variable already exists (such as ``location`` in this case), then a
   ``var`` declaration with an initializer behaves like an assignment. That’s
   why we get into trouble in this example.

   Note that this is only an issue in global scope. In modules, we are never in
   global scope (unless we use ``eval()`` or similar).

   Fig. `10 <#fig:global-scope>`__ summarizes everything we have learned in this
   section.

   .. figure:: https://exploringjs.com/deep-js/img-book/bfe31ce878a267ad2accd456fc5cc38f8172d6eb.svg
      :name: fig:global-scope
      :width: 477px
      :height: 270px

      Figure 10: The environment for the global scope manages its bindings via a
      *global environment record* which in turn is based on two environment
      records: an *object environment record* whose bindings are stored in the
      global object and a *declarative environment record* that uses internal
      storage for its bindings. Therefore, global variables can be created by
      adding properties to the global object or via various declarations. The
      global object is initialized with the built-in global variables of
      ECMAScript and the host platform. Each ECMAScript module has its own
      environment whose outer environment is the global environment.


.. _conclusion-why-does-javascript-have-both-normal-global-variables-and-the-global-object:

5.6 Conclusion: Why does JavaScript have both normal global variables and the global object?
--------------------------------------------------------------------------------------------

   The global object is generally considered to be a mistake. For that reason,
   newer constructs such as ``const``, ``let``, and classes create normal global
   variables (when in script scope).

   Thankfully, most of the code written in modern JavaScript, lives in
   `ECMAScript modules and CommonJS
   modules <https://exploringjs.com/impatient-js/ch_modules.html>`__. Each
   module has its own scope, which is why the rules governing global variables
   rarely matter for module-based code.


.. _further-reading-and-sources-of-this-chapter:

5.7 Further reading and sources of this chapter
-----------------------------------------------

   Environments and the global object in the ECMAScript specification:

   -  `Section “Lexical
      Environments” <https://tc39.es/ecma262/#sec-lexical-environments>`__
      provides a general overview over environments.
   -  `Section “Global Environment
      Records” <https://tc39.es/ecma262/#sec-global-environment-records>`__
      covers the global environment.
   -  `Section “ECMAScript Standard Built-in
      Objects” <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>`__
      describes how ECMAScript manages its built-in objects (which include the
      global object).

   ``globalThis``:

   -  2ality post `“ES feature:
      ``globalThis``\ ” <https://2ality.com/2019/08/global-this.html>`__
   -  Various ways of accessing the global ``this`` value: `“A horrifying
      ``globalThis`` polyfill in universal
      JavaScript” <https://mathiasbynens.be/notes/globalthis>`__ by Mathias
      Bynens

   The global object in browsers:

   -  Background on what happens in browsers: `“Defining the WindowProxy,
      Window, and Location
      objects” <https://blog.whatwg.org/windowproxy-window-and-location>`__ by
      Anne van Kesteren
   -  Very technical: `section “Realms, settings objects, and global
      objects” <https://html.spec.whatwg.org/multipage/webappapis.html#realms-settings-objects-global-objects>`__
      in the WHATWG HTML standard
   -  In the ECMAScript specification, we can see how web browsers customize
      global ``this``: `section
      “InitializeHostDefinedRealm()” <https://tc39.es/ecma262/#sec-initializehostdefinedrealm>`__

   `Comments <https://github.com/rauschma/deep-js/issues/4>`__


.. _pt_data:


PART III Working with data
==========================


.. _ch_copying-objects-and-arrays:


6 Copying objects and Arrays
============================

   --------------

      -  6.1 `Shallow copying vs. deep copying <#shallow-copying-vs.-deep-copying>`__
      -  6.2 `Shallow copying in JavaScript <#shallow-copying-in-javascript>`__

         -  6.2.1 `Copying plain objects and Arrays via spreading <#copying-plain-objects-and-arrays-via-spreading>`__
         -  6.2.2 `Shallow copying via Object.assign() (optional) <#shallow-copying-via-object.assign-optional>`__
         -  6.2.3 `Shallow copying via Object.getOwnPropertyDescriptors() and Object.defineProperties() (optional) <#copying-via-property-descriptors>`__

      -  6.3 `Deep copying in JavaScript <#deep-copying-in-javascript>`__

         -  6.3.1 `Manual deep copying via nested spreading <#manual-deep-copying-via-nested-spreading>`__
         -  6.3.2 `Hack: generic deep copying via JSON <#hack-generic-deep-copying-via-json>`__
         -  6.3.3 `Implementing generic deep copying <#implementing-generic-deep-copying>`__

      -  6.4 `Further reading <#further-reading>`__

   --------------

   In this chapter, we will learn how to copy objects and Arrays in JavaScript.


.. _shallow-copying-vs.-deep-copying:

6.1 Shallow copying vs. deep copying
------------------------------------

   There are two “depths” with which data can be copied:

   -  *Shallow copying* only copies the top-level entries of objects and Arrays.
      The entry values are still the same in original and copy.
   -  *Deep copying* also copies the entries of the values of the entries, etc.
      That is, it traverses the complete tree whose root is the value to be
      copied and makes copies of all nodes.

   The next sections cover both kinds of copying. Unfortunately, JavaScript only
   has built-in support for shallow copying. If we need deep copying, we need to
   implement it ourselves.


.. _shallow-copying-in-javascript:

6.2 Shallow copying in JavaScript
---------------------------------

   Let’s look at several ways of shallowly copying data.


.. _copying-plain-objects-and-arrays-via-spreading:

6.2.1 Copying plain objects and Arrays via spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   We can spread `into object
   literals <https://exploringjs.com/impatient-js/ch_single-objects.html#spreading-into-object-literals>`__
   and `into Array
   literals <https://exploringjs.com/impatient-js/ch_arrays.html#spreading-into-array-literals>`__
   to make copies:

   .. code::javascript

         const copyOfObject = {...originalObject};
         const copyOfArray = [...originalArray];

   Alas, spreading has several issues. Those will be covered in the next
   subsections. Among those, some are real limitations, others mere
   pecularities.


.. _the-prototype-is-not-copied-by-object-spreading:

6.2.1.1 The prototype is not copied by object spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For example:

   .. code::javascript

         class MyClass {}

         const original = new MyClass();
         assert.equal(original instanceof MyClass, true);

         const copy = {...original};
         assert.equal(copy instanceof MyClass, false);

   Note that the following two expressions are equivalent:

   .. code::javascript

         obj instanceof SomeClass
         SomeClass.prototype.isPrototypeOf(obj)

   Therefore, we can fix this by giving the copy the same prototype as the
   original:

   .. code::javascript

         class MyClass {}

         const original = new MyClass();

         const copy = {
           __proto__: Object.getPrototypeOf(original),
           ...original,
         };
         assert.equal(copy instanceof MyClass, true);

   Alternatively, we can set the prototype of the copy after its creation, via
   ``Object.setPrototypeOf()``.


.. _many-built-in-objects-have-special-internal-slots-that-arent-copied-by-object-spreading:

6.2.1.2 Many built-in objects have special “internal slots” that aren’t copied by object spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Examples of such built-in objects include regular expressions and dates. If
   we make a copy of them, we lose most of the data stored in them.


.. _only-own-non-inherited-properties-are-copied-by-object-spreading:

6.2.1.3 Only own (non-inherited) properties are copied by object spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Given how `prototype
   chains <https://exploringjs.com/impatient-js/ch_proto-chains-classes.html#prototype-chains>`__
   work, this is usually the right approach. But we still need to be aware of
   it. In the following example, the inherited property ``.inheritedProp`` of
   ``original`` is not available in ``copy`` because we only copy own properties
   and don’t keep the prototype.

   .. code::javascript

         const proto = { inheritedProp: 'a' };
         const original = {__proto__: proto, ownProp: 'b' };
         assert.equal(original.inheritedProp, 'a');
         assert.equal(original.ownProp, 'b');

         const copy = {...original};
         assert.equal(copy.inheritedProp, undefined);
         assert.equal(copy.ownProp, 'b');


.. _only-enumerable-properties-are-copied-by-object-spreading:

6.2.1.4 Only enumerable properties are copied by object spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For example, the own property ``.length`` of Array instances is not
   enumerable and not copied. In the following example, we are copying the Array
   ``arr`` via object spreading (line A):

   .. code::javascript

         const arr = ['a', 'b'];
         assert.equal(arr.length, 2);
         assert.equal({}.hasOwnProperty.call(arr, 'length'), true);

         const copy = {...arr}; // (A)
         assert.equal({}.hasOwnProperty.call(copy, 'length'), false);

   This is also rarely a limitation because most properties are enumerable. If
   we need to copy non-enumerable properties, we can use
   ``Object.getOwnPropertyDescriptors()`` and ``Object.defineProperties()`` to
   copy objects (`how to do that is explained
   later <#copying-via-property-descriptors>`__):

   -  They consider all attributes (not just ``value``) and therefore correctly
      copy getters, setters, read-only properties, etc.
   -  ``Object.getOwnPropertyDescriptors()`` retrieves both enumerable and
      non-enumerable properties.

   For more information on enumerability, see `§12 “Enumerability of
   properties” <ch_enumerability.html>`__.


.. _property-attributes-arent-always-copied-faithfully-by-object-spreading:

6.2.1.5 Property attributes aren’t always copied faithfully by object spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Independently of `the attributes of a
   property <ch_property-attributes-intro.html>`__, its copy will always be a
   data property that is writable and configurable.

   For example, here we create the property ``original.prop`` whose attributes
   ``writable`` and ``configurable`` are ``false``:

   .. code::javascript

         const original = Object.defineProperties(
           {}, {
             prop: {
               value: 1,
               writable: false,
               configurable: false,
               enumerable: true,
             },
           });
         assert.deepEqual(original, {prop: 1});

   If we copy ``.prop``, then ``writable`` and ``configurable`` are both
   ``true``:

   .. code::javascript

         const copy = {...original};
         // Attributes `writable` and `configurable` of copy are different:
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(copy),
           {
             prop: {
               value: 1,
               writable: true,
               configurable: true,
               enumerable: true,
             },
           });

   As a consequence, getters and setters are not copied faithfully, either:

   .. code::javascript

         const original = {
           get myGetter() { return 123 },
           set mySetter(x) {},
         };
         assert.deepEqual({...original}, {
           myGetter: 123, // not a getter anymore!
           mySetter: undefined,
         });

   The aforementioned ``Object.getOwnPropertyDescriptors()`` and
   ``Object.defineProperties()`` always transfer own properties with all
   attributes intact (`as shown
   later <#copying-via-property-descriptors>`__).


.. _copying-is-shallow:

6.2.1.6 Copying is shallow
~~~~~~~~~~~~~~~~~~~~~~~~~~

   The copy has fresh versions of each key-value entry in the original, but the
   values of the original are not copied themselves. For example:

   .. code::javascript

         const original = {name: 'Jane', work: {employer: 'Acme'}};
         const copy = {...original};

         // Property .name is a copy: changing the copy
         // does not affect the original
         copy.name = 'John';
         assert.deepEqual(original,
           {name: 'Jane', work: {employer: 'Acme'}});
         assert.deepEqual(copy,
           {name: 'John', work: {employer: 'Acme'}});

         // The value of .work is shared: changing the copy
         // affects the original
         copy.work.employer = 'Spectre';
         assert.deepEqual(
           original, {name: 'Jane', work: {employer: 'Spectre'}});
         assert.deepEqual(
           copy, {name: 'John', work: {employer: 'Spectre'}});

   We’ll look at deep copying later in this chapter.


.. _shallow-copying-via-object.assign-optional:

6.2.2 Shallow copying via ``Object.assign()`` (optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``Object.assign()`` works mostly like spreading into objects. That is, the
   following two ways of copying are mostly equivalent:

   .. code::javascript

         const copy1 = {...original};
         const copy2 = Object.assign({}, original);

   Using a method instead of syntax has the benefit that it can be polyfilled on
   older JavaScript engines via a library.

   ``Object.assign()`` is not completely like spreading, though. It differs in
   one, relatively subtle point: it creates properties differently.

   -  ``Object.assign()`` uses *assignment* to create the properties of the
      copy.
   -  Spreading *defines* new properties in the copy.

   Among other things, assignment invokes own and inherited setters, while
   definition doesn’t (`more information on assignment
   vs. definition <ch_property-assignment-vs-definition.html>`__). This
   difference is rarely noticeable. The following code is an example, but it’s
   contrived:

   .. code::javascript

         const original = {['__proto__']: null}; // (A)
         const copy1 = {...original};
         // copy1 has the own property '__proto__'
         assert.deepEqual(
           Object.keys(copy1), ['__proto__']);

         const copy2 = Object.assign({}, original);
         // copy2 has the prototype null
         assert.equal(Object.getPrototypeOf(copy2), null);

   By using a computed property key in line A, we create ``.__proto__`` as an
   own property and don’t invoke the inherited setter. However, when
   ``Object.assign()`` copies that property, it does invoke the setter. (For
   more information on ``.__proto__``, see `“JavaScript for impatient
   programmers” <https://exploringjs.com/impatient-js/ch_proto-chains-classes.html#proto>`__.)


.. _copying-via-property-descriptors:

6.2.3 Shallow copying via ``Object.getOwnPropertyDescriptors()`` and ``Object.defineProperties()`` (optional)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   JavaScript lets us create properties via `property
   descriptors <#property-descriptors>`__,
   objects that specify property attributes. For example, via the
   ``Object.defineProperties()``, which we have already seen in action. If we
   combine that method with ``Object.getOwnPropertyDescriptors()``, we can copy
   more faithfully:

   .. code::javascript

         function copyAllOwnProperties(original) {
           return Object.defineProperties(
             {}, Object.getOwnPropertyDescriptors(original));
         }

   That eliminates two issues of copying objects via spreading.

   First, all attributes of own properties are copied correctly. Therefore, we
   can now copy own getters and own setters:

   .. code::javascript

         const original = {
           get myGetter() { return 123 },
           set mySetter(x) {},
         };
         assert.deepEqual(copyAllOwnProperties(original), original);

   Second, thanks to ``Object.getOwnPropertyDescriptors()``, non-enumerable
   properties are copied, too:

   .. code::javascript

         const arr = ['a', 'b'];
         assert.equal(arr.length, 2);
         assert.equal({}.hasOwnProperty.call(arr, 'length'), true);

         const copy = copyAllOwnProperties(arr);
         assert.equal({}.hasOwnProperty.call(copy, 'length'), true);


.. _deep-copying-in-javascript:

6.3 Deep copying in JavaScript
------------------------------

   Now it is time to tackle deep copying. First, we will deep-copy manually,
   then we’ll examine generic approaches.


.. _manual-deep-copying-via-nested-spreading:

6.3.1 Manual deep copying via nested spreading
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we nest spreading, we get deep copies:

   .. code::javascript

         const original = {name: 'Jane', work: {employer: 'Acme'}};
         const copy = {name: original.name, work: {...original.work}};

         // We copied successfully:
         assert.deepEqual(original, copy);
         // The copy is deep:
         assert.ok(original.work !== copy.work);


.. _hack-generic-deep-copying-via-json:

6.3.2 Hack: generic deep copying via JSON
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This is a hack, but, in a pinch, it provides a quick solution: In order to
   deep-copy an object ``original``, we first convert it to a JSON string and
   parse that JSON string:

   .. code::javascript

         function jsonDeepCopy(original) {
           return JSON.parse(JSON.stringify(original));
         }
         const original = {name: 'Jane', work: {employer: 'Acme'}};
         const copy = jsonDeepCopy(original);
         assert.deepEqual(original, copy);

   The significant downside of this approach is that we can only copy properties
   with keys and values that are supported by JSON.

   Some unsupported keys and values are simply ignored:

   .. code::javascript

         assert.deepEqual(
           jsonDeepCopy({
             // Symbols are not supported as keys
             [Symbol('a')]: 'abc',
             // Unsupported value
             b: function () {},
             // Unsupported value
             c: undefined,
           }),
           {} // empty object
         );

   Others cause exceptions:

   .. code::javascript

         assert.throws(
           () => jsonDeepCopy({a: 123n}),
           /^TypeError: Do not know how to serialize a BigInt$/);


.. _implementing-generic-deep-copying:

6.3.3 Implementing generic deep copying
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following function generically deep-copies a value ``original``:

   .. code::javascript

         function deepCopy(original) {
           if (Array.isArray(original)) {
             const copy = [];
             for (const [index, value] of original.entries()) {
               copy[index] = deepCopy(value);
             }
             return copy;
           } else if (typeof original === 'object' && original !== null) {
             const copy = {};
             for (const [key, value] of Object.entries(original)) {
               copy[key] = deepCopy(value);
             }
             return copy;
           } else {
             // Primitive value: atomic, no need to copy
             return original;
           }
         }

   The function handles three cases:

   -  If ``original`` is an Array we create a new Array and deep-copy the
      elements of ``original`` into it.
   -  If ``original`` is an object, we use a similar approach.
   -  If ``original`` is a primitive value, we don’t have to do anything.

   Let’s try out ``deepCopy()``:

   .. code::javascript

         const original = {a: 1, b: {c: 2, d: {e: 3}}};
         const copy = deepCopy(original);

         // Are copy and original deeply equal?
         assert.deepEqual(copy, original);

         // Did we really copy all levels
         // (equal content, but different objects)?
         assert.ok(copy     !== original);
         assert.ok(copy.b   !== original.b);
         assert.ok(copy.b.d !== original.b.d);

   Note that ``deepCopy()`` only fixes one issue of spreading: shallow copying.
   All others remain: prototypes are not copied, special objects are only
   partially copied, non-enumerable properties are ignored, most property
   attributes are ignored.

   Implementing copying completely generically is generally impossible: Not all
   data is a tree, sometimes we don’t want to copy all properties, etc.


.. _a-more-concise-version-of-deepcopy:

6.3.3.1 A more concise version of ``deepCopy()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   We can make our previous implementation of ``deepCopy()`` more concise if we
   use ``.map()`` and ``Object.fromEntries()``:

   .. code::javascript

         function deepCopy(original) {
           if (Array.isArray(original)) {
             return original.map(elem => deepCopy(elem));
           } else if (typeof original === 'object' && original !== null) {
             return Object.fromEntries(
               Object.entries(original)
                 .map(([k, v]) => [k, deepCopy(v)]));
           } else {
             // Primitive value: atomic, no need to copy
             return original;
           }
         }


.. _further-reading:

6.4 Further reading
-------------------

   -  `§14 “Copying instances of classes: ``.clone()`` vs. copy
      constructors” <ch_copying-class-instances.html>`__ explains class-based
      patterns for copying.
   -  `Section “Spreading into object
      literals” <https://exploringjs.com/impatient-js/ch_single-objects.html#spreading-into-object-literals>`__
      in “JavaScript for impatient programmers”
   -  `Section “Spreading into Array
      literals” <https://exploringjs.com/impatient-js/ch_arrays.html#spreading-into-array-literals>`__
      in “JavaScript for impatient programmers”
   -  `Section “Prototype
      chains” <https://exploringjs.com/impatient-js/ch_proto-chains-classes.html#prototype-chains>`__
      in “JavaScript for impatient programmers”

   `Comments <https://github.com/rauschma/deep-js/issues/6>`__


.. _ch_updating-destructively-and-nondestructively:


7 Updating data destructively and non-destructively
===================================================

   --------------

      -  7.1 `Examples: updating an object destructively and non-destructively <#examples-updating-an-object-destructively-and-non-destructively>`__
      -  7.2 `Examples: updating an Array destructively and non-destructively <#examples-updating-an-array-destructively-and-non-destructively>`__
      -  7.3 `Manual deep updating <#manual-deep-updating>`__
      -  7.4 `Implementing generic deep updating <#implementing-generic-deep-updating>`__

   --------------

   In this chapter, we learn about two different ways of updating data:

   -  A *destructive update* of data mutates the data so that it has the desired
      form.
   -  A *non-destructive update* of data creates a copy of the data that has the
      desired form.

   The latter way is similar to first making a copy and then changing it
   destructively, but it does both at the same time.


.. _examples-updating-an-object-destructively-and-non-destructively:

7.1 Examples: updating an object destructively and non-destructively
--------------------------------------------------------------------

   The following code shows a function that updates object properties
   destructively and uses it on an object.

   .. code::javascript

         function setPropertyDestructively(obj, key, value) {
           obj[key] = value;
           return obj;
         }

         const obj = {city: 'Berlin', country: 'Germany'};
         setPropertyDestructively(obj, 'city', 'Munich');
         assert.deepEqual(obj, {city: 'Munich', country: 'Germany'});

   The following code demonstrates non-destructive updating of an object:

   .. code::javascript

         function setPropertyNonDestructively(obj, key, value) {
           const updatedObj = {};
           for (const [k, v] of Object.entries(obj)) {
             updatedObj[k] = (k === key ? value : v);
           }
           return updatedObj;
         }

         const obj = {city: 'Berlin', country: 'Germany'};
         const updatedObj = setPropertyNonDestructively(obj, 'city', 'Munich');

         // We have created an updated object:
         assert.deepEqual(updatedObj, {city: 'Munich', country: 'Germany'});

         // But we didn’t change the original:
         assert.deepEqual(obj, {city: 'Berlin', country: 'Germany'});

   Spreading makes ``setPropertyNonDestructively()`` more concise:

   .. code::javascript

         function setPropertyNonDestructively(obj, key, value) {
           return {...obj, [key]: value};
         }

   Both versions of ``setPropertyNonDestructively()`` update *shallowly*: They
   only change the top level of an object.


.. _examples-updating-an-array-destructively-and-non-destructively:

7.2 Examples: updating an Array destructively and non-destructively
-------------------------------------------------------------------

   The following code shows a function that updates Array elements destructively
   and uses it on an Array.

   .. code::javascript

         function setElementDestructively(arr, index, value) {
           arr[index] = value;
         }

         const arr = ['a', 'b', 'c', 'd', 'e'];
         setElementDestructively(arr, 2, 'x');
         assert.deepEqual(arr, ['a', 'b', 'x', 'd', 'e']);

   The following code demonstrates non-destructive updating of an Array:

   .. code::javascript

         function setElementNonDestructively(arr, index, value) {
           const updatedArr = [];
           for (const [i, v] of arr.entries()) {
             updatedArr.push(i === index ? value : v);
           }
           return updatedArr;
         }

         const arr = ['a', 'b', 'c', 'd', 'e'];
         const updatedArr = setElementNonDestructively(arr, 2, 'x');
         assert.deepEqual(updatedArr, ['a', 'b', 'x', 'd', 'e']);
         assert.deepEqual(arr, ['a', 'b', 'c', 'd', 'e']);

   ``.slice()`` and spreading make ``setElementNonDestructively()`` more
   concise:

   .. code::javascript

         function setElementNonDestructively(arr, index, value) {
           return [
             ...arr.slice(0, index), value, ...arr.slice(index+1)];
         }

   Both versions of ``setElementNonDestructively()`` update *shallowly*: They
   only change the top level of an Array.


.. _manual-deep-updating:

7.3 Manual deep updating
------------------------

   So far, we have only updated data shallowly. Let’s tackle deep updating. The
   following code shows how to do it manually. We are changing name and
   employer.

   .. code::javascript

         const original = {name: 'Jane', work: {employer: 'Acme'}};
         const updatedOriginal = {
           ...original,
           name: 'John',
           work: {
             ...original.work,
             employer: 'Spectre'
           },
         };

         assert.deepEqual(
           original, {name: 'Jane', work: {employer: 'Acme'}});
         assert.deepEqual(
           updatedOriginal, {name: 'John', work: {employer: 'Spectre'}});


.. _implementing-generic-deep-updating:

7.4 Implementing generic deep updating
--------------------------------------

   The following function implements generic deep updating.

   .. code::javascript

         function deepUpdate(original, keys, value) {
           if (keys.length === 0) {
             return value;
           }
           const currentKey = keys[0];
           if (Array.isArray(original)) {
             return original.map(
               (v, index) => index === currentKey
                 ? deepUpdate(v, keys.slice(1), value) // (A)
                 : v); // (B)
           } else if (typeof original === 'object' && original !== null) {
             return Object.fromEntries(
               Object.entries(original).map(
                 (keyValuePair) => {
                   const [k,v] = keyValuePair;
                   if (k === currentKey) {
                     return [k, deepUpdate(v, keys.slice(1), value)]; // (C)
                   } else {
                     return keyValuePair; // (D)
                   }
                 }));
           } else {
             // Primitive value
             return original;
           }
         }

   If we see ``value`` as the root of a tree that we are updating, then
   ``deepUpdate()`` only deeply changes a single branch (line A and C). All
   other branches are copied shallowly (line B and D).

   This is what using ``deepUpdate()`` looks like:

   .. code::javascript

         const original = {name: 'Jane', work: {employer: 'Acme'}};

         const copy = deepUpdate(original, ['work', 'employer'], 'Spectre');
         assert.deepEqual(copy, {name: 'Jane', work: {employer: 'Spectre'}});
         assert.deepEqual(original, {name: 'Jane', work: {employer: 'Acme'}});

   `Comments <https://github.com/rauschma/deep-js/issues/7>`__


.. _ch_shared-mutable-state:


8 The problems of shared mutable state and how to avoid them
============================================================

   --------------

      -  8.1 `What is shared mutable state and why is it problematic? <#what-is-shared-mutable-state-and-why-is-it-problematic>`__
      -  8.2 `Avoiding sharing by copying data <#avoiding-sharing-by-copying-data>`__

         -  8.2.1 `How does copying help with shared mutable state? <#how-does-copying-help-with-shared-mutable-state>`__

      -  8.3 `Avoiding mutations by updating non-destructively <#avoiding-mutations-by-updating-non-destructively>`__

         -  8.3.1 `How does non-destructive updating help with shared mutable state? <#how-does-non-destructive-updating-help-with-shared-mutable-state>`__

      -  8.4 `Preventing mutations by making data immutable <#preventing-mutations-by-making-data-immutable>`__

         -  8.4.1 `How does immutability help with shared mutable state? <#how-does-immutability-help-with-shared-mutable-state>`__

      -  8.5 `Libraries for avoiding shared mutable state <#libraries-for-avoiding-shared-mutable-state>`__

         -  8.5.1 `Immutable.js <#immutable.js>`__
         -  8.5.2 `Immer <#immer>`__

   --------------

   This chapter answers the following questions:

   -  What is shared mutable state?
   -  Why is it problematic?
   -  How can its problems be avoided?


.. _what-is-shared-mutable-state-and-why-is-it-problematic:

8.1 What is shared mutable state and why is it problematic?
-----------------------------------------------------------

   Shared mutable state works as follows:

   -  If two or more parties can change the same data (variables, objects,
      etc.).
   -  And if their lifetimes overlap.
   -  Then there is a risk of one party’s modifications preventing other parties
      from working correctly.

   Note that this definition applies to function calls, cooperative multitasking
   (e.g., async functions in JavaScript), etc. The risks are similar in each
   case.

   The following code is an example. The example is not realistic, but it
   demonstrates the risks and is easy to understand:

   .. code::javascript

         function logElements(arr) {
           while (arr.length > 0) {
             console.log(arr.shift());
           }
         }

         function main() {
           const arr = ['banana', 'orange', 'apple'];

           console.log('Before sorting:');
           logElements(arr);

           arr.sort(); // changes arr

           console.log('After sorting:');
           logElements(arr); // (A)
         }
         main();

         // Output:
         // 'Before sorting:'
         // 'banana'
         // 'orange'
         // 'apple'
         // 'After sorting:'

   In this case, there are two independent parties:

   -  Function ``main()`` wants to log an Array before and after sorting it.
   -  Function ``logElements()`` logs the elements of its parameter ``arr``, but
      removes them while doing so.

   ``logElements()`` breaks ``main()`` and causes it to log an empty Array in
   line A.

   In the remainder of this chapter, we look at three ways of avoiding the
   problems of shared mutable state:

   -  Avoiding sharing by copying data
   -  Avoiding mutations by updating non-destructively
   -  Preventing mutations by making data immutable

   In particular, we will come back to the example that we’ve just seen and fix
   it.


.. _avoiding-sharing-by-copying-data:

8.2 Avoiding sharing by copying data
------------------------------------

   Copying data is one way of avoiding sharing it.

   .. container:: notebox

      |image1|  **Background**

      For background on copying data in JavaScript, please refer to the
      following two chapters in this book:

      -  `§6 “Copying objects and
         Arrays” <ch_copying-objects-and-arrays.html>`__
      -  `§14 “Copying instances of classes: ``.clone()`` vs. copy
         constructors” <ch_copying-class-instances.html>`__


.. _how-does-copying-help-with-shared-mutable-state:

8.2.1 How does copying help with shared mutable state?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   As long as we only *read* from shared state, we don’t have any problems.
   Before *modifying* it, we need to “un-share” it, by copying it (as deeply as
   necessary).

   *Defensive copying* is a technique to always copy when issues *might* arise.
   Its objective is to keep the current entity (function, class, etc.) safe:

   -  Input: Copying (potentially) shared data passed to us, lets us use that
      data without being disturbed by an external entity.
   -  Output: Copying internal data before exposing it to an outside party,
      means that that party can’t disrupt our internal activity.

   Note that these measures protect us from other parties, but they also protect
   other parties from us.

   The next sections illustrate both kinds of defensive copying.


.. _copying-shared-input:

8.2.1.1 Copying shared input
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Remember that in the motivating example at the beginning of this chapter, we
   got into trouble because ``logElements()`` modified its parameter ``arr``:

   .. code::javascript

         function logElements(arr) {
           while (arr.length > 0) {
             console.log(arr.shift());
           }
         }

   Let’s add defensive copying to this function:

   .. code::javascript

         function logElements(arr) {
           arr = [...arr]; // defensive copy
           while (arr.length > 0) {
             console.log(arr.shift());
           }
         }

   Now ``logElements()`` doesn’t cause problems anymore, if it is called inside
   ``main()``:

   .. code::javascript

         function main() {
           const arr = ['banana', 'orange', 'apple'];

           console.log('Before sorting:');
           logElements(arr);

           arr.sort(); // changes arr

           console.log('After sorting:');
           logElements(arr); // (A)
         }
         main();

         // Output:
         // 'Before sorting:'
         // 'banana'
         // 'orange'
         // 'apple'
         // 'After sorting:'
         // 'apple'
         // 'banana'
         // 'orange'


.. _copying-exposed-internal-data:

8.2.1.2 Copying exposed internal data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Let’s start with a class ``StringBuilder`` that doesn’t copy internal data it
   exposes (line A):

   .. code::javascript

         class StringBuilder {
           _data = [];
           add(str) {
             this._data.push(str);
           }
           getParts() {
             // We expose internals without copying them:
             return this._data; // (A)
           }
           toString() {
             return this._data.join('');
           }
         }

   As long as ``.getParts()`` isn’t used, everything works well:

   .. code::javascript

         const sb1 = new StringBuilder();
         sb1.add('Hello');
         sb1.add(' world!');
         assert.equal(sb1.toString(), 'Hello world!');

   If, however, the result of ``.getParts()`` is changed (line A), then the
   ``StringBuilder`` ceases to work correctly:

   .. code::javascript

         const sb2 = new StringBuilder();
         sb2.add('Hello');
         sb2.add(' world!');
         sb2.getParts().length = 0; // (A)
         assert.equal(sb2.toString(), ''); // not OK

   The solution is to copy the internal ``._data`` defensively before it is
   exposed (line A):

   .. code::javascript

         class StringBuilder {
           this._data = [];
           add(str) {
             this._data.push(str);
           }
           getParts() {
             // Copy defensively
             return [...this._data]; // (A)
           }
           toString() {
             return this._data.join('');
           }
         }

   Now changing the result of ``.getParts()`` doesn’t interfere with the
   operation of ``sb`` anymore:

   .. code::javascript

         const sb = new StringBuilder();
         sb.add('Hello');
         sb.add(' world!');
         sb.getParts().length = 0;
         assert.equal(sb.toString(), 'Hello world!'); // OK


.. _avoiding-mutations-by-updating-non-destructively:

8.3 Avoiding mutations by updating non-destructively
----------------------------------------------------

   We can avoid mutations if we only update data non-destructively.

   .. container:: notebox

      |image2|  **Background**

      For more information on updating data, see `§7 “Updating data
      destructively and
      non-destructively” <ch_updating-destructively-and-nondestructively.html>`__.


.. _how-does-non-destructive-updating-help-with-shared-mutable-state:

8.3.1 How does non-destructive updating help with shared mutable state?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   With non-destructive updating, sharing data becomes unproblematic, because we
   never mutate the shared data. (This only works if everyone that accesses the
   data does that!)

   Intriguingly, copying data becomes trivially simple:

   .. code::javascript

         const original = {city: 'Berlin', country: 'Germany'};
         const copy = original;

   This works, because we are only making non-destructive changes and are
   therefore copying the data on demand.


.. _preventing-mutations-by-making-data-immutable:

8.4 Preventing mutations by making data immutable
-------------------------------------------------

   We can prevent mutations of shared data by making that data immutable.

   .. container:: notebox

      |image3|  **Background**

      For background on how to make data immutable in JavaScript, please refer
      to the following two chapters in this book:

      -  `§10 “Protecting objects from being
         changed” <ch_protecting-objects.html>`__
      -  `§15 “Immutable wrappers for
         collections” <ch_immutable-collection-wrappers.html>`__


.. _how-does-immutability-help-with-shared-mutable-state:

8.4.1 How does immutability help with shared mutable state?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If data is immutable, it can be shared without any risks. In particular,
   there is no need to copy defensively.

   .. container:: notebox

      |image4|  **Non-destructive updating is an important complement to
      immutable data**

      If we combine the two, immutable data becomes virtually as versatile as
      mutable data but without the associated risks.


.. _libraries-for-avoiding-shared-mutable-state:

8.5 Libraries for avoiding shared mutable state
-----------------------------------------------

   There are several libraries available for JavaScript that support immutable
   data with non-destructive updating. Two popular ones are:

   -  `Immutable.js <https://github.com/immutable-js/immutable-js>`__ provides
      immutable data structures for lists, stacks, sets, maps, etc.
   -  `Immer <https://immerjs.github.io/immer/>`__ also supports immutability
      and non-destructive updating but for plain objects, Arrays, Sets, and
      Maps. That is, no new data structures are needed.

   These libraries are described in more detail in the next two sections.


.. _immutable.js:

8.5.1 Immutable.js
~~~~~~~~~~~~~~~~~~

   In its repository, `the library
   Immutable.js <https://github.com/immutable-js/immutable-js>`__ is described
   as:

      Immutable persistent data collections for JavaScript which increase
      efficiency and simplicity.

   Immutable.js provides immutable data structures such as:

   -  ``List``
   -  ``Stack``
   -  ``Set`` (which is different from JavaScript’s built-in ``Set``)
   -  ``Map`` (which is different from JavaScript’s built-in ``Map``)
   -  Etc.

   In the following example, we use an immutable ``Map``:

   .. code::javascript

         import {Map} from 'immutable/dist/immutable.es.js';
         const map0 = Map([
           [false, 'no'],
           [true, 'yes'],
         ]);

         // We create a modified version of map0:
         const map1 = map0.set(true, 'maybe');

         // The modified version is different from the original:
         assert.ok(map1 !== map0);
         assert.equal(map1.equals(map0), false); // (A)

         // We undo the change we just made:
         const map2 = map1.set(true, 'yes');

         // map2 is a different object than map0,
         // but it has the same content
         assert.ok(map2 !== map0);
         assert.equal(map2.equals(map0), true); // (B)

   Notes:

   -  Instead of modifying the receiver, “destructive” operations such as
      ``.set()`` return modified copies.
   -  To check if two data structures have the same content, we use the built-in
      ``.equals()`` method (line A and line B).


.. _immer:

8.5.2 Immer
~~~~~~~~~~~

   In its repository, `the library Immer <https://immerjs.github.io/immer/>`__
   is described as:

      Create the next immutable state by mutating the current one.

   Immer helps with non-destructively updating (potentially nested) plain
   objects, Arrays, Sets, and Maps. That is, there are no custom data structures
   involved.

   This is what using Immer looks like:

   .. code::javascript

         import {produce} from 'immer/dist/immer.module.js';

         const people = [
           {name: 'Jane', work: {employer: 'Acme'}},
         ];

         const modifiedPeople = produce(people, (draft) => {
           draft[0].work.employer = 'Cyberdyne';
           draft.push({name: 'John', work: {employer: 'Spectre'}});
         });

         assert.deepEqual(modifiedPeople, [
           {name: 'Jane', work: {employer: 'Cyberdyne'}},
           {name: 'John', work: {employer: 'Spectre'}},
         ]);
         assert.deepEqual(people, [
           {name: 'Jane', work: {employer: 'Acme'}},
         ]);

   The original data is stored in ``people``. ``produce()`` provides us with a
   variable ``draft``. We pretend that this variable is ``people`` and use
   operations with which we would normally make destructive changes. Immer
   intercepts these operations. Instead of mutating ``draft``, it
   non-destructively changes ``people``. The result is referenced by
   ``modifiedPeople``. As a bonus, it is deeply immutable.

   ``assert.deepEqual()`` works because Immer returns plain objects and Arrays.

   `Comments <https://github.com/rauschma/deep-js/issues/8>`__

.. |image1| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px
.. |image2| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px
.. |image3| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px
.. |image4| image:: https://exploringjs.com/deep-js/img-book/img/icons/lightbulb-regular.svg
   :height: 24px


.. _pt_object-property-attributes:


PART IV OOP: object property attributes
=======================================


.. _ch_property-attributes-intro:


9 Property attributes: an introduction
======================================

   --------------

      -  9.1 `The structure of objects <#the-structure-of-objects>`__

         -  9.1.1 `Internal slots <#internal-slots>`__
         -  9.1.2 `Property keys <#property-keys>`__
         -  9.1.3 `Property attributes <#property-attributes>`__

      -  9.2 `Property descriptors <#property-descriptors>`__
      -  9.3 `Retrieving descriptors for properties <#retrieving-descriptors-for-properties>`__

         -  9.3.1 `Object.getOwnPropertyDescriptor(): retrieving a descriptor for a single property <#object.getownpropertydescriptor-retrieving-a-descriptor-for-a-single-property>`__
         -  9.3.2 `Object.getOwnPropertyDescriptors(): retrieving descriptors for all properties of an object <#object.getownpropertydescriptors-retrieving-descriptors-for-all-properties-of-an-object>`__

      -  9.4 `Defining properties via descriptors <#defining-properties-via-descriptors>`__

         -  9.4.1 `Object.defineProperty(): defining single properties via descriptors <#object.defineproperty-defining-single-properties-via-descriptors>`__
         -  9.4.2 `Object.defineProperties(): defining multiple properties via descriptors <#object.defineproperties-defining-multiple-properties-via-descriptors>`__

      -  9.5 `Object.create(): Creating objects via descriptors <#object.create-creating-objects-via-descriptors>`__
      -  9.6 `Use cases for Object.getOwnPropertyDescriptors() <#use-cases-for-object.getownpropertydescriptors>`__

         -  9.6.1 `Use case: copying properties into an object <#use-case-copying-properties-into-an-object>`__
         -  9.6.2 `Use case for Object.getOwnPropertyDescriptors(): cloning objects <#use-case-for-object.getownpropertydescriptors-cloning-objects>`__

      -  9.7 `Omitting descriptor properties <#omitting-descriptor-properties>`__

         -  9.7.1 `Omitting descriptor properties when creating properties <#omitting-descriptor-properties-when-creating-properties>`__
         -  9.7.2 `Omitting descriptor properties when changing properties <#omitting-descriptor-properties-when-changing-properties>`__

      -  9.8 `What property attributes do built-in constructs use? <#what-property-attributes-do-built-in-constructs-use>`__

         -  9.8.1 `Own properties created via assignment <#own-properties-created-via-assignment>`__
         -  9.8.2 `Own properties created via object literals <#own-properties-created-via-object-literals>`__
         -  9.8.3 `The own property .length of Arrays <#the-own-property-.length-of-arrays>`__
         -  9.8.4 `Prototype properties of built-in classes <#prototype-properties-of-built-in-classes>`__
         -  9.8.5 `Prototype properties and instance properties of user-defined classes <#prototype-properties-and-instance-properties-of-user-defined-classes>`__

      -  9.9 `API: property descriptors <#api-property-descriptors>`__
      -  9.10 `Further reading <#further-reading-1>`__

   --------------

   In this chapter, we take a closer look at how the ECMAScript specification
   sees JavaScript objects. In particular, properties are not atomic in the
   spec, but composed of multiple *attributes* (think fields in a record). Even
   the value of a data property is stored in an attribute!


.. _the-structure-of-objects:

9.1 The structure of objects
----------------------------

   `In the ECMAScript
   specification <https://tc39.es/ecma262/#sec-object-type>`__, an object
   consists of:

   -  *Internal slots*, which are storage locations that are not accessible from
      JavaScript, only from operations in the specification.
   -  A collection of *properties*. Each property associates a *key* with
      *attributes* (think fields in a record).


.. _internal-slots:

9.1.1 Internal slots
~~~~~~~~~~~~~~~~~~~~

   `The
   specification <https://tc39.es/ecma262/#sec-object-internal-methods-and-internal-slots>`__
   describes internal slots as follows. I added bullet points and emphasized one
   part:

   -  Internal slots correspond to internal state that is associated with
      objects and used by various ECMAScript specification algorithms.
   -  Internal slots are not object properties and they are not inherited.
   -  Depending upon the specific internal slot specification, such state may
      consist of:

      -  values of any ECMAScript language type or
      -  of specific ECMAScript specification type values.

   -  Unless explicitly specified otherwise, internal slots are allocated as
      part of the process of creating an object and may not be dynamically added
      to an object.
   -  Unless specified otherwise, the initial value of an internal slot is the
      value ``undefined``.
   -  Various algorithms within this specification create objects that have
      internal slots. However, **the ECMAScript language provides no direct way
      to associate internal slots with an object**.
   -  Internal methods and internal slots are identified within this
      specification using names enclosed in double square brackets ``[[ ]]``.

   There are two kinds of internal slots:

   -  Method slots for manipulating objects (getting properties, setting
      properties, etc.)
   -  Data slots that store values.

   Ordinary objects have the following data slots:

   -  ``.[[Prototype]]: null | object``

      -  Stores the prototype of an object.
      -  Can be accessed indirectly via ``Object.getPrototypeOf()`` and
         ``Object.setPrototypeOf()``.

   -  ``.[[Extensible]]: boolean``

      -  Indicates if it is possible to add properties to an object.
      -  Can be set to ``false`` via ``Object.preventExtensions()``.

   -  ``.[[PrivateFieldValues]]: EntryList``

      -  Is used to manage `private class
         fields <https://2ality.com/2019/07/private-class-fields.html>`__.


.. _property-keys:

9.1.2 Property keys
~~~~~~~~~~~~~~~~~~~

   The key of a property is either:

   -  A string
   -  A symbol


.. _property-attributes:

9.1.3 Property attributes
~~~~~~~~~~~~~~~~~~~~~~~~~

   There are two kinds of properties and they are characterized by their
   attributes:

   -  A *data property* stores data. Its attribute ``value`` holds any
      JavaScript value.
   -  An *accessor property* consists of a getter function and/or a setter
      function. The former is stored in the attribute ``get``, the latter in the
      attribute ``set``.

   Additionally, there are attributes that both kinds of properties have. The
   following table lists all attributes and their default values.

   ================= ==================================== =============
   Kind of property  Name and type of attribute           Default value
   ================= ==================================== =============
   Data property     ``value: any``                       ``undefined``
   \                 ``writable: boolean``                ``false``
   Accessor property ``get: (this: any) => any``          ``undefined``
   \                 ``set: (this: any, v: any) => void`` ``undefined``
   All properties    ``configurable: boolean``            ``false``
   \                 ``enumerable: boolean``              ``false``
   ================= ==================================== =============

   We have already encountered the attributes ``value``, ``get``, and ``set``.
   The other attributes work as follows:

   -  ``writable`` determines if the value of a data property can be changed.
   -  ``configurable`` determines if the attributes of a property can be
      changed. If it is ``false``, then:

      -  We cannot delete the property.
      -  We cannot change a property from a data property to an accessor
         property or vice versa.
      -  We cannot change any attribute other than ``value``.
      -  However, one more attribute change is allowed: We can change
         ``writable`` from ``true`` to ``false``. The rationale behind this
         anomaly is
         `historical <https://stackoverflow.com/questions/9829817/why-can-i-set-enumerability-and-writability-of-unconfigurable-property-descrip/9843191#9843191>`__:
         Property ``.length`` of Arrays has always been writable and
         non-configurable. Allowing its ``writable`` attribute to be changed
         enables us to freeze Arrays.

   -  ``enumerable`` influences some operations (such as ``Object.keys()``). If
      it is ``false``, then those operations ignore the property. Most
      properties are enumerable (e.g. those created via assignment or object
      literals), which is why you’ll rarely notice this attribute in practice.
      If you are still interested in how it works, see `§12 “Enumerability of
      properties” <ch_enumerability.html>`__.


.. _pitfall-inherited-non-writable-properties-prevent-creating-own-properties-via-assignment:

9.1.3.1 Pitfall: Inherited non-writable properties prevent creating own properties via assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If an inherited property is non-writable, we can’t use assignment to create
   an own property with the same key:

   .. code::javascript

         const proto = {
           prop: 1,
         };
         // Make proto.prop non-writable:
         Object.defineProperty(
           proto, 'prop', {writable: false});

         const obj = Object.create(proto);

         assert.throws(
           () => obj.prop = 2,
           /^TypeError: Cannot assign to read only property 'prop'/);

   For more information, see `§11.3.4 “Inherited read-only properties prevent
   creating own properties via
   assignment” <#inherited-properties-prevent-assignment>`__.


.. _property-descriptors:

9.2 Property descriptors
------------------------

   A *property descriptor* encodes the attributes of a property as a JavaScript
   object. Their TypeScript interfaces look as follows.

   .. code::javascript

         interface DataPropertyDescriptor {
           value?: any;
           writable?: boolean;
           configurable?: boolean;
           enumerable?: boolean;
         }
         interface AccessorPropertyDescriptor {
           get?: (this: any) => any;
           set?: (this: any, v: any) => void;
           configurable?: boolean;
           enumerable?: boolean;
         }
         type PropertyDescriptor = DataPropertyDescriptor | AccessorPropertyDescriptor;

   The question marks indicate that all properties are optional. `§9.7 “Omitting
   descriptor
   properties” <#omitting-descriptor-properties>`__
   describes what happens if they are omitted.


.. _retrieving-descriptors-for-properties:

9.3 Retrieving descriptors for properties
-----------------------------------------


.. _object.getownpropertydescriptor-retrieving-a-descriptor-for-a-single-property:

9.3.1 ``Object.getOwnPropertyDescriptor()``: retrieving a descriptor for a single property
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Consider the following object:

   .. code::javascript

         const legoBrick = {
           kind: 'Plate 1x3',
           color: 'yellow',
           get description() {
             return `${this.kind} (${this.color})`;
           },
         };

   Let’s first get a descriptor for the data property ``.color``:

   .. code::javascript

         assert.deepEqual(
           Object.getOwnPropertyDescriptor(legoBrick, 'color'),
           {
             value: 'yellow',
             writable: true,
             enumerable: true,
             configurable: true,
           });

   This is what the descriptor for the accessor property ``.description`` looks
   like:

   .. code::javascript

         const desc = Object.getOwnPropertyDescriptor.bind(Object);
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(legoBrick, 'description'),
           {
             get: desc(legoBrick, 'description').get, // (A)
             set: undefined,
             enumerable: true,
             configurable: true
           });

   Using the utility function ``desc()`` in line A ensures that ``.deepEqual()``
   works.


.. _object.getownpropertydescriptors-retrieving-descriptors-for-all-properties-of-an-object:

9.3.2 ``Object.getOwnPropertyDescriptors()``: retrieving descriptors for all properties of an object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         const legoBrick = {
           kind: 'Plate 1x3',
           color: 'yellow',
           get description() {
             return `${this.kind} (${this.color})`;
           },
         };

         const desc = Object.getOwnPropertyDescriptor.bind(Object);
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(legoBrick),
           {
             kind: {
               value: 'Plate 1x3',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             color: {
               value: 'yellow',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             description: {
               get: desc(legoBrick, 'description').get, // (A)
               set: undefined,
               enumerable: true,
               configurable: true,
             },
           });

   Using the helper function ``desc()`` in line A ensures that ``.deepEqual()``
   works.


.. _defining-properties-via-descriptors:

9.4 Defining properties via descriptors
---------------------------------------

   If we define a property with the key ``k`` via a property descriptor
   ``propDesc``, then what happens depends:

   -  If there is no property with key ``k``, a new own property is created that
      has the attributes specified by ``propDesc``.
   -  If there is a property with key ``k``, defining changes the property’s
      attributes so that they match ``propDesc``.


.. _object.defineproperty-defining-single-properties-via-descriptors:

9.4.1 ``Object.defineProperty()``: defining single properties via descriptors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   First, let us create a new property via a descriptor:

   .. code::javascript

         const car = {};

         Object.defineProperty(car, 'color', {
           value: 'blue',
           writable: true,
           enumerable: true,
           configurable: true,
         });

         assert.deepEqual(
           car,
           {
             color: 'blue',
           });

   Next, we change the kind of a property via a descriptor; we turn a data
   property into a getter:

   .. code::javascript

         const car = {
           color: 'blue',
         };

         let readCount = 0;
         Object.defineProperty(car, 'color', {
           get() {
             readCount++;
             return 'red';
           },
         });

         assert.equal(car.color, 'red');
         assert.equal(readCount, 1);

   Lastly, we change the value of a data property via a descriptor:

   .. code::javascript

         const car = {
           color: 'blue',
         };

         // Use the same attributes as assignment:
         Object.defineProperty(
           car, 'color', {
             value: 'green',
             writable: true,
             enumerable: true,
             configurable: true,
           });

         assert.deepEqual(
           car,
           {
             color: 'green',
           });

   We have used the same property attributes as assignment.


.. _object.defineproperties-defining-multiple-properties-via-descriptors:

9.4.2 ``Object.defineProperties()``: defining multiple properties via descriptors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``Object.defineProperties()`` is the multi-property version of
   \`\ ``Object.defineProperty()``:

   .. code::javascript

         const legoBrick1 = {};
         Object.defineProperties(
           legoBrick1,
           {
             kind: {
               value: 'Plate 1x3',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             color: {
               value: 'yellow',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             description: {
               get: function () {
                 return `${this.kind} (${this.color})`;
               },
               enumerable: true,
               configurable: true,
             },
           });

         assert.deepEqual(
           legoBrick1,
           {
             kind: 'Plate 1x3',
             color: 'yellow',
             get description() {
               return `${this.kind} (${this.color})`;
             },
           });


.. _object.create-creating-objects-via-descriptors:

9.5 ``Object.create()``: Creating objects via descriptors
---------------------------------------------------------

   ``Object.create()`` creates a new object. Its first argument specifies the
   prototype of that object. Its optional second argument specifies descriptors
   for the properties of that object. In the next example, we create the same
   object as in the previous example.

   .. code::javascript

         const legoBrick2 = Object.create(
           Object.prototype,
           {
             kind: {
               value: 'Plate 1x3',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             color: {
               value: 'yellow',
               writable: true,
               enumerable: true,
               configurable: true,
             },
             description: {
               get: function () {
                 return `${this.kind} (${this.color})`;
               },
               enumerable: true,
               configurable: true,
             },
           });

         // Did we really create the same object?
         assert.deepEqual(legoBrick1, legoBrick2); // Yes!


.. _use-cases-for-object.getownpropertydescriptors:

9.6 Use cases for ``Object.getOwnPropertyDescriptors()``
--------------------------------------------------------

   ``Object.getOwnPropertyDescriptors()`` helps us with two use cases, if we
   combine it with ``Object.defineProperties()`` or ``Object.create()``.


.. _use-case-copying-properties-into-an-object:

9.6.1 Use case: copying properties into an object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Since ES6, JavaScript already has had a tool method for copying properties:
   ``Object.assign()``. However, this method uses simple get and set operations
   to copy a property whose key is ``key``:

   .. code::javascript

         target[key] = source[key];

   That means that it only creates a faithful copy of a property if:

   -  Its attribute ``writable`` is ``true`` and its attribute ``enumerable`` is
      ``true`` (because that’s how assignment creates properties).
   -  It is a data property.

   The following example illustrates this limitation. Object ``source`` has a
   setter whose key is ``data``.

   .. code::javascript

         const source = {
           set data(value) {
             this._data = value;
           }
         };

         // Property `data` exists because there is only a setter
         // but has the value `undefined`.
         assert.equal('data' in source, true);
         assert.equal(source.data, undefined);

   If we use ``Object.assign()`` to copy property ``data``, then the accessor
   property ``data`` is converted to a data property:

   .. code::javascript

         const target1 = {};
         Object.assign(target1, source);

         assert.deepEqual(
           Object.getOwnPropertyDescriptor(target1, 'data'),
           {
             value: undefined,
             writable: true,
             enumerable: true,
             configurable: true,
           });

         // For comparison, the original:
         const desc = Object.getOwnPropertyDescriptor.bind(Object);
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(source, 'data'),
           {
             get: undefined,
             set: desc(source, 'data').set,
             enumerable: true,
             configurable: true,
           });

   Fortunately, using ``Object.getOwnPropertyDescriptors()`` together with
   ``Object.defineProperties()`` does faithfully copy the property ``data``:

   .. code::javascript

         const target2 = {};
         Object.defineProperties(
           target2, Object.getOwnPropertyDescriptors(source));

         assert.deepEqual(
           Object.getOwnPropertyDescriptor(target2, 'data'),
           {
             get: undefined,
             set: desc(source, 'data').set,
             enumerable: true,
             configurable: true,
           });


.. _pitfall-copying-methods-that-use-super:

9.6.1.1 Pitfall: copying methods that use ``super``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   A method that uses ``super`` is firmly connected with its *home object* (the
   object it is stored in). There is currently no way to copy or move such a
   method to a different object.


.. _use-case-for-object.getownpropertydescriptors-cloning-objects:

9.6.2 Use case for ``Object.getOwnPropertyDescriptors()``: cloning objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Shallow cloning is similar to copying properties, which is why
   ``Object.getOwnPropertyDescriptors()`` is a good choice here, too.

   To create the clone, we use ``Object.create()``:

   .. code::javascript

         const original = {
           set data(value) {
             this._data = value;
           }
         };

         const clone = Object.create(
           Object.getPrototypeOf(original),
           Object.getOwnPropertyDescriptors(original));

         assert.deepEqual(original, clone);

   For more information on this topic, see `§6 “Copying objects and
   Arrays” <ch_copying-objects-and-arrays.html>`__.


.. _omitting-descriptor-properties:

9.7 Omitting descriptor properties
----------------------------------

   All properties of descriptors are optional. What happens when you omit a
   property depends on the operation.


.. _omitting-descriptor-properties-when-creating-properties:

9.7.1 Omitting descriptor properties when creating properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   When we create a new property via a descriptor, then omitting attributes
   means that their default values are used:

   .. code::javascript

         const car = {};
         Object.defineProperty(
           car, 'color', {
             value: 'red',
           });
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(car, 'color'),
           {
             value: 'red',
             writable: false,
             enumerable: false,
             configurable: false,
           });


.. _omitting-descriptor-properties-when-changing-properties:

9.7.2 Omitting descriptor properties when changing properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If instead, we change an existing property, then omitting descriptor
   properties means that the corresponding attributes are not touched:

   .. code::javascript

         const car = {
           color: 'yellow',
         };
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(car, 'color'),
           {
             value: 'yellow',
             writable: true,
             enumerable: true,
             configurable: true,
           });
         Object.defineProperty(
           car, 'color', {
             value: 'pink',
           });
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(car, 'color'),
           {
             value: 'pink',
             writable: true,
             enumerable: true,
             configurable: true,
           });


.. _what-property-attributes-do-built-in-constructs-use:

9.8 What property attributes do built-in constructs use?
--------------------------------------------------------

   The general rule (with few exceptions) for property attributes is:

   -  Properties of objects at the beginning of a prototype chain are usually
      writable, enumerable, and configurable.

   -  As described in `the chapter on enumerability <ch_enumerability.html>`__,
      most inherited properties are non-enumerable, to hide them from legacy
      constructs such as ``for-in`` loops. Inherited properties are usually
      writable and configurable.


.. _own-properties-created-via-assignment:

9.8.1 Own properties created via assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         const obj = {};
         obj.prop = 3;

         assert.deepEqual(
           Object.getOwnPropertyDescriptors(obj),
           {
             prop: {
               value: 3,
               writable: true,
               enumerable: true,
               configurable: true,
             }
           });


.. _own-properties-created-via-object-literals:

9.8.2 Own properties created via object literals
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         const obj = { prop: 'yes' };

         assert.deepEqual(
           Object.getOwnPropertyDescriptors(obj),
           {
             prop: {
               value: 'yes',
               writable: true,
               enumerable: true,
               configurable: true
             }
           });


.. _the-own-property-.length-of-arrays:

9.8.3 The own property ``.length`` of Arrays
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The own property ``.length`` of Arrays is non-enumerable, so that it isn’t
   copied by ``Object.assign()``, spreading, and similar operations. It is also
   non-configurable:

   .. code:: repl

         > Object.getOwnPropertyDescriptor([], 'length')
         { value: 0, writable: true, enumerable: false, configurable: false }
         > Object.getOwnPropertyDescriptor('abc', 'length')
         { value: 3, writable: false, enumerable: false, configurable: false }

   ``.length`` is a special data property, in that it is influenced by (and
   influences) other own properties (specifically, index properties).


.. _prototype-properties-of-built-in-classes:

9.8.4 Prototype properties of built-in classes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         assert.deepEqual(
           Object.getOwnPropertyDescriptor(Array.prototype, 'map'),
           {
             value: Array.prototype.map,
             writable: true,
             enumerable: false,
             configurable: true
           });


.. _prototype-properties-and-instance-properties-of-user-defined-classes:

9.8.5 Prototype properties and instance properties of user-defined classes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         class DataContainer {
           accessCount = 0;
           constructor(data) {
             this.data = data;
           }
           getData() {
             this.accessCount++;
             return this.data;
           }
         }
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(DataContainer.prototype),
           {
             constructor: {
               value: DataContainer,
               writable: true,
               enumerable: false,
               configurable: true,
             },
             getData: {
               value: DataContainer.prototype.getData,
               writable: true,
               enumerable: false,
               configurable: true,
             }
           });

   Note that all own properties of instances of ``DataContainer`` are writable,
   enumerable, and configurable:

   .. code::javascript

         const dc = new DataContainer('abc')
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(dc),
           {
             accessCount: {
               value: 0,
               writable: true,
               enumerable: true,
               configurable: true,
             },
             data: {
               value: 'abc',
               writable: true,
               enumerable: true,
               configurable: true,
             }
           });


.. _api-property-descriptors:

9.9 API: property descriptors
-----------------------------

   The following tool methods use property descriptors:

   -  ``Object.defineProperty(obj: object, key: string|symbol, propDesc: PropertyDescriptor): object``
      :sup:`[ES5]`

      Creates or changes a property on ``obj`` whose key is ``key`` and whose
      attributes are specified via ``propDesc``. Returns the modified object.

      .. container:: sourceCode
         :name: cb163

         .. code:: js

            const obj = {};
            const result = Object.defineProperty(
              obj, 'happy', {
                value: 'yes',
                writable: true,
                enumerable: true,
                configurable: true,
              });

            // obj was returned and modified:
            assert.equal(result, obj);
            assert.deepEqual(obj, {
              happy: 'yes',
            });

   -  ``Object.defineProperties(obj: object, properties: {[k: string|symbol]: PropertyDescriptor}): object``
      :sup:`[ES5]`

      The batch version of ``Object.defineProperty()``. Each property ``p`` of
      the object ``properties`` specifies one property that is to be added to
      ``obj``: The key of ``p`` specifies the key of the property, the value of
      ``p`` is a descriptor that specifies the attributes of the property.

      .. container:: sourceCode
         :name: cb164

         .. code:: js

            const address1 = Object.defineProperties({}, {
              street: { value: 'Evergreen Terrace', enumerable: true },
              number: { value: 742, enumerable: true },
            });

   -  ``Object.create(proto: null|object, properties?: {[k: string|symbol]: PropertyDescriptor}): object``
      :sup:`[ES5]`

      First, creates an object whose prototype is ``proto``. Then, if the
      optional parameter ``properties`` has been provided, adds properties to it
      – in the same manner as ``Object.defineProperties()``. Finally, returns
      the result. For example, the following code snippet produces the same
      result as the previous snippet:

      .. container:: sourceCode
         :name: cb165

         .. code:: js

            const address2 = Object.create(Object.prototype, {
              street: { value: 'Evergreen Terrace', enumerable: true },
              number: { value: 742, enumerable: true },
            });
            assert.deepEqual(address1, address2);

   -  ``Object.getOwnPropertyDescriptor(obj: object, key: string|symbol): undefined|PropertyDescriptor``
      :sup:`[ES5]`

      Returns the descriptor of the own (non-inherited) property of ``obj``
      whose key is ``key``. If there is no such property, ``undefined`` is
      returned.

      .. container:: sourceCode
         :name: cb166

         .. code:: js

            assert.deepEqual(
              Object.getOwnPropertyDescriptor(Object.prototype, 'toString'),
              {
                value: {}.toString,
                writable: true,
                enumerable: false,
                configurable: true,
              });
            assert.equal(
              Object.getOwnPropertyDescriptor({}, 'toString'),
              undefined);

   -  ``Object.getOwnPropertyDescriptors(obj: object): {[k: string|symbol]: PropertyDescriptor}``
      :sup:`[ES2017]`

      Returns an object where each property key ``'k'`` of ``obj`` is mapped to
      the property descriptor for ``obj.k``. The result can be used as input for
      ``Object.defineProperties()`` and ``Object.create()``.

      .. container:: sourceCode
         :name: cb167

         .. code:: js

            const propertyKey = Symbol('propertyKey');
            const obj = {
              [propertyKey]: 'abc',
              get count() { return 123 },
            };

            const desc = Object.getOwnPropertyDescriptor.bind(Object);
            assert.deepEqual(
              Object.getOwnPropertyDescriptors(obj),
              {
                [propertyKey]: {
                  value: 'abc',
                  writable: true,
                  enumerable: true,
                  configurable: true
                },
                count: {
                  get: desc(obj, 'count').get, // (A)
                  set: undefined,
                  enumerable: true,
                  configurable: true
                }
              });

      Using ``desc()`` in line A is a work-around so that ``.deepEqual()``
      works.


.. _further-reading-1:

9.10 Further reading
--------------------

   The next three chapters provide more details on property attributes:

   -  `§10 “Protecting objects from being
      changed” <ch_protecting-objects.html>`__
   -  `§11 “Properties: assignment
      vs. definition” <ch_property-assignment-vs-definition.html>`__
   -  `§12 “Enumerability of properties” <ch_enumerability.html>`__

   `Comments <https://github.com/rauschma/deep-js/issues/9>`__


.. _ch_protecting-objects:


10 Protecting objects from being changed
========================================

   --------------

      -  10.1 `Levels of protection: preventing extensions, sealing, freezing <#levels-of-protection-preventing-extensions-sealing-freezing>`__
      -  10.2 `Preventing extensions of objects <#preventing-extensions-of-objects>`__

         -  10.2.1 `Checking whether an object is extensible <#checking-whether-an-object-is-extensible>`__

      -  10.3 `Sealing objects <#sealing-objects>`__

         -  10.3.1 `Checking whether an object is sealed <#checking-whether-an-object-is-sealed>`__

      -  10.4 `Freezing objects <#freezing-objects>`__

         -  10.4.1 `Checking whether an object is frozen <#checking-whether-an-object-is-frozen>`__
         -  10.4.2 `Freezing is shallow <#freezing-is-shallow>`__
         -  10.4.3 `Implementing deep freezing <#implementing-deep-freezing>`__

      -  10.5 `Further reading <#further-reading-2>`__

   --------------

   In this chapter, we’ll look at how objects can be protected from being
   changed. Examples include: Preventing properties being added and preventing
   properties being changed.

   .. container:: notebox

      |image1|  **Required knowledge: property attributes**

      For this chapter, you should be familiar with property attributes. If you
      aren’t, check out `§9 “Property attributes: an
      introduction” <ch_property-attributes-intro.html>`__.


.. _levels-of-protection-preventing-extensions-sealing-freezing:

10.1 Levels of protection: preventing extensions, sealing, freezing
-------------------------------------------------------------------

   JavaScript has three levels of protecting objects:

   -  *Preventing extensions* makes it impossible to add new properties to an
      object. We can still delete and change properties, though.

      -  Method: ``Object.preventExtensions(obj)``

   -  *Sealing* prevents extensions and makes all properties *unconfigurable*
      (roughly: we can’t change how a property works anymore).

      -  Method: ``Object.seal(obj)``

   -  *Freezing* seals an object after making all of its properties
      non-writable. That is, the object is not extensible, all properties are
      read-only and there is no way to change that.

      -  Method: ``Object.freeze(obj)``


.. _preventing-extensions-of-objects:

10.2 Preventing extensions of objects
-------------------------------------

   .. code::javascript

         Object.preventExtensions<T>(obj: T): T

   This method works as follows:

   -  If ``obj`` is not an object, it returns it.
   -  Otherwise, it changes ``obj`` so that we can’t add properties anymore and
      returns it.
   -  The type parameter ``<T>`` expresses that the result has the same type as
      the parameter.

   Let’s use ``Object.preventExtensions()`` in an example:

   .. code::javascript

         const obj = { first: 'Jane' };
         Object.preventExtensions(obj);
         assert.throws(
           () => obj.last = 'Doe',
           /^TypeError: Cannot add property last, object is not extensible$/);

   We can still delete properties, though:

   .. code::javascript

         assert.deepEquals(
           Object.keys(obj), ['first']);
         delete obj.first;
         assert.deepEquals(
           Object.keys(obj), []);


.. _checking-whether-an-object-is-extensible:

10.2.1 Checking whether an object is extensible
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         Object.isExtensible(obj: any): boolean

   Checks whether ``obj`` is extensible – for example:

   .. code:: repl

         > const obj = {};
         > Object.isExtensible(obj)
         true
         > Object.preventExtensions(obj)
         {}
         > Object.isExtensible(obj)
         false


.. _sealing-objects:

10.3 Sealing objects
--------------------

   .. code::javascript

         Object.seal<T>(obj: T): T

   Description of this method:

   -  If ``obj`` isn’t an object, it returns it.
   -  Otherwise, it prevents extensions of ``obj``, makes all of its properties
      *unconfigurable*, and returns it. The properties being unconfigurable
      means that they can’t be changed, anymore (except for their values):
      Read-only properties stay read-only, enumerable properties stay
      enumerable, etc.

   The following example demonstrates that sealing makes the object
   non-extensible and its properties unconfigurable.

   .. code::javascript

         const obj = {
           first: 'Jane',
           last: 'Doe',
         };

         // Before sealing
         assert.equal(Object.isExtensible(obj), true);
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(obj),
           {
             first: {
               value: 'Jane',
               writable: true,
               enumerable: true,
               configurable: true
             },
             last: {
               value: 'Doe',
               writable: true,
               enumerable: true,
               configurable: true
             }
           });

         Object.seal(obj);

         // After sealing
         assert.equal(Object.isExtensible(obj), false);
         assert.deepEqual(
           Object.getOwnPropertyDescriptors(obj),
           {
             first: {
               value: 'Jane',
               writable: true,
               enumerable: true,
               configurable: false
             },
             last: {
               value: 'Doe',
               writable: true,
               enumerable: true,
               configurable: false
             }
           });

   We can still change the the value of property ``.first``:

   .. code::javascript

         obj.first = 'John';
         assert.deepEqual(
           obj, {first: 'John', last: 'Doe'});

   But we can’t change its attributes:

   .. code::javascript

         assert.throws(
           () => Object.defineProperty(obj, 'first', { enumerable: false }),
           /^TypeError: Cannot redefine property: first$/);


.. _checking-whether-an-object-is-sealed:

10.3.1 Checking whether an object is sealed
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         Object.isSealed(obj: any): boolean

   Checks whether ``obj`` is sealed – for example:

   .. code:: repl

         > const obj = {};
         > Object.isSealed(obj)
         false
         > Object.seal(obj)
         {}
         > Object.isSealed(obj)
         true


.. _freezing-objects:

10.4 Freezing objects
---------------------

   .. code::javascript

         Object.freeze<T>(obj: T): T;

   -  This method immediately returns ``obj`` if it isn’t an object.
   -  Otherwise, it makes all properties non-writable, seals ``obj``, and
      returns it. That is, ``obj`` is not extensible, all properties are
      read-only and there is no way to change that.

   .. code::javascript

         const point = { x: 17, y: -5 };
         Object.freeze(point);

         assert.throws(
           () => point.x = 2,
           /^TypeError: Cannot assign to read only property 'x'/);

         assert.throws(
           () => Object.defineProperty(point, 'x', {enumerable: false}),
           /^TypeError: Cannot redefine property: x$/);

         assert.throws(
           () => point.z = 4,
           /^TypeError: Cannot add property z, object is not extensible$/);


.. _checking-whether-an-object-is-frozen:

10.4.1 Checking whether an object is frozen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. code::javascript

         Object.isFrozen(obj: any): boolean

   Checks whether ``obj`` is frozen – for example:

   .. code:: repl

         > const point = { x: 17, y: -5 };
         > Object.isFrozen(point)
         false
         > Object.freeze(point)
         { x: 17, y: -5 }
         > Object.isFrozen(point)
         true


.. _freezing-is-shallow:

10.4.2 Freezing is shallow
~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``Object.freeze(obj)`` only freezes ``obj`` and its properties. It does not
   freeze the values of those properties – for example:

   .. code::javascript

         const teacher = {
           name: 'Edna Krabappel',
           students: ['Bart'],
         };
         Object.freeze(teacher);

         // We can’t change own properties:
         assert.throws(
           () => teacher.name = 'Elizabeth Hoover',
           /^TypeError: Cannot assign to read only property 'name'/);

         // Alas, we can still change values of own properties:
         teacher.students.push('Lisa');
         assert.deepEqual(
           teacher, {
             name: 'Edna Krabappel',
             students: ['Bart', 'Lisa'],
           });


.. _implementing-deep-freezing:

10.4.3 Implementing deep freezing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we want deep freezing, we need to implement it ourselves:

   .. code::javascript

         function deepFreeze(value) {
           if (Array.isArray(value)) {
             for (const element of value) {
               deepFreeze(element);
             }
             Object.freeze(value);
           } else if (typeof value === 'object' && value !== null) {
             for (const v of Object.values(value)) {
               deepFreeze(v);
             }
             Object.freeze(value);
           } else {
             // Nothing to do: primitive values are already immutable
           } 
           return value;
         }

   Revisiting the example from the previous section, we can check if
   ``deepFreeze()`` really freezes deeply:

   .. code::javascript

         const teacher = {
           name: 'Edna Krabappel',
           students: ['Bart'],
         };
         deepFreeze(teacher);

         assert.throws(
           () => teacher.students.push('Lisa'),
           /^TypeError: Cannot add property 1, object is not extensible$/);


.. _further-reading-2:

10.5 Further reading
--------------------

   -  More information on patterns for preventing data structures from being
      changed: `§15 “Immutable wrappers for
      collections” <ch_immutable-collection-wrappers.html>`__

   `Comments <https://github.com/rauschma/deep-js/issues/10>`__

.. |image1| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px


.. _ch_property-assignment-vs-definition:


11 Properties: assignment vs. definition
========================================

   --------------

      -  11.1 `Assignment vs. definition <#assignment-vs.-definition>`__

         -  11.1.1 `Assignment <#assignment>`__
         -  11.1.2 `Definition <#definition>`__

      -  11.2 `Assignment and definition in theory (optional) <#assignment-and-definition-in-theory-optional>`__

         -  11.2.1 `Assigning to a property <#assigning-to-a-property>`__
         -  11.2.2 `Defining a property <#defining-a-property>`__

      -  11.3 `Definition and assignment in practice <#definition-and-assignment-in-practice>`__

         -  11.3.1 `Only definition allows us to create a property with arbitrary attributes <#only-definition-allows-us-to-create-a-property-with-arbitrary-attributes>`__
         -  11.3.2 `The assignment operator does not change properties in prototypes <#the-assignment-operator-does-not-change-properties-in-prototypes>`__
         -  11.3.3 `Assignment calls setters, definition doesn’t <#setters-and-assignment-vs-definition>`__
         -  11.3.4 `Inherited read-only properties prevent creating own properties via assignment <#inherited-properties-prevent-assignment>`__

      -  11.4 `Which language constructs use definition, which assignment? <#which-language-constructs-use-definition-which-assignment>`__

         -  11.4.1 `The properties of an object literal are added via definition <#the-properties-of-an-object-literal-are-added-via-definition>`__
         -  11.4.2 `The assignment operator = always uses assignment <#the-assignment-operator-always-uses-assignment>`__
         -  11.4.3 `Public class fields are added via definition <#public-class-fields-are-added-via-definition>`__

      -  11.5 `Further reading and sources of this chapter <#further-reading-and-sources-of-this-chapter-1>`__

   --------------

   There are two ways of creating or changing a property ``prop`` of an object
   ``obj``:

   -  *Assigning*: ``obj.prop = true``
   -  *Defining*: ``Object.defineProperty(obj, '', {value: true})``

   This chapter explains how they work.

   .. container:: notebox

      |image1|  **Required knowledge: property attributes and property
      descriptors**

      For this chapter, you should be familiar with property attributes and
      property descriptors. If you aren’t, check out `§9 “Property attributes:
      an introduction” <ch_property-attributes-intro.html>`__.


.. _assignment-vs.-definition:

11.1 Assignment vs. definition
------------------------------


.. _assignment:

11.1.1 Assignment
~~~~~~~~~~~~~~~~~

   We use the assignment operator ``=`` to assign a value ``value`` to a
   property ``.prop`` of an object ``obj``:

   .. code::javascript

         obj.prop = value

   This operator works differently depending on what ``.prop`` looks like:

   -  Changing properties: If there is an own data property ``.prop``,
      assignment changes its value to ``value``.

   -  Invoking setters: If there is an own or inherited setter for ``.prop``,
      assignment invokes that setter.

   -  Creating properties: If there is no own data property ``.prop`` and no own
      or inherited setter for it, assignment creates a new own data property.

   That is, the main purpose of assignment is making changes. That’s why it
   supports setters.


.. _definition:

11.1.2 Definition
~~~~~~~~~~~~~~~~~

   To define a property with the key ``propKey`` of an object ``obj``, we use an
   operation such as the following method:

   .. code::javascript

         Object.defineProperty(obj, propKey, propDesc)

   This method works differently depending on what the property looks like:

   -  Changing properties: If an own property with key ``propKey`` exists,
      defining changes its property attributes as specified by the property
      descriptor ``propDesc`` (if possible).
   -  Creating properties: Otherwise, defining creates an own property with the
      attributes specified by ``propDesc`` (if possible).

   That is, the main purpose of definition is to create an own property (even if
   there is an inherited setter, which it ignores) and to change property
   attributes.


.. _assignment-and-definition-in-theory-optional:

11.2 Assignment and definition in theory (optional)
---------------------------------------------------

   .. container:: notebox

      |image2|  **Property descriptors in the ECMAScript specification**

      In specification operations, property descriptors are not JavaScript
      objects but
      `Records <https://tc39.es/ecma262/#sec-list-and-record-specification-type>`__,
      a spec-internal data structure that has *fields*. The keys of fields are
      written in double brackets. For example, ``Desc.[[Configurable]]``
      accesses the field ``.[[Configurable]]`` of ``Desc``. These records are
      translated to and from JavaScript objects when interacting with the
      outside world.


.. _assigning-to-a-property:

11.2.1 Assigning to a property
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The actual work of assigning to a property is handled via `the following
   operation <https://tc39.es/ecma262/#sec-ordinarysetwithowndescriptor>`__ in
   the ECMAScript specification:

   ::

      OrdinarySetWithOwnDescriptor(O, P, V, Receiver, ownDesc)

   These are the parameters:

   -  ``O`` is the object that is currently being visited.
   -  ``P`` is the key of the property that we are assigning to.
   -  ``V`` is the value we are assigning.
   -  ``Receiver`` is the object where the assignment started.
   -  ``ownDesc`` is the descriptor of ``O[P]`` or ``null`` if that property
      doesn’t exist.

   The return value is a boolean that indicates whether or not the operation
   succeeded. As explained `later in this
   chapter <#control-flow-of-assignment>`__,
   strict-mode assignment throws a ``TypeError`` if
   ``OrdinarySetWithOwnDescriptor()`` fails.

   This is a high-level summary of the algorithm:

   -  It traverses the prototype chain of ``Receiver`` until it finds a property
      whose key is ``P``. The traversal is done by calling
      ``OrdinarySetWithOwnDescriptor()`` recursively. During recursion, ``O``
      changes and points to the object that is currently being visited, but
      ``Receiver`` stays the same.
   -  Depending on what the traversal finds, an own property is created in
      ``Receiver`` (where recursion started) or something else happens.

   In more detail, this algorithm works as follows:

   -  If ``ownDesc`` is ``undefined``, then we haven’t yet found a property with
      key ``P``:

      -  If ``O`` has a prototype ``parent``, then we return
         ``parent.[[Set]](P, V, Receiver)``. This continues our search. The
         method call usually ends up invoking ``OrdinarySetWithOwnDescriptor()``
         recursively.

      -  Otherwise, our search for ``P`` has failed and we set ``ownDesc`` as
         follows:

         ::

            {
              [[Value]]: undefined, [[Writable]]: true,
              [[Enumerable]]: true, [[Configurable]]: true
            }

         With this ``ownDesc``, the next ``if`` statement will create an own
         property in ``Receiver``.

   -  If ``ownDesc`` specifies a data property, then we have found a property:

      -  If ``ownDesc.[[Writable]]`` is ``false``, return ``false``. This means
         that any non-writable property ``P`` (own or inherited!) prevents
         assignment.
      -  Let ``existingDescriptor`` be ``Receiver.[[GetOwnProperty]](P)``. That
         is, retrieve the descriptor of the property where the assignment
         started. We now have:

         -  The current object ``O`` and the current property descriptor
            ``ownDesc`` on one hand.
         -  The original object ``Receiver`` and the original property
            descriptor ``existingDescriptor`` on the other hand.

      -  If ``existingDescriptor`` is not ``undefined``:

         -  (If we get here, then we are still at the beginning of the prototype
            chain – we only recurse if ``Receiver`` does not have a property
            ``P``.)
         -  The following two ``if`` conditions should never be ``true`` because
            ``ownDesc`` and ``existingDesc`` should be equal:

            -  If ``existingDescriptor`` specifies an accessor, return
               ``false``.
            -  If ``existingDescriptor.[[Writable]]`` is ``false``, return
               ``false``.

         -  Return ``Receiver.[[DefineOwnProperty]](P, { [[Value]]: V })``. This
            internal method performs definition, which we use to change the
            value of property ``Receiver[P]``. The definition algorithm is
            described in the next subsection.

      -  Else:

         -  (If we get here, then ``Receiver`` does not have an own property
            with key ``P``.)
         -  Return ``CreateDataProperty(Receiver, P, V)``. (`This
            operation <https://tc39.es/ecma262/#sec-createdataproperty>`__
            creates an own data property in its first argument.)

   -  (If we get here, then ``ownDesc`` describes an accessor property that is
      own or inherited.)
   -  Let ``setter`` be ``ownDesc.[[Set]]``.
   -  If ``setter`` is ``undefined``, return ``false``.
   -  Perform ``Call(setter, Receiver, «V»)``.
      ```Call()`` <https://tc39.es/ecma262/#sec-call>`__ invokes the function
      object ``setter`` with ``this`` set to ``Receiver`` and the single
      parameter ``V`` (French quotes ``«»`` are used for lists in the
      specification).
   -  Return ``true``.


.. _control-flow-of-assignment:

11.2.1.1 How do we get from an assignment to ``OrdinarySetWithOwnDescriptor()``?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Evaluating an assignment without destructuring involves the following steps:

   -  In the spec, evaluation starts in `the section on the runtime semantics of
      ``AssignmentExpression`` <https://tc39.es/ecma262/#sec-assignment-operators-runtime-semantics-evaluation>`__.
      This section handles providing names for anonymous functions,
      destructuring, and more.
   -  If there is no destructuring pattern, then
      ```PutValue()`` <https://tc39.es/ecma262/#sec-putvalue>`__ is used to make
      the assignment.
   -  For property assignments, ``PutValue()`` invokes the internal method
      ``.[[Set]]()``.
   -  For ordinary objects,
      ```.[[Set]]()`` <https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots-set-p-v-receiver>`__
      calls ``OrdinarySet()`` (which calls ``OrdinarySetWithOwnDescriptor()``)
      and returns the result.

   Notably, ``PutValue()`` throws a ``TypeError`` in strict mode if the result
   of ``.[[Set]]()`` is ``false``.


.. _defining-a-property:

11.2.2 Defining a property
~~~~~~~~~~~~~~~~~~~~~~~~~~

   The actual work of defining a property is handled via `the following
   operation <https://tc39.es/ecma262/#sec-validateandapplypropertydescriptor>`__
   in the ECMAScript specification:

   ::

      ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current)

   The parameters are:

   -  The object ``O`` where we want to define a property. There is a special
      validation-only mode where ``O`` is ``undefined``. We are ignoring this
      mode here.
   -  The property key ``P`` of the property we want to define.
   -  ``extensible`` indicates if ``O`` is extensible.
   -  ``Desc`` is a property descriptor specifying the attributes we want the
      property to have.
   -  ``current`` contains the property descriptor of an own property ``O[P]``
      if it exists. Otherwise, ``current`` is ``undefined``.

   The result of the operation is a boolean that indicates if it succeeded.
   Failure can have different consequences. Some callers ignore the result.
   Others, such as ``Object.defineProperty()``, throw an exception if the result
   is ``false``.

   This is a summary of the algorithm:

   -  If ``current`` is ``undefined``, then property ``P`` does not currently
      exist and must be created.

      -  If ``extensible`` is ``false``, return ``false`` indicating that the
         property could not be added.
      -  Otherwise, check ``Desc`` and create either a data property or an
         accessor property.
      -  Return ``true``.

   -  If ``Desc`` doesn’t have any fields, return ``true`` indicating that the
      operation succeeded (because no changes had to be made).

   -  If ``current.[[Configurable]]`` is ``false``:

      -  (``Desc`` is not allowed to change attributes other than ``value``.)
      -  If ``Desc.[[Configurable]]`` exists, it must have the same value as
         ``current.[[Configurable]]``. If not, return ``false``.
      -  Same check: ``Desc.[[Enumerable]]``

   -  Next, we *validate* the property descriptor ``Desc``: Can the attributes
      described by ``current`` be changed to the values specified by ``Desc``?
      If not, return ``false``. If yes, go on.

      -  If the descriptor is *generic* (with no attributes specific to data
         properties or accessor properties), then validation is successful and
         we can move on.
      -  Else if one descriptor specifies a data property and the other an
         accessor property:

         -  The current property must be configurable (otherwise its attributes
            can’t be changed as necessary). If not, ``false`` is returned.
         -  Change the current property from a data property to an accessor
            property or vice versa. When doing so, the values of
            ``.[[Configurable]]`` and ``.[[Enumerable]]`` are preserved, all
            other attributes get `default
            values <#property-attributes>`__
            (``undefined`` for object-valued attributes, ``false`` for
            boolean-valued attributes).

      -  Else if both descriptors specify data properties:

         -  If both ``current.[[Configurable]]`` and ``current.[[Writable]]``
            are ``false``, then no changes are allowed and ``Desc`` and
            ``current`` must specify the same attributes:

            -  (Due to ``current.[[Configurable]]`` being ``false``,
               ``Desc.[[Configurable]]`` and ``Desc.[[Enumerable]]`` were
               already checked previously and have the correct values.)
            -  If ``Desc.[[Writable]]`` exists and is ``true``, then return
               ``false``.
            -  If ``Desc.[[Value]]`` exists and does not have the same value as
               ``current.[[Value]]``, then return ``false``.
            -  There is nothing more to do. Return ``true`` indicating that the
               algorithm succeeded.
            -  (Note that normally, we can’t change any attributes of a
               non-configurable property other than its value. The one exception
               to this rule is that we can always go from writable to
               non-writable. This algorithm handles this exception correctly.)

      -  Else (both descriptors specify accessor properties):

         -  If ``current.[[Configurable]]`` is ``false``, then no changes are
            allowed and ``Desc`` and ``current`` must specify the same
            attributes:

            -  (Due to ``current.[[Configurable]]`` being ``false``,
               ``Desc.[[Configurable]]`` and ``Desc.[[Enumerable]]`` were
               already checked previously and have the correct values.)
            -  If ``Desc.[[Set]]`` exists, it must have the same value as
               ``current.[[Set]]``. If not, return ``false``.
            -  Same check: ``Desc.[[Get]]``
            -  There is nothing more to do. Return ``true`` indicating that the
               algorithm succeeded.

   -  Set the attributes of the property with key ``P`` to the values specified
      by ``Desc``. Due to validation, we can be sure that all of the changes are
      allowed.

   -  Return ``true``.


.. _definition-and-assignment-in-practice:

11.3 Definition and assignment in practice
------------------------------------------

   This section describes some consequences of how property definition and
   assignment work.


.. _only-definition-allows-us-to-create-a-property-with-arbitrary-attributes:

11.3.1 Only definition allows us to create a property with arbitrary attributes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we create an own property via assignment, it always creates properties
   whose attributes ``writable``, ``enumerable``, and ``configurable`` are all
   ``true``.

   .. code::javascript

         const obj = {};
         obj.dataProp = 'abc';
         assert.deepEqual(
           Object.getOwnPropertyDescriptor(obj, 'dataProp'),
           {
             value: 'abc',
             writable: true,
             enumerable: true,
             configurable: true,
           });

   Therefore, if we want to specify arbitrary attributes, we must use
   definition.

   And while we can create getters and setters inside object literals, we can’t
   add them later via assignment. Here, too, we need definition.


.. _the-assignment-operator-does-not-change-properties-in-prototypes:

11.3.2 The assignment operator does not change properties in prototypes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Let us consider the following setup, where ``obj`` inherits the property
   ``prop`` from ``proto``.

   .. code::javascript

         const proto = { prop: 'a' };
         const obj = Object.create(proto);

   We can’t (destructively) change ``proto.prop`` by assigning to ``obj.prop``.
   Doing so creates a new own property:

   .. code::javascript

         assert.deepEqual(
           Object.keys(obj), []);

         obj.prop = 'b';

         // The assignment worked:
         assert.equal(obj.prop, 'b');

         // But we created an own property and overrode proto.prop,
         // we did not change it:
         assert.deepEqual(
           Object.keys(obj), ['prop']);
         assert.equal(proto.prop, 'a');

   The rationale for this behavior is as follows: Prototypes can have properties
   whose values are shared by all of their descendants. If we want to change
   such a property in only one descendant, we must do so non-destructively, via
   overriding. Then the change does not affect the other descendants.


.. _setters-and-assignment-vs-definition:

11.3.3 Assignment calls setters, definition doesn’t
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   What is the difference between defining the property ``.prop`` of ``obj``
   versus assigning to it?

   If we define, then our intention is to either create or change an own
   (non-inherited) property of ``obj``. Therefore, definition ignores the
   inherited setter for ``.prop`` in the following example:

   .. code::javascript

         let setterWasCalled = false;
         const proto = {
           get prop() {
             return 'protoGetter';
           },
           set prop(x) {
             setterWasCalled = true;
           },
         };
         const obj = Object.create(proto);

         assert.equal(obj.prop, 'protoGetter');

         // Defining obj.prop:
         Object.defineProperty(
           obj, 'prop', { value: 'objData' });
         assert.equal(setterWasCalled, false);

         // We have overridden the getter:
         assert.equal(obj.prop, 'objData');

   If, instead, we assign to ``.prop``, then our intention is often to change
   something that already exists and that change should be handled by the
   setter:

   .. code::javascript

         let setterWasCalled = false;
         const proto = {
           get prop() {
             return 'protoGetter';
           },
           set prop(x) {
             setterWasCalled = true;
           },
         };
         const obj = Object.create(proto);

         assert.equal(obj.prop, 'protoGetter');

         // Assigning to obj.prop:
         obj.prop = 'objData';
         assert.equal(setterWasCalled, true);

         // The getter still active:
         assert.equal(obj.prop, 'protoGetter');


.. _inherited-properties-prevent-assignment:

11.3.4 Inherited read-only properties prevent creating own properties via assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   What happens if ``.prop`` is read-only in a prototype?

   .. code::javascript

         const proto = Object.defineProperty(
           {}, 'prop', {
             value: 'protoValue',
             writable: false,
           });

   In any object that inherits the read-only ``.prop`` from ``proto``, we can’t
   use assignment to create an own property with the same key – for example:

   .. code::javascript

         const obj = Object.create(proto);
         assert.throws(
           () => obj.prop = 'objValue',
           /^TypeError: Cannot assign to read only property 'prop'/);

   Why can’t we assign? The rationale is that overriding an inherited property
   by creating an own property can be seen as `non-destructively
   changing <ch_updating-destructively-and-nondestructively.html>`__ the
   inherited property. Arguably, if a property is non-writable, we shouldn’t be
   able to do that.

   However, defining ``.prop`` still works and lets us override:

   .. code::javascript

         Object.defineProperty(
           obj, 'prop', { value: 'objValue' });
         assert.equal(obj.prop, 'objValue');

   Accessor properties that don’t have a setter are also considered to be
   read-only:

   .. code::javascript

         const proto = {
           get prop() {
             return 'protoValue';
           }
         };
         const obj = Object.create(proto);
         assert.throws(
           () => obj.prop = 'objValue',
           /^TypeError: Cannot set property prop of #<Object> which has only a getter$/);

   .. container:: notebox

      |cogs-regular.svg|  **The “override mistake”: pros and cons**

      The fact that read-only properties prevent assignment earlier in the
      prototype chain, has been given the name *override mistake*:

      -  It was introduced in ECMAScript 5.1.
      -  On one hand, this behavior is consistent with how prototypal
         inheritance and setters work. (So, arguably, it is *not* a mistake.)
      -  On the other hand, with the behavior, deep-freezing the global object
         causes unwanted side-effects.
      -  There was an attempt to change the behavior, but that broke the library
         Lodash and was abandoned (`pull request on
         GitHub <https://github.com/tc39/ecma262/pull/1320#issuecomment-443485524>`__).
      -  Background knowledge:

         -  `Pull request on
            GitHub <https://github.com/tc39/ecma262/pull/1307>`__
         -  `Wiki page on
            ECMAScript.org <http://wiki.ecmascript.org/doku.php?id=strawman:fixing_override_mistake>`__
            (`archived <https://web.archive.org/web/20141230041441/http://wiki.ecmascript.org/doku.php?id=strawman:fixing_override_mistake>`__)


.. _which-language-constructs-use-definition-which-assignment:

11.4 Which language constructs use definition, which assignment?
----------------------------------------------------------------

   In this section, we examine where the language uses definition and where it
   uses assignment. We detect which operation is used by tracking whether or not
   inherited setters are called. See `§11.3.3 “Assignment calls setters,
   definition
   doesn’t” <#setters-and-assignment-vs-definition>`__
   for more information.


.. _the-properties-of-an-object-literal-are-added-via-definition:

11.4.1 The properties of an object literal are added via definition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   When we create properties via an object literal, JavaScript always uses
   definition (and therefore never calls inherited setters):

   .. code::javascript

         let lastSetterArgument;
         const proto = {
           set prop(x) {
             lastSetterArgument = x;
           },
         };
         const obj = {
           __proto__: proto,
           prop: 'abc',
         };
         assert.equal(lastSetterArgument, undefined);


.. _the-assignment-operator-always-uses-assignment:

11.4.2 The assignment operator ``=`` always uses assignment
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The assignment operator ``=`` always uses assignment to create or change
   properties.

   .. code::javascript

         let lastSetterArgument;
         const proto = {
           set prop(x) {
             lastSetterArgument = x;
           },
         };
         const obj = Object.create(proto);

         // Normal assignment:
         obj.prop = 'abc';
         assert.equal(lastSetterArgument, 'abc');

         // Assigning via destructuring:
         [obj.prop] = ['def'];
         assert.equal(lastSetterArgument, 'def');


.. _public-class-fields-are-added-via-definition:

11.4.3 Public class fields are added via definition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Alas, even though public class fields have the same syntax as assignment,
   they do *not* use assignment to create properties, they use definition (like
   properties in object literals):

   .. code::javascript

         let lastSetterArgument1;
         let lastSetterArgument2;
         class A {
           set prop1(x) {
             lastSetterArgument1 = x;
           }
           set prop2(x) {
             lastSetterArgument2 = x;
           }
         }
         class B extends A {
           prop1 = 'one';
           constructor() {
             super();
             this.prop2 = 'two';
           }
         }
         new B();

         // The public class field uses definition:
         assert.equal(lastSetterArgument1, undefined);
         // Inside the constructor, we trigger assignment:
         assert.equal(lastSetterArgument2, 'two');


.. _further-reading-and-sources-of-this-chapter-1:

11.5 Further reading and sources of this chapter
------------------------------------------------

   -  `Section “Prototype
      chains” <https://exploringjs.com/impatient-js/ch_proto-chains-classes.html#prototype-chains>`__
      in “JavaScript for impatient programmers”

   -  `Email by Allen Wirfs-Brock to the es-discuss mailing
      list <https://mail.mozilla.org/pipermail/es-discuss/2012-July/024227.html>`__:
      “The distinction between assignment and definition […] was not very
      important when all ES had was data properties and there was no way for ES
      code to manipulate property attributes.” [That changed with ECMAScript 5.]

   `Comments <https://github.com/rauschma/deep-js/issues/11>`__

.. |image1| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px
.. |image2| image:: https://exploringjs.com/deep-js/img-book/img/icons/lightbulb-regular.svg
   :height: 24px



.. _ch_enumerability:


12 Enumerability of properties
==============================

   --------------

      -  12.1 `How enumerability affects property-iterating constructs <#how-enumerability-affects-property-iterating-constructs>`__

         -  12.1.1 `Operations that only consider enumerable properties <#operations-that-only-consider-enumerable-properties>`__
         -  12.1.2 `Operations that consider both enumerable and non-enumerable properties <#operations-that-consider-both-enumerable-and-non-enumerable-properties>`__
         -  12.1.3 `Naming rules for introspective operations <#naming-rules-for-introspective-operations>`__

      -  12.2 `The enumerability of pre-defined and created properties <#the-enumerability-of-pre-defined-and-created-properties>`__
      -  12.3 `Use cases for enumerability <#use-cases-for-enumerability>`__

         -  12.3.1 `Use case: Hiding properties from the for-in loop <#for-in-loop>`__
         -  12.3.2 `Use case: Marking properties as not to be copied <#use-case-marking-properties-as-not-to-be-copied>`__
         -  12.3.3 `Marking properties as private <#marking-properties-as-private>`__
         -  12.3.4 `Hiding own properties from JSON.stringify() <#hiding-own-properties-from-json.stringify>`__

      -  12.4 `Conclusion <#conclusion>`__

   --------------

   Enumerability is an *attribute* of object properties. In this chapter, we
   take a closer look at how it is used and how it influences operations such as
   ``Object.keys()`` and ``Object.assign()``.

   .. container:: notebox

      |image1|  **Required knowledge: property attributes**

      For this chapter, you should be familiar with property attributes. If you
      aren’t, check out `§9 “Property attributes: an
      introduction” <ch_property-attributes-intro.html>`__.


.. _how-enumerability-affects-property-iterating-constructs:

12.1 How enumerability affects property-iterating constructs
------------------------------------------------------------

   To demonstrate how various operations are affected by enumerability, we use
   the following object ``obj`` whose prototype is ``proto``.

   .. code::javascript

         const protoEnumSymbolKey = Symbol('protoEnumSymbolKey');
         const protoNonEnumSymbolKey = Symbol('protoNonEnumSymbolKey');
         const proto = Object.defineProperties({}, {
           protoEnumStringKey: {
             value: 'protoEnumStringKeyValue',
             enumerable: true,
           },
           [protoEnumSymbolKey]: {
             value: 'protoEnumSymbolKeyValue',
             enumerable: true,
           },
           protoNonEnumStringKey: {
             value: 'protoNonEnumStringKeyValue',
             enumerable: false,
           },
           [protoNonEnumSymbolKey]: {
             value: 'protoNonEnumSymbolKeyValue',
             enumerable: false,
           },
         });

         const objEnumSymbolKey = Symbol('objEnumSymbolKey');
         const objNonEnumSymbolKey = Symbol('objNonEnumSymbolKey');
         const obj = Object.create(proto, {
           objEnumStringKey: {
             value: 'objEnumStringKeyValue',
             enumerable: true,
           },
           [objEnumSymbolKey]: {
             value: 'objEnumSymbolKeyValue',
             enumerable: true,
           },
           objNonEnumStringKey: {
             value: 'objNonEnumStringKeyValue',
             enumerable: false,
           },
           [objNonEnumSymbolKey]: {
             value: 'objNonEnumSymbolKeyValue',
             enumerable: false,
           },
         });


.. _operations-that-only-consider-enumerable-properties:

12.1.1 Operations that only consider enumerable properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: tbl:operations-ignoring-non-enumerable-properties

      .. table:: Table 2: Operations that ignore non-enumerable properties.

         ==================== ====== =========== =========== =========
         Operation                   String keys Symbol keys Inherited
         ==================== ====== =========== =========== =========
         ``Object.keys()``    ES5    ``✔``       ``✘``       ``✘``
         ``Object.values()``  ES2017 ``✔``       ``✘``       ``✘``
         ``Object.entries()`` ES2017 ``✔``       ``✘``       ``✘``
         Spreading ``{...x}`` ES2018 ``✔``       ``✔``       ``✘``
         ``Object.assign()``  ES6    ``✔``       ``✔``       ``✘``
         ``JSON.stringify()`` ES5    ``✔``       ``✘``       ``✘``
         ``for-in``           ES1    ``✔``       ``✘``       ``✔``
         ==================== ====== =========== =========== =========

   The following operations (summarized in
   tbl. `2 <#tbl:operations-ignoring-non-enumerable-properties>`__) only
   consider enumerable properties:

   -  ``Object.keys()`` :sup:`[ES5]` returns the keys of enumerable own
      string-keyed properties.

      .. container:: sourceCode
         :name: cb204

         .. code:: repl

            > Object.keys(obj)
            [ 'objEnumStringKey' ]

   -  ``Object.values()`` :sup:`[ES2017]` returns the values of enumerable own
      string-keyed properties.

      .. container:: sourceCode
         :name: cb205

         .. code:: repl

            > Object.values(obj)
            [ 'objEnumStringKeyValue' ]

   -  ``Object.entries()`` :sup:`[ES2017]` returns key-value pairs for
      enumerable own string-keyed properties. (Note that
      ``Object.fromEntries()`` does accept symbols as keys, but only creates
      enumerable properties.)

      .. container:: sourceCode
         :name: cb206

         .. code:: repl

            > Object.entries(obj)
            [ [ 'objEnumStringKey', 'objEnumStringKeyValue' ] ]

   -  Spreading into object literals :sup:`[ES2018]` only considers own
      enumerable properties (with string keys or symbol keys).

      .. container:: sourceCode
         :name: cb207

         .. code:: repl

            > const copy = {...obj};
            > Reflect.ownKeys(copy)
            [ 'objEnumStringKey', objEnumSymbolKey ]

   -  ``Object.assign()`` :sup:`[ES6]` only copies enumerable own properties
      (with either string keys or symbol keys).

      .. container:: sourceCode
         :name: cb208

         .. code:: repl

            > const copy = Object.assign({}, obj);
            > Reflect.ownKeys(copy)
            [ 'objEnumStringKey', objEnumSymbolKey ]

   -  ``JSON.stringify()`` :sup:`[ES5]` only stringifies enumerable own
      properties with string keys.

      .. container:: sourceCode
         :name: cb209

         .. code:: repl

            > JSON.stringify(obj)
            '{"objEnumStringKey":"objEnumStringKeyValue"}'

   -  ``for-in`` loop :sup:`[ES1]` traverses the keys of own and inherited
      enumerable string-keyed properties.

      .. container:: sourceCode
         :name: cb210

         .. code:: js

            const propKeys = [];
            for (const propKey in obj) {
              propKeys.push(propKey);
            }
            assert.deepEqual(
              propKeys, ['objEnumStringKey', 'protoEnumStringKey']);

   ``for-in`` is the only built-in operation where enumerability matters for
   inherited properties. All other operations only work with own properties.


.. _operations-that-consider-both-enumerable-and-non-enumerable-properties:

12.1.2 Operations that consider both enumerable and non-enumerable properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: tbl:operations-considering-enumerable-and-nonenumerable-properties

      .. table:: Table 3: Operations that consider both enumerable and
      non-enumerable properties.

         ====================================== ====== ========= ========= =========
         Operation                                     Str. keys Sym. keys Inherited
         ====================================== ====== ========= ========= =========
         ``Object.getOwnPropertyNames()``       ES5    ``✔``     ``✘``     ``✘``
         ``Object.getOwnPropertySymbols()``     ES6    ``✘``     ``✔``     ``✘``
         ``Reflect.ownKeys()``                  ES6    ``✔``     ``✔``     ``✘``
         ``Object.getOwnPropertyDescriptors()`` ES2017 ``✔``     ``✔``     ``✘``
         ====================================== ====== ========= ========= =========

   The following operations (summarized in
   tbl. `3 <#tbl:operations-considering-enumerable-and-nonenumerable-properties>`__)
   consider both enumerable and non-enumerable properties:

   -  ``Object.getOwnPropertyNames()`` :sup:`[ES5]` lists the keys of all own
      string-keyed properties.

      .. container:: sourceCode
         :name: cb211

         .. code:: repl

            > Object.getOwnPropertyNames(obj)
            [ 'objEnumStringKey', 'objNonEnumStringKey' ]

   -  ``Object.getOwnPropertySymbols()`` :sup:`[ES6]` lists the keys of all own
      symbol-keyed properties.

      .. container:: sourceCode
         :name: cb212

         .. code:: repl

            > Object.getOwnPropertySymbols(obj)
            [ objEnumSymbolKey, objNonEnumSymbolKey ]

   -  ``Reflect.ownKeys()`` :sup:`[ES6]` lists the keys of all own properties.

      .. container:: sourceCode
         :name: cb213

         .. code:: repl

            > Reflect.ownKeys(obj)
            [
              'objEnumStringKey',
              'objNonEnumStringKey',
              objEnumSymbolKey,
              objNonEnumSymbolKey
            ]

   -  ``Object.getOwnPropertyDescriptors()`` :sup:`[ES2017]` lists the property
      descriptors of all own properties.

      .. container:: sourceCode
         :name: cb214

         .. code:: repl

            > Object.getOwnPropertyDescriptors(obj)
            {
              objEnumStringKey: {
                value: 'objEnumStringKeyValue',
                writable: false,
                enumerable: true,
                configurable: false
              },
              objNonEnumStringKey: {
                value: 'objNonEnumStringKeyValue',
                writable: false,
                enumerable: false,
                configurable: false
              },
              [objEnumSymbolKey]: {
                value: 'objEnumSymbolKeyValue',
                writable: false,
                enumerable: true,
                configurable: false
              },
              [objNonEnumSymbolKey]: {
                value: 'objNonEnumSymbolKeyValue',
                writable: false,
                enumerable: false,
                configurable: false
              }
            }


.. _naming-rules-for-introspective-operations:

12.1.3 Naming rules for introspective operations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   *Introspection* enables a program to examine the structure of values at
   runtime. It is *metaprogramming*: Normal programming is about writing
   programs; metaprogramming is about examining and/or changing programs.

   In JavaScript, common introspective operations have short names, while rarely
   used operations have long names. Ignoring non-enumerable properties is the
   norm, which is why operations that do that have short names and operations
   that don’t, long names:

   -  ``Object.keys()`` ignores non-enumerable properties.
   -  ``Object.getOwnPropertyNames()`` lists the string keys of all own
      properties.

   However, ``Reflect`` methods (such as ``Reflect.ownKeys()``) deviate from
   this rule because ``Reflect`` provides operations that are more “meta” and
   related to Proxies.

   Additionally, the following distinction is made (since ES6, which introduced
   symbols):

   -  *Property keys* are either strings or symbols.
   -  *Property names* are property keys that are strings.
   -  *Property symbols* are property keys that are symbols.

   Therefore, a better name for ``Object.keys()`` would now be
   ``Object.names()``.


.. _the-enumerability-of-pre-defined-and-created-properties:

12.2 The enumerability of pre-defined and created properties
------------------------------------------------------------

   In this section, we’ll abbreviate ``Object.getOwnPropertyDescriptor()`` like
   this:

   .. code::javascript

         const desc = Object.getOwnPropertyDescriptor.bind(Object);

   Most data properties are created with the following attributes:

   .. code::javascript

         {
           writable: true,
           enumerable: false,
           configurable: true,
         }

   That includes:

   -  Assignment
   -  Object literals
   -  Public class fields
   -  ``Object.fromEntries()``

   The most important non-enumerable properties are:

   -  Prototype properties of built-in classes

      .. container:: sourceCode
         :name: cb217

         .. code:: repl

            > desc(Object.prototype, 'toString').enumerable
            false

   -  Prototype properties created via user-defined classes

      .. container:: sourceCode
         :name: cb218

         .. code:: repl

            > desc(class {foo() {}}.prototype, 'foo').enumerable
            false

   -  Property ``.length`` of Arrays:

      .. container:: sourceCode
         :name: cb219

         .. code:: repl

            > Object.getOwnPropertyDescriptor([], 'length')
            { value: 0, writable: true, enumerable: false, configurable: false }

   -  Property ``.length`` of strings (note that all properties of primitive
      values are read-only):

      .. container:: sourceCode
         :name: cb220

         .. code:: repl

            > Object.getOwnPropertyDescriptor('', 'length')
            { value: 0, writable: false, enumerable: false, configurable: false }

   We’ll look at the use cases for enumerability next, which will tell us why
   some properties are enumerable and others aren’t.


.. _use-cases-for-enumerability:

12.3 Use cases for enumerability
--------------------------------

   Enumerability is an inconsistent feature. It does have use cases, but there
   is always some kind of caveat. In this section, we look at the use cases and
   the caveats.


.. _for-in-loop:

12.3.1 Use case: Hiding properties from the ``for-in`` loop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The ``for-in`` loop traverses *all* enumerable string-keyed properties of an
   object, own and inherited ones. Therefore, the attribute ``enumerable`` is
   used to hide properties that should not be traversed. That was the reason for
   introducing enumerability in ECMAScript 1.

   In general, it is best to avoid ``for-in``. The next two subsections explain
   why. The following function will help us demonstrate how ``for-in`` works.

   .. code::javascript

         function listPropertiesViaForIn(obj) {
           const result = [];
           for (const key in obj) {
             result.push(key);
           }
           return result;
         }


.. _the-caveats-of-using-for-in-for-objects:

12.3.1.1 The caveats of using ``for-in`` for objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``for-in`` iterates over all properties, including inherited ones:

   .. code::javascript

         const proto = {enumerableProtoProp: 1};
         const obj = {
           __proto__: proto,
           enumerableObjProp: 2,
         };
         assert.deepEqual(
           listPropertiesViaForIn(obj),
           ['enumerableObjProp', 'enumerableProtoProp']);

   With normal plain objects, ``for-in`` doesn’t see inherited methods such as
   ``Object.prototype.toString()`` because they are all non-enumerable:

   .. code::javascript

         const obj = {};
         assert.deepEqual(
           listPropertiesViaForIn(obj),
           []);

   In user-defined classes, all inherited properties are also non-enumerable and
   therefore ignored:

   .. code::javascript

         class Person {
           constructor(first, last) {
             this.first = first;
             this.last = last;
           }
           getName() {
             return this.first + ' ' + this.last;
           }
         }
         const jane = new Person('Jane', 'Doe');
         assert.deepEqual(
           listPropertiesViaForIn(jane),
           ['first', 'last']);

   **Conclusion:** In objects, ``for-in`` considers inherited properties and we
   usually want to ignore those. Then it is better to combine a ``for-of`` loop
   with ``Object.keys()``, ``Object.entries()``, etc.


.. _the-caveats-of-using-for-in-for-arrays:

12.3.1.2 The caveats of using ``for-in`` for Arrays
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The own property ``.length`` is non-enumerable in Arrays and strings and
   therefore ignored by ``for-in``:

   .. code:: repl

         > listPropertiesViaForIn(['a', 'b'])
         [ '0', '1' ]
         > listPropertiesViaForIn('ab')
         [ '0', '1' ]

   However, it is generally not safe to use ``for-in`` to iterate over the
   indices of an Array because it considers both inherited and own properties
   that are not indices. The following example demonstrate what happens if an
   Array has an own non-index property:

   .. code::javascript

         const arr1 = ['a', 'b'];
         assert.deepEqual(
           listPropertiesViaForIn(arr1),
           ['0', '1']);

         const arr2 = ['a', 'b'];
         arr2.nonIndexProp = 'yes';
         assert.deepEqual(
           listPropertiesViaForIn(arr2),
           ['0', '1', 'nonIndexProp']);

   **Conclusion:** ``for-in`` should not be used for iterating over the indices
   of an Array because it considers both index properties and non-index
   properties:

   -  If you are interested in the keys of an Array, use the Array method
      ``.keys()``:

      .. container:: sourceCode
         :name: cb227

         .. code:: repl

            > [...['a', 'b', 'c'].keys()]
            [ 0, 1, 2 ]

   -  If you want to iterate over the elements of an Array, use a ``for-of``
      loop, which has the added benefit of also working with other iterable data
      structures.


.. _use-case-marking-properties-as-not-to-be-copied:

12.3.2 Use case: Marking properties as not to be copied
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   By making properties non-enumerable, we can hide them from some copying
   operations. Let us first examine two historical copying operations before
   moving on to more modern copying operations.


.. _historical-copying-operation-prototypes-object.extend:

12.3.2.1 Historical copying operation: Prototype’s ``Object.extend()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   `Prototype <https://en.wikipedia.org/wiki/Prototype_JavaScript_Framework>`__
   is a JavaScript framework that was created by Sam Stephenson in February 2005
   as part of the foundation for Ajax support in Ruby on Rails.

   `Prototype’s
   ``Object.extend(destination, source)`` <http://api.prototypejs.org/language/Object/extend/>`__
   copies all enumerable own and inherited properties of ``source`` into own
   properties of ``destination``. `It is
   implemented <https://github.com/prototypejs/prototype/blob/5fddd3e/src/prototype/lang/object.js#L88>`__
   as follows:

   .. code::javascript

         function extend(destination, source) {
           for (var property in source)
             destination[property] = source[property];
           return destination;
         }

   If we use ``Object.extend()`` with an object, we can see that it copies
   inherited properties into own properties and ignores non-enumerable
   properties (it also ignores symbol-keyed properties). All of this is due to
   how ``for-in`` works.

   .. code::javascript

         const proto = Object.defineProperties({}, {
           enumProtoProp: {
             value: 1,
             enumerable: true,
           },
           nonEnumProtoProp: {
             value: 2,
             enumerable: false,
           },
         });
         const obj = Object.create(proto, {
           enumObjProp: {
             value: 3,
             enumerable: true,
           },
           nonEnumObjProp: {
             value: 4,
             enumerable: false,
           },
         });

         assert.deepEqual(
           extend({}, obj),
           {enumObjProp: 3, enumProtoProp: 1});


.. _historical-copying-operation-jquerys-.extend:

12.3.2.2 Historical copying operation: jQuery’s ``$.extend()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   `jQuery’s
   ``$.extend(target, source1, source2, ···)`` <https://api.jquery.com/jquery.extend/>`__
   works similar to ``Object.extend()``:

   -  It copies all enumerable own and inherited properties of ``source1`` into
      own properties of ``target``.
   -  Then it does the same with ``source2``.
   -  Etc.


.. _the-downsides-of-enumerability-driven-copying:

12.3.2.3 The downsides of enumerability-driven copying
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Basing copying on enumerability has several downsides:

   -  While enumerability is useful for hiding inherited properties, it is
      mainly used in this manner because we usually only want to copy own
      properties into own properties. The same effect can be better achieved by
      ignoring inherited properties.

   -  Which properties to copy often depends on the task at hand; it rarely
      makes sense to have a single flag for all use cases. A better choice is to
      provide a copying operation with a *predicate* (a callback that returns a
      boolean) that tells it when to ignore properties.

   -  Enumerability conveniently hides the own property ``.length`` of Arrays
      when copying. But that is an incredibly rare exceptional case: a magic
      property that both influences sibling properties and is influenced by
      them. If we implement this kind of magic ourselves, we will use
      (inherited) getters and/or setters, not (own) data properties.


.. _object.assign-es5:

12.3.2.4 ``Object.assign()`` :sup:`[ES5]`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In ES6,
   ```Object.assign(target, source_1, source_2, ···)`` <https://exploringjs.com/impatient-js/ch_single-objects.html#object.assign>`__
   can be used to merge the sources into the target. All own enumerable
   properties of the sources are considered (with either string keys or symbol
   keys). ``Object.assign()`` uses a “get” operation to read a value from a
   source and a “set” operation to write a value to the target.

   With regard to enumerability, ``Object.assign()`` continues the tradition of
   ``Object.extend()`` and ``$.extend()``. `Quoting Yehuda
   Katz <https://mail.mozilla.org/pipermail/es-discuss/2012-October/025934.html>`__:

      ``Object.assign`` would pave the cowpath of all of the ``extend()`` APIs
      already in circulation. We thought the precedent of not copying enumerable
      methods in those cases was enough reason for ``Object.assign`` to have
      this behavior.

   In other words: ``Object.assign()`` was created with an upgrade path from
   ``$.extend()`` (and similar) in mind. Its approach is cleaner than
   ``$.extend``\ ’s because it ignores inherited properties.


.. _a-rare-example-of-non-enumerability-being-useful-when-copying:

12.3.2.5 A rare example of non-enumerability being useful when copying
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Cases where non-enumerability helps are few. One rare example is `a recent
   issue that the library ``fs-extra``
   had <https://github.com/jprichardson/node-fs-extra/issues/577>`__:

   -  The built-in Node.js module ``fs`` has a property ``.promises`` that
      contains an object with a Promise-based version of the ``fs`` API. At the
      time of the issue, reading ``.promise`` led to the following warning being
      logged to the console:

      ::

         ExperimentalWarning: The fs.promises API is experimental

   -  In addition to providing its own functionality, ``fs-extra`` also
      re-exports everything that’s in ``fs``. For CommonJS modules, that means
      copying all properties of ``fs`` into the ``module.exports`` of
      ``fs-extra`` (`via
      ``Object.assign()`` <https://github.com/jprichardson/node-fs-extra/blob/master/lib/index.js>`__).
      And when ``fs-extra`` did that, it triggered the warning. That was
      confusing because it happened every time ``fs-extra`` was loaded.

   -  `A quick fix <https://github.com/nodejs/node/pull/20504>`__ was to make
      property ``fs.promises`` non-enumerable. Afterwards, ``fs-extra`` ignored
      it.


.. _marking-properties-as-private:

12.3.3 Marking properties as private
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we make a property non-enumerable, it can’t by seen by ``Object.keys()``,
   the ``for-in`` loop, etc., anymore. With regard to those mechanisms, the
   property is private.

   However, there are several problems with this approach:

   -  When copying an object, we normally want to copy private properties. That
      clashes with making properties non-enumerable that shouldn’t be copied
      (see previous section).
   -  The property isn’t really private. Getting, setting and several other
      mechanisms make no distinction between enumerable and non-enumerable
      properties.
   -  When working with code either as source or interactively, we can’t
      immediately see whether a property is enumerable or not. A naming
      convention (such as prefixing property names with an underscore) is easier
      to discover.
   -  We can’t use enumerability to distinguish between public and private
      methods because methods in prototypes are non-enumerable by default.


.. _hiding-own-properties-from-json.stringify:

12.3.4 Hiding own properties from ``JSON.stringify()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``JSON.stringify()`` does not include properties in its output that are
   non-enumerable. We can therefore use enumerability to determine which own
   properties should be exported to JSON. This use case is similar to the
   previous one, marking properties as private. But it is also different because
   this is more about exporting and slightly different considerations apply. For
   example: Can an object be completely reconstructed from JSON?

   As an alternative to enumerability, an object can implement the method
   ``.toJSON()`` and ``JSON.stringify()`` stringifies whatever that method
   returns, instead of the object itself. The next example demonstrates how that
   works.

   .. code::javascript

         class Point {
           static fromJSON(json) {
             return new Point(json[0], json[1]);
           }
           constructor(x, y) {
             this.x = x;
             this.y = y;
           }
           toJSON() {
             return [this.x, this.y];
           }
         }
         assert.equal(
           JSON.stringify(new Point(8, -3)),
           '[8,-3]'
         );

   I find ``toJSON()`` cleaner than enumerability. It also gives us more freedom
   w.r.t. what the storage format should look like.


.. _conclusion:

12.4 Conclusion
---------------

   We have seen that almost all applications for non-enumerability are
   work-arounds that now have other and better solutions.

   For our own code, we can usually pretend that enumerability doesn’t exist:

   -  Creating properties via object literals and assignment always creates
      enumerable properties.
   -  Prototype properties created via classes are always non-enumerable.

   That is, we automatically follow best practices.

   `Comments <https://github.com/rauschma/deep-js/issues/12>`__

.. |image1| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px


.. _pt_oop-techniques:


PART V OOP: techniques
======================


.. _ch_creating-class-instances:


13 Techniques for instantiating classes
=======================================

   --------------

      -  13.1 `The problem: initializing a property asynchronously <#the-problem-initializing-a-property-asynchronously>`__
      -  13.2 `Solution: Promise-based constructor <#solution-promise-based-constructor>`__

         -  13.2.1 `Using an immediately-invoked asynchronous arrow function <#using-an-immediately-invoked-asynchronous-arrow-function>`__

      -  13.3 `Solution: static factory method <#solution-static-factory-method>`__

         -  13.3.1 `Improvement: private constructor via secret token <#improvement-private-constructor-via-secret-token>`__
         -  13.3.2 `Improvement: constructor throws, factory method borrows the class prototype <#improvement-constructor-throws-factory-method-borrows-the-class-prototype>`__
         -  13.3.3 `Improvement: instances are inactive by default, activated by factory method <#improvement-instances-are-inactive-by-default-activated-by-factory-method>`__
         -  13.3.4 `Variant: separate factory function <#variant-separate-factory-function>`__

      -  13.4 `Subclassing a Promise-based constructor (optional) <#subclassing-a-promise-based-constructor-optional>`__
      -  13.5 `Conclusion <#conclusion-1>`__
      -  13.6 `Further reading <#further-reading-3>`__

   --------------

   In this chapter, we examine several approaches for creating instances of
   classes: Constructors, factory functions, etc. We do so by solving one
   concrete problem several times. The focus of this chapter is on classes,
   which is why alternatives to classes are ignored.


.. _the-problem-initializing-a-property-asynchronously:

13.1 The problem: initializing a property asynchronously
--------------------------------------------------------

   The following container class is supposed to receive the contents of its
   property ``.data`` asynchronously. This is our first attempt:

   .. code::javascript

         class DataContainer {
           #data; // (A)
           constructor() {
             Promise.resolve('downloaded')
               .then(data => this.#data = data); // (B)
           }
           getData() {
             return 'DATA: '+this.#data; // (C)
           }
         }

   Key issue of this code: Property ``.data`` is initially ``undefined``.

   .. code::javascript

         const dc = new DataContainer();
         assert.equal(dc.getData(), 'DATA: undefined');
         setTimeout(() => assert.equal(
           dc.getData(), 'DATA: downloaded'), 0);

   In line A, we declare the `private
   field <https://2ality.com/2019/07/private-class-fields.html>`__ ``.#data``
   that we use in line B and line C.

   The Promise inside the constructor of ``DataContainer`` is settled
   asynchronously, which is why we can only see the final value of ``.data`` if
   we finish the current task and start a new one, via ``setTimeout()``. In
   other words, the instance of ``DataContainer`` is not completely initialized,
   yet, when we first see it.


.. _solution-promise-based-constructor:

13.2 Solution: Promise-based constructor
----------------------------------------

   What if we delay access to the instance of ``DataContainer`` until it is
   fully initialized? We can achieve that by returning a Promise from the
   constructor. By default, a constructor returns a new instance of the class
   that it is part of. We can override that if we explicitly return an object:

   .. code::javascript

         class DataContainer {
           #data;
           constructor() {
             return Promise.resolve('downloaded')
               .then(data => {
                 this.#data = data;
                 return this; // (A)
               });
           }
           getData() {
             return 'DATA: '+this.#data;
           }
         }
         new DataContainer()
           .then(dc => assert.equal( // (B)
             dc.getData(), 'DATA: downloaded'));

   Now we have to wait until we can access our instance (line B). It is passed
   on to us after the data is “downloaded” (line A). There are two possible
   sources of errors in this code:

   -  The download may fail and produce a rejection.
   -  An exception may be thrown in the body of the first ``.then()`` callback.

   In either case, the errors become rejections of the Promise that is returned
   from the constructor.

   Pros and cons:

   -  A benefit of this approach is that we can only access the instance once it
      is fully initialized. And there is no other way of creating instances of
      ``DataContainer``.
   -  A disadvantage is that it may be surprising to have a constructor return a
      Promise instead of an instance.


.. _using-an-immediately-invoked-asynchronous-arrow-function:

13.2.1 Using an immediately-invoked asynchronous arrow function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Instead of using the Promise API directly to create the Promise that is
   returned from the constructor, we can also use an asynchronous arrow function
   that `we invoke
   immediately <https://exploringjs.com/impatient-js/ch_async-functions.html#immediately-invoked-async-arrow-functions>`__:

   .. code::javascript

         constructor() {
           return (async () => {
             this.#data = await Promise.resolve('downloaded');
             return this;
           })();
         }


.. _solution-static-factory-method:

13.3 Solution: static factory method
------------------------------------

   A *static factory method* of a class ``C`` creates instances of ``C`` and is
   an alternative to using ``new C()``. Common names for static factory methods
   in JavaScript:

   -  ``.create()``: Creates a new instance. Example: ``Object.create()``
   -  ``.from()``: Creates a new instance based on a different object, by
      copying and/or converting it. Example: ``Array.from()``
   -  ``.of()``: Creates a new instance by assembling values specified via
      arguments. Example: ``Array.of()``

   In the following example, ``DataContainer.create()`` is a static factory
   method. It returns Promises for instances of ``DataContainer``:

   .. code::javascript

         class DataContainer {
           #data;
           static async create() {
             const data = await Promise.resolve('downloaded');
             return new this(data);
           }
           constructor(data) {
             this.#data = data;
           }
           getData() {
             return 'DATA: '+this.#data;
           }
         }
         DataContainer.create()
           .then(dc => assert.equal(
             dc.getData(), 'DATA: downloaded'));

   This time, all asynchronous functionality is contained in ``.create()``,
   which enables the rest of the class to be completely synchronous and
   therefore simpler.

   Pros and cons:

   -  A benefit of this approach is that the constructor becomes simple.
   -  A disadvantage of this approach is that it’s now possible to create
      instances that are incorrectly set up, via ``new DataContainer()``.


.. _improvement-private-constructor-via-secret-token:

13.3.1 Improvement: private constructor via secret token
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we want to ensure that instances are always correctly set up, we must
   ensure that only ``DataContainer.create()`` can invoke the constructor of
   ``DataContainer``. We can achieve that via a secret token:

   .. code::javascript

         const secretToken = Symbol('secretToken');
         class DataContainer {
           #data;
           static async create() {
             const data = await Promise.resolve('downloaded');
             return new this(secretToken, data);
           }
           constructor(token, data) {
             if (token !== secretToken) {
               throw new Error('Constructor is private');
             }
             this.#data = data;
           }
           getData() {
             return 'DATA: '+this.#data;
           }
         }
         DataContainer.create()
           .then(dc => assert.equal(
             dc.getData(), 'DATA: downloaded'));

   If ``secretToken`` and ``DataContainer`` reside in the same module and only
   the latter is exported, then outside parties don’t have access to
   ``secretToken`` and therefore can’t create instances of ``DataContainer``.

   Pros and cons:

   -  Benefit: safe and straightforward.
   -  Disadvantage: slightly verbose.


.. _improvement-constructor-throws-factory-method-borrows-the-class-prototype:

13.3.2 Improvement: constructor throws, factory method borrows the class prototype
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following variant of our solution disables the constructor of
   ``DataContainer`` and uses a trick to create instances of it another way
   (line A):

   .. code::javascript

         class DataContainer {
           static async create() {
             const data = await Promise.resolve('downloaded');
             return Object.create(this.prototype)._init(data); // (A)
           }
           constructor() {
             throw new Error('Constructor is private');
           }
           _init(data) {
             this._data = data;
             return this;
           }
           getData() {
             return 'DATA: '+this._data;
           }
         }
         DataContainer.create()
           .then(dc => {
             assert.equal(dc instanceof DataContainer, true); // (B)
             assert.equal(
               dc.getData(), 'DATA: downloaded');
           });

   Internally, an instance of ``DataContainer`` is any object whose prototype is
   ``DataContainer.prototype``. That’s why we can create instances via
   ``Object.create()`` (line A) and that’s why ``instanceof`` works in line B.

   Pros and cons:

   -  Benefit: elegant; ``instanceof`` works.
   -  Disadvantages:

      -  Creating instances is not completely prevented. To be fair, though, the
         work-around via ``Object.create()`` can also be used for our previous
         solutions.
      -  We can’t use `private
         fields <https://2ality.com/2019/07/private-class-fields.html>`__ and
         `private
         methods <https://2ality.com/2019/07/private-methods-accessors-in-classes.html>`__
         in ``DataContainer``, because those are only set up correctly for
         instances that were created via the constructor.


.. _improvement-instances-are-inactive-by-default-activated-by-factory-method:

13.3.3 Improvement: instances are inactive by default, activated by factory method
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Another, more verbose variant is that, by default, instances are switched off
   via the flag ``.#active``. The initialization method ``.#init()`` that
   switches them on cannot be accessed externally, but ``Data.container()`` can
   invoke it:

   .. code::javascript

         class DataContainer {
           #data;
           static async create() {
             const data = await Promise.resolve('downloaded');
             return new this().#init(data);
           }

           #active = false;
           constructor() {
           }
           #init(data) {
             this.#active = true;
             this.#data = data;
             return this;
           }
           getData() {
             this.#check();
             return 'DATA: '+this.#data;
           }
           #check() {
             if (!this.#active) {
               throw new Error('Not created by factory');
             }
           }
         }
         DataContainer.create()
           .then(dc => assert.equal(
             dc.getData(), 'DATA: downloaded'));

   The flag ``.#active`` is enforced via the private method ``.#check()`` which
   must be invoked at the beginning of every method.

   The major downside of this solution is its verbosity. There is also a risk of
   forgetting to invoke ``.#check()`` in each method.


.. _variant-separate-factory-function:

13.3.4 Variant: separate factory function
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For completeness sake, I’ll show another variant: Instead of using a static
   method as a factory you can also use a separate stand-alone function.

   .. code::javascript

         const secretToken = Symbol('secretToken');
         class DataContainer {
           #data;
           constructor(token, data) {
             if (token !== secretToken) {
               throw new Error('Constructor is private');
             }
             this.#data = data;
           }
           getData() {
             return 'DATA: '+this.#data;
           }
         }

         async function createDataContainer() {
           const data = await Promise.resolve('downloaded');
           return new DataContainer(secretToken, data);
         }

         createDataContainer()
           .then(dc => assert.equal(
             dc.getData(), 'DATA: downloaded'));

   Stand-alone functions as factories are occasionally useful, but in this case,
   I prefer a static method:

   -  The stand-alone function can’t access private members of
      ``DataContainer``.
   -  I prefer the way ``DataContainer.create()`` looks.


.. _subclassing-a-promise-based-constructor-optional:

13.4 Subclassing a Promise-based constructor (optional)
-------------------------------------------------------

   In general, subclassing is something to use sparingly.

   With a separate factory function, it is relatively easy to extend
   ``DataContainer``.

   Alas, extending the class with the Promise-based constructor leads to severe
   limitations. In the following example, we subclass ``DataContainer``. The
   subclass ``SubDataContainer`` has its own private field ``.#moreData`` that
   it initializes asynchronously by hooking into the Promise returned by the
   constructor of its superclass.

   .. code::javascript

         class DataContainer {
           #data;
           constructor() {
             return Promise.resolve('downloaded')
               .then(data => {
                 this.#data = data;
                 return this; // (A)
               });
           }
           getData() {
             return 'DATA: '+this.#data;
           }
         }

         class SubDataContainer extends DataContainer {
           #moreData;
           constructor() {
             super();
             const promise = this;
             return promise
               .then(_this => {
                 return Promise.resolve('more')
                   .then(moreData => {
                     _this.#moreData = moreData;
                     return _this;
                   });
               });
           }
           getData() {
             return super.getData() + ', ' + this.#moreData;
           }
         }

   Alas, we can’t instantiate this class:

   .. code::javascript

         assert.rejects(
           () => new SubDataContainer(),
           {
             name: 'TypeError',
             message: 'Cannot write private member #moreData ' +
               'to an object whose class did not declare it',
           }
         );

   Why the failure? A constructor always adds its private fields to its
   ``this``. However, here, ``this`` in the subconstructor is the Promise
   returned by the superconstructor (and not the instance of
   ``SubDataContainer`` delivered via the Promise).

   However, this approach still works if ``SubDataContainer`` does not have any
   private fields.


.. _conclusion-1:

13.5 Conclusion
---------------

   For the scenario examined in this chapter, I prefer either a Promise-based
   constructor or a static factory method plus a private constructor via a
   secret token.

   However, the other techniques presented here can still be useful in other
   scenarios.


.. _further-reading-3:

13.6 Further reading
--------------------

   -  Asynchronous programming:

      -  `Chapter “Promises for asynchronous
         programming” <https://exploringjs.com/impatient-js/ch_promises.html>`__
         in “JavaScript for impatient programmers”
      -  `Chapter “Async
         functions” <https://exploringjs.com/impatient-js/ch_async-functions.html>`__
         in “JavaScript for impatient programmers”
      -  `Section “Immediately invoked async arrow
         functions” <https://exploringjs.com/impatient-js/ch_async-functions.html#immediately-invoked-async-arrow-functions>`__
         in “JavaScript for impatient programmers”

   -  OOP:

      -  `Chapter “Prototype chains and
         classes” <https://exploringjs.com/impatient-js/ch_proto-chains-classes.html>`__
         in “JavaScript for impatient programmers”
      -  `Blog post “ES proposal: private class
         fields” <https://2ality.com/2019/07/private-class-fields.html>`__
      -  `Blog post “ES proposal: private methods and accessors in JavaScript
         classes” <https://2ality.com/2019/07/private-methods-accessors-in-classes.html>`__

   `Comments <https://github.com/rauschma/deep-js/issues/13>`__


.. _ch_copying-class-instances:


14 Copying instances of classes: ``.clone()`` vs. copy constructors
===================================================================

   --------------

      -  14.1 `.clone() methods <#clone-methods>`__
      -  14.2 `Static factory methods <#static-factory-methods>`__
      -  14.3 `Acknowledgements <#acknowledgements-1>`__

   --------------

   In this chapter, we look at two techniques for implementing copying for class
   instances:

   -  ``.clone()`` methods
   -  So-called *copy constructors*, constructors that receive another instance
      of the current class and use it to initialize the current instance.


.. _clone-methods:

14.1 ``.clone()`` methods
-------------------------

   This technique introduces one method ``.clone()`` per class whose instances
   are to be copied. It returns a deep copy of ``this``. The following example
   shows three classes that can be cloned.

   .. code::javascript

         class Point {
           constructor(x, y) {
             this.x = x;
             this.y = y;
           }
           clone() {
             return new Point(this.x, this.y);
           }
         }
         class Color {
           constructor(name) {
             this.name = name;
           }
           clone() {
             return new Color(this.name);
           }
         }
         class ColorPoint extends Point {
           constructor(x, y, color) {
             super(x, y);
             this.color = color;
           }
           clone() {
             return new ColorPoint(
               this.x, this.y, this.color.clone()); // (A)
           }
         }

   Line A demonstrates an important aspect of this technique: compound instance
   property values must also be cloned, recursively.


.. _static-factory-methods:

14.2 Static factory methods
---------------------------

   A *copy constructor* is a constructor that uses another instance of the
   current class to set up the current instance. Copy constructors are popular
   in static languages such as C++ and Java, where you can provide multiple
   versions of a constructor via *static overloading*. Here, *static* means that
   the choice which version to use, is made at compile time.

   In JavaScript, we must make that decision at runtime and that leads to
   inelegant code:

   .. code::javascript

         class Point {
           constructor(...args) {
             if (args[0] instanceof Point) {
               // Copy constructor
               const [other] = args;
               this.x = other.x;
               this.y = other.y;
             } else {
               const [x, y] = args;
               this.x = x;
               this.y = y;
             }
           }
         }

   This is how you’d use this class:

   .. code::javascript

         const original = new Point(-1, 4);
         const copy = new Point(original);
         assert.deepEqual(copy, original);

   *Static factory methods* are an alternative to constructors and work better
   in this case because we can directly invoke the desired functionality. (Here,
   *static* means that these factory methods are class methods.)

   In the following example, the three classes ``Point``, ``Color`` and
   ``ColorPoint`` each have a static factory method ``.from()``:

   .. code::javascript

         class Point {
           constructor(x, y) {
             this.x = x;
             this.y = y;
           }
           static from(other) {
             return new Point(other.x, other.y);
           }
         }
         class Color {
           constructor(name) {
             this.name = name;
           }
           static from(other) {
             return new Color(other.name);
           }
         }
         class ColorPoint extends Point {
           constructor(x, y, color) {
             super(x, y);
             this.color = color;
           }
           static from(other) {
             return new ColorPoint(
               other.x, other.y, Color.from(other.color)); // (A)
           }
         }

   In line A, we once again copy recursively.

   This is how ``ColorPoint.from()`` works:

   .. code::javascript

         const original = new ColorPoint(-1, 4, new Color('red'));
         const copy = ColorPoint.from(original);
         assert.deepEqual(copy, original);


.. _acknowledgements-1:

14.3 Acknowledgements
---------------------

   -  `Ron Korvig <https://github.com/ronkorving>`__ reminded me to use static
      factory methods and not overloaded constructors for deep-copying in
      JavaScript.

   `Comments <https://github.com/rauschma/deep-js/issues/14>`__


.. _ch_immutable-collection-wrappers:


15 Immutable wrappers for collections
=====================================

   --------------

      -  15.1 `Wrapping objects <#wrapping-objects>`__

         -  15.1.1 `Making collections immutable via wrapping <#making-collections-immutable-via-wrapping>`__

      -  15.2 `An immutable wrapper for Maps <#an-immutable-wrapper-for-maps>`__
      -  15.3 `An immutable wrapper for Arrays <#an-immutable-wrapper-for-arrays>`__

   --------------

   An immutable wrapper for a collection makes that collection immutable by
   wrapping it in a new object. In this chapter, we examine how that works and
   why it is useful.


.. _wrapping-objects:

15.1 Wrapping objects
---------------------

   If there is an object whose interface we’d like to reduce, we can take the
   following approach:

   -  Create a new object that stores the original in a private field. The new
      object is said to *wrap* the original object. The new object is called
      *wrapper*, the original object *wrapped object*.
   -  The wrapper only forwards some of the method calls it receives to the
      wrapped object.

   This is what wrapping looks like:

   .. code::javascript

         class Wrapper {
           #wrapped;
           constructor(wrapped) {
             this.#wrapped = wrapped;
           }
           allowedMethod1(...args) {
             return this.#wrapped.allowedMethod1(...args);
           }
           allowedMethod2(...args) {
             return this.#wrapped.allowedMethod2(...args);
           }
         }

   Related software design patterns:

   -  Wrapping is related to `the Gang of Four design pattern
      Facade <https://en.wikipedia.org/wiki/Facade_pattern>`__.
   -  We used
      `forwarding <https://en.wikipedia.org/wiki/Forwarding_(object-oriented_programming)>`__
      to implement
      `delegation <https://en.wikipedia.org/wiki/Delegation_pattern>`__.
      Delegation means that one object lets another object (the *delegate*)
      handle some of its work. It is an alternative to inheritance for sharing
      code.


.. _making-collections-immutable-via-wrapping:

15.1.1 Making collections immutable via wrapping
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   To make a collection immutable, we can use wrapping and remove all
   destructive operations from its interface.

   One important use case for this technique is an object that has an internal
   mutable data structure that it wants to export safely without copying it. The
   export being “live” may also be a goal. The object can achieve its goals by
   wrapping the internal data structure and making it immutable.

   The next two sections showcase immutable wrappers for Maps and Arrays. They
   both have the following limitations:

   -  They are sketches. More work is needed to make them suitable for practical
      use: Better checks, support for more methods, etc.
   -  They work shallowly: Each one makes the wrapped object immutable, but not
      the data it returns. This could be fixed by wrapping some of the results
      that are returned by methods.


.. _an-immutable-wrapper-for-maps:

15.2 An immutable wrapper for Maps
----------------------------------

   Class ``ImmutableMapWrapper`` produces wrappers for Maps:

   .. code::javascript

         class ImmutableMapWrapper {
           static _setUpPrototype() {
             // Only forward non-destructive methods to the wrapped Map:
             for (const methodName of ['get', 'has', 'keys', 'size']) {
               ImmutableMapWrapper.prototype[methodName] = function (...args) {
                 return this.#wrappedMap[methodName](...args);
               }
             }
           }

           #wrappedMap;
           constructor(wrappedMap) {
             this.#wrappedMap = wrappedMap;
           }
         }
         ImmutableMapWrapper._setUpPrototype();

   The setup of the prototype has to be performed by a static method, because we
   only have access to the private field ``.#wrappedMap`` from inside the class.

   This is ``ImmutableMapWrapper`` in action:

   .. code::javascript

         const map = new Map([[false, 'no'], [true, 'yes']]);
         const wrapped = new ImmutableMapWrapper(map);

         // Non-destructive operations work as usual:
         assert.equal(
           wrapped.get(true), 'yes');
         assert.equal(
           wrapped.has(false), true);
         assert.deepEqual(
           [...wrapped.keys()], [false, true]);

         // Destructive operations are not available:
         assert.throws(
           () => wrapped.set(false, 'never!'),
           /^TypeError: wrapped.set is not a function$/);
         assert.throws(
           () => wrapped.clear(),
           /^TypeError: wrapped.clear is not a function$/);


.. _an-immutable-wrapper-for-arrays:

15.3 An immutable wrapper for Arrays
------------------------------------

   For an Array ``arr``, normal wrapping is not enough because we need to
   intercept not just method calls, but also property accesses such as
   ``arr[1] = true``. `JavaScript
   proxies <https://exploringjs.com/es6/ch_proxies.html>`__ enable us to do
   this:

   .. code::javascript

         const RE_INDEX_PROP_KEY = /^[0-9]+$/;
         const ALLOWED_PROPERTIES = new Set([
           'length', 'constructor', 'slice', 'concat']);

         function wrapArrayImmutably(arr) {
           const handler = {
             get(target, propKey, receiver) {
               // We assume that propKey is a string (not a symbol)
               if (RE_INDEX_PROP_KEY.test(propKey) // simplified check!
                 || ALLOWED_PROPERTIES.has(propKey)) {
                   return Reflect.get(target, propKey, receiver);
               }
               throw new TypeError(`Property "${propKey}" can’t be accessed`);
             },
             set(target, propKey, value, receiver) {
               throw new TypeError('Setting is not allowed');
             },
             deleteProperty(target, propKey) {
               throw new TypeError('Deleting is not allowed');
             },
           };
           return new Proxy(arr, handler);
         }

   Let’s wrap an Array:

   .. code::javascript

         const arr = ['a', 'b', 'c'];
         const wrapped = wrapArrayImmutably(arr);

         // Non-destructive operations are allowed:
         assert.deepEqual(
           wrapped.slice(1), ['b', 'c']);
         assert.equal(
           wrapped[1], 'b');

         // Destructive operations are not allowed:
         assert.throws(
           () => wrapped[1] = 'x',
           /^TypeError: Setting is not allowed$/);
         assert.throws(
           () => wrapped.shift(),
           /^TypeError: Property "shift" can’t be accessed$/);

   `Comments <https://github.com/rauschma/deep-js/issues/15>`__


.. _pt_regular-expressions:


PART VI Regular expressions
===========================


.. _ch_regexp-lookaround-assertions:


16 Regular expressions: lookaround assertions by example
========================================================

   --------------

      -  16.1 `Cheat sheet: lookaround assertions <#cheat-sheet-lookaround-assertions>`__
      -  16.2 `Warnings for this chapter <#warnings-for-this-chapter>`__
      -  16.3 `Example: Specifying what comes before or after a match (positive lookaround) <#example-specifying-what-comes-before-or-after-a-match-positive-lookaround>`__
      -  16.4 `Example: Specifying what does not come before or after a match (negative lookaround) <#example-specifying-what-does-not-come-before-or-after-a-match-negative-lookaround>`__

         -  16.4.1 `There are no simple alternatives to negative lookaround assertions <#there-are-no-simple-alternatives-to-negative-lookaround-assertions>`__

      -  16.5 `Interlude: pointing lookaround assertions inward <#interlude-pointing-lookaround-assertions-inward>`__
      -  16.6 `Example: match strings not starting with 'abc' <#example-match-strings-not-starting-with-abc>`__
      -  16.7 `Example: match substrings that do not contain '.mjs' <#example-match-substrings-that-do-not-contain-.mjs>`__
      -  16.8 `Example: skipping lines with comments <#example-skipping-lines-with-comments>`__
      -  16.9 `Example: smart quotes <#example-smart-quotes>`__

         -  16.9.1 `Supporting escaping via backslashes <#supporting-escaping-via-backslashes>`__

      -  16.10 `Acknowledgements <#acknowledgements-2>`__
      -  16.11 `Further reading <#further-reading-4>`__

   --------------

   In this chapter we use examples to explore lookaround assertions in regular
   expressions. A lookaround assertion is non-capturing and must match (or not
   match) what comes before (or after) the current location in the input string.


.. _cheat-sheet-lookaround-assertions:

16.1 Cheat sheet: lookaround assertions
---------------------------------------

   .. container::
      :name: tbl:lookaround-assertions-overview

      .. table:: Table 4: Overview of available lookaround assertions.

         ================== =================== ======
         Pattern            Name                
         ================== =================== ======
         ``(?=«pattern»)``  Positive lookahead  ES3
         ``(?!«pattern»)``  Negative lookahead  ES3
         ``(?<=«pattern»)`` Positive lookbehind ES2018
         ``(?<!«pattern»)`` Negative lookbehind ES2018
         ================== =================== ======

   There are four lookaround assertions
   (tbl. `4 <#tbl:lookaround-assertions-overview>`__)

   -  Lookahead assertions (ECMAScript 3):

      -  Positive lookahead: ``(?=«pattern»)`` matches if ``pattern`` matches
         what comes after the current location in the input string.
      -  Negative lookahead: ``(?!«pattern»)`` matches if ``pattern`` does not
         match what comes after the current location in the input string.

   -  Lookbehind assertions (ECMAScript 2018):

      -  Positive lookbehind: ``(?<=«pattern»)`` matches if ``pattern`` matches
         what comes before the current location in the input string.
      -  Negative lookbehind: ``(?<!«pattern»)`` matches if ``pattern`` does not
         match what comes before the current location in the input string.


.. _warnings-for-this-chapter:

16.2 Warnings for this chapter
------------------------------

   -  The examples show what can be achieved via lookaround assertions. However,
      regular expression aren’t always the best solution. Another technique,
      such as proper parsing, may be a better choice.

   -  Lookbehind assertions are a relatively new feature that may not be
      supported by all JavaScript engines you are targeting.

   -  Lookaround assertions may affect performance negatively, especially if
      their patterns match long strings.


.. _example-specifying-what-comes-before-or-after-a-match-positive-lookaround:

16.3 Example: Specifying what comes before or after a match (positive lookaround)
---------------------------------------------------------------------------------

   In the following interaction, we extract quoted words:

   .. code:: repl

         > 'how "are" "you" doing'.match(/(?<=")[a-z]+(?=")/g)
         [ 'are', 'you' ]

   Two lookaround assertions help us here:

   -  ``(?<=")`` “must be preceded by a quote”
   -  ``(?=")`` “must be followed by a quote”

   Lookaround assertions are especially convenient for ``.match()`` in ``/g``
   mode, which returns whole matches (capture group 0). Whatever the pattern of
   a lookaround assertion matches is not captured. Without lookaround
   assertions, the quotes show up in the result:

   .. code:: repl

         > 'how "are" "you" doing'.match(/"([a-z]+)"/g)
         [ '"are"', '"you"' ]


.. _example-specifying-what-does-not-come-before-or-after-a-match-negative-lookaround:

16.4 Example: Specifying what does not come before or after a match (negative lookaround)
-----------------------------------------------------------------------------------------

   How can we achieve the opposite of what we did in the previous section and
   extract all unquoted words from a string?

   -  Input: ``'how "are" "you" doing'``
   -  Output: ``['how', 'doing']``

   Our first attempt is to simply convert positive lookaround assertions to
   negative lookaround assertions. Alas, that fails:

   .. code:: repl

         > 'how "are" "you" doing'.match(/(?<!")[a-z]+(?!")/g)
         [ 'how', 'r', 'o', 'doing' ]

   The problem is that we extract sequences of characters that are not bracketed
   by quotes. That means that in the string ``'"are"'``, the “r” in the middle
   is considered unquoted, because it is preceded by an “a” and followed by an
   “e”.

   We can fix this by stating that prefix and suffix must be neither quote nor
   letter:

   .. code:: repl

         > 'how "are" "you" doing'.match(/(?<!["a-z])[a-z]+(?!["a-z])/g)
         [ 'how', 'doing' ]

   Another solution is to demand via ``\b`` that the sequence of characters
   ``[a-z]+`` start and end at word boundaries:

   .. code:: repl

         > 'how "are" "you" doing'.match(/(?<!")\b[a-z]+\b(?!")/g)
         [ 'how', 'doing' ]

   One thing that is nice about negative lookbehind and negative lookahead is
   that they also work at the beginning or end, respectively, of a string – as
   demonstrated in the example.


.. _there-are-no-simple-alternatives-to-negative-lookaround-assertions:

16.4.1 There are no simple alternatives to negative lookaround assertions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Negative lookaround assertions are a powerful tool and usually impossible to
   emulate via other regular expression means.

   If we don’t want to use them, we normally have to take a completely different
   approach. For example, in this case, we could split the string into (quoted
   and unquoted) words and then filter those:

   .. code::javascript

         const str = 'how "are" "you" doing';

         const allWords = str.match(/"?[a-z]+"?/g);
         const unquotedWords = allWords.filter(
           w => !w.startsWith('"') || !w.endsWith('"'));
         assert.deepEqual(unquotedWords, ['how', 'doing']);

   Benefits of this approach:

   -  It works on older engines.
   -  It is easy to understand.


.. _interlude-pointing-lookaround-assertions-inward:

16.5 Interlude: pointing lookaround assertions inward
-----------------------------------------------------

   All of the examples we have seen so far have in common that the lookaround
   assertions dictate what must come before or after the match but without
   including those characters in the match.

   The regular expressions shown in the remainder of this chapter are different:
   Their lookaround assertions point inward and restrict what’s inside the
   match.


.. _example-match-strings-not-starting-with-abc:

16.6 Example: match strings not starting with ``'abc'``
-------------------------------------------------------

   Let‘s assume we want to match all strings that do not start with ``'abc'``.
   Our first attempt could be the regular expression ``/^(?!abc)/``.

   That works well for ``.test()``:

   .. code:: repl

         > /^(?!abc)/.test('xyz')
         true

   However, ``.exec()`` gives us an empty string:

   .. code:: repl

         > /^(?!abc)/.exec('xyz')
         { 0: '', index: 0, input: 'xyz', groups: undefined }

   The problem is that assertions such as lookaround assertions don’t expand the
   matched text. That is, they don’t capture input characters, they only make
   demands about the current location in the input.

   Therefore, the solution is to add a pattern that does capture input
   characters:

   .. code:: repl

         > /^(?!abc).*$/.exec('xyz')
         { 0: 'xyz', index: 0, input: 'xyz', groups: undefined }

   As desired, this new regular expression rejects strings that are prefixed
   with ``'abc'``:

   .. code:: repl

         > /^(?!abc).*$/.exec('abc')
         null
         > /^(?!abc).*$/.exec('abcd')
         null

   And it accepts strings that don’t have the full prefix:

   .. code:: repl

         > /^(?!abc).*$/.exec('ab')
         { 0: 'ab', index: 0, input: 'ab', groups: undefined }


.. _example-match-substrings-that-do-not-contain-.mjs:

16.7 Example: match substrings that do not contain ``'.mjs'``
-------------------------------------------------------------

   In the following example, we want to find

   ::

      import ··· from '«module-specifier»';

   where ``module-specifier`` does not end with ``'.mjs'``.

   .. code::javascript

         const code = `
         import {transform} from './util';
         import {Person} from './person.mjs';
         import {zip} from 'lodash';
         `.trim();
         assert.deepEqual(
           code.match(/^import .*? from '[^']+(?<!\.mjs)';$/umg),
           [
             "import {transform} from './util';",
             "import {zip} from 'lodash';",
           ]);

   Here, the lookbehind assertion ``(?<!\.mjs)`` acts as a *guard* and prevents
   that the regular expression matches strings that contain ``'.mjs``\ ’ at this
   location.


.. _example-skipping-lines-with-comments:

16.8 Example: skipping lines with comments
------------------------------------------

   Scenario: We want to parse lines with settings, while skipping comments. For
   example:

   .. code::javascript

         const RE_SETTING = /^(?!#)([^:]*):(.*)$/

         const lines = [
           'indent: 2', // setting
           '# Trim trailing whitespace:', // comment
           'whitespace: trim', // setting
         ];
         for (const line of lines) {
           const match = RE_SETTING.exec(line);
           if (match) {
             const key = JSON.stringify(match[1]);
             const value = JSON.stringify(match[2]);
             console.log(`KEY: ${key} VALUE: ${value}`);
           }
         }

         // Output:
         // 'KEY: "indent" VALUE: " 2"'
         // 'KEY: "whitespace" VALUE: " trim"'

   How did we arrive at the regular expression ``RE_SETTING``?

   We started with the following regular expression for settings:

   .. code::javascript

         /^([^:]*):(.*)$/

   Intuitively, it is a sequence of the following parts:

   -  Start of the line
   -  Non-colons (zero or more)
   -  A single colon
   -  Any characters (zero or more)
   -  The end of line

   This regular expression does reject *some* comments:

   .. code:: repl

         > /^([^:]*):(.*)$/.test('# Comment')
         false

   But it accepts others (that have colons in them):

   .. code:: repl

         > /^([^:]*):(.*)$/.test('# Comment:')
         true

   We can fix that by prefixing ``(?!#)`` as a guard. Intuitively, it means:
   ”The current location in the input string must not be followed by the
   character ``#``.”

   The new regular expression works as desired:

   .. code:: repl

         > /^(?!#)([^:]*):(.*)$/.test('# Comment:')
         false


.. _example-smart-quotes:

16.9 Example: smart quotes
--------------------------

   Let’s assume we want to convert pairs of straight double quotes to curly
   quotes:

   -  Input: :literal:`\`"yes" and "no"\``
   -  Output: :literal:`\`“yes” and “no”\``

   This is our first attempt:

   .. code:: repl

         > `The words "must" and "should".`.replace(/"(.*)"/g, '“$1”')
         'The words “must" and "should”.'

   Only the first quote and the last quote is curly. The problem here is that
   the ``*`` quantifier matches
   `greedily <https://exploringjs.com/impatient-js/ch_regexps.html#quantifiers>`__
   (as much as possible).

   If we put a question mark after the ``*``, it matches *reluctantly*:

   .. code:: repl

         > `The words "must" and "should".`.replace(/"(.*?)"/g, '“$1”')
         'The words “must” and “should”.'


.. _supporting-escaping-via-backslashes:

16.9.1 Supporting escaping via backslashes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   What if we want to allow the escaping of quotes via backslashes? We can do
   that by using the guard ``(?<!\\)`` before the quotes:

   .. code:: repl

         > const regExp = /(?<!\\)"(.*?)(?<!\\)"/g;
         > String.raw`\"straight\" and "curly"`.replace(regExp, '“$1”')
         '\\"straight\\" and “curly”'

   As a post-processing step, we would still need to do:

   .. code::javascript

         .replace(/\\"/g, `"`)

   However, this regular expression can fail when there is a backslash-escaped
   backslash:

   .. code:: repl

         > String.raw`Backslash: "\\"`.replace(/(?<!\\)"(.*?)(?<!\\)"/g, '“$1”')
         'Backslash: "\\\\"'

   The second backslash prevented the quotes from becoming curly.

   We can fix that if we make our guard more sophisticated (``?:`` makes the
   group non-capturing):

   .. code::javascript

         (?<=[^\\](?:\\\\)*)

   The new guard allows pairs of backslashes before quotes:

   .. code:: repl

         > const regExp = /(?<=[^\\](?:\\\\)*)"(.*?)(?<=[^\\](?:\\\\)*)"/g;
         > String.raw`Backslash: "\\"`.replace(regExp, '“$1”')
         'Backslash: “\\\\”'

   One issue remains. This guard prevents the first quote from being matched if
   it appears at the beginning of a string:

   .. code:: repl

         > const regExp = /(?<=[^\\](?:\\\\)*)"(.*?)(?<=[^\\](?:\\\\)*)"/g;
         > `"abc"`.replace(regExp, '“$1”')
         '"abc"'

   We can fix that by changing the first guard to: ``(?<=[^\\](?:\\\\)*|^)``

   .. code:: repl

         > const regExp = /(?<=[^\\](?:\\\\)*|^)"(.*?)(?<=[^\\](?:\\\\)*)"/g;
         > `"abc"`.replace(regExp, '“$1”')
         '“abc”'


.. _acknowledgements-2:

16.10 Acknowledgements
----------------------

   -  The first regular expression that handles escaped backslashes in front of
      quotes `was proposed by ``@jonasraoni`` on
      Twitter <https://twitter.com/jonasraoni/status/992506010454683650>`__.


.. _further-reading-4:

16.11 Further reading
---------------------

   -  `Chapter “Regular expressions
      (``RegExp``)” <https://exploringjs.com/impatient-js/ch_regexps.html>`__ in
      “JavaScript for impatient programmers”

   `Comments <https://github.com/rauschma/deep-js/issues/16>`__


.. _pt_miscellaneous:


PART VII Miscellaneous topics
=============================


.. _ch_implementing-promises:


17 Exploring Promises by implementing them
==========================================

   --------------

      -  17.1 `Refresher: states of Promises <#refresher-states-of-promises>`__
      -  17.2 `Version 1: Stand-alone Promise <#version-1-stand-alone-promise>`__

         -  17.2.1 `Method .then() <#method-.then>`__
         -  17.2.2 `Method .resolve() <#method-.resolve>`__

      -  17.3 `Version 2: Chaining .then() calls <#version-2-chaining-.then-calls>`__
      -  17.4 `Convenience method .catch() <#convenience-method-.catch>`__
      -  17.5 `Omitting reactions <#omitting-reactions>`__
      -  17.6 `The implementation <#the-implementation>`__
      -  17.7 `Version 3: Flattening Promises returned from .then() callbacks <#version-3-flattening-promises-returned-from-.then-callbacks>`__

         -  17.7.1 `Returning Promises from a callback of .then() <#returning-promises-from-a-callback-of-.then>`__
         -  17.7.2 `Flattening makes Promise states more complicated <#flattening-makes-promise-states-more-complicated>`__
         -  17.7.3 `Implementing Promise-flattening <#implementing-promise-flattening>`__

      -  17.8 `Version 4: Exceptions thrown in reaction callbacks <#version-4-exceptions-thrown-in-reaction-callbacks>`__
      -  17.9 `Version 5: Revealing constructor pattern <#version-5-revealing-constructor-pattern>`__

   --------------

   .. container:: notebox

      |image1|  **Required knowledge: Promises**

      For this chapter, you should be roughly familiar with Promises, but much
      relevant knowledge is also reviewed here. If necessary, you can read `the
      chapter on Promises in “JavaScript for impatient
      programmers” <https://exploringjs.com/impatient-js/ch_promises.html>`__.

   In this chapter, we will approach Promises from a different angle: Instead of
   using this API, we will create a simple implementation of it. This different
   angle once helped me greatly with making sense of Promises.

   The Promise implementation is the class ``ToyPromise``. In order to be easier
   to understand, it doesn’t completely match the API. But it is close enough to
   still give us much insight into how Promises work.

   .. container:: notebox

      |image2|  **Repository with code**

      ``ToyPromise`` is available on GitHub, in the repository
      ```toy-promise`` <https://github.com/rauschma/toy-promise>`__.


.. _refresher-states-of-promises:

17.1 Refresher: states of Promises
----------------------------------

   .. figure:: https://exploringjs.com/deep-js/img-book/f395a3cdb50e162ee0f1c577151a8afa18dd2645.svg
      :name: fig:promise-states-simple
      :width: 267px
      :height: 105px

      Figure 11: The states of a Promise (simplified version): A Promise is
      initially pending. If we resolve it, it becomes fulfilled. If we reject
      it, it becomes rejected.

   We start with a simplified version of how Promise states work
   (fig. `11 <#fig:promise-states-simple>`__):

   -  A Promise is initially *pending*.
   -  If a Promise is *resolved* with a value ``v``, it becomes *fulfilled*
      (later, we’ll see that resolving can also reject). ``v`` is now the
      *fulfillment value* of the Promise.
   -  If a Promise is *rejected* with an error ``e``, it becomes *rejected*.
      ``e`` is now the *rejection value* of the Promise.


.. _version-1-stand-alone-promise:

17.2 Version 1: Stand-alone Promise
-----------------------------------

   Our first implementation is a stand-alone Promise with minimal functionality:

   -  We can create a Promise.
   -  We can resolve or reject a Promise and we can only do it once.
   -  We can register *reactions* (callbacks) via ``.then()``. Registering must
      do the right thing independently of whether the Promise has already been
      settled or not.
   -  ``.then()`` does not support chaining, yet – it does not return anything.

   ``ToyPromise1`` is a class with three prototype methods:

   -  ``ToyPromise1.prototype.resolve(value)``
   -  ``ToyPromise1.prototype.reject(reason)``
   -  ``ToyPromise1.prototype.then(onFulfilled, onRejected)``

   That is, ``resolve`` and ``reject`` are methods (and not functions handed to
   a callback parameter of the constructor).

   This is how this first implementation is used:

   .. code::javascript

         // .resolve() before .then()
         const tp1 = new ToyPromise1();
         tp1.resolve('abc');
         tp1.then((value) => {
           assert.equal(value, 'abc');
         });

   .. code::javascript

         // .then() before .resolve()
         const tp2 = new ToyPromise1();
         tp2.then((value) => {
           assert.equal(value, 'def');
         });
         tp2.resolve('def');

   Fig. `12 <#fig:promise-impl1-simple>`__ illustrates how our first
   ``ToyPromise`` works.

   .. container:: notebox

      |image3|  **The diagrams of the data flow in Promises are optional**

      The motivation for the diagrams is to have a visual explanation for how
      Promises work. But they are optional. If you find them confusing, you can
      ignore them and focus on the code.

   .. figure:: https://exploringjs.com/deep-js/img-book/cab29bcb38a7b1a138ed63237462f2c3109a2376.svg
      :name: fig:promise-impl1-simple
      :width: 236px
      :height: 129px

      Figure 12: ``ToyPromise1``: If a Promise is resolved, the provided value
      is passed on to the *fulfillment reactions* (first arguments of
      ``.then()``). If a Promise is rejected, the provided value is passed on to
      the *rejection reactions* (second arguments of ``.then()``).


.. _method-.then:

17.2.1 Method ``.then()``
~~~~~~~~~~~~~~~~~~~~~~~~~

   Let’s examine ``.then()`` first. It has to handle two cases:

   -  If the Promise is still pending, it queues invocations of ``onFulfilled``
      and ``onRejected``. They are to be used later, when the Promise is
      settled.
   -  If the Promise is already fulfilled or rejected, ``onFulfilled`` or
      ``onRejected`` can be invoked right away.

   .. code::javascript

         then(onFulfilled, onRejected) {
           const fulfillmentTask = () => {
             if (typeof onFulfilled === 'function') {
               onFulfilled(this._promiseResult);
             }
           };
           const rejectionTask = () => {
             if (typeof onRejected === 'function') {
               onRejected(this._promiseResult);
             }
           };
           switch (this._promiseState) {
             case 'pending':
               this._fulfillmentTasks.push(fulfillmentTask);
               this._rejectionTasks.push(rejectionTask);
               break;
             case 'fulfilled':
               addToTaskQueue(fulfillmentTask);
               break;
             case 'rejected':
               addToTaskQueue(rejectionTask);
               break;
             default:
               throw new Error();
           }
         }

   The previous code snippet uses the following helper function:

   .. code::javascript

         function addToTaskQueue(task) {
           setTimeout(task, 0);
         }

   Promises must always settle asynchronously. That’s why we don’t directly
   execute tasks, we add them to the task queue of the event loop (of browsers,
   Node.js, etc.). Note that the real Promise API doesn’t use normal tasks (like
   ``setTimeout()``), it uses
   `microtasks <https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/>`__,
   which are tightly coupled with the current normal task and always execute
   directly after it.


.. _method-.resolve:

17.2.2 Method ``.resolve()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ``.resolve()`` works as follows: If the Promise is already settled, it does
   nothing (ensuring that a Promise can only be settled once). Otherwise, the
   state of the Promise changes to ``'fulfilled'`` and the result is cached in
   ``this.promiseResult``. Next, all fulfillment reactions that have been
   enqueued so far, are invoked.

   .. code::javascript

         resolve(value) {
           if (this._promiseState !== 'pending') return this;
           this._promiseState = 'fulfilled';
           this._promiseResult = value;
           this._clearAndEnqueueTasks(this._fulfillmentTasks);
           return this; // enable chaining
         }

   .. code::javascript

         _clearAndEnqueueTasks(tasks) {
           this._fulfillmentTasks = undefined;
           this._rejectionTasks = undefined;
           tasks.map(addToTaskQueue);
         }

   ``reject()`` is similar to ``resolve()``.


.. _version-2-chaining-.then-calls:

17.3 Version 2: Chaining ``.then()`` calls
------------------------------------------

   .. figure:: https://exploringjs.com/deep-js/img-book/21739415b003c15c3a4e4c21f84c0deba44f27f2.svg
      :name: fig:promise-impl2-chaining
      :width: 410px
      :height: 166px

      Figure 13: ``ToyPromise2`` chains ``.then()`` calls: ``.then()`` now
      returns a Promise that is resolved by whatever value is returned by the
      fulfillment reaction or the rejection reaction.

   The next feature we implement is chaining
   (fig. `13 <#fig:promise-impl2-chaining>`__): A value that we return from a
   fulfillment reaction or a rejection reaction can be handled by a fulfilment
   reaction in a following ``.then()`` call. (In the next version, chaining will
   become much more useful, due to special support for returning Promises.)

   In the following example:

   -  First ``.then()``: We return a value in a fulfillment reaction.
   -  Second ``.then()``: We receive that value via a fulfillment reaction.

   .. code::javascript

         new ToyPromise2()
           .resolve('result1')
           .then(x => {
             assert.equal(x, 'result1');
             return 'result2';
           })
           .then(x => {
             assert.equal(x, 'result2');
           });

   In the following example:

   -  First ``.then()``: We return a value in a rejection reaction.
   -  Second ``.then()``: We receive that value via a fulfillment reaction.

   .. code::javascript

         new ToyPromise2()
           .reject('error1')
           .then(null,
             x => {
               assert.equal(x, 'error1');
               return 'result2';
             })
           .then(x => {
             assert.equal(x, 'result2');
           });


.. _convenience-method-.catch:

17.4 Convenience method ``.catch()``
------------------------------------

   The new version introduces a convenience method ``.catch()`` that makes it
   easier to only provide a rejection reaction. Note that only providing a
   fulfillment reaction is already easy – we simply omit the second parameter of
   ``.then()`` (see previous example).

   The previous example looks nicer if we use it (line A):

   .. code::javascript

         new ToyPromise2()
           .reject('error1')
           .catch(x => { // (A)
             assert.equal(x, 'error1');
             return 'result2';
           })
           .then(x => {
             assert.equal(x, 'result2');
           });

   The following two method invocations are equivalent:

   .. code::javascript

         .catch(rejectionReaction)
         .then(null, rejectionReaction)

   This is how ``.catch()`` is implemented:

   .. code::javascript

         catch(onRejected) { // [new]
           return this.then(null, onRejected);
         }


.. _omitting-reactions:

17.5 Omitting reactions
-----------------------

   The new version also forwards fulfillments if we omit a fulfillment reaction
   and it forwards rejections if we omit a rejection reaction. Why is that
   useful?

   The following example demonstrates passing on rejections:

   .. code::javascript

         someAsyncFunction()
           .then(fulfillmentReaction1)
           .then(fulfillmentReaction2)
           .catch(rejectionReaction);

   ``rejectionReaction`` can now handle the rejections of
   ``someAsyncFunction()``, ``fulfillmentReaction1``, and
   ``fulfillmentReaction2``.

   The following example demonstrates passing on fulfillments:

   .. code::javascript

         someAsyncFunction()
           .catch(rejectionReaction)
           .then(fulfillmentReaction);

   If ``someAsyncFunction()`` rejects its Promise, ``rejectionReaction`` can fix
   whatever is wrong and return a fulfillment value that is then handled by
   ``fulfillmentReaction``.

   If ``someAsyncFunction()`` fulfills its Promise, ``fulfillmentReaction`` can
   also handle it because the ``.catch()`` is skipped.


.. _the-implementation:

17.6 The implementation
-----------------------

   How is all of this handled under the hood?

   -  ``.then()`` returns a Promise that is resolved with what either
      ``onFulfilled`` or ``onRejected`` return.
   -  If ``onFulfilled`` or ``onRejected`` are missing, whatever they would have
      received is passed on to the Promise returned by ``.then()``.

   Only ``.then()`` changes:

   .. code::javascript

         then(onFulfilled, onRejected) {
           const resultPromise = new ToyPromise2(); // [new]

           const fulfillmentTask = () => {
             if (typeof onFulfilled === 'function') {
               const returned = onFulfilled(this._promiseResult);
               resultPromise.resolve(returned); // [new]
             } else { // [new]
               // `onFulfilled` is missing
               // => we must pass on the fulfillment value
               resultPromise.resolve(this._promiseResult);
             }  
           };

           const rejectionTask = () => {
             if (typeof onRejected === 'function') {
               const returned = onRejected(this._promiseResult);
               resultPromise.resolve(returned); // [new]
             } else { // [new]
               // `onRejected` is missing
               // => we must pass on the rejection value
               resultPromise.reject(this._promiseResult);
             }
           };

           ···

           return resultPromise; // [new]
         }

   ``.then()`` creates and returns a new Promise (first line and last line of
   the method). Additionally:

   -  ``fulfillmentTask`` works differently. This is what now happens after
      fulfillment:

      -  If ``onFullfilled`` was provided, it is called and its result is used
         to resolve ``resultPromise``.
      -  If ``onFulfilled`` is missing, we use the fulfillment value of the
         current Promise to resolve ``resultPromise``.

   -  ``rejectionTask`` works differently. This is what now happens after
      rejection:

      -  If ``onRejected`` was provided, it is called and its result is used to
         *resolve* ``resultPromise``. Note that ``resultPromise`` is not
         rejected: We are assuming that ``onRejected()`` fixed whatever problem
         there was.
      -  If ``onRejected`` is missing, we use the rejection value of the current
         Promise to reject ``resultPromise``.


.. _version-3-flattening-promises-returned-from-.then-callbacks:

17.7 Version 3: Flattening Promises returned from ``.then()`` callbacks
-----------------------------------------------------------------------


.. _returning-promises-from-a-callback-of-.then:

17.7.1 Returning Promises from a callback of ``.then()``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Promise-flattening is mostly about making chaining more convenient: If we
   want to pass on a value from one ``.then()`` callback to the next one, we
   return it in the former. After that, ``.then()`` puts it into the Promise
   that it has already returned.

   This approach becomes inconvenient if we return a Promise from a ``.then()``
   callback. For example, the result of a Promise-based function (line A):

   .. code::javascript

         asyncFunc1()
         .then((result1) => {
           assert.equal(result1, 'Result of asyncFunc1()');
           return asyncFunc2(); // (A)
         })
         .then((result2Promise) => {
           result2Promise
           .then((result2) => { // (B)
             assert.equal(
               result2, 'Result of asyncFunc2()');
           });
         });

   This time, putting the value returned in line A into the Promise returned by
   ``.then()`` forces us to unwrap that Promise in line B. It would be nice if
   instead, the Promise returned in line A replaced the Promise returned by
   ``.then()``. How exactly that could be done is not immediately clear, but if
   it worked, it would let us write our code like this:

   .. code::javascript

         asyncFunc1()
         .then((result1) => {
           assert.equal(result1, 'Result of asyncFunc1()');
           return asyncFunc2(); // (A)
         })
         .then((result2) => {
           // result2 is the fulfillment value, not the Promise
           assert.equal(
             result2, 'Result of asyncFunc2()');
         });

   In line A, we returned a Promise. Thanks to Promise-flattening, ``result2``
   is the fulfillment value of that Promise, not the Promise itself.


.. _flattening-makes-promise-states-more-complicated:

17.7.2 Flattening makes Promise states more complicated
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container:: notebox

      |cogs-regular.svg|  **Flattening Promises in the ECMAScript specification**

      In the ECMAScript specification, the details of flattening Promises are
      described in `section “Promise
      Objects” <https://tc39.es/ecma262/#sec-promise-objects>`__.

   How does the Promise API handle flattening?

   If a Promise P is resolved with a Promise Q, then P does not wrap Q, P
   “becomes” Q: State and settlement value of P are now always the same as Q’s.
   That helps us with ``.then()`` because ``.then()`` resolves the Promise it
   returns with the value returned by one of its callbacks.

   How does P become Q? By *locking in* on Q: P becomes externally unresolvable
   and a settlement of Q triggers a settlement of P. Lock-in is an additional
   invisible Promise state that makes states more complicated.

   The Promise API has one additional feature: Q doesn’t have to be a Promise,
   only a so-called *thenable*. A thenable is an object with a method
   ``.then()``. The reason for this added flexibility is to enable different
   Promise implementations to work together (which mattered when Promises were
   first added to the language).

   Fig. `14 <#fig:promise-states-all>`__ visualizes the new states.

   .. figure:: https://exploringjs.com/deep-js/img-book/3202a462798139ba1de86b3f3cdc9cb22efb8c6a.svg
      :name: fig:promise-states-all
      :width: 311px
      :height: 222px

      Figure 14: All states of a Promise: Promise-flattening introduces the
      invisible pseudo-state “locked-in”. That state is reached if a Promise P
      is resolved with a thenable Q. Afterwards, state and settlement value of P
      is always the same as those of Q.

   Note that the concept of *resolving* has also become more complicated.
   Resolving a Promise now only means that it can’t be settled directly,
   anymore:

   -  Resolving may reject a Promise: We can resolve a Promise with a rejected
      Promise.
   -  Resolving may not even settle a Promise: We can resolve a Promise with
      another one that is always pending.

   The ECMAScript specification puts it this way: “An unresolved Promise is
   always in the pending state. A resolved Promise may be pending, fulfilled, or
   rejected.”


.. _implementing-promise-flattening:

17.7.3 Implementing Promise-flattening
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Fig. `15 <#fig:promise-impl3-flattening>`__ shows how ``ToyPromise3`` handles
   flattening.

   .. figure:: https://exploringjs.com/deep-js/img-book/bf748a25b8cc6e4febd77563e3638931b783e658.svg
      :name: fig:promise-impl3-flattening
      :width: 410px
      :height: 178px

      Figure 15: ``ToyPromise3`` flattens resolved Promises: If the first
      Promise is resolved with a thenable ``x1``, it locks in on ``x1`` and is
      settled with the settlement value of ``x1``. If the first Promise is
      resolved with a non-thenable value, everything works as it did before.

   We detect thenables via this function:

   .. code::javascript

         function isThenable(value) { // [new]
           return typeof value === 'object' && value !== null
             && typeof value.then === 'function';
         }

   To implement lock-in, we introduce a new boolean flag ``._alreadyResolved``.
   Setting it to ``true`` deactivates ``.resolve()`` and ``.reject()`` – for
   example:

   .. code::javascript

         resolve(value) { // [new]
           if (this._alreadyResolved) return this;
           this._alreadyResolved = true;

           if (isThenable(value)) {
             // Forward fulfillments and rejections from `value` to `this`.
             // The callbacks are always executed asynchronously
             value.then(
               (result) => this._doFulfill(result),
               (error) => this._doReject(error));
           } else {
             this._doFulfill(value);
           }

           return this; // enable chaining
         }

   If ``value`` is a thenable then we lock the current Promise in on it:

   -  If ``value`` is fulfilled with a result, the current Promise is also
      fulfilled with that result.
   -  If ``value`` is rejected with an error, the current Promise is also
      rejected with that error.

   The settling is performed via the private methods ``._doFulfill()`` and
   ``._doReject()``, to get around the protection via ``._alreadyResolved``.

   ``._doFulfill()`` is relatively simple:

   .. code::javascript

         _doFulfill(value) { // [new]
           assert.ok(!isThenable(value));
           this._promiseState = 'fulfilled';
           this._promiseResult = value;
           this._clearAndEnqueueTasks(this._fulfillmentTasks);
         }

   ``.reject()`` is not shown here. Its only new functionality is that it now
   also obeys ``._alreadyResolved``.


.. _version-4-exceptions-thrown-in-reaction-callbacks:

17.8 Version 4: Exceptions thrown in reaction callbacks
-------------------------------------------------------

   .. figure:: https://exploringjs.com/deep-js/img-book/a288229086e7e12d9b11e169069ef6e75b7c6bf1.svg
      :name: fig:promise-impl4-exceptions
      :width: 410px
      :height: 178px

      Figure 16: ``ToyPromise4`` converts exceptions in Promise reactions to
      rejections of the Promise returned by ``.then()``.

   As our final feature, we’d like our Promises to handle exceptions in user
   code as rejections (fig. `16 <#fig:promise-impl4-exceptions>`__). In this
   chapter, “user code” means the two callback parameters of .\ ``then()``.

   .. code::javascript

         new ToyPromise4()
           .resolve('a')
           .then((value) => {
             assert.equal(value, 'a');
             throw 'b'; // triggers a rejection
           })
           .catch((error) => {
             assert.equal(error, 'b');
           })

   ``.then()`` now runs the Promise reactions ``onFulfilled`` and ``onRejected``
   safely, via the helper method ``._runReactionSafely()`` – for example:

   .. code::javascript

           const fulfillmentTask = () => {
             if (typeof onFulfilled === 'function') {
               this._runReactionSafely(resultPromise, onFulfilled); // [new]
             } else {
               // `onFulfilled` is missing
               // => we must pass on the fulfillment value
               resultPromise.resolve(this._promiseResult);
             }  
           };

   ``._runReactionSafely()`` is implemented as follows:

   .. code::javascript

         _runReactionSafely(resultPromise, reaction) { // [new]
           try {
             const returned = reaction(this._promiseResult);
             resultPromise.resolve(returned);
           } catch (e) {
             resultPromise.reject(e);
           }
         }


.. _version-5-revealing-constructor-pattern:

17.9 Version 5: Revealing constructor pattern
---------------------------------------------

   We are skipping one last step: If we wanted to turn ``ToyPromise`` into an
   actual Promise implementation, we’d still need to implement `the revealing
   constructor
   pattern <https://blog.domenic.me/the-revealing-constructor-pattern/>`__:
   JavaScript Promises are not resolved and rejected via methods, but via
   functions that are handed to the *executor*, the callback parameter of the
   constructor.

   .. code::javascript

         const promise = new Promise(
           (resolve, reject) => { // executor
             // ···
           });

   If the executor throws an exception, then ``promise`` is rejected.

   `Comments <https://github.com/rauschma/deep-js/issues/18>`__

.. |image1| image:: https://exploringjs.com/deep-js/img-book/img/icons/external-link-regular.svg
   :height: 24px
.. |image2| image:: https://exploringjs.com/deep-js/img-book/img/icons/external-link-regular.svg
   :height: 24px
.. |image3| image:: https://exploringjs.com/deep-js/img-book/img/icons/eye-regular.svg
   :height: 24px



.. _ch_proxies:


18 Metaprogramming with Proxies
===============================

   --------------

      -  18.1 `Overview <#overview-proxies>`__
      -  18.2 `Programming versus metaprogramming <#programming-vs-metaprogramming>`__

         -  18.2.1 `Kinds of metaprogramming <#kinds-of-metaprogramming>`__

      -  18.3 `Proxies explained <#proxies-explained>`__

         -  18.3.1 `An example <#an-example>`__
         -  18.3.2 `Function-specific traps <#function-specific-traps>`__
         -  18.3.3 `Intercepting method calls <#intercepting-method-calls>`__
         -  18.3.4 `Revocable Proxies <#revocable-proxies>`__
         -  18.3.5 `Proxies as prototypes <#proxies-as-prototypes>`__
         -  18.3.6 `Forwarding intercepted operations <#forwarding-intercepted-operations>`__
         -  18.3.7 `Pitfall: not all objects can be wrapped transparently by Proxies <#mechanisms-ignored-by-proxies>`__

      -  18.4 `Use cases for Proxies <#proxy-use-cases>`__

         -  18.4.1 `Tracing property accesses (get, set) <#tracing-property-accesses-get-set>`__
         -  18.4.2 `Warning about unknown properties (get, set) <#warning-about-unknown-properties-get-set>`__
         -  18.4.3 `Negative Array indices (get) <#negative-array-indices-via-proxies>`__
         -  18.4.4 `Data binding (set) <#data-binding-set>`__
         -  18.4.5 `Accessing a restful web service (method calls) <#accessing-a-restful-web-service-method-calls>`__
         -  18.4.6 `Revocable references <#revocable-references>`__
         -  18.4.7 `Implementing the DOM in JavaScript <#implementing-the-dom-in-javascript>`__
         -  18.4.8 `More use cases <#more-use-cases>`__
         -  18.4.9 `Libraries that are using Proxies <#libraries-that-are-using-proxies>`__

      -  18.5 `The design of the Proxy API <#design-proxy-api>`__

         -  18.5.1 `Stratification: keeping base level and meta level separate <#stratification-keeping-base-level-and-meta-level-separate>`__
         -  18.5.2 `Virtual objects versus wrappers <#virtual-objects-versus-wrappers>`__
         -  18.5.3 `Transparent virtualization and handler encapsulation <#transparent-virtualization-and-handler-encapsulation>`__
         -  18.5.4 `The meta object protocol and Proxy traps <#meta-object-protocol>`__
         -  18.5.5 `Enforcing invariants for Proxies <#enforcing-invariants-for-proxies>`__

      -  18.6 `FAQ: Proxies <#faq-proxies>`__

         -  18.6.1 `Where is the enumerate trap? <#where-is-the-enumerate-trap>`__

      -  18.7 `Reference: the Proxy API <#reference-proxy-api>`__

         -  18.7.1 `Creating Proxies <#creating-proxies>`__
         -  18.7.2 `Handler methods <#handler-methods>`__
         -  18.7.3 `Invariants of handler methods <#invariants-of-handler-methods>`__
         -  18.7.4 `Operations that affect the prototype chain <#operations-that-affect-the-prototype-chain>`__
         -  18.7.5 `Reflect <#reflect>`__

      -  18.8 `Conclusion <#conclusion-proxies>`__
      -  18.9 `Further reading <#further-reading-proxies>`__

   --------------


.. _overview-proxies:

18.1 Overview
-------------

   Proxies enable us to intercept and customize operations performed on objects
   (such as getting properties). They are a *metaprogramming* feature.

   In the following example:

   -  ``proxy`` is an empty object.

   -  ``handler`` can intercept operations that are performed on ``proxy``, by
      implementing certain methods.

   -  If the handler does not intercept an operation, it is forwarded to
      ``target``.

   We are only intercepting one operation – ``get`` (getting properties):

   .. code::javascript

         const logged = [];

         const target = {size: 0};
         const handler = {
           get(target, propKey, receiver) {
             logged.push('GET ' + propKey);
             return 123;
           }
         };
         const proxy = new Proxy(target, handler);

   When we get the property ``proxy.size``, the handler intercepts that
   operation:

   .. code::javascript

         assert.equal(
           proxy.size, 123);

         assert.deepEqual(
           logged, ['GET size']);

   See `the reference for the complete
   API <#reference-proxy-api>`__ for a list of operations that
   can be intercepted.


.. _programming-vs-metaprogramming:

18.2 Programming versus metaprogramming
---------------------------------------

   Before we can get into what Proxies are and why they are useful, we first
   need to understand what *metaprogramming* is.

   In programming, there are levels:

   -  At the *base level* (also called: *application level*), code processes
      user input.
   -  At the *meta level*, code processes base level code.

   Base and meta level can be different languages. In the following meta
   program, the metaprogramming language is JavaScript and the base programming
   language is Java.

   .. code::javascript

         const str = 'Hello' + '!'.repeat(3);
         console.log('System.out.println("'+str+'")');

   Metaprogramming can take different forms. In the previous example, we have
   printed Java code to the console. Let’s use JavaScript as both
   metaprogramming language and base programming language. The classic example
   for this is the `eval() function <https://exploringjs.com/impatient-js/ch_callables.html#eval>`__,
   which lets us evaluate/compile JavaScript code on the fly. In the interaction
   below, we use it to evaluate the expression ``5 + 2``.

   .. code:: repl

         > eval('5 + 2')
         7

   Other JavaScript operations may not look like metaprogramming, but actually
   are, if we look closer:

   .. code::javascript

         // Base level
         const obj = {
           hello() {
             console.log('Hello!');
           },
         };

         // Meta level
         for (const key of Object.keys(obj)) {
           console.log(key);
         }

   The program is examining its own structure while running. This doesn’t look
   like metaprogramming, because the separation between programming constructs
   and data structures is fuzzy in JavaScript. All of the ``Object.*`` methods
   can be considered metaprogramming functionality.


.. _kinds-of-metaprogramming:

18.2.1 Kinds of metaprogramming
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Reflective metaprogramming means that a program processes itself. `Kiczales
   et al. [2] <#further-reading-proxies>`__ distinguish three
   kinds of reflective metaprogramming:

   -  **Introspection:** We have read-only access to the structure of a program.
   -  **Self-modification:** We can change that structure.
   -  **Intercession:** We can redefine the semantics of some language
      operations.

   Let’s look at examples.

   **Example: introspection.** ``Object.keys()`` performs introspection (see
   previous example).

   **Example: self-modification.** The following function ``moveProperty`` moves
   a property from a source to a target. It performs self-modification via the
   bracket operator for property access, the assignment operator and the
   ``delete`` operator. (In production code, we’d probably use `property
   descriptors <#property-descriptors>`__ for
   this task.)

   .. code::javascript

         function moveProperty(source, propertyName, target) {
           target[propertyName] = source[propertyName];
           delete source[propertyName];
         }

   This is how ``moveProperty()`` is used:

   .. code::javascript

         const obj1 = { color: 'blue' };
         const obj2 = {};

         moveProperty(obj1, 'color', obj2);

         assert.deepEqual(
           obj1, {});

         assert.deepEqual(
           obj2, { color: 'blue' });

   ECMAScript 5 doesn’t support intercession; Proxies were created to fill that
   gap.


.. _proxies-explained:

18.3 Proxies explained
----------------------

   Proxies bring intercession to JavaScript. They work as follows. There are
   many operations that we can perform on an object ``obj`` – for example:

   -  Getting the property ``prop`` of an object ``obj`` (``obj.prop``)
   -  Checking whether an object ``obj`` has a property ``prop``
      (``'prop' in obj``)

   Proxies are special objects that allow us to customize some of these
   operations. A Proxy is created with two parameters:

   -  ``handler``: For each operation, there is a corresponding handler method
      that – if present – performs that operation. Such a method *intercepts*
      the operation (on its way to the target) and is called a *trap* – a term
      borrowed from the domain of operating systems.
   -  ``target``: If the handler doesn’t intercept an operation, then it is
      performed on the target. That is, it acts as a fallback for the handler.
      In a way, the Proxy wraps the target.

   Note: The verb form of “intercession” is “to intercede”. Interceding is
   bidirectional in nature. Intercepting is unidirectional in nature.


.. _an-example:

18.3.1 An example
~~~~~~~~~~~~~~~~~

   In the following example, the handler intercepts the operations ``get`` and
   ``has``.

   .. code::javascript

         const logged = [];

         const target = {};
         const handler = {
           /** Intercepts: getting properties */
           get(target, propKey, receiver) {
             logged.push(`GET ${propKey}`);
             return 123;
           },

           /** Intercepts: checking whether properties exist */
           has(target, propKey) {
             logged.push(`HAS ${propKey}`);
             return true;
           }
         };
         const proxy = new Proxy(target, handler);

   If we get a property (line A) or use the ``in`` operator (line B), the
   handler intercepts those operations:

   .. code::javascript

         assert.equal(proxy.age, 123); // (A)
         assert.equal('hello' in proxy, true); // (B)

         assert.deepEqual(
           logged, [
             'GET age',
             'HAS hello',
           ]);

   The handler doesn’t implement the trap ``set`` (setting properties).
   Therefore, setting ``proxy.age`` is forwarded to ``target`` and leads to
   ``target.age`` being set:

   .. code::javascript

         proxy.age = 99;
         assert.equal(target.age, 99);


.. _function-specific-traps:

18.3.2 Function-specific traps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If the target is a function, two additional operations can be intercepted:

   -  ``apply``: Making a function call. Triggered via:

      -  ``proxy(···)``
      -  ``proxy.call(···)``
      -  ``proxy.apply(···)``

   -  ``construct``: Making a constructor call. Triggered via:

      -  ``new proxy(···)``

   The reason for only enabling these traps for function targets is simple:
   Otherwise, we wouldn’t be able to forward the operations ``apply`` and
   ``construct``.


.. _intercepting-method-calls:

18.3.3 Intercepting method calls
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we want to intercept method calls via a Proxy, we are facing a challenge:
   There is no trap for method calls. Instead, a method call is viewed as a
   sequence of two operations:

   -  A ``get`` to retrieve a function
   -  An ``apply`` to call that function

   Therefore, if we want to intercept method calls, we need to intercept two
   operations:

   -  First, we intercept the ``get`` and return a function.
   -  Second, we intercept the invocation of that function.

   The following code demonstrates how that is done.

   .. code::javascript

         const traced = [];

         function traceMethodCalls(obj) {
           const handler = {
             get(target, propKey, receiver) {
               const origMethod = target[propKey];
               return function (...args) { // implicit parameter `this`!
                 const result = origMethod.apply(this, args);
                 traced.push(propKey + JSON.stringify(args)
                   + ' -> ' + JSON.stringify(result));
                 return result;
               };
             }
           };
           return new Proxy(obj, handler);
         }

   We are not using a Proxy for the second interception; we are simply wrapping
   the original method in a function.

   Let’s use the following object to try out ``traceMethodCalls()``:

   .. code::javascript

         const obj = {
           multiply(x, y) {
             return x * y;
           },
           squared(x) {
             return this.multiply(x, x);
           },
         };

         const tracedObj = traceMethodCalls(obj);
         assert.equal(
           tracedObj.squared(9), 81);

         assert.deepEqual(
           traced, [
             'multiply[9,9] -> 81',
             'squared[9] -> 81',
           ]);

   Even the call ``this.multiply()`` inside ``obj.squared()`` is traced! That’s
   because ``this`` keeps referring to the Proxy.

   This is not the most efficient solution. One could, for example, cache
   methods. Furthermore, Proxies themselves have an impact on performance.


.. _revocable-proxies:

18.3.4 Revocable Proxies
~~~~~~~~~~~~~~~~~~~~~~~~

   Proxies can be *revoked* (switched off):

   .. code::javascript

         const {proxy, revoke} = Proxy.revocable(target, handler);

   After we call the function ``revoke`` for the first time, any operation we
   apply to ``proxy`` causes a ``TypeError``. Subsequent calls of ``revoke``
   have no further effect.

   .. code::javascript

         const target = {}; // Start with an empty object
         const handler = {}; // Don’t intercept anything
         const {proxy, revoke} = Proxy.revocable(target, handler);

         // `proxy` works as if it were the object `target`:
         proxy.city = 'Paris';
         assert.equal(proxy.city, 'Paris');

         revoke();

         assert.throws(
           () => proxy.prop,
           /^TypeError: Cannot perform 'get' on a proxy that has been revoked$/
         );


.. _proxies-as-prototypes:

18.3.5 Proxies as prototypes
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   A Proxy ``proto`` can become the prototype of an object ``obj``. Some
   operations that begin in ``obj`` may continue in ``proto``. One such
   operation is ``get``.

   .. code::javascript

         const proto = new Proxy({}, {
           get(target, propertyKey, receiver) {
             console.log('GET '+propertyKey);
             return target[propertyKey];
           }
         });

         const obj = Object.create(proto);
         obj.weight;

         // Output:
         // 'GET weight'

   The property ``weight`` can’t be found in ``obj``, which is why the search
   continues in ``proto`` and the trap ``get`` is triggered there. There are
   more operations that affect prototypes; they are listed at the end of this
   chapter.


.. _forwarding-intercepted-operations:

18.3.6 Forwarding intercepted operations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Operations whose traps the handler doesn’t implement are automatically
   forwarded to the target. Sometimes there is some task we want to perform in
   addition to forwarding the operation. For example, intercepting and logging
   all operations, without preventing them from reaching the target:

   .. code::javascript

         const handler = {
           deleteProperty(target, propKey) {
             console.log('DELETE ' + propKey);
             return delete target[propKey];
           },
           has(target, propKey) {
             console.log('HAS ' + propKey);
             return propKey in target;
           },
           // Other traps: similar
         }


.. _improvement-using-reflect.:

18.3.6.1 Improvement: using ``Reflect.*``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   For each trap, we first log the name of the operation and then forward it by
   performing it manually. JavaScript has the module-like object ``Reflect``
   that helps with forwarding.

   For each trap:

   .. code::javascript

         handler.trap(target, arg_1, ···, arg_n)

   ``Reflect`` has a method:

   .. code::javascript

         Reflect.trap(target, arg_1, ···, arg_n)

   If we use ``Reflect``, the previous example looks as follows.

   .. code::javascript

         const handler = {
           deleteProperty(target, propKey) {
             console.log('DELETE ' + propKey);
             return Reflect.deleteProperty(target, propKey);
           },
           has(target, propKey) {
             console.log('HAS ' + propKey);
             return Reflect.has(target, propKey);
           },
           // Other traps: similar
         }


.. _improvement-implementing-the-handler-with-proxy:

18.3.6.2 Improvement: implementing the handler with Proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Now what each of the traps does is so similar that we can implement the
   handler via a Proxy:

   .. code::javascript

         const handler = new Proxy({}, {
           get(target, trapName, receiver) {
             // Return the handler method named trapName
             return (...args) => {
               console.log(trapName.toUpperCase() + ' ' + args[1]);
               // Forward the operation
               return Reflect[trapName](...args);
             };
           },
         });

   For each trap, the Proxy asks for a handler method via the ``get`` operation
   and we give it one. That is, all of the handler methods can be implemented
   via the single meta-method ``get``. It was one of the goals for the Proxy API
   to make this kind of virtualization simple.

   Let’s use this Proxy-based handler:

   .. code::javascript

         const target = {};
         const proxy = new Proxy(target, handler);

         proxy.distance = 450; // set
         assert.equal(proxy.distance, 450); // get

         // Was `set` operation correctly forwarded to `target`?
         assert.equal(
           target.distance, 450);

         // Output:
         // 'SET distance'
         // 'GETOWNPROPERTYDESCRIPTOR distance'
         // 'DEFINEPROPERTY distance'
         // 'GET distance'


.. _mechanisms-ignored-by-proxies:

18.3.7 Pitfall: not all objects can be wrapped transparently by Proxies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   A Proxy object can be seen as intercepting operations performed on its target
   object – the Proxy wraps the target. The Proxy’s handler object is like an
   observer or listener for the Proxy. It specifies which operations should be
   intercepted by implementing corresponding methods (``get`` for reading a
   property, etc.). If the handler method for an operation is missing then that
   operation is not intercepted. It is simply forwarded to the target.

   Therefore, if the handler is the empty object, the Proxy should transparently
   wrap the target. Alas, that doesn’t always work.


.. _wrapping-an-object-affects-this:

18.3.7.1 Wrapping an object affects ``this``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Before we dig deeper, let’s quickly review how wrapping a target affects
   ``this``:

   .. code::javascript

         const target = {
           myMethod() {
             return {
               thisIsTarget: this === target,
               thisIsProxy: this === proxy,
             };
           }
         };
         const handler = {};
         const proxy = new Proxy(target, handler);

   If we call ``target.myMethod()`` directly, ``this`` points to ``target``:

   .. code::javascript

         assert.deepEqual(
           target.myMethod(), {
             thisIsTarget: true,
             thisIsProxy: false,
           });

   If we invoke that method via the Proxy, ``this`` points to ``proxy``:

   .. code::javascript

         assert.deepEqual(
           proxy.myMethod(), {
             thisIsTarget: false,
             thisIsProxy: true,
           });

   That is, if the Proxy forwards a method call to the target, ``this`` is not
   changed. As a consequence, the Proxy continues to be in the loop if the
   target uses ``this``, e.g., to make a method call.


.. _objects-that-cant-be-wrapped-transparently:

18.3.7.2 Objects that can’t be wrapped transparently
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Normally, Proxies with empty handlers wrap targets transparently: we don’t
   notice that they are there and they don’t change the behavior of the targets.

   If, however, a target associates information with ``this`` via a mechanism
   that is not controlled by Proxies, we have a problem: things fail, because
   different information is associated depending on whether the target is
   wrapped or not.

   For example, the following class ``Person`` stores private information in the
   WeakMap ``_name`` (more information on this technique is given in `JavaScript
   for impatient programmers <https://exploringjs.com/impatient-js/ch_weakmaps.html#private-data-in-weakmaps>`__):

   .. code::javascript

         const _name = new WeakMap();
         class Person {
           constructor(name) {
             _name.set(this, name);
           }
           get name() {
             return _name.get(this);
           }
         }

   Instances of ``Person`` can’t be wrapped transparently:

   .. code::javascript

         const jane = new Person('Jane');
         assert.equal(jane.name, 'Jane');

         const proxy = new Proxy(jane, {});
         assert.equal(proxy.name, undefined);

   ``jane.name`` is different from the wrapped ``proxy.name``. The following
   implementation does not have this problem:

   .. code::javascript

         class Person2 {
           constructor(name) {
             this._name = name;
           }
           get name() {
             return this._name;
           }
         }

         const jane = new Person2('Jane');
         assert.equal(jane.name, 'Jane');

         const proxy = new Proxy(jane, {});
         assert.equal(proxy.name, 'Jane');


.. _wrapping-instances-of-built-in-constructors:

18.3.7.3 Wrapping instances of built-in constructors
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Instances of most built-in constructors also use a mechanism that is not
   intercepted by Proxies. They therefore can’t be wrapped transparently,
   either. We can see that if we use an instance of ``Date``:

   .. code::javascript

         const target = new Date();
         const handler = {};
         const proxy = new Proxy(target, handler);

         assert.throws(
           () => proxy.getFullYear(),
           /^TypeError: this is not a Date object\.$/
         );

   The mechanism that is unaffected by Proxies is called *internal slots*. These
   slots are property-like storage associated with instances. The specification
   handles these slots as if they were properties with names in square brackets.
   For example, the following method is internal and can be invoked on all
   objects ``O``:

   .. code::javascript

         O.[[GetPrototypeOf]]()

   In contrast to properties, accessing internal slots is not done via normal
   “get” and “set” operations. If ``.getFullYear()`` is invoked via a Proxy, it
   can’t find the internal slot it needs on ``this`` and complains via a
   ``TypeError``.

   For ``Date`` methods, `the language specification
   states <https://tc39.es/ecma262/#sec-properties-of-the-date-prototype-object>`__:

      Unless explicitly defined otherwise, the methods of the Date prototype
      object defined below are not generic and the ``this`` value passed to them
      must be an object that has a ``[[DateValue]]`` internal slot that has been
      initialized to a time value.


.. _a-work-around:

18.3.7.4 A work-around
~~~~~~~~~~~~~~~~~~~~~~

   As a work-around, we can change how the handler forwards method calls and
   selectively set ``this`` to the target and not the Proxy:

   .. code::javascript

         const handler = {
           get(target, propKey, receiver) {
             if (propKey === 'getFullYear') {
               return target.getFullYear.bind(target);
             }
             return Reflect.get(target, propKey, receiver);
           },
         };
         const proxy = new Proxy(new Date('2030-12-24'), handler);
         assert.equal(proxy.getFullYear(), 2030);

   The drawback of this approach is that none of the operations that the method
   performs on ``this`` go through the Proxy.


.. _arrays-can-be-wrapped-transparently:

18.3.7.5 Arrays can be wrapped transparently
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In contrast to other built-ins, Arrays can be wrapped transparently:

   .. code::javascript

         const p = new Proxy(new Array(), {});

         p.push('a');
         assert.equal(p.length, 1);

         p.length = 0;
         assert.equal(p.length, 0);

   The reason for Arrays being wrappable is that, even though property access is
   customized to make ``.length`` work, Array methods don’t rely on internal
   slots – they are generic.


.. _proxy-use-cases:

18.4 Use cases for Proxies
--------------------------

   This section demonstrates what Proxies can be used for. That will give us the
   opportunity to see the API in action.


.. _tracing-property-accesses-get-set:

18.4.1 Tracing property accesses (``get``, ``set``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Let’s assume we have a function ``tracePropertyAccesses(obj, propKeys)`` that
   logs whenever a property of ``obj``, whose key is in the Array ``propKeys``,
   is set or got. In the following code, we apply that function to an instance
   of the class ``Point``:

   .. code::javascript

         class Point {
           constructor(x, y) {
             this.x = x;
             this.y = y;
           }
           toString() {
             return `Point(${this.x}, ${this.y})`;
           }
         }

         // Trace accesses to properties `x` and `y`
         const point = new Point(5, 7);
         const tracedPoint = tracePropertyAccesses(point, ['x', 'y']);

   Getting and setting properties of the traced object ``p`` has the following
   effects:

   .. code::javascript

         assert.equal(tracedPoint.x, 5);
         tracedPoint.x = 21;

         // Output:
         // 'GET x'
         // 'SET x=21'

   Intriguingly, tracing also works whenever ``Point`` accesses the properties
   because ``this`` now refers to the traced object, not to an instance of
   ``Point``:

   .. code::javascript

         assert.equal(
           tracedPoint.toString(),
           'Point(21, 7)');

         // Output:
         // 'GET x'
         // 'GET y'


.. _implementing-tracepropertyaccesses-without-proxies:

18.4.1.1 Implementing ``tracePropertyAccesses()`` without Proxies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Without Proxies we’d implement ``tracePropertyAccesses()`` as follows. We
   replace each property with a getter and a setter that traces accesses. The
   setters and getters use an extra object, ``propData``, to store the data of
   the properties. Note that we are destructively changing the original
   implementation, which means that we are metaprogramming.

   .. code::javascript

         function tracePropertyAccesses(obj, propKeys, log=console.log) {
           // Store the property data here
           const propData = Object.create(null);

           // Replace each property with a getter and a setter
           propKeys.forEach(function (propKey) {
             propData[propKey] = obj[propKey];
             Object.defineProperty(obj, propKey, {
               get: function () {
                 log('GET '+propKey);
                 return propData[propKey];
               },
               set: function (value) {
                 log('SET '+propKey+'='+value);
                 propData[propKey] = value;
               },
             });
           });
           return obj;
         }

   The parameter ``log`` makes it easier to unit-test this function:

   .. code::javascript

         const obj = {};
         const logged = [];
         tracePropertyAccesses(obj, ['a', 'b'], x => logged.push(x));

         obj.a = 1;
         assert.equal(obj.a, 1);

         obj.c = 3;
         assert.equal(obj.c, 3);

         assert.deepEqual(
           logged, [
             'SET a=1',
             'GET a',
           ]);


.. _implementing-tracepropertyaccesses-with-a-proxy:

18.4.1.2 Implementing ``tracePropertyAccesses()`` with a Proxy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Proxies give us a simpler solution. We intercept property getting and setting
   and don’t have to change the implementation.

   .. code::javascript

         function tracePropertyAccesses(obj, propKeys, log=console.log) {
           const propKeySet = new Set(propKeys);
           return new Proxy(obj, {
             get(target, propKey, receiver) {
               if (propKeySet.has(propKey)) {
                 log('GET '+propKey);
               }
               return Reflect.get(target, propKey, receiver);
             },
             set(target, propKey, value, receiver) {
               if (propKeySet.has(propKey)) {
                 log('SET '+propKey+'='+value);
               }
               return Reflect.set(target, propKey, value, receiver);
             },
           });
         }


.. _warning-about-unknown-properties-get-set:

18.4.2 Warning about unknown properties (``get``, ``set``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   When it comes to accessing properties, JavaScript is very forgiving. For
   example, if we try to read a property and misspell its name, we don’t get an
   exception – we get the result ``undefined``.

   We can use Proxies to get an exception in such a case. This works as follows.
   We make the Proxy a prototype of an object. If a property isn’t found in the
   object, the ``get`` trap of the Proxy is triggered:

   -  If the property doesn’t even exist in the prototype chain after the Proxy,
      it really is missing and we throw an exception.
   -  Otherwise, we return the value of the inherited property. We do so by
      forwarding the ``get`` operation to the target (the Proxy gets its
      prototype from the target).

   This is an implementation of this approach:

   .. code::javascript

         const propertyCheckerHandler = {
           get(target, propKey, receiver) {
             // Only check string property keys
             if (typeof propKey === 'string' && !(propKey in target)) {
               throw new ReferenceError('Unknown property: ' + propKey);
             }
             return Reflect.get(target, propKey, receiver);
           }
         };
         const PropertyChecker = new Proxy({}, propertyCheckerHandler);

   Let’s use ``PropertyChecker`` for an object:

   .. code::javascript

         const jane = {
           __proto__: PropertyChecker,
           name: 'Jane',
         };

         // Own property:
         assert.equal(
           jane.name,
           'Jane');

         // Typo:
         assert.throws(
           () => jane.nmae,
           /^ReferenceError: Unknown property: nmae$/);

         // Inherited property:
         assert.equal(
           jane.toString(),
           '[object Object]');


.. _propertychecker-as-a-class:

18.4.2.1 ``PropertyChecker`` as a class
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we turn ``PropertyChecker`` into a constructor, we can use it for classes
   via ``extends``:

   .. code::javascript

         // We can’t change .prototype of classes, so we are using a function
         function PropertyChecker2() {}
         PropertyChecker2.prototype = new Proxy({}, propertyCheckerHandler);

         class Point extends PropertyChecker2 {
           constructor(x, y) {
             super();
             this.x = x;
             this.y = y;
           }
         }

         const point = new Point(5, 7);
         assert.equal(point.x, 5);
         assert.throws(
           () => point.z,
           /^ReferenceError: Unknown property: z/);

   This is the prototype chain of ``point``:

   .. code::javascript

         const p = Object.getPrototypeOf.bind(Object);
         assert.equal(p(point), Point.prototype);
         assert.equal(p(p(point)), PropertyChecker2.prototype);
         assert.equal(p(p(p(point))), Object.prototype);


.. _preventing-the-accidental-creation-of-properties:

18.4.2.2 Preventing the accidental creation of properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we are worried about accidentally *creating* properties, we have two
   options:

   -  We can either wrap a Proxy around objects that traps ``set``.
   -  Or we can make an object ``obj`` non-extensible via
      ```Object.preventExtensions(obj)`` <#preventing-extensions-of-objects>`__,
      which means that JavaScript doesn’t let us add new (own) properties to
      ``obj``.


.. _negative-array-indices-via-proxies:

18.4.3 Negative Array indices (``get``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Some Array methods let us refer to the last element via ``-1``, to the
   second-to-last element via ``-2``, etc. For example:

   .. code:: repl

         > ['a', 'b', 'c'].slice(-1)
         [ 'c' ]

   Alas, that doesn’t work when accessing elements via the bracket operator
   (``[]``). We can, however, use Proxies to add that capability. The following
   function ``createArray()`` creates Arrays that support negative indices. It
   does so by wrapping Proxies around Array instances. The Proxies intercept the
   ``get`` operation that is triggered by the bracket operator.

   .. code::javascript

         function createArray(...elements) {
           const handler = {
             get(target, propKey, receiver) {
               if (typeof propKey === 'string') {
                 const index = Number(propKey);
                 if (index < 0) {
                   propKey = String(target.length + index);
                 }
               }
               return Reflect.get(target, propKey, receiver);
             }
           };
           // Wrap a proxy around the Array
           return new Proxy(elements, handler);
         }
         const arr = createArray('a', 'b', 'c');
         assert.equal(
           arr[-1], 'c');
         assert.equal(
           arr[0], 'a');
         assert.equal(
           arr.length, 3);


.. _data-binding-set:

18.4.4 Data binding (``set``)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Data binding is about syncing data between objects. One popular use case are
   widgets based on the MVC (Model View Controler) pattern: With data binding,
   the *view* (the widget) stays up-to-date if we change the *model* (the data
   visualized by the widget).

   To implement data binding, we have to observe and react to changes made to an
   object. The following code snippet is a sketch of how observing changes could
   work for Arrays.

   .. code::javascript

         function createObservedArray(callback) {
           const array = [];
           return new Proxy(array, {
             set(target, propertyKey, value, receiver) {
               callback(propertyKey, value);
               return Reflect.set(target, propertyKey, value, receiver);
             }
           });
         }
         const observedArray = createObservedArray(
           (key, value) => console.log(
             `${JSON.stringify(key)} = ${JSON.stringify(value)}`));
         observedArray.push('a');

         // Output:
         // '"0" = "a"'
         // '"length" = 1'


.. _accessing-a-restful-web-service-method-calls:

18.4.5 Accessing a restful web service (method calls)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   A Proxy can be used to create an object on which arbitrary methods can be
   invoked. In the following example, the function ``createWebService()``
   creates one such object, ``service``. Invoking a method on ``service``
   retrieves the contents of the web service resource with the same name.
   Retrieval is handled via a Promise.

   .. code::javascript

         const service = createWebService('http://example.com/data');
         // Read JSON data in http://example.com/data/employees
         service.employees().then((jsonStr) => {
           const employees = JSON.parse(jsonStr);
           // ···
         });

   The following code is a quick and dirty implementation of
   ``createWebService`` without Proxies. We need to know beforehand what methods
   will be invoked on ``service``. The parameter ``propKeys`` provides us with
   that information; it holds an Array with method names.

   .. code::javascript

         function createWebService(baseUrl, propKeys) {
           const service = {};
           for (const propKey of propKeys) {
             service[propKey] = () => {
               return httpGet(baseUrl + '/' + propKey);
             };
           }
           return service;
         }

   With Proxies, ``createWebService()`` is simpler:

   .. code::javascript

         function createWebService(baseUrl) {
           return new Proxy({}, {
             get(target, propKey, receiver) {
               // Return the method to be called
               return () => httpGet(baseUrl + '/' + propKey);
             }
           });
         }

   Both implementations use the following function to make HTTP GET requests
   (how it works is explained in `JavaScript for impatient
   programmers <https://exploringjs.com/impatient-js/ch_promises.html#promisifying-xmlhttprequest>`__).

   .. code::javascript

         function httpGet(url) {
           return new Promise(
             (resolve, reject) => {
               const xhr = new XMLHttpRequest();
               xhr.onload = () => {
                 if (xhr.status === 200) {
                   resolve(xhr.responseText); // (A)
                 } else {
                   // Something went wrong (404, etc.)
                   reject(new Error(xhr.statusText)); // (B)
                 }
               }
               xhr.onerror = () => {
                 reject(new Error('Network error')); // (C)
               };
               xhr.open('GET', url);
               xhr.send();
             });
         }


.. _revocable-references:

18.4.6 Revocable references
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   *Revocable references* work as follows: A client is not allowed to access an
   important resource (an object) directly, only via a reference (an
   intermediate object, a wrapper around the resource). Normally, every
   operation applied to the reference is forwarded to the resource. After the
   client is done, the resource is protected by *revoking* the reference, by
   switching it off. Henceforth, applying operations to the reference throws
   exceptions and nothing is forwarded, anymore.

   In the following example, we create a revocable reference for a resource. We
   then read one of the resource’s properties via the reference. That works,
   because the reference grants us access. Next, we revoke the reference. Now
   the reference doesn’t let us read the property, anymore.

   .. code::javascript

         const resource = { x: 11, y: 8 };
         const {reference, revoke} = createRevocableReference(resource);

         // Access granted
         assert.equal(reference.x, 11);

         revoke();

         // Access denied
         assert.throws(
           () => reference.x,
           /^TypeError: Cannot perform 'get' on a proxy that has been revoked/
         );

   Proxies are ideally suited for implementing revocable references, because
   they can intercept and forward operations. This is a simple Proxy-based
   implementation of ``createRevocableReference``:

   .. code::javascript

         function createRevocableReference(target) {
           let enabled = true;
           return {
             reference: new Proxy(target, {
               get(target, propKey, receiver) {
                 if (!enabled) {
                   throw new TypeError(
                     `Cannot perform 'get' on a proxy that has been revoked`);
                 }
                 return Reflect.get(target, propKey, receiver);
               },
               has(target, propKey) {
                 if (!enabled) {
                   throw new TypeError(
                     `Cannot perform 'has' on a proxy that has been revoked`);
                 }
                 return Reflect.has(target, propKey);
               },
               // (Remaining methods omitted)
             }),
             revoke: () => {
               enabled = false;
             },
           };
         }

   The code can be simplified via the Proxy-as-handler technique from the
   previous section. This time, the handler basically is the ``Reflect`` object.
   Thus, the ``get`` trap normally returns the appropriate ``Reflect`` method.
   If the reference has been revoked, a ``TypeError`` is thrown, instead.

   .. code::javascript

         function createRevocableReference(target) {
           let enabled = true;
           const handler = new Proxy({}, {
             get(_handlerTarget, trapName, receiver) {
               if (!enabled) {
                 throw new TypeError(
                   `Cannot perform '${trapName}' on a proxy`
                   + ` that has been revoked`);
               }
               return Reflect[trapName];
             }
           });
           return {
             reference: new Proxy(target, handler),
             revoke: () => {
               enabled = false;
             },
           };
         }

   However, we don’t have to implement revocable references ourselves because
   Proxies can be revoked. This time, the revoking happens in the Proxy, not in
   the handler. All the handler has to do is forward every operation to the
   target. As we have seen that happens automatically if the handler doesn’t
   implement any traps.

   .. code::javascript

         function createRevocableReference(target) {
           const handler = {}; // forward everything
           const { proxy, revoke } = Proxy.revocable(target, handler);
           return { reference: proxy, revoke };
         }


.. _membranes:

18.4.6.1 Membranes
~~~~~~~~~~~~~~~~~~

   *Membranes* build on the idea of revocable references: Libraries for safely
   running untrusted code wrap a membrane around that code to isolate it and to
   keep the rest of the system safe. Objects pass the membrane in two
   directions:

   -  The untrusted code may receive objects (“dry objects”) from the outside.
   -  Or it may hand objects (“wet objects”) to the outside.

   In both cases, revocable references are wrapped around the objects. Objects
   returned by wrapped functions or methods are also wrapped. Additionally, if a
   wrapped wet object is passed back into a membrane, it is unwrapped.

   Once the untrusted code is done, all of the revocable references are revoked.
   As a result, none of its code on the outside can be executed anymore and
   outside objects that it references, cease to work as well. The `Caja
   Compiler <https://developers.google.com/caja/>`__ is “a tool for making third
   party HTML, CSS and JavaScript safe to embed in your website”. It uses
   membranes to achieve this goal.


.. _implementing-the-dom-in-javascript:

18.4.7 Implementing the DOM in JavaScript
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The browsers’ Document Object Model (DOM) is usually implemented as a mix of
   JavaScript and C++. Implementing it in pure JavaScript is useful for:

   -  Emulating a browser environment, e.g. to manipulate HTML in Node.js.
      `jsdom <https://github.com/tmpvar/jsdom>`__ is one library that does that.
   -  Making the DOM faster (switching between JavaScript and C++ costs time).

   Alas, the standard DOM can do things that are not easily replicated in
   JavaScript. For example, most DOM collections are live views on the current
   state of the DOM that change dynamically whenever the DOM changes. As a
   result, pure JavaScript implementations of the DOM are not very efficient.
   One of the reasons for adding Proxies to JavaScript was to enable more
   efficient DOM implementations.


.. _more-use-cases:

18.4.8 More use cases
~~~~~~~~~~~~~~~~~~~~~

   There are more use cases for Proxies. For example:

   -  Remoting: Local placeholder objects forward method invocations to remote
      objects. This use case is similar to the web service example.

   -  Data access objects for databases: Reading and writing to the object reads
      and writes to the database. This use case is similar to the web service
      example.

   -  Profiling: Intercept method invocations to track how much time is spent in
      each method. This use case is similar to the tracing example.


.. _libraries-that-are-using-proxies:

18.4.9 Libraries that are using Proxies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   -  `Immer (by Michel Weststrate) <https://github.com/immerjs/immer>`__ helps
      with non-destructively updating data. The changes that should be applied
      are specified by invoking methods, setting properties, setting Array
      elements, etc. of a (potentially nested) *draft state*. Draft states are
      implemented via Proxies.

   -  `MobX <https://mobx.js.org/>`__ lets you observe changes to data
      structures such as objects, Arrays and class instances. That is
      implemented via Proxies.

   -  `Alpine.js (by Caleb Porzio) <https://github.com/alpinejs/alpine>`__ is a
      frontend library that implements data binding via Proxies.

   -  `on-change (by Sindre
      Sorhus) <https://github.com/sindresorhus/on-change>`__ observes changes to
      an object (via Proxies) and reports them.

   -  `Env utility (by Nicholas C.
      Zakas) <https://github.com/humanwhocodes/env>`__ lets you access
      environment variables via properties and throws exceptions if they don’t
      exist. That is implemented via Proxies.

   -  `LDflex (by Ruben Verborgh and Ruben
      Taelman) <https://github.com/LDflex/LDflex>`__ provides a query language
      for Linked Data (think Semantic Web). The fluid query API is implemented
      via Proxies.


.. _design-proxy-api:

18.5 The design of the Proxy API
--------------------------------

   In this section, we go deeper into how Proxies work and why they work that
   way.


.. _stratification-keeping-base-level-and-meta-level-separate:

18.5.1 Stratification: keeping base level and meta level separate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Firefox used to support a limited from of interceding metaprogramming for a
   while: If an object ``O`` had a method named ``__noSuchMethod__``, it was
   notified whenever a method was invoked on ``O`` that didn’t exist. The
   following code demonstrates how that worked:

   .. code::javascript

         const calc = {
           __noSuchMethod__: function (methodName, args) {
             switch (methodName) {
               case 'plus':
                 return args.reduce((a, b) => a + b);
               case 'times':
                 return args.reduce((a, b) => a * b);
               default:
                 throw new TypeError('Unsupported: ' + methodName);
             }
           }
         };

         // All of the following method calls are implemented via
         // .__noSuchMethod__().
         assert.equal(
           calc.plus(3, 5, 2), 10);
         assert.equal(
           calc.times(2, 3, 4), 24);

         assert.equal(
           calc.plus('Parts', ' of ', 'a', ' string'),
           'Parts of a string');

   Thus, ``__noSuchMethod__`` works similarly to a Proxy trap. In contrast to
   Proxies, the trap is an own or inherited method of the object whose
   operations we want to intercept. The problem with that approach is that base
   level (normal methods) and meta level (``__noSuchMethod__``) are mixed.
   Base-level code may accidentally invoke or see a meta level method and there
   is the possibility of accidentally defining a meta level method.

   Even in standard ECMAScript, base level and meta level are sometimes mixed.
   For example, the following metaprogramming mechanisms can fail, because they
   exist at the base level:

   -  ``obj.hasOwnProperty(propKey)``: This call can fail if a property in the
      prototype chain overrides the built-in implementation. For example, in the
      following code, ``obj`` causes a failure:

      .. container:: sourceCode
         :name: cb356

         .. code:: js

            const obj = { hasOwnProperty: null };
            assert.throws(
              () => obj.hasOwnProperty('width'),
              /^TypeError: obj.hasOwnProperty is not a function/
            );

      These are safe ways of invoking ``.hasOwnProperty()``:

      .. container:: sourceCode
         :name: cb357

         .. code:: js

            assert.equal(
              Object.prototype.hasOwnProperty.call(obj, 'width'), false);

            // Abbreviated version:
            assert.equal(
              {}.hasOwnProperty.call(obj, 'width'), false);

   -  ``func.call(···)``, ``func.apply(···)``: For both methods, problem and
      solution are the same as with ``.hasOwnProperty()``.

   -  ``obj.__proto__``: In plain objects, ``__proto__`` is a special property
      that lets us get and set the prototype of the receiver. Hence, when we use
      plain objects as dictionaries, we must `avoid ``__proto__`` as a property
      key <https://exploringjs.com/impatient-js/ch_single-objects.html#the-pitfalls-of-using-an-object-as-a-dictionary>`__.

   By now, it should be obvious that making (base level) property keys special
   is problematic. Therefore, Proxies are *stratified*: Base level (the Proxy
   object) and meta level (the handler object) are separate.


.. _virtual-objects-versus-wrappers:

18.5.2 Virtual objects versus wrappers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Proxies are used in two roles:

   -  As *wrappers*, they *wrap* their targets, they control access to them.
      Examples of wrappers are: revocable resources and tracing via Proxies.

   -  As *virtual objects*, they are simply objects with special behavior and
      their targets don’t matter. An example is a Proxy that forwards method
      calls to a remote object.

   An earlier design of the Proxy API conceived Proxies as purely virtual
   objects. However, it turned out that even in that role, a target was useful,
   to enforce invariants (which are explained later) and as a fallback for traps
   that the handler doesn’t implement.


.. _transparent-virtualization-and-handler-encapsulation:

18.5.3 Transparent virtualization and handler encapsulation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Proxies are shielded in two ways:

   -  It is impossible to determine whether an object is a Proxy or not
      (*transparent virtualization*).
   -  We can’t access a handler via its Proxy (*handler encapsulation*).

   Both principles give Proxies considerable power for impersonating other
   objects. One reason for enforcing *invariants* (as explained later) is to
   keep that power in check.

   If we do need a way to tell Proxies apart from non-Proxies, we have to
   implement it ourselves. The following code is a module ``lib.mjs`` that
   exports two functions: one of them creates Proxies, the other one determines
   whether an object is one of those Proxies.

   .. code::javascript

         // lib.mjs
         const proxies = new WeakSet();

         export function createProxy(obj) {
           const handler = {};
           const proxy = new Proxy(obj, handler);
           proxies.add(proxy);
           return proxy;
         }

         export function isProxy(obj) {
           return proxies.has(obj);
         }

   This module uses the data structure ``WeakSet`` for keeping track of Proxies.
   ``WeakSet`` is ideally suited for this purpose, because it doesn’t prevent
   its elements from being garbage-collected.

   The next example shows how ``lib.mjs`` can be used.

   .. code::javascript

         // main.mjs
         import { createProxy, isProxy } from './lib.mjs';

         const proxy = createProxy({});
         assert.equal(isProxy(proxy), true);
         assert.equal(isProxy({}), false);


.. _meta-object-protocol:

18.5.4 The meta object protocol and Proxy traps
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In this section, we examine how JavaScript is structured internally and how
   the set of Proxy traps was chosen.

   In the context of programming languages and API design, a *protocol* is a set
   of interfaces plus rules for using them. The ECMAScript specification
   describes how to execute JavaScript code. It includes a `protocol for
   handling
   objects <https://tc39.es/ecma262/#sec-ordinary-and-exotic-objects-behaviours>`__.
   This protocol operates at a meta level and is sometimes called the *meta
   object protocol* (MOP). The JavaScript MOP consists of own internal methods
   that all objects have. “Internal” means that they exist only in the
   specification (JavaScript engines may or may not have them) and are not
   accessible from JavaScript. The names of internal methods are written in
   double square brackets.

   The internal method for getting properties is called
   ```.[[Get]]()`` <https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver>`__.
   If we use double underscores instead of double brackets, this method would
   roughly be implemented as follows in JavaScript.

   .. code::javascript

         // Method definition
         __Get__(propKey, receiver) {
           const desc = this.__GetOwnProperty__(propKey);
           if (desc === undefined) {
             const parent = this.__GetPrototypeOf__();
             if (parent === null) return undefined;
             return parent.__Get__(propKey, receiver); // (A)
           }
           if ('value' in desc) {
             return desc.value;
           }
           const getter = desc.get;
           if (getter === undefined) return undefined;
           return getter.__Call__(receiver, []);
         }

   The MOP methods called in this code are:

   -  ``[[GetOwnProperty]]`` (trap ``getOwnPropertyDescriptor``)
   -  ``[[GetPrototypeOf]]`` (trap ``getPrototypeOf``)
   -  ``[[Get]]`` (trap ``get``)
   -  ``[[Call]]`` (trap ``apply``)

   In line A we can see why Proxies in a prototype chain find out about ``get``
   if a property isn’t found in an “earlier” object: If there is no own property
   whose key is ``propKey``, the search continues in the prototype ``parent`` of
   ``this``.

   **Fundamental versus derived operations.** We can see that ``.[[Get]]()``
   calls other MOP operations. Operations that do that are called *derived*.
   Operations that don’t depend on other operations are called *fundamental*.


.. _the-meta-object-protocol-of-proxies:

18.5.4.1 The meta object protocol of Proxies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The `meta object protocol of
   Proxies <https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots>`__
   is different from that of normal objects. For normal objects, derived
   operations call other operations. For Proxies, each operation (regardless of
   whether it is fundamental or derived) is either intercepted by a handler
   method or forwarded to the target.

   Which operations should be interceptable via Proxies?

   -  One possibility is to only provide traps for fundamental operations.
   -  The alternative is to include some derived operations.

   The upside of doing the latter is that it increases performance and is more
   convenient. For example, if there weren’t a trap for ``get``, we’d have to
   implement its functionality via ``getOwnPropertyDescriptor``.

   A downside of including derived traps is that that can lead to Proxies
   behaving inconsistently. For example, ``get`` may return a value that is
   different from the value in the descriptor returned by
   ``getOwnPropertyDescriptor``.


.. _selective-interception-which-operations-should-be-interceptable:

18.5.4.2 Selective interception: Which operations should be interceptable?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Interception by Proxies is *selective*: we can’t intercept every language
   operation. Why were some operations excluded? Let’s look at two reasons.

   First, *stable* operations are not well suited for interception. An operation
   is *stable* if it always produces the same results for the same arguments. If
   a Proxy can trap a stable operation, it can become unstable and thus
   unreliable. `Strict
   equality <http://speakingjs.com/es5/ch09.html#_strict_equality>`__ (``===``)
   is one such stable operation. It can’t be trapped and its result is computed
   by treating the Proxy itself as just another object. Another way of
   maintaining stability is by applying an operation to the target instead of
   the Proxy. As explained later, when we look at how invariants are enfored for
   Proxies, this happens when ``Object.getPrototypeOf()`` is applied to a Proxy
   whose target is non-extensible.

   A second reason for not making more operations interceptable is that
   interception means executing custom code in situations where that normally
   isn’t possible. The more this interleaving of code happens, the harder it is
   to understand and debug a program. It also affects performance negatively.


.. _traps-get-versus-invoke:

18.5.4.3 Traps: ``get`` versus ``invoke``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If we want to create virtual methods via Proxies, we have to return functions
   from a ``get`` trap. That raises the question: why not introduce an extra
   trap for method invocations (e.g. ``invoke``)? That would enable us to
   distinguish between:

   -  Getting properties via ``obj.prop`` (trap ``get``)
   -  Invoking methods via ``obj.prop()`` (trap ``invoke``)

   There are two reasons for not doing so.

   First, not all implementations distinguish between ``get`` and ``invoke``.
   For example, `Apple’s JavaScriptCore
   doesn’t <https://mail.mozilla.org/pipermail/es-discuss/2010-May/011062.html>`__.

   Second, extracting a method and invoking it later via ``.call()`` or
   ``.apply()`` should have the same effect as invoking the method via dispatch.
   In other words, the following two variants should work equivalently. If there
   were an extra trap ``invoke``, then that equivalence would be harder to
   maintain.

   .. code::javascript

         // Variant 1: call via dynamic dispatch
         const result1 = obj.m();

         // Variant 2: extract and call directly
         const m = obj.m;
         const result2 = m.call(obj);


.. _use-cases-for-invoke:

18.5.4.3.1 Use cases for ``invoke``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Some things can only be done if we are able to distinguish between ``get``
   and ``invoke``. Those things are therefore impossible with the current Proxy
   API. Two examples are: auto-binding and intercepting missing methods. Let’s
   examine how one would implement them if Proxies supported ``invoke``.

   **Auto-binding.** By making a Proxy the prototype of an object ``obj``, we
   can automatically bind methods:

   -  Retrieving the value of a method ``m`` via ``obj.m`` returns a function
      whose ``this`` is bound to ``obj``.
   -  ``obj.m()`` performs a method call.

   Auto-binding helps with using methods as callbacks. For example, variant 2
   from the previous example becomes simpler:

   .. code::javascript

         const boundMethod = obj.m;
         const result = boundMethod();

   **Intercepting missing methods.** ``invoke`` lets a Proxy emulate the
   previously mentioned ``__noSuchMethod__`` mechanism. The Proxy would again
   become the prototype of an object ``obj``. It would react differently
   depending on how an unknown property ``prop`` is accessed:

   -  If we read that property via ``obj.prop``, no interception happens and
      ``undefined`` is returned.
   -  If we make the method call ``obj.prop()`` then the Proxy intercepts and,
      e.g., notifies a callback.


.. _enforcing-invariants-for-proxies:

18.5.5 Enforcing invariants for Proxies
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Before we look at what invariants are and how they are enforced for Proxies,
   let’s review how objects can be protected via non-extensibility and
   non-configurability.


.. _protecting-objects:

18.5.5.1 Protecting objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~

   There are two ways of protecting objects:

   -  Non-extensibility protects objects: If an object is non-extensible, we
      can’t add properties and we can’t change its prototype.

   -  Non-configurability protects properties (or rather, their attributes):

      -  The boolean attribute ``writable`` controls whether a property’s value
         can be changed.
      -  The boolean attribute ``configurable`` controls whether a property’s
         attributes can be changed.

   For more information on this topic, see `§10 “Protecting objects from being
   changed” <ch_protecting-objects.html>`__.


.. _enforcing-invariants:

18.5.5.2 Enforcing invariants
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Traditionally, non-extensibility and non-configurability are:

   -  Universal: They work for all objects.
   -  Monotonic: Once switched on, they can’t be switched off again.

   These and other characteristics that remain unchanged in the face of language
   operations are called *invariants*. It is easy to violate invariants via
   Proxies because they are not intrinsically bound by non-extensibility etc.
   The Proxy API prevents that from happening by checking the target object and
   the results of handler methods.

   The next two subsections describe four invariants. An exhaustive list of
   invariants is given at the end of this chapter.


.. _two-invariants-that-are-enforced-via-the-target-object:

18.5.5.3 Two invariants that are enforced via the target object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following two invariants involve non-extensibility and
   non-configurability. These are enforced by using the target object for
   bookkeeping: results returned by handler methods have to be mostly in sync
   with the target object.

   -  Invariant: If ``Object.preventExtensions(obj)`` returns ``true`` then all
      future calls must return ``false`` and ``obj`` must now be non-extensible.

      -  Enforced for Proxies by throwing a ``TypeError`` if the handler returns
         ``true``, but the target object is not extensible.

   -  Invariant: Once an object has been made non-extensible,
      ``Object.isExtensible(obj)`` must always return ``false``.

      -  Enforced for Proxies by throwing a ``TypeError`` if the result returned
         by the handler is not the same (after coercion) as
         ``Object.isExtensible(target)``.


.. _two-invariants-that-are-enforced-by-checking-return-values:

18.5.5.4 Two invariants that are enforced by checking return values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following two invariants are enforced by checking return values:

   -  Invariant: ``Object.isExtensible(obj)`` must return a boolean.

      -  Enforced for Proxies by coercing the value returned by the handler to a
         boolean.

   -  Invariant: ``Object.getOwnPropertyDescriptor(obj, ···)`` must return an
      object or ``undefined``.

      -  Enforced for Proxies by throwing a ``TypeError`` if the handler doesn’t
         return an appropriate value.


.. _benefits-of-invariants:

18.5.5.5 Benefits of invariants
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Enforcing invariants has the following benefits:

   -  Proxies work like all other objects with regard to extensibility and
      configurability. Therefore, universality is maintained. This is achieved
      without preventing Proxies from virtualizing (impersonating) protected
      objects.
   -  A protected object can’t be misrepresented by wrapping a Proxy around it.
      Misrepresentation can be caused by bugs or by malicious code.

   The next two sections give examples of invariants being enforced.


.. _example-the-prototype-of-a-non-extensible-target-must-be-represented-faithfully:

18.5.5.6 Example: the prototype of a non-extensible target must be represented faithfully
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   In response to the ``getPrototypeOf`` trap, the Proxy must return the
   target’s prototype if the target is non-extensible.

   To demonstrate this invariant, let’s create a handler that returns a
   prototype that is different from the target’s prototype:

   .. code::javascript

         const fakeProto = {};
         const handler = {
           getPrototypeOf(t) {
             return fakeProto;
           }
         };

   Faking the prototype works if the target is extensible:

   .. code::javascript

         const extensibleTarget = {};
         const extProxy = new Proxy(extensibleTarget, handler);

         assert.equal(
           Object.getPrototypeOf(extProxy), fakeProto);

   We do, however, get an error if we fake the prototype for a non-extensible
   object.

   .. code::javascript

         const nonExtensibleTarget = {};
         Object.preventExtensions(nonExtensibleTarget);
         const nonExtProxy = new Proxy(nonExtensibleTarget, handler);

         assert.throws(
           () => Object.getPrototypeOf(nonExtProxy),
           {
             name: 'TypeError',
             message: "'getPrototypeOf' on proxy: proxy target is"
               + " non-extensible but the trap did not return its"
               + " actual prototype",
           });


.. _example-non-writable-non-configurable-target-properties-must-be-represented-faithfully:

18.5.5.7 Example: non-writable non-configurable target properties must be represented faithfully
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   If the target has a non-writable non-configurable property, then the handler
   must return that property’s value in response to a ``get`` trap. To
   demonstrate this invariant, let’s create a handler that always returns the
   same value for properties.

   .. code::javascript

         const handler = {
           get(target, propKey) {
             return 'abc';
           }
         };
         const target = Object.defineProperties(
           {}, {
             manufacturer: {
               value: 'Iso Autoveicoli',
               writable: true,
               configurable: true
             },
             model: {
               value: 'Isetta',
               writable: false,
               configurable: false
             },
           });
         const proxy = new Proxy(target, handler);

   Property ``target.manufacturer`` is not both non-writable and
   non-configurable, which means that the handler is allowed to pretend that it
   has a different value:

   .. code::javascript

         assert.equal(
           proxy.manufacturer, 'abc');

   However, property ``target.model`` is both non-writable and non-configurable.
   Therefore, we can’t fake its value:

   .. code::javascript

         assert.throws(
           () => proxy.model,
           {
             name: 'TypeError',
             message: "'get' on proxy: property 'model' is a read-only and"
               + " non-configurable data property on the proxy target but"
               + " the proxy did not return its actual value (expected"
               + " 'Isetta' but got 'abc')",
           });


.. _faq-proxies:

18.6 FAQ: Proxies
-----------------


.. _where-is-the-enumerate-trap:

18.6.1 Where is the ``enumerate`` trap?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   ECMAScript 6 originally had a trap ``enumerate`` that was triggered by
   ``for-in`` loops. But it was recently removed, to simplify Proxies.
   ``Reflect.enumerate()`` was removed, as well. (`Source: TC39
   notes <https://github.com/tc39/tc39-notes/blob/master/es7/2016-01/2016-01-28.md>`__)


.. _reference-proxy-api:

18.7 Reference: the Proxy API
-----------------------------

   This section is a quick reference for the Proxy API:

   -  The global object ``Proxy``
   -  The global object ``Reflect``

   The reference uses the following custom type:

   .. code::javascript

         type PropertyKey = string | symbol;


.. _creating-proxies:

18.7.1 Creating Proxies
~~~~~~~~~~~~~~~~~~~~~~~

   There are two ways to create Proxies:

   -  | ``const proxy = new Proxy(target, handler)``
      | Creates a new Proxy object with the given target and the given handler.

   -  | ``const {proxy, revoke} = Proxy.revocable(target, handler)``
      | Creates a Proxy that can be revoked via the function ``revoke``.
        ``revoke`` can be called multiple times, but only the first call has an
        effect and switches ``proxy`` off. Afterwards, any operation performed
        on ``proxy`` leads to a ``TypeError`` being thrown.


.. _handler-methods:

18.7.2 Handler methods
~~~~~~~~~~~~~~~~~~~~~~

   This subsection explains what traps can be implemented by handlers and what
   operations trigger them. Several traps return boolean values. For the traps
   ``has`` and ``isExtensible``, the boolean is the result of the operation. For
   all other traps, the boolean indicates whether the operation succeeded or
   not.

   Traps for all objects:

   -  ``defineProperty(target, propKey, propDesc): boolean``

      -  ``Object.defineProperty(proxy, propKey, propDesc)``

   -  ``deleteProperty(target, propKey): boolean``

      -  ``delete proxy[propKey]``
      -  ``delete proxy.someProp``

   -  ``get(target, propKey, receiver): any``

      -  ``receiver[propKey]``
      -  ``receiver.someProp``

   -  ``getOwnPropertyDescriptor(target, propKey): undefined|PropDesc``

      -  ``Object.getOwnPropertyDescriptor(proxy, propKey)``

   -  ``getPrototypeOf(target): null|object``

      -  ``Object.getPrototypeOf(proxy)``

   -  ``has(target, propKey): boolean``

      -  ``propKey in proxy``

   -  ``isExtensible(target): boolean``

      -  ``Object.isExtensible(proxy)``

   -  ``ownKeys(target): Array<PropertyKey>``

      -  ``Object.getOwnPropertyPropertyNames(proxy)`` (only uses string keys)
      -  ``Object.getOwnPropertyPropertySymbols(proxy)`` (only uses symbol keys)
      -  ``Object.keys(proxy)`` (only uses enumerable string keys; enumerability
         is checked via ``Object.getOwnPropertyDescriptor``)

   -  ``preventExtensions(target): boolean``

      -  ``Object.preventExtensions(proxy)``

   -  ``set(target, propKey, value, receiver): boolean``

      -  ``receiver[propKey] = value``
      -  ``receiver.someProp = value``

   -  ``setPrototypeOf(target, proto): boolean``

      -  ``Object.setPrototypeOf(proxy, proto)``

   Traps for functions (available if target is a function):

   -  ``apply(target, thisArgument, argumentsList): any``

      -  ``proxy.apply(thisArgument, argumentsList)``
      -  ``proxy.call(thisArgument, ...argumentsList)``
      -  ``proxy(...argumentsList)``

   -  ``construct(target, argumentsList, newTarget): object``

      -  ``new proxy(..argumentsList)``


.. _fundamental-operations-versus-derived-operations:

18.7.2.1 Fundamental operations versus derived operations
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following operations are *fundamental*, they don’t use other operations
   to do their work: ``apply``, ``defineProperty``, ``deleteProperty``,
   ``getOwnPropertyDescriptor``, ``getPrototypeOf``, ``isExtensible``,
   ``ownKeys``, ``preventExtensions``, ``setPrototypeOf``

   All other operations are *derived*, they can be implemented via fundamental
   operations. For example, ``get`` can be implemented by iterating over the
   prototype chain via ``getPrototypeOf`` and calling
   ``getOwnPropertyDescriptor`` for each chain member until either an own
   property is found or the chain ends.


.. _invariants-of-handler-methods:

18.7.3 Invariants of handler methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Invariants are safety constraints for handlers. This subsection documents
   what invariants are enforced by the Proxy API and how. Whenever we read “the
   handler must do X” below, it means that a ``TypeError`` is thrown if it
   doesn’t. Some invariants restrict return values, others restrict parameters.
   The correctness of a trap’s return value is ensured in two ways:

   -  If a boolean is expected, coercion is used to convert non-booleans to
      legal values.
   -  In all other cases, an illegal value cause a ``TypeError``.

   This is the complete list of invariants that are enforced:

   -  ``apply(target, thisArgument, argumentsList): any``

      -  No invariants are enforced.
      -  Only active if the target is callable.

   -  ``construct(target, argumentsList, newTarget): object``

      -  The result returned by the handler must be an object (not ``null`` or
         any other primitive value).
      -  Only active if the target is constructible.

   -  ``defineProperty(target, propKey, propDesc): boolean``

      -  If the target is not extensible, then we can’t add new properties.
      -  If ``propDesc`` sets the attribute ``configurable`` to ``false``, then
         the target must have a non-configurable own property whose key is
         ``propKey``.
      -  If ``propDesc`` sets both attributes ``configurable`` and ``writable``
         to ``false``, then the target must have an own property with the key is
         ``propKey`` that is non-configurable and non-writable.
      -  If the target has an own property with the key ``propKey``, then
         ``propDesc`` must be compatible with that property: If we redefine the
         target property with the descriptor, no exception must be thrown.

   -  ``deleteProperty(target, propKey): boolean``

      -  A property can’t be reported as deleted if:

         -  The target has a non-configurable own property with key ``propKey``.
         -  The target is non-extensible and has a own property with key
            ``propKey``.

   -  ``get(target, propKey, receiver): any``

      -  If the target has an own, non-writable, non-configurable data property
         whose key is ``propKey``, then the handler must return that property’s
         value.
      -  If the target has an own, non-configurable, getter-less accessor
         property, then the handler must return ``undefined``.

   -  ``getOwnPropertyDescriptor(target, propKey): undefined|PropDesc``

      -  The handler must return either ``undefined`` or an object.
      -  Non-configurable own properties of the target can’t be reported as
         non-existent by the handler.
      -  If the target is non-extensible, then exactly the target’s own
         properties must be reported by the handler as existing.
      -  If the handler reports a property as non-configurable, then that
         property must be a non-configurable own property of the target.
      -  If the handler reports a property as non-configurable and non-writable,
         then that property must be a non-configurable non-writable own property
         of the target.

   -  ``getPrototypeOf(target): null|object``

      -  The result must be either ``null`` or an object.
      -  If the target object is not extensible, then the handler must return
         the prototype of the target object.

   -  ``has(target, propKey): boolean``

      -  Non-configurable own properties of the target can’t be reported as
         non-existent.
      -  If the target is non-extensible, then no own property of the target can
         be reported as non-existent.

   -  ``isExtensible(target): boolean``

      -  After coercion to boolean, the value returned by the handler must be
         the same as ``target.isExtensible()``.

   -  ``ownKeys(target): Array<PropertyKey>``

      -  The handler must return an object, which treated as Array-like and
         converted into an Array.
      -  The resulting Array must not contain duplicate entries.
      -  Each element of the result must be either a string or a symbol.
      -  The result must contain the keys of all non-configurable own properties
         of the target.
      -  If the target is not extensible, then the result must contain exactly
         the keys of the own properties of the target (and no other values).

   -  ``preventExtensions(target): boolean``

      -  The handler must only return a truthy value (indicating a successful
         change) if ``target.isExtensible()`` is ``false``.

   -  ``set(target, propKey, value, receiver): boolean``

      -  The property can’t be changed if the target has a non-writable,
         non-configurable data property whose key is ``propKey``. In that case,
         ``value`` must be the value of that property or a ``TypeError`` is
         thrown.
      -  The property can’t be set in any way if the corresponding own target
         property is a non-configurable accessor without a setter.

   -  ``setPrototypeOf(target, proto): boolean``

      -  If the target is not extensible, the prototype can’t be changed. This
         is enforced as follows: If the target is not extensible and the handler
         returns a truthy value (indicating a successful change), then ``proto``
         must be the same as the prototype of the target. Otherwise, a
         ``TypeError`` is thrown.

   .. container:: notebox

      |cogs-regular.svg|  **Invariants in the ECMAScript specification**

      In the spec, the invariants are listed in section `“Proxy Object Internal
      Methods and Internal
      Slots” <https://tc39.es/ecma262/#sec-proxy-object-internal-methods-and-internal-slots>`__.


.. _operations-that-affect-the-prototype-chain:

18.7.4 Operations that affect the prototype chain
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The following operations of normal objects perform operations on objects in
   the prototype chain. Therefore, if one of the objects in that chain is a
   Proxy, its traps are triggered. The specification implements the operations
   as internal own methods (that are not visible to JavaScript code). But in
   this section, we pretend that they are normal methods that have the same
   names as the traps. The parameter ``target`` becomes the receiver of the
   method call.

   -  ``target.get(propertyKey, receiver)``
      If ``target`` has no own property with the given key, ``get`` is invoked
      on the prototype of ``target``.
   -  ``target.has(propertyKey)``
      Similarly to ``get``, ``has`` is invoked on the prototype of ``target`` if
      ``target`` has no own property with the given key.
   -  ``target.set(propertyKey, value, receiver)``
      Similarly to ``get``, ``set`` is invoked on the prototype of ``target`` if
      ``target`` has no own property with the given key.

   All other operations only affect own properties, they have no effect on the
   prototype chain.

   .. container:: notebox

      |cogs-regular.svg|  **Internal operations in the ECMAScript specification**

      In the spec, these (and other) operations are described in section
      “\ `Ordinary Object Internal Methods and Internal
      Slots <https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots>`__\ ”.


.. _reflect:

18.7.5 Reflect
~~~~~~~~~~~~~~

   The global object ``Reflect`` implements all interceptable operations of the
   JavaScript meta object protocol as methods. The names of those methods are
   the same as those of the handler methods, which, `as we have
   seen <#forwarding-intercepted-operations>`__, helps with
   forwarding operations from the handler to the target.

   -  | ``Reflect.apply(target, thisArgument, argumentsList): any``
      | Similar to ``Function.prototype.apply()``.

   -  | ``Reflect.construct(target, argumentsList, newTarget=target): object``
      | The ``new`` operator as a function. ``target`` is the constructor to
        invoke, the optional parameter ``newTarget`` points to the constructor
        that started the current chain of constructor calls.

   -  | ``Reflect.defineProperty(target, propertyKey, propDesc): boolean``
      | Similar to ``Object.defineProperty()``.

   -  | ``Reflect.deleteProperty(target, propertyKey): boolean``
      | The ``delete`` operator as a function. It works slightly differently,
        though: It returns ``true`` if it successfully deleted the property or
        if the property never existed. It returns ``false`` if the property
        could not be deleted and still exists. The only way to protect
        properties from deletion is by making them non-configurable. In sloppy
        mode, the ``delete`` operator returns the same results. But in strict
        mode, it throws a ``TypeError`` instead of returning ``false``.

   -  | ``Reflect.get(target, propertyKey, receiver=target): any``
      | A function that gets properties. The optional parameter ``receiver``
        points to the object where the getting started. It is needed when
        ``get`` reaches a getter later in the prototype chain. Then it provides
        the value for ``this``.

   -  | ``Reflect.getOwnPropertyDescriptor(target, propertyKey): undefined|PropDesc``
      | Same as ``Object.getOwnPropertyDescriptor()``.

   -  | ``Reflect.getPrototypeOf(target): null|object``
      | Same as ``Object.getPrototypeOf()``.

   -  | ``Reflect.has(target, propertyKey): boolean``
      | The ``in`` operator as a function.

   -  | ``Reflect.isExtensible(target): boolean``
      | Same as ``Object.isExtensible()``.

   -  | ``Reflect.ownKeys(target): Array<PropertyKey>``
      | Returns all own property keys in an Array: the string keys and symbol
        keys of all own enumerable and non-enumerable properties.

   -  | ``Reflect.preventExtensions(target): boolean``
      | Similar to ``Object.preventExtensions()``.

   -  | ``Reflect.set(target, propertyKey, value, receiver=target): boolean``
      | A function that sets properties.

   -  | ``Reflect.setPrototypeOf(target, proto): boolean``
      | The new standard way of setting the prototype of an object. The current
        non-standard way, that works in most engines, is to set the special
        property ``__proto__``.

   Several methods have boolean results. For ``.has()`` and ``.isExtensible()``,
   they are the results of the operation. For the remaining methods, they
   indicate whether the operation succeeded.


.. _use-cases-for-reflect-besides-forwarding:

18.7.5.1 Use cases for ``Reflect`` besides forwarding
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Apart from forwarding operations, `why is ``Reflect`` useful
   [4] <#further-reading-proxies>`__?

   -  Different return values: ``Reflect`` duplicates the following methods of
      ``Object``, but its methods return booleans indicating whether the
      operation succeeded (where the ``Object`` methods return the object that
      was modified).

      -  ``Object.defineProperty(obj, propKey, propDesc): object``
      -  ``Object.preventExtensions(obj): object``
      -  ``Object.setPrototypeOf(obj, proto): object``

   -  Operators as functions: The following ``Reflect`` methods implement
      functionality that is otherwise only available via operators:

      -  ``Reflect.construct(target, argumentsList, newTarget=target): object``
      -  ``Reflect.deleteProperty(target, propertyKey): boolean``
      -  ``Reflect.get(target, propertyKey, receiver=target): any``
      -  ``Reflect.has(target, propertyKey): boolean``
      -  ``Reflect.set(target, propertyKey, value, receiver=target): boolean``

   -  Shorter version of ``apply()``: If we want to be completely safe about
      invoking the method ``apply()`` on a function, we can’t do so via dynamic
      dispatch, because the function may have an own property with the key
      ``'apply'``:

      .. container:: sourceCode
         :name: cb370

         .. code:: js

            func.apply(thisArg, argArray) // not safe
            Function.prototype.apply.call(func, thisArg, argArray) // safe

      Using ``Reflect.apply()`` is shorter than the safe version:

      .. container:: sourceCode
         :name: cb371

         .. code:: js

            Reflect.apply(func, thisArg, argArray)

   -  No exceptions when deleting properties: the ``delete`` operator throws in
      strict mode if we try to delete a non-configurable own property.
      ``Reflect.deleteProperty()`` returns ``false`` in that case.


.. _object.-versus-reflect.:

18.7.5.2 ``Object.*`` versus ``Reflect.*``
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Going forward, ``Object`` will host operations that are of interest to normal
   applications, while ``Reflect`` will host operations that are more low-level.


.. _conclusion-proxies:

18.8 Conclusion
---------------

   This concludes our in-depth look at the Proxy API. One thing to be aware of
   is that Proxies slow down code. That may matter if performance is critical.

   On the other hand, performance is often not crucial and it is nice to have
   the metaprogramming power that Proxies give us.

   --------------

   **Acknowledgements:**

   -  Allen Wirfs-Brock pointed out the pitfall explained in `§18.3.7 “Pitfall:
      not all objects can be wrapped transparently by
      Proxies” <#mechanisms-ignored-by-proxies>`__.

   -  The idea for `§18.4.3 “Negative Array indices
      (``get``)” <#negative-array-indices-via-proxies>`__ comes
      from a `blog post <http://h3manth.com/new/blog/2013/negative-array-index-in-javascript/>`__
      by `Hemanth.HM <https://twitter.com/gnumanth>`__.

   -  André Jaenisch contributed to the list of libraries that use Proxies.


.. _further-reading-proxies:

18.9 Further reading
--------------------

   -  [1] “\ `On the design of the ECMAScript Reflection
      API <http://soft.vub.ac.be/Publications/2012/vub-soft-tr-12-03.pdf>`__\ ”
      by Tom Van Cutsem and Mark Miller. Technical report, 2012. [Important
      source of this chapter.]

   -  [2] “\ `The Art of the Metaobject
      Protocol <http://mitpress.mit.edu/books/art-metaobject-protocol>`__\ ” by
      Gregor Kiczales, Jim des Rivieres and Daniel G. Bobrow. Book, 1991.

   -  [3] “\ `Putting Metaclasses to Work: A New Dimension in Object-Oriented
      Programming <http://www.pearsonhighered.com/educator/product/Putting-Metaclasses-to-Work-A-New-Dimension-in-ObjectOriented-Programming/9780201433050.page>`__\ ”
      by Ira R. Forman and Scott H. Danforth. Book, 1999.

   -  [4] “\ `Harmony-reflect: Why should I use this
      library? <https://github.com/tvcutsem/harmony-reflect/wiki>`__\ ” by Tom
      Van Cutsem. [Explains why ``Reflect`` is useful.]

   `Comments <https://github.com/rauschma/deep-js/issues/23>`__


.. _ch_missing-chapters-site:


19 Where are the remaining chapters?
====================================

   You are reading the free online version of this book:

   -  The offline version – which has three additional bonus chapters – is
      `available for purchase <https://exploringjs.com/deep-js/#buy>`__.
   -  You can take a look at `the full table of
      contents <https://exploringjs.com/deep-js/downloads/complete-toc.html>`__
      (also linked to from the book’s homepage).
