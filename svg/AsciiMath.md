<!-- 
#!/usr/bin/env bash
#curl https://asciimath.org/ | /od/html2md.ts
exit
-->

[AsciiMath][AsciiMath]
======================

[AsciiMath Manual PDF version][PDF]

This pdf manual of AsciiMath was created by [Pandoc](../pandoc_3.1.12.md) and [MikTeX][MikTeX].

```sh
#pdfroff="C:/Program Files (x86)/GnuWin32/bin/pdfroff"
#export PATH="C:/Program Files (x86)/GnuWin32/bin;$PATH"
#pdfroff --pdf-output=AsciiMath.pdf AsciiMath.md
pandoc -s AsciiMath.md -o AsciiMath.tex 
pandoc --pdf-engine pdflatex -o AsciiMath.pdf AsciiMath.md
pandoc -V 'CJKmainfont:msyh.ttc' --from markdown --to pdf -o AsciiMath.pdf AsciiMath.md 
pandoc AsciiMath.md --pdf-engine lualatex -V "setmainfont=msyh.ttc" -o AsciiMath.pdf
pandoc AsciiMath.md --pdf-engine lualatex \
                    -V "CJKmainfont=msyh.ttc" \
                    -V 'mainfont:DejaVuSerif' \
                    -V 'sansfont:DejaVuSans' \
                    -V 'monofont:DejaVuSansMono' \
                    -V 'mathfont:latinmodern-math.otf' -o AsciiMath.pdf
```

Use `miktex-console` to install macro packages when you need it.

LuaLaTeX/XeLaTeX can process Unicdoe symbols by default, and font used must 
confirm Unicode compatibility.

A morden software can always performs a fall back font if some glyph miss.
LaTeX make a chance to let you explicitly use \\definefallbackfamily to set fall back fonts.
Use MikTeX or ImageMagick to find out what font family installed in your system :

```sh
    fc-list
    fc-list :lang=zh
    fc-list :lang=en
    fc-list :lang=en:style=regular | clip
    magick -list font | clip

    pandoc in.md --pdf-engine=lualatex \
         -V 'mainfont:DejaVuSerif' \
         -V 'sansfont:DejaVuSans' \
         -V 'monofont:DejaVuSansMono' \
         -V 'mathfont:TeXGyreDejaVuMath-Regular' \
         -o out.pdf

    pandoc in.md --pdf-engine=xelatex \
         -V 'mainfont:DejaVuSerif' \
         -V 'mainfontoptions:Extension=.ttf, UprightFont=*, BoldFont=*-Bold, ItalicFont=*-Italic, BoldItalicFont=*-BoldItalic' \
         -V 'sansfont:DejaVuSans.ttf' \
         -V 'monofont:DejaVuSansMono.ttf' \
         -V 'mathfont:texgyredejavu-math.otf' \
         -o out.pdf
    # Change the template
    # https://tex.stackexchange.com/questions/234786/how-to-set-a-font-family-with-pandoc
    # Get the default template and save it to some file:
    pandoc -D latex > template.latex
```


A [hello world](../svg/Hello-LaTeX.pdf) of LaTeX below is:

```sh
% !TeX encoding = UTF-8
\documentclass{article}
\usepackage[a4paper, total={7in, 9in}]{geometry}
\usepackage{multicol}
\setlength{\columnsep}{2cm}
\usepackage{listings}
\usepackage{fontspec}
\setmainfont[BoldFont={Latin Modern Math}]{Microsoft Yahei}
%\definefontfamily[mainface][serif][Times New Roman]
%\definefontfamily[mainface][sans][NotoSans]
%\definefontfamily[mainfont][SimSun]
\begin{document}

\section{Chinese}
\begin{multicols}{2}
大部分学者将科学分成自然科学、社会科学和思维科学\\
（noetic science）三大领域。自然科学研究自然界运动规律；\newline
社会科学研究社会运动规律；思维科学研究人类思维活动规律。\break
作为三大科学的研究工具，把哲学与数学作为三大科学的共同“方法”。

因而，又把科学划分为自然科学、社会科学、思维科学、哲学、数学五大门类。
哲学揭示一般规律，数学揭示数量关系。
\end{multicols}

\section{Japanese}

+ 名前も知らない駅の ホームで雪を見ている
* 名前（なまえ）知（し） 駅（えき） 雪（ゆき） 见（み）

\section{Русский язык}
Русский язык

\section{Math Letter}
\bfseries
𝔄 𝔅 ℭ 𝔇 𝔈 𝔉 𝔊 ℌ ℑ 𝔍 𝔎 𝔏 𝔐 𝔑 𝔒 𝔓 𝔔 ℜ 𝔖 𝔗 𝔘 𝔙 𝔚 𝔛 𝔜 ℨ
𝔞 𝔟 𝔠 𝔡 𝔢 𝔣 𝔤 𝔥 𝔦 𝔧 𝔨 𝔩 𝔪 𝔫 𝔬 𝔭 𝔮 𝔯 𝔰 𝔱 𝔲 𝔳 𝔴 𝔵 𝔶 𝔷

\section{Greek Letter}
\bfseries
α β γ δ ε ɛ ζ η θ ϑ ι κ λ μ ν ξ π ρ σ τ υ ϕ φ χ ψ ω

\section{AsciiMath}
\sffamily
Most AsciiMath symbols attempt to mimic in text what they look like rendered, 
like `oo` for `∞`. Many symbols can also be displayed using a TeX alternative, 
but a preceeding backslash is not required.

\section{Default Font Family of LaTeX}
\bfseries

\begin{lstlisting}[language=bash, caption=example]

[Default font families]
typeface = family        command                      switch command
serif (roman)            \textrm{Sample Text 0123}    \rmfamily
sans serif               \textsf{Sample Text 0123}    \sffamily
typewriter (monospace)   \texttt{Sample Text 0123}    \ttfamily

[Font styles]
style                    command                      switch command
medium                   \textmd{Sample Text 0123}    \mdseries
bold                     \textbf{Sample Text 0123}    \bfseries
upright                  \textup{Sample Text 0123}    \upshape
italic                   \textit{Sample Text 0123}    \itshape
slanted                  \textsl{Sample Text 0123}    \slshape
small caps               \textsc{Sample Text 0123}    \scshape

\end{lstlisting}

\end{document}
\end{document}
```

Ref. 

* [LaTeX2e: An unofficial reference manual][latex]
* [Creating PDFs from Markdown with Pandoc and LaTeX by Chris Ward](pandoc-md-pdf)
* [LaTeX fontfamily][fontfamily] and [sections][sections] and [Code listing]
* [Code Highlighting with minted][highlight]
* [Page size and margins][page_margin]
* [LaTeX Beginner's Guide][LaTeX-Guide]
* [Multiple columns][page-columns]
* [Pandoc Variables for LaTeX][pandoc-var]


[AsciiMath]: https://asciimath.org
[PDF]: https://github.com/Jeangowhy/opendocs/blob/main/svg/AsciiMath.pdf
[MikTeX]: https://github.com/Jeangowhy/opendocs/blob/main/svg/MikTeX_manual.md
[pdfroff]: https://gnuwin32.sourceforge.net/packages/groff.htm
[rsvg-convert]: https://github.com/miyako/console-rsvg-convert/releases
[latex]: https://latexref.xyz/index.html
[pandoc-md-pdf]: https://www.sitepoint.com/creating-pdfs-from-markdown-with-pandoc-and-latex/
[fontfamily]: https://www.overleaf.com/learn/latex/Font_sizes,_families,_and_styles
[sections]: https://www.overleaf.com/learn/latex/Sections_and_chapters
[Code listing]: https://www.overleaf.com/learn/latex/Code_listing
[LaTeX-Guide]: https://latexguide.org/book-contents/
[page_margin]: https://www.overleaf.com/learn/latex/Page_size_and_margins
[page-columns]: https://www.overleaf.com/learn/latex/Multiple_columns
[highlight]: https://www.overleaf.com/learn/latex/Code_Highlighting_with_minted
[pandoc-var]: https://pandoc.org/MANUAL.html#variables-for-latex

About
-----

AsciiMath is an easy-to-write markup language for mathematics.  
Try it out in the interactive renderer:

Input:  


    sum_(i=1)^n i^3=((n(n+1))/2)^2

Rendering:  

```sh
#!/usr/bin/env bash
out=AsciiMath.svg
echo '`sum_(i=1)^n i^3=((n(n+1))/2)^2`' | /od/mathjax.js pipe svg > "$out"
```
<!-- `sum_(i=1)^n i^3=((n(n+1))/2)^2` -->

![sum_(i=1)^n i^3=((n(n+1))/2)^2](../svg/AsciiMath.svg)

Getting Started
---------------

In order to get started you have two options:

1.  Use [MathJax](https://mathjax.org/) to render your formulas. 
    MathJax is a full fledged open source JavaScript display engine for mathematics and **works in all browsers.**  

    This is the recommended approach!
    
    Get started by loading the default AsciiMath configuration:
    
    `<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/latest.js?config=AM_CHTML"></script>`
    
    Visit the MathJax [Getting Started](http://docs.mathjax.org/en/latest/start.html) page to find other CDN options , or to learn how to install MathJax locally on your server.
    
    Text in your HTML enclosed in `` ` `` (backticks) will now get rendered as a math formula. The math delimiters can also be customized. Check out the [MathJax](https://mathjax.org/) website for more information!
    
2.  Load the AsciiMath javascript file ([get it on GitHub](http://git.io/X84VQQ)) 
    in either the `head` or the `body` tag of your website like this:
    
    `<script src="ASCIIMathML.js"></script>`
    
    This file contains JavaScript to convert AsciiMath notation and (some) LaTeX to Presentation MathML. The conversion is done while the HTML page loads.
    
    > [!CAUTION]
    > **Attention:** Currently this only works in Firefox and Safari.
    
    While HTML5 now includes MathML as an official recommendation, the remaining browsers do not appear to be implementing it. For widest browser compatibility, the use of MathJax is recommended.
    

Syntax
------

Most AsciiMath symbols attempt to mimic in text what they look like rendered, like `oo` for `∞`. Many symbols can also be displayed using a TeX alternative, but a preceeding backslash is not required.

## Operation symbols

    Type   TeX alt   See
    +                +  
    -                −  
    *      cdot      ⋅  
    **     ast       ∗  
    ***    star      ⋆  
    //               /  
    \\    backslash     
           setminus  \  
    xx     times     ×  
    -:     div       ÷  
    |><    ltimes    ⋉  
    ><|    rtimes    ⋊  
    |><|   bowtie    ⋈  
    @      circ      ∘  
    o+     oplus     ⊕  
    ox     otimes    ⊗  
    o.     odot      ⊙  
    sum              ∑  
    prod             ∏  
    ^^     wedge     ∧  
    ^^^    bigwedge  ⋀  
    vv     vee       ∨  
    vvv    bigvee    ⋁  
    nn     cap       ∩  
    nnn    bigcap    ⋂  
    uu     cup       ∪  
    uuu    bigcup    ⋃  

## Miscellaneous symbols

    Type         TeX alt        See
    2/3          frac{2}{3}     2/3
    2^3                         2^3
    sqrt x                      √x
    root(3)(x)                  3√x
    int                         ∫
    oint                        ∮
    del          partial        ∂
    grad         nabla          ∇
    +-           pm             ±
    O/           emptyset       ∅
    oo           infty          ∞
    aleph                       ℵ
    :.           therefore      ∴
    :'           because        ∵
    |...|        |ldots|        |...|
    |cdots|                     |⋯|
    vdots                       ⋮
    ddots                       ⋱
    |\ |                        ||
    |quad|                      ||
    /_           angle          ∠
    frown                        ⌢
    /_\          triangle       △
    diamond                     ⋄
    square                      □
    |__          lfloor         ⌊
    __|          rfloor         ⌋
    |~           lceiling       ⌈
    ~|           rceiling       ⌉
    CC                          ℂ
    NN                          ℕ
    QQ                          ℚ
    RR                          ℝ
    ZZ                          ℤ
    "hi"         text(hi)       hi
     
## Relation symbols

    Type    TeX alt     See
    =                   =
    !=      ne          ≠
    <       lt          <
    >       gt          >
    <=      le          ≤
    >=      ge          ≥
    mlt     ll          m <
    mgt     gg          m >
    -<      prec        ≺
    -<=     preceq      ⪯
    >-      succ        ≻
    >-=     succeq      ⪰
    in                  ∈
    !in     notin       ∉
    sub     subset      ⊂
    sup     supset      ⊃
    sube    subseteq    ⊆
    supe    supseteq    ⊇
    -=      equiv       ≡
    ~=      cong        ≅
    ~~      approx      ≈
    prop    propto      ∝

## Logical symbols

    Type    TeX alt    See
    and                and 
    or                 or 
    not    neg         ¬
    =>     implies     ⇒
    if                 if 
    <=>    iff         ⇔
    AA     forall      ∀
    EE     exists      ∃
    _|_    bot         ⊥
    TT     top         ⊤
    |--    vdash       ⊢
    |==    models      ⊨

## Grouping brackets

    Type    TeX alt    See
    (                  (
    )                  )
    [                  [
    ]                  ]
    {                  {
    }                  }
    (:    langle       ⟨
    :)    rangle       ⟩
    <<                 ⟨
    >>                 ⟩
    {: x )             x)
    ( x :}             (x
    abs(x)             |x|
    floor(x)           ⌊x⌋
    ceil(x)            ⌈x⌉
    norm(vecx)         ∥ x⃗ ∥

## Arrows

    Type    TeX alt                 See
    uarr    uparrow                 ↑
    darr    downarrow               ↓
    rarr    rightarrow              →
    ->      to                      →
    >->     rightarrowtail          ↣
    ->>     twoheadrightarrow       ↠
    >->>    twoheadrightarrowtail   ⤖
    |->     mapsto                  ↦
    larr    leftarrow               ←
    harr    leftrightarrow          ↔
    rArr    Rightarrow              ⇒
    lArr    Leftarrow               ⇐
    hArr    Leftrightarrow          ⇔

##   Accents

    Type    TeX alt               See
    hat x                         x̂
    bar x   overline              x̄
    ul x    underline             x̲  
    vec x                         x⃗ 
    tilde x                       x᷉
    dot x                         ẋ
    ddot x                        ẍ
    overset(x)(=)                 x͇
    underset(x)(=)                x̿
    ubrace(1+2) underbrace(1+2)  [see below Special Cases]
    obrace(1+2) overbrace(1+2)   [see below Special Cases]
    overarc(AB) overparen(AB)     overarc(AB)
    color(red)(x)                 x
    cancel(x)                     x̸

## Greek Letters

    Type        See      Type    See
    alpha       α
    beta        β
    gamma       γ        Gamma   Γ
    delta       δ        Delta   Δ
    epsilon     ε
    varepsilon  ɛ
    zeta        ζ
    eta         η
    theta       θ        Theta   Θ
    vartheta    ϑ
    iota        ι
    kappa       κ
    lambda      λ        Lambda  Λ
    mu          μ
    nu          ν
    xi          ξ        Xi      Ξ
    pi          π        Pi      Π
    rho         ρ
    sigma       σ        Sigma   Σ
    tau         τ
    upsilon     υ
    phi         ϕ        Phi     Φ
    varphi      φ
    chi         χ
    psi         ψ        Psi     Ψ
    omega       ω        Omega   Ω

## Font commands


    Type            TeX alt           See
    bb "AaBbCc"     mathbf "AaBbCc"   𝐀a𝐁b𝐂c
    bbb "AaBbCc"    mathbb "AaBbCc"   𝔸a𝔹bℂc
    cc "AaBbCc"     mathcal "AaBbCc"  𝒜aℬb𝒞c
    tt "AaBbCc"     mathtt "AaBbCc"   𝙰a𝙱b𝙲c
    fr "AaBbCc"     mathfrak "AaBbCc" 𝕬a𝕭b𝕮c
    sf "AaBbCc"     mathsf "AaBbCc"   𝖠a𝖡b𝖢c


### Standard Functions

sin, cos, tan, sec, csc, cot, arcsin, arccos, arctan, sinh, cosh, tanh, sech, csch, coth, exp, log, ln, det, dim, mod, gcd, lcm, lub, glb, min, max, f, g.


### Special Cases

*   Matrices: `[[a,b],[c,d]]` yields to `[[a,b],[c,d]]`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix.svg
    echo '`[[a,b],[c,d]]`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`[[a,b],[c,d]]`](../svg/AsciiMath-matrix.svg)

*   Column vectors: `((a),(b))` yields to `((a),(b))`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-column-vector.svg
    echo '`((a),(b))`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`((a),(b))`](../svg/AsciiMath-matrix-column-vector.svg)


*   Augmented matrices: `[[a,b,|,c],[d,e,|,f]]` yields to `[[a,b,|,c],[d,e,|,f]]`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-argument.svg
    echo '`[[a,b,|,c],[d,e,|,f]]`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`[[a,b,|,c],[d,e,|,f]]`](../svg/AsciiMath-matrix-argument.svg)

*   Matrices can be used for layout: `{(2x,+,17y,=,23),(x,-,y,=,5):}` yields `{(2x,+,17y,=,23),(x,-,y,=,5):}`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-layout.svg
    echo '`{(2x,+,17y,=,23),(x,-,y,=,5):}`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`{(2x,+,17y,=,23),(x,-,y,=,5):}`](../svg/AsciiMath-matrix-layout.svg)

*   Complex subscripts: `lim_(N->oo) sum_(i=0)^N` yields to `lim_(N->oo) sum_(i=0)^N`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-sub.svg
    echo '`lim_(N->oo) sum_(i=0)^N`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`lim_(N->oo) sum_(i=0)^N`](../svg/AsciiMath-matrix-sub.svg)

*   Subscripts must come before superscripts: `int_0^1 f(x)dx` yields to `int_0^1 f(x)dx`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-sub-sup.svg
    echo '`int_0^1 f(x)dx`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`int_0^1 f(x)dx`](../svg/AsciiMath-matrix-sub-sup.svg)

*   Derivatives: `f'(x) = dy/dx` yields `f'(x) = dy/dx`  
    For variables other than x,y,z, or t you will need grouping symbols: `(dq)/(dp)` for `(dq)/(dp)`

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-derivatives.svg
    echo "\`f'(x) = dy/dx\`" | /od/mathjax.js pipe svg > "$out"
    ```

    ![`f'(x) = dy/dx`](../svg/AsciiMath-matrix-derivatives.svg)

*   Overbraces and underbraces: `ubrace(1+2+3+4)_("4 terms")` yields `ubrace(1+2+3+4)_("4 terms")`.  

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-underbraces.svg
    echo '`ubrace(1+2+3+4)_("4 terms")`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`ubrace(1+2+3+4)_("4 terms")`](../svg/AsciiMath-matrix-underbraces.svg)

    `obrace(1+2+3+4)^("4 terms")` yields `obrace(1+2+3+4)^("4 terms")`.

    ```sh
    #!/usr/bin/env bash
    out=AsciiMath-matrix-overbraces.svg
    echo '`obrace(1+2+3+4)^("4 terms")`' | /od/mathjax.js pipe svg > "$out"
    ```

    ![`obrace(1+2+3+4)^("4 terms")`](../svg/AsciiMath-matrix-overbraces.svg)

> [!CAUTION]
> 
> Attention: Always try to surround the `>` and `<` characters with spaces 
> so that the html parser does not confuse it with an opening or closing tag!


### The Grammar

Here is a definition of the grammar used to parse AsciiMath expressions. In the Backus-Naur form given below, the letter on the left of the `::=` represents a category of symbols that could be one of the possible sequences of symbols listed on the right. The vertical bar `|` separates the alternatives.

    v ::= [A-Za-z] | greek letters | numbers | other constant symbols

    u ::= sqrt | text  | bb       | other unary symbols for font commands
    
    b ::= frac | root  | stackrel | other binary symbols
    
    l ::= (    |   [   |   {   |   (:   |   {:   |   other left brackets
    
    r ::= )    |   ]   |   }   |   :)   |   :}   |   other right brackets
    
    S ::= v    |  lEr  |   uS  |   bSS       Simple expression
    I ::= S_S  |  S^S  | S_S^S |   S         Intermediate expression
    E ::= IE   |   I/I                       Expression
