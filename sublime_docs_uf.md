
# /Part 01. docs.sublimetext.io/README.md

# Sublime Text Community Documentation

We started this project
to fill the gaps
in the Sublime Text [official documentation][off-docs].

***[Read this guide online for free.][docs]***

You can follow our progress here and
on our public [Trello board][trello].

Huge thanks to [all our backers](./BACKERS.md)
from our [fundraiser in 2014 on BountySource][fundraiser]!


## Contributing

This guide is hosted on _Github Pages_ and
built with [Vuepress][].
We use [Git LFS][] (large file storage)
for larger artifacts
embedded in the guide,
such as videos.

We accept error reports and requests for new content
via our [issue tracker][issues],
and encourage you to send pull requests
(but we cannot guarantee
they will be merged).

**Please follow our style guidelines
as described in [CONTRIBUTING.md](./CONTRIBUTING.md).**

This repository includes a `.sublime-project`
with predefined settings and helpful build systems.


### Building (HTML Preview)

In order to build and preview the docs,
you'll need `yarn`.

1. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/).
2. Run:
    - `yarn`
    - `yarn dev`


[off-docs]: https://sublimetext.com/docs/3
[docs]: https://docs.sublimetext.io/
[trello]: https://trello.com/b/ArLlY4X7/sublime-text-unofficial-documentation
[fundraiser]: https://www.bountysource.com/teams/st-undocs/fundraiser
[Git LFS]: https://git-lfs.github.com/
[Vuepress]: https://vuepress.vuejs.org/

[issues]: https://github.com/sublimetext-io/docs.sublimetext.io/issues

# /Part 02. docs.sublimetext.io/LICENSE.txt

<a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br /><span xmlns:dct="https://purl.org/dc/terms/" href="https://purl.org/dc/dcmitype/Text" property="dct:title" rel="dct:type">Sublime Text Unofficial Documentation</span> by <a xmlns:cc="https://creativecommons.org/ns#" href="https://sublimetext.io" property="cc:attributionName" rel="cc:attributionURL">Sublime Text Community</a> is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct="https://purl.org/dc/terms/" href="https://sublimetext.io" rel="dct:source">sublimetext.io</a>.

# /Part 03. docs.sublimetext.io/BACKERS.md

The following people have financially supported the writers of this guide
through a fundraiser in July-August 2014.

**Thanks a bunch to all of you!**

---

Even though their contribution arrived after the campaign's end, we'd like
to make a special mention of Sublime Hq for their generous donation.

- [sublimehq](https://www.sublimehq.com)

---

- [wbond](https://wbond.net)
- [zchrykng](https://github.com/zchrykng)
- [chitowntiger](xxx)
- [wesbos](https://wesbos.com)
- [kblomqvist](https://kblomqvist.github.io/)
- [lmno](http://toomanyideas.net/)
- [The Sublime Text Tips Newsletter](http://sublimetexttips.com/newsletter?utm_source=twitter&utm_medium=link&utm_content=website_link&utm_campaign=twitter_newsletter_signups)
- [fbdiom](http://sysiv.com)
- [Wickerwaka]
- [Corjuh](http://coryjuhlin.com/)
- [lefoy](http://lefoy.net/)
- [ray hatfield](https://thismight.be%2Foffensive%2F)
- [Tomm0]
- [rhynodesigns](http://rhynodesigns.com/)
- [malcolmbastien](http://facebook.com/profile.php?id=856965639)
- [driutheman](http://ak83.lt/)
- [svenax](http://svenax.github.com)
- [sublimator](https://github.com/sublimator)
- [nathany](http://nathany.com/)
- [reekers](http://blahblah.io)
- [bsansouci](https://github.com/bsansouci)
- [greg]
- [lenards]
- [bdougherty](http://brad.is)
- [bgreenlee](http://footle.org)

---

- angusyeh
- subhaze
- theuni
- santbob
- AlekSi
- azhidkov
- Ground-zero
- tadkle
- maique
- nessthehero
- David Ferguson
- Andrew Pankov
- jdlawrence
- chapmandu
- natebeaty
- jonfetterdegges
- Pavel
- cbeltrangomez
- AdamSF
- namedtuple
- Punchlinern
- ukwiz

# /Part 04. docs.sublimetext.io/CONTRIBUTING.md

# Contribution Guidelines


## Issue

Even though it's very unlikely,
please search through the existing issues
and look for existing similar ones
before submitting your own.


## Pull request

Please try to group related changes into single pull requests
and create additional ones if necessary.
This will make reviewing and merging
much easier and faster.


## Markup Style guidelines

This project uses Markdown as its markup language.

Not all the files in this project
follow these guidelines yet,
as we established them
after a large portion of this guide had been written already.
If you find any style inconsistencies,
please file a report or send a pull request to fix them.

When changing a file to use semantic linefeeds,
please apply this in a separate commit
and do not perform any other content changes
in the same commit.


### Markdown Parser

The markup parser is [markdown-it][],
which can be extended by plugins
and is furthermore accompanied
by some of [Vuepress's custom extensions][vuepress-exts].
You can find the list of plugins we use
in the `markdown.plugins` list in `config.js`.

[markdown-it]: https://github.com/markdown-it/markdown-it
[vuepress-exts]: https://vuepress.vuejs.org/guide/markdown.html

Keywords in upper case
follow the meanings specified in [RFC-2119][].

[RFC-2119]: https://tools.ietf.org/html/rfc2119


### Line Widths

Lines MUST NOT be longer than 80 characters,
except for tables, urls and code blocks.

Split text using [semantic linefeeds][].
Using those,
you will hardly ever come near 80 characters
on a single line.
Even when you do,
you should be able to add line breaks
at fitting locations trivially.
This file can serve as an example.

[semantic linefeeds]: https://rhodesmill.org/brandon/2012/one-sentence-per-line/


### Whitespace

Blocks SHOULD be indented by 2 spaces,
but visual indentation is preferred.
Inline code should be using code fences,
especially when syntax highlighting is desired.

*Example:*

```md
- This sentence can be split
  using a semantic linefeed,
  as mentioned earlier.

1. The very same thing applies to this line,
   but it uses a three-spaces indent instead.

1.  You could also indent this block
    by 4 spaces.
```

Trailing whitespace SHOULD be avoided.
Insert manual line breaks using `<br>` tags
instead of using two trailing spaces.

Headings MUST be preceded by two blank lines,
unless they directly follow another heading
or the beginning of the file.

Enumeration and code blocks
SHOULD be surrounded by blank lines.


### Enumerations

Enumeration lists MUST begin on the same indentation level
as their surrounding text.

- Unnumbered lists SHOULD use the following hierarchy:

  ```md
  - first level
    * second level
  ```

- Numbered lists SHOULD use `1.` for all items when possible:

  ```md
  1. This is the first item,
     but it may change places
     in the future.
  1. By always using ``1.``,
     we can swap lines around
     without worrying about numbering.
  ```


### Hyperlinks

Hyperlinks SHOULD NOT be inlined
and instead use deferred definitions.
The linked text SHOULD NOT be "here".
Instead, describe what the target page
covers, represents, or can otherwise be summarized as
and add the reference to the describing text.
Use a descriptive shorthand
if the linked text does not speak for itself.

Hyperlink definitions can be placed
after a paragraph,
at the end of the section,
or at the end of the document –
whatever seems more appropriate.

*Example:*

```md
This is some normal text.
Information on "text"
can be found [on Wikipedia][wiki-text].
<!-- and not "here" -->

[wiki-text]: https://en.wikipedia.org/wiki/Text
```

For relative links,
follow the Vuepress recommendation
of referencing the files with their `.md` extensions.
Use absolute paths when linking
between the guide and the reference sections.
If the relative URL is short,
you MAY directly specify the target URL in text.


### Headings

The page's title is specified in YAML front matter
and is inserted into the rendered as a heading of level one.
Any subsequent headings of the file
MUST NOT be of heading level two or lower
(where lower refers to the significance,
not the numeric value).

Each heading SHOULD be
under a heading with one level higher.

Thus, the first markdown heading of the
The following heading styles
MUST be used in the displayed order
for technical reasons
(e.g. h3 must come after h2 or higher,
and **not** after h1).

*Example:*

```md
---
title: This will be heading 1
---

## Heading 2

### Heading 3

With text


### And proper spacing

## New Heading 2

### This SHOULD NOT be a h4
```

### File Paths

File paths (relative or absolute)
MUST be specified like this:

    `Packages/SomePackage/somefile.ext`

All paths MUST be written with forward slashes
unless they are meant to be used in Windows.

File extensions (when referring to file types)
MUST be written like this:

    `.ext`


### Shortcut Keys

All key bindings SHOULD be written
using our custom Key component.
The Key chord in the `k` property
uses the same formatting
as for Sublime Text keymaps.
You MAY use `command` and `option`
for macOS-specific bindings.

```html
<Key k="ctrl+t" /> <!-- single-chord -->
<Key k="ctrl+k, ctrl+k" /> <!-- multi-choord binding  -->
<Key k="option+command+up" /> <!-- uses macOS-specific modifiers -->
```

Unless otherwise denoted,
all key bindings MUST refer
to the default for Windows.


### Sublime Text-specific

- Command captions in the command palette
  MUST be written as follows:

  ```md
  **Preferences: Settings - User**
  ```

- Menu item captions (from the main menu by default)
  MUST be written as follows (notice the `→`):

  ```md
  *Preferences → Package Settings → ...*
  ```


### Comments

The following comment 'keywords' may be used
*at the beginning* of a comment
to mark a section for review:

- XXX
- TODO

Examples:

```md
<!-- TODO add some screenshots -->
```

# /Part 05. docs.sublimetext.io/docs/README.md

---
home: true
heroImage: null
actionText: Open Guide
actionLink: guide/
# TODO add links to reference
---
The Sublime Text Community Documentation 
is a community effort 
at documenting the [Sublime Text][] text editor
and accompanying its [official documentation][].

[Sublime Text]: https://sublimetext.com/
[official documentation]: https://sublimetext.com/docs/3/

::: tip Notice
This documentation is currently undergoing updates and modifications.
:::


## Layout

The documentation is split into two sections:

1. [**The Guide**](/guide/).

   Includes basic information on Sublime Text,
   covers its usage
   and how it can be customized.

2. [**The Reference**](/reference/).
   *(For experienced users.)*

   This is where you can look up
   (almost) all the details you need to know
   about how to structure your custom key bindings
   or how to disable a menu item for your plugin.

<!-- TODO mention FAQ, once filled -->

## Contributors

<Contributors user="sublimetext-io" repo="docs.sublimetext.io" :show-title="false"></Contributors>

# /Part 06. docs.sublimetext.io/docs/GLOSSARY.md

---
terms:
  buffer: >
    Data of a loaded file and additional metadata,
    associated with one or more views.
    The distinction between buffer and :view: is technical.
    Most of the time,
    both terms can be used interchangeably.

  view: Graphical display of a buffer. Multiple views can show the same buffer.

  plugin: >
    A feature implemented in Python,
    which can consist of a single command or multiple commands.
    It can be contained in one or many .py files.

  panel: >
    An input/output widget,
    such as a search panel or output panel.

  overlay: >
    An input widget of a special kind.
    For example, Goto Anything is an overlay.

  package: >
    A group of resource files
    providing extended functionality,
    consisting of e.g.
    snippets, syntax definitions, or plugins.
    Can be a folder in the Packages folder
    or an archived .sublime-package file.

  user package: >
    A :package: installed or managed by the user.

  shipped package: >
    A :package: that is provided by Sublime Text on every installation.

  core package: >
    A :shipped_package:
    that provides core functionality for Sublime Text.

  installed package: >
    A :user_package: inside the Installed Packages folder
    in the .sublime-package archive format.

  override package: >
    A special package
    that can override individual resource files
    of an :installed_package: or :shipped_package:.

  file type: >
    In the context of Sublime Text,
    a file type refers to the type of file
    as determined by the applicable .sublime-syntax syntax definition.
    However, this is an ambiguous term
    and in some instances it could also be used
    with the broader meaning it has in technical texts.

  PackageDev: >
    An installable package that provides
    syntax highlighting, snippets, completions, and more
    for Sublime Text's resource files.

  Package Control: >
    The de-facto package manager for Sublime Text. 
    <a href="https://packagecontrol.io/">https://packagecontrol.io/</a>

  command: >
    A command is an action to be executed
    and can be referenced in many resource files.
    It may accept JSON-serializable arguments
    and can be defined in user plugins.

  Data directory: >
    Core concept and storage for all of Sublime Text's resources.
    Refer to the introduction for details.

  console: >
    Internal Sublime Text console for debug messages
    and plugin output. Open via *View → Show Console*.
---

<Glossary :terms="$frontmatter.terms" />

# /Part 07. docs.sublimetext.io/docs/guide/README.md

---
title: Introduction
---

Welcome to the community-driven documentation project
for the Sublime Text editor!

[Sublime Text][] is a versatile, fun, and fast text editor
for code and prose that automates repetitive tasks
so you can focus on the important stuff.
It is supported on macOS, Windows and Linux.
Its versatility comes from
a wide range of community-developed third-party packages
that provide syntax highlighting, snippets,
or other automation backed by [Python][] plugins.
The default distribution of Sublime Text
aims to provide a basic but very functional set of features,
but it can easily be turned into a full-fledged IDE,
if so desired.

In this guide,
you will learn how to use Sublime Text effectively
and how to extend it
with functionality that caters to your workflow.

If you're starting out with Sublime Text
and already installed it,
we recommend beginning with the [Basic Concepts][] page.
Otherwise,
feel free to use the sidebar on the left
to navigate to your topic of interest.

If you're interested in the nitty-gritty details
of how you can customize and extend Sublime Text to your liking,
check out the [Reference](/reference/) section
of this guide via the navigation bar on top.
You can always go back to this page
by clicking on "Guide" in that same bar.

**Happy learning!**

::: tip One last note before you dive in
You can switch the page's theme by using the cog in the top navigation bar.
Changing the theme and using the search bar require JavaScript,
because this is a statically hosted site.
Other than that, this site site can be used without JavaScript.
:::

![Sublime Text](./images/introduction.png)

[Sublime Text]: https://www.sublimetext.com/
[Python]: https://python.org/
[Basic Concepts]: ./getting-started/basic-concepts.md


## History

The Unofficial Sublime Text Documentation
was started by [Guillermo López-Anglada](https://github.com/guillermooo) in 2010
and later joined by [FichteFoll](https://github.com/FichteFoll) in 2013,
receiving countless contributions
by other members of the community through its entire lifetime.
In 2014, it was backed by a fundraiser
and supported by individuals and Sublime HQ Pty Ltd.

After that version of the docs,
originally hosted on http://docs.sublimetext.info/,
went down in November 2019
and the maintainer of both the repo and the domain
could not be contacted anymore,
the project was
forked of the original
under an older, more permissive license
and rebooted at its current domain of <https://docs.sublimetext.io/>.
In the process,
the underlying markup rendering framework was changed
from [Sphinx][] to [Vuepress][]
and the documents have been restructured
into the two guide and reference main sections
you can see in the navigation bar at the top.

[Vuepress]: https://vuepress.vuejs.org/
[Sphinx]: https://sphinx-doc.org/


## Contributing to the Documentation

If you want to contribute to this documentation, head over to the
[GitHub repository][repo].
You will also find an "Edit this page" link
at the bottom of each page
that will redirect you
directly to the source file
of the page you are currently viewing.
Please review our [contribution guidelines][]
for formatting questions.


[repo]: https://github.com/sublimetext-io/docs.sublimetext.io
[contribution guidelines]: https://github.com/sublimetext-io/docs.sublimetext.io/blob/master/CONTRIBUTING.md

# /Part 08. docs.sublimetext.io/docs/guide/usage/editing.md

---
title: Editing
---

Sublime Text is brim-full of editing features. This topic just
scratches the surface of what's possible.

## Multiple Selections

Multiple selections let you make sweeping changes to your text efficiently.
Any praise about multiple selections is an understatement. This is why:

Select some text and press <Key k="ctrl+D" /> to **add more** instances. If
you want **to skip the current instance**, press <Key k="ctrl+k, ctrl+d" />.

If you go too far, press <Key k="ctrl+U" /> to **deselect** the current instance.


## Transforming Multiple Selections into Lines

<Key k="ctrl+l" /> expands the selections to the end of the line.
<Key k="ctrl+shift+l" /> splits the selections into lines.

You can copy multiple selected lines to a separate buffer, edit them there,
select the content again as multiple lines and then paste them back into
place in the first buffer.


## Column Selection

You can select a rectangular area of a file. Column selection makes use of
multiple selections.

It's possible to add blocks of text to or remove them from the selection.

### Using the Mouse

**Windows & Linux**

| Description           | Shortcut                                    |
| --------------------- | ------------------------------------------- |
| Select Block          | <Key k="shift" /> + Right Mouse Button      |
| Add to Selection      | <Key k="ctrl+shift" /> + Right Mouse Button |
| Remove from Selection | <Key k="alt+shift" /> + Right Mouse Button  |

**macOS**

| Description           | Shortcut                                             |
| --------------------- | ---------------------------------------------------- |
| Select Block          | <Key k="option" /> + Left Mouse Button               |
| Add to Selection      | <Key k="option+command" /> + Left Mouse Button       |
| Remove from Selection | <Key k="option+shift+command" /> + Left Mouse Button |


### Using the Keyboard


| System  | Shortcut                                                  |
| ------- | --------------------------------------------------------- |
| Windows | <Key k="ctrl+alt+up" /> and <Key k="ctrl+alt+down" />     |
| Linux   | <Key k="alt+shift+up" /> and <Key k="alt+shift+down" />   |
| macOS   | <Key k="ctrl+shift+up" /> and <Key k="ctrl+shift+down" /> |


## Other Ways of Selecting Text

The list is long; all available options can be found under **Selection**. To
name a few:

* Select subwords (<Key k="alt+shift+left" /> and <Key k="alt+shift+right" />)
* Expand selection to brackets (<Key k="ctrl+shift+m" />)
* Expand selection to indentation (<Key k="ctrl+shift+j" />)
* Expand selection to scope (<Key k="ctrl+shift+space" />)


## Transposing Things

Need to swap two letters or, better yet, two words? Experiment with
<Key k="ctrl+t" />.

## Arithmetic

Need to create a series of numbers? Try <Key k="ctrl+shift+p" /> and "Arithmetic".

Best used when having multiple selections.

| Expression         | Selection   | Result                         |
| ------------------ | ----------- | ------------------------------ |
| `1+i`              |             | 1, 2, 3, 4, 5, 6, 7, ...       |
| `30+(i%3)`         |             | 30, 31, 32, 30, 31, 32, ...    |
| `(x*2)+i`          | 10, 20, 30  | 20, 41, 62                     |
| `math.ceil(x)`     | 0.25, 2.25  | 1, 3                           |
| `len(s)`           | house, tree | 5, 4                           |
| `format(s, '^10')` | fish        | '&nbsp;&nbsp;&nbsp;fish&nbsp;&nbsp;&nbsp;' (centered string) |

You can use the following variables:

* `i` being the index of the selection
* `x` being the selected number
* `s` being the selected string

As you can see above you can even use a certain set of built-in python functions:

* [docs.python.org/3.8/library/math.html](https://docs.python.org/3.8/library/math.html)
* [docs.python.org/3.8/library/functions.html](https://docs.python.org/3.8/library/functions.html)
* [docs.python.org/3.8/library/string.html#formatspec](https://docs.python.org/3.8/library/string.html#formatspec)

## And much, much more...

The **Edit**, **Selection**, **Find** and **Goto** menus are good places to
look for handy editing tools. You might end up using just a few of them,
but the rest will still be there for when you need them.

# /Part 09. docs.sublimetext.io/docs/guide/usage/search-and-replace.md

---
title: Search and Replace
---

Sublime Text features
two main types of search:

- [Single File](#single-file)
- [Multiple Files](#multiple-files)

Both support [regular expressions](#regular-expressions),
a powerful tool for searching and replacing text.


## Single File

### Searching

Keyboard shortcuts related to the search panel:

| Description                | Shortcut                |
| -------------------------- | ----------------------- |
| **Open search panel**      | <Key k="ctrl+f" />      |
| Toggle regular expressions | <Key k="alt+r" />       |
| Toggle case sensitivity    | <Key k="alt+c" />       |
| Toggle exact match         | <Key k="alt+w" />       |
| Find next                  | <Key k="enter" />       |
| Find previous              | <Key k="shift+enter" /> |
| Find all                   | <Key k="alt+enter" />   |


### Incremental Search

Keyboard shortcuts related to the incremental search panel:

| Description                       | Shortcut                |
| --------------------------------- | ----------------------- |
| **Open incremental search panel** | <Key k="ctrl+i" />      |
| Toggle regular expressions        | <Key k="alt+r" />       |
| Toggle case sensitivity           | <Key k="alt+c" />       |
| Toggle exact match                | <Key k="alt+w" />       |
| Find next                         | <Key k="enter" />       |
| Find previous                     | <Key k="shift+enter" /> |
| Find all                          | <Key k="alt+enter" />   |


The only difference between this panel
and the regular search panel
lies in the behavior of the <Key k="enter" /> key.
In incremental searches,
it will select the next match in the file
and dismiss the search panel for you.
Choosing between this panel or the regular search panel
is a matter of preference.


### Replacing Text

Keyboard shortcuts related to the replace panel:


| Description            | Shortcut                   |
| ---------------------- | -------------------------- |
| **Open replace panel** | <Key k="ctrl+h" />         |
| Replace next           | <Key k="ctrl+shift+h" />   |
| Replace all            | <Key k="ctrl+alt+enter" /> |


### Tips

#### Other Ways of Searching in Files

[Goto Anything](./file-management/navigation.md#goto-anything)
provides the `#` operator
to search in the filtered file.


#### Other Search-Related Key Bindings

These key bindings work
when the search panel is hidden:

| Description                                  | Shortcut             |
| -------------------------------------------- | -------------------- |
| Search forward using most recent pattern     | <Key k="f3" />       |
| Search backwards using most recent pattern   | <Key k="shift+f3" /> |
| Select all matches using most recent pattern | <Key k="alt+f3" />   |

You can also perform searches
based on the current selection:

| Description                     | Shortcut                 |
| ------------------------------- | ------------------------ |
| Search using current selection  | <Key k="ctrl+e" />       |
| Replace using current selection | <Key k="ctrl+shift+e" /> |


### Multiline Search

You can type in multiline search patterns
into search panels.
To enter newline characters,
press <Key k="ctrl+enter" />.

![Mutiline Replace](./images/search-replace-multi-line.png)

Note that search panels are resizable too.


## Multiple Files

### Searching

Keyboard shortcuts related to Find in Files:

| Description                | Shortcut                 |
| -------------------------- | ------------------------ |
| **Open Find in Files**     | <Key k="ctrl+shift+f" /> |
| Toggle regular expressions | <Key k="alt+r" />        |
| Toggle case sensitivity    | <Key k="alt+c" />        |
| Toggle exact matches       | <Key k="alt+w" />        |
| Find next                  | <Key k="Enter" />        |


### Search Scope

The **Where** field in Find in Files
limits the search scope.
You can define scopes in several ways:

- Adding individual directories (Unix-style paths, even on Windows)
- Adding/excluding files based on wildcards
- Adding symbolic locations (`<open folders>`, `<open files>`...)

It is also possible to combine these filters using commas; for example:

![Search Patterns](./images/search-filters.png)

Press the **...** button in the search panel
to display a menu containing scope options.


### Results Format

In the search panel, you can customize
how results are displayed.
These are the available options:

- Show in separate view
- Show context

![Search Results](./images/search-results-pattern.png)


### Navigating Results

If the search yields matches,
you can move through the sequence
using the following key bindings:

| Description    | Shortcut             |
| -------------- | -------------------- |
| Next match     | <Key k="f4" />       |
| Previous match | <Key k="shift+f4" /> |
| Open match     | <Key k="enter" />    |

You can also double-click
on lines with a match.


## Regular Expressions

Regular Expressions find complex *patterns* in text.
To take full advantage
of the search and replace facilities in Sublime Text,
you should at least learn
the basics of regular expressions.
In this guide
we won't explain how to use regular expressions.

The term *regular expression*
is usually shortened to *regexp* or *regex*.

This is how a regex might look:

```regex
(?:Sw|P)i(?:tch|s{2})\s(?:it\s)?of{2}!
```

To use regular expressions in Sublime Text,
you first need to activate them in
the various search panels.
Otherwise, search terms will be interpreted literally.

![Search and Replace](./images/search-regex-sample.png)

Sublime Text uses the
Perl Compatible Regular Expressions (PCRE) engine
from the Boost library.


::: seealso
[Boost library documentation for regular expressions](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html)
: Documentation on regular expressions.

[Boost library documentation for format strings](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/perl_format.html)
: Documentation on format strings.
  Note that Sublime Text additionally interprets `\\{n}` as `${n}`.
:::

# /Part 10. docs.sublimetext.io/docs/guide/usage/build-systems.md

---
title: Build Systems
---

::: warning Notice
This page describes the old behavior of build systems.
While it is still generally correct,
refer to the official documentation
for the up to date version.
We are working on this.

[Offical Documentation on Build Systems](https://www.sublimetext.com/docs/build_systems.html)
: Complete documentation on all available options, variables, etc.
:::

Build systems let you run your files
through external programs like
`make`, `tidy`, interpreters, etc.

Executables called from build systems
must be in your **`PATH`**.


## File Format

Build systems are JSON files
and have the extension `.sublime-build`.

### Example

Here's an example of a build system:

```js
{
    "cmd": ["python", "-u", "$file"],
    "file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
    "selector": "source.python"
}
```

`cmd`
: Required. This option contains the actual command line
  to be executed.

  ```bash
  python -u /path/to/current/file.ext
  ```

`file_regex`
: A Perl-style regular expression
  to capture error information
  from an external program's output.
  This information is used
  to help you navigate through error instances with <Key k="f4" />".

`selector`
: If the **Tools | Build System | Automatic** option is set,
  Sublime Text will automatically find
  the corresponding build system for the active file
  by matching `selector` to the file's scope.

In addition to options,
you can use some variables in build systems too,
as we have done above with `$file`,
which expands to the active buffer's filename.


## Where to Store Build Systems

Build systems must be located somewhere
under the Packages folder
(e.g. `Packages/User`).
Many packages include their own build systems.


## Running Build Systems

Build systems can be run by pressing <Key k="f7" />
or from **Tools → Build**.

# /Part 11. docs.sublimetext.io/docs/guide/usage/file-management/README.md

---
title: File Management & Navigation
---

Sublime Text includes a variety of features
to help you keep your work organized
and find your way around your projects.

# /Part 12. docs.sublimetext.io/docs/guide/usage/file-management/navigation.md

---
title: Navigation
---

## Goto Anything

Using Goto Anything,
you can **navigate your project's files** swiftly.

![Goto Anything](./images/goto.png)

Keyboard shortcuts related to Goto Anything:

| Description                           | Shortcut           |
| ------------------------------------- | ------------------ |
| **Open Goto Anything**                | <Key k="ctrl+p" /> |
| Open current item                     | <Key k="enter" />  |
| Open current item and keep panel open | <Key k="right" />  |
| Close Goto Anything                   | <Key k="escape" /> |

As you type into Goto Anything's input area,
names of files in the current project
will be searched,
and a preview of the best match
will be shown.
This preview is *transient*;
that is, it won't become the actual active view
until you perform some operation on it.
You will find transient views in other situations,
for example, after clicking on a file in the sidebar.

Goto Anything lives up to its name –
there's more to it than locating files.


### Goto Anything Operators

Goto Anything accepts several operators.
All of them can be used
on their own or after the search term.

**Example:**

```
models:100
```

This instructs Sublime Text
to first search for a file
whose path matches `models`,
and then to go to line 100 in said file.


#### Supported Operators

`@symbol`
: Searches  the active file
  for the symbol named `symbol`.

  ::: tip Note
  Symbols usually include class and function names.

  Symbol searches will only yield results
  if the active file type
  has symbols defined for it.
  For more information about symbols,
  see [Symbols](/reference/symbols.md).
  :::

`#term`
: Performs a fuzzy search of the `term` search term
  and highlights all matches.

`:line_number`
: Goes to the specified `line_number`,
  or to the end of the file
  if `line_number` is larger
  that the file's line count.

The Goto Anything operators
are bound to the following shortcuts:

| Description | Shortcut               |
| ----------- | ---------------------- |
| **@**       | <Key k="ctrl+r" /> |
| **\#**      | <Key k="ctrl+;" /> |
| **:**       | <Key k="ctrl+g" /> |


### Goto Symbol In Project

The Goto Anything shortcuts navigate the *current* file.
If you have a project open, you can press <Key k="ctrl+shift+r" />
to launch Goto Anything In Project. 
This command will search
for symbols across *every file* in your project.

## Sidebar

The sidebar provides an overview
of the active project
(more on projects later).
Files and folders in the sidebar
will be available in [Goto Anything](#goto-anything)
and project-wide actions
like, for example, project-wide searches.

<!-- TODO: maybe say "Find in Files" instead. -->

Projects and the sidebar are closely related.
It's important to note
that there's always an active project;
if you haven't opened a project file,
an anonymous project will be used instead.

The sidebar provides basic file management operations
through its context menu.

These are common keyboard shortcuts
related to the side bar:

| Description                    | Shortcut                   |
| ------------------------------ | -------------------------- |
| **Toggle side bar**            | <Key k="ctrl+k, ctrl+b" /> |
| Give the focus to the side bar | <Key k="ctrl+0" />         |
| Return the focus to the view   | <Key k="escape" />         |
| Navigate side bar              | Arrow keys                 |

Files opened from the sidebar
create *semi-transient* views.
Unlike transient views, semi-transient views
show up as a new tab.
The tab title of semi-transient views appears in italics.
Before a new semi-transient view is opened,
any other pre-existing semi-transient view in the same pane
gets automatically closed.

Here's an example showing a normal view, a transient view,
and a semi-transient view.
Notice that the transient view has no tab:

![Goto Anything - Transient Views](./images/goto-details.png)


## Panes

Panes are groups of views.
In Sublime Text, you can have
multiple panes open at the same time.

Main keyboard shortcuts related
to panes:

| Description       | Shortcut                      |
| ----------------- | ----------------------------- |
| Create new pane   | <Key k="ctrl+k, ctrl+up" />   |
| Close active pane | <Key k="ctrl+k, ctrl+down" /> |

Further pane management commands
can be found under **View → Layout**
and related submenus.

# /Part 13. docs.sublimetext.io/docs/guide/usage/file-management/projects.md

---
title: Projects
---

Projects group sets of files and folders
to keep your work organized.
They support project-specific settings and build systems
and you can quickly switch between them
to continue working where you left off.

Adding folders to a project is necessary for
[Goto Anything](./navigation.md#goto-anything)
and project-wide Goto Definition.

There is always an active project,
even if you haven't created or opened one.
In this situation,
you are working with an *anonymous project*,
which has limited functionality.
New windows always use an anonymous project
when they first open.

Project metadata is stored in JSON files
with a `.sublime-project` extension.
Wherever there's a `.sublime-project` file,
you will find an ancillary `.sublime-workspace` file too.
The `.sublime-workspace` file contains session data
that you *should* never edit.
(More on workspaces later.)

::: tip Note
Generally speaking,
it's fine to commit `.sublime-project` files
to a source code repository,
but always be mindful of what you store in them.
:::


## Creating a Project

Start with an anonymous project
by opening a new window
or closing any active project
with the **Project → Close Project** menu.

You can add and remove folders to/from a project
using the **Project** menu
or the side bar's context menu.
If you drag a folder onto a Sublime Text window,
it will be added to the project too.

To save an anonymous project,
go to **Project → Save Project As...**.

After the project is saved,
you can edit it by hand
to adjust further options.


## Opening Projects

Using the main menu,
you can open or switch projects
by selecting **Project → Open Recent**,
**Project → Switch Project…**
or **Project → Quick Switch Project…**.

When switching projects,
Sublime Text will close the current project
and open the specified one in the same window,
When opening a project,
Sublime Text will open a new window
and open the selected project there.

Keyboard shortcuts related to projects:

| Description               | Shortcut       |
| ------------------------- | -------------- |
| **Quick Switch Project…** | Ctrl + Alt + P |

::: tip Note
The key binding was removed with build 3096 for Windows
and must be added manually,
if desired.
In order to do this,
add the following [key binding](../../customization/key_bindings.md)
to your user key bindings file:
:::

```json
{ "keys": ["ctrl+alt+p"], "command": "prompt_select_workspace" }
```

<!-- TODO remove mention of ctrl+alt+p entirely -->

Additionally,
you can open a project from the **command line**
by passing the `.sublime-project` file as an argument
to the `subl` command line helper
included with Sublime Text.


## Advanced Configuration for Project Files

Along with more options for individual directories,
projects can have specific build systems or settings overrides.

::: seealso
[Projects - Reference](/reference/projects.md)
: Documentation on project file format and options.
:::


## Settings Related to the Sidebar and Projects

`binary_file_patterns`
: A list of wildcards.
  Files matching these wildcards will show up in the side bar,
  but will be excluded from Goto Anything
  and Find in Files.

<!-- TODO: file_exlude_patterns and folder_exlude_patterns also exist -->
<!-- TODO: Add reference to setting or explain wildcards -->


## Workspaces

Workspaces hold session data
associated with a project,
which includes information
about the opened files, pane layout,
find history and more.
A project can have multiple workspaces.

A common use case for workspaces is
to work on different features
*within the same project*,
where each feature requires
a different set of files to be open,
and you want to switch between features quickly.
In this case you'll want to have
a second workspace available.
Writing tests could be an example for this.

Workspaces behave very much like projects.
To create a new workspace,
select **Project → New Workspace for Project**.
To save the active workspace,
select **Project → Save Workspace As...**.

The workspace metadata is stored in JSON files
with the `.sublime-workspace` extension,
which you are not supposed to edit.

To switch between different workspaces,
use <Key k="ctrl+alt+p" />,
exactly as you do with projects.

As with projects,
you can open a workspace
from the **command line**
by passing the desired `.sublime-workspace` file
as an argument to the `subl` command line helper
included with Sublime Text.

::: warning
Unlike `.sublime-project` files,
`.sublime-workspace` files
are not meant to be shared or edited manually.
**You should never commit** `.sublime-workspace` **files
into a source code repository.**
:::

# /Part 14. docs.sublimetext.io/docs/guide/getting-started/installation.md

---
title: Installation
---

Make sure to read the [conditions for use](https://www.sublimetext.com/buy)
on the official site.
**Sublime Text is not free**.
However,
you may evaluate it without a license.

Download links for all supported platforms
can be found on the [Download][] page.

The process of installing Sublime Text
is different for each platform.

[Download]: https://www.sublimetext.com/download


## 32 or 64 bits?

**64 bit versions should be preferred.**
As of Sublime Text 4 there are no (officially supported)
32-bit versions any more.
Only use a 32-bit version
if you are having problems with the 64-bit version
or you are running a 32-bit operating system.
Note that some features,
such as [Git Integration][]
are only available in the 64-bit version.

[Git Integration]: https://www.sublimetext.com/docs/git_integration.html

### macOS

There is only one version
of Sublime Text for macOS.


### Windows

You should be able to run
the 64-bit version
if you are using a modern and supported version Windows
(read: anything older than Windows XP).


### Linux

Run the following command
in your terminal
to check your operating system's type.
`x86_64` means you are on a 64-bit system.

```bash
$ uname -m
x86_64
```

## Portable or Not Portable?

Sublime Text comes in two flavors (for Windows specifically):

- normal
- portable.

Most users should be better served by a normal installation.
Use the portable version only if you know you need it.

**Normal installations** separate data
between two folders:
the installation folder proper,
and the *data directory*
(user-specific directory for data;
explained later in this guide).
Normal installations
also integrate Sublime Text
with the File Explorer.

**Portable installations** keep all files
needed by Sublime Text
in a single folder.
This folder can be moved around
and the editor will still work.


## How to Install

### macOS and Windows

1. Download the installer.
2. Double click on the installer and follow the provided steps.

### Linux

The recommended way is to
use the [official Linux repositories][repositories]
for commonly used Linux distributions
and follow the corresponding steps
to install Sublime Text using your system's package manager.

If there is no repository for your system,
you can look for a Sublime Text entry
on your distro's repository.

[repositories]: https://www.sublimetext.com/docs/linux_repositories.html


#### Manual Installation

The following sequence of Bash commands can be used
to install Sublime Text manually.
Replace `3211` with the latest build available
(or any older build number).

```bash
cd ~
wget https://download.sublimetext.com/sublime_text_3_build_3211_x64.tar.bz2
tar vxjf sublime_text_3_build_*_x64.tar.bz2
# Move the uncompressed files to an appropriate location.
sudo mv sublime_text_3 /opt/sublime_text
# Create a symbolic link to use at the command line.
sudo ln -s /opt/sublime_text_3/sublime_text /usr/local/bin/subl
# Create a symbolic link for the desktop entry.
sudo ln -s /opt/sublime_text_3/sublime_text.desktop /usr/share/applications/sublime_text.desktop
```

## How to Install the Portable Version

::: tip
The portable version is activated
whenever a `Data/` folder exists in the installation folder,
i.e. the folder you extracted the portable archive to.
:::

### Windows

1. Download the compressed archive with the portable version.
2. Unzip it to a folder of your choice.

You will find the `sublime_text.exe` executable inside that folder.

### Linux

The steps are similar
to the [manual installation](#manual-installation) steps above.

1. Download the tarball.
2. Unzip it to a folder of your choice.
3. Create a `Data/` folder inside that folder.

You will find the `sublime_text` executable inside that folder.

### macOS

1. Download `.dmg` file.
2. Open `.dmg` file.
3. Drag the Sublime Text 3 bundle into the *Applications* folder

To create a `symbolic link` to use at the command line,
issue the following command at the terminal:

```bash
ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
```

<!-- TODO check this by someone with a mac -->


## Release Channels

Sublime Text currently has two release *channels*:

* [Stable](https://www.sublimetext.com/3)
* [Dev](https://www.sublimetext.com/3dev)

**Stable releases** are better tested 
and more reliable for everyday use.
**The majority of users should only use stable releases.**

The *dev* channel is more unstable.
Dev builds may contain bugs and not work reliably.
They are updated more often than beta releases.
**Dev builds are only available to registered users.**


## Older Versions

In the event you want to downgrade your Sublime Text,
you can access binaries for any previously released version
by replacing the build number in the download URL.
For example, to retrieve the Windows release for Sublime Text 3.0,
grab the latest download URL provided and replace it with the one from the Sublime Text 3.0 release.

- 3.2.2 (*Build 3211*):
  [https://download.sublimetext.com/Sublime%20Text%20Build%20**3211**%20x64%20Setup.exe](https://download.sublimetext.com/Sublime%20Text%20Build%203211%20x64%20Setup.exe)
- 3.0 (*Build 3143*):
  [https://download.sublimetext.com/Sublime%20Text%20Build%20**3143**%20x64%20Setup.exe](https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe)

Although discouraged,
Sublime Text 2 can be found [on its old download page][st2].
Because it is unsupported,
you will need to figure out on your own
how to install it.

[st2]: https://www.sublimetext.com/2

# /Part 15. docs.sublimetext.io/docs/guide/getting-started/basic-concepts.md

---
title: Basic Concepts
---


To fully understand the rest of this guide,
you need to be familiar
with the concepts presented on this page.


## General Conventions

This guide is written from the perspective of a Windows user.
Most instructions will only require trivial changes
to work on other platforms.

Unless otherwise noted,
relative paths (for example, `Packages/User`)
start at the [Data Directory](#the-data-directory).

We assume default key bindings
when indicating keyboard shortcuts.
If you are using a non-US-English keyboard layout,
some key bindings may not match your layout.
This is due to the way Sublime Text
processes key strokes internally.


## Mastering Sublime Text Takes Time

Mastering Sublime Text requires time and practice.
Luckily, it's built around
a handful of concepts
that make for a consistent
system once all the pieces come together.

This guide will teach you
how to use and configure Sublime Text.

Sublime Text is a versatile editor for programmers,
but you don't need to be one
in order to use it,
and you don't need
to configure it extensively
to be productive –
it's an efficient tool out of the box!
Hackers, however, will appreciate
all the customization and extensibility opportunities.

In the following paragraphs,
we'll outline key aspects
that you'll get familiar with
after you've spent some time using the editor.


## The `Data` Directory

Nearly all of the interesting files for users
live under the *data directory*.
The data directory is
a platform-dependent location:

* **Windows**: `%APPDATA%\Sublime Text`
* **macOS**: `~/Library/Application Support/Sublime Text`
* **Linux**: `~/.config/sublime-text`

If you're using the **portable version** (Windows only),
look for `Application/Data`.
Here, `Application`
refers to the directory
to which you've extracted
the compressed portable files
and where the executable resides.

Note that the `Data` directory
only exists with that name
in the portable version.
In full installations,
it is one of the locations
indicated above.


## The *Packages* Directory

This is a key directory
located under the data directory.
All resources for supported programming
and markup languages
are stored here.

(More on *packages* and *resources* [later](../extensibility/packages.md).)

You can access the packages directory
from the main menu (**Preferences → Browse Packages...**),
by means of an API call (`sublime.packages_path()`),
and by other means
that will be explained in later topics.

In this guide, we refer to the packages folder
as *Packages*, *packages path*, *packages folder*, or *packages directory*.


### The *User* Package

`Packages/User` is a catch-all directory
for custom plugins, snippets, macros, etc.
Consider it your personal area
in the packages folder.
Additionally, it will contain
most of your personal application or plugin settings.

Updates to Sublime Text will never
overwrite the contents of `Packages/User`.


## Sublime Text is Programmable

This information is useful for programmers.
Other users just need to know
that Sublime Text
enables users with programming skills
to add their own features to the editor.

Sublime Text exposes its internals
via an Application Programming Interface (API)
that programmers can interact with using
the [Python programming language][Python].

[Python]: https://www.python.org/


### The Console

Sublime Text and plugins push debug information
to the *console*.
To open the console,
press <kbd>Ctrl+\`</kbd>
or select **View → Show Console**
from the main menu.

Here's the Python console in Sublime Text:

![Console](./images/console.png)

An embedded Python interpreter is included
in the editor.
The embedded interpreter is useful
to inspect the editor's settings
and to quickly test API calls
while developing plugins.


### Your System's Python vs the Sublime Text Embedded Python

Sublime Text comes with its own embedded Python interpreter
that's separate from your system's Python interpreter
(*if available*).

The embedded interpreter is only intended
to interact with the plugin API,
not for general development.


## Packages, Plugins, Resources and Other Terms

Almost every aspect of Sublime Text
can be extended or customized.
You can modify the editor's behavior,
add macros and snippets, extend menus
and much more.
You can even create whole new features
using the editor's API to build complex
plugins.

Sublime Text's vast flexibility is the reason
why you will learn
about so many configuration files:
there simply must be a place
to specify all available preferences and settings.

Configuration files in Sublime Text
are text files
that conform to a predefined structure or *format*:
JSON predominates,
but you'll find XML and YAML files, too.
For the more advanced
extensibility options,
Python source code files are used.

In this guide, for brevity,
we sometimes refer collectively to all these
disparate configuration files as *resources*.

Sublime Text will look for resources
inside the packages folder.
We'll talk at length about *packages* later,
but the short version is that,
to keep things tidy,
Sublime Text has a notion of a *package*,
that is, a folder (or zip archive)
that contains resources
that belong together.
(Maybe they help
compose emails faster,
write HTML efficiently,
enhance the coding experience for C, Ruby, Go, …).


## Textmate Compatibility

[TextMate][] is an editor for the Mac.

Since Sublime Text was heavily inspired by TextMate 1,
it supports most of the extensions provided in TextMate bundles,
notably excluding `.tmCommands` and `.tmSnippets` files
and any other configuration in `.plist` files.
While most of the older formats are recognized by Sublime Text,
e.g. `.tmLanguage` and `.tmTheme`,
new formats using `.sublime-*` extensions have been added
that provide a superset of the old functionality
or are simply replacements for TextMate's formats.

[TextMate]: https://macromates.com/


## vi/Vim Emulation

vi is an ancient modal editor
that lets the user perform all operations
from the keyboard.
Vim, a modern version of vi,
is still in widespread use.

Sublime Text provides vi emulation
through the [Vintage][] package.
The Vintage package is *ignored* by default
and needs to be enabled by the user.
Learn more about [Vintage][]
in the official documentation.

Several third-party packages have been developed
to implement to supplement or replace
the built-in vi emulation.
We will cover installation and usage of third-party packages later.

[Vintage]: https://www.sublimetext.com/docs/vintage.html


## emacs Emulation

emacs is another popular
editor for programmers.

Sublime Text does not offer
any built-in emacs emulation,
but you can try third-party packages
created by other Sublime Text users.
As with third-party packages for vi emulation,
we will cover installation and usage of these later.

# /Part 16. docs.sublimetext.io/docs/guide/customization/README.md

---
title: Overview
---

Sublime Text can be fully customized. In the following topics, we outline the
most common options. In particular, **we don't cover** themes,
an immensely configurable area of Sublime Text.

- [Settings](./settings.md)
- [Key Bindings](./key_bindings.md)
- [Menus](./menus.md)
- [Color Schemes](./color_schemes.md)

# /Part 17. docs.sublimetext.io/docs/guide/customization/color_schemes.md

---
title: Color Schemes
---

Sublime Text uses color schemes
to highlight source code
and to define the colors
of some items in the editing area:
background, foreground, gutter, caret, selection...

Color schemes are fully customizable.

Let's look at a Python file
as Sublime Text highlights it
using the default color scheme *Monokai*:

<!-- ! Images must be relative path -->
![](./images/color_schemes_main.png)

<!-- TODO this is incredibly outdated -->

# Selecting a Color Scheme

You can change the current color scheme
by means of the **Preferences → Color Scheme** menu.

A common way of selecting a color scheme
is by associating it to a type of file
using file-type-specific settings.
Select **Preferences → Settings - Syntax Specific**
to open the corresponding settings file
and set the `color_scheme` setting.

For more information about settings, see [settings](./settings).

::: seealso
[Official Documentation for Color Schemes](https://www.sublimetext.com/docs/color_schemes.html)
: Complete reference on color scheme settings.
:::

# /Part 18. docs.sublimetext.io/docs/guide/customization/key_bindings.md

---
title: Key Bindings
---

::: seealso
[Reference for key bindings](/reference/key_bindings)
: Complete documentation on key bindings.
:::

Key bindings let you
map sequences of key presses to commands.


## File Format

<!-- 
TODO: Perhaps we can turn this into bullet points. Faster to read and less 
- words. 
- Like this: 
   - Format: Json 
   - File Name: Default(platorm).sublime-keymap 
-->

Key bindings are defined in JSON
and stored in `.sublime-keymap` files.

In the same package, separate keymap files
for Linux, OSX and Windows
may exist for better OS integration.


### Example

```json
[
   { "keys": ["ctrl+shift+n"], "command": "new_window" },
   { "keys": ["ctrl+o"], "command": "prompt_open_file" }
]
```


## Defining and Overriding Key Bindings

Sublime Text ships with default key bindings
(for example, `Packages/Default/Default (Windows).sublime-keymap)`.
In order to override default key bindings
or add new ones,
use a separate keymap file
with higher precedence:
for example, `Packages/User/Default (Windows).sublime-keymap`.


## Advanced Key Bindings

Simple key bindings consist
of a sequence of one or more keys mapped to a command.
However, there are more complex syntaxes
for passing arguments to commands and
restricting key bindings to specific contexts.


### Passing Arguments

Use the `args` key
to specify arguments:

```json
{ "keys": ["shift+enter"], "command": "insert", "args": {"characters": "\n"} }
```

Here, `\n` is passed to the `insert` command
whenever <Key k="shift+enter" /> is pressed.


### Contexts

Contexts determine
whether a given key binding is enabled
based on the caret's position
or some other state.

```json
{ "keys": ["escape"], "command": "clear_fields", "context":
   [
      { "key": "has_next_field", "operator": "equal", "operand": true }
   ]
}
```

This key binding translates to
*clear snippet fields and resume normal editing
if there is a next snippet field available*.
Thus, pressing <Key k="escape" /> will only
trigger this key binding
if you are cycling through snippet fields.

The same key binding
may be mapped to multiple contexts,
so a single sequence of key presses
may produce different results
at different times.


### Key Chords

You can create key bindings
composed of multiple keys.

```json
{ "keys": ["ctrl+k", "ctrl+v"], "command": "paste_from_history" }
```

Here, to trigger the command `paste_from_history`,
you have to press <Key k="ctrl+k" /> first,
then release <Key k="k" />,
and finally press <Key k="v" />.

Note: This example is a default key binding,
so you can try it out for yourself.

# /Part 19. docs.sublimetext.io/docs/guide/customization/menus.md

---
title: Menus
---

::: seealso
[Reference for menus](/reference/menus)
:::

Sublime Text provides several menus
that can be modified,
for example, by adding menu items.


## File Format

| Format        | Description                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Format**    | JSON (with comments)                                                                                                                      |
| **Extension** | `.sublime-menu`                                                                                                                           |
| **Name**      | One out of the list of available menus. See [menu-types](#available-menus) for the complete name list and what menu each name represents. |
| **Location**  | Any under `Packages`                                                                                                                      |
| **Content**   | A list of `menu-items`                                                                                                                    |

### Example

The following is an excerpt 
from the default `Main.sublime-menu` file.

```json
[
    {
        "caption": "Edit",
        "mnemonic": "E",
        "id": "edit",
        "children":
        [
            { "command": "undo", "mnemonic": "U" },
            { "command": "redo_or_repeat", "mnemonic": "R" },
            {
                "caption": "Undo Selection",
                "children":
                [
                    { "command": "soft_undo" },
                    { "command": "soft_redo" }
                ]
            },
            { "caption": "-", "id": "clipboard" },
            { "command": "copy", "mnemonic": "C" },
            { "command": "cut", "mnemonic": "t" },
            { "command": "paste", "mnemonic": "P" },
            { "command": "paste_and_indent", "mnemonic": "I" },
            { "command": "paste_from_history", "caption": "Paste from History" }
        ]
    }
]
```

## Images

![The default context menu in the editing area.](./images/context_menu_default.png)

![A modified context menu in the editing area.](./images/context_menu_modified.png)

### Available Menus

The file name
of a `.sublime-menu` file
specifies the menu to be modified
in the application.

The following menus are available:

| File/Menu Name           | Description                                                                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Main**                 | Main menu                                                                                                                                    |
| **Context**              | Context menu in the editing area                                                                                                             |
| **Find in Files**        | Appears when clicking the “…” button in the [Find in Files][] panel.                                                                     |
| **Side Bar**             | Context menu for each node in the sidebar                                                                                                    |
| **Side Bar Mount Point** | Additional context menu items for the top-level nodes in the sidebar                                                                         |
| **Tab Context**          | Context menu of the tab bar                                                                                                                  |
| **Widget Context**       | Context menu of input fields in all kinds of widgets, including Command Palette, Goto Anything, the Find panels and panels opened by plugins |

[Find in Files]: /guide/usage/search-and-replace.md#multiple-files

Additionally,
the following four menus open
when you click their respective section
in the status bar:

- **Encoding**
- **Line Endings**
- **Indentation**
- **Syntax**

![Demonstration of a status bar menu.](./images/statusbar_menu.gif)

### Menu Items

When selected,
a menu item can either
invoke a command (with arguments),
or open a submenu.

The available properties are:

- a command name,
- arguments for the command,
- an ID,
- a caption,
- a mnemonic and
- a submenu.

In order to function properly,
a menu item must provide at least:

- a command name,
- a caption and a submenu,
- just a caption, or
- an ID (see [below](#item-ids)).

When parsing a menu item,
the following rules apply:

1. A menu item with a submenu
   cannot invoke a command.
   If the [separator caption](#separators) is used,
   it will be rendered as a literal hyphen.

1. If no caption is provided,
   a caption is inferred
   from the command's ``description`` method.
   If neither caption nor command are provided,
   the caption will be an empty string.

1. The character used for the mnemonic
   must be contained in the item's caption.
   Mnemonics are case-sensitive.

1. Menu that reference missing commands
   are disabled.

1. Menu items can be hidden or disabled
   by their referenced command.


## Separators

Separators are menu items
with the caption `-`
and no submenu.
They are commonly used
to group menu items with a similar purpose
or that are otherwise related.
Separators cannot invoke commands.
The presence of a submenu
causes the menu separator
to be rendered as a regular item
with a single hyphen as its caption.

Multiple consecutive separators are reduced to one,
and separators at the beginning or the end of a menu
are not displayed.


## Menu Merging

`.sublime-menu` files are loaded
in the same order as packages.
Menu files with the same name are concatenated,
unless IDs are specified
(see [below](#item-ids)).

Menu files in the same package
are loaded in lexicographical order
starting at the root folder,
and then traversing sub-folders in the same manner.

As a special case,
menu items from the *User* package
declared in the standard non-ID section of a menu
are always inserted after any standard items
from other packages.


### Item IDs

When a menu item specifies an ID,
a separate section within the menu is searched for
and, if it does not exist,
created at the end of the menu.
This ID lookup is forward-going only.

The ID determines the section's name,
and the menu item with the matching ID
will be the first item in this section.
All following items in the file
will then be appended to the ID's section,
until another item with an ID is found.

If two menu items
from different `.sublime-menu` files
reference the same item via ID,
Sublime Text will override the item's previous parameters
with the new parameters,
if there are any.
Child elements extend the submenu.
All following items are then appended to the ID's section,
until another item with an ID is found.

It is common practice
to assign IDs to separators
and items having a submenu,
so that other packages or the user themselves
can easily customize the menu.
This allows appending items to sections introduced by separators
and appending items to submenus.

::: tip Note
Due to the strict forward lookup,
it is possible to have
*multiple different items with the same ID*
in one menu.
Because of the potential confusion this may cause,
it is discouraged.

Example:
The following three IDs
are defined in a menu, in this order:
`test, test2, test`.

The item with the second "test" ID
can then be targeted
using the following ID combinations:
`test, test2, test`; `test, test` or `test2, test`.
:::


## Submenus

Every menu item can have a submenu.
Hovering the mouse pointer
over a menu item with a submenu
will reveal the items grouped under it.
Submenus are independent menus
with their own ID hierarchy.

In order to extend a submenu
from a different menu file,
an ID must be specified in both places
to target the correct item.


## The Main Menu

Unlike all other menus,
the Main Menu's root menu
represents the menu items in the menu bar
(File, Help, etc.).


## Interface for Commands

A menu item can be dynamically

- hidden,
- disabled,
- checked, or
- assigned a different caption.

For this,
commands must implement the required methods in their class.
Each implemented method will be called
with the arguments specified
in the corresponding menu item.
If that call fails,
the method will be immediately called again
without arguments.

- `is_visible`
- `is_enabled`
- `is_checked`
- `description`

Some of these methods also have an influence on the Command Palette.

::: seealso 
[Official API Documentation on the Command interface](https://www.sublimetext.com/docs/api_reference.html#sublime_plugin.ApplicationCommand)
:::

## Context Menus in the Side Bar

The **Side Bar** and **Side Bar Mount Point** menus
are different to the other menus
in that they provide **contextual information**
regarding the selected item(s).
The selected directories and files
are passed as a list to the specified command
in a `files` argument.

# /Part 20. docs.sublimetext.io/docs/guide/customization/settings.md

---
title: Settings
---

Sublime Text stores configuration data in `.sublime-settings` files.
Flexibility comes at the price of a slightly complex system for applying
settings. However, here's a rule of thumb:

Always place your personal settings files under `Packages/User` to
guarantee they will take precedence over any other conflicting settings
files.

With that out of the way, let's unveil, to please masochistic readers,
the mysteries of how settings work.


## Format

Settings files use JSON and have the `.sublime-settings` extension.


## Types of Settings

The name of each `.sublime-settings` file determines its purpose. Names
can be descriptive (like `Preferences (Windows).sublime-settings` or
`Minimap.sublime-settings`), or they can be related to what the settings
file is controlling. For example, file type settings need to carry the
name of the `.tmLanguage` syntax definition for the file type. Thus, for
the `.py` file type, whose syntax definition is contained in
`Python.tmLanguage`, the corresponding settings files would be called
`Python.sublime-settings`.

<!-- TODO does this also work for custom .sublime-settings files? -->

Also, some settings files only apply to specific platforms. This can be
inferred from the file names, e.g. `Preferences
({platform}).sublime-settings`. Valid names for *platform* are
`Windows`, `Linux`, `OSX`.

This is **important**: Platform-specific settings files in the
`Packages/User` folder are ignored. This way, you can be sure a single
settings file overrides all the others.

Settings changes are usually updated in real time, but you may have to
restart Sublime Text in order to load *new* settings files.


## How to Access and Edit Common Settings Files

Unless you need very fine-grained control over settings, you can access
the main configuration files through the **Preferences | Settings -
User** and **Preferences | Settings - More** menu items. Editing
**Preferences | Settings - Default** is discouraged, because changes
will be reverted with every update to the software. However, you can use
that file for reference: it contains comments explaining the purpose of
all available global and file type settings.


## Order of Precedence of `.sublime-settings` Files

The same settings file (such as `Python.sublime-settings`) can appear in
multiple places. All settings defined in identically named files will be
merged together and overwritten according to predefined rules. See
`merging-and-order-of-precedence` for more information.

Let us remember again that any given settings file in `Packages/User`
ultimately overrides every other settings file of the same name.

In addition to settings files, Sublime Text maintains *session* data, which is
configuration for the particular set of files being currently edited. Session
data is updated as you work on files, so if you adjust settings for a particular
file in any way (mainly through API calls), they will be recorded in the session
and will take precedence over any applicable `.sublime-settings` files.

To check the value of a setting for a particular file being edited, use
`view.settings().get("setting_name")` from the console.

Finally, it's also worth noting that some settings may be automatically
adjusted for you. Keep this in mind if you're puzzled about some
setting's value. For instance, this is the case for certain
whitespace-related settings and the `syntax` setting.

Below, you can see the order in which Sublime Text would process a
hypothetical hierarchy of settings for Python files on Windows:

- *Packages/Default/Preferences.sublime-settings*
- *Packages/Default/Preferences (Windows).sublime-settings*
- *Packages/User/Preferences.sublime-settings*
- *Packages/Python/Python.sublime-settings*
- *Packages/User/Python.sublime-settings*
- Session data for the current file
- Auto adjusted settings

This list is not exhaustive.
See [The Settings Hierarchy](#the-settings-hierarchy) for a full example
of the order of precedence.


## Global Editor Settings and Global File Settings

These settings are stored in `Preferences.sublime-settings` and
`Preferences ({platform}).sublime-settings` files. The defaults can be
found in `Packages/Default`.

Valid names for *platform* are `Windows`, `Linux`, `OSX`.


## File Type Settings

If you want to target a specific file type, name the `.sublime-settings`
file after the file type's syntax definition. For example, if our syntax
definition +was called `Python.tmLanguage`, we'd need to call our
settings file `Python.sublime-settings`.

<!-- TODO does the tmLanguage's "name" key have any effect on this? -->

Settings files for specific file types usually live in packages, like
+`Packages/Python`, but there can be multiple settings files in separate
locations for the same file type.

Similarly to global settings, one can establish platform-specific
settings for file types. For example, `Python (Linux).sublime-settings`
would only be consulted under Linux.

Also, let us emphasize that under `Packages/User` only
`Python.sublime-settings` would be read, but not any `Python
({platform}).sublime-settings` variant.

Regardless of its location, any file-type-specific settings file has
precedence over a global settings file affecting file types.


## The Settings Hierarchy

Below, you can see the **exhaustive** settings sources
that Sublime Text would process
for *Python* files on *Windows*.
As always, later specifications override earlier ones.

- Global settings
  - `Packages/Default/Preferences.sublime-settings`
  - `Packages/Default/Preferences (Windows).sublime-settings`
  - `Packages/AnyOtherPackage/Preferences.sublime-settings`
  - `Packages/AnyOtherPackage/Preferences (Windows).sublime-settings`
  - `Packages/User/Preferences.sublime-settings`
- Settings from the current project
- Syntax-specific settings
  - `Packages/Python/Python.sublime-settings`
  - `Packages/Python/Python (Windows).sublime-settings`
  - `Packages/User/Python.sublime-settings`
- Session data for the current file (View-specific settings)
- Auto-adjusted settings

Note that settings files may also appear in package subdirectories,
which have been excluded for brevity.


## Where to Store User Settings (Once Again)

Whenever you want to save settings, especially if they should be
preserved between software updates, place the corresponding
`.sublime-settings` file in `Packages/User`.

# /Part 21. docs.sublimetext.io/docs/guide/extensibility/README.md

---
title: Extending Sublime Text
---

In this section we discuss various areas and ways
in which Sublime Text can be extended
with additional functionality.

# /Part 22. docs.sublimetext.io/docs/guide/extensibility/commands.md

---
title: Commands
---

Commands are ubiquitous in Sublime Text: key bindings, menu items and
macros all work through the command system. They are found in other
places too.

Some commands are implemented in the editor's core, but many of them are
provided as Python plugins. Every command can be called from a Python
plugin.

## Command Dispatching

Normally, commands are bound to the application object, a window object
or a view object. Window objects, however, will dispatch commands based
on input focus, so you can issue a view command from a window object and
the correct view instance will be found for you.

## Anatomy of a Command

Commands have a name separated by underscores (snake_case) like
`hot_exit`, and can take a dictionary of arguments whose keys must be
strings and whose values must be JSON types. Here are a few examples of
commands run from the Python console:

```py
view.run_command("goto_line", {"line": 10})
view.run_command('insert_snippet', {"contents": "<$SELECTION>"})
view.window().run_command("prompt_select_project")
```

## From command line (CLI)

Commands may be passed to Sublime Text directly from the command line
of the operating system. Usage:

```bash
subl --command 'show_overlay {"overlay": "command_palette", "text": "Markdown"}'
# on Windows:
sublime-text.exe --command "show_overlay {\"overlay\": \"command_palette\", \"text\": \"hello\"}"
```

::: seealso
[Reference for commands](/reference/commands)
:::

# /Part 23. docs.sublimetext.io/docs/guide/extensibility/command_palette.md

---
title: Command Palette
---

::: seealso
[Reference for Command Palette](/reference/command_palette)
: Complete documentation on the command palette options.
:::


## Overview

The *command palette* bound to <Key k="ctrl+shift+p" /> is an interactive list
whose purpose is to execute commands. The command palette is fed by
entries in `.sublime-commands` files. Usually, commands that don't
warrant creating a key binding of their own are good candidates for
inclusion in a `.sublime-commands` files.

By default, the command palette includes many useful commands, and
provides convenient access to individual settings as well as settings
files.


## File Format (Commands Files)

Commands files use JSON and have the `.sublime-commands` extension.

Here's an excerpt from `Packages/Default/Default.sublime-commands`:

```json
[
    { "caption": "Project: Save As", "command": "save_project_as" },
    { "caption": "Project: Close", "command": "close_project" },
    { "caption": "Project: Add Folder", "command": "prompt_add_folder" },

    { "caption": "Preferences: Default File Settings", "command": "open_file", "args": {"file": "${packages}/Default/Base File.sublime-settings"} },
    { "caption": "Preferences: User File Settings", "command": "open_file", "args": {"file": "${packages}/User/Base File.sublime-settings"} },
    { "caption": "Preferences: Default Global Settings", "command": "open_file", "args": {"file": "${packages}/Default/Global.sublime-settings"} },
    { "caption": "Preferences: User Global Settings", "command": "open_file", "args": {"file": "${packages}/User/Global.sublime-settings"} },
    { "caption": "Preferences: Browse Packages", "command": "open_dir", "args": {"dir": "$packages"} }
]
```

`caption`
: Text for display in the command palette.

`command`
: Command to be executed.

`args`
: Arguments to pass to `command`.


## How to Use the Command Palette

1. Press <Key k="ctrl+shift+p" />
1. Select command

The command palette filters entries by context. This means that whenever
you open it, you won't always see all the commands defined in every
`.sublime-commands` file.

# /Part 24. docs.sublimetext.io/docs/guide/extensibility/completions.md

---
title: Completions
---

In the spirit of IDEs,
Sublime Text suggests completions
that aggregate code or content while writing
by catching everything that you have written,
like variable names.

There are however several ways
to extend the list of completions
(for example, depending on the current syntax).

This topic deals with
how completions are used and
where they come from.


## How to Use Completions

There are two methods for using completions.
Even though, when screening them,
the priority given to completions always stays the same,
the two methods produce different results.

Completions can be inserted in two ways:

- through the completions list (<Key k="ctrl+space" />), or
- by pressing <Key k="tab" />.


### The Completions List

To use the completions list:

1. Press <Key k="ctrl+space" /> or just type something.
1. Optionally, press <Key k="ctrl+space" /> again
   to select the next entry
   or use *up* and *down* arrow keys.
1. Press <Key k="enter" /> or <Key k="tab" /> to validate selection
   (depending on the `auto_complete_commit_on_tab` setting).
1. Optionally, press <Key k="tab" /> repeatedly
   to insert the next available completion.

::: tip Note
If the completions list was opened explicitly,
the current selection
in the completions list
can also be validated
with any punctuation sign
that isn't itself bound to a snippet (e.g. `.`).
:::

When the list of completion candidates
can be narrowed down to one unambiguous choice
given the current prefix,
this one completion will be validated automatically
the moment you trigger the completion list.


#### Hints

Additionally,
you may see a trigger hint
on the right side of a completion's trigger
in the completions list.
This can be used as a preview
of the completion's content.

![image](./images/completions_hint.png)

The above is in fact a snippet
and expands to
`$arrayName = array('' => , );`.


### Triggers and Contents

Completions not sourced from the text in the current file
may provide a trigger
that is different
to the content they will insert if selected.
This is commonly used for function completions
where the content also includes
the function's signature.

For example,
completing `array_map` from the PHP completions
will result in `array_map({callback}, {arr1})`:

![image](./images/completions_contents.gif)

You may notice in the animation
that the cursor automatically selected `callback`.
This is because completions support
the same features as snippets
with fields and placeholders.
For more details,
refer to [Snippet Features](./snippets.md#snippet-features).


### Completions with multiple cursors

Sublime Text can also handle completions with multiple cursors
but will only open the completion list
when all cursors share the same text
between the current cursor positions
and the last word separator character
(e.g. `.`  or a line break).

Working example (`|` represents one cursor):

    l|
    some text with l|
    l| and.l|

Not working example:

    l|
    some text with la|
    l| andl|

Selections are essentially ignored,
only the position of the cursor matters.
Thus, `e|[-some selection] example`,
with `|` as the cursor and `[...]` as the current selection,
completes to `example|[-some selection] example`.


### <Key k="tab" />-Completed Completions

If you want to be able to tab-complete completions,
the setting `tab_completion` must be set to `true` (default).
Snippet tab-completion is unaffected by this setting:
They will always be completed
according to their tab trigger.

With `tab_completion` enabled,
completion of items is always automatic.
This means, unlike the case of the completions list,
that Sublime Text will always make the decision for you.
The rules for selecting the best completion
are the same as described above,
but in case of ambiguity,
Sublime Text will insert the item it deems most suitable.
You can press the <Key k="tab" /> key multiple times
to walk through other available options.


#### Inserting a Literal tab Character

When `tab_completion` is enabled,
you can press <Key k="shift+tab" />
to insert a literal tab character.


## Sources for Completions and their Priorities

These are the sources for completions
the user can control,
in the order they are prioritized:

1. [Snippets](./snippets.md)
2. API-injected completions via `on_query_completions`
3. [Completions files](/reference/completions.md)

Additionally,
the following completions
are folded into the final list:

4.  Words in the buffer


Snippets will always win
when the current prefix
matches their tab trigger *exactly*.
For the rest of the completion sources,
a fuzzy match is performed.
Furthermore,
snippets always lose in a fuzzy match.

When a list of completions is shown,
snippets will still be listed alongside the other items,
even if the prefix only partially matches
the snippets' tab triggers.

::: tip Note
Completions sourced from words in the buffer
can be suppressed explicitly
from an `on_query_completions` event hook.
:::


## Auto Completion Triggers and Selector

Sublime Text provides two settings
for users and package authors
to tweak their auto completion behavior.
Both settings work independently of each other
and either of them can
trigger the auto-completion popup.

- `auto_complete_selector` expects a scope selector
  that when matched causes the auto-completion popup
  to open for any non-punctuation character,
  i.e. for identifiers.
  The default configuration disables this
  for syntaxes with a focus on plain text, comments and strings.

  Before 4070,
  the selector was applied to the position *after* the just-typed character.

- `auto_complete_triggers` expects a list of mappings
  that may specify `characters`
  that should trigger the auto-completion popup
  and/or a scope `selector`.
  If both are provided,
  both are required to match.

  Additionally, a `rhs_empty` boolean may be provided
  that states whether the right-hand side of the caret
  must be empty or a whitespace character.
  It defaults to `false`.

Package authors may be interested
in configuring triggers and/or the selector
in a syntax-specific settings file.

# /Part 25. docs.sublimetext.io/docs/guide/extensibility/macros.md

---
title: Macros
---

Macros are a basic automation facility comprising sequences of commands. Use
them whenever you need to repeat the exact same steps to perform an operation.

Macro files are JSON files with the extension `.sublime-macro`. Sublime Text
ships with a few macros providing core functionality, such as line and word
deletion. You can find these under **Tools | Macros** or in
`Packages/Default`.

## How to Record Macros

To start recording a macro, press <Key k="ctrl+alt+q" /> and subsequently
execute the desired steps one by one. When you're done,
press <Key k="ctrl+alt+q" /> again to stop the macro recorder. Your new macro
won't be saved to a file, but kept in the macro buffer instead. Now you will be
able to run the recorded macro by pressing <Key k="ctrl+shift+alt+q" />,
or save it to a file by selecting **Tools | Save macro...**

Note that the macro buffer will remember only the latest recorded macro. Also,
macros only record commands sent to the buffer: window-level
commands, such creating a new file, will be ignored.

## How to Edit Macros

As an alternative to recording a macro, you can edit it by hand. Just save a new file
with the `.sublime-macro` extension under `Packages/User` and add
commands to it. Macro files have this format:

```json
[
   { "command": "move_to", "args": {"to": "hardeol"} },
   { "command": "insert", "args": {"characters": "\n"} },
]
```
See the [Commands](/reference/commands.md) section for more information on commands.

<!-- TODO do we need to escape every kind of quotations marks? -->

If you're editing a macro by hand, you need to escape quotation marks,
blank spaces and backslashes by preceding them with `\`.

### Where to Store Macros

Macro files can be stored in any package folder, and then will show up
under **Tools | Macros | \<PackageName\>**.

## Key Binding for Macros

Macro files can be bound to key combinations by passing the macro file path to the `run_macro_file` command like so:

```json
{
    "keys": ["super+alt+l"],
    "command": "run_macro_file",
    "args": {
        "file": "res://Packages/User/Example.sublime-macro"
    }
}
```

# /Part 26. docs.sublimetext.io/docs/guide/extensibility/packages.md

---
title: Packages
---

A package is a container for resources.

## Package Locations (and Abbreviations)

There are three locations
for storing packages
for different purposes.

- Packages can be **folders**
  under `Data/Packages` (short: `Packages`)
- or **zip archives**
  with the ``.sublime-package`` extension
  located under `Data/Installed Packages`
  (short: `Installed Packages`)
  or any of its subdirectories.
- Additionally,
  Sublime Text provides a set of default packages
  as **zip archives**
  in `Application/Packages` (short: `Shipped Packages`),
  where *Application* refers to the folder
  where the Sublime Text executable resides.

  This folder is not intended to be modified by the user.

::: tip Note
For simplicity, we will occasionally
refer to all these directories simply as `Packages`,
and to a package in any folder
(`.sublime-package` or not)
as `Packages/PackageName`.
Consequently, a file inside a package
may also be referred to as `PackageName/a_file.extension`.
:::


### `.sublime-package` Packages

Packages distributed as `.sublime-package` zip archives should be
considered read-only containers of resources and never be modified
manually. Since they are usually updated as a whole, any manual changes
made to them will be lost in the process.

If you do want to modify files in these archives, see
`overriding-packages`.

### Interactions Between Packages with the Same Name

If two packages with the same name exist
in both `Installed Packages` and `Shipped Packages`,
the one in `Installed Packages` will be used
and the one in `Shipped Packages` will be ignored.

Any file in `Packages/PackageName` takes precedence
over an identically named file
in `Installed Packages/PackageName.sublime-package`
or `Shipped Packages/PackageName.sublime-package`.

See also `overriding-packages`.

## Package Contents

Typical resources found in packages include:

- build systems (`.sublime-build`)
- color schemes (`.sublime-color-scheme`, `.tmTheme`)
- key maps (`.sublime-keymap`)
- macros (`.sublime-macro`)
- menus (`.sublime-menu`)
- metadata (`.tmPreferences`)
- mouse maps (`.sublime-mousemap`)
- plugins (`.py`)
- settings (`.sublime-settings`)
- snippets (`.sublime-snippet`)
- syntax definitions (`.sublime-syntax`, `.tmLanguage`)
- themes (`.sublime-theme`)

Some packages may hold support files
for other packages or for core features.
For example, the spell checker
uses `Installed Packages/Language - English.sublime-package`
as a data store for English dictionaries.

## Package Types

In this guide, we categorize packages
for clarity when discussing this topic,
but Sublime Text doesn't use this terminology
and you don't need to learn it.


**shipped packages** or **default packages**
: A set of packages
  that Sublime Text ships with.
  Some of these packages are *core packages*,
  while others enhance Sublime Text
  to support common programming languages out of the box.

  Examples: Default, Python, Java, C++, Markdown.

  Located in `Shipped Packages`.

**core packages**
: Sublime Text requires these packages
  in order to function properly.

  Complete list: Default, Theme - Default, Color Scheme - Default, Text, Language - English.

  They are part of the shipped packages and
  located in `Shipped Packages`.

**user packages**
: Installed or created by the user
  to extend Sublime Text's functionality.
  They are not part of Sublime Text,
  and are always contributed by users
  or third parties.

  Example: User.

  Located in `Packages`
  and `Installed Packages`.

**installed packages**
: A subtype of *user packages*.

  Installed packages are `.sublime-package` archives
  and usually maintained by a package manager.

  Located in `Installed Packages`.

  ::: tip Note
  Due to the unfortunate name of this folder,
  talking about *installing*
  packages in Sublime Text
  is confusing.

  Sometimes, in this guide, by *installing* we mean
  "adding a user/third party package to Sublime Text"
  (in any form),
  and sometimes we use the term
  in its stricter sense of
  "copying a `.sublime-package` archive
  to `Installed Packages`".
  :::

**override packages**
: A special type of *user packages*.

  Override packages serve the purpose of customizing packages
  that are distributed as ``.sublime-package`` files.
  They are effectively injected into the original package
  and do not stand-alone.

  See [Customizing or Overriding Packages][overriding] for details.

  Located in `Packages`.

Note that by *third party*
we also refer to users of other
editors, notably Textmate,
as Sublime Text and Textmate
share some types of resource files
that can be reused without modification.


## Managing Packages

### Installing Packages

::: tip Note
Regular users rarely need to know
how to install packages by hand,
as automatic package managers are available.

The de facto package manager for Sublime Text
is [Package Control](https://packagecontrol.io).
:::

Packages can be installed in two main ways:

- by copying Sublime Text resources
  to a folder under `Packages`, or
- by copying a `.sublime-package` file
  to `Installed Packages`.


### Disabling Packages

To temporarily disable packages,
you can add them to the `ignored_packages` list
in your `Packages/User/Preferences.sublime-settings` file.
Packages will be loaded or unloaded as needed
when the settings file is saved.


### Enabling Packages

To re-enable a package,
remove the package's name from the `ignored_packages` list
in your `Packages/User/Preferences.sublime-settings` file.


### Removing Packages

If you installed a package with a package manager,
remove it using the method provided by the package manager.

If you installed a package manually,
follow this procedure to safely remove a package:

1. [Disable](#disabling-packages) the package
   while Sublime Text is running.
1. Close Sublime Text.
1. Remove the package's resources from the disk.
1. Remove the package's name from the `ignored_packages` list.

In addition to the resources
you have placed initially
in a `Packages` folder or in `Installed Packages`,
plugins may create configuration files
(such as `.sublime-settings` files)
or other files to store package-related data.
Frequently, you will find them in the *User* package.
Therefore, if you want to remove all traces of a package,
you will need to find and remove all the additional files
that it may have installed.

::: warning
Shipped packages are reinstated
during every Sublime Text update,
so you can't delete them forever.
If you want to stop using a shipped package,
[disable](#disabling-packages) it.
:::


## Customizing or Overriding Packages
[overriding]: #customizing-or-overriding-packages

Since packages in `.sublime-package` zip archives
[are read-only](#sublime-package-packages),
you cannot modify them directly.
However, Sublime Text allows you
to create an :override_package:
that will effectively inject files into the original archive
without modifying the archive itself.

To create an override package,
create a new folder under `Packages`
and name it after the `.sublime-package` file
you want to override, excluding the extension.
Any file you create in this package
will take precedence over any identically named file
in the original package.

Python plugins in override packages
are able to use relative imports
for accessing other modules in the corresponding `.sublime-package` file
as if they were part of it.

::: warning
  Files in override packages override entire files.
  If the overridden file in the corresponding `.sublime-package` is updated,
  you will not be notified.

  The [OverrideAudit][] package provides monitoring of override files
  and will notify you
  when the file it overrides has been updated.

  [OverrideAudit]: https://github.com/OdatNurd/OverrideAudit
:::


## Merging and Order of Precedence

Package precedence is important for merging certain resources,
for example, `.sublime-keymap` and `.sublime-settings` files,
and for loading plugins (`.py` files).

If an :override_package: exists
for a `.sublime-package` package,
it will be loaded at the same time as the `.sublime-package` archive.

Sublime Text loads packages in this order:

1. `Packages/Default`;
1. :shipped_package:shipped_packages: in lexicographical order;
1. :installed_package:installed_packages: in lexicographical order;
1. all remaining :user_package:user_packages:,
   except for `Packages/User`,
   that did not override anything,
   in lexicographical order;
1. `Packages/User`


## Reverting Sublime Text to Its Default Configuration

Reverting Sublime Text to a fresh state
solves many problems
that appear to be bugs in Sublime Text
but are in fact caused by misbehaving
packages and plugins.

<!-- TODO --safe-mode -->
To revert Sublime Text to its default configuration
and remove all your settings and configurations,
delete the [Data directory](../getting-started/basic-concepts.md#the-data-directory)
and restart the editor.
Keep in mind
that the `Installed Packages` folder will be deleted too,
so you'll lose all your installed packages.

Always make sure to back up your data
before taking an extreme measure like this one!

# /Part 27. docs.sublimetext.io/docs/guide/extensibility/plugins/input_handlers.md

---
title: Input Handlers
---

![Arithmetic command using an input handler](./images/arithmetic.png)

Input handlers are a mechanism
to query a user for one or multiple input parameters
via the Command Palette.
They replace the older method of input and quick panels
(`Window.show_input_panel` and `Window.show_quick_panel`)
for a unified user experience in a single component.

Input Handlers have been added in build 3154
and were first available on the stable channel in version 3.1.

## Examples

The following commands provided by Sublime Text's `Default` package
use input handlers
(command names are for the Command Palette):

| Command name | File | Description |
|:-|:-|:-|
| *Arithmetic* | `Default/arithmetic.py` | Evaluates a given Python expression (usually numeric). |
| *View Package File* | `Default/ui.py` | Provides a list of all resource files inside the Packages folder to open. |
| *Rename File* | `Default/rename.py` | Queries the user for a new file name for the active view. |

You can use the above *View Package File* command
to view the source code of these files.


## Input Handler Kinds

There are currently two types of input handlers:

1. text input handlers accepting arbitrary text input,
1. list input handlers providing a list of options for the user to choose from.

Text input handlers always forward the entered text to the command,
while list input handlers can handle any JSON-serializable value,
accompanied by a caption for their respective list entry.


## Implementing an Input Handler

Because input handlers are using a rather generic interface,
adding one to your command
may require careful thinking
and may not be the most intuitive process.

We will implement an example input handler
and explain more gears you can tweak
for advanced configuration.

::: warning Important
To use an input handler for a command,
**the command must have an entry in the [Command Palette][]**.
This is easy to forget,
so make sure to remember!

[Command Palette]: ../command_palette.md
:::

Let's start with a very simple command
that inserts the given text into the view.
The following two files
can be placed in any package folder,
including "User".

`simple_plugin.py`:
``` py
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)
```

`Simple.sublime-commands`:
``` json
[
    { "caption": "Simple Command", "command": "simple" },
]
```


### The `*Command.input` Method

When implementing a command,
it receives keyed arguments to its `run` method.
When a parameter in the signature provides no default value,
it can only be called if arguments are provided for all such parameters.
Calling a command with too few arguments will fail
and cause an exception to be printed to the console.

```
>>> window.run_command("simple")
Traceback (most recent call last):
  File "/opt/sublime_text/Lib/python38/sublime_plugin.py", line 1270, in run_
    return self.run()
TypeError: run() missing 1 required positional argument: 'text'
```

In a situation like this,
a command may implement [the `input` method][api-TextCommand]
and return an input handler instance
that provides Sublime Text
with the necessary information
to display an input handler.

``` py {9-10}
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input(self, args):
        return MyTextInputHandler()
```

The `input` function takes an `args` parameter
that is a dict of all currently known arguments to the command.
Since we know that our only required argument (`text`)
is missing at this point,
we won't use the parameter.

We haven't defined `MyTextInputHandler` yet,
so let's do that.


### Subclassing `TextInputHandler`

To create a simple input handler for text,
we create a subclass of [`sublime_plugin.TextInputHandler`][api-TextInputHandler].
In our subclass,
we can override specific methods.
For the most basic functionality,
we need `name`.
Additionally, for convenience,
we define `placeholder`.

``` py
class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"
```

And that's it.
Here is what it looks like:

<video controls src="./images/simple_input_handler.mp4" />

::: tip
Of course, you can still call the command like before
from a key binding or via the console.
When all required arguments are provided,
the input handler will be skipped
and the command run immediately.
:::


### Rendering a Preview

The `preview` method is called
for every modification of the entered text
and allows to show a small preview
below the Command Palette.
The preview can either be pure text
or can use [minihtml][]
for a markup-enabled format.

[minihtml]: https://www.sublimetext.com/docs/minihtml.html

The following snippet extends our input handler from earlier
to show the amount of characters that will be inserted:

``` py
class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"

    def preview(self, text):
        return "Characters: {}".format(len(text))
```

There are additional methods that can be overriden.
These are described [in the documentation][api-TextInputHandler].


### Using Dynamic Data

You may have noticed that our `MyTextInputHandler` class
is entirely separate from our `SampleCommand`.
In the event that we want the input handler
to depend on some dynamic data,
such as the current view's selection,
we will have to provide such values
to the input handler's constructor.

The following snippet passes the text command's `View` instance
to the input handler's constructor.
The constructor itself stores the instance
in an instance attribute
and later accesses it from `preview`.

``` py {10,14-15,25}
import sublime_plugin


class SimpleCommand(sublime_plugin.TextCommand):
    def run(self, edit, text):
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input(self, args):
        return MyTextInputHandler(self.view)


class MyTextInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, view):
        self.view = view

    def name(self):
        return "text"

    def placeholder(self):
        return "Text to insert"

    def preview(self, text):
        return ("Selections: {}, Characters: {}"
                .format(len(self.view.sel()), len(text)))
```

<video controls src="./images/simple_input_handler_preview.mp4" />


## Providing a List Of Options With `ListInputHandler`

Instead of free form input,
you can provide the user
with a list of values
that they can choose from.
This is done by sublassing `sublime_plugin.ListInputHandler`
and providing an `list_items` method
that returns a list of values to choose from.
This list can either be a list of strings
or a list of tuples,
where the first element indicates the text to be shown
and the second element the value to insert as the command's argument.

Following is a small example command
that offers a list of [named HTML entities][]
using the built-in [`html.entities`][] module:

[named HTML entities]: https://html.spec.whatwg.org/multipage/syntax.html#character-references
[`html.entities`]: https://docs.python.org/3/library/html.entities.html


```py {16-17}
from html.entities import html5

import sublime_plugin


class InsertHtmlEntityCommand(sublime_plugin.TextCommand):
    def run(self, edit, entity):
        for region in self.view.sel():
            self.view.replace(edit, region, "&" + entity)

    def input(self, args):
        return EntityInputHandler()


class EntityInputHandler(sublime_plugin.ListInputHandler):
    def list_items(self):
        return sorted(html5.keys())

    def preview(self, value):
        return "Character: {}".format(html5.get(value))
```

::: tip
Notice how we don't implement `name` here,
because Sublime Text can automatically infer
the input handler's target argument name
from the class name,
using the same logic as for command names
but stripping "InputHandler" instead.
:::

::: warning Reminder
Remember that you need to make the above command
available to the Command Palette
by specifying it in a `.sublime-commands` file.

``` json
[
  { "caption": "Insert Html Entity", "command": "insert_html_entity" },
]
```
:::

Here is what it looks like in action:

<video controls src="./images/list_input_handler.mp4" />


## Implementing Multiple Input Handlers

When a command requires multiple arguments
that the user must provide,
things change a bit.
Notably, you know must add logic inside `input`
that returns the appropriate input handler
based on which arguments are still missing.
The order in which these are returned matters,
because input handlers that received input
remain visible in the Command Palette
to visualize the current input step
in a breadcrumbs style.
And finally, the input handlers' `description` methods will be used
to render text for these breadcrumbs.
(Since the default behavior is to show the inserted value,
this is used only rarely.)

Let's write a command that multiplies two operands.

``` py
import sublime_plugin


class MultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        for name in ['operand1', 'operand2']:
            if name not in args:
                return NumberInputHandler(name)


class NumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, name):
        self._name = name

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
```

::: tip
In this command, we only used a single input handler class for two parameters
by returning an instance variable in the `name` function.
:::

<video controls src="./images/multiply_input.mp4" />

The command works as it advertises.
It asks for two numbers when invoked from the command palette consecutively.
However, it does not show a breadcrumb for the first operand
after we confirmed it.
This is because the `input` command is re-run after the first argument,
since we need two arguments,
and information about the previous input handler is lost.

::: tip
Having problems running this command?
Did you add a `.sublime-commands` entry for it?
:::


### The `next_input` Method

To show the before-mentioned breadcrumb,
the first input handler needs to know
what input handler should be the next
and return it in a `next_input` method.

You could do so in a static way,
but let's try a dynamic approach.
Remember that you don't need to ask
for the second argument
if it was already provided.


``` py {10-14,19,27-29}
import sublime_plugin


class MultiplyCommand(sublime_plugin.TextCommand):
    def run(self, edit, operand1, operand2):
        result = float(operand1) * float(operand2)
        for region in self.view.sel():
            self.view.replace(edit, region, str(result))

    def input(self, args):
        names = [name for name in ['operand1', 'operand2']
                 if name not in args]
        if names:
            return MultiNumberInputHandler(names)


class MultiNumberInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, names):
        self._name, *self.next_names = names

    def name(self):
        return self._name

    def placeholder(self):
        return "Number"

    def next_input(self, args):
        if self.next_names:
            return MultiNumberInputHandler(self.next_names)

    def validate(self, text):
        try:
            float(text)
        except ValueError:
            return False
        else:
            return True
```

In this command,
we collect all the arguments we need from the first call
and change `NumberInputHandler` to `MultiNumberInputHandler`
that accepts a list of argument names to query.
The destructuring assignment in line 19
splits the list into a "first" and "rest",
so that the rest of the required arguments can be returned
in the `next_input` method.

Let's see how it looks when invoked:

<video controls src="./images/multiply_next_input.mp4" />

::: tip
Both `NumberInputHandler` and `MultiNumberInputHandler`
implement a `validate` method that returns a boolean
if the passed text can be parsed into a floating point number.
The effect is that for non-numeric text the input is rejected
and nothing happens when pressing <Key k="enter" />.
Try for yourself!
:::


## Code Archive

The final code examples presented on this page
[have been uploaded to a Gist][gist].
You can download a [zipball][] of it
and extract it into a local package of your choice
to experiment with them.

[gist]: https://gist.github.com/FichteFoll/f850a62323c461ef7c54eb2cf623b033
[zipball]: https://gist.github.com/FichteFoll/f850a62323c461ef7c54eb2cf623b033/archive/master.zip


## Invoking Commands With Input Handlers

When invoking a command with an input handler
and without all required arguments
from a plugin or key binding,
it is advised to use the `show_overlay` command.
Commands invoked that way
will have their `input` method called
before ST attempts to call `run`,
resulting in more predictable behavior.
Otherwise, Sublime Text will try to run the command as normally
(running its `run` method)
and only check the command's `input` method
if the call failed because of insufficient arguments.

**Examples**:

``` py
view.run_command(
    'show_overlay',
    {'overlay': 'command_palette', 'command': 'multiply', 'args': {'operand1': 12}},
)
```

``` json
{
    "command": "show_overlay",
    "args": {
        "overlay": "command_palette",
        "command": "multiply",
        "args": {"operand1": 12}
    },
}
```

## Caveats

- As mentioned countless times already,
  there must be an entry for the Command Palette
  to be able to use input handlers.

- A command's `input` method may be called multiple times
  until the user can access it.

- `is_visible` and `is_enabled` cannot decide their return value
  based on the given arguments
  when an input handler is involved.
  ([#3249](https://github.com/sublimehq/sublime_text/issues/3249))


[api-TextCommand]: https://www.sublimetext.com/docs/api_reference.html#sublime_plugin.TextCommand
[api-TextInputHandler]: https://www.sublimetext.com/docs/api_reference.html#sublime_plugin.TextInputHandler

# /Part 28. docs.sublimetext.io/docs/guide/extensibility/plugins/README.md

---
title: Plugins
---

::: seealso
[API Reference](/reference/python_api.md)
: More information on the Python API.

[Plugins Reference](/reference/plugins.md)
: More information about plugins.
:::

This section is intended for users with programming skills.

Sublime Text can be extended through Python plugins. Plugins build features by
reusing existing commands or creating new ones. Plugins are a logical entity,
rather than a physical one.


## Prerequisites

In order to write plugins, you must be able to program in [Python][].
At the time of this writing, Sublime Text uses Python 3.3.

[Python]: https://www.python.org

## Where to Store Plugins

Sublime Text will look for plugins only in these places:

* `Installed Packages` (only `.sublime-package` files)
* `Packages`
* `Packages/<pkg_name>/`

As a consequence, any plugin nested deeper in `Packages` won't be loaded.

Keeping plugins directly under `Packages` is discouraged. Sublime Text sorts
packages in a predefined way before loading them, so if you save plugin files
directly under `Packages` you might get confusing results.


## Your First Plugin

Let's write a "Hello, World!" plugin for Sublime Text:

1. Select **Tools | Developer | New Plugin...** in the menu.
1. Save to `Packages/User/hello_world.py`.

You've just written your first plugin! Let's put it to use:

1. Create a new buffer (<Key k="ctrl+n" />).
1. Open the Python console (<Key k="ctrl+`" />).
1. Type: `view.run_command("example")` and press enter.

You should see the text "Hello, World!" in the newly created buffer.


## Analyzing Your First Plugin

The plugin created in the previous section should look roughly like this:

```py
import sublime
import sublime_plugin


class ExampleCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.insert(edit, 0, "Hello, World!")
```


Both the `sublime` and `sublime_plugin` modules are provided by
Sublime Text; they are not part of the Python standard library.

As we mentioned earlier, plugins reuse or create *commands*. Commands are an
essential building block in Sublime Text. They are simply Python classes
that can be called in similar ways from different Sublime Text facilities,
like the plugin API, menu files, macros, etc.

Sublime Text Commands derive from the `*Command` classes defined in
`sublime_plugin` (more on this later).

The rest of the code in our example is concerned with particulars of
`TextCommand` or with the API. We'll discuss those topics in later sections.

Before moving on, though, we'll look at how we invoked the new command: first
we opened the Python console and then we issued a call to
`view.run_command()`. This is a rather inconvenient way of calling commands,
but it's often useful when you're in the development phase of a plugin. For
now, keep in mind that your commands can be accessed through key bindings
and by other means, just like other commands.

### Conventions for Command Names

You may have noticed that our command is named `ExampleCommand`, but we
passed the string `example` to the API call instead. This is necessary
because Sublime Text standardizes command names by stripping the `Command`
suffix, splitting subwords of `PhrasesLikeThis` with underscores, and lower-casing it, like so:
`phrases_like_this`.

New commands should follow the same naming pattern.


## Types of Commands

You can create the following types of commands:

- Window commands (`sublime_plugin.WindowCommand`)
- Text commands (`sublime_plugin.TextCommand`)

When writing plugins, consider your goal and choose the appropriate type of
commands.


### Shared Traits of Commands

All commands need to implement a `.run()` method in order to work. Additionally,
they can receive an arbitrarily long number of keyword parameters.

**Note:** Parameters to commands must be valid JSON values due to how ST
serializes them internally.


### Window Commands

Window commands operate at the window level. This doesn't mean that you can't
manipulate views from window commands, but rather that you don't need views in
order for window commands to be available. For instance, the built-in command
`new_file` is defined as a `WindowCommand` so it works even when no view
is open. Requiring a view to exist in that case wouldn't make sense.

Window command instances have a `.window` attribute to point to the window
instance that created them.

The `.run()` method of a window command doesn't require any positional
parameter.

Window commands are able to route text commands to their window's active view.


### Text Commands

Text commands operate at the view level, so they require a view to exist
in order to be available.

Text command instances have a `.view` attribute pointing to the view instance
that created them.

The `.run()` method of text commands requires an `edit` instance as
its first positional argument.


#### Text Commands and the `edit` Object

The edit object groups modifications to the view so that undo and macros work
sensibly.

**Note:** Contrary to older versions, Sublime Text 3 doesn't allow programmatic
control over edit objects. The API is in charge of managing their life cycle.
Plugin creators must ensure that all modifying operations occur inside the
`.run` method of new text commands. To call existing commands, you can use
`view.run_command(<cmd_name>, <args>)` or similar API calls.


### Responding to Events

Any command deriving from `EventListener` will be able to respond to events.


### Another Plugin Example: Feeding the Completions List

Let's create a plugin that fetches data from Google's Autocomplete service and
then feeds it to the Sublime Text completions list. Please note that, as ideas
for plugins go, this a very bad one.

```python
import sublime
import sublime_plugin

from xml.etree import ElementTree as ET
import urllib

GOOGLE_AC = r"http://google.com/complete/search?output=toolbar&q=%s"


class GoogleAutocomplete(sublime_plugin.EventListener):
    def on_query_completions(self, view, prefix, locations):
        elements = ET.parse(
            urllib.request.urlopen(GOOGLE_AC % prefix)
        ).getroot().findall("./CompleteSuggestion/suggestion")

        sugs = [(x.attrib["data"],) * 2 for x in elements]

        return sugs
```

::: tip Note
Make sure you don't keep this plugin around after trying it or it will
interfere with the autocompletion system.
:::


## Learning the API

The API reference is documented at 
<https://www.sublimetext.com/docs/api_reference.html>.

To get acquainted with the Sublime Text API and the available commands,
it may be helpful to read existing code and learn from it.

In particular, the `Packages/Default` contains many examples of
undocumented commands and API calls. Note that you will first have to extract
its contents to a folder if you want to take a look at the code within - 
[PackageResourceViewer](https://packagecontrol.io/packages/PackageResourceViewer) 
helps with this.

# /Part 29. docs.sublimetext.io/docs/guide/extensibility/snippets.md

---
title: Snippets
---

Whether you are coding or writing the next vampire best-seller, you're
likely to need certain short fragments of text again and again. Use
snippets to save yourself tedious typing. Snippets are smart templates
that will insert text for you and adapt it to their context.

To create a new snippet, select **Tools | Developer | New Snippet...**
Sublime Text will present you with a skeleton for it.

Snippets can be stored under any package's folder, but to keep it simple
while you're learning, you can save them to your `Packages/User` folder.

## Snippets File Format

Snippets typically live in a Sublime Text package. They are simplified
XML files with the extension `.sublime-snippet`. For instance, you could
have a `greeting.sublime-snippet` inside an *Email* package.

The structure of a typical snippet is as follows (including the default
hints Sublime Text inserts for your convenience):

```xml
<snippet>
    <content><![CDATA[Type your snippet here]]></content>
    <!-- Optional: Tab trigger to activate the snippet -->
    <tabTrigger>xyzzy</tabTrigger>
    <!-- Optional: Scope the tab trigger will be active in -->
    <scope>source.python</scope>
    <!-- Optional: Description to show in the menu -->
    <description>My Fancy Snippet</description>
</snippet>
```

The `snippet` element contains all the information Sublime Text needs in
order to know *what* to insert, *whether* to insert and *when*. Let's
look at each of these parts in turn.

`content`
: The actual snippet. Snippets can range from simple to fairly complex
  templates. We'll look at examples of both later.
  
  Keep the following in mind when writing your own snippets:
  
  - If you want to get a literal `$`, you have to escape it like
    this: `\$`.
  
  - When writing a snippet that contains indentation, always use
    tabs. When the snippet is inserted, the tabs will be
    transformed into spaces if the option
    `translate_tabs_to_spaces` is `true`.
  
  - The `content` must be included in a `<![CDATA[…]]>` section.
    Snippets won't work if you don't do this\!
  
  - The `content` of your snippet must not contain `]]>` because
    this string of characters will prematurely close the
    `<![CDATA[…]]>` section, resulting in an XML error. To work
    around this pitfall, you can insert an undefined variable into
    the string like this: `]]$NOT_DEFINED>`. This modified string
    passes through the XML parser without closing the content
    element's `<![CDATA[…]]>` section, but Sublime Text will
    replace `$NOT_DEFINED` with an empty string before inserting
    the snippet into your file. In other words, `]]$NOT_DEFINED>`
    in your snippet file `content` will be written as `]]>` when
    you trigger the snippet.

`tabTrigger`
: Defines the sequence of keys that must be pressed to insert this snippet. 
  After typing this sequence, the snippet will kick in as soon as you hit
  the <Key k="tab" /> key.

`scope`
: Scope selector determining the context where the snippet will be active.
  See [Scopes][] for more information.

`description`
: Used when showing the snippet in the Snippets menu. If not present, Sublime
  Text defaults to the file name of the snippet.

[Scopes]: /guide/extensibility/syntaxdefs.md#scopes

With this information, you can start writing your own snippets as described in
the next sections.

::: tip Note
In the interest of brevity, we're only including the ``content``
element's text in examples unless otherwise noted.
:::


## Snippet Features

### Environment Variables

Snippets have access to contextual information in the form of
environment variables. The values of the variables listed below are set
automatically by Sublime Text.


|      Variable        |                           Description                                 |
| -------------------- | --------------------------------------------------------------------- |
| `$PARAM1 .. $PARAMn` | Arguments passed to the `insert_snippet` command. (Not covered here.) |
| `$SELECTION`         | The text that was selected when the snippet was triggered.            |
| `$TM_CURRENT_LINE`   | Content of the cursor's line when the snippet was triggered.          |
| `$TM_CURRENT_WORD`   | Word under the cursor when the snippet was triggered.                 |
| `$TM_DIRECTORY`      | Directory name of the file being edited. (since 3154)                 |
| `$TM_FILENAME`       | Name of the file being edited, including extension.                   |
| `$TM_FILEPATH`       | Path to the file being edited.                                        |
| `$TM_FULLNAME`       | User's user name.                                                     |
| `$TM_LINE_INDEX`     | Column where the snippet is being inserted, 0 based.                  |
| `$TM_LINE_NUMBER`    | Row where the snippet is being inserted, 1 based.                     |
| `$TM_SELECTED_TEXT`  | An alias for **$SELECTION**.                                          |
| `$TM_SCOPE`          | The scope of the beginning of each selected region. (since 3154)      |
| `$TM_SOFT_TABS`      | `YES` if `translate_tabs_to_spaces` is true, otherwise `NO`.          |
| `$TM_TAB_SIZE`       | Spaces per-tab (controlled by the `tab_size` option).                 |

Let's see a simple example of a snippet using variables:

```perl
=================================
USER NAME:          $TM_FULLNAME
FILE NAME:          $TM_FILENAME
 TAB SIZE:          $TM_TAB_SIZE
SOFT TABS:          $TM_SOFT_TABS
=================================

# Output:
=============================
USER NAME:          guillermo
FILE NAME:          test.txt
 TAB SIZE:          4
SOFT TABS:          YES
=============================
```


### Fields

With the help of field markers, you can cycle through positions within the
snippet by pressing the <Key k="tab" /> key. Fields are used to walk you through the
customization of a snippet after it's been inserted.

```perl
First Name: $1
Second Name: $2
Address: $3
```

In the example above, the cursor will jump to `$1` if you press <Key k="tab" />
once. If you press <Key k="tab" /> a second time, it will advance to `$2`, etc. You
can also move backwards in the series with <Key k="shift+tab" />. If you press
<Key k="tab" /> after the highest tab stop, Sublime Text will place the cursor at the
end of the snippet's content so that you can resume normal editing.

If you want to control where the exit point should be, use the `$0` mark. By
default, this is the end of the snippet.

You can break out of the field cycle any time by pressing <Key k="escape" />.

### Mirrored Fields

Identical field markers mirror each other: when you edit the first one, the rest
will be populated in real time with the same value.

```perl
First Name: $1
Second Name: $2
Address: $3
User name: $1
```

In this example, "User name" will be filled out with the same value as "First
Name".

### Placeholders

By expanding the field syntax a little bit, you can define default
values for a field. Placeholders are useful whenever there's a general
case for your snippet, but you still want to keep it customizable.

```perl
First Name: ${1:Guillermo}
Second Name: ${2:López}
Address: ${3:Main Street 1234}
User name: $1
```

Variables can be used as placeholders:

```perl
First Name: ${1:Guillermo}
Second Name: ${2:López}
Address: ${3:Main Street 1234}
User name: ${4:$TM_FULLNAME}
```

And you can nest placeholders within other placeholders too:

```perl
Test: ${1:Nested ${2:Placeholder}}
```


### Substitutions

In addition to the place holder syntax, tab stops can specify more
complex operations with substitutions. Use substitutions to dynamically
generate text based on a mirrored tab stop. Of course, the tab stop you
want to use as variable has to be mirrored somewhere else in the
snippet.

The substitution syntax has the following syntaxes:

- `${var_name/regex/format_string/}`
- `${var_name/regex/format_string/options}`

**var_name**
: The variable name: `1`, `2`… or an environment variable such as `TM_FILENAME` or `SELECTION`.

**regex**
: Perl-style regular expression: See the [Boost library documentation for
  regular expressions][boost-regex].

**format_string**
: See the [Boost library documentation for format strings][boost-format].

**options**
: Optional. May be any of the following:

  **i**
  : Case-insensitive regex.

  **g**
  : Replace all occurrences of ``regex``.

  **m**
  : Don't ignore newlines in the string.

[boost-regex]: https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html

[boost-format]: https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/format/boost_format_syntax.html

With substitutions you can, for instance, underline text effortlessly:

```perl

      Original: ${1:Hey, Joe!}
Transformation: ${1/./=/g}

# Output:

      Original: Hey, Joe!
Transformation: =========
```

Another more complex example can translate snail_case to Tile Case With Spaces.
Basically, it combines two separate expressions and replaces into one.
It also illustrates that replaces may occur before the actual tabstop.

<pre class="language-perl line-numbers">
<code>
Transformation: ${1/^(\w)|(?:_(\w))/(?1\u$1:)(?2 \u$2:)/g}
      Original: ${1:text_in_snail_case}

# Output:

Transformation: Text In Snail Case
      Original: text_in_snail_case
</code>
</pre>

```perl
Transformation: ${1/^(\w)|(?:_(\w))/(?1\u$1:)(?2 \u$2:)/g}
      Original: ${1:text_in_snail_case}

# Output:

Transformation: Text In Snail Case
      Original: text_in_snail_case
```

You can also use environment variables with substitutions:

```perl
# In file MyModule.js:

Transformation: ${TM_FILENAME/(\w+)\.js/\1/g}

# Output:

Transformation: MyModule
```

# /Part 30. docs.sublimetext.io/docs/guide/extensibility/syntaxdefs.md

---
title: Syntax Definitions
---

Syntax definitions make Sublime Text aware of programming and markup languages.
Most noticeably, they work together with colors to provide syntax highlighting.
Syntax definitions define *scopes* that divide the text in a buffer into named
regions. Several editing features in Sublime Text make extensive use of
this fine-grained contextual information.

Essentially, syntax definitions consist of regular expressions used to find
text, as well as more or less arbitrary, dot-separated strings called *scopes*
or *scope names*. For every occurrence of a given regular expression, Sublime
Text gives the matching text its corresponding *scope name*.

::: warning Deprecation Notice
For Sublime Text 3 (Build 3084),
a new syntax definition format has been added
with the `.sublime-syntax` extension.

It is highly encouraged to be used
in favor of the legacy TextMate format
described in this document,
unless compatibility with older versions
or other editors is desired.

Documentation is available 
at the [official documentation][].
:::

[official documentation]: https://www.sublimetext.com/docs/syntax.html

::: seealso
[Reference for TextMate Syntax Definitions](/reference/syntaxdefs_legacy.md)
:::


## Prerequisites

In order to follow this tutorial, you will need to install
[PackageDev](https://github.com/SublimeText/PackageDev), a package
intended to ease the creation of new syntax definitions for Sublime
Text. Follow the installation notes in the "Getting Started" section of
the readme.


## File format

Sublime Text uses [property list](https://en.wikipedia.org/wiki/Property_list)
(Plist) files to store syntax definitions. However, because editing XML files is
a cumbersome task, we'll use [YAML](https://en.wikipedia.org/wiki/YAML) instead
and convert it to Plist format afterwards. This is where the :PackageDev: package
(mentioned above) comes in.

::: tip Note
If you experience unexpected errors during this tutorial, chances are
:PackageDev: or YAML is to blame. Don't immediately think your problem is
due to a bug in Sublime Text.
:::

By all means, do edit the Plist files by hand if you prefer to work in
XML, but always keep in mind their differing needs in regards to escape
sequences, many XML tags etc.


## Scopes

Scopes are a key concept in Sublime Text. Essentially, they are named
text regions in a buffer. They don't do anything by themselves, but
Sublime Text peeks at them when it needs contextual information.

For instance, when you trigger a snippet, Sublime Text checks the scope
bound to the snippet and looks at the caret's position in the file. If
the caret's current position matches the snippet's scope selector,
Sublime Text fires it off. Otherwise, nothing happens.

::: tip Info
There's a slight difference between *scopes* and *scope selectors*: Scopes
are the names defined in a syntax definition, while scope selectors are used
in items like snippets and key bindings to target scopes. When creating a
new syntax definition, you care about scopes; when you want to constrain a
snippet to a certain scope, you use a scope selector.
:::

Scopes can be nested to allow for a high degree of granularity. You can drill
down the hierarchy very much like with CSS selectors. For instance, thanks to
scope selectors, you could have a key binding activated only within single
quoted strings in Python source code, but not inside single quoted strings in
any other language.

Sublime Text inherits the idea of scopes from Textmate, a text editor for Mac.
[Textmate's online manual][] contains further information about scope selectors
that's useful for Sublime Text users too. In particular, Color Schemes make
extensive use of scopes to style every aspect of a language in the desired
color.

[Textmate's online manual]: https://manual.macromates.com/en/scope_selectors


## How Syntax Definitions Work

At their core, syntax definitions are arrays of regular expressions
paired with scope names. Sublime Text will try to match these patterns
against a buffer's text and attach the corresponding scope name to all
occurrences. These pairs of regular expressions and scope names are
known as *rules*.

Rules are applied in order, one line at a time. Rules are applied in the
following order:

1. The rule that matches at the first position in a line
2. The rule that comes first in the array

Each rule consumes the matched text region, which therefore will be
excluded from the next rule's matching attempt (save for a few
exceptions). In practical terms, this means that you should take care to
go from more specific rules to more general ones when you create a new
syntax definition. Otherwise, a greedy regular expression might swallow
parts you'd like to have styled differently.

Syntax definitions from separate files can be combined, and they can be
recursively applied too.


## Your First Syntax Definition

By way of example, let's create a syntax definition for Sublime Text
snippets. We'll be styling the actual snippet content, not the whole
`.sublime-snippet` file.

::: tip Note
Since syntax definitions are primarily used to enable syntax highlighting,
we'll use the phrase *to style* to mean *to break down a source code file
into scopes*. Keep in mind, however, that colors are a different thing from
syntax definitions and that scopes have many more uses besides syntax
highlighting.
:::

Here are the elements we want to style in a snippet:

- Variables (`$PARAM1`, `$USER_NAME`\ ...)
- Simple fields (`$0`, `$1`\ ...)
- Complex fields with placeholders (`${1:Hello}`)
- Nested fields (`${1:Hello ${2:World}!}`)
- Escape sequences (`\$`, `\<`, …)
- Illegal sequences (`$`, `<`, `\`, …)

Here are the elements we don't want to style because they are too complex for
this example:

- Variable Substitution (`${1/Hello/Hi/g}`)

::: tip Note
Before continuing, make sure you've installed the :PackageDev: package as
explained above.
:::


## Creating A New Syntax Definition

To create a new syntax definition, follow these steps:

1. Go to **Tools | Packages | Package Development | New Syntax
   Definition**
1. Save the new file in your `Packages/User` folder as a `.YAML-tmLanguage` file.

You now should see a file like this:

```yaml
# [PackageDev] target_format: plist, ext: tmLanguage
---
name: Syntax Name
scopeName: source.syntax_name
fileTypes: []
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
-
...
```

Let's examine the key elements.

  - `name`  
    The name that Sublime Text will display in the syntax definition
    drop-down list. Use a short, descriptive name. Typically, you will
    use the name of the programming language you are creating the syntax
    definition for.

  - `scopeName`  
    The topmost scope for this syntax definition. It takes the form
    `source.<lang_name>` or `text.<lang_name>`. For programming
    languages, use `source`. For markup and everything else, use `text`.

  - `fileTypes`  
    This is a list of file extensions (without the leading dot). When
    opening files of these types, Sublime Text will automatically
    activate this syntax definition for them.

  - `uuid`  
    This is a unique identifier for this syntax definition. Each new
    syntax definition gets its own uuid. Even though Sublime Text itself
    ignores it, don't modify this.

  - `patterns`  
    A container for your patterns.

For our example, fill the template with the following information:

```yaml
# [PackageDev] target_format: plist, ext: tmLanguage
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
-
...
```

::: tip Note
YAML is not a very strict format, but can cause headaches when you don't
know its conventions. It supports single and double quotes, but you may also
omit them as long as the content does not create another YAML literal. If
the conversion to Plist fails, take a look at the output panel for more
information on the error. We'll explain later how to convert a syntax
definition in YAML to Plist. This will also cover the first commented line
in the template.

The `---` and `...` are optional.
:::


## Analyzing Patterns

The `patterns` array can contain several types of element. We'll look at
some of them in the following sections. If you want to learn more about
patterns, refer to Textmate's online manual.


### Matches

Matches take this form:

``` yaml
match: (?i:m)y \s+[Rr]egex
name: string.format
comment: This comment is optional.
```

Sublime Text uses [Oniguruma][]'s syntax for regular expressions in
syntax definitions. Several existing syntax definitions make use of
features supported by this regular expression engine that aren't part of
perl-style regular expressions, hence the requirement for Oniguruma.

[Oniguruma]: https://github.com/kkos/oniguruma/blob/master/doc/RE

`match`  
: A regular expression Sublime Text will use to find matches.

`name`  
: The name of the scope that should be applied to any occurrences of `match`.

`comment`  
: An optional comment about this pattern.

Let's go back to our example. It looks like this:

``` yaml
# [PackageDev] target_format: plist, ext: tmLanguage
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
-
...
```

That is, make sure the `patterns` array is empty.

Now we can begin to add our rules for Sublime snippets. Let's start with
simple fields. These could be matched with a regex like so:

``` perl
\$[0-9]+
# or...
\$\d+
```

We can then build our pattern like this:
``` yaml
name: keyword.other.ssraw
match: \$\d+
comment: Tab stops like $1, $2...
```

::: tip Choosing the Right Scope Name
Naming scopes isn't obvious sometimes. Check the [Textmate naming
conventions][] for guidance on scope names. :PackageDev: automatically
provides completions for scope names according to these conventions. It
is important to re-use the basic categories outlined there if you want
to achieve the highest compatibility with existing colors.

[Textmate naming conventions]: https://manual.macromates.com/en/language_grammars#naming_conventions

Color schemes have hardcoded scope names in them. They could not
possibly include every scope name you can think of, so they target the
standard ones plus some rarer ones on occasion (like for CSS or
Markdown). This means that two color schemes using the same syntax
definition may render the text differently!

Bear in mind too that you should use the scope name that best suits your
needs or preferences. It'd be perfectly fine to assign a scope like
`constant.numeric` to anything other than a number if you have a good
reason to do so.
:::

And we can add it to our syntax definition too:

``` yaml
# [PackageDev] target_format: plist, ext: tmLanguage
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
- comment: Tab stops like $1, $2...
  name: keyword.other.ssraw
  match: \$\d+
...
```

::: tip Note
You should use two spaces for indent. This is the recommended indent for
YAML and lines up with lists like shown above.
:::

We're now ready to convert our file to `.tmLanguage`. Syntax definitions use
Textmate's `.tmLanguage` extension for compatibility reasons. As explained
above, they are simply Plist XML files.

Follow these steps to perform the conversion:

- Make sure that `Automatic` is selected in **Tools | Build System**, or
  select `Convert to ...`.
- Press <Key k="ctrl+b" />.
  A `.tmLanguage` file will be generated for you in the same folder as
  your `.YAML-tmLanguage` file.
- Sublime Text will reload the changes to the syntax definition.

In case you are wondering why :PackageDev: knows what you want to convert your
file to: It's specified in the first comment line.

You have now created your first syntax definition. Next, open a new file and
save it with the extension `.ssraw`. The buffer's syntax name should switch to
"Sublime Snippet (Raw)" automatically, and you should get syntax highlighting if
you type `$1` or any other simple snippet field.

Let's proceed to creating another rule for environment variables.

``` yaml
comment: Variables like $PARAM1, $TM_SELECTION...
name: keyword.other.ssraw
match: \$[A-Za-z][A-Za-z0-9_]+
```

Repeat the above steps to update the `.tmLanguage` file.


### Fine Tuning Matches

You might have noticed, for instance, that the entire text in `$PARAM1` is
styled the same way. Depending on your needs or your personal preferences, you
may want the `$` to stand out. That's where `captures` come in. Using
captures, you can break a pattern down into components to target them
individually.

Let's rewrite one of our previous patterns to use `captures`:

```yaml
comment: Variables like $PARAM1, $TM_SELECTION...
name: keyword.other.ssraw
match: \$([A-Za-z][A-Za-z0-9_]+)
captures:
  '1': {name: constant.numeric.ssraw}
```

Captures introduce complexity to your rule, but they are pretty straightforward.
Notice how numbers refer to parenthesized groups left to right. Of course, you
can have as many capture groups as you want.

::: tip Note
Writing `1` on a new line and pressing tab will autocomplete to `'1':
{name: }` thanks to :PackageDev:.
:::

Arguably, you'd want the other scope to be visually consistent with this one.
Go ahead and change it too.

::: tip Note
As with ususal regular expressions and substitutions, the capture group
`'0'` applies to the whole match.
:::


### Begin-End Rules

Up to now we've been using a simple rule. Although we've seen how to
dissect patterns into smaller components, sometimes you'll want to
target a larger portion of your source code that is clearly delimited by
start and end marks.

Literal strings enclosed by quotation marks or other delimiting
constructs are better dealt with by begin-end rules. This is a skeleton
for one of these rules:

```yaml
name:
begin:
end:
```

Well, at least in their simplest version. Let's take a look at one that
includes all available options:

``` yaml
name:
contentName:
begin:
beginCaptures:
  '0': {name: }
  # ...
end:
endCaptures:
  '0': {name: }
  # ...
patterns:
- name:
  match:
# ...
```

Some elements may look familiar, but their combination might be
daunting. Let's inspect them individually.

`name`
: Just like with simple captures this sets the following scope name to
  the whole match, including `begin` and `end` marks. Effectively,
  this will create nested scopes for `beginCaptures`, `endCaptures`
  and `patterns` defined within this rule. Optional.

`contentName`
: Unlike the `name` this only applies a scope name to the enclosed
  text. Optional.

`begin`
: Regex for the opening mark for this scope.

`end`
: Regex for the end mark for this scope.

`beginCaptures`
: Captures for the `begin` marker. They work like captures for simple
  matches. Optional.

`endCaptures`
: Same as `beginCaptures` but for the `end` marker. Optional.

`patterns`
: An array of patterns to match **only** against the begin-end's
  content; they aren't matched against the text consumed by `begin` or
  `end` themselves. Optional.

We'll use this rule to style nested complex fields in snippets:

``` yaml
name: variable.complex.ssraw
contentName: string.other.ssraw
begin: '(\$)(\{)([0-9]+):'
beginCaptures:
  '1': {name: keyword.other.ssraw}
  '3': {name: constant.numeric.ssraw}
end: \}
patterns:
- include: $self
- name: support.other.ssraw
  match: .
```

This is the most complex pattern we'll see in this tutorial. The `begin` and
`end` keys are self-explanatory: they define a region enclosed between
`${<NUMBER>:` and `}`. We need to wrap the begin pattern into quotes because
otherwise the trailing `:` would tell the parser to expect another
dictionary key. `beginCaptures` further divides the begin mark into smaller
scopes.

The most interesting part, however, is `patterns`. Recursion, and the
importance of ordering, have finally made their appearance here.

We've seen above that fields can be nested. In order to account for this, we
need to style nested fields recursively. That's what the `include` rule does
when we furnish it the `$self` value: it recursively applies our **entire
syntax definition** to the text captured by our begin-end rule. This portion
excludes the text individually consumed by the regexes for `begin` and
`end`.

Remember, matched text is consumed; thus, it is excluded from the next match
attempt and can't be matched again.

To finish off complex fields, we'll style placeholders as strings. Since we've
already matched all possible tokens inside a complex field, we can safely tell
Sublime Text to give any remaining text (`.`) a literal string scope. Note
that this doesn't work if we made the pattern greedy (`.+`) because this
includes possible nested references.

::: tip Note
We could've used `contentName: string.other.ssraw` instead of the last
pattern but this way we introduce the importance of ordering and how matches
are consumed.
:::


### Final Touches

Lastly, let's style escape sequences and illegal sequences, and then we
can wrap up.

``` yaml
- comment: Sequences like \$, \> and \<
  name: constant.character.escape.ssraw
  match: \\[$<>]

- comment: Unescaped and unmatched magic characters
  name: invalid.illegal.ssraw
  match: '[$<>]'
```

The only hard thing here is not forgetting that `[]` enclose arrays in
YAML and thus must be wrapped in quotes. Other than that, the rules are
pretty straightforward if you're familiar with regular expressions.

However, you must take care to place the second rule after any others
matching the `$` character, since otherwise it will be consumed and
result in every following expression not matching.

Also, even after adding these two additional rules, note that our
recursive begin-end rule from above continues to work as expected.

At long last, here's the final syntax definition:

``` yaml
# [PackageDev] target_format: plist, ext: tmLanguage
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
- comment: Tab stops like $1, $2...
  name: keyword.other.ssraw
  match: \$(\d+)
  captures:
    '1': {name: constant.numeric.ssraw}

- comment: Variables like $PARAM1, $TM_SELECTION...
  name: keyword.other.ssraw
  match: \$([A-Za-z][A-Za-z0-9_]+)
  captures:
    '1': {name: constant.numeric.ssraw}

- name: variable.complex.ssraw
  begin: '(\$)(\{)([0-9]+):'
  beginCaptures:
    '1': {name: keyword.other.ssraw}
    '3': {name: constant.numeric.ssraw}
  end: \}
  patterns:
  - include: $self
  - name: support.other.ssraw
    match: .

- comment: Sequences like \$, \> and \<
  name: constant.character.escape.ssraw
  match: \\[$<>]

- comment: Unescaped and unmatched magic characters
  name: invalid.illegal.ssraw
  match: '[$<>]'
...
```

There are more available constructs and code reuse techniques using a
"repository", but the above explanations should get you started with the
creation of syntax definitions.

::: tip Note
If you previously used JSON for syntax definitions you are still able to do
this because :PackageDev: is backwards compatible.

If you want to consider switching to YAML (either from JSON or directly from
Plist), it provides a command named `PackageDev: Convert to YAML and
Rearrange Syntax Definition` which will automatically format the resulting
YAML in a pleasurable way.
:::

# /Part 31. docs.sublimetext.io/docs/other/question.md

---
title: FAQ
sidebar: 'auto'
---

::: tip
We have collected some usual questions here. 
If you don't find the answer you want here, 
please feel free to reach out on the [Sublime Discord][]
:::

[Sublime Discord]: https://discord.gg/D43Pecu

## 1. Sample Question?

1. Answer 1

# /Part 32. docs.sublimetext.io/docs/reference/README.md

---
title: Reference
---

This section contains concise technical information
about Sublime Texts configuration files,
also called resource files.
It is intended
as a quick reference for advanced users.

# /Part 33. docs.sublimetext.io/docs/reference/color_schemes_legacy.md

---
title: Color Schemes (Legacy)
---

Color schemes define the colors
used to highlight source code in Sublime Text views
and to style different elements
found in the editing area:
background, foreground, selection, caret...


::: warning
This document describes
the old `.tmTheme` color scheme (not theme!) format
inherited from TextMate.

For the new `.sublime-color-scheme` format
added in Sublime Text 3.1,
refer to the [official documentation][].
:::

[official documentation]: https://www.sublimetext.com/docs/color_schemes.html

::: tip Note
Sublime Text differentiates
between "color schemes" defining colors in the editor area
and "themes" defining the layout for the rest of the UI.
Rather confusingly,
the *color scheme* format inherited from TextMate
uses the `.tmTheme` unchanged extension,
because themes in TextMate themes
are what color schemes are for Sublime Text.

It's important to remember
that UI themes and color schemes
are two different customization mechanisms.
Generally speaking, it is far less complex
to create a new color scheme
than it is to create a new UI theme.
:::


## File Format

| Name          | Description                               |
| ------------- | ----------------------------------------- |
| **Format**    | Property List                             |
| **Extension** | `.tmTheme`                                |
| **Name**      | Any                                       |
| **Location**  | Any under `Packages`                      |

The file format of color scheme files
is inherited from Textmate.


## Where to Store Color Schemes

By convention,
[packages][] primarily containing
a set of color scheme files
have the *Color Scheme -* prefix.
For example: *Color Scheme - Default*.

The file names of all available color schemes
are displayed in the **Preferences → Color Scheme** menu,
grouped by the containing package.

[packages]: /guide/extensibility/packages.md

## Structure of a Color Scheme File

All color scheme files share
the same topmost structure.

Colors can be expressed in the
following formats:
`#RRGGBB`, `#RGB`, [X11 color names][]

[X11 color names]: https://en.wikipedia.org/wiki/X11_color_names

Most elements controlling colors
accept an alpha channel value:
`#RRGGBBAA`.


## Root Elements in Color Schemes Files

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Monokai</string>
    <key>settings</key>
    <array>
        <!-- INSERT DICTIONARIES WITH COLOR SETTINGS HERE -->
    </array>
    <key>uuid</key>
    <string>D8D5E82E-3D5B-46B5-B38E-8C841C21347D</string>
</dict>
</plist>
```

`name`
: **Optional.**
  Name of the color scheme.
  Ignored by Sublime Text.

`settings`
: **Required.**
  Container for further color scheme settings.
  See [Sub-elements of Settings][] for details.

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->



[Sub-elements of Settings]: #sub-elements-of-settings

## Sub-elements of Settings

Sublime Text supports
the following color scheme settings:


### Global Settings

Not associated with any scope.
These settings affect global visual items
in the editing area.

Global settings go inside a `<dict>` element
within the topmost `<array>`.

```xml
<array>
   <dict>
      <key>settings</key>
      <dict>
         <key>background</key>
         <string>#272822</string>
         <key>caret</key>
         <string>#F8F8F0</string>
         ...
      </dict>
   </dict>
...
</array>
```

#### General

`foreground`
: Default foreground color for the view.
  Affects file contents, the gutter, rulers and guides.
  The alpha channel does not apply to file contents.
  Because there is no override setting for rulers,
  the only way to change the color of rulers
  is a "hack" further described [on CursorRuler's wiki][hack].

  [hack]: https://github.com/icylace/CursorRuler/wiki/Tips#ruler-colors

`background`
: Default background color of the view (and gutter).

`invisibles`
: Ignored.

`caret`
: Color of the caret.

`lineHighlight`
: Color of the line the caret is in.
  Only used when the `higlight_line` setting is set to `true`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Brackets

`bracketContentsOptions`
: Controls how brackets are highlighted
  when a caret is between a bracket pair.
  Expects a space-separated list of the available options.

  Only applied when the `match_brackets` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `underline`

`bracketContentsForeground`
: Color of the highlighting(s)
  selected by `bracketContentsOptions`.

  Only applied when the `match_brackets` setting
  is set to `true`.

`bracketsOptions`
: Controls how brackets are highlighted
  when a caret is next to a bracket.
  Expects a space-separated list of the available options.

  Only applied when the `match_brackets` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `underline`

`bracketsForeground`
: Color of the highlighting(s)
  selected by `bracketOptions`.

  Only applied when the `match_brackets` setting
  is set to `true`.


#### Tags

`tagsOptions`
: Controls how tags are highlighted
  when a caret is inside a tag.
  Expects a space-separated list of the available options.

  Only applied when the `match_tags` setting
  is set to `true`.

  Options: `underline`, `stippled_underline`, `squiggly_underline`,
  `foreground`

  **Default:** `stippled_underline`

`tagsForeground`
: Color of the highlighting(s)
  selected by `tagsOptions`.

  Only applied when the `match_tags` setting
  is set to `true`.


#### Find

`findHighlight`
: Background color of regions matching the current search.

`findHighlightForeground`
: Foreground color of regions matching the current search.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Gutter

`gutter`
: Background color of the gutter.

`gutterForeground`
: Foreground color of the gutter.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Selection

`selection`
: Color of the selection regions.

`selectionBorder`
: Color of the selection regions' border.

`inactiveSelection`
: Color of inactive selections (inactive view).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Guides

`guide`
: Color of the guides displayed to indicate nesting levels.

  Only used if the `indent_guide_options` setting
  includes`draw_normal`.

`activeGuide`
: Color of the guide lined up with the caret.

  Only applied if the `indent_guide_options` setting
  includes `draw_active`.

`stackGuide`
: Color of the current guide's parent guide levels.

  Only used if the `indent_guide_options` setting
  is set to `draw_active`.

<!-- TODO image -->


#### Highlighted Regions

`highlight`
: Background color for regions added via `sublime.add_regions()`
with the `sublime.DRAW_OUTLINED` flag added.

`highlightForeground`
: Foreground color for regions added via `sublime.add_regions()`
  with the `sublime.DRAW_OUTLINED` flag added.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Shadow

`shadow`
: Color of the shadow effect when the buffer is scrolled.

`shadowWidth`
: Width of the shadow effect when the buffer is scrolled.

  Values greater than 32
  cause the shadow to be hidden.
  The default is 8.

  Note that, despite its nature,
  this expects a **string value**.


### Scoped Settings

Settings associated with a particular scope.

```xml
<array>
   ...
   <dict>
      <key>name</key>
      <string>Comment</string>
      <key>scope</key>
      <string>comment</string>
      <key>settings</key>
      <dict>
         <key>foreground</key>
         <string>#75715E</string>
      </dict>
   </dict>
   ...
</array>
```

`name`
: Descriptive name of the item.

`scope`
: Target scope name.

`settings`
: Container for settings.
  Valid settings are:
  
  `fontStyle`
  : Space-separated list of
    styles for the font.

    Options: `bold`, `italic`, nothing (resets fontStyle to normal)

  `foreground`
  : Foreground color.

  `background`
  : Background color.


## Minimal Scope Coverage

Refer to the [official Scope Naming guidelines]
in order to find out
which scopes a color scheme should cover at minimum.

[official Scope Naming guidelines]: http://www.sublimetext.com/docs/3/scope_naming.html#color_schemes


## Sublime Text Settings Related to Color Schemes

### View Settings

`color_scheme`
: Path to a color scheme file
  relative to the Data folder
  (example: `Packages/Color Scheme - Default/Monokai.tmTheme`).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

# /Part 34. docs.sublimetext.io/docs/reference/commands.md

---
title: Commands
sidebarDepth: 1
---

::: tip Note
This list of commands is a work in progress.
:::

<!-- TODO Remove after full ReST to MD Conversion
- .. _cmd-about-paths: -->


## About Paths in Command Arguments
[About Paths in Command Arguments]: #about-paths-in-command-arguments

Some commands take paths as parameters. Among these, some support snippet-like
syntax, while others don't. A command of the first kind would take a parameter
like `${packages}/SomeDir/SomeFile.ext` whereas a command of the second kind
would take a parameter like `Packages/SomeDir/SomeFile.ext`.

Generally, newer commands support the snippet-like syntax.

Commands expect UNIX-style paths if not otherwise noted, including on
Windows (for example, `/c/Program Files/Sublime Text 3/sublime_plugin.py`).

Often, relative paths in arguments to commands are assumed to start at the
:Data_directory:.


<!--  TODO: split into Window and Text (and Application) commands since they behave
- differently and require other call mechanisms when called from a plugin -->


## Commands

### `append`

Inserts a string at the end of the view.

- **characters** (String): String to be inserted.
- **force** (Bool):
- **scroll_to_end** (Bool):

### :cmd: `auto_complete`

Opens the auto complete list.

### :cmd: `build`

Runs a build system.

- **variant** (String): Optional. The name of the variant to be run.

### :cmd: `clear_bookmarks`

If no **name** argument, or the **name** "bookmarks" is specified, it
removes all bookmarks set in the current file, but not the marks. If
the **name** "mark" is specified as an argument, it removes all marks set
in the current file, but not the bookmarks.

- **name** (String): e.g. `"mark"`, `"bookmarks"`.

### :cmd: `clear_fields`

Breaks out of the active snippet field cycle.

### :cmd: `clear_recent_files`

Deletes records of recently accessed files and folders.

### :cmd: `clear_recent_projects`

Deletes records of recently accessed projects.

### :cmd: `clone_file`

Clones the current view into the same tab group, both sharing the same
buffer. That means you can drag one tab to another group and every update to
one view will be visible in the other one too.

### :cmd: `close_file`

Closes the active view and, under certain circumsances, the whole
application.

<!--   XXX Sounds kinda wrong. -->

### :cmd: `close_folder_list`

Removes all folders from the current project.

### :cmd: `close_project`

Closes the current project.

### :cmd: `close_tag`

Surrounds the current inner text with the appropiate tags.

### :cmd: `close_window`

Closes the active window.

### :cmd: `close`

Closes the active view.

### :cmd: `commit_completion`

Inserts into the buffer the item that's currently selected in the auto
complete list.

<!-- TODO Probably not useful for users. XXX -->

### :cmd: `context_menu`

Shows the context menu.

### :cmd: `copy`

Sends the selected text to to the system clipboard.

### :cmd: `cut`

Removes the selected text and sends it to the system clipboard. Put
differently, it cuts.

### :cmd: `decrease_font_size`

Decreases the font size.

### :cmd: `delete_to_mark`

Deletes the text that `select_to_mark` would select.

### :cmd: `detect_indentation`

Guesses the indentation from the current file.

### :cmd: `duplicate_line`

Duplicates the current line.

### :cmd: `exec`

Runs an external process asynchronously. On Windows, GUIs are supressed.

`exec` is the default command used by build systems, thus it provides
similar functionality. However, a few options in build systems are taken
care of by Sublime Text internally so they list below only contains
parameters accepted by this command.

- **cmd** [(String)]
- **shell_cmd** (String): Shell command to use. If given overrides
  `cmd` and ignores `shell`.
- **file_regex** (String)
- **line_regex** (String)
- **working_dir** (String)
- **encoding** (String)
- **env** [{String: String}]
- **quiet** (Bool): If `True` no runtime information is printed if the
  command fails or has a non-zero exit code.
- **kill** (Bool): If `True` will simply terminate the current build
  process. This is invoked via *Build: Cancel* command from the
  [Command Palette][].
- **update_phantoms_only** (Bool)
- **hide_phantoms_only** (Bool)
- **word_wrap** (Bool): Whether to word-wrap the output in the build panel
- **syntax** (String): Syntax file used to colour output.
- **path** (String)
- **shell** (Bool)

::: seealso
[`exec` Target options](https://www.sublimetext.com/docs/build_systems.html#exec-target-options)
: Detailed documentation on all parameters of the `exec` command.
:::

### :cmd: `exit`

Exits the whole application with all open windows.

### :cmd: `expand_selection`

Extends the selection up to predefined limits.

- **to** (Enum): Values: *bol*, *hardbol*, *eol*, *hardeol*, *bof*, *eof*,
  *brackets*, *line*, *tag*, *scope*, *indentation*.

### :cmd: `expand_tabs`

XXX

- **set_translate_tabs** (Bool)

### :cmd: `find_all_under`

Finds all occurrences of the current selection or the current word.

### :cmd: `find_next`

Finds the next occurrence of the current search term.

### :cmd: `find_prev`

Finds the previous occurrence of the current search term.

### :cmd: `find_under_expand_skip`

Adds a new selection based on the current selection or expands the
selection to the current word while removing the current selection.

### :cmd: `find_under_expand`

Adds a new selection based on the current selection or expands the
selection to the current word.

### :cmd: `find_under_prev`

Finds the previous occurrence of the current selection or the current word.

### :cmd: `find_under`

Finds the next occurrence of the current selection or the current word.

### :cmd: `focus_group`

Gives focus to the top-most file in the specified group.

- **group** (Int): The group index to focus. This is determined by the order
  of `cells` items from the current layout (see [`Window.set_layout`][]).

### :cmd: `fold_by_level`

Scans the whole file and folds everything with an indentation level of
`level` or higher. This does not unfold already folded regions if you first
fold by level 2 and then by 3, for example. Sections with cursors are not
folded.

- **level** (Int): The level of indentation that should be folded. `0` is
  equivalent to running #### unfold_all.

### :cmd: `fold_tag_attributes`

Folds all tag attributes in XML files, only leaving the tag's name and the
closing bracket visible.

### :cmd: `fold`

Folds the current selection and displays ``…`` instead. Unfold arrows are
added to the lines where a region has been folded.

### :cmd: `hide_auto_complete`

Hides the auto complete list.

### :cmd: `hide_overlay`

Hides the active overlay. Show the overlay using the show_overlay command.

### :cmd: `hide_panel`

Hides the active panel.

- **cancel** (Bool): Notifies the panel to restore the selection to what it
  was when the panel was opened. (Only incremental find panel.)

### :cmd: `increase_font_size`

Increases the font size.

### :cmd: `indent`

Increments indentation of selection.

### :cmd: `insert_best_completion`

Inserts the best completion that can be inferred from the current context.

<!-- TODO Probably useless. XXX -->

- **default** (String): String to insert failing a best completion.

### :cmd: `insert_snippet`

Inserts a snippet from a string or *.sublime-snippet* file.

- **contents** (String): Snippet as a string to be inserted. Remember that
  backslashes `\` have to be escaped, like in every other JSON string.
- **name** (String): [Relative path][About Paths in Command Arguments] to the
  *.sublime-snippet* file to be inserted.

::: seealso
[Snippets][]

Documentation on snippets and their variable features.
:::

[Snippets]: ../guide/extensibility/snippets

### :cmd: `insert`

Inserts a string.

- **characters** (String): String to be inserted.

### :cmd: `join_lines`

Joins the current line with the next one.

### :cmd: `left_delete`

Deletes the character right before the caret.

### :cmd: `lower_case`

Makes the selection lower case.

### :cmd: `move_to_group`

Moves the current file to the specified group.

- **group** (Int): The group index to focus. See #### focus_group command.

### :cmd: `move_to`

Advances the caret to predefined locations.

- **to** (Enum): Values: *bol*, *eol*, *bof*, *eof*, *brackets*.
- **extend** (Bool): Whether to extend the selection. Defaults to `false`.

### :cmd: `move`

Advances the caret by predefined units.

- **by** (Enum): Values: *characters*, *words*, *word_ends*, *subwords*,
  *subword_ends*, *lines*, *pages*, *stops*.
- **forward** (Bool): Whether to advance or reverse in the buffer.
- **word_begin** (Bool)
- **empty_line** (Bool)
- **punct_begin** (Bool)
- **separators** (Bool)
- **extend** (Bool): Whether to extend the selection. Defaults to `false`.

### :cmd: `new_build_system`

Creates a new buffer and inserts a build system template.

### :cmd: `new_plugin`

Creates a new buffer and inserts a plugin template (a text command).

### :cmd: `new_snippet`

Creates a new buffer and inserts a snippet template.

### :cmd: `new_window`

Opens a new window.

### :cmd: `next_bookmark`

Select the next bookmarked region.

### :cmd: `next_field`

Advances the caret to the text snippet field in the current snippet field
cycle.

### :cmd: `next_misspelling`

Advance to the next misspelling

### :cmd: `next_result`

Advance to the next captured result.

### :cmd: `next_view_in_stack`

Switches to the most recently active view.

### :cmd: `next_view`

Switches to the next view.

### :cmd: `open_dir`

Opens the specified directory with the default file manager.

- **dir** (String): The directory to open.

### :cmd: `open_file_settings`

Opens the syntax-specific user settings file for the current syntax.

### :cmd: `open_file`

Opens the specified file.
Will dynamically open resource files
from [sublime-package archives][] as read-only
if the specified *override file* does not exist.

- **file** (String): [Absolute or relative path][About Paths in Command Arguments]
  to the file to be opened. Relative paths will originate from the recently

  Expands snippet-like variables, such as `$platform` and `$packages`.

- **contents** (String): This string will be written to the new buffer if
  the file does not exist. accessed directory (e.g. the directory of the currently opened file).

<!-- XXX more variables? -->

### :cmd: `open_recent_file`

Opens a recently closed file.

- **index** (Int)

### :cmd: `open_recent_folder`

Opens a recently closed folder.

- **index** (Int)

### :cmd: `open_recent_project`

Opens a recently closed project.

- **index** (Int)

### :cmd: `open_url`

Opens the specified url with the default browser.

- **url** (String)

### :cmd: `paste_and_indent`

Inserts the clipboard contents after the caret and indents contextually.

### :cmd: `paste`

Inserts the clipboard contents after the caret.

- **clipboard** (String): May be *selection*. XXX what other values are
  allowed?

### :cmd: `permute_lines`

XXX

- **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

### :cmd: `permute_selection`

XXX

- **operation** (Enum): *reverse*, *unique*, *shuffle* ...?

### :cmd: `prev_bookmark`

Select the previous bookmarked region.

### :cmd: `prev_field`

Moves the caret to the previous snippet field in the current snippet field
  cycle.

### :cmd: `prev_misspelling`

Move to the previous misspelling.

### :cmd: `prev_result`

Move to the previous captured result.

### :cmd: `prev_view_in_stack`

Switches to the view that was active before the most recently active view.

<!-- TODO I don't think this is very clear or even true. -->

### :cmd: `prev_view`

Switches to the previous view.

### :cmd: `prompt_add_folder`

Prompts for a folder to add to the current project.

### :cmd: `prompt_open_project`

Prompts for a project file to open as a project.

### :cmd: `prompt_save_as`

Prompts for a new file name and saves the active file.

### :cmd: `prompt_select_project`

Opens a popup with recently accessed projects where you can fuzzy-search.

### :cmd: `redo_or_repeat`

Performs the latest action again.

<!-- TODO does this mean selections? -->

### :cmd: `redo`

Reapplies the latest undone action.

### :cmd: `refresh_folder_list`

Reloads all folders in the current project and updates the side bar.

### :cmd: `reindent`

Corrects indentation of the selection with regular expressions set in the
syntax's preferences. The base indentation will be that of the line before
the first selected line. Sometimes does not work as expected.

### :cmd: `reopen_last_file`

Reopens the last closed file.

### :cmd: `reopen`

Reopens the current file.

- **encoding** (String): The file encoding the file should be reopened with.

### :cmd: `replace_completion_with_auto_complete`

XXX

### :cmd: `replace_completion_with_next_completion`

<!-- TODO Useless for users. XXX -->

### :cmd: `reset_font_size`

Resets the font size to the default

*Note*: This essentially removes the entry from your User settings, there
might be other places where this has been "changed".

### :cmd: `revert`

Undoes all unsaved changes to the file.

### :cmd: `right_delete`

Deletes the character right after the caret.

### :cmd: `run_macro_file`

Runs a *.sublime-macro* file.

- **file** (String): Relative path to the macro file.

### :cmd: `run_macro`

Runs the macro stored in the macro buffer.

### :cmd: `save_all`

Saves all open files.

### :cmd: `save_macro`

Prompts for a file path to save the macro in the macro buffer to.

### :cmd: `save_project_as`

Prompts for a new file name and saves the current project.

### :cmd: `save`

Saves the active file.

- **encoding** (String): The file encoding to save as.

### :cmd: `scroll_lines`

Scrolls lines in the view.

**amount** \[Float\]\: Positive values scroll lines down and negative values
scroll lines up.

### :cmd: `select_all_bookmarks`

Selects all bookmarked regions.

### :cmd: `select_all`

Select the view's content.

### :cmd: `select_bookmark`

Selects a bookmarked region in the current file.

- **index** (Int)

### :cmd: `select_by_index`

Focuses a certain tab in the current group.

- **index** (Int): The tab index to focus.

### :cmd: `select_lines`

Adds a line to the current selection.

- **forward** (Bool): Whether to add the next or previous line. Defaults to
  `true`.

### :cmd: `select_to_mark`

Selects the text between the current position of each one of the current
carets and the marked position. Each caret is matched with each mark
in order of occurrence, and is moved to the beginning of its selection.

If any number of selections overlap, they are joined and, of all the
carets corresponding to each one of the joined selections, only the one
occurring first in the file is preserved.

If the number of current carets is less or equal to the number of marks,
the remaining marks in order are ignored. Conversely, if currently there
are more carets than marks, the first relevant selections are produced.
Of all extra marks, those contained in the selections are removed, and
the rest of them are left where they are, without triggering a selection
from their position.

### :cmd: `set_build_system`

Changes the current build system.

- **file** (String): Path to the build system. If empty, Sublime Text tries
  to automatically find an appropriate build systems from specified
  selectors.
- **index** (Int): Used in the **Tools | Build System** menu but otherwise
  probably not useful.

### :cmd: `set_layout`

Changes the group layout of the current window. This command uses the same
pattern as [`Window.set_layout`][], see there for a list and
explanation of parameters.

### :cmd: `set_line_ending`

Changes the line endings of the current file.

- **type** (Enum): *windows*, *unix*, *cr*

### :cmd: `set_mark`

Marks the position of each caret in the current file. If any marks have
already been set in that file, they are removed.

### :cmd: `set_setting`

Set the value of a setting. This value is view-specific.

- **setting** (String): The name of the setting to changed.
- **value** (\*): The value to set to.

### :cmd: `show_about_window`

I think you know what this does.

### :cmd: `show_at_center`

Scrolls the view to show the selected line in the middle of the view and
adjusts the horizontal scrolling if necessary.

### :cmd: `show_overlay`

Shows the requested overlay. Use the #### hide_overlay command to hide it.

- **overlay** (Enum):
  The type of overlay to show. Possible values:

  - *goto*: Show the [Goto Anything][] overlay.
  - *command_palette*: Show the [Command Palette][].

- **show_files** (Bool): If using the goto overlay, start by displaying
  files rather than an empty widget.
- **text** (String): The initial contents to put in the overlay.


### :cmd: `show_panel`

Shows a panel.

- **panel** (Enum): Values: *incremental_find*, *find*, *replace*,
  *find_in_files*, *console* or *output.\<panel_name\>*.
- **pattern** (String): The search string/pattern to add to the _Find:_ field. _(ST 4123+)_
- **replace_pattern** (String): The replacement string to add to the _Replace:_ field. _(ST 4123+)_
- **reverse** (Bool): Whether to search backwards in the buffer.
- **toggle** (Bool): Whether to hide the panel if it's already visible.
- **highlight** (Bool): Whether to highlight find results. _(ST 4107+)_
- **in_selection** (Bool): Whether to search within current selection only. _(ST 4107+)_
- **preserve_case** (Bool): Whether to preserve original casing when replacing text. _(ST 4107+)_
- **regex** (Bool): Whether to perform regular expression matching. _(ST 4107+)_
- **use_gitignore** (Bool): Whether to exclude git-ignored files from `find_in_files` search run. _(ST4107+)_
- **whole_word** (Bool): Whether to search for whole words only. _(ST4107+)_
- **wrap** (Bool): Whether to continue search at the beginning of a document if end of file is reached. _(ST4107+)_

### :cmd: `show_scope_name`

Shows the name for the caret's scope in the status bar.


### :cmd: `single_selection`

Collapses multiple selections into a single selection.

### :cmd: `slurp_find_string`

Copies the current selection or word into the "find" field of the find
panel.

### :cmd: `slurp_replace_string`

Copies the current selection or word into the "replace" field of the find
and replace panel.

### :cmd: `soft_redo`

Redoes each action stepping through granular edits.

### :cmd: `soft_undo`

Undoes each action stepping through granular edits.

### :cmd: `sort_lines`

Sorts lines.

- **case_sensitive** (Bool): Whether the sort should be case sensitive.

### :cmd: `sort_selection`

Sorts lines in selection.

- **case_sensitive** (Bool): Whether the sort should be case sensitive.

### :cmd: `split_selection_into_lines`

Splits the selection into multiple selections, one on each line.

### :cmd: `swap_case`

Swaps the case of each character in the selection.

### :cmd: `swap_line_down`

Swaps the current line with the line below.

### :cmd: `swap_line_up`

Swaps the current line with the line above.

### :cmd: `swap_with_mark`

Marks all the current carets' positions, removes those carets, and sets
new carets at the previously marked positions, if any.

### :cmd: `switch_file`

Switches between two files with the same name and different extensions.

- **extensions** (String): Extensions (without leading dot) for which
  switching will be enabled.

### :cmd: `title_case`

Capitalizes the selection's first character and turns the rest into lower
case.

### :cmd: `toggle_bookmark`

Sets or unsets a bookmark for the active region(s). (Bookmarks can be
accessed via the regions API using `"bookmarks"` as the key.)

### :cmd: `toggle_comment`

Comments or uncomments the active lines, if available.

- **block** (Bool): Whether to insert a block comment.

### :cmd: `toggle_distraction_free`

Toggles distraction free mode on or off.

### :cmd: `toggle_full_screen`

Toggles full screen mode on or off.

### :cmd: `toggle_minimap`

Shows or hides the minimap.

### :cmd: `toggle_overwrite`

Toggles overwriting on or off.

### :cmd: `toggle_record_macro`

Starts or stops the macro recorder.

### :cmd: `toggle_save_all_on_build`

Toggles whether all open files should be saved before starting the build.

### :cmd: `toggle_setting`

Toggles the value of a boolean setting. This value is view-specific.

- **setting** (String): The name of the setting to be toggled.

### :cmd: `toggle_show_open_files`

Shows ot hides the open files in the sidebar.

### :cmd: `toggle_side_bar`

Shows or hides the sidebar.

### :cmd: `toggle_status_bar`

Shows or hides the status bar.

### :cmd: `toggle_tabs`

Shows or hides the tab bar.

### :cmd: `transpose`

Makes selections or characters swap places.

With selection: The contents of the selected regions are circulated.
Without selection: Swaps adjacent characters and moves the caret forward by 1.

### :cmd: `undo`

Undoes the latest action.

### :cmd: `unexpand_tabs`

XXX

- **set_translate_tabs** (Bool)

### :cmd: `unfold_all`

Unfolds all folded regions.

### :cmd: `unfold`

Unfolds all folded regions in the selection or the current line if there is none.

### :cmd: `unindent`

Unindents selection.

### :cmd: `upper_case`

Makes the selection upper case.

### :cmd: `wrap_lines`

Wraps lines. By default, it wraps lines at the first ruler's column.

- **width** (Int): Specifies the column at which lines should be wrapped.

### :cmd: `yank`

XXX

<!-- Some regex-related and search-related commands missing. They don't seem to
be too useful. -->

## Discovering Commands

There are several ways to discover a command's name in order to use it as a key
binding, in a macro, as a menu entry or in a plugin.

- Browsing the default key bindings at **Preferences | Key Bindings - Default**.
  If you know the key binding whose command you want to inspect, you can just
  search for it using the [search panel][]. This, of course, also works in the
  opposite direction.

[search panel]: /guide/usage/search-and-replace.md

- `sublime.log_commands(True)`

  Running the above in the :console: will tell Sublime Text to print the command's
  name in the console whenever a command is run. You can practically just enter
  this, do whatever is needed to run the command you want to inspect and then
  look at the console. It will also print the passed arguments so you can
  basically get all the information you need from it. When you are done, just
  run the function again with `False` as parameter.

- Inspecting `.sublime-menu` files. If your command is run by a menu item,
  browse the default menu file at `Packages/Default/Main.sublime-menu`.
  You will find them quick enough once you take a look at it, or see the [menu documentation][].

[menu documentation]: ./menus.md

- Similar to menus, you can do exactly the same with `.sublime-command` files.
  See [completions][] for some documentation on completion
  files.

[completions]: ./completions.md
[Goto Anything]: /guide/usage/file-management/navigation.md#goto-anything
[Command Palette]: /guide/extensibility/command_palette.md
[sublime-package archives]: /guide/extensibility/packages.md#package-types
[`Window.set_layout`]: ./python_api.md#window-set-layout

# /Part 35. docs.sublimetext.io/docs/reference/command_palette.md

---
title: Command Palette
---

The command palette is fed entries with `.sublime-commands` files.


## File Format

Here's an excerpt from `Packages/Default/Default.sublime-commands`:

```json
[
    { "caption": "Project: Save As", "command": "save_project_and_workspace_as" },
    { "caption": "Project: Close", "command": "close_workspace" },
    { "caption": "Project: Add Folder", "command": "prompt_add_folder" },

    {
        "caption": "Preferences: Settings",
        "command": "edit_settings", "args":
        {
            "base_file": "${packages}/Default/Preferences.sublime-settings",
            "default": "// Settings in here override those in \"Default/Preferences.sublime-settings\",\n// and are overridden in turn by syntax-specific settings.\n{\n\t$0\n}\n"
        }
    },

    { "caption": "Preferences: Browse Packages", "command": "open_dir", "args": {"dir": "$packages"} },

    { "caption": "Permute Lines: Reverse", "command": "permute_lines", "args": {"operation": "reverse"} },
    { "caption": "Permute Lines: Unique", "command": "permute_lines", "args": {"operation": "unique"} },
    { "caption": "Permute Lines: Shuffle", "command": "permute_lines", "args": {"operation": "shuffle"} },
]
```

`caption`
: Text for display in the command palette.

`command`
: Command to be executed.

`args`
: Arguments to pass to `command`. 

  Note that the special snippet-like variable `${packages}`
  is only interpreted by certain :command:commands:.


## How to Use the Command Palette

1. Press <Key k="ctrl+shift+p" />
1. Select command

Entries are filtered by current context. Not all entries will be visible at all
times.

# /Part 36. docs.sublimetext.io/docs/reference/comments.md

---
title: Comments
---

Sublime Text provides a default command
to comment and uncomment lines of code.
This command can be enabled
for any type of file using metadata files.


## File Format

Comment markers are defined using metadata files.
However, because metadata for comment markers
is commonly required by packages,
it's discussed separately in this page
for convenience.

Just as regular metadata files,
comment metadata files
have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

::: seealso
[Metadata](./metadata.md) Detailed documentation on metadata.
:::


## Example

Let's see a basic example
of a comment metadata file:

```xml {12,16,18}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>name</key>
   <string>Miscellaneous</string>
   <key>scope</key>
   <string>source.python</string>
   <key>settings</key>
   <dict>
      <key>shellVariables</key>
      <array>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START</string>
            <key>value</key>
            <string># </string>
         </dict>
      </array>
   </dict>
</dict>
</plist>
```
In the example we've highlighted
some parts that are specific
to comment metadata files.


## Structure of a Comment Metadata File

All comment metadata files
share the same topmost structure,
which is inherited from Property List format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   ...
</dict>
</plist>
```

These are all the valid elements
in a comment metadata file:

`name`
: **Optional.**
  Name of the metadata.
  Ignored by Sublime Text.

  ```xml
  <key>name</key>
  <string>Shell Variables</string>
  ```

`scope`
: **Required.**
  Comma-separated list of scope selectors
  to determine in which context the metadata
  should be active.

  In most cases you'll use
  the base scope for a particular syntax.

  ```xml
  <key>scope</key>
  <string>source.python</string>
  ```

``settings``
: **Required.**
  A container for settings.

  ```xml
  <key>settings</key>
  <dict>
   ...
  </dict>
  ```

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  ```xml
  <key>uuid</key>
  <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
  ```

## `settings` Subelements

`shellVariables`
: Required.
  Container for comment markers.

  ```xml
  <key>shellVariables</key>
  <array>
  ...
  </array>
  ```

## `shellVariables` Subelements

::: tip Note
The `shellVariables` array
may contain any arbitrary subelement,
but here we're only concerned
with those related to comments.
See [Shell Variables][] for details.
:::

[Shell Variables]: ./metadata.md#shell-variables

`TM_COMMENT_START`
: **Required.**
  Defines a default comment marker.

  To define additional comment markers,
  name them `TM_COMMENT_START_2`, `TM_COMMENT_START_3`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_START</string>
  <key>value</key>
  <string># </string>
  </dict>
  ```

`TM_COMMENT_END`
: **Optional.**
  Defines an end comment marker.
  If omitted,
  `TM_COMMENT_START` will be treated as a line comment marker.

  If present
  and a corresponding start comment marker
  can be found,
  the pair is treated as block comment markers.

  To define additional end comment markers,
  name them `TM_COMMENT_END_2`, `TM_COMMENT_END_3`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_END_2</string>
  <key>value</key>
  <string>*/</string>
  </dict>
  ```

`TM_COMMENT_DISABLE_INDENT`
: **Optional.**
  Valid values are `yes` and `no`.
  Disables indentation for the `TM_COMMENT_START`
  marker.

  To target other group of markers,
  use `TM_COMMENT_DISABLE_INDENT_2`, etc.

  ```xml
  <dict>
  <key>name</key>
  <string>TM_COMMENT_DISABLE_INDENT</string>
  <key>value</key>
  <string>yes</string>
  </dict>
  ```

## Example

Here's a more complete example
of a comment metadata file
using some of the features just discussed:

```xml {15,21}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>name</key>
   <string>Comments</string>
   <key>scope</key>
   <string>source.c</string>
   <key>settings</key>
   <dict>
      <key>shellVariables</key>
      <array>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START</string>
            <key>value</key>
            <string>// </string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START_2</string>
            <key>value</key>
            <string>/*</string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_END_2</string>
            <key>value</key>
            <string>*/</string>
         </dict>
      </array>
   </dict>
</dict>
</plist>
```

## Related Keyboard Shortcuts

Once comment metadata has been defined,
you can use standard key bindings
to comment and uncomment lines of code.

| Description          | Shortcut                 |
| -------------------- | ------------------------ |
| Toggle line comment  | <Key k="ctrl+/" />       |
| Toggle block comment | <Key k="ctrl+shift+/" /> |

To bind a shortcut to prefer a different comment variant,
e.g., `TM_COMMENT_START_3`,
add a `variant` argument to the `toggle_comment` command
in your `Default.sublime-keymap`

```json
{"keys":["ctrl+forward_slash"], "command":"toggle_comment","args":{"block":true, "variant":3}},
```

# /Part 37. docs.sublimetext.io/docs/reference/completions.md

---
title: Completions Files
---

::: seealso
[Completions](/guide/extensibility/completions.md)
: Introduction to the different types of completions
:::

Completions aren't limited to completions files,
because other sources contribute
to the completions list
(see above).
However, the most explicit way
Sublime Text provides you to feed it completions
is by means of `.sublime-completions` files.

This topic only deals with
the format of a `.sublime-completions` file.


## File Format

Completions are JSON files
with the `.sublime-completions` extension.
Entries in completions files can contain
either snippet-like strings or plain text.


### Example

Here's an example (with HTML completions):

```json
{
   "scope": "text.html - source - meta.tag, punctuation.definition.tag.begin",

   "completions":
   [
      { "trigger": "a", "contents": "<a href=\"$1\">$0</a>" },
      { "trigger": "abbr\t<abbr>", "contents": "<abbr>$0</abbr>" },
      { "trigger": "acronym", "contents": "<acronym>$0</acronym>" }
   ]
}
```

**scope**
: Determines when the completions list
  will be populated with this list of completions.

  See [Scopes][] for more information.

[Scopes]: /guide/extensibility/syntaxdefs.md#scopes 

**completions**
: Array of *completions*.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Types of Completions

### Plain Strings

Plain strings are equivalent to
an entry where the `trigger`
is identical to the `contents`:

```json
"foo"
// is equivalent to:
{ "trigger": "foo", "contents": "foo" }
```


### Trigger-based Completions

```json
{ "trigger": "foo", "contents": "foobar" },
{ "trigger": "foo\ttest", "contents": "foobar" }
```

**trigger**
: Text that will be displayed in the completions list
  and will cause the `contents`
  to be inserted when chosen.

  You can use a `\t` tab character
  to add an *annotation* for the preceding trigger.
  The annotation will be displayed right-aligned,
  slightly grayed
  and does not affect the trigger itself.

**contents**
: Text to be inserted in the buffer.
  Supports the same string interpolation features
  as snippets.

  Refer to [Snippet Features][].

[Snippet Features]: /guide/extensibility/snippets.md#snippet-features

::: tip
If you want a literal `$`,
you have to escape it like this: `\\$`
(double backslashes are needed
because we are within a JSON string).
:::

# /Part 38. docs.sublimetext.io/docs/reference/keyboard_shortcuts_osx.md

---
title: Keyboard Shortcuts - OSX
---

::: warning
This topic is a draft and may contain wrong information.
:::

## Editing

| Keypress                                 | Command                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| <Key k="command+x" />                    | Cut line                                                                 |
| <Key k="command+enter" />                | Insert line after                                                        |
| <Key k="command+shift+enter" />          | Insert line before                                                       |
| <Key k="command+ctrl+up" />              | Move line/selection up                                                   |
| <Key k="command+ctrl+down" />            | Move line/selection down                                                 |
| <Key k="command+l" />                    | Select line - Repeat to select next lines                                |
| <Key k="command+d" />                    | Select word - Repeat to select next occurrence                           |
| <Key k="ctrl+command+g" />               | Select all occurrences of current selection                              |
| <Key k="ctrl+shift+up" />                | Extra cursor on the line above                                           |
| <Key k="ctrl+shift+down" />              | Extra cursor on the line below                                           |
| <Key k="ctrl+m" />                       | Jump to closing parentheses Repeat to jump to opening parentheses        |
| <Key k="ctrl+shift+m" />                 | Select all contents of the current parentheses                           |
| <Key k="ctrl+a" />                       | Move to beginning of line                                                |
| <Key k="command+left" />                 | Move to beginning of text on line                                        |
| <Key k="ctrl+e, command+right" />        | Move to end of line                                                      |
| <Key k="command+k, command+k" />         | Delete from cursor to end of line                                        |
| <Key k="command+k, command+backspace" /> | Delete from cursor to start of line                                      |
| <Key k="command+]" />                    | Indent current line(s)                                                   |
| <Key k="command+[" />                    | Un-indent current line(s)                                                |
| <Key k="command+shift+d" />              | Duplicate line(s)                                                        |
| <Key k="command+j" />                    | Join line below to the end of the current line                           |
| <Key k="command+/" />                    | Comment/un-comment current line                                          |
| <Key k="command+option+/" />             | Block comment current selection                                          |
| <Key k="command+y" />                    | Redo, or repeat last keyboard shortcut command                           |
| <Key k="command+shift+v" />              | Paste and indent correctly                                               |
| <Key k="ctrl+space" />                   | Select next auto-complete suggestion                                     |
| <Key k="command+u" />                    | Soft undo; jumps to your last change before undoing change when repeated |
| <Key k="ctrl+shift+up" />                | Column selection up                                                      |
| <Key k="ctrl+shift+down" />              | Column selection down                                                    |
| <Key k="ctrl+shift+w" />                 | Wrap Selection in html tag                                               |
| <Key k="ctrl+shift+k" />                 | Delete current line of cursor                                            |


## Navigation/Goto Anywhere

| Keypress                         | Command                   |
| -------------------------------- | ------------------------- |
| <Key k="command+p, command+t" /> | Quick-open files by name  |
| <Key k="command+r" />            | Goto symbol               |
|                                  | Goto word in current file |
| <Key k="ctrl+g" />               | Goto line in current file |


## General

| Keypress                         | Command                      |
| -------------------------------- | ---------------------------- |
| <Key k="command+shift+p" />      | Command Palette              |
| <Key k="ctrl+`" />               | Python Console               |
| <Key k="ctrl+command+f" />       | Toggle fullscreen mode       |
| <Key k="ctrl+shift+command+f" /> | Toggle distraction-free mode |
| <Key k="command+k, command+b" /> | Toggle side bar              |
| <Key k="ctrl+shift+p" />         | Show scope in status bar     |


## Find/Replace

| Keypress                     | Command          |
| -----------------------      | ---------------- |
| <Key k="command+f" />        | Find             |
| <Key k="command+option+f" /> | Replace          |
| <Key k="command+shift+f" />  | Find in files    |
| <Key k="command+i" />        | Incremental Find |


## Scrolling

| Keypress                 | Command                                |
| ------------------------ | -------------------------------------- |
| <Key k="ctrl+v" />       | Scroll down one page                   |
| <Key k="ctrl+l" />       | Center current line vertically in page |
| <Key k="command+down" /> | Scroll to end of file                  |
| <Key k="command+up" />   | Scroll to start of file                |


## Tabs

| Keypress                     | Command                           |
| ---------------------------- | --------------------------------- |
| <Key k="command+shift+t" />  | Open last closed tab              |
| <Key k="command+[1-9]" />    | Jump to tab in current group      |
| <Key k="command+0" />        | Jump to 10th tab in current group |
| <Key k="command+shift+[" />  | Cycle left through tabs           |
| <Key k="command+shift+]" />  | Cycle right through tabs          |
| <Key k="ctrl+tab" />         | Cycle up through recent tabs      |
| <Key k="shift+ctrl+tab" />   | Cycle down through recent tabs    |
|                              | Find in files                     |


## Split window


| Keypress                     | Command                       |
| ---------------------------- | ----------------------------- |
| <Key k="command+option+1" /> | Revert view to single column  |
| <Key k="command+option+2" /> | Split view into two columns   |
| <Key k="command+option+3" /> | Split view into three columns |
| <Key k="command+option+4" /> | Split view into four columns  |
| <Key k="command+option+5" /> | Set view to grid (4 groups)   |
| <Key k="ctrl+[1-4]" />       | Jump to group                 |
| <Key k="ctrl+shift+[1-4]" /> | Move file to specified group  |


## Bookmarks


| Keypress                     | Command           |
| ---------------------------- | ----------------- |
| <Key k="command+f2" />       | Toggle bookmark   |
| <Key k="f2" />               | Next bookmark     |
| <Key k="shift+f2" />         | Previous bookmark |
| <Key k="shift+command+f2" /> | Clear bookmarks   |


## Text manipulation


| Keypress                                         | Command                                       |
| ------------------------------------------------ | -----------------------------                 |
| <Key k="command+k, command+u" />                 | Transform to Uppercase                        |
| <Key k="command+k, command+l" />                 | Transform to Lowercase                        |
| <Key k="command+ctrl+up, command+ctrl+down" />   | Clip text upwards / downwards                 |

# /Part 39. docs.sublimetext.io/docs/reference/keyboard_shortcuts_win.md

---
title: Keyboard Shortcuts - Windows/Linux
---

::: warning
This topic is a draft and may contain wrong information.
:::

## Editing

| Keypress                           | Command                                                                                                                                     |
| ---------------------------------- | ------------------------------------------------------------------------                                                                    |
| <Key k="ctrl+x" />                 | Cut line                                                                                                                                    |
| <Key k="ctrl+enter" />             | Insert line after                                                                                                                           |
| <Key k="ctrl+shift+enter" />       | Insert line before                                                                                                                          |
| <Key k="ctrl+shift+up" />          | Move line/selection up                                                                                                                      |
| <Key k="ctrl+shift+down" />        | Move line/selection down                                                                                                                    |
| <Key k="ctrl+l" />                 | Select line - Repeat to select next lines                                                                                                   |
| <Key k="ctrl+d" />                 | Select word - Repeat select others occurrences                                                                                              |
| <Key k="ctrl+m" />                 | Jump to closing parentheses Repeat to jump to opening parentheses                                                                           |
| <Key k="ctrl+shift+m" />           | Select all contents of the current parentheses                                                                                              |
| <Key k="ctrl+shift+k" />           | Delete Line                                                                                                                                 |
| <Key k="ctrl+k, ctrl+k" />         | Delete from cursor to end of line                                                                                                           |
| <Key k="ctrl+k, ctrl+backspace" /> | Delete from cursor to start of line                                                                                                         |
| <Key k="ctrl+]" />                 | Indent current line(s)                                                                                                                      |
| <Key k="ctrl+[" />                 | Un-indent current line(s)                                                                                                                   |
| <Key k="ctrl+shift+d" />           | Duplicate line(s)                                                                                                                           |
| <Key k="ctrl+j" />                 | Join line below to the end of the current line                                                                                              |
| <Key k="ctrl+/" />                 | Comment/un-comment current line                                                                                                             |
| <Key k="ctrl+shift+/" />           | Block comment current selection                                                                                                             |
| <Key k="ctrl+y" />                 | Redo, or repeat last keyboard shortcut command                                                                                              |
| <Key k="ctrl+shift+v" />           | Paste and indent correctly                                                                                                                  |
| <Key k="ctrl+space" />             | Select next auto-complete suggestion                                                                                                        |
| <Key k="ctrl+u" />                 | soft undo; jumps to your last change before undoing change when repeated                                                                    |
| <Key k="alt+shift+w" />            | Wrap Selection in html tag                                                                                                                  |
| <Key k="alt+." />                  | Close current html tag                                                                                                                      |

## Windows

| Keypress                  | Command               |
| ------------------------- | --------------------- |
| <Key k="ctrl+alt+up" />   | Column selection up   |
| <Key k="ctrl+alt+down" /> | Column selection down |

## Linux

| Keypress                   | Command               |
| -------------------------  | --------------------- |
| <Key k="alt+shift+up" />   | Column selection up   |
| <Key k="alt+shift+down" /> | Column selection down |

## Navigation/Goto Anywhere

| Keypress           | Command                   |
| ------------------ | ------------------------- |
| <Key k="ctrl+p" /> | Quick-open files by name  |
| <Key k="ctrl+r" /> | Goto symbol               |
| <Key k="ctrl+;" /> | Goto word in current file |
| <Key k="ctrl+g" /> | Goto line in current file |

## General

| Keypress                     | Command                  |
| ---------------------------- | ------------------------ |
| <Key k="ctrl+shift+p" />     | Command prompt           |
| <Key k="ctrl+k, ctrl+b" />   | Toggle side bar          |
| <Key k="ctrl+shift+alt+p" /> | Show scope in status bar |

## Find/Replace

| Keypress                 | Command       |
| ------------------------ | ------------- |
| <Key k="ctrl+f" />       | Find          |
| <Key k="ctrl+h" />       | Replace       |
| <Key k="ctrl+shift+f" /> | Find in files |

## Tabs

| Keypress                   | Command                                                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <Key k="ctrl+shift+t" />   | Open last closed tab                                                                                                                        |
| <Key k="ctrl+pageup" />    | Cycle up through tabs                                                                                                                       |
| <Key k="ctrl+pagedown" />  | Cycle down through tabs                                                                                                                     |
| <Key k="ctrl+tab" />       | Switch to a previous tab, hold <Key k="tab" /> and repeat <Key k="tab" /> to cycle through previous tabs                                    |
| <Key k="ctrl+shift+tab" /> | Switch in reverse order to a previous tab, hold <Key k="ctrl+shift" /> and repeat <Key k="tab" /> to cycle through previous tabs in reverse |
| <Key k="ctrl+w" />         | Close current tab                                                                                                                           |
| <Key k="alt+[1-9]" />      | Switch to tab number                                                                                                                        |

## Split window

| Keypress                     | Command                       |
| ---------------------------- | ----------------------------- |
| <Key k="alt+shift+1" />      | Revert view to single column  |
| <Key k="alt+shift+2" />      | Split view into two columns   |
| <Key k="alt+shift+3" />      | Split view into three columns |
| <Key k="alt+shift+4" />      | Split view into four columns  |
| <Key k="alt+shift+5" />      | Set view to grid (4 groups)   |
| <Key k="alt+shift+8" />      | Split view into two rows      |
| <Key k="ctrl+[1-4]" />       | Jump to group                 |
| <Key k="ctrl+shift+[1-4]" /> | Move file to specified group  |

## Bookmarks

| Keypress                  | Command           |
| ------------------------- | ----------------- |
| <Key k="ctrl+f2" />       | Toggle bookmark   |
| <Key k="F2" />            | Next bookmark     |
| <Key k="shift+f2" />      | Previous bookmark |
| <Key k="ctrl+shift+f2" /> | Clear bookmarks   |

## Text manipulation

| Keypress                   | Command                 |
| -------------------------- | ----------------------- |
| <Key k="ctrl+k, ctrl+u" /> | Transform to upper case |
| <Key k="ctrl+k, ctrl+l" /> | Transform to lower case |

# /Part 40. docs.sublimetext.io/docs/reference/key_bindings.md

---
title: Key Bindings
---

Key bindings map key presses to commands.

::: seealso
[Official documentation for Key Bindings](https://www.sublimetext.com/docs/key_bindings.html)
:::


## File Format

Key bindings are stored in `.sublime-keymap` files
and defined in JSON.
Keymap files may be located anywhere in a package.


### Naming Keymap Files

Any keymap named `Default.sublime-keymap`
will always be applied in all platforms.

Additionally, each platform
can optionally have its own keymap:

- `Default (Windows).sublime-keymap`
- `Default (OSX).sublime-keymap`
- `Default (Linux).sublime-keymap`

Sublime Text will ignore any `.sublime-keymap` file
whose name doesn't follow the patterns just described.


### Structure of a Key Binding

Keymaps are arrays of key bindings.
These are all valid elements in a key binding:

`keys`
: An array of case-sensitive keys.
  Modifiers can be specified
  with the `+` sign.
  You can build chords
  by adding elements to the array
  (for example, `["ctrl+k","ctrl+j"]`).
  Ambiguous chords are resolved
  with a timeout.

`command`
: Name of the command to be executed.

`args`
: Dictionary of arguments
  to be passed to `command`.
  Keys must be names
  of parameters to `command`.

`context`
: Array of conditions
  that determine a particular *context*.
  All conditions must evaluate to `true`
  for the context to be active.
  See [Structure of a Context][] below
  for more information.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


Here's an example:

```json
{ "keys": ["shift+enter"], "command": "insert_snippet", "args": {"contents": "\n\t$0\n"}, "context":
   [
      { "key": "setting.auto_indent", "operator": "equal", "operand": true },
      { "key": "selection_empty", "operator": "equal", "operand": true, "match_all": true },
      { "key": "preceding_text", "operator": "regex_contains", "operand": "\\{$", "match_all": true },
      { "key": "following_text", "operator": "regex_contains", "operand": "^\\}", "match_all": true }
   ]
}
```


[Structure of a Context]: #structure-of-a-context

### Structure of a Context

`key`
: Name of the context
  whose value you want to query.

`operator`
: Type of test to perform against `key`'s value.
  Defaults to `equal`.

`operand`
: The result returned by `key`
  is tested against this value.

`match_all`
: Requires the test to succeed
  for all selections.
  Defaults to `false`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Context Keys

Arbitrary keys may be provided by plugins.
Thus, this section only features keys
provided by Sublime Text itself.

`auto_complete_visible`
: Returns `true`
  if the autocomplete list
  is visible.

`has_next_field`
: Returns `true`
  if a next snippet field
  is available.

`has_prev_field`
: Returns `true`
  if a previous snippet field
  is available.

`last_command`
: Returns the name of the last command run.

`num_selections`
: Returns the number of selections.

`overlay_visible`
: Returns `true`
  if any overlay is visible.

`panel_visible`
: Returns `true`
  if any panel is visible.

`following_text`
: Test against the selected text and the text
  following it until the end of the line.

`preceding_text`
: Test against the text on the line up to and
  including the selection.

`selection_empty`
: Returns `true`
  if the selection
  is an empty region.

`setting.x`
: Returns the value of the `x` setting.
  `x` can be any string.

`text`
: Restricts the test
  to the selected text.

`selector`
: Returns the name of the current scope.

`panel_has_focus`
: Returns `true`
  if a panel
  has input focus.

`panel`
: Returns `true`
  if the panel given as `operand`
  is visible.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


#### Context Operators

`equal`, `not_equal`
: Test for equality.

`regex_match`, `not_regex_match`
: Match against a regular expression (full match).

`regex_contains`, `not_regex_contains`
: Match against a regular expression (partial match).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Bindable Keys

Keys in key bindings may be specified
literally by symbol
or by a name for a special key.
Symbols cannot be combined with modifiers.
For example,
`B` will catch any key sequence inserting a `B` glyph,
but `ctrl+B` is invalid
and needs to be written as `ctrl+shift+b` instead.

Here's the list of the names for special keys:

| Keys           |                     |       |
| -------------- | ------------------- | ----- |
| `up`           | `keypad0`           | `f1`  |
| `down`         | `keypad1`           | `f2`  |
| `right`        | `keypad2`           | `f3`  |
| `left`         | `keypad3`           | `f4`  |
| `insert`       | `keypad4`           | `f5`  |
| `home`         | `keypad5`           | `f6`  |
| `end`          | `keypad6`           | `f7`  |
| `pageup`       | `keypad7`           | `f8`  |
| `pagedown`     | `keypad8`           | `f9`  |
| `backspace`    | `keypad9`           | `f10` |
| `delete`       | `keypad_period`     | `f11` |
| `tab`          | `keypad_divide`     | `f12` |
| `enter`        | `keypad_multiply`   | `f13` |
| `pause`        | `keypad_minus`      | `f14` |
| `escape`       | `keypad_plus`       | `f15` |
| `space`        | `keypad_enter`      | `f16` |
| `clear`        |                     | `f17` |
| `sysreq`       | `browser_back`      | `f18` |
| `break`        | `browser_forward`   | `f19` |
| `context_menu` | `browser_refresh`   | `f20` |
|                | `browser_stop`      | `f21` |
|                | `browser_search`    | `f22` |
|                | `browser_favorites` | `f23` |
|                | `browser_home`      | `f24` |


### Modifiers

* `shift`
* `ctrl` or `control`
* `alt`
* `super` (**Windows**: Windows key, **MacOS**: Command Key)
* `primary` (**Windows**: Control key, **MacOS**: Command Key)
* `command` (**MacOS only**)
* `option` (**MacOS only**: same as `alt`)


### The Any Character Binding

Adding a binding for `<character>`
(with the angled brackets and no modifiers)
causes Sublime Text to bind the given command
for **all** glyphs provided to it.
You should thus only use this binding
with an accompanying context filter.

The specified command will then receive
an additional `character` argument
containing the glyph that was captured.


### Warning about Bindable Keys

If you're developing a package,
keep this in mind:

* <kbd>Ctrl+Alt+\<alphanum\></kbd> should never be used in any Windows key bindings.
* <kbd>Option+\<alphanum\></kbd> should never be used in any macOS key bindings.

In both cases,
the user's ability
to insert non-ASCII characters
would be compromised otherwise.

End-users are free to remap
any key combination.


## Command Mode

Sublime Text provides a `command_mode` setting
to prevent key presses
from being sent to the buffer.
This is useful, for example,
to emulate Vim's modal behavior.

Key bindings not intended for command mode
(generally, all of them)
should include a context like this:

```json
{"key": "setting.command_mode", "operand": false}
```

This way, plugins legitimately using command mode
will be able to define appropriate key bindings
without interference.


## Order of Preference for Key Bindings

Key bindings in a keymap file are evaluated
from the bottom to the top.
The first matching context wins.


## Keeping Keymaps Organized

Sublime Text ships with default keymaps
under `Packages/Default`.
Other packages may include
keymap files of their own.

The recommended storage location
for your personal keymap files is `Packages/User`.

::: seealso
[Merging and Order of Precedence](/guide/extensibility/packages.md#merging-and-order-of-precedence)
:::


## International Keyboards

Due to the way Sublime Text
maps key names to physical keys,
key names may not correspond to
physical keys in keyboard layouts
other than US English.


## Troubleshooting

To enable logging
related to keymaps, [see the documentation][api-docs] for:

- sublime.log_commands(flag)
- sublime.log_input(flag)

These may help with debugging keymaps.
When a key chord does not trigger an input log,
another application or your operating system
is likely grabbing the key
before it can reach Sublime Text.

[api-docs]: https://www.sublimetext.com/docs/api_reference.html

# /Part 41. docs.sublimetext.io/docs/reference/menus.md

---
title: Menus
---

::: seealso
[Documentation on menus][menu-guide]
: Explains how menus work and what you can do with them.
:::


## File Format

| Format        | Description                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Format**    | JSON (with comments)                                                                                                     |
| **Extension** | `.sublime-menu`                                                                                                          |
| **Name**      | One out of the list of available menus. See [Available Menus][] for the complete name list and what menu they represent. |
| **Location**  | Any under `Packages`                                                                                                     |
| **Content**   | A list of [*Menu Item* objects](#menu-item-objects)                                                                      |

[Available Menus]: /guide/customization/menus.md#available-menus

### Example

The following is an excerpt
from the default `Main.sublime-menu` file.

```json
[
    {
        "caption": "Edit",
        "mnemonic": "E",
        "id": "edit",
        "children":
        [
            { "command": "undo", "mnemonic": "U" },
            { "command": "redo_or_repeat", "mnemonic": "R" },
            {
                "caption": "Undo Selection",
                "children":
                [
                    { "command": "soft_undo" },
                    { "command": "soft_redo" }
                ]
            },
            { "caption": "-", "id": "clipboard" },
            { "command": "copy", "mnemonic": "C" },
            { "command": "cut", "mnemonic": "t" },
            { "command": "paste", "mnemonic": "P" },
            { "command": "paste_and_indent", "mnemonic": "I" },
            { "command": "paste_from_history", "caption": "Paste from History" }
        ]
    }
]
```


## *Menu Item* Objects

[Menu items][] may have the following properties.

[Menu items]: /guide/customization/menus.md#menu-items

Unless you are referencing an existing item via ID,
each menu item must define either
`children`, `command` or `caption`.

`command`
: Name of the command to be called
  when the menu item is selected.

`args`
: Object of arguments to the command.
  For **Side Bar** and **Side Bar Mount Point** menus,
  this is extended by a `files` argument
  that contains all selected items in the sidebar as a list.

`caption`
: Text to be displayed in the menu.
  A single hyphen (`-`) turns the item
  into a [Menu Separator][].

`children`
: List of [*Menu Item* objects](#menu-item-objects) that are displayed
  when the item is hovered.
  Overrides existence of `command` property.

`mnemonic`
: A single character used for menu accelerators.
  The character must be contained in the caption
  and is case-sensitive.

`id`
: A unique string identifier for the menu item.
  This can be used to extend menu sections or sub-menu
  or to alter a menu item entirely.

  Refer to the [main documentation][item-ids] on how this works.

`platform`
: The platform name for which the menu entry should be made
  visible. Valid values are `OSX`, `Linux` & `Windows`.
  It also supports negation in the form `!OSX` which means
  to show the menu entry for all platforms except `OSX`.

[menu-guide]: /guide/customization/menus.md
[Menu Separator]: /guide/customization/menus.md#separators
[item-ids]: /guide/customization/menus.md#item-ids

# /Part 42. docs.sublimetext.io/docs/reference/metadata.md

---
title: Metadata Files
---

Metadata are parameters
that can be assigned to certain text sections
using scope selectors.

<!-- TODO ref scope selectors -->

These paremeters can be used
for many purposes; for example:

- specifying the current comment markers,
  even within embedded source code,
  so that you can toggle comments in any syntax,
- defining rules for auto-indentation,
- marking symbols that Sublime Text will allow you to
  [browse to quickly][goto-anything].

<!-- TODO Link to the separate comment and symbol sections from here -->

Furthermore, snippets can access metadata
declared in the `shellVariables` setting,
which allows you to create a snippet
that has different contents
depending on where it's used.

[goto-anything]: /guide/usage/file-management/navigation.md#goto-anything


## File Format

Metadata files have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

Metadata files are inherited from TextMate.


## Example

Here's an example of a metadata file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   <key>name</key>
   <string>JavaScript Metadata</string>
   <key>scope</key>
   <string>source.js</string>
   <key>settings</key>
   <dict>
      <key>decreaseIndentPattern</key>
      <string>^(.*\*/)?\s*\}.*$</string>
      <key>increaseIndentPattern</key>
      <string>^.*\{[^}"']*$</string>

      <key>bracketIndentNextLinePattern</key>
      <string>(?x)
      ^ \s* \b(if|while|else)\b [^;]* $
      | ^ \s* \b(for)\b .* $
      </string>
      <key>shellVariables</key>
      <array>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START</string>
            <key>value</key>
            <string>// </string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_START_2</string>
            <key>value</key>
            <string>/*</string>
         </dict>
         <dict>
            <key>name</key>
            <string>TM_COMMENT_END_2</string>
            <key>value</key>
            <string>*/</string>
         </dict>
      </array>
   </dict>
   <key>uuid</key>
   <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
</dict>
</plist>
```

The example file combines
several types of metadata.


## Structure of a Metadata File

All metadata files share the same topmost structure,
which is inherited from the Property List format.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
   ...
</dict>
</plist>
```

Sublime Text uses the following topmost keys
in metadata files;
all others are ignored by default.

`name`
: **Optional.**
  Name of the metadata.
  Ignored by Sublime Text.

  ```xml
  <key>name</key>
  <string>Shell Variables</string>
  ```

`scope`
: **Required.**
  Scope selector to determine
  in which context the metadata should be available.

  ```xml
  <key>scope</key>
  <string>source.python</string>
  ```

`settings`
: **Required.**
  Container for settings.

  ```xml
  <key>settings</key>
  <dict>
  ...
  </dict>
  ```

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  ```xml
  <key>uuid</key>
  <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
  ```


## Subelements of `settings`

The `settings` element can contain
subelements for different purposes,
which will be grouped in the following sections.

Some subelements have certain functionality associated with them by default,
while others can only be accessed via the [API][].


### Indentation Options

Indentation options control aspects of the auto-indentation mechanism.

`increaseIndentPattern`
: *Regex.*
  If it matches on the current line,
  the next line will be indented one level further.

  ```xml
  <key>increaseIndentPattern</key>
  <string>insert regex here</string>
  ```

`decreaseIndentPattern`
: *Regex.*
  If it matches on the current line,
  the next line will be unindented one level.

  ```xml
  <key>decreaseIndentPattern</key>
  <string>insert regex here</string>
  ```

`bracketIndentNextLinePattern`
: *Regex.*
  If it matches on the current line,
  only the next line will be indented one level further.

  ```xml
  <key>bracketIndentNextLinePattern</key>
  <string>insert regex here</string>
  ```

`disableIndentNextLinePattern`
: *Regex.*
  If it matches on the current line,
  the next line will not be indented further.

  ```xml
  <key>disableIndentNextLinePattern</key>
  <string>insert regex here</string>
  ```

`unIndentedLinePattern`
: *Regex.*
  The auto-indenter will ignore
  lines matching this regex
  when computing the next line's indentation level.

  ```xml
  <key>unIndentedLinePattern</key>
  <string>insert regex here</string>
  ```


### Completions Options

Completion options control aspects of the completions mechanism.

`cancelCompletion`
: *Regex.*
  If it matches on the current line,
  supresses the autocomplete popup.

  ```xml
  <key>cancelCompletion</key>
  <string>insert regex here</string>
  ```


### Symbol Definitions

Documentation for symbol definitions
was moved to a separate page:
[Symbol Definition settings][].

[Symbol Definition settings]: ./symbols.md#settings-subelements


### Shell Variables

Shell variables are used for different purposes
and can be accessed from snippets.

<!-- TODO reference to section in snippets once added -->

Note that shell variables are defined
as dictionaries in an array,
and thus have a different format
from `settings` subelements.

`shellVariables`
: Container for "shell variables".

  ```xml
  <key>shellVariables</key>
  <array>
  ...
  </array>
  ```

#### `shellVariables` Subelements

Subelements of `shellVariables` are
dictionaries with `name` and `value` keys.

```xml
<dict>
   <key>name</key>
   <string>BOOK_OPENING</string>
   <key>value</key>
   <string>Once upon a time...</string>
</dict>
```

::: seealso
[Comments](./comments.md#shellvariables-subelements)
: Shell variables defining comment markers.
:::

[API]: #related-api-functions

## Related API Functions

To extract metadata information from plugin code,
you can use the `view.meta_info(key, point)`
API call.

# /Part 43. docs.sublimetext.io/docs/reference/mouse_bindings.md

---
title: Mouse Bindings
---

The mousemap files
(which have the extension `.sublime-mousemap`)
control what commands are executed
when a user performs an action with a mouse,
e.g. clicking a mouse button,
scrolling the scroll wheel,
etc.


## File Format

Mousmap files are JSON files,
following the naming schema of Keybindings.

Here is a small excerpt from `Default/Default (Windows).sublime-mousemap`:

```json
[
    // Basic drag select
    {
        "button": "button1", "count": 1,
        "press_command": "drag_select"
    },
    {
        "button": "button1", "count": 1, "modifiers": ["ctrl"],
        "press_command": "drag_select",
        "press_args": {"additive": true}
    },
    {
        "button": "button1", "count": 1, "modifiers": ["alt"],
        "press_command": "drag_select",
        "press_args": {"subtractive": true}
    },
]
```

Following are the keys that a single JSON entry
in a mousemap file can take.

`button`
: The name of the button.

  This defines the name of the button.
  There can be upto 16 buttons, `button1` to `button16`
  along with `scroll_up` & `scroll_down` for the scroll wheel.

`modifiers`
: A list of modifier keys.

  This defines a list of modifiers keys
  that have to be pressed simultaneously
  (along with the corresponding button click)
  for the command to be triggered,
  e.g. `["ctrl", "alt"]`.
  A list of all the modifier keys
  can be found in the keybindings section on [Modifiers][].

  [Modifiers]: https://docs.sublimetext.io/reference/key_bindings.html#modifiers

`count`
: The count of the button press.

  This defines the number of times the button has to be pressed
  for the corresponding `command` to trigger.
  Defaults to `1`.

`command`
: The `command` to execute.

  This defines the command to be executed
  when the corresponding button
  is **released**.

`args`
: The arguments for `command`.

  This is a mapping of arguments
  to be passed on to the `command`.

`press_command`
: The `press_command` to execute.

  This defines the command to be executed
  when the corresponding button is **pressed**.

`press_args`
: The arguments for `press_command`.

  This is a mapping of arguments
  to be passed on to the `press_command`.


::: warning
Mousemap files currently don't have the ability
to define contexts like key bindings.
Hence, it is not advisable
to ship them with packages or plugins,
as the lack of context means the shipped mousemap files
take priority over the default mouse actions,
leading to undesirable or unexpected behaviour.

This is tracked at [#105](https://github.com/sublimehq/sublime_text/issues/105).
:::

# /Part 44. docs.sublimetext.io/docs/reference/plugins.md

---
title: Plugins
---

<!-- TODO merge into guide section -->

::: seealso
[API Reference](../reference/python_api.md)
: More information on the Python API.
:::


Plugins are Python scripts
subclassing any of the `*Command` or `*Listener` classes
from the `sublime_plugin` module.


## Where to Store Plugins

Sublime Text will look for plugins in these places:

* `Packages`
* `Packages/<pkg_name>`
* `.sublime-package` files

Plugin files nested deeper in `Packages` won't be loaded.

All plugins should live inside a folder of their own and not directly
under `Packages`. This will spare you confusions when Sublime Text attempts
to sort packages for loading.


## Conventions for Command Names

By convention, Sublime Text command class names are suffixed with `Command`
and written as `NamesLikeThisCommand`.

However, command names are automatically transformed from `NamesLikeThisCommand`
to `name_like_this`. Thus, `ExampleCommand` would become `example`,
and `AnotherExampleCommand` would become `another_example`.

In names for classes defining commands, use `NameLikeThisCommand`. To call a
command from the API, use the standardized `name_like_this`.


## Types of Commands

* `sublime_plugin.ApplicationCommand`
* `sublime_plugin.WindowCommand`
* `sublime_plugin.TextCommand`

Instances of `WindowCommand` have a `.window` attribute pointing to the
window instance that created them. Similarly, instances of `TextCommand`
have a `.view` attribute.
`ApplicationCommand` instances don't have either.

### Shared Traits for Commands

All commands must implement a `.run()` method.

All commands may additionally provide methods to change their
visibility,
enabled state,
default caption in menus,
or even their name (discouraged).

<!-- TODO want_event -->

## How to Call Commands from the API

Depending on the type of command, use a reference to a `View` or a `Window`
and call `<object>.run_command('command_name')`. In addition to the command's
name, `.run_command` accepts a dictionary whose keys are the names of valid
parameters for said command:

```python
window.run_command("echo", {"Tempus": "Irreparabile", "Fugit": "."})
```

All user-provided arguments to commands must JSON-serializable.
This includes strings, integers, floats, booleans, `None`,
and the recursive list and dict types.
Mapping keys must be strings.


## Text Commands and the `edit` Object

Text commands receive an `edit` object passed to them by Sublime Text.

All actions done within an `edit` are grouped as a single undo action.
Callbacks such as `on_modified()` and `on_selection_modified()` are called
when the most outer edit operation is finished.

The `edit` object's life time is solely managed by Sublime Text internally.
Plugin authors must ensure 
to perform all editing operations 
within the `run()` method of text commands 
so that macros and repeating commands work as expected.


## Responding to Events

Any subclass of `EventListener` will be able to respond to events. You cannot
make a class derive both from `EventListener` and from any other type of
command.

::: warning
Expensive operations in event listeners can cause Sublime Text to become
unresponsive, especially in events triggered frequently, like
`on_modified()` and `on_selection_modified()`. Be careful of how much
work is done in these and don't implement events you don't need, even if
they just `pass`.
:::


## Sublime Text and the Python Standard Library

The most significant omission from the default distribution
is the `tkinter` module.
Otherwise, you can access the entire Python standard library
for the Python version Sublime Text ships with.


## Automatic Plugin Reload

Sublime Text will reload topmost Python modules as they change (perhaps
because you are editing a *.py* file within *Packages*). By contrast, Python
subpackages won't be reloaded automatically, and this can lead to confusion
while you're developing plugins. Generally speaking, it's best to restart
Sublime Text after you've made changes to plugin files, so all changes can take
effect.

# /Part 45. docs.sublimetext.io/docs/reference/projects.md

---
title: Projects
---

::: seealso
[Documentation on projects](/guide/usage/file-management/projects.md)
: Explains how to work with projects.

[Official Documentation on projects](https://www.sublimetext.com/docs/projects.html)
: May provide more up-to-date details.
:::


Project information is saved in metadata files
that can be edited
to allow advanced configuration
other than adding or removing folders.
To edit the project file
of the currently active project
via the **Project → Edit Project** menu.
An anonymous project cannot be configured in any way,
because no .sublime-project file exists for it.


## File Format

| Format        | Description                  |
| ------------- | ---------------------------- |
| **Format**    | JSON (with comments)         |
| **Extension** | `.sublime-project`           |
| **Name**      | Any                          |
| **Location**  | Anywhere on your file system |
| **Content**   | Metadata for projects        |


### Example

Project metadata is split across three topmost sections:

- `folders`, for the included folders;
- `settings`, for project-specific settings; and
- `build_systems`, for project-specific build systems.

```json {2,14,18}
{
    "folders":
    [
        {
            "path": "src",
            "folder_exclude_patterns": ["backup"]
        },
        {
            "path": "docs",
            "name": "Documentation",
            "file_exclude_patterns": ["*.css"]
        }
    ],
    "settings":
    {
        "tab_size": 8
    },
    "build_systems":
    [
        {
            "name": "List",
            "cmd": ["ls"]
        }
    ]
}
```


## Folders

A list of folders
that will be listed in the sidebar
and defines the project scope.

::: tip Pattern precedence
The include patterns are applied first,
effectively excluding everything
that is not matched by them.
Afterwards,
the exclude patterns further exclude
files or folders from the project.
<!-- TODO there is more to this, but it requires some reverse engineering -->
<!-- TODO also find out whether and how the patterns are joined with their global pendants -->
:::

`path`
: **Required**

  The path may be relative to the project directory
  or absolute.
  Use `.` for the directory the project file is in.

`name`
: **Optional**

  If present,
  it will appear in the side bar
  instead of the directory name.

`folder_exclude_patterns`
: **Optional**

  List of wildcard patterns.
  Folders matching the wildcard patterns
  will be excluded from the project.

`folder_include_patterns`
: **Optional**

  List of wildcard patterns.
  Folders matching the wildcard patterns
  will be included in the project.

`file_exclude_patterns`
: **Optional**

  List of wildcard patterns.
  Files matching the wildcard patterns
  will be excluded from the project.

`file_include_patterns`
: **Optional**

  List of wildcard patterns.
  Files matching the wildcard patterns
  will be included in the project.


`follow_symlinks`
: **Optional**

  If enabled,
  symlinks will be followed for path resolution.


### Example

```json
{
    "folders":
    [
        {
            "path": ".",
            "folder_include_patterns": ["foo"],
            "file_exclude_patterns": ["*.html"]
        },
        {
            "path": "foo",
            "name": "foo <with HTML files>"
        }
    ]
}
```

## Settings

A project may define project-specific settings
that will only apply to files within that project.
Project-specific settings override user settings,
but not syntax-specific settings.

Almost all settings can be overridden
(excluding global settings).

::: seealso
[Settings Hierarchy](/guide/customization/settings.md#the-settings-hierarchy)
: A detailed example for the order of precedence for settings.

[Settings Reference](./settings.md)
: Reference of available settings.
:::

## Build Systems

You can define project-specific build systems
in a `.sublime-project` file.
Build systems in projects
follow the same rules as conventional build system,
except a `name` must be specified for each.
They will show up in the **Tools → Build Systems** menu
and are selectable in the *Build With* popup,
but only in that project.

::: seealso
[Build Systems reference](https://www.sublimetext.com/docs/build_systems.html)
: Documentation on build systems and their options.
:::

# /Part 46. docs.sublimetext.io/docs/reference/python_api.md

---
title: Python API
---

::: seealso
[Official API Documentation](https://www.sublimetext.com/docs/api_reference.html)
:::

The official documentation covers the majority of the available API.
This document only serves as an addition to that.


## Exploring the API

A quick way to see the API in action:

1. Launch the **View Package File** command
   from the command palette.
1. Insert and filter for `Default/.py`
   and choose one of the default plugins
   to view their source code.

You can not directly edit these files
and should not under normal conditions,
but they serve as a good reference
for the API in usage.

Of course, you may also refer to the source code
of any open-source third-party plugin.


## Missing in the official docs

There are a few things
that are not (yet) documented in the official documentation.
A list of undocumented functions or inconsistencies in the documentation
has been collected in a [GitHub issue][documentation-bugs].

[documentation-bugs]: https://github.com/sublimehq/sublime_text/issues/2290


Following are a few methods (read: one)
that we have written our own documentation for.


### Window.set_layout

Signature
: `Window.set_layout(layout: dict)`

Changes the tile-based panel layout of view groups.
Returns `None`.

Expects a dictionary like this::

```py
{"cols": [float], "rows": [float], "cells": [[int]]}
```

where `[type]` represents a list of *type*.

**cols**
: A list of the column separators (floating point numbers), should
  start with `0` (left) and end with `1` (right).

**rows**
: A list of the row separators (floating point numbers), should start
  with `0` (top) and end with `1` (bottom).

**cells**
: A list of cell lists which describe a cell's boundaries each. Cells
  can be imagines as rectangles with the rows and cols specified along
  in this dictionary. Think like this:

  ```
  [x1, y1, x2, y2]
  ```

  where all values are integers respectively and map to the *cols* and
  *rows* indices. Thus, a cell with `[0, 0, 1, 2]` translates to a
  cell from the top left to the first column and the second row
  separator (in a 2x2 grid this would be bottom center).

::: tip Note
**rows** and **cols** are not tested for boundaries and they are not
adjusted either. Thus, it is possible to specify values lower than
`0` or higher than `1` and Sublime Text will in fact treat them
accordingly. That means you can crop views or create borders. It is
not known whether the "background color" of these empty spaces can
be modified, the default is black. Use at your own risk!

The order of column or row separators is not checked either. If you,
for example, use a reversed column list like `[1, 0.5, 0]` you
get to see two black panels. Sublime Text is unusable in this state.
:::

#### Examples

```py
# A 2-column layout with a separator in the middle
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 1],
    "cells": [[0, 0, 1, 1], [1, 0, 2, 1]]
})

# A 2x2 grid layout with all separators in the middle
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 0.5, 1],
    "cells": [[0, 0, 1, 1], [1, 0, 2, 1],
              [0, 1, 1, 2], [1, 1, 2, 2]]
})

# A 2-column layout with the separator in the middle and the right
# column being split in half
window.set_layout({
    "cols": [0, 0.5, 1],
    "rows": [0, 0.5, 1],
    "cells": [[0, 0, 1, 2], [1, 0, 2, 1],
                            [1, 1, 2, 2]]
})
```

# /Part 47. docs.sublimetext.io/docs/reference/settings.md

---
title: Settings
---

::: warning
This page may contain outdated or incomplete information.
You can see a description of most available settings in the
default settings file (**Preferences → Settings** or
`Default/Preferences.sublime-settings`).
:::

::: seealso
[Settings User Guide](/guide/customization/settings.md)
: Explanations for how settings work in Sublime Text.
:::


## Global Settings

These settings can only be modified from `Preferences.sublime-settings`
and `Preferences ({platform}).sublime-settings`.

<!-- TODO obviously, some settings are missing here ... but do we really need to
- include all the settings with a brief description? That's what the comments
- in the default settings are for, actually. -->

`theme`
: Theme to be used. Accepts a file base name
 (e. g.: `Default.sublime-theme`).

`scroll_speed`
: Set to `0` to disable smooth scrolling. Set to a value between `0` and
  `1` to scroll slower, or set to a value larger than `1` to scroll faster.

`hot_exit`
: Exiting the application or window with an associated project with
  `hot_exit` enabled will cause it to close immediately without prompting.
  Unsaved modifications and open files will be preserved and restored when next
  starting.

`remember_open_files`
: Determines whether to reopen the buffers that were open when Sublime Text was
  last closed.

`open_files_in_new_window`
: macOS only. When filters are opened from Finder, or by dragging onto the
  dock icon, this controls if a new window is created or not.

`close_windows_when_empty`
: Close windows as soon as the last file is closed, unless there's a folder
  open within the window.

`show_full_path`
: Show the full path to files in the title bar.

`preview_on_click`
: If `true`, preview file contents when clicking on a file in the side bar.
  Double clicking or editing the preview will open the file and assign it a
  tab.

`folder_exclude_patterns`
: Excludes the matching folders from the side bar, GoTo Anything, etc.

`file_exclude_patterns`
: Excludes the matching files from the side bar, GoTo Anything, etc.

`binary_file_patterns`
: Excludes the matching files from GoTo Anything and Find in Files but not the
  side bar.

`show_tab_close_buttons`
: If `false`, hides the tabs' close buttons until the mouse hovers over
     the tab.

`mouse_wheel_switches_tabs`
: If `true`, scrolling the mouse wheel will cause tabs to switch if the
  cursor is in the tab area.

`open_files_in_new_window`
: macOS only. When filters are opened from Finder, or by dragging onto the
  dock icon, this controls whether a new window is created or not.

`ignored_packages`
: A list of packages that will be ignored (not loaded).

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

## File Settings

### Whitespace and Indentation


`auto_indent`
: Toggles automatic indentation.

`tab_size`
: Number of spaces a tab is considered equal to.

`translate_tabs_to_spaces`
: Determines whether to replace a tab character with `tab_size` number of
  spaces when <Key k="tab" /> is pressed.

`use_tab_stops`
: If `translate_tabs_to_spaces` is `true`, will make <Key k="tab" /> and
  <Key k="backspace" /> insert/delete `tab_size` number of spaces per key press.

`trim_automatic_white_space`
: Toggles deletion of white space added by `auto_indent`.

`detect_indentation`
: Set to `false` to disable detection of tabs vs. spaces whenever a buffer
  is loaded. If set to `true`, it automatically will modify
  `translate_tabs_to_spaces` and `tab_size`.

`draw_white_space`
: Valid values: `none`, `selection`, `all`.

`trim_trailing_white_space_on_save`
: Set to `true` to remove white space on save.


  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

### Visual Settings
`always_show_minimap_viewport`
: If set to true, then it will always show rectangle on minimap highlighting
  current document position; defualt false,
  which shows position only on mouse over the minimap.

`color_scheme`
: Sets the colors used for text highlighting. Accepts a path rooted at the
  data directory (e.g.: `Packages/Color Scheme - Default/Monokai Bright.tmTheme`).

`font_face`
: Font face to be used for editable text.

`font_size`
: Size of the font for editable text.

`font_options`
: Valid values: `bold`, `italic`, `no_antialias`, `gray_antialias`,
  `subpixel_antialias`, `directwrite` (Windows).

`gutter`
: Toggles display of gutter.

`rulers`
: Columns in which to display vertical rules. Accepts a list of numeric values
  (such as `[79, 89, 99]`) or a single numeric value (for example, `79`).

`draw_minimap_border`
: Set to `true` to draw a border around the minimap's region corresponding
  to the the view's currently visible text. The active color scheme's
  `minimapBorder` key controls the border's color.

`highlight_line`
: Set to `false` to stop highlighting lines with a cursor.

`line_padding_top`
: Additional spacing at the top of each line, in pixels.

`line_padding_bottom`
: Additional spacing at the bottom of each line, in pixels.

`scroll_past_end`
: Set to `false` to disable scrolling past the end of the buffer. If `true`,
  Sublime Text will leave a wide, empty margin between the last line and the
  bottom of the window.

`line_numbers`
: Toggles display of line numbers in the gutter.

`word_wrap`
: If set to `false`, long lines will be clipped instead of wrapped. Scroll
  the screen horizontally to see the clipped text.

`wrap_width`
: If greater than `0`, wraps long lines at the specified column as opposed
  to the window width. Only takes effect if `word_wrap` is set to `true`.

`indent_subsequent_lines`
: If set to `false`, wrapped lines will not be indented. Only takes effect
  if `word_wrap` is set to `true`.

`draw_centered`
: If set to `true`, text will be drawn centered rather than left-aligned.

`match_brackets`
: Set to `false` to disable underlining the brackets surrounding the cursor.

`match_brackets_content`
: Set this to `false` if you'd rather have brackets highlighted only when the
  cursor is next to one.

`match_brackets_square`
: Set to `false` to stop highlighting square brackets. Only takes effect if
  `match_brackets` is `true`.

`match_brackets_braces`
: Set to `false` to stop highlighting curly brackets. Only takes effect if
  `match_brackets` is `true`.

`match_brackets_angle`
: Set to `false` to stop highlighting angle brackets. Only takes effect if
 `match_brackets` is `true`.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


### Automatic Behavior

`auto_match_enabled`
: Toggles automatic pairing of quotes, brackets, etc.

`save_on_focus_lost`
: Set to true to save files automatically when switching to a different file
  or application.

`find_selected_text`
: If `true`, the selected text will be copied into the find panel when it's
  shown.

`word_separators`
: Characters considered to divide words for actions like advancing the cursor,
etc. Not used for every context where a notion of a word separator is
useful (for example, word wrapping). In some contexts, the text might be
tokenized based on other criteria (for example, the syntax definition rules).

`ensure_newline_at_eof_on_save`
: Always adds a new line at the end of the file if not present when saving.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

### System and Miscellaneous Settings

`is_widget`
: Returns `true` if the buffer is an input field in a dialog, as opposed to
  a regular buffer.

`spell_check`
: Toggles the spell checker.

`dictionary`
: Word list to be used by the spell checker. Accepts a path rooted at the
  data directory (such as `Packages/Language - English/en_US.dic`). You can
  [add more dictionaries][].

`fallback_encoding`
: The encoding to use when the encoding can't be determined automatically.
  ASCII, UTF-8 and UTF-16 encodings will be detected automatically .

`default_line_ending`
: Determines what characters to use to designate new lines. Valid values:
  `system` (OS-dependant), `windows` (`CRLF`) and `unix` (`LF`).

`tab_completion`
: Determines whether pressing <Key k="tab" /> will insert completions.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

[add more dictionaries]: https://extensions.services.openoffice.org/en/dictionaries

### Build and Error Navigation Settings

`result_file_regex` and `result_line_regex`
: Regular expressions used to extract error information from some output dumped
  into a view or output panel. Follows the same rules
  as [error capturing in build systems][exec-args].

`result_base_dir`
: Folder to start looking for offending files based on information
  extracted with `result_file_regex` and `result_line_regex`.

`build_env`
: List of paths to add to build systems by default.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

[exec-args]: https://www.sublimetext.com/docs/build_systems.html#exec-target-options

### File and Directory Settings

`default_dir`
: Sets the default save folder for the view.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


### Input Settings

`command_mode`
: If set to `true`, the buffer will ignore key strokes. Useful when emulating
  Vim's modal behavior.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->

# /Part 48. docs.sublimetext.io/docs/reference/symbols.md

---
title: Symbols
---

Sublime Text provides basic support
for [symbol navigation][symbol-navigation]
(jumping to class and function definitions, etc.).
Symbol navigation can be enabled
for any type of file.

The symbol navigation framework in Sublime Text
is strictly text-based.
No lexical or syntactical analysis is performed.

[symbol-navigation]: /guide/usage/file-management/navigation.md#goto-anything-operators

## Format

Symbols are defined using metadata files.
Because symbol definition files
are commonly required by packages,
they are discussed separately in this page
for convenience.

Just as regular metadata files,
symbol definition files
have the `.tmPreferences` extension
and use the Property List format.
The file name is ignored by Sublime Text.

::: seealso
[Metadata](./metadata.md)
: Detailed documentation on metadata files.
:::


## Defining Symbols

Sublime Text features two types of symbol list:
a local symbol list (active file)
and a global symbol list (project-wide).
Using symbol definition files,
you can target both individually.

Symbol definition files use scope selectors
to capture symbols in source code files.

Several symbol definition files can coexist
in the same package.
For example, two symbol definition files
could work in tandem:
one would define all symbols,
and a second one
could selectively hide some of them
if they were uninteresting for users.

Let's see an example
of a symbol definition file:

```xml {7-8,11-12}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Symbol List</string>
    <key>scope</key>
    <string>source.python meta.function.python, source.python meta.class.python</string>
    <key>settings</key>
    <dict>
        <key>showInSymbolList</key>
        <integer>1</integer>
    </dict>
</dict>
</plist>
```

Using the file above,
Sublime Text would scan source code files
for scope names `source.python meta.function.python`
and `source.python meta.class.python`,
and text within would be indexed
as symbols.
The `showInSymbolList` setting tells
Sublime Text to use
the local symbol list.


## Text Transformations

It is possible
to apply transformations to symbols
before they are displayed to the user.
Symbol transformations consist of text substitutions
defined as regular expressions
using the [Oniguruma][] syntax.

This is an example of a text substitution:

```perl
s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
```

In this case, a captured symbol such as `class FooBar(object)`
would show up as `FooBar(object)`
in the symbol list.

Let's expand our previous example
to use a symbol transformation:


```xml {15-16}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Symbol List</string>
    <key>scope</key>
    <string>source.python meta.function.python, source.python meta.class.python</string>
    <key>settings</key>
    <dict>
        <key>showInSymbolList</key>
        <integer>1</integer>
        <key>symbolTransformation</key>
        <string>
            s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
            s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
        </string>
    </dict>
</dict>
</plist>
```


## Structure of a Symbol Definition File

All metadata files
share the same topmost structure,
which is inherited from the Property List format.


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    ...
</dict>
</plist>
```

These are all the valid elements
in a symbol definition file:

`name`
: **Optional.**
  Name of the symbol definition. Ignored by Sublime Text.

  ```xml
  <key>name</key>
  <string>Some arbitrary name goes here</string>
  ```

`scope`
: **Required.**
   Comma-separated list of scope names
  that Sublime Text will use
  to capture symbols in files.

  ```xml
  <key>scope</key>
  <string>source.python meta.function.python, source.python meta.class.python</string>
  ```

`settings`
: **Required.**
  A container for settings.

  ```xml
  <key>settings</key>
  <dict>
     ...
  </dict>
  ```

`uuid`
: **Optional.**
  A unique identifier for the file.
  Ignored by Sublime Text.

  ```xml
  <key>uuid</key>
  <string>BC062860-3346-4D3B-8421-C5543F83D11F</string>
  ```


## `settings` Subelements

`showInSymbolList`
: **Optional.**
  Links symbols to the local symbol list.
  Valid values are `0` or `1`.
  If `0`,
  the corresponding symbols
  will not be displayed.

   ```xml
   <key>showInSymbolList</key>
   <integer>1</integer>
   ```

`showInIndexedSymbolList`
: **Optional.**
  Links symbols to the global symbol list.
  Valid values are `0` or `1`.
  If `0`,
  the corresponding symbols
  will not be displayed.

   ```xml
   <key>showInIndexedSymbolList</key>
   <integer>1</integer>
   ```

`symbolTransformation`
: **Optional.**
  Targets the local symbol list.
  Semicolon-separated list of text substitutions
  expressed as regular expressions
  using the [Oniguruma][] syntax.
  Whitespace between substitution instructions
  is ignored.


   ```xml
   <key>symbolTransformation</key>
   <string>
      s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
      s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
   </string>
   ```

`symbolIndexTransformation`
: **Optional.**
  Targets the global symbol list.
  Semicolon-separated list of text substitutions
  expressed as regular expressions
  using the [Oniguruma][] syntax.
  Whitespace between substitution instructions
  is ignored.

   ```xml
   <key>symbolIndexTransformation</key>
   <string>
      s/class\s+([A-Za-z_][A-Za-z0-9_]*.+?\)?)(\:|$)/$1/g;
      s/def\s+([A-Za-z_][A-Za-z0-9_]*\()(?:(.{0,40}?\))|((.{40}).+?\)))(\:)/$1(?2:$2)(?3:$4…\))/g;
   </string>
   ```

[Oniguruma]: https://github.com/kkos/oniguruma/blob/master/doc/RE

<!-- TODO: Are there more settings/options? -->

## Navigating Symbols

Once symbols are defined,
you can navigate them
using standard key bindings:

| Shortcut                 | Description             |
| ------------------------ | ----------------------- |
| <Key k="f12" />          | Go to definition        |
| <Key k="ctrl+r" />       | Show local symbol list  |
| <Key k="ctrl+shift+r" /> | Show global symbol list |

::: seealso
[Goto Anything](/guide/usage/file-management/navigation.md#goto-anything)
: Browsing symbols using Goto Anything.
:::

# /Part 49. docs.sublimetext.io/docs/reference/syntaxdefs_legacy.md

---
title: Syntax Definitions (Legacy)
---

::: warning
In Sublime Text 3.0 (Build 3084),
a new syntax definition format has been added,
with the `.sublime-syntax` extension.

It is highly encouraged to be used
in favor of the legacy format
described in this document,
unless compatibility with older versions 
or other editors using this format is desired.

See the [official documentation][syntax-docs] for details.

This document describes
the old `.tmLanguage` format
inherited from TextMate.
:::

[syntax-docs]: https://www.sublimetext.com/docs/syntax.html


## File Format

TextMate syntax definitions are Plist files with the `.tmLanguage` extension.
However, for convenience in this reference document, YAML is shown instead.

Additionally, Sublime Text also understands the `.hidden-tmLanguage` extension,
which can not be selected by the user but only by set by plugins. 
"Find in Files" makes use of this. 
The downsite is that these can not be included by 
import statements in other language definitions.

```yaml
---
name: Sublime Snippet (Raw)
scopeName: source.ssraw
fileTypes: [ssraw]
uuid: 0da65be4-5aac-4b6f-8071-1aadb970b8d9

patterns:
  - comment: Tab stops like $1, $2...
    name: keyword.other.ssraw
    match: \$\d+

  - comment: Variables like $PARAM1, $TM_SELECTION...
    name: keyword.other.ssraw
    match: \$([A-Za-z][A-Za-z0-9_]+)
    captures:
      '1': {name: constant.numeric.ssraw}

  - name: variable.complex.ssraw
    begin: '(\$)(\{)([0-9]+):'
    beginCaptures:
      '1': {name: keyword.other.ssraw}
      '3': {name: constant.numeric.ssraw}
    end: \}
    patterns:
      - include: $self
      - name: support.other.ssraw
        match: .

  - name: constant.character.escape.ssraw
    match: \\[$<>]

  - name: invalid.illegal.ssraw
    match: '[$<>]'
```


`name`
: Descriptive name for the syntax definition.
  Shows up in the syntax definition dropdown menu located in the bottom right of
  the Sublime Text interface. 
  It's usually the name of the programming language or equivalent.

`scopeName`
: Name of the topmost scope for this syntax definition. 
  Either `source.<lang>` or `text.<lang>`. 
  Use `source` for programming languages and `text` for markup and everything else.

`fileTypes`
: This is a list of file extensions (without the leading dot).
  When opening files of these types,
  Sublime Text will automatically activate this syntax definition for them.
  Optional.

`uuid`
: Unique indentifier for this syntax definition. Currently ignored.

`patterns`
: Array of [patterns](#patterns-array) to match against the buffer's text.

`repository`
: Array of patterns abstracted out from the `patterns` element.
  Useful to keep the syntax definition tidy as well as for 
  specialized uses like recursive patterns or re-using the same pattern.
  Optional.

  <!-- Cause upper text to become a paragraph and fix a spacing bug. -->


## Patterns Array

A pattern is a mapping in one of the following formats:

**match**
: Contains the following elements:

  |  Element   |   Description                                              |
  | ---------- | ---------------------------------------------------------- |
  | `match`    | Pattern to search for.                                     |
  | `name`     | Optional. Scope name to be assigned to matches of `match`. |
  | `comment`  | Optional. For information only.                            |
  | `captures` | Optional. Refinement of `match`. See below.                |

  In turn, `captures` can contain *n* of the following pairs of elements
  (note that ``0`` refers to the whole match):

  | Capture  | Description                                     |
  | -------- | ----------------------------------------------- |
  | `0`..`n` | Name of the group referenced. Must be a string. |
  | `name`   | Scope to be assigned to the group.              |

  *Example:*

  ```yaml
  # Simple

  - comment: Sequences like \$, \> and \<
    name: constant.character.escape.ssraw
    match: \\[$<>]

  # With captures

  - comment: Tab stops like $1, $2...
    name: keyword.other.ssraw
    match: \$(\d+)
    captures:
      '1': {name: constant.numeric.ssraw}
  ```

**include**
: Includes an item from the repository, another syntax definitions or the current
  one.

  References:

  | Include    | Description                    |
  | ---------- | ------------------------------ |
  | $self      | The current syntax definition. |
  | \#itemName | itemName in the repository.    |
  | source.js  | External syntax definitions.   |

  *Examples:*

  ```yaml
  # Requires presence of DoubleQuotedStrings element in the repository.
  - include: '#DoubleQuotedStrings'

  # Recursively includes the complete current syntax definition.
  - include: $self

  # Includes and external syntax definition.
  - include: source.js
  ```

**begin..end**
: Defines a scope potentially spanning multiple lines.
  Contains the following elements (only `begin` and `end` are required):

  |   Scope         | Description                                          |
  | --------------- | ---------------------------------------------------- |
  | `name`          | Scope name for the content including the markers.    |
  | `contentName`   | Scope name for the content excluding the markers.    |
  | `begin`         | The start marker pattern.                            |
  | `end`           | The end marker pattern.                              |
  | `name`          | Scope name for the whole region.                     |
  | `beginCaptures` | `captures` for `begin`. See `captures`.              |
  | `endCaptures`   | `captures` for `end`. See `captures`.                |
  | `patterns`      | Array of patterns to be matched against the content. |

  *Example:*

  ```yaml
  name: variable.complex.ssraw
  begin: '(\$)(\{)([0-9]+):'
  beginCaptures:
    '1': {name: keyword.other.ssraw}
    '3': {name: constant.numeric.ssraw}
  end: \}
  patterns:
  - include: $self
  - name: support.other.ssraw
    match: .
  ```

<!-- TODO explain captures -->


## Repository

A repository defines items
that can be referenced from [a patterns array](#patterns-array)
(global or within a *begin..end* pattern) via an `include` pattern.

A repository item may be a single pattern
or an array of patterns.

*Example:*

```yaml
repository:
  numericConstant:
    patterns:
      - name: constant.numeric.double.powershell
        match: \d*(?<!\.)(\.)\d+(d)?(mb|kb|gb)?
        captures:
          '1': {name: support.constant.powershell}
          '2': {name: support.constant.powershell}
          '3': {name: keyword.other.powershell}
      - name: constant.numeric.powershell
        match: (?<!\w)\d+(d)?(mb|kb|gb)?(?!\w)
        captures:
          '1': {name: support.constant.powershell}
          '2': {name: keyword.other.powershell}

  scriptblock:
    name: meta.scriptblock.powershell
    begin: \{
    end: \}
    patterns:
      - include: $self
```


## Escape Sequences

Be sure to escape JSON/XML sequences as needed.

For YAML, additionally make sure that you didn't unintentionally start a new
scalar by not using quotes for your strings.
Examples that **won't work** as expected:

```yaml
match: [aeiou]

include: #this-is-actually-a-comment

match: "#"\w+"" # contains double quotation marks
```

Use single quotes in these situations:

```yaml
match: '[aeiou]'

include: '#this-is-actually-a-comment'

match: '#"\w+'
```
