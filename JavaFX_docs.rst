
/🟡 TOC: Getting Started with JavaFX
=====================================

*  https://openjfx.io/openjfx-docs/
*  https://openjfx.io/javadoc/22/overview-tree.html
*  [Introduction to FXML](https://openjfx.io/javadoc/22/javafx.fxml/javafx/fxml/doc-files/introduction_to_fxml.html)
*  [JavaFX CSS Reference Guide](https://openjfx.io/javadoc/22/javafx.graphics/javafx/scene/doc-files/cssref.html)
- [JavaFX Documentation Project](https://fxdocs.github.io/docs/html5/)
*  https://github.dev/openjdk/jfx/blob/jfx22/doc-files/release-notes-22.md

.. container::

   .. rubric:: Getting Started with JavaFX
      :name: getting-started-with-javafx

   .. container:: row

      .. container:: col-md-3 sidenav

         .. container:: list-group

            -  `Introduction <#introduction>`__
            -  `Install Java <#install-java>`__
            -  `Run HelloWorld using JavaFX <#install-javafx>`__ 
            -  `Run HelloWorld via Maven <#maven>`__ 
            -  `Run HelloWorld via Gradle <#gradle>`__

            -  `Runtime images <#modular>`__

               -  `Modular from CLI <#modular>`__
               -  `Modular with Maven <#modular>`__
               -  `Modular with Gradle <#modular>`__
               -  `Custom JDK+JavaFX image <#modular>`__
               -  `Non-Modular project <#modular>`__

            -  `JavaFX and IntelliJ <#IDE-Intellij>`__

               -  `Non-modular from IDE <#IDE-Intellij>`__
               -  `Non-modular with Maven <#IDE-Intellij>`__
               -  `Non-modular with Gradle <#IDE-Intellij>`__
               -  `Modular from IDE <#IDE-Intellij>`__
               -  `Modular with Maven <#IDE-Intellij>`__
               -  `Modular with Gradle <#IDE-Intellij>`__

            -  `JavaFX and NetBeans <#IDE-NetBeans>`__

               -  `Non-modular from IDE <#IDE-NetBeans>`__
               -  `Non-modular with Maven <#IDE-NetBeans>`__
               -  `Non-modular with Gradle <#IDE-NetBeans>`__
               -  `Modular from IDE <#IDE-NetBeans>`__
               -  `Modular with Maven <#IDE-NetBeans>`__
               -  `Modular with Gradle <#IDE-NetBeans>`__

            -  `JavaFX and Eclipse <#IDE-Eclipse>`__

               -  `Non-modular from IDE <#IDE-Eclipse>`__
               -  `Non-modular with Maven <#IDE-Eclipse>`__
               -  `Non-modular with Gradle <#IDE-Eclipse>`__
               -  `Modular from IDE <#IDE-Eclipse>`__
               -  `Modular with Maven <#IDE-Eclipse>`__
               -  `Modular with Gradle <#IDE-Eclipse>`__

            -  `JavaFX and Visual Studio Code <#IDE-VSCode>`__

               -  `Non-modular from IDE <#IDE-VSCode>`__
               -  `Non-modular with Maven <#IDE-VSCode>`__
               -  `Non-modular with Gradle <#IDE-VSCode>`__
               -  `Modular with Maven <#IDE-VSCode>`__
               -  `Modular with Gradle <#IDE-VSCode>`__

            - `Next Steps <#next-steps>`__

   =================== ======================
   Module              Description
   =================== ======================
   ``javafx.base``     Defines the base APIs for the JavaFX UI toolkit, including APIs for bindings, properties, collections, and events.

   ``javafx.controls`` Defines the UI controls, charts, and skins that are available for the JavaFX UI toolkit.

   ``javafx.fxml``     Defines the FXML APIs for the JavaFX UI toolkit.

   ``javafx.graphics`` Defines the core scenegraph APIs for the JavaFX UI toolkit (such as layout containers, application lifecycle, shapes, transformations, canvas, input, painting, image handling, and effects), as well as APIs for animation, css, concurrency, geometry, printing, and windowing.

   ``javafx.media``    Defines APIs for playback of media and audio content, as part of the JavaFX UI toolkit, including MediaView and MediaPlayer.

   ``javafx.swing``    Defines APIs for the JavaFX / Swing interop support included with the JavaFX UI toolkit, including SwingNode (for embedding Swing inside a JavaFX application) and JFXPanel (for embedding JavaFX inside a Swing application).

   ``javafx.web``      Defines APIs for the WebView functionality contained within the the JavaFX UI toolkit.
   =================== ======================


/🟡 PART: JavaFX GUI Framework
===============================

.. https://openjfx.io/

.. container::

   .. container:: navbar-header

      -  `JavaFX <https://openjfx.io/index.html>`__
      -  `Home <#fh5co-home>`__
      -  `Download <#fh5co-intro>`__
      -  `One Framework to Rule Them All <#fh5co-services>`__
      -  `Documentation <#fh5co-documentation>`__
      -  `Community <#fh5co-work>`__
      -  `Testimonials <#fh5co-testimonials>`__
      -  `Highlights <https://openjfx.io/highlights/22>`__
      -  |openjfx-github-io|

   .. |openjfx-github-io| image:: data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdib3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42My4wLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcuMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMuMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYuMC4wIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIuMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMi4wIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4Ni4wLjMxNS4yMS42OS44MjUuNTdDMjAuNTY1IDIyLjA5MiAyNCAxNy41OTIgMjQgMTIuMjk3YzAtNi42MjctNS4zNzMtMTItMTItMTIiIC8+PC9zdmc+
      :target: https://github.com/openjfx/openjfx.github.io


.. container:: section
   :name: fh5co-home

   .. rubric:: JavaFX
      :name: javafx

   JavaFX is an open source, next generation client
   application platform for desktop, mobile and embedded
   systems built on Java. It is a collaborative effort by many
   individuals and companies with the goal of producing a
   modern, efficient, and fully featured toolkit for
   developing rich client applications.


.. container:: section
   :name: fh5co-intro

   .. rubric:: Download
      :name: download

   JavaFX runtime is available as a platform-specific SDK, as a
   number of jmods, and as a set of artifacts in Maven Central.

   `Download <https://gluonhq.com/products/javafx/>`__


   .. rubric:: Develop
      :name: develop

   JavaFX, also known as OpenJFX, is free software; licensed under
   the GPL with the class path exception, just like the OpenJDK.

   `Let's do it! <https://github.com/openjdk/jfx>`__

.. container:: section
   :name: fh5co-services

   .. rubric:: One framework to rule them all
      :name: one-framework-to-rule-them-all

   .. container:: row

      .. container:: col-md-12 subtext to-animate

         JavaFX applications can target desktop, mobile and
         embedded systems. Libraries and software are available for
         the entire life-cycle of an application.

   .. container:: row

      .. rubric:: Scene Builder
         :name: scene-builder

      Create beautiful user interfaces and turn your design into an
      interactive prototype. Scene Builder closes the gap between
      designers and developers by creating user interfaces which can be
      directly used in a JavaFX application.

      `Wiki <https://github.com/gluonhq/scenebuilder/wiki/Basic-JavaFX-project-with-Scene-Builder>`__
      `Download <https://gluonhq.com/products/scene-builder>`__

      .. rubric:: TestFX
         :name: testfx

      TestFX allows developers to write simple assertions to simulate user
      interactions and verify expected states of JavaFX scene-graph nodes.

      `Wiki <https://github.com/TestFX/TestFX/#features>`__
      `Repository <https://github.com/TestFX/TestFX/>`__

.. container:: section
   :name: fh5co-documentation

   .. container:: row

         .. rubric:: Documentation
            :name: documentation

   .. container:: row

      .. container:: mr-2 card

         .. rubric:: Reference Documentation
            :name: reference-documentation

         -  `Getting Started with JavaFX 11+ <https://openjfx.io/openjfx-docs/>`__
         -  `API documentation <https://openjfx.io/javadoc/22/>`__
         -  `API documentation [source]<https://github.com/FXDocs/docs/blob/master/src/docs/asciidoc/index.asc>`__
         -  `Introduction to FXML <https://openjfx.io/javadoc/22/javafx.fxml/javafx/fxml/doc-files/introduction_to_fxml.html>`__
         -  `JavaFX CSS Reference Guide <https://openjfx.io/javadoc/22/javafx.graphics/javafx/scene/doc-files/cssref.html>`__
         -  `Release Notes <https://github.com/openjdk/jfx/blob/jfx22/doc-files/release-notes-22.md>`__

      .. container:: ml-2 card

         .. rubric:: Community Documentation
            :name: community-documentation

         -  `FXDocs <https://fxdocs.github.io/docs/html5/>`__
         -  `Jenkov.com <http://tutorials.jenkov.com/javafx/index.html>`__
         -  `Almas Baimagambetov's Youtube tutorials <https://www.youtube.com/playlist?list=PL4h6ypqTi3RR_bhBk6PtLfD83YkaJXXxw>`__

.. container:: section
   :name: fh5co-work

   .. container:: row

         .. rubric:: Community
            :name: community

         .. container:: row

            .. container:: col-md-8 col-md-offset-2 subtext to-animate

               JavaFX features a vibrant and passionate developer
               community. This enthusiasm can be found in the open source
               mailing list. Here are a few examples of tools and
               frameworks built around JavaFX.

   .. container:: row

      .. container:: col-md-4

         |Actlist|

         **Actlist**

         JavaFx Utility Platform to easy and simply execute your own act
         list.

      .. container:: col-md-4

         |AsciidocFX|

         **AsciidocFX**

         An Asciidoc editor to build PDF, Epub, Mobi and HTML books,
         documents and slides

      .. container:: col-md-4

         |BootstrapFX|

         **BootstrapFX**

         Twitter's Bootstrap CSS for JavaFX

   .. container:: row

      .. container:: col-md-4

         |CalendarFX|

         **CalendarFX**

         A Java framework for creating sophisticated calendar views

      .. container:: col-md-4

         |Charts|

         **Charts**

         A library for scientific charts in JavaFX.

      .. container:: col-md-4

         |ControlsFX|

         **ControlsFX**

         De-facto JavaFX controls library

   .. container:: row

      .. container:: col-md-4

         |The Deep Space Trajectory Explorer|

         **DSTE**

         The Deep Space Trajectory Explorer

      .. container:: col-md-4

         |image-FlexGanttFX|

         **FlexGanttFX**

         A library for rendering Gantt charts in JavaFX

      .. container:: col-md-4

         |FormsFX|

         **FormsFX**

         A framework for easily creating forms for a JavaFX application.

   .. container:: row

      .. container:: col-md-4

         |FXGL|

         **FXGL**

         JavaFX game engine

      .. container:: col-md-4

         |FXRibbon|

         **FXRibbon**

         Ribbon control library for JavaFX, based on the Microsoft Ribbon.

      .. container:: col-md-4

         |FXSkins|

         **FXSkins**

         A library of new Skins for JavaFX controls. These Skins will add
         more functionality to the controls of your applications with no
            need to make code changes.

   .. container:: row

      .. container:: col-md-4

         |FXyz|

         **FXyz project**

         3D Visualization and Components library

      .. container:: col-md-4

         |Gluon Maps|

         **Gluon Maps**

         Tiles based geo-location map framework

      .. container:: col-md-4

         |Hero 1.0|

         **Hero 1.0**

         CAD application

   .. container:: row

      .. container:: col-md-4

         |Ikonli|

         **Ikonli**

         Font icon packs for JavaFX applications

      .. container:: col-md-4

         |JFX Central opened in the browser|

         **JFX Central**

         Community-driven webpage about JavaFX. Runs with JavaFX and JPro
         on the Web.

      .. container:: col-md-4

         |JITWatch|

         **JITWatch**

         A Log analyser and visualiser for the HotSpot JIT compiler.

   .. container:: row

      .. container:: col-md-4

         |JMetro|

         **JMetro**

         A modern theme for JavaFX applications with light and dark style

      .. container:: col-md-4

         |MaterialFX|

         **MaterialFX**

         MaterialFX is not just another theme. MaterialFX brings restyles,
         remade and brand new controls to JavaFX. It also offer many
            utilities to ease JavaFX apps development.

      .. container:: col-md-4

         |Medusa|

         **Medusa**

         A JavaFX library for Gauges and Clocks.

   .. container:: row

      .. container:: col-md-4

         |ModellusX|

         **Modellus X**

         A freely available application used worldwide that enables
         students and teachers (high school and university) to use
            mathematics to create or explore models interactively.

      .. container:: col-md-4

         |Object Graph Visualizer|

         **Object Graph Visualizer 3.2**

         A tool for to understand the Object Oriented paradigm and
         patterns

      .. container:: col-md-4

         |Recaf|

         **Recaf**

         An easy to use modern Java bytecode editor

   .. container:: row

      .. container:: col-md-4

         |TilesFX|

         **TilesFX**

         A JavaFX library containing tiles for Dashboards

      .. container:: col-md-4

         |ValidatorFX|

         **ValidatorFX**

         Form validation library

      .. container:: col-md-4

         |XR3Player|

         **XR3Player**

         Powerful JavaFX Media Player + Web Browser .

   .. container:: row

      .. container:: col-md-12 text-center to-animate

.. container:: section
   :name: fh5co-testimonials

   .. container::

      .. container:: row

            .. rubric:: Testimonials
               :name: testimonials

            .. container:: row

               .. container:: col-md-8 col-md-offset-2 subtext to-animate

                  .. rubric:: 
                     :name: section-1

      .. container:: row

         .. container:: col-md-6

            .. container:: box-testimony

                  “I’m excited to see the more folks from the wider Java
                  Community working together with Oracle on JavaFX. This release
                  proves there is a great future for client-side Java
                  development. As an OpenJDK Project , OpenJFX shares much of
                  its principles and infrastructure, leading to a high-quality
                  release that is very well aligned with the upcoming Java 11
                  release.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/Saab.jpg
                     :alt: Georges Saab

                  Georges Saab Vice President, Software Development, Java
                  Platform Group at Oracle

         .. container:: col-md-6

            .. container:: box-testimony

                  “I am very pleased with the unbundled OpenJFX 11 release,
                  which is now available to developers via maven modules or a
                  standalone SDK. This release is a great example of what can
                  happen with a vibrant community of open-source developers. I
                  look forward to the future of JavaFX as a community-driven
                  project.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/Rushforth.jpg
                     :alt: Kevin Rushforth

                  Kevin Rushforth OpenJFX Project Co-Lead, Oracle

      .. container:: row

         .. container:: col-md-6

            .. container:: box-testimony

                  “OpenJFX is like a child to me. After helping it to grow up
                  for so long, I now look at it proudly and excited about its
                  future. The community effort that is growing around it pleases
                  me to no end, and I can’t wait to see where it goes next.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/jonathan.jpg
                     :alt: Jonathan Giles

                  Jonathan Giles Java guy at Microsoft, OpenJFX contributor &
                  ControlsFX project lead

         .. container:: col-md-6

            .. container:: box-testimony

                  “As an advocate of JavaFX for over a decade I’m thrilled about
                  the community support and momentum of OpenJFX. A big thanks to
                  the folks at Gluon for providing leadership to the OpenJFX
                  effort!”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/weaver.jpg
                     :alt: James Weaver

                  James Weaver Developer advocate at Pivotal

      .. container:: row

         .. container:: col-md-6

            .. container:: box-testimony

                  “For me OpenJFX represents a major milestone in the ongoing
                  effort to make JavaFX the leading technology for mobile,
                  embedded, and desktop applications. Finally Java has an
                  advanced UI toolkit that can evolve independently of JDK
                  development activities. A toolkit that is supported by a
                  passionate developer community where each member can directly
                  contribute to its future!”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/Lemmermann.jpg
                     :alt: Dirk Lemmermann

                  Dirk Lemmermann CEO of DLSC Software & Consulting GmbH

         .. container:: col-md-6

            .. container:: box-testimony

                  “JavaFX is a fantastic technology that has enabled the
                  cost-effective development of capabilities while providing
                  performance and customization necessary for our engineering
                  problems. OpenJFX 11 is a big step forward that streamlines
                  our application images, making them more lightweight. This
                  makes distribution to our users performing design analysis
                  supporting NASA missions easy so they can move forward
                  faster.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/sean.jpg
                     :alt: Sean Phillips

                  Sean Phillips Software Architect for the Deep Space Trajectory
                  Explorer at a.i. solutions

      .. container:: row

         .. container:: col-md-6

            .. container:: box-testimony

                  “At KBC, we use JavaFX in a number of projects. We are
                  extremely happy to see that the JavaFX project is moving
                  forward. The open development in OpenJFX ensures that
                  different companies can provide their input, which typically
                  results in high-quality releases.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/person1.jpg
                     :alt: KBC

                  Lieven Franckaert Project Leader at KBC Bank

         .. container:: col-md-6

            .. container:: box-testimony

                  “I’m very optimistic about JavaFX 11 and beyond. The excellent
                  technical work, including hardware acceleration and first
                  class Java API’s are now combined with modern, open
                  development, testing and integration approaches. The input of
                  new contributors is already showing.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/JohanVos.jpg
                     :alt: Johan Vos

                  Johan Vos OpenJFX Project Co-Lead, Co-founder at Gluon

      .. container:: row

         .. container:: col-md-6

            .. container:: box-testimony

                  “JavaFX helps us provide the best solution for our customers,
                  and with the new JavaFX 11 we will be even better than before.
                  Thus, we have already started to migrate our projects. As a
                  developer, it is fun to design JavaFX products with all the
                  new potential and options it gives to enhance the customer
                  experience.”

               .. container:: author to-animate

                  .. figure:: https://openjfx.io/images/diego.jpg
                     :alt: Diego Cirujano Cuesta

                  Diego Cirujano Cuesta Zeiss Expert Leader - Staff

.. container::

   .. container::

      .. container:: col-md-12 text-center

         This website is licensed under a Creative Commons
         Attribution-NonCommercial 4.0 International License.

   .. container:: gluon

      .. container:: col-md-12 text-center

         `Gluon <https://gluonhq.com>`__ OpenJFX


.. |Actlist| image:: https://openjfx.io/images/Actlist.png
   :target: https://github.com/actlist/actlist
.. |AsciidocFX| image:: https://openjfx.io/images/AsciidocFX.png
   :target: https://github.com/asciidocfx/AsciidocFX
.. |BootstrapFX| image:: https://openjfx.io/images/BootstrapFX.png
   :target: https://github.com/aalmiray/bootstrapfx
.. |CalendarFX| image:: https://openjfx.io/images/CalendarFX.png
   :target: https://github.com/dlemmermann/CalendarFX
.. |Charts| image:: https://openjfx.io/images/Charts.png
   :target: https://github.com/HanSolo/charts
.. |ControlsFX| image:: https://openjfx.io/images/ControlsFX.png
   :target: http://controlsfx.org/
.. |The Deep Space Trajectory Explorer| image:: https://openjfx.io/images/dste.jpg
   :target: https://ai-solutions.com/dste/
.. |image-FlexGanttFX| image:: https://openjfx.io/images/FlexGanttFX.png
   :target: https://dlsc.com/products/flexganttfx/
.. |FormsFX| image:: https://openjfx.io/images/FormsFX.png
   :target: https://github.com/dlemmermann/FormsFX
.. |FXGL| image:: https://openjfx.io/images/FXGL.jpg
   :target: https://github.com/AlmasB/FXGL
.. |FXRibbon| image:: https://openjfx.io/images/FXRibbon.png
   :target: https://pixelduke.com/fxribbon/
.. |FXSkins| image:: https://openjfx.io/images/FXSkins.jpg
   :target: https://pixelduke.com/FXSkins/
.. |FXyz| image:: https://openjfx.io/images/fxyz.png
   :target: https://github.com/FXyz/FXyz
.. |Gluon Maps| image:: https://openjfx.io/images/GluonMaps-1024x592@2x.png
   :target: https://gluonhq.com/labs/maps/
.. |Hero 1.0| image:: https://openjfx.io/images/Hero1_0.jpg
   :target: https://pixelduke.com/2020/07/27/creating-a-cad-application-in-java-javafx/
.. |Ikonli| image:: https://openjfx.io/images/Ikonli.png
   :target: https://github.com/aalmiray/ikonli
.. |JFX Central opened in the browser| image:: https://openjfx.io/images/jfxcentral.png
   :target: https://jfx-central.com/
.. |JITWatch| image:: https://openjfx.io/images/JITWatch.png
   :target: https://github.com/AdoptOpenJDK/jitwatch
.. |JMetro| image:: https://openjfx.io/images/JMetro-hero_image.png
   :target: https://pixelduke.com/java-javafx-theme-jmetro/
.. |MaterialFX| image:: https://openjfx.io/images/MaterialFX.jpg
   :target: https://github.com/palexdev/MaterialFX
.. |Medusa| image:: https://openjfx.io/images/Medusa.png
   :target: https://github.com/HanSolo/Medusa
.. |ModellusX| image:: https://openjfx.io/images/modellusX.jpg
   :target: https://pixelduke.com/work/#Modellus
.. |Object Graph Visualizer| image:: https://openjfx.io/images/ObjectGraphVisualizer.png
   :target: https://github.com/Nurtak/ObjectGraphVisualization
.. |Recaf| image:: https://openjfx.io/images/Recaf.png
   :target: https://github.com/Col-E/Recaf
.. |TilesFX| image:: https://openjfx.io/images/TilesFX.png
   :target: https://github.com/HanSolo/tilesfx
.. |ValidatorFX| image:: https://openjfx.io/images/ValidatorFX.png
   :target: https://github.com/effad/ValidatorFX
.. |XR3Player| image:: https://openjfx.io/images/XR3Player.png
   :target: https://github.com/goxr3plus/XR3Player


/🟡 PART: Introduction
=======================

.. https://openjfx.io/openjfx-docs/introduction.html

.. container::

   JavaFX allows you to create Java applications with a modern,
   hardware-accelerated user interface that is highly portable.

   There is 
   `detailed reference documentation for JavaFX <https://docs.oracle.com/javase/8/javase-clienttechnologies.htm>`__, 
   and this short tutorial will show you how to write a JavaFX 11 application.

   For information on how to run JavaFX applications on mobile platforms, please see
   `Getting Started with Gluon Mobile <https://docs.gluonhq.com/#_getting_started>`__.

   For information on Long Term Support (LTS) for JavaFX, please see 
   `JavaFX Long Term Support options <https://gluonhq.com/services/javafx-support/>`__.

   JavaFX builds on top of JDK and is a standalone component. There are 2 different
   options for developing JavaFX applications:

   -  Use the `JavaFX SDK <https://gluonhq.com/products/javafx/>`__ (choosing
      between 17 LTS, latest release 15, or an early access build).
   -  Use a build system (e.g. maven/gradle) to download the required modules from
      Maven Central (choosing as well between the same mentioned versions).

   In any case, for both options, it is required to have a recent version of JDK
   11, or at least JDK 17.

/🟡 PART: Install Java
=======================

.. https://openjfx.io/openjfx-docs/install-java.html

.. container::

   Download an appropriate JDK for your operating system. The latest JDK can be
   downloaded from the official `OpenJDK <https://jdk.java.net/21/>`__ website.

   Once installed, you can use the java command from your command line.

   Check if the correct java version is installed. The following shows the output
   for OpenJDK 21:

   ::

      $ java -version
      openjdk version "21" 2023-09-19
      OpenJDK Runtime Environment (build 21+35-2513)
      OpenJDK 64-Bit Server VM (build 21+35-2513, mixed mode, sharing)

   You need to set the **JAVA_HOME** environment variable to the JDK installation
   directory. You can follow 
   `this guide <http://www.baeldung.com/java-home-on-windows-7-8-10-mac-os-x-linux>`__ to
   set JAVA_HOME for your platform.

   .. container:: alert alert-warning

      **Note:** If your system has multiple versions of JDK installed, you need to
      make sure that the JAVA_HOME environment variable points to correct JDK.
      JavaFX 11 needs at least JDK 17.

/🟡 PART: Run HelloWorld using JavaFX SDK
==========================================

.. https://openjfx.io/openjfx-docs/install-javafx.html

.. container::

   If you want to use the JavaFX SDK instead of a build tool, download an
   appropriate `JavaFX runtime <https://gluonhq.com/products/javafx/>`__ for your
   operating system and unzip it to a desired location. For this tutorial, we will
   be using JavaFX 11.

   Add an environment variable pointing to the lib directory of the runtime:

   -  `Linux/Mac <#nix-env>`__
   -  `Windows <#win-env>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-env

         .. code:: no-border-radius

            export PATH_TO_FX=path/to/javafx-sdk-11/lib

      .. container:: tab-pane
         :name: win-env

         ::

            set PATH_TO_FX="path\to\javafx-sdk-11\lib"

   You can now compile and run JavaFX applications from the command line using the
   JavaFX runtime.

   Compile the application (e.g. use
   `HelloFX.java <https://github.com/openjfx/samples/blob/master/HelloFX/CLI/hellofx/HelloFX.java>`__
   from this
   `sample <https://github.com/openjfx/samples/blob/master/HelloFX/CLI>`__) using:

   -  `Linux/Mac <#nix-javac>`__
   -  `Windows <#win-javac>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-javac

         .. code:: no-border-radius

            javac --module-path $PATH_TO_FX --add-modules javafx.controls HelloFX.java

      .. container:: tab-pane
         :name: win-javac

         ::

            javac --module-path %PATH_TO_FX% --add-modules javafx.controls HelloFX.java

   **Important**: Make sure to add the required modules, keeping into account
   transitive dependencies are automatically resolved (for instance, there is no
   need to add javafx.graphics module, since it is
   `transitively <https://openjfx.io/javadoc/12/javafx.controls/module-summary.html>`__
   required by the javafx.controls module). But if your application is using FXML,
   you will need to add the javafx.fxml module as well, as shown below:

   -  `Linux/Mac <#nix-fxml>`__
   -  `Windows <#win-fxml>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-fxml

         .. code:: no-border-radius

            javac --module-path $PATH_TO_FX --add-modules javafx.controls,javafx.fxml HelloFX.java

      .. container:: tab-pane
         :name: win-fxml

         ::

            javac --module-path %PATH_TO_FX% --add-modules javafx.controls,javafx.fxml HelloFX.java

   Finally, run the application using:

   -  `Linux/Mac <#nix-java>`__
   -  `Windows <#win-java>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-java

         .. code:: no-border-radius

            java --module-path $PATH_TO_FX --add-modules javafx.controls HelloFX

      .. container:: tab-pane
         :name: win-java

         ::

            java --module-path %PATH_TO_FX% --add-modules javafx.controls HelloFX

/🟡 PART: Run HelloWorld using Maven
=====================================

.. https://openjfx.io/openjfx-docs/maven.html

.. container::

   If you want to develop JavaFX applications using Maven, you don't have to
   download the JavaFX SDK. Just specify the modules and the versions you want in
   the pom.xml, and the build system will download the required modules, including
   the native libraries for your platform.

   Here is a
   `pom.xml <https://github.com/openjfx/samples/blob/master/HelloFX/Maven/hellofx/pom.xml>`__
   file which shows how to achieve this, included in this
   `sample <https://github.com/openjfx/samples/blob/master/HelloFX/Maven>`__.

   Alternatively, we have created 
   `JavaFX Maven Archetypes <https://github.com/openjfx/javafx-maven-archetypes>`__ to quickly
   create Maven projects. A simple JavaFX project can be created by executing the
   following command:

   ::

      mvn archetype:generate \
              -DarchetypeGroupId=org.openjfx \
              -DarchetypeArtifactId=javafx-archetype-simple \
              -DarchetypeVersion=0.0.3 \
              -DgroupId=org.openjfx \
              -DartifactId=sample \
              -Dversion=1.0.0 \
              -Djavafx-version=11

   The pom uses the 
   `JavaFX Maven plugin <https://github.com/openjfx/javafx-maven-plugin>`__:

   ::

      <plugins>
          <plugin>
              <groupId>org.openjfx</groupId>
              <artifactId>javafx-maven-plugin</artifactId>
              <version>0.0.1</version>
              <configuration>
                  <mainClass>HelloFX</mainClass>
              </configuration>
          </plugin>
      </plugins>

   Add the maven dependencies:

   ::

      <dependencies>
        <dependency>
          <groupId>org.openjfx</groupId>
          <artifactId>javafx-controls</artifactId>
          <version>11</version>
        </dependency>
      </dependencies>

   **Important**: Note that transitive dependencies are automatically resolved (for
   instance, there is no need to add a dependency for the javafx.graphics module,
   since it is `transitively <https://openjfx.io/javadoc/15/javafx.controls/module-summary.html>`__
   resolved by the javafx.controls module). But if your application is using FXML,
   you will need to add a dependency for the javafx.fxml module as well.

   Finally, run the application (e.g. based on the
   `HelloFX.java <https://github.com/openjfx/samples/blob/master/HelloFX/Maven/hellofx/src/main/java/HelloFX.java>`__
   from the referred sample):

   ::

      mvn clean javafx:run

   .. container:: alert alert-warning

      **Note:** Make sure to set the JAVA_HOME environment variable to the correct
      JDK location.

/🟡 PART: Run HelloWorld using Gradle
======================================

.. https://openjfx.io/openjfx-docs/gradle.html

.. container::

   Similar to Maven, we can declare the required JavaFX modules in the build.gradle
   file. However, for Gradle we need to apply the JavaFX gradle plugin:

   ::

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.0.5'
      }

   Next, we add the required modules. For instance, if we only need the
   javafx.controls module, we will include:

   ::

      javafx {
          version = "12"
          modules = [ 'javafx.controls' ]
      }

   **Important**: Note that transitive dependencies are automatically resolved (for
   instance, there is no need to add a dependency for the javafx.graphics module,
   since it is
   `transitively <https://openjfx.io/javadoc/15/javafx.controls/module-summary.html>`__
   resolved by the javafx.controls module). But if your application is using FXML,
   you will need to add the javafx.fxml module as well.

   You can specify a distinct version of JavaFX. For example, if you want to stick
   to JavaFX 17.0.8:

   ::

      javafx {
          version = "17.0.8"
          modules = [ 'javafx.controls' ]
      }

   Here is a
   `build.gradle <https://github.com/openjfx/samples/blob/master/HelloFX/Gradle/hellofx/build.gradle>`__
   file which shows how to achieve this, taken from this
   `sample <https://github.com/openjfx/samples/blob/master/HelloFX/Gradle>`__.

   Run the application (e.g. use
   `HelloFX.java <https://github.com/openjfx/samples/blob/master/HelloFX/Gradle/hellofx/src/main/java/HelloFX.java>`__
   from the given sample) using:

   -  `Linux/Mac <#nix-grad>`__
   -  `Windows <#win-grad>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-grad

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-grad

         ::

            gradlew run

   .. container:: alert alert-warning

      **Note:** Our recommendation for the minimum Gradle version against each JDK
      is as follows:

      ============== === === === === ===
      JDK version    11  12  13  14  15
      Gradle Version 5.0 5.0 6.0 6.3 6.3
      ============== === === === === ===

/🟡 PART: Runtime images
=========================

.. https://openjfx.io/openjfx-docs/modular.html

.. container::

   A runtime image of your JavaFX project is a custom JRE that contains only the
   platform modules that are required for your application.

   If you want to create a runtime image of your JavaFX project follow these
   instructions.

   Download an appropriate 
   `JavaFX runtime and JavaFX jmods <https://gluonhq.com/products/javafx/>`__ 
   for your operating system and
   unzip them to a desired location.

   Add these environment variables pointing to the lib directory of the runtime and
   to the jmods directory:

   -  `Linux/Mac <#nix-mods>`__
   -  `Windows <#win-mods>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-mods

         .. code:: no-border-radius

            export PATH_TO_FX=path/to/javafx-sdk-12/lib
            export PATH_TO_FX_MODS=path/to/javafx-jmods-11

      .. container:: tab-pane
         :name: win-mods

         ::

            set PATH_TO_FX="path\to\javafx-sdk-12\lib"
            set PATH_TO_FX_MODS="path\to\javafx-jmods-11"

   .. container::
      :name: MOD-CLI

   /🟡 TOP: Modular from CLI
   ~~~~~~~~~~~~~~~~~~~~~~~~~

   You can run or create a runtime image of your JavaFX project from command line.
   A simple example can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/CLI>`__.

   The application has a single class
   `HelloFX.java <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/CLI/hellofx/src/hellofx/HelloFX.java>`__
   with its
   `module-info <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/CLI/hellofx/src/module-info.java>`__
   file that defines the hellofx module. Compile it either using the JavaFX SDK:

   -  `Linux/Mac <#nix-javacd>`__
   -  `Windows <#win-javacd>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-javacd

         .. code:: no-border-radius

            javac --module-path $PATH_TO_FX -d mods/hellofx $(find src/ -name "*.java")

      .. container:: tab-pane
         :name: win-javacd

         ::

            dir /s /b src\*.java > sources.txt & javac --module-path %PATH_TO_FX% -d mods/hellofx @sources.txt & del sources.txt

   or using the JavaFX jmods:

   -  `Linux/Mac <#nix-javacdmod>`__
   -  `Windows <#win-javacdmod>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-javacdmod

         .. code:: no-border-radius

            javac --module-path $PATH_TO_FX_MODS -d mods/hellofx $(find src/ -name "*.java")

      .. container:: tab-pane
         :name: win-javacdmod

         ::

            dir /s /b src\*.java > sources.txt & javac --module-path %PATH_TO_FX_MODS% -d mods/hellofx @sources.txt & del sources.txt

   .. container:: alert alert-warning

      **Note:** Note that the output is placed under mods/hellofx for convenience,
      but it could use any other name.

   To run the modular application with the java command you need the JavaFX SDK
   modules and your module added to the module path:

   -  `Linux/Mac <#nix-javamod>`__
   -  `Windows <#win-javamod>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-javamod

         .. code:: no-border-radius

            java --module-path $PATH_TO_FX:mods -m hellofx/hellofx.HelloFX

      .. container:: tab-pane
         :name: win-javamod

         ::

            java --module-path "%PATH_TO_FX%;mods" -m hellofx/hellofx.HelloFX

   /🟡 Sec: jlink
   ^^^^^^^^^^^^^^

   With a modular project,
   `jlink <https://docs.oracle.com/en/java/javase/15/docs/specs/man/jlink.html>`__
   can be used to create a custom runtime image using the JavaFX jmods:

   -  `Linux/Mac <#nix-jlink>`__
   -  `Windows <#win-jlink>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jlink

         .. code:: no-border-radius

            $JAVA_HOME/bin/jlink --module-path $PATH_TO_FX_MODS:mods --add-modules hellofx --output hellofx

      .. container:: tab-pane
         :name: win-jlink

         ::

            jlink --module-path "%PATH_TO_FX_MODS%;mods" --add-modules hellofx --output hellofx

   And after the image is built, you can run it:

   -  `Linux/Mac <#nix-run>`__
   -  `Windows <#win-run>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-run

         .. code:: no-border-radius

            hellofx/bin/java -m hellofx/hellofx.HelloFX

      .. container:: tab-pane
         :name: win-run

         ::

            hellofx\bin\java -m hellofx/hellofx.HelloFX

   .. container:: alert alert-warning

      **Note:** This custom JRE is platform-specific.

   .. container::
      :name: MOD-Maven

   /🟡 TOP: Modular with Maven
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~

   You can run or create a runtime of your JavaFX Maven project. A simple example
   can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Maven>`__.

   The application has a main class
   `MainApp.java <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Maven/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   with its
   `module-info <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Maven/hellofx/src/main/java/module-info.java>`__
   file that defines the hellofx module. It also uses FXML, and requires the
   javafx.fxml dependency added to the
   `pom.xml <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Maven/hellofx/pom.xml>`__.

   It can be compiled and run on command line with javac, but using Maven we can
   simply do:

   ::

      mvn clean javafx:run

   To create a custom runtime, using the 
   `JavaFX Maven plugin <https://github.com/openjfx/javafx-maven-plugin>`__, you can do:

   ::

      mvn clean javafx:jlink

   Note the plugin allows the usual
   `options <https://github.com/openjfx/javafx-maven-plugin#javafxjlink-options>`__
   as the jlink command, as well as creating a launcher or a zip with the custom
   image.

   And after the image is built, you can run it from command line:

   -  `Linux/Mac <#nix-mvn-run>`__
   -  `Windows <#win-mvn-run>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-mvn-run

         .. code:: no-border-radius

            target/hellofx/bin/launcher

      .. container:: tab-pane
         :name: win-mvn-run

         ::

            target\hellofx\bin\launcher

   .. container::
      :name: MOD-Gradle

   /🟡 TOP: Modular with Gradle
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   You can run or create a runtime of your JavaFX Gradle project. A simple example
   can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Gradle>`__.

   The application has a main class
   `HelloFX.java <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Gradle/hellofx/src/main/java/hellofx/HelloFX.java>`__
   with its
   `module-info <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Gradle/hellofx/src/main/java/module-info.java>`__
   file that defines the hellofx module, and the required
   `build.gradle <https://github.com/openjfx/samples/blob/master/CommandLine/Modular/Gradle/hellofx/build.gradle>`__
   file.

   It can be compiled and run on command line with javac, but using Gradle we can
   simply do:

   -  `Linux/Mac <#nix-cligradlerun>`__
   -  `Windows <#win-cligradlerun>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-cligradlerun

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-cligradlerun

         ::

            gradlew run

   To create a custom runtime the referred `steps <#>`__ can be used to generate a
   gradle task. Alternatively, there is a plugin that does it for us: the
   `org.beryx.jlink <https://badass-jlink-plugin.beryx.org/releases/latest/>`__. It
   can be combined with the JavaFX Gradle plugin:

   ::

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.0.7'
        id 'org.beryx.jlink' version '2.9.4'
      }

      javafx {
          version = "12"
          modules = [ 'javafx.controls' ]
      }

      jlink {
          launcher {
              name = 'hellofx'
          }
      }

   to generate and run the custom image:

   -  `Linux/Mac <#nix-cligradlelink>`__
   -  `Windows <#win-cligradlelink>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-cligradlelink

         .. code:: no-border-radius

            ./gradlew jlink
            build/image/bin/hellofx

      .. container:: tab-pane
         :name: win-cligradlelink

         ::

            gradlew jlink
            build\image\bin\hellofx

   .. container::
      :name: JDK-FX

   /🟡 TOP: Custom JDK+JavaFX image
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   You can use jlink to create a runtime image that includes some or all the JavaFX
   modules, without being attached to a given project.

   With this image you will be able to run JavaFX modular or non-modular projects,
   use it as a new JRE from your IDE to create regular JavaFX projects, or even use
   its jlink command to create a new custom image for your project.

   For instance, you can create an image that contains the java.se
   `module <https://docs.oracle.com/en/java/javase/15/docs/api/java.se/module-summary.html>`__
   and the JavaFX modules, by running:

   -  `Linux/Mac <#nix-jdkfx>`__
   -  `Windows <#win-jdkfx>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jdkfx

         .. code:: no-border-radius

            export PATH_TO_FX_MODS=path/to/javafx-jmods-11
            $JAVA_HOME/bin/jlink --module-path $PATH_TO_FX_MODS \
                --add-modules java.se,javafx.fxml,javafx.web,javafx.media,javafx.swing \
                --bind-services --output /path/to/jdkfx-11.jdk

      .. container:: tab-pane
         :name: win-jdkfx

         ::

            set PATH_TO_FX_MODS="path\to\javafx-jmods-11"
            %JAVA_HOME%\bin\jlink --module-path %PATH_TO_FX_MODS% \
                --add-modules java.se,javafx.fxml,javafx.web,javafx.media,javafx.swing \
                --bind-services --output \path\to\jdkfx-11

   /🟡 Sec: Use custom Runtime image
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   With this custom image, you can set a new JAVA_HOME:

   -  `Linux/Mac <#nix-jdkfx-home>`__
   -  `Windows <#win-jdkfx-home>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jdkfx-home

         .. code:: no-border-radius

            export JAVA_HOME=/path/to/jdkfx-11.jdk

      .. container:: tab-pane
         :name: win-jdkfx-home

         ::

            set JAVA_HOME="path\to\jdkfx-11"

   Since the JavaFX modules are already part of the runtime, now you can run the
   HelloFX `sample <>`__ without the need of adding PATH_TO_FX anymore, like:

   -  `Linux/Mac <#nix-jdkfx-run>`__
   -  `Windows <#win-jdkfx-run>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jdkfx-run

         .. code:: no-border-radius

            javac -d mods/hellofx $(find src/ -name "*.java")
            java --module-path mods -m hellofx/hellofx.HelloFX

      .. container:: tab-pane
         :name: win-jdkfx-run

         ::

            dir /s /b src\*.java > sources.txt & javac -d mods/hellofx @sources.txt & del sources.txt
            java --module-path mods -m hellofx/hellofx.HelloFX

   Or add the image to your IDE: |Adding JDK+FX platform| And start creating Java
   projects with JavaFX classes. |Create JavaFX project| And run them without any
   additional option: |Run JavaFX project|

   .. container:: alert alert-warning

      **Note:** This custom JRE is platform-specific and it is not intended for
      distribution, and if there is a new JDK or a new JavaFX SDK, it has to be
      created all over again. However, its jlink tool can be used to create a
      custom image with the project that can be distributed. And the 
      `jpackage tool <https://docs.oracle.com/en/java/javase/15/docs/specs/man/jpackage.html>`__
      can be used for distributing installers with the jlinked project.

   .. container::
      :name: Non-Mod

   /🟡 TOP: Non-modular application
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   Since Java 9, applications should be modular, and distributed with tools like
   `jlink <index.html#modular>`__. However, if you have a non-modular JavaFX
   project or you can't use jlink because you have non-modular dependencies where
   the automatic module naming convention doesn't apply, you can still create a fat
   jar.

   As explained
   `here <http://mail.openjdk.java.net/pipermail/openjfx-dev/2018-June/021977.html>`__,
   in order to create a runnable jar with all the required JavaFX dependencies, you
   will need to use a launcher class that doesn't extend from Application.

   .. _maven-1:

   /🟡 Sec: Non-modular with Maven
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   If you develop your JavaFX applications using Maven, you don't have to download
   the JavaFX SDK. Just specify the modules and the versions you want in the
   pom.xml file, and the build system will download the required modules, including
   the native libraries for your platform.

   A simple Maven example can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Non-modular/Maven>`__.
   The
   `pom.xml <https://github.com/openjfx/samples/blob/master/CommandLine/Non-modular/Maven/hellofx/pom.xml>`__
   file shows how to create a runnable fat jar for this hellofx project with the
   Maven shade plugin.

   Run the plugin to create the fat jar:

   ::

      mvn compile package

   Run the application using:

   -  `Linux/Mac <#nix-maven>`__
   -  `Windows <#win-maven>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-maven

         .. code:: no-border-radius

            java -jar shade/hellofx.jar

      .. container:: tab-pane
         :name: win-maven

         ::

            java -jar shade\hellofx.jar

   /Cross-platform jar
   '''''''''''''''''''

   You can create a cross-platform fat jar by adding the dependencies from the
   three platforms that require native libraries to your pom file, in this sample
   only the ones from javafx.graphics:

   ::

          <dependencies>
              ...
              <dependency>
                  <groupId>org.openjfx</groupId>
                  <artifactId>javafx-graphics</artifactId>
                  <version>12</version>
                  <classifier>win</classifier>
              </dependency>
              <dependency>
                  <groupId>org.openjfx</groupId>
                  <artifactId>javafx-graphics</artifactId>
                  <version>12</version>
                  <classifier>linux</classifier>
              </dependency>
              <dependency>
                  <groupId>org.openjfx</groupId>
                  <artifactId>javafx-graphics</artifactId>
                  <version>12</version>
                  <classifier>mac</classifier>
              </dependency>
          </dependencies>

   .. _gradle-1:

   /🟡 Sec: Non-modular with Gradle
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   If you develop your JavaFX applications using Gradle, you don't have to download
   the JavaFX SDK. Just specify the modules and the versions you want in the
   build.gradle file, and the build system will download the required modules,
   including the native libraries for your platform. However, for Gradle we need to
   find and specify the platform/OS as classifier.

   A simple Gradle example can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Non-modular/Gradle>`__.
   In order to create a runnable fat jar for this project with Gradle, modify the
   jar task in the
   `build <https://github.com/openjfx/samples/blob/master/CommandLine/Non-modular/Gradle/hellofx/build.gradle>`__
   file to include the launcher class:

   ::

      mainClassName = 'hellofx.HelloFX'
      jar {
          manifest {
              attributes 'Main-Class': 'hellofx.Launcher'
          }
          from {
              configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) }
          }
      }

   Now run the task to create the fat jar and run it:

   -  `Linux/Mac <#nix-gradle>`__
   -  `Windows <#win-gradle>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-gradle

         .. code:: no-border-radius

            ./gradlew jar

            java -jar build/libs/hellofx.jar

      .. container:: tab-pane
         :name: win-gradle

         ::

            gradlew.bat jar

            java -jar build\libs\hellofx.jar

   .. _cross-platform-jar-1:

   /Cross-platform jar
   '''''''''''''''''''

   You can create a cross-platform fat jar by adding the dependencies from the
   three platforms that require native libraries to the build file, in this sample
   only the ones from javafx.graphics:

   ::

      runtimeOnly "org.openjfx:javafx-graphics:$javafx.version:win"
      runtimeOnly "org.openjfx:javafx-graphics:$javafx.version:linux"
      runtimeOnly "org.openjfx:javafx-graphics:$javafx.version:mac"

   Now run the jar task again to create the cross-platform fat jar.

   .. _command-line-1:

   /🟡 TOP: Command Line
   ~~~~~~~~~~~~~~~~~~~~~

   Finally, you can also create a runnable fat jar for your JavaFX project on
   command line.

   .. container:: alert alert-danger

      **Warning**: This is a discouraged tedious error-prone manual process that
      should be avoided by using the `Maven <#Maven>`__'s shade plugin or the
      `Gradle <#Gradle>`__'s jar task, in case `jlink <index.html#modular>`__ is
      not applicable.

   An example can be found in this
   `project <https://github.com/openjfx/samples/blob/master/CommandLine/Non-modular/CLI>`__.
   Download the appropriate `JavaFX SDK <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location.

   Add an environment variable pointing to the lib directory of the runtime:

   -  `Linux/Mac <#nix-fxpath>`__
   -  `Windows <#win-fxpath>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-fxpath

         .. code:: no-border-radius

            export PATH_TO_FX=/path/to/javafx-sdk-11/lib

      .. container:: tab-pane
         :name: win-fxpath

         ::

            set PATH_TO_FX="path\to\javafx-sdk-11\lib"

   Compile the project:

   -  `Linux/Mac <#nix-javacout>`__
   -  `Windows <#win-javacout>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-javacout

         .. code:: no-border-radius

            javac --module-path $PATH_TO_FX --add-modules=javafx.controls -d out $(find src/main/java -name "*.java")

      .. container:: tab-pane
         :name: win-javacout

         ::

            dir /s /b src\main\java\*.java > sources.txt & javac --module-path %PATH_TO_FX% --add-modules=javafx.controls -d out @sources.txt & del sources.txt

   And create the fat jar, adding the JavaFX required jars and the
   platform-specific native libraries. For the hellofx project:

   -  `Linux/Mac <#nix-jar>`__
   -  `Windows <#win-jar>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jar

         .. code:: no-border-radius

            find $PATH_TO_FX/{javafx.base.jar,javafx.graphics.jar,javafx.controls.jar} -exec unzip -nq {} -d out \;

            #uncomment for Linux:
            #cp $PATH_TO_FX/{libprism*.so,libjavafx*.so,libglass*.so,libdecora_sse.so} out

            #uncomment for Mac:
            #cp $PATH_TO_FX/{libprism*.dylib,libjavafx*.dylib,libglass.dylib,libdecora_sse.dylib} out

            rm out/META-INF/MANIFEST.MF out/module-info.class
            mkdir libs
            jar --create --file=libs/hellofx.jar --main-class=hellofx.Launcher -C out .

      .. container:: tab-pane
         :name: win-jar

         ::

            cd out & jar xf "%PATH_TO_FX%\javafx.base.jar" & jar xf "%PATH_TO_FX%\javafx.graphics.jar" & jar xf "%PATH_TO_FX%\javafx.controls.jar" & cd ..
            copy "%PATH_TO_FX%\..\bin\prism*.dll" out & copy "%PATH_TO_FX%\..\bin\javafx*.dll" out & copy "%PATH_TO_FX%\..\bin\glass.dll" out && copy "%PATH_TO_FX%\..\bin\decora_sse.dll" out
            del out\META-INF\MANIFEST.MF & del out\module-info.class
            mkdir libs
            jar --create --file=libs/hellofx.jar --main-class=hellofx.Launcher -C out .

   And after the jar is built, you can run it:

   -  `Linux/Mac <#nix-jarrun>`__
   -  `Windows <#win-jarrun>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-jarrun

         .. code:: no-border-radius

            java -jar libs/hellofx.jar

      .. container:: tab-pane
         :name: win-jarrun

         ::

            java -jar libs\hellofx.jar

   .. container:: alert alert-warning

      **Note:** This JRE is platform-specific. However it can be easily a
      multi-platform jar if the different native libraries from each platform were
      included. This requires downloading the JavaFX SDKs for all the platforms,
      extracting all the necessary jars (for instance, javafx.graphics is different
      for each platform), and copying all the native libraries as shown above. As
      it was mentioned above, this process shouldn't be done manually.

   .. |Adding JDK+FX platform| image:: https://openjfx.io/images/modular/netbeans01.png
   .. |Create JavaFX project| image:: https://openjfx.io/images/modular/netbeans02.png
   .. |Run JavaFX project| image:: https://openjfx.io/images/modular/netbeans03.png

/🟡 PART: JavaFX and IntelliJ IDEA
===================================

.. https://openjfx.io/openjfx-docs/ide-intellij.html

.. container::

   This section explains how to create a JavaFX application in IntelliJ IDEA.
   JavaFX 15.0.1 and IntelliJ IDEA 2020.1 were used for the IDE screenshots.

   Download an appropriate JDK for your operating system and set JAVA_HOME to the
   JDK directory. Refer to `Install Java <#install-java>`__ section for more
   information.

   You can create a JavaFX modular or non-modular project and use the IDE tools,
   Maven or Gradle build tools.

   /🟡 TOP: Non-modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: IDEA-IDE

   IDE
   ^^^

   Follow these steps to create a JavaFX non-modular project and use the IDE tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Java>`__.

   Download the appropriate `JavaFX SDK <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-sdk-11.

   /1. Create a JavaFX project
   '''''''''''''''''''''''''''

   |Create a JavaFX project| Provide a name to the project, like HelloFX, and a
   location. When the project opens, the JavaFX classes are not recognized.
   |Missing JavaFX classes|

   /2. Set JDK 11
   ''''''''''''''

   Go to File -> Project Structure -> Project, and set the project SDK to 11. You
   can also set the language level to 11 or greater. |Set JDK 11|

   /3. Create a library
   ''''''''''''''''''''

   Go to File -> Project Structure -> Libraries and add the JavaFX 11 SDK as a
   library to the project. Point to the lib folder of the JavaFX SDK. |Create
   Library| Once the library is applied, the JavaFX classes will be recognized by
   the IDE. |JavaFX classes are recognized|

   .. container:: alert alert-danger

      **Warning:** If you run now the project it will compile but you will get this
      error:
      ::

         Caused by: java.lang.RuntimeException: Exception in Application start method
             at javafx.graphics/com.sun.javafx.application.LauncherImpl.launchApplication1(LauncherImpl.java:900)
         ...
         Caused by: java.lang.IllegalAccessError: class com.sun.javafx.fxml.FXMLLoaderHelper (in unnamed module @0xXXXXX) cannot access class com.sun.javafx.util.Utils (in module javafx.graphics) because module javafx.graphics does not export com.sun.javafx.util to unnamed module @0xXXXXX
         ...

      This error happens because IntelliJ only adds the modules javafx.base and
      javafx.graphics to the module-path, but for this sample it is required to add
      the javafx.controls and javafx.fxml modules as well.

   /4. Add VM options
   ''''''''''''''''''

   To solve the issue, click on Run -> Edit Configurations... and add these VM
   options:

   -  `Linux/Mac <#nix-idea-non-ide-1>`__
   -  `Windows <#win-idea-non-ide-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-non-ide-1

         .. code:: no-border-radius

            --module-path /path/to/javafx-sdk-11/lib --add-modules javafx.controls,javafx.fxml

      .. container:: tab-pane
         :name: win-idea-non-ide-1

         ::

            --module-path "\path\to\javafx-sdk-11\lib" --add-modules javafx.controls,javafx.fxml

   Note that the default project created by IntelliJ uses FXML, so javafx.fxml is
   required along with javafx.controls. If your project uses other modules, you
   will need to add them as well. |VM options| Click apply and close the dialog.

   Alternatively, you can define a global variable that can be used in future
   projects. Go to Preferences (File -> Settings) -> Appearance & Behavior -> Path
   Variables, and define the name of the variable as PATH_TO_FX, and browse to the
   lib folder of the JavaFX SDK to set its value, and click apply. |Path Variable|

   Then you can refer to this global variable when setting the VM options as:

   ::

      --module-path ${PATH_TO_FX} --add-modules javafx.controls,javafx.fxml

   |Path Variable in VM options|

   /5. Run the project
   '''''''''''''''''''

   Click Run -> Run... to run the project, now it should work fine.

   .. container::
      :name: IDEA-Maven

   /🟡 Sec: Non-modular with Maven with Intellij
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Maven
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Maven>`__.

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   Select File -> New -> Project -> Maven and enable Create from archetype. If the
   JavaFX `archetype <https://github.com/openjfx/javafx-maven-archetypes>`__ is not
   installed yet, select Add archetype... and set the groupId (org.openjfx), the
   artifactId (javafx-maven-archetypes), and the version (0.0.1), and press OK.
   |JavaFX Archetype|

   Once installed, select the artifact. |Create a Maven project| Provide the name
   to the project, like HelloFX and a location for the project. Optionally, provide
   the groupId, like org.openjfx, the artifactId, like hellofx.

   Select the archetype artifactId, between javafx-archetype-fxml or
   javafx-archetype-simple, based on the use of FXML or not in your project. You
   can create a property for the javafx-version as well, and set it to 11. |Select
   archetype|

   Press finish and the project will be created.

   /2. Verify the project
   ''''''''''''''''''''''

   You can find the generated pom file
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Maven/hellofx/pom.xml>`__.

   Verify it includes the javafx.controls and javafx.fxml dependencies, and
   includes the javafx-maven-plugin. |Generated pom| For a non-modular project, you
   can remove the module-info.java file.

   Import the Maven changes. The JavaFX classes will be recognized. Notice also
   that Maven manages the required dependencies: it will add javafx.base and
   javafx.graphics that are required by javafx.controls and javafx.fxml, but most
   important, it will add the required classifier based on your platform,
   downloading the specific platform jars. |Platform dependencies| As for any other
   maven dependencies, these jars can be found in the local .m2 repository.

   .. _run-the-project-1:

   /3. Run the project
   '''''''''''''''''''

   Open the Maven Projects window (View -> Tool Windows -> Maven) and click on
   HelloFX -> Plugins -> compiler -> compiler:compile to compile the project, and
   click on HelloFX -> Plugins -> javafx -> javafx:run to execute the project. |Run
   project|

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11 or greater, running from the
      Maven Projects window might fail. To avoid it, you can either add an
      environmental variable to Maven Runner: |JavaHome| or set the correct java
      command to the javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   The project can be also run from a terminal. Make sure JAVA_HOME is set to 11 or
   greater, and run mvn clean javafx:run.

   .. container::
      :name: IDEA-Gradle

   /🟡 Sec: Non-modular with Gradle with Intellij
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Gradle
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle>`__.

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a Gradle project with Java. |Create a Gradle project| Provide a name to
   the project, like HelloFX and a location for the project. Optionally provide the
   groupId, like org.openjfx, the artifactId, like hellofx. When the project opens,
   add a package org.openjfx and an empty MainApp class. |Open project|

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp.

   Similar to Maven, we can declare the required JavaFX modules in the build.gradle
   file. However, for Gradle we need to apply the JavaFX gradle plugin:

   ::

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   Synchronize the project and you will get the JavaFX dependencies. |Update the
   build| As for any other Gradle dependencies, these jars can be found in the
   local .gradle repository.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11 or greater, the plugin will
      fail. To avoid it, make sure Gradle JVM is using the proper JDK: |Set Gradle
      JVM|

   /3. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files. Note that the JavaFX classes are recognized by the IDE. |HelloFX|

   .. _run-the-project-2:

   /4. Run the project
   '''''''''''''''''''

   You can open the Gradle window and click on hellofx -> Tasks -> build -> build
   to build the project, and on hellofx -> Tasks -> application -> run to execute
   the project. |image-idea06|

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-idea-non-gradle-1>`__
   -  `Windows <#win-idea-non-gradle-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-non-gradle-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-idea-non-gradle-1

         ::

            gradlew run

   /🟡 TOP: Modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~

   Download the appropriate `JavaFX jmods <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-jmods-11.

   .. container::
      :name: IDEA-Mod-IDE

   .. _ide-1:

   IDE
   ^^^

   Follow these steps to create a JavaFX modular project and use the IDE tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Java>`__.

   .. _create-a-javafx-project-1:

   /1. Create a JavaFX project
   '''''''''''''''''''''''''''

   Provide a name to the project, like HelloFX, and a location. When the project
   opens, rename the sample package to org.openjfx.

   /2. Set JDK 11+ and add JavaFX 11
   '''''''''''''''''''''''''''''''''

   Go to File -> Project Structure -> Project, and set the project SDK to 11. You
   can also set the language level to 11 or greater and change the default compiler
   output directory out to mods. |mods output|

   Go to File -> Project Structure -> Libraries and add the JavaFX 11 SDK as a
   library to the project. Point to the lib folder of the JavaFX SDK.

   /3. Add the module-info class
   '''''''''''''''''''''''''''''

   Add the module-info class, including the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.
   |module-info|

   .. _add-the-source-code-1:

   /4. Add the source code
   '''''''''''''''''''''''

   Either keep the default sample source code that has an empty controller, or
   replaced it based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Java/hellofx/src/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Java/hellofx/src/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Java/hellofx/src/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Java/hellofx/src/org/openjfx/styles.css>`__
   files. |Source code|

   .. _add-vm-options-1:

   /5. Add VM options
   ''''''''''''''''''

   Click on Run -> Edit Configurations... and add these VM options:

   ::

      --module-path ${PATH_TO_FX}:mods/production

   |image-idea03| Click apply and close the dialog.

   .. _run-the-project-3:

   /6. Run the project
   '''''''''''''''''''

   Click Run -> Run... to run the project.

   /7. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a runtime image, run the following commands from a terminal:

   -  `Linux/Mac <#nix-idea-mod-ide-2>`__
   -  `Windows <#win-idea-mod-ide-2>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-mod-ide-2

         .. code:: no-border-radius

            export PATH_TO_FX_MODS=path/to/javafx-jmods-11
            $JAVA_HOME/bin/jlink --module-path $PATH_TO_FX_MODS:mods/production --add-modules hellofx --output jre
            jre/bin/java -m hellofx/org.openjfx.MainApp

      .. container:: tab-pane
         :name: win-idea-mod-ide-2

         ::

            set PATH_TO_FX_MODS="path\to\javafx-jmods-11"
            jlink --module-path "%PATH_TO_FX_MODS%;mods\production" --add-modules hellofx --output jre
            jre\bin\java -m hellofx/org.openjfx.MainApp

   .. container::
      :name: IDEA-Mod-Maven

   .. _maven-1:

   /🟡 Sec: Modular Modular with Maven with Intellij
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Maven tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Maven>`__.

   Select File -> New -> Project -> Maven and enable Create from archetype. If the
   JavaFX `archetype <https://github.com/openjfx/javafx-maven-archetypes>`__ is not
   installed yet, select Add archetype... and set the groupId (org.openjfx), the
   artifactId (javafx-maven-archetypes), and the version (0.0.1), and press OK.
   |JavaFX Archetype|

   Once installed, select the artifact, press Next, and provide the name to the
   project, like HelloFX and a location for the project. Optionally, provide the
   groupId, like org.openjfx and the artifactId, like hellofx.

   Select the archetype artifactId, between javafx-archetype-fxml or
   javafx-archetype-simple, based on the use of FXML or not in your project.
   |Select archetype| You can create a property for the javafx-version as well, and
   set it to 11.

   .. _verify-the-project-1:

   /2. Verify the project
   ''''''''''''''''''''''

   You can find the generated pom file
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Maven/hellofx/pom.xml>`__.

   Verify it includes the javafx.controls and javafx.fxml dependencies, and
   includes the javafx-maven-plugin. |Generated pom|

   Open the module-info class, that includes the required modules javafx.controls
   and javafx.fxml. Since FXML uses reflection to access the controller in the
   module, it has been opened to javafx.fxml. |image-idea04|

   .. _run-the-project-4:

   /3. Run the project
   '''''''''''''''''''

   You can open the Maven Projects window and click on HelloFX -> Plugins ->
   compiler -> compiler:compile to compile the project, and click on HelloFX ->
   Plugins -> javafx -> javafx:run to execute the project.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11 or greater, running from the
      Maven Projects window might fail. To avoid it, you can either add an
      environmental variable to Maven Runner: |image-idea05| or set the correct java
      command to the javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   The project can be also run from a terminal. Make sure JAVA_HOME is set to 11,
   and run mvn clean javafx:run.

   .. _create-a-custom-runtime-image-1:

   /4. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, using the 
   `JavaFX Maven plugin <https://github.com/openjfx/javafx-maven-plugin>`__, you can click on
   HelloFX -> Plugins -> javafx -> javafx:jlink, or from a terminal with JAVA_HOME
   set to 11 you can run:

   ::

      mvn clean javafx:jlink

   Note the plugin allows the usual options as the jlink command, as well as
   creating a launcher or a zip with the custom image.

   And after the image is built, you can run it from command line:

   -  `Linux/Mac <#nix-idea-mod-mav-1>`__
   -  `Windows <#win-idea-mod-mav-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-mod-mav-1

         .. code:: no-border-radius

            target/hellofx/bin/launcher

      .. container:: tab-pane
         :name: win-idea-mod-mav-1

         ::

            target\hellofx\bin\launcher

   .. container::
      :name: IDEA-Mod-Gradle

   .. _gradle-1:

   /🟡 Sec: Modular Modular with Gradle with Intellij
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Gradle tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle>`__.

   .. _create-a-gradle-project-1:

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a Gradle project with Java. Provide a name to the project, like HelloFX
   and a location for the project. Optionally provide the groupId, like
   org.openjfx, the artifactId, like hellofx. When the project opens, add a package
   org.openjfx and an empty MainApp class.

   .. _modify-the-build-1:

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp.

   Note the use of the org.openjfx.javafxplugin plugin, that removes the necessity
   of adding the JavaFX dependencies and setting the module-path for the compile
   and run task for them. |image-idea01|

   .. _add-the-module-info-class-1:

   /3. Add the module-info class
   '''''''''''''''''''''''''''''

   Add the module-info class, including the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.

   .. _add-the-source-code-2:

   /4. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/IntelliJ/Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files. |source code|

   .. _run-the-project-5:

   /5. Run the project
   '''''''''''''''''''

   You can open the Gradle window and click on hellofx->Tasks->build->build to
   build the project, and on hellofx->Tasks->application->run to execute the
   project. You can also open a terminal and run:

   -  `Linux/Mac <#nix-idea-mod-gra-1>`__
   -  `Windows <#win-idea-mod-gra-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-mod-gra-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-idea-mod-gra-1

         ::

            gradlew run

   .. _create-a-custom-runtime-image-2:

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, you can use the
   `org.beryx.jlink <https://badass-jlink-plugin.beryx.org/releases/latest/>`__
   plugin. It can be easily combined with the JavaFX Gradle plugin:

   ::

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.0.7'
        id 'org.beryx.jlink' version '2.9.4'
      }

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

      jlink {
          launcher {
              name = 'hellofx'
          }
      }

   to generate the custom image. Run hellofx -> Tasks -> build -> jlink task to
   create the image.

   To run the image, type on a terminal:

   -  `Linux/Mac <#nix-idea-mod-gra-2>`__
   -  `Windows <#win-idea-mod-gra-2>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-mod-gra-2

         .. code:: no-border-radius

            build/image/bin/hellofx

      .. container:: tab-pane
         :name: win-idea-mod-gra-2

         ::

            build\image\bin\hellofx

   .. |Create a JavaFX project| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea01.png
   .. |Missing JavaFX classes| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea02.png
   .. |Set JDK 11| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea03.png
   .. |Create Library| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea04.png
   .. |JavaFX classes are recognized| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea05.png
   .. |VM options| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea06.png
   .. |Path Variable| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea07.png
   .. |Path Variable in VM options| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/ide/idea08.png
   .. |JavaFX Archetype| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea00.png
   .. |Create a Maven project| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea01.png
   .. |Select archetype| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea02.png
   .. |Generated pom| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea03.png
   .. |Platform dependencies| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea04.png
   .. |Run project| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea05.png
   .. |JavaHome| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/maven/idea06.png
   .. |Create a Gradle project| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea01.png
   .. |Open project| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea02.png
   .. |Update the build| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea03.png
   .. |Set Gradle JVM| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea04.png
   .. |HelloFX| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea05.png
   .. |image-idea06| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/gradle/idea06.png
   .. |mods output| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/ide/idea00.png
   .. |module-info| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/ide/idea01.png
   .. |Source code| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/ide/idea02.png
   .. |image-idea03| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/ide/idea03.png
   .. |image-idea04| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/maven/idea04.png
   .. |image-idea05| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/maven/idea05.png
   .. |image-idea01| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/gradle/idea01.png
   .. |source code| image:: https://openjfx.io/openjfx-docs/images/ide/intellij/modular/gradle/idea02.png

/🟡 PART: JavaFX and NetBeans
==============================

.. https://openjfx.io/openjfx-docs/ide-netbeans.html

.. container::

   This section explains how to create a JavaFX application in NetBeans. JavaFX
   15.0.1 and Apache NetBeans 12.2 were used for the IDE screenshots.

   Download an appropriate JDK for your operating system and set JAVA_HOME to the
   JDK directory. Refer to `Install Java <#install-java>`__ section for more
   information.

   You can create a JavaFX 11 modular or non-modular project and use the IDE tools,
   Maven or Gradle build tools.

   .. container:: alert alert-warning

      **Note:** We recommend you to use NetBeans 11.3 or later. See the NetBeans
      bug report
      `NETBEANS-3296 <https://issues.apache.org/jira/browse/NETBEANS-3296>`__,
      "Attaching JavaFX Javadoc and Sources," for details on the errors that can
      occur when trying to use the JavaFX API documentation and source code in
      NetBeans, along with techniques to work around some of the errors.

   /🟡 TOP: Non-modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: NB-IDE

   IDE
   ^^^

   Follow these steps to create a JavaFX non-modular project and use the IDE tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Java>`__.

   Download the appropriate `JavaFX SDK <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-sdk-11.

   Create a new global Library under Tools -> Libraries -> New Library. Name it
   JavaFX11 and include the jars under the lib folder from JavaFX 11. |Create
   library|

   .. container:: alert alert-warning

      **Note:** Make sure you don't add the src.zip file, as it will cause an
      exception when running the project.

   /1. Create a Java project
   '''''''''''''''''''''''''

   |Create a Java project| Provide a name to the project, like HelloFX, and a
   location. A default project will be opened.

   .. container:: alert alert-danger

      **Warning:** Don't try to create a JavaFX project. The JavaFX Ant tasks of
      the current Apache NetBeans version are not ready for JavaFX 11+ yet, unless
      you have a custom JDK that bundles JavaFX, as described in 
      `Custom JDK+JavaFX image <index.html#modular>`__.

   /2. Set JDK
   '''''''''''

   Make sure your project is configured to run with JDK 11 or later. Go to
   Properties -> Libraries -> Java Platform, and set it to your preferred JDK. |Set
   JDK 11|

   /3. Add the library
   '''''''''''''''''''

   Go to Properties -> Libraries -> Compile -> Classpath -> + -> Add Library and
   add the JavaFX11 library. |Add jars to classpath| And go to Properties -> Build
   -> Compile and make sure you deselect the Compile on Save option. |Remove
   option|

   .. container:: alert alert-danger

      **Warning:** If NetBeans compiles on every save, it will also add the classes
      to the module-path, preventing any further change to the module-path.
      Alternatively, this option can be kept selected, and add the JavaFX11 library
      to Properties -> Libraries -> Run -> Modulepath.

   Once the classpath is set, the JavaFX classes will be recognized by the IDE. For
   instance, you can start extending the Application class: |JavaFX jars as
   library|

   /4. Add JavaFX classes
   ''''''''''''''''''''''

   You can add a main class Main, based on this
   `one <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Java/hellofx/src/hellofx/Main.java>`__,
   with an
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Java/hellofx/src/hellofx/hellofx.fxml>`__
   file and a
   `controller <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Java/hellofx/src/hellofx/Controller.java>`__.
   |Add JavaFX classes|

   .. container:: alert alert-danger

      **Warning:** If you run now the project it will compile but you will get this
      error:
      ::

         Error: JavaFX runtime components are missing, and are required to run this application

      This error is shown since the Java 11 launcher checks if the main class
      extends javafx.application.Application. If that is the case, it is required
      to have the javafx.graphics module on the module-path.

   /5. Add VM options
   ''''''''''''''''''

   To solve the issue, go to Properties -> Run and add these VM options:

   -  `Linux/Mac <#nix-nb-non-ide-1>`__
   -  `Windows <#win-nb-non-ide-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-nb-non-ide-1

         .. code:: no-border-radius

            --module-path /path/to/javafx-sdk-11/lib --add-modules javafx.controls,javafx.fxml

      .. container:: tab-pane
         :name: win-nb-non-ide-1

         ::

            --module-path "\path\to\javafx-sdk-11\lib" --add-modules javafx.controls,javafx.fxml

   |VM options| Click apply and close the dialog.

   /6. Run the project
   '''''''''''''''''''

   Click Run -> Run Project to run the project, now it should work fine.

   .. container::
      :name: NB-Maven

   /🟡 Sec: Non-modular with Maven and NetBeans
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Maven
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Maven>`__.

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   You can select either Java with Maven -> Simple JavaFX Maven Archetype project
   or Java with Maven -> FXML JavaFX Maven Archetype if your project is using FXML.
   |Create a Maven project|

   Provide the name of the project, like hellofx and a location. Provide the
   groupId, like org.openjfx, and the package name, like org.openjfx.hellofx.
   Optionally, you can set the javafx-version to 12 and the
   javafx-maven-plugin-version to to 0.0.1: |Archetype options| Click finish and
   the project will be created and opened.

   /2. Verify the pom
   ''''''''''''''''''

   You can find the generated pom file
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Maven/hellofx/pom.xml>`__.

   Verify it includes the javafx.controls and javafx.fxml dependencies, update
   their version to 12, and verify it includes the javafx-maven-plugin (update the
   version to 0.0.1). Note that Maven manages the required dependencies: it will
   add javafx.base and javafx.graphics that are required by javafx.controls and
   javafx.fxml, but most important, it will add the required classifier based on
   your platform, downloading the specific platform jars. As for any other maven
   dependencies, these jars can be found in the local .m2 repository. |Maven pom|
   For a non-modular project, you can remove the module-info.java file.

   .. _run-the-project-1:

   /3. Run the project
   '''''''''''''''''''

   Click Run -> Run Project to run the project. Note that the Maven project already
   includes an nbactions.xml file that maps the run action to the javafx:run goal.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11 or greater, running the project
      might fail. To avoid it, you can add the correct java command to the
      javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   You can also open a terminal and type mvn clean javafx:run to run the project.

   .. container::
      :name: NB-Gradle

   /🟡 Sec: Non-modular with Gradle and NetBeans
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Gradle
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle>`__.

   Since NetBeans 11, Gradle is supported out of the box, but if you run an older
   version, you will need the Gradle plugin for NetBeans 2.0.2. You can download it
   from the GitHub
   `repository <https://github.com/kelemen/netbeans-gradle-project/releases>`__.

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a Java with Gradle -> Java Application project. |Create a Gradle project|
   Provide the name of the project, like HelloFX and a location for the project,
   provide the package name, like org.openjfx and the main class, like MainApp.
   Finally, select Initialize Gradle Wrapper. |Name project| The project is created
   and opened.

   .. container:: alert alert-warning

      **Note:** Currently, the JavaFX Gradle plugin requires that the gradle
      wrapper is set to a top value of 6.3. Set the value of distributionUrl
      accordingly in the gradle/wrapper/gradle-wrapper.properties file.

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle/hellofx/build.gradle>`__
   file.

   We can declare the required JavaFX modules in the build.gradle file using the
   JavaFX gradle plugin:

   ::

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   .. container:: alert alert-warning

      **Note:** If NetBeans is running with a JDK lower than 11 the plugin might
      not work. Either edit the netbeans/etc/netbeans.conf file and set
      netbeans_jdkhome accordingly, or do the same with the
      ~/.gradle/gradle.properties file, setting org.gradle.java.home.

   Save the project and you will get the JavaFX dependencies. |Update the build| As
   for any other Gradle dependencies, these jars can be found in the local .gradle
   repository.

   /3. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files. |Add JavaFX project|

   .. _run-the-project-2:

   /4. Run the project
   '''''''''''''''''''

   You can directly run from the Run Project button. But you can also select the
   build.gradle file and visualize the Navigator window. Build the project with
   Build -> build and click on Application -> run to execute the project. |Run
   project|

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-nb-non-gradle-1>`__
   -  `Windows <#win-nb-non-gradle-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-nb-non-gradle-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-nb-non-gradle-1

         ::

            gradlew run

   /🟡 TOP: Modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~

   Download the appropriate `JavaFX jmods <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-jmods-11.

   .. container::
      :name: NB-Mod-IDE

   .. _ide-1:

   IDE
   ^^^

   Follow these steps to create a JavaFX modular project and use the IDE tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Java>`__.

   /1. Create a Java modular project
   '''''''''''''''''''''''''''''''''

   |Java modular project| Provide a name to the project, like HelloFX, and a
   location. Select also platform JDK 11 or greater. When the project opens, right
   click on it and add New -> Module..., named it hellofx, and add a package like
   org.openjfx with an empty MainApp class.

   .. _add-the-library-1:

   /2. Add the library
   '''''''''''''''''''

   As explained for Non-modular projects, define the JavaFX11 library, if you
   haven't done it already.

   Go to Properties -> Libraries -> Compile -> Modulepath -> + -> Add Library and
   add the JavaFX11 library. |JavaFX Library|

   /3. Edit the module-info class
   ''''''''''''''''''''''''''''''

   Edit the module-info class and include the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.
   |module-info|

   .. _add-the-source-code-1:

   /4. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Java/HelloFX/src/hellofx/classes/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Java/HelloFX/src/hellofx/classes/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Java/HelloFX/src/hellofx/classes/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Java/HelloFX/src/hellofx/classes/org/openjfx/styles.css>`__
   files. |Source code|

   .. _run-the-project-3:

   /5. Run the project
   '''''''''''''''''''

   Being a modular project, and since we already added the JavaFX11 library to the
   module-path, there is no need to add any VM arguments. Click Run -> Run... to
   run the project.

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a runtime image, create a global Library under NetBeans -> Tools ->
   Libraries -> New Library. Name it JavaFXMODS11 and include the folder with the
   JavaFX jmods 11. Add this library to NetBeans -> Properties -> Libraries -> Run
   -> Modulepath and place it on top. |jmods library|

   To create the custom runtime image now, go to NetBeans -> Properties -> Build ->
   Packaging and select Create JLINK distribution, providing a name for the
   launcher, like HelloFX. |jlink task| Apply and close the dialog, and click the
   Clean and Build button, to build the image.

   To run the image:

   -  `Linux/Mac <#nix-nb-mod-ide-1>`__
   -  `Windows <#win-nb-mod-ide-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-nb-mod-ide-1

         .. code:: no-border-radius

            dist/jlink/HelloFX/bin/HelloFX

      .. container:: tab-pane
         :name: win-nb-mod-ide-1

         ::

            dist\jlink\HelloFX\bin\HelloFX

   .. container::
      :name: NB-Mod-Maven

   .. _maven-1:

   /🟡 Sec: Non-modular with Maven and NetBeans
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Maven tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Maven>`__.

   .. _create-a-maven-project-1:

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   You can select either Java with Maven -> Simple JavaFX Maven Archetype project
   or Java with Maven -> FXML JavaFX Maven Archetype if your project is using FXML.
   |image-netbeans01|

   Provide the name of the project, like hellofx and a location. Provide the
   groupId, like org.openjfx, and the package name, like org.openjfx.hellofx.
   Optionally, you can set the javafx-version to 12 and the
   javafx-maven-plugin-version to to 0.0.1: |image-netbeans03| Click finish and the project
   will be created and opened.

   .. _verify-the-pom-1:

   /2. Verify the pom
   ''''''''''''''''''

   You can find the generated pom file
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Maven/hellofx/pom.xml>`__.

   Verify it includes the javafx.controls and javafx.fxml dependencies, and verify
   it includes the javafx-maven-plugin. Note that Maven manages the required
   dependencies: it will add javafx.base and javafx.graphics that are required by
   javafx.controls and javafx.fxml, but most important, it will add the required
   classifier based on your platform, downloading the specific platform jars. As
   for any other maven dependencies, these jars can be found in the local .m2
   repository. |image-netbeans04|

   .. _run-the-project-4:

   /3. Run the project
   '''''''''''''''''''

   Click Run -> Run Project to run the project. Note that the Maven project already
   includes an nbactions.xml file that maps the run action to the javafx:run goal.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to JDK 11 or greater, running the
      project might fail. To avoid it, you can add the correct java command to the
      javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   You can also open a terminal and run mvn clean javafx:run to run the project.

   .. _create-a-custom-runtime-image-1:

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a runtime image, run the following commands:

   ::

      mvn clean javafx:jlink

   Note the plugin allows the usual options as the jlink command, as well as
   creating a launcher or a zip with the custom image.

   And after the image is built, you can run it from command line:

   -  `Linux/Mac <#nix-nb-mod-mav-1>`__
   -  `Windows <#win-nb-mod-mav-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-nb-mod-mav-1

         .. code:: no-border-radius

            target/hellofx/bin/launcher

      .. container:: tab-pane
         :name: win-nb-mod-mav-1

         ::

            target\hellofx\bin\launcher

   .. container::
      :name: NB-Mod-Gradle

   .. _gradle-1:

   /🟡 Sec: Non-modular with Gradle and NetBeans
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Gradle tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle>`__.

   .. _create-a-gradle-project-1:

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a Java with Gradle -> Java Application project. |image-netbeans01| Provide the name
   of the project, like HelloFX and a location for the project, provide the package
   name, like org.openjfx and the main class, like MainApp. Finally, select
   Initialize Gradle Wrapper. The project is created and opened.

   .. container:: alert alert-warning

      **Note:** Currently, the JavaFX Gradle plugin requires that the gradle
      wrapper is set to a top value of 6.3. Set the value of distributionUrl
      accordingly in the gradle/wrapper/gradle-wrapper.properties file.

   .. _modify-the-build-1:

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle/hellofx/build.gradle>`__
   file.

   We can declare the required JavaFX modules in the build.gradle file using the
   JavaFX gradle plugin:

   ::

      javafx {
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   .. container:: alert alert-warning

      **Note:** If NetBeans is running with a JDK lower than 11 the plugin might
      not work. Either edit the netbeans/etc/netbeans.conf file and set
      netbeans_jdkhome accordingly, or do the same with the
      ~/.gradle/gradle.properties file, setting org.gradle.java.home.

   Save the project and you will get the JavaFX dependencies. As for any other
   Gradle dependencies, these jars can be found in the local .gradle repository.

   /3. Add the module-info class
   '''''''''''''''''''''''''''''

   Add the module-info class, including the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.
   |image-netbeans03| Reload the project to take into account all the changes in the gradle
   project.

   .. _add-the-source-code-2:

   /4. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/NetBeans/Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files. |Source files|

   .. _run-the-project-5:

   /5. Run the project
   '''''''''''''''''''

   Right click on the project window, select Tasks -> build -> build to build the
   project, and on Tasks -> run -> run to execute the project. You can also open a
   terminal and run:

   -  `Linux/Mac <#nix-nb-mod-gra-1>`__
   -  `Windows <#win-nb-mod-gra-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-nb-mod-gra-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-nb-mod-gra-1

         ::

            gradlew run

   .. _create-a-custom-runtime-image-2:

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, you can use the
   `org.beryx.jlink <https://badass-jlink-plugin.beryx.org/releases/latest/>`__
   plugin. It can be easily combined with the JavaFX Gradle plugin:

   ::

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.0.7'
        id 'org.beryx.jlink' version '2.9.4'
      }

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

      jlink {
          launcher {
              name = 'hellofx'
          }
      }

   to generate the custom image. Right click on the project window, select Tasks ->
   jlink -> jlink task to create the image.

   To run the image, run from a terminal:

   -  `Linux/Mac <#nix-idea-mod-gra-1>`__
   -  `Windows <#win-idea-mod-gra-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-idea-gra-mav-1

         .. code:: no-border-radius

            build/image/bin/hellofx

      .. container:: tab-pane
         :name: win-idea-gra-mav-1

         ::

            build\image\bin\hellofx

   .. |Create library| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans00.png
   .. |Create a Java project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans01.png
   .. |Set JDK 11| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans02.png
   .. |Add jars to classpath| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans03.png
   .. |Remove option| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans03-2.png
   .. |JavaFX jars as library| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans04.png
   .. |Add JavaFX classes| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans05.png
   .. |VM options| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/ide/netbeans06.png
   .. |Create a Maven project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/maven/netbeans01.png
   .. |Archetype options| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/maven/netbeans03.png
   .. |Maven pom| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/maven/netbeans04.png
   .. |Create a Gradle project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/gradle/netbeans01.png
   .. |Name project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/gradle/netbeans02.png
   .. |Update the build| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/gradle/netbeans03.png
   .. |Add JavaFX project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/gradle/netbeans04.png
   .. |Run project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/gradle/netbeans05.png
   .. |Java modular project| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans01.png
   .. |JavaFX Library| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans00.png
   .. |module-info| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans02.png
   .. |Source code| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans03.png
   .. |jmods library| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans04.png
   .. |jlink task| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/ide/netbeans05.png
   .. |image-netbeans01| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/maven/netbeans01.png
   .. |image-netbeans03| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/maven/netbeans03.png
   .. |image-netbeans04| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/maven/netbeans04.png
   .. |image-netbeans01| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/gradle/netbeans01.png
   .. |image-netbeans03| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/gradle/netbeans03.png
   .. |Source files| image:: https://openjfx.io/openjfx-docs/images/ide/netbeans/modular/gradle/netbeans04.png

/🟡 PART: JavaFX and Eclipse
=============================

.. https://openjfx.io/openjfx-docs/ide-eclipse.html

.. container::

   This section explains how to create a JavaFX application in Eclipse. JavaFX
   15.0.1 and Eclipse 2020-12 (4.18.0) were used for the IDE screenshots.

   Download an appropriate JDK for your operating system and set JAVA_HOME to the
   JDK directory. Refer to `Install Java <#install-java>`__ section for more
   information.

   Include the new JDK as Installed JREs in Eclipse -> Window -> Preferences ->
   Java -> Installed JREs -> Add.

   You can create a JavaFX modular or non-modular project and use the IDE tools,
   Maven or Gradle build tools.

   /🟡 TOP: Non-modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: ECLIPSE-IDE

   IDE
   ^^^

   Follow these steps to create a JavaFX non-modular project and use the IDE tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Java>`__.

   Download the appropriate `JavaFX SDK <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-sdk-11.

   Create a new User Library under Eclipse -> Window -> Preferences -> Java ->
   Build Path -> User Libraries -> New. |Add User Library| Name it JavaFX11 and
   include the jars under the lib folder from JavaFX 11. |Add JavaFX jars|

   /1. Create a Java project
   '''''''''''''''''''''''''

   Select File -> New -> Java Project, and provide a name to the project, like
   HelloFX, and a location. |Create a Java project| Make sure JDK 11 or greater is
   selected. You don't need to add a module-info.java file. You can include the
   JavaFX11 library into the classpath. |Add JavaFX11 library| An empty project
   will be opened.

   /2. Add JavaFX classes
   ''''''''''''''''''''''

   You can add a main class Main, based on this
   `one <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Java/hellofx/src/hellofx/Main.java>`__,
   with an
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Java/hellofx/src/hellofx/hellofx.fxml>`__
   file and a
   `controller <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Java/hellofx/src/hellofx/Controller.java>`__.
   |Add JavaFX project|

   .. container:: alert alert-danger

      **Warning:** If you now run the project it will compile but you will get this
      error:
      ::

         Error: JavaFX runtime components are missing, and are required to run this application

      This error is shown since the Java 11 launcher checks if the main class
      extends javafx.application.Application. If that is the case, it is required
      to have the javafx.graphics module on the module-path.

   /3. Add VM arguments
   ''''''''''''''''''''

   To solve the issue, click on Run -> Run Configurations... -> Java Application,
   create a new launch configuration for your project named \`hellofx\` and add
   these VM arguments:

   -  `Linux/Mac <#nix-eclipse-non-ide-1>`__
   -  `Windows <#win-eclipse-non-ide-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-non-ide-1

         .. code:: no-border-radius

            --module-path /path/to/javafx-sdk-11/lib --add-modules javafx.controls,javafx.fxml

      .. container:: tab-pane
         :name: win-eclipse-non-ide-1

         ::

            --module-path "\path\to\javafx-sdk-11\lib" --add-modules javafx.controls,javafx.fxml

   .. container:: alert alert-warning

      **Warning:** Make sure the checkbox **"Use the -XstartOnFirstThread argument
      when launching with SWT"** is not checked.

   |VM arguments| Click apply and close the dialog.

   /4. Run the project
   '''''''''''''''''''

   Click Run -> Run As -> Java Application -> Main - hellofx to run the project.

   /Environment variable
   '''''''''''''''''''''

   You can replace the module path with the environment variable PATH_TO_FX if you
   add the path to Eclipse -> Preferences -> Run/Debug -> String Substitution ->
   New.... |String Substitution| This will let you use ${PATH_TO_FX} as vm
   argument: |New VM arguments| And you can distribute the project or reuse it in
   other projects too.

   /E(fx)clipse
   ''''''''''''

   If you use the `e(fx)clipse <http://www.eclipse.org/efxclipse/index.html>`__
   plugin, make sure you are running at least the version 3.6.0 that can be
   installed using from the Eclipse Marketplace. |E(fx)clipse| Note that you will
   have to do exactly the same as in the regular Java project above, including the
   JavaFX11 library and adding the necessary VM arguments.

   .. container::
      :name: ECLIPSE-Maven

   /🟡 Sec: Non-modular with Maven and Eclipse
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Maven
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Maven>`__.
   Make sure you have the Maven Integration for Eclipse m2e plugin installed, but
   Eclipse 2019-03 already ships by default the latest version.

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   Create a File -> New -> Project... -> Maven -> Maven project. |Create a Maven
   project| The first time you will need to add the JavaFX archetypes: Select Add
   Archetypes... and type: org.openjfx for the group id, javafx-archetype-simple or
   javafx-archetype-fxml for the artifact id, and 0.0.1 for the version. |Add
   JavaFX archetypes| Type org.openjfx in the filter field and select the
   archetype, between javafx-archetype-fxml or javafx-archetype-simple, based on
   the use of FXML or not in your project. |JavaFX Maven archetypes| Provide the
   groupId, like org.openjfx, the artifactId, like hellofx. You can edit the
   javafx-version property, and set it to 11, and the plugin version to 0.0.1.
   |JavaFX FXML archetype| When the project opens, select the JDK 11 or greater for
   the project (File -> Properties -> Java Build Path -> Libraries). |Set JDK| For
   a non-modular project, you can remove the module-info.java file.

   /2. Verify the pom
   ''''''''''''''''''

   Edit the
   `pom <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Maven/hellofx/pom.xml>`__
   file, and and verify it has the javafx.controls and javafx.fxml dependencies and
   the javafx-maven-plugin with the mainClass set to org.openjfx.hellofx.App. Maven
   manages the required dependencies: it will add javafx.base and javafx.graphics
   that are required by javafx.controls and javafx.fxml, but most important, it
   will add the required classifier based on your platform, downloading the
   specific platform jars. |Update the pom| As for any other maven dependencies,
   these jars can be found in the local .m2 repository.

   /3. Verify the code
   '''''''''''''''''''

   Verify the project contains the source code files, like the
   `App <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Maven/hellofx/src/main/java/org/openjfx/hellofx/App.java>`__
   main class: |image-eclipse06|

   .. _run-the-project-1:

   /4. Run the project
   '''''''''''''''''''

   Click Run -> Run As -> Maven Build -> New launch configuration to create a new
   configuration. Name it hellofx, and edit the required goals, adding:

   ::

      clean javafx:run

   |Run project| Run the project Run -> Run As -> Maven Build -> hellofx -> Run.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11, running the project might fail.
      To avoid it, you can define JAVA_HOME as an environment variable (where
      ${JAVA_HOME} takes the value that can be set in Eclipse -> Preferences ->
      Run/Debug -> String Substitution -> New...): |Set Java Home| Alternatively,
      you can add the correct java command to the javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   You can also open a terminal and run mvn clean javafx:run to run the project.

   .. container:: alert alert-danger

      **Warning:** You might find this exception when running your project:
      .. code:: big

         Exception in thread "WindowsNativeRunloopThread" java.lang.NoSuchMethodError: <init>
             at javafx.graphics/com.sun.glass.ui.win.WinApplication.staticScreen_getScreens(Native Method)
             at javafx.graphics/com.sun.glass.ui.Screen.initScreens(Screen.java:412)
             ...
         Exception in thread "JavaFX Application Thread" java.lang.NullPointerException
             at javafx.graphics/com.sun.prism.d3d.D3DPipeline.getAdapterOrdinal(D3DPipeline.java:205)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.assignScreensAdapters(QuantumToolkit.java:695)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.runToolkit(QuantumToolkit.java:313)
             ...

      This exception is thrown on Windows when Eclipse VM is set to Oracle JDK 1.8
      using Maven or Gradle projects. A workaround for this is to edit eclipse.ini
      and change the -vm option to JDK 11. If that is not possible, another
      workaround is to add this VM argument to the javafx maven plugin:
      ::

         <configuration>
             <options>
                 <option>-Djava.library.path=C:\tmp</option>
             </options>
             <mainClass>org.openjfx.hellofx.App</mainClass>
         </configuration>

   .. container::
      :name: ECLIPSE-Gradle

   /🟡 Sec: Non-modular with Gradle and Eclipse
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX project and use the Gradle tools to build
   it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle>`__.
   Make sure you have the Buildship Gradle Integration 3.0 plugin installed, which
   is bundled with Eclipse 2019-03

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a File -> New -> Project... -> Gradle -> Gradle project. |Create a Gradle
   project| Provide a name to the project, like HelloFX and a location for the
   project. Then point JAVA_HOME to JDK 11. |Gradle project settings| Then close
   the dialog, the project will be created. |Open project|

   .. container:: alert alert-warning

      **Note:** Instead of setting the Java home in the gradle dialog, you can add
      the property org.gradle.java.home to a gradle.properties file, with the
      correct path to JDK 11. This file can be part of the project or under the
      gradle user home $USER_HOME/.gradle.

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp.

   Similar to Maven, we can declare the required JavaFX modules in the build.gradle
   file. However, for Gradle we need to apply the JavaFX gradle plugin:

   ::

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   Refresh the gradle project and you will get the JavaFX dependencies. |Update the
   build| As for any other Gradle dependencies, these jars can be found in the
   local .gradle repository.

   /3. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files.

   You can add a main class MainApp, and an FXMLController class, and add to
   resources the FXML file. |image-eclipse04|

   .. _run-the-project-2:

   /4. Run the project
   '''''''''''''''''''

   You can open the Gradle Task window and click on build -> build to build the
   project, and application -> run to run the project. If this task is not visible,
   press the Refresh Tasks for all projects button at the top-right of the Gradle
   Task window.

   You can also click on Run -> Run configurations... -> Gradle Project -> hellofx
   to add a run task to the project. |Run configuration|

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-eclipse-non-gradle-1>`__
   -  `Windows <#win-eclipse-non-gradle-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-non-gradle-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-eclipse-non-gradle-1

         ::

            gradlew run

   .. container:: alert alert-danger

      **Warning:** You might find this exception when running your project:
      .. code:: big

         Exception in thread "WindowsNativeRunloopThread" java.lang.NoSuchMethodError: <init>
             at javafx.graphics/com.sun.glass.ui.win.WinApplication.staticScreen_getScreens(Native Method)
             at javafx.graphics/com.sun.glass.ui.Screen.initScreens(Screen.java:412)
             ...
         Exception in thread "JavaFX Application Thread" java.lang.NullPointerException
             at javafx.graphics/com.sun.prism.d3d.D3DPipeline.getAdapterOrdinal(D3DPipeline.java:205)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.assignScreensAdapters(QuantumToolkit.java:695)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.runToolkit(QuantumToolkit.java:313)
             ...

      This is happening running on Windows when Eclipse VM is set to Oracle JDK 1.8
      using Maven or Gradle projects. A workaround for this is to edit eclipse.ini
      and change the -vm option to JDK 11. If that is not possible, another
      workaround is to add this VM argument to the build file:
      ::

         run {
             if (osdetector.os == 'windows') {
                 systemProperty "java.library.path", "C:\tmp"
             }
         }

   /🟡 TOP: Modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~

   Download the appropriate `JavaFX jmods <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-jmods-11.

   .. container::
      :name: ECLIPSE-Mod-IDE

   .. _ide-1:

   IDE
   ^^^

   Follow these steps to create a JavaFX modular project and use the IDE tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Java>`__.

   .. _create-a-java-project-1:

   /1. Create a Java project
   '''''''''''''''''''''''''

   Select File -> New -> Java Project and provide a name to the project, like
   HelloFX, and a location. Make sure JDK 11 or greater is selected. Verify you
   have selected the option to create a module-info.java file, and select the
   output folder as HelloFX/bin/hellofx.

   You can add the JavaFX11 library to the classpath. Then press Finish. A dialog
   will ask for the name of the module, which should be set in lower case to
   hellofx. Press Create. An empty project will be opened.

   Create a package org.openjfx and add a main class MainApp that extends
   Application.

   /2. Edit the module-info class
   ''''''''''''''''''''''''''''''

   Edit the module-info class, and include the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.

   .. container:: alert alert-warning

      **Note:** Eclipse will show a warning when creating the Application class:
      ::

         The type Stage from module javafx.graphics may not be accessible to clients due to missing 'requires transitive'

      This warning can be prevented by adding the transitive module to the file:

   |module-info|

   .. _add-javafx-classes-1:

   /3. Add JavaFX classes
   ''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Java/HelloFX/src/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Java/HelloFX/src/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Java/HelloFX/src/org/openjfx/scene.fxml>`__
   and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Java/HelloFX/src/org/openjfx/styles.css>`__
   files.

   /4. Add VM options
   ''''''''''''''''''

   Being a modular project, and since we already added the JavaFX11 library to the
   module-path, there is no need to add any VM arguments.

   .. container:: alert alert-warning

      **Warning:** Make sure the checkbox **"Use the -XstartOnFirstThread argument
      when launching with SWT"** is not checked.

   .. _run-the-project-3:

   /5. Run the project
   '''''''''''''''''''

   Click Run -> Run Configurations... -> Java Application to run the project.

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a runtime image, run the following commands on a terminal:

   -  `Linux/Mac <#nix-eclipse-mod-ide-2>`__
   -  `Windows <#win-eclipse-mod-ide-2>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-mod-ide-2

         .. code:: no-border-radius

            export PATH_TO_FX_MODS=path/to/javafx-jmods-11
            $JAVA_HOME/bin/jlink --module-path $PATH_TO_FX_MODS:bin/hellofx --add-modules=hellofx --output jre
            jre/bin/java -m hellofx/org.openjfx.MainApp

      .. container:: tab-pane
         :name: win-eclipse-mod-ide-2

         ::

            set PATH_TO_FX_MODS="path\to\javafx-jmods-11"
            jlink --module-path "%PATH_TO_FX_MODS%;bin\hellofx" --add-modules=hellofx --output jre
            jre\bin\java -m hellofx/org.openjfx.MainApp

   .. container::
      :name: ECLIPSE-Mod-Maven

   .. _maven-1:

   /🟡 Sec: Modular with Maven and Eclipse
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Maven tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Maven>`__.

   .. _create-a-maven-project-1:

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   Create a File -> New -> Project... -> Maven -> Maven project. The first time you
   will need to add the JavaFX archetypes: Select Add Archetypes... and type:
   org.openjfx for the group id, javafx-archetype-simple or javafx-archetype-fxml
   for the artifact id, and 0.0.1 for the version. |image-eclipse01| Type org.openjfx in the
   filter field and select the archetype, between javafx-archetype-fxml or
   javafx-archetype-simple, based on the use of FXML or not in your project.
   |image-eclipse02| Provide the groupId, like org.openjfx, the artifactId, like hellofx.
   You can edit the javafx-version property, and set it to 11, and the plugin
   version to 0.0.1. |image-eclipse03| When the project opens, select the JDK 11 for the
   project (File -> Properties -> Java Build Path -> Libraries). |image-eclipse04|

   .. _verify-the-pom-1:

   /2. Verify the pom
   ''''''''''''''''''

   Edit the
   `pom <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Non-Modular/Maven/hellofx/pom.xml>`__
   file, and and verify it has the javafx.controls and javafx.fxml dependencies and
   the javafx-maven-plugin with the mainClass set to
   hellofx/org.openjfx.hellofx.App. |pom|

   .. _verify-the-code-1:

   /3. Verify the code
   '''''''''''''''''''

   Edit the module-info class. Rename the module to hellofx. Also, to prevent
   Eclipse from showing a warning when creating the Application class, add also the
   transitive module to the file: |image-eclipse06|

   Verify the project contains the source code files, like the
   `App <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Maven/hellofx/src/main/java/org/openjfx/hellofx/App.java>`__
   main class: |Source code|

   .. _run-the-project-4:

   /5. Run the project
   '''''''''''''''''''

   Click Run -> Run As -> Maven Build -> New launch configuration to create a new
   configuration. Name it hellofx, and add the required goals:

   ::

      clean javafx:run

   Run the project Run -> Run As -> Maven Build -> hellofx -> Run.

   .. container:: alert alert-warning

      **Note:** In case JAVA_HOME is not set to 11, running the project might fail.
      To avoid it, you can define JAVA_HOME as an environment variable (where
      ${JAVA_HOME} takes the value that can be set in Eclipse -> Preferences ->
      Run/Debug -> String Substitution -> New...): |image-eclipse08| Alternatively, you can
      add the correct java command to the javafx-maven-plugin:
      <configuration><executable>/path/to/jdk-11/bin/java</executable></configuration>.

   You can also open a terminal and run mvn clean javafx:run to run the project.

   .. container:: alert alert-danger

      **Warning:** You might find this exception when running your project:
      .. code:: big

         Exception in thread "WindowsNativeRunloopThread" java.lang.NoSuchMethodError: <init>
             at javafx.graphics/com.sun.glass.ui.win.WinApplication.staticScreen_getScreens(Native Method)
             at javafx.graphics/com.sun.glass.ui.Screen.initScreens(Screen.java:412)
             ...
         Exception in thread "JavaFX Application Thread" java.lang.NullPointerException
             at javafx.graphics/com.sun.prism.d3d.D3DPipeline.getAdapterOrdinal(D3DPipeline.java:205)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.assignScreensAdapters(QuantumToolkit.java:695)
             at javafx.graphics/com.sun.javafx.tk.quantum.QuantumToolkit.runToolkit(QuantumToolkit.java:313)
             ...

      This is happening running on Windows when Eclipse VM is set to Oracle JDK 1.8
      using Maven or Gradle projects. A workaround for this is to edit eclipse.ini
      and change the -vm option to JDK 11. If that is not possible, another
      workaround is to add this VM argument to the javafx maven plugin:
      ::

         <configuration>
             <options>
                 <option>-Djava.library.path=C:\tmp</option>
             </options>
             <mainClass>org.openjfx.hellofx.App</mainClass>
         </configuration>

   .. _create-a-custom-runtime-image-1:

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, you can edit the run configuration an modify the
   goals to clean javafx:jlink or run from a terminal with JAVA_HOME set to 11:

   ::

      mvn clean javafx:jlink

   Note the plugin allows the usual options as the jlink command, as well as
   creating a launcher or a zip with the custom image.

   And after the image is built, you can run it from command line:

   -  `Linux/Mac <#nix-eclipse-mod-mav-1>`__
   -  `Windows <#win-eclipse-mod-mav-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-mod-mav-1

         .. code:: no-border-radius

            target/hellofx/bin/launcher

      .. container:: tab-pane
         :name: win-eclipse-mod-mav-1

         ::

            target\hellofx\bin\launcher

   .. container::
      :name: ECLIPSE-Mod-Gradle

   .. _gradle-1:

   /🟡 Sec: Modular with Gradle and Eclipse
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Gradle tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle>`__.

   .. _create-a-gradle-project-1:

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Create a File -> New -> Project... -> Gradle -> Gradle project. Provide a name
   to the project, like HelloFX and a location for the project. Then point Java
   Home to JDK 11. Then close the dialog, the project will be created.

   .. container:: alert alert-warning

      **Note:** Instead of setting the Java home in the gradle dialog, you can add
      the property org.gradle.java.home to a gradle.properties file, with the
      correct path to JDK 11. This file can be part of the project or under the
      gradle user home $USER_HOME/.gradle.

   .. _modify-the-build-1:

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp.

   Note the use of the org.openjfx.javafxplugin plugin, that removes the necessity
   of adding the JavaFX dependencies and setting the module-path for the compile
   and run task for them.

   Note also that the use of the eclipse plugin is required to include the modules
   to the module path. |image-eclipse01|

   /3. Add the module-info class
   '''''''''''''''''''''''''''''

   Add the module-info class, including the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.
   To prevent Eclipse from showing a warning when creating the Application class,
   add also the transitive modules to the file: |image-eclipse02|

   .. _add-the-source-code-1:

   /3. Add the source code
   '''''''''''''''''''''''

   Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/Eclipse/Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files.

   .. _run-the-project-5:

   /4. Run the project
   '''''''''''''''''''

   You can open the Gradle Task window and click on build -> build to build the
   project, and application -> run to run the project. You can also click on Run ->
   Run configurations... -> Gradle Project -> hellofx to add a run task to the
   project.

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-eclipse-mod-gra-1>`__
   -  `Windows <#win-eclipse-mod-gra-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-mod-gra-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-eclipse-mod-gra-1

         ::

            gradlew run

   .. _create-a-custom-runtime-image-2:

   /5. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, you can use the
   `org.beryx.jlink <https://badass-jlink-plugin.beryx.org/releases/latest/>`__
   plugin. It can be easily combined with the JavaFX Gradle plugin.

   ::

      plugins {
        id 'application'
        id 'eclipse'
        id 'org.openjfx.javafxplugin' version '0.0.7'
        id 'org.beryx.jlink' version '2.9.4'
      }

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

      jlink {
          launcher {
              name = 'hellofx'
          }
      }

   Then run hellofx -> Tasks -> build -> jlink task to create the image. To run the
   image:

   -  `Linux/Mac <#nix-eclipse-mod-gra-2>`__
   -  `Windows <#win-eclipse-mod-gra-2>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-eclipse-mod-gra-2

         .. code:: no-border-radius

            build/image/bin/hellofx

      .. container:: tab-pane
         :name: win-eclipse-mod-gra-2

         ::

            build\image\bin\hellofx

   .. |Add User Library| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse01.png
   .. |Add JavaFX jars| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse02.png
   .. |Create a Java project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse03.png
   .. |Add JavaFX11 library| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse04.png
   .. |Add JavaFX project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse05.png
   .. |VM arguments| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse06.png
   .. |String Substitution| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse07.png
   .. |New VM arguments| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse08.png
   .. |E(fx)clipse| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/ide/eclipse09.png
   .. |Create a Maven project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse00.png
   .. |Add JavaFX archetypes| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse01.png
   .. |JavaFX Maven archetypes| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse02.png
   .. |JavaFX FXML archetype| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse03.png
   .. |Set JDK| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse04.png
   .. |Update the pom| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse05.png
   .. |image-eclipse06| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse06.png
   .. |Run project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse07.png
   .. |Set Java Home| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/maven/eclipse08.png
   .. |Create a Gradle project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse00.png
   .. |Gradle project settings| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse01.png
   .. |Open project| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse02.png
   .. |Update the build| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse03.png
   .. |image-eclipse04| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse04.png
   .. |Run configuration| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/gradle/eclipse05.png
   .. |module-info| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/ide/eclipse01.png
   .. |image-eclipse01| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse01.png
   .. |image-eclipse02| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse02.png
   .. |image-eclipse03| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse03.png
   .. |image-eclipse04| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse04.png
   .. |pom| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse05.png
   .. |image-eclipse06| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse06.png
   .. |Source code| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse07.png
   .. |image-eclipse08| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/maven/eclipse08.png
   .. |image-eclipse01| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/gradle/eclipse01.png
   .. |image-eclipse02| image:: https://openjfx.io/openjfx-docs/images/ide/eclipse/modular/gradle/eclipse02.png

/🟡 PART: JavaFX and Visual Studio Code
========================================

.. https://openjfx.io/openjfx-docs/ide-vscode.html

.. container::

   This section explains how to create a JavaFX application in Visual Studio Code.
   JavaFX, Visual Studio Code and some extensions were used for the screenshots.
   The following list shows their versions.

   -  JavaFX: 17.0.1
   -  Visual Studio Code: 1.63.2
   -  `Extension Pack for Java: 0.21.0 <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>`__
   -  `Gradle for Java: 3.10.0 <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle>`__

   Download an appropriate JDK for your operating system and set JAVA_HOME to the
   JDK directory. Refer to `Install Java <#install-java>`__ section for more
   information.

   You can create a JavaFX modular or non-modular project and use the IDE tools,
   Maven or Gradle build tools.

   /🟡 TOP: Non-modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: VSCode-IDE

   IDE
   ^^^

   Follow these steps to create a JavaFX non-modular project and use the IDE tools
   to build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Java>`__.

   Download the appropriate `JavaFX SDK <https://gluonhq.com/products/javafx/>`__
   for your operating system and unzip it to a desired location, 
   for instance /Users/your-user/Downloads/javafx-sdk-11.

   /1. Create a Java project
   '''''''''''''''''''''''''

   Select Help -> Show All Commands, in the dropdown list, enter Java: Create Java
   project..., and select it. |Create a Java project| Select No build tools in the
   list as the project type. |Create a project without build tools| Then select the
   target location you want to store the new project in the file explorer. Provide
   a name to the project, like HelloFX. |Input project name| The new project will
   be opened in a new Visual Studio Code window. You can open the App.java in the
   src/ to activate the Java extensions and import the project.

   /2. Add JavaFX dependencies
   '''''''''''''''''''''''''''

   To add JavaFX as dependencies to your project, you can simply copy all the jar
   files from the lib folder of your downloaded JavaFX SDK, 
   for instance /Users/your-user/Downloads/javafx-sdk-11/lib/ to the lib folder of your project.
   Or alternatively, you can add them via the Java Projects explorer. Click the +
   button beside the Referenced Library\\ies, select the JavaFX library jars to add
   them. |Add referenced libraries|

   /3.Add JavaFX classes
   '''''''''''''''''''''

   Remove the existing App.java. Create a new folder under src/ and name it as
   hellofx. You can add the main class App in the newly created folder, based on
   this
   `one <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Java/hellofx/src/hellofx/Main.java>`__,
   with an
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Java/hellofx/src/hellofx/hellofx.fxml>`__
   file and a
   `controller <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Java/hellofx/src/hellofx/Controller.java>`__.
   |Update the main class|

   /4. Create and update launch configurations
   '''''''''''''''''''''''''''''''''''''''''''

   At the left side, switch to the Run and Debug viewlet, click create a
   launch.json file. |Create a launch.json file| Or you can directly create a
   launch.json file in the .vscode folder based on this
   `one <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Java/hellofx/.vscode/launch.json>`__.
   Replace <JavaFX_lib_path> to the location lib folder of your downloaded JavaFX
   SDK. |Update launch.json|

   /5. Run the project
   '''''''''''''''''''

   In the Run and Debug viewlet, click the green run button to launch the
   application. |Run the application|

   .. container::
      :name: VSCode-Maven

   /🟡 Sec: Non-modular Maven and VS Code
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX non-modular project and use the Maven
   tools to build it and run it. Alternatively, you can download a similar project
   from
   `here <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Maven>`__.
   Make sure you have the 
   `Extension Pack for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>`__
   installed, which includs the required extensions to support Maven projects.

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   Select Help -> Show All Commands, in the dropdown list, enter Java: Create Java
   project..., and select it. |image-vscode01| Select JavaFX in the list as the project
   type. |Create a JavaFX project| Input gruop id, like org.openjfx and artifact
   id, like hellofx and select the project location in the file explorer. Then a
   command will be sent and executed in the terminal, which creates a JavaFX
   project via the Maven Archetype for you. Click Open button, the new project will
   be opened in a new Visual Studio Code window. |Open the project| For a
   non-modular project, you can remove the module-info.java file.

   /2. Verify the pom
   ''''''''''''''''''

   Edit the
   `pom <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Maven/hellofx/pom.xml>`__
   file, and and verify it has the javafx.controls and javafx.fxml dependencies and
   the javafx-maven-plugin with the mainClass set to org.openjfx.App. And you can
   set the dependencies version to 17.0.1, and set the javafx-maven-plugin version
   to 0.0.8. Maven manages the required dependencies: it will add javafx.base and
   javafx.graphics that are required by javafx.controls and javafx.fxml, but most
   important, it will add the required classifier based on your platform,
   downloading the specific platform jars. |Update the pom| As for any other maven
   dependencies, these jars can be found in the local .m2 repository.

   /3. Verify the code
   '''''''''''''''''''

   Verify the project contains the source code files, like the
   `App <https://github.com/openjfx/samples/blob/master/IDE/Vscode/Non-Modular/Maven/hellofx/src/main/java/org/openjfx/hellofx/App.java>`__
   main class: |Verify the code|

   .. _run-the-project-1:

   /4. Run the project
   '''''''''''''''''''

   To run the project, open the Maven explorer, click <YOUR_PROJECT_NAME> ->
   Plugins -> javafx -> javafx:run |Run the project| Alternatively, you can also
   open a terminal and run mvn clean javafx:run to run the project.

   .. container::
      :name: VSCode-Gradle

   /🟡 Sec: Non-modular Gradle and VS Code
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX project and use the Gradle tools to build
   it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle>`__.
   Make sure you have the 
   `Extension Pack for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>`__
   and 
   `Gradle for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle>`__
   installed, which includs the required extensions to support Gradle projects.

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Select Help -> Show All Commands, in the dropdown list, enter Java: Create Java
   project..., and select it. |image-vscode01| Select Gradle in the list as the project
   type. |Create a Gradle project| Select the project location in the file explorer
   and the build script DSL. Input the project name. Then the Gradle for Java
   extension will create a new Gradle project for you. The new project will be
   opened in a new Visual Studio Code window after the creation finished. |image-vscode03|
   Remove the app/src/test folder if you don't want to add tests for the project.

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file under the app/ folder and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp. Make sure
   the plugin org.openjfx.javafxplugin is applied and the version is set to 0.0.10

   Similar to Maven, we can declare the required JavaFX modules in the build.gradle
   file. However, for Gradle we need to apply the JavaFX gradle plugin:

   ::

      javafx {
          version = "17.0.1"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   Right click on the settings.gradle and select Update Project to update the
   gradle project. |Update the project| Visual Studio Code will list all the JavaFX
   dependencies after the update. |Gradle dependencies| As for any other Gradle
   dependencies, these jars can be found in the local .gradle repository.

   /3. Add the source code
   '''''''''''''''''''''''

   Remove App.java and its package. Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Non-Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files.

   You can add a main class MainApp, and an FXMLController class, and add to
   resources the FXML file. |Add the source code|

   .. _run-the-project-2:

   /4. Run the project
   '''''''''''''''''''

   You can open the Gradle viewlet and click on <YOUR_PROJECT_NAME> -> build ->
   build to build the project, and <YOUR_PROJECT_NAME> -> application -> run to run
   the project. |Build and run|

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-vscode-non-gradle-1>`__
   -  `Windows <#win-vscode-non-gradle-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-vscode-non-gradle-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-vscode-non-gradle-1

         ::

            .\gradlew.bat run

   /🟡 TOP: Modular projects
   ~~~~~~~~~~~~~~~~~~~~~~~~~

   .. container::
      :name: VSCode-Mod-Maven

   .. _maven-1:

   /🟡 Sec: Modular with Maven and VS Code
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX modular project and use the Maven tools to
   build it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Maven>`__.
   Make sure you have the 
   `Extension Pack for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>`__
   installed, which includs the required extensions to support Maven projects.

   .. _create-a-maven-project-1:

   /1. Create a Maven project
   ''''''''''''''''''''''''''

   Select Help -> Show All Commands, in the dropdown list, enter Java: Create Java
   project..., and select it. |image-vscode01| Select JavaFX in the list as the project
   type. |image-vscode02| Input gruop id, like org.openjfx and artifact id, like hellofx
   and select the project location in the file explorer. Then a command will be
   sent and executed in the terminal, which creates a JavaFX project via the Maven
   Archetype for you. Click Open button, the new project will be opened in a new
   Visual Studio Code window. |image-vscode03|

   .. _verify-the-pom-1:

   /2. Verify the pom
   ''''''''''''''''''

   Edit the
   `pom <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Maven/hellofx/pom.xml>`__
   file, and and verify it has the javafx.controls and javafx.fxml dependencies and
   the javafx-maven-plugin with the mainClass set to org.openjfx.App. And you can
   set the dependencies version to 17.0.1, and set the javafx-maven-plugin version
   to 0.0.8. Maven manages the required dependencies: it will add javafx.base and
   javafx.graphics that are required by javafx.controls and javafx.fxml, but most
   important, it will add the required classifier based on your platform,
   downloading the specific platform jars. |image-vscode04| As for any other maven
   dependencies, these jars can be found in the local .m2 repository.

   .. _verify-the-code-1:

   /3. Verify the code
   '''''''''''''''''''

   Verify the project contains the source code files, like the
   `App <https://github.com/openjfx/samples/blob/master/IDE/Vscode/Modular/Maven/hellofx/src/main/java/org/openjfx/hellofx/App.java>`__
   main class: |image-vscode05|

   .. _run-the-project-3:

   /4. Run the project
   '''''''''''''''''''

   To run the project, open the Maven explorer, click <YOUR_PROJECT_NAME> ->
   Plugins -> javafx -> javafx:run |image-vscode06| Alternatively, you can also open a
   terminal and run mvn clean javafx:run to run the project.

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, open the Maven explorer, click <YOUR_PROJECT_NAME>
   -> Plugins -> javafx -> javafx:jlink or run from a terminal with JAVA_HOME set:

   ::

      mvn clean javafx:jlink

   Note the plugin allows the usual options as the jlink command, as well as
   creating a launcher or a zip with the custom image.

   And after the image is built, you can run it from command line:

   -  `Linux/Mac <#nix-vscode-mod-mav-1>`__
   -  `Windows <#win-vscode-mod-mav-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-vscode-mod-mav-1

         .. code:: no-border-radius

            target/hellofx/bin/launcher

      .. container:: tab-pane
         :name: win-vscode-mod-mav-1

         ::

            target\hellofx\bin\launcher.bat

   .. container::
      :name: VSCode-Mod-Gradle

   .. _gradle-1:

   /🟡 Sec: Modular with Gradle and VS Code
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Follow these steps to create a JavaFX project and use the Gradle tools to build
   it and run it. Alternatively, you can download a similar project from
   `here <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle>`__.
   Make sure you have the 
   `Extension Pack for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack>`__
   and 
   `Gradle for Java <https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-gradle>`__
   installed, which includs the required extensions to support Gradle projects.

   .. _create-a-gradle-project-1:

   /1. Create a Gradle project
   '''''''''''''''''''''''''''

   Select Help -> Show All Commands, in the dropdown list, enter Java: Create Java
   project..., and select it. |image-vscode01| Select Gradle in the list as the project
   type. |image-vscode02| Select the project location in the file explorer and the build
   script DSL. Input the project name. Then the Gradle for Java extension will
   create a new Gradle project for you. The new project will be opened in a new
   Visual Studio Code window after the creation finished. |image-vscode03| Remove the
   app/src/test folder if you don't want to add tests for the project.

   .. _modify-the-build-1:

   /2. Modify the build
   ''''''''''''''''''''

   Edit the build.gradle file and replace it with this
   `build <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle/hellofx/build.gradle>`__
   file, setting the mainClassName accordingly to org.openjfx.MainApp.

   Similar to Maven, we can declare the required JavaFX modules in the build.gradle
   file. However, for Gradle we need to apply the JavaFX gradle plugin:

   ::

      javafx {
          version = "17.0.1"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

   Right click on the settings.gradle and select Update Project to update the
   gradle project. |image-vscode04| Visual Studio Code will list all the JavaFX
   dependencies after the update. |image-vscode05| As for any other Gradle dependencies,
   these jars can be found in the local .gradle repository.

   /3. Add the module-info class
   '''''''''''''''''''''''''''''

   Add the module-info class, including the required modules javafx.controls and
   javafx.fxml. Since FXML uses reflection to access the controller in the module,
   this has to be opened to javafx.fxml. Finally, export the package org.openjfx.
   |module-info|

   .. _add-the-source-code-1:

   /4. Add the source code
   '''''''''''''''''''''''

   Remove App.java and its package. Based on this
   `MainApp <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle/hellofx/src/main/java/org/openjfx/MainApp.java>`__
   class, add its content to the project main class. Then add the
   `controller <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle/hellofx/src/main/java/org/openjfx/FXMLController.java>`__
   and the
   `FXML <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle/hellofx/src/main/resources/org/openjfx/scene.fxml>`__
   and the
   `css <https://github.com/openjfx/samples/blob/master/IDE/VSCode/Modular/Gradle/hellofx/src/main/resources/org/openjfx/styles.css>`__
   files.

   You can add a main class MainApp, and an FXMLController class, and add to
   resources the FXML file. |image-vscode07|

   .. _run-the-project-4:

   /5. Run the project
   '''''''''''''''''''

   You can open the Gradle viewlet and click on <YOUR_PROJECT_NAME> -> build ->
   build to build the project, and <YOUR_PROJECT_NAME> -> application -> run to run
   the project. |image-vscode08|

   You can also open a terminal and run:

   -  `Linux/Mac <#nix-vscode-mod-gradle-1>`__
   -  `Windows <#win-vscode-mod-gradle-1>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-vscode-mod-gradle-1

         .. code:: no-border-radius

            ./gradlew run

      .. container:: tab-pane
         :name: win-vscode-mod-gradle-1

         ::

            .\gradlew.bat run

   .. _create-a-custom-runtime-image-1:

   /6. Create a custom runtime image
   '''''''''''''''''''''''''''''''''

   To create a custom runtime, you can use the
   `org.beryx.jlink <https://badass-jlink-plugin.beryx.org/releases/latest/>`__
   plugin. It can be easily combined with the JavaFX Gradle plugin.

   ::

      plugins {
        id 'application'
        id 'org.openjfx.javafxplugin' version '0.0.7'
        id 'org.beryx.jlink' version '2.9.4'
      }

      javafx {
          version = "12"
          modules = [ 'javafx.controls', 'javafx.fxml' ]
      }

      jlink {
          options = ['--strip-debug', '--compress', '2', '--no-header-files', '--no-man-pages']
          launcher {
              name = 'hellofx'
          }
      }

   Then open the Gradle viewlet and click on <YOUR_PROJECT_NAME> -> build -> jlink
   task to create the image. To run the image:

   -  `Linux/Mac <#nix-vscode-mod-gra-2>`__
   -  `Windows <#win-vscode-mod-gra-2>`__

   .. container:: tab-content

      .. container:: tab-pane active
         :name: nix-vscode-mod-gra-2

         .. code:: no-border-radius

            app/build/image/bin/hellofx

      .. container:: tab-pane
         :name: win-vscode-mod-gra-2

         ::

            app\build\image\bin\hellofx.bat

   .. |Create a Java project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode01.png
   .. |Create a project without build tools| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode02.png
   .. |Input project name| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode03.png
   .. |Add referenced libraries| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode04.png
   .. |Update the main class| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode05.png
   .. |Create a launch.json file| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode06.png
   .. |Update launch.json| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode07.png
   .. |Run the application| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/ide/vscode08.png
   .. |image-vscode01| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode01.png
   .. |Create a JavaFX project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode02.png
   .. |Open the project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode03.png
   .. |Update the pom| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode04.png
   .. |Verify the code| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode05.png
   .. |Run the project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/maven/vscode06.png
   .. |image-vscode01| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode01.png
   .. |Create a Gradle project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode02.png
   .. |image-vscode03| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode03.png
   .. |Update the project| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode04.png
   .. |Gradle dependencies| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode05.png
   .. |Add the source code| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode06.png
   .. |Build and run| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/gradle/vscode07.png
   .. |image-vscode01| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode01.png
   .. |image-vscode02| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode02.png
   .. |image-vscode03| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode03.png
   .. |image-vscode04| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode04.png
   .. |image-vscode05| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode05.png
   .. |image-vscode06| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/maven/vscode06.png
   .. |image-vscode01| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode01.png
   .. |image-vscode02| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode02.png
   .. |image-vscode03| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode03.png
   .. |image-vscode04| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode04.png
   .. |image-vscode05| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode05.png
   .. |module-info| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode06.png
   .. |image-vscode07| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode07.png
   .. |image-vscode08| image:: https://openjfx.io/openjfx-docs/images/ide/vscode/modular/gradle/vscode08.png

**Next Steps**

.. https://openjfx.io/openjfx-docs/next-steps.html

.. container::

   Congratulations on successfully creating and running your first JavaFX
   application.

   If you want to contribute to JavaFX, please visit our 
   `Github repository <https://github.com/openjdk/jfx/>`__.

   Please reach out to us at our 
   `email support <http://gluonhq.com/about-us/contact-us/>`__. We’d love to hear from
   you!


/🟡 PART: Introduction to FXML
===============================

.. container:: fx-code-header

   .. container:: version

      Release: JavaFX 22

   Last updated: 01 May 2017

   Contents
   --------

   -  `Overview <#overview>`__
   -  `Elements <#elements>`__

      -  `Class Instance Elements <#class_instance_elements>`__

         -  `Instance Declarations <#instance_declaration_elements>`__
         -  `<fx:include> <#include_elements>`__
         -  `<fx:constant> <#constant_elements>`__
         -  `<fx:reference> <#reference_elements>`__
         -  `<fx:copy> <#copy_elements>`__
         -  `<fx:root> <#root_elements>`__

      -  `Property Elements <#property_elements>`__

         -  `Property Setters <#property_setter_elements>`__
         -  `Read-Only List Properties <#read_only_list_property_elements>`__
         -  `Read-Only Map Properties <#read_only_map_property_elements>`__
         -  `Default Properties <#default_properties>`__

      -  `Static Properties <#static_property_elements>`__
      -  `Define Blocks <#define_elements>`__

   -  `Attributes <#attributes>`__

      -  `Instance Properties <#instance_property_attributes>`__

         -  `Location Resolution <#location_resolution>`__
         -  `Resource Resolution <#resource_resolution>`__
         -  `Variable Resolution <#variable_resolution>`__
         -  `Escape Sequences <#escape_sequences>`__
         -  `Expression Binding <#expression_binding>`__

      -  `Static Properties <#static_property_attributes>`__
      -  `Event Handlers <#event_handler_attributes>`__

         -  `Script Event Handlers <#script_event_handlers>`__
         -  `Controller Method Event Handlers <#controller_method_event_handlers>`__
         -  `Event handlers from expressions <#expression_handlers>`__
         -  `Special handlers for collections and properties <#collections_and_property_handlers>`__

   -  `Scripting <#scripting>`__
   -  `Controllers <#controllers>`__

      -  `@FXML <#fxml_annotation>`__
      -  `Nested Controllers <#nested_controllers>`__

   -  `FXMLLoader <#fxmlloader>`__

      -  `Custom Components <#custom_components>`__

   -  `Deploying an Application as a Module <#deploy_as_module>`__

   Overview
   --------

   FXML is a scriptable, XML-based markup language for constructing Java
   object graphs. It provides a convenient alternative to constructing such
   graphs in procedural code, and is ideally suited to defining the user
   interface of a JavaFX application, since the hierarchical structure of
   an XML document closely parallels the structure of the JavaFX scene
   graph.

   This document introduces the FXML markup language and explains how it
   can be used to simplify development of JavaFX applications.

   /Elements
   ---------

   In FXML, an XML element represents one of the following:

   -  A class instance
   -  A property of a class instance
   -  A "static" property
   -  A "define" block
   -  A block of script code

   Class instances, instance properties, static properties, and define
   blocks are discussed in this section below. Scripting is discussed in a
   later section.

   Class Instance Elements
   ~~~~~~~~~~~~~~~~~~~~~~~

   Class instances can be constructed in FXML in several ways. The most
   common is via instance declaration elements, which simply create a new
   instance of a class by name. Other ways of creating class instances
   include referencing existing values, copying existing values, and
   including external FXML files. Each is discussed in more detail below.

   Instance Declarations
   ^^^^^^^^^^^^^^^^^^^^^

   If an element's tag is considered an instance declaration if the tag
   begins with uppercase letter (and the class is imported) or, as in Java,
   it denotes a fully-qualified (including the package name) name of a
   class. When the FXML loader (also introduced later) encounters such an
   element, it creates an instance of that class.

   Importing a class is done using the "import" processing instruction
   (PI). For example, the following PI imports the
   javafx.scene.control.Label class into the current FXML document’s
   namespace:

   .. code:: code

      <?import javafx.scene.control.Label?>

   This PI imports all classes from the javafx.scene.control package into
   the current namespace:

   .. code:: code

      <?import javafx.scene.control.*?>

   Any class that adheres to JavaBean constructor and property naming
   conventions can be readily instantiated and configured using FXML. The
   following is a simple but complete example that creates an instance of
   javafx.scene.control.Label and sets its "text" property to "Hello,
   World!":

   .. code:: code

      <?import javafx.scene.control.Label?>
      <Label text="Hello, World!"/>

   Note that the Label’s "text" property in this example is set using an
   XML attribute. Properties can also be set using nested property
   elements. Property elements are discussed in more detail later in this
   section. Property attributes are discussed in a later section.

   Classes that don't conform to Bean conventions can also be constructed
   in FXML, using an object called a "builder". Builders are discussed in
   more detail later.

   Maps
   ''''

   Internally, the FXML loader uses an instance of
   com.sun.javafx.fxml.BeanAdapter to wrap an instantiated object and
   invoke its setter methods. This (currently) private class implements the
   java.util.Map interface and allows a caller to get and set Bean property
   values as key/value pairs.

   If an element represents a type that already implements Map (such as
   java.util.HashMap), it is not wrapped and its get() and put() methods
   are invoked directly. For example, the following FXML creates an
   instance of HashMap and sets its "foo" and "bar" values to "123" and
   "456", respectively:

   .. code:: code

      <HashMap foo="123" bar="456"/>

   fx:value
   ''''''''

   The fx:value attribute can be used to initialize an instance of a type
   that does not have a default constructor but provides a static
   valueOf(String) method. For example, java.lang.String as well as each of
   the primitive wrapper types define a valueOf() method and can be
   constructed in FXML as follows:

   .. code:: code

      <String fx:value="Hello, World!"/>
      <Double fx:value="1.0"/>
      <Boolean fx:value="false"/>

   Custom classes that define a static valueOf(String) method can also be
   constructed this way.

   fx:factory
   ''''''''''

   The fx:factory attribute is another means of creating objects whose
   classes do not have a default constructor. The value of the attribute is
   the name of a static, no-arg factory method for producing class
   instances. For example, the following markup creates an instance of an
   observable array list, populated with three string values:

   .. code:: code

      <FXCollections fx:factory="observableArrayList">
          <String fx:value="A"/>
          <String fx:value="B"/>
          <String fx:value="C"/>
      </FXCollections>

   Builders
   ''''''''

   A third means of creating instances of classes that do not conform to
   Bean conventions (such as those representing immutable values) is a
   "builder". The builder design pattern delegates object construction to a
   mutable helper class (called a "builder") that is responsible for
   manufacturing instances of the immutable type.

   Builder support in FXML is provided by two interfaces. The
   javafx.util.Builder interface defines a single method named build()
   which is responsible for constructing the actual object:

   .. code:: code

      public interface Builder<T> {
          public T build();
      }

   A javafx.util.BuilderFactory is responsible for producing builders that
   are capable of instantiating a given type:

   .. code:: code

      public interface BuilderFactory {
          public Builder<?> getBuilder(Class<?> type);
      }

   A default builder factory, JavaFXBuilderFactory, is provided in the
   javafx.fxml package. This factory is capable of creating and configuring
   most immutable JavaFX types. For example, the following markup uses the
   default builder to create an instance of the immutable
   javafx.scene.paint.Color class:

   .. code:: code

      <Color red="1.0" green="0.0" blue="0.0"/>

   Note that, unlike Bean types, which are constructed when the element's
   start tag is processed, objects constructed by a builder are not
   instantiated until the element's closing tag is reached. This is because
   all of the required arguments may not be available until the element has
   been fully processed. For example, the Color object in the preceding
   example could also be written as:

   .. code:: code

      <Color>
          <red>1.0</red>
          <green>0.0</green>
          <blue>0.0</blue>
      </Color>

   The Color instance cannot be fully constructed until all three of the
   color components are known.

   When processing markup for an object that will be constructed by a
   builder, the Builder instances are treated like value objects - if a
   Builder implements the Map interface, the put() method is used to set
   the builder's attribute values. Otherwise, the builder is wrapped in a
   BeanAdapter and its properties are assumed to be exposed via standard
   Bean setters.

   <fx:include>
   ^^^^^^^^^^^^

   The <fx:include> tag creates an object from FXML markup defined in
   another file. It is used as follows:

   .. code:: code

      <fx:include source="filename"/>

   where filename is the name of the FXML file to include. Values that
   begin with a leading slash character are treated as relative to the
   classpath. Values with no leading slash are considered relative to the
   path of the current document.

   For example, given the following markup:

   .. code:: code

      <?import javafx.scene.control.*?>
      <?import javafx.scene.layout.*?>
      <VBox xmlns:fx="http://javafx.com/fxml">
          <children>
              <fx:include source="my_button.fxml"/>
          </children>
      </VBox>

   If my_button.fxml contains the following:

   .. code:: code

      <?import javafx.scene.control.*?>
      <Button text="My Button"/>

   the resulting scene graph would contain a VBox as a root object with a
   single Button as a child node.

   Note the use of the "fx" namespace prefix. This is a reserved prefix
   that defines a number of elements and attributes that are used for
   internal processing of an FXML source file. It is generally declared on
   the root element of a FXML document. Other features provided by the "fx"
   namespace are described in the following sections.

   <fx:include> also supports attributes for specifying the name of the
   resource bundle that should be used to localize the included content, as
   well as the character set used to encode the source file. Resource
   resolution is discussed in a later section.

   .. code:: code

      <fx:include source="filename" resources="resource_file" charset="utf-8"/>

   <fx:constant>
   ^^^^^^^^^^^^^

   The <fx:constant> element creates a reference to a class constant. For
   example, the following markup sets the value of the "minWidth" property
   of aButton instance to the value of the NEGATIVE_INFINITY constant
   defined by the java.lang.Double class:

   .. code:: code

      <Button>
          <minHeight><Double fx:constant="NEGATIVE_INFINITY"/></minHeight>
      </Button>

   <fx:reference>
   ^^^^^^^^^^^^^^

   The <fx:reference> element creates a new reference to an existing
   element. Wherever this tag appears, it will effectively be replaced by
   the value of the named element. It is used in conjunction with either
   the fx:id attribute or with a script variables, both of which are
   discussed in more detail in later sections. The "source" attribute of
   the <fx:reference> element specifies the name of the object to which the
   new element will refer.

   For example, the following markup assigns a previously-defined Image
   instance named "myImage" to the "image" property of an ImageView
   control:

   .. code:: code

      <ImageView>
          <image>
              <fx:reference source="myImage"/>
          </image>
      </ImageView>

   Note that, since it is also possible to dereference a variable using the
   attribute variable resolution operator (discussed later in the
   `Attributes <#attributes>`__ section), fx:reference is generally only used when a reference value must be specified as an element, such as
   when adding the reference to a collection:

   .. code:: code

      <ArrayList>
          <fx:reference source="element1"/>
          <fx:reference source="element2"/>
          <fx:reference source="element3"/>
      </ArrayList>

   For most other cases, using an attribute is simpler and more concise.

   <fx:copy>
   ^^^^^^^^^

   The <fx:copy> element creates a copy of an existing element. Like
   <fx:reference>, it is used with the fx:id attribute or a script
   variable. The element's "source" attribute specifies the name of the
   object that will be copied. The source type must define a copy
   constructor that will be used to construct the copy from the source
   value.

   At the moment, no JavaFX platform classes provide such a copy
   constructor, so this element is provided primarily for use by
   application developers. This may change in a future release.

   <fx:root>
   ^^^^^^^^^

   The <fx:root> element creates a reference to a previously defined root
   element. It is only valid as the root node of an FXML document.
   <fx:root> is used primarily when creating custom controls that are
   backed by FXML markup. This is discussed in more detail in the
   `FXMLLoader <#fxmlloader>`__ section.

   Property Elements
   ~~~~~~~~~~~~~~~~~

   Elements whose tag names begin with a lowercase letter represent object
   properties. A property element may represent one of the following:

   -  A property setter
   -  A read-only list property
   -  A read-only map property

   Property Setters
   ^^^^^^^^^^^^^^^^

   If an element represents a property setter, the contents of the element
   (which must be either a text node or a nested class instance element)
   are passed as the value to the setter for the property.

   For example, the following FXML creates an instance of the Label class
   and sets the value of the label's "text" property to "Hello, World!":

   .. code:: code

      <?import javafx.scene.control.Label?>
      <Label>
          <text>Hello, World!</text>
      </Label>

   This produces the same result as the earlier example which used an
   attribute to set the "text" property:

   .. code:: code

      <?import javafx.scene.control.Label?>
      <Label text="Hello, World!"/>

   Property elements are generally used when the property value is a
   complex type that can't be represented using a simple string-based
   attribute value, or when the character length of the value is so long
   that specifying it as an attribute would have a negative impact on
   readability.

   Type Coercion
   '''''''''''''

   FXML uses "type coercion" to convert property values to the appropriate
   type as needed. Type coercion is required because the only data types
   supported by XML are elements, text, and attributes (whose values are
   also text). However, Java supports a number of different data types
   including built-in primitive value types as well as extensible reference
   types.

   The FXML loader uses the coerce() method of BeanAdapter to perform any
   required type conversions. This method is capable of performing basic
   primitive type conversions such as String to boolean or int to double,
   and will also convert String to Class or String to Enum. Additional
   conversions can be implemented by defining a static valueOf() method on
   the target type.

   Read-Only List Properties
   ^^^^^^^^^^^^^^^^^^^^^^^^^

   A read-only list property is a Bean property whose getter returns an
   instance of java.util.List and has no corresponding setter method. The
   contents of a read-only list element are automatically added to the list
   as they are processed.

   For example, the "children" property of javafx.scene.Group is a
   read-only list property representing the group's child nodes:

   .. code:: code

      <?import javafx.scene.*?>
      <?import javafx.scene.shape.*?>
      <Group xmlns:fx="http://javafx.com/fxml">
          <children>
              <Rectangle fx:id="rectangle" x="10" y="10" width="320" height="240"
                  fill="#ff0000"/>
              ...
          </children>
      </Group>

   As each sub-element of the <children> element is read, it is added to
   the list returned by Group#getChildren().

   Read-Only Map Properties
   ^^^^^^^^^^^^^^^^^^^^^^^^

   A read-only map property is a bean property whose getter returns an
   instance of java.util.Map and has no corresponding setter method. The
   attributes of a read-only map element are applied to the map when the
   closing tag is processed.

   The "properties" property of javafx.scene.Node is an example of a
   read-only map property. The following markup sets the "foo" and "bar"
   properties of a Label instance to "123" and "456", respectively:

   .. code:: code

      <?import javafx.scene.control.*?>
      <Button>
          <properties foo="123" bar="456"/>
      </Button>

   Note that a read-only property whose type is neither a List nor a Map
   will be treated as if it were a read-only map. The return value of the
   getter method will be wrapped in a BeanAdapter and can be used in the
   same way as any other read-only map.

   Default Properties
   ^^^^^^^^^^^^^^^^^^

   A class may define a "default property" using the @DefaultProperty
   annotation defined in the javafx.beans package. If present, the
   sub-element representing the default property can be omitted from the
   markup.

   For example, since javafx.scene.layout.Pane (the superclass of
   javafx.scene.layout.VBox) defines a default property of "children", a
   <children> element is not required; the loader will automatically add
   the sub-elements of the VBox to the container's "children" collection:

   .. code:: code

      <?import javafx.scene.*?>
      <?import javafx.scene.shape.*?>
      <VBox xmlns:fx="http://javafx.com/fxml">
          <Button text="Click Me!"/>
          ...
      </VBox>

   Note that default properties are not limited to collections. If an
   element's default property refers to a scalar value, any sub-element of
   that element will be set as the value of the property.

   For example, since javafx.scene.control.ScrollPane defines a default
   property of "content", a scroll pane containing a TextArea as its
   content can be specified as follows:

   .. code:: code

      <ScrollPane>
          <TextArea text="Once upon a time..."/>
      </ScrollPane>

   Taking advantage of default properties can significantly reduce the
   verbosity of FXML markup.

   Static Properties
   ~~~~~~~~~~~~~~~~~

   An element may also represent a "static" property (sometimes called an
   "attached property"). Static properties are properties that only make
   sense in a particular context. They are not intrinsic to the class to
   which they are applied, but are defined by another class (often, the
   parent container of a control).

   Static properties are prefixed with the name of class that defines them.
   For example, The following FXML invokes the static setter for GridPane's
   "rowIndex" and "columnIndex" properties:

   .. code:: code

      <GridPane>
          <children>
              <Label text="My Label">
                  <GridPane.rowIndex>0</GridPane.rowIndex>
             <GridPane.columnIndex>0</GridPane.columnIndex>
              </Label>
          </children>
      </TabPane>

   This translates roughly to the following in Java:

   .. code:: code

      GridPane gridPane = new GridPane();

      Label label = new Label();
      label.setText("My Label");

      GridPane.setRowIndex(label, 0);
      GridPane.setColumnIndex(label, 0);

      gridPane.getChildren().add(label);

   The calls to GridPane#setRowIndex() and GridPane#setColumnIndex()
   "attach" the index data to the Label instance. GridPane then uses these
   during layout to arrange its children appropriately. Other containers,
   including AnchorPane, BorderPane, and StackPane, define similar
   properties.

   As with instance properties, static property elements are generally used
   when the property value cannot be efficiently represented by an
   attribute value. Otherwise, static property attributes (discussed in a
   later section) will generally produce more concise and readable markup.

   Define Blocks
   ~~~~~~~~~~~~~

   The <fx:define> element is used to create objects that exist outside of
   the object hierarchy but may need to be referred to elsewhere.

   For example, when working with radio buttons, it is common to define a
   ToggleGroup that will manage the buttons' selection state. This group is
   not part of the scene graph itself, so should not be added to the
   buttons' parent. A define block can be used to create the button group
   without interfering with the overall structure of the document:

   .. code:: code

      <VBox>
          <fx:define>
              <ToggleGroup fx:id="myToggleGroup"/>
          </fx:define>
          <children>
              <RadioButton text="A" toggleGroup="$myToggleGroup"/>
              <RadioButton text="B" toggleGroup="$myToggleGroup"/>
              <RadioButton text="C" toggleGroup="$myToggleGroup"/>
          </children>
      </VBox>

   Elements in define blocks are usually assigned an ID that can be used to
   refer to the element's value later. IDs are discussed in more detail in
   later sections.

   /Attributes
   -----------

   An attribute in FXML may represent one of the following:

   -  A property of a class instance
   -  A "static" property
   -  An event handler

   Each are discussed in more detail in the following sections.

   Instance Properties
   ~~~~~~~~~~~~~~~~~~~

   Like property elements, attributes can also be used to configure the
   properties of a class instance. For example, the following markup
   creates a Button whose text reads "Click Me!":

   .. code:: code

      <?import javafx.scene.control.*?>
      <Button text="Click Me!"/>

   As with property elements, property attributes support type coercion.
   When the following markup is processed, the "x", "y", "width", and
   "height" values will be converted to doubles, and the "fill" value will
   be converted to a Color:

   .. code:: code

      <Rectangle fx:id="rectangle" x="10" y="10" width="320" height="240"
          fill="#ff0000"/>

   Unlike property elements, which are applied as they are processed,
   property attributes are not applied until the closing tag of their
   respective element is reached. This is done primarily to facilitate the
   case where an attribute value depends on some information that won't be
   available until after the element's content has been completely
   processed (for example, the selected index of a TabPane control, which
   can't be set until all of the tabs have been added).

   Another key difference between property attributes and property elements
   in FXML is that attributes support a number of "resolution operators"
   that extend their functionality. The following operators are supported
   and are discussed in more detail below:

   -  Location resolution
   -  Resource resolution
   -  Variable resolution

   Location Resolution
   ^^^^^^^^^^^^^^^^^^^

   As strings, XML attributes cannot natively represent typed location
   information such as a URL. However, it is often necessary to specify
   such locations in markup; for example, the source of an image resource.
   The location resolution operator (represented by an "@" prefix to the
   attribute value) is used to specify that an attribute value should be
   treated as a location relative to the current file rather than a simple
   string.

   For example, the following markup creates an ImageView and populates it
   with image data from my_image.png, which is assumed to be located at a
   path relative to the current FXML file:

   .. code:: code

      <ImageView>
          <image>
              <Image url="@my_image.png"/>
          </image>
      </ImageView>

   Since Image is an immutable object, a builder is required to construct
   it. Alternatively, if Image were to define a valueOf(URL) factory
   method, the image view could be populated as follows:

   .. code:: code

      <ImageView image="@my_image.png"/>

   The value of the "image" attribute would be converted to a URL by the
   FXML loader, then coerced to an Image using the valueOf() method.

   Note that whitespace values in the URL must be encoded; for example, to
   refer to a file named "My Image.png", the FXML document should contain
   the following:

   .. code:: code

      <Image url="@My%20Image.png"/>

   rather than:

   .. code:: code

      <Image url="@My Image.png"/>

   Resource Resolution
   ^^^^^^^^^^^^^^^^^^^

   In FXML, resource substitution can be performed at load time for
   localization purposes. When provided with an instance of
   java.util.ResourceBundle, the FXML loader will replace instances of
   resource names with their locale-specific values. Resource names are
   identified by a "%" prefix, as shown below:

   .. code:: code

      <Label text="%myText"/>

   If the loader is given a resource bundle defined as follows:

   .. code:: code

      myText = This is the text!

   the output of the FXML loader would be a Label instance containing the
   text "This is the text!".

   Variable Resolution
   ^^^^^^^^^^^^^^^^^^^

   An FXML document defines a variable namespace in which named elements
   and script variables may be uniquely identified. The variable resolution
   operator allows a caller to replace an attribute value with an instance
   of a named object before the corresponding setter method is invoked.
   Variable references are identified by a "$" prefix, as shown below:

   .. code:: code

      <fx:define>
          <ToggleGroup fx:id="myToggleGroup"/>
      </fx:define>
      ...
      <RadioButton text="A" toggleGroup="$myToggleGroup"/>
      <RadioButton text="B" toggleGroup="$myToggleGroup"/>
      <RadioButton text="C" toggleGroup="$myToggleGroup"/>

   Assigning an fx:id value to an element creates a variable in the
   document's namespace that can later be referred to by variable
   dereference attributes, such as the "toggleGroup" attribute shown above,
   or in script code, discussed in a later section. Additionally, if the
   object's type defines an "id" property, this value will also be passed
   to the objects setId() method.

   Escape Sequences
   ^^^^^^^^^^^^^^^^

   If the value of an attribute begins with one of the resource resolution
   prefixes, the character can be escaped by prepending it with a leading
   backslash ("\\") character. For example, the following markup creates a
   Label instance whose text reads "$10.00":

   .. code:: code

      <Label text="\$10.00"/>

   Expression Binding
   ^^^^^^^^^^^^^^^^^^

   Attribute variables as shown above are resolved once at load time. Later
   updates to the variables value are not automatically reflected in any
   properties to which the value was assigned. In many cases, this is
   sufficient; however, it is often convenient to "bind" a property value
   to a variable or expression such that changes to the variable are
   automatically propagated to the target property. Expression bindings can
   be used for this purpose.

   An expression binding also begins with the variable resolution operator,
   but is followed by a set of curly braces which wrap the expression
   value. For example, the following markup binds the value of a text
   input's "text" property to the "text" property of a Label instance:

   .. code:: code

      <TextField fx:id="textField"/>
      <Label text="${textField.text}"/>

   As the user types in the text input, the label's text content will be
   automatically updated.

   More complex expression are also supported. A list of supported
   constants and operators follows:

   Constants and Operators Table

   Constant / Operator

   Description

   | "string"
   | 'string'

   A string constant

   | true
   | false

   A boolean constant

   null

   A constant representing the null value

   | 50.0
   | 3e5
   | 42

   A numerical constant

   | -
   | (unary operator)

   Unary minus operator, applied on a number

   | !
   | (unary operator)

   Unary negation of a boolean

   | + -
   | \* / %

   Numerical binary operators

   && \|\|

   Boolean binary operators

   | > >=
   | < <=
   | == !=

   | Binary operators of comparison.
   | Both arguments must be of type Comparable

   .. _static-properties-1:

   Static Properties
   ~~~~~~~~~~~~~~~~~

   Attributes representing static properties are handled similarly to
   static property elements and use a similar syntax. For example, the
   earlier GridPane markup shown earlier to demonstrate static property
   elements could be rewritten as follows:

   .. code:: code

      <GridPane>
          <children>
              <Label text="My Label" GridPane.rowIndex="0" GridPane.columnIndex="0"/>
          </children>
      </TabPane>

   In addition to being more concise, static property attributes, like
   instance property attributes, support location, resource, and variable
   resolution operators, the only limitation being that it is not possible
   to create an expression binding to a static property.

   Event Handlers
   ~~~~~~~~~~~~~~

   Event handler attributes are a convenient means of attaching behaviors
   to document elements. Any class that defines a setOnEvent() method can
   be assigned an event handler in markup.

   FXML supports three types of event handler attributes: script event
   handlers, controller method event handlers and expressions. Each are
   discussed below.

   Script Event Handlers
   ^^^^^^^^^^^^^^^^^^^^^

   A script event handler is an event handler that executes script code
   when the event is fired, similar to event handlers in HTML. For example,
   the following script-based handler for the button's "onAction" event
   uses JavaScript to write the text "You clicked me!" to the console when
   the user presses the button:

   .. code:: code

      <?language javascript?>
      ...

      <VBox>
          <children>
              <Button text="Click Me!"
                  onAction="java.lang.System.out.println('You clicked me!');"/>
          </children>
      </VBox>

   Note the use of the language processing instruction at the beginning of
   the code snippet. This PI tells the FXML loader which scripting language
   should be used to execute the event handler. A page language must be
   specified whenever inline script is used in an FXML document, and can
   only be specified once per document. However, this does not apply to
   external scripts, which may be implemented using any number of supported
   scripting languages. Scripting is discussed in more detail in the next
   section.

   Note: to turn off automatic compilation of script code place the
   processing instruction <?compile false?> before the element that
   contains the script. To turn on compilation of script code again use the
   processing instruction <?compile true?> (or short: <?compile?>). The
   compile processing instruction can be used repeatedly to turn
   compilation of script code off and on.

   **Note:** The JavaScript script engine is disabled by default. If the
   JDK has a JavaScript script engine, it can be enabled using a system
   property javafx.allowjs=true.

   Controller Method Event Handlers
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   A controller method event handler is a method defined by a document's
   "controller". A controller is an object that is associated with the
   deserialized contents of an FXML document and is responsible for
   coordinating the behaviors of the objects (often user interface
   elements) defined by the document.

   A controller method event handler is specified by a leading hash symbol
   followed by the name of the handler method. For example:

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml">
          <children>
              <Button text="Click Me!" onAction="#handleButtonAction"/>
          </children>
      </VBox>

   Note the use of the fx:controller attribute on the root element. This
   attribute is used to associate a controller class with the document. If
   MyController is defined as follows:

   .. code:: code

      package com.foo;

      public class MyController {
          public void handleButtonAction(ActionEvent event) {
              System.out.println("You clicked me!");
          }
      }

   the handleButtonAction() will be called when the user presses the
   button, and the text "You clicked me!" will be written to the console.

   In general, a handler method should conform to the signature of a
   standard event handler; that is, it should take a single argument of a
   type that extends javafx.event.Event and should return void (similar to
   an event delegate in C#). The event argument often carries important and
   useful information about the nature of the event; however, it is
   optional and may be omitted if desired. So this is also a valid handler:

   .. code:: code

      package com.foo;

      public class MyController {
          public void handleButtonAction() {
              System.out.println("You clicked me!");
          }
      }

   Controllers are discussed in more detail in a later section.

   Event handlers from expressions
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Any expression that point to a `variable <#variable_resolution>`__ of javafx.event.EventHandler type can be used as an expression handler.

   Previous example using an expression handler:

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml">
          <children>
              <Button text="Click Me!" onAction="$controller.onActionHandler"/>
          </children>
      </VBox>

   With the controller that contains a field like this

   .. code:: code

      public class MyController {

          @FXML
          public EventHandler<ActionEvent> onActionHandler = new EventHandler<>() { ... }

          ...
      }

   Note that other kinds of expressions, like `binding expressions <#expression_binding>`__ are not supported in this context.

   Special handlers for collections and properties
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Collections and object properties cannot be listen to using setOnEvent()
   methods. For these reason, special handler methods need to be used.
   ObservableList, ObservableMap or ObservableSet uses a special onChange
   attribute that points to a handler method with a
   ListChangeListener.Change, MapChangeListener.Change or
   SetChangeListener.Change parameter, respectively.

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml">
          <children onChange="#handleChildrenChange"/>
      </VBox>

   where the handler method looks like this:

   .. code:: code

      package com.foo;

      import javafx.collections.ListChangeListener.Change;

      public class MyController {
          public void handleChildrenChange(ListChangeListener.Change c) {
              System.out.println("Children changed!");
          }
      }

   Similarly, the property handlers are methods that have the same
   parameters as changed method of ChangeListener :

   changed(ObservableValue<? extends T> observable, T oldValue, T newValue)

   A handler for parent property would look like this

   .. code:: code

      public class MyController {
          public void handleParentChange(ObservableValue value, Parent oldValue, Parent newValue) {
              System.out.println("Parent changed!");
          }
      }

   For convenience, the first parameter can be a subclass of
   ObservableValue, e.g. Property

   For registering to a property, a special on<propertyName>Change
   attribute must be used.

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml" onParentChange="#handleParentChange"/>

   Note that collections and properties do not currently support scripting
   handlers.

   /Scripting
   ----------

   The <fx:script> tag allows a caller to import scripting code into or
   embed script within a FXML file. Any JVM scripting language can be used,
   including JavaScript, Groovy, and Clojure, among others. Script code is
   often used to define event handlers directly in markup or in an
   associated source file, since event handlers can often be written more
   concisely in more loosely-typed scripting languages than they can in a
   statically-typed language such as Java.

   **Note:** The JavaScript script engine is disabled by default. If the
   JDK has a JavaScript script engine, it can be enabled using a system
   property javafx.allowjs=true.

   Scripts are compiled by default, when they are first loaded, if the
   ScriptEngine implements the javax.script.Compilable interface. If
   compilation fails, the FXMLLoader will fall back to interpreted mode.

   Note: to turn off automatic compilation of script code place the
   processing instruction <?compile false?> before the script element. To
   turn on compilation of script code again use the processing instruction
   <?compile true?> (or short: <?compile?>). The compile processing
   instruction can be used repeatedly to turn compilation of script code
   off and on.

   The following example markup defines a function called
   handleButtonAction() that is called by the action handler attached to
   the Button element:

   .. code:: code

      <?language javascript?>

      <?import javafx.scene.control.*?>
      <?import javafx.scene.layout.*?>

      <VBox xmlns:fx="http://javafx.com/fxml">
          <fx:script>

          function handleButtonAction(event) {
             java.lang.System.out.println('You clicked me!');
          }
          </fx:script>

          <children>
              <Button text="Click Me!" onAction="handleButtonAction(event);"/>
          </children>
      </VBox>

   Clicking the button triggers the event handler, which invokes the
   function, producing output identical to the previous examples.

   Script code may also be defined in external files. The previous example
   could be split into an FXML file and a JavaScript source file with no
   difference in functionality:

   .. container:: caption

      example.fxml

   .. code:: code

      <?language javascript?>

      <?import javafx.scene.control.*?>
      <?import javafx.scene.layout.*?>

      <VBox xmlns:fx="http://javafx.com/fxml">
          <fx:script source="example.js" charset="cp1252"/>

          <children>
              <Button text="Click Me!" onAction="handleButtonAction(event);"/>
          </children>
      </VBox>

   .. container:: caption

      example.js

   .. code:: code


      function handleButtonAction(event) {
         java.lang.System.out.println('You clicked me!');
      }

   It is often preferable to separate code from markup in this way, since
   many text editors support syntax highlighting for the various scripting
   languages supported by the JVM. It can also help improve readability of
   the source code and markup.

   Note that script blocks are not limited to defining event handler
   functions. Script code is executed as it is processed, so it can also be
   used to dynamically configure the structure of the resulting output. As
   a simple example, the following FXML includes a script block that
   defines a variable named "labelText". The value of this variable is used
   to populate the text property of a Label instance:

   .. code:: code

      <fx:script>
      var myText = "This is the text of my label.";
      </fx:script>

      ...

      <Label text="$myText"/>

   **Warning:** As of JavaFX 8, importClass() javascript function is no
   longer supported. You have to use fully qualified names as in the
   example above or load a nashorn compatibility script.

   .. code:: code

      load("nashorn:mozilla_compat.js");
      importClass(java.lang.System);

      function handleButtonAction(event) {
         System.out.println('You clicked me!');
      }

   /Controllers
   ------------

   While it can be convenient to write simple event handlers in script,
   either inline or defined in external files, it is often preferable to
   define more complex application logic in a compiled, strongly-typed
   language such as Java. As discussed earlier, the fx:controller attribute
   allows a caller to associate a "controller" class with an FXML document.
   A controller is a compiled class that implements the "code behind" the
   object hierarchy defined by the document.

   As shown earlier, controllers are often used to implement event handlers
   for user interface elements defined in markup:

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml">
          <children>
              <Button text="Click Me!" onAction="#handleButtonAction"/>
          </children>
      </VBox>

   .. code:: code

      package com.foo;

      public class MyController {
          public void handleButtonAction(ActionEvent event) {
              System.out.println("You clicked me!");
          }
      }

   In many cases, it is sufficient to simply declare event handlers in this
   manner. However, when more control over the behavior of the controller
   and the elements it manages is required, the controller can define an
   initialize() method, which will be called once on an implementing
   controller when the contents of its associated document have been
   completely loaded:

   .. code:: code

      public void initialize();

   This allows the implementing class to perform any necessary
   post-processing on the content. It also provides the controller with
   access to the resources that were used to load the document and the
   location that was used to resolve relative paths within the document
   (commonly equivalent to the location of the document itself).

   For example, the following code defines an initialize() method that
   attaches an action handler to a button in code rather than via an event
   handler attribute, as was done in the previous example. The button
   instance variable is injected by the loader as the document is read. The
   resulting application behavior is identical:

   .. code:: code

      <VBox fx:controller="com.foo.MyController"
          xmlns:fx="http://javafx.com/fxml">
          <children>
              <Button fx:id="button" text="Click Me!"/>
          </children>
      </VBox>

   .. code:: code

      package com.foo;

      public class MyController implements Initializable {
          public Button button;

          @Override
          public void initialize(URL location, Resources resources)
              button.setOnAction(new EventHandler<ActionEvent>() {
                  @Override
                  public void handle(ActionEvent event) {
                      System.out.println("You clicked me!");
                  }
              });
          }
      }

   @FXML
   ~~~~~

   Note that, in the previous examples, the controller member fields and
   event handler methods were declared as public so they can be set or
   invoked by the loader. In practice, this is not often an issue, since a
   controller is generally only visible to the FXML loader that creates it.
   However, for developers who prefer more restricted visibility for
   controller fields or handler methods, the javafx.fxml.FXML annotation
   can be used. This annotation marks a protected or private class member
   as accessible to FXML. If the class being annotated is in a named
   module, the module containing that class must open the containing
   package to at least the javafx.fxml module.

   For example, the controllers from the previous examples could be
   rewritten as follows:

   .. code:: code

      package com.foo;

      public class MyController {
          @FXML
          private void handleButtonAction(ActionEvent event) {
              System.out.println("You clicked me!");
          }
      }

   .. code:: code

      package com.foo;

      public class MyController implements Initializable {
          @FXML private Button button;

          @FXML
          protected void initialize()
              button.setOnAction(new EventHandler<ActionEvent>() {
                  @Override
                  public void handle(ActionEvent event) {
                      System.out.println("You clicked me!");
                  }
              });
          }
      }

   In the first version, the handleButtonAction() is tagged with @FXML to
   allow markup defined in the controller's document to invoke it. In the
   second example, the button field is annotated to allow the loader to set
   its value. The initialize() method is similarly annotated.

   Nested Controllers
   ~~~~~~~~~~~~~~~~~~

   Controller instances for nested FXML documents loaded via the
   <fx:include> element are mapped directly to member fields of the
   including controller. This allows a developer to easily access
   functionality defined by an include (such as a dialog window presented
   by an application's main window controller). For example, given the
   following code:

   .. container:: caption

      main_window_content.fxml

   .. code:: code

      <VBox fx:controller="com.foo.MainController">
         <fx:define>
            <fx:include fx:id="dialog" source="dialog.fxml"/>
         </fx:define>
         ...
      </VBox>

   .. container:: caption

      MainController.java

   .. code:: code

      public class MainController extends Controller {
          @FXML private Window dialog;
          @FXML private DialogController dialogController;

          ...
      }

   when the controller's initialize() method is called, the dialog field
   will contain the root element loaded from the "dialog.fxml" include, and
   the dialogController field will contain the include's controller. The
   main controller can then invoke methods on the included controller, to
   populate and show the dialog, for example. Note that as the content of
   the file referenced by fx:include otherwise would become part of the
   scene graph spanned from main_window_content.fxml, it is necessary to
   wrap fx:include by fx:define to separate the scene graphs of both
   windows.

   /FXMLLoader
   -----------

   The FXMLLoader class is responsible for actually loading an FXML source
   file and returning the resulting object graph. For example, the
   following code loads an FXML file from a location on the classpath
   relative to the loading class and localizes it with a resource bundle
   named "com.foo.example". The type of the root element is assumed to be a
   subclass of javafx.scene.layout.Pane, and the document is assumed to
   define a controller of type MyController:

   .. code:: code

      URL location = getClass().getResource("example.fxml");
      ResourceBundle resources = ResourceBundle.getBundle("com.foo.example");
      FXMLLoader fxmlLoader = new FXMLLoader(location, resources);

      Pane root = (Pane)fxmlLoader.load();
      MyController controller = (MyController)fxmlLoader.getController();

   Note that the output of an FXMLLoader#load() operation is an instance
   hierarchy that reflects the actual named classes in the document, not
   org.w3c.dom nodes representing those classes. Internally, FXMLLoader
   uses the javax.xml.stream API (also known as the *Streaming API for
   XML*, or *StAX*) to load an FXML document. StAX is an extremely
   efficient event-based XML parsing API that is conceptually similar to
   its W3C predecessor, SAX. It allows an FXML document to be processed in
   a single pass, rather than loaded into an intermediate DOM structure and
   then post-processed.

   Custom Components
   ~~~~~~~~~~~~~~~~~

   The setRoot() and setController() methods of FXMLLoader allow a caller
   to inject document root and controller values, respectively, into the
   document namespace, rather than delegating creation of these values to
   FXMLLoader itself. This allows a developer to easily create reusable
   controls that are internally implemented using markup, but (from an API
   perspective) appear identically to controls implemented
   programmatically.

   For example, the following markup defines the structure of a simple
   custom control containing a TextField and a Button instance. The root
   container is defined as an instance of javafx.scene.layout.VBox:

   .. code:: code

      <?import javafx.scene.*?>
      <?import javafx.scene.control.*?>
      <?import javafx.scene.layout.*?>

      <fx:root type="javafx.scene.layout.VBox" xmlns:fx="http://javafx.com/fxml">
          <TextField fx:id="textField"/>
          <Button text="Click Me" onAction="#doSomething"/>
      </fx:root>

   As mentioned earlier, the <fx:root> tag creates a reference to a
   previously defined root element. The value of this element is obtained
   by calling the getRoot() method of FXMLLoader. Prior to calling load(),
   the caller must specify this value via a call to setRoot(). The caller
   may similarly provide a value for the document's controller by calling
   setController(), which sets the value that will be used as the
   document's controller when the document is read. These two methods are
   commonly used together when creating custom FXML-based components.

   In the following example, the CustomControl class extends VBox (the type
   declared by the <fx:root> element), and sets itself as both the root and
   controller of the FXML document in its constructor. When the document is
   loaded, the contents of CustomControl will be populated with the
   contents of the previous FXML document:

   .. code:: code

      package fxml;

      import java.io.IOException;

      import javafx.beans.property.StringProperty;
      import javafx.fxml.FXML;
      import javafx.fxml.FXMLLoader;
      import javafx.scene.control.TextField;
      import javafx.scene.layout.VBox;

      public class CustomControl extends VBox {
          @FXML private TextField textField;

          public CustomControl() {
              FXMLLoader fxmlLoader = new FXMLLoader(getClass().getResource("custom_control.fxml"));
              fxmlLoader.setRoot(this);
              fxmlLoader.setController(this);

              try {
                  fxmlLoader.load();
              } catch (IOException exception) {
                  throw new RuntimeException(exception);
              }
          }

          public String getText() {
              return textProperty().get();
          }

          public void setText(String value) {
              textProperty().set(value);
          }

          public StringProperty textProperty() {
              return textField.textProperty();
          }

          @FXML
          protected void doSomething() {
              System.out.println("The button was clicked!");
          }
      }

   Now, callers can use instances of this control in code or in markup,
   just like any other control; e.g.:

   .. container:: caption

      Java

   .. code:: code

      HBox hbox = new HBox();
      CustomControl customControl = new CustomControl();
      customControl.setText("Hello World!");
      hbox.getChildren().add(customControl);

   .. container:: caption

      FXML

   .. code:: code

      <HBox>
          <CustomControl text="Hello World!"/>
      </HBox>

   Deploying an Application as a Module
   ------------------------------------

   If FXMLLoader is used to load types in a named module, the application
   must ensure that all types that are referenced in the FXML files,
   including the controller class and any custom Node classes, are
   reflectively accessible to the javafx.fxml module. A type is
   reflectively accessible if the module opens the containing package to at
   least the javafx.fxml module.

   For example, if com.foo.MyController is in the foo.app module, the
   module-info.java might look like this:

   ::

      module foo.app {
          opens com.foo to javafx.fxml;
      }

   Alternatively, a type is reflectively accessible if the module exports
   the containing package unconditionally.

   --------------

   `Report a bug or suggest an enhancement <http://bugreport.java.com/bugreport/>`__
   Copyright © 2008, 2024, Oracle and/or its affiliates. All rights
   reserved.


/🟡 PART: JavaFX Documentation Project
======================================
- [JavaFX Documentation Project](https://fxdocs.github.io/docs/html5/)

.. container::
   :name: header

   .. rubric:: JavaFX Documentation Project
      :name: javafx-documentation-project

   .. container:: details

      Published 2022-06-26
      version unspecified

   .. container:: toc2
      :name: toc

      .. container::
         :name: toctitle

         Table of Contents

      -  `1. Introduction <#_introduction>`__

         -  `1.1. Contributors <#_contributors>`__
         -  `1.2. Contributing <#_contributing>`__
         -  `1.3. License <#_license>`__

      -  `2. Scene Graph <#_scene_graph>`__

         -  `2.1. Overview <#_overview>`__
         -  `2.2. Transformations <#_transformations>`__
         -  `2.3. Event Handling <#_event_handling>`__
         -  `2.4. Timing <#_timing>`__

      -  `3. UI Controls <#_ui_controls>`__

         -  `3.1. ChoiceBox <#_choicebox>`__
         -  `3.2. ComboBox <#_combobox>`__
         -  `3.3. ListView <#_listview>`__
         -  `3.4. TableView <#_tableview>`__
         -  `3.5. ImageView <#_imageview>`__
         -  `3.6. LineChart <#_linechart>`__
         -  `3.7. Pagination <#_pagination>`__

      -  `4. Layout <#_layout>`__

         -  `4.1. VBox and HBox <#_vbox_and_hbox>`__
         -  `4.2. StackPane <#_stackpane>`__
         -  `4.3. Absolute Positioning with Pane <#_absolute_positioning_with_pane>`__
         -  `4.4. Clipping <#_clipping>`__
         -  `4.5. GridPane <#_gridpane>`__
         -  `4.6. GridPane Spanning <#_gridpane_spanning>`__
         -  `4.7. GridPane ColumnConstraints and RowConstraints <#_gridpane_columnconstraints_and_rowconstraints>`__
         -  `4.8. AnchorPane <#_anchorpane>`__
         -  `4.9. TilePane <#_tilepane>`__
         -  `4.10. TitledPane <#_titledpane>`__

      -  `5. CSS <#_css>`__
      -  `6. Performance <#_performance>`__
      -  `7. Application Structure <#_application_structure>`__

         -  `7.1. The MVVM Pattern <#_the_mvvm_pattern>`__
         -  `7.2. Model Change with MVVM <#_model_change_with_mvvm>`__
         -  `7.3. The Dialog Class <#_the_dialog_class>`__

      -  `8. Best Practices <#_best_practices>`__

         -  `8.1. Styleable Properties <#_styleable_properties>`__
         -  `8.2. Tasks <#_tasks>`__
         -  `8.3. Avoid Nulls in ComboBoxes <#_avoid_nulls_in_comboboxes>`__
         -  `8.4. Writing Javadoc for JavaFX Properties <#_writing_javadoc_for_javafx_properties>`__
         -  `8.5. Ignoring Warnings for Null Select Binding Expressions <#_ignoring_warnings_for_null_select_binding_expressions>`__
         -  `8.6. POJO Binding <#_pojo_binding>`__

.. container::
   :name: content

   .. container:: sect1

      .. rubric:: 1. Introduction
         :name: _introduction

      .. container:: sectionbody

         .. container:: paragraph

            The JavaFX Documentation Project aims to pull together
            useful information for JavaFX developers from all over the
            web. The project is `open
            source <http://www.github.com/FXDocs/docs>`__ and encourages
            community participation to ensure that the documentation is
            as highly polished and useful as possible.

         .. container:: sect2

            .. rubric:: 1.1. Contributors
               :name: _contributors

            .. container:: paragraph

               This project was initiated by `Jonathan
               Giles <http://jonathangiles.net>`__, but anyone can
               contribute. Any questions, concerns, or feedback should
               be in the first instance be directed to `Jonathan via
               email <mailto:jonathan@jonathangiles.net>`__.

            .. container:: paragraph

               This project would not be possible without the
               contributors who work hard on the content contained
               within this documentation. The authors of this document
               are:

            .. container:: ulist

               -  Abhinay Agarwal

               -  `Almas Baimagambetov <https://almasb.github.io/>`__

               -  `Carl Walker <http://bekwam.blogspot.com/>`__

               -  `Christoph Nahr <http://kynosarges.org/>`__

               -  `Jonathan Giles <http://jonathangiles.net>`__

               -  `Gerrit
                  Grunwald <https://harmoniccode.blogspot.com/>`__

         .. container:: sect2

            .. rubric:: 1.2. Contributing
               :name: _contributing

            .. container:: paragraph

               Contributing to this project is easy - fork the
               `GitHub <http://www.github.com/FXDocs/docs>`__ repo, edit
               the relevant files, and create a pull request! Once
               merged, your content will form a part of the
               documentation and you’ll have the unending appreciation
               of the entire community!

            .. container:: paragraph

               The JavaFX Documentation Project uses AsciiDoc as the
               syntax of choice for writing the documentation. The
               `AsciiDoc Syntax Quick
               Reference <http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/>`__
               guide is a great resource for those learning how to write
               AsciiDoc.

            .. container:: paragraph

               Authors are encouraged to add their name to the
               contributors list in the previous section.

         .. container:: sect2

            .. rubric:: 1.3. License
               :name: _license

            .. container:: imageblock

               .. container:: content

                  |cc by nc nd|

            .. container:: paragraph

               This work is licensed under a `Creative Commons
               Attribution-NonCommercial-NoDerivatives 4.0 International
               License <http://creativecommons.org/licenses/by-nc-nd/4.0/>`__.

   .. container:: sect1

      .. rubric:: 2. Scene Graph
         :name: _scene_graph

      .. container:: sectionbody

         .. container:: sect2

            .. rubric:: 2.1. Overview
               :name: _overview

            .. container:: paragraph

               A scene graph is a tree data structure that arranges (and
               groups) graphical objects for easier logical
               representation. It also allows the graphics engine to
               render the objects in the most efficient way by fully or
               partially skipping objects which will not be seen in the
               final image. The following figure shows an example of the
               JavaFX scene graph architecture.

            .. container:: imageblock

               .. container:: content

                  |scene graph|

            .. container:: paragraph

               At the very top of the architecture there is a ``Stage``.
               A stage is a JavaFX representation of a native OS window.
               At any given time a stage can have a single ``Scene``
               attached to it. A scene is a container for the JavaFX
               scene graph.

            .. container:: paragraph

               All elements in the JavaFX scene graph are represented as
               ``Node`` objects. There are three types of nodes: root,
               branch and leaf. The root node is the only node that does
               not have a parent and is directly contained by a scene,
               which can be seen in the figure above. The difference
               between a branch and a leaf is that a leaf node does not
               have children.

            .. container:: paragraph

               In the scene graph, many properties of a parent node are
               shared by children nodes. For instance, a transformation
               or an event applied to a parent node will also be applied
               recursively to its children. As such, a complex hierarchy
               of nodes can be viewed as a single node to simplify the
               programming model. We will explore transformations and
               events in later sections.

            .. container:: paragraph

               An example of a "Hello World" scene graph can be seen in
               the figure below.

            .. container:: imageblock

               .. container:: content

                  |specific scene graph|

            .. container:: paragraph

               One possible implementation that will produce a scene
               graph matching the figure above is as follows.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class HelloApp extends Application {

                         private Parent createContent() {
                             return new StackPane(new Text("Hello World"));
                         }

                         @Override
                         public void start(Stage stage) throws Exception {
                             stage.setScene(new Scene(createContent(), 300, 300));
                             stage.show();
                         }

                         public static void main(String[] args) {
                             launch(args);
                         }
                     }

            .. container:: paragraph

               The result of running the code is seen in the next
               figure.

            .. container:: imageblock

               .. container:: content

                  |hello world|

            .. container:: paragraph

               Important notes:

            .. container:: ulist

               -  A node can have the maximum of 1 parent.

               -  A node in the "active" (attached to a currently
                  visible scene) scene graph can only be modified from
                  the JavaFX Application Thread.

         .. container:: sect2

            .. rubric:: 2.2. Transformations
               :name: _transformations

            .. container:: paragraph

               We will use the following app as an example to
               demonstrate the 3 most common transformations.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class TransformApp extends Application {

                         private Parent createContent() {
                             Rectangle box = new Rectangle(100, 50, Color.BLUE);

                             transform(box);

                             return new Pane(box);
                         }

                         private void transform(Rectangle box) {
                             // we will apply transformations here
                         }

                         @Override
                         public void start(Stage stage) throws Exception {
                             stage.setScene(new Scene(createContent(), 300, 300, Color.GRAY));
                             stage.show();
                         }

                         public static void main(String[] args) {
                             launch(args);
                         }
                     }

            .. container:: paragraph

               Running the application will result in the following
               image.

            .. container:: imageblock

               .. container:: content

                  |transform base|

            .. container:: paragraph

               In JavaFX, a simple transformation can happen in one of
               the 3 axes: X, Y or Z. The example application is in 2D,
               so we will only consider X and Y axes.

            .. container:: sect3

               .. rubric:: 2.2.1. Translate
                  :name: _translate

               .. container:: paragraph

                  In JavaFX and computer graphics, ``translate`` means
                  move. We can translate our box by 100 pixels in X axis
                  and 200 pixels in Y axis.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        private void transform(Rectangle box) {
                            box.setTranslateX(100);
                            box.setTranslateY(200);
                        }

               .. container:: imageblock

                  .. container:: content

                     |transform translate|

            .. container:: sect3

               .. rubric:: 2.2.2. Scale
                  :name: _scale

               .. container:: paragraph

                  You can apply scaling to make a node larger or
                  smaller. Scaling value is a ratio. By default, a node
                  has a scaling value of 1 (100%) in each axis. We can
                  enlarge our box by applying scaling of 1.5 in X and Y
                  axes.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        private void transform(Rectangle box) {
                            // previous code

                            box.setScaleX(1.5);
                            box.setScaleY(1.5);
                        }

               .. container:: imageblock

                  .. container:: content

                     |transform scale|

            .. container:: sect3

               .. rubric:: 2.2.3. Rotate
                  :name: _rotate

               .. container:: paragraph

                  A node’s rotation determines the angle at which the
                  node is rendered. In 2D the only sensible rotation
                  axis is the Z axis. Let’s rotate the box by 30
                  degrees.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        private void transform(Rectangle box) {
                            // previous code

                            box.setRotate(30);
                        }

               .. container:: imageblock

                  .. container:: content

                     |transform rotate|

         .. container:: sect2

            .. rubric:: 2.3. Event Handling
               :name: _event_handling

            .. container:: paragraph

               An event notifies that something important has taken
               place. Events are typically the "primitive" of an event
               system (aka event bus). Generally, an event system has
               the following 3 responsibilities:

            .. container:: ulist

               -  ``fire`` (trigger) an event,

               -  notify ``listeners`` (interested parties) about the
                  event and

               -  ``handle`` (process) the event.

            .. container:: paragraph

               The event notification mechanism is done by the JavaFX
               platform automatically. Hence, we will only consider how
               to fire events, listen for events and how to handle them.

            .. container:: paragraph

               First, let’s create a custom event.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class UserEvent extends Event {

                         public static final EventType<UserEvent> ANY = new EventType<>(Event.ANY, "ANY");

                         public static final EventType<UserEvent> LOGIN_SUCCEEDED = new EventType<>(ANY, "LOGIN_SUCCEEDED");

                         public static final EventType<UserEvent> LOGIN_FAILED = new EventType<>(ANY, "LOGIN_FAILED");

                         public UserEvent(EventType<? extends Event> eventType) {
                             super(eventType);
                         }

                         // any other fields of importance, e.g. data, timestamp
                     }

            .. container:: paragraph

               Since event types are fixed, they are usually created
               within the same source file as the event. We can see that
               there are 2 specific types of events: ``LOGIN_SUCCEEDED``
               and ``LOGIN_FAILED``. We can listen for such specific
               types of events:

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Node node = ...
                     node.addEventHandler(UserEvent.LOGIN_SUCCEEDED, event -> {
                         // handle event
                     });

            .. container:: paragraph

               Alternatively, we can handle any ``UserEvent``:

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Node node = ...
                     node.addEventHandler(UserEvent.ANY, event -> {
                         // handle event
                     });

            .. container:: paragraph

               Finally, we are able to construct and fire our own
               events:

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     UserEvent event = new UserEvent(UserEvent.LOGIN_SUCCEEDED);
                     Node node = ...
                     node.fireEvent(event);

            .. container:: paragraph

               For example, ``LOGIN_SUCCEEDED`` or ``LOGIN_FAILED``
               could be fired when a user attempts to log in to an app.
               Depending on the login result we can allow the user
               access the app or lock him out of the app. Whilst the
               same functionality can be achieved with a simple ``if``
               statement, there is one significant advantage of an event
               system. Event systems were designed to enable
               communication between various modules (sub-systems) in an
               application without tightly coupling them. As such, a
               sound might be played by an audio system when the user
               logs in. Thus, maintaining all audio related code in its
               own module. However, we will not delve deeper into
               architectural styles.

            .. container:: sect3

               .. rubric:: 2.3.1. Input Events
                  :name: _input_events

               .. container:: paragraph

                  Key and mouse events are the most common types of
                  events used in JavaFX. Each ``Node`` provides
                  so-called "convenience methods" for handling these
                  events. For instance, we can run some code when a
                  button is pressed:

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Button button = ...
                        button.setOnAction(event -> {
                            // button was pressed
                        });

               .. container:: paragraph

                  For more flexibility we can also use the following:

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Button button = ...
                        button.setOnMouseEntered(e -> ...);
                        button.setOnMouseExited(e -> ...);
                        button.setOnMousePressed(e -> ...);
                        button.setOnMouseReleased(e -> ...);

               .. container:: paragraph

                  The object ``e`` above is of type ``MouseEvent`` and
                  can be queried to obtain various information about the
                  event, e.g. ``x`` and ``y`` positions, number of
                  clicks, etc. Finally, we can do the same with keys:

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Button button = ...
                        button.setOnKeyPressed(e -> ...);
                        button.setOnKeyReleased(e -> ...);

               .. container:: paragraph

                  The object ``e`` here is of type ``KeyEvent`` and it
                  carries information about the key code, which can then
                  be mapped to a real physical key on the keyboard.

         .. container:: sect2

            .. rubric:: 2.4. Timing
               :name: _timing

            .. container:: paragraph

               It is important to understand the timing difference
               between the creation of JavaFX UI controls and the
               display of the controls. When creating the UI
               controls — either through direct API object creation or
               through FXML — you may be missing certain screen geometry
               values such as the dimensions of a window. That is
               available later, at the instant when the screen is shown
               to the user. That showing event, called OnShown, is the
               time at which a window has been allocated and the final
               layout computations completed.

            .. container:: paragraph

               To demonstrate this, consider the following program which
               displays the screen dimensions while the UI controls are
               being created and the screen dimensions when the screen
               is shown. The following screenshot shows the running of
               the program. When the UI controls are being created (new
               VBox(), new Scene(), primaryStage.setScene()), there are
               no actual window height and width values available as
               evidenced by the undefined "NaN" values.

            .. container:: imageblock

               .. container:: content

                  |scenegraph startvshown|

            .. container:: paragraph

               However, the values for width and height are available
               once the window is shown. The program registers an event
               handler for the OnShown event and prepares the same
               output.

            .. container:: paragraph

               The following is the Java class of the demonstration
               program.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class StartVsShownJavaFXApp extends Application {

                         private DoubleProperty startX = new SimpleDoubleProperty();
                         private DoubleProperty startY = new SimpleDoubleProperty();
                         private DoubleProperty shownX = new SimpleDoubleProperty();
                         private DoubleProperty shownY = new SimpleDoubleProperty();

                         @Override
                         public void start(Stage primaryStage) throws Exception {

                             Label startLabel = new Label("Start Dimensions");
                             TextField startTF = new TextField();
                             startTF.textProperty().bind(
                                     Bindings.format("(%.1f, %.1f)", startX, startY)
                             );

                             Label shownLabel = new Label("Shown Dimensions");
                             TextField shownTF = new TextField();
                             shownTF.textProperty().bind(
                                     Bindings.format("(%.1f, %.1f)", shownX, shownY)
                             );

                             GridPane gp = new GridPane();
                             gp.add( startLabel, 0, 0 );
                             gp.add( startTF, 1, 0 );
                             gp.add( shownLabel, 0, 1 );
                             gp.add( shownTF, 1, 1 );
                             gp.setHgap(10);
                             gp.setVgap(10);

                             HBox hbox = new HBox(gp);
                             hbox.setAlignment(CENTER);

                             VBox vbox = new VBox(hbox);
                             vbox.setAlignment(CENTER);

                             Scene scene = new Scene( vbox, 480, 320 );

                             primaryStage.setScene( scene );

                             // before show()...I just set this to 480x320, right?
                             startX.set( primaryStage.getWidth() );
                             startY.set( primaryStage.getHeight() );

                             primaryStage.setOnShown( (evt) -> {
                                 shownX.set( primaryStage.getWidth() );
                                 shownY.set( primaryStage.getHeight() );  // all available now
                             });

                             primaryStage.setTitle("Start Vs. Shown");
                             primaryStage.show();
                         }

                         public static void main(String[] args) {
                             launch(args);
                         }
                     }

            .. container:: paragraph

               Sometimes, you’ll know the screen dimensions in advance
               and can use those values at any point in the JavaFX
               program. This includes before the OnShown event. However,
               if your initialization sequence contains logic that needs
               these values, you’ll need to work with the OnShown event.
               A use case might be working with the last saved
               dimensions or dimensions based on program input.

   .. container:: sect1

      .. rubric:: 3. UI Controls
         :name: _ui_controls

      .. container:: sectionbody

         .. container:: sect2

            .. rubric:: 3.1. ChoiceBox
               :name: _choicebox

            .. container:: paragraph

               This article demonstrates the ``ChoiceBox``. The
               ``ChoiceBox`` control is a list of values from which the
               user makes a selection. In this particular
               implementation, there is an empty value which makes the
               selection optional.

            .. container:: paragraph

               The following screenshot shows ``ChoiceBox`` app. A
               selection "Furniture" is made and the Save ``Button`` is
               pressed. The Save ``Button`` call invokes a println()
               which prints out the object.

            .. container:: imageblock

               .. container:: content

                  |choicebox|

            .. container:: paragraph

               The program puts a ``Label``, a ``ChoiceBox``, and a
               ``Button`` into an HBox. An action is set on the Save
               ``Button`` which prints out the value.

            .. container:: paragraph

               The simplest usage of the ``ChoiceBox`` is to fill it
               with Strings. This ``ChoiceBox`` in this article is built
               on a JavaFX class called ``Pair``. ``Pair`` is a general
               container for any key/value pair and can be used in place
               of a domain or other special-purpose object. Strings
               should only be used if they can be used without
               manipulation or decoded consistently.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class ChoicesApp extends Application {

                         private final ChoiceBox<Pair<String,String>> assetClass = new ChoiceBox<>();

                         @Override
                         public void start(Stage primaryStage) throws Exception {

                             Label label = new Label("Asset Class:");
                             assetClass.setPrefWidth(200);
                             Button saveButton = new Button("Save");

                             HBox hbox = new HBox(
                                     label,
                                     assetClass,
                                     saveButton);
                             hbox.setSpacing( 10.0d );
                             hbox.setAlignment(Pos.CENTER );
                             hbox.setPadding( new Insets(40) );

                             Scene scene = new Scene(hbox);

                             initChoice();

                             saveButton.setOnAction(
                                     (evt) -> System.out.println("saving " + assetClass.getValue())
                             );

                             primaryStage.setTitle("ChoicesApp");
                             primaryStage.setScene( scene );
                             primaryStage.show();

                         }

            .. container:: sect3

               .. rubric:: 3.1.1. StringConverter
                  :name: _stringconverter

               .. container:: paragraph

                  When using a complex object to back a ``ChoiceBox``, a
                  ``StringConverter`` is needed. This object serializes
                  a String to and from the ``ChoiceBox``. For this
                  program, only the toString() needs to be coded which
                  replaces the default toString() of the ``Pair``
                  object. (Both toString and fromString will need an
                  implementation in order to compile.)

               .. container:: paragraph

                  An empty object EMPTY_PAIR is used to prevent
                  NullPointerExceptions. The returned value from
                  assetClass().getValue() can be accessed and compared
                  consistently without adding special null handling
                  logic.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private final static Pair<String, String> EMPTY_PAIR = new Pair<>("", "");

                            private void initChoice() {

                                List<Pair<String,String>> assetClasses = new ArrayList<>();
                                assetClasses.add( new Pair("Equipment", "20000"));
                                assetClasses.add( new Pair("Furniture", "21000"));
                                assetClasses.add( new Pair("Investment", "22000"));

                                assetClass.setConverter( new StringConverter<Pair<String,String>>() {
                                    @Override
                                    public String toString(Pair<String, String> pair) {
                                        return pair.getKey();
                                    }

                                    @Override
                                    public Pair<String, String> fromString(String string) {
                                        return null;
                                    }
                                });

                                assetClass.getItems().add( EMPTY_PAIR );
                                assetClass.getItems().addAll( assetClasses );
                                assetClass.setValue( EMPTY_PAIR );

                            }

               .. container:: paragraph

                  The ChoiceBox is used to select from a list of values.
                  When the list of values is a complex type, provide a
                  StringFormatter to serialize a list object into
                  something presentable. If possible, use an empty
                  object (rather than a null) to support optional
                  values.

               .. container:: sect4

                  .. rubric:: Complete Code
                     :name: _complete_code

                  .. container:: paragraph

                     The code can be tested in a single .java file.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           public class ChoicesApp extends Application {

                               private final ChoiceBox<Pair<String,String>> assetClass = new ChoiceBox<>();

                               private final static Pair<String, String> EMPTY_PAIR = new Pair<>("", "");

                               @Override
                               public void start(Stage primaryStage) throws Exception {

                                   Label label = new Label("Asset Class:");
                                   assetClass.setPrefWidth(200);
                                   Button saveButton = new Button("Save");

                                   HBox hbox = new HBox(
                                           label,
                                           assetClass,
                                           saveButton);
                                   hbox.setSpacing( 10.0d );
                                   hbox.setAlignment(Pos.CENTER );
                                   hbox.setPadding( new Insets(40) );

                                   Scene scene = new Scene(hbox);

                                   initChoice();

                                   saveButton.setOnAction(
                                           (evt) -> System.out.println("saving " + assetClass.getValue())
                                   );

                                   primaryStage.setTitle("ChoicesApp");
                                   primaryStage.setScene( scene );
                                   primaryStage.show();

                               }

                               private void initChoice() {

                                   List<Pair<String,String>> assetClasses = new ArrayList<>();
                                   assetClasses.add( new Pair("Equipment", "20000"));
                                   assetClasses.add( new Pair("Furniture", "21000"));
                                   assetClasses.add( new Pair("Investment", "22000"));

                                   assetClass.setConverter( new StringConverter<Pair<String,String>>() {
                                       @Override
                                       public String toString(Pair<String, String> pair) {
                                           return pair.getKey();
                                       }

                                       @Override
                                       public Pair<String, String> fromString(String string) {
                                           return null;
                                       }
                                   });

                                   assetClass.getItems().add( EMPTY_PAIR );
                                   assetClass.getItems().addAll( assetClasses );
                                   assetClass.setValue( EMPTY_PAIR );

                               }

                               public static void main(String[] args) {
                                   launch(args);
                               }
                           }

         .. container:: sect2

            .. rubric:: 3.2. ComboBox
               :name: _combobox

            .. container:: paragraph

               A ``ComboBox`` is a hybrid control that presents a list
               of values plus an edit control. This article demonstrates
               a basic form of the ``ComboBox`` which is an un-editable
               list of items built on a complex data structure.

            .. container:: paragraph

               This screenshot shows a ComboBoxApp containing a list of
               expense accounts. The accounts are stored in a key/value
               JavaFX class ``Pair``. The console shows the result of a
               save operation after the user selects "Auto Expense".

            .. container:: imageblock

               .. container:: content

                  |combobox|

            .. container:: paragraph

               This code adds a Label, a ComboBox, and a Button to an
               HBox. The ComboBox is instantiated as a field and
               initialized in a method presented later initCombo(). A
               handler is put on the Save Button which outputs a value
               if an item is selected or a special message if no item is
               selected.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class CombosApp extends Application {

                         private final ComboBox<Pair<String, String>> account = new ComboBox<>();

                         private final static Pair<String, String> EMPTY_PAIR = new Pair<>("", "");

                         @Override
                         public void start(Stage primaryStage) throws Exception {

                             Label accountsLabel = new Label("Account:");
                             account.setPrefWidth(200);
                             Button saveButton = new Button("Save");

                             HBox hbox = new HBox(
                                     accountsLabel,
                                     account,
                                     saveButton);
                             hbox.setSpacing( 10.0d );
                             hbox.setAlignment(Pos.CENTER );
                             hbox.setPadding( new Insets(40) );

                             Scene scene = new Scene(hbox);

                             initCombo();

                             saveButton.setOnAction( (evt) -> {
                                 if( account.getValue().equals(EMPTY_PAIR) ) {
                                     System.out.println("no save needed; no item selected");
                                 } else {
                                     System.out.println("saving " + account.getValue());
                                 }
                             });

                             primaryStage.setTitle("CombosApp");
                             primaryStage.setScene( scene );
                             primaryStage.show();
                         }

            .. container:: sect3

               .. rubric:: 3.2.1. CellFactory
                  :name: _cellfactory

               .. container:: paragraph

                  The initCombo() method adds several expense accounts
                  to a ``List``. This ``List`` is added to the
                  ``ComboBox`` items after an empty ``Pair`` object is
                  added. The initial value is set to the EMPTY_PAIR
                  which is a constant.

               .. container:: paragraph

                  If not specified, the ``ComboBox`` will use the
                  toString() method of the object (in this article, a
                  ``Pair``) to render a backing object. For Strings,
                  such as a "Yes" or "No" selection, no extra code is
                  needed. However, the toString() of a ``Pair`` will
                  output both the human-readable key and the
                  machine-preferred value. The requirements for this
                  ``ComboBox`` are to use only the human-readable keys
                  in the display.

               .. container:: paragraph

                  To do this, a cellFactory is provided which will
                  configure a ``ListCell`` object with the ``Pair`` key
                  as the contents. The ``Callback`` type is verbose, but
                  the gist of the factory is set the text of a
                  ``ListCell`` in the updateItem() method of an
                  anonymous inner class. Notice that the super class
                  method must be called.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void initCombo() {

                                List<Pair<String,String>> accounts = new ArrayList<>();

                                accounts.add( new Pair<>("Auto Expense", "60000") );
                                accounts.add( new Pair<>("Interest Expense", "61000") );
                                accounts.add( new Pair<>("Office Expense", "62000") );
                                accounts.add( new Pair<>("Salaries Expense", "63000") );

                                account.getItems().add( EMPTY_PAIR );
                                account.getItems().addAll( accounts );
                                account.setValue( EMPTY_PAIR );

                                Callback<ListView<Pair<String,String>>, ListCell<Pair<String,String>>> factory =
                                    (lv) ->
                                            new ListCell<Pair<String,String>>() {
                                                @Override
                                                protected void updateItem(Pair<String, String> item, boolean empty) {
                                                    super.updateItem(item, empty);
                                                    if( empty ) {
                                                        setText("");
                                                    } else {
                                                        setText( item.getKey() );
                                                    }
                                                }
                                            };

                                account.setCellFactory( factory );
                                account.setButtonCell( factory.call( null ) );
                            }

               .. container:: paragraph

                  The ``Callback`` is used in the setButtonCell() method
                  to provide a cell for the editing control. Note that
                  this program is not editable which is the default.
                  However, the factory.call(null) is needed otherwise
                  only the contents of the popup menu will be properly
                  formatted and the view of the control at rest will
                  fallback on a toString().

               .. container:: paragraph

                  This article presented a simple usage of ``ComboBox``.
                  Since this control was not editable, ``ChoiceBox`` can
                  be substituted. For un-editable graphical renderings
                  (ex a color coded shape for a status value),
                  ``ComboBox`` still would be needed to define the
                  specific ``Node`` used in the control.

               .. container:: sect4

                  .. rubric:: Complete Code
                     :name: _complete_code_2

                  .. container:: paragraph

                     The code can be tested in a single .java file.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           public class CombosApp extends Application {

                               private final ComboBox<Pair<String, String>> account = new ComboBox<>();

                               private final static Pair<String, String> EMPTY_PAIR = new Pair<>("", "");

                               @Override
                               public void start(Stage primaryStage) throws Exception {

                                   Label accountsLabel = new Label("Account:");
                                   account.setPrefWidth(200);
                                   Button saveButton = new Button("Save");

                                   HBox hbox = new HBox(
                                           accountsLabel,
                                           account,
                                           saveButton);
                                   hbox.setSpacing( 10.0d );
                                   hbox.setAlignment(Pos.CENTER );
                                   hbox.setPadding( new Insets(40) );

                                   Scene scene = new Scene(hbox);

                                   initCombo();

                                   saveButton.setOnAction( (evt) -> {
                                       if( account.getValue().equals(EMPTY_PAIR ) ) {
                                           System.out.println("no save needed; no item selected");
                                       } else {
                                           System.out.println("saving " + account.getValue());
                                       }
                                   });

                                   primaryStage.setTitle("CombosApp");
                                   primaryStage.setScene( scene );
                                   primaryStage.show();
                               }

                               private void initCombo() {

                                   List<Pair<String,String>> accounts = new ArrayList<>();

                                   accounts.add( new Pair<>("Auto Expense", "60000") );
                                   accounts.add( new Pair<>("Interest Expense", "61000") );
                                   accounts.add( new Pair<>("Office Expense", "62000") );
                                   accounts.add( new Pair<>("Salaries Expense", "63000") );

                                   account.getItems().add( EMPTY_PAIR );
                                   account.getItems().addAll( accounts );
                                   account.setValue( EMPTY_PAIR );

                                   Callback<ListView<Pair<String,String>>, ListCell<Pair<String,String>>> factory =
                                       (lv) ->
                                               new ListCell<Pair<String,String>>() {
                                                   @Override
                                                   protected void updateItem(Pair<String, String> item, boolean empty) {
                                                       super.updateItem(item, empty);
                                                       if( empty ) {
                                                           setText("");
                                                       } else {
                                                           setText( item.getKey() );
                                                       }
                                                   }
                                               };

                                   account.setCellFactory( factory );
                                   account.setButtonCell( factory.call( null ) );
                               }

                               public static void main(String[] args) {
                                   launch(args);
                               }
                           }

         .. container:: sect2

            .. rubric:: 3.3. ListView
               :name: _listview

            .. container:: sect3

               .. rubric:: 3.3.1. ListView Filtering in JavaFX
                  :name: _listview_filtering_in_javafx

               .. container:: paragraph

                  This article demonstrates how to filter a ListView in
                  a JavaFX Application. Two lists are managed by the
                  Application. One list contains all of the items in the
                  data model. The second list contains the items
                  currently being viewed. A scrap of comparison logic
                  stored as a filter mediates between the two.

               .. container:: paragraph

                  Binding is used heavily to keep the data structures in
                  sync with what the user has selected.

               .. container:: paragraph

                  This screenshot shows the Application which contains a
                  top row of ToggleButtons which set the filter and a
                  ListView containing the objects.

               .. container:: imageblock

                  .. container:: content

                     |listview filtering screenshot|

               .. container:: paragraph

                  The complete code — a single .java file — is listed at
                  the end of the article.

               .. container:: sect4

                  .. rubric:: Data Structures
                     :name: _data_structures

                  .. container:: paragraph

                     The program begins with a domain model Player and
                     an array of Player objects.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           static class Player {

                               private final String team;
                               private final String playerName;
                               public Player(String team, String playerName) {
                                   this.team = team;
                                   this.playerName = playerName;
                               }
                               public String getTeam() {
                                   return team;
                               }
                               public String getPlayerName() {
                                   return playerName;
                               }
                               @Override
                               public String toString() { return playerName + " (" + team + ")"; }
                           }

                  .. container:: paragraph

                     The Player class contains a pair of fields, team
                     and playerName. A toString() is provided so that
                     when the object is added to the ListView (presented
                     later), a custom ListCell class is not needed.

                  .. container:: paragraph

                     The test data for this example is a list of
                     American baseball players.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           Player[] players = {new Player("BOS", "David Ortiz"),
                                               new Player("BOS", "Jackie Bradley Jr."),
                                               new Player("BOS", "Xander Bogarts"),
                                               new Player("BOS", "Mookie Betts"),
                                               new Player("HOU", "Jose Altuve"),
                                               new Player("HOU", "Will Harris"),
                                               new Player("WSH", "Max Scherzer"),
                                               new Player("WSH", "Bryce Harper"),
                                               new Player("WSH", "Daniel Murphy"),
                                               new Player("WSH", "Wilson Ramos") };

               .. container:: sect4

                  .. rubric:: Model
                     :name: _model

                  .. container:: paragraph

                     As mentioned at the start of the article, the
                     ListView filtering is centered around the
                     management of two lists. All the objects are stored
                     in a wrapped ObservableList playersProperty and the
                     objects that are currently viewable are stored in a
                     wrapped FilteredList, viewablePlayersProperty.
                     viewablePlayersProperty is built off of
                     playersProperty so updates made to players that
                     meet the FilteredList criteria will also be made to
                     viewablePlayers.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           ReadOnlyObjectProperty<ObservableList<Player>> playersProperty =
                                   new SimpleObjectProperty<>(FXCollections.observableArrayList());

                           ReadOnlyObjectProperty<FilteredList<Player>> viewablePlayersProperty =
                                   new SimpleObjectProperty<FilteredList<Player>>(
                                           new FilteredList<>(playersProperty.get()
                                                   ));

                  .. container:: paragraph

                     filterProperty() is a convenience to allow callers
                     to bind to the underlying Predicate.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           ObjectProperty<Predicate<? super Player>> filterProperty =
                               viewablePlayersProperty.get().predicateProperty();

                  .. container:: paragraph

                     The UI root is a VBox which contains an HBox of
                     ToggleButtons and a ListView.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           VBox vbox = new VBox();
                           vbox.setPadding( new Insets(10));
                           vbox.setSpacing(4);

                           HBox hbox = new HBox();
                           hbox.setSpacing( 2 );

                           ToggleGroup filterTG = new ToggleGroup();

               .. container:: sect4

                  .. rubric:: Filtering Action
                     :name: _filtering_action

                  .. container:: paragraph

                     A handler is attached the ToggleButtons which will
                     modify filterProperty. Each ToggleButton is
                     supplied a Predicate in the userData field.
                     toggleHandler uses this supplied Predicate when
                     setting the filter property. This code sets the
                     special case "Show All" ToggleButton.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           @SuppressWarnings("unchecked")
                           EventHandler<ActionEvent> toggleHandler = (event) -> {
                                   ToggleButton tb = (ToggleButton)event.getSource();
                                   Predicate<Player> filter = (Predicate<Player>)tb.getUserData();
                                   filterProperty.set( filter );
                               };

                           ToggleButton tbShowAll = new ToggleButton("Show All");
                           tbShowAll.setSelected(true);
                           tbShowAll.setToggleGroup( filterTG );
                           tbShowAll.setOnAction(toggleHandler);
                           tbShowAll.setUserData( (Predicate<Player>) (Player p) -> true);

                  .. container:: paragraph

                     The ToggleButtons that filter a specific team are
                     created at runtime based on the Players array. This
                     Stream does the following.

                  .. container:: olist arabic

                     #. Distill the list of Players down to a distinct
                        list of team Strings

                     #. Create a ToggleButton for each team String

                     #. Set a Predicate for each ToggleButton to be used
                        as a filter

                     #. Collect the ToggleButtons for addition into the
                        HBox container

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           List<ToggleButton> tbs = Arrays.asList( players)
                                   .stream()
                                   .map( (p) -> p.getTeam() )
                                   .distinct()
                                   .map( (team) -> {
                                       ToggleButton tb = new ToggleButton( team );
                                       tb.setToggleGroup( filterTG );
                                       tb.setOnAction( toggleHandler );
                                       tb.setUserData( (Predicate<Player>) (Player p) -> team.equals(p.getTeam()) );
                                       return tb;
                                   })
                                   .collect(Collectors.toList());

                           hbox.getChildren().add( tbShowAll );
                           hbox.getChildren().addAll( tbs );

               .. container:: sect4

                  .. rubric:: ListView
                     :name: _listview_2

                  .. container:: paragraph

                     The next step creates the ListView and binds the
                     ListView to the viewablePlayersProperty. This
                     enables the ListView to receive updates based on
                     the changing filter.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           ListView<Player> lv = new ListView<>();
                           lv.itemsProperty().bind( viewablePlayersProperty );

                  .. container:: paragraph

                     The remainder of the program creates a Scene and
                     shows the Stage. onShown loads the data set into
                     the playersProperty and the viewablePlayersProperty
                     lists. Although both lists are in sync in this
                     partcular version of the program, if the stock
                     filter is every different than "no filter", this
                     code would not need to be modified.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           vbox.getChildren().addAll( hbox, lv );

                           Scene scene = new Scene(vbox);

                           primaryStage.setScene( scene );
                                   primaryStage.setOnShown((evt) -> {
                                       playersProperty.get().addAll( players );
                                   });

                           primaryStage.show();

                  .. container:: paragraph

                     This article used binding to tie a list of viewable
                     Player objects to a ListView. The viewable Players
                     were updated when a ToggleButton is selected. The
                     selection applied a filter to a full set of Players
                     which was maintained separately as a FilteredList
                     (thanks @kleopatra_jx). Binding was used to keep
                     the UI in sync and to allow for a separation of
                     concerns in the design.

               .. container:: sect4

                  .. rubric:: Further Reading
                     :name: _further_reading

                  .. container:: paragraph

                     To see how such a design would implement basic add
                     and remove functionality, visit the following page
                     https://courses.bekwam.net/public_tutorials/bkcourse_filterlistapp.php.

               .. container:: sect4

                  .. rubric:: Complete Code
                     :name: _complete_code_3

                  .. container:: paragraph

                     The code can be tested in a single .java file.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           public class FilterListApp extends Application {

                               @Override
                               public void start(Stage primaryStage) throws Exception {

                                   //
                                   // Test data
                                   //
                                   Player[] players = {new Player("BOS", "David Ortiz"),
                                                       new Player("BOS", "Jackie Bradley Jr."),
                                                       new Player("BOS", "Xander Bogarts"),
                                                       new Player("BOS", "Mookie Betts"),
                                                       new Player("HOU", "Jose Altuve"),
                                                       new Player("HOU", "Will Harris"),
                                                       new Player("WSH", "Max Scherzer"),
                                                       new Player("WSH", "Bryce Harper"),
                                                       new Player("WSH", "Daniel Murphy"),
                                                       new Player("WSH", "Wilson Ramos") };

                                   //
                                   // Set up the model which is two lists of Players and a filter criteria
                                   //
                                   ReadOnlyObjectProperty<ObservableList<Player>> playersProperty =
                                           new SimpleObjectProperty<>(FXCollections.observableArrayList());

                                   ReadOnlyObjectProperty<FilteredList<Player>> viewablePlayersProperty =
                                           new SimpleObjectProperty<FilteredList<Player>>(
                                                   new FilteredList<>(playersProperty.get()
                                                           ));

                                   ObjectProperty<Predicate<? super Player>> filterProperty =
                                       viewablePlayersProperty.get().predicateProperty();


                                   //
                                   // Build the UI
                                   //
                                   VBox vbox = new VBox();
                                   vbox.setPadding( new Insets(10));
                                   vbox.setSpacing(4);

                                   HBox hbox = new HBox();
                                   hbox.setSpacing( 2 );

                                   ToggleGroup filterTG = new ToggleGroup();

                                   //
                                   // The toggleHandler action wills set the filter based on the TB selected
                                   //
                                   @SuppressWarnings("unchecked")
                                   EventHandler<ActionEvent> toggleHandler = (event) -> {
                                           ToggleButton tb = (ToggleButton)event.getSource();
                                           Predicate<Player> filter = (Predicate<Player>)tb.getUserData();
                                           filterProperty.set( filter );
                                       };

                                   ToggleButton tbShowAll = new ToggleButton("Show All");
                                   tbShowAll.setSelected(true);
                                   tbShowAll.setToggleGroup( filterTG );
                                   tbShowAll.setOnAction(toggleHandler);
                                   tbShowAll.setUserData( (Predicate<Player>) (Player p) -> true);

                                   //
                                   // Create a distinct list of teams from the Player objects, then create
                                   // ToggleButtons
                                   //
                                   List<ToggleButton> tbs = Arrays.asList( players)
                                           .stream()
                                           .map( (p) -> p.getTeam() )
                                           .distinct()
                                           .map( (team) -> {
                                               ToggleButton tb = new ToggleButton( team );
                                               tb.setToggleGroup( filterTG );
                                               tb.setOnAction( toggleHandler );
                                               tb.setUserData( (Predicate<Player>) (Player p) -> team.equals(p.getTeam()) );
                                               return tb;
                                           })
                                           .collect(Collectors.toList());

                                   hbox.getChildren().add( tbShowAll );
                                   hbox.getChildren().addAll( tbs );

                                   //
                                   // Create a ListView bound to the viewablePlayers property
                                   //
                                   ListView<Player> lv = new ListView<>();
                                   lv.itemsProperty().bind( viewablePlayersProperty );

                                   vbox.getChildren().addAll( hbox, lv );

                                   Scene scene = new Scene(vbox);

                                   primaryStage.setScene( scene );
                                   primaryStage.setOnShown((evt) -> {
                                       playersProperty.get().addAll( players );
                                   });

                                   primaryStage.show();

                               }

                               public static void main(String args[]) {
                                   launch(args);
                               }

                               static class Player {

                                   private final String team;
                                   private final String playerName;
                                   public Player(String team, String playerName) {
                                       this.team = team;
                                       this.playerName = playerName;
                                   }
                                   public String getTeam() {
                                       return team;
                                   }
                                   public String getPlayerName() {
                                       return playerName;
                                   }
                                   @Override
                                   public String toString() { return playerName + " (" + team + ")"; }
                               }
                           }

         .. container:: sect2

            .. rubric:: 3.4. TableView
               :name: _tableview

            .. container:: paragraph

               For JavaFX business applications, the ``TableView`` is an
               essential control. Use a ``TableView`` when you need to
               present multiple records in a flat row/column structure.
               This example shows the basic elements of a ``TableView``
               and demonstrates the power of the component when JavaFX
               Binding is applied.

            .. container:: paragraph

               The demonstration app is a ``TableView`` and a pair of
               Buttons. The ``TableView`` has four TableColumns: SKU,
               Item, Price, Tax. The ``TableView`` shows three objects
               in three rows: Mechanical Keyboard, Product Docs,
               O-Rings. The following screenshot shows the app
               immediately after startup.

            .. container:: imageblock

               .. container:: content

                  |tableviewselectapp screenshot|

            .. container:: paragraph

               The disabled logic of the Buttons is based on the
               selections in the ``TableView``. Initially, no items are
               selected so both Buttons are disabled. If any item is
               selected — the first item in the following
               screenshot — the Inventory ``Button`` is enabled. The Tax
               ``Button`` is also enabled although that requires
               consulting the Tax value.

            .. container:: imageblock

               .. container:: content

                  |tableviewselectapp screenshot selected tax|

            .. container:: paragraph

               If the Tax value for the selected item is false, then the
               Tax ``Button`` will be disabled. This screenshot shows
               the second item selected. The Inventory ``Button`` is
               enabled but the Tax ``Button`` is not.

            .. container:: imageblock

               .. container:: content

                  |tableviewselectapp screenshot selected notax|

            .. container:: sect3

               .. rubric:: 3.4.1. Model and Declarations
                  :name: _model_and_declarations

               .. container:: paragraph

                  A ``TableView`` is based on a model which is a POJO
                  called Item.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class Item {

                            private final String sku;
                            private final String descr;
                            private final Float price;
                            private final Boolean taxable;

                            public Item(String sku, String descr, Float price, Boolean taxable) {
                                this.sku = sku;
                                this.descr = descr;
                                this.price = price;
                                this.taxable = taxable;
                            }

                            public String getSku() {
                                return sku;
                            }

                            public String getDescr() {
                                return descr;
                            }

                            public Float getPrice() {
                                return price;
                            }

                            public Boolean getTaxable() {
                                return taxable;
                            }
                        }

               .. container:: paragraph

                  The ``TableView`` and ``TableColumn`` use generics in
                  their declarations. For ``TableView``, the type
                  parameter is Item. For the TableColumns, the type
                  parameters are Item and the field type. The
                  constructor of ``TableColumn`` accepts a column name.
                  In this example, the column names diverge slightly
                  from the actual field names.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                TableView<Item> tblItems = new TableView<>();

                                TableColumn<Item, String> colSKU = new TableColumn<>("SKU");
                                TableColumn<Item, String> colDescr = new TableColumn<>("Item");
                                TableColumn<Item, Float> colPrice = new TableColumn<>("Price");
                                TableColumn<Item, Boolean> colTaxable = new TableColumn<>("Tax");

                                tblItems.getColumns().addAll(
                                    colSKU, colDescr, colPrice, colTaxable
                                );

               .. container:: paragraph

                  Adding model items to the ``TableView`` is done by
                  adding items to the underlying collection.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                tblItems.getItems().addAll(
                                    new Item("KBD-0455892", "Mechanical Keyboard", 100.0f, true),
                                    new Item( "145256", "Product Docs", 0.0f, false ),
                                    new Item( "OR-198975", "O-Ring (100)", 10.0f, true)
                                );

               .. container:: paragraph

                  At this point, the ``TableView`` has been configured
                  and test data has been added. However, if you were to
                  view the program, you would see three empty rows. That
                  is because JavaFX is missing the linkage between the
                  POJO and the TableColumns. That linkage is added to
                  the TableColumns using a cellValueFactory.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                colSKU.setCellValueFactory( new PropertyValueFactory<>("sku") );
                                colDescr.setCellValueFactory( new PropertyValueFactory<>("descr") );
                                colPrice.setCellValueFactory( new PropertyValueFactory<>("price") );
                                colTaxable.setCellValueFactory( new PropertyValueFactory<>("taxable") );

               .. container:: paragraph

                  Viewing the program at this point will display the
                  data in the appropriate columns.

            .. container:: sect3

               .. rubric:: 3.4.2. Selection
                  :name: _selection

               .. container:: paragraph

                  To retrieve the selected item or items in a
                  ``TableView``, use the separate selectionModel object.
                  Calling tblItems.getSelectionModel() returns an object
                  that includes a property "selectedItem". This can be
                  retrieved and used in a method, say to bring up an
                  edit details screen. Alternatively,
                  getSelectionModel() can return a JavaFX property
                  "selectedItemProperty" for binding expressions.

               .. container:: paragraph

                  In the demo app, two Buttons are bound to the
                  selectionModel of the ``TableView``. Without binding,
                  you might add listeners that examine the selection and
                  make a call like setDisabled() on a Button. Prior to
                  the ``TableView`` selection, you would also need
                  initialization logic to handle the case where there is
                  no selection. The binding syntax expresses this logic
                  in a declarative statement that can handle both the
                  listener and the initialization in a single line.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                Button btnInventory = new Button("Inventory");
                                Button btnCalcTax = new Button("Tax");

                                btnInventory.disableProperty().bind(
                                    tblItems.getSelectionModel().selectedItemProperty().isNull() (1)
                                );

               .. container:: colist arabic

                  #. See "Ignoring Warnings for Null Select Binding
                     Expressions" under "Best Practices" to show how to
                     turn off warning messages when using this construct

               .. container:: paragraph

                  The btnInventory disable property will be true if
                  there is no item selected (isNull()). When the screen
                  is first displayed, no selection is made and the
                  ``Button`` is disabled. Once any selection is made,
                  btnInventory is enabled (disable=false).

               .. container:: paragraph

                  the btnCalcTax logic is slightly more complex.
                  btnCalcTax too is disabled when there is no selection.
                  However, btnCalcTax will also consider the contents of
                  the selectedItem. A composite binding or() is used to
                  join these two conditions. As before, there is an
                  isNull() expression for no selection. The
                  Bindings.select() checks the value of Item.taxable. A
                  true taxable Item will enable btnCalcTax while a false
                  item will disable the ``Button``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                btnCalcTax.disableProperty().bind(
                                    tblItems.getSelectionModel().selectedItemProperty().isNull().or(
                                            Bindings.select(
                                                tblItems.getSelectionModel().selectedItemProperty(),
                                                "taxable"
                                            ).isEqualTo(false)
                                    )
                                );

               .. container:: paragraph

                  Bindings.select() is the mechanism to extract a field
                  from an object. selectedItemProperty() is the changing
                  selectedItem and "taxable" is the single-hop path to
                  the taxable field.

               .. container:: paragraph

                  This example showed how to set up a ``TableView``
                  based on a POJO. It also featured a pair of powerful
                  binding expressions that allow you to link related
                  controls without writing extra listeners and
                  initialization code. The ``TableView`` is an
                  indispensable control for the JavaFX business
                  applications developer. It will be the best and most
                  familiar control for displaying a list of structured
                  items.

            .. container:: sect3

               .. rubric:: 3.4.3. Complete Code
                  :name: _complete_code_4

               .. container:: paragraph

                  The complete code for the application follows. It is a
                  pair of class files TableSelectApp.java and Item.java.
                  Item.java was already presented in its entirety in an
                  earlier section.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class TableSelectApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                TableView<Item> tblItems = new TableView<>();
                                tblItems.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);

                                VBox.setVgrow(tblItems, Priority.ALWAYS );

                                TableColumn<Item, String> colSKU = new TableColumn<>("SKU");
                                TableColumn<Item, String> colDescr = new TableColumn<>("Item");
                                TableColumn<Item, Float> colPrice = new TableColumn<>("Price");
                                TableColumn<Item, Boolean> colTaxable = new TableColumn<>("Tax");

                                colSKU.setCellValueFactory( new PropertyValueFactory<>("sku") );
                                colDescr.setCellValueFactory( new PropertyValueFactory<>("descr") );
                                colPrice.setCellValueFactory( new PropertyValueFactory<>("price") );
                                colTaxable.setCellValueFactory( new PropertyValueFactory<>("taxable") );

                                tblItems.getColumns().addAll(
                                    colSKU, colDescr, colPrice, colTaxable
                                );

                                tblItems.getItems().addAll(
                                    new Item("KBD-0455892", "Mechanical Keyboard", 100.0f, true),
                                    new Item( "145256", "Product Docs", 0.0f, false ),
                                    new Item( "OR-198975", "O-Ring (100)", 10.0f, true)
                                );

                                Button btnInventory = new Button("Inventory");
                                Button btnCalcTax = new Button("Tax");

                                btnInventory.disableProperty().bind(
                                    tblItems.getSelectionModel().selectedItemProperty().isNull()
                                );

                                btnCalcTax.disableProperty().bind(
                                    tblItems.getSelectionModel().selectedItemProperty().isNull().or(
                                            Bindings.select(
                                                tblItems.getSelectionModel().selectedItemProperty(),
                                                "taxable"
                                            ).isEqualTo(false)
                                    )
                                );

                                HBox buttonHBox = new HBox( btnInventory, btnCalcTax );
                                buttonHBox.setSpacing( 8 );

                                VBox vbox = new VBox( tblItems, buttonHBox );
                                vbox.setPadding( new Insets(10) );
                                vbox.setSpacing( 10 );

                                Scene scene = new Scene(vbox);

                                primaryStage.setTitle("TableSelectApp");
                                primaryStage.setScene( scene );
                                primaryStage.setHeight( 376 );
                                primaryStage.setWidth( 667 );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {

                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 3.5. ImageView
               :name: _imageview

            .. container:: paragraph

               JavaFX provides the ``Image`` and ``ImageView`` classes
               to display BMP, GIF, JPEG, and PNG graphical images.
               Image is a class that holds the bytes of the image and
               optionally scaling information. The Image object is
               loaded by a background thread, and the Image class
               provides methods for interacting with the load operation.
               The Image object is used independently of ImageView to
               create cursors and app icons.

            .. container:: paragraph

               ImageView is a JavaFX ``Node`` that holds an Image
               object. ImageView makes an image available throughout the
               framework. An ImageView can be added to a container by
               itself or alongside other UI controls. For example an
               image can be added to a ``Label`` by setting the graphic
               property of the Label.

            .. container:: sidebarblock

               .. container:: content

                  .. container:: paragraph

                     Images can also be displayed and manipulated using
                     JavaFX CSS.

            .. container:: paragraph

               This screenshot shows a ``TilePane`` containing four
               equally-sized tiles. Each tile contains an ImageView of a
               keyboard.

            .. container:: imageblock

               .. container:: content

                  |imageapp screenshot|

            .. container:: paragraph

               The top-left image is displayed using the original image
               size of 320x240. The top-right image is scaled
               proportionally. Since the top-right image is a rectangle
               and the containing tile is a square, there are gaps on
               the top and bottom to maintain the correct ratio when
               stretching the width.

            .. container:: paragraph

               The lower-left image fills the container completely.
               However, in making the rectangular image fit the square
               container, the image is not scaled proportionally and
               instead strethed in both directions.

            .. container:: paragraph

               The lower-right image fills the container using a
               zoomed-in version of the image. A square Viewport is
               created from a 100x100 Rectangle2D and scaled up
               proportionally. While the low-quality image is blurry, it
               is not deformed.

            .. container:: sect3

               .. rubric:: 3.5.1. Image
                  :name: _image

               .. container:: paragraph

                  The Image class provides constructors to build an
                  Image object from the image file dimensions or from a
                  transformed object. These three constructor calls
                  create the Image objects used in the top-right,
                  bottom-left and bottom-right tiles, respectively.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ImageApp extends Application {

                            private final static String IMAGE_LOC = "images/keyboard.jpg";

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Image image2 = new Image(IMAGE_LOC, 360.0d, 360.0d, true, true );
                                Image image3 = new Image(IMAGE_LOC, 360.0d, 360.0d, false, true);
                                Image image4 = new Image(IMAGE_LOC);

               .. container:: paragraph

                  The String URL passed in to all forms of the Image
                  constructor is relative to the classpath. An absolute
                  URL such as
                  "https://www.bekwam.com/images/bekwam_logo_hdr_rounded.png"
                  can also be used. Note that the absolute URLs will not
                  throw an error if their resource is not found.

               .. container:: paragraph

                  image2 and image3 specify dimensions, forming a square
                  larger than the rectangle of the original image.
                  image2 will preserve the aspect ratio ("true"). The
                  constructor of image3 does not preserve the aspect
                  ratio and will appear stretched.

            .. container:: sect3

               .. rubric:: 3.5.2. ImageView
                  :name: _imageview_2

               .. container:: paragraph

                  ImageView is a Node container that allows the Image
                  object to be used in JavaFX containers and UI
                  controls. In the top-left image, a short form of
                  ImageView is used which passes in only the image URL.
                  It will honor the original dimensions and does not
                  require an additional Image object.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                ImageView iv1 = new ImageView(IMAGE_LOC);

                                ImageView iv2 = new ImageView(image2);
                                ImageView iv3 = new ImageView(image3);
                                ImageView iv4 = new ImageView(image4);

                                iv4.setPreserveRatio(true);
                                iv4.setFitHeight(360);
                                iv4.setFitWidth(360);
                                Rectangle2D viewportRect = new Rectangle2D(20, 50, 100, 100);
                                iv4.setViewport(viewportRect);

               .. container:: paragraph

                  iv3 and iv3 are based on the image2 and image3
                  objects. Recall that these objects produced
                  transformed images that fit the square container.

               .. container:: paragraph

                  iv4 is also based on a transformed Image object, but
                  in the case of iv4, the transformation is done through
                  the ImageView object rather than the Image.
                  ImageView.setFitHeight is called rather than
                  Image.setFitHeight.

               .. container:: paragraph

                  Additionally, the Viewport of iv4 is adjusted. The
                  Viewport controls the visible part of the ImageView.
                  In this case, the Viewport is defined as a 100x100
                  section of the Image shifted left 20 pixels and up 50
                  pixels.

               .. container:: paragraph

                  This section demonstrated the Image and ImageView
                  classes which are used to display an image in a
                  container or other UI control. These classes define
                  the scaling behavior of the image and can be used with
                  a Rectangle2D Viewport to give additional image
                  display customization.

            .. container:: sect3

               .. rubric:: 3.5.3. Source
                  :name: _source

               .. container:: paragraph

                  The complete source code and Gradle project can be
                  found at the link below.

               .. container:: paragraph

                  `ImageApp Source
                  Zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_imageapp_sources.zip>`__

         .. container:: sect2

            .. rubric:: 3.6. LineChart
               :name: _linechart

            .. container:: paragraph

               While you can plot a graph using a ``Line`` on a
               ``Canvas``, JavaFX’s ``LineChart`` makes graphing easier.
               In addition to customizing standard charting components
               like axis legends, LineChart encapsulates the source data
               of the graph. As with all JavaFX controls, LineChart
               enables you to style the graph using CSS.

            .. container:: paragraph

               This screenshot shows a plot of seven points. The X-Axis
               has units of Time Constants ranging from 0 to 5. The
               Y-Axis shows Voltage ranging from 0 to 1 with more
               frequent gradients than the X-Axis.

            .. container:: imageblock

               .. container:: content

                  |linechartapp screenshot|

            .. container:: sect3

               .. rubric:: 3.6.1. Data
                  :name: _data

               .. container:: paragraph

                  LineChart includes an API for managing data. Data
                  points are grouped into series. This particular
                  example uses a single series.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class LineChartApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                XYChart.Series<Double, Double> series = new XYChart.Series<>();
                                series.getData().add( new XYChart.Data<>(0.0,0.0));
                                series.getData().add( new XYChart.Data<>(0.7,0.5));
                                series.getData().add( new XYChart.Data<>(1.0,0.632));
                                series.getData().add( new XYChart.Data<>(2.0,0.865));
                                series.getData().add( new XYChart.Data<>(3.0,0.95));
                                series.getData().add( new XYChart.Data<>( 4.0, 0.982 ));
                                series.getData().add( new XYChart.Data<>( 5.0, 0.993 ));

               .. container:: paragraph

                  Each data point is an ``XYChart.Data`` object that is
                  added to an ``XYChart.Series`` container. To show a
                  comparison of different series, create additional
                  XYChart.Series objects. These will be rendered as
                  different colors by the LineChart.

            .. container:: sect3

               .. rubric:: 3.6.2. Chart
                  :name: _chart

               .. container:: paragraph

                  The LineChart object is created with Axis objects. The
                  first Axis parameter is for the X axis. Each Axis
                  object includes an optional label: Time Constant,
                  Voltage (Vs). The next two numeric parameters give the
                  lower and upper bounds. The final parameter sets the
                  step increment. Another form of the LineChart
                  constructor, not used in this example, accepts the
                  data. This example, makes an explicit add() call on
                  the LineChart’s data field.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                LineChart lc = new LineChart(
                                        new NumberAxis("Time Constant", 0.0, 5.0, 1),
                                        new NumberAxis("Voltage (Vs)", 0.0, 1.0, 0.1)
                                        );

                                lc.getData().add( series );

               .. container:: paragraph

                  The LineChart can be customized with a title using
                  setTitle() and an individual style with setStyle().
                  For consistency, it is best to use a style sheet so
                  that a single style definition can be applied across a
                  set of LineCharts.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                lc.setTitle("RC Charging");
                                lc.setStyle("-fx-background-color: lightgray");

               .. container:: paragraph

                  There are many other properties that can be set to
                  configure the LineChart. setLegendVisible() removes a
                  series identifier since there is only one series in
                  this graph. setCreateSymbols() removes a graphic on
                  each data point that was being clipped at the origin
                  and end of the graph.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                lc.setCreateSymbols(false);
                                lc.setLegendVisible(false);

               .. container:: paragraph

                  For modest reporting requirements, JavaFX provides
                  classes like LineChart to plot multiple series of data
                  points into a graph. The LineChart object is highly
                  customizable, giving control over the legends, lines,
                  and data point icons. Additionally, CSS styling is
                  available to make a set of these reports consistent.

            .. container:: sect3

               .. rubric:: 3.6.3. Source
                  :name: _source_2

               .. container:: paragraph

                  The complete source code and Gradle project can be
                  found at the link below.

               .. container:: paragraph

                  `ChartApp Source
                  Zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_chartapp_sources.zip>`__

         .. container:: sect2

            .. rubric:: 3.7. Pagination
               :name: _pagination

            .. container:: paragraph

               Pagination is a UI control that lets you step through
               blocks of results using next, previous, and direct
               indexing buttons. The Pagination class can break up long
               lists when scrolling is not desired. This section
               presents a special case of single-item pages to form a
               slideshow.

            .. container:: sect3

               .. rubric:: 3.7.1. SlideShow App
                  :name: _slideshow_app

               .. container:: paragraph

                  This screenshot shows the app which is a slideshow of
                  three images. The Pagination control renders the
                  custom Node — an ImageView — and buttons at the bottom
                  of the screen. For each of the three images, there is
                  a direct access button 1, 2, and 3. There is also a
                  pair of arrows to move to the next and previous image.
                  A Label marks the image index and number of images to
                  supplement the visual cues of the buttons themselves.

               .. container:: imageblock

                  .. container:: content

                     |pagination screenshot|

               .. container:: paragraph

                  The program begins by defining a array of three JavaFX
                  Images: imageURLs. In the start() method, a Pagination
                  object is created that references the size of the
                  array. A PageFactory is provided which creates a Node
                  based on the pageIndex parameter. For this example,
                  the pageIndex is an index into the imageURLs array.

               .. container:: paragraph

                  The program forms a Scene and adds it to the
                  primaryStage.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class SlideShowApp extends Application {

                            private Image[] imageURLs = {
                                    new Image("https://www.bekwam.net/images/bekwam_rc_charging.png"),
                                    new Image("https://www.bekwam.net/images/bekwam_rc_discharging.png"),
                                    new Image("https://www.bekwam.net/images/bekwam_rl_scope.png")
                            };

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Pagination pagination = new Pagination(imageURLs.length, 0);
                                pagination.setPageFactory(
                                    pageIndex -> new ImageView(imageURLs[pageIndex])
                                );

                                VBox vbox = new VBox( pagination );

                                Scene scene = new Scene(vbox);

                                primaryStage.setScene( scene );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

               .. container:: paragraph

                  The Pagination class is a simple control to iterate
                  through a long list of items. This example used a
                  single item per page to form a slideshow. In both
                  cases, this is an alternative to scrolling and is
                  useful when you want the UI to be fixed in position.

   .. container:: sect1

      .. rubric:: 4. Layout
         :name: _layout

      .. container:: sectionbody

         .. container:: sect2

            .. rubric:: 4.1. VBox and HBox
               :name: _vbox_and_hbox

            .. container:: paragraph

               Layout in JavaFX begins with selecting the right
               container controls. The two layout controls I use most
               often are ``VBox`` and ``HBox``. ``VBox`` is a container
               that arranges its children in a vertical stack. ``HBox``
               arranges its children in a horizontal row. The power of
               these two controls comes from wrapping them and setting a
               few key properties: alignment, hgrow, and vgrow.

            .. container:: paragraph

               This article will demonstrate these controls through a
               sample project. A mockup of the project shows a UI with
               the following:

            .. container:: ulist

               -  A row of top controls containing a Refresh ``Button``
                  and a Sign Out ``Hyperlink``,

               -  A ``TableView`` that will grow to take up the extra
                  vertical space, and

               -  A Close ``Button``.

            .. container:: paragraph

               The UI also features a ``Separator`` which divides the
               top part of the screen with what may become a standard
               lower panel (Save ``Button``, Cancel ``Button``, etc) for
               the application.

            .. container:: imageblock

               .. container:: content

                  |vboxandhboxapp mockup|

            .. container:: sect3

               .. rubric:: 4.1.1. Structure
                  :name: _structure

               .. container:: paragraph

                  A ``VBox`` is the outermost container "vbox". This
                  will be the ``Parent`` provided to the Scene. Simply
                  putting UI controls in this ``VBox`` will allow the
                  controls — most notably the ``TableView`` — to stretch
                  to fit the available horizontal space. The top
                  controls, the Refresh ``Button`` and the Sign Out
                  ``Hyperlink``, are wrapped in an ``HBox``. Similarly,
                  I wrap the bottom Close ``Button`` in an ``HBox``,
                  allowing for additional Buttons.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        VBox vbox = new VBox();

                        Button btnRefresh = new Button("Refresh");

                        HBox topRightControls = new HBox();
                        topRightControls.getChildren().add( signOutLink );

                        topControls.getChildren().addAll( btnRefresh, topRightControls );

                        TableView<Customer> tblCustomers = new TableView<>();
                        Separator sep = new Separator();

                        HBox bottomControls = new HBox();

                        Button btnClose = new Button("Close");

                        bottomControls.getChildren().add( btnClose );

                        vbox.getChildren().addAll(
                                topControls,
                                tblCustomers,
                                sep,
                                bottomControls
                        );

               .. container:: paragraph

                  This picture shows the mockup broken down by
                  container. The parent ``VBox`` is the outermost blue
                  rectangle. The HBoxes are the inner rectangles (red
                  and green).

               .. container:: imageblock

                  .. container:: content

                     |vboxandhboxapp brokendown|

            .. container:: sect3

               .. rubric:: 4.1.2. Alignment and Hgrow
                  :name: _alignment_and_hgrow

               .. container:: paragraph

                  The Refresh ``Button`` is aligned to the left while
                  the Sign Out ``Hyperlink`` is aligned to the right.
                  This is accomplished using two HBoxes. topControls is
                  an ``HBox`` that contains the Refresh ``Button`` and
                  also contains an ``HBox`` with the Sign Out
                  ``Hyperlink``. As the screen grows wider, the Sign Out
                  ``Hyperlink`` will be pulled to the right while the
                  Refresh ``Button`` will retain its left alignment.

               .. container:: paragraph

                  Alignment is the property that tells a container where
                  to position a control. topControls sets alignment to
                  the BOTTOM_LEFT. topRightControls sets alignment to
                  the BOTTOM_RIGHT. "BOTTOM" makes sure that the
                  baseline of the text "Refresh" matches the baseline of
                  the text "Sign Out".

               .. container:: paragraph

                  In order to make the Sign Out ``Hyperlink`` move to
                  the right when the screen gets wider,
                  ``Priority.ALWAYS`` is needed. This is a cue to the
                  JavaFX to widen topRightControls. Otherwise,
                  topControls will keep the space and topRightControls
                  will appear to the left. Sign Out ``Hyperlink`` still
                  would be right-aligned but in a narrower container.

               .. container:: paragraph

                  Notice that ``setHgrow()`` is a static method and
                  neither invoked on the topControls ``HBox`` nor on
                  itself, topRightControls. This is a facet of the
                  JavaFX API that can be confusing because most of the
                  API sets properties via setters on objects.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        topControls.setAlignment( Pos.BOTTOM_LEFT );

                        HBox.setHgrow(topRightControls, Priority.ALWAYS );
                        topRightControls.setAlignment( Pos.BOTTOM_RIGHT );

               .. container:: paragraph

                  Close ``Button`` is wrapped in an ``HBox`` and
                  positioned using the BOTTOM_RIGHT priority.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        bottomControls.setAlignment(Pos.BOTTOM_RIGHT );

            .. container:: sect3

               .. rubric:: 4.1.3. Vgrow
                  :name: _vgrow

               .. container:: paragraph

                  Since the outermost container is ``VBox``, the child
                  ``TableView`` will expand to take up extra horizontal
                  space when the window is widened. However, vertically
                  resizing the window will produce a gap at the bottom
                  of the screen. The ``VBox`` does not automatically
                  resize any of its children. As with the
                  topRightControls ``HBox``, a grow indicator can be
                  set. In the case of the ``HBox``, this was a
                  horizontal resizing instruction setHgrow(). For the
                  ``TableView`` container ``VBox``, this will be
                  setVgrow().

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        VBox.setVgrow( tblCustomers, Priority.ALWAYS );

            .. container:: sect3

               .. rubric:: 4.1.4. Margin
                  :name: _margin

               .. container:: paragraph

                  There are a few ways to space out UI controls. This
                  article uses the margin property on several of the
                  containers to add whitespace around the controls.
                  These are set individually rather than using a spacing
                  on the ``VBox`` so that the Separator will span the
                  entire width.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        VBox.setMargin( topControls, new Insets(10.0d) );
                        VBox.setMargin( tblCustomers, new Insets(0.0d, 10.0d, 10.0d, 10.0d) );
                        VBox.setMargin( bottomControls, new Insets(10.0d) );

               .. container:: paragraph

                  The ``Insets`` used by tblCustomers omits any top
                  spacing to keep the spacing even. JavaFX does not
                  consolidate whitespace as in web design. If the top
                  Inset were set to 10.0d for the ``TableView``, the
                  distance between the top controls and the
                  ``TableView`` would be twice as wide as the distance
                  between any of the other controls.

               .. container:: paragraph

                  Notice that these are static methods like the
                  ``Priority``.

               .. container:: paragraph

                  This picture shows the application when run in its
                  initial 800x600 size.

               .. container:: imageblock

                  .. container:: content

                     |vboxandhboxapp screenshot|

               .. container:: paragraph

                  This image shows the application resized to a smaller
                  height and width.

               .. container:: imageblock

                  .. container:: content

                     |vboxandhboxapp screenshot sm|

            .. container:: sect3

               .. rubric:: 4.1.5. Select the Right Containers
                  :name: _select_the_right_containers

               .. container:: paragraph

                  The philosophy of JavaFX layout is the same as the
                  philosophy of Swing. Select the right container for
                  the task at hand. This article presented the two most
                  versatile containers: ``VBox`` and HBox. By setting
                  properties like alignment, hgrow, and vgrow, you can
                  build incredibly complex layouts through nesting.
                  These are the containers I use the most and often are
                  the only containers that I need.

            .. container:: sect3

               .. rubric:: 4.1.6. Complete Code
                  :name: _complete_code_5

               .. container:: paragraph

                  The code can be tested in a pair of .java files. There
                  is a POJO for the Customer object used by the
                  ``TableView``

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class Customer {

                            private String firstName;
                            private String lastName;

                            public Customer(String firstName,
                                            String lastName) {
                                this.firstName = firstName;
                                this.lastName = lastName;
                            }

                            public String getFirstName() {
                                return firstName;
                            }

                            public void setFirstName(String firstName) {
                                this.firstName = firstName;
                            }

                            public String getLastName() {
                                return lastName;
                            }
                            public void setLastName(String lastName) {
                                this.lastName = lastName;
                            }
                        }

               .. container:: paragraph

                  This is the completed JavaFX ``Application`` subclass
                  and main.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class VBoxAndHBoxApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox();

                                HBox topControls = new HBox();
                                VBox.setMargin( topControls, new Insets(10.0d) );
                                topControls.setAlignment( Pos.BOTTOM_LEFT );

                                Button btnRefresh = new Button("Refresh");

                                HBox topRightControls = new HBox();
                                HBox.setHgrow(topRightControls, Priority.ALWAYS );
                                topRightControls.setAlignment( Pos.BOTTOM_RIGHT );
                                Hyperlink signOutLink = new Hyperlink("Sign Out");
                                topRightControls.getChildren().add( signOutLink );

                                topControls.getChildren().addAll( btnRefresh, topRightControls );

                                TableView<Customer> tblCustomers = new TableView<>();
                                tblCustomers.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);
                                VBox.setMargin( tblCustomers, new Insets(0.0d, 10.0d, 10.0d, 10.0d) );
                                VBox.setVgrow( tblCustomers, Priority.ALWAYS );

                                TableColumn<Customer, String> lastNameCol = new TableColumn<>("Last Name");
                                lastNameCol.setCellValueFactory(new PropertyValueFactory<>("lastName"));

                                TableColumn<Customer, String> firstNameCol = new TableColumn<>("First Name");
                                firstNameCol.setCellValueFactory(new PropertyValueFactory<>("firstName"));

                                tblCustomers.getColumns().addAll( lastNameCol, firstNameCol );

                                Separator sep = new Separator();

                                HBox bottomControls = new HBox();
                                bottomControls.setAlignment(Pos.BOTTOM_RIGHT );
                                VBox.setMargin( bottomControls, new Insets(10.0d) );

                                Button btnClose = new Button("Close");

                                bottomControls.getChildren().add( btnClose );

                                vbox.getChildren().addAll(
                                        topControls,
                                        tblCustomers,
                                        sep,
                                        bottomControls
                                );

                                Scene scene = new Scene(vbox );

                                primaryStage.setScene( scene );
                                primaryStage.setWidth( 800 );
                                primaryStage.setHeight( 600 );
                                primaryStage.setTitle("VBox and HBox App");
                                primaryStage.setOnShown( (evt) -> loadTable(tblCustomers) );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }

                            private void loadTable(TableView<Customer> tblCustomers) {
                                tblCustomers.getItems().add(new Customer("George", "Washington"));
                                tblCustomers.getItems().add(new Customer("Abe", "Lincoln"));
                                tblCustomers.getItems().add(new Customer("Thomas", "Jefferson"));
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.2. StackPane
               :name: _stackpane

            .. container:: paragraph

               ``StackPane`` lays out its children one on top of
               another. The last added ``Node`` is the topmost. By
               default, ``StackPane`` will align the children using
               ``Pos.CENTER``, as can be seen in the following image,
               where the 3 children are (in the order of addition):
               ``Rectangle``, ``Circle`` and ``Button``.

            .. container:: imageblock

               .. container:: content

                  |stackpane center|

            .. container:: paragraph

               This image was produced by the following snippet:

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class StackPaneApp extends Application {
                         @Override
                         public void start(Stage stage) throws Exception {
                             StackPane pane = new StackPane(
                                     new Rectangle(200, 100, Color.BLACK),
                                     new Circle(40, Color.RED),
                                     new Button("Hello StackPane")
                             );

                             stage.setScene(new Scene(pane, 300, 300));
                             stage.show();
                         }

                         public static void main(String[] args) {
                             launch(args);
                         }
                     }

            .. container:: paragraph

               We can change the default alignment by adding
               ``pane.setAlignment(Pos.CENTER_LEFT);`` to produce the
               following effect:

            .. container:: imageblock

               .. container:: content

                  |stackpane left|

         .. container:: sect2

            .. rubric:: 4.3. Absolute Positioning with Pane
               :name: _absolute_positioning_with_pane

            .. container:: paragraph

               Containers like ``VBox`` or ``BorderPane`` align and
               distribute their children. The superclass ``Pane`` is
               also a container, but does not impose an order on its
               children. The children position themselves through
               properties like x, centerX, and layoutX. This is called
               absolute positioning and it is a technique to place a
               ``Shape`` or a ``Node`` at a certain location on the
               screen.

            .. container:: paragraph

               This screenshot shows an About View. The About View
               contains a ``Hyperlink`` in the middle of the screen
               "About this App". The About View uses several JavaFX
               shapes to form a design which is cropped to appear like a
               business card.

            .. container:: imageblock

               .. container:: content

                  |paneapp about view|

            .. container:: sect3

               .. rubric:: 4.3.1. Pane Size
                  :name: _pane_size

               .. container:: paragraph

                  Unlike most containers, ``Pane`` resizes to fit its
                  contents and not the other way around. This picture is
                  a screenshot from Scenic View taken prior to adding
                  the lower-right Arc. The ``Pane`` is the yellow
                  highlighted area. Notice that it does not take up the
                  full ``Stage``.

               .. container:: imageblock

                  .. container:: content

                     |paneapp pane size scenicview|

               .. container:: paragraph

                  This is a screenshot taken after the lower-right
                  ``Arc`` was added. This ``Arc`` was placed closer to
                  the bottom-right edge of the ``Stage``. This forces
                  the Pane to stretch to accommodate the expanded
                  contents.

               .. container:: imageblock

                  .. container:: content

                     |paneapp scenicview full stage|

            .. container:: sect3

               .. rubric:: 4.3.2. The Pane
                  :name: _the_pane

               .. container:: paragraph

                  The outermost container of the About View is a
                  ``VBox`` whose sole contents are the ``Pane``. The
                  ``VBox`` is used to fit the entire ``Stage`` and
                  provides a background.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        VBox vbox = new VBox();
                        vbox.setPadding( new Insets( 10 ) );
                        vbox.setBackground(
                            new Background(
                                new BackgroundFill(Color.BLACK, new CornerRadii(0), new Insets(0))
                                ));

                        Pane p = new Pane();

            .. container:: sect3

               .. rubric:: 4.3.3. The Shapes
                  :name: _the_shapes

               .. container:: paragraph

                  In the upper left of the screen, there is a group of 4
                  'Arcs' and 1 'Circle'. This code positions largeArc at
                  (0,0) through the centerX and centerY arguments in the
                  ``Arc`` constructor. Notice that backgroundArc is also
                  positioned at (0,0) and appears underneath largeArc.
                  ``Pane`` does not attempt to deconflict overlapping
                  shapes and in this case, overlapping is what is
                  wanted. smArc1 is placed at (0,160) which is down on
                  the Y axis. smArc2 is positioned at (160,0) which is
                  right on the X axis. smCircle is positioned at the
                  same distance as smArc1 and smArc2, but at a 45 degree
                  angle.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Arc largeArc = new Arc(0, 0, 100, 100, 270, 90);
                        largeArc.setType(ArcType.ROUND);

                        Arc backgroundArc = new Arc(0, 0, 160, 160, 270, 90 );
                        backgroundArc.setType( ArcType.ROUND );

                        Arc smArc1 = new Arc( 0, 160, 30, 30, 270, 180);
                        smArc1.setType(ArcType.ROUND);

                        Circle smCircle = new Circle(160/Math.sqrt(2.0), 160/Math.sqrt(2.0), 30,Color.web("0xF2A444"));

                        Arc smArc2 = new Arc( 160, 0, 30, 30, 180, 180);
                        smArc2.setType(ArcType.ROUND);

               .. container:: paragraph

                  The lower-right ``Arc`` is positioned based on the
                  overall height of the ``Stage``. The 20 subtracted
                  from the height is the 10 pixel ``Insets`` from the
                  ``VBox`` (10 for left + 10 for right).

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Arc medArc = new Arc(568-20, 320-20, 60, 60, 90, 90);
                        medArc.setType(ArcType.ROUND);

                        primaryStage.setWidth( 568 );
                        primaryStage.setHeight( 320 );

            .. container:: sect3

               .. rubric:: 4.3.4. The Hyperlink
                  :name: _the_hyperlink

               .. container:: paragraph

                  The ``Hyperlink`` is positioned offset the center
                  (284,160) which is the width and height of the
                  ``Stage`` both divided by two. This positions the text
                  of the ``Hyperlink`` in the lower-right quadrant of
                  the screen, so an offset is needed based on the
                  ``Hyperlink`` width and height. The dimensions are not
                  available for the ``Hyperlink`` until the screen is
                  shown, so I make a post-shown adjustment to the
                  position.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Hyperlink hyperlink = new Hyperlink("About this App");

                        primaryStage.setOnShown( (evt) -> {
                             hyperlink.setLayoutX( 284 - (hyperlink.getWidth()/3) );
                             hyperlink.setLayoutY( 160 - hyperlink.getHeight() );
                        });

               .. container:: paragraph

                  The ``Hyperlink`` is not placed in the true center of
                  the screen. The layoutX value is based on a
                  divide-by-three operation that moves it away from the
                  upper-left design.

            .. container:: sect3

               .. rubric:: 4.3.5. Z-Order
                  :name: _z_order

               .. container:: paragraph

                  As mentioned earlier, ``Pane`` supports overlapping
                  children. This picture shows the About View with depth
                  added to the upper-left design. The smaller ``Arcs``
                  and ``Circle`` hover over backgroundArc as does
                  largeArc.

               .. container:: imageblock

                  .. container:: content

                     |paneapp zorder|

               .. container:: paragraph

                  The z-order in this example is determined by the order
                  in which the children are added to the ``Pane``.
                  backgroundArc is obscured by items added later, most
                  notably largeArc. To rearrange the children, use the
                  toFront() and toBack() methods after the items have
                  been added to the ``Pane``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        p.getChildren().addAll( backgroundArc, largeArc, smArc1, smCircle, smArc2, hyperlink, medArc );

                        vbox.getChildren().add( p );

               .. container:: paragraph

                  When starting JavaFX, it is tempting to build an
                  absolute layout. Be aware that absolute layouts are
                  brittle, often breaking when the screen is resized or
                  when items are added during the software maintenance
                  phase. Yet, there are good reasons for using absolute
                  positioning. Gaming is one such usage. In a game, you
                  can adjust the (x,y) coordinate of a 'Shape' to move a
                  game piece around the screen. This article
                  demonstrated the JavaFX class ``Pane`` which provides
                  absolute positioning to any shape-driven UI.

            .. container:: sect3

               .. rubric:: 4.3.6. Completed Code
                  :name: _completed_code

               .. container:: paragraph

                  This is the completed JavaFX ``Application`` subclass
                  and main.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class PaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox();
                                vbox.setPadding( new Insets( 10 ) );
                                vbox.setBackground(
                                    new Background(
                                        new BackgroundFill(Color.BLACK, new CornerRadii(0), new Insets(0))
                                        ));

                                Pane p = new Pane();

                                Arc largeArc = new Arc(0, 0, 100, 100, 270, 90);
                                largeArc.setFill(Color.web("0x59291E"));
                                largeArc.setType(ArcType.ROUND);

                                Arc backgroundArc = new Arc(0, 0, 160, 160, 270, 90 );
                                backgroundArc.setFill( Color.web("0xD96F32") );
                                backgroundArc.setType( ArcType.ROUND );

                                Arc smArc1 = new Arc( 0, 160, 30, 30, 270, 180);
                                smArc1.setFill(Color.web("0xF2A444"));
                                smArc1.setType(ArcType.ROUND);

                                Circle smCircle = new Circle(
                                    160/Math.sqrt(2.0), 160/Math.sqrt(2.0), 30,Color.web("0xF2A444")
                                    );

                                Arc smArc2 = new Arc( 160, 0, 30, 30, 180, 180);
                                smArc2.setFill(Color.web("0xF2A444"));
                                smArc2.setType(ArcType.ROUND);

                                Hyperlink hyperlink = new Hyperlink("About this App");
                                hyperlink.setFont( Font.font(36) );
                                hyperlink.setTextFill( Color.web("0x3E6C93") );
                                hyperlink.setBorder( Border.EMPTY );

                                Arc medArc = new Arc(568-20, 320-20, 60, 60, 90, 90);
                                medArc.setFill(Color.web("0xD9583B"));
                                medArc.setType(ArcType.ROUND);

                                p.getChildren().addAll( backgroundArc, largeArc, smArc1, smCircle,
                                    smArc2, hyperlink, medArc );

                                vbox.getChildren().add( p );

                                Scene scene = new Scene(vbox);
                                scene.setFill(Color.BLACK);

                                primaryStage.setTitle("Pane App");
                                primaryStage.setScene( scene );
                                primaryStage.setWidth( 568 );
                                primaryStage.setHeight( 320 );
                                primaryStage.setOnShown( (evt) -> {
                                     hyperlink.setLayoutX( 284 - (hyperlink.getWidth()/3) );
                                     hyperlink.setLayoutY( 160 - hyperlink.getHeight() );
                                });
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.4. Clipping
               :name: _clipping

            .. container:: paragraph

               Most JavaFX layout containers (base class
               `Region <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/Region.html>`__)
               automatically position and size their children, so
               clipping any child contents that might protrude beyond
               the container’s layout bounds is never an issue. The big
               exception is
               `Pane <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/Pane.html>`__,
               a direct subclass of ``Region`` and the base class for
               all layout containers with publicly accessible children.
               Unlike its subclasses Pane does not attempt to arrange
               its children but simply accepts explicit user positioning
               and sizing.

            .. container:: paragraph

               This makes ``Pane`` suitable as a drawing surface,
               similar to
               `Canvas <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/canvas/Canvas.html>`__
               but rendering user-defined
               `Shape <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/shape/Shape.html>`__
               children rather than direct drawing commands. The problem
               is that drawing surfaces are usually expected to
               automatically clip their contents at their bounds.
               ``Canvas`` does this by default but ``Pane`` does not.
               From the last paragraph of the Javadoc entry for
               ``Pane``:

            .. container:: quoteblock

                  Pane does not clip its content by default, so it is
                  possible that children’s bounds may extend outside its
                  own bounds, either if children are positioned at
                  negative coordinates or the pane is resized smaller
                  than its preferred size.

            .. container:: paragraph

               This quote is somewhat misleading. Children are rendered
               (wholly or partially) outside their parent ``Pane``
               'whenever' their combination of position and size extends
               beyond the parent’s bounds, regardless of whether the
               position is negative or the ``Pane`` is ever resized.
               Quite simply, ``Pane`` only provides a coordinate shift
               to its children, based on its upper-left corner – but its
               layout bounds are completely ignored while rendering
               children. Note that the Javadoc for all ``Pane``
               subclasses (that I checked) includes a similar warning.
               They don’t clip their contents either, but as mentioned
               above this is not usually a problem for them because they
               automatically arrange their children.

            .. container:: paragraph

               So to properly use ``Pane`` as a drawing surface for
               ``Shapes``, we need to manually clip its contents. This
               is somewhat complex, especially when a visible border is
               involved. I wrote a small demo application to illustrate
               the default behavior and various steps to fix it. You can
               download it as
               `PaneDemo.zip <http://kynosarges.org/misc/PaneDemo.zip>`__
               which contains a project for NetBeans 8.2 and Java SE
               8u112. The following sections explain each step with
               screenshots and pertinent code snippets.

            .. container:: sect3

               .. rubric:: 4.4.1. Default Behavior
                  :name: _default_behavior

               .. container:: paragraph

                  Starting up, PaneDemo shows what happens when you put
                  an ``Ellipse`` shape into a ``Pane`` that’s too small
                  to contain it entirely. The ``Pane`` has a nice thick
                  rounded
                  `Border <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/layout/Border.html>`__
                  to visualize its area. The application window is
                  resizable, with the ``Pane`` size following the window
                  size. The three buttons on the left are used to switch
                  to the other steps in the demo; click Default (Alt+D)
                  to revert to the default output from a later step.

               .. container:: imageblock

                  .. container:: content

                     |clipping extends|

               .. container:: paragraph

                  As you can see, the ``Ellipse`` overwrites its
                  parent’s ``Border`` and protrudes well beyond it. The
                  following code is used to generate the default view.
                  It’s split into several smaller methods, and a
                  constant for the ``Border`` corner radius, because
                  they will be referenced in the next steps.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        static final double BORDER_RADIUS = 4;

                        static Border createBorder() {
                            return new Border(
                                    new BorderStroke(Color.BLACK, BorderStrokeStyle.SOLID,
                                    new CornerRadii(BORDER_RADIUS), BorderStroke.THICK));
                        }

                        static Shape createShape() {
                            final Ellipse shape = new Ellipse(50, 50);
                            shape.setCenterX(80);
                            shape.setCenterY(80);
                            shape.setFill(Color.LIGHTCORAL);
                            shape.setStroke(Color.LIGHTCORAL);
                            return shape;
                        }

                        static Region createDefault() {
                            final Pane pane = new Pane(createShape());
                            pane.setBorder(createBorder());
                            pane.setPrefSize(100, 100);
                            return pane;
                        }

            .. container:: sect3

               .. rubric:: 4.4.2. Simple Clipping
                  :name: _simple_clipping

               .. container:: paragraph

                  Surprisingly, there is no predefined option to have a
                  resizable ``Region`` automatically clip its children
                  to its current size. Instead, you need to use the
                  basic
                  `clipProperty <https://docs.oracle.com/javase/8/javafx/api/javafx/scene/Node.html#clipProperty>`__
                  defined on ``Node`` and keep it updated manually to
                  reflect changing layout bounds. Method
                  ``clipChildren`` below show how this works (with
                  Javadoc because you may want to reuse it in your own
                  code):

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        /**
                         * Clips the children of the specified {@link Region} to its current size.
                         * This requires attaching a change listener to the region’s layout bounds,
                         * as JavaFX does not currently provide any built-in way to clip children.
                         *
                         * @param region the {@link Region} whose children to clip
                         * @param arc the {@link Rectangle#arcWidth} and {@link Rectangle#arcHeight}
                         *            of the clipping {@link Rectangle}
                         * @throws NullPointerException if {@code region} is {@code null}
                         */
                        static void clipChildren(Region region, double arc) {

                            final Rectangle outputClip = new Rectangle();
                            outputClip.setArcWidth(arc);
                            outputClip.setArcHeight(arc);
                            region.setClip(outputClip);

                            region.layoutBoundsProperty().addListener((ov, oldValue, newValue) -> {
                                outputClip.setWidth(newValue.getWidth());
                                outputClip.setHeight(newValue.getHeight());
                            });
                        }

                        static Region createClipped() {
                            final Pane pane = new Pane(createShape());
                            pane.setBorder(createBorder());
                            pane.setPrefSize(100, 100);

                            // clipped children still overwrite Border!
                            clipChildren(pane, 3 * BORDER_RADIUS);

                            return pane;
                        }

               .. container:: paragraph

                  Choose Clipped (Alt+C) in PaneDemo to render the
                  corresponding output. Here’s how that looks:

               .. container:: imageblock

                  .. container:: content

                     |clipping clipped|

               .. container:: paragraph

                  That’s better. The ``Ellipse`` no longer protrudes
                  beyond the ``Pane`` – but still overwrites its Border.
                  Also note that we had to manually specify an estimated
                  corner rounding for the clipping ``Rectangle`` in
                  order to reflect the rounded ``Border`` corners. This
                  estimate is 3 \* BORDER_RADIUS because the corner
                  radius specified on ``Border`` actually defines its
                  inner radius, and the outer radius (which we need
                  here) will be greater depending on the ``Border``
                  thickness. (You could compute the outer radius exactly
                  if you really wanted to, but I skipped that for the
                  demo application.)

            .. container:: sect3

               .. rubric:: 4.4.3. Nested Panes
                  :name: _nested_panes

               .. container:: paragraph

                  Can we somehow specify a clipping region that excludes
                  a visible\` Border\`? Not on the drawing ``Pane``
                  itself, as far as I can tell. The clipping region
                  affects the ``Border`` as well as other contents, so
                  if you were to shrink the clipping region to exclude
                  it you would no longer see any ``Border`` at all.
                  Instead, the solution is to create two nested panes:
                  one inner drawing ``Pane`` without ``Border`` that
                  clips exactly to its bounds, and one outer
                  ``StackPane`` that defines the visible ``Border`` and
                  also resizes the drawing ``Pane``. Here is the final
                  code:

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        static Region createNested() {
                            // create drawing Pane without Border or size
                            final Pane pane = new Pane(createShape());
                            clipChildren(pane, BORDER_RADIUS);

                            // create sized enclosing Region with Border
                            final Region container = new StackPane(pane);
                            container.setBorder(createBorder());
                            container.setPrefSize(100, 100);
                            return container;
                        }

               .. container:: paragraph

                  Choose Nested (Alt+N) in PaneDemo to render the
                  corresponding output. Now everything looks as it
                  should:

               .. container:: imageblock

                  .. container:: content

                     |clipping nested|

               .. container:: paragraph

                  As an added bonus, we no longer need to guesstimate a
                  correct corner radius for the clipping ``Rectangle``.
                  We now clip to the inner rather than outer
                  circumference of our visible ``Border``, so we can
                  directly reuse its inner corner radius. Should you
                  specify multiple different corner radii or an
                  otherwise more complex ``Border`` you’d have to define
                  a correspondingly more complex clipping ``Shape``.

               .. container:: paragraph

                  There is one small caveat. The top-left corner of the
                  drawing ``Pane`` to which all child coordinates are
                  relative now starts *within* the visible ``Border``.
                  If you retroactively change a single ``Pane`` with
                  visible ``Border`` to nested panes as shown here, all
                  children will exhibit a slight positioning shift
                  corresponding to the ``Border`` thickness.

         .. container:: sect2

            .. rubric:: 4.5. GridPane
               :name: _gridpane

            .. container:: paragraph

               Forms in business applications often use a layout that
               mimics a database record. For each column in a table, a
               header is added on the left-hand side which is matched
               with a row value on the right-hand side. JavaFX has a
               special purpose control called ``GridPane`` for this type
               of layout that keeps contents aligned by row and column.
               ``GridPane`` also supports spanning for more complex
               layouts.

            .. container:: paragraph

               This screenshot shows a basic ``GridPane`` layout. On the
               left-hand side of the form, there is a column of field
               names: Email, Priority, Problem, Description. On the
               right-hand side of the form, there is a column of
               controls which will display the value of the
               corresponding field. The field names are of type
               ``Label`` and the value controls are a mixture including
               ``TextField``, ``TextArea``, and ``ComboBox``.

            .. container:: imageblock

               .. container:: content

                  |gridpaneapp|

            .. container:: paragraph

               The following code shows the objects created for the
               form. "vbox" is the root of the ``Scene`` and will also
               contain the ``ButtonBar`` at the base of the form.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     VBox vbox = new VBox();

                     GridPane gp = new GridPane();

                     Label lblTitle = new Label("Support Ticket");

                     Label lblEmail = new Label("Email");
                     TextField tfEmail = new TextField();

                     Label lblPriority = new Label("Priority");
                     ObservableList<String> priorities = FXCollections.observableArrayList("Medium", "High", "Low");
                     ComboBox<String> cbPriority = new ComboBox<>(priorities);

                     Label lblProblem = new Label("Problem");
                     TextField tfProblem = new TextField();

                     Label lblDescription = new Label("Description");
                     TextArea taDescription = new TextArea();

            .. container:: paragraph

               GridPane has a handy method ``setGridLinesVisible()``
               which shows the grid structure and gutters. It is
               especially useful in more complex layouts where spanning
               is involved because gaps in the row/col assignments can
               cause shifts in the layout.

            .. container:: imageblock

               .. container:: content

                  |gridpaneapp lines|

            .. container:: sect3

               .. rubric:: 4.5.1. Spacing
                  :name: _spacing

               .. container:: paragraph

                  As a container, ``GridPane`` has a padding property
                  that can be set to surround the ``GridPane`` contents
                  with whitespace. "padding" will take an ``Inset``
                  object as a parameter. In this example, 10 pixels of
                  whitespace is applied to all sides so a short form
                  constructor is used for ``Inset``.

               .. container:: paragraph

                  Within the ``GridPane``, vgap and hgap control the
                  gutters. The hgap is set to 4 to keep the fields close
                  to their values. vgap is slightly larger to help with
                  mouse navigation.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        gp.setPadding( new Insets(10) );
                        gp.setHgap( 4 );
                        gp.setVgap( 8 );

               .. container:: paragraph

                  In order to keep the lower part of the form
                  consistent, a ``Priority`` is set on the VBox. This
                  will *not resize* the individual rows however. For
                  individual resize specifications, use
                  ``ColumnConstraints`` and ``RowConstraints``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        VBox.setVgrow(gp, Priority.ALWAYS );

            .. container:: sect3

               .. rubric:: 4.5.2. Adding Items
                  :name: _adding_items

               .. container:: paragraph

                  Unlike containers like ``BorderPane`` or ``HBox``,
                  Nodes need to specify their position within the
                  ``GridPane``. This is done with the ``add()`` method
                  on the ``GridPane`` and not the add method on a
                  container children property. This form of the
                  ``GridPane`` ``add()`` method takes a zero-based
                  column position and a zero-based row position. This
                  code puts two statements on the same line for
                  readability.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        gp.add( lblTitle,       1, 1);  // empty item at 0,0
                        gp.add( lblEmail,       0, 2); gp.add(tfEmail,        1, 2);
                        gp.add( lblPriority,    0, 3); gp.add( cbPriority,    1, 3);
                        gp.add( lblProblem,     0, 4); gp.add( tfProblem,     1, 4);
                        gp.add( lblDescription, 0, 5); gp.add( taDescription, 1, 5);

               .. container:: paragraph

                  lblTitle is put in the second column of the first row.
                  There is no entry in the first column of the first
                  row.

               .. container:: paragraph

                  Subsequent additions are presented in pairs. Field
                  name ``Label`` objects are put in the first column
                  (column index=0) and value controls are put in the
                  second column (column index=1). The rows are added by
                  the incremented second value. For example, lblPriority
                  is put in the fourth row along with its ``ComboBox``.

               .. container:: paragraph

                  ``GridPane`` is an important container in JavaFX
                  business application design. When you have a
                  requirement for name / value pairs, ``GridPane`` will
                  be an easy way to support the strong column
                  orientation of a traditional form.

            .. container:: sect3

               .. rubric:: 4.5.3. Completed Code
                  :name: _completed_code_2

               .. container:: paragraph

                  The following class is the complete code form the
                  example. This include the definition of the
                  ``ButtonBar`` which was not presented in the preceding
                  sections focused on ``GridPane``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class GridPaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox();

                                GridPane gp = new GridPane();
                                gp.setPadding( new Insets(10) );
                                gp.setHgap( 4 );
                                gp.setVgap( 8 );

                                VBox.setVgrow(gp, Priority.ALWAYS );

                                Label lblTitle = new Label("Support Ticket");

                                Label lblEmail = new Label("Email");
                                TextField tfEmail = new TextField();

                                Label lblPriority = new Label("Priority");
                                ObservableList<String> priorities =
                                    FXCollections.observableArrayList("Medium", "High", "Low");
                                ComboBox<String> cbPriority = new ComboBox<>(priorities);

                                Label lblProblem = new Label("Problem");
                                TextField tfProblem = new TextField();

                                Label lblDescription = new Label("Description");
                                TextArea taDescription = new TextArea();

                                gp.add( lblTitle,       1, 1);  // empty item at 0,0
                                gp.add( lblEmail,       0, 2); gp.add(tfEmail,        1, 2);
                                gp.add( lblPriority,    0, 3); gp.add( cbPriority,    1, 3);
                                gp.add( lblProblem,     0, 4); gp.add( tfProblem,     1, 4);
                                gp.add( lblDescription, 0, 5); gp.add( taDescription, 1, 5);

                                Separator sep = new Separator(); // hr

                                ButtonBar buttonBar = new ButtonBar();
                                buttonBar.setPadding( new Insets(10) );

                                Button saveButton = new Button("Save");
                                Button cancelButton = new Button("Cancel");

                                buttonBar.setButtonData(saveButton, ButtonBar.ButtonData.OK_DONE);
                                buttonBar.setButtonData(cancelButton, ButtonBar.ButtonData.CANCEL_CLOSE);

                                buttonBar.getButtons().addAll(saveButton, cancelButton);

                                vbox.getChildren().addAll( gp, sep, buttonBar );

                                Scene scene = new Scene(vbox);

                                primaryStage.setTitle("Grid Pane App");
                                primaryStage.setScene(scene);
                                primaryStage.setWidth( 736 );
                                primaryStage.setHeight( 414  );
                                primaryStage.show();

                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.6. GridPane Spanning
               :name: _gridpane_spanning

            .. container:: paragraph

               For more complex forms implemented with ``GridPane``,
               spanning is supported. Spanning allows a control to claim
               the space of neighboring columns (colspan) and
               neighboring rows (rowspan). This screenshot shows a form
               that extends the example in the previous section. The
               two-column layout of the earlier version has been
               replaced with a multiple-column layout. Fields like
               Problem and Description retain the original structure.
               But controls were added to the rows that formerly held
               only Email and Priority.

            .. container:: imageblock

               .. container:: content

                  |complexgridpaneapp|

            .. container:: paragraph

               Turing the grid lines on, notice that the former two
               column grid is replaced with a six column grid. The third
               row containing six items — 3 field name / value
               pairs — dictates the structure. The rest of the form will
               use spanning in order to fill in the whitespace.

            .. container:: imageblock

               .. container:: content

                  |complexgridpaneapp lines|

            .. container:: paragraph

               The ``VBox`` and ``GridPane`` container objects used in
               this update follow. There is a little more Vgap to help
               the user select the ``ComboBox`` controls.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     GridPane gp = new GridPane();
                     gp.setPadding( new Insets(10) );
                     gp.setHgap( 4 );
                     gp.setVgap( 10 );

                     VBox.setVgrow(gp, Priority.ALWAYS );

            .. container:: paragraph

               These are control creation statements from the updated
               example.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Label lblTitle = new Label("Support Ticket");

                     Label lblEmail = new Label("Email");
                     TextField tfEmail = new TextField();

                     Label lblContract = new Label("Contract");
                     TextField tfContract = new TextField();

                     Label lblPriority = new Label("Priority");
                     ObservableList<String> priorities =
                         FXCollections.observableArrayList("Medium", "High", "Low");
                     ComboBox<String> cbPriority = new ComboBox<>(priorities);

                     Label lblSeverity = new Label("Severity");
                     ObservableList<String> severities =
                         FXCollections.observableArrayList("Blocker", "Workaround", "N/A");
                     ComboBox<String> cbSeverity = new ComboBox<>(severities);

                     Label lblCategory = new Label("Category");
                     ObservableList<String> categories =
                         FXCollections.observableArrayList("Bug", "Feature");
                     ComboBox<String> cbCategory = new ComboBox<>(categories);

                     Label lblProblem = new Label("Problem");
                     TextField tfProblem = new TextField();

                     Label lblDescription = new Label("Description");
                     TextArea taDescription = new TextArea();

            .. container:: paragraph

               As in the earlier version, the controls are added to the
               ``GridPane`` using the ``add()`` method. A column and row
               are specified. In this snippet, the indexing it not
               straightforward as there are gaps expected to be filled
               in by spanning content.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     gp.add( lblTitle,       1, 0);  // empty item at 0,0

                     gp.add( lblEmail,       0, 1);
                     gp.add(tfEmail,         1, 1);
                     gp.add( lblContract,    4, 1 );
                     gp.add( tfContract,     5, 1 );

                     gp.add( lblPriority,    0, 2);
                     gp.add( cbPriority,     1, 2);
                     gp.add( lblSeverity,    2, 2);
                     gp.add( cbSeverity,     3, 2);
                     gp.add( lblCategory,    4, 2);
                     gp.add( cbCategory,     5, 2);

                     gp.add( lblProblem,     0, 3); gp.add( tfProblem,     1, 3);
                     gp.add( lblDescription, 0, 4); gp.add( taDescription, 1, 4);

            .. container:: paragraph

               Finally, the spanning definitions are set using a static
               method on ``GridPane``. There is a similar method to do
               row spanning. Title will take up 5 columns as will
               Problem and Description. Email shares a row with
               Contract, but will take up more columns. The third row of
               ComboBoxes is a set of three field/value pairs each
               taking up one column.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     GridPane.setColumnSpan( lblTitle, 5 );
                     GridPane.setColumnSpan( tfEmail, 3 );
                     GridPane.setColumnSpan( tfProblem, 5 );
                     GridPane.setColumnSpan( taDescription, 5 );

            .. container:: paragraph

               Alternatively, a variation of the add() method will
               columnSpan and rowSpan arguments to avoid the subsequent
               static method call.

            .. container:: paragraph

               This expanded ``GridPane`` example demonstrated column
               spanning. The same capability is available for row
               spanning which would allow a control to claim additional
               vertical space. Spanning keeps controls aligned even in
               cases where the number of items in a given row (or
               column) varies. To keep the focus on the spanning topic,
               this grid allowed the column widths to vary. The article
               on ``ColumnConstraints`` and ``RowConstraints`` will
               focus on building true modular and column typographical
               grids by better controlling the columns (and rows).

            .. container:: sect3

               .. rubric:: 4.6.1. Completed Code
                  :name: _completed_code_3

               .. container:: paragraph

                  The following is the completed code for the spanning
                  GridPane example.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ComplexGridPaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox();

                                GridPane gp = new GridPane();
                                gp.setPadding( new Insets(10) );
                                gp.setHgap( 4 );
                                gp.setVgap( 10 );

                                VBox.setVgrow(gp, Priority.ALWAYS );

                                Label lblTitle = new Label("Support Ticket");

                                Label lblEmail = new Label("Email");
                                TextField tfEmail = new TextField();

                                Label lblContract = new Label("Contract");
                                TextField tfContract = new TextField();

                                Label lblPriority = new Label("Priority");
                                ObservableList<String> priorities =
                                    FXCollections.observableArrayList("Medium", "High", "Low");
                                ComboBox<String> cbPriority = new ComboBox<>(priorities);

                                Label lblSeverity = new Label("Severity");
                                ObservableList<String> severities = FXCollections.observableArrayList("Blocker", "Workaround", "N/A");
                                ComboBox<String> cbSeverity = new ComboBox<>(severities);

                                Label lblCategory = new Label("Category");
                                ObservableList<String> categories = FXCollections.observableArrayList("Bug", "Feature");
                                ComboBox<String> cbCategory = new ComboBox<>(categories);

                                Label lblProblem = new Label("Problem");
                                TextField tfProblem = new TextField();

                                Label lblDescription = new Label("Description");
                                TextArea taDescription = new TextArea();

                                gp.add( lblTitle,       1, 0);  // empty item at 0,0

                                gp.add( lblEmail,       0, 1);
                                gp.add(tfEmail,         1, 1);
                                gp.add( lblContract,    4, 1 );
                                gp.add( tfContract,     5, 1 );

                                gp.add( lblPriority,    0, 2);
                                gp.add( cbPriority,     1, 2);
                                gp.add( lblSeverity,    2, 2);
                                gp.add( cbSeverity,     3, 2);
                                gp.add( lblCategory,    4, 2);
                                gp.add( cbCategory,     5, 2);

                                gp.add( lblProblem,     0, 3); gp.add( tfProblem,     1, 3);
                                gp.add( lblDescription, 0, 4); gp.add( taDescription, 1, 4);

                                GridPane.setColumnSpan( lblTitle, 5 );
                                GridPane.setColumnSpan( tfEmail, 3 );
                                GridPane.setColumnSpan( tfProblem, 5 );
                                GridPane.setColumnSpan( taDescription, 5 );

                                Separator sep = new Separator(); // hr

                                ButtonBar buttonBar = new ButtonBar();
                                buttonBar.setPadding( new Insets(10) );

                                Button saveButton = new Button("Save");
                                Button cancelButton = new Button("Cancel");

                                buttonBar.setButtonData(saveButton, ButtonBar.ButtonData.OK_DONE);
                                buttonBar.setButtonData(cancelButton, ButtonBar.ButtonData.CANCEL_CLOSE);

                                buttonBar.getButtons().addAll(saveButton, cancelButton);

                                vbox.getChildren().addAll( gp, sep, buttonBar );

                                Scene scene = new Scene(vbox);

                                primaryStage.setTitle("Grid Pane App");
                                primaryStage.setScene(scene);
                                primaryStage.setWidth( 736 );
                                primaryStage.setHeight( 414  );
                                primaryStage.show();

                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.7. GridPane ColumnConstraints and
               RowConstraints
               :name: _gridpane_columnconstraints_and_rowconstraints

            .. container:: paragraph

               Previous articles on ``GridPane`` showed how to create a
               two-column layout with field names on the left-hand side
               and field values on the right-hand side. That example was
               expanded to add more controls to a given row and to use
               spanning handle gaps in content. This article introduces
               a pair of JavaFX classes ``ColumnConstraints`` and
               ``RowConstraints``. These classes give additional
               specification to a row or column. In this example, a row
               containing a ``TextArea`` will be given all extra space
               when the window is resized. The two columns will be set
               to equals widths.

            .. container:: paragraph

               This screenshot shows an example modified from previous
               articles. The demo program for this article has a rotated
               feel whereby the field names are paired with the field
               values vertically (on top of the values) rather than
               horizontally. Row spanning and column spanning is used to
               align items that are larger than a single cell.

            .. container:: imageblock
               :name: initial_image

               .. container:: content

                  |constraintsgridpaneapp 1 annotated|

            .. container:: paragraph

               The red rectangles and text are not part of the UI. They
               are identifying sections of the screen that will be
               addressed later with ColumnConstraints and RowConstaints.

            .. container:: paragraph

               This code is the creation of the ``Scene`` root and
               ``GridPane`` objects.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     VBox vbox = new VBox();

                     GridPane gp = new GridPane();
                     gp.setPadding( new Insets(10) );
                     gp.setHgap( 4 );
                     gp.setVgap( 10 );

                     VBox.setVgrow(gp, Priority.ALWAYS );

            .. container:: paragraph

               This code creates the UI controls objects used in the
               article. Notice that Priority is now implemented as a
               ``VBox`` containing RadioButtons.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Label lblTitle = new Label("Support Ticket");

                     Label lblEmail = new Label("Email");
                     TextField tfEmail = new TextField();

                     Label lblContract = new Label("Contract");
                     TextField tfContract = new TextField();

                     Label lblPriority = new Label("Priority");
                     RadioButton rbMedium = new RadioButton("Medium");
                     RadioButton rbHigh = new RadioButton("High");
                     RadioButton rbLow = new RadioButton("Low");
                     VBox priorityVBox = new VBox();
                     priorityVBox.setSpacing( 2 );
                     GridPane.setVgrow(priorityVBox, Priority.SOMETIMES);
                     priorityVBox.getChildren().addAll( lblPriority, rbMedium, rbHigh, rbLow );

                     Label lblSeverity = new Label("Severity");
                     ObservableList<String> severities =
                         FXCollections.observableArrayList("Blocker", "Workaround", "N/A");
                     ComboBox<String> cbSeverity = new ComboBox<>(severities);

                     Label lblCategory = new Label("Category");
                     ObservableList<String> categories =
                         FXCollections.observableArrayList("Bug", "Feature");
                     ComboBox<String> cbCategory = new ComboBox<>(categories);

                     Label lblProblem = new Label("Problem");
                     TextField tfProblem = new TextField();

                     Label lblDescription = new Label("Description");
                     TextArea taDescription = new TextArea();

            .. container:: paragraph

               The Label and value control pairings of Email, Contract,
               Problem, and Description are put in a single column. They
               should take the full width of the ``GridPane`` so each
               has its columnSpan set to 2.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     GridPane.setColumnSpan( tfEmail, 2 );
                     GridPane.setColumnSpan( tfContract, 2 );
                     GridPane.setColumnSpan( tfProblem, 2 );
                     GridPane.setColumnSpan( taDescription, 2 );

            .. container:: paragraph

               The new Priority RadioButtons are matched horizontally
               with four controls for Severity and Category. This
               rowSpan setting instructs JavaFX to put the VBox
               containing the RadioButton in a merged cell that is four
               rows in height.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     GridPane.setRowSpan( priorityVBox, 4 );

            .. container:: sect3

               .. rubric:: 4.7.1. Row Constraints
                  :name: _row_constraints

               .. container:: paragraph

                  At this point, the code reflects the UI screenshot
                  presented in `Example App Using Row and Column
                  Spanning <#initial_image>`__. To reallocate the extra
                  space at the base of the form, use a RowConstraints
                  object to set a Priority.ALWAYS on the row of the
                  ``TextArea``. This will result in the ``TextArea``
                  growing to fill the available space with something
                  usable.

               .. container:: imageblock

                  .. container:: content

                     |constraintsgridpaneapp description|

               .. container:: paragraph

                  This code is a ``RowConstraints`` object to the
                  ``GridPane`` for the ``TextArea``. Prior to the
                  setter, ``RowConstraints`` objects are allocated for
                  all of the other rows. The set method of
                  ``getRowConstraints()`` will throw an index exception
                  when you specify row 12 without first allocating an
                  object.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        RowConstraints taDescriptionRowConstraints = new RowConstraints();
                        taDescriptionRowConstraints.setVgrow(Priority.ALWAYS);

                        for( int i=0; i<13; i++ ) {
                            gp.getRowConstraints().add( new RowConstraints() );
                        }

                        gp.getRowConstraints().set( 12, taDescriptionRowConstraints );

               .. container:: paragraph

                  As an alternative syntax, there is a setConstraints()
                  method available from the ``GridPane``. This will pass
                  in several values and obviates the need for the
                  dedicated columnSpan set call for the ``TextArea``.
                  The ``RowConstraints`` code from the previous listing
                  will not appear in the finished program.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        gp.setConstraints(taDescription,
                                          0, 12,
                                          2, 1,
                                          HPos.LEFT, VPos.TOP,
                                          Priority.SOMETIMES, Priority.ALWAYS);

               .. container:: paragraph

                  This code identifies the ``Node`` at (0,12) which is
                  the ``TextArea``. The ``TextArea`` will span 2 columns
                  but only 1 row. The HPos and Vpos are set to the TOP
                  LEFT. Finally, the ``Priority`` of the hgrow is
                  SOMETIMES and the vgrow is ALWAYS. Since the
                  ``TextArea`` is the only row with "ALWAYS", it will
                  get the additional space. If there were other ALWAYS
                  settings, the space would be shared among multiple
                  rows.

            .. container:: sect3

               .. rubric:: 4.7.2. Column Constraints
                  :name: _column_constraints

               .. container:: paragraph

                  To properly allocate the space surrounding the
                  Severity and Category controls, ColumnConstraints will
                  be specified. The default behavior allocates less
                  space to the first column because of the smaller
                  Priority RadioButtons. The following wireframe shows
                  the desired layout which has equal columns separated
                  by a gutter of 4 pixels (Hgap).

               .. container:: imageblock

                  .. container:: content

                     |constraintsgridpaneapp wireframe|

               .. container:: paragraph

                  To make the column widths equal, define two
                  ``ColumnConstraint`` objects and use a percentage
                  specifier.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        ColumnConstraints col1 = new ColumnConstraints();
                        col1.setPercentWidth( 50 );
                        ColumnConstraints col2 = new ColumnConstraints();
                        col2.setPercentWidth( 50 );
                        gp.getColumnConstraints().addAll( col1, col2 );

               .. container:: paragraph

                  This is a screenshot of the finished example.

               .. container:: imageblock

                  .. container:: content

                     |constraintsgridpaneapp finished|

               .. container:: paragraph

                  ``GridPane`` is an important control in developing
                  JavaFX business applications. When working on a
                  requirement involving name / value pairs and a single
                  record view, use ``GridPane``. While ``GridPane`` is
                  easier to use than the ``GridBagLayout`` from Swing, I
                  still find that the API is a little inconvenient
                  (assigning own indexes, disassociated constraints).
                  Fortunately, there is Scene Builder which simplifies
                  the construction of this form greatly.

            .. container:: sect3

               .. rubric:: 4.7.3. Completed Code
                  :name: _completed_code_4

               .. container:: paragraph

                  The following is the completed code for the
                  constraints GridPane example.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ConstraintsGridPaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox();

                                GridPane gp = new GridPane();
                                gp.setPadding( new Insets(10) );
                                gp.setHgap( 4 );
                                gp.setVgap( 10 );

                                VBox.setVgrow(gp, Priority.ALWAYS );

                                Label lblTitle = new Label("Support Ticket");

                                Label lblEmail = new Label("Email");
                                TextField tfEmail = new TextField();

                                Label lblContract = new Label("Contract");
                                TextField tfContract = new TextField();

                                Label lblPriority = new Label("Priority");
                                RadioButton rbMedium = new RadioButton("Medium");
                                RadioButton rbHigh = new RadioButton("High");
                                RadioButton rbLow = new RadioButton("Low");
                                VBox priorityVBox = new VBox();
                                priorityVBox.setSpacing( 2 );
                                GridPane.setVgrow(priorityVBox, Priority.SOMETIMES);
                                priorityVBox.getChildren().addAll( lblPriority, rbMedium, rbHigh, rbLow );

                                Label lblSeverity = new Label("Severity");
                                ObservableList<String> severities = FXCollections.observableArrayList("Blocker", "Workaround", "N/A");
                                ComboBox<String> cbSeverity = new ComboBox<>(severities);

                                Label lblCategory = new Label("Category");
                                ObservableList<String> categories = FXCollections.observableArrayList("Bug", "Feature");
                                ComboBox<String> cbCategory = new ComboBox<>(categories);

                                Label lblProblem = new Label("Problem");
                                TextField tfProblem = new TextField();

                                Label lblDescription = new Label("Description");
                                TextArea taDescription = new TextArea();

                                gp.add( lblTitle,       0, 0);

                                gp.add( lblEmail,       0, 1);
                                gp.add(tfEmail,         0, 2);

                                gp.add( lblContract,    0, 3 );
                                gp.add( tfContract,     0, 4 );

                                gp.add( priorityVBox,   0, 5);

                                gp.add( lblSeverity,    1, 5);
                                gp.add( cbSeverity,     1, 6);
                                gp.add( lblCategory,    1, 7);
                                gp.add( cbCategory,     1, 8);

                                gp.add( lblProblem,     0, 9);
                                gp.add( tfProblem,      0, 10);

                                gp.add( lblDescription, 0, 11);
                                gp.add( taDescription,  0, 12);

                                GridPane.setColumnSpan( tfEmail, 2 );
                                GridPane.setColumnSpan( tfContract, 2 );
                                GridPane.setColumnSpan( tfProblem, 2 );

                                GridPane.setRowSpan( priorityVBox, 4 );

                                gp.setConstraints(taDescription,
                                                  0, 12,
                                                  2, 1,
                                                  HPos.LEFT, VPos.TOP,
                                                  Priority.SOMETIMES, Priority.ALWAYS);

                                ColumnConstraints col1 = new ColumnConstraints();
                                col1.setPercentWidth( 50 );
                                ColumnConstraints col2 = new ColumnConstraints();
                                col2.setPercentWidth( 50 );
                                gp.getColumnConstraints().addAll( col1, col2 );

                                Separator sep = new Separator(); // hr

                                ButtonBar buttonBar = new ButtonBar();
                                buttonBar.setPadding( new Insets(10) );

                                Button saveButton = new Button("Save");
                                Button cancelButton = new Button("Cancel");

                                buttonBar.setButtonData(saveButton, ButtonBar.ButtonData.OK_DONE);
                                buttonBar.setButtonData(cancelButton, ButtonBar.ButtonData.CANCEL_CLOSE);

                                buttonBar.getButtons().addAll(saveButton, cancelButton);

                                vbox.getChildren().addAll( gp, sep, buttonBar );

                                Scene scene = new Scene(vbox);

                                primaryStage.setTitle("Grid Pane App");
                                primaryStage.setScene(scene);
                                primaryStage.setWidth( 414 );
                                primaryStage.setHeight( 736  );
                                primaryStage.show();

                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.8. AnchorPane
               :name: _anchorpane

            .. container:: paragraph

               ``AnchorPane`` is a container control that defines its
               layout in terms of edges. When placed in a container, the
               ``AnchorPane`` stretches to fill the available space. The
               children of ``AnchorPane`` express their positions and
               sizes as distances from the edges: Top, Left, Bottom,
               Right. If one or two anchor settings are placed on an
               ``AnchorPane`` child, the child will be fixed to that
               corner of the window. If more than two anchor settings
               are used, the child will be stretched to fill the
               available horizontal and vertical space.

            .. container:: paragraph

               This mockup shows a ``TextArea`` surrounded by a set of
               controls: a ``Hyperlink`` and two status indicators.
               Since the ``TextArea`` will contain all of the content,
               it should take up most of the space initially and should
               acquire any additional space from a resize. On the
               periphery, there is a ``Hyperlink`` in the upper-right, a
               connection ``Label`` and ``Circle`` in the lower-right,
               and a status ``Label`` in the lower-left.

            .. container:: imageblock

               .. container:: content

                  |anchorpaneapp mockup|

            .. container:: sect3

               .. rubric:: 4.8.1. Anchors
                  :name: _anchors

               .. container:: paragraph

                  To begin the layout, create an ``AnchorPane`` object
                  and add it to the ``Scene``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        AnchorPane ap = new AnchorPane();
                        Scene scene = new Scene(ap);

               .. container:: paragraph

                  Anchors are set using static methods of the AnchorPane
                  class. The methods — one per edge — accept the
                  ``Node`` and an offset. For the ``Hyperlink``, an
                  anchor to the top edge and an anchor to the right edge
                  will be set. An offset of 10.0 is set for each edge so
                  that the link is not compressed against the side.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Hyperlink signoutLink = new Hyperlink("Sign Out");

                        ap.getChildren().add( signoutLink );

                        AnchorPane.setTopAnchor( signoutLink, 10.0d );
                        AnchorPane.setRightAnchor( signoutLink, 10.0d );

               .. container:: paragraph

                  When the screen is resized, the AnchorPane will resize
                  and signoutLink will maintain its top-right position.
                  Because neither the left nor bottom anchors are
                  specified, signoutLink will not be stretched.

               .. container:: paragraph

                  Next, the connection ``Label`` and ``Circle`` are
                  added. These controls are wrapped in an ``HBox``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Circle circle = new Circle();
                        circle.setFill(Color.GREEN );
                        circle.setRadius(10);

                        Label connLabel = new Label("Connection");

                        HBox connHBox = new HBox();
                        connHBox.setSpacing( 4.0d );
                        connHBox.setAlignment(Pos.BOTTOM_RIGHT);
                        connHBox.getChildren().addAll( connLabel, circle );

                        AnchorPane.setBottomAnchor( connHBox, 10.0d );
                        AnchorPane.setRightAnchor( connHBox, 10.0d );

                        ap.getChildren().add( connHBox );

               .. container:: paragraph

                  As with signoutLink, connHBox is fixed to a place on
                  the screen. connHBox is set to be 10 pixels from the
                  bottom edge and 10 pixels from the right edge.

               .. container:: paragraph

                  The lower-left status ``Label`` is added. The left and
                  the bottom anchors are set.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        Label statusLabel = new Label("Program status");
                        ap.getChildren().add( statusLabel );

                        AnchorPane.setBottomAnchor( statusLabel, 10.0d );
                        AnchorPane.setLeftAnchor( statusLabel, 10.0d );

               .. container:: paragraph

                  This is a screenshot of the finished app. The status
                  and control labels are at the bottom of the screen,
                  pinned to the left and right edges respectively. The
                  ``Hyperlink`` is pinned to the top-right.

               .. container:: imageblock

                  .. container:: content

                     |anchorpaneapp default|

            .. container:: sect3

               .. rubric:: 4.8.2. Resizing
                  :name: _resizing

               .. container:: paragraph

                  The controls on the periphery may vary in size. For
                  example, a status message or a connection message may
                  be longer. However, the extra length can be
                  accommodated in this layout by extending the
                  bottom-left status ``Label`` to the right and by
                  extending the bottom-right connection status ``Label``
                  to the left. Resizing with this layout will move these
                  controls in absolute terms, but they will adhere to
                  their respective edges plus the offset.

               .. container:: paragraph

                  That is not the case with the ``TextArea``. Because
                  the ``TextArea`` may contain a lot of content, it
                  should receive any extra space that the user gives the
                  window. This control will be anchored to all four
                  corners of the ``AnchorPane``. This will cause the
                  ``TextArea`` to resize when the window resizes. The
                  ``TextArea`` is fixed on the top-left and as the user
                  drags the window handles to the bottom-right, the
                  bottom-right corner of the ``TextArea`` moves as well.

               .. container:: paragraph

                  This picture shows the result of two resize
                  operations. The top screenshot is a vertical resize
                  from dragging the bottom edge of the window down. The
                  bottom screenshot is a horizontal resize from dragging
                  the right edge of the window right.

               .. container:: imageblock

                  .. container:: content

                     |anchorpaneapp resize|

               .. container:: paragraph

                  The highlighted boxes show that the controls bordering
                  the ``TextArea`` retain their positions relative to
                  the edges. The ``TextArea`` itself is resized based on
                  the Window resize. The top and bottom offsets of the
                  ``TextArea`` account for the other controls so that
                  they are not hidden.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        TextArea ta = new TextArea();

                        AnchorPane.setTopAnchor( ta, 40.0d );
                        AnchorPane.setBottomAnchor( ta, 40.0d );
                        AnchorPane.setRightAnchor( ta, 10.0d );
                        AnchorPane.setLeftAnchor( ta, 10.0d );

                        ap.getChildren().add( ta );

               .. container:: paragraph

                  ``AnchorPane`` is a good choice when you have a
                  mixture of resizable and fixed-position children.
                  Other controls like ``VBox`` and ``HBox`` with a
                  ``Priority`` setting are preferred if there is only
                  one child needing resizing. Use these controls instead
                  of ``AnchorPane`` with a single child that has all
                  four anchors set. Remember that to set an anchor on a
                  child, you use a static method of the container class
                  such as AnchorPane.setTopAnchor().

            .. container:: sect3

               .. rubric:: 4.8.3. Completed Code
                  :name: _completed_code_5

               .. container:: paragraph

                  The following is the completed code for the
                  ``AnchorPane`` example.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class AnchorPaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                AnchorPane ap = new AnchorPane();

                                // upper-right sign out control
                                Hyperlink signoutLink = new Hyperlink("Sign Out");

                                ap.getChildren().add( signoutLink );

                                AnchorPane.setTopAnchor( signoutLink, 10.0d );
                                AnchorPane.setRightAnchor( signoutLink, 10.0d );

                                // lower-left status label
                                Label statusLabel = new Label("Program status");
                                ap.getChildren().add( statusLabel );

                                AnchorPane.setBottomAnchor( statusLabel, 10.0d );
                                AnchorPane.setLeftAnchor( statusLabel, 10.0d );

                                // lower-right connection status control
                                Circle circle = new Circle();
                                circle.setFill(Color.GREEN );
                                circle.setRadius(10);

                                Label connLabel = new Label("Connection");

                                HBox connHBox = new HBox();
                                connHBox.setSpacing( 4.0d );
                                connHBox.setAlignment(Pos.BOTTOM_RIGHT);
                                connHBox.getChildren().addAll( connLabel, circle );

                                AnchorPane.setBottomAnchor( connHBox, 10.0d );
                                AnchorPane.setRightAnchor( connHBox, 10.0d );

                                ap.getChildren().add( connHBox );

                                // top-left content; takes up extra space
                                TextArea ta = new TextArea();
                                ap.getChildren().add( ta );

                                AnchorPane.setTopAnchor( ta, 40.0d );
                                AnchorPane.setBottomAnchor( ta, 40.0d );
                                AnchorPane.setRightAnchor( ta, 10.0d );
                                AnchorPane.setLeftAnchor( ta, 10.0d );

                                Scene scene = new Scene(ap);

                                primaryStage.setTitle("AnchorPaneApp");
                                primaryStage.setScene( scene );
                                primaryStage.setWidth(568);
                                primaryStage.setHeight(320);
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.9. TilePane
               :name: _tilepane

            .. container:: paragraph

               A ``TilePane`` is used for grid layout of equally sized
               cells. The prefColumns and the prefRows properties define
               the number of rows and columns in the grid. To add Nodes
               to ``TilePane``, access the children property and call
               the add() or addAll() method. This is easier to use than
               ``GridPane`` which requires explicit setting of the row /
               column position of Nodes.

            .. container:: paragraph

               This screenshot shows a ``TilePane`` defined as a
               three-by-three grid. The ``TilePane`` contains nine
               ``Rectangle`` objects.

            .. container:: imageblock

               .. container:: content

                  |threebythreeapp screenshot|

            .. container:: paragraph

               The complete code for the three-by-three grid follows.
               The children property of the ``TilePane`` provides the
               addAll() method to which ``Rectangle`` objects are added.
               The tileAlignment property positions each of the
               ``Rectangle`` objects in the center of its corresponding
               tile.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     public class ThreeByThreeApp extends Application {

                         @Override
                         public void start(Stage primaryStage) throws Exception {

                             TilePane tilePane = new TilePane();
                             tilePane.setPrefColumns(3);
                             tilePane.setPrefRows(3);
                             tilePane.setTileAlignment( Pos.CENTER );

                             tilePane.getChildren().addAll(
                                     new Rectangle(50, 50, Color.RED),
                                     new Rectangle( 50, 50, Color.GREEN ),
                                     new Rectangle( 50, 50, Color.BLUE ),
                                     new Rectangle( 50, 50, Color.YELLOW ),
                                     new Rectangle( 50, 50, Color.CYAN ),
                                     new Rectangle( 50, 50, Color.PURPLE ),
                                     new Rectangle( 50, 50, Color.BROWN ),
                                     new Rectangle( 50, 50, Color.PINK ),
                                     new Rectangle( 50, 50, Color.ORANGE )
                             );

                             Scene scene = new Scene(tilePane);
                             scene.setFill(Color.LIGHTGRAY);

                             primaryStage.setTitle("3x3");
                             primaryStage.setScene( scene );
                             primaryStage.show();
                         }

                         public static void main(String[] args) {launch(args);}
                     }

            .. container:: paragraph

               Since all of the ``Node`` contents of the ``TilePane``
               were equally-sized Rectangles, the layout is packed
               together and the tileAlignment setting is not noticeable.
               When the tilePrefHeight and tilePrefWidth properties are
               set to be larger than the contents — say 100x100 tiles
               containing 50x50 Rectangles — tileAlignment will
               determine how the extra space will be used.

            .. container:: paragraph

               See the following modified ThreeByThreeApp class that
               sets the tilePrefHeight and tilePrefWidth.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                             tilePane.setPrefTileHeight(100);
                             tilePane.setPrefTileWidth(100);

            .. container:: imageblock

               .. container:: content

                  |threebythreeapp screenshot space|

            .. container:: paragraph

               In the prior screenshots, nine Rectangle objects were
               provided to the three-by-three grid. If the contents do
               not match up with the ``TilePane`` definition, those
               cells will collapse. This modification adds only five
               Rectangles rather than nine. The first row contains has
               content for all three tiles. The second row has content
               for only the first two files. The third row is missing
               entirely.

            .. container:: imageblock

               .. container:: content

                  |threebythreeapp screenshot sparse|

            .. container:: paragraph

               There is a property "orientation" that instructs
               ``TilePane`` to add items row-by-row (HORIZONTAL, the
               default) or column-by-column (VERTICAL). If VERTICAL is
               used, then the first column will have three elements, the
               second column will have only the top two, and the third
               column will be missing. This screenshot shows the five
               Rectangles being added to the three-by-three grid (nine
               tiles) using VERTICAL orientation.

            .. container:: imageblock

               .. container:: content

                  |threebythreeapp screenshot vert|

            .. container:: sect3

               .. rubric:: 4.9.1. Algorithms
                  :name: _algorithms

               .. container:: paragraph

                  It is possible to create JavaFX grid layouts with
                  other containers like ``GridPane``, ``VBox``, and
                  ``HBox``. TilePane is a convenience that defines the
                  grid layout in advance and makes adding items to the
                  grid a simple add() or addAll() call. Unlike a grid
                  layout built with a combination of nested ``VBox`` and
                  ``HBox`` containers, the ``TilePane`` contents are
                  direct children. This makes it easy to loop over the
                  children during event processing which helps implement
                  certain algorithms.

               .. container:: paragraph

                  This example app places four Circles in a
                  ``TilePane``. An event handler is attached to the
                  ``TilePane`` which looks for a selection of one of the
                  Circles. If a Circle is selected, it is dimmed through
                  the opacity setting. If the Circle is re-selected, its
                  original color is restored. This screenshot shows the
                  app with the blue ``Circle`` appearing purple-ish
                  because it has been selected.

               .. container:: imageblock

                  .. container:: content

                     |tileapp|

               .. container:: paragraph

                  The program begins by adding the items and setting a
                  custom property "selected" using the Java 8 Stream
                  API.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                TilePane tilePane = new TilePane();
                                tilePane.setPrefColumns(2);
                                tilePane.setPrefRows(2);
                                tilePane.setTileAlignment( Pos.CENTER );

                                Circle redCircle = new Circle(50, Color.RED);
                                Circle greenCircle = new Circle( 50, Color.GREEN );
                                Circle blueCircle = new Circle( 50, Color.BLUE );
                                Circle yellowCircle = new Circle( 50, Color.YELLOW );

                                List<Circle> circles = new ArrayList<>();
                                circles.add( redCircle );
                                circles.add( greenCircle );
                                circles.add( blueCircle );
                                circles.add( yellowCircle );

                                circles
                                        .stream()
                                        .forEach( (c) -> c.getProperties().put( "selected", Boolean.FALSE ));

                                tilePane.getChildren().addAll(
                                       circles
                                );

               .. container:: paragraph

                  Next, the event handler is attached to the mouse
                  event. This is also using Java 8 Streams. The filter()
                  method is determining whether or not a ``Circle`` is
                  selected using the Node.contains() method on converted
                  coordinates. If that expression passes, findFirst() is
                  used to retrieve the first (and in this case, only)
                  match. The block of code in ifPresent() sets the
                  "selected" flag for keeping track of the ``Circle``
                  state and tweaks the opacity.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            tilePane.setOnMouseClicked(

                                (evt) -> tilePane
                                            .getChildren()
                                            .stream()
                                            .filter( c ->
                                                c.contains(
                                                  c.sceneToLocal(evt.getSceneX(), evt.getSceneY(), true)
                                                )
                                             )
                                            .findFirst()
                                            .ifPresent(
                                                    (c) -> {
                                                        Boolean selected = (Boolean) c.getProperties().get("selected");
                                                        if( selected == null || selected == Boolean.FALSE ) {
                                                            c.setOpacity(0.3d);
                                                            c.getProperties().put("selected", Boolean.TRUE);
                                                        } else {
                                                            c.setOpacity( 1.0d );
                                                            c.getProperties().put("selected", Boolean.FALSE);
                                                        }
                                                    }
                                            )
                            );

            .. container:: sect3

               .. rubric:: 4.9.2. Another Handler
                  :name: _another_handler

               .. container:: paragraph

                  Since the program saves the Circles in a Java
                  Collections ``List``, the ``TilePane`` contents can be
                  replaced with repeated allAll() calls. This event
                  handler is triggered by the user pressing an "S" in
                  the ``Scene``. The contents of the backing ``List``
                  are shuffled and re-added to the ``TilePane``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                scene.setOnKeyPressed(
                                        (evt) -> {
                                            if( evt.getCode().equals(KeyCode.S) ) {
                                                Collections.shuffle( circles );
                                                tilePane.getChildren().clear();
                                                tilePane.getChildren().addAll( circles );
                                            }
                                        }
                                );

               .. container:: paragraph

                  While feasible, a grid built with VBoxes and HBoxes
                  would be slightly more difficult because of the nested
                  structures. Also, ``TilePane`` will not stretch the
                  contents to fill extra space, making it suitable for
                  composite controls that need to be packed together for
                  ergonomic reasons.

               .. container:: paragraph

                  ``TilePane`` creates a grid based layout of equally
                  sized cells. Contents are added to the ``TilePane``
                  based on the prefRows, prefColumns, and orientation
                  settings. If the grid contains more tiles than added
                  Nodes, there will be gaps in the layout and rows and
                  columns may collapse if no content was provided
                  whatsoever. This post showed a pair of algorithms that
                  were implemented easily because of TilePane’s simply
                  interface.

            .. container:: sect3

               .. rubric:: 4.9.3. Complete Code
                  :name: _complete_code_6

               .. container:: paragraph

                  The complete code for TileApp follows.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class TileApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                TilePane tilePane = new TilePane();
                                tilePane.setPrefColumns(2);
                                tilePane.setPrefRows(2);
                                tilePane.setTileAlignment( Pos.CENTER );

                                Circle redCircle = new Circle(50, Color.RED);
                                Circle greenCircle = new Circle( 50, Color.GREEN );
                                Circle blueCircle = new Circle( 50, Color.BLUE );
                                Circle yellowCircle = new Circle( 50, Color.YELLOW );

                                List<Circle> circles = new ArrayList<>();
                                circles.add( redCircle );
                                circles.add( greenCircle );
                                circles.add( blueCircle );
                                circles.add( yellowCircle );

                                circles
                                        .stream()
                                        .forEach( (c) -> c.getProperties().put( "selected", Boolean.FALSE ));

                                tilePane.getChildren().addAll(
                                       circles
                                );

                                tilePane.setOnMouseClicked(

                                    (evt) -> tilePane
                                                .getChildren()
                                                .stream()
                                                .filter( c ->
                                                    c.contains(
                                                      c.sceneToLocal(evt.getSceneX(), evt.getSceneY(), true)
                                                    )
                                                 )
                                                .findFirst()
                                                .ifPresent(
                                                        (c) -> {
                                                            Boolean selected = (Boolean) c.getProperties().get("selected");
                                                            if( selected == null || selected == Boolean.FALSE ) {
                                                                c.setOpacity(0.3d);
                                                                c.getProperties().put("selected", Boolean.TRUE);
                                                            } else {
                                                                c.setOpacity( 1.0d );
                                                                c.getProperties().put("selected", Boolean.FALSE);
                                                            }
                                                        }
                                                )
                                );

                                Scene scene = new Scene(tilePane);

                                scene.setOnKeyPressed(
                                        (evt) -> {
                                            if( evt.getCode().equals(KeyCode.S) ) {
                                                Collections.shuffle( circles );
                                                tilePane.getChildren().clear();
                                                tilePane.getChildren().addAll( circles );
                                            }
                                        }
                                );

                                primaryStage.setTitle("TileApp");
                                primaryStage.setScene( scene );
                                primaryStage.show();

                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 4.10. TitledPane
               :name: _titledpane

            .. container:: paragraph

               A ``TitledPane`` is a ``Node`` container matched with a
               ``Label`` and an optional control for showing and hiding
               the container contents. Since ``TitledPane`` is limited
               to a single ``Node``, it is often paired with a container
               supporting multiple children like a ``VBox``.
               Functionally, it can hide non-essential details of a form
               or group related controls.

            .. container:: paragraph

               This example is a web search app that accepts a set of
               keywords in a ``TextField``. The user presses the Search
               Button to run a search. The Advanced ``TitlePane``
               expands to provide additional search arguments.

            .. container:: paragraph

               This screenshot shows the un-expanded state which is the
               view for a user executing a simple keyword search.

            .. container:: imageblock

               .. container:: content

                  |titledpaneapp unexpanded|

            .. container:: paragraph

               This next screenshot shows the view for a user requiring
               advanced search parameters. The Advanced TitledPane was
               expanded by pressing on the arrow in the ``TitledPane``
               header.

            .. container:: imageblock

               .. container:: content

                  |titledpaneapp expanded|

            .. container:: paragraph

               To create a ``TitledPane``, use the constructor to pass
               in a String title and a single ``Node`` child. The
               default constructor can also be used and the title and
               ``Node`` set using setters. This code uses the
               parameterized constructor. A ``VBox`` is the single child
               of the ``TitledPane``. However, the ``VBox`` itself
               contains several controls.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                             VBox advancedVBox = new VBox(
                                     new Label("All Keywords"),
                                     new CheckBox(),
                                     new Label("Domains"),
                                     new TextField(),
                                     new Label("Time"),
                                     new ComboBox<>(
                                         FXCollections.observableArrayList( "Day", "Month", "Year" )
                                     )
                             );

                             TitledPane titledPane = new TitledPane(
                                     "Advanced",
                                     advancedVBox
                             );
                             titledPane.setExpanded( false );

            .. container:: paragraph

               By default, the ``TitledPane`` will be expanded. This
               does not fit the use case of hiding non-essential
               information, so the expanded property is set after the
               object is created.

            .. container:: sect3

               .. rubric:: 4.10.1. Collapsible
                  :name: _collapsible

               .. container:: paragraph

                  Another property of ``TitledPane`` is collapsible. By
                  default, the ``TitledPane`` collapsible property is
                  set to true. However, a quick grouping can be provided
                  to controls that are not collapsible. The following
                  screenshot demonstrates this use case.

               .. container:: imageblock

                  .. container:: content

                     |titledpaneapp noncollapsible|

               .. container:: paragraph

                  This code sets the collapsible flag after the
                  constructor is called.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                    VBox securityVBox = new VBox(
                                            new Label("Owner"),
                                            new TextField(),
                                            new Label("Access Control"),
                                            new TextField()
                                    );

                                    TitledPane tp = new TitledPane("Security", securityVBox);
                                    tp.setCollapsible( false );

            .. container:: sect3

               .. rubric:: 4.10.2. Complete Code
                  :name: _complete_code_7

               .. container:: paragraph

                  The following is the complete code for the first
                  demonstration involving the hidden search parameters
                  "TitledPaneApp".

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class TitledPaneApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                VBox vbox = new VBox(
                                        new Label("Keywords" ),
                                        new TextField()
                                );

                                vbox.setPadding( new Insets(10) );
                                vbox.setSpacing( 10 );

                                VBox advancedVBox = new VBox(
                                        new Label("All Keywords"),
                                        new CheckBox(),
                                        new Label("Domains"),
                                        new TextField(),
                                        new Label("Time"),
                                        new ComboBox<>(
                                            FXCollections.observableArrayList( "Day", "Month", "Year" )
                                        )
                                );

                                TitledPane titledPane = new TitledPane(
                                        "Advanced",
                                        advancedVBox
                                );
                                titledPane.setExpanded( false );

                                vbox.getChildren().addAll(
                                        titledPane,
                                        new Button("Search")
                                );

                                Scene scene = new Scene( vbox );

                                primaryStage.setTitle( "TitledPaneApp" );
                                primaryStage.setScene( scene );
                                primaryStage.setWidth( 568 );
                                primaryStage.setHeight( 320 );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

   .. container:: sect1

      .. rubric:: 5. CSS
         :name: _css

      .. container:: sectionbody

         .. container:: paragraph

            Placeholder whilst things get built…​

   .. container:: sect1

      .. rubric:: 6. Performance
         :name: _performance

      .. container:: sectionbody

         .. container:: paragraph

            Placeholder whilst things get built…​

   .. container:: sect1

      .. rubric:: 7. Application Structure
         :name: _application_structure

      .. container:: sectionbody

         .. container:: sect2

            .. rubric:: 7.1. The MVVM Pattern
               :name: _the_mvvm_pattern

            .. container:: paragraph

               Model-View-ViewModel (MVVM) is a software architecture
               that separates UI controls (the View) from data access
               and business logic (the Model). The separation helps
               larger applications during the maintenance phase. With
               MVVM, View changes — especially those that are purely
               cosmetic — can be made without fear of introducing side
               effects. Changes to the Model (usually less volatile than
               the View) can be applied more easily throughout the
               application because MVVM promotes reuse.

            .. container:: paragraph

               In between the View and the Model is the ViewModel. The
               ViewModel mediates between the View and the Model, yet
               contains no references to the View. This enables
               ViewModel sharing which is useful when two Views show
               similar data.

            .. container:: paragraph

               This article presents a simplified MVVM example. An
               Employment Request Form submits several data elements to
               a back-end service. This screenshot shows the application
               with the name, position, and annual salary data elements
               set.

            .. container:: imageblock

               .. container:: content

                  |mvvmapp screenshot|

            .. container:: paragraph

               After entering the data and pressing Save, the Model
               object responds with a println().

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     saving EmploymentRequest{name='Carl', position='Pizza Dough Thrower', annualSalary=30000.0}

            .. container:: paragraph

               If the Reset button is pressed after filling in the
               TextFields, the form is restored to its original values:
               empty name and position and an annualSalary of 0.

            .. container:: paragraph

               The Cancel button ends the application.

            .. container:: sect3

               .. rubric:: 7.1.1. Structure
                  :name: _structure_2

               .. container:: paragraph

                  A simplified MVVM application is composed of the
                  following types of classes

               .. container:: dlist

                  App
                     Main entry point

                  View
                     UI controls

                  Model
                     Function call to business logic and data access

                  ViewModel
                     Contains screen state and UI logic

                  Domain object
                     UI-neutral transfer object

                  Converter
                     Helper class for ViewModel to Model communication

               .. container:: paragraph

                  This UML shows the structure of the Employment Request
                  Form. The View class is EmploymentRequestView which
                  contains the UI control objects like the Name
                  ``TextField``. The ViewModel class is
                  EmploymentRequestViewModel and contains JavaFX
                  properties. The Model class is EmploymentRequestModel
                  with a single method for persisting the form.
                  EmploymentRequestConverter is a helper class.
                  EmploymentRequest is a POJO containing data fields.
                  MVVMApp is the main entry point, a JavaFX Application
                  subclass.

               .. container:: imageblock

                  .. container:: content

                     |mvvmapp uml|

            .. container:: sect3

               .. rubric:: 7.1.2. View
                  :name: _view

               .. container:: paragraph

                  In MVVM, the View class is responsible for the UI
                  controls and nothing else. Event handlers attached to
                  UI controls delegate immediately to the ViewModel.
                  JavaFX data binding updates the UI with Model changes.
                  In the Employment Request Form, three TextFields
                  gather input from the user: tfName, tfPosition,
                  tfAnnualSalary. Three Buttons initiate operations on
                  the application: btnSave, btnCancel, btnReset. This is
                  the beginning of the EmploymentRequestView class.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class EmploymentRequestView extends VBox {

                            private GridPane gp = new GridPane();

                            private TextField tfName = new TextField();
                            private TextField tfPosition = new TextField();
                            private TextField tfAnnualSalary = new TextField();

                            private Button btnSave = new Button("Save");
                            private Button btnCancel = new Button("Cancel");
                            private Button btnReset = new Button("Reset");

                            public EmploymentRequestView() {
                                createView();
                                bindViewModel();
                            }

               .. container:: paragraph

                  The View knows about the ViewModel and uses JavaFX
                  binding to synchronize the UI with the ViewModel. This
                  demo treats the ViewModel as a prototype object,
                  created when the View object is created.
                  Alternatively, the ViewModel can be a singleton or
                  provided by CDI. Each UI field is bound
                  bi-directionally to the ViewModel. As the UI
                  changes — say through entering a value in tfName — the
                  corresponding field in the ViewModel is updated. The
                  more complicated expression for the tfAnnualSalary
                  field is needed to convert the String-based
                  ``TextField`` into a DoubleProperty.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private final EmploymentRequestViewModel viewModel =
                                    new EmploymentRequestViewModel();

                            private void bindViewModel() {

                                tfName.textProperty().bindBidirectional(viewModel.nameProperty());

                                tfPosition.textProperty().bindBidirectional(viewModel.positionProperty());

                                Bindings.bindBidirectional(
                                        tfAnnualSalary.textProperty(),
                                        viewModel.annualSalaryProperty(),
                                        new NumberStringConverter()
                                );
                            }

               .. container:: paragraph

                  The UI in this demo is built in code. The following
                  createView() method handles the layout of the form and
                  puts the core controls (such as tfName and btnSave) in
                  containers.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void createView() {
                                VBox gpwrap = new VBox();
                                gpwrap.setAlignment( Pos.CENTER );

                                gp.setPadding( new Insets(40) );
                                gp.setVgap( 4 );
                                gp.add(new Label("Name"), 0, 0);                  gp.add(tfName, 1, 0);
                                gp.add(new Label("Desired Position"), 0, 1);      gp.add(tfPosition, 1, 1);
                                gp.add(new Label("Current Annual Salary"), 0, 2); gp.add(tfAnnualSalary, 1, 2);

                                final ColumnConstraints col = new ColumnConstraints();
                                col.setPercentWidth( 50 );

                                gp.getColumnConstraints().addAll( col, col );

                                gpwrap.getChildren().add( gp );

                                VBox.setVgrow( gpwrap, Priority.ALWAYS );

                                btnSave.setOnAction( this::save );
                                btnCancel.setOnAction( this::cancel );
                                btnReset.setOnAction( this::reset );

                                btnSave.setDefaultButton(true);

                                ButtonBar buttonBar = new ButtonBar();
                                buttonBar.setPadding( new Insets(20.0d) );
                                ButtonBar.setButtonData(btnSave, ButtonBar.ButtonData.OK_DONE);
                                ButtonBar.setButtonData(btnCancel, ButtonBar.ButtonData.CANCEL_CLOSE);
                                ButtonBar.setButtonData(btnReset, ButtonBar.ButtonData.OTHER);

                                buttonBar.getButtons().addAll( btnSave, btnCancel, btnReset );

                                this.getChildren().addAll(
                                        gpwrap,
                                        new Separator(),
                                        buttonBar);
                            }

               .. container:: paragraph

                  The class ends with handlers for the Buttons. These
                  handlers delegate their actions to the ViewModel.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void save(ActionEvent evt) { viewModel.save(); }

                            private void cancel(ActionEvent evt) {
                                Platform.exit();
                            }

                            private void reset(ActionEvent evt) { viewModel.reset(); }
                        }

               .. container:: sect4

                  .. rubric:: FXML and Scene Builder
                     :name: _fxml_and_scene_builder

                  .. container:: paragraph

                     In this example, the UI is built in code. Scene
                     Builder is a design-oriented alternative that can
                     be more productive. To convert this example to
                     FXML, the product of Scene Builder, you would build
                     the UI in the tool and annotate the fields and
                     methods of the EmploymentRequestView class with
                     @FXML. See the following screenshot for how the
                     demo looks in Scene Builder. This is informational
                     only and not part of the working demo.

                  .. container:: imageblock

                     .. container:: content

                        |mvvmapp sb|

                  .. container:: paragraph

                     Notice that the right "half" of the UML diagram
                     would not be changed by switching the View
                     implementation from code to Scene Builder. A sign
                     of a good design is when alternative presentations
                     can be supported easily.

            .. container:: sect3

               .. rubric:: 7.1.3. ViewModel
                  :name: _viewmodel

               .. container:: paragraph

                  The ViewModel is a layer that interacts with both the
                  View and the Model. In this simple presentation, the
                  value of such a layer is limited; one could just
                  unpack the TextFields into the Model in the ``Button``
                  handler. As the UI becomes more complex, it is useful
                  to have a plainer, more business-oriented object to
                  work with. While there is a one-to-one correspondence
                  between View, Model, and ViewModel, that may not
                  always be the case.

               .. container:: paragraph

                  Handling a many-to-many relationship is key for the
                  ViewModel. There may be many Views that working with
                  the same Model element. Multiple models may contribute
                  to a single View.

               .. container:: paragraph

                  This ViewModel looks like the domain object that will
                  be presented later with one key difference: JavaFX
                  Binding. EmploymentRequestViewModel was bound to the
                  EmploymentRequestView UI controls and the methods of
                  EmploymentRequestViewModel will have access to all of
                  the information within the save() method. No extra
                  marshaling of arguments is needed.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class EmploymentRequestViewModel {

                            private final StringProperty name = new SimpleStringProperty("");
                            private final StringProperty position = new SimpleStringProperty("");
                            private final DoubleProperty annualSalary = new SimpleDoubleProperty();

                            private final EmploymentRequestConverter converter =
                                    new EmploymentRequestConverter();

                            private final EmploymentRequestModel model = new EmploymentRequestModel();

                            public String getName() {
                                return name.get();
                            }

                            public StringProperty nameProperty() {
                                return name;
                            }

                            public void setName(String name) {
                                this.name.set(name);
                            }

                            public String getPosition() {
                                return position.get();
                            }

                            public StringProperty positionProperty() {
                                return position;
                            }

                            public void setPosition(String position) {
                                this.position.set(position);
                            }

                            public double getAnnualSalary() {
                                return annualSalary.get();
                            }

                            public DoubleProperty annualSalaryProperty() {
                                return annualSalary;
                            }

                            public void setAnnualSalary(double annualSalary) {
                                this.annualSalary.set(annualSalary);
                            }

                            public void save() {
                                EmploymentRequest data = converter.toEmploymentRequest( this );
                                model.save( data );
                            }

                            public void reset() {
                                this.name.set("");
                                this.position.set("");
                                this.annualSalary.set(0.0d);
                            }
                        }

               .. container:: paragraph

                  Both the Converter and the Model have been added to
                  this ViewModel as prototypes, meaning that they were
                  created when the ViewModel was created.

               .. container:: sect4

                  .. rubric:: Converter
                     :name: _converter

                  .. container:: paragraph

                     The Converter is a class the translates between
                     ViewModel and domain object. In this app, there is
                     a single toEmploymentRequest() method that creates
                     an object from the ViewModel fields.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                           public class EmploymentRequestConverter {

                               public EmploymentRequest toEmploymentRequest(EmploymentRequestViewModel viewModel) {
                                   return new EmploymentRequest(
                                           viewModel.getName(),
                                           viewModel.getPosition(),
                                           viewModel.getAnnualSalary()
                                   );
                               }
                           }

            .. container:: sect3

               .. rubric:: 7.1.4. Model
                  :name: _model_2

               .. container:: paragraph

                  Finally, the Model persists the information. This
                  Model example has a single mocked method which will
                  verify that it receives the correct data for the
                  save() operation.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class EmploymentRequestModel {

                            public void save(EmploymentRequest req) {
                                System.out.println("saving " + req);
                            }
                        }

               .. container:: paragraph

                  This is the plain Java object used to transport data
                  from the Model to the UI.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class EmploymentRequest {

                            private final String name;
                            private final String position;
                            private final Double annualSalary;

                            public EmploymentRequest(String name,
                                                     String position,
                                                     Double annualSalary) {
                                this.name = name;
                                this.position = position;
                                this.annualSalary = annualSalary;
                            }

                            public String getName() {
                                return name;
                            }

                            public String getPosition() {
                                return position;
                            }

                            public Double getAnnualSalary() {
                                return annualSalary;
                            }

                            @Override
                            public String toString() {
                                return "EmploymentRequest{" +
                                        "name='" + name + '\'' +
                                        ", position='" + position + '\'' +
                                        ", annualSalary=" + annualSalary +
                                        '}';
                            }
                        }

               .. container:: paragraph

                  JavaFX provides developers with a powerful toolkit to
                  build applications. However, a design is still needed
                  for an effective program. MVVM is an architectural
                  pattern that separates pure UI classes called Views
                  from pure data classes called Models. In the middle
                  sits the ViewModel which relies heavily on the data
                  binding in JavaFX.

            .. container:: sect3

               .. rubric:: 7.1.5. Further Work
                  :name: _further_work

               .. container:: paragraph

                  Sometimes, the View needs to know of a Model change.
                  Because MVVM dictates a one-way control flow — View to
                  ViewModel to Model and not the reverse — a different
                  mechanism than data binding is needed to make the
                  ViewModel aware of Model changes. A publishing /
                  subscribing library can be used for this requirement
                  which would broker the Model/ViewModel interaction.
                  ViewModel would receive a notification from the Model
                  and the Model would not require a reference to the
                  ViewModel object.

               .. container:: paragraph

                  To read more about MVVM and JavaFX, check out the
                  mvvmFX project. The examples in that project provided
                  the basis for this demonstration.

               .. container:: paragraph

                  `mvvmFX <https://github.com/sialcasa/mvvmFX>`__

            .. container:: sect3

               .. rubric:: 7.1.6. Completed Code
                  :name: _completed_code_6

               .. container:: paragraph

                  The completed code in this example is available as a
                  Gradle project here. There are two examples in the
                  JAR. Run the class
                  net.bekwam.bkcourse.mvvmapp.MVVMApp.

               .. container:: paragraph

                  `bkcourse_mvvmapp_sources.zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_mvvmapp_sources.zip>`__

         .. container:: sect2

            .. rubric:: 7.2. Model Change with MVVM
               :name: _model_change_with_mvvm

            .. container:: paragraph

               The previous article showed how to add a JavaFX
               binding-based ViewModel to an application architecture.
               However, the Model presented was a simple service call.
               This expands on the prior concepts and adds

            .. container:: olist arabic

               #. Asynchrony,

               #. A ``ProgressBar`` and status ``Label``, and

               #. Event broadcasting.

            .. container:: paragraph

               All operations taking more than a few milliseconds should
               be run on a separate ``Thread``. Something that runs
               quickly but involves IO or the network often turns into a
               performance problem as code moves to new computers and
               new network configurations. A JavaFX ``Task`` is used to
               invoke the Model operation. While this potentially long
               process is running, feedback is given to the user via a
               ``ProgressBar`` and ``Label``. The status ``Label``
               conveys messages to the user from the JavaFX ``Task``.

            .. container:: paragraph

               It is important that the Model not hold a reference to
               the ViewModel, so an event notification scheme is
               introduced. The ViewModel listens for an
               EVENT_MODEL_UPDATE message from the Model. Although this
               example uses only one ViewModel, this scheme makes it
               possible for more than one ViewModel to be aware of data
               changes from a single Model component.

            .. container:: sect3

               .. rubric:: 7.2.1. Demo Program
                  :name: _demo_program

               .. container:: paragraph

                  The demo program in this section is a URL tester. The
                  user enters a URL in the ``TextField`` and presses the
                  Submit ``Button``. If the HTTP request to the
                  specified URL returns successfully, the HTTP response
                  status code is displayed alongside the number of
                  milliseconds the request took. This screenshot shows a
                  successful usage.

               .. container:: imageblock

                  .. container:: content

                     |modelchangeapp screenshot done|

               .. container:: paragraph

                  The UI remains responsive throughout the request. The
                  responsiveness comes from the use of a JavaFX ``Task``
                  to run the URL retrieval on a background thread. To
                  make the user aware that processing is occurring, UI
                  controls are tied to the properties of the ``Task``
                  through JavaFX binding. This screenshot shows the
                  feedback the user receives while the ``Task`` runs.

               .. container:: imageblock

                  .. container:: content

                     |modelchangeapp screenshot inprogress|

               .. container:: paragraph

                  When the Submit ``Button`` is pressed, a pair of
                  controls are displayed: a ``ProgressBar`` and a
                  ``Label``. Both controls are updated with information
                  about the running background ``Thread``.

               .. container:: paragraph

                  Errors in the URL retrieval are handled by passing an
                  alternate response object out of the Model. In the
                  successful case, the Model returned the HTTP status
                  code and elapsed time. In the error case, the Model
                  sets a flag and returns an error message. This
                  screenshot shows an error dialog produced by the View
                  in response to an error in the Model. The errorMessage
                  is from the message property of the thrown Exception.
                  If needed, additional fields like the Exception class
                  name can be added.

               .. container:: imageblock

                  .. container:: content

                     |modelchangeapp screenshot err|

            .. container:: sect3

               .. rubric:: 7.2.2. Design
                  :name: _design

               .. container:: paragraph

                  The demo program consists of a single View / ViewModel
                  / Model triple. The View communicates with the
                  ViewModel through JavaFX binding. UI controls in the
                  View are bound to JavaFX properties in the ViewModel.
                  Event handlers in the View delegate to methods in the
                  ViewModel. The ViewModel forms an asynchronous command
                  which interacts with the Model. The Model communicates
                  indirectly with the ViewModel through a notification
                  subsystem rather than an object reference.

               .. container:: paragraph

                  This is a UML class model of the program.

               .. container:: imageblock

                  .. container:: content

                     |modelchangeapp uml|

               .. container:: paragraph

                  URLTestView is the View component and contains the UI
                  controls. The ViewModel contains properties for the
                  domain — url, last status code, last elapsed
                  time — and for the screen state such as
                  urlTestTaskRunning. Model contains a service call and
                  works with a UI-neutral POJO URLTestObject.
                  Communication between the Model and the ViewModel is
                  brokered through a Notifications singleton which has
                  methods for publishing (for the Model) and subscribing
                  (for the ViewModel).

               .. container:: paragraph

                  This sequence diagram shows how the app wires itself
                  up and the interactions that follow from a test
                  operation.

               .. container:: imageblock

                  .. container:: content

                     |modelchangeapp uml sd|

               .. container:: paragraph

                  After all the objects are created, the user initiates
                  a test operation. This results in a TestURLCommand
                  object being created which is a JavaFX ``Service``.
                  The service invokes a Model method testURL(). When
                  testURL() finishes, it publishes a notification. This
                  notification triggers a call to the ViewModel to
                  refresh itself which uses a second call to the Model.
                  The ViewModel refresh sets ViewModel JavaFX properties
                  which automatically update the View.

            .. container:: sect3

               .. rubric:: 7.2.3. View
                  :name: _view_2

               .. container:: paragraph

                  The View is a StackPane containing the ``TextField``
                  that will gather the URL input and a Submit
                  ``Button``. A ``StackPane`` was used so that the
                  temporary status display could be added without
                  breaking the centering of the main UI controls. The
                  ``HBox`` containing the status ``Label`` and
                  ``ProgressBar`` is always present in the lower-left,
                  but hidden unless a ``Task`` is running.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class URLTestView extends StackPane {

                            private final URLTestViewModel testViewModel =
                                    new URLTestViewModel();

                            public URLTestView() {

                                Label lblURL = new Label("URL to Test");
                                TextField tfURL = new TextField();
                                Button btnTest = new Button("Test");
                                Label lblStatus = new Label("");
                                Label lblLoadTime = new Label("");
                                HBox resultHBox = new HBox(lblStatus, lblLoadTime);
                                resultHBox.setSpacing(10);

                                VBox vbox = new VBox( lblURL, tfURL, btnTest, resultHBox );
                                vbox.setPadding( new Insets(40) );
                                vbox.setSpacing( 10 );
                                vbox.setAlignment(Pos.CENTER_LEFT);

                                Label lblTaskStatus = new Label("");
                                ProgressBar pb = new ProgressBar();
                                HBox statusHBox = new HBox(pb, lblTaskStatus);
                                statusHBox.setSpacing(4);
                                statusHBox.setPadding(new Insets(4));
                                statusHBox.setMaxHeight( 20 );

                                StackPane.setAlignment(statusHBox, Pos.BOTTOM_LEFT );

                                this.getChildren().addAll( vbox, statusHBox );

               .. container:: paragraph

                  The URLTestViewModel object is created in this class.
                  Alternatively, dependency injection can be used to
                  distribute the same ViewModel object among other
                  Views.

               .. container:: paragraph

                  The URLTestView constructor continues with several
                  binding expressions. These link the UI controls to the
                  ViewModel properties.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                lblStatus.textProperty().bind( testViewModel.statusCodeProperty() );
                                lblLoadTime.textProperty().bind( testViewModel.loadTimeProperty() );
                                testViewModel.urlProperty().bind( tfURL.textProperty() );

                                statusHBox.visibleProperty().bind(testViewModel.urlTestTaskRunningProperty() );
                                pb.progressProperty().bind( testViewModel.urlTestTaskProgressProperty() );
                                lblTaskStatus.textProperty().bind( testViewModel.urlTestTaskMessageProperty());

               .. container:: paragraph

                  The above statements register the UI controls for
                  changes to the corresponding property in the
                  ViewModel, except for tfURL. tfURL uses a different
                  binding direction since it is producing the value for
                  the ViewModel. In some cases, the binding may need to
                  be bi-directional if a control can both be manipulated
                  by the user and set from the ViewModel.

               .. container:: paragraph

                  The action which initiates the testURL() operation is
                  mapped to the Submit ``Button``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                btnTest.setOnAction( (evt) -> testViewModel.test() );

               .. container:: paragraph

                  The URLTestView constructor finishes with a special
                  ChangeListener binding to a ViewModel property. This
                  is a notification that an error has occurred. When the
                  errorMessage property of the ViewModel is notified,
                  the View displays a popup dialog.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                testViewModel.errorMessageProperty().addListener(
                                        (obs,ov,nv) -> {
                                            if( nv != null && !nv.isEmpty() ) {
                                                Alert alert = new Alert(
                                                        Alert.AlertType.ERROR, nv
                                                );
                                                alert.showAndWait();
                                            }
                                        }
                                );

            .. container:: sect3

               .. rubric:: 7.2.4. ViewModel
                  :name: _viewmodel_2

               .. container:: paragraph

                  URLTestView binds its UI controls to properties in
                  URLTestViewModel. This section of the class
                  URLTestViewModel shows the properties used by the View
                  and their corresponding access methods. The test()
                  method — which was mapped to the Submit ``Button``
                  press event — is also listed. The object
                  urlTestCommand will be presented later.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class URLTestViewModel {

                            // Data elements
                            private final StringProperty url = new SimpleStringProperty("");
                            private final StringProperty statusCode = new SimpleStringProperty("");
                            private final StringProperty loadTime = new SimpleStringProperty("");

                            // Status elements
                            private final BooleanProperty wasError = new SimpleBooleanProperty(false);
                            private final StringProperty errorMessage = new SimpleStringProperty("");

                            public StringProperty urlProperty() { return url; }

                            public StringProperty statusCodeProperty() { return statusCode; }

                            public StringProperty loadTimeProperty() { return loadTime; }

                            public StringProperty errorMessageProperty() { return errorMessage; }

                            public ReadOnlyBooleanProperty urlTestTaskRunningProperty() {
                                return urlTestCommand.runningProperty();  // presented later
                            }

                            public ReadOnlyStringProperty urlTestTaskMessageProperty() {
                                return urlTestCommand.messageProperty();  // presented later
                            }

                            public ReadOnlyDoubleProperty urlTestTaskProgressProperty() {
                                return urlTestCommand.progressProperty();  // presented later
                            }

                            public void test() {
                               urlTestCommand.restart();  // presented later
                            }

               .. container:: paragraph

                  URLTestViewModel collaborates with two objects:
                  URLTestModel and Notifications. URLTestViewModel
                  subscribes to a Notification in its constructor. A
                  URLTestViewModel method "update" will be called when
                  the Notifications object posts an EVENT_MODEL_UPDATE.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private final URLTestModel urlTestModel = new URLTestModel();

                            private final Notifications notifications = new Notifications();

                            public URLTestViewModel() {
                                notifications.subscribe(Notifications.EVENT_MODEL_UPDATE,
                                                        this,
                                                        this::update);  // presented later
                            }

               .. container:: sect4

                  .. rubric:: Command
                     :name: _command

                  .. container:: paragraph

                     urlTestCommand is a JavaFX ``Service`` object. As a
                     part of the URLTestViewModel class, urlTestCommand
                     has access to the url property which provides a
                     parameter for the call to the Model object.
                     urlTestCommand also uses the URLTestModel member to
                     initiate the call to test the URL.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                               private final Service<Void> urlTestCommand = new Service<Void>() {
                                   @Override
                                   protected Task<Void> createTask() {
                                       return new Task<Void>() {
                                           @Override
                                           protected Void call() throws Exception {
                                               updateProgress(0.1d, 1.0d);
                                               updateMessage("Testing url " + url.get());
                                               urlTestModel.testURL( url.get() );
                                               return null;
                                           }
                                           protected void failed() {
                                               getException().printStackTrace();  // just in case
                                           }
                                       };
                                   }
                               };

                  .. container:: paragraph

                     A JavaFX ``Service`` was used since the ``Service``
                     objects needs to always exist for binding purposes.
                     URLTestView binds its ``ProgressBar``, status
                     ``Label``, and container controls to the
                     URLTestViewModel object which will be available for
                     the life of the app. Shown earlier, the
                     URLTestViewModel properties delegate to the
                     ``Service`` object. A ``Task`` is a one-shot
                     invocation and using that would not work for
                     multiple test() invocations.

                  .. container:: sidebarblock

                     .. container:: content

                        .. container:: paragraph

                           The design in this article puts the burden of
                           asynchronous processing on the ViewModel.
                           This provides direct feedback to View
                           controls using JavaFX binding. An alternative
                           approach is to use a general event emitting
                           scheme to listen for task starting, task
                           ending, progress, and message events. This
                           would support breaking out the urlTestCommand
                           ``Service`` subclass into a separate code
                           module.

                  .. container:: paragraph

                     The presentation of the URLTestViewModel class
                     concludes with the update() method. This method
                     issues a call to the Model, unpacks the results,
                     and updates the ViewModel properties. Recall that
                     the View has bound to these properties and will
                     automatically be updated (there is no similar
                     update() method in the View.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                               private void update(String event) {

                                   urlTestModel.getUrlTestObject().ifPresent(

                                       (testObject) -> {

                                           wasError.set( testObject.getWasError() );

                                           if( !testObject.getWasError() ) {

                                               statusCode.set(
                                                       "Status code: " +
                                                       String.valueOf(testObject.getStatusCode())
                                               );

                                               loadTime.set(
                                                       String.valueOf(testObject.getLoadTime()) +
                                                               " ms"
                                               );

                                               errorMessage.set(testObject.getErrorMessage());
                                           } else {
                                               statusCode.set("");  // use empty TextField, not 0
                                               loadTime.set("");  // use empty TextField, not 0
                                               errorMessage.set( testObject.getErrorMessage() );
                                           }
                                       });
                               }

            .. container:: sect3

               .. rubric:: 7.2.5. Model
                  :name: _model_3

               .. container:: paragraph

                  URLTestModel is presented in its entirety below.
                  URLTestModel maintains a copy of a domain object. Upon
                  initialization, this object is empty so an
                  ``Optional`` is used. A getter is provided for
                  ViewModels. The testURL() method issues an HTTP GET
                  call and records the results in the URLTestObject
                  member. If the HTTP GET call is successful, the
                  URLTestObject will contain the status code (probably
                  200) and an elapsed time. If unsuccessful, the
                  URLTestObject will set a convenient wasError flag and
                  an errorMessage.

               .. container:: paragraph

                  When the Model has retrieved the contents at the URL
                  or generated an error, the publish() method of the
                  Notifications object is invoked. This prompts
                  URLTestViewModel to update itself, but in a decoupled
                  fashion. It is important to note that URLTestModel
                  does not hold a reference to a URLTestViewModel
                  object.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class URLTestModel {

                            private final Notifications notifications =
                                    new Notifications();

                            private Optional<URLTestObject> urlTestObject =
                                    Optional.empty();

                            public Optional<URLTestObject> getUrlTestObject() {
                                return urlTestObject;
                            }

                            public Optional<URLTestObject> testURL(String url) {

                                try {
                                    long startTimeMillis = System.currentTimeMillis();
                                    HttpURLConnection urlConnection =
                                            (HttpURLConnection) new URL(url).openConnection();
                                    try (
                                            InputStream is = urlConnection.getInputStream();
                                    ) {
                                        while (is.read() != -1) {
                                        }
                                    }
                                    long endTimeMillis = System.currentTimeMillis();

                                    URLTestObject uto = new URLTestObject(
                                            urlConnection.getResponseCode(),
                                            (int) (endTimeMillis - startTimeMillis)
                                    );

                                    urlTestObject = Optional.of(uto);

                                } catch(Exception exc) {
                                    URLTestObject uto = new URLTestObject(exc.getMessage());
                                    urlTestObject = Optional.of(uto);
                                }

                                notifications.publish(Notifications.EVENT_MODEL_UPDATE);

                                return urlTestObject;
                            }
                        }

               .. container:: paragraph

                  URLTestModel also does not attempt to bind to
                  URLTestViewModel using JavaFX. Since the asynchrony is
                  handled at the ViewModel layer, the Model is free to
                  operate off of the JavaFX Thread. Attempting to
                  double-bind (View→ViewModel→Model) would result in an
                  application threading error if binding were used.
                  Wrapped in a Platform.runLater(), a double-bind does
                  not violate the prescribed dependency
                  order — ViewModel already holds a reference to
                  Model — but might result in an inconsistent update.

               .. container:: paragraph

                  This POJO is the domain object used by the Model. As a
                  POJO, this is can be maintained in a commons library
                  and shared among non-UI components like a RESTful web
                  services project.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class URLTestObject {

                            private final Integer statusCode;
                            private final Integer loadTime;
                            private final Boolean wasError;
                            private final String errorMessage;

                            public URLTestObject(Integer statusCode,
                                                 Integer loadTime) {
                                this.statusCode = statusCode;
                                this.loadTime = loadTime;
                                wasError = false;
                                errorMessage = "";
                            }

                            public URLTestObject(String errorMessage) {
                                this.statusCode = null;
                                this.loadTime = null;
                                wasError = true;
                                this.errorMessage = errorMessage;
                            }

                            public Integer getLoadTime() {
                                return loadTime;
                            }

                            public Integer getStatusCode() {
                                return statusCode;
                            }

                            public Boolean getWasError() {
                                return wasError;
                            }

                            public String getErrorMessage() {
                                return errorMessage;
                            }
                        }

            .. container:: sect3

               .. rubric:: 7.2.6. Notifications
                  :name: _notifications

               .. container:: paragraph

                  This class is a lightweight pub/sub implementation.
                  Event types are registered as String constants at the
                  top of the file. Subscribers are identified by their
                  class hashCode. All the published events will run on
                  the JavaFX Thread.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class Notifications {

                            public final static String EVENT_MODEL_UPDATE = "modelUpdate";

                            private final Map<String, List<SubscriberObject>> subscribers = new LinkedHashMap<>();

                            private static Notifications instance = new Notifications();

                            public void publish(String event) {

                                Platform.runLater( () -> {
                                    List<SubscriberObject> subscriberList = instance.subscribers.get(event);

                                    if (subscriberList != null) {

                                        subscriberList.forEach(
                                            subscriberObject -> subscriberObject.getCb().accept(event)
                                            );

                                        // event ends after last subscriber gets callback
                                    }
                                } );
                            }

                            public void subscribe(String event, Object subscriber, Consumer<String> cb) {

                                if( !instance.subscribers.containsKey(event) ) {
                                    List<SubscriberObject> slist = new ArrayList<>();
                                    instance.subscribers.put( event, slist );
                                }

                                List<SubscriberObject> subscriberList = instance.subscribers.get( event );

                                subscriberList.add( new SubscriberObject(subscriber, cb) );
                            }

                            public void unsubscribe(String event, Object subscriber) {

                                List<SubscriberObject> subscriberList = instance.subscribers.get( event );

                                if (subscriberList == null) {
                                    subscriberList.remove( subscriber );
                                }
                            }

                            static class SubscriberObject {

                                private final Object subscriber;
                                private final Consumer<String> cb;

                                public SubscriberObject(Object subscriber,
                                                        Consumer<String> cb) {
                                    this.subscriber = subscriber;
                                    this.cb = cb;
                                }

                                public Object getSubscriber() {
                                    return subscriber;
                                }

                                public Consumer<String> getCb() {
                                    return cb;
                                }

                                @Override
                                public int hashCode() {
                                    return subscriber.hashCode();
                                }

                                @Override
                                public boolean equals(Object obj) {
                                    return subscriber.equals(obj);
                                }
                            }
                        }

               .. container:: paragraph

                  Notifications is a singleton so that any class — both
                  URLTestViewModel and URLTestModel in this case — will
                  subscribe to and publish to the right instance.

            .. container:: sect3

               .. rubric:: 7.2.7. App
                  :name: _app

               .. container:: paragraph

                  For completeness, the Application subclass is listed
                  below.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ModelChangeApp extends Application {

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Scene scene = new Scene(new URLTestView());

                                primaryStage.setTitle("Model Change App");
                                primaryStage.setScene( scene );
                                primaryStage.setWidth(568);
                                primaryStage.setHeight(320);
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

               .. container:: paragraph

                  MVVM is an architecture that separates the View from
                  the Model. Unlike other architectures, this separation
                  includes a specific dependency graph: View depends on
                  ViewModel depends on Model. All three component types
                  collaborate, but in cases where data moves in the
                  opposite direction of the dependency graph, the
                  communication is indirect. In this example, the
                  indirect communication was provided by JavaFX binding
                  and a special Notifications class. By keeping the
                  Model and ViewModel free of View dependencies, the
                  MVVM architecture fosters reuse. URLTestModel can be
                  used by other ViewModels and URLTestViewModel can be
                  used by other Views.

            .. container:: sect3

               .. rubric:: 7.2.8. Completed Code
                  :name: _completed_code_7

               .. container:: paragraph

                  The completed code in this example is available as a
                  Gradle project here. There are two examples in the
                  JAR. Run the class
                  net.bekwam.bkcourse.modelchangeapp.ModelChangeApp.

               .. container:: paragraph

                  `bkcourse_mvvmapp_sources.zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_mvvmapp_sources.zip>`__

         .. container:: sect2

            .. rubric:: 7.3. The Dialog Class
               :name: _the_dialog_class

            .. container:: paragraph

               The ``Dialog`` class was a surprising latecomer to the
               JavaFX library. The Dialog class displays a customized
               supporting window to execute an operation or to retrieve
               additional information. The subclass ``Alert`` is also
               available and is better suited for focused interactions
               like a confirmation, retrieving a text value
               (``TextInputDialog``), or a selected item
               (``ChoiceDialog``).

            .. container:: paragraph

               This section will demonstrate the Dialog class built on a
               domain object, ConnectionInfo. A main screen is displayed
               with a ``TextField`` for a database URL. Pressing the set
               ``Button`` displays the Dialog. If the user fills in
               values and presses the Save Button, the Dialog is
               dismissed and the ConnectionInfo domain object is
               returned to the caller. If the Cancel Button is pressed,
               an empty ``Optional`` is returned.

            .. container:: paragraph

               This screenshot shows the app when it starts up. The DB
               URL field is empty.

            .. container:: imageblock

               .. container:: content

                  |dialogapp main empty|

            .. container:: paragraph

               Pressing the Set Button displays the Dialog. The user has
               filled in values for host, username, and password.

            .. container:: imageblock

               .. container:: content

                  |dialogapp dialog filledin|

            .. container:: paragraph

               Closing the Dialog via the Save Button forms a
               ConnectionInfo object that is returned to the caller.
               This value is formed into a ``String`` and put into the
               TextField.

            .. container:: imageblock

               .. container:: content

                  |dialogapp main filledin|

            .. container:: paragraph

               The reverse interaction is also supported in this
               example. If the user types in a well-formed URL, that URL
               will be parsed and displayed in the Dialog. URL String
               validation has been left off. An invalid URL String will
               result in an empty Dialog.

            .. container:: sect3

               .. rubric:: 7.3.1. App
                  :name: _app_2

               .. container:: paragraph

                  The JavaFX ``Application`` subclass adds UI controls
                  for the DB URL TextField and Save Button.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class DialogApp extends Application {

                            private final TextField dbURL = new TextField();

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Label label = new Label("DB URL");
                                dbURL.setPrefWidth(400.0d );
                                Button btn = new Button("Set");
                                btn.setOnAction( this::showSetDialog );

                                VBox vbox = new VBox(label, dbURL, btn );
                                vbox.setSpacing( 10.0d );
                                vbox.setPadding( new Insets(40.0d) );

                                Scene scene = new Scene( vbox );

                                primaryStage.setTitle("Dialog App");
                                primaryStage.setScene( scene );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }

               .. container:: paragraph

                  showSetDialog() is a method reference that initializes
                  a ConnectionInfo object, displays the Dialog, and
                  retrieves a value if set by the user.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void showSetDialog(ActionEvent evt) {

                                ConnectionInfo fromURL = ciConverter.fromString( dbURL.getText() );

                                ConnectionDialog dialog = new ConnectionDialog(fromURL);

                                Optional<ConnectionInfo> ci = dialog.showAndWait();

                                ci.ifPresent( c -> dbURL.setText(
                                        ciConverter.toString(c)
                                    )
                                );
                            }

               .. container:: paragraph

                  The app is using a JavaFX ``StringConverter`` to
                  encapsulate the code behind forming a String from the
                  set of fields of the ConnectionInfo object. The
                  StringConverter is stored as a field in the
                  Application subclass.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private final ConnectionInfoStringConverter ciConverter =
                                    new ConnectionInfoStringConverter();


                           class ConnectionInfoStringConverter extends StringConverter<ConnectionInfo> {

                                private final String format = "%s@%s:%s";

                                @Override
                                public String toString(ConnectionInfo c) {
                                    return String.format( format, c.getUsername(), c.getPassword(), c.getHost() );
                                }

                                @Override
                                public ConnectionInfo fromString(String s) {

                                    if( s != null && s.contains("@") && s.contains(":") ) {
                                        String[] toks = s.split("@");
                                        String username = toks[0];
                                        String[] secondPart = toks[1].split(":");
                                        String password = secondPart[0];
                                        String host = secondPart[1];
                                        ConnectionInfo ci = new ConnectionInfo(
                                                username, password, host
                                        );
                                        return ci;
                                    }

                                    return null;
                                }
                            }

            .. container:: sect3

               .. rubric:: 7.3.2. Dialog
                  :name: _dialog

               .. container:: paragraph

                  The Dialog subclass adds UI controls to the DialogPane
                  field in the constructor. Notice the lack of explicit
                  ``ActionEvent`` handlers. When using Dialog or Alert,
                  ButtonType and ButtonData are preferred over raw
                  Button objects. These higher-order objects make the
                  app UI more consistent because the Button placement,
                  labeling, and behavior is handed in the Dialog
                  abstraction.

               .. container:: paragraph

                  The subclass contains a type parameter to the
                  ConnectionInfo domain object.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ConnectionDialog extends Dialog<ConnectionInfo> {

                            private final TextField tfHost = new TextField();
                            private final TextField tfUser = new TextField();
                            private final TextField tfPassword = new TextField();

                            public ConnectionDialog(ConnectionInfo initialData) {

                                Label hostLabel = new Label("Host");
                                Label userLabel = new Label("User");
                                Label passwordLabel = new Label("Password");

                                VBox vbox = new VBox(
                                        hostLabel, tfHost,
                                        userLabel, tfUser,
                                        passwordLabel, tfPassword
                                );

                                vbox.setSpacing( 10.0d );
                                vbox.setPadding( new Insets(40.0d) );

                                DialogPane dp = getDialogPane();

                                setTitle( "Connection Info" );
                                setResultConverter( this::formResult );

                                ButtonType bt = new ButtonType("Save", ButtonBar.ButtonData.OK_DONE);
                                dp.getButtonTypes().addAll( bt, ButtonType.CANCEL );
                                dp.setContent( vbox );

                                init( initialData );
                            }

               .. container:: paragraph

                  The init() method sets the Dialog UI controls based on
                  the ConnectionInfo fields.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void init(ConnectionInfo ci) {
                                if (ci != null) {
                                    tfHost.setText( ci.getHost() );
                                    tfUser.setText( ci.getUsername() );
                                    tfPassword.setText( ci.getPassword() );
                                }
                            }

               .. container:: paragraph

                  The setResultConverter() is the mechanism by which the
                  Dialog will communicate its domain object back to the
                  caller. The converter is a callback that returns a
                  ConnectionInfo object if one can be formed from the
                  input. In this case, the Dialog makes a decision to
                  send back an object if the Save Button was pressed.
                  Validating the Dialog fields can be performed as part
                  of the TextField themselves or as an EventFilter
                  attached to the Save Button.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private ConnectionInfo formResult(ButtonType bt) {
                                ConnectionInfo retval = null;
                                if( bt.getButtonData() == ButtonBar.ButtonData.OK_DONE ) {
                                    retval = new ConnectionInfo(
                                            tfHost.getText(), tfUser.getText(), tfPassword.getText()
                                    );
                                }
                                return retval;
                            }

            .. container:: sect3

               .. rubric:: 7.3.3. Domain Object
                  :name: _domain_object

               .. container:: paragraph

                  The domain object ConnectionInfo is an immutable POJO.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ConnectionInfo {

                            private final String host;
                            private final String username;
                            private final String password;

                            public ConnectionInfo(String host,
                                                  String username,
                                                  String password) {
                                this.host = host;
                                this.username = username;
                                this.password = password;
                            }

                            public String getHost() {
                                return host;
                            }

                            public String getUsername() {
                                return username;
                            }

                            public String getPassword() {
                                return password;
                            }
                        }

               .. container:: paragraph

                  The JavaFX Dialog and Alert subclass are windows that
                  provide a simpler interface and a more consistent
                  style than a raw Stage. Alert is the preferred class
                  when a warning, confirmation, or single value needs to
                  be retrieved from the user. Dialog is used for
                  complex, but contained, interactions with the user.
                  This example showed how a main Stage can keep its view
                  simple by delegating the retrieval of detailed
                  information to a Dialog. Dialog — when paired with a
                  type parameter — improves information hiding in an app
                  by turning a showAndWait() call into a function that
                  returns a value.

            .. container:: sect3

               .. rubric:: 7.3.4. Source
                  :name: _source_3

               .. container:: paragraph

                  The complete source code and Gradle project can be
                  found at the link below.

               .. container:: paragraph

                  `DialogApp Source
                  Zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_dialogapp_sources.zip>`__

   .. container:: sect1

      .. rubric:: 8. Best Practices
         :name: _best_practices

      .. container:: sectionbody

         .. container:: sect2

            .. rubric:: 8.1. Styleable Properties
               :name: _styleable_properties

            .. container:: paragraph

               A JavaFX property can be styled via css by using a
               StyleableProperty. This is useful when controls need
               properties that can be set via css.

            .. container:: paragraph

               In order to use a StyleableProperty on a Control, one
               needs to create a new CssMetaData using the
               StyleableProperty. CssMetaData created for a control
               needs to be added to the List<CssMetaData> obtained from
               the control’s ancestor. This new list is then returned
               from the ``getControlCssMetaData()``.

            .. container:: paragraph

               By convention, control classes that have CssMetaData will
               implement a static method getClassCssMetaData() and it is
               customary to have getControlCssMetaData() simply return
               getClassCssMetaData(). The purpose of
               getClassCssMetaData() is to allow sub-classes to easily
               include the CssMetaData of some ancestor.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     // StyleableProperty
                     private final StyleableProperty<Color> color =
                         new SimpleStyleableObjectProperty<>(COLOR, this, "color");

                     // Typical JavaFX property implementation
                     public Color getColor() {
                         return this.color.getValue();
                     }
                     public void setColor(final Color color) {
                         this.color.setValue(color);
                     }
                     public ObjectProperty<Color> colorProperty() {
                         return (ObjectProperty<Color>) this.color;
                     }

                     // CssMetaData
                     private static final CssMetaData<MY_CTRL, Paint> COLOR =
                         new CssMetaData<MY_CTRL, Paint>("-color", PaintConverter.getInstance(), Color.RED) {

                         @Override
                         public boolean isSettable(MY_CTRL node) {
                             return node.color == null || !node.color.isBound();
                         }

                         @Override
                         public StyleableProperty<Paint> getStyleableProperty(MY_CTRL node) {
                             return node.color;
                         }
                     };

                     private static final List<CssMetaData<? extends Styleable, ?>> STYLEABLES;
                     static {
                         // Fetch CssMetaData from its ancestors
                         final List<CssMetaData<? extends Styleable, ?>> styleables =
                             new ArrayList<>(Control.getClassCssMetaData());
                         // Add new CssMetaData
                         styleables.add(COLOR);
                         STYLEABLES = Collections.unmodifiableList(styleables);
                     }

                     // Return all CssMetadata information
                     public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
                         return STYLEABLES;
                     }

                     @Override
                     public List<CssMetaData<? extends Styleable, ?>> getControlCssMetaData() {
                         return getClassCssMetaData();
                     }

            .. container:: paragraph

               Creation of StyleableProperty and CssMetaData needs a lot
               of boiler-plate code and this can be reduced by using
               `StyleablePropertyFactory <https://docs.oracle.com/javase/8/javafx/api/javafx/css/StyleablePropertyFactory.html>`__.
               StyleablePropertyFactory contains methods to create
               StyleableProperty with corresponding CssMetaData.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     // StyleableProperty
                     private final StyleableProperty<Color> color =
                         new SimpleStyleableObjectProperty<>(COLOR, this, "color");

                     // Typical JavaFX property implementation
                     public Color getColor() {
                         return this.color.getValue();
                     }
                     public void setColor(final Color color) {
                         this.color.setValue(color);
                     }
                     public ObjectProperty<Color> colorProperty() {
                         return (ObjectProperty<Color>) this.color;
                     }

                     // StyleablePropertyFactory
                     private static final StyleablePropertyFactory<MY_CTRL> FACTORY =
                         new StyleablePropertyFactory<>(Control.getClassCssMetaData());

                     // CssMetaData from StyleablePropertyFactory
                     private static final CssMetaData<MY_CTRL, Color> COLOR =
                         FACTORY.createColorCssMetaData("-color", s -> s.color, Color.RED, false); 

                     // Return all CssMetadata information from StyleablePropertyFactory
                     public static List<CssMetaData<? extends Styleable, ?>> getClassCssMetaData() {
                         return FACTORY.getCssMetaData();
                     }

                     @Override public List<CssMetaData<? extends Styleable, ?>> getControlCssMetaData() {
                         return getClassCssMetaData();
                     }

         .. container:: sect2

            .. rubric:: 8.2. Tasks
               :name: _tasks

            .. container:: paragraph

               This article demonstrates how to use a JavaFX Task to
               keep the UI responsive. It is imperative that any
               operation taking more than a few hundred milliseconds be
               executed on a separate Thread to avoid locking up the UI.
               A Task wraps up the sequence of steps in a long-running
               operation and provides callbacks for the possible
               outcomes.

            .. container:: paragraph

               The **Task** class also keeps the user aware of the
               operation through properties which can be bound to UI
               controls like ProgressBars and Labels. The binding
               dynamically updates the UI. These properties include

            .. container:: olist arabic

               #. **runningProperty** - Whether or not the Task is
                  running

               #. **progressProperty** - The percent complete of an
                  operation

               #. **messageProperty** - Text describing a step in the
                  operation

            .. container:: sect3

               .. rubric:: 8.2.1. Demonstration
                  :name: _demonstration

               .. container:: paragraph

                  The following screenshots show the operation of an
                  HTML retrieval application.

               .. container:: paragraph

                  Entering a URL and pressing "Go" will start a JavaFX
                  Task. When running, the Task will make an HBox visible
                  that contains a ProgressBar and a Label. The
                  ProgressBar and Label are updated throughout the
                  operation.

               .. container:: imageblock

                  .. container:: content

                     |tasks pb|

               .. container:: paragraph

                  When the retrieval is finished, a succeeded() callback
                  is invoked and the UI is updated. Note that the
                  succeeded() callback takes place on the FX Thread, so
                  it is safe to manipulate controls.

               .. container:: imageblock

                  .. container:: content

                     |tasks contents|

               .. container:: paragraph

                  If there was an error retrieving the HTML, a failed()
                  callback is invoked and an error Alert is shown.
                  failed() also takes place on the FX Thread. This
                  screenshot shows invalid input. An "h" is used in the
                  URL instead of the correct "http".

               .. container:: imageblock

                  .. container:: content

                     |tasks error|

            .. container:: sect3

               .. rubric:: 8.2.2. Code
                  :name: _code

               .. container:: paragraph

                  An event handler is placed on the Get HTML Button
                  which creates the Task. The entry point of the Task is
                  the call() method which starts by calling
                  updateMessage() and updateProgress(). These methods
                  are executed on the FX Thread and will result in
                  updates to any bound properties.

               .. container:: paragraph

                  The program proceeds by issuing an HTTP GET using
                  standard java.net classes. A String "retval" is built
                  up from the retrieved characters. The message and
                  progress properties are updated with more calls to
                  updateMessage() and updateProgress(). The call()
                  method ends with a return of the String containing the
                  HTML text.

               .. container:: paragraph

                  On a successful operation, the succeeded() callback is
                  invoked. getValue() is a Task method that will return
                  the value accrued in the Task (recall "retval"). The
                  type of the value is what is provided in the generic
                  argument, in this case "String". This could be a
                  complex type like a domain object or a Collection. The
                  succeeded() operation runs on the FX Thread, so the
                  getValue() String is directly set on the TextArea.

               .. container:: paragraph

                  If the operation failed, an Exception is thrown. The
                  Exception is caught by the Task and converted to a
                  failed() call. failed() is also FX Thread-safe and it
                  displays an Alert.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        String url = tfURL.getText();

                        Task<String> task = new Task<String>() {

                            @Override
                            protected String call() throws Exception {

                                updateMessage("Getting HTML from " + url );
                                updateProgress( 0.5d, 1.0d );

                                HttpURLConnection c = null;
                                InputStream is = null;
                                String retval = "";

                                try {

                                    c = (HttpURLConnection) new URL(url).openConnection();

                                    updateProgress( 0.6d, 1.0d );
                                    is = c.getInputStream();
                                    int ch;
                                    while( (ch=is.read()) != -1 ) {
                                        retval += (char)ch;
                                    }

                                } finally {
                                    if( is != null ) {
                                        is.close();
                                    }
                                    if( c != null ) {
                                        c.disconnect();
                                    }
                                }

                                updateMessage("HTML retrieved");
                                updateProgress( 1.0d, 1.0d );

                                return retval;
                            }

                            @Override
                            protected void succeeded() {
                                contents.setText( getValue() );
                            }

                            @Override
                            protected void failed() {
                                Alert alert = new Alert(Alert.AlertType.ERROR, getException().getMessage() );
                                alert.showAndWait();
                            }
                        };

               .. container:: paragraph

                  Notice that the Task does not update the ProgressBar
                  and status Label directly. Instead, the Task makes
                  safe calls to updateMessage() and updateProgress(). To
                  update the UI, JavaFX binding is used in the following
                  statements.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        bottomControls.visibleProperty().bind( task.runningProperty() );
                        pb.progressProperty().bind( task.progressProperty() );
                        messageLabel.textProperty().bind( task.messageProperty() );

               .. container:: paragraph

                  Task.runningProperty is a boolean that can be bound to
                  the bottomControls HBox visibleProperty.
                  Task.progressProperty is a double that can be bound to
                  the ProgressBar progressProperty. Task.messageProperty
                  is a String that can be bound to the status Label
                  textProperty.

               .. container:: paragraph

                  To run the Task, create a Thread providing the Task as
                  a constructor argument and invoke start().

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        new Thread(task).start();

               .. container:: paragraph

                  For any long-running operation — File IO, the
                  Network — use a JavaFX Task to keep your application
                  responsive. The JavaFX Task gives your application a
                  consistent way of handling asynchronous operations and
                  exposes several properties that can be used to
                  eliminate boilerplate and programming logic.

            .. container:: sect3

               .. rubric:: 8.2.3. Complete Code
                  :name: _complete_code_8

               .. container:: paragraph

                  The code can be tested in a single .java file.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class ProgressBarApp extends Application {

                            private HBox bottomControls;
                            private ProgressBar pb;
                            private Label messageLabel;

                            private TextField tfURL;

                            private TextArea contents;

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Parent p = createMainView();

                                Scene scene = new Scene(p);

                                primaryStage.setTitle("ProgressBarApp");
                                primaryStage.setWidth( 667 );
                                primaryStage.setHeight( 376 );
                                primaryStage.setScene( scene );
                                primaryStage.show();
                            }

                            private Parent createMainView() {

                                VBox vbox = new VBox();
                                vbox.setPadding( new Insets(10) );
                                vbox.setSpacing( 10 );

                                HBox topControls = new HBox();
                                topControls.setAlignment(Pos.CENTER_LEFT);
                                topControls.setSpacing( 4 );

                                Label label = new Label("URL");
                                tfURL = new TextField();
                                HBox.setHgrow( tfURL, Priority.ALWAYS );
                                Button btnGetHTML = new Button("Get HTML");
                                btnGetHTML.setOnAction( this::getHTML );
                                topControls.getChildren().addAll(label, tfURL, btnGetHTML);

                                contents = new TextArea();
                                VBox.setVgrow( contents, Priority.ALWAYS );

                                bottomControls = new HBox();
                                bottomControls.setVisible(false);
                                bottomControls.setSpacing( 4 );
                                HBox.setMargin( bottomControls, new Insets(4));

                                pb = new ProgressBar();
                                messageLabel = new Label("");
                                bottomControls.getChildren().addAll(pb, messageLabel);

                                vbox.getChildren().addAll(topControls, contents, bottomControls);

                                return vbox;
                            }

                            public void getHTML(ActionEvent evt) {

                                String url = tfURL.getText();

                                Task<String> task = new Task<String>() {

                                    @Override
                                    protected String call() throws Exception {

                                        updateMessage("Getting HTML from " + url );
                                        updateProgress( 0.5d, 1.0d );

                                        HttpURLConnection c = null;
                                        InputStream is = null;
                                        String retval = "";

                                        try {

                                            c = (HttpURLConnection) new URL(url).openConnection();

                                            updateProgress( 0.6d, 1.0d );
                                            is = c.getInputStream();
                                            int ch;
                                            while( (ch=is.read()) != -1 ) {
                                                retval += (char)ch;
                                            }

                                        } finally {
                                            if( is != null ) {
                                                is.close();
                                            }
                                            if( c != null ) {
                                                c.disconnect();
                                            }
                                        }

                                        updateMessage("HTML retrieved");
                                        updateProgress( 1.0d, 1.0d );

                                        return retval;
                                    }

                                    @Override
                                    protected void succeeded() {
                                        contents.setText( getValue() );
                                    }

                                    @Override
                                    protected void failed() {
                                        Alert alert = new Alert(Alert.AlertType.ERROR, getException().getMessage() );
                                        alert.showAndWait();
                                    }
                                };

                                bottomControls.visibleProperty().bind( task.runningProperty() );
                                pb.progressProperty().bind( task.progressProperty() );
                                messageLabel.textProperty().bind( task.messageProperty() );

                                new Thread(task).start();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }
                        }

         .. container:: sect2

            .. rubric:: 8.3. Avoid Nulls in ComboBoxes
               :name: _avoid_nulls_in_comboboxes

            .. container:: paragraph

               To use a ``ComboBox`` in JavaFX, declare a List of items
               and set an initial value using setValue(). The
               ``ComboBox`` method getValue() retrieves the currently
               selected value. If an initial value is not provided, the
               control defaults to a null value.

            .. container:: paragraph

               The null value is a problem when the ``ComboBox`` drives
               other logic like an upper-case transformation or the
               lookup of a database record. While a null check is
               usually used to prevent this type of error, an empty
               object is preferred in order to simplify the code.
               ComboBoxes often appear in clusters and the empty object
               technique reduces null checks in the interaction of
               related ComboBoxes and on save and load operations.

            .. container:: paragraph

               This article presents a pair of related ComboBoxes. A
               country selection in one ``ComboBox`` modifies the list
               of available city items in a second ``ComboBox``. Neither
               selection is required. The user can press the Save
               ``Button`` at any time and if no selection is made for
               either ``ComboBox``, an empty object — in this case an
               empty String — will be returned.

            .. container:: paragraph

               This is a screenshot of the app. Selecting "Switzerland"
               from an empty initial value will fill the city
               ``ComboBox`` with Swiss cities. Selecting the city
               "Zurich" and pressing Save will retrieve those values.

            .. container:: imageblock

               .. container:: content

                  |nonullcombo screenshot|

            .. container:: sect3

               .. rubric:: 8.3.1. Data Structure
                  :name: _data_structure

               .. container:: paragraph

                  The data structures supporting the app are a List of
                  countries and a Map of cities. The Map of cities uses
                  country as a key.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class NoNullComboApp extends Application {

                            private List<String> countries = new ArrayList<>();

                            private Map<String, List<String>> citiesMap = new LinkedHashMap<>();

                            private void initData() {

                                String COUNTRY_FR = "France";
                                String COUNTRY_DE = "Germany";
                                String COUNTRY_CH = "Switzerland";

                                countries.add(COUNTRY_FR); countries.add(COUNTRY_DE); countries.add(COUNTRY_CH);

                                List<String> frenchCities = new ArrayList<>();
                                frenchCities.add("Paris");
                                frenchCities.add("Strasbourg");

                                List<String> germanCities = new ArrayList<>();
                                germanCities.add("Berlin");
                                germanCities.add("Cologne");
                                germanCities.add("Munich");

                                List<String> swissCities = new ArrayList<>();
                                swissCities.add("Zurich");

                                citiesMap.put(COUNTRY_FR, frenchCities );
                                citiesMap.put(COUNTRY_DE, germanCities );
                                citiesMap.put(COUNTRY_CH, swissCities );
                            }

               .. container:: paragraph

                  To retrieve the set of cities for a given country, use
                  the get() method of the Map. The containsKey() method
                  can be used to determine whether or not the Map
                  contains a value for the specified country. In this
                  example, containsKey() will be used to handle the
                  empty object case.

            .. container:: sect3

               .. rubric:: 8.3.2. UI
                  :name: _ui

               .. container:: paragraph

                  The UI is a pair of ComboBoxes with Labels and a Save
                  Button. The controls are put in a ``VBox`` and
                  left-justified. The ``VBox`` is wrapped in a
                  ``TilePane`` and centered. The ``TilePane`` was used
                  since it does not stretch the ``VBox`` horizontally.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Label countryLabel = new Label("Country:");
                                country.setPrefWidth(200.0d);
                                Label cityLabel = new Label("City:");
                                city.setPrefWidth(200.0d);
                                Button saveButton = new Button("Save");

                                VBox vbox = new VBox(
                                        countryLabel,
                                        country,
                                        cityLabel,
                                        city,
                                        saveButton
                                );
                                vbox.setAlignment(Pos.CENTER_LEFT );
                                vbox.setSpacing( 10.0d );

                                TilePane outerBox = new TilePane(vbox);
                                outerBox.setAlignment(Pos.CENTER);

                                Scene scene = new Scene(outerBox);

                                initData();

            .. container:: sect3

               .. rubric:: 8.3.3. Initial Values
                  :name: _initial_values

               .. container:: paragraph

                  As mentioned earlier, if a value is not specified for
                  a ``ComboBox``, then null will be returned in a
                  getValue() call. Although there are several defensive
                  techniques — if checks, Commons StringUtils
                  methods — for fending off NullPointerExceptions, it is
                  better to avoid them completely. This is especially
                  true as the interactions become complex or there are
                  several ComboBoxes that allow empty selections.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                country.getItems().add("");
                                country.getItems().addAll( countries );
                                country.setValue( "" );  // empty selection is object and not null

                                city.getItems().add("");
                                city.setValue( "" );

               .. container:: paragraph

                  In this app, the Country ``ComboBox`` will not be
                  changed, so its items are added in the start() method.
                  Country starts with an initial empty selection as does
                  city. City — at this point — contains a single empty
                  item.

            .. container:: sect3

               .. rubric:: 8.3.4. Interaction
                  :name: _interaction

               .. container:: paragraph

                  When the country value is changed, the contents of the
                  city ``ComboBox`` should be replaced. It is common to
                  use clear() on the backing list; however, this will
                  produce a null value in the ``ComboBox`` (no items, no
                  value). Instead, use removeIf() with a clause to keep
                  a single empty item. With the list cleared of all data
                  (except the empty item), the newly-selected contents
                  can be added with addAll().

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                country.setOnAction( (evt) -> {

                                    String cty = country.getValue();

                                    city.getItems().removeIf( (c) -> !c.isEmpty() );

                                    if( citiesMap.containsKey(cty) ) {  // not an empty key
                                        city.getItems().addAll( citiesMap.get(cty) );
                                    }
                                });

                                saveButton.setOnAction( (evt) -> {
                                   System.out.println("saving country='" + country.getValue() +
                                                              "', city='" + city.getValue() + "'");
                                });

               .. container:: paragraph

                  The Save Button action will print out the values. In
                  no case will a null value be returned from getValue().

               .. container:: paragraph

                  If you’re a Java developer, you’ve written "if not
                  null" thousands of times. Yet, project after project,
                  I see NullPointerExceptions highlighting cases that
                  were missed or new conditions that have arisen. This
                  article presented a technique for keeping empty
                  objects in ComboBoxes by setting an initial value and
                  using removeIf() rather than clear() when changing
                  lists. Although, this example used String objects,
                  this can be expanded to work with domain objects that
                  have an hashCode/equals implementation, an empty
                  object representation, and a cellFactory or toString()
                  to produce an empty view.

            .. container:: sect3

               .. rubric:: 8.3.5. Complete Code
                  :name: _complete_code_9

               .. container:: paragraph

                  The code can be tested in a single .java file.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class NoNullComboApp extends Application {

                            private final ComboBox<String> country = new ComboBox<>();
                            private final ComboBox<String> city = new ComboBox<>();

                            private List<String> countries = new ArrayList<>();

                            private Map<String, List<String>> citiesMap = new LinkedHashMap<>();

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                Label countryLabel = new Label("Country:");
                                country.setPrefWidth(200.0d);
                                Label cityLabel = new Label("City:");
                                city.setPrefWidth(200.0d);
                                Button saveButton = new Button("Save");

                                VBox vbox = new VBox(
                                        countryLabel,
                                        country,
                                        cityLabel,
                                        city,
                                        saveButton
                                );
                                vbox.setAlignment(Pos.CENTER_LEFT );
                                vbox.setSpacing( 10.0d );

                                TilePane outerBox = new TilePane(vbox);
                                outerBox.setAlignment(Pos.CENTER);

                                Scene scene = new Scene(outerBox);

                                initData();

                                country.getItems().add("");
                                country.getItems().addAll( countries );
                                country.setValue( "" );  // empty selection is object and not null

                                city.getItems().add("");
                                city.setValue( "" );

                                country.setOnAction( (evt) -> {

                                    String cty = country.getValue();

                                    city.getItems().removeIf( (c) -> !c.isEmpty() );

                                    if( citiesMap.containsKey(cty) ) {  // not an empty key
                                        city.getItems().addAll( citiesMap.get(cty) );
                                    }
                                });

                                saveButton.setOnAction( (evt) -> {
                                   System.out.println("saving country='" + country.getValue() +
                                                              "', city='" + city.getValue() + "'");
                                });

                                primaryStage.setTitle("NoNullComboApp");
                                primaryStage.setScene( scene );
                                primaryStage.setWidth( 320 );
                                primaryStage.setHeight( 480 );
                                primaryStage.show();
                            }

                            public static void main(String[] args) {
                                launch(args);
                            }

                            private void initData() {

                                String COUNTRY_FR = "France";
                                String COUNTRY_DE = "Germany";
                                String COUNTRY_CH = "Switzerland";

                                countries.add(COUNTRY_FR); countries.add(COUNTRY_DE); countries.add(COUNTRY_CH);

                                List<String> frenchCities = new ArrayList<>();
                                frenchCities.add("Paris");
                                frenchCities.add("Strasbourg");

                                List<String> germanCities = new ArrayList<>();
                                germanCities.add("Berlin");
                                germanCities.add("Cologne");
                                germanCities.add("Munich");

                                List<String> swissCities = new ArrayList<>();
                                swissCities.add("Zurich");

                                citiesMap.put(COUNTRY_FR, frenchCities );
                                citiesMap.put(COUNTRY_DE, germanCities );
                                citiesMap.put(COUNTRY_CH, swissCities );
                            }
                        }

         .. container:: sect2

            .. rubric:: 8.4. Writing Javadoc for JavaFX Properties
               :name: _writing_javadoc_for_javafx_properties

            .. container:: sect3

               .. rubric:: 8.4.1. Background
                  :name: _background

               .. container:: paragraph

                  Documenting JavaFX APIs may not appear very different
                  from documenting a Java API but most of us are unaware
                  of the tools present to ease our work.

               .. container:: paragraph

                  While writing a JavaFX application or designing a
                  JavaFX control, a developer adds various JavaFX
                  properties which *normally* consists of a field and
                  three methods i.e. JavaFX property method, setter and
                  getter. These methods are generally *public* and
                  therefore, should be documented. Writing Javadoc for
                  all the three methods doesn’t makes sense when most of
                  it is implied. Nevertheless, there should be some
                  documentation and a way to show a link between all
                  these methods.

               .. container:: paragraph

                  The JavaFX team has been very thoughtful and
                  introduced a special option "**-javafx**" for the
                  javadoc command. This option introduces the following
                  flexibility:

               .. container:: ulist

                  -  Generates HTML documentation using the JavaFX
                     extensions to the standard doclet. The generated
                     documentation includes a "Property Summary" section
                     in addition to the other summary sections generated
                     by the standard Java doclet. The listed properties
                     are linked to the sections for the getter and
                     setter methods of each property.

                  -  If there are no documentation comments written
                     explicitly for getter and setter methods, the
                     documentation comments from the property method are
                     automatically copied to the generated documentation
                     for these methods.

                  -  Adds a new **@defaultValue** tag that allows
                     documenting the default value for a property.

                  -  Adds a new **@treatAsPrivate** tag that adds the
                     flexibility to not publish the doc for a public
                     method which is a part of the implementation
                     detail.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        javadoc -javafx MyClass.java -d testdir

            .. container:: sect3

               .. rubric:: 8.4.2. Example
                  :name: _example

               .. container:: paragraph

                  Generally, if you introduce a JavaFX property field,
                  you will add its corresponding property method along
                  with setter and getter. In this case, you are advised
                  to bundle them together and document *only* the field.
                  The "-javafx" option on the javadoc command will
                  generate the appropriate documentation for the rest of
                  the methods.

               .. container:: paragraph

                  **N.B.** - You can document an individual method in
                  case you want to add explicit information for the
                  method.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        /**
                         * Specifies whether this {@code Node} and its child nodes should be rendered
                         * as part of the scene graph. A node may be visible and yet not be shown
                         * in the rendered scene if, for instance, it is off the screen or obscured
                         * by another Node. Invisible nodes never receive mouse events or
                         * keyboard focus and never maintain keyboard focus when they become
                         * invisible.
                         *
                         * @defaultValue true
                         */
                        private BooleanProperty visible = new SimpleBooleanProperty(this, "visible", true);

                        public final void setVisible(boolean value) {
                            visibleProperty().set(value);
                        }

                        public final boolean isVisible() {
                            return visible.get();
                        }

                        public final BooleanProperty visibleProperty() {
                            return visible;
                        }

         .. container:: sect2

            .. rubric:: 8.5. Ignoring Warnings for Null Select Binding
               Expressions
               :name: _ignoring_warnings_for_null_select_binding_expressions

            .. container:: paragraph

               When working with the JavaFX Bindings class, you may get
               evaluation warnings in the console log. This scenario
               arises when using a binding expression on an object that
               may be null. For example, a ``TableView`` selection may
               drive the enabled state of Buttons. When the
               ``TableView`` is first displayed, there is no selection.
               This will display an error in the log of level WARNING.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Dec 31, 2016 9:11:14 AM com.sun.javafx.binding.SelectBinding$SelectBindingHelper getObservableValue
                     WARNING: Exception while evaluating select-binding [taxable]

            .. container:: paragraph

               "taxable" is a Boolean property on a POJO. The expression
               that caused this message is the following.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                         btnCalcTax.disableProperty().bind(
                             tblItems.getSelectionModel().selectedItemProperty().isNull().or(
                                     Bindings.select(
                                         tblItems.getSelectionModel().selectedItemProperty(),
                                         "taxable"
                                     ).isEqualTo(false)
                             )
                         );

            .. container:: paragraph

               The preceding statement disables the Calc Tax Button when
               there is no table selection or if there is a table
               selection, the selected item has its taxable field set to
               false. That is, the Calc Tax Button should only be
               enabled when a taxable item is selected.

            .. container:: paragraph

               JavaFX Bindings uses Java Logging, so raising the
               verbosity to SEVERE will ignore the WARNING level
               message. Conversely, if you want to lower the verbosity
               to see the stack trace supporting the WARNING, lower the
               verbosity to FINE. This statement is added to a
               logging.properties file. The program can be instructed to
               use that file by specifying
               -Djava.util.logging.config.file in the command.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     javafx.beans.level=SEVERE

            .. container:: paragraph

               For a quick check that does not require a separate file
               or command modification, you can add this to your
               program. Because of the dependency on Sun classes, you
               should remove this prior to committing.

            .. container:: listingblock

               .. container:: content

                  .. code:: prettyprint

                     Logging.getLogger().setLevel(PlatformLogger.Level.FINE )

            .. container:: paragraph

               The JavaFX WARNING may be too strong for a common use
               case. There is a ticket JDK-8162600 that may address this
               in a later JavaFX release.

         .. container:: sect2

            .. rubric:: 8.6. POJO Binding
               :name: _pojo_binding

            .. container:: paragraph

               In larger apps involving non-JavaFX technologies, sharing
               POJOs is a great way to help with maintenance. Doing an
               impact analysis is quicker when an IDE can search for
               common accesses and extensions. Moreover, POJO-based
               validation, logic, and utilities can also be reused.

            .. container:: paragraph

               JavaFX has a collection of static methods in the
               ``Bindings`` class to work with both POJOs and
               JavaFX-enabled Properties. This section demonstrates the
               use of the select() method which will link the core data
               types from a POJO to the JavaFX Property-based fields of
               a UI control. Once the core data type is repackaged as a
               Property, additional functionality from JavaFX can be
               chained such as string concantenation.

            .. container:: paragraph

               Because the data in this demonstration app is based on a
               POJO, an update needs to be made manually. Bi-directional
               binding works only when the source and the target are
               both Properties. This app uses a Track class with core
               data type fields like String: "album". If the Track class
               were written using JavaFX properties — say StringProperty
               : album — then a model change would automatically update
               the UI. A hybrid approach is presented whereby the core
               data type on one of the POJO fields initializes a
               separate JavaFX Property field and the update operation
               must change both fields.

            .. container:: imageblock

               .. container:: content

                  |bindings select screenshot|

            .. container:: sect3

               .. rubric:: 8.6.1. The POJOs
                  :name: _the_pojos

               .. container:: paragraph

                  Two POJOs are used: Track and Rating. Track contains
                  information about a music clip being played: album,
                  artist, track name.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class Track {

                            private String artist;
                            private String album;
                            private String track;
                            private Integer trackNo;
                            private Rating rating;
                            private Boolean downloaded;

               .. container:: paragraph

                  Rating is a pairing of a value (ex, 3) and a scale
                  (ex, max value of 5). There is a Rating member in a
                  Track which will show the Bindings.select() nesting
                  syntax.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class Rating {

                            private Float value;
                            private Float scale;

               .. container:: sidebarblock

                  .. container:: content

                     .. container:: paragraph

                        The construtor, getters, and setters have been
                        left off for brevity and are included in the
                        source download.

               .. container:: paragraph

                  In the Application subclass, the model is a single
                  field "currentTrack".

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                        public class BindingsSelectApp extends Application {

                            private final Track currentTrack = new Track(
                                    "Jaco Pastorious",
                                    "Jaco Pastorious",
                                    "Come On, Come Over",
                                    2,
                                    new Rating(4.99f, 5.00f),
                                    false
                            );

               .. container:: paragraph

                  Referring to the previous screenshot, the currentTrack
                  fields are displayed in the TextFields(). "rating" is
                  supplemented with a formatted String.

            .. container:: sect3

               .. rubric:: 8.6.2. UI Code
                  :name: _ui_code

               .. container:: paragraph

                  The ``TextField`` controls and the Download ``Button``
                  are also Application subclass fields so that they can
                  be used in both the Application.start() method and a
                  private initBindings() method.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private final TextField tfArtist = new TextField();
                            private final TextField tfAlbum = new TextField();
                            private final TextField tfTrack = new TextField();
                            private final TextField tfTrackNo = new TextField();
                            private final TextField tfRating = new TextField();
                            private final TextField tfDownloaded = new TextField();

                            private final Button downloadButton = new Button("Download");

                            private final BooleanProperty downloaded = new SimpleBooleanProperty(currentTrack, "downloaded");

               .. container:: paragraph

                  "downloaded" is a special JavaFX Property maintained
                  alongside the field of the same name in the
                  currentTrack object. As mentioned earlier, the POJO
                  will need to be updated manually. The BooleanProperty
                  "downloaded" is a convenience that keeps the app from
                  having to modify the tfDownload TextField directly.

               .. container:: paragraph

                  The start() method begins by creating the top
                  ``GridPane`` container and adding the TextField and
                  ``Label`` controls.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            @Override
                            public void start(Stage primaryStage) throws Exception {

                                GridPane gp = new GridPane();

                                gp.add(new Label("Artist"), 0, 0);
                                gp.add(tfArtist, 1, 0);
                                gp.add(new Label("Album"), 0, 1);
                                gp.add(tfAlbum, 1, 1);
                                gp.add(new Label("Track"), 0, 2);
                                gp.add(tfTrack, 1, 2);
                                gp.add(new Label("#"), 0, 3);
                                gp.add(tfTrackNo, 1, 3);
                                gp.add(new Label("Rating"), 0, 4);
                                gp.add(tfRating, 1, 4);
                                gp.add(new Label("Downloaded"), 0, 5);
                                gp.add(tfDownloaded, 1, 5);

                                gp.setHgap(4.0d);
                                gp.setVgap(8.0d);

                                VBox.setVgrow(gp, Priority.ALWAYS);
                                VBox.setMargin( gp, new Insets(40.0d) );

               .. container:: paragraph

                  A ``ButtonBar`` container is used to hold the Download
                  Button. The ButtonBar and GridPane are added to a
                  ``VBox`` and separated via a ``Separator``.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                                ButtonBar buttons = new ButtonBar();

                                ButtonBar.setButtonData(downloadButton, ButtonBar.ButtonData.OTHER);

                                buttons.getButtons().add(downloadButton);
                                buttons.setPadding(new Insets(10.0d) );

                                VBox vbox = new VBox(
                                        gp,
                                        new Separator(),
                                        buttons
                                );

            .. container:: sect3

               .. rubric:: 8.6.3. Bindings
                  :name: _bindings

               .. container:: paragraph

                  The bindings statements are in a private method
                  "initBindings" which is called from the
                  Application.start() method.

               .. container:: listingblock

                  .. container:: content

                     .. code:: prettyprint

                            private void initBindings() {

                                tfArtist.textProperty().bind( Bindings.select(currentTrack, "artist"));
                                tfAlbum.textProperty().bind( Bindings.select(currentTrack, "album"));
                                tfTrack.textProperty().bind( Bindings.select(currentTrack, "track"));

                                tfTrackNo.textProperty().bind(
                                        Bindings.select(currentTrack, "trackNo").asString()
                                );

                                tfRating.textProperty().bind(
                                        Bindings.concat(
                                            Bindings.select(currentTrack, "rating", "value").asString(),
                                            " out of ",
                                            Bindings.select(currentTrack, "rating", "scale").asString()
                                        )
                                );

                                tfDownloaded.textProperty().bind(downloaded.asString());
                                downloadButton.disableProperty().bind(downloaded);
                            }

               .. container:: sect4

                  .. rubric:: Bindings.select
                     :name: _bindings_select

                  .. container:: paragraph

                     Bindings.select is a static method that creates a
                     typed binding from a plain object or an
                     ObservableValue. In this example, a POJO is passed
                     in along with either a field name or a set of field
                     names that form an object path. For the artist,
                     album, and track fields, the value returned from
                     select() is a StringBinding and is compatible with
                     the textProperty() of the TextFields. The trackNo
                     select() call will return an IntegerBinding which
                     is not compatible with textProperty() so a method
                     asString() is added to convert the IntegerBinding
                     into a StringBinding. asString() is also used for
                     the special "downloaded" member variable which
                     returns a BooleanBinding that throws a
                     ClassCastException.

                  .. container:: paragraph

                     tfRating is bound to a complex expression. The
                     components of tfRating are the value (ex "4.99")
                     and the scale ("5.0"). A string constant " out of "
                     is set in the middle of the expression. The joining
                     of expressions is performed by the contact() method
                     which returns the formatted string displayed in the
                     UI. Notice that this select() call uses a path
                     which is a varargs collection of field names.
                     Passing "rating" then "value" is used for the
                     object path currentTrack.rating.value.
                     currentTrack.rating.scale is accessed similarly.

                  .. container:: paragraph

                     There is an additional binding disabling the
                     Downloaded Button if the track has already been
                     downloaded. Like the binding to tfDownloaded, the
                     Bindings.select() method is skipped for a direct
                     bind() call since the member variable "downloaded"
                     is a JavaFX Property. This "downloaded" Property is
                     initialized with the POJO value which is a field on
                     the currentTrack object.

               .. container:: sect4

                  .. rubric:: Model Update
                     :name: _model_update

                  .. container:: paragraph

                     Since the model is based on the POJO
                     "currentTrack", the fields must be updated
                     manually. In some architectures, this is desired
                     since the POJO represents record state (the state
                     of the data from the app) and not the screen state
                     (what the user is looking at). This means that a
                     deliberate setter must be made to update record
                     state and that needs to trigger a screen state
                     update.

                  .. container:: imageblock

                     .. container:: content

                        |bindings select downloaded screenshot|

                  .. container:: paragraph

                     In this example, there is only one field that will
                     be modified: downloaded. Pressing the Download
                     Button will call a setter on the special downloaded
                     BooleanProperty of the Application. When the value
                     of the BooleanProperty changes, the UI is updated
                     from the tfDownloaded binding. A ChangeListener is
                     attached to the downloaded BooleanProperty which
                     triggers an update of the model state.

                  .. container:: listingblock

                     .. container:: content

                        .. code:: prettyprint

                                   downloadButton.setOnAction( (evt) -> {
                                       downloaded.set(true);
                                   });

                                   downloaded.addListener( (obs,ov,nv) -> currentTrack.setDownloaded(true));

                  .. container:: paragraph

                     The Download Button serves as a commit. While the
                     user is limited in this app, they could edit the
                     TextFields and use a Save Button to transfer the
                     values on the screen to the model. Additionally, a
                     Reset Button could discard TextField changes.

                  .. container:: paragraph

                     The declarative binding of JavaFX UI controls to
                     Properties enforces a consistent style and behavior
                     throughout the application. Similar functionality
                     can be accomplished by directly accessing the
                     controls ("setText()") and retrieving updates from
                     addListener(). However, listeners are often written
                     inconsistently by different developers and do not
                     take advantage of the extra binding functions like
                     contact(), sum(), and when(). Bindings.select()
                     provides a way to bring POJOs used elsewhere in the
                     app into JavaFX.

            .. container:: sect3

               .. rubric:: 8.6.4. Source
                  :name: _source_4

               .. container:: paragraph

                  The complete source code and Gradle project can be
                  found at the link below.

               .. container:: paragraph

                  `BindingsApp Source Zip <https://courses.bekwam.net/public_tutorials/source/bkcourse_bindingsapp_sources.zip>`__

.. container::
   :name: footer

   .. container::
      :name: footer-text

      Version unspecified
      Last updated 2022-06-26 22:06:47 UTC

.. |cc by nc nd| image:: https://fxdocs.github.io/docs/html5/images/license/cc-by-nc-nd.png
.. |scene graph| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/scene_graph.jpg
.. |specific scene graph| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/specific_scene_graph.jpg
.. |hello world| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/hello_world.jpg
.. |transform base| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/transform_base.jpg
.. |transform translate| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/transform_translate.jpg
.. |transform scale| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/transform_scale.jpg
.. |transform rotate| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/transform_rotate.jpg
.. |scenegraph startvshown| image:: https://fxdocs.github.io/docs/html5/images/scenegraph/scenegraph_startvshown.png
.. |choicebox| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/choicebox.png
.. |combobox| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/combobox.png
.. |listview filtering screenshot| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/listview_filtering_screenshot.png
.. |tableviewselectapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/tableviewselectapp_screenshot.png
.. |tableviewselectapp screenshot selected tax| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/tableviewselectapp_screenshot_selected_tax.png
.. |tableviewselectapp screenshot selected notax| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/tableviewselectapp_screenshot_selected_notax.png
.. |imageapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/imageapp_screenshot.png
.. |linechartapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/linechartapp_screenshot.png
.. |pagination screenshot| image:: https://fxdocs.github.io/docs/html5/images/ui-controls/pagination_screenshot.png
.. |vboxandhboxapp mockup| image:: https://fxdocs.github.io/docs/html5/images/layout/vboxandhboxapp_mockup.png
.. |vboxandhboxapp brokendown| image:: https://fxdocs.github.io/docs/html5/images/layout/vboxandhboxapp_brokendown.png
.. |vboxandhboxapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/layout/vboxandhboxapp_screenshot.png
.. |vboxandhboxapp screenshot sm| image:: https://fxdocs.github.io/docs/html5/images/layout/vboxandhboxapp_screenshot_sm.png
.. |stackpane center| image:: https://fxdocs.github.io/docs/html5/images/layout/stackpane_center.png
.. |stackpane left| image:: https://fxdocs.github.io/docs/html5/images/layout/stackpane_left.png
.. |paneapp about view| image:: https://fxdocs.github.io/docs/html5/images/layout/paneapp_about_view.png
.. |paneapp pane size scenicview| image:: https://fxdocs.github.io/docs/html5/images/layout/paneapp_pane_size_scenicview.png
.. |paneapp scenicview full stage| image:: https://fxdocs.github.io/docs/html5/images/layout/paneapp_scenicview_full_stage.png
.. |paneapp zorder| image:: https://fxdocs.github.io/docs/html5/images/layout/paneapp_zorder.png
.. |clipping extends| image:: https://fxdocs.github.io/docs/html5/images/layout/clipping_extends.png
.. |clipping clipped| image:: https://fxdocs.github.io/docs/html5/images/layout/clipping_clipped.png
.. |clipping nested| image:: https://fxdocs.github.io/docs/html5/images/layout/clipping_nested.png
.. |gridpaneapp| image:: https://fxdocs.github.io/docs/html5/images/layout/gridpaneapp.png
.. |gridpaneapp lines| image:: https://fxdocs.github.io/docs/html5/images/layout/gridpaneapp_lines.png
.. |complexgridpaneapp| image:: https://fxdocs.github.io/docs/html5/images/layout/complexgridpaneapp.png
.. |complexgridpaneapp lines| image:: https://fxdocs.github.io/docs/html5/images/layout/complexgridpaneapp_lines.png
.. |constraintsgridpaneapp 1 annotated| image:: https://fxdocs.github.io/docs/html5/images/layout/constraintsgridpaneapp_1_annotated.png
.. |constraintsgridpaneapp description| image:: https://fxdocs.github.io/docs/html5/images/layout/constraintsgridpaneapp_description.png
.. |constraintsgridpaneapp wireframe| image:: https://fxdocs.github.io/docs/html5/images/layout/constraintsgridpaneapp_wireframe.png
.. |constraintsgridpaneapp finished| image:: https://fxdocs.github.io/docs/html5/images/layout/constraintsgridpaneapp_finished.png
.. |anchorpaneapp mockup| image:: https://fxdocs.github.io/docs/html5/images/layout/anchorpaneapp_mockup.png
.. |anchorpaneapp default| image:: https://fxdocs.github.io/docs/html5/images/layout/anchorpaneapp_default.png
.. |anchorpaneapp resize| image:: https://fxdocs.github.io/docs/html5/images/layout/anchorpaneapp_resize.png
.. |threebythreeapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/layout/threebythreeapp_screenshot.png
.. |threebythreeapp screenshot space| image:: https://fxdocs.github.io/docs/html5/images/layout/threebythreeapp_screenshot_space.png
.. |threebythreeapp screenshot sparse| image:: https://fxdocs.github.io/docs/html5/images/layout/threebythreeapp_screenshot_sparse.png
.. |threebythreeapp screenshot vert| image:: https://fxdocs.github.io/docs/html5/images/layout/threebythreeapp_screenshot_vert.png
.. |tileapp| image:: https://fxdocs.github.io/docs/html5/images/layout/tileapp.png
.. |titledpaneapp unexpanded| image:: https://fxdocs.github.io/docs/html5/images/layout/titledpaneapp_unexpanded.png
.. |titledpaneapp expanded| image:: https://fxdocs.github.io/docs/html5/images/layout/titledpaneapp_expanded.png
.. |titledpaneapp noncollapsible| image:: https://fxdocs.github.io/docs/html5/images/layout/titledpaneapp_noncollapsible.png
.. |mvvmapp screenshot| image:: https://fxdocs.github.io/docs/html5/images/app-structure/mvvmapp_screenshot.png
.. |mvvmapp uml| image:: https://fxdocs.github.io/docs/html5/images/app-structure/mvvmapp_uml.png
.. |mvvmapp sb| image:: https://fxdocs.github.io/docs/html5/images/app-structure/mvvmapp_sb.png
.. |modelchangeapp screenshot done| image:: https://fxdocs.github.io/docs/html5/images/app-structure/modelchangeapp_screenshot_done.png
.. |modelchangeapp screenshot inprogress| image:: https://fxdocs.github.io/docs/html5/images/app-structure/modelchangeapp_screenshot_inprogress.png
.. |modelchangeapp screenshot err| image:: https://fxdocs.github.io/docs/html5/images/app-structure/modelchangeapp_screenshot_err.png
.. |modelchangeapp uml| image:: https://fxdocs.github.io/docs/html5/images/app-structure/modelchangeapp_uml.png
.. |modelchangeapp uml sd| image:: https://fxdocs.github.io/docs/html5/images/app-structure/modelchangeapp_uml_sd.png
.. |dialogapp main empty| image:: https://fxdocs.github.io/docs/html5/images/app-structure/dialogapp_main_empty.png
.. |dialogapp dialog filledin| image:: https://fxdocs.github.io/docs/html5/images/app-structure/dialogapp_dialog_filledin.png
.. |dialogapp main filledin| image:: https://fxdocs.github.io/docs/html5/images/app-structure/dialogapp_main_filledin.png
.. |tasks pb| image:: https://fxdocs.github.io/docs/html5/images/best-practices/tasks_pb.png
.. |tasks contents| image:: https://fxdocs.github.io/docs/html5/images/best-practices/tasks_contents.png
.. |tasks error| image:: https://fxdocs.github.io/docs/html5/images/best-practices/tasks_error.png
.. |nonullcombo screenshot| image:: https://fxdocs.github.io/docs/html5/images/best-practices/nonullcombo_screenshot.png
.. |bindings select screenshot| image:: https://fxdocs.github.io/docs/html5/images/best-practices/bindings_select_screenshot.png
.. |bindings select downloaded screenshot| image:: https://fxdocs.github.io/docs/html5/images/best-practices/bindings_select_downloaded_screenshot.png
