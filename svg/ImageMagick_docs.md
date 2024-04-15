#!/usr/bin/env bash

manual='/C/Program Files/ImageMagick-7.1.1-Q16-HDRI/www/index.html'
# cat "$manual" | /c/opendocs/html2md.ts >> $0
pushd "$(dirname "$manual")" >/dev/null

manual_page()
{
    while read file; do
        echo $file
        cat "$file" | grep '<\(Title\|title\)>'
    done <<<$(ls *.html)
}


exit
============================================================================

```sh
     # test
pwd; sleep 1
echo rm arc.png
      # test
magick -size 100x60 canvas:skyblue -fill white -stroke black \
  -draw "path 'M 30,40  A 30,20  20  0,0 70,20 A 30,20  20  1,0 30,40 Z '" \
  arc.png
echo after \
comment
ls -l arc.png;
sleep 5
# rm arc.png
```
![](arc.png)

/TOC
====
0. https://github.com/imagemagick/imagemagick
0. ImageMagick Doc https://imagemagick.org/script/index.php
1. Examples of ImageMagick Usage https://www.imagemagick.org/Usage/
2. Fred's ImageMagick Scripts http://www.fmwconcepts.com/imagemagick/index.php

[Download]: download.html
[Advanced Linux Source Installation]: advanced-linux-installation.html
[Advanced Unix Source Installation]: advanced-unix-installation.html
[Advanced Windows Source Installation]: advanced-windows-installation.html
[Install from Source]: install-source.html
[Sitemap]: sitemap.html
[History]: history.html
[Changelog]: changelog.html
[Security Policy]: security-policy.html
[License]: license.html
[Architecture]: architecture.html
[Examples of ImageMagick Usage]: examples.html
[Command-line Tools: Animate]: animate.html
[Command-line Options]: command-line-options.html
[Command-line Processing]: command-line-processing.html
[Command-line Tools]: command-line-tools.html
[Command-line Tools: Compare]: compare.html
[Command-line Tools: Composite]: composite.html
[Command-line Tools: Conjure]: conjure.html
[Command-line Tools: Convert]: convert.html
[Command-line Tools: Display]: display.html
[Command-line Tools: Identify]: identify.html
[Command-line Tools: Import]: import.html
[Command-line Tools: Magick-script]: magick-script.html
[Command-line Tools: Magick]: magick.html
[Command-line Tools: Mogrify]: mogrify.html
[Command-line Tools: Montage]: montage.html
[Command-line Tools: Stream]: stream.html
[Defines]: defines.html
[Image Formats]: formats.html
[WebP Encoding Options]: webp.html
[JP2 Encoding Options]: jp2.html
[Encipher or Decipher an Image]: cipher.html
[Magick Image File Format]: miff.html
[Magick Vector Graphics]: magick-vector-graphics.html
[Color Management]: color-management.html
[Color Thresholding]: color-thresholding.html
[Color Names]: color.html
[Alpha Compositing]: compose.html
[Contrast Limited Adaptive Histogram Equalization]: clahe.html
[Color Reduction Utilizing Adaptive Spatial Subdivision]: quantize.html
[Connected Components Labeling]: connected-components.html
[Convex Hull]: convex-hull.html
[Distributed Pixel Cache]: distribute-pixel-cache.html
[Format and Print Image Properties]: escape.html
[Exceptions]: exception.html
[Export Classification]: export.html
[The FX Special Effects Image Operator]: fx.html
[Image Gradients]: gradient.html
[High Dynamic-Range Images]: high-dynamic-range.html
[MagickCache: an Efficient Image Cache]: magick-cache.html
[MagickCore, Low-level C API]: magick-core.html
[Mirror]: mirror.html
[Motion Picture Digital Images]: motion-picture.html
[Parallel Execution with OpenCL]: opencl.html
[Parallel Execution with OpenMP]: openmp.html
[PerlMagick, Perl API]: perl-magick.html
[Porting to ImageMagick Version 7]: porting.html
[Develop]: develop.html
[Magick++, C++ API]: magick++.html
[MagickWand, C API]: magick-wand.html
[Resources]: resources.html
[Related Web Sites]: links.html
[Support ImageMagick Development]: support.html
[Contact the Development Team]: contact.html
[Voluntary Product Accessibility Template]: vpat.html
[How to Cite]: cite.html


/ImageMagick
============

  ImageMagick – Convert, Edit, or Compose Digital Images

[ImageMagick_ICON]: https://www.imagemagick.org/Usage/images/logo.gif
[ImageMagick_ICON]: https://imagemagick.org/image/wizard.png
[ImageMagick®]: http://tarr.uspto.gov/servlet/tarr?regser=serial&entry=78333969

![And Now a Touch of Magick][ImageMagick_ICON] [ImageMagick®] is a free, [open-source] software suite, used for editing and manipulating digital images. It can be used to create, edit, compose, or convert bitmap images, and supports a wide range of file [formats], including JPEG, PNG, GIF, TIFF, and PDF.

ImageMagick is widely used in industries such as web development, graphic design, and video editing, as well as in scientific research, medical imaging, and astronomy. Its versatile and customizable nature, along with its robust image processing capabilities, make it a popular choice for a wide range of image-related tasks.

ImageMagick includes a command-line interface for executing complex image processing tasks, as well as APIs for integrating its features into software applications. It is written in C and can be used on a variety of operating systems, including Linux, Windows, and macOS.

The main website for ImageMagick can be found at [https://imagemagick.org]. The most recent version available is [ImageMagick 7.1.0-62]. The source code for this software can be accessed through a [repository](https://github.com/ImageMagick/ImageMagick). In addition, we maintain a legacy version of ImageMagick, [version 6](https://legacy.imagemagick.org).

It is strongly recommended to establish a [security policy] suitable for your local environment before utilizing ImageMagick.

Features and Capabilities
-------------------------

One of the key features of ImageMagick is its support for scripting and automation. This allows users to create complex image manipulation pipelines that can be run automatically, without the need for manual intervention. This can be especially useful for tasks that require the processing of large numbers of images, or for tasks that need to be performed on a regular basis.

In addition to its core image manipulation capabilities, ImageMagick also includes a number of other features, such as support for animation, color management, and image rendering. These features make it a versatile tool for a wide range of image-related tasks, including graphic design, scientific visualization, and digital art.

Overall, ImageMagick is a powerful and versatile software suite for displaying, converting, and editing image files. Its support for scripting and automation, along with its other features, make it a valuable tool for a wide range of image-related tasks.

Here are just a few [examples] of what ImageMagick can do for you:

*   [Animation] create a GIF animation sequence from a group of images.

*   [Bilateral blur] non-linear, edge-preserving, and noise-reducing smoothing filter.

*   [Color management] accurate color management with color profiles or in 
    lieu of-- built-in gamma compression or expansion as demanded by the colorspace.

*   [Color thresholding] force all pixels in the color range to white otherwise black.

*   [Command-line processing] utilize ImageMagick from the command-line.

*   [Complex text layout](https://en.wikipedia.org/wiki/Complex_text_layout)
     bidirectional text support and shaping.

*   [Composite] overlap one image over another.

*   [Connected component labeling] uniquely label connected regions in an image.

*   [Convex hull] smallest area convex polygon containing the image foreground objects. 
    In addition, the minimum bounding box and unrotate angle are also generated.

*   [Decorate] add a border or frame to an image.

*   [Delineate image features] 
*   [Canny edge detection], [Hough lines]. 
*   [Discrete Fourier transform] implements the forward and inverse [DFT](https://en.wikipedia.org/wiki/Discrete_Fourier_transform).

*   [Distributed pixel cache] offload intermediate pixel storage to one or more remote servers.

*   [Draw] add shapes or text to an image.

*   [Encipher or decipher an image] convert ordinary images into unintelligible gibberish and back again.

*   [Format conversion] convert an image from one [format] to another (e.g. PNG to JPEG). 

*   [Generalized pixel distortion] correct for, or induce image distortions including perspective.

*   [Heterogeneous distributed processing] 
    certain algorithms are [OpenCL]-enabled to take advantage of speed-ups offered by executing in concert across het   erogeneous platforms consisting of CPUs, GPUs, and other processors. 

*   [High dynamic-range images] accurately represent the wide range of intensity levels found 
    in real scenes ranging from the brightest direct sunlight to the deepest darkest shadows.

*   [Histogram equalization] use adaptive histogram equalization to improve contrast in images.

*   [Image cache] secure methods and tools to cache images, image sequences, video, 
    audio or metadata in a local folder..

*   [Image calculator] apply a mathematical expression to an image, image sequence, or image channels.

*   [Image gradients] create a gradual blend of two colors 
    whose shape is horizontal, vertical, circular, or elliptical.

*   [Image identification] describe the format and attributes of an image.

*   [ImageMagick on the iPhone] convert, edit, or compose images 
    on your [iOS](https://www.apple.com/ios/) device such as the iPhone or iPad.

*   [Large image support] read, process, or write mega-, giga-, or tera-pixel image sizes.

*   [Montage] juxtapose image thumbnails on an image canvas.

*   [Morphology of shapes] extract features, describe shapes, and recognize patterns in images.

*   [Motion picture support] read and write the common image formats used in digital film work.

*   [Multispectral imagery] support multispectral imagery up to 64 bands.

*   [Noise and color reduction] [Kuwahara Filter](https://legacy.imagemagick.org/discourse-server/viewtopic.html?t=26480), [mean-shift](https://legacy.imagemagick.org/discourse-server/viewtopic.html?t=25504).

    [Perceptual hash](http://www.fmwconcepts.com/misc_tests/perceptual_hash_test_results_510/index.html)
    map visually identical images to the same or similar hash-- useful in image retrieval, authentication, indexing, or copy detection as well as digital watermarking.

*   [Special effects] blur, sharpen, threshold, or tint an image.

*   [Text & comments] insert descriptive or artistic text in an image.

*   [Threads of execution support] 
    ImageMagick is thread safe and most internal algorithms execute in [parallel] to take advantage of speed-ups off ered by multicore processor chips. 

*   [Transform] resize, rotate, deskew, crop, flip or trim an image.

*   [Transparency] render portions of an image invisible.

*   [Virtual pixel support] convenient access to pixels outside the image boundaries.

  

[Examples of ImageMagick Usage] demonstrates how to use the software from the [command line] to achieve various effects. There are also several scripts available on the website called [Fred's ImageMagick Scripts](http://www.fmwconcepts.com/imagemagick/), which can be used to apply geometric transforms, blur and sharpen images, remove noise, and perform other operations. Additionally, there is a tool called [Magick.NET](https://github.com/dlemstra/Magick.NET) that allows users to access the functionality of ImageMagick without having to install the software on their own systems. Finally, the website also includes a [Cookbook](http://im.snibgo.com/) with tips and examples for using ImageMagick on Windows systems.

#### Community

Join the ImageMagick community by participating in the [discussion](https://github.com/ImageMagick/ImageMagick/discussions) service. Here, you can find answers to questions asked by other ImageMagick users or ask your own questions. If you have a technical question, a suggestion for an improvement, or a fix for a bug, you can also open an [issue](https://github.com/ImageMagick/ImageMagick/issues) to get help from the community.

[Security] • [News] [![And Now a Touch of Magick] [Related] • [Sitemap]  

[Sponsor] • [Cite]

• [Public Key](http://pgp.mit.edu/pks/lookup?op=get&search=0x89AB63D48277377A) 
• [Contact Us](https://imagemagick.org/script/contact.php)  

• [GitHub](https://github.com/imagemagick/imagemagick)
• [Twitter](https://twitter.com/imagemagick)  

Copyright © 1999 ImageMagick Studio LLC

