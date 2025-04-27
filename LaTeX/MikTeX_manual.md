#!/usr/bin/env bash

url=https://docs.miktex.org/manual/
while read url; do
    curl -s -L "$url" | /od/html2md.ts utf8 
    #curl -s -L "$url" | /od/html2md.ts utf8 | sed -n '/[Next]/,${s/.*[Next].*//; p}'
done <<EOF
https://inkscape.gitlab.io/extensions/documentation/
EOF

exit
=============================================================================

/MiKTeX Manual R4.6
=====================
[MiKTeX Manual Revision 4.6 Christian Schenk](https://docs.miktex.org/manual/)


### Christian Schenk

Copyright © 2023 Christian Schenk

Permission is granted to make and distribute verbatim copies of this manual 
provided the copyright notice and this permission notice are preserved on all 
copies.

Permission is granted to copy and distribute modified versions of this manual 
under the conditions for verbatim copying, provided that the entire resulting 
derived work is distributed under the terms of a permission notice 
identical to this one.

Permission is granted to copy and distribute translations of this manual into 
another language, under the above conditions for modified versions, except 
that this permission notice may be stated in a translation approved by the 
Free Software Foundation.

* * *

**Table of Contents**

* [About this Document]
* [I. User Guide]
* [1. Introduction]
*   [About this Manual]
*   [About MiKTeX]
*   [How to Get MiKTeX]
*   [Give Back]
*   [The MiKTeX Project Page]
*   [Documentation]
* [2. Installing MiKTeX]
*   [Windows]
*   [macOS]
*   [Linux]
* [3. Using MiKTeX]
*   [Getting Started]
*   [Unique TeX features]
*   [Automatic Package Installation]
*   [Finding out Package Usages]
*   [Specifying Additional Input Directories]
*   [Specifying the Directory for Auxiliary Files]
*   [texify: The MiKTeX Compiler Driver]
*   [Printing]
*   [Using a Viewer to Print DVI/PDF Files]
*   [Using mtprint to Print DVI Files]
* [4. Maintenance]
*   [Refreshing the File Name Database]
*   [Setting the Preferred Paper Format]
*   [Installing Updates]
*   [Automatic Package Installation]
*   [Integrating Local Additions]
* [5. Advanced Topics]
*   [Managing Font Map Files]
*   [Changing TEXMF run-time parameters]
* [II. Reference]
* [6. Programs]
*   [miktex-bibtex] — make a bibliography for LaTeX
*   [miktex-dvicopy] — produce modified copy of DVI file
*   [miktex-dvips] — convert a DVI file to PostScript
*   [findtexmf] — search files in MiKTeX directories
*   [miktex-gftodvi] — make proof sheets from generic font files
*   [initexmf] — MiKTeX configuration utility
*   [miktex-filesystem] — watch the file system
*   [miktex-filetypes] — manage Windows filetypes
*   [miktex-fndb] — manage the MiKTeX file name database
*   [miktex-fontmaps] — manage PDF/PostScript font maps
*   [miktex-formats] — manage TeX formats
*   [miktex-links] — manage links from scripts and formats to executables
*   [miktex-languages] — manage LaTeX language definitions
*   [miktex-luatex] — an extended version of pdfTeX using Lua as an embedded scripting language
*   [miktex-mf] — METAFONT, a language for font and logo design
*   [miktex-mpost] — MetaPost, a system for creating graphics
*   [miktex-packages] — manage MiKTeX packages
*   [miktex-repositories] — manage MiKTeX package repositories
*   [miktex] — One MiKTeX Utility
*   [miktexsetup] — MiKTeX setup utility
*   [mpm] — MiKTeX package manager
*   [mthelp] — MiKTeX help utility
*   [mtprint] — MiKTeX print utility
*   [miktex-pdftex] — DVI/PDF output from TeX
*   [setupwiz] — MiKTeX setup wizard
*   [miktex-tex] — text formatting and typesetting
*   [texify] — MiKTeX compiler driver
*   [miktex-xetex] — Unicode-based TeX engine
* [7. Files]
*   [miktex.ini] — MiKTeX configuration data store
*   [pdftex.cfg] — configuration settings for MiKTeX-pdfTeX
* [8. Environment variables]
* [9. Trace Streams]
* [10. Run-Time Defaults]
* [All MiKTeX Programs]
* [BibTeX]
* [All TeXMF Programs]
* [All TeX Programs]
* [pdfTeX]
* [METAFONT & MetaPost]
* [METAFONT]
* [MetaPost]
* [Index]

[About this Document]: https://docs.miktex.org/manual/preface.html
[I. User Guide]: https://docs.miktex.org/manual/userguide.html
[1. Introduction]: https://docs.miktex.org/manual/intro.html
[About this Manual]: https://docs.miktex.org/manual/intro.html#aboutmanual
[About MiKTeX]: https://docs.miktex.org/manual/about.html
[How to Get MiKTeX]: https://docs.miktex.org/manual/howtoget.html
[Give Back]: https://docs.miktex.org/manual/registering.html
[The MiKTeX Project Page]: https://docs.miktex.org/manual/projectpage.html
[Documentation]: https://docs.miktex.org/manual/otherdoc.html
[2. Installing MiKTeX]: https://docs.miktex.org/manual/installing.html
[Windows]: https://docs.miktex.org/manual/installing.html#installwin
[macOS]: https://docs.miktex.org/manual/installmac.html
[Linux]: https://docs.miktex.org/manual/installunx.html
[3. Using MiKTeX]: https://docs.miktex.org/manual/localguide.html
[Getting Started]: https://docs.miktex.org/manual/localguide.html#gettingstarted
[Unique TeX features]: https://docs.miktex.org/manual/texfeatures.html
[Automatic Package Installation]: https://docs.miktex.org/manual/texfeatures.html#autoinstalloptions
[Finding out Package Usages]: https://docs.miktex.org/manual/texfeatures.html#recpkgusg
[Specifying Additional Input Directories]: https://docs.miktex.org/manual/texfeatures.html#includedirectory
[Specifying the Directory for Auxiliary Files]: https://docs.miktex.org/manual/texfeatures.html#auxdirectory
[texify: The MiKTeX Compiler Driver]: https://docs.miktex.org/manual/texifying.html
[Printing]: https://docs.miktex.org/manual/printing.html
[Using a Viewer to Print DVI/PDF Files]: https://docs.miktex.org/manual/printing.html#id774449
[Using mtprint to Print DVI Files]: https://docs.miktex.org/manual/printing.html#id774468
[4. Maintenance]: https://docs.miktex.org/manual/configuring.html
[Refreshing the File Name Database]: https://docs.miktex.org/manual/configuring.html#fndbupdate
[Setting the Preferred Paper Format]: https://docs.miktex.org/manual/papersize.html
[Installing Updates]: https://docs.miktex.org/manual/updating.html
[Automatic Package Installation]: https://docs.miktex.org/manual/autoinstall.html
[Integrating Local Additions]: https://docs.miktex.org/manual/localadditions.html
[5. Advanced Topics]: https://docs.miktex.org/manual/advanced.html
[Managing Font Map Files]: https://docs.miktex.org/manual/advanced.html#psfonts
[Changing TEXMF run-time parameters]: https://docs.miktex.org/manual/runtimeparams.html
[II. Reference]: https://docs.miktex.org/manual/reference.html
[6. Programs]: https://docs.miktex.org/manual/programs.html
[miktex-bibtex]: https://docs.miktex.org/manual/miktex-bibtex.html
[miktex-dvicopy]: https://docs.miktex.org/manual/miktex-dvicopy.html
[miktex-dvips]: https://docs.miktex.org/manual/miktex-dvips.html
[findtexmf]: https://docs.miktex.org/manual/findtexmf.html
[miktex-gftodvi]: https://docs.miktex.org/manual/miktex-gftodvi.html
[initexmf]: https://docs.miktex.org/manual/initexmf.html
[miktex-filesystem]: https://docs.miktex.org/manual/miktex-filesystem.html
[miktex-filetypes]: https://docs.miktex.org/manual/miktex-filetypes.html
[miktex-fndb]: https://docs.miktex.org/manual/miktex-fndb.html
[miktex-fontmaps]: https://docs.miktex.org/manual/miktex-fontmaps.html
[miktex-formats]: https://docs.miktex.org/manual/miktex-formats.html
[miktex-links]: https://docs.miktex.org/manual/miktex-links.html
[miktex-languages]: https://docs.miktex.org/manual/miktex-languages.html
[miktex-luatex]: https://docs.miktex.org/manual/miktex-luatex.html
[miktex-mf]: https://docs.miktex.org/manual/miktex-mf.html
[miktex-mpost]: https://docs.miktex.org/manual/miktex-mpost.html
[miktex-packages]: https://docs.miktex.org/manual/miktex-packages.html
[miktex-repositories]: https://docs.miktex.org/manual/miktex-repositories.html
[miktex]: https://docs.miktex.org/manual/miktex.html
[miktexsetup]: https://docs.miktex.org/manual/miktexsetup.html
[mpm]: https://docs.miktex.org/manual/mpm.html
[mthelp]: https://docs.miktex.org/manual/mthelp.html
[mtprint]: https://docs.miktex.org/manual/mtprint.html
[miktex-pdftex]: https://docs.miktex.org/manual/miktex-pdftex.html
[setupwiz]: https://docs.miktex.org/manual/setupwiz.html
[miktex-tex]: https://docs.miktex.org/manual/miktex-tex.html
[texify]: https://docs.miktex.org/manual/texify.html
[miktex-xetex]: https://docs.miktex.org/manual/miktex-xetex.html
[7. Files]: https://docs.miktex.org/manual/files.html
[miktex.ini]: https://docs.miktex.org/manual/miktex.ini.html
[pdftex.cfg]: https://docs.miktex.org/manual/pdftex.cfg.html
[8. Environment variables]: https://docs.miktex.org/manual/envvars.html
[9. Trace Streams]: https://docs.miktex.org/manual/tracestreams.html
[10. Run-Time Defaults]: https://docs.miktex.org/manual/defaults.html
[All MiKTeX Programs]: https://docs.miktex.org/manual/defaults.html#miktexconfig
[BibTeX]: https://docs.miktex.org/manual/bibtexdefaults.html
[All TeXMF Programs]: https://docs.miktex.org/manual/texmfdefaults.html
[All TeX Programs]: https://docs.miktex.org/manual/texdefaults.html
[pdfTeX]: https://docs.miktex.org/manual/pdftexdefaults.html
[METAFONT & MetaPost]: https://docs.miktex.org/manual/mpmfdefaults.html
[METAFONT]: https://docs.miktex.org/manual/mfdefaults.html
[MetaPost]: https://docs.miktex.org/manual/mpostdefaults.html
[Index]: https://docs.miktex.org/manual/dx.html 

[miktex-bibtex]: #miktex-bibtex
[miktex-dvicopy]: #miktex-dvicopy
[miktex-dvips]: #miktex-dvips
[findtexmf]: #findtexmf
[miktex-gftodvi]: #miktex-gftodvi
[initexmf]: #initexmf
[miktex-filesystem]: #miktex-filesystem
[miktex-filetypes]: #miktex-filetypes
[miktex-fndb]: #miktex-fndb
[miktex-fontmaps]: #miktex-fontmaps
[miktex-formats]: #miktex-formats
[miktex-links]: #miktex-links
[miktex-languages]: #miktex-languages
[miktex-luatex]: #miktex-luatex
[miktex-mf]: #miktex-mf
[miktex-mpost]: #miktex-mpost
[miktex-packages]: #miktex-packages
[miktex-repositories]: #miktex-repositories
[miktex]: #miktex
[miktexsetup]: #miktexsetup
[mpm]: #mpm
[mthelp]: #mthelp
[mtprint]: #mtprint
[miktex-pdftex]: #miktex-pdftex
[setupwiz]: #setupwiz
[miktex-tex]: #miktex-tex
[texify]: #texify
[miktex-xetex]: #miktex-xetex
[miktex.ini]: #miktex.ini
[pdftex.cfg]: #pdftex.cfg

/About this Document
====================

This is version 4.6 of the MiKTeX manual. It corresponds to MiKTeX 23.10 NEXT 
as of October 4, 2023.[Finished in 2.8s]


//About this Manual
-------------------------

This manual is about MiKTeX, a modern implementation of TeX & Friends.

If you are not yet familiar with using TeX (LaTeX), then please consider reading one of the tutorials available on the Internet.

//About MiKTeX
--------------------

TeX is a typesetting system invented by D. E. Knuth. MiKTeX (pronounced _mik-tech_) 
is an implementation of TeX and related programs.

MiKTeX is available for Windows, macOS and selected Linux distributions. 
Its main features include:

*   Easy to install
    
*   Integrated package management: MiKTeX's integrated package manager installs 
    missing components from the Internet, if required. This allows users to keep 
    the TeX installation as minimal as possible ("Just enough TeX").
    
*   Complete: the MiKTeX distribution contains almost all packages that are 
    freely redistributable.
    
*   Always up-to-date: the MiKTeX package repository is updated regularly and 
    MiKTeX provides tools to easily install package updates.
    
*   Open source

//How to Get MiKTeX
-------------------------

The MiKTeX installer for Windows and macOS can be downloaded from the 
[MiKTeX download page](https://miktex.org/download).

For selected Linux distributions, you can install MiKTeX via the system 
package manager frontend. The [MiKTeX download page](https://miktex.org/download) 
has relevant information available.

//Give Back
-----------------

If you enjoy MiKTeX and want to support the project, then please become a known 
MiKTeX user by giving back something. It encourages me to continue, and is the 
perfect way to say thank you!

Visit [the MiKTeX Give Back page](https://miktex.org/giveback), for more information.

//The MiKTeX Project Page
-------------------------------

The [MiKTeX Project Page](https://miktex.org/) is the address to turn to for 
MiKTeX related news & information.

//Documentation
---------------------

Use the **mthelp** utility to quickly access general TeX related documentation. 
For example, run **`mthelp memoir`** to view documentation of the `memoir` package.


/Chapter 2. Installing MiKTeX
-------------------------------------

//2.1. Windows
---------------

You use the Basic MiKTeX Installer to install MiKTeX on your Windows computer 
Please read the [installation tutorial](https://miktex.org/howto/install-miktex), 
for step-by-step guidance.

The installer is available on the [download page](https://miktex.org/download).


//2.2. macOS
-------------

MiKTeX for macOS is distributed as a disk image (`.dmg`) file. To set up MiKTeX, 
download and open the disk image. Then drag the MiKTeX icon onto the Applications folder.
Please read the [installation tutorial](https://miktex.org/howto/install-miktex-mac), 
for step-by-step guidance.

The disk image is available on the [download page](https://miktex.org/download).


//2.3. Linux
-------------

MiKTeX is available for selected Linux distributions.

Installing MiKTeX on Linux involves these steps:

1.  Register the GPG key with which MiKTeX installation packages and metadata is signed.
    
2.  Register the installation source which contains the MiKTeX installation package. 
    The installation source depends on the Linux distribution version.
    
3.  Use the package management system to install MiKTeX.
    

Please read the [installation tutorial](https://miktex.org/howto/install-miktex-unx), 
for step-by-step guidance.



/Chapter 3. Using MiKTeX
--------------------------------

//3.1. Getting Started
-----------------------

If you have never used TeX before, then it is recommendable to work through 
one of the TeX/LaTeX tutorials. A good starting point is the TeX FAQ: 
[https://texfaq.org/](https://texfaq.org/).

MiKTeX doesn't differ very much from any other TeX system you might have used before. Typesetting with MiKTeX involves these steps:

1.  Start TeXworks (a sophisticated TeX frontend) and edit your LaTeX document.
    
2.  Press **Ctrl**+**T** to create a typeset view of your document.

//3.2. Unique TeX features
---------------------------

This section describes features that are unique to MiKTeX's TeX implementation.

### Automatic Package Installation

MiKTeX can be configured in such a way that missing packages are automatically 
installed (see the section called “[Automatic Package Installation]”).

It is possible to override the global configuration setting with these 
command line options:

*   `--disable-installer` Missing packages will not be installed.
*   `--enable-installer` Missing packages will be installed.

### Finding out Package Usages

The command line option `--record-package-usages` can be used to find 
out which packages are used in a job.

For example, you would say

    latex -record-package-usages=packages.txt test

to create the file `packages.txt`, which contains the names of the 
packages used by `test.tex`.

If `test.tex` looks like this:

    \documentclass{scrartcl}
    \begin{document}
    Hello, world!
    \end{document}

Then the resulting `packages.txt` would contain these lines:

    cm
    koma-script
    ltxbase

The package list can be handed over to the package manager (see [mpm]), e.g.

    mpm --update-some=packages.txt

would ensure that you have the latest versions installed.

### Specifying Additional Input Directories

The command-line option ``--include-directory=_dir_`` causes the program 
to include _`dir`_ into the list of input directories.

For example:

    latex --include-directory="C:\My Styles" foo.tex

This prepends `C:\My Styles` to the input search path, i.e., `C:\My Styles` 
will be searched first, when TeX tries to find an input file.

### Specifying the Directory for Auxiliary Files

The option ``--aux-directory=_`dir`_`` causes TeX to create auxiliary 
files in another directory. For example:

    > mkdir C:\texoutput
    > mkdir C:\tobedeleted
    > latex -output-directory=C:\texoutput -aux-directory=C:\tobedeleted foo.tex
    ...
    >

This ensures that 

1) `foo.dvi` will be created in `C:\texoutput` and 

2) all other files (`foo.log`, …) will be created in `C:\tobedeleted`.

//3.3. texify: The MiKTeX Compiler Driver
----------------------------------------------

**texify** is a command-line utility that simplifies the creation of DVI (PDF) 
documents: **texify** automatically runs LaTeX (pdfLaTeX), MakeIndex and BibTeX 
as many times as necessary to produce a DVI (PDF) file with sorted indices and 
all cross-references resolved.

To run **texify** on an input file `foo.tex`, do this:

    texify foo.tex

As shown in the example above, the input file names to **texify** must include
any extension (`.tex`, `.ltx`, …).

There are several command line options you can use to control **texify** 
(see [texify]). Here are some examples:

    texify --clean foo.tex

All auxiliary files will be removed, i.e., only the output `foo.dvi` file 
will be left in the current folder.

    texify --tex-option=--src foo.tex

Passes the option `--src` to the TeX compiler.

    texify --run-viewer foo.tex

Opens the output file `foo.dvi` (unless there are compile erros).

    texify --tex-option=--src --viewer-option="-1 -s\"200 foo.tex\"" --run-viewer foo.tex

Compiles `foo.tex` with source file information (`--src`) and then initiates 
forward DVI search to open `foo.dvi` at the source special location “200 foo.tex”. 
The previewer option `-1` re-uses an existing previewer window.

See the Yap manual, for a complete list of previewer options.

//3.4. Printing
----------------

### Using a Viewer to Print DVI/PDF Files

TeX output files (`*.dvi`/`*.pdf`) can be printed from within the viewer.

### Using **mtprint** to Print DVI Files

DVI files can also be printed with the help of the command-line utility 
**mtprint** (MiKTeX Print Utility).

For example, run **`mtprint paper`** to send the DVI file `paper.dvi` to 
the default Windows printer.

See [mtprint], for more information about **mtprint**

/Chapter 4. Maintenance
-------------------------------

//4.1. Refreshing the File Name Database
-----------------------------------------

To speed up file search, MiKTeX makes use of a list of known file names. This 
list is called the _file name database_ (FNDB).

It is necessary that you refresh the file name database whenever you manually 
install TeX/LaTeX-related files in a user-managed TEXMF directory.

You can update the file name database with the help of 
[MiKTeX Console](https://miktex.org/howto/miktex-console). 
If you prefer the command-line, you can use One MiKTeX Utility (see [miktex]).

//4.2. Setting the Preferred Paper Format
------------------------------------------

You can set the preferred paper format with the help of [MiKTeX Console](https://miktex.org/howto/miktex-console).

//4.3. Installing Updates
--------------------------

You can use MiKTeX Console to install the latest MiKTeX updates.

To start MiKTeX Console, search and click the MiKTeX Console icon in the application launcher. Please read [the MiKTeX Console tutorial](https://miktex.org/howto/miktex-console), for a step-by-step guide.

//4.4. Automatic Package Installation
--------------------------------------

MiKTeX has the ability to automatically install missing packages.

MiKTeX asks your permission before installing a package.

Click Install to start the installation of the package. Click Cancel, to cancel 
the installation. If you do not want to see this dialog in the future, 
clear the mark from the check box Always show this dialog before installing 
packages. Your decision will be remembered.

//4.5. Integrating Local Additions
-----------------------------------

If you have files that you want to integrate into the MiKTeX setup, you have several options:

### Use the command-line option ``--include-directory=_`dir`_``

For example:

    latex --include-directory=C:\path\to\my\style\files thesis.tex

See the section called “[Specifying Additional Input Directories]”, for more information.

### Set environment variables

For example:

    set TEXINPUTS=C:\path\to\my\style\files
    latex thesis.tex

See [Chapter 8, Environment variables], to learn more about MiKTeX environment variables.

### Register a user-managed TEXMF root directory

Register the root of the directory tree which contains your files. The directory tree must conform to the TDS standard, i.e., you must imitate the directory tree in the MiKTeX installation directory (usually `C:\Program Files\MiKTeX 2.9`).

> [!TIP]
>  This is the recommended method. You can register TEXMF root directories 
> with the help of [MiKTeX Console](https://miktex.org/howto/miktex-console).


/Chapter 5. Advanced Topics
-----------------------------------

//5.1. Managing Font Map Files
-------------------------------

Information about outline fonts is stored in a file by the name of `psfonts.map`. 
This file is normally created automatically. It can be manually created 
by running **`miktex fontmaps configure`** (see [miktex] (1)).

`psfonts.map` depends on the file `updmap.cfg`. This configuration file contains 
declarative instructions, which will be used to build `psfonts.map`.

> [!Caution]
> The contents of `psfonts.map` should never be edited directly. 
> Your modifications get lost when you install new packages.

For example, follow these steps if you want to add an entry for 
the font map file `xyz.map`:

1.  Run **`initexmf --edit-config-file updmap`**.
    
2.  Insert the following line at the end of the file:
    
    Map xyz.map
    
3.  Save the file and close the editor.
    
4.  Run **`miktex fontmaps configure`** to rebuild the font map files.

//5.2. Changing TEXMF run-time parameters
------------------------------------------

You can control a number of run-time parameters (in particular, array sizes) on the command-line or in a configuration file.

Some of the more interesting paramaters:

    main_memory

Total words of memory available, for TeX, METAFONT, and MetaPost.

    extra_mem_bot

Extra space for large TeX data structures: boxes, glue, breakpoints, et al.

    font_mem_size

Words of font info available for TeX.

See [Chapter 10, Run-Time Defaults], for a complete list of the TEXMF run-time parameters.

Here is a typical example of a configuration file:

    main_memory=2000000
    extra_mem_bot=2000000
    font_mem_size=2000000

The name of the configuration file is that of the engine (e.g., [miktex-pdftex]) 
or format (e.g, [miktex-pdflatex]). You use the `--edit-config-file` option 
of **initexmf** to edit the configuration file, e.g.:

    > initexmf --edit-config-file=pdflatex
    > 




Part II. Reference
==================

/Chapter 6. Programs
----------------------------

* [miktex-bibtex]   — make a bibliography for LaTeX
* [miktex-dvicopy]  — produce modified copy of DVI file
* [miktex-dvips]    — convert a DVI file to PostScript
* [findtexmf]   — search files in MiKTeX directories
* [miktex-gftodvi]  — make proof sheets from generic font files
* [initexmf]    — MiKTeX configuration utility
* [miktex-filesystem]   — watch the file system
* [miktex-filetypes]    — manage Windows filetypes
* [miktex-fndb]     — manage the MiKTeX file name database
* [miktex-fontmaps]     — manage PDF/PostScript font maps
* [miktex-formats]  — manage TeX formats
* [miktex-links]    — manage links from scripts and formats to executables
* [miktex-languages]    — manage LaTeX language definitions
* [miktex-luatex]   — an extended version of pdfTeX using Lua as an embedded scripting language
* [miktex-mf]   — METAFONT, a language for font and logo design
* [miktex-mpost]    — MetaPost, a system for creating graphics
* [miktex-packages]     — manage MiKTeX packages
* [miktex-repositories]     — manage MiKTeX package repositories
* [miktex]  — One MiKTeX Utility
* [miktexsetup]     — MiKTeX setup utility
* [mpm]     — MiKTeX package manager
* [mthelp]  — MiKTeX help utility
* [mtprint]     — MiKTeX print utility
* [miktex-pdftex]   — DVI/PDF output from TeX
* [setupwiz]    — MiKTeX setup wizard
* [miktex-tex]  — text formatting and typesetting
* [texify]  — MiKTeX compiler driver
* [miktex-xetex]    — Unicode-based TeX engine


<a id="miktex-bibtex" /> 
<!-- *miktex-bibtex* -->

//6.1. miktex-bibtex — make a bibliography for LaTeX
-----------------------------------------------------

**Synopsis**

`miktex-bibtex` [_`option`_...] _`auxfile`_

**Description**

This man page is an adaption of the corresponding TeX Live man page.

BibTeX reads the top-level auxiliary (`.aux`) file that was output during the 
running of [miktex-latex] (1) [miktex-tex] (1) and creates a bibliography (`.bbl`) 
file that will be incorporated into the document on subsequent runs of LaTeX or TeX.

BibTeX looks up, in bibliographic database (`.bib`) files specified by the \bibliography 
command, the entries specified by the \cite and \nocite commands in 
the LaTeX or TeX source file. It formats the information from those entries 
according to instructions in a bibliography style (`.bst`) file (specified 
by the \bibliographystyle command, and it outputs the results to the `.bbl` file.

The LaTeX reference manual explains what a LaTeX source file must contain to work 
with BibTeX. Appendix B of the manual describes the format of the `.bib` 
files. The _BibTeXing_ document describes extensions and details of this format, 
and it gives other useful hints for using BibTeX.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to 
    _`name`_. This may affect the search paths and other values used. Using this 
    option is equivalent to copying the program file to ``_`name`_`` and 
    invoking ``_`name`_``.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules 
    settings in the MiKTeX configuration data store.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules 
    settings in the MiKTeX configuration data store.

*   `--help`

    Give help and exit.

*   `--hhelp`

    This option is only available on Windows systems: show the manual page in an 
    HTML Help window and exit when the window is closed.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be 
    searched for input files.

*   ``--min-crossrefs=_`n`_``

    Defines the minimum number of **crossref**s required for automatic inclusion 
    of the crossref'd entry on the citation list; the default is two.

*   `--quiet`

    Suppress all output, except errors.

*   ``--record-package-usages=_`file`_``

    Record all package usages and write them into _`file`_.

*   ``--trace[=_`tracestreams`_]``

    Enable trace messages. The _`tracestreams`_ argument, if specified, is a 
    comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

*   `--version`

    Show version information and exit.


**Environment**

*   `BIBINPUTS`

    Extra paths to locate `.bib` files.

*   `BSTINPUTS`

    Extra paths to locate `.bst` files.

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). 
    If this variable is set, then MiKTeX programs will write trace messages 
    into the configured log sink.

**See Also**

[miktex-latex] (1), [miktex-tex] (1)

978-0201529838. _LaTeX: A Document Preparation System_. 2nd Edition. 
Leslie Lamport. Addison-Wesley. 1994.


<a id="miktex-dvicopy" /> 
<!-- *miktex-dvicopy* -->

//6.2. miktex-dvicopy — produce modified copy of DVI file
----------------------------------------------------------

**Synopsis**

`miktex-dvicopy` [_`option`_...] _`indvi`_ _`outdvi`_

**Description**

This man page is an adaption of the corresponding TeX Live man page.

**miktex-dvicopy** reads a DVI file, expands any references to virtual fonts 
to base fonts, and writes the resulting DVI file. Thus you can use virtual fonts 
even if your DVI processor does not support them, by passing the documents through 
**miktex-dvicopy** first.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to 
    _`name`_. This may affect the search paths and other values used. Using this option
    is equivalent to copying the program file to ``_`name`_`` and invoking ``_`
    name`_``.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings 
    in the MiKTeX configuration data store.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings 
    in the MiKTeX configuration data store.

*   `--help`

    Give help and exit.

*   `--hhelp`

    This option is only available on Windows systems: show the manual page in an HTML 
    Help window and exit when the window is closed.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be searched for 
    input files.

*   ``--mag=_`mag`_``

    Override existing magnification with _`mag`_.

*   ``--max-pages=_`n`_``

    Process _`n`_ pages; default one million. This option cannot be used together with 
   `--select`.

*   ``--page-start=_`pagespec`_``

    Start at _`page-spec`_, for example 2 or 5.\*.-2. This option cannot be used together 
    with `--select`.

*   ``--record-package-usages=_`file`_``

    Record all package usages and write them into _`file`_.

*   ``--select=_`sel`_``

    Select pages to be copied.

    The syntax for _`sel`_ is: ``_`start`_ [_`n`_]``, where _`start`_ is the starting 
    page specification (for example **`2`** or **`5.*.-2`**) and _`n`_ (optional) 
    is the maximum number of pages to be copied.

    You can use up to `10` `--select` options. This option cannot be used together with 
    `--max-pages` or `--page-start`.

*   ``--trace[=_`tracestreams`_]``

    Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated 
    list of trace stream names ([Chapter 9, Trace Streams]).

*   `--version`

    Show version information and exit.


    **Environment**

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this 
    variable is set, then MiKTeX programs will write trace messages into the 
    configured log sink.


<a id="miktex-dvips" /> 
<!-- *miktex-dvips* -->

//6.3. miktex-dvips — convert a DVI file to PostScript
-------------------------------------------------------

**Synopsis**

`miktex-dvips` [_`option`_...] _`dvifile`_

**Description**

This man page is an adaption of the corresponding TeX Live man page.

This man page is obsolete! See the Texinfo documentation instead.

Dvips takes a DVI file produced by TeX (or by some other processor such
as **miktex-gftodvi**) and converts it to PostScript. The DVI file may be 
specified without the `.dvi` extension.

**Options**

Many of the parameterless options listed here can be turned off by suffixing the option with a zero (`0`); for instance, to turn off page reversal, use `-r0`. Such options are marked with a trailing `*`.

*   `-`

    Read additional options from standard input after processing the command line.

*   `--help`

    Print a usage message and exit.

*   `--version`

    Print the version number and exit.

*   `-a*`

    Conserve memory by making three passes over the DVI file instead of two and only loading those characters actually used. Generally only useful on machines with a very limited amount of memory.

*   `-A`

    Print only the odd pages. This option uses TeX page numbers, not physical page numbers.

*   ``-b _`num`_``

    Generate _`num`_ copies of each page, but duplicating the page body rather than using the **/#copies** PostScript variable. This can be useful in conjunction with a header file setting **bop-hook** to do color separations or other neat tricks.

*   `-B`

    Print only the even pages. This option uses TeX page numbers, not physical page numbers.

*   ``-c _`num`_``

    Generate _`num`_ consecutive copies of every page, i.e., the output is uncollated. This merely sets the builtin PostScript variable **/#copies**.

*   ``-C _`num`_``

    Generate _`num`_ copies, but collated (by replicating the data in the PostScript file). Slower than the `-c` option, but easier on the hands, and faster than resubmitting the same PostScript file multiple times.

*   ``-d _`num`_``

    Set the debug flags, showing what Dvips (thinks it) is doing. See the Dvips manual, for the possible values of _`num`_. Use `-d -1` as the first option for maximum output.

*   ``-D _`num`_``

    Set both the horizontal and vertical resolution to _`num`_, given in dpi (dots per inch). This affects the choice of bitmap fonts that are loaded and also the positioning of letters in resident PostScript fonts. Must be between 10 and 10000. This affects both the horizontal and vertical resolution. If a high resolution (something greater than 400 dpi, say) is selected, the `-Z` flag should probably also be used. If you are using fonts made with METAFONT, such as Computer Modern, **makepk** needs to know about the value for _`num`_ that you use or METAFONT will fail. See the file `modes.mf` for a list of resolutions and mode names for most devices.

*   ``-e _`num`_``

    Maximum drift in pixels of each character from its “true” resolution-independent position on the page. The default value of this parameter is resolution dependent (it is the number of entries in the list [100, 200, 300, 400, 500, 600, 800, 1000, 1200, 1600, 2000, 2400, 2800, 3200, …] that are less than or equal to the resolution in dots per inch). Allowing individual characters to “drift” from their correctly rounded positions by a few pixels, while regaining the true position at the beginning of each new word, improves the spacing of letters in words.

*   `-E*`

    Generate an EPSF file with a tight bounding box. This only looks at marks made by characters and rules, not by any included graphics. In addition, it gets the glyph metrics from the TFM file, so characters that print outside their enclosing TFM box may confuse it. In addition, the bounding box might be a bit too loose if the character glyph has significant left or right side bearings. Nonetheless, this option works well enough for creating small EPSF files for equations or tables or the like. (Of course, Dvips output, especially when using bitmap fonts, is resolution-dependent and thus does not make very good EPSF files, especially if the images are to be scaled; use these EPSF files with care.) For multiple page input files, also specify `-i` to get each page as a separate EPSF file; otherwise, all the pages are overlaid in the single output file.

*   `-f*`

    Read the DVI file from standard input and write the PostScript to standard output. The standard input must be seekable, so it cannot be a pipe. If your input must be a pipe, write a shell script that copies the pipe output to a temporary file and then points Dvips at this file. It turns off the automatic sending of control-D if it was turned on with the `-F` option or in the configuration file; use `-F` after the `-f` to send it anyway.

*   `-F*`

    Write control-D (ASCII code 4) as the very last character of the PostScript file. This is useful when Dvips is driving the printer directly instead of working through a spooler, as is common on personal systems. On systems shared by more than one person, this is not recommended.

*   `-G`

    Shift non-printing characters (ASCII 0-32, 127) to higher-numbered positions. This was useful to work around bugs in old versions of Adobe's PDF reader. It's more likely to cause problems nowadays.

*   ``-h _`name`_``

    Prepend _`name`_ as an additional header file, or, if _`name`_ is `-`, suppress all header files. Any definitions in the header file get added to the PostScript `userdict`.

*   `-i*`

    Make each section be a separate file; a _section_ is a part of the document processed independently, most often created to avoid memory overflow. The filenames are created replacing the suffix of the supplied output file name by a three-digit sequence number. This option is most often used in conjunction with the `-S` option which sets the maximum section length in pages; if `-i` is specified and `-S` is not, each page is output as a separate file. For instance, some phototypesetters cannot print more than ten or so consecutive pages before running out of steam; these options can be used to automatically split a book into ten-page sections, each to its own file.

    On the other hand, if your document uses very large fonts or very large included figures, Dvips might take it upon itself to split the output into unwanted sections, to try to avoid overflowing printer memory.

*   `-j*`

    Download only needed characters from Type 1 fonts. This is the default. Some debugging flags trace this operation. You can also control partial downloading on a per-font basis.

*   `-k*`

    Print crop marks. This option increases the paper size (which should be specified, either with a paper size special or with the `-T` option) by a half inch in each dimension. It translates each page by a quarter inch and draws cross-style crop marks. It is mostly useful with typesetters that can set the page size automatically. This works by downloading `crop.pro`.

*   `-K*`

    Remove comments in included PostScript graphics, font files, and headers; only necessary to get around bugs in spoolers or PostScript post-processing programs. Specifically, the **%%Page** comments, when left in, often cause difficulties. Use of this flag can cause other graphics to fail, however, since the PostScript header macros from some software packages read portion the input stream line by line, searching for a particular comment.

*   ``-l [=]_`num`_``

    The last page printed will be the first one numbered _`num`_. Default is the last page in the document. If _`num`_ is prefixed by an equals sign, then it (and the argument to the `-p` option, if specified) is treated as a physical (absolute) page number, rather than a value to compare with the TeX \count0 values stored in the DVI file. Thus, using `-l =9` will end with the ninth page of the document, no matter what the pages are actually numbered.

*   `-m*`

    Specify manual feed, if supported by the output device.

*   ``-mode _`mode`_``

    Use _`mode`_ as the METAFONT device name for path searching and font generation. This overrides any value from configuration files. With the default paths, explicitly specifying the mode also makes the program assume the fonts are in a subdirectory named mode.

*   `-M*`

    Turns off automatic font generation.

*   ``-n _`num`_``

    Print at most _`num`_ pages. Default is 100000.

*   ``-n _`num`_``

    Print at most _`num`_ pages. Default is 100000.

*   `-N*`

    Turns off generation of structured comments such as **%%Page**; this may be necessary on some systems that try to interpret PostScript comments in weird ways, or on some PostScript printers. Beware: This also disables page movement, etc., in PostScript viewers such as GSview.

*   `-noomega`

    Disable the use of Omega extensions when interpreting DVI files. By default, the additional opcodes 129 and 134 are recognized by Dvips as Omega or pTeX extensions and interpreted as requests to set 2-byte characters.

*   `-noptex`

    Disable the use of pTeX extensions when interpreting DVI files. By default, the additional opcodes 130 and 135 are recognized by Dvips as Omega extensions and interpreted as requests to set 3-byte characters, and 255 as request to change the typesetting direction.

    The only drawback is that the virtual font array will (at least temporarily) require 65536 or more positions instead of the default 256 positions, i.e., the memory requirements of Dvips will be somewhat larger. If you find this unacceptable or encounter another problem with the Omega or pTeX extensions, you can switch off the pTeX extension by `-noptex`, or both by `-noomega`.

*   ``-o _`name`_``

    Send output to the file _`name`_. If `-o` is specified without _`name`_, the default is ``_`file`_.ps`` where the input DVI file was ``_`file`_.dvi``. If `-o` isn't given at all, the configuration file default is used.

    If _`name`_ is `-`, output goes to standard output. If the first character of _`name`_ is `!` or `|`, then the remainder will be used as an argument to `popen`; thus, specifying `|lpr` as the output file will automatically queue the file for printing as usual. Dvips will print to the local printer device `PRN` when _`name`_ is `|lpr` and a program by that name cannot be found.

*   `-o` turns off the automatic sending of control-D. See the `-f` option for how to override this.

*   ``-O _`x-offset`_,_`y-offset`_``

    Move the origin by _`x-offset`_,_`y-offset`_, a comma-separated pair of dimensions such as `.1in,-.3cm`. The origin of the page is shifted from the default position (of one inch down, one inch to the right from the upper left corner of the paper) by this amount. This is usually best specified in the printer-specific configuration file.

    This is useful for a printer that consistently offsets output pages by a certain amount. You can use the file `testpage.tex` to determine the correct value for your printer. Be sure to do several runs with the same `O` value-some printers vary widely from run to run.

    If your printer offsets every other page consistently, instead of every page, your best recourse is to use **bop-hook** (see the Dvips manual for more information).

*   ``-p [=]_`num`_``

    The first page printed will be the first one numbered _`num`_. Default is the first page in the document. If _`num`_ is prefixed by an equals sign, then it (and the argument to the `-l` option, if specified) is treated as a physical (absolute) page number, rather than a value to compare with the TeX \count0 values stored in the DVI file. Thus, using `-p =3` will start with the third page of the document, no matter what the pages are actually numbered.

*   ``-pp _`first`_-_`last`_``

    Print pages _`first`_ through _`last`_; equivalent to ``-p _`first`_ -l _`last`_``, except that multiple `-pp` options accumulate, unlike `-p` and `-l`. The `-` separator can also be `:`.

*   ``-P _`printer`_``

    Read the configuration file ``config._`printer`_``, which can set the output name (most likely ``o |lpr -P_`printer`_``), resolution, METAFONT mode, and perhaps font paths and other printer-specific defaults. It works best to put sitewide defaults in the one master `config.ps` file and only things that vary printer to printer in the ``config._`printer`_`` files; `config.ps` is read before ``config._`printer`_``.

    A configuration file for eventual creation of Adobe PDF files is provided in `config.pdf` and thus can be loaded with `-Ppdf`. It will try to include Type 1 outline fonts into the PostScript file.

*   `-q*`

    Run quietly. Don't chatter about pages converted, etc. to standard output; report no warnings (only errors) to standard error.

*   `-r*`

    Output pages in reverse order. By default, page 1 is output first.

*   `-R`

    Run securely. `-R2` disables both shell command execution in \special (via `` ` ``) and config files (via the `E`), pipes as output files, and opening of any absolute or `..`-relative filenames. `-R1`, the default, forbids shell escapes but allows absolute filenames. `-R0` allows both.

*   `-s*`

    Enclose the output in a global save/restore pair. This causes the file to not be truly conformant, and is thus not recommended, but is useful if you are driving a deficient printer directly and thus don't care too much about the portability of the output to other environments.

*   ``-S _`num`_``

    Set the maximum number of pages in each “section”. This option is most commonly used with the `-i` option; see its description above for more information.

*   ``-t _`papertype`_``

    Set the paper type to _`papertype`_, usually defined in one of the configuration files, along with the appropriate PostScript code to select it. You can also specify a _`papertype`_ of `landscape`, which rotates a document by 90 degrees. To rotate a document whose paper type is not the default, you can use the `-t` option twice, once for the paper type, and once for `landscape`.

    In general, you should not use any `-t` option when using a papaersize special, which some LaTeX packages (e.g., `hyperref`) insert

    One exception is when using a nonstandard paper size that is not already defined in `config.ps`; in this case, you need to specify `-t unknown`.

    Another exception is when producing multi-page files for further processing; use `-t nopaper` to omit any paper size information in the output. (If you just have a single page document, you can use `-E` to get pure EPSF output.)

*   ``-T _`hsize,vsize`_``

    Set the paper size to (_`hsize`_,_`vsize`_), a comma-separated pair of dimensions such as `.1in,-.3cm`. It overrides any paper size special in the DVI file. Be careful, as the paper size will stick to a predefined size if there is one close enough. To disable this behavior, use `-tunknown`

*   ``-u _`psmapfile`_``

    Set _`psmapfile`_ to be the file that Dvips uses for looking up PostScript font aliases. If _`psmapfile`_ starts with a `+` character, then the rest of the name is used as the name of the map file, and the map file is appended to the list of map files (instead of replacing the list). In either case, if the name has no extension, `.map` is added at the end.

*   `-U*`

    Disable a PostScript virtual memory-saving optimization that stores the character metric information in the same string that is used to store the bitmap information. This is only necessary when driving the Xerox 4045 PostScript interpreter, which has a bug that puts garbage on the bottom of each character. Not recommended unless you must drive this printer.

*   `-v`

    Print the Dvips version number and exit.

*   `-V*`

    Download non-resident PostScript fonts as bitmaps. This requires use of `makepk` to generate the required bitmap fonts. The bitmap must be put into `psfonts.map` as the downloadable file for that font. This is useful only for those fonts for which you do not have real outlines, being downloaded to printers that have no resident fonts, i.e., very rarely.

*   ``-x _`num`_``

    Set the x magnification ratio to _`num`_/1000. Overrides the magnification specified in the DVI file. Must be between 10 and 100000. It is recommended that you use standard magstep values (1095, 1200, 1440, 1728, 2074, 2488, 2986, and so on) to help reduce the total number of PK files generated. _`num`_ may be a real number, not an integer, for increased precision.

*   ``-X _`num`_``

    Set the horizontal resolution in dots per inch to _`num`_.

*   ``-y _`num`_``

    Set the y magnification ratio to _`num`_/1000. See `-x` above.

*   ``-Y _`num`_``

    Set the vertical resolution in dots per inch to _`num`_.

*   `-z*`

    Pass `html` hyperdvi specials through to the output for eventual distillation into PDF. This is not enabled by default to avoid including the header files unnecessarily, and use of temporary files in creating the output.

*   `-Z*`

    Compress bitmap fonts in the output file, thereby reducing the size of what gets downloaded. Especially useful at high resolutions or when very large fonts are used. May slow down printing, especially on early 68000-based PostScript printers. Generally recommend today, and can be enabled in the configuration file.


**Environment**

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.


<a id="findtexmf" /> 
<!-- *findtexmf* -->

//6.4. findtexmf — search files in MiKTeX directories
------------------------------------------------------

**Synopsis**

`findtexmf` [_`option`_...] _`file`_...

**Description**

**findtexmf** can be used to find files in the MiKTeX directories. When the `-file-type` option is not given, the search path used when looking for a file is inferred from the name given, by looking for a known extension. If no known extension is found, the search path for TeX source files is used.

**Options**

*   ``--alias=_`name`_``

    Pretend to be _`name`_ when finding files.

*   `--help`

    Give help and exit.

*   ``--file-type=_`filetype`_``

    Use the specified file type (see below).

*   `--list-file-types`

    Print known file types.

*   `--must-exist`

    Allow installation of a packacke, if a file should exist because it is a part of the package.

*   ``--show-path=_`filetype`_``

    Print the search path for the specified file type (see below).

*   `--start`

    Start the associated program, if the file was found.

*   ``--the-name-of-the-game=_`name`_``

    Set the name of the engine. Relevant when searching for format files.

*   `--version`

    Show version information and exit.

### File Types

      afm             (.afm)
      base            (.base)
      bib             (.bib)
      bst             (.bst)
      cid maps        (.cid;.cidmap)
      clua            (.dll;.so)
      cweb            (.w)
      dvi             (.dvi)
      enc             (.enc)
      executables     (.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.RB;.RBW)
      font feature files   (.fea)
      fmt             (.fmt)
      hbf             (.hbf)
      graphic/figure  (.eps;.epsi;.png)
      gf              (.gf)
      ist             (.ist)
      lig files       (.lig)
      lua             (.lua;.luatex;.luc;.luctex;.texlua;.texluc;.tlu)
      map             (.map)
      mem             (.mem)
      mf              (.mf)
      mfpool          (.pool)
      mft             (.mft)
      mlbib           (.mlbib;.bib)
      mlbst           (.bst)
      mp              (.mp)
      mppool          (.pool)
      ocp             (.ocp)
      ofm             (.ofm;.tfm)
      opl             (.opl)
      opentype fonts  (.otf)
      otp             (.otp)
      ovf             (.ovf)
      ovp             (.ovp)
      pk              (.pk)
      PostScript header    (.pro;.enc)
      subfont definition files  (.sfd)
      tcx             (.tcx)
      tex             (.tex)
      texpool         (.pool)
      TeX system documentation  (.pdf;.html;.md;.txt;.ps;.dvi)
      tfm             (.tfm)
      truetype fonts  (.ttf;.ttc)
      type1 fonts     (.pfb;.pfa)
      type42 fonts    (.t42;.T42)
      vf              (.vf)
      web             (.web)


<a id="miktex-gftodvi" /> 
<!-- *miktex-gftodvi* -->

//6.5. miktex-gftodvi — make proof sheets from generic font files
------------------------------------------------------------------

**Synopsis**

`miktex-gftodvi` [_`option`_...] [_`gffile`_]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

The **miktex-gftodvi** program converts a generic font (GF) file output by, for example, METAFONT, to a device independent (DVI) file (that can then be typeset using the same software that has already been written for). The characters in the GF file will appear one per page, with labels, titles, and annotations as specified in Appendix H (Hardcopy Proofs) of _The METAFONTbook_.

**miktex-gftodvi** uses other fonts in addition to the main GF file. A “gray” font is used to typeset the pixels that actually make up the character. (We wouldn't want all the pixels to be simply black, since then labels, key points, and other information would be lost.) A “title” font is used for the information at the top of the page. A “label” font is used for the labels on key points of the figure. A “slant” font is used to typeset diagonal lines, which otherwise have to be simulated using horizontal and vertical rules. The default gray, title, and label fonts are `gray`, `cmr8`, and `cmtt10`, respectively; there is no default slant font.

To change the default fonts, you can give special commands in your source file, or you can change the fonts on the command-line.

The GF file name on the command-line must be complete. Because the resolution is part of the extension, it would not make sense to append a default extension as is done with other DVI-reading software. The output file name defaults to the same root as the GF file, with the `.dvi` extension added. For example, the input file `cmr10.2602gf` would become `cmr10.dvi`.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   ``--gray-font=_`font`_``

    Sets the “gray” font. Default is `gray`.

*   `--help`

    Give help and exit.

*   `--hhelp`

    This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

*   ``--label-font=_`font`_``

    Sets the “label” font. Default is `cmtt10`.

*   ``--logo-font=_`font`_``

    Sets the “logo” font. Default is `logo8`.

*   ``--overflow-label-offset=_`real`_``

    Specifies the distance from the right edge of the character bounding box at which the overflow equations (if any) are typeset. The value is given in points. The default is a little over two inches.

*   ``--record-package-usages=_`file`_``

    Record all package usages and write them into _`file`_.

*   ``-slant-font=_`font`_``

    Sets the “slant” font. There is no default.

*   ``-title-font=_`font`_``

    Sets the “title” font. Default is `cmr8`.

*   ``--trace[=_`tracestreams`_]``

    Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

*   `--version`

    Show version information and exit.


**Environment**

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.


**See also**

[miktex-mf] (1)

978-0201134452. _The METAFONTbook_. Donald E. Knuth. Addison-Wesley. 1986.


<a id="initexmf" /> 
<!-- *initexmf* -->

//6.6. initexmf — MiKTeX configuration utility
-----------------------------------------------

**Synopsis**

`initexmf` [_`option`_...]

**Description**

**initexmf** can be used to configure MiKTeX.

### User mode vs. administrator mode

This utility can be run in two modes:

*   User mode (default)

    MiKTeX operates on user-scoped configuration and data files.

*   Administrator mode

    Only system-wide MiKTeX configuration and data files are modified, assuming that the MiKTeX setup is shared by all users. The utility must be run with administrator privileges.

By default, the utility runs in user mode. You can turn on administrator mode with the `--admin` option.

**Options**

*   `--admin`

    Run in administrator mode:

    *   Operate on the system-wide MiKTeX configuration data store.
        
    *   Install packages for all users.
        

    Using this option requires a shared MiKTeX setup, i.e., MiKTeX must have been set up for all users. The program must be run with administrator privileges.

*   ``--default-paper-size=_`paper`_``

    Set the default paper size. _`paper`_ must be `a4` or `letter`.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   ``--edit-config-file=_`configfile`_``

    Open the specified config file in a text editor.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--list-modes`

    List all known METAFONT modes.

*   `--print-only`

    Print what would be done. Nothing is changed.

*   `--quiet`

    Suppress screen output.

*   ``--register-root=_`dir`_``

    Register a TEXMF root directory.

*   `--report`

    Write a MiKTeX configuration report.

*   ``--set-config-value=[_`section`_]_`valuename`_=_`value`_``

    Set a value to be stored in the MiKTeX configuration data store (see [miktex.ini] (5)).

*   ``--show-config-value=[_`section`_]_`valuename`_``

    Print a value from the MiKTeX configuration data store (see [miktex.ini] (5)).

*   ``--unregister-root=_`dir`_``

    Unregister a TEXMF root directory.

*   ``--user-roots=_`directories`_``

    Register user root directories.

*   `--verbose`

    Print information on what is being done.

*   `--version`

    Print the version number and exit.


**See also**

[miktex] (1), [miktex.ini] (5)


<a id="miktex-filesystem" /> 
<!-- *miktex-filesystem* -->

//6.7. miktex-filesystem — watch the file system
-------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] filesystem _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for watching the file system.

**Commands**

**watch** [``--template _`template`_``] _`directory`_

Watch for changes in a directory.

_`template`_ controls the output of each directory event. It can contain the following placeholders:

`{action}`, `{fileName}`


**See also**

[miktex] (1)


<a id="miktex-filetypes" /> 
<!-- *miktex-filetypes* -->

//6.8. miktex-filetypes — manage Windows filetypes
---------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] filetypes _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing Windows file types.

**Commands**

*   **list** [``--template _`template`_``]

    List Windows file types.

    _`template`_ controls the output of each record. It can contain the following placeholders:

    `{commandArgs}`, `{ddeArgs}`, `{displayName}`, `{executable}`, `{extension}`, `{iconIndex}`, `{progID}`, `{takeOwnership}`, `{verb}`

*   **register**

    Register Windows file types.

*   **unregister**

    Unregister Windows file types.


**See also**

[miktex] (1)


<a id="miktex-fndb" /> 
<!-- *miktex-fndb* -->

//6.9. miktex-fndb — manage the MiKTeX file name database
----------------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] fndb _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing the MiKTeX file name database.

**Commands**

*   **refresh**

    Refresh the MiKTeX file name database.

*   **remove**

    Remove the MiKTeX file name database.


**See also**

[miktex] (1)


<a id="miktex-fontmaps" /> 
<!-- *miktex-fontmaps* -->

//6.10. miktex-fontmaps — manage PDF/PostScript font maps
---------------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] fontmaps _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing PDF/PostScript font maps.

**Commands**

*   **configure**

    Configure font map files for PDF/PostScript output drivers.

*   **set-option** _`name`_ [_`value`_]

    Set a configuration option.

*   **show-option** [``--template _`template`_``] _`name`_

    Show a configuration option.

    _`template`_ controls the output. It can contain the following placeholders:

    `{name}`, `{value}`


**See also**

[miktex] (1)


<a id="miktex-formats" /> 
<!-- *miktex-formats* -->

//6.11. miktex-formats — manage TeX formats
-------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] formats _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing TeX formats and METAFONT bases.

**Commands**

*   **build** [``--engine _`engine`_``] [_`key`_]

    Build TeX format files.

*   **list** [``--template _`template`_``]

    List TeX formats.

    _`template`_ controls the output of each record. It can contain the following placeholders:

    `{arguments}`, `{compiler}`, `{custom}`, `{description}`, `{exclude}`, `{inputFile}`, `{key}`, `{name}`, `{noExecutable}`, `{outputFile}`, `{preloaded}`


**See also**

[miktex] (1)


<a id="miktex-links" /> 
<!-- *miktex-links* -->

//6.12. miktex-links — manage links from scripts and formats to executables
---------------------------------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] links _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing links from scripts and formats to executables.

**Commands**

*   **install** [`--force`]

    Install all links. Existing links will be overwritten, if `--force` is specified.

*   **list** [``--template _`template`_``]

    List all links.

    _`template`_ controls the output of each record. It can contain the following placeholders:

    `{linkName}`, `{linkType}`, `{target}`

*   **uninstall**

    Uninstall all links.


**See also**

[miktex] (1)


<a id="miktex-languages" /> 
<!-- *miktex-languages* -->

//6.13. miktex-languages — manage LaTeX language definitions
------------------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] languages _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing LaTeX language definitions.

**Commands**

*   **configure**

    Configure LaTeX language definition files.

*   **list [``--template _`template`_``]**

    List LaTeX language definitions.

_`template`_ controls the output of each record. It can contain the following placeholders:

`{custom}`, `{exclude}`, `{hyphenation}`, `{key}`, `{lefthyphenmin}`, `{righthyphenmin}`, `{loader}`, `{luaspecial}`, `{patterns}`, `{righthyphenmin}`, `{synonyms}`


**See also**

[miktex] (1)


<a id="miktex-luatex" /> 
<!-- *miktex-luatex* -->

//6.14. miktex-luatex — an extended version of pdfTeX using Lua as an embedded scripting language
-------------------------------------------------------------------------------------------------

**Synopsis**

`miktex-luatex` [_`option`_...] [[_`command`_...] | [_`file`_]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

Run the LuaTeX typesetter on _`file`_, usually creating `file.pdf`. Any remaining commands are processed as LuaTeX input, after _`file`_ is read.

Alternatively, if the first non-option argument begins with a backslash, interpret all non-option arguments as a line of LuaTeX input.

Alternatively, if the first non-option argument begins with a `&`, the next word is taken as the _`format`_ to read, overriding all else. Any remaining arguments are processed as above.

If no arguments or options are specified, prompt for input.

If called as **miktex-texlua** it acts as Lua interpreter. If called as **miktex-texluac** it acts as Lua bytecode compiler.

LuaTeX is an extended version of pdfTeX with Unicode and OpenType font support, embeded Lua scripting language, the eTeX and Omega extensions, as well as integrated MetaPost engine, that can create PDF files as well as DVI files. For more information about LuaTeX, see [http://www.luatex.org](http://www.luatex.org), you can read the LuaTeX manual using the MiKTeX Help Utility (**`**mthelp** luatex`**).

All LuaTeX text input and output is considered to be Unicode text.

In DVI mode, LuaTeX can be used as a complete replacement for the TeX engine.

In PDF mode, LuaTeX can natively handle the PDF, JPG, JBIG2, and PNG graphics formats. LuaTeX cannot include PostScript or Encapsulated PostScript (EPS) graphics files; first convert them to PDF using [miktex-epstopdf] (1).

**Options**

When the LuaTeX executable starts, it looks for the `--lua` commandline option. If there is no `--lua` option, the commandline is interpreted in a similar fashion as in traditional pdfTeX. But if the option is present, LuaTeX will enter an alternative mode of commandline parsing in comparison to the standard MiKTeX programs. The presence of `--lua` makes most of other options unreliable, because the Lua initialization file can disable path searching and/or hook functions into various callbacks.

*   ``--lua=_`file`_``

    Load and execute a Lua initialization script.

    The following two options alter the executable behaviour:

*   `--luaonly`

    Start LuaTeX as a Lua interpreter. In this mode, it will set Lua’s `arg[0]` to the found script name, pushing preceding options in negative values and the rest of the commandline in the positive values, just like the Lua interpreter. LuaTeX will exit immediately after executing the specified Lua script.

*   `--luaconly`

    Start LuaTeX as a Lua byte compiler. In this mode, LuaTeX is exactly like **`luac`** from the standalone Lua distribution, except that it does not have the `−l` switch, and that it accepts (but ignores) the `−−luaconly` switch.

    Then the regular options:

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

*   ``--aux-directory=_`dir`_``

    Set _`dir`_ as the directory to which auxiliary files are written. Also look for input files in _`dir`_ first, before along the normal search path.

*   `--c-style-errors`

    Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

*   `--credits`

    Display credits and exit.

*   `--debug-format`

    Enable format debugging.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--disable-write18`

    Disable the \write18{_`command`_} construct.

*   `--draftmode`

    Switch on draft mode. luaTeX; doesn't write a PDF and doesn't read any included images, thus speeding up execution.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--enable-write18`

    Fully enable the \write18{_`command`_} construct. It is only partially enabled by default to avoid security problems. When fully enabled, the command (which undergoes the usual TeX expansions) is passed to the command interpreter. The output of the command is not diverted anywhere, so it will not appear in the log file. The command execution either happens at \output time or right away, according to the absence or presence of the \immediate prefix.

*   `--halt-on-error`

    Quit after the first error.

*   `--help`

    Give help and exit.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

*   `--initialize`

    Become the _INI_ variant of the program.

*   ``--interaction=_`mode`_``

    Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

*   ``--job-name=_`name`_``

    Set the name of the job (\jobname). This has an affect on the output file names.

*   ``--mktex=_`fmt`_``

    Enable _`fmt`_ generation, where _`fmt`_ must be either `tex` or `tfm`.

*   `--no-c-style-errors`

    Don't change the way, error messages are printed.

*   ``--no-mktex=_`fmt`_``

    Disable _`fmt`_ generation, where _`fmt`_ must be either `tex` or `tfm`.

*   `--nosocket`

    Disable the Lua socket library.

*   ``--output-comment=_`string`_``

    Use _`string`_ for DVI file comment instead of date.

*   ``--output-directory=_`dir`_``

    Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

*   ``--output-format=_`format`_``

    Use _`format`_ for job output (one of: `dvi`, `pdf`).

*   `--recorder`

    Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

*   `--restrict-write18`

    Partially enable the \write18{_`command`_} construct.

*   `--safer`

    Disable easily exploitable Lua commands.

*   ``--synctex=_`n`_``

    Generate SyncTeX data for previewers. If _`n`_ is zero, no `.synctex` file is created. If _`n`_ is negative, the `.synctex` file is a text file. If _`n`_ is positive, the `.synctex` file is compressed with **gzip** and the `.gz` file name extension is added.

    Furthermore, _`n`_ is interpreted as a bit field:

    1.  Bit 1 (_`n`_ AND 2)  Don't add the `.gz` file name extension.
    2.  Bit 2 (_`n`_ AND 4)  Activate form support.
    3.  Bit 3 (_`n`_ AND 8)  Activate better compression.

*   ``--undump=_`name`_``

    Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

    %&

    line.

*   `--utc`

    Init time to UTC.

*   `--version`

    Show version information and exit.

    The following options are ignored:

*   `−−8bit`, `−−etex`, `−−parse−first−line`, `−−no−parse−first−line`

    These are always on.

*   ``−−default−translate−file=_`tcxname`_``, ``−−translate−file=_`tcxname`_``

    These are always off.


    **Environment**

*   `MIKTEX_EDITOR`

    The editor to use when selecting **`e`** in the error prompt menu.

    The value can contain these placesholder:

*   `%f`

    The name of the file, which contains the erroneous line of TeX code.

*   `%l`

    The line number.

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

**See Also**

[miktex-epstopdf] (1), [miktex-pdftex] (1)


<a id="miktex-mf" /> 
<!-- *miktex-mf* -->

//6.15. miktex-mf — METAFONT, a language for font and logo design
-----------------------------------------------------------------

**Synopsis**

`miktex-mf` [_`option`_...] [[_`command`_...] | [_`file`_]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

METAFONT reads the program in the specified files and outputs font rasters (in GF format) and font metrics (in TFM format). The METAFONT language is described in _The METAFONTbook_.

Like TeX, METAFONT is normally used with a large body of precompiled macros, and font generation in particular requires the support of several macro files. This version of METAFONT looks at its command line to see what name it was called under. Both **inimf** and **virmf** are links to the **miktex-mf** executable. When called as **inimf** (or when the `--initialize` option is given) it can be used to precompile macros into a `.base` file. When called as **virmf** it will use the _plain_ base. When called under any other name, METAFONT will use that name as the name of the base to use. For example, when called as **miktex-mf** the _mf_ base is used, which is identical to the _plain_ base. Other bases than _plain_ are rarely used.

The commands given on the command line to the METAFONT program are passed to it as the first input line. (But it is often easier to type extended arguments as the first input line, since shells tend to gobble up or misinterpret METAFONT's favorite symbols, like semicolons, unless you quote them.) As described in _The METAFONTbook_, that first line should begin with a filename, a \controlsequence, or a ``&_`basename`_``.

The normal usage is to say **``miktex-mf \mode=_`printengine`_; input _`font`_``** to start processing ``_`font`_.mf``. (Or you can just say **miktex-mf** and give the other stuff on the next line.) Other control sequences, such as **`batchmode`** (for silent operation) can also appear. The name _`font`_ will be the “jobname”, and is used in forming output file names. If METAFONT doesn't get a file name in the first line, the job name is `mfput`. The default extension, `.mf`, can be overridden by specifying an extension explicitly.

A log of error messages goes into the file ``_`jobname`_.log``. The output files are ``_`jobname`_.tfm`` and ``_`jobname`_._`number`_gf``, where _`number`_ depends on the resolution and magnification of the font. The mode in this example is shown generically as _`printengine`_, a symbolic term for which the name of an actual device or, most commonly, the name `localfont` (see below) must be substituted. If the mode is not specified or is not valid, METAFONT will default to proof mode which produces large character images for use in font design and refinement. Proof mode can be recognized by the suffix `.2602gf` after the job name. Examples of proof mode output can be found in _Computer Modern Typefaces_ (Volume E of Computers and Typesetting). The system of magsteps is identical to the system used by TeX, with values generally in the range 0.5, 1.0, 2.0, 3.0, 4.0 and 5.0.

Magnification can also be specified not as a magstep but as an arbitrary value, such as 1.315, to create special character sizes.

Before font production can begin, it is necessary to set up the appropriate base files. The minimum set of components for font production for a given printengine is the `plain.mf` macro file and the local mode_def file. The macros in `plain.mf` can be studied in an appendix to _The METAFONTbook_; they were developed by Donald E. Knuth, and this file should never be altered except when it is officially upgraded. Each mode_def specification helps adapt fonts to a particular printengine. The local ones in use on this computer should be in `modes.mf`.

The **`e`** response to METAFONT's error-recovery prompt causes the default editor to start up at the current line of the current file. The configuration value _`[Core]Editor`_ can be used to change the editor used. It may contain a string with `%f` indicating where the file name goes and `%l` indicating where the decimal line number (if any) goes. For example, an _`[Core]Editor`_ string for **emacs** can be set with the command

    > initexmf --set-config-value="[Core]Editor=emacs +%l%f"

A convenient file is `null.mf`, containing nothing. When METAFONT can't find the file it thinks you want to input, it keeps asking you for another file name; responding **`null`** gets you out of the loop if you don't want to input anything.

### Online Graphics Output
------------------------------

You can see METAFONTs output without printing. Chapter 23 of _The METAFONTbook_ describes what you can do. You enable screen ouput by giving `--screen` on the command-line.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

*   ``--aux-directory=_`dir`_``

    Set _`dir`_ as the directory to which auxiliary files are written. Also look for input files in _`dir`_ first, before along the normal search path.

*   ``--bistack-size=_`n`_``

    Set the size of the stack for bisection algorithms.

*   ``--buf-size=_`n`_``

    Set the the maximum number of characters simultaneously present in current lines of open files and in control sequences between \csname and \endcsname. TeX uses the buffer to contain input lines, but macro expansion works by writing material into the buffer and reparsing the line. As a consequence, certain constructs require the buffer to be very large, even though most documents can be handled with a small value.

*   `--c-style-errors`

    Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--dont-parse-first-line`

    Disable checking whether the first line of the main input file starts with %&.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   ``--error-line=_`n`_``

    Set the width of context lines on terminal error messages.

*   ``--half-error-line=_`n`_``

    Set the width of first lines of contexts in terminal error messages.

*   `--halt-on-error`

    Quit after the first error.

*   `--help`

    Give help and exit.

*   `--hhelp`

    This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

*   `--initialize`

    Become the _INI_ variant of the program.

*   ``--interaction=_`mode`_``

    Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

*   ``--job-name=_`name`_``

    Set the name of the job (\jobname). This has an affect on the output file names.

*   ``--job-time=_`file`_``

    Set the time-stamp of all output files equal to _`file`_'s time-stamp.

*   ``--lig-table-size=_`n`_``

    Set the maximum number of ligature/kern steps. Must be at least 255 and at most 32510.

*   ``--main-memory=_`n`_``

    Change the total size (in memory words) of the main memory array. Relevant only while creating memory dump files.

*   ``--max-print-line=_`n`_``

    Set the width of longest text lines output; should be at least `60`.

*   ``--max-strings=_`n`_``

    Set the maximum number of strings.

*   ``--max-wiggle=_`n`_``

    Set the number of autorounded points per cycle.

*   ``--move-size=_`n`_``

    Set the the space for storing moves in a single octant.

*   `--no-c-style-errors`

    Don't change the way, error messages are printed.

*   ``--output-directory=_`dir`_``

    Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

*   ``--param-size=_`n`_``

    Set the the maximum number of simultaneous macro parameters.

*   `--parse-first-line`

    Check whether the first line of the main input file starts with %&, and parse if it does. This can be used to specify extra command-line options.

*   ``--path-size=_`n`_``

    Set the the maximum number of knots between breakpoints of a path.

*   ``--pool-size=_`n`_``

    Set the maximum number of characters in strings, including all error messages and help texts, and the names of all fonts and control sequences.

*   `--quiet`

    Suppress all output, except errors.

*   ``--record-package-usages=_`file`_``

    Record all package usages and write them into _`file`_.

*   `--recorder`

    Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

*   `--screen`

    Enable screen output.

*   ``--stack-size=_`n`_``

    Set the maximum number of simultaneous input sources.

*   ``--string-vacancies=_`n`_``

    Set the minimum number of characters that should be available for the user's control sequences and font names, after the compiler's own error messages are stored. Must be at least 25000 less than `pool_size`, but doesn't need to be nearly that large.

*   ``--tcx=_`tcxname`_``

    Use the _`tcxname`_ translation table to set the mapping of input characters and re-mapping of output characters.

*   `--time-statistics`

    Show processing time statistics.

*   ``--trace[=_`tracestreams`_]``

    Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

*   ``--undump=_`name`_``

    Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

    %&

    line.

*   `--version`

    Show version information and exit.


**Environment**

*   `MFINPUTS`

    Extra paths to locate METAFONT input and openin files.

*   `MIKTEX_EDITOR`

    The editor to use when selecting **`e`** in the error prompt menu.

    The value can contain these placesholder:

*   `%f`

    The name of the file, which contains the erroneous line of TeX code.

*   `%l`

    The line number.

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.


**See also**

978-0201134452. _The METAFONTbook_. Donald E. Knuth. Addison-Wesley. 1986.


<a id="miktex-mpost" /> 
<!-- *miktex-mpost* -->

//6.16. miktex-mpost — MetaPost, a system for creating graphics
---------------------------------------------------------------

**Synopsis**

`miktex-mpost` [_`option`_...] [[_`command`_...] | [_`file`_]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

MetaPost interprets the MetaPost language and produces PostScript (EPS) or Scalable Vector Graphics (SVG) pictures. The MetaPost language is similar to Knuth's METAFONT with additional features for including TeX commands and accessing features of PostScript not found in METAFONT.

MetaPost is normally used with some preloaded macros, and it will use its executable name as the name of the preload file to use. For example, when called as **miktex-mpost** the `mpost.mp` file is used, which is identical to `plain.mp`. When the `--initialize` option is given, preloading does not happen.

The _`commands`_ given on the command line to the MetaPost program are passed to it as the first input line. (But it is often easier to type extended arguments as the first input line, since shells tend to gobble up or misinterpret MetaPost's favorite symbols, like semicolons, unless you quote them.) The normal usage is to say **`miktex-mpost figs`** to process the file `figs.mp`. The basename of _`figs`_ becomes the “jobname”, and is used in forming output file names. If no file is named, the jobname becomes `mpout`. The default extension, `.mp`, can be overridden by specifying an extension explicitly.

When the `--dvitomp` option is given, MetaPost acts as DVI-to-MPX converter only. Run **`miktex-mpost --dvitomp --help`** for option explanation.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

*   `--c-style-errors`

    Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

*   `--debug`

    Print debugging info and leave temporary files in place.

*   `--halt-on-error`

    Quit after the first error.

*   `--help`

    Give help and exit.

*   `--initialize`

    Become the _INI_ variant of the program.

*   ``--interaction=_`mode`_``

    Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

*   ``--job-name=_`name`_``

    Set the name of the job (\jobname). This has an affect on the output file names.

*   `--no-c-style-errors`

    Don't change the way, error messages are printed.

*   ``--numbersystem=_`string`_``

    Set number system mode (_`string`_ one of: `scaled`, `double`, `binary`, `decimal`).

*   ``--output-directory=_`dir`_``

    Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

*   `--recorder`

    Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

*   `--restricted`

    Be secure: disable **tex**, **makempx** and editor commands.

*   ``-s _`internal`_="_`string`_"``

    Set _`internal`_ to the _`string`_ value.

*   ``-s _`internal`_=_`number`_``

    Set _`internal`_ to the _`number`_ value.

*   ``--tex=_`texprogram`_``

    Use _`texprogram`_ instead of **miktex-tex** when compiling text labels.

    This flag overrides the environment variable `TEX`.

*   `--troff`

    Set **prologues:=1** and assume `--tex=troff`.

*   ``--undump=_`name`_``

    Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

    %&

    line.

*   `--version`

    Show version information and exit.


    **Environment**

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

*   `MPINPUTS`

    Extra paths to locate MetaPost input files.

*   `MPINPUTS`

    Extra paths to locate MetaPost input files.


<a id="miktex-packages" /> 
<!-- *miktex-packages* -->

//6.17. miktex-packages — manage MiKTeX packages
------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] packages _`command`_ [_`command-option-or-parameter`_...]

**Description**

Commands for managing MiKTeX packages.

**Commands**

*   **check-update** [``--repository _`url-or-directory`_``]

    Check for MiKTeX package updates. The exit code will be 100, when package updates are available.

*   **check-upgrade** [``--repository _`url-or-directory`_``] _`package-level`_

    Check for a MiKTeX upgrade. The exit code will be 100, when an upgrade is available.

*   **info** [``--template _`template`_``] _`package-id`_

    Show information about MiKTeX packages.

    _`template`_ controls the output of each record. It can contain the following placeholders:

    `{archiveFileSize}`, `{copyrightOwner}`, `{copyrightYear}`, `{creator}`, `{ctanPath}`, `{description}`, `{digest}`, `{displayName}`, `{docFiles}`, `{id}`, `{isContained}`, `{isContainer}`, `{isInstalled}`, `{isInstalledCommon}`, `{isInstalledUser}`, `{isObsolete}`, `{isPureContainer}`, `{isRemovable}`, `{licenseType}`, `{minTargetSystemVersion}`, `{numFiles}`, `{refCount}`, `{releaseState}`, `{requiredBy}`, `{requiredPackages}`, `{runFiles}`, `{size}`, `{sizeDocFiles}`, `{sizeRunFiles}`, `{sizeSourceFiles}`, `{sourceFiles}`, `{targetSystem}`, `{timeInstalled}`, `{timeInstalledCommon}`, `{timeInstalledUser}`, `{timePackaged}`, `{title}`, `{version}`, `{versionDate}`

*   **install** [``--package-id-file _`file`_``] [``--repository _`url-or-directory`_``] _`package-id...`_

    Install MiKTeX packages.

*   **list** [``--template _`template`_``]

    List MiKTeX packages.

    _`template`_ controls the output of each record. See the **info** command, for a list of possible placeholders.

*   **remove** [``--package-id-file _`file`_``] _`package-id...`_

    Remove installed MiKTeX packages.

*   **update** [``--package-id-file _`file`_``] [``--repository _`url-or-directory`_``] [_`package-id...`_]

    Update MiKTeX packages.

*   **update-package-database** [``--repository _`url-or-directory`_``]

    Update the MiKTeX package database.

*   **upgrade** [``--repository _`url-or-directory`_``] _`package-level`_

    Upgrade MiKTeX to the specified level.

*   **verify** [``--package-id-file=_`file`_``] [_`package-id...`_]

    Verify the integrity of installed MiKTeX packages.


**See also**

[miktex] (1)


<a id="miktex-repositories" /> 
<!-- *miktex-repositories* -->

//6.18. miktex-repositories — manage MiKTeX package repositories
----------------------------------------------------------------

**Synopsis**

`miktex` [_`common-option`_...] repositories _`command`_ [_`command-option`_...]

**Description**

Commands for managing MiKTeX package repositories.

**Commands**

*   **check-bandwidth** [``--template=_`template`_``] [``--url=_`url`_``]

    Check the bandwidth of MiKTeX package repositories.

    _`template`_ controls the output of each record. See the **info** command, for a list of possible placeholders.

*   **info** [``--template=_`template`_``] ``--url=_`url`_``

    Get information about a MiKTeX package repositories.

    _`template`_ controls the output of each record. It can contain the following placeholders:

    `{bandwidth}`, `{country}`, `{delay}`, `{description}`, `{integrity}`, `{lastCheckTime}`, `{lastVisitTime}`, `{packageLevel}`, `{ranking}`, `{relativeDelay}`, `{releaseState}`, `{status}`, `{timeDate}`, `{town}`, `{type}`, `{url}`, `{version}`

*   **list** [``--template=_`template`_``]

    List MiKTeX repositories.

_`template`_ controls the output of each record. See the **info** command, for a list of possible placeholders.


**See also**

[miktex] (1)


<a id="miktex" /> 
<!-- *miktex* -->

//6.19. miktex — One MiKTeX Utility
-----------------------------------

**Synopsis**

`miktex` [_`common-option`_...] _`topic`_ _`command`_ [_`command-option-or-parameter`_...]

**Description**

**miktex** is the utility to configure and maintain a MiKTeX installation.

### User mode vs. administrator mode
----------------------------------------

This utility can be run in two modes:

*   User mode (default)

    MiKTeX operates on user-scoped configuration and data files.

*   Administrator mode

    Only system-wide MiKTeX configuration and data files are modified, assuming that the MiKTeX setup is shared by all users. The utility must be run with administrator privileges.

By default, the utility runs in user mode. You can turn on administrator mode with the `--admin` option. For example, if you want to update the system-wide file name database, you invoke the utility as follows:

    > miktex --admin fndb refresh


### Common options
----------------------

`--admin`

Run in administrator mode:

*   Operate on the system-wide MiKTeX configuration data store.
*   Install packages for all users.
    

Using this option requires a shared MiKTeX setup, i.e., MiKTeX must have been set up for all users. The program must be run with administrator privileges.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--quiet` Suppress screen output.
*   `--verbose` Increase the verbosity level.
*   `--version` Print the version number and exit.

### Topics
--------------

*   [miktex-filesystem] (1) - Commands for watching the file system.
*   [miktex-filetypes] (1) - Commands for managing Windows file types.
*   [miktex-fndb] (1) - Commands for managing the MiKTeX file name database.
*   [miktex-fontmaps] (1) - Commands for managing PDF/PostScript font maps.
*   [miktex-formats] (1) - Commands for managing TeX formats and METAFONT bases.
*   [miktex-languages] (1) - Commands for managing LaTeX language definitions.
*   [miktex-links] (1) - Commands for managing links from scripts and formats to executables.
*   [miktex-packages] (1) - Commands for managing MiKTeX packages.
*   [miktex-repositories] (1) - Commands for managing MiKTeX package repositories.

**See also**

[miktex.ini] (5)


<a id="miktexsetup" /> 
<!-- *miktexsetup* -->

//6.20. miktexsetup — MiKTeX setup utility
------------------------------------------

**Synopsis**

`miktexsetup_standalone` [``_`options`_``] download

`miktexsetup_standalone` [``_`options`_``] install

`miktexsetup` [``_`options`_``] uninstall

**Description**

The MiKTeX Setup Utility is used to download, set up and remove MiKTeX. This utility is the command line counterpart of the MiKTeX Setup Wizard. It is suitable for unattended setup tasks.

The utility comes in two variants:

standalone (**miktexsetup_standalone**)

The standalone variant can be downloaded from the MiKTeX download page. It is only available for Windows.

integrated (**miktexsetup**)

The integrated variant is a component of each MiKTeX installation.

The **`download`** task creates a local package package repository which is a mirror of the remote package repository. It is possible to run the task on a regular basis in order to maintain an up-to-date package repository.

The **`install`** task installs MiKTeX from a local package repository. This task is only available in the standalone variant.

The **`uninstall`** task removes MiKTeX. This task is only available in the integrated variant and only on Windows.

**Options**

``--common-config=_`dir`_``

Set the location of the common configuration directory. This option requires administrator privileges.

``--common-data=_`dir`_``

Set the location of the common data directory. This option requires administrator privileges.

``--common-install=_`dir`_``

Set the common installation directory. This option requires administrator privileges.

``--common-link-target-directory=_`dir`_``

Set the system-wide directory in which to create symbolic links to MiKTeX executables.

``--common-roots=_`dirs`_``

Register additional directories for all users. _`dirs`_ must be a semicolon-separated list of fully qualified path names. This option requires administrator privileges.

Environment variables (<VARNAME>) can be used.

`--list-repositories`

Download the list of known package repository URLs, then print the list.

``--local-package-repository=_`dir`_``

Download into (install from) the specified directory.

`--modify-path`

Add MiKTeX to `PATH`.

`--modify-path=no`

Don't add MiKTeX to `PATH`.

`--modify-path`

Add MiKTeX to `PATH`.

``--package-set=_`set`_``

Download/Install the specified package set. This must be one of `essential`, `basic`, `complete`.

``--portable=_`dir`_``

Setup MiKTeX for use on a portable device.

`--print-info-only`

Print information about what would be done then exit.

``--program-folder=_`name`_``

Add shortcuts to the specified program folder.

`--quiet`

Suppress all output, except errors.

``--remote-package-repository=_`url`_``

Download from the specified URL. Use `--list-repositories` to download an up-to-date list of possible repositories.

`--shared=yes`

Run the task for all users. This option requires administrator privileges.

`--shared=no`

Run the task for current user only.

``--trace[=_`tracestreams`_]``

Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

`--use-registry=yes`

Write configuration settings into the Windows registry.

`--use-registry=no`

Don't write configuration settings into the Windows registry. Use configuration files instead.

``--user-config=_`dir`_``

Set the location of the configuration directory for the current user.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-data=_`dir`_``

Set the location of the data directory for the current user.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-install=_`dir`_``

Set the user installation directory.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-link-target-directory=_`dir`_``

Set the per-user directory in which to create symbolic links to MiKTeX executables.

``--user-roots=_`dirs`_``

Register additional directories for the current user. _`dirs`_ must be a semicolon-separated list of fully qualified path names.

Environment variables (<VARNAME>) can be used.

`--verbose`

Turn on verbose output mode.

`--version`

Show version information and exit.

**Examples**

### Downloading

The first task is to download MiKTeX into a local package repository:

    > miktexsetup_standalone ^
     --verbose ^
     --local-package-repository=C:\miktex-repository ^
     --package-set=complete ^
     download

This command will create a local package repository in `C:\miktex-repository`.

It is possible to interrupt (Control+C) this operation at anytime and resume it later by running the same command again.

### Installing for all users

In this example, MiKTeX is installed for all users from the local package repository `C:\miktex-repository`. User directories are specified by using environment variables (<VARNAME>) which are expanded at run-time (delayed expansion).

You can first specify `--print-info-only` in order to perform a dry run:

    > miktexsetup_standalone ^
     --verbose ^
     --local-package-repository=C:\miktex-repository ^
     --shared=yes ^
     --user-config="<APPDATA>\MiKTeX" ^
     --user-data="<LOCALAPPDATA>\MiKTeX" ^
     --user-install=<APPDATA>\MiKTeX" ^
     --print-info-only
     install
    setup task: install from local package repository
    local package repository: C:\miktex-repository
    package level: complete
    install for all users?: yes
    use registry?: yes
    modify path?: yes
    common install root: "C:\Program Files (x86)\MiKTeX"
    user install root: <APPDATA>\MiKTeX
    user config root: <LOCALAPPDATA>\MiKTeX
    user data root: <APPDATA>\MiKTeX
    program folder name: "MiKTeX"

### Uninstalling

MiKTeX can be removed by selecting the **`uninstall`** task (only available in the integrated variant on Windows). `--shared=yes` should be specified, if MiKTeX is installed for all users.

    > miktexsetup --verbose --shared=yes uninstall


<a id="mpm" /> 
<!-- *mpm* -->

//6.21. mpm — MiKTeX package manager
------------------------------------

**Synopsis**

`mpm` [_`option`_...]

**Description**

MPM starts in windowed mode, if you do not specify any command-line options.

//User mode vs. administrator mode
----------------------------------------

This utility can be run in two modes:

1. User mode (default)

    MPM operates on the user installation directory (usually `%LOCALAPPDATA%\Programs\MiKTeX 2.9`).

2. Administrator mode

    MPM operates on the system-wide installation directory (usually `C:\Program Files\MiKTeX 2.9`), assuming that the MiKTeX setup is shared by all users. MPM must be run with administrator privileges.

By default, MPM runs in user mode. You can turn on administrator mode with the `--admin` option. For example, if you want to install a package for all users, you invoke MPM as follows:

    > mpm --admin --install=a0poster

**Options**

`--admin`

Run in administrator mode:

*   Operate on the system-wide MiKTeX configuration data store.
    
*   Install packages for all users.
    

Using this option requires a shared MiKTeX setup, i.e., MiKTeX must have been set up for all users. The program must be run with administrator privileges.

`--help`

Give help and exit.

`--hhelp`

This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

``--import=_`package`_``

Import the specified package from another MiKTeX installation. The root directory must be specified via ``--repository=_`dir`_``.

`--import-all`

Import all packages from another MiKTeX installation. The root directory must be specified via ``--repository=_`dir`_``.

`--pick-repository-url`

Pick up a suitable URL from the package repository list and print it.

`--quiet`

Suppress all output, except errors.

``--repository=_`location`_``

Use the specified location as the package repository. The location can be either a fully qualified path name (a local package repository) or an URL (a remote package repository).

``--repository-release-state=_`state`_``

Select the release state of the remote package repository. The release state is relevant for finding appropriate package repositories. The release state must be one of `stable` or `next`.

``--set-repository=_`location`_``

Store the location of the default package repository in the MiKTeX configuration data store. The location can be either a fully qualified path name (a local package repository) or an URL (a remote package repository).

``--trace[=_`tracestreams`_]``

Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

`--verbose`

Turn on verbose output mode.

`--version`

Show version information and exit.


**Environment**

`MIKTEX_REPOSITORY`

Location of the default package repository. This can be either a fully qualified path name (a local package repository) or an URL (a remote package repository).

`MIKTEX_TRACE`

Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

`http_proxy`

The proxy server to be used for HTTP.

`FTP_PROXY`

The proxy server to be used for .

`ALL_PROXY`

The proxy server to be used, if no protocol-specific proxy is set.

`NO_PROXY`

Comma-separated list of host names that should not go through any proxy.


**See also**

[miktex] (1)


<a id="mthelp" /> 
<!-- *mthelp* -->

//6.22. mthelp — MiKTeX help utility
------------------------------------

**Synopsis**

`mthelp` [_`option`_...] {_`name`_...}

**Description**

**mthelp** is a utility to look up MiKTeX related documentation.

**mthelp** creates an HTML page which contains a short description of the package together with links to all documentation files. An HTML viewer is started to view the page.

You can use the `--view` to bypass the intermediate HTML file.

_`name`_ should be the name of a package in the TeX distribution.

**Options**

`--list-only`

List documentation files, but do not start a viewer.

`--print-only`

Print the command that would be executed to view the documentation, but do not start the command.

`--quiet`

Suppress all output, except errors.

`--version`

Show version information and exit.

`--view`

Open the main documenation file in a viewer.


**Environment**

`MIKTEX_TRACE`

Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

`MIKTEX_VIEW_dvi`

DVI viewer.

`MIKTEX_VIEW_pdf`

PDF viewer.

`MIKTEX_VIEW_ps`

PostScript viewer.

`MIKTEX_VIEW_html`

HTML viewer.

`MIKTEX_VIEW_txt`

Text viewer.

The environment variables should be set with a “%f” as a placeholder for the name of the file. For example:

    > MIKTEX_VIEW_pdf="gv %f"

**Files**

The intermediate HTML file (``_`package`_.html``) is stored in the directory `miktex/mthelp` relative to the data TEXMF data root (usually `%LOCALAPPDATA%\MiKTeX\2.9`).


**See also**

[MiKTeX Project Page](https://miktex.org/)


**Environment**

`MIKTEX_TRACE`

Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.


<a id="mtprint" /> 
<!-- *mtprint* -->

//6.23. mtprint — MiKTeX print utility
--------------------------------------

**Synopsis**

`mtprint` [_`option`_...] _`file`_...

**Description**

**mtprint** sends TeX output files to a printing device.

**Options**

*   `--even-only`

    Prints only even TeX pages.

*   `--landscape`

    Selects landscape output format.

*   `--odd-only`

    Prints only odd TeX pages.

*   ``--page-range=_`range`_``

    Selects a TeX page range (e.g., 20–21). Multiple `--page-range` options accumulate

*   --print-method=_`method`_

    Selects a print method. One of

*   `psbmp`

    This method uses Dvips and Ghostscript to produce the print output.

*   `ps`

    This method uses Dvips to produce an intermediate PostScript file which will be sent to the printer. This only works for PostScript printers.

*   `--print-nothing`

    Simulates printing.

*   --printer=_`printer`_

    Selects a printing device. The default printer is used, if this option is omitted.


<a id="miktex-pdftex" /> 
<!-- *miktex-pdftex* -->

//6.24. miktex-pdftex — DVI/PDF output from TeX
-----------------------------------------------

**Synopsis**

`miktex-pdftex` [_`option`_...] [[_`file`_] | [_`command`_...]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

Run the pdfTeX typesetter on _`file`_, usually creating `file.pdf`. If the file argument has no extension, `.tex` will be appended to it. Instead of a file name, a set of pdfTeX commands can be given, the first of which must start with a backslash. With a ``&_`format`_`` argument pdfTeX uses a different set of precompiled commands, contained in ``_`format.fmt`_``; it is usually better to use the ``--undump=_`format`_`` option instead.

pdfTeX is a version of TeX, with the eTeX extensions, that can create PDF files as well as DVI files.

In DVI mode, pdfTeX can be used as a complete replacement for the TeX engine.

The typical use of pdfTeX is with a pregenerated formats for which PDF output has been enabled. The **miktex-pdftex** command uses the equivalent of the plain TeX format, and the **miktex-pdflatex** command uses the equivalent of the LaTeX format. To generate formats, use the `--initialize` switch.

In PDF mode, pdfTeX can natively handle the PDF, JPG, JBIG2 and PNG graphics formats. pdfTeX cannot include PostScript or Encapsulated PostScript (EPS) graphics files; first convert them to PDF using [miktex-epstopdf] (1). pdfTeX’s handling of its command-line arguments is similar to that of of the other TeX programs in the MiKTeX implementation.

**Options**

*   ``--alias=_`name`_``

    Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

*   ``--aux-directory=_`dir`_``

    Set _`dir`_ as the directory to which auxiliary files are written. Also look for input files in _`dir`_ first, before along the normal search path.

*   ``--buf-size=_`n`_``

    Set the the maximum number of characters simultaneously present in current lines of open files and in control sequences between \csname and \endcsname. TeX uses the buffer to contain input lines, but macro expansion works by writing material into the buffer and reparsing the line. As a consequence, certain constructs require the buffer to be very large, even though most documents can be handled with a small value.

*   `--c-style-errors`

    Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

*   `--disable-8bit-chars`

    Make only 7-bit characters printable.

*   `--disable-installer`

    Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--disable-write18`

    Disable the \write18{_`command`_} construct.

*   `--dont-parse-first-line`

    Disable checking whether the first line of the main input file starts with %&.

*   `--draftmode`

    Sets \pdfdraftmode so pdfTeX doesn't write a PDF and doesn't read any included images, thus speeding up execution.

*   `--enable-8bit-chars`

    Make all characters printable.

*   `--enable-enctex`

    Enable encTeX extensions such as \mubyte.

*   `--enable-etex`

    Enable eTeX extensions.

*   `--enable-installer`

    Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

*   `--enable-mltex`

    Enable MLTeX extensions such as \charsubdef.

*   `--enable-write18`

    Fully enable the \write18{_`command`_} construct. It is only partially enabled by default to avoid security problems. When fully enabled, the command (which undergoes the usual TeX expansions) is passed to the command interpreter. The output of the command is not diverted anywhere, so it will not appear in the log file. The command execution either happens at \output time or right away, according to the absence or presence of the \immediate prefix.

*   ``--error-line=_`n`_``

    Set the width of context lines on terminal error messages.

*   ``--extra-mem-bot=_`n`_``

    Set the extra size (in memory words) for large data structures like boxes, glue, breakpoints, et al. Relevant only after the memory dump file has been read.

*   ``--extra-mem-top=_`n`_``

    Set the extra size (in memory words) for chars, tokens, et al. Relevant only after the memory dump file has been read.

*   ``--font-max=_`n`_``

    Set the maximum internal font number.

*   ``--font-mem-size=_`n`_``

    Set the size, in TeX memory words, of the font memory.

*   ``--half-error-line=_`n`_``

    Set the width of first lines of contexts in terminal error messages.

*   `--halt-on-error`

    Quit after the first error.

*   ``--hash-extra=_`n`_``

    Set the extra space for the hash table of control sequences (which allows 10K names as distributed).

*   `--help`

    Give help and exit.

*   `--hhelp`

    This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

*   ``--include-directory=_`dir`_``

    Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

*   `--initialize`

    Become the _INI_ variant of the program.

*   ``--interaction=_`mode`_``

    Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

*   ``--job-name=_`name`_``

    Set the name of the job (\jobname). This has an affect on the output file names.

*   ``--job-time=_`file`_``

    Set the time-stamp of all output files equal to _`file`_'s time-stamp.

*   ``--main-memory=_`n`_``

    Change the total size (in memory words) of the main memory array. Relevant only while creating memory dump files.

*   ``--max-in-open=_`n`_``

    Set the maximum number of input files and error insertions that can be going on simultaneously.

*   ``--max-print-line=_`n`_``

    Set the width of longest text lines output; should be at least `60`.

*   ``--max-strings=_`n`_``

    Set the maximum number of strings.

*   ``--nest-size=_`n`_``

    Set the maximum number of semantic levels simultaneously active.

*   `--no-c-style-errors`

    Don't change the way, error messages are printed.

*   ``--output-directory=_`dir`_``

    Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

*   `--output-format=format`

    Set the output format mode, where _`format`_ must be either `dvi` or `pdf`. This also influences the set of graphics formats understood by pdfTeX.

*   ``--param-size=_`n`_``

    Set the the maximum number of simultaneous macro parameters.

*   `--parse-first-line`

    Check whether the first line of the main input file starts with %&, and parse if it does. This can be used to specify extra command-line options.

*   ``--pool-free=_`n`_``

    Set the minimum pool space left after loading the format.

*   ``--pool-size=_`n`_``

    Set the maximum number of characters in strings, including all error messages and help texts, and the names of all fonts and control sequences.

*   `--quiet`

    Suppress all output, except errors.

*   ``--record-package-usages=_`file`_``

    Record all package usages and write them into _`file`_.

*   `--recorder`

    Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

*   `--restrict-write18`

    Partially enable the \write18{_`command`_} construct.

*   ``--save-size=_`n`_``

    Set the the amount of space for saving values outside of current group.

*   `--src-specials`

    Embed source file information (source specials) in the DVI file.

*   ``--stack-size=_`n`_``

    Set the maximum number of simultaneous input sources.

*   ``--string-vacancies=_`n`_``

    Set the minimum number of characters that should be available for the user's control sequences and font names, after the compiler's own error messages are stored. Must be at least 25000 less than `pool_size`, but doesn't need to be nearly that large.

*   ``--synctex=_`n`_``

    Generate SyncTeX data for previewers. If _`n`_ is zero, no `.synctex` file is created. If _`n`_ is negative, the `.synctex` file is a text file. If _`n`_ is positive, the `.synctex` file is compressed with **gzip** and the `.gz` file name extension is added.

    Furthermore, _`n`_ is interpreted as a bit field:

    1.   Bit 1 (_`n`_ AND 2) Don't add the `.gz` file name extension.
    2.   Bit 2 (_`n`_ AND 4) Activate form support.
    3.   Bit 3 (_`n`_ AND 8) Activate better compression.

*   ``--tcx=_`tcxname`_``

    Use the _`tcxname`_ translation table to set the mapping of input characters and re-mapping of output characters.

*   `--time-statistics`

    Show processing time statistics.

*   ``--trace[=_`tracestreams`_]``

    Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

*   ``--trie-size=_`n`_``

    Set the amount of space for hyphenation patterns.

*   ``--undump=_`name`_``

    Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

    %&

    line.

*   `--version`

    Show version information and exit.

**Files**

[pdftex.cfg] (5)


**Environment**

*   `MIKTEX_EDITOR`

    The editor to use when selecting **`e`** in the error prompt menu.

    The value can contain these placesholder:

*   `%f`

    The name of the file, which contains the erroneous line of TeX code.

*   `%l`

    The line number.

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

*   `TEXINPUTS`

    Extra paths to locate TeX \input and \openin files.

*   `TEXINPUTS`

    Extra paths to locate TeX \input and \openin files.

*   `TFMFONTS`

    Extra paths to locate TeX font metric files


**See also**

[miktex-epstopdf] (1)

The full pdfTeX manual can be accessed from the home page or CTAN page.


<a id="setupwiz" /> 
<!-- *setupwiz* -->

//6.25. setupwiz — MiKTeX setup wizard
--------------------------------------

**Synopsis**

`basic-miktex-23.10-next.exe` [``_`options`_``]

`setup-23.10-next.exe` [``_`options`_``]

**Description**

MiKTeX Setup Wizard is used to install MiKTeX.

There a two instances of the installer:

Basic MiKTeX Installer (**basic-miktex-23.10-next.exe**)

_Basic MiKTeX Installer_ is used to set up a basic MiKTeX system. All required resources are embedded in the installer, i.e., nothing else needs to be downloaded from the Internet.

MiKTeX Net Installer (**setup-23.10-next.exe**)

_MiKTeX Net Installer_ is used to set up a complete MiKTeX system. In a first step, all required resources will be downloaded from the Internet. In a second step, a complete MiKTeX system is installed.

Both installers read command-line options from the file `setupwiz.opt`, if it exists.

**Options**

`--allow-unattended-reboot`

Restart the system, if necessary.

``--common-config=_`dir`_``

Set the location of the common configuration directory. This option requires administrator privileges.

``--common-data=_`dir`_``

Set the location of the common data directory. This option requires administrator privileges.

``--common-install=_`dir`_``

Set the common installation directory. This option requires administrator privileges.

``--common-roots=_`dirs`_``

Register additional directories for all users. _`dirs`_ must be a semicolon-separated list of fully qualified path names. This option requires administrator privileges.

Environment variables (<VARNAME>) can be used.

`--download-only`

Download all required packages, but do not otherwise install MiKTeX.

`--dry-run`

Simulate. No files shall be downloaded and/or installed.

`--install-from-local-repository`

Install MiKTeX from a directory (to be specified with the `--local-package-repository` option).

``--local-package-repository=_`dir`_``

Download into (Install from) the specified directory.

`--no-additional-roots`

Do not integrate additional TEXMF root directories into the MiKTeX setup.

`--no-registry`

Do not store path information in the Windows Registry but write the startup configuration file (`miktexstartup.ini`).

``--package-set=_`set`_``

Download/Install the specified package set. This must be one of `basic`, `complete`.

`--portable`

Setup MiKTeX Portable.

`--private`

Install MiKTeX for the current user only.

``--program-folder=_`name`_``

Add shortcuts to the specified program folder.

``--remote-package-repository=_`url`_``

Download from the specified the URL.

`--shared`

Install MiKTeX for everyone using this computer. This option requires administrator privileges.

`--unattended`

Run in unattended mode.

``--user-config=_`dir`_``

Set the location of the configuration directory for the current user.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-data=_`dir`_``

Set the location of the data directory for the current user.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-install=_`dir`_``

Set the user installation directory.

Environment variables (<VARNAME>) can be used. See the example below.

``--user-roots=_`dirs`_``

Register additional directories for the current user. _`dirs`_ must be a semicolon-separated list of fully qualified path names.

Environment variables (<VARNAME>) can be used.

**Examples**

In this example, MiKTeX is installed from a network share (`\server\miktex\repository`). User directories are specified by using environment variables (<VARNAME>) which are expanded at run-time.

    >


<a id="miktex-tex" /> 
<!-- *miktex-tex* -->

//6.26. miktex-tex — text formatting and typesetting
----------------------------------------------------

**Synopsis**

`miktex-tex` [_`option`_...] [[_`file`_] | [_`command`_...]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

Run the TeX typesetter on _`file`_, usually creating ``_`file`_.dvi``. If the file argument has no extension, `.tex` will be appended to it. Instead of a filename, a set of TeX commands can be given, the first of which must start with a backslash. With a `&format` argument TeX uses a different set of precompiled commands, contained in ``_`format`_.fmt``; it is usually better to use the ``-undump=_`format`_`` option instead.

TeX formats the interspersed text and commands contained in the named files and outputs a typesetter independent file (called DVI, which is short for DeVice Independent). TeX's capabilities and language are described in _The TeXbook_. TeX is normally used with a large body of precompiled macros, and there are several specific formatting systems, such as LaTeX, which require the support of several macro files.

This version of TeX looks at its command-line to see what name it was called under. Both **initex** and **virtex** are links to the **miktex-tex** executable. When called as **initex** (or when the `-initialize` option is given) it can be used to precompile macros into a `.fmt` file. When called as **virtex** it will use the plain format. When called under any other name, TeX will use that name as the name of the format to use. For example, when called as **miktex-tex** the _tex_ format is used, which is identical to the plain format. The commands defined by the plain format are documented in _The TeXbook_. Other formats that are often available include _latex_ and _amstex_.

The non-option command line argiments to the TeX program are passed to it as the first input line. (But it is often easier to type extended arguments as the first input line, since shells tend to gobble up or misinterpret TeX's favorite symbols, like backslashes, unless you quote them.) As described in _The TeXbook_, that first line should begin with a file name, a \controlsequence, or a &_`formatname`_.

The normal usage is to say **`**miktex-tex** paper`** to start processing `paper.tex`. The name _paper_ will be the “jobname”, and is used in forming output file names. If TeX doesn't get a file name in the first line, the job name is `texput`. When looking for a file, TeX looks for the name with and without the default extension (`.tex`) appended, unless the name already contains that extension. If paper is the “jobname”, a log of error messages, with rather more detail than normally appears on the screen, will appear in `paper.log`, and the output file will be in `paper.dvi`.

This version of TeX will look in the first line of the file `paper.tex` to see if it begins with the magic sequence **`%&`**. If the first line begins with **`%&format --translate-file tcxname`**, then TeX will use the named format and transation table _`tcxname`_ to process the source file. Either the format name or the `--translate-file` specification may be omitted, but not both. This overrides the format selection based on the name by which the program is invoked. The `-parse-first-line` option or the _`parse_first_line`_ configuration value controls whether this behaviour is enabled.

The **`e`** response to TeX's error-recovery prompt causes the default editor to start up at the current line of the current file. The configuration value _`[Core]Editor`_ can be used to change the editor used. It may contain a string with `%f` indicating where the file name goes and `%l` indicating where the decimal line number (if any) goes. For example, an _`[Core]Editor`_ string for **emacs** can be set with the command

    > initexmf --set-config-value="[Core]Editor=emacs +%l %f"

A convenient file is `null.tex`, containing nothing. When TeX can't find a file it thinks you want to input, it keeps asking you for another file name; responding **`null`** gets you out of the loop if you don't want to input anything. You can also type your EOF character (usually Control+Z).

**Options**

``--alias=_`name`_``

Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

``--aux-directory=_`dir`_``

Set _`dir`_ as the directory to which auxiliary files are written. Also look for input files in _`dir`_ first, before along the normal search path.

``--buf-size=_`n`_``

Set the the maximum number of characters simultaneously present in current lines of open files and in control sequences between \csname and \endcsname. TeX uses the buffer to contain input lines, but macro expansion works by writing material into the buffer and reparsing the line. As a consequence, certain constructs require the buffer to be very large, even though most documents can be handled with a small value.

`--c-style-errors`

Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

`--disable-8bit-chars`

Make only 7-bit characters printable.

`--disable-installer`

Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

`--disable-write18`

Disable the \write18{_`command`_} construct.

`--dont-parse-first-line`

Disable checking whether the first line of the main input file starts with %&.

`--enable-8bit-chars`

Make all characters printable.

`--enable-enctex`

Enable encTeX extensions such as \mubyte.

`--enable-installer`

Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

`--enable-mltex`

Enable MLTeX extensions such as \charsubdef.

`--enable-write18`

Fully enable the \write18{_`command`_} construct. It is only partially enabled by default to avoid security problems. When fully enabled, the command (which undergoes the usual TeX expansions) is passed to the command interpreter. The output of the command is not diverted anywhere, so it will not appear in the log file. The command execution either happens at \output time or right away, according to the absence or presence of the \immediate prefix.

``--error-line=_`n`_``

Set the width of context lines on terminal error messages.

``--extra-mem-bot=_`n`_``

Set the extra size (in memory words) for large data structures like boxes, glue, breakpoints, et al. Relevant only after the memory dump file has been read.

``--extra-mem-top=_`n`_``

Set the extra size (in memory words) for chars, tokens, et al. Relevant only after the memory dump file has been read.

``--font-max=_`n`_``

Set the maximum internal font number.

``--font-mem-size=_`n`_``

Set the size, in TeX memory words, of the font memory.

``--half-error-line=_`n`_``

Set the width of first lines of contexts in terminal error messages.

`--halt-on-error`

Quit after the first error.

``--hash-extra=_`n`_``

Set the extra space for the hash table of control sequences (which allows 10K names as distributed).

`--help`

Give help and exit.

`--hhelp`

This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

``--include-directory=_`dir`_``

Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

`--initialize`

Become the _INI_ variant of the program.

``--interaction=_`mode`_``

Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

``--job-name=_`name`_``

Set the name of the job (\jobname). This has an affect on the output file names.

``--job-time=_`file`_``

Set the time-stamp of all output files equal to _`file`_'s time-stamp.

``--main-memory=_`n`_``

Change the total size (in memory words) of the main memory array. Relevant only while creating memory dump files.

``--max-in-open=_`n`_``

Set the maximum number of input files and error insertions that can be going on simultaneously.

``--max-print-line=_`n`_``

Set the width of longest text lines output; should be at least `60`.

``--max-strings=_`n`_``

Set the maximum number of strings.

``--nest-size=_`n`_``

Set the maximum number of semantic levels simultaneously active.

`--no-c-style-errors`

Don't change the way, error messages are printed.

``--output-directory=_`dir`_``

Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

``--param-size=_`n`_``

Set the the maximum number of simultaneous macro parameters.

`--parse-first-line`

Check whether the first line of the main input file starts with %&, and parse if it does. This can be used to specify extra command-line options.

``--pool-free=_`n`_``

Set the minimum pool space left after loading the format.

``--pool-size=_`n`_``

Set the maximum number of characters in strings, including all error messages and help texts, and the names of all fonts and control sequences.

`--quiet`

Suppress all output, except errors.

``--record-package-usages=_`file`_``

Record all package usages and write them into _`file`_.

`--recorder`

Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

`--restrict-write18`

Partially enable the \write18{_`command`_} construct.

``--save-size=_`n`_``

Set the the amount of space for saving values outside of current group.

`--src-specials`

Embed source file information (source specials) in the DVI file.

``--stack-size=_`n`_``

Set the maximum number of simultaneous input sources.

``--string-vacancies=_`n`_``

Set the minimum number of characters that should be available for the user's control sequences and font names, after the compiler's own error messages are stored. Must be at least 25000 less than `pool_size`, but doesn't need to be nearly that large.

``--tcx=_`tcxname`_``

Use the _`tcxname`_ translation table to set the mapping of input characters and re-mapping of output characters.

`--time-statistics`

Show processing time statistics.

``--trace[=_`tracestreams`_]``

Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

``--trie-size=_`n`_``

Set the amount of space for hyphenation patterns.

``--undump=_`name`_``

Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

%&

line.

`--version`

Show version information and exit.


**Environment**

`MIKTEX_EDITOR`

The editor to use when selecting **`e`** in the error prompt menu.

The value can contain these placesholder:

`%f`

The name of the file, which contains the erroneous line of TeX code.

`%l`

The line number.

`MIKTEX_TRACE`

Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

`TEXINPUTS`

Extra paths to locate TeX \input and \openin files.

`TFMFONTS`

Extra paths to locate TeX font metric files

**Bugs**

This version of TeX implements a number of optional extensions. In fact, 
many of these extensions conflict to a greater or lesser extent with the 
definition of TeX. This version of TeX fails to trap arithmetic overflow 
when dimensions are added or subtracted. Cases where this occurs are rare, 
but when it does the generated DVI file will be invalid.

**See Also**

[texify] (1)

978-0201134476. _The TeXbook_. Donald E. Knuth. Addison-Wesley. 1986.


<a id="texify" /> 
<!-- *texify* -->

//6.27. texify — MiKTeX compiler driver
---------------------------------------

**Synopsis**

`texify` [_`option`_...] _`file`_...

**Description**

**texify** runs Texinfo or LaTeX input files through **miktex-tex** (**miktex-pdftex**) in turn until all cross-references are resolved, building all indices.

The directory containing each _`file`_ is searched for included files. The suffix of _`file`_ is used to determine its language (LaTeX or Texinfo).

**makeinfo** is used to perform Texinfo macro expansion before running **miktex-tex** when needed.

**Options**

`-@`

Use @input (instead of \input); for preloaded Texinfo.

`--batch`, `-b`

No interaction.

`--clean`, `-c`

Remove all auxiliary files.

`--expand`, `-e`

Force macro expansion using **makeinfo**.

``-I _`dir`_``

Search _`dir`_ for input files.

`--help`, `-h`

Display help and exit successfully.

``--language=_`lang`_``, ``-l _`lang`_``

Specify the language of input files: either `latex` or `texinfo`.

``--max-iterations=_`n`_``

Limits the number of iterations to prevent endless processing. The default for _`n`_ is `5`.

``--mkidx-option=_`option`_``

Pass _`option`_ to the index generator.

`--pdf`, `-p`

Use **miktex-pdftex** (or **miktex-pdflatex**) for processing.

`--quiet`, `-q`, `--silent`, `-s`

No screen output unless errors plies `--batch`).

`--run-viewer`

Run a viewer on the resulting DVI (PDF) file.

`--src`

Pass `--src-specials` to the TeX compiler.

``--texinfo=_`cmd`_``, ``-t=_`cmd`_``

Insert _`cmd`_ after `@setfilename` in copy of input file. Multiple values accumulate.

``--tex-option=_`option`_``

Pass _`option`_ to the compiler.

`--verbose`, `-V`

Print information on what is being done.

`--version`, `-v`

Display version information and exit successfully.

``--viewer-option=_`option`_``

Pass _`option`_ to the viewer.

**Environment Variables**


The values of the `BIBTEX`, `LATEX` (or `PDFLATEX`), `MAKEINDEX`, `MAKEINFO`, `TEX` (or `PDFTEX`), and `TEXINDEX` environment variables are used to run those commands, if they are set.


<a id="miktex-xetex" /> 
<!-- *miktex-xetex* -->

//6.28. miktex-xetex — Unicode-based TeX engine
-----------------------------------------------

**Synopsis**

`miktex-xetex` [_`option`_...] [[_`file`_] | [_`command`_...]]

**Description**

This man page is an adaption of the corresponding TeX Live man page.

Run the XeTeX typesetter on _`file`_, usually creating `file.pdf`. If the file argument has no extension, `.tex` will be appended to it. Instead of a file name, a set of XeTeX commands can be given, the first of which must start with a backslash.

XeTeX has simple font installation; it can use any installed fonts in the operating system without configuring TeX font metric. As a result, XeTeX can access font features such as special ligatures and variable font weights.

**Options**

``--alias=_`name`_``

Pretend to be program _`name`_, i.e., set program (and memory dump) name to _`name`_. This may affect the search paths and other values used. Using this option is equivalent to copying the program file to ``_`name`_`` and invoking ``_`name`_``.

``--aux-directory=_`dir`_``

Set _`dir`_ as the directory to which auxiliary files are written. Also look for input files in _`dir`_ first, before along the normal search path.

``--buf-size=_`n`_``

Set the the maximum number of characters simultaneously present in current lines of open files and in control sequences between \csname and \endcsname. TeX uses the buffer to contain input lines, but macro expansion works by writing material into the buffer and reparsing the line. As a consequence, certain constructs require the buffer to be very large, even though most documents can be handled with a small value.

`--c-style-errors`

Change the way, error messages are printed. The alternate style looks like error messages from many compilers and is easier to parse for some editors.

`--disable-8bit-chars`

Make only 7-bit characters printable.

`--disable-installer`

Disable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

`--disable-write18`

Disable the \write18{_`command`_} construct.

`--dont-parse-first-line`

Disable checking whether the first line of the main input file starts with %&.

`--enable-8bit-chars`

Make all characters printable.

`--enable-etex`

Enable eTeX extensions.

`--enable-installer`

Enable automatic installation of packages. Specifying this option overrules settings in the MiKTeX configuration data store.

`--enable-mltex`

Enable MLTeX extensions such as \charsubdef.

`--enable-write18`

Fully enable the \write18{_`command`_} construct. It is only partially enabled by default to avoid security problems. When fully enabled, the command (which undergoes the usual TeX expansions) is passed to the command interpreter. The output of the command is not diverted anywhere, so it will not appear in the log file. The command execution either happens at \output time or right away, according to the absence or presence of the \immediate prefix.

``--error-line=_`n`_``

Set the width of context lines on terminal error messages.

``--extra-mem-bot=_`n`_``

Set the extra size (in memory words) for large data structures like boxes, glue, breakpoints, et al. Relevant only after the memory dump file has been read.

``--extra-mem-top=_`n`_``

Set the extra size (in memory words) for chars, tokens, et al. Relevant only after the memory dump file has been read.

``--font-max=_`n`_``

Set the maximum internal font number.

``--font-mem-size=_`n`_``

Set the size, in TeX memory words, of the font memory.

``--half-error-line=_`n`_``

Set the width of first lines of contexts in terminal error messages.

`--halt-on-error`

Quit after the first error.

``--hash-extra=_`n`_``

Set the extra space for the hash table of control sequences (which allows 10K names as distributed).

`--help`

Give help and exit.

`--hhelp`

This option is only available on Windows systems: show the manual page in an HTML Help window and exit when the window is closed.

``--include-directory=_`dir`_``

Add the directory _`dir`_ to the head of the list of directories to be searched for input files.

`--initialize`

Become the _INI_ variant of the program.

``--interaction=_`mode`_``

Set the interaction mode. Must be one of `batchmode`, `nonstopmode`, `scrollmode` and `errorstopmode`. The meaning of these modes is the same as the corresponding commands.

``--job-name=_`name`_``

Set the name of the job (\jobname). This has an affect on the output file names.

``--job-time=_`file`_``

Set the time-stamp of all output files equal to _`file`_'s time-stamp.

``--main-memory=_`n`_``

Change the total size (in memory words) of the main memory array. Relevant only while creating memory dump files.

``--max-in-open=_`n`_``

Set the maximum number of input files and error insertions that can be going on simultaneously.

``--max-print-line=_`n`_``

Set the width of longest text lines output; should be at least `60`.

``--max-strings=_`n`_``

Set the maximum number of strings.

``--nest-size=_`n`_``

Set the maximum number of semantic levels simultaneously active.

`--no-c-style-errors`

Don't change the way, error messages are printed.

`--no-pdf`

Generate XDV (extended DVI) output rather than PDF.

``--output-directory=_`dir`_``

Write output files in _`dir`_. instead of the current directory. Look up input files in _`dir`_ first, then along the normal search path.

`--output-driver=cmd`

Use _`cmd`_ as the XDV-to-PDF driver instead of **xdvipdfmx**.

`--papersize=string`

Set PDF media size to _`string`_.

``--param-size=_`n`_``

Set the the maximum number of simultaneous macro parameters.

`--parse-first-line`

Check whether the first line of the main input file starts with %&, and parse if it does. This can be used to specify extra command-line options.

``--pool-free=_`n`_``

Set the minimum pool space left after loading the format.

``--pool-size=_`n`_``

Set the maximum number of characters in strings, including all error messages and help texts, and the names of all fonts and control sequences.

`--quiet`

Suppress all output, except errors.

``--record-package-usages=_`file`_``

Record all package usages and write them into _`file`_.

`--recorder`

Enable the file name recorder. This leaves a trace of the files opened for input and output in a file with the extension `.fls`.

`--restrict-write18`

Partially enable the \write18{_`command`_} construct.

``--save-size=_`n`_``

Set the the amount of space for saving values outside of current group.

`--src-specials`

Embed source file information (source specials) in the DVI file.

``--stack-size=_`n`_``

Set the maximum number of simultaneous input sources.

``--string-vacancies=_`n`_``

Set the minimum number of characters that should be available for the user's control sequences and font names, after the compiler's own error messages are stored. Must be at least 25000 less than `pool_size`, but doesn't need to be nearly that large.

``--synctex=_`n`_``

Generate SyncTeX data for previewers. If _`n`_ is zero, no `.synctex` file is created. If _`n`_ is negative, the `.synctex` file is a text file. If _`n`_ is positive, the `.synctex` file is compressed with **gzip** and the `.gz` file name extension is added.

Furthermore, _`n`_ is interpreted as a bit field:

Bit 1 (_`n`_ AND 2)

Don't add the `.gz` file name extension.

Bit 2 (_`n`_ AND 4)

Activate form support.

Bit 3 (_`n`_ AND 8)

Activate better compression.

`--time-statistics`

Show processing time statistics.

``--trace[=_`tracestreams`_]``

Enable trace messages. The _`tracestreams`_ argument, if specified, is a comma-separated list of trace stream names ([Chapter 9, Trace Streams]).

``--trie-size=_`n`_``

Set the amount of space for hyphenation patterns.

``--undump=_`name`_``

Use _`name`_ as the name of the format to be used, instead of the name by which the program was called or a

%&

line.

`--version`

Show version information and exit.


**Environment**

`MIKTEX_EDITOR`

The editor to use when selecting **`e`** in the error prompt menu.

The value can contain these placesholder:

`%f`

The name of the file, which contains the erroneous line of TeX code.

`%l`

The line number.

`MIKTEX_TRACE`

Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

`TEXINPUTS`

Extra paths to locate TeX \input and \openin files.

`TFMFONTS`

Extra paths to locate TeX font metric files


/Chapter 7. Files
-------------------------


<a id="miktex.ini" />
<!-- *miktex.ini* -->

//miktex.ini — MiKTeX configuration data store
----------------------------------------------------

**Description**

MiKTeX configurations settings are read from the file `miktex.ini`.

**Syntax**

The syntax follows the informal conventions of a traditional 
[INI file](https://en.wikipedia.org/wiki/INI_file).


### Querying and Modifying
------------------------------

It is recommended that you use the MiKTeX Configuration Utility 
(see [initexmf] (1)) to query and modify configuration settings.

### Settings Reference
--------------------------

[General]

    ;; This variable specifies the external program called for
    ;; TeX's interactive \`e' option.  %l is replaced by the line
    ;; number and %f by the current file name.
    ;; If left unspecified, A platform dependent value is chosen.
    ;Editor = miktex-texworks -p=%l "%f"

    ;; Deprecated.
    ;GUIFramework = 1

    ;; Deprecated.
    ;UserInfoFile = 

[Core]

    ;; Shell command mode.
    ;;   Forbidden: don't allow any shell commands
    ;;   Restricted: allow the commands listed in AllowedShellCommands[]
    ;;   Unrestricted: allow all shell commands
    ShellCommandMode = Restricted

    ;; The programs listed here are probably safe: they either do
    ;; not write any output files or implement restrictions
    ;; similar to or higher than
    ;; [Core]AllowUnsafeOutputFiles=true.
    ;; They also have no features to invoke arbitrary other
    ;; programs, and no known exploitable bugs.  All to the best
    ;; of our knowledge.  They also have practical use for being
    ;; called from TeX.
    AllowedShellCommands[] = miktex-bibtex
    AllowedShellCommands[] = miktex-bibtex8
    AllowedShellCommands[] = miktex-epstopdf
    AllowedShellCommands[] = miktex-gregorio
    AllowedShellCommands[] = miktex-kpsewhich
    AllowedShellCommands[] = miktex-makeindex
    AllowedShellCommands[] = bibtex
    AllowedShellCommands[] = bibtex8
    AllowedShellCommands[] = extractbb
    AllowedShellCommands[] = findtexmf
    AllowedShellCommands[] = gregorio
    AllowedShellCommands[] = kpsewhich
    AllowedShellCommands[] = makeindex
    AllowedShellCommands[] = texosquery-jre8

    ;; Do we allow unrestricted shell command execution when running
    ;; with elevated privileges.
    AllowUnrestrictedSuperUser = true

    ;; Do we allow TeX \input or \openin on file names starting
    ;; with \`.' (e.g., .rhosts) or outside the current tree (e.g.,
    ;; /etc/passwd)?
    AllowUnsafeInputFiles = true

    ;; Do we allow TeX \openout on file names starting with \`.'
    ;; (e.g., .rhosts) or outside the current tree (e.g.,
    ;; /etc/passwd)?
    AllowUnsafeOutputFiles = false

    ;; Automatically turn on administrator mode for elevated MiKTeX programs
    ;; in a shared setup.
    AutoAdmin = ?

    ;; Root of the system-wide MiKTeX configuration tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonConfig = 

    ;; Root of the system-wide MiKTeX data tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonData = 

    ;; Root of the system-wide MiKTeX installation tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonInstall = 

    ;; Extra system-wide MiKTeX trees.
    ;CommonRoots = 

    ;; System-wide directory in which to create symbolic links to
        ;; MiKTeX executables.
    CommonLinkTargetDirectory = 

    ;; System-wide log directory. A platform dependent location, if left unspecified.
    ;CommonLogDirectory = 

    ;; Deprecated.
    ;NoRegistry =

    ;; Other unmanaged system-wide trees.
    ;OtherCommonRoots = 

    ;; Other unmanaged per-user trees.
    ;OtherUserRoots = 

    ;; PK file name template.
    PKFnTemplate = %f.pk

    ;; On Windows, prefer MiKTeX Ghostscript (mgs.exe)
    ;; to the installed Ghostscript
    PreferMiKTeXGhostscript = false

    ;; Indicates whether MiKTeX is installed system-wide.
    SharedSetup = ?

    ;; Path to the MiKTeX startup configuration file.
    ;StartupFile = 

    ;; Path to the directory for temporary files.
    ;TempDir =

    ;; Trace flags.
    Trace =

    ;; Root of the per-user MiKTeX configuration tree.
    ;; A platform dependent location, if left unspecified.
    ;UserConfig = 

    ;; Root of the per-user MiKTeX data tree.
    ;; A platform dependent location, if left unspecified.
    ;UserData = 

    ;; Root of the per-user MiKTeX installation tree.
    ;; A platform dependent location, if left unspecified.
    ;UserInstall = 

    ;; Per-user directory in which to create symbolic links to
        ;; MiKTeX executables.
    UserLinkTargetDirectory = 

    ;; Per-user log directory. A platform dependent location, if left unspecified.
    ;UserLogDirectory = 

    ;; Extra per-user MiKTeX trees.
    ;UserRoots = 

    ;; Preferred UI languages.
    ;UILanguages[] = 

[Core.FileTypes.afm]

    ;; Search path for Adobe font metric (AFM) files.
    Paths[] = .
    Paths[] = %R/fonts/afm//

    ;; Environment variables to be used for searching AFM files.
    EnvVars[] = AFMFONTS
    EnvVars[] = TEXFONTS

    ;; AFM file name extensions.
    Extensions[] = .afm

[Core.FileTypes.base]

    ;; Search path for METAFONT memory dump files.
    Paths[] = .
    Paths[] = %r/miktex/data/le

    ;; METAFONT memory dump file name extensions.
    Extensions[] = .base

[Core.FileTypes.bib]

    ;; Search path for BibTeX database files.
    Paths[] = .
    Paths[] = %R/bibtex/bib//

    ;; Environment variables to be used for searching BibTeX
    ;; databsae files.
    EnvVars[] = BIBINPUTS
    EnvVars[] = TEXBIB

    ;; BibTeX database file name extensions.
    Extensions[] = .bib

[Core.FileTypes.bst]

    ;; Search path for BibTeX style files.
    Paths[] = .
    Paths[] = %R/bibtex/{bst,csf}//

    ;; Environment variables to be used for searching BibTeX
    ;; style files.
    EnvVars[] = BSTINPUTS

    ;; BibTeX style file name extensions.
    Extensions[] = .bst

[Core.FileTypes.cid maps]

    ;; Search path for CID map files.
    Paths[] = .
    Paths[] = %R/fonts/cid//

    ;; Environment variables to be used for searching CID map
    ;; files.
    EnvVars[] = FONTCIDMAPS

    ;; CID map file name extensions.
    Extensions[] = .cid
    Extensions[] = .cidmap

[Core.FileTypes.clua]

    ;; Search path for dynamic libraries for Lua.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}/lua//

    ;; Environment variables to be used for searching dynamic
    ;; libraries for Lua.
    EnvVars[] = CLUAINPUTS

    ;; File name extensions for Lua dynamic libraries.
    Extensions[] = .dll
    Extensions[] = .so
    
[Core.FileTypes.cmap files]

    ;; Search path for character map files.
    Paths[] = .
    Paths[] = %R/fonts/cmap//

    ;; Environment variables to be used for character map files.
    EnvVars[] = CMAPFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.cweb]

    ;; Search path for CWeb input files.
    Paths[] = .
    Paths[] = %R/cweb//

    ;; Environment variables to be used for searching Cweb input
    ;; files.
    EnvVars[] = CWEBINPUTS

    ;; CWeb file name extensions.
    Extensions[] = .w

[Core.FileTypes.dvi]

    ;; Search path for DVI files.
    Paths[] = .
    Paths[] = %R/doc//

    ;; DVI file name extensions.
    Extensions[] = .dvi

[Core.FileTypes.dvips config]

    ;; Search path for Dvips configuration files.
    Paths[] = .
    Paths[] = %R/dvips//

    ;; Environment variables to be used for searching Dvips
    ;; configuration files.
    EnvVars[] = TEXCONFIG

[Core.FileTypes.enc]

    ;; Search path for encoding vector files.
    Paths[] = .
    Paths[] = %R/fonts/enc//

    ;; Environment variables to be used for searching encoding
    ;; vector files.
    EnvVars[] = ENCFONTS
    EnvVars[] = TEXFONTS

    ;; Encoding vector file name extensions.
    Extensions[] = .enc

[Core.FileTypes.font feature files]

    ;; Search path for font feature files.
    Paths[] = .
    Paths[] = %R/fonts/fea//

    ;; Environment variables to be used for searching font feature
    ;; files.
    EnvVars[] = FONTFEATURES

    ;; Font feature file name extensions.
    Extensions[] = .fea

[Core.FileTypes.fmt]

    ;; Search path for TeX memory dump files.
    Paths[] = .
    Paths[] = %r/miktex/data/le/{$engine,}

    ;; TeX memory dump file name extensions.
    Extensions[] = .fmt

[Core.FileTypes.gf]

    ;; Search path for generic font bitmap files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Environment variables to be used for searching generic font
    ;; bitmap files.
    EnvVars[] = GFFONTS
    EnvVars[] = GLYPHFONTS
    EnvVars[] = TEXFONTS

    ;; Generic font bitmap file name extensions.
    Extensions[] = .gf

[Core.FileTypes.bitmap font]

    ;; Search path for bitmap font files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Environment variables to be used for searching bitmap font
    ;; files.
    EnvVars[] = GLYPHFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.graphic/figure]

    ;; Search path for figure files.
    Paths[] = .
    Paths[] = %R/dvips//
    Paths[] = %R/pdftex//
    Paths[] = %R/tex//

    ;; Environment variables to be used for searching figure
    ;; files.
    EnvVars[] = TEXPICTS
    EnvVars[] = TEXINPUTS

    ;; Figure file name extensions.
    Extensions[] = .eps
    Extensions[] = .epsi
    Extensions[] = .png

[Core.FileTypes.hbf]

    ;; Search path for HBF files.
    Paths[] = .
    Paths[] = %R/fonts/misc/hbf//

    ;; HBF file name extensions.
    Extensions[] = .hbf

[Core.FileTypes.ist]

    ;; Search path for MakeIndex style files.
    Paths[] = .
    Paths[] = %R/makeindex//

    ;; Environment variables to be used for searching MakeIndex
    ;; style files.
    EnvVars[] = TEXINDEXSTYLE
    EnvVars[] = INDEXSTYLE

    ;; MakeIndex style file name extensions.
    Extensions[] = .ist

[Core.FileTypes.lig files]

    ;; Search path for ligature definition files.
    Paths[] = .
    Paths[] = %R/fonts/lig//

    ;; Environment variables to be used for searching ligature
    ;; definition files.
    EnvVars[] = TEXFONTS

    ;; Ligature definition file name extensions.
    Extensions[] = .lig

[Core.FileTypes.ls-R]

    ;; Search path for Web2c file name database files.
    Paths[] = %R

    ;; Environment variables to be used for searching Web2C file
    ;; name database files.
    EnvVars[] = TEXMFDBS

[Core.FileTypes.lua]

    ;; Search path for Lua files.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}/{lua,}//
    Paths[] = %R/tex/{$progname,generic,}//

    ;; Environment variables to be used for searching Lua files.
    EnvVars[] = LUAINPUTS

    ;; File name extensions for Lua files.
    Extensions[] = .lua
    Extensions[] = .luatex
    Extensions[] = .luc
    Extensions[] = .luctex
    Extensions[] = .texlua
    Extensions[] = .texluc
    Extensions[] = .tlu

[Core.FileTypes.map]

    ;; Search path for font map files.
    Paths[] = .
    Paths[] = %R/fonts/map/{$progname,pdftex,dvips,}//

    ;; Environment variables to be used for searching font map
    ;; files.
    EnvVars[] = TEXFONTMAPS
    EnvVars[] = TEXFONTS

    ;; Font map file name extensions.
    Extensions[] = .map

[Core.FileTypes.mem]

    ;; Search path for MetaPost memory dump files.
    Paths[] = .

    ;; MetaPost memory dump file name extensions.
    Extensions[] = .mem

[Core.FileTypes.mf]

    ;; Search path for METAFONT input files.
    Paths[] = .
    Paths[] = %R/metafont//
    Paths[] = %R/fonts/source//

    ;; Environment variables to be used for searching METAFONT
    ;; input files.
    EnvVars[] = MFINPUTS

    ;; METAFONT file name extensions.
    Extensions[] = .mf

[Core.FileTypes.mfpool]

    ;; Search path for METAFONT program string files.
    Paths[] = .

    ;; Environment variables to be used for searching METAFONT
    ;; program string files.
    EnvVars[] = MFPOOL
    EnvVars[] = TEXMFINI

    ;; METAFONT program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.mft]

    ;; Search path for MFT style files.
    Paths[] = .
    Paths[] = %R/mft//

    ;; Environment variables to be used for searching MFT style
    ;; files.
    EnvVars[] = MFTINPUTS

    ;; MFT style file name extensions.
    Extensions[] = .mft

[Core.FileTypes.misc fonts]

    ;; Search path for font related files.
    Paths[] = .
    Paths[] = %R/fonts/misc//

    ;; Environment variables to be used for font related
    ;; files.
    EnvVars[] = MISCFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.mlbib]

    ;; Search path for MlBibTeX database files.
    Paths[] = .
    Paths[] = %R/bibtex/bib/{mlbib,}//

    ;; Environment variables to be used for searching MlBibTeX
    ;; databsae files.
    EnvVars[] = MLBIBINPUTS
    EnvVars[] = BIBINPUTS
    EnvVars[] = TEXBIB

    ;; MlBibTeX database file name extensions.
    Extensions[] = .mlbib
    Extensions[] = .bib

[Core.FileTypes.mlbst]

    ;; Search path for MlBibTeX style files.
    Paths[] = .
    Paths[] = %R/bibtex/{mlbst,bst}//

    ;; Environment variables to be used for searching MlBibTeX
    ;; style files.
    EnvVars[] = MLBSTINPUTS
    EnvVars[] = BSTINPUTS

    ;; MlBibTeX style file name extensions.
    Extensions[] = .bst

[Core.FileTypes.mp]

    ;; Search path for MetaPost input files.
    Paths[] = .
    Paths[] = %R/metapost//

    ;; Environment variables to be used for searching MetaPost
    ;; input files.
    EnvVars[] = MPINPUTS

    ;; MetaPost file name extensions.
    Extensions[] = .mp

[Core.FileTypes.mppool]

    ;; Search path for MetaPost program string files.
    Paths[] = .

    ;; Environment variables to be used for searching MetaPost
    ;; program string files.
    EnvVars[] = MPPOOL
    EnvVars[] = TEXMFINI

    ;; MetaPost program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.MetaPost support]

    ;; Search path for MetaPost support files.
    Paths[] = .
    Paths[] = %R/metapost/support//

    ;; Environment variables to be used for searching MetaPost
    ;; support files.
    EnvVars[] = MPSUPPORT

[Core.FileTypes.ocp]

    ;; Search path for Omega compiled process files.
    Paths[] = .
    Paths[] = %R/omega/ocp//

    ;; Environment variables to be used for searching Omega
    ;; compiled process files.
    EnvVars[] = OCPINPUTS

    ;; Omega compiled process file name extensions.
    Extensions[] = .ocp

[Core.FileTypes.ofm]

    ;; Search path for Omega font metric files.
    Paths[] = .
    Paths[] = %R/fonts/ofm//
    Paths[] = %R/fonts/tfm//

    ;; Environment variables to be used for searching Omega
    ;; font metric files.
    EnvVars[] = OFMFONTS
    EnvVars[] = TEXFONTS

    ;; Omega font metric file name extensions.
    Extensions[] = .ofm
    Extensions[] = .tfm

[Core.FileTypes.opl]

    ;; Search path for Omega property list files.
    Paths[] = .
    Paths[] = %R/fonts/opl//

    ;; Environment variables to be used for searching Omega
    ;; property list files.
    EnvVars[] = OPLFONTS
    EnvVars[] = TEXFONTS

    ;; Omega property list file name extensions.
    Extensions[] = .opl

[Core.FileTypes.otp]

    ;; Search path for Omega translation process files.
    Paths[] = .
    Paths[] = %R/fonts/otp//

    ;; Environment variables to be used for searching Omega
    ;; translation process files.
    EnvVars[] = OTPINPUTS

    ;; Omega translation process file name extensions.
    Extensions[] = .otp

[Core.FileTypes.opentype fonts]

    ;; Search path for OpenType font files.
    Paths[] = .
    Paths[] = %R/fonts/opentype//

    ;; Environment variables to be used for searching OpenType
    ;; font files.
    EnvVars[] = OPENTYPEFONTS
    EnvVars[] = TEXFONTS

    ;; OpenType font file name extensions.
    Extensions[] = .otf

[Core.FileTypes.ovf]

    ;; Search path for Omega virtual font files.
    Paths[] = .
    Paths[] = %R/fonts/ovf//
    Paths[] = %R/fonts/vf//

    ;; Environment variables to be used for searching Omega
    ;; virtual font files.
    EnvVars[] = OVFFONTS
    EnvVars[] = TEXFONTS

    ;; Omega virtual font file name extensions.
    Extensions[] = .ovf

[Core.FileTypes.ovp]

    ;; Search path for Omega virtual property list files.
    Paths[] = .
    Paths[] = %R/fonts/ovp//

    ;; Environment variables to be used for searching Omega
    ;; virtual property list files.
    EnvVars[] = OVPFONTS
    EnvVars[] = TEXFONTS

    ;; Omega virtual property list file name extensions.
    Extensions[] = .ovp

[Core.FileTypes.pdftex config]

    ;; Search path for pdfTeX configuration files.
    Paths[] = .
    Paths[] = %R/pdftex/{$progname,}//

    ;; Environment variables to be used for searching pdfTeX
    ;; configuration files.
    EnvVars[] = PDFTEXCONFIG

[Core.FileTypes.pk]

    ;; Search path for packed bitmap font files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Packed bitmap font file name extensions.
    Extensions[] = .pk

[Core.FileTypes.other binary files]

    ;; Search path for program binary files.
    Paths[] = .
    Paths[] = %R/$progname//

[Core.FileTypes.other text files]

    ;; Search path for program text files.
    Paths[] = .
    Paths[] = %R/$progname//

[Core.FileTypes.PostScript header]

    ;; Search path for downloadable PostScript files.
    Paths[] = .
    Paths[] = %R/{dvips,fonts/{enc,type1,type42,type3}}//
    Paths[] = $psfontdirs

    ;; Environment variables to be used for searching downloadable
    ;; PostScript files.
    EnvVars[] = TEXPSHEADERS
    EnvVars[] = PSHEADERS

    ;; Downloadable PostScript file name extensions.
    Extensions[] = .pro
    Extensions[] = .enc

[Core.FileTypes.texmfscripts]

    ;; Search path for architecture-independent executables.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}//

    ;; Environment variables to be used for searching
    ;; architecture-independent executables.
    EnvVars[] = TEXMFSCRIPTS

[Core.FileTypes.subfont definition files]

    ;; Search path for subfont definition files.
    Paths[] = .
    Paths[] = %R/fonts/sfd//

    ;; Environment variables to be used for searching subfont
    ;; definition files.
    EnvVars[] = SFDFONTS
    EnvVars[] = TEXFONTS

    ;; Subfont definition file name extensions.
    Extensions[] = .sfd

[Core.FileTypes.tcx]

    ;; Search path for TCX files.
    Paths[] = .
    Paths[] = %R/miktex/config
    Paths[] = %R/miktex/web2c

    ;; TCX file name extensions.
    Extensions[] = .tcx

[Core.FileTypes.tex]

    ;; Search path for TeX input files.
    Paths[] = .
    Paths[] = %R/tex/{$progname,generic,}//

    ;; Environment variables to be used for searching TeX input
    ;; files.
    EnvVars[] = TEXINPUTS

    ;; TeX input file name extensions.
    Extensions[] = .tex

[Core.FileTypes.texpool]

    ;; Search path for TeX program string files.
    Paths[] = .

    ;; Environment variables to be used for searching METAFONT
    ;; program string files.
    EnvVars[] = TEXPOOL
    EnvVars[] = TEXMFINI

    ;; TeX program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.TeX system sources]

    ;; Search path for source files.
    Paths[] = .
    Paths[] = %R/source//

    ;; Environment variables to be used for searching source
    ;; files.
    EnvVars[] = TEXSOURCES

[Core.FileTypes.TeX system documentation]

    ;; Search path for documentation files.
    Paths[] = .
    Paths[] = %R/doc/miktex//
    Paths[] = %R/doc//

    ;; Environment variables to be used for searching
    ;; documentation files.
    EnvVars[] = TEXDOCS

    ;; Documentation file name extensions.
    Extensions[] = .pdf
    Extensions[] = .html
    Extensions[] = .md
    Extensions[] = .txt
    Extensions[] = .ps
    Extensions[] = .dvi

[Core.FileTypes.tfm]

    ;; Search path for TeX font metric files.
    Paths[] = .
    Paths[] = %R/fonts/tfm//

    ;; Environment variables to be used for searching TeX font
    ;; metric files.
    EnvVars[] = TFMFONTS
    EnvVars[] = TEXFONTS

    ;; TeX font metric file name extensions.
    Extensions[] = .tfm

[Core.FileTypes.troff fonts]

    ;; Environment variables to be used for searching Troff font
    ;; files.
    EnvVars[] = TRFONTS

[Core.FileTypes.truetype fonts]

    ;; Search path for TrueType font files.
    Paths[] = .
    Paths[] = %R/fonts/truetype//

    ;; Environment variables to be used for searching TrueType
    ;; font files.
    EnvVars[] = TTFONTS
    EnvVars[] = TEXFONTS

    ;; TrueType font file name extensions.
    Extensions[] = .ttf
    Extensions[] = .ttc

[Core.FileTypes.type1 fonts]

    ;; Search path for Type1 font files.
    Paths[] = .
    Paths[] = %R/fonts/type1//

    ;; Environment variables to be used for searching Type1 font
    ;; files.
    EnvVars[] = T1FONTS
    EnvVars[] = T1INPUTS
    EnvVars[] = TEXFONTS
    EnvVars[] = TEXPSHEADERS
    EnvVars[] = PSHEADERS

    ;; Type1 font file name extensions.
    Extensions[] = .pfb
    Extensions[] = .pfa

[Core.FileTypes.type42 fonts]

    ;; Search path for Type42 font files.
    Paths[] = .
    Paths[] = %R/fonts/type42//

    ;; Environment variables to be used for searching Type42 font
    ;; files.
    EnvVars[] = T42FONTS
    EnvVars[] = TEXFONTS

    ;; Type42 font file name extensions.
    Extensions[] = .t42
    Extensions[] = .T42

[Core.FileTypes.vf]

    ;; Search path for TeX virtual font files.
    Paths[] = .
    Paths[] = %R/fonts/vf//

    ;; Environment variables to be used for searching TeX virtual
    ;; font files.
    EnvVars[] = VFFONTS
    EnvVars[] = TEXFONTS

    ;; TeX virtual font file name extensions.
    Extensions[] = .vf

[Core.FileTypes.web2c files]

    ;; Search path for Web2c files.
    Paths[] = .
    Paths[] = %R/web2c//

[Core.FileTypes.web]

    ;; Search path for WEB input files.
    Paths[] = .
    Paths[] = %R/web//

    ;; Environment variables to be used for searching WEB input
    ;; files.
    EnvVars[] = WEBINPUTS

    ;; CWeb file name extensions.
    Extensions[] = .web

[MakeBase]

    ;; Directory where METAFONT stores \*.base files.
    DestDir = %R/miktex/data/le

[MakeFMT]

    ;; Directory where TeX engines store \*.fmt files.
    DestDir = %R/miktex/data/le/$engine

[MakePk]

    ;; Directory where makepk stores \*.pk files.
    DestDir = %R/fonts/pk/%m/%s/%t/dpi%d

[MakeTFM]

    ;; Directory where maketfm stores \*.tfm files.
    DestDir = %R/fonts/tfm/%s/%t

[MPM]

    ;; Install packages for all users.
    AutoAdmin = ?

    ;; Install missing packages automatically (on-the-fly).
    AutoInstall = ?

    ;; Deprecated.
    ForceLocalServer = f

    ;; Local package repository path.
    ;LocalRepository = 

    ;; Deprecated.
    ;MiKTeXDirectRoot =

    ;; Indicates whether proxy authentication is required.
    ProxyAuthReq = f

    ;; Proxy host address.
    ProxyHost =

    ;; Proxy host port.
    ProxyPort = 8080

    ;; Remote package repository URL. Pick a random URL, if empty.
    RemoteRepository = 

    ;; The MiKTeX API endpoint.
    RemoteService_4727 = https://api2.miktex.org/
    
    ;; Package stream. One of: stable, next.
    RepositoryReleaseState = next

    ;; Type of the package repository. One of: remote, local.
    RepositoryType = remote

    ;; Indicates whether a proxy is configured.
    UseProxy = f

[Setup]

    ;; Last time (a time_t value) a MiKTeX administrator has checked for system-wide issues.
    ;LastAdminDiagnose =

    ;; Last time (a time_t value) a MiKTeX administrator changed the system-wide configuration.
    ;LastAdminMaintenance =

    ;; Last time (a time_t value) a MiKTeX administrator has installed system-wide updates.
    ;LastAdminUpdate =

    ;; Last time (a time_t value) a MiKTeX administrator has checked for system-wide updates.
    ;LastAdminUpdateCheck =

    ;; Last time (a time_t value) a MiKTeX administrator has updated the system-wide package database.
    ;LastAdminUpdateDb =

    ;; Last time (a time_t value) the current MiKTeX user has checked for issues.
    ;LastUserDiagnose =

    ;; Last time (a time_t value) the current MiKTeX user changed the configuration.
    ;LastUserMaintenance =

    ;; Last time (a time_t value) the current MiKTeX user has installed updates.
    ;LastUserUpdate =

    ;; Last time (a time_t value) the current MiKTeX user has checked for updates.
    ;LastUserUpdateCheck =

    ;; Last time (a time_t value) the current MiKTeX user has updated the package database.
    ;LastUserUpdateDb =


[TeXandFriends]

    ;; Create auxiliary directory if '--aux-directory=DIR' refers
    ;; to a non-existing directory.
    CreateAuxDirectory = t

    ;; Create the output directory if '--output-directory=DIR'
    ;; refers to a non-existing directory.
    CreateOutputDirectory = t

    ;; Enable file:line:error style messages.
    CStyleErrors = f

    ;; Deprecated.
    ;ParseFirstLine =

    ;; Indicates whether format files (\*.fmt) will be automatically renewed.
    RenewFormatsOnUpdate = t

[TeXjp]

    ;; Indicates whether input file encodings are guessed.
    GuessInputKanjiEncoding = t


**See also**

[initexmf] (1)


<a id="pdftex.cfg" />
<!-- *pdftex.cfg* -->

//pdftex.cfg — configuration settings for MiKTeX-pdfTeX
-------------------------------------------------------------

**Description**

MiKTeX-pdfTeX configurations settings are read from the file `pdftex.cfg` when a format file is being created by MiKTeX-pdfTeX.

> [!CAUTION]
>  Do not edit this file directly. Run **`initexmf --edit-config-file pdftex.cfg`** to edit configuration settings for MiKTeX-pdfTeX.

### Instructions
--------------------

A typical `pdftex.cfg` file looks like this, setting up output for A4 paper size and the standard TeX offset of 1 inch:

    compress_level 9
    decimal_digits 3
    horigin 1 true in
    vorigin 1 true in
    image_resolution 300
    move_chars 1
    output_format 1
    page_width 210 true mm
    page_height 297 true mm
    pdf_minorversion 4
    pk_resolution 600

The configuration file sets default values for these parameters, and they all can be overridden in the TeX source file. Dimensions can be specified as `true`, which makes them immune for magnification (when set).

*   **compress_level**

    This integer parameter specifies the level of text and in||line graphics compression. MiKTeX-pdfTeX uses Zip compression. A value of 0 means no compression, 1 means fastest, 9 means best, 2..8 means something in between. Just set this value to 9, unless there is a good reason to do otherwise; 0 is great for testing macros that use \pdfliteral.

*   **decimal_digits**

    This integer specifies the preciseness of real numbers in PDF page descriptions. It gives the maximal number of decimal digits after the decimal point of real numbers. Valid values are in range 0..5. A higher value means more precise output, but also results in a much larger file size and more time to display or print. In most cases the optimal value is 2\. This parameter does _not_ influence the precision of numbers used in raw PDF code, like that used in \pdfliteral and annotation action specifications.

*   **horigin & vorigin**

    These dimension parameters can be used to set the offset of the TeX output box from the top left corner of the “paper”.

*   **image_resolution**

    When MiKTeX-pdfTeX is not able to determine the natural dimensions of an image, it assumes a resolution of type 72 dots per inch. Use this variable to change this default value.

*   **move_chars**

    Although PDF output is claimed to be portable, especially when all font information is included in the file, problems with printing and viewing have a persistent nature. Moving the characters in range 0–31 sometimes helps a lot. When set to 1, characters are only moved when a font has less than 128 glyphs, when set to 2 higher slots are used too.

*   **output_format**

    This integer parameter specifies whether the output format should be DVI or PDF. A positive value means PDF output, otherwise we get DVI output.

*   **page_width & page_height**

    These two dimension parameters specify the output medium dimensions (the paper, screen or whatever the page is put on). If they are not specified, these values are calculated.

*   **pdf_minorversion**

    Sets the PDF version of the generated file and the latest allowed PDF version of included PDFs. The value 3 tells MiKTeX-pdfTeX to set the PDF version to 1.3 and allows only included PDFs with versions less than 1.3. A suitable default value is 4.

*   **pk_resolution**

    One can use this entry to specify the resolution for bitmap fonts. Nowadays most printers are capable to print at least 600 dots per inch, so this is a reasonable default.

/Chapter 8. Environment variables
-----------------------------------------

*   `BIBINPUTS`     Extra paths to locate `.bib` files.
*   `BSTINPUTS`     Extra paths to locate `.bst` files.
*   `MFINPUTS`  Extra paths to locate METAFONT input and openin files.
*   `MIKTEX_REPOSITORY`

    Location of the default package repository. This can be either a fully qualified path name (a local package repository) or an URL (a remote package repository).

*   `MIKTEX_TRACE`

    Comma-separated list of trace stream names (see [Chapter 9, Trace Streams]). If this variable is set, then MiKTeX programs will write trace messages into the configured log sink.

*   `MFINPUTS`  Extra paths to locate METAFONT input and openin files.
*   `TEXINPUTS`     Extra paths to locate TeX \input and \openin files.
*   `TFMFONTS`  Extra paths to locate TeX font metric files


/Chapter 9. Trace Streams
---------------------------------

| access      | file tests (`access()`, `stat()`)     |
| config      | MiKTeX configuration settings         |
| core        | MiKTeX core library                   |
| curl        | cURL library                          |
| dib         | device independant bitmaps            |
| dvibitmap   | DVI bitmaps                           |
| dvicolor    | DVI color                             |
| dvifile     | DVI files                             |
| dvigc       | DVI garbage collector                 |
| dvihypertex | DVI hypertex specials                 |
| dvipage     | DVI page builder                      |
| dvipkbitmap | DVI PK raster operations              |
| dvipkchar   | DVI PK characters                     |
| dvipkfont   | DVI PK fonts                          |
| dvisearch   | DVI source specials                   |
| dvitfm      | DVI font metrics                      |
| dvivfchar   | DVI virtual font characters           |
| dvivfont    | DVI virtual fonts                     |
| env         | environment variables                 |
| error       | error conditions                      |
| extractor   | MiKTeX package archive file extractor |
| files       | file operations                       |
| filesearch  | file searching                        |
| fndb        | file name database operations         |
| fontinfo    | font information retrieval            |
| mem         | TeX & Friends memory allocation       |
| mmap        | memory mapped files                   |
| mpm         | package manager                       |
| mtprint     | MiKTeX print utility                  |
| packages    | packages                              |
| process     | execution of secondary processes      |
| tempfile    | temporary files                       |
| time        | execution time                        |
| values      | configuration values                  |
| yap         | Yap                                   |


/Chapter 10. Run-Time Defaults
--------------------------------------


MiKTeX configuration settings are initialized with default values which are described in this chapter.

/All MiKTeX Programs
---------------------------

[General]

    ;; This variable specifies the external program called for
    ;; TeX's interactive \`e' option.  %l is replaced by the line
    ;; number and %f by the current file name.
    ;; If left unspecified, A platform dependent value is chosen.
    ;Editor = miktex-texworks -p=%l "%f"

    ;; Deprecated.
    ;GUIFramework = 1

    ;; Deprecated.
    ;UserInfoFile = 

[Core]

    ;; Shell command mode.
    ;;   Forbidden: don't allow any shell commands
    ;;   Restricted: allow the commands listed in AllowedShellCommands[]
    ;;   Unrestricted: allow all shell commands
    ShellCommandMode = Restricted

    ;; The programs listed here are probably safe: they either do
    ;; not write any output files or implement restrictions
    ;; similar to or higher than
    ;; [Core]AllowUnsafeOutputFiles=true.
    ;; They also have no features to invoke arbitrary other
    ;; programs, and no known exploitable bugs.  All to the best
    ;; of our knowledge.  They also have practical use for being
    ;; called from TeX.
    AllowedShellCommands[] = miktex-bibtex
    AllowedShellCommands[] = miktex-bibtex8
    AllowedShellCommands[] = miktex-epstopdf
    AllowedShellCommands[] = miktex-gregorio
    AllowedShellCommands[] = miktex-kpsewhich
    AllowedShellCommands[] = miktex-makeindex
    AllowedShellCommands[] = bibtex
    AllowedShellCommands[] = bibtex8
    AllowedShellCommands[] = extractbb
    AllowedShellCommands[] = findtexmf
    AllowedShellCommands[] = gregorio
    AllowedShellCommands[] = kpsewhich
    AllowedShellCommands[] = makeindex
    AllowedShellCommands[] = texosquery-jre8

    ;; Do we allow unrestricted shell command execution when running
    ;; with elevated privileges.
    AllowUnrestrictedSuperUser = true

    ;; Do we allow TeX \input or \openin on file names starting
    ;; with \`.' (e.g., .rhosts) or outside the current tree (e.g.,
    ;; /etc/passwd)?
    AllowUnsafeInputFiles = true

    ;; Do we allow TeX \openout on file names starting with \`.'
    ;; (e.g., .rhosts) or outside the current tree (e.g.,
    ;; /etc/passwd)?
    AllowUnsafeOutputFiles = false

    ;; Automatically turn on administrator mode for elevated MiKTeX programs
    ;; in a shared setup.
    AutoAdmin = ?

    ;; Root of the system-wide MiKTeX configuration tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonConfig = 

    ;; Root of the system-wide MiKTeX data tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonData = 

    ;; Root of the system-wide MiKTeX installation tree.
    ;; A platform dependent location, if left unspecified.
    ;CommonInstall = 

    ;; Extra system-wide MiKTeX trees.
    ;CommonRoots = 

    ;; System-wide directory in which to create symbolic links to
        ;; MiKTeX executables.
    CommonLinkTargetDirectory = 

    ;; System-wide log directory. A platform dependent location, if left unspecified.
    ;CommonLogDirectory = 

    ;; Deprecated.
    ;NoRegistry =

    ;; Other unmanaged system-wide trees.
    ;OtherCommonRoots = 

    ;; Other unmanaged per-user trees.
    ;OtherUserRoots = 

    ;; PK file name template.
    PKFnTemplate = %f.pk

    ;; On Windows, prefer MiKTeX Ghostscript (mgs.exe)
    ;; to the installed Ghostscript
    PreferMiKTeXGhostscript = false

    ;; Indicates whether MiKTeX is installed system-wide.
    SharedSetup = ?

    ;; Path to the MiKTeX startup configuration file.
    ;StartupFile = 

    ;; Path to the directory for temporary files.
    ;TempDir =

    ;; Trace flags.
    Trace =

    ;; Root of the per-user MiKTeX configuration tree.
    ;; A platform dependent location, if left unspecified.
    ;UserConfig = 

    ;; Root of the per-user MiKTeX data tree.
    ;; A platform dependent location, if left unspecified.
    ;UserData = 

    ;; Root of the per-user MiKTeX installation tree.
    ;; A platform dependent location, if left unspecified.
    ;UserInstall = 

    ;; Per-user directory in which to create symbolic links to
        ;; MiKTeX executables.
    UserLinkTargetDirectory = 

    ;; Per-user log directory. A platform dependent location, if left unspecified.
    ;UserLogDirectory = 

    ;; Extra per-user MiKTeX trees.
    ;UserRoots = 

    ;; Preferred UI languages.
    ;UILanguages[] = 

[Core.FileTypes.afm]

    ;; Search path for Adobe font metric (AFM) files.
    Paths[] = .
    Paths[] = %R/fonts/afm//

    ;; Environment variables to be used for searching AFM files.
    EnvVars[] = AFMFONTS
    EnvVars[] = TEXFONTS

    ;; AFM file name extensions.
    Extensions[] = .afm

[Core.FileTypes.base]

    ;; Search path for METAFONT memory dump files.
    Paths[] = .
    Paths[] = %r/miktex/data/le

    ;; METAFONT memory dump file name extensions.
    Extensions[] = .base

[Core.FileTypes.bib]

    ;; Search path for BibTeX database files.
    Paths[] = .
    Paths[] = %R/bibtex/bib//

    ;; Environment variables to be used for searching BibTeX
    ;; databsae files.
    EnvVars[] = BIBINPUTS
    EnvVars[] = TEXBIB

    ;; BibTeX database file name extensions.
    Extensions[] = .bib

[Core.FileTypes.bst]

    ;; Search path for BibTeX style files.
    Paths[] = .
    Paths[] = %R/bibtex/{bst,csf}//

    ;; Environment variables to be used for searching BibTeX
    ;; style files.
    EnvVars[] = BSTINPUTS

    ;; BibTeX style file name extensions.
    Extensions[] = .bst

[Core.FileTypes.cid maps]

    ;; Search path for CID map files.
    Paths[] = .
    Paths[] = %R/fonts/cid//

    ;; Environment variables to be used for searching CID map
    ;; files.
    EnvVars[] = FONTCIDMAPS

    ;; CID map file name extensions.
    Extensions[] = .cid
    Extensions[] = .cidmap

[Core.FileTypes.clua]

    ;; Search path for dynamic libraries for Lua.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}/lua//

    ;; Environment variables to be used for searching dynamic
    ;; libraries for Lua.
    EnvVars[] = CLUAINPUTS

    ;; File name extensions for Lua dynamic libraries.
    Extensions[] = .dll
    Extensions[] = .so
    
[Core.FileTypes.cmap files]

    ;; Search path for character map files.
    Paths[] = .
    Paths[] = %R/fonts/cmap//

    ;; Environment variables to be used for character map files.
    EnvVars[] = CMAPFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.cweb]

    ;; Search path for CWeb input files.
    Paths[] = .
    Paths[] = %R/cweb//

    ;; Environment variables to be used for searching Cweb input
    ;; files.
    EnvVars[] = CWEBINPUTS

    ;; CWeb file name extensions.
    Extensions[] = .w

[Core.FileTypes.dvi]

    ;; Search path for DVI files.
    Paths[] = .
    Paths[] = %R/doc//

    ;; DVI file name extensions.
    Extensions[] = .dvi

[Core.FileTypes.dvips config]

    ;; Search path for Dvips configuration files.
    Paths[] = .
    Paths[] = %R/dvips//

    ;; Environment variables to be used for searching Dvips
    ;; configuration files.
    EnvVars[] = TEXCONFIG

[Core.FileTypes.enc]

    ;; Search path for encoding vector files.
    Paths[] = .
    Paths[] = %R/fonts/enc//

    ;; Environment variables to be used for searching encoding
    ;; vector files.
    EnvVars[] = ENCFONTS
    EnvVars[] = TEXFONTS

    ;; Encoding vector file name extensions.
    Extensions[] = .enc

[Core.FileTypes.font feature files]

    ;; Search path for font feature files.
    Paths[] = .
    Paths[] = %R/fonts/fea//

    ;; Environment variables to be used for searching font feature
    ;; files.
    EnvVars[] = FONTFEATURES

    ;; Font feature file name extensions.
    Extensions[] = .fea

[Core.FileTypes.fmt]

    ;; Search path for TeX memory dump files.
    Paths[] = .
    Paths[] = %r/miktex/data/le/{$engine,}

    ;; TeX memory dump file name extensions.
    Extensions[] = .fmt

[Core.FileTypes.gf]

    ;; Search path for generic font bitmap files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Environment variables to be used for searching generic font
    ;; bitmap files.
    EnvVars[] = GFFONTS
    EnvVars[] = GLYPHFONTS
    EnvVars[] = TEXFONTS

    ;; Generic font bitmap file name extensions.
    Extensions[] = .gf

[Core.FileTypes.bitmap font]

    ;; Search path for bitmap font files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Environment variables to be used for searching bitmap font
    ;; files.
    EnvVars[] = GLYPHFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.graphic/figure]

    ;; Search path for figure files.
    Paths[] = .
    Paths[] = %R/dvips//
    Paths[] = %R/pdftex//
    Paths[] = %R/tex//

    ;; Environment variables to be used for searching figure
    ;; files.
    EnvVars[] = TEXPICTS
    EnvVars[] = TEXINPUTS

    ;; Figure file name extensions.
    Extensions[] = .eps
    Extensions[] = .epsi
    Extensions[] = .png

[Core.FileTypes.hbf]

    ;; Search path for HBF files.
    Paths[] = .
    Paths[] = %R/fonts/misc/hbf//

    ;; HBF file name extensions.
    Extensions[] = .hbf

[Core.FileTypes.ist]

    ;; Search path for MakeIndex style files.
    Paths[] = .
    Paths[] = %R/makeindex//

    ;; Environment variables to be used for searching MakeIndex
    ;; style files.
    EnvVars[] = TEXINDEXSTYLE
    EnvVars[] = INDEXSTYLE

    ;; MakeIndex style file name extensions.
    Extensions[] = .ist

[Core.FileTypes.lig files]

    ;; Search path for ligature definition files.
    Paths[] = .
    Paths[] = %R/fonts/lig//

    ;; Environment variables to be used for searching ligature
    ;; definition files.
    EnvVars[] = TEXFONTS

    ;; Ligature definition file name extensions.
    Extensions[] = .lig

[Core.FileTypes.ls-R]

    ;; Search path for Web2c file name database files.
    Paths[] = %R

    ;; Environment variables to be used for searching Web2C file
    ;; name database files.
    EnvVars[] = TEXMFDBS

[Core.FileTypes.lua]

    ;; Search path for Lua files.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}/{lua,}//
    Paths[] = %R/tex/{$progname,generic,}//

    ;; Environment variables to be used for searching Lua files.
    EnvVars[] = LUAINPUTS

    ;; File name extensions for Lua files.
    Extensions[] = .lua
    Extensions[] = .luatex
    Extensions[] = .luc
    Extensions[] = .luctex
    Extensions[] = .texlua
    Extensions[] = .texluc
    Extensions[] = .tlu

[Core.FileTypes.map]

    ;; Search path for font map files.
    Paths[] = .
    Paths[] = %R/fonts/map/{$progname,pdftex,dvips,}//

    ;; Environment variables to be used for searching font map
    ;; files.
    EnvVars[] = TEXFONTMAPS
    EnvVars[] = TEXFONTS

    ;; Font map file name extensions.
    Extensions[] = .map

[Core.FileTypes.mem]

    ;; Search path for MetaPost memory dump files.
    Paths[] = .

    ;; MetaPost memory dump file name extensions.
    Extensions[] = .mem

[Core.FileTypes.mf]

    ;; Search path for METAFONT input files.
    Paths[] = .
    Paths[] = %R/metafont//
    Paths[] = %R/fonts/source//

    ;; Environment variables to be used for searching METAFONT
    ;; input files.
    EnvVars[] = MFINPUTS

    ;; METAFONT file name extensions.
    Extensions[] = .mf

[Core.FileTypes.mfpool]

    ;; Search path for METAFONT program string files.
    Paths[] = .

    ;; Environment variables to be used for searching METAFONT
    ;; program string files.
    EnvVars[] = MFPOOL
    EnvVars[] = TEXMFINI

    ;; METAFONT program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.mft]

    ;; Search path for MFT style files.
    Paths[] = .
    Paths[] = %R/mft//

    ;; Environment variables to be used for searching MFT style
    ;; files.
    EnvVars[] = MFTINPUTS

    ;; MFT style file name extensions.
    Extensions[] = .mft

[Core.FileTypes.misc fonts]

    ;; Search path for font related files.
    Paths[] = .
    Paths[] = %R/fonts/misc//

    ;; Environment variables to be used for font related
    ;; files.
    EnvVars[] = MISCFONTS
    EnvVars[] = TEXFONTS

[Core.FileTypes.mlbib]

    ;; Search path for MlBibTeX database files.
    Paths[] = .
    Paths[] = %R/bibtex/bib/{mlbib,}//

    ;; Environment variables to be used for searching MlBibTeX
    ;; databsae files.
    EnvVars[] = MLBIBINPUTS
    EnvVars[] = BIBINPUTS
    EnvVars[] = TEXBIB

    ;; MlBibTeX database file name extensions.
    Extensions[] = .mlbib
    Extensions[] = .bib

[Core.FileTypes.mlbst]

    ;; Search path for MlBibTeX style files.
    Paths[] = .
    Paths[] = %R/bibtex/{mlbst,bst}//

    ;; Environment variables to be used for searching MlBibTeX
    ;; style files.
    EnvVars[] = MLBSTINPUTS
    EnvVars[] = BSTINPUTS

    ;; MlBibTeX style file name extensions.
    Extensions[] = .bst

[Core.FileTypes.mp]

    ;; Search path for MetaPost input files.
    Paths[] = .
    Paths[] = %R/metapost//

    ;; Environment variables to be used for searching MetaPost
    ;; input files.
    EnvVars[] = MPINPUTS

    ;; MetaPost file name extensions.
    Extensions[] = .mp

[Core.FileTypes.mppool]

    ;; Search path for MetaPost program string files.
    Paths[] = .

    ;; Environment variables to be used for searching MetaPost
    ;; program string files.
    EnvVars[] = MPPOOL
    EnvVars[] = TEXMFINI

    ;; MetaPost program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.MetaPost support]

    ;; Search path for MetaPost support files.
    Paths[] = .
    Paths[] = %R/metapost/support//

    ;; Environment variables to be used for searching MetaPost
    ;; support files.
    EnvVars[] = MPSUPPORT

[Core.FileTypes.ocp]

    ;; Search path for Omega compiled process files.
    Paths[] = .
    Paths[] = %R/omega/ocp//

    ;; Environment variables to be used for searching Omega
    ;; compiled process files.
    EnvVars[] = OCPINPUTS

    ;; Omega compiled process file name extensions.
    Extensions[] = .ocp

[Core.FileTypes.ofm]

    ;; Search path for Omega font metric files.
    Paths[] = .
    Paths[] = %R/fonts/ofm//
    Paths[] = %R/fonts/tfm//

    ;; Environment variables to be used for searching Omega
    ;; font metric files.
    EnvVars[] = OFMFONTS
    EnvVars[] = TEXFONTS

    ;; Omega font metric file name extensions.
    Extensions[] = .ofm
    Extensions[] = .tfm

[Core.FileTypes.opl]

    ;; Search path for Omega property list files.
    Paths[] = .
    Paths[] = %R/fonts/opl//

    ;; Environment variables to be used for searching Omega
    ;; property list files.
    EnvVars[] = OPLFONTS
    EnvVars[] = TEXFONTS

    ;; Omega property list file name extensions.
    Extensions[] = .opl

[Core.FileTypes.otp]

    ;; Search path for Omega translation process files.
    Paths[] = .
    Paths[] = %R/fonts/otp//

    ;; Environment variables to be used for searching Omega
    ;; translation process files.
    EnvVars[] = OTPINPUTS

    ;; Omega translation process file name extensions.
    Extensions[] = .otp

[Core.FileTypes.opentype fonts]

    ;; Search path for OpenType font files.
    Paths[] = .
    Paths[] = %R/fonts/opentype//

    ;; Environment variables to be used for searching OpenType
    ;; font files.
    EnvVars[] = OPENTYPEFONTS
    EnvVars[] = TEXFONTS

    ;; OpenType font file name extensions.
    Extensions[] = .otf

[Core.FileTypes.ovf]

    ;; Search path for Omega virtual font files.
    Paths[] = .
    Paths[] = %R/fonts/ovf//
    Paths[] = %R/fonts/vf//

    ;; Environment variables to be used for searching Omega
    ;; virtual font files.
    EnvVars[] = OVFFONTS
    EnvVars[] = TEXFONTS

    ;; Omega virtual font file name extensions.
    Extensions[] = .ovf

[Core.FileTypes.ovp]

    ;; Search path for Omega virtual property list files.
    Paths[] = .
    Paths[] = %R/fonts/ovp//

    ;; Environment variables to be used for searching Omega
    ;; virtual property list files.
    EnvVars[] = OVPFONTS
    EnvVars[] = TEXFONTS

    ;; Omega virtual property list file name extensions.
    Extensions[] = .ovp

[Core.FileTypes.pdftex config]

    ;; Search path for pdfTeX configuration files.
    Paths[] = .
    Paths[] = %R/pdftex/{$progname,}//

    ;; Environment variables to be used for searching pdfTeX
    ;; configuration files.
    EnvVars[] = PDFTEXCONFIG

[Core.FileTypes.pk]

    ;; Search path for packed bitmap font files.
    Paths[] = .
    Paths[] = %R/fonts//

    ;; Packed bitmap font file name extensions.
    Extensions[] = .pk

[Core.FileTypes.other binary files]

    ;; Search path for program binary files.
    Paths[] = .
    Paths[] = %R/$progname//

[Core.FileTypes.other text files]

    ;; Search path for program text files.
    Paths[] = .
    Paths[] = %R/$progname//

[Core.FileTypes.PostScript header]

    ;; Search path for downloadable PostScript files.
    Paths[] = .
    Paths[] = %R/{dvips,fonts/{enc,type1,type42,type3}}//
    Paths[] = $psfontdirs

    ;; Environment variables to be used for searching downloadable
    ;; PostScript files.
    EnvVars[] = TEXPSHEADERS
    EnvVars[] = PSHEADERS

    ;; Downloadable PostScript file name extensions.
    Extensions[] = .pro
    Extensions[] = .enc

[Core.FileTypes.texmfscripts]

    ;; Search path for architecture-independent executables.
    Paths[] = .
    Paths[] = %R/scripts/{$progname,$engine,}//

    ;; Environment variables to be used for searching
    ;; architecture-independent executables.
    EnvVars[] = TEXMFSCRIPTS

[Core.FileTypes.subfont definition files]

    ;; Search path for subfont definition files.
    Paths[] = .
    Paths[] = %R/fonts/sfd//

    ;; Environment variables to be used for searching subfont
    ;; definition files.
    EnvVars[] = SFDFONTS
    EnvVars[] = TEXFONTS

    ;; Subfont definition file name extensions.
    Extensions[] = .sfd

[Core.FileTypes.tcx]

    ;; Search path for TCX files.
    Paths[] = .
    Paths[] = %R/miktex/config
    Paths[] = %R/miktex/web2c

    ;; TCX file name extensions.
    Extensions[] = .tcx

[Core.FileTypes.tex]

    ;; Search path for TeX input files.
    Paths[] = .
    Paths[] = %R/tex/{$progname,generic,}//

    ;; Environment variables to be used for searching TeX input
    ;; files.
    EnvVars[] = TEXINPUTS

    ;; TeX input file name extensions.
    Extensions[] = .tex

[Core.FileTypes.texpool]

    ;; Search path for TeX program string files.
    Paths[] = .

    ;; Environment variables to be used for searching METAFONT
    ;; program string files.
    EnvVars[] = TEXPOOL
    EnvVars[] = TEXMFINI

    ;; TeX program string file name extensions.
    Extensions[] = .pool

[Core.FileTypes.TeX system sources]

    ;; Search path for source files.
    Paths[] = .
    Paths[] = %R/source//

    ;; Environment variables to be used for searching source
    ;; files.
    EnvVars[] = TEXSOURCES

[Core.FileTypes.TeX system documentation]

    ;; Search path for documentation files.
    Paths[] = .
    Paths[] = %R/doc/miktex//
    Paths[] = %R/doc//

    ;; Environment variables to be used for searching
    ;; documentation files.
    EnvVars[] = TEXDOCS

    ;; Documentation file name extensions.
    Extensions[] = .pdf
    Extensions[] = .html
    Extensions[] = .md
    Extensions[] = .txt
    Extensions[] = .ps
    Extensions[] = .dvi

[Core.FileTypes.tfm]

    ;; Search path for TeX font metric files.
    Paths[] = .
    Paths[] = %R/fonts/tfm//

    ;; Environment variables to be used for searching TeX font
    ;; metric files.
    EnvVars[] = TFMFONTS
    EnvVars[] = TEXFONTS

    ;; TeX font metric file name extensions.
    Extensions[] = .tfm

[Core.FileTypes.troff fonts]

    ;; Environment variables to be used for searching Troff font
    ;; files.
    EnvVars[] = TRFONTS

[Core.FileTypes.truetype fonts]

    ;; Search path for TrueType font files.
    Paths[] = .
    Paths[] = %R/fonts/truetype//

    ;; Environment variables to be used for searching TrueType
    ;; font files.
    EnvVars[] = TTFONTS
    EnvVars[] = TEXFONTS

    ;; TrueType font file name extensions.
    Extensions[] = .ttf
    Extensions[] = .ttc

[Core.FileTypes.type1 fonts]

    ;; Search path for Type1 font files.
    Paths[] = .
    Paths[] = %R/fonts/type1//

    ;; Environment variables to be used for searching Type1 font
    ;; files.
    EnvVars[] = T1FONTS
    EnvVars[] = T1INPUTS
    EnvVars[] = TEXFONTS
    EnvVars[] = TEXPSHEADERS
    EnvVars[] = PSHEADERS

    ;; Type1 font file name extensions.
    Extensions[] = .pfb
    Extensions[] = .pfa

[Core.FileTypes.type42 fonts]

    ;; Search path for Type42 font files.
    Paths[] = .
    Paths[] = %R/fonts/type42//

    ;; Environment variables to be used for searching Type42 font
    ;; files.
    EnvVars[] = T42FONTS
    EnvVars[] = TEXFONTS

    ;; Type42 font file name extensions.
    Extensions[] = .t42
    Extensions[] = .T42

[Core.FileTypes.vf]

    ;; Search path for TeX virtual font files.
    Paths[] = .
    Paths[] = %R/fonts/vf//

    ;; Environment variables to be used for searching TeX virtual
    ;; font files.
    EnvVars[] = VFFONTS
    EnvVars[] = TEXFONTS

    ;; TeX virtual font file name extensions.
    Extensions[] = .vf

[Core.FileTypes.web2c files]

    ;; Search path for Web2c files.
    Paths[] = .
    Paths[] = %R/web2c//

[Core.FileTypes.web]

    ;; Search path for WEB input files.
    Paths[] = .
    Paths[] = %R/web//

    ;; Environment variables to be used for searching WEB input
    ;; files.
    EnvVars[] = WEBINPUTS

    ;; CWeb file name extensions.
    Extensions[] = .web

[MakeBase]

    ;; Directory where METAFONT stores \*.base files.
    DestDir = %R/miktex/data/le

[MakeFMT]

    ;; Directory where TeX engines store \*.fmt files.
    DestDir = %R/miktex/data/le/$engine

[MakePk]

    ;; Directory where makepk stores \*.pk files.
    DestDir = %R/fonts/pk/%m/%s/%t/dpi%d

[MakeTFM]

    ;; Directory where maketfm stores \*.tfm files.
    DestDir = %R/fonts/tfm/%s/%t

[MPM]

    ;; Install packages for all users.
    AutoAdmin = ?

    ;; Install missing packages automatically (on-the-fly).
    AutoInstall = ?

    ;; Deprecated.
    ForceLocalServer = f

    ;; Local package repository path.
    ;LocalRepository = 

    ;; Deprecated.
    ;MiKTeXDirectRoot =

    ;; Indicates whether proxy authentication is required.
    ProxyAuthReq = f

    ;; Proxy host address.
    ProxyHost =

    ;; Proxy host port.
    ProxyPort = 8080

    ;; Remote package repository URL. Pick a random URL, if empty.
    RemoteRepository = 

    ;; The MiKTeX API endpoint.
    RemoteService_4727 = https://api2.miktex.org/
    
    ;; Package stream. One of: stable, next.
    RepositoryReleaseState = next

    ;; Type of the package repository. One of: remote, local.
    RepositoryType = remote

    ;; Indicates whether a proxy is configured.
    UseProxy = f

[Setup]

    ;; Last time (a time_t value) a MiKTeX administrator has checked for system-wide issues.
    ;LastAdminDiagnose =

    ;; Last time (a time_t value) a MiKTeX administrator changed the system-wide configuration.
    ;LastAdminMaintenance =

    ;; Last time (a time_t value) a MiKTeX administrator has installed system-wide updates.
    ;LastAdminUpdate =

    ;; Last time (a time_t value) a MiKTeX administrator has checked for system-wide updates.
    ;LastAdminUpdateCheck =

    ;; Last time (a time_t value) a MiKTeX administrator has updated the system-wide package database.
    ;LastAdminUpdateDb =

    ;; Last time (a time_t value) the current MiKTeX user has checked for issues.
    ;LastUserDiagnose =

    ;; Last time (a time_t value) the current MiKTeX user changed the configuration.
    ;LastUserMaintenance =

    ;; Last time (a time_t value) the current MiKTeX user has installed updates.
    ;LastUserUpdate =

    ;; Last time (a time_t value) the current MiKTeX user has checked for updates.
    ;LastUserUpdateCheck =

    ;; Last time (a time_t value) the current MiKTeX user has updated the package database.
    ;LastUserUpdateDb =


[TeXandFriends]

    ;; Create auxiliary directory if '--aux-directory=DIR' refers
    ;; to a non-existing directory.
    CreateAuxDirectory = t

    ;; Create the output directory if '--output-directory=DIR'
    ;; refers to a non-existing directory.
    CreateOutputDirectory = t

    ;; Enable file:line:error style messages.
    CStyleErrors = f

    ;; Deprecated.
    ;ParseFirstLine =

    ;; Indicates whether format files (\*.fmt) will be automatically renewed.
    RenewFormatsOnUpdate = t

[TeXjp]

    ;; Indicates whether input file encodings are guessed.
    GuessInputKanjiEncoding = t

/BibTeX
--------------

    ;; Maximum size of a str_entry_var.
    ent_str_size = 500

    ;; Maximum size of a str_global_var.
    glob_str_size = 200000

    ;; Initial maximum number of strings, including pre-defined.
    max_strings = 200000

    ;; Minimum number of cross-refs required for automatic cite_list inclusion.
    min_crossrefs = 2

/All TeXMF Programs
--------------------------

    ;; TeX uses the buffer to contain input lines, but macro expansion
    ;; works by writing material into the buffer and reparsing the line.
    ;; As a consequence, certain constructs require the buffer to be very
    ;; large, even though most documents can be handled with a small
    ;; value.
    buf_size = 200000

    ;; Width of context lines on terminal error messages.
    error_line = 79

    ;; Extra low memory for boxes, glue, breakpoints, etc.
    extra_mem_bot = 0

    ;; Extra high memory for chars, tokens, etc.
    extra_mem_top = 0

    ;; Width of first lines of contexts in terminal error messages; should
    ;; be between 30 and (error_line - 15).
    half_error_line = 50

    ;; Words of inimemory available.
    main_memory = 5000000

    ;; Width of longest text lines output; should be at least 60.
    max_print_line = 79

    ;; Maximum number of strings.
    max_strings = 500000

    ;; Maximum number of simultaneous macro parameters.
    param_size = 20000

    ;; Pool space free after format loaded.
    pool_free = 47500

    ;; Max number of characters in all strings, including all error
    ;; messages, help texts, font names, control sequences.  These values
    ;; apply to TeX and MP.
    pool_size = 6250000

    ;; Maximum number of simultaneous input sources.
    stack_size = 10000

    ;; Strings available after format loaded.
    strings_free = 100

    ;; Minimum pool space after TeX/MP's own strings; must be at least
    ;; 25000 less than pool_size, but doesn't need to be nearly that
    ;; large.
    string_vacancies = 90000

/All TeX Programs
------------------------

    ;; Maximum number of input files and error insertions that can be
    ;; going on simultaneously.
    max_in_open = 50

    ;; Maximum number of semantic levels simultaneously active.
    nest_size = 1000

    ;; Space for saving values outside current group.
    save_size = 200000

    ;; Space for hyphenation patterns.
    trie_size = 1100000

    ;; Total number of fonts.
    font_max = 9000

    ;; Words of font info for TeX (total size of all TFM files,
    ;; approximately).
    font_mem_size = 8000000

    ;; Extra space for the hash table of control sequences (which allows
    ;; 10K names as distributed).
    hash_extra = 600000

    ;; Prime number of hyphenation exceptions.
    hyph_size = 8191

    ;; Size of the output buffer; must be a multiple of 8.
    dvi_buf_size = 16384

    ;; Limit on recursive expansion calls so TeX has a chance to quit nicely
    ;; before stack space runs out. The default is 10000. Normally there is no
    ;; reason to change it. The web2c manual has a bit more about this.
    expand_depth = 10000

/pdfTeX
--------------

    pdf_mem_size = 10000
    obj_tab_size = 1000
    dest_names_size = 131072
    pdf_os_buf_size = 1

/METAFONT & MetaPost
---------------------------

    ;; Size of stack for bisection algorithms; should probably be left at
    ;; this value.
    bistack_size = 1500

    ;; Maximum number of ligature/kern steps, must be at least 255 and at
    ;; most 32510.
    lig_table_size = 15000

    ;; Maximum number of knots between breakpoints of a path.
    path_size = 10000

/METAFONT
----------------

    ;; Number of autorounded points per cycle.
    max_wiggle = 1000

    ;; Space for storing moves in a single octant.
    move_size = 20000

/MetaPost
----------------

    ;; Number of words for TFM information for text fonts.
    font_mem_size = 10000[Finished in 49.9s]





