.. container:: head

   |WHATWG|

https://dom.spec.whatwg.org/

/DOM
====

   .. .. rubric:: DOM
      :name: title
      :class: p-name no-ref allcaps

   Living Standard — Last Updated 16 April 2024

   .. container::

      Participate:
         `GitHub whatwg/dom <https://github.com/whatwg/dom>`__ (`new
         issue <https://github.com/whatwg/dom/issues/new/choose>`__,
         `open issues <https://github.com/whatwg/dom/issues>`__)
         `Chat on Matrix <https://whatwg.org/chat>`__
      Commits:
         `GitHub whatwg/dom/commits <https://github.com/whatwg/dom/commits>`__
         `Snapshot as of this commit </commit-snapshots/77cd75e8c9f03ef3b71b84e9b2154542762a7f52/>`__
         `@thedomstandard <https://twitter.com/thedomstandard>`__
      Tests:
         `web-platform-tests dom/ <https://github.com/web-platform-tests/wpt/tree/master/dom>`__
         (`ongoing work <https://github.com/web-platform-tests/wpt/labels/dom>`__)
      Translations (non-normative):
         `日本語 <https://triple-underscore.github.io/DOM4-ja.html>`__

   .. container::

.. container:: p-summary


/Abstract
=========

   .. .. rubric:: Abstract
      :name: abstract
      :class: no-num no-toc no-ref heading settled

   DOM defines a platform-neutral model for events, aborting activities,
   and node trees.

.. _contents:

Table of Contents
-----------------

#. `1 Infrastructure <#infrastructure>`__

   #. `1.1 Trees <#trees>`__
   #. `1.2 Ordered sets <#ordered-sets>`__
   #. `1.3 Selectors <#selectors>`__
   #. `1.4 Namespaces <#namespaces>`__

#. `2 Events <#events>`__

   #. `2.1 Introduction to "DOM Events" <#introduction-to-dom-events>`__
   #. `2.2 Interface ``Event`` <#interface-event>`__
   #. `2.3 Legacy extensions to the ``Window`` interface <#interface-window-extensions>`__
   #. `2.4 Interface ``CustomEvent`` <#interface-customevent>`__
   #. `2.5 Constructing events <#constructing-events>`__
   #. `2.6 Defining event interfaces <#defining-event-interfaces>`__
   #. `2.7 Interface ``EventTarget`` <#interface-eventtarget>`__
   #. `2.8 Observing event listeners <#observing-event-listeners>`__
   #. `2.9 Dispatching events <#dispatching-events>`__
   #. `2.10 Firing events <#firing-events>`__
   #. `2.11 Action versus occurrence <#action-versus-occurrence>`__

#. `3 Aborting ongoing activities <#aborting-ongoing-activities>`__

   #. `3.1 Interface ``AbortController`` <#interface-abortcontroller>`__
   #. `3.2 Interface ``AbortSignal`` <#interface-AbortSignal>`__

      #. `3.2.1 Garbage collection <#abort-signal-garbage-collection>`__

   #. `3.3 Using ``AbortController`` and ``AbortSignal`` objects in
      APIs <#abortcontroller-api-integration>`__

#. `4 Nodes <#nodes>`__

   #. `4.1 Introduction to "The DOM" <#introduction-to-the-dom>`__
   #. `4.2 Node tree <#node-trees>`__

      #. `4.2.1 Document tree <#document-trees>`__
      #. `4.2.2 Shadow tree <#shadow-trees>`__

         #. `4.2.2.1 Slots <#shadow-tree-slots>`__
         #. `4.2.2.2 Slottables <#light-tree-slotables>`__
         #. `4.2.2.3 Finding slots and
            slottables <#finding-slots-and-slotables>`__
         #. `4.2.2.4 Assigning slottables and
            slots <#assigning-slotables-and-slots>`__
         #. `4.2.2.5 Signaling slot change <#signaling-slot-change>`__

      #. `4.2.3 Mutation algorithms <#mutation-algorithms>`__
      #. `4.2.4 Mixin ``NonElementParentNode`` <#interface-nonelementparentnode>`__
      #. `4.2.5 Mixin ``DocumentOrShadowRoot`` <#mixin-documentorshadowroot>`__
      #. `4.2.6 Mixin ``ParentNode`` <#interface-parentnode>`__
      #. `4.2.7 Mixin ``NonDocumentTypeChildNode`` <#interface-nondocumenttypechildnode>`__
      #. `4.2.8 Mixin ``ChildNode`` <#interface-childnode>`__
      #. `4.2.9 Mixin ``Slottable`` <#mixin-slotable>`__
      #. `4.2.10 Old-style collections: ``NodeList`` and ``HTMLCollection`` <#old-style-collections>`__

         #. `4.2.10.1 Interface ``NodeList`` <#interface-nodelist>`__
         #. `4.2.10.2 Interface ``HTMLCollection`` <#interface-htmlcollection>`__

   #. `4.3 Mutation observers <#mutation-observers>`__

      #. `4.3.1 Interface ``MutationObserver`` <#interface-mutationobserver>`__
      #. `4.3.2 Queuing a mutation record <#queueing-a-mutation-record>`__
      #. `4.3.3 Interface ``MutationRecord`` <#interface-mutationrecord>`__

   #. `4.4 Interface ``Node`` <#interface-node>`__
   #. `4.5 Interface ``Document`` <#interface-document>`__

      #. `4.5.1 Interface ``DOMImplementation`` <#interface-domimplementation>`__

   #. `4.6 Interface ``DocumentType`` <#interface-documenttype>`__
   #. `4.7 Interface ``DocumentFragment`` <#interface-documentfragment>`__
   #. `4.8 Interface ``ShadowRoot`` <#interface-shadowroot>`__
   #. `4.9 Interface ``Element`` <#interface-element>`__

      #. `4.9.1 Interface ``NamedNodeMap`` <#interface-namednodemap>`__
      #. `4.9.2 Interface ``Attr`` <#interface-attr>`__

   #. `4.10 Interface ``CharacterData`` <#interface-characterdata>`__
   #. `4.11 Interface ``Text`` <#interface-text>`__
   #. `4.12 Interface ``CDATASection`` <#interface-cdatasection>`__
   #. `4.13 Interface
      ``ProcessingInstruction`` <#interface-processinginstruction>`__
   #. `4.14 Interface ``Comment`` <#interface-comment>`__

#. `5 Ranges <#ranges>`__

   #. `5.1 Introduction to "DOM Ranges" <#introduction-to-dom-ranges>`__
   #. `5.2 Boundary points <#boundary-points>`__
   #. `5.3 Interface ``AbstractRange`` <#interface-abstractrange>`__
   #. `5.4 Interface ``StaticRange`` <#interface-staticrange>`__
   #. `5.5 Interface ``Range`` <#interface-range>`__

#. `6 Traversal <#traversal>`__

   #. `6.1 Interface ``NodeIterator`` <#interface-nodeiterator>`__
   #. `6.2 Interface ``TreeWalker`` <#interface-treewalker>`__
   #. `6.3 Interface ``NodeFilter`` <#interface-nodefilter>`__

#. `7 Sets <#sets>`__

   #. `7.1 Interface ``DOMTokenList`` <#interface-domtokenlist>`__

#. `8 XPath <#xpath>`__

   #. `8.1 Interface ``XPathResult`` <#interface-xpathresult>`__
   #. `8.2 Interface ``XPathExpression`` <#interface-xpathexpression>`__
   #. `8.3 Mixin ``XPathEvaluatorBase`` <#mixin-xpathevaluatorbase>`__
   #. `8.4 Interface ``XPathEvaluator`` <#interface-xpathevaluator>`__

#. `9 XSLT <#xslt>`__

   #. `9.1 Interface ``XSLTProcessor`` <#interface-xsltprocessor>`__

#. `10 Security and privacy considerations <#security-and-privacy>`__
#. `11 Historical <#historical>`__
#.  `Acknowledgments <#acks>`__
#.  `Intellectual property rights <#ipr>`__
#.  `Index <#index>`__

   #.  `Terms defined by this specification <#index-defined-here>`__
   #.  `Terms defined by reference <#index-defined-elsewhere>`__

#.  `References <#references>`__

   #.  `Normative References <#normative>`__
   #.  `Informative References <#informative>`__

#.  `IDL Index <#idl-index>`__

.. container::


/1. Infrastructure
==================

   .. .. rubric:: 1. Infrastructure ` <#infrastructure>`__
      :name: infrastructure
      :class: heading settled

   This specification depends on the Infra Standard.
   `[INFRA] <#biblio-infra>`__

   Some of the terms used in this specification are defined in Encoding,
   Selectors, Web IDL, XML, and Namespaces in XML.
   `[ENCODING] <#biblio-encoding>`__
   `[SELECTORS4] <#biblio-selectors4>`__ `[WEBIDL] <#biblio-webidl>`__
   `[XML] <#biblio-xml>`__ `[XML-NAMES] <#biblio-xml-names>`__

   When extensions are needed, the DOM Standard can be updated
   accordingly, or a new standard can be written that hooks into the
   provided extensibility hooks for applicable specifications.


/1.1. Trees
===========

   .. .. rubric:: 1.1. Trees ` <#trees>`__
      :name: trees
      :class: heading settled

   A tree is a finite hierarchical tree structure. In tree order is
   preorder, depth-first traversal of a `tree <#concept-tree>`__.

   An object that participates in a `tree <#concept-tree>`__ has a
   parent, which is either null or an object, and has children, which is
   an `ordered set <https://infra.spec.whatwg.org/#ordered-set>`__ of
   objects. An object ``A`` whose `parent <#concept-tree-parent>`__ is
   object ``B`` is a `child <#concept-tree-child>`__ of ``B``.

   The root of an object is itself, if its
   `parent <#concept-tree-parent>`__ is null, or else it is the
   `root <#concept-tree-root>`__ of its
   `parent <#concept-tree-parent>`__. The `root <#concept-tree-root>`__
   of a `tree <#concept-tree>`__ is any object
   `participating <#concept-tree-participate>`__ in that
   `tree <#concept-tree>`__ whose `parent <#concept-tree-parent>`__ is
   null.

   An object ``A`` is called a descendant of an object ``B``, if either
   ``A`` is a `child <#concept-tree-child>`__ of ``B`` or ``A`` is a
   `child <#concept-tree-child>`__ of an object ``C`` that is a
   `descendant <#concept-tree-descendant>`__ of ``B``.

   An inclusive descendant is an object or one of its
   `descendants <#concept-tree-descendant>`__.

   An object ``A`` is called an ancestor of an object ``B`` if and only
   if ``B`` is a `descendant <#concept-tree-descendant>`__ of ``A``.

   An inclusive ancestor is an object or one of its
   `ancestors <#concept-tree-ancestor>`__.

   An object ``A`` is called a sibling of an object ``B``, if and only
   if ``B`` and ``A`` share the same non-null
   `parent <#concept-tree-parent>`__.

   An inclusive sibling is an object or one of its
   `siblings <#concept-tree-sibling>`__.

   An object ``A`` is preceding an object ``B`` if ``A`` and ``B`` are
   in the same `tree <#concept-tree>`__ and ``A`` comes before ``B`` in
   `tree order <#concept-tree-order>`__.

   An object ``A`` is following an object ``B`` if ``A`` and ``B`` are
   in the same `tree <#concept-tree>`__ and ``A`` comes after ``B`` in
   `tree order <#concept-tree-order>`__.

   The first child of an object is its first
   `child <#concept-tree-child>`__ or null if it has no
   `children <#concept-tree-child>`__.

   The last child of an object is its last
   `child <#concept-tree-child>`__ or null if it has no
   `children <#concept-tree-child>`__.

   The previous sibling of an object is its first
   `preceding <#concept-tree-preceding>`__
   `sibling <#concept-tree-sibling>`__ or null if it has no
   `preceding <#concept-tree-preceding>`__
   `sibling <#concept-tree-sibling>`__.

   The next sibling of an object is its first
   `following <#concept-tree-following>`__
   `sibling <#concept-tree-sibling>`__ or null if it has no
   `following <#concept-tree-following>`__
   `sibling <#concept-tree-sibling>`__.

   The index of an object is its number of
   `preceding <#concept-tree-preceding>`__
   `siblings <#concept-tree-sibling>`__, or 0 if it has none.


/1.2. Ordered sets
==================

   .. .. rubric:: 1.2. Ordered sets ` <#ordered-sets>`__
      :name: ordered-sets
      :class: heading settled

   The ordered set parser takes a string ``input`` and then runs these
   steps:

   #. Let ``inputTokens`` be the result of `splitting ``input`` on ASCII
      whitespace <https://infra.spec.whatwg.org/#split-on-ascii-whitespace>`__.

   #. Let ``tokens`` be a new `ordered
      set <https://infra.spec.whatwg.org/#ordered-set>`__.

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``token`` in ``inputTokens``,
      `append <https://infra.spec.whatwg.org/#set-append>`__ ``token``
      to ``tokens``.

   #. Return ``tokens``.

   The ordered set serializer takes a ``set`` and returns the
   `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
   of ``set`` using U+0020 SPACE.


/1.3. Selectors
===============

   .. .. rubric:: 1.3. Selectors ` <#selectors>`__
      :name: selectors
      :class: heading settled

   To scope-match a selectors string ``selectors`` against a ``node``,
   run these steps:

   #. Let ``s`` be the result of `parse a
      selector <https://drafts.csswg.org/selectors-4/#parse-a-selector>`__
      ``selectors``. `[SELECTORS4] <#biblio-selectors4>`__

   #. If ``s`` is failure, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return the result of `match a selector against a
      tree <https://drafts.csswg.org/selectors-4/#match-a-selector-against-a-tree>`__
      with ``s`` and ``node``\ ’s `root <#concept-tree-root>`__ using
      `scoping root <https://drafts.csswg.org/selectors-4/#scoping-root>`__
      ``node``. `[SELECTORS4] <#biblio-selectors4>`__.

   Support for namespaces within selectors is not planned and will not
   be added.


/1.4. Namespaces
================

   .. .. rubric:: 1.4. Namespaces ` <#namespaces>`__
      :name: namespaces
      :class: heading settled

   To validate a ``qualifiedName``,
   `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
   "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
   ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
   if ``qualifiedName`` does not match the
   ```QName`` <https://www.w3.org/TR/xml-names/#NT-QName>`__ production.

   To validate and extract a ``namespace`` and ``qualifiedName``, run
   these steps:

   #. If ``namespace`` is the empty string, then set it to null.

   #. `Validate <#validate>`__ ``qualifiedName``.

   #. Let ``prefix`` be null.

   #. Let ``localName`` be ``qualifiedName``.

   #. If ``qualifiedName`` contains a U+003A (:), then:

      #. Let ``splitResult`` be the result of running `strictly
         split <https://infra.spec.whatwg.org/#strictly-split>`__ given
         ``qualifiedName`` and U+003A (:).

      #. Set ``prefix`` to ``splitResult``\ [0].

      #. Set ``localName`` to ``splitResult``\ [1].

   #. If ``prefix`` is non-null and ``namespace`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``prefix`` is "``xml``" and ``namespace`` is not the `XML
      namespace <https://infra.spec.whatwg.org/#xml-namespace>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If either ``qualifiedName`` or ``prefix`` is "``xmlns``" and
      ``namespace`` is not the `XMLNS
      namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__,
      then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``namespace`` is the `XMLNS
      namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__ and
      neither ``qualifiedName`` nor ``prefix`` is "``xmlns``", then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return ``namespace``, ``prefix``, and ``localName``.


/2. Events
==========

   .. .. rubric:: 2. Events ` <#events>`__
      :name: events
      :class: heading settled


/2.1. Introduction to "DOM
==========================

   .. .. rubric:: 2.1. Introduction to "DOM
      Events" ` <#introduction-to-dom-events>`__
      :name: introduction-to-dom-events
      :class: heading settled

   Throughout the web platform `events <#concept-event>`__ are
   `dispatched <#concept-event-dispatch>`__ to objects to signal an
   occurrence, such as network activity or user interaction. These
   objects implement the ```EventTarget`` <#eventtarget>`__ interface
   and can therefore add `event listeners <#concept-event-listener>`__
   to observe `events <#concept-event>`__ by calling
   ```addEventListener()`` <#dom-eventtarget-addeventlistener>`__:

   .. code:: lang-javascript

      obj.addEventListener("load", imgFetched)

      function imgFetched(ev) {
        // great success
        …
      }

   `Event listeners <#concept-event-listener>`__ can be removed by
   utilizing the
   ```removeEventListener()`` <#dom-eventtarget-removeeventlistener>`__
   method, passing the same arguments.

   Alternatively, `event listeners <#concept-event-listener>`__ can be
   removed by passing an ```AbortSignal`` <#abortsignal>`__ to
   ```addEventListener()`` <#dom-eventtarget-addeventlistener>`__ and
   calling ```abort()`` <#dom-abortcontroller-abort>`__ on the
   controller owning the signal.

   `Events <#concept-event>`__ are objects too and implement the
   ```Event`` <#event>`__ interface (or a derived interface). In the
   example above ``ev`` is the `event <#concept-event>`__. ``ev`` is
   passed as an argument to the `event
   listener <#concept-event-listener>`__\ ’s
   `callback <#event-listener-callback>`__ (typically a JavaScript
   Function as shown above). `Event
   listeners <#concept-event-listener>`__ key off the
   `event <#concept-event>`__\ ’s ```type`` <#dom-event-type>`__
   attribute value ("``load``" in the above example). The
   `event <#concept-event>`__\ ’s ```target`` <#dom-event-target>`__
   attribute value returns the object to which the
   `event <#concept-event>`__ was
   `dispatched <#concept-event-dispatch>`__ (``obj`` above).

   Although `events <#concept-event>`__ are typically
   `dispatched <#concept-event-dispatch>`__ by the user agent as the
   result of user interaction or the completion of some task,
   applications can `dispatch <#concept-event-dispatch>`__
   `events <#concept-event>`__ themselves by using what are commonly
   known as synthetic events:

   .. code:: lang-javascript

      // add an appropriate event listener
      obj.addEventListener("cat", function(e) { process(e.detail) })

      // create and dispatch the event
      var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}})
      obj.dispatchEvent(event)

   Apart from signaling, `events <#concept-event>`__ are sometimes also
   used to let an application control what happens next in an operation.
   For instance as part of form submission an `event <#concept-event>`__
   whose ```type`` <#dom-event-type>`__ attribute value is "``submit``"
   is `dispatched <#concept-event-dispatch>`__. If this
   `event <#concept-event>`__\ ’s
   ```preventDefault()`` <#dom-event-preventdefault>`__ method is
   invoked, form submission will be terminated. Applications who wish to
   make use of this functionality through `events <#concept-event>`__
   `dispatched <#concept-event-dispatch>`__ by the application
   (synthetic events) can make use of the return value of the
   ```dispatchEvent()`` <#dom-eventtarget-dispatchevent>`__ method:

   .. code:: lang-javascript

      if(obj.dispatchEvent(event)) {
        // event was not canceled, time for some magic
        …
      }

   When an `event <#concept-event>`__ is
   `dispatched <#concept-event-dispatch>`__ to an object that
   `participates <#concept-tree-participate>`__ in a
   `tree <#concept-tree>`__ (e.g., an `element <#concept-element>`__),
   it can reach `event listeners <#concept-event-listener>`__ on that
   object’s `ancestors <#concept-tree-ancestor>`__ too. Effectively, all
   the object’s `inclusive
   ancestor <#concept-tree-inclusive-ancestor>`__ `event
   listeners <#concept-event-listener>`__ whose
   `capture <#event-listener-capture>`__ is true are invoked, in `tree
   order <#concept-tree-order>`__. And then, if
   `event <#concept-event>`__\ ’s ```bubbles`` <#dom-event-bubbles>`__
   is true, all the object’s `inclusive
   ancestor <#concept-tree-inclusive-ancestor>`__ `event
   listeners <#concept-event-listener>`__ whose
   `capture <#event-listener-capture>`__ is false are invoked, now in
   reverse `tree order <#concept-tree-order>`__.

   Let’s look at an example of how `events <#concept-event>`__ work in a
   `tree <#concept-tree>`__:

   .. code:: lang-markup

      <!doctype html>
      <html>
       <head>
        <title>Boring example</title>
       </head>
       <body>
        <p>Hello <span id=x>world</span>!</p>
        <script>
         function test(e) {
           debug(e.target, e.currentTarget, e.eventPhase)
         }
         document.addEventListener("hey", test, {capture: true})
         document.body.addEventListener("hey", test)
         var ev = new Event("hey", {bubbles:true})
         document.getElementById("x").dispatchEvent(ev)
        </script>
       </body>
      </html>

   The ``debug`` function will be invoked twice. Each time the
   `event <#concept-event>`__\ ’s ```target`` <#dom-event-target>`__
   attribute value will be the ``span`` `element <#concept-element>`__.
   The first time ```currentTarget`` <#dom-event-currenttarget>`__
   attribute’s value will be the `document <#concept-document>`__, the
   second time the ``body`` `element <#concept-element>`__.
   ```eventPhase`` <#dom-event-eventphase>`__ attribute’s value switches
   from ```CAPTURING_PHASE`` <#dom-event-capturing_phase>`__ to
   ```BUBBLING_PHASE`` <#dom-event-bubbling_phase>`__. If an `event
   listener <#concept-event-listener>`__ was registered for the ``span``
   `element <#concept-element>`__,
   ```eventPhase`` <#dom-event-eventphase>`__ attribute’s value would
   have been ```AT_TARGET`` <#dom-event-at_target>`__.


/2.2. Interface Event
=====================

   .. .. rubric:: 2.2. Interface
      ```Event`` <#event>`__ ` <#interface-event>`__
      :name: interface-event
      :class: heading settled

   .. code:: idl

      [Exposed=*]
      interface Event {
        constructor(DOMString type, optional EventInit eventInitDict = {});

        readonly attribute DOMString type;
        readonly attribute EventTarget? target;
        readonly attribute EventTarget? srcElement; // legacy
        readonly attribute EventTarget? currentTarget;
        sequence<EventTarget> composedPath();

        const unsigned short NONE = 0;
        const unsigned short CAPTURING_PHASE = 1;
        const unsigned short AT_TARGET = 2;
        const unsigned short BUBBLING_PHASE = 3;
        readonly attribute unsigned short eventPhase;

        undefined stopPropagation();
                 attribute boolean cancelBubble; // legacy alias of .stopPropagation()
        undefined stopImmediatePropagation();

        readonly attribute boolean bubbles;
        readonly attribute boolean cancelable;
                 attribute boolean returnValue;  // legacy
        undefined preventDefault();
        readonly attribute boolean defaultPrevented;
        readonly attribute boolean composed;

        [LegacyUnforgeable] readonly attribute boolean isTrusted;
        readonly attribute DOMHighResTimeStamp timeStamp;

        undefined initEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false); // legacy
      };

      dictionary EventInit {
        boolean bubbles = false;
        boolean cancelable = false;
        boolean composed = false;
      };

   An ```Event`` <#event>`__ object is simply named an event. It allows
   for signaling that something has occurred, e.g., that an image has
   completed downloading.

   A potential event target is null or an
   ```EventTarget`` <#eventtarget>`__ object.

   An `event <#concept-event>`__ has an associated target (a `potential
   event target <#potential-event-target>`__). Unless stated otherwise
   it is null.

   An `event <#concept-event>`__ has an associated relatedTarget (a
   `potential event target <#potential-event-target>`__). Unless stated
   otherwise it is null.

   Other specifications use `relatedTarget <#event-relatedtarget>`__ to
   define a ``relatedTarget`` attribute.
   `[UIEVENTS] <#biblio-uievents>`__

   An `event <#concept-event>`__ has an associated touch target list (a
   `list <https://infra.spec.whatwg.org/#list>`__ of zero or more
   `potential event targets <#potential-event-target>`__). Unless stated
   otherwise it is the empty list.

   The `touch target list <#event-touch-target-list>`__ is for the
   exclusive use of defining the
   ```TouchEvent`` <https://w3c.github.io/touch-events/#idl-def-touchevent>`__
   interface and related interfaces.
   `[TOUCH-EVENTS] <#biblio-touch-events>`__

   An `event <#concept-event>`__ has an associated path. A
   `path <#event-path>`__ is a
   `list <https://infra.spec.whatwg.org/#list>`__ of
   `structs <https://infra.spec.whatwg.org/#struct>`__. Each
   `struct <https://infra.spec.whatwg.org/#struct>`__ consists of an
   invocation target (an ```EventTarget`` <#eventtarget>`__ object), an
   invocation-target-in-shadow-tree (a boolean), a shadow-adjusted
   target (a `potential event target <#potential-event-target>`__), a
   relatedTarget (a `potential event
   target <#potential-event-target>`__), a touch target list (a
   `list <https://infra.spec.whatwg.org/#list>`__ of `potential event
   targets <#potential-event-target>`__), a root-of-closed-tree (a
   boolean), and a slot-in-closed-tree (a boolean). A
   `path <#event-path>`__ is initially the empty list.

   ``event`` ``= new`` ```Event`` <#dom-event-event>`__ ``(`` ``type`` ``[,`` ``eventInitDict`` ``])``
      Returns a new ``event`` whose ```type`` <#dom-event-type>`__
      attribute value is set to ``type``. The ``eventInitDict`` argument
      allows for setting the ```bubbles`` <#dom-event-bubbles>`__ and
      ```cancelable`` <#dom-event-cancelable>`__ attributes via object
      members of the same name.
   ``event`` ``.`` ```type`` <#dom-event-type>`__
      Returns the type of ``event``, e.g. "``click``", "``hashchange``",
      or "``submit``".
   ``event`` ``.`` ```target`` <#dom-event-target>`__
      Returns the object to which ``event`` is
      `dispatched <#concept-event-dispatch>`__ (its
      `target <#event-target>`__).
   ``event`` ``.`` ```currentTarget`` <#dom-event-currenttarget>`__
      Returns the object whose `event
      listener <#concept-event-listener>`__\ ’s
      `callback <#event-listener-callback>`__ is currently being
      invoked.
   ``event`` ``.`` ```composedPath()`` <#dom-event-composedpath>`__
      Returns the `invocation target <#event-path-invocation-target>`__
      objects of ``event``\ ’s `path <#event-path>`__ (objects on which
      listeners will be invoked), except for any
      `nodes <#concept-node>`__ in `shadow
      trees <#concept-shadow-tree>`__ of which the `shadow
      root <#concept-shadow-root>`__\ ’s `mode <#shadowroot-mode>`__ is
      "``closed``" that are not reachable from ``event``\ ’s
      ```currentTarget`` <#dom-event-currenttarget>`__.
   ``event`` ``.`` ```eventPhase`` <#dom-event-eventphase>`__
      Returns the `event <#concept-event>`__\ ’s phase, which is one of
      ```NONE`` <#dom-event-none>`__,
      ```CAPTURING_PHASE`` <#dom-event-capturing_phase>`__,
      ```AT_TARGET`` <#dom-event-at_target>`__, and
      ```BUBBLING_PHASE`` <#dom-event-bubbling_phase>`__.
   ``event`` ``.`` ```stopPropagation`` <#dom-event-stoppropagation>`__ ``()``
      When `dispatched <#concept-event-dispatch>`__ in a
      `tree <#concept-tree>`__, invoking this method prevents ``event``
      from reaching any objects other than the current object.
   ``event`` ``.`` ```stopImmediatePropagation`` <#dom-event-stopimmediatepropagation>`__ ``()``
      Invoking this method prevents ``event`` from reaching any
      registered `event listeners <#concept-event-listener>`__ after the
      current one finishes running and, when
      `dispatched <#concept-event-dispatch>`__ in a
      `tree <#concept-tree>`__, also prevents ``event`` from reaching
      any other objects.
   ``event`` ``.`` ```bubbles`` <#dom-event-bubbles>`__
      Returns true or false depending on how ``event`` was initialized.
      True if ``event`` goes through its `target <#event-target>`__\ ’s
      `ancestors <#concept-tree-ancestor>`__ in reverse `tree
      order <#concept-tree-order>`__; otherwise false.
   ``event`` ``.`` ```cancelable`` <#dom-event-cancelable>`__
      Returns true or false depending on how ``event`` was initialized.
      Its return value does not always carry meaning, but true can
      indicate that part of the operation during which ``event`` was
      `dispatched <#concept-event-dispatch>`__, can be canceled by
      invoking the ```preventDefault()`` <#dom-event-preventdefault>`__
      method.
   ``event`` ``.`` ```preventDefault`` <#dom-event-preventdefault>`__ ``()``
      If invoked when the ```cancelable`` <#dom-event-cancelable>`__
      attribute value is true, and while executing a listener for the
      ``event`` with
      ```passive`` <#dom-addeventlisteneroptions-passive>`__ set to
      false, signals to the operation that caused ``event`` to be
      `dispatched <#concept-event-dispatch>`__ that it needs to be
      canceled.
   ``event`` ``.`` ```defaultPrevented`` <#dom-event-defaultprevented>`__
      Returns true if
      ```preventDefault()`` <#dom-event-preventdefault>`__ was invoked
      successfully to indicate cancelation; otherwise false.
   ``event`` ``.`` ```composed`` <#dom-event-composed>`__
      Returns true or false depending on how ``event`` was initialized.
      True if ``event`` invokes listeners past a
      ```ShadowRoot`` <#shadowroot>`__ `node <#concept-node>`__ that is
      the `root <#concept-tree-root>`__ of its
      `target <#event-target>`__; otherwise false.
   ``event`` ``.`` ```isTrusted`` <#dom-event-istrusted>`__
      Returns true if ``event`` was
      `dispatched <#concept-event-dispatch>`__ by the user agent, and
      false otherwise.
   ``event`` ``.`` ```timeStamp`` <#dom-event-timestamp>`__
      Returns the ``event``\ ’s timestamp as the number of milliseconds
      measured relative to the occurrence.

   The ``type`` attribute must return the value it was initialized to.
   When an `event <#concept-event>`__ is created the attribute must be
   initialized to the empty string.

   The ``target`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `target <#event-target>`__.

   The ``srcElement`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `target <#event-target>`__.

   The ``currentTarget`` attribute must return the value it was
   initialized to. When an `event <#concept-event>`__ is created the
   attribute must be initialized to null.

   .. container:: algorithm

      The ``composedPath()`` method steps are:

      #. Let ``composedPath`` be an empty
         `list <https://infra.spec.whatwg.org/#list>`__.

      #. Let ``path`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `path <#event-path>`__.

      #. If ``path`` `is
         empty <https://infra.spec.whatwg.org/#list-is-empty>`__, then
         return ``composedPath``.

      #. Let ``currentTarget`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         ```currentTarget`` <#dom-event-currenttarget>`__ attribute
         value.

      #. `Append <https://infra.spec.whatwg.org/#list-append>`__
         ``currentTarget`` to ``composedPath``.

      #. Let ``currentTargetIndex`` be 0.

      #. Let ``currentTargetHiddenSubtreeLevel`` be 0.

      #. Let ``index`` be ``path``\ ’s
         `size <https://infra.spec.whatwg.org/#list-size>`__ − 1.

      #. While ``index`` is greater than or equal to 0:

         #. If ``path``\ [``index``]'s
            `root-of-closed-tree <#event-path-root-of-closed-tree>`__ is
            true, then increase ``currentTargetHiddenSubtreeLevel`` by
            1.

         #. If ``path``\ [``index``]'s `invocation
            target <#event-path-invocation-target>`__ is
            ``currentTarget``, then set ``currentTargetIndex`` to
            ``index`` and
            `break <https://infra.spec.whatwg.org/#iteration-break>`__.

         #. If ``path``\ [``index``]'s
            `slot-in-closed-tree <#event-path-slot-in-closed-tree>`__ is
            true, then decrease ``currentTargetHiddenSubtreeLevel`` by
            1.

         #. Decrease ``index`` by 1.

      #. Let ``currentHiddenLevel`` and ``maxHiddenLevel`` be
         ``currentTargetHiddenSubtreeLevel``.

      #. Set ``index`` to ``currentTargetIndex`` − 1.

      #. While ``index`` is greater than or equal to 0:

         #. If ``path``\ [``index``]'s
            `root-of-closed-tree <#event-path-root-of-closed-tree>`__ is
            true, then increase ``currentHiddenLevel`` by 1.

         #. If ``currentHiddenLevel`` is less than or equal to
            ``maxHiddenLevel``, then
            `prepend <https://infra.spec.whatwg.org/#list-prepend>`__
            ``path``\ [``index``]'s `invocation
            target <#event-path-invocation-target>`__ to
            ``composedPath``.

         #. If ``path``\ [``index``]'s
            `slot-in-closed-tree <#event-path-slot-in-closed-tree>`__ is
            true, then:

            #. Decrease ``currentHiddenLevel`` by 1.

            #. If ``currentHiddenLevel`` is less than
               ``maxHiddenLevel``, then set ``maxHiddenLevel`` to
               ``currentHiddenLevel``.

         #. Decrease ``index`` by 1.

      #. Set ``currentHiddenLevel`` and ``maxHiddenLevel`` to
         ``currentTargetHiddenSubtreeLevel``.

      #. Set ``index`` to ``currentTargetIndex`` + 1.

      #. While ``index`` is less than ``path``\ ’s
         `size <https://infra.spec.whatwg.org/#list-size>`__:

         #. If ``path``\ [``index``]'s
            `slot-in-closed-tree <#event-path-slot-in-closed-tree>`__ is
            true, then increase ``currentHiddenLevel`` by 1.

         #. If ``currentHiddenLevel`` is less than or equal to
            ``maxHiddenLevel``, then
            `append <https://infra.spec.whatwg.org/#list-append>`__
            ``path``\ [``index``]'s `invocation
            target <#event-path-invocation-target>`__ to
            ``composedPath``.

         #. If ``path``\ [``index``]'s
            `root-of-closed-tree <#event-path-root-of-closed-tree>`__ is
            true, then:

            #. Decrease ``currentHiddenLevel`` by 1.

            #. If ``currentHiddenLevel`` is less than
               ``maxHiddenLevel``, then set ``maxHiddenLevel`` to
               ``currentHiddenLevel``.

         #. Increase ``index`` by 1.

      #. Return ``composedPath``.

   The ``eventPhase`` attribute must return the value it was initialized
   to, which must be one of the following:

   ``NONE`` (numeric value 0)
      `Events <#concept-event>`__ not currently
      `dispatched <#concept-event-dispatch>`__ are in this phase.
   ``CAPTURING_PHASE`` (numeric value 1)
      When an `event <#concept-event>`__ is
      `dispatched <#concept-event-dispatch>`__ to an object that
      `participates <#concept-tree-participate>`__ in a
      `tree <#concept-tree>`__ it will be in this phase before it
      reaches its `target <#event-target>`__.
   ``AT_TARGET`` (numeric value 2)
      When an `event <#concept-event>`__ is
      `dispatched <#concept-event-dispatch>`__ it will be in this phase
      on its `target <#event-target>`__.
   ``BUBBLING_PHASE`` (numeric value 3)
      When an `event <#concept-event>`__ is
      `dispatched <#concept-event-dispatch>`__ to an object that
      `participates <#concept-tree-participate>`__ in a
      `tree <#concept-tree>`__ it will be in this phase after it reaches
      its `target <#event-target>`__.

   Initially the attribute must be initialized to
   ```NONE`` <#dom-event-none>`__.

   --------------

   Each `event <#concept-event>`__ has the following associated flags
   that are all initially unset:

   -  stop propagation flag
   -  stop immediate propagation flag
   -  canceled flag
   -  in passive listener flag
   -  composed flag
   -  initialized flag
   -  dispatch flag

   The ``stopPropagation()`` method steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `stop propagation
   flag <#stop-propagation-flag>`__.

   The ``cancelBubble`` getter steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `stop propagation
   flag <#stop-propagation-flag>`__ is set; otherwise false.

   The ```cancelBubble`` <#dom-event-cancelbubble>`__ setter steps are
   to set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `stop
   propagation flag <#stop-propagation-flag>`__ if the given value is
   true; otherwise do nothing.

   The ``stopImmediatePropagation()`` method steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `stop propagation
   flag <#stop-propagation-flag>`__ and
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `stop immediate
   propagation flag <#stop-immediate-propagation-flag>`__.

   The ``bubbles`` and ``cancelable`` attributes must return the values
   they were initialized to.

   To set the canceled flag, given an `event <#concept-event>`__
   ``event``, if ``event``\ ’s
   ```cancelable`` <#dom-event-cancelable>`__ attribute value is true
   and ``event``\ ’s `in passive listener
   flag <#in-passive-listener-flag>`__ is unset, then set ``event``\ ’s
   `canceled flag <#canceled-flag>`__, and do nothing otherwise.

   The ``returnValue`` getter steps are to return false if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `canceled
   flag <#canceled-flag>`__ is set; otherwise true.

   The ```returnValue`` <#dom-event-returnvalue>`__ setter steps are to
   `set the canceled flag <#set-the-canceled-flag>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ if the given value is
   false; otherwise do nothing.

   The ``preventDefault()`` method steps are to `set the canceled
   flag <#set-the-canceled-flag>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__.

   There are scenarios where invoking
   ```preventDefault()`` <#dom-event-preventdefault>`__ has no effect.
   User agents are encouraged to log the precise cause in a developer
   console, to aid debugging.

   The ``defaultPrevented`` getter steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `canceled
   flag <#canceled-flag>`__ is set; otherwise false.

   The ``composed`` getter steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `composed
   flag <#composed-flag>`__ is set; otherwise false.

   --------------

   The ``isTrusted`` attribute must return the value it was initialized
   to. When an `event <#concept-event>`__ is created the attribute must
   be initialized to false.

   ```isTrusted`` <#dom-event-istrusted>`__ is a convenience that
   indicates whether an `event <#concept-event>`__ is
   `dispatched <#concept-event-dispatch>`__ by the user agent (as
   opposed to using
   ```dispatchEvent()`` <#dom-eventtarget-dispatchevent>`__). The sole
   legacy exception is
   ```click()`` <https://html.spec.whatwg.org/multipage/interaction.html#dom-click>`__,
   which causes the user agent to dispatch an `event <#concept-event>`__
   whose ```isTrusted`` <#dom-event-istrusted>`__ attribute is
   initialized to false.

   The ``timeStamp`` attribute must return the value it was initialized
   to.

   --------------

   .. container:: algorithm

      To initialize an ``event``, with ``type``, ``bubbles``, and
      ``cancelable``, run these steps:

      #. Set ``event``\ ’s `initialized flag <#initialized-flag>`__.

      #. Unset ``event``\ ’s `stop propagation
         flag <#stop-propagation-flag>`__, `stop immediate propagation
         flag <#stop-immediate-propagation-flag>`__, and `canceled
         flag <#canceled-flag>`__.

      #. Set ``event``\ ’s ```isTrusted`` <#dom-event-istrusted>`__
         attribute to false.

      #. Set ``event``\ ’s `target <#event-target>`__ to null.

      #. Set ``event``\ ’s ```type`` <#dom-event-type>`__ attribute to
         ``type``.

      #. Set ``event``\ ’s ```bubbles`` <#dom-event-bubbles>`__
         attribute to ``bubbles``.

      #. Set ``event``\ ’s ```cancelable`` <#dom-event-cancelable>`__
         attribute to ``cancelable``.

   .. container:: algorithm

      The
      ``initEvent(`` ``type`` ``,`` ``bubbles`` ``,`` ``cancelable`` ``)``
      method steps are:

      #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `dispatch flag <#dispatch-flag>`__ is set, then return.

      #. `Initialize <#concept-event-initialize>`__
         `this <https://webidl.spec.whatwg.org/#this>`__ with ``type``,
         ``bubbles``, and ``cancelable``.

   ```initEvent()`` <#dom-event-initevent>`__ is redundant with
   `event <#concept-event>`__ constructors and incapable of setting
   ```composed`` <#dom-event-composed>`__. It has to be supported for
   legacy content.


/2.3. Legacy extensions to the Window
======================================

   .. .. rubric:: 2.3. Legacy extensions to the
      ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
      interface ` <#interface-window-extensions>`__
      :name: interface-window-extensions
      :class: heading settled

   .. code:: idl

      partial interface Window {
        [Replaceable] readonly attribute (Event or undefined) event; // legacy
      };

   Each
   ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
   object has an associated current event (undefined or an
   ```Event`` <#event>`__ object). Unless stated otherwise it is
   undefined.

   The ``event`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `current
   event <#window-current-event>`__.

   Web developers are strongly encouraged to instead rely on the
   ```Event`` <#event>`__ object passed to event listeners, as that will
   result in more portable code. This attribute is not available in
   workers or worklets, and is inaccurate for events dispatched in
   `shadow trees <#concept-shadow-tree>`__.


/2.4. Interface CustomEvent
===========================

   .. .. rubric:: 2.4. Interface
      ```CustomEvent`` <#customevent>`__ ` <#interface-customevent>`__
      :name: interface-customevent
      :class: heading settled

   .. code:: idl

      [Exposed=*]
      interface CustomEvent : Event {
        constructor(DOMString type, optional CustomEventInit eventInitDict = {});

        readonly attribute any detail;

        undefined initCustomEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false, optional any detail = null); // legacy
      };

      dictionary CustomEventInit : EventInit {
        any detail = null;
      };

   `Events <#concept-event>`__ using the
   ```CustomEvent`` <#customevent>`__ interface can be used to carry
   custom data.

   ``event`` ``= new`` ```CustomEvent`` <#dom-customevent-customevent>`__ ``(`` ``type`` ``[,`` ``eventInitDict`` ``])``
      Works analogously to the constructor for ```Event`` <#event>`__
      except that the ``eventInitDict`` argument now allows for setting
      the ```detail`` <#dom-customevent-detail>`__ attribute too.
   ``event`` ``.`` ```detail`` <#dom-customevent-detail>`__
      Returns any custom data ``event`` was created with. Typically used
      for synthetic events.

   The ``detail`` attribute must return the value it was initialized to.

   .. container:: algorithm

      The
      ``initCustomEvent(`` ``type`` ``,`` ``bubbles`` ``,`` ``cancelable`` ``,`` ``detail`` ``)``
      method steps are:

      #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `dispatch flag <#dispatch-flag>`__ is set, then return.

      #. `Initialize <#concept-event-initialize>`__
         `this <https://webidl.spec.whatwg.org/#this>`__ with ``type``,
         ``bubbles``, and ``cancelable``.

      #. Set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         ```detail`` <#dom-customevent-detail>`__ attribute to
         ``detail``.


/2.5. Constructing events
=========================

   .. .. rubric:: 2.5. Constructing events ` <#constructing-events>`__
      :name: constructing-events
      :class: heading settled

   `Specifications <#other-applicable-specifications>`__ may define
   event constructing steps for all or some `events <#concept-event>`__.
   The algorithm is passed an `event <#concept-event>`__ ``event`` and
   an ```EventInit`` <#dictdef-eventinit>`__ ``eventInitDict`` as
   indicated in the `inner event creation
   steps <#inner-event-creation-steps>`__.

   This construct can be used by ```Event`` <#event>`__ subclasses that
   have a more complex structure than a simple 1:1 mapping between their
   initializing dictionary members and IDL attributes.

   .. container:: algorithm

      When a constructor of the ```Event`` <#event>`__ interface, or of
      an interface that inherits from the ```Event`` <#event>`__
      interface, is invoked, these steps must be run, given the
      arguments ``type`` and ``eventInitDict``:

      #. Let ``event`` be the result of running the `inner event
         creation steps <#inner-event-creation-steps>`__ with this
         interface, null, now, and ``eventInitDict``.

      #. Initialize ``event``\ ’s ```type`` <#dom-event-type>`__
         attribute to ``type``.

      #. Return ``event``.

   .. container:: algorithm

      To create an event using ``eventInterface``, which must be either
      ```Event`` <#event>`__ or an interface that inherits from it, and
      optionally given a `realm <https://tc39.es/ecma262/#realm>`__
      ``realm``, run these steps:

      #. If ``realm`` is not given, then set it to null.

      #. Let ``dictionary`` be the result of
         `converting <https://webidl.spec.whatwg.org/#dfn-convert-ecmascript-to-idl-value>`__
         the JavaScript value undefined to the dictionary type accepted
         by ``eventInterface``\ ’s constructor. (This dictionary type
         will either be ```EventInit`` <#dictdef-eventinit>`__ or a
         dictionary that inherits from it.)

         This does not work if members are required; see
         `whatwg/dom#600 <https://github.com/whatwg/dom/issues/600>`__.

      #. Let ``event`` be the result of running the `inner event
         creation steps <#inner-event-creation-steps>`__ with
         ``eventInterface``, ``realm``, the time of the occurrence that
         the event is signaling, and ``dictionary``.

         ` <#example-timestamp-initialization>`__\ In macOS the time of
         the occurrence for input actions is available via the
         ``timestamp`` property of ``NSEvent`` objects.

      #. Initialize ``event``\ ’s
         ```isTrusted`` <#dom-event-istrusted>`__ attribute to true.

      #. Return ``event``.

   `Create an event <#concept-event-create>`__ is meant to be used by
   other specifications which need to separately
   `create <#concept-event-create>`__ and
   `dispatch <#concept-event-dispatch>`__ events, instead of simply
   `firing <#concept-event-fire>`__ them. It ensures the event’s
   attributes are initialized to the correct defaults.

   .. container:: algorithm

      The inner event creation steps, given an ``eventInterface``,
      ``realm``, ``time``, and ``dictionary``, are as follows:

      #. Let ``event`` be the result of creating a new object using
         ``eventInterface``. If ``realm`` is non-null, then use that
         realm; otherwise, use the default behavior defined in Web IDL.

         As of the time of this writing Web IDL does not yet define any
         default behavior; see
         `whatwg/webidl#135 <https://github.com/whatwg/webidl/issues/135>`__.

      #. Set ``event``\ ’s `initialized flag <#initialized-flag>`__.

      #. Initialize ``event``\ ’s
         ```timeStamp`` <#dom-event-timestamp>`__ attribute to the
         `relative high resolution coarse
         time <https://w3c.github.io/hr-time/#dfn-relative-high-resolution-coarse-time>`__
         given ``time`` and ``event``\ ’s `relevant global
         object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global>`__.

      #. `For each <https://infra.spec.whatwg.org/#map-iterate>`__
         ``member`` → ``value`` in ``dictionary``, if ``event`` has an
         attribute whose
         `identifier <https://webidl.spec.whatwg.org/#dfn-identifier>`__
         is ``member``, then initialize that attribute to ``value``.

      #. Run the `event constructing
         steps <#concept-event-constructor-ext>`__ with ``event`` and
         ``dictionary``.

      #. Return ``event``.


/2.6. Defining event interfaces
===============================

   .. .. rubric:: 2.6. Defining event interfaces ` <#defining-event-interfaces>`__
      :name: defining-event-interfaces
      :class: heading settled

   In general, when defining a new interface that inherits from
   ```Event`` <#event>`__ please always ask feedback from the
   `WHATWG <https://whatwg.org/>`__ or the `W3C WebApps
   WG <https://www.w3.org/2008/webapps/>`__ community.

   The ```CustomEvent`` <#customevent>`__ interface can be used as
   starting point. However, do not introduce any
   ``init`` ``*`` ``Event()`` methods as they are redundant with
   constructors. Interfaces that inherit from the ```Event`` <#event>`__
   interface that have such a method only have it for historical
   reasons.


/2.7. Interface EventTarget
===========================

   .. .. rubric:: 2.7. Interface ```EventTarget`` <#eventtarget>`__ ` <#interface-eventtarget>`__
      :name: interface-eventtarget
      :class: heading settled

   .. code:: idl

      [Exposed=*]
      interface EventTarget {
        constructor();

        undefined addEventListener(DOMString type, EventListener? callback, optional (AddEventListenerOptions or boolean) options = {});
        undefined removeEventListener(DOMString type, EventListener? callback, optional (EventListenerOptions or boolean) options = {});
        boolean dispatchEvent(Event event);
      };

      callback interface EventListener {
        undefined handleEvent(Event event);
      };

      dictionary EventListenerOptions {
        boolean capture = false;
      };

      dictionary AddEventListenerOptions : EventListenerOptions {
        boolean passive;
        boolean once = false;
        AbortSignal signal;
      };

   An ```EventTarget`` <#eventtarget>`__ object represents a target to
   which an `event <#concept-event>`__ can be
   `dispatched <#concept-event-dispatch>`__ when something has occurred.

   Each ```EventTarget`` <#eventtarget>`__ object has an associated
   event listener list (a `list <https://infra.spec.whatwg.org/#list>`__
   of zero or more `event listeners <#concept-event-listener>`__). It is
   initially the empty list.

   An event listener can be used to observe a specific
   `event <#concept-event>`__ and consists of:

   -  type (a string)
   -  callback (null or an
      ```EventListener`` <#callbackdef-eventlistener>`__ object)
   -  capture (a boolean, initially false)
   -  passive (null or a boolean, initially null)
   -  once (a boolean, initially false)
   -  signal (null or an ```AbortSignal`` <#abortsignal>`__ object)
   -  removed (a boolean for bookkeeping purposes, initially false)

   Although `callback <#event-listener-callback>`__ is an
   ```EventListener`` <#callbackdef-eventlistener>`__ object, an `event
   listener <#concept-event-listener>`__ is a broader concept as can be
   seen above.

   Each ```EventTarget`` <#eventtarget>`__ object also has an associated
   get the parent algorithm, which takes an `event <#concept-event>`__
   ``event``, and returns an ```EventTarget`` <#eventtarget>`__ object.
   Unless specified otherwise it returns null.

   `Nodes <#concept-node>`__, `shadow roots <#concept-shadow-root>`__,
   and `documents <#concept-document>`__ override the `get the
   parent <#get-the-parent>`__ algorithm.

   Each ```EventTarget`` <#eventtarget>`__ object can have an associated
   activation behavior algorithm. The `activation
   behavior <#eventtarget-activation-behavior>`__ algorithm is passed an
   `event <#concept-event>`__, as indicated in the
   `dispatch <#concept-event-dispatch>`__ algorithm.

   This exists because user agents perform certain actions for certain
   ```EventTarget`` <#eventtarget>`__ objects, e.g., the
   ```area`` <https://html.spec.whatwg.org/multipage/image-maps.html#the-area-element>`__
   element, in response to synthetic
   ```MouseEvent`` <https://w3c.github.io/uievents/#mouseevent>`__
   `events <#concept-event>`__ whose ```type`` <#dom-event-type>`__
   attribute is ``click``. Web compatibility prevented it from being
   removed and it is now the enshrined way of defining an activation of
   something. `[HTML] <#biblio-html>`__

   Each ```EventTarget`` <#eventtarget>`__ object that has `activation
   behavior <#eventtarget-activation-behavior>`__, can additionally have
   both (not either) a legacy-pre-activation behavior algorithm and a
   legacy-canceled-activation behavior algorithm.

   These algorithms only exist for checkbox and radio
   ```input`` <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__
   elements and are not to be used for anything else.
   `[HTML] <#biblio-html>`__

   ``target`` ``= new`` ```EventTarget`` <#dom-eventtarget-eventtarget>`__ ``();``
      Creates a new ```EventTarget`` <#eventtarget>`__ object, which can
      be used by developers to `dispatch <#concept-event-dispatch>`__
      and listen for `events <#concept-event>`__.

   ``target`` ``.`` ```addEventListener`` <#dom-eventtarget-addeventlistener>`__ ``(`` ``type`` ``,`` ``callback`` ``[,`` ``options`` ``])``
      Appends an `event listener <#concept-event-listener>`__ for
      `events <#concept-event>`__ whose ```type`` <#dom-event-type>`__
      attribute value is ``type``. The ``callback`` argument sets the
      `callback <#event-listener-callback>`__ that will be invoked when
      the `event <#concept-event>`__ is
      `dispatched <#concept-event-dispatch>`__.

      The ``options`` argument sets listener-specific options. For
      compatibility this can be a boolean, in which case the method
      behaves exactly as if the value was specified as ``options``\ ’s
      ```capture`` <#dom-eventlisteneroptions-capture>`__.

      When set to true, ``options``\ ’s
      ```capture`` <#dom-eventlisteneroptions-capture>`__ prevents
      `callback <#event-listener-callback>`__ from being invoked when
      the `event <#concept-event>`__\ ’s
      ```eventPhase`` <#dom-event-eventphase>`__ attribute value is
      ```BUBBLING_PHASE`` <#dom-event-bubbling_phase>`__. When false (or
      not present), `callback <#event-listener-callback>`__ will not be
      invoked when `event <#concept-event>`__\ ’s
      ```eventPhase`` <#dom-event-eventphase>`__ attribute value is
      ```CAPTURING_PHASE`` <#dom-event-capturing_phase>`__. Either way,
      `callback <#event-listener-callback>`__ will be invoked if
      `event <#concept-event>`__\ ’s
      ```eventPhase`` <#dom-event-eventphase>`__ attribute value is
      ```AT_TARGET`` <#dom-event-at_target>`__.

      When set to true, ``options``\ ’s
      ```passive`` <#dom-addeventlisteneroptions-passive>`__ indicates
      that the `callback <#event-listener-callback>`__ will not cancel
      the event by invoking
      ```preventDefault()`` <#dom-event-preventdefault>`__. This is used
      to enable performance optimizations described in `§ 2.8 Observing
      event listeners <#observing-event-listeners>`__.

      When set to true, ``options``\ ’s
      ```once`` <#dom-addeventlisteneroptions-once>`__ indicates that
      the `callback <#event-listener-callback>`__ will only be invoked
      once after which the event listener will be removed.

      If an ```AbortSignal`` <#abortsignal>`__ is passed for
      ``options``\ ’s
      ```signal`` <#dom-addeventlisteneroptions-signal>`__, then the
      event listener will be removed when signal is aborted.

      The `event listener <#concept-event-listener>`__ is appended to
      ``target``\ ’s `event listener
      list <#eventtarget-event-listener-list>`__ and is not appended if
      it has the same `type <#event-listener-type>`__,
      `callback <#event-listener-callback>`__, and
      `capture <#event-listener-capture>`__.

   ``target`` ``.`` ```removeEventListener`` <#dom-eventtarget-removeeventlistener>`__ ``(`` ``type`` ``,`` ``callback`` ``[,`` ``options`` ``])``
      Removes the `event listener <#concept-event-listener>`__ in
      ``target``\ ’s `event listener
      list <#eventtarget-event-listener-list>`__ with the same ``type``,
      ``callback``, and ``options``.

   ``target`` ``.`` ```dispatchEvent`` <#dom-eventtarget-dispatchevent>`__ ``(`` ``event`` ``)``
      `Dispatches <#concept-event-dispatch>`__ a synthetic event
      ``event`` to ``target`` and returns true if either ``event``\ ’s
      ```cancelable`` <#dom-event-cancelable>`__ attribute value is
      false or its ```preventDefault()`` <#dom-event-preventdefault>`__
      method was not invoked; otherwise false.

   .. container:: algorithm

      To flatten ``options``, run these steps:

      #. If ``options`` is a boolean, then return ``options``.

      #. Return
         ``options``\ ["```capture`` <#dom-eventlisteneroptions-capture>`__"].

   .. container:: algorithm

      To flatten more ``options``, run these steps:

      #. Let ``capture`` be the result of
         `flattening <#concept-flatten-options>`__ ``options``.

      #. Let ``once`` be false.

      #. Let ``passive`` and ``signal`` be null.

      #. If ``options`` is a
         `dictionary <https://webidl.spec.whatwg.org/#dfn-dictionary>`__,
         then:

         #. Set ``once`` to
            ``options``\ ["```once`` <#dom-addeventlisteneroptions-once>`__"].

         #. If
            ``options``\ ["```passive`` <#dom-addeventlisteneroptions-passive>`__"]
            `exists <https://infra.spec.whatwg.org/#map-exists>`__, then
            set ``passive`` to
            ``options``\ ["```passive`` <#dom-addeventlisteneroptions-passive>`__"].

         #. If
            ``options``\ ["```signal`` <#dom-addeventlisteneroptions-signal>`__"]
            `exists <https://infra.spec.whatwg.org/#map-exists>`__, then
            set ``signal`` to
            ``options``\ ["```signal`` <#dom-addeventlisteneroptions-signal>`__"].

      #. Return ``capture``, ``passive``, ``once``, and ``signal``.

   The ``new EventTarget()`` constructor steps are to do nothing.

   Because of the defaults stated elsewhere, the returned
   ```EventTarget`` <#eventtarget>`__'s `get the
   parent <#get-the-parent>`__ algorithm will return null, and it will
   have no `activation behavior <#eventtarget-activation-behavior>`__,
   `legacy-pre-activation
   behavior <#eventtarget-legacy-pre-activation-behavior>`__, or
   `legacy-canceled-activation
   behavior <#eventtarget-legacy-canceled-activation-behavior>`__.

   In the future we could allow custom `get the
   parent <#get-the-parent>`__ algorithms. Let us know if this would be
   useful for your programs. For now, all author-created
   ```EventTarget`` <#eventtarget>`__\ s do not participate in a tree
   structure.

   .. container:: algorithm

      The default passive value, given an event type ``type`` and an
      ```EventTarget`` <#eventtarget>`__ ``eventTarget``, is determined
      as follows:

      #. Return true if all of the following are true:

         -  ``type`` is one of "``touchstart``", "``touchmove``",
            "``wheel``", or "``mousewheel``".
            `[TOUCH-EVENTS] <#biblio-touch-events>`__
            `[UIEVENTS] <#biblio-uievents>`__

         -  ``eventTarget`` is a
            ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
            object, or is a `node <#concept-node>`__ whose `node
            document <#concept-node-document>`__ is ``eventTarget``, or
            is a `node <#concept-node>`__ whose `node
            document <#concept-node-document>`__\ ’s `document
            element <#document-element>`__ is ``eventTarget``, or is a
            `node <#concept-node>`__ whose `node
            document <#concept-node-document>`__\ ’s `body
            element <https://html.spec.whatwg.org/multipage/dom.html#the-body-element-2>`__
            is ``eventTarget``. `[HTML] <#biblio-html>`__

      #. Return false.

   .. container:: algorithm

      To add an event listener, given an
      ```EventTarget`` <#eventtarget>`__ object ``eventTarget`` and an
      `event listener <#concept-event-listener>`__ ``listener``, run
      these steps:

      #. If ``eventTarget`` is a
         ```ServiceWorkerGlobalScope`` <https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope>`__
         object, its `service
         worker <https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope-service-worker>`__\ ’s
         `script
         resource <https://w3c.github.io/ServiceWorker/#dfn-script-resource>`__\ ’s
         `has ever been evaluated
         flag <https://w3c.github.io/ServiceWorker/#dfn-has-ever-been-evaluated-flag>`__
         is set, and ``listener``\ ’s `type <#event-listener-type>`__
         matches the ```type`` <#dom-event-type>`__ attribute value of
         any of the `service worker
         events <https://w3c.github.io/ServiceWorker/#dfn-service-worker-events>`__,
         then `report a warning to the
         console <https://console.spec.whatwg.org/#report-a-warning-to-the-console>`__
         that this might not give the expected results.
         `[SERVICE-WORKERS] <#biblio-service-workers>`__

      #. If ``listener``\ ’s `signal <#event-listener-signal>`__ is not
         null and is `aborted <#abortsignal-aborted>`__, then return.

      #. If ``listener``\ ’s `callback <#event-listener-callback>`__ is
         null, then return.

      #. If ``listener``\ ’s `passive <#event-listener-passive>`__ is
         null, then set it to the `default passive
         value <#default-passive-value>`__ given ``listener``\ ’s
         `type <#event-listener-type>`__ and ``eventTarget``.

      #. If ``eventTarget``\ ’s `event listener
         list <#eventtarget-event-listener-list>`__ does not
         `contain <https://infra.spec.whatwg.org/#list-contain>`__ an
         `event listener <#concept-event-listener>`__ whose
         `type <#event-listener-type>`__ is ``listener``\ ’s
         `type <#event-listener-type>`__,
         `callback <#event-listener-callback>`__ is ``listener``\ ’s
         `callback <#event-listener-callback>`__, and
         `capture <#event-listener-capture>`__ is ``listener``\ ’s
         `capture <#event-listener-capture>`__, then
         `append <https://infra.spec.whatwg.org/#list-append>`__
         ``listener`` to ``eventTarget``\ ’s `event listener
         list <#eventtarget-event-listener-list>`__.

      #. If ``listener``\ ’s `signal <#event-listener-signal>`__ is not
         null, then `add the following <#abortsignal-add>`__ abort steps
         to it:

         #. `Remove an event listener <#remove-an-event-listener>`__
            with ``eventTarget`` and ``listener``.

      The `add an event listener <#add-an-event-listener>`__ concept
      exists to ensure `event
      handlers <https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers>`__
      use the same code path. `[HTML] <#biblio-html>`__

   .. container:: algorithm

      The
      ``addEventListener(`` ``type`` ``,`` ``callback`` ``,`` ``options`` ``)``
      method steps are:

      #. Let ``capture``, ``passive``, ``once``, and ``signal`` be the
         result of `flattening more <#event-flatten-more>`__
         ``options``.

      #. `Add an event listener <#add-an-event-listener>`__ with
         `this <https://webidl.spec.whatwg.org/#this>`__ and an `event
         listener <#concept-event-listener>`__ whose
         `type <#event-listener-type>`__ is ``type``,
         `callback <#event-listener-callback>`__ is ``callback``,
         `capture <#event-listener-capture>`__ is ``capture``,
         `passive <#event-listener-passive>`__ is ``passive``,
         `once <#event-listener-once>`__ is ``once``, and
         `signal <#event-listener-signal>`__ is ``signal``.

   .. container:: algorithm

      To remove an event listener, given an
      ```EventTarget`` <#eventtarget>`__ object ``eventTarget`` and an
      `event listener <#concept-event-listener>`__ ``listener``, run
      these steps:

      #. If ``eventTarget`` is a
         ```ServiceWorkerGlobalScope`` <https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope>`__
         object and its `service
         worker <https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope-service-worker>`__\ ’s
         `set of event types to
         handle <https://w3c.github.io/ServiceWorker/#dfn-set-of-event-types-to-handle>`__
         `contains <https://infra.spec.whatwg.org/#list-contain>`__
         ``listener``\ ’s `type <#event-listener-type>`__, then `report
         a warning to the
         console <https://console.spec.whatwg.org/#report-a-warning-to-the-console>`__
         that this might not give the expected results.
         `[SERVICE-WORKERS] <#biblio-service-workers>`__

      #. Set ``listener``\ ’s `removed <#event-listener-removed>`__ to
         true and
         `remove <https://infra.spec.whatwg.org/#list-remove>`__
         ``listener`` from ``eventTarget``\ ’s `event listener
         list <#eventtarget-event-listener-list>`__.

      HTML needs this to define event handlers.
      `[HTML] <#biblio-html>`__

   .. container:: algorithm

      To remove all event listeners, given an
      ```EventTarget`` <#eventtarget>`__ object ``eventTarget``, `for
      each <https://infra.spec.whatwg.org/#list-iterate>`__ ``listener``
      of ``eventTarget``\ ’s `event listener
      list <#eventtarget-event-listener-list>`__, `remove an event
      listener <#remove-an-event-listener>`__ with ``eventTarget`` and
      ``listener``.

      HTML needs this to define ``document.open()``.
      `[HTML] <#biblio-html>`__

   .. container:: algorithm

      The
      ``removeEventListener(`` ``type`` ``,`` ``callback`` ``,`` ``options`` ``)``
      method steps are:

      #. Let ``capture`` be the result of
         `flattening <#concept-flatten-options>`__ ``options``.

      #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `event
         listener list <#eventtarget-event-listener-list>`__
         `contains <https://infra.spec.whatwg.org/#list-contain>`__ an
         `event listener <#concept-event-listener>`__ whose
         `type <#event-listener-type>`__ is ``type``,
         `callback <#event-listener-callback>`__ is ``callback``, and
         `capture <#event-listener-capture>`__ is ``capture``, then
         `remove an event listener <#remove-an-event-listener>`__ with
         `this <https://webidl.spec.whatwg.org/#this>`__ and that `event
         listener <#concept-event-listener>`__.

      The event listener list will not contain multiple event listeners
      with equal ``type``, ``callback``, and ``capture``, as `add an
      event listener <#add-an-event-listener>`__ prevents that.

   .. container:: algorithm

      The ``dispatchEvent(`` ``event`` ``)`` method steps are:

      #. If ``event``\ ’s `dispatch flag <#dispatch-flag>`__ is set, or
         if its `initialized flag <#initialized-flag>`__ is not set,
         then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InvalidStateError`` <https://webidl.spec.whatwg.org/#invalidstateerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. Initialize ``event``\ ’s
         ```isTrusted`` <#dom-event-istrusted>`__ attribute to false.

      #. Return the result of `dispatching <#concept-event-dispatch>`__
         ``event`` to `this <https://webidl.spec.whatwg.org/#this>`__.


/2.8. Observing event
=====================

   .. .. rubric:: 2.8. Observing event
      listeners ` <#observing-event-listeners>`__
      :name: observing-event-listeners
      :class: heading settled

   In general, developers do not expect the presence of an `event
   listener <#concept-event-listener>`__ to be observable. The impact of
   an `event listener <#concept-event-listener>`__ is determined by its
   `callback <#event-listener-callback>`__. That is, a developer adding
   a no-op `event listener <#concept-event-listener>`__ would not expect
   it to have any side effects.

   Unfortunately, some event APIs have been designed such that
   implementing them efficiently requires observing `event
   listeners <#concept-event-listener>`__. This can make the presence of
   listeners observable in that even empty listeners can have a dramatic
   performance impact on the behavior of the application. For example,
   touch and wheel events which can be used to block asynchronous
   scrolling. In some cases this problem can be mitigated by specifying
   the event to be ```cancelable`` <#dom-event-cancelable>`__ only when
   there is at least one
   non-```passive`` <#dom-addeventlisteneroptions-passive>`__ listener.
   For example,
   non-```passive`` <#dom-addeventlisteneroptions-passive>`__
   ```TouchEvent`` <https://w3c.github.io/touch-events/#idl-def-touchevent>`__
   listeners must block scrolling, but if all listeners are
   ```passive`` <#dom-addeventlisteneroptions-passive>`__ then scrolling
   can be allowed to start `in
   parallel <https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel>`__
   by making the
   ```TouchEvent`` <https://w3c.github.io/touch-events/#idl-def-touchevent>`__
   uncancelable (so that calls to
   ```preventDefault()`` <#dom-event-preventdefault>`__ are ignored). So
   code dispatching an event is able to observe the absence of
   non-```passive`` <#dom-addeventlisteneroptions-passive>`__ listeners,
   and use that to clear the ```cancelable`` <#dom-event-cancelable>`__
   property of the event being dispatched.

   Ideally, any new event APIs are defined such that they do not need
   this property. (Use
   `whatwg/dom <https://github.com/whatwg/dom/issues>`__ for
   discussion.)

   .. container:: algorithm

      To legacy-obtain service worker fetch event listener callbacks
      given a
      ```ServiceWorkerGlobalScope`` <https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope>`__
      ``global``, run these steps. They return a
      `list <https://infra.spec.whatwg.org/#list>`__ of
      ```EventListener`` <#callbackdef-eventlistener>`__ objects.

      #. Let ``callbacks`` be « ».

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``listener`` of ``global``\ ’s `event listener
         list <#eventtarget-event-listener-list>`__:

         #. If ``listener``\ ’s `type <#event-listener-type>`__ is
            "``fetch``", and ``listener``\ ’s
            `callback <#event-listener-callback>`__ is not null, then
            `append <https://infra.spec.whatwg.org/#list-append>`__
            ``listener``\ ’s `callback <#event-listener-callback>`__ to
            ``callbacks``.

      #. Return ``callbacks``.


/2.9. Dispatching events
========================

   .. .. rubric:: 2.9. Dispatching events ` <#dispatching-events>`__
      :name: dispatching-events
      :class: heading settled

   .. container:: algorithm

      To dispatch an ``event`` to a ``target``, with an optional
      ``legacy target override flag`` and an optional
      ``legacyOutputDidListenersThrowFlag``, run these steps:

      #. Set ``event``\ ’s `dispatch flag <#dispatch-flag>`__.

      #. Let ``targetOverride`` be ``target``, if
         ``legacy target override flag`` is not given, and
         ``target``\ ’s `associated
         ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__
         otherwise. `[HTML] <#biblio-html>`__

         ``legacy target override flag`` is only used by HTML and only
         when ``target`` is a
         ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
         object.

      #. Let ``activationTarget`` be null.

      #. Let ``relatedTarget`` be the result of
         `retargeting <#retarget>`__ ``event``\ ’s
         `relatedTarget <#event-relatedtarget>`__ against ``target``.

      #. If ``target`` is not ``relatedTarget`` or ``target`` is
         ``event``\ ’s `relatedTarget <#event-relatedtarget>`__, then:

         #. Let ``touchTargets`` be a new
            `list <https://infra.spec.whatwg.org/#list>`__.

         #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``touchTarget`` of ``event``\ ’s `touch target
            list <#event-touch-target-list>`__,
            `append <https://infra.spec.whatwg.org/#list-append>`__ the
            result of `retargeting <#retarget>`__ ``touchTarget``
            against ``target`` to ``touchTargets``.

         #. `Append to an event path <#concept-event-path-append>`__
            with ``event``, ``target``, ``targetOverride``,
            ``relatedTarget``, ``touchTargets``, and false.

         #. Let ``isActivationEvent`` be true, if ``event`` is a
            ```MouseEvent`` <https://w3c.github.io/uievents/#mouseevent>`__
            object and ``event``\ ’s ```type`` <#dom-event-type>`__
            attribute is "``click``"; otherwise false.

         #. If ``isActivationEvent`` is true and ``target`` has
            `activation behavior <#eventtarget-activation-behavior>`__,
            then set ``activationTarget`` to ``target``.

         #. Let ``slottable`` be ``target``, if ``target`` is a
            `slottable <#concept-slotable>`__ and is
            `assigned <#slotable-assigned>`__, and null otherwise.

         #. Let ``slot-in-closed-tree`` be false.

         #. Let ``parent`` be the result of invoking ``target``\ ’s `get
            the parent <#get-the-parent>`__ with ``event``.

         #. While ``parent`` is non-null:

            #. If ``slottable`` is non-null:

               #. Assert: ``parent`` is a `slot <#concept-slot>`__.

               #. Set ``slottable`` to null.

               #. If ``parent``\ ’s `root <#concept-tree-root>`__ is a
                  `shadow root <#concept-shadow-root>`__ whose
                  `mode <#shadowroot-mode>`__ is "``closed``", then set
                  ``slot-in-closed-tree`` to true.

            #. If ``parent`` is a `slottable <#concept-slotable>`__ and
               is `assigned <#slotable-assigned>`__, then set
               ``slottable`` to ``parent``.

            #. Let ``relatedTarget`` be the result of
               `retargeting <#retarget>`__ ``event``\ ’s
               `relatedTarget <#event-relatedtarget>`__ against
               ``parent``.

            #. Let ``touchTargets`` be a new
               `list <https://infra.spec.whatwg.org/#list>`__.

            #. `For
               each <https://infra.spec.whatwg.org/#list-iterate>`__
               ``touchTarget`` of ``event``\ ’s `touch target
               list <#event-touch-target-list>`__,
               `append <https://infra.spec.whatwg.org/#list-append>`__
               the result of `retargeting <#retarget>`__ ``touchTarget``
               against ``parent`` to ``touchTargets``.

            #. If ``parent`` is a
               ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
               object, or ``parent`` is a `node <#concept-node>`__ and
               ``target``\ ’s `root <#concept-tree-root>`__ is a
               `shadow-including inclusive
               ancestor <#concept-shadow-including-inclusive-ancestor>`__
               of ``parent``, then:

               #. If ``isActivationEvent`` is true, ``event``\ ’s
                  ```bubbles`` <#dom-event-bubbles>`__ attribute is
                  true, ``activationTarget`` is null, and ``parent`` has
                  `activation
                  behavior <#eventtarget-activation-behavior>`__, then
                  set ``activationTarget`` to ``parent``.

               #. `Append to an event
                  path <#concept-event-path-append>`__ with ``event``,
                  ``parent``, null, ``relatedTarget``, ``touchTargets``,
                  and ``slot-in-closed-tree``.

            #. Otherwise, if ``parent`` is ``relatedTarget``, then set
               ``parent`` to null.

            #. Otherwise, set ``target`` to ``parent`` and then:

               #. If ``isActivationEvent`` is true, ``activationTarget``
                  is null, and ``target`` has `activation
                  behavior <#eventtarget-activation-behavior>`__, then
                  set ``activationTarget`` to ``target``.

               #. `Append to an event
                  path <#concept-event-path-append>`__ with ``event``,
                  ``parent``, ``target``, ``relatedTarget``,
                  ``touchTargets``, and ``slot-in-closed-tree``.

            #. If ``parent`` is non-null, then set ``parent`` to the
               result of invoking ``parent``\ ’s `get the
               parent <#get-the-parent>`__ with ``event``.

            #. Set ``slot-in-closed-tree`` to false.

         #. Let ``clearTargetsStruct`` be the last struct in
            ``event``\ ’s `path <#event-path>`__ whose `shadow-adjusted
            target <#event-path-shadow-adjusted-target>`__ is non-null.

         #. Let ``clearTargets`` be true if ``clearTargetsStruct``\ ’s
            `shadow-adjusted
            target <#event-path-shadow-adjusted-target>`__,
            ``clearTargetsStruct``\ ’s
            `relatedTarget <#event-path-relatedtarget>`__, or an
            ```EventTarget`` <#eventtarget>`__ object in
            ``clearTargetsStruct``\ ’s `touch target
            list <#event-path-touch-target-list>`__ is a
            `node <#concept-node>`__ and its
            `root <#concept-tree-root>`__ is a `shadow
            root <#concept-shadow-root>`__; otherwise false.

         #. If ``activationTarget`` is non-null and ``activationTarget``
            has `legacy-pre-activation
            behavior <#eventtarget-legacy-pre-activation-behavior>`__,
            then run ``activationTarget``\ ’s `legacy-pre-activation
            behavior <#eventtarget-legacy-pre-activation-behavior>`__.

         #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``struct`` in ``event``\ ’s `path <#event-path>`__, in
            reverse order:

            #. If ``struct``\ ’s `shadow-adjusted
               target <#event-path-shadow-adjusted-target>`__ is
               non-null, then set ``event``\ ’s
               ```eventPhase`` <#dom-event-eventphase>`__ attribute to
               ```AT_TARGET`` <#dom-event-at_target>`__.

            #. Otherwise, set ``event``\ ’s
               ```eventPhase`` <#dom-event-eventphase>`__ attribute to
               ```CAPTURING_PHASE`` <#dom-event-capturing_phase>`__.

            #. `Invoke <#concept-event-listener-invoke>`__ with
               ``struct``, ``event``, "``capturing``", and
               ``legacyOutputDidListenersThrowFlag`` if given.

         #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``struct`` in ``event``\ ’s `path <#event-path>`__:

            #. If ``struct``\ ’s `shadow-adjusted
               target <#event-path-shadow-adjusted-target>`__ is
               non-null, then set ``event``\ ’s
               ```eventPhase`` <#dom-event-eventphase>`__ attribute to
               ```AT_TARGET`` <#dom-event-at_target>`__.

            #. Otherwise:

               #. If ``event``\ ’s ```bubbles`` <#dom-event-bubbles>`__
                  attribute is false, then
                  `continue <https://infra.spec.whatwg.org/#iteration-continue>`__.

               #. Set ``event``\ ’s
                  ```eventPhase`` <#dom-event-eventphase>`__ attribute
                  to ```BUBBLING_PHASE`` <#dom-event-bubbling_phase>`__.

            #. `Invoke <#concept-event-listener-invoke>`__ with
               ``struct``, ``event``, "``bubbling``", and
               ``legacyOutputDidListenersThrowFlag`` if given.

      #. Set ``event``\ ’s ```eventPhase`` <#dom-event-eventphase>`__
         attribute to ```NONE`` <#dom-event-none>`__.

      #. Set ``event``\ ’s
         ```currentTarget`` <#dom-event-currenttarget>`__ attribute to
         null.

      #. Set ``event``\ ’s `path <#event-path>`__ to the empty list.

      #. Unset ``event``\ ’s `dispatch flag <#dispatch-flag>`__, `stop
         propagation flag <#stop-propagation-flag>`__, and `stop
         immediate propagation
         flag <#stop-immediate-propagation-flag>`__.

      #. If ``clearTargets``, then:

         #. Set ``event``\ ’s `target <#event-target>`__ to null.

         #. Set ``event``\ ’s `relatedTarget <#event-relatedtarget>`__
            to null.

         #. Set ``event``\ ’s `touch target
            list <#event-touch-target-list>`__ to the empty list.

      #. If ``activationTarget`` is non-null, then:

         #. If ``event``\ ’s `canceled flag <#canceled-flag>`__ is
            unset, then run ``activationTarget``\ ’s `activation
            behavior <#eventtarget-activation-behavior>`__ with
            ``event``.

         #. Otherwise, if ``activationTarget`` has
            `legacy-canceled-activation
            behavior <#eventtarget-legacy-canceled-activation-behavior>`__,
            then run ``activationTarget``\ ’s
            `legacy-canceled-activation
            behavior <#eventtarget-legacy-canceled-activation-behavior>`__.

      #. Return false if ``event``\ ’s `canceled
         flag <#canceled-flag>`__ is set; otherwise true.

   .. container:: algorithm

      To append to an event path, given an ``event``,
      ``invocationTarget``, ``shadowAdjustedTarget``, ``relatedTarget``,
      ``touchTargets``, and a ``slot-in-closed-tree``, run these steps:

      #. Let ``invocationTargetInShadowTree`` be false.

      #. If ``invocationTarget`` is a `node <#concept-node>`__ and its
         `root <#concept-tree-root>`__ is a `shadow
         root <#concept-shadow-root>`__, then set
         ``invocationTargetInShadowTree`` to true.

      #. Let ``root-of-closed-tree`` be false.

      #. If ``invocationTarget`` is a `shadow
         root <#concept-shadow-root>`__ whose
         `mode <#shadowroot-mode>`__ is "``closed``", then set
         ``root-of-closed-tree`` to true.

      #. `Append <https://infra.spec.whatwg.org/#list-append>`__ a new
         `struct <https://infra.spec.whatwg.org/#struct>`__ to
         ``event``\ ’s `path <#event-path>`__ whose `invocation
         target <#event-path-invocation-target>`__ is
         ``invocationTarget``,
         `invocation-target-in-shadow-tree <#event-path-invocation-target-in-shadow-tree>`__
         is ``invocationTargetInShadowTree``, `shadow-adjusted
         target <#event-path-shadow-adjusted-target>`__ is
         ``shadowAdjustedTarget``,
         `relatedTarget <#event-path-relatedtarget>`__ is
         ``relatedTarget``, `touch target
         list <#event-path-touch-target-list>`__ is ``touchTargets``,
         `root-of-closed-tree <#event-path-root-of-closed-tree>`__ is
         ``root-of-closed-tree``, and
         `slot-in-closed-tree <#event-path-slot-in-closed-tree>`__ is
         ``slot-in-closed-tree``.

   .. container:: algorithm

      To invoke, given a ``struct``, ``event``, ``phase``, and an
      optional ``legacyOutputDidListenersThrowFlag``, run these steps:

      #. Set ``event``\ ’s `target <#event-target>`__ to the
         `shadow-adjusted target <#event-path-shadow-adjusted-target>`__
         of the last struct in ``event``\ ’s `path <#event-path>`__,
         that is either ``struct`` or preceding ``struct``, whose
         `shadow-adjusted target <#event-path-shadow-adjusted-target>`__
         is non-null.

      #. Set ``event``\ ’s `relatedTarget <#event-relatedtarget>`__ to
         ``struct``\ ’s `relatedTarget <#event-path-relatedtarget>`__.

      #. Set ``event``\ ’s `touch target
         list <#event-touch-target-list>`__ to ``struct``\ ’s `touch
         target list <#event-path-touch-target-list>`__.

      #. If ``event``\ ’s `stop propagation
         flag <#stop-propagation-flag>`__ is set, then return.

      #. Initialize ``event``\ ’s
         ```currentTarget`` <#dom-event-currenttarget>`__ attribute to
         ``struct``\ ’s `invocation
         target <#event-path-invocation-target>`__.

      #. Let ``listeners`` be a
         `clone <https://infra.spec.whatwg.org/#list-clone>`__ of
         ``event``\ ’s ```currentTarget`` <#dom-event-currenttarget>`__
         attribute value’s `event listener
         list <#eventtarget-event-listener-list>`__.

         This avoids `event listeners <#concept-event-listener>`__ added
         after this point from being run. Note that removal still has an
         effect due to the `removed <#event-listener-removed>`__ field.

      #. Let ``invocationTargetInShadowTree`` be ``struct``\ ’s
         `invocation-target-in-shadow-tree <#event-path-invocation-target-in-shadow-tree>`__.

      #. Let ``found`` be the result of running `inner
         invoke <#concept-event-listener-inner-invoke>`__ with
         ``event``, ``listeners``, ``phase``,
         ``invocationTargetInShadowTree``, and
         ``legacyOutputDidListenersThrowFlag`` if given.

      #. If ``found`` is false and ``event``\ ’s
         ```isTrusted`` <#dom-event-istrusted>`__ attribute is true,
         then:

         #. Let ``originalEventType`` be ``event``\ ’s
            ```type`` <#dom-event-type>`__ attribute value.

         #. If ``event``\ ’s ```type`` <#dom-event-type>`__ attribute
            value is a match for any of the strings in the first column
            in the following table, set ``event``\ ’s
            ```type`` <#dom-event-type>`__ attribute value to the string
            in the second column on the same row as the matching string,
            and return otherwise.

            Event type

            Legacy event type

            "``animationend``"

            "``webkitAnimationEnd``"

            "``animationiteration``"

            "``webkitAnimationIteration``"

            "``animationstart``"

            "``webkitAnimationStart``"

            "``transitionend``"

            "``webkitTransitionEnd``"

         #. `Inner invoke <#concept-event-listener-inner-invoke>`__ with
            ``event``, ``listeners``, ``phase``,
            ``invocationTargetInShadowTree``, and
            ``legacyOutputDidListenersThrowFlag`` if given.

         #. Set ``event``\ ’s ```type`` <#dom-event-type>`__ attribute
            value to ``originalEventType``.

   .. container:: algorithm

      To inner invoke, given an ``event``, ``listeners``, ``phase``,
      ``invocationTargetInShadowTree``, and an optional
      ``legacyOutputDidListenersThrowFlag``, run these steps:

      #. Let ``found`` be false.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``listener`` in ``listeners``, whose
         `removed <#event-listener-removed>`__ is false:

         #. If ``event``\ ’s ```type`` <#dom-event-type>`__ attribute
            value is not ``listener``\ ’s
            `type <#event-listener-type>`__, then
            `continue <https://infra.spec.whatwg.org/#iteration-continue>`__.

         #. Set ``found`` to true.

         #. If ``phase`` is "``capturing``" and ``listener``\ ’s
            `capture <#event-listener-capture>`__ is false, then
            `continue <https://infra.spec.whatwg.org/#iteration-continue>`__.

         #. If ``phase`` is "``bubbling``" and ``listener``\ ’s
            `capture <#event-listener-capture>`__ is true, then
            `continue <https://infra.spec.whatwg.org/#iteration-continue>`__.

         #. If ``listener``\ ’s `once <#event-listener-once>`__ is true,
            then `remove <https://infra.spec.whatwg.org/#list-remove>`__
            ``listener`` from ``event``\ ’s
            ```currentTarget`` <#dom-event-currenttarget>`__ attribute
            value’s `event listener
            list <#eventtarget-event-listener-list>`__.

         #. Let ``global`` be ``listener``
            `callback <#event-listener-callback>`__\ ’s `associated
            realm <https://webidl.spec.whatwg.org/#dfn-associated-realm>`__\ ’s
            `global
            object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-realm-global>`__.

         #. Let ``currentEvent`` be undefined.

         #. If ``global`` is a
            ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
            object, then:

            #. Set ``currentEvent`` to ``global``\ ’s `current
               event <#window-current-event>`__.

            #. If ``invocationTargetInShadowTree`` is false, then set
               ``global``\ ’s `current event <#window-current-event>`__
               to ``event``.

         #. If ``listener``\ ’s `passive <#event-listener-passive>`__ is
            true, then set ``event``\ ’s `in passive listener
            flag <#in-passive-listener-flag>`__.

         #. If ``global`` is a
            ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
            object, then `record timing info for event
            listener <https://w3c.github.io/long-animation-frames/#record-timing-info-for-event-listener>`__
            given ``event`` and ``listener``.

         #. `Call a user object’s
            operation <https://webidl.spec.whatwg.org/#call-a-user-objects-operation>`__
            with ``listener``\ ’s
            `callback <#event-listener-callback>`__, "``handleEvent``",
            « ``event`` », and ``event``\ ’s
            ```currentTarget`` <#dom-event-currenttarget>`__ attribute
            value. If this throws an exception, then:

            #. `Report the
               exception <https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception>`__.

            #. Set ``legacyOutputDidListenersThrowFlag`` if given.

               The ``legacyOutputDidListenersThrowFlag`` is only used by
               Indexed Database API. `[INDEXEDDB] <#biblio-indexeddb>`__

         #. Unset ``event``\ ’s `in passive listener
            flag <#in-passive-listener-flag>`__.

         #. If ``global`` is a
            ```Window`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#window>`__
            object, then set ``global``\ ’s `current
            event <#window-current-event>`__ to ``currentEvent``.

         #. If ``event``\ ’s `stop immediate propagation
            flag <#stop-immediate-propagation-flag>`__ is set, then
            return ``found``.

      #. Return ``found``.


/2.10. Firing events
====================

   .. .. rubric:: 2.10. Firing events ` <#firing-events>`__
      :name: firing-events
      :class: heading settled

   .. container:: algorithm

      To fire an event named ``e`` at ``target``, optionally using an
      ``eventConstructor``, with a description of how IDL attributes are
      to be initialized, and a ``legacy target override flag``, run
      these steps:

      #. If ``eventConstructor`` is not given, then let
         ``eventConstructor`` be ```Event`` <#event>`__.

      #. Let ``event`` be the result of `creating an
         event <#concept-event-create>`__ given ``eventConstructor``, in
         the `relevant
         realm <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-realm>`__
         of ``target``.

      #. Initialize ``event``\ ’s ```type`` <#dom-event-type>`__
         attribute to ``e``.

      #. Initialize any other IDL attributes of ``event`` as described
         in the invocation of this algorithm.

         This also allows for the
         ```isTrusted`` <#dom-event-istrusted>`__ attribute to be set to
         false.

      #. Return the result of `dispatching <#concept-event-dispatch>`__
         ``event`` at ``target``, with ``legacy target override flag``
         set if set.

   Fire in the context of DOM is short for
   `creating <#concept-event-create>`__, initializing, and
   `dispatching <#concept-event-dispatch>`__ an
   `event <#concept-event>`__. `Fire an event <#concept-event-fire>`__
   makes that process easier to write down.

   .. container:: example
      :name: firing-events-example

      ` <#firing-events-example>`__
      If the `event <#concept-event>`__ needs its
      ```bubbles`` <#dom-event-bubbles>`__ or
      ```cancelable`` <#dom-event-cancelable>`__ attribute initialized,
      one could write "`fire an event <#concept-event-fire>`__ named
      ``submit`` at ``target`` with its
      ```cancelable`` <#dom-event-cancelable>`__ attribute initialized
      to true".

      Or, when a custom constructor is needed, "`fire an
      event <#concept-event-fire>`__ named ``click`` at ``target`` using
      ```MouseEvent`` <https://w3c.github.io/uievents/#mouseevent>`__
      with its
      ```detail`` <https://w3c.github.io/uievents/#dom-uievent-detail>`__
      attribute initialized to 1".

      Occasionally the return value is important:

      #. Let ``doAction`` be the result of `firing an
         event <#concept-event-fire>`__ named ``like`` at ``target``.

      #. If ``doAction`` is true, then …


/2.11. Action versus
====================

   .. .. rubric:: 2.11. Action versus
      occurrence ` <#action-versus-occurrence>`__
      :name: action-versus-occurrence
      :class: heading settled

   An `event <#concept-event>`__ signifies an occurrence, not an action.
   Phrased differently, it represents a notification from an algorithm
   and can be used to influence the future course of that algorithm
   (e.g., through invoking
   ```preventDefault()`` <#dom-event-preventdefault>`__).
   `Events <#concept-event>`__ must not be used as actions or initiators
   that cause some algorithm to start running. That is not what they are
   for.

   This is called out here specifically because previous iterations of
   the DOM had a concept of "default actions" associated with
   `events <#concept-event>`__ that gave folks all the wrong ideas.
   `Events <#concept-event>`__ do not represent or cause actions, they
   can only be used to influence an ongoing one.


/3. Aborting ongoing
====================

   .. .. rubric:: 3. Aborting ongoing
      activities ` <#aborting-ongoing-activities>`__
      :name: aborting-ongoing-activities
      :class: heading settled

   Though promises do not have a built-in aborting mechanism, many APIs
   using them require abort semantics.
   ```AbortController`` <#abortcontroller>`__ is meant to support these
   requirements by providing an
   ```abort()`` <#dom-abortcontroller-abort>`__ method that toggles the
   state of a corresponding ```AbortSignal`` <#abortsignal>`__ object.
   The API which wishes to support aborting can accept an
   ```AbortSignal`` <#abortsignal>`__ object, and use its state to
   determine how to proceed.

   APIs that rely upon ```AbortController`` <#abortcontroller>`__ are
   encouraged to respond to ```abort()`` <#dom-abortcontroller-abort>`__
   by rejecting any unsettled promise with the
   ```AbortSignal`` <#abortsignal>`__'s `abort
   reason <#abortsignal-abort-reason>`__.

   .. container:: example
      :name: aborting-ongoing-activities-example

      ` <#aborting-ongoing-activities-example>`__
      A hypothetical ``doAmazingness({ ... })`` method could accept an
      ```AbortSignal`` <#abortsignal>`__ object to support aborting as
      follows:

      .. code:: lang-javascript

         const controller = new AbortController();
         const signal = controller.signal;

         startSpinner();

         doAmazingness({ ..., signal })
           .then(result => ...)
           .catch(err => {
             if (err.name == 'AbortError') return;
             showUserErrorMessage();
           })
           .then(() => stopSpinner());

         // …

         controller.abort();

      ``doAmazingness`` could be implemented as follows:

      .. code:: lang-javascript

         function doAmazingness({signal}) {
           return new Promise((resolve, reject) => {
             signal.throwIfAborted();

             // Begin doing amazingness, and call resolve(result) when done.
             // But also, watch for signals:
             signal.addEventListener('abort', () => {
               // Stop doing amazingness, and:
               reject(signal.reason);
             });
           });
         }

   APIs that do not return promises can either react in an equivalent
   manner or opt to not surface the ```AbortSignal`` <#abortsignal>`__'s
   `abort reason <#abortsignal-abort-reason>`__ at all.
   ```addEventListener()`` <#dom-eventtarget-addeventlistener>`__ is an
   example of an API where the latter made sense.

   APIs that require more granular control could extend both
   ```AbortController`` <#abortcontroller>`__ and
   ```AbortSignal`` <#abortsignal>`__ objects according to their needs.


/3.1. Interface AbortController
===============================

   .. .. rubric:: 3.1. Interface
      ```AbortController`` <#abortcontroller>`__ ` <#interface-abortcontroller>`__
      :name: interface-abortcontroller
      :class: heading settled

   .. code:: idl

      [Exposed=*]
      interface AbortController {
        constructor();

        [SameObject] readonly attribute AbortSignal signal;

        undefined abort(optional any reason);
      };

   ``controller`` ``= new`` ```AbortController`` <#dom-abortcontroller-abortcontroller>`__ ``()``
      Returns a new ``controller`` whose
      ```signal`` <#dom-abortcontroller-signal>`__ is set to a newly
      created ```AbortSignal`` <#abortsignal>`__ object.
   ``controller`` ``.`` ```signal`` <#dom-abortcontroller-signal>`__
      Returns the ```AbortSignal`` <#abortsignal>`__ object associated
      with this object.
   ``controller`` ``.`` ```abort`` <#dom-abortcontroller-abort>`__ ``(`` ``reason`` ``)``
      Invoking this method will store ``reason`` in this object’s
      ```AbortSignal`` <#abortsignal>`__'s `abort
      reason <#abortsignal-abort-reason>`__, and signal to any observers
      that the associated activity is to be aborted. If ``reason`` is
      undefined, then an
      "```AbortError`` <https://webidl.spec.whatwg.org/#aborterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be stored.

   An ```AbortController`` <#abortcontroller>`__ object has an
   associated signal (an ```AbortSignal`` <#abortsignal>`__ object).

   .. container:: algorithm

      The ``new AbortController()`` constructor steps are:

      #. Let ``signal`` be a new ```AbortSignal`` <#abortsignal>`__
         object.

      #. Set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `signal <#abortcontroller-signal>`__ to ``signal``.

   The ``signal`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `signal <#abortcontroller-signal>`__.

   .. container:: algorithm

      The ``abort(`` ``reason`` ``)`` method steps are to `signal
      abort <#abortcontroller-signal-abort>`__ on
      `this <https://webidl.spec.whatwg.org/#this>`__ with ``reason`` if
      it is given.

   .. container:: algorithm

      To signal abort on an ```AbortController`` <#abortcontroller>`__
      ``controller`` with an optional ``reason``, `signal
      abort <#abortsignal-signal-abort>`__ on ``controller``\ ’s
      `signal <#abortcontroller-signal>`__ with ``reason`` if it is
      given.


/3.2. Interface AbortSignal
===========================

   .. .. rubric:: 3.2. Interface
      ```AbortSignal`` <#abortsignal>`__ ` <#interface-AbortSignal>`__
      :name: interface-AbortSignal
      :class: heading settled

   .. code:: idl

      [Exposed=*]
      interface AbortSignal : EventTarget {
        [NewObject] static AbortSignal abort(optional any reason);
        [Exposed=(Window,Worker), NewObject] static AbortSignal timeout([EnforceRange] unsigned long long milliseconds);
        [NewObject] static AbortSignal _any(sequence<AbortSignal> signals);

        readonly attribute boolean aborted;
        readonly attribute any reason;
        undefined throwIfAborted();

        attribute EventHandler onabort;
      };

   ``AbortSignal .`` ```abort`` <#dom-abortsignal-abort>`__ ``(`` ``reason`` ``)``
      Returns an ```AbortSignal`` <#abortsignal>`__ instance whose
      `abort reason <#abortsignal-abort-reason>`__ is set to ``reason``
      if not undefined; otherwise to an
      "```AbortError`` <https://webidl.spec.whatwg.org/#aborterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   ``AbortSignal .`` ```any`` <#dom-abortsignal-any>`__ ``(`` ``signals`` ``)``
      Returns an ```AbortSignal`` <#abortsignal>`__ instance which will
      be aborted once any of ``signals`` is aborted. Its `abort
      reason <#abortsignal-abort-reason>`__ will be set to whichever one
      of ``signals`` caused it to be aborted.
   ``AbortSignal .`` ```timeout`` <#dom-abortsignal-timeout>`__ ``(`` ``milliseconds`` ``)``
      Returns an ```AbortSignal`` <#abortsignal>`__ instance which will
      be aborted in ``milliseconds`` milliseconds. Its `abort
      reason <#abortsignal-abort-reason>`__ will be set to a
      "```TimeoutError`` <https://webidl.spec.whatwg.org/#timeouterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   ``signal`` ``.`` ```aborted`` <#dom-abortsignal-aborted>`__
      Returns true if ``signal``\ ’s
      ```AbortController`` <#abortcontroller>`__ has signaled to abort;
      otherwise false.
   ``signal`` ``.`` ```reason`` <#dom-abortsignal-reason>`__
      Returns ``signal``\ ’s `abort
      reason <#abortsignal-abort-reason>`__.
   ``signal`` ``.`` ```throwIfAborted`` <#dom-abortsignal-throwifaborted>`__ ``()``
      Throws ``signal``\ ’s `abort
      reason <#abortsignal-abort-reason>`__, if ``signal``\ ’s
      ```AbortController`` <#abortcontroller>`__ has signaled to abort;
      otherwise, does nothing.

   An ```AbortSignal`` <#abortsignal>`__ object has an associated abort
   reason (a JavaScript value), which is initially undefined.

   An ```AbortSignal`` <#abortsignal>`__ object has associated abort
   algorithms, (a `set <https://infra.spec.whatwg.org/#ordered-set>`__
   of algorithms which are to be executed when it is
   `aborted <#abortsignal-aborted>`__), which is initially empty.

   The `abort algorithms <#abortsignal-abort-algorithms>`__ enable APIs
   with complex requirements to react in a reasonable way to
   ```abort()`` <#dom-abortcontroller-abort>`__. For example, a given
   API’s `abort reason <#abortsignal-abort-reason>`__ might need to be
   propagated to a cross-thread environment, such as a service worker.

   An ```AbortSignal`` <#abortsignal>`__ object has a dependent (a
   boolean), which is initially false.

   An ```AbortSignal`` <#abortsignal>`__ object has associated source
   signals (a weak `set <https://infra.spec.whatwg.org/#ordered-set>`__
   of ```AbortSignal`` <#abortsignal>`__ objects that the object is
   dependent on for its `aborted <#abortsignal-aborted>`__ state), which
   is initially empty.

   An ```AbortSignal`` <#abortsignal>`__ object has associated dependent
   signals (a weak `set <https://infra.spec.whatwg.org/#ordered-set>`__
   of ```AbortSignal`` <#abortsignal>`__ objects that are dependent on
   the object for their `aborted <#abortsignal-aborted>`__ state), which
   is initially empty.

   --------------

   .. container:: algorithm

      The static ``abort(`` ``reason`` ``)`` method steps are:

      #. Let ``signal`` be a new ```AbortSignal`` <#abortsignal>`__
         object.

      #. Set ``signal``\ ’s `abort reason <#abortsignal-abort-reason>`__
         to ``reason`` if it is given; otherwise to a new
         "```AbortError`` <https://webidl.spec.whatwg.org/#aborterror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. Return ``signal``.

   .. container:: algorithm

      The static ``timeout(`` ``milliseconds`` ``)`` method steps are:

      #. Let ``signal`` be a new ```AbortSignal`` <#abortsignal>`__
         object.

      #. Let ``global`` be ``signal``\ ’s `relevant global
         object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global>`__.

      #. `Run steps after a
         timeout <https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#run-steps-after-a-timeout>`__
         given ``global``, "``AbortSignal-timeout``", ``milliseconds``,
         and the following step:

         #. `Queue a global
            task <https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-global-task>`__
            on the `timer task
            source <https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timer-task-source>`__
            given ``global`` to `signal
            abort <#abortsignal-signal-abort>`__ given ``signal`` and a
            new
            "```TimeoutError`` <https://webidl.spec.whatwg.org/#timeouterror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         For the duration of this timeout, if ``signal`` has any event
         listeners registered for its
         ```abort`` <#eventdef-abortsignal-abort>`__ event, there must
         be a strong reference from ``global`` to ``signal``.

      #. Return ``signal``.

   .. container:: algorithm

      The static ``any(`` ``signals`` ``)`` method steps are to return
      the result of `creating a dependent abort
      signal <#create-a-dependent-abort-signal>`__ from ``signals``
      using ```AbortSignal`` <#abortsignal>`__ and the `current
      realm <https://tc39.es/ecma262/#current-realm>`__.

   The ``aborted`` getter steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__ is
   `aborted <#abortsignal-aborted>`__; otherwise false.

   The ``reason`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `abort
   reason <#abortsignal-abort-reason>`__.

   The ``throwIfAborted()`` method steps are to throw
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `abort
   reason <#abortsignal-abort-reason>`__, if
   `this <https://webidl.spec.whatwg.org/#this>`__ is
   `aborted <#abortsignal-aborted>`__.

   .. container:: example
      :name: example-throwifaborted

      ` <#example-throwifaborted>`__
      This method is primarily useful for when functions accepting
      ```AbortSignal`` <#abortsignal>`__\ s want to throw (or return a
      rejected promise) at specific checkpoints, instead of passing
      along the ```AbortSignal`` <#abortsignal>`__ to other methods. For
      example, the following function allows aborting in between each
      attempt to poll for a condition. This gives opportunities to abort
      the polling process, even though the actual asynchronous operation
      (i.e., ``await func()``) does not accept an
      ```AbortSignal`` <#abortsignal>`__.

      .. code:: lang-javascript

         async function waitForCondition(func, targetValue, { signal } = {}) {
           while (true) {
             signal?.throwIfAborted();

             const result = await func();
             if (result === targetValue) {
               return;
             }
           }
         }

   The ``onabort`` attribute is an `event handler IDL
   attribute <https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes>`__
   for the ``onabort`` `event
   handler <https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers>`__,
   whose `event handler event
   type <https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type>`__
   is ``abort``.

   Changes to an ```AbortSignal`` <#abortsignal>`__ object represent the
   wishes of the corresponding
   ```AbortController`` <#abortcontroller>`__ object, but an API
   observing the ```AbortSignal`` <#abortsignal>`__ object can choose to
   ignore them. For instance, if the operation has already completed.

   --------------

   An ```AbortSignal`` <#abortsignal>`__ object is aborted when its
   `abort reason <#abortsignal-abort-reason>`__ is not undefined.

   .. container:: algorithm

      To add an algorithm ``algorithm`` to an
      ```AbortSignal`` <#abortsignal>`__ object ``signal``:

      #. If ``signal`` is `aborted <#abortsignal-aborted>`__, then
         return.

      #. `Append <https://infra.spec.whatwg.org/#set-append>`__
         ``algorithm`` to ``signal``\ ’s `abort
         algorithms <#abortsignal-abort-algorithms>`__.

   .. container:: algorithm

      To remove an algorithm ``algorithm`` from an
      ```AbortSignal`` <#abortsignal>`__ ``signal``,
      `remove <https://infra.spec.whatwg.org/#list-remove>`__
      ``algorithm`` from ``signal``\ ’s `abort
      algorithms <#abortsignal-abort-algorithms>`__.

   .. container:: algorithm

      To signal abort, given an ```AbortSignal`` <#abortsignal>`__
      object ``signal`` and an optional ``reason``:

      #. If ``signal`` is `aborted <#abortsignal-aborted>`__, then
         return.

      #. Set ``signal``\ ’s `abort reason <#abortsignal-abort-reason>`__
         to ``reason`` if it is given; otherwise to a new
         "```AbortError`` <https://webidl.spec.whatwg.org/#aborterror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``algorithm`` of ``signal``\ ’s `abort
         algorithms <#abortsignal-abort-algorithms>`__: run
         ``algorithm``.

      #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__
         ``signal``\ ’s `abort
         algorithms <#abortsignal-abort-algorithms>`__.

      #. `Fire an event <#concept-event-fire>`__ named
         ```abort`` <#eventdef-abortsignal-abort>`__ at ``signal``.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``dependentSignal`` of ``signal``\ ’s `dependent
         signals <#abortsignal-dependent-signals>`__, `signal
         abort <#abortsignal-signal-abort>`__ on ``dependentSignal``
         with ``signal``\ ’s `abort
         reason <#abortsignal-abort-reason>`__.

   .. container:: algorithm

      To create a dependent abort signal from a list of
      ```AbortSignal`` <#abortsignal>`__ objects ``signals``, using
      ``signalInterface``, which must be either
      ```AbortSignal`` <#abortsignal>`__ or an interface that inherits
      from it, and a ``realm``:

      #. Let ``resultSignal`` be a
         `new <https://webidl.spec.whatwg.org/#new>`__ object
         implementing ``signalInterface`` using ``realm``.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``signal`` of ``signals``: if ``signal`` is
         `aborted <#abortsignal-aborted>`__, then set
         ``resultSignal``\ ’s `abort
         reason <#abortsignal-abort-reason>`__ to ``signal``\ ’s `abort
         reason <#abortsignal-abort-reason>`__ and return
         ``resultSignal``.

      #. Set ``resultSignal``\ ’s `dependent <#abortsignal-dependent>`__
         to true.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``signal`` of ``signals``:

         #. If ``signal``\ ’s `dependent <#abortsignal-dependent>`__ is
            false, then:

            #. `Append <https://infra.spec.whatwg.org/#set-append>`__
               ``signal`` to ``resultSignal``\ ’s `source
               signals <#abortsignal-source-signals>`__.

            #. `Append <https://infra.spec.whatwg.org/#set-append>`__
               ``resultSignal`` to ``signal``\ ’s `dependent
               signals <#abortsignal-dependent-signals>`__.

         #. Otherwise, `for
            each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``sourceSignal`` of ``signal``\ ’s `source
            signals <#abortsignal-source-signals>`__:

            #. Assert: ``sourceSignal`` is not
               `aborted <#abortsignal-aborted>`__ and not
               `dependent <#abortsignal-dependent>`__.

            #. `Append <https://infra.spec.whatwg.org/#set-append>`__
               ``sourceSignal`` to ``resultSignal``\ ’s `source
               signals <#abortsignal-source-signals>`__.

            #. `Append <https://infra.spec.whatwg.org/#set-append>`__
               ``resultSignal`` to ``sourceSignal``\ ’s `dependent
               signals <#abortsignal-dependent-signals>`__.

      #. Return ``resultSignal``.


/3.2.1. Garbage collection
==========================

   .. .. rubric:: 3.2.1. Garbage
      collection ` <#abort-signal-garbage-collection>`__
      :name: abort-signal-garbage-collection
      :class: heading settled

   A non-`aborted <#abortsignal-aborted>`__
   `dependent <#abortsignal-dependent>`__
   ```AbortSignal`` <#abortsignal>`__ object must not be garbage
   collected while its `source signals <#abortsignal-source-signals>`__
   is non-empty and it has registered event listeners for its
   ```abort`` <#eventdef-abortsignal-abort>`__ event or its `abort
   algorithms <#abortsignal-abort-algorithms>`__ is non-empty.


/3.3. Using ``AbortController`` and AbortSignal
===============================================

   .. .. rubric:: 3.3. Using ```AbortController`` <#abortcontroller>`__ and
      ```AbortSignal`` <#abortsignal>`__ objects in
      APIs ` <#abortcontroller-api-integration>`__
      :name: abortcontroller-api-integration
      :class: heading settled

   Any web platform API using promises to represent operations that can
   be aborted must adhere to the following:

   -  Accept ```AbortSignal`` <#abortsignal>`__ objects through a
      ``signal`` dictionary member.
   -  Convey that the operation got aborted by rejecting the promise
      with ```AbortSignal`` <#abortsignal>`__ object’s `abort
      reason <#abortsignal-abort-reason>`__.
   -  Reject immediately if the ```AbortSignal`` <#abortsignal>`__ is
      already `aborted <#abortsignal-aborted>`__, otherwise:
   -  Use the `abort algorithms <#abortsignal-abort-algorithms>`__
      mechanism to observe changes to the
      ```AbortSignal`` <#abortsignal>`__ object and do so in a manner
      that does not lead to clashes with other observers.

   .. container:: example
      :name: aborting-ongoing-activities-spec-example

      ` <#aborting-ongoing-activities-spec-example>`__
      The method steps for a promise-returning method
      ``doAmazingness(`` ``options`` ``)`` could be as follows:

      #. Let ``p`` be `a new
         promise <https://webidl.spec.whatwg.org/#a-new-promise>`__.

      #. If ``options``\ ["``signal``"] member is present, then:

         #. Let ``signal`` be ``options``\ ["``signal``"].

         #. If ``signal`` is `aborted <#abortsignal-aborted>`__, then
            `reject <https://webidl.spec.whatwg.org/#reject>`__ ``p``
            with ``signal``\ ’s `abort
            reason <#abortsignal-abort-reason>`__ and return ``p``.

         #. `Add the following abort steps <#abortsignal-add>`__ to
            ``signal``:

            #. Stop doing amazing things.

            #. `Reject <https://webidl.spec.whatwg.org/#reject>`__ ``p``
               with ``signal``\ ’s `abort
               reason <#abortsignal-abort-reason>`__.

      #. Run these steps `in
         parallel <https://html.spec.whatwg.org/multipage/infrastructure.html#in-parallel>`__:

         #. Let ``amazingResult`` be the result of doing some amazing
            things.

         #. `Resolve <https://webidl.spec.whatwg.org/#resolve>`__ ``p``
            with ``amazingResult``.

      #. Return ``p``.

   APIs not using promises should still adhere to the above as much as
   possible.


/4. Nodes
=========

   .. .. rubric:: 4. Nodes ` <#nodes>`__
      :name: nodes
      :class: heading settled


/4.1. Introduction to "The DOM"
===============================

   .. .. rubric:: 4.1. Introduction to "The
      DOM" ` <#introduction-to-the-dom>`__
      :name: introduction-to-the-dom
      :class: heading settled

   In its original sense, "The DOM" is an API for accessing and
   manipulating documents (in particular, HTML and XML documents). In
   this specification, the term "document" is used for any markup-based
   resource, ranging from short static documents to long essays or
   reports with rich multimedia, as well as to fully-fledged interactive
   applications.

   Each such document is represented as a `node
   tree <#concept-node-tree>`__. Some of the `nodes <#concept-node>`__
   in a `tree <#concept-tree>`__ can have
   `children <#concept-tree-child>`__, while others are always leaves.

   To illustrate, consider this HTML document:

   .. code:: lang-markup

      <!DOCTYPE html>
      <html class=e>
       <head><title>Aliens?</title></head>
       <body>Why yes.</body>
      </html>

   It is represented as follows:

   -  `Document <#concept-document>`__

      -  `Doctype <#concept-doctype>`__: ``html``
      -  ```Element`` <#element>`__: ``html`` ``class``\ ="``e``"

         -  ```Element`` <#element>`__: ``head``

            -  ```Element`` <#element>`__: ``title``

               -  ```Text`` <#text>`__: Aliens?

         -  ```Text`` <#text>`__: ⏎␣
         -  ```Element`` <#element>`__: ``body``

            -  ```Text`` <#text>`__: Why yes.⏎

   Note that, due to the magic that is `HTML
   parsing <https://html.spec.whatwg.org/multipage/parsing.html#html-parser>`__,
   not all `ASCII
   whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__ were
   turned into ```Text`` <#text>`__ `nodes <#concept-node>`__, but the
   general concept is clear. Markup goes in, a `tree <#concept-tree>`__
   of `nodes <#concept-node>`__ comes out.

   The most excellent `Live DOM
   Viewer <https://software.hixie.ch/utilities/js/live-dom-viewer/>`__
   can be used to explore this matter in more detail.


/4.2. Node tree
===============

   .. .. rubric:: 4.2. Node tree ` <#node-trees>`__
      :name: node-trees
      :class: heading settled

   Nodes are objects that
   `implement <https://webidl.spec.whatwg.org/#implements>`__
   ```Node`` <#node>`__. `Nodes <#concept-node>`__
   `participate <#concept-tree-participate>`__ in a
   `tree <#concept-tree>`__, which is known as the node tree.

   .. note::

      In practice you deal with more specific objects.

      Objects that
      `implement <https://webidl.spec.whatwg.org/#implements>`__
      ```Node`` <#node>`__ also implement an inherited interface:
      ```Document`` <#document>`__,
      ```DocumentType`` <#documenttype>`__,
      ```DocumentFragment`` <#documentfragment>`__,
      ```Element`` <#element>`__,
      ```CharacterData`` <#characterdata>`__, or ```Attr`` <#attr>`__.

      Objects that implement
      ```DocumentFragment`` <#documentfragment>`__ sometimes implement
      ```ShadowRoot`` <#shadowroot>`__.

      Objects that implement ```Element`` <#element>`__ also typically
      implement an inherited interface, such as
      ```HTMLAnchorElement`` <https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement>`__.

      Objects that implement ```CharacterData`` <#characterdata>`__ also
      implement an inherited interface: ```Text`` <#text>`__,
      ```ProcessingInstruction`` <#processinginstruction>`__, or
      ```Comment`` <#comment>`__.

      Objects that implement ```Text`` <#text>`__ sometimes implement
      ```CDATASection`` <#cdatasection>`__.

   For brevity, this specification refers to an object that
   `implements <https://webidl.spec.whatwg.org/#implements>`__
   ```Node`` <#node>`__ and an inherited interface ``NodeInterface``, as
   a ``NodeInterface`` `node <#concept-node>`__.

   A `node tree <#concept-node-tree>`__ is constrained as follows,
   expressed as a relationship between a `node <#concept-node>`__ and
   its potential `children <#concept-tree-child>`__:

   ```Document`` <#document>`__
      In `tree order <#concept-tree-order>`__:

      #. Zero or more
         ```ProcessingInstruction`` <#processinginstruction>`__ or
         ```Comment`` <#comment>`__ `nodes <#concept-node>`__.

      #. Optionally one ```DocumentType`` <#documenttype>`__
         `node <#concept-node>`__.

      #. Zero or more
         ```ProcessingInstruction`` <#processinginstruction>`__ or
         ```Comment`` <#comment>`__ `nodes <#concept-node>`__.

      #. Optionally one ```Element`` <#element>`__
         `node <#concept-node>`__.

      #. Zero or more
         ```ProcessingInstruction`` <#processinginstruction>`__ or
         ```Comment`` <#comment>`__ `nodes <#concept-node>`__.

   ```DocumentFragment`` <#documentfragment>`__
   ```Element`` <#element>`__
      Zero or more ```Element`` <#element>`__ or
      ```CharacterData`` <#characterdata>`__ `nodes <#concept-node>`__.

   ```DocumentType`` <#documenttype>`__
   ```CharacterData`` <#characterdata>`__
   ```Attr`` <#attr>`__
      No `children <#concept-tree-child>`__.

   ```Attr`` <#attr>`__ `nodes <#concept-node>`__
   `participate <#concept-tree-participate>`__ in a
   `tree <#concept-tree>`__ for historical reasons; they never have a
   (non-null) `parent <#concept-tree-parent>`__ or any
   `children <#concept-tree-child>`__ and are therefore alone in a
   `tree <#concept-tree>`__.

   To determine the length of a `node <#concept-node>`__ ``node``, run
   these steps:

   #. If ``node`` is a ```DocumentType`` <#documenttype>`__ or
      ```Attr`` <#attr>`__ `node <#concept-node>`__, then return 0.

   #. If ``node`` is a ```CharacterData`` <#characterdata>`__
      `node <#concept-node>`__, then return ``node``\ ’s
      `data <#concept-cd-data>`__\ ’s
      `length <https://infra.spec.whatwg.org/#string-length>`__.

   #. Return the number of ``node``\ ’s
      `children <#concept-tree-child>`__.

   A `node <#concept-node>`__ is considered empty if its
   `length <#concept-node-length>`__ is 0.


/4.2.1. Document tree
=====================

   .. .. rubric:: 4.2.1. Document tree ` <#document-trees>`__
      :name: document-trees
      :class: heading settled

   A document tree is a `node tree <#concept-node-tree>`__ whose
   `root <#concept-tree-root>`__ is a `document <#concept-document>`__.

   The document element of a `document <#concept-document>`__ is the
   `element <#concept-element>`__ whose
   `parent <#concept-tree-parent>`__ is that
   `document <#concept-document>`__, if it exists; otherwise null.

   Per the `node tree <#concept-node-tree>`__ constraints, there can be
   only one such `element <#concept-element>`__.

   A `node <#concept-node>`__ is in a document tree if its
   `root <#concept-tree-root>`__ is a `document <#concept-document>`__.

   A `node <#concept-node>`__ is in a document if it is `in a document
   tree <#in-a-document-tree>`__. The term `in a
   document <#in-a-document>`__ is no longer supposed to be used. It
   indicates that the standard using it has not been updated to account
   for `shadow trees <#concept-shadow-tree>`__.


/4.2.2. Shadow tree
===================

   .. .. rubric:: 4.2.2. Shadow tree ` <#shadow-trees>`__
      :name: shadow-trees
      :class: heading settled

   A shadow tree is a `node tree <#concept-node-tree>`__ whose
   `root <#concept-tree-root>`__ is a `shadow
   root <#concept-shadow-root>`__.

   A `shadow root <#concept-shadow-root>`__ is always attached to
   another `node tree <#concept-node-tree>`__ through its
   `host <#concept-documentfragment-host>`__. A `shadow
   tree <#concept-shadow-tree>`__ is therefore never alone. The `node
   tree <#concept-node-tree>`__ of a `shadow
   root <#concept-shadow-root>`__\ ’s
   `host <#concept-documentfragment-host>`__ is sometimes referred to as
   the light tree.

   A `shadow tree <#concept-shadow-tree>`__\ ’s corresponding `light
   tree <#concept-light-tree>`__ can be a `shadow
   tree <#concept-shadow-tree>`__ itself.

   A `node <#concept-node>`__ is connected if its `shadow-including
   root <#concept-shadow-including-root>`__ is a
   `document <#concept-document>`__.


/4.2.2.1. Slots
===============

   .. .. rubric:: 4.2.2.1. Slots ` <#shadow-tree-slots>`__
      :name: shadow-tree-slots
      :class: heading settled

   A `shadow tree <#concept-shadow-tree>`__ contains zero or more
   `elements <#concept-element>`__ that are slots.

   A `slot <#concept-slot>`__ can only be created through HTML’s
   ```slot`` <https://html.spec.whatwg.org/multipage/scripting.html#the-slot-element>`__
   element.

   A `slot <#concept-slot>`__ has an associated name (a string). Unless
   stated otherwise it is the empty string.

   Use these `attribute change
   steps <#concept-element-attributes-change-ext>`__ to update a
   `slot <#concept-slot>`__\ ’s `name <#slot-name>`__:

   #. If ``element`` is a `slot <#concept-slot>`__, ``localName`` is
      ``name``, and ``namespace`` is null, then:

      #. If ``value`` is ``oldValue``, then return.

      #. If ``value`` is null and ``oldValue`` is the empty string, then
         return.

      #. If ``value`` is the empty string and ``oldValue`` is null, then
         return.

      #. If ``value`` is null or the empty string, then set
         ``element``\ ’s `name <#slot-name>`__ to the empty string.

      #. Otherwise, set ``element``\ ’s `name <#slot-name>`__ to
         ``value``.

      #. Run `assign slottables for a
         tree <#assign-slotables-for-a-tree>`__ with ``element``\ ’s
         `root <#concept-tree-root>`__.

   The first `slot <#concept-slot>`__ in a `shadow
   tree <#concept-shadow-tree>`__, in `tree
   order <#concept-tree-order>`__, whose `name <#slot-name>`__ is the
   empty string, is sometimes known as the "default slot".

   A `slot <#concept-slot>`__ has an associated assigned nodes (a list
   of `slottables <#concept-slotable>`__). Unless stated otherwise it is
   empty.


/4.2.2.2. Slottables
====================

   .. .. rubric:: 4.2.2.2. Slottables ` <#light-tree-slotables>`__
      :name: light-tree-slotables
      :class: heading settled

   ```Element`` <#element>`__ and ```Text`` <#text>`__
   `nodes <#concept-node>`__ are slottables.

   A `slot <#concept-slot>`__ can be a
   `slottable <#concept-slotable>`__.

   A `slottable <#concept-slotable>`__ has an associated name (a
   string). Unless stated otherwise it is the empty string.

   Use these `attribute change
   steps <#concept-element-attributes-change-ext>`__ to update a
   `slottable <#concept-slotable>`__\ ’s `name <#slotable-name>`__:

   #. If ``localName`` is ``slot`` and ``namespace`` is null, then:

      #. If ``value`` is ``oldValue``, then return.

      #. If ``value`` is null and ``oldValue`` is the empty string, then
         return.

      #. If ``value`` is the empty string and ``oldValue`` is null, then
         return.

      #. If ``value`` is null or the empty string, then set
         ``element``\ ’s `name <#slotable-name>`__ to the empty string.

      #. Otherwise, set ``element``\ ’s `name <#slotable-name>`__ to
         ``value``.

      #. If ``element`` is `assigned <#slotable-assigned>`__, then run
         `assign slottables <#assign-slotables>`__ for ``element``\ ’s
         `assigned slot <#slotable-assigned-slot>`__.

      #. Run `assign a slot <#assign-a-slot>`__ for ``element``.

   A `slottable <#concept-slotable>`__ has an associated assigned slot
   (null or a `slot <#concept-slot>`__). Unless stated otherwise it is
   null. A `slottable <#concept-slotable>`__ is assigned if its
   `assigned slot <#slotable-assigned-slot>`__ is non-null.

   A `slottable <#concept-slotable>`__ has an associated manual slot
   assignment (null or a `slot <#concept-slot>`__). Unless stated
   otherwise, it is null.

   A `slottable <#concept-slotable>`__\ ’s `manual slot
   assignment <#slottable-manual-slot-assignment>`__ can be implemented
   using a weak reference to the `slot <#concept-slot>`__, because this
   variable is not directly accessible from script.


/4.2.2.3. Finding slots and slottables
======================================

   .. .. rubric:: 4.2.2.3. Finding slots and
      slottables ` <#finding-slots-and-slotables>`__
      :name: finding-slots-and-slotables
      :class: heading settled

   To find a slot for a given `slottable <#concept-slotable>`__
   ``slottable`` and an optional *open flag* (unset unless stated
   otherwise), run these steps:

   #. If ``slottable``\ ’s `parent <#concept-tree-parent>`__ is null,
      then return null.

   #. Let ``shadow`` be ``slottable``\ ’s
      `parent <#concept-tree-parent>`__\ ’s `shadow
      root <#concept-element-shadow-root>`__.

   #. If ``shadow`` is null, then return null.

   #. If the *open flag* is set and ``shadow``\ ’s
      `mode <#shadowroot-mode>`__ is *not* "``open``", then return null.

   #. If ``shadow``\ ’s `slot
      assignment <#shadowroot-slot-assignment>`__ is "``manual``", then
      return the `slot <#concept-slot>`__ in ``shadow``\ ’s
      `descendants <#concept-tree-descendant>`__ whose `manually
      assigned
      nodes <https://html.spec.whatwg.org/multipage/scripting.html#manually-assigned-nodes>`__
      `contains <https://infra.spec.whatwg.org/#list-contain>`__
      ``slottable``, if any; otherwise null.

   #. Return the first `slot <#concept-slot>`__ in `tree
      order <#concept-tree-order>`__ in ``shadow``\ ’s
      `descendants <#concept-tree-descendant>`__ whose
      `name <#slot-name>`__ is ``slottable``\ ’s
      `name <#slotable-name>`__, if any; otherwise null.

   To find slottables for a given `slot <#concept-slot>`__ ``slot``, run
   these steps:

   #. Let ``result`` be an empty list.

   #. Let ``root`` be ``slot``\ ’s `root <#concept-tree-root>`__.

   #. If ``root`` is not a `shadow root <#concept-shadow-root>`__, then
      return ``result``.

   #. Let ``host`` be ``root``\ ’s
      `host <#concept-documentfragment-host>`__.

   #. If ``root``\ ’s `slot assignment <#shadowroot-slot-assignment>`__
      is "``manual``", then:

      #. Let ``result`` be « ».

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         `slottable <#concept-slotable>`__ ``slottable`` of ``slot``\ ’s
         `manually assigned
         nodes <https://html.spec.whatwg.org/multipage/scripting.html#manually-assigned-nodes>`__,
         if ``slottable``\ ’s `parent <#concept-tree-parent>`__ is
         ``host``,
         `append <https://infra.spec.whatwg.org/#list-append>`__
         ``slottable`` to ``result``.

   #. Otherwise, for each `slottable <#concept-slotable>`__
      `child <#concept-tree-child>`__ ``slottable`` of ``host``, in
      `tree order <#concept-tree-order>`__:

      #. Let ``foundSlot`` be the result of `finding a
         slot <#find-a-slot>`__ given ``slottable``.

      #. If ``foundSlot`` is ``slot``, then
         `append <https://infra.spec.whatwg.org/#list-append>`__
         ``slottable`` to ``result``.

   #. Return ``result``.

   To find flattened slottables for a given `slot <#concept-slot>`__
   ``slot``, run these steps:

   #. Let ``result`` be an empty list.

   #. If ``slot``\ ’s `root <#concept-tree-root>`__ is not a `shadow
      root <#concept-shadow-root>`__, then return ``result``.

   #. Let ``slottables`` be the result of `finding
      slottables <#find-slotables>`__ given ``slot``.

   #. If ``slottables`` is the empty list, then append each
      `slottable <#concept-slotable>`__ `child <#concept-tree-child>`__
      of ``slot``, in `tree order <#concept-tree-order>`__, to
      ``slottables``.

   #. For each ``node`` in ``slottables``:

      #. If ``node`` is a `slot <#concept-slot>`__ whose
         `root <#concept-tree-root>`__ is a `shadow
         root <#concept-shadow-root>`__, then:

         #. Let ``temporaryResult`` be the result of `finding flattened
            slottables <#find-flattened-slotables>`__ given ``node``.

         #. Append each `slottable <#concept-slotable>`__ in
            ``temporaryResult``, in order, to ``result``.

      #. Otherwise, append ``node`` to ``result``.

   #. Return ``result``.


/4.2.2.4. Assigning slottables and slots
========================================

   .. .. rubric:: 4.2.2.4. Assigning slottables and
      slots ` <#assigning-slotables-and-slots>`__
      :name: assigning-slotables-and-slots
      :class: heading settled

   To assign slottables for a `slot <#concept-slot>`__ ``slot``, run
   these steps:

   #. Let ``slottables`` be the result of `finding
      slottables <#find-slotables>`__ for ``slot``.

   #. If ``slottables`` and ``slot``\ ’s `assigned
      nodes <#slot-assigned-nodes>`__ are not identical, then run
      `signal a slot change <#signal-a-slot-change>`__ for ``slot``.

   #. Set ``slot``\ ’s `assigned nodes <#slot-assigned-nodes>`__ to
      ``slottables``.

   #. For each ``slottable`` in ``slottables``, set ``slottable``\ ’s
      `assigned slot <#slotable-assigned-slot>`__ to ``slot``.

   To assign slottables for a tree, given a `node <#concept-node>`__
   ``root``, run `assign slottables <#assign-slotables>`__ for each
   `slot <#concept-slot>`__ ``slot`` in ``root``\ ’s `inclusive
   descendants <#concept-tree-inclusive-descendant>`__, in `tree
   order <#concept-tree-order>`__.

   To assign a slot, given a `slottable <#concept-slotable>`__
   ``slottable``, run these steps:

   #. Let ``slot`` be the result of `finding a slot <#find-a-slot>`__
      with ``slottable``.

   #. If ``slot`` is non-null, then run `assign
      slottables <#assign-slotables>`__ for ``slot``.


/4.2.2.5. Signaling slot change
===============================

   .. .. rubric:: 4.2.2.5. Signaling slot
      change ` <#signaling-slot-change>`__
      :name: signaling-slot-change
      :class: heading settled

   Each `similar-origin window
   agent <https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent>`__
   has signal slots (a
   `set <https://infra.spec.whatwg.org/#ordered-set>`__ of
   `slots <#concept-slot>`__), which is initially empty.
   `[HTML] <#biblio-html>`__

   To signal a slot change, for a `slot <#concept-slot>`__ ``slot``, run
   these steps:

   #. `Append <https://infra.spec.whatwg.org/#set-append>`__ ``slot`` to
      ``slot``\ ’s `relevant
      agent <https://html.spec.whatwg.org/multipage/webappapis.html#relevant-agent>`__\ ’s
      `signal slots <#signal-slot-list>`__.

   #. `Queue a mutation observer
      microtask <#queue-a-mutation-observer-compound-microtask>`__.


/4.2.3. Mutation algorithms
===========================

   .. .. rubric:: 4.2.3. Mutation algorithms ` <#mutation-algorithms>`__
      :name: mutation-algorithms
      :class: heading settled

   To ensure pre-insertion validity of a ``node`` into a ``parent``
   before a ``child``, run these steps:

   #. If ``parent`` is not a ```Document`` <#document>`__,
      ```DocumentFragment`` <#documentfragment>`__, or
      ```Element`` <#element>`__ `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is a `host-including inclusive
      ancestor <#concept-tree-host-including-inclusive-ancestor>`__ of
      ``parent``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``child`` is non-null and its `parent <#concept-tree-parent>`__
      is not ``parent``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is not a ```DocumentFragment`` <#documentfragment>`__,
      ```DocumentType`` <#documenttype>`__, ```Element`` <#element>`__,
      or ```CharacterData`` <#characterdata>`__
      `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If either ``node`` is a ```Text`` <#text>`__
      `node <#concept-node>`__ and ``parent`` is a
      `document <#concept-document>`__, or ``node`` is a
      `doctype <#concept-doctype>`__ and ``parent`` is not a
      `document <#concept-document>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``parent`` is a `document <#concept-document>`__, and any of
      the statements below, switched on the interface ``node``
      `implements <https://webidl.spec.whatwg.org/#implements>`__, are
      true, then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      ```DocumentFragment`` <#documentfragment>`__
         If ``node`` has more than one `element <#concept-element>`__
         `child <#concept-tree-child>`__ or has a ```Text`` <#text>`__
         `node <#concept-node>`__ `child <#concept-tree-child>`__.

         Otherwise, if ``node`` has one `element <#concept-element>`__
         `child <#concept-tree-child>`__ and either ``parent`` has an
         `element <#concept-element>`__ `child <#concept-tree-child>`__,
         ``child`` is a `doctype <#concept-doctype>`__, or ``child`` is
         non-null and a `doctype <#concept-doctype>`__ is
         `following <#concept-tree-following>`__ ``child``.

      ```Element`` <#element>`__
         ``parent`` has an `element <#concept-element>`__
         `child <#concept-tree-child>`__, ``child`` is a
         `doctype <#concept-doctype>`__, or ``child`` is non-null and a
         `doctype <#concept-doctype>`__ is
         `following <#concept-tree-following>`__ ``child``.

      ```DocumentType`` <#documenttype>`__
         ``parent`` has a `doctype <#concept-doctype>`__
         `child <#concept-tree-child>`__, ``child`` is non-null and an
         `element <#concept-element>`__ is
         `preceding <#concept-tree-preceding>`__ ``child``, or ``child``
         is null and ``parent`` has an `element <#concept-element>`__
         `child <#concept-tree-child>`__.

   To pre-insert a ``node`` into a ``parent`` before a ``child``, run
   these steps:

   #. `Ensure pre-insertion
      validity <#concept-node-ensure-pre-insertion-validity>`__ of
      ``node`` into ``parent`` before ``child``.

   #. Let ``referenceChild`` be ``child``.

   #. If ``referenceChild`` is ``node``, then set ``referenceChild`` to
      ``node``\ ’s `next sibling <#concept-tree-next-sibling>`__.

   #. `Insert <#concept-node-insert>`__ ``node`` into ``parent`` before
      ``referenceChild``.

   #. Return ``node``.

   `Specifications <#other-applicable-specifications>`__ may define
   insertion steps for all or some `nodes <#concept-node>`__. The
   algorithm is passed ``insertedNode``, as indicated in the
   `insert <#concept-node-insert>`__ algorithm below.

   `Specifications <#other-applicable-specifications>`__ may define
   children changed steps for all or some `nodes <#concept-node>`__. The
   algorithm is passed no argument and is called from
   `insert <#concept-node-insert>`__, `remove <#concept-node-remove>`__,
   and `replace data <#concept-cd-replace>`__.

   To insert a ``node`` into a ``parent`` before a ``child``, with an
   optional *suppress observers flag*, run these steps:

   #. Let ``nodes`` be ``node``\ ’s `children <#concept-tree-child>`__,
      if ``node`` is a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__; otherwise « ``node`` ».

   #. Let ``count`` be ``nodes``\ ’s
      `size <https://infra.spec.whatwg.org/#list-size>`__.

   #. If ``count`` is 0, then return.

   #. If ``node`` is a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__, then:

      #. `Remove <#concept-node-remove>`__ its
         `children <#concept-tree-child>`__ with the *suppress observers
         flag* set.

      #. `Queue a tree mutation
         record <#queue-a-tree-mutation-record>`__ for ``node`` with «
         », ``nodes``, null, and null.

         This step intentionally does not pay attention to the *suppress
         observers flag*.

   #. If ``child`` is non-null, then:

      #. For each `live range <#concept-live-range>`__ whose `start
         node <#concept-range-start-node>`__ is ``parent`` and `start
         offset <#concept-range-start-offset>`__ is greater than
         ``child``\ ’s `index <#concept-tree-index>`__, increase its
         `start offset <#concept-range-start-offset>`__ by ``count``.

      #. For each `live range <#concept-live-range>`__ whose `end
         node <#concept-range-end-node>`__ is ``parent`` and `end
         offset <#concept-range-end-offset>`__ is greater than
         ``child``\ ’s `index <#concept-tree-index>`__, increase its
         `end offset <#concept-range-end-offset>`__ by ``count``.

   #. Let ``previousSibling`` be ``child``\ ’s `previous
      sibling <#concept-tree-previous-sibling>`__ or ``parent``\ ’s
      `last child <#concept-tree-last-child>`__ if ``child`` is null.

   #. For each ``node`` in ``nodes``, in `tree
      order <#concept-tree-order>`__:

      #. `Adopt <#concept-node-adopt>`__ ``node`` into ``parent``\ ’s
         `node document <#concept-node-document>`__.

      #. If ``child`` is null, then
         `append <https://infra.spec.whatwg.org/#set-append>`__ ``node``
         to ``parent``\ ’s `children <#concept-tree-child>`__.

      #. Otherwise,
         `insert <https://infra.spec.whatwg.org/#list-insert>`__
         ``node`` into ``parent``\ ’s `children <#concept-tree-child>`__
         before ``child``\ ’s `index <#concept-tree-index>`__.

      #. If ``parent`` is a `shadow host <#element-shadow-host>`__ whose
         `shadow root <#concept-shadow-root>`__\ ’s `slot
         assignment <#shadowroot-slot-assignment>`__ is "``named``" and
         ``node`` is a `slottable <#concept-slotable>`__, then `assign a
         slot <#assign-a-slot>`__ for ``node``.

      #. If ``parent``\ ’s `root <#concept-tree-root>`__ is a `shadow
         root <#concept-shadow-root>`__, and ``parent`` is a
         `slot <#concept-slot>`__ whose `assigned
         nodes <#slot-assigned-nodes>`__ is the empty list, then run
         `signal a slot change <#signal-a-slot-change>`__ for
         ``parent``.

      #. Run `assign slottables for a
         tree <#assign-slotables-for-a-tree>`__ with ``node``\ ’s
         `root <#concept-tree-root>`__.

      #. For each `shadow-including inclusive
         descendant <#concept-shadow-including-inclusive-descendant>`__
         ``inclusiveDescendant`` of ``node``, in `shadow-including tree
         order <#concept-shadow-including-tree-order>`__:

         #. Run the `insertion steps <#concept-node-insert-ext>`__ with
            ``inclusiveDescendant``.

         #. If ``inclusiveDescendant`` is `connected <#connected>`__,
            then:

            #. If ``inclusiveDescendant`` is
               `custom <#concept-element-custom>`__, then `enqueue a
               custom element callback
               reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction>`__
               with ``inclusiveDescendant``, callback name
               "``connectedCallback``", and an empty argument list.

            #. Otherwise, `try to
               upgrade <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-try-upgrade>`__
               ``inclusiveDescendant``.

               If this successfully upgrades ``inclusiveDescendant``,
               its ``connectedCallback`` will be enqueued automatically
               during the `upgrade an
               element <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element>`__
               algorithm.

   #. If *suppress observers flag* is unset, then `queue a tree mutation
      record <#queue-a-tree-mutation-record>`__ for ``parent`` with
      ``nodes``, « », ``previousSibling``, and ``child``.

   #. Run the `children changed
      steps <#concept-node-children-changed-ext>`__ for ``parent``.

   To append a ``node`` to a ``parent``,
   `pre-insert <#concept-node-pre-insert>`__ ``node`` into ``parent``
   before null.

   To replace a ``child`` with ``node`` within a ``parent``, run these
   steps:

   #. If ``parent`` is not a ```Document`` <#document>`__,
      ```DocumentFragment`` <#documentfragment>`__, or
      ```Element`` <#element>`__ `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is a `host-including inclusive
      ancestor <#concept-tree-host-including-inclusive-ancestor>`__ of
      ``parent``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``child``\ ’s `parent <#concept-tree-parent>`__ is not
      ``parent``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is not a ```DocumentFragment`` <#documentfragment>`__,
      ```DocumentType`` <#documenttype>`__, ```Element`` <#element>`__,
      or ```CharacterData`` <#characterdata>`__
      `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If either ``node`` is a ```Text`` <#text>`__
      `node <#concept-node>`__ and ``parent`` is a
      `document <#concept-document>`__, or ``node`` is a
      `doctype <#concept-doctype>`__ and ``parent`` is not a
      `document <#concept-document>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``parent`` is a `document <#concept-document>`__, and any of
      the statements below, switched on the interface ``node``
      `implements <https://webidl.spec.whatwg.org/#implements>`__, are
      true, then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      ```DocumentFragment`` <#documentfragment>`__
         If ``node`` has more than one `element <#concept-element>`__
         `child <#concept-tree-child>`__ or has a ```Text`` <#text>`__
         `node <#concept-node>`__ `child <#concept-tree-child>`__.

         Otherwise, if ``node`` has one `element <#concept-element>`__
         `child <#concept-tree-child>`__ and either ``parent`` has an
         `element <#concept-element>`__ `child <#concept-tree-child>`__
         that is not ``child`` or a `doctype <#concept-doctype>`__ is
         `following <#concept-tree-following>`__ ``child``.

      ```Element`` <#element>`__
         ``parent`` has an `element <#concept-element>`__
         `child <#concept-tree-child>`__ that is not ``child`` or a
         `doctype <#concept-doctype>`__ is
         `following <#concept-tree-following>`__ ``child``.

      ```DocumentType`` <#documenttype>`__
         ``parent`` has a `doctype <#concept-doctype>`__
         `child <#concept-tree-child>`__ that is not ``child``, or an
         `element <#concept-element>`__ is
         `preceding <#concept-tree-preceding>`__ ``child``.

      The above statements differ from the
      `pre-insert <#concept-node-pre-insert>`__ algorithm.

   #. Let ``referenceChild`` be ``child``\ ’s `next
      sibling <#concept-tree-next-sibling>`__.

   #. If ``referenceChild`` is ``node``, then set ``referenceChild`` to
      ``node``\ ’s `next sibling <#concept-tree-next-sibling>`__.

   #. Let ``previousSibling`` be ``child``\ ’s `previous
      sibling <#concept-tree-previous-sibling>`__.

   #. Let ``removedNodes`` be the empty set.

   #. If ``child``\ ’s `parent <#concept-tree-parent>`__ is non-null,
      then:

      #. Set ``removedNodes`` to « ``child`` ».

      #. `Remove <#concept-node-remove>`__ ``child`` with the *suppress
         observers flag* set.

      The above can only be false if ``child`` is ``node``.

   #. Let ``nodes`` be ``node``\ ’s `children <#concept-tree-child>`__
      if ``node`` is a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__; otherwise « ``node`` ».

   #. `Insert <#concept-node-insert>`__ ``node`` into ``parent`` before
      ``referenceChild`` with the *suppress observers flag* set.

   #. `Queue a tree mutation record <#queue-a-tree-mutation-record>`__
      for ``parent`` with ``nodes``, ``removedNodes``,
      ``previousSibling``, and ``referenceChild``.

   #. Return ``child``.

   To replace all with a ``node`` within a ``parent``, run these steps:

   #. Let ``removedNodes`` be ``parent``\ ’s
      `children <#concept-tree-child>`__.

   #. Let ``addedNodes`` be the empty set.

   #. If ``node`` is a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__, then set ``addedNodes`` to ``node``\ ’s
      `children <#concept-tree-child>`__.

   #. Otherwise, if ``node`` is non-null, set ``addedNodes`` to «
      ``node`` ».

   #. `Remove <#concept-node-remove>`__ all ``parent``\ ’s
      `children <#concept-tree-child>`__, in `tree
      order <#concept-tree-order>`__, with the *suppress observers flag*
      set.

   #. If ``node`` is non-null, then `insert <#concept-node-insert>`__
      ``node`` into ``parent`` before null with the *suppress observers
      flag* set.

   #. If either ``addedNodes`` or ``removedNodes`` `is not
      empty <https://infra.spec.whatwg.org/#list-is-empty>`__, then
      `queue a tree mutation record <#queue-a-tree-mutation-record>`__
      for ``parent`` with ``addedNodes``, ``removedNodes``, null, and
      null.

   This algorithm does not make any checks with regards to the `node
   tree <#concept-node-tree>`__ constraints. Specification authors need
   to use it wisely.

   To pre-remove a ``child`` from a ``parent``, run these steps:

   #. If ``child``\ ’s `parent <#concept-tree-parent>`__ is not
      ``parent``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. `Remove <#concept-node-remove>`__ ``child``.

   #. Return ``child``.

   `Specifications <#other-applicable-specifications>`__ may define
   removing steps for all or some `nodes <#concept-node>`__. The
   algorithm is passed a `node <#concept-node>`__ ``removedNode`` and a
   `node <#concept-node>`__-or-null ``oldParent``, as indicated in the
   `remove <#concept-node-remove>`__ algorithm below.

   To remove a `node <#concept-node>`__ ``node``, with an optional
   *suppress observers flag*, run these steps:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.

   #. Assert: ``parent`` is non-null.

   #. Let ``index`` be ``node``\ ’s `index <#concept-tree-index>`__.

   #. For each `live range <#concept-live-range>`__ whose `start
      node <#concept-range-start-node>`__ is an `inclusive
      descendant <#concept-tree-inclusive-descendant>`__ of ``node``,
      set its `start <#concept-range-start>`__ to (``parent``,
      ``index``).

   #. For each `live range <#concept-live-range>`__ whose `end
      node <#concept-range-end-node>`__ is an `inclusive
      descendant <#concept-tree-inclusive-descendant>`__ of ``node``,
      set its `end <#concept-range-end>`__ to (``parent``, ``index``).

   #. For each `live range <#concept-live-range>`__ whose `start
      node <#concept-range-start-node>`__ is ``parent`` and `start
      offset <#concept-range-start-offset>`__ is greater than ``index``,
      decrease its `start offset <#concept-range-start-offset>`__ by 1.

   #. For each `live range <#concept-live-range>`__ whose `end
      node <#concept-range-end-node>`__ is ``parent`` and `end
      offset <#concept-range-end-offset>`__ is greater than ``index``,
      decrease its `end offset <#concept-range-end-offset>`__ by 1.

   #. For each ```NodeIterator`` <#nodeiterator>`__ object ``iterator``
      whose `root <#concept-traversal-root>`__\ ’s `node
      document <#concept-node-document>`__ is ``node``\ ’s `node
      document <#concept-node-document>`__, run the ```NodeIterator``
      pre-removing steps <#nodeiterator-pre-removing-steps>`__ given
      ``node`` and ``iterator``.

   #. Let ``oldPreviousSibling`` be ``node``\ ’s `previous
      sibling <#concept-tree-previous-sibling>`__.

   #. Let ``oldNextSibling`` be ``node``\ ’s `next
      sibling <#concept-tree-next-sibling>`__.

   #. `Remove <https://infra.spec.whatwg.org/#list-remove>`__ ``node``
      from its ``parent``\ ’s `children <#concept-tree-child>`__.

   #. If ``node`` is `assigned <#slotable-assigned>`__, then run `assign
      slottables <#assign-slotables>`__ for ``node``\ ’s `assigned
      slot <#slotable-assigned-slot>`__.

   #. If ``parent``\ ’s `root <#concept-tree-root>`__ is a `shadow
      root <#concept-shadow-root>`__, and ``parent`` is a
      `slot <#concept-slot>`__ whose `assigned
      nodes <#slot-assigned-nodes>`__ is the empty list, then run
      `signal a slot change <#signal-a-slot-change>`__ for ``parent``.

   #. If ``node`` has an `inclusive
      descendant <#concept-tree-inclusive-descendant>`__ that is a
      `slot <#concept-slot>`__, then:

      #. Run `assign slottables for a
         tree <#assign-slotables-for-a-tree>`__ with ``parent``\ ’s
         `root <#concept-tree-root>`__.

      #. Run `assign slottables for a
         tree <#assign-slotables-for-a-tree>`__ with ``node``.

   #. Run the `removing steps <#concept-node-remove-ext>`__ with
      ``node`` and ``parent``.

   #. Let ``isParentConnected`` be ``parent``\ ’s
      `connected <#connected>`__.

   #. If ``node`` is `custom <#concept-element-custom>`__ and
      ``isParentConnected`` is true, then `enqueue a custom element
      callback
      reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction>`__
      with ``node``, callback name "``disconnectedCallback``", and an
      empty argument list.

      It is intentional for now that
      `custom <#concept-element-custom>`__
      `elements <#concept-element>`__ do not get ``parent`` passed. This
      might change in the future if there is a need.

   #. For each `shadow-including
      descendant <#concept-shadow-including-descendant>`__
      ``descendant`` of ``node``, in `shadow-including tree
      order <#concept-shadow-including-tree-order>`__, then:

      #. Run the `removing steps <#concept-node-remove-ext>`__ with
         ``descendant`` and null.

      #. If ``descendant`` is `custom <#concept-element-custom>`__ and
         ``isParentConnected`` is true, then `enqueue a custom element
         callback
         reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction>`__
         with ``descendant``, callback name "``disconnectedCallback``",
         and an empty argument list.

   #. For each `inclusive ancestor <#concept-tree-inclusive-ancestor>`__
      ``inclusiveAncestor`` of ``parent``, and then `for
      each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``registered`` of ``inclusiveAncestor``\ ’s `registered observer
      list <#registered-observer-list>`__, if ``registered``\ ’s
      `options <#registered-observer-options>`__\ ["```subtree`` <#dom-mutationobserverinit-subtree>`__"]
      is true, then
      `append <https://infra.spec.whatwg.org/#list-append>`__ a new
      `transient registered observer <#transient-registered-observer>`__
      whose `observer <#registered-observer-observer>`__ is
      ``registered``\ ’s `observer <#registered-observer-observer>`__,
      `options <#registered-observer-options>`__ is ``registered``\ ’s
      `options <#registered-observer-options>`__, and
      `source <#transient-registered-observer-source>`__ is
      ``registered`` to ``node``\ ’s `registered observer
      list <#registered-observer-list>`__.

   #. If *suppress observers flag* is unset, then `queue a tree mutation
      record <#queue-a-tree-mutation-record>`__ for ``parent`` with « »,
      « ``node`` », ``oldPreviousSibling``, and ``oldNextSibling``.

   #. Run the `children changed
      steps <#concept-node-children-changed-ext>`__ for ``parent``.


/4.2.4. Mixin NonElementParentNode
==================================

   .. .. rubric:: 4.2.4. Mixin
      ```NonElementParentNode`` <#nonelementparentnode>`__ ` <#interface-nonelementparentnode>`__
      :name: interface-nonelementparentnode
      :class: heading settled

   Web compatibility prevents the
   ```getElementById()`` <#dom-nonelementparentnode-getelementbyid>`__
   method from being exposed on `elements <#concept-element>`__ (and
   therefore on ```ParentNode`` <#parentnode>`__).

   .. code:: idl

      interface mixin NonElementParentNode {
        Element? getElementById(DOMString elementId);
      };
      Document includes NonElementParentNode;
      DocumentFragment includes NonElementParentNode;

   ``node`` ``.`` ```getElementById`` <#dom-nonelementparentnode-getelementbyid>`__ ``(`` ``elementId`` ``)``
      Returns the first `element <#concept-element>`__ within
      ``node``\ ’s `descendants <#concept-tree-descendant>`__ whose
      `ID <#concept-id>`__ is ``elementId``.

   The ``getElementById(`` ``elementId`` ``)`` method steps are to
   return the first `element <#concept-element>`__, in `tree
   order <#concept-tree-order>`__, within
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `descendants <#concept-tree-descendant>`__, whose
   `ID <#concept-id>`__ is ``elementId``; otherwise, if there is no such
   `element <#concept-element>`__, null.


/4.2.5. Mixin DocumentOrShadowRoot
==================================

   .. .. rubric:: 4.2.5. Mixin
      ```DocumentOrShadowRoot`` <#documentorshadowroot>`__ ` <#mixin-documentorshadowroot>`__
      :name: mixin-documentorshadowroot
      :class: heading settled

   .. code:: idl

      interface mixin DocumentOrShadowRoot {
      };
      Document includes DocumentOrShadowRoot;
      ShadowRoot includes DocumentOrShadowRoot;

   The ```DocumentOrShadowRoot`` <#documentorshadowroot>`__ mixin is
   expected to be used by other standards that want to define APIs
   shared between `documents <#concept-document>`__ and `shadow
   roots <#concept-shadow-root>`__.


/4.2.6. Mixin ParentNode
========================

   .. .. rubric:: 4.2.6. Mixin
      ```ParentNode`` <#parentnode>`__ ` <#interface-parentnode>`__
      :name: interface-parentnode
      :class: heading settled

   To convert nodes into a node, given ``nodes`` and ``document``, run
   these steps:

   #. Let ``node`` be null.

   #. Replace each string in ``nodes`` with a new ```Text`` <#text>`__
      `node <#concept-node>`__ whose `data <#concept-cd-data>`__ is the
      string and `node document <#concept-node-document>`__ is
      ``document``.

   #. If ``nodes`` contains one `node <#concept-node>`__, then set
      ``node`` to ``nodes``\ [0].

   #. Otherwise, set ``node`` to a new
      ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__ whose `node
      document <#concept-node-document>`__ is ``document``, and then
      `append <#concept-node-append>`__ each `node <#concept-node>`__ in
      ``nodes``, if any, to it.

   #. Return ``node``.

   .. code:: idl

      interface mixin ParentNode {
        [SameObject] readonly attribute HTMLCollection children;
        readonly attribute Element? firstElementChild;
        readonly attribute Element? lastElementChild;
        readonly attribute unsigned long childElementCount;

        [CEReactions, Unscopable] undefined prepend((Node or DOMString)... nodes);
        [CEReactions, Unscopable] undefined append((Node or DOMString)... nodes);
        [CEReactions, Unscopable] undefined replaceChildren((Node or DOMString)... nodes);

        Element? querySelector(DOMString selectors);
        [NewObject] NodeList querySelectorAll(DOMString selectors);
      };
      Document includes ParentNode;
      DocumentFragment includes ParentNode;
      Element includes ParentNode;

   ``collection`` ``=`` ``node`` ``.`` ```children`` <#dom-parentnode-children>`__
      Returns the `child <#concept-tree-child>`__
      `elements <#concept-element>`__.
   ``element`` ``=`` ``node`` ``.`` ```firstElementChild`` <#dom-parentnode-firstelementchild>`__
      Returns the first `child <#concept-tree-child>`__ that is an
      `element <#concept-element>`__; otherwise null.
   ``element`` ``=`` ``node`` ``.`` ```lastElementChild`` <#dom-parentnode-lastelementchild>`__
      Returns the last `child <#concept-tree-child>`__ that is an
      `element <#concept-element>`__; otherwise null.
   ``node`` ``.`` ```prepend`` <#dom-parentnode-prepend>`__ ``(`` ``nodes`` ``)``
      Inserts ``nodes`` before the `first
      child <#concept-tree-first-child>`__ of ``node``, while replacing
      strings in ``nodes`` with equivalent ```Text`` <#text>`__
      `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```append`` <#dom-parentnode-append>`__ ``(`` ``nodes`` ``)``
      Inserts ``nodes`` after the `last
      child <#concept-tree-last-child>`__ of ``node``, while replacing
      strings in ``nodes`` with equivalent ```Text`` <#text>`__
      `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```replaceChildren`` <#dom-parentnode-replacechildren>`__ ``(`` ``nodes`` ``)``
      Replace all `children <#concept-tree-child>`__ of ``node`` with
      ``nodes``, while replacing strings in ``nodes`` with equivalent
      ```Text`` <#text>`__ `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```querySelector`` <#dom-parentnode-queryselector>`__ ``(`` ``selectors`` ``)``
      Returns the first `element <#concept-element>`__ that is a
      `descendant <#concept-tree-descendant>`__ of ``node`` that matches
      ``selectors``.

   ``node`` ``.`` ```querySelectorAll`` <#dom-parentnode-queryselectorall>`__ ``(`` ``selectors`` ``)``
      Returns all `element <#concept-element>`__
      `descendants <#concept-tree-descendant>`__ of ``node`` that match
      ``selectors``.

   The ``children`` getter steps are to return an
   ```HTMLCollection`` <#htmlcollection>`__
   `collection <#concept-collection>`__ rooted at
   `this <https://webidl.spec.whatwg.org/#this>`__ matching only
   `element <#concept-element>`__ `children <#concept-tree-child>`__.

   The ``firstElementChild`` getter steps are to return the first
   `child <#concept-tree-child>`__ that is an
   `element <#concept-element>`__; otherwise null.

   The ``lastElementChild`` getter steps are to return the last
   `child <#concept-tree-child>`__ that is an
   `element <#concept-element>`__; otherwise null.

   The ``childElementCount`` getter steps are to return the number of
   `children <#concept-tree-child>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__ that are
   `elements <#concept-element>`__.

   The ``prepend(`` ``nodes`` ``)`` method steps are:

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__ given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. `Pre-insert <#concept-node-pre-insert>`__ ``node`` into
      `this <https://webidl.spec.whatwg.org/#this>`__ before
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `first
      child <#concept-tree-first-child>`__.

   The ``append(`` ``nodes`` ``)`` method steps are:

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__ given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. `Append <#concept-node-append>`__ ``node`` to
      `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``replaceChildren(`` ``nodes`` ``)`` method steps are:

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__ given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. `Ensure pre-insertion
      validity <#concept-node-ensure-pre-insertion-validity>`__ of
      ``node`` into `this <https://webidl.spec.whatwg.org/#this>`__
      before null.

   #. `Replace all <#concept-node-replace-all>`__ with ``node`` within
      `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``querySelector(`` ``selectors`` ``)`` method steps are to
   return the first result of running `scope-match a selectors
   string <#scope-match-a-selectors-string>`__ ``selectors`` against
   `this <https://webidl.spec.whatwg.org/#this>`__, if the result is not
   an empty list; otherwise null.

   The ``querySelectorAll(`` ``selectors`` ``)`` method steps are to
   return the `static <#concept-collection-static>`__ result of running
   `scope-match a selectors string <#scope-match-a-selectors-string>`__
   ``selectors`` against
   `this <https://webidl.spec.whatwg.org/#this>`__.


/4.2.7. Mixin NonDocumentTypeChildNode
======================================

   .. .. rubric:: 4.2.7. Mixin
      ```NonDocumentTypeChildNode`` <#nondocumenttypechildnode>`__ ` <#interface-nondocumenttypechildnode>`__
      :name: interface-nondocumenttypechildnode
      :class: heading settled

   Web compatibility prevents the
   ```previousElementSibling`` <#dom-nondocumenttypechildnode-previouselementsibling>`__
   and
   ```nextElementSibling`` <#dom-nondocumenttypechildnode-nextelementsibling>`__
   attributes from being exposed on `doctypes <#concept-doctype>`__ (and
   therefore on ```ChildNode`` <#childnode>`__).

   .. code:: idl

      interface mixin NonDocumentTypeChildNode {
        readonly attribute Element? previousElementSibling;
        readonly attribute Element? nextElementSibling;
      };
      Element includes NonDocumentTypeChildNode;
      CharacterData includes NonDocumentTypeChildNode;

   ``element`` ``=`` ``node`` ``.`` ```previousElementSibling`` <#dom-nondocumenttypechildnode-previouselementsibling>`__
      Returns the first `preceding <#concept-tree-preceding>`__
      `sibling <#concept-tree-sibling>`__ that is an
      `element <#concept-element>`__; otherwise null.
   ``element`` ``=`` ``node`` ``.`` ```nextElementSibling`` <#dom-nondocumenttypechildnode-nextelementsibling>`__
      Returns the first `following <#concept-tree-following>`__
      `sibling <#concept-tree-sibling>`__ that is an
      `element <#concept-element>`__; otherwise null.

   The ``previousElementSibling`` getter steps are to return the first
   `preceding <#concept-tree-preceding>`__
   `sibling <#concept-tree-sibling>`__ that is an
   `element <#concept-element>`__; otherwise null.

   The ``nextElementSibling`` getter steps are to return the first
   `following <#concept-tree-following>`__
   `sibling <#concept-tree-sibling>`__ that is an
   `element <#concept-element>`__; otherwise null.


/4.2.8. Mixin ChildNode
=======================

   .. .. rubric:: 4.2.8. Mixin
      ```ChildNode`` <#childnode>`__ ` <#interface-childnode>`__
      :name: interface-childnode
      :class: heading settled

   .. code:: idl

      interface mixin ChildNode {
        [CEReactions, Unscopable] undefined before((Node or DOMString)... nodes);
        [CEReactions, Unscopable] undefined after((Node or DOMString)... nodes);
        [CEReactions, Unscopable] undefined replaceWith((Node or DOMString)... nodes);
        [CEReactions, Unscopable] undefined remove();
      };
      DocumentType includes ChildNode;
      Element includes ChildNode;
      CharacterData includes ChildNode;

   ``node`` ``.`` ```before(...nodes)`` <#dom-childnode-before>`__
      Inserts ``nodes`` just before ``node``, while replacing strings in
      ``nodes`` with equivalent ```Text`` <#text>`__
      `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```after(...nodes)`` <#dom-childnode-after>`__
      Inserts ``nodes`` just after ``node``, while replacing strings in
      ``nodes`` with equivalent ```Text`` <#text>`__
      `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```replaceWith(...nodes)`` <#dom-childnode-replacewith>`__
      Replaces ``node`` with ``nodes``, while replacing strings in
      ``nodes`` with equivalent ```Text`` <#text>`__
      `nodes <#concept-node>`__.

      `Throws <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if the constraints of the `node tree <#concept-node-tree>`__ are
      violated.

   ``node`` ``.`` ```remove()`` <#dom-childnode-remove>`__
      Removes ``node``.

   The ``before(`` ``nodes`` ``)`` method steps are:

   #. Let ``parent`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then return.

   #. Let ``viablePreviousSibling`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s first
      `preceding <#concept-tree-preceding>`__
      `sibling <#concept-tree-sibling>`__ not in ``nodes``; otherwise
      null.

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__, given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. If ``viablePreviousSibling`` is null, then set it to
      ``parent``\ ’s `first child <#concept-tree-first-child>`__;
      otherwise to ``viablePreviousSibling``\ ’s `next
      sibling <#concept-tree-next-sibling>`__.

   #. `Pre-insert <#concept-node-pre-insert>`__ ``node`` into ``parent``
      before ``viablePreviousSibling``.

   The ``after(`` ``nodes`` ``)`` method steps are:

   #. Let ``parent`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then return.

   #. Let ``viableNextSibling`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s first
      `following <#concept-tree-following>`__
      `sibling <#concept-tree-sibling>`__ not in ``nodes``; otherwise
      null.

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__, given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. `Pre-insert <#concept-node-pre-insert>`__ ``node`` into ``parent``
      before ``viableNextSibling``.

   The ``replaceWith(`` ``nodes`` ``)`` method steps are:

   #. Let ``parent`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then return.

   #. Let ``viableNextSibling`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s first
      `following <#concept-tree-following>`__
      `sibling <#concept-tree-sibling>`__ not in ``nodes``; otherwise
      null.

   #. Let ``node`` be the result of `converting nodes into a
      node <#converting-nodes-into-a-node>`__, given ``nodes`` and
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `parent <#concept-tree-parent>`__ is ``parent``,
      `replace <#concept-node-replace>`__
      `this <https://webidl.spec.whatwg.org/#this>`__ with ``node``
      within ``parent``.

      `This <https://webidl.spec.whatwg.org/#this>`__ could have been
      inserted into ``node``.

   #. Otherwise, `pre-insert <#concept-node-pre-insert>`__ ``node`` into
      ``parent`` before ``viableNextSibling``.

   The ``remove()`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `parent <#concept-tree-parent>`__ is null, then return.

   #. `Remove <#concept-node-remove>`__
      `this <https://webidl.spec.whatwg.org/#this>`__.


/4.2.9. Mixin Slottable
=======================

   .. .. rubric:: 4.2.9. Mixin
      ```Slottable`` <#slotable>`__ ` <#mixin-slotable>`__
      :name: mixin-slotable
      :class: heading settled

   .. code:: idl

      interface mixin Slottable {
        readonly attribute HTMLSlotElement? assignedSlot;
      };
      Element includes Slottable;
      Text includes Slottable;

   The ``assignedSlot`` getter steps are to return the result of `find a
   slot <#find-a-slot>`__ given
   `this <https://webidl.spec.whatwg.org/#this>`__ and with the *open
   flag* set.


/4.2.10. Old-style collections:
===============================

   .. .. rubric:: 4.2.10. Old-style collections:
      ```NodeList`` <#nodelist>`__ and
      ```HTMLCollection`` <#htmlcollection>`__ ` <#old-style-collections>`__
      :name: old-style-collections
      :class: heading settled

   A collection is an object that represents a list of
   `nodes <#concept-node>`__. A `collection <#concept-collection>`__ can
   be either live or static. Unless otherwise stated, a
   `collection <#concept-collection>`__ must be
   `live <#concept-collection-live>`__.

   If a `collection <#concept-collection>`__ is
   `live <#concept-collection-live>`__, then the attributes and methods
   on that object must operate on the actual underlying data, not a
   snapshot of the data.

   When a `collection <#concept-collection>`__ is created, a filter and
   a root are associated with it.

   The `collection <#concept-collection>`__ then represents a view of
   the subtree rooted at the `collection’s <#concept-collection>`__
   root, containing only nodes that match the given filter. The view is
   linear. In the absence of specific requirements to the contrary, the
   nodes within the `collection <#concept-collection>`__ must be sorted
   in `tree order <#concept-tree-order>`__.


/4.2.10.1. Interface NodeList
=============================

   .. .. rubric:: 4.2.10.1. Interface
      ```NodeList`` <#nodelist>`__ ` <#interface-nodelist>`__
      :name: interface-nodelist
      :class: heading settled

   A ```NodeList`` <#nodelist>`__ object is a
   `collection <#concept-collection>`__ of `nodes <#concept-node>`__.

   .. code:: idl

      [Exposed=Window]
      interface NodeList {
        getter Node? item(unsigned long index);
        readonly attribute unsigned long length;
        iterable<Node>;
      };

   ``collection`` . ```length`` <#dom-nodelist-length>`__
      Returns the number of `nodes <#concept-node>`__ in the
      `collection <#concept-collection>`__.
   ``element`` = ``collection`` . ```item(index)`` <#dom-nodelist-item>`__
   ``element`` = ``collection``\ [``index``]
      Returns the `node <#concept-node>`__ with index ``index`` from the
      `collection <#concept-collection>`__. The
      `nodes <#concept-node>`__ are sorted in `tree
      order <#concept-tree-order>`__.

   .. container:: impl

      The object’s `supported property
      indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__
      are the numbers in the range zero to one less than the number of
      nodes `represented by the
      collection <#represented-by-the-collection>`__. If there are no
      such elements, then there are no `supported property
      indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__.

      The ``length`` attribute must return the number of nodes
      `represented by the
      collection <#represented-by-the-collection>`__.

      The ``item(`` ``index`` ``)`` method must return the
      ``index``\ :sup:`th` `node <#concept-node>`__ in the
      `collection <#concept-collection>`__. If there is no
      ``index``\ :sup:`th` `node <#concept-node>`__ in the
      `collection <#concept-collection>`__, then the method must return
      null.


/4.2.10.2. Interface HTMLCollection
===================================

   .. .. rubric:: 4.2.10.2. Interface
      ```HTMLCollection`` <#htmlcollection>`__ ` <#interface-htmlcollection>`__
      :name: interface-htmlcollection
      :class: heading settled

   .. code:: idl

      [Exposed=Window, LegacyUnenumerableNamedProperties]
      interface HTMLCollection {
        readonly attribute unsigned long length;
        getter Element? item(unsigned long index);
        getter Element? namedItem(DOMString name);
      };

   An ```HTMLCollection`` <#htmlcollection>`__ object is a
   `collection <#concept-collection>`__ of
   `elements <#concept-element>`__.

   ```HTMLCollection`` <#htmlcollection>`__ is a historical artifact we
   cannot rid the web of. While developers are of course welcome to keep
   using it, new API standard designers ought not to use it (use
   ``sequence<T>`` in IDL instead).

   ``collection`` . ```length`` <#dom-htmlcollection-length>`__
      Returns the number of `elements <#concept-element>`__ in the
      `collection <#concept-collection>`__.
   ``element`` = ``collection`` . ```item(index)`` <#dom-htmlcollection-item>`__
   ``element`` = ``collection``\ [``index``]
      Returns the `element <#concept-element>`__ with index ``index``
      from the `collection <#concept-collection>`__. The
      `elements <#concept-element>`__ are sorted in `tree
      order <#concept-tree-order>`__.
   ``element`` = ``collection`` . ```namedItem(name)`` <#dom-htmlcollection-nameditem>`__
   ``element`` = ``collection``\ [``name``]
      Returns the first `element <#concept-element>`__ with
      `ID <#concept-id>`__ or name ``name`` from the collection.

   The object’s `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__
   are the numbers in the range zero to one less than the number of
   elements `represented by the
   collection <#represented-by-the-collection>`__. If there are no such
   elements, then there are no `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__.

   The ``length`` getter steps are to return the number of nodes
   `represented by the collection <#represented-by-the-collection>`__.

   The ``item(`` ``index`` ``)`` method steps are to return the
   ``index``\ :sup:`th` `element <#concept-element>`__ in the
   `collection <#concept-collection>`__. If there is no
   ``index``\ :sup:`th` `element <#concept-element>`__ in the
   `collection <#concept-collection>`__, then the method must return
   null.

   The `supported property
   names <https://webidl.spec.whatwg.org/#dfn-supported-property-names>`__
   are the values from the list returned by these steps:

   #. Let ``result`` be an empty list.

   #. For each ``element`` `represented by the
      collection <#represented-by-the-collection>`__, in `tree
      order <#concept-tree-order>`__:

      #. If ``element`` has an `ID <#concept-id>`__ which is not in
         ``result``, append ``element``\ ’s `ID <#concept-id>`__ to
         ``result``.

      #. If ``element`` is in the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__
         and `has <#concept-element-attribute-has>`__ a ```name``
         attribute <#concept-named-attribute>`__ whose
         `value <#concept-attribute-value>`__ is neither the empty
         string nor is in ``result``, append ``element``\ ’s ```name``
         attribute <#concept-named-attribute>`__
         `value <#concept-attribute-value>`__ to ``result``.

   #. Return ``result``.

   The ``namedItem(`` ``key`` ``)`` method steps are:

   #. If ``key`` is the empty string, return null.

   #. Return the first `element <#concept-element>`__ in the
      `collection <#concept-collection>`__ for which at least one of the
      following is true:

      -  it has an `ID <#concept-id>`__ which is ``key``;
      -  it is in the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__
         and `has <#concept-element-attribute-has>`__ a ```name``
         attribute <#concept-named-attribute>`__ whose
         `value <#concept-attribute-value>`__ is ``key``;

      or null if there is no such `element <#concept-element>`__.


/4.3. Mutation observers
========================

   .. .. rubric:: 4.3. Mutation observers ` <#mutation-observers>`__
      :name: mutation-observers
      :class: heading settled

   Each `similar-origin window
   agent <https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent>`__
   has a mutation observer microtask queued (a boolean), which is
   initially false. `[HTML] <#biblio-html>`__

   Each `similar-origin window
   agent <https://html.spec.whatwg.org/multipage/webappapis.html#similar-origin-window-agent>`__
   also has pending mutation observers (a
   `set <https://infra.spec.whatwg.org/#ordered-set>`__ of zero or more
   ```MutationObserver`` <#mutationobserver>`__ objects), which is
   initially empty.

   To queue a mutation observer microtask, run these steps:

   #. If the `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s
      `mutation observer microtask
      queued <#mutation-observer-compound-microtask-queued-flag>`__ is
      true, then return.

   #. Set the `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s
      `mutation observer microtask
      queued <#mutation-observer-compound-microtask-queued-flag>`__ to
      true.

   #. `Queue <https://html.spec.whatwg.org/multipage/webappapis.html#queue-a-microtask>`__
      a
      `microtask <https://html.spec.whatwg.org/multipage/webappapis.html#microtask>`__
      to `notify mutation observers <#notify-mutation-observers>`__.

   To notify mutation observers, run these steps:

   #. Set the `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s
      `mutation observer microtask
      queued <#mutation-observer-compound-microtask-queued-flag>`__ to
      false.

   #. Let ``notifySet`` be a
      `clone <https://infra.spec.whatwg.org/#list-clone>`__ of the
      `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s `pending
      mutation observers <#mutation-observer-list>`__.

   #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__ the
      `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s `pending
      mutation observers <#mutation-observer-list>`__.

   #. Let ``signalSet`` be a
      `clone <https://infra.spec.whatwg.org/#list-clone>`__ of the
      `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s `signal
      slots <#signal-slot-list>`__.

   #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__ the
      `surrounding
      agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s `signal
      slots <#signal-slot-list>`__.

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__ ``mo``
      of ``notifySet``:

      #. Let ``records`` be a
         `clone <https://infra.spec.whatwg.org/#list-clone>`__ of
         ``mo``\ ’s `record queue <#concept-mo-queue>`__.

      #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__
         ``mo``\ ’s `record queue <#concept-mo-queue>`__.

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``node`` of ``mo``\ ’s `node
         list <#mutationobserver-node-list>`__,
         `remove <https://infra.spec.whatwg.org/#list-remove>`__ all
         `transient registered
         observers <#transient-registered-observer>`__ whose
         `observer <#registered-observer-observer>`__ is ``mo`` from
         ``node``\ ’s `registered observer
         list <#registered-observer-list>`__.

      #. If ``records`` `is not
         empty <https://infra.spec.whatwg.org/#list-is-empty>`__, then
         `invoke <https://webidl.spec.whatwg.org/#invoke-a-callback-function>`__
         ``mo``\ ’s `callback <#concept-mo-callback>`__ with «
         ``records``, ``mo`` », and ``mo``. If this throws an exception,
         catch it, and `report the
         exception <https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception>`__.

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``slot`` of ``signalSet``, `fire an event <#concept-event-fire>`__
      named ``slotchange``, with its
      ```bubbles`` <#dom-event-bubbles>`__ attribute set to true, at
      ``slot``.

   --------------

   Each `node <#concept-node>`__ has a registered observer list (a
   `list <https://infra.spec.whatwg.org/#list>`__ of zero or more
   `registered observers <#registered-observer>`__), which is initially
   empty.

   A registered observer consists of an observer (a
   ```MutationObserver`` <#mutationobserver>`__ object) and options (a
   ```MutationObserverInit`` <#dictdef-mutationobserverinit>`__
   dictionary).

   A transient registered observer is a `registered
   observer <#registered-observer>`__ that also consists of a source (a
   `registered observer <#registered-observer>`__).

   `Transient registered observers <#transient-registered-observer>`__
   are used to track mutations within a given
   `node <#concept-node>`__\ ’s
   `descendants <#concept-tree-descendant>`__ after
   `node <#concept-node>`__ has been removed so they do not get lost
   when ```subtree`` <#dom-mutationobserverinit-subtree>`__ is set to
   true on `node <#concept-node>`__\ ’s
   `parent <#concept-tree-parent>`__.


/4.3.1. Interface MutationObserver
==================================

   .. .. rubric:: 4.3.1. Interface
      ```MutationObserver`` <#mutationobserver>`__ ` <#interface-mutationobserver>`__
      :name: interface-mutationobserver
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface MutationObserver {
        constructor(MutationCallback callback);

        undefined observe(Node target, optional MutationObserverInit options = {});
        undefined disconnect();
        sequence<MutationRecord> takeRecords();
      };

      callback MutationCallback = undefined (sequence<MutationRecord> mutations, MutationObserver observer);

      dictionary MutationObserverInit {
        boolean childList = false;
        boolean attributes;
        boolean characterData;
        boolean subtree = false;
        boolean attributeOldValue;
        boolean characterDataOldValue;
        sequence<DOMString> attributeFilter;
      };

   A ```MutationObserver`` <#mutationobserver>`__ object can be used to
   observe mutations to the `tree <#concept-tree>`__ of
   `nodes <#concept-node>`__.

   Each ```MutationObserver`` <#mutationobserver>`__ object has these
   associated concepts:

   -  A callback set on creation.
   -  A node list (a `list <https://infra.spec.whatwg.org/#list>`__ of
      weak references to `nodes <#concept-node>`__), which is initially
      empty.
   -  A record queue (a `queue <https://infra.spec.whatwg.org/#queue>`__
      of zero or more ```MutationRecord`` <#mutationrecord>`__ objects),
      which is initially empty.

   ``observer`` ``= new`` ```MutationObserver(callback)`` <#dom-mutationobserver-mutationobserver>`__
      Constructs a ```MutationObserver`` <#mutationobserver>`__ object
      and sets its `callback <#concept-mo-callback>`__ to ``callback``.
      The ``callback`` is invoked with a list of
      ```MutationRecord`` <#mutationrecord>`__ objects as first argument
      and the constructed ```MutationObserver`` <#mutationobserver>`__
      object as second argument. It is invoked after
      `nodes <#concept-node>`__ registered with the
      ```observe()`` <#dom-mutationobserver-observe>`__ method, are
      mutated.
   ``observer`` ``.`` ```observe(target, options)`` <#dom-mutationobserver-observe>`__
      Instructs the user agent to observe a given ``target`` (a
      `node <#concept-node>`__) and report any mutations based on the
      criteria given by ``options`` (an object).

      The ``options`` argument allows for setting mutation observation
      options via object members. These are the object members that can
      be used:

      ```childList`` <#dom-mutationobserverinit-childlist>`__
         Set to true if mutations to ``target``\ ’s
         `children <#concept-tree-child>`__ are to be observed.
      ```attributes`` <#dom-mutationobserverinit-attributes>`__
         Set to true if mutations to ``target``\ ’s
         `attributes <#concept-attribute>`__ are to be observed. Can be
         omitted if
         ```attributeOldValue`` <#dom-mutationobserverinit-attributeoldvalue>`__
         or
         ```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__
         is specified.
      ```characterData`` <#dom-mutationobserverinit-characterdata>`__
         Set to true if mutations to ``target``\ ’s
         `data <#concept-cd-data>`__ are to be observed. Can be omitted
         if
         ```characterDataOldValue`` <#dom-mutationobserverinit-characterdataoldvalue>`__
         is specified.
      ```subtree`` <#dom-mutationobserverinit-subtree>`__
         Set to true if mutations to not just ``target``, but also
         ``target``\ ’s `descendants <#concept-tree-descendant>`__ are
         to be observed.
      ```attributeOldValue`` <#dom-mutationobserverinit-attributeoldvalue>`__
         Set to true if
         ```attributes`` <#dom-mutationobserverinit-attributes>`__ is
         true or omitted and ``target``\ ’s
         `attribute <#concept-attribute>`__
         `value <#concept-attribute-value>`__ before the mutation needs
         to be recorded.
      ```characterDataOldValue`` <#dom-mutationobserverinit-characterdataoldvalue>`__
         Set to true if
         ```characterData`` <#dom-mutationobserverinit-characterdata>`__
         is set to true or omitted and ``target``\ ’s
         `data <#concept-cd-data>`__ before the mutation needs to be
         recorded.
      ```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__
         Set to a list of `attribute <#concept-attribute>`__ `local
         names <#concept-attribute-local-name>`__ (without
         `namespace <#concept-attribute-namespace>`__) if not all
         `attribute <#concept-attribute>`__ mutations need to be
         observed and
         ```attributes`` <#dom-mutationobserverinit-attributes>`__ is
         true or omitted.

   ``observer`` ``.`` ```disconnect()`` <#dom-mutationobserver-disconnect>`__
      Stops ``observer`` from observing any mutations. Until the
      ```observe()`` <#dom-mutationobserver-observe>`__ method is used
      again, ``observer``\ ’s `callback <#concept-mo-callback>`__ will
      not be invoked.
   ``observer`` ``.`` ```takeRecords()`` <#dom-mutationobserver-takerecords>`__
      Empties the `record queue <#concept-mo-queue>`__ and returns what
      was in there.

   The ``new MutationObserver(`` ``callback`` ``)`` constructor steps
   are to set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `callback <#concept-mo-callback>`__ to ``callback``.

   The ``observe(`` ``target`` ``,`` ``options`` ``)`` method steps
   are:

   #. If either
      ``options``\ ["```attributeOldValue`` <#dom-mutationobserverinit-attributeoldvalue>`__"]
      or
      ``options``\ ["```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__"]
      `exists <https://infra.spec.whatwg.org/#map-exists>`__, and
      ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"]
      does not `exist <https://infra.spec.whatwg.org/#map-exists>`__,
      then set
      ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"]
      to true.

   #. If
      ``options``\ ["```characterDataOldValue`` <#dom-mutationobserverinit-characterdataoldvalue>`__"]
      `exists <https://infra.spec.whatwg.org/#map-exists>`__ and
      ``options``\ ["```characterData`` <#dom-mutationobserverinit-characterdata>`__"]
      does not `exist <https://infra.spec.whatwg.org/#map-exists>`__,
      then set
      ``options``\ ["```characterData`` <#dom-mutationobserverinit-characterdata>`__"]
      to true.

   #. If none of
      ``options``\ ["```childList`` <#dom-mutationobserverinit-childlist>`__"],
      ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"],
      and
      ``options``\ ["```characterData`` <#dom-mutationobserverinit-characterdata>`__"]
      is true, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      ``TypeError``.

   #. If
      ``options``\ ["```attributeOldValue`` <#dom-mutationobserverinit-attributeoldvalue>`__"]
      is true and
      ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"]
      is false, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      ``TypeError``.

   #. If
      ``options``\ ["```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__"]
      is present and
      ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"]
      is false, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      ``TypeError``.

   #. If
      ``options``\ ["```characterDataOldValue`` <#dom-mutationobserverinit-characterdataoldvalue>`__"]
      is true and
      ``options``\ ["```characterData`` <#dom-mutationobserverinit-characterdata>`__"]
      is false, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      ``TypeError``.

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``registered`` of ``target``\ ’s `registered observer
      list <#registered-observer-list>`__, if ``registered``\ ’s
      `observer <#registered-observer-observer>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__:

      #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
         ``node`` of `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `node list <#mutationobserver-node-list>`__,
         `remove <https://infra.spec.whatwg.org/#list-remove>`__ all
         `transient registered
         observers <#transient-registered-observer>`__ whose
         `source <#transient-registered-observer-source>`__ is
         ``registered`` from ``node``\ ’s `registered observer
         list <#registered-observer-list>`__.

      #. Set ``registered``\ ’s
         `options <#registered-observer-options>`__ to ``options``.

   #. Otherwise:

      #. `Append <https://infra.spec.whatwg.org/#list-append>`__ a new
         `registered observer <#registered-observer>`__ whose
         `observer <#registered-observer-observer>`__ is
         `this <https://webidl.spec.whatwg.org/#this>`__ and
         `options <#registered-observer-options>`__ is ``options`` to
         ``target``\ ’s `registered observer
         list <#registered-observer-list>`__.

      #. `Append <https://infra.spec.whatwg.org/#list-append>`__ a weak
         reference to ``target`` to
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
         list <#mutationobserver-node-list>`__.

   The ``disconnect()`` method steps are:

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``node`` of `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `node list <#mutationobserver-node-list>`__,
      `remove <https://infra.spec.whatwg.org/#list-remove>`__ any
      `registered observer <#registered-observer>`__ from ``node``\ ’s
      `registered observer list <#registered-observer-list>`__ for which
      `this <https://webidl.spec.whatwg.org/#this>`__ is the
      `observer <#registered-observer-observer>`__.

   #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `record
      queue <#concept-mo-queue>`__.

   The ``takeRecords()`` method steps are:

   #. Let ``records`` be a
      `clone <https://infra.spec.whatwg.org/#list-clone>`__ of
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `record
      queue <#concept-mo-queue>`__.

   #. `Empty <https://infra.spec.whatwg.org/#list-empty>`__
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `record
      queue <#concept-mo-queue>`__.

   #. Return ``records``.


/4.3.2. Queuing a mutation
==========================

   .. .. rubric:: 4.3.2. Queuing a mutation
      record ` <#queueing-a-mutation-record>`__
      :name: queueing-a-mutation-record
      :class: heading settled

   To queue a mutation record of ``type`` for ``target`` with ``name``,
   ``namespace``, ``oldValue``, ``addedNodes``, ``removedNodes``,
   ``previousSibling``, and ``nextSibling``, run these steps:

   #. Let ``interestedObservers`` be an empty
      `map <https://infra.spec.whatwg.org/#ordered-map>`__.

   #. Let ``nodes`` be the `inclusive
      ancestors <#concept-tree-inclusive-ancestor>`__ of ``target``.

   #. For each ``node`` in ``nodes``, and then `for
      each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``registered`` of ``node``\ ’s `registered observer
      list <#registered-observer-list>`__:

      #. Let ``options`` be ``registered``\ ’s
         `options <#registered-observer-options>`__.

      #. If none of the following are true

         -  ``node`` is not ``target`` and
            ``options``\ ["```subtree`` <#dom-mutationobserverinit-subtree>`__"]
            is false
         -  ``type`` is "``attributes``" and
            ``options``\ ["```attributes`` <#dom-mutationobserverinit-attributes>`__"]
            either does not
            `exist <https://infra.spec.whatwg.org/#map-exists>`__ or is
            false
         -  ``type`` is "``attributes``",
            ``options``\ ["```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__"]
            `exists <https://infra.spec.whatwg.org/#map-exists>`__, and
            ``options``\ ["```attributeFilter`` <#dom-mutationobserverinit-attributefilter>`__"]
            does not
            `contain <https://infra.spec.whatwg.org/#list-contain>`__
            ``name`` or ``namespace`` is non-null
         -  ``type`` is "``characterData``" and
            ``options``\ ["```characterData`` <#dom-mutationobserverinit-characterdata>`__"]
            either does not
            `exist <https://infra.spec.whatwg.org/#map-exists>`__ or is
            false
         -  ``type`` is "``childList``" and
            ``options``\ ["```childList`` <#dom-mutationobserverinit-childlist>`__"]
            is false

         then:

         #. Let ``mo`` be ``registered``\ ’s
            `observer <#registered-observer-observer>`__.

         #. If ``interestedObservers``\ [``mo``] does not
            `exist <https://infra.spec.whatwg.org/#map-exists>`__, then
            `set <https://infra.spec.whatwg.org/#map-set>`__
            ``interestedObservers``\ [``mo``] to null.

         #. If either ``type`` is "``attributes``" and
            ``options``\ ["```attributeOldValue`` <#dom-mutationobserverinit-attributeoldvalue>`__"]
            is true, or ``type`` is "``characterData``" and
            ``options``\ ["```characterDataOldValue`` <#dom-mutationobserverinit-characterdataoldvalue>`__"]
            is true, then
            `set <https://infra.spec.whatwg.org/#map-set>`__
            ``interestedObservers``\ [``mo``] to ``oldValue``.

   #. `For each <https://infra.spec.whatwg.org/#map-iterate>`__
      ``observer`` → ``mappedOldValue`` of ``interestedObservers``:

      #. Let ``record`` be a new
         ```MutationRecord`` <#mutationrecord>`__ object with its
         ```type`` <#dom-mutationrecord-type>`__ set to ``type``,
         ```target`` <#dom-mutationrecord-target>`__ set to ``target``,
         ```attributeName`` <#dom-mutationrecord-attributename>`__ set
         to ``name``,
         ```attributeNamespace`` <#dom-mutationrecord-attributenamespace>`__
         set to ``namespace``,
         ```oldValue`` <#dom-mutationrecord-oldvalue>`__ set to
         ``mappedOldValue``,
         ```addedNodes`` <#dom-mutationrecord-addednodes>`__ set to
         ``addedNodes``,
         ```removedNodes`` <#dom-mutationrecord-removednodes>`__ set to
         ``removedNodes``,
         ```previousSibling`` <#dom-mutationrecord-previoussibling>`__
         set to ``previousSibling``, and
         ```nextSibling`` <#dom-mutationrecord-nextsibling>`__ set to
         ``nextSibling``.

      #. `Enqueue <https://infra.spec.whatwg.org/#queue-enqueue>`__
         ``record`` to ``observer``\ ’s `record
         queue <#concept-mo-queue>`__.

      #. `Append <https://infra.spec.whatwg.org/#set-append>`__
         ``observer`` to the `surrounding
         agent <https://tc39.es/ecma262/#surrounding-agent>`__\ ’s
         `pending mutation observers <#mutation-observer-list>`__.

   #. `Queue a mutation observer
      microtask <#queue-a-mutation-observer-compound-microtask>`__.

   To queue a tree mutation record for ``target`` with ``addedNodes``,
   ``removedNodes``, ``previousSibling``, and ``nextSibling``, run these
   steps:

   #. Assert: either ``addedNodes`` or ``removedNodes`` `is not
      empty <https://infra.spec.whatwg.org/#list-is-empty>`__.

   #. `Queue a mutation record <#queue-a-mutation-record>`__ of
      "``childList``" for ``target`` with null, null, null,
      ``addedNodes``, ``removedNodes``, ``previousSibling``, and
      ``nextSibling``.


/4.3.3. Interface MutationRecord
================================

   .. .. rubric:: 4.3.3. Interface
      ```MutationRecord`` <#mutationrecord>`__ ` <#interface-mutationrecord>`__
      :name: interface-mutationrecord
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface MutationRecord {
        readonly attribute DOMString type;
        [SameObject] readonly attribute Node target;
        [SameObject] readonly attribute NodeList addedNodes;
        [SameObject] readonly attribute NodeList removedNodes;
        readonly attribute Node? previousSibling;
        readonly attribute Node? nextSibling;
        readonly attribute DOMString? attributeName;
        readonly attribute DOMString? attributeNamespace;
        readonly attribute DOMString? oldValue;
      };

   ``record`` ``.`` ```type`` <#dom-mutationrecord-type>`__
      Returns "``attributes``" if it was an
      `attribute <#concept-attribute>`__ mutation. "``characterData``"
      if it was a mutation to a ```CharacterData`` <#characterdata>`__
      `node <#concept-node>`__. And "``childList``" if it was a mutation
      to the `tree <#concept-tree>`__ of `nodes <#concept-node>`__.
   ``record`` ``.`` ```target`` <#dom-mutationrecord-target>`__
      Returns the `node <#concept-node>`__ the mutation affected,
      depending on the ```type`` <#dom-mutationrecord-type>`__. For
      "``attributes``", it is the `element <#concept-element>`__ whose
      `attribute <#concept-attribute>`__ changed. For
      "``characterData``", it is the
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__.
      For "``childList``", it is the `node <#concept-node>`__ whose
      `children <#concept-tree-child>`__ changed.
   ``record`` ``.`` ```addedNodes`` <#dom-mutationrecord-addednodes>`__
   ``record`` ``.`` ```removedNodes`` <#dom-mutationrecord-removednodes>`__
      Return the `nodes <#concept-node>`__ added and removed
      respectively.
   ``record`` ``.`` ```previousSibling`` <#dom-mutationrecord-previoussibling>`__
   ``record`` ``.`` ```nextSibling`` <#dom-mutationrecord-nextsibling>`__
      Return the `previous <#concept-tree-previous-sibling>`__ and `next
      sibling <#concept-tree-next-sibling>`__ respectively of the added
      or removed `nodes <#concept-node>`__; otherwise null.
   ``record`` ``.`` ```attributeName`` <#dom-mutationrecord-attributename>`__
      Returns the `local name <#concept-attribute-local-name>`__ of the
      changed `attribute <#concept-attribute>`__; otherwise null.
   ``record`` ``.`` ```attributeNamespace`` <#dom-mutationrecord-attributenamespace>`__
      Returns the `namespace <#concept-attribute-namespace>`__ of the
      changed `attribute <#concept-attribute>`__; otherwise null.
   ``record`` ``.`` ```oldValue`` <#dom-mutationrecord-oldvalue>`__
      The return value depends on
      ```type`` <#dom-mutationrecord-type>`__. For "``attributes``", it
      is the `value <#concept-attribute-value>`__ of the changed
      `attribute <#concept-attribute>`__ before the change. For
      "``characterData``", it is the `data <#concept-cd-data>`__ of the
      changed `node <#concept-node>`__ before the change. For
      "``childList``", it is null.

   The ``type``, ``target``, ``addedNodes``, ``removedNodes``,
   ``previousSibling``, ``nextSibling``, ``attributeName``,
   ``attributeNamespace``, and ``oldValue`` attributes must return the
   values they were initialized to.


/4.4. Interface Node
====================

   .. .. rubric:: 4.4. Interface
      ```Node`` <#node>`__ ` <#interface-node>`__
      :name: interface-node
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Node : EventTarget {
        const unsigned short ELEMENT_NODE = 1;
        const unsigned short ATTRIBUTE_NODE = 2;
        const unsigned short TEXT_NODE = 3;
        const unsigned short CDATA_SECTION_NODE = 4;
        const unsigned short ENTITY_REFERENCE_NODE = 5; // legacy
        const unsigned short ENTITY_NODE = 6; // legacy
        const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
        const unsigned short COMMENT_NODE = 8;
        const unsigned short DOCUMENT_NODE = 9;
        const unsigned short DOCUMENT_TYPE_NODE = 10;
        const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
        const unsigned short NOTATION_NODE = 12; // legacy
        readonly attribute unsigned short nodeType;
        readonly attribute DOMString nodeName;

        readonly attribute USVString baseURI;

        readonly attribute boolean isConnected;
        readonly attribute Document? ownerDocument;
        Node getRootNode(optional GetRootNodeOptions options = {});
        readonly attribute Node? parentNode;
        readonly attribute Element? parentElement;
        boolean hasChildNodes();
        [SameObject] readonly attribute NodeList childNodes;
        readonly attribute Node? firstChild;
        readonly attribute Node? lastChild;
        readonly attribute Node? previousSibling;
        readonly attribute Node? nextSibling;

        [CEReactions] attribute DOMString? nodeValue;
        [CEReactions] attribute DOMString? textContent;
        [CEReactions] undefined normalize();

        [CEReactions, NewObject] Node cloneNode(optional boolean deep = false);
        boolean isEqualNode(Node? otherNode);
        boolean isSameNode(Node? otherNode); // legacy alias of ===

        const unsigned short DOCUMENT_POSITION_DISCONNECTED = 0x01;
        const unsigned short DOCUMENT_POSITION_PRECEDING = 0x02;
        const unsigned short DOCUMENT_POSITION_FOLLOWING = 0x04;
        const unsigned short DOCUMENT_POSITION_CONTAINS = 0x08;
        const unsigned short DOCUMENT_POSITION_CONTAINED_BY = 0x10;
        const unsigned short DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
        unsigned short compareDocumentPosition(Node other);
        boolean contains(Node? other);

        DOMString? lookupPrefix(DOMString? namespace);
        DOMString? lookupNamespaceURI(DOMString? prefix);
        boolean isDefaultNamespace(DOMString? namespace);

        [CEReactions] Node insertBefore(Node node, Node? child);
        [CEReactions] Node appendChild(Node node);
        [CEReactions] Node replaceChild(Node node, Node child);
        [CEReactions] Node removeChild(Node child);
      };

      dictionary GetRootNodeOptions {
        boolean composed = false;
      };

   ```Node`` <#node>`__ is an abstract interface that is used by all
   `nodes <#concept-node>`__. You cannot get a direct instance of it.

   Each `node <#concept-node>`__ has an associated node document, set
   upon creation, that is a `document <#concept-document>`__.

   A `node <#concept-node>`__\ ’s `node
   document <#concept-node-document>`__ can be changed by the
   `adopt <#concept-node-adopt>`__ algorithm.

   A `node <#concept-node>`__\ ’s `get the parent <#get-the-parent>`__
   algorithm, given an ``event``, returns the
   `node <#concept-node>`__\ ’s `assigned
   slot <#slotable-assigned-slot>`__, if `node <#concept-node>`__ is
   `assigned <#slotable-assigned>`__; otherwise
   `node <#concept-node>`__\ ’s `parent <#concept-tree-parent>`__.

   Each `node <#concept-node>`__ also has a `registered observer
   list <#registered-observer-list>`__.

   --------------

   ``node`` ``.`` ```nodeType`` <#dom-node-nodetype>`__
      Returns a number appropriate for the type of ``node``, as follows:

      ```Element`` <#element>`__
         ```Node`` <#node>`__ ``.`` ```ELEMENT_NODE`` <#dom-node-element_node>`__
         (1).
      ```Attr`` <#attr>`__
         ```Node`` <#node>`__ ``.`` ```ATTRIBUTE_NODE`` <#dom-node-attribute_node>`__
         (2).
      An `exclusive ``Text`` node <#exclusive-text-node>`__
         ```Node`` <#node>`__ ``.`` ```TEXT_NODE`` <#dom-node-text_node>`__
         (3).
      ```CDATASection`` <#cdatasection>`__
         ```Node`` <#node>`__ ``.`` ```CDATA_SECTION_NODE`` <#dom-node-cdata_section_node>`__
         (4).
      ```ProcessingInstruction`` <#processinginstruction>`__
         ```Node`` <#node>`__ ``.`` ```PROCESSING_INSTRUCTION_NODE`` <#dom-node-processing_instruction_node>`__
         (7).
      ```Comment`` <#comment>`__
         ```Node`` <#node>`__ ``.`` ```COMMENT_NODE`` <#dom-node-comment_node>`__
         (8).
      ```Document`` <#document>`__
         ```Node`` <#node>`__ ``.`` ```DOCUMENT_NODE`` <#dom-node-document_node>`__
         (9).
      ```DocumentType`` <#documenttype>`__
         ```Node`` <#node>`__ ``.`` ```DOCUMENT_TYPE_NODE`` <#dom-node-document_type_node>`__
         (10).
      ```DocumentFragment`` <#documentfragment>`__
         ```Node`` <#node>`__ ``.`` ```DOCUMENT_FRAGMENT_NODE`` <#dom-node-document_fragment_node>`__
         (11).

   ``node`` ``.`` ```nodeName`` <#dom-node-nodename>`__
      Returns a string appropriate for the type of ``node``, as follows:

      ```Element`` <#element>`__
         Its `HTML-uppercased qualified
         name <#element-html-uppercased-qualified-name>`__.
      ```Attr`` <#attr>`__
         Its `qualified name <#concept-attribute-qualified-name>`__.
      An `exclusive ``Text`` node <#exclusive-text-node>`__
         "``#text``".
      ```CDATASection`` <#cdatasection>`__
         "``#cdata-section``".
      ```ProcessingInstruction`` <#processinginstruction>`__
         Its `target <#concept-pi-target>`__.
      ```Comment`` <#comment>`__
         "``#comment``".
      ```Document`` <#document>`__
         "``#document``".
      ```DocumentType`` <#documenttype>`__
         Its `name <#concept-doctype-name>`__.
      ```DocumentFragment`` <#documentfragment>`__
         "``#document-fragment``".

   The ``nodeType`` getter steps are to return the first matching
   statement, switching on the interface
   `this <https://webidl.spec.whatwg.org/#this>`__
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```Element`` <#element>`__
      ``ELEMENT_NODE`` (1)
   ```Attr`` <#attr>`__
      ``ATTRIBUTE_NODE`` (2);
   An `exclusive ``Text`` node <#exclusive-text-node>`__
      ``TEXT_NODE`` (3);
   ```CDATASection`` <#cdatasection>`__
      ``CDATA_SECTION_NODE`` (4);
   ```ProcessingInstruction`` <#processinginstruction>`__
      ``PROCESSING_INSTRUCTION_NODE`` (7);
   ```Comment`` <#comment>`__
      ``COMMENT_NODE`` (8);
   ```Document`` <#document>`__
      ``DOCUMENT_NODE`` (9);
   ```DocumentType`` <#documenttype>`__
      ``DOCUMENT_TYPE_NODE`` (10);
   ```DocumentFragment`` <#documentfragment>`__
      ``DOCUMENT_FRAGMENT_NODE`` (11).

   The ``nodeName`` getter steps are to return the first matching
   statement, switching on the interface
   `this <https://webidl.spec.whatwg.org/#this>`__
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```Element`` <#element>`__
      Its `HTML-uppercased qualified
      name <#element-html-uppercased-qualified-name>`__.
   ```Attr`` <#attr>`__
      Its `qualified name <#concept-attribute-qualified-name>`__.
   An `exclusive ``Text`` node <#exclusive-text-node>`__
      "``#text``".
   ```CDATASection`` <#cdatasection>`__
      "``#cdata-section``".
   ```ProcessingInstruction`` <#processinginstruction>`__
      Its `target <#concept-pi-target>`__.
   ```Comment`` <#comment>`__
      "``#comment``".
   ```Document`` <#document>`__
      "``#document``".
   ```DocumentType`` <#documenttype>`__
      Its `name <#concept-doctype-name>`__.
   ```DocumentFragment`` <#documentfragment>`__
      "``#document-fragment``".

   --------------

   ``node`` ``.`` ```baseURI`` <#dom-node-baseuri>`__
      Returns ``node``\ ’s `node
      document <#concept-node-document>`__\ ’s `document base
      URL <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url>`__.

   The ``baseURI`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
   document <#concept-node-document>`__\ ’s `document base
   URL <https://html.spec.whatwg.org/multipage/urls-and-fetching.html#document-base-url>`__,
   `serialized <https://url.spec.whatwg.org/#concept-url-serializer>`__.

   --------------

   ``node`` ``.`` ```isConnected`` <#dom-node-isconnected>`__
      Returns true if ``node`` is `connected <#connected>`__; otherwise
      false.

   ``node`` ``.`` ```ownerDocument`` <#dom-node-ownerdocument>`__
      Returns the `node document <#concept-node-document>`__. Returns
      null for `documents <#concept-document>`__.
   ``node`` ``.`` ```getRootNode()`` <#dom-node-getrootnode>`__
      Returns ``node``\ ’s `root <#concept-tree-root>`__.
   ``node`` ``.`` ```getRootNode`` <#dom-node-getrootnode>`__ ``({ composed:true })``
      Returns ``node``\ ’s `shadow-including
      root <#concept-shadow-including-root>`__.
   ``node`` ``.`` ```parentNode`` <#dom-node-parentnode>`__
      Returns the `parent <#concept-tree-parent>`__.
   ``node`` ``.`` ```parentElement`` <#dom-node-parentelement>`__
      Returns the `parent element <#parent-element>`__.
   ``node`` ``.`` ```hasChildNodes()`` <#dom-node-haschildnodes>`__
      Returns whether ``node`` has `children <#concept-tree-child>`__.
   ``node`` ``.`` ```childNodes`` <#dom-node-childnodes>`__
      Returns the `children <#concept-tree-child>`__.
   ``node`` ``.`` ```firstChild`` <#dom-node-firstchild>`__
      Returns the `first child <#concept-tree-first-child>`__.
   ``node`` ``.`` ```lastChild`` <#dom-node-lastchild>`__
      Returns the `last child <#concept-tree-last-child>`__.
   ``node`` ``.`` ```previousSibling`` <#dom-node-previoussibling>`__
      Returns the `previous sibling <#concept-tree-previous-sibling>`__.
   ``node`` ``.`` ```nextSibling`` <#dom-node-nextsibling>`__
      Returns the `next sibling <#concept-tree-next-sibling>`__.

   The ``isConnected`` getter steps are to return true, if
   `this <https://webidl.spec.whatwg.org/#this>`__ is
   `connected <#connected>`__; otherwise false.

   The ``ownerDocument`` getter steps are to return null, if
   `this <https://webidl.spec.whatwg.org/#this>`__ is a
   `document <#concept-document>`__; otherwise
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
   document <#concept-node-document>`__.

   The `node document <#concept-node-document>`__ of a
   `document <#concept-document>`__ is that
   `document <#concept-document>`__ itself. All
   `nodes <#concept-node>`__ have a `node
   document <#concept-node-document>`__ at all times.

   The ``getRootNode(`` ``options`` ``)`` method steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `shadow-including
   root <#concept-shadow-including-root>`__ if
   ``options``\ ["```composed`` <#dom-getrootnodeoptions-composed>`__"]
   is true; otherwise
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `root <#concept-tree-root>`__.

   The ``parentNode`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `parent <#concept-tree-parent>`__.

   The ``parentElement`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `parent
   element <#parent-element>`__.

   The ``hasChildNodes()`` method steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__ has
   `children <#concept-tree-child>`__; otherwise false.

   The ``childNodes`` getter steps are to return a
   ```NodeList`` <#nodelist>`__ rooted at
   `this <https://webidl.spec.whatwg.org/#this>`__ matching only
   `children <#concept-tree-child>`__.

   The ``firstChild`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `first
   child <#concept-tree-first-child>`__.

   The ``lastChild`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `last
   child <#concept-tree-last-child>`__.

   The ``previousSibling`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `previous
   sibling <#concept-tree-previous-sibling>`__.

   The ``nextSibling`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `next
   sibling <#concept-tree-next-sibling>`__.

   --------------

   The ``nodeValue`` getter steps are to return the following, switching
   on the interface `this <https://webidl.spec.whatwg.org/#this>`__
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```Attr`` <#attr>`__
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `value <#concept-attribute-value>`__.
   ```CharacterData`` <#characterdata>`__
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `data <#concept-cd-data>`__.
   Otherwise
      Null.

   The ```nodeValue`` <#dom-node-nodevalue>`__ setter steps are to, if
   the given value is null, act as if it was the empty string instead,
   and then do as described below, switching on the interface
   `this <https://webidl.spec.whatwg.org/#this>`__
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```Attr`` <#attr>`__
      `Set an existing attribute
      value <#set-an-existing-attribute-value>`__ with
      `this <https://webidl.spec.whatwg.org/#this>`__ and the given
      value.

   ```CharacterData`` <#characterdata>`__
      `Replace data <#concept-cd-replace>`__ with node
      `this <https://webidl.spec.whatwg.org/#this>`__, offset 0, count
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `length <#concept-node-length>`__, and data the given value.

   Otherwise
      Do nothing.

   To get text content with a `node <#concept-node>`__ ``node``, return
   the following, switching on the interface ``node``
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```DocumentFragment`` <#documentfragment>`__
   ```Element`` <#element>`__
      The `descendant text content <#concept-descendant-text-content>`__
      of ``node``.
   ```Attr`` <#attr>`__
      ``node``\ ’s `value <#concept-attribute-value>`__.
   ```CharacterData`` <#characterdata>`__
      ``node``\ ’s `data <#concept-cd-data>`__.
   Otherwise
      Null.

   The ``textContent`` getter steps are to return the result of running
   `get text content <#get-text-content>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__.

   To string replace all with a string ``string`` within a
   `node <#concept-node>`__ ``parent``, run these steps:

   #. Let ``node`` be null.

   #. If ``string`` is not the empty string, then set ``node`` to a new
      ```Text`` <#text>`__ `node <#concept-node>`__ whose
      `data <#concept-cd-data>`__ is ``string`` and `node
      document <#concept-node-document>`__ is ``parent``\ ’s `node
      document <#concept-node-document>`__.

   #. `Replace all <#concept-node-replace-all>`__ with ``node`` within
      ``parent``.

   To set text content with a `node <#concept-node>`__ ``node`` and a
   string ``value``, do as defined below, switching on the interface
   ``node`` `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```DocumentFragment`` <#documentfragment>`__
   ```Element`` <#element>`__
      `String replace all <#string-replace-all>`__ with ``value`` within
      ``node``.

   ```Attr`` <#attr>`__
      `Set an existing attribute
      value <#set-an-existing-attribute-value>`__ with ``node`` and
      ``value``.

   ```CharacterData`` <#characterdata>`__
      `Replace data <#concept-cd-replace>`__ with node ``node``, offset
      0, count ``node``\ ’s `length <#concept-node-length>`__, and data
      ``value``.

   Otherwise
      Do nothing.

   The ```textContent`` <#dom-node-textcontent>`__ setter steps are to,
   if the given value is null, act as if it was the empty string
   instead, and then run `set text content <#set-text-content>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and the given value.

   --------------

   ``node`` ``.`` ```normalize()`` <#dom-node-normalize>`__
      Removes `empty <#concept-node-empty>`__ `exclusive ``Text``
      nodes <#exclusive-text-node>`__ and concatenates the
      `data <#concept-cd-data>`__ of remaining `contiguous exclusive
      ``Text`` nodes <#contiguous-exclusive-text-nodes>`__ into the
      first of their `nodes <#concept-node>`__.

   The ``normalize()`` method steps are to run these steps for each
   `descendant <#concept-tree-descendant>`__ `exclusive ``Text``
   node <#exclusive-text-node>`__ ``node`` of
   `this <https://webidl.spec.whatwg.org/#this>`__:

   #. Let ``length`` be ``node``\ ’s `length <#concept-node-length>`__.

   #. If ``length`` is zero, then `remove <#concept-node-remove>`__
      ``node`` and continue with the next `exclusive ``Text``
      node <#exclusive-text-node>`__, if any.

   #. Let ``data`` be the
      `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
      of the `data <#concept-cd-data>`__ of ``node``\ ’s `contiguous
      exclusive ``Text`` nodes <#contiguous-exclusive-text-nodes>`__
      (excluding itself), in `tree order <#concept-tree-order>`__.

   #. `Replace data <#concept-cd-replace>`__ with node ``node``, offset
      ``length``, count 0, and data ``data``.

   #. Let ``currentNode`` be ``node``\ ’s `next
      sibling <#concept-tree-next-sibling>`__.

   #. While ``currentNode`` is an `exclusive ``Text``
      node <#exclusive-text-node>`__:

      #. For each `live range <#concept-live-range>`__ whose `start
         node <#concept-range-start-node>`__ is ``currentNode``, add
         ``length`` to its `start
         offset <#concept-range-start-offset>`__ and set its `start
         node <#concept-range-start-node>`__ to ``node``.

      #. For each `live range <#concept-live-range>`__ whose `end
         node <#concept-range-end-node>`__ is ``currentNode``, add
         ``length`` to its `end offset <#concept-range-end-offset>`__
         and set its `end node <#concept-range-end-node>`__ to ``node``.

      #. For each `live range <#concept-live-range>`__ whose `start
         node <#concept-range-start-node>`__ is ``currentNode``\ ’s
         `parent <#concept-tree-parent>`__ and `start
         offset <#concept-range-start-offset>`__ is ``currentNode``\ ’s
         `index <#concept-tree-index>`__, set its `start
         node <#concept-range-start-node>`__ to ``node`` and its `start
         offset <#concept-range-start-offset>`__ to ``length``.

      #. For each `live range <#concept-live-range>`__ whose `end
         node <#concept-range-end-node>`__ is ``currentNode``\ ’s
         `parent <#concept-tree-parent>`__ and `end
         offset <#concept-range-end-offset>`__ is ``currentNode``\ ’s
         `index <#concept-tree-index>`__, set its `end
         node <#concept-range-end-node>`__ to ``node`` and its `end
         offset <#concept-range-end-offset>`__ to ``length``.

      #. Add ``currentNode``\ ’s `length <#concept-node-length>`__ to
         ``length``.

      #. Set ``currentNode`` to its `next
         sibling <#concept-tree-next-sibling>`__.

   #. `Remove <#concept-node-remove>`__ ``node``\ ’s `contiguous
      exclusive ``Text`` nodes <#contiguous-exclusive-text-nodes>`__
      (excluding itself), in `tree order <#concept-tree-order>`__.

   --------------

   ``node`` ``.`` ```cloneNode([`` ``deep`` ``= false])`` <#dom-node-clonenode>`__
      Returns a copy of ``node``. If ``deep`` is true, the copy also
      includes the ``node``\ ’s
      `descendants <#concept-tree-descendant>`__.
   ``node`` ``.`` ```isEqualNode(otherNode)`` <#dom-node-isequalnode>`__
      Returns whether ``node`` and ``otherNode`` have the same
      properties.

   .. container:: impl

      `Specifications <#other-applicable-specifications>`__ may define
      cloning steps for all or some `nodes <#concept-node>`__. The
      algorithm is passed ``copy``, ``node``, ``document``, and an
      optional *clone children flag*, as indicated in the
      `clone <#concept-node-clone>`__ algorithm.

      HTML defines `cloning steps <#concept-node-clone-ext>`__ for
      ```script`` <https://html.spec.whatwg.org/multipage/scripting.html#script>`__
      and
      ```input`` <https://html.spec.whatwg.org/multipage/input.html#the-input-element>`__
      elements. SVG ought to do the same for its
      ```script`` <https://html.spec.whatwg.org/multipage/scripting.html#script>`__
      elements, but does not call this out at the moment.

      To clone a ``node``, with an optional ``document`` and *clone
      children flag*, run these steps:

      #. If ``document`` is not given, let ``document`` be ``node``\ ’s
         `node document <#concept-node-document>`__.

      #. If ``node`` is an `element <#concept-element>`__, then:

         #. Let ``copy`` be the result of `creating an
            element <#concept-create-element>`__, given ``document``,
            ``node``\ ’s `local name <#concept-element-local-name>`__,
            ``node``\ ’s `namespace <#concept-element-namespace>`__,
            ``node``\ ’s `namespace
            prefix <#concept-element-namespace-prefix>`__, and
            ``node``\ ’s ```is`` value <#concept-element-is-value>`__,
            with the ``synchronous custom elements flag`` unset.

         #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``attribute`` in ``node``\ ’s `attribute
            list <#concept-element-attribute>`__:

            #. Let ``copyAttribute`` be a
               `clone <#concept-node-clone>`__ of ``attribute``.

            #. `Append <#concept-element-attributes-append>`__
               ``copyAttribute`` to ``copy``.

      #. Otherwise, let ``copy`` be a `node <#concept-node>`__ that
         `implements <https://webidl.spec.whatwg.org/#implements>`__ the
         same interfaces as ``node``, and fulfills these additional
         requirements, switching on the interface ``node``
         `implements <https://webidl.spec.whatwg.org/#implements>`__:

         ```Document`` <#document>`__
            Set ``copy``\ ’s `encoding <#concept-document-encoding>`__,
            `content type <#concept-document-content-type>`__,
            `URL <#concept-document-url>`__,
            `origin <#concept-document-origin>`__,
            `type <#concept-document-type>`__, and
            `mode <#concept-document-mode>`__ to those of ``node``.

         ```DocumentType`` <#documenttype>`__
            Set ``copy``\ ’s `name <#concept-doctype-name>`__, `public
            ID <#concept-doctype-publicid>`__, and `system
            ID <#concept-doctype-systemid>`__ to those of ``node``.

         ```Attr`` <#attr>`__
            Set ``copy``\ ’s
            `namespace <#concept-attribute-namespace>`__, `namespace
            prefix <#concept-attribute-namespace-prefix>`__, `local
            name <#concept-attribute-local-name>`__, and
            `value <#concept-attribute-value>`__ to those of ``node``.

         ```Text`` <#text>`__
         ```Comment`` <#comment>`__
            Set ``copy``\ ’s `data <#concept-cd-data>`__ to that of
            ``node``.

         ```ProcessingInstruction`` <#processinginstruction>`__
            Set ``copy``\ ’s `target <#concept-pi-target>`__ and
            `data <#concept-cd-data>`__ to those of ``node``.

         Otherwise
            Do nothing.

      #. Set ``copy``\ ’s `node document <#concept-node-document>`__ and
         ``document`` to ``copy``, if ``copy`` is a
         `document <#concept-document>`__, and set ``copy``\ ’s `node
         document <#concept-node-document>`__ to ``document`` otherwise.

      #. Run any `cloning steps <#concept-node-clone-ext>`__ defined for
         ``node`` in `other applicable
         specifications <#other-applicable-specifications>`__ and pass
         ``copy``, ``node``, ``document``, and the *clone children flag*
         if set, as parameters.

      #. If the *clone children flag* is set, then for each
         `child <#concept-tree-child>`__ ``child`` of ``node``, in `tree
         order <#concept-tree-order>`__:
         `append <#concept-node-append>`__ the result of
         `cloning <#concept-node-clone>`__ ``child`` with ``document``
         and the *clone children flag* set, to ``copy``.

      #. If ``node`` is a `shadow host <#element-shadow-host>`__ whose
         `shadow root <#concept-shadow-root>`__\ ’s
         `clonable <#shadowroot-clonable>`__ is true:

         #. Assert: ``copy`` is not a `shadow
            host <#element-shadow-host>`__.

         #. Run `attach a shadow root <#concept-attach-a-shadow-root>`__
            with ``copy``, ``node``\ ’s `shadow
            root <#concept-element-shadow-root>`__\ ’s
            `mode <#shadowroot-mode>`__, true, ``node``\ ’s `shadow
            root <#concept-element-shadow-root>`__\ ’s
            `serializable <#shadowroot-serializable>`__, ``node``\ ’s
            `shadow root <#concept-element-shadow-root>`__\ ’s
            `delegates focus <#shadowroot-delegates-focus>`__, and
            ``node``\ ’s `shadow
            root <#concept-element-shadow-root>`__\ ’s `slot
            assignment <#shadowroot-slot-assignment>`__.

         #. Set ``copy``\ ’s `shadow
            root <#concept-element-shadow-root>`__\ ’s
            `declarative <#shadowroot-declarative>`__ to ``node``\ ’s
            `shadow root <#concept-element-shadow-root>`__\ ’s
            `declarative <#shadowroot-declarative>`__.

         #. For each `child <#concept-tree-child>`__ ``child`` of
            ``node``\ ’s `shadow root <#concept-element-shadow-root>`__,
            in `tree order <#concept-tree-order>`__:
            `append <#concept-node-append>`__ the result of
            `cloning <#concept-node-clone>`__ ``child`` with
            ``document`` and the *clone children flag* set, to
            ``copy``\ ’s `shadow root <#concept-element-shadow-root>`__.

      #. Return ``copy``.

      The ``cloneNode(`` ``deep`` ``)`` method steps are:

      #. If `this <https://webidl.spec.whatwg.org/#this>`__ is a `shadow
         root <#concept-shadow-root>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. Return a `clone <#concept-node-clone>`__ of
         `this <https://webidl.spec.whatwg.org/#this>`__, with the
         *clone children flag* set if ``deep`` is true.

      A `node <#concept-node>`__ ``A`` equals a `node <#concept-node>`__
      ``B`` if all of the following conditions are true:

      -  ``A`` and ``B``
         `implement <https://webidl.spec.whatwg.org/#implements>`__ the
         same interfaces.

      -  The following are equal, switching on the interface ``A``
         `implements <https://webidl.spec.whatwg.org/#implements>`__:

         ```DocumentType`` <#documenttype>`__
            Its `name <#concept-doctype-name>`__, `public
            ID <#concept-doctype-publicid>`__, and `system
            ID <#concept-doctype-systemid>`__.
         ```Element`` <#element>`__
            Its `namespace <#concept-element-namespace>`__, `namespace
            prefix <#concept-element-namespace-prefix>`__, `local
            name <#concept-element-local-name>`__, and its `attribute
            list <#concept-element-attribute>`__\ ’s
            `size <https://infra.spec.whatwg.org/#list-size>`__.
         ```Attr`` <#attr>`__
            Its `namespace <#concept-attribute-namespace>`__, `local
            name <#concept-attribute-local-name>`__, and
            `value <#concept-attribute-value>`__.
         ```ProcessingInstruction`` <#processinginstruction>`__
            Its `target <#concept-pi-target>`__ and
            `data <#concept-cd-data>`__.
         ```Text`` <#text>`__
         ```Comment`` <#comment>`__
            Its `data <#concept-cd-data>`__.
         Otherwise
            —

      -  If ``A`` is an `element <#concept-element>`__, each
         `attribute <#concept-attribute>`__ in its `attribute
         list <#concept-element-attribute>`__ has an
         `attribute <#concept-attribute>`__ that
         `equals <#concept-node-equals>`__ an
         `attribute <#concept-attribute>`__ in ``B``\ ’s `attribute
         list <#concept-element-attribute>`__.

      -  ``A`` and ``B`` have the same number of
         `children <#concept-tree-child>`__.

      -  Each `child <#concept-tree-child>`__ of ``A``
         `equals <#concept-node-equals>`__ the
         `child <#concept-tree-child>`__ of ``B`` at the identical
         `index <#concept-tree-index>`__.

      The ``isEqualNode(`` ``otherNode`` ``)`` method steps are to
      return true if ``otherNode`` is non-null and
      `this <https://webidl.spec.whatwg.org/#this>`__
      `equals <#concept-node-equals>`__ ``otherNode``; otherwise false.

      The ``isSameNode(`` ``otherNode`` ``)`` method steps are to
      return true if ``otherNode`` is
      `this <https://webidl.spec.whatwg.org/#this>`__; otherwise false.

   --------------

   ``node`` ``.`` ```compareDocumentPosition(other)`` <#dom-node-comparedocumentposition>`__
      Returns a bitmask indicating the position of ``other`` relative to
      ``node``. These are the bits that can be set:

      ```Node`` <#node>`__ ``.`` ```DOCUMENT_POSITION_DISCONNECTED`` <#dom-node-document_position_disconnected>`__ (1)
         Set when ``node`` and ``other`` are not in the same
         `tree <#concept-tree>`__.
      ```Node`` <#node>`__ ``.`` ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__ (2)
         Set when ``other`` is `preceding <#concept-tree-preceding>`__
         ``node``.
      ```Node`` <#node>`__ ``.`` ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__ (4)
         Set when ``other`` is `following <#concept-tree-following>`__
         ``node``.
      ```Node`` <#node>`__ ``.`` ```DOCUMENT_POSITION_CONTAINS`` <#dom-node-document_position_contains>`__ (8)
         Set when ``other`` is an `ancestor <#concept-tree-ancestor>`__
         of ``node``.
      ```Node`` <#node>`__ ``.`` ```DOCUMENT_POSITION_CONTAINED_BY`` <#dom-node-document_position_contained_by>`__ (16, 10 in hexadecimal)
         Set when ``other`` is a
         `descendant <#concept-tree-descendant>`__ of ``node``.
   ``node`` ``.`` ```contains(other)`` <#dom-node-contains>`__
      Returns true if ``other`` is an `inclusive
      descendant <#concept-tree-inclusive-descendant>`__ of ``node``;
      otherwise false.

   These are the constants
   ```compareDocumentPosition()`` <#dom-node-comparedocumentposition>`__
   returns as mask:

   -  ``DOCUMENT_POSITION_DISCONNECTED`` (1);
   -  ``DOCUMENT_POSITION_PRECEDING`` (2);
   -  ``DOCUMENT_POSITION_FOLLOWING`` (4);
   -  ``DOCUMENT_POSITION_CONTAINS`` (8);
   -  ``DOCUMENT_POSITION_CONTAINED_BY`` (16, 10 in hexadecimal);
   -  ``DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`` (32, 20 in
      hexadecimal).

   The ``compareDocumentPosition(`` ``other`` ``)`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is ``other``,
      then return zero.

   #. Let ``node1`` be ``other`` and ``node2`` be
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. Let ``attr1`` and ``attr2`` be null.

   #. If ``node1`` is an `attribute <#concept-attribute>`__, then set
      ``attr1`` to ``node1`` and ``node1`` to ``attr1``\ ’s
      `element <#concept-attribute-element>`__.

   #. If ``node2`` is an `attribute <#concept-attribute>`__, then:

      #. Set ``attr2`` to ``node2`` and ``node2`` to ``attr2``\ ’s
         `element <#concept-attribute-element>`__.

      #. If ``attr1`` and ``node1`` are non-null, and ``node2`` is
         ``node1``, then:

         #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
            ``attr`` in ``node2``\ ’s `attribute
            list <#concept-element-attribute>`__:

            #. If ``attr`` `equals <#concept-node-equals>`__ ``attr1``,
               then return the result of adding
               ```DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`` <#dom-node-document_position_implementation_specific>`__
               and
               ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__.

            #. If ``attr`` `equals <#concept-node-equals>`__ ``attr2``,
               then return the result of adding
               ```DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`` <#dom-node-document_position_implementation_specific>`__
               and
               ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__.

   #. If ``node1`` or ``node2`` is null, or ``node1``\ ’s
      `root <#concept-tree-root>`__ is not ``node2``\ ’s
      `root <#concept-tree-root>`__, then return the result of adding
      ```DOCUMENT_POSITION_DISCONNECTED`` <#dom-node-document_position_disconnected>`__,
      ```DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC`` <#dom-node-document_position_implementation_specific>`__,
      and either
      ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__
      or
      ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__,
      with the constraint that this is to be consistent, together.

      Whether to return
      ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__
      or
      ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__
      is typically implemented via pointer comparison. In JavaScript
      implementations a cached ``Math.random()`` value can be used.

   #. If ``node1`` is an `ancestor <#concept-tree-ancestor>`__ of
      ``node2`` and ``attr1`` is null, or ``node1`` is ``node2`` and
      ``attr2`` is non-null, then return the result of adding
      ```DOCUMENT_POSITION_CONTAINS`` <#dom-node-document_position_contains>`__
      to
      ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__.

   #. If ``node1`` is a `descendant <#concept-tree-descendant>`__ of
      ``node2`` and ``attr2`` is null, or ``node1`` is ``node2`` and
      ``attr1`` is non-null, then return the result of adding
      ```DOCUMENT_POSITION_CONTAINED_BY`` <#dom-node-document_position_contained_by>`__
      to
      ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__.

   #. If ``node1`` is `preceding <#concept-tree-preceding>`__ ``node2``,
      then return
      ```DOCUMENT_POSITION_PRECEDING`` <#dom-node-document_position_preceding>`__.

      Due to the way `attributes <#concept-attribute>`__ are handled in
      this algorithm this results in a `node <#concept-node>`__\ ’s
      `attributes <#concept-attribute>`__ counting as
      `preceding <#concept-tree-preceding>`__ that
      `node <#concept-node>`__\ ’s `children <#concept-tree-child>`__,
      despite `attributes <#concept-attribute>`__ not
      `participating <#concept-tree-participate>`__ in the same
      `tree <#concept-tree>`__.

   #. Return
      ```DOCUMENT_POSITION_FOLLOWING`` <#dom-node-document_position_following>`__.

   The ``contains(`` ``other`` ``)`` method steps are to return true
   if ``other`` is an `inclusive
   descendant <#concept-tree-inclusive-descendant>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__; otherwise false
   (including when ``other`` is null).

   --------------

   To locate a namespace prefix for an ``element`` using ``namespace``,
   run these steps:

   #. If ``element``\ ’s `namespace <#concept-element-namespace>`__ is
      ``namespace`` and its `namespace
      prefix <#concept-element-namespace-prefix>`__ is non-null, then
      return its `namespace
      prefix <#concept-element-namespace-prefix>`__.

   #. If ``element`` `has <#concept-element-attribute-has>`__ an
      `attribute <#concept-attribute>`__ whose `namespace
      prefix <#concept-attribute-namespace-prefix>`__ is "``xmlns``" and
      `value <#concept-attribute-value>`__ is ``namespace``, then return
      ``element``\ ’s first such `attribute <#concept-attribute>`__\ ’s
      `local name <#concept-attribute-local-name>`__.

   #. If ``element``\ ’s `parent element <#parent-element>`__ is not
      null, then return the result of running `locate a namespace
      prefix <#locate-a-namespace-prefix>`__ on that
      `element <#concept-element>`__ using ``namespace``.

   #. Return null.

   To locate a namespace for a ``node`` using ``prefix``, switch on the
   interface ``node``
   `implements <https://webidl.spec.whatwg.org/#implements>`__:

   ```Element`` <#element>`__
      #. If ``prefix`` is "``xml``", then return the `XML
         namespace <https://infra.spec.whatwg.org/#xml-namespace>`__.

      #. If ``prefix`` is "``xmlns``", then return the `XMLNS
         namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__.

      #. If its `namespace <#concept-element-namespace>`__ is non-null
         and its `namespace
         prefix <#concept-element-namespace-prefix>`__ is ``prefix``,
         then return `namespace <#concept-element-namespace>`__.

      #. If it `has <#concept-element-attribute-has>`__ an
         `attribute <#concept-attribute>`__ whose
         `namespace <#concept-attribute-namespace>`__ is the `XMLNS
         namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__,
         `namespace prefix <#concept-attribute-namespace-prefix>`__ is
         "``xmlns``", and `local name <#concept-attribute-local-name>`__
         is ``prefix``, or if ``prefix`` is null and it
         `has <#concept-element-attribute-has>`__ an
         `attribute <#concept-attribute>`__ whose
         `namespace <#concept-attribute-namespace>`__ is the `XMLNS
         namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__,
         `namespace prefix <#concept-attribute-namespace-prefix>`__ is
         null, and `local name <#concept-attribute-local-name>`__ is
         "``xmlns``", then return its
         `value <#concept-attribute-value>`__ if it is not the empty
         string, and null otherwise.

      #. If its `parent element <#parent-element>`__ is null, then
         return null.

      #. Return the result of running `locate a
         namespace <#locate-a-namespace>`__ on its `parent
         element <#parent-element>`__ using ``prefix``.

   ```Document`` <#document>`__
      #. If its `document element <#document-element>`__ is null, then
         return null.

      #. Return the result of running `locate a
         namespace <#locate-a-namespace>`__ on its `document
         element <#document-element>`__ using ``prefix``.

   ```DocumentType`` <#documenttype>`__
   ```DocumentFragment`` <#documentfragment>`__
      Return null.

   ```Attr`` <#attr>`__
      #. If its `element <#concept-attribute-element>`__ is null, then
         return null.

      #. Return the result of running `locate a
         namespace <#locate-a-namespace>`__ on its
         `element <#concept-attribute-element>`__ using ``prefix``.

   Otherwise
      #. If its `parent element <#parent-element>`__ is null, then
         return null.

      #. Return the result of running `locate a
         namespace <#locate-a-namespace>`__ on its `parent
         element <#parent-element>`__ using ``prefix``.

   The ``lookupPrefix(`` ``namespace`` ``)`` method steps are:

   #. If ``namespace`` is null or the empty string, then return null.

   #. Switch on the interface
      `this <https://webidl.spec.whatwg.org/#this>`__
      `implements <https://webidl.spec.whatwg.org/#implements>`__:

      ```Element`` <#element>`__
         Return the result of `locating a namespace
         prefix <#locate-a-namespace-prefix>`__ for it using
         ``namespace``.

      ```Document`` <#document>`__
         Return the result of `locating a namespace
         prefix <#locate-a-namespace-prefix>`__ for its `document
         element <#document-element>`__, if its `document
         element <#document-element>`__ is non-null; otherwise null.

      ```DocumentType`` <#documenttype>`__
      ```DocumentFragment`` <#documentfragment>`__
         Return null.

      ```Attr`` <#attr>`__
         Return the result of `locating a namespace
         prefix <#locate-a-namespace-prefix>`__ for its
         `element <#concept-attribute-element>`__, if its
         `element <#concept-attribute-element>`__ is non-null; otherwise
         null.

      Otherwise
         Return the result of `locating a namespace
         prefix <#locate-a-namespace-prefix>`__ for its `parent
         element <#parent-element>`__, if its `parent
         element <#parent-element>`__ is non-null; otherwise null.

   The ``lookupNamespaceURI(`` ``prefix`` ``)`` method steps are:

   #. If ``prefix`` is the empty string, then set it to null.

   #. Return the result of running `locate a
      namespace <#locate-a-namespace>`__ for
      `this <https://webidl.spec.whatwg.org/#this>`__ using ``prefix``.

   The ``isDefaultNamespace(`` ``namespace`` ``)`` method steps are:

   #. If ``namespace`` is the empty string, then set it to null.

   #. Let ``defaultNamespace`` be the result of running `locate a
      namespace <#locate-a-namespace>`__ for
      `this <https://webidl.spec.whatwg.org/#this>`__ using null.

   #. Return true if ``defaultNamespace`` is the same as ``namespace``;
      otherwise false.

   --------------

   The ``insertBefore(`` ``node`` ``,`` ``child`` ``)`` method steps
   are to return the result of
   `pre-inserting <#concept-node-pre-insert>`__ ``node`` into
   `this <https://webidl.spec.whatwg.org/#this>`__ before ``child``.

   The ``appendChild(`` ``node`` ``)`` method steps are to return the
   result of `appending <#concept-node-append>`__ ``node`` to
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``replaceChild(`` ``node`` ``,`` ``child`` ``)`` method steps
   are to return the result of `replacing <#concept-node-replace>`__
   ``child`` with ``node`` within
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``removeChild(`` ``child`` ``)`` method steps are to return the
   result of `pre-removing <#concept-node-pre-remove>`__ ``child`` from
   `this <https://webidl.spec.whatwg.org/#this>`__.

   --------------

   The list of elements with qualified name ``qualifiedName`` for a
   `node <#concept-node>`__ ``root`` is the
   ```HTMLCollection`` <#htmlcollection>`__ returned by the following
   algorithm:

   #. If ``qualifiedName`` is U+002A (\*), then return an
      ```HTMLCollection`` <#htmlcollection>`__ rooted at ``root``, whose
      filter matches only `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__.

   #. Otherwise, if ``root``\ ’s `node
      document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, return an
      ```HTMLCollection`` <#htmlcollection>`__ rooted at ``root``, whose
      filter matches the following
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__:

      -  Whose `namespace <#concept-element-namespace>`__ is the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__
         and whose `qualified name <#concept-element-qualified-name>`__
         is ``qualifiedName``, in `ASCII
         lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

      -  Whose `namespace <#concept-element-namespace>`__ is *not* the
         `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__
         and whose `qualified name <#concept-element-qualified-name>`__
         is ``qualifiedName``.

   #. Otherwise, return an ```HTMLCollection`` <#htmlcollection>`__
      rooted at ``root``, whose filter matches
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose `qualified
      name <#concept-element-qualified-name>`__ is ``qualifiedName``.

   When invoked with the same argument, and as long as ``root``\ ’s
   `node document <#concept-node-document>`__\ ’s
   `type <#concept-document-type>`__ has not changed, the same
   ```HTMLCollection`` <#htmlcollection>`__ object may be returned as
   returned by an earlier call.

   The list of elements with namespace ``namespace`` and local name
   ``localName`` for a `node <#concept-node>`__ ``root`` is the
   ```HTMLCollection`` <#htmlcollection>`__ returned by the following
   algorithm:

   #. If ``namespace`` is the empty string, then set it to null.

   #. If both ``namespace`` and ``localName`` are U+002A (\*), then
      return an ```HTMLCollection`` <#htmlcollection>`__ rooted at
      ``root``, whose filter matches
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__.

   #. If ``namespace`` is U+002A (\*), then return an
      ```HTMLCollection`` <#htmlcollection>`__ rooted at ``root``, whose
      filter matches `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose `local
      name <#concept-element-local-name>`__ is ``localName``.

   #. If ``localName`` is U+002A (\*), then return an
      ```HTMLCollection`` <#htmlcollection>`__ rooted at ``root``, whose
      filter matches `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose
      `namespace <#concept-element-namespace>`__ is ``namespace``.

   #. Return an ```HTMLCollection`` <#htmlcollection>`__ rooted at
      ``root``, whose filter matches
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose
      `namespace <#concept-element-namespace>`__ is ``namespace`` and
      `local name <#concept-element-local-name>`__ is ``localName``.

   When invoked with the same arguments, the same
   ```HTMLCollection`` <#htmlcollection>`__ object may be returned as
   returned by an earlier call.

   The list of elements with class names ``classNames`` for a
   `node <#concept-node>`__ ``root`` is the
   ```HTMLCollection`` <#htmlcollection>`__ returned by the following
   algorithm:

   #. Let ``classes`` be the result of running the `ordered set
      parser <#concept-ordered-set-parser>`__ on ``classNames``.

   #. If ``classes`` is the empty set, return an empty
      ```HTMLCollection`` <#htmlcollection>`__.

   #. Return an ```HTMLCollection`` <#htmlcollection>`__ rooted at
      ``root``, whose filter matches
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ that have all their
      `classes <#concept-class>`__ in ``classes``.

      The comparisons for the `classes <#concept-class>`__ must be done
      in an `ASCII
      case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__
      manner if ``root``\ ’s `node
      document <#concept-node-document>`__\ ’s
      `mode <#concept-document-mode>`__ is "``quirks``"; otherwise in an
      `identical to <https://infra.spec.whatwg.org/#string-is>`__
      manner.

   When invoked with the same argument, the same
   ```HTMLCollection`` <#htmlcollection>`__ object may be returned as
   returned by an earlier call.


/4.5. Interface Document
========================

   .. .. rubric:: 4.5. Interface
      ```Document`` <#document>`__ ` <#interface-document>`__
      :name: interface-document
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Document : Node {
        constructor();

        [SameObject] readonly attribute DOMImplementation implementation;
        readonly attribute USVString URL;
        readonly attribute USVString documentURI;
        readonly attribute DOMString compatMode;
        readonly attribute DOMString characterSet;
        readonly attribute DOMString charset; // legacy alias of .characterSet
        readonly attribute DOMString inputEncoding; // legacy alias of .characterSet
        readonly attribute DOMString contentType;

        readonly attribute DocumentType? doctype;
        readonly attribute Element? documentElement;
        HTMLCollection getElementsByTagName(DOMString qualifiedName);
        HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
        HTMLCollection getElementsByClassName(DOMString classNames);

        [CEReactions, NewObject] Element createElement(DOMString localName, optional (DOMString or ElementCreationOptions) options = {});
        [CEReactions, NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional (DOMString or ElementCreationOptions) options = {});
        [NewObject] DocumentFragment createDocumentFragment();
        [NewObject] Text createTextNode(DOMString data);
        [NewObject] CDATASection createCDATASection(DOMString data);
        [NewObject] Comment createComment(DOMString data);
        [NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);

        [CEReactions, NewObject] Node importNode(Node node, optional boolean deep = false);
        [CEReactions] Node adoptNode(Node node);

        [NewObject] Attr createAttribute(DOMString localName);
        [NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);

        [NewObject] Event createEvent(DOMString interface); // legacy

        [NewObject] Range createRange();

        // NodeFilter.SHOW_ALL = 0xFFFFFFFF
        [NewObject] NodeIterator createNodeIterator(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
        [NewObject] TreeWalker createTreeWalker(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
      };

      [Exposed=Window]
      interface XMLDocument : Document {};

      dictionary ElementCreationOptions {
        DOMString is;
      };

   ```Document`` <#document>`__ `nodes <#concept-node>`__ are simply
   known as documents.

   A `document <#concept-document>`__\ ’s `node
   document <#concept-node-document>`__ is itself.

   Each `document <#concept-document>`__ has an associated encoding (an
   `encoding <https://encoding.spec.whatwg.org/#encoding>`__), content
   type (a string), URL (a
   `URL <https://url.spec.whatwg.org/#concept-url>`__), origin (an
   `origin <https://html.spec.whatwg.org/multipage/browsers.html#concept-origin>`__),
   type ("``xml``" or "``html``"), mode ("``no-quirks``", "``quirks``",
   or "``limited-quirks``"), and allow declarative shadow roots (a
   boolean). `[ENCODING] <#biblio-encoding>`__ `[URL] <#biblio-url>`__
   `[HTML] <#biblio-html>`__

   Unless stated otherwise, a `document <#concept-document>`__\ ’s
   `encoding <#concept-document-encoding>`__ is the
   `utf-8 <https://encoding.spec.whatwg.org/#utf-8>`__
   `encoding <https://encoding.spec.whatwg.org/#encoding>`__, `content
   type <#concept-document-content-type>`__ is "``application/xml``",
   `URL <#concept-document-url>`__ is "``about:blank``",
   `origin <#concept-document-origin>`__ is an `opaque
   origin <https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque>`__,
   `type <#concept-document-type>`__ is "``xml``",
   `mode <#concept-document-mode>`__ is "``no-quirks``", and its `allow
   declarative shadow
   roots <#document-allow-declarative-shadow-roots>`__ is false.

   A `document <#concept-document>`__ is said to be an XML document if
   its `type <#concept-document-type>`__ is "``xml``"; otherwise an HTML
   document. Whether a `document <#concept-document>`__ is an `HTML
   document <#html-document>`__ or an `XML document <#xml-document>`__
   affects the behavior of certain APIs.

   A `document <#concept-document>`__ is said to be in no-quirks mode if
   its `mode <#concept-document-mode>`__ is "``no-quirks``", quirks mode
   if its `mode <#concept-document-mode>`__ is "``quirks``", and
   limited-quirks mode if its `mode <#concept-document-mode>`__ is
   "``limited-quirks``".

   .. note::

      The `mode <#concept-document-mode>`__ is only ever changed from
      the default for `documents <#concept-document>`__ created by the
      `HTML
      parser <https://html.spec.whatwg.org/multipage/parsing.html#html-parser>`__
      based on the presence, absence, or value of the DOCTYPE string,
      and by a new `browsing
      context <https://html.spec.whatwg.org/multipage/document-sequences.html#browsing-context>`__
      (initial "``about:blank``"). `[HTML] <#biblio-html>`__

      `No-quirks mode <#concept-document-no-quirks>`__ was originally
      known as "standards mode" and `limited-quirks
      mode <#concept-document-limited-quirks>`__ was once known as
      "almost standards mode". They have been renamed because their
      details are now defined by standards. (And because Ian Hickson
      vetoed their original names on the basis that they are
      nonsensical.)

   A `document <#concept-document>`__\ ’s `get the
   parent <#get-the-parent>`__ algorithm, given an ``event``, returns
   null if ``event``\ ’s ```type`` <#dom-event-type>`__ attribute value
   is "``load``" or `document <#concept-document>`__ does not have a
   `browsing
   context <https://html.spec.whatwg.org/multipage/document-sequences.html#concept-document-bc>`__;
   otherwise the `document <#concept-document>`__\ ’s `relevant global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global>`__.

   --------------

   ``document`` ``= new`` ```Document()`` <#dom-document-document>`__
      Returns a new `document <#concept-document>`__.
   ``document`` ``.`` ```implementation`` <#dom-document-implementation>`__
      Returns ``document``\ ’s
      ```DOMImplementation`` <#domimplementation>`__ object.
   ``document`` ``.`` ```URL`` <#dom-document-url>`__
   ``document`` ``.`` ```documentURI`` <#dom-document-documenturi>`__
      Returns ``document``\ ’s `URL <#concept-document-url>`__.
   ``document`` ``.`` ```compatMode`` <#dom-document-compatmode>`__
      Returns the string "``BackCompat``" if ``document``\ ’s
      `mode <#concept-document-mode>`__ is "``quirks``"; otherwise
      "``CSS1Compat``".
   ``document`` ``.`` ```characterSet`` <#dom-document-characterset>`__
      Returns ``document``\ ’s
      `encoding <#concept-document-encoding>`__.
   ``document`` ``.`` ```contentType`` <#dom-document-contenttype>`__
      Returns ``document``\ ’s `content
      type <#concept-document-content-type>`__.

   The ``new Document()`` constructor steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `origin <#concept-document-origin>`__ to the
   `origin <#concept-document-origin>`__ of `current global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object>`__\ ’s
   `associated
   ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__.
   `[HTML] <#biblio-html>`__

   Unlike
   ```createDocument()`` <#dom-domimplementation-createdocument>`__,
   this constructor does not return an
   ```XMLDocument`` <#xmldocument>`__ object, but a
   `document <#concept-document>`__ (```Document`` <#document>`__
   object).

   The ``implementation`` getter steps are to return the
   ```DOMImplementation`` <#domimplementation>`__ object that is
   associated with `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``URL`` and ``documentURI`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `URL <#concept-document-url>`__,
   `serialized <https://url.spec.whatwg.org/#concept-url-serializer>`__.

   The ``compatMode`` getter steps are to return "``BackCompat``" if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `mode <#concept-document-mode>`__ is "``quirks``"; otherwise
   "``CSS1Compat``".

   The ``characterSet``, ``charset``, and ``inputEncoding`` getter steps
   are to return `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `encoding <#concept-document-encoding>`__\ ’s
   `name <https://encoding.spec.whatwg.org/#name>`__.

   The ``contentType`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `content
   type <#concept-document-content-type>`__.

   --------------

   ``document`` . ```doctype`` <#dom-document-doctype>`__
      Returns the `doctype <#concept-doctype>`__ or null if there is
      none.
   ``document`` . ```documentElement`` <#dom-document-documentelement>`__
      Returns the `document element <#document-element>`__.
   ``collection`` = ``document`` . ```getElementsByTagName(qualifiedName)`` <#dom-document-getelementsbytagname>`__
      If ``qualifiedName`` is "``*``" returns an
      ```HTMLCollection`` <#htmlcollection>`__ of all
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__.

      Otherwise, returns an ```HTMLCollection`` <#htmlcollection>`__ of
      all `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose `qualified
      name <#concept-element-qualified-name>`__ is ``qualifiedName``.
      (Matches case-insensitively against
      `elements <#concept-element>`__ in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__
      within an `HTML document <#html-document>`__.)

   ``collection`` = ``document`` . ```getElementsByTagNameNS(namespace, localName)`` <#dom-document-getelementsbytagnamens>`__
      If ``namespace`` and ``localName`` are "``*``", returns an
      ```HTMLCollection`` <#htmlcollection>`__ of all
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__.

      If only ``namespace`` is "``*``", returns an
      ```HTMLCollection`` <#htmlcollection>`__ of all
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose `local
      name <#concept-element-local-name>`__ is ``localName``.

      If only ``localName`` is "``*``", returns an
      ```HTMLCollection`` <#htmlcollection>`__ of all
      `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose
      `namespace <#concept-element-namespace>`__ is ``namespace``.

      Otherwise, returns an ```HTMLCollection`` <#htmlcollection>`__ of
      all `descendant <#concept-tree-descendant>`__
      `elements <#concept-element>`__ whose
      `namespace <#concept-element-namespace>`__ is ``namespace`` and
      `local name <#concept-element-local-name>`__ is ``localName``.

   ``collection`` = ``document`` . ```getElementsByClassName(classNames)`` <#dom-document-getelementsbyclassname>`__
   ``collection`` = ``element`` . ```getElementsByClassName(classNames)`` <#dom-element-getelementsbyclassname>`__
      Returns an ```HTMLCollection`` <#htmlcollection>`__ of the
      `elements <#concept-element>`__ in the object on which the method
      was invoked (a `document <#concept-document>`__ or an
      `element <#concept-element>`__) that have all the classes given by
      ``classNames``. The ``classNames`` argument is interpreted as a
      space-separated list of classes.

   The ``doctype`` getter steps are to return the
   `child <#concept-tree-child>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__ that is a
   `doctype <#concept-doctype>`__; otherwise null.

   The ``documentElement`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `document
   element <#document-element>`__.

   The ``getElementsByTagName(`` ``qualifiedName`` ``)`` method steps
   are to return the `list of elements with qualified name
   ``qualifiedName`` <#concept-getelementsbytagname>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   Thus, in an `HTML document <#html-document>`__,
   ``document.getElementsByTagName("FOO")`` will match ``<FOO>``
   elements that are not in the `HTML
   namespace <https://infra.spec.whatwg.org/#html-namespace>`__, and
   ``<foo>`` elements that are in the `HTML
   namespace <https://infra.spec.whatwg.org/#html-namespace>`__, but not
   ``<FOO>`` elements that are in the `HTML
   namespace <https://infra.spec.whatwg.org/#html-namespace>`__.

   The
   ``getElementsByTagNameNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are to return the `list of elements with namespace
   ``namespace`` and local name
   ``localName`` <#concept-getelementsbytagnamens>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``getElementsByClassName(`` ``classNames`` ``)`` method steps
   are to return the `list of elements with class names
   ``classNames`` <#concept-getelementsbyclassname>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   .. container:: example
      :name: example-5ffcda00

      ` <#example-5ffcda00>`__ Given the following XHTML fragment:
      .. code:: lang-html

         <div id="example">
           <p id="p1" class="aaa bbb"/>
           <p id="p2" class="aaa ccc"/>
           <p id="p3" class="bbb ccc"/>
         </div>

      A call to
      ``document.getElementById("example").getElementsByClassName("aaa")``
      would return an ```HTMLCollection`` <#htmlcollection>`__ with the
      two paragraphs ``p1`` and ``p2`` in it.

      A call to ``getElementsByClassName("ccc bbb")`` would only return
      one node, however, namely ``p3``. A call to
      ``document.getElementById("example").getElementsByClassName("bbb  ccc ")``
      would return the same thing.

      A call to ``getElementsByClassName("aaa,bbb")`` would return no
      nodes; none of the elements above are in the ``aaa,bbb`` class.

   --------------

   ``element`` ``=`` ``document`` ``.`` ```createElement(localName [, options])`` <#dom-document-createelement>`__
      Returns an `element <#concept-element>`__ with ``localName`` as
      `local name <#concept-element-local-name>`__ (if ``document`` is
      an `HTML document <#html-document>`__, ``localName`` gets
      lowercased). The `element <#concept-element>`__\ ’s
      `namespace <#concept-element-namespace>`__ is the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ when
      ``document`` is an `HTML document <#html-document>`__ or
      ``document``\ ’s `content type <#concept-document-content-type>`__
      is "``application/xhtml+xml``"; otherwise null.

      If ``localName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be thrown.

      When supplied, ``options``\ ’s
      ```is`` <#dom-elementcreationoptions-is>`__ can be used to create
      a `customized built-in
      element <https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element>`__.

   ``element`` ``=`` ``document`` ``.`` ```createElementNS(namespace, qualifiedName [, options])`` <#dom-document-createelementns>`__
      Returns an `element <#concept-element>`__ with
      `namespace <#concept-element-namespace>`__ ``namespace``. Its
      `namespace prefix <#concept-element-namespace-prefix>`__ will be
      everything before U+003A (:) in ``qualifiedName`` or null. Its
      `local name <#concept-element-local-name>`__ will be everything
      after U+003A (:) in ``qualifiedName`` or ``qualifiedName``.

      If ``qualifiedName`` does not match the
      ```QName`` <https://www.w3.org/TR/xml-names/#NT-QName>`__
      production an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be thrown.

      If one of the following conditions is true a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be thrown:

      -  `Namespace prefix <#concept-element-namespace-prefix>`__ is not
         null and ``namespace`` is the empty string.
      -  `Namespace prefix <#concept-element-namespace-prefix>`__ is
         "``xml``" and ``namespace`` is not the `XML
         namespace <https://infra.spec.whatwg.org/#xml-namespace>`__.
      -  ``qualifiedName`` or `namespace
         prefix <#concept-element-namespace-prefix>`__ is "``xmlns``"
         and ``namespace`` is not the `XMLNS
         namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__.
      -  ``namespace`` is the `XMLNS
         namespace <https://infra.spec.whatwg.org/#xmlns-namespace>`__
         and neither ``qualifiedName`` nor `namespace
         prefix <#concept-element-namespace-prefix>`__ is "``xmlns``".

      When supplied, ``options``\ ’s
      ```is`` <#dom-elementcreationoptions-is>`__ can be used to create
      a `customized built-in
      element <https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element>`__.

   ``documentFragment`` ``=`` ``document`` ``.`` ```createDocumentFragment()`` <#dom-document-createdocumentfragment>`__
      Returns a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__.
   ``text`` ``=`` ``document`` ``.`` ```createTextNode(data)`` <#dom-document-createtextnode>`__
      Returns a ```Text`` <#text>`__ `node <#concept-node>`__ whose
      `data <#concept-cd-data>`__ is ``data``.
   ``text`` ``=`` ``document`` ``.`` ```createCDATASection(data)`` <#dom-document-createcdatasection>`__
      Returns a ```CDATASection`` <#cdatasection>`__
      `node <#concept-node>`__ whose `data <#concept-cd-data>`__ is
      ``data``.
   ``comment`` ``=`` ``document`` ``.`` ```createComment(data)`` <#dom-document-createcomment>`__
      Returns a ```Comment`` <#comment>`__ `node <#concept-node>`__
      whose `data <#concept-cd-data>`__ is ``data``.
   ``processingInstruction`` ``=`` ``document`` ``.`` ```createProcessingInstruction(target, data)`` <#dom-document-createprocessinginstruction>`__
      Returns a ```ProcessingInstruction`` <#processinginstruction>`__
      `node <#concept-node>`__ whose `target <#concept-pi-target>`__ is
      ``target`` and `data <#concept-cd-data>`__ is ``data``. If
      ``target`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be thrown. If ``data`` contains "``?>``" an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      will be thrown.

   The element interface for any ``name`` and ``namespace`` is
   ```Element`` <#element>`__, unless stated otherwise.

   The HTML Standard will, e.g., define that for ``html`` and the `HTML
   namespace <https://infra.spec.whatwg.org/#html-namespace>`__, the
   ```HTMLHtmlElement`` <https://html.spec.whatwg.org/multipage/semantics.html#htmlhtmlelement>`__
   interface is used. `[HTML] <#biblio-html>`__

   The ``createElement(`` ``localName`` ``,`` ``options`` ``)``
   method steps are:

   #. If ``localName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is an `HTML
      document <#html-document>`__, then set ``localName`` to
      ``localName`` in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. Let ``is`` be null.

   #. If ``options`` is a
      `dictionary <https://webidl.spec.whatwg.org/#dfn-dictionary>`__
      and ``options``\ ["```is`` <#dom-elementcreationoptions-is>`__"]
      `exists <https://infra.spec.whatwg.org/#map-exists>`__, then set
      ``is`` to it.

   #. Let ``namespace`` be the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__, if
      `this <https://webidl.spec.whatwg.org/#this>`__ is an `HTML
      document <#html-document>`__ or
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `content
      type <#concept-document-content-type>`__ is
      "``application/xhtml+xml``"; otherwise null.

   #. Return the result of `creating an
      element <#concept-create-element>`__ given
      `this <https://webidl.spec.whatwg.org/#this>`__, ``localName``,
      ``namespace``, null, ``is``, and with the
      ``synchronous custom elements`` flag set.

   The internal ``createElementNS`` steps, given ``document``,
   ``namespace``, ``qualifiedName``, and ``options``, are as follows:

   #. Let ``namespace``, ``prefix``, and ``localName`` be the result of
      passing ``namespace`` and ``qualifiedName`` to `validate and
      extract <#validate-and-extract>`__.

   #. Let ``is`` be null.

   #. If ``options`` is a
      `dictionary <https://webidl.spec.whatwg.org/#dfn-dictionary>`__
      and ``options``\ ["```is`` <#dom-elementcreationoptions-is>`__"]
      `exists <https://infra.spec.whatwg.org/#map-exists>`__, then set
      ``is`` to it.

   #. Return the result of `creating an
      element <#concept-create-element>`__ given ``document``,
      ``localName``, ``namespace``, ``prefix``, ``is``, and with the
      ``synchronous custom elements`` flag set.

   The
   ``createElementNS(`` ``namespace`` ``,`` ``qualifiedName`` ``,`` ``options`` ``)``
   method steps are to return the result of running the `internal
   ``createElementNS`` steps <#internal-createelementns-steps>`__, given
   `this <https://webidl.spec.whatwg.org/#this>`__, ``namespace``,
   ``qualifiedName``, and ``options``.

   ```createElement()`` <#dom-document-createelement>`__ and
   ```createElementNS()`` <#dom-document-createelementns>`__'s
   ``options`` parameter is allowed to be a string for web
   compatibility.

   The ``createDocumentFragment()`` method steps are to return a new
   ```DocumentFragment`` <#documentfragment>`__ `node <#concept-node>`__
   whose `node document <#concept-node-document>`__ is
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``createTextNode(`` ``data`` ``)`` method steps are to return a
   new ```Text`` <#text>`__ `node <#concept-node>`__ whose
   `data <#concept-cd-data>`__ is ``data`` and `node
   document <#concept-node-document>`__ is
   `this <https://webidl.spec.whatwg.org/#this>`__.

   No check is performed that ``data`` consists of characters that match
   the ```Char`` <https://www.w3.org/TR/xml/#NT-Char>`__ production.

   The ``createCDATASection(`` ``data`` ``)`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is an `HTML
      document <#html-document>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``data`` contains the string "``]]>``", then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return a new ```CDATASection`` <#cdatasection>`__
      `node <#concept-node>`__ with its `data <#concept-cd-data>`__ set
      to ``data`` and `node document <#concept-node-document>`__ set to
      `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``createComment(`` ``data`` ``)`` method steps are to return a
   new ```Comment`` <#comment>`__ `node <#concept-node>`__ whose
   `data <#concept-cd-data>`__ is ``data`` and `node
   document <#concept-node-document>`__ is
   `this <https://webidl.spec.whatwg.org/#this>`__.

   No check is performed that ``data`` consists of characters that match
   the ```Char`` <https://www.w3.org/TR/xml/#NT-Char>`__ production or
   that it contains two adjacent hyphens or ends with a hyphen.

   The
   ``createProcessingInstruction(`` ``target`` ``,`` ``data`` ``)``
   method steps are:

   #. If ``target`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   #. If ``data`` contains the string "``?>``", then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   #. Return a new
      ```ProcessingInstruction`` <#processinginstruction>`__
      `node <#concept-node>`__, with `target <#concept-pi-target>`__ set
      to ``target``, `data <#concept-cd-data>`__ set to ``data``, and
      `node document <#concept-node-document>`__ set to
      `this <https://webidl.spec.whatwg.org/#this>`__.

   No check is performed that ``target`` contains "``xml``" or "``:``",
   or that ``data`` contains characters that match the
   ```Char`` <https://www.w3.org/TR/xml/#NT-Char>`__ production.

   --------------

   ``clone`` = ``document`` . `importNode(``node`` [, ``deep`` = false]) <#dom-document-importnode>`__
      Returns a copy of ``node``. If ``deep`` is true, the copy also
      includes the ``node``\ ’s
      `descendants <#concept-tree-descendant>`__.

      If ``node`` is a `document <#concept-document>`__ or a `shadow
      root <#concept-shadow-root>`__, throws a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   ``node`` = ``document`` . ```adoptNode(node)`` <#dom-document-adoptnode>`__
      Moves ``node`` from another `document <#concept-document>`__ and
      returns it.

      If ``node`` is a `document <#concept-document>`__, throws a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      or, if ``node`` is a `shadow root <#concept-shadow-root>`__,
      throws a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   The ``importNode(`` ``node`` ``,`` ``deep`` ``)`` method steps
   are:

   #. If ``node`` is a `document <#concept-document>`__ or `shadow
      root <#concept-shadow-root>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return a `clone <#concept-node-clone>`__ of ``node``, with
      `this <https://webidl.spec.whatwg.org/#this>`__ and the *clone
      children flag* set if ``deep`` is true.

   `Specifications <#other-applicable-specifications>`__ may define
   adopting steps for all or some `nodes <#concept-node>`__. The
   algorithm is passed ``node`` and ``oldDocument``, as indicated in the
   `adopt <#concept-node-adopt>`__ algorithm.

   To adopt a ``node`` into a ``document``, run these steps:

   #. Let ``oldDocument`` be ``node``\ ’s `node
      document <#concept-node-document>`__.

   #. If ``node``\ ’s `parent <#concept-tree-parent>`__ is non-null,
      then `remove <#concept-node-remove>`__ ``node``.

   #. If ``document`` is not ``oldDocument``, then:

      #. For each ``inclusiveDescendant`` in ``node``\ ’s
         `shadow-including inclusive
         descendants <#concept-shadow-including-inclusive-descendant>`__:

         #. Set ``inclusiveDescendant``\ ’s `node
            document <#concept-node-document>`__ to ``document``.

         #. If ``inclusiveDescendant`` is an
            `element <#concept-element>`__, then set the `node
            document <#concept-node-document>`__ of each
            `attribute <#concept-attribute>`__ in
            ``inclusiveDescendant``\ ’s `attribute
            list <#concept-element-attribute>`__ to ``document``.

      #. For each ``inclusiveDescendant`` in ``node``\ ’s
         `shadow-including inclusive
         descendants <#concept-shadow-including-inclusive-descendant>`__
         that is `custom <#concept-element-custom>`__, `enqueue a custom
         element callback
         reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction>`__
         with ``inclusiveDescendant``, callback name
         "``adoptedCallback``", and an argument list containing
         ``oldDocument`` and ``document``.

      #. For each ``inclusiveDescendant`` in ``node``\ ’s
         `shadow-including inclusive
         descendants <#concept-shadow-including-inclusive-descendant>`__,
         in `shadow-including tree
         order <#concept-shadow-including-tree-order>`__, run the
         `adopting steps <#concept-node-adopt-ext>`__ with
         ``inclusiveDescendant`` and ``oldDocument``.

   The ``adoptNode(`` ``node`` ``)`` method steps are:

   #. If ``node`` is a `document <#concept-document>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is a `shadow root <#concept-shadow-root>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``node`` is a ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__ whose
      `host <#concept-documentfragment-host>`__ is non-null, then
      return.

   #. `Adopt <#concept-node-adopt>`__ ``node`` into
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. Return ``node``.

   --------------

   The ``createAttribute(`` ``localName`` ``)`` method steps are:

   #. If ``localName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production in
      XML, then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is an `HTML
      document <#html-document>`__, then set ``localName`` to
      ``localName`` in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. Return a new `attribute <#concept-attribute>`__ whose `local
      name <#concept-attribute-local-name>`__ is ``localName`` and `node
      document <#concept-node-document>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__.

   The
   ``createAttributeNS(`` ``namespace`` ``,`` ``qualifiedName`` ``)``
   method steps are:

   #. Let ``namespace``, ``prefix``, and ``localName`` be the result of
      passing ``namespace`` and ``qualifiedName`` to `validate and
      extract <#validate-and-extract>`__.

   #. Return a new `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace``,
      `namespace prefix <#concept-attribute-namespace-prefix>`__ is
      ``prefix``, `local name <#concept-attribute-local-name>`__ is
      ``localName``, and `node document <#concept-node-document>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__.

   --------------

   The ``createEvent(`` ``interface`` ``)`` method steps are:

   #. Let ``constructor`` be null.

   #. If ``interface`` is an `ASCII
      case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__
      match for any of the strings in the first column in the following
      table, then set ``constructor`` to the interface in the second
      column on the same row as the matching string:

      String

      Interface

      Notes

      "``beforeunloadevent``"

      ```BeforeUnloadEvent`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#beforeunloadevent>`__

      `[HTML] <#biblio-html>`__

      "``compositionevent``"

      ```CompositionEvent`` <https://w3c.github.io/uievents/#compositionevent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``customevent``"

      ```CustomEvent`` <#customevent>`__

      "``devicemotionevent``"

      ```DeviceMotionEvent`` <https://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion>`__

      `[DEVICE-ORIENTATION] <#biblio-device-orientation>`__

      "``deviceorientationevent``"

      ```DeviceOrientationEvent`` <https://w3c.github.io/deviceorientation/spec-source-orientation.html#devicemotion>`__

      "``dragevent``"

      ```DragEvent`` <https://html.spec.whatwg.org/multipage/dnd.html#dragevent>`__

      `[HTML] <#biblio-html>`__

      "``event``"

      ```Event`` <#event>`__

      "``events``"

      "``focusevent``"

      ```FocusEvent`` <https://w3c.github.io/uievents/#focusevent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``hashchangeevent``"

      ```HashChangeEvent`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#hashchangeevent>`__

      `[HTML] <#biblio-html>`__

      "``htmlevents``"

      ```Event`` <#event>`__

      "``keyboardevent``"

      ```KeyboardEvent`` <https://w3c.github.io/uievents/#keyboardevent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``messageevent``"

      ```MessageEvent`` <https://html.spec.whatwg.org/multipage/comms.html#messageevent>`__

      `[HTML] <#biblio-html>`__

      "``mouseevent``"

      ```MouseEvent`` <https://w3c.github.io/uievents/#mouseevent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``mouseevents``"

      "``storageevent``"

      ```StorageEvent`` <https://html.spec.whatwg.org/multipage/webstorage.html#storageevent>`__

      `[HTML] <#biblio-html>`__

      "``svgevents``"

      ```Event`` <#event>`__

      "``textevent``"

      ```TextEvent`` <https://w3c.github.io/uievents/#textevent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``touchevent``"

      ```TouchEvent`` <https://w3c.github.io/touch-events/#idl-def-touchevent>`__

      `[TOUCH-EVENTS] <#biblio-touch-events>`__

      "``uievent``"

      ```UIEvent`` <https://w3c.github.io/uievents/#uievent>`__

      `[UIEVENTS] <#biblio-uievents>`__

      "``uievents``"

   #. If ``constructor`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If the interface indicated by ``constructor`` is not exposed on
      the `relevant global
      object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global>`__
      of `this <https://webidl.spec.whatwg.org/#this>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      Typically user agents disable support for touch events in some
      configurations, in which case this clause would be triggered for
      the interface
      ```TouchEvent`` <https://w3c.github.io/touch-events/#idl-def-touchevent>`__.

   #. Let ``event`` be the result of `creating an
      event <#concept-event-create>`__ given ``constructor``.

   #. Initialize ``event``\ ’s ```type`` <#dom-event-type>`__ attribute
      to the empty string.

   #. Initialize ``event``\ ’s ```timeStamp`` <#dom-event-timestamp>`__
      attribute to the result of calling `current high resolution
      time <https://w3c.github.io/hr-time/#dfn-current-high-resolution-time>`__
      with `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `relevant
      global
      object <https://html.spec.whatwg.org/multipage/webappapis.html#concept-relevant-global>`__.

   #. Initialize ``event``\ ’s ```isTrusted`` <#dom-event-istrusted>`__
      attribute to false.

   #. Unset ``event``\ ’s `initialized flag <#initialized-flag>`__.

   #. Return ``event``.

   `Event <#concept-event>`__ constructors ought to be used instead.

   --------------

   The ``createRange()`` method steps are to return a new `live
   range <#concept-live-range>`__ with
   (`this <https://webidl.spec.whatwg.org/#this>`__, 0) as its
   `start <#concept-range-start>`__ an `end <#concept-range-end>`__.

   The ```Range()`` <#dom-range-range>`__ constructor can be used
   instead.

   --------------

   The
   ``createNodeIterator(`` ``root`` ``,`` ``whatToShow`` ``,`` ``filter`` ``)``
   method steps are:

   #. Let ``iterator`` be a new ```NodeIterator`` <#nodeiterator>`__
      object.

   #. Set ``iterator``\ ’s `root <#concept-traversal-root>`__ and
      ``iterator``\ ’s `reference <#nodeiterator-reference>`__ to
      ``root``.

   #. Set ``iterator``\ ’s `pointer before
      reference <#nodeiterator-pointer-before-reference>`__ to true.

   #. Set ``iterator``\ ’s
      `whatToShow <#concept-traversal-whattoshow>`__ to ``whatToShow``.

   #. Set ``iterator``\ ’s `filter <#concept-traversal-filter>`__ to
      ``filter``.

   #. Return ``iterator``.

   The
   ``createTreeWalker(`` ``root`` ``,`` ``whatToShow`` ``,`` ``filter`` ``)``
   method steps are:

   #. Let ``walker`` be a new ```TreeWalker`` <#treewalker>`__ object.

   #. Set ``walker``\ ’s `root <#concept-traversal-root>`__ and
      ``walker``\ ’s `current <#treewalker-current>`__ to ``root``.

   #. Set ``walker``\ ’s `whatToShow <#concept-traversal-whattoshow>`__
      to ``whatToShow``.

   #. Set ``walker``\ ’s `filter <#concept-traversal-filter>`__ to
      ``filter``.

   #. Return ``walker``.


/4.5.1. Interface DOMImplementation
===================================

   .. .. rubric:: 4.5.1. Interface
      ```DOMImplementation`` <#domimplementation>`__ ` <#interface-domimplementation>`__
      :name: interface-domimplementation
      :class: heading settled

   User agents must create a
   ```DOMImplementation`` <#domimplementation>`__ object whenever a
   `document <#concept-document>`__ is created and associate it with
   that `document <#concept-document>`__.

   .. code:: idl

      [Exposed=Window]
      interface DOMImplementation {
        [NewObject] DocumentType createDocumentType(DOMString qualifiedName, DOMString publicId, DOMString systemId);
        [NewObject] XMLDocument createDocument(DOMString? namespace, [LegacyNullToEmptyString] DOMString qualifiedName, optional DocumentType? doctype = null);
        [NewObject] Document createHTMLDocument(optional DOMString title);

        boolean hasFeature(); // useless; always returns true
      };

   ``doctype`` ``=`` ``document`` ``.`` ```implementation`` <#dom-document-implementation>`__ ``.`` ```createDocumentType(qualifiedName, publicId, systemId)`` <#dom-domimplementation-createdocumenttype>`__
      Returns a `doctype <#concept-doctype>`__, with the given
      ``qualifiedName``, ``publicId``, and ``systemId``. If
      ``qualifiedName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production, an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      is thrown, and if it does not match the
      ```QName`` <https://www.w3.org/TR/xml-names/#NT-QName>`__
      production, a
      "```NamespaceError`` <https://webidl.spec.whatwg.org/#namespaceerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      is thrown.
   ``doc`` ``=`` ``document`` ``.`` ```implementation`` <#dom-document-implementation>`__ ``.`` ```createDocument(`` ``namespace`` ``,`` ``qualifiedName`` ``[,`` ``doctype`` ``= null])`` <#dom-domimplementation-createdocument>`__
      Returns an ```XMLDocument`` <#xmldocument>`__, with a `document
      element <#document-element>`__ whose `local
      name <#concept-element-local-name>`__ is ``qualifiedName`` and
      whose `namespace <#concept-element-namespace>`__ is ``namespace``
      (unless ``qualifiedName`` is the empty string), and with
      ``doctype``, if it is given, as its
      `doctype <#concept-doctype>`__.

      This method throws the same exceptions as the
      ```createElementNS()`` <#dom-document-createelementns>`__ method,
      when invoked with ``namespace`` and ``qualifiedName``.

   ``doc`` ``=`` ``document`` ``.`` ```implementation`` <#dom-document-implementation>`__ ``.`` ```createHTMLDocument([`` ``title`` ``])`` <#dom-domimplementation-createhtmldocument>`__
      Returns a `document <#concept-document>`__, with a basic
      `tree <#concept-tree>`__ already constructed including a
      ```title`` <https://html.spec.whatwg.org/multipage/semantics.html#the-title-element>`__
      element, unless the ``title`` argument is omitted.

   .. container:: impl

      The
      ``createDocumentType(`` ``qualifiedName`` ``,`` ``publicId`` ``,`` ``systemId`` ``)``
      method steps are:

      #. `Validate <#validate>`__ ``qualifiedName``.

      #. Return a new `doctype <#concept-doctype>`__, with
         ``qualifiedName`` as its `name <#concept-doctype-name>`__,
         ``publicId`` as its `public ID <#concept-doctype-publicid>`__,
         and ``systemId`` as its `system
         ID <#concept-doctype-systemid>`__, and with its `node
         document <#concept-node-document>`__ set to the associated
         `document <#concept-document>`__ of
         `this <https://webidl.spec.whatwg.org/#this>`__.

      No check is performed that ``publicId`` code points match the
      ```PubidChar`` <https://www.w3.org/TR/xml/#NT-PubidChar>`__
      production or that ``systemId`` does not contain both a '``"``'
      and a "``'``".

      The
      ``createDocument(`` ``namespace`` ``,`` ``qualifiedName`` ``,`` ``doctype`` ``)``
      method steps are:

      #. Let ``document`` be a new ```XMLDocument`` <#xmldocument>`__.

      #. Let ``element`` be null.

      #. If ``qualifiedName`` is not the empty string, then set
         ``element`` to the result of running the `internal
         ``createElementNS`` steps <#internal-createelementns-steps>`__,
         given ``document``, ``namespace``, ``qualifiedName``, and an
         empty dictionary.

      #. If ``doctype`` is non-null, `append <#concept-node-append>`__
         ``doctype`` to ``document``.

      #. If ``element`` is non-null, `append <#concept-node-append>`__
         ``element`` to ``document``.

      #. ``document``\ ’s `origin <#concept-document-origin>`__ is
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s associated
         `document <#concept-document>`__\ ’s
         `origin <#concept-document-origin>`__.

      #. ``document``\ ’s `content
         type <#concept-document-content-type>`__ is determined by
         ``namespace``:

         `HTML namespace <https://infra.spec.whatwg.org/#html-namespace>`__
            ``application/xhtml+xml``
         `SVG namespace <https://infra.spec.whatwg.org/#svg-namespace>`__
            ``image/svg+xml``
         Any other namespace
            ``application/xml``

      #. Return ``document``.

      The ``createHTMLDocument(`` ``title`` ``)`` method steps are:

      #. Let ``doc`` be a new `document <#concept-document>`__ that is
         an `HTML document <#html-document>`__.

      #. Set ``doc``\ ’s `content
         type <#concept-document-content-type>`__ to "``text/html``".

      #. `Append <#concept-node-append>`__ a new
         `doctype <#concept-doctype>`__, with "``html``" as its
         `name <#concept-doctype-name>`__ and with its `node
         document <#concept-node-document>`__ set to ``doc``, to
         ``doc``.

      #. `Append <#concept-node-append>`__ the result of `creating an
         element <#concept-create-element>`__ given ``doc``,
         ```html`` <https://html.spec.whatwg.org/multipage/semantics.html#the-html-element>`__,
         and the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         to ``doc``.

      #. `Append <#concept-node-append>`__ the result of `creating an
         element <#concept-create-element>`__ given ``doc``,
         ```head`` <https://html.spec.whatwg.org/multipage/semantics.html#the-head-element>`__,
         and the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         to the
         ```html`` <https://html.spec.whatwg.org/multipage/semantics.html#the-html-element>`__
         element created earlier.

      #. If ``title`` is given:

         #. `Append <#concept-node-append>`__ the result of `creating an
            element <#concept-create-element>`__ given ``doc``,
            ```title`` <https://html.spec.whatwg.org/multipage/semantics.html#the-title-element>`__,
            and the `HTML
            namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
            to the
            ```head`` <https://html.spec.whatwg.org/multipage/semantics.html#the-head-element>`__
            element created earlier.

         #. `Append <#concept-node-append>`__ a new ```Text`` <#text>`__
            `node <#concept-node>`__, with its
            `data <#concept-cd-data>`__ set to ``title`` (which could be
            the empty string) and its `node
            document <#concept-node-document>`__ set to ``doc``, to the
            ```title`` <https://html.spec.whatwg.org/multipage/semantics.html#the-title-element>`__
            element created earlier.

      #. `Append <#concept-node-append>`__ the result of `creating an
         element <#concept-create-element>`__ given ``doc``,
         ```body`` <https://html.spec.whatwg.org/multipage/sections.html#the-body-element>`__,
         and the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         to the
         ```html`` <https://html.spec.whatwg.org/multipage/semantics.html#the-html-element>`__
         element created earlier.

      #. ``doc``\ ’s `origin <#concept-document-origin>`__ is
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s associated
         `document <#concept-document>`__\ ’s
         `origin <#concept-document-origin>`__.

      #. Return ``doc``.

      The ``hasFeature()`` method steps are to return true.

      ```hasFeature()`` <#dom-domimplementation-hasfeature>`__
      originally would report whether the user agent claimed to support
      a given DOM feature, but experience proved it was not nearly as
      reliable or granular as simply checking whether the desired
      objects, attributes, or methods existed. As such, it is no longer
      to be used, but continues to exist (and simply returns true) so
      that old pages don’t stop working.


/4.6. Interface DocumentType
============================

   .. .. rubric:: 4.6. Interface
      ```DocumentType`` <#documenttype>`__ ` <#interface-documenttype>`__
      :name: interface-documenttype
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface DocumentType : Node {
        readonly attribute DOMString name;
        readonly attribute DOMString publicId;
        readonly attribute DOMString systemId;
      };

   ```DocumentType`` <#documenttype>`__ `nodes <#concept-node>`__ are
   simply known as doctypes.

   `Doctypes <#concept-doctype>`__ have an associated name, public ID,
   and system ID.

   When a `doctype <#concept-doctype>`__ is created, its
   `name <#concept-doctype-name>`__ is always given. Unless explicitly
   given when a `doctype <#concept-doctype>`__ is created, its `public
   ID <#concept-doctype-publicid>`__ and `system
   ID <#concept-doctype-systemid>`__ are the empty string.

   The ``name`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `name <#concept-doctype-name>`__.

   The ``publicId`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `public
   ID <#concept-doctype-publicid>`__.

   The ``systemId`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `system
   ID <#concept-doctype-systemid>`__.


/4.7. Interface DocumentFragment
================================

   .. .. rubric:: 4.7. Interface
      ```DocumentFragment`` <#documentfragment>`__ ` <#interface-documentfragment>`__
      :name: interface-documentfragment
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface DocumentFragment : Node {
        constructor();
      };

   A ```DocumentFragment`` <#documentfragment>`__
   `node <#concept-node>`__ has an associated host (null or an
   `element <#concept-element>`__ in a different `node
   tree <#concept-node-tree>`__). It is null unless otherwise stated.

   An object ``A`` is a host-including inclusive ancestor of an object
   ``B``, if either ``A`` is an `inclusive
   ancestor <#concept-tree-inclusive-ancestor>`__ of ``B``, or if
   ``B``\ ’s `root <#concept-tree-root>`__ has a non-null
   `host <#concept-documentfragment-host>`__ and ``A`` is a
   `host-including inclusive
   ancestor <#concept-tree-host-including-inclusive-ancestor>`__ of
   ``B``\ ’s `root <#concept-tree-root>`__\ ’s
   `host <#concept-documentfragment-host>`__.

   The ```DocumentFragment`` <#documentfragment>`__
   `node <#concept-node>`__\ ’s
   `host <#concept-documentfragment-host>`__ concept is useful for
   HTML’s
   ```template`` <https://html.spec.whatwg.org/multipage/scripting.html#the-template-element>`__
   element and for `shadow roots <#concept-shadow-root>`__, and impacts
   the `pre-insert <#concept-node-pre-insert>`__ and
   `replace <#concept-node-replace>`__ algorithms.

   ``tree`` ``= new`` ```DocumentFragment()`` <#dom-documentfragment-documentfragment>`__
      Returns a new ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__.

   The ``new DocumentFragment()`` constructor steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
   document <#concept-node-document>`__ to `current global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object>`__\ ’s
   `associated
   ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__.


/4.8. Interface ShadowRoot
==========================

   .. .. rubric:: 4.8. Interface
      ```ShadowRoot`` <#shadowroot>`__ ` <#interface-shadowroot>`__
      :name: interface-shadowroot
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface ShadowRoot : DocumentFragment {
        readonly attribute ShadowRootMode mode;
        readonly attribute boolean delegatesFocus;
        readonly attribute SlotAssignmentMode slotAssignment;
        readonly attribute boolean clonable;
        readonly attribute boolean serializable;
        readonly attribute Element host;
        attribute EventHandler onslotchange;
      };

      enum ShadowRootMode { "open", "closed" };
      enum SlotAssignmentMode { "manual", "named" };

   ```ShadowRoot`` <#shadowroot>`__ `nodes <#concept-node>`__ are simply
   known as shadow roots.

   `Shadow roots <#concept-shadow-root>`__ have an associated mode
   ("``open``" or "``closed``").

   `Shadow roots <#concept-shadow-root>`__ have an associated delegates
   focus. It is initially set to false.

   `Shadow roots <#concept-shadow-root>`__ have an associated available
   to element internals. It is initially set to false.

   `Shadow roots <#concept-shadow-root>`__ have an associated
   declarative (a boolean). It is initially set to false.

   `Shadow roots <#concept-shadow-root>`__\ ’s associated
   `host <#concept-documentfragment-host>`__ is never null.

   `Shadow roots <#concept-shadow-root>`__ have an associated slot
   assignment ("``manual``" or "``named``").

   `Shadow roots <#concept-shadow-root>`__ have an associated clonable
   (a boolean). It is initially set to false.

   `Shadow roots <#concept-shadow-root>`__ have an associated
   serializable (a boolean). It is initially set to false.

   A `shadow root <#concept-shadow-root>`__\ ’s `get the
   parent <#get-the-parent>`__ algorithm, given an ``event``, returns
   null if ``event``\ ’s `composed flag <#composed-flag>`__ is unset and
   `shadow root <#concept-shadow-root>`__ is the
   `root <#concept-tree-root>`__ of ``event``\ ’s
   `path <#event-path>`__\ ’s first struct’s `invocation
   target <#event-path-invocation-target>`__; otherwise `shadow
   root <#concept-shadow-root>`__\ ’s
   `host <#concept-documentfragment-host>`__.

   The ``mode`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `mode <#shadowroot-mode>`__.

   The ``delegatesFocus`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `delegates
   focus <#shadowroot-delegates-focus>`__.

   The ``slotAssignment`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `slot
   assignment <#shadowroot-slot-assignment>`__.

   The ``clonable`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `clonable <#shadowroot-clonable>`__.

   The ``serializable`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `serializable <#shadowroot-serializable>`__.

   The ``host`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `host <#concept-documentfragment-host>`__.

   The ``onslotchange`` attribute is an `event handler IDL
   attribute <https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes>`__
   for the ``onslotchange`` `event
   handler <https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers>`__,
   whose `event handler event
   type <https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-event-type>`__
   is ```slotchange`` <#eventdef-htmlslotelement-slotchange>`__.

   --------------

   In shadow-including tree order is `shadow-including preorder,
   depth-first
   traversal <#shadow-including-preorder-depth-first-traversal>`__ of a
   `node tree <#concept-node-tree>`__. Shadow-including preorder,
   depth-first traversal of a `node tree <#concept-node-tree>`__
   ``tree`` is preorder, depth-first traversal of ``tree``, with for
   each `shadow host <#element-shadow-host>`__ encountered in ``tree``,
   `shadow-including preorder, depth-first
   traversal <#shadow-including-preorder-depth-first-traversal>`__ of
   that `element <#concept-element>`__\ ’s `shadow
   root <#concept-element-shadow-root>`__\ ’s `node
   tree <#concept-node-tree>`__ just after it is encountered.

   The shadow-including root of an object is its
   `root <#concept-tree-root>`__\ ’s
   `host <#concept-documentfragment-host>`__\ ’s `shadow-including
   root <#concept-shadow-including-root>`__, if the object’s
   `root <#concept-tree-root>`__ is a `shadow
   root <#concept-shadow-root>`__; otherwise its
   `root <#concept-tree-root>`__.

   An object ``A`` is a shadow-including descendant of an object ``B``,
   if ``A`` is a `descendant <#concept-tree-descendant>`__ of ``B``, or
   ``A``\ ’s `root <#concept-tree-root>`__ is a `shadow
   root <#concept-shadow-root>`__ and ``A``\ ’s
   `root <#concept-tree-root>`__\ ’s
   `host <#concept-documentfragment-host>`__ is a `shadow-including
   inclusive
   descendant <#concept-shadow-including-inclusive-descendant>`__ of
   ``B``.

   A shadow-including inclusive descendant is an object or one of its
   `shadow-including
   descendants <#concept-shadow-including-descendant>`__.

   An object ``A`` is a shadow-including ancestor of an object ``B``, if
   and only if ``B`` is a `shadow-including
   descendant <#concept-shadow-including-descendant>`__ of ``A``.

   A shadow-including inclusive ancestor is an object or one of its
   `shadow-including ancestors <#concept-shadow-including-ancestor>`__.

   A `node <#concept-node>`__ ``A`` is closed-shadow-hidden from a
   `node <#concept-node>`__ ``B`` if all of the following conditions are
   true:

   -  ``A``\ ’s `root <#concept-tree-root>`__ is a `shadow
      root <#concept-shadow-root>`__.

   -  ``A``\ ’s `root <#concept-tree-root>`__ is not a `shadow-including
      inclusive
      ancestor <#concept-shadow-including-inclusive-ancestor>`__ of
      ``B``.

   -  ``A``\ ’s `root <#concept-tree-root>`__ is a `shadow
      root <#concept-shadow-root>`__ whose `mode <#shadowroot-mode>`__
      is "``closed``" or ``A``\ ’s `root <#concept-tree-root>`__\ ’s
      `host <#concept-documentfragment-host>`__ is
      `closed-shadow-hidden <#concept-closed-shadow-hidden>`__ from
      ``B``.

   To retarget an object ``A`` against an object ``B``, repeat these
   steps until they return an object:

   #. If one of the following is true

      -  ``A`` is not a `node <#concept-node>`__
      -  ``A``\ ’s `root <#concept-tree-root>`__ is not a `shadow
         root <#concept-shadow-root>`__
      -  ``B`` is a `node <#concept-node>`__ and ``A``\ ’s
         `root <#concept-tree-root>`__ is a `shadow-including inclusive
         ancestor <#concept-shadow-including-inclusive-ancestor>`__ of
         ``B``

      then return ``A``.

   #. Set ``A`` to ``A``\ ’s `root <#concept-tree-root>`__\ ’s
      `host <#concept-documentfragment-host>`__.

   The `retargeting <#retarget>`__ algorithm is used by `event
   dispatch <#concept-event-dispatch>`__ as well as other
   specifications, such as Fullscreen.
   `[FULLSCREEN] <#biblio-fullscreen>`__


/4.9. Interface Element
=======================

   .. .. rubric:: 4.9. Interface
      ```Element`` <#element>`__ ` <#interface-element>`__
      :name: interface-element
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Element : Node {
        readonly attribute DOMString? namespaceURI;
        readonly attribute DOMString? prefix;
        readonly attribute DOMString localName;
        readonly attribute DOMString tagName;

        [CEReactions] attribute DOMString id;
        [CEReactions] attribute DOMString className;
        [SameObject, PutForwards=value] readonly attribute DOMTokenList classList;
        [CEReactions, Unscopable] attribute DOMString slot;

        boolean hasAttributes();
        [SameObject] readonly attribute NamedNodeMap attributes;
        sequence<DOMString> getAttributeNames();
        DOMString? getAttribute(DOMString qualifiedName);
        DOMString? getAttributeNS(DOMString? namespace, DOMString localName);
        [CEReactions] undefined setAttribute(DOMString qualifiedName, DOMString value);
        [CEReactions] undefined setAttributeNS(DOMString? namespace, DOMString qualifiedName, DOMString value);
        [CEReactions] undefined removeAttribute(DOMString qualifiedName);
        [CEReactions] undefined removeAttributeNS(DOMString? namespace, DOMString localName);
        [CEReactions] boolean toggleAttribute(DOMString qualifiedName, optional boolean force);
        boolean hasAttribute(DOMString qualifiedName);
        boolean hasAttributeNS(DOMString? namespace, DOMString localName);

        Attr? getAttributeNode(DOMString qualifiedName);
        Attr? getAttributeNodeNS(DOMString? namespace, DOMString localName);
        [CEReactions] Attr? setAttributeNode(Attr attr);
        [CEReactions] Attr? setAttributeNodeNS(Attr attr);
        [CEReactions] Attr removeAttributeNode(Attr attr);

        ShadowRoot attachShadow(ShadowRootInit init);
        readonly attribute ShadowRoot? shadowRoot;

        Element? closest(DOMString selectors);
        boolean matches(DOMString selectors);
        boolean webkitMatchesSelector(DOMString selectors); // legacy alias of .matches

        HTMLCollection getElementsByTagName(DOMString qualifiedName);
        HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
        HTMLCollection getElementsByClassName(DOMString classNames);

        [CEReactions] Element? insertAdjacentElement(DOMString where, Element element); // legacy
        undefined insertAdjacentText(DOMString where, DOMString data); // legacy
      };

      dictionary ShadowRootInit {
        required ShadowRootMode mode;
        boolean delegatesFocus = false;
        SlotAssignmentMode slotAssignment = "named";
        boolean clonable = false;
        boolean serializable = false;
      };

   ```Element`` <#element>`__ `nodes <#concept-node>`__ are simply known
   as elements.

   `Elements <#concept-element>`__ have an associated namespace,
   namespace prefix, local name, custom element state, custom element
   definition, ``is`` value. When an `element <#concept-element>`__ is
   `created <#concept-create-element>`__, all of these values are
   initialized.

   An `element <#concept-element>`__\ ’s `custom element
   state <#concept-element-custom-element-state>`__ is one of
   "``undefined``", "``failed``", "``uncustomized``",
   "``precustomized``", or "``custom``". An
   `element <#concept-element>`__ whose `custom element
   state <#concept-element-custom-element-state>`__ is
   "``uncustomized``" or "``custom``" is said to be defined. An
   `element <#concept-element>`__ whose `custom element
   state <#concept-element-custom-element-state>`__ is "``custom``" is
   said to be custom.

   Whether or not an element is `defined <#concept-element-defined>`__
   is used to determine the behavior of the
   `:defined <https://drafts.csswg.org/selectors-4/#defined-pseudo>`__
   pseudo-class. Whether or not an element is
   `custom <#concept-element-custom>`__ is used to determine the
   behavior of the `mutation algorithms <#mutation-algorithms>`__. The
   "``failed``" and "``precustomized``" states are used to ensure that
   if a `custom element
   constructor <https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-constructor>`__
   fails to execute correctly the first time, it is not executed again
   by an
   `upgrade <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element>`__.

   .. container:: example
      :name: example-c5b21302

      ` <#example-c5b21302>`__
      The following code illustrates elements in each of these four
      states:

      .. code:: lang-html

         <!DOCTYPE html>
         <script>
           window.customElements.define("sw-rey", class extends HTMLElement {})
           window.customElements.define("sw-finn", class extends HTMLElement {}, { extends: "p" })
           window.customElements.define("sw-kylo", class extends HTMLElement {
             constructor() {
               // super() intentionally omitted for this example
             }
           })
         </script>

         <!-- "undefined" (not defined, not custom) -->
         <sw-han></sw-han>
         <p is="sw-luke"></p>
         <p is="asdf"></p>

         <!-- "failed" (not defined, not custom) -->
         <sw-kylo></sw-kylo>

         <!-- "uncustomized" (defined, not custom) -->
         <p></p>
         <asdf></asdf>

         <!-- "custom" (defined, custom) -->
         <sw-rey></sw-rey>
         <p is="sw-finn"></p>

   `Elements <#concept-element>`__ also have an associated shadow root
   (null or a `shadow root <#concept-shadow-root>`__). It is null unless
   otherwise stated. An `element <#concept-element>`__ is a shadow host
   if its `shadow root <#concept-element-shadow-root>`__ is non-null.

   An `element <#concept-element>`__\ ’s qualified name is its `local
   name <#concept-element-local-name>`__ if its `namespace
   prefix <#concept-element-namespace-prefix>`__ is null; otherwise its
   `namespace prefix <#concept-element-namespace-prefix>`__, followed by
   "``:``", followed by its `local
   name <#concept-element-local-name>`__.

   An `element <#concept-element>`__\ ’s HTML-uppercased qualified name
   is the return value of these steps:

   #. Let ``qualifiedName`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `qualified
      name <#concept-element-qualified-name>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ and
      its `node document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, then set ``qualifiedName`` to
      ``qualifiedName`` in `ASCII
      uppercase <https://infra.spec.whatwg.org/#ascii-uppercase>`__.

   #. Return ``qualifiedName``.

   User agents could optimize `qualified
   name <#concept-element-qualified-name>`__ and `HTML-uppercased
   qualified name <#element-html-uppercased-qualified-name>`__ by
   storing them in internal slots.

   To create an element, given a ``document``, ``localName``,
   ``namespace``, and optional ``prefix``, ``is``, and
   ``synchronous custom elements flag``, run these steps:

   #. If ``prefix`` was not given, let ``prefix`` be null.

   #. If ``is`` was not given, let ``is`` be null.

   #. Let ``result`` be null.

   #. Let ``definition`` be the result of `looking up a custom element
      definition <https://html.spec.whatwg.org/multipage/custom-elements.html#look-up-a-custom-element-definition>`__
      given ``document``, ``namespace``, ``localName``, and ``is``.

   #. If ``definition`` is non-null, and ``definition``\ ’s
      `name <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-name>`__
      is not equal to its `local
      name <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-local-name>`__
      (i.e., ``definition`` represents a `customized built-in
      element <https://html.spec.whatwg.org/multipage/custom-elements.html#customized-built-in-element>`__),
      then:

      #. Let ``interface`` be the `element
         interface <#concept-element-interface>`__ for ``localName`` and
         the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__.

      #. Set ``result`` to a new `element <#concept-element>`__ that
         implements ``interface``, with no attributes,
         `namespace <#concept-element-namespace>`__ set to the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         `namespace prefix <#concept-element-namespace-prefix>`__ set to
         ``prefix``, `local name <#concept-element-local-name>`__ set to
         ``localName``, `custom element
         state <#concept-element-custom-element-state>`__ set to
         "``undefined``", `custom element
         definition <#concept-element-custom-element-definition>`__ set
         to null, ```is`` value <#concept-element-is-value>`__ set to
         ``is``, and `node document <#concept-node-document>`__ set to
         ``document``.

      #. If the ``synchronous custom elements flag`` is set, then run
         this step while catching any exceptions:

         #. `Upgrade <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-upgrade-an-element>`__
            ``element`` using ``definition``.

         If this step threw an exception, then:

         #. `Report the
            exception <https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception>`__.

         #. Set ``result``\ ’s `custom element
            state <#concept-element-custom-element-state>`__ to
            "``failed``".

      #. Otherwise, `enqueue a custom element upgrade
         reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-upgrade-reaction>`__
         given ``result`` and ``definition``.

   #. Otherwise, if ``definition`` is non-null, then:

      #. If the ``synchronous custom elements flag`` is set, then run
         these steps while catching any exceptions:

         #. Let ``C`` be ``definition``\ ’s
            `constructor <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-constructor>`__.

         #. Set ``result`` to the result of
            `constructing <https://webidl.spec.whatwg.org/#construct-a-callback-function>`__
            ``C``, with no arguments.

         #. Assert: ``result``\ ’s `custom element
            state <#concept-element-custom-element-state>`__ and `custom
            element
            definition <#concept-element-custom-element-definition>`__
            are initialized.

         #. Assert: ``result``\ ’s
            `namespace <#concept-element-namespace>`__ is the `HTML
            namespace <https://infra.spec.whatwg.org/#html-namespace>`__.

            IDL enforces that ``result`` is an
            ```HTMLElement`` <https://html.spec.whatwg.org/multipage/dom.html#htmlelement>`__
            object, which all use the `HTML
            namespace <https://infra.spec.whatwg.org/#html-namespace>`__.

         #. If ``result``\ ’s `attribute
            list <#concept-element-attribute>`__ `is not
            empty <https://infra.spec.whatwg.org/#list-is-empty>`__,
            then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. If ``result`` has `children <#concept-tree-child>`__, then
            `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. If ``result``\ ’s `parent <#concept-tree-parent>`__ is not
            null, then
            `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. If ``result``\ ’s `node document <#concept-node-document>`__
            is not ``document``, then
            `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. If ``result``\ ’s `local
            name <#concept-element-local-name>`__ is not equal to
            ``localName``, then
            `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. Set ``result``\ ’s `namespace
            prefix <#concept-element-namespace-prefix>`__ to ``prefix``.

         #. Set ``result``\ ’s ```is``
            value <#concept-element-is-value>`__ to null.

         If any of these steps threw an exception, then:

         #. `Report the
            exception <https://html.spec.whatwg.org/multipage/webappapis.html#report-the-exception>`__.

         #. Set ``result`` to a new `element <#concept-element>`__ that
            implements the
            ```HTMLUnknownElement`` <https://html.spec.whatwg.org/multipage/dom.html#htmlunknownelement>`__
            interface, with no attributes,
            `namespace <#concept-element-namespace>`__ set to the `HTML
            namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
            `namespace prefix <#concept-element-namespace-prefix>`__ set
            to ``prefix``, `local name <#concept-element-local-name>`__
            set to ``localName``, `custom element
            state <#concept-element-custom-element-state>`__ set to
            "``failed``", `custom element
            definition <#concept-element-custom-element-definition>`__
            set to null, ```is`` value <#concept-element-is-value>`__
            set to null, and `node document <#concept-node-document>`__
            set to ``document``.

      #. Otherwise:

         #. Set ``result`` to a new `element <#concept-element>`__ that
            implements the
            ```HTMLElement`` <https://html.spec.whatwg.org/multipage/dom.html#htmlelement>`__
            interface, with no attributes,
            `namespace <#concept-element-namespace>`__ set to the `HTML
            namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
            `namespace prefix <#concept-element-namespace-prefix>`__ set
            to ``prefix``, `local name <#concept-element-local-name>`__
            set to ``localName``, `custom element
            state <#concept-element-custom-element-state>`__ set to
            "``undefined``", `custom element
            definition <#concept-element-custom-element-definition>`__
            set to null, ```is`` value <#concept-element-is-value>`__
            set to null, and `node document <#concept-node-document>`__
            set to ``document``.

         #. `Enqueue a custom element upgrade
            reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-upgrade-reaction>`__
            given ``result`` and ``definition``.

   #. Otherwise:

      #. Let ``interface`` be the `element
         interface <#concept-element-interface>`__ for ``localName`` and
         ``namespace``.

      #. Set ``result`` to a new `element <#concept-element>`__ that
         implements ``interface``, with no attributes,
         `namespace <#concept-element-namespace>`__ set to
         ``namespace``, `namespace
         prefix <#concept-element-namespace-prefix>`__ set to
         ``prefix``, `local name <#concept-element-local-name>`__ set to
         ``localName``, `custom element
         state <#concept-element-custom-element-state>`__ set to
         "``uncustomized``", `custom element
         definition <#concept-element-custom-element-definition>`__ set
         to null, ```is`` value <#concept-element-is-value>`__ set to
         ``is``, and `node document <#concept-node-document>`__ set to
         ``document``.

      #. If ``namespace`` is the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         and either ``localName`` is a `valid custom element
         name <https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name>`__
         or ``is`` is non-null, then set ``result``\ ’s `custom element
         state <#concept-element-custom-element-state>`__ to
         "``undefined``".

   #. Return ``result``.

   `Elements <#concept-element>`__ also have an attribute list, which is
   a `list <https://infra.spec.whatwg.org/#list>`__ exposed through a
   ```NamedNodeMap`` <#namednodemap>`__. Unless explicitly given when an
   `element <#concept-element>`__ is created, its `attribute
   list <#concept-element-attribute>`__ `is
   empty <https://infra.spec.whatwg.org/#list-is-empty>`__.

   An `element <#concept-element>`__ has an
   `attribute <#concept-attribute>`__ ``A`` if its `attribute
   list <#concept-element-attribute>`__
   `contains <https://infra.spec.whatwg.org/#list-contain>`__ ``A``.

   This and `other specifications <#other-applicable-specifications>`__
   may define attribute change steps for
   `elements <#concept-element>`__. The algorithm is passed ``element``,
   ``localName``, ``oldValue``, ``value``, and ``namespace``.

   To handle attribute changes for an `attribute <#concept-attribute>`__
   ``attribute`` with ``element``, ``oldValue``, and ``newValue``, run
   these steps:

   #. `Queue a mutation record <#queue-a-mutation-record>`__ of
      "``attributes``" for ``element`` with ``attribute``\ ’s `local
      name <#concept-attribute-local-name>`__, ``attribute``\ ’s
      `namespace <#concept-attribute-namespace>`__, ``oldValue``, « », «
      », null, and null.

   #. If ``element`` is `custom <#concept-element-custom>`__, then
      `enqueue a custom element callback
      reaction <https://html.spec.whatwg.org/multipage/custom-elements.html#enqueue-a-custom-element-callback-reaction>`__
      with ``element``, callback name "``attributeChangedCallback``",
      and an argument list containing ``attribute``\ ’s `local
      name <#concept-attribute-local-name>`__, ``oldValue``,
      ``newValue``, and ``attribute``\ ’s
      `namespace <#concept-attribute-namespace>`__.

   #. Run the `attribute change
      steps <#concept-element-attributes-change-ext>`__ with
      ``element``, ``attribute``\ ’s `local
      name <#concept-attribute-local-name>`__, ``oldValue``,
      ``newValue``, and ``attribute``\ ’s
      `namespace <#concept-attribute-namespace>`__.

   To change an `attribute <#concept-attribute>`__ ``attribute`` to
   ``value``, run these steps:

   #. Let ``oldValue`` be ``attribute``\ ’s
      `value <#concept-attribute-value>`__.

   #. Set ``attribute``\ ’s `value <#concept-attribute-value>`__ to
      ``value``.

   #. `Handle attribute changes <#handle-attribute-changes>`__ for
      ``attribute`` with ``attribute``\ ’s
      `element <#concept-attribute-element>`__, ``oldValue``, and
      ``value``.

   To append an `attribute <#concept-attribute>`__ ``attribute`` to an
   `element <#concept-element>`__ ``element``, run these steps:

   #. `Append <https://infra.spec.whatwg.org/#list-append>`__
      ``attribute`` to ``element``\ ’s `attribute
      list <#concept-element-attribute>`__.

   #. Set ``attribute``\ ’s `element <#concept-attribute-element>`__ to
      ``element``.

   #. `Handle attribute changes <#handle-attribute-changes>`__ for
      ``attribute`` with ``element``, null, and ``attribute``\ ’s
      `value <#concept-attribute-value>`__.

   To remove an `attribute <#concept-attribute>`__ ``attribute``, run
   these steps:

   #. Let ``element`` be ``attribute``\ ’s
      `element <#concept-attribute-element>`__.

   #. `Remove <https://infra.spec.whatwg.org/#list-remove>`__
      ``attribute`` from ``element``\ ’s `attribute
      list <#concept-element-attribute>`__.

   #. Set ``attribute``\ ’s `element <#concept-attribute-element>`__ to
      null.

   #. `Handle attribute changes <#handle-attribute-changes>`__ for
      ``attribute`` with ``element``, ``attribute``\ ’s
      `value <#concept-attribute-value>`__, and null.

   To replace an `attribute <#concept-attribute>`__ ``oldAttr`` with an
   `attribute <#concept-attribute>`__ ``newAttr``, run these steps:

   #. `Replace <https://infra.spec.whatwg.org/#list-replace>`__
      ``oldAttr`` by ``newAttr`` in ``oldAttr``\ ’s
      `element <#concept-attribute-element>`__\ ’s `attribute
      list <#concept-element-attribute>`__.

   #. Set ``newAttr``\ ’s `element <#concept-attribute-element>`__ to
      ``oldAttr``\ ’s `element <#concept-attribute-element>`__.

   #. Set ``oldAttr``\ ’s `element <#concept-attribute-element>`__ to
      null.

   #. `Handle attribute changes <#handle-attribute-changes>`__ for
      ``oldAttr`` with ``newAttr``\ ’s
      `element <#concept-attribute-element>`__, ``oldAttr``\ ’s
      `value <#concept-attribute-value>`__, and ``newAttr``\ ’s
      `value <#concept-attribute-value>`__.

   --------------

   .. container:: algorithm

      To get an attribute by name given a string ``qualifiedName`` and
      an `element <#concept-element>`__ ``element``:

      #. If ``element`` is in the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__
         and its `node document <#concept-node-document>`__ is an `HTML
         document <#html-document>`__, then set ``qualifiedName`` to
         ``qualifiedName`` in `ASCII
         lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

      #. Return the first `attribute <#concept-attribute>`__ in
         ``element``\ ’s `attribute list <#concept-element-attribute>`__
         whose `qualified name <#concept-attribute-qualified-name>`__ is
         ``qualifiedName``; otherwise null.

   .. container:: algorithm

      To get an attribute by namespace and local name given null or a
      string ``namespace``, a string ``localName``, and an
      `element <#concept-element>`__ ``element``:

      #. If ``namespace`` is the empty string, then set it to null.

      #. Return the `attribute <#concept-attribute>`__ in
         ``element``\ ’s `attribute list <#concept-element-attribute>`__
         whose `namespace <#concept-attribute-namespace>`__ is
         ``namespace`` and `local
         name <#concept-attribute-local-name>`__ is ``localName``, if
         any; otherwise null.

   .. container:: algorithm

      To get an attribute value given an `element <#concept-element>`__
      ``element``, a string ``localName``, and an optional null or
      string ``namespace`` (default null):

      #. Let ``attr`` be the result of `getting an
         attribute <#concept-element-attributes-get-by-namespace>`__
         given ``namespace``, ``localName``, and ``element``.

      #. If ``attr`` is null, then return the empty string.

      #. Return ``attr``\ ’s `value <#concept-attribute-value>`__.

   .. container:: algorithm

      To set an attribute given an `attribute <#concept-attribute>`__
      ``attr`` and an `element <#concept-element>`__ ``element``:

      #. If ``attr``\ ’s `element <#concept-attribute-element>`__ is
         neither null nor ``element``,
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InUseAttributeError`` <https://webidl.spec.whatwg.org/#inuseattributeerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. Let ``oldAttr`` be the result of `getting an
         attribute <#concept-element-attributes-get-by-namespace>`__
         given ``attr``\ ’s
         `namespace <#concept-attribute-namespace>`__, ``attr``\ ’s
         `local name <#concept-attribute-local-name>`__, and
         ``element``.

      #. If ``oldAttr`` is ``attr``, return ``attr``.

      #. If ``oldAttr`` is non-null, then
         `replace <#concept-element-attributes-replace>`__ ``oldAttr``
         with ``attr``.

      #. Otherwise, `append <#concept-element-attributes-append>`__
         ``attr`` to ``element``.

      #. Return ``oldAttr``.

   .. container:: algorithm

      To set an attribute value given an `element <#concept-element>`__
      ``element``, a string ``localName``, a string ``value``, an
      optional null or string ``prefix`` (default null), and an optional
      null or string ``namespace`` (default null):

      #. Let ``attribute`` be the result of `getting an
         attribute <#concept-element-attributes-get-by-namespace>`__
         given ``namespace``, ``localName``, and ``element``.

      #. If ``attribute`` is null, create an
         `attribute <#concept-attribute>`__ whose
         `namespace <#concept-attribute-namespace>`__ is ``namespace``,
         `namespace prefix <#concept-attribute-namespace-prefix>`__ is
         ``prefix``, `local name <#concept-attribute-local-name>`__ is
         ``localName``, `value <#concept-attribute-value>`__ is
         ``value``, and `node document <#concept-node-document>`__ is
         ``element``\ ’s `node document <#concept-node-document>`__,
         then `append <#concept-element-attributes-append>`__ this
         `attribute <#concept-attribute>`__ to ``element``, and then
         return.

      #. `Change <#concept-element-attributes-change>`__ ``attribute``
         to ``value``.

   .. container:: algorithm

      To remove an attribute by name given a string ``qualifiedName``
      and an `element <#concept-element>`__ ``element``:

      #. Let ``attr`` be the result of `getting an
         attribute <#concept-element-attributes-get-by-name>`__ given
         ``qualifiedName`` and ``element``.

      #. If ``attr`` is non-null, then
         `remove <#concept-element-attributes-remove>`__ ``attr``.

      #. Return ``attr``.

   .. container:: algorithm

      To remove an attribute by namespace and local name given null or a
      string ``namespace``, a string ``localName``, and an
      `element <#concept-element>`__ ``element``:

      #. Let ``attr`` be the result of `getting an
         attribute <#concept-element-attributes-get-by-namespace>`__
         given ``namespace``, ``localName``, and ``element``.

      #. If ``attr`` is non-null, then
         `remove <#concept-element-attributes-remove>`__ ``attr``.

      #. Return ``attr``.

   --------------

   An `element <#concept-element>`__ can have an associated unique
   identifier (ID)

   Historically `elements <#concept-element>`__ could have multiple
   identifiers e.g., by using the HTML ``id``
   `attribute <#concept-attribute>`__ and a DTD. This specification
   makes `ID <#concept-id>`__ a concept of the DOM and allows for only
   one per `element <#concept-element>`__, given by an ```id``
   attribute <#concept-named-attribute>`__.

   Use these `attribute change
   steps <#concept-element-attributes-change-ext>`__ to update an
   `element <#concept-element>`__\ ’s `ID <#concept-id>`__:

   #. If ``localName`` is ``id``, ``namespace`` is null, and ``value``
      is null or the empty string, then unset ``element``\ ’s
      `ID <#concept-id>`__.

   #. Otherwise, if ``localName`` is ``id``, ``namespace`` is null, then
      set ``element``\ ’s `ID <#concept-id>`__ to ``value``.

   While this specification defines requirements for ``class``, ``id``,
   and ``slot`` `attributes <#concept-attribute>`__ on any
   `element <#concept-element>`__, it makes no claims as to whether
   using them is conforming or not.

   --------------

   A `node <#concept-node>`__\ ’s `parent <#concept-tree-parent>`__ of
   type ```Element`` <#element>`__ is known as its parent element. If
   the `node <#concept-node>`__ has a `parent <#concept-tree-parent>`__
   of a different type, its `parent element <#parent-element>`__ is
   null.

   --------------

   ``namespace`` = ``element`` . ```namespaceURI`` <#dom-element-namespaceuri>`__
      Returns the `namespace <#concept-element-namespace>`__.
   ``prefix`` = ``element`` . ```prefix`` <#dom-element-prefix>`__
      Returns the `namespace
      prefix <#concept-element-namespace-prefix>`__.
   ``localName`` = ``element`` . ```localName`` <#dom-element-localname>`__
      Returns the `local name <#concept-element-local-name>`__.
   ``qualifiedName`` = ``element`` . ```tagName`` <#dom-element-tagname>`__
      Returns the `HTML-uppercased qualified
      name <#element-html-uppercased-qualified-name>`__.

   The ``namespaceURI`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `namespace <#concept-element-namespace>`__.

   The ``prefix`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `namespace
   prefix <#concept-element-namespace-prefix>`__.

   The ``localName`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `local
   name <#concept-element-local-name>`__.

   The ``tagName`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `HTML-uppercased
   qualified name <#element-html-uppercased-qualified-name>`__.

   --------------

   ``element`` ``.`` ```id`` <#dom-element-id>`__ ``[ =`` ``value`` ``]``
      Returns the value of ``element``\ ’s ``id`` content attribute. Can
      be set to change it.

   ``element`` ``.`` ```className`` <#dom-element-classname>`__ ``[ =`` ``value`` ``]``
      Returns the value of ``element``\ ’s ``class`` content attribute.
      Can be set to change it.

   ``element`` ``.`` ```classList`` <#dom-element-classlist>`__
      Allows for manipulation of ``element``\ ’s ``class`` content
      attribute as a set of whitespace-separated tokens through a
      ```DOMTokenList`` <#domtokenlist>`__ object.

   ``element`` ``.`` ```slot`` <#dom-element-slot>`__ ``[ =`` ``value`` ``]``
      Returns the value of ``element``\ ’s ``slot`` content attribute.
      Can be set to change it.

   IDL attributes that are defined to reflect a string ``name``, must
   have these getter and setter steps:

   getter steps
      Return the result of running `get an attribute
      value <#concept-element-attributes-get-value>`__ given
      `this <https://webidl.spec.whatwg.org/#this>`__ and ``name``.

   setter steps
      `Set an attribute value <#concept-element-attributes-set-value>`__
      for `this <https://webidl.spec.whatwg.org/#this>`__ using ``name``
      and the given value.

   The ``id`` attribute must `reflect <#concept-reflect>`__ "``id``".

   The ``className`` attribute must `reflect <#concept-reflect>`__
   "``class``".

   The ``classList`` getter steps are to return a
   ```DOMTokenList`` <#domtokenlist>`__ object whose associated
   `element <#concept-element>`__ is
   `this <https://webidl.spec.whatwg.org/#this>`__ and whose associated
   `attribute <#concept-attribute>`__\ ’s `local
   name <#concept-attribute-local-name>`__ is ``class``. The `token
   set <#concept-dtl-tokens>`__ of this particular
   ```DOMTokenList`` <#domtokenlist>`__ object are also known as the
   `element <#concept-element>`__\ ’s classes.

   The ``slot`` attribute must `reflect <#concept-reflect>`__
   "``slot``".

   ``id``, ``class``, and ``slot`` are effectively superglobal
   attributes as they can appear on any element, regardless of that
   element’s namespace.

   --------------

   ``element`` ``.`` ```hasAttributes`` <#dom-element-hasattributes>`__ ``()``
      Returns true if ``element`` has attributes; otherwise false.

   ``element`` ``.`` ```getAttributeNames`` <#dom-element-getattributenames>`__ ``()``
      Returns the `qualified
      names <#concept-attribute-qualified-name>`__ of all
      ``element``\ ’s `attributes <#concept-attribute>`__. Can contain
      duplicates.

   ``element`` ``.`` ```getAttribute`` <#dom-element-getattribute>`__ ``(`` ``qualifiedName`` ``)``
      Returns ``element``\ ’s first `attribute <#concept-attribute>`__
      whose `qualified name <#concept-attribute-qualified-name>`__ is
      ``qualifiedName``, and null if there is no such
      `attribute <#concept-attribute>`__ otherwise.

   ``element`` ``.`` ```getAttributeNS`` <#dom-element-getattributens>`__ ``(`` ``namespace`` ``,`` ``localName`` ``)``
      Returns ``element``\ ’s `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace`` and
      `local name <#concept-attribute-local-name>`__ is ``localName``,
      and null if there is no such `attribute <#concept-attribute>`__
      otherwise.

   ``element`` ``.`` ```setAttribute`` <#dom-element-setattribute>`__ ``(`` ``qualifiedName`` ``,`` ``value`` ``)``
      Sets the `value <#concept-attribute-value>`__ of ``element``\ ’s
      first `attribute <#concept-attribute>`__ whose `qualified
      name <#concept-attribute-qualified-name>`__ is ``qualifiedName``
      to ``value``.

   ``element`` ``.`` ```setAttributeNS`` <#dom-element-setattributens>`__ ``(`` ``namespace`` ``,`` ``localName`` ``,`` ``value`` ``)``
      Sets the `value <#concept-attribute-value>`__ of ``element``\ ’s
      `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace`` and
      `local name <#concept-attribute-local-name>`__ is ``localName`` to
      ``value``.

   ``element`` ``.`` ```removeAttribute`` <#dom-element-removeattribute>`__ ``(`` ``qualifiedName`` ``)``
      Removes ``element``\ ’s first `attribute <#concept-attribute>`__
      whose `qualified name <#concept-attribute-qualified-name>`__ is
      ``qualifiedName``.

   ``element`` ``.`` ```removeAttributeNS`` <#dom-element-removeattributens>`__ ``(`` ``namespace`` ``,`` ``localName`` ``)``
      Removes ``element``\ ’s `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace`` and
      `local name <#concept-attribute-local-name>`__ is ``localName``.

   ``element`` ``.`` ```toggleAttribute`` <#dom-element-toggleattribute>`__ ``(`` ``qualifiedName`` ``[,`` ``force`` ``])``
      If ``force`` is not given, "toggles" ``qualifiedName``, removing
      it if it is present and adding it if it is not present. If
      ``force`` is true, adds ``qualifiedName``. If ``force`` is false,
      removes ``qualifiedName``.

      Returns true if ``qualifiedName`` is now present; otherwise false.

   ``element`` ``.`` ```hasAttribute`` <#dom-element-hasattribute>`__ ``(`` ``qualifiedName`` ``)``
      Returns true if ``element`` has an
      `attribute <#concept-attribute>`__ whose `qualified
      name <#concept-attribute-qualified-name>`__ is ``qualifiedName``;
      otherwise false.

   ``element`` ``.`` ```hasAttributeNS`` <#dom-element-hasattributens>`__ ``(`` ``namespace`` ``,`` ``localName`` ``)``
      Returns true if ``element`` has an
      `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace`` and
      `local name <#concept-attribute-local-name>`__ is ``localName``.

   The ``hasAttributes()`` method steps are to return false if
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
   list <#concept-element-attribute>`__ `is
   empty <https://infra.spec.whatwg.org/#list-is-empty>`__; otherwise
   true.

   The ``attributes`` getter steps are to return the associated
   ```NamedNodeMap`` <#namednodemap>`__.

   The ``getAttributeNames()`` method steps are to return the `qualified
   names <#concept-attribute-qualified-name>`__ of the
   `attributes <#concept-attribute>`__ in
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
   list <#concept-element-attribute>`__, in order; otherwise a new
   `list <https://infra.spec.whatwg.org/#list>`__.

   These are not guaranteed to be unique.

   The ``getAttribute(`` ``qualifiedName`` ``)`` method steps are:

   #. Let ``attr`` be the result of `getting an
      attribute <#concept-element-attributes-get-by-name>`__ given
      ``qualifiedName`` and
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. If ``attr`` is null, return null.

   #. Return ``attr``\ ’s `value <#concept-attribute-value>`__.

   The ``getAttributeNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are:

   #. Let ``attr`` be the result of `getting an
      attribute <#concept-element-attributes-get-by-namespace>`__ given
      ``namespace``, ``localName``, and
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. If ``attr`` is null, return null.

   #. Return ``attr``\ ’s `value <#concept-attribute-value>`__.

   The ``setAttribute(`` ``qualifiedName`` ``,`` ``value`` ``)``
   method steps are:

   #. If ``qualifiedName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production in
      XML, then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ and
      its `node document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, then set ``qualifiedName`` to
      ``qualifiedName`` in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. Let ``attribute`` be the first `attribute <#concept-attribute>`__
      in `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
      list <#concept-element-attribute>`__ whose `qualified
      name <#concept-attribute-qualified-name>`__ is ``qualifiedName``,
      and null otherwise.

   #. If ``attribute`` is null, create an
      `attribute <#concept-attribute>`__ whose `local
      name <#concept-attribute-local-name>`__ is ``qualifiedName``,
      `value <#concept-attribute-value>`__ is ``value``, and `node
      document <#concept-node-document>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__, then
      `append <#concept-element-attributes-append>`__ this
      `attribute <#concept-attribute>`__ to
      `this <https://webidl.spec.whatwg.org/#this>`__, and then return.

   #. `Change <#concept-element-attributes-change>`__ ``attribute`` to
      ``value``.

   The
   ``setAttributeNS(`` ``namespace`` ``,`` ``qualifiedName`` ``,`` ``value`` ``)``
   method steps are:

   #. Let ``namespace``, ``prefix``, and ``localName`` be the result of
      passing ``namespace`` and ``qualifiedName`` to `validate and
      extract <#validate-and-extract>`__.

   #. `Set an attribute value <#concept-element-attributes-set-value>`__
      for `this <https://webidl.spec.whatwg.org/#this>`__ using
      ``localName``, ``value``, and also ``prefix`` and ``namespace``.

   The ``removeAttribute(`` ``qualifiedName`` ``)`` method steps are
   to `remove an
   attribute <#concept-element-attributes-remove-by-name>`__ given
   ``qualifiedName`` and
   `this <https://webidl.spec.whatwg.org/#this>`__, and then return
   undefined.

   The
   ``removeAttributeNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are to `remove an
   attribute <#concept-element-attributes-remove-by-namespace>`__ given
   ``namespace``, ``localName``, and
   `this <https://webidl.spec.whatwg.org/#this>`__, and then return
   undefined.

   The ``hasAttribute(`` ``qualifiedName`` ``)`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ and
      its `node document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, then set ``qualifiedName`` to
      ``qualifiedName`` in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. Return true if `this <https://webidl.spec.whatwg.org/#this>`__
      `has <#concept-element-attribute-has>`__ an
      `attribute <#concept-attribute>`__ whose `qualified
      name <#concept-attribute-qualified-name>`__ is ``qualifiedName``;
      otherwise false.

   The ``toggleAttribute(`` ``qualifiedName`` ``,`` ``force`` ``)``
   method steps are:

   #. If ``qualifiedName`` does not match the
      ```Name`` <https://www.w3.org/TR/xml/#NT-Name>`__ production in
      XML, then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ and
      its `node document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, then set ``qualifiedName`` to
      ``qualifiedName`` in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. Let ``attribute`` be the first `attribute <#concept-attribute>`__
      in `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
      list <#concept-element-attribute>`__ whose `qualified
      name <#concept-attribute-qualified-name>`__ is ``qualifiedName``,
      and null otherwise.

   #. If ``attribute`` is null, then:

      #. If ``force`` is not given or is true, create an
         `attribute <#concept-attribute>`__ whose `local
         name <#concept-attribute-local-name>`__ is ``qualifiedName``,
         `value <#concept-attribute-value>`__ is the empty string, and
         `node document <#concept-node-document>`__ is
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
         document <#concept-node-document>`__, then
         `append <#concept-element-attributes-append>`__ this
         `attribute <#concept-attribute>`__ to
         `this <https://webidl.spec.whatwg.org/#this>`__, and then
         return true.

      #. Return false.

   #. Otherwise, if ``force`` is not given or is false, `remove an
      attribute <#concept-element-attributes-remove-by-name>`__ given
      ``qualifiedName`` and
      `this <https://webidl.spec.whatwg.org/#this>`__, and then return
      false.

   #. Return true.

   The ``hasAttributeNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are:

   #. If ``namespace`` is the empty string, then set it to null.

   #. Return true if `this <https://webidl.spec.whatwg.org/#this>`__
      `has <#concept-element-attribute-has>`__ an
      `attribute <#concept-attribute>`__ whose
      `namespace <#concept-attribute-namespace>`__ is ``namespace`` and
      `local name <#concept-attribute-local-name>`__ is ``localName``;
      otherwise false.

   --------------

   The ``getAttributeNode(`` ``qualifiedName`` ``)`` method steps are
   to return the result of `getting an
   attribute <#concept-element-attributes-get-by-name>`__ given
   ``qualifiedName`` and
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The
   ``getAttributeNodeNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are to return the result of `getting an
   attribute <#concept-element-attributes-get-by-namespace>`__ given
   ``namespace``, ``localName``, and
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``setAttributeNode(`` ``attr`` ``)`` and
   ``setAttributeNodeNS(`` ``attr`` ``)`` methods steps are to return
   the result of `setting an
   attribute <#concept-element-attributes-set>`__ given ``attr`` and
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``removeAttributeNode(`` ``attr`` ``)`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
      list <#concept-element-attribute>`__ does not
      `contain <https://infra.spec.whatwg.org/#list-contain>`__
      ``attr``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. `Remove <#concept-element-attributes-remove>`__ ``attr``.

   #. Return ``attr``.

   --------------

   ``var shadow =`` ``element`` ``.`` ```attachShadow(init)`` <#dom-element-attachshadow>`__
      Creates a `shadow root <#concept-shadow-root>`__ for ``element``
      and returns it.

   ``var shadow =`` ``element`` ``.`` ```shadowRoot`` <#dom-element-shadowroot>`__
      Returns ``element``\ ’s `shadow
      root <#concept-element-shadow-root>`__, if any, and if `shadow
      root <#concept-shadow-root>`__\ ’s `mode <#shadowroot-mode>`__ is
      "``open``", and null otherwise.

   A valid shadow host name is:

   -  a `valid custom element
      name <https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name>`__
   -  "``article``", "``aside``", "``blockquote``", "``body``",
      "``div``", "``footer``", "``h1``", "``h2``", "``h3``", "``h4``",
      "``h5``", "``h6``", "``header``", "``main``", "``nav``", "``p``",
      "``section``", or "``span``"

   .. container:: algorithm

      The ``attachShadow(`` ``init`` ``)`` method steps are:

      #. Run `attach a shadow root <#concept-attach-a-shadow-root>`__
         with `this <https://webidl.spec.whatwg.org/#this>`__,
         ``init``\ ["```mode`` <#dom-shadowrootinit-mode>`__"],
         ``init``\ ["```clonable`` <#dom-shadowrootinit-clonable>`__"],
         ``init``\ ["```serializable`` <#dom-shadowrootinit-serializable>`__"],
         ``init``\ ["```delegatesFocus`` <#dom-shadowrootinit-delegatesfocus>`__"],
         and
         ``init``\ ["```slotAssignment`` <#dom-shadowrootinit-slotassignment>`__"].

      #. Return `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `shadow root <#concept-element-shadow-root>`__.

   .. container:: algorithm

      To attach a shadow root, given an `element <#concept-element>`__
      ``element``, a string ``mode``, a boolean ``clonable``, a boolean
      ``serializable``, a boolean ``delegatesFocus``, and a string
      ``slotAssignment``:

      #. If ``element``\ ’s `namespace <#concept-element-namespace>`__
         is not the `HTML
         namespace <https://infra.spec.whatwg.org/#html-namespace>`__,
         then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``element``\ ’s `local name <#concept-element-local-name>`__
         is not a `valid shadow host name <#valid-shadow-host-name>`__,
         then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``element``\ ’s `local name <#concept-element-local-name>`__
         is a `valid custom element
         name <https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name>`__,
         or ``element``\ ’s ```is`` value <#concept-element-is-value>`__
         is non-null, then:

         #. Let ``definition`` be the result of `looking up a custom
            element
            definition <https://html.spec.whatwg.org/multipage/custom-elements.html#look-up-a-custom-element-definition>`__
            given ``element``\ ’s `node
            document <#concept-node-document>`__, its
            `namespace <#concept-element-namespace>`__, its `local
            name <#concept-element-local-name>`__, and its ```is``
            value <#concept-element-is-value>`__.

         #. If ``definition`` is not null and ``definition``\ ’s
            `disable
            shadow <https://html.spec.whatwg.org/multipage/custom-elements.html#concept-custom-element-definition-disable-shadow>`__
            is true, then
            `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``element`` is a `shadow host <#element-shadow-host>`__,
         then:

         #. Let ``currentShadowRoot`` be ``element``\ ’s `shadow
            root <#concept-element-shadow-root>`__.

         #. If any of the following are true:

            -  ``currentShadowRoot``\ ’s
               `declarative <#shadowroot-declarative>`__ is false; or

            -  ``currentShadowRoot``\ ’s `mode <#shadowroot-mode>`__ is
               not ``mode``,

            then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
            "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
            ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

         #. Otherwise:

            #. `Remove <#concept-node-remove>`__ all of
               ``currentShadowRoot``\ ’s
               `children <#concept-tree-child>`__, in `tree
               order <#concept-tree-order>`__.

            #. Set ``currentShadowRoot``\ ’s
               `declarative <#shadowroot-declarative>`__ to false.

            #. Return.

      #. Let ``shadow`` be a new `shadow root <#concept-shadow-root>`__
         whose `node document <#concept-node-document>`__ is
         ``element``\ ’s `node document <#concept-node-document>`__,
         `host <#concept-documentfragment-host>`__ is ``element``, and
         `mode <#shadowroot-mode>`__ is ``mode``.

      #. Set ``shadow``\ ’s `delegates
         focus <#shadowroot-delegates-focus>`__ to ``delegatesFocus``.

      #. If ``element``\ ’s `custom element
         state <#concept-element-custom-element-state>`__ is
         "``precustomized``" or "``custom``", then set ``shadow``\ ’s
         `available to element
         internals <#shadowroot-available-to-element-internals>`__ to
         true.

      #. Set ``shadow``\ ’s `slot
         assignment <#shadowroot-slot-assignment>`__ to
         ``slotAssignment``.

      #. Set ``shadow``\ ’s `declarative <#shadowroot-declarative>`__ to
         false.

      #. Set ``shadow``\ ’s `clonable <#shadowroot-clonable>`__ to
         ``clonable``.

      #. Set ``shadow``\ ’s `serializable <#shadowroot-serializable>`__
         to ``serializable``.

      #. Set ``element``\ ’s `shadow
         root <#concept-element-shadow-root>`__ to ``shadow``.

   .. container:: algorithm

      The ``shadowRoot`` getter steps are:

      #. Let ``shadow`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `shadow
         root <#concept-element-shadow-root>`__.

      #. If ``shadow`` is null or its `mode <#shadowroot-mode>`__ is
         "``closed``", then return null.

      #. Return ``shadow``.

   --------------

   ``element`` ``.`` ```closest(selectors)`` <#dom-element-closest>`__
      Returns the first (starting at ``element``) `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ that matches
      ``selectors``, and null otherwise.
   ``element`` ``.`` ```matches(selectors)`` <#dom-element-matches>`__
      Returns true if matching ``selectors`` against ``element``\ ’s
      `root <#concept-tree-root>`__ yields ``element``; otherwise false.

   The ``closest(`` ``selectors`` ``)`` method steps are:

   #. Let ``s`` be the result of `parse a
      selector <https://drafts.csswg.org/selectors-4/#parse-a-selector>`__
      from ``selectors``. `[SELECTORS4] <#biblio-selectors4>`__

   #. If ``s`` is failure, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``elements`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `inclusive
      ancestors <#concept-tree-inclusive-ancestor>`__ that are
      `elements <#concept-element>`__, in reverse `tree
      order <#concept-tree-order>`__.

   #. For each ``element`` in ``elements``, if `match a selector against
      an
      element <https://drafts.csswg.org/selectors-4/#match-a-selector-against-an-element>`__,
      using ``s``, ``element``, and `scoping
      root <https://drafts.csswg.org/selectors-4/#scoping-root>`__
      `this <https://webidl.spec.whatwg.org/#this>`__, returns success,
      return ``element``. `[SELECTORS4] <#biblio-selectors4>`__

   #. Return null.

   The ``matches(`` ``selectors`` ``)`` and
   ``webkitMatchesSelector(`` ``selectors`` ``)`` method steps are:

   #. Let ``s`` be the result of `parse a
      selector <https://drafts.csswg.org/selectors-4/#parse-a-selector>`__
      from ``selectors``. `[SELECTORS4] <#biblio-selectors4>`__

   #. If ``s`` is failure, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If the result of `match a selector against an
      element <https://drafts.csswg.org/selectors-4/#match-a-selector-against-an-element>`__,
      using ``s``, `this <https://webidl.spec.whatwg.org/#this>`__, and
      `scoping
      root <https://drafts.csswg.org/selectors-4/#scoping-root>`__
      `this <https://webidl.spec.whatwg.org/#this>`__, returns success,
      then return true; otherwise, return false.
      `[SELECTORS4] <#biblio-selectors4>`__

   --------------

   The ``getElementsByTagName(`` ``qualifiedName`` ``)`` method steps
   are to return the `list of elements with qualified name
   ``qualifiedName`` <#concept-getelementsbytagname>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The
   ``getElementsByTagNameNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are to return the `list of elements with namespace
   ``namespace`` and local name
   ``localName`` <#concept-getelementsbytagnamens>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``getElementsByClassName(`` ``classNames`` ``)`` method steps
   are to return the `list of elements with class names
   ``classNames`` <#concept-getelementsbyclassname>`__ for
   `this <https://webidl.spec.whatwg.org/#this>`__.

   --------------

   To insert adjacent, given an `element <#concept-element>`__
   ``element``, string ``where``, and a `node <#concept-node>`__
   ``node``, run the steps associated with the first `ASCII
   case-insensitive <https://infra.spec.whatwg.org/#ascii-case-insensitive>`__
   match for ``where``:

   "``beforebegin``"
      If ``element``\ ’s `parent <#concept-tree-parent>`__ is null,
      return null.

      Return the result of `pre-inserting <#concept-node-pre-insert>`__
      ``node`` into ``element``\ ’s `parent <#concept-tree-parent>`__
      before ``element``.

   "``afterbegin``"
      Return the result of `pre-inserting <#concept-node-pre-insert>`__
      ``node`` into ``element`` before ``element``\ ’s `first
      child <#concept-tree-first-child>`__.

   "``beforeend``"
      Return the result of `pre-inserting <#concept-node-pre-insert>`__
      ``node`` into ``element`` before null.

   "``afterend``"
      If ``element``\ ’s `parent <#concept-tree-parent>`__ is null,
      return null.

      Return the result of `pre-inserting <#concept-node-pre-insert>`__
      ``node`` into ``element``\ ’s `parent <#concept-tree-parent>`__
      before ``element``\ ’s `next
      sibling <#concept-tree-next-sibling>`__.

   Otherwise
      `Throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   The ``insertAdjacentElement(`` ``where`` ``,`` ``element`` ``)``
   method steps are to return the result of running `insert
   adjacent <#insert-adjacent>`__, give
   `this <https://webidl.spec.whatwg.org/#this>`__, ``where``, and
   ``element``.

   The ``insertAdjacentText(`` ``where`` ``,`` ``data`` ``)`` method
   steps are:

   #. Let ``text`` be a new ```Text`` <#text>`__
      `node <#concept-node>`__ whose `data <#concept-cd-data>`__ is
      ``data`` and `node document <#concept-node-document>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
      document <#concept-node-document>`__.

   #. Run `insert adjacent <#insert-adjacent>`__, given
      `this <https://webidl.spec.whatwg.org/#this>`__, ``where``, and
      ``text``.

   This method returns nothing because it existed before we had a chance
   to design it.


/4.9.1. Interface NamedNodeMap
==============================

   .. .. rubric:: 4.9.1. Interface
      ```NamedNodeMap`` <#namednodemap>`__ ` <#interface-namednodemap>`__
      :name: interface-namednodemap
      :class: heading settled

   .. code:: idl

      [Exposed=Window,
       LegacyUnenumerableNamedProperties]
      interface NamedNodeMap {
        readonly attribute unsigned long length;
        getter Attr? item(unsigned long index);
        getter Attr? getNamedItem(DOMString qualifiedName);
        Attr? getNamedItemNS(DOMString? namespace, DOMString localName);
        [CEReactions] Attr? setNamedItem(Attr attr);
        [CEReactions] Attr? setNamedItemNS(Attr attr);
        [CEReactions] Attr removeNamedItem(DOMString qualifiedName);
        [CEReactions] Attr removeNamedItemNS(DOMString? namespace, DOMString localName);
      };

   A ```NamedNodeMap`` <#namednodemap>`__ has an associated element (an
   `element <#concept-element>`__).

   A ```NamedNodeMap`` <#namednodemap>`__ object’s attribute list is its
   `element <#concept-namednodemap-element>`__\ ’s `attribute
   list <#concept-element-attribute>`__.

   --------------

   A ```NamedNodeMap`` <#namednodemap>`__ object’s `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__
   are the numbers in the range zero to its `attribute
   list <#concept-namednodemap-attribute>`__\ ’s
   `size <https://infra.spec.whatwg.org/#list-size>`__ minus one, unless
   the `attribute list <#concept-namednodemap-attribute>`__ `is
   empty <https://infra.spec.whatwg.org/#list-is-empty>`__, in which
   case there are no `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__.

   The ``length`` getter steps are to return the `attribute
   list <#concept-namednodemap-attribute>`__\ ’s
   `size <https://infra.spec.whatwg.org/#list-size>`__.

   The ``item(`` ``index`` ``)`` method steps are:

   #. If ``index`` is equal to or greater than
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
      list <#concept-namednodemap-attribute>`__\ ’s
      `size <https://infra.spec.whatwg.org/#list-size>`__, then return
      null.

   #. Otherwise, return
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `attribute
      list <#concept-namednodemap-attribute>`__\ [``index``].

   A ```NamedNodeMap`` <#namednodemap>`__ object’s `supported property
   names <https://webidl.spec.whatwg.org/#dfn-supported-property-names>`__
   are the return value of running these steps:

   #. Let ``names`` be the `qualified
      names <#concept-attribute-qualified-name>`__ of the
      `attributes <#concept-attribute>`__ in this
      ```NamedNodeMap`` <#namednodemap>`__ object’s `attribute
      list <#concept-namednodemap-attribute>`__, with duplicates
      omitted, in order.

   #. If this ```NamedNodeMap`` <#namednodemap>`__ object’s
      `element <#concept-namednodemap-element>`__ is in the `HTML
      namespace <https://infra.spec.whatwg.org/#html-namespace>`__ and
      its `node document <#concept-node-document>`__ is an `HTML
      document <#html-document>`__, then `for
      each <https://infra.spec.whatwg.org/#list-iterate>`__ ``name`` in
      ``names``:

      #. Let ``lowercaseName`` be ``name``, in `ASCII
         lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

      #. If ``lowercaseName`` is not equal to ``name``, remove ``name``
         from ``names``.

   #. Return ``names``.

   The ``getNamedItem(`` ``qualifiedName`` ``)`` method steps are to
   return the result of `getting an
   attribute <#concept-element-attributes-get-by-name>`__ given
   ``qualifiedName`` and `element <#concept-namednodemap-element>`__.

   The ``getNamedItemNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are to return the result of `getting an
   attribute <#concept-element-attributes-get-by-namespace>`__ given
   ``namespace``, ``localName``, and
   `element <#concept-namednodemap-element>`__.

   The ``setNamedItem(`` ``attr`` ``)`` and
   ``setNamedItemNS(`` ``attr`` ``)`` method steps are to return the
   result of `setting an attribute <#concept-element-attributes-set>`__
   given ``attr`` and `element <#concept-namednodemap-element>`__.

   The ``removeNamedItem(`` ``qualifiedName`` ``)`` method steps are:

   #. Let ``attr`` be the result of `removing an
      attribute <#concept-element-attributes-remove-by-name>`__ given
      ``qualifiedName`` and `element <#concept-namednodemap-element>`__.

   #. If ``attr`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return ``attr``.

   The
   ``removeNamedItemNS(`` ``namespace`` ``,`` ``localName`` ``)``
   method steps are:

   #. Let ``attr`` be the result of `removing an
      attribute <#concept-element-attributes-remove-by-namespace>`__
      given ``namespace``, ``localName``, and
      `element <#concept-namednodemap-element>`__.

   #. If ``attr`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotFoundError`` <https://webidl.spec.whatwg.org/#notfounderror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Return ``attr``.


/4.9.2. Interface Attr
======================

   .. .. rubric:: 4.9.2. Interface
      ```Attr`` <#attr>`__ ` <#interface-attr>`__
      :name: interface-attr
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Attr : Node {
        readonly attribute DOMString? namespaceURI;
        readonly attribute DOMString? prefix;
        readonly attribute DOMString localName;
        readonly attribute DOMString name;
        [CEReactions] attribute DOMString value;

        readonly attribute Element? ownerElement;

        readonly attribute boolean specified; // useless; always returns true
      };

   ```Attr`` <#attr>`__ `nodes <#concept-node>`__ are simply known as
   attributes. They are sometimes referred to as *content attributes* to
   avoid confusion with IDL attributes.

   `Attributes <#concept-attribute>`__ have a namespace (null or a
   non-empty string), namespace prefix (null or a non-empty string),
   local name (a non-empty string), value (a string), and element (null
   or an `element <#concept-element>`__).

   If designed today they would just have a name and value. ☹

   An `attribute <#concept-attribute>`__\ ’s qualified name is its
   `local name <#concept-attribute-local-name>`__ if its `namespace
   prefix <#concept-attribute-namespace-prefix>`__ is null, and its
   `namespace prefix <#concept-attribute-namespace-prefix>`__, followed
   by "``:``", followed by its `local
   name <#concept-attribute-local-name>`__, otherwise.

   User agents could have this as an internal slot as an optimization.

   When an `attribute <#concept-attribute>`__ is created, its `local
   name <#concept-attribute-local-name>`__ is given. Unless explicitly
   given when an `attribute <#concept-attribute>`__ is created, its
   `namespace <#concept-attribute-namespace>`__, `namespace
   prefix <#concept-attribute-namespace-prefix>`__, and
   `element <#concept-attribute-element>`__ are set to null, and its
   `value <#concept-attribute-value>`__ is set to the empty string.

   An ``A`` attribute is an `attribute <#concept-attribute>`__ whose
   `local name <#concept-attribute-local-name>`__ is ``A`` and whose
   `namespace <#concept-attribute-namespace>`__ and `namespace
   prefix <#concept-attribute-namespace-prefix>`__ are null.

   --------------

   The ``namespaceURI`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `namespace <#concept-attribute-namespace>`__.

   The ``prefix`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `namespace
   prefix <#concept-attribute-namespace-prefix>`__.

   The ``localName`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `local
   name <#concept-attribute-local-name>`__.

   The ``name`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `qualified
   name <#concept-attribute-qualified-name>`__.

   The ``value`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `value <#concept-attribute-value>`__.

   To set an existing attribute value, given an
   `attribute <#concept-attribute>`__ ``attribute`` and string
   ``value``, run these steps:

   #. If ``attribute``\ ’s `element <#concept-attribute-element>`__ is
      null, then set ``attribute``\ ’s
      `value <#concept-attribute-value>`__ to ``value``.

   #. Otherwise, `change <#concept-element-attributes-change>`__
      ``attribute`` to ``value``.

   The ```value`` <#dom-attr-value>`__ setter steps are to `set an
   existing attribute value <#set-an-existing-attribute-value>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and the given value.

   --------------

   The ``ownerElement`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `element <#concept-attribute-element>`__.

   --------------

   The ``specified`` getter steps are to return true.


/4.10. Interface CharacterData
==============================

   .. .. rubric:: 4.10. Interface
      ```CharacterData`` <#characterdata>`__ ` <#interface-characterdata>`__
      :name: interface-characterdata
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface CharacterData : Node {
        attribute [LegacyNullToEmptyString] DOMString data;
        readonly attribute unsigned long length;
        DOMString substringData(unsigned long offset, unsigned long count);
        undefined appendData(DOMString data);
        undefined insertData(unsigned long offset, DOMString data);
        undefined deleteData(unsigned long offset, unsigned long count);
        undefined replaceData(unsigned long offset, unsigned long count, DOMString data);
      };

   ```CharacterData`` <#characterdata>`__ is an abstract interface. You
   cannot get a direct instance of it. It is used by
   ```Text`` <#text>`__,
   ```ProcessingInstruction`` <#processinginstruction>`__, and
   ```Comment`` <#comment>`__ `nodes <#concept-node>`__.

   Each `node <#concept-node>`__ inheriting from the
   ```CharacterData`` <#characterdata>`__ interface has an associated
   mutable string called data.

   To replace data of node ``node`` with offset ``offset``, count
   ``count``, and data ``data``, run these steps:

   #. Let ``length`` be ``node``\ ’s `length <#concept-node-length>`__.

   #. If ``offset`` is greater than ``length``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``offset`` plus ``count`` is greater than ``length``, then set
      ``count`` to ``length`` minus ``offset``.

   #. `Queue a mutation record <#queue-a-mutation-record>`__ of
      "``characterData``" for ``node`` with null, null, ``node``\ ’s
      `data <#concept-cd-data>`__, « », « », null, and null.

   #. Insert ``data`` into ``node``\ ’s `data <#concept-cd-data>`__
      after ``offset`` `code
      units <https://infra.spec.whatwg.org/#code-unit>`__.

   #. Let ``delete offset`` be ``offset`` + ``data``\ ’s
      `length <https://infra.spec.whatwg.org/#string-length>`__.

   #. Starting from ``delete offset`` `code
      units <https://infra.spec.whatwg.org/#code-unit>`__, remove
      ``count`` `code
      units <https://infra.spec.whatwg.org/#code-unit>`__ from
      ``node``\ ’s `data <#concept-cd-data>`__.

   #. For each `live range <#concept-live-range>`__ whose `start
      node <#concept-range-start-node>`__ is ``node`` and `start
      offset <#concept-range-start-offset>`__ is greater than ``offset``
      but less than or equal to ``offset`` plus ``count``, set its
      `start offset <#concept-range-start-offset>`__ to ``offset``.

   #. For each `live range <#concept-live-range>`__ whose `end
      node <#concept-range-end-node>`__ is ``node`` and `end
      offset <#concept-range-end-offset>`__ is greater than ``offset``
      but less than or equal to ``offset`` plus ``count``, set its `end
      offset <#concept-range-end-offset>`__ to ``offset``.

   #. For each `live range <#concept-live-range>`__ whose `start
      node <#concept-range-start-node>`__ is ``node`` and `start
      offset <#concept-range-start-offset>`__ is greater than ``offset``
      plus ``count``, increase its `start
      offset <#concept-range-start-offset>`__ by ``data``\ ’s
      `length <https://infra.spec.whatwg.org/#string-length>`__ and
      decrease it by ``count``.

   #. For each `live range <#concept-live-range>`__ whose `end
      node <#concept-range-end-node>`__ is ``node`` and `end
      offset <#concept-range-end-offset>`__ is greater than ``offset``
      plus ``count``, increase its `end
      offset <#concept-range-end-offset>`__ by ``data``\ ’s
      `length <https://infra.spec.whatwg.org/#string-length>`__ and
      decrease it by ``count``.

   #. If ``node``\ ’s `parent <#concept-tree-parent>`__ is non-null,
      then run the `children changed
      steps <#concept-node-children-changed-ext>`__ for ``node``\ ’s
      `parent <#concept-tree-parent>`__.

   To substring data with node ``node``, offset ``offset``, and count
   ``count``, run these steps:

   #. Let ``length`` be ``node``\ ’s `length <#concept-node-length>`__.
   #. If ``offset`` is greater than ``length``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   #. If ``offset`` plus ``count`` is greater than ``length``, return a
      string whose value is the `code
      units <https://infra.spec.whatwg.org/#code-unit>`__ from the
      ``offset``\ :sup:`th` `code
      unit <https://infra.spec.whatwg.org/#code-unit>`__ to the end of
      ``node``\ ’s `data <#concept-cd-data>`__, and then return.
   #. Return a string whose value is the `code
      units <https://infra.spec.whatwg.org/#code-unit>`__ from the
      ``offset``\ :sup:`th` `code
      unit <https://infra.spec.whatwg.org/#code-unit>`__ to the
      ``offset``\ + ``count``\ :sup:`th` `code
      unit <https://infra.spec.whatwg.org/#code-unit>`__ in ``node``\ ’s
      `data <#concept-cd-data>`__.

   The ``data`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `data <#concept-cd-data>`__. Its setter must `replace
   data <#concept-cd-replace>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset 0, count
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `length <#concept-node-length>`__, and data new value.

   The ``length`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `length <#concept-node-length>`__.

   The ``substringData(`` ``offset`` ``,`` ``count`` ``)`` method
   steps are to return the result of running `substring
   data <#concept-cd-substring>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset ``offset``,
   and count ``count``.

   The ``appendData(`` ``data`` ``)`` method steps are to `replace
   data <#concept-cd-replace>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `length <#concept-node-length>`__, count 0, and data ``data``.

   The ``insertData(`` ``offset`` ``,`` ``data`` ``)`` method steps
   are to `replace data <#concept-cd-replace>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset ``offset``,
   count 0, and data ``data``.

   The ``deleteData(`` ``offset`` ``,`` ``count`` ``)`` method steps
   are to `replace data <#concept-cd-replace>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset ``offset``,
   count ``count``, and data the empty string.

   The
   ``replaceData(`` ``offset`` ``,`` ``count`` ``,`` ``data`` ``)``
   method steps are to `replace data <#concept-cd-replace>`__ with node
   `this <https://webidl.spec.whatwg.org/#this>`__, offset ``offset``,
   count ``count``, and data ``data``.


/4.11. Interface Text
=====================

   .. .. rubric:: 4.11. Interface
      ```Text`` <#text>`__ ` <#interface-text>`__
      :name: interface-text
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Text : CharacterData {
        constructor(optional DOMString data = "");

        [NewObject] Text splitText(unsigned long offset);
        readonly attribute DOMString wholeText;
      };

   ``text`` ``= new`` ```Text([`` ``data`` ``= ""])`` <#dom-text-text>`__
      Returns a new ```Text`` <#text>`__ `node <#concept-node>`__ whose
      `data <#concept-cd-data>`__ is ``data``.
   ``text`` ``.`` ```splitText(offset)`` <#dom-text-splittext>`__
      Splits `data <#concept-cd-data>`__ at the given ``offset`` and
      returns the remainder as ```Text`` <#text>`__
      `node <#concept-node>`__.
   ``text`` ``.`` ```wholeText`` <#dom-text-wholetext>`__
      Returns the combined `data <#concept-cd-data>`__ of all direct
      ```Text`` <#text>`__ `node <#concept-node>`__
      `siblings <#concept-tree-sibling>`__.

   --------------

   An exclusive  ```Text`` <#text>`__\  node is a ```Text`` <#text>`__
   `node <#concept-node>`__ that is not a
   ```CDATASection`` <#cdatasection>`__ `node <#concept-node>`__.

   The contiguous  ```Text`` <#text>`__\  nodes of a
   `node <#concept-node>`__ ``node`` are ``node``, ``node``\ ’s
   `previous sibling <#concept-tree-previous-sibling>`__
   ```Text`` <#text>`__ `node <#concept-node>`__, if any, and its
   `contiguous ``Text`` nodes <#contiguous-text-nodes>`__, and
   ``node``\ ’s `next sibling <#concept-tree-next-sibling>`__
   ```Text`` <#text>`__ `node <#concept-node>`__, if any, and its
   `contiguous ``Text`` nodes <#contiguous-text-nodes>`__, avoiding any
   duplicates.

   The contiguous exclusive  ```Text`` <#text>`__\  nodes of a
   `node <#concept-node>`__ ``node`` are ``node``, ``node``\ ’s
   `previous sibling <#concept-tree-previous-sibling>`__ `exclusive
   ``Text`` node <#exclusive-text-node>`__, if any, and its `contiguous
   exclusive ``Text`` nodes <#contiguous-exclusive-text-nodes>`__, and
   ``node``\ ’s `next sibling <#concept-tree-next-sibling>`__ `exclusive
   ``Text`` node <#exclusive-text-node>`__, if any, and its `contiguous
   exclusive ``Text`` nodes <#contiguous-exclusive-text-nodes>`__,
   avoiding any duplicates.

   The child text content of a `node <#concept-node>`__ ``node`` is the
   `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
   of the `data <#concept-cd-data>`__ of all the ```Text`` <#text>`__
   `node <#concept-node>`__ `children <#concept-tree-child>`__ of
   ``node``, in `tree order <#concept-tree-order>`__.

   The descendant text content of a `node <#concept-node>`__ ``node`` is
   the
   `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
   of the `data <#concept-cd-data>`__ of all the ```Text`` <#text>`__
   `node <#concept-node>`__ `descendants <#concept-tree-descendant>`__
   of ``node``, in `tree order <#concept-tree-order>`__.

   --------------

   The ``new Text(`` ``data`` ``)`` constructor steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `data <#concept-cd-data>`__ to ``data`` and
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
   document <#concept-node-document>`__ to `current global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object>`__\ ’s
   `associated
   ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__.

   To split a ```Text`` <#text>`__ `node <#concept-node>`__ ``node``
   with offset ``offset``, run these steps:

   #. Let ``length`` be ``node``\ ’s `length <#concept-node-length>`__.

   #. If ``offset`` is greater than ``length``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``count`` be ``length`` minus ``offset``.

   #. Let ``new data`` be the result of `substringing
      data <#concept-cd-substring>`__ with node ``node``, offset
      ``offset``, and count ``count``.

   #. Let ``new node`` be a new ```Text`` <#text>`__
      `node <#concept-node>`__, with the same `node
      document <#concept-node-document>`__ as ``node``. Set
      ``new node``\ ’s `data <#concept-cd-data>`__ to ``new data``.

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.

   #. If ``parent`` is not null, then:

      #. `Insert <#concept-node-insert>`__ ``new node`` into ``parent``
         before ``node``\ ’s `next
         sibling <#concept-tree-next-sibling>`__.

      #. For each `live range <#concept-live-range>`__ whose `start
         node <#concept-range-start-node>`__ is ``node`` and `start
         offset <#concept-range-start-offset>`__ is greater than
         ``offset``, set its `start node <#concept-range-start-node>`__
         to ``new node`` and decrease its `start
         offset <#concept-range-start-offset>`__ by ``offset``.

      #. For each `live range <#concept-live-range>`__ whose `end
         node <#concept-range-end-node>`__ is ``node`` and `end
         offset <#concept-range-end-offset>`__ is greater than
         ``offset``, set its `end node <#concept-range-end-node>`__ to
         ``new node`` and decrease its `end
         offset <#concept-range-end-offset>`__ by ``offset``.

      #. For each `live range <#concept-live-range>`__ whose `start
         node <#concept-range-start-node>`__ is ``parent`` and `start
         offset <#concept-range-start-offset>`__ is equal to the
         `index <#concept-tree-index>`__ of ``node`` plus 1, increase
         its `start offset <#concept-range-start-offset>`__ by 1.

      #. For each `live range <#concept-live-range>`__ whose `end
         node <#concept-range-end-node>`__ is ``parent`` and `end
         offset <#concept-range-end-offset>`__ is equal to the
         `index <#concept-tree-index>`__ of ``node`` plus 1, increase
         its `end offset <#concept-range-end-offset>`__ by 1.

   #. `Replace data <#concept-cd-replace>`__ with node ``node``, offset
      ``offset``, count ``count``, and data the empty string.

   #. Return ``new node``.

   The ``splitText(`` ``offset`` ``)`` method steps are to
   `split <#concept-text-split>`__
   `this <https://webidl.spec.whatwg.org/#this>`__ with offset
   ``offset``.

   The ``wholeText`` getter steps are to return the
   `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
   of the `data <#concept-cd-data>`__ of the `contiguous ``Text``
   nodes <#contiguous-text-nodes>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__, in `tree
   order <#concept-tree-order>`__.


/4.12. Interface CDATASection
=============================

   .. .. rubric:: 4.12. Interface
      ```CDATASection`` <#cdatasection>`__ ` <#interface-cdatasection>`__
      :name: interface-cdatasection
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface CDATASection : Text {
      };


/4.13. Interface ProcessingInstruction
======================================

   .. .. rubric:: 4.13. Interface
      ```ProcessingInstruction`` <#processinginstruction>`__ ` <#interface-processinginstruction>`__
      :name: interface-processinginstruction
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface ProcessingInstruction : CharacterData {
        readonly attribute DOMString target;
      };

   ```ProcessingInstruction`` <#processinginstruction>`__
   `nodes <#concept-node>`__ have an associated target.

   The ``target`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `target <#concept-pi-target>`__.


/4.14. Interface Comment
========================

   .. .. rubric:: 4.14. Interface
      ```Comment`` <#comment>`__ ` <#interface-comment>`__
      :name: interface-comment
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Comment : CharacterData {
        constructor(optional DOMString data = "");
      };

   ``comment`` ``= new`` ```Comment([`` ``data`` ``= ""])`` <#dom-comment-comment>`__
      Returns a new ```Comment`` <#comment>`__ `node <#concept-node>`__
      whose `data <#concept-cd-data>`__ is ``data``.

   The ``new Comment(`` ``data`` ``)`` constructor steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `data <#concept-cd-data>`__ to ``data`` and
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `node
   document <#concept-node-document>`__ to `current global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object>`__\ ’s
   `associated
   ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__.


/5. Ranges
==========

   .. .. rubric:: 5. Ranges ` <#ranges>`__
      :name: ranges
      :class: heading settled


/5.1. Introduction to "DOM
==========================

   .. .. rubric:: 5.1. Introduction to "DOM
      Ranges" ` <#introduction-to-dom-ranges>`__
      :name: introduction-to-dom-ranges
      :class: heading settled

   ```StaticRange`` <#staticrange>`__ and ```Range`` <#range>`__ objects
   (`ranges <#concept-range>`__) represent a sequence of content within
   a `node tree <#concept-node-tree>`__. Each `range <#concept-range>`__
   has a `start <#concept-range-start>`__ and an
   `end <#concept-range-end>`__ which are `boundary
   points <#concept-range-bp>`__. A `boundary
   point <#concept-range-bp>`__ is a
   `tuple <https://infra.spec.whatwg.org/#tuple>`__ consisting of a
   `node <#boundary-point-node>`__ and an
   `offset <#concept-range-bp-offset>`__. So in other words, a
   `range <#concept-range>`__ represents a piece of content within a
   `node tree <#concept-node-tree>`__ between two `boundary
   points <#concept-range-bp>`__.

   `Ranges <#concept-range>`__ are frequently used in editing for
   selecting and copying content.

   -  ```Element`` <#element>`__: ``p``

      -  ```Element`` <#element>`__:
         ``<img src="insanity-wolf" alt="Little-endian BOM; decode as big-endian!">``
      -  ```Text`` <#text>`__:  CSS 2.1 syndata is 
      -  ```Element`` <#element>`__: ``<em>``

         -  ```Text`` <#text>`__: awesome

      -  ```Text`` <#text>`__: !

   In the `node tree <#concept-node-tree>`__ above, a
   `range <#concept-range>`__ can be used to represent the sequence
   “syndata is awes”. Assuming ``p`` is assigned to the ``p``
   `element <#concept-element>`__, and ``em`` to the ``em``
   `element <#concept-element>`__, this would be done as follows:

   .. code:: lang-javascript

      var range = new Range(),
          firstText = p.childNodes[1],
          secondText = em.firstChild
      range.setStart(firstText, 9) // do not forget the leading space
      range.setEnd(secondText, 4)
      // range now stringifies to the aforementioned quote

   `Attributes <#concept-attribute>`__ such as ``src`` and ``alt`` in
   the `node tree <#concept-node-tree>`__ above cannot be represented by
   a `range <#concept-range>`__. `Ranges <#concept-range>`__ are only
   useful for `nodes <#concept-node>`__.

   ```Range`` <#range>`__ objects, unlike
   ```StaticRange`` <#staticrange>`__ objects, are affected by mutations
   to the `node tree <#concept-node-tree>`__. Therefore they are also
   known as `live ranges <#concept-live-range>`__. Such mutations will
   not invalidate them and will try to ensure that it still represents
   the same piece of content. Necessarily, a `live
   range <#concept-live-range>`__ might itself be modified as part of
   the mutation to the `node tree <#concept-node-tree>`__ when, e.g.,
   part of the content it represents is mutated.

   See the `insert <#concept-node-insert>`__ and
   `remove <#concept-node-remove>`__ algorithms, the
   ```normalize()`` <#dom-node-normalize>`__ method, and the `replace
   data <#concept-cd-replace>`__ and `split <#concept-text-split>`__
   algorithms for details.

   Updating `live ranges <#concept-live-range>`__ in response to `node
   tree <#concept-node-tree>`__ mutations can be expensive. For every
   `node tree <#concept-node-tree>`__ change, all affected
   ```Range`` <#range>`__ objects need to be updated. Even if the
   application is uninterested in some `live
   ranges <#concept-live-range>`__, it still has to pay the cost of
   keeping them up-to-date when a mutation occurs.

   A ```StaticRange`` <#staticrange>`__ object is a lightweight
   `range <#concept-range>`__ that does not update when the `node
   tree <#concept-node-tree>`__ mutates. It is therefore not subject to
   the same maintenance cost as `live ranges <#concept-live-range>`__.


/5.2. Boundary points
=====================

   .. .. rubric:: 5.2. Boundary points ` <#boundary-points>`__
      :name: boundary-points
      :class: heading settled

   A boundary point is a
   `tuple <https://infra.spec.whatwg.org/#tuple>`__ consisting of a node
   (a `node <#concept-node>`__) and an offset (a non-negative integer).

   A correct `boundary point <#concept-range-bp>`__\ ’s
   `offset <#concept-range-bp-offset>`__ will be between 0 and the
   `boundary point <#concept-range-bp>`__\ ’s
   `node <#boundary-point-node>`__\ ’s
   `length <#concept-node-length>`__, inclusive.

   The position of a `boundary point <#concept-range-bp>`__ (``nodeA``,
   ``offsetA``) relative to a `boundary point <#concept-range-bp>`__
   (``nodeB``, ``offsetB``) is before, equal, or after, as returned by
   these steps:

   #. Assert: ``nodeA`` and ``nodeB`` have the same
      `root <#concept-tree-root>`__.

   #. If ``nodeA`` is ``nodeB``, then return
      `equal <#concept-range-bp-equal>`__ if ``offsetA`` is ``offsetB``,
      `before <#concept-range-bp-before>`__ if ``offsetA`` is less than
      ``offsetB``, and `after <#concept-range-bp-after>`__ if
      ``offsetA`` is greater than ``offsetB``.

   #. If ``nodeA`` is `following <#concept-tree-following>`__ ``nodeB``,
      then if the `position <#concept-range-bp-position>`__ of
      (``nodeB``, ``offsetB``) relative to (``nodeA``, ``offsetA``) is
      `before <#concept-range-bp-before>`__, return
      `after <#concept-range-bp-after>`__, and if it is
      `after <#concept-range-bp-after>`__, return
      `before <#concept-range-bp-before>`__.

   #. If ``nodeA`` is an `ancestor <#concept-tree-ancestor>`__ of
      ``nodeB``:

      #. Let ``child`` be ``nodeB``.

      #. While ``child`` is not a `child <#concept-tree-child>`__ of
         ``nodeA``, set ``child`` to its
         `parent <#concept-tree-parent>`__.

      #. If ``child``\ ’s `index <#concept-tree-index>`__ is less than
         ``offsetA``, then return `after <#concept-range-bp-after>`__.

   #. Return `before <#concept-range-bp-before>`__.


/5.3. Interface AbstractRange
=============================

   .. .. rubric:: 5.3. Interface
      ```AbstractRange`` <#abstractrange>`__ ` <#interface-abstractrange>`__
      :name: interface-abstractrange
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface AbstractRange {
        readonly attribute Node startContainer;
        readonly attribute unsigned long startOffset;
        readonly attribute Node endContainer;
        readonly attribute unsigned long endOffset;
        readonly attribute boolean collapsed;
      };

   Objects implementing the ```AbstractRange`` <#abstractrange>`__
   interface are known as ranges.

   A `range <#concept-range>`__ has two associated `boundary
   points <#concept-range-bp>`__ — a start and end.

   For convenience, a `range <#concept-range>`__\ ’s start node is its
   `start <#concept-range-start>`__\ ’s `node <#boundary-point-node>`__,
   its start offset is its `start <#concept-range-start>`__\ ’s
   `offset <#concept-range-bp-offset>`__, its end node is its
   `end <#concept-range-end>`__\ ’s `node <#boundary-point-node>`__, and
   its end offset is its `end <#concept-range-end>`__\ ’s
   `offset <#concept-range-bp-offset>`__.

   A `range <#concept-range>`__ is collapsed if its `start
   node <#concept-range-start-node>`__ is its `end
   node <#concept-range-end-node>`__ and its `start
   offset <#concept-range-start-offset>`__ is its `end
   offset <#concept-range-end-offset>`__.

   ``node`` ``=`` ``range`` ``.`` ```startContainer`` <#dom-range-startcontainer>`__
      Returns ``range``\ ’s `start node <#concept-range-start-node>`__.
   ``offset`` ``=`` ``range`` ``.`` ```startOffset`` <#dom-range-startoffset>`__
      Returns ``range``\ ’s `start
      offset <#concept-range-start-offset>`__.
   ``node`` ``=`` ``range`` ``.`` ```endContainer`` <#dom-range-endcontainer>`__
      Returns ``range``\ ’s `end node <#concept-range-end-node>`__.
   ``offset`` ``=`` ``range`` ``.`` ```endOffset`` <#dom-range-endoffset>`__
      Returns ``range``\ ’s `end offset <#concept-range-end-offset>`__.
   ``collapsed`` ``=`` ``range`` ``.`` ```collapsed`` <#dom-range-collapsed>`__
      Returns true if ``range`` is `collapsed <#range-collapsed>`__;
      otherwise false.

   The ``startContainer`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
   node <#concept-range-start-node>`__.

   The ``startOffset`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
   offset <#concept-range-start-offset>`__.

   The ``endContainer`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `end
   node <#concept-range-end-node>`__.

   The ``endOffset`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `end
   offset <#concept-range-end-offset>`__.

   The ``collapsed`` getter steps are to return true if
   `this <https://webidl.spec.whatwg.org/#this>`__ is
   `collapsed <#range-collapsed>`__; otherwise false.


/5.4. Interface StaticRange
===========================

   .. .. rubric:: 5.4. Interface
      ```StaticRange`` <#staticrange>`__ ` <#interface-staticrange>`__
      :name: interface-staticrange
      :class: heading settled

   .. code:: idl

      dictionary StaticRangeInit {
        required Node startContainer;
        required unsigned long startOffset;
        required Node endContainer;
        required unsigned long endOffset;
      };

      [Exposed=Window]
      interface StaticRange : AbstractRange {
        constructor(StaticRangeInit init);
      };

   ``staticRange`` ``= new`` ```StaticRange`` <#dom-staticrange-staticrange>`__ ``(init)``
      Returns a new `range <#concept-range>`__ object that does not
      update when the `node tree <#concept-node-tree>`__ mutates.

   The ``new StaticRange(`` ``init`` ``)`` constructor steps are:

   #. If
      ``init``\ ["```startContainer`` <#dom-staticrangeinit-startcontainer>`__"]
      or
      ``init``\ ["```endContainer`` <#dom-staticrangeinit-endcontainer>`__"]
      is a ```DocumentType`` <#documenttype>`__ or ```Attr`` <#attr>`__
      `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `start <#concept-range-start>`__ to
      (``init``\ ["```startContainer`` <#dom-staticrangeinit-startcontainer>`__"],
      ``init``\ ["```startOffset`` <#dom-staticrangeinit-startoffset>`__"])
      and `end <#concept-range-end>`__ to
      (``init``\ ["```endContainer`` <#dom-staticrangeinit-endcontainer>`__"],
      ``init``\ ["```endOffset`` <#dom-staticrangeinit-endoffset>`__"]).

   A ```StaticRange`` <#staticrange>`__ is valid if all of the following
   are true:

   -  Its `start <#concept-range-start>`__ and
      `end <#concept-range-end>`__ are in the same `node
      tree <#concept-node-tree>`__.

   -  Its `start offset <#concept-range-start-offset>`__ is between 0
      and its `start node <#concept-range-start-node>`__\ ’s
      `length <#concept-node-length>`__, inclusive.

   -  Its `end offset <#concept-range-end-offset>`__ is between 0 and
      its `end node <#concept-range-end-node>`__\ ’s
      `length <#concept-node-length>`__, inclusive.

   -  Its `start <#concept-range-start>`__ is
      `before <#concept-range-bp-before>`__ or
      `equal <#concept-range-bp-equal>`__ to its
      `end <#concept-range-end>`__.


/5.5. Interface Range
=====================

   .. .. rubric:: 5.5. Interface
      ```Range`` <#range>`__ ` <#interface-range>`__
      :name: interface-range
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface Range : AbstractRange {
        constructor();

        readonly attribute Node commonAncestorContainer;

        undefined setStart(Node node, unsigned long offset);
        undefined setEnd(Node node, unsigned long offset);
        undefined setStartBefore(Node node);
        undefined setStartAfter(Node node);
        undefined setEndBefore(Node node);
        undefined setEndAfter(Node node);
        undefined collapse(optional boolean toStart = false);
        undefined selectNode(Node node);
        undefined selectNodeContents(Node node);

        const unsigned short START_TO_START = 0;
        const unsigned short START_TO_END = 1;
        const unsigned short END_TO_END = 2;
        const unsigned short END_TO_START = 3;
        short compareBoundaryPoints(unsigned short how, Range sourceRange);

        [CEReactions] undefined deleteContents();
        [CEReactions, NewObject] DocumentFragment extractContents();
        [CEReactions, NewObject] DocumentFragment cloneContents();
        [CEReactions] undefined insertNode(Node node);
        [CEReactions] undefined surroundContents(Node newParent);

        [NewObject] Range cloneRange();
        undefined detach();

        boolean isPointInRange(Node node, unsigned long offset);
        short comparePoint(Node node, unsigned long offset);

        boolean intersectsNode(Node node);

        stringifier;
      };

   Objects implementing the ```Range`` <#range>`__ interface are known
   as live ranges.

   Algorithms that modify a `tree <#concept-tree>`__ (in particular the
   `insert <#concept-node-insert>`__, `remove <#concept-node-remove>`__,
   `replace data <#concept-cd-replace>`__, and
   `split <#concept-text-split>`__ algorithms) modify `live
   ranges <#concept-live-range>`__ associated with that
   `tree <#concept-tree>`__.

   The root of a `live range <#concept-live-range>`__ is the
   `root <#concept-tree-root>`__ of its `start
   node <#concept-range-start-node>`__.

   A `node <#concept-node>`__ ``node`` is contained in a `live
   range <#concept-live-range>`__ ``range`` if ``node``\ ’s
   `root <#concept-tree-root>`__ is ``range``\ ’s
   `root <#concept-range-root>`__, and (``node``, 0) is
   `after <#concept-range-bp-after>`__ ``range``\ ’s
   `start <#concept-range-start>`__, and (``node``, ``node``\ ’s
   `length <#concept-node-length>`__) is
   `before <#concept-range-bp-before>`__ ``range``\ ’s
   `end <#concept-range-end>`__.

   A `node <#concept-node>`__ is partially contained in a `live
   range <#concept-live-range>`__ if it’s an `inclusive
   ancestor <#concept-tree-inclusive-ancestor>`__ of the `live
   range <#concept-live-range>`__\ ’s `start
   node <#concept-range-start-node>`__ but not its `end
   node <#concept-range-end-node>`__, or vice versa.

   .. note::

      Some facts to better understand these definitions:

      -  The content that one would think of as being within the `live
         range <#concept-live-range>`__ consists of all
         `contained <#contained>`__ `nodes <#concept-node>`__, plus
         possibly some of the contents of the `start
         node <#concept-range-start-node>`__ and `end
         node <#concept-range-end-node>`__ if those are
         ```CharacterData`` <#characterdata>`__
         `nodes <#concept-node>`__.

      -  The `nodes <#concept-node>`__ that are contained in a `live
         range <#concept-live-range>`__ will generally not be
         contiguous, because the `parent <#concept-tree-parent>`__ of a
         `contained <#contained>`__ `node <#concept-node>`__ will not
         always be `contained <#contained>`__.

      -  However, the `descendants <#concept-tree-descendant>`__ of a
         `contained <#contained>`__ `node <#concept-node>`__ are
         `contained <#contained>`__, and if two
         `siblings <#concept-tree-sibling>`__ are
         `contained <#contained>`__, so are any
         `siblings <#concept-tree-sibling>`__ that lie between them.

      -  The `start node <#concept-range-start-node>`__ and `end
         node <#concept-range-end-node>`__ of a `live
         range <#concept-live-range>`__ are never
         `contained <#contained>`__ within it.

      -  The first `contained <#contained>`__ `node <#concept-node>`__
         (if there are any) will always be after the `start
         node <#concept-range-start-node>`__, and the last
         `contained <#contained>`__ `node <#concept-node>`__ will always
         be equal to or before the `end
         node <#concept-range-end-node>`__\ ’s last
         `descendant <#concept-tree-descendant>`__.

      -  There exists a `partially contained <#partially-contained>`__
         `node <#concept-node>`__ if and only if the `start
         node <#concept-range-start-node>`__ and `end
         node <#concept-range-end-node>`__ are different.

      -  The
         ```commonAncestorContainer`` <#dom-range-commonancestorcontainer>`__
         attribute value is neither `contained <#contained>`__ nor
         `partially contained <#partially-contained>`__.

      -  If the `start node <#concept-range-start-node>`__ is an
         `ancestor <#concept-tree-ancestor>`__ of the `end
         node <#concept-range-end-node>`__, the common `inclusive
         ancestor <#concept-tree-inclusive-ancestor>`__ will be the
         `start node <#concept-range-start-node>`__. Exactly one of its
         `children <#concept-tree-child>`__ will be `partially
         contained <#partially-contained>`__, and a
         `child <#concept-tree-child>`__ will be
         `contained <#contained>`__ if and only if it
         `precedes <#concept-tree-preceding>`__ the `partially
         contained <#partially-contained>`__
         `child <#concept-tree-child>`__. If the `end
         node <#concept-range-end-node>`__ is an
         `ancestor <#concept-tree-ancestor>`__ of the `start
         node <#concept-range-start-node>`__, the opposite holds.

      -  If the `start node <#concept-range-start-node>`__ is not an
         `inclusive ancestor <#concept-tree-inclusive-ancestor>`__ of
         the `end node <#concept-range-end-node>`__, nor vice versa, the
         common `inclusive
         ancestor <#concept-tree-inclusive-ancestor>`__ will be distinct
         from both of them. Exactly two of its
         `children <#concept-tree-child>`__ will be `partially
         contained <#partially-contained>`__, and a
         `child <#concept-tree-child>`__ will be contained if and only
         if it lies between those two.

   --------------

   ``range`` ``= new`` ```Range()`` <#dom-range-range>`__
      Returns a new `live range <#concept-live-range>`__.

   The ``new Range()`` constructor steps are to set
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `start <#concept-range-start>`__ and `end <#concept-range-end>`__ to
   (`current global
   object <https://html.spec.whatwg.org/multipage/webappapis.html#current-global-object>`__\ ’s
   `associated
   ``Document`` <https://html.spec.whatwg.org/multipage/nav-history-apis.html#concept-document-window>`__,
   0).

   --------------

   ``container`` = ``range`` . ```commonAncestorContainer`` <#dom-range-commonancestorcontainer>`__
      Returns the `node <#concept-node>`__, furthest away from the
      `document <#concept-document>`__, that is an
      `ancestor <#concept-tree-ancestor>`__ of both ``range``\ ’s `start
      node <#concept-range-start-node>`__ and `end
      node <#concept-range-end-node>`__.

   The ``commonAncestorContainer`` getter steps are:

   #. Let ``container`` be `start node <#concept-range-start-node>`__.
   #. While ``container`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of `end
      node <#concept-range-end-node>`__, let ``container`` be
      ``container``\ ’s `parent <#concept-tree-parent>`__.
   #. Return ``container``.

   --------------

   To set the start or end of a ``range`` to a `boundary
   point <#concept-range-bp>`__ (``node``, ``offset``), run these steps:

   #. If ``node`` is a `doctype <#concept-doctype>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``offset`` is greater than ``node``\ ’s
      `length <#concept-node-length>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``bp`` be the `boundary point <#concept-range-bp>`__
      (``node``, ``offset``).

   #. 

      If these steps were invoked as "set the start"
         #. If ``range``\ ’s `root <#concept-range-root>`__ is not equal
            to ``node``\ ’s `root <#concept-tree-root>`__, or if ``bp``
            is `after <#concept-range-bp-after>`__ the ``range``\ ’s
            `end <#concept-range-end>`__, set ``range``\ ’s
            `end <#concept-range-end>`__ to ``bp``.
         #. Set ``range``\ ’s `start <#concept-range-start>`__ to
            ``bp``.
      If these steps were invoked as "set the end"
         #. If ``range``\ ’s `root <#concept-range-root>`__ is not equal
            to ``node``\ ’s `root <#concept-tree-root>`__, or if ``bp``
            is `before <#concept-range-bp-before>`__ the ``range``\ ’s
            `start <#concept-range-start>`__, set ``range``\ ’s
            `start <#concept-range-start>`__ to ``bp``.
         #. Set ``range``\ ’s `end <#concept-range-end>`__ to ``bp``.

   The ``setStart(`` ``node`` ``,`` ``offset`` ``)`` method steps
   are to `set the start <#concept-range-bp-set>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
   point <#concept-range-bp>`__ (``node``, ``offset``).

   The ``setEnd(`` ``node`` ``,`` ``offset`` ``)`` method steps are
   to `set the end <#concept-range-bp-set>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
   point <#concept-range-bp>`__ (``node``, ``offset``).

   The ``setStartBefore(`` ``node`` ``)`` method steps are:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.
   #. If ``parent`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   #. `Set the start <#concept-range-bp-set>`__ of
      `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``node``\ ’s
      `index <#concept-tree-index>`__).

   The ``setStartAfter(`` ``node`` ``)`` method steps are:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. `Set the start <#concept-range-bp-set>`__ of
      `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``node``\ ’s
      `index <#concept-tree-index>`__ plus 1).

   The ``setEndBefore(`` ``node`` ``)`` method steps are:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.
   #. If ``parent`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.
   #. `Set the end <#concept-range-bp-set>`__ of
      `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``node``\ ’s
      `index <#concept-tree-index>`__).

   The ``setEndAfter(`` ``node`` ``)`` method steps are:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. `Set the end <#concept-range-bp-set>`__ of
      `this <https://webidl.spec.whatwg.org/#this>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``node``\ ’s
      `index <#concept-tree-index>`__ plus 1).

   The ``collapse(`` ``toStart`` ``)`` method steps are to, if
   ``toStart`` is true, set `end <#concept-range-end>`__ to
   `start <#concept-range-start>`__; otherwise set
   `start <#concept-range-start>`__ to `end <#concept-range-end>`__.

   To select a `node <#concept-node>`__ ``node`` within a
   `range <#concept-range>`__ ``range``, run these steps:

   #. Let ``parent`` be ``node``\ ’s `parent <#concept-tree-parent>`__.

   #. If ``parent`` is null, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``index`` be ``node``\ ’s `index <#concept-tree-index>`__.

   #. Set ``range``\ ’s `start <#concept-range-start>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``index``).

   #. Set ``range``\ ’s `end <#concept-range-end>`__ to `boundary
      point <#concept-range-bp>`__ (``parent``, ``index`` plus 1).

   The ``selectNode(`` ``node`` ``)`` method steps are to
   `select <#concept-range-select>`__ ``node`` within
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``selectNodeContents(`` ``node`` ``)`` method steps are:

   #. If ``node`` is a `doctype <#concept-doctype>`__,
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``length`` be the `length <#concept-node-length>`__ of
      ``node``.

   #. Set `start <#concept-range-start>`__ to the `boundary
      point <#concept-range-bp>`__ (``node``, 0).

   #. Set `end <#concept-range-end>`__ to the `boundary
      point <#concept-range-bp>`__ (``node``, ``length``).

   --------------

   The
   ``compareBoundaryPoints(`` ``how`` ``,`` ``sourceRange`` ``)``
   method steps are:

   #. If ``how`` is not one of

      -  ```START_TO_START`` <#dom-range-start_to_start>`__,
      -  ```START_TO_END`` <#dom-range-start_to_end>`__,
      -  ```END_TO_END`` <#dom-range-end_to_end>`__, and
      -  ```END_TO_START`` <#dom-range-end_to_start>`__,

      then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```NotSupportedError`` <https://webidl.spec.whatwg.org/#notsupportederror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `root <#concept-range-root>`__ is not the same as
      ``sourceRange``\ ’s `root <#concept-range-root>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```WrongDocumentError`` <https://webidl.spec.whatwg.org/#wrongdocumenterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``how`` is:

      ```START_TO_START`` <#dom-range-start_to_start>`__:
         Let ``this point`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `start <#concept-range-start>`__. Let ``other point`` be
         ``sourceRange``\ ’s `start <#concept-range-start>`__.
      ```START_TO_END`` <#dom-range-start_to_end>`__:
         Let ``this point`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `end <#concept-range-end>`__. Let ``other point`` be
         ``sourceRange``\ ’s `start <#concept-range-start>`__.
      ```END_TO_END`` <#dom-range-end_to_end>`__:
         Let ``this point`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `end <#concept-range-end>`__. Let ``other point`` be
         ``sourceRange``\ ’s `end <#concept-range-end>`__.
      ```END_TO_START`` <#dom-range-end_to_start>`__:
         Let ``this point`` be
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `start <#concept-range-start>`__. Let ``other point`` be
         ``sourceRange``\ ’s `end <#concept-range-end>`__.

   #. If the `position <#concept-range-bp-position>`__ of ``this point``
      relative to ``other point`` is

      `before <#concept-range-bp-before>`__
         Return −1.
      `equal <#concept-range-bp-equal>`__
         Return 0.
      `after <#concept-range-bp-after>`__
         Return 1.

   The ``deleteContents()`` method steps are:

   #. If `this <https://webidl.spec.whatwg.org/#this>`__ is
      `collapsed <#range-collapsed>`__, then return.

   #. Let ``original start node``, ``original start offset``,
      ``original end node``, and ``original end offset`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
      node <#concept-range-start-node>`__, `start
      offset <#concept-range-start-offset>`__, `end
      node <#concept-range-end-node>`__, and `end
      offset <#concept-range-end-offset>`__, respectively.

   #. If ``original start node`` is ``original end node`` and it is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then `replace data <#concept-cd-replace>`__ with node
      ``original start node``, offset ``original start offset``, count
      ``original end offset`` minus ``original start offset``, and data
      the empty string, and then return.

   #. Let ``nodes to remove`` be a list of all the
      `nodes <#concept-node>`__ that are `contained <#contained>`__ in
      `this <https://webidl.spec.whatwg.org/#this>`__, in `tree
      order <#concept-tree-order>`__, omitting any
      `node <#concept-node>`__ whose `parent <#concept-tree-parent>`__
      is also `contained <#contained>`__ in
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. If ``original start node`` is an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``new node`` to ``original start node``
      and ``new offset`` to ``original start offset``.

   #. Otherwise:

      #. Let ``reference node`` equal ``original start node``.

      #. While ``reference node``\ ’s `parent <#concept-tree-parent>`__
         is not null and is not an `inclusive
         ancestor <#concept-tree-inclusive-ancestor>`__ of
         ``original end node``, set ``reference node`` to its
         `parent <#concept-tree-parent>`__.

      #. Set ``new node`` to the `parent <#concept-tree-parent>`__ of
         ``reference node``, and ``new offset`` to one plus the
         `index <#concept-tree-index>`__ of ``reference node``.

         If ``reference node``\ ’s `parent <#concept-tree-parent>`__
         were null, it would be the `root <#concept-range-root>`__ of
         `this <https://webidl.spec.whatwg.org/#this>`__, so would be an
         `inclusive ancestor <#concept-tree-inclusive-ancestor>`__ of
         ``original end node``, and we could not reach this point.

   #. If ``original start node`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then `replace data <#concept-cd-replace>`__ with node
      ``original start node``, offset ``original start offset``, count
      ``original start node``\ ’s `length <#concept-node-length>`__ −
      ``original start offset``, data the empty string.

   #. For each ``node`` in ``nodes to remove``, in `tree
      order <#concept-tree-order>`__, `remove <#concept-node-remove>`__
      ``node``.

   #. If ``original end node`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then `replace data <#concept-cd-replace>`__ with node
      ``original end node``, offset 0, count ``original end offset`` and
      data the empty string.

   #. Set `start <#concept-range-start>`__ and
      `end <#concept-range-end>`__ to (``new node``, ``new offset``).

   To extract a `live range <#concept-live-range>`__ ``range``, run
   these steps:

   #. Let ``fragment`` be a new
      ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__ whose `node
      document <#concept-node-document>`__ is ``range``\ ’s `start
      node <#concept-range-start-node>`__\ ’s `node
      document <#concept-node-document>`__.

   #. If ``range`` is `collapsed <#range-collapsed>`__, then return
      ``fragment``.

   #. Let ``original start node``, ``original start offset``,
      ``original end node``, and ``original end offset`` be
      ``range``\ ’s `start node <#concept-range-start-node>`__, `start
      offset <#concept-range-start-offset>`__, `end
      node <#concept-range-end-node>`__, and `end
      offset <#concept-range-end-offset>`__, respectively.

   #. If ``original start node`` is ``original end node`` and it is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original start node``.
      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original start node``, offset ``original start offset``, and
         count ``original end offset`` minus ``original start offset``.
      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.
      #. `Replace data <#concept-cd-replace>`__ with node
         ``original start node``, offset ``original start offset``,
         count ``original end offset`` minus ``original start offset``,
         and data the empty string.
      #. Return ``fragment``.

   #. Let ``common ancestor`` be ``original start node``.

   #. While ``common ancestor`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``common ancestor`` to its own
      `parent <#concept-tree-parent>`__.

   #. Let ``first partially contained child`` be null.

   #. If ``original start node`` is *not* an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``first partially contained child`` to
      the first `child <#concept-tree-child>`__ of ``common ancestor``
      that is `partially contained <#partially-contained>`__ in
      ``range``.

   #. Let ``last partially contained child`` be null.

   #. If ``original end node`` is *not* an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original start node``, set ``last partially contained child`` to
      the last `child <#concept-tree-child>`__ of ``common ancestor``
      that is `partially contained <#partially-contained>`__ in
      ``range``.

      These variable assignments do actually always make sense. For
      instance, if ``original start node`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, ``original start node`` is itself
      `partially contained <#partially-contained>`__ in ``range``, and
      so are all its `ancestors <#concept-tree-ancestor>`__ up until a
      `child <#concept-tree-child>`__ of ``common ancestor``.
      ``common ancestor`` cannot be ``original start node``, because it
      has to be an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``. The other case is similar. Also, notice
      that the two `children <#concept-tree-child>`__ will never be
      equal if both are defined.

   #. Let ``contained children`` be a list of all
      `children <#concept-tree-child>`__ of ``common ancestor`` that are
      `contained <#contained>`__ in ``range``, in `tree
      order <#concept-tree-order>`__.

   #. If any member of ``contained children`` is a
      `doctype <#concept-doctype>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      We do not have to worry about the first or last partially
      contained node, because a `doctype <#concept-doctype>`__ can never
      be partially contained. It cannot be a boundary point of a range,
      and it cannot be the ancestor of anything.

   #. If ``original start node`` is an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``new node`` to ``original start node``
      and ``new offset`` to ``original start offset``.

   #. Otherwise:

      #. Let ``reference node`` equal ``original start node``.

      #. While ``reference node``\ ’s `parent <#concept-tree-parent>`__
         is not null and is not an `inclusive
         ancestor <#concept-tree-inclusive-ancestor>`__ of
         ``original end node``, set ``reference node`` to its
         `parent <#concept-tree-parent>`__.

      #. Set ``new node`` to the `parent <#concept-tree-parent>`__ of
         ``reference node``, and ``new offset`` to one plus
         ``reference node``\ ’s `index <#concept-tree-index>`__.

         If ``reference node``\ ’s `parent <#concept-tree-parent>`__ is
         null, it would be the `root <#concept-range-root>`__ of
         ``range``, so would be an `inclusive
         ancestor <#concept-tree-inclusive-ancestor>`__ of
         ``original end node``, and we could not reach this point.

   #. If ``first partially contained child`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      In this case, ``first partially contained child`` is
      ``original start node``.

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original start node``.

      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original start node``, offset ``original start offset``, and
         count ``original start node``\ ’s
         `length <#concept-node-length>`__ − ``original start offset``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

      #. `Replace data <#concept-cd-replace>`__ with node
         ``original start node``, offset ``original start offset``,
         count ``original start node``\ ’s
         `length <#concept-node-length>`__ − ``original start offset``,
         and data the empty string.

   #. Otherwise, if ``first partially contained child`` is not null:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``first partially contained child``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

      #. Let ``subrange`` be a new `live range <#concept-live-range>`__
         whose `start <#concept-range-start>`__ is
         (``original start node``, ``original start offset``) and whose
         `end <#concept-range-end>`__ is
         (``first partially contained child``,
         ``first partially contained child``\ ’s
         `length <#concept-node-length>`__).

      #. Let ``subfragment`` be the result of
         `extracting <#concept-range-extract>`__ ``subrange``.

      #. `Append <#concept-node-append>`__ ``subfragment`` to ``clone``.

   #. For each ``contained child`` in ``contained children``,
      `append <#concept-node-append>`__ ``contained child`` to
      ``fragment``.

   #. If ``last partially contained child`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      In this case, ``last partially contained child`` is
      ``original end node``.

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original end node``.
      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original end node``, offset 0, and count
         ``original end offset``.
      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.
      #. `Replace data <#concept-cd-replace>`__ with node
         ``original end node``, offset 0, count ``original end offset``,
         and data the empty string.

   #. Otherwise, if ``last partially contained child`` is not null:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``last partially contained child``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

      #. Let ``subrange`` be a new `live range <#concept-live-range>`__
         whose `start <#concept-range-start>`__ is
         (``last partially contained child``, 0) and whose
         `end <#concept-range-end>`__ is (``original end node``,
         ``original end offset``).

      #. Let ``subfragment`` be the result of
         `extracting <#concept-range-extract>`__ ``subrange``.

      #. `Append <#concept-node-append>`__ ``subfragment`` to ``clone``.

   #. Set ``range``\ ’s `start <#concept-range-start>`__ and
      `end <#concept-range-end>`__ to (``new node``, ``new offset``).

   #. Return ``fragment``.

   The ``extractContents()`` method steps are to return the result of
   `extracting <#concept-range-extract>`__
   `this <https://webidl.spec.whatwg.org/#this>`__.

   To clone the contents of a `live range <#concept-live-range>`__
   ``range``, run these steps:

   #. Let ``fragment`` be a new
      ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__ whose `node
      document <#concept-node-document>`__ is ``range``\ ’s `start
      node <#concept-range-start-node>`__\ ’s `node
      document <#concept-node-document>`__.

   #. If ``range`` is `collapsed <#range-collapsed>`__, then return
      ``fragment``.

   #. Let ``original start node``, ``original start offset``,
      ``original end node``, and ``original end offset`` be
      ``range``\ ’s `start node <#concept-range-start-node>`__, `start
      offset <#concept-range-start-offset>`__, `end
      node <#concept-range-end-node>`__, and `end
      offset <#concept-range-end-offset>`__, respectively.

   #. If ``original start node`` is ``original end node`` and it is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original start node``.
      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original start node``, offset ``original start offset``, and
         count ``original end offset`` minus ``original start offset``.
      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.
      #. Return ``fragment``.

   #. Let ``common ancestor`` be ``original start node``.

   #. While ``common ancestor`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``common ancestor`` to its own
      `parent <#concept-tree-parent>`__.

   #. Let ``first partially contained child`` be null.

   #. If ``original start node`` is *not* an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, set ``first partially contained child`` to
      the first `child <#concept-tree-child>`__ of ``common ancestor``
      that is `partially contained <#partially-contained>`__ in
      ``range``.

   #. Let ``last partially contained child`` be null.

   #. If ``original end node`` is *not* an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original start node``, set ``last partially contained child`` to
      the last `child <#concept-tree-child>`__ of ``common ancestor``
      that is `partially contained <#partially-contained>`__ in
      ``range``.

      These variable assignments do actually always make sense. For
      instance, if ``original start node`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``, ``original start node`` is itself
      `partially contained <#partially-contained>`__ in ``range``, and
      so are all its `ancestors <#concept-tree-ancestor>`__ up until a
      `child <#concept-tree-child>`__ of ``common ancestor``.
      ``common ancestor`` cannot be ``original start node``, because it
      has to be an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``original end node``. The other case is similar. Also, notice
      that the two `children <#concept-tree-child>`__ will never be
      equal if both are defined.

   #. Let ``contained children`` be a list of all
      `children <#concept-tree-child>`__ of ``common ancestor`` that are
      `contained <#contained>`__ in ``range``, in `tree
      order <#concept-tree-order>`__.

   #. If any member of ``contained children`` is a
      `doctype <#concept-doctype>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      We do not have to worry about the first or last partially
      contained node, because a `doctype <#concept-doctype>`__ can never
      be partially contained. It cannot be a boundary point of a range,
      and it cannot be the ancestor of anything.

   #. If ``first partially contained child`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      In this case, ``first partially contained child`` is
      ``original start node``.

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original start node``.

      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original start node``, offset ``original start offset``, and
         count ``original start node``\ ’s
         `length <#concept-node-length>`__ − ``original start offset``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

   #. Otherwise, if ``first partially contained child`` is not null:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``first partially contained child``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

      #. Let ``subrange`` be a new `live range <#concept-live-range>`__
         whose `start <#concept-range-start>`__ is
         (``original start node``, ``original start offset``) and whose
         `end <#concept-range-end>`__ is
         (``first partially contained child``,
         ``first partially contained child``\ ’s
         `length <#concept-node-length>`__).

      #. Let ``subfragment`` be the result of `cloning the
         contents <#concept-range-clone>`__ of ``subrange``.

      #. `Append <#concept-node-append>`__ ``subfragment`` to ``clone``.

   #. For each ``contained child`` in ``contained children``:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``contained child`` with the *clone children flag* set.
      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

   #. If ``last partially contained child`` is a
      ```CharacterData`` <#characterdata>`__ `node <#concept-node>`__,
      then:

      In this case, ``last partially contained child`` is
      ``original end node``.

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``original end node``.
      #. Set the `data <#concept-cd-data>`__ of ``clone`` to the result
         of `substringing data <#concept-cd-substring>`__ with node
         ``original end node``, offset 0, and count
         ``original end offset``.
      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

   #. Otherwise, if ``last partially contained child`` is not null:

      #. Let ``clone`` be a `clone <#concept-node-clone>`__ of
         ``last partially contained child``.

      #. `Append <#concept-node-append>`__ ``clone`` to ``fragment``.

      #. Let ``subrange`` be a new `live range <#concept-live-range>`__
         whose `start <#concept-range-start>`__ is
         (``last partially contained child``, 0) and whose
         `end <#concept-range-end>`__ is (``original end node``,
         ``original end offset``).

      #. Let ``subfragment`` be the result of `cloning the
         contents <#concept-range-clone>`__ of ``subrange``.

      #. `Append <#concept-node-append>`__ ``subfragment`` to ``clone``.

   #. Return ``fragment``.

   The ``cloneContents()`` method steps are to return the result of
   `cloning the contents <#concept-range-clone>`__ of
   `this <https://webidl.spec.whatwg.org/#this>`__.

   To insert a `node <#concept-node>`__ ``node`` into a `live
   range <#concept-live-range>`__ ``range``, run these steps:

   #. If ``range``\ ’s `start node <#concept-range-start-node>`__ is a
      ```ProcessingInstruction`` <#processinginstruction>`__ or
      ```Comment`` <#comment>`__ `node <#concept-node>`__, is a
      ```Text`` <#text>`__ `node <#concept-node>`__ whose
      `parent <#concept-tree-parent>`__ is null, or is ``node``, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```HierarchyRequestError`` <https://webidl.spec.whatwg.org/#hierarchyrequesterror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``referenceNode`` be null.

   #. If ``range``\ ’s `start node <#concept-range-start-node>`__ is a
      ```Text`` <#text>`__ `node <#concept-node>`__, set
      ``referenceNode`` to that ```Text`` <#text>`__
      `node <#concept-node>`__.

   #. Otherwise, set ``referenceNode`` to the
      `child <#concept-tree-child>`__ of `start
      node <#concept-range-start-node>`__ whose
      `index <#concept-tree-index>`__ is `start
      offset <#concept-range-start-offset>`__, and null if there is no
      such `child <#concept-tree-child>`__.

   #. Let ``parent`` be ``range``\ ’s `start
      node <#concept-range-start-node>`__ if ``referenceNode`` is null,
      and ``referenceNode``\ ’s `parent <#concept-tree-parent>`__
      otherwise.

   #. `Ensure pre-insertion
      validity <#concept-node-ensure-pre-insertion-validity>`__ of
      ``node`` into ``parent`` before ``referenceNode``.

   #. If ``range``\ ’s `start node <#concept-range-start-node>`__ is a
      ```Text`` <#text>`__ `node <#concept-node>`__, set
      ``referenceNode`` to the result of
      `splitting <#concept-text-split>`__ it with offset ``range``\ ’s
      `start offset <#concept-range-start-offset>`__.

   #. If ``node`` is ``referenceNode``, set ``referenceNode`` to its
      `next sibling <#concept-tree-next-sibling>`__.

   #. If ``node``\ ’s `parent <#concept-tree-parent>`__ is non-null,
      then `remove <#concept-node-remove>`__ ``node``.

   #. Let ``newOffset`` be ``parent``\ ’s
      `length <#concept-node-length>`__ if ``referenceNode`` is null;
      otherwise ``referenceNode``\ ’s `index <#concept-tree-index>`__.

   #. Increase ``newOffset`` by ``node``\ ’s
      `length <#concept-node-length>`__ if ``node`` is a
      ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__; otherwise 1.

   #. `Pre-insert <#concept-node-pre-insert>`__ ``node`` into ``parent``
      before ``referenceNode``.

   #. If ``range`` is `collapsed <#range-collapsed>`__, then set
      ``range``\ ’s `end <#concept-range-end>`__ to (``parent``,
      ``newOffset``).

   The ``insertNode(`` ``node`` ``)`` method steps are to
   `insert <#concept-range-insert>`__ ``node`` into
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``surroundContents(`` ``newParent`` ``)`` method steps are:

   #. If a non-```Text`` <#text>`__ `node <#concept-node>`__ is
      `partially contained <#partially-contained>`__ in
      `this <https://webidl.spec.whatwg.org/#this>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidStateError`` <https://webidl.spec.whatwg.org/#invalidstateerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``newParent`` is a ```Document`` <#document>`__,
      ```DocumentType`` <#documenttype>`__, or
      ```DocumentFragment`` <#documentfragment>`__
      `node <#concept-node>`__, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      For historical reasons ```CharacterData`` <#characterdata>`__
      `nodes <#concept-node>`__ are not checked here and end up throwing
      later on as a side effect.

   #. Let ``fragment`` be the result of
      `extracting <#concept-range-extract>`__
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. If ``newParent`` has `children <#concept-tree-child>`__, then
      `replace all <#concept-node-replace-all>`__ with null within
      ``newParent``.

   #. `Insert <#concept-range-insert>`__ ``newParent`` into
      `this <https://webidl.spec.whatwg.org/#this>`__.

   #. `Append <#concept-node-append>`__ ``fragment`` to ``newParent``.

   #. `Select <#concept-range-select>`__ ``newParent`` within
      `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``cloneRange()`` method steps are to return a new `live
   range <#concept-live-range>`__ with the same
   `start <#concept-range-start>`__ and `end <#concept-range-end>`__ as
   `this <https://webidl.spec.whatwg.org/#this>`__.

   The ``detach()`` method steps are to do nothing. Its functionality
   (disabling a ```Range`` <#range>`__ object) was removed, but the
   method itself is preserved for compatibility.

   --------------

   ``position`` = ``range`` . ```comparePoint(node, offset)`` <#dom-range-comparepoint>`__
      Returns −1 if the point is before the range, 0 if the point is in
      the range, and 1 if the point is after the range.
   ``intersects`` = ``range`` . ```intersectsNode(node)`` <#dom-range-intersectsnode>`__
      Returns whether ``range`` intersects ``node``.

   .. container:: impl

      The ``isPointInRange(`` ``node`` ``,`` ``offset`` ``)`` method
      steps are:

      #. If ``node``\ ’s `root <#concept-tree-root>`__ is different from
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `root <#concept-range-root>`__, return false.

      #. If ``node`` is a `doctype <#concept-doctype>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``offset`` is greater than ``node``\ ’s
         `length <#concept-node-length>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If (``node``, ``offset``) is
         `before <#concept-range-bp-before>`__
         `start <#concept-range-start>`__ or
         `after <#concept-range-bp-after>`__
         `end <#concept-range-end>`__, return false.

      #. Return true.

      The ``comparePoint(`` ``node`` ``,`` ``offset`` ``)`` method
      steps are:

      #. If ``node``\ ’s `root <#concept-tree-root>`__ is different from
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `root <#concept-range-root>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```WrongDocumentError`` <https://webidl.spec.whatwg.org/#wrongdocumenterror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``node`` is a `doctype <#concept-doctype>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InvalidNodeTypeError`` <https://webidl.spec.whatwg.org/#invalidnodetypeerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``offset`` is greater than ``node``\ ’s
         `length <#concept-node-length>`__, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```IndexSizeError`` <https://webidl.spec.whatwg.org/#indexsizeerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If (``node``, ``offset``) is
         `before <#concept-range-bp-before>`__
         `start <#concept-range-start>`__, return −1.

      #. If (``node``, ``offset``) is
         `after <#concept-range-bp-after>`__
         `end <#concept-range-end>`__, return 1.

      #. Return 0.

      --------------

      The ``intersectsNode(`` ``node`` ``)`` method steps are:

      #. If ``node``\ ’s `root <#concept-tree-root>`__ is different from
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `root <#concept-range-root>`__, return false.
      #. Let ``parent`` be ``node``\ ’s
         `parent <#concept-tree-parent>`__.
      #. If ``parent`` is null, return true.
      #. Let ``offset`` be ``node``\ ’s `index <#concept-tree-index>`__.
      #. If (``parent``, ``offset``) is
         `before <#concept-range-bp-before>`__
         `end <#concept-range-end>`__ and (``parent``, ``offset`` plus
         1) is `after <#concept-range-bp-after>`__
         `start <#concept-range-start>`__, return true.
      #. Return false.

   --------------

   The stringification behavior must run these steps:

   #. Let ``s`` be the empty string.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
      node <#concept-range-start-node>`__ is
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `end
      node <#concept-range-end-node>`__ and it is a ```Text`` <#text>`__
      `node <#concept-node>`__, then return the substring of that
      ```Text`` <#text>`__ `node <#concept-node>`__\ ’s
      `data <#concept-cd-data>`__ beginning at
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
      offset <#concept-range-start-offset>`__ and ending at
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `end
      offset <#concept-range-end-offset>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
      node <#concept-range-start-node>`__ is a ```Text`` <#text>`__
      `node <#concept-node>`__, then append the substring of that
      `node <#concept-node>`__\ ’s `data <#concept-cd-data>`__ from
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `start
      offset <#concept-range-start-offset>`__ until the end to ``s``.

   #. Append the
      `concatenation <https://infra.spec.whatwg.org/#string-concatenate>`__
      of the `data <#concept-cd-data>`__ of all ```Text`` <#text>`__
      `nodes <#concept-node>`__ that are `contained <#contained>`__ in
      `this <https://webidl.spec.whatwg.org/#this>`__, in `tree
      order <#concept-tree-order>`__, to ``s``.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `end
      node <#concept-range-end-node>`__ is a ```Text`` <#text>`__
      `node <#concept-node>`__, then append the substring of that
      `node <#concept-node>`__\ ’s `data <#concept-cd-data>`__ from its
      start until `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `end offset <#concept-range-end-offset>`__ to ``s``.

   #. Return ``s``.

   --------------

   The
   ```createContextualFragment()`` <https://w3c.github.io/DOM-Parsing/#dom-range-createcontextualfragment>`__,
   ```getClientRects()`` <https://drafts.csswg.org/cssom-view-1/#dom-range-getclientrects>`__,
   and
   ```getBoundingClientRect()`` <https://drafts.csswg.org/cssom-view-1/#dom-range-getboundingclientrect>`__
   methods are defined in other specifications.
   `[DOM-Parsing] <#biblio-dom-parsing>`__
   `[CSSOM-VIEW] <#biblio-cssom-view>`__


/6. Traversal
=============

   .. .. rubric:: 6. Traversal ` <#traversal>`__
      :name: traversal
      :class: heading settled

   ```NodeIterator`` <#nodeiterator>`__ and
   ```TreeWalker`` <#treewalker>`__ objects can be used to filter and
   traverse `node <#concept-node>`__ `trees <#concept-tree>`__.

   Each ```NodeIterator`` <#nodeiterator>`__ and
   ```TreeWalker`` <#treewalker>`__ object has an associated active flag
   to avoid recursive invocations. It is initially unset.

   Each ```NodeIterator`` <#nodeiterator>`__ and
   ```TreeWalker`` <#treewalker>`__ object also has an associated root
   (a `node <#concept-node>`__), a whatToShow (a bitmask), and a filter
   (a callback).

   To filter a `node <#concept-node>`__ ``node`` within a
   ```NodeIterator`` <#nodeiterator>`__ or
   ```TreeWalker`` <#treewalker>`__ object ``traverser``, run these
   steps:

   #. If ``traverser``\ ’s `active flag <#concept-traversal-active>`__
      is set, then throw an
      "```InvalidStateError`` <https://webidl.spec.whatwg.org/#invalidstateerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. Let ``n`` be ``node``\ ’s ```nodeType`` <#dom-node-nodetype>`__
      attribute value − 1.

   #. If the ``n``\ :sup:`th` bit (where 0 is the least significant bit)
      of ``traverser``\ ’s
      `whatToShow <#concept-traversal-whattoshow>`__ is not set, then
      return ```FILTER_SKIP`` <#dom-nodefilter-filter_skip>`__.

   #. If ``traverser``\ ’s `filter <#concept-traversal-filter>`__ is
      null, then return
      ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__.

   #. Set ``traverser``\ ’s `active flag <#concept-traversal-active>`__.

   #. Let ``result`` be the return value of `call a user object’s
      operation <https://webidl.spec.whatwg.org/#call-a-user-objects-operation>`__
      with ``traverser``\ ’s `filter <#concept-traversal-filter>`__,
      "``acceptNode``", and « ``node`` ». If this throws an exception,
      then unset ``traverser``\ ’s `active
      flag <#concept-traversal-active>`__ and rethrow the exception.

   #. Unset ``traverser``\ ’s `active
      flag <#concept-traversal-active>`__.

   #. Return ``result``.


/6.1. Interface NodeIterator
============================

   .. .. rubric:: 6.1. Interface
      ```NodeIterator`` <#nodeiterator>`__ ` <#interface-nodeiterator>`__
      :name: interface-nodeiterator
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface NodeIterator {
        [SameObject] readonly attribute Node root;
        readonly attribute Node referenceNode;
        readonly attribute boolean pointerBeforeReferenceNode;
        readonly attribute unsigned long whatToShow;
        readonly attribute NodeFilter? filter;

        Node? nextNode();
        Node? previousNode();

        undefined detach();
      };

   ```NodeIterator`` <#nodeiterator>`__ objects can be created using the
   ```createNodeIterator()`` <#dom-document-createnodeiterator>`__
   method on ```Document`` <#document>`__ objects.

   Each ```NodeIterator`` <#nodeiterator>`__ object has an associated
   iterator collection, which is a `collection <#concept-collection>`__
   rooted at the ```NodeIterator`` <#nodeiterator>`__ object’s
   `root <#concept-traversal-root>`__, whose filter matches any
   `node <#concept-node>`__.

   Each ```NodeIterator`` <#nodeiterator>`__ object also has an
   associated reference (a `node <#concept-node>`__) and pointer before
   reference (a boolean).

   As mentioned earlier, ```NodeIterator`` <#nodeiterator>`__ objects
   have an associated `active flag <#concept-traversal-active>`__,
   `root <#concept-traversal-root>`__,
   `whatToShow <#concept-traversal-whattoshow>`__, and
   `filter <#concept-traversal-filter>`__ as well.

   The ``NodeIterator`` pre-removing steps given a ``nodeIterator`` and
   ``toBeRemovedNode``, are as follows:

   #. If ``toBeRemovedNode`` is not an `inclusive
      ancestor <#concept-tree-inclusive-ancestor>`__ of
      ``nodeIterator``\ ’s `reference <#nodeiterator-reference>`__, or
      ``toBeRemovedNode`` is ``nodeIterator``\ ’s
      `root <#concept-traversal-root>`__, then return.

   #. If ``nodeIterator``\ ’s `pointer before
      reference <#nodeiterator-pointer-before-reference>`__ is true,
      then:

      #. Let ``next`` be ``toBeRemovedNode``\ ’s first
         `following <#concept-tree-following>`__
         `node <#concept-node>`__ that is an `inclusive
         descendant <#concept-tree-inclusive-descendant>`__ of
         ``nodeIterator``\ ’s `root <#concept-traversal-root>`__ and is
         not an `inclusive
         descendant <#concept-tree-inclusive-descendant>`__ of
         ``toBeRemovedNode``, and null if there is no such
         `node <#concept-node>`__.

      #. If ``next`` is non-null, then set ``nodeIterator``\ ’s
         `reference <#nodeiterator-reference>`__ to ``next`` and return.

      #. Otherwise, set ``nodeIterator``\ ’s `pointer before
         reference <#nodeiterator-pointer-before-reference>`__ to false.

         Steps are not terminated here.

   #. Set ``nodeIterator``\ ’s `reference <#nodeiterator-reference>`__
      to ``toBeRemovedNode``\ ’s `parent <#concept-tree-parent>`__, if
      ``toBeRemovedNode``\ ’s `previous
      sibling <#concept-tree-previous-sibling>`__ is null, and to the
      `inclusive descendant <#concept-tree-inclusive-descendant>`__ of
      ``toBeRemovedNode``\ ’s `previous
      sibling <#concept-tree-previous-sibling>`__ that appears last in
      `tree order <#concept-tree-order>`__ otherwise.

   --------------

   The ``root`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `root <#concept-traversal-root>`__.

   The ``referenceNode`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `reference <#nodeiterator-reference>`__.

   The ``pointerBeforeReferenceNode`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `pointer before
   reference <#nodeiterator-pointer-before-reference>`__.

   The ``whatToShow`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `whatToShow <#concept-traversal-whattoshow>`__.

   The ``filter`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `filter <#concept-traversal-filter>`__.

   To traverse, given a ```NodeIterator`` <#nodeiterator>`__ object
   ``iterator`` and a direction ``direction``, run these steps:

   #. Let ``node`` be ``iterator``\ ’s
      `reference <#nodeiterator-reference>`__.

   #. Let ``beforeNode`` be ``iterator``\ ’s `pointer before
      reference <#nodeiterator-pointer-before-reference>`__.

   #. While true:

      #. Branch on ``direction``:

         next
            If ``beforeNode`` is false, then set ``node`` to the first
            `node <#concept-node>`__
            `following <#concept-tree-following>`__ ``node`` in
            ``iterator``\ ’s `iterator
            collection <#iterator-collection>`__. If there is no such
            `node <#concept-node>`__, then return null.

            If ``beforeNode`` is true, then set it to false.

         previous
            If ``beforeNode`` is true, then set ``node`` to the first
            `node <#concept-node>`__
            `preceding <#concept-tree-preceding>`__ ``node`` in
            ``iterator``\ ’s `iterator
            collection <#iterator-collection>`__. If there is no such
            `node <#concept-node>`__, then return null.

            If ``beforeNode`` is false, then set it to true.

      #. Let ``result`` be the result of
         `filtering <#concept-node-filter>`__ ``node`` within
         ``iterator``.

      #. If ``result`` is
         ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
         `break <https://infra.spec.whatwg.org/#iteration-break>`__.

   #. Set ``iterator``\ ’s `reference <#nodeiterator-reference>`__ to
      ``node``.

   #. Set ``iterator``\ ’s `pointer before
      reference <#nodeiterator-pointer-before-reference>`__ to
      ``beforeNode``.

   #. Return ``node``.

   The ``nextNode()`` method steps are to return the result of
   `traversing <#concept-nodeiterator-traverse>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and next.

   The ``previousNode()`` method steps are to return the result of
   `traversing <#concept-nodeiterator-traverse>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and previous.

   The ``detach()`` method steps are to do nothing. Its functionality
   (disabling a ```NodeIterator`` <#nodeiterator>`__ object) was
   removed, but the method itself is preserved for compatibility.


/6.2. Interface TreeWalker
==========================

   .. .. rubric:: 6.2. Interface
      ```TreeWalker`` <#treewalker>`__ ` <#interface-treewalker>`__
      :name: interface-treewalker
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface TreeWalker {
        [SameObject] readonly attribute Node root;
        readonly attribute unsigned long whatToShow;
        readonly attribute NodeFilter? filter;
                 attribute Node currentNode;

        Node? parentNode();
        Node? firstChild();
        Node? lastChild();
        Node? previousSibling();
        Node? nextSibling();
        Node? previousNode();
        Node? nextNode();
      };

   ```TreeWalker`` <#treewalker>`__ objects can be created using the
   ```createTreeWalker()`` <#dom-document-createtreewalker>`__ method on
   ```Document`` <#document>`__ objects.

   Each ```TreeWalker`` <#treewalker>`__ object has an associated
   current (a `node <#concept-node>`__).

   As mentioned earlier ```TreeWalker`` <#treewalker>`__ objects have an
   associated `root <#concept-traversal-root>`__,
   `whatToShow <#concept-traversal-whattoshow>`__, and
   `filter <#concept-traversal-filter>`__ as well.

   The ``root`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `root <#concept-traversal-root>`__.

   The ``whatToShow`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `whatToShow <#concept-traversal-whattoshow>`__.

   The ``filter`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `filter <#concept-traversal-filter>`__.

   The ``currentNode`` getter steps are to return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `current <#treewalker-current>`__.

   The ```currentNode`` <#dom-treewalker-currentnode>`__ setter steps
   are to set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
   `current <#treewalker-current>`__ to the given value.

   --------------

   The ``parentNode()`` method steps are:

   #. Let ``node`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `current <#treewalker-current>`__.

   #. While ``node`` is non-null and is not
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `root <#concept-traversal-root>`__:

      #. Set ``node`` to ``node``\ ’s `parent <#concept-tree-parent>`__.

      #. If ``node`` is non-null and
         `filtering <#concept-node-filter>`__ ``node`` within
         `this <https://webidl.spec.whatwg.org/#this>`__ returns
         ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then set
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `current <#treewalker-current>`__ to ``node`` and return
         ``node``.

   #. Return null.

   To traverse children, given a ``walker`` and ``type``, run these
   steps:

   #. Let ``node`` be ``walker``\ ’s `current <#treewalker-current>`__.

   #. Set ``node`` to ``node``\ ’s `first
      child <#concept-tree-first-child>`__ if ``type`` is first, and
      ``node``\ ’s `last child <#concept-tree-last-child>`__ if ``type``
      is last.

   #. While ``node`` is non-null:

      #. Let ``result`` be the result of
         `filtering <#concept-node-filter>`__ ``node`` within
         ``walker``.

      #. If ``result`` is
         ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then set
         ``walker``\ ’s `current <#treewalker-current>`__ to ``node``
         and return ``node``.

      #. If ``result`` is
         ```FILTER_SKIP`` <#dom-nodefilter-filter_skip>`__, then:

         #. Let ``child`` be ``node``\ ’s `first
            child <#concept-tree-first-child>`__ if ``type`` is first,
            and ``node``\ ’s `last child <#concept-tree-last-child>`__
            if ``type`` is last.

         #. If ``child`` is non-null, then set ``node`` to ``child`` and
            `continue <https://infra.spec.whatwg.org/#iteration-continue>`__.

      #. While ``node`` is non-null:

         #. Let ``sibling`` be ``node``\ ’s `next
            sibling <#concept-tree-next-sibling>`__ if ``type`` is
            first, and ``node``\ ’s `previous
            sibling <#concept-tree-previous-sibling>`__ if ``type`` is
            last.

         #. If ``sibling`` is non-null, then set ``node`` to ``sibling``
            and
            `break <https://infra.spec.whatwg.org/#iteration-break>`__.

         #. Let ``parent`` be ``node``\ ’s
            `parent <#concept-tree-parent>`__.

         #. If ``parent`` is null, ``walker``\ ’s
            `root <#concept-traversal-root>`__, or ``walker``\ ’s
            `current <#treewalker-current>`__, then return null.

         #. Set ``node`` to ``parent``.

   #. Return null.

   The ``firstChild()`` method steps are to `traverse
   children <#concept-traverse-children>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and first.

   The ``lastChild()`` method steps are to `traverse
   children <#concept-traverse-children>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and last.

   To traverse siblings, given a ``walker`` and ``type``, run these
   steps:

   #. Let ``node`` be ``walker``\ ’s `current <#treewalker-current>`__.

   #. If ``node`` is `root <#concept-traversal-root>`__, then return
      null.

   #. While true:

      #. Let ``sibling`` be ``node``\ ’s `next
         sibling <#concept-tree-next-sibling>`__ if ``type`` is next,
         and ``node``\ ’s `previous
         sibling <#concept-tree-previous-sibling>`__ if ``type`` is
         previous.

      #. While ``sibling`` is non-null:

         #. Set ``node`` to ``sibling``.

         #. Let ``result`` be the result of
            `filtering <#concept-node-filter>`__ ``node`` within
            ``walker``.

         #. If ``result`` is
            ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
            set ``walker``\ ’s `current <#treewalker-current>`__ to
            ``node`` and return ``node``.

         #. Set ``sibling`` to ``node``\ ’s `first
            child <#concept-tree-first-child>`__ if ``type`` is next,
            and ``node``\ ’s `last child <#concept-tree-last-child>`__
            if ``type`` is previous.

         #. If ``result`` is
            ```FILTER_REJECT`` <#dom-nodefilter-filter_reject>`__ or
            ``sibling`` is null, then set ``sibling`` to ``node``\ ’s
            `next sibling <#concept-tree-next-sibling>`__ if ``type`` is
            next, and ``node``\ ’s `previous
            sibling <#concept-tree-previous-sibling>`__ if ``type`` is
            previous.

      #. Set ``node`` to ``node``\ ’s `parent <#concept-tree-parent>`__.

      #. If ``node`` is null or ``walker``\ ’s
         `root <#concept-traversal-root>`__, then return null.

      #. If the return value of `filtering <#concept-node-filter>`__
         ``node`` within ``walker`` is
         ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
         return null.

   The ``nextSibling()`` method steps are to `traverse
   siblings <#concept-traverse-siblings>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and next.

   The ``previousSibling()`` method steps are to `traverse
   siblings <#concept-traverse-siblings>`__ with
   `this <https://webidl.spec.whatwg.org/#this>`__ and previous.

   The ``previousNode()`` method steps are:

   #. Let ``node`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `current <#treewalker-current>`__.

   #. While ``node`` is not
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `root <#concept-traversal-root>`__:

      #. Let ``sibling`` be ``node``\ ’s `previous
         sibling <#concept-tree-previous-sibling>`__.

      #. While ``sibling`` is non-null:

         #. Set ``node`` to ``sibling``.

         #. Let ``result`` be the result of
            `filtering <#concept-node-filter>`__ ``node`` within
            `this <https://webidl.spec.whatwg.org/#this>`__.

         #. While ``result`` is not
            ```FILTER_REJECT`` <#dom-nodefilter-filter_reject>`__ and
            ``node`` has a `child <#concept-tree-child>`__:

            #. Set ``node`` to ``node``\ ’s `last
               child <#concept-tree-last-child>`__.

            #. Set ``result`` to the result of
               `filtering <#concept-node-filter>`__ ``node`` within
               `this <https://webidl.spec.whatwg.org/#this>`__.

         #. If ``result`` is
            ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
            set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
            `current <#treewalker-current>`__ to ``node`` and return
            ``node``.

         #. Set ``sibling`` to ``node``\ ’s `previous
            sibling <#concept-tree-previous-sibling>`__.

      #. If ``node`` is
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `root <#concept-traversal-root>`__ or ``node``\ ’s
         `parent <#concept-tree-parent>`__ is null, then return null.

      #. Set ``node`` to ``node``\ ’s `parent <#concept-tree-parent>`__.

      #. If the return value of `filtering <#concept-node-filter>`__
         ``node`` within `this <https://webidl.spec.whatwg.org/#this>`__
         is ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
         set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `current <#treewalker-current>`__ to ``node`` and return
         ``node``.

   #. Return null.

   The ``nextNode()`` method steps are:

   #. Let ``node`` be
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
      `current <#treewalker-current>`__.

   #. Let ``result`` be
      ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__.

   #. While true:

      #. While ``result`` is not
         ```FILTER_REJECT`` <#dom-nodefilter-filter_reject>`__ and
         ``node`` has a `child <#concept-tree-child>`__:

         #. Set ``node`` to its `first
            child <#concept-tree-first-child>`__.

         #. Set ``result`` to the result of
            `filtering <#concept-node-filter>`__ ``node`` within
            `this <https://webidl.spec.whatwg.org/#this>`__.

         #. If ``result`` is
            ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then
            set `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
            `current <#treewalker-current>`__ to ``node`` and return
            ``node``.

      #. Let ``sibling`` be null.

      #. Let ``temporary`` be ``node``.

      #. While ``temporary`` is non-null:

         #. If ``temporary`` is
            `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
            `root <#concept-traversal-root>`__, then return null.

         #. Set ``sibling`` to ``temporary``\ ’s `next
            sibling <#concept-tree-next-sibling>`__.

         #. If ``sibling`` is non-null, then set ``node`` to ``sibling``
            and
            `break <https://infra.spec.whatwg.org/#iteration-break>`__.

         #. Set ``temporary`` to ``temporary``\ ’s
            `parent <#concept-tree-parent>`__.

      #. Set ``result`` to the result of
         `filtering <#concept-node-filter>`__ ``node`` within
         `this <https://webidl.spec.whatwg.org/#this>`__.

      #. If ``result`` is
         ```FILTER_ACCEPT`` <#dom-nodefilter-filter_accept>`__, then set
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s
         `current <#treewalker-current>`__ to ``node`` and return
         ``node``.


/6.3. Interface NodeFilter
==========================

   .. .. rubric:: 6.3. Interface
      ```NodeFilter`` <#callbackdef-nodefilter>`__ ` <#interface-nodefilter>`__
      :name: interface-nodefilter
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      callback interface NodeFilter {
        // Constants for acceptNode()
        const unsigned short FILTER_ACCEPT = 1;
        const unsigned short FILTER_REJECT = 2;
        const unsigned short FILTER_SKIP = 3;

        // Constants for whatToShow
        const unsigned long SHOW_ALL = 0xFFFFFFFF;
        const unsigned long SHOW_ELEMENT = 0x1;
        const unsigned long SHOW_ATTRIBUTE = 0x2;
        const unsigned long SHOW_TEXT = 0x4;
        const unsigned long SHOW_CDATA_SECTION = 0x8;
        const unsigned long SHOW_ENTITY_REFERENCE = 0x10; // legacy
        const unsigned long SHOW_ENTITY = 0x20; // legacy
        const unsigned long SHOW_PROCESSING_INSTRUCTION = 0x40;
        const unsigned long SHOW_COMMENT = 0x80;
        const unsigned long SHOW_DOCUMENT = 0x100;
        const unsigned long SHOW_DOCUMENT_TYPE = 0x200;
        const unsigned long SHOW_DOCUMENT_FRAGMENT = 0x400;
        const unsigned long SHOW_NOTATION = 0x800; // legacy

        unsigned short acceptNode(Node node);
      };

   ```NodeFilter`` <#callbackdef-nodefilter>`__ objects can be used as
   `filter <#concept-traversal-filter>`__ for
   ```NodeIterator`` <#nodeiterator>`__ and
   ```TreeWalker`` <#treewalker>`__ objects and also provide constants
   for their `whatToShow <#concept-traversal-whattoshow>`__ bitmask. A
   ```NodeFilter`` <#callbackdef-nodefilter>`__ object is typically
   implemented as a JavaScript function.

   These constants can be used as `filter <#concept-traversal-filter>`__
   return value:

   -  ``FILTER_ACCEPT`` (1);
   -  ``FILTER_REJECT`` (2);
   -  ``FILTER_SKIP`` (3).

   These constants can be used for
   `whatToShow <#concept-traversal-whattoshow>`__:

   -  ``SHOW_ALL`` (4294967295, FFFFFFFF in hexadecimal);
   -  ``SHOW_ELEMENT`` (1);
   -  ``SHOW_ATTRIBUTE`` (2);
   -  ``SHOW_TEXT`` (4);
   -  ``SHOW_CDATA_SECTION`` (8);
   -  ``SHOW_PROCESSING_INSTRUCTION`` (64, 40 in hexadecimal);
   -  ``SHOW_COMMENT`` (128, 80 in hexadecimal);
   -  ``SHOW_DOCUMENT`` (256, 100 in hexadecimal);
   -  ``SHOW_DOCUMENT_TYPE`` (512, 200 in hexadecimal);
   -  ``SHOW_DOCUMENT_FRAGMENT`` (1024, 400 in hexadecimal).


/7. Sets
========

   .. .. rubric:: 7. Sets ` <#sets>`__
      :name: sets
      :class: heading settled

   Yes, the name ```DOMTokenList`` <#domtokenlist>`__ is an unfortunate
   legacy mishap.


/7.1. Interface DOMTokenList
============================

   .. .. rubric:: 7.1. Interface
      ```DOMTokenList`` <#domtokenlist>`__ ` <#interface-domtokenlist>`__
      :name: interface-domtokenlist
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface DOMTokenList {
        readonly attribute unsigned long length;
        getter DOMString? item(unsigned long index);
        boolean contains(DOMString token);
        [CEReactions] undefined add(DOMString... tokens);
        [CEReactions] undefined remove(DOMString... tokens);
        [CEReactions] boolean toggle(DOMString token, optional boolean force);
        [CEReactions] boolean replace(DOMString token, DOMString newToken);
        boolean supports(DOMString token);
        [CEReactions] stringifier attribute DOMString value;
        iterable<DOMString>;
      };

   A ```DOMTokenList`` <#domtokenlist>`__ object has an associated token
   set (a `set <https://infra.spec.whatwg.org/#ordered-set>`__), which
   is initially empty.

   A ```DOMTokenList`` <#domtokenlist>`__ object also has an associated
   `element <#concept-element>`__ and an
   `attribute <#concept-attribute>`__\ ’s `local
   name <#concept-attribute-local-name>`__.

   `Specifications <#other-applicable-specifications>`__ may define
   supported tokens for a ```DOMTokenList`` <#domtokenlist>`__'s
   associated `attribute <#concept-attribute>`__\ ’s `local
   name <#concept-attribute-local-name>`__.

   A ```DOMTokenList`` <#domtokenlist>`__ object’s validation steps for
   a given ``token`` are:

   #. If the associated `attribute <#concept-attribute>`__\ ’s `local
      name <#concept-attribute-local-name>`__ does not define `supported
      tokens <#concept-supported-tokens>`__,
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      ``TypeError``.

   #. Let ``lowercase token`` be a copy of ``token``, in `ASCII
      lowercase <https://infra.spec.whatwg.org/#ascii-lowercase>`__.

   #. If ``lowercase token`` is present in `supported
      tokens <#concept-supported-tokens>`__, return true.

   #. Return false.

   A ```DOMTokenList`` <#domtokenlist>`__ object’s update steps are:

   #. If the associated `element <#concept-element>`__ does not have an
      associated `attribute <#concept-attribute>`__ and `token
      set <#concept-dtl-tokens>`__ is empty, then return.

   #. `Set an attribute value <#concept-element-attributes-set-value>`__
      for the associated `element <#concept-element>`__ using associated
      `attribute <#concept-attribute>`__\ ’s `local
      name <#concept-attribute-local-name>`__ and the result of running
      the `ordered set serializer <#concept-ordered-set-serializer>`__
      for `token set <#concept-dtl-tokens>`__.

   A ```DOMTokenList`` <#domtokenlist>`__ object’s serialize steps are
   to return the result of running `get an attribute
   value <#concept-element-attributes-get-value>`__ given the associated
   `element <#concept-element>`__ and the associated
   `attribute <#concept-attribute>`__\ ’s `local
   name <#concept-attribute-local-name>`__.

   --------------

   A ```DOMTokenList`` <#domtokenlist>`__ object has these `attribute
   change steps <#concept-element-attributes-change-ext>`__ for its
   associated `element <#concept-element>`__:

   #. If ``localName`` is associated attribute’s `local
      name <#concept-attribute-local-name>`__, ``namespace`` is null,
      and ``value`` is null, then
      `empty <https://infra.spec.whatwg.org/#list-empty>`__ `token
      set <#concept-dtl-tokens>`__.

   #. Otherwise, if ``localName`` is associated attribute’s `local
      name <#concept-attribute-local-name>`__, ``namespace`` is null,
      then set `token set <#concept-dtl-tokens>`__ to ``value``,
      `parsed <#concept-ordered-set-parser>`__.

   When a ```DOMTokenList`` <#domtokenlist>`__ object is created, then:

   #. Let ``element`` be associated `element <#concept-element>`__.

   #. Let ``localName`` be associated attribute’s `local
      name <#concept-attribute-local-name>`__.

   #. Let ``value`` be the result of `getting an attribute
      value <#concept-element-attributes-get-value>`__ given ``element``
      and ``localName``.

   #. Run the `attribute change
      steps <#concept-element-attributes-change-ext>`__ for ``element``,
      ``localName``, ``value``, ``value``, and null.

   ``tokenlist`` ``.`` ```length`` <#dom-domtokenlist-length>`__
      Returns the number of tokens.

   ``tokenlist`` ``.`` ```item(index)`` <#dom-domtokenlist-item>`__
   ``tokenlist`` ``[`` ``index`` ``]``
      Returns the token with index ``index``.

   ``tokenlist`` ``.`` ```contains(token)`` <#dom-domtokenlist-contains>`__
      Returns true if ``token`` is present; otherwise false.

   ``tokenlist`` ``.`` ```add(`` ``tokens`` ``…)`` <#dom-domtokenlist-add>`__
      Adds all arguments passed, except those already present.

      Throws a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments is the empty string.

      Throws an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments contains any `ASCII
      whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__.

   ``tokenlist`` ``.`` ```remove(`` ``tokens`` ``…)`` <#dom-domtokenlist-remove>`__
      Removes arguments passed, if they are present.

      Throws a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments is the empty string.

      Throws an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments contains any `ASCII
      whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__.

   ``tokenlist`` ``.`` ```toggle(`` ``token`` ``[,`` ``force`` ``])`` <#dom-domtokenlist-toggle>`__
      If ``force`` is not given, "toggles" ``token``, removing it if
      it’s present and adding it if it’s not present. If ``force`` is
      true, adds ``token`` (same as
      ```add()`` <#dom-domtokenlist-add>`__). If ``force`` is false,
      removes ``token`` (same as
      ```remove()`` <#dom-domtokenlist-remove>`__).

      Returns true if ``token`` is now present; otherwise false.

      Throws a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if ``token`` is empty.

      Throws an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if ``token`` contains any spaces.

   ``tokenlist`` ``.`` ```replace(`` ``token`` ``,`` ``newToken`` ``)`` <#dom-domtokenlist-replace>`__
      Replaces ``token`` with ``newToken``.

      Returns true if ``token`` was replaced with ``newToken``;
      otherwise false.

      Throws a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments is the empty string.

      Throws an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__
      if one of the arguments contains any `ASCII
      whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__.

   ``tokenlist`` ``.`` ```supports(`` ``token`` ``)`` <#dom-domtokenlist-supports>`__
      Returns true if ``token`` is in the associated attribute’s
      supported tokens. Returns false otherwise.

      Throws a ``TypeError`` if the associated attribute has no
      supported tokens defined.

   ``tokenlist`` ``.`` ```value`` <#dom-domtokenlist-value>`__
      Returns the associated set as string.

      Can be set, to change the associated attribute.

   The ``length`` attribute' getter must return
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
   set <#concept-dtl-tokens>`__\ ’s
   `size <https://infra.spec.whatwg.org/#list-size>`__.

   The object’s `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__
   are the numbers in the range zero to object’s `token
   set <#concept-dtl-tokens>`__\ ’s
   `size <https://infra.spec.whatwg.org/#list-size>`__ minus one, unless
   `token set <#concept-dtl-tokens>`__ `is
   empty <https://infra.spec.whatwg.org/#list-is-empty>`__, in which
   case there are no `supported property
   indices <https://webidl.spec.whatwg.org/#dfn-supported-property-indices>`__.

   The ``item(`` ``index`` ``)`` method steps are:

   #. If ``index`` is equal to or greater than
      `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__\ ’s
      `size <https://infra.spec.whatwg.org/#list-size>`__, then return
      null.

   #. Return `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__\ [``index``].

   The ``contains(`` ``token`` ``)`` method steps are to return true
   if `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
   set <#concept-dtl-tokens>`__\ [``token``]
   `exists <https://infra.spec.whatwg.org/#list-contain>`__; otherwise
   false.

   The ``add(`` ``tokens`` ``…)`` method steps are:

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``token`` in ``tokens``:

      #. If ``token`` is the empty string, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``token`` contains any `ASCII
         whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__,
         then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``token`` in ``tokens``,
      `append <https://infra.spec.whatwg.org/#set-append>`__ ``token``
      to `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__.

   #. Run the `update steps <#concept-dtl-update>`__.

   The ``remove(`` ``tokens`` ``…)`` method steps are:

   #. `For each <https://infra.spec.whatwg.org/#list-iterate>`__
      ``token`` in ``tokens``:

      #. If ``token`` is the empty string, then
         `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
         "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

      #. If ``token`` contains any `ASCII
         whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__,
         then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
         "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
         ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. For each ``token`` in ``tokens``,
      `remove <https://infra.spec.whatwg.org/#list-remove>`__ ``token``
      from `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__.

   #. Run the `update steps <#concept-dtl-update>`__.

   The ``toggle(`` ``token`` ``,`` ``force`` ``)`` method steps are:

   #. If ``token`` is the empty string, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If ``token`` contains any `ASCII
      whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__,
      then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__\ [``token``]
      `exists <https://infra.spec.whatwg.org/#list-contain>`__, then:

      #. If ``force`` is either not given or is false, then
         `remove <https://infra.spec.whatwg.org/#list-remove>`__
         ``token`` from
         `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
         set <#concept-dtl-tokens>`__, run the `update
         steps <#concept-dtl-update>`__ and return false.

      #. Return true.

   #. Otherwise, if ``force`` not given or is true,
      `append <https://infra.spec.whatwg.org/#set-append>`__ ``token``
      to `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__, run the `update
      steps <#concept-dtl-update>`__, and return true.

   #. Return false.

   The `update steps <#concept-dtl-update>`__ are not always run for
   ```toggle()`` <#dom-domtokenlist-toggle>`__ for web compatibility.

   The ``replace(`` ``token`` ``,`` ``newToken`` ``)`` method steps
   are:

   #. If either ``token`` or ``newToken`` is the empty string, then
      `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ a
      "```SyntaxError`` <https://webidl.spec.whatwg.org/#syntaxerror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If either ``token`` or ``newToken`` contains any `ASCII
      whitespace <https://infra.spec.whatwg.org/#ascii-whitespace>`__,
      then `throw <https://webidl.spec.whatwg.org/#dfn-throw>`__ an
      "```InvalidCharacterError`` <https://webidl.spec.whatwg.org/#invalidcharactererror>`__"
      ```DOMException`` <https://webidl.spec.whatwg.org/#idl-DOMException>`__.

   #. If `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__ does not
      `contain <https://infra.spec.whatwg.org/#list-contain>`__
      ``token``, then return false.

   #. `Replace <https://infra.spec.whatwg.org/#set-replace>`__ ``token``
      in `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `token
      set <#concept-dtl-tokens>`__ with ``newToken``.

   #. Run the `update steps <#concept-dtl-update>`__.

   #. Return true.

   The `update steps <#concept-dtl-update>`__ are not always run for
   ```replace()`` <#dom-domtokenlist-replace>`__ for web compatibility.

   The ``supports(`` ``token`` ``)`` method steps are:

   #. Let ``result`` be the return value of `validation
      steps <#concept-domtokenlist-validation>`__ called with ``token``.

   #. Return ``result``.

   The ``value`` attribute must return the result of running
   `this <https://webidl.spec.whatwg.org/#this>`__\ ’s `serialize
   steps <#concept-dtl-serialize>`__.

   Setting the ```value`` <#dom-domtokenlist-value>`__ attribute must
   `set an attribute value <#concept-element-attributes-set-value>`__
   for the associated `element <#concept-element>`__ using associated
   `attribute <#concept-attribute>`__\ ’s `local
   name <#concept-attribute-local-name>`__ and the given value.


/8. XPath
=========

   .. .. rubric:: 8. XPath ` <#xpath>`__
      :name: xpath
      :class: heading settled

   DOM Level 3 XPath defined an API for evaluating XPath 1.0
   expressions. These APIs are widely implemented, but have not been
   maintained. The interface definitions are maintained here so that
   they can be updated when Web IDL changes. Complete definitions of
   these APIs remain necessary and such work is tracked and can be
   contributed to in
   `whatwg/dom#67 <https://github.com/whatwg/dom/issues/67>`__.
   `[DOM-Level-3-XPath] <#biblio-dom-level-3-xpath>`__
   `[XPath] <#biblio-xpath>`__ `[WEBIDL] <#biblio-webidl>`__


/8.1. Interface XPathResult
===========================

   .. .. rubric:: 8.1. Interface
      ```XPathResult`` <#xpathresult>`__ ` <#interface-xpathresult>`__
      :name: interface-xpathresult
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface XPathResult {
        const unsigned short ANY_TYPE = 0;
        const unsigned short NUMBER_TYPE = 1;
        const unsigned short STRING_TYPE = 2;
        const unsigned short BOOLEAN_TYPE = 3;
        const unsigned short UNORDERED_NODE_ITERATOR_TYPE = 4;
        const unsigned short ORDERED_NODE_ITERATOR_TYPE = 5;
        const unsigned short UNORDERED_NODE_SNAPSHOT_TYPE = 6;
        const unsigned short ORDERED_NODE_SNAPSHOT_TYPE = 7;
        const unsigned short ANY_UNORDERED_NODE_TYPE = 8;
        const unsigned short FIRST_ORDERED_NODE_TYPE = 9;

        readonly attribute unsigned short resultType;
        readonly attribute unrestricted double numberValue;
        readonly attribute DOMString stringValue;
        readonly attribute boolean booleanValue;
        readonly attribute Node? singleNodeValue;
        readonly attribute boolean invalidIteratorState;
        readonly attribute unsigned long snapshotLength;

        Node? iterateNext();
        Node? snapshotItem(unsigned long index);
      };


/8.2. Interface XPathExpression
===============================

   .. .. rubric:: 8.2. Interface
      ```XPathExpression`` <#xpathexpression>`__ ` <#interface-xpathexpression>`__
      :name: interface-xpathexpression
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface XPathExpression {
        // XPathResult.ANY_TYPE = 0
        XPathResult evaluate(Node contextNode, optional unsigned short type = 0, optional XPathResult? result = null);
      };


/8.3. Mixin XPathEvaluatorBase
==============================

   .. .. rubric:: 8.3. Mixin
      ```XPathEvaluatorBase`` <#xpathevaluatorbase>`__ ` <#mixin-xpathevaluatorbase>`__
      :name: mixin-xpathevaluatorbase
      :class: heading settled

   .. code:: idl

      callback interface XPathNSResolver {
        DOMString? lookupNamespaceURI(DOMString? prefix);
      };

      interface mixin XPathEvaluatorBase {
        [NewObject] XPathExpression createExpression(DOMString expression, optional XPathNSResolver? resolver = null);
        Node createNSResolver(Node nodeResolver); // legacy
        // XPathResult.ANY_TYPE = 0
        XPathResult evaluate(DOMString expression, Node contextNode, optional XPathNSResolver? resolver = null, optional unsigned short type = 0, optional XPathResult? result = null);
      };
      Document includes XPathEvaluatorBase;

   The ``createNSResolver(`` ``nodeResolver`` ``)`` method steps are
   to return ``nodeResolver``.

   This method exists only for historical reasons.


/8.4. Interface XPathEvaluator
==============================

   .. .. rubric:: 8.4. Interface
      ```XPathEvaluator`` <#xpathevaluator>`__ ` <#interface-xpathevaluator>`__
      :name: interface-xpathevaluator
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface XPathEvaluator {
        constructor();
      };

      XPathEvaluator includes XPathEvaluatorBase;

   For historical reasons you can both construct
   ```XPathEvaluator`` <#xpathevaluator>`__ and access the same methods
   on ```Document`` <#document>`__.


/9. XSLT
========

   .. .. rubric:: 9. XSLT ` <#xslt>`__
      :name: xslt
      :class: heading settled

   XSL Transformations (XSLT) is a language for transforming XML
   documents into other XML documents. The APIs defined in this section
   have been widely implemented, and are maintained here so that they
   can be updated when Web IDL changes. Complete definitions of these
   APIs remain necessary and such work is tracked and can be contributed
   to in `whatwg/dom#181 <https://github.com/whatwg/dom/issues/181>`__.
   `[XSLT] <#biblio-xslt>`__


/9.1. Interface XSLTProcessor
=============================

   .. .. rubric:: 9.1. Interface
      ```XSLTProcessor`` <#xsltprocessor>`__ ` <#interface-xsltprocessor>`__
      :name: interface-xsltprocessor
      :class: heading settled

   .. code:: idl

      [Exposed=Window]
      interface XSLTProcessor {
        constructor();
        undefined importStylesheet(Node style);
        [CEReactions] DocumentFragment transformToFragment(Node source, Document output);
        [CEReactions] Document transformToDocument(Node source);
        undefined setParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName, any value);
        any getParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName);
        undefined removeParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName);
        undefined clearParameters();
        undefined reset();
      };


/10. Security and privacy
=========================

   .. .. rubric:: 10. Security and privacy
      considerations ` <#security-and-privacy>`__
      :name: security-and-privacy
      :class: heading settled

   There are no known security or privacy considerations for this
   standard.


/11. Historical
===============

   .. .. rubric:: 11. Historical ` <#historical>`__
      :name: historical
      :class: heading settled

   This standard used to contain several interfaces and interface
   members that have been removed.

   These interfaces have been removed:

   -  ``DOMConfiguration``
   -  ``DOMError``
   -  ``DOMErrorHandler``
   -  ``DOMImplementationList``
   -  ``DOMImplementationSource``
   -  ``DOMLocator``
   -  ``DOMObject``
   -  ``DOMUserData``
   -  ``Entity``
   -  ``EntityReference``
   -  ``MutationEvent``
   -  ``MutationNameEvent``
   -  ``NameList``
   -  ``Notation``
   -  ``RangeException``
   -  ``TypeInfo``
   -  ``UserDataHandler``

   And these interface members have been removed:

   ```Attr`` <#attr>`__
      -  ``schemaTypeInfo``
      -  ``isId``
   ```Document`` <#document>`__
      -  ``createEntityReference()``
      -  ``xmlEncoding``
      -  ``xmlStandalone``
      -  ``xmlVersion``
      -  ``strictErrorChecking``
      -  ``domConfig``
      -  ``normalizeDocument()``
      -  ``renameNode()``
   ```DocumentType`` <#documenttype>`__
      -  ``entities``
      -  ``notations``
      -  ``internalSubset``
   ```DOMImplementation`` <#domimplementation>`__
      -  ``getFeature()``
   ```Element`` <#element>`__
      -  ``schemaTypeInfo``
      -  ``setIdAttribute()``
      -  ``setIdAttributeNS()``
      -  ``setIdAttributeNode()``
   ```Node`` <#node>`__
      -  ``isSupported``
      -  ``getFeature()``
      -  ``getUserData()``
      -  ``setUserData()``
   ```NodeIterator`` <#nodeiterator>`__
      -  ``expandEntityReferences``
   ```Text`` <#text>`__
      -  ``isElementContentWhitespace``
      -  ``replaceWholeText()``
   ```TreeWalker`` <#treewalker>`__
      -  ``expandEntityReferences``


/Acknowledgments
================

   .. .. rubric:: Acknowledgments ` <#acks>`__
      :name: acks
      :class: no-num heading settled

   There have been a lot of people that have helped make DOM more
   interoperable over the years and thereby furthered the goals of this
   standard. Likewise many people have helped making this standard what
   it is today.

   With that, many thanks to Adam Klein, Adrian Bateman, Ahmid *snuggs*,
   Alex Komoroske, Alex Russell, Alexey Shvayka, Andreu Botella, Anthony
   Ramine, Arkadiusz Michalski, Arnaud Le Hors, Arun Ranganathan,
   Benjamin Gruenbaum, Björn Höhrmann, Boris Zbarsky, Brandon Payton,
   Brandon Slade, Brandon Wallace, Brian Kardell, C. Scott Ananian,
   Cameron McCormack, Chris Dumez, Chris Paris, Chris Rebert, Cyrille
   Tuzi, Dan Burzo, Daniel Clark, Daniel Glazman, Darin Fisher, David
   Bruant, David Flanagan, David Håsäther, David Hyatt, Deepak
   Sherveghar, Dethe Elza, Dimitri Glazkov, Domenic Denicola, Dominic
   Cooney, Dominique Hazaël-Massieux, Don Jordan, Doug Schepers, Edgar
   Chen, Elisée Maurer, Elliott Sprehn, Emilio Cobos Álvarez, Eric
   Bidelman, Erik Arvidsson, François Remy, Gary Kacmarcik, Gavin Nicol,
   Giorgio Liscio, Glen Huang, Glenn Adams, Glenn Maynard, Hajime
   Morrita, Harald Alvestrand, Hayato Ito, Henri Sivonen, Hongchan Choi,
   Hunan Rostomyan, Ian Hickson, Igor Bukanov, Jacob Rossi, Jake
   Archibald, Jake Verbaten, James Graham, James Greene, James M Snell,
   James Robinson, Jeffrey Yasskin, Jens Lindström, Jeremy Davis, Jesse
   McCarthy, Jinho Bang, João Eiras, Joe Kesselman, John Atkins, John
   Dai, Jonas Sicking, Jonathan Kingston, Jonathan Robie, Joris van der
   Wel, Joshua Bell, J. S. Choi, Jungkee Song, Justin Summerlin, Kagami
   Sascha Rosylight, 呂康豪 (Kang-Hao Lu), 田村健人 (Kent TAMURA), Kevin
   J. Sung, Kevin Sweeney, Kirill Topolyan, Koji Ishii, Lachlan Hunt,
   Lauren Wood, Luca Casonato, Luke Zielinski, Magne Andersson, Majid
   Valipour, Malte Ubl, Manish Goregaokar, Manish Tripathi, Marcos
   Caceres, Mark Miller, Martijn van der Ven, Mason Freed, Mats
   Palmgren, Mounir Lamouri, Michael Stramel, Michael™ Smith, Mike
   Champion, Mike Taylor, Mike West, Nicolás Peña Moreno, Nidhi Jaju,
   Ojan Vafai, Oliver Nightingale, Olli Pettay, Ondřej Žára, Peter
   Sharpe, Philip Jägenstedt, Philippe Le Hégaret, Piers Wombwell,
   Pierre-Marie Dartus, prosody—Gab Vereable Context(, Rafael Weinstein,
   Rakina Zata Amni, Richard Bradshaw, Rick Byers, Rick Waldron, Robbert
   Broersma, Robin Berjon, Roland Steiner, Rune F. Halvorsen, Russell
   Bicknell, Ruud Steltenpool, Ryosuke Niwa, Sam Dutton, Sam Sneddon,
   Samuel Giles, Sanket Joshi, Scott Haseley, Sebastian Mayr, Seo
   Sanghyeon, Sergey G. Grekhov, Shiki Okasaka, Shinya Kawanaka, Simon
   Pieters, Stef Busking, Steve Byrne, Stig Halvorsen, Tab Atkins,
   Takashi Sakamoto, Takayoshi Kochi, Theresa O’Connor, Theodore Dubois,
   *timeless*, Timo Tijhof, Tobie Langel, Tom Pixley, Travis Leithead,
   Trevor Rowbotham, *triple-underscore*, Tristan Fraipont, Veli Şenol,
   Vidur Apparao, Warren He, Xidorn Quan, Yash Handa, Yehuda Katz, Yoav
   Weiss, Yoichi Osato, Yoshinori Sano, Yu Han, Yusuke Abe, and Zack
   Weinberg for being awesome!

   This standard is written by `Anne van
   Kesteren <https://annevankesteren.nl/>`__
   (`Apple <https://www.apple.com/>`__, annevk@annevk.nl) with
   substantial contributions from Aryeh Gregor (ayg@aryeh.name) and
   Ms2ger (ms2ger@gmail.com).


/Intellectual property rights
=============================

   .. .. rubric:: Intellectual property rights ` <#ipr>`__
      :name: ipr
      :class: no-num heading settled

   .. container::

      Part of the revision history of the integration points related to
      `custom <#concept-element-custom>`__ elements can be found in `the
      w3c/webcomponents
      repository <https://github.com/w3c/webcomponents>`__, which is
      available under the `W3C Software and Document
      License <https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document>`__.

   Copyright © WHATWG (Apple, Google, Mozilla, Microsoft). This work is
   licensed under a `Creative Commons Attribution 4.0 International
   License <https://creativecommons.org/licenses/by/4.0/>`__. To the
   extent portions of it are incorporated into source code, such
   portions in the source code are licensed under the `BSD 3-Clause
   License <https://opensource.org/licenses/BSD-3-Clause>`__ instead.

   This is the Living Standard. Those interested in the patent-review
   version should view the `Living Standard Review
   Draft </review-drafts/2023-12/>`__.

Index ` <#index>`__
--------------------

.. _index-defined-here:

Terms defined by this specification ` <#index-defined-here>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  `abort <#eventdef-abortsignal-abort>`__\ , in § 3.2
-  abort()

   -  `method for AbortController <#dom-abortcontroller-abort>`__\ , in
      § 3.1
   -  `method for AbortSignal <#dom-abortsignal-abort>`__\ , in § 3.2

-  `abort algorithms <#abortsignal-abort-algorithms>`__\ , in § 3.2
-  `AbortController <#abortcontroller>`__\ , in § 3.1
-  `AbortController() <#dom-abortcontroller-abortcontroller>`__\ , in
   § 3.1
-  aborted

   -  `attribute for AbortSignal <#dom-abortsignal-aborted>`__\ , in
      § 3.2
   -  `dfn for AbortSignal <#abortsignal-aborted>`__\ , in § 3.2

-  `abort reason <#abortsignal-abort-reason>`__\ , in § 3.2
-  abort(reason)

   -  `method for AbortController <#dom-abortcontroller-abort>`__\ , in
      § 3.1
   -  `method for AbortSignal <#dom-abortsignal-abort>`__\ , in § 3.2

-  `AbortSignal <#abortsignal>`__\ , in § 3.2
-  `AbstractRange <#abstractrange>`__\ , in § 5.3
-  `acceptNode(node) <#dom-nodefilter-acceptnode>`__\ , in § 6.3
-  `activation behavior <#eventtarget-activation-behavior>`__\ , in
   § 2.7
-  `active flag <#concept-traversal-active>`__\ , in § 6
-  `add <#abortsignal-add>`__\ , in § 3.2
-  `add() <#dom-domtokenlist-add>`__\ , in § 7.1
-  `add an event listener <#add-an-event-listener>`__\ , in § 2.7
-  `addedNodes <#dom-mutationrecord-addednodes>`__\ , in § 4.3.3
-  `AddEventListenerOptions <#dictdef-addeventlisteneroptions>`__\ , in
   § 2.7
-  `addEventListener(type,
   callback) <#dom-eventtarget-addeventlistener>`__\ , in § 2.7
-  `addEventListener(type, callback,
   options) <#dom-eventtarget-addeventlistener>`__\ , in § 2.7
-  `add(...tokens) <#dom-domtokenlist-add>`__\ , in § 7.1
-  `add(tokens) <#dom-domtokenlist-add>`__\ , in § 7.1
-  `adopt <#concept-node-adopt>`__\ , in § 4.5
-  `adopting steps <#concept-node-adopt-ext>`__\ , in § 4.5
-  `adoptNode(node) <#dom-document-adoptnode>`__\ , in § 4.5
-  `after <#concept-range-bp-after>`__\ , in § 5.2
-  `after() <#dom-childnode-after>`__\ , in § 4.2.8
-  `after(...nodes) <#dom-childnode-after>`__\ , in § 4.2.8
-  `allow declarative shadow
   roots <#document-allow-declarative-shadow-roots>`__\ , in § 4.5
-  `ancestor <#concept-tree-ancestor>`__\ , in § 1.1
-  `any(signals) <#dom-abortsignal-any>`__\ , in § 3.2
-  `ANY_TYPE <#dom-xpathresult-any_type>`__\ , in § 8.1
-  `ANY_UNORDERED_NODE_TYPE <#dom-xpathresult-any_unordered_node_type>`__\ ,
   in § 8.1
-  `append <#concept-node-append>`__\ , in § 4.2.3
-  `append() <#dom-parentnode-append>`__\ , in § 4.2.6
-  `append an attribute <#concept-element-attributes-append>`__\ , in
   § 4.9
-  `appendChild(node) <#dom-node-appendchild>`__\ , in § 4.4
-  `appendData(data) <#dom-characterdata-appenddata>`__\ , in § 4.10
-  `append(...nodes) <#dom-parentnode-append>`__\ , in § 4.2.6
-  `append to an event path <#concept-event-path-append>`__\ , in § 2.9
-  `assign a slot <#assign-a-slot>`__\ , in § 4.2.2.4
-  `assigned <#slotable-assigned>`__\ , in § 4.2.2.2
-  `assigned nodes <#slot-assigned-nodes>`__\ , in § 4.2.2.1
-  `assigned slot <#slotable-assigned-slot>`__\ , in § 4.2.2.2
-  `assignedSlot <#dom-slotable-assignedslot>`__\ , in § 4.2.9
-  `assign slottables <#assign-slotables>`__\ , in § 4.2.2.4
-  `assign slottables for a tree <#assign-slotables-for-a-tree>`__\ , in
   § 4.2.2.4
-  `attach a shadow root <#concept-attach-a-shadow-root>`__\ , in § 4.9
-  `attachShadow(init) <#dom-element-attachshadow>`__\ , in § 4.9
-  `AT_TARGET <#dom-event-at_target>`__\ , in § 2.2
-  `Attr <#attr>`__\ , in § 4.9.2
-  `attribute <#concept-attribute>`__\ , in § 4.9.2
-  `attribute change
   steps <#concept-element-attributes-change-ext>`__\ , in § 4.9
-  `attributeFilter <#dom-mutationobserverinit-attributefilter>`__\ , in
   § 4.3.1
-  attribute list

   -  `dfn for Element <#concept-element-attribute>`__\ , in § 4.9
   -  `dfn for NamedNodeMap <#concept-namednodemap-attribute>`__\ , in
      § 4.9.1

-  `attributeName <#dom-mutationrecord-attributename>`__\ , in § 4.3.3
-  `attributeNamespace <#dom-mutationrecord-attributenamespace>`__\ , in
   § 4.3.3
-  `ATTRIBUTE_NODE <#dom-node-attribute_node>`__\ , in § 4.4
-  `attributeOldValue <#dom-mutationobserverinit-attributeoldvalue>`__\ ,
   in § 4.3.1
-  attributes

   -  `attribute for Element <#dom-element-attributes>`__\ , in § 4.9
   -  `dict-member for
      MutationObserverInit <#dom-mutationobserverinit-attributes>`__\ ,
      in § 4.3.1

-  `available to element
   internals <#shadowroot-available-to-element-internals>`__\ , in § 4.8
-  `baseURI <#dom-node-baseuri>`__\ , in § 4.4
-  `before <#concept-range-bp-before>`__\ , in § 5.2
-  `before() <#dom-childnode-before>`__\ , in § 4.2.8
-  `before(...nodes) <#dom-childnode-before>`__\ , in § 4.2.8
-  `BOOLEAN_TYPE <#dom-xpathresult-boolean_type>`__\ , in § 8.1
-  `booleanValue <#dom-xpathresult-booleanvalue>`__\ , in § 8.1
-  `boundary point <#concept-range-bp>`__\ , in § 5.2
-  bubbles

   -  `attribute for Event <#dom-event-bubbles>`__\ , in § 2.2
   -  `dict-member for EventInit <#dom-eventinit-bubbles>`__\ , in § 2.2

-  `BUBBLING_PHASE <#dom-event-bubbling_phase>`__\ , in § 2.2
-  callback

   -  `dfn for MutationObserver <#concept-mo-callback>`__\ , in § 4.3.1
   -  `dfn for event listener <#event-listener-callback>`__\ , in § 2.7

-  cancelable

   -  `attribute for Event <#dom-event-cancelable>`__\ , in § 2.2
   -  `dict-member for EventInit <#dom-eventinit-cancelable>`__\ , in
      § 2.2

-  `cancelBubble <#dom-event-cancelbubble>`__\ , in § 2.2
-  `canceled flag <#canceled-flag>`__\ , in § 2.2
-  capture

   -  `dfn for event listener <#event-listener-capture>`__\ , in § 2.7
   -  `dict-member for
      EventListenerOptions <#dom-eventlisteneroptions-capture>`__\ , in
      § 2.7

-  `CAPTURING_PHASE <#dom-event-capturing_phase>`__\ , in § 2.2
-  `CDATASection <#cdatasection>`__\ , in § 4.12
-  `CDATA_SECTION_NODE <#dom-node-cdata_section_node>`__\ , in § 4.4
-  `change an attribute <#concept-element-attributes-change>`__\ , in
   § 4.9
-  `CharacterData <#characterdata>`__\ , in § 4.10
-  `characterData <#dom-mutationobserverinit-characterdata>`__\ , in
   § 4.3.1
-  `characterDataOldValue <#dom-mutationobserverinit-characterdataoldvalue>`__\ ,
   in § 4.3.1
-  `characterSet <#dom-document-characterset>`__\ , in § 4.5
-  `charset <#dom-document-charset>`__\ , in § 4.5
-  `child <#concept-tree-child>`__\ , in § 1.1
-  `childElementCount <#dom-parentnode-childelementcount>`__\ , in
   § 4.2.6
-  `childList <#dom-mutationobserverinit-childlist>`__\ , in § 4.3.1
-  `ChildNode <#childnode>`__\ , in § 4.2.8
-  `childNodes <#dom-node-childnodes>`__\ , in § 4.4
-  children

   -  `attribute for ParentNode <#dom-parentnode-children>`__\ , in
      § 4.2.6
   -  `dfn for tree <#concept-tree-child>`__\ , in § 1.1

-  `children changed steps <#concept-node-children-changed-ext>`__\ , in
   § 4.2.3
-  `child text content <#concept-child-text-content>`__\ , in § 4.11
-  `class <#concept-class>`__\ , in § 4.9
-  `classList <#dom-element-classlist>`__\ , in § 4.9
-  `className <#dom-element-classname>`__\ , in § 4.9
-  `clearParameters() <#dom-xsltprocessor-clearparameters>`__\ , in
   § 9.1
-  clonable

   -  `attribute for ShadowRoot <#dom-shadowroot-clonable>`__\ , in
      § 4.8
   -  `dfn for ShadowRoot <#shadowroot-clonable>`__\ , in § 4.8
   -  `dict-member for
      ShadowRootInit <#dom-shadowrootinit-clonable>`__\ , in § 4.9

-  `clone <#concept-node-clone>`__\ , in § 4.4
-  `clone a node <#concept-node-clone>`__\ , in § 4.4
-  `cloneContents() <#dom-range-clonecontents>`__\ , in § 5.5
-  `cloneNode() <#dom-node-clonenode>`__\ , in § 4.4
-  `cloneNode(deep) <#dom-node-clonenode>`__\ , in § 4.4
-  `cloneRange() <#dom-range-clonerange>`__\ , in § 5.5
-  `clone the contents <#concept-range-clone>`__\ , in § 5.5
-  `cloning steps <#concept-node-clone-ext>`__\ , in § 4.4
-  `cloning the contents <#concept-range-clone>`__\ , in § 5.5
-  `"closed" <#dom-shadowrootmode-closed>`__\ , in § 4.8
-  `closed-shadow-hidden <#concept-closed-shadow-hidden>`__\ , in § 4.8
-  `closest(selectors) <#dom-element-closest>`__\ , in § 4.9
-  `collapse() <#dom-range-collapse>`__\ , in § 5.5
-  collapsed

   -  `attribute for AbstractRange <#dom-range-collapsed>`__\ , in § 5.3
   -  `dfn for range <#range-collapsed>`__\ , in § 5.3

-  `collapse(toStart) <#dom-range-collapse>`__\ , in § 5.5
-  `collection <#concept-collection>`__\ , in § 4.2.10
-  `Comment <#comment>`__\ , in § 4.14
-  `Comment() <#dom-comment-comment>`__\ , in § 4.14
-  `Comment(data) <#dom-comment-comment>`__\ , in § 4.14
-  `COMMENT_NODE <#dom-node-comment_node>`__\ , in § 4.4
-  `commonAncestorContainer <#dom-range-commonancestorcontainer>`__\ ,
   in § 5.5
-  `compareBoundaryPoints(how,
   sourceRange) <#dom-range-compareboundarypoints>`__\ , in § 5.5
-  `compareDocumentPosition(other) <#dom-node-comparedocumentposition>`__\ ,
   in § 4.4
-  `comparePoint(node, offset) <#dom-range-comparepoint>`__\ , in § 5.5
-  `compatMode <#dom-document-compatmode>`__\ , in § 4.5
-  composed

   -  `attribute for Event <#dom-event-composed>`__\ , in § 2.2
   -  `dict-member for EventInit <#dom-eventinit-composed>`__\ , in
      § 2.2
   -  `dict-member for
      GetRootNodeOptions <#dom-getrootnodeoptions-composed>`__\ , in
      § 4.4

-  `composed flag <#composed-flag>`__\ , in § 2.2
-  `composedPath() <#dom-event-composedpath>`__\ , in § 2.2
-  `connected <#connected>`__\ , in § 4.2.2
-  `constructor <#concept-event-constructor>`__\ , in § 2.5
-  constructor()

   -  `constructor for
      AbortController <#dom-abortcontroller-abortcontroller>`__\ , in
      § 3.1
   -  `constructor for Comment <#dom-comment-comment>`__\ , in § 4.14
   -  `constructor for Document <#dom-document-document>`__\ , in § 4.5
   -  `constructor for
      DocumentFragment <#dom-documentfragment-documentfragment>`__\ , in
      § 4.7
   -  `constructor for EventTarget <#dom-eventtarget-eventtarget>`__\ ,
      in § 2.7
   -  `constructor for Range <#dom-range-range>`__\ , in § 5.5
   -  `constructor for Text <#dom-text-text>`__\ , in § 4.11
   -  `constructor for
      XPathEvaluator <#dom-xpathevaluator-xpathevaluator>`__\ , in § 8.4
   -  `constructor for
      XSLTProcessor <#dom-xsltprocessor-xsltprocessor>`__\ , in § 9.1

-  `constructor(callback) <#dom-mutationobserver-mutationobserver>`__\ ,
   in § 4.3.1
-  constructor(data)

   -  `constructor for Comment <#dom-comment-comment>`__\ , in § 4.14
   -  `constructor for Text <#dom-text-text>`__\ , in § 4.11

-  `constructor(init) <#dom-staticrange-staticrange>`__\ , in § 5.4
-  constructor(type)

   -  `constructor for CustomEvent <#dom-customevent-customevent>`__\ ,
      in § 2.4
   -  `constructor for Event <#dom-event-event>`__\ , in § 2.2

-  constructor(type, eventInitDict)

   -  `constructor for CustomEvent <#dom-customevent-customevent>`__\ ,
      in § 2.4
   -  `constructor for Event <#dom-event-event>`__\ , in § 2.2

-  `contained <#contained>`__\ , in § 5.5
-  `contains(other) <#dom-node-contains>`__\ , in § 4.4
-  `contains(token) <#dom-domtokenlist-contains>`__\ , in § 7.1
-  `content type <#concept-document-content-type>`__\ , in § 4.5
-  `contentType <#dom-document-contenttype>`__\ , in § 4.5
-  `contiguous exclusive Text
   nodes <#contiguous-exclusive-text-nodes>`__\ , in § 4.11
-  `contiguous Text nodes <#contiguous-text-nodes>`__\ , in § 4.11
-  `converting nodes into a node <#converting-nodes-into-a-node>`__\ ,
   in § 4.2.6
-  `create a dependent abort
   signal <#create-a-dependent-abort-signal>`__\ , in § 3.2
-  `create an element <#concept-create-element>`__\ , in § 4.9
-  `create an event <#concept-event-create>`__\ , in § 2.5
-  `createAttribute(localName) <#dom-document-createattribute>`__\ , in
   § 4.5
-  `createAttributeNS(namespace,
   qualifiedName) <#dom-document-createattributens>`__\ , in § 4.5
-  `createCDATASection(data) <#dom-document-createcdatasection>`__\ , in
   § 4.5
-  `createComment(data) <#dom-document-createcomment>`__\ , in § 4.5
-  `createDocumentFragment() <#dom-document-createdocumentfragment>`__\ ,
   in § 4.5
-  `createDocument(namespace,
   qualifiedName) <#dom-domimplementation-createdocument>`__\ , in
   § 4.5.1
-  `createDocument(namespace, qualifiedName,
   doctype) <#dom-domimplementation-createdocument>`__\ , in § 4.5.1
-  `createDocumentType(qualifiedName, publicId,
   systemId) <#dom-domimplementation-createdocumenttype>`__\ , in
   § 4.5.1
-  `createElement(localName) <#dom-document-createelement>`__\ , in
   § 4.5
-  `createElement(localName,
   options) <#dom-document-createelement>`__\ , in § 4.5
-  `createElementNS(namespace,
   qualifiedName) <#dom-document-createelementns>`__\ , in § 4.5
-  `createElementNS(namespace, qualifiedName,
   options) <#dom-document-createelementns>`__\ , in § 4.5
-  `createEntityReference() <#dom-document-createentityreference>`__\ ,
   in § 11
-  `createEvent(interface) <#dom-document-createevent>`__\ , in § 4.5
-  `createExpression(expression) <#dom-xpathevaluatorbase-createexpression>`__\ ,
   in § 8.3
-  `createExpression(expression,
   resolver) <#dom-xpathevaluatorbase-createexpression>`__\ , in § 8.3
-  `createHTMLDocument() <#dom-domimplementation-createhtmldocument>`__\ ,
   in § 4.5.1
-  `createHTMLDocument(title) <#dom-domimplementation-createhtmldocument>`__\ ,
   in § 4.5.1
-  `createNodeIterator(root) <#dom-document-createnodeiterator>`__\ , in
   § 4.5
-  `createNodeIterator(root,
   whatToShow) <#dom-document-createnodeiterator>`__\ , in § 4.5
-  `createNodeIterator(root, whatToShow,
   filter) <#dom-document-createnodeiterator>`__\ , in § 4.5
-  `createNSResolver(nodeResolver) <#dom-xpathevaluatorbase-creatensresolver>`__\ ,
   in § 8.3
-  `createProcessingInstruction(target,
   data) <#dom-document-createprocessinginstruction>`__\ , in § 4.5
-  `createRange() <#dom-document-createrange>`__\ , in § 4.5
-  `createTextNode(data) <#dom-document-createtextnode>`__\ , in § 4.5
-  `createTreeWalker(root) <#dom-document-createtreewalker>`__\ , in
   § 4.5
-  `createTreeWalker(root,
   whatToShow) <#dom-document-createtreewalker>`__\ , in § 4.5
-  `createTreeWalker(root, whatToShow,
   filter) <#dom-document-createtreewalker>`__\ , in § 4.5
-  `creating an element <#concept-create-element>`__\ , in § 4.9
-  `creating an event <#concept-event-create>`__\ , in § 2.5
-  `current <#treewalker-current>`__\ , in § 6.2
-  `current event <#window-current-event>`__\ , in § 2.3
-  `currentNode <#dom-treewalker-currentnode>`__\ , in § 6.2
-  `currentTarget <#dom-event-currenttarget>`__\ , in § 2.2
-  `custom <#concept-element-custom>`__\ , in § 4.9
-  `custom element
   definition <#concept-element-custom-element-definition>`__\ , in
   § 4.9
-  `custom element state <#concept-element-custom-element-state>`__\ ,
   in § 4.9
-  `CustomEvent <#customevent>`__\ , in § 2.4
-  `CustomEventInit <#dictdef-customeventinit>`__\ , in § 2.4
-  `CustomEvent(type) <#dom-customevent-customevent>`__\ , in § 2.4
-  `CustomEvent(type,
   eventInitDict) <#dom-customevent-customevent>`__\ , in § 2.4
-  data

   -  `attribute for CharacterData <#dom-characterdata-data>`__\ , in
      § 4.10
   -  `dfn for CharacterData <#concept-cd-data>`__\ , in § 4.10

-  `declarative <#shadowroot-declarative>`__\ , in § 4.8
-  `default passive value <#default-passive-value>`__\ , in § 2.7
-  `defaultPrevented <#dom-event-defaultprevented>`__\ , in § 2.2
-  `defined <#concept-element-defined>`__\ , in § 4.9
-  `delegates focus <#shadowroot-delegates-focus>`__\ , in § 4.8
-  delegatesFocus

   -  `attribute for ShadowRoot <#dom-shadowroot-delegatesfocus>`__\ ,
      in § 4.8
   -  `dict-member for
      ShadowRootInit <#dom-shadowrootinit-delegatesfocus>`__\ , in § 4.9

-  `deleteContents() <#dom-range-deletecontents>`__\ , in § 5.5
-  `deleteData(offset, count) <#dom-characterdata-deletedata>`__\ , in
   § 4.10
-  `dependent <#abortsignal-dependent>`__\ , in § 3.2
-  `dependent signals <#abortsignal-dependent-signals>`__\ , in § 3.2
-  `descendant <#concept-tree-descendant>`__\ , in § 1.1
-  `descendant text content <#concept-descendant-text-content>`__\ , in
   § 4.11
-  detach()

   -  `method for NodeIterator <#dom-nodeiterator-detach>`__\ , in § 6.1
   -  `method for Range <#dom-range-detach>`__\ , in § 5.5

-  detail

   -  `attribute for CustomEvent <#dom-customevent-detail>`__\ , in
      § 2.4
   -  `dict-member for
      CustomEventInit <#dom-customeventinit-detail>`__\ , in § 2.4

-  `disconnect() <#dom-mutationobserver-disconnect>`__\ , in § 4.3.1
-  `dispatch <#concept-event-dispatch>`__\ , in § 2.9
-  `dispatchEvent(event) <#dom-eventtarget-dispatchevent>`__\ , in § 2.7
-  `dispatch flag <#dispatch-flag>`__\ , in § 2.2
-  doctype

   -  `attribute for Document <#dom-document-doctype>`__\ , in § 4.5
   -  `definition of <#concept-doctype>`__\ , in § 4.6

-  `Document <#document>`__\ , in § 4.5
-  `document <#concept-document>`__\ , in § 4.5
-  `Document() <#dom-document-document>`__\ , in § 4.5
-  `document element <#document-element>`__\ , in § 4.2.1
-  `documentElement <#dom-document-documentelement>`__\ , in § 4.5
-  `DocumentFragment <#documentfragment>`__\ , in § 4.7
-  `DocumentFragment() <#dom-documentfragment-documentfragment>`__\ , in
   § 4.7
-  `DOCUMENT_FRAGMENT_NODE <#dom-node-document_fragment_node>`__\ , in
   § 4.4
-  `DOCUMENT_NODE <#dom-node-document_node>`__\ , in § 4.4
-  `DocumentOrShadowRoot <#documentorshadowroot>`__\ , in § 4.2.5
-  `DOCUMENT_POSITION_CONTAINED_BY <#dom-node-document_position_contained_by>`__\ ,
   in § 4.4
-  `DOCUMENT_POSITION_CONTAINS <#dom-node-document_position_contains>`__\ ,
   in § 4.4
-  `DOCUMENT_POSITION_DISCONNECTED <#dom-node-document_position_disconnected>`__\ ,
   in § 4.4
-  `DOCUMENT_POSITION_FOLLOWING <#dom-node-document_position_following>`__\ ,
   in § 4.4
-  `DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC <#dom-node-document_position_implementation_specific>`__\ ,
   in § 4.4
-  `DOCUMENT_POSITION_PRECEDING <#dom-node-document_position_preceding>`__\ ,
   in § 4.4
-  `document tree <#concept-document-tree>`__\ , in § 4.2.1
-  `DocumentType <#documenttype>`__\ , in § 4.6
-  `DOCUMENT_TYPE_NODE <#dom-node-document_type_node>`__\ , in § 4.4
-  `documentURI <#dom-document-documenturi>`__\ , in § 4.5
-  `domConfig <#dom-document-domconfig>`__\ , in § 11
-  `DOMConfiguration <#domconfiguration>`__\ , in § 11
-  `DOMError <#domerror>`__\ , in § 11
-  `DOMErrorHandler <#domerrorhandler>`__\ , in § 11
-  `DOMImplementation <#domimplementation>`__\ , in § 4.5.1
-  `DOMImplementationList <#domimplementationlist>`__\ , in § 11
-  `DOMImplementationSource <#domimplementationsource>`__\ , in § 11
-  `DOMLocator <#domlocator>`__\ , in § 11
-  `DOMObject <#domobject>`__\ , in § 11
-  `DOMTokenList <#domtokenlist>`__\ , in § 7.1
-  `DOMUserData <#domuserdata>`__\ , in § 11
-  `Element <#element>`__\ , in § 4.9
-  element

   -  `definition of <#concept-element>`__\ , in § 4.9
   -  `dfn for Attr <#concept-attribute-element>`__\ , in § 4.9.2
   -  `dfn for NamedNodeMap <#concept-namednodemap-element>`__\ , in
      § 4.9.1

-  `ElementCreationOptions <#dictdef-elementcreationoptions>`__\ , in
   § 4.5
-  `element interface <#concept-element-interface>`__\ , in § 4.5
-  `ELEMENT_NODE <#dom-node-element_node>`__\ , in § 4.4
-  `empty <#concept-node-empty>`__\ , in § 4.2
-  `encoding <#concept-document-encoding>`__\ , in § 4.5
-  `end <#concept-range-end>`__\ , in § 5.3
-  endContainer

   -  `attribute for AbstractRange <#dom-range-endcontainer>`__\ , in
      § 5.3
   -  `dict-member for
      StaticRangeInit <#dom-staticrangeinit-endcontainer>`__\ , in § 5.4

-  `end node <#concept-range-end-node>`__\ , in § 5.3
-  `end offset <#concept-range-end-offset>`__\ , in § 5.3
-  endOffset

   -  `attribute for AbstractRange <#dom-range-endoffset>`__\ , in § 5.3
   -  `dict-member for
      StaticRangeInit <#dom-staticrangeinit-endoffset>`__\ , in § 5.4

-  `END_TO_END <#dom-range-end_to_end>`__\ , in § 5.5
-  `END_TO_START <#dom-range-end_to_start>`__\ , in § 5.5
-  `ensure pre-insertion
   validity <#concept-node-ensure-pre-insertion-validity>`__\ , in
   § 4.2.3
-  `entities <#dom-documenttype-entities>`__\ , in § 11
-  `Entity <#entity>`__\ , in § 11
-  `ENTITY_NODE <#dom-node-entity_node>`__\ , in § 4.4
-  `EntityReference <#entityreference>`__\ , in § 11
-  `ENTITY_REFERENCE_NODE <#dom-node-entity_reference_node>`__\ , in
   § 4.4
-  `equal <#concept-range-bp-equal>`__\ , in § 5.2
-  `equals <#concept-node-equals>`__\ , in § 4.4
-  `evaluate(contextNode) <#dom-xpathexpression-evaluate>`__\ , in § 8.2
-  `evaluate(contextNode, type) <#dom-xpathexpression-evaluate>`__\ , in
   § 8.2
-  `evaluate(contextNode, type,
   result) <#dom-xpathexpression-evaluate>`__\ , in § 8.2
-  `evaluate(expression,
   contextNode) <#dom-xpathevaluatorbase-evaluate>`__\ , in § 8.3
-  `evaluate(expression, contextNode,
   resolver) <#dom-xpathevaluatorbase-evaluate>`__\ , in § 8.3
-  `evaluate(expression, contextNode, resolver,
   type) <#dom-xpathevaluatorbase-evaluate>`__\ , in § 8.3
-  `evaluate(expression, contextNode, resolver, type,
   result) <#dom-xpathevaluatorbase-evaluate>`__\ , in § 8.3
-  `Event <#event>`__\ , in § 2.2
-  event

   -  `attribute for Window <#dom-window-event>`__\ , in § 2.3
   -  `definition of <#concept-event>`__\ , in § 2.2

-  `event constructing steps <#concept-event-constructor-ext>`__\ , in
   § 2.5
-  `EventInit <#dictdef-eventinit>`__\ , in § 2.2
-  `event listener <#concept-event-listener>`__\ , in § 2.7
-  `EventListener <#callbackdef-eventlistener>`__\ , in § 2.7
-  `event listener list <#eventtarget-event-listener-list>`__\ , in
   § 2.7
-  `EventListenerOptions <#dictdef-eventlisteneroptions>`__\ , in § 2.7
-  `eventPhase <#dom-event-eventphase>`__\ , in § 2.2
-  `EventTarget <#eventtarget>`__\ , in § 2.7
-  `EventTarget() <#dom-eventtarget-eventtarget>`__\ , in § 2.7
-  `Event(type) <#dom-event-event>`__\ , in § 2.2
-  `Event(type, eventInitDict) <#dom-event-event>`__\ , in § 2.2
-  `exclusive Text node <#exclusive-text-node>`__\ , in § 4.11
-  expandEntityReferences

   -  `attribute for
      NodeIterator <#dom-nodeiterator-expandentityreferences>`__\ , in
      § 11
   -  `attribute for
      TreeWalker <#dom-treewalker-expandentityreferences>`__\ , in § 11

-  `extract <#concept-range-extract>`__\ , in § 5.5
-  `extractContents() <#dom-range-extractcontents>`__\ , in § 5.5
-  filter

   -  `attribute for NodeIterator <#dom-nodeiterator-filter>`__\ , in
      § 6.1
   -  `attribute for TreeWalker <#dom-treewalker-filter>`__\ , in § 6.2
   -  `definition of <#concept-node-filter>`__\ , in § 6
   -  `dfn for traversal <#concept-traversal-filter>`__\ , in § 6

-  `FILTER_ACCEPT <#dom-nodefilter-filter_accept>`__\ , in § 6.3
-  `FILTER_REJECT <#dom-nodefilter-filter_reject>`__\ , in § 6.3
-  `FILTER_SKIP <#dom-nodefilter-filter_skip>`__\ , in § 6.3
-  `find a slot <#find-a-slot>`__\ , in § 4.2.2.3
-  `find flattened slottables <#find-flattened-slotables>`__\ , in
   § 4.2.2.3
-  `finding a slot <#find-a-slot>`__\ , in § 4.2.2.3
-  `finding flattened slottables <#find-flattened-slotables>`__\ , in
   § 4.2.2.3
-  `finding slottables <#find-slotables>`__\ , in § 4.2.2.3
-  `find slottables <#find-slotables>`__\ , in § 4.2.2.3
-  `fire an event <#concept-event-fire>`__\ , in § 2.10
-  `first child <#concept-tree-first-child>`__\ , in § 1.1
-  `firstChild <#dom-node-firstchild>`__\ , in § 4.4
-  `firstChild() <#dom-treewalker-firstchild>`__\ , in § 6.2
-  `firstElementChild <#dom-parentnode-firstelementchild>`__\ , in
   § 4.2.6
-  `FIRST_ORDERED_NODE_TYPE <#dom-xpathresult-first_ordered_node_type>`__\ ,
   in § 8.1
-  `flatten <#concept-flatten-options>`__\ , in § 2.7
-  `flatten more <#event-flatten-more>`__\ , in § 2.7
-  `following <#concept-tree-following>`__\ , in § 1.1
-  `get an attribute by
   name <#concept-element-attributes-get-by-name>`__\ , in § 4.9
-  `get an attribute by namespace and local
   name <#concept-element-attributes-get-by-namespace>`__\ , in § 4.9
-  `get an attribute value <#concept-element-attributes-get-value>`__\ ,
   in § 4.9
-  `getAttributeNames() <#dom-element-getattributenames>`__\ , in § 4.9
-  `getAttributeNodeNS(namespace,
   localName) <#dom-element-getattributenodens>`__\ , in § 4.9
-  `getAttributeNode(qualifiedName) <#dom-element-getattributenode>`__\ ,
   in § 4.9
-  `getAttributeNS(namespace,
   localName) <#dom-element-getattributens>`__\ , in § 4.9
-  `getAttribute(qualifiedName) <#dom-element-getattribute>`__\ , in
   § 4.9
-  `getElementById(elementId) <#dom-nonelementparentnode-getelementbyid>`__\ ,
   in § 4.2.4
-  getElementsByClassName(classNames)

   -  `method for Document <#dom-document-getelementsbyclassname>`__\ ,
      in § 4.5
   -  `method for Element <#dom-element-getelementsbyclassname>`__\ , in
      § 4.9

-  getElementsByTagNameNS(namespace, localName)

   -  `method for Document <#dom-document-getelementsbytagnamens>`__\ ,
      in § 4.5
   -  `method for Element <#dom-element-getelementsbytagnamens>`__\ , in
      § 4.9

-  getElementsByTagName(qualifiedName)

   -  `method for Document <#dom-document-getelementsbytagname>`__\ , in
      § 4.5
   -  `method for Element <#dom-element-getelementsbytagname>`__\ , in
      § 4.9

-  getFeature()

   -  `method for
      DOMImplementation <#dom-domimplementation-getfeature>`__\ , in
      § 11
   -  `method for Node <#dom-node-getfeature>`__\ , in § 11

-  `getNamedItemNS(namespace,
   localName) <#dom-namednodemap-getnameditemns>`__\ , in § 4.9.1
-  `getNamedItem(qualifiedName) <#dom-namednodemap-getnameditem>`__\ ,
   in § 4.9.1
-  `getParameter(namespaceURI,
   localName) <#dom-xsltprocessor-getparameter>`__\ , in § 9.1
-  `getRootNode() <#dom-node-getrootnode>`__\ , in § 4.4
-  `getRootNode(options) <#dom-node-getrootnode>`__\ , in § 4.4
-  `GetRootNodeOptions <#dictdef-getrootnodeoptions>`__\ , in § 4.4
-  `get text content <#get-text-content>`__\ , in § 4.4
-  `get the parent <#get-the-parent>`__\ , in § 2.7
-  `getUserData() <#dom-node-getuserdata>`__\ , in § 11
-  `handle attribute changes <#handle-attribute-changes>`__\ , in § 4.9
-  `handleEvent(event) <#dom-eventlistener-handleevent>`__\ , in § 2.7
-  `has an attribute <#concept-element-attribute-has>`__\ , in § 4.9
-  `hasAttributeNS(namespace,
   localName) <#dom-element-hasattributens>`__\ , in § 4.9
-  `hasAttribute(qualifiedName) <#dom-element-hasattribute>`__\ , in
   § 4.9
-  `hasAttributes() <#dom-element-hasattributes>`__\ , in § 4.9
-  `hasChildNodes() <#dom-node-haschildnodes>`__\ , in § 4.4
-  `hasFeature() <#dom-domimplementation-hasfeature>`__\ , in § 4.5.1
-  host

   -  `attribute for ShadowRoot <#dom-shadowroot-host>`__\ , in § 4.8
   -  `dfn for DocumentFragment <#concept-documentfragment-host>`__\ ,
      in § 4.7

-  `host-including inclusive
   ancestor <#concept-tree-host-including-inclusive-ancestor>`__\ , in
   § 4.7
-  `HTMLCollection <#htmlcollection>`__\ , in § 4.2.10.2
-  `HTML document <#html-document>`__\ , in § 4.5
-  `HTML-uppercased qualified
   name <#element-html-uppercased-qualified-name>`__\ , in § 4.9
-  `ID <#concept-id>`__\ , in § 4.9
-  `id <#dom-element-id>`__\ , in § 4.9
-  `implementation <#dom-document-implementation>`__\ , in § 4.5
-  `importNode(node) <#dom-document-importnode>`__\ , in § 4.5
-  `importNode(node, deep) <#dom-document-importnode>`__\ , in § 4.5
-  `importStylesheet(style) <#dom-xsltprocessor-importstylesheet>`__\ ,
   in § 9.1
-  `in a document <#in-a-document>`__\ , in § 4.2.1
-  `in a document tree <#in-a-document-tree>`__\ , in § 4.2.1
-  `inclusive ancestor <#concept-tree-inclusive-ancestor>`__\ , in § 1.1
-  `inclusive descendant <#concept-tree-inclusive-descendant>`__\ , in
   § 1.1
-  `inclusive sibling <#concept-tree-inclusive-sibling>`__\ , in § 1.1
-  `index <#concept-tree-index>`__\ , in § 1.1
-  `initCustomEvent(type) <#dom-customevent-initcustomevent>`__\ , in
   § 2.4
-  `initCustomEvent(type,
   bubbles) <#dom-customevent-initcustomevent>`__\ , in § 2.4
-  `initCustomEvent(type, bubbles,
   cancelable) <#dom-customevent-initcustomevent>`__\ , in § 2.4
-  `initCustomEvent(type, bubbles, cancelable,
   detail) <#dom-customevent-initcustomevent>`__\ , in § 2.4
-  `initEvent(type) <#dom-event-initevent>`__\ , in § 2.2
-  `initEvent(type, bubbles) <#dom-event-initevent>`__\ , in § 2.2
-  `initEvent(type, bubbles, cancelable) <#dom-event-initevent>`__\ , in
   § 2.2
-  `initialize <#concept-event-initialize>`__\ , in § 2.2
-  `initialized flag <#initialized-flag>`__\ , in § 2.2
-  `inner event creation steps <#inner-event-creation-steps>`__\ , in
   § 2.5
-  `inner invoke <#concept-event-listener-inner-invoke>`__\ , in § 2.9
-  `in passive listener flag <#in-passive-listener-flag>`__\ , in § 2.2
-  `inputEncoding <#dom-document-inputencoding>`__\ , in § 4.5
-  insert

   -  `definition of <#concept-node-insert>`__\ , in § 4.2.3
   -  `dfn for live range <#concept-range-insert>`__\ , in § 5.5

-  `insert adjacent <#insert-adjacent>`__\ , in § 4.9
-  `insertAdjacentElement(where,
   element) <#dom-element-insertadjacentelement>`__\ , in § 4.9
-  `insertAdjacentText(where,
   data) <#dom-element-insertadjacenttext>`__\ , in § 4.9
-  `insertBefore(node, child) <#dom-node-insertbefore>`__\ , in § 4.4
-  `insertData(offset, data) <#dom-characterdata-insertdata>`__\ , in
   § 4.10
-  `insertion steps <#concept-node-insert-ext>`__\ , in § 4.2.3
-  `insertNode(node) <#dom-range-insertnode>`__\ , in § 5.5
-  `internal createElementNS
   steps <#internal-createelementns-steps>`__\ , in § 4.5
-  `internalSubset <#dom-documenttype-internalsubset>`__\ , in § 11
-  `intersectsNode(node) <#dom-range-intersectsnode>`__\ , in § 5.5
-  `invalidIteratorState <#dom-xpathresult-invaliditeratorstate>`__\ ,
   in § 8.1
-  `invocation target <#event-path-invocation-target>`__\ , in § 2.2
-  `invocation-target-in-shadow-tree <#event-path-invocation-target-in-shadow-tree>`__\ ,
   in § 2.2
-  `invoke <#concept-event-listener-invoke>`__\ , in § 2.9
-  `is <#dom-elementcreationoptions-is>`__\ , in § 4.5
-  `isConnected <#dom-node-isconnected>`__\ , in § 4.4
-  `isDefaultNamespace(namespace) <#dom-node-isdefaultnamespace>`__\ ,
   in § 4.4
-  `isElementContentWhitespace <#dom-text-iselementcontentwhitespace>`__\ ,
   in § 11
-  `isEqualNode(otherNode) <#dom-node-isequalnode>`__\ , in § 4.4
-  `isId <#dom-attr-isid>`__\ , in § 11
-  `isPointInRange(node, offset) <#dom-range-ispointinrange>`__\ , in
   § 5.5
-  `isSameNode(otherNode) <#dom-node-issamenode>`__\ , in § 4.4
-  `isSupported <#dom-node-issupported>`__\ , in § 11
-  `isTrusted <#dom-event-istrusted>`__\ , in § 2.2
-  `is value <#concept-element-is-value>`__\ , in § 4.9
-  item(index)

   -  `method for DOMTokenList <#dom-domtokenlist-item>`__\ , in § 7.1
   -  `method for HTMLCollection <#dom-htmlcollection-item>`__\ , in
      § 4.2.10.2
   -  `method for NamedNodeMap <#dom-namednodemap-item>`__\ , in § 4.9.1
   -  `method for NodeList <#dom-nodelist-item>`__\ , in § 4.2.10.1

-  `iterateNext() <#dom-xpathresult-iteratenext>`__\ , in § 8.1
-  `iterator collection <#iterator-collection>`__\ , in § 6.1
-  `last child <#concept-tree-last-child>`__\ , in § 1.1
-  `lastChild <#dom-node-lastchild>`__\ , in § 4.4
-  `lastChild() <#dom-treewalker-lastchild>`__\ , in § 6.2
-  `lastElementChild <#dom-parentnode-lastelementchild>`__\ , in § 4.2.6
-  `legacy-canceled-activation
   behavior <#eventtarget-legacy-canceled-activation-behavior>`__\ , in
   § 2.7
-  `legacy-obtain service worker fetch event listener
   callbacks <#legacy-obtain-service-worker-fetch-event-listener-callbacks>`__\ ,
   in § 2.8
-  `legacy-pre-activation
   behavior <#eventtarget-legacy-pre-activation-behavior>`__\ , in § 2.7
-  length

   -  `attribute for CharacterData <#dom-characterdata-length>`__\ , in
      § 4.10
   -  `attribute for DOMTokenList <#dom-domtokenlist-length>`__\ , in
      § 7.1
   -  `attribute for HTMLCollection <#dom-htmlcollection-length>`__\ ,
      in § 4.2.10.2
   -  `attribute for NamedNodeMap <#dom-namednodemap-length>`__\ , in
      § 4.9.1
   -  `attribute for NodeList <#dom-nodelist-length>`__\ , in § 4.2.10.1
   -  `dfn for Node <#concept-node-length>`__\ , in § 4.2

-  `light tree <#concept-light-tree>`__\ , in § 4.2.2
-  `limited-quirks mode <#concept-document-limited-quirks>`__\ , in
   § 4.5
-  `list of elements with class names
   classNames <#concept-getelementsbyclassname>`__\ , in § 4.4
-  `list of elements with namespace namespace and local name
   localName <#concept-getelementsbytagnamens>`__\ , in § 4.4
-  `list of elements with qualified name
   qualifiedName <#concept-getelementsbytagname>`__\ , in § 4.4
-  `live <#concept-collection-live>`__\ , in § 4.2.10
-  `live collection <#concept-collection-live>`__\ , in § 4.2.10
-  `live ranges <#concept-live-range>`__\ , in § 5.5
-  local name

   -  `dfn for Attr <#concept-attribute-local-name>`__\ , in § 4.9.2
   -  `dfn for Element <#concept-element-local-name>`__\ , in § 4.9

-  localName

   -  `attribute for Attr <#dom-attr-localname>`__\ , in § 4.9.2
   -  `attribute for Element <#dom-element-localname>`__\ , in § 4.9

-  `locate a namespace <#locate-a-namespace>`__\ , in § 4.4
-  `locate a namespace prefix <#locate-a-namespace-prefix>`__\ , in
   § 4.4
-  `locating a namespace prefix <#locate-a-namespace-prefix>`__\ , in
   § 4.4
-  lookupNamespaceURI(prefix)

   -  `method for Node <#dom-node-lookupnamespaceuri>`__\ , in § 4.4
   -  `method for
      XPathNSResolver <#dom-xpathnsresolver-lookupnamespaceuri>`__\ , in
      § 8.3

-  `lookupPrefix(namespace) <#dom-node-lookupprefix>`__\ , in § 4.4
-  `"manual" <#dom-slotassignmentmode-manual>`__\ , in § 4.8
-  `manual slot assignment <#slottable-manual-slot-assignment>`__\ , in
   § 4.2.2.2
-  `matches(selectors) <#dom-element-matches>`__\ , in § 4.9
-  mode

   -  `attribute for ShadowRoot <#dom-shadowroot-mode>`__\ , in § 4.8
   -  `dfn for Document <#concept-document-mode>`__\ , in § 4.5
   -  `dfn for ShadowRoot <#shadowroot-mode>`__\ , in § 4.8
   -  `dict-member for ShadowRootInit <#dom-shadowrootinit-mode>`__\ ,
      in § 4.9

-  `MutationCallback <#callbackdef-mutationcallback>`__\ , in § 4.3.1
-  `MutationEvent <#mutationevent>`__\ , in § 11
-  `MutationNameEvent <#mutationnameevent>`__\ , in § 11
-  `MutationObserver <#mutationobserver>`__\ , in § 4.3.1
-  `MutationObserver(callback) <#dom-mutationobserver-mutationobserver>`__\ ,
   in § 4.3.1
-  `MutationObserverInit <#dictdef-mutationobserverinit>`__\ , in
   § 4.3.1
-  `mutation observer microtask
   queued <#mutation-observer-compound-microtask-queued-flag>`__\ , in
   § 4.3
-  `MutationRecord <#mutationrecord>`__\ , in § 4.3.3
-  name

   -  `attribute for Attr <#dom-attr-name>`__\ , in § 4.9.2
   -  `attribute for DocumentType <#dom-documenttype-name>`__\ , in
      § 4.6
   -  `dfn for DocumentType <#concept-doctype-name>`__\ , in § 4.6
   -  `dfn for slot <#slot-name>`__\ , in § 4.2.2.1
   -  `dfn for slottable <#slotable-name>`__\ , in § 4.2.2.2

-  `"named" <#dom-slotassignmentmode-named>`__\ , in § 4.8
-  `named attribute <#concept-named-attribute>`__\ , in § 4.9.2
-  `namedItem(key) <#dom-htmlcollection-nameditem-key>`__\ , in
   § 4.2.10.2
-  `namedItem(name) <#dom-htmlcollection-nameditem>`__\ , in § 4.2.10.2
-  `NamedNodeMap <#namednodemap>`__\ , in § 4.9.1
-  `NameList <#namelist>`__\ , in § 11
-  namespace

   -  `dfn for Attr <#concept-attribute-namespace>`__\ , in § 4.9.2
   -  `dfn for Element <#concept-element-namespace>`__\ , in § 4.9

-  namespace prefix

   -  `dfn for Attr <#concept-attribute-namespace-prefix>`__\ , in
      § 4.9.2
   -  `dfn for Element <#concept-element-namespace-prefix>`__\ , in
      § 4.9

-  namespaceURI

   -  `attribute for Attr <#dom-attr-namespaceuri>`__\ , in § 4.9.2
   -  `attribute for Element <#dom-element-namespaceuri>`__\ , in § 4.9

-  `nextElementSibling <#dom-nondocumenttypechildnode-nextelementsibling>`__\ ,
   in § 4.2.7
-  nextNode()

   -  `method for NodeIterator <#dom-nodeiterator-nextnode>`__\ , in
      § 6.1
   -  `method for TreeWalker <#dom-treewalker-nextnode>`__\ , in § 6.2

-  `next sibling <#concept-tree-next-sibling>`__\ , in § 1.1
-  nextSibling

   -  `attribute for
      MutationRecord <#dom-mutationrecord-nextsibling>`__\ , in § 4.3.3
   -  `attribute for Node <#dom-node-nextsibling>`__\ , in § 4.4

-  `nextSibling() <#dom-treewalker-nextsibling>`__\ , in § 6.2
-  `Node <#node>`__\ , in § 4.4
-  `node <#boundary-point-node>`__\ , in § 5.2
-  `node document <#concept-node-document>`__\ , in § 4.4
-  `NodeFilter <#callbackdef-nodefilter>`__\ , in § 6.3
-  `NodeIterator <#nodeiterator>`__\ , in § 6.1
-  `NodeIterator pre-removing
   steps <#nodeiterator-pre-removing-steps>`__\ , in § 6.1
-  `node list <#mutationobserver-node-list>`__\ , in § 4.3.1
-  `NodeList <#nodelist>`__\ , in § 4.2.10.1
-  `nodeName <#dom-node-nodename>`__\ , in § 4.4
-  `Nodes <#concept-node>`__\ , in § 4.2
-  `node tree <#concept-node-tree>`__\ , in § 4.2
-  `nodeType <#dom-node-nodetype>`__\ , in § 4.4
-  `nodeValue <#dom-node-nodevalue>`__\ , in § 4.4
-  `NonDocumentTypeChildNode <#nondocumenttypechildnode>`__\ , in
   § 4.2.7
-  `NONE <#dom-event-none>`__\ , in § 2.2
-  `NonElementParentNode <#nonelementparentnode>`__\ , in § 4.2.4
-  `no-quirks mode <#concept-document-no-quirks>`__\ , in § 4.5
-  `normalize() <#dom-node-normalize>`__\ , in § 4.4
-  `normalizeDocument() <#dom-document-normalizedocument>`__\ , in § 11
-  `Notation <#notation>`__\ , in § 11
-  `NOTATION_NODE <#dom-node-notation_node>`__\ , in § 4.4
-  `notations <#dom-documenttype-notations>`__\ , in § 11
-  `notify mutation observers <#notify-mutation-observers>`__\ , in
   § 4.3
-  `NUMBER_TYPE <#dom-xpathresult-number_type>`__\ , in § 8.1
-  `numberValue <#dom-xpathresult-numbervalue>`__\ , in § 8.1
-  `observer <#registered-observer-observer>`__\ , in § 4.3
-  `observe(target) <#dom-mutationobserver-observe>`__\ , in § 4.3.1
-  `observe(target, options) <#dom-mutationobserver-observe>`__\ , in
   § 4.3.1
-  `offset <#concept-range-bp-offset>`__\ , in § 5.2
-  `oldValue <#dom-mutationrecord-oldvalue>`__\ , in § 4.3.3
-  onabort

   -  `attribute for AbortSignal <#dom-abortsignal-onabort>`__\ , in
      § 3.2
   -  `dfn for AbortSignal <#abortsignal-onabort>`__\ , in § 3.2

-  once

   -  `dfn for event listener <#event-listener-once>`__\ , in § 2.7
   -  `dict-member for
      AddEventListenerOptions <#dom-addeventlisteneroptions-once>`__\ ,
      in § 2.7

-  onslotchange

   -  `attribute for ShadowRoot <#dom-shadowroot-onslotchange>`__\ , in
      § 4.8
   -  `dfn for ShadowRoot <#shadowroot-onslotchange>`__\ , in § 4.8

-  `"open" <#dom-shadowrootmode-open>`__\ , in § 4.8
-  `options <#registered-observer-options>`__\ , in § 4.3
-  `ORDERED_NODE_ITERATOR_TYPE <#dom-xpathresult-ordered_node_iterator_type>`__\ ,
   in § 8.1
-  `ORDERED_NODE_SNAPSHOT_TYPE <#dom-xpathresult-ordered_node_snapshot_type>`__\ ,
   in § 8.1
-  `ordered set parser <#concept-ordered-set-parser>`__\ , in § 1.2
-  `ordered set serializer <#concept-ordered-set-serializer>`__\ , in
   § 1.2
-  `origin <#concept-document-origin>`__\ , in § 4.5
-  `other applicable
   specifications <#other-applicable-specifications>`__\ , in § 1
-  `ownerDocument <#dom-node-ownerdocument>`__\ , in § 4.4
-  `ownerElement <#dom-attr-ownerelement>`__\ , in § 4.9.2
-  `parent <#concept-tree-parent>`__\ , in § 1.1
-  `parent element <#parent-element>`__\ , in § 4.9
-  `parentElement <#dom-node-parentelement>`__\ , in § 4.4
-  `ParentNode <#parentnode>`__\ , in § 4.2.6
-  `parentNode <#dom-node-parentnode>`__\ , in § 4.4
-  `parentNode() <#dom-treewalker-parentnode>`__\ , in § 6.2
-  `partially contained <#partially-contained>`__\ , in § 5.5
-  `participate <#concept-tree-participate>`__\ , in § 1.1
-  `participate in a tree <#concept-tree-participate>`__\ , in § 1.1
-  `participates in a tree <#concept-tree-participate>`__\ , in § 1.1
-  passive

   -  `dfn for event listener <#event-listener-passive>`__\ , in § 2.7
   -  `dict-member for
      AddEventListenerOptions <#dom-addeventlisteneroptions-passive>`__\ ,
      in § 2.7

-  `path <#event-path>`__\ , in § 2.2
-  `pending mutation observers <#mutation-observer-list>`__\ , in § 4.3
-  `pointer before
   reference <#nodeiterator-pointer-before-reference>`__\ , in § 6.1
-  `pointerBeforeReferenceNode <#dom-nodeiterator-pointerbeforereferencenode>`__\ ,
   in § 6.1
-  `position <#concept-range-bp-position>`__\ , in § 5.2
-  `potential event target <#potential-event-target>`__\ , in § 2.2
-  `preceding <#concept-tree-preceding>`__\ , in § 1.1
-  prefix

   -  `attribute for Attr <#dom-attr-prefix>`__\ , in § 4.9.2
   -  `attribute for Element <#dom-element-prefix>`__\ , in § 4.9

-  `pre-insert <#concept-node-pre-insert>`__\ , in § 4.2.3
-  `prepend() <#dom-parentnode-prepend>`__\ , in § 4.2.6
-  `prepend(...nodes) <#dom-parentnode-prepend>`__\ , in § 4.2.6
-  `pre-remove <#concept-node-pre-remove>`__\ , in § 4.2.3
-  `preventDefault() <#dom-event-preventdefault>`__\ , in § 2.2
-  `previousElementSibling <#dom-nondocumenttypechildnode-previouselementsibling>`__\ ,
   in § 4.2.7
-  previousNode()

   -  `method for NodeIterator <#dom-nodeiterator-previousnode>`__\ , in
      § 6.1
   -  `method for TreeWalker <#dom-treewalker-previousnode>`__\ , in
      § 6.2

-  `previous sibling <#concept-tree-previous-sibling>`__\ , in § 1.1
-  previousSibling

   -  `attribute for
      MutationRecord <#dom-mutationrecord-previoussibling>`__\ , in
      § 4.3.3
   -  `attribute for Node <#dom-node-previoussibling>`__\ , in § 4.4

-  `previousSibling() <#dom-treewalker-previoussibling>`__\ , in § 6.2
-  `ProcessingInstruction <#processinginstruction>`__\ , in § 4.13
-  `PROCESSING_INSTRUCTION_NODE <#dom-node-processing_instruction_node>`__\ ,
   in § 4.4
-  `public ID <#concept-doctype-publicid>`__\ , in § 4.6
-  `publicId <#dom-documenttype-publicid>`__\ , in § 4.6
-  qualified name

   -  `dfn for Attr <#concept-attribute-qualified-name>`__\ , in § 4.9.2
   -  `dfn for Element <#concept-element-qualified-name>`__\ , in § 4.9

-  `querySelectorAll(selectors) <#dom-parentnode-queryselectorall>`__\ ,
   in § 4.2.6
-  `querySelector(selectors) <#dom-parentnode-queryselector>`__\ , in
   § 4.2.6
-  `queue a mutation observer
   microtask <#queue-a-mutation-observer-compound-microtask>`__\ , in
   § 4.3
-  `queue a mutation record <#queue-a-mutation-record>`__\ , in § 4.3.2
-  `queue a tree mutation record <#queue-a-tree-mutation-record>`__\ ,
   in § 4.3.2
-  `quirks mode <#concept-document-quirks>`__\ , in § 4.5
-  `Range <#range>`__\ , in § 5.5
-  `range <#concept-range>`__\ , in § 5.3
-  `Range() <#dom-range-range>`__\ , in § 5.5
-  `RangeException <#rangeexception>`__\ , in § 11
-  `reason <#dom-abortsignal-reason>`__\ , in § 3.2
-  `record queue <#concept-mo-queue>`__\ , in § 4.3.1
-  `reference <#nodeiterator-reference>`__\ , in § 6.1
-  `referenceNode <#dom-nodeiterator-referencenode>`__\ , in § 6.1
-  `reflect <#concept-reflect>`__\ , in § 4.9
-  `registered observer <#registered-observer>`__\ , in § 4.3
-  `registered observer list <#registered-observer-list>`__\ , in § 4.3
-  relatedTarget

   -  `dfn for Event <#event-relatedtarget>`__\ , in § 2.2
   -  `dfn for Event/path <#event-path-relatedtarget>`__\ , in § 2.2

-  remove

   -  `definition of <#concept-node-remove>`__\ , in § 4.2.3
   -  `dfn for AbortSignal <#abortsignal-remove>`__\ , in § 3.2

-  remove()

   -  `method for ChildNode <#dom-childnode-remove>`__\ , in § 4.2.8
   -  `method for DOMTokenList <#dom-domtokenlist-remove>`__\ , in § 7.1

-  `remove all event listeners <#remove-all-event-listeners>`__\ , in
   § 2.7
-  `remove an attribute <#concept-element-attributes-remove>`__\ , in
   § 4.9
-  `remove an attribute by
   name <#concept-element-attributes-remove-by-name>`__\ , in § 4.9
-  `remove an attribute by namespace and local
   name <#concept-element-attributes-remove-by-namespace>`__\ , in § 4.9
-  `remove an event listener <#remove-an-event-listener>`__\ , in § 2.7
-  `removeAttributeNode(attr) <#dom-element-removeattributenode>`__\ ,
   in § 4.9
-  `removeAttributeNS(namespace,
   localName) <#dom-element-removeattributens>`__\ , in § 4.9
-  `removeAttribute(qualifiedName) <#dom-element-removeattribute>`__\ ,
   in § 4.9
-  `removeChild(child) <#dom-node-removechild>`__\ , in § 4.4
-  `removed <#event-listener-removed>`__\ , in § 2.7
-  `removedNodes <#dom-mutationrecord-removednodes>`__\ , in § 4.3.3
-  `removeEventListener(type,
   callback) <#dom-eventtarget-removeeventlistener>`__\ , in § 2.7
-  `removeEventListener(type, callback,
   options) <#dom-eventtarget-removeeventlistener>`__\ , in § 2.7
-  `removeNamedItemNS(namespace,
   localName) <#dom-namednodemap-removenameditemns>`__\ , in § 4.9.1
-  `removeNamedItem(qualifiedName) <#dom-namednodemap-removenameditem>`__\ ,
   in § 4.9.1
-  `removeParameter(namespaceURI,
   localName) <#dom-xsltprocessor-removeparameter>`__\ , in § 9.1
-  `remove(...tokens) <#dom-domtokenlist-remove>`__\ , in § 7.1
-  `remove(tokens) <#dom-domtokenlist-remove>`__\ , in § 7.1
-  `removing steps <#concept-node-remove-ext>`__\ , in § 4.2.3
-  `renameNode() <#dom-document-renamenode>`__\ , in § 11
-  `replace <#concept-node-replace>`__\ , in § 4.2.3
-  `replace all <#concept-node-replace-all>`__\ , in § 4.2.3
-  `replace an attribute <#concept-element-attributes-replace>`__\ , in
   § 4.9
-  `replaceChild(node, child) <#dom-node-replacechild>`__\ , in § 4.4
-  `replaceChildren() <#dom-parentnode-replacechildren>`__\ , in § 4.2.6
-  `replaceChildren(...nodes) <#dom-parentnode-replacechildren>`__\ , in
   § 4.2.6
-  `replace data <#concept-cd-replace>`__\ , in § 4.10
-  `replaceData(offset, count,
   data) <#dom-characterdata-replacedata>`__\ , in § 4.10
-  `replace(token, newToken) <#dom-domtokenlist-replace>`__\ , in § 7.1
-  `replaceWholeText() <#dom-text-replacewholetext>`__\ , in § 11
-  `replaceWith() <#dom-childnode-replacewith>`__\ , in § 4.2.8
-  `replaceWith(...nodes) <#dom-childnode-replacewith>`__\ , in § 4.2.8
-  `represented by the collection <#represented-by-the-collection>`__\ ,
   in § 4.2.10
-  `reset() <#dom-xsltprocessor-reset>`__\ , in § 9.1
-  `resultType <#dom-xpathresult-resulttype>`__\ , in § 8.1
-  `retarget <#retarget>`__\ , in § 4.8
-  `retargeting <#retarget>`__\ , in § 4.8
-  `returnValue <#dom-event-returnvalue>`__\ , in § 2.2
-  root

   -  `attribute for NodeIterator <#dom-nodeiterator-root>`__\ , in
      § 6.1
   -  `attribute for TreeWalker <#dom-treewalker-root>`__\ , in § 6.2
   -  `dfn for live range <#concept-range-root>`__\ , in § 5.5
   -  `dfn for traversal <#concept-traversal-root>`__\ , in § 6
   -  `dfn for tree <#concept-tree-root>`__\ , in § 1.1

-  `root-of-closed-tree <#event-path-root-of-closed-tree>`__\ , in § 2.2
-  schemaTypeInfo

   -  `attribute for Attr <#dom-attr-schematypeinfo>`__\ , in § 11
   -  `attribute for Element <#dom-element-schematypeinfo>`__\ , in § 11

-  `scope-match a selectors
   string <#scope-match-a-selectors-string>`__\ , in § 1.3
-  `select <#concept-range-select>`__\ , in § 5.5
-  `selectNodeContents(node) <#dom-range-selectnodecontents>`__\ , in
   § 5.5
-  `selectNode(node) <#dom-range-selectnode>`__\ , in § 5.5
-  serializable

   -  `attribute for ShadowRoot <#dom-shadowroot-serializable>`__\ , in
      § 4.8
   -  `dfn for ShadowRoot <#shadowroot-serializable>`__\ , in § 4.8
   -  `dict-member for
      ShadowRootInit <#dom-shadowrootinit-serializable>`__\ , in § 4.9

-  `serialize steps <#concept-dtl-serialize>`__\ , in § 7.1
-  `set an attribute <#concept-element-attributes-set>`__\ , in § 4.9
-  `set an attribute value <#concept-element-attributes-set-value>`__\ ,
   in § 4.9
-  `set an existing attribute
   value <#set-an-existing-attribute-value>`__\ , in § 4.9.2
-  `setAttributeNode(attr) <#dom-element-setattributenode>`__\ , in
   § 4.9
-  `setAttributeNodeNS(attr) <#dom-element-setattributenodens>`__\ , in
   § 4.9
-  `setAttributeNS(namespace, qualifiedName,
   value) <#dom-element-setattributens>`__\ , in § 4.9
-  `setAttribute(qualifiedName, value) <#dom-element-setattribute>`__\ ,
   in § 4.9
-  `setEndAfter(node) <#dom-range-setendafter>`__\ , in § 5.5
-  `setEndBefore(node) <#dom-range-setendbefore>`__\ , in § 5.5
-  `setEnd(node, offset) <#dom-range-setend>`__\ , in § 5.5
-  `setIdAttribute() <#dom-element-setidattribute>`__\ , in § 11
-  `setIdAttributeNode() <#dom-element-setidattributenode>`__\ , in § 11
-  `setIdAttributeNS() <#dom-element-setidattributens>`__\ , in § 11
-  `setNamedItem(attr) <#dom-namednodemap-setnameditem>`__\ , in § 4.9.1
-  `setNamedItemNS(attr) <#dom-namednodemap-setnameditemns>`__\ , in
   § 4.9.1
-  `setParameter(namespaceURI, localName,
   value) <#dom-xsltprocessor-setparameter>`__\ , in § 9.1
-  `setStartAfter(node) <#dom-range-setstartafter>`__\ , in § 5.5
-  `setStartBefore(node) <#dom-range-setstartbefore>`__\ , in § 5.5
-  `setStart(node, offset) <#dom-range-setstart>`__\ , in § 5.5
-  `set text content <#set-text-content>`__\ , in § 4.4
-  `set the canceled flag <#set-the-canceled-flag>`__\ , in § 2.2
-  `set the end <#concept-range-bp-set>`__\ , in § 5.5
-  `set the start <#concept-range-bp-set>`__\ , in § 5.5
-  `setUserData() <#dom-node-setuserdata>`__\ , in § 11
-  `shadow-adjusted target <#event-path-shadow-adjusted-target>`__\ , in
   § 2.2
-  `shadow host <#element-shadow-host>`__\ , in § 4.9
-  `shadow-including ancestor <#concept-shadow-including-ancestor>`__\ ,
   in § 4.8
-  `shadow-including
   descendant <#concept-shadow-including-descendant>`__\ , in § 4.8
-  `shadow-including inclusive
   ancestor <#concept-shadow-including-inclusive-ancestor>`__\ , in
   § 4.8
-  `shadow-including inclusive
   descendant <#concept-shadow-including-inclusive-descendant>`__\ , in
   § 4.8
-  `Shadow-including preorder, depth-first
   traversal <#shadow-including-preorder-depth-first-traversal>`__\ , in
   § 4.8
-  `shadow-including root <#concept-shadow-including-root>`__\ , in
   § 4.8
-  `shadow-including tree
   order <#concept-shadow-including-tree-order>`__\ , in § 4.8
-  shadow root

   -  `definition of <#concept-shadow-root>`__\ , in § 4.8
   -  `dfn for Element <#concept-element-shadow-root>`__\ , in § 4.9

-  `ShadowRoot <#shadowroot>`__\ , in § 4.8
-  `shadowRoot <#dom-element-shadowroot>`__\ , in § 4.9
-  `ShadowRootInit <#dictdef-shadowrootinit>`__\ , in § 4.9
-  `ShadowRootMode <#enumdef-shadowrootmode>`__\ , in § 4.8
-  `shadow tree <#concept-shadow-tree>`__\ , in § 4.2.2
-  `SHOW_ALL <#dom-nodefilter-show_all>`__\ , in § 6.3
-  `SHOW_ATTRIBUTE <#dom-nodefilter-show_attribute>`__\ , in § 6.3
-  `SHOW_CDATA_SECTION <#dom-nodefilter-show_cdata_section>`__\ , in
   § 6.3
-  `SHOW_COMMENT <#dom-nodefilter-show_comment>`__\ , in § 6.3
-  `SHOW_DOCUMENT <#dom-nodefilter-show_document>`__\ , in § 6.3
-  `SHOW_DOCUMENT_FRAGMENT <#dom-nodefilter-show_document_fragment>`__\ ,
   in § 6.3
-  `SHOW_DOCUMENT_TYPE <#dom-nodefilter-show_document_type>`__\ , in
   § 6.3
-  `SHOW_ELEMENT <#dom-nodefilter-show_element>`__\ , in § 6.3
-  `SHOW_ENTITY <#dom-nodefilter-show_entity>`__\ , in § 6.3
-  `SHOW_ENTITY_REFERENCE <#dom-nodefilter-show_entity_reference>`__\ ,
   in § 6.3
-  `SHOW_NOTATION <#dom-nodefilter-show_notation>`__\ , in § 6.3
-  `SHOW_PROCESSING_INSTRUCTION <#dom-nodefilter-show_processing_instruction>`__\ ,
   in § 6.3
-  `SHOW_TEXT <#dom-nodefilter-show_text>`__\ , in § 6.3
-  `sibling <#concept-tree-sibling>`__\ , in § 1.1
-  signal

   -  `attribute for AbortController <#dom-abortcontroller-signal>`__\ ,
      in § 3.1
   -  `dfn for AbortController <#abortcontroller-signal>`__\ , in § 3.1
   -  `dfn for event listener <#event-listener-signal>`__\ , in § 2.7
   -  `dict-member for
      AddEventListenerOptions <#dom-addeventlisteneroptions-signal>`__\ ,
      in § 2.7

-  signal abort

   -  `dfn for AbortController <#abortcontroller-signal-abort>`__\ , in
      § 3.1
   -  `dfn for AbortSignal <#abortsignal-signal-abort>`__\ , in § 3.2

-  `signal a slot change <#signal-a-slot-change>`__\ , in § 4.2.2.5
-  `signal slots <#signal-slot-list>`__\ , in § 4.2.2.5
-  `singleNodeValue <#dom-xpathresult-singlenodevalue>`__\ , in § 8.1
-  slot

   -  `attribute for Element <#dom-element-slot>`__\ , in § 4.9
   -  `definition of <#concept-slot>`__\ , in § 4.2.2.1

-  `slot assignment <#shadowroot-slot-assignment>`__\ , in § 4.8
-  slotAssignment

   -  `attribute for ShadowRoot <#dom-shadowroot-slotassignment>`__\ ,
      in § 4.8
   -  `dict-member for
      ShadowRootInit <#dom-shadowrootinit-slotassignment>`__\ , in § 4.9

-  `SlotAssignmentMode <#enumdef-slotassignmentmode>`__\ , in § 4.8
-  `slotchange <#eventdef-htmlslotelement-slotchange>`__\ , in § 4.3
-  `slot-in-closed-tree <#event-path-slot-in-closed-tree>`__\ , in § 2.2
-  `Slottable <#slotable>`__\ , in § 4.2.9
-  `slottable <#concept-slotable>`__\ , in § 4.2.2.2
-  `snapshotItem(index) <#dom-xpathresult-snapshotitem>`__\ , in § 8.1
-  `snapshotLength <#dom-xpathresult-snapshotlength>`__\ , in § 8.1
-  `source <#transient-registered-observer-source>`__\ , in § 4.3
-  `source signals <#abortsignal-source-signals>`__\ , in § 3.2
-  `specified <#dom-attr-specified>`__\ , in § 4.9.2
-  `split a Text node <#concept-text-split>`__\ , in § 4.11
-  `splitText(offset) <#dom-text-splittext>`__\ , in § 4.11
-  `srcElement <#dom-event-srcelement>`__\ , in § 2.2
-  `start <#concept-range-start>`__\ , in § 5.3
-  startContainer

   -  `attribute for AbstractRange <#dom-range-startcontainer>`__\ , in
      § 5.3
   -  `dict-member for
      StaticRangeInit <#dom-staticrangeinit-startcontainer>`__\ , in
      § 5.4

-  `start node <#concept-range-start-node>`__\ , in § 5.3
-  `start offset <#concept-range-start-offset>`__\ , in § 5.3
-  startOffset

   -  `attribute for AbstractRange <#dom-range-startoffset>`__\ , in
      § 5.3
   -  `dict-member for
      StaticRangeInit <#dom-staticrangeinit-startoffset>`__\ , in § 5.4

-  `START_TO_END <#dom-range-start_to_end>`__\ , in § 5.5
-  `START_TO_START <#dom-range-start_to_start>`__\ , in § 5.5
-  `static collection <#concept-collection-static>`__\ , in § 4.2.10
-  `StaticRange <#staticrange>`__\ , in § 5.4
-  `StaticRange(init) <#dom-staticrange-staticrange>`__\ , in § 5.4
-  `StaticRangeInit <#dictdef-staticrangeinit>`__\ , in § 5.4
-  `stopImmediatePropagation() <#dom-event-stopimmediatepropagation>`__\ ,
   in § 2.2
-  `stop immediate propagation
   flag <#stop-immediate-propagation-flag>`__\ , in § 2.2
-  `stopPropagation() <#dom-event-stoppropagation>`__\ , in § 2.2
-  `stop propagation flag <#stop-propagation-flag>`__\ , in § 2.2
-  `strictErrorChecking <#dom-document-stricterrorchecking>`__\ , in
   § 11
-  `stringification
   behavior <#DOMTokenList-stringification-behavior>`__\ , in § 7.1
-  `stringificationbehavior <#dom-range-stringifier>`__\ , in § 5.5
-  `string replace all <#string-replace-all>`__\ , in § 4.4
-  `STRING_TYPE <#dom-xpathresult-string_type>`__\ , in § 8.1
-  `stringValue <#dom-xpathresult-stringvalue>`__\ , in § 8.1
-  `substring data <#concept-cd-substring>`__\ , in § 4.10
-  `substringData(offset,
   count) <#dom-characterdata-substringdata>`__\ , in § 4.10
-  `subtree <#dom-mutationobserverinit-subtree>`__\ , in § 4.3.1
-  `supported tokens <#concept-supported-tokens>`__\ , in § 7.1
-  `supports(token) <#dom-domtokenlist-supports>`__\ , in § 7.1
-  `surroundContents(newParent) <#dom-range-surroundcontents>`__\ , in
   § 5.5
-  `system ID <#concept-doctype-systemid>`__\ , in § 4.6
-  `systemId <#dom-documenttype-systemid>`__\ , in § 4.6
-  `tagName <#dom-element-tagname>`__\ , in § 4.9
-  `takeRecords() <#dom-mutationobserver-takerecords>`__\ , in § 4.3.1
-  target

   -  `attribute for Event <#dom-event-target>`__\ , in § 2.2
   -  `attribute for MutationRecord <#dom-mutationrecord-target>`__\ ,
      in § 4.3.3
   -  `attribute for
      ProcessingInstruction <#dom-processinginstruction-target>`__\ , in
      § 4.13
   -  `dfn for Event <#event-target>`__\ , in § 2.2
   -  `dfn for ProcessingInstruction <#concept-pi-target>`__\ , in
      § 4.13

-  `Text <#text>`__\ , in § 4.11
-  `Text() <#dom-text-text>`__\ , in § 4.11
-  `textContent <#dom-node-textcontent>`__\ , in § 4.4
-  `Text(data) <#dom-text-text>`__\ , in § 4.11
-  `TEXT_NODE <#dom-node-text_node>`__\ , in § 4.4
-  `throwIfAborted() <#dom-abortsignal-throwifaborted>`__\ , in § 3.2
-  `timeout(milliseconds) <#dom-abortsignal-timeout>`__\ , in § 3.2
-  `timeStamp <#dom-event-timestamp>`__\ , in § 2.2
-  `toggleAttribute(qualifiedName) <#dom-element-toggleattribute>`__\ ,
   in § 4.9
-  `toggleAttribute(qualifiedName,
   force) <#dom-element-toggleattribute>`__\ , in § 4.9
-  `toggle(token) <#dom-domtokenlist-toggle>`__\ , in § 7.1
-  `toggle(token, force) <#dom-domtokenlist-toggle>`__\ , in § 7.1
-  `token set <#concept-dtl-tokens>`__\ , in § 7.1
-  touch target list

   -  `dfn for Event <#event-touch-target-list>`__\ , in § 2.2
   -  `dfn for Event/path <#event-path-touch-target-list>`__\ , in § 2.2

-  `transformToDocument(source) <#dom-xsltprocessor-transformtodocument>`__\ ,
   in § 9.1
-  `transformToFragment(source,
   output) <#dom-xsltprocessor-transformtofragment>`__\ , in § 9.1
-  `transient registered observer <#transient-registered-observer>`__\ ,
   in § 4.3
-  `traverse <#concept-nodeiterator-traverse>`__\ , in § 6.1
-  `traverse children <#concept-traverse-children>`__\ , in § 6.2
-  `traverse siblings <#concept-traverse-siblings>`__\ , in § 6.2
-  `tree <#concept-tree>`__\ , in § 1.1
-  `tree order <#concept-tree-order>`__\ , in § 1.1
-  `TreeWalker <#treewalker>`__\ , in § 6.2
-  type

   -  `attribute for Event <#dom-event-type>`__\ , in § 2.2
   -  `attribute for MutationRecord <#dom-mutationrecord-type>`__\ , in
      § 4.3.3
   -  `dfn for Document <#concept-document-type>`__\ , in § 4.5
   -  `dfn for event listener <#event-listener-type>`__\ , in § 2.7

-  `TypeInfo <#typeinfo>`__\ , in § 11
-  `UNORDERED_NODE_ITERATOR_TYPE <#dom-xpathresult-unordered_node_iterator_type>`__\ ,
   in § 8.1
-  `UNORDERED_NODE_SNAPSHOT_TYPE <#dom-xpathresult-unordered_node_snapshot_type>`__\ ,
   in § 8.1
-  `update steps <#concept-dtl-update>`__\ , in § 7.1
-  URL

   -  `attribute for Document <#dom-document-url>`__\ , in § 4.5
   -  `dfn for Document <#concept-document-url>`__\ , in § 4.5

-  `UserDataHandler <#userdatahandler>`__\ , in § 11
-  `valid <#staticrange-valid>`__\ , in § 5.4
-  `validate <#validate>`__\ , in § 1.4
-  `validate and extract <#validate-and-extract>`__\ , in § 1.4
-  `validation steps <#concept-domtokenlist-validation>`__\ , in § 7.1
-  `valid shadow host name <#valid-shadow-host-name>`__\ , in § 4.9
-  value

   -  `attribute for Attr <#dom-attr-value>`__\ , in § 4.9.2
   -  `attribute for DOMTokenList <#dom-domtokenlist-value>`__\ , in
      § 7.1
   -  `dfn for Attr <#concept-attribute-value>`__\ , in § 4.9.2

-  `webkitMatchesSelector(selectors) <#dom-element-webkitmatchesselector>`__\ ,
   in § 4.9
-  whatToShow

   -  `attribute for NodeIterator <#dom-nodeiterator-whattoshow>`__\ ,
      in § 6.1
   -  `attribute for TreeWalker <#dom-treewalker-whattoshow>`__\ , in
      § 6.2
   -  `dfn for traversal <#concept-traversal-whattoshow>`__\ , in § 6

-  `wholeText <#dom-text-wholetext>`__\ , in § 4.11
-  `XML document <#xml-document>`__\ , in § 4.5
-  `XMLDocument <#xmldocument>`__\ , in § 4.5
-  `xmlEncoding <#dom-document-xmlencoding>`__\ , in § 11
-  `xmlStandalone <#dom-document-xmlstandalone>`__\ , in § 11
-  `xmlVersion <#dom-document-xmlversion>`__\ , in § 11
-  `XPathEvaluator <#xpathevaluator>`__\ , in § 8.4
-  `XPathEvaluator() <#dom-xpathevaluator-xpathevaluator>`__\ , in § 8.4
-  `XPathEvaluatorBase <#xpathevaluatorbase>`__\ , in § 8.3
-  `XPathExpression <#xpathexpression>`__\ , in § 8.2
-  `XPathNSResolver <#callbackdef-xpathnsresolver>`__\ , in § 8.3
-  `XPathResult <#xpathresult>`__\ , in § 8.1
-  `XSLTProcessor <#xsltprocessor>`__\ , in § 9.1
-  `XSLTProcessor() <#dom-xsltprocessor-xsltprocessor>`__\ , in § 9.1

.. _index-defined-elsewhere:

Terms defined by reference ` <#index-defined-elsewhere>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  [] defines the following terms:

   -  DeviceMotionEvent
   -  DeviceOrientationEvent
   -  TouchEvent
   -  char
   -  createContextualFragment()
   -  name
   -  pubidchar
   -  qname

-  [CONSOLE] defines the following terms:

   -  report a warning to the console

-  [CSSOM-VIEW] defines the following terms:

   -  getBoundingClientRect()
   -  getClientRects()

-  [ECMASCRIPT] defines the following terms:

   -  current realm
   -  realm
   -  surrounding agent

-  [ENCODING] defines the following terms:

   -  encoding
   -  name
   -  utf-8

-  [HR-TIME-3] defines the following terms:

   -  DOMHighResTimeStamp
   -  current high resolution time
   -  relative high resolution coarse time

-  [HTML] defines the following terms:

   -  BeforeUnloadEvent
   -  CEReactions
   -  DragEvent
   -  EventHandler
   -  HTMLAnchorElement
   -  HTMLElement
   -  HTMLHtmlElement
   -  HTMLSlotElement
   -  HTMLUnknownElement
   -  HashChangeEvent
   -  MessageEvent
   -  StorageEvent
   -  Window
   -  area
   -  associated document
   -  body
   -  browsing context
   -  browsing context (for Document)
   -  click()
   -  constructor
   -  current global object
   -  custom element constructor
   -  customized built-in element
   -  disable shadow
   -  document base url
   -  enqueue a custom element callback reaction
   -  enqueue a custom element upgrade reaction
   -  event handler
   -  event handler event type
   -  event handler idl attribute
   -  global object
   -  head
   -  html
   -  html parser
   -  in parallel
   -  input
   -  local name
   -  look up a custom element definition
   -  manually assigned nodes
   -  microtask
   -  name
   -  opaque origin
   -  origin
   -  queue a global task
   -  queue a microtask
   -  relevant agent
   -  relevant global object
   -  relevant realm
   -  report the exception
   -  run steps after a timeout
   -  script
   -  similar-origin window agent
   -  slot
   -  template
   -  the body element
   -  timer task source
   -  title
   -  try to upgrade an element
   -  upgrade an element
   -  valid custom element name

-  [INFRA] defines the following terms:

   -  append (for list)
   -  append (for set)
   -  ascii case-insensitive
   -  ascii lowercase
   -  ascii uppercase
   -  ascii whitespace
   -  break
   -  clone
   -  code unit
   -  concatenation
   -  contain
   -  continue
   -  empty
   -  enqueue
   -  exist (for list)
   -  exist (for map)
   -  for each (for list)
   -  for each (for map)
   -  html namespace
   -  identical to
   -  insert
   -  is empty
   -  is not empty
   -  length
   -  list
   -  map
   -  ordered set
   -  prepend
   -  queue
   -  remove
   -  replace (for list)
   -  replace (for set)
   -  set
   -  set (for map)
   -  size
   -  split on ascii whitespace
   -  strictly split
   -  struct
   -  svg namespace
   -  tuple
   -  xml namespace
   -  xmlns namespace

-  [LONG-ANIMATION-FRAMES] defines the following terms:

   -  record timing info for event listener

-  [SELECTORS4] defines the following terms:

   -  :defined
   -  match a selector against a tree
   -  match a selector against an element
   -  parse a selector
   -  scoping root

-  [SERVICE-WORKERS] defines the following terms:

   -  ServiceWorkerGlobalScope
   -  has ever been evaluated flag
   -  script resource
   -  service worker
   -  service worker events
   -  set of event types to handle

-  [UIEVENTS] defines the following terms:

   -  CompositionEvent
   -  FocusEvent
   -  KeyboardEvent
   -  MouseEvent
   -  TextEvent
   -  UIEvent
   -  detail

-  [URL] defines the following terms:

   -  url
   -  url serializer

-  [WEBIDL] defines the following terms:

   -  AbortError
   -  DOMException
   -  DOMString
   -  EnforceRange
   -  Exposed
   -  HierarchyRequestError
   -  InUseAttributeError
   -  IndexSizeError
   -  InvalidCharacterError
   -  InvalidNodeTypeError
   -  InvalidStateError
   -  LegacyNullToEmptyString
   -  LegacyUnenumerableNamedProperties
   -  LegacyUnforgeable
   -  NamespaceError
   -  NewObject
   -  NotFoundError
   -  NotSupportedError
   -  PutForwards
   -  Replaceable
   -  SameObject
   -  SyntaxError
   -  TimeoutError
   -  USVString
   -  Unscopable
   -  WrongDocumentError
   -  a new promise
   -  any
   -  associated realm
   -  boolean
   -  call a user object's operation
   -  construct
   -  converted to an idl value
   -  dictionary
   -  identifier
   -  implements
   -  invoke
   -  new
   -  reject
   -  resolve
   -  sequence
   -  short
   -  supported property indices
   -  supported property names
   -  this
   -  throw
   -  undefined
   -  unrestricted double
   -  unsigned long
   -  unsigned long long
   -  unsigned short

References ` <#references>`__
------------------------------

.. _normative:

Normative References ` <#normative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[CONSOLE]
   Dominic Farolino; Robert Kowalski; Terin Stock. `Console
   Standard <https://console.spec.whatwg.org/>`__. Living Standard. URL:
   https://console.spec.whatwg.org/
[DEVICE-ORIENTATION]
   Marcos Caceres; Reilly Grant; Raphael Kubo da Costa.
   `DeviceOrientation Event
   Specification <https://w3c.github.io/deviceorientation/>`__. URL:
   https://w3c.github.io/deviceorientation/
[ECMASCRIPT]
   `ECMAScript Language
   Specification <https://tc39.es/ecma262/multipage/>`__. URL:
   https://tc39.es/ecma262/multipage/
[ENCODING]
   Anne van Kesteren. `Encoding
   Standard <https://encoding.spec.whatwg.org/>`__. Living Standard.
   URL: https://encoding.spec.whatwg.org/
[HR-TIME-3]
   Yoav Weiss. `High Resolution
   Time <https://w3c.github.io/hr-time/>`__. URL:
   https://w3c.github.io/hr-time/
[HTML]
   Anne van Kesteren; et al. `HTML
   Standard <https://html.spec.whatwg.org/multipage/>`__. Living
   Standard. URL: https://html.spec.whatwg.org/multipage/
[INFRA]
   Anne van Kesteren; Domenic Denicola. `Infra
   Standard <https://infra.spec.whatwg.org/>`__. Living Standard. URL:
   https://infra.spec.whatwg.org/
[LONG-ANIMATION-FRAMES]
   `Long Animation Frames
   API <https://w3c.github.io/long-animation-frames/>`__. Editor's
   Draft. URL: https://w3c.github.io/long-animation-frames/
[SELECTORS4]
   Elika Etemad; Tab Atkins Jr.. `Selectors Level
   4 <https://drafts.csswg.org/selectors/>`__. URL:
   https://drafts.csswg.org/selectors/
[SERVICE-WORKERS]
   Jake Archibald; Marijn Kruisselbrink. `Service
   Workers <https://w3c.github.io/ServiceWorker/>`__. URL:
   https://w3c.github.io/ServiceWorker/
[TOUCH-EVENTS]
   Doug Schepers; et al. `Touch
   Events <https://w3c.github.io/touch-events/>`__. URL:
   https://w3c.github.io/touch-events/
[UIEVENTS]
   Gary Kacmarcik; Travis Leithead. `UI
   Events <https://w3c.github.io/uievents/>`__. URL:
   https://w3c.github.io/uievents/
[URL]
   Anne van Kesteren. `URL Standard <https://url.spec.whatwg.org/>`__.
   Living Standard. URL: https://url.spec.whatwg.org/
[WEBIDL]
   Edgar Chen; Timothy Gu. `Web IDL
   Standard <https://webidl.spec.whatwg.org/>`__. Living Standard. URL:
   https://webidl.spec.whatwg.org/
[XML]
   Tim Bray; et al. `Extensible Markup Language (XML) 1.0 (Fifth
   Edition) <https://www.w3.org/TR/xml/>`__. 26 November 2008. REC. URL:
   https://www.w3.org/TR/xml/
[XML-NAMES]
   Tim Bray; et al. `Namespaces in XML 1.0 (Third
   Edition) <https://www.w3.org/TR/xml-names/>`__. 8 December 2009. REC.
   URL: https://www.w3.org/TR/xml-names/

.. _informative:

Informative References ` <#informative>`__
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[CSSOM-VIEW]
   Simon Pieters. `CSSOM View
   Module <https://drafts.csswg.org/cssom-view/>`__. URL:
   https://drafts.csswg.org/cssom-view/
[DOM-Level-3-XPath]
   Ray Whitmer. `Document Object Model (DOM) Level 3 XPath
   Specification <https://www.w3.org/TR/DOM-Level-3-XPath/>`__. 3
   November 2020. NOTE. URL: https://www.w3.org/TR/DOM-Level-3-XPath/
[DOM-Parsing]
   Travis Leithead. `DOM Parsing and
   Serialization <https://w3c.github.io/DOM-Parsing/>`__. URL:
   https://w3c.github.io/DOM-Parsing/
[FULLSCREEN]
   Philip Jägenstedt. `Fullscreen API
   Standard <https://fullscreen.spec.whatwg.org/>`__. Living Standard.
   URL: https://fullscreen.spec.whatwg.org/
[INDEXEDDB]
   Nikunj Mehta; et al. `Indexed Database
   API <https://w3c.github.io/IndexedDB/>`__. URL:
   https://w3c.github.io/IndexedDB/
[XPath]
   James Clark; Steven DeRose. `XML Path Language (XPath) Version
   1.0 <https://www.w3.org/TR/xpath-10/>`__. 16 November 1999. REC. URL:
   https://www.w3.org/TR/xpath-10/
[XSLT]
   James Clark. `XSL Transformations (XSLT) Version
   1.0 <https://www.w3.org/TR/xslt-10/>`__. 16 November 1999. REC. URL:
   https://www.w3.org/TR/xslt-10/

IDL Index ` <#idl-index>`__
----------------------------

.. code:: idl

   [Exposed=*]
   interface Event {
     constructor(DOMString type, optional EventInit eventInitDict = {});

     readonly attribute DOMString type;
     readonly attribute EventTarget? target;
     readonly attribute EventTarget? srcElement; // legacy
     readonly attribute EventTarget? currentTarget;
     sequence<EventTarget> composedPath();

     const unsigned short NONE = 0;
     const unsigned short CAPTURING_PHASE = 1;
     const unsigned short AT_TARGET = 2;
     const unsigned short BUBBLING_PHASE = 3;
     readonly attribute unsigned short eventPhase;

     undefined stopPropagation();
              attribute boolean cancelBubble; // legacy alias of .stopPropagation()
     undefined stopImmediatePropagation();

     readonly attribute boolean bubbles;
     readonly attribute boolean cancelable;
              attribute boolean returnValue;  // legacy
     undefined preventDefault();
     readonly attribute boolean defaultPrevented;
     readonly attribute boolean composed;

     [LegacyUnforgeable] readonly attribute boolean isTrusted;
     readonly attribute DOMHighResTimeStamp timeStamp;

     undefined initEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false); // legacy
   };

   dictionary EventInit {
     boolean bubbles = false;
     boolean cancelable = false;
     boolean composed = false;
   };

   partial interface Window {
     [Replaceable] readonly attribute (Event or undefined) event; // legacy
   };

   [Exposed=*]
   interface CustomEvent : Event {
     constructor(DOMString type, optional CustomEventInit eventInitDict = {});

     readonly attribute any detail;

     undefined initCustomEvent(DOMString type, optional boolean bubbles = false, optional boolean cancelable = false, optional any detail = null); // legacy
   };

   dictionary CustomEventInit : EventInit {
     any detail = null;
   };

   [Exposed=*]
   interface EventTarget {
     constructor();

     undefined addEventListener(DOMString type, EventListener? callback, optional (AddEventListenerOptions or boolean) options = {});
     undefined removeEventListener(DOMString type, EventListener? callback, optional (EventListenerOptions or boolean) options = {});
     boolean dispatchEvent(Event event);
   };

   callback interface EventListener {
     undefined handleEvent(Event event);
   };

   dictionary EventListenerOptions {
     boolean capture = false;
   };

   dictionary AddEventListenerOptions : EventListenerOptions {
     boolean passive;
     boolean once = false;
     AbortSignal signal;
   };

   [Exposed=*]
   interface AbortController {
     constructor();

     [SameObject] readonly attribute AbortSignal signal;

     undefined abort(optional any reason);
   };

   [Exposed=*]
   interface AbortSignal : EventTarget {
     [NewObject] static AbortSignal abort(optional any reason);
     [Exposed=(Window,Worker), NewObject] static AbortSignal timeout([EnforceRange] unsigned long long milliseconds);
     [NewObject] static AbortSignal _any(sequence<AbortSignal> signals);

     readonly attribute boolean aborted;
     readonly attribute any reason;
     undefined throwIfAborted();

     attribute EventHandler onabort;
   };
   interface mixin NonElementParentNode {
     Element? getElementById(DOMString elementId);
   };
   Document includes NonElementParentNode;
   DocumentFragment includes NonElementParentNode;

   interface mixin DocumentOrShadowRoot {
   };
   Document includes DocumentOrShadowRoot;
   ShadowRoot includes DocumentOrShadowRoot;

   interface mixin ParentNode {
     [SameObject] readonly attribute HTMLCollection children;
     readonly attribute Element? firstElementChild;
     readonly attribute Element? lastElementChild;
     readonly attribute unsigned long childElementCount;

     [CEReactions, Unscopable] undefined prepend((Node or DOMString)... nodes);
     [CEReactions, Unscopable] undefined append((Node or DOMString)... nodes);
     [CEReactions, Unscopable] undefined replaceChildren((Node or DOMString)... nodes);

     Element? querySelector(DOMString selectors);
     [NewObject] NodeList querySelectorAll(DOMString selectors);
   };
   Document includes ParentNode;
   DocumentFragment includes ParentNode;
   Element includes ParentNode;

   interface mixin NonDocumentTypeChildNode {
     readonly attribute Element? previousElementSibling;
     readonly attribute Element? nextElementSibling;
   };
   Element includes NonDocumentTypeChildNode;
   CharacterData includes NonDocumentTypeChildNode;

   interface mixin ChildNode {
     [CEReactions, Unscopable] undefined before((Node or DOMString)... nodes);
     [CEReactions, Unscopable] undefined after((Node or DOMString)... nodes);
     [CEReactions, Unscopable] undefined replaceWith((Node or DOMString)... nodes);
     [CEReactions, Unscopable] undefined remove();
   };
   DocumentType includes ChildNode;
   Element includes ChildNode;
   CharacterData includes ChildNode;

   interface mixin Slottable {
     readonly attribute HTMLSlotElement? assignedSlot;
   };
   Element includes Slottable;
   Text includes Slottable;

   [Exposed=Window]
   interface NodeList {
     getter Node? item(unsigned long index);
     readonly attribute unsigned long length;
     iterable<Node>;
   };

   [Exposed=Window, LegacyUnenumerableNamedProperties]
   interface HTMLCollection {
     readonly attribute unsigned long length;
     getter Element? item(unsigned long index);
     getter Element? namedItem(DOMString name);
   };

   [Exposed=Window]
   interface MutationObserver {
     constructor(MutationCallback callback);

     undefined observe(Node target, optional MutationObserverInit options = {});
     undefined disconnect();
     sequence<MutationRecord> takeRecords();
   };

   callback MutationCallback = undefined (sequence<MutationRecord> mutations, MutationObserver observer);

   dictionary MutationObserverInit {
     boolean childList = false;
     boolean attributes;
     boolean characterData;
     boolean subtree = false;
     boolean attributeOldValue;
     boolean characterDataOldValue;
     sequence<DOMString> attributeFilter;
   };

   [Exposed=Window]
   interface MutationRecord {
     readonly attribute DOMString type;
     [SameObject] readonly attribute Node target;
     [SameObject] readonly attribute NodeList addedNodes;
     [SameObject] readonly attribute NodeList removedNodes;
     readonly attribute Node? previousSibling;
     readonly attribute Node? nextSibling;
     readonly attribute DOMString? attributeName;
     readonly attribute DOMString? attributeNamespace;
     readonly attribute DOMString? oldValue;
   };

   [Exposed=Window]
   interface Node : EventTarget {
     const unsigned short ELEMENT_NODE = 1;
     const unsigned short ATTRIBUTE_NODE = 2;
     const unsigned short TEXT_NODE = 3;
     const unsigned short CDATA_SECTION_NODE = 4;
     const unsigned short ENTITY_REFERENCE_NODE = 5; // legacy
     const unsigned short ENTITY_NODE = 6; // legacy
     const unsigned short PROCESSING_INSTRUCTION_NODE = 7;
     const unsigned short COMMENT_NODE = 8;
     const unsigned short DOCUMENT_NODE = 9;
     const unsigned short DOCUMENT_TYPE_NODE = 10;
     const unsigned short DOCUMENT_FRAGMENT_NODE = 11;
     const unsigned short NOTATION_NODE = 12; // legacy
     readonly attribute unsigned short nodeType;
     readonly attribute DOMString nodeName;

     readonly attribute USVString baseURI;

     readonly attribute boolean isConnected;
     readonly attribute Document? ownerDocument;
     Node getRootNode(optional GetRootNodeOptions options = {});
     readonly attribute Node? parentNode;
     readonly attribute Element? parentElement;
     boolean hasChildNodes();
     [SameObject] readonly attribute NodeList childNodes;
     readonly attribute Node? firstChild;
     readonly attribute Node? lastChild;
     readonly attribute Node? previousSibling;
     readonly attribute Node? nextSibling;

     [CEReactions] attribute DOMString? nodeValue;
     [CEReactions] attribute DOMString? textContent;
     [CEReactions] undefined normalize();

     [CEReactions, NewObject] Node cloneNode(optional boolean deep = false);
     boolean isEqualNode(Node? otherNode);
     boolean isSameNode(Node? otherNode); // legacy alias of ===

     const unsigned short DOCUMENT_POSITION_DISCONNECTED = 0x01;
     const unsigned short DOCUMENT_POSITION_PRECEDING = 0x02;
     const unsigned short DOCUMENT_POSITION_FOLLOWING = 0x04;
     const unsigned short DOCUMENT_POSITION_CONTAINS = 0x08;
     const unsigned short DOCUMENT_POSITION_CONTAINED_BY = 0x10;
     const unsigned short DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0x20;
     unsigned short compareDocumentPosition(Node other);
     boolean contains(Node? other);

     DOMString? lookupPrefix(DOMString? namespace);
     DOMString? lookupNamespaceURI(DOMString? prefix);
     boolean isDefaultNamespace(DOMString? namespace);

     [CEReactions] Node insertBefore(Node node, Node? child);
     [CEReactions] Node appendChild(Node node);
     [CEReactions] Node replaceChild(Node node, Node child);
     [CEReactions] Node removeChild(Node child);
   };

   dictionary GetRootNodeOptions {
     boolean composed = false;
   };

   [Exposed=Window]
   interface Document : Node {
     constructor();

     [SameObject] readonly attribute DOMImplementation implementation;
     readonly attribute USVString URL;
     readonly attribute USVString documentURI;
     readonly attribute DOMString compatMode;
     readonly attribute DOMString characterSet;
     readonly attribute DOMString charset; // legacy alias of .characterSet
     readonly attribute DOMString inputEncoding; // legacy alias of .characterSet
     readonly attribute DOMString contentType;

     readonly attribute DocumentType? doctype;
     readonly attribute Element? documentElement;
     HTMLCollection getElementsByTagName(DOMString qualifiedName);
     HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
     HTMLCollection getElementsByClassName(DOMString classNames);

     [CEReactions, NewObject] Element createElement(DOMString localName, optional (DOMString or ElementCreationOptions) options = {});
     [CEReactions, NewObject] Element createElementNS(DOMString? namespace, DOMString qualifiedName, optional (DOMString or ElementCreationOptions) options = {});
     [NewObject] DocumentFragment createDocumentFragment();
     [NewObject] Text createTextNode(DOMString data);
     [NewObject] CDATASection createCDATASection(DOMString data);
     [NewObject] Comment createComment(DOMString data);
     [NewObject] ProcessingInstruction createProcessingInstruction(DOMString target, DOMString data);

     [CEReactions, NewObject] Node importNode(Node node, optional boolean deep = false);
     [CEReactions] Node adoptNode(Node node);

     [NewObject] Attr createAttribute(DOMString localName);
     [NewObject] Attr createAttributeNS(DOMString? namespace, DOMString qualifiedName);

     [NewObject] Event createEvent(DOMString interface); // legacy

     [NewObject] Range createRange();

     // NodeFilter.SHOW_ALL = 0xFFFFFFFF
     [NewObject] NodeIterator createNodeIterator(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
     [NewObject] TreeWalker createTreeWalker(Node root, optional unsigned long whatToShow = 0xFFFFFFFF, optional NodeFilter? filter = null);
   };

   [Exposed=Window]
   interface XMLDocument : Document {};

   dictionary ElementCreationOptions {
     DOMString is;
   };

   [Exposed=Window]
   interface DOMImplementation {
     [NewObject] DocumentType createDocumentType(DOMString qualifiedName, DOMString publicId, DOMString systemId);
     [NewObject] XMLDocument createDocument(DOMString? namespace, [LegacyNullToEmptyString] DOMString qualifiedName, optional DocumentType? doctype = null);
     [NewObject] Document createHTMLDocument(optional DOMString title);

     boolean hasFeature(); // useless; always returns true
   };

   [Exposed=Window]
   interface DocumentType : Node {
     readonly attribute DOMString name;
     readonly attribute DOMString publicId;
     readonly attribute DOMString systemId;
   };

   [Exposed=Window]
   interface DocumentFragment : Node {
     constructor();
   };

   [Exposed=Window]
   interface ShadowRoot : DocumentFragment {
     readonly attribute ShadowRootMode mode;
     readonly attribute boolean delegatesFocus;
     readonly attribute SlotAssignmentMode slotAssignment;
     readonly attribute boolean clonable;
     readonly attribute boolean serializable;
     readonly attribute Element host;
     attribute EventHandler onslotchange;
   };

   enum ShadowRootMode { "open", "closed" };
   enum SlotAssignmentMode { "manual", "named" };

   [Exposed=Window]
   interface Element : Node {
     readonly attribute DOMString? namespaceURI;
     readonly attribute DOMString? prefix;
     readonly attribute DOMString localName;
     readonly attribute DOMString tagName;

     [CEReactions] attribute DOMString id;
     [CEReactions] attribute DOMString className;
     [SameObject, PutForwards=value] readonly attribute DOMTokenList classList;
     [CEReactions, Unscopable] attribute DOMString slot;

     boolean hasAttributes();
     [SameObject] readonly attribute NamedNodeMap attributes;
     sequence<DOMString> getAttributeNames();
     DOMString? getAttribute(DOMString qualifiedName);
     DOMString? getAttributeNS(DOMString? namespace, DOMString localName);
     [CEReactions] undefined setAttribute(DOMString qualifiedName, DOMString value);
     [CEReactions] undefined setAttributeNS(DOMString? namespace, DOMString qualifiedName, DOMString value);
     [CEReactions] undefined removeAttribute(DOMString qualifiedName);
     [CEReactions] undefined removeAttributeNS(DOMString? namespace, DOMString localName);
     [CEReactions] boolean toggleAttribute(DOMString qualifiedName, optional boolean force);
     boolean hasAttribute(DOMString qualifiedName);
     boolean hasAttributeNS(DOMString? namespace, DOMString localName);

     Attr? getAttributeNode(DOMString qualifiedName);
     Attr? getAttributeNodeNS(DOMString? namespace, DOMString localName);
     [CEReactions] Attr? setAttributeNode(Attr attr);
     [CEReactions] Attr? setAttributeNodeNS(Attr attr);
     [CEReactions] Attr removeAttributeNode(Attr attr);

     ShadowRoot attachShadow(ShadowRootInit init);
     readonly attribute ShadowRoot? shadowRoot;

     Element? closest(DOMString selectors);
     boolean matches(DOMString selectors);
     boolean webkitMatchesSelector(DOMString selectors); // legacy alias of .matches

     HTMLCollection getElementsByTagName(DOMString qualifiedName);
     HTMLCollection getElementsByTagNameNS(DOMString? namespace, DOMString localName);
     HTMLCollection getElementsByClassName(DOMString classNames);

     [CEReactions] Element? insertAdjacentElement(DOMString where, Element element); // legacy
     undefined insertAdjacentText(DOMString where, DOMString data); // legacy
   };

   dictionary ShadowRootInit {
     required ShadowRootMode mode;
     boolean delegatesFocus = false;
     SlotAssignmentMode slotAssignment = "named";
     boolean clonable = false;
     boolean serializable = false;
   };

   [Exposed=Window,
    LegacyUnenumerableNamedProperties]
   interface NamedNodeMap {
     readonly attribute unsigned long length;
     getter Attr? item(unsigned long index);
     getter Attr? getNamedItem(DOMString qualifiedName);
     Attr? getNamedItemNS(DOMString? namespace, DOMString localName);
     [CEReactions] Attr? setNamedItem(Attr attr);
     [CEReactions] Attr? setNamedItemNS(Attr attr);
     [CEReactions] Attr removeNamedItem(DOMString qualifiedName);
     [CEReactions] Attr removeNamedItemNS(DOMString? namespace, DOMString localName);
   };

   [Exposed=Window]
   interface Attr : Node {
     readonly attribute DOMString? namespaceURI;
     readonly attribute DOMString? prefix;
     readonly attribute DOMString localName;
     readonly attribute DOMString name;
     [CEReactions] attribute DOMString value;

     readonly attribute Element? ownerElement;

     readonly attribute boolean specified; // useless; always returns true
   };
   [Exposed=Window]
   interface CharacterData : Node {
     attribute [LegacyNullToEmptyString] DOMString data;
     readonly attribute unsigned long length;
     DOMString substringData(unsigned long offset, unsigned long count);
     undefined appendData(DOMString data);
     undefined insertData(unsigned long offset, DOMString data);
     undefined deleteData(unsigned long offset, unsigned long count);
     undefined replaceData(unsigned long offset, unsigned long count, DOMString data);
   };

   [Exposed=Window]
   interface Text : CharacterData {
     constructor(optional DOMString data = "");

     [NewObject] Text splitText(unsigned long offset);
     readonly attribute DOMString wholeText;
   };

   [Exposed=Window]
   interface CDATASection : Text {
   };
   [Exposed=Window]
   interface ProcessingInstruction : CharacterData {
     readonly attribute DOMString target;
   };
   [Exposed=Window]
   interface Comment : CharacterData {
     constructor(optional DOMString data = "");
   };

   [Exposed=Window]
   interface AbstractRange {
     readonly attribute Node startContainer;
     readonly attribute unsigned long startOffset;
     readonly attribute Node endContainer;
     readonly attribute unsigned long endOffset;
     readonly attribute boolean collapsed;
   };

   dictionary StaticRangeInit {
     required Node startContainer;
     required unsigned long startOffset;
     required Node endContainer;
     required unsigned long endOffset;
   };

   [Exposed=Window]
   interface StaticRange : AbstractRange {
     constructor(StaticRangeInit init);
   };

   [Exposed=Window]
   interface Range : AbstractRange {
     constructor();

     readonly attribute Node commonAncestorContainer;

     undefined setStart(Node node, unsigned long offset);
     undefined setEnd(Node node, unsigned long offset);
     undefined setStartBefore(Node node);
     undefined setStartAfter(Node node);
     undefined setEndBefore(Node node);
     undefined setEndAfter(Node node);
     undefined collapse(optional boolean toStart = false);
     undefined selectNode(Node node);
     undefined selectNodeContents(Node node);

     const unsigned short START_TO_START = 0;
     const unsigned short START_TO_END = 1;
     const unsigned short END_TO_END = 2;
     const unsigned short END_TO_START = 3;
     short compareBoundaryPoints(unsigned short how, Range sourceRange);

     [CEReactions] undefined deleteContents();
     [CEReactions, NewObject] DocumentFragment extractContents();
     [CEReactions, NewObject] DocumentFragment cloneContents();
     [CEReactions] undefined insertNode(Node node);
     [CEReactions] undefined surroundContents(Node newParent);

     [NewObject] Range cloneRange();
     undefined detach();

     boolean isPointInRange(Node node, unsigned long offset);
     short comparePoint(Node node, unsigned long offset);

     boolean intersectsNode(Node node);

     stringifier;
   };

   [Exposed=Window]
   interface NodeIterator {
     [SameObject] readonly attribute Node root;
     readonly attribute Node referenceNode;
     readonly attribute boolean pointerBeforeReferenceNode;
     readonly attribute unsigned long whatToShow;
     readonly attribute NodeFilter? filter;

     Node? nextNode();
     Node? previousNode();

     undefined detach();
   };

   [Exposed=Window]
   interface TreeWalker {
     [SameObject] readonly attribute Node root;
     readonly attribute unsigned long whatToShow;
     readonly attribute NodeFilter? filter;
              attribute Node currentNode;

     Node? parentNode();
     Node? firstChild();
     Node? lastChild();
     Node? previousSibling();
     Node? nextSibling();
     Node? previousNode();
     Node? nextNode();
   };
   [Exposed=Window]
   callback interface NodeFilter {
     // Constants for acceptNode()
     const unsigned short FILTER_ACCEPT = 1;
     const unsigned short FILTER_REJECT = 2;
     const unsigned short FILTER_SKIP = 3;

     // Constants for whatToShow
     const unsigned long SHOW_ALL = 0xFFFFFFFF;
     const unsigned long SHOW_ELEMENT = 0x1;
     const unsigned long SHOW_ATTRIBUTE = 0x2;
     const unsigned long SHOW_TEXT = 0x4;
     const unsigned long SHOW_CDATA_SECTION = 0x8;
     const unsigned long SHOW_ENTITY_REFERENCE = 0x10; // legacy
     const unsigned long SHOW_ENTITY = 0x20; // legacy
     const unsigned long SHOW_PROCESSING_INSTRUCTION = 0x40;
     const unsigned long SHOW_COMMENT = 0x80;
     const unsigned long SHOW_DOCUMENT = 0x100;
     const unsigned long SHOW_DOCUMENT_TYPE = 0x200;
     const unsigned long SHOW_DOCUMENT_FRAGMENT = 0x400;
     const unsigned long SHOW_NOTATION = 0x800; // legacy

     unsigned short acceptNode(Node node);
   };

   [Exposed=Window]
   interface DOMTokenList {
     readonly attribute unsigned long length;
     getter DOMString? item(unsigned long index);
     boolean contains(DOMString token);
     [CEReactions] undefined add(DOMString... tokens);
     [CEReactions] undefined remove(DOMString... tokens);
     [CEReactions] boolean toggle(DOMString token, optional boolean force);
     [CEReactions] boolean replace(DOMString token, DOMString newToken);
     boolean supports(DOMString token);
     [CEReactions] stringifier attribute DOMString value;
     iterable<DOMString>;
   };

   [Exposed=Window]
   interface XPathResult {
     const unsigned short ANY_TYPE = 0;
     const unsigned short NUMBER_TYPE = 1;
     const unsigned short STRING_TYPE = 2;
     const unsigned short BOOLEAN_TYPE = 3;
     const unsigned short UNORDERED_NODE_ITERATOR_TYPE = 4;
     const unsigned short ORDERED_NODE_ITERATOR_TYPE = 5;
     const unsigned short UNORDERED_NODE_SNAPSHOT_TYPE = 6;
     const unsigned short ORDERED_NODE_SNAPSHOT_TYPE = 7;
     const unsigned short ANY_UNORDERED_NODE_TYPE = 8;
     const unsigned short FIRST_ORDERED_NODE_TYPE = 9;

     readonly attribute unsigned short resultType;
     readonly attribute unrestricted double numberValue;
     readonly attribute DOMString stringValue;
     readonly attribute boolean booleanValue;
     readonly attribute Node? singleNodeValue;
     readonly attribute boolean invalidIteratorState;
     readonly attribute unsigned long snapshotLength;

     Node? iterateNext();
     Node? snapshotItem(unsigned long index);
   };

   [Exposed=Window]
   interface XPathExpression {
     // XPathResult.ANY_TYPE = 0
     XPathResult evaluate(Node contextNode, optional unsigned short type = 0, optional XPathResult? result = null);
   };

   callback interface XPathNSResolver {
     DOMString? lookupNamespaceURI(DOMString? prefix);
   };

   interface mixin XPathEvaluatorBase {
     [NewObject] XPathExpression createExpression(DOMString expression, optional XPathNSResolver? resolver = null);
     Node createNSResolver(Node nodeResolver); // legacy
     // XPathResult.ANY_TYPE = 0
     XPathResult evaluate(DOMString expression, Node contextNode, optional XPathNSResolver? resolver = null, optional unsigned short type = 0, optional XPathResult? result = null);
   };
   Document includes XPathEvaluatorBase;

   [Exposed=Window]
   interface XPathEvaluator {
     constructor();
   };

   XPathEvaluator includes XPathEvaluatorBase;

   [Exposed=Window]
   interface XSLTProcessor {
     constructor();
     undefined importStylesheet(Node style);
     [CEReactions] DocumentFragment transformToFragment(Node source, Document output);
     [CEReactions] Document transformToDocument(Node source);
     undefined setParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName, any value);
     any getParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName);
     undefined removeParameter([LegacyNullToEmptyString] DOMString namespaceURI, DOMString localName);
     undefined clearParameters();
     undefined reset();
   };

**✔**\ MDN

.. container:: feature

   `AbortController/AbortController <https://developer.mozilla.org/en-US/docs/Web/API/AbortController/AbortController>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari12.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

.. container:: feature

   `AbortController/abort <https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari12.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortController/signal <https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari12.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortController <https://developer.mozilla.org/en-US/docs/Web/API/AbortController>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari12.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/abort_event <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari11.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/abort_event <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_event>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari11.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/abort_static <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/abort_static>`__

   In all current engines.

   .. container:: support

      Firefox88+Safari15+Chrome93+

      --------------

      Opera?Edge93+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.12.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/aborted <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/aborted>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari11.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/reason <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/reason>`__

   In all current engines.

   .. container:: support

      Firefox97+Safari15.4+Chrome98+

      --------------

      Opera?Edge98+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js17.2.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/throwIfAborted <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/throwIfAborted>`__

   In all current engines.

   .. container:: support

      Firefox97+Safari15.4+Chrome100+

      --------------

      Opera?Edge100+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js17.3.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal/timeout_static <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/timeout_static>`__

   In all current engines.

   .. container:: support

      Firefox100+Safari16+Chrome103+

      --------------

      Opera?Edge103+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js17.3.0+

**✔**\ MDN

.. container:: feature

   `AbortSignal <https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal>`__

   In all current engines.

   .. container:: support

      Firefox57+Safari11.1+Chrome66+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `AbstractRange/collapsed <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/collapsed>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Range/collapsed <https://developer.mozilla.org/en-US/docs/Web/API/Range/collapsed>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `StaticRange/collapsed <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/collapsed>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `AbstractRange/endContainer <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/endContainer>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Range/endContainer <https://developer.mozilla.org/en-US/docs/Web/API/Range/endContainer>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `StaticRange/endContainer <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `AbstractRange/endOffset <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/endOffset>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Range/endOffset <https://developer.mozilla.org/en-US/docs/Web/API/Range/endOffset>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `StaticRange/endOffset <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `AbstractRange/startContainer <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/startContainer>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Range/startContainer <https://developer.mozilla.org/en-US/docs/Web/API/Range/startContainer>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `StaticRange/startContainer <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `AbstractRange/startOffset <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange/startOffset>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Range/startOffset <https://developer.mozilla.org/en-US/docs/Web/API/Range/startOffset>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `StaticRange/startOffset <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `AbstractRange <https://developer.mozilla.org/en-US/docs/Web/API/AbstractRange>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari14.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)NoneIENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Attr/localName <https://developer.mozilla.org/en-US/docs/Web/API/Attr/localName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr/name <https://developer.mozilla.org/en-US/docs/Web/API/Attr/name>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr/namespaceURI <https://developer.mozilla.org/en-US/docs/Web/API/Attr/namespaceURI>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr/ownerElement <https://developer.mozilla.org/en-US/docs/Web/API/Attr/ownerElement>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr/prefix <https://developer.mozilla.org/en-US/docs/Web/API/Attr/prefix>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr/value <https://developer.mozilla.org/en-US/docs/Web/API/Attr/value>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Attr <https://developer.mozilla.org/en-US/docs/Web/API/Attr>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `CDATASection <https://developer.mozilla.org/en-US/docs/Web/API/CDATASection>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/after <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/after>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentType/after <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/after>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/after <https://developer.mozilla.org/en-US/docs/Web/API/Element/after>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `CharacterData/appendData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/appendData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/before <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/before>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentType/before <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/before>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/before <https://developer.mozilla.org/en-US/docs/Web/API/Element/before>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `CharacterData/data <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/data>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/deleteData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/deleteData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/insertData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/insertData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/length <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/length>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/nextElementSibling <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/nextElementSibling>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/nextElementSibling <https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/previousElementSibling <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/previousElementSibling>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/previousElementSibling <https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/remove <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/remove>`__

   In all current engines.

   .. container:: support

      Firefox23+Safari7+Chrome24+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentType/remove <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/remove>`__

   In all current engines.

   .. container:: support

      Firefox23+Safari7+Chrome24+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/remove <https://developer.mozilla.org/en-US/docs/Web/API/Element/remove>`__

   In all current engines.

   .. container:: support

      Firefox23+Safari7+Chrome24+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `CharacterData/replaceData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/replaceData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData/replaceWith <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/replaceWith>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentType/replaceWith <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/replaceWith>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/replaceWith <https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceWith>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera39+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `CharacterData/substringData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData/substringData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CharacterData <https://developer.mozilla.org/en-US/docs/Web/API/CharacterData>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Comment/Comment <https://developer.mozilla.org/en-US/docs/Web/API/Comment/Comment>`__

   In all current engines.

   .. container:: support

      Firefox24+Safari8+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Comment <https://developer.mozilla.org/en-US/docs/Web/API/Comment>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `CustomEvent/CustomEvent <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent>`__

   In all current engines.

   .. container:: support

      Firefox11+Safari6+Chrome15+

      --------------

      Opera11.6+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12+

**✔**\ MDN

.. container:: feature

   `CustomEvent/detail <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/detail>`__

   In all current engines.

   .. container:: support

      Firefox6+Safari5+Chrome5+

      --------------

      Opera11.6+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12+

**✔**\ MDN

.. container:: feature

   `CustomEvent <https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent>`__

   In all current engines.

   .. container:: support

      Firefox6+Safari5+Chrome5+

      --------------

      Opera11+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile11+

      --------------

      Node.js19.0.0+

**✔**\ MDN

.. container:: feature

   `DOMImplementation/createDocument <https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMImplementation/createDocumentType <https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMImplementation/createHTMLDocument <https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMImplementation <https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/add <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/contains <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/item <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/item>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/length <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/length>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/remove <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/replace <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10.1+Chrome61+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `DOMTokenList/supports <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/supports>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10.1+Chrome49+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `DOMTokenList/toggle <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DOMTokenList/value <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/value>`__

   In all current engines.

   .. container:: support

      Firefox47+Safari10+Chrome50+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `DOMTokenList <https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari5.1+Chrome8+

      --------------

      Opera11.5+Edge79+

      --------------

      Edge (Legacy)12+IE10+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile11.5+

**✔**\ MDN

.. container:: feature

   `Document/Document <https://developer.mozilla.org/en-US/docs/Web/API/Document/Document>`__

   In all current engines.

   .. container:: support

      Firefox20+Safari8+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Document/URL <https://developer.mozilla.org/en-US/docs/Web/API/Document/URL>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/adoptNode <https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/append <https://developer.mozilla.org/en-US/docs/Web/API/Document/append>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/append <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/append>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/append <https://developer.mozilla.org/en-US/docs/Web/API/Element/append>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Document/characterSet <https://developer.mozilla.org/en-US/docs/Web/API/Document/characterSet>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView1+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/childElementCount <https://developer.mozilla.org/en-US/docs/Web/API/Document/childElementCount>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/childElementCount <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/childElementCount>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/childElementCount <https://developer.mozilla.org/en-US/docs/Web/API/Element/childElementCount>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/children <https://developer.mozilla.org/en-US/docs/Web/API/Document/children>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/children <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/children>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/children <https://developer.mozilla.org/en-US/docs/Web/API/Element/children>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome1+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/compatMode <https://developer.mozilla.org/en-US/docs/Web/API/Document/compatMode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/contentType <https://developer.mozilla.org/en-US/docs/Web/API/Document/contentType>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari9+Chrome36+

      --------------

      Opera23+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile24+

**✔**\ MDN

.. container:: feature

   `Document/createAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute>`__

   In all current engines.

   .. container:: support

      Firefox44+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createAttributeNS <https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttributeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createCDATASection <https://developer.mozilla.org/en-US/docs/Web/API/Document/createCDATASection>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

.. container:: feature

   `Document/createComment <https://developer.mozilla.org/en-US/docs/Web/API/Document/createComment>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createDocumentFragment <https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createElement <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera6+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/createElementNS <https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createEvent <https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/createExpression <https://developer.mozilla.org/en-US/docs/Web/API/Document/createExpression>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

.. container:: feature

   `XPathEvaluator/createExpression <https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createExpression>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createNodeIterator <https://developer.mozilla.org/en-US/docs/Web/API/Document/createNodeIterator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/createNSResolver <https://developer.mozilla.org/en-US/docs/Web/API/Document/createNSResolver>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

.. container:: feature

   `XPathEvaluator/createNSResolver <https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/createNSResolver>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createProcessingInstruction <https://developer.mozilla.org/en-US/docs/Web/API/Document/createProcessingInstruction>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createRange <https://developer.mozilla.org/en-US/docs/Web/API/Document/createRange>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/createTextNode <https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/createTreeWalker <https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/doctype <https://developer.mozilla.org/en-US/docs/Web/API/Document/doctype>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/documentElement <https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/documentURI <https://developer.mozilla.org/en-US/docs/Web/API/Document/documentURI>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/evaluate <https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `XPathEvaluator/evaluate <https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/evaluate>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/firstElementChild <https://developer.mozilla.org/en-US/docs/Web/API/Document/firstElementChild>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/firstElementChild <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/firstElementChild>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/firstElementChild <https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/getElementById <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/getElementsByClassName <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/getElementsByTagName <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera5.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/getElementsByTagNameNS <https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagNameNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/implementation <https://developer.mozilla.org/en-US/docs/Web/API/Document/implementation>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Document/importNode <https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/lastElementChild <https://developer.mozilla.org/en-US/docs/Web/API/Document/lastElementChild>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/lastElementChild <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/lastElementChild>`__

   In all current engines.

   .. container:: support

      Firefox25+Safari9+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/lastElementChild <https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/prepend <https://developer.mozilla.org/en-US/docs/Web/API/Document/prepend>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/prepend <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/prepend>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/prepend <https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Document/querySelector <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `DocumentFragment/querySelector <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelector>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/querySelectorAll <https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `DocumentFragment/querySelectorAll <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/querySelectorAll>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `Element/querySelector <https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

.. container:: feature

   `Element/querySelectorAll <https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3.1+Chrome1+

      --------------

      Opera10+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Document/replaceChildren <https://developer.mozilla.org/en-US/docs/Web/API/Document/replaceChildren>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari14+Chrome86+

      --------------

      Opera?Edge86+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `DocumentFragment/replaceChildren <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/replaceChildren>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari14+Chrome86+

      --------------

      Opera?Edge86+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Element/replaceChildren <https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren>`__

   In all current engines.

   .. container:: support

      Firefox78+Safari14+Chrome86+

      --------------

      Opera?Edge86+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Document <https://developer.mozilla.org/en-US/docs/Web/API/Document>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera3+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `DocumentFragment/DocumentFragment <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/DocumentFragment>`__

   In all current engines.

   .. container:: support

      Firefox24+Safari8+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `DocumentFragment/getElementById <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment/getElementById>`__

   In all current engines.

   .. container:: support

      Firefox28+Safari9+Chrome36+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `DocumentFragment <https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `DocumentType/name <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/name>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DocumentType/publicId <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/publicId>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DocumentType/systemId <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType/systemId>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `DocumentType <https://developer.mozilla.org/en-US/docs/Web/API/DocumentType>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/assignedSlot <https://developer.mozilla.org/en-US/docs/Web/API/Element/assignedSlot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Text/assignedSlot <https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/attachShadow <https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/attributes <https://developer.mozilla.org/en-US/docs/Web/API/Element/attributes>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/classList <https://developer.mozilla.org/en-US/docs/Web/API/Element/classList>`__

   In all current engines.

   .. container:: support

      Firefox3.6+Safari7+Chrome22+

      --------------

      Opera11.5+Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView4.4+Samsung Internet?Opera Mobile11.5+

**✔**\ MDN

.. container:: feature

   `Element/className <https://developer.mozilla.org/en-US/docs/Web/API/Element/className>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome22+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/closest <https://developer.mozilla.org/en-US/docs/Web/API/Element/closest>`__

   In all current engines.

   .. container:: support

      Firefox35+Safari6+Chrome41+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)15+IENone

      --------------

      Firefox for Android?iOS Safari9+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/getAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/getAttributeNames <https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNames>`__

   In all current engines.

   .. container:: support

      Firefox45+Safari10.1+Chrome61+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/getAttributeNode <https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/getAttributeNodeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNodeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/getAttributeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttributeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/getElementsByClassName <https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName>`__

   In all current engines.

   .. container:: support

      Firefox3+Safari3.1+Chrome1+

      --------------

      Opera9.5+Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/getElementsByTagName <https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/getElementsByTagNameNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagNameNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android4+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/hasAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/hasAttributeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/hasAttributes <https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttributes>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/id <https://developer.mozilla.org/en-US/docs/Web/API/Element/id>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome23+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/insertAdjacentElement <https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement>`__

   In all current engines.

   .. container:: support

      Firefox48+Safari3+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/insertAdjacentText <https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText>`__

   In all current engines.

   .. container:: support

      Firefox48+Safari4+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari4+Chrome for Android?Android
      WebView2.2+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/localName <https://developer.mozilla.org/en-US/docs/Web/API/Element/localName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/matches <https://developer.mozilla.org/en-US/docs/Web/API/Element/matches>`__

   In all current engines.

   .. container:: support

      Firefox34+Safari8+Chrome33+

      --------------

      Opera21+Edge79+

      --------------

      Edge (Legacy)15+IENone

      --------------

      Firefox for Android34+iOS Safari?Chrome for Android?Android
      WebView4.4+Samsung Internet?Opera Mobile21+

**✔**\ MDN

.. container:: feature

   `Element/namespaceURI <https://developer.mozilla.org/en-US/docs/Web/API/Element/namespaceURI>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/prefix <https://developer.mozilla.org/en-US/docs/Web/API/Element/prefix>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/removeAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/removeAttributeNode <https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/removeAttributeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttributeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/setAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/setAttributeNode <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/setAttributeNodeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNodeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/setAttributeNS <https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttributeNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/shadowRoot <https://developer.mozilla.org/en-US/docs/Web/API/Element/shadowRoot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome35+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/slot <https://developer.mozilla.org/en-US/docs/Web/API/Element/slot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Global_attributes/slot <https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)NoneIE?

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element/tagName <https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Element/toggleAttribute <https://developer.mozilla.org/en-US/docs/Web/API/Element/toggleAttribute>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari12+Chrome69+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Element <https://developer.mozilla.org/en-US/docs/Web/API/Element>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE4+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Event/Event <https://developer.mozilla.org/en-US/docs/Web/API/Event/Event>`__

   In all current engines.

   .. container:: support

      Firefox11+Safari6+Chrome15+

      --------------

      Opera11.6+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12+

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `Event/bubbles <https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/cancelable <https://developer.mozilla.org/en-US/docs/Web/API/Event/cancelable>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/composed <https://developer.mozilla.org/en-US/docs/Web/API/Event/composed>`__

   In all current engines.

   .. container:: support

      Firefox52+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/composedPath <https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath>`__

   In all current engines.

   .. container:: support

      Firefox59+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/currentTarget <https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/defaultPrevented <https://developer.mozilla.org/en-US/docs/Web/API/Event/defaultPrevented>`__

   In all current engines.

   .. container:: support

      Firefox6+Safari5+Chrome5+

      --------------

      Opera11+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile11+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/eventPhase <https://developer.mozilla.org/en-US/docs/Web/API/Event/eventPhase>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/isTrusted <https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari10+Chrome46+

      --------------

      Opera33+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView46+Samsung Internet?Opera Mobile33+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/preventDefault <https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/stopImmediatePropagation <https://developer.mozilla.org/en-US/docs/Web/API/Event/stopImmediatePropagation>`__

   In all current engines.

   .. container:: support

      Firefox10+Safari5+Chrome5+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari5+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/stopPropagation <https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/target <https://developer.mozilla.org/en-US/docs/Web/API/Event/target>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/timeStamp <https://developer.mozilla.org/en-US/docs/Web/API/Event/timeStamp>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView1+Samsung Internet?Opera Mobile12.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event/type <https://developer.mozilla.org/en-US/docs/Web/API/Event/type>`__

   In all current engines.

   .. container:: support

      Firefox1.5+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `Event <https://developer.mozilla.org/en-US/docs/Web/API/Event>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera4+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `EventTarget/EventTarget <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget>`__

   In all current engines.

   .. container:: support

      Firefox59+Safari14+Chrome64+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

      --------------

      Node.js15.0.0+

**✔**\ MDN

.. container:: feature

   `EventTarget/addEventListener <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView1+Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `EventTarget/dispatchEvent <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent>`__

   In all current engines.

   .. container:: support

      Firefox2+Safari3.1+Chrome4+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView4+Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `EventTarget/removeEventListener <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `EventTarget <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

      --------------

      Node.js14.5.0+

**✔**\ MDN

.. container:: feature

   `HTMLCollection/item <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/item>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `HTMLCollection/length <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/length>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `HTMLCollection/namedItem <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection/namedItem>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `HTMLCollection <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `HTMLSlotElement/slotchange_event <https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/slotchange_event>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10.1+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationObserver/MutationObserver <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome26+

      --------------

      Opera15+Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `MutationObserver/disconnect <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/disconnect>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationObserver/observe <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari6+Chrome18+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari6+Chrome for Android?Android
      WebView4.4+Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationObserver/takeRecords <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/takeRecords>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari6+Chrome20+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationObserver <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome26+

      --------------

      Opera15+Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView4.4+Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `MutationRecord/addedNodes <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/addedNodes>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/attributeName <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/attributeName>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/attributeNamespace <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/attributeNamespace>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/nextSibling <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/nextSibling>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/oldValue <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/oldValue>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/previousSibling <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/previousSibling>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/removedNodes <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/removedNodes>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/target <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/target>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord/type <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord/type>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `MutationRecord <https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord>`__

   In all current engines.

   .. container:: support

      Firefox14+Safari7+Chrome16+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/getNamedItem <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItem>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/getNamedItemNS <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/getNamedItemNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/item <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/item>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/length <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/length>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/removeNamedItem <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/removeNamedItem>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/removeNamedItemNS <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/removeNamedItemNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/setNamedItem <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/setNamedItem>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap/setNamedItemNS <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap/setNamedItemNS>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NamedNodeMap <https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap>`__

   In all current engines.

   .. container:: support

      Firefox34+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/appendChild <https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/baseURI <https://developer.mozilla.org/en-US/docs/Web/API/Node/baseURI>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari4+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/childNodes <https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.2+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/cloneNode <https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/compareDocumentPosition <https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari4+Chrome2+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/contains <https://developer.mozilla.org/en-US/docs/Web/API/Node/contains>`__

   In all current engines.

   .. container:: support

      Firefox9+Safari1.1+Chrome16+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/firstChild <https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/getRootNode <https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode>`__

   In all current engines.

   .. container:: support

      Firefox53+Safari10.1+Chrome54+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Node/hasChildNodes <https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/insertBefore <https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/isConnected <https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected>`__

   In all current engines.

   .. container:: support

      Firefox49+Safari10+Chrome51+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet6.0+Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Node/isDefaultNamespace <https://developer.mozilla.org/en-US/docs/Web/API/Node/isDefaultNamespace>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/isEqualNode <https://developer.mozilla.org/en-US/docs/Web/API/Node/isEqualNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/isSameNode <https://developer.mozilla.org/en-US/docs/Web/API/Node/isSameNode>`__

   In all current engines.

   .. container:: support

      Firefox48+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/lastChild <https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android45+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/lookupNamespaceURI <https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupNamespaceURI>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/lookupPrefix <https://developer.mozilla.org/en-US/docs/Web/API/Node/lookupPrefix>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/nextSibling <https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/nodeName <https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeName>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/nodeType <https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/nodeValue <https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeValue>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/normalize <https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/ownerDocument <https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument>`__

   In all current engines.

   .. container:: support

      Firefox9+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/parentElement <https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement>`__

   In all current engines.

   .. container:: support

      Firefox9+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE8+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/parentNode <https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/previousSibling <https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5.5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Node/removeChild <https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/replaceChild <https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1.1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE6+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node/textContent <https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Node <https://developer.mozilla.org/en-US/docs/Web/API/Node>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera7+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator/filter <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/filter>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator/nextNode <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/nextNode>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator/pointerBeforeReferenceNode <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/pointerBeforeReferenceNode>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera15+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `NodeIterator/previousNode <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/previousNode>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator/referenceNode <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/referenceNode>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera15+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile14+

**✔**\ MDN

.. container:: feature

   `NodeIterator/root <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/root>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator/whatToShow <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator/whatToShow>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeIterator <https://developer.mozilla.org/en-US/docs/Web/API/NodeIterator>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeList/forEach <https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach>`__

   In all current engines.

   .. container:: support

      Firefox50+Safari10+Chrome51+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `Reference/Global_Objects/Array/@@iterator <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator>`__

   In all current engines.

   .. container:: support

      Firefox36+Safari10+Chrome51+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. container:: feature

   `NodeList <https://developer.mozilla.org/en-US/docs/Web/API/NodeList>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera8+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `NodeList/item <https://developer.mozilla.org/en-US/docs/Web/API/NodeList/item>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `NodeList/length <https://developer.mozilla.org/en-US/docs/Web/API/NodeList/length>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `ProcessingInstruction/target <https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction/target>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `ProcessingInstruction <https://developer.mozilla.org/en-US/docs/Web/API/ProcessingInstruction>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Range/Range <https://developer.mozilla.org/en-US/docs/Web/API/Range/Range>`__

   In all current engines.

   .. container:: support

      Firefox24+Safari8+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)15+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Range/cloneContents <https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneContents>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/cloneRange <https://developer.mozilla.org/en-US/docs/Web/API/Range/cloneRange>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/collapse <https://developer.mozilla.org/en-US/docs/Web/API/Range/collapse>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/commonAncestorContainer <https://developer.mozilla.org/en-US/docs/Web/API/Range/commonAncestorContainer>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/compareBoundaryPoints <https://developer.mozilla.org/en-US/docs/Web/API/Range/compareBoundaryPoints>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/comparePoint <https://developer.mozilla.org/en-US/docs/Web/API/Range/comparePoint>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Range/deleteContents <https://developer.mozilla.org/en-US/docs/Web/API/Range/deleteContents>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

MDN

.. container:: feature

   `Range/detach <https://developer.mozilla.org/en-US/docs/Web/API/Range/detach>`__

   .. container:: support

      Firefox1–15Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/extractContents <https://developer.mozilla.org/en-US/docs/Web/API/Range/extractContents>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/insertNode <https://developer.mozilla.org/en-US/docs/Web/API/Range/insertNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/intersectsNode <https://developer.mozilla.org/en-US/docs/Web/API/Range/intersectsNode>`__

   In all current engines.

   .. container:: support

      Firefox17+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)17+IENone

      --------------

      Firefox for Android19+iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Range/isPointInRange <https://developer.mozilla.org/en-US/docs/Web/API/Range/isPointInRange>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)15+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Range/selectNode <https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/selectNodeContents <https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNodeContents>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setEnd <https://developer.mozilla.org/en-US/docs/Web/API/Range/setEnd>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setEndAfter <https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndAfter>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setEndBefore <https://developer.mozilla.org/en-US/docs/Web/API/Range/setEndBefore>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setStart <https://developer.mozilla.org/en-US/docs/Web/API/Range/setStart>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setStartAfter <https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartAfter>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/setStartBefore <https://developer.mozilla.org/en-US/docs/Web/API/Range/setStartBefore>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/surroundContents <https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range/toString <https://developer.mozilla.org/en-US/docs/Web/API/Range/toString>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `Range <https://developer.mozilla.org/en-US/docs/Web/API/Range>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `ShadowRoot/delegatesFocus <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus>`__

   In all current engines.

   .. container:: support

      Firefox94+Safari15+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `ShadowRoot/host <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `ShadowRoot/mode <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10.1+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `ShadowRoot/slotAssignment <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/slotAssignment>`__

   In all current engines.

   .. container:: support

      Firefox92+Safari16.4+Chrome86+

      --------------

      Opera?Edge86+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `ShadowRoot <https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `StaticRange/StaticRange <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/StaticRange>`__

   In all current engines.

   .. container:: support

      Firefox71+Safari13.1+Chrome90+

      --------------

      Opera?Edge90+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `StaticRange <https://developer.mozilla.org/en-US/docs/Web/API/StaticRange>`__

   In all current engines.

   .. container:: support

      Firefox69+Safari10.1+Chrome60+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)18IENone

      --------------

      Firefox for Android79+iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Text/Text <https://developer.mozilla.org/en-US/docs/Web/API/Text/Text>`__

   In all current engines.

   .. container:: support

      Firefox24+Safari8+Chrome29+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)16+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

**✔**\ MDN

.. container:: feature

   `Text/splitText <https://developer.mozilla.org/en-US/docs/Web/API/Text/splitText>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView1+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Text/wholeText <https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText>`__

   In all current engines.

   .. container:: support

      Firefox3.5+Safari4+Chrome2+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Text <https://developer.mozilla.org/en-US/docs/Web/API/Text>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IE5+

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/currentNode <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/currentNode>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/filter <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/filter>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/firstChild <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/firstChild>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/lastChild <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/lastChild>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/nextNode <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextNode>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/nextSibling <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/nextSibling>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/parentNode <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/parentNode>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/previousNode <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousNode>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/previousSibling <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/previousSibling>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/root <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/root>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker/whatToShow <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker/whatToShow>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `TreeWalker <https://developer.mozilla.org/en-US/docs/Web/API/TreeWalker>`__

   In all current engines.

   .. container:: support

      Firefox4+Safari3+Chrome1+

      --------------

      Opera9+Edge79+

      --------------

      Edge (Legacy)12+IE9+

      --------------

      Firefox for Android?iOS Safari3+Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile10.1+

**✔**\ MDN

.. container:: feature

   `XMLDocument <https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari10+Chrome34+

      --------------

      Opera21+Edge79+

      --------------

      Edge (Legacy)12+IE11

      --------------

      Firefox for Android?iOS Safari10+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile21+

**✔**\ MDN

.. container:: feature

   `XPathEvaluator/XPathEvaluator <https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator/XPathEvaluator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathEvaluator <https://developer.mozilla.org/en-US/docs/Web/API/XPathEvaluator>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathExpression/evaluate <https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression/evaluate>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathExpression <https://developer.mozilla.org/en-US/docs/Web/API/XPathExpression>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/booleanValue <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/booleanValue>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/invalidIteratorState <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/invalidIteratorState>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/iterateNext <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/iterateNext>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/numberValue <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/numberValue>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/resultType <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/resultType>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView37+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/singleNodeValue <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/singleNodeValue>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/snapshotItem <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotItem>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/snapshotLength <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/snapshotLength>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult/stringValue <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult/stringValue>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XPathResult <https://developer.mozilla.org/en-US/docs/Web/API/XPathResult>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari1+Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/XSLTProcessor <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/XSLTProcessor>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/clearParameters <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/clearParameters>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/getParameter <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/getParameter>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/importStylesheet <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/importStylesheet>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/removeParameter <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/removeParameter>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/reset <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/reset>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/setParameter <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/setParameter>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/transformToDocument <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/transformToDocument>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor/transformToFragment <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor/transformToFragment>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `XSLTProcessor <https://developer.mozilla.org/en-US/docs/Web/API/XSLTProcessor>`__

   In all current engines.

   .. container:: support

      Firefox1+Safari3.1+Chrome1+

      --------------

      Opera12.1+Edge79+

      --------------

      Edge (Legacy)12+IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView3+Samsung Internet?Opera Mobile12.1+

**✔**\ MDN

.. container:: feature

   `Element/slot <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot>`__

   In all current engines.

   .. container:: support

      Firefox63+Safari10+Chrome53+

      --------------

      Opera?Edge79+

      --------------

      Edge (Legacy)?IENone

      --------------

      Firefox for Android?iOS Safari?Chrome for Android?Android
      WebView?Samsung Internet?Opera Mobile?

.. |WHATWG| image:: https://resources.whatwg.org/logo-dom.svg
   :class: darkmode-aware
   :height: 100px
   :target: https://whatwg.org/
