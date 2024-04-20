/DrawSVG
========
1. draw2Svg Manual https://draw2svg.netlify.app
2. drawSVG https://pypi.org/project/drawsvg/

A Python 3 library for programmatically generating SVG images and animations that can render and display your drawings in a Jupyter notebook or Jupyter lab.

Most common SVG tags are supported and others can easily be added by writing a small subclass of `DrawableBasicElement` or `DrawableParentElement`.  [Nearly all SVG attributes](https://developer.mozilla.org/en-US/docs/Web/SVG) are supported via keyword args (e.g. Python keyword argument `fill_opacity=0.5` becomes SVG attribute `fill-opacity="0.5"`).

An interactive [Jupyter notebook](https://jupyter.org) widget, `drawsvg.widgets.DrawingWidget`, [is included](#interactive-widget) that can update drawings based on mouse events.  The widget does not yet work in Jupyter lab.

[SVG quick reference docs](https://cduck.github.io/drawsvg/)


# Install

Drawsvg is available on PyPI:

```bash
$ python3 -m pip install "drawsvg~=2.0"
```

To enable raster image support (PNG, MP4, and GIF), follow the [full-feature install instructions](#full-feature-install).


## Upgrading from version 1.x

Major breaking changes:

- camelCase method and argument names are now snake\_case and the package name is lowercase (except for arguments that correspond to camelCase SVG attributes).

- The default coordinate system y-axis now matches the SVG coordinate system (y increases down the screen, x increases right)

- How to fix `ModuleNotFoundError: No module named 'drawSvg'` (with a capital S)?  Either pip install `"drawSvg~=1.9"` or update your code for drawsvg 2.x (for example, change `drawSvg` to `drawsvg` and `d.saveSvg` to `d.save_svg`).


# /Examples


## .Basic drawing elements

```sh
#!/usr/bin/env python
import drawsvg as draw
import os

os.chdir("/opendocs/pictures/drawsvg")

d = draw.Drawing(200, 100, origin='center')

# Draw an irregular polygon
d.append(draw.Lines(-80, 45,
                     70, 49,
                     95, -49,
                    -90, -40,
                    close=False,
            fill='#eeee00',
            stroke='black'))

# Draw a rectangle
r = draw.Rectangle(-80, -50, 40, 50, fill='#1248ff')
r.append_title("Our first rectangle")  # Add a tooltip
d.append(r)

# Draw a circle
d.append(draw.Circle(-40, 10, 30,
        fill='red', stroke_width=2, stroke='black'))

# Draw an arbitrary path (a triangle in this case)
p = draw.Path(stroke_width=2, stroke='lime', fill='black', fill_opacity=0.2)
p.M(-10, -20)  # Start path at point (-10, -20)
p.C(30, 10, 30, -50, 70, -20)  # Draw a curve to (70, -20)
d.append(p)

# Draw text
d.append(draw.Text('Basic text', 8, -10, -35, fill='blue'))  # 8pt text at (-10, -35)
d.append(draw.Text('Path text', 8, path=p, text_anchor='start', line_height=1))
d.append(draw.Text(['Multi-line', 'text'], 8, path=p, text_anchor='end', center=True))

# Draw multiple circular arcs
d.append(draw.ArcLine(60, 20, 20, 60, 270,
        stroke='red', stroke_width=5, fill='red', fill_opacity=0.2))
d.append(draw.Arc(60, 20, 20, 90, -60, cw=True,
        stroke='green', stroke_width=3, fill='none'))
d.append(draw.Arc(60, 20, 20, -60, 90, cw=False,
        stroke='blue', stroke_width=1, fill='black', fill_opacity=0.3))

# Draw arrows
arrow = draw.Marker(-0.1, -0.51, 0.9, 0.5, scale=4, orient='auto')
arrow.append(draw.Lines(-0.1, 0.5, -0.1, -0.5, 0.9, 0, fill='red', close=True))
p = draw.Path(stroke='red', stroke_width=2, fill='none',
        marker_end=arrow)  # Add an arrow to the end of a path
p.M(20, 40).L(20, 27).L(0, 20)  # Chain multiple path commands
d.append(p)
d.append(draw.Line(30, 20, 0, 10,
        stroke='red', stroke_width=2, fill='none',
        marker_end=arrow))  # Add an arrow to the end of a line

d.set_pixel_scale(2)  # Set number of pixels per geometry unit
#d.set_render_size(400, 200)  # Alternative to set_pixel_scale
d.save_svg('example.svg')
d.save_png('example.png')

# Display in Jupyter notebook
#d.rasterize()  # Display as PNG
d  # Display as SVG
```

![Example output image](../pictures/drawsvg/example.svg)

## .SVG-native animation with playback controls

```sh
#!/usr/bin/env python
# pip install imageio 
# pip install imageio[pyav]
# pip install ipywidgets
import drawsvg as draw
import imageio
import os

os.chdir("/opendocs/pictures/drawsvg")
# DEBUG = True

d = draw.Drawing(400, 200, origin='center',
        animation_config=draw.types.SyncedAnimationConfig(
            # Animation configuration
            duration=8,  # Seconds
            show_playback_progress=True,
            show_playback_controls=True))
d.append(draw.Rectangle(-200, -100, 400, 200, fill='#eee'))  # Background
d.append(draw.Circle(0, 0, 40, fill='green'))  # Center circle

# Animation
circle = draw.Circle(0, 0, 0, fill='gray')  # Moving circle
circle.add_key_frame(0, cx=-100, cy=0,    r=0)
circle.add_key_frame(2, cx=0,    cy=-100, r=40)
circle.add_key_frame(4, cx=100,  cy=0,    r=0)
circle.add_key_frame(6, cx=0,    cy=100,  r=40)
circle.add_key_frame(8, cx=-100, cy=0,    r=0)
d.append(circle)
r = draw.Rectangle(0, 0, 0, 0, fill='silver')  # Moving square
r.add_key_frame(0, x=-100, y=0,       width=0,  height=0)
r.add_key_frame(2, x=0-20, y=-100-20, width=40, height=40)
r.add_key_frame(4, x=100,  y=0,       width=0,  height=0)
r.add_key_frame(6, x=0-20, y=100-20,  width=40, height=40)
r.add_key_frame(8, x=-100, y=0,       width=0,  height=0)
d.append(r)

# Changing text
draw.native_animation.animate_text_sequence(
        d,
        [0, 2, 4, 6],
        ['0', '1', '2', '3'],
        30, 0, 1, fill='yellow', center=True)

# Save as a standalone animated SVG or HTML
d.save_svg('playback-controls.svg')
d.save_html('playback-controls.html')

# Display in Jupyter notebook
d.display_image()  # Display SVG as an image (will not be interactive)
d.display_iframe()  # Display as interactive SVG (alternative)
d.as_gif('orbit.gif', fps=10)  # Render as a GIF image, optionally save to file
d.as_mp4('orbig.mp4', fps=60, verbose=True)  # Render as an MP4 video, optionally save to file
# [Animation is displayed here (click to pause)]

# Jupyter cell 2:
global_variable = 'a'
@widget.set_draw_frame  # Animation above is automatically updated
def draw_frame(secs=0):
    # Draw something...
    d = draw.Drawing(100, 40)
    d.append(draw.Text(global_variable, 20, 0, 30))
    d.append(draw.Text('{:0.1f}'.format(secs), 20, 30, 30))
    return d

# Jupyter cell 3:
global_variable = 'b'  # Animation above now displays 'b'
```

![Example output image](../pictures/drawsvg/playback-controls.svg)

Note: The above example currently only works in `jupyter notebook`, not `jupyter lab`.


## .Embed custom fonts

```sh
#!/usr/bin/env python
import drawsvg as draw
import os

os.chdir("/opendocs/pictures/drawsvg")


d = draw.Drawing(400, 100, origin='center')
d.embed_google_font('Permanent Marker', text=set('Text with custom font'))

d.append(draw.Text('Text with custom font', 35, 0, 0, center=True,
                   font_family='Permanent Marker', font_style='italic'))

d.save_svg('font.svg')
d  # Custom fonts work in most browsers but not in rasterize(), save_png(), or save_video()
```

![Example output image](../pictures/drawsvg/font.svg)


---

# Full-feature install

Drawsvg may be either be installed with no dependencies (only SVG and SVG-native animation will work):

```bash
$ python3 -m pip install "drawsvg~=2.0"
```

Or drawsvg may be installed with extra dependencies to support PNG, MP4, and GIF output:
```bash
$ python3 -m pip install "drawsvg[all]~=2.0"
```

An additional required package, [Cairo](https://www.cairographics.org/download/), cannot be installed with pip and must be installed separately.  When Cairo is installed, drawsvg can output PNG and other image formats in addition to SVG.  Install it with your preferred package manager.  Examples:

**Ubuntu**

```bash
$ sudo apt install libcairo2
```

**macOS**

Using [homebrew](https://brew.sh/) (may require a Python version installed with `brew install python`):

```bash
$ brew install cairo
```

**Any platform**

Using [Anaconda](https://docs.conda.io/en/latest/miniconda.html) (may require Python and cairo installed in the same conda environment):

```bash
$ conda install -c anaconda cairo
```


# /Drawsvg Quick Reference

Repository: [https://github.com/cduck/drawsvg](https://github.com/cduck/drawsvg)

```python
import drawsvg as dw
```

Those code snippets can run in-place by Sublime Text with [run-snippet](),
and those svg picture file can render directly when this markdown editing.

```sh
#!/usr/bin/env python
# -*- coding: cp1252 -*-
# Ref. Using the Python Interpreter - Source Code Encoding

import drawsvg as dw
import os
import sys
import time

# os.system("subl \"%s\"" % sys.argv[0].replace("\\", "/"))
# DEBUG = True this line to enabled debug of runsnippet

os.chdir("/opendocs/pictures/drawsvg")
```


## /1. Canvas and Document Structure

```python
d = dw.Drawing(width, height, origin=(0, 0),
               context: drawsvg.types.Context = None, animation_config=None,
               id_prefix='d', **svg_args)
```

It is recommended to use a unique `id_prefix` for each svg if you embed multiple on a web page.

```python
d = dw.Drawing(400, 300, id_prefix='pic')
```


## /2. Basic Shapes

## ///2.1. One Line

```python
dw.Line(sx, sy, ex, ey, **kwargs)
```

```sh
d = dw.Drawing(600, 320, origin='center')
line = dw.Line(30, 30, 90, 90, stroke='black')
d.append(line)
d.save_svg('01_line.svg')
```

![svg](../pictures/drawsvg/01_line.svg)


## ///2.2. Multiple Lines

This is SVG's `polyline` (but drawsvg renders as path with multiple L).

```python
dw.Lines(sx, sy, *points, close=False, **kwargs)
```

```sh
d = dw.Drawing(600, 320, origin='center')
lines = dw.Lines(10, 90, 10, 10, 80, 90, 80, 10,
                 fill='none', stroke='black')
d.append(lines)
d.save_svg('01_multilines.svg')
```

![svg](../pictures/drawsvg/01_multilines.svg)


```sh
d = dw.Drawing(600, 320, origin='center')
x = [30 + x*10 for x in range(20)]
y = [80, 20]*10
xy = [item for sublist in zip(x, y) for item in sublist]
d.append(dw.Lines(*xy, stroke='black', stroke_width=5, fill='none'))
d.save_svg('01_multilines2.svg')
```

![svg](../pictures/drawsvg/01_multilines2.svg)


## ///2.3. Polygon

SVG `Polygon` is drawsvg `Lines` with `close=True`.

```sh
d = dw.Drawing(600, 320, origin='center')
polygon = dw.Lines(15, 10, 55, 10, 45, 20, 5, 20,
                   fill='red', stroke='black', close='true')
star = dw.Lines(48, 16, 16, 96, 96, 48, 0, 48, 88, 96,
                stroke='black', fill='none', close='true')
d.append(star)
d.save_svg('01_polygon.svg')
```

![svg](../pictures/drawsvg/01_polygon.svg)


## ///2.4. Rectangle

```python
d = dw.Drawing(600, 320, origin='center')
dw.Rectangle(x, y, width, height, **kwargs)
```

```sh
d = dw.Drawing(600, 320, origin='center')
# Black interior, no outline
d.append(dw.Rectangle(10, 10, 90, 150))
# No interior, black outline
d.append(dw.Rectangle(120, 10, 60, 120,
                      fill='none', stroke='black'))
# Blue interior, thick semi-transparent red outline
d.append(dw.Rectangle(210, 10, 75, 90,
                      fill='#0000ff', stroke='red',
                      stroke_width=7, stroke_opacity=0.5))
# Semi-transparent yellow interior, dashed green outline
d.append(dw.Rectangle(300, 10, 105, 60,
                      fill='yellow', fill_opacity=0.5,
                      stroke='green', stroke_width=2,
                      stroke_dasharray='5,2'))
d.save_svg('01_rect.svg')
```

![svg](../pictures/drawsvg/01_rect.svg)

Rounded corners:

```sh
d = dw.Drawing(600, 320, origin='center')
# Define both rx and ry
d.append(dw.Rectangle(10, 10, 80, 180, rx='10', ry='10',
                      stroke='black', fill='none'))
# If only one is given, it applies to both
d.append(dw.Rectangle(110, 10, 80, 180, ry='20',
                      stroke='black', fill='none'))
d.append(dw.Rectangle(210, 10, 80, 180, rx='40',
                      stroke='black', fill='none'))
# Rx and ry unequal
d.append(dw.Rectangle(310, 10, 80, 180, rx='30', ry='10',
                      stroke='black', fill='none'))
d.append(dw.Rectangle(410, 10, 80, 180, rx='10', ry='30',
                      stroke='black', fill='none'))
d.save_svg('01_rectround.svg')
```

![svg](../pictures/drawsvg/01_rectround.svg)


## ///2.5. Circle

```python
dw.Circle(cx, cy, r, **kwargs)
```

cx and cy point to circle's center, r refer to its radius

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Circle(50, 50, 40))
d.append(dw.Circle(150, 50, 40,
                   stroke='black', fill='none'))
d.append(dw.Circle(250, 50, 40,
                   stroke='black', fill='none',
                   stroke_width=15))
d.save_svg('01_circ.svg')
```

![svg](../pictures/drawsvg/01_circ.svg)


## ///2.6. Ellipse

```python
dw.Ellipse(cx, cy, rx, ry, **kwarg)
```

(cx,cy) points to the center and (rx,ry) tells its radius

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Ellipse(50, 50, 50, 30))
d.append(dw.Ellipse(160, 50, 50, 30,
                    stroke='black', fill='none'))
d.append(dw.Ellipse(250, 50, 30, 45,
                    stroke='black',fill='none'))
d.save_svg('01_ellip.svg')
```

![svg](../pictures/drawsvg/01_ellip.svg)



## /3. Color and Painting Properties

For a full list, see [W3C specifications](https://www.w3.org/TR/SVG11/styling.html).


## ///3.1. fill and stroke_color

Some color keyword names are:
aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow.

Also supported is `#rrggbb`, `#rgb` (hexadecimal), or `rgb(R,G,B)` with 0-255 or with 0-100% for each value.

```sh
d = dw.Drawing(600, 320, origin='center')
c = ['red', '#9f9', '#9999ff', 'rgb(255,128,64)', 'rgb(60%,20%,60%)']
for i in range(5):
    y = (i + 1)*10
    d.append(dw.Line(10, y, 80, y,
                     stroke=c[i], stroke_width=5))
d.save_svg('02_fsc.svg')
```

![svg](../pictures/drawsvg/02_fsc.svg)


## ///3.2. fill_opacity and stroke_opacity

Value range from 0 = transparent to 1 = solid.

```sh
d = dw.Drawing(600, 320, origin='center')
for i in range(5):
    y = (i + 1)*10
    d.append(dw.Line(0, y, 290, y,
                     stroke='black', stroke_width=5,
                     stroke_opacity=i/5 + 0.1))
    d.append(dw.Rectangle(i*60, 70, 50, 50,
                          fill='red', fill_opacity=i/5+0.1))
d.save_svg('02_foso.svg')
```

![svg](../pictures/drawsvg/02_foso.svg)


## ///3.3. stroke_dasharray

```sh
d = dw.Drawing(600, 320, origin='center')
# Nine-pixel dash, five-pixel gap
d.append(dw.Line(10, 10, 100, 10,
                 stroke='black', stroke_width=2,
                 stroke_dasharray='9,5'))
# Five-pixel dash, three-pixel gap, nine-pixel dash, two-pixel gap
d.append(dw.Line(10, 20, 100, 20,
                 stroke='black', stroke_width=2,
                 stroke_dasharray='5,3,9,2'))
# Odd number of entries alternates dashes and gaps
d.append(dw.Line(10, 30, 100, 30,
                 stroke='black', stroke_width=2,
                 stroke_dasharray='9,3,5'))
d.save_svg('02_dash.svg')
```

![svg](../pictures/drawsvg/02_dash.svg)


## ///3.4. stroke_width

```sh
d = dw.Drawing(600, 320, origin='center')
for i in range(20):
    d.append(dw.Line((i+1)*15, 10, (i+1)*15, 90,
                     stroke='black', stroke_width=abs(10-i)+1))
d.save_svg('02_strokewdth.svg')
```

![svg](../pictures/drawsvg/02_strokewdth.svg)


## ///3.5. stroke_linecap

`stroke_linecap` can be set to `butt`, `round`, or `square`.
Note that the latter two extend beyond the end coordinates.

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Line(10, 15, 50, 15,
                 stroke='black', stroke_width=15,
                 stroke_linecap='butt'))
d.append(dw.Line(10, 45, 50, 45,
                 stroke='black', stroke_width=15,
                 stroke_linecap='round'))
d.append(dw.Line(10, 75, 50, 75,
                 stroke='black', stroke_width=15,
                 stroke_linecap='square'))
# Guide lines
d.append(dw.Lines(10, 0, 10, 100, stroke='#999'))
d.append(dw.Lines(50, 0, 50, 100, stroke='#999'))
d.save_svg('02_linecap.svg')
```

![svg](../pictures/drawsvg/02_linecap.svg)


## ///3.6. stroke_linejoin

Define the way lines connect at a corner with `stroke-linejoin`: `miter` (pointed), `round`, or `bevel` (flat).

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Line(0, 20, 300, 20, stroke='gray'))
g = dw.Group(stroke_width=20, stroke='black', fill='none')
g.append(dw.Lines(10, 80, 50, 20, 90, 80,
                  stroke_linejoin='miter'))
g.append(dw.Lines(110, 80, 150, 20, 190, 80,
                  stroke_linejoin='round'))
g.append(dw.Lines(210, 80, 250, 20, 290, 80,
                  stroke_linejoin='bevel'))
d.append(g)
d.save_svg('02_join.svg')
```

![svg](../pictures/drawsvg/02_join.svg)


## ///3.7. stroke_miterlimit

When two line segments meet at a sharp angle and miter joins have been specified for `stroke-linejoin`,
it is possible for the miter to extend far beyond the thickness of the line stroking the path.
The `stroke-miterlimit` imposes a limit on the ratio of the miter length to the `stroke-width`.
When the limit is exceeded, the join is converted from a miter to a bevel.
(From [W3C doc](https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty))

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Line(0, 30, 300, 30, stroke='gray'))
g = dw.Group(stroke_width=20, stroke='black',
             fill='none', stroke_linejoin='miter')
g.append(dw.Lines(10, 90, 40, 30, 70, 90))
g.append(dw.Lines(100, 90, 130, 30, 160, 90,
                  stroke_miterlimit=2.3))
g.append(dw.Lines(190, 90, 220, 30, 250, 90,
                  stroke_miterlimit=1))
d.append(g)
d.save_svg('02_mlimit.svg')
```

![svg](../pictures/drawsvg/02_mlimit.svg)


## /4. Path

```python
path = dw.Path(**kwargs)
```

The following Path specifiers are also available as lowercase characters.
In that case, their movements are relative to current location.


## ///4.1. M: moveto

```python
path.M(x, y)
```

Move to `x, y` (and draw nothing).


## ///4.2. L: lineto

```python
path.L(x, y)
```

Draw a straight line to `x, y`.

```sh
d = dw.Drawing(600, 320, origin='center')
g = dw.Group(stroke='black', fill='none')

p = dw.Path()
p.M(10, 10).L(100, 10)
g.append(p)

p = dw.Path()
p.M(10, 20).L(100, 20).L(100, 50)
g.append(p)

p = dw.Path()
p.M(40, 60).L(10, 60).L(40, 42)
p.M(60, 60).L(90, 60).L(60, 42)
g.append(p)

d.append(g)
d.save_svg('03_pL.svg')
```

![svg](../pictures/drawsvg/03_pL.svg)


## ///4.3. H: horizontal line

```python
path.H(x)
```

Draw a horizontal line to the new `x` location.


## ///4.4. V: vertical line

```python
path.V(y)
```

Draw a vertical line to the new `y` location.

```sh
d = dw.Drawing(600, 320, origin='center')
p = dw.Path(stroke='black', fill='none')
d.append(p.M(10, 10).H(100))
d.append(p.M(10, 20).H(100).V(50))
d.save_svg('03_pHV.svg')
```

![svg](../pictures/drawsvg/03_pHV.svg)


## ///4.5. Q: quadratic Bézier curve (one control point)

```python
path.Q(x_ctl, y_ctl, x_end, y_end)
```

Draw a quadratic Bézier curve from current location to `x_end, y_end` by means of `x_ctl, y_ctl`.

```sh
d = dw.Drawing(600, 320, origin='center')
# Curve only (left)
p = dw.Path(stroke='black', fill='none', stroke_width=3)
d.append(p.M(30, 75).Q(240, 30, 300, 120))
# With control point and construction lines
d.append(dw.Use(p, 300, 0))
g = dw.Group(stroke='gray', fill='gray')
g.append(dw.Circle(330, 75, 3))
g.append(dw.Circle(600, 120, 3))
g.append(dw.Circle(540, 30, 3))
g.append(dw.Line(330, 75, 540, 30))
g.append(dw.Line(540, 30, 600, 120))
g.append(dw.Line(330, 75, 600, 120, stroke_dasharray='5,5'))
g.append(dw.Circle(435, 52.5, 3))
g.append(dw.Circle(570, 75, 3))
g.append(dw.Line(435, 52.5, 570, 75))
g.append(dw.Circle(502.5, 63.75, 4, fill='none'))
d.append(g)
d.save_svg('03_pQ.svg')
```

![svg](../pictures/drawsvg/03_pQ.svg)


## ///4.6. T: smooth quadratic Bézier curve (generated control point)

```python
path.T(x, y)
```

Draws a quadratic Bézier curve from the current point to (x, y).
The control point is assumed to be the reflection of the control point on the previous command relative to the current point.
If there is no previous command or if the previous command was not a Q, q, T or t, assume the control point is coincident with the current point.
(From [W3C Doc](https://www.w3.org/TR/SVG11/paths.html#PathDataQuadraticBezierCommands))

```sh
d = dw.Drawing(600, 320, origin='center')
# Curve sequence (left)
p = dw.Path(stroke='black', fill='none', stroke_width=3)
d.append(p.M(30, 60).Q(80, -10, 100, 60).Q(130, 25, 200, 40))
# With smooth continuation (right)
p = dw.Path(stroke='black', fill='none', stroke_width=3,
            transform='translate(200,0)')
d.append(p.M(30, 60).Q(80, -10, 100, 60).T(200, 40))
d.save_svg('03_pT.svg')
```

![svg](../pictures/drawsvg/03_pT.svg)


## ///4.7. C: cubic Bézier curve (two control points)

```python
path.C(x_ctl_1, y_ctl_1, x_ctl_2, y_ctl_2, x_end, y_end)
```

Draw a cubic Bézier curve by means of two control points (one for start and one for end).

```sh
d = dw.Drawing(600, 320, origin='center')
pnt_1 = (40, 50)
pnt_2 = (110, 50)
ctl_1_x = (10, 60, 110, 110, 60, 110)
ctls_2 = ((140, 10), (90, 10), (40, 10), (40, 10), (90, 90), (40, 90))

for i in range(6):
    trans = f'translate({i*100},0)'
    p = dw.Path(stroke='black', fill='none',
                stroke_width=3, transform=trans)
    ctl_1 = (ctl_1_x[i], 10)
    ctl_2 = ctls_2[i]
    p.M(*pnt_1)
    p.C(*ctl_1, *ctl_2, *pnt_2)
    d.append(p)
    g = dw.Group(stroke='gray', fill='gray',
                 stroke_width=1, transform=trans)
    g.append(dw.Circle(*ctl_1, 2))
    g.append(dw.Circle(*ctl_2, 2))
    g.append(dw.Line(*pnt_1, *ctl_1))
    g.append(dw.Line(*pnt_2, *ctl_2))
    d.append(g)
d.save_svg('03_pC.svg')
```

![svg](../pictures/drawsvg/03_pC.svg)


## ///4.8. S: smooth cubic Bézier (one control point)

Similar to `T` in quadratic Bézier curve. The first control point is calculated as reflection of the previous second control point.

```python
path.S(x_ctl_2, y_ctl_2, x_end, y_end)
```

```sh
d = dw.Drawing(600, 320, origin='center')
pnt_1 = (30, 100)
pnt_2 = (100, 100)
pnt_3 = (200, 80)
ctl_1 = (50, 30)
ctl_2 = (70, 50)
ctl_3 = (150, 40)

p = dw.Path(stroke='black', fill='none', stroke_width=3)
p.M(*pnt_1)
p.C(*ctl_1, *ctl_2, *pnt_2)
p.S(*ctl_3, *pnt_3)
d.append(p)

for pnt, ctl in zip((pnt_1, pnt_2, pnt_3), (ctl_1, ctl_2, ctl_3)):
    d.append(dw.Circle(*pnt, 4))
    d.append(dw.Circle(*ctl, 2, stroke='gray', fill='gray'))
    d.append(dw.Line(*pnt, *ctl, stroke='gray'))
d.save_svg('03_pS.svg')
```

![svg](../pictures/drawsvg/03_pS.svg)


## ///4.9. A: elliptical Arc

```python
path.A(rx, ry, rot, largeArc, sweep, ex, ey)

    rx, ry: radius
    rot: x-axis rotation
    largeArc: True or False
    sweep: True (positive) or False (negative) angle
    ex, ey: end point
```

```sh
d = dw.Drawing(600, 320, origin='center')
p = dw.Path(stroke='red')
d.append(p.M(125, 75).A(100, 50, rot=0, large_arc=0, sweep=0, ex=225, ey=125))
p = dw.Path(stroke='blue')
d.append(p.M(125, 75).A(100, 50, rot=0, large_arc=0, sweep=1, ex=225, ey=125))
p = dw.Path(stroke='rgb(0 80 255)',stroke_dasharray='5 3')
d.append(p.M(125, 75).A(100, 50, rot=0, large_arc=1, sweep=0, ex=225, ey=125))
p = dw.Path(stroke='rgb(255 80 0)',stroke_dasharray='5 3')
d.append(p.M(125, 75).A(100, 50, rot=0, large_arc=1, sweep=1, ex=225, ey=125))
d.save_svg('03_pA.svg')
```

![svg](../pictures/drawsvg/03_pA.svg)


## ///4.10. Z: closepath

```python
path.Z()
```

Close the path.

```sh
d = dw.Drawing(600, 320, origin='center')
p = dw.Path(stroke='black', fill='none')
d.append(p.M(10, 10).h(30).v(50).h(-30).Z())
d.append(p.M(50, 10).h(30).v(50).Z())
d.save_svg('03_pZ.svg')
```

![svg](../pictures/drawsvg/03_pZ.svg)


## /5. Text

```python
dw.Text(text, fontSize, x=None, y=None, *, center=False,
        line_height=1, line_offset=0, path=None,
        start_offset=None, path_args=None, tspan_args=None,
        cairo_fix=True, **kwargs)
```

## ///5.1. Fill and Outline

Default is black as fill color and no outline.

```sh
d = dw.Drawing(600, 320, origin='center')
# Reference lines
l = dw.Path(stroke='gray')
l.M(20, 0).V(370)
for i in range(1, 7):
    l.M(10, i*60).H(500)
d.append(l)

d.append(dw.Text('Simplest Text', font_size=50, x=20, y=60))
d.append(dw.Text('Outline / Filled', font_size=50, x=20, y=120, stroke='black'))
d.append(dw.Text('Too big stroke', font_size=50, x=20, y=180, stroke='black', stroke_width=5))
d.append(dw.Text('Outlined only', font_size=50, x=20, y=240, stroke='black', stroke_width=0.5, fill='none'))
d.append(dw.Text('Outlined and colored', font_size=50, x=20, y=300, stroke='black', fill='red'))
d.append(dw.Text('Colored fill only', font_size=50, x=20, y=360, fill='blue'))
d.save_svg('04_fill.svg')
```

![svg](../pictures/drawsvg/04_fill.svg)


## ///5.2. Weight, Style, Decoration, Spacing

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Text('bold', font_size=30, x=20, y=35, font_weight='bold'))
d.append(dw.Text('italic', font_size=30, x=20, y=75, font_style='italic'))
d.append(dw.Text('under', font_size=30, x=20, y=115, text_decoration='underline'))
d.append(dw.Text('over', font_size=30, x=20, y=155, text_decoration='overline'))
d.append(dw.Text('through', font_size=30, x=20, y=195, text_decoration='line-through'))
d.append(dw.Text('normal word space', font_size=30, x=200, y=35))
d.append(dw.Text('more word space', font_size=30, x=200, y=75, word_spacing=10))
d.append(dw.Text('less word space', font_size=30, x=200, y=115, word_spacing=-5))
d.append(dw.Text('wide letter space', font_size=30, x=200, y=155, letter_spacing=8))
d.append(dw.Text('narrow letter space', font_size=30, x=200, y=195, letter_spacing=-2))
d.save_svg('04_weight.svg')
```

![svg](../pictures/drawsvg/04_weight.svg)


## ///5.3. Text Alignment

Horizontal alignment (`text_anchor`) can be `'start'`, `'middle'` or `'end'`.

Vertical alignment (`dominant_baseline`) can be `'auto'`, `'middle'` or `'hanging'`
(and more, see [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline)).

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Line(75, 100, 75, 0, stroke='gray'))
d.append(dw.Line(140, 30, 250, 30, stroke='gray'))
d.append(dw.Line(140, 60, 250, 60, stroke='gray'))
d.append(dw.Line(140, 90, 250, 90, stroke='gray'))
d.append(dw.Text('Start', 24, 75, 30, text_anchor='start'))
d.append(dw.Text('Middle', 24, 75, 60, text_anchor='middle'))
d.append(dw.Text('End', 24, 75, 90, text_anchor='end'))
d.append(dw.Text('Auto', 24, 150, 30, dominant_baseline='auto'))
d.append(dw.Text('Middle', 24, 150, 60, dominant_baseline='middle'))
d.append(dw.Text('Hanging', 24, 150, 90, dominant_baseline='hanging'))
d.save_svg('04_align.svg')
```

![svg](../pictures/drawsvg/04_align.svg)


## ///5.4. TSpan

Continues a `Text` element.

```sh
d = dw.Drawing(600, 320, origin='center')
txt = dw.Text('Switch among ', 24, 10, 40)
txt.append(dw.TSpan('italic', font_style='italic'))
txt.append(dw.TSpan(', normal, and '))
txt.append(dw.TSpan('bold', font_weight='bold'))
txt.append(dw.TSpan(' text.'))
d.append(txt)
d.save_svg('04_tspan.svg')
```

![svg](../pictures/drawsvg/04_tspan.svg)


```sh
d = dw.Drawing(600, 320, origin='center')
txt = dw.Text('F', 24, 10, 30)
txt.append(dw.TSpan('a', dy=5))
txt.append(dw.TSpan('l', dy=31, dx=21))
txt.append(dw.TSpan('l', dy=89, dx=54))
d.append(txt)
d.save_svg('04_tspan2.svg')
```

![svg](../pictures/drawsvg/04_tspan2.svg)

The same could be achieved by a list of dx/dy values:

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Text('Fall', 24, 10, 30,
                 dx='0,0,21,54', dy='0,5,21,54'))
d.save_svg('04_tspan3.svg')
```

![svg](../pictures/drawsvg/04_tspan3.svg)


## ///5.5. Rotate

Either one angle (degrees), or a list which is applied to all characters.
If the list is smaller than the number of characters, the last angle persists.

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Text('Rotate', 20, 20, 20, letter_spacing=20, rotate='90'))
d.append(dw.Text('Rotate', 20, 20, 80, letter_spacing=20, rotate='0 90 180 270'))
d.save_svg('04_rot.svg')
```

![svg](../pictures/drawsvg/04_rot.svg)

`TSpan` can also be used:

```sh
d = dw.Drawing(600, 320, origin='center')
import random
random.seed(1)

txt = dw.Text('', 20, 20, 50, letter_spacing=20)
txt.append(dw.TSpan('R', rotate=random.randrange(360)))
txt.append(dw.TSpan('OT', rotate='50 20'))
rotate = ' '.join([str(random.randrange(360)) for i in range(3)])
txt.append(dw.TSpan('ATE', rotate=rotate))
d.append(txt)
d.save_svg('04_rot2.svg')
```

![svg](../pictures/drawsvg/04_rot2.svg)


## ///5.6. Setting Text Length

```sh
d = dw.Drawing(600, 320, origin='center')
s = 'Two words'
d.append(dw.Text(s, 20, 20, 30, textLength=250, lengthAdjust='spacing'))
d.append(dw.Text(s, 20, 20, 70, textLength=250, lengthAdjust='spacingAndGlyphs'))
d.append(dw.Text(s+' (normal length)', 20, 20, 110))
d.append(dw.Text(s, 20, 20, 150, textLength=80, lengthAdjust='spacing'))
d.append(dw.Text(s, 20, 20, 190, textLength=80, lengthAdjust='spacingAndGlyphs'))

d.append(dw.Line(20, 10, 20, 195, stroke='gray'))
d.append(dw.Line(270, 80, 270, 10, stroke='gray'))
d.append(dw.Line(100, 130, 100, 195, stroke='gray'))
d.save_svg('04_len.svg')
```

![svg](../pictures/drawsvg/04_len.svg)


## ///5.7. Text on a Path

```sh
d = dw.Drawing(600, 320, origin='center')
curve_path = dw.Path(stroke='gray', fill='none')
curve_path.M(30, 50).C(50, 20, 70, 20, 120, 50).S(150, 10, 200, 50)

round_corner = dw.Path(stroke='gray', fill='none')
round_corner.M(250, 30).L(300, 30).A(30, 30, 0, 0, 1, 330, 60).L(330, 110)

sharp_corner = dw.Path(stroke='gray', fill='none')
sharp_corner.M(30, 110).L(100, 110).L(100, 160)

discontinuous = dw.Path(stroke='gray', fill='none')
discontinuous.M(150, 110).A(40, 30, 0, 1, 0, 230, 110).M(250, 110).L(270, 140)

center_curve = dw.Path(stroke='gray', fill='none')
center_curve.M(330, 130).L(330, 160).A(30, 30, 0, 0, 1, 300, 180).L(200, 180)

d.append(curve_path)
d.append(round_corner)
d.append(sharp_corner)
d.append(discontinuous)
d.append(center_curve)

t_cp = dw.Text('Following a cubic Bézier curve', 14, path=curve_path)
t_rc = dw.Text("Going 'round the bend", 14, path=round_corner)
t_sc = dw.Text('Making a quick turn', 14, path=sharp_corner)
t_dc = dw.Text('Text along a broken path', 14, path=discontinuous)
t_ct = dw.Text('centered', 14, path=center_curve, offset='50%', text_anchor='middle')

d.append(t_cp)
d.append(t_rc)
d.append(t_sc)
d.append(t_dc)
d.append(t_ct)
d.save_svg('04_path.svg')
```

![svg](../pictures/drawsvg/04_path.svg)


## ///5.8. Multi Line Text

This is a particular feature of drawsvg: A list of strings as input for Text()
is rendered as multi-line text.

```sh
d = dw.Drawing(600, 320, origin='center')
tl = ['this is', 'a', 'multiline text', 'given as a', 'list']
d.append(dw.Text(tl, 14, 50, 20, text_anchor='middle'))

ts = 'this is\na\nmultiline text\ngiven as a\nstring'
d.append(dw.Text(ts, 14, 150, 20, text_anchor='middle'))
d.save_svg('04_multiline_text.svg')
```

![svg](../pictures/drawsvg/04_multiline_text.svg)


## ///5.9. Fonts

Specify fonts via `font_family`.

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Text('Some text in Times New Roman.', 30, 10, 35, font_family='Times New Roman'))
d.append(dw.Text('Some text in Arial Black.', 30, 10, 75, font_family='Arial Black'))
d.append(dw.Text('Some text in Georgia.', 30, 10, 115, font_family='Georgia'))
d.save_png('04_fonts1.png')
```

![png](../pictures/drawsvg/04_fonts1.png)

Specify a default font.

```sh
d = dw.Drawing(600, 120, font_family='Times New Roman')
d.append(dw.Text('Some text in global setting (Times New Roman).', 30, 10, 35))
d.append(dw.Text('Some text in Arial Black.', 30, 10, 75, font_family='Arial Black'))
d.append(dw.Text('Some text in Georgia.', 30, 10, 115, font_family='Georgia'))
d.save_png('04_fonts2.png')
```

![png](../pictures/drawsvg/04_fonts2.png)



## /6. Gradient, Clip, Mask

## ///6.1. Linear Gradient

```python
gradient = dw.LinearGradient(x1, y1, x2, y2, gradientUnits='userSpaceOnUse', **kwargs)
gradient.add_stop(offset, color, opacity=None)
```

```sh
d = dw.Drawing(600, 320, origin='center')
grad = dw.LinearGradient(150, 0, 0, 0)
grad.add_stop(0, 'green')
grad.add_stop(1, 'yellow')
d.append(dw.Rectangle(10, 10, 150, 60,
                      stroke='black', fill=grad))
d.save_svg('05_lingrad.svg')
```

![svg](../pictures/drawsvg/05_lingrad.svg)


## ///6.2. Radial Gradient

```python
gradient = dw.RadialGradient(cx, cy, r, **kwargs)
gradient.add_stop(offset, color, opacity=None)
```

```sh
d = dw.Drawing(600, 320, origin='center')
gradient = dw.RadialGradient(200, 100, 100)
gradient.add_stop(0, 'green', 1)
gradient.add_stop(1, 'orange', 1)
bg = dw.Rectangle(x=0, y=0, width='100%', height='100%', fill=gradient)
d.append(bg)
d.save_svg('05_radgrad.svg')
```

![svg](../pictures/drawsvg/05_radgrad.svg)


## ///6.3. Clip

```python
clip_name = dw.ClipPath()
```

To add shape as Clip, use `.append()` method.
To apply Clip, fill `clip_path` argument with `clip_name`.

```sh
d = dw.Drawing(600, 320, origin='center')
# Show both shapes as they are
d.append(dw.Rectangle(100, 100, 100, 100,
                      stroke='gray', fill='none'))
d.append(dw.Circle(100, 100, 100,
                   fill='none', stroke='gray', stroke_dasharray='5 5'))
# Apply rect as clip to circle
clip = dw.ClipPath()
clip.append(dw.Rectangle(100, 100, 100, 100))
d.append(dw.Circle(100, 100, 100,
                   fill='cyan', clip_path=clip))
d.save_svg('05_clip.svg')
```

![svg](../pictures/drawsvg/05_clip.svg)

Another example:

```sh
d = dw.Drawing(600, 320, origin='center')
# Draw a random path in the left half of the canvas
p = dw.Path(stroke='black', stroke_width=2, fill='none')
p.M(150, 150)
import random
random.seed(1)
for i in range(40):
    p.L(random.randint(0, 300), random.randint(0, 200))
d.append(p)

# Circle as clipping shape
circ = dw.Circle(150, 100, 75)
c = dw.ClipPath()
c.append(circ)

# Repeat lines in the right half and apply clipping
d.append(dw.Use(p, 300, 0, clip_path=c))
d.save_svg('05_clip2.svg')
```

![svg](../pictures/drawsvg/05_clip2.svg)

Complex clip path:

```sh
d = dw.Drawing(600, 320, origin='center')
curve1 = dw.Path(stroke='black', stroke_width=1, stroke_dasharray='3 2', fill='none')
curve1.M(5, 55).C(25, 5, 45, -25, 75, 55).C(85, 85, 20, 105, 40, 55).Z()

curveClip = dw.ClipPath()
curveClip.append(dw.Use(curve1, 0, 0))

text1 = dw.Text('CLIP', 48, 20, 20, font_weight='bold', transform='rotate(60)',
                stroke='black', stroke_width=1, stroke_dasharray='3 2', fill='none')
textClip = dw.ClipPath()
textClip.append(dw.Use(text1, 0, 0))

shapes = dw.Group()
shapes.append(dw.Rectangle(0, 50, 90, 60, fill='#999'))
shapes.append(dw.Circle(25, 25, 25, fill='#666'))
shapes.append(dw.Lines(30, 0, 80, 0, 80, 100, close='true', fill='#ccc'))

# draw shapes with clip path
d.append(dw.Use(shapes, 0, 0, clip_path=curveClip))

# show clip path
g = dw.Group(transform='translate(100,0)')
g.append(shapes)
g.append(dw.Use(curve1, 0, 0))
d.append(g)

# draw shapes with text as clip path
d.append(dw.Use(shapes, 0, 150, clip_path=textClip))

# show text clip path
g = dw.Group(transform='translate(100,150)')
g.append(shapes)
g.append(dw.Use(text1, 0, 0))
d.append(g)
d.save_svg('05_clip3.svg')
```

![svg](../pictures/drawsvg/05_clip3.svg)


## ///6.4. Mask

```python
mask_name = dw.Mask()
```

The transparency of the masking object is transfered to the masked object.
Opaque pixels of the mask produce opaque pixels of the masked object.
Transparent parts of the mask make the corresponding parts of the masked object invisible.

```sh
d = dw.Drawing(600, 320, origin='center')
gradient = dw.LinearGradient(*[0,0], *[1,0], gradientUnits='objectBoundingBox')
gradient.add_stop(0, 'white')
gradient.add_stop(1, 'black')

mask = dw.Mask()
box = dw.Rectangle(30, 0, 100, 100, fill=gradient)
mask.append(box)

# Initial shape
rect = dw.Rectangle(0, 0, 200, 100,
                    fill='cyan', stroke='blue', stroke_width=2)
d.append(rect)

# After mask
rect = dw.Rectangle(0, 0, 200, 100,
                    fill='pink', stroke='red', stroke_width=2,
                    mask=mask)
d.append(rect)
d.save_svg('05_mask.svg')
```

![svg](../pictures/drawsvg/05_mask.svg)

Mask using opaque colors:

```sh
d = dw.Drawing(600, 320, origin='center')
# Define the masks
redmask = dw.Mask(maskContentUnits='objectBoundingBox')
redmask.append(dw.Rectangle(0, 0, 1, 1, fill='#f00'))
greenmask = dw.Mask(maskContentUnits='objectBoundingBox')
greenmask.append(dw.Rectangle(0, 0, 1, 1, fill='#0f0'))
bluemask = dw.Mask(maskContentUnits='objectBoundingBox')
bluemask.append(dw.Rectangle(0, 0, 1, 1, fill='#00f'))
whitemask = dw.Mask(maskContentUnits='objectBoundingBox')
whitemask.append(dw.Rectangle(0, 0, 1, 1, fill='#fff'))

# Display the colors
d.append(dw.Rectangle(10, 10, 50, 50, fill='#f00'))
d.append(dw.Rectangle(70, 10, 50, 50, fill='#0f0'))
d.append(dw.Rectangle(130, 10, 50, 50, fill='#00f'))
d.append(dw.Rectangle(190, 10, 50, 50, fill='#fff', stroke='black'))

# Mask
g = dw.Group(mask=redmask)
g.append(dw.Circle(35,115,25,fill='black'))
g.append(dw.Text('Red',14,35,80,text_anchor='middle'))
d.append(g)
g = dw.Group(mask=greenmask)
g.append(dw.Circle(95, 115, 25, fill='black'))
g.append(dw.Text('Green', 14, 95, 80, text_anchor='middle'))
d.append(g)
g = dw.Group(mask=bluemask)
g.append(dw.Circle(155, 115, 25, fill='black'))
g.append(dw.Text('Blue', 14, 155, 80, text_anchor='middle'))
d.append(g)
g = dw.Group(mask=whitemask)
g.append(dw.Circle(215, 115, 25, fill='black'))
g.append(dw.Text('White', 14, 215, 80, text_anchor='middle'))
d.append(g)
d.save_svg('05_mask2.svg')
```

![svg](../pictures/drawsvg/05_mask2.svg)

Mask alpha using opacity only:

```sh
d = dw.Drawing(600, 320, origin='center')
fullmask = dw.Mask(maskContentUnits='objectBoundingBox')
fullmask.append(dw.Rectangle(0, 0, 1, 1, fill_opacity=1.0, fill='white'))
three_fourths = dw.Mask(maskContentUnits='objectBoundingBox')
three_fourths.append(dw.Rectangle(0, 0, 1, 1, fill_opacity=0.75, fill='white'))
one_half = dw.Mask(maskContentUnits='objectBoundingBox')
one_half.append(dw.Rectangle(0, 0, 1, 1, fill_opacity=0.5, fill='white'))
one_fourth = dw.Mask(maskContentUnits='objectBoundingBox')
one_fourth.append(dw.Rectangle(0, 0, 1, 1, fill_opacity=0.25, fill='white'))

g = dw.Group(mask=fullmask)
g.append(dw.Circle(35, 35, 25))
g.append(dw.Text('100%', 14, 35, 80, text_anchor='middle'))
d.append(g)
g = dw.Group(mask=three_fourths)
g.append(dw.Circle(95, 35, 25))
g.append(dw.Text('50%', 14, 95, 80, text_anchor='middle'))
d.append(g)
g = dw.Group(mask=one_half)
g.append(dw.Circle(155, 35, 25))
g.append(dw.Text('50%', 14, 155, 80, text_anchor='middle'))
d.append(g)
g = dw.Group(mask=one_fourth)
g.append(dw.Circle(215, 35, 25))
g.append(dw.Text('25%', 14, 215, 80, text_anchor='middle'))
d.append(g)
d.save_svg('05_mask3.svg')
```

![svg](../pictures/drawsvg/05_mask3.svg)


## /7. Group, Use, Defs, Image

## ///7.1. Group

```python
dw.Group(**kwargs)
```

Any style specified in the g tag will apply to all child elements in the group.

```sh
d = dw.Drawing(600, 320, origin='center')
g_house = dw.Group(id='house', fill='none', stroke='black')
g_house.append(dw.Rectangle(6, 50, 60, 60))
g_house.append(dw.Lines(6, 50, 36, 9, 66, 50))
g_house.append(dw.Lines(36, 110, 36, 80, 50, 80, 50, 110))
d.append(g_house)

g_man = dw.Group(id='man', fill='none', stroke='blue')
g_man.append(dw.Circle(85, 56, 10))
g_man.append(dw.Line(85, 66, 85, 80))
g_man.append(dw.Lines(76, 104, 85, 80, 94, 104))
g_man.append(dw.Lines(76, 70, 85, 76, 94, 70))
d.append(g_man)

g_woman = dw.Group(id='woman', fill='none', stroke='red')
g_woman.append(dw.Circle(110, 56, 10))
g_woman.append(dw.Lines(110, 66, 110, 80, 100, 90, 120, 90, 110, 80))
g_woman.append(dw.Line(104, 104, 108, 90))
g_woman.append(dw.Line(112, 90, 116, 104))
g_woman.append(dw.Lines(101, 70, 110, 76, 119, 70))
d.append(g_woman)
d.save_svg('06_group.svg')
```

![svg](../pictures/drawsvg/06_group.svg)


## ///7.2. Use

```python
dw.Use(other_elem, x, y, **kwargs)
```

```sh
d = dw.Drawing(600, 320, origin='center')
g_house = dw.Group(id='house', fill='none', stroke='black')
g_house.append(dw.Rectangle(6, 50, 60, 60))
g_house.append(dw.Lines(6, 50, 36, 9, 66, 50))
g_house.append(dw.Lines(36, 110, 36, 80, 50, 80, 50, 110))
d.append(g_house)

# Use id which is set
d.append(dw.Use('house', 100, 50))
# Or use variable name
d.append(dw.Use(g_house, 150, 20))
d.save_svg('06_use.svg')
```

![svg](../pictures/drawsvg/06_use.svg)


## ///7.3. Defs

Elements that are not appended to the drawing but are referenced by other elements will automatically be included in `<defs></defs>`.
([source](https://github.com/cduck/drawsvg/issues/46))

```sh
d = dw.Drawing(200, 200, id_prefix='defs')

# Do not append `bond` to the drawing
bond = dw.Line(0, 0, 10, 10, stroke='black')

# `bond` is automatically added into <defs>
# A default `id` is generated if one isn't set
d.append(dw.Use(bond, 20, 50))
d.append(dw.Use(bond, 50, 50))
d.append(dw.Use(bond, 80, 50))

print(d.as_svg())
d.save_svg('06_def.svg')
```

[Output](../pictures/drawsvg/06_def.svg):
![Output](../pictures/drawsvg/06_def.svg)

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="200" height="200" viewBox="0 0 200 200">
<defs>
<path d="M0,0 L10,10" stroke="black" id="defs0" />
</defs>
<use xlink:href="#defs0" x="20" y="50" />
<use xlink:href="#defs0" x="50" y="50" />
<use xlink:href="#defs0" x="80" y="50" />
</svg>
```


## ///7.4. Image

```python
dw.Image(x, y, width, height, path=None, data=None,
         embed=False, mimeType=None, **kwargs)
```

```sh
d = dw.Drawing(600, 320, origin='center')
# d.append(dw.Image(0, 0, 200, 200, 'example1.png', embed=True))
d.append(dw.Image(0, 0, 200, 200, '../cvaa-c3.jpg', embed=True))
d.save_svg('06_imag.svg')
```

![svg](../pictures/drawsvg/06_imag.svg)


## /8. Transformations

## ///8.1. Translate

```python
transform = 'translate(x,y)'
```

This attribute can be added to many objects. Simple example:

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Rectangle(0, 0, 40, 40))
d.append(dw.Rectangle(0, 0, 40, 40, fill='red', transform='translate(50,50)'))
d.save_svg('07_trans.svg')
```

![svg](../pictures/drawsvg/07_trans.svg)


## ///8.2. Scale

```python
transform = 'scale(x_mult[, y_mult])'
```

Note that scaling also affects stroke width.

```sh
d = dw.Drawing(600, 320, origin='center')
square = dw.Rectangle(0, 0, 40, 40, fill='none', stroke_width=2)
d.append(dw.Use(square, 10, 10, stroke='black'))
d.append(dw.Use(square, 10, 10, stroke='red', transform='scale(2)'))
d.save_svg('07_scale.svg')
```

![svg](../pictures/drawsvg/07_scale.svg)

It is possible to specify x and y scale separately:

```sh
d = dw.Drawing(600, 320, origin='center')
square = dw.Rectangle(0, 0, 40, 40, fill='none', stroke_width=2)
d.append(dw.Use(square, 10, 10, stroke='black'))
d.append(dw.Use(square, 10, 10, stroke='red', transform='scale(3,1.5)'))
d.save_svg('07_scale2.svg')
```

![svg](../pictures/drawsvg/07_scale2.svg)

Scaling around a center point:

```sh
d = dw.Drawing(600, 320, origin='center')
# Center of scaling: (100, 100)
d.append(dw.Circle(100, 100, 4, fill='black'))
# Non-scaled rectangle
rect = dw.Rectangle(70, 80, 60, 40, stroke='black', fill='none')
d.append(rect)
# Scaled rectangles
d.append(dw.Use(rect, 0, 0, transform='translate(-100,-100) scale(2)', stroke_width=0.5))
d.append(dw.Use(rect, 0, 0, transform='translate(-150,-150) scale(2.5)', stroke_width=0.4))
d.append(dw.Use(rect, 0, 0, transform='translate(-200,-200) scale(3)', stroke_width=0.33))
d.save_svg('07_scalcent.svg')
```

![svg](../pictures/drawsvg/07_scalcent.svg)


## ///8.3. Rotate

```python
transform = 'rotate(angle,cx=0,cy=0)'
```

`angle` counts clockwise in degrees.
`cx`/`cy` are the center of rotation.

```sh
d = dw.Drawing(600, 320, origin='center')
# Show frame border
d.append(dw.Rectangle(0, 0, 200, 200, stroke='gray', fill='none'))
# Rotation is around (0, 0)
d.append(dw.Rectangle(70, 30, 40, 40, fill='silver'))
d.append(dw.Rectangle(70, 30, 40, 40, fill='gray', transform='rotate(22.5)'))
d.append(dw.Rectangle(70, 30, 40, 40, fill='black', transform='rotate(45)'))
d.save_svg('07_rota.svg')
```

![svg](../pictures/drawsvg/07_rota.svg)

```sh
d = dw.Drawing(600, 320, origin='center')
# Center of rotation
d.append(dw.Circle(100, 100, 3, fill='black'))
# Non-rotated arrow
arrow = dw.Group(id='arrow')
arrow.append(dw.Line(110, 100, 160, 100))
arrow.append(dw.Lines(160, 100, 155, 95, 155, 105))
d.append(dw.Use(arrow, 0, 0, stroke='black', fill='black'))
# Rotated arrows
g = dw.Group(stroke='red', fill='red')
g.append(dw.Use(arrow, 0, 0, transform='rotate (60,100,100)'))
g.append(dw.Use(arrow, 0, 0, transform='rotate (-90,100,100)'))
g.append(dw.Use(arrow, 0, 0, transform='rotate (-150,100,100)'))
d.append(g)
d.save_svg('07_rota2.svg')
```

![svg](../pictures/drawsvg/07_rota2.svg)


## ///8.4. Skew

```python
transform = 'skewX(angle)'
transform = 'skewY(angle)'
```

```sh
d = dw.Drawing(600, 320, origin='center')
g = dw.Group(stroke='gray', stroke_dasharray='4 4')
g.append(dw.Line(0, 0, 200, 0))
g.append(dw.Line(20, 0, 20, 90))
g.append(dw.Line(120, 0, 120, 90))
d.append(g)

h = dw.Group(transform='translate(20,0)')
h1 = dw.Group(transform='skewX(30)')
h1.append(dw.Lines(50, 0, 0, 0, 0, 50,
                   stroke='black', fill='none', stroke_width=2))
h1.append(dw.Text('skewX', 16, 0, 60))
h.append(h1)
d.append(h)

i = dw.Group(transform='translate(120,0)')
i1 = dw.Group(transform='skewY(30)')
i1.append(dw.Lines(50, 0, 0, 0, 0, 50,
                   stroke='black', fill='none', stroke_width=2))
i1.append(dw.Text('skewY', 16, 0, 60))
i.append(i1)
d.append(i)
d.save_svg('07_skew.svg')
```

![svg](../pictures/drawsvg/07_skew.svg)


## ///8.5. Cartesian Coordinates

A drawing which can be translated to Cartesian coordinates
(where y-coordinates increase upward, not downward)
by setting the translate-y value to the drawing's height, and also applying `scale(1,-1)`.

Trapezoid with origin to top left (the default):

```sh
d = dw.Drawing(600, 320, origin='center')
d.append(dw.Lines(0, 100, 0, 0, 100, 0,
                  fill='none', stroke='green', stroke_width=2))
d.append(dw.Lines(40, 40, 100, 40, 70, 70, 40, 70,
                  fill='silver', stroke='black', stroke_width=2))
d.append(dw.Text('downward y', 12, 5, 95))
d.save_svg('07_cart1.svg')
```

![svg](../pictures/drawsvg/07_cart1.svg)

Translated origin to bottom left and upward-y:

```sh
d = dw.Drawing(600, 320, origin='center')
g = dw.Group(transform='translate(0,100) scale(1,-1)')
g.append(dw.Lines(0, 100, 0, 0, 100, 0,
                  fill='none', stroke='green', stroke_width=2))
g.append(dw.Lines(40, 40, 100, 40, 70, 70, 40, 70,
                  fill='silver', stroke='black', stroke_width=2))
g.append(dw.Text('upward y', 12, 5, 95))
d.append(g)
d.save_svg('07_cart2.svg')
```

![svg](../pictures/drawsvg/07_cart2.svg)

Alternatively, apply `scale(1,-1)` to the whole drawing:

```sh
d = dw.Drawing(100, 100, id_prefix='cart3', transform='scale(1,-1)')
d.append(dw.Lines(0, 100, 0, 0, 100, 0,
                  fill='none', stroke='green', stroke_width=2))
d.append(dw.Lines(40, 40, 100, 40, 70, 70, 40, 70,
                  fill='silver', stroke='black', stroke_width=2))
d.append(dw.Text('upward y', 12, 5, 95))
d.save_svg('07_cart3.svg')
```

![svg](../pictures/drawsvg/07_cart3.svg)


## /9. Credits

Written by joachim heintz 2023.  Edited by Casey Duckering.

Most examples are based on J. David Eisenberg, SVG Essentials, O'Reilly 2002.

Thanks to [Ahmad Aufar Husaini](https://github.com/aufarah) for his fork (draw2Svg) and for providing some documentation [here](https://draw2svg.netlify.app/) (some examples are used in this Quick Reference).

Thanks to [Casey Duckering](https://github.com/cduck) for drawsvg and many helpful explanations on its [discussion page](https://github.com/cduck/drawsvg/discussions).