

===================================================
/. 🚀 Docs combine script
===================================================

文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 

1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)

.. code-block:: bash

    #! /usr/bin/env bash
    
    print_title () 
    {
        printf '\n%.0s' {1..2};
        printf '=%.0s' {1..51};
        printf "\n/. 🚀 $1\n"
        printf '=%.0s' {1..51};
        printf '\n%.0s' {1..2};
    }
    
    # $1 {string} file
    # $2 {boolean} force toc extract
    # $3 {number} depth
    function filter 
    {
        local file="$1"
        local toc="$2"
        local depth="$3"
        local parent=`echo "$file" | sed -n 's/[^/\]\+$//p'`
        echo "$file"
        if ! [[ -z $depth ]]; then echo "$file L$depth" >&2; fi
    
        while read it
        do
            if [[ -z "$it" ]]; then break; fi
    
            if [[ "$it" =~ "*" ]]; then ls "$parent"$it; continue; fi
    
            doc="$parent${it/.rst/}.rst"
            bname=$(basename "${doc/.rst/}")
            pname=$(basename $(dirname "$doc"))
    
            if  ( [ -a $doc ] || [ -a "$doc.rst" ] ) && [ -z ${doc/*index.rst/} ] \
                || [[ "$bname" == "$pname" ]] || ! [[ -z $toc ]]
            then
                echo "➊==>$doc" >&2
                if [[ $depth > 1 ]]; then
                    filter "$doc" $toc $(($depth - 1))
                else
                    filter "$doc"
                fi
            else
                echo "➋$doc" >&2
                echo "$doc"
            fi
        done <<< $( sed -n 's/.. toctree::/::\n\0/; p' "$file" | sed -n "/^.. toctree::/,/^\S/{ s/^ \+[^:]\+$/\0/p }" \
          | sed -n 's|.*<\(.*\)>|\1|;p' \
          )
    }
    
    function include()
    {
        while read -r it
        do 
            if [[ -z "$it" ]]; then break; fi
            echo "➌+++$1" >&2
            print_title "$it"
            printf ".. code-block:: \n\n"
            cat $it | sed -n 's/.*/    \0/p'
        done <<< $(cat "$1" | sed -n 's/.. include:://p')
    }
    
    function toc() 
    {
        filter docs/source/index.rst true 1
    }
    
    function doc()
    {
        cat << EOF
    文档合并脚本中使用了 sed 流式编辑器、awk 结构化数据编辑器，使用教程参考 OpenDocs： 
    
    1. [Sed in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    2. [AWK in 5 Minutes](https://github.com/Jeangowhy/opendocs/blob/main/sed.info)
    
    EOF
    }
    
    function self_include()
    {
        print_title "Docs combine script"
        doc
        echo '.. code-block:: bash'
    
        echo ''
        cat "$0" | sed -n 's/^/    /p'
    
        echo ''
        echo "Docs files count: `find ./ -name "*.rst" | wc -l` ::"
        echo ''
        find ./ -name "*.rst" | sed -n 's/.*/    \0/p' | grep -v library
    }
    
    function combine() 
    {
        self_include
        while read -r it
        do 
            print_title "$it"
            cat "$it"
            include "$it"
        done << EOF
    `toc`
    EOF
    }
    
    
    out=./manim_docs_community.rst
    combine > $out
    subl $out

Docs files count: 67 ::

    docs/source/index.rst L1
    ➊==>docs/source/examples.rst
    ➊==>docs/source/installation.rst
    ➋docs/source/installation/conda.rst
    ➋docs/source/installation/windows.rst
    ➋docs/source/installation/macos.rst
    ➋docs/source/installation/linux.rst
    ➋docs/source/installation/docker.rst
    ➋docs/source/installation/jupyter.rst
    ➊==>docs/source/tutorials_guides.rst
    ➊==>docs/source/tutorials/index.rst
    ➋docs/source/tutorials/quickstart.rst
    ➋docs/source/tutorials/output_and_config.rst
    ➋docs/source/tutorials/building_blocks.rst
    ➊==>docs/source/guides/index.rst
    ➋docs/source/guides/configuration.rst
    ➋docs/source/guides/deep_dive.rst
    ➋docs/source/guides/using_text.rst
    ➋docs/source/guides/add_voiceovers.rst
    ➊==>docs/source/faq/index.rst
    ➊==>docs/source/reference.rst
    ➋docs/source/reference_index/animations.rst
    ➋docs/source/reference_index/cameras.rst
    ➋docs/source/reference_index/configuration.rst
    ➋docs/source/reference_index/mobjects.rst
    ➋docs/source/reference_index/scenes.rst
    ➋docs/source/reference_index/utilities_misc.rst
    ➊==>docs/source/plugins.rst
    ➊==>docs/source/changelog.rst
    ➋docs/source/changelog/0.18.0-changelog.rst
    ➋docs/source/changelog/0.17.3-changelog.rst
    ➋docs/source/changelog/0.17.2-changelog.rst
    ➋docs/source/changelog/0.17.1-changelog.rst
    ➋docs/source/changelog/0.17.0-changelog.rst
    ➋docs/source/changelog/0.16.0-changelog.rst
    ➋docs/source/changelog/0.15.2-changelog.rst
    ➋docs/source/changelog/0.15.1-changelog.rst
    ➋docs/source/changelog/0.15.0-changelog.rst
    ➋docs/source/changelog/0.14.0-changelog.rst
    ➋docs/source/changelog/0.13.1-changelog.rst
    ➋docs/source/changelog/0.13.0-changelog.rst
    ➋docs/source/changelog/0.12.0-changelog.rst
    ➋docs/source/changelog/0.11.0-changelog.rst
    ➋docs/source/changelog/0.10.0-changelog.rst
    ➋docs/source/changelog/0.9.0-changelog.rst
    ➋docs/source/changelog/0.8.0-changelog.rst
    ➋docs/source/changelog/0.7.0-changelog.rst
    ➋docs/source/changelog/0.6.0-changelog.rst
    ➋docs/source/changelog/0.5.0-changelog.rst
    ➋docs/source/changelog/0.4.0-changelog.rst
    ➋docs/source/changelog/0.3.0-changelog.rst
    ➋docs/source/changelog/0.2.0-changelog.rst
    ➋docs/source/changelog/0.1.1-changelog.rst
    ➋docs/source/changelog/0.1.0-changelog.rst
    ➊==>docs/source/contributing.rst
    ➋docs/source/contributing/development.rst
    ➋docs/source/contributing/docs.rst
    ➋docs/source/contributing/testing.rst
    ➋docs/source/contributing/performance.rst
    ➋docs/source/contributing/internationalization.rst
    ➊==>docs/source/conduct.rst
    sed: can't read docs/source/conduct.rst: No such file or directory
    cat: docs/source/conduct.rst: No such file or directory
    cat: docs/source/conduct.rst: No such file or directory

===================================================
/. 🚀 docs/source/index.rst
===================================================

.. manim documentation master file, created by
   sphinx-quickstart on Tue Aug  4 13:58:07 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Manim Community Edition
=======================

Animating technical concepts is traditionally pretty tedious since it can be
difficult to make the animations precise enough to convey them accurately.
Manim relies on Python's simplicity to generate animations programmatically,
making it convenient to specify exactly how each one should run. Take a look
at the :doc:`Example Gallery <../examples>` for some inspiration on how to
create beautiful images and videos with Manim.

First Steps
-----------

Are you new to Manim and are looking for where to get started? Then you are
in the right place!

.. note::

   Please be aware that there are different, incompatible versions
   of Manim available. Check our :ref:`installation FAQ <different-versions>`
   to learn more!

- The :doc:`Installation <installation>` section has the latest and
  up-to-date installation instructions for Windows, macOS, and Linux.
  You can also find information on Manim's docker images and (online)
  notebook environments there.
- Want to try the library before installing it? Take a look at our
  interactive online playground at https://try.manim.community in the form
  of a Jupyter notebook.
- In our :doc:`Tutorials <tutorials/index>` section you will find a
  collection of resources that will teach you how to use Manim. In particular,
  the :doc:`tutorials/quickstart` tutorial teaches you Manim's basics,
  and in :doc:`tutorials/building_blocks` the classes used to compose
  your animations are described in more detail.


Finding Help
------------

Are you struggling with installing or using Manim? Don't worry, we've all been
there. Here are some good resources to help you out: 

- Perhaps your problem is one that occurs frequently, then chances are it is
  addressed in our :doc:`collection of FAQs <faq/index>`.
- If you are looking for information on some specific class, look for it
  in the :doc:`reference manual <reference>` and/or use the search feature
  of the documentation.
- Still no luck? Then you are welcome to ask the community for help, together
  we usually manage to find a solution for your problem! Consult the
  :doc:`FAQ page on getting help <faq/help>` for instructions.


Navigating the Documentation
----------------------------

Here are some short summaries for all of the sections in this documentation: 

- The :doc:`Example Gallery </examples>` is a collection of examples (rendered videos
  and images together with the code they were generated from) that show a few different,
  simple things that you can do with Manim.
- The :doc:`Installation </installation>` section has information on installing Manim.
- In :doc:`Tutorials & Guides </tutorials_guides>` you can find learning resources: proper
  tutorials that guide you through the process of creating a video are in
  the :doc:`Tutorial </tutorials/index>` section; guides on specific topics are in the
  :doc:`Guides </guides/index>` section, and the answers to frequently asked questions
  can be found in the :doc:`FAQ </faq/index>` section.
- The :doc:`Reference Manual </reference>` contains a comprehensive list of all of Manim's
  (documented) modules, classes, and functions. If you are somewhat familiar with Manim's
  module structure, feel free to browse the manual directly. If you are searching for
  something specific, feel free to use the documentation's search feature in the sidebar.
  Many classes and methods come with their own illustrated examples too!
- The :doc:`Plugins </plugins>` page documents how to install, write, and distribute
  plugins (that is, separate Python packages that extend the feature set of the core library).
- Changes between versions are documented in our :doc:`Changelog </changelog>`.
- If you are looking into contributing to the development of Manim, you can find information
  on how to get involved in our :doc:`Contributing </contributing>` section.
- And finally, the :doc:`Code of Conduct </conduct>` page has a formal description of
  the rules you should abide by when interacting within our community.

Sharing Your Work
-----------------

We'd love to hear from you and see your manimations 
`on Twitter <https://twitter.com/manim_community>`_, `Reddit <https://www.reddit.com/r/manim/>`_,
or `Discord <https://www.manim.community/discord/>`_. If you're using Manim in a scientific
context, instructions on how to cite a particular release can be found
`in our README <https://github.com/ManimCommunity/manim/blob/main/README.md>`_.

Index
-----

.. toctree::
   :maxdepth: 2

   examples
   installation
   tutorials_guides
   reference
   plugins
   changelog
   contributing
   conduct

.. image:: _static/crowdin-badge.svg
  :align: center
  :alt: Localized with Crowdin
  :target: https://translate.manim.community


===================================================
/. 🚀 docs/source/examples.rst
===================================================

###############
Example Gallery
###############

This gallery contains a collection of best practice code snippets
together with their corresponding video/image output, illustrating
different functionalities all across the library.
These are all under the MIT license, so feel free to copy & paste them to your projects.
Enjoy this taste of Manim!

.. tip::

   This gallery is not the only place in our documentation where you can see explicit
   code and video examples: there are many more in our
   :doc:`reference manual </reference>` -- see, for example, our documentation for
   the modules :mod:`~.tex_mobject`, :mod:`~.geometry`, :mod:`~.moving_camera_scene`,
   and many more.

   Check out our `interactive Jupyter environment <https://mybinder.org/v2/gh/ManimCommunity/jupyter_examples/HEAD?filepath=basic_example_scenes.ipynb>`_
   which allows running the examples online, without requiring a local
   installation.

   Also, visit our `Twitter <https://twitter.com/manim_community/>`_ for more
   *manimations*!



Basic Concepts
==============

.. manim:: ManimCELogo
    :save_last_frame: 
    :ref_classes: MathTex Circle Square Triangle

    class ManimCELogo(Scene): 
        def construct(self): 
            self.camera.background_color = "#ece6e2"
            logo_green = "#87c2a5"
            logo_blue = "#525893"
            logo_red = "#e07a5f"
            logo_black = "#343434"
            ds_m = MathTex(r"\mathbb{M}", fill_color=logo_black).scale(7)
            ds_m.shift(2.25 * LEFT + 1.5 * UP)
            circle = Circle(color=logo_green, fill_opacity=1).shift(LEFT)
            square = Square(color=logo_blue, fill_opacity=1).shift(UP)
            triangle = Triangle(color=logo_red, fill_opacity=1).shift(RIGHT)
            logo = VGroup(triangle, square, circle, ds_m)  # order matters
            logo.move_to(ORIGIN)
            self.add(logo)



.. manim:: BraceAnnotation
    :save_last_frame: 
    :ref_classes: Brace
    :ref_methods: Brace.get_text Brace.get_tex

    class BraceAnnotation(Scene): 
        def construct(self): 
            dot = Dot([-2, -1, 0])
            dot2 = Dot([2, 1, 0])
            line = Line(dot.get_center(), dot2.get_center()).set_color(ORANGE)
            b1 = Brace(line)
            b1text = b1.get_text("Horizontal distance")
            b2 = Brace(line, direction=line.copy().rotate(PI / 2).get_unit_vector())
            b2text = b2.get_tex("x-x_1")
            self.add(line, dot, dot2, b1, b2, b1text, b2text)

.. manim:: VectorArrow
    :save_last_frame: 
    :ref_classes: Dot Arrow NumberPlane Text

    class VectorArrow(Scene): 
        def construct(self): 
            dot = Dot(ORIGIN)
            arrow = Arrow(ORIGIN, [2, 2, 0], buff=0)
            numberplane = NumberPlane()
            origin_text = Text('(0, 0)').next_to(dot, DOWN)
            tip_text = Text('(2, 2)').next_to(arrow.get_end(), RIGHT)
            self.add(numberplane, dot, arrow, origin_text, tip_text)

.. manim:: GradientImageFromArray
    :save_last_frame: 
    :ref_classes: ImageMobject

    class GradientImageFromArray(Scene): 
        def construct(self): 
            n = 256
            imageArray = np.uint8(
                [[i * 256 / n for i in range(0, n)] for _ in range(0, n)]
            )
            image = ImageMobject(imageArray).scale(2)
            image.background_rectangle = SurroundingRectangle(image, GREEN)
            self.add(image, image.background_rectangle)

.. manim:: BooleanOperations
    :ref_classes: Union Intersection Exclusion Difference

    class BooleanOperations(Scene): 
        def construct(self): 
            ellipse1 = Ellipse(
                width=4.0, height=5.0, fill_opacity=0.5, color=BLUE, stroke_width=10
            ).move_to(LEFT)
            ellipse2 = ellipse1.copy().set_color(color=RED).move_to(RIGHT)
            bool_ops_text = MarkupText("<u>Boolean Operation</u>").next_to(ellipse1, UP * 3)
            ellipse_group = Group(bool_ops_text, ellipse1, ellipse2).move_to(LEFT * 3)
            self.play(FadeIn(ellipse_group))

            i = Intersection(ellipse1, ellipse2, color=GREEN, fill_opacity=0.5)
            self.play(i.animate.scale(0.25).move_to(RIGHT * 5 + UP * 2.5))
            intersection_text = Text("Intersection", font_size=23).next_to(i, UP)
            self.play(FadeIn(intersection_text))

            u = Union(ellipse1, ellipse2, color=ORANGE, fill_opacity=0.5)
            union_text = Text("Union", font_size=23)
            self.play(u.animate.scale(0.3).next_to(i, DOWN, buff=union_text.height * 3))
            union_text.next_to(u, UP)
            self.play(FadeIn(union_text))

            e = Exclusion(ellipse1, ellipse2, color=YELLOW, fill_opacity=0.5)
            exclusion_text = Text("Exclusion", font_size=23)
            self.play(e.animate.scale(0.3).next_to(u, DOWN, buff=exclusion_text.height * 3.5))
            exclusion_text.next_to(e, UP)
            self.play(FadeIn(exclusion_text))

            d = Difference(ellipse1, ellipse2, color=PINK, fill_opacity=0.5)
            difference_text = Text("Difference", font_size=23)
            self.play(d.animate.scale(0.3).next_to(u, LEFT, buff=difference_text.height * 3.5))
            difference_text.next_to(d, UP)
            self.play(FadeIn(difference_text))


Animations
==========

.. manim:: PointMovingOnShapes
    :ref_classes: Circle Dot Line GrowFromCenter Transform MoveAlongPath Rotating

    class PointMovingOnShapes(Scene): 
        def construct(self): 
            circle = Circle(radius=1, color=BLUE)
            dot = Dot()
            dot2 = dot.copy().shift(RIGHT)
            self.add(dot)

            line = Line([3, 0, 0], [5, 0, 0])
            self.add(line)

            self.play(GrowFromCenter(circle))
            self.play(Transform(dot, dot2))
            self.play(MoveAlongPath(dot, circle), run_time=2, rate_func=linear)
            self.play(Rotating(dot, about_point=[2, 0, 0]), run_time=1.5)
            self.wait()

.. manim:: MovingAround
    :ref_methods: Mobject.shift VMobject.set_fill Mobject.scale Mobject.rotate

    class MovingAround(Scene): 
        def construct(self): 
            square = Square(color=BLUE, fill_opacity=1)

            self.play(square.animate.shift(LEFT))
            self.play(square.animate.set_fill(ORANGE))
            self.play(square.animate.scale(0.3))
            self.play(square.animate.rotate(0.4))

.. manim:: MovingAngle
    :ref_classes: Angle
    :ref_methods: Mobject.rotate

    class MovingAngle(Scene): 
        def construct(self): 
            rotation_center = LEFT

            theta_tracker = ValueTracker(110)
            line1 = Line(LEFT, RIGHT)
            line_moving = Line(LEFT, RIGHT)
            line_ref = line_moving.copy()
            line_moving.rotate(
                theta_tracker.get_value() * DEGREES, about_point=rotation_center
            )
            a = Angle(line1, line_moving, radius=0.5, other_angle=False)
            tex = MathTex(r"\theta").move_to(
                Angle(
                    line1, line_moving, radius=0.5 + 3 * SMALL_BUFF, other_angle=False
                ).point_from_proportion(0.5)
            )

            self.add(line1, line_moving, a, tex)
            self.wait()

            line_moving.add_updater(
                lambda x: x.become(line_ref.copy()).rotate(
                    theta_tracker.get_value() * DEGREES, about_point=rotation_center
                )
            )

            a.add_updater(
                lambda x: x.become(Angle(line1, line_moving, radius=0.5, other_angle=False))
            )
            tex.add_updater(
                lambda x: x.move_to(
                    Angle(
                        line1, line_moving, radius=0.5 + 3 * SMALL_BUFF, other_angle=False
                    ).point_from_proportion(0.5)
                )
            )

            self.play(theta_tracker.animate.set_value(40))
            self.play(theta_tracker.animate.increment_value(140))
            self.play(tex.animate.set_color(RED), run_time=0.5)
            self.play(theta_tracker.animate.set_value(350))

.. tip::

   You can use multiple ValueTrackers simultaneously.

.. manim:: MovingDots

    class MovingDots(Scene): 
        def construct(self): 
            d1,d2=Dot(color=BLUE),Dot(color=GREEN)
            dg=VGroup(d1,d2).arrange(RIGHT,buff=1)
            l1=Line(d1.get_center(),d2.get_center()).set_color(RED)
            x=ValueTracker(0)
            y=ValueTracker(0)
            d1.add_updater(lambda z: z.set_x(x.get_value()))
            d2.add_updater(lambda z: z.set_y(y.get_value()))
            l1.add_updater(lambda z: z.become(Line(d1.get_center(),d2.get_center())))
            self.add(d1,d2,l1)
            self.play(x.animate.set_value(5))
            self.play(y.animate.set_value(4))
            self.wait()

.. manim:: MovingGroupToDestination

    class MovingGroupToDestination(Scene): 
        def construct(self): 
            group = VGroup(Dot(LEFT), Dot(ORIGIN), Dot(RIGHT, color=RED), Dot(2 * RIGHT)).scale(1.4)
            dest = Dot([4, 3, 0], color=YELLOW)
            self.add(group, dest)
            self.play(group.animate.shift(dest.get_center() - group[2].get_center()))
            self.wait(0.5)

.. manim:: MovingFrameBox
    :ref_modules: manim.mobject.svg.tex_mobject
    :ref_classes: MathTex SurroundingRectangle

    class MovingFrameBox(Scene): 
        def construct(self): 
            text=MathTex(
                "\\frac{d}{dx}f(x)g(x)=","f(x)\\frac{d}{dx}g(x)","+",
                "g(x)\\frac{d}{dx}f(x)"
            )
            self.play(Write(text))
            framebox1 = SurroundingRectangle(text[1], buff = .1)
            framebox2 = SurroundingRectangle(text[3], buff = .1)
            self.play(
                Create(framebox1),
            )
            self.wait()
            self.play(
                ReplacementTransform(framebox1,framebox2),
            )
            self.wait()

.. manim:: RotationUpdater
    :ref_methods: Mobject.add_updater Mobject.remove_updater

    class RotationUpdater(Scene): 
        def construct(self): 
            def updater_forth(mobj, dt): 
                mobj.rotate_about_origin(dt)
            def updater_back(mobj, dt): 
                mobj.rotate_about_origin(-dt)
            line_reference = Line(ORIGIN, LEFT).set_color(WHITE)
            line_moving = Line(ORIGIN, LEFT).set_color(YELLOW)
            line_moving.add_updater(updater_forth)
            self.add(line_reference, line_moving)
            self.wait(2)
            line_moving.remove_updater(updater_forth)
            line_moving.add_updater(updater_back)
            self.wait(2)
            line_moving.remove_updater(updater_back)
            self.wait(0.5)

.. manim:: PointWithTrace
    :ref_classes: Rotating
    :ref_methods: VMobject.set_points_as_corners Mobject.add_updater

    class PointWithTrace(Scene): 
        def construct(self): 
            path = VMobject()
            dot = Dot()
            path.set_points_as_corners([dot.get_center(), dot.get_center()])
            def update_path(path): 
                previous_path = path.copy()
                previous_path.add_points_as_corners([dot.get_center()])
                path.become(previous_path)
            path.add_updater(update_path)
            self.add(path, dot)
            self.play(Rotating(dot, radians=PI, about_point=RIGHT, run_time=2))
            self.wait()
            self.play(dot.animate.shift(UP))
            self.play(dot.animate.shift(LEFT))
            self.wait()


Plotting with Manim
===================

.. manim:: SinAndCosFunctionPlot
    :save_last_frame: 
    :ref_modules: manim.mobject.coordinate_systems
    :ref_classes: MathTex
    :ref_methods: Axes.plot Axes.get_vertical_line_to_graph Axes.input_to_graph_point Axes.get_axis_labels

    class SinAndCosFunctionPlot(Scene): 
        def construct(self): 
            axes = Axes(
                x_range=[-10, 10.3, 1],
                y_range=[-1.5, 1.5, 1],
                x_length=10,
                axis_config={"color": GREEN},
                x_axis_config={
                    "numbers_to_include": np.arange(-10, 10.01, 2),
                    "numbers_with_elongated_ticks": np.arange(-10, 10.01, 2),
                },
                tips=False,
            )
            axes_labels = axes.get_axis_labels()
            sin_graph = axes.plot(lambda x: np.sin(x), color=BLUE)
            cos_graph = axes.plot(lambda x: np.cos(x), color=RED)

            sin_label = axes.get_graph_label(
                sin_graph, "\\sin(x)", x_val=-10, direction=UP / 2
            )
            cos_label = axes.get_graph_label(cos_graph, label="\\cos(x)")

            vert_line = axes.get_vertical_line(
                axes.i2gp(TAU, cos_graph), color=YELLOW, line_func=Line
            )
            line_label = axes.get_graph_label(
                cos_graph, "x=2\pi", x_val=TAU, direction=UR, color=WHITE
            )

            plot = VGroup(axes, sin_graph, cos_graph, vert_line)
            labels = VGroup(axes_labels, sin_label, cos_label, line_label)
            self.add(plot, labels)



.. manim:: ArgMinExample

   class ArgMinExample(Scene): 
       def construct(self): 
           ax = Axes(
               x_range=[0, 10], y_range=[0, 100, 10], axis_config={"include_tip": False}
           )
           labels = ax.get_axis_labels(x_label="x", y_label="f(x)")

           t = ValueTracker(0)

           def func(x): 
               return 2 * (x - 5) ** 2
           graph = ax.plot(func, color=MAROON)

           initial_point = [ax.coords_to_point(t.get_value(), func(t.get_value()))]
           dot = Dot(point=initial_point)

           dot.add_updater(lambda x: x.move_to(ax.c2p(t.get_value(), func(t.get_value()))))
           x_space = np.linspace(*ax.x_range[:2],200)
           minimum_index = func(x_space).argmin()

           self.add(ax, labels, graph, dot)
           self.play(t.animate.set_value(x_space[minimum_index]))
           self.wait()

.. manim:: GraphAreaPlot
    :save_last_frame: 
    :ref_modules: manim.mobject.coordinate_systems
    :ref_methods: Axes.plot Axes.get_vertical_line_to_graph Axes.get_area Axes.get_axis_labels

    class GraphAreaPlot(Scene): 
        def construct(self): 
            ax = Axes(
                x_range=[0, 5],
                y_range=[0, 6],
                x_axis_config={"numbers_to_include": [2, 3]},
                tips=False,
            )

            labels = ax.get_axis_labels()

            curve_1 = ax.plot(lambda x: 4 * x - x ** 2, x_range=[0, 4], color=BLUE_C)
            curve_2 = ax.plot(
                lambda x: 0.8 * x ** 2 - 3 * x + 4,
                x_range=[0, 4],
                color=GREEN_B,
            )

            line_1 = ax.get_vertical_line(ax.input_to_graph_point(2, curve_1), color=YELLOW)
            line_2 = ax.get_vertical_line(ax.i2gp(3, curve_1), color=YELLOW)

            riemann_area = ax.get_riemann_rectangles(curve_1, x_range=[0.3, 0.6], dx=0.03, color=BLUE, fill_opacity=0.5)
            area = ax.get_area(curve_2, [2, 3], bounded_graph=curve_1, color=GREY, opacity=0.5)

            self.add(ax, labels, curve_1, curve_2, line_1, line_2, riemann_area, area)

.. manim:: PolygonOnAxes
    :ref_classes: Axes Polygon

    class PolygonOnAxes(Scene): 
        def get_rectangle_corners(self, bottom_left, top_right): 
            return [
                (top_right[0], top_right[1]),
                (bottom_left[0], top_right[1]),
                (bottom_left[0], bottom_left[1]),
                (top_right[0], bottom_left[1]),
            ]

        def construct(self): 
            ax = Axes(
                x_range=[0, 10],
                y_range=[0, 10],
                x_length=6,
                y_length=6,
                axis_config={"include_tip": False},
            )

            t = ValueTracker(5)
            k = 25

            graph = ax.plot(
                lambda x: k / x,
                color=YELLOW_D,
                x_range=[k / 10, 10.0, 0.01],
                use_smoothing=False,
            )

            def get_rectangle(): 
                polygon = Polygon(
                    *[
                        ax.c2p(*i)
                        for i in self.get_rectangle_corners(
                            (0, 0), (t.get_value(), k / t.get_value())
                        )
                    ]
                )
                polygon.stroke_width = 1
                polygon.set_fill(BLUE, opacity=0.5)
                polygon.set_stroke(YELLOW_B)
                return polygon

            polygon = always_redraw(get_rectangle)

            dot = Dot()
            dot.add_updater(lambda x: x.move_to(ax.c2p(t.get_value(), k / t.get_value())))
            dot.set_z_index(10)

            self.add(ax, graph, dot)
            self.play(Create(polygon))
            self.play(t.animate.set_value(10))
            self.play(t.animate.set_value(k / 10))
            self.play(t.animate.set_value(5))


.. manim:: HeatDiagramPlot
    :save_last_frame: 
    :ref_modules: manim.mobject.coordinate_systems
    :ref_methods: Axes.plot_line_graph Axes.get_axis_labels

    class HeatDiagramPlot(Scene): 
        def construct(self): 
            ax = Axes(
                x_range=[0, 40, 5],
                y_range=[-8, 32, 5],
                x_length=9,
                y_length=6,
                x_axis_config={"numbers_to_include": np.arange(0, 40, 5)},
                y_axis_config={"numbers_to_include": np.arange(-5, 34, 5)},
                tips=False,
            )
            labels = ax.get_axis_labels(
                x_label=Tex("$\Delta Q$"), y_label=Tex("T[$^\circ C$]")
            )

            x_vals = [0, 8, 38, 39]
            y_vals = [20, 0, 0, -5]
            graph = ax.plot_line_graph(x_values=x_vals, y_values=y_vals)

            self.add(ax, labels, graph)


Special Camera Settings
=======================

.. manim:: FollowingGraphCamera
    :ref_modules: manim.scene.moving_camera_scene
    :ref_classes: MovingCameraScene MoveAlongPath Restore
    :ref_methods: Axes.plot Mobject.add_updater


    class FollowingGraphCamera(MovingCameraScene): 
        def construct(self): 
            self.camera.frame.save_state()

            # create the axes and the curve
            ax = Axes(x_range=[-1, 10], y_range=[-1, 10])
            graph = ax.plot(lambda x: np.sin(x), color=BLUE, x_range=[0, 3 * PI])

            # create dots based on the graph
            moving_dot = Dot(ax.i2gp(graph.t_min, graph), color=ORANGE)
            dot_1 = Dot(ax.i2gp(graph.t_min, graph))
            dot_2 = Dot(ax.i2gp(graph.t_max, graph))

            self.add(ax, graph, dot_1, dot_2, moving_dot)
            self.play(self.camera.frame.animate.scale(0.5).move_to(moving_dot))

            def update_curve(mob): 
                mob.move_to(moving_dot.get_center())

            self.camera.frame.add_updater(update_curve)
            self.play(MoveAlongPath(moving_dot, graph, rate_func=linear))
            self.camera.frame.remove_updater(update_curve)

            self.play(Restore(self.camera.frame))

.. manim:: MovingZoomedSceneAround
    :ref_modules: manim.scene.zoomed_scene
    :ref_classes: ZoomedScene BackgroundRectangle UpdateFromFunc
    :ref_methods: Mobject.add_updater ZoomedScene.get_zoomed_display_pop_out_animation

    class MovingZoomedSceneAround(ZoomedScene): 
    # contributed by TheoremofBeethoven, www.youtube.com/c/TheoremofBeethoven
        def __init__(self, **kwargs): 
            ZoomedScene.__init__(
                self,
                zoom_factor=0.3,
                zoomed_display_height=1,
                zoomed_display_width=6,
                image_frame_stroke_width=20,
                zoomed_camera_config={
                    "default_frame_stroke_width": 3,
                    },
                **kwargs
            )

        def construct(self): 
            dot = Dot().shift(UL * 2)
            image = ImageMobject(np.uint8([[0, 100, 30, 200],
                                           [255, 0, 5, 33]]))
            image.height = 7
            frame_text = Text("Frame", color=PURPLE, font_size=67)
            zoomed_camera_text = Text("Zoomed camera", color=RED, font_size=67)

            self.add(image, dot)
            zoomed_camera = self.zoomed_camera
            zoomed_display = self.zoomed_display
            frame = zoomed_camera.frame
            zoomed_display_frame = zoomed_display.display_frame

            frame.move_to(dot)
            frame.set_color(PURPLE)
            zoomed_display_frame.set_color(RED)
            zoomed_display.shift(DOWN)

            zd_rect = BackgroundRectangle(zoomed_display, fill_opacity=0, buff=MED_SMALL_BUFF)
            self.add_foreground_mobject(zd_rect)

            unfold_camera = UpdateFromFunc(zd_rect, lambda rect: rect.replace(zoomed_display))

            frame_text.next_to(frame, DOWN)

            self.play(Create(frame), FadeIn(frame_text, shift=UP))
            self.activate_zooming()

            self.play(self.get_zoomed_display_pop_out_animation(), unfold_camera)
            zoomed_camera_text.next_to(zoomed_display_frame, DOWN)
            self.play(FadeIn(zoomed_camera_text, shift=UP))
            # Scale in        x   y  z
            scale_factor = [0.5, 1.5, 0]
            self.play(
                frame.animate.scale(scale_factor),
                zoomed_display.animate.scale(scale_factor),
                FadeOut(zoomed_camera_text),
                FadeOut(frame_text)
            )
            self.wait()
            self.play(ScaleInPlace(zoomed_display, 2))
            self.wait()
            self.play(frame.animate.shift(2.5 * DOWN))
            self.wait()
            self.play(self.get_zoomed_display_pop_out_animation(), unfold_camera, rate_func=lambda t: smooth(1 - t))
            self.play(Uncreate(zoomed_display_frame), FadeOut(frame))
            self.wait()

.. manim:: FixedInFrameMObjectTest
    :save_last_frame: 
    :ref_classes: ThreeDScene
    :ref_methods: ThreeDScene.set_camera_orientation ThreeDScene.add_fixed_in_frame_mobjects

    class FixedInFrameMObjectTest(ThreeDScene): 
        def construct(self): 
            axes = ThreeDAxes()
            self.set_camera_orientation(phi=75 * DEGREES, theta=-45 * DEGREES)
            text3d = Text("This is a 3D text")
            self.add_fixed_in_frame_mobjects(text3d)
            text3d.to_corner(UL)
            self.add(axes)
            self.wait()

.. manim:: ThreeDLightSourcePosition
    :save_last_frame: 
    :ref_classes: ThreeDScene ThreeDAxes Surface
    :ref_methods: ThreeDScene.set_camera_orientation

    class ThreeDLightSourcePosition(ThreeDScene): 
        def construct(self): 
            axes = ThreeDAxes()
            sphere = Surface(
                lambda u, v: np.array([
                    1.5 * np.cos(u) * np.cos(v),
                    1.5 * np.cos(u) * np.sin(v),
                    1.5 * np.sin(u)
                ]), v_range=[0, TAU], u_range=[-PI / 2, PI / 2],
                checkerboard_colors=[RED_D, RED_E], resolution=(15, 32)
            )
            self.renderer.camera.light_source.move_to(3*IN) # changes the source of the light
            self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
            self.add(axes, sphere)


.. manim:: ThreeDCameraRotation
    :ref_classes: ThreeDScene ThreeDAxes
    :ref_methods: ThreeDScene.begin_ambient_camera_rotation ThreeDScene.stop_ambient_camera_rotation

    class ThreeDCameraRotation(ThreeDScene): 
        def construct(self): 
            axes = ThreeDAxes()
            circle=Circle()
            self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
            self.add(circle,axes)
            self.begin_ambient_camera_rotation(rate=0.1)
            self.wait()
            self.stop_ambient_camera_rotation()
            self.move_camera(phi=75 * DEGREES, theta=30 * DEGREES)
            self.wait()

.. manim:: ThreeDCameraIllusionRotation
    :ref_classes: ThreeDScene ThreeDAxes
    :ref_methods: ThreeDScene.begin_3dillusion_camera_rotation ThreeDScene.stop_3dillusion_camera_rotation

    class ThreeDCameraIllusionRotation(ThreeDScene): 
        def construct(self): 
            axes = ThreeDAxes()
            circle=Circle()
            self.set_camera_orientation(phi=75 * DEGREES, theta=30 * DEGREES)
            self.add(circle,axes)
            self.begin_3dillusion_camera_rotation(rate=2)
            self.wait(PI/2)
            self.stop_3dillusion_camera_rotation()

.. manim:: ThreeDSurfacePlot
   :save_last_frame: 
   :ref_classes: ThreeDScene Surface

   class ThreeDSurfacePlot(ThreeDScene): 
       def construct(self): 
           resolution_fa = 24
           self.set_camera_orientation(phi=75 * DEGREES, theta=-30 * DEGREES)

           def param_gauss(u, v): 
               x = u
               y = v
               sigma, mu = 0.4, [0.0, 0.0]
               d = np.linalg.norm(np.array([x - mu[0], y - mu[1]]))
               z = np.exp(-(d ** 2 / (2.0 * sigma ** 2)))
               return np.array([x, y, z])

           gauss_plane = Surface(
               param_gauss,
               resolution=(resolution_fa, resolution_fa),
               v_range=[-2, +2],
               u_range=[-2, +2]
           )

           gauss_plane.scale(2, about_point=ORIGIN)
           gauss_plane.set_style(fill_opacity=1,stroke_color=GREEN)
           gauss_plane.set_fill_by_checkerboard(ORANGE, BLUE, opacity=0.5)
           axes = ThreeDAxes()
           self.add(axes,gauss_plane)




Advanced Projects
=================

.. manim:: OpeningManim
    :ref_classes: Tex MathTex Write FadeIn LaggedStart NumberPlane Create
    :ref_methods: NumberPlane.prepare_for_nonlinear_transform

    class OpeningManim(Scene): 
        def construct(self): 
            title = Tex(r"This is some \LaTeX")
            basel = MathTex(r"\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}")
            VGroup(title, basel).arrange(DOWN)
            self.play(
                Write(title),
                FadeIn(basel, shift=DOWN),
            )
            self.wait()

            transform_title = Tex("That was a transform")
            transform_title.to_corner(UP + LEFT)
            self.play(
                Transform(title, transform_title),
                LaggedStart(*[FadeOut(obj, shift=DOWN) for obj in basel]),
            )
            self.wait()

            grid = NumberPlane()
            grid_title = Tex("This is a grid", font_size=72)
            grid_title.move_to(transform_title)

            self.add(grid, grid_title)  # Make sure title is on top of grid
            self.play(
                FadeOut(title),
                FadeIn(grid_title, shift=UP),
                Create(grid, run_time=3, lag_ratio=0.1),
            )
            self.wait()

            grid_transform_title = Tex(
                r"That was a non-linear function \\ applied to the grid"
            )
            grid_transform_title.move_to(grid_title, UL)
            grid.prepare_for_nonlinear_transform()
            self.play(
                grid.animate.apply_function(
                    lambda p: p
                              + np.array(
                        [
                            np.sin(p[1]),
                            np.sin(p[0]),
                            0,
                        ]
                    )
                ),
                run_time=3,
            )
            self.wait()
            self.play(Transform(grid_title, grid_transform_title))
            self.wait()

.. manim:: SineCurveUnitCircle
    :ref_classes: MathTex Circle Dot Line VGroup
    :ref_methods: Mobject.add_updater Mobject.remove_updater
    :ref_functions: always_redraw

    class SineCurveUnitCircle(Scene): 
        # contributed by heejin_park, https://infograph.tistory.com/230
        def construct(self): 
            self.show_axis()
            self.show_circle()
            self.move_dot_and_draw_curve()
            self.wait()

        def show_axis(self): 
            x_start = np.array([-6,0,0])
            x_end = np.array([6,0,0])

            y_start = np.array([-4,-2,0])
            y_end = np.array([-4,2,0])

            x_axis = Line(x_start, x_end)
            y_axis = Line(y_start, y_end)

            self.add(x_axis, y_axis)
            self.add_x_labels()

            self.origin_point = np.array([-4,0,0])
            self.curve_start = np.array([-3,0,0])

        def add_x_labels(self): 
            x_labels = [
                MathTex("\pi"), MathTex("2 \pi"),
                MathTex("3 \pi"), MathTex("4 \pi"),
            ]

            for i in range(len(x_labels)): 
                x_labels[i].next_to(np.array([-1 + 2*i, 0, 0]), DOWN)
                self.add(x_labels[i])

        def show_circle(self): 
            circle = Circle(radius=1)
            circle.move_to(self.origin_point)
            self.add(circle)
            self.circle = circle

        def move_dot_and_draw_curve(self): 
            orbit = self.circle
            origin_point = self.origin_point

            dot = Dot(radius=0.08, color=YELLOW)
            dot.move_to(orbit.point_from_proportion(0))
            self.t_offset = 0
            rate = 0.25

            def go_around_circle(mob, dt): 
                self.t_offset += (dt * rate)
                # print(self.t_offset)
                mob.move_to(orbit.point_from_proportion(self.t_offset % 1))

            def get_line_to_circle(): 
                return Line(origin_point, dot.get_center(), color=BLUE)

            def get_line_to_curve(): 
                x = self.curve_start[0] + self.t_offset * 4
                y = dot.get_center()[1]
                return Line(dot.get_center(), np.array([x,y,0]), color=YELLOW_A, stroke_width=2 )


            self.curve = VGroup()
            self.curve.add(Line(self.curve_start,self.curve_start))
            def get_curve(): 
                last_line = self.curve[-1]
                x = self.curve_start[0] + self.t_offset * 4
                y = dot.get_center()[1]
                new_line = Line(last_line.get_end(),np.array([x,y,0]), color=YELLOW_D)
                self.curve.add(new_line)

                return self.curve

            dot.add_updater(go_around_circle)

            origin_to_circle_line = always_redraw(get_line_to_circle)
            dot_to_curve_line = always_redraw(get_line_to_curve)
            sine_curve_line = always_redraw(get_curve)

            self.add(dot)
            self.add(orbit, origin_to_circle_line, dot_to_curve_line, sine_curve_line)
            self.wait(8.5)

            dot.remove_updater(go_around_circle)


===================================================
/. 🚀 docs/source/installation.rst
===================================================

Installation
============

Depending on your use case, different installation options are recommended: 
if you just want to play around with Manim for a bit, interactive in-browser
notebooks are a really simple way of exploring the library as they
require no local installation. Head over to
https://try.manim.community to give our interactive tutorial a try.

Otherwise, if you intend to use Manim to work on an animation project,
we recommend installing the library locally (either to a conda environment,
your system's Python, or via Docker).

.. warning::

   Note that there are several different versions of Manim. The
   instructions on this website are **only** for the *community edition*.
   Find out more about the :ref:`differences between Manim
   versions <different-versions>` if you are unsure which
   version you should install.

#. :ref:`Installing Manim to a conda environment <conda-installation>`
#. :ref:`Installing Manim to your system's Python <local-installation>`
#. :ref:`Using Manim via Docker <docker-installation>`
#. :ref:`Interactive Jupyter notebooks via Binder / Google Colab <interactive-online>`


.. _conda-installation: 

Installing Manim via Conda and related environment managers
***********************************************************

Conda is a package manager for Python that allows creating environments
where all your dependencies are stored. Like this, you don't clutter up your PC with
unwanted libraries and you can just delete the environment when you don't need it anymore.
It is a good way to install manim since all dependencies like
``ffmpeg``, ``pycairo``, etc. come with it.
Also, the installation steps are the same, no matter if you are
on Windows, Linux, Intel Macs or on Apple Silicon.

.. NOTE::

   There are various popular alternatives to Conda like
   `mamba <https://mamba.readthedocs.io/en/latest/>`__ /
   `micromamba <https://mamba.readthedocs.io/en/latest/user_guide/micromamba.html>`__,
   or `pixi <https://pixi.sh>`__.
   They all can be used to setup a suitable, isolated environment
   for your Manim projects.

The following pages show how to install Manim in a conda environment: 

.. toctree::
   :maxdepth: 2

   installation/conda



.. _local-installation: 

Installing Manim locally
************************

Manim is a Python library, and it can be 
installed via `pip <https://pypi.org/project/manim/>`__
or `conda <https://anaconda.org/conda-forge/manim/>`__. However,
in order for Manim to work properly, some additional system
dependencies need to be installed first. The following pages have
operating system specific instructions for you to follow.

Manim requires Python version ``3.8`` or above to run.

.. hint::

   Depending on your particular setup, the installation process
   might be slightly different. Make sure that you have tried to
   follow the steps on the following pages carefully, but in case
   you hit a wall we are happy to help: either `join our Discord
   <https://www.manim.community/discord/>`__, or start a new
   Discussion `directly on GitHub
   <https://github.com/ManimCommunity/manim/discussions>`__.

.. toctree::
   :maxdepth: 2

   installation/windows
   installation/macos
   installation/linux

Once Manim is installed locally, you can proceed to our 
:doc:`quickstart guide <tutorials/quickstart>` which walks you
through rendering a first simple scene.

As mentioned above, do not worry if there are errors or other
problems: consult our :doc:`FAQ section </faq/index>` for help
(including instructions for how to ask Manim's community for help).



.. _docker-installation: 

Using Manim via Docker
**********************

`Docker <https://www.docker.com>`__ is a virtualization tool that
allows the distribution of encapsulated software environments (containers).

The following pages contain more information about the docker image
maintained by the community, ``manimcommunity/manim``: 

.. toctree::

   installation/docker


.. _interactive-online: 

Interactive Jupyter notebooks for your browser
**********************************************

Manim ships with a built-in ``%%manim`` IPython magic command
designed for the use within `Jupyter notebooks <https://jupyter.org>`__.
Our interactive tutorial over at https://try.manim.community illustrates
how Manim can be used from within a Jupyter notebook.

The following pages explain how you can setup interactive environments
like that yourself: 

.. toctree::

   installation/jupyter

.. _editor-addons: 

Editors
********

If you're using Visual Studio Code you can install an extension called
*Manim Sideview* which provides automated rendering and an integrated preview
of the animation inside the editor. The extension can be installed through the
`marketplace of VS Code <https://marketplace.visualstudio.com/items?itemName=Rickaym.manim-sideview>`__.


Installation for developers
***************************

In order to change code in the library, it is recommended to
install Manim in a different way. Please follow the instructions
in our :doc:`contribution guide <contributing>` if you are
interested in that.


===================================================
/. 🚀 docs/source/installation/conda.rst
===================================================

Conda
=====

Required Dependencies
---------------------

There are several package managers that work with conda packages,
namely `conda <https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html>`__,
`mamba <https://mamba.readthedocs.io>`__ and `pixi <https://pixi.sh>`__.

After installing your package manager, you can create a new environment and install ``manim`` inside by running

.. code-block:: bash

   # using conda or mamba
   conda create -n my-manim-environment
   conda activate my-manim-environment
   conda install -c conda-forge manim
   # using pixi
   pixi init
   pixi add manim

Since all dependencies (except LaTeX) are handled by conda, you don't need to worry
about needing to install additional dependencies.



Optional Dependencies
---------------------

In order to make use of Manim's interface to LaTeX to, for example, render
equations, LaTeX has to be installed as well. Note that this is an optional
dependency: if you don't intend to use LaTeX, you don't have to install it.

You can install LaTeX by following the optional dependencies steps
for :ref:`Windows <win-optional-dependencies>`,
:ref:`Linux <linux-optional-dependencies>` or
:ref:`macOS <macos-optional-dependencies>`.



Working with Manim
------------------

At this point, you should have a working installation of Manim, head
over to our :doc:`Quickstart Tutorial <../tutorials/quickstart>` to learn
how to make your own *Manimations*!


===================================================
/. 🚀 docs/source/installation/windows.rst
===================================================

Windows
=======

The easiest way of installing Manim and its dependencies is by using a
package manager like `Chocolatey <https://chocolatey.org/>`__
or `Scoop <https://scoop.sh>`__. If you are not afraid of editing
your System's ``PATH``, a manual installation is also possible.
In fact, if you already have an existing Python
installation (3.8 or above), it might be the easiest way to get
everything up and running.

If you choose to use one of the package managers, please follow
their installation instructions
(`for Chocolatey <https://chocolatey.org/install#install-step2>`__,
`for Scoop <https://scoop-docs.now.sh/docs/getting-started/Quick-Start.html>`__)
to make one of them available on your system.


Required Dependencies
---------------------

Manim requires a recent version of Python (3.8 or above) and ``ffmpeg`` 
in order to work.

Chocolatey
**********

Manim can be installed via Chocolatey simply by running: 

.. code-block:: powershell

   choco install manimce

That's it, no further steps required. You can continue with installing
the :ref:`optional dependencies <win-optional-dependencies>` below.

Scoop
*****

While there is no recipe for installing Manim with Scoop directly,
you can install all requirements by running: 

.. code-block:: powershell

   scoop install python ffmpeg

and then Manim can be installed by running: 

.. code-block:: powershell

   python -m pip install manim

Manim should now be installed on your system. Continue reading
the :ref:`optional dependencies <win-optional-dependencies>` section
below.

Winget
******

While there is no recipe for installing Manim with Winget directly,
you can install all requirements by running: 

.. code-block:: powershell

   winget install python
   winget install ffmpeg

and then Manim can be installed by running: 

.. code-block:: powershell

   python -m pip install manim

Manim should now be installed on your system. Continue reading
the :ref:`optional dependencies <win-optional-dependencies>` section
below.


Manual Installation
*******************

As mentioned above, Manim needs a reasonably recent version of
Python 3 (3.8 or above) and FFmpeg.

**Python:** Head over to https://www.python.org, download an installer
for a recent version of Python, and follow its instructions to get Python
installed on your system.

.. note::

   We have received reports of problems caused by using the version of
   Python that can be installed from the Windows Store. At this point,
   we recommend staying away from the Windows Store version. Instead,
   install Python directly from the
   `official website <https://www.python.org>`__.

**FFmpeg:** In order to install FFmpeg, you can get a
pre-compiled and ready-to-use version from one of the resources
linked at https://ffmpeg.org/download.html#build-windows, such as
`the version available here
<https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.7z>`__
(recommended), or if you know exactly what you are doing
you can alternatively get the source code
from https://ffmpeg.org/download.html and compile it yourself.


After downloading the pre-compiled archive, 
`unzip it <https://www.7-zip.org>`__ and, if you like, move the
extracted directory to some more permanent place (e.g.,
``C:\Program Files\``). Next, edit the ``PATH`` environment variable: 
first, visit ``Control Panel`` > ``System`` > ``System settings`` >
``Environment Variables``, then add the full path to the ``bin`` 
directory inside of the (moved) ffmpeg directory to the
``PATH`` variable. Finally, save your changes and exit.

If you now open a new command line prompt (or PowerShell) and
run ``ffmpeg``, the command should be recognized.

At this point, you have all the required dependencies and can now
install Manim via

.. code-block:: powershell

   python -m pip install manim


.. _win-optional-dependencies: 

Optional Dependencies
---------------------

In order to make use of Manim's interface to LaTeX to, for example, render
equations, LaTeX has to be installed as well. Note that this is an optional
dependency: if you don't intend to use LaTeX, you don't have to install it.

For Windows, the recommended LaTeX distribution is 
`MiKTeX <https://miktex.org/download>`__. You can install it by using the
installer from the linked MiKTeX site, or by using the package manager
of your choice (Chocolatey: ``choco install miktex.install``,
Scoop: ``scoop install latex``, Winget: ``winget install MiKTeX.MiKTeX``).

If you are concerned about disk space, there are some alternative,
smaller distributions of LaTeX.

**Using Chocolatey:** If you used Chocolatey to install manim or are already
a chocolatey user, then you can simply run ``choco install manim-latex``. It
is a dedicated package for Manim based on TinyTeX which contains all the
required packages that Manim interacts with.

**Manual Installation:**
You can also use `TinyTeX <https://yihui.org/tinytex/>`__ (Chocolatey: ``choco install tinytex``,
Scoop: first ``scoop bucket add r-bucket https://github.com/cderv/r-bucket.git``,
then ``scoop install tinytex``) alternative installation instructions can be found at their website.
Keep in mind that you will have to manage the LaTeX packages installed on your system yourself via ``tlmgr``.
Therefore we only recommend this option if you know what you are doing.

The full list of LaTeX packages which Manim interacts with in some way
(a subset might be sufficient for your particular application) are::

   amsmath babel-english cbfonts-fd cm-super ctex doublestroke dvisvgm everysel
   fontspec frcursive fundus-calligra gnu-freefont jknapltx latex-bin
   mathastext microtype ms physics preview ragged2e relsize rsfs
   setspace standalone tipa wasy wasysym xcolor xetex xkeyval



Working with Manim
------------------

At this point, you should have a working installation of Manim, head
over to our :doc:`Quickstart Tutorial <../tutorials/quickstart>` to learn
how to make your own *Manimations*!


===================================================
/. 🚀 docs/source/installation/macos.rst
===================================================

macOS
=====

For the sake of simplicity, the following instructions assume that you have
the popular `package manager Homebrew <https://brew.sh>`__ installed. While
you can certainly also install all dependencies without it, using Homebrew
makes the process much easier.

If you want to use Homebrew but do not have it installed yet, please
follow `Homebrew's installation instructions <https://docs.brew.sh/Installation>`__.

.. note::

   For a while after Apple released its new ARM-based processors (the Apple Silicon chips like the *"M1 chip"*),
   the recommended way of installing Manim relied on *Rosetta*, Apple's compatibility
   layer between Intel and ARM architectures. This is no longer necessary, Manim can
   (and is recommended to) be installed natively.


Required Dependencies
---------------------

To install all required dependencies for installing Manim (namely: ffmpeg, Python,
and some required Python packages), run: 

.. code-block:: bash

   brew install py3cairo ffmpeg

On *Apple Silicon* based machines (i.e., devices with the M1 chip or similar; if
you are unsure which processor you have check by opening the Apple menu, select
*About This Mac* and check the entry next to *Chip*), some additional dependencies
are required, namely: 

.. code-block:: bash

   brew install pango pkg-config scipy

After all required dependencies are installed, simply run: 

.. code-block:: bash

   pip3 install manim

to install Manim.

.. note::

   A frequent source for installation problems is if ``pip3`` 
   does not point to the correct Python installation on your system.
   To check this, run ``pip3 -V``: for macOS Intel, the path should
   start with ``/usr/local``, and for Apple Silicon with
   ``/opt/homebrew``. If this is not the case, you either forgot
   to modify your shell profile (``.zprofile``) during the installation
   of Homebrew, or did not reload your shell (e.g., by opening a new
   terminal) after doing so. It is also possible that some other
   software (like Pycharm) changed the ``PATH`` variable – to fix this,
   make sure that the Homebrew-related lines in your ``.zprofile`` are
   at the very end of the file.

.. _macos-optional-dependencies: 

Optional Dependencies
---------------------

In order to make use of Manim's interface to LaTeX for, e.g., rendering
equations, LaTeX has to be installed as well. Note that this is an optional
dependency: if you don't intend to use LaTeX, you don't have to install it.

For macOS, the recommended LaTeX distribution is 
`MacTeX <http://www.tug.org/mactex/>`__. You can install it by following
the instructions from the link, or alternatively also via Homebrew by
running: 

.. code-block:: bash

   brew install --cask mactex-no-gui

.. warning::

   MacTeX is a *full* LaTeX distribution and will require more than 4GB of
   disk space. If this is an issue for you, consider installing a smaller
   distribution like
   `BasicTeX <http://www.tug.org/mactex/morepackages.html>`__.

Should you choose to work with some partial TeX distribution, the full list
of LaTeX packages which Manim interacts with in some way (a subset might
be sufficient for your particular application) is::

   amsmath babel-english cbfonts-fd cm-super ctex doublestroke dvisvgm everysel
   fontspec frcursive fundus-calligra gnu-freefont jknapltx latex-bin
   mathastext microtype ms physics preview ragged2e relsize rsfs
   setspace standalone tipa wasy wasysym xcolor xetex xkeyval


Working with Manim
------------------

At this point, you should have a working installation of Manim. Head
over to our :doc:`Quickstart Tutorial <../tutorials/quickstart>` to learn
how to make your own *Manimations*!


===================================================
/. 🚀 docs/source/installation/linux.rst
===================================================

Linux
=====

The installation instructions depend on your particular operating
system and package manager. If you happen to know exactly what you are doing,
you can also simply ensure that your system has: 

- a reasonably recent version of Python 3 (3.8 or above),
- with working Cairo bindings in the form of
  `pycairo <https://cairographics.org/pycairo/>`__,
- FFmpeg accessible from the command line as ``ffmpeg``,
- and `Pango <https://pango.gnome.org>`__ headers.

Then, installing Manim is just a matter of running: 

.. code-block:: bash

   pip3 install manim

.. note::

   In light of the current efforts of migrating to rendering via OpenGL,
   this list might be incomplete. Please `let us know
   <https://github.com/ManimCommunity/manim/issues/new/choose>` if you
   ran into missing dependencies while installing.

In any case, we have also compiled instructions for several common
combinations of operating systems and package managers below.

Required Dependencies
---------------------

apt – Ubuntu / Mint / Debian
****************************

To first update your sources, and then install Cairo, Pango, and FFmpeg
simply run: 

.. code-block:: bash

   sudo apt update
   sudo apt install build-essential python3-dev libcairo2-dev libpango1.0-dev ffmpeg

If you don't have python3-pip installed, install it via: 

.. code-block:: bash

   sudo apt install python3-pip

Then, to install Manim, run: 

.. code-block:: bash

   pip3 install manim

Continue by reading the :ref:`optional dependencies <linux-optional-dependencies>`
section.

dnf – Fedora / CentOS / RHEL
****************************

To install Cairo and Pango: 

.. code-block:: bash

  sudo dnf install cairo-devel pango-devel

In order to successfully build the ``pycairo`` wheel, you will also
need the Python development headers: 

.. code-block:: bash

   sudo dnf install python3-devel

FFmpeg is only available via the RPMfusion repository which you have to
configure first – please consult https://rpmfusion.org/Configuration/ for
instructions. Then, install FFmpeg: 

.. code-block:: bash

   sudo dnf install ffmpeg

At this point you have all required dependencies and can install
Manim by running: 

.. code-block:: bash

   pip3 install manim

Continue by reading the :ref:`optional dependencies <linux-optional-dependencies>`
section.

pacman – Arch / Manjaro
***********************

.. tip::

   Thanks to *groctel*, there is a `dedicated Manim package
   on the AUR! <https://aur.archlinux.org/packages/manim/>` 

If you don't want to use the packaged version from AUR, here is what
you need to do manually: Update your package sources, then install
Cairo, Pango, and FFmpeg: 

.. code-block:: bash

   sudo pacman -Syu
   sudo pacman -S cairo pango ffmpeg

If you don't have ``python-pip`` installed, get it by running: 

.. code-block:: bash

   sudo pacman -S python-pip

then simply install Manim via: 

.. code-block:: bash

   pip3 install manim


Continue by reading the :ref:`optional dependencies <linux-optional-dependencies>`
section.


.. _linux-optional-dependencies: 

Optional Dependencies
---------------------

In order to make use of Manim's interface to LaTeX for, e.g., rendering
equations, LaTeX has to be installed as well. Note that this is an optional
dependency: if you don't intend to use LaTeX, you don't have to install it.

You can use whichever LaTeX distribution you like or whichever is easiest
to install with your package manager. Usually,
`TeX Live <https://www.tug.org/texlive/>`__ is a good candidate if you don't
care too much about disk space.

For Debian-based systems (like Ubuntu), sufficient LaTeX dependencies can be
installed by running: 

.. code-block:: bash

   sudo apt install texlive texlive-latex-extra

For Fedora (see `docs <https://docs.fedoraproject.org/en-US/neurofedora/latex/>`__): 

.. code-block:: bash

   sudo dnf install texlive-scheme-full

Should you choose to work with some smaller TeX distribution like
`TinyTeX <https://yihui.org/tinytex/>`__ , the full list
of LaTeX packages which Manim interacts with in some way (a subset might
be sufficient for your particular application) is::

   collection-basic amsmath babel-english cbfonts-fd cm-super ctex doublestroke
   dvisvgm everysel fontspec frcursive fundus-calligra gnu-freefont jknapltx
   latex-bin mathastext microtype ms physics preview ragged2e relsize rsfs
   setspace standalone tipa wasy wasysym xcolor xetex xkeyval



Working with Manim
------------------

At this point, you should have a working installation of Manim, head
over to our :doc:`Quickstart Tutorial <../tutorials/quickstart>` to learn
how to make your own *Manimations*!


===================================================
/. 🚀 docs/source/installation/docker.rst
===================================================

Docker
======

The community maintains a docker image, which can be found
`on DockerHub <https://hub.docker.com/r/manimcommunity/manim>`__.
For our image ``manimcommunity/manim``, there are the following tags: 

- ``latest``: the most recent version corresponding
  to `the main branch <https://github.com/ManimCommunity/manim>`__,
- ``stable``: the latest released version (according to
  `the releases page <https://github.com/ManimCommunity/manim/releases>`__),
- ``vX.Y.Z``: any particular released version (according to
  `the releases page <https://github.com/ManimCommunity/manim/releases>`__).

.. note::

   When using Manim's CLI within a Docker container, some flags like
   ``-p`` (preview file) and ``-f`` (show output file in the file browser)
   are not supported.


Basic usage of the Docker container
-----------------------------------

Assuming that you can access the docker installation on your system
from a terminal (bash / PowerShell) via ``docker``, you can
render a scene ``CircleToSquare`` in a file `test_scenes.py`
with the following command.

.. code-block:: bash

   docker run --rm -it -v "/full/path/to/your/directory:/manim" manimcommunity/manim manim -qm test_scenes.py CircleToSquare

.. tip::

   For Linux users there might be permission problems when letting the
   user in the container write to the mounted volume.
   Add ``--user="$(id -u):$(id -g)"`` to the ``docker`` CLI arguments
   to prevent the creation of output files not belonging to your user.


Instead of using the "throwaway container" approach outlined
above, you can also create a named container that you can
modify to your liking. First, run

.. code-block:: sh

   docker run -it --name my-manim-container -v "/full/path/to/your/directory:/manim" manimcommunity/manim bash


to obtain an interactive shell inside your container allowing you
to, e.g., install further dependencies (like texlive packages using
``tlmgr``). Exit the container as soon as you are satisfied. Then,
before using it, start the container by running

.. code-block:: sh

   docker start my-manim-container

which starts the container in the background. Then, to render
a scene ``CircleToSquare`` in a file ``test_scenes.py``, run

.. code-block:: sh

   docker exec -it my-manim-container manim -qm test_scenes.py CircleToSquare


Running JupyterLab via Docker
-----------------------------

Another alternative to using the Docker image is to spin up a
local JupyterLab instance. To do that, simply run

.. code-block:: sh

   docker run -it -p 8888:8888 manimcommunity/manim jupyter lab --ip=0.0.0.0

and then follow the instructions in the terminal.


===================================================
/. 🚀 docs/source/installation/jupyter.rst
===================================================

Jupyter Notebooks
=================


Binder
------

`Binder <https://mybinder.readthedocs.io/en/latest/>`__ is an online
platform that hosts shareable and customizable computing environments
in the form of Jupyter notebooks. Manim ships with a built-in ``%%manim`` 
Jupyter magic command which makes it easy to use in these notebooks.

To see an example for such an environment, visit our interactive
tutorial over at https://try.manim.community/.

It is relatively straightforward to prepare your own notebooks in
a way that allows them to be shared interactively via Binder as well: 

#. First, prepare a directory containing one or multiple notebooks
   which you would like to share in an interactive environment. You
   can create these notebooks by using Jupyter notebooks with a
   local installation of Manim, or also by working in our pre-existing
   `interactive tutorial environment <https://try.manim.community/>`__.
#. In the same directory containing your notebooks, add a
   file named ``Dockerfile`` with the following content: 

   .. code-block:: dockerfile

      FROM docker.io/manimcommunity/manim:v0.9.0

      COPY --chown=manimuser:manimuser . /manim

   Don't forget to change the version tag ``v0.9.0`` to the version you
   were working with locally when creating your notebooks.
#. Make the directory with your worksheets and the ``Dockerfile`` 
   available to the public (and in particular: to Binder!). There are
   `several different options to do so
   <https://mybinder.readthedocs.io/en/latest/introduction.html#how-can-i-prepare-a-repository-for-binder>`__,
   within the community we usually work with GitHub
   repositories or gists.
#. Once your material is publicly available, visit
   https://mybinder.org and follow the instructions there to
   generate an interactive environment for your worksheets.

.. hint::

   The repository containing our `interactive tutorial
   <https://try.manim.community>`__ can be found at
   https://github.com/ManimCommunity/jupyter_examples.


Google Colaboratory
-------------------

It is also possible to install Manim in a 
`Google Colaboratory <https://colab.research.google.com/>`__ environment.
In contrast to Binder, where you can customize and prepare the environment
beforehand (such that Manim is already installed and ready to be used), you
will have to take care of that every time you start
a new notebook in Google Colab. Fortunately, this
is not particularly difficult.

After creating a new notebook, paste the following code block in a cell,
then execute it.

.. code-block::

   !sudo apt update
   !sudo apt install libcairo2-dev ffmpeg \
       texlive texlive-latex-extra texlive-fonts-extra \
       texlive-latex-recommended texlive-science \
       tipa libpango1.0-dev
   !pip install manim
   !pip install IPython==8.21.0

You should start to see Colab installing all the dependencies specified
in these commands. After the execution has completed, you will be prompted
to restart the runtime. Click the "restart runtime" button at the bottom of
the cell output. You are now ready to use Manim in Colab!

To check that everything works as expected, first import Manim by running

.. code-block::

   from manim import *

in a new code cell. Then create another cell containing the
following code::

   %%manim -qm -v WARNING SquareToCircle

   class SquareToCircle(Scene): 
      def construct(self): 
         square = Square()
         circle = Circle()
         circle.set_fill(PINK, opacity=0.5)
         self.play(Create(square))
         self.play(Transform(square, circle))
         self.wait()

Upon running this cell, a short animation transforming a square
into a circle should be rendered and displayed.


===================================================
/. 🚀 docs/source/tutorials_guides.rst
===================================================

Tutorials & Guides
==================

.. toctree::
   :caption: Table of Contents
   :maxdepth: 2

   tutorials/index
   guides/index
   faq/index


===================================================
/. 🚀 docs/source/tutorials/index.rst
===================================================

Tutorials
=========

.. toctree::
   :caption: Table of Contents
   :maxdepth: 2

   quickstart
   output_and_config
   building_blocks


===================================================
/. 🚀 docs/source/tutorials/quickstart.rst
===================================================

==========
Quickstart
==========

.. note::
 Before proceeding, install Manim and make sure it's running properly by
 following the steps in :doc:`../installation`. For
 information on using Manim with Jupyterlab or Jupyter notebook, go to the
 documentation for the
 :meth:`IPython magic command <manim.utils.ipython_magic.ManimMagic.manim>`,
 ``%%manim``.

Overview
********

This quickstart guide will lead you through creating a sample project using Manim: an animation
engine for precise programmatic animations.

First, you will use a command line 
interface to create a ``Scene``, the class through which Manim generates videos.
In the ``Scene`` you will animate a circle. Then you will add another ``Scene`` showing
a square transforming into a circle. This will be your introduction to Manim's animation ability.
Afterwards, you will position multiple mathematical objects (``Mobject``\s). Finally, you
will learn the ``.animate`` syntax, a powerful feature that animates the methods you
use to modify ``Mobject``\s.


Starting a new project
**********************

Start by creating a new folder. For the purposes of this guide, name the folder ``project``: 

.. code-block:: bash

   project/

This folder is the root folder for your project. It contains all the files that Manim needs to function,
as well as any output that your project produces.


Animating a circle
******************

1. Open a text editor, such as Notepad. Copy the following code snippet into the window: 

.. code-block:: python

   from manim import *


   class CreateCircle(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
           self.play(Create(circle))  # show the circle on screen

2. Save the code snippet into your project folder with the name ``scene.py``.

.. code-block:: bash

   project/
   └─scene.py

3. Open the command line, navigate to your project folder, and execute
the following command: 

.. code-block:: bash

   manim -pql scene.py CreateCircle

Manim will output rendering information, then create an MP4 file.
Your default movie player will play the MP4 file, displaying the following animation.

.. manim:: CreateCircle
   :hide_source: 

   class CreateCircle(Scene): 
       def construct(self): 
           circle = Circle()                   # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
           self.play(Create(circle))     # show the circle on screen

If you see an animation of a pink circle being drawn, congratulations!
You just wrote your first Manim scene from scratch.

If you get an error 
message instead, you do not see a video, or if the video output does not
look like the preceding animation, it is likely that Manim has not been
installed correctly. Please refer to our :doc:`FAQ section </faq/index>`
for help with the most common issues.


***********
Explanation
***********

Let's go over the script you just executed line by line to see how Manim was
able to draw the circle.

The first line imports all of the contents of the library: 

.. code-block:: python

   from manim import *

This is the recommended way of using Manim, as a single script often uses
multiple names from the Manim namespace. In your script, you imported and used
``Scene``, ``Circle``, ``PINK`` and ``Create``.

Now let's look at the next two lines: 

.. code-block:: python

   class CreateCircle(Scene): 
       def construct(self): 
           ...

Most of the time, the code for scripting an animation is entirely contained within
the :meth:`~.Scene.construct` method of a :class:`.Scene` class.
Inside :meth:`~.Scene.construct`, you can create objects, display them on screen, and animate them.

The next two lines create a circle and set its color and opacity: 

.. code-block:: python

           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency

Finally, the last line uses the animation :class:`.Create` to display the
circle on your screen: 

.. code-block:: python

           self.play(Create(circle))  # show the circle on screen

.. tip:: All animations must reside within the :meth:`~.Scene.construct` method of a
         class derived from :class:`.Scene`.  Other code, such as auxiliary
         or mathematical functions, may reside outside the class.


Transforming a square into a circle
***********************************

With our circle animation complete, let's move on to something a little more complicated.

1. Open ``scene.py``, and add the following code snippet below the ``CreateCircle`` class: 

.. code-block:: python

   class SquareToCircle(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set color and transparency

           square = Square()  # create a square
           square.rotate(PI / 4)  # rotate a certain amount

           self.play(Create(square))  # animate the creation of the square
           self.play(Transform(square, circle))  # interpolate the square into the circle
           self.play(FadeOut(square))  # fade out animation

2. Render ``SquareToCircle`` by running the following command in the command line: 

.. code-block:: bash

   manim -pql scene.py SquareToCircle

The following animation will render: 

.. manim:: SquareToCircle2
   :hide_source: 

   class SquareToCircle2(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set color and transparency

           square = Square()  # create a square
           square.rotate(PI / 4)  # rotate a certain amount

           self.play(Create(square))  # animate the creation of the square
           self.play(Transform(square, circle))  # interpolate the square into the circle
           self.play(FadeOut(square))  # fade out animation

This example shows one of the primary features of Manim: the ability to
implement complicated and mathematically intensive animations (such as cleanly
interpolating between two geometric shapes) with just a few lines of code.


Positioning ``Mobject``\s
*************************

Next, let's go over some basic techniques for positioning ``Mobject``\s.

1. Open ``scene.py``, and add the following code snippet below the ``SquareToCircle`` method: 

.. code-block:: python

   class SquareAndCircle(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency

           square = Square()  # create a square
           square.set_fill(BLUE, opacity=0.5)  # set the color and transparency

           square.next_to(circle, RIGHT, buff=0.5)  # set the position
           self.play(Create(circle), Create(square))  # show the shapes on screen

2. Render ``SquareAndCircle`` by running the following command in the command line: 

.. code-block:: bash

   manim -pql scene.py SquareAndCircle

The following animation will render: 

.. manim:: SquareAndCircle2
   :hide_source: 

   class SquareAndCircle2(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           circle.set_fill(PINK, opacity=0.5)  # set the color and transparency

           square = Square() # create a square
           square.set_fill(BLUE, opacity=0.5) # set the color and transparency

           square.next_to(circle, RIGHT, buff=0.5) # set the position
           self.play(Create(circle), Create(square))  # show the shapes on screen

``next_to`` is a ``Mobject`` method for positioning ``Mobject``\s.

We first specified 
the pink circle as the square's reference point by passing ``circle`` as the method's first argument.
The second argument is used to specify the direction the ``Mobject`` is placed relative to the reference point.
In this case, we set the direction to ``RIGHT``, telling Manim to position the square to the right of the circle.
Finally, ``buff=0.5`` applied a small distance buffer between the two objects.

Try changing ``RIGHT`` to ``LEFT``, ``UP``, or ``DOWN`` instead, and see how that changes the position of the square.

Using positioning methods, you can render a scene with multiple ``Mobject``\s,
setting their locations in the scene using coordinates or positioning them
relative to each other.

For more information on ``next_to`` and other positioning methods, check out the
list of :class:`.Mobject` methods in our reference manual.


Using ``.animate`` syntax to animate methods
********************************************

The final lesson in this tutorial is using ``.animate``, a ``Mobject`` method which
animates changes you make to a ``Mobject``. When you prepend ``.animate`` to any
method call that modifies a ``Mobject``, the method becomes an animation which
can be played using ``self.play``. Let's return to ``SquareToCircle`` to see the
differences between using methods when creating a ``Mobject``,
and animating those method calls with ``.animate``.

1. Open ``scene.py``, and add the following code snippet below the ``SquareAndCircle`` class: 

.. code-block:: python

   class AnimatedSquareToCircle(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           square = Square()  # create a square

           self.play(Create(square))  # show the square on screen
           self.play(square.animate.rotate(PI / 4))  # rotate the square
           self.play(Transform(square, circle))  # transform the square into a circle
           self.play(
               square.animate.set_fill(PINK, opacity=0.5)
           )  # color the circle on screen

2. Render ``AnimatedSquareToCircle`` by running the following command in the command line: 

.. code-block:: bash

   manim -pql scene.py AnimatedSquareToCircle

The following animation will render: 

.. manim:: AnimatedSquareToCircle2
   :hide_source: 

   class AnimatedSquareToCircle2(Scene): 
       def construct(self): 
           circle = Circle()  # create a circle
           square = Square()  # create a square

           self.play(Create(square))  # show the square on screen
           self.play(square.animate.rotate(PI / 4))  # rotate the square
           self.play(Transform(square, circle))  # transform the square into a circle
           self.play(square.animate.set_fill(PINK, opacity=0.5))  # color the circle on screen

The first ``self.play`` creates the square. The second animates rotating it 45 degrees.
The third transforms the square into a circle, and the last colors the circle pink.
Although the end result is the same as that of ``SquareToCircle``, ``.animate`` shows
``rotate`` and ``set_fill`` being applied to the ``Mobject`` dynamically, instead of creating them
with the changes already applied.

Try other methods, like ``flip`` or ``shift``, and see what happens.

3. Open ``scene.py``, and add the following code snippet below the ``AnimatedSquareToCircle`` class: 

.. code-block:: python

   class DifferentRotations(Scene): 
       def construct(self): 
           left_square = Square(color=BLUE, fill_opacity=0.7).shift(2 * LEFT)
           right_square = Square(color=GREEN, fill_opacity=0.7).shift(2 * RIGHT)
           self.play(
               left_square.animate.rotate(PI), Rotate(right_square, angle=PI), run_time=2
           )
           self.wait()

4. Render ``DifferentRotations`` by running the following command in the command line: 

.. code-block:: bash

   manim -pql scene.py DifferentRotations

The following animation will render: 

.. manim:: DifferentRotations2
   :hide_source: 

   class DifferentRotations2(Scene): 
       def construct(self): 
           left_square = Square(color=BLUE, fill_opacity=0.7).shift(2*LEFT)
           right_square = Square(color=GREEN, fill_opacity=0.7).shift(2*RIGHT)
           self.play(left_square.animate.rotate(PI), Rotate(right_square, angle=PI), run_time=2)
           self.wait()

This ``Scene`` illustrates the quirks of ``.animate``. When using ``.animate``, Manim
actually takes a ``Mobject``'s starting state and its ending state and interpolates the two.
In the ``AnimatedSquareToCircle`` class, you can observe this when the square rotates: 
the corners of the square appear to contract slightly as they move into the positions required
for the first square to transform into the second one.

In ``DifferentRotations``, the difference between ``.animate``'s interpretation of rotation and the
``Rotate`` method is far more apparent. The starting and ending states of a ``Mobject`` rotated 180 degrees
are the same, so ``.animate`` tries to interpolate two identical objects and the result is the left square.
If you find that your own usage of ``.animate`` is causing similar unwanted behavior, consider
using conventional animation methods like the right square, which uses ``Rotate``.


``Transform`` vs ``ReplacementTransform`` 
*****************************************

The difference between ``Transform`` and ``ReplacementTransform`` is that ``Transform(mob1, mob2)`` transforms the points
(as well as other attributes like color) of ``mob1`` into the points/attributes of ``mob2``.

``ReplacementTransform(mob1, mob2)`` on the other hand literally replaces ``mob1`` on the scene with ``mob2``.

The use of ``ReplacementTransform`` or ``Transform`` is mostly up to personal preference. They can be used to accomplish the same effect, as shown below.

.. code-block:: python

    class TwoTransforms(Scene): 
        def transform(self): 
            a = Circle()
            b = Square()
            c = Triangle()
            self.play(Transform(a, b))
            self.play(Transform(a, c))
            self.play(FadeOut(a))

        def replacement_transform(self): 
            a = Circle()
            b = Square()
            c = Triangle()
            self.play(ReplacementTransform(a, b))
            self.play(ReplacementTransform(b, c))
            self.play(FadeOut(c))

        def construct(self): 
            self.transform()
            self.wait(0.5)  # wait for 0.5 seconds
            self.replacement_transform()


However, in some cases it is more beneficial to use ``Transform``, like when you are transforming several mobjects one after the other.
The code below avoids having to keep a reference to the last mobject that was transformed.

.. manim:: TransformCycle

    class TransformCycle(Scene): 
        def construct(self): 
            a = Circle()
            t1 = Square()
            t2 = Triangle()
            self.add(a)
            self.wait()
            for t in [t1,t2]: 
                self.play(Transform(a,t))

************
You're done!
************

With a working installation of Manim and this sample project under your belt,
you're ready to start creating animations of your own.  To learn
more about what Manim is doing under the hood, move on to the next tutorial: 
:doc:`output_and_config`.  For an overview of
Manim's features, as well as its configuration and other settings, check out the
other :doc:`Tutorials <../tutorials/index>`.  For a list of all available features, refer to the
:doc:`../reference` page.


===================================================
/. 🚀 docs/source/tutorials/output_and_config.rst
===================================================

Manim's Output Settings
=======================

This document will focus on understanding manim's output files and some of the
main command-line flags available.

.. note:: This tutorial picks up where :doc:`quickstart` left off, so please
          read that document before starting this one.

Manim output folders
********************

At this point, you have just executed the following command.

.. code-block:: bash

   manim -pql scene.py SquareToCircle

Let's dissect what just happened step by step.  First, this command executes
manim on the file ``scene.py``, which contains our animation code.  Further,
this command tells manim exactly which ``Scene`` is to be rendered, in this case,
it is ``SquareToCircle``.  This is necessary because a single scene file may
contain more than one scene.  Next, the flag `-p` tells manim to play the scene
once it's rendered, and the `-ql` flag tells manim to render the scene in low
quality.

After the video is rendered, you will see that manim has generated some new
files and the project folder will look as follows.

.. code-block:: bash

   project/
   ├─scene.py
   └─media
     ├─videos
     |  └─scene
     |     └─480p15
     |        ├─SquareToCircle.mp4
     |        └─partial_movie_files
     ├─text
     └─Tex


There are quite a few new files.  The main output is in
``media/videos/scene/480p15/SquareToCircle.mp4``.  By default, the ``media`` 
folder will contain all of manim's output files.  The ``media/videos`` 
subfolder contains the rendered videos.  Inside of it, you will find one folder
for each different video quality.  In our case, since we used the ``-l`` flag,
the video was generated at 480 resolution at 15 frames per second from the
``scene.py`` file.  Therefore, the output can be found inside
``media/videos/scene/480p15``.  The additional folders
``media/videos/scene/480p15/partial_movie_files`` as well as ``media/text`` and
``media/Tex`` contain files that are used by manim internally.

You can see how manim makes use of the generated folder structure by executing
the following command,

.. code-block:: bash

   manim -pqh scene.py SquareToCircle

The ``-ql`` flag (for low quality) has been replaced by the ``-qh`` flag, for
high quality.  Manim will take considerably longer to render this file, and it
will play it once it's done since we are using the ``-p`` flag.  The output
should look like this: 

.. manim:: SquareToCircle3
   :hide_source: 
   :quality: high

   class SquareToCircle3(Scene): 
       def construct(self): 
           circle = Circle()                    # create a circle
           circle.set_fill(PINK, opacity=0.5)   # set color and transparency

           square = Square()                    # create a square
           square.flip(RIGHT)                   # flip horizontally
           square.rotate(-3 * TAU / 8)          # rotate a certain amount

           self.play(Create(square))      # animate the creation of the square
           self.play(Transform(square, circle)) # interpolate the square into the circle
           self.play(FadeOut(square))           # fade out animation

And the folder structure should look as follows.

.. code-block:: bash

   project/
   ├─scene.py
   └─media
     ├─videos
     | └─scene
     |   ├─480p15
     |   | ├─SquareToCircle.mp4
     |   | └─partial_movie_files
     |   └─1080p60
     |     ├─SquareToCircle.mp4
     |     └─partial_movie_files
     ├─text
     └─Tex

Manim has created a new folder ``media/videos/1080p60``, which corresponds to
the high resolution and the 60 frames per second.  Inside of it, you can find
the new ``SquareToCircle.mp4``, as well as the corresponding
``partial_movie_files``.

When working on a project with multiple scenes, and trying out multiple
resolutions, the structure of the output directories will keep all your videos
organized.

Further, manim has the option to output the last frame of a scene, when adding
the flag ``-s``. This is the fastest option to quickly get a preview of a scene.
The corresponding folder structure looks like this: 

.. code-block:: bash

   project/
   ├─scene.py
   └─media
     ├─images
     | └─scene
     |   ├─SquareToCircle.png
     ├─videos
     | └─scene
     |   ├─480p15
     |   | ├─SquareToCircle.mp4
     |   | └─partial_movie_files
     |   └─1080p60
     |     ├─SquareToCircle.mp4
     |     └─partial_movie_files
     ├─text
     └─Tex

Saving the last frame with ``-s`` can be combined with the flags for different
resolutions, e.g. ``-s -ql``, ``-s -qh`` 




Sections
********

In addition to the movie output file one can use sections. Each section produces
its own output video. The cuts between two sections can be set like this: 

.. code-block:: python

    def construct(self): 
        # play the first animations...
        # you don't need a section in the very beginning as it gets created automatically
        self.next_section()
        # play more animations...
        self.next_section("this is an optional name that doesn't have to be unique")
        # play even more animations...
        self.next_section("this is a section without any animations, it will be removed")

All the animations between two of these cuts get concatenated into a single output
video file.
Be aware that you need at least one animation in each section. For example this wouldn't create an output video: 

.. code-block:: python

   def construct(self): 
       self.next_section()
       # this section doesn't have any animations and will be removed
       # but no error will be thrown
       # feel free to tend your flock of empty sections if you so desire
       self.add(Circle())
       self.next_section()

One way of fixing this is to wait a little: 

.. code-block:: python

   def construct(self): 
       self.next_section()
       self.add(Circle())
       # now we wait 1sec and have an animation to satisfy the section
       self.wait()
       self.next_section()

For videos to be created for each section you have to add the ``--save_sections`` flag to the Manim call like this: 

.. code-block:: bash

   manim --save_sections scene.py

If you do this, the ``media`` folder will look like this: 

.. code-block:: bash

    media
    ├── images
    │   └── simple_scenes
    └── videos
        └── simple_scenes
            └── 480p15
                ├── ElaborateSceneWithSections.mp4
                ├── partial_movie_files
                │   └── ElaborateSceneWithSections
                │       ├── 2201830969_104169243_1331664314.mp4
                │       ├── 2201830969_398514950_125983425.mp4
                │       ├── 2201830969_398514950_3447021159.mp4
                │       ├── 2201830969_398514950_4144009089.mp4
                │       ├── 2201830969_4218360830_1789939690.mp4
                │       ├── 3163782288_524160878_1793580042.mp4
                │       └── partial_movie_file_list.txt
                └── sections
                    ├── ElaborateSceneWithSections_0000.mp4
                    ├── ElaborateSceneWithSections_0001.mp4
                    ├── ElaborateSceneWithSections_0002.mp4
                    └── ElaborateSceneWithSections.json

As you can see each section receives their own output video in the ``sections`` directory.
The JSON file in here contains some useful information for each section: 

.. code-block:: json

    [
        {
            "name": "create square",
            "type": "default.normal",
            "video": "ElaborateSceneWithSections_0000.mp4",
            "codec_name": "h264",
            "width": 854,
            "height": 480,
            "avg_frame_rate": "15/1",
            "duration": "2.000000",
            "nb_frames": "30"
        },
        {
            "name": "transform to circle",
            "type": "default.normal",
            "video": "ElaborateSceneWithSections_0001.mp4",
            "codec_name": "h264",
            "width": 854,
            "height": 480,
            "avg_frame_rate": "15/1",
            "duration": "2.000000",
            "nb_frames": "30"
        },
        {
            "name": "fade out",
            "type": "default.normal",
            "video": "ElaborateSceneWithSections_0002.mp4",
            "codec_name": "h264",
            "width": 854,
            "height": 480,
            "avg_frame_rate": "15/1",
            "duration": "2.000000",
            "nb_frames": "30"
        }
    ]

This data can be used by third party applications, like a presentation system or automated video editing tool.

You can also skip rendering all animations belonging to a section like this: 

.. code-block:: python

    def construct(self): 
        self.next_section(skip_animations=True)
        # play some animations that shall be skipped...
        self.next_section()
        # play some animations that won't get skipped...




Some command line flags
***********************

When executing the command 

.. code-block:: bash

   manim -pql scene.py SquareToCircle

it specifies the scene to render.  This is not necessary now.  When a single
file contains only one ``Scene`` class, it will just render the ``Scene`` 
class.  When a single file contains more than one ``Scene`` class, manim will
let you choose a ``Scene`` class. If your file contains multiple ``Scene`` 
classes, and you want to render them all, you can use the ``-a`` flag.

As discussed previously, the ``-ql`` specifies low render quality (854x480
15FPS).  This does not look very good, but is very useful for rapid
prototyping and testing. The other options that specify render quality are
``-qm``, ``-qh``, ``-qp`` and ``-qk`` for medium (1280x720 30FPS), high
(1920x1080 60FPS), 2k (2560x1440 60FPS) and 4k quality (3840x2160 60FPS),
respectively.

The ``-p`` flag plays the animation once it is rendered.  If you want to open
the file browser at the location of the animation instead of playing it, you
can use the ``-f`` flag.  You can also omit these two flags.

Finally, by default manim will output .mp4 files.  If you want your animations
in .gif format instead, use the ``--format gif`` flag.  The output files will
be in the same folder as the .mp4 files, and with the same name, but a
different file extension.

This was a quick review of some of the most frequent command-line flags.
For a thorough review of all flags available, see the :doc:`thematic guide on
Manim's configuration system </guides/configuration>`.


===================================================
/. 🚀 docs/source/tutorials/building_blocks.rst
===================================================

#######################
Manim's building blocks
#######################

This document explains the building blocks of manim and will give you all the
necessary tools to start producing your own videos.

Essentially, manim puts at your disposal three different concepts that you can
orchestrate together to produce mathematical animations: the
**mathematical object** (or **mobject** for short), the **animation**, and the
**scene**.  As we will see in the following sections, each of these three
concepts is implemented in manim as a separate class: the :class:`.Mobject`,
:class:`.Animation`, and :class:`.Scene` classes.

.. note:: It is recommended that you read the tutorials :doc:`quickstart` and
          :doc:`output_and_config` before reading this page.


********
Mobjects
********

Mobjects are the basic building blocks for all manim animations.  Each class
that derives from :class:`.Mobject` represents an object that can be displayed
on the screen.  For example, simple shapes such as :class:`.Circle`,
:class:`.Arrow`, and :class:`.Rectangle` are all mobjects.  More complicated
constructs such as :class:`.Axes`, :class:`.FunctionGraph`, or
:class:`.BarChart` are mobjects as well.

If you try to display an instance of :class:`.Mobject` on the screen, you will only
see an empty frame.  The reason is that the :class:`.Mobject` class is an
abstract base class of all other mobjects, i.e. it does not have any
pre-determined visual shape that can be displayed on the screen.  It is only the
skeleton of a thing that *could* be displayed.  Therefore, you will rarely need
to use plain instances of :class:`.Mobject`; instead, you will most likely
create instances of its derived classes.  One of these derived classes is
:class:`.VMobject`.  The ``V`` stands for Vectorized Mobject.  In essence, a
vmobject is a mobject that uses `vector graphics
<https://en.wikipedia.org/wiki/Vector_graphics>`_ to be displayed.  Most of
the time, you will be dealing with vmobjects, though we will continue to use
the term "mobject" to refer to the class of shapes that can be displayed on the
screen, as it is more general.

.. note:: Any object that can be displayed on the screen is a ``mobject``, even if
          it is not necessarily *mathematical* in nature.

.. tip:: To see examples of classes derived from :class:`.Mobject`, see the
         :mod:`.geometry` module.  Most of these are in fact derived from
         :class:`.VMobject` as well.


Creating and displaying mobjects
================================

As explained in :doc:`quickstart`, usually all of the code in a manim
script is put inside the :meth:`.construct` method of a :class:`.Scene` class.
To display a mobject on the screen, call the :meth:`~.Scene.add` method of the
containing :class:`.Scene`.  This is the principal way of displaying a mobject
on the screen when it is not being animated.  To remove a mobject from the
screen, simply call the :meth:`~.Scene.remove` method from the containing
:class:`.Scene`.

.. manim:: CreatingMobjects

    class CreatingMobjects(Scene): 
        def construct(self): 
            circle = Circle()
            self.add(circle)
            self.wait(1)
            self.remove(circle)
            self.wait(1)


Placing mobjects
================

Let's define a new :class:`.Scene` called ``Shapes`` and :meth:`~.Scene.add`
some mobjects to it.  This script generates a static picture that displays a
circle, a square, and a triangle: 

.. manim:: Shapes

    class Shapes(Scene): 
        def construct(self): 
            circle = Circle()
            square = Square()
            triangle = Triangle()

            circle.shift(LEFT)
            square.shift(UP)
            triangle.shift(RIGHT)

            self.add(circle, square, triangle)
            self.wait(1)

By default, mobjects are placed at the center of coordinates, or *origin*, when
they are first created.  They are also given some default colors.  Further, the
``Shapes`` scene places the mobjects by using the :meth:`.shift` method.  The
square is shifted one unit in the ``UP`` direction from the origin, while the
circle and triangle are shifted one unit ``LEFT`` and ``RIGHT``, respectively.

.. attention:: Unlike other graphics software, manim places the center of
               coordinates at the center of the screen.  The positive vertical
               direction is up, and the positive horizontal direction is right.
               See also the constants ``ORIGIN``, ``UP``, ``DOWN``, ``LEFT``,
               ``RIGHT``, and others, defined in the :mod:`.constants` module.

There are many other possible ways to place mobjects on the screen, for example
:meth:`.move_to`, :meth:`.next_to`, and :meth:`.align_to`.  The next scene
``MobjectPlacement`` uses all three.

.. manim:: MobjectPlacement

    class MobjectPlacement(Scene): 
        def construct(self): 
            circle = Circle()
            square = Square()
            triangle = Triangle()

            # place the circle two units left from the origin
            circle.move_to(LEFT * 2)
            # place the square to the left of the circle
            square.next_to(circle, LEFT)
            # align the left border of the triangle to the left border of the circle
            triangle.align_to(circle, LEFT)

            self.add(circle, square, triangle)
            self.wait(1)

The :meth:`.move_to` method uses absolute units (measured relative to the
``ORIGIN``), while :meth:`.next_to` uses relative units (measured from the
mobject passed as the first argument).  :meth:`align_to` uses ``LEFT`` not as
measuring units but as a way to determine the border to use for alignment.  The
coordinates of the borders of a mobject are determined using an imaginary
bounding box around it.

.. tip:: Many methods in manim can be chained together.  For example the two
         lines

         .. code-block:: python

             square = Square()
             square.shift(LEFT)

         can be replaced by

         .. code-block:: python

             square = Square().shift(LEFT)

         Technically, this is possible because most methods calls return the modified mobject.


Styling mobjects
================

The following scene changes the default aesthetics of the mobjects.

.. manim:: MobjectStyling

    class MobjectStyling(Scene): 
        def construct(self): 
            circle = Circle().shift(LEFT)
            square = Square().shift(UP)
            triangle = Triangle().shift(RIGHT)

            circle.set_stroke(color=GREEN, width=20)
            square.set_fill(YELLOW, opacity=1.0)
            triangle.set_fill(PINK, opacity=0.5)

            self.add(circle, square, triangle)
            self.wait(1)

This scene uses two of the main functions that change the visual style of a
mobject: :meth:`.set_stroke` and :meth:`.set_fill`.  The former changes the
visual style of the mobject's border while the latter changes the style of the
interior.  By default, most mobjects have a fully transparent interior so you
must specify the ``opacity`` parameter to display the color.  An
opacity of ``1.0`` means fully opaque, while ``0.0`` means fully transparent.

Only instances of :class:`.VMobject` implement :meth:`.set_stroke` and
:meth:`.set_fill`.  Instances of :class:`.Mobject` implement
:meth:`.~Mobject.set_color` instead.  The vast majority of pre-defined classes
are derived from :class:`.VMobject` so it is usually safe to assume that you
have access to :meth:`.set_stroke` and :meth:`.set_fill`.


Mobject on-screen order
=======================

The next scene is exactly the same as the ``MobjectStyling`` scene from the
previous section, except for exactly one line.

.. manim:: MobjectZOrder

    class MobjectZOrder(Scene): 
        def construct(self): 
            circle = Circle().shift(LEFT)
            square = Square().shift(UP)
            triangle = Triangle().shift(RIGHT)

            circle.set_stroke(color=GREEN, width=20)
            square.set_fill(YELLOW, opacity=1.0)
            triangle.set_fill(PINK, opacity=0.5)

            self.add(triangle, square, circle)
            self.wait(1)

The only difference here (besides the scene name) is the order in which the
mobjects are added to the scene.  In ``MobjectStyling``, we added them as
``add(circle, square, triangle)``, whereas in ``MobjectZOrder`` we add them as
``add(triangle, square, circle)``.

As you can see, the order of the arguments of :meth:`~.Scene.add` determines
the order that the mobjects are displayed on the screen, with the left-most
arguments being put in the back.


**********
Animations
**********

At the heart of manim is animation.  Generally, you can add an animation to
your scene by calling the :meth:`~.Scene.play` method.

.. manim:: SomeAnimations

    class SomeAnimations(Scene): 
        def construct(self): 
            square = Square()

            # some animations display mobjects, ...
            self.play(FadeIn(square))

            # ... some move or rotate mobjects around...
            self.play(Rotate(square, PI/4))

            # some animations remove mobjects from the screen
            self.play(FadeOut(square))

            self.wait(1)

Put simply, animations are procedures that interpolate between two mobjects.
For example, :code:`FadeIn(square)` starts with a fully transparent version of
:code:`square` and ends with a fully opaque version, interpolating between them
by gradually increasing the opacity.  :class:`.FadeOut` works in the opposite
way: it interpolates from fully opaque to fully transparent.  As another
example, :class:`.Rotate` starts with the mobject passed to it as argument, and
ends with the same object but rotated by a certain amount, this time
interpolating the mobject's angle instead of its opacity.


Animating methods
=================

Any property of a mobject that can be changed can be animated.  In fact, any
method that changes a mobject's property can be used as an animation, through
the use of :meth:`.animate`.

.. manim:: AnimateExample
    :ref_classes: Animation

    class AnimateExample(Scene): 
        def construct(self): 
            square = Square().set_fill(RED, opacity=1.0)
            self.add(square)

            # animate the change of color
            self.play(square.animate.set_fill(WHITE))
            self.wait(1)

            # animate the change of position and the rotation at the same time
            self.play(square.animate.shift(UP).rotate(PI / 3))
            self.wait(1)

:meth:`.animate` is a property of all mobjects that animates the methods that come
afterward. For example, :code:`square.set_fill(WHITE)` sets the fill color of
the square, while :code:`square.animate.set_fill(WHITE)` animates this action.

Animation run time
==================

By default, any animation passed to :meth:`play` lasts for exactly one second.
Use the :code:`run_time` argument to control the duration.

.. manim:: RunTime

    class RunTime(Scene): 
        def construct(self): 
            square = Square()
            self.add(square)
            self.play(square.animate.shift(UP), run_time=3)
            self.wait(1)

Creating a custom animation
===========================

Even though Manim has many built-in animations, you will find times when you need to smoothly animate from one state of a :class:`~.Mobject` to another.
If you find yourself in that situation, then you can define your own custom animation.
You start by extending the :class:`~.Animation` class and overriding its :meth:`~.Animation.interpolate_mobject`.
The :meth:`~.Animation.interpolate_mobject` method receives alpha as a parameter that starts at 0 and changes throughout the animation.
So, you just have to manipulate self.mobject inside Animation according to the alpha value in its interpolate_mobject method.
Then you get all the benefits of :class:`~.Animation` such as playing it for different run times or using different rate functions.

Let's say you start with a number and want to create a :class:`~.Transform` animation that transforms it to a target number.
You can do it using :class:`~.FadeTransform`, which will fade out the starting number and fade in the target number.
But when we think about transforming a number from one to another, an intuitive way of doing it is by incrementing or decrementing it smoothly.
Manim has a feature that allows you to customize this behavior by defining your own custom animation.

You can start by creating your own ``Count`` class that extends :class:`~.Animation`.
The class can have a constructor with three arguments, a :class:`~.DecimalNumber` Mobject, start, and end.
The constructor will pass the :class:`~.DecimalNumber` Mobject to the super constructor (in this case, the :class:`~.Animation` constructor) and will set start and end.

The only thing that you need to do is to define how you want it to look at every step of the animation.
Manim provides you with the alpha value in the :meth:`~.Animation.interpolate_mobject` method based on frame rate of video, rate function, and run time of animation played.
The alpha parameter holds a value between 0 and 1 representing the step of the currently playing animation.
For example, 0 means the beginning of the animation, 0.5 means halfway through the animation, and 1 means the end of the animation.

In the case of the ``Count`` animation, you just have to figure out a way to determine the number to display at the given alpha value and then set that value in the :meth:`~.Animation.interpolate_mobject` method of the ``Count`` animation.
Suppose you are starting at 50 and incrementing until the :class:`~.DecimalNumber` reaches 100 at the end of the animation.

* If alpha is 0, you want the value to be 50.
* If alpha is 0.5, you want the value to be 75.
* If alpha is 1, you want the value to be 100.

Generally, you start with the starting number and add only some part of the value to be increment according to the alpha value.
So, the logic of calculating the number to display at each step will be ``50 + alpha * (100 - 50)``.
Once you set the calculated value for the :class:`~.DecimalNumber`, you are done.

Once you have defined your ``Count`` animation, you can play it in your :class:`~.Scene` for any duration you want for any :class:`~.DecimalNumber` with any rate function.

.. manim:: CountingScene
    :ref_classes: Animation DecimalNumber
    :ref_methods: Animation.interpolate_mobject Scene.play

    class Count(Animation): 
        def __init__(self, number: DecimalNumber, start: float, end: float, **kwargs) -> None: 
            # Pass number as the mobject of the animation
            super().__init__(number,  **kwargs)
            # Set start and end
            self.start = start
            self.end = end

        def interpolate_mobject(self, alpha: float) -> None: 
            # Set value of DecimalNumber according to alpha
            value = self.start + (alpha * (self.end - self.start))
            self.mobject.set_value(value)


    class CountingScene(Scene): 
        def construct(self): 
            # Create Decimal Number and add it to scene
            number = DecimalNumber().set_color(WHITE).scale(5)
            # Add an updater to keep the DecimalNumber centered as its value changes
            number.add_updater(lambda number: number.move_to(ORIGIN))

            self.add(number)

            self.wait()

            # Play the Count Animation to count from 0 to 100 in 4 seconds
            self.play(Count(number, 0, 100), run_time=4, rate_func=linear)

            self.wait()

Using coordinates of a mobject
==============================

Mobjects contain points that define their boundaries.
These points can be used to add other mobjects respectively to each other,
e.g. by methods like :meth:`~.Mobject.get_center` , :meth:`~.Mobject.get_top`
and :meth:`~.Mobject.get_start`. Here is an example of some important coordinates: 

.. manim:: MobjectExample
    :save_last_frame: 

    class MobjectExample(Scene): 
        def construct(self): 
            p1 = [-1,-1, 0]
            p2 = [ 1,-1, 0]
            p3 = [ 1, 1, 0]
            p4 = [-1, 1, 0]
            a  = Line(p1,p2).append_points(Line(p2,p3).points).append_points(Line(p3,p4).points)
            point_start  = a.get_start()
            point_end    = a.get_end()
            point_center = a.get_center()
            self.add(Text(f"a.get_start() = {np.round(point_start,2).tolist()}", font_size=24).to_edge(UR).set_color(YELLOW))
            self.add(Text(f"a.get_end() = {np.round(point_end,2).tolist()}", font_size=24).next_to(self.mobjects[-1],DOWN).set_color(RED))
            self.add(Text(f"a.get_center() = {np.round(point_center,2).tolist()}", font_size=24).next_to(self.mobjects[-1],DOWN).set_color(BLUE))

            self.add(Dot(a.get_start()).set_color(YELLOW).scale(2))
            self.add(Dot(a.get_end()).set_color(RED).scale(2))
            self.add(Dot(a.get_top()).set_color(GREEN_A).scale(2))
            self.add(Dot(a.get_bottom()).set_color(GREEN_D).scale(2))
            self.add(Dot(a.get_center()).set_color(BLUE).scale(2))
            self.add(Dot(a.point_from_proportion(0.5)).set_color(ORANGE).scale(2))
            self.add(*[Dot(x) for x in a.points])
            self.add(a)

Transforming mobjects into other mobjects
=========================================
It is also possible to transform a mobject into another mobject like this: 

.. manim:: ExampleTransform

    class ExampleTransform(Scene): 
        def construct(self): 
            self.camera.background_color = WHITE
            m1 = Square().set_color(RED)
            m2 = Rectangle().set_color(RED).rotate(0.2)
            self.play(Transform(m1,m2))

The Transform function maps points of the previous mobject to the points of the
next mobject.
This might result in strange behaviour, e.g. when the dots of one mobject are
arranged clockwise and the other points are arranged counterclockwise.
Here it might help to use the `flip` function and reposition the points via the
`roll <https://numpy.org/doc/stable/reference/generated/numpy.roll.html>`_
function of numpy: 

.. manim:: ExampleRotation

    class ExampleRotation(Scene): 
        def construct(self): 
            self.camera.background_color = WHITE
            m1a = Square().set_color(RED).shift(LEFT)
            m1b = Circle().set_color(RED).shift(LEFT)
            m2a = Square().set_color(BLUE).shift(RIGHT)
            m2b = Circle().set_color(BLUE).shift(RIGHT)

            points = m2a.points
            points = np.roll(points, int(len(points)/4), axis=0)
            m2a.points = points

            self.play(Transform(m1a,m1b),Transform(m2a,m2b), run_time=1)

******
Scenes
******

The :class:`.Scene` class is the connective tissue of manim.  Every mobject has
to be :meth:`added <.Scene.add>` to a scene to be displayed, or :meth:`removed
<.Scene.remove>` from it to cease being displayed.  Every animation has to be
:meth:`played <.Scene.play>` by a scene, and every time interval where no
animation occurs is determined by a call to :meth:`~.Scene.wait`.  All of the
code of your video must be contained in the :meth:`~.Scene.construct` method of
a class that derives from :class:`.Scene`.  Finally, a single file may contain
multiple :class:`.Scene` subclasses if multiple scenes are to be
rendered at the same time.


===================================================
/. 🚀 docs/source/guides/index.rst
===================================================

Thematic Guides
===============

.. toctree::
   :caption: Table of Contents
   :maxdepth: 2
   :glob: 

   configuration
   deep_dive
   using_text
   add_voiceovers


===================================================
/. 🚀 docs/source/guides/configuration.rst
===================================================

Configuration
#############

Manim provides an extensive configuration system that allows it to adapt to
many different use cases.  There are many configuration options that can be
configured at different times during the scene rendering process.  Each option
can be configured programmatically via `the ManimConfig class`_, at the time
of command invocation via `command-line arguments`_, or at the time the library
is first imported via `the config files`_.

The most common, simplest, and recommended way to configure Manim is
via the command-line interface (CLI), which is described directly below.

Command-line arguments
**********************

By far the most commonly used command in the CLI is the ``render`` command,
which is used to render scene(s) to an output file.
It is used with the following arguments: 

.. program-output:: manim render --help
   :ellipsis: 9

However, since Manim defaults to the :code:`render` command whenever no command
is specified, the following form is far more common and can be used instead: 

.. code-block:: bash

   manim [OPTIONS] FILE [SCENES]

An example of using the above form is: 

.. code-block:: bash

   manim -qm file.py SceneOne

This asks Manim to search for a Scene class called :code:`SceneOne` inside the
file ``file.py`` and render it with medium quality (specified by the ``-qm`` flag).

Another frequently used flag is ``-p`` ("preview"), which makes manim
open the rendered video after it's done rendering.

.. note:: The ``-p`` flag does not change any properties of the global
          ``config`` dict.  The ``-p`` flag is only a command-line convenience.

Advanced examples
=================

To render a scene in high quality, but only output the last frame of the scene
instead of the whole video, you can execute

.. code-block:: bash

   manim -sqh <file.py> SceneName

The following example specifies the output file name (with the :code:`-o`
flag), renders only the first ten animations (:code:`-n` flag) with a white
background (:code:`-c` flag), and saves the animation as a ``.gif`` instead of as a
``.mp4`` file (``--format=gif`` flag).  It uses the default quality and does not try to
open the file after it is rendered.

.. code-block:: bash

   manim -o myscene --format=gif -n 0,10 -c WHITE <file.py> SceneName

A list of all CLI flags
========================

.. command-output:: manim --help
.. command-output:: manim render --help
.. command-output:: manim cfg --help
.. command-output:: manim plugins --help

The ManimConfig class
*********************

The most direct way of configuring Manim is through the global ``config`` object,
which is an instance of :class:`.ManimConfig`.  Each property of this class is
a config option that can be accessed either with standard attribute syntax or
with dict-like syntax: 

.. code-block:: pycon

   >>> from manim import *
   >>> config.background_color = WHITE
   >>> config["background_color"] = WHITE

.. note:: The former is preferred; the latter is provided for backwards
          compatibility.

Most classes, including :class:`.Camera`, :class:`.Mobject`, and
:class:`.Animation`, read some of their default configuration from the global
``config``.

.. code-block:: pycon

   >>> Camera({}).background_color
   <Color white>
   >>> config.background_color = RED  # 0xfc6255
   >>> Camera({}).background_color
   <Color #fc6255>

:class:`.ManimConfig` is designed to keep internal consistency.  For example,
setting ``frame_y_radius`` will affect ``frame_height``: 

.. code-block:: pycon

    >>> config.frame_height
    8.0
    >>> config.frame_y_radius = 5.0
    >>> config.frame_height
    10.0

The global ``config`` object is meant to be the single source of truth for all
config options.  All of the other ways of setting config options ultimately
change the values of the global ``config`` object.

The following example illustrates the video resolution chosen for examples
rendered in our documentation with a reference frame.

.. manim:: ShowScreenResolution
    :save_last_frame: 

    class ShowScreenResolution(Scene): 
        def construct(self): 
            pixel_height = config["pixel_height"]  #  1080 is default
            pixel_width = config["pixel_width"]  # 1920 is default
            frame_width = config["frame_width"]
            frame_height = config["frame_height"]
            self.add(Dot())
            d1 = Line(frame_width * LEFT / 2, frame_width * RIGHT / 2).to_edge(DOWN)
            self.add(d1)
            self.add(Text(str(pixel_width)).next_to(d1, UP))
            d2 = Line(frame_height * UP / 2, frame_height * DOWN / 2).to_edge(LEFT)
            self.add(d2)
            self.add(Text(str(pixel_height)).next_to(d2, RIGHT))


The config files
****************

As the last example shows, executing Manim from the command line may involve
using many flags simultaneously.  This may become a nuisance if you must
execute the same script many times in a short time period, for example, when
making small incremental tweaks to your scene script.  For this reason, Manim
can also be configured using a configuration file.  A configuration file is a
file ending with the suffix ``.cfg``.

To use a local configuration file when rendering your scene, you must create a
file with the name ``manim.cfg`` in the same directory as your scene code.

.. warning:: The config file **must** be named ``manim.cfg``. Currently, Manim
             does not support config files with any other name.

The config file must start with the section header ``[CLI]``.  The
configuration options under this header have the same name as the CLI flags
and serve the same purpose.  Take, for example, the following config file.

.. code-block:: ini

   [CLI]
   # my config file
   output_file = myscene
   save_as_gif = True
   background_color = WHITE

Config files are parsed with the standard python library ``configparser``. In
particular, they will ignore any line that starts with a pound symbol ``#``.

Now, executing the following command

.. code-block:: bash

   manim -o myscene -i -c WHITE <file.py> SceneName

is equivalent to executing the following command, provided that ``manim.cfg`` 
is in the same directory as <file.py>,

.. code-block:: bash

   manim <file.py> SceneName

.. tip:: The names of the configuration options admissible in config files are
         exactly the same as the **long names** of the corresponding command-
         line flags.  For example, the ``-c`` and ``--background_color`` flags
         are interchangeable, but the config file only accepts
         :code:`background_color` as an admissible option.

Since config files are meant to replace CLI flags, all CLI flags can be set via
a config file.  Moreover, any config option can be set via a config file,
whether or not it has an associated CLI flag.  See the bottom of this document
for a list of all CLI flags and config options.

Manim will look for a ``manim.cfg`` config file in the same directory as the
file being rendered, and **not** in the directory of execution.  For example,

.. code-block:: bash

   manim -o myscene -i -c WHITE <path/to/file.py> SceneName

will use the config file found in ``path/to/file.py``, if any.  It will **not**
use the config file found in the current working directory, even if it exists.
In this way, the user may keep different config files for different scenes or
projects, and execute them with the right configuration from anywhere in the
system.

The file described here is called the **folder-wide** config file because it
affects all scene scripts found in the same folder.


The user config file
====================

As explained in the previous section, a :code:`manim.cfg` config file only
affects the scene scripts in its same folder.  However, the user may also
create a special config file that will apply to all scenes rendered by that
user. This is referred to as the **user-wide** config file, and it will apply
regardless of where Manim is executed from, and regardless of where the scene
script is stored.

The user-wide config file lives in a special folder, depending on the operating
system.

* Windows: :code:`UserDirectory`/AppData/Roaming/Manim/manim.cfg
* MacOS: :code:`UserDirectory`/.config/manim/manim.cfg
* Linux: :code:`UserDirectory`/.config/manim/manim.cfg

Here, :code:`UserDirectory` is the user's home folder.


.. note:: A user may have many **folder-wide** config files, one per folder,
          but only one **user-wide** config file.  Different users in the same
          computer may each have their own user-wide config file.

.. warning:: Do not store scene scripts in the same folder as the user-wide
             config file.  In this case, the behavior is undefined.

Whenever you use Manim from anywhere in the system, Manim will look for a
user-wide config file and read its configuration.


Cascading config files
======================

What happens if you execute Manim and it finds both a folder-wide config file
and a user-wide config file?  Manim will read both files, but if they are
incompatible, **the folder-wide file takes precedence**.

For example, take the following user-wide config file

.. code-block:: ini

   # user-wide
   [CLI]
   output_file = myscene
   save_as_gif = True
   background_color = WHITE

and the following folder-wide file

.. code-block:: ini

   # folder-wide
   [CLI]
   save_as_gif = False

Then, executing :code:`manim <file.py> SceneName` will be equivalent to not
using any config files and executing

.. code-block:: bash

   manim -o myscene -c WHITE <file.py> SceneName

Any command-line flags have precedence over any config file.  For example,
using the previous two config files and executing :code:`manim -c RED
<file.py> SceneName` is equivalent to not using any config files and
executing

.. code-block:: bash

   manim -o myscene -c RED <file.py> SceneName

There is also a **library-wide** config file that determines Manim's default
behavior and applies to every user of the library.  It has the least
precedence, so any config options in the user-wide and any folder-wide files
will override the library-wide file.  This is referred to as the *cascading*
config file system.

.. warning:: **The user should not try to modify the library-wide file**.
	     Contributors should receive explicit confirmation from the core
	     developer team before modifying it.


Order of operations
*******************

.. raw:: html

    <div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;url&quot;:&quot;https://drive.google.com/uc?id=1WYVKKoRbXrumHEcyQKQ9s1yCnBvfU2Ui&amp;export=download&quot;}"></div>
    <script type="text/javascript" src="https://viewer.diagrams.net/embed2.js?&fetch=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1WYVKKoRbXrumHEcyQKQ9s1yCnBvfU2Ui%26export%3Ddownload"></script>



With so many different ways of configuring Manim, it can be difficult to know
when each config option is being set.  In fact, this will depend on how Manim
is being used.

If Manim is imported from a module, then the configuration system will follow
these steps: 

1. The library-wide config file is loaded.
2. The user-wide and folder-wide files are loaded if they exist.
3. All files found in the previous two steps are parsed in a single
   :class:`ConfigParser` object, called ``parser``.  This is where *cascading*
   happens.
4. :class:`logging.Logger` is instantiated to create Manim's global ``logger`` 
   object. It is configured using the "logger" section of the parser,
   i.e. ``parser['logger']``.
5. :class:`ManimConfig` is instantiated to create the global ``config`` object.
6. The ``parser`` from step 3 is fed into the ``config`` from step 5 via
   :meth:`ManimConfig.digest_parser`.
7. Both ``logger`` and ``config`` are exposed to the user.

If Manim is being invoked from the command line, all of the previous steps
happen, and are complemented by: 

8. The CLI flags are parsed and fed into ``config`` via
   :meth:`~ManimConfig.digest_args`.
9. If the ``--config_file`` flag was used, a new :class:`ConfigParser` object
   is created with the contents of the library-wide file, the user-wide file if
   it exists, and the file passed via ``--config_file``.  In this case, the
   folder-wide file, if it exists, is ignored.
10. The new parser is fed into ``config``.
11. The rest of the CLI flags are processed.

To summarize, the order of precedence for configuration options, from lowest to
highest precedence is: 

1. Library-wide config file,
2. user-wide config file, if it exists,
3. folder-wide config file, if it exists OR custom config file, if passed via
   ``--config_file``,
4. other CLI flags, and
5. any programmatic changes made after the config system is set.


A list of all config options
****************************

.. code::

   ['aspect_ratio', 'assets_dir', 'background_color', 'background_opacity',
   'bottom', 'custom_folders', 'disable_caching', 'dry_run',
   'ffmpeg_loglevel', 'flush_cache', 'frame_height', 'frame_rate',
   'frame_size', 'frame_width', 'frame_x_radius', 'frame_y_radius',
   'from_animation_number', `fullscreen`, 'images_dir', 'input_file', 'left_side',
   'log_dir', 'log_to_file', 'max_files_cached', 'media_dir', 'media_width',
   'movie_file_extension', 'notify_outdated_version', 'output_file', 'partial_movie_dir',
   'pixel_height', 'pixel_width', 'plugins', 'preview',
   'progress_bar', 'quality', 'right_side', 'save_as_gif', 'save_last_frame',
   'save_pngs', 'scene_names', 'show_in_file_browser', 'sound', 'tex_dir',
   'tex_template', 'tex_template_file', 'text_dir', 'top', 'transparent',
   'upto_animation_number', 'use_opengl_renderer', 'verbosity', 'video_dir',
   'window_position', 'window_monitor', 'window_size', 'write_all', 'write_to_movie',
   'enable_wireframe', 'force_window']


Accessing CLI command options
*****************************

Entering ``manim``, or ``manim --help``, will open the main help page.

.. code::

   Usage: manim [OPTIONS] COMMAND [ARGS]...

     Animation engine for explanatory math videos.

   Options: 
     --version  Show version and exit.
     --help     Show this message and exit.

   Commands: 
     cfg      Manages Manim configuration files.
     init     Sets up a new project in current working directory with default
              settings.

              It copies files from templates directory and pastes them in the
              current working dir.
     new      Create a new project or insert a new scene.
     plugins  Manages Manim plugins.
     render   Render SCENE(S) from the input FILE.

   See 'manim <command>' to read about a specific subcommand.

   Made with <3 by Manim Community developers.

Each of the subcommands has its own help page which can be accessed similarly: 

.. code::

   manim render
   manim render --help


===================================================
/. 🚀 docs/source/guides/deep_dive.rst
===================================================

A deep dive into Manim's internals
==================================

**Author:** `Benjamin Hackl <https://benjamin-hackl.at>`__

.. admonition:: Disclaimer

    This guide reflects the state of the library as of version ``v0.16.0`` 
    and primarily treats the Cairo renderer. The situation in the latest
    version of Manim might be different; in case of substantial deviations
    we will add a note below.

Introduction
------------

Manim can be a wonderful library, if it behaves the way you would like it to,
and/or the way you expect it to. Unfortunately, this is not always the case
(as you probably know if you have played with some manimations yourself already).
To understand where things *go wrong*, digging through the library's source code
is sometimes the only option -- but in order to do that, you need to know where
to start digging.

This article is intended as some sort of life line through the render process.
We aim to give an appropriate amount of detail describing what happens when
Manim reads your scene code and produces the corresponding animation. Throughout
this article, we will focus on the following toy example::

    from manim import *

    class ToyExample(Scene): 
        def construct(self): 
            orange_square = Square(color=ORANGE, fill_opacity=0.5)
            blue_circle = Circle(color=BLUE, fill_opacity=0.5)
            self.add(orange_square)
            self.play(ReplacementTransform(orange_square, blue_circle, run_time=3))
            small_dot = Dot()
            small_dot.add_updater(lambda mob: mob.next_to(blue_circle, DOWN))
            self.play(Create(small_dot))
            self.play(blue_circle.animate.shift(RIGHT))
            self.wait()
            self.play(FadeOut(blue_circle, small_dot))

Before we go into details or even look at the rendered output of this scene,
let us first describe verbally what happens in this *manimation*. In the first
three lines of the ``construct`` method, a :class:`.Square` and a :class:`.Circle`
are initialized, then the square is added to the scene. The first frame of the
rendered output should thus show an orange square.

Then the actual animations happen: the square first transforms into a circle,
then a :class:`.Dot` is created (Where do you guess the dot is located when
it is first added to the scene? Answering this already requires detailed
knowledge about the render process.). The dot has an updater attached to it, and
as the circle moves right, the dot moves with it. In the end, all mobjects are
faded out.

Actually rendering the code yields the following video: 

.. manim:: ToyExample
    :hide_source: 

    class ToyExample(Scene): 
        def construct(self): 
            orange_square = Square(color=ORANGE, fill_opacity=0.5)
            blue_circle = Circle(color=BLUE, fill_opacity=0.5)
            self.add(orange_square)
            self.play(ReplacementTransform(orange_square, blue_circle, run_time=3))
            small_dot = Dot()
            small_dot.add_updater(lambda mob: mob.next_to(blue_circle, DOWN))
            self.play(Create(small_dot))
            self.play(blue_circle.animate.shift(RIGHT))
            self.wait()
            self.play(FadeOut(blue_circle, small_dot))


For this example, the output (fortunately) coincides with our expectations.

Overview
--------

Because there is a lot of information in this article, here is a brief overview
discussing the contents of the following chapters on a very high level.

- `Preliminaries`_: In this chapter we unravel all the steps that take place
  to prepare a scene for rendering; right until the point where the user-overridden
  ``construct`` method is ran. This includes a brief discussion on using Manim's CLI
  versus other means of rendering (e.g., via Jupyter notebooks, or in your Python
  script by calling the :meth:`.Scene.render` method yourself).
- `Mobject Initialization`_: For the second chapter we dive into creating and handling
  Mobjects, the basic elements that should be displayed in our scene.
  We discuss the :class:`.Mobject` base class, how there are essentially
  three different types of Mobjects, and then discuss the most important of them,
  vectorized Mobjects. In particular, we describe the internal point data structure
  that governs how the mechanism responsible for drawing the vectorized Mobject
  to the screen sets the corresponding Bézier curves. We conclude the chapter
  with a tour into :meth:`.Scene.add`, the bookkeeping mechanism controlling which
  mobjects should be rendered.
- `Animations and the Render Loop`_: And finally, in the last chapter we walk
  through the instantiation of :class:`.Animation` objects (the blueprints that
  hold information on how Mobjects should be modified when the render loop runs),
  followed by a investigation of the infamous :meth:`.Scene.play` call. We will
  see that there are three relevant parts in a :meth:`.Scene.play` call;
  a part in which the passed animations and keyword arguments are processed
  and prepared, followed by the actual "render loop" in which the library
  steps through a time line and renders frame by frame. The final part
  does some post-processing to save a short video segment ("partial movie file")
  and cleanup for the next call to :meth:`.Scene.play`. In the end, after all of
  :meth:`.Scene.construct` has been run, the library combines the partial movie
  files to one video.

And with that, let us get *in medias res*.

Preliminaries
-------------

Importing the library
^^^^^^^^^^^^^^^^^^^^^

Independent of how exactly you are telling your system 
to render the scene, i.e., whether you run ``manim -qm -p file_name.py ToyExample``, or
whether you are rendering the scene directly from the Python script via a snippet
like

::

    with tempconfig({"quality": "medium_quality", "preview": True}): 
        scene = ToyExample()
        scene.render()

or whether you are rendering the code in a Jupyter notebook, you are still telling your
python interpreter to import the library. The usual pattern used to do this is

::

    from manim import *

which (while being a debatable strategy in general) imports a lot of classes and
functions shipped with the library and makes them available in your global name space.
I explicitly avoided stating that it imports **all** classes and functions of the
library, because it does not do that: Manim makes use of the practice described
in `Section 6.4.1 of the Python tutorial <https://docs.python.org/3/tutorial/modules.html#importing-from-a-package>`__,
and all module members that should be exposed to the user upon running the ``*``-import
are explicitly declared in the ``__all__`` variable of the module.

Manim also uses this strategy internally: taking a peek at the file that is run when
the import is called, ``__init__.py`` (see
`here <https://github.com/ManimCommunity/manim/blob/main/manim/__init__.py>`__),
you will notice that most of the code in that module is concerned with importing
members from various different submodules, again using ``*``-imports.

.. hint::

    If you would ever contribute a new submodule to Manim, the main
    ``__init__.py`` is where it would have to be listed in order to make its
    members accessible to users after importing the library.

In that file, there is one particular import at the beginning of the file however,
namely::

    from ._config import *

This initializes Manim's global configuration system, which is used in various places
throughout the library. After the library runs this line, the current configuration
options are set. The code in there takes care of reading the options in your ``.cfg`` 
files (all users have at least the global one that is shipped with the library)
as well as correctly handling command line arguments (if you used the CLI to render).

You can read more about the config system in the 
:doc:`corresponding thematic guide </guides/configuration>`, and if you are interested in learning
more about the internals of the configuration system and how it is initialized,
follow the code flow starting in `the config module's init file
<https://github.com/ManimCommunity/manim/blob/main/manim/_config/__init__.py>`__.

Now that the library is imported, we can turn our attention to the next step: 
reading your scene code (which is not particularly exciting, Python just creates
a new class ``ToyExample`` based on our code; Manim is virtually not involved
in that step, with the exception that ``ToyExample`` inherits from ``Scene``).

However, with the ``ToyExample`` class created and ready to go, there is a new
excellent question to answer: how is the code in our ``construct`` method
actually executed?

Scene instantiation and rendering
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The answer to this question depends on how exactly you are running the code.
To make things a bit clearer, let us first consider the case that you
have created a file ``toy_example.py`` which looks like this::

    from manim import *

    class ToyExample(Scene): 
        def construct(self): 
            orange_square = Square(color=ORANGE, fill_opacity=0.5)
            blue_circle = Circle(color=BLUE, fill_opacity=0.5)
            self.add(orange_square)
            self.play(ReplacementTransform(orange_square, blue_circle, run_time=3))
            small_dot = Dot()
            small_dot.add_updater(lambda mob: mob.next_to(blue_circle, DOWN))
            self.play(Create(small_dot))
            self.play(blue_circle.animate.shift(RIGHT))
            self.wait()
            self.play(FadeOut(blue_circle, small_dot))

    with tempconfig({"quality": "medium_quality", "preview": True}): 
        scene = ToyExample()
        scene.render()

With such a file, the desired scene is rendered by simply running this Python
script via ``python toy_example.py``. Then, as described above, the library
is imported and Python has read and defined the ``ToyExample`` class (but,
read carefully: *no instance of this class has been created yet*).

At this point, the interpreter is about to enter the ``tempconfig`` context
manager. Even if you have not seen Manim's ``tempconfig`` before, its name
already suggests what it does: it creates a copy of the current state of the
configuration, applies the changes to the key-value pairs in the passed
dictionary, and upon leaving the context the original version of the
configuration is restored. TL;DR: it provides a fancy way of temporarily setting
configuration options.

Inside the context manager, two things happen: an actual ``ToyExample``-scene
object is instantiated, and the ``render`` method is called. Every way of using
Manim ultimately does something along of these lines, the library always instantiates
the scene object and then calls its ``render`` method. To illustrate that this
really is the case, let us briefly look at the two most common ways of rendering
scenes: 

**Command Line Interface.** When using the CLI and running the command
``manim -qm -p toy_example.py ToyExample`` in your terminal, the actual
entry point is Manim's ``__main__.py`` file (located
`here <https://github.com/ManimCommunity/manim/blob/main/manim/__main__.py>`__.
Manim uses `Click <https://click.palletsprojects.com/en/8.0.x/>`__ to implement
the command line interface, and the corresponding code is located in Manim's
``cli`` module (https://github.com/ManimCommunity/manim/tree/main/manim/cli).
The corresponding code creating the scene class and calling its render method
is located `here <https://github.com/ManimCommunity/manim/blob/ac1ee9a683ce8b92233407351c681f7d71a4f2db/manim/cli/render/commands.py#L139-L141>`__.

**Jupyter notebooks.** In Jupyter notebooks, the communication with the library
is handled by the ``%%manim`` magic command, which is implemented in the
``manim.utils.ipython_magic`` module. There is
:meth:`some documentation <.ManimMagic.manim>` available for the magic command,
and the code creating the scene class and calling its render method is located
`here <https://github.com/ManimCommunity/manim/blob/ac1ee9a683ce8b92233407351c681f7d71a4f2db/manim/utils/ipython_magic.py#L137-L138>`__.


Now that we know that either way, a :class:`.Scene` object is created, let us investigate
what Manim does when that happens. When instantiating our scene object

::

    scene = ToyExample()

the ``Scene.__init__`` method is called, given that we did not implement our own initialization
method. Inspecting the corresponding code (see
`here <https://github.com/ManimCommunity/manim/blob/main/manim/scene/scene.py>`__)
reveals that ``Scene.__init__`` first sets several attributes of the scene objects that do not
depend on any configuration options set in ``config``. Then the scene inspects the value of
``config.renderer``, and based on its value, either instantiates a ``CairoRenderer`` or an
``OpenGLRenderer`` object and assigns it to its ``renderer`` attribute.

The scene then asks its renderer to initialize the scene by calling

::

    self.renderer.init_scene(self)

Inspecting both the default Cairo renderer and the OpenGL renderer shows that the ``init_scene`` 
method effectively makes the renderer instantiate a :class:`.SceneFileWriter` object, which
basically is Manim's interface to ``ffmpeg`` and actually writes the movie file. The Cairo
renderer (see the implementation `here <https://github.com/ManimCommunity/manim/blob/main/manim/renderer/cairo_renderer.py>`__) does not require any further initialization. The OpenGL renderer
does some additional setup to enable the realtime rendering preview window, which we do not go
into detail further here.

.. warning::

    Currently, there is a lot of interplay between a scene and its renderer. This is a flaw
    in Manim's current architecture, and we are working on reducing this interdependency to
    achieve a less convoluted code flow.

After the renderer has been instantiated and initialized its file writer, the scene populates
further initial attributes (notable mention: the ``mobjects`` attribute which keeps track
of the mobjects that have been added to the scene). It is then done with its instantiation
and ready to be rendered.

The rest of this article is concerned with the last line in our toy example script::

    scene.render()

This is where the actual magic happens.

Inspecting the `implementation of the render method <https://github.com/ManimCommunity/manim/blob/df1a60421ea1119cbbbd143ef288d294851baaac/manim/scene/scene.py#L211>`__
reveals that there are several hooks that can be used for pre- or postprocessing
a scene. Unsurprisingly, :meth:`.Scene.render` describes the full *render cycle*
of a scene. During this life cycle, there are three custom methods whose base
implementation is empty and that can be overwritten to suit your purposes. In
the order they are called, these customizable methods are: 

- :meth:`.Scene.setup`, which is intended for preparing and, well, *setting up*
  the scene for your animation (e.g., adding initial mobjects, assigning custom
  attributes to your scene class, etc.),
- :meth:`.Scene.construct`, which is the *script* for your screen play and
  contains programmatic descriptions of your animations, and
- :meth:`.Scene.tear_down`, which is intended for any operations you might
  want to run on the scene after the last frame has already been rendered
  (for example, this could run some code that generates a custom thumbnail
  for the video based on the state of the objects in the scene -- this
  hook is more relevant for situations where Manim is used within other
  Python scripts).

After these three methods are run, the animations have been fully rendered,
and Manim calls :meth:`.CairoRenderer.scene_finished` to gracefully
complete the rendering process. This checks whether any animations have been
played -- and if so, it tells the :class:`.SceneFileWriter` to close the pipe
to ``ffmpeg``. If not, Manim assumes that a static image should be output
which it then renders using the same strategy by calling the render loop
(see below) once.

**Back in our toy example,** the call to :meth:`.Scene.render` first
triggers :meth:`.Scene.setup` (which only consists of ``pass``), followed by
a call of :meth:`.Scene.construct`. At this point, our *animation script*
is run, starting with the initialization of ``orange_square``.


Mobject Initialization
----------------------

Mobjects are, in a nutshell, the Python objects that represent all the
*things* we want to display in our scene. Before we follow our debugger
into the depths of mobject initialization code, it makes sense to
discuss Manim's different types of Mobjects and their basic data
structure.

What even is a Mobject?
^^^^^^^^^^^^^^^^^^^^^^^

:class:`.Mobject` stands for *mathematical object* or *Manim object*
(depends on who you ask 😄). The Python class :class:`.Mobject` is
the base class for all objects that should be displayed on screen.
Looking at the `initialization method
<https://github.com/ManimCommunity/manim/blob/5d72d9cfa2e3dd21c844b1da807576f5a7194fda/manim/mobject/mobject.py#L94>`__
of :class:`.Mobject`, you will find that not too much happens in there: 

- some initial attribute values are assigned, like ``name`` (which makes the
  render logs mention the name of the mobject instead of its type),
  ``submobjects`` (initially an empty list), ``color``, and some others.
- Then, two methods related to *points* are called: ``reset_points`` 
  followed by ``generate_points``,
- and finally, ``init_colors`` is called.

Digging deeper, you will find that :meth:`.Mobject.reset_points` simply
sets the ``points`` attribute of the mobject to an empty NumPy vector,
while the other two methods, :meth:`.Mobject.generate_points` and
:meth:`.Mobject.init_colors` are just implemented as ``pass``.

This makes sense: :class:`.Mobject` is not supposed to be used as
an *actual* object that is displayed on screen; in fact the camera
(which we will discuss later in more detail; it is the class that is,
for the Cairo renderer, responsible for "taking a picture" of the
current scene) does not process "pure" :class:`Mobjects <.Mobject>`
in any way, they *cannot* even appear in the rendered output.

This is where different types of mobjects come into play. Roughly
speaking, the Cairo renderer setup knows three different types of
mobjects that can be rendered: 

- :class:`.ImageMobject`, which represent images that you can display
  in your scene,
- :class:`.PMobject`, which are very special mobjects used to represent
  point clouds; we will not discuss them further in this guide,
- :class:`.VMobject`, which are *vectorized mobjects*, that is, mobjects
  that consist of points that are connected via curves. These are pretty
  much everywhere, and we will discuss them in detail in the next section.

... and what are VMobjects?
^^^^^^^^^^^^^^^^^^^^^^^^^^^

As just mentioned, :class:`VMobjects <.VMobject>` represent vectorized
mobjects. To render a :class:`.VMobject`, the camera looks at the
``points`` attribute of a :class:`.VMobject` and divides it into sets
of four points each. Each of these sets is then used to construct a
cubic Bézier curve with the first and last entry describing the
end points of the curve ("anchors"), and the second and third entry
describing the control points in between ("handles").

.. hint::
  To learn more about Bézier curves, take a look at the excellent
  online textbook `A Primer on Bézier curves <https://pomax.github.io/bezierinfo/>`__
  by `Pomax <https://twitter.com/TheRealPomax>`__ -- there is a playground representing
  cubic Bézier curves `in §1 <https://pomax.github.io/bezierinfo/#introduction>`__,
  the red and yellow points are "anchors", and the green and blue
  points are "handles".

In contrast to :class:`.Mobject`, :class:`.VMobject` can be displayed
on screen (even though, technically, it is still considered a base class).
To illustrate how points are processed, consider the following short example
of a :class:`.VMobject` with 8 points (and thus made out of 8/4 = 2 cubic
Bézier curves). The resulting :class:`.VMobject` is drawn in green.
The handles are drawn as red dots with a line to their closest anchor.

.. manim:: VMobjectDemo
    :save_last_frame: 

    class VMobjectDemo(Scene): 
        def construct(self): 
            plane = NumberPlane()
            my_vmobject = VMobject(color=GREEN)
            my_vmobject.points = [
                np.array([-2, -1, 0]),  # start of first curve
                np.array([-3, 1, 0]),
                np.array([0, 3, 0]),
                np.array([1, 3, 0]),  # end of first curve
                np.array([1, 3, 0]),  # start of second curve
                np.array([0, 1, 0]),
                np.array([4, 3, 0]),
                np.array([4, -2, 0]),  # end of second curve
            ]
            handles = [
                Dot(point, color=RED) for point in
                [[-3, 1, 0], [0, 3, 0], [0, 1, 0], [4, 3, 0]]
            ]
            handle_lines = [
                Line(
                    my_vmobject.points[ind],
                    my_vmobject.points[ind+1],
                    color=RED,
                    stroke_width=2
                ) for ind in range(0, len(my_vmobject.points), 2)
            ]
            self.add(plane, *handles, *handle_lines, my_vmobject)


.. warning::
  Manually setting the points of your :class:`.VMobject` is usually
  discouraged; there are specialized methods that can take care of
  that for you -- but it might be relevant when implementing your own,
  custom :class:`.VMobject`.



Squares and Circles: back to our Toy Example
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

With a basic understanding of different types of mobjects,
and an idea of how vectorized mobjects are built we can now
come back to our toy example and the execution of the
:meth:`.Scene.construct` method. In the first two lines
of our animation script, the ``orange_square`` and the
``blue_circle`` are initialized.

When creating the orange square by running

::

  Square(color=ORANGE, fill_opacity=0.5)

the initialization method of :class:`.Square`, 
``Square.__init__``, is called. `Looking at the
implementation <https://github.com/ManimCommunity/manim/blob/5d72d9cfa2e3dd21c844b1da807576f5a7194fda/manim/mobject/geometry/polygram.py#L607>`__,
we can see that the ``side_length`` attribute of the square is set,
and then

::

  super().__init__(height=side_length, width=side_length, **kwargs)

is called. This ``super`` call is the Python way of calling the
initialization function of the parent class. As :class:`.Square`
inherits from :class:`.Rectangle`, the next method called
is ``Rectangle.__init__``. There, only the first three lines
are really relevant for us::

  super().__init__(UR, UL, DL, DR, color=color, \**kwargs)
  self.stretch_to_fit_width(width)
  self.stretch_to_fit_height(height)

First, the initialization function of the parent class of
:class:`.Rectangle` -- :class:`.Polygon` -- is called. The
four positional arguments passed are the four corners of
the polygon: ``UR`` is up right (and equal to ``UP + RIGHT``),
``UL`` is up left (and equal to ``UP + LEFT``), and so forth.
Before we follow our debugger deeper, let us observe what
happens with the constructed polygon: the remaining two lines
stretch the polygon to fit the specified width and height
such that a rectangle with the desired measurements is created.

The initialization function of :class:`.Polygon` is particularly
simple, it only calls the initialization function of its parent
class, :class:`.Polygram`. There, we have almost reached the end
of the chain: :class:`.Polygram` inherits from :class:`.VMobject`,
whose initialization function mainly sets the values of some
attributes (quite similar to ``Mobject.__init__``, but more specific
to the Bézier curves that make up the mobject).

After calling the initialization function of :class:`.VMobject`,
the constructor of :class:`.Polygram` also does something somewhat
odd: it sets the points (which, you might remember above, should
actually be set in a corresponding ``generate_points`` method
of :class:`.Polygram`).

.. warning::
  In several instances, the implementation of mobjects does
  not really stick to all aspects of Manim's interface. This
  is unfortunate, and increasing consistency is something
  that we actively work on. Help is welcome!

Without going too much into detail, :class:`.Polygram` sets its
``points`` attribute via :meth:`.VMobject.start_new_path`,
:meth:`.VMobject.add_points_as_corners`, which take care of
setting the quadruples of anchors and handles appropriately.
After the points are set, Python continues to process the
call stack until it reaches the method that was first called;
the initialization method of :class:`.Square`. After this,
the square is initialized and assigned to the ``orange_square`` 
variable.

The initialization of ``blue_circle`` is similar to the one of
``orange_square``, with the main difference being that the inheritance
chain of :class:`.Circle` is different. Let us briefly follow the trace
of the debugger: 

The implementation of :meth:`.Circle.__init__` immediately calls
the initialization method of :class:`.Arc`, as a circle in Manim
is simply an arc with an angle of :math:`\tau = 2\pi`. When
initializing the arc, some basic attributes are set (like
``Arc.radius``, ``Arc.arc_center``, ``Arc.start_angle``, and
``Arc.angle``), and then the initialization method of its
parent class, :class:`.TipableVMobject`, is called (which is
a rather abstract base class for mobjects which a arrow tip can
be attached to). Note that in contrast to :class:`.Polygram`,
this class does **not** preemptively generate the points of the circle.

After that, things are less exciting: :class:`.TipableVMobject` again
sets some attributes relevant for adding arrow tips, and afterwards
passes to the initialization method of :class:`.VMobject`. From there,
:class:`.Mobject` is initialized and :meth:`.Mobject.generate_points`
is called, which actually runs the method implemented in
:meth:`.Arc.generate_points`.

After both our ``orange_square`` and the ``blue_circle`` are initialized,
the square is actually added to the scene. The :meth:`.Scene.add` method
is actually doing a few interesting things, so it is worth to dig a bit
deeper in the next section.


Adding Mobjects to the Scene
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The code in our ``construct`` method that is run next is 

::

  self.add(orange_square)

From a high-level point of view, :meth:`.Scene.add` adds the
``orange_square`` to the list of mobjects that should be rendered,
which is stored in the ``mobjects`` attribute of the scene. However,
it does so in a very careful way to avoid the situation that a mobject
is being added to the scene more than once. At a first glance, this
sounds like a simple task -- the problem is that ``Scene.mobjects`` 
is not a "flat" list of mobjects, but a list of mobjects which
might contain mobjects themselves, and so on.

Stepping through the code in :meth:`.Scene.add`, we see that first
it is checked whether we are currently using the OpenGL renderer
(which we are not) -- adding mobjects to the scene works slightly
different (and actually easier!) for the OpenGL renderer. Then, the
code branch for the Cairo renderer is entered and the list of so-called
foreground mobjects (which are rendered on top of all other mobjects)
is added to the list of passed mobjects. This is to ensure that the
foreground mobjects will stay above of the other mobjects, even after
adding the new ones. In our case, the list of foreground mobjects
is actually empty, and nothing changes.

Next, :meth:`.Scene.restructure_mobjects` is called with the list
of mobjects to be added as the ``to_remove`` argument, which might
sound odd at first. Practically, this ensures that mobjects are not
added twice, as mentioned above: if they were present in the scene
``Scene.mobjects`` list before (even if they were contained as a
child of some other mobject), they are first removed from the list.
The way :meth:`.Scene.restrucutre_mobjects` works is rather aggressive: 
It always operates on a given list of mobjects; in the ``add`` method
two different lists occur: the default one, ``Scene.mobjects`` (no extra
keyword argument is passed), and ``Scene.moving_mobjects`` (which we will
discuss later in more detail). It iterates through all of the members of
the list, and checks whether any of the mobjects passed in ``to_remove`` 
are contained as children (in any nesting level). If so, **their parent
mobject is deconstructed** and their siblings are inserted directly
one level higher. Consider the following example::

  >>> from manim import Scene, Square, Circle, Group
  >>> test_scene = Scene()
  >>> mob1 = Square()
  >>> mob2 = Circle()
  >>> mob_group = Group(mob1, mob2)
  >>> test_scene.add(mob_group)
  <manim.scene.scene.Scene object at ...>
  >>> test_scene.mobjects
  [Group]
  >>> test_scene.restructure_mobjects(to_remove=[mob1])
  <manim.scene.scene.Scene object at ...>
  >>> test_scene.mobjects
  [Circle]

Note that the group is disbanded and the circle moves into the
root layer of mobjects in ``test_scene.mobjects``.

After the mobject list is "restructured", the mobject to be added
are simply appended to ``Scene.mobjects``. In our toy example,
the ``Scene.mobjects`` list is actually empty, so the
``restructure_mobjects`` method does not actually do anything. The
``orange_square`` is simply added to ``Scene.mobjects``, and as
the aforementioned ``Scene.moving_mobjects`` list is, at this point,
also still empty, nothing happens and :meth:`.Scene.add` returns.

We will hear more about the ``moving_mobject`` list when we discuss
the render loop. Before we do that, let us look at the next line
of code in our toy example, which includes the initialization of
an animation class,
::

  ReplacementTransform(orange_square, blue_circle, run_time=3)

Hence it is time to talk about :class:`.Animation`.


Animations and the Render Loop
------------------------------

Initializing animations
^^^^^^^^^^^^^^^^^^^^^^^

Before we follow the trace of the debugger, let us briefly discuss
the general structure of the (abstract) base class :class:`.Animation`.
An animation object holds all the information necessary for the renderer
to generate the corresponding frames. Animations (in the sense of
animation objects) in Manim are *always* tied to a specific mobject;
even in the case of :class:`.AnimationGroup` (which you should actually
think of as an animation on a group of mobjects rather than a group
of animations). Moreover, except for in a particular special case,
the run time of animations is also fixed and known beforehand.

The initialization of animations actually is not very exciting,
:meth:`.Animation.__init__` merely sets some attributes derived
from the passed keyword arguments and additionally ensures that
the ``Animation.starting_mobject`` and ``Animation.mobject`` 
attributes are populated. Once the animation is played, the
``starting_mobject`` attribute holds an unmodified copy of the
mobject the animation is attached to; during the initialization
it is set to a placeholder mobject. The ``mobject`` attribute
is set to the mobject the animation is attached to.

Animations have a few special methods which are called during the
render loop: 

- :meth:`.Animation.begin`, which is called (as hinted by its name)
  at the beginning of every animation, so before the first frame
  is rendered. In it, all the required setup for the animation happens.
- :meth:`.Animation.finish` is the counterpart to the ``begin`` method
  which is called at the end of the life cycle of the animation (after
  the last frame has been rendered).
- :meth:`.Animation.interpolate` is the method that updates the mobject
  attached to the animation to the corresponding animation completion
  percentage. For example, if in the render loop,
  ``some_animation.interpolate(0.5)`` is called, the attached mobject
  will be updated to the state where 50% of the animation are completed.

We will discuss details about these and some further animation methods
once we walk through the actual render loop. For now, we continue with
our toy example and the code that is run when initializing the
:class:`.ReplacementTransform` animation.

The initialization method of :class:`.ReplacementTransform` only
consists of a call to the constructor of its parent class,
:class:`.Transform`, with the additional keyword argument
``replace_mobject_with_target_in_scene`` set to ``True``.
:class:`.Transform` then sets attributes that control how the
points of the starting mobject are deformed into the points of
the target mobject, and then passes on to the initialization
method of :class:`.Animation`. Other basic properties of the
animation (like its ``run_time``, the ``rate_func``, etc.) are
processed there -- and then the animation object is fully
initialized and ready to be played.

The ``play`` call: preparing to enter Manim's render loop
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We are finally there, the render loop is in our reach. Let us
walk through the code that is run when :meth:`.Scene.play` is called.

.. hint::

  Recall that this article is specifically about the Cairo renderer.
  Up to here, things were more or less the same for the OpenGL renderer
  as well; while some base mobjects might be different, the control flow
  and lifecycle of mobjects is still more or less the same. There are more
  substantial differences when it comes to the rendering loop.

As you will see when inspecting the method, :meth:`.Scene.play` almost
immediately passes over to the ``play`` method of the renderer,
in our case :class:`.CairoRenderer.play`. The one thing :meth:`.Scene.play`
takes care of is the management of subcaptions that you might have
passed to it (see the the documentation of :meth:`.Scene.play` and
:meth:`.Scene.add_subcaption` for more information).

.. warning::

  As has been said before, the communication between scene and renderer
  is not in a very clean state at this point, so the following paragraphs
  might be confusing if you don't run a debugger and step through the
  code yourself a bit.

Inside :meth:`.CairoRenderer.play`, the renderer first checks whether
it may skip rendering of the current play call. This might happen, for example,
when ``-s`` is passed to the CLI (i.e., only the last frame should be rendered),
or when the ``-n`` flag is passed and the current play call is outside of the
specified render bounds. The "skipping status" is updated in form of the
call to :meth:`.CairoRenderer.update_skipping_status`.

Next, the renderer asks the scene to process the animations in the play
call so that renderer obtains all of the information it needs. To
be more concrete, :meth:`.Scene.compile_animation_data` is called,
which then takes care of several things: 

- The method processes all animations and the keyword arguments passed
  to the initial :meth:`.Scene.play` call. In particular, this means
  that it makes sure all arguments passed to the play call are actually
  animations (or ``.animate`` syntax calls, which are also assembled to
  be actual :class:`.Animation`-objects at that point). It also propagates
  any animation-related keyword arguments (like ``run_time``,
  or ``rate_func``) passed to :class:`.Scene.play` to each individual
  animation. The processed animations are then stored in the ``animations`` 
  attribute of the scene (which the renderer later reads...).
- It adds all mobjects to which the animations that are played are
  bound to to the scene (provided the animation is not an mobject-introducing
  animation -- for these, the addition to the scene happens later).
- In case the played animation is a :class:`.Wait` animation (this is the
  case in a :meth:`.Scene.wait` call), the method checks whether a static
  image should be rendered, or whether the render loop should be processed
  as usual (see :meth:`.Scene.should_update_mobjects` for the exact conditions,
  basically it checks whether there are any time-dependent updater functions
  and so on).
- Finally, the method determines the total run time of the play call (which
  at this point is computed as the maximum of the run times of the passed
  animations). This is stored in the ``duration`` attribute of the scene.


After the animation data has been compiled by the scene, the renderer
continues to prepare for entering the render loop. It now checks the
skipping status which has been determined before. If the renderer can
skip this play call, it does so: it sets the current play call hash (which
we will get back to in a moment) to ``None`` and increases the time of the
renderer by the determined animation run time.

Otherwise, the renderer checks whether or not Manim's caching system should
be used. The idea of the caching system is simple: for every play call, a
hash value is computed, which is then stored and upon re-rendering the scene,
the hash is generated again and checked against the stored value. If it is the
same, the cached output is reused, otherwise it is fully rerendered again.
We will not go into details of the caching system here; if you would like
to learn more, the :func:`.get_hash_from_play_call` function in the
:mod:`.utils.hashing` module is essentially the entry point to the caching
mechanism.

In the event that the animation has to be rendered, the renderer asks
its :class:`.SceneFileWriter` to start a writing process. The process
is started by a call to ``ffmpeg`` and opens a pipe to which rendered
raw frames can be written. As long as the pipe is open, the process
can be accessed via the ``writing_process`` attribute of the file writer.
With the writing process in place, the renderer then asks the scene
to "begin" the animations.

First, it literally *begins* all of the animations by calling their
setup methods (:meth:`.Animation._setup_scene`, :meth:`.Animation.begin`).
In doing so, the mobjects that are newly introduced by an animation
(like via :class:`.Create` etc.) are added to the scene. Furthermore, the
animation suspends updater functions being called on its mobject, and
it sets its mobject to the state that corresponds to the first frame
of the animation.

After this has happened for all animations in the current ``play`` call,
the Cairo renderer determines which of the scene's mobjects can be
painted statically to the background, and which ones have to be
redrawn every frame. It does so by calling
:meth:`.Scene.get_moving_and_static_mobjects`, and the resulting
partition of mobjects is stored in the corresponding ``moving_mobjects`` 
and ``static_mobjects`` attributes.

.. NOTE::

  The mechanism that determines static and moving mobjects is
  specific for the Cairo renderer, the OpenGL renderer works differently.
  Basically, moving mobjects are determined by checking whether they,
  any of their children, or any of the mobjects "below" them (in the
  sense of the order in which mobjects are processed in the scene)
  either have an update function attached, or whether they appear
  in one of the current animations. See the implementation of
  :meth:`.Scene.get_moving_mobjects` for more details.

Up to this very point, we did not actually render any (partial)
image or movie files from the scene yet. This is, however, about to change.
Before we enter the render loop, let us briefly revisit our toy
example and discuss how the generic :meth:`.Scene.play` call
setup looks like there.

For the call that plays the :class:`.ReplacementTransform`, there
is no subcaption to be taken care of. The renderer then asks
the scene to compile the animation data: the passed argument
already is an animation (no additional preparations needed),
there is no need for processing any keyword arguments (as
we did not specify any additional ones to ``play``). The
mobject bound to the animation, ``orange_square``, is already
part of the scene (so again, no action taken). Finally, the run
time is extracted (3 seconds long) and stored in
``Scene.duration``. The renderer then checks whether it should
skip (it should not), then whether the animation is already
cached (it is not). The corresponding animation hash value is
determined and passed to the file writer, which then also calls
``ffmpeg`` to start the writing process which waits for rendered
frames from the library.

The scene then ``begin``\ s the animation: for the 
:class:`.ReplacementTransform` this means that the animation populates
all of its relevant animation attributes (i.e., compatible copies
of the starting and the target mobject so that it can safely interpolate
between the two).

The mechanism determining static and moving mobjects considers
all of the scenes mobjects (at this point only the
``orange_square``), and determines that the ``orange_square`` is
bound to an animation that is currently played. As a result,
the square is classified as a "moving mobject".

Time to render some frames.


The render loop (for real this time)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

As mentioned above, due to the mechanism that determines static and moving
mobjects in the scene, the renderer knows which mobjects it can paint
statically to the background of the scene. Practically, this means that
it partially renders a scene (to produce a background image), and then
when iterating through the time progression of the animation only the
"moving mobjects" are re-painted on top of the static background.

The renderer calls :meth:`.CairoRenderer.save_static_frame_data`, which
first checks whether there are currently any static mobjects, and if there
are, it updates the frame (only with the static mobjects; more about how
exactly this works in a moment) and then saves a NumPy array representing
the rendered frame in the ``static_image`` attribute. In our toy example,
there are no static mobjects, and so the ``static_image`` attribute is
simply set to ``None``.

Next, the renderer asks the scene whether the current animation is
a "frozen frame" animation, which would mean that the renderer actually
does not have to repaint the moving mobjects in every frame of the time
progression. It can then just take the latest static frame, and display it
throughout the animation.

.. NOTE::

  An animation is considered a "frozen frame" animation if only a
  static :class:`.Wait` animation is played. See the description
  of :meth:`.Scene.compile_animation_data` above, or the
  implementation of :meth:`.Scene.should_update_mobjects` for
  more details.

If this is not the case (just as in our toy example), the renderer
then calls the :meth:`.Scene.play_internal` method, which is the
integral part of the render loop (in which the library steps through
the time progression of the animation and renders the corresponding
frames).

Within :meth:`.Scene.play_internal`, the following steps are performed: 

- The scene determines the run time of the animations by calling
  :meth:`.Scene.get_run_time`. This method basically takes the maximum
  ``run_time`` attribute of all of the animations passed to the
  :meth:`.Scene.play` call.
- Then the *time progression* is constructed via the (internal)
  :meth:`.Scene._get_animation_time_progression` method, which wraps
  the actual :meth:`.Scene.get_time_progression` method. The time
  progression is a ``tqdm`` `progress bar object <https://tqdm.github.io>`__
  for an iterator over ``np.arange(0, run_time, 1 / config.frame_rate)``. In
  other words, the time progression holds the time stamps (relative to the
  current animations, so starting at 0 and ending at the total animation run time,
  with the step size determined by the render frame rate) of the timeline where
  a new animation frame should be rendered.
- Then the scene iterates over the time progression: for each time stamp ``t``,
  :meth:`.Scene.update_to_time` is called, which ...

  - ... first computes the time passed since the last update (which might be 0,
    especially for the initial call) and references it as ``dt``,
  - then (in the order in which the animations are passed to :meth:`.Scene.play`)
    calls :meth:`.Animation.update_mobjects` to trigger all updater functions that
    are attached to the respective animation except for the "main mobject" of
    the animation (that is, for example, for :class:`.Transform` the unmodified
    copies of start and target mobject -- see :meth:`.Animation.get_all_mobjects_to_update`
    for more details),
  - then the relative time progression with respect to the current animation
    is computed (``alpha = t / animation.run_time``), which is then used to
    update the state of the animation with a call to :meth:`.Animation.interpolate`.
  - After all of the passed animations have been processed, the updater functions
    of all mobjects in the scene, all meshes, and finally those attached to
    the scene itself are run.

At this point, the internal (Python) state of all mobjects has been updated
to match the currently processed timestamp. If rendering should not be skipped,
then it is now time to *take a picture*!

.. NOTE::

  The update of the internal state (iteration over the time progression) happens
  *always* once :meth:`.Scene.play_internal` is entered. This ensures that even
  if frames do not need to be rendered (because, e.g., the ``-n`` CLI flag has
  been passed, something has been cached, or because we might be in a *Section*
  with skipped rendering), updater functions still run correctly, and the state
  of the first frame that *is* rendered is kept consistent.

To render an image, the scene calls the corresponding method of its renderer,
:meth:`.CairoRenderer.render` and passes just the list of *moving mobjects* (remember,
the *static mobjects* are assumed to have already been painted statically to
the background of the scene). All of the hard work then happens when the renderer
updates its current frame via a call to :meth:`.CairoRenderer.update_frame`: 

First, the renderer prepares its :class:`.Camera` by checking whether the renderer
has a ``static_image`` different from ``None`` stored already. If so, it sets the
image as the *background image* of the camera via :meth:`.Camera.set_frame_to_background`,
and otherwise it just resets the camera via :meth:`.Camera.reset`. The camera is then
asked to capture the scene with a call to :meth:`.Camera.capture_mobjects`.

Things get a bit technical here, and at some point it is more efficient to
delve into the implementation -- but here is a summary of what happens once the
camera is asked to capture the scene: 

- First, a flat list of mobjects is created (so submobjects get extracted from
  their parents). This list is then processed in groups of the same type of
  mobjects (e.g., a batch of vectorized mobjects, followed by a batch of image mobjects,
  followed by more vectorized mobjects, etc. -- in many cases there will just be
  one batch of vectorized mobjects).
- Depending on the type of the currently processed batch, the camera uses dedicated
  *display functions* to convert the :class:`.Mobject` Python object to
  a NumPy array stored in the camera's ``pixel_array`` attribute.
  The most important example in that context is the display function for
  vectorized mobjects, :meth:`.Camera.display_multiple_vectorized_mobjects`,
  or the more particular (in case you did not add a background image to your
  :class:`.VMobject`), :meth:`.Camera.display_multiple_non_background_colored_vmobjects`.
  This method first gets the current Cairo context, and then, for every (vectorized)
  mobject in the batch, calls :meth:`.Camera.display_vectorized`. There,
  the actual background stroke, fill, and then stroke of the mobject is
  drawn onto the context. See :meth:`.Camera.apply_stroke` and
  :meth:`.Camera.set_cairo_context_color` for more details -- but it does not get
  much deeper than that, in the latter method the actual Bézier curves
  determined by the points of the mobject are drawn; this is where the low-level
  interaction with Cairo happens.

After all batches have been processed, the camera has an image representation
of the Scene at the current time stamp in form of a NumPy array stored in its
``pixel_array`` attribute. The renderer then takes this array and passes it to
its :class:`.SceneFileWriter`. This concludes one iteration of the render loop,
and once the time progression has been processed completely, a final bit
of cleanup is performed before the :meth:`.Scene.play_internal` call is completed.

A TL;DR for the render loop, in the context of our toy example, reads as follows: 

- The scene finds that a 3 second long animation (the :class:`.ReplacementTransform`
  changing the orange square to the blue circle) should be played. Given the requested
  medium render quality, the frame rate is 30 frames per second, and so the time
  progression with steps ``[0, 1/30, 2/30, ..., 89/30]`` is created.
- In the internal render loop, each of these time stamps is processed: 
  there are no updater functions, so effectively the scene updates the
  state of the transformation animation to the desired time stamp (for example,
  at time stamp ``t = 45/30``, the animation is completed to a rate of
  ``alpha = 0.5``).
- Then the scene asks the renderer to do its job. The renderer asks its camera
  to capture the scene, the only mobject that needs to be processed at this point
  is the main mobject attached to the transformation; the camera converts the
  current state of the mobject to entries in a NumPy array. The renderer passes
  this array to the file writer.
- At the end of the loop, 90 frames have been passed to the file writer.

Completing the render loop
^^^^^^^^^^^^^^^^^^^^^^^^^^

The last few steps in the :meth:`.Scene.play_internal` call are not too
exciting: for every animation, the corresponding :meth:`.Animation.finish`
and :meth:`.Animation.clean_up_from_scene` methods are called.

.. NOTE::

  Note that as part of :meth:`.Animation.finish`, the :meth:`.Animation.interpolate`
  method is called with an argument of 1.0 -- you might have noticed already that
  the last frame of an animation can sometimes be a bit off or incomplete.
  This is by current design! The last frame rendered in the render loop (and displayed
  for a duration of ``1 / frame_rate`` seconds in the rendered video) corresponds to
  the state of the animation ``1 / frame_rate`` seconds before it ends. To display
  the final frame as well in the video, we would need to append another ``1 / frame_rate`` 
  seconds to the video -- which would then mean that a 1 second rendered Manim video
  would be slightly longer than 1 second. We decided against this at some point.

In the end, the time progression is closed (which completes the displayed progress bar)
in the terminal. With the closing of the time progression, the
:meth:`.Scene.play_internal` call is completed, and we return to the renderer,
which now orders the :class:`.SceneFileWriter` to close the movie pipe that has
been opened for this animation: a partial movie file is written.

This pretty much concludes the walkthrough of a :class:`.Scene.play` call,
and actually there is not too much more to say for our toy example either: at
this point, a partial movie file that represents playing the
:class:`.ReplacementTransform` has been written. The initialization of
the :class:`.Dot` happens analogous to the initialization of ``blue_circle``,
which has been discussed above. The :meth:`.Mobject.add_updater` call literally
just attaches a function to the ``updaters`` attribute of the ``small_dot``. And
the remaining :meth:`.Scene.play` and :meth:`.Scene.wait` calls follow the
exact same procedure as discussed in the render loop section above; each such call
produces a corresponding partial movie file.

Once the :meth:`.Scene.construct` method has been fully processed (and thus all
of the corresponding partial movie files have been written), the
scene calls its cleanup method :meth:`.Scene.tear_down`, and then
asks its renderer to finish the scene. The renderer, in turn, asks
its scene file writer to wrap things up by calling :meth:`.SceneFileWriter.finish`,
which triggers the combination of the partial movie files into the final product.

And there you go! This is a more or less detailed description of how Manim works
under the hood. While we did not discuss every single line of code in detail
in this walkthrough, it should still give you a fairly good idea of how the general
structural design of the library and at least the Cairo rendering flow in particular
looks like.


===================================================
/. 🚀 docs/source/guides/using_text.rst
===================================================

###########################
Rendering Text and Formulas
###########################

There are two different ways by which you can render **Text** in videos: 

1. Using Pango (:mod:`~.text_mobject`)
2. Using LaTeX (:mod:`~.tex_mobject`)

If you want to render simple text, you should use either :class:`~.Text` or
:class:`~.MarkupText`, or one of its derivatives like :class:`~.Paragraph`.
See :ref:`using-text-objects` for more information.

LaTeX should be used when you need mathematical typesetting. See
:ref:`rendering-with-latex` for more information.

.. _using-text-objects: 

Text Without LaTeX
******************

The simplest way to add text to your animations is to use the :class:`~.Text`
class. It uses the `Pango library`_ to render text. With Pango, you can also
render non-English alphabets like 你好 or  こんにちは or 안녕하세요 or
مرحبا بالعالم.

Here is a simple *Hello World* animation.

.. manim:: HelloWorld
    :save_last_frame: 
    :ref_classes: Text

    class HelloWorld(Scene): 
        def construct(self): 
            text = Text("Hello world", font_size=144)
            self.add(text)

You can also use :class:`~.MarkupText` which allows the use of PangoMarkup
(see the documentation of :class:`~.MarkupText` for details) to render text.
For example: 

.. manim:: SingleLineColor
    :save_last_frame: 
    :ref_classes: MarkupText

    class SingleLineColor(Scene): 
        def construct(self): 
            text = MarkupText(
                f'all in red <span fgcolor="{YELLOW}">except this</span>', color=RED
            )
            self.add(text)

.. _Pango library: https://pango.gnome.org

Working with :class:`~.Text`
============================

This section explains the properties of :class:`~.Text` and how can it be used
in your animations.

Using Fonts
-----------

You can set a different font using :attr:`~.Text.font`.

.. note::

    The font used must be installed in your system, and Pango should know
    about it. You can get a list of fonts using :func:`manimpango.list_fonts`.

    >>> import manimpango
    >>> manimpango.list_fonts()
    [...]


.. manim:: FontsExample
    :save_last_frame: 

    class FontsExample(Scene): 
        def construct(self): 
            ft = Text("Noto Sans", font="Noto Sans")
            self.add(ft)

Setting Slant and Weight
------------------------
Slant is the style of the Text, and it can be ``NORMAL`` (the default),
``ITALIC`` or ``OBLIQUE``. Usually, for many fonts both ``ITALIC`` and
``OBLIQUE`` look similar, but ``ITALIC`` uses **Roman Style**, whereas
``OBLIQUE`` uses **Italic Style**.

Weight specifies the boldness of a font. You can see a list of weights in
:class:`manimpango.Weight`.

.. manim:: SlantsExample
    :save_last_frame: 

    class SlantsExample(Scene): 
        def construct(self): 
            a = Text("Italic", slant=ITALIC)
            self.add(a)

.. manim:: DifferentWeight
    :save_last_frame: 

    class DifferentWeight(Scene): 
        def construct(self): 
            import manimpango

            g = VGroup()
            weight_list = dict(
                sorted(
                    {
                        weight: manimpango.Weight(weight).value
                        for weight in manimpango.Weight
                    }.items(),
                    key=lambda x: x[1],
                )
            )
            for weight in weight_list: 
                g += Text(weight.name, weight=weight.name, font="Open Sans")
            self.add(g.arrange(DOWN).scale(0.5))

.. _using-colors: 

Using Colors
------------

You can set the color of the text using :attr:`~.Text.color`: 

.. manim:: SimpleColor
    :save_last_frame: 

    class SimpleColor(Scene): 
        def construct(self): 
            col = Text("RED COLOR", color=RED)
            self.add(col)

You can use utilities like :attr:`~.Text.t2c` for coloring specific characters.
This may be problematic if your text contains ligatures
as explained in :ref:`iterating-text`.

:attr:`~Text.t2c` accepts two types of dictionaries,

* The keys can contain indices like ``[2:-1]`` or ``[4:8]``,
  this works similar to how `slicing <https://realpython.com/python-strings/#string-slicing>`_
  works in Python. The values should be the color of the Text from :class:`~.Color`.


* The keys contain words or characters which should be colored separately
  and the values should be the color from :class:`~.Color`: 

.. manim:: Textt2cExample
    :save_last_frame: 

    class Textt2cExample(Scene): 
        def construct(self): 
            t2cindices = Text('Hello', t2c={'[1:-1]': BLUE}).move_to(LEFT)
            t2cwords = Text('World',t2c={'rl':RED}).next_to(t2cindices, RIGHT)
            self.add(t2cindices, t2cwords)

If you want to avoid problems when using colors (due to ligatures), consider using
:class:`MarkupText`.


Using Gradients
---------------

You can add a gradient using :attr:`~.Text.gradient`. The value must
be an iterable of any length: 

.. manim:: GradientExample
    :save_last_frame: 

    class GradientExample(Scene): 
        def construct(self): 
            t = Text("Hello", gradient=(RED, BLUE, GREEN), font_size=96)
            self.add(t)

You can also use :attr:`~.Text.t2g` for gradients with specific
characters of the text. It shares a similar syntax to :ref:`the
interface for colors <using-colors>`: 

.. manim:: t2gExample
    :save_last_frame: 

    class t2gExample(Scene): 
        def construct(self): 
            t2gindices = Text(
                'Hello',
                t2g={
                    '[1:-1]': (RED,GREEN),
                },
            ).move_to(LEFT)
            t2gwords = Text(
                'World',
                t2g={
                    'World':(RED,BLUE),
                },
            ).next_to(t2gindices, RIGHT)
            self.add(t2gindices, t2gwords)

Setting Line Spacing
--------------------

You can set the line spacing using :attr:`~.Text.line_spacing`: 

.. manim:: LineSpacing
    :save_last_frame: 

    class LineSpacing(Scene): 
        def construct(self): 
            a = Text("Hello\nWorld", line_spacing=1)
            b = Text("Hello\nWorld", line_spacing=4)
            self.add(Group(a,b).arrange(LEFT, buff=5))


.. _disable-ligatures: 

Disabling Ligatures
-------------------

By disabling ligatures you would get a one-to-one mapping between characters and
submobjects. This fixes the issues with coloring text.


.. warning::

    Be aware that using this method with text that heavily depends on
    ligatures (Arabic text) may yield unexpected results.

You can disable ligatures by passing ``disable_ligatures`` to
:class:`Text`. For example: 

.. manim:: DisableLigature
    :save_last_frame: 

    class DisableLigature(Scene): 
        def construct(self): 
            li = Text("fl ligature",font_size=96)
            nli = Text("fl ligature", disable_ligatures=True, font_size=96)
            self.add(Group(li, nli).arrange(DOWN, buff=.8))

.. _iterating-text: 

Iterating :class:`~.Text`
-------------------------

Text objects behave like :class:`VGroups <.VGroup>`. Therefore, you can slice and index
the text.

For example, you can set each letter to different color by iterating it.

.. manim:: IterateColor
    :save_last_frame: 

    class IterateColor(Scene): 
        def construct(self): 
            text = Text("Colors", font_size=96)
            for letter in text: 
                letter.set_color(random_bright_color())
            self.add(text)

.. warning::

    Please note that `Ligature`_ can cause problems here. If you need a
    one-to-one mapping of characters to submobjects you should pass
    the ``disable_ligatures`` parameter to :class:`~.Text`.
    See :ref:`disable-ligatures`.

.. _Ligature: https://en.wikipedia.org/wiki/Ligature_(writing)

Working with :class:`~.MarkupText`
==================================

MarkupText is similar to :class:`~.Text`, the only difference between them is
that this accepts and processes PangoMarkup (which is similar to
html), instead of just rendering plain text.

Consult the documentation of :class:`~.MarkupText` for more details
and further references about PangoMarkup.

.. manim:: MarkupTest
    :save_last_frame: 

    class MarkupTest(Scene): 
        def construct(self): 
            text = MarkupText(
                f'<span underline="double" underline_color="green">double green underline</span> in red text<span fgcolor="{YELLOW}"> except this</span>',
                color=RED,
                font_size=34
            )
            self.add(text)

.. _rendering-with-latex: 

Text With LaTeX
***************

Just as you can use :class:`~.Text` to add text to your videos, you can
use :class:`~.Tex` to insert LaTeX.

For example,

.. manim:: HelloLaTeX
    :save_last_frame: 

    class HelloLaTeX(Scene): 
        def construct(self): 
            tex = Tex(r"\LaTeX", font_size=144)
            self.add(tex)

.. note::

    Note that we are using a raw string (``r'...'``) instead of a regular string (``'...'``).
    This is because TeX code uses a lot of special characters - like ``\`` for example - that
    have special meaning within a regular python string. An alternative would have been to
    write ``\\`` to escape the backslash: ``Tex('\\LaTeX')``.

Working with :class:`~.MathTex`
===============================

Everything passed to :class:`~.MathTex` is in math mode by default. To be more precise,
:class:`~.MathTex` is processed within an ``align*`` environment. You can achieve a
similar effect with :class:`~.Tex` by enclosing your formula with ``$`` symbols: 
``$\xrightarrow{x^6y^8}$``: 

.. manim:: MathTeXDemo
    :save_last_frame: 

    class MathTeXDemo(Scene): 
        def construct(self): 
            rtarrow0 = MathTex(r"\xrightarrow{x^6y^8}", font_size=96)
            rtarrow1 = Tex(r"$\xrightarrow{x^6y^8}$", font_size=96)

            self.add(VGroup(rtarrow0, rtarrow1).arrange(DOWN))


LaTeX commands and keyword arguments
====================================

We can use any standard LaTeX commands in the AMS maths packages. Such
as the ``mathtt`` math-text type or the ``looparrowright`` arrow.

.. manim:: AMSLaTeX
    :save_last_frame: 

    class AMSLaTeX(Scene): 
        def construct(self): 
            tex = Tex(r'$\mathtt{H} \looparrowright$ \LaTeX', font_size=144)
            self.add(tex)

On the Manim side, the :class:`~.Tex` class also accepts attributes to
change the appearance of the output. This is very similar to the
:class:`~.Text` class. For example, the ``color`` keyword changes the
color of the TeX mobject.

.. manim:: LaTeXAttributes
    :save_last_frame: 

    class LaTeXAttributes(Scene): 
        def construct(self): 
            tex = Tex(r'Hello \LaTeX', color=BLUE, font_size=144)
            self.add(tex)

Extra LaTeX Packages
====================

Some commands require special packages to be loaded into the TeX template.
For example, to use the ``mathscr`` script, we need to add the ``mathrsfs`` 
package. Since this package isn't loaded into Manim's tex template by default,
we have to add it manually.

.. manim:: AddPackageLatex
    :save_last_frame: 

    class AddPackageLatex(Scene): 
        def construct(self): 
            myTemplate = TexTemplate()
            myTemplate.add_to_preamble(r"\usepackage{mathrsfs}")
            tex = Tex(
                r"$\mathscr{H} \rightarrow \mathbb{H}$",
                tex_template=myTemplate,
                font_size=144,
            )
            self.add(tex)

Substrings and parts
====================

The TeX mobject can accept multiple strings as arguments. Afterwards you can
refer to the individual parts either by their index (like ``tex[1]``), or by
selecting parts of the tex code. In this example, we set the color
of the ``\bigstar`` using :func:`~.set_color_by_tex`: 

.. manim:: LaTeXSubstrings
    :save_last_frame: 

    class LaTeXSubstrings(Scene): 
        def construct(self): 
            tex = Tex('Hello', r'$\bigstar$', r'\LaTeX', font_size=144)
            tex.set_color_by_tex('igsta', RED)
            self.add(tex)

Note that :func:`~.set_color_by_tex` colors the entire substring containing
the Tex, not just the specific symbol or Tex expression. Consider the following example: 

.. manim:: IncorrectLaTeXSubstringColoring
    :save_last_frame: 

    class IncorrectLaTeXSubstringColoring(Scene): 
        def construct(self): 
            equation = MathTex(
                r"e^x = x^0 + x^1 + \frac{1}{2} x^2 + \frac{1}{6} x^3 + \cdots + \frac{1}{n!} x^n + \cdots"
            )
            equation.set_color_by_tex("x", YELLOW)
            self.add(equation)

As you can see, this colors the entire equation yellow, contrary to what
may be expected. To color only ``x`` yellow, we have to do the following: 

.. manim:: CorrectLaTeXSubstringColoring
    :save_last_frame: 

    class CorrectLaTeXSubstringColoring(Scene): 
        def construct(self): 
            equation = MathTex(
                r"e^x = x^0 + x^1 + \frac{1}{2} x^2 + \frac{1}{6} x^3 + \cdots + \frac{1}{n!} x^n + \cdots",
                substrings_to_isolate="x"
            )
            equation.set_color_by_tex("x", YELLOW)
            self.add(equation)

By setting ``substrings_to_isolate`` to ``x``, we split up the
:class:`~.MathTex` into substrings automatically and isolate the ``x`` components
into individual substrings. Only then can :meth:`~.set_color_by_tex` be used
to achieve the desired result.

Note that Manim also supports a custom syntax that allows splitting
a TeX string into substrings easily: simply enclose parts of your formula
that you want to isolate with double braces. In the string
``MathTex(r"{{ a^2 }} + {{ b^2 }} = {{ c^2 }}")``, the rendered mobject
will consist of the substrings ``a^2``, ``+``, ``b^2``, ``=``, and ``c^2``.
This makes transformations between similar text fragments easy
to write using :class:`~.TransformMatchingTex`.

Using ``index_labels`` to work with complicated strings
=======================================================

You might sometimes be working with a very complicated :class:`~.MathTex` mobject
that makes it difficult to work with its individual components. This is
where the debugging function :func:`.index_labels` is very useful.

The method shows the index of a mobject's submobjects, allowing you
to easily find the components of the mobject you would like to change.

.. manim:: IndexLabelsMathTex
    :save_last_frame: 

    class IndexLabelsMathTex(Scene): 
        def construct(self): 
            text = MathTex(r"\binom{2n}{n+2}", font_size=96)

            # index the first (and only) term of the MathTex mob
            self.add(index_labels(text[0]))

            text[0][1:3].set_color(YELLOW)
            text[0][3:6].set_color(RED)
            self.add(text)


LaTeX Maths Fonts - The Template Library
========================================

Changing fonts in LaTeX when typesetting mathematical formulae is
trickier than regular text. It requires changing the template that is used
to compile the TeX. Manim comes with a collection of :class:`~.TexFontTemplates`
ready for you to use. These templates will all work in math mode: 

.. manim:: LaTeXMathFonts
    :save_last_frame: 

    class LaTeXMathFonts(Scene): 
        def construct(self): 
            tex = Tex(
                r"$x^2 + y^2 = z^2$",
                tex_template=TexFontTemplates.french_cursive,
                font_size=144,
            )
            self.add(tex)

Manim also has a :class:`~.TexTemplateLibrary` containing the TeX
templates used by 3Blue1Brown. One example is the ctex template,
used for typesetting Chinese script. For this to work, the ctex LaTeX package
must be installed on your system. Furthermore, if you are only
typesetting Text, you probably do not need :class:`~.Tex` at all, and
should use :class:`~.Text` instead.

.. manim:: LaTeXTemplateLibrary
    :save_last_frame: 

    class LaTeXTemplateLibrary(Scene): 
        def construct(self): 
            tex = Tex('Hello 你好 \\LaTeX', tex_template=TexTemplateLibrary.ctex, font_size=144)
            self.add(tex)


Aligning formulae
=================

:class:`~.MathTex` mobject is typeset in the LaTeX  ``align*`` 
environment. This means you can use the ``&`` alignment character
when typesetting multiline formulae: 

.. manim:: LaTeXAlignEnvironment
    :save_last_frame: 

    class LaTeXAlignEnvironment(Scene): 
        def construct(self): 
            tex = MathTex(r'f(x) &= 3 + 2 + 1\\ &= 5 + 1 \\ &= 6', font_size=96)
            self.add(tex)


===================================================
/. 🚀 docs/source/guides/add_voiceovers.rst
===================================================

###########################
Adding Voiceovers to Videos
###########################

Creating a full-fledged video with voiceovers is a bit more involved than
creating purely visual Manim scenes. One has to use `a video editing
program <https://en.wikipedia.org/wiki/List_of_video_editing_software>`__
to add the voiceovers after the video has been rendered. This process
can be difficult and time-consuming, since it requires a lot of planning
and preparation.

To ease the process of adding voiceovers to videos, we have created
`Manim Voiceover <https://voiceover.manim.community>`__, a plugin
that lets you add voiceovers to scenes directly in Python. To install it, run

.. code-block:: bash

    pip install "manim-voiceover[azure,gtts]"

Visit `the installation page <https://voiceover.manim.community/en/latest/installation.html>`__
for more details on how to install Manim Voiceover.

Basic Usage
###########

Manim Voiceover lets you ...

- Add voiceovers to Manim videos directly in Python, without having to use a video editor.
- Record voiceovers with your microphone during rendering through a simple command line interface.
- Develop animations with auto-generated AI voices from various free and proprietary services.

It provides a very simple API that lets you specify your voiceover script
and then record it during rendering: 

.. code-block:: python

    from manim import *
    from manim_voiceover import VoiceoverScene
    from manim_voiceover.services.recorder import RecorderService

    # Simply inherit from VoiceoverScene instead of Scene to get all the
    # voiceover functionality.
    class RecorderExample(VoiceoverScene): 
        def construct(self): 
            # You can choose from a multitude of TTS services,
            # or in this example, record your own voice: 
            self.set_speech_service(RecorderService())

            circle = Circle()

            # Surround animation sections with with-statements: 
            with self.voiceover(text="This circle is drawn as I speak.") as tracker: 
                self.play(Create(circle), run_time=tracker.duration)
                # The duration of the animation is received from the audio file
                # and passed to the tracker automatically.

            # This part will not start playing until the previous voiceover is finished.
            with self.voiceover(text="Let's shift it to the left 2 units.") as tracker: 
                self.play(circle.animate.shift(2 * LEFT), run_time=tracker.duration)

To get started with Manim Voiceover, 
visit the `Quick Start Guide <https://voiceover.manim.community/en/latest/quickstart.html>`__.

Visit the `Example Gallery <https://voiceover.manim.community/en/latest/examples.html>`__
to see some examples of Manim Voiceover in action.


===================================================
/. 🚀 docs/source/faq/index.rst
===================================================

Frequently Asked Questions
==========================

.. toctree::
   :caption: Table of Contents
   :maxdepth: 2
   :glob: 

   *


===================================================
/. 🚀 docs/source/faq/general.md
===================================================

.. code-block: bash

    pandoc -f markdown -t rst docs/source/faq/general.md | clip

FAQ: General Usage
==================

Why does Manim say that 鈥渢here are no scenes inside that module鈥?
-----------------------------------------------------------------

There are two main reasons why this error appears: if you have edited
the file containing your ``Scene`` class and forgot to save it, or if
you have accidentally passed the name of a wrong file to ``manim``, this
is a likely outcome. Check that you have spelled everything correctly.

Otherwise, you are likely mixing up Manim versions. See 
{ref}\ ``this FAQ answer <different-versions>`` for an explanation
regarding why there are different versions. Under the assumption that
you are trying to use the ``manim`` executable from the terminal to run
a scene that has been written for the community version (i.e., there is
``from manim import *``, or more specifically
``from manim import Scene``), then this error indicates that the
``manim`` executable has been overwritten by the one provided by
``manimgl`` (unfortunately, both ``manim`` and ``manimgl`` provide a
``manim`` executable).

You can check whether this is the case by running ``manim --version``,
the output of the community maintained version starts with
``Manim Community v...``. If this is not the case, you are running
``manimgl``.

You can resolve this by either of the following steps: - Un- and
reinstalling ``manim``, - using the ``manimce`` executable in place of
the ``manim`` one, - or replacing the call to the executable with a
direct call to the Python module via ``python -m manim``.

--------------

No matter what code I put in my file, Manim only renders a black frame! Why?
----------------------------------------------------------------------------

If you are using the usual pattern to write a ``Scene``, i.e.,

.. code:: python

   class MyAwesomeScene(Scene):
       def construct(self):
           ...
           # your animation code

then double check whether you have spelled ``construct`` correctly. If
the method containing your code is not called ``construct`` (or if you
are not calling a different, custom method from ``construct``), Manim
will not call your method and simply output a black frame.

--------------

What are the default measurements for Manim's scene?
----------------------------------------------------

The scene measures 8 units in height and has a default ratio of 16:9,
which means that it measures {math}\ ``8 \cdot 16 / 9 = 14 + 2/9`` units
in width. The origin is in the center of the scene, which means that,
for example, the upper left corner of the scene has coordinates
``[-7-1/9, 4, 0]``.

--------------

How do I find out which keyword arguments I can pass when creating a ``Mobject``?
---------------------------------------------------------------------------------

Let us consider a specific example, like the {class}\ ``.Circle`` class.
When looking at its documentation page, only two specific keyword
arguments are listed (``radius``, and ``color``). Besides these concrete
arguments, there is also a catchall ``**kwargs`` argument which captures
all other arguments that are passed to ``Circle``, and passes them on to
the base class of {class}\ ``.Circle``, {class}\ ``.Arc``.

The same holds for {class}\ ``.Arc``: some arguments are explicitly
documented, and there is again a catchall ``**kwargs`` argument that
passes unprocessed arguments to the next base class 鈥?and so on.

The most important keyword arguments relevant to styling your mobjects
are the ones that are documented for the base classes
{class}\ ``.VMobject`` and {class}\ ``.Mobject``.

--------------

Can Manim render a video with transparent background?
-----------------------------------------------------

Yes: simply pass the CLI flag ``-t`` (or its long form 
``--transparent``). Note that the default video file format does not
support transparency, which is why Manim will output a ``.mov`` instead
of a ``.mp4`` when rendering with a transparent background. Other movie
file formats that support transparency can be obtained by passing
``--format=webm`` or ``--format=gif``.

--------------

I have watched a video where a creator ran command X, but it does not work for me. Why?
---------------------------------------------------------------------------------------

The video you have been watching is likely outdated. If you want to
follow along, you either need to use the same version used in the video,
or modify the code (in many cases it is just a method having been
renamed etc.) accordingly. Check the video description, in some cases
creators point out whether changes need to be applied to the code shown
in the video.

--------------

When using ``Tex`` or ``MathTex``, some letters are missing. How can I fix this?
--------------------------------------------------------------------------------

It is possible that you have to (re)build some fonts used by LaTeX. For
some distributions, you can do this manually by running

.. code:: bash

   fmtutil -sys --all

We recommend consulting the documentation of your LaTeX distribution for
more information.

--------------

I want to translate some code from ``manimgl`` to ``manim``, what do I do with ``CONFIG`` dictionaries?
-------------------------------------------------------------------------------------------------------

The community-maintained version has dropped the use of ``CONFIG``
dictionaries very early, with
{doc}\ ``version v0.2.0 </changelog/0.2.0-changelog>`` released in
January 2021.

Before that, Manim's classes basically processed ``CONFIG`` dictionaries
by mimicking inheritance (to properly process ``CONFIG`` dictionaries
set by parent classes) and then assigning all of the key-value-pairs in
the dictionary as attributes of the corresponding object.

In situations where there is not much inheritance going on, or for any
custom setting, you should set these attributes yourself. For example,
for an old-style ``Scene`` with custom attributes like

.. code:: python

   class OldStyle(Scene):
       CONFIG = {"a": 1, "b": 2}

should be written as 

.. code:: python

   class NewStyle(Scene):
       a = 1
       b = 2

In situations where values should be properly inherited, the arguments
should be added to the initialization function of the class. An
old-style mobject ``Thing`` could look like

.. code:: python

   class Thing(VMobject):
       CONFIG = {
           "stroke_color": RED,
           "fill_opacity": 0.7,
           "my_awesome_argument": 42,
       }

where ``stroke_color`` and ``fill_opacity`` are arguments that concern
the parent class of ``Thing``, and ``my_awesome_argument`` is a custom
argument that only concerns ``Thing``. A version without ``CONFIG``
could look like this:

.. code:: python

   class Thing(VMobject):
       def __init__(
           self, stroke_color=RED, fill_opacity=0.7, my_awesome_argument=42, \**kwargs
       ):  
           self.my_awesome_argument = my_awesome_argument
           super().__init__(stroke_color=stroke_color, fill_opacity=fill_opacity, **kwargs)


My installation does not support converting PDF to SVG, help?
-------------------------------------------------------------

This is an issue with ``dvisvgm``, the tool shipped with LaTeX that
transforms LaTeX output to a ``.svg`` file that Manim can parse.

First, make sure your ``dvisvgm`` version is at least 2.4 by checking
the output of

.. code:: bash

   dvisvgm --version

If you do not know how to update ``dvisvgm``, please refer to your LaTeX
distributions documentation (or the documentation of your operating
system, if ``dvisvgm`` was installed as a system package).

Second, check whether your ``dvisvgm`` supports PostScript specials.
This is needed to convert from PDF to SVG. Run:

.. code:: bash

   dvisvgm -l

If the output to this command does **not** contain 
``ps  dvips PostScript specials``, this is a bad sign. In this case, run

.. code:: bash

   dvisvgm -h

If the output does **not** contain ``--libgs=filename``, this means your
``dvisvgm`` does not currently support PostScript. You must get another
binary.

If, however, ``--libgs=filename`` appears in the help, that means that
your ``dvisvgm`` needs the Ghostscript library to support PostScript.
Search for ``libgs.so`` (on Linux, probably in ``/usr/local/lib`` or
``/usr/lib``) or ``gsdll32.dll`` (on 32-bit Windows, probably in
``C:\windows\system32``) or ``gsdll64.dll`` (on 64-bit Windows, also
probably in ``C:\windows\system32``) or ``libgsl.dylib`` (on MacOS,
probably in ``/usr/local/lib`` or ``/opt/local/lib``). Please look
carefully, as the file might be located elsewhere, e.g.聽in the directory
where Ghostscript is installed.

When you have found the library, try (on MacOS or Linux) 

.. code:: bash

   export LIBGS=<path to your library including the file name>
   dvisvgm -l

or (on Windows) 

.. code:: bat

   set LIBGS=<path to your library including the file name>
   dvisvgm -l

You should now see ``ps    dvips PostScript specials`` in the output.
Refer to your operating system鈥檚 documentation to find out how you can
set or export the environment variable ``LIBGS`` automatically whenever
you open a shell.

As a last check, you can run 

.. code:: bash

   dvisvgm -V1

(while still having ``LIBGS`` set to the correct path, of course.) If
``dvisvgm`` can find your Ghostscript installation, it will be shown in
the output together with the version number.

If you do not have the necessary library on your system, please refer to
your operating system鈥檚 documentation to find out where you can get it
and how you have to install it.

If you are unable to solve your problem, check out the `dvisvgm
FAQ <https://dvisvgm.de/FAQ/>`__.

--------------

Where can I find more resources for learning Manim?
---------------------------------------------------

In our `Discord server <https://manim.community/discord>`__, we have the
community-maintained ``#beginner-resources`` channel in which links to
helpful learning resources are collected. You are welcome to join our
Discord and take a look yourself! If you have found some guides or
tutorials yourself that are not on our list yet, feel free to add them!


===================================================
/. 🚀 docs/source/faq/help.md
===================================================

.. code-block: bash

    pandoc -f markdown -t rst docs/source/faq/help.md | clip

FAQ: Getting Help
=================

How do I animate X? Why do I get error Y? Can someone help me?
--------------------------------------------------------------

Before asking the community, please make sure that the issue you are
having is not already discussed in
our聽{doc}\ ``FAQ section </faq/index>`` sufficiently well so that you
can resolve the problem yourself. You can also try to use your favorite
search engine, if you are lucky you might find a blog post, a question
on `StackOverflow <https://stackoverflow.com/questions/tagged/manim>`__,
or a post in the `r/manim subreddit <https://reddit.com/r/manim>`__.

If this is not the case, please take a moment to properly prepare your
question: the better you manage to explain what exactly it is you are
struggling with, the more efficient people will be able to help you.
Regardless of the platform you choose in the next step, StackOverflow
has a good guide on `asking good
questions <https://stackoverflow.com/help/how-to-ask>`__.

As soon as you have a good idea of what exactly you want to ask, pick
one of the following communication channels:

-  The community is most active `in our Discord
   server <https://manim.community/discord/>`__. Click the link to join,
   then pick one of the ``#manim-help`` channels in the sidebar, and
   post your question there. If you are comfortable with using Discord,
   try to search for your problem using the search function of our
   server; perhaps people have been talking about it before!
-  We are also monitoring questions on
   `StackOverflow <https://stackoverflow.com/questions/tagged/manim>`__
   that are tagged with ``manim``.
-  Many people are also active in our `r/manim
   subreddit <https://reddit.com/r/manim>`__, feel free to post there if
   you are an avid Redditor 鈥?but be aware that Discord or StackOverflow
   might be better choices.
-  And finally, you can also start a new `discussion on
   GitHub <https://github.com/ManimCommunity/manim/discussions>`__ if
   you dislike all other options.

In all of these channels, please make sure to abide by Manim's
{doc}\ ``Code of Conduct </conduct>`` 鈥?in short, be *excellent* to one
another: be friendly and patient, considerate, and respectful.

--------------

What should I do if nobody answers my question?
-----------------------------------------------

Try and see whether your question can be improved: did you include all
relevant information (in case of errors: the full stack trace, the code
that you were rendering, and the command you used to run Manim?). In
case you used a very long example, is it possible to construct a more
minimal version that has the same (faulty) behavior?

If you posted in one of our help channels on Discord and your question
got buried, you are allowed to ping the ``@Manim Helper`` role to bring
it to the attention of the volunteers who are willing to take a look.
Please refrain from pinging the role immediately when asking your
question for the first time, this is considered impolite.

You can also try to post your question to a different channel if you
feel that you are not having any success with your initial choice 鈥?but
please do not spam your question in all of our communication channels
(and in particular for Discord: please don鈥檛 use multiple help channels
at once).

In the end, it is as for most open-source projects: our community
members are volunteers. If you do not receive a quick answer to your
question, it may be because nobody knows the answer, or because your
question is not clear enough, or it could be that everyone who can help
you with your problem is busy doing other things.

--------------

The library does not behave as documented, or something broke in a new release. What should I do?
-------------------------------------------------------------------------------------------------

Sounds like you have found a bug. One of the best ways of contributing
to the development of Manim is by reporting it!

Check our list of known issues and feature requests `in our GitHub
repository <https://github.com/ManimCommunity/manim/issues>`__. If the
problem you have found is not listed there yet (use the search function;
also check whether there is a corresponding closed issue, it is possible
that your problem has already been resolved and will be fixed with the
next release), please consider the following steps to submit a new
issue.

:literal:`{note} If you are unsure whether or not you should file a new issue for some odd behavior that you found, feel free to ask the community developers, preferably in one of our \`#manim-dev\` channels in [our Discord](https://manim.community/discord/).`

1. Make sure you are running the latest released version of Manim, your
   problem might otherwise already be fixed in a more recent version.
   Check the {doc}\ ``/changelog`` for a full list of changes between
   Manim releases.

2. Choose the correct category for your report when `creating a new
   issue <https://github.com/ManimCommunity/manim/issues/new/choose>`__.
   We have dedicated issue templates for *bug reports*, *feature
   requests*, and *installation issues*. If your report falls into one
   of these categories, read the issue template carefully! Instructions
   are given in the ``<!-- ... -->`` sections of the text field. If you
   want to suggest a new feature without concrete implementation
   details, see
   {ref}\ ``the instructions given in this answer <creating-suggestions>``.

3. For bug reports: prepare a minimal example that can be used to
   illustrate the issue. Examples with hundreds of lines are very
   inefficient and tedious to debug. Your problem needs to be
   reproducible for others, so please make sure to prepare a suitable
   example.

4. This is mentioned in the bug report template as well, but it is very
   important: if you report that some code raises an error, make sure to
   include the full terminal output, from the command you used to run
   the library up to and including the last line with the error message.
   Read carefully: if the message mentions that there is another
   relevant log file, include this other file as well!

--------------

(creating-suggestions)= ## I have an idea for a really cool feature that
should be implemented, where should I share my idea?

New suggestions and proposals should be made by 
`creating a new discussion <https://github.com/ManimCommunity/manim/discussions/new?category=suggestions-and-proposals>`__
in the `Suggestions and Proposals category <https://github.com/ManimCommunity/manim/discussions/categories/suggestions-and-proposals>`__
in our GitHub repository. Once the raw idea has been formed into a more
concrete, implementable proposal that is supported by the community, and
someone has expressed interest in working on the new feature, a
corresponding `issue <https://github.com/ManimCommunity/manim/issues>`__
will be created. Do **not** create issues for suggesting new features
directly, they will be closed down.


===================================================
/. 🚀 docs/source/faq/index.rst
===================================================

Frequently Asked Questions
==========================

.. toctree::
   :caption: Table of Contents
   :maxdepth: 2
   :glob: 

   *


===================================================
/. 🚀 docs/source/faq/installation.md
===================================================

.. code-block:: bash
    
    pandoc -f markdown -t rst docs/source/faq/installation.md | clip

FAQ: Installation
=================

(different-versions)= ## Why are there different versions of Manim?

Manim was originally created by Grant Sanderson as a personal project
and for use in his YouTube channel,
`3Blue1Brown <https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw>`__.
As his channel gained popularity, many grew to like the style of his
animations and wanted to use manim for their own projects. However, as
manim was only intended for personal use, it was very difficult for
other users to install and use it.

In late 2019, Grant started working on faster OpenGL rendering in a new
branch, known as the ``shaders`` branch. In mid-2020, a group of
developers forked it into what is now the community edition; this is the
version documented on this website. In early 2021, Grant merged the
shaders branch back into master, making it the default branch in his
repository 鈥?and this is what ``manimgl`` is. The old version, before
merging the ``shaders`` branch is sometimes referred to as
``ManimCairo`` and is, at this point, only useful for one singular
purpose: rendering Grant鈥檚 old videos locally on your machine. It is
still available in his GitHub repository in form of the
``cairo-backend`` branch.

To summarize: - `Manim, or ManimCE <https://manim.community>`__ refers
to the community maintained version of the library. This is the version
documented on this website; the package name on PyPI is
```manim`` <https://pypi.org/project/manim/>`__. -
`ManimGL <https://github.com/3b1b/manim>`__ is the latest released
version of the version of the library developed by Grant 鈥?b1b鈥?
Sanderson. It has more experimental features and breaking changes
between versions are not documented. Check out its documentation
`here <https://3b1b.github.io/manim/index.html>`__; on PyPI the package
name is ```manimgl`` <https://pypi.org/project/manimgl/>`__. -
`ManimCairo <https://github.com/3b1b/manim/tree/cairo-backend>`__ is the
name that is sometimes used for the old, pre-OpenGL version of
``manimgl``. The latest version of it is available `on PyPI as
``manimlib`` <https://pypi.org/project/manimgl/>`__, but note that if
you intend to use it to compile some old project of Grant, you will
likely have to install the exact version from the time the project was
created from source.

--------------

Which version should I use?
---------------------------

We recommend the community maintained version especially for beginners.
It has been developed to be more stable, better tested and documented
(!), and quicker to respond to community contributions. It is also
perfectly reasonable to start learning with the community maintained
version and then switch to a different version later on.

If you do not care so much about documentation or stability, and would
like to use the exact same version that Grant is using, then use
ManimGL.

And as mentioned above, ManimCairo should only be used for (re)rendering
old 3Blue1Brown projects (basically 2019 and before).

--------------

What are the differences between Manim, ManimGL, ManimCairo? Can I tell for which version a scene was written for?
------------------------------------------------------------------------------------------------------------------

You can! The thing that usually gives it away is the ``import``
statement at the top of the file; depending on how the code imports
Manim you can tell for which version of the code it was written for:

-  If the code imports from ``manim`` (i.e., ``from manim import *``,
   ``import manim as mn``, etc.), then the code you are reading is
   supposed to be run with the community maintained version.
-  If the import reads ``import manimlib`` (or
   ``from manimlib import *``), you are likely reading a file to be
   rendered with ManimGL.
-  And if the import reads ``from manimlib.imports import *``, or
   perhaps even ``from big_ol_pile_of_manim_imports import *`` you are
   reading a snippet that is supposed to be rendered with an early, or
   very early version of ManimCairo, respectively.

--------------

How do I know which version of Manim I have installed?
------------------------------------------------------

Assuming you can run ``manim`` in your terminal and there is some
output, check the first line of the text being produced. If you are
using the community maintained version, the first line of any output
will be ``Manim Community <version number>``. If it does not say that,
you are likely using ManimGL.

You can also check the list of packages you have installed: if typing
``python`` in your terminal spawns the interpreter that corresponds to
the Python installation you use (might also be ``py``, or ``python3``,
depending on your operating system), running ``python -m pip list`` will
print a list of all installed packages. Check whether ``manim`` or
``manimgl`` appear in that list.

Similarly, you can use ``python -m pip install <package name>`` and
``python -m pip uninstall <package name>`` to install and uninstall
packages from that list, respectively.

--------------

I am following the video guide X to install Manim, but some step fails. What do I do?
-------------------------------------------------------------------------------------

It is only natural that there are many video guides on installing Manim
out there, given that Manim is a library used for creating videos.
Unfortunately however, (YouTube) videos can鈥檛 be updated easily (without
uploading a new one, that is) when some step in the installation process
changes, and so there are many **severely outdated** resources out
there.

This is why we strongly recommend following our 
{doc}\ ``written installation guide </installation>`` to guide you
through the process. In case you prefer using a video guide regardless,
please check whether the creator whose guide you have been watching has
made a more recent version available, and otherwise please contact them
directly. Asking for help in the community will likely lead to being
suggested to follow our written guide.

--------------

Why does ManimPango fail to install when running ``pip install manim``?
-----------------------------------------------------------------------

This most likely means that pip was not able to use our pre-built wheels
of the ``manimpango`` dependency. Let us know (via
`Discord <https://www.manim.community/discord/>`__ or by opening a `new
issue on
GitHub <https://github.com/ManimCommunity/ManimPango/issues/new>`__)
which architecture you would like to see supported, and we鈥檒l see what
we can do about it.

To fix errors when installing ``manimpango``, you need to make sure you
have all the necessary build requirements. Check out the detailed
instructions given in `the BUILDING
section <https://github.com/ManimCommunity/ManimPango#BUILDING>`__ of
`ManimPango鈥檚 README <https://github.com/ManimCommunity/ManimPango>`__.

--------------

I am using Windows and get the error ``X is not recognized as an internal or external command, operable program or batch file``
-------------------------------------------------------------------------------------------------------------------------------

Regardless of whether ``X`` says ``python`` or ``manim``, this means
that the executable you are trying to run is not located in one of the
directories your system is looking for them (specified by the ``PATH``
variable). Take a look at the instructions
{doc}\ ``in the installation guide for Windows </installation/windows>``,
or `this StackExchange
answer <https://superuser.com/questions/143119/how-do-i-add-python-to-the-windows-path/143121#143121>`__
to get help with editing the ``PATH`` variable manually.

If ``python`` is recognized but not ``manim`` or ``pip``, you can try
running commands by prepending ``python -m``. That is, ``manim`` becomes
``python -m manim``, and ``pip`` becomes ``python -m pip``.

--------------

I have tried using Chocolatey (``choco install manimce``) to install Manim, but it failed!
------------------------------------------------------------------------------------------

Make sure that you were running the command with administrator
permissions, otherwise there can be problems. If this is not the issue,
read Chocolatey鈥檚 output carefully, it should mention a ``.log`` file
containing information why the process failed.

You are welcome to take this file (and any other input you feel might be
relevant) and submit it to Manim's community to ask for help with your
problem. See the {doc}\ ``FAQ on getting help </faq/help>`` for
instructions.

--------------

On Windows, when typing ``python`` or ``python3`` the Windows store is opened, can I fix this?
----------------------------------------------------------------------------------------------

Yes: you can remove these aliases with these steps:

1. Go to the Windows Setting.
2. Under *Apps and Features* you will find application execution
   aliases.
3. Within this menu, disable the alias(es) that are causing the issue
   (``python`` and/or ``python3``).

--------------

I am using Anaconda and get an ``ImportError`` mentioning that some Symbol is not found.
----------------------------------------------------------------------------------------

This is because Anaconda environments come with their own preinstalled
version of ``cairo`` which is not compatible with the version of
``pycairo`` required by Manim. Usually it can be fixed by running

.. code:: bash

   conda install -c conda-forge pycairo

--------------

How can I fix the error that ``manimpango/cmanimpango.c`` could not be found when trying to install Manim?
----------------------------------------------------------------------------------------------------------

This occasionally happens when your system has to build a wheel for
`ManimPango <https://github.com/ManimCommunity/ManimPango>`__ locally
because there is no compatible version for your architecture available
on PyPI.

Very often, the problem is resolved by installing Cython (e.g., via
``pip3 install Cython``) and then trying to reinstall Manim. If this
does not fix it:

-  Make sure that you have installed all build dependencies mentioned in
   `ManimPango鈥檚
   README <https://github.com/ManimCommunity/ManimPango>`__,
-  and if you still run into troubles after that, please reach out to us
   as described in the {doc}\ ``Getting Help FAQs </faq/help>``.



===================================================
/. 🚀 docs/source/faq/internals.md
===================================================

Where can I learn more about Manim's internal structure?
-------------------------------------------------------

Efforts to document the internal structure of Manim is ongoing on our
[wiki](https://github.com/ManimCommunity/manim/wiki/Developer-documentation-(WIP)).

Keep in mind that since this is a work in progress, the information you find may be
incomplete, outdated or even wrong. Still, it should serve as a good starting point.
The wiki is open for anyone to edit, feel free to add information or even questions
directly on the wiki pages.


===================================================
/. 🚀 docs/source/faq/opengl.md
===================================================

FAQ: OpenGL rendering
-----------------------

## Are there any resources on how the OpenGL renderer in the community maintained version can be used?

Yes. Unfortunately, at this point, the official online documentation does
not contain the relevant base classes like `OpenGLMobject` and `OpenGLVMobject`
or specific OpenGL classes like `OpenGLSurface`, but documentation for some of
them is available in form of docstrings
[in the source code](https://github.com/ManimCommunity/manim/tree/main/manim/mobject/opengl).

Furthermore, [this user guide by *aquabeam*](https://www.aquabeam.me/manim/opengl_guide/)
can be helpful to get started using the OpenGL renderer.

---

## I am trying to run an interactive scene with `--renderer=opengl` and `Scene.interactive_embed`, but an error (`sqlite3.ProgrammingError`) is raised. How can I fix this?

This seems to be an issue with a recent IPython release, 
in our experience it helps to downgrade the installed `IPython`
package to `8.0.1`: `pip install IPython==8.0.1`.


===================================================
/. 🚀 docs/source/reference.rst
===================================================

Reference Manual
================

This reference manual details modules, functions, and variables included in
Manim, describing what they are and what they do.  For learning how to use
Manim, see :doc:`tutorials/index`.  For a list of changes since the last release, see
the :doc:`changelog`.

.. warning:: The pages linked to here are currently a work in progress.

Inheritance Graphs
------------------

Animations
**********

.. inheritance-diagram::
   manim.animation.animation
   manim.animation.changing
   manim.animation.composition
   manim.animation.creation
   manim.animation.fading
   manim.animation.growing
   manim.animation.indication
   manim.animation.movement
   manim.animation.numbers
   manim.animation.rotation
   manim.animation.specialized
   manim.animation.speedmodifier
   manim.animation.transform
   manim.animation.transform_matching_parts
   manim.animation.updaters.mobject_update_utils
   manim.animation.updaters.update
   :parts: 1
   :top-classes: manim.animation.animation.Animation

Cameras
*******

.. inheritance-diagram::
   manim.camera.camera
   manim.camera.mapping_camera
   manim.camera.moving_camera
   manim.camera.multi_camera
   manim.camera.three_d_camera
   :parts: 1
   :top-classes: manim.camera.camera.Camera, manim.mobject.mobject.Mobject

Mobjects
********

.. inheritance-diagram::
   manim.mobject.frame
   manim.mobject.geometry.arc
   manim.mobject.geometry.boolean_ops
   manim.mobject.geometry.line
   manim.mobject.geometry.polygram
   manim.mobject.geometry.shape_matchers
   manim.mobject.geometry.tips
   manim.mobject.graph
   manim.mobject.graphing.coordinate_systems
   manim.mobject.graphing.functions
   manim.mobject.graphing.number_line
   manim.mobject.graphing.probability
   manim.mobject.graphing.scale
   manim.mobject.logo
   manim.mobject.matrix
   manim.mobject.mobject
   manim.mobject.table
   manim.mobject.three_d.polyhedra
   manim.mobject.three_d.three_d_utils
   manim.mobject.three_d.three_dimensions
   manim.mobject.svg.brace
   manim.mobject.svg.svg_mobject
   manim.mobject.text.code_mobject
   manim.mobject.text.numbers
   manim.mobject.text.tex_mobject
   manim.mobject.text.text_mobject
   manim.mobject.types.image_mobject
   manim.mobject.types.point_cloud_mobject
   manim.mobject.types.vectorized_mobject
   manim.mobject.value_tracker
   manim.mobject.vector_field
   :parts: 1
   :top-classes: manim.mobject.mobject.Mobject

Scenes
******

.. inheritance-diagram::
   manim.scene.moving_camera_scene
   manim.scene.scene
   manim.scene.scene_file_writer
   manim.scene.three_d_scene
   manim.scene.vector_space_scene
   manim.scene.zoomed_scene
   :parts: 1
   :top-classes: manim.scene.scene.Scene, manim.scene.scene.RerunSceneHandler


Module Index
------------

.. toctree::
   :maxdepth: 3

   reference_index/animations
   reference_index/cameras
   reference_index/configuration
   reference_index/mobjects
   reference_index/scenes
   reference_index/utilities_misc


===================================================
/. 🚀 docs/source/reference_index/animations.rst
===================================================

Animations
==========

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~animation.animation
   ~animation.changing
   ~animation.composition
   ~animation.creation
   ~animation.fading
   ~animation.growing
   ~animation.indication
   ~animation.movement
   ~animation.numbers
   ~animation.rotation
   ~animation.specialized
   ~animation.speedmodifier
   ~animation.transform
   ~animation.transform_matching_parts
   ~animation.updaters


===================================================
/. 🚀 docs/source/reference_index/cameras.rst
===================================================

Cameras
=======

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~camera.camera
   ~camera.mapping_camera
   ~camera.moving_camera
   ~camera.multi_camera
   ~camera.three_d_camera


===================================================
/. 🚀 docs/source/reference_index/configuration.rst
===================================================

Configuration
=============

Module Index
------------

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~_config
   ~_config.utils
   ~_config.logger_utils


===================================================
/. 🚀 docs/source/reference_index/mobjects.rst
===================================================

Mobjects
========

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~mobject.frame
   ~mobject.geometry
   ~mobject.graph
   ~mobject.graphing
   ~mobject.logo
   ~mobject.matrix
   ~mobject.mobject
   ~mobject.svg
   ~mobject.table
   ~mobject.text
   ~mobject.three_d
   ~mobject.types
   ~mobject.utils
   ~mobject.value_tracker
   ~mobject.vector_field


===================================================
/. 🚀 docs/source/reference_index/scenes.rst
===================================================

Scenes
======

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~scene.moving_camera_scene
   ~scene.section
   ~scene.scene
   ~scene.scene_file_writer
   ~scene.three_d_scene
   ~scene.vector_space_scene
   ~scene.zoomed_scene


===================================================
/. 🚀 docs/source/reference_index/utilities_misc.rst
===================================================

Utilities and other modules
===========================

Module Index
------------

.. currentmodule:: manim

.. autosummary::
   :toctree: ../reference

   ~utils.bezier
   ~utils.color
   ~utils.commands
   ~utils.config_ops
   constants
   ~utils.debug
   ~utils.deprecation
   ~utils.docbuild
   ~utils.hashing
   ~utils.images
   ~utils.ipython_magic
   ~utils.iterables
   ~utils.paths
   ~utils.rate_functions
   ~utils.simple_functions
   ~utils.sounds
   ~utils.space_ops
   ~utils.testing
   ~utils.tex
   ~utils.tex_file_writing
   ~utils.tex_templates
   typing


===================================================
/. 🚀 docs/source/plugins.rst
===================================================

.. _plugins: 

=======
Plugins
=======

Plugins are features that extend Manim's core functionality. Since Manim is
extensible and not everything belongs in its core, we'll go over how to
install, use, and create your own plugins.

.. note::

    The standard naming convention for plugins is to prefix the plugin with
    ``manim-``. This makes them easy for users to find on package
    repositories such as PyPI.

.. WARNING::

    The plugin feature is new and under active development. Expect updates
    for the best practices on installing, using, and creating plugins; as
    well as new subcommands/flags for ``manim plugins`` 

.. tip::

    See https://plugins.manim.community/ for the list of plugins available.

Installing Plugins
******************
Plugins can be easily installed via the ``pip`` command: 

.. code-block:: bash

    pip install manim-*

After installing a plugin, you may use the ``manim plugins`` command to list
your available plugins, see the following help output: 

.. code-block:: bash

    manim plugins -h
    Usage: manim plugins [OPTIONS]

      Manages Manim plugins.

    Options: 
    -l, --list  List available plugins
    -h, --help  Show this message and exit.

    Made with <3 by Manim Community developers.

You can list plugins as such: 

.. code-block:: bash

    manim plugins -l
    Plugins: 
    • manim_plugintemplate

Using Plugins in Projects
*************************
For enabling a plugin ``manim.cfg`` or command line parameters should be used.

.. important::

    The plugins should be module name of the plugin and not PyPi name.

Enabling plugins through ``manim.cfg`` 

.. code-block:: ini

    [CLI]
    plugins = manim_rubikscube

For specifying multiple plugins, comma-separated values must be used.

.. code-block:: ini

    [CLI]
    plugins = manim_rubikscube, manim_plugintemplate

Creating Plugins
****************

Plugins are intended to extend Manim's core functionality. If you aren't sure
whether a feature should be included in Manim's core, feel free to ask over
on the `Discord server <https://www.manim.community/discord/>`_. Visit
`manim-plugintemplate <https://pypi.org/project/manim-plugintemplate/>`_
on PyPI.org which serves as an in-depth tutorial for creating plugins.

.. code-block:: bash

    pip install manim-plugintemplate

The only requirement of manim plugins is that they specify an entry point
with the group, ``"manim.plugins"``. This allows Manim to discover plugins
available in the user's environment. Everything regarding the plugin's
directory structure, build system, and naming are completely up to your
discretion as an author. The aforementioned template plugin is only a model
using Poetry since this is the build system Manim uses. The plugin's `entry
point <https://packaging.python.org/specifications/entry-points/>`_ can be
specified in Poetry as: 

.. code-block:: toml

    [tool.poetry.plugins."manim.plugins"]
    "name" = "object_reference"

.. versionremoved:: 0.19.0

    Plugins should be imported explicitly to be usable in user code. The plugin
    system will probably be refactored in the future to provide a more structured
    interface.

A note on Renderer Compatibility
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Depending on which renderer is currently active, custom mobjects
created in your plugin might want to behave differently as the
corresponding mobject base classes are (unfortunately) not fully
compatible.

The currently active renderer can be queried by checking the value
of ``manim.config.renderer``. All possible renderer types are given
by :class:`.constants.RendererType`. The module :mod:`.manim.mobject.utils`
contains utility functions that return the base class for the currently
active renderer.

A simple form of renderer compatibility (by hot-swapping the class
inheritance chain) for Mobjects directly inheriting from
:class:`.Mobject` or :class:`.VMobject` can be achieved by using the
:class:`.mobject.opengl.opengl_compatibility.ConvertToOpenGL` metaclass.


===================================================
/. 🚀 docs/source/changelog.rst
===================================================

#########
Changelog
#########


.. toctree::

    changelog/0.18.0-changelog
    changelog/0.17.3-changelog
    changelog/0.17.2-changelog
    changelog/0.17.1-changelog
    changelog/0.17.0-changelog
    changelog/0.16.0-changelog
    changelog/0.15.2-changelog
    changelog/0.15.1-changelog
    changelog/0.15.0-changelog
    changelog/0.14.0-changelog
    changelog/0.13.1-changelog
    changelog/0.13.0-changelog
    changelog/0.12.0-changelog
    changelog/0.11.0-changelog
    changelog/0.10.0-changelog
    changelog/0.9.0-changelog
    changelog/0.8.0-changelog
    changelog/0.7.0-changelog
    changelog/0.6.0-changelog
    changelog/0.5.0-changelog
    changelog/0.4.0-changelog
    changelog/0.3.0-changelog
    changelog/0.2.0-changelog
    changelog/0.1.1-changelog
    changelog/0.1.0-changelog


===================================================
/. 🚀 docs/source/changelog/0.18.0-changelog.rst
===================================================

*******
v0.18.0
*******

:Date: November 11, 2023

Contributors
============

A total of 41 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Abulafia +
* Adhyyan Sekhsaria +
* Adrien Ludwig +
* Alex Kempen +
* Andres Berejnoi +
* Anousheh Moonen +
* Benjamin Hackl
* Francisco Manríquez Novoa
* Harald Schilly +
* Immanuel-Alvaro-Bhirawa +
* Jason Grace +
* Jason Villanueva
* Jinchu Li
* John Lynch +
* Jérome Eertmans
* Matt Turner +
* Narahari Rao +
* Naveen M K
* Nikhil Iyer +
* Ron Li +
* Sujal Singh +
* Tristan Schulz
* Uwe Zimmermann +
* Václav Blažej +
* Zachary Winkeler +


The patches included in this release have been reviewed by
the following contributors.

* Alex Lembcke
* Andres Berejnoi
* Axel
* Benjamin Hackl
* Francisco Manríquez Novoa
* Immanuel-Alvaro-Bhirawa
* Jan-Hendrik Müller
* Jason Grace
* Jason Villanueva
* Jinchu Li
* John Lynch
* Jérome Eertmans
* Kevin Lubick
* Narahari Rao
* Naveen M K
* NotWearingPants
* SsNiPeR1
* TheMathematicFanatic
* Tristan Schulz
* Uwe Zimmermann
* Viicos
* icedcoffeeee

Pull requests merged
====================

A total of 59 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`3020`: Rewrote Manim's color system
   This change removed the ``colour`` library as a dependency
   of Manim and replaced the internal handling of colors with
   the newly added :class:`.ManimColor`. This also adds hundreds
   of new predefined colors, see :mod:`.utils.color` for more
   details.
   This should only be a breaking change if you have interacted
   directly with the ``colour`` module before. The general interface
   has been kept stable.


Highlights
----------

* :pr:`3299`: Added new ``manim checkhealth`` CLI subcommand
   This adds a new command line interface subcommand which can be used to check
   whether a local installation of Manim has been configured correctly, and all
   required (and optional) dependencies are available. To try it, run it via
   ``manim checkhealth`` or ``python -m manim checkhealth``.

* :pr:`3427`: New feature: rendered examples in documentation can now be run directly via binder
   This adds a "Make interactive" button below the examples in our documentation
   that establishes a connection to binder such that examples can be modified and
   rerendered directly from your browser.

* :pr:`3086`: Introduced a new module :mod:`.typing` for type hints
   This also adds various type hints to integral parts of the code base.

* :pr:`3322`: Implemented auto-removal of auxiliary LaTeX files, enabled by default
   This automatically removes auxiliary files creating during the compilation of
   LaTeX documents like ``.aux`` or ``.dvi`` files. This behavior can be controlled
   via the newly introduced ``no_latex_cleanup`` config key (``False`` by default).
   On the command line, the autoremoval can be disabled via the ``--no_latex_cleanup`` 
   CLI flag.

* :pr:`3395`: Added support for Python 3.12

New features
------------

* :pr:`3361`: Added three new rate functions
    This adds the rate functions :func:`.smoothstep`, :func:`.smootherstep`,
    :func:`.smoothererstep` based on the SmoothStep sigmoid functions.

* :pr:`3264`: Added new mobjects :class:`.LabeledLine` and :class:`.LabeledArrow` 


Enhancements
------------

* :pr:`3190`: Made :class:`.CurvesAsSubmobjects` mobjects compatible with :meth:`.input_to_graph_point` 

* :pr:`3226`: Avoid using a mobject as a default argument of :class:`.ArcBrace` 

* :pr:`3366`: Added spacing between values and unit in :class:`.DecimalNumber`
   This adds the new keyword argument ``unit_buff_per_font_unit`` (default: 0, for
   backwards compatibility). Setting it to some positive number creates additional
   space between the numeric value and the displayed unit.

Fixed bugs
----------

* :pr:`3205`: Fixed type hint of ``angle`` in :class:`.Arc` 

* :pr:`3210`: Fixed :class:`.DecimalNumber` with ``show_ellipsis=True`` with the OpenGL renderer

* :pr:`3211`: Fixed display issues with custom labels for :class:`.Axes` with the OpenGL renderer

* :pr:`3298`: Fixed expand animation for :class:`.ManimBanner` 

* :pr:`3306`: Fixed IPython terminal history and embedded shell instantiation for scenes using :meth:`.Scene.interactive_embed` 

* :pr:`3315`: Fixed issue with parameter types in :meth:`.Scene.add_subcaption` 

* :pr:`3423`: Fixed incorrect submobject count of multi-part :class:`.Tex` mobjects
   This resolves various issues where formulas were not displayed completely,
   like it was the case with ``MathTex("1", "^{", "0")``.

* :pr:`3284`: Fixed ``LinearTransformationSceneExample`` in Jupyter notebooks

* :pr:`3302`: Fixed typo in comparison in :meth:`.OpenGLVMobject.interpolate` 

* :pr:`3340`: Fixed incorrect computation of bounding box for rotated :class:`.ImageMobject` 

* :pr:`3343`: Fixed return value of :meth:`.TexTemplate.add_to_preamble` and :meth:`.TexTemplate.add_to_document` 

* :pr:`3282`: Ensure that :meth:`.ArrowVectorField.get_vector` does not modify the passed inputs

* :pr:`3392`: Fixed behavior of elongated tick lines for :class:`.NumberLine` 

* :pr:`3430`: Fixed CSV reader adding empty lists in rendering summary during documentation build

* :pr:`3404`: Properly raise an exception on empty inputs to :class:`.AddTextLetterByLetter` 


Documentation-related changes
-----------------------------

* :pr:`3219`: Enabled social cards for links to documentation

* :pr:`3274`: Replaced incorrect mentions of Python 3.7 as the minimally required version

* :pr:`3297`: Improved arrow tip sowcase example for :class:`.ArrowTip` 

* :pr:`3312`: Added documentation for :func:`.always_redraw` 

* :pr:`3218`: Improved grammar in the :doc:`deep dive guide </guides/deep_dive>` 

* :pr:`3251`: Add LaTeX installation instructions for Fedora

* :pr:`3290`: Updated required dependencies for MacOS installations

* :pr:`3325`: Added documentation for functions in :mod:`.mobject_update_utils`
   This adds docstrings and typehints to :func:`.always_rotate`,
   :func:`.always_shift`, :func:`.turn_animation_into_updater` 

* :pr:`3353`: Added documentation for :meth:`.Mobject.center` 

* :pr:`3355`: Temporarily enabled ``htmlzip`` build on ReadTheDocs

* :pr:`3377`: Fixed a typo in the :doc:`deep dive guide </guides/deep_dive>` 

* :pr:`3389`: Removed superfluous curly braces in a LaTeX expression

* :pr:`3417`: Replaced ``htmlzip`` ReadTheDocs build with workflow attaching downloadable documentation to GitHub releases


Changes concerning the testing system
-------------------------------------

* :pr:`3416`: Fixed tests to run on Cairo 1.18.0

* :pr:`3257`: Fix a configuration error concerning poetry

* :pr:`3419`: Fixed caching of Cairo builds on CI runners


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`3229`: Made docbuild errors easier to debug and fixed error from changed exception class

* :pr:`3231`: Fixed errors reported by ``flake8`` 

* :pr:`3232`: Upgrade ReadTheDocs build environment to use newer image

* :pr:`3286`: Optimized :meth:`.Axes.coords_to_point` 

* :pr:`3224`: Replace final few occurrences of ``os.path`` by ``pathlib.Path`` 

* :pr:`3236`: Return self in :meth:`.AbstractImageMobject.set_resampling_algorithm` 

* :pr:`3253`: Bump tornado from 6.3.1 to 6.3.2

* :pr:`3272`: Bump docker/build-push-action from 3 to 4

* :pr:`3287`: Bump cryptography from 41.0.1 to 41.0.2

* :pr:`3350`: Added missing dependency ``typing-extensions`` 

* :pr:`3431`: Bump teatimeguest/setup-texlive-action from 2 to 3

* :pr:`3433`: Bump dependencies

* :pr:`3399`: Updated several dependencies

* :pr:`3397`: Several GitHub actions updates

* :pr:`3405`: Updated manimpango version to fix error regarding type strictness

* :pr:`3421`: Improved order of input checks when creating a tree graph


New releases
------------

* :pr:`3439`: Prepared new release: v0.18.0


===================================================
/. 🚀 docs/source/changelog/0.17.3-changelog.rst
===================================================

*******
v0.17.3
*******

:Date: April 06, 2023

Contributors
============

A total of 35 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Benjamin Hackl
* DegrangeM +
* Elyanah Aco +
* Francisco Manríquez Novoa
* Fredrik Lundström +
* Frédéric Crozatier
* Ikko Eltociear Ashimine +
* ItIsJoeyG +
* JinchuLi2002 +
* Kevin Lubick
* KingAndCross +
* M. A. Ali +
* Matthew Lee +
* Max Coplan +
* Naveen M K
* NotWearingPants
* Oscar Rangel +
* Papierkorb2292 +
* Phoenix2157 +
* Tristan Schulz
* ciobaca +
* coreyp1 +
* davidot +
* icedcoffeeee
* karpfediem +
* vahndi


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Fredrik Lundström
* Frédéric Crozatier
* Hugues Devimeux
* Kevin Lubick
* KingAndCross
* Matthew Lee
* Naveen M K
* Tristan Schulz
* coreyp1
* davidot
* strager

Pull requests merged
====================

A total of 42 pull requests were merged for this release.

Deprecated classes and functions
--------------------------------

* :pr:`3103`: Removed deprecated function ``OpenGLSurface.set_fill_by_value`` 


New features
------------

* :pr:`2974`: Added :class:`.DiGraph`, a mobject representing directed graphs

* :pr:`3042`: Added :meth:`.Scene.replace` and use in :class:`.ReplacementTransform` 

* :pr:`3155`: Added support for individualized radius values in :meth:`.Polygram.round_corners` 

* :pr:`3159`: Added :meth:`.set_opacity_by_tex` method for setting the opacity of parts of Tex mobjects

* :pr:`3201`: New tip shape :class:`.StealthTip`, allow specifying tip shape of :class:`.NumberLine` 


Enhancements
------------

* :pr:`3046`: Add warning if font is not found for Text, Code, and MarkupText

* :pr:`3083`: Minor performance improvement in :mod:`.bezier` with preallocating array

* :pr:`3092`: Improved :meth:`.Mobject.add` performance by checking for redundancy only once

* :pr:`3134`: Performance: Store color data of ``OpenGLSurface`` to prevent OpenGL embed lag

* :pr:`3180`: Performance: Speed up width/height/depth calculations by reducing copying

* :pr:`3181`: Improved creation time for large :class:`.Text` mobjects

* :pr:`3182`: Reduce memory allocations when building :class:`.SVGMobject` 

* :pr:`3191`: Fixed OpenGL rendering in named threads


Fixed bugs
----------

* :pr:`3015`: Fixed bug with ``label_constructor`` in :meth:`.NumberLine.add_labels` 

* :pr:`3095`: Fixed ``get_axis_labels`` for :class:`.Axes` and :class:`.ThreeDAxes` 

* :pr:`3106`: Fixed ignored ``depth_test`` argument for ``OpenGLVMobjects`` 

* :pr:`3149`: Allow to use ``call_updater=True`` in :meth:`.Mobject.add_updater` with non-timebased updaters too

* :pr:`3152`: Fixed behavior of :class:`.Wait` and :meth:`.Scene.wait` with specified ``stop_condition`` 

* :pr:`3163`: Fixed :class:`.BraceLabel` not passing additional keyword arguments to :class:`.Brace` 

* :pr:`3195`: Fixed :class:`.Axes` scaling for :meth:`.plot_implicit_curve` 


Documentation-related changes
-----------------------------

* :pr:`3105`: Converted types specified in docstrings to proper type hints in :mod:`.three_dimensions` 

* :pr:`3108`: Clarified documentation for ``--resolution`` command line flag

* :pr:`3109`: Clean-up, type-hints and documentation for :mod:`.three_dimensions` 

* :pr:`3124`: Fixed docstring of :meth:`.ThreeDCamera.get_value_trackers` 

* :pr:`3126`: Fixed dead links to troubleshooting page

* :pr:`3137`: Fixed example using ``reverse=True`` with :class:`.Write` 

* :pr:`3160`: Fixed a typo

* :pr:`3189`: Corrected the hinted return type for :func:`angle_between_vectors` 

* :pr:`3199`: Updated ``winget`` command for installing MiKTeX in documentation

* :pr:`3204`: Fixed docstring formatting of :meth:`.Scene.replace` and improved its error handling


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`3144`: Fixed typo in ``stripUntranslatable.awk`` 

* :pr:`3154`: Bump ipython from 8.7.0 to 8.10.0

* :pr:`3156`: CI: Remove actions using self-hosted runners

* :pr:`3164`: Bump markdown-it-py from 2.1.0 to 2.2.0

* :pr:`3165`: Removed deprecated keyword argument in :meth:`.Mobject.align_to` 

* :pr:`3166`: Made :class:`.ArrowTriangleTip`, :class:`.ArrowTriangleFilledTip` available to module namespace

* :pr:`3179`: Fixed deprecation warning in :class:`.ParametricFunction` with ``use_vectorized=True`` 

* :pr:`3186`: Updated extlinks to work with latest version of Sphinx

* :pr:`3196`: CI: updated PATH for recent changed in TinyTex

* :pr:`3200`: Made import from ``moderngl`` compatible with more recent versions


New releases
------------

* :pr:`3198`: Prepare new release: v0.17.3


===================================================
/. 🚀 docs/source/changelog/0.17.2-changelog.rst
===================================================

*******
v0.17.2
*******

:Date: December 26, 2022

Contributors
============

A total of 5 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* CaftBotti +
* Tristan Schulz
* lgtm-com[bot] +


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Naveen M K
* Tristan Schulz

Pull requests merged
====================

A total of 7 pull requests were merged for this release.

Fixed bugs
----------

* :pr:`3089`: Fixed OpenGL mobjects like :class:`.Surface` by reordering init calls


Documentation-related changes
-----------------------------

* :pr:`3073`: Fixed typo: "Whetherer" to "Whether"

* :pr:`3074`: Fixed typo in a comment


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`3024`: Add CodeQL workflow for GitHub code scanning

* :pr:`3079`: Updated CI syntax for runner version >= 2.298.2

* :pr:`3084`: Properly setup CodeQL


New releases
------------

* :pr:`3090`: Prepared new Hotfix Release: ``v0.17.2`` 


===================================================
/. 🚀 docs/source/changelog/0.17.1-changelog.rst
===================================================

*******
v0.17.1
*******

:Date: December 08, 2022

Contributors
============

A total of 5 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Benjamin Hackl
* Naveen M K
* Onur Solmaz


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Naveen M K
* Sparsh Goenka

Pull requests merged
====================

A total of 6 pull requests were merged for this release.

Fixed bugs
----------

* :pr:`3061`: Always expand file paths using ``/`` when calling LaTeX

* :pr:`3062`: Added Unicode encoding in :meth:`.Scene.add_subcaption` 


Documentation-related changes
-----------------------------

* :pr:`2953`: Added documentation for lagged animations in :mod:`.animation.composition` 

Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`3064`: Increased minimal required version of ``svgelements`` 

* :pr:`3066`: Increased minimal version of ``pytest`` 


New releases
------------

* :pr:`3065`: Prepared new release: ``v0.17.1`` 


===================================================
/. 🚀 docs/source/changelog/0.17.0-changelog.rst
===================================================

*******
v0.17.0
*******

:Date: December 02, 2022

Contributors
============

A total of 32 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Alexander Vázquez
* Benjamin Hackl
* Duc Phat +
* Hugues Devimeux
* Ievgen Pyrogov +
* Isaac Beh +
* Jeff Hanke +
* John Hammond +
* Jérome Eertmans +
* Kevin Lubick
* Kian-Meng Ang +
* Naveen M K
* Nick Skriloff +
* NotWearingPants
* Onur Solmaz +
* OpenRefactory, Inc +
* Owen Samuel +
* Pavel Zwerschke +
* Sparsh Goenka
* Taxo Rubio
* ad-chaos +
* fcrozatier
* mostly documentation +
* vahndi +


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Darylgolden
* Hugues Devimeux
* Jan-Hendrik Müller
* Kevin Lubick
* Mohammed Belgoumri
* Naveen M K
* NotWearingPants
* Raghav Goel
* Sparsh Goenka
* Tristan Schulz
* ad-chaos
* friedkeenan

Pull requests merged
====================

A total of 63 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`2898`: Ported improved implementation of :class:`.SVGMobject` from 3b1b/manim
   The implementation of :class:`.SVGMobject` is completely changed in this release.
   Manim now uses the Python library ``svgelements`` to parse SVGs, instead of trying
   to do it itself. The former class for SVG path objects, ``SVGPathMobject`` has been
   replaced (without deprecation) with :class:`.VMobjectFromSVGPath`.

   If you need to create a mobject from an SVG path string, you can do so via::

        import svgelements as se
        my_path_mobject = VMobjectFromSVGPath(se.Path(my_path_string))

   The unused class ``TexSymbol`` has been removed. The modules
   ``manim.mobject.svg.svg_path`` and ``manim.mobject.svg.style_utils`` became
   superfluous due to the rework and have been removed.

* :pr:`3030`: Added support for Python 3.11, dropped support for Python 3.7


Highlights
----------

* :pr:`3049`: Added thematic guide for the ``manim-voiceover`` plugin
   This new :doc:`thematic guide </guides/add_voiceovers>` provides a brief
   introduction to ``manim-voiceover``, a plugin that helps to add voiceovers
   to your manimations. Supports both working with your own voice as well as
   synthetically generated voices.


New features
------------

* :pr:`2883`: Added animation :class:`.RemoveTextLetterByLetter` 

* :pr:`3016`: Implemented :class:`.LineJointTypes` for both Cairo and OpenGL renderer

* :pr:`3017`: Replaced renderer strings with :class:`.RendererType` enum entries


Enhancements
------------

* :pr:`2927`: Allowed ``networkx`` to return 3D layouts when passing ``dim=3`` in the ``layout_config`` of a :class:`.Graph` 

* :pr:`3014`: Enabled code completion for :meth:`.Mobject.animate` for some IDEs
   Uses a Union of the existing Generic `Mobject` Type `T` and `_Animation Builder` as the declared return type from `Mobject.animate` to improve code completion.

Fixed bugs
----------

* :pr:`2846`: Prevent :class:`.TransformMatchingTex` from crashing when there is nothing to fade

* :pr:`2885`: Always expand user when validating file-paths

* :pr:`2888`: Fixed bug with propagation of ``tex_template`` value when using ``tempconfig`` 

* :pr:`2895`: Fixed broken :class:`.ShowPassingFlashWithThinningStrokeWidth` 

* :pr:`2920`: Fixed alignment of faded lines when passing ``faded_line_ratio`` to :class:`.NumberPlane` 

* :pr:`2977`: Allow rendering of empty text strings

* :pr:`2992`: Fixed ``CLI.tex_template_file`` config file setting

* :pr:`3003`: Fixed setting ``run_time`` of :class:`.Succession` after creating the animation object

* :pr:`3019`: Fixed rendering SVG paths with multiple move commands


Documentation-related changes
-----------------------------

* :pr:`2881`: Fixed small typo in deep dive guide

* :pr:`2886`: Added docstring to and fixed type hint of :func:`.get_winding_number` 

* :pr:`2892`: Corrected error in the ``PolygonOnAxes`` example

* :pr:`2903`: Fixed minor grammar issues in :doc:`/faq/general` 

* :pr:`2904`: Fixed formatting and grammar issues in :doc:`/contributing/development` 

* :pr:`2911`: Disabled autoplay for ``SoundExample`` in documentation

* :pr:`2914`: Added conda installation instructions

* :pr:`2915`: Added documentation to :mod:`.three_dimensions` 

* :pr:`2919`: Corrected parameters and enhanced the description of :meth:`.ImageMobject.interpolate_color` 

* :pr:`2932`: Fixed whitespace formatting issue

* :pr:`2933`: Improved answer to the "no scenes in this module" error

* :pr:`2936`: Added installation instructions for Windows via ``winget`` 

* :pr:`2962`: Disabled "Edit on GitHub" button in documentation

* :pr:`2978`: Added documentation and example for :class:`.CyclicReplace` 

* :pr:`3001`: Added FAQ entry regarding failed ``manimpango`` build

* :pr:`3004`: Fixed docbuild warnings

* :pr:`3018`: Follow-up to :pr:`2988` -- fixes and improvements to some docstrings

* :pr:`3022`: Corrected type hint in :meth:`Axes.coords_to_point` 

* :pr:`3035`: Include latex install instructions on ubuntu

* :pr:`3044`: Added Debian dependencies required for pycairo and manimpango


Changes concerning the testing system
-------------------------------------

* :pr:`2893`: Improved performance of ``test_threed.py`` 

* :pr:`2981`: Implemented fallback save behavior for ``pytest --show_diff`` 

* :pr:`2982`: Rewrote unstable tests for :mod:`.text_mobject` to be non-graphical

* :pr:`2991`: Migrated ``os.path`` to ``pathlib.Path`` in tests

* :pr:`3053`: Added threshold for pixel value errors in frame comparison tests


Changes to our development infrastructure
-----------------------------------------

* :pr:`2925`: CI (test-arm): Updated python version to ``3.10.6`` 

* :pr:`2963`: CI (test-arm): Always select the correct python version

* :pr:`3029`: CI: Updated actions version and added dependabot config

* :pr:`3045`: Updated python-opengl -> python3-opengl for Ubuntu CI task


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2872`: Add ``extract_frames.py`` utility script to help visualize test control data

* :pr:`2877`: Fixed binder launch problem by adding missing optional ``notebook`` dependency

* :pr:`2887`: Removed empty i18n files that caused filename clashes

* :pr:`2931`: Updated ``mapbox-earcut`` 

* :pr:`2938`: Suggested fixes by iCR, OpenRefactory, Inc.

* :pr:`2954`: Fixed click version string in ``pyproject.toml`` 

* :pr:`2958`: Fix missing stub packages for mypy

* :pr:`2975`: Fixed broken links in README

* :pr:`2980`: Migrate more ``os.path`` to ``pathlib.Path`` 

* :pr:`2983`: Fixed Windows CI Pipeline

* :pr:`2988`: Converted all types of parameters in docstrings to proper type annotations

* :pr:`2994`: Fixed segmentation faults from doctests under Python 3.10

* :pr:`2995`: Added encoding to ``open`` in :mod:`.utils.text_file_writing` 

* :pr:`3032`: Bump jupyter-core from 4.11.1 to 4.11.2

* :pr:`3033`: Bump pillow from 9.2.0 to 9.3.0

* :pr:`3054`: Removed unused ``GraphicalUnitTester`` 


New releases
------------

* :pr:`3023`: Prepared new release: v0.17.0


===================================================
/. 🚀 docs/source/changelog/0.16.0-changelog.rst
===================================================

*******
v0.16.0
*******

:Date: July 13, 2022

Contributors
============

A total of 44 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Baroudi Aymen +
* Benjamin Hackl
* Charalampos Georgiou +
* Cindy Park +
* Ejar +
* Francesco Frassinelli +
* Francisco Manríquez Novoa +
* Jacob Evan Shreve +
* Jaime Santos +
* Jonathan Alpert
* Joshua Mankelow +
* Kevin Lubick +
* Laith Bahodi
* Lingren Kong +
* Logen +
* Naveen M K
* Noam Zaks
* Pedro Lamkowski +
* Raghav Goel
* Simeon Widdis
* Sparsh Goenka
* TornaxO7 +
* Tristan Schulz +
* WillSoltas
* ad_chaos
* conor-oneill-2 +
* fcrozatier +
* mooncaker816 +
* niklebedenko +
* nyabkun +
* quark67


The patches included in this release have been reviewed by
the following contributors.

* Alex Lembcke
* Benjamin Hackl
* Darylgolden
* Francesco Frassinelli
* Francisco Manríquez Novoa
* Gianluca Gippetto
* Jan-Hendrik Müller
* Jonathan Alpert
* Kevin Lubick
* Laith Bahodi
* Naveen M K
* Pedro Lamkowski
* Philipp Imhof
* Raghav Goel
* Ryan McCauley
* Sparsh Goenka
* TornaxO7
* Tristan Schulz
* ad_chaos
* hickmott99

Pull requests merged
====================

A total of 56 pull requests were merged for this release.

Highlights
----------

* :pr:`2550`: New thematic guide: a deep dive into the internals of the library
   This new :doc:`thematic guide </guides/deep_dive>` aims to be a comprehensive walkthrough
   describing all the things that Manim does when you run it to produce a video.

* :pr:`2732`: Improved overall structure of deployed documentation; added a dedicated :doc:`FAQ section </faq/index>` 

* :pr:`2749`: Added :class:`.ChangeSpeed`, an animation wrapper that allows to smoothly change the speed at which an animation is played
   The speed of any animation can be changed by wrapping the animation with :class:`.ChangeSpeed` and passing a dictionary as ``speedinfo`` whose keys are the relative animation run time stamps and whose values are the absolute speed factors; e.g., ``{0.5: 2, 0.75: 0.25}`` smoothly speeds up the animation by a factor of 2 once it has been completed to 50%, and then it is smoothly slowed down to 1/4 of the default run speed after 75% of the animation are completed. The ``run_time`` of the animation will be adjusted to match the changed play speed.

   It is also possible to add time-based updaters that respect the change in speed, use the auxiliary :meth:`.ChangeSpeed.add_updater` method to do so.

New features
------------

* :pr:`2667`: Made FFmpeg executable path configurable

* :pr:`2739`: Added vectorized plotting functionality via keyword argument ``use_vectorized`` to improve performance


Enhancements
------------

* :pr:`2186`: Enabled filling color by value for :class:`.OpenGLSurface`, replaced ``colors`` keyword argument of :meth:`.Surface.set_fill_by_value`  with ``colorscale`` 

* :pr:`2288`: Added warning when attempting to add same mobject as child twice

* :pr:`2707`: Fixed missing ``get_nth_curve_length_pieces`` method of :class:`.OpenGLVMobject`
   - Removed duplicate definition of ``get_curve_functions_with_lengths`` in ``OpenGLVMobject`` 
   - Added definition of ``get_nth_curve_length_pieces`` to ``OpenGLVMobject`` 

* :pr:`2709`: Improved the look of the brackets of :class:`.Matrix` 

* :pr:`2714`: Fixed :meth:`.OpenGLVMobject.pointwise_become_partial` to improve stroke rendering

* :pr:`2727`: Slight performance improvement for :class:`.ArrowVectorField` and Bézier curve computation

* :pr:`2728`: Added :meth:`.VectorField.fit_to_coordinate_system` to fit a vector field to a given coordinate system

* :pr:`2730`: Added note to let users find documentation of default CLI subcommand easier

* :pr:`2746`: Installed ghostscript in the docker image

* :pr:`2841`: Added :func:`.split_quadratic_bezier` and :func:`.subdivide_quadratic_bezier` 

* :pr:`2842`: CLI: Moved functionality from ``manim new`` to ``manim init`` and added deprecation warning for ``manim new`` 

* :pr:`2866`: Reorganize test files to match library module structure


Fixed bugs
----------

* :pr:`2567`: Use tempconfig for every scene render

* :pr:`2638`: Fixed :meth:`BarChart.change_bar_values`  not updating when height is 0

* :pr:`2661`: Fixed tip resize functionality for :class:`.Axes` to match documentation

* :pr:`2703`: Default to utf-8 when reading files in :class:`.Code` 

* :pr:`2721`: Fixed bad text slicing for lines in :class:`.Paragraph` 

* :pr:`2725`: Fixed wrong indentation in :class:`.Code` 

* :pr:`2734`: Fixed OpenGL segfaults when running :meth:`.Scene.play` or :meth:`.Scene.wait` in interactive mode

* :pr:`2753`: Fixed multiplatform builds for docker images in pipeline

* :pr:`2757`: Added missing ``__init__.py`` file in :mod:`.docbuild` module

* :pr:`2770`: Fixed bug in :meth:`.VMobject.proportion_from_point` that caused proportions greater than 1 to be returned

* :pr:`2826`: Fixed leaked mobjects coming from :class:`.TransformMatchingAbstractBase` 

* :pr:`2870`: Fixed issue with ``manim init scene SCENE_NAME filename.py`` and removed necessity of ``main.py`` to be present in working directory


Documentation-related changes
-----------------------------

* :pr:`2704`: Updated URL to Pango Markup formatting page

* :pr:`2716`: Improved the order of the reference manuals

* :pr:`2720`: Fixed typo in docstring of :class:`.Angle` 

* :pr:`2722`: Fixed typos in docstrings of classes in :mod:`.mobject.table` 

* :pr:`2726`: Edited note on :class:`.NumberPlane` length and added another example

* :pr:`2740`: Fixed documentation of :meth:`.Cylinder.get_direction` 

* :pr:`2755`: Fixed docstring of  :meth:`.VMobject.get_end_anchors` 

* :pr:`2760`: Removed ``cmake`` from the MacOS installation section

* :pr:`2767`: Added more questions and answers to FAQ section, new :doc:`OpenGL FAQ </faq/opengl>` 

* :pr:`2771`: Added documentation and testing for ``path_func`` keyword argument of :class:`.Transform` 

* :pr:`2828`: Removed suggestion issue template, added FAQ answer regarding proposing new features

* :pr:`2849`: Added example for ``path_arc`` keyword argument of :class:`.Transform` 

* :pr:`2851`: Added an example on constructing a (neural) network using a partite :class:`.Graph` 

* :pr:`2855`: Added implicit ``docker.io/`` URL base in reference to docker images

* :pr:`2861`: Added docstring for :meth:`.CoordinateSystem.plot_parametric_curve` 


Changes concerning the testing system
-------------------------------------

* :pr:`2743`: Replaced ``assert`` statements with with assertion functions from ``np.testing`` 


Changes to our development infrastructure
-----------------------------------------

* :pr:`2700`: CI: updated Python versions

* :pr:`2701`: CI: added a workflow to publish docker image after releases and commits to main branch


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2680`: Increased minimum required version of ``numpy`` to 1.19

* :pr:`2687`: Migrated from ``os.path`` to ``pathlib`` in :class:`.SVGMobject` and other locations

* :pr:`2715`: Updated deprecated ``pillow`` constants

* :pr:`2735`: Bump pyjwt from 2.3.0 to 2.4.0

* :pr:`2748`: Bump pillow from 9.1.0 to 9.1.1

* :pr:`2751`: Fixed flake C417 and improved a comment

* :pr:`2825`: Bump notebook from 6.4.11 to 6.4.12

* :pr:`2864`: Updated lockfile


New releases
------------

* :pr:`2863`: Prepared new release,  ``v0.16.0`` 


===================================================
/. 🚀 docs/source/changelog/0.15.2-changelog.rst
===================================================

*******
v0.15.2
*******

:Date: April 25, 2022

Contributors
============

A total of 33 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Bailey Powers +
* Benjamin Hackl
* Dan Walsh +
* Darigov Research
* Darylgolden
* David Millard +
* Hamidreza Hashemi +
* Jan-Hendrik Müller
* Jason Villanueva
* Jonathan Alpert +
* Joy Bhalla
* Kian Cross +
* Luca +
* Mohsin Shaikh +
* Naveen M K
* Prismo +
* Ryan McCauley
* WillSoltas +
* ad_chaos
* darkways +
* dawn*squirryl +
* icedcoffeeee
* peaceheis
* sparshg
* trickypr +


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Dan Walsh
* Darylgolden
* GameDungeon
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* Jonathan Alpert
* Luca
* Naveen M K
* Prismo
* Ryan McCauley
* ad_chaos
* darkways
* hickmott99
* icedcoffeeee
* peaceheis

Pull requests merged
====================

A total of 39 pull requests were merged for this release.

New features
------------

* :pr:`1975`: Improved CLI help page styling
   - Updates dependencies on Click and Cloup libraries for CLI help page styling.
   - Removed the dependency on click-default-group.
   - Added ``no_args_is_help`` parameter for ``manim render`` to allow easy access to help page.
   - Added note to ``manim`` help page epilog on how to access other command help pages.

* :pr:`2404`: Add :class:`.SpiralIn` Animation
   - Make :class:`.ManimBanner` to use :class:`.SpiralIn`.

* :pr:`2534`: Implement :class:`~.OpenGLImageMobject` 

* :pr:`2684`: Created a more accessible way to create Angles with line.py angle function - :meth:`.Angle.from_three_points` 


Enhancements
------------

* :pr:`2062`: Reuse shader wrappers and shader data

* :pr:`2642`: Migrated ``file_ops.py`` and ``scene_file_writer.py`` from os.path to Pathlib
   In ``file_ops.py`` and ``scene_file_writer.py``: Uses of str type file names have been mostly (see further information) converted to pathlib's Path objects. Uses of ``os.path`` methods have been converted to equivalent pathlib methods.

* :pr:`2655`: Fix :func:`.assert_is_mobject_method` when using OpenGL

* :pr:`2665`: Improved handling of attributes when using the ``.animate`` syntax

* :pr:`2674`: Document and type ``simple_functions.py`` 
   - Add documentation for ``simple_functions.py``.
   - Small additions with some extra clarity for these functions.

* :pr:`2693`: Allow using :meth:`.MovingCamera.auto_zoom` without animation
   Allows auto zooming camera without having to play an animation by passing an ``animation=False`` argument

Fixed bugs
----------

* :pr:`2546`: Fixed a file logging bug and some maintenance

* :pr:`2597`: Fix Bug in :class:`.Uncreate` with ``rate_func`` via introducing new parameter ``reversed`` to :class:`.Animation`
   - Refractor the :class:`.Uncreate`. The new implementation uses a flag member ``reversed``. Set it to ``True`` and its superclass handles the reverse.
   - Introduce a bool parameter ``reversed`` to :class:`.Animation`. It decides whether the animation needs to be played backwards. Default to be False.
   - Add conditional branches in :meth:`.Animation.get_sub_alpha`. If the parameter ``reversed`` is True, it would set ``rate_func(t)`` to ``rate_func(1 - t)``.

* :pr:`2613`: Fixed bug in :meth:`.Circle.point_at_angle` when the angle is not in the interval :math:`[0, 2\pi]` 

* :pr:`2634`: Fix background lines drawn twice in :class:`.NumberPlane` 

* :pr:`2648`: Handle user-defined centers for Wiggle animation

* :pr:`2658`: Fix arguments of overridden ``set_style`` for :class:`.BackgroundRectangle`
   Using :class:`.Write` animation on a :class:`.Text` object with ``.add_background_rectangle()`` applied no longer generates a ``TypeError``.

* :pr:`2668`: (Re)set background color of :class:`.OpenGLRenderer` when initializing scene

* :pr:`2676`: Fixed propagation of custom attributes in animations for the OpenGL renderer

* :pr:`2688`: Fixed two minor issues of :class:`.SpiralIn` and :class:`.ManimBanner` 


Documentation-related changes
-----------------------------

* :pr:`2609`: Copyedit troubleshooting.rst

* :pr:`2610`: Add example PolygonOnAxes

* :pr:`2617`: Re-added :mod:`.value_tracker` documentation

* :pr:`2619`: Improve Example for arrange_in_grid

* :pr:`2620`: Fixed typo in :meth:`.Animation.is_introducer` 

* :pr:`2640`: Copyedited Documentation
   Reviewed ``tutorials/configurations.rst``. Edited simple mistakes such as Manim not being capitalized and commas.

* :pr:`2649`: Document and type utils/iterables.py

* :pr:`2651`: Update copyright year in documentation to 2020-2022

* :pr:`2663`: Added documentation for scene updater functions

* :pr:`2686`: Add instructions to install extra dependencies with poetry


Changes to our development infrastructure
-----------------------------------------

* :pr:`2561`: Run tests on Linux-aarch64

* :pr:`2656`: Fixed incompatibility with black version


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2630`: Remove WebGL renderer
   The WebGL renderer is broken and unmaintained. The support for it in Manim is removed.

* :pr:`2652`: Update ``cloup`` version to 0.13.0 from 0.7.0

* :pr:`2678`: Require ``backports-cached-property`` only for Python < 3.8

* :pr:`2685`: Migrate from ``os.path`` to ``pathlib`` in testing scripts
   This pull request changes a number of instances of ``os.path`` to Pathlib objects and functions. In addition, this PR modifies the SVGMobject constructor to accept both a Pathlib object or a string variable pathname its constructor.

* :pr:`2691`:  Removed :class:`CameraFrame` 

* :pr:`2696`: Made changelog generation run in parallel plus further improvements to ``scripts/dev_changelog.py`` 

* :pr:`2697`: Sort PRs by number in changelog sections before writing


New releases
------------

* :pr:`2694`: Prepared bugfix release v0.15.2


===================================================
/. 🚀 docs/source/changelog/0.15.1-changelog.rst
===================================================

*******
v0.15.1
*******

:Date: March 08, 2022

Contributors
============

A total of 9 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Benjamin Hackl
* Nicolai Weitkemper
* Yuchen +
* ad_chaos


The patches included in this release have been reviewed by
the following contributors.

* Alex Lembcke
* Benjamin Hackl
* Darylgolden
* Naveen M K
* Raghav Goel
* ad_chaos
* icedcoffeeee

Pull requests merged
====================

A total of 9 pull requests were merged for this release.

Enhancements
------------

* :pr:`2602`: Support groups in :class:`.TransformMatchingTex` 


Fixed bugs
----------

* :pr:`2594`: Fixed render flow issues with introducer animations

* :pr:`2584`: Fixed bug with invalid color type ``None`` 

* :pr:`2587`: Fixed bug with rendering Tex string that contain ``%`` 

* :pr:`2593`: Fixed bug with displaying images in Jupyter Notebooks when ``config.media_embed`` is set to ``False`` 


Documentation-related changes
-----------------------------

* :pr:`2570`: Refactored docstrings in :mod:`.coordinate_systems` 

* :pr:`2603`: Reduced the number of warnings during documentation build


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2578`: Fixed incorrect type hint for color property of :class:`.Text` 


New releases
------------

* :pr:`2596`: Prepared bugfix release v0.15.1


===================================================
/. 🚀 docs/source/changelog/0.15.0-changelog.rst
===================================================

*******
v0.15.0
*******

:Date: February 26, 2022

Contributors
============

A total of 34 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* AnonymoZ +
* Benjamin Hackl
* Darylgolden
* Eshaan Naga Venkata +
* Faruk D. +
* GameDungeon
* Kevin Cen +
* Laith Bahodi
* Leo Xu
* Lucas Ricci
* Marcin Serwin
* Michael McNeil Forbes +
* Mysaa
* Naveen M K
* Pierre Couy +
* Simon Ellmann +
* Tommy Chu +
* Viicos
* ad_chaos
* betafcc +
* friedkeenan
* icedcoffeeee
* vmoros +
* 鹤翔万里


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* Christopher Besch
* Darylgolden
* Eshaan Naga Venkata
* GameDungeon
* Jan-Hendrik Müller
* Laith Bahodi
* Marcin Kurczewski
* Marcin Serwin
* Naveen M K
* Raghav Goel
* RomainJMend
* Ryan McCauley
* Tommy Chu
* ad_chaos
* betafcc
* icedcoffeeee

Pull requests merged
====================

A total of 71 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`2476`: Improved structure of the :mod:`.mobject` module
   Arrow tips now have to be imported from ``manim.mobject.geometry.tips`` instead of ``manim.mobject.geometry``.

* :pr:`2387`: Refactored :class:`~.BarChart` and made it inherit from :class:`~.Axes`
   - :class:`~.BarChart` now inherits from :class:`~.Axes`, allowing it to use :class:`~.Axes`' methods. Also improves :class:`~.BarChart`'s configuration and ease of use.
   - Added :meth:`~.BarChart.get_bar_labels` to annotate the value of each bar of a :class:`~.BarChart`.

Deprecated classes and functions
--------------------------------

* :pr:`2568`: Removed Deprecated Methods
   Removed methods and classes that were deprecated since v0.10.0 and v0.11.0

* :pr:`2457`: Deprecated :class:`.ShowCreationThenFadeOut` 


New features
------------

* :pr:`2442`: Added ``media_embed`` config option to control whether media in Jupyter notebooks is embedded

* :pr:`2504`: Added finer control over :meth:`.Scene.wait` being static (i.e., no updaters) or not
   - Added keyword argument ``frozen_frame`` to :class:`.Wait` and :meth:`.Scene.wait`
   - New convenience method: :meth:`.Scene.pause` (alias for ``Scene.wait(frozen_frame=True)``)
   - Changed default behavior for OpenGL updaters: updater functions are now not called by default when they are added
   - Changed default behavior of :meth:`.Scene.should_mobjects_update`: made it respect the set value of ``Wait.frozen_frame``, changed automatic determination of frozen frame state to also consider Scene updaters

Enhancements
------------

* :pr:`2478`: Alternative scaling for tree graph layout

* :pr:`2565`: Allowed passing vertex configuration keyword arguments to :meth:`.Graph.add_edges` 

* :pr:`2467`: :class:`~.MathTex`, :class:`~.Tex`, :class:`~.Text` and :class:`~.MarkupText` inherit color from their parent mobjects

* :pr:`2537`: Added support for PySide coordinate system

* :pr:`2158`: Added OpenGL compatibility to :meth:`.ThreeDScene.add_fixed_orientation_mobjects` and  :meth:`.ThreeDScene.add_fixed_in_frame_mobjects` 

* :pr:`2535`: Implemented performance enhancement for :meth:`.VMobject.insert_n_curves_to_point_list` 

* :pr:`2516`: Cached view matrix for :class:`~.OpenGLCamera` 

* :pr:`2508`: Improve performance for :meth:`.Mobject.become` 

* :pr:`2332`: Changed ``color``, ``stroke_color`` and ``fill_color`` attributes to properties

* :pr:`2396`: Fixed animations introducing or removing objects
   * :class:`.ShowPassingFlash` now removes objects when the animation is finished
   * Added ``introducer`` keyword argument to :class:`.Animation` analogous to ``remover`` 
   * Updated :class:`.Graph` vertex addition handling

Fixed bugs
----------

* :pr:`2574`: Improved Error in :mod:`.utils.tex_file_writing` 

* :pr:`2580`: Fixed :func:`.find_intersection` in :mod:`.space_ops` 

* :pr:`2576`: Fixed a bug with animation of removal of edges from a :class:`.Graph` 

* :pr:`2556`: Fixed showing highlighted cells when creating :class:`.Table` 

* :pr:`2559`: Fix setting line numbers in :class:`.Text` when using ManimPango settings

* :pr:`2557`: Fixed logger bug in :meth:`.Camera.make_background_from_func` 

* :pr:`2548`: Fixed :class:`.Axes` plotting bug with logarithmic x-axis

* :pr:`1547`: Fixed certain unicode characters in users' paths causing issues on Windows

* :pr:`2526`: Fixed segfault when using ``--enable_gui`` 

* :pr:`2538`: Fixed flickering OpenGL preview when using ``frozen_frame`` 

* :pr:`2528`: Fixed custom naming of gifs and added some tests

* :pr:`2487`: Fixed :meth:`.ThreeDCamera.remove_fixed_orientation_mobjects` 

* :pr:`2530`: Use single source of truth for default text values

* :pr:`2494`: Fixed an issue related to previewing gifs

* :pr:`2490`: Fixed order of transformation application in :class:`~.SVGMobject` 

* :pr:`2357`: Fixed ``screeninfo.get_monitors`` for MacOS

* :pr:`2444`: Fixed :meth:`.VectorScene.add_axes` 


Documentation-related changes
-----------------------------

* :pr:`2560`: Refactored more docstrings in :mod:`.geometry` 

* :pr:`2571`: Refactored docstrings in :mod:`.graphing` 

* :pr:`2569`: Refactored docstrings in :mod:`.geometry` 

* :pr:`2549`: Added a page for internals which links to our GitHub wiki

* :pr:`2458`: Improved documentation for :class:`.Rotate` 

* :pr:`2459`: Added examples to some transform animations

* :pr:`2517`: Added guide on profiling and improving performance

* :pr:`2518`: Added imports to examples for ``deprecation`` decorator

* :pr:`2499`: Improved help text for ``--write_to_movie`` 

* :pr:`2465`: Added documentation for :func:`.index_labels` 

* :pr:`2495`: Updated minimal LaTeX installation instructions

* :pr:`2500`: Added note about contributions during refactor period

* :pr:`2431`: Changed example in :meth:`.Surface.set_fill_by_value` 

* :pr:`2485`: Fixed some typos in documentation

* :pr:`2493`: Fixed typo in documentation for parameters of :class:`.Square` 

* :pr:`2482`: Updated Python version requirement in installation guide

* :pr:`2438`: Removed unnecessary rotation from example

* :pr:`2468`: Hid more private methods from the docs

* :pr:`2466`: Fixed a typo in the documentation for plugins

* :pr:`2448`: Improvements to the ``.pot`` files cleaning system

* :pr:`2436`: Fixed typo and improved example in building blocks tutorial


Changes to our development infrastructure
-----------------------------------------

* :pr:`2554`: Removed ``Remove-Item`` calls for MSYS2 Python

* :pr:`2531`: Added a GitHub Action for automatic validation of citation metadata

* :pr:`2536`: Upgraded version of setup-ffmpeg CI action

* :pr:`2484`: Updated tinytex download URL


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2573`: Moved :mod:`.value_tracker` back inside :mod:`.mobject` 

* :pr:`2566`: Removed unused livestream-related imports and functions from :mod:`.scene_file_writer` 

* :pr:`2524`: Reworked :mod:`.space_ops` 

* :pr:`2519`: Removed outdated comment

* :pr:`2503`: Removed unused imports

* :pr:`2475`: Removed setuptools dependency

* :pr:`2472`: Removed unnecessary comment in :mod:`.simple_functions` 

* :pr:`2429`: Upgraded to future-style type annotations

* :pr:`2464`: Bump pillow from 8.4.0 to 9.0.0

* :pr:`2376`: Updated dependencies for Python 3.10

* :pr:`2437`: Cleaned up :mod:`.simple_functions`
   - Removed ``fdiv`` as in all cases where it was used, it was just doing the same thing as numpy array division.
   - Replaced old implementation of the choose function with scipy's implementation
   - Use ``lru_cache`` (least recently used cache) for caching the choose function. Since it's only used for beziers, only 2 choose k and 3 choose k will be used, hence a size of 10 should be enough.
   - Removed ``clip_in_place`` in favor of ``np.clip`` 
   - Removed one use of ``clip_in_place`` that wasn't actually doing anything

* :pr:`2439`: Removed twitter template from scripts


New releases
------------

* :pr:`2547`: Prepared new release, ``v0.15.0`` 


===================================================
/. 🚀 docs/source/changelog/0.14.0-changelog.rst
===================================================

*******
v0.14.0
*******

:Date: January 07, 2022

Contributors
============

A total of 29 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Benjamin Hackl
* BorisTheBrave +
* Darylgolden
* GameDungeon
* Gergely Bencsik +
* Jan-Hendrik Müller
* Jihoon +
* Kian Kasad +
* Kiran-Raj-Dev +
* Laith Bahodi
* Leo Xu +
* Marcin Serwin
* Matt Gleich +
* Naveen M K
* Steven nguyen +
* Vectozavr +
* Viicos
* citrusmunch
* netwizard22 +


The patches included in this release have been reviewed by
the following contributors.

* Benjamin Hackl
* BorisTheBrave
* Christopher Besch
* Darylgolden
* GameDungeon
* Gergely Bencsik
* Hugues Devimeux
* Jan-Hendrik Müller
* Kiran-Raj-Dev
* Laith Bahodi
* Leo Xu
* Lucas Ricci
* Marcin Serwin
* Naveen M K
* Raghav Goel
* Ryan McCauley
* Viicos
* icedcoffeeee

Pull requests merged
====================

A total of 29 pull requests were merged for this release.

Deprecated classes and functions
--------------------------------

* :pr:`2390`: Removed deprecations up to `v0.13.0`
   - Removed ``get_graph``, ``get_implicit_curve``, ``get_derivative_graph``, ``get_line_graph`` and ``get_parametric_curve`` in favour of their ``plot`` variants
   - Removed ``FullScreenFadeRectangle`` and ``PictureInPictureFrame`` 
   - Removed ``path_arc`` parameter from :class:`~.SpinInFromNothing`
   - Removed ``set_submobjects`` method from ``opengl_mobject.py`` 

New features
------------

* :pr:`2341`: Update :class:`~.Text` to use new ``ManimPango`` color setting
   * :class:`~.Text` class now uses color setting introduced in ``ManimPango 0.4.0`` for color and gradient.

* :pr:`2397`: Added ``label_constructor`` parameter for :class:`~.NumberLine`
   Allows changing the class that will be used to construct :class:`~.Axes` and :class:`~.NumberLine` labels by default. Makes it possible to easily use :class:`~.Text` for labels if needed.

Enhancements
------------

* :pr:`2383`: Made :meth:`.Surface.set_fill_by_value` support gradients along different axes

* :pr:`2388`: Added ``about_point`` keyword argument to :class:`~.ApplyMatrix` 

* :pr:`2395`: Add documentation for paths functions

* :pr:`2372`: Improved :class:`~.DashedVMobject`
   :class:`~.DashedVMobject` used to create stretched and uneven dashes on most plotted curves. Now the dash lengths are equalized. An option is reserved to use the old method.
   New keyword argument: ``dash_offset``. This parameter shifts the starting point.

Fixed bugs
----------

* :pr:`2409`: Fixed performance degradation by trimming empty curves from paths when calling :meth:`.VMobject.align_points` 

* :pr:`2392`: Fixed ``ZeroDivisionError`` in :mod:`~.mobject.three_dimensions` 

* :pr:`2362`: Fixed phi updater in :meth:`.ThreeDScene.begin_3dillusion_camera_rotation` 


Documentation-related changes
-----------------------------

* :pr:`2415`: Removed instructions on using and installing Docker in README

* :pr:`2414`: Made improvements to the :doc:`/guides/configuration` tutorial

* :pr:`2423`: Changed recommendation to ``mactex-no-gui`` from ``mactex`` for macOS install

* :pr:`2407`: Clarified docstrings of :meth:`.Mobject.animate`, :meth:`.Mobject.set` and :class:`~.Variable` 

* :pr:`2352`: Added Crowdin badge

* :pr:`2371`: Added ``dvips`` to list of required LaTeX packages on Linux

* :pr:`2403`: Improved docstring of :class:`~.ApplyMethod` and removed propagated ``__init__`` docstring

* :pr:`2391`: Fixed typo in parameter name in documentation of :class:`~.NumberLine` 

* :pr:`2368`: Added note in Internationalization


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2408`: Removed various return annotations that were stifling type inference

* :pr:`2424`: Removed ``strings.py`` 

* :pr:`1972`: Added support for MyPy

* :pr:`2410`: Fixed Flake8

* :pr:`2401`: Fixed type annotations in :mod:`.mobject.three_dimensions` 

* :pr:`2405`: Removed some unused OpenGL files

* :pr:`2399`: Fixed type annotations in :mod:`~.mobject.table` 

* :pr:`2385`: Made comments in quickstart tutorial more precise

* :pr:`2377`: Fixed type hint for an argument of :class:`~.MoveAlongPath` 


New releases
------------

* :pr:`2411`: Prepare new release, ``v0.14.0`` 


===================================================
/. 🚀 docs/source/changelog/0.13.1-changelog.rst
===================================================

*******
v0.13.1
*******

:Date: December 05, 2021

Contributors
============

A total of 2 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Benjamin Hackl


The patches included in this release have been reviewed by
the following contributors.

* Laith Bahodi

Pull requests merged
====================

A total of 2 pull requests were merged for this release.

Fixed bugs
----------

* :pr:`2363`: Fixed broken IPython magic command


New releases
------------

* :pr:`2364`: Prepared bugfix release ``v0.13.1`` 


===================================================
/. 🚀 docs/source/changelog/0.13.0-changelog.rst
===================================================

*******
v0.13.0
*******

:Date: December 04, 2021

Contributors
============

A total of 27 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Benjamin Hackl
* Christopher Besch
* Darylgolden
* Filip +
* John Ingles +
* Laith Bahodi
* Lucas Ricci +
* Marcin Serwin +
* Mysaa
* Naveen M K
* Ricky +
* Viicos
* ask09ok +
* citrusmunch +
* icedcoffeeee
* mostlyaman +
* vmiezys +
* zhujisheng +


The patches included in this release have been reviewed by
the following contributors.

* Alex Lembcke
* Benjamin Hackl
* Christopher Besch
* Darylgolden
* Filip
* Hugues Devimeux
* Jan-Hendrik Müller
* Laith Bahodi
* Lucas Ricci
* Naveen M K
* Oliver
* Ryan McCauley
* Viicos
* ask09ok
* icedcoffeeee
* mostlyaman

Pull requests merged
====================

A total of 39 pull requests were merged for this release.

Highlights
----------

* :pr:`2313`: Finalized translation process and documentation


Deprecated classes and functions
--------------------------------

* :pr:`2331`: Removed deprecations up to ``v0.12.0`` 
   - Removed ``distance`` parameters from :class:`~.ThreeDCamera` (replacement: ``focal_distance``)
   - Removed ``min_distance_to_new_point`` parameter from :class:`~.TracedPath`
   - Removed ``positive_space_ratio`` and ``dash_spacing`` parameters from :class:`~.DashedVMobject`
   - Removed ``<method>_in_place`` methods from :mod:`.mobject`
   - Removed ``ReconfigurableScene`` 
   - Removed ``SampleSpaceScene`` 

* :pr:`2312`: Replaced all occurrences of ``set_submobjects`` 


New features
------------

* :pr:`2314`: Added basic support for adding subcaptions via :meth:`.Scene.add_subcaption`
   - New method :meth:`.Scene.add_subcaption`
   - New keyword arguments ``subcaption``, ``subcaption_duration``, ``subcaption_offset`` for :meth:`.Scene.play` 

* :pr:`2267`: Implemented :meth:`.CoordinateSystem.plot_antiderivative_graph` 


Enhancements
------------

* :pr:`2347`: Moved ``manim_directive.py`` to ``manim.utils.docbuild`` 

* :pr:`2340`: Added documentation for :mod:`.animation.growing` and improved :class:`.SpinInFromNothing` 

* :pr:`2343`: Replaced current tree layout algorithm with SageMath's for improved layout of large trees

* :pr:`2351`: Added missing ``**kwargs`` parameter to :meth:`.Table.add_highlighted_cell` 

* :pr:`2344`: Resized SVG logos, fit content to canvas


Fixed bugs
----------

* :pr:`2359`: Resolved ``ValueError`` when calling ``manim cfg write`` 

* :pr:`2276`: Fixed bug with alignment of z-axis in :class:`~.ThreeDAxes` 

* :pr:`2325`: Several improvements to handling of ``quality`` argument

* :pr:`2335`: Fixed bug with zooming camera and :class:`~.PointCloud` 

* :pr:`2328`: Fixed bug causing incorrect RGBA values to be passed to cairo

* :pr:`2292`: Fixed positioning of :class:`~.Flash` 

* :pr:`2262`: Fixed wrong cell coordinates with :meth:`.Table.get_cell` after scaling

* :pr:`2280`: Fixed :class:`~.DecimalNumber` color when number of displayed digits changes


Documentation-related changes
-----------------------------

* :pr:`2354`: Port over docs and typings from ``mobject.py`` and ``vectorized_mobject.py`` to their OpenGL counterparts

* :pr:`2350`: Added mention of Manim sideview extension for VS Code

* :pr:`2342`: Removed :meth:`~.CoordinateSystem.get_graph` usage from :class:`~.Axes` example

* :pr:`2216`: Edited and added new sections to the quickstart tutorial

* :pr:`2279`: Added documentation for discontinuous functions

* :pr:`2319`: Swapped ``dotL`` and ``dotR`` in :meth:`.Mobject.interpolate` example

* :pr:`2230`: Copyedited building blocks tutorial

* :pr:`2310`: Clarified that Manim does not support Python 3.10 yet in the documentation

* :pr:`2294`: Made documentation front page more concise and rearranged order of tutorials

* :pr:`2287`: Replace link to old interactive notebook


Changes concerning the testing system
-------------------------------------

* :pr:`2346`: Made ``frames_comparsion`` decorator for frame testing a proper module of the library

* :pr:`2318`: Added tests for ``remover`` keyword argument of :class:`~.AnimationGroup` 

* :pr:`2301`: Added a test for :meth:`.ThreeDScene.add_fixed_in_frame_mobjects` 

* :pr:`2274`: Optimized some tests to reduce duration

* :pr:`2272`: Added test for :class:`~.Broadcast` 


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2327`: Corrected type hint for ``labels`` keyword argument of :class:`~.Graph` 

* :pr:`2329`: Remove unintended line break in README

* :pr:`2305`: Corrected type hint ``discontinuities`` argument for :class:`~.ParametricFunction` 

* :pr:`2300`: Add contact email for PyPi


New releases
------------

* :pr:`2353`: Prepare new release: ``v0.13.0`` 


Unclassified changes
--------------------

* :pr:`2348`: Updated translation source files


===================================================
/. 🚀 docs/source/changelog/0.12.0-changelog.rst
===================================================

*******
v0.12.0
*******

:Date: November 02, 2021

Contributors
============

A total of 40 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Anima. +
* Arcstur +
* Benjamin Hackl
* Christopher Besch
* Darylgolden
* David Yang +
* Dhananjay Goratela +
* Ethan Rooke +
* Eugene Chung +
* GameDungeon
* Gustav-Rixon +
* Jan-Hendrik Müller
* Josiah Winslow +
* Laith Bahodi
* Martmists +
* Michael Hill +
* Naveen M K
* Nick +
* NotWearingPants +
* Peeter Joot +
* Ryan McCauley
* Viicos +
* heitor +
* icedcoffeeee
* kieran-pringle +
* Виктор Виктор +


The patches included in this release have been reviewed by
the following contributors.

* Alex Lembcke
* Anima.
* Benjamin Hackl
* Christopher Besch
* Darylgolden
* David Yang
* Dhananjay Goratela
* Ethan Rooke
* Eugene Chung
* Gustav-Rixon
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* Laith Bahodi
* Mysaa
* Naveen M K
* Nick
* Oliver
* Ryan McCauley
* Viicos
* icedcoffeeee
* kieran-pringle

Pull requests merged
====================

A total of 52 pull requests were merged for this release.

Highlights
----------

* :pr:`1812`: Implemented logarithmic scaling for :class:`~.NumberLine` / :class:`~.Axes`
   This implements scaling bases that can be passed to the ``scaling`` keyword
   argument of :class:`.NumberLine`. See :class:`.LogBase` (for a logarithmic scale) and
   :class:`.LinearBase` (for the default scale) for more details and examples.

* :pr:`2152`: Introduced API for scene sections via :meth:`.Scene.next_section`
   Sections divide a scene into multiple parts, resulting in multiple output videos (when using the ``--save_sections`` flag).
   The cuts between two sections are defined by the user in the :meth:`~.Scene.construct` method.
   Each section has an optional name and type, which can be used by a plugin (`see an example <https://github.com/ManimEditorProject/manim_editor>`__).
   You can skip rendering specific sections with the ``skip_animations`` keyword argument.

Deprecated classes and functions
--------------------------------

* :pr:`1926`: OpenGL: changed ``submobjects`` to be a property

* :pr:`2245`: Removed deprecated method ``get_center_point`` and parameters ``azimuth_label_scale``, ``number_scale_value``, ``label_scale``, ``scale_factor``, ``size``, ``x_min``, ``x_max``, ``delta_x``, ``y_min``, ``y_max``, ``delta_y`` 

* :pr:`2187`: Renamed ``get_graph`` and its variants to :meth:`~.CoordinateSystem.plot` 

* :pr:`2065`: Deprecated :class:`~.FullScreenFadeRectangle` and :class:`~.PictureInPictureFrame` 


New features
------------

* :pr:`2025`: Implemented :meth:`.CoordinateSystem.input_to_graph_coords` and fixed :meth:`.CoordinateSystem.angle_of_tangent` 

* :pr:`2151`: Added option to set the input file from a config file

* :pr:`2128`: Added keyword arguments ``match_center``, ``match_width`` etc. to :meth:`.Mobject.become` 

* :pr:`2162`: Implemented :meth:`.MovingCamera.auto_zoom` for automatically zooming onto specified mobjects

* :pr:`2236`: Added ``skip_animations`` argument to :meth:`.Scene.next_section` 

* :pr:`2196`: Implemented :meth:`.Line3D.parallel_to` and :meth:`.Line3D.perpendicular_to` 


Enhancements
------------

* :pr:`2138`: Fixed example for :meth:`~.Vector.coordinate_label` and added more customization for :class:`~.Matrix`
   - Additional keyword arguments for :meth:`~.Vector.coordinate_label` are passed to the constructed matrix.
   - :class:`~.Matrix` now accepts a ``bracket_config`` keyword argument.

* :pr:`2139`: Changed the color of :class:`~.NumberLine` from ``LIGHT_GREY`` to ``WHITE`` 

* :pr:`2157`: Added :meth:`.CoordinateSystem.plot_polar_graph` 

* :pr:`2243`: Fixed wasteful recursion in :meth:`.Mobject.get_merged_array` 

* :pr:`2205`: Improved last frame output handling for the OpenGL renderer

* :pr:`2172`: Added ``should_render`` attribute to disable rendering mobjects

* :pr:`2182`: Changed the default width of videos in Jupyter notebooks to 60%


Fixed bugs
----------

* :pr:`2244`: Fixed :meth:`.CoordinateSystem.get_area` when using few plot points and a boundary graph

* :pr:`2232`: Fixed :class:`.Graph` stopping to update after animating additions/deletions of vertices or edges

* :pr:`2142`: Fixed issue with duplicates in OpenGL family and added tests

* :pr:`2168`: Fixed order of return values of :func:`.space_ops.cartesian_to_spherical` 

* :pr:`2160`: Made projection shaders compatible with :class:`.StreamLines` 

* :pr:`2140`: Fixed passing color lists to :meth:`.Mobject.set_color` for the OpenGL renderer

* :pr:`2211`: Fixed animations not respecting the specified rate function

* :pr:`2161`: Fixed ``IndexOutOfBoundsError`` in TeX logging

* :pr:`2148`: Fixed :class:`~.Arrow` tip disorientation with :meth:`.Line.put_start_and_end_on` 

* :pr:`2192`: Fixed :func:`.svg_path.string_to_numbers` sometimes returning strings

* :pr:`2185`: Fixed type mismatch for height and width parameters of :class:`~.Text` 


Documentation-related changes
-----------------------------

* :pr:`2228`: Added a new boolean operation example to the gallery

* :pr:`2239`: Removed erroneous raw string from text tutorial

* :pr:`2184`: Moved comments in :class:`~.VMobject` to documentation

* :pr:`2217`: Removed superfluous dots in documentation of :class:`.Section` 

* :pr:`2215`: Fixed typo in docstring of :meth:`.ThreeDAxes.get_z_axis_label` 

* :pr:`2212`: Fixed Documentation for Sections

* :pr:`2201`: Fixed a typo in the documentation

* :pr:`2165`: Added Crowdin configuration and changed source files to ``.pot`` format

* :pr:`2130`:  Transferred troubleshooting installation related snippets from Discord to the documentation

* :pr:`2176`: Modified :meth:`.Mobject.set_default` example to prevent leaking across the docs


Changes concerning the testing system
-------------------------------------

* :pr:`2197`: Added tests for resolution flag

* :pr:`2146`: Increased test coverage for OpenGL renderer


Changes to our development infrastructure
-----------------------------------------

* :pr:`2191`: Removed ``add-trailing-comma`` pre-commit hook


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2136`: Added type hints to all colors

* :pr:`2220`: Cleanup: let ``Scene.renderer.time`` return something that makes sense

* :pr:`2222`: Updated Classifiers in ``pyproject.toml``: removed Python 3.6, added Python 3.9

* :pr:`2213`: Removed redundant ``partial_movie_files`` parameter in :meth:`.SceneFileWriter.combine_to_movie` 

* :pr:`2200`: Addressed some maintenance TODOs
   - Changed an `Exception` to `ValueError`
   - Fixed :meth:`.MappingCamera.points_to_pixel_coords` by adding the ``mobject`` argument of the parent
   - Rounded up width in :class:`.SplitScreenCamera`
   - Added docstring to :meth:`.Camera.capture_mobject` 

* :pr:`2194`: Added type hints to :mod:`.utils.images` 

* :pr:`2171`: Added type hints to :mod:`.utils.ipython_magic` 

* :pr:`2164`: Improved readability of regular expression


New releases
------------

* :pr:`2247`: Prepared new release ``v0.12.0`` 


===================================================
/. 🚀 docs/source/changelog/0.11.0-changelog.rst
===================================================

*******
v0.11.0
*******

:Date: October 02, 2021

Contributors
============

A total of 31 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Aathish Sivasubrahmanian
* Benjamin Hackl
* Charlie +
* Christopher Besch +
* Darylgolden
* Evan Boehs +
* GameDungeon
* Hugues Devimeux
* Jerónimo Squartini
* Laith Bahodi
* Meredith Espinosa +
* Mysaa
* Naveen M K
* Nicolai Weitkemper +
* Oliver
* Ryan McCauley
* Tim +
* icedcoffeeee
* imadjamil +
* leleogere +
* Максим Заякин +


The patches included in this release have been reviewed by
the following contributors.

* Aathish Sivasubrahmanian
* Benjamin Hackl
* Charlie
* Darylgolden
* Evan Boehs
* GameDungeon
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* Laith Bahodi
* Mark Miller
* Mysaa
* Naveen M K
* Nicolai Weitkemper
* Oliver
* Raghav Goel
* Ryan McCauley
* Skaft
* friedkeenan
* icedcoffeeee
* leleogere

Pull requests merged
====================

A total of 55 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`1990`: Changed and improved the implementation of :meth:`.CoordinateSystem.get_area` to work without Riemann rectangles
   This changes how :meth:`.CoordinateSystem.get_area` is implemented. To mimic the old behavior (tiny Riemann rectangles), use :meth:`.CoordinateSystem.get_riemann_rectangles` with a small value for ``dx``.

* :pr:`2095`: Changed angles for polar coordinates to use math convention
   This PR switches the parameter names ``phi`` and ``theta`` in :func:`cartesian_to_spherical` and :func:`spherical_to_cartesian` to align with the `usual definition in mathematics <https://user-images.githubusercontent.com/83535735/131709630-87290522-7747-4b21-9411-dd3d35ebaf0f.png>`__.

Highlights
----------

* :pr:`2094`: Implemented :class:`~.ImplicitFunction` and :meth:`.CoordinateSystem.get_implicit_curve` for plotting implicit curves
   An :class:`~.ImplicitFunction` that plots the points :math:`(x, y)` which satisfy some equation :math:`f(x,y) = 0`.

* :pr:`2075`: Implemented :meth:`.Mobject.set_default`, a mechanism for changing default values of keyword arguments

* :pr:`1998`: Added support for Boolean Operations on VMobjects
   This PR introduces boolean operations for :class:`~.VMobject`; see details and examples at
   :class:`~.Union`, :class:`~.Difference`, :class:`~.Intersection` and :class:`~.Exclusion`.

Deprecated classes and functions
--------------------------------

* :pr:`2123`: Renamed ``distance`` parameter of :class:`.ThreeDScene` and :class:`.ThreeDCamera` to ``focal_distance`` 

* :pr:`2102`: Deprecated :class:`~.SampleSpaceScene` and :class:`~.ReconfigurableScene` 

* :pr:`2061`: Removed deprecated ``u_min``, ``u_max``, ``v_min``, ``v_max`` in :class:`~.Surface` 

* :pr:`2024`: Deprecated redundant methods :meth:`.Mobject.rotate_in_place`, :meth:`.Mobject.scale_in_place`, :meth:`.Mobject.scale_about_point` 

* :pr:`1991`: Deprecated :meth:`.VMobject.get_points` 


New features
------------

* :pr:`2118`: Added 3D support for :class:`~.ArrowVectorField` and :class:`~.StreamLines` 

* :pr:`1469`: Added :meth:`.VMobject.proportion_from_point` to measure the proportion of points along a Bezier curve


Enhancements
------------

* :pr:`2111`: Improved setting of OpenGL colors

* :pr:`2113`: Added OpenGL compatibility to :meth:`.ThreeDScene.begin_ambient_camera_rotation` and :meth:`.ThreeDScene.move_camera` 

* :pr:`2016`: Added OpenGL support for :mod:`~.mobject.boolean_ops` 

* :pr:`2084`: Added :meth:`~Table.get_highlighted_cell` and fixed :meth:`~Table.add_highlighted_cell` 

* :pr:`2013`: Removed unnecessary check in :class:`~.TransformMatchingAbstractBase` 

* :pr:`1971`: Added OpenGL support for :class:`~.StreamLines` 

* :pr:`2041`: Added config option to enable OpenGL wireframe for debugging


Fixed bugs
----------

* :pr:`2070`: Fixed :meth:`~OpenGLRenderer.get_frame` when window is created

* :pr:`2071`: Fixed :class:`~AnimationGroup` OpenGL compatibility

* :pr:`2108`: Fixed swapped axis step values in :class:`~.NumberPlane` 

* :pr:`2072`: Added OpenGL compatibility for :class:`~.Cube`.

* :pr:`2060`: Fixed OpenGL compatibility issue for meth:`~Line.set_opacity` 

* :pr:`2037`: Fixed return value of :meth:`~.OpenGLMobject.apply_complex_function` 

* :pr:`2039`: Added OpenGL compatibility for :meth:`~Cylinder.add_bases`.

* :pr:`2066`: Fixed error raised by logging when cache is full

* :pr:`2026`: Fixed OpenGL shift animation for :class:`~.Text` 

* :pr:`2028`: Fixed OpenGL overriding SVG fill color

* :pr:`2043`: Fixed bug where :meth:`.NumberLine.add_labels`  cannot accept non-mobject labels

* :pr:`2011`: Fixed ``-a`` flag for OpenGL rendering

* :pr:`1994`: Fix :meth:`~.input_to_graph_point` when passing a line graph (from :meth:`.Axes.get_line_graph`)

* :pr:`2017`: Avoided using deprecated ``get_points`` method and fixed :class:`~.OpenGLPMPoint` color


Documentation-related changes
-----------------------------

* :pr:`2131`: Copyedited the configuration tutorial in the documentation

* :pr:`2120`: Changed ``manim_directive`` to use a clean configuration via ``tempconfig`` 

* :pr:`2122`: Fixed broken links in inheritance graphs by moving them to ``reference.rst`` 

* :pr:`2115`: Improved docstring of :meth:`.PMobject.add_points` 

* :pr:`2116`: Made type hint for ``line_spacing`` argument of :class:`~.Paragraph` more accurate

* :pr:`2117`: Changed the way the background color was set in a documentation example to avoid leaking the setting to other examples

* :pr:`2101`: Added note that translation process is not ready

* :pr:`2055`: Fixed parameter types of :meth:`.Graph.add_edges` and :meth:`.Graph.add_vertices` 

* :pr:`862`: Prepared documentation for translation (still work in progress)

* :pr:`2035`: Fixed broken link in README

* :pr:`2020`:  Corrected paths to user-wide configuration files for MacOS and Linux


Changes concerning the testing system
-------------------------------------

* :pr:`2008`: Reuse CLI flag tests for OpenGL

* :pr:`2080`: Reused :class:`~.Mobject` tests for :class:`~.OpenGLMobject` 


Changes to our development infrastructure
-----------------------------------------

* :pr:`2004`: Cancel previous workflows in the same branch in Github Actions


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`2050`: Make colour aliases IDE-friendly

* :pr:`2126`: Fixed whitespace in info message issued by :meth:`.SceneFileWriter.clean_cache` 

* :pr:`2124`: Upgraded several dependencies (in particular: ``skia-pathops``)

* :pr:`2001`: Fixed several warnings issued by LGTM

* :pr:`2064`: Removed duplicate insert shader directory

* :pr:`2027`: Improved wording in info message issued by :meth:`.SceneFileWriter.clean_cache` 

* :pr:`1968`: Sharpened Flake8 configuration and fixed resulting warnings


New releases
------------

* :pr:`2114`: Prepared new release, ``v0.11.0`` 


===================================================
/. 🚀 docs/source/changelog/0.10.0-changelog.rst
===================================================

*******
v0.10.0
*******

:Date: September 01, 2021

Contributors
============

A total of 40 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Animfysyk +
* Benjamin Hackl
* Christian Clauss
* Daniel Adelodun +
* Darigov Research
* Darylgolden
* Eric Biedert +
* Harivinay
* Jan-Hendrik Müller
* Jephian Lin +
* Joy Bhalla +
* Laith Bahodi
* Lalourche +
* Max Stoumen
* Naveen M K
* Oliver
* Partha Das +
* Raj Dandekar +
* Rohan Sharma +
* Ryan McCauley
* Václav Hlaváč +
* asjadaugust +
* ccn
* icedcoffeeee
* sparshg
* vinnniii15 +
* vladislav doster +
* xia0long +


The patches included in this release have been reviewed by
the following contributors.

* Aathish Sivasubrahmanian
* Benjamin Hackl
* Darylgolden
* Devin Neal
* Eric Biedert
* GameDungeon
* Harivinay
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* Jephian Lin
* Joy Bhalla
* KingWampy
* Laith Bahodi
* Naveen M K
* Oliver
* Raghav Goel
* Raj Dandekar
* Ryan McCauley
* ccn
* icedcoffeeee
* ralphieraccoon
* sparshg

Pull requests merged
====================

A total of 59 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`1843`: Dropped redundant OpenGL files and add metaclass support for :class:`~.Surface`
   - ``OpenGL<x>`` classes from ``opengl_geometry.py``, ``opengl_text_mobject.py``, ``opengl_tex_mobject.py``, ``opengl_svg_path.py``, ``opengl_svg_mobject.py`` and most of ``opengl_three_dimensions.py`` have been removed.
   - ``ParametricSurface`` has been renamed to :class:`~.Surface` 

Deprecated classes and functions
--------------------------------

* :pr:`1941`: Added examples, tests and improved documentation for :mod:`~.coordinate_systems` 

* :pr:`1694`: Added ``font_size`` parameter for :class:`~.Tex` and :class:`~.Text`, replaced ``scale`` parameters with ``font_size`` 

* :pr:`1860`: Removed :class:`~.GraphScene`, :class:`~.NumberLineOld` and parameters for :class:`~.ChangingDecimal` 


New features
------------

* :pr:`1929`: Implementing a ``zoom`` parameter for :meth:`.ThreeDScene.move_camera`
   Zooming into a :class:`~.ThreeDScene` can now be done by calling, for example, ``self.move_camera(zoom=2)`` in the ``construct`` method.

* :pr:`1980`: Added a ``dissipating_time`` keyword argument to :class:`~.TracedPath` to allow animating a dissipating path

* :pr:`1899`: Allow switching the renderer to OpenGL at runtime
   Previously, the metaclass approach only changed the inheritance chain to switch between OpenGL and cairo mobjects when the class objects are initialized, i.e., at import time. This PR also triggers the changes to the inheritance chain when the value of ``config.renderer`` is changed.

* :pr:`1828`: Added configuration option ``zero_pad`` for zero padding PNG file names


Enhancements
------------

* :pr:`1882`: Added OpenGL support for :class:`~.PMobject` and its subclasses

* :pr:`1881`: Added methods :meth:`.Angle.get_lines` and :meth:`.Angle.get_value` to :class:`~.Angle` 

* :pr:`1952`: Added the option to save last frame for OpenGL

* :pr:`1922`: Fixed IPython interface to exit cleanly when OpenGL renderer raises an error

* :pr:`1923`: Fixed CLI help text for ``manim init`` subcommand so that it is not truncated

* :pr:`1868`: Added OpenGL support to IPython magic
   The OpenGL renderer can now be used in jupyter notebooks when using the ``%%manim`` magic command.

* :pr:`1841`: Reduced default resolution of :class:`~.Dot3D` 

* :pr:`1866`: Allow passing keyword argument ``corner_radius`` to :class:`~.SurroundingRectangle` 

* :pr:`1847`: Allow :class:`~.Cross` to be created without requiring a mobject


Fixed bugs
----------

* :pr:`1985`: Use ``height`` to determine ``font_size`` instead of the ``_font_size`` attribute

* :pr:`1758`: Fixed scene selection being ignored when using the OpenGL renderer

* :pr:`1871`: Fixed broken :meth:`.VectorScene.vector_to_coords` 

* :pr:`1973`: Fixed indexing of :meth:`.Table.get_entries` to respect row length

* :pr:`1950`: Fixed passing custom arrow shapes to :class:`~.CurvedArrow` 

* :pr:`1967`: Fixed :attr:`.Axes.coordinate_labels` referring to the entire axis, not just its labels

* :pr:`1951`: Fixed :meth:`.Axes.get_line_graph` returning a graph rendered below the axes

* :pr:`1943`: Added ``buff`` keyword argument to :class:`~.BraceLabel` 

* :pr:`1938`: Fixed :class:`~.Rotate` for angles that are multiples of :math:`2\pi` 

* :pr:`1924`: Made arrow tips rotate ``IN`` and ``OUT`` properly

* :pr:`1931`: Fixed ``row_heights`` in :meth:`.Mobject.arrange_in_grid` 

* :pr:`1893`: Fixed CLI error when rendering a file containing a single scene without specifying the scene name

* :pr:`1744`: Fixed bug in :class:`~.NumberPlane` with strictly positive or strictly negative values for ``x_range`` and ``y_range`` 

* :pr:`1887`: Fixed ``custom_config`` not working in ``frames_comparison`` 

* :pr:`1879`: Fixed how the installed version is determined by Poetry


Documentation-related changes
-----------------------------

* :pr:`1979`: Corrected Japanese phrases in documentation

* :pr:`1976`: Fixed labelling of languages in documentation example

* :pr:`1949`: Rewrite installation instructions from scratch

* :pr:`1963`: Added sitemap to ``robots.txt`` 

* :pr:`1939`: Fixed formatting of parameter description of :class:`~.NumberPlane` 

* :pr:`1918`: Fixed a typo in the text tutorial

* :pr:`1915`: Improved the wording of the installation instructions for Google Colab

* :pr:`1906`: Improved language and overall consistency in ``README`` 

* :pr:`1880`: Updated tutorials to use ``.animate`` instead of :class:`~.ApplyMethod` 

* :pr:`1877`: Remove duplicated imports in some documentation examples

* :pr:`1869`: Fixed duplicated Parameters section in  :meth:`.Mobject.arrange_in_grid` 


Changes concerning the testing system
-------------------------------------

* :pr:`1894`: Fixed an OpenGL test


Changes to our development infrastructure
-----------------------------------------

* :pr:`1987`: Added support for using OpenGL in subprocess in Windows pipeline

* :pr:`1964`: Added ``CITATION.cff`` and a method to automatically update this citation with new releases

* :pr:`1856`: Modified Dockerfile to support multi-platform builds via ``docker buildx`` 

* :pr:`1955`: Partially support OpenGL rendering with Docker

* :pr:`1896`: Made RTD apt install FFMPEG instead of installing a Python binding

* :pr:`1864`: Shortened and simplified PR template

* :pr:`1853`: Updated Sphinx to 4.1.2


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1960`: Ignore fewer flake8 errors

* :pr:`1947`: Set flake8 not to ignore undefined names in Python code

* :pr:`1948`: flake8: Set max-line-length instead of ignoring long lines

* :pr:`1956`:  Upgrade to modern Python syntax
   - This pull request was created `with the command <https://github.com/asottile/pyupgrade#readme>`__ ``pyupgrade --py36-plus **/*.py`` 
   - Python f-strings simplify the code and `should speed up execution <https://www.scivision.dev/python-f-string-speed>`__.

* :pr:`1898`: Replaced ``self.data["attr"]`` and ``self.uniforms["attr"]`` with ``self.attr`` 
   In particular, ``OpenGLVMobject.points`` can now be accessed directly.

* :pr:`1934`: Improved code quality by implementing suggestions from LGTM

* :pr:`1861`: Updated ``dearpygui`` version to 0.8.x


New releases
------------

* :pr:`1989`: Prepare new release v0.10.0


===================================================
/. 🚀 docs/source/changelog/0.9.0-changelog.rst
===================================================

******
v0.9.0
******

:Date: August 02, 2021

Contributors
============

A total of 35 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Alex Lembcke
* Benjamin Hackl
* Darylgolden
* Devin Neal
* Harivinay +
* Hugues Devimeux
* Jared Hughes +
* Jason Villanueva
* Kadatatlu Kishore +
* KingWampy
* LED Me Explain +
* Laith Bahodi
* Mohammad Al-Fetyani
* Noam Zaks
* Oliver
* PaulCMurdoch
* Raghav Prabhakar +
* Ryan McCauley
* Suhail Sherif +
* Taektiek +
* Udeshya Dhungana +
* UraniumCronorum +
* Vinh H. Pham (Vincent) +
* ccn +
* icedcoffeeee +
* sahilmakhijani +
* sparshg


The patches included in this release have been reviewed by
the following contributors.

* Abhijith Muthyala
* Alex Lembcke
* Benjamin Hackl
* Darylgolden
* Devin Neal
* Harivinay
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* KingWampy
* Laith Bahodi
* Lino
* Mohammad Al-Fetyani
* Oliver
* Raghav Goel
* Suhail Sherif
* icedcoffeeee
* sahilmakhijani
* sparshg

Pull requests merged
====================

A total of 55 pull requests were merged for this release.

Highlights
----------

* :pr:`1677`: Added a new :class:`~.Table` mobject
   This brings easy-to-use and customizable tables to Manim. Several examples for this new mobject can be found at :mod:`the module documentation page <.mobject.table>` and its subpages.

Deprecated classes and functions
--------------------------------

* :pr:`1848`: Deprecated parameters for :class:`~.DashedLine` and :class:`~.DashedVMobject`
   - ``dash_spacing`` is an unused parameter
   - ``positive_space_ratio`` has been replaced with the shorter name ``dashed_ratio`` 

* :pr:`1773`: Remove all classes and functions that were deprecated until ``v0.7.0`` and ``v0.8.0`` 
   The classes ``FadeInFrom``, ``FadeOutAndShift``, ``FadeOutToPoint``, ``FadeInFromPoint``, ``FadeInFromLarge``, ``VFadeIn``, ``VFadeOut``, ``VFadeInThenOut`` have been removed, use :class:`~.FadeIn` or :class:`~.FadeOut` with appropriate
   keyword arguments instead.

   The classes ``CircleIndicate``, ``ShowCreationThenDestruction``, ``AnimationOnSurroundingRectangle``, ``ShowPassingFlashAround``, ``ShowCreationThenDestructionAround``, ``ShowCreationThenFadeAround``, ``WiggleOutThenIn``, ``TurnInsideOut`` have been removed. Use :class:`~.Circumscribe`, :class:`~.ShowPassingFlash`, or :class:`~.Wiggle` instead.

   The classes ``OpenGLTexMobject`` and ``OpenGLTextMobject`` have been removed, use :class:`~.MathTex` and :class:`~.Tex` instead. Also, ``VMobjectFromSVGPathstring`` has been removed, use :class:`~.SVGPathMobject` instead.

   Finally, the utility functions ``get_norm`` and ``cross`` have been removed (use the corresponding Numpy methods instead), and the function ``angle_between`` has been replaced with ``angle_between_vectors``.

* :pr:`1731`: Deprecated :class:`~.ParametricSurface` parameters
   - ``u_min`` and ``u_max`` have been replaced by ``u_range``.
   - ``v_min`` and ``v_max`` have been replaced by ``v_range``.

New features
------------

* :pr:`1780`: Allow non-numerical values to be added to :class:`~.NumberLine` and :class:`~.Axes`
   - Added :meth:`.NumberLine.add_labels` method to :class:`~.NumberLine` which accepts a dictionary of positions/values.
   - :meth:`.CoordinateSystem.add_coordinates` now accepts a dictionary too.

* :pr:`1719`: Added a :class:`~.Broadcast` animation

* :pr:`1765`: Added a static method :meth:`.Circle.from_three_points` for defining a circle from three points
   - Added a new :func:`~.perpendicular_bisector` function in ``space_ops.py`` 

* :pr:`1686`: Added :meth:`.ParametricSurface.set_fill_by_value`
   This method enables a color gradient to be applied to a :class:`~.ParametricSurface`, including the ability to define at which points the colors should be centered.

Enhancements
------------

* :pr:`1833`: Added OpenGL compatibility for :class:`~.VDict`, :meth:`~.Axes.get_line_graph` and :class:`~.FocusOn` 

* :pr:`1760`: Added ``window_size`` flag to manually adjust the size of the OpenGL window
   Accepts a tuple in the form: ``x,y``.

* :pr:`1823`: Reworked :class:`~.DashedVMobject`
   Rewritten the logic to generate dashes

* :pr:`1808`: OpenGL renderer updates
   - Adds model matrices to all OpenGLVMobjects
   - Improved performance on vectorized mobject shaders
   - Added updaters that are part of the scene rather than a mobject

* :pr:`1787`: Made :class:`~.DecimalNumber` apply color to the ellipsis
   Made color apply to the dots when `show_ellipsis` is set to true in `DecimalNumber` 

* :pr:`1775`: Let :class:`~.Create` work on :class:`~.OpenGLSurface` 

* :pr:`1757`: Added warning when there is a large number of items to hash.

* :pr:`1774`: Add the ``reverse`` parameter to :class:`~.Write` 


Fixed bugs
----------

* :pr:`1722`: Fixed ``remover=True`` for :class:`~.AnimationGroup` 

* :pr:`1727`: Fixed some hot reload issues and compatibility with IDEs
   - Fixed interactive embed issue where it would fail when running on non-tty terminals
   - Fixed issue where file observer would error after the second run as the first observer was not closed

* :pr:`1844`: Fixed the oversized :class:`~.Code` window with the OpenGL renderer

* :pr:`1821`: Fixed issues concerning ``frame_center`` in :class:`~.ThreeDScene`
   - Changing ``frame_center`` in a :class:`~.ThreeDScene` now actually changes the camera position.
   - An animation with only ``frame_center`` animated will now be rendered properly.
   - A black dot is not created at the origin once ``frame_center`` is animated.

* :pr:`1826`: Fixed scaling issue with :meth:`.BarChart.change_bar_values` 

* :pr:`1839`: Allow passing arguments to ``.animate`` with the OpenGL renderer

* :pr:`1791`: :meth:`~.Mobject.set_z_index` now sets all submobjects' ``z_index`` value

* :pr:`1792`: Fixed bug that caused dry runs to fail when using the PNG format

* :pr:`1790`: Fixed an import from ``manimlib`` 

* :pr:`1782`: Fixed :class:`~.Tex` not working properly with the OpenGL renderer

* :pr:`1783`: Fixed :meth:`~.OpenGLMobject.shuffle` function and added :meth:`~.Mobject.invert` to OpenGL

* :pr:`1786`: Fixed :class:`~.DecimalNumber` not working properly when the number of digits changes

* :pr:`1763`: Fixed not being able to set some CLI flags in the configuration file

* :pr:`1776`: :meth:`.CoordinateSystem.get_riemann_rectangles` now uses the graph's range instead of the axes range
   If no range specified, `get_riemann_rectangles` generates the rectangles only where the area is correctly bounded

* :pr:`1770`: Rewrote :meth:`.OpenGLMobject.put_start_and_end_on` to work correctly in 3D

* :pr:`1736`: Fixed :class:`~.LinearTransformationScene` crashing on multiple animations


Documentation-related changes
-----------------------------

* :pr:`1852`: Fixed docs for :meth:`.Coordinate_system.add_coordinates` and moved :class: `~.Code` example

* :pr:`1807`: Updated installation instructions
   - Added a warning about the incompatibility of different versions of Manim in the README
   - Modified the admonition warning in the documentation
   - Removed duplicated information from the README (``pip install manim`` is already covered in the docs)

* :pr:`1739`: Added a section on creating a custom animation to the "Manim's building blocks" tutorial

* :pr:`1835`: Updated documentation with information about reworked graphical unit test system

* :pr:`1845`: Improve ``ThreeDSurfacePlot`` example in example gallery

* :pr:`1842`: Removed instructions on installing Poetry from Developer Installation documentation, reference Poetry's documentation instead

* :pr:`1829`: Switch the order of Scoop and Chocolatey in the docs for the Windows Installation

* :pr:`1827`: Added ``robots.txt`` to prevent old versions of documentation from showing in search results

* :pr:`1819`: Removed mention of ``-h`` CLI flag from documentation

* :pr:`1813`: Removed unused variables from tutorial

* :pr:`1815`: Added codespell to the list of used linters in the contribution guidelines

* :pr:`1778`: Improve sidebar structure of the documentation's reference manual

* :pr:`1749`: Added documentation and example for :meth:`.VMobject.set_fill` 

* :pr:`1743`: Edited the developer installation instructions to include information on cloning the repository

* :pr:`1706`: Rework example for :class:`~.Variable` 


Changes concerning the testing system
-------------------------------------

* :pr:`1836`: Converted all the graphical tests to the new syntax

* :pr:`1802`: Refactored graphical unit testing system, and implemented multi frames tests
   This PR introduces a new ``@frames_comparison`` decorator which allows writing simple ``construct``-like functions as tests. Control data for new tests can be easily generated by calling ``pytest --set_test``.

Changes to our development infrastructure
-----------------------------------------

* :pr:`1830`: Be more concise about the documentation URL in the PR template


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1851`: Renamed ``Tabular`` to :class:`~.Table` 

* :pr:`1817`: Remove pillow version requirement

* :pr:`1806`: Fixed spelling mistake

* :pr:`1745`: Updated the BibTeX template in the README to Manim v0.9.0


New releases
------------

* :pr:`1850`: Bump version number to ``v0.9.0`` and generate changelog


===================================================
/. 🚀 docs/source/changelog/0.8.0-changelog.rst
===================================================

******
v0.8.0
******

:Date: July 02, 2021

Contributors
============

A total of 37 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Benjamin Hackl
* Bill Shillito +
* Darigov Research +
* Darylgolden
* Devin Neal
* Iced-Tea3
* Jan-Hendrik Müller
* Jason Villanueva
* KingWampy
* Laith Bahodi
* MathInvariance +
* Max Stoumen
* Mehmet Ali Özer +
* Michael Pilosov +
* Mohammad Al-Fetyani
* Naveen M K
* Nikhil Garuda
* Oliver
* PaulCMurdoch
* Philipp Imhof
* PipedQuintes +
* Raghav Goel
* Ryan McCauley
* Ujjayanta +
* Vagrid +
* andrehisatsuga +
* friedkeenan
* peaceheis +
* yit6 +


The patches included in this release have been reviewed by
the following contributors.

* Abhijith Muthyala
* Anton Ballmaier
* Aron
* Benjamin Hackl
* Clar Fon
* Darylgolden
* Devin Neal
* Jan-Hendrik Müller
* Jason Villanueva
* KingWampy
* Laith Bahodi
* Mark Miller
* MathInvariance
* Mohammad Al-Fetyani
* Naveen M K
* Nikhil Garuda
* Oliver
* Philipp Imhof
* Raghav Goel
* Ryan McCauley
* Ujjayanta
* Vagrid
* friedkeenan

Pull requests merged
====================

A total of 76 pull requests were merged for this release.

Deprecated classes and functions
--------------------------------

* :pr:`1616`: Remove all functions and classes that were deprecated until ``v0.6.0`` 


New features
------------

* :pr:`1716`: Rewrite stroke and fill shaders
   Rewrite vectorized mobject shaders to be compatible with transformation matrices.

* :pr:`1695`: Add option to justify text with :class:`~.MarkupText`
   A new parameter ``justify`` is added to :class:`~.MarkupText`. It can be used to justify a paragraph of text.

* :pr:`1660`: Added support for ``.webm`` and transparency of videos in Jupyter notebooks
   - Added support for generating ``webm`` videos via the command line flag ``--format=webm`` 
   - Added transparency support for Jupyter notebooks

* :pr:`1553`: Add dearpygui integration


Enhancements
------------

* :pr:`1728`: Improved positioning and size of the OpenGL window; added some configuration options

* :pr:`1733`: Let OpenGLMobject.copy return a deep copy by default

* :pr:`1735`: Metaclass compatibility for `coordinate_system.py`, `Code` and `ParametricSurface` 

* :pr:`1585`: OpenGL compatibility via metaclass for :class:`~.Matrix`, :class:`~.DecimalNumber`, :class:`~.Variable` 

* :pr:`1713`: Exit the command line interface gracefully if no scene was chosen

* :pr:`1652`: Refactored :class:`~.Mobject` and :class:`~.Scene` to no longer inherit from the abstract base class ``Container`` 
   - Moved tests in ``test_container.py`` for :class:`Container` that test :class:`~.Scene` and :class:`~.Mobject` to their own files.
   - Corrected various instances of incorrectly passed keyword arguments, or unused keyword arguments.

* :pr:`1693`: Made the default arrowhead size for :class:`~.Arrow3D` smaller

* :pr:`1678`: Allow some rate functions to assume values outside of [0, 1]; introduce clamping decorators
   - Fixed animations so that certain rate functions (``running_start``, ``wiggle``, ``ease_in_back``, ``ease_out_back``, ``ease_in_out_back``, ``ease_in_elastic``, ``ease_out_elastic``, and ``ease_out_elastic``) can go outside the range from 0 to 1.
   - Fixed lag ratios so that they're spaced out evenly within the time interval and the rate functions are applied to each animation individually, rather than having the rate function determine when the animation starts.
   - Fixed faulty code for ``ease_in_out_expo``, ``ease_in_bounce``, ``ease_out_bounce``, and ``ease_in_out_bounce``.

* :pr:`1649`: Made video file names in Jupyter notebook more readable

* :pr:`1667`: Determine the default number of decimal places for :class:`~.NumberLine` labels automatically from the step size
   As an example: If the step size is set to 0.5, labels will now show at least one decimal place.

* :pr:`1608`: Color file paths in terminal; remove curly braces surrounding the file path in "Partial movie file written in..." messages

* :pr:`1632`: OpenGL compatibility via metaclass: :class:`~.Group` 


Fixed bugs
----------

* :pr:`1740`: Fix pillow to <8.3.0

* :pr:`1729`: Fix bug when using :class:`~.Text` with the OpenGL renderer

* :pr:`1675`: Fixed ignored fill and stroke colors for :class:`~.SVGMobject` 

* :pr:`1664`: Fixed accidental displacement in :class:`~.Axes` caused by ``include_numbers`` / ``numbers_to_include`` 

* :pr:`1670`: Fixed missing ``numpy`` import in OpenGL shader example

* :pr:`1636`: Fixed bugs and added examples to methods and classes in :mod:`manim.mobject.matrix` 

* :pr:`1614`: Fix tick issues and improve tick placement for :class:`~.NumberLine` 

* :pr:`1593`: Un-flip output of ``get_frame()`` when using the OpenGL renderer

* :pr:`1619`: Fix output of automatically detected LaTeX errors

* :pr:`1595`: Fixed a few CLI and rendering bugs
   - Corrected issue where gifs were being logged with an incorrect extension
   - Fixed issue where videos were output when format was set to png
   - Added logging for png output
   - Added precedence handling when the ``write_to_movie`` flag would conflict with ``--format`` 
   - Fixed issue that caused png image output to be ignored when caching was enabled

* :pr:`1635`: Added missing numpy import for :mod:`manim.mobject.probability` 

* :pr:`1634`: Fixed OpenGL examples for MacOS
   Renamed deprecated ``gl_FragColor`` to ``fragColor``.

Documentation-related changes
-----------------------------

* :pr:`1732`: Remove reference to ``--plugins`` flag

* :pr:`1734`: Fix inheritance graph background color

* :pr:`1698`: Added an example for :class:`~.PMobject` 

* :pr:`1690`: Added an example for :class:`~.CoordinateSystem` 

* :pr:`1510`: Add a tutorial for using :class:`~.Text` and :class:`~.Tex` 

* :pr:`1685`: Added an example and parameter description for :class:`~.AnnularSector` 

* :pr:`1687`: Updated imports in ``geometry.py`` and added example to :class:`~.Arrow` 

* :pr:`1681`: Added an example for :class:`~.NumberLine` 

* :pr:`1697`: Added an example for :class:`~.PGroup` 

* :pr:`1594`: Several improvements to the documentation design and layout

* :pr:`1696`: Added an example for :class:`~.DashedVMobject` 

* :pr:`1637`: Added an example for :class:`~.FunctionGraph` 

* :pr:`1626`: Added an example for :class:`~.Prism` 

* :pr:`1712`: Added a second example for :class:`~.DoubleArrow` 

* :pr:`1710`: Update copyright year in documentation to 2020-2021

* :pr:`1708`: Fixed link to interactive example notebook

* :pr:`1657`: Added an example for :class:`~.ParametricSurface` 

* :pr:`1642`: Added examples and docstrings for :class:`~.BarChart` 

* :pr:`1700`: Added an example for :meth:`~.Mobject.scale` 

* :pr:`1689`: Added an example for :class:`~.SurroundingRectangle` 

* :pr:`1627`: Added an example for :class:`~.Sphere` 

* :pr:`1569`: Added example to demonstrate differences between :class:`~.Transform` and :class:`~.ReplacementTransform` 

* :pr:`1647`: Added an example for :class:`~.Sector` 

* :pr:`1673`: Updated documentation examples for :class:`~.Text` and :class:`~.MarkupText`: set ``weight=BOLD`` instead of ``style`` 

* :pr:`1650`: Added an example for :class:`~.ArcBetweenPoints` 

* :pr:`1628`: Added an example for :class:`~.NumberPlane` 

* :pr:`1646`: Added an example for :class:`~.Underline` 

* :pr:`1659`: Added more details to the Google Colab installation instructions

* :pr:`1658`: Updated python requirement in the documentation

* :pr:`1639`: Added an example for :class:`~.SampleSpace` 

* :pr:`1640`: Added an example for :class:`~.Point` 

* :pr:`1643`: Fixed ``RightArcAngleExample`` for :class:`~.Angle` in documentation

* :pr:`1617`: Visually improved an example in our tutorial

* :pr:`1641`: Added an example for :class:`~.ComplexPlane` 

* :pr:`1644`: Added an example for :class:`~.BackgroundRectangle` 

* :pr:`1633`: Added an example for :class:`~.Integer` 

* :pr:`1630`: Added an example for :class:`~.Arc` 

* :pr:`1631`: Added an example for :class:`~.BulletedList` 

* :pr:`1620`: Fixed reference to command line interface help command


Changes to our development infrastructure
-----------------------------------------

* :pr:`1623`: CI: branch rename: master -> main

* :pr:`1621`: Revert default template and add new templates

* :pr:`1573`: PR template for the manim hackathon


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1720`: Renamed incorrect references of ``master`` to ``main`` 

* :pr:`1692`: Removed redundant warning in CLI parsing

* :pr:`1651`: Small code cleanup for :class:`~.Polygram` 

* :pr:`1610`: Changed one image extension to lowercase letters


New releases
------------

* :pr:`1738`: Preparation for v0.8.0: added changelog and bumped version number


===================================================
/. 🚀 docs/source/changelog/0.7.0-changelog.rst
===================================================

******
v0.7.0
******

:Date: June 01, 2021

Contributors
============

A total of 45 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* André +
* Anton Ballmaier
* Benjamin Hackl
* Clar Fon
* Darylgolden
* Devin Neal
* Hugues Devimeux
* Iced-Tea3 +
* Jan-Hendrik Müller
* Jason Villanueva
* Jerónimo Squartini +
* KingWampy
* Laith Bahodi
* Max Stoumen +
* Mohammad Al-Fetyani
* Naveen M K
* NeoPlato
* Newell Jensen
* Nikhil Garuda
* Nikhil Sharma +
* PaulCMurdoch +
* Philipp Imhof
* Raghav Goel
* Robert West +
* Ryan McCauley +
* Skaft +
* SwiddisZwei +
* e4coder +
* friedkeenan
* malte-v +
* ralphieraccoon
* sparshg


The patches included in this release have been reviewed by
the following contributors.

* Aathish Sivasubrahmanian
* Abhijith Muthyala
* Anton Ballmaier
* Aron
* Benjamin Hackl
* Darylgolden
* Devin Neal
* GameDungeon
* Hugues Devimeux
* Iced-Tea3
* Jan-Hendrik Müller
* Jason Villanueva
* Jerónimo Squartini
* KingWampy
* Laith Bahodi
* Mark Miller
* Mohammad Al-Fetyani
* Naveen M K
* Nikhil Garuda
* Oliver
* Philipp Imhof
* Raghav Goel
* Ricky Chon
* Ryan McCauley
* Skaft
* SwiddisZwei
* e4coder
* friedkeenan
* ralphieraccoon
* sparshg

Pull requests merged
====================

A total of 87 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`1521`: Improve :class:`~.Animation` docs
   - Improve documentation of the :class:`~.Animation` class.
   - Unify the signature of ``get_all_mobjects``. Now it always returns a sequence of :class:`Mobjects <.Mobject>`. This breaks using  ``FadeTransform.get_all_mobjects`` as ``Group``.

* :pr:`1470`: Drop support for Python 3.6
   Manim won't work on Python 3.6 anymore.

Highlights
----------

* :pr:`1447`: Added :class:`~.PolarPlane` for polar coordinates.

* :pr:`1490`: Added :class:`~.Polygram`, rework the polygon inheritance tree, and add :class:`~.Star`
   - Add :class:`~.Polygram`, a generalized :class:`~.Polygon` that allows for disconnected sets of edges.
   - Make :class:`~.Polygon` inherit from :class:`~.Polygram`.
   - Add :func:`~.regular_vertices`
   - Add :class:`~.RegularPolygram`.
   - Make :class:`~.RegularPolygon` inherit from :class:`~.RegularPolygram`.
   - Add :class:`~.Star`.

* :pr:`1462`: OpenGL: Added :class:`~.Shader`, :class:`~.Mesh`, and :class:`~.FullScreenQuad`
   Add Shader and Mesh objects

* :pr:`1418`: Added project management commands
   - ``manim init`` - quickly sets up default files for a manim project.
   - ``manim new project`` - lets the user set project settings. It also creates the project inside a new folder of name <project_name>
   - ``manim new scene`` - used to quickly insert new scenes into files. If ``file name`` is not provided ``main.py`` is used as default.

Deprecated classes and functions
--------------------------------

* :pr:`1598`: Update examples to use :class:`~.Axes` and deprecate :class:`~.GraphScene`
   :class:`~.GraphScene` has been deprecated and its functionality has been shifted to :class:`~.Axes`. See the updated example gallery for sample usage.

* :pr:`1454`: Fading module enhancements
   Moved functionality of all Fading classes to :class:`~.FadeIn` and :class:`~.FadeOut`. All other fading classes have been deprecated.

* :pr:`1375`: Deleted the deprecated ``ShowCreation`` in favor of :class:`~.Create` 


New features
------------

* :pr:`1566`: Added the ability to add gridlines to a :class:`~.Rectangle` 

* :pr:`1548`: Added :class:`~.ArcBrace`, a subclass of :class:`~.Brace`.

* :pr:`1559`: Update VGroup to support item assignment (#1530)
   Support indexed item-assignment for VGroup

* :pr:`1518`: Allow fading multiple Mobjects in one Animation

* :pr:`1422`: Added :func:`~.override_animation` decorator

* :pr:`1504`: Color module enhancements
   - Replaced ``BLUE_E`` with what was previously ``DARK_BLUE`` and removed ``DARK_BLUE`` 
   - Added alias ``LIGHTER_GRAY`` for ``GRAY_A`` 
   - Added ``PURE_RED``, ``PURE_BLUE`` and renamed ``GREEN_SCREEN`` to ``PURE_GREEN`` 
   - All gray colors are now also available using British spelling (including ``GREY_BROWN``)
   - Replaced color example in the docs. It can now be used as a quick reference for all color names.

* :pr:`1272`: Implement metaclass approach in geometry module to make mobjects compatible with cairo and opengl rendering

* :pr:`1404`: Added two deprecation decorators
   Added two function decorators ``deprecated`` and ``deprecated_params`` as a consistent way of deprecating code.

Enhancements
------------

* :pr:`1572`: OpenGL compatibility via metaclass: :class:`~.TracedPath`, :class:`~.ParametricFunction`, :class:`~.Brace`, :class:`~.VGroup` 

* :pr:`1472`: Porting methods from :class:`~.GraphScene` to :class:`~.CoordinateSystem` 

* :pr:`1589`: OpenGL compatibility via metaclass: :class:`~.ValueTracker` 

* :pr:`1564`: Add extra notes for TeX compilation errors
   Add hint to use custom ``TexTemplate`` on TeX compilation errors

* :pr:`1584`: Added a check for ``0`` in :meth:`~.round_corners` 

* :pr:`1586`: Add OpenGLMobject support to all ``isinstance`` occurrences
   This PR increases the support for OpenGL in the remaining animation classes and in other places where appropriate.

* :pr:`1577`: Added new metaclass ConvertToOpenGL (replacing MetaVMobject), restore IntelliSense

* :pr:`1562`: Improved VectorField's Nudge Accuracy Per Step
   Implemented the Runge-Kutta algorithm in VectorField's nudge function. This increases the accuracy as an object moves along a vector field. This also increases efficiency as the nudge function requires less loops to achieve accuracy than the previous implementation.

* :pr:`1480`: Add logging info to tex errors

* :pr:`1567`: Compatibility Fixes with ManimPango v0.3.0
   - ManimPango v0.3.0+ is required for Manim now.
   - Show errors from Pango when Markup isn't correct

* :pr:`1512`: OpenGL compatibility via metaclass: graph

* :pr:`1511`: OpenGL compatibility via metaclass: svg_mobject, text_mobject, tex_mobject

* :pr:`1502`: Added ``center`` parameter to :class:`~.Sphere` and ``point`` parameter to :class:`~.Dot3D` 

* :pr:`1486`: Update of ``rate_functions`` 
   Changed the picture for the non standard rate functions.

* :pr:`1495`: Ported value_tracker to OpenGL

* :pr:`1382`: Expand documentation, testing, and functionality of ValueTrackers; remove ExponentialValueTracker
   Added more documentation and inline operators to ValueTracker and ComplexValueTracker. Brought coverage for value_tracker.py to 100%. Removed ExponentialValueTracker.

* :pr:`1475`: Add SVG elliptical arc support


Fixed bugs
----------

* :pr:`1574`: Fixed error when processing SVG with omitted elliptical arc command

* :pr:`1596`: Fix indexing for non-whitespace tex arg separator
   Fixes #1568

   Fix issue when setting the arg_separator of a Tex object as a non-whitespace character(s). The method `break_up_by_substrings(self)` was not accounting for the separator when setting the index.

* :pr:`1588`: Fixed multiple animations being saved in the same file

* :pr:`1571`: Fix tests after introducing parallelization

* :pr:`1545`: Fix outdated parameters for :class:`LinearTransformationScene` and add an example + typing.

* :pr:`1513`: Fixed rotation of gradients while rotating a VMobject
   - Fixed the direction of gradient which remained the same while rotating VMobjects
   - Added ``rotate_sheen_direction()`` method in VMobject

* :pr:`1570`: Output errors to stderr

* :pr:`1560`: Declare ``*.npz`` ``*.wav`` ``*.png`` as binary in ``.gitattributes`` 

* :pr:`1211`: Refactored scene caching and fixed issue when a different hash was produced when copying a mobject in the scene
   Refactored internal scene-caching mechanism and fixed bug when an inconsistent hash was produced when copying a mobject.

* :pr:`1527`: Improved handling of substring isolation within sqrt, and fixed a bug with transform_mismatch for the matching shape transforms

* :pr:`1526`: Fix fading

* :pr:`1523`: Fix multiple FadeIn / Out only working on VMobjects


Documentation-related changes
-----------------------------

* :pr:`1599`: Added example for :class:`~.Annulus` 

* :pr:`1415`: New example for gallery and some docs refinements

* :pr:`1509`: Copyedited Documentation
   Added a link to Manim Community GitHub page in ``for_dev.rst``.
   Fixed :meth:`~.Mobject.get_start`  and added ``roll`` link in ``building_blocks-rst`` 
   Added language to code blocks in ``configuration.rst`` 

* :pr:`1384`: Added typings to space_ops.py
   Added Typehints to most of the functions

* :pr:`1500`: Example for :meth:`~.apply_complex_function` 

* :pr:`1551`: Fixed the typo for Admonitions

* :pr:`1550`: Restructuring of Contribution Section

* :pr:`1541`: Fixing broken links and other minor doc things

* :pr:`1516`: Update docs to use ``t_range`` instead of ``t_min`` and ``t_max`` in :class:`~.ParametricFunction` 

* :pr:`1508`: Update troubleshooting docs

* :pr:`1485`: Added :class:`~.Title` example for the docs

* :pr:`1439`: Cleaning ``Sequence`` typehints

* :pr:`1440`: Added Scoop installation docs (Windows)

* :pr:`1452`: Refine typehints at :class:`~.Angle` 

* :pr:`1458`: Refine docs of :class:`~.Text` ( add ``disable_ligatures=True`` for t2c)

* :pr:`1449`: Added :class:`~.PointCloudDot` example

* :pr:`1473`: Added easy example for :meth:`~.arrange_in_grid` 

* :pr:`1402`: Added typestring parser checker

* :pr:`1451`: Reduce complexity of AngleExample

* :pr:`1441`: Add inheritance diagrams to reference page
   Added inheritance diagrams to the reference page as a quick navigation method.

* :pr:`1457`: Fixing broken doc links

* :pr:`1445`: Remove $ from tutorial commands


Changes concerning the testing system
-------------------------------------

* :pr:`1556`: Try pytest-xdist for parallelization in tests


Changes to our development infrastructure
-----------------------------------------

* :pr:`1505`: Add docs reference to PR template
   Added documentation link to the Pull Request Template.

* :pr:`1499`: Updated Discord links in the docs to point towards a standardized redirect

* :pr:`1461`: Build the docs - Logging

* :pr:`1481`: pyproject.toml: poetry_core -> poetry-core

* :pr:`1477`: Update RDT sphinx package to version 3.5.3

* :pr:`1460`: Create CONTRIBUTING.md

* :pr:`1453`: manim_directive: fix image links in docs - Windows
   Use POSIX path on Windows to link images so documentation can build locally.

Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1465`: Added typings and description to some functions in :mod:`~.coordinate_systems`.

* :pr:`1552`: Removed unwanted parameters in geometry
   Removed ``anchors_span_full_range``, ``close_new_points``, ``anchors_span_full_range``, ``preserve_tip_size_when_scaling``, ``mark_paths_closed`` and ``close_new_points`` 

* :pr:`1597`: Removed hilite_me and insert_line_numbers_in_html from global name space

* :pr:`1535`: Update dependencies and fix tests

* :pr:`1544`: Adding spell checker as a pre-commit hook

* :pr:`1542`: Swapping a pango markup link in docs

* :pr:`1531`: Don't use deprecated methods in deprecation.py

* :pr:`1492`: Remove stray print statements introduced in #1404

* :pr:`1471`: Fix Some Warnings from lgtm


Changes that needed to be reverted again
----------------------------------------

* :pr:`1606`: Bring back ``DARK_BLUE`` 


New releases
------------

* :pr:`1601`: Preparation for v0.7.0: added changelog and bumped version number


===================================================
/. 🚀 docs/source/changelog/0.6.0-changelog.rst
===================================================

******
v0.6.0
******

:Date: May 02, 2021

Contributors
============

A total of 40 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Abel Aebker
* Abhijith Muthyala
* Adam Ryczkowski +
* Alex Lembcke +
* Anton Ballmaier
* Aron
* Benjamin Hackl
* Darylgolden
* Deniz Hasler +
* Devin Neal
* Elisha Hollander +
* Erik Tastepe +
* Jan-Hendrik Müller
* Jason Villanueva
* Laith Bahodi
* Mark Miller
* Mohammad Al-Fetyani
* Naveen M K
* Newell Jensen +
* Nidhal Baccouri +
* Nikhil Garuda +
* Peilonrayz +
* Raghav Goel
* Ricky Chon +
* friedkeenan
* kamilczerwinski22 +
* sparshg


The patches included in this release have been reviewed by
the following contributors.

* Aathish Sivasubrahmanian
* Abel Aebker
* Abhijith Muthyala
* Adam Ryczkowski
* Alex Lembcke
* Anton Ballmaier
* Aron
* Benjamin Hackl
* Darylgolden
* Deniz Hasler
* Devin Neal
* Elisha Hollander
* GameDungeon
* Hugues Devimeux
* Jan-Hendrik Müller
* Jason Villanueva
* KingWampy
* Laith Bahodi
* Mark Miller
* Mohammad Al-Fetyani
* Naveen M K
* Nidhal Baccouri
* Nikhil Garuda
* Oliver
* Philipp Imhof
* Raghav Goel
* Ricky Chon
* friedkeenan
* sparshg

Pull requests merged
====================

A total of 112 pull requests were merged for this release.

Breaking changes
----------------

* :pr:`1347`: Restructure vector_field module and add documentation
   :class`~.VectorField` is renamed to :class:`~.ArrowVectorField` and a new class :class:`~.VectorField` is added as a superclass for :class:`~.ArrowVectorField` and :class:`~.StreamLines`. :class:`~.AnimatedStreamLines` is removed. It's functionality is moved to :class:`~.StreamLines`. Added a lot of new options when working with vector fields. :class:`~.ShowPassingFlashWithThinningStrokeWidth` was moved to the indication module.

* :pr:`1161`: Upgrades to CoordinateSystem and graphing.
   Breaking changes were introduced to :class:`~.Axes`, :class:`~.ThreeDAxes`, :class:`~.NumberPlane` and :class:`~.NumberLine`
   All the above now use lists to construct their ranges as opposed to explicitly defining these values. `x_range` has replaced `x_min`, `x_max` and defining the step is much easier with `x_step` --> ``x_range``  :  ``[x_min, x_max, x_step]``. There were also many upgrades to these classes which improve their functionality and appearance.

   ``NumberLineOld`` was introduced to continue support for :class:`~.GraphScene`, although we are moving away from GraphScene and intend to deprecate it in a future release.

* :pr:`1013`: Refactored the Command Line Interface to use Click instead of Argparse
   This change breaks the CLI API to organize the structure of Manim Community's commands, options, and arguments.

   To be more in line with POSIX compliant CLI conventions, options for commands are given *BEFORE* their arguments.
   In Argparse: ``manim basic.py -p -ql`` 
   With Click: ``manim -p -ql basic.py`` 

    Although this is primarily a refactor and most of the common options are still there, some options have been added/removed. Use the ``manim`` command's ``--help`` option, or simply run the command without providing options/arguments to view the help page with the full list of subcommands/options/arguments.

   - Added a ``--fps``/``--frame_rate`` option which allows for custom fps that don't have to be integer (i.e. 29.97, 23.98, etc.). Users no longer have to specify the FPS from within a config file. Additionally, the ``--webgl_renderer_fps`` option has been removed. Use ``--fps`` or ``--frame_rate`` instead.
   - Added a ``--renderer`` option which you can use to select your choice of renderer (e.g. ``--renderer=opengl``). There are currently *THREE* renderers to choose from!
   - Removed the ``--background_color`` option. Reassigned the ``--background_color`` option's shorthand ``-c`` to ``--config_file``.
   - Removed the ``--leave_progress_bars`` option. Use ``--progress_bars=leave`` instead.
   - Removed the deprecated render quality flags, in particular: ``-l``, ``-m``, ``-h``, ``-k``.
   - Removed the ``--sound`` option. It lost support long ago with the removal of SoX.

Deprecated classes and functions
--------------------------------

* :pr:`1431`: Fix CLI bugs
   - Fixed conflict with ``-f`` which was previously assigned to both ``--show_in_file_browser`` and ``--format`` by removing ``-f`` from ``--format``. A warning is issued that ``-f`` will soon move to ``--format``.
   - Added back in flags to render the files as gif/last frame. Deprecated them in favor of ``--format``.
   - Fixed the broken ``--output_file``/``-o`` option.
   - Fixed an issue where the ``-qh`` quality option was interpreted as ``-q`` ``-h``, prompting the help page.

* :pr:`1354`: Refactored a few functions in space_ops.py, deprecated :func:`~.angle_between` 

* :pr:`1370`: Remove TexMobject and TextMobject
   TexMobject and TextMobject have been deprecated for a while, they are now fully removed. Use Tex or MathTex instead.

* :pr:`1349`: Removed the deprecated ``SmallDot`` mobject

* :pr:`1259`: Removed deprecated CairoText class

New features
------------

* :pr:`1386`: Implement utility methods for adding/removing vertices and edges of graphs; allow custom mobjects as vertices

* :pr:`1385`: Added :meth:`~.Axes.get_line_graph` for plotting a line graph
   Added :meth:`~.Axes.get_line_graph` that returns a line graph from lists of points along x, y and z (optional) axes.

* :pr:`1381`: Hot reloading for the OpenGL renderer
   Rerun scene when the input file is modified

* :pr:`1383`: Overhaul of the :mod:`~.animation.indication` module interfaces
   - Added class `Circumscribe` combining functionality of `CircleIndicate`, `AnimationOnSurroundingRectangle`, `ShowPassingFlashAround`, `ShowCreationThenDestructionAround`, `ShowCreationThenFadeAround`, which have all been deprecated.
   - Changes to `Flash`: `flash_radius` parameter now defines inner radius of the animation. Added new parameter `time_width`.
   - `ShowCreationThenDestruction` has been deprecated in favor of `ShowPassingFlash`
   - Changes to `ApplyWave`: New implementation giving more flexibility with new parameters `wave_func`, `time_width` and`ripples`
   - Renamed `WiggleOutThenIn` to `Wiggle` (`WiggleOutThenIn` has been deprecated)
   - Added documentation and examples to all the above
   - Other minor enhancements and bug-fixes

* :pr:`1348`: Added :class:`~.Polyhedron`, and platonic solids :class:`~.Tetrahedron`, :class:`~.Octahedron`, :class:`~.Icosahedron` and :class:`~.Dodecahedron` 

* :pr:`1285`: Add :meth:`~.Scene.interactive_embed` for OpenGL rendering
   :meth:`~.Scene.interactive_embed` allows interaction with Scene via mouse and keyboard as well as dynamic commands via an iPython terminal.

* :pr:`1261`: Render image automatically if no animation is played in a scene
   - If no animations in scene and asked to preview/render a video, preview/render an image instead of raising a confusing error.

* :pr:`1200`: Add text and SVG mobjects to OpenGL
   Added OpenGL-compatible text and SVG mobjects

Enhancements
------------

* :pr:`1398`: Fix and enhance `Mobject.arrange_in_grid`
   `arrange_in_grid` now actually arranges submobjects in a grid. Added new parameters `buff`, `cell_alignment`, `row_alignments`, `col_alignments`, `row_heights`, `col_widths`, `flow_order`.

* :pr:`1407`: Fix bug and rename :meth:`vector_coordinate_label` to :meth:`~.Vector.coordinate_label` and move it to :class:`geometry.py` 

* :pr:`1380`: Allow image objects as background images

* :pr:`1391`: Add `path_arc` support to `.animate` syntax
   The parameter `path_arc` of :class:`~.Transform` now works with the `.animate` syntax

* :pr:`1364`: Added :meth:`~.Mobject.match_points`
   - Added :func:`~.Mobject.match_points`, which transforms the points, positions and submobjects of a Mobject to match that of the other while keeping style unchanged.

* :pr:`1363`: Change of TeX compiler and output file format

* :pr:`1359`: Make FILE a required argument
   * Make `FILE` a required argument, `manim/cli/render/commands.py`:L30

* :pr:`1304`: Improve Tex string splitting at double braces: only split for double brace groups

* :pr:`1340`: Add OpenGL support to the new transform animations
   Made `FadeTransform`, `FadeTransformPieces`, `TransformMatchingShapes` and `TransformMatchingTex` compatible with OpenGL rendering.

* :pr:`1343`: Make TexTemplate() simple, but keep Tex()'s default template
   TexTemplate() now returns a simple tex template.

* :pr:`1321`: Add OpenGL support to :class:`~.AnimationGroup` 

* :pr:`1302`: Raise appropriate errors in :meth:`~.VMobject.point_from_proportion`
   - Raise an error if the ``alpha`` argument is not between 0 and 1.
   - Raise an error if the :class:`~.VMobject` has no points.

* :pr:`1315`: Fix performance issues with :meth:`~.VMobject.get_arc_length`, stemming from :pr:`1274` 

* :pr:`1320`: Add `jpeg` extension to the default image extensions

* :pr:`1234`: Added new method :meth:`~.Mobject.get_midpoint`
   Implemented :meth:`~.Mobject.get_midpoint` to return the point that is the middle of the stroke line of an mobject.

* :pr:`1237`: Notify user if they are using an outdated version of Manim

* :pr:`1308`: Improved :class:`~.ManimBanner` animations

* :pr:`1275`: Add SVG <line> element support to :class:`~.SVGMobject` 

* :pr:`1238`: Add parameter ``about_point`` for :meth:`~.Mobject.rotate` 

* :pr:`1260`: Change Brace from Tex to SVG (#1258)

* :pr:`1122`: Support for specifying the interpolation algorithms for individual ImageMobjects

* :pr:`1283`: Set default value of keyword ``random_seed`` in :class:`~.Scene` to ``None`` (was 0 and fixed before)

* :pr:`1220`: Added sanity checks to :meth:`~.Mobject.add_to_back` for Mobjects
   Add Mobject `add_to_back` sanity checks: 
   - Raises ValueError when Mobject tries to add itself
   - Raises TypeError when a non-Mobject is added
   - Filters out incoming duplicate submobjects if at least one instance of that submobject exists in the list

* :pr:`1249`: Set corners of :class:`~.Rectangle` in counterclockwise direction
   This improves the look of transformations between rectangles and other simple mobjects.

* :pr:`1248`: Add Copy function to TexTemplate


Fixed bugs
----------

* :pr:`1368`: Added a check to ensure checking for the latest version was successful

* :pr:`1413`: Prevent duplication of the same mobject when adding to submobjects via :meth:`~.Mobject.add_to_back`
   Fixes #1412

* :pr:`1395`: SVG transforms now handle exponent notation (6.02e23)

* :pr:`1355`: Rewrite `put_start_and_end_on` to work in 3D

* :pr:`1346`: Fixed errors introduced by stray print in :class:`~.MathTex` 

* :pr:`1305`: Automatically remove long tick marks not within the range of the :class:`~NumberLine` 

* :pr:`1296`: Fix random pipeline TeX failures

* :pr:`1274`: Fix :meth:`~.VMobject.point_from_proportion` to account for the length of curves.
   - Add :meth:`~.VMobject.get_nth_curve_function_with_length` and associated functions.
   - Change :meth:`~.VMobject.point_from_proportion` to use these functions to account for curve length.

Documentation-related changes
-----------------------------

* :pr:`1430`: Un-deprecated GraphScene (will be deprecated later), fixed an old-style call to NumberPlane
   - More work is required in order to fully replace `GraphScene` via `Axes`, thus `GraphScene` is not deprecated yet.
   - Fixed one example in which the old `NumberPlane` syntax was used.

* :pr:`1425`: Added a "How to Cite Manim" section to the Readme

* :pr:`1387`: Added Guide to Contribute Examples from GitHub Wiki to Documentation
   Added a Guide

* :pr:`1424`: Fixed all current docbuild warnings

* :pr:`1389`: Adding Admonitions Tutorial to docs

* :pr:`1341`: Reduce complexity of ThreeDSurfacePlot example

* :pr:`1362`: Quick reference to modules

* :pr:`1376`: Add flake8 and isort in docs
   added 'flake8' and 'isort' usages to docs

* :pr:`1360`: Grammatical error corrections in documentation
   changed a few sentences in docs/source

* :pr:`1351`: Some more typehints

* :pr:`1358`: Fixed link to installation instructions for developers

* :pr:`1338`: Added documentation guidelines for type hints

* :pr:`1342`: Multiple ValueTracker example for docs

* :pr:`1210`: Added tutorial chapter on coordinates of an mobject

* :pr:`1335`: Added import statements to examples in documentation

* :pr:`1245`: Added filled angle Example

* :pr:`1328`: Docs: Update Brace example

* :pr:`1326`: Improve documentation of :class:`~.ManimMagic` (in particular: fix documented order of CLI flags)

* :pr:`1323`: Blacken Docs Strings

* :pr:`1300`: Added typehints for :class:`~.ValueTracker` 

* :pr:`1301`: Added further docstrings and typehints to :class:`~.Mobject` 

* :pr:`1298`: Add double backquotes for rst code samples (value_tracker.py)

* :pr:`1297`: Change docs to use viewcode extension instead of linkcode
   Switched ``sphinx.ext.linkcode`` to ``sphinx.ext.viewcode`` and removed ``linkcode_resolve`` in ``conf.py``.

* :pr:`1246`: Added docstrings for :class:`~.ValueTracker` 

* :pr:`1251`: Switch documentation from guzzle-sphinx-theme to furo

* :pr:`1232`: Further docstrings and examples for :class:`~.Mobject` 

* :pr:`1291`: Grammar improvements in README.md

* :pr:`1269`: Add documentation about :meth:`~.set_color_by_tex` 

* :pr:`1284`: Updated readme by providing the correct link to the example_scenes

* :pr:`1029`: Added example jupyter notebook into the examples folders

* :pr:`1279`: Added sphinx requirements to pyproject.toml
   New contributors who wanted to build the sphinx documentation had an extra step that could be removed by making use of ``poetry install``. This removes the developer's need for ``pip install -r requirements.txt``.

* :pr:`1268`: Added documentation explaining the differences between manim versions

* :pr:`1247`: Added warning for the usage of `animate` 

* :pr:`1242`: Added an example for the manim colormap

* :pr:`1239`: Add TinyTex installation instructions

* :pr:`1231`: Improve changelog generation script


Changes concerning the testing system
-------------------------------------

* :pr:`1299`: Red pixels (different value) now appear over green pixels (same value) in GraphicalUnitTest


Changes to our development infrastructure
-----------------------------------------

* :pr:`1436`: Cache poetry venv with `pyproject.toml` hash in key
   Cache poetry venv with `pyproject.toml` hash in key

* :pr:`1435`: CI: Update poetry cache when new version is released
   Fix `test_version` failure in CI when using cached poetry venv

* :pr:`1427`: Add URL's to pyproject.toml

* :pr:`1421`: Updated changelog generator's labels and removed pre-commit bot from changelog

* :pr:`1339`: CI: Fix macOS installation error from creating file in read-only file system

* :pr:`1257`: CI: Caching ffmpeg, tinytex dependencies and poetry venv
   CI: Caching ffmpeg, tinytex dependencies and poetry venv

* :pr:`1294`: Added mixed-line-ending to .pre-commit-config.yaml

* :pr:`1278`: Fixed flake8 errors and removed linter/formatter workflows

* :pr:`1270`: Added isort to pre_commit file

* :pr:`1263`: CI: Turn off experimental installer for poetry to fix installation errors
   - Turn off experimental installer for poetry to prevent manim installation errors for packages.
   - Downgrade py39 to py38 for flake checks as `pip` does not enjoy py39, along with `poetry`.

* :pr:`1255`: CI: Fix macOS pipeline failure
   Update `ci.yml` to update and upgrade brew if necessary before installing dependencies, and remove the unsupported `dvisvgm.86_64-darwin` package.

* :pr:`1254`: Removed the comment warning that GitHub doesn't allow uploading video in the issue templates.

* :pr:`1216`: Use actions/checkout for cloning repository; black-checks

* :pr:`1235`: Fixed version of decorator at <5.0.0


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1411`: Change `Union[float, int]` to just `float` according to PEP 484

* :pr:`1241`: Type Annotations: Fixing errors showing up in static type checking tool mypy

* :pr:`1319`: Fix mean/meant typo
   Fix typo in docs

* :pr:`1313`: Singular typo fix on the Quickstart page in documentation

* :pr:`1292`: Remove unnecessary imports from files
   Imports reduced in a bunch of files

* :pr:`1295`: Fix grammar and typos in the CODE OF CONDUCT

* :pr:`1293`: Minor fixes - reduce lines
   Remove unnecessary lines

* :pr:`1281`: Remove all Carriage Return characters in our files

* :pr:`1178`: Format Imports using Isort

* :pr:`1233`: Fix deprecation warning for ``--use_opengl_renderer`` and ``--use_webgl_renderer`` 

* :pr:`1282`: Fix typing hints in vectorized_mobject.py based on mypy


New releases
------------

* :pr:`1434`: Prepare v0.6.0


===================================================
/. 🚀 docs/source/changelog/0.5.0-changelog.rst
===================================================

******
v0.5.0
******

:Date: April 02, 2021

Contributors
============

A total of 35 people contributed to this 
release. People with a '+' by their names authored a patch for the first
time.

* Abel Aebker +
* Abhijith Muthyala
* AntonBallmaier +
* Aron
* Benjamin Hackl
* Bogdan Stăncescu +
* Darylgolden
* Devin Neal
* GameDungeon +
* Hugues Devimeux
* Jason Villanueva
* Kapil Sachdeva
* KingWampy
* Lionel Ray +
* Mark Miller
* Mohammad Al-Fetyani +
* Naveen M K
* Niklas Dewally +
* Oliver +
* Roopesh +
* Seb Pearce +
* aebkea +
* friedkeenan
* hydrobeam +
* kolibril13
* sparshg
* tfglynn +


The patches included in this release have been reviewed by
the following contributors.

* Abel Aebker
* Abhijith Muthyala
* Benjamin Hackl
* Bogdan Stăncescu
* Devin Neal
* Hugues Devimeux
* Jason Villanueva
* Kapil Sachdeva
* KingWampy
* Leo Torres
* Lionel Ray
* Mark Miller
* Mohammad Al-Fetyani
* Naveen M K
* Oliver
* Ricky Chon
* vector67

Pull requests merged
====================

A total of 64 pull requests were merged for this release.

Highlights
----------

* :pr:`1075`: Add OpenGL Renderer
   Adds an OpenGLRenderer, OpenGLCamera, OpenGL-enabled Mobjects, and a ``--use_opengl_renderer`` flag. When this flag is passed, you can pass the ``-p`` flag to preview animations, the ``-w`` flag to generate video, and the ``-q`` flag to specify render quality. If you don't pass either the ``-p`` or the ``-w`` flag, nothing will happen. Scenes rendered with the OpenGL renderer must *only* use OpenGL-enabled Mobjects.

Deprecated classes and functions
--------------------------------

* :pr:`1124`: Deprecated :class:`ShowCreation` in favor of :class:`Create`
   1. Deprecated :class:`ShowCreation` in favor of :class:`Create` across the library with the exception of the `show_creation` boolean variable `vector_space_scene.py`
   2. Added a deprecation warning in the original :class:`ShowCreation` class.

* :pr:`1110`: Deprecated SmallDot + OpenGLSmallDot
   `SmallDot` isn't necessary and a deprecation warning will be raised. This will be removed in a future release.

New features
------------

* :pr:`1037`: Added new fade and transform animations (:class:`~.TransformMatchingShapes`, :class:`~.TransformMatchingTex`, :class:`~.FadeTransform`) from 3b1b/manim
   Added new Fade animation: :class:`~FadeOutToPoint`
   Added :class:`~FadeTransform` and :class:`~FadeTransformPieces` for transforming mobjects and submobjects with a fade
   Added :class:`~TransformMatchingShapes` and :class:`~TransformMatchingTex` for transforming mobjects and tex that have matching parts

* :pr:`1097`: Added 3D Mobject :class:`~.Dot3D` 

* :pr:`1074`: Added jupyter media_width option to the config

* :pr:`1107`: Added :class:`~.Unwrite` animation class to complement :class:`~.Write`
   Added :class:`Unwrite` which inherits from :class:`~.Write`. It automatically reverses the animation of :class:`~.Write` by passing the reversed rate function, but it also takes an additional boolean parameter `reverse` which, if `False`, renders the animation from left to right (assuming text oriented in the usual way), but if `True`, it renders right to left.

* :pr:`1085`: Added :class:`~.Angle` and :class:`~.RightAngle` for intersecting lines
   :class:`~.Angle` and :class:`~.RightAngle` both take two lines as input. If they intersect, or share a common vertex, an angle is drawn between them. Users can customize the look of the angle and also use a dotted right angle.

Enhancements
------------

* :pr:`1144`: Improved quality of GIFs

* :pr:`1157`: Refresh triangulation on call to :meth:`~.OpenGLVMobject.apply_points_function`
   Rotate called apply_points_function, which was previous not subclassed by OpenGLMobject - now it is. Then, the vertex normals can be updated too.

   Additionally, the old_points matrix would change after rotating, making the old points / new points test irrelevant. This is addressed with a .copy call.

* :pr:`1151`: Added parametric function support to :class:`OpenGLSurface` 

* :pr:`1139`: In-Code `config["preview"]` Support

* :pr:`1123`: Added caching, skipping, and user-specified background colors to the OpenGL renderer
   OpenGL play logic has been improved to support caching and skipping with `-n` argument ( it is now similar to Cairo play logic). A random bug was fixed in OpenGLSurface and OpenGL background color can now be changed via `background_color` argument.

* :pr:`1118`: Allow passing animation arguments with .animate syntax
   Users will now be able to do things like `obj.animate(run_time=2).method(arg)` if they want to specify animation arguments for an individual `.animate` call, and can still not specify any arguments like `obj.animate.method(arg)`.

   Passing animation arguments is only allowed directly after `.animate` is accessed, if passed elsewhere then a `ValueError` is raised.

* :pr:`718`: Rotating the numbers in y axis
   In Axes, the y axis will be rotated 90deg but the numbers are
   also rotated and shouldn't be. Fixes this issue.

* :pr:`1070`: Raise FileNotFoundError when unable to locate the .cfg file specified via ``--config_file`` 
   Raising the error will stop script execution and let the user know that there are problems with the `--config_file` location instead of reverting back to the default configuration.

Fixed bugs
----------

* :pr:`1224`: Fixed :class:`~.ShowIncreasingSubsets`, :class:`~.ShowSubmobjectsOneByOne`, and :class:`~.AddTextLetterByLetter` 

* :pr:`1201`: Prevent crash on :meth:`~.Scene.embed` for empty scenes

* :pr:`1192`: Fixed issue when an animation is cached, manim can't merge the partial movie files.

* :pr:`1193`: Fixed using :class:`~.Animation` without a child :class:`~.Mobject` in :class:`~.AnimationGroup`
   `AnimationGroup` may now take `Animation` objects which do not have a child `Mobject`, such as `Wait`.

* :pr:`1170`: Fixed minor SVG parsing bugs

* :pr:`1159`: Added support for multiple transforms in the same SVG element

* :pr:`1156`: Fixed :class:`~.DrawBorderThenFill` to support OpenGL and improved type hints for some functions
   Fixed a bug in :class:`~.DrawBorderThenFill` that prevented :class:`~.Write` animations from working with :class:`~.OpenGLVMobjects` and slightly improved type hints for some animation functions to include :class:`~.OpenGLVMobject`.

* :pr:`1134`: Fixed the `-a` flag.
   The ``-a`` / ``--write-all`` flag was broken. When used, it would cause Manim to crash just after beginning to render the second scene.

* :pr:`1115`: Fixed bugs in :class:`~.OpenGLMobject` and added :class:`ApplyMethod` support
   Fixed undefined variables and converted :class:`Mobject` to :class:`OpenGLMobject`. Also, fixed assert statement in :class:`ApplyMethod`.

* :pr:`1092`: Refactored coordinate_systems.py, fixed bugs, added :class:`~.NumberPlane` test
   The default behavior of :meth:`~.Mobject.rotate` is to rotate about the center of :class:`~.Mobject`. :class:`~.NumberLine` is symmetric about the point at the number 0 only when ``|x_min|`` == ``|x_max|``. Ideally, the rotation should coincide with
   the point at number 0 on the line.

   Added a regression test and additionally fixed some bugs introduced in :pr:`718`.

* :pr:`1078`: Removed stray print statements from `__main__.py`
   Uses rich's print traceback instead and fixes an issue in printing the version twice when `manim --version` is called.

* :pr:`1086`: Fixed broken line spacing in :class:`~.Text`
   The `line_spacing` kwarg was missing when creating :class:`Text` Mobjects; this adds it.

* :pr:`1083`: Corrected the shape of :class:`~.Torus`
   :class:`Torus` draws a surface with an elliptical cross-section when `minor_radius` is different from 1. This PR ensures the cross-section is always a circle.

Documentation-related changes
-----------------------------

* :pr:`1217`: Copyedited the document on testing in our documentation

* :pr:`1206`: Added Docstrings to :class:`~.Mobject` 

* :pr:`1218`: Removed BezierSpline from the example gallery

* :pr:`1219`: Updated Dockerfile (include dependencies for building documentation), moved documentation to main README

* :pr:`1209`: Added :ref_methods: to the manim directive
   This allows class methods to be linked in the documentation. Checkout the `example references <https://docs.manim.community/en/latest/examples.html#movingaround>`_ below the code to see how this is used!

* :pr:`1204`: Added rotation example to example gallery

* :pr:`1137`: Added GitHub Wiki pages on adding testing/documentation to Sphinx Docs

* :pr:`1114`: Added examples for :class:`~.Ellipse`, :class:`~.Polygon`, :class:`~.RegularPolygon`, :class:`~.Triangle` and :class:`~.RoundedRectangle` 

* :pr:`1195`: Removed SmallDot from example

* :pr:`1130`: Added pre-commit to run black and flake8, updated contributing documentation accordingly

* :pr:`1138`: Moved previous version changelogs to separate files; Added a Script to generate future changelogs
   This script quickly generates a changelog for whoever is making the release.

* :pr:`1190`: Added note in contributing guide to read the latest version of the documentation

* :pr:`1188`: Added sounds example to docs

* :pr:`1165`: Added documentation for installing Manim on Colab

* :pr:`1128`: Added examples for :class:`~.DashedLine`, :class:`~.TangentLine`, :class:`~.Elbow`, :class:`~.Arrow`, :class:`~.Vector`, :class:`~.DoubleArrow` 

* :pr:`1177`: Replace links to the latest version of the documentation to the stable version

* :pr:`1077`: Added details to :func:`~.Mobject.get_critical_point` 

* :pr:`1154`: Fixed some typing hints. (ints to floats)

* :pr:`1036`: Added :class:`~.SurroundingRectangle` to the example gallery

* :pr:`1103`: Added documentation and examples for Square, Dot, Circle and Rectangle

* :pr:`1101`: Added documentation to :class:`~.Mobject` 

* :pr:`1088`: Added new svg files to documentation and imports
   In particular, SVGPathMobject, VMobjectFromPathstring, and the style_utils functions to manim's namespace.

* :pr:`1076`: Improve documentation for GraphScene
   Updated `coords_to_point` and `point_to_coords` under `manim/scene/graph_scene.py` as the dosctring of each function confusingly described the opposite of what it is supposed to do.

Changes concerning the testing system
-------------------------------------

* :pr:`1160`: Enable CI testing for OpenGL

* :pr:`1100`: Rewrote test cases to use sys.executable in the command instead of "python"
   Tests would fail due to `capture()` not spawning a subshell in the correct environment, so when python was called, the test would be unable to find necessary packages.

* :pr:`1079`: Removed the hardcoded value, `manim`, in `test_version.py` 


Changes to our development infrastructure
-----------------------------------------

* :pr:`1213`: Updated TinyTex dependencies

* :pr:`1187`: Add CodeCov to Github Workflow

* :pr:`1166`: CI: Use poetry's cache dir rather than pip

* :pr:`1071`: Enable pytest-cov based code coverage
   - Include pytest-cov as a python module as part of developer dependencies
   - In updating poetry to include pytest-cov, manimpango moved from version 0.2.3 to 0.2.4, and libpango1.0-dev needed to be installed in Ubuntu.
   - Add to the CI workflow (`ci.yml`) to create and upload test coverage.

* :pr:`1073`: Removed "one line summary" from PULL_REQUEST_TEMPLATE.md


Code quality improvements and similar refactors
-----------------------------------------------

* :pr:`1167`: Merge :class:`~.OpenGLMobject` and :class:`~.Mobject` 

* :pr:`1164`: Fixed single PEP8 style in `cairo_renderer.py` 

* :pr:`1140`: Flake8 Compat & Code Cleanup

* :pr:`1019`: Refactored :meth:`~.Scene.play`
   - Removed the _**three**_ decorators of :meth:`~.Scene.play`, in particular: caching logic and file writer logic are now included within :meth:`~.Scene.play` (it wasn't possible before, because `scene.wait` and `scene.play` were two different things).
   - Added `is_static_wait` attributes to Wait. (<=> if wait is a frozen frame).
   - Renamed and moved `scene.add_static_frame` to `renderer.freeze_current_frame`.
   - Now when calling play without animation, it raises `ValueError` instead of just a warning.
   - Fixed :pr:`874` by modifying `renderer.update_skipping_status`
   - `renderer` starts the animation with `scene.begin_animations` (`scene.compile_animation_data` used to do this)
   - The run time and the time progression generation is now done in `scene.play_internal` although it'd make more sense that renderer processes it later.
   - Added a bunch of cool tests thanks to mocks, and thanks to the new syntax `scene.render` 


===================================================
/. 🚀 docs/source/changelog/0.4.0-changelog.rst
===================================================

******
v0.4.0
******

:Date: March 3, 2021

The changes since Manim Community release v0.3.0 are listed below.

Breaking Changes
================

- :pr:`915`: Manim's SVG engine has been reworked and is able to handle a wider variations of SVG files. In particular: fill and stroke properties are now retained from the original files. Breaking change: ``VMobjectFromSVGPathstring`` is deprecated and has been renamed to ``SVGPathMobject``.


New Features
============

- :pr:`1026`: Add 3D Mobjects: :class:`~.Cone`, :class:`~.Cylinder`, :class:`~.Line3D`, :class:`~.Arrow3D` and :class:`~.Torus`
- :pr:`1047`: Add documentation and examples for :class:`~.Matrix`
- :pr:`1044`: ``register_font`` is available for macOS
- :pr:`995`: Add generic :func:`~.Mobject.set` method and compatibility layer between properties and ``get_*``/``set_*`` methods

Bugfixes and Enhancements
=========================

- :pr:`981`: Fixed hot reload functionality for the WebGL renderer on Windows
- :pr:`1053`: Repair links to source code in stable version of documentation
- :pr:`1067`: Add ManimPango to ReadTheDocs requirements
- :pr:`1058`: Replace ``<color>`` syntax by Pango's ``<span foreground>`` for coloring parts of :class:`~.MarkupText` and allow using colors for underline, overline and strikethrough in MarkupText
- :pr:`1063`: Fix documentation related to ``.animate`` 
- :pr:`1065`: Remove duplicate word 'vector'
- :pr:`1060`: Update Linux installation instructions to mention the installation of Pango
- :pr:`1050`: Ensure that the user-supplied stroke color and width gets applied to :class:`~.Cross`
- :pr:`1059`: More descriptive error when accessing an unhandled mobject attribute
- :pr:`1048`: Use absolute path in ``make_and_open_docs.py`` 
- :pr:`1000`: Remove ``MovingCameraScene.setup`` and ``MovingCameraScene.camera_frame`` 
- :pr:`1051`: Corrections for setting stroke related attributes on :class:`~.VMobject`
- :pr:`1043`: Make :class:`~.CubicBezier` explicitly accept four points
- :pr:`1046`: Use any version of ``importlib-metadata`` 
- :pr:`1030`: Parse ``.log`` file and try to print LaTeX errors if compilation fails
- :pr:`1015`: Documentation: Add more explicit instructions related to ``tlmgr`` 
- :pr:`1028`: Documentation: Update installation guide on mac with Apple Silicon
- :pr:`1032`: Remove ``Square.side_length`` property
- :pr:`1031`: Fix link to wikipedia vector graphics page
- :pr:`1021`: Documentation: Added example to :class:`~.CubicBezier`
- :pr:`1017`: Added ``progress_bar`` to ``digest_args`` to fix the ``--progress_bar`` CLI flag
- :pr:`1018`: Remove redundancy in :class:`~.FunctionGraph` arguments
- :pr:`1024`: Migrate ``width`` / ``height`` / ``depth`` to properties
- :pr:`1022`: Fix ``-p`` flag when passing ``-s`` 
- :pr:`1008`: CI pipeline: fix release asset upload
- :pr:`983`: Make sure last frame for animations with updaters is correct
- :pr:`984`: Add manim version to CLI output, append version name for generated ``.gif`` and ``.png`` files, add version to metadata of rendered videos, change dark blue terminal text to default green
- :pr:`993`: Fix setting Mobject color to a gradient by passing a list of colors in :meth:`~.VMobject.set_color`
- :pr:`1003`: Fix animation :class:`~.GrowArrow`
- :pr:`1010`: Disable STDIN interaction for ffmpeg concat.
- :pr:`969`: Fix the ``--tex_template`` CLI flag
- :pr:`989`: Fix the ``manim cfg export`` subcommand
- :pr:`1005`: Fix the feature where ``-`` is used as the filename
- :pr:`998`: Allow using hexadecimal color codes with 3 characters
- :pr:`996`: Changed the message of ``manim --version`` to not include "Edition"


===================================================
/. 🚀 docs/source/changelog/0.3.0-changelog.rst
===================================================

******
v0.3.0
******

:Date: February 1, 2021

The changes since Manim Community release v0.2.0 are listed below.


New Features
============

- :pr:`945`: :meth:`~.Graph.change_layout` method for :class:`~.Graph` mobject
- :pr:`943`: IPython %%manim magic
- :pr:`970`: Added ``--version`` command line flag
- :pr:`948`: Allow passing a code string to :class:`~.Code`
- :pr:`917`: Allow overriding new-style method animations
- :pr:`756`: Allow setting frame_height and frame_width via config file
- :pr:`939`: Added custom font files support
- :pr:`892`: Added ManimCommunity colors
- :pr:`922`: Tree layout for Graph mobject
- :pr:`935`: Added code of conduct
- :pr:`916`: Multi-column layout for partite graphs
- :pr:`742`: Units: Pixels, Munits, Percent in :mod:`~.utils.unit`
- :pr:`893`: Convenience method :meth:`~.Graph.from_networkx` for creating a graph from a networkx graph

Bugfixes and Enhancements
=========================

- :pr:`988`: Fix Windows CI pipeline by adding missing LaTeX package
- :pr:`961`: Added typings and docs for vectorized mobjects and bezier related functions
- :pr:`977`: JupyterLab docker image and documentation for manim and IPython
- :pr:`985`: Fix variable name for webgl renderer
- :pr:`954`: Fix edges lagging behind vertices in animations of graphs
- :pr:`980`: Allow usage of custom Pygments styles in Code
- :pr:`952`: Allow passing tween information to the WebGL frontend
- :pr:`978`: Fix ``possible_paths`` not printing in ``code_mobject`` 
- :pr:`976`: Update ``ManimPango`` 
- :pr:`967`: Automatically import plugins
- :pr:`971`: Make ManimCommunity look consistent
- :pr:`957`: Raise ``NotImplementedError`` when trying to chain overridden method animations
- :pr:`947`: Several fixes and improvements for :class:`~.PointCloundDot`
- :pr:`923`: Documentation: move installation instructions for developers to page for developers
- :pr:`964`: Added unit test for :class:`~.NumberLine`'s unit vector
- :pr:`960`: Magnitude of :class:`~.NumberLine`'s unit vector should be ``unit_size``, not 1
- :pr:`958`: Fix code formatting in ``utils/debug.py`` 
- :pr:`953`: Update license year
- :pr:`944`: Interpolate stroke opacity in :class:`~.FadeIn` and update ``stroke_opacity`` and ``fill_opacity`` in :meth:`~.VMobject.set_stroke` and :meth:`~.VMobject.set_fill`
- :pr:`865`: Rename ``get_submobject_index_labels`` to ``index_labels`` 
- :pr:`941`: Added keyword arguments ``x_min``, ``x_max``, ``y_min``, ``y_max`` to :class:`~.ThreeDAxes`
- :pr:`886`: Let the render progress bar show details about the rendered animation again
- :pr:`936`: Fix :class:`~.BulletedList` TeX environment problem and add a typing to ``get_module`` 
- :pr:`938`: Remove dependency on progressbar
- :pr:`937`: Change 'brew cask install' to 'brew install --cask' for CI pipeline
- :pr:`933`: Make matrix work with lists again
- :pr:`932`: Correctly parse ``log_dir`` option
- :pr:`920`: Raise error if markup in :class:`~.MarkupText` is invalid
- :pr:`929`: Raise an error if a :class:`~.Matrix` object is created with < 2-dimensional input
- :pr:`907`: Make Scene.add_sound work again (when running with ``--disable_caching``)
- :pr:`906`: Allow new-style method animation to be used in animation groups
- :pr:`908`: Removed deprecated command line arguments from documentation
- :pr:`903`: Tiny grammar improvements
- :pr:`904`: Added blank line between imports and class example
- :pr:`898`: CI: fix publish workflow


===================================================
/. 🚀 docs/source/changelog/0.2.0-changelog.rst
===================================================

******
v0.2.0
******

:Date: January 1, 2021

The changes since Manim Community release v0.1.1 are listed below.

Breaking Changes
================

- Remove all CONFIG dictionaries and all calls to ``digest_config`` and allow
  passing options directly to the constructor of the corresponding classes (:pr:`783`).

  Practically, this means that old constructions using ``CONFIG`` like::

  .. code-block::

      class SomeMobject(Thing): 
          CONFIG = {
              "my_awesome_property": 42
          }

  where corresponding objects were then instantiated as ``my_mobject = SomeMobject()`` 
  should now be created simply using ``my_mobject = SomeMobject(my_awesome_property=42)``.

- Remove old syntax for animating mobject methods by passing the methods and arguments to ``self.play``,
  and use a new syntax featuring the ``animate`` property (:pr:`881`).

  For example: the old-style ``play`` call
  ::

      self.play(my_square.shift, LEFT)

  should be replaced with the new following call using the ``animate`` property::

      self.play(my_square.animate.shift(LEFT))

New Features
============

- Added creation animation for :class:`~.ManimBanner` (:pr:`814`)
- Added some documentation to :meth:`~.Scene.construct` (:pr:`753`)
- Added a black and white monochromatic version of Manim's logo (:pr:`826`)
- Added support for a plugin system (``manim plugin`` subcommand + documentation) (:pr:`784`)
- Implemented ``__add__``, ``__iadd__``, ``__sub__``, and ``__isub__`` for :class:`~.Mobject` (allowing for notation like ``some_vgroup + some_mobject``) (:pr:`790`)
- Added type hints to several files in the library (:pr:`835`)
- Added some examples to :mod:`~.animation.creation` (:pr:`820`)
- Added some examples to :class:`~.DashedLine` and :class:`~.CurvesAsSubmobjects` (:pr:`833`)
- Added new implementation for text rendered with Pango, :class:`~.MarkupText`, which can be formatted with an HTML-like syntax (:pr:`855`)
- Added Fading in and out examples and deprecation of ``FadeInFromDown`` and ``FadeOutAndShiftDown`` (:pr:`827`)
- Added example for :class:`~.MoveAlongPath` to the docs (:pr:`873`)
- Added ambient rotate for other angles - theta, phi, gamma (:pr:`660`)
- Use custom bindings for Pango (:pr:`878`)
- Added :class:`~.Graph`, a basic implementation for (graph theory) graphs (:pr:`861`)
- Allow for chaining methods when using the new ``.animate`` syntax in :meth:`~.Scene.play` (:pr:`889`)

Bugfixes
========

- Fix doctests in .rst files (:pr:`797`)
- Fix failing doctest after adding ``manim plugin`` subcommand (:pr:`831`)
- Normalize the direction vector in :meth:`~.mobject_update_utils.always_shift` (:pr:`839`)
- Add ``disable_ligatures`` to :class:`~.Text` (via :pr:`804`)
- Make scene caching aware of order of Mobjects (:pr:`845`)
- Fix :class:`~.CairoText` to work with new config structure (:pr:`858`)
- Added missing argument to classes inheriting from :class:`~.Matrix` (:pr:`859`)
- Fixed: ``z_index`` of mobjects contained in others as submobjects is now properly respected (:pr:`872`)
- Let :meth:`~.ParametricSurface.set_fill_by_checkboard` return the modified surface to allow method chaining (:pr:`883`)
- Mobjects added during an updater are added to ``Scene.moving_mobjects`` (:pr:`838`)
- Pass background color to JS renderer (:pr:`876`)
- Small fixes to docstrings. Tiny cleanups. Remove ``digest_mobject_attrs``. (:pr:`834`)
- Added closed shape detection in :class:`~.DashedVMobject` in order to achieve an even dash pattern (:pr:`884`)
- Fix Spelling in docstrings and variables across the library (:pr:`890`)

Other changes
=============

- Change library name to manim (:pr:`811`)
- Docker: use local files when building an image (:pr:`803`)
- Let ffmpeg render partial movie files directly instead of temp files (:pr:`817`)
- ``manimce`` to ``manim`` & capitalizing Manim in readme (:pr:`794`)
- Added flowchart for different docstring categories (:pr:`828`)
- Improve example in module docstring of :mod:`~.animation.creation` + explicitly document buff parameter in :meth:`~.Mobject.arrange` (:pr:`825`)
- Disable CI pipeline for Python 3.6 (:pr:`823`)
- Update URLs in docs (:pr:`832`)
- Move upcoming changelog to GitHub-wiki (:pr:`822`)
- Change badges in readme (:pr:`854`)
- Exclude generated gRPC files from source control (:pr:`868`)
- Added linguist-generated attribute to ``.gitattributes`` (:pr:`877`)
- Cleanup: removed inheritance from ``object`` for some classes, refactor some imports (:pr:`795`)
- Change several ``str.format()`` to ``f``-strings (:pr:`867`)
- Update javascript renderer (:pr:`830`)
- Bump version number to 0.2.0, update changelog (:pr:`894`)


===================================================
/. 🚀 docs/source/changelog/0.1.1-changelog.rst
===================================================

******
v0.1.1
******

:Date: December 1, 2020

Changes since Manim Community release v0.1.0

Plugins
=======

#. Provided a standardized method for plugin discoverability, creation,
   installation, and usage. See the :ref:`documentation <plugins>`.

Fixes
=====

#. JsRender is optional to install. (via :pr:`697`).
#. Allow importing modules from the same directory as the input
   file when using ``manim`` from the command line (via :pr:`724`).
#. Remove some unnecessary or unpythonic methods from :class:`~.Scene`
   (``get_mobjects``, ``add_mobjects_among``, ``get_mobject_copies``),
   via :pr:`758`.
#. Fix formatting of :class:`~.Code` (via :pr:`798`).

Configuration
=============

#. Removed the ``skip_animations`` config option and added the
   ``Renderer.skip_animations`` attribute instead (via :pr:`696`).
#. The global ``config`` dict has been replaced by a global ``config`` instance
   of the new class :class:`~.ManimConfig`.  This class has a dict-like API, so
   this should not break user code, only make it more robust.  See the
   Configuration tutorial for details.
#. Added the option to configure a directory for external assets (via :pr:`649`).


Documentation
=============

#. Add ``:issue:`` and ``:pr:`` directives for simplifying linking to issues and
   pull requests on GitHub (via :pr:`685`).
#. Add a ``skip-manim`` tag for skipping the ``.. manim::`` directive when
   building the documentation locally (via :pr:`796`).


Mobjects, Scenes, and Animations
================================

#. The ``alignment`` attribute to Tex and MathTex has been removed in favour of ``tex_environment``.
#. :class:`~.Text` now uses Pango for rendering. ``PangoText`` has been removed. The old implementation is still available as a fallback as :class:`~.CairoText`.
#. Variations of :class:`~.Dot` have been added as :class:`~.AnnotationDot`
   (a bigger dot with bolder stroke) and :class:`~.LabeledDot` (a dot containing a
   label).
#. Scene.set_variables_as_attrs has been removed (via :pr:`692`).
#. Ensure that the axes for graphs (:class:`GraphScene`) always intersect (:pr:`580`).
#. Now Mobject.add_updater does not call the newly-added updater by default
   (use ``call_updater=True`` instead) (via :pr:`710`)
#. VMobject now has methods to determine and change the direction of the points (via :pr:`647`).
#. Added BraceBetweenPoints (via :pr:`693`).
#. Added ArcPolygon and ArcPolygonFromArcs (via :pr:`707`).
#. Added Cutout (via :pr:`760`).
#. Added Mobject raise not implemented errors for dunder methods and implementations for VGroup dunder methods (via :pr:`790`).
#. Added :class:`~.ManimBanner` for a animated version of our logo and banner (via :pr:`729`)
#. The background color of a scene can now be changed reliably by setting, e.g.,
   ``self.camera.background_color = RED`` (via :pr:`716`).


===================================================
/. 🚀 docs/source/changelog/0.1.0-changelog.rst
===================================================

******
v0.1.0
******

:Date: October 21, 2020

This is the first release of manimce after forking from 3b1b/manim.  As such,
developers have focused on cleaning up and refactoring the codebase while still
maintaining backwards compatibility wherever possible.


New Features
============

Command line
------------

#. Output of 'manim --help' has been improved
#. Implement logging with the :code:`rich` library and a :code:`logger` object instead of plain ol' prints
#. Added a flag :code:`--dry_run`, which doesn't write any media
#. Allow for running manim with :code:`python3 -m manim`
#. Refactored Tex Template management. You can now use custom templates with command line args using :code:`--tex_template`!
#. Re-add :code:`--save_frames` flag, which will save each frame as a png
#. Re-introduce manim feature that allows you to type manim code in :code:`stdin` if you pass a minus sign :code:`(-)` as filename
#. Added the :code:`--custom_folders` flag which yields a simpler output folder structure
#. Re-implement GIF export with the :code:`-i` flag (using this flag outputs ONLY a .gif file, and no .mp4 file)
#. Added a :code:`--verbose` flag
#. You can save the logs to a file by using :code:`--log_to_file`
#. Read :code:`tex_template` from config file if not specified by :code:`--tex_template`.
#. Add experimental javascript rendering with :code:`--use_js_renderer`
#. Add :code:`-q/--quality [k|p|h|m|l]` flag and removed :code:`-m/-l` flags.
#. Removed :code:`--sound` flag


Config system
-------------

#. Implement a :code:`manim.cfg` config file system, that consolidates the global configuration, the command line argument parsing, and some of the constants defined in :code:`constants.py`
#. Added utilities for manipulating Manim’s :code:`.cfg` files.
#. Added a subcommand structure for easier use of utilities managing :code:`.cfg` files
#. Also some variables have been moved from ``constants.py`` to the new config system: 

    #. ``FRAME_HEIGHT`` to ``config["frame_width"]`` 
    #. ``TOP`` to ``config["frame_height"] / 2 * UP`` 
    #. ``BOTTOM`` to ``config["frame_height"] / 2 * DOWN`` 
    #. ``LEFT_SIDE`` to ``config["frame_width"] / 2 * LEFT`` 
    #. ``RIGHT_SIDE`` to ``config["frame_width"] / 2 * RIGHT`` 
    #. ``self.camera.frame_rate`` to ``config["frame_rate"]`` 




Mobjects, Scenes, and Animations
--------------------------------

#. Add customizable left and right bracket for :code:`Matrix` mobject and :code:`set_row_colors` method for matrix mobject
#. Add :code:`AddTeXLetterByLetter` animation
#. Enhanced GraphScene

    #. You can now add arrow tips to axes
    #. extend axes a bit at the start and/or end
    #. have invisible axes
    #. highlight the area between two curves
#. ThreeDScene now supports 3dillusion_camera_rotation
#. Add :code:`z_index` for manipulating depth of Objects on scene.
#. Add a :code:`VDict` class: a :code:`VDict` is to a :code:`VGroup` what a :code:`dict` is to a :code:`list`
#. Added Scene-caching feature. Now, if a partial movie file is unchanged in your code, it isn’t rendered again! [HIGHLY UNSTABLE We're working on it ;)]
#. Most :code:`get_` and :code:`set_` methods have been removed in favor of instance attributes and properties
#. The :code:`Container` class has been made into an AbstractBaseClass, i.e. in cannot be instantiated.  Instead, use one of its children classes
#. The ``TextMobject`` and ``TexMobject`` objects have been deprecated, due to their confusing names, in favour of ``Tex`` and ``MathTex``. You can still, however, continue to use ``TextMobject`` and ``TexMobject``, albeit with Deprecation Warnings constantly reminding you to switch.
#. Add a :code:`Variable` class for displaying text that continuously updates to reflect the value of a python variable.
#. The ``Tex`` and ``MathTex`` objects allow you to specify a custom TexTemplate using the ``template`` keyword argument.
#. :code:`VGroup` now supports printing the class names of contained mobjects and :code:`VDict` supports printing the internal dict of mobjects
#. Add all the standard easing functions
#. :code:`Scene` now renders when :code:`Scene.render()` is called rather than upon instantiation.
#. :code:`ValueTracker` now supports increment using the `+=` operator (in addition to the already existing `increment_value` method)
#. Add :class:`PangoText` for rendering texts using Pango.


Documentation
=============

#. Added clearer installation instructions, tutorials, examples, and API reference [WIP]


Fixes
=====

#. Initialization of directories has been moved to :code:`config.py`, and a bunch of bugs associated to file structure generation have been fixed
#. Nonfunctional file :code:`media_dir.txt` has been removed
#. Nonfunctional :code:`if` statements in :code:`scene_file_writer.py` have been removed
#. Fix a bug where trying to render the example scenes without specifying the scene would show all scene objects in the library
#. Many :code:`Exceptions` have been replaced for more specific exception subclasses
#. Fixed a couple of subtle bugs in :code:`ArcBetweenPoints` 


Of interest to developers
=========================

#. Python code formatting is now enforced by using the :code:`black` tool
#. PRs now require two approving code reviews from community devs before they can be merged
#. Added tests to ensure stuff doesn't break between commits (For developers) [Uses Github CI, and Pytest]
#. Add contribution guidelines (for developers)
#. Added autogenerated documentation with sphinx and autodoc/autosummary [WIP]
#. Made manim internally use relative imports
#. Since the introduction of the :code:`TexTemplate` class, the files :code:`tex_template.tex` and :code:`ctex_template.tex` have been removed
#. Added logging tests tools.
#. Added ability to save logs in json
#. Move to Poetry.
#. Colors have moved to an Enum

Other Changes
=============

#. Cleanup 3b1b Specific Files
#. Rename package from manimlib to manim
#. Move all imports to :code:`__init__`, so :code:`from manim import *` replaces :code:`from manimlib.imports import *`
#. Global dir variable handling has been removed. Instead :code:`initialize_directories`, if needed, overrides the values from the cfg files at runtime.


===================================================
/. 🚀 docs/source/contributing.rst
===================================================

############
Contributing
############

.. important:: Manim is currently undergoing a major refactor. In general,
   contributions implementing new features will not be accepted in this period.
   Other contributions unrelated to cleaning up the codebase may also take a longer
   period of time to be reviewed. This guide may quickly become outdated quickly; we
   highly recommend joining our `Discord server <https://www.manim.community/discord/>`__
   to discuss any potential contributions and keep up to date with the latest developments.

Thank you for your interest in contributing to Manim! However you have decided to contribute
or interact with the community, please always be civil and respect other
members of the community. If you haven't read our :doc:`code of conduct<conduct>`,
do so here. Manim is Free and Open Source Software (FOSS) for mathematical
animations. As such, **we welcome everyone** who is interested in
mathematics, pedagogy, computer animations, open-source,
software development, and beyond. Manim accepts many kinds of contributions,
some are detailed below: 

*  Code maintenance and development
*  DevOps
*  Documentation
*  Developing educational content & narrative documentation
*  Plugins to extend Manim functionality
*  Testing (graphical, unit & video)
*  Website design and development
*  Translating documentation and docstrings

To get an overview of what our community is currently working on, check out
`our development project board <https://github.com/orgs/ManimCommunity/projects/7/views/1>`__.

.. note::
   Please ensure that you are reading the latest version of this guide by ensuring that "latest" is selected in the version switcher.



Contributing can be confusing, so here are a few guides: 

.. toctree::
   :maxdepth: 3

   contributing/development
   contributing/docs
   contributing/testing
   contributing/performance
   contributing/internationalization


===================================================
/. 🚀 docs/source/contributing/development.rst
===================================================

=========================
Manim Development Process
=========================

For first-time contributors
---------------------------
#. Install git: 

   For instructions see https://git-scm.com/.


#. Fork the project: 

   Go to https://github.com/ManimCommunity/manim and click the "fork" button
   to create a copy of the project for you to work on. You will need a
   GitHub account. This will allow you to make a "Pull Request" (PR)
   to the ManimCommunity repo later on.

#. Clone your fork to your local computer: 

   .. code-block:: shell

      git clone https://github.com/<your-username>/manim.git

   GitHub will provide both a SSH (``git@github.com:<your-username>/manim.git``) and
   HTTPS (``https://github.com/<your-username>/manim.git``) URL for cloning.
   You can use SSH if you have SSH keys setup.

   .. WARNING::

      Do not clone the ManimCommunity repository. You must clone your own
      fork.

#.  Change the directory to enter the project folder: 

    .. code-block:: shell

       cd manim

#. Add the upstream repository, ManimCommunity: 

   .. code-block:: shell

      git remote add upstream https://github.com/ManimCommunity/manim.git

#. Now, ``git remote -v`` should show two remote repositories named: 

   - ``origin``, your forked repository
   - ``upstream`` the ManimCommunity repository

#. Install Manim: 

   - Follow the steps in our :doc:`installation instructions
     <../installation>` to install **Manim's dependencies**,
     primarily ``ffmpeg`` and ``LaTeX``.

   - We recommend using `Poetry <https://python-poetry.org>`__ to manage your
     developer installation of Manim. Poetry is a tool for dependency
     management and packaging in Python. It allows you to declare the libraries
     your project depends on, and it will manage (install / update) them
     for you. In addition, Poetry provides a simple interface for
     managing virtual environments.

     If you choose to use Poetry as well, follow `Poetry's installation
     guidelines <https://python-poetry.org/docs/master/#installing-with-pipx>`__
     to install it on your system, then run ``poetry install`` from
     your cloned repository. Poetry will then install Manim, as well
     as create and enter a virtual environment. You can always re-enter
     that environment by running ``poetry shell``.

   - In case you want to install extra dependencies that are defined in
     the ``[tool.poetry.extras]``  section of ``pyproject.toml``, this can be done by passing
     the ``-E`` flag, for example ``poetry install -E jupyterlab -E gui``.

   - In case you decided against Poetry, you can install Manim via pip
     by running ``python3 -m pip install .``. Note that due to our
     development infrastructure being based on Poetry, we currently
     do not support editable installs via ``pip``, so you will have
     to re-run this command every time you make changes to the source
     code.

   .. note::

      The following steps assume that you chose to install and work with
      Poetry.

#. Install Pre-Commit: 

   .. code-block:: shell

      poetry run pre-commit install

   This will ensure during development that each of your commits is properly
   formatted against our linter and formatters, ``black``, ``flake8``,
   ``isort`` and ``codespell``.

You are now ready to work on Manim!

Develop your contribution
-------------------------

#. Checkout your local repository's main branch and pull the latest
   changes from ManimCommunity, ``upstream``, into your local repository: 

   .. code-block:: shell

      git checkout main
      git pull --rebase upstream main

#. Create a branch for the changes you want to work on rather than working
   off of your local main branch: 

   .. code-block:: shell

      git checkout -b <new branch name> upstream/main

   This ensures you can easily update your local repository's main with the
   first step and switch branches to work on multiple features.

#. Write some awesome code!

   You're ready to make changes in your local repository's branch.
   You can add local files you've changed within the current directory with
   ``git add .``, or add specific files with

   .. code-block:: shell

      git add <file/directory>

   and commit these changes to your local history with ``git commit``. If you
   have installed pre-commit, your commit will succeed only if none of the
   hooks fail.

   .. tip::

      When crafting commit messages, it is highly recommended that
      you adhere to `these guidelines <https://www.conventionalcommits.org/en/v1.0.0/>`_.

#. Add new or update existing tests.

   Depending on your changes, you may need to update or add new tests. For new
   features, it is required that you include tests with your PR. Details of
   our testing system are explained in the :doc:`testing guide <testing>`.


#. Update docstrings and documentation: 

   Update the docstrings (the text in triple quotation marks) of any functions
   or classes you change and include them with any new functions you add.
   See the :doc:`documentation guide <docs/docstrings>` for more information about how we
   prefer our code to be documented. The content of the docstrings will be
   rendered in the :doc:`reference manual <../reference>`.

   .. tip::

      Use the :mod:`manim directive for Sphinx <manim.utils.docbuild.manim_directive>` to add examples
      to the documentation!

As far as development on your local machine goes, these are the main steps you
should follow.

.. _polishing-changes-and-submitting-a-pull-request: 

Polishing Changes and Submitting a Pull Request
-----------------------------------------------

As soon as you are ready to share your local changes with the community
so that they can be discussed, go through the following steps to open a
pull request. A pull request signifies to the ManimCommunity organization,
"Here are some changes I wrote; I think it's worthwhile for you to maintain
them."

.. note::

   You do not need to have everything (code/documentation/tests) complete
   to open a pull request (PR). If the PR is still under development, please
   mark it as a draft. Community developers will still be able to review the
   changes, discuss yet-to-be-implemented changes, and offer advice; however,
   the more complete your PR, the quicker it will be merged.

#. Update your fork on GitHub to reflect your local changes: 

   .. code-block:: shell

      git push -u origin <branch name>

   Doing so creates a new branch on your remote fork, ``origin``, with the
   contents of your local repository on GitHub. In subsequent pushes, this
   local branch will track the branch ``origin`` and ``git push`` is enough.


#. Make a pull request (PR) on GitHub.

   In order to make the ManimCommunity development team aware of your changes,
   you can make a PR to the ManimCommunity repository from your fork.

   .. WARNING::

      Make sure to select ``ManimCommunity/manim`` instead of ``3b1b/manim`` 
      as the base repository!

   Choose the branch from your fork as the head repository - see the
   screenshot below.

   .. image:: /_static/pull-requests.png
      :align: center

   Please make sure you follow the template (this is the default
   text you are shown when first opening the 'New Pull Request' page).


Your changes are eligible to be merged if: 

#. there are no merge conflicts
#. the tests in our pipeline pass
#. at least one (two for more complex changes) Community Developer approves the changes

You can check for merge conflicts between the current upstream/main and
your branch by executing ``git pull upstream main`` locally. If this
generates any merge conflicts, you need to resolve them and push an
updated version of the branch to your fork of the repository.

Our pipeline consists of a series of different tests that ensure
that Manim still works as intended and that the code you added
sticks to our coding conventions.

- **Code style**: We use the code style imposed
  by `Black <https://black.readthedocs.io/en/stable/>`_, `isort <https://pycqa.github.io/isort/>`_
  and `flake8 <https://flake8.pycqa.org/en/latest/>`_. The GitHub pipeline
  makes sure that the (Python) files changed in your pull request
  also adhere to this code style. If this step of the pipeline fails,
  fix your code formatting automatically by running ``black <file or directory>`` and ``isort <file or directory>``.
  To fix code style problems, run ``flake8 <file or directory>`` for a style report, and then fix the problems
  manually that were detected by ``flake8``.

- **Tests**: The pipeline runs Manim's test suite on different operating systems
  (the latest versions of Ubuntu, macOS, and Windows) for different versions of Python.
  The test suite consists of two different kinds of tests: integration tests
  and doctests. You can run them locally by executing ``poetry run pytest`` 
  and ``poetry run pytest --doctest-modules manim``, respectively, from the
  root directory of your cloned fork.

- **Documentation**: We also build a version of the documentation corresponding
  to your pull request. Make sure not to introduce any Sphinx errors, and have
  a look at the built HTML files to see whether the formatting of the documentation
  you added looks as you intended. You can build the documentation locally
  by running ``make html`` from the ``docs`` directory. Make sure you have `Graphviz <https://graphviz.org/>`_
  installed locally in order to build the inheritance diagrams. See :doc:`docs` for
  more information.

Finally, if the pipeline passes and you are satisfied with your changes: wait for
feedback and iterate over any requested changes. You will likely be asked to
edit or modify your PR in one way or another during this process. This is not
an indictment of your work, but rather a strong signal that the community
wants to merge your changes! Once approved, your changes may be merged!

Further useful guidelines
=========================

#. When submitting a PR, please mention explicitly if it includes breaking changes.

#. When submitting a PR, make sure that your proposed changes are as general as
   possible, and ready to be taken advantage of by all of Manim's users. In
   particular, leave out any machine-specific configurations, or any personal
   information it may contain.

#. If you are a maintainer, please label issues and PRs appropriately and
   frequently.

#. When opening a new issue, if there are old issues that are related, add a link
   to them in your new issue (even if the old ones are closed).

#. When submitting a code review, it is highly recommended that you adhere to
   `these general guidelines <https://conventionalcomments.org/>`_.

#. If you find stale or inactive issues that seem to be irrelevant, please post
   a comment saying 'This issue should be closed', and a community developer
   will take a look.

#. Please do as much as possible to keep issues, PRs, and development in
   general as tidy as possible.


You can find examples for the ``docs`` in several places: 
the :doc:`Example Gallery <../examples>`, :doc:`Tutorials <../tutorials/index>`,
and :doc:`Reference Classes <../reference>`.

**Thank you for contributing!**


===================================================
/. 🚀 docs/source/contributing/docs.rst
===================================================

====================
Adding Documentation
====================

Building the documentation
--------------------------

When you clone the Manim repository from GitHub, you can access the
``docs/`` folder which contains the necessary files to build the
documentation.

To build the docs locally, open a CLI, enter the ``docs/`` folder with the
``cd`` command and execute the following depending on your OS: 

-   Windows: ``./make.bat html`` 
-   macOS and Linux: ``make html`` 

The first time you build the docs, the process will take several
minutes because it needs to generate all the ``.rst`` (reST: 
reStructured Text) files from scratch by reading and parsing all the
Manim content. The process becomes much shorter the next time, as it
rebuilds only the parts which have changed.


Sphinx library and extensions
-----------------------------

Manim uses `Sphinx <https://www.sphinx-doc.org>`_ for building the
docs. It also makes use of Sphinx extensions such as: 

-   `Autodoc: <https://www.sphinx-doc.org/en/master/usage/extensions/autodoc.html>`_
    imports Manim's Python source code, extracts its docstrings and
    generates documentation from them.
-   `Autosummary: <https://www.sphinx-doc.org/en/master/usage/extensions/autosummary.html>`_
    a complement to Autodoc which adds a special directive ``autosummary``,
    used in Manim to automatically document classes, methods,
    attributes, functions, module-level variables and exceptions.
    Autosummary makes use of `Jinja templates <https://jinja.palletsprojects.com/templates/>`_,
    which Manim defines for autosummarizing classes and modules
    inside ``docs/source/_templates/``.
-   `Graphviz extension for Sphinx: <https://www.sphinx-doc.org/en/master/usage/extensions/graphviz.html>`_
    embeds graphs generated by the `Graphviz <https://graphviz.org/>`_
    module, which must be installed in order to render the
    inheritance diagrams in the :doc:`/reference`.
-   `Napoleon: <https://www.sphinx-doc.org/en/master/usage/extensions/napoleon.html>`_
    enables Sphinx to read Google style docstrings and, in
    particular for Manim, `NumPy style docstrings <https://numpydoc.readthedocs.io/en/latest/format.html>`_
    - see :doc:`docs/docstrings` for more information.


Sphinx theme
------------

The theme used for this website is `Furo <https://sphinx-themes.org/sample-sites/furo/>`_.


Custom Sphinx directives
------------------------

Manim implements **custom directives** for use with Autodoc and Autosummary, which
are defined in :mod:`~.docbuild`: 

.. currentmodule:: manim.utils.docbuild

.. autosummary::

    :toctree: ../reference
    autoaliasattr_directive
    autocolor_directive
    manim_directive


Index
-----

.. toctree::
   :maxdepth: 2

   docs/admonitions
   docs/docstrings
   docs/examples
   docs/references
   docs/typings


===================================================
/. 🚀 docs/source/contributing/testing.rst
===================================================

============
Adding Tests
============
If you are adding new features to manim, you should add appropriate tests for them. Tests prevent
manim from breaking at each change by checking that no other
feature has been broken and/or been unintentionally modified.

.. warning::

   The full tests suite requires Cairo 1.18 in order to run all tests.
   However, Cairo 1.18 may not be available from your package manager,
   like ``apt``, and it is very likely that you have an older version installed,
   e.g., 1.16. If you run tests with a version prior to 1.18,
   many tests will be skipped. Those tests are not skipped in the online CI.

   If you want to run all tests locally, you need to install Cairo 1.18 or above.
   You can do so by compiling Cairo from source: 

   1. download ``cairo-1.18.0.tar.xz`` from
      `here <https://www.cairographics.org/releases/>`_.
      and uncompress it;
   2. open the INSTALL file and follow the instructions (you might need to install
      ``meson`` and ``ninja``);
   3. run the tests suite and verify that the Cairo version is correct.

How Manim tests
---------------

Manim uses pytest as its testing framework.
To start the testing process, go to the root directory of the project and run pytest in your terminal.
Any errors that occur during testing will be displayed in the terminal.

Some useful pytest flags: 

- ``-x`` will make pytest stop at the first failure it encounters

- ``-s`` will make pytest display all the print messages (including those during scene generation, like DEBUG messages)

- ``--skip_slow`` will skip the (arbitrarily) slow tests

- ``--show_diff`` will show a visual comparison in case a unit test is failing.


How it Works
~~~~~~~~~~~~

At the moment there are three types of tests: 

#. Unit Tests: 

   Tests for most of the basic functionalities of manim. For example, there a test for
   ``Mobject``, that checks if it can be added to a Scene, etc.

#. Graphical unit tests: 
   Because ``manim`` is a graphics library, we test frames. To do so, we create test scenes that render a specific feature.
   When pytest runs, it compares the result of the test to the control data, either at 6 fps or just the last frame. If it matches, the tests
   pass. If the test and control data differ, the tests fail. You can use ``--show_diff`` flag with ``pytest`` to visually
   see the differences. The ``extract_frames.py`` script lets you see all the frames of a test.

#. Videos format tests: 

   As Manim is a video library, we have to test videos as well. Unfortunately,
   we cannot directly test video content as rendered videos can
   differ slightly depending on the system (for reasons related to
   ffmpeg). Therefore, we only compare video configuration values, exported in
   .json.

Architecture
------------

The ``manim/tests`` directory looks like this: 

::

    .
    ├── conftest.py
    ├── control_data
    │   ├── graphical_units_data
    │   │   ├── creation
    │   │   │   ├── DrawBorderThenFillTest.npy
    │   │   │   ├── FadeInFromDownTest.npy
    │   │   │   ├── FadeInFromLargeTest.npy
    │   │   │   ├── FadeInFromTest.npy
    │   │   │   ├── FadeInTest.npy
    │   │   │   ├── ...
    │   │   ├── geometry
    │   │   │   ├── AnnularSectorTest.npy
    │   │   │   ├── AnnulusTest.npy
    │   │   │   ├── ArcBetweenPointsTest.npy
    │   │   │   ├── ArcTest.npy
    │   │   │   ├── CircleTest.npy
    │   │   │   ├── CoordinatesTest.npy
    │   │   │   ├── ...
    │   │   ├── graph
    │   │   │   ├── ...
    |   |   |   | ...
    │   └── videos_data
    │       ├── SquareToCircleWithDefaultValues.json
    │       └── SquareToCircleWithlFlag.json
    ├── helpers
    │   ├── graphical_units.py
    │   ├── __init__.py
    │   └── video_utils.py
    ├── __init__.py
    ├── test_camera.py
    ├── test_config.py
    ├── test_copy.py
    ├── test_vectorized_mobject.py
    ├── test_graphical_units
    │   ├── conftest.py
    │   ├── __init__.py
    │   ├── test_creation.py
    │   ├── test_geometry.py
    │   ├── test_graph.py
    │   ├── test_indication.py
    │   ├── test_movements.py
    │   ├── test_threed.py
    │   ├── test_transform.py
    │   └── test_updaters.py
    ├── test_logging
    │   ├── basic_scenes.py
    │   ├── expected.txt
    │   ├── testloggingconfig.cfg
    │   └── test_logging.py
    ├── test_scene_rendering
    │   ├── conftest.py
    │   ├── __init__.py
    │   ├── simple_scenes.py
    │   ├── standard_config.cfg
    │   └── test_cli_flags.py
    └── utils
        ├── commands.py
        ├── __init__.py
        ├── testing_utils.py
        └── video_tester.py
       ...

The Main Directories
--------------------

- ``control_data/``: 

  The directory containing control data. ``control_data/graphical_units_data/`` contains the expected and correct frame data for graphical tests, and
  ``control_data/videos_data/`` contains the .json files used to check videos.

- ``test_graphical_units/``: 

  Contains graphical tests.

- ``test_scene_rendering/``: 

  For tests that need to render a scene in some way, such as tests for CLI
  flags (end-to-end tests).

- ``utils/``: 

  Useful internal functions used by pytest.

  .. note:: fixtures are not contained here, they are in ``conftest.py``.

- ``helpers/``: 

  Helper functions for developers to setup graphical/video tests.

Adding a New Test
-----------------

Unit Tests
~~~~~~~~~~

Pytest determines which functions are tests by searching for files whose
names begin with "test\_", and then within those files for functions
beginning with "test" and classes beginning with "Test". These kinds of
tests must be in ``tests/`` (e.g. ``tests/test_container.py``).

Graphical Unit Test
~~~~~~~~~~~~~~~~~~~

The test must be written in the correct file (i.e. the file that corresponds to the appropriate category the feature belongs to) and follow the structure
of unit tests.

For example, to test the ``Circle`` VMobject which resides in
``manim/mobject/geometry.py``, add the CircleTest to
``test/test_geometry.py``.

The name of the module is indicated by the variable __module_test__, that **must** be declared in any graphical test file. The module name is used to store the graphical control data.

.. important::
    You will need to use the ``frames_comparison`` decorator to create a test. The test function **must** accept a
    parameter named ``scene`` that will be used like ``self`` in a standard ``construct`` method.

Here's an example in ``test_geometry.py``: 

.. code:: python

  from manim import *
  from manim.utils.testing.frames_comparison import frames_comparison

  __module_test__ = "geometry"


  @frames_comparison
  def test_circle(scene): 
      circle = Circle()
      scene.play(Animation(circle))

The decorator can be used with or without parentheses. **By default, the test only tests the last frame. To enable multi-frame testing, you have to set ``last_frame=False`` in the parameters.**

.. code:: python

  @frames_comparison(last_frame=False)
  def test_circle(scene): 
      circle = Circle()
      scene.play(Animation(circle))

You can also specify, when needed, which base scene you need (ThreeDScene, for example) : 

.. code:: python

  @frames_comparison(last_frame=False, base_scene=ThreeDScene)
  def test_circle(scene): 
      circle = Circle()
      scene.play(Animation(circle))

Feel free to check the documentation of ``@frames_comparison`` for more.

Note that tests name must follow the syntax ``test_<thing_to_test>``, otherwise pytest will not recognize it as a test.

.. warning::
  If you run pytest now, you will get a ``FileNotFound`` error. This is because
  you have not created control data for your test.

To create the control data for your test, you have to use the flag ``--set_test`` along with pytest.
For the example above, it would be

.. code-block:: bash

    pytest test_geometry.py::test_circle --set_test -s

(``-s`` is here to see manim logs, so you can see what's going on).

If you want to see all the control data frames (e.g. to make sure your test is doing what you want), use the
``extract_frames.py`` script. The first parameter is the path to a ``.npz`` file and the second parameter is the
directory you want the frames created. The frames will be named ``frame0.png``, ``frame1.png``, etc.

.. code-block:: bash

    python scripts/extract_frames.py tests/test_graphical_units/control_data/plot/axes.npz output


Please make sure to add the control data to git as soon as it is produced with ``git add <your-control-data.npz>``.


Videos tests
~~~~~~~~~~~~

To test videos generated, we use the decorator 
``tests.utils.videos_tester.video_comparison``: 

.. code:: python

    @video_comparison(
        "SquareToCircleWithlFlag.json", "videos/simple_scenes/480p15/SquareToCircle.mp4"
    )
    def test_basic_scene_l_flag(tmp_path, manim_cfg_file, simple_scenes_path): 
        scene_name = "SquareToCircle"
        command = [
            "python",
            "-m",
            "manim",
            simple_scenes_path,
            scene_name,
            "-l",
            "--media_dir",
            str(tmp_path),
        ]
        out, err, exit_code = capture(command)
        assert exit_code == 0, err

.. note:: ``assert exit*\ code == 0, err`` is used in case of the command fails
  to run. The decorator takes two arguments: json name and the path
  to where the video should be generated, starting from the ``media/`` dir.

Note the fixtures here: 

- tmp_path is a pytest fixture to get a tmp_path. Manim will output here, according to the flag ``--media_dir``.

- ``manim_cfg_file`` fixture that return a path pointing to ``test_scene_rendering/standard_config.cfg``. It's just to shorten the code, in the case multiple tests need to use this cfg file.

- ``simple_scenes_path`` same as above, except for ``test_scene_rendering/simple_scene.py`` 

You have to generate a ``.json`` file first to be able to test your video. To
do that, use ``helpers.save_control_data_from_video``.

For instance, a test that will check if the l flag works properly will first
require rendering a video using the -l flag from a scene. Then we will test
(in this case, SquareToCircle), that lives in
``test_scene_rendering/simple_scene.py``. Change directories to ``tests/``,
create a file (e.g. ``create\_data.py``) that you will remove as soon as
you're done. Then run: 

.. code:: python

    save_control_data_from_video("<path-to-video>", "SquareToCircleWithlFlag.json")

Running this will save 
``control_data/videos_data/SquareToCircleWithlFlag.json``, which will
look like this: 

.. code:: json

    {
        "name": "SquareToCircleWithlFlag",
        "config": {
            "codec_name": "h264",
            "width": 854,
            "height": 480,
            "avg_frame_rate": "15/1",
            "duration": "1.000000",
            "nb_frames": "15"
        }
    }

If you have any questions, please don't hesitate to ask on `Discord
<https://www.manim.community/discord/>`_, in your pull request, or in an issue.


===================================================
/. 🚀 docs/source/contributing/performance.rst
===================================================

=====================
Improving performance
=====================

One of Manim's main flaws as an animation library is its slow performance.
As of time of writing (January 2022), the library is still very unoptimized.
As such, we highly encourage contributors to help out in optimizing the code.

Profiling
=========

Before the library can be optimized, we first need to identify the bottlenecks
in performance via profiling. There are numerous Python profilers available for
this purpose; some examples include cProfile and Scalene.

Running an animation as a script
--------------------------------

Most instructions for profilers assume you can run the python file directly as a
script from the command line. While Manim animations are usually run from the
command-line, we can run them as scripts by adding something like the following
to the bottom of the file: 

.. code-block:: python

    with tempconfig({"quality": "medium_quality", "disable_caching": True}): 
        scene = SceneName()
        scene.render()

Where ``SceneName`` is the name of the scene you want to run. You can then run the
file directly, and can thus follow the instructions for most profilers.

An example: profiling with cProfile and SnakeViz
-------------------------------------------------

Install SnakeViz: 

.. code-block:: bash

    pip install snakeviz

cProfile is included with in Python's standard library and does not need to be installed.

Suppose we want to profile ``SquareToCircle``. Then we add and save the following code
to ``square_to_circle.py``: 

.. code-block:: python

    from manim import *


    class SquareToCircle(Scene): 
        def construct(self): 
            s = Square()
            c = Circle()
            self.add(s)
            self.play(Transform(s, c))


    with tempconfig({"quality": "medium_quality", "disable_caching": True}): 
        scene = SquareToCircle()
        scene.render()

Now run the following in the terminal: 

.. code-block:: bash

   python -m cProfile -o square_to_circle.txt square_to_circle.py

This will create a file called ``square_to_circle.txt``.

Now, we can run SnakeViz on the profile file: 

.. code-block:: bash

   snakeviz square_to_circle.txt

A browser window or tab will open with a visualization of the profile, which should
look something like this: 

.. image:: /_static/snakeviz.png


===================================================
/. 🚀 docs/source/contributing/internationalization.rst
===================================================

====================
Internationalization
====================

Thank you for your interest in localizing Manim! Please read the
instructions below to get started. You are also encouraged, though not
required, to join our `Discord
server <https://manim.community/discord>`__.

Signing up
==========

You will first need to create an account for our project. Go to our
`project homepage <https://translate.manim.community/>`__ and click the
sign up button at the top right hand corner. Follow the instructions to
create an account. After creating an account, you should return back to
our homepage. Click the Manim project to contribute translations for the
main library.

Contributing
============

.. important::
   Keep in mind that Manim is still a work in progress.
   Tutorials and documentation are always subject to change.
   When a developer implements a new feature, they are not forced to respect any translations.
   This means that parts of the translation might become outdated over time.

That being said, improving the documentation and making it more accessible is still highly encouraged.
And even if your work gets outdated and requires change, you or someone else can simply adjust the translation.
Your efforts are not in vain!


Voting
------

To ensure that our translations are of good quality, we use
crowdsourcing and voting to approve good translations and reject bad
ones. The current threshold for a translation being accepted is 3 votes;
this may change as we gauge the level of activity in the community and
the quality of translations.

To vote on translations, first click on a language you would like to
help with, then click the "translate all" button. You should then enter
the translation editor. Next to the search bar, you will see a
funnel-like icon - click it and select the "Need to Be Voted" option to
see translations that need to be voted on. You can then select a string
on the left sidebar, view the translations at the bottom and vote with
the + and - icons for good and poor translations respectively.

Translations
------------

You can also help with contributing translations directly. Follow the
steps above to enter the translation editor (instead of clicking
"Translate all", you may also choose to translate strings from a
specific file by clicking them). Crowdin's on-screen tutorial should
guide you through the process.

Translation guidelines
======================

In general, follow the conventions for technical writing in your target
language. You may want to refer to similar, high quality sources (eg.
Python's documentation in your language) for guidance. Note that code
blocks, code literals, names and pseudonyms should be left unchanged.

Proofreading
============

For certain languages with a significant number of speakers within the
Manim Community, an additional step of proofreading is used after
crowdsourcing to further ensure the quality of our translations.
Proofreaders are trusted community members who will look over and give
the final approval on translations. If you would like to be a
proofreader, please email translations@manim.community with the answers
to the following questions: 

1. What is your Crowdin username?
2. What is your Discord username (optional)?
3. What is your GitHub username (optional)?
4. List the languages you speak, and your level of fluency with them.
5. What language(s) are you applying to be a proofreader for?
6. Do you have any previous experience with translations?
7. If yes, give us more details.
8. How will you ensure the quality of translations, should you become a
   proofreader?

Please note that you don't need to have prior translation experience to
be a proofreader, just a commitment to maintaining a good quality of
translations.

Errors
======

Source errors
-------------

If you spot an error with a source string, report it to us by opening an
:issue:`issue <new/choose>` on
GitHub. Refrain from translating the string until the issue is resolved.


===================================================
/. 🚀 docs/source/conduct.rst
===================================================

.. code-block:: bash

    pandoc -f markdown -t rst CODE_OF_CONDUCT.md  >> manim_docs_community.rst


Code of Conduct
===============

   TL;DR Be excellent to each other; we’re a community after all. If you
   run into issues with others in our community, please
   `contact <https://www.manim.community/discord/>`__ a Manim Community
   Dev, or Moderator.

Purpose
-------

The Manim Community includes members of varying skills, languages,
personalities, cultural backgrounds, and experiences from around the
globe. Through these differences, we continue to grow and collectively
improve upon an open-source animation engine. When working in a
community, it is important to remember that you are interacting with
humans on the other end of your screen. This code of conduct will guide
your interactions and keep Manim a positive environment for our
developers, users, and fundamentally our growing community.

Our Community
-------------

Members of Manim Community are respectful, open, and considerate.
Behaviors that reinforce these values contribute to our positive
environment, and include: 

-  **Being respectful.** Respectful of others, their positions,
   experiences, viewpoints, skills, commitments, time, and efforts.

-  **Being open.** Open to collaboration, whether it’s on problems, Pull
   Requests, issues, or otherwise.

-  **Being considerate.** Considerate of their peers – other Manim users
   and developers.

-  **Focusing on what is best for the community.** We’re respectful of
   the processes set forth in the community, and we work within them.

-  **Showing empathy towards other community members.** We’re attentive
   in our communications, whether in person or online, and we’re tactful
   when approaching differing views.

-  **Gracefully accepting constructive criticism.** When we disagree, we
   are courteous in raising our issues.

-  **Using welcoming and inclusive language.** We’re accepting of all
   who wish to take part in our activities, fostering an environment
   where anyone can participate and everyone can make a difference.

Our Standards
-------------

Every member of our community has the right to have their identity
respected. Manim Community is dedicated to providing a positive
environment for everyone, regardless of age, gender identity and
expression, sexual orientation, disability, physical appearance, body
size, ethnicity, nationality, race, religion (or lack thereof),
education, or socioeconomic status.

Inappropriate Behavior
----------------------

Examples of unacceptable behavior by participants include: 

-  Harassment of any participants in any form
-  Deliberate intimidation, stalking, or following
-  Logging or taking screenshots of online activity for harassment
   purposes
-  Publishing others’ private information, such as a physical or
   electronic address, without explicit permission
-  Violent threats or language directed against another person
-  Incitement of violence or harassment towards any individual,
   including encouraging a person to commit suicide or to engage in
   self-harm
-  Creating additional online accounts in order to harass another person
   or circumvent a ban
-  Sexual language and imagery in online communities or any conference
   venue, including talks
-  Insults, put-downs, or jokes that are based upon stereotypes, that
   are exclusionary, or that hold others up for ridicule
-  Excessive swearing
-  Unwelcome sexual attention or advances
-  Unwelcome physical contact, including simulated physical contact (eg,
   textual descriptions like “hug” or “backrub”) without consent or
   after a request to stop
-  Pattern of inappropriate social contact, such as requesting/assuming
   inappropriate levels of intimacy with others
-  Sustained disruption of online community discussions, in-person
   presentations, or other in-person events
-  Continued one-on-one communication after requests to cease
-  Other conduct that is inappropriate for a professional audience
   including people of many different backgrounds Community members
   asked to stop any inappropriate behavior are expected to comply
   immediately.

Manim Community Online Spaces
-----------------------------

This Code of Conduct applies to the following online spaces: 

-  The `ManimCommunity GitHub
   Organization <https://github.com/ManimCommunity>`__ and all of its
   repositories

-  The Manim `Discord <https://www.manim.community/discord/>`__

-  The Manim `Reddit <https://www.reddit.com/r/manim/>`__

-  The Manim `Twitter <https://twitter.com/manim_community/>`__

This Code of Conduct applies to every member in official Manim Community
online spaces, including: 

-  Moderators
-  Maintainers
-  Developers
-  Reviewers
-  Contributors
-  Users
-  All community members

Consequences
------------

If a member’s behavior violates this code of conduct, the Manim
Community Code of Conduct team may take any action they deem
appropriate, including, but not limited to: warning the offender,
temporary bans, deletion of offending messages, and expulsion from the
community and its online spaces. The full list of consequences for
inappropriate behavior is listed below in the Enforcement Procedures.

Thank you for helping make this a welcoming, friendly community for
everyone.

Contact Information
-------------------

If you believe someone is violating the code of conduct, or have any
other concerns, please contact a Manim Community Dev, or Moderator
immediately. They can be reached on Manim’s Community
`Discord <https://www.manim.community/discord/>`__.


Enforcement Procedures
----------------------

This document summarizes the procedures the Manim Community Code of
Conduct team uses to enforce the Code of Conduct.

Summary of processes
~~~~~~~~~~~~~~~~~~~~

When the team receives a report of a possible Code of Conduct violation,
it will: 

1.  Acknowledge the receipt of the report.
2.  Evaluate conflicts of interest.
3.  Call a meeting of code of conduct team members without a conflict of
    interest.
4.  Evaluate the reported incident.
5.  Propose a behavioral modification plan.
6.  Propose consequences for the reported behavior.
7.  Vote on behavioral modification plan and consequences for the
    reported person.
8.  Contact Manim Community moderators to approve the behavioral
    modification plan and consequences.
9.  Follow up with the reported person.
10. Decide further responses.
11. Follow up with the reporter.

Acknowledge the report
~~~~~~~~~~~~~~~~~~~~~~

Reporters should receive an acknowledgment of the receipt of their
report within 48 hours.

Conflict of interest policy
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Examples of conflicts of interest include: 

-  You have a romantic or platonic relationship with either the reporter
   or the reported person. It’s fine to participate if they are an
   acquaintance.
-  The reporter or reported person is someone you work closely with.
   This could be someone on your team or someone who works on the same
   project as you.
-  The reporter or reported person is a maintainer who regularly reviews
   your contributions
-  The reporter or reported person is your metamour.
-  The reporter or reported person is your family member Committee
   members do not need to state why they have a conflict of interest,
   only that one exists. Other team members should not ask why the
   person has a conflict of interest.

Anyone who has a conflict of interest will remove themselves from the
discussion of the incident, and recluse themselves from voting on a
response to the report.

Evaluating a report
~~~~~~~~~~~~~~~~~~~

Jurisdiction
^^^^^^^^^^^^

-  *Is this a Code of Conduct violation?* Is this behavior on our list
   of inappropriate behavior? Is it borderline inappropriate behavior?
   Does it violate our community norms?

-  *Did this occur in a space that is within our Code of Conduct’s
   scope?* If the incident occurred outside the community, but a
   community member’s mental health or physical safety may be negatively
   impacted if no action is taken, the incident may be in scope. Private
   conversations in community spaces are also in scope. #### Impact

-  *Did this incident occur in a private conversation or a public
   space?* Incidents that all community members can see will have a more
   negative impact.

-  *Does this behavior negatively impact a marginalized group in our
   community?* Is the reporter a person from a marginalized group in our
   community? How is the reporter being negatively impacted by the
   reported person’s behavior? Are members of the marginalized group
   likely to disengage with the community if no action was taken on this
   report?

-  *Does this incident involve a community leader?* Community members
   often look up to community leaders to set the standard of acceptable
   behavior #### Risk

-  *Does this incident include sexual harassment?*

-  *Does this pose a safety risk?* Does the behavior put a person’s
   physical safety at risk? Will this incident severely negatively
   impact someone’s mental health?

-  *Is there a risk of this behavior being repeated?* Does the reported
   person understand why their behavior was inappropriate? Is there an
   established pattern of behavior from past reports?

Reports which involve higher risk or higher impact may face more severe
consequences than reports which involve lower risk or lower impact.

Propose consequences
~~~~~~~~~~~~~~~~~~~~

What follows are examples of possible consequences of an incident
report. This list of consequences is not exhaustive, and the Manim
Community Code of Conduct team reserves the right to take any action it
deems necessary.

Possible private responses to an incident include: 

-  Nothing, if the behavior was determined to not be a Code of Conduct
   violation
-  A warning
-  A final warning
-  Temporarily removing the reported person from the community’s online
   space(s)
-  Permanently removing the reported person from the community’s online
   space(s)
-  Publishing an account of the incident

Team vote
~~~~~~~~~

Some team members may have a conflict of interest and may be excluded
from discussions of a particular incident report. Excluding those
members, decisions on the behavioral modification plans and consequences
will be determined by a two-thirds majority vote of the Manim Community
Code of Conduct team.

Moderators approval
~~~~~~~~~~~~~~~~~~~

Once the team has approved the behavioral modification plans and
consequences, they will communicate the recommended response to the
Manim Community moderators. The team should not state who reported this
incident. They should attempt to anonymize any identifying information
from the report.

Moderators are required to respond with whether they accept the
recommended response to the report. If they disagree with the
recommended response, they should provide a detailed response or
additional context as to why they disagree. Moderators are encouraged to
respond within a week.

In cases where the moderators disagree on the suggested resolution for a
report, the Manim Community Code of Conduct team may choose to notify
the Manim Community Moderators.

Follow up with the reported person
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Manim Community Code of Conduct team will work with Manim Community
moderators to draft a response to the reported person. The response
should contain: 

-  A description of the person’s behavior in neutral language
-  The negative impact of that behavior
-  A concrete behavioral modification plan
-  Any consequences of their behavior The team should not state who
   reported this incident. They should attempt to anonymize any
   identifying information from the report. The reported person should
   be discouraged from contacting the reporter to discuss the report. If
   they wish to apologize to the reporter, the team can accept the
   apology on behalf of the reporter.

Decide further responses
~~~~~~~~~~~~~~~~~~~~~~~~

If the reported person provides additional context, the Manim Community
Code of Conduct team may need to re-evaluate the behavioral modification
plan and consequences.

Follow up with the reporter
~~~~~~~~~~~~~~~~~~~~~~~~~~~

A person who makes a report should receive a follow-up response stating
what action was taken in response to the report. If the team decided no
response was needed, they should provide an explanation why it was not a
Code of Conduct violation. Reports that are not made in good faith (such
as “reverse sexism” or “reverse racism”) may receive no response.

The follow-up should be sent no later than one week after the receipt of
the report. If deliberation or follow-up with the reported person takes
longer than one week, the team should send a status update to the
reporter.

Changes to Code of Conduct
~~~~~~~~~~~~~~~~~~~~~~~~~~

When discussing a change to the Manim Community code of conduct or
enforcement procedures, the Manim Community Code of Conduct team will
follow this decision-making process: 

-  **Brainstorm options.** Team members should discuss any relevant
   context and brainstorm a set of possible options. It is important to
   provide constructive feedback without getting side-tracked from the
   main question.
-  **Vote.** Proposed changes to the code of conduct will be decided by
   a two-thirds majority of all voting members of the Code of Conduct
   team. Team members are listed in the charter. Currently active voting
   members are listed in the following section.
-  **Board Vote.** Once a working draft is in place for the Code of
   Conduct and procedures, the Code of Conduct team shall provide the
   Manim Community Moderators with a draft of the changes. The Manim
   Community Moderators will vote on the changes at a board meeting.

Current list of voting members
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-  All available Community Developers (i.e. those with “write”
   permissions, or above, on the Manim Community GitHub organization).

License
-------

This Code of Conduct is licensed under the `Creative Commons
Attribution-ShareAlike 3.0 Unported
License <https://creativecommons.org/licenses/by-sa/3.0/>`__.

Attributions
------------

This Code of Conduct was forked from the code of conduct from the
`Python Software Foundation <https://www.python.org/psf/conduct/>`__ and
adapted by Manim Community.
