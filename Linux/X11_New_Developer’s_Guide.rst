
X.Org Development
-----------------

   This page has general information on X development, including how
   to get started.

   A common misconception is that developers need to understand all
   of X to get started. This is not true, and even of the "core"
   developers, only few actually know all the pieces that put X
   together. The best way to get started is to simply pick a problem
   and give it a try.

   There is also a new book in the Amazon Kindle format, 
   `Hands-on Projects for the Linux Graphics Subsystem <http://www.amazon.com/dp/B007QJKOGS/ref=rdr_ext_sb_ti_hist_1>`__.
   This includes a number of original projects on the X.Org
   implementation of the Linux graphics subsystem. The book is aimed
   for instructors, students and any other OS internals enthusiasts.

   - `X New Developer's Guide <https://www.x.org/wiki/guide/>`__: 
      High level introduction to X and the surrounding graphics stack, 
      and how to get started in developing for them.

   - `Xplain: Explaining X11 for the rest of us <http://magcius.github.io/xplain/article/>`__: 
      Another introduction to X, with interactive examples - work in progress.

   - `Glossary <https://www.x.org/wiki/Development/Documentation/Glossary/>`__: 
      Various terms used in X, and what they mean.

   - `Building the X Window System <https://www.x.org/wiki/Building_the_X_Window_System/>`__: 
      For builders and developers working on the X.Org source tree

   - `Submitting patches <https://www.x.org/wiki/Development/Documentation/SubmittingPatches/>`__: 
      How to submit a patch to an Xorg project.

   - `Making a release <https://www.x.org/wiki/Development/Documentation/ReleaseHOWTO/>`__: 
      How to make an individual module release.

   - `Writing
      documentation <https://www.x.org/wiki/Development/Documentation/WritingDocumentation/>`__: 
         How to document your work in X.

   - `X server source
      layout <https://www.x.org/wiki/Development/Documentation/XserverSourceLayout/>`__: 
         A map to the different directories in the X server source

   - `The devPrivates system <https://www.x.org/wiki/Development/Documentation/DevPrivates/>`__: 
      All about the private storage system in the server.

   - `Wrapping functions <https://www.x.org/wiki/Development/Documentation/WrappingFunctions/>`__: 
      How to add hooks to functions in the server.

   - `Grab processing <https://www.x.org/wiki/Development/Documentation/GrabProcessing/>`__: 
      How input grabs are dealt with in the server.

   - `Cursor handling <https://www.x.org/wiki/Development/Documentation/CursorHandling/>`__:
      Introduction into DIX cursor handling.

   - `Input event processing <https://www.x.org/wiki/Development/Documentation/InputEventProcessing/>`__: 
      How input events are dealt with in the server.

   - `Security <https://www.x.org/wiki/Development/Documentation/Security/>`__: 
      How to make use of the security facilities within X.

   - `Performance <https://www.x.org/wiki/Development/Documentation/Performance/>`__: 
      A fairly detailed document explaining what our performance problems
      actually are, and things that aren't performance problems at all.

   - `Xorg input driver HOWTO <https://www.x.org/wiki/Development/Documentation/XorgInputHOWTO/>`__:
      How to write an input driver for X.Org.

   - `How video cards work <https://www.x.org/wiki/Development/Documentation/HowVideoCardsWork/>`__: 
      A conceptual overview.

   - `Kdrive Drivers <https://www.x.org/wiki/Development/Documentation/KdriveDrivers/>`__: 
      notes for making new kdrive video drivers

   - `Dri Wiki <http://dri.freedesktop.org/wiki/>`__: Information
      about using the Direct Rendering Infrastructure (DRI) with X.

   - `Multiseat <https://www.x.org/wiki/Development/Documentation/Multiseat/>`__: 
      Various informations about how to obtain and develop such model.

   - `Deprecated and obsolete <https://www.x.org/wiki/Development/Documentation/Obsolescence/>`__:
      Notes on deprecated and obsolete extensions and server-side stuff.

   - `More Xorg Documentation <https://www.x.org/wiki/XorgDeveloperDocumentation/>`__:
      Some pointers from deep in the Wiki. This page should possibly
      be moved into Development/Documentation.

   - `Pointer acceleration <https://www.x.org/wiki/Development/Documentation/PointerAcceleration/>`__:
      information on the pointer accel mechanism.

Tools
~~~~~

   - `Using git <https://www.x.org/wiki/Development/Documentation/git/>`__: Information on using git.
   - `Server debugging <https://www.x.org/wiki/Development/Documentation/ServerDebugging/>`__: 
      How to debug the X server with gdb.
   - `Server profiling <https://www.x.org/wiki/Development/Documentation/ServerProfiling/>`__: 
      How to profile the X server.
   - `Using ctags to find functions <https://www.x.org/wiki/Development/Documentation/UsingCtags/>`__:
      Some tips to find a function in vim.
   - `Using Eclipse <https://www.x.org/wiki/Development/Documentation/UsingEclipse/>`__: 
      Some tips to use Eclipse to develop X.Org.

Various Projects
~~~~~~~~~~~~~~~~

   - `PciReworkHowto <https://www.x.org/wiki/PciReworkHowto/>`__: How to fix a video driver to use libpciaccess
   - `VgaArbiter <https://www.x.org/wiki/VgaArbiter/>`__: Routing VGA instructions correctly.
   - `Xv2, Render API <https://www.x.org/wiki/Development/Xv2/>`__: a long rambling discussion about giving Pictures GCs, and moving Xv to Render + RandR.
   - `X12 <https://www.x.org/wiki/Development/X12/>`__: a list of things we'd fix if we ever get around to a new version of the core X protocol

Helping out
~~~~~~~~~~~

   - `? <https://secure.freedesktop.org/write/xorg/ikiwiki.cgi?do=create&from=Development&page=Development%2FContributionHOWTO>`__\ 
      ContributionHOWTO: How to get started contributing bug reports, patches, 
      fixes, or even entire drivers.
   - `ToDo <https://www.x.org/wiki/ToDo/>`__: Things that need doing.
   - `Janitor <https://www.x.org/wiki/Development/Janitor/>`__ Xorg Janitor project page


The X New Developer’s Guide
---------------------------

   .. figure:: https://www.x.org/wiki/guide/cover/front-cover.jpg
      :target: https://www.x.org/wiki/guide/
      :width: 743px
      :height: 968px

   .. Note::

      Last edited Sun 14 Jul 2013 05:33:55 PM UTC


   Script to transform format:

   .. code:: bash

      while read -r it;
      do
         echo $it >> $0
         curl -L "$it" \
         | sed -n '/pagebody/,/pagefooter/p' \
         | pandoc -t rst -r html >> $0
      done <<EOF
      https://www.x.org/wiki/guide/cover
      https://www.x.org/wiki/guide/preface
      https://www.x.org/wiki/guide/concepts
      https://www.x.org/wiki/guide/communication
      https://www.x.org/wiki/guide/extensions
      https://www.x.org/wiki/guide/client-ecosystem
      https://www.x.org/wiki/guide/xlib-and-xcb
      https://www.x.org/wiki/guide/using-extensions
      https://www.x.org/wiki/guide/hutterer-kbd
      https://www.x.org/wiki/guide/fonts
      https://www.x.org/wiki/guide/debugging
      https://www.x.org/wiki/guide/contributing
      https://www.x.org/wiki/guide/documentation
      https://www.x.org/wiki/guide/other-info
      EOF
      exit

::

   - Cover
   - Preface
   - X Window System Concepts

      - X Is Client / Server
      - X In Practice

         - Input
         - GetImage: Reading From the Display
         - Output
         - Displays and Screens
         - Graphics contexts
         - Colors (really?) and Visuals
         - Syncing and Flushing connections
         - Window System Objects
         - Grabs
         - Selections, Cut-Copy-Paste

   - Communication Between Client and Server

      - X Protocol Security model
      - Authentication methods
      - Access control within the X server

   - Modern Extensions To X

      - XKB
      - Xinput 2
      - Composite
      - RandR and Xinerama
      - SYNC

   - The X Client Ecosystem

      - The Structure of an X Client Application
      - Building X client code
      - X libraries

         - XCB family of protocol and utility libraries
         - Xlib family of protocol and utility libraries
         - X Toolkit Intrinsics and legacy toolkits
         - Libraries for related protocols
         - Utility libraries

   - Xlib and XCB

      - Example: Converting xwininfo from Xlib to XCB
      - Mixing Xlib & XCB calls
      - Example: Converting xdpyinfo extension queries to XCB
      - Extension libraries
      - API documentation

   - Using Extensions

      - Example: Using an extension from an xcb-based
         client
      - Example: Using an extension from an Xlib-based
         client

   - The X Keyboard Extension

      - RMLVO and Kccgst

         - RMLVO
         - Kccgst

      - Converting from RMLVO to Kccgst
      - Key processing

   - Fonts

      - Core Font subsystem
      - Client-side fonts

   - Debugging Client-Server Interactions

      - Event reporting
      - The X-Resource extension
      - Protocol monitors
      - System level tracing

   - Contributing To X
   - Developer Documentation

      - Doxygen
      - Docbook/XML
      - Manual Pages
      - Wiki
      - Conclusions

   - Appendix: Other Sources of Information



Preface
-------

   https://www.x.org/wiki/guide/preface

   *Bart Massey*

   This is a guide intended to orient new developers in the world of
   the X Window System.

   That's asking a lot.

   X is big and old. The distribution crossed a hundred thousand
   lines of C code back when that meant something, before there was
   an Internet to distribute it on: just reel tapes and dialup modem
   lines. X version 11, the one that matters, is celebrating its 25th
   birthday this year.

   Big old systems are hard to understand. They grow and evolve. The
   more used they are, the faster growth and evolution happens. X is
   the third-most-used desktop environment in the world---and has
   been for most of its lifetime. There are millions of desktops
   running X right now, and the system is still adapting and changing
   to meet new needs of its users.

   On the other hand, compared to similar large legacy software
   systems, there are some things that make getting into X easy. X is
   dominated by the C programming language. For all its faults, this
   is barely a legacy language: there are many, many more active C
   programmers today than when X began. X was exceptionally
   well-designed, and has been carefully redesigned and reimplemented
   in a modular and professional fashion as it has grown. The famous
   split between display and application that allows X to run over a
   network turns out to have an even more important purpose: it
   splits the X implementation into two parts connected by a
   formally-defined and well-understood interface. Within both the
   server and the client side, there is clear separation of codebases
   and code responsibilities, and that modularity actually seems to
   be increasing as the codebase grows.

   There's a lot of documentation out there for X. Sadly, much of it
   is old and stale, or was just not that well written in the first
   place. The good news is that many of the people who have worked on
   the design and implementation of X are still around, and still
   active in X development. Even better, they are a substantial
   fraction of the entire X developer base.

   Let me say that again. A very few very smart people, over a 25
   year period, have built most of the key X infrastructure, and
   these same people continue to build a lot of it today.

   Keith Packard, "the Linus Torvalds of X" if there is such a thing,
   once pointed out to me that there were, in its heyday, many times
   more active developers of Fetchmail than of X. In terms of amount
   of productive work per unit coder, I would put X up against any
   project, open source or proprietary, that I have ever come across.
   A few dozen people still do most of the maintenance of the
   multi-million-line "core X" codebase, many of them working only in
   their spare time. (X toolkits and applications long ago split off
   from the core, and formed their own extremely large and vibrant
   communities. Core X just continued along, mostly unaffected by
   this sea change.)

   If you are thinking of doing X development, here is what you
   should understand: this disproportion of core developers is a
   tremendous opportunity for you. There is a huge amount of
   interesting, exciting work to be done. Because you will be working
   with well-understood technologies in a well-constructed setting,
   the work tends to be as much conceptual as it is labor-intensive:
   there are plenty of places you can design interesting things and
   then build them quickly. Because there is such a need for
   developers, and because they are genuinely nice and brilliant
   people, the founding architects of the systems that you will be
   working with are excited to help you get started---often on a
   one-on-one basis. Because the project is so widely deployed, you
   will have direct, visible impact on a huge userbase all over the
   world.

   A lot of this is what open source in general promises its
   developers. X, in my experience as a developer and in watching
   other new X developers, delivers on these promises.

   Sure, getting started as an X developer is a little tricky.
   Hopefully this book can help; certainly the X community can. Let
   me assure you of this, though: the learning curve is easier than
   you think, and the payoffs are greater. If you persist, you will
   befriend some great people and build some things that you will be
   proud of for the rest of your life.

   So yeah, it's asking a lot. Try it anyway. Check out the book. Ask
   questions. Build things.

   Dive in and get started.

   —Bart Massey, Portland Oregon USA, March 2012


X Window System Concepts
------------------------

   https://www.x.org/wiki/guide/concepts

   *Alan Coopersmith*

   ::

      #. X Is Client / Server
      #. X In Practice

         #. Input

            #. Input via Keyboard
            #. Input via Mouse
            #. Input via Touchpad
            #. Input via Touchscreen
            #. Advanced Input Devices and Techniques

         #. GetImage: Reading From the Display
         #. Output

            #. Rendering / Rasterization

         #. Displays and Screens
         #. Graphics contexts
         #. Colors (really?) and Visuals
         #. Syncing and Flushing connections
         #. Window System Objects

            #. Windows
            #. Pixmaps
            #. Widgets
            #. XIDs
            #. Atoms
            #. Properties

         #. Grabs
         #. Selections, Cut-Copy-Paste

   This chapter aims to introduce you to the basic X Window System
   concepts and terminology you will need to understand. When you
   have these concepts, you will be ready to dive deeper into
   specific topics in later chapters.

   .. image:: https://www.x.org/wiki/guide/xorg.svg
      :width: 80.0%


X Is Client / Server
~~~~~~~~~~~~~~~~~~~~

   The X Window System was designed to allow multiple programs to
   share access to a common set of hardware. This hardware includes
   both input devices such as mice and keyboards, and output devices:
   video adapters and the monitors connected to them. A single
   process was designated to be the controller of the hardware,
   multiplexing access to the applications. This controller process
   is called the X server, as it provides the services of the
   hardware devices to the client applications. In essence, the
   service the Xserver provides is access, through the keyboard,
   mouse and display, to the X user.

   Like many client/server systems, the X server typically provides
   its service to many simultaneous clients. The X server runs longer
   than most of the clients do, and listens for incoming connections
   from new clients.

   Many users will only ever use X on a standalone laptop or desktop
   system. In this setting, the X clients run on the same computer as
   the X server. However, X defines a stream protocol for clients /
   server communication. This protocol can be exposed over a network
   to allow clients to connect to a server on a different machine.
   Unfortunately, in this model, the client/server labeling can be
   confusing. You may have an X server running on the laptop in front
   of you, displaying graphics generated by an X client running on a
   powerful machine in a remote machine room. For most other
   protocols, the laptop would be a client of file sharing, http or
   similar services on the powerful remote machine. In such cases, it
   is important to remind yourself that keyboards and mice connect to
   the X server. It is also the one endpoint to which all the clients
   (terminal windows, web browsers, document editors) connect.

X In Practice
~~~~~~~~~~~~~

   This section describes some of the fundamental pieces of X and how
   they work. This is one of those places where everything wants to
   be presented at once, so the section is something of a mish-mash.
   Recommended reading practice is to skim it all once, and then go
   back and read it all again.

Input
~~~~~

   As mentioned earlier, the X server primarily handles two kinds of
   hardware: input devices and output devices. Surprisingly, the
   input handling tends to be the more difficult and complicated of
   the two. Input is multi-source, concurrent, and highly dependent
   on complex user preferences.

Input via Keyboard
~~~~~~~~~~~~~~~~~~

   One of the tasks the X server performs is handling typing on
   keyboards and sending the corresponding key events to the
   appropriate client applications. In a simple X configuration, one
   client at a time has the "input focus" and most key events will go
   to that client. Depending on window manager configuration, focus
   may be moved to another window by simply moving the mouse to
   another window, clicking the mouse, using a hotkey, or by
   manipulating a panel showing available clients. The client with
   focus is usually highlighted in some way, so that the user can
   know where their input will go. Clients may use "grabs" (described
   later in this chapter) to override the default delivery of key
   events to the focused client.

   There are a wide variety of keyboards in the world. This is due to
   differing language requirements, to differing national standards,
   and to hardware vendors trying to differentiate their product.
   This variety makes the mapping of key events from hardware "key
   codes" into text input a challenging and complex process. The X
   server reports a simple 8-bit keycode in key press and release
   events. The server also provides a keyboard mapping from those
   keycodes to "KeySyms" representing symbolic labels on keys ("A",
   "Enter", "Shift", etc.). Keycodes have no inherent meaning outside
   a given session; the same key may generate different code values
   on different keyboards, servers, configurations, or operating
   systems. KeySym values are globally-assigned constants, and are
   thus what most applications should be concerned with. The X
   Keyboard (XKB) extension provides complex configuration and layout
   handling, as well as additional key handling functionality that
   was missing in the original protocol. Xlib and toolkits also
   provide input methods for higher level input functions, such as
   compose key handling or mapping key sequences to complex
   characters (for example, Asian language input).

Input via Mouse
~~~~~~~~~~~~~~~

   The X protocol defines an input "pointer" (no relation to the
   programming concept). The pointer is represented on screen by a
   cursor; it is usually controlled by a mouse or similar input
   device. Applications can control the cursor image. The core
   protocol contains simple 2-color cursor image support. The Render
   extension provides alpha-blended 32-bit color cursor support; this
   support is normally accessed through libXcursor.

   Pointer devices report motion events and button press and release
   events to clients. The default configuration of the Xorg server
   has a single pointer. This pointer aggregates motion and button
   events from all pointer-type devices attached to the server: for
   example, a laptop's touchpad and external USB mouse. Users can use
   the MultiPointer X (MPX) functionality in Xinput extension 2.0 to
   enable multiple cursors and assign devices to each one. With MPX,
   each pointer has its own input focus. Each pointer is paired with
   keyboards that provide input to the client that has the input
   focus for that pointer.

Input via Touchpad
~~~~~~~~~~~~~~~~~~

   For basic input, a touchpad appears to clients as just another
   device for moving the pointer and generating button events.
   Clients who want to go beyond mouse emulation can use the Xinput
   extension version 2.2 (shipped with Xorg 1.12) or later to enable
   support for multitouch event reporting.

Input via Touchscreen
~~~~~~~~~~~~~~~~~~~~~

   [XXX write me --po8]

Advanced Input Devices and Techniques
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   [Make whot write this? or steal from http://who-t.blogspot.com?
   --alanc]

GetImage: Reading From the Display
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The X server does not keep track of what it has drawn on the
   display. Once bits are rendered to the frame buffer, its
   responsibility for them has ended. If bits need to be re-rendered
   (for example, because they were temporarily obscured), the X
   server asks a client---usually either a compositing manager or the
   application that originally drew them---to draw them again.

   In some situations, most notably when taking "screenshots", a
   client needs to read back the contents of the frame buffer
   directly. The X protocol provides a GetImage request for this
   case.

   GetImage has a number of drawbacks, and should be avoided unless
   it is absolutely necessary. GetImage is typically extremely slow,
   since the hardware and software paths in modern graphics are
   optimized for the case of outputting pixels at the expense of
   rendering them. GetImage is also hard to use properly. Here, more
   than anywhere else in the X protocol, the underlying hardware is
   exposed to clients. The requested frame buffer contents are
   presented to the client with the frame buffer's alignment, padding
   and byte ordering. Generic library code is available in Xlib and
   XCB to deal with the complexity of translating the received frame
   buffer into something useful. However, using this code further
   slows processing.

Output
~~~~~~

Rendering / Rasterization
~~~~~~~~~~~~~~~~~~~~~~~~~

   The X protocol originally defined a core set of primitive
   rendering operations, such as line drawing, polygon filling, and
   copying of image buffers. These did not evolve as graphics
   hardware and operations expected by modern applications moved on,
   and are thus now mainly used in legacy applications.

   Modern applications use a variety of client side rendering
   libraries, such as Cairo for rendering 2D images or OpenGL for 3D
   rendering. These may then push images to the X server for display,
   or use DRI to bypass the X server and interact directly with local
   video hardware, taking advantage of GPU acceleration and other
   hardware features.

Polygon Rendering Model
~~~~~~~~~~~~~~~~~~~~~~~

Displays and Screens
~~~~~~~~~~~~~~~~~~~~

   X divides the resources of a machine into Displays and Screens. A
   Display is typically all the devices connected to a single X
   server, and displaying a single session for a single user. Systems
   may have multiple displays, such as multi-seat setups, or even
   multiple virtual terminals on a system console. Each display has a
   set of input devices, and one or more Screens associated with it.
   A screen is a subset of the display across which windows can be
   displayed or moved - but windows cannot span across multiple
   screens or move from one screen to another. Input devices can
   interact with windows on all screens of an X server, such as
   moving the mouse cursor from one screen to another. Originally
   each Screen was a single display adaptor with a single monitor
   attached, but modern technologies have allowed multiple devices to
   be combined into logical screens or a single device split.

   When connecting a client to an X server, you must specify which
   display to connect to, either via the $DISPLAY environment
   variable or an application option such as -display or --display.
   The full DISPLAY syntax is documented in the X(7) man page, but a
   typical display syntax is: hostname:display.screen The "hostname"
   may be omitted for local connections, and ".screen" may also be
   left off to use the default screen, leaving the minimal display
   specification of :display, such as ":0" for the normal default X
   server on a machine.

Graphics contexts
~~~~~~~~~~~~~~~~~

   A graphics context (GC) is a structure to store shared state and
   common values for X drawing operations, to avoid having to resend
   the same parameters with each request. Clients can allocate
   additional graphics contexts as necessary to be able to specify
   different values by setting up a separate GC for each set of
   values and then just specifying the appropriate GC for each
   operation.

Colors (really?) and Visuals
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   X is so old that when it was designed most users had monochrome
   displays, with just black and white pixels to choose from, and
   even then hardware manufacturers couldn't agree which was 0 and
   which was 1. Those who spent an extra thousand dollars more would
   have 4 or 8 bit color, allowing pixels to be chosen from a palette
   of up to 256 colors. But now it's 2012, and anyone without 32-bits
   of color data per pixel is a luddite. Still, a lot of complexity
   remains here that someone should explain...

Syncing and Flushing connections
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   As described in the Communication chapter, the X protocol tries to
   avoid latency by doing as much asynchronously as possible. This is
   especially noticed by new programmers who call rendering functions
   and then wonder why they got no errors but did not see the
   expected output appear. Since drawing operations do not require
   waiting for a response from the X server, they are just placed in
   the clients outgoing request buffer and not sent to the X server
   until something causes the buffer to be flushed. The buffer will
   be automatically flushed when filled, but it takes a lot of
   commands to fill the default 32kb buffer size in Xlib. Xlib and
   XCB will flush the buffer when a function is called that blocks
   waiting for a response from the server (though which functions
   those are differ between the two due to the different design
   models - see the Xlib and XCB chapter for details). Lastly,
   clients can specifically call XFlush() in Xlib or xcb_flush() in
   XCB to send all the queued requests from the buffer to the server.
   To both flush the buffer and wait for the X server to finish
   processing all the requests in the buffer, clients can call
   XSync() in Xlib or xcb_aux_sync() in XCB.

Window System Objects
~~~~~~~~~~~~~~~~~~~~~

   A variety of objects are used by X.

Windows
~~~~~~~

   In X, a window is simply a region of the screen into which drawing
   can occur. Windows are placed in a tree hierarchy, with the root
   window being a server created window that covers the entire screen
   surface and which lives for the life of the server. All other
   windows are children of either the root window or another window.
   The UI elements that most users think of as windows are just one
   level of the window hierarchy.

   At each level of the hierarchy, windows have a stacking order,
   controlling which portions of windows can be seen when sibling
   windows overlap each other. Clients can register for Visibility
   notifications to get an event whenever a window becomes more or
   less visible than it previously was, which they may use to
   optimize to only draw the visible portions of the window.

   Clients running in traditional X environments will also receive
   Expose events when a portion of their window is uncovered and
   needs to be drawn because the X server does not know what contents
   were there. When the composite extension is active, clients will
   normally not receive expose events since composite puts the
   contents of each window in a separate, non-overlapped offscreen
   buffer, and then combines the visible segments of each window
   onscreen for display. Since clients cannot control when they will
   be used in a composited vs. legacy environment, they must still be
   prepared to handle Expose events on windows when they occur.

Pixmaps
~~~~~~~

   A pixmap, like a window, is a region into which drawing can occur.
   Unlike windows, pixmaps are not part of a hierarchy and are not
   displayed on screen directly. Pixmap contents may be copied to
   windows for display, either directly via requests such as
   CopyArea, or automatically by setting a Window's background to be
   a given pixmap. Pixmaps may be stored in system memory, video
   memory on a graphics adaptor, or shared memory accessible by both
   client and server. A given pixmap may be moved back and forth
   between system and video memory as needed to maintain a good cache
   of recently accessed pixmaps in faster access video RAM. Using the
   MIT-SHM extension to store a pixmap in shared memory may allow the
   client to push updates faster, by operating directly on the shared
   memory region instead of having to copy the data through a socket
   to the server, but it may also prevent the server from moving the
   pixmap into the cache in video ram, making copies to a window on
   the screen slower.

Widgets
~~~~~~~

   Applications need more than windows and pixmaps to provide a user
   interface - users expect to see menus, buttons, text fields,
   menus, etc. in their windows. These user interface elements are
   collectively called widgets in most environments. X does not
   actually provide any widgets in the core protocol or libraries,
   only the building blocks such as rendering methods and input
   events for them to be built with. Toolkits such as Qt and GTK+
   provide a common set of widgets for applications to build with,
   and a rich set of functionality to provide good support for a wide
   range of uses and users, including those who read different
   languages or need accessibility technology in order to use your
   application. Some toolkits have utilized all the infrastructure X
   provides around window stacking and positioning by making each
   widget a separate window, but most modern toolkits do this
   management client side now instead of pushing it to the X server.

XIDs
~~~~

   Many resources managed by the server are assigned a 32-bit
   identification number, called an XID, from a server-wide
   namespace. Each client is assigned a range of identifiers when it
   first connects to the X server, and whenever it sends a request to
   create a new Window, Pixmap, Cursor or other XID-labeled resource,
   the client (usually transparently in Xlib or xcb libraries) picks
   an unused XID from it's range and includes it in the request to
   the server to identify the object created by this request. This
   allows further requests operating on the new resource to be sent
   to the server without having to wait for it to process the
   creation request and return an identifier assignment. Since the
   namespace is global to the Xserver, clients can reference XID's
   from other clients in some contexts, such as moving a window
   belonging to another client.

Atoms
~~~~~

   In order to reduce the retransmission of common strings in the X
   protocol, a simple lookup table mechanism is used. Entries in this
   table are known as Atoms, and have an integer key that is passed
   in most protocol operations requiring them, and a text string that
   can be retrieved as needed. The InternAtom operation searches
   finds the Atom id number for a given string, and can optionally
   add the string to the table and return a new id if it's not
   already found. The GetAtomName returns the string for a given atom
   id number. Atoms are used in a wide variety of requests and
   events, but have a unique namespace across all operations and
   clients of a given X server.

Properties
~~~~~~~~~~

   A common design pattern in X for providing extensible metadata is
   the Property mechanism. A property is a key value pair, where the
   key is a text string, represented as an X atom, and the value is a
   typed value, which may also be an atom, an integer, or some other
   type. The core protocol provides properties on windows and fonts.
   The Xinput extension adds properties to input devices, while the
   Xrandr extension adds properties to output devices.

   X itself does not assign any meaning or purpose to window
   properties. However conventions have been established for many
   window properties to provide metadata that is useful for window
   and session management. The initial set of properties is defined
   in the X Inter-Client Communication Conventions Manual (ICCCM),
   which may be found at http://www.x.org/releases/current/doc/. This
   initial set was later extended by groups working on common
   functionality for modern desktop environments at freedesktop.org,
   which became the Extended Window Manager Hints (EWMH)
   specification, found at
   http://www.freedesktop.org/wiki/Specifications/wm-spec.

Grabs
~~~~~

   Grabs in X provide locking and reservation capabilities. "Active
   Grabs" take exclusive control of a given resource immediately and
   lock out all other clients until the grab is released. "Passive
   grabs" place a reservation on a resource, causing an active grab
   to be triggered at a later time, when an event occurs, such as a
   keypress. These can be used for instance, to have a hotkey that
   goes to a certain application regardless of which application
   currently has input focus.

   One of the available grabs is the Server Grab. A client who grabs
   the server locks out all other clients, preventing any other
   application from being able to update the display or interact with
   the user until the server grab is released. This should be
   released as soon as possible, since besides annoying users when
   they can't switch to another program, it may also cause security
   problems, since the screen lock is just another client and will be
   locked out with the rest.

   The other primary form of grab is on an input device or event.
   Clients can actively grab the keyboard or mouse to force getting
   all input from a device, even if the cursor moves outside the
   application's window. Passive grabs can be placed on specific
   input events, such as a particular keypress event or mouse button
   event, causing a primary grab to automatically occur for that
   client when the event happens.

   More information can be found in
   http://who-t.blogspot.com/2010/11/high-level-overview-of-grabs.html.

Selections, Cut-Copy-Paste
~~~~~~~~~~~~~~~~~~~~~~~~~~

   [copy-and-paste from http://keithp.com/~keithp/talks/selection.ps
   and other docs on http://www.x.org/wiki/CutAndPaste ? ]



Communication Between Client and Server
---------------------------------------

   https://www.x.org/wiki/guide/communication

   *Alan Coopersmith*

   ::

      #. Communication Between Client and Server
      #. X Protocol Security model

         #. Authentication methods

            #. xhost
            #. xauth

         #. Access control within the X server

   The X client libraries and server infrastructure handle most of
   the details of encoding, decoding and transmitting the X protocol.
   However, a basic understanding of the communication model is often
   needed to be able to develop and debug X clients, server code and
   driver code.

   The communications channel between an X client and server is
   full-duplex: either side can send a message to the other at any
   time. This is canonically implemented over a TCP/IP socket
   interface, though other communications channels are often used,
   including Unix domain sockets, named pipes and shared memory. The
   channel must provide a reliable, ordered byte stream---the X
   protocol provides no mechanism for reordering or resending
   packets. For TCP/IP connections, for example, TCP is used rather
   than UDP.

   The messages sent over the X communications channel are defined by
   the X Protocol, Version 11: X11 for short. This protocol was
   originally published in 1987. While it has been extended greatly
   over the past 25 years, the core protocol is still compatible with
   the original definition. The protocol specification documents can
   be read at http://www.x.org/releases/current/doc/ .

   One of the key features of the X11 protocol is its extension
   mechanism. While the core protocol has seen some minor
   backward-compatible changes over the years, most evolution happens
   via optional extensions to the protocol. The core protocol
   provides a mechanism to list and query the extensions supported by
   the X server, and for those extensions to add their messages to
   the set supported in communications between client and server.
   Server builders can choose which extensions to support, and
   developers can add or remove extensions over time as use cases
   evolve, without having to worry about breaking compatibility with
   the core protocol. Clients need to check for extensions they
   require. If an extension is not present (at an appropriate version
   level), the client may either fall back to providing a less
   functional interface, or inform the user that the extension is
   missing and fail.

   When an X client first connects to the X server, a handshaking
   procedure occurs to establish the channel, to verify that the
   client is authenticated to connect, and to set some communication
   parameters, such as the byte-endianness to be used. In the early
   days of X, it was assumed that the server was a highly capable
   machine and the client was not. Thus, interestingly, the client
   may ask the server to provide whichever endianness the client
   prefers: the server will byte-swap requests and responses as
   needed.

   After that, the client sends request messages to the X server,
   asking the server to perform an operation or to provide some
   information to the client. Clients typically accumulate requests
   in a buffer, sending them in batches for more efficient
   communication handling and context switching. This buffer is
   normally provided and managed by Xlib or XCB for the client; the
   client application often needs to flush buffered requests to the X
   server to ensure timely processing.

   The X server processes the requests from each client in the order
   received from that client. However, the server is typically
   multiplexing requests from multiple clients at any given time, and
   does not guarantee any ordering between clients unless special
   requests are made to ensure that. Both server and client keep
   track of the number of requests sent on their connection so far,
   and use that number as a sequence number for each request to
   identify it later.

   The server sends responses to the client. Many requests from
   clients are simply handled by the X server, and result in nothing
   being returned to the client if all goes well. If a request is
   defined to return information, the server sends a response called
   a reply to the client. The sequence number of the reply identifies
   the request to which the reply data is a response. Clients may
   have sent many requests at once to the X server, and be waiting
   for the responses asynchronously. The replies will come back in
   order, but the client needs to remember the request sequence
   number to map the reply back to the request that was made.

   If there is a problem handling a request, then the X server will
   send an error response to the client. The error response includes
   the sequence number of the problematic packet, an error code and
   some additional details about what went wrong. Debugging a failure
   often involves determining the origin of the errant request. Error
   responses are usually received well after the client has moved on
   to later calls, due to the asynchronicity of the protocol; thus
   the sequence number is invaluable information here.

   Clients may also register to be notified of a variety of events
   from the X server. Events are sent as a specific response type
   from the server to interested clients as they occur. Events may be
   caused by:

   - User input, such as moving a mouse or typing on the keyboard
   - Another client, such as a window manager moving a window
   - External events, such as devices being connected or disconnected
      from the system.

   Toolkits and X protocol libraries have functions for checking if
   any events have been received from the X server. Most X
   applications are driven from a main "event loop" which captures
   event responses and handles them appropriately.

   In the X11 protocol, each request and response type has an 8-bit
   identifier code to determine which operation, event, or error is
   being signaled. These codes are unique in each communication
   direction. For instance, any message from a client to the server
   starting with byte value 3 is a GetWindowAttributes Request.
   Errors and events have separate numbering spaces: an error code of
   3 indicates a BadWindow error, while an event code of 3 indicates
   a KeyRelease event.

   Many of the features of the communication protocol are tuned to
   support the computing environment of many years ago. Request
   sequence numbers, for example, are not transmitted at all by the
   client: the client and server can presumably keep count. Response
   sequence numbers are only partially transmitted, using a clever
   protocol plus counting to keep track of the rest. Similarly,
   resources on the server are identified in protocol requests using
   small integers known as XID's. The XIDs are actually allocated by
   the client, from an XID space given to them by the server. Both of
   these optimizations, as well as the 8-bit request / response ID
   space, are inspired by the desire to have very small packets on
   the wire. Thus, a line can be drawn on the screen using very few
   bytes moving in only one direction.

   Extensions can add requests, events and errors to the core
   protocol as needed. The X server dynamically assigns codes to
   extension messages at server startup. Thus, the same extension may
   have different values on differently configured servers. The
   values in use on a currently running X server can be displayed via
   the command "xdpyinfo -queryExtensions". There are only 256 8-bit
   numbers, so extensions normally try to conserve this space: the
   extension will add a single request or event code and then use a
   second byte as a "minor" code to identify sub-messages specific to
   that extension.

X Protocol Security model
~~~~~~~~~~~~~~~~~~~~~~~~~

   The core X protocol has a fairly simple security model. The
   address of a client is checked at connection time to see if it is
   allowed to connect to the server: if not, the connection is
   refused. If the client is allowed to connect, then it is granted
   full access to the server. This includes being able to send
   messages to all clients, to monitor the state of all devices
   (including all keystrokes, mouse movements, etc.). The client may
   even request that the X server kill another client's connection.

   Various extensions have added finer-grained optional security
   models. The "SECURITY" extension offers a simple "Trusted" vs.
   "Untrusted" client distinction. More complex multi-level security
   models are provided by the SELinux and Solaris Xtsol extensions.

Authentication methods
~~~~~~~~~~~~~~~~~~~~~~

   The mechanisms by which X clients can be authenticated as being
   allowed to connect to the X server have evolved over time. Most
   servers support a variety of choices.

xhost
~~~~~

   The initial connection security method was host-based
   authentication, in which any user or program on a given host is
   given permission to connect. By default only the local host can
   connect, but "``xhost +hostname``" can be used to add additional
   hosts. This mechanism is somewhat naive: it assumes that each
   machine has a single user, or that all users are equally
   trustworthy.

   The xhost mechanism has been extended in later versions to add
   additional access control methods controlled via the same
   mechanisms. These methods include an extensible "server
   interpreted" scheme which just passes the string to the X server
   and allows the X server to define new access control types as
   needed. The most common server interpreted scheme is "localuser",
   which uses interfaces provided in modern operating systems to get
   the user id of the connecting program for authentication. The
   xhost and Xsecurity man pages provide more details on this topic.

xauth
~~~~~

   The authentication method most commonly used today is based on a
   shared secret between the client and server. This is a later
   addition to the X11 protocol, and addresses many of the problems
   of xhost authentication. Several forms of secret sharing are
   supported. The most basic is MIT-MAGIC-COOKIE-1. The program that
   starts the X server and session (xinit, gdm, xdm, etc.) simply
   chooses a random 128 bit number and records it in a file passed to
   the X server via the "-auth" command line option and to the
   clients in an Xauthority file (found in either "$HOME/.Xauthority"
   or "$XAUTHORITY"). The client is allowed to connect if it can read
   the file and present the correct value to the server. When using
   the SECURITY extension, the cookie may also identify a client as
   Trusted or Untrusted, and grant privileges appropriately. The
   xauth and Xsecurity man pages provide more details on these.

Access control within the X server
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   *Martin Peres (mupuf)*

   Applications used to be limited in size and complexity and fairly
   trusted. This doesn't hold true anymore since users have to deal
   with proprietary software or large pieces of software such as web
   browser that may be malicious or may be turned to into one (eg.
   buffer overflow exploit). Unfortunately, once a X client is
   authenticated on the X server, it is mostly free to interact with
   other X clients in several ways:

   - Redirect input
   - Screen capture/transparent rendering
   - Read/write from/to the clipboard
   - Alter other X clients' properties

   Thus, many X applications cannot be trusted and pose both a
   confidentiality and an integrity threat to the user.

   X was ported to SELinux to alleviate this problem by extending the
   SELinux model to the graphic server. The key idea is to get a
   fine-grained access control to enforce security policies that
   effectively isolate GUIs. To operate, the SELinux model requires
   that:

   - Each resource inside the X server must be labeled (class/domain)
   - Each operation on a resource must be checked (hooks)
   - An engine separated from the hooks should take the decision to
      accept/deny a request from a X client onto a resource

   The hooks inside the X server are provided by the X Access Control
   Extension (XACE) which are in turn used by xauth, xhost and
   "XSELinux". The label on each resource is either set during the
   allocation of said resource or generated later on when performing
   an access control. The decision engine is provided by the
   libselinux and mostly runs in the kernel.

   Most notably, XSELinux can control accesses to:

   - X extensions: "use" and "query" (is it available?)
   - X properties: "listprop" and "chprop" (change property)
   - Clipboard: "read" and "write"
   - Screen/pixels: "copy" (get pixels from the screen) and
      "transparency" (is transparency allowed?)
   - Input: "setfocus", "grab" and "ungrab"

   XSELinux provides a fine-grained access control that can be used
   to effectively isolate X clients from the X server point of view.

   For more information, please visit
   http://selinuxproject.org/page/NB_XWIN and read
   https://www.nsa.gov/research/_files/selinux/papers/xorg07-paper.pdf.


Modern Extensions To X
----------------------

   https://www.x.org/wiki/guide/extensions

   *Alan Coopersmith*

   ::

      #. XKB
      #. Xinput 2
      #. Composite
      #. RandR and Xinerama
      #. SYNC

   As described in the Communication Between Client and
   Server chapter, the X Window System has
   evolved over time via the X11 protocol's extension mechanism,
   which allows defining new protocol requests, events and errors
   that servers may support. Most extensions include a versioning
   mechanism that allows clients to discover which features the
   extension supports.

   Many features required in a modern window system had to be
   invented when the X protocol was designed, many years ago. Thus,
   most applications require extensions, to get the benefits of
   decades of experience in the form of better infrastructure. At the
   least, application developers need to know about the effects the
   extensions will have on their applications.

   Some extensions are used by many clients, but are hidden under the
   covers of the X libraries (``Xlib or XCB``) so
   that clients never call them directly. For example, the
   Big-Requests extension allows libraries to send larger request
   messages than the original X11 protocol allowed; the XC-MISC
   extension allows libraries to request XID's when their original
   allocation is exhausted.

   There are several extensions that modern application authors
   should be familiar with, since they are widely used and important
   for interoperation in the modern world. These include XKB,
   Xinput2, Composite, RandR, Xinerama and Sync.

XKB
~~~

   Keyboard input and keyboard layout management today involves
   international keyboard layouts, vendor-specific keyboard models,
   and complex user preferences. This is a situation far more complex
   than the original keyboard support in the X11 protocol
   anticipated. Programmers writing against the Xlib API will find
   some Xlib keyboard functions now call XKB support under the hood.
   Other Xlib keyboard calls are deprecated and should be replaced in
   applications by calls to replacement XKB functions in Xlib.

   More information can be found in the ``X Keyboard Extension`` chapter 
   later in this guide and the ``XKB`` pages in the X.Org wiki.

Xinput 2
~~~~~~~~

   In the core X protocol, the most significant distinction between
   input devices is the number of buttons they have. This input model
   quickly became too limited to support the wide array of input
   devices that users wanted to attach to an Xserver. A variety of
   extensions were proposed to fill the gap. The one that won out and
   became standardized in the early 1990's was Xinput, which provided
   for a variety of input devices and input types. Xinput stayed
   static for about 15 years. When the growth of laptops and mobile
   devices demanded even more changes, Xinput version 2 was
   developed.

   As of this writing, the latest version of Xinput is Xinput 2.2,
   included in the Xorg 1.12 release. Xinput 2.2 adds multitouch
   support. Clients can, for example, now distinguish between a
   one-finger slide and a two-finger swipe. Multitouch support adds
   on to enhancements in previous versions. These included input
   device properties to pass additional metadata and configuration
   information between devices and clients; also the MultiPointer X
   (MPX) feature. MPX allows for multiple X users to share a single X
   desktop. Each user may have their own on-screen cursor image and
   input focus, driven by their own mouse and keyboard devices.

   Much more information about modern Xinput, including code and
   configuration examples, can be found on Peter Hutterer's blog at
   http://who-t.blogspot.com/.

Composite
~~~~~~~~~

   X was originally designed to run on computers with just a couple
   of megabytes of RAM. In these environments, memory could not be
   spared to keep a complete copy of the image of every window drawn
   by every application. Instead, the hardware frame buffer was used
   as the only pixel store, storing the current screen appearance for
   display. When windows were moved, raised or uncovered, clients
   received Expose events telling them to redraw the newly visible
   portions of the window. Unfortunately, this redraw often caused
   flickering or similar effects when windows moved. Redraw also led
   to increased application complexity. Every application had to be
   prepared to efficiently redraw any portion of its windows at any
   time. This tended to cause applications to build internal display
   lists, keep internal rasters, etc to meet this
   obligation---activities arguably better performed in a unified
   fashion by the server.

   Modern computers have plenty of RAM for rendering. X can now
   afford to trade off RAM for greater responsiveness, less redraw
   noise on screen and simpler applications. The Composite extension
   enables full buffering of every pixel of every window to
   off-screen memory. Composite combines these off-screen buffers
   into the frame buffer as needed, producing the image seen on
   screen. Because of its position in the stack, Composite can
   conveniently invoke an external "compositing manager" client to
   apply any desired "special effects"---for example, translucency,
   blurring or drop shadows---along the way.

   Unfortunately, the Composite extension is not yet universally
   deployed, and in any case is incompatible with certain other X
   configuration options. Application authors must ensure they still
   handle Expose events properly, and test that functionality on
   systems with Composite disabled. However, Expose event processing
   in modern X applications tends to be greatly simplified; it is
   assumed that application redraw performance is no longer as
   serious an issue as it once was.

RandR and Xinerama
~~~~~~~~~~~~~~~~~~

   An X Screen was originally a direct mapping to a single monitor.
   Users with multiple monitors had a separate logical screen
   corresponding to each monitor: there was no opportunity to have a
   window straddle monitors or even move from one to another. Users
   demanded more functionality. Thus, in the mid-nineties, X11R6.4
   added the Xinerama extension to combine multiple output devices
   into a single logical screen across which windows could cross
   freely. Xinerama actually provided two closely-related functions
   in one extension: multiplexing across devices in the X server, and
   protocol permitting a client to query the X server to discover
   device boundaries underlying each logical screen.

   Later, hardware then advanced to the point it was feasible, then
   common, for a single graphics adapter to drive multiple output
   devices. The Xinerama protocol was reused for these devices: this
   enabled retrieving monitor information from multi-head cards, even
   though the multiplexing feature was no longer required for this
   use case.

   Users also demanded the ability to change their monitor
   configuration or to add another output (such as plugging a
   projector into a laptop) "on the fly", without restarting the X
   server. The X Resize, Rotate and Reflect Extension (abbreviated to
   XRandR before reflection was added---the name stuck) responded to
   this need. XRandR 1.2 and later allow querying and setting monitor
   layouts for multiple screens per device. Xrandr 1.2 also added
   device properties, providing additional device-specific metadata
   and configuration options. Xrandr 1.3 added output transformations
   and panning support.

   Unfortunately, if your applications desire knowledge of the screen
   layout, it needs to be aware of both extensions. Not all systems
   support Xrandr 1.2 yet: proprietary drivers or servers tend to be
   particularly problematic. The Xinerama multiplexer may be
   configured still for combining screens across multiple discrete
   graphics adaptors, but Xinerama provides much less information
   about the outputs than XRandR does. Only XRandR allows your
   application to register to receive events when the layout or
   device information changes.

SYNC
~~~~

   The core X protocol only guarantees that it processes the requests
   on each connection in order of receipt on that connection. It
   makes no guarantees about ordering with respect to requests on
   different connections, or with respect to system events or clocks.
   The X Synchronization Extension (SYNC) provides a constraint
   system to handle these cases. An application can instruct the X
   server to hold off on processing further requests on a connection
   until a given synchronization point; the application can also
   instruct the server to send an event to a client at a given time,
   for instance when a idle timeout is reached after a period of user
   inactivity.

   For example, a client wishing to avoid tearing effects in their
   drawing may send the server all the requests needed to update an
   off-screen pixmap, followed by a request to wait until the
   screen's vertical refresh interval begins. The client can then
   copy from the pixmap to the on-screen window during the refresh
   period, rather than in the middle of a display controller update
   of that window.

   If the standard synchronization points provided by SYNC are not
   sufficient, clients can also define their own synchronization
   points. For example, this enables a client to make updates
   synchronized with actions from another cooperating client.



The X Client Ecosystem
----------------------

   https://www.x.org/wiki/guide/client-ecosystem

   *Alan Coopersmith*

   On both the client and server side of X, there is a large mass of
   infrastructure that must be mastered to get work done. This
   chapter covers the client side. Start here to learn how to build,
   maintain and develop X applications.

   ::

      #. The Structure of an X Client Application
      #. Building X client code
      #. X libraries

         #. XCB family of protocol and utility libraries
         #. Xlib family of protocol and utility libraries
         #. X Toolkit Intrinsics and legacy toolkits
         #. Libraries for related protocols
         #. Utility libraries

The Structure of an X Client Application
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   A typical X client application is built on top of a number of
   libraries, providing common functionality that many applications
   need.

   .. image::  https://www.x.org/wiki/guide/stairstep.svg
      :width: 80.0%

   Applications typically use a "toolkit" that provides common user
   interface elements, such as menus, buttons, text fields and other
   standard widgets. Modern toolkits include Qt, GTK+, and FLTK.
   Older toolkits, still supported for legacy applications, include
   the Athena Widgets (Xaw) and Motif (Xm). Some toolkits are
   cross-platform, which can assist in making your application usable
   in non-X environments such as Wayland, Android, MacOS X or
   Microsoft Windows. A list of X toolkits is available at
   http://en.wikipedia.org/wiki/List_of_widget_toolkits.

   Most X applications need to render something. The X community has
   great library support for efficient, convenient drawing in most
   environments. These libraries deal with optimizing for specific
   video hardware, output formats, etc. For 2D graphics, the `Cairo
   library <http://cairographics.org>`__ is commonly used today, both
   by applications directly and by toolkits for their rendering
   needs. For 3D graphics, the OpenGL API is the industry standard,
   implemented in the free software stack by the
   `Mesa <http://mesa3d.org>`__ libraries.

   Proper text handling is trickier than most developers realize,
   especially if they have only been exposed to seven-bit ASCII text.
   Handling Unicode characters, loading appropriate fonts for
   different languages, figuring out how to place characters in
   languages with complex rules for connecting characters or
   overlaying diacritical marks, even just figuring out whether
   characters are displayed in left-to-right or right-to-left order:
   these are all solved problems for existing libraries such as
   `Pango <http://pango.org>`__ and
   `HarfBuzz <http://harfbuzz.org>`__. Toolkits use these libraries
   to handle text layout in the widgets they provide, Cairo uses them
   for text in canvases it renders, and applications use them for any
   text they need to place on screen directly.

   Underneath all these libraries is X's Xft extension. Xft provides
   for actually displaying text glyphs on screen, using
   `fontconfig <http://fontconfig.org>`__ to find an appropriate font
   for each glyph, and `FreeType <http://freetype.org>`__ to render
   each glyph as an image that Xft can send to the X server for
   display.

   The actual communication with the X server is handled by one of
   two sets of libraries---Xlib or XCB. Each library family provides
   programmatic access to the actual X protocol requests, hiding the
   details of X11 protocol connections and encoding/decoding from the
   clients. Xlib and XCB are covered in more detail in the ``Xlib and
   XCB`` chapter of this book.

   While it is theoretically possible to write an X client using pure
   system calls, generating all the X protocol message encoding and
   decoding yourself, that would usually be a massive waste of time
   and a source of bugs. It is also possible to write an X client
   using just the X11 libraries, and to generate all the code for
   drawing menus, buttons, text yourself, but that also wastes much
   time reinventing the wheel; multiple programmer-years of effort
   would be required to get the full functionality required to
   support internationalization, accessibility, desktop integration,
   input handling, and many other features provided by toolkits.

Building X client code
~~~~~~~~~~~~~~~~~~~~~~

   X.Org, along with many of the open source toolkits and libraries
   mentioned above, has standardized on the use of the `pkg-config
   system <http://www.freedesktop.org/wiki/Software/pkg-config>`__
   for determining the required set of compiler and linker flags to
   use when building software that uses these libraries.

   For example, to find the flags needed to link against the libxcb
   and libxcb-util libraries, you would run:

   .. code:: bash

      pkg-config --libs xcb xcb-util -lxcb-util -lxcb

   You should not simply copy the results into your build scripts.
   Instead, run pkg-config at build time: the results may vary by
   platform, by install location (different "-I" or "-L" flags to
   find the right path), or by version as requirements change.

   If your software is built using the GNU autoconf system,
   pkg-config provides a simple macro you can use for finding the
   required flags for your build in the configure.ac script. You can
   also specify minimum required versions of a given library, as
   shown in this example:

   ::

      PKG_CHECK_MODULES(XCBLIBS, [xcb >= 1.6] xcb-icccm xcb-shape)

   If all the required libraries are found, with sufficient versions
   and any required dependencies they specify in their pkg-config
   files, then autoconf will provide variables in the generated
   Makefiles named XCBLIBS_CFLAGS and XCBLIBS_LIBS. These variables
   will provide the flags you need to pass to the compiling and
   linking stages of your build.

X libraries
~~~~~~~~~~~

   The following list are the X libraries offering C language API's
   maintained by X.Org. As described above, these API's provide a
   lower level of functionality on top of which the higher level
   libraries from other providers are built. Language binding layers
   for other languages, such as Python, Perl and Tcl, are also
   available from various sources.

   There are two generations of libraries at the core of the X
   protocol stack - the newer XCB and the older Xlib. The ``Xlib and
   XCB`` chapter in this guide explains the
   differences, and describes the interoperability between the two
   families.

   Documentation for almost all of these libraries is included with
   the libraries themselves, in the form of Unix man pages and
   DocBook/XML reference docs. For those with DocBook docs, the HTML,
   PDF, and plain text format documentation generated from those docs
   has been posted online at http://www.x.org/releases/current/doc/.

XCB family of protocol and utility libraries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The newer generation of X protocol encoding & decoding libraries
   are built on top of the XCB core, with the encoding & decoding
   functions auto-generated from XML descriptions of the protocol.
   libxcb provides both the connection management functions, and the
   handling of the core X protocol, with additional libraries
   provided for each X extension:

   ::

      libxcb-composite    libxcb-res        
      libxcb-damage       libxcb-screensaver 
      libxcb-dpms         libxcb-shape            libxcb-xinerama
      libxcb-dri2         libxcb-shm              libxcb-xinput
      libxcb-glx          libxcb-sync             libxcb-xprint
      libxcb-randr        libxcb-xevie            libxcb-xtest
      libxcb-record       libxcb-xf86dri          libxcb-xv
      libxcb-render       libxcb-xfixes           libxcb-xvmc

   Unfortunately, not all extensions are yet supported by XCB
   libraries. XKB is a noticeable gap---libxcb-xkb is still being
   worked on, due to the complex nature of the XKB protocol
   definition. Two extensions, BigRequests and XC-MISC, are
   fundamental to the handling of other requests; these extensions
   are thus built directly into libxcb instead of being provided via
   separate libraries.

   There are also some utility libraries built on top of the XCB
   protocol libraries to provide common higher-level functions. These
   libraries are still under development, and are still seeing some
   changes to their API between versions that may break
   compatibility.

   - libxcb-icccm and libxcb-ewmh: These libraries provide functions
      to get and set the properties specified in the ICCCM and EWMH
      standards for interacting with window managers and desktop
      environments. (See the ``"Properties" section in the "Concepts"``
      chapter for more details on these.)

   - libxcb-image: This library moves images (client-side pixmaps) to
      and from the X server. In Xlib, XImage and XShmImage provide
      similar functionality.

   - libxcb-render-util: This library provides convenience functions
      for drawing images and text using the Render extension.

   - libxcb-util: This library is a grab-bag of convenience functions
      and definitions that failed to fit into the others. The library
      includes standard atom constants, atom caching, event decoding,
      and display structure operations.

Xlib family of protocol and utility libraries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The older generation of X protocol handlers is built on top of
   libX11, a library known colloquially as Xlib. Besides protocol
   handling, libX11 also includes a large number of utility
   functions. Xlib provides support for international input methods
   and for ICCCM property handling. It also provides legacy versions
   of other functionality (such as color management) now commonly
   provided in higher level libraries; the modern libraries offer
   better integration with toolkits and applications. Like the XCB
   family, many extensions have their own Xlib-based library for
   handling the requests for that extension. A common set of older
   extensions is, however, grouped into a single libXext library.

   Libraries for individual extensions:

   ============= ========================================
   Library       Extension
   ============= ========================================
   libXcomposite Composite extension
   libXdamage    Damage extension
   libXevie      XEvIE extension
   libXfixes     X-Fixes extension
   libXfontcache X-TrueType font cache extension
   libXi         Xinput extension
   libXinerama   Xinerama extension
   libXp         Xprint extension
   libXrandr     X Resize and Rotate extension
   libXrender    RENDER extension
   libXres       X Resource extension
   libXss        MIT-SCREEN-SAVER extension
   libXTrap      X Trap extension
   libXtst       XTEST extension, Record extension
   libXv         Xvideo extension
   libXvMC       Xvideo Motion Compensation
   libXxf86dga   XFree86 Direct Graphics Access extension
   libXxf86misc  XFree86-Misc extension
   libXxf86vm    XFree86 Video Mode extension
   libdmx        Distributed Multihead X extension
   ============= ========================================

   Extensions covered by libXext:

   - DBE - Double Buffering Extension
   - DPMS - Display Power Management Signaling
   - MIT-MISC - X11R3 Bug Compatibility Mode [obsolete]
   - AppGroup - Broadway Application Grouping [obsolete]
   - EVI - Extended Visual Information
   - Generic Event - X Generic Event extension
   - LBX - Low Bandwidth X [obsolete]
   - MultiBuf - Multiple Buffering Extension [obsolete]
   - SECURITY - X Security model extension
   - SHAPE - Non-rectangular Shaped Window Extension
   - MIT-SHM - Shared Memory Images/Pixmap Extension
   - SYNC - X Synchronization Extension
   - TOG-CUP - Colormap Utilization Protocol extension [obsolete]
   - XTestExt1 - X11 Input Synthesis Extension [obsolete]

   Quite a few of those extensions are no longer in common use, or
   supported by the X server. However, since libXext bundled them
   into the same library, they cannot be easily removed without
   breaking backwards compatibility with existing programs.

X Toolkit Intrinsics and legacy toolkits
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   X.Org originally developed the X Toolkit Intrinsics (libXt) to
   provide common functionality to multiple toolkits. libXt allowed
   for configuration via a common X resource format, a standardized
   event loop, and other underlying functionality. libXt was used in
   many early toolkits, including X.Org's sample Athena Widgets
   toolkit (libXaw), Sun's OpenLook toolkit (libXol), and the Open
   Software Foundation's Motif toolkit (libXm). Modern toolkits
   however have mostly eschewed libXt. These toolkits use some
   combination of other common layers (glib for event loops, for
   instance) and their own toolkit-specific desktop-specific library
   code. Thus, libXt is maintained mainly for use by legacy
   applications.

   The Athena Widgets toolkit is the toolkit used by many X.Org
   sample applications, as well as some applications from other
   sources. The original version (libXaw) has a very simple 2-D look,
   while the enhanced fork (libXaw3d) updates the look with a more
   3-D feel. Neither version is actively developed. The Athena
   Widgets, like the underlying libXt, are mainly maintained for
   existing applications. Writing new applications against Athena
   Widgets is discouraged. The toolkit lacks much of the
   functionality needed for proper operation of modern applications.
   For example, internationalization support is minimal, as is
   support for accessibility technologies such as screen readers or
   alternative input devices for users with physical disabilities. It
   would also be awkward to try to use the Athena Widgets on
   non-traditional computing devices such as cell phones or tablets.

   Both libXt and the Athena libraries are built on top of the Xlib
   family of protocol handling libraries.

Libraries for related protocols
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   While the X11 protocol and it's extensions are the core of the X
   Window System, they are not the only protocols used in X, and
   additional libraries are provided for software that needs to
   operate over these protocols.

   - libFS handles the encoding and decoding of the X Font Service
      protocol, allowing X servers or other programs to retrieve fonts
      from a remote XFS font server. This is purely legacy
      functionality, and should not be used in modern client or server
      configurations.

   - libICE supports communication between multiple clients using the
      Inter-Client Exchange protocol.

   - libSM covers the X Session Management protocol, built on top of
      libICE. libSM provides desktop environments a mechanism to save
      the state of running clients before stopping an X session, and
      to restore this state at next login.

   - libXdmcp provides the encoding and decoding for the X Display
      Manager Control Protocol. XDMCP provides a poorly-resourced
      local X server (typically an X terminal) with the ability to
      authenticate clients on a remote computer.

Utility libraries
~~~~~~~~~~~~~~~~~

   X.Org provides a handful of utility libraries, providing
   convenient encapsulation of functions needed by multiple clients.
   Many of these are based on the Xlib protocol library stack.

   - libXau manipulates .Xauthority files, used by xauth, X servers,
      and display managers to store shared secret data such as
      MIT-MAGIC-COOKIEs used for authenticating X clients attempting
      to connect to an X server. libXau is used by both Xlib and XCB.

   - libXcursor handles the alpha blended and animated cursors
      provided by the Render and XFixes extensions, including file
      formats for storing and reading them from disk. libXau is used
      by both Xlib and XCB. [iirc --po8]

   - libXfont is the implementation of the legacy core protocol font
      rendering mechanism. libXfont is used by X servers and the XFS
      font server to load and render fonts in a variety of formats.
      The rendering code for some of these formats is built into the
      library. Other formats are passed to the FreeType library to
      rasterize. Some of the X.Org font utilities use libXfont to
      manage font files and metadata files such as fonts.dir. Normal
      clients will not link to libXfont directly, but access the
      functionality via X protocol requests. Modern clients avoid
      using X core fonts entirely, relying on fontconfig / libXft or
      on libraries utilizing these tools. libXfont thus represents
      strictly legacy functionality.

   - libfontenc handles the encoding tables used to map fonts across
      character encodings such as ISO-8859 and Unicode. Like libXfont,
      libfontenc is legacy software used by the X.Org core font
      infrastructure software rather than by normal clients.

   - libXft is a font library that clients use directly. It
      cooperates with fontconfig to find fonts, with FreeType to
      render them, and with either libXrender or libX11 to draw the
      rendered text on screen or into a pixmap. Some clients use
      libXft directly, but most use higher-level libraries such as
      pango or API's provided by the application toolkit. These API's
      handle text shaping and layout rules to determine proper
      placement and connection of glyphs in complex languages.

   - libXmu and libXmuu are a collection of miscellaneous utilities
      used by the X.Org sample clients. libXmuu consists of utilities
      that build upon just the core libX11 libraries. libXmu depends
      on the Athena Widgets toolkit, pulling in libXaw and libXt.

   - libXpm supports the XPM XPixMap image file format. XPM
      represents image data in a portable ASCII text format. This was
      especially important in legacy X applications, which tended to
      have XBM or XPM images compiled right into the C code. Modern
      applications use external libraries or toolkit functionality to
      access image files.

   - libxtrans is the shared code implementation of the transport
      layer (sockets, pipes, etc.) used for communications by a number
      of the protocol implementations in the X Window System, such as
      libX11, libICE, libFS, xfs, and the X server. It is not actually
      a shared library like the others, but shared C code which is
      built into each library or program. The XCB library stack has
      its own connection management code in libxcb and does not use
      xtrans. Indeed, XCB replaces one of several instantiations of
      libxtrans in modern Xlib.




Xlib and XCB
------------

   https://www.x.org/wiki/guide/xlib-and-xcb

   *Alan Coopersmith*

   ::

      #. Example: Converting xwininfo from Xlib to XCB
      #. Mixing Xlib & XCB calls
      #. Example: Converting xdpyinfo extension queries to XCB
      #. Extension libraries
      #. API documentation

   The two most popular questions about Xlib and XCB may be "What are
   they?" and "What's the difference?"

   Most programming languages make it awkward for X applications to
   spit raw X protocol down the network and take apart the protocol
   coming back. Thus, X toolkits and applications are a lot easier to
   write if some library handles these jobs for them, providing an
   API that fits with the programming language and environment for
   connecting to the X server.

   At the bottom level of the X client library stack are Xlib and
   XCB, two helper libraries (really sets of libraries) that provide
   API for talking to the X server. Xlib and XCB have different
   design goals, and were developed in different periods in the
   evolution of the X Window System.

   Most application developers should call Xlib and XCB sparingly.
   Higher level toolkits provide more efficient programming models,
   and support features expected in modern applications, including
   support for complex internationalized input and output,
   accessibility, and integration with desktop environments. However,
   sometimes applications will find themselves needing to make calls
   to the raw underlying X11 libraries for operations not supported
   by toolkits. An application might need to make calls to X
   extension API's not covered in the current version of the
   toolkit's programming model. It is also common for drawing not to
   be wrapped by toolkit API's. [Yes? --po8]

   The original C-language X11 API is libX11, often referred to as
   "Xlib". It was designed to look like a traditional library API,
   hiding the fact that calls result in protocol requests to a
   server. Calls that don't require a response from the X server are
   queued in a buffer to be sent as a batch of requests to the
   server. Those that require a response flush all the buffered
   requests and then block until the response is received.

   Xlib's mix of synchronous and asynchronous behaviors causes some
   problems. Xlib's behaviour is often confusing to new programmers.
   Calls appear to work sometimes and not others, because it is not
   obvious which calls implicitly flush the buffer. The asynchronous
   nature of many calls makes it difficult to debug problems. When an
   error is reported, the stack trace shows the call that was being
   made when the error was received and processed, often many calls
   after the one that caused the error. Finally, Xlib's synchronous
   calls incur avoidable round-trip latency. This latency has a
   notable effect on application performance; in particular, startup
   times are often greatly increased.

   After many years of experience with Xlib, and learning from it and
   other protocol interface libraries, a second attempt was made at
   defining a C language binding for X11: the "X11 C Binding" layer
   XCB. XCB makes the client-server nature of the protocol explicit
   in its design. The client is in charge of deciding when to flush
   the request buffer, when to read results and when to wait for the
   server to respond.

   For instance, to lookup a window property, the Xlib code is a
   single function call:

   .. code:: cpp

      XGetWindowProperty(dpy, win, atom, 0, 0, False, AnyPropertyType, &type_ret, &format_ret, &num_ret, &bytes_after, &prop_ret);

   Xlib generates the request to the X server to retrieve the
   property and appends it to its buffer of requests. Since this is a
   request that requires a response, Xlib then flushes the buffer,
   sending the contents to the X server. Next, Xlib waits until the X
   server processes all the requests preceding the property retrieve
   request, and sends the property retrieve reply. Xlib then returns
   the reply to the client.

   Xlib also provides convenience functions that wrap a property
   request. These convenience functions retrieve specific properties,
   knowing the details of each property and how to request and decode
   it. Examples include XGetWMName and XGetWMHints. Some of these
   functions could be written outside Xlib, but many use Xlib
   internals in non-trivial ways and are thus inseparable. [Yes?
   --po8]

   XCB on the other hand, provides functions generated directly from
   the protocol descriptions in an "obvious" mechanistic way. XCB
   functions map directly onto the protocol, with separate functions
   to put requests into the outgoing buffer and to read results back
   from the X server asynchronously later. The XCB version of the
   above code is:

   .. code:: cpp

      prop_cookie = xcb_get_property (dpy, False, win, atom, XCB_GET_PROPERTY_TYPE_ANY, 0, 0);
      prop_reply = xcb_get_property_reply (dpy, prop_cookie, NULL);

   The power of XCB is in allowing those two steps to have as much
   code as you want between them. The programmer decides when to wait
   for data, instead of being forced to wait for the data returned by
   a request at the time the request is issued.

Example: Converting xwininfo from Xlib to XCB
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   The program xwininfo is a command-line utility to print
   information about windows on an X server. It knows in advance,
   from the command line options, most of the data it needs to
   request information for each window from the server. Thus,
   xwininfo can make its requests all at once, and then wait for the
   results to start coming in. When using the -tree option to walk
   the window tree, xwininfo can request the data for all the
   children of the current window at once, batching even further. On
   a local connection on a single CPU server, this means less context
   switches between X client and server. On a multi-core/CPU server,
   the X server can process requests on one core while the client is
   handling the responses on another core as they become available,
   improving performance. On remote connections, the requests can be
   grouped into packets closer to the MTU size of the connection,
   instead of just sending whatever requests are in the buffer when a
   request is made that needs a response.

   Version 1.1 of xwininfo was converted from Xlib to XCB by Alan
   Coopersmith. It was tested with a GNOME desktop session with a few
   clients. xwininfo was run as "xwininfo -root -all": this started
   xwininfo at the root of the window hierarchy and asked it to
   traverse the tree, requesting all the information available for
   each window along the way. In this sample session it found 114
   windows. (In X, a window is simply a container for drawing output
   and receiving events. X windows are often regions of, or borders
   around, the "user windows"). When running locally on a four-core
   Intel Nehalem CPU, both versions ran so fast (0.05 seconds or
   less) that the difference in time was too small to accurately
   measure. To measure remote performance, "ssh -X" was used to
   tunnel an X11 connection from California to a computer in China,
   and from there back to the workstation in California, introducing
   a huge amount of latency. With this setup, the difference was
   dramatic between the two:

   ::

      Xlib: 0.03u 0.02s 8:19.12 0.0% 
         xcb: 0.00u 0.00s 0:45.26 0.0% 

   Of course, xwininfo is an unusual X application in a few ways:

   - xwininfo runs through the requests as fast as it can and then
      exits, not waiting for user input (unless you use the mode where
      you click on a window to choose it, after which it runs through
      as normal). Once they are up and running, most X applications
      spend most of their time waiting for user input, so the overall
      runtime won't decrease as much by reducing the time spent
      communicating with the X server. However, application startups
      are typically dominated by round-trip times, and so proper use
      of XCB reduces the huge startup times of X applications running
      over high-latency (and even medium-latency) connections.

   - xwininfo uses only the core protocol and shape extension. It
      does not use the more complex extensions, such as Render or
      Xinput, that most modern applications use. Xinput, XKB, and GLX
      are especially problematic, as those have not yet been fully
      supported in an XCB release, though support has been worked on
      through some Google Summer of Code projects.

   - xwininfo is small enough that a complete reworking to use XCB in
      one shot was feasible. Most applications are much larger than
      this. XCB is aimed primarily at new code and at toolkits: it is
      designed specifically to interoperate with existing Xlib
      applications. Calls to Xlib and XCB can be mixed, so Xlib
      applications can be converted partially or incrementally if
      desired.

   - xwininfo used only raw Xlib, without any toolkit. Thus, it did
      not have to worry about which X library the toolkit used.

   - xwininfo uses only a few of the Xlib helper functions. This
      makes it more directly mappable to XCB. Applications that rely
      on Xlib's input method framework, compose key handling or
      character set conversion, for example, would be harder to port.
      Fortunately, modern toolkits handle most of this functionality
      in the toolkit layer anyway.

   xwininfo did rely on Xlib helper functions for converting the
   window name property from other character sets---the XCB version
   currently only works for UTF-8 and Latin-1 window names. Since
   most modern toolkits use UTF-8, no one is likely to notice. Older
   applications with localized window names will fail, but there are
   few of these in use.

Mixing Xlib & XCB calls
~~~~~~~~~~~~~~~~~~~~~~~

   As mentioned above, XCB provides a method for incremental
   conversion from Xlib to XCB. One can use libX11 to open the
   display and pass the Display pointer it returns to existing code,
   toolkits, and libraries. To call an XCB function, one can convert
   the Display pointer to an xcb_connection_t pointer for the same
   connection. This enables calling into Xlib and XCB from the same
   application.

   Xlib and XCB compatibility was achieved by rebuilding libX11 as a
   layer on top of libxcb. Xlib and XCB share the same X server
   connection and pass control of it back and forth. That option was
   introduced in libX11 1.2, and is now always present (no longer
   optional) since the 2010 release of libX11 1.4.

Example: Converting xdpyinfo extension queries to XCB
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   xdpyinfo is another command-line tool in the standard X Window
   System toolset. Like xwininfo, xdpyinfo prints a lot of
   information about the X server. xdpyinfo calls many extensions,
   and few of its calls block waiting for a response from the server.
   If you add the "-queryExt" option, though, for every extension
   xdpyinfo calls XQueryExtension to print which request, event, and
   error ids are assigned to that extension in the currently running
   server. These ids are dynamically assigned, and vary depending on
   the set of extensions enabled in a given server
   build/configuration. Thus, the list of extension ids is critical
   information to have when debugging X error reports that reference
   them. Using "xdpyinfo -queryExt" is especially needed when
   reporting an X error message that comes from a custom error
   handler like the one in the gtk toolkit: such error handlers
   typically omit the extension information found in the default Xlib
   error handler, so the person reading the bug report will be unable
   to identify the extension in which the error was encountered.

   The Xlib call XQueryExtension takes one extension name at a time,
   sends a request to the X server for the id codes for that
   extension, and waits for a response so it can return those ids to
   the caller. On the Xorg 1.7 server used as the test system for
   this conversion, there were 30 active X extensions, so that's 30
   tiny packets sent to the X server, 30 times that the xdpyinfo
   client blocks in poll() waiting for a response, and 30 times that
   the X server goes through the client handling and request
   scheduling code before going back to block again on its own
   select() loop.

   Note: XListExtensions can be used to get a list of available
   extensions that can be called with XQueryExtension.

   A simple patch to xdpyinfo replaced just that loop of calls to
   XQueryExtension with two loops. The first loop called
   xcb_query_extension for each extension. When the entire batch of
   queries had been issued, a second loop called
   xcb_query_extension_reply to start collecting the batched replies.
   Gathering system call counts with "truss -c" showed the expected
   reduction in a number of system calls made by the xdpyinfo client:

   =========== ==== ===
   System call Xlib xcb
   =========== ==== ===
   writev      40   11
   poll        80   22
   recv        117  29
   total       237  62
   =========== ==== ===

   Over a TCP connection, the switch to XCB for this transaction
   reduced both the number of packets and (due to tcp packet header
   overhead) the overall amount of data:

   =========== ===== ====
   \           Xlib  xcb
   =========== ===== ====
   TCP packets 93    35
   TCP bytes   11554 7726
   =========== ===== ====

   This sort of change is far more feasible than wholesale conversion
   to XCB for most applications. Find the hotspots where the
   application is waiting for data from the server and convert those.
   There are almost always opportunities in application startup code,
   when the application is gathering the information about the X
   server and session. Converting just those calls to more efficient
   sets of XCB calls can have major performance benefits. Earlier
   work by X developers reduced the latency of many applications by
   converting repeated calls to XInternAtom with a single call to
   fetch multiple atoms at once via XInternAtoms. XCB permits a
   generalization of this principle.

Extension libraries
~~~~~~~~~~~~~~~~~~~

   Each new extension to the X11 protocol adds requests that clients
   can make to the X server. To allow client software to utilize
   these requests, most extensions offer API's built on top of Xlib
   or XCB. These API's use the library's connection marshalling to
   include their requests in the stream sent to the X server.

   In the early X11 releases, many of the smaller and more common
   extensions were grouped into a common library, libXext. You will
   find several there today which are still in use, such as the
   MIT-SHM Shared Memory extension, the SHAPE extension for
   non-rectangular windows, and the SYNC extension for event
   synchronization. However, libXext also includes some API's for
   extensions no longer found in current Xorg server releases, such
   as App-Group and Low-Bandwidth X (LBX), as well as extensions many
   apps never use, such as DPMS for display power management. Since
   these extension API's cannot be removed from libXext without
   breaking any existing application which may be using them, the
   code is stuck in there.

   Accordingly, new Xlib extension API's are no longer added to
   libXext. Instead a new library utilizing libX11 is created for
   each extension. Having a library per extension makes it easier to
   evolve the API for that extension, to deprecate an obsolete
   extension and to only link it into the clients that actually need
   it. Almost all modern extensions have their own Xlib API
   library---libXrender for the RENDER extension, libXcomposite for
   the COMPOSITE extension, and so on. A handful of extensions are so
   core to the protocol interaction that they are supported directly
   in libX11 itself, such as BigRequests, XC-MISC, and XKB.

   When XCB added its API style to the mix, it followed the newer
   style and created a "libxcb"-prefixed library for each
   extension---libxcb-composite, libxcb-render, etc. Since XCB can
   generates the API code for an extension automatically from an XML
   description of the extension protocol, new extension API's are
   created by simply adding the extension description to the
   xcb-proto package and rebuilding. Unfortunately, some of the older
   extensions have complex protocols that are not easily described in
   the XML syntax. Work is ongoing to extend the syntax and code
   generator to handle these. The XKB & GLX protocols are current
   challenges.

API documentation
~~~~~~~~~~~~~~~~~

   To write code using Xlib or XCB, you'll need to know the details
   of the library API. Xlib includes man pages for most functions,
   providing a good API reference. libXext includes man pages for
   some of the extension API's it includes, but not all of them. Man
   page coverage is even more spotty in the individual Xlib-based
   extension libraries.

   There's also a more complete guide to the Xlib API, and
   specifications for many extension API's, in the X.Org online doc
   set at http://www.x.org/releases/current/doc/.

   For extensions without Xlib-style API documentation, the calls are
   usually simple mappings to the protocol specifications provided in
   the above-linked doc set.

   For XCB, the documentation relies even more heavily on the
   protocol specifications. The generated API is an exact mapping to
   the X protocol; it translates the C call data into X protocol
   encoded packets as straightforwardly as possible. The connection
   management and other functions in the XCB API are documented at
   http://xcb.freedesktop.org/XcbApi/. Work is in progress on adding
   support to XCB to generate Unix style reference man pages from the
   XML protocol descriptions as well, for developer convenience.

   There is also a XCB tutorial, "Basic Graphics Programming With The
   XCB Library" at
   http://www.x.org/releases/current/doc/libxcb/tutorial/index.html.

   Helping us improve our API documentation for either library stack
   is always appreciated. See the ``Documentation chapter`` later in 
   this guide for more information.


Using Extensions
----------------

   https://www.x.org/wiki/guide/using-extensions

   *Alan Coopersmith*

   ::

      #. Example: Using an extension from an xcb-based client
      #. Example: Using an extension from an Xlib-based client

   As described in the ``Communication Between Client and
   Server`` chapter, the X Window System has
   evolved over time via the X11 protocol's extension mechanism,
   which allows defining new protocol requests, events and errors for
   communication between clients and servers.

   Clients who wish to use an extension must first check if the
   server supports the extension, and if so, which version of the
   extension the server supports. Some extensions provide a simple
   version negotiation mechanism where the client sends the server
   the protocol versions the client understands, and the server
   responds with the best version it can support in that range. Many
   extensions will not work properly if this version checking
   handshake is not performed, as key data structures in either the
   client libraries or server will not be initialized, and extensions
   with multiple versions may use the wrong version to communicate,
   causing parsing errors on either end.

Example: Using an extension from an xcb-based client
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This example comes from the xwininfo client from X.Org a simple
   client that retrieves information about windows on the screen and
   prints them. If the server supports the SHAPE extension, it can
   print information about the shape of non-rectangular windows, such
   as the round eyeball windows of xeyes.

   In the configure.ac script that is used with GNU autoconf to
   determine how to build xwininfo on a given platform, xwininfo
   declares that it requires the xcb library for the shape extension
   to build, and will not build without it. It also requires at least
   version 1.6 of the xcb library itself.

   .. code:: bash

      # Obtain compiler/linker options for xwininfo dependencies
      PKG_CHECK_MODULES(XWININFO, [xcb >= 1.6] xcb-shape)

   Some clients make extensions optional at build time, allowing
   builders to choose to omit support for them, and using mechanisms
   such as #ifdef statements to isolate the calls to them. This guide
   does not include an example of that.

   The xwininfo program code then initializes the extension and
   checks the version before using it. The shape extension has had
   two versions over its lifetime, 1.0 and 1.1. The 1.1 version
   features simple additions to the 1.0 version that do not break the
   existing functions or protocol, nor the clients using it.

   .. code:: cpp

      #include <xcb/shape.h>
      [...]
      static void
      Display_Window_Shape (xcb_window_t window)
      {
            xcb_query_extension_reply_t *shape_query;
               xcb_shape_query_extents_cookie_t extents_cookie;
               xcb_shape_query_extents_reply_t *extents;

               shape_query = xcb_get_extension_data (dpy, &xcb_shape_id);
               if (!shape_query->present)
               return;

            extents_cookie = xcb_shape_query_extents (dpy, window);
               extents = xcb_shape_query_extents_reply (dpy, extents_cookie, &err);
      [...]

   Since the shape window usage is isolated to this single function,
   it can simply return if the extension is not supported, otherwise
   it can continue on to make requests using the functions provided
   by the xcb-shape library to encapsulate the SHAPE extension
   protocol requests and replies.

Example: Using an extension from an Xlib-based client
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   This example comes from the xdpyinfo client from X.Org, a simple
   client that retrieves and prints information about the X server
   and the display. It prints a list of the extensions present, and
   if passed certain extension names via the -ext flag, prints more
   information about the given extension. One of the extensions it
   can do this for is the Xinerama extension to get information about
   how many monitors actually are displaying portions of a single
   logical screen, and which portion of the screen each monitor is
   displaying.

   In the configure.ac script that is used with GNU autoconf to
   determine how to build xdpyinfo on a given platform, xdpyinfo
   gives builders a command line flag to enable or disable the build
   of xinerama support, and if enabled, checks for the required
   headers & library for libXinerama via pkg-config:

   .. code:: cpp

      AC_ARG_WITH(xinerama, AS_HELP_STRING([--without-xinerama],[Disable xinerama support.]),
            [USE_XINERAMA="$withval"], [USE_XINERAMA="yes"])
      if test "x$USE_XINERAMA" != "xno" ; then
            PKG_CHECK_MODULES(DPY_XINERAMA, xinerama)
      else
            echo "without xinerama"
      fi

   In the code, the Xinerama support is #ifdef'ed so that it's only
   compiled when the extension library was found by the configure
   script. The code uses "PANORAMIX" for this, since that was the
   original proposed name for Xinerama, and the code didn't get
   updated when the extension name was finalized. As required, the
   first thing the client does is query for the presence of the
   extension and it's version, and then if it is available in a
   compatible version, goes on to make it's calls to the extension
   itself.

   .. code:: cpp

      #ifdef PANORAMIX
      #include <X11/extensions/Xinerama.h>
      #endif
      [...]
      #ifdef PANORAMIX

      static int
      print_xinerama_info(Display *dpy, const char *extname)
      {
         int              majorrev, minorrev;

         if (!XineramaQueryVersion (dpy, &majorrev, &minorrev))
            return 0;

         print_standard_extension_info(dpy, extname, majorrev, minorrev);

         if (!XineramaIsActive(dpy)) {
            printf("  Xinerama is inactive.\n");
         } else {
            int i, count = 0;
               XineramaScreenInfo *xineramaScreens = 
                  XineramaQueryScreens(dpy, &count);
            [...]


The X Keyboard Extension
------------------------

   https://www.x.org/wiki/guide/hutterer-kbd

   *Peter Hutterer*

   ::

      #. RMLVO and Kccgst

         #. RMLVO
         #. Kccgst

      #. Converting from RMLVO to Kccgst
      #. Key processing

   The X Keyboard Extension (XKB) is responsible for some of the
   keyboard behaviour and, more importantly, it defines the layout of
   the keyboard as seen by clients.

   XKB as seen by the user is quite different to XKB as seen by the
   server, this chapter will explain the the differences between the
   interfaces and how they generate a keyboard layout that can be
   used by clients.

   The most important thing about keyboard handling is that the value
   passed around is almost always the keycode---a context-free number
   that represents the key on the keyboard. Keycodes must be between
   8 and 255 and the same physical key should generate the same
   keycode, every time. Beyond that, keycodes have no semantic
   meaning, they merely serve as index into various lookup tables.

RMLVO and Kccgst
~~~~~~~~~~~~~~~~

   The heart of keyboard configuration are the two visible interfaces
   of "Rules, Model, Layout, Variant, Options" (RMLVO) and "Keycode
   Compat Geometry Symbols Types" (Kccgst). Understanding the
   symbiotic relationship between these two interfaces is key to
   understanding keyboard configuration.

RMLVO
~~~~~

   RMLVO keyboard configuration is what is usually exposed through
   various user interfaces. Users usually expect to set a keyboard
   layout as a combination of localised sets of symbols, for example
   the "us" or "de" layout, and a possible variant of that set, for
   example "dvorak" instead of the default "qwerty".

   Further configuration is possible with additional options which
   usually enable or change a single key or action. Commonly used
   options are to enable server-actions such as zapping (terminating)
   the server or reassigning keys, for example changing Caps Lock to
   be a Compose key.

   The definitions of what these options, layouts and variants
   actually mean are defined in the rules files. These days only two
   rules files matter: evdev and base, with the former being the one
   for most contemporary GNU/Linux systems, the latter being the
   rules file for other systems. Rules file are simply lookup tables
   in the form of "for this layout, load this symbol description".
   The curious reader can find them in ``/usr/share/X11/xkb/rules``
   on most distributions. Rules come with an xml file that provide
   human-readable descriptions for each value. These xml files are
   used by GUIs.

   Finally, models are the representation for which keys are actually
   present on a particular keyboard model. Because of the Linux
   kernel's abstraction, models have less weight than they used to
   have, with most keyboard simply using the "evdev" model.

   Once the user has specified the desired combination of RMLVO,
   these descriptions are translated into an Kccgst description which
   is then loaded into the server. All files required for RMLVO
   lookups and translations are provided by the
   `xkeyboard-config <http://www.freedesktop.org/wiki/Software/XKeyboardConfig/>`__
   module and usually reside in ``/usr/share/X11/xkb``.

   Some more information about RMLVO is available here:
   http://who-t.blogspot.com.au/2008/09/rmlvo-keyboard-configuration.html

Kccgst
~~~~~~

   RMLVO is user-friendly but incomplete, it does not define what a
   "us" layout actually means. This is the job of the Kccgst files,
   and the rules to match one with the other.

   When a user specifies the layout "us", the model is matched with
   that model's "Keycodes" section, that model's "Geometry" section,
   and the "us" "Symbols" section. "Types" and "Compat" are largely
   default sets, they will be described later.

   The Geometry is easiest to explain: it describes the physical
   location and dimensions of each key. It has no other purpose than
   allowing clients to display how the keyboard looks. It is also the
   only part of Kccgst that is not mandatory. The geometry is largely
   based on the model, so for those keyboards without their own model
   and geometry, an abstracted, more generic geometry is used.

   The Keycodes section simply assigns symbolic names to keys and
   their numerical codes. The keycodes are grouped in rows, the
   symbolic name for the "Q" key on qwerty layout is AD01 - first key
   in row D. Other symbolic names are FK03 (third function key), LCTL
   (left control key), etc. These symbolic names are only useful
   within a Kccgst description and serve as lookups.

   The Symbols section is the one that actually describes what a key
   does. It matches up a keycode's symbolic name with the symbols
   that that key represents. On a qwerty layout, the "Q" key looks
   like this:

   key { type= "ALPHABETIC", symbols[Group1]= [ q, Q ] };

   On an azerty layout, the same key looks like this: key { type=
   "ALPHABETIC", symbols[Group1]= [ a, A ] };

   Note that the symbolic name is the same, since the physical key
   generates the same keycode, regardless of the layout.

   This key example shows a key with 2 "levels". The Types section
   defines the various types of keys and their behaviour when
   modifiers are pressed. Each key is assigned a type in the Symbols
   section. The ALPHABETIC type shown above produces the first
   level's symbol by default, and the second level's symbol if the
   Shift or CapsLock modifiers are logically down. Other types work
   on other modifiers like AltGr, Ctrl+Alt, etc. But in all cases,
   the modifier combination simply refers to a specific level of that
   key.

   The Symbols section defines which keys map to which modifiers. The
   example below shows that both the left and the right shift key map
   to the Shift modifier and thus trigger the second level in the
   ALPHABETIC type.

   ::

      modifier_map Shift { <LFSH> };
      modifier_map Shift { <RTSH> };

   The Compat section defines actions that happen on key
   combinations. These actions include terminating the server, moving
   the pointer around, switching between layouts, etc.

   One final note: in the example above, the symbols are defined for
   Group1. Each key may have up to 4 groups, with one group being
   active at any time on that keyboard. This allows for several
   layouts to be loaded simultaneously, with quick switching between
   the layouts.

Converting from RMLVO to Kccgst
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   RMLVO is largely a user-specific interface only, the server deals
   with Kccgst. This process works in two steps: first, the RMLVO is
   converted into a simple Kccgst description which is largely done
   by matching the RMLVO without looking into the actual sections.
   Then, the simple Kccgst is converted to the full description. That
   description is then loaded into (or by) the server.

   A simple Kccgst description might look like this:

   ::

      xkb_keymap {
            xkb_keycodes  { include "evdev+aliases(qwerty)" };
            xkb_types     { include "complete"      };
            xkb_compat    { include "complete"      };
            xkb_symbols   { include "pc+us+inet(evdev)+compose(caps)+terminate(ctrl_alt_bksp)"     };
            xkb_geometry  { include "pc(pc104)"     };
      };

   The conversion from simple Kccgst to the full description is
   handled by the xkbcomp process, a lexical parser that reads all
   files and assembles the final description. xkbcomp can produce
   textual descriptions or a binary format called "XKM" that closely
   represents the C structs the X server uses internally.

   On server startup, the server forks xkbcomp for each keyboard and
   loads the xkm file that xkbcomp produces. Efforts are underway to
   move the core of xkbcomp into a libxkbcommon library to avoid the
   fork.

Key processing
~~~~~~~~~~~~~~

   Once the keyboard layout is set up, the process of key handling is
   relatively simple. A keycode is submitted by the driver. The
   server checks the keycode and changes modifier state where
   applicable. It also checks for any actions to be performed on that
   key. Once that is done, the keycode is sent to the client as a key
   event.

   The client then matches up the keycode and modifier state with the
   keyboard layout previously obtained from the server and performs
   some action in response. The server provides modifier state and
   keycodes, but it is up to the client how it wants to treat that
   key. It may ignore the modifiers completely or even change the
   symbols to something completely different.


Fonts
-----

   https://www.x.org/wiki/guide/fonts

   *Alan Coopersmith*

   ::

      #. Core Font subsystem
      #. Client-side fonts

   *(The introductory text of this chapter was adapted from the
   introduction of*\ http://www.x.org/releases/X11R7.7/doc/xorg-docs/fonts/fonts.html\ *)*

   As described in the chapter "The X Client Ecosystem", X has two
   font systems, the original core X11 fonts system, and the newer
   Xft fonts system.

   The core X11 fonts system is directly derived from the fonts
   system included with X11R1 in 1987, which could only use
   monochrome bitmap fonts. Over the years, it has been more or less
   happily coerced into dealing with scalable fonts and rotated
   glyphs.

   Xft was designed from the start to provide good support for
   scalable fonts, and to do so efficiently. Unlike the core fonts
   system, it supports features such as anti-aliasing and sub-pixel
   rasterisation. Perhaps more importantly, it gives applications
   full control over the way glyphs are rendered, making fine
   typesetting and WYSIWIG display possible. Finally, it allows
   applications to use fonts that are not installed system-wide for
   displaying documents with embedded fonts.

   Xft is not compatible with the core fonts system: usage of Xft
   requires fairly extensive changes to toolkits and in some cases,
   applications. While X.Org continues to maintain the core fonts
   system, client software authors are encouraged to switch to Xft as
   soon as possible.

   More information about using and configuring the X font systems is
   in http://www.x.org/releases/X11R7.7/doc/xorg-docs/fonts/fonts.html.
   That document also includes background material on computer fonts
   in general and pointers to other reference sites, and reading
   those portions of it first may be helpful in understanding the
   following sections.

Core Font subsystem
~~~~~~~~~~~~~~~~~~~

   In the original X11 font mechanism, an X client which wants to
   render some text in the Times New Roman font at a size of 12
   points would first call XLoadFont() to open the font using the
   `XLFD font name <http://www.x.org/releases/X11R7.7/doc/xorg-docs/xlfd/xlfd.html>`__
   "-adobe-times-medium-r-normal--12-120-75-75-p-64-iso8859-1". The
   server opens that font (using routines in libXfont) and returns an
   XID associated with the open font, which the application then
   stores in the relevant GC's for later drawing operations. If that
   font is not found, the client can request a list of available
   fonts with XListFonts() - since XLFD's report a separate font name
   for every point size, style variant (bold, italic, roman,
   condensed, etc.), and supported encoding (iso8859-\* for older
   text encodings, iso10646-1 for Unicode), most X servers will
   return a list that is thousands of font entries long, which can
   take a long time to send over a low bandwidth remote connection.

   Before drawing text, many clients will first need to determine how
   big the string will be when drawn (for instance, to size a button
   or doing line wrapping of a text area). To do this, the client
   calls XTextExtents() with the string and font information, and the
   X server lays out the text in simple side-by-side order and
   returns the resulting bounding box and size information. If
   another layout is needed, such as complex layouts for languages
   such as Thai or Arabic, then the client has to do the layout
   itself. For fitting text into an area, this may involve many round
   trips trying different subsets of the string, adding latency to
   text drawing operations.

   Actually drawing the text is done via XDrawString() or XDrawText()
   calls, which redo the side-by-side layout again. Each
   XDrawString() call can draw only a single horizontal line of text,
   though characters along that baseline may be individually rotated.
   Text is drawn monochrome, with no antialiasing, using the
   foreground and background colors and font choice from the GC
   passed to the call. Each call can only draw characters in a single
   font, with text from a single encoding, so mixing English text in
   iso8859-1 with Chinese characters in big5-1 requires multiple
   calls. XDrawText() allows passing multiple strings, each with a
   different font property set, in a single call.

   The calls taking text strings each come in multiple variants,
   depending on how the text string is encoded, for instance, for
   XDrawString() there is actually:

   =================== ====================
   ``XDrawString``     Single byte text
   ``XDrawString16``   Double byte text
   ``XmbDrawString``   Multibyte text
   ``XwcDrawString``   Wide character text
   ``Xutf8DrawString`` UTF-8 multibyte text
   =================== ====================

   If you don't know what all those different text encoding types
   are, you can learn more about the variety of ways to encode text
   in:

   - `The Absolute Minimum Every Software Developer Absolutely,
      Positively Must Know About Unicode and Character Sets (No
      Excuses!) by Joel
      Spolsky <http://www.joelonsoftware.com/articles/Unicode.html>`__

   - `Wikipedia Category: Character
      Encoding <https://en.wikipedia.org/wiki/Category:Character_encoding>`__

   - `Fonts & Encodings: From Advanced Typography to Unicode and
      Everything in Between by Yannis
      Haralambous <http://shop.oreilly.com/product/9780596102425.do>`__
      Publisher: O'Reilly Media ISBN 10: 0-596-10242-9

Client-side fonts
~~~~~~~~~~~~~~~~~

   A new font system was designed and implemented in the early
   2000's, which sits alongside the legacy core font system, allowing
   old clients and new clients to run together. The new font system
   moved most of the work to the client side, reducing the number of
   round trips and lowering the latency required to draw fonts. It
   also added better support for complex text layouts, took advantage
   of the alpha blending support in the Render extension to provide
   anti-aliasing and LCD optimization for text rendering, and allowed
   clients to use fonts that were available in a document or with an
   application, without requiring them to be first installed in the X
   server or having to use the X Font Service (xfs) to provide remote
   access to them.

   The API provided by X.Org for this font system is libXft, but
   typically it sits in the middle of a stack of text handling & font
   rendering technologies. Clients use the text interfaces provided
   by their toolkits, or a general high level rendering API such as
   Cairo. Those use the Pango or Qt layout engines, possibly with the
   HarfBuzz engine, to determine how to place glyphs next to each
   other to form words, and if necessary, reshape them to fit their
   context. Those API's in turn use the FontConfig library to find
   available fonts for each character set or glyph required, and the
   FreeType library to rasterize images from the fonts in various
   formats, such as OpenType, TrueType, PCF, or Type1. The libXft
   library then sends the imaged text to the X server, using the
   Render extension glyph cache to avoid resending common characters
   with uniform appearances, and the render extension composites the
   text with the underlying image data to accomplish antialiasing
   effects via blending with the alpha channels of the edge pixels.

   This system allows clients to locally compute layouts, without
   round trips to the server; to draw text along any base of their
   choosing, not just a horizontal baseline; and to allow plugging in
   support for all sorts of different text handling models in the
   clients, depending on their needs, and without having to modify
   the X server or running the code in the potentially privileged X
   server process. FontConfig provides a more usable and human
   readable font naming scheme, with the above mentioned long XLFD
   name for 12 point Times New Roman instead being simply "Times New
   Roman-12".

   The new font rendering model is widely adopted in modern
   applications and toolkits such as Gtk+ and Qt, while the original
   X11 core font subsystem is maintained for backwards compatibility
   with legacy X11 applications that have not yet updated.


Debugging Client-Server Interactions
------------------------------------

   https://www.x.org/wiki/guide/debugging

   *Alan Coopersmith*

   Debugging X client applications presents additional challenges, as
   often problems are not found solely in the running program but
   involve the interaction with the X server, and may need monitoring
   of what the X server is doing or of the communications between the
   X client and server. There are several tools available for doing
   this.

   ::

      #. Event reporting
      #. The X-Resource extension
      #. Protocol monitors
      #. System level tracing

Event reporting
~~~~~~~~~~~~~~~

   Sometimes a problem is as simple as trying to figure out what
   event the X server sends for a certain key or button press, or
   other input. The xev program included in the X.Org sample
   applications provides a simple way to do this - simply run xev,
   give focus to its window, and cause the event to happen, and it
   will print out the details. For instance, a press and release of
   the "e" key on a keyboard generates this output from xev:

   ::

      KeyPress event, serial 115, synthetic NO, window 0x4a00001,
      root 0x15a, subw 0x0, time 170495410, (948,265), root:(966,365),
      state 0x0, keycode 26 (keysym 0x65, e), same_screen YES,
      XLookupString gives 1 bytes: (65) "e"
      XmbLookupString gives 1 bytes: (65) "e"
      XFilterEvent returns: False

      KeyRelease event, serial 115, synthetic NO, window 0x4a00001,
      root 0x15a, subw 0x0, time 170495531, (948,265), root:(966,365),
      state 0x0, keycode 26 (keysym 0x65, e), same_screen YES,
      XLookupString gives 1 bytes: (65) "e"
      XFilterEvent returns: False

The X-Resource extension
~~~~~~~~~~~~~~~~~~~~~~~~

   Clients can make several types of request to the X server to
   allocate memory in the X server on the clients behalf, such as
   creating windows or pixmaps. Often times when users complain of X
   server memory growth it is due to clients making these allocations
   and not cleaning them up. While the X server will free most
   resources associated with a client when the client exits, that
   doesn't stop long-lived clients like web browsers from growing the
   memory while the client is running.

   To help resolve this, the X-Resource extension was created to the
   to allow clients to get insight into the allocations that have
   been performed for each client in the X server. Several clients
   are available that can query this information. In GNOME, the
   Performance Monitor application can display a total X server
   memory usage per client by enabling the X Server Memory column in
   the information fields shown in the Preferences.

   More detailed information per client, breaking down usage by type
   of resource, is displayed by the xrestop program, available from
   http://www.freedesktop.org/wiki/Software/xrestop.

Protocol monitors
~~~~~~~~~~~~~~~~~

   Several programs can monitor an X protocol connection and display
   decoded packets to show what requests clients are making and the
   replies, errors, and events the server is sending in response.
   These include:

   - xscope

      - Sources in http://www.x.org/releases/individual/app/.
      - Described in http://www.x.org/releases/X11R7.6/doc/man/man1/xscope.1.xhtml
         and http://jklp.org/public/profession/papers/xscope/paper.htm

   - `x11vis <http://x11vis.org/>`__
   - `xmon <http://xmon.sourceforge.net/>`__
   - `xtrace <http://xtrace.alioth.debian.org/>`__
   - `wireshark <http://www.wireshark.org/>`__

   The first four of these are X protocol proxy servers - before you
   start your client, you must first start the proxy and configure it
   as a new xserver that connects to your current X server. For
   instance a common configuration is the Xorg server running as :0,
   and xscope running on :1. The client then needs to be set to
   connect to the xscope server, which in turn prints the
   communications it passes back and forth between the real server
   and client.

   One caveat with ``xtrace`` is that you may need the ``-n`` option
   in order to bypass authentication problems. For example:

   .. code:: bash

      jcomeau@aspire:~$ xtrace -o /tmp/skype.xtrace skype
      No display name to create specified, trying :9
      Error parsing xauth list data: less than three things in a line!

   But with ``-n``:

   .. code:: bash

      jcomeau@aspire:~$ xtrace -n -o /tmp/skype.xtrace skype
      No display name to create specified, trying :9
      Got connection from unknown(local)
      ...
      [starts skype successfully]

   [Can someone write about xmon & x11vis? I've never actually used
   them]

   Wireshark is a network protocol monitor. Unlike the proxy-style
   monitors, it can be started at any time during the life of the
   client, but it only monitors connections going over tcp sockets,
   not local connections. It's actually a general purpose network
   protocol analyzer, supporting hundreds of protocols, of which X11
   is just one.

System level tracing
~~~~~~~~~~~~~~~~~~~~

   The DTrace facility on Solaris, MacOS, and FreeBSD, and the
   SystemTap facility on Linux, provide the ability to trace
   operations across programs and correlate them between the client
   and server.

   Examples and more details can be found in the "Xserver provider
   for DTrace" document under http://www.x.org/releases/current/doc/
   as well as at https://blogs.oracle.com/alanc/tags/dtrace.


Contributing To X
-----------------

   https://www.x.org/wiki/guide/contributing

   *Matt Dew*

   This section describes skills new developers will need to
   successfully contribute to X. As noted in the
   ``Concepts`` chapter, there is a lot to X.Org and
   there is a significant learning curve. However, the curve is less
   steep than you might think, and the rewards are worth it.

   One thing that bears repeating is that X is a fairly complicated
   project. It is one of those projects where you will not understand
   everything---nor are you expected to. There is simply too much.
   Nobody on the project understands everything, not even the
   graybeards. However, you will be able to understand parts of the
   system immediately, and most of it eventually. Most X.Org
   developers are truly nice and genuinely want to help you when you
   have questions.

   If you are uncomfortable with the tools used to develop X, you are
   going to have a difficult time. This admonition may seem harsh,
   but it is not meant to discourage you. Rather it is meant to
   remind you to prepare up front, so that you are properly equipped.

   Here is a list of things you will need to understand. Maybe they
   are obvious, but you might be surprised how many people jump in
   without them.

   #. The C programming language. If you are relatively unfamiliar
      with C, X may not be the right project for you. You do not need
      to be a C guru, but you need to be comfortable working with the
      language. If you are working on part of the project that is not
      directly written in C (for example, the XCB language binding
      generator or Python bindings), you might be OK. However, you
      will never be far from a code base written in C. If you cannot
      program, there are still plenty of ways for you to contribute
      to X. Talk to the documentation or build system folks: they can
      always use help.

   #. Revision control / version control / source code management.
      You need to be comfortable with the concepts behind modern
      source code management systems (call them what you will). X.Org
      uses Git for most of its work, so you will need to learn at
      least the basics of Git. Git is a distributed source code
      management system rather than a centralized one. The more
      familiar you are with Git the better off you are; however, you
      can learn simple Git commands quickly if you understand source
      code management and why it is important.

   #. Building and compiling programs from scratch in the UNIX
      environment. X is a software project. That means you will be
      compiling software. Really, really cool software, but still
      software.

   #. Working remotely and asynchronously. X developers are scattered
      around the world. Communication among them involves the use of
      IRC, email lists, Skype, IM and other high-tech tools. Rarely
      are you in the same room, or even the same time zone, as a
      developer you are trying to work with. This can be a bit
      frustrating: sometimes questions are hard to ask, and sometimes
      replies to your questions are slow.

   #. Debugging. Debugging is an integral part of large projects like
      X. You should be familiar with standard debugging tools such as
      gdb, valgrind and strace. More importantly, you should know the
      methodology of debugging, with or without tools. Luckily, you
      need not be extraordinarily proficient: there are plenty of
      smart developers who can help you.

   #. Testing. You need not be a testing guru. However, you should be
      comfortable with creating and running basic tests of your code.
      You should know what a regression test is, and be prepared to
      use one. You should be unsurprised when X developers refuse to
      commit your untested patches.

   If you are comfortable in these areas, you should be in good
   shape. Again, you don't need to be guru-level. You need to be
   familiar enough with the items on this list that you can focus on
   design and implementation rather than getting stuck.

   The other chapters of this book discuss the overall architecture
   and individual parts of X. Here's a quick summary of the
   technologies X.Org uses:

   - C
   - Multiple Git repositories
   - Bugzilla
   - IRC channels
   - Mailing lists
   - Doxygen
   - DocBook/XML (not SGML)
   - IkiWiki (wiki)

   Below is a list of resources that you can refer to as you begin to
   work on X.

   - IRC - `irc.oftc.net <https://www.oftc.net/>`__ channels: #dri,
      #dri-devel, #wayland, #xcb, #xorg, #xorg-devel, #nouveau
   - Email lists:

      - https://lists.x.org/archives/xorg-devel/
      - https://lists.x.org/archives/xorg/
      - https://lists.freedesktop.org/archives/xcb/
      - https://dri.freedesktop.org/wiki/MailingLists

   - Gitlab - https://gitlab.freedesktop.org/xorg

      - `How to Submit Patches to the X.Org git
         repos <http://www.x.org/wiki/Development/Documentation/SubmittingPatches/>`__

   - Wiki - https://www.x.org/wiki
   - Maintainers (who can help with what) -
      https://gitlab.freedesktop.org/xorg/doc/xorg-docs/-/blob/master/MAINTAINERS

   This document is still a work in progress. If you have suggestions
   on things that would be helpful, please let us know.

   Welcome aboard.


Developer Documentation
-----------------------

   https://www.x.org/wiki/guide/documentation

   *Matt Dew*

   ::

      #. Doxygen

         #. Doxygen example

      #. Docbook/XML

         #. DocBook example
         #. Generating DocBook output
         #. Styling DocBook

      #. Manual Pages
      #. Wiki
      #. Conclusions

   The purpose of the developer documentation is to help developers
   understand how X works. One of the major goals is to centralize
   all X.Org documentation in the place it belongs, the X.Org project
   itself.

   There are four formats commonly used for X documentation:

   #. Doxygen for code comments. This is used to generate API
      documentation.
   #. Manual pages, including commands and public API in client-side
      libraries, are documented in the traditional roff man page
      format.
   #. Project wikis for changing documentation. Projects like XCB
      that have frequent changes relevant to developers use wikis
      (usually on freedesktop.org) to keep things up-to-date yet
      readable.
   #. Docbook for most other documentation. This includes the X11
      protocol specification and general X Window System
      documentation. Module-specific documentation is kept with the
      module to which it belongs.

Doxygen
~~~~~~~

   `Doxygen <http://www.doxygen.org>`__ is the preferred method of
   commenting the code in the X repositories. While some of the code
   is doxygen-ated, much of the core code still is not. People are
   welcome to help add doxygen comments to code. Adding comments is a
   good way to learn about X.Org internals and get used to touching
   the code. It is also a service to the X community. TODO: more
   detail so doxygen can be more useful to devs.

Doxygen example
~~~~~~~~~~~~~~~

   Here is a valid comment:

   .. code:: cpp

      /*****************************************************************************
         **
         ** xcb_generic_iterator_t xcb_render_pictformat_end
         ** 
         ** @param xcb_render_pictformat_iterator_t i
         ** @returns xcb_generic_iterator_t
         **
         *****************************************************************************/

   that doxygen will use to generate a simple API section for a C
   function. Generating the HTML documentation from the doxygen
   comments is as simple as "doxygen " once the config file is
   generated. A simple default config file can be generated by
   running doxygen with no arguments. Modifying the config file is
   beyond the scope of this document. More information can be found
   on the doxygen website.

Docbook/XML
~~~~~~~~~~~

   X uses `Docbook/XML <http://www.docbook.org/>`__ for normal
   documentation. Other than manual pages, code comments used in
   generating doxygen documentation and a few legacy documents,
   everything is now kept in Docbook format (or its AsciiDoc
   variant). Docbook is an open standard that is freely available;
   Docbook files are plain text. This means that documents can be
   created and edited by anyone without the need for special tools.

   Some documents in the tree are kept as
   `AsciiDoc <http://www.methods.co.nz/asciidoc/>`__ source, and
   converted to DocBook as needed. AsciiDoc syntax is more wiki-like,
   without the verbose tags and nested structures of DocBook XML, so
   code diffs are easier to read. Because Docbook can be generated
   from AsciiDoc, the danger of format proliferation that existed in
   the past is reduced.

   A major conversion effort by Matt Dew and others recently moved
   most of X's documentation to Docbook from a variety of other
   formats. The intent is that DocBook and AsciiDoc will be preserved
   as the standard formats for X documentation going forward. The
   format proliferation of the past caused a great deal of pain for X
   developers and documentation managers. Formats became outdated,
   with difficult-to-find tools needed to process them. The arcane
   knowledge about how to work with these formats was partly lost.
   Thus, the X developers ask that only DocBook and AsciiDoc be used.
   Help is available if documentation needs to be converted to these
   formats.

DocBook example
~~~~~~~~~~~~~~~

   Here is a DocBook example showing an initial cut at a document:

   .. code:: xml

      <?xml version="1.0" encoding="UTF-8" ?>
      <!DOCTYPE article
                  PUBLIC "-//OASIS//DTD DocBook XML V4.3//EN"
                  "http://www.oasis-open.org/docbook/xml/4.3/docbookx.dtd">

      <article id='lbxalg'>
      <title>LBX X Consortium Algorithms</title>
      <sect1 id='introduction'>
      <title>Introduction</title>
      para>This is an introduction</para>
      </sect1>
      </article>

   To format this example:

   .. code:: bash

      xmlto -x /path/to/xorg-xhtml.xsl --stringparam html.stylesheet=/path/to/xorg.css xhtml-nochunks abovefile.xml

Generating DocBook output
~~~~~~~~~~~~~~~~~~~~~~~~~

   As all documents in the X.Org tree are now Docbook files, the
   normal X.Org Makefiles are used for maintaining documentation.
   Simply invoking "make" will format the Docbook documentation.
   Autotools flags can be set to turn on or off specific
   documentation.

   Currently X.Org uses the xmlto utility to generate final output
   from the Docbook files in text, PostScript, PDF and HTML formats.
   Production of Epub is planned, but not yet implemented.

Styling DocBook
~~~~~~~~~~~~~~~

   CSS stylesheets are used to style the generated HTML output. CSS
   styles are tied to tags in the XML. For example, the "
   " tag denotes a program listing (source code) and the
   corresponding css style is ".programlisting". So adding
   ".programlisting {color: red}" will make all source code sections
   red. This sort of common tag is easily identified, but more
   advanced styling may be trickier. For the most part, re-using
   existing X stylesheets is a good strategy.
   XSL stylesheets are used to style DocBook XML for PDF and
   PostScript output. XSL stylesheets are quite different from CSS
   stylesheets; they have a very steep learning curve. However,
   proper use of XSL styling can result in highly
   professional-looking PDF. For example, the X documentation is
   setup to allow linking between documents in the X.Org tree. This
   style snippet will make these links blue:

   .. code:: xml

      <xsl:attribute-set name="xref.properties">
         <xsl:attribute name="color">blue</xsl:attribute>
      </xsl:attribute-set>

   XSL styles can be very complicated with conditionals and loops, so
   pretty much anything is possible. However, too much complexity is
   not preferred as it increases the work for others wanting to help.

Manual Pages
~~~~~~~~~~~~

   Here's an example manual page:

   ::

      .TH THISCOMMAND 1 ''''vendorstring''''
      .SH NAME
      thiscommand \- describe this command
      .SH SYNOPSIS
      .B "thiscommand"
      .RB [ -help ]
      .SH DESCRIPTION
      Here we describe what
      .I thiscommand
      does.
      .PP
      .SH OPTIONS
      The following options are supported:
      .TP
      .B \-h
      Help.
      .SH FILES
      .SH KNOWN BUGS
      .SH "SEE ALSO"
      OTHERCOMMAND(1)

   This troff manual file can be installed in the system as-is for
   access using the normal UNIX "man" command. To see what the manual
   page will look like without system-wide installation:

   ::

      create a path man/man1
      save the filename as man/man1/thiscommand.1
      export MANPATH=$MANPATH:man
      man thiscommand

   You can use groff to format manual pages for other purposes. For
   example, to produce a PDF:

   .. code:: bash

      groff -man -Tps thiscommand.1 >thiscommand.ps
      ps2pdf thiscommand.ps

   See the groff documentation for more details.

Wiki
~~~~

   The X.Org wiki is located at http://www.x.org/wiki. It contains a
   great deal of useful information. However, navigating the wiki can
   be a bit tricky. You can usually find what you are looking for
   using the search feature, by clicking on the "FindPage" entry in
   the title bar. (Find this link at the top of every page, right
   underneath the "X.Org Foundation" logo.) Google search also works
   well. If you're looking for hot topics, "RecentChanges" shows what
   pages have been recently updated.

   The wiki is a community resource, and everyone is encouraged to
   add (constructively) to it. Wiki-work is also a good way to learn
   about X.Org. However, please choose the location for new pages
   carefully. It is easier to find information on a well-structured
   wiki (even if the structure seems "weird" to you).

Conclusions
~~~~~~~~~~~

   There is plenty of documentation work to do. The X community is
   grateful for any hep you can provide, be it working on the wiki,
   checking that the content in the XML files is correct and
   up-to-date, experimenting with CSS and/or XSL styles to change the
   look of the output, or whatever. One of the most important aids to
   developers is complete, clear, accurate documentation. Always
   remember that other developers are just like you: good
   documentation makes their jobs easier; if you keep that in mind as
   you work, everyone benefits.

   More information on documentation can be found at:

   - http://www.x.org/wiki/Development/Documentation/WritingDocumentation
   - http://www.x.org/wiki/Documentation
   - http://www.x.org/wiki/DeveloperStart
   - http://www.x.org/releases/current/doc/


Appendix: Other Sources of Information
--------------------------------------

   https://www.x.org/wiki/guide/other-info

   *Alan Coopersmith*

   - X.Org website: http://www.x.org/wiki/

   - Documentation from latest X.Org release: http://www.x.org/releases/current/doc/

   - Blogs from X.Org & freedesktop.org developers: http://planet.x.org/

   - Other sites full of information:

      - Wikipedia X overview: http://en.wikipedia.org/wiki/X_Window_System
      - Kenton Lee's X pages: http://www.rahul.net/kenton/index.shtml
      - Wikibooks Guide to X11: http://en.wikibooks.org/wiki/Guide_to_X11
      - Learning Modern 3D Graphics Programming with OpenGL: http://www.arcsynthesis.org/gltut/index.html

   - The awful truth revealed: http://www.rahul.net/kenton/xvirus.html


