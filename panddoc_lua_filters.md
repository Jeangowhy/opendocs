
# /Pandoc filters
https://hackage.haskell.org/package/pandoc

```sh
# pandoc -r html https://pandoc.org/filters.html -t markdown -o panddoc_filters.md
# pandoc -r html https://pandoc.org/lua-filters.html -t markdown -o panddoc_lua_filters.md
# pandoc -r html https://pandoc.org/custom-readers.html -t markdown -o panddoc_custom-readers.md
# pandoc -r html https://pandoc.org/custom-writers.html -t markdown -o panddoc_custom-writers.md
# pandoc -r html https://pandoc.org/using-the-pandoc-api.html -t markdown -o panddoc_using-the-pandoc-api.md
```

::: {#toc}
-   [Summary](#summary){#toc-summary}
-   [A simple example](#a-simple-example){#toc-a-simple-example}
-   [LaTeX for WordPress](#latex-for-wordpress){#toc-latex-for-wordpress}
-   [But I don't want to learn Haskell!](#but-i-dont-want-to-learn-haskell){#toc-but-i-dont-want-to-learn-haskell}
-   [Include files](#include-files){#toc-include-files}
-   [Removing links](#removing-links){#toc-removing-links}
-   [A filter for ruby text](#a-filter-for-ruby-text){#toc-a-filter-for-ruby-text}
-   [Exercises](#exercises){#toc-exercises}
-   [Technical details of JSON filters](#technical-details-of-json-filters){#toc-technical-details-of-json-filters}
    -   [Arguments](#arguments){#toc-arguments}
    -   [Environment variables](#environment-variables){#toc-environment-variables}
    -   [Supported interpreters](#supported-interpreters){#toc-supported-interpreters}
::


# Summary

Pandoc provides an interface for users to write programs (known as
filters) which act on pandoc's AST.

Pandoc consists of a set of readers and writers. When converting a
document from one format to another, text is parsed by a reader into
pandoc's intermediate representation of the document---an "abstract
syntax tree" or AST---which is then converted by the writer into the
target format. The pandoc AST format is defined in the module
[[`Text.Pandoc.Definition`] in the [`pandoc-types`]
package](https://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html).

A "filter" is a program that modifies the AST, between the reader and
the writer.

    INPUT --reader--> AST --filter--> AST --writer--> OUTPUT

Pandoc supports two kinds of filters:

-   **Lua filters** use the Lua language to define transformations on
    the pandoc AST. They are described in a 
    [separate document](lua-filters.html).

-   **JSON filters**, described here, are pipes that read from standard
    input and write to standard output, consuming and producing a JSON
    representation of the pandoc AST:

                               source format
                                    ↓
                                 (pandoc)
                                    ↓
                            JSON-formatted AST
                                    ↓
                              (JSON filter)
                                    ↓
                            JSON-formatted AST
                                    ↓
                                 (pandoc)
                                    ↓
                              target format

Lua filters have a couple of advantages. They use a Lua interpreter that
is embedded in pandoc, so you don't need to have any external software
installed. And they are usually faster than JSON filters. But if you
wish to write your filter in a language other than Lua, you may prefer
to use a JSON filter. JSON filters may be written in any programming
language.

You can use a JSON filter directly in a pipeline:

    pandoc -s input.txt -t json | \
     pandoc-citeproc | \
     pandoc -s -f json -o output.html

But it is more convenient to use the [`--filter`] option, which
handles the plumbing automatically:

    pandoc -s input.txt --filter pandoc-citeproc -o output.html

For a gentle introduction into writing your own filters, continue this
guide. There's also a [list of third party filters on the
wiki](https://github.com/jgm/pandoc/wiki/Pandoc-Filters).
:::

# A simple example

Suppose you wanted to replace all level 2+ headings in a markdown
document with regular paragraphs, with text in italics. How would you go
about doing this?

A first thought would be to use regular expressions. Something like
this:

    perl -pe 's/^##+ (.*)$/\*\1\*/' source.txt

This should work most of the time. But don't forget that ATX style
headings can end with a sequence of [`#`]s that is not part of
the heading text:

    ## My heading ##

And what if your document contains a line starting with [`##`]
in an HTML comment or delimited code block?

    <!--
    ## This is just a comment
    -->

    ~~~~
    ### A third level heading in standard markdown
    ~~~~

We don't want to touch *these* lines. Moreover, what about Setext style
second-level heading?

    A heading
    ---------

We need to handle those too. Finally, can we be sure that adding
asterisks to each side of our string will put it in italics? What if the
string already contains asterisks around it? Then we'll end up with bold
text, which is not what we want. And what if it contains a regular
unescaped asterisk?

How would you modify your regular expression to handle these cases? It
would be hairy, to say the least.

A better approach is to let pandoc handle the parsing, and then modify
the AST before the document is written. For this, we can use a filter.

To see what sort of AST is produced when pandoc parses our text, we can
use pandoc's [`native`] output format:

    % cat test.txt
    ## my heading

    text with *italics*
    % pandoc -s -t native test.txt
    Pandoc (Meta {unMeta = fromList []})
    [Header 2 ("my-heading",[],[]) [Str "My",Space,Str "heading"]
    , Para [Str "text",Space,Str "with",Space,Emph [Str "italics"]] ]

A [`Pandoc`] document consists of a [`Meta`] block
(containing metadata like title, authors, and date) and a list of
[`Block`] elements. In this case, we have two
[`Block`]s, a [`Header`] and a [`Para`]. Each
has as its content a list of [`Inline`] elements. For more
details on the pandoc AST, see the [haddock documentation for
[`Text.Pandoc.Definition`]](https://hackage.haskell.org/package/pandoc-types).

We can use Haskell to create a JSON filter that transforms this AST,
replacing each [`Header`] block with level \>= 2 with a
[`Para`] with its contents wrapped inside an [`Emph`]
inline:

::: {#cb10 .sourceCode}
``` {.sourceCode .haskell}
#!/usr/bin/env runhaskell
-- behead.hs
import Text.Pandoc.JSON

main :: IO ()
main = toJSONFilter behead

behead :: Block -> Block
behead (Header n _ xs) | n >= 2 = Para [Emph xs]
behead x = x
```
:::

The [`toJSONFilter`] function does two things. First, it lifts
the [`behead`] function (which maps
[`Block -> Block`]) onto a transformation of the entire
[`Pandoc`] AST, walking the AST and transforming each block.
Second, it wraps this [`Pandoc -> Pandoc`] transformation with
the necessary JSON serialization and deserialization, producing an
executable that consumes JSON from stdin and produces JSON to stdout.

To use the filter, make it executable:

    chmod +x behead.hs

and then

    pandoc -f SOURCEFORMAT -t TARGETFORMAT --filter ./behead.hs

(It is also necessary that [`pandoc-types`] be installed in the
local package repository. To do this using cabal-install,
[`cabal v2-update && cabal v2-install --lib pandoc-types --package-env .`].)

Alternatively, we could compile the filter:

    ghc -package-env=default --make behead.hs
    pandoc -f SOURCEFORMAT -t TARGETFORMAT --filter ./behead

Note that if the filter is placed in the system PATH, then the initial
[`./`] is not needed. Note also that the command line can
include multiple instances of [`--filter`]: the filters will be
applied in sequence.
::::

# LaTeX for WordPress

Another easy example. WordPress blogs require a special format for LaTeX
math. Instead of [`$e=mc^2$`], you need:
[`$LaTeX e=mc^2$`]. How can we convert a markdown document
accordingly?

Again, it's difficult to do the job reliably with regexes. A
[`$`] might be a regular currency indicator, or it might occur
in a comment or code block or inline code span. We just want to find the
[`$`]s that begin LaTeX math. If only we had a parser...

We do. Pandoc already extracts LaTeX math, so:

::: {#cb14 .sourceCode}
``` {.sourceCode .haskell}
#!/usr/bin/env runhaskell
-- wordpressify.hs
import Text.Pandoc.JSON

main = toJSONFilter wordpressify
  where wordpressify (Math x y) = Math x ("LaTeX " ++ y)
        wordpressify x = x
```
:::

Mission accomplished. (I've omitted type signatures here, just to show
it can be done.)
::::

# But I don't want to learn Haskell!

While it's easiest to write pandoc filters in Haskell, it is fairly easy
to write them in python using the [`pandocfilters`] package.
The package is in PyPI and can be installed using
[`pip install pandocfilters`] or
[`easy_install pandocfilters`].

Here's our "beheading" filter in python:

::: {#cb15 .sourceCode}
```python
#!/usr/bin/env python

"""
Pandoc filter to convert all level 2+ headings to paragraphs with
emphasized text.
"""

from pandocfilters import toJSONFilter, Emph, Para

def behead(key, value, format, meta):
  if key == 'Header' and value[0] >= 2:
    return Para([Emph(value[2])])

if __name__ == "__main__":
  toJSONFilter(behead)
```
:::

[`toJSONFilter(behead)`] walks the AST and applies the
[`behead`] action to each element. If [`behead`]
returns nothing, the node is unchanged; if it returns an object, the
node is replaced; if it returns a list, the new list is spliced in.

Note that, although these parameters are not used in this example,
[`format`] provides access to the target format, and
[`meta`] provides access to the document's metadata.

There are many examples of python filters in [the pandocfilters
repository](https://github.com/jgm/pandocfilters).

For a more Pythonic alternative to pandocfilters, see the
[panflute](https://pypi.org/project/panflute) library. Don't like
Python? There are also ports of pandocfilters in

-   [PHP](https://github.com/vinai/pandocfilters-php),
-   [perl](https://metacpan.org/pod/Pandoc::Filter),
-   TypeScript/JavaScript via Node.js
    -   [pandoc-filter](https://github.com/mvhenderson/pandoc-filter-node),
    -   [node-pandoc-filter](https://github.com/mu-io/node-pandoc-filter),
-   [Groovy](https://github.com/dfrommi/groovy-pandoc), and
-   [Ruby](https://heerdebeer.org/Software/markdown/paru/).

Starting with pandoc 2.0, pandoc includes built-in support for writing
filters in lua. The lua interpreter is built in to pandoc, so a lua
filter does not require any additional software to run. See the
[documentation on lua filters](https://pandoc.org/lua-filters.html).
::::

# Include files

So none of our transforms have involved IO. How about a script that
reads a markdown document, finds all the inline code blocks with
attribute [`include`], and replaces their contents with the
contents of the file given?

::: {#cb16 .sourceCode}
``` {.sourceCode .haskell}
#!/usr/bin/env runhaskell
-- includes.hs
import Text.Pandoc.JSON
import qualified Data.Text.IO as TIO
import qualified Data.Text as T

doInclude :: Block -> IO Block
doInclude cb@(CodeBlock (id, classes, namevals) contents) =
  case lookup (T.pack "include") namevals of
       Just f     -> CodeBlock (id, classes, namevals) <$>
                      TIO.readFile (T.unpack f)
       Nothing    -> return cb
doInclude x = return x

main :: IO ()
main = toJSONFilter doInclude
```
:::

Try this on the following:

    Here's the pandoc README:

    ~~~~ {include="README"}
    this will be replaced by contents of README
    ~~~~
::::

# Removing links

What if we want to remove every link from a document, retaining the
link's text?

::: {#cb18 .sourceCode}
``` {.sourceCode .haskell}
#!/usr/bin/env runhaskell
-- delink.hs
import Text.Pandoc.JSON

main = toJSONFilter delink

delink :: Inline -> [Inline]
delink (Link _ txt _) = txt
delink x              = [x]
```
:::

Note that [`delink`] can't be a function of type
[`Inline -> Inline`], because the thing we want to replace the
link with is not a single [`Inline`] element, but a list of
them. So we make [`delink`] a function from an
[`Inline`] element to a list of [`Inline`] elements.
[`toJSONFilter`] can still lift this function to a
transformation of type [`Pandoc -> Pandoc`].
::::

# A filter for ruby text

Finally, here's a nice real-world example, developed on the
[pandoc-discuss](https://groups.google.com/group/pandoc-discuss/browse_thread/thread/7baea325565878c8)
list. Qubyte wrote:

> I'm interested in using pandoc to turn my markdown notes on Japanese
> into nicely set HTML and (Xe)LaTeX. With HTML5, ruby (typically used
> to phonetically read chinese characters by placing text above or to
> the side) is standard, and support from browsers is emerging (Webkit
> based browsers appear to fully support it). For those browsers that
> don't support it yet (notably Firefox) the feature falls back in a
> nice way by placing the phonetic reading inside brackets to the side
> of each Chinese character, which is suitable for other output formats
> too. As for (Xe)LaTeX, ruby is not an issue.
>
> At the moment, I use inline HTML to achieve the result when the
> conversion is to HTML, but it's ugly and uses a lot of keystrokes, for
> example
>
> ::: {#cb19 .sourceCode}
> ``` {.sourceCode .xml}
> <ruby>ご<rt></rt>飯<rp>（</rp><rt>はん</rt><rp>）</rp></ruby>
> ```
> :::
>
> sets ご飯 "gohan" with "han" spelt phonetically above the second
> character, or to the right of it in brackets if the browser does not
> support ruby. I'd like to have something more like
>
>     r[はん](飯)
>
> or any keystroke saving convention would be welcome.

We came up with the following script, which uses the convention that a
markdown link with a URL beginning with a hyphen is interpreted as ruby:

    [はん](-飯)

::: {#cb22 .sourceCode}
``` {.sourceCode .haskell}
{-# LANGUAGE OverloadedStrings #-}
-- handleruby.hs
import Text.Pandoc.JSON
import System.Environment (getArgs)
import qualified Data.Text as T

handleRuby :: Maybe Format -> Inline -> Inline
handleRuby (Just format) x@(Link attr [Str ruby] (src,_)) =
  case T.uncons src of
    Just ('-',kanji)
      | format == Format "html" -> RawInline format $
        "<ruby>" <> kanji <> "<rp>(</rp><rt>" <> ruby <>
        "</rt><rp>)</rp></ruby>"
      | format == Format "latex" -> RawInline format $
        "\\ruby{" <> kanji <> "}{" <> ruby <> "}"
      | otherwise -> Str ruby
    _ -> x
handleRuby _ x = x

main :: IO ()
main = toJSONFilter handleRuby
```
:::

Note that, when a script is called using [`--filter`], pandoc
passes it the target format as the first argument. When a function's
first argument is of type [`Maybe Format`],
[`toJSONFilter`] will automatically assign it [`Just`]
the target format or [`Nothing`].

We compile our script:

    # first, make sure pandoc-types is installed:
    cabal install --lib pandoc-types --package-env .
    ghc --make handleRuby

Then run it:

    % pandoc -F ./handleRuby -t html
    [はん](-飯)
    ^D
    <p><ruby>飯<rp>(</rp><rt>はん</rt><rp>)</rp></ruby></p>
    % pandoc -F ./handleRuby -t latex
    [はん](-飯)
    ^D
    \ruby{飯}{はん}

Note: to use this to generate PDFs via LaTeX, you'll need to use
[`--pdf-engine=xelatex`], specify a [`mainfont`] that
has the Japanese characters (e.g. "[Noto Sans CJK
JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)"), and add
[`\usepackage{ruby}`] to your template or header-includes.
::::

# Exercises

1.  Put all the regular text in a markdown document in ALL CAPS (without
    touching text in URLs or link titles).

2.  Remove all horizontal rules from a document.

3.  Renumber all enumerated lists with roman numerals.

4.  Replace each delimited code block with class [`dot`] with
    an image generated by running [`dot -Tpng`] (from graphviz)
    on the contents of the code block.

5.  Find all code blocks with class [`python`] and run them
    using the python interpreter, printing the results to the console.
:::

# Technical details of JSON filters

A JSON filter is any program which can consume and produce a valid
pandoc JSON document representation. This section describes the
technical details surrounding the invocation of filters.

## Arguments

The program will always be called with the target format as the only
argument. A pandoc invocation like

    pandoc --filter demo --to=html

will cause pandoc to call the program [`demo`] with argument
[`html`].
:::

## Environment variables

Pandoc sets additional environment variables before calling a filter.

[`PANDOC_VERSION`]
:   The version of the pandoc binary used to process the document.
    Example: [`2.11.1`].

[`PANDOC_READER_OPTIONS`]

:   JSON object representation of the options passed to the input
    parser.

    Object fields:

    [`abbreviations`]
    :   set of known abbreviations (array of strings).

    [`columns`]
    :   number of columns in terminal; an integer.

    [`default-image-extension`]
    :   default extension for images; a string.

    [`extensions`]
    :   integer representation of the syntax extensions bit field.

    [`indented-code-classes`]
    :   default classes for indented code blocks; array of strings.

    [`standalone`]
    :   whether the input was a standalone document with header; either
        [`true`] or [`false`].

    [`strip-comments`]
    :   HTML comments are stripped instead of parsed as raw HTML; either
        [`true`] or [`false`].

    [`tab-stop`]
    :   width (i.e. equivalent number of spaces) of tab stops; integer.

    [`track-changes`]
    :   track changes setting for docx; one of
        [`"accept-changes"`], [`"reject-changes"`],
        and [`"all-changes"`].
:::

## Supported interpreters

Files passed to the [`--filter`]/[`-F`] parameter are
expected to be executable. However, if the executable bit is not set,
then pandoc tries to guess a suitable interpreter from the file
extension.

  file extension   interpreter
  ---------------- -------------------------
  .py              [`python`]
  .hs              [`runhaskell`]
  .pl              [`perl`]
  .rb              [`ruby`]
  .php             [`php`]
  .js              [`node`]
  .r               [`Rscript`]
:::

# /Pandoc Lua Filters


::: {#toc}
-   [Introduction](#introduction){#toc-introduction}
-   [Lua filter structure](#lua-filter-structure){#toc-lua-filter-structure}
    -   [Filters on element sequences](#filters-on-element-sequences){#toc-filters-on-element-sequences}
    -   [Traversal order](#traversal-order){#toc-traversal-order}
        -   [Typewise traversal](#typewise-traversal){#toc-typewise-traversal}
        -   [Topdown traversal](#topdown-traversal){#toc-topdown-traversal}
    -   [Global variables](#global-variables){#toc-global-variables}
-   [Pandoc Module](#pandoc-module){#toc-pandoc-module}
    -   [Element creation](#element-creation){#toc-element-creation}
    -   [Exposed pandoc functionality](#exposed-pandoc-functionality){#toc-exposed-pandoc-functionality}
-   [Lua interpreter initialization](#lua-interpreter-initialization){#toc-lua-interpreter-initialization}
-   [Debugging Lua filters](#debugging-lua-filters){#toc-debugging-lua-filters}
    -   [Common pitfalls](#common-pitfalls){#toc-common-pitfalls}
-   [Examples](#examples){#toc-examples}
    -   [Macro substitution](#macro-substitution){#toc-macro-substitution}
    -   [Center images in LaTeX and HTML output](#center-images-in-latex-and-html-output){#toc-center-images-in-latex-and-html-output}
    -   [Setting the date in the metadata](#setting-the-date-in-the-metadata){#toc-setting-the-date-in-the-metadata}
    -   [Remove spaces before citations](#remove-spaces-before-citations){#toc-remove-spaces-before-citations}
    -   [Replacing placeholders with their metadata value](#replacing-placeholders-with-their-metadata-value){#toc-replacing-placeholders-with-their-metadata-value}
    -   [Modifying pandoc's [`MANUAL.txt`] for man pages](#modifying-pandocs-manual.txt-for-man-pages){#toc-modifying-pandocs-manual.txt-for-man-pages}
    -   [Creating a handout from a paper](#creating-a-handout-from-a-paper){#toc-creating-a-handout-from-a-paper}
    -   [Counting words in a document](#counting-words-in-a-document){#toc-counting-words-in-a-document}
    -   [Converting ABC code to music notation](#converting-abc-code-to-music-notation){#toc-converting-abc-code-to-music-notation}
    -   [Building images with Ti*k*Z](#building-images-with-tikz){#toc-building-images-with-tikz}
-   [Lua type reference](#lua-type-reference){#toc-lua-type-reference}
    -   [Shared Properties](#shared-properties){#toc-shared-properties}
        -   [[`clone`]](#clone){#toc-clone}
    -   [Pandoc](#type-pandoc){#toc-type-pandoc}
        -   [walk](#type-pandoc:walk){#toc-type-pandoc:walk}
    -   [Meta](#type-meta){#toc-type-meta}
    -   [MetaValue](#type-metavalue){#toc-type-metavalue}
    -   [Block](#type-block){#toc-type-block}
        -   [Common methods](#common-methods){#toc-common-methods}
        -   [BlockQuote](#type-blockquote){#toc-type-blockquote}
        -   [BulletList](#type-bulletlist){#toc-type-bulletlist}
        -   [CodeBlock](#type-codeblock){#toc-type-codeblock}
        -   [DefinitionList](#type-definitionlist){#toc-type-definitionlist}
        -   [Div](#type-div){#toc-type-div}
        -   [Figure](#type-figure){#toc-type-figure}
        -   [Header](#type-header){#toc-type-header}
        -   [HorizontalRule](#type-horizontalrule){#toc-type-horizontalrule}
        -   [LineBlock](#type-lineblock){#toc-type-lineblock}
        -   [OrderedList](#type-orderedlist){#toc-type-orderedlist}
        -   [Para](#type-para){#toc-type-para}
        -   [Plain](#type-plain){#toc-type-plain}
        -   [RawBlock](#type-rawblock){#toc-type-rawblock}
        -   [Table](#type-table){#toc-type-table}
    -   [Blocks](#type-blocks){#toc-type-blocks}
        -   [Methods](#methods){#toc-methods}
    -   [Inline](#type-inline){#toc-type-inline}
        -   [Common methods](#common-methods-1){#toc-common-methods-1}
        -   [Cite](#type-cite){#toc-type-cite}
        -   [Code](#type-code){#toc-type-code}
        -   [Emph](#type-emph){#toc-type-emph}
        -   [Image](#type-image){#toc-type-image}
        -   [LineBreak](#type-linebreak){#toc-type-linebreak}
        -   [Link](#type-link){#toc-type-link}
        -   [Math](#type-math){#toc-type-math}
        -   [Note](#type-note){#toc-type-note}
        -   [Quoted](#type-quoted){#toc-type-quoted}
        -   [RawInline](#type-rawinline){#toc-type-rawinline}
        -   [SmallCaps](#type-smallcaps){#toc-type-smallcaps}
        -   [SoftBreak](#type-softbreak){#toc-type-softbreak}
        -   [Space](#type-space){#toc-type-space}
        -   [Span](#type-span){#toc-type-span}
        -   [Str](#type-str){#toc-type-str}
        -   [Strikeout](#type-strikeout){#toc-type-strikeout}
        -   [Strong](#type-strong){#toc-type-strong}
        -   [Subscript](#type-subscript){#toc-type-subscript}
        -   [Superscript](#type-superscript){#toc-type-superscript}
        -   [Underline](#type-underline){#toc-type-underline}
    -   [Inlines](#type-inlines){#toc-type-inlines}
        -   [Methods](#methods-1){#toc-methods-1}
    -   [Element components](#element-components){#toc-element-components}
        -   [Attr](#type-attr){#toc-type-attr}
        -   [Attributes](#type-attributes){#toc-type-attributes}
        -   [Caption](#type-caption){#toc-type-caption}
        -   [Cell](#type-cell){#toc-type-cell}
        -   [Citation](#type-citation){#toc-type-citation}
        -   [ColSpec](#type-colspec){#toc-type-colspec}
        -   [ListAttributes](#type-listattributes){#toc-type-listattributes}
        -   [Row](#type-row){#toc-type-row}
        -   [TableBody](#type-tablebody){#toc-type-tablebody}
        -   [TableFoot](#type-tablefoot){#toc-type-tablefoot}
        -   [TableHead](#type-tablehead){#toc-type-tablehead}
    -   [ReaderOptions](#type-readeroptions){#toc-type-readeroptions}
    -   [WriterOptions](#type-writeroptions){#toc-type-writeroptions}
    -   [CommonState](#type-commonstate){#toc-type-commonstate}
    -   [Doc](#type-doc){#toc-type-doc}
    -   [List](#type-list){#toc-type-list}
    -   [LogMessage](#type-logmessage){#toc-type-logmessage}
    -   [SimpleTable](#type-simpletable){#toc-type-simpletable}
    -   [Template](#type-template){#toc-type-template}
    -   [Version](#type-version){#toc-type-version}
        -   [[`must_be_at_least`]](#must_be_at_least){#toc-must_be_at_least}
    -   [Chunk](#type-chunk){#toc-type-chunk}
    -   [ChunkedDoc](#type-chunkeddoc){#toc-type-chunkeddoc}
-   [Module pandoc](#module-pandoc){#toc-module-pandoc}
    -   [Static Fields](#pandoc.fields){#toc-pandoc.fields}
        -   [readers](#pandoc.readers){#toc-pandoc.readers}
        -   [writers](#pandoc.writers){#toc-pandoc.writers}
    -   [Pandoc](#pandoc){#toc-pandoc}
        -   [[`Pandoc (blocks[, meta])`]](#pandoc.pandoc){#toc-pandoc.pandoc}
    -   [Meta](#meta){#toc-meta}
        -   [[`Meta (table)`]](#pandoc.meta){#toc-pandoc.meta}
    -   [MetaValue](#metavalue){#toc-metavalue}
        -   [[`MetaBlocks (blocks)`]](#pandoc.metablocks){#toc-pandoc.metablocks}
        -   [[`MetaInlines (inlines)`]](#pandoc.metainlines){#toc-pandoc.metainlines}
        -   [[`MetaList (meta_values)`]](#pandoc.metalist){#toc-pandoc.metalist}
        -   [[`MetaMap (key_value_map)`]](#pandoc.metamap){#toc-pandoc.metamap}
        -   [[`MetaString (str)`]](#pandoc.metastring){#toc-pandoc.metastring}
        -   [[`MetaBool (bool)`]](#pandoc.metabool){#toc-pandoc.metabool}
    -   [Block](#block){#toc-block}
        -   [[`BlockQuote (content)`]](#pandoc.blockquote){#toc-pandoc.blockquote}
        -   [[`BulletList (items)`]](#pandoc.bulletlist){#toc-pandoc.bulletlist}
        -   [[`CodeBlock (text[, attr])`]](#pandoc.codeblock){#toc-pandoc.codeblock}
        -   [[`DefinitionList (content)`]](#pandoc.definitionlist){#toc-pandoc.definitionlist}
        -   [[`Div (content[, attr])`]](#pandoc.div){#toc-pandoc.div}
        -   [[`Figure (content[, caption[, attr]])`]](#pandoc.figure){#toc-pandoc.figure}
        -   [[`Header (level, content[, attr])`]](#pandoc.header){#toc-pandoc.header}
        -   [[`HorizontalRule ()`]](#pandoc.horizontalrule){#toc-pandoc.horizontalrule}
        -   [[`LineBlock (content)`]](#pandoc.lineblock){#toc-pandoc.lineblock}
        -   [[`OrderedList (items[, listAttributes])`]](#pandoc.orderedlist){#toc-pandoc.orderedlist}
        -   [[`Para (content)`]](#pandoc.para){#toc-pandoc.para}
        -   [[`Plain (content)`]](#pandoc.plain){#toc-pandoc.plain}
        -   [[`RawBlock (format, text)`]](#pandoc.rawblock){#toc-pandoc.rawblock}
        -   [[`Table (caption, colspecs, head, bodies, foot[, attr])`]](#pandoc.table){#toc-pandoc.table}
    -   [Blocks](#blocks){#toc-blocks}
        -   [[`Blocks (block_like_elements)`]](#pandoc.blocks){#toc-pandoc.blocks}
    -   [Inline](#inline){#toc-inline}
        -   [[`Cite (content, citations)`]](#pandoc.cite){#toc-pandoc.cite}
        -   [[`Code (text[, attr])`]](#pandoc.code){#toc-pandoc.code}
        -   [[`Emph (content)`]](#pandoc.emph){#toc-pandoc.emph}
        -   [[`Image (caption, src[, title[, attr]])`]](#pandoc.image){#toc-pandoc.image}
        -   [[`LineBreak ()`]](#pandoc.linebreak){#toc-pandoc.linebreak}
        -   [[`Link (content, target[, title[, attr]])`]](#pandoc.link){#toc-pandoc.link}
        -   [[`Math (mathtype, text)`]](#pandoc.math){#toc-pandoc.math}
        -   [[`DisplayMath (text)`]](#pandoc.displaymath){#toc-pandoc.displaymath}
        -   [[`InlineMath (text)`]](#pandoc.inlinemath){#toc-pandoc.inlinemath}
        -   [[`Note (content)`]](#pandoc.note){#toc-pandoc.note}
        -   [[`Quoted (quotetype, content)`]](#pandoc.quoted){#toc-pandoc.quoted}
        -   [[`SingleQuoted (content)`]](#pandoc.singlequoted){#toc-pandoc.singlequoted}
        -   [[`DoubleQuoted (content)`]](#pandoc.doublequoted){#toc-pandoc.doublequoted}
        -   [[`RawInline (format, text)`]](#pandoc.rawinline){#toc-pandoc.rawinline}
        -   [[`SmallCaps (content)`]](#pandoc.smallcaps){#toc-pandoc.smallcaps}
        -   [[`SoftBreak ()`]](#pandoc.softbreak){#toc-pandoc.softbreak}
        -   [[`Space ()`]](#pandoc.space){#toc-pandoc.space}
        -   [[`Span (content[, attr])`]](#pandoc.span){#toc-pandoc.span}
        -   [[`Str (text)`]](#pandoc.str){#toc-pandoc.str}
        -   [[`Strikeout (content)`]](#pandoc.strikeout){#toc-pandoc.strikeout}
        -   [[`Strong (content)`]](#pandoc.strong){#toc-pandoc.strong}
        -   [[`Subscript (content)`]](#pandoc.subscript){#toc-pandoc.subscript}
        -   [[`Superscript (content)`]](#pandoc.superscript){#toc-pandoc.superscript}
        -   [[`Underline (content)`]](#pandoc.underline){#toc-pandoc.underline}
    -   [Inlines](#inlines){#toc-inlines}
        -   [[`Inlines (inline_like_elements)`]](#pandoc.inlines){#toc-pandoc.inlines}
    -   [Element components](#element-components-1){#toc-element-components-1}
        -   [[`Attr ([identifier[, classes[, attributes]]])`]](#pandoc.attr){#toc-pandoc.attr}
        -   [[`Cell (blocks[, align[, rowspan[, colspan[, attr]]]])`]](#pandoc.cell){#toc-pandoc.cell}
        -   [[`Citation (id, mode[, prefix[, suffix[, note_num[, hash]]]])`]](#pandoc.citation){#toc-pandoc.citation}
        -   [[`ListAttributes ([start[, style[, delimiter]]])`]](#pandoc.listattributes){#toc-pandoc.listattributes}
        -   [[`Row ([cells[, attr]])`]](#pandoc.row){#toc-pandoc.row}
        -   [[`TableFoot ([rows[, attr]])`]](#pandoc.tablefoot){#toc-pandoc.tablefoot}
        -   [[`TableHead ([rows[, attr]])`]](#pandoc.tablehead){#toc-pandoc.tablehead}
    -   [Legacy types](#legacy-types){#toc-legacy-types}
        -   [[`SimpleTable (caption, aligns, widths, headers, rows)`]](#pandoc.simpletable){#toc-pandoc.simpletable}
    -   [Constants](#constants){#toc-constants}
    -   [Other constructors](#other-constructors){#toc-other-constructors}
        -   [[`ReaderOptions (opts)`]](#pandoc.readeroptions){#toc-pandoc.readeroptions}
        -   [[`WriterOptions (opts)`]](#pandoc.writeroptions){#toc-pandoc.writeroptions}
    -   [Helper functions](#helper-functions){#toc-helper-functions}
        -   [[`pipe (command, args, input)`]](#pandoc.pipe){#toc-pandoc.pipe}
        -   [[`walk_block (element, filter)`]](#pandoc.walk_block){#toc-pandoc.walk_block}
        -   [[`walk_inline (element, filter)`]](#pandoc.walk_inline){#toc-pandoc.walk_inline}
        -   [[`read (markup[, format[, reader_options]])`]](#pandoc.read){#toc-pandoc.read}
        -   [[`write (doc[, format[, writer_options]])`]](#pandoc.write){#toc-pandoc.write}
        -   [[`write_classic (doc[, writer_options])`]](#pandoc.write_custom){#toc-pandoc.write_custom}
-   [Module pandoc.cli](#module-pandoc.cli){#toc-module-pandoc.cli}
    -   [Fields](#pandoc.cli-fields){#toc-pandoc.cli-fields}
        -   [default_options](#pandoc.cli.default_options){#toc-pandoc.cli.default_options}
    -   [Functions](#pandoc.cli-functions){#toc-pandoc.cli-functions}
        -   [parse_options](#pandoc.cli.parse_options){#toc-pandoc.cli.parse_options}
        -   [repl](#pandoc.cli.repl){#toc-pandoc.cli.repl}
-   [Module pandoc.utils](#module-pandoc.utils){#toc-module-pandoc.utils}
    -   [Functions](#pandoc.utils-functions){#toc-pandoc.utils-functions}
        -   [blocks_to_inlines](#pandoc.utils.blocks_to_inlines){#toc-pandoc.utils.blocks_to_inlines}
        -   [citeproc](#pandoc.utils.citeproc){#toc-pandoc.utils.citeproc}
        -   [equals](#pandoc.utils.equals){#toc-pandoc.utils.equals}
        -   [from_simple_table](#pandoc.utils.from_simple_table){#toc-pandoc.utils.from_simple_table}
        -   [make_sections](#pandoc.utils.make_sections){#toc-pandoc.utils.make_sections}
        -   [references](#pandoc.utils.references){#toc-pandoc.utils.references}
        -   [run_json_filter](#pandoc.utils.run_json_filter){#toc-pandoc.utils.run_json_filter}
        -   [normalize_date](#pandoc.utils.normalize_date){#toc-pandoc.utils.normalize_date}
        -   [sha1](#pandoc.utils.sha1){#toc-pandoc.utils.sha1}
        -   [stringify](#pandoc.utils.stringify){#toc-pandoc.utils.stringify}
        -   [to_roman_numeral](#pandoc.utils.to_roman_numeral){#toc-pandoc.utils.to_roman_numeral}
        -   [to_simple_table](#pandoc.utils.to_simple_table){#toc-pandoc.utils.to_simple_table}
        -   [type](#pandoc.utils.type){#toc-pandoc.utils.type}
        -   [Version](#pandoc.utils.Version){#toc-pandoc.utils.Version}
-   [Module pandoc.mediabag](#module-pandoc.mediabag){#toc-module-pandoc.mediabag}
    -   [Functions](#pandoc.mediabag-functions){#toc-pandoc.mediabag-functions}
        -   [delete](#pandoc.mediabag.delete){#toc-pandoc.mediabag.delete}
        -   [empty](#pandoc.mediabag.empty){#toc-pandoc.mediabag.empty}
        -   [fetch](#pandoc.mediabag.fetch){#toc-pandoc.mediabag.fetch}
        -   [fill](#pandoc.mediabag.fill){#toc-pandoc.mediabag.fill}
        -   [insert](#pandoc.mediabag.insert){#toc-pandoc.mediabag.insert}
        -   [items](#pandoc.mediabag.items){#toc-pandoc.mediabag.items}
        -   [list](#pandoc.mediabag.list){#toc-pandoc.mediabag.list}
        -   [lookup](#pandoc.mediabag.lookup){#toc-pandoc.mediabag.lookup}
        -   [write](#pandoc.mediabag.write){#toc-pandoc.mediabag.write}
-   [Module pandoc.List](#module-pandoc.list){#toc-module-pandoc.list}
    -   [Constructor](#constructor){#toc-constructor}
    -   [Metamethods](#metamethods){#toc-metamethods}
        -   [[`pandoc.List:__concat (list)`]](#pandoc.list:__concat){#toc-pandoc.list:__concat}
        -   [[`pandoc.List:__eq (a, b)`]](#pandoc.list:__eq){#toc-pandoc.list:__eq}
    -   [Methods](#methods-2){#toc-methods-2}
        -   [[`pandoc.List:clone ()`]](#pandoc.list:clone){#toc-pandoc.list:clone}
        -   [[`pandoc.List:extend (list)`]](#pandoc.list:extend){#toc-pandoc.list:extend}
        -   [[`pandoc.List:find (needle, init)`]](#pandoc.list:find){#toc-pandoc.list:find}
        -   [[`pandoc.List:find_if (pred, init)`]](#pandoc.list:find_if){#toc-pandoc.list:find_if}
        -   [[`pandoc.List:filter (pred)`]](#pandoc.list:filter){#toc-pandoc.list:filter}
        -   [[`pandoc.List:includes (needle, init)`]](#pandoc.list:includes){#toc-pandoc.list:includes}
        -   [[`pandoc.List:insert ([pos], value)`]](#pandoc.list:insert){#toc-pandoc.list:insert}
        -   [[`pandoc.List:map (fn)`]](#pandoc.list:map){#toc-pandoc.list:map}
        -   [[`pandoc.List:new([table])`]](#pandoc.list:new){#toc-pandoc.list:new}
        -   [[`pandoc.List:remove ([pos])`]](#pandoc.list:remove){#toc-pandoc.list:remove}
        -   [[`pandoc.List:sort ([comp])`]](#pandoc.list:sort){#toc-pandoc.list:sort}
-   [Module pandoc.format](#module-pandoc.format){#toc-module-pandoc.format}
    -   [Functions](#pandoc.format-functions){#toc-pandoc.format-functions}
        -   [all_extensions](#pandoc.format.all_extensions){#toc-pandoc.format.all_extensions}
        -   [default_extensions](#pandoc.format.default_extensions){#toc-pandoc.format.default_extensions}
        -   [extensions](#pandoc.format.extensions){#toc-pandoc.format.extensions}
        -   [from_path](#pandoc.format.from_path){#toc-pandoc.format.from_path}
-   [Module pandoc.json](#module-pandoc.json){#toc-module-pandoc.json}
    -   [Fields](#pandoc.json-fields){#toc-pandoc.json-fields}
        -   [null](#pandoc.json.null){#toc-pandoc.json.null}
    -   [Functions](#pandoc.json-functions){#toc-pandoc.json-functions}
        -   [decode](#pandoc.json.decode){#toc-pandoc.json.decode}
        -   [encode](#pandoc.json.encode){#toc-pandoc.json.encode}
-   [Module pandoc.path](#module-pandoc.path){#toc-module-pandoc.path}
    -   [Fields](#pandoc.path-fields){#toc-pandoc.path-fields}
        -   [separator](#pandoc.path.separator){#toc-pandoc.path.separator}
        -   [search_path_separator](#pandoc.path.search_path_separator){#toc-pandoc.path.search_path_separator}
    -   [Functions](#pandoc.path-functions){#toc-pandoc.path-functions}
        -   [directory](#pandoc.path.directory){#toc-pandoc.path.directory}
        -   [filename](#pandoc.path.filename){#toc-pandoc.path.filename}
        -   [is_absolute](#pandoc.path.is_absolute){#toc-pandoc.path.is_absolute}
        -   [is_relative](#pandoc.path.is_relative){#toc-pandoc.path.is_relative}
        -   [join](#pandoc.path.join){#toc-pandoc.path.join}
        -   [make_relative](#pandoc.path.make_relative){#toc-pandoc.path.make_relative}
        -   [normalize](#pandoc.path.normalize){#toc-pandoc.path.normalize}
        -   [split](#pandoc.path.split){#toc-pandoc.path.split}
        -   [split_extension](#pandoc.path.split_extension){#toc-pandoc.path.split_extension}
        -   [split_search_path](#pandoc.path.split_search_path){#toc-pandoc.path.split_search_path}
        -   [treat_strings_as_paths](#pandoc.path.treat_strings_as_paths){#toc-pandoc.path.treat_strings_as_paths}
-   [Module pandoc.structure](#module-pandoc.structure){#toc-module-pandoc.structure}
    -   [Functions](#pandoc.structure-functions){#toc-pandoc.structure-functions}
        -   [make_sections](#pandoc.structure.make_sections){#toc-pandoc.structure.make_sections}
        -   [slide_level](#pandoc.structure.slide_level){#toc-pandoc.structure.slide_level}
        -   [split_into_chunks](#pandoc.structure.split_into_chunks){#toc-pandoc.structure.split_into_chunks}
        -   [table_of_contents](#pandoc.structure.table_of_contents){#toc-pandoc.structure.table_of_contents}
-   [Module pandoc.system](#module-pandoc.system){#toc-module-pandoc.system}
    -   [Fields](#pandoc.system-fields){#toc-pandoc.system-fields}
        -   [arch](#pandoc.system.arch){#toc-pandoc.system.arch}
        -   [os](#pandoc.system.os){#toc-pandoc.system.os}
    -   [Functions](#pandoc.system-functions){#toc-pandoc.system-functions}
        -   [cputime](#pandoc.system.cputime){#toc-pandoc.system.cputime}
        -   [environment](#pandoc.system.environment){#toc-pandoc.system.environment}
        -   [get_working_directory](#pandoc.system.get_working_directory){#toc-pandoc.system.get_working_directory}
        -   [list_directory](#pandoc.system.list_directory){#toc-pandoc.system.list_directory}
        -   [make_directory](#pandoc.system.make_directory){#toc-pandoc.system.make_directory}
        -   [remove_directory](#pandoc.system.remove_directory){#toc-pandoc.system.remove_directory}
        -   [with_environment](#pandoc.system.with_environment){#toc-pandoc.system.with_environment}
        -   [with_temporary_directory](#pandoc.system.with_temporary_directory){#toc-pandoc.system.with_temporary_directory}
        -   [with_working_directory](#pandoc.system.with_working_directory){#toc-pandoc.system.with_working_directory}
-   [Module pandoc.layout](#module-pandoc.layout){#toc-module-pandoc.layout}
    -   [Fields](#pandoc.layout-fields){#toc-pandoc.layout-fields}
        -   [blankline](#pandoc.layout.blankline){#toc-pandoc.layout.blankline}
        -   [cr](#pandoc.layout.cr){#toc-pandoc.layout.cr}
        -   [empty](#pandoc.layout.empty){#toc-pandoc.layout.empty}
        -   [space](#pandoc.layout.space){#toc-pandoc.layout.space}
    -   [Functions](#pandoc.layout-functions){#toc-pandoc.layout-functions}
        -   [after_break](#pandoc.layout.after_break){#toc-pandoc.layout.after_break}
        -   [before_non_blank](#pandoc.layout.before_non_blank){#toc-pandoc.layout.before_non_blank}
        -   [blanklines](#pandoc.layout.blanklines){#toc-pandoc.layout.blanklines}
        -   [braces](#pandoc.layout.braces){#toc-pandoc.layout.braces}
        -   [brackets](#pandoc.layout.brackets){#toc-pandoc.layout.brackets}
        -   [cblock](#pandoc.layout.cblock){#toc-pandoc.layout.cblock}
        -   [chomp](#pandoc.layout.chomp){#toc-pandoc.layout.chomp}
        -   [concat](#pandoc.layout.concat){#toc-pandoc.layout.concat}
        -   [double_quotes](#pandoc.layout.double_quotes){#toc-pandoc.layout.double_quotes}
        -   [flush](#pandoc.layout.flush){#toc-pandoc.layout.flush}
        -   [hang](#pandoc.layout.hang){#toc-pandoc.layout.hang}
        -   [inside](#pandoc.layout.inside){#toc-pandoc.layout.inside}
        -   [lblock](#pandoc.layout.lblock){#toc-pandoc.layout.lblock}
        -   [literal](#pandoc.layout.literal){#toc-pandoc.layout.literal}
        -   [nest](#pandoc.layout.nest){#toc-pandoc.layout.nest}
        -   [nestle](#pandoc.layout.nestle){#toc-pandoc.layout.nestle}
        -   [nowrap](#pandoc.layout.nowrap){#toc-pandoc.layout.nowrap}
        -   [parens](#pandoc.layout.parens){#toc-pandoc.layout.parens}
        -   [prefixed](#pandoc.layout.prefixed){#toc-pandoc.layout.prefixed}
        -   [quotes](#pandoc.layout.quotes){#toc-pandoc.layout.quotes}
        -   [rblock](#pandoc.layout.rblock){#toc-pandoc.layout.rblock}
        -   [vfill](#pandoc.layout.vfill){#toc-pandoc.layout.vfill}
        -   [render](#pandoc.layout.render){#toc-pandoc.layout.render}
        -   [is_empty](#pandoc.layout.is_empty){#toc-pandoc.layout.is_empty}
        -   [height](#pandoc.layout.height){#toc-pandoc.layout.height}
        -   [min_offset](#pandoc.layout.min_offset){#toc-pandoc.layout.min_offset}
        -   [offset](#pandoc.layout.offset){#toc-pandoc.layout.offset}
        -   [real_length](#pandoc.layout.real_length){#toc-pandoc.layout.real_length}
        -   [update_column](#pandoc.layout.update_column){#toc-pandoc.layout.update_column}
-   [Module pandoc.scaffolding](#module-pandoc.scaffolding){#toc-module-pandoc.scaffolding}
    -   [Fields](#pandoc.scaffolding-fields){#toc-pandoc.scaffolding-fields}
        -   [Writer](#pandoc.scaffolding.Writer){#toc-pandoc.scaffolding.Writer}
-   [Module pandoc.text](#module-pandoc.text){#toc-module-pandoc.text}
    -   [Functions](#pandoc.text-functions){#toc-pandoc.text-functions}
        -   [fromencoding](#pandoc.text.fromencoding){#toc-pandoc.text.fromencoding}
        -   [len](#pandoc.text.len){#toc-pandoc.text.len}
        -   [lower](#pandoc.text.lower){#toc-pandoc.text.lower}
        -   [reverse](#pandoc.text.reverse){#toc-pandoc.text.reverse}
        -   [sub](#pandoc.text.sub){#toc-pandoc.text.sub}
        -   [toencoding](#pandoc.text.toencoding){#toc-pandoc.text.toencoding}
        -   [upper](#pandoc.text.upper){#toc-pandoc.text.upper}
-   [Module pandoc.template](#module-pandoc.template){#toc-module-pandoc.template}
    -   [apply](#pandoc.template.apply){#toc-pandoc.template.apply}
    -   [compile](#pandoc.template.compile){#toc-pandoc.template.compile}
    -   [default](#pandoc.template.default){#toc-pandoc.template.default}
    -   [meta_to_context](#pandoc.template.meta_to_context){#toc-pandoc.template.meta_to_context}
-   [Module pandoc.types](#module-pandoc.types){#toc-module-pandoc.types}
    -   [Version](#pandoc.types.version){#toc-pandoc.types.version}
-   [Module pandoc.zip](#module-pandoc.zip){#toc-module-pandoc.zip}
    -   [Functions](#pandoc.zip-functions){#toc-pandoc.zip-functions}
        -   [Archive](#pandoc.zip.Archive){#toc-pandoc.zip.Archive}
        -   [Entry](#pandoc.zip.Entry){#toc-pandoc.zip.Entry}
        -   [read_entry](#pandoc.zip.read_entry){#toc-pandoc.zip.read_entry}
        -   [zip](#pandoc.zip.zip){#toc-pandoc.zip.zip}
    -   [Types](#pandoc.zip-types){#toc-pandoc.zip-types}
        -   [zip.Archive](#type-pandoc.zip.Archive){#toc-type-pandoc.zip.Archive}
        -   [zip.Entry](#type-pandoc.zip.Entry){#toc-type-pandoc.zip.Entry}
:::
::::

# Introduction

Pandoc has long supported filters, which allow the pandoc abstract
syntax tree (AST) to be manipulated between the parsing and the writing
phase. [Traditional pandoc filters](https://pandoc.org/filters.html)
accept a JSON representation of the pandoc AST and produce an altered
JSON representation of the AST. They may be written in any programming
language, and invoked from pandoc using the [`--filter`]
option.

Although traditional filters are very flexible, they have a couple of
disadvantages. First, there is some overhead in writing JSON to stdout
and reading it from stdin (twice, once on each side of the filter).
Second, whether a filter will work will depend on details of the user's
environment. A filter may require an interpreter for a certain
programming language to be available, as well as a library for
manipulating the pandoc AST in JSON form. One cannot simply provide a
filter that can be used by anyone who has a certain version of the
pandoc executable.

Starting with version 2.0, pandoc makes it possible to write filters in
Lua without any external dependencies at all. A Lua interpreter (version
5.4) and a Lua library for creating pandoc filters is built into the
pandoc executable. Pandoc data types are marshaled to Lua directly,
avoiding the overhead of writing JSON to stdout and reading it from
stdin.

Here is an example of a Lua filter that converts strong emphasis to
small caps:

::: {#cb1 .sourceCode}
```lua
return {
  {
    Strong = function (elem)
      return pandoc.SmallCaps(elem.content)
    end,
  }
}
```
:::

or equivalently,

::: {#cb2 .sourceCode}
```lua
function Strong(elem)
  return pandoc.SmallCaps(elem.content)
end
```
:::

This says: walk the AST, and when you find a Strong element, replace it
with a SmallCaps element with the same content.

To run it, save it in a file, say [`smallcaps.lua`], and invoke
pandoc with [`--lua-filter=smallcaps.lua`].

Here's a quick performance comparison, converting the pandoc manual
(MANUAL.txt) to HTML, with versions of the same JSON filter written in
compiled Haskell ([`smallcaps`]) and interpreted Python
([`smallcaps.py`]):

  Command                                            Time
  -------------------------------------------------- -------
  [`pandoc`]                                1.01s
  [`pandoc --filter ./smallcaps`]           1.36s
  [`pandoc --filter ./smallcaps.py`]        1.40s
  [`pandoc --lua-filter ./smallcaps.lua`]   1.03s

As you can see, the Lua filter avoids the substantial overhead
associated with marshaling to and from JSON over a pipe.
:::::

# Lua filter structure

Lua filters are tables with element names as keys and values consisting
of functions acting on those elements.

Filters are expected to be put into separate files and are passed via
the [`--lua-filter`] command-line argument. For example, if a
filter is defined in a file [`current-date.lua`], then it would
be applied like this:

    pandoc --lua-filter=current-date.lua -f markdown MANUAL.txt

The [`--lua-filter`] option may be supplied multiple times.
Pandoc applies all filters (including JSON filters specified via
[`--filter`] and Lua filters specified via
[`--lua-filter`]) in the order they appear on the command line.

Pandoc expects each Lua file to return a list of filters. The filters in
that list are called sequentially, each on the result of the previous
filter. If there is no value returned by the filter script, then pandoc
will try to generate a single filter by collecting all top-level
functions whose names correspond to those of pandoc elements (e.g.,
[`Str`], [`Para`], [`Meta`], or
[`Pandoc`]). (That is why the two examples above are
equivalent.)

For each filter, the document is traversed and each element subjected to
the filter. Elements for which the filter contains an entry (i.e. a
function of the same name) are passed to Lua element filtering function.
In other words, filter entries will be called for each corresponding
element in the document, getting the respective element as input.

The return value of a filter function must be one of the following:

-   nil: this means that the object should remain unchanged.
-   a pandoc object: this must be of the same type as the input and will
    replace the original object.
-   a list of pandoc objects: these will replace the original object;
    the list is merged with the neighbors of the original objects
    (spliced into the list the original object belongs to); returning an
    empty list deletes the object.

The function's output must result in an element of the same type as the
input. This means a filter function acting on an inline element must
return either nil, an inline, or a list of inlines, and a function
filtering a block element must return one of nil, a block, or a list of
block elements. Pandoc will throw an error if this condition is
violated.

If there is no function matching the element's node type, then the
filtering system will look for a more general fallback function. Two
fallback functions are supported, [`Inline`] and
[`Block`]. Each matches elements of the respective type.

Elements without matching functions are left untouched.

See [module documentation](#module-pandoc) for a list of pandoc
elements.

## Filters on element sequences

For some filtering tasks, it is necessary to know the order in which
elements occur in the document. It is not enough then to inspect a
single element at a time.

There are two special function names, which can be used to define
filters on lists of blocks or lists of inlines.

[[`Inlines (inlines)`]]{#inlines-filter}
:   If present in a filter, this function will be called on all lists of
    inline elements, like the content of a [Para](#type-para)
    (paragraph) block, or the description of an [Image](#type-image).
    The [`inlines`] argument passed to the function will be a
    [List](#type-list) of [Inline](#type-inline) elements for each call.

[[`Blocks (blocks)`]]{#blocks-filter}
:   If present in a filter, this function will be called on all lists of
    block elements, like the content of a [MetaBlocks](#type-metablocks)
    meta element block, on each item of a list, and the main content of
    the [Pandoc](#type-pandoc) document. The [`blocks`]
    argument passed to the function will be a [List](#type-list) of
    [Block](#type-block) elements for each call.

These filter functions are special in that the result must either be
nil, in which case the list is left unchanged, or must be a list of the
correct type, i.e., the same type as the input argument. Single elements
are **not** allowed as return values, as a single element in this
context usually hints at a bug.

See ["Remove spaces before normal
citations"](#remove-spaces-before-citations) for an example.

This functionality has been added in pandoc 2.9.2.
:::

## Traversal order

The traversal order of filters can be selected by setting the key
[`traverse`] to either [`'topdown'`] or
[`'typewise'`]; the default is [`'typewise'`].

Example:

::: {#cb4 .sourceCode}
```lua
local filter = {
  traverse = 'topdown',
  -- ... filter functions ...
}
return {filter}
```
:::

Support for this was added in pandoc 2.17; previous versions ignore the
[`traverse`] setting.

### Typewise traversal

Element filter functions within a filter set are called in a fixed
order, skipping any which are not present:

1.  functions for [*Inline* elements](#type-inline),
2.  the [[`Inlines`]](#inlines-filter) filter function,
3.  functions for [*Block* elements](#type-block) ,
4.  the [[`Blocks`]](#inlines-filter) filter function,
5.  the [[`Meta`]](#type-meta) filter function, and last
6.  the [[`Pandoc`]](#type-pandoc) filter function.

It is still possible to force a different order by explicitly returning
multiple filter sets. For example, if the filter for *Meta* is to be run
before that for *Str*, one can write

::: {#cb5 .sourceCode}
```lua
-- ... filter definitions ...

return {
  { Meta = Meta },  -- (1)
  { Str = Str }     -- (2)
}
```
:::

Filter sets are applied in the order in which they are returned. All
functions in set (1) are thus run before those in (2), causing the
filter function for *Meta* to be run before the filtering of *Str*
elements is started.
::::

### Topdown traversal

It is sometimes more natural to traverse the document tree depth-first
from the root towards the leaves, and all in a single run.

For example, a block list `[Plain [Str "a"], Para [ Str "b"]]` will try the
following filter functions, in order: [`Blocks`],
[`Plain`], [`Inlines`], [`Str`],
[`Para`], [`Inlines`], [`Str`].

Topdown traversals can be cut short by returning [`false`] as a
second value from the filter function. No child-element of the returned
element is processed in that case.

For example, to exclude the contents of a footnote from being processed,
one might write

::: {#cb6 .sourceCode}
```lua
traverse = 'topdown'
function Note (n)
  return n, false
end
```
:::
::::
::::::::

## Global variables

Pandoc passes additional data to Lua filters by setting global
variables.

[`FORMAT`]
:   The global [`FORMAT`] is set to the format of the pandoc
    writer being used ([`html5`], [`latex`], etc.), so
    the behavior of a filter can be made conditional on the eventual
    output format.

[`PANDOC_READER_OPTIONS`]
:   Table of the options which were provided to the parser.
    ([ReaderOptions](#type-readeroptions))

[`PANDOC_WRITER_OPTIONS`]

:   Table of the options that will be passed to the writer. While the
    object can be modified, the changes will **not** be picked up by
    pandoc. ([WriterOptions](#type-writeroptions))

    Accessing this variable in **custom writers** is **deprecated**.
    Starting with pandoc 3.0, it is set to a placeholder value (the
    default options) in custom writers. Access to the actual writer
    options is provided via the [`Writer`] or
    [`ByteStringWriter`] function, to which the options are
    passed as the second function argument.

    *Since: pandoc 2.17*

[`PANDOC_VERSION`]
:   Contains the pandoc version as a [Version](#type-version) object
    which behaves like a numerically indexed table, most significant
    number first. E.g., for pandoc 2.7.3, the value of the variable is
    equivalent to a table [`{2, 7, 3}`]. Use
    [`tostring(PANDOC_VERSION)`] to produce a version string.
    This variable is also set in custom writers.

[`PANDOC_API_VERSION`]
:   Contains the version of the pandoc-types API against which pandoc
    was compiled. It is given as a numerically indexed table, most
    significant number first. E.g., if pandoc was compiled against
    pandoc-types 1.17.3, then the value of the variable will behave like
    the table [`{1, 17, 3}`]. Use
    [`tostring(PANDOC_API_VERSION)`] to produce a version
    string. This variable is also set in custom writers.

[`PANDOC_SCRIPT_FILE`]
:   The name used to involve the filter. This value can be used to find
    files relative to the script file. This variable is also set in
    custom writers.

[`PANDOC_STATE`]
:   The state shared by all readers and writers. It is used by pandoc to
    collect and pass information. The value of this variable is of type
    [CommonState](#type-commonstate) and is read-only.

[`pandoc`]
:   The *pandoc* module, described in the next section, is available
    through the global [`pandoc`]. The other modules described
    herein are loaded as subfields under their respective name.

[`lpeg`]

:   This variable holds the [`lpeg`] module, a package based on
    Parsing Expression Grammars (PEG). It provides excellent parsing
    utilities and is documented on the official [LPeg
    homepage](http://www.inf.puc-rio.br/~roberto/lpeg/). Pandoc uses a
    built-in version of the library, unless it has been configured by
    the package maintainer to rely on a system-wide installation.

    Note that the result of [`require 'lpeg'`] is not
    necessarily equal to this value; the [`require`] mechanism
    prefers the system's lpeg library over the built-in version.

[`re`]

:   Contains the LPeg.re module, which is built on top of LPeg and
    offers an implementation of a [regex
    engine](http://www.inf.puc-rio.br/~roberto/lpeg/re.html). Pandoc
    uses a built-in version of the library, unless it has been
    configured by the package maintainer to rely on a system-wide
    installation.

    Note that the result of [`require 're`] is not necessarily
    equal to this value; the [`require`] mechanism prefers the
    system's lpeg library over the built-in version.
:::
:::::::::::

# Pandoc Module

The [`pandoc`] Lua module is loaded into the filter's Lua
environment and provides a set of functions and constants to make
creation and manipulation of elements easier. The global variable
[`pandoc`] is bound to the module and should generally not be
overwritten for this reason.

Two major functionalities are provided by the module: element creator
functions and access to some of pandoc's main functionalities.

## Element creation

Element creator functions like [`Str`], [`Para`], and
[`Pandoc`] are designed to allow easy creation of new elements
that are simple to use and can be read back from the Lua environment.
Internally, pandoc uses these functions to create the Lua objects which
are passed to element filter functions. This means that elements created
via this module will behave exactly as those elements accessible through
the filter function parameter.
:::

## Exposed pandoc functionality

Some pandoc functions have been made available in Lua:

-   [[`walk_block`]](#pandoc.walk_block) and
    [[`walk_inline`]](#pandoc.walk_inline) allow filters to be
    applied inside specific block or inline elements;
-   [[`read`]](#pandoc.read) allows filters to parse strings
    into pandoc documents;
-   [[`pipe`]](#pandoc.pipe) runs an external command with
    input from and output to strings;
-   the [[`pandoc.mediabag`]](#module-pandoc.mediabag) module
    allows access to the "mediabag," which stores binary content such as
    images that may be included in the final document;
-   the [[`pandoc.utils`]](#module-pandoc.utils) module
    contains various utility functions.
:::
:::::

# Lua interpreter initialization

Initialization of pandoc's Lua interpreter can be controlled by placing
a file [`init.lua`] in pandoc's data directory. A common
use-case would be to load additional modules, or even to alter default
modules.

The following snippet is an example of code that might be useful when
added to [`init.lua`]. The snippet adds all Unicode-aware
functions defined in the [[`text`] module](#module-text) to the
default [`string`] module, prefixed with the string
[`uc_`].

::: {#cb7 .sourceCode}
```lua
for name, fn in pairs(require 'text') do
  string['uc_' .. name] = fn
end
```
:::

This makes it possible to apply these functions on strings using colon
syntax ([`mystring:uc_upper()`]).
::::

# Debugging Lua filters

William Lupton has written a Lua module with some handy functions for
debugging Lua filters, including functions that can pretty-print the
Pandoc AST elements manipulated by the filters: it is available at
<https://github.com/wlupton/pandoc-lua-logging>.

It is possible to use a debugging interface to halt execution and step
through a Lua filter line by line as it is run inside Pandoc. This is
accomplished using the remote-debugging interface of the package
[[`mobdebug`]](https://github.com/pkulchenko/MobDebug).
Although mobdebug can be run from the terminal, it is more useful run
within the donation-ware Lua editor and IDE, [ZeroBrane
Studio](https://studio.zerobrane.com/). ZeroBrane offers a REPL console
and UI to step-through and view all variables and state.

ZeroBrane doesn't come with Lua 5.4 bundled, but it can debug it, so you
should install Lua 5.4, and then add
[[`mobdebug`]](https://luarocks.org/modules/paulclinger/mobdebug)
and its dependency
[[`luasocket`]](https://luarocks.org/modules/luasocket/luasocket)
using [[`luarocks`]](https://luarocks.org). ZeroBrane can use
your Lua 5.4 install by adding
[`path.lua = "/path/to/your/lua"`] in your ZeroBrane settings
file. Next, open your Lua filter in ZeroBrane, and add
[`require('mobdebug').start()`] at the line where you want your
breakpoint. Then make sure the Project \> Lua Intepreter is set to the
"Lua" you added in settings and enable "Start Debugger Server" [see
detailed instructions
here](https://studio.zerobrane.com/doc-remote-debugging). Run Pandoc as
you normally would, and ZeroBrane should break at the correct line.

## Common pitfalls

AST elements not updated

:   A filtered element will only be updated if the filter function
    returns a new element to replace it. A function like the below has
    no effect, as the function returns no value:

    ::: {#cb8 .sourceCode}
    ```lua
    function Str (str)
      str.text = string.upper(str.text)
    end
    ```
    :::

    The correct version would be

    ::: {#cb9 .sourceCode}
    ```lua
    function Str (str)
      str.text = string.upper(str.text)
      return str
    end
    ```
    :::

Pattern behavior is locale dependent

:   The character classes in Lua's pattern library depend on the current
    locale: E.g., the character [`©`] will be treated as
    punctuation, and matched by the pattern [`%p`], on CP-1252
    locales, but not on systems using a UTF-8 locale.

    A reliable way to ensure unified handling of patterns and character
    classes is to use the "C" locale by adding
    [`os.setlocale 'C'`] to the top of the Lua script.

String library is not Unicode aware

:   Lua's [`string`] library treats each byte as a single
    character. A function like [`string.upper`] will not have
    the intended effect when applied to words with non-ASCII characters.
    Similarly, a pattern like [`[☃]`] will match *any* of the
    bytes [`\240`], [`\159`], [`\154`], and
    [`\178`], but **won't** match the "snowman" Unicode
    character.

    Use the [pandoc.text](#module-text) module for Unicode-aware
    transformation, and consider using using the lpeg or re library for
    pattern matching.
:::
::::

# Examples

The following filters are presented as examples. A repository of useful
Lua filters (which may also serve as good examples) is available at
<https://github.com/pandoc/lua-filters>.

## Macro substitution

The following filter converts the string [`{{helloworld}}`]
into emphasized text "Hello, World".

::: {#cb10 .sourceCode}
```lua
return {
  {
    Str = function (elem)
      if elem.text == "{{helloworld}}" then
        return pandoc.Emph {pandoc.Str "Hello, World"}
      else
        return elem
      end
    end,
  }
}
```
:::
::::

## Center images in LaTeX and HTML output

For LaTeX, wrap an image in LaTeX snippets which cause the image to be
centered horizontally. In HTML, the image element's style attribute is
used to achieve centering.

::: {#cb11 .sourceCode}
```lua
-- Filter images with this function if the target format is LaTeX.
if FORMAT:match 'latex' then
  function Image (elem)
    -- Surround all images with image-centering raw LaTeX.
    return {
      pandoc.RawInline('latex', '\\hfill\\break{\\centering'),
      elem,
      pandoc.RawInline('latex', '\\par}')
    }
  end
end

-- Filter images with this function if the target format is HTML
if FORMAT:match 'html' then
  function Image (elem)
    -- Use CSS style to center image
    elem.attributes.style = 'margin:auto; display: block;'
    return elem
  end
end
```
:::
::::

## Setting the date in the metadata

This filter sets the date in the document's metadata to the current
date, if a date isn't already set:

::: {#cb12 .sourceCode}
```lua
function Meta(m)
  if m.date == nil then
    m.date = os.date("%B %e, %Y")
    return m
  end
end
```
:::
::::

## Remove spaces before citations

This filter removes all spaces preceding an "author-in-text" citation.
In Markdown, author-in-text citations (e.g., [`@citekey`]),
must be preceded by a space. If these spaces are undesired, they must be
removed with a filter.

::: {#cb13 .sourceCode}
```lua
local function is_space_before_author_in_text(spc, cite)
  return spc and spc.t == 'Space'
    and cite and cite.t == 'Cite'
    -- there must be only a single citation, and it must have
    -- mode 'AuthorInText'
    and #cite.citations == 1
    and cite.citations[1].mode == 'AuthorInText'
end

function Inlines (inlines)
  -- Go from end to start to avoid problems with shifting indices.
  for i = #inlines-1, 1, -1 do
    if is_space_before_author_in_text(inlines[i], inlines[i+1]) then
      inlines:remove(i)
    end
  end
  return inlines
end
```
:::
::::

## Replacing placeholders with their metadata value

Lua filter functions are run in the order

> *Inlines → Blocks → Meta → Pandoc*.

Passing information from a higher level (e.g., metadata) to a lower
level (e.g., inlines) is still possible by using two filters living in
the same file:

::: {#cb14 .sourceCode}
```lua
local vars = {}

function get_vars (meta)
  for k, v in pairs(meta) do
    if pandoc.utils.type(v) == 'Inlines' then
      vars["%" .. k .. "%"] = {table.unpack(v)}
    end
  end
end

function replace (el)
  if vars[el.text] then
    return pandoc.Span(vars[el.text])
  else
    return el
  end
end

return {{Meta = get_vars}, {Str = replace}}
```
:::

If the contents of file [`occupations.md`] is

::: {#cb15 .sourceCode}
``` {.sourceCode .markdown}
---
name: Samuel Q. Smith
occupation: Professor of Oenology
---

Name

:   %name%

Occupation

:   %occupation%
```
:::

then running
[`pandoc --lua-filter=meta-vars.lua occupations.md`] will
output:

::: {#cb16 .sourceCode}
```html
<dl>
<dt>Name</dt>
<dd><p><span>Samuel Q. Smith</span></p>
</dd>
<dt>Occupation</dt>
<dd><p><span>Professor of Oenology</span></p>
</dd>
</dl>
```
:::
::::::

## Modifying pandoc's [`MANUAL.txt`] for man pages

This is the filter we use when converting [`MANUAL.txt`] to man
pages. It converts level-1 headers to uppercase (using
[[`walk`]](#type-block:walk) to transform inline elements
inside headers), removes footnotes, and replaces links with regular
text.

::: {#cb17 .sourceCode}
```lua
-- we use pandoc.text to get a UTF-8 aware 'upper' function
local text = pandoc.text

function Header(el)
    if el.level == 1 then
      return el:walk {
        Str = function(el)
            return pandoc.Str(text.upper(el.text))
        end
      }
    end
end

function Link(el)
    return el.content
end

function Note(el)
    return {}
end
```
:::
::::

## Creating a handout from a paper

This filter extracts all the numbered examples, section headers, block
quotes, and figures from a document, in addition to any divs with class
[`handout`]. (Note that only blocks at the "outer level" are
included; this ignores blocks inside nested constructs, like list
items.)

::: {#cb18 .sourceCode}
```lua
-- creates a handout from an article, using its headings,
-- blockquotes, numbered examples, figures, and any
-- Divs with class "handout"

function Pandoc(doc)
    local hblocks = {}
    for i,el in pairs(doc.blocks) do
        if (el.t == "Div" and el.classes[1] == "handout") or
           (el.t == "BlockQuote") or
           (el.t == "OrderedList" and el.style == "Example") or
           (el.t == "Para" and #el.c == 1 and el.c[1].t == "Image") or
           (el.t == "Header") then
           table.insert(hblocks, el)
        end
    end
    return pandoc.Pandoc(hblocks, doc.meta)
end
```
:::
::::

## Counting words in a document

This filter counts the words in the body of a document (omitting
metadata like titles and abstracts), including words in code. It should
be more accurate than [`wc -w`] run directly on a Markdown
document, since the latter will count markup characters, like the
[`#`] in front of an ATX header, or tags in HTML documents, as
words. To run it,
[`pandoc --lua-filter wordcount.lua myfile.md`].

::: {#cb19 .sourceCode}
```lua
-- counts words in a document

words = 0

wordcount = {
  Str = function(el)
    -- we don't count a word if it's entirely punctuation:
    if el.text:match("%P") then
        words = words + 1
    end
  end,

  Code = function(el)
    _,n = el.text:gsub("%S+","")
    words = words + n
  end,

  CodeBlock = function(el)
    _,n = el.text:gsub("%S+","")
    words = words + n
  end
}

function Pandoc(el)
    -- skip metadata, just count body:
    el.blocks:walk(wordcount)
    print(words .. " words in body")
    os.exit(0)
end
```
:::
::::

## Converting ABC code to music notation

This filter replaces code blocks with class [`abc`] with images
created by running their contents through [`abcm2ps`] and
ImageMagick's [`convert`]. (For more on ABC notation, see
<https://abcnotation.com>.)

Images are added to the mediabag. For output to binary formats, pandoc
will use images in the mediabag. For textual formats, use
[`--extract-media`] to specify a directory where the files in
the mediabag will be written, or (for HTML only) use
[`--embed-resources`].

::: {#cb20 .sourceCode}
```lua
-- Pandoc filter to process code blocks with class "abc" containing
-- ABC notation into images.
--
-- * Assumes that abcm2ps and ImageMagick's convert are in the path.
-- * For textual output formats, use --extract-media=abc-images
-- * For HTML formats, you may alternatively use --embed-resources

local filetypes = { html = {"png", "image/png"}
                  , latex = {"pdf", "application/pdf"}
                  }
local filetype = filetypes[FORMAT][1] or "png"
local mimetype = filetypes[FORMAT][2] or "image/png"

local function abc2eps(abc, filetype)
    local eps = pandoc.pipe("abcm2ps", {"-q", "-O", "-", "-"}, abc)
    local final = pandoc.pipe("convert", {"-", filetype .. ":-"}, eps)
    return final
end

function CodeBlock(block)
    if block.classes[1] == "abc" then
        local img = abc2eps(block.text, filetype)
        local fname = pandoc.sha1(img) .. "." .. filetype
        pandoc.mediabag.insert(fname, mimetype, img)
        return pandoc.Para{ pandoc.Image({pandoc.Str("abc tune")}, fname) }
    end
end
```
:::
::::

## Building images with Ti*k*Z

This filter converts raw LaTeX Ti*k*Z environments into images. It works
with both PDF and HTML output. The Ti*k*Z code is compiled to an image
using [`pdflatex`], and the image is converted from pdf to svg
format using
[[`pdf2svg`]](https://github.com/dawbarton/pdf2svg), so both of
these must be in the system path. Converted images are cached in the
working directory and given filenames based on a hash of the source, so
that they need not be regenerated each time the document is built. (A
more sophisticated version of this might put these in a special cache
directory.)

::: {#cb21 .sourceCode}
```lua
local system = require 'pandoc.system'

local tikz_doc_template = [[
\documentclass{standalone}
\usepackage{xcolor}
\usepackage{tikz}
\begin{document}
\nopagecolor
%s
\end{document}
]]

local function tikz2image(src, filetype, outfile)
  system.with_temporary_directory('tikz2image', function (tmpdir)
    system.with_working_directory(tmpdir, function()
      local f = io.open('tikz.tex', 'w')
      f:write(tikz_doc_template:format(src))
      f:close()
      os.execute('pdflatex tikz.tex')
      if filetype == 'pdf' then
        os.rename('tikz.pdf', outfile)
      else
        os.execute('pdf2svg tikz.pdf ' .. outfile)
      end
    end)
  end)
end

extension_for = {
  html = 'svg',
  html4 = 'svg',
  html5 = 'svg',
  latex = 'pdf',
  beamer = 'pdf' }

local function file_exists(name)
  local f = io.open(name, 'r')
  if f ~= nil then
    io.close(f)
    return true
  else
    return false
  end
end

local function starts_with(start, str)
  return str:sub(1, #start) == start
end


function RawBlock(el)
  if starts_with('\\begin{tikzpicture}', el.text) then
    local filetype = extension_for[FORMAT] or 'svg'
    local fbasename = pandoc.sha1(el.text) .. '.' .. filetype
    local fname = system.get_working_directory() .. '/' .. fbasename
    if not file_exists(fname) then
      tikz2image(el.text, filetype, fname)
    end
    return pandoc.Para({pandoc.Image({}, fbasename)})
  else
   return el
  end
end
```
:::

Example of use:

    pandoc --lua-filter tikz.lua -s -o cycle.html <<EOF
    Here is a diagram of the cycle:

    \begin{tikzpicture}

    \def \n {5}
    \def \radius {3cm}
    \def \margin {8} % margin in angles, depends on the radius

    \foreach \s in {1,...,\n}
    {
      \node[draw, circle] at ({360/\n * (\s - 1)}:\radius) {$\s$};
      \draw[->, >=latex] ({360/\n * (\s - 1)+\margin}:\radius)
        arc ({360/\n * (\s - 1)+\margin}:{360/\n * (\s)-\margin}:\radius);
    }
    \end{tikzpicture}
    EOF
::::
:::::::::::::::::::::::::

# Lua type reference

This section describes the types of objects available to Lua filters.
See the [pandoc module](#module-pandoc) for functions to create these
objects.

## Shared Properties

### [`clone`]

[`clone ()`]

All instances of the types listed here, with the exception of read-only
objects, can be cloned via the [`clone()`] method.

Usage:

    local emph = pandoc.Emph {pandoc.Str 'important'}
    local cloned_emph = emph:clone()  -- note the colon
:::
::::

## Pandoc

Pandoc document

Values of this type can be created with the
[[`pandoc.Pandoc`]](#pandoc.pandoc) constructor. Pandoc values
are equal in Lua if and only if they are equal in Haskell.

[`blocks`]
:   document content ([Blocks](#type-blocks))

[`meta`]
:   document meta information ([Meta](#type-meta) object)

### walk

[`walk(self, lua_filter)`]

Applies a Lua filter to the Pandoc element. Just as for full-document
filters, the order in which elements are traversed can be controlled by
setting the [`traverse`] field of the filter; see the section
on [traversal order](#traversal-order). Returns a (deep) copy on which
the filter has been applied: the original element is left untouched.

Parameters:

[`self`]
:   the element ([Pandoc](#type-pandoc))

[`lua_filter`]
:   map of filter functions (table)

Result:

-   filtered document ([Pandoc](#type-pandoc))

Usage:

    -- returns `pandoc.Pandoc{pandoc.Para{pandoc.Str 'Bye'}}`
    return pandoc.Pandoc{pandoc.Para('Hi')}:walk {
      Str = function (_) return 'Bye' end,
    }
:::
::::

## Meta

Meta information on a document; string-indexed collection of
[MetaValues](#type-metavalue).

Values of this type can be created with the
[[`pandoc.Meta`]](#pandoc.meta) constructor. Meta values are
equal in Lua if and only if they are equal in Haskell.
:::

## MetaValue

Document meta information items. This is not a separate type, but
describes a set of types that can be used in places were a MetaValue is
expected. The types correspond to the following Haskell type
constructors:

-   boolean → MetaBool
-   string or number → MetaString
-   Inlines → MetaInlines
-   Blocks → MetaBlocks
-   List/integer indexed table → MetaList
-   string-indexed table → MetaMap

The corresponding constructors
[[`pandoc.MetaBool`]](#pandoc.metabool),
[[`pandoc.MetaString`]](#pandoc.metastring),
[[`pandoc.MetaInlines`]](#pandoc.metainlines),
[[`pandoc.MetaBlocks`]](#pandoc.metablocks),
[[`pandoc.MetaList`]](#pandoc.metalist), and
[[`pandoc.MetaMap`]](#pandoc.metamap) can be used to ensure
that a value is treated in the intended way. E.g., an empty table is
normally treated as a [`MetaMap`], but can be made into an
empty [`MetaList`] by calling [`pandoc.MetaList{}`].
However, the same can be accomplished by using the generic functions
like [`pandoc.List`], [`pandoc.Inlines`], or
[`pandoc.Blocks`].

Use the function [[`pandoc.utils.type`]](#pandoc.utils.type) to
get the type of a metadata value.
:::

## Block

Block values are equal in Lua if and only if they are equal in Haskell.

### Common methods

#### walk

[`walk(self, lua_filter)`]

Applies a Lua filter to the block element. Just as for full-document
filters, the order in which elements are traversed can be controlled by
setting the [`traverse`] field of the filter; see the section
on [traversal order](#traversal-order). Returns a (deep) copy on which
the filter has been applied: the original element is left untouched.

Note that the filter is applied to the subtree, but not to the
[`self`] block element. The rationale is that otherwise the
element could be deleted by the filter, or replaced with multiple block
elements, which might lead to possibly unexpected results.

Parameters:

[`self`]
:   the element ([Block](#type-block))

[`lua_filter`]
:   map of filter functions (table)

Result:

-   filtered block ([Block](#type-block))

Usage:

    -- returns `pandoc.Para{pandoc.Str 'Bye'}`
    return pandoc.Para('Hi'):walk {
      Str = function (_) return 'Bye' end,
    }
:::
::::

### BlockQuote

A block quote element.

Values of this type can be created with the
[[`pandoc.BlockQuote`]](#pandoc.blockquote) constructor.

Fields:

[`content`]
:   block content ([Blocks](#type-blocks))

[`tag`], [`t`]
:   the literal [`BlockQuote`] (string)
:::

### BulletList

A bullet list.

Values of this type can be created with the
[[`pandoc.BulletList`]](#pandoc.bulletlist) constructor.

Fields:

[`content`]
:   list items ([List](#type-list) of items, i.e., [List](#type-list) of
    [Blocks](#type-blocks))

[`tag`], [`t`]
:   the literal [`BulletList`] (string)
:::

### CodeBlock

Block of code.

Values of this type can be created with the
[[`pandoc.CodeBlock`]](#pandoc.codeblock) constructor.

Fields:

[`text`]
:   code string (string)

[`attr`]
:   element attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`CodeBlock`] (string)
:::

### DefinitionList

Definition list, containing terms and their explanation.

Values of this type can be created with the
[[`pandoc.DefinitionList`]](#pandoc.definitionlist)
constructor.

Fields:

[`content`]
:   list of items

[`tag`], [`t`]
:   the literal [`DefinitionList`] (string)
:::

### Div

Generic block container with attributes.

Values of this type can be created with the
[[`pandoc.Div`]](#pandoc.div) constructor.

Fields:

[`content`]
:   block content ([Blocks](#type-blocks))

[`attr`]
:   element attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Div`] (string)
:::

### Figure

Figure with caption and arbitrary block contents.

Values of this type can be created with the
[[`pandoc.Figure`]](#pandoc.figure) constructor.

Fields:

[`content`]
:   block content ([Blocks](#type-blocks))

[`caption`]
:   figure caption ([Caption](#type-caption))

[`attr`]
:   element attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Figure`] (string)
:::

### Header

Creates a header element.

Values of this type can be created with the
[[`pandoc.Header`]](#pandoc.header) constructor.

Fields:

[`level`]
:   header level (integer)

[`content`]
:   inline content ([Inlines](#type-inlines))

[`attr`]
:   element attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Header`] (string)
:::

### HorizontalRule

A horizontal rule.

Values of this type can be created with the
[[`pandoc.HorizontalRule`]](#pandoc.horizontalrule)
constructor.

Fields:

[`tag`], [`t`]
:   the literal [`HorizontalRule`] (string)
:::

### LineBlock

A line block, i.e. a list of lines, each separated from the next by a
newline.

Values of this type can be created with the
[[`pandoc.LineBlock`]](#pandoc.lineblock) constructor.

Fields:

[`content`]
:   inline content ([List](#type-list) of lines, i.e. [List](#type-list)
    of [Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`LineBlock`] (string)
:::

### OrderedList

An ordered list.

Values of this type can be created with the
[[`pandoc.OrderedList`]](#pandoc.orderedlist) constructor.

Fields:

[`content`]
:   list items ([List](#type-list) of items, i.e., [List](#type-list) of
    [Blocks](#type-blocks))

[`listAttributes`]
:   list parameters ([ListAttributes](#type-listattributes))

[`start`]
:   alias for [`listAttributes.start`] (integer)

[`style`]
:   alias for [`listAttributes.style`] (string)

[`delimiter`]
:   alias for [`listAttributes.delimiter`] (string)

[`tag`], [`t`]
:   the literal [`OrderedList`] (string)
:::

### Para

A paragraph.

Values of this type can be created with the
[[`pandoc.Para`]](#pandoc.para) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Para`] (string)
:::

### Plain

Plain text, not a paragraph.

Values of this type can be created with the
[[`pandoc.Plain`]](#pandoc.plain) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Plain`] (string)
:::

### RawBlock

Raw content of a specified format.

Values of this type can be created with the
[[`pandoc.RawBlock`]](#pandoc.rawblock) constructor.

Fields:

[`format`]
:   format of content (string)

[`text`]
:   raw content (string)

[`tag`], [`t`]
:   the literal [`RawBlock`] (string)
:::

### Table

A table.

Values of this type can be created with the
[[`pandoc.Table`]](#pandoc.table) constructor.

Fields:

[`attr`]
:   table attributes ([Attr](#type-attr))

[`caption`]
:   table caption ([Caption](#type-caption))

[`colspecs`]
:   column specifications, i.e., alignments and widths
    ([List](#type-list) of [ColSpec](#type-colspec)s)

[`head`]
:   table head ([TableHead](#type-tablehead))

[`bodies`]
:   table bodies ([List](#type-list) of [TableBody](#type-tablebody)s)

[`foot`]
:   table foot ([TableFoot](#type-tablefoot))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Table`] (string)

A [table cell]{#type-table-cell} is a list of blocks.

*[Alignment]{#type-alignment}* is a string value indicating the
horizontal alignment of a table column. [`AlignLeft`],
[`AlignRight`], and [`AlignCenter`] leads cell content
to be left-aligned, right-aligned, and centered, respectively. The
default alignment is [`AlignDefault`] (often equivalent to
centered).
:::
:::::::::::::::::::

## Blocks

List of [Block](#type-block) elements, with the same methods as a
generic [List](#type-list). It is usually not necessary to create values
of this type in user scripts, as pandoc can convert other types into
Blocks wherever a value of this type is expected:

-   a list of [Block](#type-block) (or Block-like) values is used
    directly;
-   a single [Inlines](#type-inlines) value is wrapped into a
    [Plain](#type-plain) element;
-   string values are turned into an [Inlines](#type-inlines) value by
    splitting the string into words (see [Inlines](#type-inlines)), and
    then wrapping the result into a Plain singleton.

### Methods

Lists of type [`Blocks`] share all methods available in generic
lists, see the [[`pandoc.List`] module](#module-pandoc.list).

Additionally, the following methods are available on Blocks values:

#### walk

[`walk(self, lua_filter)`]

Applies a Lua filter to the Blocks list. Just as for full-document
filters, the order in which elements are traversed can be controlled by
setting the [`traverse`] field of the filter; see the section
on [traversal order](#traversal-order). Returns a (deep) copy on which
the filter has been applied: the original list is left untouched.

Parameters:

[`self`]
:   the list ([Blocks](#type-blocks))

[`lua_filter`]
:   map of filter functions (table)

Result:

-   filtered list ([Blocks](#type-blocks))

Usage:

    -- returns `pandoc.Blocks{pandoc.Para('Salve!')}`
    return pandoc.Blocks{pandoc.Plain('Salve!)}:walk {
      Plain = function (p) return pandoc.Para(p.content) end,
    }
:::
::::
:::::

## Inline

Inline values are equal in Lua if and only if they are equal in Haskell.

### Common methods

#### walk

[`walk(self, lua_filter)`]

Applies a Lua filter to the Inline element. Just as for full-document
filters, the order in which elements are traversed can be controlled by
setting the [`traverse`] field of the filter; see the section
on [traversal order](#traversal-order). Returns a (deep) copy on which
the filter has been applied: the original element is left untouched.

Note that the filter is applied to the subtree, but not to the
[`self`] inline element. The rationale is that otherwise the
element could be deleted by the filter, or replaced with multiple inline
elements, which might lead to possibly unexpected results.

Parameters:

[`self`]
:   the element ([Inline](#type-inline))

[`lua_filter`]
:   map of filter functions (table)

Result:

-   filtered inline element ([Inline](#type-inline))

Usage:

    -- returns `pandoc.SmallCaps('SPQR)`
    return pandoc.SmallCaps('spqr'):walk {
      Str = function (s) return string.upper(s.text) end,
    }
:::
::::

### Cite

Citation.

Values of this type can be created with the
[[`pandoc.Cite`]](#pandoc.cite) constructor.

Fields:

[`content`]
:   ([Inlines](#type-inlines))

[`citations`]
:   citation entries ([List](#type-list) of [Citations](#type-citation))

[`tag`], [`t`]
:   the literal [`Cite`] (string)
:::

### Code

Inline code

Values of this type can be created with the
[[`pandoc.Code`]](#pandoc.code) constructor.

Fields:

[`text`]
:   code string (string)

[`attr`]
:   attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Code`] (string)
:::

### Emph

Emphasized text

Values of this type can be created with the
[[`pandoc.Emph`]](#pandoc.emph) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Emph`] (string)
:::

### Image

Image: alt text (list of inlines), target

Values of this type can be created with the
[[`pandoc.Image`]](#pandoc.image) constructor.

Fields:

[`caption`]
:   text used to describe the image ([Inlines](#type-inlines))

[`src`]
:   path to the image file (string)

[`title`]
:   brief image description (string)

[`attr`]
:   attributes ([Attr](#type-attr))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Image`] (string)
:::

### LineBreak

Hard line break

Values of this type can be created with the
[[`pandoc.LineBreak`]](#pandoc.linebreak) constructor.

Fields:

[`tag`], [`t`]
:   the literal [`LineBreak`] (string)
:::

### Link

Hyperlink: alt text (list of inlines), target

Values of this type can be created with the
[[`pandoc.Link`]](#pandoc.link) constructor.

Fields:

[`attr`]
:   attributes ([Attr](#type-attr))

[`content`]
:   text for this link ([Inlines](#type-inlines))

[`target`]
:   the link target (string)

[`title`]
:   brief link description

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Link`] (string)
:::

### Math

TeX math (literal)

Values of this type can be created with the
[[`pandoc.Math`]](#pandoc.math) constructor.

Fields:

[`mathtype`]
:   specifier determining whether the math content should be shown
    inline ([`InlineMath`]) or on a separate line
    ([`DisplayMath`]) (string)

[`text`]
:   math content (string)

[`tag`], [`t`]
:   the literal [`Math`] (string)
:::

### Note

Footnote or endnote

Values of this type can be created with the
[[`pandoc.Note`]](#pandoc.note) constructor.

Fields:

[`content`]
:   ([Blocks](#type-blocks))

[`tag`], [`t`]
:   the literal [`Note`] (string)
:::

### Quoted

Quoted text

Values of this type can be created with the
[[`pandoc.Quoted`]](#pandoc.quoted) constructor.

Fields:

[`quotetype`]
:   type of quotes to be used; one of [`SingleQuote`] or
    [`DoubleQuote`] (string)

[`content`]
:   quoted text ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Quoted`] (string)
:::

### RawInline

Raw inline

Values of this type can be created with the
[[`pandoc.RawInline`]](#pandoc.rawinline) constructor.

Fields:

[`format`]
:   the format of the content (string)

[`text`]
:   raw content (string)

[`tag`], [`t`]
:   the literal [`RawInline`] (string)
:::

### SmallCaps

Small caps text

Values of this type can be created with the
[[`pandoc.SmallCaps`]](#pandoc.smallcaps) constructor.

Fields:

[`content`]
:   ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`SmallCaps`] (string)
:::

### SoftBreak

Soft line break

Values of this type can be created with the
[[`pandoc.SoftBreak`]](#pandoc.softbreak) constructor.

Fields:

[`tag`], [`t`]
:   the literal [`SoftBreak`] (string)
:::

### Space

Inter-word space

Values of this type can be created with the
[[`pandoc.Space`]](#pandoc.space) constructor.

Fields:

[`tag`], [`t`]
:   the literal [`Space`] (string)
:::

### Span

Generic inline container with attributes

Values of this type can be created with the
[[`pandoc.Span`]](#pandoc.span) constructor.

Fields:

[`attr`]
:   attributes ([Attr](#type-attr))

[`content`]
:   wrapped content ([Inlines](#type-inlines))

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))

[`tag`], [`t`]
:   the literal [`Span`] (string)
:::

### Str

Text

Values of this type can be created with the
[[`pandoc.Str`]](#pandoc.str) constructor.

Fields:

[`text`]
:   content (string)

[`tag`], [`t`]
:   the literal [`Str`] (string)
:::

### Strikeout

Strikeout text

Values of this type can be created with the
[[`pandoc.Strikeout`]](#pandoc.strikeout) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Strikeout`] (string)
:::

### Strong

Strongly emphasized text

Values of this type can be created with the
[[`pandoc.Strong`]](#pandoc.strong) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Strong`] (string)
:::

### Subscript

Subscripted text

Values of this type can be created with the
[[`pandoc.Subscript`]](#pandoc.subscript) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Subscript`] (string)
:::

### Superscript

Superscripted text

Values of this type can be created with the
[[`pandoc.Superscript`]](#pandoc.superscript) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Superscript`] (string)
:::

### Underline

Underlined text

Values of this type can be created with the
[[`pandoc.Underline`]](#pandoc.underline) constructor.

Fields:

[`content`]
:   inline content ([Inlines](#type-inlines))

[`tag`], [`t`]
:   the literal [`Underline`] (string)
:::
:::::::::::::::::::::::::

## Inlines

List of [Inline](#type-inline) elements, with the same methods as a
generic [List](#type-list). It is usually not necessary to create values
of this type in user scripts, as pandoc can convert other types into
Inlines wherever a value of this type is expected:

-   lists of [Inline](#type-inline) (or Inline-like) values are used
    directly;
-   single [Inline](#type-inline) values are converted into a list
    containing just that element;
-   String values are split into words, converting line breaks into
    [SoftBreak](#type-softbreak) elements, and other whitespace
    characters into [Spaces](#type-space).

### Methods

Lists of type [`Inlines`] share all methods available in
generic lists, see the [[`pandoc.List`]
module](#module-pandoc.list).

Additionally, the following methods are available on *Inlines* values:

#### walk

[`walk(self, lua_filter)`]

Applies a Lua filter to the Inlines list. Just as for full-document
filters, the order in which elements are handled are Inline → Inlines →
Block → Blocks. The filter is applied to all list items *and* to the
list itself. Returns a (deep) copy on which the filter has been applied:
the original list is left untouched.

Parameters:

[`self`]
:   the list ([Inlines](#type-inlines))

[`lua_filter`]
:   map of filter functions (table)

Result:

-   filtered list ([Inlines](#type-inlines))

Usage:

    -- returns `pandoc.Inlines{pandoc.SmallCaps('SPQR')}`
    return pandoc.Inlines{pandoc.Emph('spqr')}:walk {
      Str = function (s) return string.upper(s.text) end,
      Emph = function (e) return pandoc.SmallCaps(e.content) end,
    }
:::
::::
:::::

## Element components

### Attr

A set of element attributes. Values of this type can be created with the
[[`pandoc.Attr`]](#pandoc.attr) constructor. For convenience,
it is usually not necessary to construct the value directly if it is
part of an element, and it is sufficient to pass an HTML-like table.
E.g., to create a span with identifier "text" and classes "a" and "b",
one can write:

    local span = pandoc.Span('text', {id = 'text', class = 'a b'})

This also works when using the [`attr`] setter:

    local span = pandoc.Span 'text'
    span.attr = {id = 'text', class = 'a b', other_attribute = '1'}

Attr values are equal in Lua if and only if they are equal in Haskell.

Fields:

[`identifier`]
:   element identifier (string)

[`classes`]
:   element classes ([List](#type-list) of strings)

[`attributes`]
:   collection of key/value pairs ([Attributes](#type-attributes))
:::

### Attributes

List of key/value pairs. Values can be accessed by using keys as indices
to the list table.

Attributes values are equal in Lua if and only if they are equal in
Haskell.
:::

### Caption

The caption of a table, with an optional short caption.

Fields:

[`long`]
:   long caption ([Blocks](#type-blocks))

[`short`]
:   short caption ([Inlines](#type-inlines))
:::

### Cell

A table cell.

Fields:

[`attr`]
:   cell attributes

[`alignment`]
:   individual cell alignment ([Alignment](#type-alignment)).

[`contents`]
:   cell contents ([Blocks](#type-blocks)).

[`col_span`]
:   number of columns spanned by the cell; the width of the cell in
    columns (integer).

[`row_span`]
:   number of rows spanned by the cell; the height of the cell in rows
    (integer).

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))
:::

### Citation

Single citation entry

Values of this type can be created with the
[[`pandoc.Citation`]](#pandoc.citation) constructor.

Citation values are equal in Lua if and only if they are equal in
Haskell.

Fields:

[`id`]
:   citation identifier, e.g., a bibtex key (string)

[`mode`]
:   citation mode, one of [`AuthorInText`],
    [`SuppressAuthor`], or [`NormalCitation`] (string)

[`prefix`]
:   citation prefix ([Inlines](#type-inlines))

[`suffix`]
:   citation suffix ([Inlines](#type-inlines))

[`note_num`]
:   note number (integer)

[`hash`]
:   hash (integer)
:::

### ColSpec

Column alignment and width specification for a single table column.

This is a pair, i.e., a plain table, with the following components:

1.  cell alignment ([Alignment](#type-alignment)).
2.  table column width, as a fraction of the page width (number).
:::

### ListAttributes

List attributes

Values of this type can be created with the
[[`pandoc.ListAttributes`]](#pandoc.listattributes)
constructor.

Fields:

[`start`]
:   number of the first list item (integer)

[`style`]
:   style used for list numbers; possible values are
    [`DefaultStyle`], [`Example`],
    [`Decimal`], [`LowerRoman`],
    [`UpperRoman`], [`LowerAlpha`], and
    [`UpperAlpha`] (string)

[`delimiter`]
:   delimiter of list numbers; one of [`DefaultDelim`],
    [`Period`], [`OneParen`], and
    [`TwoParens`] (string)
:::

### Row

A table row.

Fields:

[`attr`]
:   element attributes ([Attr](#type-attr))

[`cells`]
:   list of table cells ([List](#type-list) of [Cell](#type-cell)s)
:::

### TableBody

A body of a table, with an intermediate head and the specified number of
row header columns.

Fields:

[`attr`]
:   table body attributes ([Attr](#type-attr))

[`body`]
:   table body rows ([List](#type-list) of [Row](#type-row)s)

[`head`]
:   intermediate head ([List](#type-list) of [Row](#type-row)s)

[`row_head_columns`]
:   number of columns taken up by the row head of each row of a
    [TableBody](#type-tablebody). The row body takes up the remaining
    columns.
:::

### TableFoot

The foot of a table.

Fields:

[`attr`]
:   element attributes ([Attr](#type-attr))

[`rows`]
:   list of rows ([List](#type-list) of [Row](#type-row)s)

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))
:::

### TableHead

The head of a table.

Fields:

[`attr`]
:   element attributes ([Attr](#type-attr))

[`rows`]
:   list of rows ([List](#type-list) of [Row](#type-row)s)

[`identifier`]
:   alias for [`attr.identifier`] (string)

[`classes`]
:   alias for [`attr.classes`] ([List](#type-list) of strings)

[`attributes`]
:   alias for [`attr.attributes`]
    ([Attributes](#type-attributes))
:::
::::::::::::::

## ReaderOptions

Pandoc reader options

Fields:

[`abbreviations`]
:   set of known abbreviations (set of strings)

[`columns`]
:   number of columns in terminal (integer)

[`default_image_extension`]
:   default extension for images (string)

[`extensions`]
:   string representation of the syntax extensions bit field (sequence
    of strings)

[`indented_code_classes`]
:   default classes for indented code blocks (list of strings)

[`standalone`]
:   whether the input was a standalone document with header (boolean)

[`strip_comments`]
:   HTML comments are stripped instead of parsed as raw HTML (boolean)

[`tab_stop`]
:   width (i.e. equivalent number of spaces) of tab stops (integer)

[`track_changes`]
:   track changes setting for docx; one of [`accept-changes`],
    [`reject-changes`], and [`all-changes`] (string)
:::

## WriterOptions

Pandoc writer options

Fields:

[`chunk_template`]
:   Template used to generate chunked HTML filenames (string)

[`cite_method`]
:   How to print cites -- one of 'citeproc', 'natbib', or 'biblatex'
    (string)

[`columns`]
:   Characters in a line (for text wrapping) (integer)

[`dpi`]
:   DPI for pixel to/from inch/cm conversions (integer)

[`email_obfuscation`]
:   How to obfuscate emails -- one of 'none', 'references', or
    'javascript' (string)

[`epub_chapter_level`]
:   Header level for chapters, i.e., how the document is split into
    separate files (integer)

[`epub_fonts`]
:   Paths to fonts to embed (sequence of strings)

[`epub_metadata`]
:   Metadata to include in EPUB (string\|nil)

[`epub_subdirectory`]
:   Subdir for epub in OCF (string)

[`extensions`]
:   Markdown extensions that can be used (sequence of strings)

[`highlight_style`]
:   Style to use for highlighting; see the output of
    [`pandoc --print-highlight-style=...`] for an example
    structure. The value [`nil`] means that no highlighting is
    used. (table\|nil)

[`html_math_method`]
:   How to print math in HTML; one 'plain', 'gladtex', 'webtex',
    'mathml', 'mathjax', or a table with keys [`method`] and
    [`url`]. (string\|table)

[`html_q_tags`]
:   Use [`<q>`] tags for quotes in HTML (boolean)

[`identifier_prefix`]
:   Prefix for section & note ids in HTML and for footnote marks in
    markdown (string)

[`incremental`]
:   True if lists should be incremental (boolean)

[`listings`]
:   Use listings package for code (boolean)

[`number_offset`]
:   Starting number for section, subsection, ... (sequence of integers)

[`number_sections`]
:   Number sections in LaTeX (boolean)

[`prefer_ascii`]
:   Prefer ASCII representations of characters when possible (boolean)

[`reference_doc`]
:   Path to reference document if specified (string\|nil)

[`reference_links`]
:   Use reference links in writing markdown, rst (boolean)

[`reference_location`]
:   Location of footnotes and references for writing markdown; one of
    'end-of-block', 'end-of-section', 'end-of-document'. The common
    prefix may be omitted when setting this value. (string)

[`section_divs`]
:   Put sections in div tags in HTML (boolean)

[`setext_headers`]
:   Use setext headers for levels 1-2 in markdown (boolean)

[`slide_level`]
:   Force header level of slides (integer\|nil)

[`tab_stop`]
:   Tabstop for conversion btw spaces and tabs (integer)

[`table_of_contents`]
:   Include table of contents (boolean)

[`template`]
:   Template to use ([Template](#type-template)\|nil)

[`toc_depth`]
:   Number of levels to include in TOC (integer)

[`top_level_division`]
:   Type of top-level divisions; one of 'top-level-part',
    'top-level-chapter', 'top-level-section', or 'top-level-default'.
    The prefix [`top-level`] may be omitted when setting this
    value. (string)

[`variables`]
:   Variables to set in template; string-indexed table (table)

[`wrap_text`]
:   Option for wrapping text; one of 'wrap-auto', 'wrap-none', or
    'wrap-preserve'. The [`wrap-`] prefix may be omitted when
    setting this value. (string)
:::

## CommonState

The state used by pandoc to collect information and make it available to
readers and writers.

Fields:

[`input_files`]
:   List of input files from command line ([List](#type-list) of
    strings)

[`output_file`]
:   Output file from command line (string or nil)

[`log`]
:   A list of log messages in reverse order ([List](#type-list) of
    [LogMessage](#type-logmessage)s)

[`request_headers`]
:   Headers to add for HTTP requests; table with header names as keys
    and header contents as value (table)

[`resource_path`]
:   Path to search for resources like included images
    ([List](#type-list) of strings)

[`source_url`]
:   Absolute URL or directory of first source file (string or nil)

[`user_data_dir`]
:   Directory to search for data files (string or nil)

[`trace`]
:   Whether tracing messages are issued (boolean)

[`verbosity`]
:   Verbosity level; one of [`INFO`], [`WARNING`],
    [`ERROR`] (string)
:::

## Doc

Reflowable plain-text document. A Doc value can be rendered and reflown
to fit a given column width.

The [[`pandoc.layout`]](#module-pandoc.layout) module can be
used to create and modify Doc values. All functions in that module that
take a Doc value as their first argument are also available as Doc
methods. E.g., [`(pandoc.layout.literal 'text'):render()`].

If a string is passed to a function expecting a Doc, then the string is
treated as a literal value. I.e., the following two lines are
equivalent:

::: {#cb31 .sourceCode}
```lua
test = pandoc.layout.quotes(pandoc.layout.literal 'this')
test = pandoc.layout.quotes('this')
```
:::
::::

## List

A list is any Lua table with integer indices. Indices start at one, so
if [`alist = {'value'}`] then [`alist[1] == 'value'`].

Lists, when part of an element, or when generated during marshaling, are
made instances of the [`pandoc.List`] type for convenience. The
[`pandoc.List`] type is defined in the
[*pandoc.List*](#module-pandoc.list) module. See there for available
methods.

Values of this type can be created with the
[[`pandoc.List`]](#pandoc.list) constructor, turning a normal
Lua table into a List.
:::

## LogMessage

A pandoc log message. Objects have no fields, but can be converted to a
string via [`tostring`].
:::

## SimpleTable

A simple table is a table structure which resembles the old (pre pandoc
2.10) Table type. Bi-directional conversion from and to
[Tables](#type-table) is possible with the
[[`pandoc.utils.to_simple_table`]](#pandoc.utils.to_simple_table)
and
[[`pandoc.utils.from_simple_table`]](#pandoc.utils.from_simple_table)
function, respectively. Instances of this type can also be created
directly with the [[`pandoc.SimpleTable`]](#pandoc.simpletable)
constructor.

Fields:

[`caption`]
:   [Inlines](#type-inlines)

[`aligns`]
:   column alignments ([List](#type-list) of
    [Alignments](#type-alignment))

[`widths`]
:   column widths; a ([List](#type-list) of numbers)

[`headers`]
:   table header row ([List](#type-list) of simple cells, i.e.,
    [List](#type-list) of [Blocks](#type-blocks))

[`rows`]
:   table rows ([List](#type-list) of rows, where a row is a list of
    simple cells, i.e., [List](#type-list) of [Blocks](#type-blocks))
:::

## Template

Opaque type holding a compiled template.
:::

## Version

A version object. This represents a software version like "2.7.3". The
object behaves like a numerically indexed table, i.e., if
[`version`] represents the version [`2.7.3`], then

    version[1] == 2
    version[2] == 7
    version[3] == 3
    #version == 3   -- length

Comparisons are performed element-wise, i.e.

    Version '1.12' > Version '1.9'

Values of this type can be created with the
[[`pandoc.types.Version`]](#pandoc.types.version) constructor.

### [`must_be_at_least`]

[`must_be_at_least(actual, expected [, error_message])`]

Raise an error message if the actual version is older than the expected
version; does nothing if [`actual`] is equal to or newer than
the expected version.

Parameters:

[`actual`]
:   actual version specifier ([Version](#type-version))

[`expected`]
:   minimum expected version ([Version](#type-version))

[`error_message`]
:   optional error message template. The string is used as format
    string, with the expected and actual versions as arguments. Defaults
    to [`"expected version %s or newer, got %s"`].

Usage:

    PANDOC_VERSION:must_be_at_least '2.7.3'
    PANDOC_API_VERSION:must_be_at_least(
      '1.17.4',
      'pandoc-types is too old: expected version %s, got %s'
    )
:::
::::

## Chunk

Part of a document; usually chunks are each written to a separate file.

Fields:

[`heading`]
:   heading text ([Inlines](#type-inlines))

[`id`]
:   identifier (string)

[`level`]
:   level of topmost heading in chunk (integer)

[`number`]
:   chunk number (integer)

[`section_number`]
:   hierarchical section number (string)

[`path`]
:   target filepath for this chunk (string)

[`up`]
:   link to the enclosing section, if any ([Chunk](#type-chunk)\|nil)

[`prev`]
:   link to the previous section, if any ([Chunk](#type-chunk)\|nil)

[`next`]
:   link to the next section, if any ([Chunk](#type-chunk)\|nil)

[`unlisted`]
:   whether the section in this chunk should be listed in the TOC even
    if the chunk has no section number. (boolean)

[`contents`]
:   the chunk's block contents ([Blocks](#type-blocks))
:::

## ChunkedDoc

A Pandoc document divided into [Chunks]{#type-chunk}.

The table of contents info in field [`toc`] is rose-tree
structure represented as a list. The node item is always placed at index
[`0`]; subentries make up the rest of the list. Each node item
contains the fields [`title`] ([Inlines](#type-inlines)),
[`number`] (string\|nil), [`id`] (string),
[`path`] (string), and [`level`] (integer).

Fields:

[`chunks`]
:   list of chunks that make up the document (list of
    [Chunks](#type-chunk)).

[`meta`]
:   the document's metadata ([Meta](#type-meta))

[`toc`]
:   table of contents information (table)
:::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

# Module pandoc

Fields and functions for pandoc scripts; includes constructors for
document tree elements, functions to parse text in a given format, and
functions to filter and modify a subtree.

## Static Fields

### readers

Set of formats that pandoc can parse. All keys in this table can be used
as the [`format`] value in [`pandoc.read`].
:::

### writers

Set of formats that pandoc can generate. All keys in this table can be
used as the [`format`] value in [`pandoc.write`].
:::
:::::

## Pandoc

### [`Pandoc (blocks[, meta])`]

A complete pandoc document

Parameters:

[`blocks`]
:   document content

[`meta`]
:   document meta data

Returns: [Pandoc](#type-pandoc) object
:::
::::

## Meta

### [`Meta (table)`]

Create a new Meta object.

Parameters:

[`table`]
:   table containing document meta information

Returns: [Meta](#type-meta) object
:::
::::

## MetaValue

### [`MetaBlocks (blocks)`]

Creates a value to be used as a MetaBlocks value in meta data; creates a
copy of the input list via [`pandoc.Blocks`], discarding all
non-list keys.

Parameters:

[`blocks`]
:   blocks

Returns: [Blocks](#type-blocks)
:::

### [`MetaInlines (inlines)`]

Creates a value to be used as a MetaInlines value in meta data; creates
a copy of the input list via [`pandoc.Inlines`], discarding all
non-list keys.

Parameters:

[`inlines`]
:   inlines

Returns: [Inlines](#type-inlines)
:::

### [`MetaList (meta_values)`]

Creates a value to be used as a MetaList in meta data; creates a copy of
the input list via [`pandoc.List`], discarding all non-list
keys.

Parameters:

[`meta_values`]
:   list of meta values

Returns: [List](#type-list)
:::

### [`MetaMap (key_value_map)`]

Creates a value to be used as a MetaMap in meta data; creates a copy of
the input table, keeping only pairs with string keys and discards all
other keys.

Parameters:

[`key_value_map`]
:   a string-indexed map of meta values

Returns: table
:::

### [`MetaString (str)`]

Creates a value to be used as a MetaString in meta data; this is the
identity function for boolean values and exists only for completeness.

Parameters:

[`str`]
:   string value

Returns: string
:::

### [`MetaBool (bool)`]

Creates a value to be used as MetaBool in meta data; this is the
identity function for boolean values and exists only for completeness.

Parameters:

[`bool`]
:   boolean value

Returns: boolean
:::
:::::::::

## Block

### [`BlockQuote (content)`]

Creates a block quote element

Parameters:

[`content`]
:   block content

Returns: [BlockQuote](#type-blockquote) object
:::

### [`BulletList (items)`]

Creates a bullet list.

Parameters:

[`items`]
:   list items

Returns: [BulletList](#type-bulletlist) object
:::

### [`CodeBlock (text[, attr])`]

Creates a code block element

Parameters:

[`text`]
:   code string

[`attr`]
:   element attributes

Returns: [CodeBlock](#type-codeblock) object
:::

### [`DefinitionList (content)`]

Creates a definition list, containing terms and their explanation.

Parameters:

[`content`]
:   list of items

Returns: [DefinitionList](#type-definitionlist) object
:::

### [`Div (content[, attr])`]

Creates a div element

Parameters:

[`content`]
:   block content

[`attr`]
:   element attributes

Returns: [Div](#type-div) object
:::

### [`Figure (content[, caption[, attr]])`]

Creates a [Figure](#type-figure) element.

Parameters:

[`content`]
:   figure block content

[`caption`]
:   figure caption

[`attr`]
:   element attributes

Returns: [Figure](#type-figure) object
:::

### [`Header (level, content[, attr])`]

Creates a header element.

Parameters:

[`level`]
:   header level

[`content`]
:   inline content

[`attr`]
:   element attributes

Returns: [Header](#type-header) object
:::

### [`HorizontalRule ()`]

Creates a horizontal rule.

Returns: [HorizontalRule](#type-horizontalrule) object
:::

### [`LineBlock (content)`]

Creates a line block element.

Parameters:

[`content`]
:   inline content

Returns: [LineBlock](#type-lineblock) object
:::

### [`OrderedList (items[, listAttributes])`]

Creates an ordered list.

Parameters:

[`items`]
:   list items

[`listAttributes`]
:   list parameters

Returns: [OrderedList](#type-orderedlist) object
:::

### [`Para (content)`]

Creates a para element.

Parameters:

[`content`]
:   inline content

Returns: [Para](#type-para) object
:::

### [`Plain (content)`]

Creates a plain element.

Parameters:

[`content`]
:   inline content

Returns: [Plain](#type-plain) object
:::

### [`RawBlock (format, text)`]

Creates a raw content block of the specified format.

Parameters:

[`format`]
:   format of content

[`text`]
:   string content

Returns: [RawBlock](#type-rawblock) object
:::

### [`Table (caption, colspecs, head, bodies, foot[, attr])`]

Creates a table element.

Parameters:

[`caption`]
:   table [caption](#type-caption)

[`colspecs`]
:   column alignments and widths (list of [ColSpec](#type-colspec)s)

[`head`]
:   [table head](#type-tablehead)

[`bodies`]
:   [table bodies](#type-tablebody)

[`foot`]
:   [table foot](#type-tablefoot)

[`attr`]
:   element attributes

Returns: [Table](#type-table) object
:::
:::::::::::::::::

## Blocks

### [`Blocks (block_like_elements)`]

Creates a [Blocks](#type-blocks) list.

Parameters:

[`block_like_elements`]
:   List where each element can be treated as a [Block](#type-block)
    value, or a single such value.

Returns: [Blocks](#type-blocks)
:::
::::

## Inline

### [`Cite (content, citations)`]

Creates a Cite inline element

Parameters:

[`content`]
:   List of inlines

[`citations`]
:   List of citations

Returns: [Cite](#type-cite) object
:::

### [`Code (text[, attr])`]

Creates a Code inline element

Parameters:

[`text`]
:   code string

[`attr`]
:   additional attributes

Returns: [Code](#type-code) object
:::

### [`Emph (content)`]

Creates an inline element representing emphasized text.

Parameters:

[`content`]
:   inline content

Returns: [Emph](#type-emph) object
:::

### [`Image (caption, src[, title[, attr]])`]

Creates a Image inline element

Parameters:

[`caption`]
:   text used to describe the image

[`src`]
:   path to the image file

[`title`]
:   brief image description

[`attr`]
:   additional attributes

Returns: [Image](#type-image) object
:::

### [`LineBreak ()`]

Create a LineBreak inline element

Returns: [LineBreak](#type-linebreak) object
:::

### [`Link (content, target[, title[, attr]])`]

Creates a link inline element, usually a hyperlink.

Parameters:

[`content`]
:   text for this link

[`target`]
:   the link target

[`title`]
:   brief link description

[`attr`]
:   additional attributes

Returns: [Link](#type-link) object
:::

### [`Math (mathtype, text)`]

Creates a Math element, either inline or displayed.

Parameters:

[`mathtype`]
:   rendering specifier

[`text`]
:   Math content

Returns: [Math](#type-math) object
:::

### [`DisplayMath (text)`]

Creates a math element of type "DisplayMath" (DEPRECATED).

Parameters:

[`text`]
:   Math content

Returns: [Math](#type-math) object
:::

### [`InlineMath (text)`]

Creates a math element of type "InlineMath" (DEPRECATED).

Parameters:

[`text`]
:   Math content

Returns: [Math](#type-math) object
:::

### [`Note (content)`]

Creates a Note inline element

Parameters:

[`content`]
:   footnote block content

Returns: [Note](#type-note) object
:::

### [`Quoted (quotetype, content)`]

Creates a Quoted inline element given the quote type and quoted content.

Parameters:

[`quotetype`]
:   type of quotes to be used

[`content`]
:   inline content

Returns: [Quoted](#type-quoted) object
:::

### [`SingleQuoted (content)`]

Creates a single-quoted inline element (DEPRECATED).

Parameters:

[`content`]
:   inline content

Returns: [Quoted](#type-quoted)
:::

### [`DoubleQuoted (content)`]

Creates a single-quoted inline element (DEPRECATED).

Parameters:

[`content`]
:   inline content

Returns: [Quoted](#type-quoted)
:::

### [`RawInline (format, text)`]

Creates a raw inline element

Parameters:

[`format`]
:   format of the contents

[`text`]
:   string content

Returns: [RawInline](#type-rawinline) object
:::

### [`SmallCaps (content)`]

Creates text rendered in small caps

Parameters:

[`content`]
:   inline content

Returns: [SmallCaps](#type-smallcaps) object
:::

### [`SoftBreak ()`]

Creates a SoftBreak inline element.

Returns: [SoftBreak](#type-softbreak) object
:::

### [`Space ()`]

Create a Space inline element

Returns: [Space](#type-space) object
:::

### [`Span (content[, attr])`]

Creates a Span inline element

Parameters:

[`content`]
:   inline content

[`attr`]
:   additional attributes

Returns: [Span](#type-span) object
:::

### [`Str (text)`]

Creates a Str inline element

Parameters:

[`text`]
:   content

Returns: [Str](#type-str) object
:::

### [`Strikeout (content)`]

Creates text which is struck out.

Parameters:

[`content`]
:   inline content

Returns: [Strikeout](#type-strikeout) object
:::

### [`Strong (content)`]

Creates a Strong element, whose text is usually displayed in a bold
font.

Parameters:

[`content`]
:   inline content

Returns: [Strong](#type-strong) object
:::

### [`Subscript (content)`]

Creates a Subscript inline element

Parameters:

[`content`]
:   inline content

Returns: [Subscript](#type-subscript) object
:::

### [`Superscript (content)`]

Creates a Superscript inline element

Parameters:

[`content`]
:   inline content

Returns: [Superscript](#type-superscript) object
:::

### [`Underline (content)`]

Creates an Underline inline element

Parameters:

[`content`]
:   inline content

Returns: [Underline](#type-underline) object
:::
:::::::::::::::::::::::::::

## Inlines

### [`Inlines (inline_like_elements)`]

Converts its argument into an [Inlines](#type-inlines) list:

-   copies a list of [Inline](#type-inline) elements into a fresh list;
    any string [`s`] within the list is treated as
    [`pandoc.Str(s)`];
-   turns a single [Inline](#type-inline) into a singleton list;
-   splits a string into [`Str`]-wrapped words, treating
    interword spaces as [`Space`]s or [`SoftBreak`]s.

Parameters:

[`inline_like_elements`]
:   List where each element can be treated as an [Inline](#type-inline)
    values, or just a single such value.

Returns: [Inlines](#type-inlines) list
:::
::::

## Element components

### [`Attr ([identifier[, classes[, attributes]]])`]

Create a new set of attributes (Attr).

Parameters:

[`identifier`]
:   element identifier

[`classes`]
:   element classes

[`attributes`]
:   table containing string keys and values

Returns: [Attr](#type-attr) object
:::

### [`Cell (blocks[, align[, rowspan[, colspan[, attr]]]])`]

Create a new table cell.

Parameters:

[`blocks`]
:   cell contents ([Blocks](#type-blocks))

[`align`]
:   text alignment; defaults to [`AlignDefault`] (Alignment)

[`rowspan`]
:   number of rows occupied by the cell; defaults to [`1`]
    (integer)

[`colspan`]
:   number of columns spanned by the cell; defaults to [`1`]
    (integer)

[`attr`]
:   cell attributes ([Attr](#type-attr))

Returns:

-   [Cell](#type-cell) object
:::

### [`Citation (id, mode[, prefix[, suffix[, note_num[, hash]]]])`]

Creates a single citation.

Parameters:

[`id`]
:   citation identifier (like a bibtex key)

[`mode`]
:   citation mode

[`prefix`]
:   citation prefix

[`suffix`]
:   citation suffix

[`note_num`]
:   note number

[`hash`]
:   hash number

Returns: [Citation](#type-citation) object
:::

### [`ListAttributes ([start[, style[, delimiter]]])`]

Creates a set of list attributes.

Parameters:

[`start`]
:   number of the first list item

[`style`]
:   style used for list numbering

[`delimiter`]
:   delimiter of list numbers

Returns: [ListAttributes](#type-listattributes) object
:::

### [`Row ([cells[, attr]])`]

Creates a table row.

Parameters:

[`cells`]
:   list of table cells in this row

[`attr`]
:   row attributes
:::

### [`TableFoot ([rows[, attr]])`]

Creates a table foot.

Parameters:

[`rows`]
:   list of table rows

[`attr`]
:   table foot attributes
:::

### [`TableHead ([rows[, attr]])`]

Creates a table head.

Parameters:

[`rows`]
:   list of table rows

[`attr`]
:   table head attributes
:::
::::::::::

## Legacy types

### [`SimpleTable (caption, aligns, widths, headers, rows)`]

Creates a simple table resembling the old (pre pandoc 2.10) table type.

Parameters:

[`caption`]
:   [Inlines](#type-inlines)

[`aligns`]
:   column alignments ([List](#type-list) of
    [Alignments](#type-alignment))

[`widths`]
:   column widths; a ([List](#type-list) of numbers)

[`headers`]
:   table header row ([List](#type-list) of [Blocks](#type-blocks))

[`rows`]
:   table rows ([List](#type-list) of rows, where a row is a list of
    [Blocks](#type-blocks))

Returns: [SimpleTable](#type-simpletable) object

Usage:

    local caption = "Overview"
    local aligns = {pandoc.AlignDefault, pandoc.AlignDefault}
    local widths = {0, 0} -- let pandoc determine col widths
    local headers = {{pandoc.Plain({pandoc.Str "Language"})},
                     {pandoc.Plain({pandoc.Str "Typing"})}}
    local rows = {
      {{pandoc.Plain "Haskell"}, {pandoc.Plain "static"}},
      {{pandoc.Plain "Lua"}, {pandoc.Plain "Dynamic"}},
    }
    simple_table = pandoc.SimpleTable(
      caption,
      aligns,
      widths,
      headers,
      rows
    )
:::
::::

## Constants

[[`AuthorInText`]]{#pandoc.authorintext}

:   Author name is mentioned in the text.

    See also: [Citation](#type-citation)

[[`SuppressAuthor`]]{#pandoc.suppressauthor}

:   Author name is suppressed.

    See also: [Citation](#type-citation)

[[`NormalCitation`]]{#pandoc.normalcitation}

:   Default citation style is used.

    See also: [Citation](#type-citation)

[[`AlignLeft`]]{#pandoc.alignleft}

:   Table cells aligned left.

    See also: [Table](#type-alignment)

[[`AlignRight`]]{#pandoc.alignright}

:   Table cells right-aligned.

    See also: [Table](#type-alignment)

[[`AlignCenter`]]{#pandoc.aligncenter}

:   Table cell content is centered.

    See also: [Table](#type-alignment)

[[`AlignDefault`]]{#pandoc.aligndefault}

:   Table cells are alignment is unaltered.

    See also: [Table](#type-alignment)

[[`DefaultDelim`]]{#pandoc.defaultdelim}

:   Default list number delimiters are used.

    See also: [ListAttributes](#type-listattributes)

[[`Period`]]{#pandoc.period}

:   List numbers are delimited by a period.

    See also: [ListAttributes](#type-listattributes)

[[`OneParen`]]{#pandoc.oneparen}

:   List numbers are delimited by a single parenthesis.

    See also: [ListAttributes](#type-listattributes)

[[`TwoParens`]]{#pandoc.twoparens}

:   List numbers are delimited by a double parentheses.

    See also: [ListAttributes](#type-listattributes)

[[`DefaultStyle`]]{#pandoc.defaultstyle}

:   List are numbered in the default style

    See also: [ListAttributes](#type-listattributes)

[[`Example`]]{#pandoc.example}

:   List items are numbered as examples.

    See also: [ListAttributes](#type-listattributes)

[[`Decimal`]]{#pandoc.decimal}

:   List are numbered using decimal integers.

    See also: [ListAttributes](#type-listattributes)

[[`LowerRoman`]]{#pandoc.lowerroman}

:   List are numbered using lower-case roman numerals.

    See also: [ListAttributes](#type-listattributes)

[[`UpperRoman`]]{#pandoc.upperroman}

:   List are numbered using upper-case roman numerals

    See also: [ListAttributes](#type-listattributes)

[[`LowerAlpha`]]{#pandoc.loweralpha}

:   List are numbered using lower-case alphabetic characters.

    See also: [ListAttributes](#type-listattributes)

[[`UpperAlpha`]]{#pandoc.upperalpha}

:   List are numbered using upper-case alphabetic characters.

    See also: [ListAttributes](#type-listattributes)

[[`sha1`]]{#pandoc.sha1}

:   Alias for [[`pandoc.utils.sha1`]](#pandoc.utils.sha1)
    (DEPRECATED, use [`pandoc.utils.sha1`] instead).
:::

## Other constructors

### [`ReaderOptions (opts)`]

Creates a new [ReaderOptions](#type-readeroptions) value.

Parameters

[`opts`]
:   Either a table with a subset of the properties of a
    [ReaderOptions](#type-readeroptions) object, or another
    ReaderOptions object. Uses the defaults specified in the manual for
    all properties that are not explicitly specified. Throws an error if
    a table contains properties which are not present in a ReaderOptions
    object. ([ReaderOptions](#type-readeroptions)\|table)

Returns: new [ReaderOptions](#type-readeroptions) object

Usage:

    -- copy of the reader options that were defined on the command line.
    local cli_opts = pandoc.ReaderOptions(PANDOC_READER_OPTIONS)

    -- default reader options, but columns set to 66.
    local short_colums_opts = pandoc.ReaderOptions {columns = 66}
:::

### [`WriterOptions (opts)`]

Creates a new [WriterOptions](#type-writeroptions) value.

Parameters

[`opts`]
:   Either a table with a subset of the properties of a
    [WriterOptions](#type-writeroptions) object, or another
    WriterOptions object. Uses the defaults specified in the manual for
    all properties that are not explicitly specified. Throws an error if
    a table contains properties which are not present in a WriterOptions
    object. ([WriterOptions](#type-writeroptions)\|table)

Returns: new [WriterOptions](#type-writeroptions) object

Usage:

    -- copy of the writer options that were defined on the command line.
    local cli_opts = pandoc.WriterOptions(PANDOC_WRITER_OPTIONS)

    -- default writer options, but DPI set to 300.
    local short_colums_opts = pandoc.WriterOptions {dpi = 300}
:::
:::::

## Helper functions

### [`pipe (command, args, input)`]

Runs command with arguments, passing it some input, and returns the
output.

Parameters:

[`command`]
:   program to run; the executable will be resolved using default system
    methods (string).

[`args`]
:   list of arguments to pass to the program (list of strings).

[`input`]
:   data which is piped into the program via stdin (string).

Returns:

-   Output of command, i.e. data printed to stdout (string)

Raises:

-   A table containing the keys [`command`],
    [`error_code`], and [`output`] is thrown if the
    command exits with a non-zero error code.

Usage:

    local output = pandoc.pipe("sed", {"-e","s/a/b/"}, "abc")
:::

### [`walk_block (element, filter)`]

Apply a filter inside a block element, walking its contents. Returns a
(deep) copy on which the filter has been applied: the original element
is left untouched.

Parameters:

[`element`]
:   the block element

[`filter`]
:   a Lua filter (table of functions) to be applied within the block
    element

Returns: the transformed block element
:::

### [`walk_inline (element, filter)`]

Apply a filter inside an inline element, walking its contents. Returns a
(deep) copy on which the filter has been applied: the original element
is left untouched.

Parameters:

[`element`]
:   the inline element

[`filter`]
:   a Lua filter (table of functions) to be applied within the inline
    element

Returns: the transformed inline element
:::

### [`read (markup[, format[, reader_options]])`]

Parse the given string into a Pandoc document.

The parser is run in the same environment that was used to read the main
input files; it has full access to the file-system and the mediabag.
This means that if the document specifies files to be included, as is
possible in formats like LaTeX, reStructuredText, and Org, then these
will be included in the resulting document. Any media elements are added
to those retrieved from the other parsed input files.

The [`format`] parameter defines the format flavor that will be
parsed. This can be either a string, using [`+`] and
[`-`] to enable and disable extensions, or a table with fields
[`format`] (string) and [`extensions`] (table). The
[`extensions`] table can be a list of all enabled extensions,
or a table with extensions as keys and their activation status as values
([`true`] or [`'enable'`] to enable an extension,
[`false`] or [`'disable'`] to disable it).

Parameters:

[`markup`]
:   the markup to be parsed (string\|Sources)

[`format`]
:   format specification; defaults to [`"markdown"`]. See the
    description above for a complete description of this parameter.
    (string\|table)

[`reader_options`]
:   options passed to the reader; may be a ReaderOptions object or a
    table with a subset of the keys and values of a ReaderOptions
    object; defaults to the default values documented in the manual.
    ([ReaderOptions](#type-readeroptions)\|table)

Returns: pandoc document ([Pandoc](#type-pandoc))

Usage:

    local org_markup = "/emphasis/"  -- Input to be read
    local document = pandoc.read(org_markup, "org")
    -- Get the first block of the document
    local block = document.blocks[1]
    -- The inline element in that block is an `Emph`
    assert(block.content[1].t == "Emph")
:::

### [`write (doc[, format[, writer_options]])`]

Converts a document to the given target format.

Parameters:

[`doc`]
:   document to convert ([Pandoc](#type-pandoc))

[`format`]
:   format specification; defaults to [`"html"`]. See the
    documentation of [[`pandoc.read`]](#pandoc.read) for a
    complete description of this parameter. (string\|table)

[`writer_options`]
:   options passed to the writer; may be a WriterOptions object or a
    table with a subset of the keys and values of a WriterOptions
    object; defaults to the default values documented in the manual.
    ([WriterOptions](#type-writeroptions)\|table)

Returns: - converted document (string)

Usage:

    local doc = pandoc.Pandoc(
      {pandoc.Para {pandoc.Strong 'Tea'}}
    )
    local html = pandoc.write(doc, 'html')
    assert(html == "<p><strong>Tea</strong></p>")
:::

### [`write_classic (doc[, writer_options])`]

Runs a classic custom Lua writer, using the functions defined in the
current environment.

Parameters:

[`doc`]
:   document to convert ([Pandoc](#type-pandoc))

[`writer_options`]
:   options passed to the writer; may be a
    [WriterOptions](#type-writeroptions) object or a table with a subset
    of the keys and values of a WriterOptions object; defaults to the
    default values documented in the manual.
    ([WriterOptions](#type-writeroptions)\|table)

Returns: - converted document (string)

Usage:

    -- Adding this function converts a classic writer into a
    -- new-style custom writer.
    function Writer (doc, opts)
      PANDOC_DOCUMENT = doc
      PANDOC_WRITER_OPTIONS = opts
      loadfile(PANDOC_SCRIPT_FILE)()
      return pandoc.write_classic(doc, opts)
    end
:::
:::::::::
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

# Module pandoc.cli

Command line options and argument parsing.

## Fields

### default_options

Default CLI options, using a JSON-like representation. (table)
:::
::::

## Functions

### parse_options

[`parse_options (args)`]

Parses command line arguments into pandoc options. Typically this
function will be used in stand-alone pandoc Lua scripts, taking the list
of arguments from the global [`arg`].

Parameters:

[`args`]
:   list of command line arguments ({string,\...})

Returns:

-   parsed options, using their JSON-like representation. (table)

*Since: 3.0*
:::

### repl

[`repl ([env])`]

Starts a read-eval-print loop (REPL). The function returns all values of
the last evaluated input. Exit the REPL by pressing [`ctrl-d`]
or [`ctrl-c`]; press [`F1`] to get a list of all key
bindings.

The REPL is started in the global namespace, unless the [`env`]
parameter is specified. In that case, the global namespace is merged
into the given table and the result is used as [`_ENV`] value
for the repl.

Specifically, local variables *cannot* be accessed, unless they are
explicitly passed via the [`env`] parameter; e.g.

    function Pandoc (doc)
      -- start repl, allow to access the `doc` parameter
      -- in the repl
      return pandoc.cli.repl{ doc = doc }
    end

**Note**: it seems that the function exits immediately on Windows,
without prompting for user input.

Parameters:

[`env`]
:   Extra environment; the global environment is merged into this table.
    (table)

Returns:

The result(s) of the last evaluated input, or nothing if the last input
resulted in an error.

*Since: 3.1.2*
:::
:::::
::::::::

# Module pandoc.utils

This module exposes internal pandoc functions and utility functions.

## Functions

### blocks_to_inlines

[`blocks_to_inlines (blocks[, sep])`]

Squash a list of blocks into a list of inlines.

Usage

    local blocks = {
      pandoc.Para{ pandoc.Str 'Paragraph1' },
      pandoc.Para{ pandoc.Emph 'Paragraph2' }
    }
    local inlines = pandoc.utils.blocks_to_inlines(blocks)
    assert(
      inlines == pandoc.Inlines {
        pandoc.Str 'Paragraph1',
        pandoc.Linebreak(),
        pandoc.Emph{ pandoc.Str 'Paragraph2' }
      }
    )

Parameters:

[`blocks`]
:   List of [Block](#type-block) elements to be flattened.
    ([Blocks](#type-blocks))

[`sep`]
:   List of [Inline](#type-inline) elements inserted as separator
    between two consecutive blocks; defaults to
    [`{pandoc.LineBreak()}`]. ([Inlines](#type-inlines))

Returns:

-   ([Inlines](#type-inlines))

*Since: 2.2.3*
:::

### citeproc

[`citeproc (doc)`]

Process the citations in the file, replacing them with rendered
citations and adding a bibliography. See the manual section on citation
rendering for details.

Usage:

    -- Lua filter that behaves like `--citeproc`
    function Pandoc (doc)
      return pandoc.utils.citeproc(doc)
    end

Parameters:

[`doc`]
:   document ([Pandoc](#type-pandoc))

Returns:

-   processed document ([Pandoc](#type-pandoc))

*Since: 2.19.1*
:::

### equals

[`equals (element1, element2)`]

Test equality of AST elements. Elements in Lua are considered equal if
and only if the objects obtained by unmarshaling are equal.

**This function is deprecated.** Use the normal Lua [`==`]
equality operator instead.

Parameters:

[`element1`]
:   (any)

[`element2`]
:   (any)

Returns:

-   Whether the two objects represent the same element (boolean)

*Since: 2.5*
:::

### from_simple_table

[`from_simple_table (simple_tbl)`]

Creates a [Table](#type-table) block element from a
[SimpleTable](#type-simpletable). This is useful for dealing with legacy
code which was written for pandoc versions older than 2.10.

Usage:

    local simple = pandoc.SimpleTable(table)
    -- modify, using pre pandoc 2.10 methods
    simple.caption = pandoc.SmallCaps(simple.caption)
    -- create normal table block again
    table = pandoc.utils.from_simple_table(simple)

Parameters:

[`simple_tbl`]
:   ([SimpleTable](#type-simpletable))

Returns:

-   table block element ([Block](#type-block))

*Since: 2.11*
:::

### make_sections

[`make_sections (number_sections, baselevel, blocks)`]

Converts a list of [Block](#type-block) elements into sections.
[`Div`]s will be created beginning at each [`Header`]
and containing following content until the next [`Header`] of
comparable level. If [`number_sections`] is true, a
[`number`] attribute will be added to each [`Header`]
containing the section number. If [`base_level`] is non-null,
[`Header`] levels will be reorganized so that there are no
gaps, and so that the base level is the level specified.

Parameters:

[`number_sections`]
:   whether section divs should get an additional [`number`]
    attribute containing the section number. (boolean)

[`baselevel`]
:   shift top-level headings to this level
    ([integer]{unknown-type="integer"}\|nil)

[`blocks`]
:   list of blocks to process ([Blocks](#type-blocks))

Returns:

-   blocks with sections ([Blocks](#type-blocks))

*Since: 2.8*
:::

### references

[`references (doc)`]

Get references defined inline in the metadata and via an external
bibliography. Only references that are actually cited in the document
(either with a genuine citation or with [`nocite`]) are
returned. URL variables are converted to links.

The structure used represent reference values corresponds to that used
in CSL JSON; the return value can be use as [`references`]
metadata, which is one of the values used by pandoc and citeproc when
generating bibliographies.

Usage:

    -- Include all cited references in document
    function Pandoc (doc)
      doc.meta.references = pandoc.utils.references(doc)
      doc.meta.bibliography = nil
      return doc
    end

Parameters:

[`doc`]
:   document ([Pandoc](#type-pandoc))

Returns:

-   lift of references. (table)

*Since: 2.17*
:::

### run_json_filter

[`run_json_filter (doc, filter[, args])`]

Filter the given doc by passing it through a JSON filter.

Parameters:

[`doc`]
:   the Pandoc document to filter ([Pandoc](#type-pandoc))

[`filter`]
:   filter to run (string)

[`args`]
:   list of arguments passed to the filter. Defaults to
    [`{FORMAT}`]. ({string,\...})

Returns:

-   filtered document ([Pandoc](#type-pandoc))

*Since: 2.1.1*
:::

### normalize_date

[`normalize_date (date)`]

Parse a date and convert (if possible) to "YYYY-MM-DD" format. We limit
years to the range 1601-9999 (ISO 8601 accepts greater than or equal to
1583, but MS Word only accepts dates starting 1601). Returns nil instead
of a string if the conversion failed.

Parameters:

[`date`]
:   the date string (string)

Returns:

-   normalized date, or nil if normalization failed. ([string or
    nil]{unknown-type="string or nil"})

*Since: 2.0.6*
:::

### sha1

[`sha1 (input)`]

Computes the SHA1 hash of the given string input.

Parameters:

[`input`]
:   (string)

Returns:

-   hexadecimal hash value (string)

*Since: 2.0.6*
:::

### stringify

[`stringify (element)`]

Converts the given element (Pandoc, Meta, Block, or Inline) into a
string with all formatting removed.

Parameters:

[`element`]
:   some pandoc AST element ([AST element]{unknown-type="AST element"})

Returns:

-   A plain string representation of the given element. (string)

*Since: 2.0.6*
:::

### to_roman_numeral

[`to_roman_numeral (n)`]

Converts an integer \< 4000 to uppercase roman numeral.

Usage:

    local to_roman_numeral = pandoc.utils.to_roman_numeral
    local pandoc_birth_year = to_roman_numeral(2006)
    -- pandoc_birth_year == 'MMVI'

Parameters:

[`n`]
:   positive integer below 4000 ([integer]{unknown-type="integer"})

Returns:

-   A roman numeral. (string)

*Since: 2.0.6*
:::

### to_simple_table

[`to_simple_table (tbl)`]

Converts a table into an old/simple table.

Usage:

    local simple = pandoc.utils.to_simple_table(table)
    -- modify, using pre pandoc 2.10 methods
    simple.caption = pandoc.SmallCaps(simple.caption)
    -- create normal table block again
    table = pandoc.utils.from_simple_table(simple)

Parameters:

[`tbl`]
:   a table ([Block](#type-block))

Returns:

-   SimpleTable object ([SimpleTable](#type-simpletable))

*Since: 2.11*
:::

### type

[`type (value)`]

Pandoc-friendly version of Lua's default [`type`] function,
returning type information similar to what is presented in the manual.

The function works by checking the metafield [`__name`]. If the
argument has a string-valued metafield [`__name`], then it
returns that string. Otherwise it behaves just like the normal
[`type`] function.

Usage:

    -- Prints one of 'string', 'boolean', 'Inlines', 'Blocks',
    -- 'table', and 'nil', corresponding to the Haskell constructors
    -- MetaString, MetaBool, MetaInlines, MetaBlocks, MetaMap, 
    -- and an unset value, respectively. 

    function Meta (meta) 
      print('type of metavalue `author`:', pandoc.utils.type(meta.author))
    end

Parameters:

[`value`]
:   any Lua value (any)

Returns:

-   type of the given value (string)

*Since: 2.17*
:::

### Version

[`Version (v)`]

Creates a Version object.

Parameters:

[`v`]
:   version description ([version string, list of integers, or
    integer]{unknown-type="version string, list of integers, or integer"})

Returns:

-   new Version object ([Version]{unknown-type="Version"})
:::
:::::::::::::::::
::::::::::::::::::

# Module pandoc.mediabag

The [`pandoc.mediabag`] module allows accessing pandoc's media
storage. The "media bag" is used when pandoc is called with the
[`--extract-media`] or (for HTML only)
[`--embed-resources`] option.

The module is loaded as part of module [`pandoc`] and can
either be accessed via the [`pandoc.mediabag`] field, or
explicitly required, e.g.:

    local mb = require 'pandoc.mediabag'

## Functions

### delete

[`delete (filepath)`]

Removes a single entry from the media bag.

Parameters:

[`filepath`]
:   Filename of the item to deleted. The media bag will be left
    unchanged if no entry with the given filename exists. (string)

*Since: 2.7.3*
:::

### empty

[`empty ()`]

Clear-out the media bag, deleting all items.

*Since: 2.7.3*
:::

### fetch

[`fetch (source)`]

Fetches the given source from a URL or local file. Returns two values:
the contents of the file and the MIME type (or an empty string).

The function will first try to retrieve [`source`] from the
mediabag; if that fails, it will try to download it or read it from the
local file system while respecting pandoc's "resource path" setting.

Usage:

    local diagram_url = 'https://pandoc.org/diagram.jpg'
    local mt, contents = pandoc.mediabag.fetch(diagram_url)

Parameters:

[`source`]
:   path to a resource; either a local file path or URI (string)

Returns:

-   The entry's MIME type, or [`nil`] if the file was not
    found. (string)
-   Contents of the file, or [`nil`] if the file was not found.
    (string)

*Since: 2.0*
:::

### fill

[`fill (doc)`]

Fills the mediabag with the images in the given document. An image that
cannot be retrieved will be replaced with a Span of class "image" that
contains the image description.

Images for which the mediabag already contains an item will not be
processed again.

Parameters:

[`doc`]
:   document from which to fill the mediabag ([Pandoc](#type-pandoc))

Returns:

-   modified document ([Pandoc](#type-pandoc))

*Since: 2.19*
:::

### insert

[`insert (filepath, mimetype, contents)`]

Adds a new entry to pandoc's media bag. Replaces any existing media bag
entry the same [`filepath`].

Usage:

    local fp = 'media/hello.txt'
    local mt = 'text/plain'
    local contents = 'Hello, World!'
    pandoc.mediabag.insert(fp, mt, contents)

Parameters:

[`filepath`]
:   filename and path relative to the output folder. (string)

[`mimetype`]
:   the item's MIME type; omit if unknown or unavailable. (string)

[`contents`]
:   the binary contents of the file. (string)

*Since: 2.0*
:::

### items

[`items ()`]

Returns an iterator triple to be used with Lua's generic
[`for`] statement. The iterator returns the filepath, MIME
type, and content of a media bag item on each invocation. Items are
processed one-by-one to avoid excessive memory use.

This function should be used only when full access to all items,
including their contents, is required. For all other cases,
[[`list`]](#pandoc.mediabag.list) should be preferred.

Usage:

    for fp, mt, contents in pandoc.mediabag.items() do
      -- print(fp, mt, contents)
    end

Returns:

Iterator triple:

-   The iterator function; must be called with the iterator state and
    the current iterator value.
-   Iterator state -- an opaque value to be passed to the iterator
    function.
-   Initial iterator value.

*Since: 2.7.3*
:::

### list

[`list ()`]

Get a summary of the current media bag contents.

Usage:

    -- calculate the size of the media bag.
    local mb_items = pandoc.mediabag.list()
    local sum = 0
    for i = 1, #mb_items do
        sum = sum + mb_items[i].length
    end
    print(sum)

Returns:

-   A list of elements summarizing each entry in the media bag. The
    summary item contains the keys [`path`], [`type`],
    and [`length`], giving the filepath, MIME type, and length
    of contents in bytes, respectively. (table)

*Since: 2.0*
:::

### lookup

[`lookup (filepath)`]

Lookup a media item in the media bag, and return its MIME type and
contents.

Usage:

    local filename = 'media/diagram.png'
    local mt, contents = pandoc.mediabag.lookup(filename)

Parameters:

[`filepath`]
:   name of the file to look up. (string)

Returns:

-   The entry's MIME type, or nil if the file was not found. (string)
-   Contents of the file, or nil if the file was not found. (string)

*Since: 2.0*
:::

### write

[`write (dir[, fp])`]

Writes the contents of mediabag to the given target directory. If
[`fp`] is given, then only the resource with the given name
will be extracted. Omitting that parameter means that the whole mediabag
gets extracted. An error is thrown if [`fp`] is given but
cannot be found in the mediabag.

Parameters:

[`dir`]
:   path of the target directory (string)

[`fp`]
:   canonical name (relative path) of resource (string)

*Since: 3.0*
:::
::::::::::::
:::::::::::::

# Module pandoc.List

This module defines pandoc's list type. It comes with useful methods and
convenience functions.

## Constructor

[[`pandoc.List([table])`]]{#pandoc.list}

:   Create a new List. If the optional argument [`table`] is
    given, set the metatable of that value to [`pandoc.List`].
    This is an alias for
    [[`pandoc.List:new([table])`]](#pandoc.list:new).
:::

## Metamethods

### [`pandoc.List:__concat (list)`]

Concatenates two lists.

Parameters:

[`list`]
:   second list concatenated to the first

Returns: a new list containing all elements from list1 and list2
:::

### [`pandoc.List:__eq (a, b)`]

Compares two lists for equality. The lists are taken as equal if and
only if they are of the same type (i.e., have the same non-nil
metatable), have the same length, and if all elements are equal.

Parameters:

[`a`], [`b`]
:   any Lua object

Returns:

-   [`true`] if the two lists are equal, [`false`]
    otherwise.
:::
:::::

## Methods

### [`pandoc.List:clone ()`]

Returns a (shallow) copy of the list. (To get a deep copy of the list,
use [`walk`] with an empty filter.)
:::

### [`pandoc.List:extend (list)`]

Adds the given list to the end of this list.

Parameters:

[`list`]
:   list to appended
:::

### [`pandoc.List:find (needle, init)`]

Returns the value and index of the first occurrence of the given item.

Parameters:

[`needle`]
:   item to search for

[`init`]
:   index at which the search is started

Returns: first item equal to the needle, or nil if no such item exists.
:::

### [`pandoc.List:find_if (pred, init)`]

Returns the value and index of the first element for which the predicate
holds true.

Parameters:

[`pred`]
:   the predicate function

[`init`]
:   index at which the search is started

Returns: first item for which \`test\` succeeds, or nil if no such item
exists.
:::

### [`pandoc.List:filter (pred)`]

Returns a new list containing all items satisfying a given condition.

Parameters:

[`pred`]
:   condition items must satisfy.

Returns: a new list containing all items for which \`test\` was true.
:::

### [`pandoc.List:includes (needle, init)`]

Checks if the list has an item equal to the given needle.

Parameters:

[`needle`]
:   item to search for

[`init`]
:   index at which the search is started

Returns: true if a list item is equal to the needle, false otherwise
:::

### [`pandoc.List:insert ([pos], value)`]

Inserts element [`value`] at position [`pos`] in list,
shifting elements to the next-greater index if necessary.

This function is identical to
[[`table.insert`]](https://www.lua.org/manual/5.4/manual.html#6.6).

Parameters:

[`pos`]
:   index of the new value; defaults to length of the list + 1

[`value`]
:   value to insert into the list
:::

### [`pandoc.List:map (fn)`]

Returns a copy of the current list by applying the given function to all
elements.

Parameters:

[`fn`]
:   function which is applied to all list items.
:::

### [`pandoc.List:new([table])`]

Create a new List. If the optional argument [`table`] is given,
set the metatable of that value to [`pandoc.List`].

Parameters:

[`table`]
:   table which should be treatable as a list; defaults to an empty
    table

Returns: the updated input value
:::

### [`pandoc.List:remove ([pos])`]

Removes the element at position [`pos`], returning the value of
the removed element.

This function is identical to
[[`table.remove`]](https://www.lua.org/manual/5.4/manual.html#6.6).

Parameters:

[`pos`]
:   position of the list value that will be removed; defaults to the
    index of the last element

Returns: the removed element
:::

### [`pandoc.List:sort ([comp])`]

Sorts list elements in a given order, in-place. If [`comp`] is
given, then it must be a function that receives two list elements and
returns true when the first element must come before the second in the
final order (so that, after the sort, [`i < j`] implies
[`not comp(list[j],list[i]))`]. If comp is not given, then the
standard Lua operator [`<`] is used instead.

Note that the comp function must define a strict partial order over the
elements in the list; that is, it must be asymmetric and transitive.
Otherwise, no valid sort may be possible.

The sort algorithm is not stable: elements considered equal by the given
order may have their relative positions changed by the sort.

This function is identical to
[[`table.sort`]](https://www.lua.org/manual/5.4/manual.html#6.6).

Parameters:

[`comp`]
:   Comparison function as described above.
:::
::::::::::::::
:::::::::::::::::::

# Module pandoc.format

Information about the formats supported by pandoc.

## Functions

### all_extensions

[`all_extensions (format)`]

Returns the list of all valid extensions for a format. No distinction is
made between input and output; an extension can have an effect when
reading a format but not when writing it, or *vice versa*.

Parameters:

[`format`]
:   format name (string)

Returns:

-   all extensions supported for [`format`]
    ([FormatExtensions]{unknown-type="FormatExtensions"})

*Since: 3.0*
:::

### default_extensions

[`default_extensions (format)`]

Returns the list of default extensions of the given format; this
function does not check if the format is supported, it will return a
fallback list of extensions even for unknown formats.

Parameters:

[`format`]
:   format name (string)

Returns:

-   default extensions enabled for [`format`]
    ([FormatExtensions]{unknown-type="FormatExtensions"})

*Since: 3.0*
:::

### extensions

[`extensions (format)`]

Returns the extension configuration for the given format. The
configuration is represented as a table with all supported extensions as
keys and their default status as value, with [`true`]
indicating that the extension is enabled by default, while
[`false`] marks a supported extension that's disabled.

This function can be used to assign a value to the
[`Extensions`] global in custom readers and writers.

Parameters:

[`format`]
:   format identifier (string)

Returns:

-   extensions config (table)

*Since: 3.0*
:::

### from_path

[`from_path (path)`]

Parameters:

[`path`]
:   file path, or list of paths (string\|{string,\...})

Returns:

-   format determined by heuristic (string\|nil)

*Since: 3.1.2*
:::
:::::::
::::::::

# Module pandoc.json

JSON module to work with JSON; based on the Aeson Haskell package.

## Fields

### null

Value used to represent the [`null`] JSON value. (light
userdata)
:::
::::

## Functions

### decode

[`decode (str[, pandoc_types])`]

Creates a Lua object from a JSON string. The function returns an
[Inline](#type-inline), [Block](#type-block), [Pandoc](#type-pandoc),
[Inlines](#type-inlines), or [Blocks](#type-blocks) element if the input
can be decoded into represent any of those types. Otherwise the default
decoding is applied, using tables, booleans, numbers, and
[null](#pandoc.json.null) to represent the JSON value.

The special handling of AST elements can be disabled by setting
[`pandoc_types`] to [`false`].

Parameters:

[`str`]
:   JSON string (string)

[`pandoc_types`]
:   whether to use pandoc types when possible. (boolean)

Returns:

-   decoded object (any)

*Since: 3.1.1*
:::

### encode

[`encode (object)`]

Encodes a Lua object as JSON string.

If the object has a metamethod with name [`__tojson`], then the
result is that of a call to that method with [`object`] passed
as the sole argument. The result of that call is expected to be a valid
JSON string, but this not checked.

Parameters:

[`object`]
:   object to convert (any)

Returns:

-   JSON encoding of the given [`object`] (string)

*Since: 3.1.1*
:::
:::::
::::::::

# Module pandoc.path

Module for file path manipulations.

## Fields

### separator

The character that separates directories. (string)
:::

### search_path_separator

The character that is used to separate the entries in the
[`PATH`] environment variable. (string)
:::
:::::

## Functions

### directory

[`directory (filepath)`]

Gets the directory name, i.e., removes the last directory separator and
everything after from the given path.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   The filepath up to the last directory separator. (string)

*Since: 2.12*
:::

### filename

[`filename (filepath)`]

Get the file name.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   File name part of the input path. (string)

*Since: 2.12*
:::

### is_absolute

[`is_absolute (filepath)`]

Checks whether a path is absolute, i.e. not fixed to a root.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   [`true`] iff [`filepath`] is an absolute path,
    [`false`] otherwise. (boolean)

*Since: 2.12*
:::

### is_relative

[`is_relative (filepath)`]

Checks whether a path is relative or fixed to a root.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   [`true`] iff [`filepath`] is a relative path,
    [`false`] otherwise. (boolean)

*Since: 2.12*
:::

### join

[`join (filepaths)`]

Join path elements back together by the directory separator.

Parameters:

[`filepaths`]
:   path components ({string,\...})

Returns:

-   The joined path. (string)

*Since: 2.12*
:::

### make_relative

[`make_relative (path, root[, unsafe])`]

Contract a filename, based on a relative path. Note that the resulting
path will never introduce [`..`] paths, as the presence of
symlinks means [`../b`] may not reach [`a/b`] if it
starts from [`a/c`]. For a worked example see [this blog
post](http://neilmitchell.blogspot.co.uk/2015/10/filepaths-are-subtle-symlinks-are-hard.html).

Parameters:

[`path`]
:   path to be made relative (string)

[`root`]
:   root path (string)

[`unsafe`]
:   whether to allow [`..`] in the result. (boolean)

Returns:

-   contracted filename (string)

*Since: 2.12*
:::

### normalize

[`normalize (filepath)`]

Normalizes a path.

-   [`//`] makes sense only as part of a (Windows) network
    drive; elsewhere, multiple slashes are reduced to a single
    [`path.separator`] (platform dependent).
-   [`/`] becomes [`path.separator`] (platform
    dependent).
-   [`./`] is removed.
-   an empty path becomes [`.`]

Parameters:

[`filepath`]
:   path (string)

Returns:

-   The normalized path. (string)

*Since: 2.12*
:::

### split

[`split (filepath)`]

Splits a path by the directory separator.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   List of all path components. ({string,\...})

*Since: 2.12*
:::

### split_extension

[`split_extension (filepath)`]

Splits the last extension from a file path and returns the parts. The
extension, if present, includes the leading separator; if the path has
no extension, then the empty string is returned as the extension.

Parameters:

[`filepath`]
:   path (string)

Returns:

-   filepath without extension (string)
-   extension or empty string (string)

*Since: 2.12*
:::

### split_search_path

[`split_search_path (search_path)`]

Takes a string and splits it on the [`search_path_separator`]
character. Blank items are ignored on Windows, and converted to
[`.`] on Posix. On Windows path elements are stripped of
quotes.

Parameters:

[`search_path`]
:   platform-specific search path (string)

Returns:

-   list of directories in search path ({string,\...})

*Since: 2.12*
:::

### treat_strings_as_paths

[`treat_strings_as_paths ()`]

Augment the string module such that strings can be used as path objects.

*Since: 2.12*
:::
::::::::::::::
::::::::::::::::::

# Module pandoc.structure

Access to the higher-level document structure, including hierarchical
sections and the table of contents.

## Functions

### make_sections

[`make_sections (blocks[, opts])`]

Puts [Blocks](#type-blocks) into a hierarchical structure: a list of
sections (each a Div with class "section" and first element a Header).

The optional [`opts`] argument can be a table; two settings are
recognized: If [`number_sections`] is true, a
[`number`] attribute containing the section number will be
added to each [`Header`]. If [`base_level`] is an
integer, then [`Header`] levels will be reorganized so that
there are no gaps, with numbering levels shifted by the given value.
Finally, an integer [`slide_level`] value triggers the creation
of slides at that heading level.

Note that a [WriterOptions](#type-writeroptions) object can be passed as
the opts table; this will set the [`number_section`] and
[`slide_level`] values to those defined on the command line.

Usage:

    local blocks = {
      pandoc.Header(2, pandoc.Str 'first'),
      pandoc.Header(2, pandoc.Str 'second'),
    }
    local opts = PANDOC_WRITER_OPTIONS
    local newblocks = pandoc.structure.make_sections(blocks, opts)

Parameters:

[`blocks`]
:   document blocks to process
    ([Blocks](#type-blocks)\|[Pandoc](#type-pandoc))

[`opts`]
:   options (table)

Returns:

-   processed blocks ([Blocks](#type-blocks))

*Since: 3.0*
:::

### slide_level

[`slide_level (blocks)`]

Find level of header that starts slides (defined as the least header
level that occurs before a non-header/non-hrule in the blocks).

Parameters:

[`blocks`]
:   document body ([Blocks](#type-blocks)\|[Pandoc](#type-pandoc))

Returns:

-   slide level ([integer]{unknown-type="integer"})

*Since: 3.0*
:::

### split_into_chunks

[`split_into_chunks (doc[, opts])`]

Converts a [Pandoc](#type-pandoc) document into a
[ChunkedDoc](#type-chunkeddoc).

Parameters:

[`doc`]
:   document to split ([Pandoc](#type-pandoc))

[`opts`]

:   Splitting options.

    The following options are supported:

        `path_template`
        :   template used to generate the chunks' filepaths
            `%n` will be replaced with the chunk number (padded with
            leading 0s to 3 digits), `%s` with the section number of
            the heading, `%h` with the (stringified) heading text,
            `%i` with the section identifier. For example,
            `"section-%s-%i.html"` might be resolved to
            `"section-1.2-introduction.html"`.

            Default is `"chunk-%n"` (string)

        `number_sections`
        :   whether sections should be numbered; default is `false`
            (boolean)

        `chunk_level`
        :   The heading level the document should be split into
            chunks. The default is to split at the top-level, i.e.,
            `1`. (integer)

        `base_heading_level`
        :   The base level to be used for numbering. Default is `nil`
            (integer|nil)

    (table)

Returns:

-   ([ChunkedDoc](#type-chunkeddoc))

*Since: 3.0*
:::

### table_of_contents

[`table_of_contents (toc_source[, opts])`]

Generates a table of contents for the given object.

Parameters:

[`toc_source`]
:   list of command line arguments
    ([Blocks](#type-blocks)\|[Pandoc](#type-pandoc)\|[ChunkedDoc](#type-chunkeddoc))

[`opts`]
:   options ([WriterOptions](#type-writeroptions))

Returns:

-   Table of contents as a BulletList object ([Block](#type-block))

*Since: 3.0*
:::
:::::::
::::::::

# Module pandoc.system

Access to the system's information and file functionality.

## Fields

### arch

The machine architecture on which the program is running. (string)
:::

### os

The operating system on which the program is running. (string)
:::
:::::

## Functions

### cputime

[`cputime ()`]

Returns the number of picoseconds CPU time used by the current program.
The precision of this result may vary in different versions and on
different platforms.

Returns:

-   CPU time in picoseconds ([integer]{unknown-type="integer"})

*Since: 3.1.1*
:::

### environment

[`environment ()`]

Retrieves the entire environment as a string-indexed table.

Returns:

-   A table mapping environment variable names to their value. (table)

*Since: 2.7.3*
:::

### get_working_directory

[`get_working_directory ()`]

Obtain the current working directory as an absolute path.

Returns:

-   The current working directory. (string)

*Since: 2.8*
:::

### list_directory

[`list_directory ([directory])`]

List the contents of a directory.

Parameters:

[`directory`]
:   Path of the directory whose contents should be listed. Defaults to
    [`.`]. (string)

Returns:

-   A table of all entries in [`directory`], except for the
    special entries ([`.`] and [`..`]). (table)

*Since: 2.19*
:::

### make_directory

[`make_directory (dirname[, create_parent])`]

Create a new directory which is initially empty, or as near to empty as
the operating system allows. The function throws an error if the
directory cannot be created, e.g., if the parent directory does not
exist or if a directory of the same name is already present.

If the optional second parameter is provided and truthy, then all
directories, including parent directories, are created as necessary.

Parameters:

[`dirname`]
:   name of the new directory (string)

[`create_parent`]
:   create parent directory if necessary (boolean)

*Since: 2.19*
:::

### remove_directory

[`remove_directory (dirname[, recursive])`]

Remove an existing, empty directory. If [`recursive`] is given,
then delete the directory and its contents recursively.

Parameters:

[`dirname`]
:   name of the directory to delete (string)

[`recursive`]
:   delete content recursively (boolean)

*Since: 2.19*
:::

### with_environment

[`with_environment (environment, callback)`]

Run an action within a custom environment. Only the environment
variables given by [`environment`] will be set, when
[`callback`] is called. The original environment is restored
after this function finishes, even if an error occurs while running the
callback action.

Parameters:

[`environment`]
:   Environment variables and their values to be set before running
    [`callback`] (table)

[`callback`]
:   Action to execute in the custom environment (function)

Returns:

The results of the call to [`callback`].

*Since: 2.7.3*
:::

### with_temporary_directory

[`with_temporary_directory (parent_dir, templ, callback)`]

Create and use a temporary directory inside the given directory. The
directory is deleted after the callback returns.

Parameters:

[`parent_dir`]
:   Parent directory to create the directory in. If this parameter is
    omitted, the system's canonical temporary directory is used.
    (string)

[`templ`]
:   Directory name template. (string)

[`callback`]
:   Function which takes the name of the temporary directory as its
    first argument. (function)

Returns:

The results of the call to [`callback`].

*Since: 2.8*
:::

### with_working_directory

[`with_working_directory (directory, callback)`]

Run an action within a different directory. This function will change
the working directory to [`directory`], execute
[`callback`], then switch back to the original working
directory, even if an error occurs while running the callback action.

Parameters:

[`directory`]
:   Directory in which the given [`callback`] should be
    executed (string)

[`callback`]
:   Action to execute in the given directory (function)

Returns:

The results of the call to [`callback`].

*Since: 2.7.3*
:::
::::::::::::
::::::::::::::::

# Module pandoc.layout

Plain-text document layouting.

## Fields

### blankline

Inserts a blank line unless one exists already.
:::

### cr

A carriage return. Does nothing if we\'re at the beginning of a line;
otherwise inserts a newline.
:::

### empty

The empty document.
:::

### space

A breaking (reflowable) space.
:::
:::::::

## Functions

### after_break

[`after_break (text)`]

Creates a [`Doc`] which is conditionally included only if it
comes at the beginning of a line.

An example where this is useful is for escaping line-initial
[`.`] in roff man.

Parameters

[`text`]

:   content to include when placed after a break (string)

Returns

-   new doc ([Doc](#type-doc))
:::

### before_non_blank

[`before_non_blank (doc)`]

Conditionally includes the given [`doc`] unless it is followed
by a blank space.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   conditional doc ([Doc](#type-doc))
:::

### blanklines

[`blanklines (n)`]

Inserts blank lines unless they exist already.

Parameters

[`n`]

:   number of blank lines (integer)

Returns

-   conditional blank lines ([Doc](#type-doc))
:::

### braces

[`braces (doc)`]

Puts the [`doc`] in curly braces.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   doc enclosed by {}. ([Doc](#type-doc))
:::

### brackets

[`brackets (doc)`]

Puts the [`doc`] in square brackets

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   doc enclosed by \[\]. ([Doc](#type-doc))
:::

### cblock

[`cblock (doc, width)`]

Creates a block with the given width and content, aligned centered.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`width`]

:   block width in chars (integer)

Returns

-   doc, aligned centered in a block with max[`width`] chars
    per line. ([Doc](#type-doc))
:::

### chomp

[`chomp (doc)`]

Chomps trailing blank space off of the [`doc`].

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   [`doc`] without trailing blanks ([Doc](#type-doc))
:::

### concat

[`concat (docs[, sep])`]

Concatenates a list of [`Doc`]s.

Parameters

[`docs`]

:   list of Docs ([`{Doc,...}`])

[`sep`]

:   separator (default: none) ([Doc](#type-doc))

Returns

-   concatenated doc ([Doc](#type-doc))
:::

### double_quotes

[`double_quotes (doc)`]

Wraps a [`Doc`] in double quotes.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   [`doc`] enclosed by [`"`] chars ([Doc](#type-doc))
:::

### flush

[`flush (doc)`]

Makes a [`Doc`] flush against the left margin.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   flushed [`doc`] ([Doc](#type-doc))
:::

### hang

[`hang (doc, ind, start)`]

Creates a hanging indent.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`ind`]

:   indentation width (integer)

[`start`]

:   document ([Doc](#type-doc))

Returns

-   [`doc`] prefixed by [`start`] on the first line,
    subsequent lines indented by [`ind`] spaces.
    ([Doc](#type-doc))
:::

### inside

[`inside (contents, start, end)`]

Encloses a [`Doc`] inside a start and end [`Doc`].

Parameters

[`contents`]

:   document ([Doc](#type-doc))

[`start`]

:   document ([Doc](#type-doc))

[`end`]

:   document ([Doc](#type-doc))

Returns

-   enclosed contents ([Doc](#type-doc))
:::

### lblock

[`lblock (doc, width)`]

Creates a block with the given width and content, aligned to the left.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`width`]

:   block width in chars (integer)

Returns

-   doc put into block with max [`width`] chars per line.
    ([Doc](#type-doc))
:::

### literal

[`literal (text)`]

Creates a [`Doc`] from a string.

Parameters

[`text`]

:   literal value (string)

Returns

-   doc containing just the literal string ([Doc](#type-doc))
:::

### nest

[`nest (doc, ind)`]

Indents a [`Doc`] by the specified number of spaces.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`ind`]

:   indentation size (integer)

Returns

-   [`doc`] indented by [`ind`] spaces
    ([Doc](#type-doc))
:::

### nestle

[`nestle (doc)`]

Removes leading blank lines from a [`Doc`].

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   [`doc`] with leading blanks removed ([Doc](#type-doc))
:::

### nowrap

[`nowrap (doc)`]

Makes a [`Doc`] non-reflowable.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   same as input, but non-reflowable ([Doc](#type-doc))
:::

### parens

[`parens (doc)`]

Puts the [`doc`] in parentheses.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   doc enclosed by (). ([Doc](#type-doc))
:::

### prefixed

[`prefixed (doc, prefix)`]

Uses the specified string as a prefix for every line of the inside
document (except the first, if not at the beginning of the line).

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`prefix`]

:   prefix for each line (string)

Returns

-   prefixed [`doc`] ([Doc](#type-doc))
:::

### quotes

[`quotes (doc)`]

Wraps a [`Doc`] in single quotes.

Parameters

[`doc`]

:   document (Doc)

Returns

-   doc enclosed in [`'`]. ([Doc](#type-doc))
:::

### rblock

[`rblock (doc, width)`]

Creates a block with the given width and content, aligned to the right.

Parameters

[`doc`]

:   document (Doc)

[`width`]

:   block width in chars (integer)

Returns

-   doc, right aligned in a block with max[`width`] chars per
    line. ([Doc](#type-doc))
:::

### vfill

[`vfill (border)`]

An expandable border that, when placed next to a box, expands to the
height of the box. Strings cycle through the list provided.

Parameters

[`border`]

:   vertically expanded characters (string)

Returns

-   automatically expanding border Doc ([Doc](#type-doc))
:::

### render

[`render (doc[, colwidth])`]

Render a @\'Doc\'@. The text is reflowed on breakable spaces to match
the given line length. Text is not reflowed if the line length parameter
is omitted or nil.

Parameters

[`doc`]

:   document (Doc)

[`colwidth`]

:   planned maximum line length (integer)

Returns

-   rendered doc ([Doc](#type-doc))
:::

### is_empty

[`is_empty (doc)`]

Checks whether a doc is empty.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   [`true`] iff [`doc`] is the empty document,
    [`false`] otherwise. (boolean)
:::

### height

[`height (doc)`]

Returns the height of a block or other Doc.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   doc height (integer\|string)
:::

### min_offset

[`min_offset (doc)`]

Returns the minimal width of a [`Doc`] when reflowed at
breakable spaces.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   minimal possible width (integer\|string)
:::

### offset

[`offset (doc)`]

Returns the width of a [`Doc`] as number of characters.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

Returns

-   doc width (integer\|string)
:::

### real_length

[`real_length (str)`]

Returns the real length of a string in a monospace font: 0 for a
combining character, 1 for a regular character, 2 for an East Asian wide
character.

Parameters

[`str`]

:   UTF-8 string to measure (string)

Returns

-   text length (integer\|string)
:::

### update_column

[`update_column (doc, i)`]

Returns the column that would be occupied by the last laid out
character.

Parameters

[`doc`]

:   document ([Doc](#type-doc))

[`i`]

:   start column (integer)

Returns

-   column number (integer\|string)
:::
::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::::::::::::::

# Module pandoc.scaffolding

Scaffolding for custom writers.

## Fields

### Writer

An object to be used as a [`Writer`] function; the construct
handles most of the boilerplate, expecting only render functions for all
AST elements (table)
:::
::::
:::::

# Module pandoc.text

UTF-8 aware text manipulation functions, implemented in Haskell.

The text module can also be loaded under the name [`text`],
although this is discouraged and deprecated.

::: {#cb58 .sourceCode}
```lua
-- uppercase all regular text in a document:
function Str (s)
  s.text = pandoc.text.upper(s.text)
  return s
end
```
:::

## Functions

### fromencoding

[`fromencoding (s[, encoding])`]

Converts a string to UTF-8. The [`encoding`] parameter
specifies the encoding of the input string. On Windows, that parameter
defaults to the current ANSI code page; on other platforms the function
will try to use the file system's encoding.

The set of known encodings is system dependent, but includes at least
[`UTF-8`], [`UTF-16BE`], [`UTF-16LE`],
[`UTF-32BE`], and [`UTF-32LE`]. Note that the default
code page on Windows is available through [`CP0`].

Parameters:

[`s`]
:   string to be converted (string)

[`encoding`]
:   target encoding (string)

Returns:

-   UTF-8 string (string)

*Since: 3.0*
:::

### len

[`len (s)`]

Returns the length of a UTF-8 string, i.e., the number of characters.

Parameters:

[`s`]
:   UTF-8 encoded string (string)

Returns:

-   length ([integer]{unknown-type="integer"}\|string)

*Since: 2.0.3*
:::

### lower

[`lower (s)`]

Returns a copy of a UTF-8 string, converted to lowercase.

Parameters:

[`s`]
:   UTF-8 string to convert to lowercase (string)

Returns:

-   Lowercase copy of [`s`] (string)

*Since: 2.0.3*
:::

### reverse

[`reverse (s)`]

Returns a copy of a UTF-8 string, with characters reversed.

Parameters:

[`s`]
:   UTF-8 string to revert (string)

Returns:

-   Reversed [`s`] (string)

*Since: 2.0.3*
:::

### sub

[`sub (s, i[, j])`]

Returns a substring of a UTF-8 string, using Lua's string indexing
rules.

Parameters:

[`s`]
:   UTF-8 string (string)

[`i`]
:   substring start position ([integer]{unknown-type="integer"})

[`j`]
:   substring end position ([integer]{unknown-type="integer"})

Returns:

-   text substring (string)

*Since: 2.0.3*
:::

### toencoding

[`toencoding (s[, enc])`]

Converts a UTF-8 string to a different encoding. The
[`encoding`] parameter defaults to the current ANSI code page
on Windows; on other platforms it will try to guess the file system's
encoding.

The set of known encodings is system dependent, but includes at least
[`UTF-8`], [`UTF-16BE`], [`UTF-16LE`],
[`UTF-32BE`], and [`UTF-32LE`]. Note that the default
code page on Windows is available through [`CP0`].

Parameters:

[`s`]
:   UTF-8 string (string)

[`enc`]
:   target encoding (string)

Returns:

-   re-encoded string (string)

*Since: 3.0*
:::

### upper

[`upper (s)`]

Returns a copy of a UTF-8 string, converted to uppercase.

Parameters:

[`s`]
:   UTF-8 string to convert to uppercase (string)

Returns:

-   Uppercase copy of [`s`] (string)

*Since: 2.0.3*
:::
::::::::::
::::::::::::

# Module pandoc.template

Handle pandoc templates.

### apply

[`apply (template, context)`]

Applies a context with variable assignments to a template, returning the
rendered template. The [`context`] parameter must be a table
with variable names as keys and [Doc](#type-doc), string, boolean, or
table as values, where the table can be either be a list of the
aforementioned types, or a nested context.

Parameters:

[`template`]
:   template to apply ([Template]{#type-template})

[`context`]
:   variable values (table)

Returns:

-   rendered template ([Doc](#type-doc))
:::

### compile

[`compile (template[, templates_path])`]

Compiles a template string into a [Template](#type-template) object
usable by pandoc.

If the [`templates_path`] parameter is specified, should be the
file path associated with the template. It is used when checking for
partials. Partials will be taken only from the default data files if
this parameter is omitted.

An error is raised if compilation fails.

Parameters:

[`template`]
:   template string (string)

[`templates_path`]
:   parameter to determine a default path and extension for partials;
    uses the data files templates path by default. (string)

Returns:

-   compiled template (Template)
:::

### default

[`default ([writer])`]

Returns the default template for a given writer as a string. An error if
no such template can be found.

Parameters:

[`writer`]
:   name of the writer for which the template should be retrieved;
    defaults to the global [`FORMAT`].

Returns:

-   raw template (string)
:::

### meta_to_context

[`meta_to_context (meta, blocks_writer, inlines_writer)`]

Creates template context from the document's [Meta]{#type-meta} data,
using the given functions to convert [Blocks](#type-blocks) and
[Inlines](#type-inlines) to [Doc](#type-doc) values.

Parameters:

[`meta`]
:   document metadata ([Meta](#type-meta))

[`blocks_writer`]
:   converter from [Blocks](#type-blocks) to [Doc](#type-doc) values
    (function)

[`inlines_writer`]
:   converter from [Inlines](#type-inlines) to [Doc](#type-doc) values
    (function)

Returns:

-   template context (table)
:::
:::::::

# Module pandoc.types

Constructors for types which are not part of the pandoc AST.

### Version

[`Version (version_specifier)`]

Creates a Version object.

Parameters:

[`version_specifier`]
:   Version specifier: this can be a version string like
    [`'2.7.3'`], a list of integers like
    [`{2, 7, 3}`], a single integer, or a
    [Version](#type-version).

Returns:

-   A new [Version](#type-version) object.
:::
::::

# Module pandoc.zip

Functions to create, modify, and extract files from zip archives.

The module can be called as a function, in which case it behaves like
the [`zip`] function described below.

Zip options are optional; when defined, they must be a table with any of
the following keys:

-   [`recursive`] : recurse directories when set to [`true`];
-   [`verbose`] : print info messages to stdout;
-   [`destination`] : the value specifies the directory in which to extract;
-   [`location`] : value is used as path name, defining where files are placed.
-   [`preserve_symlinks`] : Boolean value, controlling whether
    symbolic links are preserved as such. This option is ignored on
    Windows.

## Functions

### Archive

[`Archive ([bytestring_or_entries])`]

Reads an *Archive* structure from a raw zip archive or a list of Entry
items; throws an error if the given string cannot be decoded into an
archive.

Parameters:

[`bytestring_or_entries`]
:   binary archive data or list of entries; defaults to an empty list
    (string\|{[zip.Entry](#type-pandoc.zip.Entry),\...})

Returns:

-   new Archive ([zip.Archive](#type-pandoc.zip.Archive))

*Since: 3.0*
:::

### Entry

[`Entry (path, contents[, modtime])`]

Generates a ZipEntry from a filepath, uncompressed content, and the
file's modification time.

Parameters:

[`path`]
:   file path in archive (string)

[`contents`]
:   uncompressed contents (string)

[`modtime`]
:   modification time ([integer]{unknown-type="integer"})

Returns:

-   a new zip archive entry ([zip.Entry](#type-pandoc.zip.Entry))

*Since: 3.0*
:::

### read_entry

[`read_entry (filepath[, opts])`]

Generates a ZipEntry from a file or directory.

Parameters:

[`filepath`]
:   (string)

[`opts`]
:   zip options (table)

Returns:

-   a new zip archive entry ([zip.Entry](#type-pandoc.zip.Entry))

*Since: 3.0*
:::

### zip

[`zip (filepaths[, opts])`]

Package and compress the given files into a new Archive.

Parameters:

[`filepaths`]
:   list of files from which the archive is created. ({string,\...})

[`opts`]
:   zip options (table)

Returns:

-   a new archive ([zip.Archive](#type-pandoc.zip.Archive))

*Since: 3.0*
:::
:::::::

## Types

### zip.Archive

#### Properties

##### entries

Files in this zip archive ({[zip.Entry](#type-pandoc.zip.Entry),\...})
:::
::::

#### Methods

##### bytestring

[`bytestring (self)`]

Returns the raw binary string representation of the archive.

Parameters:

[`self`]
:   ([zip.Archive](#type-pandoc.zip.Archive))

Returns:

-   bytes of the archive (string)
:::

##### extract

[`extract (self[, opts])`]

Extract all files from this archive, creating directories as needed.
Note that the last-modified time is set correctly only in POSIX, not in
Windows. This function fails if encrypted entries are present.

Parameters:

[`self`]
:   ([zip.Archive](#type-pandoc.zip.Archive))

[`opts`]
:   zip options (table)
:::
:::::
::::::::

### zip.Entry

#### Properties

##### modtime

Modification time (seconds since unix epoch)
([integer]{unknown-type="integer"})
:::

##### path

Relative path, using [`/`] as separator
([zip.Entry](#type-pandoc.zip.Entry))
:::
:::::

#### Methods

##### contents

[`contents (self[, password])`]

Get the uncompressed contents of a zip entry. If [`password`]
is given, then that password is used to decrypt the contents. An error
is throws if decrypting fails.

Parameters:

[`self`]
:   ([zip.Entry](#type-pandoc.zip.Entry))

[`password`]
:   password for entry (string)

Returns:

-   binary contents (string)
:::


# /Creating Custom Pandoc Readers in Lua


:::: {#sidebar}
::: {#toc}
-   [Introduction](#introduction){#toc-introduction}
-   [Bytestring readers](#bytestring-readers){#toc-bytestring-readers}
-   [Format extensions](#format-extensions){#toc-format-extensions}
-   [Example: plain text reader](#example-plain-text-reader){#toc-example-plain-text-reader}
-   [Example: a wiki Creole reader](#example-a-wiki-creole-reader){#toc-example-a-wiki-creole-reader}
-   [Example: parsing JSON from an API](#example-parsing-json-from-an-api){#toc-example-parsing-json-from-an-api}
-   [Example: syntax-highlighted code files](#example-syntax-highlighted-code-files){#toc-example-syntax-highlighted-code-files}
-   [Example: extracting the content from web pages](#example-extracting-the-content-from-web-pages){#toc-example-extracting-the-content-from-web-pages}
:::


# Introduction

If you need to parse a format not already handled by pandoc, you can
create a custom reader using the [Lua](https://www.lua.org) language.
Pandoc has a built-in Lua interpreter, so you needn't install any
additional software to do this.

A custom reader is a Lua file that defines a function called
[`Reader`], which takes two arguments:

-   the raw input to be parsed, as a list of sources
-   optionally, a table of reader options, e.g.
    [`{ columns = 62, standalone = true }`].

The [`Reader`] function should return a [`Pandoc`]
AST. This can be created using functions in the [[`pandoc`]
module](https://pandoc.org/lua-filters.html#module-pandoc), which is
automatically in scope. (Indeed, all of the utility functions that are
available for [Lua filters](https://pandoc.org/lua-filters.html) are
available in custom readers, too.)

Each source item corresponds to a file or stream passed to pandoc
containing its text and name. E.g., if a single file
[`input.txt`] is passed to pandoc, then the list of sources
will contain just a single element [`s`], where
[`s.name == 'input.txt'`] and [`s.text`] contains the
file contents as a string.

The sources list, as well as each of its elements, can be converted to a
string via the Lua standard library function [`tostring`].

A minimal example would be

::: {#cb1 .sourceCode}
```lua
function Reader(input)
  return pandoc.Pandoc({ pandoc.CodeBlock(tostring(input)) })
end
```
:::

This just returns a document containing a big code block with all of the
input. Or, to create a separate code block for each input file, one
might write

::: {#cb2 .sourceCode}
```lua
function Reader(input)
  return pandoc.Pandoc(input:map(
    function (s) return pandoc.CodeBlock(s.text) end))
end
```
:::

In a nontrivial reader, you'll want to parse the input. You can do this
using standard Lua library functions (for example, the
[patterns](http://lua-users.org/wiki/PatternsTutorial) library), or with
the powerful and fast [lpeg](http://www.inf.puc-rio.br/~roberto/lpeg/)
parsing library, which is automatically in scope. You can also use
external Lua libraries (for example, an XML parser).

A previous pandoc version passed a raw string instead of a list of
sources to the Reader function. Reader functions that rely on this are
obsolete, but still supported: Pandoc analyzes any script error,
detecting when code assumed the old behavior. The code is rerun with raw
string input in this case, thereby ensuring backwards compatibility.
:::::

# Bytestring readers

In order to read binary formats, including docx, odt, and epub, pandoc
supports the [`ByteStringReader`] function. A
[`ByteStringReader`] function is similar to the
[`Reader`] function that processes text input. Instead of a
list of sources, the ByteStringReader function is passed a bytestring,
i.e., a string that contains the binary input.

::: {#cb3 .sourceCode}
```lua
-- read input as epub
function ByteStringReader (input)
  return pandoc.read(input, 'epub')
end
```
:::
::::

# Format extensions

Custom readers can be built such that their behavior is controllable
through format extensions, such as [`smart`],
[`citations`], or [`hard-line-breaks`]. Supported
extensions are those that are present as a key in the global
[`Extensions`] table. Fields of extensions that are enabled
default have the value [`true`] or [`enable`], while
those that are supported but disabled have value [`false`] or
[`disable`].

Example: A writer with the following global table supports the
extensions [`smart`], [`citations`], and
[`foobar`], with [`smart`] enabled and the other two
disabled by default:

::: {#cb4 .sourceCode}
```lua
Extensions = {
  smart = 'enable',
  citations = 'disable',
  foobar = true
}
```
:::

The users control extensions as usual, e.g.,
[`pandoc -f my-reader.lua+citations`]. The extensions are
accessible through the reader options' [`extensions`] field,
e.g.:

::: {#cb5 .sourceCode}
```lua
function Reader (input, opts)
  print(
    'The citations extension is',
    opts.extensions:includes 'citations' and 'enabled' or 'disabled'
  )
  -- ...
end
```
:::

Extensions that are neither enabled nor disabled in the
[`Extensions`] field are treated as unsupported by the reader.
Trying to modify such an extension via the command line will lead to an
error.
:::::

# Example: plain text reader

This is a simple example using
[lpeg](http://www.inf.puc-rio.br/~roberto/lpeg/) to parse the input into
space-separated strings and blankline-separated paragraphs.

::: {#cb6 .sourceCode}
```lua
-- A sample custom reader that just parses text into blankline-separated
-- paragraphs with space-separated words.

-- For better performance we put these functions in local variables:
local P, S, R, Cf, Cc, Ct, V, Cs, Cg, Cb, B, C, Cmt =
  lpeg.P, lpeg.S, lpeg.R, lpeg.Cf, lpeg.Cc, lpeg.Ct, lpeg.V,
  lpeg.Cs, lpeg.Cg, lpeg.Cb, lpeg.B, lpeg.C, lpeg.Cmt

local whitespacechar = S(" \t\r\n")
local wordchar = (1 - whitespacechar)
local spacechar = S(" \t")
local newline = P"\r"^-1 * P"\n"
local blanklines = newline * (spacechar^0 * newline)^1
local endline = newline - blanklines

-- Grammar
G = P{ "Pandoc",
  Pandoc = Ct(V"Block"^0) / pandoc.Pandoc;
  Block = blanklines^0 * V"Para" ;
  Para = Ct(V"Inline"^1) / pandoc.Para;
  Inline = V"Str" + V"Space" + V"SoftBreak" ;
  Str = wordchar^1 / pandoc.Str;
  Space = spacechar^1 / pandoc.Space;
  SoftBreak = endline / pandoc.SoftBreak;
}

function Reader(input)
  return lpeg.match(G, tostring(input))
end
```
:::

Example of use:

    % pandoc -f plain.lua -t native
    *Hello there*, this is plain text with no formatting
    except paragraph breaks.

    - Like this one.
    ^D
    [ Para
        [ Str "*Hello"
        , Space
        , Str "there*,"
        , Space
        , Str "this"
        , Space
        , Str "is"
        , Space
        , Str "plain"
        , Space
        , Str "text"
        , Space
        , Str "with"
        , Space
        , Str "no"
        , Space
        , Str "formatting"
        , SoftBreak
        , Str "except"
        , Space
        , Str "paragraph"
        , Space
        , Str "breaks."
        ]
    , Para
        [ Str "-"
        , Space
        , Str "Like"
        , Space
        , Str "this"
        , Space
        , Str "one."
        ]
    ]
::::

# Example: a wiki Creole reader

This is a parser for [Creole common wiki
markup](http://www.wikicreole.org/wiki/CheatSheet). It uses an
[lpeg](http://www.inf.puc-rio.br/~roberto/lpeg/) grammar. Fun fact: this
custom reader is faster than pandoc's built-in creole reader! This shows
that high-performance readers can be designed in this way.

::: {#cb8 .sourceCode}
```lua
-- A sample custom reader for Creole 1.0 (common wiki markup)
-- http://www.wikicreole.org/wiki/CheatSheet

-- For better performance we put these functions in local variables:
local P, S, R, Cf, Cc, Ct, V, Cs, Cg, Cb, B, C, Cmt =
  lpeg.P, lpeg.S, lpeg.R, lpeg.Cf, lpeg.Cc, lpeg.Ct, lpeg.V,
  lpeg.Cs, lpeg.Cg, lpeg.Cb, lpeg.B, lpeg.C, lpeg.Cmt

local whitespacechar = S(" \t\r\n")
local specialchar = S("/*~[]\\{}|")
local wordchar = (1 - (whitespacechar + specialchar))
local spacechar = S(" \t")
local newline = P"\r"^-1 * P"\n"
local blankline = spacechar^0 * newline
local endline = newline * #-blankline
local endequals = spacechar^0 * P"="^0 * spacechar^0 * newline
local cellsep = spacechar^0 * P"|"

local function trim(s)
   return (s:gsub("^%s*(.-)%s*$", "%1"))
end

local function ListItem(lev, ch)
  local start
  if ch == nil then
    start = S"*#"
  else
    start = P(ch)
  end
  local subitem = function(c)
    if lev < 6 then
      return ListItem(lev + 1, c)
    else
      return (1 - 1) -- fails
    end
  end
  local parser = spacechar^0
               * start^lev
               * #(- start)
               * spacechar^0
               * Ct((V"Inline" - (newline * spacechar^0 * S"*#"))^0)
               * newline
               * (Ct(subitem("*")^1) / pandoc.BulletList
                  +
                  Ct(subitem("#")^1) / pandoc.OrderedList
                  +
                  Cc(nil))
               / function (ils, sublist)
                   return { pandoc.Plain(ils), sublist }
                 end
  return parser
end

-- Grammar
G = P{ "Doc",
  Doc = Ct(V"Block"^0)
      / pandoc.Pandoc ;
  Block = blankline^0
        * ( V"Header"
          + V"HorizontalRule"
          + V"CodeBlock"
          + V"List"
          + V"Table"
          + V"Para") ;
  Para = Ct(V"Inline"^1)
       * newline
       / pandoc.Para ;
  HorizontalRule = spacechar^0
                 * P"----"
                 * spacechar^0
                 * newline
                 / pandoc.HorizontalRule;
  Header = (P("=")^1 / string.len)
         * spacechar^1
         * Ct((V"Inline" - endequals)^1)
         * endequals
         / pandoc.Header;
  CodeBlock = P"{{{"
            * blankline
            * C((1 - (newline * P"}}}"))^0)
            * newline
            * P"}}}"
            / pandoc.CodeBlock;
  Placeholder = P"<<<"
              * C(P(1) - P">>>")^0
              * P">>>"
              / function() return pandoc.Div({}) end;
  List = V"BulletList"
       + V"OrderedList" ;
  BulletList = Ct(ListItem(1,'*')^1)
             / pandoc.BulletList ;
  OrderedList = Ct(ListItem(1,'#')^1)
             / pandoc.OrderedList ;
  Table = (V"TableHeader" + Cc{})
        * Ct(V"TableRow"^1)
        / function(headrow, bodyrows)
            local numcolumns = #(bodyrows[1])
            local aligns = {}
            local widths = {}
            for i = 1,numcolumns do
              aligns[i] = pandoc.AlignDefault
              widths[i] = 0
            end
            return pandoc.utils.from_simple_table(
              pandoc.SimpleTable({}, aligns, widths, headrow, bodyrows))
          end ;
  TableHeader = Ct(V"HeaderCell"^1)
              * cellsep^-1
              * spacechar^0
              * newline ;
  TableRow   = Ct(V"BodyCell"^1)
             * cellsep^-1
             * spacechar^0
             * newline ;
  HeaderCell = cellsep
             * P"="
             * spacechar^0
             * Ct((V"Inline" - (newline + cellsep))^0)
             / function(ils) return { pandoc.Plain(ils) } end ;
  BodyCell   = cellsep
             * spacechar^0
             * Ct((V"Inline" - (newline + cellsep))^0)
             / function(ils) return { pandoc.Plain(ils) } end ;
  Inline = V"Emph"
         + V"Strong"
         + V"LineBreak"
         + V"Link"
         + V"URL"
         + V"Image"
         + V"Str"
         + V"Space"
         + V"SoftBreak"
         + V"Escaped"
         + V"Placeholder"
         + V"Code"
         + V"Special" ;
  Str = wordchar^1
      / pandoc.Str;
  Escaped = P"~"
          * C(P(1))
          / pandoc.Str ;
  Special = specialchar
          / pandoc.Str;
  Space = spacechar^1
        / pandoc.Space ;
  SoftBreak = endline
            * # -(V"HorizontalRule" + V"CodeBlock")
            / pandoc.SoftBreak ;
  LineBreak = P"\\\\"
            / pandoc.LineBreak ;
  Code = P"{{{"
       * C((1 - P"}}}")^0)
       * P"}}}"
       / trim / pandoc.Code ;
  Link = P"[["
       * C((1 - (P"]]" + P"|"))^0)
       * (P"|" * Ct((V"Inline" - P"]]")^1))^-1 * P"]]"
       / function(url, desc)
           local txt = desc or {pandoc.Str(url)}
           return pandoc.Link(txt, url)
         end ;
  Image = P"{{"
        * #-P"{"
        * C((1 - (S"}"))^0)
        * (P"|" * Ct((V"Inline" - P"}}")^1))^-1
        * P"}}"
        / function(url, desc)
            local txt = desc or ""
            return pandoc.Image(txt, url)
          end ;
  URL = P"http"
      * P"s"^-1
      * P":"
      * (1 - (whitespacechar + (S",.?!:;\"'" * #whitespacechar)))^1
      / function(url)
          return pandoc.Link(pandoc.Str(url), url)
        end ;
  Emph = P"//"
       * Ct((V"Inline" - P"//")^1)
       * P"//"
       / pandoc.Emph ;
  Strong = P"**"
         * Ct((V"Inline" -P"**")^1)
         * P"**"
         / pandoc.Strong ;
}

function Reader(input, reader_options)
  return lpeg.match(G, tostring(input))
end
```
:::

Example of use:

    % pandoc -f creole.lua -t markdown
    == Wiki Creole

    You can make things **bold** or //italic// or **//both//** or //**both**//.

    Character formatting extends across line breaks: **bold,
    this is still bold. This line deliberately does not end in star-star.

    Not bold. Character formatting does not cross paragraph boundaries.

    You can use [[internal links]] or [[http://www.wikicreole.org|external links]],
    give the link a [[internal links|different]] name.
    ^D
    ## Wiki Creole

    You can make things **bold** or *italic* or ***both*** or ***both***.

    Character formatting extends across line breaks: \*\*bold, this is still
    bold. This line deliberately does not end in star-star.

    Not bold. Character formatting does not cross paragraph boundaries.

    You can use [internal links](internal links) or [external
    links](http://www.wikicreole.org), give the link a
    [different](internal links) name.
::::

# Example: parsing JSON from an API

This custom reader consumes the JSON output of
<https://www.reddit.com/r/haskell.json> and produces a document
containing the current top articles on the Haskell subreddit.

It assumes that the [`pandoc.json`] library is available, which
ships with pandoc versions after (not including) 3.1. It's still
possible to use this with older pandoc version by using a different JSON
library. E.g., [`luajson`] can be installed using
[`luarocks install luajson`]---but be sure you are installing
it for Lua 5.4, which is the version packaged with pandoc.

::: {#cb10 .sourceCode}
```lua
-- consumes the output of https://www.reddit.com/r/haskell.json

local json = require 'pandoc.json'

local function read_inlines(raw)
  local doc = pandoc.read(raw, "commonmark")
  return pandoc.utils.blocks_to_inlines(doc.blocks)
end

local function read_blocks(raw)
  local doc = pandoc.read(raw, "commonmark")
  return doc.blocks
end

function Reader(input)

  local parsed = json.decode(tostring(input))
  local blocks = {}

  for _,entry in ipairs(parsed.data.children) do
    local d = entry.data
    table.insert(blocks, pandoc.Header(2,
                  pandoc.Link(read_inlines(d.title), d.url)))
    for _,block in ipairs(read_blocks(d.selftext)) do
      table.insert(blocks, block)
    end
  end

  return pandoc.Pandoc(blocks)

end
```
:::

Similar code can be used to consume JSON output from other APIs.

Note that the content of the text fields is markdown, so we convert it
using [`pandoc.read()`].
::::

# Example: syntax-highlighted code files

This is a reader that puts the content of each input file into a code
block, sets the file's extension as the block's class to enable code
highlighting, and places the filename as a header above each code block.

::: {#cb11 .sourceCode}
```lua
function to_code_block (source)
  local _, lang = pandoc.path.split_extension(source.name)
  return pandoc.Div{
    pandoc.Header(1, source.name == '' and '<stdin>' or source.name),
    pandoc.CodeBlock(source.text, {class=lang}),
  }
end

function Reader (input, opts)
  return pandoc.Pandoc(input:map(to_code_block))
end
```
:::
::::

# Example: extracting the content from web pages

This reader uses the command-line program [`readable`] (install
via [`npm install -g readability-cli`]) to clean out parts of
HTML input that have to do with navigation, leaving only the content.

::: {#cb12 .sourceCode}
```lua
-- Custom reader that extracts the content from HTML documents,
-- ignoring navigation and layout elements. This preprocesses input
-- through the 'readable' program (which can be installed using
-- 'npm install -g readability-cli') and then calls the HTML reader.
-- In addition, Divs that seem to have only a layout function are removed
-- to avoid clutter.

function make_readable(source)
  local result
  if not pcall(function ()
      local name = source.name
      if not name:match("http") then
        name = "file:///" .. name
      end
      result = pandoc.pipe("readable",
                 {"--keep-classes","--base",name},
                 source.text)
    end) then
      io.stderr:write("Error running 'readable': do you have it installed?\n")
      io.stderr:write("npm install -g readability-cli\n")
      os.exit(1)
  end
  return result
end

local boring_classes =
        { row = true,
          page = true,
          container = true
        }

local boring_attributes = { "role" }

local function is_boring_class(cl)
  return boring_classes[cl] or cl:match("col%-") or cl:match("pull%-")
end

local function handle_div(el)
  for i,class in ipairs(el.classes) do
    if is_boring_class(class) then
      el.classes[i] = nil
    end
  end
  for i,k in ipairs(boring_attributes) do
    el.attributes[k] = nil
  end
  if el.identifier:match("readability%-") then
    el.identifier = ""
  end
  if #el.classes == 0 and #el.attributes == 0 and #el.identifier == 0 then
    return el.content
  else
    return el
  end
end

function Reader(sources)
  local readable = ''
  for _,source in ipairs(sources) do
    readable = readable .. make_readable(source)
  end
  local doc = pandoc.read(readable, "html", PANDOC_READER_OPTIONS)
  -- Now remove Divs used only for layout
  return doc:walk{ Div = handle_div }
end
```
:::

Example of use:

    pandoc -f readable.lua -t markdown https://pandoc.org

and compare the output to

    pandoc -f html -t markdown https://pandoc.org
::::


# /Creating Custom Pandoc Writers in Lua

:::: {#sidebar}
::: {#toc}
-   [Introduction](#introduction){#toc-introduction}
-   [Writers](#writers){#toc-writers}
    -   [Format extensions](#format-extensions){#toc-format-extensions}
    -   [Default template](#default-template){#toc-default-template}
    -   [Example: modified Markdown writer](#example-modified-markdown-writer){#toc-example-modified-markdown-writer}
    -   [Reducing boilerplate with [`pandoc.scaffolding.Writer`]](#reducing-boilerplate-with-pandoc.scaffolding.writer){#toc-reducing-boilerplate-with-pandoc.scaffolding.writer}
-   [Classic style](#classic-style){#toc-classic-style}
    -   [Template variables](#template-variables){#toc-template-variables}
    -   [Changes in pandoc 3.0](#changes-in-pandoc-3.0){#toc-changes-in-pandoc-3.0}
:::

# Introduction

If you need to render a format not already handled by pandoc, or you
want to change how pandoc renders a format, you can create a custom
writer using the [Lua](https://www.lua.org) language. Pandoc has a
built-in Lua interpreter, so you needn't install any additional software
to do this.

A custom writer is a Lua file that defines how to render the document.
Writers must define just a single function, named either
[`Writer`] or [`ByteStringWriter`], which gets passed
the document and writer options, and then handles the conversion of the
document, rendering it into a string. This interface was introduced in
pandoc 2.17.2, with ByteString writers becoming available in pandoc 3.0.

Pandoc also supports "classic" custom writers, where a Lua function must
be defined for each AST element type. Classic style writers are
*deprecated* and should be replaced with new-style writers if possible.
:::

# Writers

Custom writers using the new style must contain a global function named
[`Writer`] or [`ByteStringWriter`]. Pandoc calls this
function with the document and writer options as arguments, and expects
the function to return a UTF-8 encoded string.

::: {#cb1 .sourceCode}
```lua
function Writer (doc, opts)
  -- ...
end
```
:::

Writers that do not return text but binary data should define a function
with name [`ByteStringWriter`] instead. The function must still
return a string, but it does not have to be UTF-8 encoded and can
contain arbitrary binary data.

If both [`Writer`] and [`ByteStringWriter`] functions
are defined, then only the [`Writer`] function will be used.

## Format extensions

Writers can be customized through format extensions, such as
[`smart`], [`citations`], or
[`hard_line_breaks`]. The global [`Extensions`] table
indicates supported extensions with a key. Extensions enabled by default
are assigned a true value, while those that are supported but disabled
are assigned a false value.

Example: A writer with the following global table supports the
extensions [`smart`], [`citations`], and
[`foobar`], with [`smart`] enabled and the others
disabled by default:

::: {#cb2 .sourceCode}
```lua
Extensions = {
  smart = true,
  citations = false,
  foobar = false
}
```
:::

The users control extensions as usual, e.g.,
[`pandoc -t my-writer.lua+citations`]. The extensions are
accessible through the writer options' [`extensions`] field,
e.g.:

::: {#cb3 .sourceCode}
```lua
function Writer (doc, opts)
  print(
    'The citations extension is',
    opts.extensions:includes 'citations' and 'enabled' or 'disabled'
  )
  -- ...
end
```
:::
:::::

## Default template

The default template of a custom writer is defined by the return value
of the global function [`Template`]. Pandoc uses the default
template for rendering when the user has not specified a template, but
invoked with the [`-s`]/[`--standalone`] flag.

The [`Template`] global can be left undefined, in which case
pandoc will throw an error when it would otherwise use the default
template.
:::

## Example: modified Markdown writer

Writers have access to all modules described in the [Lua filters
documentation](https://pandoc.org/lua-filters.html). This includes
[`pandoc.write`], which can be used to render a document in a
format already supported by pandoc. The document can be modified before
this conversion, as demonstrated in the following short example. It
renders a document as GitHub Flavored Markdown, but always uses fenced
code blocks, never indented code.

::: {#cb4 .sourceCode}
```lua
function Writer (doc, opts)
  local filter = {
    CodeBlock = function (cb)
      -- only modify if code block has no attributes
      if cb.attr == pandoc.Attr() then
        local delimited = '```\n' .. cb.text .. '\n```'
        return pandoc.RawBlock('markdown', delimited)
      end
    end
  }
  return pandoc.write(doc:walk(filter), 'gfm', opts)
end

function Template ()
  local template = pandoc.template
  return template.compile(template.default 'gfm')
end
```
:::
::::

## Reducing boilerplate with [`pandoc.scaffolding.Writer`]

The [`pandoc.scaffolding.Writer`] structure is a custom writer
scaffold that serves to avoid common boilerplate code when defining a
custom writer. The object can be used as a function and allows to skip
details like metadata and template handling, requiring only the render
functions for each AST element type.

The value of [`pandoc.scaffolding.Writer`] is a function that
should usually be assigned to the global [`Writer`]:

::: {#cb5 .sourceCode}
```lua
Writer = pandoc.scaffolding.Writer
```
:::

The render functions for Block and Inline values can then be added to
[`Writer.Block`] and [`Writer.Inline`], respectively.
The functions are passed the element and the WriterOptions.

::: {#cb6 .sourceCode}
```lua
Writer.Inline.Str = function (str)
  return str.text
end
Writer.Inline.SoftBreak = function (_, opts)
  return opts.wrap_text == "wrap-preserve"
    and cr
    or space
end
Writer.Inline.LineBreak = cr

Writer.Block.Para = function (para)
  return {Writer.Inlines(para.content), pandoc.layout.blankline}
end
```
:::

The render functions must return a string, a pandoc.layout *Doc*
element, or a list of such elements. In the latter case, the values are
concatenated as if they were passed to
[`pandoc.layout.concat`]. If the value does not depend on the
input, a constant can be used as well.

The tables [`Writer.Block`] and [`Writer.Inline`] can
be used as functions; they apply the right render function for an
element of the respective type. E.g.,
[`Writer.Block(pandoc.Para 'x')`] will delegate to the
[`Writer.Para`] render function and will return the result of
that call.

Similarly, the functions [`Writer.Blocks`] and
[`Writer.Inlines`] can be used to render lists of elements, and
[`Writer.Pandoc`] renders the document's blocks.

All predefined functions can be overwritten when needed.

The resulting Writer uses the render functions to handle metadata values
and converts them to template variables. The template is applied
automatically if one is given.
:::::

# Classic style

A writer using the classic style defines rendering functions for each
element of the pandoc AST. Note that this style is *deprecated* and may
be removed in later versions.

For example,

::: {#cb7 .sourceCode}
```lua
function Para(s)
  return "<paragraph>" .. s .. "</paragraph>"
end
```
:::

## Template variables

New template variables can be added, or existing ones modified, by
returning a second value from function [`Doc`].

For example, the following will add the current date in variable
[`date`], unless [`date`] is already defined as either
a metadata value or a variable:

::: {#cb8 .sourceCode}
```lua
function Doc (body, meta, vars)
  vars.date = vars.date or meta.data or os.date '%B %e, %Y'
  return body, vars
end
```
:::
::::

## Changes in pandoc 3.0

Custom writers were reworked in pandoc 3.0. For technical reasons, the
global variables [`PANDOC_DOCUMENT`] and
[`PANDOC_WRITER_OPTIONS`] are set to the empty document and
default values, respectively. The old behavior can be restored by adding
the following snippet, which turns a classic into a new style writer.

::: {#cb9 .sourceCode}
```lua
function Writer (doc, opts)
  PANDOC_DOCUMENT = doc
  PANDOC_WRITER_OPTIONS = opts
  loadfile(PANDOC_SCRIPT_FILE)()
  return pandoc.write_classic(doc, opts)
end
```
:::


# /Using the pandoc API

:::: {#sidebar}
::: {#toc}
-   [Pandoc's architecture](#pandocs-architecture){#toc-pandocs-architecture}
-   [A simple example](#a-simple-example){#toc-a-simple-example}
-   [The PandocMonad class](#the-pandocmonad-class){#toc-the-pandocmonad-class}
-   [Options](#options){#toc-options}
-   [Builder](#builder){#toc-builder}
-   [Data files](#data-files){#toc-data-files}
-   [Metadata files](#metadata-files){#toc-metadata-files}
-   [Templates](#templates){#toc-templates}
-   [Handling errors and warnings](#handling-errors-and-warnings){#toc-handling-errors-and-warnings}
-   [Walking the AST](#walking-the-ast){#toc-walking-the-ast}
-   [Creating a front-end](#creating-a-front-end){#toc-creating-a-front-end}
-   [Notes on using pandoc in web applications](#notes-on-using-pandoc-in-web-applications){#toc-notes-on-using-pandoc-in-web-applications}
:::

Pandoc can be used as a Haskell library, to write your own conversion
tools or power a web application. This document offers an introduction
to using the pandoc API.

Detailed API documentation at the level of individual functions and
types is available at <https://hackage.haskell.org/package/pandoc>.

# Pandoc's architecture

Pandoc is structured as a set of *readers*, which translate various
input formats into an abstract syntax tree (the Pandoc AST) representing
a structured document, and a set of *writers*, which render this AST
into various output formats. Pictorially:

    [input format] ==reader==> [Pandoc AST] ==writer==> [output format]

This architecture allows pandoc to perform [*M* × *N*]{.math .inline}
conversions with [*M*]{.math .inline} readers and [*N*]{.math .inline}
writers.

The Pandoc AST is defined in the
[pandoc-types](https://hackage.haskell.org/package/pandoc-types)
package. You should start by looking at the Haddock documentation for
[Text.Pandoc.Definition](https://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Definition.html).
As you'll see, a [`Pandoc`] is composed of some metadata and a
list of [`Block`]s. There are various kinds of [`Block`], including
[`Para`] (paragraph), [`Header`] (section heading), and [`BlockQuote`]. Some
of the [`Block`]s (like [`BlockQuote`]) contain lists
of [`Block`]s, while others (like [`Para`]) contain
lists of [`Inline`]s, and still others (like
[`CodeBlock`]) contain plain text or nothing.
[`Inline`]s are the basic elements of paragraphs. The
distinction between [`Block`] and [`Inline`] in the
type system makes it impossible to represent, for example, a link
([`Inline`]) whose link text is a block quote
([`Block`]). This expressive limitation is mostly a help rather
than a hindrance, since many of the formats pandoc supports have similar
limitations.

The best way to explore the pandoc AST is to use
[`pandoc -t native`], which will display the AST corresponding
to some Markdown input:

```sh
$ echo -e "1. *foo*\n2. bar" | pandoc -t native
[ OrderedList
    ( 1 , Decimal , Period )
    [ [ Plain [ Emph [ Str "foo" ] ] ]
    , [ Plain [ Str "bar" ] ]
    ]
]
```
:::

# A simple example

Here is a simple example of the use of a pandoc reader and writer to
perform a conversion:

::: {#cb3 .sourceCode}
``` {.sourceCode .haskell}
import Text.Pandoc
import qualified Data.Text as T
import qualified Data.Text.IO as TIO

main :: IO ()
main = do
  result <- runIO $ do
    doc <- readMarkdown def (T.pack "[testing](url)")
    writeRST def doc
  rst <- handleError result
  TIO.putStrLn rst
```
:::

Some notes:

1.  The first part constructs a conversion pipeline: the input string is
    passed to [`readMarkdown`], and the resulting Pandoc AST
    ([`doc`]) is then rendered by [`writeRST`]. The
    conversion pipeline is "run" by [`runIO`]---more on that
    below.

2.  [`result`] has the type
    [`Either PandocError Text`]. We could pattern-match on this
    manually, but it's simpler in this context to use the
    [`handleError`] function from Text.Pandoc.Error. This exits
    with an appropriate error code and message if the value is a
    [`Left`], and returns the [`Text`] if the value is
    a [`Right`].
::::

# The PandocMonad class

Let's look at the types of [`readMarkdown`] and
[`writeRST`]:

::: {#cb4 .sourceCode}
``` {.sourceCode .haskell}
readMarkdown :: (PandocMonad m, ToSources a)
             => ReaderOptions
             -> a
             -> m Pandoc
writeRST     :: PandocMonad m
             => WriterOptions
             -> Pandoc
             -> m Text
```
:::

The [`PandocMonad m =>`] part is a typeclass constraint. It
says that [`readMarkdown`] and [`writeRST`] define
computations that can be used in any instance of the
[`PandocMonad`] type class. [`PandocMonad`] is defined
in the module
[Text.Pandoc.Class](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Class.html).

Two instances of [`PandocMonad`] are provided:
[`PandocIO`] and [`PandocPure`]. The difference is
that computations run in [`PandocIO`] are allowed to do IO (for
example, read a file), while computations in [`PandocPure`] are
free of any side effects. [`PandocPure`] is useful for
sandboxed environments, when you want to prevent users from doing
anything malicious. To run the conversion in [`PandocIO`], use
[`runIO`] (as above). To run it in [`PandocPure`], use
[`runPure`].

As you can see from the Haddocks,
[Text.Pandoc.Class](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Class.html)
exports many auxiliary functions that can be used in any instance of
[`PandocMonad`]. For example:

::: {#cb5 .sourceCode}
``` {.sourceCode .haskell}
-- | Get the verbosity level.
getVerbosity :: PandocMonad m => m Verbosity

-- | Set the verbosity level.
setVerbosity :: PandocMonad m => Verbosity -> m ()

-- Get the accumulated log messages (in temporal order).
getLog :: PandocMonad m => m [LogMessage]
getLog = reverse <$> getsCommonState stLog

-- | Log a message using 'logOutput'.  Note that 'logOutput' is
-- called only if the verbosity level exceeds the level of the
-- message, but the message is added to the list of log messages
-- that will be retrieved by 'getLog' regardless of its verbosity level.
report :: PandocMonad m => LogMessage -> m ()

-- | Fetch an image or other item from the local filesystem or the net.
-- Returns raw content and maybe mime type.
fetchItem :: PandocMonad m
          => Text
          -> m (B.ByteString, Maybe MimeType)

-- Set the resource path searched by 'fetchItem'.
setResourcePath :: PandocMonad m => [FilePath] -> m ()
```
:::

If we wanted more verbose informational messages during the conversion
we defined in the previous section, we could do this:

::: {#cb6 .sourceCode}
``` {.sourceCode .haskell}
  result <- runIO $ do
    setVerbosity INFO
    doc <- readMarkdown def (T.pack "[testing](url)")
    writeRST def doc
```
:::

Note that [`PandocIO`] is an instance of [`MonadIO`],
so you can use [`liftIO`] to perform arbitrary IO operations
inside a pandoc conversion chain.

[`readMarkdown`] is polymorphic in its second argument, which
can be any type that is an instance of the [`ToSources`]
typeclass. You can use [`Text`], as in the example above. But
you can also use [`[(FilePath, Text)]`], if the input comes
from multiple files and you want to track source positions accurately.
::::::

# Options

The first argument of each reader or writer is for options controlling
the behavior of the reader or writer: [`ReaderOptions`] for
readers and [`WriterOptions`] for writers. These are defined in
[Text.Pandoc.Options](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Options.html).
It is a good idea to study these options to see what can be adjusted.

[`def`] (from Data.Default) denotes a default value for each
kind of option. (You can also use [`defaultWriterOptions`] and
[`defaultReaderOptions`].) Generally you'll want to use the
defaults and modify them only when needed, for example:

::: {#cb7 .sourceCode}
``` {.sourceCode .haskell}
    writeRST def{ writerReferenceLinks = True }
```
:::

Some particularly important options to know about:

1.  [`writerTemplate`]: By default, this is
    [`Nothing`], which means that a document fragment will be
    produced. If you want a full document, you need to specify
    [`Just template`], where [`template`] is a
    [`Template Text`] from
    [Text.Pandoc.Templates](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Templates.html)
    containing the template's contents (not the path).

2.  [`readerExtensions`] and [`writerExtensions`]:
    These specify the extensions to be used in parsing and rendering.
    Extensions are defined in
    [Text.Pandoc.Extensions](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Extensions.html).
::::

# Builder

Sometimes it's useful to construct a Pandoc document programmatically.
To make this easier we provide the module
[Text.Pandoc.Builder](https://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Builder.html)
[`pandoc-types`].

Because concatenating lists is slow, we use special types
[`Inlines`] and [`Blocks`] that wrap a
[`Sequence`] of [`Inline`] and [`Block`]
elements. These are instances of the Monoid typeclass and can easily be
concatenated:

::: {#cb8 .sourceCode}
``` {.sourceCode .haskell}
import Text.Pandoc.Builder

mydoc :: Pandoc
mydoc = doc $ header 1 (text (T.pack "Hello!"))
           <> para (emph (text (T.pack "hello world")) <> text (T.pack "."))

main :: IO ()
main = print mydoc
```
:::

If you use the [`OverloadedStrings`] pragma, you can simplify
this further:

::: {#cb9 .sourceCode}
``` {.sourceCode .haskell}
mydoc = doc $ header 1 "Hello!"
           <> para (emph "hello world" <> ".")
```
:::

Here's a more realistic example. Suppose your boss says: write me a
letter in Word listing all the filling stations in Chicago that take the
Voyager card. You find some JSON data in this format
([`fuel.json`]):

::: {#cb10 .sourceCode}
``` {.sourceCode .json}
[ {
  "state" : "IL",
  "city" : "Chicago",
  "fuel_type_code" : "CNG",
  "zip" : "60607",
  "station_name" : "Clean Energy - Yellow Cab",
  "cards_accepted" : "A D M V Voyager Wright_Exp CleanEnergy",
  "street_address" : "540 W Grenshaw"
}, ...
```
:::

And then use aeson and pandoc to parse the JSON and create the Word
document:

::: {#cb11 .sourceCode}
``` {.sourceCode .haskell}
{-# LANGUAGE OverloadedStrings #-}
import Text.Pandoc.Builder
import Text.Pandoc
import Data.Monoid ((<>), mempty, mconcat)
import Data.Aeson
import Control.Applicative
import Control.Monad (mzero)
import qualified Data.ByteString.Lazy as BL
import qualified Data.Text as T
import Data.List (intersperse)

data Station = Station{
    address        :: T.Text
  , name           :: T.Text
  , cardsAccepted  :: [T.Text]
  } deriving Show

instance FromJSON Station where
    parseJSON (Object v) = Station <$>
       v .: "street_address" <*>
       v .: "station_name" <*>
       (T.words <$> (v .:? "cards_accepted" .!= ""))
    parseJSON _          = mzero

createLetter :: [Station] -> Pandoc
createLetter stations = doc $
    para "Dear Boss:" <>
    para "Here are the CNG stations that accept Voyager cards:" <>
    simpleTable [plain "Station", plain "Address", plain "Cards accepted"]
           (map stationToRow stations) <>
    para "Your loyal servant," <>
    plain (image "JohnHancock.png" "" mempty)
  where
    stationToRow station =
      [ plain (text $ name station)
      , plain (text $ address station)
      , plain (mconcat $ intersperse linebreak
                       $ map text $ cardsAccepted station)
      ]

main :: IO ()
main = do
  json <- BL.readFile "fuel.json"
  let letter = case decode json of
                    Just stations -> createLetter [s | s <- stations,
                                        "Voyager" `elem` cardsAccepted s]
                    Nothing       -> error "Could not decode JSON"
  docx <- runIO (writeDocx def letter) >>= handleError
  BL.writeFile "letter.docx" docx
  putStrLn "Created letter.docx"
```
:::

Voila! You've written the letter without using Word and without looking
at the data.
:::::::

# Data files

Pandoc has a number of data files, which can be found in the
[`data/`] subdirectory of the repository. These are installed
with pandoc (or, if pandoc was compiled with the
[`embed_data_files`] flag, they are embedded in the binary).
You can retrieve data files using [`readDataFile`] from
Text.Pandoc.Class. [`readDataFile`] will first look for the
file in the "user data directory" ([`setUserDataDir`],
[`getUserDataDir`]), and if it is not found there, it will
return the default installed with the system. To force the use of the
default, [`setUserDataDir Nothing`].
:::

# Metadata files

Pandoc can add metadata to documents, as described in the User's Guide.
Similar to data files, metadata YAML files can be retrieved using
[`readMetadataFile`] from Text.Pandoc.Class.
[`readMetadataFile`] will first look for the file in the
working directory, and if it is not found there, it will look for it in
the [`metadata`] subdirectory of the user data directory
([`setUserDataDir`], [`getUserDataDir`]).
:::

# Templates

Pandoc has its own template system, described in the User's Guide. To
retrieve the default template for a system, use
[`getDefaultTemplate`] from
[Text.Pandoc.Templates](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Templates.html).
Note that this looks first in the [`templates`] subdirectory of
the user data directory, allowing users to override the system defaults.
If you want to disable this behavior, use
[`setUserDataDir Nothing`].

To render a template, use [`renderTemplate'`], which takes two
arguments, a template (Text) and a context (any instance of ToJSON). If
you want to create a context from the metadata part of a Pandoc
document, use [`metaToJSON'`] from
[Text.Pandoc.Writers.Shared](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Writers-Shared.html).
If you also want to incorporate values from variables, use
[`metaToJSON`] instead, and make sure
[`writerVariables`] is set in [`WriterOptions`].
:::

# Handling errors and warnings

[`runIO`] and [`runPure`] return an
[`Either PandocError a`]. All errors raised in running a
[`PandocMonad`] computation will be trapped and returned as a
[`Left`] value, so they can be handled by the calling program.
To see the constructors for [`PandocError`], see the
documentation for
[Text.Pandoc.Error](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Error.html).

To raise a [`PandocError`] from inside a
[`PandocMonad`] computation, use [`throwError`].

In addition to errors, which stop execution of the conversion pipeline,
one can generate informational messages. Use [`report`] from
[Text.Pandoc.Class](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Class.html)
to issue a [`LogMessage`]. For a list of constructors for
[`LogMessage`], see
[Text.Pandoc.Logging](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Logging.html).
Note that each type of log message is associated with a verbosity level.
The verbosity level
([`setVerbosity`]/[`getVerbosity`]) determines whether
the report will be printed to stderr (when running in
[`PandocIO`]), but regardless of verbosity level, all reported
messages are stored internally and may be retrieved using
[`getLog`].
:::

# Walking the AST

It is often useful to walk the Pandoc AST either to extract information
(e.g., what are all the URLs linked to in this document?, do all the
code samples compile?) or to transform a document (e.g., increase the
level of every section header, remove emphasis, or replace specially
marked code blocks with images). To make this easier and more efficient,
[`pandoc-types`] includes a module
[Text.Pandoc.Walk](https://hackage.haskell.org/package/pandoc-types/docs/Text-Pandoc-Walk.html).

Here's the essential documentation:

::: {#cb12 .sourceCode}
``` {.sourceCode .haskell}
class Walkable a b where
  -- | @walk f x@ walks the structure @x@ (bottom up) and replaces every
  -- occurrence of an @a@ with the result of applying @f@ to it.
  walk  :: (a -> a) -> b -> b
  walk f = runIdentity . walkM (return . f)
  -- | A monadic version of 'walk'.
  walkM :: (Monad m, Functor m) => (a -> m a) -> b -> m b
  -- | @query f x@ walks the structure @x@ (bottom up) and applies @f@
  -- to every @a@, appending the results.
  query :: Monoid c => (a -> c) -> b -> c
```
:::

[`Walkable`] instances are defined for most combinations of
Pandoc types. For example, the [`Walkable Inline Block`]
instance allows you to take a function [`Inline -> Inline`] and
apply it over every inline in a [`Block`]. And
[`Walkable [Inline] Pandoc`] allows you to take a function
[`[Inline] -> [Inline]`] and apply it over every maximal list
of [`Inline`]s in a [`Pandoc`].

Here's a simple example of a function that promotes the levels of
headers:

::: {#cb13 .sourceCode}
``` {.sourceCode .haskell}
promoteHeaderLevels :: Pandoc -> Pandoc
promoteHeaderLevels = walk promote
  where promote :: Block -> Block
        promote (Header lev attr ils) = Header (lev + 1) attr ils
        promote x = x
```
:::

[`walkM`] is a monadic version of [`walk`]; it can be
used, for example, when you need your transformations to perform IO
operations, use PandocMonad operations, or update internal state. Here's
an example using the State monad to add unique identifiers to each code
block:

::: {#cb14 .sourceCode}
``` {.sourceCode .haskell}
addCodeIdentifiers :: Pandoc -> Pandoc
addCodeIdentifiers doc = evalState (walkM addCodeId doc) 1
  where addCodeId :: Block -> State Int Block
        addCodeId (CodeBlock (_,classes,kvs) code) = do
          curId <- get
          put (curId + 1)
          return $ CodeBlock (show curId,classes,kvs) code
        addCodeId x = return x
```
:::

[`query`] is used to collect information from the AST. Its
argument is a query function that produces a result in some monoidal
type (e.g. a list). The results are concatenated together. Here's an
example that returns a list of the URLs linked to in a document:

::: {#cb15 .sourceCode}
``` {.sourceCode .haskell}
listURLs :: Pandoc -> [Text]
listURLs = query urls
  where urls (Link _ _ (src, _)) = [src]
        urls _                   = []
```
:::
:::::::

# Creating a front-end

All of the functionality of the command-line program [`pandoc`]
has been abstracted out in [`convertWithOpts`] in the module
[Text.Pandoc.App](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-App.html).
Creating a GUI front-end for pandoc is thus just a matter of populating
the [`Opts`] structure and calling this function.
:::

# Notes on using pandoc in web applications

1.  Pandoc's parsers can exhibit pathological behavior on some inputs.
    So it is always a good idea to wrap uses of pandoc in a timeout
    function (e.g. [`System.Timeout.timeout`] from
    [`base`]) to prevent DoS attacks.

2.  If pandoc generates HTML from untrusted user input, it is always a
    good idea to filter the generated HTML through a sanitizer (such as
    [`xss-sanitize`]) to avoid security problems.

3.  Using [`runPure`] rather than [`runIO`] will
    ensure that pandoc's functions perform no IO operations
    (e.g. writing files). If some resources need to be made available, a
    "fake environment" is provided inside the state available to
    [`runPure`] (see [`PureState`] and its associated
    functions in
    [Text.Pandoc.Class](https://hackage.haskell.org/package/pandoc/docs/Text-Pandoc-Class.html)).
    It is also possible to write a custom instance of
    [`PandocMonad`] that, for example, makes wiki resources
    available as files in the fake environment, while isolating pandoc
    from the rest of the system.
:::
