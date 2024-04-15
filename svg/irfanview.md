#!/usr/bin/env bash

    chm2md()
    {
        chm=$1
        file=$2
        out=$3
        # 7z l "$chm" >&2;
        # 7z e "$chm" "$file"
        # subl "$file"; rm $file
        if [[ "$out" == "" ]]; then
            7z e -so "$chm" "$file" | /c/opendocs/html2md.ts
        else
            7z e -so "$chm" "$file" | /c/opendocs/html2md.ts >> $out
        fi
    }

    irfanview_chm2md()
    {
        chm="c:/Program Files/IrfanView/i_view64.chm"
        # 7z l "$chm" >> $0
        7z e -so "$chm" i_view64.hhc
        7z e -so "$chm" i_view64.hhk
        # chm2md "$chm" hlp_command_line.htm >> $0
        # chm2md "$chm" hlp_frequently_asked.htm >> $0
    }

    irfanview_set_ps()
    {
        view="c:/Program Files/IrfanView/i_view64.exe"
        echo "#!/usr/bin/env pwsh" > /c/vcpkg/i_view64.ps1
        echo "&'$view' \$args" >> /c/vcpkg/i_view64.ps1
    }

    irfanview_set_sh()
    {
        view="c:/Program Files/IrfanView/i_view64.exe"
        echo "#!/usr/bin/env bash" > /c/vcpkg/i_view64
        echo "'$view' \$@" >> /c/vcpkg/i_view64
    }

    ls .
    # i_view64 'C:/dl/tmp.png' /convert=C:/dl/tmp.jpg  # This Error
    # i_view64 'C:\dl\tmp.png' /convert=C:\dl\tmp.jpg  # This OK!
    # i_view64 C:\\dl\\tmp.png /convert=C:\dl\tmp.jpg  # This OK!
    i_view64 svg_test.svg /convert=c:\\dl\\tmp.png

exit
============================================================================

/Command Line Options
=====================

==> see the file "i_options.txt" (IrfanView folder) for the most recent version on all command line options.

Command line options allow you to set some functions of IrfanView before the viewer is launched.

These command line options are supported in IrfanView:

|       Arguments       |                                    Note                                   |
|-----------------------|---------------------------------------------------------------------------|
| /one                  | - force 'Only one instance'                                               |
| /fs                   | - force Full Screen display                                               |
| /bf                   | - force 'Fit images to desktop' display option                            |
| /title=text           | - set window title to 'text'                                              |
| /pos=(x,y)            | - move the window to x,y (if display option allows that)                  |
| /display=             | - set position, size, zoom and scroll position                            |
| (x,y,w,h,zoom,sX,sY)  | of the IrfanView window and image                                         |
| /convert=filename     | - save/convert input image(s)/file(s) to "filename" and CLOSE IrfanView   |
|                       | (see [Pattern page] for additional filename options)                      |
| /makecopy             | - for convert: if destination file exists,                                |
|                       | save new file as copy: (1), (2), (3) etc.                                 |
| /slideshow=txtfile    | - play slideshow with the files from 'txtfile'                            |
| /slideshow=folder     | - play slideshow with the files from 'folder'                             |
| /reloadonloop         | - reload input source used in /slideshow when list finished               |
| /filelist=txtfile     | - use filenames from "txtfile" as input, see examples below               |
| /file=filename(s)     | - use filename(s) as input, see examples below                            |
| /thumbs               | - open Thumbnails window                                                  |
| /killmesoftly         | - close all IrfanView instances (exit after command line)                 |
| /cmdexit              | - close current IrfanView after command line processing                   |
| /closeslideshow       | - close slideshow and close IrfanView after the last image                |
| /page=X               | - open page number X from a multipage input image                         |
| /crop=(x,y,w,h,C)     | - crop input image: x-start, y-start, width, height, C-start corner (0-4) |
| /print                | - print input image to default printer and close IrfanView                |
| /print="Name"         | - print input image to specific printer and close IrfanView               |
| /resize=(w,h)         | - resize input image to w (width) and h (height)                          |
| /resize_long=X        | - resize input image: set long side to X                                  |
| /resize_short=X       | - resize input image: set short side to X                                 |
| /resample             | - for resize: use Resample option (better quality)                        |
| /aspectratio          | - used for /resize, keep image proportions                                |
| /capture=X            | - [capture]) the screen or window                                         |
| /ini                  | - use the Windows folder for INI/LST files (read/save)                    |
| /ini="Folder"         | - use the folder "Folder" for INI/LST files (read/save)                   |
| /clippaste            | - paste image from the [clipboard])                                       |
| /clipcopy             | - copy image to the clipboard                                             |
| /silent               | - don't show error messages for command line read/save errors             |
| /invert               | - invert the input image (negative)                                       |
| /dpi=(x,y)            | - change DPI values, set DPIs for scanning                                |
| /scan                 | - acquire the image from the TWAIN device - show TWAIN [dialog])          |
| /scanhidden           | - acquire the image from the TWAIN device - hide TWAIN dialog             |
| /batchscan=(options)  | - simulate menu: File->Batch Scanning, see examples below                 |
| /bpp=BitsPerPixel     | - change color depth of the input image to BitsPerPixel                   |
| /swap_bw              | - swap black and white color                                              |
| /gray                 | - convert input image to [grayscale])                                     |
| /rotate_r             | - rotate input image to right                                             |
| /rotate_l             | - rotate input image to left                                              |
| /hflip                | - horizontal flip                                                         |
| /vflip                | - vertical flip                                                           |
| /filepattern="x"      | - browse only specific files                                              |
| /sharpen=X            | - open image and apply the sharpen [filter]) value X                      |
| /effect=(X,p1,p2)     | - apply effect filter X, see below for examples                           |
| /contrast=X           | - open image and apply the contrast value X                               |
| /bright=X             | - open image and apply the brighntess value X                             |
| /gamma=X              | - open image and apply the gamma correction value X                       |
| /advancedbatch        | - apply Advanced Batch Dialog options to image (from INI file)            |
| /hide=X               | - hide toolbar, status bar, menu and/or caption of the main window        |
| /transpcolor=(r,g,b)  | - set transparent color if saving as GIF/PNG/ICO                          |
| /info=txtfile         | - write image infos to "txtfile"                                          |
| /fullinfo             | - used for /info, write EXIF, IPTC and Comment data                       |
| /shortinfo            | - used for /info, write just file index and name                          |
| /append=tiffile       | - append image as (TIF) page to "tiffile"                                 |
| /multitif=(tif,files) | - create multipage TIF from input files                                   |
| /multipdf=(pdf,files) | - create multipage PDF from input files                                   |
| /panorama=(X,files)   | - create panorama image from input files; X = direction (1 or 2)          |
| /jpgq=X               | - set JPG save quality                                                    |
| /tifc=X               | - set TIF save compression                                                |
| /wall=X               | - set image as wallpaper; see below for /random and examples              |
| /extract=(folder,ext) | - extract all pages from a multipage/multiframe file                      |
| /import_pal=palfile   | - import and apply a special palette to the image (PAL format)            |
| /export_pal=palfile   | - export image palette to file (PAL format)                               |
| /jpg_rotate=(options) | - JPG lossless rotation, see examples below                               |
| /hotfolder="folder"   | - start Hotfolder option with a specific folder                           |
| /monitor=X            | - start EXE-Slideshow on monitor X                                        |
| /window=(x,y,w,h)     | - set EXE-Slideshow window position and size                              |
| /clearmonitors        | - play EXE-slideshow on one monitor, clear all other monitors             |

Notes:

   - Only lower case options are supported (don't type any UPPERCASE letters for options) !

   - Use "" for filenames/paths with spaces! (example: "c:\images\dummy test file.jpg")

   - Input filename (if required) is always the first parameter (unless /file or /filelist is used).

   - Write always the FULL paths for filenames (incl. drive letter).

   - You can combine several options in one command.

   - The commands will be processed in the order you write them.

   - Wildcards supported only for /convert, /multitif, /multipdf, /panorama, 
     /print, /info, /jpg_rotate and /extract.

   - Do not set any other commands after /batchscan or /scan, they won't be processed.

   - Maximal command line length is limited to 4096 chars: use Drag&Drop, 
     /file or /filelist for very large lists.

   - Most settings are loaded from the INI file. Using prepared INIs and 
     /ini=folder option, you can extend the possibilities.

   - IrfanView exit code is 0. If /convert or /print is used, there is 1 or 2 
     also possible, for load/save errors.

   - Please test (e.g. conversions) first in GUI mode => some options may 
     need to be set first (saved to INI file).

*   Example for **[conversion]**:

    ```sh
    i_view64.exe c:\test.bmp /convert=c:\test.jpg
    # Convert file: 'c:\test.bmp' to 'c:\test.jpg' without GUI.
    i_view64.exe c:\*.jpg /convert=d:\temp\*.gif
    i_view64.exe c:\*.jpg /resize=(500,300) /aspectratio /resample /convert=d:\temp\*.png
    i_view64.exe c:\*.jpg /resize_long=300 /aspectratio /resample /convert=d:\temp\outimage_###.jpg
    i_view64.exe /filelist=c:\mypics.txt /resize=(500,300) /aspectratio /resample /convert=d:\temp\*.png
    i_view64.exe c:\test.bmp /convert=c:\test_$Wx$H.jpg
    i_view64.exe c:\test.bmp /convert=c:\temp\$N.jpg
    i_view64.exe c:\test.bmp /convert=c:\temp\*.tif
    i_view64.exe c:\test.bmp /makecopy /convert=c:\temp\$N.jpg
    i_view64.exe c:\test.bmp /resize=(100,100) /resample /aspectratio /convert=d:\$N_thumb.jpg
    i_view64.exe c:\test.bmp /aspectratio /convert=d:\temp\$T(%Y%m%d)\test_$Wx$H.jpg
    i_view64.exe c:\test.bmp /convert=$D$N.jpg
    i_view64.exe c:\*.bmp /convert=$D$N.jpg
    i_view64.exe c:\*.jpg /advancedbatch /convert=c:\temp\*.jpg
    i_view64.exe c:\test.bmp /transpcolor=(255,255,255) /convert=c:\giftest.gif
    ```

    (Note:

    Supported are all IrfanView read/save formats except audio/video.)

*   Example for **slideshow**:

    i_view64.exe /slideshow=c:\mypics.txt

    (Note:

    The file 'c:\mypics.txt' contains, in each line, a name of an image, 
    including the full path OR path relative to "i_view64.exe".)

    ```sh
    i_view64.exe /slideshow=c:\mypics.txt /reloadonloop
    i_view64.exe /slideshow=c:\images\
    i_view64.exe /slideshow=c:\images\ /reloadonloop
    i_view64.exe /slideshow=c:\images\*.jpg
    i_view64.exe /slideshow=c:\images\test*.jpg
    i_view64.exe /slideshow="c:\images\" /filepattern="*.jpg;*.gif;*.png" /reloadonloop
    ```

    You have to close IrfanView after the last image from the TXT file, 
    if not /closeslideshow is used.

*   Example for **/closeslideshow**:

        i_view64.exe /slideshow=c:\mypics.txt /closeslideshow
    
    IrfanView will be closed after the last image from 'c:\mypics.txt'.

*   Example for **[thumbnails]**:

        i_view64.exe c:\test\image1.jpg /thumbs

    Open 'image1.jpg' and display thumbnails from folder/directory 'c:\test'.

        i_view64.exe c:\test\ /thumbs
        i_view64.exe /thumbs c:\test\

    Display thumbnails from folder/directory 'c:\test'.

        i_view64.exe /filelist=c:\mypics.txt /thumbs

    Load filenames from TXT file and display as thumbnails.

*   Example for **file**: (this option is nice if you need to send the input file(s) as last parameter)

    ```sh
    i_view64.exe /file=c:\image.jpg (same as "i_view64.exe c:\image.jpg")
    i_view64.exe /convert="c:\result\*.tif" /file=c:\image1.jpg
    i_view64.exe /convert="c:\result\*.tif" /file=c:\image1.jpg "c:\spacy image2.jpg" c:\image3.jpg
    i_view64.exe i_view64.exe /thumbs /file=c:\image1.jpg "c:\spacy image2.jpg" c:\image3.jpg
    ```

    (Hint:

    you can create a special IrfanView desktop (or "Send to") shortcut which can use
    the files from Drag&Drop with other options like: "i_view64.exe [options] /file=")

*   Example for **filelist**:

    ```sh
    i_view64.exe /filelist=c:\mypics.txt
    i_view64.exe /filelist=c:\mypics.txt /convert=d:\test\*.jpg
    i_view64.exe /filelist=c:\mypics.txt /thumbs
    ```

*   Example for **close**:  
    Close IrfanView and terminate all instances.

        i_view64.exe /killmesoftly


*   Example for **/page**:  
    Open page number 3 from the multipage image 'c:\test.tif'.

        i_view64.exe c:\test.tif /page=3


*   Example for **/display**:

    Load image and set window position and size, zoom to 50%, scroll positions to 0.

        i_view64.exe c:\test.jpg /display=(100,100,300,300,50,0,0)

    Load image and set window width, zoom to 50%, scroll positions to 30 (height and position = default/old).

        i_view64.exe c:\test.jpg /display=(,,300,,50,30,30)


*   Example for **/crop**:

    Start corner values: 0 = Left top, 1 = Right top, 2 = Left bottom, 3 = Right bottom, 4 = Center.

        i_view64.exe c:\test.jpg /crop=(10,10,300,300,0)

    Open 'c:\test.jpg' and crop: x-start=10, y-start=10, width=300, height=300, corner = Left top (in pixels).

        i_view64.exe c:\test.jpg /crop=(10,10,300,300,4) /convert=c:\giftest.gif

    Open 'c:\test.jpg' and crop: x-start=10, y-start=10, width=300, height=300, corner = center.

*   Example for **/print**:

    i_view64.exe c:\test.jpg /print

    Open 'c:\test.jpg', print the image to default printer and close IrfanView.

        i_view64.exe c:\test.jpg /print="Printer Name"

    Open 'c:\test.jpg', print the image to specific printer and close IrfanView.

        i_view64.exe c:\*.jpg /print

    Print all JPGs from "C:\" and close IrfanView.

    Note: The actual settings from the INI file are used.

*   Example for **/resize**:

        i_view64.exe c:\test.jpg /resize=(300,300) /resample

    Open 'c:\test.jpg' and resample: width=300, height=300.

    (Note: Resample uses the active resample filter from the INI file.)

        i_view64.exe c:\test.jpg /resize=(300,300) /aspectratio

    Open 'c:\test.jpg' and resize: width= max. 300, height= max. 300, proportional.

        i_view64.exe c:\test.jpg /resize_long=300 /aspectratio /resample

    Open 'c:\test.jpg' and resample: long side=300, short side=proportional.

        i_view64.exe c:\test.jpg /resize=(300,0)

    Open 'c:\test.jpg' and resize: width=300, height=original.

        i_view64.exe c:\test.jpg /resize=(300,0) /aspectratio

    Open 'c:\test.jpg' and resize: width=300, height=proportional.

        i_view64.exe c:\test.jpg /resize=(150p,150p)

    Open 'c:\test.jpg' and resize: width=150%, height=150%.

*   Example for **/capture**:

    ```sh
        # i_view64  /capture=5;
        pwsh -c 'i_view64 /capture=4'
    ```

    Capture the whole screen.

        i_view64.exe /capture=6

    Start in Capture mode, use last used capture dialog settings.

        i_view64.exe /capture=7

    Capture the screen rectangle from GUI/Capture dialog (=INI values).

        i_view64.exe /capture=7=(0,0,800,600)

    Capture the screen rectangle: x (0), y (0), width (800), height (600).

    capture values:
    
        0 = whole screen
        1 = current monitor, where mouse is located
        2 = foreground window
        3 = foreground window - client area
        4 = rectangle selection
        5 = object selected with the mouse
        6 = start in capture mode (can't be combined with other commandline options)
        7 = fixed rectangle (using capture dialog values or direct input)

    Advanced examples:

        i_view64.exe /capture=2 /convert=c:\test.jpg

    Capture foreground window and save result as file.

        i_view64.exe /capture=2 /convert=c:\capture_$U(%d%m%Y_%H%M%S).jpg

    Capture foreground window and save result as file; the filename contains time stamp.

*   Example for **/ini**:

    ```sh
    i_view64.exe c:\test.jpg /ini="c:\temp\"
    i_view64.exe /ini
    i_view64.exe c:\test.jpg /ini
    ```

*   Example for **/clippaste**:

    ```sh
    i_view64.exe /clippaste
    i_view64.exe /clippaste /convert=c:\test.gif
    ```
*   Example for **/clipcopy**:

    ```sh
    i_view64.exe c:\test.jpg /clipcopy
    i_view64.exe c:\test.jpg /clipcopy /killmesoftly
    ```

*   Example for **/invert**:

    i_view64.exe c:\test.jpg /invert

*   Example for **/dpi**:

    i_view64.exe c:\test.jpg /dpi=(72,72)

*   Example for **/scan**:

    With the scan command, you can only combine: /print, /dpi, /gray and /convert.

    ```sh
    i_view64.exe /scan
    i_view64.exe /scanhidden
    i_view64.exe /scanhidden /dpi=(150,150)
    i_view64.exe /scan /convert=c:\test.gif
    i_view64.exe /scan /append=c:\test.tif
    i_view64.exe /scan /append=c:\test.pdf
    i_view64.exe /scanhidden /convert=c:\test.gif
    i_view64.exe /scanhidden /gray /convert=c:\test.gif
    i_view64.exe /print /scan
    ```

*   Example for **/batchscan**=(options):

    options = all 8 options from the batch scanning dialog:

    filename, index, increment, digits, skip, dest-folder, save-extension, multi-tif

    ```sh
    i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0)
    i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0) /dpi=(150,150)
    i_view64.exe /batchscan=(scanfile,1,1,2,0,c:\temp,tif,1)
    i_view64.exe /batchscan=("crazy, filename",1,1,2,0,"c:\temp\crazy, (folder)",tif,1)
    i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0) /scanhidden
    ```

*   Example for **/bpp**:

        i_view64.exe c:\test.jpg /bpp=8

    Open 'c:\test.jpg' and reduce to 256 colors. Supported BPP-values: 1, 4, 8 
    and 24 (decrease/increase color depth).

*   Example for /filepattern:

    ```sh
    i_view64.exe c:\images\ /filepattern="*.jpg"
    # Go to folder "'c:\images" and load [JPGs]) only in the browse/file list.

    i_view64.exe c:\images\ /thumbs /filepattern="*.jpg"
    # Go to folder "'c:\images" and show [JPG]) thumbnails only.

    i_view64.exe c:\images\ /thumbs /filepattern="123*.jpg"
    # Go to folder "'c:\images" and show JPG with names "123*" as thumbnails.

    i_view64.exe c:\images\ /filepattern="*.jpg;*.gif;*.png"
    # Go to folder "'c:\images" and load only JPG, GIF and PNG files in the browse/file list.
    ```

*   Example for **/effect**=(effect-nr,param1,param2)::

        i_view64.exe c:\test.jpg /effect=(6,3,0)

    Apply Median filter, parameter = 3.

        i_view64.exe c:\test.jpg /effect=(2,3,50)

    Apply Blur-2 filter, parameter1 = 3, parameter2 = 50.

    effect-nr values: (from Effect-Browser dialog):

        1 = Blur
        2 = Gaussian Blur
        ...
        42 = Color Temperature
        80 = AltaLux

*   Example for **/sharpen**:

    i_view64.exe c:\test.jpg /sharpen=33

*   Example for **/hide**:

    Values (can be combined (add values)):

        1  Toolbar
        2  Status bar
        4  Menu bar
        8  Caption

    ```sh
    i_view64.exe c:\test.jpg /hide=1
    # Open 'c:\test.jpg', hide toolbar only.

    i_view64.exe c:\test.jpg /hide=3
    # Open 'c:\test.jpg', hide toolbar and status bar.

    i_view64.exe c:\test.jpg /hide=12
    # Open 'c:\test.jpg', hide caption and menu bar.

    i_view64.exe c:\test.jpg /hide=15
    # Open 'c:\test.jpg', hide all.
    ```

*   Example for **/info**:

    ```sh
    i_view64.exe c:\test.jpg /info=c:\test.txt
    i_view64.exe c:\test.jpg /info=c:\jpgs.txt /fullinfo
    i_view64.exe c:\*.jpg /info=c:\jpgs.txt
    ```

*   Example for **/append**:

    ```sh
    i_view64.exe c:\test.jpg /append=c:\test.pdf
    i_view64.exe c:\test.jpg /append=c:\test.tif
    ```
    Open 'c:\test.jpg ' and append it as page to 'c:\test.tif'.

*   Example for **/multitif**: (/multipdf is similar/identical)

    Syntax: /multitif=(tifname,file1,...,fileN)

    First file is the name of the result TIF file, wildcards for file1-N are allowed.

        i_view64.exe /multitif=(c:\test.tif,c:\test1.bmp,c:\dummy.jpg)

    Create multipage TIF ('c:\test.tif') from 2 other files.

    ```sh
    i_view64.exe /multitif=(c:\test.tif,c:\*.bmp)
    i_view64.exe /multitif=(c:\test.tif,filelist=c:\mypics.txt)
    i_view64.exe /multitif=(c:\test.tif,c:\*.bmp,c:\dummy.jpg,c:\123*.gif)
    ```

*   Example for **/panorama**:

    Syntax: /panorama=(X,file1,...,fileN)

    First parameter (X) is the direction: 1 = horizontal, 2 = vertical, wildcards for file1-N are allowed.

        i_view64.exe /panorama=(1,c:\test1.bmp,c:\dummy.jpg)

    Create horizontal panorama image from 2 other files.

    ```sh
    i_view64.exe /panorama=(1,c:\test.tif,c:\*.bmp)
    i_view64.exe /panorama=(2,c:\test.tif,c:\*.bmp,c:\dummy.jpg,c:\123*.gif)
    i_view64.exe /panorama=(2,c:\test.tif,"c:\crazy, comma filename.jpg")
    i_view64.exe /panorama=(2,filelist=c:\mypics.txt)
    ```

*   Example for **/jpgq**:

        i_view64.exe c:\test.jpg /jpgq=75 /convert=c:\new.jpg

    Open 'c:\test.jpg' and save it as 'c:\new.jpg', quality = 75. Quality range: 1 - 100.

*   Example for **/tifc**:

        i_view64.exe c:\test.jpg /tifc=4 /convert=c:\new.tif

    Open 'c:\test.jpg' and save it as 'c:\new.tif', compression = Fax4.

    Compressions:

    0 = None, 1 = LZW, 2 = Packbits, 3 = Fax3, 4 = Fax4, 5 = Huffman, 6 = JPG, 7 = ZIP.

*   Example for **/wall**:

        i_view64.exe c:\test.jpg /wall=0

    Open 'c:\test.jpg' and set is as wallpaper (centered).

    wall values: 0 (centered), 1 (tiled), 2 (stretched), 3 (stretched-proportional)

    ```sh
    i_view64.exe c:\images\*.jpg /random /wall=0 /killmesoftly
    i_view64.exe /filelist=c:\mypics.txt /random /wall=0 /killmesoftly
    ```
    Get random file from the folder/list and set as wallpaper.

*   Example for **/extract**:

        i_view64.exe c:\multipage.tif /extract=(c:\temp,jpg)

    Open 'c:\multipage.tif' and save all pages to folder 'c:\temp' as single JPGs.

    ```sh
    i_view64.exe c:\*.tif /extract=(c:\temp,jpg)
    i_view64.exe /filelist=c:\mypics.txt /extract=(c:\temp,jpg)
    i_view64.exe c:\animated.gif /extract=(c:\temp,bmp)
    ```

*   Example for **/hotfolder**:

        i_view64.exe /hotfolder="c:\input\"

    Scan 'c:\input\' folder for new images and display them. Uses timer settings from the [Hotfolder] menu/dialog.

        i_view64.exe "c:\input\test.jpg" /fs /hotfolder="c:\input\"

    Display an image in fullscreen mode, wait for new files in 'c:\input\' folder and display them.

*   Example for **EXE** slideshow:

    MySlideshow.exe /monitor=2

    => start standalone slideshow on monitor 2.

    MySlideshow.exe /window=(0,0,800,600)

    => start standalone slideshow in top left corner, window size 800x600.

    MySlideshow.exe /monitor=2 /clearmonitors

    => Start standalone slideshow on monitor 2, clear monitor 1 (and all other monitors).

*   Example for **/advancedbatch**:

        i_view64.exe c:\test.jpg /advancedbatch /convert=c:\image.jpg

    (some Misc. Advanced Batch options are not supported: overwrite, delete, subfolders, all pages)

    Open c:\test.jpg', apply Advanced Batch options from the INI file and save as new file.

*   Example for **/jpg_rotate**=(options):

    options = all 8 options from the JPG lossless dialog:

    transformation, optimize, EXIF date, current date, set DPI, DPI value, marker option, custom markers

    Note: this option will overwrite the original file(s)!

    Values:

    Transformation    : None (0), Vertical (1) ... Auto rotate (6)
    Optimize          : 0 or 1
    Set EXIF date     : 0 or 1 
    Keep current date : 0 or 1 
    Set DPI           : 0 or 1 
    DPI value         : number 
    Marker option     : Keep all (0), Clean all (1), Custom (2)
    Custom markers values (can be combined (add values)):

        1  Keep Comment
        2  Keep EXIF
        4  Keep IPTC
        8  Keep others

    i_view64.exe c:\test.jpg /jpg_rotate=(6,1,1,0,1,300,0,0) /cmdexit

    => Auto rotate, optimize, set EXIF date as file date, set DPI to 300, keep all markers

        i_view64.exe c:\test.jpg /jpg_rotate=(6,1,1,0,0,0,2,6) /cmdexit

    => Auto rotate, optimize, set EXIF date as file date, keep EXIF and IPTC markers

        i_view64.exe c:\test.jpg /jpg_rotate=(3,1,0,1,0,0,1,0) /cmdexit

    => Rotate 90, optimize, use current file date, clean all markers

        i_view64.exe c:\images\*.jpg /jpg_rotate=(6,1,1,0,0,0,0,0) /cmdexit

    => For all JPGs: Auto rotate, optimize, set EXIF date as file date, keep all markersFrequently Asked Questions     


/Frequently Asked Questions
===========================

The most recent (and frequently updated) version of this page is available on the IrfanView website:

[http://www.irfanview.com/faq.htm]

Here are some interesting questions about IrfanView, bug reports, etc.

*   Q:❓ 

    I want to create a CD-ROM with images and I wish to copy IrfanView on the CD. 
    How can I start IrfanView's Slideshow when I insert the CD in the drive?

*   A:✔ 

    You can create either a self running [EXE]) slideshow file (in the [slideshow dialog]) 
    or you can copy the original files to the CD and use a TXT file. Read [this page] for an example.

*   Q:❓ 

    Problem: If I try to play some AVIs, I get the error message "Video not available, 
    cannot find MJPG decompressor"!

*   A:✔ 

    Method 1: Go to '[Properties->Video'] and activate the option: 
    'Use DirectShow for playing'.

    Method 2: Please install the MJPG (Motion [JPEG])) video codec. 
    Try these sites:

    [http://www.free-codecs.com/Motion_JPEG_Codec_download.htm]

    [http://www.mainconcept.com/downloads.shtml]

    [http://www.morgan-multimedia.com]

    [http://www.fourcc.org/indexcod.htm]

*   Q:❓ 

    Generic problem with video files: If I try to play some AVIs, I get the 
    error message "Video not available, cannot find XXX decompressor"!

*   A:✔ 

    The correct video codec is not installed, please check this site for 
    the right codec (see in menu [Image->Information] for the codec name):

    [http://www.fourcc.org/indexcod.htm]

    [http://www.codec-download.com]

    [http://codecs.necromancers.ru]

    [http://www.free-codecs.com]

    [http://www.microsoft.com/downloads/results.aspx?productID=&freetext=media+8&DisplayLang=en]

    [http://www.videohelp.com]

    A good codec pack is the K-Lite Codec Pack, it contains the most popular video/audio codecs.

*   Q:❓ 

    How to reduce saved file size from XX to YY KB?

*   A:✔ 

    There is no one-click solution for that, sorry.

        * 1. Open an image.

        * 2. Go to menu Image->Resize/Resample and reduce the image dimensions in pixels.

        * 3. Go to menu File->Save As, choose JPG and save as new file (see also JPG save
        options like: lower JPG quality, uncheck EXIF, etc.).

        * 4. Look at the file size of the new file. If still too big, repeat the steps,
        using smaller pixel size and/or lower quality, etc.

    X.

    For many images, use menu File->Batch Conversion, Advanced options.

    Note: since version 4.20, a new JPG save option has been allowed: Set file size.

*   Q:❓ 

    Bug report: Since yesterday, IrfanView shows all my images black/white! Why?

*   A:✔ 

    The load option for JPGs "Load as grayscale" in '[Properties->JPG/PCD/GIF]' 
    is activated, please uncheck!| Note: in the Save dialog, see [JPG format save options]. 
    The option "Save as grayscale" must not be active.

*   Q:❓ 

    How to use JPG lossless operations (Rotation, IPTC, Comment) in batch mode?

*   A:✔ 

    Start the [Thumbnail] window, open the folder with JPGs, select many JPGs 
    and see in thumbnail menu File for JPG Lossless Operations à Lossless 
    transformations with selected thumbs. Note: The auto-rotation option works 
    only if the EXIF orientation tag is properly saved (not top-left).

*   Q:❓ 

    Is there a portable IrfanView version (for USB sticks, CDs etc.)?

*   A:✔ 

    Yes, EVERY IrfanView version is portable. You can:

    1. Copy your existing/installed IrfanView folder to USB stick (recommended), or

    2. Use the normal installer and install IrfanView to an USB stick folder, or

    3. Use the ZIP version and unzip to a USB stick folder.
    (Note: the ZIP version of IrfanView is always available on the website link
     "[Other download sites]", at the bottom of the page)

*   Q:❓  Why are some edit menus or the red eye menu greyed out?

*   A:✔ Many edit options or red eye reduction works on selections only.
    Create first a selection (outline rectangle) in the [image]) using the left mouse button.

*   Q:❓  How can I make IrfanView as my default viewer?

*   A:✔ Start IrfanView, go to '[Properties->Extensions]' and associate your types.

*   Q:❓ Why is RAW loading slow (Camera RAW formats, e.g. CR2)? 

*   A:✔ 

    This depends which RAW plugin options are used in [Properties->PlugIns]. 
    The preview option is the fastest, Half-size is fast and if both are deactivated: 
    the full RAW image is loaded => this is very slow.

*   Q:❓ How to sort pictures by date-taken?

*   A:✔ 

    Open [Thumbnails window] and load a folder. See thumbnails sort menu, use Sort by EXIF date.

*   Q:❓ How can I batch rename "JPG" files to "jpg" (lower case extensions)?

*   A:✔ In the [Batch-Conversion] dialog use the rename pattern: $N.jpg.

*   Q:❓ How can I add background sound for automatic slideshow or EXE/SCR?

*   A:✔ 

    In the [slideshow dialog] put/add [MP3]) files into the slideshow file list, 
    usually at the begin or before an image. The MP3 file is played until it 
    ends or until next MP3 is loaded from the file list. IrfanView PlugIns 
    should be also installed, at least the MP3 PlugIn.

*   Q:❓ 

    Batch conversion: How can I save result files in the original/source folder
     (even if files from several input subfolders are used)?

*   A:✔ 

    Use Advanced batch options, activate the option Create subfolders in 
    destination folder. As destination folder (main batch dialog), set the 
    root folder of your input files, e.g. C:\, if all input files are located on C drive.

*   Q:❓ 

    Why I can't scroll a large, zoomed (larger than screen) image in fullscreen mode using arrow/page keys?

*   A:✔ 

    Either is the image not really larger than screen or the option 
    [Properties->Browsing]->Always jump to next image ... active, please uncheck.

*   Q:❓ 

    Why is the saved JPG file much bigger than the original JPG file?

*   A:✔ 

    The JPG file size depends primary on JPG save quality, in the [Save dialog] 
    options. Normal quality is 75 or 80, higher values will produce larger result files.

*   Q:❓ 

    I downloaded IrfanView (or PlugIns) but when I start it, I get the message 
    "This is not a valid Win32 application"?

*   A:✔ 

    This message is shown for damaged/incomplete EXE files, probably a download error. 
    Download again, try another mirror or location.

*   Q:❓ 

    How can I add background sound to a VCD (Video CD)?

*   A:✔ 

    This is not possible by the VCD specification.

*   Q:❓ 

    Is IrfanView compatible with Windows 7,8,10/Vista/XP 64 bit?

*   A:✔ 

    YES, like probably 95% of all 32 bit programs.

*   Q:❓ 

    If I start IrfanView on Windows 7 (and later), the system asks me each time 
    about the start as Administrator, why?

*   A:✔ 

    Somebody, not IrfanView, set the program properties to "Run as administrator". 
    Disable this option (right click on IrfanView icon/EXE, Properties, tab: 
    Compatibility) and run IrfanView normally. Actually, no option should be 
    selected in the Compatibility tab for IrfanView.

*   Q:❓ 

    How can I change the icon for IrfanView associations?

*   A:✔ 

    Go to [Properties->Extensions] and choose the Miscellaneous button. 
    Here you can set other icon(s) for associated file types.

*   Q:❓ 

    Bug report: Since yesterday, IrfanView shows all images distorted/stretched! Why?

*   A:✔ 

    The View Menu option "[Fit images to desktop]" is activated (or a similar view option), 
    please uncheck and use the recommended display option.

*   Q:❓ 

    How to extract images from the EXE Slideshow?

*   A:✔ 

    Start the EXE and press F1 for help. Use E hotkey for extraction.

*   Q:❓ 

    How to change JPG IPTC/Comment data for many images (batch mode)?

*   A:✔ 

    In the [Thumbnails] window, select many JPG images/files and use the menu JPG 
    Lossless Operations à Set IPTC data/Comment to selected thumbs. The data 
    for the first image is applied to all files. The IPTC dialog offers additional options.

*   Q:❓ Are the JPG editing options for IPTC/Comment lossless?

*   A:✔ Yes, the image itself is NOT recompressed.

*   Q:❓ How can I load only desired file types during the browsing?

*   Q:❓ 

    How to exclude specific file extensions (e.g. TXT) from browsing through
    folder?

*   Q:❓
    IrfanView can load e.g. CR2 files, but the files are not shown in the
    Thumbnail window?

*   A:✔
    Go to [Properties->Extensions], edit the file extensions in field Load
    custom file types; delete unwanted or add special (but supported!) extensions
    .

*   Q:❓
    Bug report: If I decrease the color depth to 8 or less BPP, the saved
    JPG file is always 24 BPP?

*   A:✔
    Please note that a JPG can be only saved as 24 BPP or 8 BPP grayscale
    image. JPG do not allow other BPP values. If you want other BPP values, please
    use formats like PNG, TIF, BMP, etc.

*   Q:❓
    How can I change the desktop icon for IrfanView?

*   A:✔
    This is a standard Windows feature. Right click on the desktop icon,
    then 'Properties'. Now you can set another icon (change icon) or remove/change
    the hotkey for the program start.

*   Q:❓
    How can I load file types WITHOUT any extension during the browsing?

*   A:✔
    Go to [Properties->Extensions], edit the file extensions in field Load
    custom file types; add a | at the end, to create an empty extension entry.
    Optional: go to [Properties->File Handling] and disable the option: Ask to
    rename if incorrect extension.

*   Q:❓
    How to print only a part of the image?

*   A:✔
    Use left mouse button to select the desired part in the image, then use
    the [Print menu]. Alternative: [Edit->Crop], then print.

*   Q:❓
    How to print many files (batch print)?

*   A:✔
    In the [Thumbnails] window, you can select many images/files and use the
    menu Print selected files as single images.

*   Q:❓
    How load PDF files in IrfanView?

*   A:✔
    Install IrfanView and PlugIns. Install Ghostscript from e.g. [https:/
    /github.com/ArtifexSoftware/ghostpdl-downloads/releases/].

*   Q:❓
    How to print many images on one page?

*   A:✔
    In the [Thumbnails] window, use the menu Create contact sheet from
    selected thumbs. The result image(s) can be printed or saved.

*   Q:❓
    Is IrfanView compatible with Windows 95 or 98?

*   A:✔
    | IrfanView (4.44 and earlier) is compatible with all Win9x- and later
    Windows versions. Win9x means: Windows 95, 98, 98 SE and Windows ME.| Note:
    the last IrfanView version compatible with Win9x is 4.44. Version 4.50 and
    later can't be started on Win9x, only in WinXP and later.
*   Q:❓
    Is there a way to do batch scanning without having an ADF scanner?

*   A:✔
    Yes, uncheck the option in menu: File à Acquire/Batch scanning à Close
    TWAIN dialog after acquiring image.

*   Q:❓
    How to use Unicode (e.g. Chinese) text in the Insert-Text dialog?

*   A:✔
    Go to Windows Control Panel, Regional and Language settings (advanced
    settings), choose "Chinese" for the option "Language for non-Unicode programs"
    .

*   Q:❓
    How can I play QuickTime (MOV) files with IrfanView?

*   A:✔
    If you want to play all QuickTime files: install Apple QuickTime,
    install IrfanView PlugIns. Activate the Quicktime PlugIn for IrfanView in 
    [Properties->Video/Sound].

*   Q:❓
    Bug report: IrfanView won't save settings! Why?

*   A:✔
    There are 2 possibilities, first: your INI (i_view64.ini) file (or whole
    IrfanView folder) is set to read-only, please change that; second: some 
    "smart" washer/restore tools/plugins are washing too much, please exclude
    IrfanView files/folder from such actions. You can also redirect the INI file to
    another folder (see another question below); also possible during the
    installation.

*   Q:❓
    Bug report: The Add button in the slideshow/batch dialog won't add the
    selected file to the file list.

*   A:✔
    There is a Windows Explorer "feature": Hide file extensions for known
    file types. Please deactivate this default (and stupid) Explorer option to
    show files with their real names and extensions!

*   Q:❓
    Bug report: The thumbnail window crashes if I have many files in a
    folder!

*   A:✔
    This is a Windows 9x/XP bug (now also on Windows 7 64 bit => Blue
    screen, Windows bug), the max. number of files in the folder is system dependent.
    WinNT/Win2K works fine. Try to split files to several folders.

*   Q:❓
    Bug report: When I capture a video, why is the screen black?

*   A:✔
    Try to disable video acceleration in Settings à Control Panel à Display
    à Throubleshooting, during the screenshots. Or start a second player
    instance and try to capture it.

*   Q:❓
    Problem: When double click a file which is associated with IrfanView, I
    get an error message "Cannot find the file [path] or one of its components".
    What is the problem?

*   A:✔
    Start IrfanView, go to '[Properties->Extensions]' and associate your
    file types again.

*   Q:❓
    Bug report: IrfanView runs/starts very slowly on my system! Why?

*   A:✔
    Probably an old anti virus program or another background software is
    running, which causes such problems. Check your system.

*   Q:❓
    Bug report: The screensaver created by IrfanView shows just few images
    and then exits. Why?

*   A:✔
    The problem is caused by another running software, which kills the
    saver. Check your system.

*   Q:❓
    Upgrade: Is it necessary to uninstall the older version before
    installing the newer version?

*   A:✔
    No. Install a new version over any older version. After install, just
    refresh your associations/options under [Properties->Extensions].

*   Q:❓
    Can I use IrfanView on Linux?

*   A:✔
    | Yes. There is no native-Linux version of IrfanView. However, you can
    use IrfanView in conjunction with Linux programs like WINE, Windows Linux
    emulators and Linux-based virtual machines. See instructions on:| [http://www
    .wine-reviews.net/applications/irfanview-410-on-linux-with-wine.html]| Take
    the ZIP version of IrfanView and unzip it or copy your existing Windows
    IrfanView folder to Linux. This is easier because the installer may need
    additional Windows DLLs to run.
*   Q:❓
    Can I use IrfanView on Mac?

*   A:✔
    | Yes, probably. There is no native-Mac version of IrfanView. However,
    you can use IrfanView in conjunction with Mac program like WineBottler
    /DARWINE.| Take the ZIP version of IrfanView and unzip it or copy your existing
    Windows IrfanView folder to Mac. This is easier because the installer may need
    additional Windows DLLs to run.
*   Q:❓
    Basic: How can I convert e.g. a BMP image/file to JPG?

*   A:✔
    | Open a BMP file using the [File->Open] menu. Now go to [File->Save as]
    menu, choose JPG as output format, set the new filename/folder and save. If
    you want to convert many files, use the [Batch Conversion].| See also this
    video: [http://www.youtube.com/watch?v=cj-rDx1hH4A]
*   Q:❓
    Basic: Do I need IrfanView PlugIns?

*   A:✔
    Probably not. All basic options/features/PlugIns are included in the
    standard IrfanView installation. PlugIns contains usually special file formats.
    If you need a special PlugIn, IrfanView will show you an error message and
    then you can/should install all other PlugIns.

*   Q:❓
    Does IrfanView contain Spyware or Viruses, etc.?

*   A:✔
    NO. If your anti virus program reports a virus or spyware in IrfanView
    downloaded from the official homepages, you should either update the anti
    virus program or use a better one.

*   Q:❓
    Advanced: Is there a trick to hide program menu and caption permanently,
    similar to toolbar and status bar?

*   A:✔
    Yes. In the INI file, write in section [Menu] Active=0 to hide menu, in
    section [Caption] Active=0, to hide the program title.

*   Q:❓
    I am an administrator. How can I install IrfanView on a server/PC with
    same settings for all users?ent: 0px; padding: 0px 0px 0px 0px; margin: 0px
    0px 0px 0px;">

*   A:✔
    1) Install IrfanView on the server/PC.
    2) Set your IrfanView options (properties, etc.).
    Now set the INI file "i_view64.ini" to read-only. 
    The users can't change IrfanView options anymore.
    3) To prevent the registry changes (associations), you can hide the 
    [Properties->Extensions] dialog. Write in the INI file:
    ShowExtensionsDlg=0 in section [Extensions].

*   Q:❓
    I am an administrator. How can I install IrfanView on a server/PC but
    each user should save/use own INI files?

*   A:✔ 

    1) Install IrfanView on the server/PC.
    2) Write in the INI file (i_view64.ini on server/PC):
    INI_Folder=folder in section [Others].

    Examples:

    INI_Folder=C:\TEMP, or

    INI_Folder=%TEMP%, or

    INI_Folder=%APPDATA%\IrfanView, or

    INI_Folder=C:\TEMP\%YOUR_ENVIRONMENT_VARIABLE%, or

    INI_Folder=%YOUR_ENVIRONMENT_VARIABLE%\folder

*   Q:❓
    I am an administrator, IrfanView is installed on a server, each user hat 
    its own INI file. How to set the default program language to e.g. German/Deutsch?

*   A:✔ 

    Method 1: Prepare a special INI file with custom default settings and copy it over the local/users INI file.
    Method 2: Write in the global INI file (i_view64.ini on server):
    DefaultLang=dll-name in section [Language].

    Example for german:
    DefaultLang=deutsch.dll in section [Language].

*   Q:❓ I am an administrator. How can I silently install/uninstall IrfanView?

*   A:✔ 

    Usually, you can download the ZIP version of IrfanView and PlugIns and 
    deploy the files. Self install versions have special start options for 
    silent install (examples, version 4.20):

     1)    IrfanView:

     ```sh
    iview420_setup.exe /silent /folder="c:\test folder\irfanview"
    iview420_setup.exe /silent /folder="c:\test folder\irfanview" /desktop=1 /thumbs=1 /group=1 /allusers=0 /assoc=1 /ini="%APPDATA%\irfanview"
    iview420_setup.exe /silent /folder="c:\test folder\irfanview" /ini="c:\temp"
     ```

    Options:

    | folder:        | destination folder; if not indicated: old IrfanView folder is used,                    |
    |                | if not found: "Program Files" folder used                                              |
    | desktop:       | create desktop shortcut; 0 = no, 1 = yes (default: 0)                                  |
    | thumbs:        | create desktop shortcut for thumbnails; 0 = no, 1 = yes (default: 0)                   |
    | group:         | create group in Start Menu; 0 = no, 1 = yes (default: 0)                               |
    | allusers:      | desktop/group links are for all users; 0 = current user, 1 = all users                 |
    | assoc:         | if used, set file associations; 0 = none, 1 = images only, 2 = select all (default: 0) |
    | assocallusers: | if used, set associations for all users (Windows XP only)                              |
    | ini:           | if used, set custom INI file folder (system environment variables are allowed)         |

     2)    PlugIns: irfanview_plugins_420_setup.exe /silent

     3)    Uninstall: iv_uninstall.exe /silent

*   Q:❓ What is the IrfanView icon, is this a bear or devil or something else?

*   A:✔ This is a red CAT, a road cat. Note, I like cats, but this is a joke ;-)


Misc: Some IrfanView users created tutorials for specific features/operations. Thanks guys!

- Installation:

    [http://www.downloadtube.com/IrfanView-4-20-demo-installation-windows.html]

- Common:

    [http://www.downloadroute.com/IrfanView-Irfan-Skiljan/tutorials.html]
    
    [http://www.sticksite.com/irfanview/]
    
    [http://www.indeavors.com/resources/tutorials.htm]
    
    [http://www.cam-web.co.uk/IrfanviewTutorials]
    
    [http://www.pc-tinkering.de/search.php?search=Irfanview&language=1]
    
    [http://www.fotowelt-online.de/software/irfanview/index.php] (german)
    
    [http://www.lehrerfortbildung-bw.de/werkstatt/bild/irv/] (german)
    
    [http://www.henner.info/irfan.htm] (german)
    
    [http://www.infografik.ch/bro11_irfan.pdf] (german, PDF)
    
    [http://home.casema.nl/sve/irfanview/irfanview.htm] (dutch)

- Batch resize:

    [http://www.lancelotgroup.com/tutorials/HowToResize-IrFanView-Start.asp]
    
    [http://www.coffeedrunk.com/2008/10/08/how-to-do-a-batch-resize-using-irfanviewtutorial/]

- Command line:

    [http://www.netikka.net/tsneti/info/tscmd137.htm]

- Batch conversion:

    [http://www.photosapiens.com/article.php?id_article=1224] (french)
    
    [http://www.youtube.com/watch?v=dWvlvu_4NQc] (spanish)

- Contact sheet:

    [http://www.photosapiens.com/article.php?id_article=1694] (french)

- Cropping:

    [http://www.peterkjohnson.com/helpSheet/demoCroppingIrfanview/croppingIrfanview.html]

- Slideshow:

    [http://www.zisman.ca/Irfanview/]

- Install, etc.:

    [http://www.kulak.ac.be/renwv/nazorg/wegwijsweb/] (dutch)

- JPGs:

    [http://netzreport.googlepages.com/hidden_data_in_jpeg_files.html]

- Fractals:

    [http://benscheele.com/ag/fractal_art.htm]

Misc: Interesting links for special Windows problems:

- Wrong thumbnails in Explorer:

    [http://www2.whidbey.net/djdenham/Tweekz.htm]

- Video tools/conversions:

    [http://www.videohelp.com]


/Options
========

    -------------------------------------------------------------------------------
    File  : 'options.txt' - Command line options for IrfanView
    Author: Irfan Skiljan
    E-Mail: irfanview@gmx.net
    WWW   : http://www.irfanview.com
    -------------------------------------------------------------------------------

List of all command line options supported in IrfanView:
--------------------------------------------------------

    /one                  - force "Only one instance"
    /fs                   - force Full Screen display
    /bf                   - force "Fit images to desktop" display option
    /title=text           - set window title to "text"
    /pos=(x,y)            - move IrfanView window to x,y (if display option allows that)
    /display=(x,y,w,h,zoom,sX,sY) - set position, size, zoom and scroll position of the IrfanView window and image
    /convert=filename     - save/convert input image(s)/file(s) to "filename" and CLOSE IrfanView
                            (Note: See pattern help file page for more options)
    /makecopy             - for convert: if destination file exists, save new file as copy
    /slideshow=txtfile    - play slideshow with the files from "txtfile"
    /slideshow=folder     - play slideshow with the files from "folder"
    /reloadonloop         - reload input source used in /slideshow when list finished
    /filelist=txtfile     - use filenames from "txtfile" as input, see examples below
    /file=filename(s)     - use filename(s) as input, see examples below
    /thumbs               - open Thumbnails window
    /killmesoftly         - close all IrfanView instances (exit after command line)
    /cmdexit              - close current IrfanView after command line processing
    /closeslideshow       - close slideshow and IrfanView after the last image
    /page=X               - open page number X from a multipage input image
    /crop=(x,y,w,h,C)     - crop input image: x-start, y-start, width, height, C=start corner (0-4)
    /print                - print to default printer and CLOSE IrfanView
    /print="Name"         - print to specific printer and CLOSE IrfanView
    /resize=(w,h)         - resize input image to w (width) and h (height)
    /resize_long=X        - resize input image: set long side to X
    /resize_short=X       - resize input image: set short side to X
    /resample             - for resize: use Resample option (better quality)
    /aspectratio          - used for /resize: keep image proportions
    /capture=X            - capture the screen or window (see examples below)
    /ini                  - use the Windows folder for INI/LST files (read/save)
    /ini="Folder"         - use the folder "Folder" for INI/LST files (read/save)
    /clippaste            - paste image from the clipboard
    /clipcopy             - copy image to the clipboard
    /silent               - don't show messages for command line read/save errors
    /invert               - invert input image (negative)
    /dpi=(x,y)            - change image DPI values, set DPIs for scanning
    /scan                 - acquire the image from the TWAIN device (show TWAIN dialog)
    /scanhidden           - acquire the image from the TWAIN device (hide TWAIN dialog)
    /batchscan=(options)  - simulate menu: File->Batch Scan, see examples below
    /bpp=BitsPerPixel     - change color depth of the input image to BitsPerPixel
    /swap_bw              - swap (pure) black and white color in the image
    /gray                 - convert input image to grayscale
    /rotate_r             - rotate input image to right
    /rotate_l             - rotate input image to left
    /hflip                - horizontal flip
    /vflip                - vertical flip
    /filepattern="x"      - browse only specific files
    /effect=(x,p1,p2)     - apply effect filter X, see below for examples
    /sharpen=X            - open image and apply the sharpen filter value X
    /contrast=X           - open image and apply the contrast value X
    /bright=X             - open image and apply the brighntess value X
    /gamma=X              - open image and apply the gamma correction value X
    /advancedbatch        - apply Advanced Batch Dialog options to image (from INI file)
    /transpcolor=(r,g,b)  - set transparent color if saving as GIF/PNG/ICO
    /hide=X               - hide toolbar, status bar, menu and/or caption of the main window
    /info=txtfile         - write image infos to "txtfile"
    /fullinfo             - used for /info, write EXIF, IPTC and Comment data
    /shortinfo            - used for /info, write just file index and name
    /append=destfile      - append image as page to "destfile" (must be TIF or PDF)
    /multitif=(tif,files) - create multipage TIF from input files
    /multipdf=(pdf,files) - create multipage PDF from input files
    /panorama=(X,files)   - create panorama image from input files; X = direction (1 or 2)
    /contactsheet=(files) - create Contact Sheet image from input files (uses dialog options)
    /jpgq=X               - set JPG save quality
    /tifc=X               - set TIF save compression
    /wall=X               - set image as wallpaper, see below for /random and examples
    /extract=(folder,ext) - extract all pages from a multipage/multiframe file
    /import_pal=palfile   - import and apply a special palette to the image (PAL format)
    /export_pal=palfile   - export image palette to file (PAL format)
    /jpg_rotate=(options) - JPG lossless rotation, see examples below
    /hotfolder="folder"   - start Hotfolder option with a specific folder
    /monitor=X            - start EXE-Slideshow on monitor X
    /window=(x,y,w,h)     - set EXE-Slideshow window position and size
    /clearmonitors        - play EXE-slideshow on one monitor, clear all other monitors


Important notes:
- Only lower case options are supported (don't type any UPPERCASE letters for options) !
- Use "" for file names/paths with spaces! (example: "c:\images\dummy test file.jpg")
- Input file name (if required) is always the first parameter (unless /file or /filelist is used)
- Write always the FULL paths for file names (incl. drive letter)
  (hint for BAT files with relative paths: use the variable "%~dp0" to get the current path)
- You can combine several options in one command
- The commands will be processed in the order you write them
- Wildcards supported only for: /convert, /multitif, /multipdf, /panorama, /print, /info /jpg_rotate and /extract
- Do not set any other commands after /batchscan, /scan, /capture=5 or 6, they won't be processed
- Maximal command line length is limited to 4096 chars: use Drag&Drop, /file or /filelist for very large lists
- Most settings are loaded from the INI file. Using prepared INIs and /ini option, you can extend the possibilities.
- IrfanView exit code is 0. If /convert or /print is used, there is 1 or 2 also possible, for load/save error.
- Please test (e.g. conversions) first in GUI mode => some options may need to be set first (saved to INI file).


*   Example for **conversion**: 
  i_view64.exe c:\test.bmp /convert=c:\giftest.gif
  => Convert file: 'c:\test.bmp' to 'c:\giftest.gif' without GUI ;-)
  i_view64.exe c:\*.jpg /convert=d:\temp\*.gif
  i_view64.exe c:\*.jpg /resize=(500,300) /aspectratio /resample /convert=d:\temp\*.png
  i_view64.exe c:\*.jpg /resize_long=300 /aspectratio /resample /convert=d:\temp\outimage_###.jpg
  i_view64.exe /filelist=c:\mypics.txt /resize=(500,300) /aspectratio /resample /convert=d:\temp\*.png
  i_view64.exe c:\test.bmp /convert=c:\test_$Wx$H.jpg
  i_view64.exe c:\test.bmp /convert=c:\temp\$N.jpg
  i_view64.exe c:\test.bmp /convert=c:\temp_$#_number_sign\test.jpg
  i_view64.exe c:\test.bmp /convert=c:\temp\*.tif
  i_view64.exe c:\test.bmp /makecopy /convert=c:\temp\$N.jpg
  i_view64.exe c:\test.bmp /resize=(100,100) /resample /aspectratio /convert=d:\$N_thumb.jpg
  i_view64.exe c:\test.bmp /convert=c:\temp\$T(%Y%m%d)\test_$Wx$H.jpg
  i_view64.exe c:\test.bmp /convert=$D$N.jpg
  i_view64.exe c:\*.bmp /convert=$D$N.jpg
  i_view64.exe c:\*.jpg /advancedbatch /convert=c:\temp\*.jpg
  i_view64.exe c:\test.bmp /transpcolor=(255,255,255) /convert=c:\giftest.gif
  (Note: supported are all IrfanView read/save formats except audio/video)

*   Example for **slideshow**: 
  i_view64.exe /slideshow=c:\mypics.txt
  (Note: The file 'c:\mypics.txt' contains, in each line, a name of an image file, including the full path OR path relative to "i_view64.exe")
  (Lines starting with ";" will be ignored and can be used as comment)
  i_view64.exe /slideshow=c:\mypics.txt /reloadonloop
  i_view64.exe /slideshow=c:\images\
  i_view64.exe /slideshow=c:\images\ /reloadonloop
  i_view64.exe /slideshow=c:\images\*.jpg
  i_view64.exe /slideshow=c:\images\test*.jpg
  i_view64.exe /slideshow="c:\images\" /filepattern="*.jpg;*.gif;*.png" /reloadonloop
  Note: you have to close IrfanView after the last image from the TXT file, if no /closeslideshow is used.

*   Example for **closeslideshow**: 
  i_view64.exe /slideshow=c:\mypics.txt /closeslideshow
  => IrfanView will be closed after the last image from 'c:\mypics.txt'

*   Example for **thumbnails**: 
  i_view64.exe c:\test\image1.jpg /thumbs
  => open 'image1.jpg' and display thumbnails from directory 'c:\test'
  i_view64.exe c:\test /thumbs
  i_view64.exe /thumbs c:\test
  => display thumbnails from directory 'c:\test'
  i_view64.exe /filelist=c:\mypics.txt /thumbs
  => load filenames from TXT file and display as thumbnails

*   Example for **file**: (this option is nice if you need to send the input file(s) as last parameter)
  i_view64.exe /file=c:\image.jpg (same as "i_view64.exe c:\image.jpg")
  i_view64.exe /convert="c:\result\*.tif" /file=c:\image1.jpg
  i_view64.exe /convert="c:\result\*.tif" /file=c:\image1.jpg "c:\spacy image2.jpg" c:\image3.jpg
  i_view64.exe /thumbs /file=c:\image1.jpg "c:\spacy image2.jpg" c:\image3.jpg
  Hint: you can create a special IrfanView desktop (or "Send to") shortcut which can use the files from Drag&Drop with other options like: "i_view64.exe [options] /file="

*   Example for **filelist**: 
  i_view64.exe /filelist=c:\mypics.txt
  i_view64.exe /filelist=c:\mypics.txt /convert=d:\test\*.jpg
  i_view64.exe /filelist=c:\mypics.txt /thumbs

*   Example for **close**: 
  i_view64.exe /killmesoftly
  => close IrfanView and terminate all instances

*   Example for **page**:
  i_view64.exe c:\test.tif /page=3
  => Open page number 3 from the multipage image 'c:\test.tif'

*   Example for **/display**:
  i_view64.exe c:\test.jpg /display=(100,100,300,300,50,0,0)
  => Load image and set window position and size, zoom to 50%, scroll positions to 0
  i_view64.exe c:\test.jpg /display=(,,300,,50,30,30)
  => Load image and set window width, zoom to 50%, scroll positions to 30 (height and position = default/old)

*   Example for **crop**:   
  Start corner values: 0 = Left top, 1 = Right top, 2 = Left bottom, 3 = Right bottom, 4 = Center
  i_view64.exe c:\test.jpg /crop=(10,10,300,300,0)
  => Open 'c:\test.jpg' and crop: x-start=10, y-start=10, width=300, height=300, corner = Left top
  i_view64.exe c:\test.jpg /crop=(-10,-20,300,300,4) /convert=c:\giftest.gif
  => Open 'c:\test.jpg' and crop: x-start=-10, y-start=-20, width=300, height=300, corner = center

*   Example for **print**:
  i_view64.exe c:\test.jpg /print
  => Open 'c:\test.jpg', print the image to default printer and close IrfanView
  i_view64.exe c:\test.jpg /print="Printer Name"
  => Open 'c:\test.jpg', print the image to specific printer and close IrfanView
  i_view64.exe c:\*.jpg /print
  => Print all JPGs from "C:\" and close IrfanView
  Note: the current settings from the INI file are used.

*   Example for **resize**:
  i_view64.exe c:\test.jpg /resize=(300,300) /resample
  => Open 'c:\test.jpg' and resample: width=300, height=300
  (Note: Resample uses the the active resample filter from the INI file)
  i_view64.exe c:\test.jpg /resize=(300,300) /aspectratio
  => Open 'c:\test.jpg' and resize: width = max. 300, height = max. 300, proportional
  i_view64.exe c:\test.jpg /resize=(300,0)
  => Open 'c:\test.jpg' and resize: width=300, height=original
  i_view64.exe c:\test.jpg /resize=(300,0) /aspectratio
  => Open 'c:\test.jpg' and resize: width=300, height=proportional
  i_view64.exe c:\test.jpg /resize_long=300 /aspectratio /resample
  => Open 'c:\test.jpg' and resample: long side=300, short side=proportional
  i_view64 c:\test.jpg /resize=(150p,150p)
  => Open 'c:\test.jpg' and resize: width=150%, height=150%
  i_view64 c:\test.jpg /resize=(33.33p,44.44p)
  => Open 'c:\test.jpg' and resize: width=33.33%, height=44.44%

*   Example for **capture**:
  i_view64.exe /capture=0
  => Capture the whole screen
  i_view64.exe /capture=6
  => start in Capture mode, use last used capture dialog settings
  i_view64.exe /capture=7
  => Capture the screen rectangle from GUI/Capture dialog (=INI values)
  i_view64.exe /capture=7=(0,0,800,600)
  => Capture the screen rectangle: x (0), y (0), width (800), height (600)
  capture values: 
  0 = whole screen
  1 = current monitor
  2 = foreground window
  3 = foreground window - client area
  4 = rectangle selection
  5 = object selected with the mouse (can't be combined with other commandline options)
  6 = start in capture mode (can't be combined with other commandline options)
  7 = fixed rectangle (using capture dialog values or direct input)
  Advanced examples:
  i_view64.exe /capture=2 /convert=c:\test.jpg
  Capture foreground window and save result as file.
  i_view64.exe /capture=2 /convert=c:\capture_$U(%d%m%Y_%H%M%S).jpg
  Capture foreground window and save result as file; file name contains time stamp.

*   Example for **ini**:
  i_view64.exe c:\test.jpg /ini="c:\temp\"
  i_view64.exe /ini
  i_view64.exe c:\test.jpg /ini

*   Example for **clipboard** paste:
  i_view64.exe /clippaste
  i_view64.exe /clippaste /convert=c:\test.gif

*   Example for **clipboard** copy:
  i_view64.exe c:\test.jpg /clipcopy
  i_view64.exe c:\test.jpg /clipcopy /killmesoftly

*   Example for **/invert**:
  i_view64.exe c:\test.jpg /invert

*   Example for **/dpi**:
  i_view64.exe c:\test.jpg /dpi=(72,72)

*   Example for **/scan**:
  With the scan command, you can only combine: /print, /dpi, /gray and /convert.
  i_view64.exe /scan
  i_view64.exe /scanhidden
  i_view64.exe /scanhidden /dpi=(150,150)
  i_view64.exe /scan /convert=c:\test.jpg
  i_view64.exe /scan /append=c:\test.tif
  i_view64.exe /scan /append=c:\test.pdf
  i_view64.exe /scanhidden /convert=c:\test.jpg
  i_view64.exe /scanhidden /convert=c:\test_$U(%d%m%Y_%H%M%S).jpg
  i_view64.exe /scanhidden /gray /convert=c:\test.jpg
  i_view64.exe /print /scan

*   Example for **/batchscan**=(options):
  options = 8 options from the batch scan dialog:
  filename, index, increment, digits, skip, dest-folder, save-extension, multi-tif
  i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0)
  i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0) /dpi=(150,150)
  i_view64.exe /batchscan=(scanfile,1,1,2,0,c:\temp,tif,1)
  i_view64.exe /batchscan=("crazy, filename",1,1,2,0,"c:\temp\crazy, (folder)",tif,1)
  i_view64.exe /batchscan=(scanfile,1,1,2,1,c:\temp,bmp,0) /scanhidden

*   Example for **/bpp**:
  i_view64.exe c:\test.jpg /bpp=8
  Supported BPP-values: 1, 4, 8 and 24 (decrease/increase color depth)
  => Open 'c:\test.jpg' and reduce to 256 colors

*   Example for **/filepattern**:
  i_view64.exe c:\images\ /filepattern="*.jpg"
  => Go to folder "c:\images\" and load JPGs only in the browse/file list
  i_view64.exe c:\images\ /thumbs /filepattern="*.jpg"
  => Go to folder "c:\images\" and show JPG thumbnails only 
  i_view64.exe c:\images\ /thumbs /filepattern="123*.jpg"
  => Go to folder "c:\images\" and show JPG with names "123*" as thumbnails
  i_view64.exe c:\images\ /filepattern="*.jpg;*.gif;*.png"
  => Go to folder "c:\images\" and load only JPG, GIF and PNG files in the browse/file list

*   Example for **/effect**=(effect-nr,param1,param2):
  i_view64.exe c:\test.jpg /effect=(8,3,0)
  => apply Median filter, parameter = 3
  i_view64.exe c:\test.jpg /effect=(4,3,50)
  => apply Blur-2 filter, parameter1 = 3, parameter2 = 50
  effect-nr values: (from Effect-Browser dialog)
  1 = Blur
  2 = Gaussian Blur
  ...
  43 = Color Temperature
  80 = AltaLux
 
*   Example for **/sharpen**:
  i_view64.exe c:\test.jpg /sharpen=33

Examples for /hide:
  Values (can be combined (add values)):
    Toolbar     1
    Status bar  2
    Menu bar    4
    Caption     8
  i_view64.exe c:\test.jpg /hide=1
  => Open 'c:\test.jpg', hide toolbar only
  i_view64.exe c:\test.jpg /hide=3
  => Open 'c:\test.jpg', hide toolbar and status bar
  i_view64.exe c:\test.jpg /hide=12
  => Open 'c:\test.jpg', hide caption and menu bar
  i_view64.exe c:\test.jpg /hide=15
  => Open 'c:\test.jpg', hide all

Examples for /info:
  i_view64.exe c:\test.jpg /info=c:\test.txt
  i_view64.exe c:\*.jpg /info=c:\jpgs.txt
  i_view64.exe c:\*.jpg /info=c:\jpgs.csv
  i_view64.exe c:\test.jpg /info=c:\test.txt /fullinfo

*   Example for **/append**:
  i_view64.exe c:\test.jpg /append=c:\test.pdf
  i_view64.exe c:\test.jpg /append=c:\test.tif
  => Open 'c:\test.jpg' and append it as page to 'c:\test.tif'

*   Example for **/multitif** (/multipdf is similar/identical):
  Syntax: /multitif=(tifname,file1,...,fileN)
  First file is the name of the result TIF file, wildcards for file1-N are allowed.
  i_view64.exe /multitif=(c:\test.tif,c:\test1.bmp,c:\dummy.jpg)
  => Create multipage TIF (c:\test.tif) from 2 other files
  i_view64.exe /tifc=1 /multitif=(c:\test.tif,c:\*.bmp)
  i_view64.exe /multitif=(c:\test.tif,c:\*.bmp,c:\dummy.jpg,c:\123*.gif)
  i_view64.exe /multitif=("c:\test.tif",filelist="c:\mypics.txt")

*   Example for **/panorama**:
  Syntax: /panorama=(X,file1,...,fileN)
  First parameter (X) is the direction: 1 = horizontal, 2 = vertical, wildcards for file1-N are allowed.
  i_view64.exe /panorama=(1,c:\test1.bmp,c:\dummy.jpg)
  => Create horizontal panorama image from 2 other files
  i_view64.exe /panorama=(1,c:\test.tif,c:\*.bmp)
  i_view64.exe /panorama=(2,c:\test.tif,c:\*.bmp,c:\dummy.jpg,c:\123*.gif)
  i_view64.exe /panorama=(2,c:\test.tif,"c:\crazy, comma filename.jpg")
  i_view64.exe /panorama=(2,filelist="c:\mypics.txt")

*   Example for **/contactsheet**:
  Syntax: /contactsheet=(file1,...,fileN)
  i_view64.exe /contactsheet=(c:\test1.bmp,c:\dummy.jpg)
  => Create contact sheet image from 2 other files
  i_view64.exe /contactsheet=("c:\*.bmp")
  i_view64.exe /contactsheet=(c:\*.bmp,c:\dummy.jpg,c:\123*.gif)
  i_view64.exe /contactsheet=(filelist="c:\mypics.txt")

*   Example for **/jpgq**:
  i_view64.exe c:\test.jpg /jpgq=75 /convert=c:\new.jpg
  => Open 'c:\test.jpg' and save it as c:\new.jpg, quality = 75
  Quality range: 1 - 100.

*   Example for **/tifc**:
  i_view64.exe c:\test.jpg /tifc=4 /convert=c:\new.tif
  => Open 'c:\test.jpg' and save it as c:\new.tif, compression = Fax4
  Compressions: 0 = None, 1 = LZW, 2 = Packbits, 3 = Fax3, 4 = Fax4, 5 = Huffman, 
  6 = JPG, 7 = ZIP

*   Example for **wallpaper**:
  i_view64.exe c:\test.jpg /wall=0
  => Open 'c:\test.jpg' and set is as wallpaper (centered)
  wall values: 0 (centered), 1 (tiled), 2 (stretched), 3 (proportional), 4 (fill)
  i_view64.exe c:\images\*.jpg /random /wall=0 /killmesoftly
  i_view64.exe /filelist=c:\mypics.txt /random /wall=0 /killmesoftly
  => get random file from the folder/list and set as wallpaper

*   Example for **/extract**:
  i_view64.exe c:\multipage.tif /extract=(c:\temp,jpg)
  => Open 'c:\multipage.tif' and save all pages to folder 'c:\temp' as JPGs
  i_view64.exe c:\*.tif /extract=(c:\temp,jpg)
  i_view64.exe /filelist=c:\mypics.txt /extract=(c:\temp,jpg)
  i_view64.exe c:\animated.gif /extract=(c:\temp,bmp)

*   Example for **hotfolder**:
  i_view64.exe /hotfolder="c:\input\"
  Scan 'c:\input\' folder for new images and display them. Uses timer settings from the Hotfolder menu/dialog.
  i_view64.exe "c:\input\test.jpg" /fs /hotfolder="c:\input\"
  Display an image in fullscreen mode, wait for new files in 'c:\input\' folder and display them.

Examples for EXE slideshow:
  MySlideshow.exe /monitor=2
  => Start standalone slideshow on monitor 2
  MySlideshow.exe /window=(0,0,800,600)
  => Start standalone slideshow in top left corner, window size 800x600
  MySlideshow.exe /monitor=2 /clearmonitors
  => Start standalone slideshow on monitor 2, clear monitor 1 (and all other monitors)

*   Example for **/advancedbatch**:
  i_view64.exe c:\test.jpg /advancedbatch /convert=c:\image.jpg
  (some Misc. Advanced Batch options are not supported: overwrite, delete, subfolders, all pages)
  => Open 'c:\test.jpg', apply Advanced Batch options from the INI file and save as new file

*   Example for **/jpg_rotate**=(options):
  options = 8 options from the JPG lossless dialog:
  transformation, optimize, EXIF date, current date, set DPI, DPI value, marker option, custom markers
  Note: this option will overwrite the original file(s)!
  Values:
  Transformation   : None (0), Vertical (1) ... Auto rotate (6)
  Optimize         : 0 or 1
  Set EXIF date    : 0 or 1
  Keep current date: 0 or 1
  Set DPI          : 0 or 1
  DPI value        : number
  Marker option    : Keep all (0), Clean all (1), Custom (2)
  Custom markers values (can be combined (add values)):
    Keep Comment 1
    Keep EXIF    2
    Keep IPTC    4
    Keep others  8
  i_view64.exe c:\test.jpg /jpg_rotate=(6,1,1,0,1,300,0,0) /cmdexit
  => Auto rotate, optimize, set EXIF date as file date, set DPI to 300, keep all markers
  i_view64.exe c:\test.jpg /jpg_rotate=(6,1,1,0,0,0,2,6) /cmdexit
  => Auto rotate, optimize, set EXIF date as file date, keep EXIF and IPTC markers
  i_view64.exe c:\test.jpg /jpg_rotate=(3,1,0,1,0,0,1,0) /cmdexit
  => Rotate 90, optimize, use current file date, clean all markers
  i_view64.exe c:\images\*.jpg /jpg_rotate=(6,1,1,0,0,0,0,0) /cmdexit
  => For all JPGs: Auto rotate, optimize, set EXIF date as file date, keep all markers
