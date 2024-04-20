#!/usr/bin/env bash
git clone --depth=1 git@github.com:3b1b/manim /pl/manim
git clone --depth=1 git@github.com:ManimCommunity/manim /pl/manim-community
#sed -n 's/.. toctree::/::\n\0\n/; p' docs/source/index.rst
#find ./docs/source/documentation
exit


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
    
    function filter 
    {
        local parent=`echo $1 | sed -n 's/[^/\]\+$//p'`
        echo $1
        while read it
        do
            if [[ -z "$it" ]]; then break; fi
            doc="$parent${it/.rst/}.rst"
            if ( [ -a $doc ] || [ -a "$doc.rst" ] ) && [ -z ${doc/*index.rst/} ]
            then
                echo "➊==>$doc" >&2
                filter "$doc"
            else
                echo "➋$doc" >&2
                echo "$doc"
            fi
        done <<< $( sed -n 's/.. toctree::/::\n\0/; p' $1 | sed -n "/^.. toctree::/,/^\S/{ s/^ \+[^:]\+$/\0/p }" \
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
        echo manim_docs.rst
        filter docs/source/index.rst
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
    
    
    out=/c/opendocs/manim_docs.rst
    combine > $out
    subl $out

Docs files count: 19 ::

    ➋docs/source/getting_started/installation.rst
    ➋docs/source/getting_started/quickstart.rst
    ➋docs/source/getting_started/configuration.rst
    ➋docs/source/getting_started/example_scenes.rst
    ➋docs/source/getting_started/config.rst
    ➋docs/source/getting_started/structure.rst
    ➋docs/source/getting_started/whatsnew.rst
    ➋docs/source/documentation/constants.rst
    ➋docs/source/documentation/custom_config.rst
    ➋docs/source/development/changelog.rst
    ➋docs/source/development/contributing.rst
    ➋docs/source/development/about.rst
    cat: docs/source/getting_started/config.rst: No such file or directory
    cat: docs/source/getting_started/config.rst: No such file or directory

:TODOLIST:
    This doc files below are classified as TODOLIST tasks.

    [ ] docs/source/documentation
    [ ] docs/source/documentation/animation
    [ ] docs/source/documentation/animation/index.rst
    [ ] docs/source/documentation/camera
    [ ] docs/source/documentation/camera/index.rst
    [ ] docs/source/documentation/constants.rst
    [ ] docs/source/documentation/custom_config.rst
    [ ] docs/source/documentation/mobject
    [ ] docs/source/documentation/mobject/index.rst
    [ ] docs/source/documentation/scene
    [ ] docs/source/documentation/scene/index.rst
    [ ] docs/source/documentation/shaders
    [ ] docs/source/documentation/shaders/index.rst
    [ ] docs/source/documentation/utils
    [ ] docs/source/documentation/utils/index.rst

===================================================
/. 🚀 /Readme
===================================================

.. image:: https://raw.githubusercontent.com/3b1b/manim/master/logo/cropped.png
   :target: https://github.com/3b1b/manim

|pypi version| |MIT License| |Manim Subreddit| |Manim Discord| |docs|

Manim is an engine for precise programmatic animations, designed for
creating explanatory math videos.

Note, there are two versions of manim. This repository began as a
personal project by the author of
`3Blue1Brown <https://www.3blue1brown.com/>`__ for the purpose of
animating those videos, with video-specific code available
`here <https://github.com/3b1b/videos>`__. In 2020 a group of developers
forked it into what is now the 
`community edition <https://github.com/ManimCommunity/manim/>`__, with a goal of
being more stable, better tested, quicker to respond to community
contributions, and all around friendlier to get started with. 
See `this page <https://docs.manim.community/en/stable/faq/installation.html#different-versions>`__
for more details.

Installation
------------

   **WARNING:** These instructions are for ManimGL *only*. Trying to use
   these instructions to install
   `ManimCommunity/manim <https://github.com/ManimCommunity/manim>`__ or
   instructions there to install this version will cause problems. You
   should first decide which version you wish to install, then only
   follow the instructions for your desired version.

   **Note**: To install manim directly through pip, please pay attention
   to the name of the installed package. This repository is ManimGL of
   3b1b. The package name is ``manimgl`` instead of ``manim`` or
   ``manimlib``. Please use ``pip install manimgl`` to install the
   version in this repository.

Manim runs on Python 3.7 or higher.

System requirements are `FFmpeg <https://ffmpeg.org/>`__,
`OpenGL <https://www.opengl.org/>`__ and
`LaTeX <https://www.latex-project.org>`__ (optional, if you want to use
LaTeX). For Linux, `Pango <https://pango.gnome.org>`__ along with its
development headers are required. See instruction
`here <https://github.com/ManimCommunity/ManimPango#building>`__.

Directly
~~~~~~~~

.. code:: sh

   # Install manimgl
   pip install manimgl

   # Try it out
   manimgl

For more options, take a look at the `Using manim <#using-manim>`__
sections further below.

If you want to hack on manimlib itself, clone this repository and in
that directory execute:

.. code:: sh

   # Install manimgl
   pip install -e .

   # Try it out
   manimgl example_scenes.py OpeningManimExample
   # or
   manim-render example_scenes.py OpeningManimExample

Directly (Windows)
~~~~~~~~~~~~~~~~~~

1. `Install
   FFmpeg <https://www.wikihow.com/Install-FFmpeg-on-Windows>`__.
2. Install a LaTeX distribution.
   `MiKTeX <https://miktex.org/download>`__ is recommended.
3. Install the remaining Python packages.
   ``sh     git clone https://github.com/3b1b/manim.git     cd manim     pip install -e .     manimgl example_scenes.py OpeningManimExample``

Mac OSX
~~~~~~~

1. Install FFmpeg, LaTeX in terminal using homebrew.
   ``sh     brew install ffmpeg mactex``

2. Install latest version of manim using these command.
   ``sh     git clone https://github.com/3b1b/manim.git     cd manim     pip install -e .     manimgl example_scenes.py OpeningManimExample``

Anaconda Install
----------------

1. Install LaTeX as above.
2. Create a conda environment using
   ``conda create -n manim python=3.8``.
3. Activate the environment using ``conda activate manim``.
4. Install manimgl using ``pip install -e .``.

Using manim
-----------

Try running the following: 

.. code:: sh

   manimgl example_scenes.py OpeningManimExample

This should pop up a window playing a simple scene.

Some useful flags include: \* ``-w`` to write the scene to a file \*
``-o`` to write the scene to a file and open the result \* ``-s`` to
skip to the end and just show the final frame. \* ``-so`` will save the
final frame to an image and show it \* ``-n <number>`` to skip ahead to
the ``n``\ ’th animation of a scene. \* ``-f`` to make the playback
window fullscreen

Take a look at custom_config.yml for further configuration. To add your
customization, you can either edit this file, or add another file by the
same name “custom_config.yml” to whatever directory you are running
manim from. For example `this is the
one <https://github.com/3b1b/videos/blob/master/custom_config.yml>`__
for 3blue1brown videos. There you can specify where videos should be
output to, where manim should look for image files and sounds you want
to read in, and other defaults regarding style and video quality.

Look through the 
`example scenes <https://3b1b.github.io/manim/getting_started/example_scenes.html>`__
to get a sense of how it is used, and feel free to look through the code
behind `3blue1brown videos <https://github.com/3b1b/videos>`__ for a
much larger set of example. Note, however, that developments are often
made to the library without considering backwards compatibility with
those old videos. To run an old project with a guarantee that it will
work, you will have to go back to the commit which completed that
project.

Documentation
~~~~~~~~~~~~~

Documentation is in progress at 
`3b1b.github.io/manim <https://3b1b.github.io/manim/>`__. And there is
also a Chinese version maintained by
`@manim-kindergarten <https://manim.org.cn>`__:
`docs.manim.org.cn <https://docs.manim.org.cn/>`__ (in Chinese).

`manim-kindergarten <https://github.com/manim-kindergarten/>`__ wrote
and collected some useful extra classes and some codes of videos in
`manim_sandbox repo <https://github.com/manim-kindergarten/manim_sandbox>`__.

Contributing
------------

Is always welcome. As mentioned above, the 
`community edition <https://github.com/ManimCommunity/manim>`__ has the most active
ecosystem for contributions, with testing and continuous integration,
but pull requests are welcome here too. Please explain the motivation
for a given change and examples of its effect.

License
-------

This project falls under the MIT license.

.. |pypi version| image:: https://img.shields.io/pypi/v/manimgl?logo=pypi
   :target: https://pypi.org/project/manimgl/
.. |MIT License| image:: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
   :target: http://choosealicense.com/licenses/mit/
.. |Manim Subreddit| image:: https://img.shields.io/reddit/subreddit-subscribers/manim.svg?color=ff4301&label=reddit&logo=reddit
   :target: https://www.reddit.com/r/manim/
.. |Manim Discord| image:: https://img.shields.io/discord/581738731934056449.svg?label=discord&logo=discord
   :target: https://discord.com/invite/bYCyhM9Kz2
.. |docs| image:: https://github.com/3b1b/manim/workflows/docs/badge.svg
   :target: https://3b1b.github.io/manim/




===================================================
/. 🚀 docs/source/index.rst
===================================================

Manim's documentation
=====================

.. image:: https://cdn.jsdelivr.net/gh/3b1b/manim@master/logo/white_with_name.png

Manim is an animation engine for explanatory math videos. It's used to create precise animations programmatically, as seen in the videos
at `3Blue1Brown <https://www.3blue1brown.com/>`_.

And here is a Chinese version of this documentation: https://docs.manim.org.cn/

.. toctree::
   :maxdepth: 2
   :caption: Getting Started

   getting_started/installation
   getting_started/quickstart
   getting_started/configuration
   getting_started/example_scenes
   getting_started/config
   getting_started/structure
   getting_started/whatsnew

.. toctree::
   :maxdepth: 2
   :caption: Documentation

   documentation/constants
   documentation/custom_config

.. toctree::
   :maxdepth: 2
   :caption: Development

   development/changelog
   development/contributing
   development/about


===================================================
/. 🚀 docs/source/getting_started/installation.rst
===================================================

Installation
============

Manim runs on Python 3.7 or higher.

System requirements are：

- `FFmpeg <https://ffmpeg.org/>`__
- `OpenGL <https://www.opengl.org//>`__ (included in python package ``PyOpenGL``)
- `LaTeX <https://www.latex-project.org>`__ (optional, if you want to use LaTeX)
- `Pango <https://pango.org>`__ (only for Linux)


Install FFmpeg
--------------



Install FFmpeg Windows
------------------------
.. code-block:: cmd

   choco install ffmpeg


# Install FFmepeg Linux
----------------------------
.. code-block:: sh

   $ sudo apt update
   $ sudo apt install ffmpeg
   $ ffmpeg -version
  
# Install FFmpeg MacOS
----------------------------
- Download This ZIP file `https://www.gyan.dev/ffmpeg/builds/ffmpeg-git-full.7z`(if the link is not working download this zip file from there original website)



Directly
--------

.. code-block:: sh

   # Install manimgl
   pip install manimgl

   # Try it out
   manimgl

If you want to hack on manimlib itself, clone this repository and in
that directory execute:

.. code-block:: sh

   # Install python requirements
   pip install -e .

   # Try it out
   manimgl example_scenes.py OpeningManimExample
   # or
   manim-render example_scenes.py OpeningManimExample

If you run the above command and no error message appears, 
then you have successfully installed all the environments required by manim.

Directly (Windows)
------------------

1. `Install
   FFmpeg <https://www.wikihow.com/Install-FFmpeg-on-Windows>`__, and make sure that its path is in the PATH environment variable.
2. Install a LaTeX distribution.
   `TeXLive-full <http://tug.org/texlive/>`__ is recommended.
3. Install the remaining Python packages.

.. code-block:: sh  

   git clone https://github.com/3b1b/manim.git
   cd manim  
   pip install -e . 
   manimgl example_scenes.py OpeningManimExample

For Anaconda
------------

-  Install FFmpeg and LaTeX as above.
-  Create a conda environment using

.. code-block:: sh
   
   git clone https://github.com/3b1b/manim.git
   cd manim 
   conda create -n manim python=3.8
   conda activate manim
   pip install -e .


===================================================
/. 🚀 docs/source/getting_started/quickstart.rst
===================================================

Quick Start
===========

After installing the manim environment according to the instructions on the
:doc:`installation` page, you can try to make a scene yourself from scratch.

First, create a new ``.py`` file (such as ``start.py``) according to the following
directory structure:

.. code-block:: text
    :emphasize-lines: 8

    manim/
    ├── manimlib/
    │   ├── animation/
    │   ├── ...
    │   ├── default_config.yml
    │   └── window.py
    ├── custom_config.yml
    └── start.py

And paste the following code (I will explain the function of each line in detail later):

.. code-block:: python
    :linenos:

    from manimlib import *

    class SquareToCircle(Scene):
        def construct(self):
            circle = Circle()
            circle.set_fill(BLUE, opacity=0.5)
            circle.set_stroke(BLUE_E, width=4)

            self.add(circle)

And run this command:

.. code-block:: sh

    manimgl start.py SquareToCircle

A window will pop up on the screen. And then you can :

- scroll the middle mouse button to move the screen up and down
- hold down the :kbd:`z` on the keyboard while scrolling the middle mouse button to zoom the screen
- hold down the :kbd:`s` key on the keyboard and move the mouse to pan the screen
- hold down the :kbd:`d` key on the keyboard and move the mouse to change the three-dimensional perspective.

Finally, you can close the window and exit the program by pressing :kbd:`q`.

Run this command again:

.. code-block:: sh

    manimgl start.py SquareToCircle -os

At this time, no window will pop up. When the program is finished, this rendered
image will be automatically opened (saved in the subdirectory ``images/`` of the same
level directory of ``start.py`` by default):

.. image:: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/quickstart/SquareToCircle.png
    :align: center

Make an image
-------------

Next, let's take a detailed look at what each row does.

**Line 1**:

.. code-block:: python
    
    from manimlib import *
    
This will import all the classes that may be used when using manim.

**Line 3**:

.. code-block:: python

    class SquareToCircle(Scene):

Create a :class:`Scene` subclass ``SquareToCircle``, which will be
the scene you write and render.

**Line 4**:

.. code-block:: python

    def construct(self):

Write the ``construct()`` method, the content of which will determine
how to create the mobjects in the screen and what operations need to be performed.

**Line 5**:

.. code-block:: python

    circle = Circle()

Create a circle (an instance of the :class:`Circle` class), called ``circle``

**Line 6~7**:

.. code-block:: python

    circle.set_fill(BLUE, opacity=0.5)
    circle.set_stroke(BLUE_E, width=4)

Set the circle style by calling the circle's method.

- The ``.set_fill()`` method sets the fill color of this circle to blue (``BLUE``, defined in :doc:`../documentation/constants`), and the fill transparency to 0.5.
- The ``.set_stroke()`` method sets the stroke color of this circle to dark blue (``BLUE_E``, defined in :doc:`../documentation/constants`), and the stroke width to 4.

**Line 9**:

.. code-block:: python

    self.add(circle)

Add this circle to the screen through the ``.add()`` method of :class:`Scene`.

Add animations
--------------

Let's change some codes and add some animations to make videos instead of just pictures.

.. code-block:: python
    :linenos:

    from manimlib import *

    class SquareToCircle(Scene):
        def construct(self):
            circle = Circle()
            circle.set_fill(BLUE, opacity=0.5)
            circle.set_stroke(BLUE_E, width=4)
            square = Square()

            self.play(ShowCreation(square))
            self.wait()
            self.play(ReplacementTransform(square, circle))
            self.wait()

Run this command this time:

.. code-block:: sh

    manimgl start.py SquareToCircle

The pop-up window will play animations of drawing a square and transforming
it into a circle. If you want to save this video, run:

.. code-block:: sh
    
    manimgl start.py SquareToCircle -o

This time there will be no pop-up window, but the video file (saved in the subdirectory
``videos/`` of the same level directory of ``start.py`` by default) will be automatically
opened after the operation is over:

.. raw:: html

    <video class="manim-video" controls loop autoplay src="https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/quickstart/SquareToCircle.mp4"></video>

Let's take a look at the code this time. The first 7 lines are the same as the previous
ones, and the 8th line is similar to the 5th line, which creates an instance of the
:class:`Square` class and named it ``square``.

**Line 10**:

.. code-block:: python

    self.play(ShowCreation(square))

An animation is played through :class:`Scene`'s ``.play()`` method. :class:`ShowCreation`
is an animation that shows the process of creating a given mobject.
``self.play(ShowCreation(square))`` is to play the animation of creating ``square``.

**Line 11**:

.. code-block:: python

    self.wait()

Use :class:`Scene`'s ``.wait()`` method to pause (default 1s), you can pass in
parameters to indicate the pause time (for example, ``self.wait(3)`` means pause for 3s).

**Line 12**:

.. code-block:: python

    self.play(ReplacementTransform(square, circle))

Play the animation that transforms ``square`` into ``circle``.
``ReplacementTransform(A, B)`` means to transform A into B's pattern and replace A with B.

**Line 13**: Same as line 11, pause for 1s.


Enable interaction
------------------

Interaction is a new feature of the new version. You can add the following line
at the end of the code to enable interaction:

.. code-block:: python

    self.embed()

Then run ``manimgl start.py SquareToCircle``. 

After the previous animation is executed, the ipython terminal will be opened on
the command line. After that, you can continue to write code in it, and the statement
you entered will be executed immediately after pressing :kbd:`Enter`.

For example: input the following lines (without comment lines) into it respectively
(``self.play`` can be abbreviated as ``play`` in this mode):

.. code-block:: python

    # Stretched 4 times in the vertical direction
    play(circle.animate.stretch(4, dim=0))
    # Rotate the ellipse 90°
    play(Rotate(circle, TAU / 4))
    # Move 2 units to the right and shrink to 1/4 of the original
    play(circle.animate.shift(2 * RIGHT), circle.animate.scale(0.25))
    # Insert 10 curves into circle for non-linear transformation (no animation will play)
    circle.insert_n_curves(10)
    # Apply a complex transformation of f(z)=z^2 to all points on the circle
    play(circle.animate.apply_complex_function(lambda z: z**2))
    # Close the window and exit the program
    exit()

You will get an animation similar to the following:

.. raw:: html

    <video class="manim-video" controls loop autoplay src="https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/quickstart/SquareToCircleEmbed.mp4"></video>

If you want to enter the interactive mode directly, you don't have to write an
empty scene containing only ``self.embed()``, you can directly run the following command
(this will enter the ipython terminal while the window pops up):

.. code-block:: sh

    manimgl

You succeeded!
--------------

After reading the above content, you already know how to use manim.
Below you can see some examples, in the :doc:`example_scenes` page.
But before that, you'd better have a look at the :doc:`configuration` of manim.



===================================================
/. 🚀 docs/source/getting_started/configuration.rst
===================================================

CLI flags and configuration
===========================

Command Line Interface
----------------------

To run manim, you need to enter the directory at the same level as ``manimlib/`` 
and enter the command in the following format into terminal:

.. code-block:: sh

    manimgl <code>.py <Scene> <flags>
    # or
    manim-render <code>.py <Scene> <flags>

- ``<code>.py`` : The python file you wrote. Needs to be at the same level as ``manimlib/``, otherwise you need to use an absolute path or a relative path.
- ``<Scene>`` : The scene you want to render here. If it is not written or written incorrectly, it will list all for you to choose. And if there is only one ``Scene`` in the file, this class will be rendered directly.
- ``<flags>`` : CLI flags.

Some useful flags
^^^^^^^^^^^^^^^^^

- ``-w`` to write the scene to a file.
- ``-o`` to write the scene to a file and open the result.
- ``-s`` to skip to the end and just show the final frame. 

  - ``-so`` will save the final frame to an image and show it.

- ``-n <number>`` to skip ahead to the ``n``\ ’th animation of a scene. 
- ``-f`` to make the playback window fullscreen.

All supported flags
^^^^^^^^^^^^^^^^^^^

========================================================== ====== =====================================================================================================================================================================================================
flag                                                       abbr   function
========================================================== ====== =====================================================================================================================================================================================================
``--help``                                                 ``-h`` Show the help message and exit
``--version``                                              ``-v`` Display the version of manimgl
``--write_file``                                           ``-w`` Render the scene as a movie file
``--skip_animations``                                      ``-s`` Skip to the last frame
``--low_quality``                                          ``-l`` Render at a low quality (for faster rendering)
``--medium_quality``                                       ``-m`` Render at a medium quality
``--hd``                                                          Render at a 1080p quality
``--uhd``                                                         Render at a 4k quality
``--full_screen``                                          ``-f`` Show window in full screen
``--presenter_mode``                                       ``-p`` Scene will stay paused during wait calls until space bar or right arrow is hit, like a slide show
``--save_pngs``                                            ``-g`` Save each frame as a png
``--gif``                                                  ``-i`` Save the video as gif
``--transparent``                                          ``-t`` Render to a movie file with an alpha channel
``--quiet``                                                ``-q``
``--write_all``                                            ``-a`` Write all the scenes from a file
``--open``                                                 ``-o`` Automatically open the saved file once its done
``--finder``                                                      Show the output file in finder
``--config``                                                      Guide for automatic configuration
``--file_name FILE_NAME``                                         Name for the movie or image file
``--start_at_animation_number START_AT_ANIMATION_NUMBER``  ``-n`` Start rendering not from the first animation, but from another, specified by its index. If you passing two comma separated values, e.g. "3,6", it will end the rendering at the second value.
``--embed [EMBED]``                                        ``-e`` Creates a new file where the line ``self.embed`` is inserted into the Scenes construct method. If a string is passed in, the line will be inserted below the last line of code including that string.
``--resolution RESOLUTION``                                ``-r`` Resolution, passed as "WxH", e.g. "1920x1080"
``--fps FPS``                                                     Frame rate, as an integer
``--color COLOR``                                          ``-c`` Background color
``--leave_progress_bars``                                         Leave progress bars displayed in terminal
``--video_dir VIDEO_DIR``                                         Directory to write video
``--config_file CONFIG_FILE``                                     Path to the custom configuration file
``--log-level LOG_LEVEL``                                         Level of messages to Display, can be DEBUG / INFO / WARNING / ERROR / CRITICAL
========================================================== ====== =====================================================================================================================================================================================================

custom_config
--------------

In order to perform more configuration (about directories, etc.) and permanently 
change the default value (you don't have to add flags to the command every time), 
you can modify ``custom_config.yml``. The meaning of each option is in 
page :doc:`../documentation/custom_config`.

You can also use different ``custom_config.yml`` for different directories, such as 
following the directory structure:

.. code-block:: text

    manim/
    ├── manimlib/
    │   ├── animation/
    │   ├── ...
    │   ├── default_config.yml
    │   └── window.py
    ├── project/
    │   ├── code.py
    │   └── custom_config.yml
    └── custom_config.yml

When you enter the ``project/`` folder and run ``manimgl code.py <Scene>``, 
it will overwrite ``manim/default_config.yml`` with ``custom_config.yml`` 
in the ``project`` folder.

Alternatively, you can use ``--config_file`` flag in CLI to specify configuration file manually.

.. code-block:: sh

    manimgl project/code.py --config_file /path/to/custom_config.yml

===================================================
/. 🚀 docs/source/getting_started/example_scenes.rst
===================================================

Example Scenes
==============

After understanding the previous knowledge, we can understand more scenes.
Many example scenes are given in ``example_scenes.py``, let's start with
the simplest and one by one.

InteractiveDevlopment
---------------------

.. manim-example:: InteractiveDevelopment
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/InteractiveDevelopment.mp4

    from manimlib import *

    class InteractiveDevelopment(Scene):
        def construct(self):
            circle = Circle()
            circle.set_fill(BLUE, opacity=0.5)
            circle.set_stroke(BLUE_E, width=4)
            square = Square()

            self.play(ShowCreation(square))
            self.wait()

            # This opens an iPython terminal where you can keep writing
            # lines as if they were part of this construct method.
            # In particular, 'square', 'circle' and 'self' will all be
            # part of the local namespace in that terminal.
            self.embed()

            # Try copying and pasting some of the lines below into
            # the interactive shell
            self.play(ReplacementTransform(square, circle))
            self.wait()
            self.play(circle.animate.stretch(4, 0))
            self.play(Rotate(circle, 90 * DEGREES))
            self.play(circle.animate.shift(2 * RIGHT).scale(0.25))

            text = Text("""
                In general, using the interactive shell
                is very helpful when developing new scenes
            """)
            self.play(Write(text))

            # In the interactive shell, you can just type
            # play, add, remove, clear, wait, save_state and restore,
            # instead of self.play, self.add, self.remove, etc.

            # To interact with the window, type touch().  You can then
            # scroll in the window, or zoom by holding down 'z' while scrolling,
            # and change camera perspective by holding down 'd' while moving
            # the mouse.  Press 'r' to reset to the standard camera position.
            # Press 'q' to stop interacting with the window and go back to
            # typing new commands into the shell.

            # In principle you can customize a scene to be responsive to
            # mouse and keyboard interactions
            always(circle.move_to, self.mouse_point)

This scene is similar to what we wrote in :doc:`quickstart`.
And how to interact has been written in the comments.
No more explanation here.

AnimatingMethods
----------------

.. manim-example:: AnimatingMethods
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/AnimatingMethods.mp4

    class AnimatingMethods(Scene):
        def construct(self):
            grid = OldTex(r"\pi").get_grid(10, 10, height=4)
            self.add(grid)

            # You can animate the application of mobject methods with the
            # ".animate" syntax:
            self.play(grid.animate.shift(LEFT))

            # Alternatively, you can use the older syntax by passing the
            # method and then the arguments to the scene's "play" function:
            self.play(grid.shift, LEFT)

            # Both of those will interpolate between the mobject's initial
            # state and whatever happens when you apply that method.
            # For this example, calling grid.shift(LEFT) would shift the
            # grid one unit to the left, but both of the previous calls to
            # "self.play" animate that motion.

            # The same applies for any method, including those setting colors.
            self.play(grid.animate.set_color(YELLOW))
            self.wait()
            self.play(grid.animate.set_submobject_colors_by_gradient(BLUE, GREEN))
            self.wait()
            self.play(grid.animate.set_height(TAU - MED_SMALL_BUFF))
            self.wait()

            # The method Mobject.apply_complex_function lets you apply arbitrary
            # complex functions, treating the points defining the mobject as
            # complex numbers.
            self.play(grid.animate.apply_complex_function(np.exp), run_time=5)
            self.wait()

            # Even more generally, you could apply Mobject.apply_function,
            # which takes in functions form R^3 to R^3
            self.play(
                grid.animate.apply_function(
                    lambda p: [
                        p[0] + 0.5 * math.sin(p[1]),
                        p[1] + 0.5 * math.sin(p[0]),
                        p[2]
                    ]
                ),
                run_time=5,
            )
            self.wait()

The new usage in this scene is ``.get_grid()`` and ``self.play(mob.animate.method(args))``.

- ``.get_grid()`` method will return a new mobject containing multiple copies of this one arranged in a grid.
- ``self.play(mob.animate.method(args))`` animates the method, and the details are in the comments above.

TextExample
-----------

.. manim-example:: TextExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/TextExample.mp4

    class TextExample(Scene):
        def construct(self):
            # To run this scene properly, you should have "Consolas" font in your computer
            # for full usage, you can see https://github.com/3b1b/manim/pull/680
            text = Text("Here is a text", font="Consolas", font_size=90)
            difference = Text(
                """
                The most important difference between Text and TexText is that\n
                you can change the font more easily, but can't use the LaTeX grammar
                """,
                font="Arial", font_size=24,
                # t2c is a dict that you can choose color for different text
                t2c={"Text": BLUE, "TexText": BLUE, "LaTeX": ORANGE}
            )
            VGroup(text, difference).arrange(DOWN, buff=1)
            self.play(Write(text))
            self.play(FadeIn(difference, UP))
            self.wait(3)

            fonts = Text(
                "And you can also set the font according to different words",
                font="Arial",
                t2f={"font": "Consolas", "words": "Consolas"},
                t2c={"font": BLUE, "words": GREEN}
            )
            fonts.set_width(FRAME_WIDTH - 1)
            slant = Text(
                "And the same as slant and weight",
                font="Consolas",
                t2s={"slant": ITALIC},
                t2w={"weight": BOLD},
                t2c={"slant": ORANGE, "weight": RED}
            )
            VGroup(fonts, slant).arrange(DOWN, buff=0.8)
            self.play(FadeOut(text), FadeOut(difference, shift=DOWN))
            self.play(Write(fonts))
            self.wait()
            self.play(Write(slant))
            self.wait()

The new classes in this scene are ``Text``, ``VGroup``, ``Write``, ``FadeIn`` and ``FadeOut``.

- ``Text`` can create text, define fonts, etc. The usage ais clearly reflected in the above examples.
- ``VGroup`` can put multiple ``VMobject`` together as a whole. In the example, the ``.arrange()`` method is called to arrange the sub-mobjects in sequence downward (``DOWN``), and the spacing is ``buff``.
- ``Write`` is an animation that shows similar writing effects.
- ``FadeIn`` fades the object in, the second parameter indicates the direction of the fade in.
- ``FadeOut`` fades out the object, the second parameter indicates the direction of the fade out.

TexTransformExample
-------------------

.. manim-example:: TexTransformExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/TexTransformExample.mp4

    class TexTransformExample(Scene):
        def construct(self):
            to_isolate = ["B", "C", "=", "(", ")"]
            lines = VGroup(
                # Passing in muliple arguments to Tex will result
                # in the same expression as if those arguments had
                # been joined together, except that the submobject
                # hierarchy of the resulting mobject ensure that the
                # Tex mobject has a subject corresponding to
                # each of these strings.  For example, the Tex mobject
                # below will have 5 subjects, corresponding to the
                # expressions [A^2, +, B^2, =, C^2]
                OldTex("A^2", "+", "B^2", "=", "C^2"),
                # Likewise here
                OldTex("A^2", "=", "C^2", "-", "B^2"),
                # Alternatively, you can pass in the keyword argument
                # "isolate" with a list of strings that should be out as
                # their own submobject.  So the line below is equivalent
                # to the commented out line below it.
                OldTex("A^2 = (C + B)(C - B)", isolate=["A^2", *to_isolate]),
                # OldTex("A^2", "=", "(", "C", "+", "B", ")", "(", "C", "-", "B", ")"),
                OldTex("A = \\sqrt{(C + B)(C - B)}", isolate=["A", *to_isolate])
            )
            lines.arrange(DOWN, buff=LARGE_BUFF)
            for line in lines:
                line.set_color_by_tex_to_color_map({
                    "A": BLUE,
                    "B": TEAL,
                    "C": GREEN,
                })

            play_kw = {"run_time": 2}
            self.add(lines[0])
            # The animation TransformMatchingTex will line up parts
            # of the source and target which have matching tex strings.
            # Here, giving it a little path_arc makes each part sort of
            # rotate into their final positions, which feels appropriate
            # for the idea of rearranging an equation
            self.play(
                TransformMatchingTex(
                    lines[0].copy(), lines[1],
                    path_arc=90 * DEGREES,
                ),
                **play_kw
            )
            self.wait()

            # Now, we could try this again on the next line...
            self.play(
                TransformMatchingTex(lines[1].copy(), lines[2]),
                **play_kw
            )
            self.wait()
            # ...and this looks nice enough, but since there's no tex
            # in lines[2] which matches "C^2" or "B^2", those terms fade
            # out to nothing while the C and B terms fade in from nothing.
            # If, however, we want the C^2 to go to C, and B^2 to go to B,
            # we can specify that with a key map.
            self.play(FadeOut(lines[2]))
            self.play(
                TransformMatchingTex(
                    lines[1].copy(), lines[2],
                    key_map={
                        "C^2": "C",
                        "B^2": "B",
                    }
                ),
                **play_kw
            )
            self.wait()

            # And to finish off, a simple TransformMatchingShapes would work
            # just fine.  But perhaps we want that exponent on A^2 to transform into
            # the square root symbol.  At the moment, lines[2] treats the expression
            # A^2 as a unit, so we might create a new version of the same line which
            # separates out just the A.  This way, when TransformMatchingTex lines up
            # all matching parts, the only mismatch will be between the "^2" from
            # new_line2 and the "\sqrt" from the final line.  By passing in,
            # transform_mismatches=True, it will transform this "^2" part into
            # the "\sqrt" part.
            new_line2 = OldTex("A^2 = (C + B)(C - B)", isolate=["A", *to_isolate])
            new_line2.replace(lines[2])
            new_line2.match_style(lines[2])

            self.play(
                TransformMatchingTex(
                    new_line2, lines[3],
                    transform_mismatches=True,
                ),
                **play_kw
            )
            self.wait(3)
            self.play(FadeOut(lines, RIGHT))

            # Alternatively, if you don't want to think about breaking up
            # the tex strings deliberately, you can TransformMatchingShapes,
            # which will try to line up all pieces of a source mobject with
            # those of a target, regardless of the submobject hierarchy in
            # each one, according to whether those pieces have the same
            # shape (as best it can).
            source = Text("the morse code", height=1)
            target = Text("here come dots", height=1)

            self.play(Write(source))
            self.wait()
            kw = {"run_time": 3, "path_arc": PI / 2}
            self.play(TransformMatchingShapes(source, target, **kw))
            self.wait()
            self.play(TransformMatchingShapes(target, source, **kw))
            self.wait()

The new classes in this scene are ``Tex``, ``TexText``, ``TransformMatchingTex``
and ``TransformMatchingShapes``.

- ``Tex`` uses LaTeX to create mathematical formulas.
- ``TexText`` uses LaTeX to create text.
- ``TransformMatchingTeX`` automatically transforms sub-objects according to the similarities and differences of tex in ``Tex``.
- ``TransformMatchingShapes`` automatically transform sub-objects directly based on the similarities and differences of the object point sets.

UpdatersExample
---------------

.. manim-example:: UpdatersExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/UpdatersExample.mp4

    class UpdatersExample(Scene):
        def construct(self):
            square = Square()
            square.set_fill(BLUE_E, 1)

            # On all all frames, the constructor Brace(square, UP) will
            # be called, and the mobject brace will set its data to match
            # that of the newly constructed object
            brace = always_redraw(Brace, square, UP)

            text, number = label = VGroup(
                Text("Width = "),
                DecimalNumber(
                    0,
                    show_ellipsis=True,
                    num_decimal_places=2,
                    include_sign=True,
                )
            )
            label.arrange(RIGHT)

            # This ensures that the method deicmal.next_to(square)
            # is called on every frame
            always(label.next_to, brace, UP)
            # You could also write the following equivalent line
            # label.add_updater(lambda m: m.next_to(brace, UP))

            # If the argument itself might change, you can use f_always,
            # for which the arguments following the initial Mobject method
            # should be functions returning arguments to that method.
            # The following line ensures that decimal.set_value(square.get_y())
            # is called every frame
            f_always(number.set_value, square.get_width)
            # You could also write the following equivalent line
            # number.add_updater(lambda m: m.set_value(square.get_width()))

            self.add(square, brace, label)

            # Notice that the brace and label track with the square
            self.play(
                square.animate.scale(2),
                rate_func=there_and_back,
                run_time=2,
            )
            self.wait()
            self.play(
                square.animate.set_width(5, stretch=True),
                run_time=3,
            )
            self.wait()
            self.play(
                square.animate.set_width(2),
                run_time=3
            )
            self.wait()

            # In general, you can alway call Mobject.add_updater, and pass in
            # a function that you want to be called on every frame.  The function
            # should take in either one argument, the mobject, or two arguments,
            # the mobject and the amount of time since the last frame.
            now = self.time
            w0 = square.get_width()
            square.add_updater(
                lambda m: m.set_width(w0 * math.cos(self.time - now))
            )
            self.wait(4 * PI)

The new classes and usage in this scene are ``always_redraw()``, ``DecimalNumber``, ``.to_edge()``,
``.center()``, ``always()``, ``f_always()``, ``.set_y()`` and ``.add_updater()``.

- ``always_redraw()`` function create a new mobject every frame.
- ``DecimalNumber`` is a variable number, speed it up by breaking it into ``Text`` characters.
- ``.to_edge()`` means to place the object on the edge of the screen.
- ``.center()`` means to place the object in the center of the screen.
- ``always(f, x)`` means that a certain function (``f(x)``) is executed every frame.
- ``f_always(f, g)`` is similar to ``always``, executed ``f(g())`` every frame.
- ``.set_y()`` means to set the ordinate of the object on the screen.
- ``.add_updater()`` sets an update function for the object. For example: ``mob1.add_updater(lambda mob: mob.next_to(mob2))`` means ``mob1.next_to(mob2)`` is executed every frame.

CoordinateSystemExample
-----------------------

.. manim-example:: CoordinateSystemExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/CoordinateSystemExample.mp4

    class CoordinateSystemExample(Scene):
        def construct(self):
            axes = Axes(
                # x-axis ranges from -1 to 10, with a default step size of 1
                x_range=(-1, 10),
                # y-axis ranges from -2 to 2 with a step size of 0.5
                y_range=(-2, 2, 0.5),
                # The axes will be stretched so as to match the specified
                # height and width
                height=6,
                width=10,
                # Axes is made of two NumberLine mobjects.  You can specify
                # their configuration with axis_config
                axis_config={
                    "stroke_color": GREY_A,
                    "stroke_width": 2,
                },
                # Alternatively, you can specify configuration for just one
                # of them, like this.
                y_axis_config={
                    "include_tip": False,
                }
            )
            # Keyword arguments of add_coordinate_labels can be used to
            # configure the DecimalNumber mobjects which it creates and
            # adds to the axes
            axes.add_coordinate_labels(
                font_size=20,
                num_decimal_places=1,
            )
            self.add(axes)

            # Axes descends from the CoordinateSystem class, meaning
            # you can call call axes.coords_to_point, abbreviated to
            # axes.c2p, to associate a set of coordinates with a point,
            # like so:
            dot = Dot(color=RED)
            dot.move_to(axes.c2p(0, 0))
            self.play(FadeIn(dot, scale=0.5))
            self.play(dot.animate.move_to(axes.c2p(3, 2)))
            self.wait()
            self.play(dot.animate.move_to(axes.c2p(5, 0.5)))
            self.wait()

            # Similarly, you can call axes.point_to_coords, or axes.p2c
            # print(axes.p2c(dot.get_center()))

            # We can draw lines from the axes to better mark the coordinates
            # of a given point.
            # Here, the always_redraw command means that on each new frame
            # the lines will be redrawn
            h_line = always_redraw(lambda: axes.get_h_line(dot.get_left()))
            v_line = always_redraw(lambda: axes.get_v_line(dot.get_bottom()))

            self.play(
                ShowCreation(h_line),
                ShowCreation(v_line),
            )
            self.play(dot.animate.move_to(axes.c2p(3, -2)))
            self.wait()
            self.play(dot.animate.move_to(axes.c2p(1, 1)))
            self.wait()

            # If we tie the dot to a particular set of coordinates, notice
            # that as we move the axes around it respects the coordinate
            # system defined by them.
            f_always(dot.move_to, lambda: axes.c2p(1, 1))
            self.play(
                axes.animate.scale(0.75).to_corner(UL),
                run_time=2,
            )
            self.wait()
            self.play(FadeOut(VGroup(axes, dot, h_line, v_line)))

            # Other coordinate systems you can play around with include
            # ThreeDAxes, NumberPlane, and ComplexPlane.


GraphExample
------------

.. manim-example:: GraphExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/GraphExample.mp4

    class GraphExample(Scene):
        def construct(self):
            axes = Axes((-3, 10), (-1, 8))
            axes.add_coordinate_labels()

            self.play(Write(axes, lag_ratio=0.01, run_time=1))

            # Axes.get_graph will return the graph of a function
            sin_graph = axes.get_graph(
                lambda x: 2 * math.sin(x),
                color=BLUE,
            )
            # By default, it draws it so as to somewhat smoothly interpolate
            # between sampled points (x, f(x)).  If the graph is meant to have
            # a corner, though, you can set use_smoothing to False
            relu_graph = axes.get_graph(
                lambda x: max(x, 0),
                use_smoothing=False,
                color=YELLOW,
            )
            # For discontinuous functions, you can specify the point of
            # discontinuity so that it does not try to draw over the gap.
            step_graph = axes.get_graph(
                lambda x: 2.0 if x > 3 else 1.0,
                discontinuities=[3],
                color=GREEN,
            )

            # Axes.get_graph_label takes in either a string or a mobject.
            # If it's a string, it treats it as a LaTeX expression.  By default
            # it places the label next to the graph near the right side, and
            # has it match the color of the graph
            sin_label = axes.get_graph_label(sin_graph, "\\sin(x)")
            relu_label = axes.get_graph_label(relu_graph, Text("ReLU"))
            step_label = axes.get_graph_label(step_graph, Text("Step"), x=4)

            self.play(
                ShowCreation(sin_graph),
                FadeIn(sin_label, RIGHT),
            )
            self.wait(2)
            self.play(
                ReplacementTransform(sin_graph, relu_graph),
                FadeTransform(sin_label, relu_label),
            )
            self.wait()
            self.play(
                ReplacementTransform(relu_graph, step_graph),
                FadeTransform(relu_label, step_label),
            )
            self.wait()

            parabola = axes.get_graph(lambda x: 0.25 * x**2)
            parabola.set_stroke(BLUE)
            self.play(
                FadeOut(step_graph),
                FadeOut(step_label),
                ShowCreation(parabola)
            )
            self.wait()

            # You can use axes.input_to_graph_point, abbreviated
            # to axes.i2gp, to find a particular point on a graph
            dot = Dot(color=RED)
            dot.move_to(axes.i2gp(2, parabola))
            self.play(FadeIn(dot, scale=0.5))

            # A value tracker lets us animate a parameter, usually
            # with the intent of having other mobjects update based
            # on the parameter
            x_tracker = ValueTracker(2)
            f_always(
                dot.move_to,
                lambda: axes.i2gp(x_tracker.get_value(), parabola)
            )

            self.play(x_tracker.animate.set_value(4), run_time=3)
            self.play(x_tracker.animate.set_value(-2), run_time=3)
            self.wait()

SurfaceExample
--------------

.. manim-example:: SurfaceExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/SurfaceExample.mp4

    class SurfaceExample(Scene):
        CONFIG = {
            "camera_class": ThreeDCamera,
        }

        def construct(self):
            surface_text = Text("For 3d scenes, try using surfaces")
            surface_text.fix_in_frame()
            surface_text.to_edge(UP)
            self.add(surface_text)
            self.wait(0.1)

            torus1 = Torus(r1=1, r2=1)
            torus2 = Torus(r1=3, r2=1)
            sphere = Sphere(radius=3, resolution=torus1.resolution)
            # You can texture a surface with up to two images, which will
            # be interpreted as the side towards the light, and away from
            # the light.  These can be either urls, or paths to a local file
            # in whatever you've set as the image directory in
            # the custom_config.yml file

            # day_texture = "EarthTextureMap"
            # night_texture = "NightEarthTextureMap"
            day_texture = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Whole_world_-_land_and_oceans.jpg/1280px-Whole_world_-_land_and_oceans.jpg"
            night_texture = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/The_earth_at_night.jpg/1280px-The_earth_at_night.jpg"

            surfaces = [
                TexturedSurface(surface, day_texture, night_texture)
                for surface in [sphere, torus1, torus2]
            ]

            for mob in surfaces:
                mob.shift(IN)
                mob.mesh = SurfaceMesh(mob)
                mob.mesh.set_stroke(BLUE, 1, opacity=0.5)

            # Set perspective
            frame = self.camera.frame
            frame.set_euler_angles(
                theta=-30 * DEGREES,
                phi=70 * DEGREES,
            )

            surface = surfaces[0]

            self.play(
                FadeIn(surface),
                ShowCreation(surface.mesh, lag_ratio=0.01, run_time=3),
            )
            for mob in surfaces:
                mob.add(mob.mesh)
            surface.save_state()
            self.play(Rotate(surface, PI / 2), run_time=2)
            for mob in surfaces[1:]:
                mob.rotate(PI / 2)

            self.play(
                Transform(surface, surfaces[1]),
                run_time=3
            )

            self.play(
                Transform(surface, surfaces[2]),
                # Move camera frame during the transition
                frame.animate.increment_phi(-10 * DEGREES),
                frame.animate.increment_theta(-20 * DEGREES),
                run_time=3
            )
            # Add ambient rotation
            frame.add_updater(lambda m, dt: m.increment_theta(-0.1 * dt))

            # Play around with where the light is
            light_text = Text("You can move around the light source")
            light_text.move_to(surface_text)
            light_text.fix_in_frame()

            self.play(FadeTransform(surface_text, light_text))
            light = self.camera.light_source
            self.add(light)
            light.save_state()
            self.play(light.animate.move_to(3 * IN), run_time=5)
            self.play(light.animate.shift(10 * OUT), run_time=5)

            drag_text = Text("Try moving the mouse while pressing d or s")
            drag_text.move_to(light_text)
            drag_text.fix_in_frame()

            self.play(FadeTransform(light_text, drag_text))
            self.wait()

This scene shows an example of using a three-dimensional surface, and
the related usage has been briefly described in the notes.

- ``.fix_in_frame()`` makes the object not change with the view angle of the screen, and is always displayed at a fixed position on the screen.

OpeningManimExample
-------------------

.. manim-example:: OpeningManimExample
    :media: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/example_scenes/OpeningManimExample.mp4


    class OpeningManimExample(Scene):
        def construct(self):
            intro_words = Text("""
                The original motivation for manim was to
                better illustrate mathematical functions
                as transformations.
            """)
            intro_words.to_edge(UP)

            self.play(Write(intro_words))
            self.wait(2)

            # Linear transform
            grid = NumberPlane((-10, 10), (-5, 5))
            matrix = [[1, 1], [0, 1]]
            linear_transform_words = VGroup(
                Text("This is what the matrix"),
                IntegerMatrix(matrix, include_background_rectangle=True),
                Text("looks like")
            )
            linear_transform_words.arrange(RIGHT)
            linear_transform_words.to_edge(UP)
            linear_transform_words.set_stroke(BLACK, 10, background=True)

            self.play(
                ShowCreation(grid),
                FadeTransform(intro_words, linear_transform_words)
            )
            self.wait()
            self.play(grid.animate.apply_matrix(matrix), run_time=3)
            self.wait()

            # Complex map
            c_grid = ComplexPlane()
            moving_c_grid = c_grid.copy()
            moving_c_grid.prepare_for_nonlinear_transform()
            c_grid.set_stroke(BLUE_E, 1)
            c_grid.add_coordinate_labels(font_size=24)
            complex_map_words = TexText("""
                Or thinking of the plane as $\\mathds{C}$,\\\\
                this is the map $z \\rightarrow z^2$
            """)
            complex_map_words.to_corner(UR)
            complex_map_words.set_stroke(BLACK, 5, background=True)

            self.play(
                FadeOut(grid),
                Write(c_grid, run_time=3),
                FadeIn(moving_c_grid),
                FadeTransform(linear_transform_words, complex_map_words),
            )
            self.wait()
            self.play(
                moving_c_grid.animate.apply_complex_function(lambda z: z**2),
                run_time=6,
            )
            self.wait(2)

This scene is a comprehensive application of a two-dimensional scene.

After seeing these scenes, you have already understood part of the
usage of manim. For more examples, see `the video code of 3b1b <https://github.com/3b1b/videos>`_.


===================================================
/. 🚀 docs/source/getting_started/structure.rst
===================================================

Manim's structure
=================


Manim's directory structure
---------------------------

The manim directory looks very complicated, with a lot of files, 
but the structure is clear.

Below is the directory structure of manim:

.. code-block:: text

    manimlib/ # manim library
    ├── __init__.py          
    ├── __main__.py          
    ├── default_config.yml   # Default configuration file
    ├── config.py            # Process CLI flags
    ├── constants.py         # Defined some constants
    ├── extract_scene.py     # Extract and run the scene
    ├── shader_wrapper.py    # Shaders' Wrapper for convenient control
    ├── window.py            # Playback window
    ├── tex_templates/ # Templates preset for LaTeX
    │   ├── tex_templates.tex   # Tex template (will be compiled with latex, default)
    │   └── ctex_templates.tex  # Tex template that support Chinese (will be compiled with xelatex)
    ├── camera/
    │   └── camera.py        # Including Camera and CameraFrame
    ├── scene/
    │   ├── scene_file_writer.py     # Used to write scene to video file
    │   ├── scene.py                 # The basic Scene class
    │   ├── three_d_scene.py         # Three-dimensional scene
    │   ├── sample_space_scene.py    # Probability related sample space scene
    │   └── vector_space_scene.py    # Vector field scene
    ├── animation/
    │   ├── animation.py     # The basic class of animation
    │   ├── composition.py   # Animation group
    │   ├── creation.py      # Animation related to Create
    │   ├── fading.py        # Fade related animation
    │   ├── growing.py       # Animation related to Grow
    │   ├── indication.py    # Some animations for emphasis
    │   ├── movement.py      # Animation related to movement
    │   ├── numbers.py       # Realize changes to DecimalNumber
    │   ├── rotation.py      # Animation related to rotation
    │   ├── specialized.py   # Some uncommon animations for special projects
    │   ├── transform_matching_parts.py # Transform which can automatically match parts
    │   ├── transform.py     # Some Transforms
    │   └── update.py        # Realize update from function
    ├── mobject/
    │   ├── mobject.py       # The basic class of all math object
    │   ├── types/ # 4 types of mobject
    │   │   ├── dot_cloud.py            # Dot cloud (an subclass of PMobject)
    │   │   ├── image_mobject.py        # Insert pictures
    │   │   ├── point_cloud_mobject.py  # PMobject (mobject composed of points)
    │   │   ├── surface.py              # ParametricSurface
    │   │   └── vectorized_mobject.py   # VMobject (vectorized mobject)
    │   ├── svg/ # mobject related to svg
    │   │   ├── svg_mobject.py          # SVGMobject
    │   │   ├── brace.py                # Brace
    │   │   ├── drawings.py             # Some special mobject of svg image
    │   │   ├── tex_mobject.py          # Tex and TexText implemented by LaTeX
    │   │   └── text_mobject.py         # Text implemented by manimpango
    │   ├── changing.py             # Dynamically changing mobject
    │   ├── coordinate_systems.py   # coordinate system
    │   ├── frame.py                # mobject related to frame
    │   ├── functions.py            # ParametricFunction
    │   ├── geometry.py             # geometry mobjects
    │   ├── matrix.py               # matrix
    │   ├── mobject_update_utils.py # some defined updater
    │   ├── number_line.py          # Number line
    │   ├── numbers.py              # Numbers that can be changed
    │   ├── probability.py          # mobject related to probability
    │   ├── shape_matchers.py       # mobject adapted to the size of other objects
    │   ├── three_dimensions.py     # Three-dimensional objects
    │   ├── value_tracker.py        # ValueTracker which storage number
    │   └── vector_field.py         # VectorField
    ├── once_useful_constructs/  # 3b1b's Common scenes written for some videos
    │   └── ...
    ├── shaders/ # GLSL scripts for rendering
    │   ├── simple_vert.glsl    # a simple glsl script for position
    │   ├── insert/ # glsl scripts to be inserted in other glsl scripts
    │   │   ├── NOTE.md   # explain how to insert glsl scripts
    │   │   └── ...       # useful scripts
    │   ├── image/ # glsl for images
    │   │   └── ... # containing shaders for vertex and fragment
    │   ├── quadratic_bezier_fill/ # glsl for the fill of quadratic bezier curve
    │   │   └── ... # containing shaders for vertex, fragment and geometry
    │   ├── quadratic_bezier_stroke/ # glsl for the stroke of quadratic bezier curve
    │   │   └── ... # containing shaders for vertex, fragment and geometry
    │   ├── surface/ # glsl for surfaces
    │   │   └── ... # containing shaders for vertex and fragment
    │   ├── textured_surface/ # glsl for textured_surface
    │   │   └── ... # containing shaders for vertex and fragment
    │   └── true_dot/ # glsl for a dot
    │       └── ... # containing shaders for vertex, fragment and geometry
    └── utils/ # Some useful utility functions
        ├── bezier.py             # For bezier curve
        ├── color.py              # For color
        ├── dict_ops.py           # Functions related to dictionary processing
        ├── customization.py      # Read from custom_config.yml
        ├── debug.py              # Utilities for debugging in program
        ├── directories.py        # Read directories from config file
        ├── family_ops.py         # Process family members
        ├── file_ops.py           # Process files and directories
        ├── images.py             # Read image
        ├── init_config.py        # Configuration guide
        ├── iterables.py          # Functions related to list/dictionary processing
        ├── paths.py              # Curve path
        ├── rate_functions.py     # Some defined rate_functions
        ├── simple_functions.py   # Some commonly used functions
        ├── sounds.py             # Process sounds
        ├── space_ops.py          # Space coordinate calculation
        ├── strings.py            # Process strings
        └── tex_file_writing.py   # Use LaTeX to write strings as svg

Inheritance structure of manim's classes
----------------------------------------

`Here <https://github.com/3b1b/manim/files/5824383/manim_shaders_structure.pdf>`_ 
is a pdf showed inheritance structure of manim's classes, large, 
but basically all classes have included:

.. image:: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/manim_shaders_structure.png

Manim execution process
-----------------------

.. image:: https://cdn.jsdelivr.net/gh/manim-kindergarten/CDN@master/manimgl_assets/manim_shaders_process_en.png


===================================================
/. 🚀 docs/source/getting_started/whatsnew.rst
===================================================

What's new
==========

Usage changes of new version manim
----------------------------------

There are many changes in the new version of manim, and here are only the changes that 
may have an impact at the code writing level. 

Some of the changes here may not have any major impact on the use, and some changes 
that affect the use are not mentioned below.

This document is for reference only, see the source code for details.

- ``Animation``
  
  - Added ``Fade`` as the parent class of ``FadeIn`` and ``FadeOut``
  - ``FadeIn`` and ``FadeOut`` can be passed in ``shift`` and ``scale`` parameters
  - Deleted ``FadeInFrom, FadeInFromDown, FadeOutAndShift, FadeOutAndShiftDown, FadeInFromLarge``, these can be used ``FadeIn, FadeOut`` to achieve the same effect more easily
  - Added ``FadeTransform`` to cross fade between two objects, and subclass ``FadeTransformPieces``
  - Added ``CountInFrom(decimal_mob, source_number=0)`` to count ``decimal_mob`` from ``source_number`` to the current value
  - ``Rotating`` can directly pass in ``angle`` and ``axis`` without writing keywords ``angle=, axis=``
  - ``Rotate`` has become a subclass of ``Rotating``, and the distortion effect in ``Transform`` will not appear
  - Removed ``MoveCar`` animation
  - Added ``TransformMatchingShapes(mobject, target_mobject)`` and ``TransformMatchingTex(mobject, target_mobject)``
  
- ``Camera``

  - Removed all camera classes except ``Camera`` (``MappingCamera``, ``MovingCamera``, ``MultiCamera``) and all functions in ``ThreeDCamera``
  - Implemented ``CameraFrame`` (as a ``Mobject``)
  
    - Can be called by ``self.camera.frame`` in ``Scene``
    - All methods of ``Mobject`` can be used, such as ``.shift()``, ``.scale()``, etc.
    - Call ``.to_default_state()`` to place in the default position
    - Set the Euler angles of the camera by ``.set_euler_angles(theta, phi, gamma)``
    - Set three single Euler angles by ``.set_theta(theta)``, ``.set_phi(phi)``, ``.set_gamma(gamma)``
    - Use ``.increment_theta(dtheta)``, ``.increment_phi(dphi)``, ``.increment_gamma(gamma)`` to increase the three Euler angles by a certain value. Can be used to realize automatic rotation ``self.camera.frame.add_updater(lambda mob, dt: mob.increment_theta(0.1 * dt))``
  
  - ``Camera`` adds a light source, which is a ``Point``, which can be called by ``self.camera.light_source`` in ``Scene`` to move and so on. The default position is ``(- 10, 10, 10)``
  
- Delete ``Container``
- ``Mobject``
  
  - ``svg`` related
  
    - Added ``Checkmark`` and ``Exmark``
    - Some unnecessary classes have been removed from ``drawings.py``
    - Removed ``Code`` and ``Paragraph`` (by mistake)
    - ``TexMobject`` is renamed to ``Tex``, ``TextMobject`` is renamed to ``TexText``
    - ``font_size`` has been added to ``Tex``, ``TexText`` and ``Text``
    - ``Tex`` and ``TexText`` added ``isolate``, which is a list, which will be automatically split
  
  - Mobject ``types``
  
    - Added a new class ``Surface``, which is the parent class of ``ParametricSurface`` and ``TexturedSurface``.
    - Added the group ``SGroup`` for ``Surface``
    - Added ``TexturedSurface(uv_surface, image_file, dark_image_file=None)``, where ``uv_surface`` is a ``Surface``, ``image_file`` is the image to be posted, and ``dark_image_file`` is the image to be posted in the dark (default and ``image_file`` is the same)
    - Deleted ``Mobject1D``, ``Mobject2D``, ``PointCloudDot``
    - Added ``DotCloud`` (a ``PMobject``), which has been greatly optimized
    - Removed ``AbstractImageMobject``, ``ImageMobjectFromCamera``
    - Removed ``sheen`` from ``VMobject``
  
  - ``Mobject``
  
    - Added ``gloss`` and ``shadow``, which are the numbers between ``[0, 1]`` respectively. There are four methods of ``.get_gloss()``, ``.set_gloss(gloss)``, ``.get_shadow()``, ``.set_shadow(shadow)``
    - Added ``.get_grid(n_rows, n_cols)`` to copy into grid
    - Added ``.set_color_by_code(glsl_code)`` to use GLSL code to change the color
    - Added ``.set_color_by_xyz_func(glsl_snippet, min_value=-5.0, max_value=5.0, colormap="viridis")`` to pass in GLSL expression in the form of ``x,y,z``, the return value should be a floating point number
  
  - Coordinate system (including ``Axes``, ``ThreeDAxes``, ``NumberPlane``, ``ComplexPlane``)

    - No longer use ``x_min``, ``x_max``, ``y_min``, ``y_max``, but use ``x_range``, ``y_range`` as a ``np.array()``, containing three numbers ``np.array([ Minimum, maximum, step size])``
    - Added the abbreviation ``.i2gp(x, graph)`` of ``.input_to_graph_point(x, graph)``
    - Added some functions of the original ``GraphScene``
  
      - Added ``.get_v_line(point)``, ``.get_h_line(point)`` to return the line from ``point`` to the two coordinate axes, and specify the line type through the keyword argument of ``line_func`` (default ``DashedLine``)
      - Added ``.get_graph_label(graph, label, x, direction, buff, color)`` to return the label added to the image
      - Added ``.get_v_line_to_graph(x, graph)``, ``.get_h_line_to_graph(x, graph)`` to return the line from the point with the abscissa of ``x`` on the ``graph`` to the two- axis line
      - Added ``.angle_of_tangent(x, graph, dx=EPSILON)``, returns the inclination angle of ``graph`` at ``x``
      - Added ``.slope_of_tangent(x, graph, dx=EPSILON)``, returns the slope of tangent line of ``graph`` at ``x``
      - Added ``.get_tangent_line(x, graph, length=5)`` to return the tangent line of ``graph`` at ``x``
      - Added ``.get_riemann_rectangles(graph, x_range, dx, input_sample_type, ...)`` to return Riemann rectangles (a ``VGroup``)
  
    - The attribute ``number_line_config`` of ``Axes`` is renamed to ``axis_config``
    - ``Axes`` original ``.get_coordinate_labels(x_values, y_values)`` method was renamed to ``.add_coordinate_labels(x_values, y_values)`` (but it is not added to the screen)
    - ``.add_coordinate_labels(numbers)`` of ``ComplexPlane`` will directly add the coordinates to the screen
  
  - ``NumberLine``
  
    - No longer use ``x_min``, ``x_max``, ``tick_frequency``, but use ``x_range``, which is an array containing three numbers ``[min, max, step]``
    - The original ``label_direction`` attribute changed to the ``line_to_number_direction`` attribute
    - Replace ``tip_width`` and ``tip_height`` with ``tip_config`` (dictionary) attributes
    - The original ``exclude_zero_from_default`` attribute is modified to the ``numbers_to_exclude`` attribute (default is None)
    - The original ``.add_tick_marks()`` method was changed to the ``.add_ticks()`` method
    - Delete the ``.get_number_mobjects(*numbers)`` method, only use the ``.add_numbers(x_values=None, excluding=None)`` method
  
  - Three-dimensional objects
  
    - Added ``SurfaceMesh(uv_surface)``, pass in a ``Surface`` to generate its uv mesh
    - ``ParametricSurface`` no longer uses ``u_min, u_max, v_min, v_max``, but instead uses ``u_range, v_range``, which is a tuple (``(min, max)``), and ``resolution`` can be set larger, don’t worry Speed ​​issue
    - Added ``Torus``, controlled by ``r1, r2`` keyword parameters
    - Added ``Cylinder``, controlled by ``height, radius`` keyword parameters
    - Added ``Line3D`` (extremely thin cylinder), controlled by the ``width`` keyword parameter
    - Added ``Disk3D``, controlled by ``radius`` keyword parameter
    - Add ``Square3D``, controlled by ``side_length`` keyword parameter
    - Improved ``Cube`` and ``Prism``, the usage remains unchanged
  
  - Other objects
  
    - ``ParametricFunction`` is renamed to ``ParametricCurve``. Instead of using ``t_min, t_max, step_size``, use ``t_range``, which is an array of three numbers (``[t_min, t_max, step_size]``). ``dt`` was renamed to ``epsilon``. Other usage remains unchanged
    - All ``TipableVMobject`` can pass in ``tip_length`` to control the style of ``tip``
    - ``Line`` adds ``.set_points_by_ends(start, end, buff=0, path_arc=0)`` method
    - ``Line`` added ``.get_projection(point)`` to return the projection position of ``point`` on a straight line
    - ``Arrow`` adds three attributes of ``thickness, tip_width_ratio, tip_angle``
    - ``CubicBezier`` is changed to ``a0, h0, h1, a1``, that is, only a third-order Bezier curve is supported
    - ``Square`` can be initialized directly by passing in ``side_length`` instead of using the keyword ``side_length=``
    - ``always_redraw(func, *args, **kwargs)`` supports incoming parameters ``*args, **kwargs``
    - The ``digit_to_digit_buff`` property of ``DecimalNumber`` has been renamed to ``digit_buff_per_font_unit``, and the ``.scale()`` method has been improved
    - ``ValueTracker`` adds ``value_type`` attribute, the default is ``np.float64``
  
- ``Scene``
  
  - Removed all functions of ``GraphScene`` (moved to ``once_useful_constructs``), ``MovingCameraScene``, ``ReconfigurableScene``, ``SceneFromVideo``, ``ZoomedScene``, and ``ThreeDScene``. Because these can basically be achieved by adjusting ``CameraFrame`` (``self.camera.frame``)
  - Currently ``SampleSpaceScene`` and ``VectorScene`` have not been changed for the new version, so it is not recommended to use (only ``Scene`` is recommended)
  - Fix the export of gif, just use the ``-i`` option directly
  - Added the ``.interact()`` method, during which the mouse and keyboard can be used to continue the interaction, which will be executed by default after the scene ends
  - Added ``.embed()`` method, open iPython terminal to enter interactive mode
  - Added ``.save_state()`` method to save the current state of the scene
  - Added ``.restore()`` method to restore the entire scene to the saved state
  
- ``utils``
  
  - A series of functions related to second-order Bezier have been added to ``utils/bezier.py``
  - Added a function to read color map from ``matplotlib`` in ``utils/color.py``
  - Added a series of related functions for processing folders/custom styles/object families
  - ``resize_array``, ``resize_preserving_order``, ``resize_with_interpolation`` three functions have been added to ``utils/iterables.py``
  - The definition of ``smooth`` is updated in ``utils/rate_functions.py``
  - ``clip(a, min_a, max_a)`` function has been added to ``utils/simple_functions.py``
  - Some functions have been improved in ``utils/space_ops.py``, some functions for space calculation, and functions for processing triangulation have been added
  
- ``constants``
  
  - Fixed the aspect ratio of the screen to 16:9
  - Deleted the old gray series (``LIGHT_GREY``, ``GREY``, ``DARK_GREY``, ``DARKER_GREY``), added a new series of gray ``GREY_A`` ~ ``GREY_E``

===================================================
/. 🚀 docs/source/documentation/constants.rst
===================================================

constants
=========

The ``constants.py`` in the ``manimlib`` folder defines the constants 
needed when running manim. Some constants are not explained here because 
they are only used inside manim.

Frame and pixel shape
---------------------

.. code-block:: python

    ASPECT_RATIO = 16.0 / 9.0
    FRAME_HEIGHT = 8.0
    FRAME_WIDTH = FRAME_HEIGHT * ASPECT_RATIO
    FRAME_Y_RADIUS = FRAME_HEIGHT / 2
    FRAME_X_RADIUS = FRAME_WIDTH / 2

    DEFAULT_PIXEL_HEIGHT = 1080
    DEFAULT_PIXEL_WIDTH = 1920
    DEFAULT_FPS = 30

Buffs
-----

.. code-block:: python

    SMALL_BUFF = 0.1
    MED_SMALL_BUFF = 0.25
    MED_LARGE_BUFF = 0.5
    LARGE_BUFF = 1  

    DEFAULT_MOBJECT_TO_EDGE_BUFFER = MED_LARGE_BUFF    # Distance between object and edge
    DEFAULT_MOBJECT_TO_MOBJECT_BUFFER = MED_SMALL_BUFF # Distance between objects   

Run times
---------

.. code-block:: python

    DEFAULT_POINTWISE_FUNCTION_RUN_TIME = 3.0
    DEFAULT_WAIT_TIME = 1.0

Coordinates
-----------

manim uses three-dimensional coordinates and uses the type of ``ndarray``

.. code-block:: python

    ORIGIN = np.array((0., 0., 0.))
    UP = np.array((0., 1., 0.))
    DOWN = np.array((0., -1., 0.))
    RIGHT = np.array((1., 0., 0.))
    LEFT = np.array((-1., 0., 0.))
    IN = np.array((0., 0., -1.))
    OUT = np.array((0., 0., 1.))
    X_AXIS = np.array((1., 0., 0.))
    Y_AXIS = np.array((0., 1., 0.))
    Z_AXIS = np.array((0., 0., 1.))

    # Useful abbreviations for diagonals
    UL = UP + LEFT
    UR = UP + RIGHT
    DL = DOWN + LEFT
    DR = DOWN + RIGHT

    TOP = FRAME_Y_RADIUS * UP
    BOTTOM = FRAME_Y_RADIUS * DOWN
    LEFT_SIDE = FRAME_X_RADIUS * LEFT
    RIGHT_SIDE = FRAME_X_RADIUS * RIGHT

Mathematical constant
---------------------

.. code-block:: python

   PI = np.pi
   TAU = 2 * PI
   DEGREES = TAU / 360

Text
----

.. code-block:: python

    NORMAL = "NORMAL"
    ITALIC = "ITALIC"
    OBLIQUE = "OBLIQUE"
    BOLD = "BOLD"

Stroke width
------------

.. code-block:: python

    DEFAULT_STROKE_WIDTH = 4

Colours
-------

Here are the preview of default colours. (Modified from 
`elteoremadebeethoven <https://elteoremadebeethoven.github.io/manim_3feb_docs.github.io/html/_static/colors/colors.html>`_)

.. raw:: html

    <div style="float: left;">
    <h3>BLUE</h3>
    <div class="colors BLUE_E"><p class="color-text">  BLUE_E  </p></div>
    <div class="colors BLUE_D"><p class="color-text">  BLUE_D  </p></div>
    <div class="colors BLUE_C"><p class="color-text">  BLUE_C  </p></div>
    <div class="colors BLUE_B"><p class="color-text">  BLUE_B  </p></div>
    <div class="colors BLUE_A"><p class="color-text">  BLUE_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>TEAL</h3>
    <div class="colors TEAL_E"><p class="color-text">  TEAL_E  </p></div>
    <div class="colors TEAL_D"><p class="color-text">  TEAL_D  </p></div>
    <div class="colors TEAL_C"><p class="color-text">  TEAL_C  </p></div>
    <div class="colors TEAL_B"><p class="color-text">  TEAL_B  </p></div>
    <div class="colors TEAL_A"><p class="color-text">  TEAL_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>GREEN</h3>
    <div class="colors GREEN_E"><p class="color-text">  GREEN_E  </p></div>
    <div class="colors GREEN_D"><p class="color-text">  GREEN_D  </p></div>
    <div class="colors GREEN_C"><p class="color-text">  GREEN_C  </p></div>
    <div class="colors GREEN_B"><p class="color-text">  GREEN_B  </p></div>
    <div class="colors GREEN_A"><p class="color-text">  GREEN_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>YELLOW</h3>
    <div class="colors YELLOW_E"><p class="color-text">  YELLOW_E  </p></div>
    <div class="colors YELLOW_D"><p class="color-text">  YELLOW_D  </p></div>
    <div class="colors YELLOW_C"><p class="color-text">  YELLOW_C  </p></div>
    <div class="colors YELLOW_B"><p class="color-text">  YELLOW_B  </p></div>
    <div class="colors YELLOW_A"><p class="color-text">  YELLOW_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>GOLD</h3>
    <div class="colors GOLD_E"><p class="color-text">  GOLD_E  </p></div>
    <div class="colors GOLD_D"><p class="color-text">  GOLD_D  </p></div>
    <div class="colors GOLD_C"><p class="color-text">  GOLD_C  </p></div>
    <div class="colors GOLD_B"><p class="color-text">  GOLD_B  </p></div>
    <div class="colors GOLD_A"><p class="color-text">  GOLD_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>RED</h3>
    <div class="colors RED_E"><p class="color-text">  RED_E  </p></div>
    <div class="colors RED_D"><p class="color-text">  RED_D  </p></div>
    <div class="colors RED_C"><p class="color-text">  RED_C  </p></div>
    <div class="colors RED_B"><p class="color-text">  RED_B  </p></div>
    <div class="colors RED_A"><p class="color-text">  RED_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>MAROON</h3>
    <div class="colors MAROON_E"><p class="color-text">  MAROON_E  </p></div>
    <div class="colors MAROON_D"><p class="color-text">  MAROON_D  </p></div>
    <div class="colors MAROON_C"><p class="color-text">  MAROON_C  </p></div>
    <div class="colors MAROON_B"><p class="color-text">  MAROON_B  </p></div>
    <div class="colors MAROON_A"><p class="color-text">  MAROON_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>PURPLE</h3>
    <div class="colors PURPLE_E"><p class="color-text">  PURPLE_E  </p></div>
    <div class="colors PURPLE_D"><p class="color-text">  PURPLE_D  </p></div>
    <div class="colors PURPLE_C"><p class="color-text">  PURPLE_C  </p></div>
    <div class="colors PURPLE_B"><p class="color-text">  PURPLE_B  </p></div>
    <div class="colors PURPLE_A"><p class="color-text">  PURPLE_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>GREY</h3>
    <div class="colors GREY_E"><p class="color-text">  GREY_E  </p></div>
    <div class="colors GREY_D"><p class="color-text">  GREY_D  </p></div>
    <div class="colors GREY_C"><p class="color-text">  GREY_C  </p></div>
    <div class="colors GREY_B"><p class="color-text">  GREY_B  </p></div>
    <div class="colors GREY_A"><p class="color-text">  GREY_A  </p></div>
    </div>
    <div style="float: left;">
    <h3>Others</h3>
    <div class="colors WHITE"><p class="color-text" style="color: BLACK">  WHITE  </p></div>
    <div class="colors BLACK"><p class="color-text">  BLACK  </p></div>
    <div class="colors GREY_BROWN"><p class="color-text-small">   GREY_BROWN  </p></div>
    <div class="colors DARK_BROWN"><p class="color-text-small">   DARK_BROWN  </p></div>
    <div class="colors LIGHT_BROWN"><p class="color-text-small">  LIGHT_BROWN </p></div>
    <div class="colors PINK"><p class="color-text">  PINK  </p></div>
    <div class="colors LIGHT_PINK"><p class="color-text-small">   LIGHT_PINK   </p></div>
    <div class="colors GREEN_SCREEN"><p class="color-text-small"> GREEN_SCREEN </p></div>
    <div class="colors ORANGE"><p class="color-text">  ORANGE  </p></div>
    </div>


===================================================
/. 🚀 docs/source/documentation/custom_config.rst
===================================================

custom_config
==============

``directories``
---------------

- ``mirror_module_path``
    (``True`` or ``False``) Whether to create a folder named the name of the 
    running file under the ``output`` path, and save the output (``images/`` 
    or ``videos/``) in it.

- ``output``
    Output file path, the videos will be saved in the ``videos/`` folder under it, 
    and the pictures will be saved in the ``images/`` folder under it.

    For example, if you set ``output`` to ``"/.../manim/output"`` and 
    ``mirror_module_path`` to ``False``, then you exported ``Scene1`` in the code 
    file and saved the last frame, then the final directory structure will be like:

    .. code-block:: text
        :emphasize-lines: 9, 11

            manim/
            ├── manimlib/
            │   ├── animation/
            │   ├── ...
            │   ├── default_config.yml
            │   └── window.py
            ├── output/
            │   ├── images
            │   │   └── Scene1.png
            │   └── videos
            │       └── Scene1.mp4
            ├── code.py
            └── custom_config.yml

    But if you set ``mirror_module_path`` to ``True``, the directory structure will be:

    .. code-block:: text
        :emphasize-lines: 8

            manim/
            ├── manimlib/
            │   ├── animation/
            │   ├── ...
            │   ├── default_config.yml
            │   └── window.py
            ├── output/
            │   └── code/
            │       ├── images
            │       │   └── Scene1.png
            │       └── videos
            │           └── Scene1.mp4
            ├── code.py
            └── custom_config.yml

- ``raster_images`` 
    The directory for storing raster images to be used in the code (including 
    ``.jpg``, ``.jpeg``, ``.png`` and ``.gif``), which will be read by ``ImageMobject``.

- ``vector_images``
    The directory for storing vector images to be used in the code (including 
    ``.svg`` and ``.xdv``), which will be read by ``SVGMobject``.

- ``sounds``
    The directory for storing sound files to be used in ``Scene.add_sound()`` (
    including ``.wav`` and ``.mp3``).

- ``temporary_storage``
    The directory for storing temporarily generated cache files, including 
    ``Tex`` cache, ``Text`` cache and storage of object points.

``tex``
-------

- ``executable``
    The executable program used to compile LaTeX (``latex`` or ``xelatex -no-pdf``
    is recommended)

- ``template_file``
    LaTeX template used, in ``manimlib/tex_templates``

- ``intermediate_filetype``
    The type of intermediate vector file generated after compilation (``dvi`` if 
    ``latex`` is used, ``xdv`` if ``xelatex`` is used)
    
- ``text_to_replace``
    The text to be replaced in the template (needn't to change)

``universal_import_line``
-------------------------

Import line that need to execute when entering interactive mode directly.

``style``
---------

- ``font`` 
    Default font of Text

- ``text_alignment``
    Default text alignment for LaTeX

- ``background_color``
    Default background color

``window_position``
-------------------

The relative position of the playback window on the display (two characters, 
the first character means upper(U) / middle(O) / lower(D), the second character 
means left(L) / middle(O) / right(R)).

``window_monitor``
------------------

The number of the monitor you want the preview window to pop up on. (default is 0)

``full_screen``
---------------

Whether open the window in full screen. (default is false)

``break_into_partial_movies``
-----------------------------

If this is set to ``True``, then many small files will be written corresponding 
to each ``Scene.play`` and ``Scene.wait`` call, and these files will then be combined
to form the full scene.  

Sometimes video-editing is made easier when working with the broken up scene, which
effectively has cuts at all the places you might want.

``camera_resolutions``
----------------------

Export resolutions

- ``low``
    Low resolutions (default is 480p)

- ``medium``
    Medium resolutions (default is 720p)

- ``high``
    High resolutions (default is 1080p)

- ``ultra_high``
    Ultra high resolutions (default is 4K)

- ``default_resolutions``
    Default resolutions (one of the above four, default is high)

``fps``
-------

Export frame rate. (default is 30)

===================================================
/. 🚀 docs/source/development/changelog.rst
===================================================

Changelog
=========

Unreleased
----------

Breaking Changes
^^^^^^^^^^^^^^^^
- Added ``InteractiveScene`` (`#1794 <https://github.com/3b1b/manim/pull/1794>`__)

Fixed bugs
^^^^^^^^^^
- Fixed ``ImageMobject`` by overriding ``set_color`` method 
  (`#1791 <https://github.com/3b1b/manim/pull/1791>`__)
- Fixed bug with trying to close window during embed 
  (`#1796 <https://github.com/3b1b/manim/commit/e0f5686d667152582f052021cd62bd2ef8c6b470>`__)
- Fixed animating ``Mobject.restore`` bug 
  (`#1796 <https://github.com/3b1b/manim/commit/62289045cc8e102121cfe4d7739f3c89102046fb>`__)
- Fixed ``InteractiveScene.refresh_selection_highlight`` 
  (`#1802 <https://github.com/3b1b/manim/commit/205116b8cec964b5619416f6e8acf0d8ac7df828>`__)
- Fixed ``VMobject.match_style`` 
  (`#1821 <https://github.com/3b1b/manim/commit/0060a4860c9d6b073a60cd839269c213446bba7b>`__)

New Features
^^^^^^^^^^^^
- Added specific euler angle getters 
  (`#1794 <https://github.com/3b1b/manim/commit/df2d465140e25fee265f602608aebbbaa2898c7e>`__)
- Added start angle option to ``Circle`` 
  (`#1794 <https://github.com/3b1b/manim/commit/217c1d7bb02f23a61722bf7275c40802be808563>`__)
- Added ``Mobject.is_touching`` 
  (`#1794 <https://github.com/3b1b/manim/commit/c1716895c0d9f36e23487322a18963991100bb95>`__)
- Added ``Mobject.get_highlight`` 
  (`#1794 <https://github.com/3b1b/manim/commit/29816fa74c7aa6ca060b63ab4165c89987e58d8b>`__)
- Allowed for saving and loading mobjects from file 
  (`#1794 <https://github.com/3b1b/manim/commit/50f5d20cc379947d7253d841c060dd7c55fa7787>`__)
- Added ``Mobject.get_all_corners`` 
  (`#1794 <https://github.com/3b1b/manim/commit/f636199d9a5d1e87ab861bcb6aebae6c9d96a133>`__)
- Added ``Scene.id_to_mobject`` and ``Scene.ids_to_group`` 
  (`#1794 <https://github.com/3b1b/manim/commit/cb768c26a0bc63e02c3035b4af31ba5cbc2e9dda>`__)
- Added ``Scene.save_mobject`` and ``Scene.load_mobject`` to allow for saving and loading mobjects from file at the Scene level 
  (`#1794 <https://github.com/3b1b/manim/commit/777b6d37783f8592df8a8abc3d62af972bc5a0c6>`__)
- Added ``InteractiveScene`` 
  (`#1794 <https://github.com/3b1b/manim/commit/c3afc84bfeb3a76ea8ede4ec4d9f36df0d4d9a28>`__)
- Added ``VHighlight`` 
  (`#1794 <https://github.com/3b1b/manim/commit/9d5e2b32fa9215219d11a601829126cea40410d1>`__)
- Allowed for sweeping selection 
  (`#1796 <https://github.com/3b1b/manim/commit/4caa03332367631d2fff15afd7e56b15fe8701ee>`__)
- Allowed stretched-resizing 
  (`#1796 <https://github.com/3b1b/manim/commit/b4b72d1b68d0993b96a6af76c4bb6816f77f0f12>`__)
- Added cursor location label 
  (`#1796 <https://github.com/3b1b/manim/commit/b9751e9d06068f27a327b419c52fd3c9d68db2e6>`__)
- Added ``Mobject.deserialize`` 
  (`#1796 <https://github.com/3b1b/manim/commit/4d8698a0e88333f6481c08d1b84b6e44f9dc4543>`__)
- Added undo and redo stacks for scene 
  (`#1796 <https://github.com/3b1b/manim/commit/cf466006faa00fc12dc22f5732dc21ccedaa5a63>`__)
- Added ``Mobject.looks_identical`` 
  (`#1802 <https://github.com/3b1b/manim/commit/c3c5717dde543b172b928b516d80a29bbd12651f>`__)
- Added equality for ``ShaderWrapper`` 
  (`#1802 <https://github.com/3b1b/manim/commit/3ae0a4e81b7790194bcf27142a1deb29fa548b9d>`__)
- Added ``Mobject.get_ancestors`` 
  (`#1802 <https://github.com/3b1b/manim/commit/db884b0a67fcee1ad7009f1869c475015fa886c7>`__)
- Added smarter default radius to ``Polygon.round_corners`` 
  (`#1802 <https://github.com/3b1b/manim/commit/4c1210b3ab1bf66b161f3d00cb859d36068c2fbb>`__)
- Added checkpoints to ``Scene`` 
  (`#1821 <https://github.com/3b1b/manim/commit/1b589e336f8151f2914ff00e8956baea8a95abc5>`__)
- Added ``crosshair`` to ``InteractiveScene`` 
  (`#1821 <https://github.com/3b1b/manim/commit/33ffd4863aaa7ecf950b7044181a8e8e3c643698>`__)
- Added ``SceneState`` 
  (`#1821 <https://github.com/3b1b/manim/commit/75e1cff5792065aa1c7fb3eb02e6ee0fa0e8e18d>`__)
- Added ``time_span`` option to ``Animation`` 
  (`#1821 <https://github.com/3b1b/manim/commit/a6fcfa3b4053b7f68f7b029eae87dbd207d97ad2>`__)
- Added ``Mobject.arrange_to_fit_dim`` 
  (`#1821 <https://github.com/3b1b/manim/commit/a87d3b5f59a64ce5a89ce6e17310bdbf62166157>`__)
- Added ``DecimalNumber.get_tex`` 
  (`#1821 <https://github.com/3b1b/manim/commit/48689c8c7bc0029bf5c1b540c11f647e857d419b>`__)

Refactor
^^^^^^^^
- Updated parent updater status when adding updaters 
  (`#1794 <https://github.com/3b1b/manim/commit/3b847da9eaad7391e779c5dbce63ad9257d8c773>`__)
- Added case for zero vectors on ``angle_between_vectors`` 
  (`#1794 <https://github.com/3b1b/manim/commit/e8ac25903e19cbb2b2c2037c988baafce4ddcbbc>`__)
- Refactored ``Mobject.clear_updaters`` 
  (`#1794 <https://github.com/3b1b/manim/commit/95f56f5e80106443d705c68fa220850ec38daee0>`__)
- Changed the way changing-vs-static mobjects are tracked 
  (more details see `#1794 <https://github.com/3b1b/manim/commit/50565fcd7a43ed13dc532f17515208edf97f64d0>`__)
- Refactored ``Mobject.is_point_touching`` 
  (`#1794 <https://github.com/3b1b/manim/commit/135f68de35712be266a1a85261d6d44234fc0056>`__)
- Refactored ``Mobject.make_movable`` and ``Mobject.set_animating_status`` to recurse over family 
  (`#1794 <https://github.com/3b1b/manim/commit/48390375037f745c9cb82b03d1cb3a1de6c530f3>`__)
- Refactored ``AnimationGroup`` 
  (`#1794 <https://github.com/3b1b/manim/commit/fdeab8ca953b46a902b531febcf132739ca194d4>`__)
- Refactored ``Scene.save_state`` and ``Scene.restore`` 
  (`#1794 <https://github.com/3b1b/manim/commit/97400a5cf26f33ed507ddeeb9b9a7f1a558d4f17>`__)
- Added ``MANIM_COLORS`` 
  (`#1794 <https://github.com/3b1b/manim/commit/5a34ca1fba8b4724eda0caa11b271d74e49f468c>`__)
- Changed default transparent background codec to be prores 
  (`#1794 <https://github.com/3b1b/manim/commit/eae7dbbe6eaf4344374713052aae694e69b62c28>`__)
- Simplified ``Mobject.copy`` 
  (`#1794 <https://github.com/3b1b/manim/commit/1b009a4b035244bd6a0b48bc4dc945fd3b4236ef>`__)
- Refactored ``StringMobject`` and relevant classes 
  (`#1795 <https://github.com/3b1b/manim/pull/1795>`__)
- Updates to copying based on pickle serializing 
  (`#1796 <https://github.com/3b1b/manim/commit/fe3e10acd29a3dd6f8b485c0e36ead819f2d937b>`)
- Removed ``refresh_shader_wrapper_id`` from ``Mobject.become`` 
  (`#1796 <https://github.com/3b1b/manim/commit/1b2460f02a694314897437b9b8755443ed290cc1>`__)
- Refactored ``Scene.embed`` to play nicely with gui interactions 
  (`#1796 <https://github.com/3b1b/manim/commit/c96bdc243e57c17bb75bf12d73ab5bf119cf1464>`__)
- Made ``BlankScene`` inherit from ``InteractiveScene`` 
  (`#1796 <https://github.com/3b1b/manim/commit/2737d9a736885a594dd101ffe07bb82e00069333>`__)
- Updated behavior of -e flag to take in 
  (optional) strings as inputs 
  (`#1796 <https://github.com/3b1b/manim/commit/bb7fa2c8aa68d7c7992517cfde3c7d0e804e13e8>`__)
- Refactor -e flag 
  (`#1796 <https://github.com/3b1b/manim/commit/71c14969dffc8762a43f9646a0c3dc024a51b8df>`__)
- Reverted to original copying scheme 
  (`#1796 <https://github.com/3b1b/manim/commit/59506b89cc73fff3b3736245dd72e61dcebf9a2c>`__)
- Renamed ``Mobject.is_movable`` to ``Mobject.interaction_allowed`` 
  (`#1796 <https://github.com/3b1b/manim/commit/3961005fd708333a3e77856d10e78451faa04075>`__)
- Refreshed static mobjects on undo's and redo's 
  (`#1796 <https://github.com/3b1b/manim/commit/04bca6cafbb1482b8f25cfb34ce83316d8a095c9>`__)
- Factored out event handling 
  (`#1796 <https://github.com/3b1b/manim/commit/754316bf586be5a59839f8bac6fb9fcc47da0efb>`__)
- Removed ``Mobject.interaction_allowed``, in favor of using ``_is_animating`` for multiple purposes 
  (`#1796 <https://github.com/3b1b/manim/commit/f70e91348c8241bcb96470e7881dd92d9d3386d3>`__)
- Moved Command + z and Command + shift + z behavior to Scene 
  (`#1797 <https://github.com/3b1b/manim/commit/0fd8491c515ad23ca308099abe0f39fc38e2dd0e>`__)
- Slight copy refactor 
  (`#1797 <https://github.com/3b1b/manim/commit/902c2c002d6ca03c8080b2bd02ca36f2b8a748b6>`__)
- When scene saves state, have it only copy mobjects which have changed 
  (`#1802 <https://github.com/3b1b/manim/commit/bd2dce08300e5b110c6668bd6763f3918fcdc65e>`__)
- Cleaned up ``Scene.remove`` function 
  (`#1802 <https://github.com/3b1b/manim/commit/6310e2fb6414b01b3fe4be1d4d98525e34356b5e>`__)
- Speed-ups to ``Mobject.copy`` 
  (`#1802 <https://github.com/3b1b/manim/commit/e49e4b8373c13c7a888193aaf61955470acbe5d6>`__)
- Slight speed-up to ``InteractiveScene.gather_selection`` 
  (`#1802 <https://github.com/3b1b/manim/commit/f2b4245c134da577a2854732ec0331768d93ffbe>`__)
- Only leave wait notes in presenter mode 
  (`#1802 <https://github.com/3b1b/manim/commit/42d1f48c60d11caa043d5458e64bfceb31ea203f>`__)
- Refactored ``remove_list_redundancies`` and ``list_update`` 
  (`#1821 <https://github.com/3b1b/manim/commit/b920e7be7b85bc0bb0577e2f71c4320bb97b42d4>`__)
- Match updaters in ``Mobject.become`` 
  (`#1821 <https://github.com/3b1b/manim/commit/0e45b41fea5f22d136f62f4af2e0d892e61a12ce>`__)
- Don't show animation progress bar by default 
  (`#1821 <https://github.com/3b1b/manim/commit/52259af5df619d3f44fbaff4c43402b93d01be2f>`__)
- Handle quitting during scene more gracefully 
  (`#1821 <https://github.com/3b1b/manim/commit/e83ad785caaa1a1456e07b23f207469d335bbc0d>`__)
- Made ``selection_highlight`` refresh with an updater 
  (`#1821 <https://github.com/3b1b/manim/commit/ac08963feff24a1dd2e57f604b44ea0a18ab01f3>`__)
- Refactored ``anims_from_play_args`` to ``prepare_animations`` which deprecating old style ``self.play
  (mob.method, ...)`` 
  (`#1821 <https://github.com/3b1b/manim/commit/feab79c260498fd7757a304e24c617a4e51ba1df>`__)
- Made presenter mode hold before first play call 
  (`#1821 <https://github.com/3b1b/manim/commit/a9a151d4eff80cc37b9db0fe7117727aac45ba09>`__)
- Update frame on all play calls when skipping animations, so as to provide a rapid preview during scene loading 
  (`#1821 <https://github.com/3b1b/manim/commit/41b811a5e7c03f528d41555217106e62b287ca3b>`__)
- Renamed frame_rate to fps 
  (`#1821 <https://github.com/3b1b/manim/commit/6decb0c32aec21c09007f9a2b91aaa8e642ca848>`__)
- Let default text alignment be decided in default_config 
  (`#1821 <https://github.com/3b1b/manim/commit/83b4aa6b88b6c3defb19f204189681f5afbb219e>`__)

Dependencies
^^^^^^^^^^^^
- Added dependency on ``pyperclip`` 
  (`#1794 <https://github.com/3b1b/manim/commit/e579f4c955844fba415b976c313f64d1bb0376d0>`__)


v1.6.1
------

Fixed bugs
^^^^^^^^^^
- Fixed the bug of ``MTex`` with multi-line tex string 
  (`#1785 <https://github.com/3b1b/manim/pull/1785>`__)
- Fixed ``interpolate`` 
  (`#1788 <https://github.com/3b1b/manim/pull/1788>`__)
- Fixed ``ImageMobject`` 
  (`#1791 <https://github.com/3b1b/manim/pull/1791>`__)

Refactor
^^^^^^^^
- Added ``\overset`` as a special string in ``Tex`` 
  (`#1783 <https://github.com/3b1b/manim/pull/1783>`__)
- Added ``outer_interpolate`` to perform interpolation using ``np.outer`` on arrays 
  (`#1788 <https://github.com/3b1b/manim/pull/1788>`__)

v1.6.0
------

Breaking changes
^^^^^^^^^^^^^^^^
- **Python 3.6 is no longer supported** 
  (`#1736 <https://github.com/3b1b/manim/pull/1736>`__)

Fixed bugs
^^^^^^^^^^
- Fixed the width of riemann rectangles 
  (`#1762 <https://github.com/3b1b/manim/pull/1762>`__)
- Bug fixed in cases where empty array is passed to shader 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/fa38b56fd87f713657c7f778f39dca7faf15baa8>`__)
- Fixed ``AddTextWordByWord`` 
  (`#1772 <https://github.com/3b1b/manim/pull/1772>`__)
- Fixed ``ControlsExample`` 
  (`#1781 <https://github.com/3b1b/manim/pull/1781>`__)


New features
^^^^^^^^^^^^
- Added more functions to ``Text`` 
  (details: `#1751 <https://github.com/3b1b/manim/pull/1751>`__)
- Allowed ``interpolate`` to work on an array of alpha values 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/bf2d9edfe67c7e63ac0107d1d713df7ae7c3fb8f>`__)
- Allowed ``Numberline.number_to_point`` and ``CoordinateSystem.coords_to_point`` to work on an array of inputs 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/c3e13fff0587d3bb007e71923af7eaf9e4926560>`__)
- Added a basic ``Prismify`` to turn a flat ``VMobject`` into something with depth 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/f249da95fb65ed5495cd1db1f12ece7e90061af6>`__)
- Added ``GlowDots``, analogous to ``GlowDot`` 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/e19f35585d817e74b40bc30b1ab7cee84b24da05>`__)
- Added ``TransformMatchingStrings`` which is compatible with ``Text`` and ``MTex`` 
  (`#1772 <https://github.com/3b1b/manim/pull/1772>`__)
- Added support for ``substring`` and ``case_sensitive`` parameters for ``LabelledString.get_parts_by_string`` 
  (`#1780 <https://github.com/3b1b/manim/pull/1780>`__) 


Refactor
^^^^^^^^
- Added type hints 
  (`#1736 <https://github.com/3b1b/manim/pull/1736>`__)
- Specifid UTF-8 encoding for tex files 
  (`#1748 <https://github.com/3b1b/manim/pull/1748>`__)
- Refactored ``Text`` with the latest manimpango 
  (`#1751 <https://github.com/3b1b/manim/pull/1751>`__)
- Reorganized getters for ``ParametricCurve`` 
  (`#1757 <https://github.com/3b1b/manim/pull/1757>`__)
- Refactored ``CameraFrame`` to use ``scipy.spatial.transform.Rotation`` 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/625460467fdc01fc1b6621cbb3d2612195daedb9>`__)
- Refactored rotation methods to use ``scipy.spatial.transform.Rotation`` 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/7bf3615bb15cc6d15506d48ac800a23313054c8e>`__)
- Used ``stroke_color`` to init ``Arrow`` 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/c0b7b55e49f06b75ae133b5a810bebc28c212cd6>`__)
- Refactored ``Mobject.set_rgba_array_by_color`` 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/8b1f0a8749d91eeda4b674ed156cbc7f8e1e48a8>`__)
- Made panning more sensitive to mouse movements 
  (`#1764 <https://github.com/3b1b/manim/pull/1764/commits/9d0cc810c5fcb4252990e706c6bf880d571cb1a2>`__)
- Added loading progress for large SVGs 
  (`#1766 <https://github.com/3b1b/manim/pull/1766>`__)
- Added getter/setter of ``field_of_view`` for ``CameraFrame`` 
  (`#1770 <https://github.com/3b1b/manim/pull/1770/commits/0610f331a4f7a126a3aae34f8a2a86eabcb692f4>`__)
- Renamed ``focal_distance`` to ``focal_dist_to_height`` and added getter/setter 
  (`#1770 <https://github.com/3b1b/manim/pull/1770/commits/0610f331a4f7a126a3aae34f8a2a86eabcb692f4>`__)
- Added getter and setter for ``VMobject.joint_type`` 
  (`#1770 <https://github.com/3b1b/manim/pull/1770/commits/2a7a7ac5189a14170f883533137e8a2ae09aac41>`__)
- Refactored ``VCube`` 
  (`#1770 <https://github.com/3b1b/manim/pull/1770/commits/0f8d7ed59751d42d5011813ba5694ecb506082f7>`__)
- Refactored ``Prism`` to receive ``width height depth`` instead of ``dimensions`` 
  (`#1770 <https://github.com/3b1b/manim/pull/1770/commits/0f8d7ed59751d42d5011813ba5694ecb506082f7>`__)
- Refactored ``Text``, ``MarkupText`` and ``MTex`` based on ``LabelledString`` 
  (`#1772 <https://github.com/3b1b/manim/pull/1772>`__)
- Refactored ``LabelledString`` and relevant classes 
  (`#1779 <https://github.com/3b1b/manim/pull/1779>`__)


v1.5.0
------

Fixed bugs
^^^^^^^^^^
- Bug fix for the case of calling ``Write`` on a null object 
  (`#1740 <https://github.com/3b1b/manim/pull/1740>`__)


New features
^^^^^^^^^^^^
- Added ``TransformMatchingMTex`` 
  (`#1725 <https://github.com/3b1b/manim/pull/1725>`__)
- Added ``ImplicitFunction`` 
  (`#1727 <https://github.com/3b1b/manim/pull/1727>`__)
- Added ``Polyline`` 
  (`#1731 <https://github.com/3b1b/manim/pull/1731>`__)
- Allowed ``Mobject.set_points`` to take in an empty list, and added ``Mobject.add_point`` 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/a64259158538eae6043566aaf3d3329ff4ac394b>`__)
- Added ``Scene.refresh_locked_data`` 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/33d2894c167c577a15fdadbaf26488ff1f5bff87>`__)
- Added presenter mode to scenes with ``-p`` option 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/9a9cc8bdacb7541b7cd4a52ad705abc21f3e27fe>`__ and `#1742 <https://github.com/3b1b/manim/pull/1742>`__)
- Allowed for an embed by hitting ``ctrl+shift+e`` during interaction 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/9df12fcb7d8360e51cd7021d6877ca1a5c31835e>`__ and `#1746 <https://github.com/3b1b/manim/pull/1746>`__)
- Added ``Mobject.set_min_width/height/depth`` 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/2798d15591a0375ae6bb9135473e6f5328267323>`__)
- Allowed ``Mobject.match_coord/x/y/z`` to take in a point 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/29a4d3e82ba94c007c996b2d1d0f923941452698>`__)
- Added ``text_config`` to ``DecimalNumber`` 
  (`#1744 <https://github.com/3b1b/manim/pull/1744>`__)


Refactor
^^^^^^^^
- Refactored ``MTex`` 
  (`#1725 <https://github.com/3b1b/manim/pull/1725>`__)
- Refactored ``SVGMobject`` with svgelements 
  (`#1731 <https://github.com/3b1b/manim/pull/1731>`__)
- Made sure ``ParametricCurve`` has at least one point 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/2488b9e866fb1ecb842a27dd9f4956ec167e3dee>`__)
- Set default to no tips on ``Axes`` 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/6c6d387a210756c38feca7d34838aa9ac99bb58a>`__)
- Stopped displaying when writing tex string is happening 
  (`#1739 <https://github.com/3b1b/manim/pull/1739/commits/58e06e8f6b7c5059ff315d51fd0018fec5cfbb05>`__)
- Reorganize inheriting order and refactor SVGMobject 
  (`#1745 <https://github.com/3b1b/manim/pull/1745>`__)


Dependencies
^^^^^^^^^^^^
- Added dependency on ``isosurfaces`` 
  (`#1727 <https://github.com/3b1b/manim/pull/1727>`__)
- Removed dependency on ``argparse`` since it's a built-in module 
  (`#1728 <https://github.com/3b1b/manim/pull/1728>`__)
- Removed dependency on ``pyreadline`` 
  (`#1728 <https://github.com/3b1b/manim/pull/1728>`__)
- Removed dependency on ``cssselect2`` 
  (`#1731 <https://github.com/3b1b/manim/pull/1731>`__)
- Added dependency on ``svgelements`` 
  (`#1731 <https://github.com/3b1b/manim/pull/1731>`__)


v1.4.1
------

Fixed bugs 
^^^^^^^^^^

- Temporarily fixed boolean operations' bug  
  (`#1724 <https://github.com/3b1b/manim/pull/1724>`__)
- Import ``Iterable`` from ``collections.abc`` instead of ``collections`` which is deprecated since python 3.9 
  (`d2e0811 <https://github.com/3b1b/manim/commit/d2e0811285f7908e71a65e664fec88b1af1c6144>`__)

v1.4.0
------

Fixed bugs
^^^^^^^^^^
- Temporarily fixed ``Lightbulb`` 
  (`f1996f8 <https://github.com/3b1b/manim/pull/1697/commits/f1996f8479f9e33d626b3b66e9eb6995ce231d86>`__)
- Fixed some bugs of ``SVGMobject`` 
  (`#1712 <https://github.com/3b1b/manim/pull/1712>`__)
- Fixed some bugs of SVG path string parser 
  (`#1717 <https://github.com/3b1b/manim/pull/1717>`__)
- Fixed some bugs of ``MTex`` 
  (`#1720 <https://github.com/3b1b/manim/pull/1720>`__)

New features
^^^^^^^^^^^^
- Added option to add ticks on x-axis in ``BarChart`` 
  (`#1694 <https://github.com/3b1b/manim/pull/1694>`__)
- Added ``lable_buff`` config parameter for ``Brace`` 
  (`#1704 <https://github.com/3b1b/manim/pull/1704>`__)
- Added support for ``rotate skewX skewY`` transform in SVG  
  (`#1712 <https://github.com/3b1b/manim/pull/1712>`__)
- Added style support to ``SVGMobject`` 
  (`#1717 <https://github.com/3b1b/manim/pull/1717>`__)
- Added parser to <style> element of SVG  
  (`#1719 <https://github.com/3b1b/manim/pull/1719>`__)
- Added support for <line> element in ``SVGMobject`` 
  (`#1719 <https://github.com/3b1b/manim/pull/1719>`__)

Refactor 
^^^^^^^^

- Used ``FFMPEG_BIN`` instead of ``"ffmpeg"`` for sound incorporation 
  (`5aa8d15 <https://github.com/3b1b/manim/pull/1697/commits/5aa8d15d85797f68a8f169ca69fd90d441a3abbe>`__)
- Decorated ``CoordinateSystem.get_axes`` and ``.get_all_ranges`` as abstract method  
  (`#1709 <https://github.com/3b1b/manim/pull/1709>`__)
- Refactored SVG path string parser 
  (`#1712 <https://github.com/3b1b/manim/pull/1712>`__)
- Allowed ``Mobject.scale`` to receive iterable ``scale_factor`` 
  (`#1712 <https://github.com/3b1b/manim/pull/1712>`__)
- Refactored ``MTex`` 
  (`#1716 <https://github.com/3b1b/manim/pull/1716>`__)
- Improved config helper 
  (``manimgl --config``) 
  (`#1721 <https://github.com/3b1b/manim/pull/1721>`__)
- Refactored ``MTex`` 
  (`#1723 <https://github.com/3b1b/manim/pull/1723>`__)

Dependencies
^^^^^^^^^^^^
- Added dependency on python package `cssselect2 <https://github.com/Kozea/cssselect2>`__ 
  (`#1719 <https://github.com/3b1b/manim/pull/1719>`__)


v1.3.0
------

Fixed bugs 
^^^^^^^^^^

- Fixed ``Mobject.stretch_to_fit_depth`` 
  (`#1653 <https://github.com/3b1b/manim/pull/1653>`__)
- Fixed the bug of rotating camera 
  (`#1655 <https://github.com/3b1b/manim/pull/1655>`__)
- Fixed ``SurfaceMesh`` to be evenly spaced 
  (`c73d507 <https://github.com/3b1b/manim/pull/1688/commits/c73d507c76af5c8602d4118bc7538ba04c03ebae>`__)
- Fixed ``angle_between_vectors`` add ``rotation_between_vectors`` 
  (`82bd02d <https://github.com/3b1b/manim/pull/1688/commits/82bd02d21fbd89b71baa21e077e143f440df9014>`__)
- Fixed ``VMobject.fade`` 
  (`a717314 <https://github.com/3b1b/manim/pull/1688/commits/a7173142bf93fd309def0cc10f3c56f5e6972332>`__)
- Fixed ``angle_between_vectors`` 
  (`fbc329d <https://github.com/3b1b/manim/pull/1688/commits/fbc329d7ce3b11821d47adf6052d932f7eff724a>`__)
- Fixed bug in ``ShowSubmobjectsOneByOne`` 
  (`bcd0990 <https://github.com/3b1b/manim/pull/1688/commits/bcd09906bea5eaaa5352e7bee8f3153f434cf606>`__)
- Fixed bug in ``TransformMatchingParts`` 
  (`7023548 <https://github.com/3b1b/manim/pull/1691/commits/7023548ec62c4adb2f371aab6a8c7f62deb7c33c>`__)

New features
^^^^^^^^^^^^

- Added CLI flag ``--log-level`` to specify log level 
  (`e10f850 <https://github.com/3b1b/manim/commit/e10f850d0d9f971931cc85d44befe67dc842af6d>`__)
- Added operations 
  (``+`` and ``*``) for ``Mobject`` 
  (`#1667 <https://github.com/3b1b/manim/pull/1667>`__)
- Added 4 boolean operations for ``VMobject`` in ``manimlib/mobject/boolean_ops.py`` 
  (`#1675 <https://github.com/3b1b/manim/pull/1675>`__)
  - ``Union (*vmobjects, **kwargs)``
  - ``Difference (subject, clip, **kwargs)``
  - ``Intersection (*vmobjects, **kwargs)``
  - ``Exclusion (*vmobjects, **kwargs)``
- Added reflectiveness 
  (`81c3ae3 <https://github.com/3b1b/manim/pull/1688/commits/81c3ae30372e288dc772633dbd17def6e603753e>`__)
- Enabled ``glow_factor`` on ``DotCloud`` 
  (`2c7689e <https://github.com/3b1b/manim/pull/1688/commits/2c7689ed9e81229ce87c648f97f26267956c0bc9>`__)
- Added option ``-e`` to insert embed line from the command line 
  (`d065e19 <https://github.com/3b1b/manim/pull/1688/commits/d065e1973d1d6ebd2bece81ce4bdf0c2fff7c772>`__)
- Improved ``point_from_proportion`` to account for arc length 
  (`0e78027 <https://github.com/3b1b/manim/pull/1688/commits/0e78027186a976f7e5fa8d586f586bf6e6baab8d>`__)
- Added shortcut ``set_backstroke`` for setting black background stroke 
  (`781a993 <https://github.com/3b1b/manim/pull/1688/commits/781a9934fda6ba11f22ba32e8ccddcb3ba78592e>`__)
- Added ``Suface.always_sort_to_camera`` 
  (`0b898a5 <https://github.com/3b1b/manim/pull/1688/commits/0b898a5594203668ed9cad38b490ab49ba233bd4>`__)
- Added getter methods for specific euler angles 
  (`e899604 <https://github.com/3b1b/manim/pull/1688/commits/e899604a2d05f78202fcb3b9824ec34647237eae>`__)
- Hade ``rotation_between_vectors`` handle identical/similar vectors 
  (`407c53f <https://github.com/3b1b/manim/pull/1688/commits/407c53f97c061bfd8a53beacd88af4c786f9e9ee>`__)
- Added ``Mobject.insert_submobject`` method 
  (`49743da <https://github.com/3b1b/manim/pull/1688/commits/49743daf3244bfa11a427040bdde8e2bb79589e8>`__)
- Created single progress display for full scene render 
  (`9dd1f47 <https://github.com/3b1b/manim/pull/1688/commits/9dd1f47dabca1580d6102e34e44574b0cba556e7>`__)
- Added ``Circle.get_radius`` 
  (`264f7b1 <https://github.com/3b1b/manim/pull/1691/commits/264f7b11726e9e736f0fe472f66e38539f74e848>`__)
- Added ``Dodecahedron`` 
  (`83841ae <https://github.com/3b1b/manim/pull/1691/commits/83841ae41568a9c9dff44cd163106c19a74ac281>`__)
- Added ``GlowDot`` 
  (`a1d5147 <https://github.com/3b1b/manim/pull/1691/commits/a1d51474ea1ce3b7aa3efbe4c5e221be70ee2f5b>`__)
- Added ``MTex`` , see `#1678 <https://github.com/3b1b/manim/pull/1678>`__ for details 
  (`#1678 <https://github.com/3b1b/manim/pull/1678>`__)

Refactor
^^^^^^^^

- Refactored support for command ``A`` in path of SVG  
  (`#1662 <https://github.com/3b1b/manim/pull/1662>`__)
- Refactored ``SingleStringTex.balance_braces`` 
  (`#1662 <https://github.com/3b1b/manim/pull/1662>`__)
- Slight tweaks to how saturation_factor works on newton-fractal 
  (`8b454fb <https://github.com/3b1b/manim/pull/1688/commits/8b454fbe9335a7011e947093230b07a74ba9c653>`__)
- Made it possible to set full screen preview as a default 
  (`317a5d6 <https://github.com/3b1b/manim/pull/1688/commits/317a5d6226475b6b54a78db7116c373ef84ea923>`__)
- Used ``quick_point_from_proportion`` for graph points 
  (`e764da3 <https://github.com/3b1b/manim/pull/1688/commits/e764da3c3adc5ae2a4ce877b340d2b6abcddc2fc>`__)
- Made sure ``Line.set_length`` returns self 
  (`d2182b9 <https://github.com/3b1b/manim/pull/1688/commits/d2182b9112300558b6c074cefd685f97c10b3898>`__)
- Better align ``SurfaceMesh`` to the corresponding surface polygons 
  (`eea3c6b <https://github.com/3b1b/manim/pull/1688/commits/eea3c6b29438f9e9325329c4355e76b9f635e97a>`__)
- Match ``fix_in_frame`` status for ``FlashAround`` mobject 
  (`ee1594a <https://github.com/3b1b/manim/pull/1688/commits/ee1594a3cb7a79b8fc361e4c4397a88c7d20c7e3>`__)
- Made sure ``Mobject.is_fixed_in_frame`` stays updated with uniforms 
  (`ba23fbe <https://github.com/3b1b/manim/pull/1688/commits/ba23fbe71e4a038201cd7df1d200514ed1c13bc2>`__)
- Made sure ``skip_animations`` and ``start_at_animation_number`` play well together 
  (`98b0d26 <https://github.com/3b1b/manim/pull/1691/commits/98b0d266d2475926a606331923cca3dc1dea97ad>`__)
- Updated progress display for full scene render 
  (`f8e6e7d <https://github.com/3b1b/manim/pull/1691/commits/f8e6e7df3ceb6f3d845ced4b690a85b35e0b8d00>`__)
- ``VectorizedPoint`` should call ``__init__`` for both super classes 
  (`8f1dfab <https://github.com/3b1b/manim/pull/1691/commits/8f1dfabff04a8456f5c4df75b0f97d50b2755003>`__)
- Used array copy when checking need for refreshing triangulation 
  (`758f329 <https://github.com/3b1b/manim/pull/1691/commits/758f329a06a0c198b27a48c577575d94554305bf>`__)


Dependencies
^^^^^^^^^^^^

- Added dependency on python package `skia-pathops <https://github.com/fonttools/skia-pathops>`__ 
  (`#1675 <https://github.com/3b1b/manim/pull/1675>`__)

v1.2.0
------

Fixed bugs
^^^^^^^^^^

- Fixed ``put_start_and_end_on`` in 3D 
  (`#1592 <https://github.com/3b1b/manim/pull/1592>`__)
- Fixed ``DecimalNumber``'s scaling issue 
  (`#1601 <https://github.com/3b1b/manim/pull/1601>`__)
- Fixed bug with common range array used for all coordinate systems 
  (`56df154 <https://github.com/3b1b/manim/commit/56df15453f3e3837ed731581e52a1d76d5692077>`__)
- Fixed ``CoordinateSystem`` init bug 
  (`8645894 <https://github.com/3b1b/manim/commit/86458942550c639a241267d04d57d0e909fcf252>`__)
- Fixed bug for single-valued ``ValueTracker`` 
  (`0dc096b <https://github.com/3b1b/manim/commit/0dc096bf576ea900b351e6f4a80c13a77676f89b>`__)
- Fixed bug with SVG rectangles 
  (`54ad355 <https://github.com/3b1b/manim/commit/54ad3550ef0c0e2fda46b26700a43fa8cde0973f>`__)
- Fixed ``DotCloud.set_radii`` 
  (`d45ea28 <https://github.com/3b1b/manim/commit/d45ea28dc1d92ab9c639a047c00c151382eb0131>`__)
- Temporarily fixed bug for ``PMobject`` array resizing 
  (`b543cc0 <https://github.com/3b1b/manim/commit/b543cc0e32d45399ee81638b6d4fb631437664cd>`__)
- Fixed ``match_style`` 
  (`5f878a2 <https://github.com/3b1b/manim/commit/5f878a2c1aa531b7682bd048468c72d2835c7fe5>`__)
- Fixed negative ``path_arc`` case 
  (`719c81d <https://github.com/3b1b/manim/commit/719c81d72b00dcf49f148d7c146774b22e0fe348>`__)
- Fixed bug with ``CoordinateSystem.get_lines_parallel_to_axis`` 
  (`c726eb7 <https://github.com/3b1b/manim/commit/c726eb7a180b669ee81a18555112de26a8aff6d6>`__)
- Fixed ``ComplexPlane`` -i display bug 
  (`7732d2f <https://github.com/3b1b/manim/commit/7732d2f0ee10449c5731499396d4911c03e89648>`__)

New features 
^^^^^^^^^^^^

- Supported the elliptical arc command ``A`` for ``SVGMobject`` 
  (`#1598 <https://github.com/3b1b/manim/pull/1598>`__)
- Added ``FlashyFadeIn`` 
  (`#1607 <https://github.com/3b1b/manim/pull/1607>`__)
- Save triangulation  
  (`#1607 <https://github.com/3b1b/manim/pull/1607>`__)
- Added new ``Code`` mobject 
  (`#1625 <https://github.com/3b1b/manim/pull/1625>`__)
- Add warnings and use rich to display log 
  (`#1637 <https://github.com/3b1b/manim/pull/1637>`__)
- Added ``VCube`` 
  (`bd356da <https://github.com/3b1b/manim/commit/bd356daa99bfe3134fcb192a5f72e0d76d853801>`__)
- Supported ``ValueTracker`` to track vectors 
  (`6d72893 <https://github.com/3b1b/manim/commit/6d7289338234acc6658b9377c0f0084aa1fa7119>`__)
- Added ``set_max_width``, ``set_max_height``, ``set_max_depth`` to ``Mobject`` 
  (`3bb8f3f <https://github.com/3b1b/manim/commit/3bb8f3f0422a5dfba0da6ef122dc0c01f31aff03>`__)
- Added ``TracgTail`` 
  (`a35dd5a <https://github.com/3b1b/manim/commit/a35dd5a3cbdeffa3891d5aa5f80287c18dba2f7f>`__)
- Added ``Scene.point_to_mobject`` 
  (`acba13f <https://github.com/3b1b/manim/commit/acba13f4991b78d54c0bf93cce7ca3b351c25476>`__)
- Added poly_fractal shader 
  (`f84b8a6 <https://github.com/3b1b/manim/commit/f84b8a66fe9e8b3872e5c716c5c240c14bb555ee>`__)
- Added kwargs to ``TipableVMobject.set_length`` 
  (`b24ba19 <https://github.com/3b1b/manim/commit/b24ba19dec48ba4e38acbde8eec6d3a308b6ab83>`__)
- Added ``Mobject.replicate`` 
  (`17c2772 <https://github.com/3b1b/manim/commit/17c2772b84abf6392a4170030e36e981de4737d0>`__)
- Added mandelbrot_fractal shader 
  (`33fa76d <https://github.com/3b1b/manim/commit/33fa76dfac36e70bb5fad69dc6a336800c6dacce>`__)
- Saved state before each embed 
  (`f22a341 <https://github.com/3b1b/manim/commit/f22a341e8411eae9331d4dd976b5e15bc6db08d9>`__)
- Allowed releasing of Textures 
  (`e10a752 <https://github.com/3b1b/manim/commit/e10a752c0001e8981038faa03be4de2603d3565f>`__)
- Consolidated and renamed newton_fractal shader 
  (`14fbed7 <https://github.com/3b1b/manim/commit/14fbed76da4b493191136caebb8a955e2d41265b>`__)
- Hade ``ImageMoject`` remember the filepath to the Image 
  (`6cdbe0d <https://github.com/3b1b/manim/commit/6cdbe0d67a11ab14a6d84840a114ae6d3af10168>`__)

Refactor
^^^^^^^^

- Changed back to simpler ``Mobject.scale`` implementation 
  (`#1601 <https://github.com/3b1b/manim/pull/1601>`__)
- Simplified ``Square`` 
  (`b667db2 <https://github.com/3b1b/manim/commit/b667db2d311a11cbbca2a6ff511d2c3cf1675486>`__)
- Removed unused parameter ``triangulation_locked`` 
  (`40290ad <https://github.com/3b1b/manim/commit/40290ada8343f10901fa9151cbdf84689667786d>`__)
- Reimplemented ``Arrow`` 
  (`8647a64 <https://github.com/3b1b/manim/commit/8647a6429dd0c52cba14e971b8c09194a93cfd87>`__)
- Used ``make_approximately_smooth`` for ``set_points_smoothly`` by default 
  (`d8378d8 <https://github.com/3b1b/manim/commit/d8378d8157040cd797cc47ef9576beffd8607863>`__)
- Refactored to call ``_handle_scale_side_effects`` after scaling takes place 
  (`7b4199c <https://github.com/3b1b/manim/commit/7b4199c674e291f1b84678828b63b6bd4fcc6b17>`__)
- Refactored to only call ``throw_error_if_no_points`` once for ``get_start_and_end`` 
  (`7356a36 <https://github.com/3b1b/manim/commit/7356a36fa70a8279b43ae74e247cbd43b2bfd411>`__)
- Made sure framerate is 30 for previewed scenes 
  (`0787c4f <https://github.com/3b1b/manim/commit/0787c4f36270a6560b50ce3e07b30b0ec5f2ba3e>`__)
- Pushed ``pixel_coords_to_space_coords`` to ``Window`` 
  (`c635f19 <https://github.com/3b1b/manim/commit/c635f19f2a33e916509e53ded46f55e2afa8f5f2>`__)
- Refactored to pass tuples and not arrays to uniforms 
  (`d5a88d0 <https://github.com/3b1b/manim/commit/d5a88d0fa457cfcf4cb9db417a098c37c95c7051>`__)
- Refactored to copy uniform arrays in ``Mobject.copy`` 
  (`9483f26 <https://github.com/3b1b/manim/commit/9483f26a3b056de0e34f27acabd1a946f1adbdf9>`__)
- Added ``bounding_box`` as exceptional key to point_cloud mobject 
  (`ed1fc4d <https://github.com/3b1b/manim/commit/ed1fc4d5f94467d602a568466281ca2d0368b506>`__)
- Made sure stroke width is always a float 
  (`329d2c6 <https://github.com/3b1b/manim/commit/329d2c6eaec3d88bfb754b555575a3ea7c97a7e0>`__)


v1.1.0
-------

Fixed bugs
^^^^^^^^^^

- Fixed the bug of :func:`~manimlib.utils.iterables.resize_with_interpolation` in the case of ``length=0``
- Fixed the bug of ``__init__`` in :class:`~manimlib.mobject.geometry.Elbow`
- If chosen monitor is not available, choose one that does exist
- Make sure mobject data gets unlocked after animations
- Fixed a bug for off-center vector fields
- Had ``Mobject.match_points`` return self
- Fixed chaining animation in example scenes
- Fixed the default color of tip
- Fixed a typo in ``ShowPassingFlashWithThinningStrokeWidth``
- Fixed the default size of ``Text``
- Fixed a missing import line in ``mobject.py``
- Fixed the bug in ControlsExample
- Make sure frame is added to the scene when initialization
- Fixed zooming directions
- Rewrote ``earclip_triangulation`` to fix triangulation
- Allowed sound_file_name to be taken in without extensions

New features
^^^^^^^^^^^^

- Added :class:`~manimlib.animation.indication.VShowPassingFlash`
- Added ``COLORMAP_3B1B``
- Added some methods to coordinate system to access all axes ranges
  
  - :meth:`~manimlib.mobject.coordinate_systems.CoordinateSystem.get_origin`
  - :meth:`~manimlib.mobject.coordinate_systems.CoordinateSystem.get_all_ranges`
- Added :meth:`~manimlib.mobject.mobject.Mobject.set_color_by_rgba_func`
- Updated :class:`~manimlib.mobject.vector_field.VectorField` and :class:`~manimlib.mobject.vector_field.StreamLines`
- Allow ``3b1b_colormap`` as an option for :func:`~manimlib.utils.color.get_colormap_list`
- Return ``stroke_width`` as 1d array
- Added :meth:`~manimlib.mobject.svg.text_mobject.Text.get_parts_by_text`
- Use Text not TexText for Brace
- Update to Cross to make it default to variable stroke width
- Added :class:`~manimlib.animation.indication.FlashAround` and :class:`~manimlib.animation.indication.FlashUnder`
- Allowed configuration in ``Brace.get_text``
- Added :meth:`~manimlib.camera.camera.CameraFrame.reorient` for quicker changes to frame angle
- Added ``units`` to :meth:`~manimlib.camera.camera.CameraFrame.set_euler_angles`
- Allowed any ``VMobject`` to be passed into ``TransformMatchingTex``
- Removed double brace convention in ``Tex`` and ``TexText``
- Added support for debugger launch
- Added CLI flag ``--config_file`` to load configuration file manually
- Added ``tip_style`` to ``tip_config``
- Added ``MarkupText``
- Take in ``u_range`` and ``v_range`` as arguments to ``ParametricSurface``
- Added ``TrueDot``

===================================================
/. 🚀 docs/source/development/contributing.rst
===================================================

Contributing
============

Accept any contribution you make :)

- **Contribute to the manim source code**: 

Please fork to your own repository and make changes, submit a pull request, and fill in 
the motivation for the change following the instructions in the template. We will check 
your pull request in detail (this usually takes a while, please be patient)

- **Contribute to the documentation**: 

Also submit a pull request and write down the main changes.

- **If you find a bug in the code**: 

Please open an issue and fill in the found problem and your environment according 
to the template. (But please note that if you think this problem is just a problem 
of yourself, rather than a problem of source code, it is recommended that you ask a 
question in the `Q&A category <https://github.com/3b1b/manim/discussions/categories/q-a>`_ 
of the discussion page)

- **You are welcome to share the content you made with manim**: 

Post it in the `show and tell category <https://github.com/3b1b/manim/discussions/categories/show-and-tell>`_
of the discussion page.

- **You are also welcome to share some of your suggestions and ideas**: 

Post them in the `ideas category <https://github.com/3b1b/manim/discussions/categories/ideas>`_ 
of the discussion page.

How to build this documentation
-------------------------------

- Clone the 3b1b/manim repository

.. code-block:: sh

    git clone https://github.com/3b1b/manim.git
    # or your own repo
    # git clone https://github.com/<your user name>/manim.git
    cd manim

- Install python package dependencies

.. code-block:: sh

    pip install -r docs/requirements.txt

- Go to the ``docs/`` folder and build

.. code-block:: sh

    cd docs/
    make html

- The output document is located in ``docs/build/html/``

===================================================
/. 🚀 docs/source/development/about.rst
===================================================

About
=====

About Manim
-----------

Manim is an animation engine for explanatory math videos. 
You can use it to make math videos (or other fields) like 3Blue1Brown.

There are mainly two versions here:

- `3b1b/manim <https://github.com/3b1b/manim>`_ : Maintained by Grant Sanderson of 3Blue1Brown.

Using OpenGL and its GLSL language to use GPU for rendering. It has higher efficiency, 
faster rendering speed, and supports real-time rendering and interaction.

- `ManimCommunity/manim <https://github.com/ManimCommunity/manim>`_ : Maintained by Manim Community Dev Team.

Using multiple backend rendering. There is better documentation and 
a more open contribution community.

About this documentation
------------------------

This documentation is based on the version in `3b1b/manim <https://github.com/3b1b/manim>`_. 
Created by `TonyCrane <https://github.com/TonyCrane>`_ ("鹤翔万里" in Chinese) and in production.

Among them, the ``manim_example_ext`` extension for Sphinx refers to 
`the documentation of ManimCommunity <https://docs.manim.community/>`_.

If you want to contribute to manim or this document, please see: :doc:`contributing`