#!/usr/bin/env bash
url=https://blog.tonycrane.cc/p/b3ca5c18.html
url=https://learnyouahaskell.com/chapters
pandoc -r html "$url" -t rst | subl -

exit
============================================================================

===================================================
/. 🚀 ./Documentation
===================================================

.. code-block::

    pandoc -r html https://www.haskell.org/documentation/ -t rst | clip

.. rubric:: Documentation
  :name: documentation

This page lists various resources to help you with 
Haskell. Resources marked with [$] require payment.

If you are new to Haskell and are not sure where to start
from, we recommend
`CIS194 <https://www.seas.upenn.edu/~cis194/spring13/lectures.html>`__.
CIS194 is the introductory Haskell course of the
University of Pennsylvania; it is free, thorough,
practical and will guide you from the basics to advanced
features of the language.

.. rubric:: Introductory Books for Learning Haskell
  :name: introductory-books-for-learning-haskell

-  `Learn You a Haskell for Great Good! <http://learnyouahaskell.com/>`__
-  `Real World Haskell <http://book.realworldhaskell.org/>`__
-  `Learn Haskell by building a blog generator <https://learn-haskell.blog>`__
-  [$] `Haskell from the Very Beginning <https://www.haskellfromtheverybeginning.com/>`__
-  [$] `Haskell Programming from first principles <http://haskellbook.com>`__
-  [$] `Thinking Functionally with Haskell <http://www.cambridge.org/us/academic/subjects/computer-science/programming-languages-and-applied-logic/thinking-functionally-haskell>`__
-  [$] `Programming in Haskell <http://www.cs.nott.ac.uk/~pszgmh/pih.html>`__
-  [$] `Haskell: The Craft of Functional Programming <http://www.haskellcraft.com/craft3e/Home.html>`__
-  [$] `The Haskell School of Music <http://euterpea.com/haskell-school-of-music/>`__
-  [$] `Get Programming with Haskell <https://www.manning.com/books/get-programming-with-haskell>`__
-  [$] `Effective Haskell <https://www.pragprog.com/titles/rshaskell/effective-haskell/>`__
-  [$] `Haskell: Uma introdu莽茫o 脿 programa莽茫o funcional (PT-BR) <https://www.casadocodigo.com.br/products/livro-haskell>`__
-  [$] `Learn Physics with Functional Programming: A Hands-on Guide to Exploring Physics with Haskell <https://lpfp.io/>`__

.. rubric:: Intermediate Haskell Books
  :name: intermediate-haskell-books

-  `Developing Web Applications with Haskell and Yesod <http://www.yesodweb.com/book>`__
-  `Parallel and Concurrent Programming in Haskell <https://simonmar.github.io/pages/pcph.html>`__
-  [$] `Functional Design and Architecture <https://www.manning.com/books/functional-design-and-architecture>`__
-  [$] `Haskell in Depth <https://www.manning.com/books/haskell-in-depth>`__
-  [$] `Practical Haskell <https://www.apress.com/gp/book/9781484244791>`__
-  [$] `Production Haskell <https://leanpub.com/production-haskell>`__

.. rubric:: Courses
  :name: courses

Course material created by instructors 

-  `University of Pennsylvania's CIS 194 <https://www.seas.upenn.edu/~cis1940/spring13/>`__
-  `Data61 Functional Programming Course <https://github.com/data61/fp-course>`__
-  `Stanford's cs240h <http://www.scs.stanford.edu/14sp-cs240h/>`__
-  `Hendrix's CSCI 360 <http://ozark.hendrix.edu/~yorgey/360/f16/>`__
-  `University of Helsinki's Haskell MOOC <https://haskell.mooc.fi/>`__
-  `University of Nottingham's introductory Haskell course <http://www.cs.nott.ac.uk/~pszgmh/pgp.html>`__
-  `University of Nottingham's advanced Haskell course <http://www.cs.nott.ac.uk/~pszgmh/afp.html>`__

.. rubric:: Tutorials
  :name: tutorials

Short, dense, classic ways to hit the ground running 

-  `A Gentle Introduction to Haskell <https://www.haskell.org/tutorial/>`__
-  `Happy Learn Haskell Tutorial <https://www.happylearnhaskelltutorial.com/>`__
-  `Yet Another Haskell Tutorial <http://en.wikibooks.org/wiki/Haskell/YAHT/Preamble>`__
-  `Write Yourself a Scheme in 48 Hours <http://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours>`__
-  `Write Yourself a Scheme 2.0 <https://wespiser.com/writings/wyas/home.html>`__
-  `Learning Haskell <http://learn.hfm.io>`__
-  `Haskell Beginners Course
  2022 <https://github.com/haskell-beginners-2022/course-plan>`__

.. rubric:: Online Resources
  :name: online-resources

Curated resources put together by Haskellers: 

-  `The Haskell Wiki <http://wiki.haskell.org>`__
-  `The Haskell Wikibook <http://en.wikibooks.org/wiki/Haskell>`__
-  `FP Complete's School of Haskell <https://www.schoolofhaskell.com/>`__
-  `Stephen Diehl's What I Wish I Knew When Learning Haskell <https://web.archive.org/web/20220513191346/http://dev.stephendiehl.com/hask/>`__
-  `Chris Allen's List of Learning Haskell Resources <https://github.com/bitemyapp/learnhaskell>`__
-  `Bob Ippolito's Getting Started with Haskell <http://bob.ippoli.to/archives/2013/01/11/getting-started-with-haskell/>`__
-  `Albert Y.C. Lai's Haskell Notes and Examples <http://www.vex.net/~trebla/haskell/index.xhtml>`__
-  `Learning Haskell Resources on the Haskell Wiki <https://wiki.haskell.org/Learning_Haskell>`__

.. rubric:: Manuals and Guides
  :name: manuals-and-guides

Manuals and guides that cover common Haskell tooling: 

-  `GHC User's Guide <http://www.haskell.org/ghc/docs/latest/html/users_guide/>`__
-  `Cabal Homepage And Quick Links <https://www.haskell.org/cabal/>`__
-  `Cabal User Guide <http://www.haskell.org/cabal/users-guide/>`__
-  `Stack User Guide <https://docs.haskellstack.org/>`__ 
-  `Haddock User Guide <https://haskell-haddock.readthedocs.io/>`__
-  `Haskeleton: A Haskell Project Skeleton <http://taylor.fausak.me/2014/03/04/haskeleton-a-haskell-project-skeleton/>`__
-  `How to Write a Haskell Program <https://wiki.haskell.org/How_to_write_a_Haskell_program>`__

.. rubric:: Package and Dependency Management
  :name: package-and-dependency-management

The Cabal guide is a good start but there's a lot to learn:

-  `Stephen Diehl's Cabal Quickstart <https://web.archive.org/web/20220513191346/http://dev.stephendiehl.com/hask/#cabal>`__
-  `The Storage and Interpretation of Cabal Packages <http://www.vex.net/~trebla/haskell/sicp.xhtml>`__
-  `The Cabal of Cabal <http://www.vex.net/~trebla/haskell/cabal-cabal.xhtml>`__

.. rubric:: Library Documentation
  :name: library-documentation

Documentation for Haskell libraries is typically 
available on Hackage. We also have specialized tools for
searching across it, not only by name, but by type.

-  `Hoogle API Search <http://www.haskell.org/hoogle/>`__
-  `Hackage <http://hackage.haskell.org/>`__
-  `Stackage (with API Search) <https://www.stackage.org>`__
-  `The Typeclassopedia <https://wiki.haskell.org/Typeclassopedia>`__
-  `Haddocks for Libraries included with GHC <https://downloads.haskell.org/~ghc/latest/docs/html/libraries/index.html>`__

.. rubric:: Language Report
  :name: language-report

The Haskell 2010 language report is available online as 
`HTML <https://haskell.org/onlinereport/haskell2010/>`__
and as
`PDF <https://haskell.org/definition/haskell2010.pdf>`__.
The `source is available on GitHub <https://github.com/haskell/haskell-report>`__.
The differences between GHC and the report can be found
`in the GHC User's Guide <http://www.haskell.org/ghc/docs/latest/html/users_guide/bugs.html#haskell-standards-vs-glasgow-haskell-language-non-compliance>`__.


.. |Homepage| image:: https://www.haskell.org/img/haskell-logo.svg


=====================
/学习一门新语言之Haskell
=====================
*   学习一门新语言之Haskell https://blog.tonycrane.cc/p/b3ca5c18.html

   .. container:: level-left

      2021-06-21发表2022-02-16更新3 小时读完
      (大约25386个字)0次访问

.. rubric:: 「Learn Haskell」#0 总章
   :name: learn-haskell0-总章
   :class: title is-3 is-size-4-mobile

.. container:: content

   学习一门新语言之Haskell

   .. rubric:: ` <#前言>`__ 前言
      :name: 前言

   | 之前一直很好奇函数式编程，觉得Haskell挺有意思的，想学学
   | 现在高考完放假了，可以有时间具体学一学了
   | 这里没有Haskell的教程，只有我在学习Haskell时写下的笔记

   .. container::

      目录

      | #0 | `总章 </p/b3ca5c18.html>`__
      | #1 | `基础语法与函数 </p/d63b5b5f.html>`__
      | #2 | `高阶函数与模块 </p/53e482b7.html>`__
      | #3 | `类型与类型类 </p/369b7e08.html>`__
      | #4 | `输入输出与文件 </p/a5bbe48a.html>`__
      | #5 | `函子、应用函子与单子 </p/290ecb74.html>`__
      | #6 | `半群与幺半群 </p/d4bb2633.html>`__
      | #7 | `一些其它类型类 </p/68ef8146.html>`__
      | #A | `Haskell与范畴论 </p/96c32eae.html>`__

   .. rubric:: ` <#基础运算>`__ 基础运算
      :name: 基础运算

    .. code-block:: 

        + - * / ()      ：加减乘除
        div             ：整除
        mod             ：取模
        True False      ：布尔值
        || && not       ：或且非
        ==              ：条件判断，相等
        /=              ：条件判断，不等


   .. rubric:: ` <#函数调用>`__ 函数调用
      :name: 函数调用

   Haskell中调用函数不加括号，先写出函数名，然后逐个列出参数，用空格隔开：

   .. code-block:: haskell

        ghci> max 1 2
        2

   前缀（prefix）函数与中缀（infix）函数转换：

   -  对前缀函数加双反引号 \`\` 使其变成中缀函数
   -  对中缀函数加圆括号 () 使其变成前缀函数

   .. container:: float highlight haskell

      +-------+-----------------------------------+
      | ::    | ::                                |
      |       |                                   |
      |    1  |    ghci> 4 `div` 2                |
      |    2  |    2                              |
      |    3  |    ghci> 1 `max` 2                |
      |    4  |    2                              |
      |    5  |    ghci> (+) 1 2                  |
      |    6  |    3                              |
      |    7  |    ghci> (||) True False          |
      |    8  |    True                           |
      +-------+-----------------------------------+

   .. rubric:: ` <#List>`__ List
      :name: List

   列表是 Haskell 中很常见的数据类型，和 Python 中不同，Haskell 中的列表中的所有元素必须是同一个类型。

   以下是列表常用的函数：

   -  ``(++)``    :: [a] -> [a] -> [a]：合并两个列表
   -  ``(:)``     :: a -> [a] -> [a]  ：将单个元素并入列表。 [1, 2, 3] 是 1:2:3:[] 的语法糖
   -  ``(!!)``    :: [a] -> Int -> a  ：通过索引取出某个位置上的元素。a !! 1 相当于 Python 中的 a[1]
   -  ``head``    :: [a] -> a         ：返回列表的第一个元素
   -  ``tail``    :: [a] -> [a]       ：返回列表中除去第一个元素后的列表（若只有一个元素则返回空列表[]）
   -  ``last``    :: [a] -> a         ：返回列表中的最后一个元素
   -  ``init``    :: [a] -> [a]       ：返回列表中除去最后一个元素后的列表
   -  ``reverse`` :: [a] -> [a]                       ：返回翻转后的列表
   -  ``take``    :: Int -> [a] -> [a]                ：返回列表a的前n个元素的列表(take n a)
   -  ``drop``    :: Int -> [a] -> [a]                ：返回列表a中除去前n个元素后的列表(drop n a)
   -  ``length``  :: Foldable t => t a -> Int         ：返回列表的长度
   -  ``null``    :: Foldable t => t a -> Bool        ：返回列表是否为空
   -  ``maximum`` :: (Foldable t, Ord a) => t a -> a  ：返回列表中的最大值
   -  ``minimum`` :: (Foldable t, Ord a) => t a -> a  ：返回列表中的最小值
   -  ``sum``     :: (Foldable t, Num a) => t a -> a  ：返回列表中所有元素的和
   -  ``product`` :: (Foldable t, Num a) => t a -> a  ：返回列表中所有元素的积
   -  ``elem``    :: (Foldable t, Eq a) => t a -> Bool：判断值 n 是否在列表 a 中(

      .. container:: float highlight haskell

         +--------+-----------------------------------+
         | ::     | ::                                |
         |        |                                   |
         |    1   |    elem n a                       |
         |    2   |    -- 或                          |
         |    3   |    n `elem`  a --用双反引号 `` 包上可以变成中缀函数使用 |
         +--------+-----------------------------------+


   .. rubric:: ` <#Texas-ranges>`__ Texas ranges
      :name: Texas-ranges

   使用 ``..`` 可以表示出范围并自动推导：

   .. container:: float highlight haskell

      +--------+-----------------------------------+
      | ::     | ::                                |
      |        |                                   |
      |    1   |    ghci> [1 .. 10]                |
      |    2   |    [1,2,3,4,5,6,7,8,9,10]         |
      |    3   |    ghci> ['a' .. 'z']             |
      |    4   |    "abcdefghijklmnopqrstuvwxyz"   |
      |    5   |    ghci> ['K' .. 'Z']             |
      |    6   |    "KLMNOPQRSTUVWXYZ"             |
      |    7   |    ghci> [2, 4 .. 20]             |
      |    8   |    [2,4,6,8,10,12,14,16,18,20]    |
      |    9   |    ghci> [3, 6 .. 20]             |
      |    10  |    [3,6,9,12,15,18]               |
      |    11  |    ghci> [5, 4 .. 1]              |
      |    12  |    [5,4,3,2,1]                    |
      +--------+-----------------------------------+

   也可以用来生成无穷列表，如[1..]、[1,
   3..]。同时也有函数可以生成无穷列表：

   -  ``cycle`` :: [a] ->
      [a]：将原列表不断循环生成无穷列表
   -  ``repeat`` :: a ->
      [a]：将传入的值不断重复生成无穷列表

      -  ``replicate`` :: Int -> a ->
         [a]：将值a重复n次，返回生成的列表(replicate n a)

   .. rubric:: ` <#List-comprehension>`__ List
      comprehension
      :name: List-comprehension

   Haskell中也有列表推导，形式是一个中括号，左侧为表达式，右侧为变量的范围和约束条件

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  ghci> [x * 2 | x <- [1 .. 10]]   |
      |    3                              |    [2,4,6,8,10,12,14,16,18,20]    |
      |    4                              |    ghci> [x * 2                   |
      |    5                              |  | x <- [1 .. 10], x * 2 >= 12]   |
      |    6                              |    [12,14,16,18,20]               |
      |    7                              |    ghci> [ x | x                  |
      |    8                              | <- [50 .. 100], x `mod` 7 == 3]   |
      |                                   |    [52,59,66,73,80,87,94]         |
      |                                   |    ghci> [x * y | x <             |
      |                                   | - [2, 5, 10], y <- [8, 10, 11]]   |
      |                                   |    [16,20,22,40,50,55,80,100,110] |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Tuple>`__ Tuple
      :name: Tuple

   Haskell中的元组可以有不同长度，元素可以有不同类型。并且一个元组的类型由其中所有元素的类型共同决定。它的常用函数：

   -  ``fst`` :: (a, b) ->
      a：返回含有两个元素元组中的第一个元素
   -  ``snd`` :: (a, b) ->
      b：返回含有两个元素元组中的第二个元素
   -  ``zip`` :: [a] -> [b] -> [(a,
      b)]：接收两个列表，返回一个列表，每个元素是依次将两个列表中元素配对成的二元组

   .. rubric:: ` <#Syntax-in-Functions>`__ Syntax in
      Functions
      :name: Syntax-in-Functions

   函数可以直接定义：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    plus x y = x + y               |
      +-----------------------------------+-----------------------------------+

   这时Haskell会自动推断函数的类型为(Num a) => a -> a ->
   a。但是最好在定义函数前声明函数的类型：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    plus :: (Num a) => a -> a -> a |
      |    2                              |    plus x y = x + y               |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Pattern-matching>`__ Pattern matching
      :name: Pattern-matching

   定义函数时可以使用模式匹配语法。运行时依次将输入与给出的模式相匹配，如果匹配，就执行对应操作；
   不匹配，就继续与下一个模式相匹配，直到匹配成功，也因此，最后必须要给出一种通用的匹配来接收与
   给出模式全不匹配的输入。如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    fact                           |
      |    2                              | orial :: (Integral a) => a -> a   |
      |    3                              |    factorial 0 = 1                |
      |                                   |    fact                           |
      |                                   | orial n = n * factorial (n - 1)   |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    first :: (a, b, c) -> a        |
      |    2                              |    first (x, _, _) = x            |
      |    3                              |                                   |
      |    4                              |    second :: (a, b, c) -> b       |
      |    5                              |    second (_, y, _) = y           |
      |    6                              |                                   |
      |    7                              |    third :: (a, b, c) -> c        |
      |    8                              |    third (_, _, z) = z            |
      +-----------------------------------+-----------------------------------+

   其中 ``_`` 表示任何值，且不关心它的内容，只是用来占位

   列表的(:)操作也可以用来进行模式匹配：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    head' :: [a] -> a              |
      |    2                              |    head' [] = error "Can't call   |
      |    3                              |  head on an empty list, dummy!"   |
      |    4                              |    head' (x:_) = x                |
      |    5                              |                                   |
      |    6                              |    sum' :: (Num a) => [a] -> a    |
      |    7                              |    sum' [] = 0                    |
      |                                   |    sum' (x:xs) = x + sum' xs      |
      +-----------------------------------+-----------------------------------+

   但(++)操作不可以用来模式匹配

   在针对列表进行模式匹配时，如果同时需要整个列表、列表的第一个值、列表除第一个值外的内容，可以使用 ``xs@(q:qs)`` 。比如[1,
   2, 3]通过 ``xs@(q:qs)`` 匹配后，xs为[1, 2,
   3]，q为1，qs为[2, 3]

   .. rubric:: ` <#Guard-syntax>`__ Guard syntax
      :name: Guard-syntax

   在函数的定义中，也可以使用守卫（guard）语法：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  max' :: (Ord a) => a -> a -> a   |
      |    3                              |    max' a b                       |
      |    4                              |        | a > b     = a            |
      |                                   |        | otherwise = b            |
      +-----------------------------------+-----------------------------------+

   先给出传入的参数变量，然后下一行缩进后加\|，\|后面等号前表示进行的判断，如果为True则返回这个等号后面的值；如果为False则继续判断下一行，直到otherwise

   .. rubric:: ` <#Case-expressions>`__ Case expressions
      :name: Case-expressions

   在函数的定义中，也可以使用case表达式来配合模式匹配使用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    case                           |
      |    2                              | expression of pattern -> result   |
      |    3                              |                                   |
      |                                   |                 pattern -> result |
      |                                   |                       ...         |
      +-----------------------------------+-----------------------------------+

   例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    head' :: [a] -> a              |
      |    2                              |    head' [] = e                   |
      |    3                              | rror "No head for empty lists!"   |
      |    4                              |    head' (x:_) = x                |
      |    5                              |    -- 等价于：                    |
      |    6                              |    head' :: [a] -> a              |
      |    7                              |    head' xs = case xs of [] -> e  |
      |                                   | rror "No head for empty lists!"   |
      |                                   |                                   |
      |                                   |                      (x:_) -> x   |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |   describeList :: [a] -> String   |
      |    3                              |    describeList xs = "The list is |
      |    4                              |  " ++ case xs of [] -> "empty."   |
      |    5                              |                                   |
      |    6                              |                                   |
      |    7                              |     [x] -> "a singleton list."    |
      |    8                              |                                   |
      |    9                              |                                   |
      |    10                             |          xs -> "a longer list."   |
      |                                   |    -- 等价于：                    |
      |                                   |                                   |
      |                                   |   describeList :: [a] -> String   |
      |                                   |    describeList                   |
      |                                   |  xs = "The list is " ++ what xs   |
      |                                   |        where what [] = "empty."   |
      |                                   |                                   |
      |                                   |  what [x] = "a singleton list."   |
      |                                   |                                   |
      |                                   |       what xs = "a longer list."  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#where>`__ where
      :name: where

   声明在函数定义中要使用的局部变量，可以使用where关键字：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    initial                        |
      |    2                              | s :: String -> String -> String   |
      |    3                              |    initials firstname lastn       |
      |    4                              | ame = [f] ++ ". " ++ [l] ++ "."   |
      |                                   |        where (f:_) = firstname    |
      |                                   |              (l:_) = lastname     |
      +-----------------------------------+-----------------------------------+

   在where中，也可以使用上面的模式匹配

   .. rubric:: ` <#let>`__ let
      :name: let

   ``let <bindings> in <expression>`` 语法可以在函数的定义中使用，也可以在普通算式或列表中使用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    cylinder                       |
      |    2                              | :: (RealFloat a) => a -> a -> a   |
      |    3                              |    cylinder r h =                 |
      |    4                              |                                   |
      |    5                              |   let sideArea = 2 * pi * r * h   |
      |                                   |            topArea = pi * r ^2    |
      |                                   |                                   |
      |                                   |      in  sideArea + 2 * topArea   |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghc                            |
      |    2                              | i> 4 * (let a = 9 in a + 1) + 2   |
      |    3                              |    42                             |
      |    4                              |                                   |
      |                                   |   ghci> [let square x = x * x in  |
      |                                   | (square 5, square 3, square 2)]   |
      |                                   |    [(25,9,4)]                     |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#if-statement>`__ if statement
      :name: if-statement

   Haskell中的if语句为：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    if ... then ...                |
      |    2                              |    else ...                       |
      |    3                              |    -- or if ... then ... else ... |
      |    4                              |    -- or                          |
      |    5                              |    if ... then ...                |
      |    6                              |    else if ... then ...           |
      |    7                              |    else ...                       |
      +-----------------------------------+-----------------------------------+

   其中最后一个else无论如何也不可以省去

   .. rubric:: ` <#Higher-Order-Functions>`__ Higher
      Order Functions
      :name: Higher-Order-Functions

   .. rubric:: ` <#Currying>`__ Currying
      :name: Currying

   Haskell中的函数是柯里化（Currying）的，可以看作所有函数都只接收一个参数，而接收两个参数的函数实际上是这个函数接收了第一个参数后返回了一个接收第二个参数的函数，然后用这个函数接收第二个参数，返回最终的结果。比如max函数，它的类型签名是：

   max :: Ord a => a -> a -> a

   可以看成a -> (a -> a)，即接收一个参数，返回一个类型为a
   -> a的函数。比如max 1的类型签名是：

   max 1 :: (Ord a, Num a) => a -> a

   因此max 1 2，也就等同于(max 1) 2，即将函数max
   1应用在数字2上

   同时，函数也可以接收函数作为参数，参数有函数的函数就被称为高阶函数（Higher
   Order Functions）

   .. rubric:: ` <#一些高阶函数>`__ 一些高阶函数
      :name: 一些高阶函数

   .. rubric:: ` <#zipWith>`__ zipWith
      :name: zipWith

   zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]

   第一个参数为一个函数，然后接收两个列表，将其对应元素传入接收的函数中，得到的结果组成一个新的列表。如果两个传入的列表长度不同，以最短的列表为准，长列表中超出的元素省略。用例：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci>                          |
      |    2                              | zipWith (+) [4,2,5,6] [2,6,2,3]   |
      |    3                              |    [6,8,7,9]                      |
      |    4                              |    ghci>                          |
      |                                   | zipWith max [6,3,2,1] [7,3,1,5]   |
      |                                   |    [7,3,2,5]                      |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#flip>`__ flip
      :name: flip

   flip :: (a -> b -> c) -> b -> a -> c

   flip函数接收一个二元函数，返回一个新的二元函数，将其输入的两个参数顺序反过来：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> zip [1,2,3,4,5] "hello"  |
      |    2                              |    [(1,'h')                       |
      |    3                              | ,(2,'e'),(3,'l'),(4,'l'),(5,'o')] |
      |    4                              |    ghc                            |
      |                                   | i> flip zip [1,2,3,4,5] "hello"   |
      |                                   |    [('h',1)                       |
      |                                   | ,('e',2),('l',3),('l',4),('o',5)] |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#map>`__ map
      :name: map

   map :: (a -> b) -> [a] -> [b]

   map函数接收一个函数f和一个列表a，将函数f应用在列表a的每个元素中，并返回得到的所有结果组成的列表b：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> map (+3) [1,5,3,1,6]     |
      |    2                              |    [4,8,6,4,9]                    |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#filter>`__ filter
      :name: filter

   filter :: (a -> Bool) -> [a] -> [a]

   filter函数接收一个函数f和一个列表a，将列表a中的每个元素传入函数f中，如果结果为True就保留，结果为False就抛弃，返回所有保留的元素组成的新列表：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> filter even [1..10]      |
      |    2                              |    [2,4,6,8,10]                   |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#takeWhile>`__ takeWhile
      :name: takeWhile

   takeWhile :: (a -> Bool) -> [a] -> [a]

   takeWhile函数接收一个函数f和一个列表a，将列表a中从左向右每个元素传入函数f，直到结果为False停止，返回停止前传入的所有元素组成的新列表：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci                           |
      |    2                              | > takeWhile (/=' ') "word1 word2" |
      |                                   |    "word1"                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Function-application>`__ Function
      application
      :name: Function-application

   函数应用可以使用 ``$`` ， ``$`` 是一个函数，它的类型是：

   ($) :: (a -> b) -> a -> b

   它可以改变函数结合优先级，将左侧函数应用于全部右侧内容上，相当于给右侧整体加上了括号。否则函数默认左结合，会依次向右应用而不会应用在整体上。

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    f $ g x                        |
      |    2                              |    -- 等价于                      |
      |    3                              |    f (g x)                        |
      |    4                              |    -----                          |
      |    5                              |    f g x                          |
      |    6                              |    -- 等价于                      |
      |    7                              |    (f g) x                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Function-Composition>`__ Function
      Composition
      :name: Function-Composition

   函数复合可以使用 ``.`` ， ``.`` 也是一个函数，它的类型是：

   (.) :: (b -> c) -> (a -> b) -> a -> c

   定义是：

   f . g = \\x -> f (g x)

   但是函数复合的优先级要比函数执行低，比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |                                   |   sum . replicate 5 . max 6.7 8.9 |
      +-----------------------------------+-----------------------------------+

   会先执行max 6.7 8.9并返回8.9，然后将sum、replicate
   5、8.9复合，但两个函数无法和一个值(8.9)复合，所以会抛出异常。因此要使用 ``$`` 来规定先复合再执行：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |                                   | sum . replicate 5 . max 6.7 $ 8.9 |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#lambda>`__ lambda
      :name: lambda

   | Haskell语言中的lambda表达式是用 ``\`` 来表示的（因为看着像$\\mathtt{\\lambda}$？）
   | 具体语法是

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    \para1 para2 ... -> return     |
      +-----------------------------------+-----------------------------------+

   “->”前的 para1 para2 …
   是传入参数，单个多个都可以，需要用空格隔开；”->”后的
   return
   是计算得到的返回值。一般需要用括号将整个表达式括起来，防止返回值部分一直向右延伸。

   .. rubric:: ` <#fold和scan>`__ fold和scan
      :name: fold和scan

   | fold和scan都接收三个参数（一个二元函数，一个初始值accumulator，一个要折叠的列表），fold返回一个值，而scan返回一个列表
   | 传入的二元函数 ``f :: a -> b -> b`` 将accumulator和从列表中取出的值一同传入（l则accumulator在左边为第一个参数，r则accumulator在右边为第二个参数）

   .. rubric:: ` <#foldl>`__ foldl
      :name: foldl

   左折叠，每次从列表最左侧取出一个值，和accumulator一起传入二元函数，并且accumulator在左边为第一个参数，如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    foldl f a xs                   |
      +-----------------------------------+-----------------------------------+

   它的结果计算过程为

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    > foldl f a [x1, x2, x3]       |
      |    2                              |    [1.] a = f a x1                |
      |    3                              |                                   |
      |    4                              |   [2.] a = f a x2 = f (f a x1) x2 |
      |                                   |    [3.]                           |
      |                                   | a = f a x3 = f (f (f a x1) x2) x3 |
      +-----------------------------------+-----------------------------------+

   | 可以看出 f (f a x1) x2 其实就是 foldl f a [x1, x2]
   | 而且因此，foldl在计算时最外层需要找到x3，这样如果xs是一个无穷列表，那么将无法计算，陷入无穷。所以foldl虽然看起来从左边取值，但是函数需要从右侧展开，并不适用于无穷列表

   .. rubric:: ` <#foldr>`__ foldr
      :name: foldr

   右折叠，每次从列表最右侧取出一个值，和accumulator一起传入二元函数，并且accumulator在右边为第二个参数，如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    foldr f a xs                   |
      +-----------------------------------+-----------------------------------+

   它的结果计算过程为

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    > foldr f a [x1, x2, x3]       |
      |    2                              |    [1.] a = f x3 a                |
      |    3                              |                                   |
      |    4                              |   [2.] a = f x2 a = f x2 (f x3 a) |
      |                                   |    [3.]                           |
      |                                   | a = f x1 a = f x1 (f x2 (f x3 a)) |
      +-----------------------------------+-----------------------------------+

   | 从中可以看出 f x2 (f x3 a) 就是 foldr f a [x2, x3]
   | 因此可以使用递归来写一个和foldr效果一样的函数:

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    foldr'                         |
      |    2                              | :: (a -> b -> b) -> b -> [a] -> b |
      |    3                              |    foldr' _ x [] = x              |
      |                                   |    foldr'                         |
      |                                   |  f a (x:xs) = f x (foldr' f a xs) |
      +-----------------------------------+-----------------------------------+

   也可以看出，最外层计算时只需要x1并且向下递归，并不会接触到列表末尾，因此可以用于无穷列表。foldr即使看上去从右边取值，但是要从左开始展开，可以用于无穷列表

   例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghc                            |
      |    2                              | i> foldr (||) False (repeat True) |
      |    3                              |                                   |
      |    4                              | True    -- 由于逻辑运算存在短路， |
      |    5                              | 计算值全应为True，所以直接返回了  |
      |                                   |    ghc                            |
      |                                   | i> foldl (||) False (repeat True) |
      |                                   |    -- 这里什                      |
      |                                   | 么都不会发生，直到电脑内存被爆掉  |
      |                                   |                                   |
      |                                   | -- 因为函数刚开始就需要列表最右侧 |
      |                                   | 的值，所以在不断计算这个无穷列表  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#scanl和scanr>`__ scanl和scanr
      :name: scanl和scanr

   | scan类似fold，只是将中间得到的每一个值都添加进一个列表中并返回这个列表
   | scanl则向右延伸这个列表，scanr则向左延伸这个列表
   | 但是它和fold恰恰相反，scanl能用于无穷列表，而scanr不能

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    > scanr f a [x1, x2, x3]       |
      |    2                              |                                   |
      |    3                              | [1.] 最右侧元素(-1 in python) : a |
      |    4                              |                                   |
      |    5                              |  [2.] 右侧第二个元素(-2) : f x3 a |
      |                                   |    [3.] 右                        |
      |                                   | 侧第三个元素(-3) : f x2 (f x3 a)  |
      |                                   |    [4.] 右侧第四                  |
      |                                   | 个元素(-4) : f x1 (f x2 (f x3 a)) |
      +-----------------------------------+-----------------------------------+

   | 可以看出 f x2 (f x3 a) 是 foldr f a [x2, x3]，也是
     scanr f a [x2, x3] 的第一个元素
   | 因此可以用递归来写一个和scanr效果一样的函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    scanr' ::                      |
      |    2                              |  (a -> b -> b) -> b -> [a] -> [b] |
      |    3                              |    scanr' _ x [] = [x]            |
      |    4                              |    -- scanr' f a (x:xs) = f       |
      |    5                              |  x (foldr f a xs) : scanr' f a xs |
      |                                   |    scanr' f a (x:xs) = f x q : qs |
      |                                   |                                   |
      |                                   |    where qs@(q:_) = scanr' f a xs |
      +-----------------------------------+-----------------------------------+

   scanl也是同理：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    scanl' ::                      |
      |    2                              |  (b -> a -> b) -> b -> [a] -> [b] |
      |    3                              |    scanl' _ x [] = [x]            |
      |                                   |    scanl' f a                     |
      |                                   |  (x:xs) = a : scanl' f (f a x) xs |
      +-----------------------------------+-----------------------------------+

   也可以看出，scanr返回的列表的第一个元素是最后添加进去的，所以它无法用于无穷列表。而scanl返回的列表中的元素是从左到右依次添加，可以用于无穷列表截取前一部分结果：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | ghci> take 10 (scanl (+) 0 [1..]) |
      |    3                              |    [0,1,3,6,10,15,21,28,36,45]    |
      |    4                              |                                   |
      |                                   | ghci> take 10 (scanr (+) 0 [1..]) |
      |                                   |    [*** Exception: stack overflow |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#使用foldr编写foldl>`__ 使用foldr编写foldl
      :name: 使用foldr编写foldl

   pdcxs还给我介绍了一个神奇的操作，用foldl来定义foldr：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    foldl' f z xs = fo             |
      |                                   | ldr (\x g y -> g (f y x)) id xs z |
      +-----------------------------------+-----------------------------------+

   它利用 foldr (\\x g y -> g (f y x)) id xs
   生成一个函数，作用于z得到结果。

   先来看一下foldr的类型：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    foldr :: Foldable t            |
      |    2                              | => (a -> b -> b) -> b -> t a -> b |
      |                                   |    -- 可以看                      |
      |                                   | 成 (a -> b -> b) -> b -> [a] -> b |
      +-----------------------------------+-----------------------------------+

   但是在这个例子中，类型b并不是一个数字，而是一个函数(b
   -> b)。

   所以这里foldr的类型可以写成：

   (a -> (b -> b) -> (b -> b)) -> (b -> b) -> [a] -> (b
   -> b)

   | 对应于用法 foldr (\\x g y -> g (f y x)) id xs
     ，它返回的值应该是一个函数，类型为 b ->
     b（后面要作用于z）
   | 而xs对应于[a]；id对应于(b -> b)
   | 所以 (\\x g y -> g (f y x)) 要对应于：

   (a -> (b -> b) -> (b -> b))

   因此可以推断出x的类型是a；y的类型是b；而返回的值为一个类型为(b
   -> b)的函数。

   | 再看，返回的值是 g (f y x) ，其中 f y x
     返回的是一个值，类型为b
   | 所以g接收一个类型b，返回一个类型b ->
     b。即g的类型为：

   b -> (b -> b)

   现在根据foldr的定义：

   foldr f a (x:xs) = f x (foldr f a xs)

   带入计算一下：

      xs即为[x1..xn]，为了方便，用xs’来表示[x2..xn]，用xs’’来表示[x3..xn]

      定义中的f即为(\\x g y -> g (f y x))，a即为id

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      fo                           |
      |    2                              | ldr (\x g y -> g (f y x)) id xs z |
      |                                   |    = (\x g y -> g (               |
      |                                   | f y x)) x1 (foldr (...) id xs') z |
      +-----------------------------------+-----------------------------------+

   写完第一步，可以发现，x1 (foldr (…) id xs’) z
   正好分别对应了lambda表达式中的x、g、y。可以将其应用，进一步展开：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      (\x g y -> g (               |
      |    2                              | f y x)) x1 (foldr (...) id xs') z |
      |                                   |                                   |
      |                                   |   = (foldr (...) id xs') (f z x1) |
      +-----------------------------------+-----------------------------------+

   不难发现，原式 (foldr (…) id xs) z 等价于：

   (foldr (...) id xs') (f z x1)

   | 跟着这个思路，xs每次少一个开头的元素x’，z每次变换成为
     f z x’
   | 因此下一步：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      (\x g y -> g (               |
      |    2                              | f y x)) x1 (foldr (...) id xs') z |
      |    3                              |                                   |
      |    4                              |   = (foldr (...) id xs') (f z x1) |
      |    5                              |    = (fol                         |
      |                                   | dr (...) id xs'') (f (f z x1) x2) |
      |                                   |    = (foldr (...)                 |
      |                                   |  id xs''') (f (f (f z x1) x2) x3) |
      |                                   |    = ...                          |
      +-----------------------------------+-----------------------------------+

   可以发现，已经有了规律。那么最终停止时是什么样呢？

   | 最后到了不能在展开时，最前面的 foldr (…) id xs
     已经变成了 foldr (…) id []
   | 而根据前面foldr的定义 foldr \_ x [] = x
     ，它应该返回id

   | 所以最后的结果：
   | (id的定义：id x = x)

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      ...                          |
      |    2                              |                                   |
      |    3                              |   = (foldr (...) id xs') (f z x1) |
      |    4                              |    = (fol                         |
      |    5                              | dr (...) id xs'') (f (f z x1) x2) |
      |    6                              |    = ...                          |
      |    7                              |    = (foldr (..                   |
      |                                   | .) id []) (f (.. (f z x1) ..) xn) |
      |                                   |    = id (f (.. (f z x1) ..) xn)   |
      |                                   |    = f (.. (f z x1) ..) xn        |
      +-----------------------------------+-----------------------------------+

   | 那么最后这个结果就很熟悉了，它就是 foldl f z xs。
   | 所以我们推导出了这个用foldr表示foldl的写法是正确的。

   .. rubric:: ` <#Modules>`__ Modules
      :name: Modules

   Haskell会自动加载Prelude模块（module），如果在GHCi中再加载其他模块，需要使用 ``:m + ...`` ，比如加载Data.List模块：

   Prelude> :m + Data.List

   而在hs文件中引入模块，需要使用 ``import`` 语句，下面和python的对比可以便于理解：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Data.List               |
      |    2                              |    -- from Data.List import *     |
      |    3                              |                                   |
      |    4                              |    import Data.List (nub, sort)   |
      |    5                              |    -                              |
      |    6                              | - from Data.List import nub, sort |
      |    7                              |                                   |
      |    8                              |    import Data.List hiding (nub)  |
      |    9                              |    -- 从Dat                       |
      |    10                             | a.List中引入所有，但不引入nub函数 |
      |    11                             |                                   |
      |    12                             |    import qualified Data.List     |
      |    13                             |    -- import Data.List            |
      |    14                             |                                   |
      |                                   |                                   |
      |                                   |  import qualified Data.List as Li |
      |                                   |    -- import Data.List as Li      |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#编写Modules>`__ 编写Modules
      :name: 编写Modules

   模块中要包含将要使用的一些函数，像正常的hs文件一样写即可，但头部需要有导出语句（export）。比如一个模块文件名叫 ``ModuleA.hs`` ，那它的头部需要写：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    module ModuleA                 |
      |    2                              |    ( functionA                    |
      |    3                              |    , functionB                    |
      |    4                              |    , functionC                    |
      |    5                              |    ) where                        |
      |    6                              |                                   |
      +-----------------------------------+-----------------------------------+

   而且文件中的所有函数只导出需要使用的即可。比如该文件中还含有functionD供前三个函数内部使用，那么在import
   ModuleA之后也无法调用functionD。

   .. rubric:: ` <#Types-amp-Typeclasses>`__ Types &
      Typeclasses
      :name: Types-amp-Typeclasses

   .. rubric:: ` <#Types>`__ Types
      :name: Types

   | Haskell有一个静态类型系统，任何变量、函数都会具有类型，并且有类型判断功能，没给出的类型会自动识别。
   | Type的首字母全为大写，常用的有：

   -  ``Int`` ：整型，有上下界范围，-2147483647～2147483648
   -  ``Integer`` ：整数，无界，但是效率比Int低
   -  ``Float`` ：单精度浮点型
   -  ``Double`` ：双精度浮点型
   -  ``Bool`` ：布尔值
   -  ``Char`` ：字符
   -  ``String`` ：字符串，等同于 ``[Char]``
   -  ``Ordering`` ：大小关系，包含LT、EQ、GT，且它们有大小关系
      LT < EQ < GT

   列表的类型是由其中元素决定的，并且列表中元素必须是同一类型，所以列表的类型就是其元素类型外加 ``[]`` 。

   元组的类型由其中各个元素的类型共同决定，因为元组中的元素可以是不同类型。如(“abc”,
   ‘a’, True)的类型是([Char], Char, Bool)。

   .. rubric:: ` <#Typeclasses>`__ Typeclasses
      :name: Typeclasses

   | 类型类（Typeclass）是定义一系列功能的接口，如果一个Type属于一个Typeclass的成员，那么它可以实现这个类型类所规定的功能。一个Type也可以属于多个Typeclass
   | Typeclass的首字母也全为大写，常见的有：

   -  ``Eq`` ：可判断是否相等
   -  ``Ord`` ：可比较大小
   -  ``Show`` ：可展示成字符串
   -  ``Read`` ：可从字符串转换成特定类型
   -  ``Enum`` ：可枚举（连续），即可以使用pred和succ函数得到前驱和后缀
   -  ``Bounded``:
      有上下界，如果元组中所有元素都属于Bounded，那这个元组的类型也属于Bounded
   -  ``Integral`` ：是整数，包括Int和Integer
   -  ``RealFloat`` ： 是实浮点数，包括Float和Double
   -  ``RealFrac`` ：是实分数，包括Float、Double和Ratio（在Data.Ratio模块中）
   -  ``Floating`` ：是浮点数，包括Float、Double和Complex（在Data.Complex模块中）
   -  ``Real`` ：是实数，包括Integral和RealFrac的成员
   -  ``Fractional`` ：是分数，包括RealFrac和Floating的成员
   -  ``Num`` ：是数字，包括上述所有数字相关的类型

   .. rubric:: ` <#Type-variables>`__ Type variables
      :name: Type-variables

   如果查看一个函数的类型，比如 ``head`` ，那么将会返回以下类型：

   head :: [a] -> a

   其中的a就是一个类型变量（type
   variable），它在head中可以属于任何类型，在这里只是表示返回值的类型和输入的列表中的元素的类型相一致。

   在函数的类型表达式其实可以看作$\\lambda$表达式，它适用于$\\alpha$变换（$\\alpha$-conversion）。即a在这里可以指Int、Char等类型，也可以指[Char],
   (Int, Char), 甚至函数Int -> Int等。

   在大部分函数的类型中，类型变量需要保证是某个Typeclass的成员才能完成操作。比如 ``(==)`` 函数，它需要传入的参数是可判断相等的，即是Eq的成员，那么 ``(==)`` 的类型就是：

   (==) :: (Eq a) => a -> a -> Bool

   其中 ``=>`` 前的部分(Eq a)就是类约束（class
   constraint），它规定了a是Eq的成员，所以 ``(==)`` 函数传入的两个参数都是a类型，且都是Eq的成员，保证了它们之间是可以比较是否相等的。

   .. rubric:: ` <#定义新Type>`__ 定义新Type
      :name: 定义新Type

   定义一个新的Type需要使用 ``data`` 关键字，比如定义 ``Bool`` 需要使用：

   data Bool = False \| True

   | 其中 ``=`` 左侧的部分定义了新类型的名称 ``Bool`` ，右侧的部分叫做值构造器（value
     constructors），表示了Bool类型的值为False或True。
   | 并且名称和值构造器的首字母都需要大写。

   另外，值构造器也是函数，它们可以有参数，叫做项（field）。比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Shape                     |
      |                                   |  = Circle Float Float Float | Rec |
      |                                   | tangle Float Float Float Float    |
      +-----------------------------------+-----------------------------------+

   | 它定义了一个新Type叫Shape，值构造器是Circle和Rectangle，Circle接收三个参数都是Float类型，Rectangle接收四个Float类型参数。
   | 如果查看Circle的类型，将返回：

   Circle :: Float -> Float -> Float -> Shape

   如果想要让它能给直接显示出来，需要让它属于Show类型类。在代码中只需要在结尾加上 ``deriving (Show)``:

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Shape = Circle Flo        |
      |                                   | at Float Float | Rectangle Float  |
      |                                   | Float Float Float deriving (Show) |
      +-----------------------------------+-----------------------------------+

   类型的名称和值构造器名称也可以相同，比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Point =                   |
      |                                   | Point Float Float deriving (Show) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#导出Type>`__ 导出Type
      :name: 导出Type

   在文件中定义了新的Type之后，如果在别的文件中将其作为模块导入，则需要先导出。比如文件 ``Shapes.hs`` 中定义了Shape和Point，以及其他的一些函数，那么文件开头需要写：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    module Shapes                  |
      |    2                              |    ( Shape(..)                    |
      |    3                              |    , Point(..)                    |
      |    4                              |    , functionA                    |
      |    5                              |    , functionB                    |
      |    6                              |    ) where                        |
      +-----------------------------------+-----------------------------------+

   其中的 ``Shape(..)`` 导出了Shape类型和它所有的值构造器， ``..`` 代表了它的所有值构造器。因此， ``Shape(..)`` 相当于 ``Shape (Circle, Rectangle)`` 。

   如果不想要导出值构造器，即不允许使用值构造器的方法来创建Shape类型的变量。那么需要将 ``Shape(..)`` 替换为 ``Shape`` ，这样就只导出了Shape类型，而不导出其值构造器。

   .. rubric:: ` <#Record-Syntax>`__ Record Syntax
      :name: Record-Syntax

   如果想要方便地取出类型实例中的参数，可以使用Record语法，如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    dat                            |
      |    2                              | a Point = Point { xcoord :: Float |
      |    3                              |                                   |
      |                                   |                 , ycoord :: Float |
      |                                   |                                   |
      |                                   |                 } deriving (Show) |
      +-----------------------------------+-----------------------------------+

   在值构造器的参数部分先加一个大括号，然后指定取出值的函数名称（xcoord,
   ycoord），后面指定类型（::
   Float）。这样xcoord和ycoord就都是一个类型为Point ->
   Float的函数，可以通过下面方法来访问值：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |   ghci> let point = Point 1.0 2.0 |
      |    3                              |    ghci> xcoord point             |
      |    4                              |    1.0                            |
      |    5                              |    ghci> ycoord point             |
      |                                   |    2.0                            |
      +-----------------------------------+-----------------------------------+

   同时也可以通过下面方法来创建这个point：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    point                          |
      |                                   |  = Point {ycoord=2.0, xcoord=1.0} |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Type-parameters>`__ Type parameters
      :name: Type-parameters

   值构造器可以接收参数，类型也可以接收参数，这样它就成为了类型构造器（type
   constructors）。如Maybe的定义：

   data Maybe a = Nothing \| Just a

   | 它的值是Nothing时，类型为Maybe
     a，是多态的（polymorphic）。
   | 他的值不是Nothing时，类型取决于值Just
     a中a的类型，可以构造出Maybe Int、Maybe
     [Char]等多种类型：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    Nothing :: Maybe a             |
      |    2                              |    Just 1 :: Num a => Maybe a     |
      |    3                              |    Just 'a' :: Maybe Char         |
      |    4                              |    Just "abc" :: Maybe [Char]     |
      +-----------------------------------+-----------------------------------+

   可以用这种方法改写Point：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    dat                            |
      |    2                              | a Point x y = Point { xcoord :: x |
      |    3                              |                                   |
      |                                   |                     , ycoord :: y |
      |                                   |                                   |
      |                                   |                 } deriving (Show) |
      +-----------------------------------+-----------------------------------+

   但使用类型参数（type
   parameters）并不是总是方便，比如在声明函数类型的时候不能只使用Point来表示Point类型，而是必须写成Point
   Float Float。

   而且不能在定义类型构造器时添加类约束（class
   constraint），不然在之后声明函数类型的时候也都需要添加类约束，如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data (Ord k) => Map k v = ...  |
      |    2                              |    toList                         |
      |                                   | :: (Ord k) => Map k a -> [(k, a)] |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Either>`__ Either
      :name: Either

   Either是一个类型构造器，它有两个值构造器，定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    d                              |
      |                                   | ata Either a b = Left a | Right b |
      |                                   |  deriving (Eq, Ord, Read, Show)   |
      +-----------------------------------+-----------------------------------+

   如果使用了Left，那它的a的类型就是具体的；如果使用了Right，那它的b的类型就是具体的：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Right 20                 |
      |    2                              |    Right 20                       |
      |    3                              |    ghci> Left "w00t"              |
      |    4                              |    Left "w00t"                    |
      |    5                              |    ghci> :t Right 'a'             |
      |    6                              |    Right 'a' :: Either a Char     |
      |    7                              |    ghci> :t Left True             |
      |    8                              |    Left True :: Either Bool b     |
      +-----------------------------------+-----------------------------------+

   Either可以看作Maybe的补充，比如Maybe在使用时，出现异常可以返回Nothing，但只是一个Nothing，不包含任何信息；但Either包含左值和右值，正常结果返回右值，而出现异常就可以返回包含错误信息的左值，比如安全除法：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    s                              |
      |    2                              | afeDiv :: Int -> Int -> Maybe Int |
      |    3                              |    safeDiv _ 0 = Nothing          |
      |    4                              |    safeDiv x y = Just (x `div` y) |
      |    5                              |                                   |
      |    6                              |    ghci> safeDiv 4 2              |
      |    7                              |    Just 2                         |
      |    8                              |    ghci> safeDiv 1 0              |
      |                                   |    Nothing                        |
      +-----------------------------------+-----------------------------------+

   而使用Either：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    safeDiv :                      |
      |    2                              | : Int -> Int -> Either String Int |
      |    3                              |    saf                            |
      |    4                              | eDiv _ 0 = Left "Divided by zero" |
      |    5                              |                                   |
      |    6                              |   safeDiv x y = Right (x `div` y) |
      |    7                              |                                   |
      |    8                              |    ghci> safeDiv 4 2              |
      |                                   |    Right 2                        |
      |                                   |    ghci> safeDiv 1 0              |
      |                                   |    Left "Divided by zero"         |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Derived-instances>`__ Derived
      instances
      :name: Derived-instances

   想要使一个定义的类满足某些Typeclass的需求，需要从其派生（derive），比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Day = Monda               |
      |    2                              | y | Tuesday | Wednesday | Thursda |
      |                                   | y | Friday | Saturday | Sunday    |
      |                                   |               deriving (Eq,       |
      |                                   | Ord, Show, Read, Bounded, Enum)   |
      +-----------------------------------+-----------------------------------+

   这样Day类型的值（Monday～Sunday）之间就可以比较是否相等（从Eq派生），比较大小（从Ord派生，左侧为小，右侧为大），显示成字符串（从Show派生），从字符串中读取（从Read派生），包含边界（从Bounded派生），可以枚举（从Enum派生，按照值构造器中的顺序依次向右）

   .. rubric:: ` <#Type-synonyms>`__ Type synonyms
      :name: Type-synonyms

   为了阅读方便，书写简便，可以使用 ``type`` 关键字为已有类型创建别名（synonyms）。比如String的定义：

   type String = [Char]

   | 在所有需要使用字符串（即[Char]）的地方都可以使用String来代替，它们是完全一致的，只是String更简便易读。
   | 同时，类型别名也可以接收类型参数

   .. rubric:: ` <#newtype-keyword>`__ newtype keyword
      :name: newtype-keyword

   除了 ``data`` 、 ``type`` 关键字之外，还可以用 ``newtype`` 关键字来定义一个新的类型，比如 ``Control.Applicative`` 模块中的ZipList：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype                        |
      |                                   | ZipList a = { getZipList :: [a] } |
      +-----------------------------------+-----------------------------------+

   -  不同于type，它不是别名，可以使用record语法来直接定义取出值的函数
   -  不同于data，它只能有一个值构造器，但是速度要比data快，而且更加懒惰

   .. rubric:: ` <#Recursive-data-structures>`__ Recursive
      data structures
      :name: Recursive-data-structures

   一个类型也可以递归定义，比如一颗二叉树：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Tree a                    |
      |                                   | = EmptyTree | Node a (Tree a) (Tr |
      |                                   | ee a) deriving (Show, Read, Eq)   |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#定义新Typeclass>`__ 定义新Typeclass
      :name: 定义新Typeclass

   定义一个新的Typeclass需要使用class关键字，例如定义Eq类型类：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Eq a where               |
      |    2                              |        (==) :: a -> a -> Bool     |
      |    3                              |        (/=) :: a -> a -> Bool     |
      |    4                              |        x == y = not (x /= y)      |
      |    5                              |        x /= y = not (x == y)      |
      +-----------------------------------+-----------------------------------+

   其中 ``a`` 是一个类型变量，前两行声明了需要实现的函数的名字及其类型，后两行表明了需要的函数之间可以相互定义（不必要）。

   包含了后两行之后，只定义(==)函数或者(/=)函数都可以完成全部定义，它们（ ``(==) | (/=)`` ）成为这个类型类的最小完整定义（minimal
   complete definition）

   查看一个类型类的成员需要实现的函数可以在GHCi中使用 ``:info`` ：

   ghci> :info Eq

   .. rubric:: ` <#手动创建实例>`__ 手动创建实例
      :name: 手动创建实例

   使一个类型成为一个类型类的实例可以直接使用 ``deriving`` 来自动完成，也可以通过使用instance关键字来手动完成。比如使Point成为Show的实例：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Show Point where      |
      |    2                              |        show (Point x y) = "(" +   |
      |    3                              | + show x ++ ", " ++ show y ++ ")" |
      |    4                              |                                   |
      |    5                              |    -- in ghci                     |
      |    6                              |    ghci> Point 1.0 2.0            |
      |                                   |    (1.0, 2.0)                     |
      +-----------------------------------+-----------------------------------+

   这样就可以自定义显示的内容，否则使用deriving的话只会直接将其转化为字符串。

   同时也要注意类型和类型构造器的区别，传入给instance的第二个参数应该为类型而不是类型构造器，比如Maybe：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Eq Maybe where        |
      |    2                              |        ...                        |
      |    3                              |    -- 错误用法                    |
      |    4                              | ，因为Maybe是类型构造器而不是类型 |
      |    5                              |                                   |
      |    6                              |    instance Eq (Maybe m) where    |
      |    7                              |        ...                        |
      |    8                              |    -                              |
      |    9                              | - 错误用法，因为m不一定是Eq的成员 |
      |    10                             |                                   |
      |    11                             |    instan                         |
      |    12                             | ce (Eq m) => Eq (Maybe m) where   |
      |                                   |                                   |
      |                                   |       Just x == Just y = x == y   |
      |                                   |                                   |
      |                                   |       Nothing == Nothing = True   |
      |                                   |        _ == _ = False             |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Functor-Typeclass>`__ Functor
      Typeclass
      :name: Functor-Typeclass

   Functor也是一种类型类，它只规定了一个函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Functor f where          |
      |    2                              |                                   |
      |                                   |    fmap :: (a -> b) -> f a -> f b |
      +-----------------------------------+-----------------------------------+

   其中 ``f`` 是一个类型构造器，而不是一个具体类型

   .. rubric:: ` <#Kinds>`__ Kinds
      :name: Kinds

   一个值的类型叫做类型（Type），而一个类型的类型叫做Kind。可以通过GHCi中 ``:k`` 来查看Kind：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> :k Int                   |
      |    2                              |    Int :: *                       |
      |    3                              |    ghci> :k Maybe                 |
      |    4                              |    Maybe :: * -> *                |
      |    5                              |    ghci> :k Maybe Int             |
      |    6                              |    Maybe Int :: *                 |
      |    7                              |    ghci> :k Either                |
      |    8                              |    Either :: * -> * -> *          |
      +-----------------------------------+-----------------------------------+

   其中的星号 ``*`` 代表了一个具体类型（concrete
   type）。Int本身就是一个具体类型，所以Int的Kind是\*。而Maybe是一个类型构造器，它接收一个具体类型返回一个新的具体类型，所以Maybe的Kind是\*
   -> \*。如果给Maybe传入了一个Int，那么得到的Maybe
   Int就是一个具体的类型，它的Kind就是\*。Either也是一个类型构造器，但它接收两个类型才产生一个新的类型，所以Either的Kind是\*
   -> \* -> \*。

   .. rubric:: ` <#Input-Output>`__ Input/Output
      :name: Input-Output

   .. rubric:: ` <#运行Haskell程序>`__ 运行Haskell程序
      :name: 运行Haskell程序

   不在GHCi中运行一个Haskell程序有两种方式：

   #. 编译运行：

      .. container:: float highlight sh

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    $ ghc --make code              |
         |    2                              |    $ ./code                       |
         +-----------------------------------+-----------------------------------+

   #. 通过 ``runhaskell`` 命令直接运行：

      .. container:: float highlight sh

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    $ runhaskell code.hs           |
         +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#输出文本>`__ 输出文本
      :name: 输出文本

   在一个Haskell程序中输出文字需要定义一个main函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = putStrLn "Hello World"  |
      +-----------------------------------+-----------------------------------+

   其中putStrLn的类型是：

   putStrLn :: String -> IO ()

   putStrLn接收一个String类型，并返回一个结果为()类型的IO动作（I/O
   action）。所以main函数的类型为IO ()。（IO的Kind是\* ->
   \*）

   除此之外，还有其他默认提供的输出文本的函数：

   -  ``putStr`` ：输出文本，结尾不换行
   -  ``putChar`` ：输出单个字符，结尾不换行。接收的参数为单个Char，不是String（用单引号不是双引号）
   -  ``print`` ：可以接收任何Show的成员，先用show转化为字符串然后输出。等同于putStrLn
      . show

   .. rubric:: ` <#do-block>`__ do block
      :name: do-block

   在main函数中使用多个putStrLn需要使用do语句：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = do                      |
      |    2                              |        putStrLn "Line1"           |
      |    3                              |        putStrLn "Line2"           |
      +-----------------------------------+-----------------------------------+

   其中最后一行一定要返回IO ()类型的值

   .. rubric:: ` <#输入文本>`__ 输入文本
      :name: 输入文本

   输入文字需要在do块中使用getLine：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = do                      |
      |    2                              |        line <- getLine            |
      |    3                              |        putStrLn line              |
      +-----------------------------------+-----------------------------------+

   getLine的类型是：

   getLine :: IO String

   而<-操作符将getLine中的String提取了出来给到了line，使line变成了String类型的一个字符串。

   而且使用输入的字符串必须要经过一次<-，不能直接使用getLine作为字符串，因为getLine不是String类型，而是IO
   String类型。

   除此之外，还可以使用getChar来获取单个字符，但仍然需要使用<-操作符来提取Char

   .. rubric:: ` <#其他IO相关函数用法>`__ 其他IO相关函数用法
      :name: 其他IO相关函数用法

   .. rubric:: ` <#return>`__ return
      :name: return

   Haskell中的return和其他命令式语言中的return完全不同，它不会使函数直接结束并返回一个值。

   main函数必须定义为类型为IO
   ()的函数，所以在main函数中使用if语句，如果不输出的话也不可以直接放下什么都不干，因为这时候main函数的类型不是IO
   ()。所以这时需要使用return ()来为main函数指定为IO
   ()类型，例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = do                      |
      |    2                              |        line <- getLine            |
      |    3                              |        if null line               |
      |    4                              |                                   |
      |    5                              |          then return () -- <-这里 |
      |    6                              |            else do                |
      |                                   |                ...                |
      +-----------------------------------+-----------------------------------+

   使用<-操作符也可以直接将return语句中的内容提取出来，比如a
   <- return ‘A’，执行后a就是’A’。

   .. rubric:: ` <#when>`__ when
      :name: when

   when包含在 ``Control.Monad`` 模块中，它表示在满足第一个参数的条件下会执行第二个函数，否则会return
   ()。比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Control.Monad           |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |        c <- getChar               |
      |    5                              |        when (c /= ' ') $ do       |
      |    6                              |            putChar c              |
      |    7                              |            main                   |
      +-----------------------------------+-----------------------------------+

   等同于：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = do                      |
      |    2                              |        c <- getChar               |
      |    3                              |        if c /= ' '                |
      |    4                              |            then do                |
      |    5                              |                putChar c          |
      |    6                              |                main               |
      |    7                              |            else return ()         |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#sequence>`__ sequence
      :name: sequence

   sequence在IO中使用时可以达成[IO a] -> IO
   [a]的效果，所以可以用作：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    [a, b, c] <- seq               |
      |                                   | uence [getLine, getLine, getLine] |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#mapM-amp-mapM>`__ mapM & mapM\_
      :name: mapM-amp-mapM

   在IO相关的地方使用map，可以使用mapM和mapM\_，其中mapM有返回值而mapM_直接扔掉了返回值：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> mapM print [1,2,3]       |
      |    2                              |    1                              |
      |    3                              |    2                              |
      |    4                              |    3                              |
      |    5                              |    [(),(),()]                     |
      |    6                              |    ghci> mapM_ print [1,2,3]      |
      |    7                              |    1                              |
      |    8                              |    2                              |
      |    9                              |    3                              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#forever>`__ forever
      :name: forever

   forever函数包含在 ``Control.Monad`` 模块中。在main函数开头加上forever函数可以使后面的do块一直重复执行直到程序被迫终止，如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Control.Monad           |
      |    2                              |                                   |
      |    3                              |    main = forever $ do            |
      |    4                              |        ...                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#forM>`__ forM
      :name: forM

   forM函数包含在 ``Control.Monad`` 模块中，它的功能和mapM类似，从第一个参数中逐个取出元素传入第二个参数（一个接收一个参数的函数）中，并且第二个参数可以返回IO
   a类型。比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Control.Monad           |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |        colo                       |
      |    5                              | rs <- forM [1, 2, 3, 4] (\a -> do |
      |    6                              |            putStrLn $             |
      |    7                              | "Which color do you associate wit |
      |    8                              | h the number " ++ show a ++ "?"   |
      |    9                              |            color <- getLine       |
      |                                   |            return color)          |
      |                                   |        p                          |
      |                                   | utStrLn "The colors that you asso |
      |                                   | ciate with 1, 2, 3 and 4 are: "   |
      |                                   |        mapM putStrLn colors       |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#getContents>`__ getContents
      :name: getContents

   getLine获取一整行，而getContents从标准输入中获取全部内容直到遇到EOF，并且它是lazy的，在执行了foo
   <-
   getContents后，它并不会读取标准输入并且赋值到foo，而是等到需要使用foo的时候再从标准输入读取。

   getContents在使用管道传入文字时很常用，可以代替forever+getLine使用，比如一个Haskell程序文件code.hs：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Data.Char               |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |        contents <- getContents    |
      |    5                              |                                   |
      |                                   |   putStr (map toUpper contents)   |
      +-----------------------------------+-----------------------------------+

   使用ghc –make code编译后，通过管道传入文字：

   .. container:: float highlight sh

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    cat text.txt | ./code          |
      +-----------------------------------+-----------------------------------+

   会将text.txt中的所有字母转为大写并输出

   .. rubric:: ` <#interact>`__ interact
      :name: interact

   上述功能还可以转化为一个String -> String的函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    upperStrings = un              |
      |                                   | lines . map (map toUpper) . lines |
      +-----------------------------------+-----------------------------------+

   而在main中使用这个函数就需要：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = do                      |
      |    2                              |        contents <- getContents    |
      |    3                              |                                   |
      |                                   |    putStr (upperStrings contents) |
      +-----------------------------------+-----------------------------------+

   但是String ->
   String类型的函数在输入输出中的使用太常见了，所以可以使用interact函数来简化。interact的类型是：

   interact :: (String -> String) -> IO ()

   可以看出它接收一个String -> String的函数，并返回一个IO
   ()类型，所以可以直接用在main上。

   于是整个转换为大写的程序就可以简化为：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    main = interact $ un           |
      |                                   | lines . map (map toUpper) . lines |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#文件和流>`__ 文件和流
      :name: 文件和流

   以下与文件和流相关的函数都包含在 ``System.IO`` 模块中

   .. rubric:: ` <#openFile>`__ openFile
      :name: openFile

   openFile函数可以用来打开一个文件，它的类型是：

   openFile :: FilePath -> IOMode -> IO Handle

   其中 ``FilePath`` 是String的type
   synonyms，用一个字符串来表示需要打开的文件的路径

   ``IOMode`` 的定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data IOMode = ReadMode | Write |
      |                                   | Mode | AppendMode | ReadWriteMode |
      +-----------------------------------+-----------------------------------+

   所以它一共只有四个值，用来表示进行IO操作的模式

   openFile返回一个IO
   Handle类型的值，将其用<-操作符提取后会出现一个Handle的值。但不能从Handle中直接使用文字，还需要使用一系列函数：

   -  ``hGetContents`` :: Handle -> IO String
      ，从Handle中读取全部内容，返回一个IO String
   -  ``hGetChar`` :: Handle -> IO Char
      ，从Handle中读取一个字符
   -  ``hGetLine`` :: Handle -> IO String
      ，从Handle中读取一行，返回一个IO String
   -  ``hPutStr`` :: Handle -> String -> IO ()
      ，向Handle中输出字符串
   -  ``hPutStrLn`` :: Handle -> String -> IO () ，同上

   在使用openFile进行文件操作后，需要使用hClose手动关闭Handle。hClose
   :: Handle -> IO ()，接收一个Handle并返回IO
   ()，可以直接放在main函数末尾

   所以使用openFile读取一个文件中的全部内容并输出的全部代码是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import System.IO               |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |        handl                      |
      |    5                              | e <- openFile "text.txt" ReadMode |
      |    6                              |                                   |
      |    7                              |   contents <- hGetContents handle |
      |                                   |        putStrLn contents          |
      |                                   |        hClose handle              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#withFile>`__ withFile
      :name: withFile

   withFile类似Python中的with
   open，它在读取文件使用之后不需要手动close文件。它的类型是：

   withFile :: FilePath -> IOMode -> (Handle -> IO a) ->
   IO a

   可以看出，它接收三个参数：

   -  ``FilePath`` ：一个表示文件路径的String
   -  ``IOMode`` ：打开文件的模式
   -  ``(Handle -> IO a)`` ：一个函数，表示对读取文件后的Handle索要进行的操作，需要返回一个I/O
      action；而这个返回值也将作为withFile的返回值

   现在使用withFile来改写上述代码：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import System.IO               |
      |    2                              |                                   |
      |    3                              |    main = withFile "              |
      |    4                              | text.txt" ReadMode (\handle -> do |
      |    5                              |                                   |
      |                                   |   contents <- hGetContents handle |
      |                                   |        putStrLn contents)         |
      +-----------------------------------+-----------------------------------+

   withFile的功能相当于以下函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    withFile' :: FilePath -> IOM   |
      |    2                              | ode -> (Handle -> IO a) -> IO a   |
      |    3                              |    withFile' path mode f = do     |
      |    4                              |                                   |
      |    5                              |   handle <- openFile path mode    |
      |    6                              |        result <- f handle         |
      |                                   |        hClose handle              |
      |                                   |        return result              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#readFile>`__ readFile
      :name: readFile

   readFile可以更加简化读取文件内容的操作，它的类型：

   readFile :: FilePath -> IO String

   它只需要输入一个表示文件路径的字符串，返回其中以其中内容为内容的I/O
   action：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import System.IO               |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |                                   |
      |    5                              |   contents <- readFile "text.txt" |
      |                                   |        putStrLn contents          |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#writeFile>`__ writeFile
      :name: writeFile

   writeFile简化了写入文件的操作，它的类型：

   writeFile :: FilePath -> String -> IO ()

   传入的第一个参数是要写入的文件的路径，第二个参数是要写入的字符串，返回一个IO
   ()

   .. rubric:: ` <#appendFile>`__ appendFile
      :name: appendFile

   appendFile类似writeFile，但使用它不会覆盖文件中原来内容，而是直接把字符串添加到文件末尾

   .. rubric:: ` <#buffer>`__ buffer
      :name: buffer

   文件以流的形式被读取，默认文字文件的缓冲区（buffer）大小是一行，即每次读取一行内容；默认二进制文件的缓冲区大小是以块为单位，如果没有指定则根据系统默认来选择。

   也可以通过 ``hSetBuffering`` 函数来手动设置缓冲区大小，这个函数的类型：

   hSetBuffering :: Handle -> BufferMode -> IO ()

   它接收一个handle，和一个BufferMode，并返回IO
   ()。其中BufferMode有以下几种：

   -  ``NoBuffering`` ：没有缓冲区，一次读入一个字符
   -  ``LineBuffering`` ：缓冲区大小是一行，即每次读入一行内容
   -  ``BlockBuffering (Maybe Int)`` ：缓冲区大小是一块，块的大小由Maybe
      Int指定：

      -  ``BlockBuffering (Nothing)`` ：使用系统默认的块大小
      -  ``BlockBuffering (Just 2048)`` ：一块的大小是2048字节，即每次读入2048bytes的内容

   缓冲区的刷新是自动的，也可以通过 ``hFlush`` 来手动刷新

   hFlush :: Handle -> IO ()

   传入一个handle，返回IO ()，即刷新对应handle的缓冲区

   .. rubric:: ` <#openTempFile>`__ openTempFile
      :name: openTempFile

   openTempFile可以新建一个临时文件：

   openTempFile :: FilePath -> String -> IO (FilePath,
   Handle)

   ``FilePath`` 指临时文件要创建的位置路径， ``String`` 指临时文件名字的前缀，返回一个I/O
   action，其内容第一个 ``FilePath`` 是创建得到的临时文件的路径， ``Handle`` 是临时文件的handle

   例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import System.IO               |
      |    2                              |                                   |
      |    3                              |    main = do                      |
      |    4                              |        (tempFile, tempH           |
      |    5                              | andle) <- openTempFile "." "temp" |
      |    6                              |        ...                        |
      |                                   |        hClose tempHandle          |
      +-----------------------------------+-----------------------------------+

   ``"."`` 指临时文件要在当前目录创建， ``"temp"`` 指临时文件名字以temp开头。最终得到的tempFile就是./temp…….，temp后为随机数字，如 ``./temp43620-0``

   .. rubric:: ` <#路径操作>`__ 路径操作
      :name: 路径操作

   相关函数都包含在 ``System.Directory`` 模块中，全部内容见 `System.Directory <https://hackage.haskell.org/package/directory-1.3.6.2/docs/System-Directory.html>`__

   .. rubric:: ` <#getCurrentDirectory>`__ getCurrentDirectory
      :name: getCurrentDirectory

   getCurrentDirectory :: IO FilePath

   直接返回一个I/O
   action，其内容是一个字符串表示当前路径的绝对路径

   .. rubric:: ` <#removeFile>`__ removeFile
      :name: removeFile

   removeFile :: FilePath -> IO ()

   输入一个文件路径，并删除掉它

   .. rubric:: ` <#renameFile>`__ renameFile
      :name: renameFile

   renameFile :: FilePath -> FilePath -> IO ()

   输入一个原路径，一个新路径，为原路径的文件重命名为新路径的名

   .. rubric:: ` <#doesFileExist>`__ doesFileExist
      :name: doesFileExist

   doesFileExist :: FilePath -> IO Bool

   检查文件是否存在，返回一个包含布尔值的I/O action

   .. rubric:: ` <#Command-line-arguments>`__ Command
      line arguments
      :name: Command-line-arguments

   ``System.Environment`` 模块中提供了两个函数可以用来处理传入命令行的参数

   .. rubric:: ` <#getArgs>`__ getArgs
      :name: getArgs

   getArgs :: IO [String]

   不需要输入参数，直接返回一个I/O
   action，内容为传入命令行的参数（一个由String组成的列表）。相当于C语言中的argv[1:]

   .. rubric:: ` <#getProgName>`__ getProgName
      :name: getProgName

   getProgName :: IO String

   返回I/O
   action，内容为程序的名字，相当于C语言中的argv[0]

   .. rubric:: ` <#Randomness>`__ Randomness
      :name: Randomness

   和随机数有关的函数都包含在 ``System.Random`` 模块中。GHCi启动时可能不会包含System.Random的配置，导致无法找到模块。需要通过stack打开:

   .. container:: float highlight sh

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    stack ghci --package random    |
      +-----------------------------------+-----------------------------------+

   Haskell要求同样的程序需要运行出同样的结果，除了用到了I/O
   action，所有会造成不同结果的函数都要交给I/O
   action来完成

   那要使随机数脱离IO存在，就要用到随机生成器（random
   generator）

   ``System.Random`` 模块提供了几个生成随机数的函数：

   .. rubric:: ` <#random>`__ random
      :name: random

   random :: (Random a, RandomGen g) => g -> (a, g)

   其中又有两个新的typeclass，Random表示可以取随机，RandomGen表示随机数生成器。random函数接收一个随机数生成器，返回一个元组，其中第一个元素是生成的随机数，第二个元素是一个新的随机数生成器

   获取随机数生成器可以使用 ``mkStdGen`` 函数：

   mkStdGen :: Int -> StdGen

   其中 ``StdGen`` 是一个RandomGen的实例

   运用random生成随机数需要指定类型，不然程序无法确定 ``a`` 是什么类型。例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> rando                    |
      |    2                              | m (mkStdGen 100) :: (Int, StdGen) |
      |    3                              |    (9216477508314497915           |
      |    4                              | ,StdGen {unStdGen = SMGen 7126332 |
      |    5                              | 46999323047 2532601429470541125}) |
      |    6                              |    ghci> random                   |
      |                                   |  (mkStdGen 100) :: (Char, StdGen) |
      |                                   |    ('\537310'                     |
      |                                   | ,StdGen {unStdGen = SMGen 7126332 |
      |                                   | 46999323047 2532601429470541125}) |
      |                                   |    ghci> random                   |
      |                                   |  (mkStdGen 100) :: (Bool, StdGen) |
      |                                   |    (True                          |
      |                                   | ,StdGen {unStdGen = SMGen 7126332 |
      |                                   | 46999323047 2532601429470541125}) |
      +-----------------------------------+-----------------------------------+

   再次运行同样的函数，会得到同样的结果。所以如果需要生成其他的随机数，需要更换生成器，就可以使用上一次调用结果返回的新随机数生成器：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    threeCoins                     |
      |    2                              | :: StdGen -> (Bool, Bool, Bool)   |
      |    3                              |    threeCoins gen =               |
      |    4                              |        let (                      |
      |    5                              | firstCoin, newGen) = random gen   |
      |    6                              |            (secon                 |
      |                                   | dCoin, newGen') = random newGen   |
      |                                   |            (thirdC                |
      |                                   | oin, newGen'') = random newGen'   |
      |                                   |        in  (f                     |
      |                                   | irstCoin, secondCoin, thirdCoin)  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#randoms>`__ randoms
      :name: randoms

   randoms :: (Random a, RandomGen g) => g -> [a]

   randoms接收一个RandomGen，返回一个随机的无穷列表。因为它是无穷的，所以不会返回新的随机数生成器

   .. rubric:: ` <#randomR>`__ randomR
      :name: randomR

   randomR :: (Random a, RandomGen g) => (a, a) -> g ->
   (a, g)

   可以用来生成有范围的随机数，第一个参数是一个元组，表示生成随机数的范围(闭区间)

   .. rubric:: ` <#randomRs>`__ randomRs
      :name: randomRs

   randomRs :: (Random a, RandomGen g) => (a, a) -> g ->
   [a]

   同上两个，生成有范围的无穷随机数列表

   .. rubric:: ` <#getStdGen>`__ getStdGen
      :name: getStdGen

   如果想要让程序每次运行得到不同的随机结果，需要使用 ``getStdGen`` 来获取全局随机数生成器，它会在每次运行的时候产生不同的值，也因此，它返回的是一个I/O
   action，而不是一个直接的StdGen

   getStdGen :: Control.Monad.IO.Class.MonadIO m => m
   StdGen

   即可以看成getStdGen :: IO
   StdGen，需要使用<-操作符将StdGen提取出来

   但是在同一个程序中，getStdGen的结果是相同的，全局随机数生成器不会自动更新，所以就需要另一个函数newStdGen

   .. rubric:: ` <#newStdGen>`__ newStdGen
      :name: newStdGen

   newStdGen :: Control.Monad.IO.Class.MonadIO m => m
   StdGen

   执行newStdGen会进行两个操作：

   -  更新全局随机数生成器，下次执行getStdGen会获得不同的结果
   -  返回一个I/O
      action，包含一个新的StdGen（但是这个生成器和全局生成器也不同）

   .. rubric:: ` <#Exceptions>`__ Exceptions
      :name: Exceptions

   程序在运行失败时会抛出异常，可以通过 ``Control.Exception`` 模块中的 ``catch`` 函数来捕获异常：

   catch :: Exception e => IO a -> (e -> IO a) -> IO a

   第一个参数是要进行的操作，以IO
   a为返回值的类型，第二个参数是一个函数，它接收异常并进行操作，例如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import Control.Exception       |
      |    2                              |                                   |
      |    3                              |    main = main' `catch` handler   |
      |    4                              |                                   |
      |    5                              |    main' :: IO ()                 |
      |    6                              |    main' = do                     |
      |    7                              |        ...                        |
      |    8                              |                                   |
      |    9                              |    han                            |
      |    10                             | dler :: Exception e => e -> IO () |
      |                                   |    handler e =  putStrLn "..."    |
      +-----------------------------------+-----------------------------------+

   也可以利用守卫（guard）语法和 ``System.IO.Error`` 中的函数来判断IO异常的类型来进行不同操作：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    import System.Environment      |
      |    2                              |    import System.IO.Error         |
      |    3                              |    import Control.Exception       |
      |    4                              |                                   |
      |    5                              |    main = toTry `catch` handler   |
      |    6                              |                                   |
      |    7                              |    toTry :: IO ()                 |
      |    8                              |    toT                            |
      |    9                              | ry = do (fileName:_) <- getArgs   |
      |    10                             |                                   |
      |    11                             |   contents <- readFile fileName   |
      |    12                             |               putStrLn            |
      |    13                             | $ "The file has " ++ show (length |
      |    14                             |  (lines contents)) ++ " lines!"   |
      |    15                             |                                   |
      |                                   |    handler :: IOError -> IO ()    |
      |                                   |    handler e                      |
      |                                   |                                   |
      |                                   |     | isDoesNotExistError e = put |
      |                                   | StrLn "The file doesn't exist!"   |
      |                                   |        | otherwise = ioError e    |
      +-----------------------------------+-----------------------------------+

   具体相关全部函数见文档： `System.IO.Error <https://hackage.haskell.org/package/base-4.15.0.0/docs/System-IO-Error.html>`__ 、 `Control.Exception <https://hackage.haskell.org/package/base-4.15.0.0/docs/Control-Exception-Base.html>`__

   .. rubric:: ` <#Functors>`__ Functors
      :name: Functors

   函子（Functor）是一个类型类（typeclass），和其他类型类一样，它规定了其实例类必须实现的功能（例如Eq类型类规定了它的实例必须是可以比较是否相等的），Functor规定类它的实例必须是可以进行映射的。Functor要求使用 ``fmap``
   :: (a -> b) -> f a -> f b
   函数来实现这个功能，它接收一个a ->
   b类型的函数、一个内部元素为a类型的函子，返回一个内部元素为b类型的函子

   Functor可以比作盒子，那fmap函数就相当于给定一个函数和一个盒子，将盒子中的全部元素都应用这个函数，再返回应用函数后的盒子

   函子的实例必须是一个Kind为\* ->
   \*的类型构造器，因为它要求其是一个盒子，盒子在接收内容后才会成为一个具体的类型。fmap中的 ``f a`` 和 ``f b`` 也是因为 ``f`` 是一个类型构造器，在接收类型a/b后才会变成一个具体类型（f
   a和f b）出现在函数类型声明中

   Functor的定义是:

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Functor f where          |
      |    2                              |                                   |
      |    3                              |    fmap :: (a -> b) -> f a -> f b |
      |    4                              |        (<$) :: a -> f a -> f b    |
      |                                   |        (<$) = fmap . const        |
      +-----------------------------------+-----------------------------------+

   可以发现Functor不仅需要fmap函数，还需要一个<$函数，它接收一个a类型的变量和一个内容为b类型的函子，返回一个内容为a类型的函子；作用就是将传入的函子中的所有元素都替换为传入的第一个参数，比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> 'a' <$ [1, 2, 3]         |
      |    2                              |    "aaa"                          |
      +-----------------------------------+-----------------------------------+

   但它不是声明一个函子实例必须的，因为它可以使用fmap和const函数复合来实现，其中const的类型签名：

   const :: a -> b -> a

   即接收两个参数，但始终只返回第一个参数

   .. rubric:: ` <#Functor实例>`__ Functor实例
      :name: Functor实例

   .. rubric:: ` <#>`__ []
      :name: section

   列表[]是一个函子，它通过map函数来实现fmap的功能：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Functor [] where      |
      |    2                              |        fmap = map                 |
      +-----------------------------------+-----------------------------------+

   map :: (a -> b) -> [a] -> [b]

   map和fmap要求的相同，达成的目的也一致。map接收一个函数和一个列表，它会将列表中的所有元素都应用这个函数后再返回这个列表

   .. rubric:: ` <#Maybe>`__ Maybe
      :name: Maybe

   Maybe也具有kind \* -> \*，它也是一个函子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Functor Maybe where   |
      |    2                              |        fmap f Nothing = Nothing   |
      |    3                              |                                   |
      |    4                              |      fmap f (Just x) = Just (f x) |
      |    5                              |                                   |
      |    6                              |    ghci> fmap (*2) Nothing        |
      |    7                              |    Nothing                        |
      |    8                              |    ghci> fmap (*2) (Just 2)       |
      |                                   |    Just 4                         |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Either-a>`__ Either a
      :name: Either-a

   Either的kind是\* -> \* ->
   \*，显然它不是函子，但是固定了一个传入类型的Either
   a的kind是\* -> \*，也是一个函子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | instance Functor (Either a) where |
      |    3                              |        fmap f (Left x) = Left x   |
      |    4                              |                                   |
      |    5                              |    fmap f (Right x) = Right (f x) |
      |    6                              |                                   |
      |    7                              |    ghci> fmap (*2) (Left 4)       |
      |    8                              |    Left 4                         |
      |                                   |    ghci> fmap (*2) (Right 4)      |
      |                                   |    Right 8                        |
      +-----------------------------------+-----------------------------------+

   因为使用Either时一般用右值表示正常结果，左值表示异常信息，所以使用fmap时只对右值进行操作，如果时左值则保持不变（而且左值此时也作为确定类型确定值存在）

   .. rubric:: ` <#IO>`__ IO
      :name: IO

   IO也是一个函子，使用fmap对IO中内容应用函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Functor IO where      |
      |    2                              |        fmap f action = do         |
      |    3                              |            result <- action       |
      |    4                              |            return (f result)      |
      |    5                              |                                   |
      |    6                              |                                   |
      |    7                              |  ghci> fmap ("input: "++) getLine |
      |    8                              |    test                           |
      |                                   |    "input: test"                  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#a>`__ (,) a
      :name: a

   (,)表示一个二元组的类型构造器，(,) :: \* -> \* ->
   \*，而确定了第一个元素的类型后就变成了(,)
   a，它的kind是\* ->
   \*。也是一个函子，进行fmap函数时只对第二个元素应用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Functor ((,) a) where |
      |    2                              |        fmap f (x, y) = (x, f y)   |
      +-----------------------------------+-----------------------------------+

   只剩一个元素的三元组和四元组也都是函子，fmap也只对最后一个元素应用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | instance Functor ((,,) a b) where |
      |    3                              |                                   |
      |    4                              |    fmap f (a, b, c) = (a, b, f c) |
      |    5                              |                                   |
      |                                   |    ins                            |
      |                                   | tance Functor ((,,,) a b c) where |
      |                                   |        fma                        |
      |                                   | p f (a, b, c, d) = (a, b, c, f d) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#gt-r>`__ (->) r
      :name: gt-r

   ->也是一个类型构造器，它的kind：

   (->) :: \* -> \* -> \*

   一个映射（一元函数）的类型a -> b也可以写成(->) a
   b，它是由类型a和类型b输入到类型构造器->中后形成的一个具体类型。所以确定了输入类型后的一元函数的类型就是(->)
   r（其中 ``r`` 是输入的类型）

   规定的fmap的类型签名是：

   fmap :: (a -> b) -> f a -> f b

   其中的f是函子，而在这个实例中(->)
   r就是函子，将其带入f可以得到：

   fmap :: (a -> b) -> ((-> r) a) -> ((-> r) b)

   把其中的(->)换成中缀可以得到：

   fmap :: (a -> b) -> (r -> a) -> (r -> b)

   | 传入两个函数，一个类型为a -> b，一个类型为r ->
     a，返回一个函数，类型为r -> b。
   | 不难推测这个fmap是将这两个函数复合了，先对输入对r应用第二个函数产生类型a的结果，然后在应用第一个函数产生类型b的结果，所以(->)
     r定义的fmap是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |   instance Functor ((->) r) where |
      |                                   |        fmap f g = (\x -> f (g x)) |
      +-----------------------------------+-----------------------------------+

   所以(->) r的fmap其实就是函数复合(.)：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |   instance Functor ((->) r) where |
      |                                   |        fmap = (.)                 |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> :t fmap (*3) (+100)      |
      |    2                              |    fmap (                         |
      |    3                              | *3) (+100) :: (Num a) => a -> a   |
      |    4                              |    ghci> fmap (*3) (+100) 1       |
      |    5                              |    303                            |
      |    6                              |    ghci> (*3) `fmap` (+100) $ 1   |
      |    7                              |    303                            |
      |    8                              |    ghci> (*3) . (+100) $ 1        |
      |                                   |    303                            |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Functor-Laws>`__ Functor Laws
      :name: Functor-Laws

   所有的函子都应该满足两个定律。这两个定律不是Haskell强制要求的，但应该确保一个函子满足这两个定律：

   #. ``fmap id = id`` （其中id为函数 ``(\x -> x)`` ）：即对一个函子fmap
      id，那它应该返回本身（fmap id a = id a =
      a，a为一个函子），比如：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    ghci> fmap id [1, 2, 3]        |
         |    2                              |    [1,2,3]                        |
         |    3                              |    ghci> fmap id (Just 2)         |
         |    4                              |    Just 2                         |
         +-----------------------------------+-----------------------------------+

   #. ``fmap (f . g) = fmap f . fmap g`` ：即函子的fmap支持结合律
      fmap (f . g) a = fmap f . fmap g $ a = fmap f (fmap
      g a)，其中 ``a`` 为一个函子
      fmap (f . g) (Just x) = fmap f (fmap g (Just x)) =
      fmap f (Just (g x)) = Just (f (g x))

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    gh                             |
         |    2                              | ci> fmap ((*3) . (+100)) (Just 1) |
         |                                   |    Just 303                       |
         +-----------------------------------+-----------------------------------+

   满足第一个定律的函子一定满足第二个定律，所以只要检查函子是否满足第一个定律即可

   .. rubric:: ` <#Intuition>`__ Intuition
      :name: Intuition

   对于函子和fmap，有两种理解方法

   #. 函子是一种容器（container）；fmap接收一个函数和一个容器，在容器内部应用这个函数，返回应用后的新容器

   #. 函子是一种计算上下文（context）；fmap是柯里化的，把其类型签名看作

      fmap :: (a -> b) -> (f a -> f b)

      接收一个函数返回另一个函数，传入函数g :: a ->
      b，fmap将其转换为新的函数

      fmap g :: f a -> f b

      使普通的函数g可以在计算上下文 ``f`` 中使用，这种转换也被称为提升（lift）

   .. rubric:: ` <#常用函数>`__ 常用函数
      :name: 常用函数

   .. rubric:: ` <#lt-gt>`__ <$>
      :name: lt-gt

   ``<$>`` 函数是 ``fmap`` 的中缀形式（它看着类似 ``$`` ， ``f $ 3`` 将f应用在单个值3上，而 ``f <$> [1, 2, 3]`` 将f应用在一个函子上，也就是应用在一个函子内部的所有值上）：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> fmap (*2) (Just 2)       |
      |    2                              |    4                              |
      |    3                              |    ghci> (*2) <$> Just 2          |
      |    4                              |    4                              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#gt>`__ $>
      :name: gt

   ``$>`` 函数包含在 ``Data.Functor`` 模块中

   ($>) :: Functor f => f a -> b -> f b

   Functor定义时要求了 ``<$`` 函数，将函子内部的元素全部替换为指定的某个值，而 ``$>`` 正好将 ``<$`` 函数的两个参数反了过来，相当于 ``flip (<$)`` ：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> 'a' <$ [1, 2, 3]         |
      |    2                              |    "aaa"                          |
      |    3                              |    ghci> [1, 2, 3] $> 'a'         |
      |    4                              |    "aaa"                          |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#void>`__ void
      :name: void

   ``void`` 函数也包含在 ``Data.Functor`` 模块中

   void :: Functor f => f a -> f ()

   void函数把一个函子内部的全部元素都变成空（ ``()`` ）， ``void x`` 相当于 ``() <$ x`` ：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> void [1, 2, 3]           |
      |    2                              |    [(), (), ()]                   |
      |    3                              |    ghci> void (Just 2)            |
      |    4                              |    Just ()                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Applicative-Functor>`__ Applicative
      Functor
      :name: Applicative-Functor

   应用函子（Applicative
   Functor）是函子的升级版，它包含在 ``Control.Applicative`` 模块中。

   fmap进行的操作是将一个普通一元函数应用在一个函子内部。而如果要将一个包含函数的函子应用在另一个函子上，fmap就处理不了了，但是应用函子的方法可以处理。应用函子的定义：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class                          |
      |    2                              |  Functor f => Applicative f where |
      |    3                              |        pure :: a -> f a           |
      |                                   |                                   |
      |                                   | (<*>) :: f (a -> b) -> f a -> f b |
      +-----------------------------------+-----------------------------------+

   应用函子要求实现两个函数：

   -  ``pure`` :: a -> f
      a，不难理解，pure接收一个值，并将其放在默认的上下文/容器中。对于列表，pure
      = []；对于Maybe，pure = Just
   -  ``<*>`` :: f (a -> b) -> f a -> f b，类似于fmap ::
      (a -> b) -> f a -> f
      b，但不同的是<\*>的第一个参数的类型是f (a ->
      b)不是a ->
      b。所以<\*>的第一个参数是在上下文中的函数，而不是一个普通函数。换句话说，<\*>接收一个装有函数的函子和另一个函子，应用函数后返回新的函子。

   .. rubric:: ` <#Applicative-Functor实例>`__ Applicative
      Functor实例
      :name: Applicative-Functor实例

   .. rubric:: ` <#Maybe-1>`__ Maybe
      :name: Maybe-1

   Maybe是一个应用函子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  instance Applicative Maybe where |
      |    3                              |        pure = Just                |
      |    4                              |        Nothing <*> _ = Nothing    |
      |                                   |        (Just f)                   |
      |                                   |  <*> something = fmap f something |
      +-----------------------------------+-----------------------------------+

   -  ``pure`` 函数：将一个值放在默认的上下文中，而对于Maybe，默认的上下文就是Just，所以pure
      x = Just x
   -  ``<*>`` 函数：将装有函数的函子中的函数应用另一个函子中

      -  第一个参数是Nothing，即第一个函子不包含函数，那返回的结果就也会是Nothing
      -  第一个参数是装有函数f的函子Just
         f，将其中的函数f应用在函子something中，只需要将f提取出来使用fmap应用在函子something中即可

   实际应用的例子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Just (+3) <*> Just 9     |
      |    2                              |    Just 12                        |
      |    3                              |    ghci> pure (+3) <*> Just 9     |
      |    4                              |    Just 12                        |
      |    5                              |    ghci> (+3) <$> Just 9          |
      |    6                              |    Just 12                        |
      |    7                              |    ghci> Nothing <*> Just 9       |
      |    8                              |    Nothing                        |
      +-----------------------------------+-----------------------------------+

   第一个例子，Just
   (+3)是一个包含函数(+3)的函子，将其应用在函子Just
   9中，将Just (+3)中的函数(+3)提取出来，应用在Just
   9中，得到了Just 12

   第二个例子，可以发现，在这里pure (+3)和Just
   (+3)等效，因为pure将函数(+3)放在默认上下文中，也就是Just中了

   而<\*>能做的不止这些，他可以连续传入更多函子作为参数，比如：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghc                            |
      |    2                              | i> pure (+) <*> Just 3 <*> Just 9 |
      |    3                              |    Just 12                        |
      |    4                              |                                   |
      |                                   |  ghci> pure (\x y z -> x + y + z) |
      |                                   |  <*> Just 3 <*> Just 4 <*> Just 5 |
      |                                   |    Just 12                        |
      +-----------------------------------+-----------------------------------+

   <\*>函数一样是默认左结合的，pure (+) <\*> Just 3 <\*>
   Just 9相当于(pure (+) <\*> Just 3) <\*> Just 9，而pure
   (+) <\*> Just 3将(+)应用在Just 3上，得到的就是Just
   (+3)一个包含函数的函子，又将其通过<\*>应用在了Just
   9上，得到了Just 12:

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      pure (\x y z -> x + y + z)   |
      |    2                              |  <*> Just 3 <*> Just 4 <*> Just 5 |
      |    3                              |    = (pure (\x y z -> x + y + z)  |
      |    4                              | <*> Just 3) <*> Just 4 <*> Just 5 |
      |    5                              |    = (Just (\y z ->               |
      |                                   | 3 + y + z) <*> Just 4) <*> Just 5 |
      |                                   |    = Just (\z -> 3 + 4 + z)       |
      |                                   | <*> Just 5 = Just (+7) <*> Just 5 |
      |                                   |    = Just 12                      |
      +-----------------------------------+-----------------------------------+

   所以可以使用类似pure f <\*> x <\*> y <\*>
   …来将一个普通多元函数f应用在多个函子上。

   而且pure f <\*>
   x实际上先将普通函数f放在上下文中，然后执行<\*>时再将其提取出来执行fmap，所以它就相当于将普通函数应用在函子x上，即fmap
   f x，也可以写成f <$> x。所以常用的写法就是：

   f <$> x <\*> y <\*> ...

   .. rubric:: ` <#-1>`__ []
      :name: -1

   列表也是一个应用函子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Applicative [] where  |
      |    2                              |        pure x = [x]               |
      |    3                              |        fs                         |
      |                                   | <*> xs = [f x | f <- fs, x <- xs] |
      +-----------------------------------+-----------------------------------+

   -  ``pure`` 函数：对于列表而言，一个值的最小上下文就是只包含这个值的列表[x]
   -  ``<*>`` 函数：列表的<\*>函数是通过列表推导来实现的。因为不同于Maybe的Just只包含一个值，列表可以包含很多值，第一个传入的列表中可能会包含很多函数，第二个传入的列表也会包含很多值，所以就需要先从第一个列表中取出一个函数然后依次应用在第二个列表的每个值中，再取出第一个列表中的第二个函数应用在第二个列表的每个值中……最终返回得到的所有结果的列表

   使用例子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> [(+3), (*2)] <*> [1, 2]  |
      |    2                              |    [4,5,2,4]                      |
      |    3                              |    ghci> [(+),                    |
      |    4                              |  (*)]  <*>  [1, 2]  <*>  [3, 4]   |
      |                                   |    [4, 5, 5, 6, 3, 4, 6, 8]       |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#IO-1>`__ IO
      :name: IO-1

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Applicative IO where  |
      |    2                              |        pure = return              |
      |    3                              |        a <*> b = do               |
      |    4                              |            f <- a                 |
      |    5                              |            x <- b                 |
      |    6                              |            return (f x)           |
      +-----------------------------------+-----------------------------------+

   也不难理解，pure函数直接将传入的值return，相当于放在了IO的上下文中。而<\*>函数先将两个IO中内容提取出来，然后应用函数后return，形成新的IO函子

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    g                              |
      |    2                              | hci> (++) <$> getLine <*> getLine |
      |    3                              |    Line1                          |
      |    4                              |    Line2                          |
      |                                   |    "Line1Line2"                   |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#gt-r-1>`__ (->) r
      :name: gt-r-1

   (->)
   r同样也是一个应用函子，和函子的分析一样，先来分析它的<\*>函数的类型签名：

   <\*> :: f (a -> b) -> f a -> f b

   其中f为(->) r，将其代入并替换为中缀：

   <\*> :: (r -> a -> b) -> (r -> a) -> (r -> b)

   可以看出它接收两个函数f :: r -> a -> b、g :: r ->
   a，返回另一个函数h :: (r -> b)

   那么返回的函数的输入为r，输出为b，所以先对输入应用函数g得到a，然后在对r和a应用f得到b，所以推测<\*>函数的操作就是：

   \\x -> f x (g x)

   于是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    in                             |
      |    2                              | stance Applicative ((->) r) where |
      |    3                              |        pure x = (\_ -> x)         |
      |                                   |        f <*> g = \x -> f x (g x)  |
      +-----------------------------------+-----------------------------------+

   将一个值放在函数的上下文中，最小上下文就应该返回这个值本身，所以pure函数定义为(\_
   -> x)，即无论输入什么，都返回x

   应用函子的<\*>函数接收两个函子，返回一个新的函子。对于(->)
   r，它接收两个函数，返回一个新的函数。具体例子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | ghci> (+) <$> (+3) <*> (*100) $ 5 |
      |                                   |    508                            |
      +-----------------------------------+-----------------------------------+

   执行这句时发生了什么？：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      (+) <$> (+3) <*> (*100) $ 5  |
      |    2                              |                                   |
      |    3                              |   = ((+) <$> (+3)) <*> (*100) $ 5 |
      |    4                              |    =                              |
      |    5                              |  ((+) . (+3)) <*> (*100) $ 5 = ( |
      |    6                              | a -> (+) ((+3) a)) <*> (*100) $ 5 |
      |    7                              |    = (\a                          |
      |    8                              |  b -> (a + 3 + b)) <*> (*100) $ 5 |
      |                                   |                                   |
      |                                   |  = (\x -> x + 3 + ((*100) x)) $ 5 |
      |                                   |    = (\x -> x + 3 + x * 100) $ 5  |
      |                                   |    = 5 + 3 + 5 * 100 = 508        |
      |                                   |    = (5 + 3) + (5 * 100)          |
      +-----------------------------------+-----------------------------------+

   所以就相当于先对输入分别执行(+3)和(\*100)，然后将两个结果执行了(+)

   同样：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> (\x y z -> [x,y,z])      |
      |    2                              |  <$> (+3) <*> (*2) <*> (/2) $ 5   |
      |                                   |    [8.0,10.0,2.5]                 |
      +-----------------------------------+-----------------------------------+

   先对5分别执行(+3)、(\*2)、(/2)，然后将得到的三个结果传入(\\x
   y z -> [x,y,z])得到了最终的结果

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |      f <$> g <*> h <*> i          |
      |    2                              |    = (\x -> f (g x) (h x) (i x))  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#ZipList>`__ ZipList
      :name: ZipList

   普通列表实现的<\*>函数是将每个函数应用在所有值上，但还有一种实现方法是将每个函数应用在对应值上，因为同一个类型不能存在同一函数的两种实现形式，所以引入了一个新的列表ZipList，包含在 ``Control.Applicative`` 模块中

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    i                              |
      |    2                              | nstance Applicative ZipList where |
      |    3                              |                                   |
      |                                   |       pure x = ZipList (repeat x) |
      |                                   |        ZipList fs <*> ZipList     |
      |                                   |  xs = ZipList (zipWith ($) fs xs) |
      +-----------------------------------+-----------------------------------+

   但是ZipList并不是Show的实例，所以不能直接显示出来，要使用 ``getZipList`` 来获取它内部的列表：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    gh                             |
      |    2                              | ci> getZipList $ (+) <$> ZipList  |
      |    3                              | [1,2,3] <*> ZipList [100,100..]   |
      |    4                              |    [101,102,103]                  |
      |                                   |    ghci> getZipL                  |
      |                                   | ist $ (,,) <$> ZipList "dog" <*>  |
      |                                   | ZipList "cat" <*> ZipList "rat"   |
      |                                   |    [('d','c','r                   |
      |                                   | '),('o','a','a'),('g','t','t')]   |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Applicative-Functor-Laws>`__ Applicative
      Functor Laws
      :name: Applicative-Functor-Laws

   应用函子一般有四个定律，都是保证pure的正确性的：

   #. ``Identity law`` ：pure id <\*> v = v
   #. ``Homomorphism`` ：pure f <\*> pure x = pure (f x)
   #. ``Interchange`` ：u <\*> pure v = pure ($ v) <\*>
      u
   #. ``Composition`` ：u <\*> (v <\*> w) = pure (.)
      <\*> u <\*> v <\*> w

   .. rubric:: ` <#Intuition-1>`__ Intuition
      :name: Intuition-1

   | 理解应用函子的方式也是将其看作是计算上下文（context），比如要计算：
   | $$
   | [[\ \ g\ x_1\ x_2\ \\cdots\ x_n\ \ ]]
   | $$

   其中$x_i$的类型是$f\\
   t_i$，$f$是应用函子（看作上下文）。而函数$g$的类型是：

   | $$
   | t_1\\to t_2\\to\\cdots\\to t_n\\to t
   | $$

   所以双括号（idiom
   brackets）的作用是将一个普通函数应用在包含在上下文中的参数上。$g\\
   x_1$可以通过fmap来执行，将$g$提升（lift）到$x_1$的上下文中，然后应用在$x_1$上。但是fmap返回的结果是一个函子，换句话说，$g\\
   x_1$结果的类型是：

   | $$
   | f\ \ (t_2\\to t_3\\to\\cdots\\to t_n\\to t)
   | $$

   但是fmap并不能将上下文中的函数应用在上下文中的参数上，于是应用函子的<\*>函数提供了这个方法，所以计算$[[\\
   g\ x_1\ x_2\ \\cdots\ x_n\ ]]$，只需要：

   g <$> x1 <\*> x2 <\*> ... <\*> xn

   而pure函数的作用就是将一个不在上下文中的值（函数或参数）提升到上下文中，但不进行其他操作。比如参数$x_2$如果不在上下文中，需要用pure提升到上下文中才能按上面计算：

   g <$> x1 <\*> pure x2 <\*> ... <\*> xn

   .. rubric:: ` <#常用函数-1>`__ 常用函数
      :name: 常用函数-1

   .. rubric:: ` <#liftA-amp-liftA2-amp-liftA3>`__ liftA
      & liftA2 & liftA3
      :name: liftA-amp-liftA2-amp-liftA3

   liftA :: Applicative f => (a -> b) -> f a -> f b

   liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b
   -> f c

   liftA3 :: Applicative f => (a -> b -> c -> d) -> f a
   -> f b -> f c -> f d

   不难推测liftA就是fmap， ``liftA2 f x1 x2`` 相当于 ``f <$> x1 <*> x2`` ， ``liftA3 f x1 x2 x3`` 相当于 ``f <$> x1 <*> x2 <*> x3``

   .. rubric:: ` <#lt-amp-gt>`__ <\* & \*>
      :name: lt-amp-gt

   类型类似函子的 ``<$`` 和 ``$>`` ：

   (<\*) :: Applicative f => f a -> f b -> f a

   (\*>) :: Applicative f => f a -> f b -> f b

   <\*接收两个函子，如果两个函子中又一个为空，就返回空，否则返回的类型与第一个函子相同。\*>反过来

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Just 3 <* Just 4         |
      |    2                              |    Just 3                         |
      |    3                              |    ghci> Just 3 *> Just 4         |
      |    4                              |    Just 4                         |
      |    5                              |    ghci> Nothing <* Just 3        |
      |    6                              |    Nothing                        |
      |    7                              |    ghci> Nothing *> Just 3        |
      |    8                              |    Nothing                        |
      |    9                              |    ghci> [1, 2, 3] <* [3, 4]      |
      |    10                             |    [1,1,2,2,3,3]                  |
      |    11                             |    ghci> [1, 2, 3] *> [3, 4]      |
      |    12                             |    [3,4,3,4,3,4]                  |
      |    13                             |    ghci> [] <* [1, 2, 3]          |
      |    14                             |    []                             |
      |    15                             |    ghci> [] *> [1, 2, 3]          |
      |    16                             |    []                             |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#lt-gt-1>`__ <\*\*>
      :name: lt-gt-1

   (\*\*) :: Applicative f => f a -> f (a -> b) -> f b

   接收的参数是<\*>反转过来的，即先接收一个参数函子，然后接收一个函数函子，在将其应用返回。但是和flip(<\*>)不同，它先取参数函子的每个参数，然后再取函数函子中的函数逐个应用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    gh                             |
      |    2                              | ci> [(+1), (+2), (+3)] <*> [1, 2] |
      |    3                              |    [2,3,3,4,4,5]                  |
      |    4                              |    ghc                            |
      |    5                              | i> [1, 2] <**> [(+1), (+2), (+3)] |
      |    6                              |    [2,3,4,3,4,5]                  |
      |                                   |    ghci> fl                       |
      |                                   | ip(<*>) [1, 2] [(+1), (+2), (+3)] |
      |                                   |    [2,3,3,4,4,5]                  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#when-amp-unless>`__ when & unless
      :name: when-amp-unless

   when :: Applicative f => Bool -> f () -> f ()

   传入的第一个是一个结果为Bool类型的测试，如果测试为True，则调用第二个参数，否则返回pure
   ()。（when函数在上文IO操作中使用过）

   unless则与when相反，测试为True返回pure ()

   .. rubric:: ` <#sequenceA>`__ sequenceA
      :name: sequenceA

   sequenceA :: (Traversable t, Applicative f) => t (f a)
   -> f (t a)

   应用在列表上时，它的类型相当于：

   [f a] -> f [a]

   所以在列表上它的使用方法：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> seq                      |
      |    2                              | uenceA [Just 3, Just 2, Just 1]   |
      |    3                              |    Just [3,2,1]                   |
      |    4                              |    ghci> sequ                     |
      |    5                              | enceA [Just 3, Nothing, Just 1]   |
      |    6                              |    Nothing                        |
      |    7                              |    ghc                            |
      |    8                              | i> sequenceA [(+3),(+2),(+1)] 3   |
      |    9                              |    [6,5,4]                        |
      |    10                             |    gh                             |
      |                                   | ci> sequenceA [[1,2,3],[4,5,6]]   |
      |                                   |    [[1,4],[1,5],[1,6],[2,4]       |
      |                                   | ,[2,5],[2,6],[3,4],[3,5],[3,6]]   |
      |                                   |    ghci> sequenc                  |
      |                                   | eA [[1,2,3],[4,5,6],[3,4,4],[]]   |
      |                                   |    []                             |
      +-----------------------------------+-----------------------------------+

   它在对同一个参数应用不同函数时很有用：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> map                      |
      |    2                              |  (\f -> f 7) [(>4), (<10), odd]   |
      |    3                              |    [True,True,True]               |
      |    4                              |    ghci>                          |
      |                                   |  sequenceA [(>4), (<10), odd] 7   |
      |                                   |    [True,True,True]               |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Monad>`__ Monad
      :name: Monad

   单子（Monad）是对Applicative
   Functor的扩展（但是诞生比Applicative早），Functor的 ``<$>`` 函数实现了将普通函数应用在上下文值上，Applicative的 ``<*>`` 函数将上下文中函数应用在上下文值上。而Monad提供了一个函数 ``>>=`` （bind），将一个接收普通值返回上下文值的函数应用在上下文值上：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    cla                            |
      |    2                              | ss Applicative m => Monad m where |
      |    3                              |                                   |
      |    4                              | (>>=) :: m a -> (a -> m b) -> m b |
      |    5                              |        (>>) :: m a -> m b -> m b  |
      |    6                              |        return :: a -> m a         |
      |                                   |        m >> n = m >>= \_ -> n     |
      |                                   |        return = pure              |
      +-----------------------------------+-----------------------------------+

   -  ``return`` 函数：和 ``pure`` 一样，只是有另一个名字
   -  ``>>`` 函数：提供了默认的实现方法，它的作用和Applicative的\*>函数一样
   -  ``>>=`` 函数（bind）：比Applicative升级的函数，第一个参数是一个单子，第二个参数是一个接收值返回单子的函数，将这个函数应用在第一个参数单子中的值上，并返回得到的新单子

   .. rubric:: ` <#Monad实例>`__ Monad实例
      :name: Monad实例

   .. rubric:: ` <#Maybe-2>`__ Maybe
      :name: Maybe-2

   Maybe是一个单子实例，Applicative已经为它实现了return，因此只需要>>=函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Monad Maybe where     |
      |    2                              |        (Just x) >>= f = f x       |
      |    3                              |        Nothing  >>= _ = Nothing   |
      +-----------------------------------+-----------------------------------+

   根据定义就很容易实现Maybe的>>=函数了，而且也很好理解

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    gh                             |
      |    2                              | ci> Just 1 >>= \x -> Just (x + 1) |
      |    3                              |    Just 2                         |
      |    4                              |    ghci                           |
      |    5                              | > Just 1 >>= \x -> return (x + 1) |
      |    6                              |    Just 2                         |
      |    7                              |    ghc                            |
      |    8                              | i> Nothing >>= \x -> Just (x + 1) |
      |                                   |    Nothing                        |
      |                                   |    ghc                            |
      |                                   | i> Just 1 >>= \x -> Just (x + 1)  |
      |                                   | >> Nothing >>= \y -> Just (y + 1) |
      |                                   |    Nothing                        |
      +-----------------------------------+-----------------------------------+

   最后一个例子中出现了>>
   Nothing，这时Nothing前的部分全都相当于没用，因为>>操作符的左右两边只要有一个出现Nothing，那整体就会是Nothing。这个特性可以用于在中途随时判断失误，只要有一处失误，结果就会是Nothing

   .. rubric:: ` <#-2>`__ []
      :name: -2

   列表也是一个单子：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Monad [] where        |
      |    2                              |                                   |
      |                                   |      xs >>= f = concat (map f xs) |
      +-----------------------------------+-----------------------------------+

   将这个函数应用在xs的每个值上，将返回的所有列表平铺成一个列表：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  ghci> [3,4,5] >>= \x -> [x,-x]   |
      |    3                              |    [3,-3,4,-4,5,-5]               |
      |    4                              |    ghci> [1,2] >>= \n -> ['a      |
      |                                   | ','b'] >>= \ch -> return (n,ch)   |
      |                                   |    [(                             |
      |                                   | 1,'a'),(1,'b'),(2,'a'),(2,'b')]   |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#IO-2>`__ IO
      :name: IO-2

   IO也是一个单子，但是实现方法比较深奥（逃

   .. rubric:: ` <#gt-r-2>`__ (->) r
      :name: gt-r-2

   (->)
   r也是一个单子，和Functor、Applicative一样，先分析它的>>=类型签名：

   (>>=) :: (-> r) a -> (a -> (-> r) b) -> (-> r) b

   (>>=) :: (r -> a) -> (a -> r -> b) -> (r -> b)

   也可以看出来，它接收两个函数f :: r -> a、g :: a -> r
   -> b，然后返回一个新的函数h :: r -> b

   那么函数h接收一个类型为r的参数，返回一个类型为b的值。所以先对输入应用f得到类型为a的中间值，然后再将这个值和输入参数一起传入函数g得到结果。所以函数h的定义应该是：

   \\x -> g (f x) x

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Monad ((->) r) where  |
      |    2                              |        f >>= g = \x -> g (f x) x  |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> (+3) >>= (+) $ 1         |
      |    2                              |    5                              |
      |    3                              |    ghci> (+) <$> (+3) <*> id $ 1  |
      |    4                              |    5                              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#do-notation>`__ do-notation
      :name: do-notation

   Haskell的do语句为链式的>>=应用提供了类似命令式（imperative
   style）的语法糖。比如 ``a >>= \x -> b >> c >>= \y -> d`` ：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    a >>= \x ->                    |
      |    2                              |    b >>                           |
      |    3                              |    c >>= \y ->                    |
      |    4                              |    d                              |
      +-----------------------------------+-----------------------------------+

   其中有abcd四个值，可以看出a中内容绑定到了x上，c中内容绑定到了y上。使用do语句来表示这个操作可以写成：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    do { x <- a                    |
      |    2                              |       ;      b                    |
      |    3                              |       ; y <- c                    |
      |    4                              |       ;      d                    |
      |    5                              |       }                           |
      +-----------------------------------+-----------------------------------+

   其中的大括号和分号可以省略不写（挤在一行时不能省略）。do语句也只是一个语法糖，它可以递归地转换成普通的Monad操作语句：

   -  ``do e`` ：e
   -  ``do { e; ... }`` ：e >> do { … }
   -  ``do { v <- e; ... }`` ：e >>= \\v -> do { … }
   -  ``do { let ...; ... }`` ：let … in do { … }

   .. rubric:: ` <#ApplicativeDo>`__ ApplicativeDo
      :name: ApplicativeDo

   比如如下一个do语句：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    do x <- a                      |
      |    2                              |       y <- b                      |
      |    3                              |       z <- c                      |
      |    4                              |       return (f x y z)            |
      +-----------------------------------+-----------------------------------+

   它可以转化成：

   a >>= \\x -> b >>= \\y -> c >>= \\z -> return (f x y
   z)

   但是经过观察可以发现，整个语句实际上将函数f应用在了三个上下文中的值上，所以仅用Applicative的<$>和<\*>完全可以实现：

   f <$> a <\*> b <\*> c

   而且在运行的时候Applicative的效率会比Monad高，所以Haskell会将do语句尽可能优先转换为Applicative的表示方法然后再计算

   .. rubric:: ` <#Monad-Laws>`__ Monad Laws
      :name: Monad-Laws

   #. ``Left identity`` ： return a >>= k ``=`` k a
   #. ``Right identity`` ：m >>= return ``=`` m
   #. ``Associativity`` ：(m >>= g) >>= h ``=`` m >>=
      (\\x -> g x >>= h)

   前两个定律很好理解：

   -  将a注入上下文之后绑定（bind）给函数k(:: a -> m
      a)，相当于直接将a直接传入函数k
   -  将已经包含在上下文中的值绑定给return函数，相当于保持不变

   第三个定律是结合律，把它写成更像结合律的表示方法是：

   (m >>= (\\x -> g x)) >>= h ``=`` m >>= (\\x -> g x >>=
   h)

   .. rubric:: ` <#组合运算符（-gt-gt-）形式>`__ 组合运算符（>=>）形式
      :name: 组合运算符（-gt-gt-）形式

   ``Control.Monad`` 模块中还定义了函数 ``>=>`` （Kleisli-composition
   operator）：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    infixr 1 >=>                   |
      |    2                              |    (>=>) :: Monad m => (a ->      |
      |    3                              |  m b) -> (b -> m c) -> (a -> m c) |
      |                                   |    f >=> g = \x -> f x >>= g      |
      +-----------------------------------+-----------------------------------+

   使用>=>运算符可以将两个用于绑定的函数结合在一起。用它表示的Monad定律更加清晰直观：

   #. ``Left identity`` ：return >=> f ``=`` f
   #. ``Right identity`` ：f >=> return ``=`` f
   #. ``Associativity`` ：(f >=> g) >=> h ``=`` f >=> (g
      >=> h)

   .. rubric:: ` <#do-notation形式>`__ do-notation形式
      :name: do-notation形式

   Monad的这三个定律还可以使用do语句来描述：

   #. ``Left identity`` ：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    do { x' <- return x;           |
         |    2                              |                                   |
         |    3                              |  f x'             =   do { f x }  |
         |                                   |       }                           |
         +-----------------------------------+-----------------------------------+

   #. ``Right identity`` ：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    do { x <- m;                   |
         |    2                              |                                   |
         |    3                              |     return x         =   do { m } |
         |                                   |       }                           |
         +-----------------------------------+-----------------------------------+

   #. ``Associativity`` ：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    d                              |
         |    2                              | o { y <- do { x <- m;       do {  |
         |    3                              | x <- m;              do { x <- m; |
         |    4                              |                                   |
         |    5                              |             f x                do |
         |                                   |  { y <- f x;            y <- f x; |
         |                                   |                 }           =     |
         |                                   |          g y         =        g y |
         |                                   |         g y                       |
         |                                   |            }                    } |
         |                                   |                                   |
         |                                   |    }                            } |
         +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Intuition-2>`__ Intuition
      :name: Intuition-2

   Monad也可以很自然地看成Applicative的升级版，比如Applicative的操作全部是固定的，而Monad的操作可以在中途突然改变

   同时Monad也完成了Functor和Applicative无法完成的操作。比如要用fmap和实现>>=函数（即达成操作
   m a -> (a -> m b) -> m b），先假设 f :: a -> m
   b，那么fmap f的类型就会是 m a -> m (m b)，将m
   a应用在fmap f上会得到结果m (m b)，而不是m
   b。但是目前只可以使用pure将一个值装入上下文中（a -> m
   a），而没有一个函数可以从上下文中提取值（m a ->
   a）。那么就需要定义一个新的函数来实现这个操作的效果（m
   (m b) -> m b）。因此Monad的另一个等效的定义方法是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    clas                           |
      |    2                              | s Applicative m => Monad' m where |
      |    3                              |        join :: m (m a) -> m a     |
      |    4                              |                                   |
      |    5                              |        (                          |
      |                                   | >>=) :: m a -> (a -> m b) -> m b  |
      |                                   |        x >>= f = join $ fmap f x  |
      +-----------------------------------+-----------------------------------+

   但是定义>>=函数会更为直观方便，所以Haskell采用了用>>=函数定义Monad的方法

   同时Haskell还提供了join函数的定义：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    j                              |
      |    2                              | oin :: Monad m => m (m a) -> m a  |
      |                                   |    join x = x >>= id              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#常用函数-2>`__ 常用函数
      :name: 常用函数-2

   .. rubric:: ` <#liftM-amp-ap>`__ liftM & ap
      :name: liftM-amp-ap

   liftM :: Monad m => (a -> b) -> m a -> m b

   ap :: Monad m => m (a -> b) -> m a -> m b

   所以liftM其实就是fmap、ap就是<\*>，但是老版本的GHC定义Monad并没有Functor、Applicative的约束，所以实现了liftM、ap，并且保留了这个名字

   因此一个单子也可以通过 ``pure = return`` 、 ``(<*>) = ap`` 直接成为应用函子的实例

   .. rubric:: ` <#sequence-1>`__ sequence
      :name: sequence-1

   sequence :: Monad m => [m a] -> m [a]

   sequence的作用显而易见，而且在IO部分也使用到了。但是这个版本是在 ``GHC.Base`` 模块中定义的，还有一个更广泛的使用Traversable的定义在 ``Data.Traversable`` 模块中

   .. rubric:: ` <#replicateM>`__ replicateM
      :name: replicateM

   replicateM :: Applicative m => Int -> m a -> m [a]

   .. rubric:: ` <#mapM-amp-forM>`__ mapM & forM
      :name: mapM-amp-forM

   mapM :: Monad m => (a -> m b) -> [a] -> m [b]

   forM :: Monad m => [a] -> (a -> m b) -> m [b]

   forM的用法在IO部分已经说过，mapM和forM都在 ``Data.Traversable`` 模块中有广泛版本

   还有一些其他的函数：filterM、zipWithM、foldM、forever，通过名字就可以看出用法，是将原来仅使用与列表的函数提升至可以适用于所有单子

   并且在函数名后加下划线，比如sequence\_、mapM\_，会忽略返回值（最终结果为 ``m ()`` ）

   .. rubric:: ` <#lt-lt-amp-gt-gt-amp-lt-lt>`__ =<< &
      >=> & <=<
      :name: lt-lt-amp-gt-gt-amp-lt-lt

   （ ``>=>`` 操作符在上面 `Monad
   Laws <#%E7%BB%84%E5%90%88%E8%BF%90%E7%AE%97%E7%AC%A6%EF%BC%88-gt-gt-%EF%BC%89%E5%BD%A2%E5%BC%8F>`__ 部分已经给出了定义）

   -  x >>= f ``=`` f =<< x
   -  f >=> g ``=`` g <=< f

   .. rubric:: ` <#MonadFail>`__ MonadFail
      :name: MonadFail

   MonadFail定义在 ``Control.Monad.Fail`` 模块中：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    c                              |
      |    2                              | lass Monad m => MonadFail m where |
      |                                   |        fail :: String -> m a      |
      +-----------------------------------+-----------------------------------+

   它只要求在Monad的基础上实现fail函数，接收一个字符串返回一个单子。这会使在do语句中产生错误时直接变为错误值（空值）使最终的返回值为错误值

   .. rubric:: ` <#MonadFail实例>`__ MonadFail实例
      :name: MonadFail实例

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance MonadFail Maybe where |
      |    2                              |        fail _ = Nothing           |
      |    3                              |                                   |
      |    4                              |    instance MonadFail [] where    |
      |    5                              |        fail _ = []                |
      |    6                              |                                   |
      |    7                              |    instance MonadFail IO where    |
      |    8                              |        fail = failIO              |
      +-----------------------------------+-----------------------------------+

   Maybe和[]的fail函数都与第一个参数无关，直接返回空值（Nothing、[]）；而IO的fail函数直接使用failIO，实现方法也是深奥（接着逃

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    exampleFail :: Maybe Char      |
      |    2                              |    exampleFail = do               |
      |    3                              |        (x:xs) <- Just ""          |
      |    4                              |        return x                   |
      |    5                              |                                   |
      |    6                              |    ghci> exampleFail              |
      |    7                              |    Nothing                        |
      +-----------------------------------+-----------------------------------+

   在这个例子的do语句中，在提取Just
   “”中的值时用了模式匹配，但是因为其内容为空字符串，x:xs匹配会出现错误，这时就会触发fail函数直接返回Nothing

   .. rubric:: ` <#MonadFail-Law>`__ MonadFail Law
      :name: MonadFail-Law

   -  fail s >>= m ``=`` fail s

   .. rubric:: ` <#Semigroup>`__ Semigroup
      :name: Semigroup

   半群（semigroup）是一个集合$S$，它需要指定一个二元运算符$\\oplus$，并且满足

   | $$
   | a\\oplus b \\in S\\quad a, b\\in S
   | $$

   以及结合（associative）律：

   | $$
   | (a\\oplus b)\\oplus c = a\\oplus (b\\oplus c)
   | $$

   这个二元运算符在Haskell的Semigroup中被定义为 ``<>`` 函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Semigroup a where        |
      |    2                              |        (<>) :: a -> a -> a        |
      |    3                              |                                   |
      |    4                              |                                   |
      |    5                              |       sconcat :: NonEmpty a -> a  |
      |    6                              |        s                          |
      |    7                              | concat (a :| as) = go a as where  |
      |    8                              |                                   |
      |    9                              |       go b (c:cs) = b <> go c cs  |
      |    10                             |            go b []     = b        |
      |                                   |                                   |
      |                                   |        sti                        |
      |                                   | mes :: Integarl b => b -> a -> a  |
      |                                   |        stimes = ...               |
      +-----------------------------------+-----------------------------------+

   除此之外还有 ``sconcat`` 和 ``stimes`` 函数，都给出了默认实现。对于列表，<>相当于(++)，stimes相当于concat
   . replicate：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> [1, 2] <> [3, 4]         |
      |    2                              |    [1,2,3,4]                      |
      |    3                              |    ghci> sc                       |
      |    4                              | oncat $ fromList [[1, 2], [3, 4]] |
      |    5                              |    [1,2,3,4]                      |
      |    6                              |    ghci> stimes 3 [1, 2]          |
      |                                   |    [1,2,1,2,1,2]                  |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Semigroup-Law>`__ Semigroup Law
      :name: Semigroup-Law

   -  (x <> y) <> z ``=`` x <> (y <> z)

   .. rubric:: ` <#补：NonEmpty>`__ 补：NonEmpty
      :name: 补：NonEmpty

   NonEmpty表示非空列表，定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data NonEmpt                   |
      |                                   | y a = a :| [a] deriving (Eq, Ord) |
      +-----------------------------------+-----------------------------------+

   使用一个元素和一个列表用 ``:|`` 连接就可以生成一个NonEmpty类型的列表

   ``Data.List.NonEmpty`` 模块中实现了很多普通列表有的函数，需要qualified
   import后调用，使用fromList、toList函数可以在普通列表和非空列表之间转换

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> import q                 |
      |    2                              | ualified Data.List.NonEmpty as NE |
      |    3                              |                                   |
      |    4                              | ghci> arr = NE.fromList [1, 2, 3] |
      |    5                              |    ghci> arr                      |
      |    6                              |    1 :| [2,3]                     |
      |    7                              |    ghci> NE.head arr              |
      |    8                              |    1                              |
      |                                   |    ghci> NE.tail arr              |
      |                                   |    [2,3]                          |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Monoid>`__ Monoid
      :name: Monoid

   幺半群（Monoid）是一个有单位元素$e$的半群，即$e$满足：

   | $$
   | e\\oplus x = x\\oplus e = x
   | $$

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    cla                            |
      |    2                              | ss Semigroup a => Monoid a where  |
      |    3                              |        mempty  :: a               |
      |    4                              |                                   |
      |    5                              |        mappend :: a -> a -> a     |
      |    6                              |        mappend = (<>)             |
      |    7                              |                                   |
      |    8                              |        mconcat :: [a] -> a        |
      |                                   |                                   |
      |                                   |   mconcat = foldr mappend mempty  |
      +-----------------------------------+-----------------------------------+

   可以看出Monoid要求了三个函数，其中最少只需要 ``mempty`` ，它直接返回一个值，表示单位元素。 ``mappend`` 即Semigroup中的<>运算符， ``mconcat`` 也提供了默认实现

   .. rubric:: ` <#实例>`__ 实例
      :name: 实例

   .. rubric:: ` <#a-1>`__ [a]
      :name: a-1

   因为Monoid的实例是一个具体类型，而不是像Functor等一样等类型构造器，所以[]并不是Monoid的实例，但是具体类型[a]是一个幺半群：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Semigroup [a] where   |
      |    2                              |        (<>) = (++)                |
      |    3                              |                                   |
      |    4                              |    instance Monoid [a] where      |
      |    5                              |        mempty = []                |
      |    6                              |        mconc                      |
      |                                   | at xss = [x | xs <- xss, x <- xs] |
      +-----------------------------------+-----------------------------------+

   列表的单位元素(mempty)就是空列表[]，运算符就是合并列表(++)，mconcat也用列表推导重新实现提高效率

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> mempty :: [Int]          |
      |    2                              |    []                             |
      |    3                              |    ghci> [1, 2] <> [3, 4]         |
      |    4                              |    [1,2,3,4]                      |
      |    5                              |    ghci> [1, 2] `mappend` [3, 4]  |
      |    6                              |    [1,2,3,4]                      |
      |    7                              |    ghci> mconcat [[1,2], [3,4]]   |
      |    8                              |    [1,2,3,4]                      |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Ordering>`__ Ordering
      :name: Ordering

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | instance Semigroup Ordering where |
      |    3                              |        LT <> _ = LT               |
      |    4                              |        EQ <> y = y                |
      |    5                              |        GT <> _ = GT               |
      |    6                              |                                   |
      |    7                              |    instance Monoid Ordering where |
      |                                   |        mempty = EQ                |
      +-----------------------------------+-----------------------------------+

   主要可以用于比较字典序：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> mconca                   |
      |    2                              | t (zipWith compare "abcd" "acbd") |
      |                                   |    LT                             |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Sum-amp-Product>`__ Sum & Product
      :name: Sum-amp-Product

   对于数字，加法和乘法都满足结合律，所以对于Num，有两种实现Monoid的方式，但是不能为同一类型设置两种实例方式，所以 ``Data.Monoid`` 中提供了两个包装器————Sum和Product：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype Sum a =                |
      |    2                              |  Sum {getSum :: a} deriving (...) |
      |                                   |    newtype Product a = Product    |
      |                                   |  {getProduct :: a} deriving (...) |
      +-----------------------------------+-----------------------------------+

   它们使用Sum或Product来包装起一个数字，可以通过getSum或getProduct来获取其中的值

   对于加法，二元操作为(+)，单位元素为0；对于乘法，二元操作为(\*)，单位元素为1:

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance                       |
      |    2                              |  Num a => Semigroup (Sum a) where |
      |    3                              |        (                          |
      |    4                              | <>) = coerce ((+) :: a -> a -> a) |
      |    5                              |                                   |
      |    6                              |    insta                          |
      |    7                              | nce Num a => Monoid (Sum a) where |
      |    8                              |        mempty = Sum 0             |
      |    9                              |                                   |
      |    10                             |    instance Num                   |
      |    11                             |  a => Semigroup (Product a) where |
      |                                   |        (                          |
      |                                   | <>) = coerce ((*) :: a -> a -> a) |
      |                                   |                                   |
      |                                   |    instance                       |
      |                                   | Num a => Monoid (Product a) where |
      |                                   |        mempty = Product 1         |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Sum 5 <> Sum 6 <> Sum 10 |
      |    2                              |    Sum {getSum = 21}              |
      |    3                              |    ghci> getSum                   |
      |    4                              | . mconcat . fmap Sum $ [5, 6, 10] |
      |    5                              |    21                             |
      |    6                              |    ghci> Pro                      |
      |    7                              | duct 5 <> Product 6 <> Product 10 |
      |    8                              |    Product {getProduct = 300}     |
      |                                   |    ghci> getProduct . mc          |
      |                                   | oncat . fmap Product $ [5, 6, 10] |
      |                                   |    300                            |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#All-amp-Any>`__ All & Any
      :name: All-amp-Any

   和数字一样，布尔值也有两种实现Monoid的方式，因此 ``Data.Monoid`` 模块中也提供了两个包装器，分别实现了这两种Monoid：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype All = All              |
      |    2                              | { getAll :: Bool } deriving (...) |
      |    3                              |                                   |
      |    4                              |    instance Semigroup All where   |
      |    5                              |            (<>) = coerce (&&)     |
      |    6                              |                                   |
      |    7                              |    instance Monoid All where      |
      |    8                              |            mempty = All True      |
      |    9                              |                                   |
      |    10                             |                                   |
      |    11                             |    newtype Any = Any              |
      |    12                             | { getAny :: Bool } deriving (...) |
      |    13                             |                                   |
      |    14                             |    instance Semigroup Any where   |
      |    15                             |            (<>) = coerce (||)     |
      |    16                             |                                   |
      |                                   |    instance Monoid Any where      |
      |                                   |            mempty = Any False     |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> getAll                   |
      |    2                              | (All True <> mempty <> All False) |
      |    3                              |    False                          |
      |    4                              |    ghci> getAll (mconcat (map (   |
      |    5                              | \x -> All (even x)) [2,4,6,7,8])) |
      |    6                              |    False                          |
      |    7                              |    ghci> getAny                   |
      |    8                              | (Any True <> mempty <> Any False) |
      |                                   |    True                           |
      |                                   |    ghci> getAny (mconcat (map (   |
      |                                   | \x -> Any (even x)) [2,4,6,7,8])) |
      |                                   |    True                           |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Monoid-a-gt-Maybe-a>`__ Monoid a =>
      Maybe a
      :name: Monoid-a-gt-Maybe-a

   如果a是一个(幺)半群，那么Maybe
   a也是一个幺半群，单位元就是Nothing：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Semigro               |
      |    2                              | up a => Semigroup (Maybe a) where |
      |    3                              |        Nothing <> b       = b     |
      |    4                              |        a       <> Nothing = a     |
      |    5                              |        J                          |
      |    6                              | ust a  <> Just b  = Just (a <> b) |
      |    7                              |                                   |
      |                                   |    instance Semi                  |
      |                                   | group a => Monoid (Maybe a) where |
      |                                   |        mempty = Nothing           |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Nothing <> Just "andy"   |
      |    2                              |    Just "andy"                    |
      |    3                              |    ghci> Just LT <> Nothing       |
      |    4                              |    Just LT                        |
      |    5                              |    gh                             |
      |    6                              | ci> Just (Sum 3) <> Just (Sum 4)  |
      |                                   |    Just (Sum {getSum = 7})        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#First-amp-Last>`__ First & Last
      :name: First-amp-Last

   对于Maybe也有两种实现Monoid的方法，即<>操作每次恒取左边和每次恒取右边（在没有Nothing的情况下），所以 ``Data.Monoid`` 模块中也提供了两个新的包装器：First和Last：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype First a = First { get  |
      |    2                              | First :: Maybe a } deriving (...) |
      |    3                              |                                   |
      |    4                              |    i                              |
      |    5                              | nstance Semigroup (First a) where |
      |    6                              |        First Nothing <> b = b     |
      |    7                              |        a             <> _ = a     |
      |    8                              |                                   |
      |    9                              |                                   |
      |    10                             |   instance Monoid (First a) where |
      |    11                             |        mempty = First Nothing     |
      |    12                             |                                   |
      |    13                             |                                   |
      |    14                             |    newtype Last a = Last { ge     |
      |    15                             | tLast :: Maybe a } deriving (...) |
      |    16                             |                                   |
      |    17                             |                                   |
      |    18                             | instance Semigroup (Last a) where |
      |                                   |        a <> Last Nothing = a      |
      |                                   |        _ <> b            = b      |
      |                                   |                                   |
      |                                   |    instance Monoid (Last a) where |
      |                                   |        mempty = Last Nothing      |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> getFir                   |
      |    2                              | st (First (Just "hello") <> First |
      |    3                              |  Nothing <> First (Just "world")) |
      |    4                              |    Just "hello"                   |
      |    5                              |    ghci> ge                       |
      |    6                              | tLast (Last (Just "hello") <> Las |
      |    7                              | t Nothing <> Last (Just "world")) |
      |    8                              |    Just "world"                   |
      |                                   |    g                              |
      |                                   | hci> getFirst . mconcat . map Fir |
      |                                   | st $ [Nothing, Just 9, Just 10]   |
      |                                   |    Just 9                         |
      |                                   |                                   |
      |                                   |  ghci> getLast . mconcat . map La |
      |                                   | st $ [Nothing, Just 9, Just 10]   |
      |                                   |    Just 10                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Min-amp-Max>`__ Min & Max
      :name: Min-amp-Max

   对于有界的类型，也有两种实现Monoid的方式，每次二元操作都取最小或最大。 ``Data.Semigroup`` 模块中提供了两个包装其器：Min和Max：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype Min a = M              |
      |    2                              | in { getMin :: a } deriving (...) |
      |    3                              |                                   |
      |    4                              |    instance                       |
      |    5                              |  Ord a => Semigroup (Min a) where |
      |    6                              |        (                          |
      |    7                              | <>) = coerce (min :: a -> a -> a) |
      |    8                              |                                   |
      |    9                              |    instance (Ord a, B             |
      |    10                             | ounded a) => Monoid (Min a) where |
      |    11                             |        mempty = maxBound          |
      |    12                             |                                   |
      |    13                             |                                   |
      |    14                             |    newtype Max a = M              |
      |    15                             | ax { getMax :: a } deriving (...) |
      |    16                             |                                   |
      |                                   |    instance                       |
      |                                   |  Ord a => Semigroup (Max a) where |
      |                                   |        (                          |
      |                                   | <>) = coerce (max :: a -> a -> a) |
      |                                   |                                   |
      |                                   |    instance (Ord a, B             |
      |                                   | ounded a) => Monoid (Max a) where |
      |                                   |        mempty = minBound          |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> Min 3 <> Min 5           |
      |    2                              |    Min {getMin = 3}               |
      |    3                              |    ghci> Max 3 <> Max 5           |
      |    4                              |    Max {getMax = 5}               |
      |    5                              |    ghci> getMin . m               |
      |    6                              | concat . map Min $ [1,2,3] :: Int |
      |    7                              |    1                              |
      |    8                              |    ghci> getMax . m               |
      |                                   | concat . map Max $ [1,2,3] :: Int |
      |                                   |    3                              |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#元组>`__ 元组
      :name: 元组

   当元组内的所有元素都是幺半群时，整个元组也是一个幺半群：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance (Semigroup a, Semig   |
      |    2                              | roup b) => Semigroup (a, b) where |
      |    3                              |                                   |
      |    4                              |  (a,b) <> (a',b') = (a<>a',b<>b') |
      |    5                              |            stimes n               |
      |    6                              |  (a,b) = (stimes n a, stimes n b) |
      |                                   |                                   |
      |                                   |    instance (Monoid a             |
      |                                   | , Monoid b) => Monoid (a,b) where |
      |                                   |                                   |
      |                                   |         mempty = (mempty, mempty) |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci>                          |
      |    2                              | mconcat $ map (\x -> (Min x, Max  |
      |                                   | x)) [1..10] :: (Min Int, Max Int) |
      |                                   |    (Mi                            |
      |                                   | n {getMin = 1},Max {getMax = 10}) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Monoid-Laws>`__ Monoid Laws
      :name: Monoid-Laws

   -  mempty <> x ``=`` x
   -  x <> mempty ``=`` x
   -  (x <> y) <> z ``=`` x <> (y <> z)

   .. rubric:: ` <#Monoidal-classes>`__ Monoidal classes
      :name: Monoidal-classes

   Applicative、Monad、Arrow都有有幺半群性质的子类型类，分别是Alternative、MonadPlus、ArrowPlus

   .. rubric:: ` <#Alternative>`__ Alternative
      :name: Alternative

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class App                      |
      |    2                              | licative f => Alternative f where |
      |    3                              |        -- | The identity of '<|>' |
      |    4                              |        empty :: f a               |
      |    5                              |        --                         |
      |    6                              | | An associative binary operation |
      |    7                              |        (<|>) :: f a -> f a -> f a |
      |    8                              |                                   |
      |    9                              |        some :: f a -> f [a]       |
      |    10                             |                                   |
      |                                   |     some v = (:) <$> v <*> many v |
      |                                   |        many :: f a -> f [a]       |
      |                                   |                                   |
      |                                   |       many v = some v <|> pure [] |
      +-----------------------------------+-----------------------------------+

   其中empty是幺半群中的单位元素，<\|>是幺半群中的二元运算符。some和many是两个函数（ [STRIKEOUT:意义还不懂] ）

   .. rubric:: ` <#Alternative实例>`__ Alternative实例
      :name: Alternative实例

   .. rubric:: ` <#-3>`__ []
      :name: -3

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Alternative [] where  |
      |    2                              |        empty = []                 |
      |    3                              |        (<|>) = (++)               |
      +-----------------------------------+-----------------------------------+

   和Monoid一样，单位元素是空列表，二元运算是列表合并

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | ghci> [1,2,3] <|> empty <|> [4,5] |
      |    3                              |    [1,2,3,4,5]                    |
      |    4                              |    ghci> some []                  |
      |    5                              |    []                             |
      |    6                              |    ghci> many []                  |
      |                                   |    [[]]                           |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Maybe-3>`__ Maybe
      :name: Maybe-3

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  instance Alternative Maybe where |
      |    3                              |        empty = Nothing            |
      |    4                              |        Nothing <|> r = r          |
      |                                   |        l       <|> _ = l          |
      +-----------------------------------+-----------------------------------+

   Maybe作为Alternative的单位元素是Nothing，二元运算是始终取左边（当左边不为Nothing时）

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghc                            |
      |    2                              | i> Nothing <|> Just 1 <|> Just 2  |
      |    3                              |    Just 1                         |
      |    4                              |    ghci> some Nothing             |
      |    5                              |    Nothing                        |
      |    6                              |    ghci> many Nothing             |
      |                                   |    Just []                        |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#ZipList-1>`__ ZipList
      :name: ZipList-1

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    i                              |
      |    2                              | nstance Alternative ZipList where |
      |    3                              |       empty = ZipList []          |
      |                                   |                                   |
      |                                   |    ZipList xs <|> ZipList ys = Zi |
      |                                   | pList (xs ++ drop (length xs) ys) |
      +-----------------------------------+-----------------------------------+

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    <>getZipList $ Zi              |
      |    2                              | pList [1,2] <|> ZipList [3,4,5,6] |
      |    3                              |    [1,2,5,6]                      |
      |    4                              |    <>getZipList $ ZipLis          |
      |                                   | t [1,2,3,4] <|> ZipList [3,4,5,6] |
      |                                   |    [1,2,3,4]                      |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Alternative-Laws>`__ Alternative Laws
      :name: Alternative-Laws

   -  ``Monoid laws``:

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    empty <|> x = x                |
         |    2                              |    x <|> empty = x                |
         |    3                              |                                   |
         |                                   | (x <|> y) <|> z = x <|> (y <|> z) |
         +-----------------------------------+-----------------------------------+

   -  ``Left zero law`` ：empty <\*> f ``=`` empty
      以上的定律是都满足都，下面的定律只有部分满足：
   -  ``Right zero law`` ：f <\*> empty ``=`` empty
      （大部分包括Maybe、[]满足，IO不满足）
   -  ``Left distribution`` ：(a <\|> b) <\*> c ``=`` (a
      <\*> c) <\|> (b <\*> c)
      （Maybe、[]满足，IO及大部分parsers不满足）
   -  ``Right distribution`` ：a <\*> (b <\|> c) ``=``
      (a <\*> b) <\|> (a <\*> c)
      （大部分不满足，但Maybe满足）
   -  ``Left catch`` ：(pure a) <\|> x = pure a
      （Maybe、IO、parsers满足，但[]不满足）

   .. rubric:: ` <#常用函数-3>`__ 常用函数
      :name: 常用函数-3

   -  ``asum`` :: (Foldable t, Alternative f) => t (f a)
      -> f a，相当于foldr (<\|>) empty：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    ghc                            |
         |    2                              | i> asum [Nothing, Just 5, Just 3] |
         |    3                              |    Just 5                         |
         |    4                              |    ghci> asum [[2],[3],[4,5]]     |
         |                                   |    [2,3,4,5]                      |
         +-----------------------------------+-----------------------------------+

   -  ``guard`` :: (Alternative f) => Bool -> f ()：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    guard True  = pure ()          |
         |    2                              |    guard False = empty            |
         +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#MonadPlus>`__ MonadPlus
      :name: MonadPlus

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class (Alternative             |
      |    2                              |  m, Monad m) => MonadPlus m where |
      |    3                              |       mzero :: m a                |
      |    4                              |       mzero = empty               |
      |    5                              |                                   |
      |    6                              |       mplus :: m a -> m a -> m a  |
      |                                   |       mplus = (<|>)               |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#MonadPlus实例>`__ MonadPlus实例
      :name: MonadPlus实例

   []、Maybe都是MonadPlus的实例，mzero和mplus都由Alternative实现

   .. rubric:: ` <#MonadPlus-Laws>`__ MonadPlus Laws
      :name: MonadPlus-Laws

   -  ``Monoid laws``
   -  ``Left zero`` ：mzero >>= f ``=`` mzero
   -  ``Right zero`` ：m >> mzero ``=`` mzero

   .. rubric:: ` <#常用函数-4>`__ 常用函数
      :name: 常用函数-4

   -  ``msum`` = asum
   -  ``mfilter`` ：

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |    mfilter p ma = do              |
         |    2                              |        a <- ma                    |
         |    3                              |                                   |
         |                                   |   if p a then return a else mzero |
         +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#ArrowPlus>`__ ArrowPlus
      :name: ArrowPlus

   ArrowZero和ArrowPlus分别为Arrow设置了Monoid中的单位元素和二元运算符，使之成为了一个幺半群：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class                          |
      |    2                              |  Arrow arr => ArrowZero arr where |
      |    3                              |        zeroArrow :: b `arr` c     |
      |    4                              |                                   |
      |    5                              |    class Arr                      |
      |                                   | owZero arr => ArrowPlus arr where |
      |                                   |        (<+>) :: (b `arr`          |
      |                                   |  c) -> (b `arr` c) -> (b `arr` c) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#一些其它typeclasses>`__ 一些其它typeclasses
      :name: 一些其它typeclasses

   .. rubric:: ` <#Foldable>`__ Foldable
      :name: Foldable

   Foldable是表示可以折叠（fold）的类型类，在 ``Data.Foldable`` 中定义，这使得和fold相关的函数可以用在任意Foldable的实例类型上。它的定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Foldable t where         |
      |    2                              |                                   |
      |    3                              |  fold     :: Monoid m => t m -> m |
      |    4                              |        foldMap  ::                |
      |    5                              |  Monoid m => (a -> m) -> t a -> m |
      |    6                              |        foldMap' ::                |
      |    7                              |  Monoid m => (a -> m) -> t a -> m |
      |    8                              |        foldr                      |
      |    9                              | :: (a -> b -> b) -> b -> t a -> b |
      |    10                             |        foldr'                     |
      |    11                             | :: (a -> b -> b) -> b -> t a -> b |
      |    12                             |        foldl                      |
      |    13                             | :: (b -> a -> b) -> b -> t a -> b |
      |    14                             |        foldl'                     |
      |    15                             | :: (b -> a -> b) -> b -> t a -> b |
      |    16                             |        fold                       |
      |    17                             | r1   :: (a -> a -> a) -> t a -> a |
      |    18                             |        fold                       |
      |    19                             | l1   :: (a -> a -> a) -> t a -> a |
      |                                   |        toList   :: t a -> [a]     |
      |                                   |        null     :: t a -> Bool    |
      |                                   |        length   :: t a -> Int     |
      |                                   |        ele                        |
      |                                   | m     :: Eq a => a -> t a -> Bool |
      |                                   |                                   |
      |                                   |     maximum  :: Ord a => t a -> a |
      |                                   |                                   |
      |                                   |     minimum  :: Ord a => t a -> a |
      |                                   |                                   |
      |                                   |     sum      :: Num a => t a -> a |
      |                                   |                                   |
      |                                   |     product  :: Num a => t a -> a |
      |                                   |                                   |
      |                                   |   {-# MINIMAL foldMap | foldr #-} |
      +-----------------------------------+-----------------------------------+

   最少只要实现 ``foldr`` 和 ``foldMap`` 其中之一就可以使一个类型成为Foldable的实例，其它的函数都有由这两个函数提供的默认实现，而且这两个函数之间也有相互实现。因此只要实现foldr或foldMap一个函数就可以使用所有其它Foldable中的函数。foldr函数在前面已经有学过，foldMap的例子是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> foldMap Sum [1, 3, 5]    |
      |    2                              |    Sum {getSum = 9}               |
      |    3                              |                                   |
      |    4                              |   ghci> foldMap Product [1, 3, 5] |
      |    5                              |    Product {getProduct = 15}      |
      |    6                              |    ghci                           |
      |                                   | > foldMap (replicate 3) [1, 2, 3] |
      |                                   |    [1,1,1,2,2,2,3,3,3]            |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Foldable实例>`__ Foldable实例
      :name: Foldable实例

   []、Maybe、Either a、(,)
   a都是Foldable的实例，标准容器库中的Map、Set等也都是Foldable的实例。也可以自定义二叉树类型，并使其成为Foldable的实例：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    data Tree a = Empty |          |
      |    2                              | Leaf a | Node (Tree a) a (Tree a) |
      |    3                              |                                   |
      |    4                              |    instance Foldable Tree where   |
      |    5                              |        foldMap :: Mo              |
      |    6                              | noid m => (a -> m) -> Tree a -> m |
      |    7                              |                                   |
      |                                   |   foldMap f Empty        = mempty |
      |                                   |                                   |
      |                                   |      foldMap f (Leaf x)     = f x |
      |                                   |        foldMa                     |
      |                                   | p f (Node l k r) = foldMap f l `m |
      |                                   | append` f k `mappend` foldMap f r |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#常用函数-5>`__ 常用函数
      :name: 常用函数-5

   -  ``asum`` :: (Alternative f, Foldable t) => t (f a)
      -> f a，用<\|>逐个连接所有元素
   -  ``sequenceA_`` :: (Applicative f, Foldable t) => t
      (f a) -> f ()，由于丢弃结果，所以Foldable
      t就可以满足；因此不同于sequenceA需要Traversable
   -  ``traverse_`` :: (Applicative f, Foldable t) => (a
      -> f b) -> t a -> f ()
   -  ``for_`` :: (Applicative f, Foldable t) => t a ->
      (a -> f b) -> f ()

   .. rubric:: ` <#Traversable>`__ Traversable
      :name: Traversable

   Traversable是表示可遍历的类型类，在 ``Data.Traversable`` 模块中定义，它是Foldable的升级版，同时也是一个Functor，它的定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class (Functor t, Fo           |
      |    2                              | ldable t) => Traversable t where  |
      |    3                              |        traverse  :: Applicative   |
      |    4                              | f => (a -> f b) -> t a -> f (t b) |
      |    5                              |        sequenceA :: Ap            |
      |    6                              | plicative f => t (f a) -> f (t a) |
      |                                   |        mapM      ::       Monad   |
      |                                   | m => (a -> m b) -> t a -> m (t b) |
      |                                   |        sequence  ::               |
      |                                   |     Monad m => t (m a) -> m (t a) |
      |                                   |        {-#                        |
      |                                   |  MINIMAL traverse | sequenceA #-} |
      +-----------------------------------+-----------------------------------+

   最少只需要实现traverse函数或者sequenceA函数。其中各个函数的功能通过类型签名也都能推测出来。但是其中mapM就是traverse，sequence就是sequenceA，它们存在只是历史遗留（

   .. rubric:: ` <#Traversable实例>`__ Traversable实例
      :name: Traversable实例

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  instance Traversable Maybe where |
      |    3                              |                                   |
      |    4                              | traverse _ Nothing = pure Nothing |
      |    5                              |        t                          |
      |    6                              | raverse f (Just x) = Just <$> f x |
      |    7                              |                                   |
      |    8                              |    instance Traversable [] where  |
      |    9                              |        {-# INLINE traverse #-}    |
      |    10                             |        tr                         |
      |    11                             | averse f = foldr cons_f (pure []) |
      |    12                             |          where                    |
      |    13                             | cons_f x ys = liftA2 (:) (f x) ys |
      |    14                             |                                   |
      |    15                             |    inst                           |
      |    16                             | ance Traversable (Either a) where |
      |    17                             |        tr                         |
      |                                   | averse _ (Left x) = pure (Left x) |
      |                                   |        tra                        |
      |                                   | verse f (Right y) = Right <$> f y |
      |                                   |                                   |
      |                                   |    i                              |
      |                                   | nstance Traversable ((,) a) where |
      |                                   |                                   |
      |                                   | traverse f (x, y) = (,) x <$> f y |
      |                                   |                                   |
      |                                   |    ...                            |
      +-----------------------------------+-----------------------------------+

   上面的Tree也可以成为Traversable的实例：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Functor Tree where    |
      |    2                              |        fma                        |
      |    3                              | p :: (a -> b) -> Tree a -> Tree b |
      |    4                              |                                   |
      |    5                              |   fmap     g Empty        = Empty |
      |    6                              |        fma                        |
      |    7                              | p     g (Leaf x)     = Leaf $ g x |
      |    8                              |        fmap                       |
      |    9                              |  g (Node l x r) = Node (fmap g l) |
      |    10                             |                                   |
      |    11                             |                             (g x) |
      |    12                             |                                   |
      |    13                             |                        (fmap g r) |
      |    14                             |                                   |
      |    15                             |                                   |
      |                                   |   instance Traversable Tree where |
      |                                   |                                   |
      |                                   |   traverse :: Applicative f => (a |
      |                                   |  -> f b) -> Tree a -> f (Tree b)  |
      |                                   |        tra                        |
      |                                   | verse g Empty        = pure Empty |
      |                                   |        trave                      |
      |                                   | rse g (Leaf x)     = Leaf <$> g x |
      |                                   |        traverse g (No             |
      |                                   | de l x r) = Node <$> traverse g l |
      |                                   |                                   |
      |                                   |                           <*> g x |
      |                                   |                                   |
      |                                   |                  <*> traverse g r |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Traversable-Laws>`__ Traversable Laws
      :name: Traversable-Laws

   Traversable也有两条定律：

   #. traverse Identity ``=`` Identity
   #. traverse (Compose . fmap g . f) ``=`` Compose .
      fmap (traverse g) . traverse f

   其中Identity和Compose分别定义在 ``Data.Functor.Identity`` 和 ``Data.Functor.Compose`` 两个模块中：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              |  newtype Identity a = Identity {  |
      |                                   | runIdentity :: a } deriving (...) |
      |                                   |    newtyp                         |
      |                                   | e Compose f g a = Compose { getCo |
      |                                   | mpose :: f (g a) } deriving (...) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Bifunctor>`__ Bifunctor
      :name: Bifunctor

   Functor的实例的kind都是\* ->
   \*，因此fmap只能将一个函数映射到一个值上。而Bifunctor（在 ``Data.Bifunctor`` 模块中定义）的实例的kind是\*
   -> \* ->
   \*，而且它的bimap可以同时将两个函数映射到两个值上：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Bifunctor p where        |
      |    2                              |        bimap  :: (a ->            |
      |    3                              | b) -> (c -> d) -> p a c -> p b d  |
      |    4                              |        firs                       |
      |    5                              | t  :: (a -> b) -> p a c -> p b c  |
      |                                   |        seco                       |
      |                                   | nd :: (b -> c) -> p a b -> p a c  |
      |                                   |        {-#                        |
      |                                   | MINIMAL bimap | first, second #-} |
      +-----------------------------------+-----------------------------------+

   同时bimap和first,second之间也可以相互转换：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    bimap f g = first f . second g |
      |    2                              |                                   |
      |    3                              |    first  f = bimap f id          |
      |    4                              |    second g = bimap id g          |
      +-----------------------------------+-----------------------------------+

   对于Functor，((,) e)和Either
   e才是Functor的实例，因为他们是\* ->
   \*。但是对于Bifunctor，(,)和Either就是Bifunctor的实例：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghc                            |
      |    2                              | i> bimap (+1) length (4, [1,2,3]) |
      |                                   |    (5,3)                          |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Bifunctor-Laws>`__ Bifunctor Laws
      :name: Bifunctor-Laws

   #. bimap id id ``=`` id
      first id ``=`` id
      second id ``=`` id
   #. bimap (f . g) (h . i) ``=`` bimap f h . bimap g i
      first (f . g) ``=`` first f . first g
      second (f . g) ``=`` second f . second g

   .. rubric:: ` <#Category>`__ Category
      :name: Category

   Haskell中的Category将一般的函数推广到了普遍的态射上，它在 ``Control.Category`` 模块中，定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    class Category cat where       |
      |    2                              |        id  :: cat a a             |
      |    3                              |        (.)                        |
      |                                   |  :: cat b c -> cat a b -> cat a c |
      +-----------------------------------+-----------------------------------+

   它的实例有 ``(->)`` 和 ``Kleisli m`` ：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Category (->) where   |
      |    2                              |        id = GHC.Base.id           |
      |    3                              |        (.) = (GHC.Base..)         |
      +-----------------------------------+-----------------------------------+

   Kleisli是一个范畴，用来表示函数a -> m
   b，Haskell中，它在 ``Control.Arrow`` 模块中定义：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    newtype Kleisli m a b = K      |
      |    2                              | leisli { runKleisli :: a -> m b } |
      |    3                              |                                   |
      |    4                              |    instance Mona                  |
      |    5                              | d m => Category (Kleisli m) where |
      |    6                              |        id :: Kleisli m a a        |
      |    7                              |        id = Kleisli return        |
      |    8                              |                                   |
      |                                   |        (.) :: Kleisli m b c       |
      |                                   | -> Kleisli m a b -> Kleisli m a c |
      |                                   |        Kleisli                    |
      |                                   | g . Kleisli h = Kleisli (h >=> g) |
      +-----------------------------------+-----------------------------------+

   Category要满足的定律只有id是(.)操作的单位元，以及(.)操作是可结合的

   同时Category还提供了两个函数 ``<<<`` 和 ``>>>`` ：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    (<<<) :: Category cat          |
      |    2                              |  => cat b c -> cat a b -> cat a c |
      |    3                              |    (<<<) = (.)                    |
      |    4                              |                                   |
      |    5                              |    (>>>) :: Category cat          |
      |                                   | => cat a b -> cat b c -> cat a c  |
      |                                   |    f >>> g = g . f                |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Arrow>`__ Arrow
      :name: Arrow

   Arrow将函数进一步抽象化，它定义在 ``Control.Arrow`` 模块中：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    c                              |
      |    2                              | lass Category a => Arrow a where  |
      |    3                              |                                   |
      |    4                              |      arr    :: (b -> c) -> a b c  |
      |    5                              |        f                          |
      |    6                              | irst  :: a b c -> a (b, d) (c, d) |
      |    7                              |        s                          |
      |                                   | econd :: a b c -> a (d, b) (d, c) |
      |                                   |        (***)  :: a b              |
      |                                   | c -> a b' c' -> a (b, b') (c, c') |
      |                                   |        (&&&)                      |
      |                                   | :: a b c -> a b c' -> a b (c, c') |
      |                                   |        {-#                        |
      |                                   |  MINIMAL arr, (first | (***)) #-} |
      +-----------------------------------+-----------------------------------+

   其中：

   -  ``arr`` 函数将一个函数变成一个Arrow
   -  ``first`` 函数将一个Arrow变成一个二元组间的Arrow，且只会对一个元素进行操作，第二个元素保持不变
   -  ``second`` 函数与first相反，第一个元素保持不变
   -  ``***`` 函数是Arrow之间的parallel
      composition，对于函数: (g \**\* h) (x, y) = (g x, h
      y)
   -  ``&&&`` 函数是Arrow之间的fanout
      composition，对于函数: (g &&& h) x = (g x, h x)

   它的实例也有(->)和Kleisli：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    instance Arrow (->) where      |
      |    2                              |      arr :: (b -> c) -> (b -> c)  |
      |    3                              |      arr g = g                    |
      |    4                              |                                   |
      |    5                              |      firs                         |
      |    6                              | t :: (b -> c) -> ((b,d) -> (c,d)) |
      |    7                              |      first g (x,y) = (g x, y)     |
      |    8                              |                                   |
      |    9                              |    instance M                     |
      |    10                             | onad m => Arrow (Kleisli m) where |
      |    11                             |                                   |
      |    12                             |  arr :: (b -> c) -> Kleisli m b c |
      |    13                             |      arr f = Kleisli (return . f) |
      |    14                             |                                   |
      |                                   |      first :: Kleis               |
      |                                   | li m b c -> Kleisli m (b,d) (c,d) |
      |                                   |      first (Kleisli f) =          |
      |                                   |  Kleisli ( ~(b,d) -> do c <- f b |
      |                                   |                                   |
      |                                   |                    return (c,d) ) |
      +-----------------------------------+-----------------------------------+

   常用函数：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    returnA :: Arrow a => a b b    |
      |    2                              |    returnA = arr id               |
      |    3                              |                                   |
      |    4                              |    (^>>) :: Arro                  |
      |    5                              | w a => (b -> c) -> a c d -> a b d |
      |    6                              |    f ^>> a = arr f >>> a          |
      |    7                              |                                   |
      |    8                              |    (>>^) :: Arro                  |
      |    9                              | w a => a b c -> (c -> d) -> a b d |
      |    10                             |    a >>^ f = a >>> arr f          |
      |    11                             |                                   |
      |    12                             |    (<<^) :: Arro                  |
      |    13                             | w a => a c d -> (b -> c) -> a b d |
      |    14                             |    a <<^ f = a <<< arr f          |
      |                                   |                                   |
      |                                   |    (^<<) :: Arro                  |
      |                                   | w a => (c -> d) -> a b c -> a b d |
      |                                   |    f ^<< a = arr f <<< a          |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Arrow-notation>`__ Arrow notation
      :name: Arrow-notation

   类似do-notation，Arrow也提供了一套方便的语句：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    proc x -> do                   |
      |    2                              |        y <- action1 -< ...        |
      |    3                              |        z <- action2 -< ...        |
      |    4                              |        returnA -< ...             |
      +-----------------------------------+-----------------------------------+

   其中proc代替了lambda表达式中的斜杠\\，-<右边的为输入，左边的为接收输入的函数。比如，下面三种写法达成的效果是一样的：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    f :: Int -> (Int, Int)         |
      |    2                              |    f = \x ->                      |
      |    3                              |        let y  = 2 * x             |
      |    4                              |            z1 = y + 3             |
      |    5                              |            z2 = y - 5             |
      |    6                              |        in (z1, z2)                |
      |    7                              |    -- ghci> f 10                  |
      |    8                              |    -- (23,15)                     |
      |    9                              |                                   |
      |    10                             |                                   |
      |    11                             |  fM :: Int -> Identity (Int, Int) |
      |    12                             |    fM = \x -> do                  |
      |    13                             |        y  <- return (2 * x)       |
      |    14                             |        z1 <- return (y + 3)       |
      |    15                             |        z2 <- return (y - 5)       |
      |    16                             |        return (z1, z2)            |
      |    17                             |                                   |
      |    18                             |    -- ghci> runIdentity (fM 10)   |
      |    19                             |    -- (23,15)                     |
      |    20                             |                                   |
      |    21                             |    fA :: Int -> (Int, Int)        |
      |    22                             |    fA = proc x -> do              |
      |    23                             |        y  <- (2 *) -< x           |
      |    24                             |        z1 <- (+ 3) -< y           |
      |    25                             |        z2 <- (subtract 5) -< y    |
      |    26                             |        returnA -< (z1, z2)        |
      |    27                             |                                   |
      |    28                             |    -- ghci> fA 10                 |
      |                                   |    -- (23,15)                     |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#ArrowChoice>`__ ArrowChoice
      :name: ArrowChoice

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    cla                            |
      |    2                              | ss Arrow a => ArrowChoice a where |
      |    3                              |        left :: a b                |
      |    4                              |  c -> a (Either b d) (Either c d) |
      |    5                              |        left = (+++ id)            |
      |    6                              |                                   |
      |    7                              |        right :: a b               |
      |    8                              |  c -> a (Either d b) (Either d c) |
      |    9                              |        right = (id +++)           |
      |    10                             |                                   |
      |    11                             |        (+++) :: a b c -> a b' c'  |
      |    12                             |  -> a (Either b b') (Either c c') |
      |    13                             |        f +++ g = left f >>> arr   |
      |    14                             |  mirror >>> left g >>> arr mirror |
      |    15                             |          where                    |
      |    16                             |            m                      |
      |    17                             | irror :: Either x y -> Either y x |
      |    18                             |                                   |
      |    19                             |         mirror (Left x) = Right x |
      |    20                             |                                   |
      |    21                             |         mirror (Right y) = Left y |
      |    22                             |                                   |
      |    23                             |        (|||) :: a                 |
      |    24                             |  b d -> a c d -> a (Either b c) d |
      |    25                             |                                   |
      |    26                             |   f ||| g = f +++ g >>> arr untag |
      |    27                             |          where                    |
      |    28                             |            untag (Left x) = x     |
      |    29                             |            untag (Right y) = y    |
      |    30                             |                                   |
      |    31                             |                                   |
      |                                   |   instance ArrowChoice (->) where |
      |                                   |        left f = f +++ id          |
      |                                   |        right f = id +++ f         |
      |                                   |        f +                        |
      |                                   | ++ g = (Left . f) ||| (Right . g) |
      |                                   |        (|||) = either             |
      |                                   |                                   |
      |                                   |    instance Monad m               |
      |                                   |  => ArrowChoice (Kleisli m) where |
      |                                   |        left f = f +++ arr id      |
      |                                   |        right f = arr id +++ f     |
      |                                   |        f +++ g = (f >>            |
      |                                   | > arr Left) ||| (g >>> arr Right) |
      |                                   |        Kleisli f |||              |
      |                                   |  Kleisli g = Kleisli (either f g) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#ArrowZero-amp-ArrowPlus>`__ ArrowZero
      & ArrowPlus
      :name: ArrowZero-amp-ArrowPlus

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    c                              |
      |    2                              | lass Arrow a => ArrowZero a where |
      |    3                              |        zeroArrow :: a b c         |
      |    4                              |                                   |
      |    5                              |    class                          |
      |    6                              |  ArrowZero a => ArrowPlus a where |
      |    7                              |                                   |
      |    8                              |  (<+>) :: a b c -> a b c -> a b c |
      |    9                              |                                   |
      |    10                             |    instance MonadPlus             |
      |    11                             |  m => ArrowZero (Kleisli m) where |
      |                                   |                                   |
      |                                   | zeroArrow = Kleisli (\_ -> mzero) |
      |                                   |                                   |
      |                                   |    instance MonadPlus             |
      |                                   |  m => ArrowPlus (Kleisli m) where |
      |                                   |        Kleisli f <+> Kleisli g    |
      |                                   | = Kleisli (\x -> f x `mplus` g x) |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#例子>`__ 例子
      :name: 例子

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    ghci> runK                     |
      |    2                              | leisli ((Kleisli (\x -> [x * 2])) |
      |    3                              |  <+> (Kleisli (\x -> [x, -x]))) 2 |
      |    4                              |    [4,2,-2]                       |
      |    5                              |                                   |
      |    6                              |   ghci> either (+2) (*3) (Left 3) |
      |    7                              |    5                              |
      |    8                              |                                   |
      |    9                              |  ghci> either (+2) (*3) (Right 3) |
      |    10                             |    9                              |
      |    11                             |    ghci> (+2) ||| (*3) $ (Left 3) |
      |    12                             |    5                              |
      |    13                             |    ghci> (+2) +++ (*3) $ (Left 3) |
      |    14                             |    Left 5                         |
      |    15                             |                                   |
      |    16                             |   ghci> (+2) ||| (*3) $ (Right 3) |
      |    17                             |    9                              |
      |    18                             |                                   |
      |    19                             |   ghci> (+2) +++ (*3) $ (Right 3) |
      |    20                             |    Right 9                        |
      |    21                             |    ghci> left (+2) (Left 3)       |
      |    22                             |    Left 5                         |
      |    23                             |    ghci> right (*3) (Right 3)     |
      |    24                             |    Right 9                        |
      |    25                             |    ghci> left (+2) (Right 3)      |
      |    26                             |    Right 3                        |
      |    27                             |    ghci> right (*3) (Left 3)      |
      |    28                             |    Left 3                         |
      |    29                             |    ghci> runKleisli               |
      |    30                             | ((Kleisli (\x -> [x * 2])) ||| (K |
      |                                   | leisli (\x -> [x, -x]))) (Left 3) |
      |                                   |    [6]                            |
      |                                   |    ghci> runKleisli (             |
      |                                   | (Kleisli (\x -> [x * 2])) ||| (Kl |
      |                                   | eisli (\x -> [x, -x]))) (Right 3) |
      |                                   |    [3,-3]                         |
      |                                   |    ghci> runKleisli               |
      |                                   | ((Kleisli (\x -> [x * 2])) +++ (K |
      |                                   | leisli (\x -> [x, -x]))) (Left 3) |
      |                                   |    [Left 6]                       |
      |                                   |    ghci> runKleisli (             |
      |                                   | (Kleisli (\x -> [x * 2])) +++ (Kl |
      |                                   | eisli (\x -> [x, -x]))) (Right 3) |
      |                                   |    [Right 3,Right (-3)]           |
      +-----------------------------------+-----------------------------------+

   .. rubric:: ` <#Haskell与范畴论>`__ Haskell与范畴论
      :name: Haskell与范畴论

   Haskell中的函子单子等都与范畴论（category
   theory）有很多联系，所以打算简单了解一下范畴论的相关内容。

      **范畴论** 是数学的一门学科，以抽象的方法处理数学概念，将这些概念形式化成一组组的“物件”及“态射”。数学中许多重要的领域可以形式化为范畴。使用范畴论可以令这些领域中许多难理解、难捉摸的数学结论更容易叙述证明。

      .. container::

         ———— 维基百科

   .. rubric:: ` <#范畴（Category）>`__ 范畴（Category）
      :name: 范畴（Category）

   范畴本质上是一个简单的集合，一个范畴$\\mathbf{C}$包含三个组成成分：

   -  一个类$\\mathrm{ob}(\\mathbf{C})$：其中元素称为 **对象（objects）**
   -  一个类$\\mathrm{hom}(\\mathbf{C})$：其中元素称为 **态射（morphisms）** （或 **箭号（arrows）** ）：每个态射连接了两个对象：源对象（source
      object）、目标对象（target
      object）。如果$f$是从源对象$A$到目标对象$B$（$A,
      B\\in
      \\mathrm{ob}(\\mathbf{C})$）的态射，那么记为$f :
      A\\to B$
   -  一个二元运算，称为态射 **复合（composition）** ：两个态射$g
      : A\\to B$、$f : B\\to C$的复合记为$f\\circ g :
      A\\to C$
      在Haskell和大部分数学理论中都是从右向左计算，即$f\\circ
      g$中是先计算$g : A\\to B$再计算$f : B\\to C$

   许多东西都可以组成范畴。比如:

    $\\mathbf{Set}$是一个范畴，对象为所有集合，态射为集合之间的函数，复合即函数之间的复合

   |  $\\mathbf{Grp}$是一个范畴，对象为所有群，态射为群同态（group
     homomorphisms），例如对于群$(G,\*)$和$(H,\\cdot
     )$，有群同态$h : (G,\*)\\to (H,\\cdot
     )$，则需要对于$G$中的任意元素$u,v$满足
   | $$h(u*v)=h(u)\\cdot h(v)$$

   **注意** ：态射不必须为函数；而且可以存在源对象和目标对象都相同的不同态射

   .. rubric:: ` <#范畴公理>`__ 范畴公理
      :name: 范畴公理

   每个范畴都需要满足三条定律：

   #. 态射复合需要满足 **结合律（associativity）** ：
      $$f\\circ (g\\circ h) = (f\\circ g)\\circ h$$
   #. 范畴在复合操作下是 **闭合的（closed）** ：
         如果范畴$\\mathbf{C}$中存在态射$f : B\\to C$、$g
      : A\\to B$，那么范畴$\\mathbf{C}$中也一定存在态射$h
      : A\\to C$，且$h=f\\circ g$
   #. 每个对象都需要有 **单位态射（identity
      morphisms）** ：
         对于范畴$\\mathbf{C}$中的对象$A$，一定存在单位态射$\\mathrm{id}_A
      : A\\to A$，且对于每个态射$g : A\\to B$，一定有：
      $$g\\circ\\mathrm{id}_A = \\mathrm{id}_B\\circ g =
      g$$

   .. rubric:: ` <#mathbf-Hask-范畴>`__ $\\mathbf{Hask}$范畴
      :name: mathbf-Hask-范畴

   范畴$\\mathbf{Hask}$的对象为Haskell中的类型（types），态射是Haskell中的函数，复合运算是 ``(.)`` 。即从类型A到类型B的函数
   f :: A -> B
   就是$\\mathbf{Hask}$范畴中的一个态射。而函数 f :: B ->
   C 、g :: A -> B 的组合 f . g 就是一个新的函数 h :: A
   -> C。

   对于三条定律：

   #. 第一条显然满足：f . (g . h) = (f . g) . h

   #. 第二条也显然满足，如果有函数 f :: B -> C 、g :: A
      -> B，一定有函数 h = (f . g) :: A -> C

   #. 对于第三条定律，Haskell中存在单位函数 id
      ，但id是多态（polymorphic）的，要为其指定类型使其变成单态（monomorphic）的。比如态射$\\mathrm{id}_A$在Haskell中就可以表示为
      id :: A -> A。并且显然满足第三条定律（其中 f :: A
      -> B）：

      (id :: B -> B) . f = f . (id :: A -> A) = f

   .. rubric:: ` <#函子（Functors）>`__ 函子（Functors）
      :name: 函子（Functors）

   一个范畴中的态射将两个对象联系起来，而函子则会将两个范畴联系起来。换句话说，函子就是从一个范畴到另一个范畴的变换。比如对于范畴$\\mathbf{C}$、$\\mathbf{D}$，定义函子$F
   : \\mathbf{C}\\to\\mathbf{D}$满足：

   -  对于$\\mathbf{C}$中的任意对象$A$，在$\\mathbf{D}$中都有对象$F(A)$
   -  对于$\\mathbf{C}$中的任意态射$f : A\\to
      B$，在$\\mathbf{D}$中都有态射$F(f) : F(A)\\to F(B)$

   比如：

    遗忘函子（forgetful functor）$U :
   \\mathbf{Grp}\\to\\mathbf{Set}$，将一个群映射到一个集合中，将群同态映射到集合间的函数

    幂集函子（power set functor）$P :
   \\mathbf{Set}\\to\\mathbf{Set}$，将一个集合映射到它的幂集，将原集合中的函数$f
   : A\\to B$映射到函数$P(f) :
   \\mathcal{P}(A)\\to\\mathcal{P}(B)$，即从$U\\subseteq
   A$到值域$f(U)\\subseteq B$的映射

    自函子（endofunctor）$1\_{\\mathbf{C}} :
   \\mathbf{C}\\to\\mathbf{C}$，将一个范畴映射到它本身

   .. rubric:: ` <#函子公理>`__ 函子公理
      :name: 函子公理

   函子$F :
   \\mathbf{C}\\to\\mathbf{D}$也需要满足两个公理：

   #. 对于任意对象$X\\in\\mathbf{C}$，恒有$F(\\mathrm{id}_X)=\\mathrm{id}\_{F(X)}$
   #. 对于态射$f : Y\\to Z$、$g : X\\to
      Y$，恒有$F(f\\circ g) = F(f)\\circ F(g)$

   .. rubric:: ` <#mathbf-Hask-范畴上的函子>`__ $\\mathbf{Hask}$范畴上的函子
      :name: mathbf-Hask-范畴上的函子

   Haskell中的Functor定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |    c                              |
      |    2                              | lass Functor (f :: * -> *) where  |
      |                                   |                                   |
      |                                   |    fmap :: (a -> b) -> f a -> f b |
      +-----------------------------------+-----------------------------------+

   对于Haskell中的Functor，它实际上是从$\\mathbf{Hask}$范畴（types）到它子范畴的变换。比如列表函子$\\mathtt{[]}
   :
   \\mathbf{Hask}\\to\\mathbf{Lst}$（其中$\\mathbf{Lst}$是所有Haskell中列表类型构成的范畴）

   它也达成了范畴论中对于函子的要求。函子需要进行两个操作：将一个范畴中的对象映射到另一个范畴中、将一个范畴中的态射映射到另一个范畴中。以Maybe为例，它实现了函子的要求：

   #. Maybe是一个类型构造器，他可以将任意类型 T
      变成新类型 Maybe
      T，相当于从$\\mathbf{Hask}$范畴的对象变成了$\\mathbf{Maybe}$范畴的对象
   #. fmap函数接收一个 a -> b 类型的函数，返回一个 Maybe
      a -> Maybe b
      类型的函数，相当于将$\\mathbf{Hask}$范畴中的态射$f
      : A\\to
      B$映射成了$\\mathbf{Maybe}$范畴中的态射$\\mathbf{Maybe}(f)
      : \\mathbf{Maybe}(A)\\to\\mathbf{Maybe}(B)$

   **注意** ：时刻记住这里研究的是$\\mathbf{Hask}$范畴和它的子范畴，对象是类型而不是值，态射是函数也指的是从类型到类型

   同时，Haskell中的Functor也满足函子公理：

   #. fmap id = id 即 fmap (id :: A -> A) = (id :: f A ->
      f A)
   #. fmap (f . g) = fmap f . fmap g

   .. rubric:: ` <#单子（Monads）>`__ 单子（Monads）
      :name: 单子（Monads）

      一个单子说白了不过就是自函子范畴上的一个幺半群而已
      \_(:з」∠)\_

   自函子在前面说到过是从一个范畴到自身的一个函子，如范畴$\\mathbf{C}$上的自函子是$F
   :
   \\mathbf{C}\\to\\mathbf{C}$。自函子范畴就是对象都是自函子的范畴。幺半群和Haskell中学到的Monoid类型类一样，是一个有可结合二元运算和单位元的代数结构。因此单子就是一个自函子，而且它有可结合二元运算（Haskell中 ``>=>`` ）和单位元（Haskell中 ``return`` ）。

   一个单子$M :
   \\mathbf{C}\\to\\mathbf{C}$还包含两个态射（对于范畴$\\mathbf{C}$中的所有对象$X$）：

   #. $\\mathrm{unit}_X^M : X\\to M(X)$
   #. $\\mathrm{join}_X^M : M(M(X))\\to M(X)$

   （当式子中的单子明显是$M$时，可以省略上标${}^M$）

   Haskell中Monad的定义是：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | class Functor m => Monad m where  |
      |    3                              |        return :: a -> m a         |
      |                                   |        (                          |
      |                                   | >>=)  :: m a -> (a -> m b) -> m b |
      +-----------------------------------+-----------------------------------+

   其中很显然多态函数 ``return`` 对应了定义中的$\\mathrm{unit}$，但是 ``>>=`` 和$mathrm{join}$的对应关系并不明显。因此Haskell中有一个工具函数 ``join`` ，它的效果就是定义中的$\\mathrm{join}$，而且它可以和 ``>>=`` 互相定义：

   .. container:: float highlight haskell

      +-----------------------------------+-----------------------------------+
      | ::                                | ::                                |
      |                                   |                                   |
      |    1                              |                                   |
      |    2                              | join :: Monad m => m (m a) -> m a |
      |    3                              |    join x = x >>= id              |
      |    4                              |                                   |
      |    5                              |    (                              |
      |                                   | >>=) :: m a -> (a -> m b) -> m b  |
      |                                   |    x >>= f = join $ fmap f x      |
      +-----------------------------------+-----------------------------------+

   所以Haskell中为Monad要求定义 ``>>=`` 就相当于定义了$\\mathrm{join}$

   例如，幂集函子$P :
   \\mathbf{Set}\\to\\mathbf{Set}$也是一个单子，可以为它定义$\\mathrm{unit}$和$\\mathrm{join}$两个态射。Haskell中的列表也可以近似看作幂集函子。

    态射/函数的类型：

   +----------------------------------+----------------------------------+
   | 幂集函子                         | Haskell中列表                    |
   +==================================+==================================+
   | 一个集合$S$和一个态射$f : A\\to  | 一个类型 T 和一个函数 f :: A ->  |
   | B$                               | B                                |
   +----------------------------------+----------------------------------+
   | $P(f) :                          | fmap f :: [A] -> [B]             |
   | \\m                              |                                  |
   | athcal{P}(A)\\to\\mathcal{P}(B)$ |                                  |
   +----------------------------------+----------------------------------+
   | $\\mathrm{unit}_S :              | return :: T -> [T]               |
   | S\\to\\mathcal{P}(S)$            |                                  |
   +----------------------------------+----------------------------------+
   | $\\mathrm{join}_S :              | join :: [[T]] -> [T]             |
   | \\mathcal{P}(\\ma                |                                  |
   | thcal{P}(S))\\to\\mathcal{P}(S)$ |                                  |
   +----------------------------------+----------------------------------+

    态射/函数的定义：

   +------------------------------------+--------------------------------+
   | 幂集函子                           | Haskell中列表                  |
   +====================================+================================+
   | $(\\mathcal{P}(f))(S) =            | fmap f xs = [ f a \| a <- xs ] |
   | \\{f(a):a\\in S\\}$                |                                |
   +------------------------------------+--------------------------------+
   | $\\mathrm{unit}_S(x) = \\{x\\}$    | return x = [x]                 |
   +------------------------------------+--------------------------------+
   | $\\mathrm{join}_S(L) = \\bigcup L$ | join xs = concat xs            |
   +------------------------------------+--------------------------------+

   .. rubric:: ` <#单子公理>`__ 单子公理
      :name: 单子公理

   给定一个单子$M :
   \\mathbf{C}\\to\\mathbf{C}$，和一个态射$f : A\\to
   B$（其中$A,B\\in
   \\mathbf{C}$），那么满足下面四条定律：

   #. $\\mathrm{join}\\circ
      M(\\mathrm{join})=\\mathrm{join}\\circ\\mathrm{join}$
   #. $\\mathrm{join}\\circ
      M(\\mathrm{unit})=\\mathrm{join}\\circ\\mathrm{unit}=\\mathrm{id}$
   #. $\\mathrm{unit}\\circ f = M(f)\\circ\\mathrm{unit}$
   #. $\\mathrm{join}\\circ M(M(f)) =
      M(f)\\circ\\mathrm{join}$

   也可以很自然地将其转化为Haskell中的表述：

   #. join . fmap join ``=`` join . join
   #. join . fmap return ``=`` join . return ``=`` id
   #. return . f ``=`` fmap f . return
   #. join . fmap (fmap f) ``=`` fmap f . join

   在Haskell中，使用 ``>>=`` 也有三个定律和这四个定律是等价的：

   #. return x >>= f ``=`` f x

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |      return x >>= f               |
         |    2                              |    = join (fmap f (return         |
         |    3                              |  x)) = join (fmap f . return $ x) |
         |    4                              |    = join (retu                   |
         |    5                              | rn (f x)) = join (return . f $ x) |
         |    6                              |    = join . return $ (f x)        |
         |                                   |    = id (f x)                     |
         |                                   |    = f x                          |
         +-----------------------------------+-----------------------------------+

   #. m >>= return ``=`` m

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |      m >>= return                 |
         |    2                              |    = join (fmap re                |
         |    3                              | turn m) = join . fmap return $ m  |
         |    4                              |    = id m                         |
         |                                   |    = m                            |
         +-----------------------------------+-----------------------------------+

   #. (m >>= f) >>= g ``=`` m >>= (\\x -> f x >>= g)

      .. container:: float highlight haskell

         +-----------------------------------+-----------------------------------+
         | ::                                | ::                                |
         |                                   |                                   |
         |    1                              |      (m >>= f) >>= g              |
         |    2                              |    = (join (fmap f m)) >>= g      |
         |    3                              | = join (fmap g (join (fmap f m))) |
         |    4                              |    =                              |
         |    5                              |  join . fmap g . join $ fmap f m  |
         |    6                              |    = join .                       |
         |    7                              |  join . fmap (fmap g) $ fmap f m  |
         |    8                              |    = join . j                     |
         |    9                              | oin . fmap (fmap g) . fmap f $ m  |
         |    10                             |    = joi                          |
         |    11                             | n . join . fmap (fmap g . f) $ m  |
         |    12                             |    = join . f                     |
         |                                   | map join . fmap (fmap g . f) $ m  |
         |                                   |    = join                         |
         |                                   | . fmap (join . (fmap g . f)) $ m  |
         |                                   |    = join . fmap                  |
         |                                   |  (\x -> join (fmap g (f x))) $ m  |
         |                                   |    = j                            |
         |                                   | oin . fmap (\x -> f x >>= g) $ m  |
         |                                   |                                   |
         |                                   | = join (fmap (\x -> f x >>= g) m) |
         |                                   |    = m >>= (\x -> f x >>= g)      |
         +-----------------------------------+-----------------------------------+

   有关do语句和 ``>=>`` 的公理表述在上文中已经说过

   .. rubric:: ` <#后记>`__ 后记
      :name: 后记

   啃了将近一个月，算是把Haskell的主要内容都啃完了。主要就是前期看 `Learn
   You a
   Haskell <http://learnyouahaskell.com/chapters>`__ ，后期看 `Typeclassopedia <https://wiki.haskell.org/Typeclassopedia>`__ ，都是pdcxs推荐给的教程。但是一堆视频一个都没有耐心看进去qwq

   后面的部分的理解感觉也没到位，Category、Arrow等这些类型类也就是大致地看了一眼，甚至有什么用都不太清楚\_(:з」∠)\_

   感觉Haskell这门语言确实很神奇，很多语法都很有意思，而且可以做到非常贴近数学、贴近数学概念。学的时候也是越学坑越多，先是函数式编程引申到了lambda演算，然后是函子等一系列概念引申到了范畴论，目前范畴论简单地看了一部分，lambda演算也没深入研究，以后有时间再说了（咕咕咕）

   现在感觉我学到的Haskell简直是皮毛，还有一堆源码里的东西不知道是怎么回事（包括但不限于#，~），也还有一堆类型类和用法没有学到（包括但不限于Monad
   Transformer、Writer、Reader、State、Comonad、MonadFix、Lens、Parsec、……） [STRIKEOUT:md，这么一看差的还真多] ，以后有时间再慢慢学了，这个假期还有好多其它事要干呢，Haskell这边先摸了\_(:з」∠)\_

   .. rubric:: ` <#Reference>`__ Reference
      :name: Reference

   -  `Learn You a Haskell <http://learnyouahaskell.com/chapters>`__
   -  `Writing foldl using foldr - StackOverflow <https://stackoverflow.com/questions/6172004/writing-foldl-using-foldr>`__
   -  `Haskell：用foldr定义foldl <https://blog.csdn.net/WinterShiver/article/details/103308165>`__
   -  `Typeclassopedia - Haskell wiki <https://wiki.haskell.org/Typeclassopedia>`__
   -  `Hoogle <https://hoogle.haskell.org/>`__
   -  `Functors, Applicatives, And Monads In Pictures <https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html>`__
   -  `Haskell学习 - functor <http://02s949.coding-pages.com/2018/08/15/haskellc/>`__
   -  `Haskell语言学习笔记（8）Monoid - zwvista <https://blog.csdn.net/zwvista/article/details/54863519>`__
   -  `Haskell语言学习笔记（16）Alternative - zwvista <https://blog.csdn.net/zwvista/article/details/62238541>`__
   -  `Haskell语言学习笔记（40）Arrow（1） - zwvista <https://blog.csdn.net/zwvista/article/details/78679542>`__
   -  `24 Days of GHC Extensions: Arrows - Tom Ellis <https://ocharles.org.uk/blog/guest-posts/2014-12-21-arrows.html>`__
   -  `Haskell语言学习笔记（47）Arrow（2） - zwvista <https://blog.csdn.net/zwvista/article/details/78690485>`__
   -  `Haskell/Category theory - wikibooks <https://en.wikibooks.org/wiki/Haskell/Category_theory>`__
   -  `Category theory - wikipedia <https://en.wikipedia.org/wiki/Category_theory>`__
   -  `范畴论 - 维基百科 <https://zh.wikipedia.org/wiki/%E8%8C%83%E7%95%B4%E8%AE%BA>`__
   -  `Monad (category theory) - wikipedia <https://en.wikipedia.org/wiki/Monad_(category_theory)>`__
   -  `Functor - wikipedia <https://en.wikipedia.org/wiki/Functor>`__

   "The End?"


.. container:: menu

   .. rubric:: 目录
      :name: 目录
      :class: menu-label

   -  `1前言 <#前言>`__
   -  `2基础运算 <#基础运算>`__

      -  `2.1函数调用 <#函数调用>`__

   -  `3List <#List>`__

      -  `3.1Texas ranges <#Texas-ranges>`__
      -  `3.2List
         comprehension <#List-comprehension>`__

   -  `4Tuple <#Tuple>`__
   -  `5Syntax in Functions <#Syntax-in-Functions>`__

      -  `5.1Pattern matching <#Pattern-matching>`__
      -  `5.2Guard syntax <#Guard-syntax>`__
      -  `5.3Case expressions <#Case-expressions>`__
      -  `5.4where <#where>`__
      -  `5.5let <#let>`__
      -  `5.6if statement <#if-statement>`__

   -  `6Higher Order
      Functions <#Higher-Order-Functions>`__

      -  `6.1Currying <#Currying>`__
      -  `6.2一些高阶函数 <#一些高阶函数>`__

         -  `6.2.1zipWith <#zipWith>`__
         -  `6.2.2flip <#flip>`__
         -  `6.2.3map <#map>`__
         -  `6.2.4filter <#filter>`__
         -  `6.2.5takeWhile <#takeWhile>`__

      -  `6.3Function
         application <#Function-application>`__
      -  `6.4Function
         Composition <#Function-Composition>`__
      -  `6.5lambda <#lambda>`__
      -  `6.6fold和scan <#fold和scan>`__

         -  `6.6.1foldl <#foldl>`__
         -  `6.6.2foldr <#foldr>`__
         -  `6.6.3scanl和scanr <#scanl和scanr>`__
         -  `6.6.4使用foldr编写foldl <#使用foldr编写foldl>`__

   -  `7Modules <#Modules>`__

      -  `7.1编写Modules <#编写Modules>`__

   -  `8Types &
      Typeclasses <#Types-amp-Typeclasses>`__

      -  `8.1Types <#Types>`__
      -  `8.2Typeclasses <#Typeclasses>`__
      -  `8.3Type variables <#Type-variables>`__
      -  `8.4定义新Type <#定义新Type>`__

         -  `8.4.1导出Type <#导出Type>`__
         -  `8.4.2Record Syntax <#Record-Syntax>`__
         -  `8.4.3Type
            parameters <#Type-parameters>`__
         -  `8.4.4Either <#Either>`__
         -  `8.4.5Derived
            instances <#Derived-instances>`__
         -  `8.4.6Type synonyms <#Type-synonyms>`__
         -  `8.4.7newtype
            keyword <#newtype-keyword>`__
         -  `8.4.8Recursive data
            structures <#Recursive-data-structures>`__

      -  `8.5定义新Typeclass <#定义新Typeclass>`__

         -  `8.5.1手动创建实例 <#手动创建实例>`__
         -  `8.5.2Functor
            Typeclass <#Functor-Typeclass>`__

      -  `8.6Kinds <#Kinds>`__

   -  `9Input/Output <#Input-Output>`__

      -  `9.1运行Haskell程序 <#运行Haskell程序>`__
      -  `9.2输出文本 <#输出文本>`__

         -  `9.2.1do block <#do-block>`__

      -  `9.3输入文本 <#输入文本>`__
      -  `9.4其他IO相关函数用法 <#其他IO相关函数用法>`__

         -  `9.4.1return <#return>`__
         -  `9.4.2when <#when>`__
         -  `9.4.3sequence <#sequence>`__
         -  `9.4.4mapM & mapM\_ <#mapM-amp-mapM>`__
         -  `9.4.5forever <#forever>`__
         -  `9.4.6forM <#forM>`__
         -  `9.4.7getContents <#getContents>`__
         -  `9.4.8interact <#interact>`__

      -  `9.5文件和流 <#文件和流>`__

         -  `9.5.1openFile <#openFile>`__
         -  `9.5.2withFile <#withFile>`__
         -  `9.5.3readFile <#readFile>`__
         -  `9.5.4writeFile <#writeFile>`__
         -  `9.5.5appendFile <#appendFile>`__
         -  `9.5.6buffer <#buffer>`__
         -  `9.5.7openTempFile <#openTempFile>`__

      -  `9.6路径操作 <#路径操作>`__

         -  `9.6.1getCurrentDirectory <#getCurrentDirectory>`__
         -  `9.6.2removeFile <#removeFile>`__
         -  `9.6.3renameFile <#renameFile>`__
         -  `9.6.4doesFileExist <#doesFileExist>`__

      -  `9.7Command line
         arguments <#Command-line-arguments>`__

         -  `9.7.1getArgs <#getArgs>`__
         -  `9.7.2getProgName <#getProgName>`__

      -  `9.8Randomness <#Randomness>`__

         -  `9.8.1random <#random>`__
         -  `9.8.2randoms <#randoms>`__
         -  `9.8.3randomR <#randomR>`__
         -  `9.8.4randomRs <#randomRs>`__
         -  `9.8.5getStdGen <#getStdGen>`__
         -  `9.8.6newStdGen <#newStdGen>`__

      -  `9.9Exceptions <#Exceptions>`__

   -  `10Functors <#Functors>`__

      -  `10.1Functor实例 <#Functor实例>`__

         -  `10.1.1[] <#>`__
         -  `10.1.2Maybe <#Maybe>`__
         -  `10.1.3Either a <#Either-a>`__
         -  `10.1.4IO <#IO>`__
         -  `10.1.5(,) a <#a>`__
         -  `10.1.6(->) r <#gt-r>`__

      -  `10.2Functor Laws <#Functor-Laws>`__
      -  `10.3Intuition <#Intuition>`__
      -  `10.4常用函数 <#常用函数>`__

         -  `10.4.1<$> <#lt-gt>`__
         -  `10.4.2$> <#gt>`__
         -  `10.4.3void <#void>`__

   -  `11Applicative Functor <#Applicative-Functor>`__

      -  `11.1Applicative
         Functor实例 <#Applicative-Functor实例>`__

         -  `11.1.1Maybe <#Maybe-1>`__
         -  `11.1.2[] <#-1>`__
         -  `11.1.3IO <#IO-1>`__
         -  `11.1.4(->) r <#gt-r-1>`__
         -  `11.1.5ZipList <#ZipList>`__

      -  `11.2Applicative Functor
         Laws <#Applicative-Functor-Laws>`__
      -  `11.3Intuition <#Intuition-1>`__
      -  `11.4常用函数 <#常用函数-1>`__

         -  `11.4.1liftA & liftA2 &
            liftA3 <#liftA-amp-liftA2-amp-liftA3>`__
         -  `11.4.2<\* & \*> <#lt-amp-gt>`__
         -  `11.4.3<\*\*> <#lt-gt-1>`__
         -  `11.4.4when & unless <#when-amp-unless>`__
         -  `11.4.5sequenceA <#sequenceA>`__

   -  `12Monad <#Monad>`__

      -  `12.1Monad实例 <#Monad实例>`__

         -  `12.1.1Maybe <#Maybe-2>`__
         -  `12.1.2[] <#-2>`__
         -  `12.1.3IO <#IO-2>`__
         -  `12.1.4(->) r <#gt-r-2>`__

      -  `12.2do-notation <#do-notation>`__

         -  `12.2.1ApplicativeDo <#ApplicativeDo>`__

      -  `12.3Monad Laws <#Monad-Laws>`__

         -  `12.3.1组合运算符（>=>）形式 <#组合运算符（-gt-gt-）形式>`__
         -  `12.3.2do-notation形式 <#do-notation形式>`__

      -  `12.4Intuition <#Intuition-2>`__
      -  `12.5常用函数 <#常用函数-2>`__

         -  `12.5.1liftM & ap <#liftM-amp-ap>`__
         -  `12.5.2sequence <#sequence-1>`__
         -  `12.5.3replicateM <#replicateM>`__
         -  `12.5.4mapM & forM <#mapM-amp-forM>`__
         -  `12.5.5=<< & >=> &
            <=< <#lt-lt-amp-gt-gt-amp-lt-lt>`__

   -  `13MonadFail <#MonadFail>`__

      -  `13.1MonadFail实例 <#MonadFail实例>`__
      -  `13.2MonadFail Law <#MonadFail-Law>`__

   -  `14Semigroup <#Semigroup>`__

      -  `14.1Semigroup Law <#Semigroup-Law>`__
      -  `14.2补：NonEmpty <#补：NonEmpty>`__

   -  `15Monoid <#Monoid>`__

      -  `15.1实例 <#实例>`__

         -  `15.1.1[a] <#a-1>`__
         -  `15.1.2Ordering <#Ordering>`__
         -  `15.1.3Sum & Product <#Sum-amp-Product>`__
         -  `15.1.4All & Any <#All-amp-Any>`__
         -  `15.1.5Monoid a => Maybe
            a <#Monoid-a-gt-Maybe-a>`__
         -  `15.1.6First & Last <#First-amp-Last>`__
         -  `15.1.7Min & Max <#Min-amp-Max>`__
         -  `15.1.8元组 <#元组>`__

      -  `15.2Monoid Laws <#Monoid-Laws>`__

   -  `16Monoidal classes <#Monoidal-classes>`__

      -  `16.1Alternative <#Alternative>`__

         -  `16.1.1Alternative实例 <#Alternative实例>`__
         -  `16.1.2Alternative
            Laws <#Alternative-Laws>`__
         -  `16.1.3常用函数 <#常用函数-3>`__

      -  `16.2MonadPlus <#MonadPlus>`__

         -  `16.2.1MonadPlus实例 <#MonadPlus实例>`__
         -  `16.2.2MonadPlus Laws <#MonadPlus-Laws>`__
         -  `16.2.3常用函数 <#常用函数-4>`__

      -  `16.3ArrowPlus <#ArrowPlus>`__

   -  `17一些其它typeclasses <#一些其它typeclasses>`__

      -  `17.1Foldable <#Foldable>`__

         -  `17.1.1Foldable实例 <#Foldable实例>`__
         -  `17.1.2常用函数 <#常用函数-5>`__

      -  `17.2Traversable <#Traversable>`__

         -  `17.2.1Traversable实例 <#Traversable实例>`__
         -  `17.2.2Traversable
            Laws <#Traversable-Laws>`__

      -  `17.3Bifunctor <#Bifunctor>`__

         -  `17.3.1Bifunctor Laws <#Bifunctor-Laws>`__

      -  `17.4Category <#Category>`__
      -  `17.5Arrow <#Arrow>`__

         -  `17.5.1Arrow notation <#Arrow-notation>`__
         -  `17.5.2ArrowChoice <#ArrowChoice>`__
         -  `17.5.3ArrowZero &
            ArrowPlus <#ArrowZero-amp-ArrowPlus>`__
         -  `17.5.4例子 <#例子>`__

   -  `18Haskell与范畴论 <#Haskell与范畴论>`__

      -  `18.1范畴（Category） <#范畴（Category）>`__

         -  `18.1.1范畴公理 <#范畴公理>`__
         -  `18.1.2$\\mathbf{Hask}$范畴 <#mathbf-Hask-范畴>`__

      -  `18.2函子（Functors） <#函子（Functors）>`__

         -  `18.2.1函子公理 <#函子公理>`__
         -  `18.2.2$\\mathbf{Hask}$范畴上的函子 <#mathbf-Hask-范畴上的函子>`__

      -  `18.3单子（Monads） <#单子（Monads）>`__

         -  `18.3.1单子公理 <#单子公理>`__

   -  `19后记 <#后记>`__
   -  `20Reference <#Reference>`__


===================================================
/. 🚀 University of Pennsylvania's CIS 194
===================================================
-  `University of Pennsylvania's CIS 194 <https://www.seas.upenn.edu/~cis1940/spring13/>`__

GHCi 和 Hugs 可以解析扩展名为 .hs 和 .lhs 的文件。 其中 .lhs（literate Haskell script）
文件是含字面量文本的脚本文档，其中包含有效程序代码，可以用大于号（>）和空格开头。 比如：
::

   add :: Int -> Int -> Int 
   add x y = x + y

其它符号开头的内容将被视作注释处理，且注释与代码间必须有一行以上的间隔。 还有一些 .lhs 文件中的 
代码以 begin {code} 以 end {code} 结尾。如果 .lhs 文件遵守一定的格式，就可以使用 lhs2tex 
工具生成非常精美的文档以供人们阅读。


Good Haskell Style

https://www.seas.upenn.edu/~cis1940/spring13/docs/style.pdf

All your submitted programming assignments should emerge creatively
from the following style guidelines. Programming is just as much social art
form as it is engineering discipline, and as any artist knows, constraints serve
to enhance rather than quench creativity.

These guidelines will be extended as the semester progresses.


• DO use camelCase for function and variable names.

• DO use descriptive function names, which are as long as they need to
     be but no longer than they have to be. Good: solveRemaining. Bad:
     slv. Ugly: solveAllTheCasesWhichWeHaven’tYetProcessed.

• DON’T use tab characters. Haskell is layout-sensitive and tabs Mess
     Everything Up. I don’t care how you feel about tabs when coding in
     other languages. Just trust me on this one. Note this does not mean
     you need to hit space a zillion times to indent each line; your Favorite
     Editor ought to support auto-indentation using spaces instead of tabs.

• DO try to keep every line under 80 characters. This isn’t a hard and
     fast rule, but code that is line-wrapped by an editor looks horrible.

• DO give every top-level function a type signature. Type signatures
     enhance documentation, clarify thinking, and provide nesting sites for
     endangered bird species. Top-level type signatures also result in better
     error messages. With no type signatures, type errors tend to show up
     far from where the real problem is; explicit type signatures help localize
     type errors.

     Locally defined functions and constants (part of a let expression or
     where clause) do not need type signatures, but adding them doesn’t
     hurt (in particular, the argument above about localizing type errors
     still applies).

• DO precede every top-level function by a comment explaining what it does.

• DO use -Wall. Either pass -Wall to ghc on the command line, or (easier) put::

    {-# OPTIONS_GHC -Wall #-}

     at the top of your .hs file. All your submitted programs should compile
     with no warnings.

• DO, as much as possible, break up your programs into small functions
     that do one thing, and compose them to create more complex functions.

• DO make all your functions total. That is, they should give sensible
     results (and not crash) for every input.

/CS194 Lectures 01 Introduction
-------------------------------

- https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.lhs
- https://www.seas.upenn.edu/~cis1940/spring13/lectures/01-intro.html

<!--
{-# OPTIONS_GHC -Wall #-}
-->

Haskell Basics
==============

CIS 194 Week 1  
14 January 2013

Suggested reading:

-   [Learn You a Haskell for Great Good, chapter 2](http://learnyouahaskell.com/starting-out)
-   [Real World Haskell](http://book.realworldhaskell.org/),
    chapters 1 and 2

What is Haskell?
----------------

Haskell is a *lazy, functional* programming language created in the
late 1980's by a committee of academics.  There were a plethora of
lazy functional languages around, everyone had their favorite, and it
was hard to communicate ideas.  So a bunch of people got together and
designed a new language, taking some of the best ideas from existing
languages (and a few new ideas of their own).  Haskell was born.

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/haskell-logo-small.png

So what is Haskell like?  Haskell is:

**Functional**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/function-machine.png
   :width: 200px

There is no precise, accepted meaning for the term "functional".
But when we say that Haskell is a *functional* language, we usually
have in mind two things:

* Functions are *first-class*, that is, functions are values which can
  be used in exactly the same ways as any other sort of value.

* The meaning of Haskell programs is centered around *evaluating
  expressions* rather than *executing instructions*.

Taken together, these result in an entirely different way of thinking about
programming.  Much of our time this semester will be spent exploring
this way of thinking.

**Pure** 

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/pure.jpg
   :width: 200px

Haskell expressions are always *referentially transparent*, that is:

* No mutation!  Everything (variables, data structures...) is *immutable*.

* Expressions never have "side effects" (like updating global variables or
  printing to the screen).

* Calling the same function with the same arguments results in
  the same output every time.

This may sound crazy at this point.  How is it even possible to get
anything done without mutation or side effects?  Well, it certainly
requires a shift in thinking (if you're used to an imperative or
object-oriented paradigm).  But once you've made the shift, there are
a number of wonderful benefits:

* *Equational reasoning and refactoring*: In Haskell one can always
  "replace equals by equals", just like you learned in algebra class.

* *Parallelism*: Evaluating expressions in parallel is easy when they
  are guaranteed not to affect one another.

* *Fewer headaches*: Simply put, unrestricted effects and
  action-at-a-distance makes for programs that are hard to debug,
  maintain, and reason about.

**Lazy**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/relax.jpg
   :width: 200px

In Haskell, expressions are *not evaluated until their results are
actually needed*.  This is a simple decision with far-reaching
consequences, which we will explore throughout the semester.  Some of
the consequences include:

* It is easy to define a new *control structure* just by defining a
  function.

* It is possible to define and work with *infinite data structures*.

* It enables a more compositional programming style (see *wholemeal
  programming* below).

* One major downside, however, is that reasoning about time and space
  usage becomes much more complicated!

**Statically typed**

.. image:: https://www.seas.upenn.edu/~cis1940/spring13/images/static.jpg
   :width: 200px

Every Haskell expression has a type, and types are all checked at
*compile-time*.  Programs with type errors will not even compile, much
less run.

Themes
------

Throughout this course, we will focus on three main themes.

**Types**

Static type systems can seem annoying.  In fact, in languages like C++
and Java, they *are* annoying.  But this isn't because static type
systems *per se* are annoying; it's because C++ and Java's type
systems are insufficiently expressive! This semester we'll take a
close look at Haskell's type system, which

* *Helps clarify thinking and express program structure*

    The first step in writing a Haskell program is usually to *write
    down all the types*.  Because Haskell's type system is so expressive,
    this is a non-trivial design step and is an immense help in
    clarifying one's thinking about the program.

* *Serves as a form of documentation*

    Given an expressive type system, just looking at a function's type
    tells you a lot about what the function might do and how it can be
    used, even before you have read a single word of written documentation.

* *Turns run-time errors into compile-time errors*

    It's much better to be able to fix errors up front than to just
    test a lot and hope for the best.  "If it compiles, it must be
    correct" is mostly facetious (it's still quite possible to have errors
    in logic even in a type-correct program), but it happens in Haskell
    much more than in other languages.

**Abstraction**

"Don't Repeat Yourself" is a mantra often heard in the world of
programming.  Also known as the "Abstraction Principle", the idea is
that nothing should be duplicated: every idea, algorithm, and piece of
data should occur exactly once in your code.  Taking similar pieces of
code and factoring out their commonality is known as the process of
*abstraction*.

Haskell is very good at abstraction: features like parametric
polymorphism, higher-order functions, and type classes all aid in the
fight against repetition.  Our journey through Haskell this semester
will in large part be a journey from the specific to the abstract.

**Wholemeal programming**

Another theme we will explore is *wholemeal programming*. A quote from
Ralf Hinze::

   "Functional languages excel at wholemeal programming, a term coined by
   Geraint Jones. Wholemeal programming means to think big: work with an
   entire list, rather than a sequence of elements; develop a solution
   space, rather than an individual solution; imagine a graph, rather
   than a single path. The wholemeal approach often offers new insights
   or provides new perspectives on a given problem. It is nicely
   complemented by the idea of projective programming: first solve a more
   general problem, then extract the interesting bits and pieces by
   transforming the general program into more specialised ones."

For example, consider this pseudocode in a C/Java-ish sort of language::

    int acc = 0;
    for ( int i = 0; i < lst.length; i++ ) {
      acc = acc + 3 * lst[i];
    }

This code suffers from what Richard Bird refers to as "indexitis": it
has to worry about the low-level details of iterating over an array by
keeping track of a current index.  It also mixes together what can
more usefully be thought of as two separate operations: multiplying
every item in a list by 3, and summing the results.

In Haskell, we can just write 

    sum (map (3*) lst)

This semester we'll explore the shift in thinking represented by this
way of programming, and examine how and why Haskell makes
it possible.

Literate Haskell
----------------

This file is a "literate Haskell document": only lines preceded by
> and a space (see below) are code; everything else (like this
paragraph) is a comment. Your programming assignments do not have
to be literate Haskell, although they may be if you like. Literate
Haskell documents have an extension of `.lhs`, whereas non-literate Haskell
source files use `.hs`.

Declarations and variables
--------------------------

Here is some Haskell code:"" 

   > x :: Int
   > x = 3
   > 
   > -- Note that normal (non-literate) comments are preceded by two hyphens
   > {- or enclosed
   >    in curly brace/hyphen pairs. -}

The above code declares a variable `x` with type `Int` (`::` is
pronounced "has type") and declares the value of `x` to be `3`. Note
that *this will be the value of `x` forever* (at least, in this
particular program). The value of `x` cannot be changed later.

Try uncommenting the line below; it will generate an error saying
something like ``Multiple declarations of `x'``.

> -- x = 4

In Haskell, *variables are not mutable boxes*; they are just names
for values!

Put another way, `=` does *not* denote "assignment" like it does in
many other languages. Instead, `=` denotes *definition*, like it does
in mathematics.  That is, `x = 4` should not be read as "`x` gets `4`"
or "assign `4` to `x`", but as "`x` is *defined to be* `4`".

What do you think this code means? ::

   > y :: Int
   > y = y + 1

Basic Types
-----------

   > -- Machine-sized integers
   > i :: Int
   > i = -78

`Int`s are guaranteed by the Haskell language standard to accommodate
values at least up to \\(\\pm 2^{29}\\), but the exact size depends on
your architecture.  For example, on my 64-bit machine the range is
\\(\\pm 2^{63}\\). You can find the range on your machine by
evaluating the following::

   > biggestInt, smallestInt :: Int
   > biggestInt  = maxBound
   > smallestInt = minBound

(Note that idiomatic Haskell uses `camelCase` for identifier names.
If you don't like it, tough luck.)

The `Integer` type, on the other hand, is limited only by the amount
of memory on your machine.::

   > -- Arbitrary-precision integers
   > n :: Integer
   > n = 1234567890987654321987340982334987349872349874534
   >
   > reallyBig :: Integer
   > reallyBig = 2^(2^(2^(2^2)))
   >
   > numDigits :: Int
   > numDigits = length (show reallyBig)

For floating-point numbers, there is `Double`::

   > -- Double-precision floating point
   > d1, d2 :: Double
   > d1 = 4.5387
   > d2 = 6.2831e-4

There is also a single-precision floating point number type, `Float`.

Finally, there are booleans, characters, and strings::

   > -- Booleans
   > b1, b2 :: Bool
   > b1 = True
   > b2 = False
   > 
   > -- Unicode characters
   > c1, c2, c3 :: Char
   > c1 = 'x'
   > c2 = 'Ã˜'
   > c3 = 'ãƒ€'
   > 
   > -- Strings are lists of characters with special syntax
   > s :: String
   > s = "Hello, Haskell!"

GHCi
----

GHCi is an interactive Haskell REPL (Read-Eval-Print-Loop) that comes
with GHC. At the GHCi prompt, you can evaluate expressions, load
Haskell files with `:load` (`:l`) (and reload them with `:reload`
(`:r`)), ask for the type of an expression with `:type` (`:t`), and
many other things (try `:?` for a list of commands).

Arithmetic
----------

Try evaluating each of the following expressions in GHCi::

   > ex01 = 3 + 2
   > ex02 = 19 - 27
   > ex03 = 2.35 * 8.6
   > ex04 = 8.7 / 3.1
   > ex05 = mod 19 3
   > ex06 = 19 `mod` 3
   > ex07 = 7 ^ 222
   > exNN = (-3) * (-7)

Note how \`backticks\` make a function name into an infix
operator. Note also that negative numbers must often be surrounded by
parentheses, to avoid having the negation sign parsed as
subtraction. (Yes, this is ugly. I'm sorry.)

This, however, gives an error::

   > -- badArith1 = i + n

Addition is only between values of the same numeric type, and
Haskell does not do implicit conversion. You must explicitly
convert with:

-   `fromIntegral`: converts from any integral type (`Int` or
    `Integer`) to any other numeric type.

-   `round`, `floor`, `ceiling`: convert floating-point numbers to
    `Int` or `Integer`.


Now try this::

   > -- badArith2 = i / i

This is an error since `/` performs floating-point division only.
For integer division we can use `div`.::

   > ex08 = i `div` i
   > ex09 = 12 `div` 5

If you are used to other languages which do implicit conversion of
numeric types, this can all seem rather prudish and annoying at first.
However, I promise you'll get used to it---and in time you may even
come to appreciate it.  Implicit numeric conversion encourages sloppy
thinking about numeric code.

Boolean logic
-------------

As you would expect, Boolean values can be combined with `(&&)`
(logical and), `(||)` (logical or), and `not`. For example,
::

   > ex10 = True && False
   > ex11 = not (False || True)

Things can be compared for equality with `(==)` and `(/=)`, or
compared for order using `(<)`, `(>)`, `(<=)`, and `(>=)`.
::

   > ex12 = ('a' == 'a')
   > ex13 = (16 /= 3)
   > ex14 = (5 > 3) && ('p' <= 'q')
   > ex15 = "Haskell" > "C++"

Haskell also has `if`-expressions: `if b then t else f` is an
expression which evaluates to `t` if the Boolean expression `b`
evaluates to `True`, and `f` if `b` evaluates to `False`.  Notice that
`if`-*expressions* are very different than `if`-*statements*.  For
example, with an if-statement, the `else` part can be optional; an
omitted `else` clause means "if the test evaluates to `False` then do
nothing".  With an `if`-expression, on the other hand, the `else` part
is required, since the `if`-expression must result in some value.

Idiomatic Haskell does not use `if` expressions very much, often using
pattern-matching or *guards* instead (see the next section).

Defining basic functions
------------------------

We can write functions on integers by cases.

> -- Compute the sum of the integers from 1 to n.
> sumtorial :: Integer -> Integer
> sumtorial 0 = 0
> sumtorial n = n + sumtorial (n-1)

Note the syntax for the type of a function: `sumtorial :: Integer ->
Integer` says that `sumtorial` is a function which takes an `Integer`
as input and yields another `Integer` as output.

Each clause is checked in order from top to bottom, and the first
matching clause is chosen.  For example, `sumtorial 0` evaluates to
`0`, since the first clause is matched.  `sumtorial 3` does not match
the first clause (`3` is not `0`), so the second clause is tried.  A
variable like `n` matches anything, so the second clause matches and
`sumtorial 3` evaluates to `3 + sumtorial (3-1)` (which can then be
evaluated further).

Choices can also be made based on arbitrary Boolean expressions using
*guards*.  For example::

   > hailstone :: Integer -> Integer
   > hailstone n
   >   | n `mod` 2 == 0 = n `div` 2
   >   | otherwise      = 3*n + 1

Any number of guards can be associated with each clause of a function
definition, each of which is a Boolean expression.  If the clause's
patterns match, the guards are evaluated in order from top to bottom,
and the first one which evaluates to `True` is chosen.  If none of the
guards evaluate to `True`, matching continues with the next clause.

For example, suppose we evaluate `hailstone 3`.  First, `3` is matched
against `n`, which succeeds (since a variable matches anything).
Next, ``n `mod` 2 == 0`` is evaluated; it is `False` since `n = 3`
does not result in a remainder of `0` when divided by `2`.
`otherwise` is just an convenient synonym for `True`, so the second
guard is chosen, and the result of `hailstone 3` is thus `3*3 + 1 =
10`.

As a more complex (but more contrived) example::

   > foo :: Integer -> Integer
   > foo 0 = 16
   > foo 1 
   >   | "Haskell" > "C++" = 3
   >   | otherwise         = 4
   > foo n
   >   | n < 0            = 0
   >   | n `mod` 17 == 2  = -43
   >   | otherwise        = n + 3

What is `foo (-3)`? `foo 0`? `foo 1`? `foo 36`? `foo 38`?

As a final note about Boolean expressions and guards, suppose we
wanted to abstract out the test of evenness used in defining
`hailstone`.  A first attempt is shown below::

   > isEven :: Integer -> Bool
   > isEven n 
   >   | n `mod` 2 == 0 = True
   >   | otherwise      = False

This *works*, but it is much too complicated.  Can you see why?

Pairs
-----

We can pair things together like so::

   > p :: (Int, Char)
   > p = (3, 'x')

Notice that the `(x,y)` notation is used both for the *type* of a pair
and a pair *value*.

The elements of a pair can be extracted again with 
*pattern matching*:

> sumPair :: (Int,Int) -> Int
> sumPair (x,y) = x + y

Haskell also has triples, quadruples, ... but you should never use
them. As we'll see next week, there are much better ways to package
three or more pieces of information together.

Using functions, and multiple arguments
---------------------------------------

To apply a function to some arguments, just list the arguments after
the function, separated by spaces, like this:

> f :: Int -> Int -> Int -> Int
> f x y z = x + y + z
> exFF = f 3 17 8

The above example applies the function `f` to the three arguments `3`,
`17`, and `8`.  Note also the syntax for the type of a function with
multiple arguments, like `Arg1Type -> Arg2Type -> ... -> ResultType`.
This might seem strange to you (and it should!).  Why all the arrows?
Wouldn't it make more sense for the type of `f` to be something like
`Int Int Int -> Int`?  Actually, the syntax is no accident: it is the
way it is for a very deep and beautiful reason, which we'll learn
about in a few weeks; for now you just have to take my word for it!

Note that **function application has higher precedence than any infix
operators**.  So it would be incorrect to write::

   `f 3 n+1 7`

if you intend to pass `n+1` as the second argument to `f`, because
this parses as::

   `(f 3 n) + (1 7)`.

Instead, one must write::

   `f 3 (n+1) 7`.

Lists
-----

*Lists* are one of the most basic data types in Haskell.
::

> nums, range, range2 :: [Integer]
> nums   = [1,2,3,19]
> range  = [1..100]
> range2 = [2,4..100]

Haskell (like Python) also has *list comprehensions*; you can read
about them in [LYAH](http://learnyouahaskell.com/starting-out).

Strings are just lists of characters. That is, `String` is just an
abbreviation for `[Char]`, and string literal syntax (text surrounded
by double quotes) is just an abbreviation for a list of `Char` literals.
::

> -- hello1 and hello2 are exactly the same.
>
> hello1 :: [Char]
> hello1 = ['h', 'e', 'l', 'l', 'o']
>
> hello2 :: String
> hello2 = "hello"
>
> helloSame = hello1 == hello2

This means that all the standard library functions for processing
lists can also be used to process `String`s.

Constructing lists
------------------

The simplest possible list is the empty list: 
::

> emptyList = []

Other lists are built up from the empty list using the *cons*
operator, `(:)`. Cons takes an element and a list, and produces a
new list with the element prepended to the front.
::

> ex17 = 1 : []
> ex18 = 3 : (1 : [])
> ex19 = 2 : 3 : 4 : []

> ex20 = [2,3,4] == 2 : 3 : 4 : []

We can see that `[2,3,4]` notation is just convenient shorthand for
`2 : 3 : 4 : []`. Note also that these are really
*singly linked lists*, NOT arrays.
::

> -- Generate the sequence of hailstone iterations from a starting number.
> hailstoneSeq :: Integer -> [Integer]
> hailstoneSeq 1 = [1]
> hailstoneSeq n = n : hailstoneSeq (hailstone n)

We stop the hailstone sequence when we reach 1.  The hailstone
sequence for a general `n` consists of `n` itself, followed by the
hailstone sequence for `hailstone n`, that is, the number obtained by
applying the hailstone transformation once to `n`.


Functions on lists
------------------

We can write functions on lists using *pattern matching*. 
::

> -- Compute the length of a list of Integers.
> intListLength :: [Integer] -> Integer
> intListLength []     = 0
> intListLength (x:xs) = 1 + intListLength xs

The first clause says that the length of an empty list is 0.  The
second clause says that if the input list looks like `(x:xs)`, that
is, a first element `x` consed onto a remaining list `xs`, then the
length is one more than the length of `xs`.

Since we don't use `x` at all we could also replace it by an
underscore: `intListLength (_:xs) = 1 + intListLength xs`.

We can also use nested patterns::

> sumEveryTwo :: [Integer] -> [Integer]
> sumEveryTwo []         = []     -- Do nothing to the empty list
> sumEveryTwo (x:[])     = [x]    -- Do nothing to lists with a single element
> sumEveryTwo (x:(y:zs)) = (x + y) : sumEveryTwo zs

Note how the last clause matches a list starting with `x` and followed
by... a list starting with `y` and followed by the list `zs`.  We
don't actually need the extra parentheses, so `sumEveryTwo (x:y:zs) =
...` would be equivalent.


Combining functions
-------------------

It's good Haskell style to build up more complex functions by
combining many simple ones.
::

> -- The number of hailstone steps needed to reach 1 from a starting
> -- number.
> hailstoneLen :: Integer -> Integer
> hailstoneLen n = intListLength (hailstoneSeq n) - 1

This may seem inefficient to you: it generates the entire hailstone
sequence first and then finds its length, which wastes lots of
memory... doesn't it? Actually, it doesn't! Because of Haskell's
lazy evaluation, each element of the sequence is only generated as
needed, so the sequence generation and list length calculation are
interleaved. The whole computation uses only O(1) memory, no matter
how long the sequence. (Actually, this is a tiny white lie, but
explaining why (and how to fix it) will have to wait a few weeks.)

We'll learn more about Haskell's lazy evaluation strategy in a few
weeks. For now, the take-home message is: don't be afraid to write
small functions that transform whole data structures, and combine
them to produce more complex functions. It may feel unnatural at
first, but it's the way to write idiomatic (and efficient) Haskell,
and is actually a rather pleasant way to write programs once you
get used to it.


A word about error messages
---------------------------

Actually, six: 

**Don't be scared of error messages!**

GHC's error messages can be rather long and (seemingly) scary.
However, usually they're long not because they are obscure, but
because they contain a lot of useful information!  Here's an example:
::

    Prelude> 'x' ++ "foo"

    <interactive>:1:1:
        Couldn't match expected type `[a0]' with actual type `Char'
        In the first argument of `(++)', namely 'x'
        In the expression: 'x' ++ "foo"
        In an equation for `it': it = 'x' ++ "foo"

First we are told "Couldn't match expected type `[a0]` with actual
type `Char`".  This means that *something* was expected to have a list
type, but actually had type `Char`.  What something?  The next line
tells us: it's the first argument of `(++)` which is at fault, namely,
`'x'`.  The next lines go on to give us a bit more context.  Now we
can see what the problem is: clearly `'x'` has type `Char`, as the
first line said.  Why would it be expected to have a list type?  Well,
because it is used as an argument to `(++)`, which takes a list as its
first argument.

When you get a huge error message, resist your initial impulse to run
away; take a deep breath; and read it carefully.  You won't
necessarily understand the entire thing, but you will probably learn a
lot, and you may just get enough information to figure out what the
problem is.


/CS194 Lectures 02 Algebraic data types
---------------------------------------

- https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.lhs
- https://www.seas.upenn.edu/~cis1940/spring13/lectures/02-ADTs.html

Algebraic data types
====================

CIS 194 Week 2  
21 January 2013

Suggested reading: 

  * [Real World Haskell](http://book.realworldhaskell.org/),
    chapters 2 and 3

Enumeration types
-----------------

Like many programming languages, Haskell allows programmers to create
their own *enumeration* types.  Here's a simple example:

> data Thing = Shoe 
>            | Ship 
>            | SealingWax 
>            | Cabbage 
>            | King
>   deriving Show

This declares a new type called `Thing` with five *data constructors*
`Shoe`, `Ship`, etc. which are the (only) values of type `Thing`.
(The `deriving Show` is a magical incantation which tells GHC to
automatically generate default code for converting `Thing`s to
`String`s. This is what `ghci` uses when printing the value of
an expression of type `Thing`.)

> shoe :: Thing
> shoe = Shoe
>
> listO'Things :: [Thing]
> listO'Things = [Shoe, SealingWax, King, Cabbage, King]

We can write functions on `Thing`s by *pattern-matching*.

> isSmall :: Thing -> Bool
> isSmall Shoe       = True
> isSmall Ship       = False
> isSmall SealingWax = True
> isSmall Cabbage    = True
> isSmall King       = False

Recalling how function clauses are tried in order from top to bottom,
we could also make the definition of `isSmall` a bit shorter like so:

> isSmall2 :: Thing -> Bool
> isSmall2 Ship = False
> isSmall2 King = False
> isSmall2 _    = True

Beyond enumerations
-------------------

`Thing` is an *enumeration type*, similar to those provided by other
languages such as Java or C++.  However, enumerations are actually
only a special case of Haskell's more general *algebraic data types*.
As a first example of a data type which is not just an enumeration,
consider the definition of `FailableDouble`:

> data FailableDouble = Failure
>                     | OK Double
>   deriving Show

This says that the `FailableDouble` type has two data constructors.
The first one, `Failure`, takes no arguments, so `Failure` by itself
is a value of type `FailableDouble`.  The second one, `OK`, takes an
argument of type `Double`.  So `OK` by itself is not a value of type
`FailableDouble`; we need to give it a `Double`.  For example, `OK
3.4` is a value of type `FailableDouble`.

> exD1 = Failure
> exD2 = OK 3.4

Thought exercise: what is the type of `OK`?

> safeDiv :: Double -> Double -> FailableDouble
> safeDiv _ 0 = Failure
> safeDiv x y = OK (x / y)

More pattern-matching!  Notice how in the `OK` case we can give a name
to the `Double` that comes along with it.

> failureToZero :: FailableDouble -> Double
> failureToZero Failure = 0
> failureToZero (OK d)  = d

Data constructors can have more than one argument.

> -- Store a person's name, age, and favourite Thing.
> data Person = Person String Int Thing
>   deriving Show
>
> brent :: Person
> brent = Person "Brent" 31 SealingWax
>
> stan :: Person
> stan  = Person "Stan" 94 Cabbage
>
> getAge :: Person -> Int
> getAge (Person _ a _) = a

Notice how the type constructor and data constructor are both named
`Person`, but they inhabit different namespaces and are different
things.  This idiom (giving the type and data constructor of a
one-constructor type the same name) is common, but can be confusing
until you get used to it.

Algebraic data types in general
-------------------------------

In general, an algebraic data type has one or more data constructors,
and each data constructor can have zero or more arguments.

    data AlgDataType = Constr1 Type11 Type12
                     | Constr2 Type21
                     | Constr3 Type31 Type32 Type33
                     | Constr4

This specifies that a value of type `AlgDataType` can be constructed
in one of four ways: using `Constr1`, `Constr2`, `Constr3`, or
`Constr4`.  Depending on the constructor used, an `AlgDataType` value
may contain some other values.  For example, if it was constructed
using `Constr1`, then it comes along with two values, one of type
`Type11` and one of type `Type12`.

One final note: type and data constructor names must always start with
a capital letter; variables (including names of functions) must always
start with a lowercase letter.  (Otherwise, Haskell parsers would have
quite a difficult job figuring out which names represent variables and
which represent constructors).

Pattern-matching
----------------

We've seen pattern-matching in a few specific cases, but let's see how
pattern-matching works in general.  Fundamentally, pattern-matching is
about taking apart a value by *finding out which constructor* it was
built with.  This information can be used as the basis for deciding
what to do---indeed, in Haskell, this is the *only* way to make a
decision.

For example, to decide what to do with a value of type `AlgDataType`
(the made-up type defined in the previous section), we could write
something like

    foo (Constr1 a b)   = ...
    foo (Constr2 a)     = ...
    foo (Constr3 a b c) = ...
    foo Constr4         = ...

Note how we also get to give names to the values that come along with
each constructor.  Note also that parentheses are required around
patterns consisting of more than just a single constructor.

This is the main idea behind patterns, but there are a few more things
to note.  

  1. An underscore `_` can be used as a "wildcard pattern" which
    matches anything.

  1. A pattern of the form `x@pat` can be used to match a value against
    the pattern `pat`, but *also* give the name `x` to the entire value
    being matched.  For example:

    > baz :: Person -> String
    > baz p@(Person n _ _) = "The name field of (" ++ show p ++ ") is " ++ n

        *Main> baz brent
        "The name field of (Person \"Brent\" 31 SealingWax) is Brent"

  1. Patterns can be *nested*. For example:

    > checkFav :: Person -> String
    > checkFav (Person n _ SealingWax) = n ++ ", you're my kind of person!"
    > checkFav (Person n _ _)          = n ++ ", your favorite thing is lame."

        *Main> checkFav brent
        "Brent, you're my kind of person!"
        *Main> checkFav stan
        "Stan, your favorite thing is lame."

    Note how we nest the pattern `SealingWax` inside the pattern for
    `Person`.

In general, the following grammar defines what can be used as a
pattern:

    pat ::= _
         |  var
         |  var @ ( pat )
         |  ( Constructor pat1 pat2 ... patn )

The first line says that an underscore is a pattern.  The second line
says that a variable by itself is a pattern: such a pattern matches
anything, and "binds" the given variable name to the matched value.
The third line specifies `@`-patterns.  The last line says that a
constructor name followed by a sequence of patterns is itself a
pattern: such a pattern matches a value if that value was constructed
using the given constructor, *and* `pat1` through `patn` all match the
values contained by the constructor, recursively.

(In actual fact, the full grammar of patterns includes yet more
features still, but the rest would take us too far afield for now.)

Note that literal values like `2` or `'c'` can be thought of as
constructors with no arguments.  It is as if the types `Int` and
`Char` were defined like

    data Int  = 0 | 1 | -1 | 2 | -2 | ...
    data Char = 'a' | 'b' | 'c' | ...

which means that we can pattern-match against literal values.  (Of
course, `Int` and `Char` are not *actually* defined this way.)

Case expressions
----------------

The fundamental construct for doing pattern-matching in Haskell is the
`case` expression. In general, a `case` expression looks like

    case exp of
      pat1 -> exp1
      pat2 -> exp2
      ...

When evaluated, the expression `exp` is matched against each of the
patterns `pat1`, `pat2`, ... in turn.  The first matching pattern is
chosen, and the entire `case` expression evaluates to the expression
corresponding to the matching pattern.  For example,

> exCase = case "Hello" of
>            []      -> 3
>            ('H':s) -> length s
>            _       -> 7

evaluates to `4` (the second pattern is chosen; the third pattern
matches too, of course, but it is never reached).

In fact, the syntax for defining functions we have seen is really just
convenient syntax sugar for defining a `case` expression.  For
example, the definition of `failureToZero` given previously can
equivalently be written as

> failureToZero' :: FailableDouble -> Double
> failureToZero' x = case x of
>                      Failure -> 0
>                      OK d    -> d

Recursive data types
--------------------

Data types can be *recursive*, that is, defined in terms of
themselves.  In fact, we have already seen a recursive type---the type
of lists.  A list is either empty, or a single element followed by a
remaining list.  We could define our own list type like so:

> data IntList = Empty | Cons Int IntList

Haskell's own built-in lists are quite similar; they just get to use
special built-in syntax (`[]` and `:`).  (Of course, they also work
for any type of elements instead of just `Int`s; more on this next
week.)

We often use recursive functions to process recursive data types:

> intListProd :: IntList -> Int
> intListProd Empty      = 1
> intListProd (Cons x l) = x * intListProd l

As another simple example, we can define a type of binary trees with
an `Int` value stored at each internal node, and a `Char` stored at
each leaf:

> data Tree = Leaf Char
>           | Node Tree Int Tree
>   deriving Show

(Don't ask me what you would use such a tree for; it's an example,
OK?)  For example,

> tree :: Tree
> tree = Node (Leaf 'x') 1 (Node (Leaf 'y') 2 (Leaf 'z'))

/CS194 Lectures 03 
------------------------------------------------------------


/CS194 Lectures 04 
------------------------------------------------------------



/CS194 Lectures 05 
------------------------------------------------------------


/CS194 Lectures 06 
------------------------------------------------------------



/CS194 Lectures 07 
------------------------------------------------------------


/CS194 Lectures 08 
------------------------------------------------------------


/CS194 Lectures 09 
------------------------------------------------------------



=====================================
/Learn You a Haskell for Great Good!
=====================================


.. rubric:: Learn You a Haskell for Great Good!
   :name: learn-you-a-haskell-for-great-good

#. `Introduction <http://learnyouahaskell.com/introduction>`__

   -  `About this tutorial <http://learnyouahaskell.com/introduction#about-this-tutorial>`__
   -  `So what's Haskell? <http://learnyouahaskell.com/introduction#so-whats-haskell>`__
   -  `What you need to dive in <http://learnyouahaskell.com/introduction#what-you-need>`__

#. `Starting Out <http://learnyouahaskell.com/starting-out>`__

   -  `Ready, set, go! <http://learnyouahaskell.com/starting-out#ready-set-go>`__
   -  `Baby's first functions <http://learnyouahaskell.com/starting-out#babys-first-functions>`__
   -  `An intro to lists <http://learnyouahaskell.com/starting-out#an-intro-to-lists>`__
   -  `Texas ranges <http://learnyouahaskell.com/starting-out#texas-ranges>`__
   -  `I'm a list comprehension <http://learnyouahaskell.com/starting-out#im-a-list-comprehension>`__
   -  `Tuples <http://learnyouahaskell.com/starting-out#tuples>`__

#. `Types and Typeclasses <http://learnyouahaskell.com/types-and-typeclasses>`__

   -  `Believe the type <http://learnyouahaskell.com/types-and-typeclasses#believe-the-type>`__
   -  `Type variables <http://learnyouahaskell.com/types-and-typeclasses#type-variables>`__
   -  `Typeclasses 101 <http://learnyouahaskell.com/types-and-typeclasses#typeclasses-101>`__

#. `Syntax in Functions <http://learnyouahaskell.com/syntax-in-functions>`__

   -  `Pattern matching <http://learnyouahaskell.com/syntax-in-functions#pattern-matching>`__
   -  `Guards, guards! <http://learnyouahaskell.com/syntax-in-functions#guards-guards>`__
   -  `Where!? <http://learnyouahaskell.com/syntax-in-functions#where>`__ -  `Let it be <http://learnyouahaskell.com/syntax-in-functions#let-it-be>`__
   -  `Case expressions <http://learnyouahaskell.com/syntax-in-functions#case-expressions>`__

#. `Recursion <http://learnyouahaskell.com/recursion>`__

   -  `Hello recursion! <http://learnyouahaskell.com/recursion#hello-recursion>`__
   -  `Maximum awesome <http://learnyouahaskell.com/recursion#maximum-awesome>`__
   -  `A few more recursive functions <http://learnyouahaskell.com/recursion#a-few-more-recursive-functions>`__
   -  `Quick, sort! <http://learnyouahaskell.com/recursion#quick-sort>`__
   -  `Thinking recursively <http://learnyouahaskell.com/recursion#thinking-recursively>`__

#. `Higher Order Functions <http://learnyouahaskell.com/higher-order-functions>`__

   -  `Curried functions <http://learnyouahaskell.com/higher-order-functions#curried-functions>`__
   -  `Some higher-orderism is in order <http://learnyouahaskell.com/higher-order-functions#higher-orderism>`__
   -  `Maps and filters <http://learnyouahaskell.com/higher-order-functions#maps-and-filters>`__
   -  `Lambdas <http://learnyouahaskell.com/higher-order-functions#lambdas>`__
   -  `Only folds and horses <http://learnyouahaskell.com/higher-order-functions#folds>`__
   -  `Function application with $ <http://learnyouahaskell.com/higher-order-functions#function-application>`__
   -  `Function composition <http://learnyouahaskell.com/higher-order-functions#composition>`__

#. `Modules <http://learnyouahaskell.com/modules>`__

   -  `Loading modules <http://learnyouahaskell.com/modules#loading-modules>`__
   -  `Data.List <http://learnyouahaskell.com/modules#data-list>`__
   -  `Data.Char <http://learnyouahaskell.com/modules#data-char>`__
   -  `Data.Map <http://learnyouahaskell.com/modules#data-map>`__
   -  `Data.Set <http://learnyouahaskell.com/modules#data-set>`__
   -  `Making our own modules <http://learnyouahaskell.com/modules#making-our-own-modules>`__

#. `Making Our Own Types and Typeclasses <http://learnyouahaskell.com/making-our-own-types-and-typeclasses>`__

   -  `Algebraic data types intro <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#algebraic-data-types>`__
   -  `Record syntax <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#record-syntax>`__
   -  `Type parameters <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#type-parameters>`__
   -  `Derived instances <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#derived-instances>`__
   -  `Type synonyms <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#type-synonyms>`__
   -  `Recursive data structures <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#recursive-data-structures>`__
   -  `Typeclasses 102 <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#typeclasses-102>`__
   -  `A yes-no typeclass <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#a-yes-no-typeclass>`__
   -  `The Functor typeclass <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#the-functor-typeclass>`__
   -  `Kinds and some type-foo <http://learnyouahaskell.com/making-our-own-types-and-typeclasses#kinds-and-some-type-foo>`__

#. `Input and Output <http://learnyouahaskell.com/input-and-output>`__

   -  `Hello, world! <http://learnyouahaskell.com/input-and-output#hello-world>`__
   -  `Files and streams <http://learnyouahaskell.com/input-and-output#files-and-streams>`__
   -  `Command line arguments <http://learnyouahaskell.com/input-and-output#command-line-arguments>`__
   -  `Randomness <http://learnyouahaskell.com/input-and-output#randomness>`__
   -  `Bytestrings <http://learnyouahaskell.com/input-and-output#bytestrings>`__
   -  `Exceptions <http://learnyouahaskell.com/input-and-output#exceptions>`__

#. `Functionally Solving Problems <http://learnyouahaskell.com/functionally-solving-problems>`__

   -  `Reverse Polish notation calculator <http://learnyouahaskell.com/functionally-solving-problems#reverse-polish-notation-calculator>`__
   -  `Heathrow to London <http://learnyouahaskell.com/functionally-solving-problems#heathrow-to-london>`__

#. `Functors, Applicative Functors and Monoids <http://learnyouahaskell.com/functors-applicative-functors-and-monoids>`__

   -  `Functors redux <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#functors-redux>`__
   -  `Applicative functors <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#applicative-functors>`__
   -  `The newtype keyword <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#the-newtype-keyword>`__
   -  `Monoids <http://learnyouahaskell.com/functors-applicative-functors-and-monoids#monoids>`__
#. `A Fistful of Monads <http://learnyouahaskell.com/a-fistful-of-monads>`__

   -  `Getting our feet wet with Maybe <http://learnyouahaskell.com/a-fistful-of-monads#getting-our-feet-wet-with-maybe>`__
   -  `The Monad type class <http://learnyouahaskell.com/a-fistful-of-monads#the-monad-type-class>`__
   -  `Walk the line <http://learnyouahaskell.com/a-fistful-of-monads#walk-the-line>`__
   -  `do notation <http://learnyouahaskell.com/a-fistful-of-monads#do-notation>`__
   -  `The list monad <http://learnyouahaskell.com/a-fistful-of-monads#the-list-monad>`__
   -  `Monad laws <http://learnyouahaskell.com/a-fistful-of-monads#monad-laws>`__

#. `For a Few Monads More <http://learnyouahaskell.com/for-a-few-monads-more>`__

   -  `Writer? I hardly know her! <http://learnyouahaskell.com/for-a-few-monads-more#writer>`__
   -  `Reader? Ugh, not this joke again. <http://learnyouahaskell.com/for-a-few-monads-more#reader>`__
   -  `Tasteful stateful computations <http://learnyouahaskell.com/for-a-few-monads-more#state>`__
   -  `Error error on the wall <http://learnyouahaskell.com/for-a-few-monads-more#error>`__
   -  `Some useful monadic functions <http://learnyouahaskell.com/for-a-few-monads-more#useful-monadic-functions>`__
   -  `Making monads <http://learnyouahaskell.com/for-a-few-monads-more#making-monads>`__

#. `Zippers <http://learnyouahaskell.com/zippers>`__

   -  `Taking a walk <http://learnyouahaskell.com/zippers#taking-a-walk>`__
   -  `A trail of breadcrumbs <http://learnyouahaskell.com/zippers#a-trail-of-breadcrumbs>`__
   -  `Focusing on lists <http://learnyouahaskell.com/zippers#focusing-on-lists>`__
   -  `A very simple file system <http://learnyouahaskell.com/zippers#a-very-simple-file-system>`__
   -  `Watch your step <http://learnyouahaskell.com/zippers#watch-your-step>`__

This work is licensed under a 
`Creative Commons Attribution-Noncommercial-Share Alike 3.0 Unported License <http://creativecommons.org/licenses/by-nc-sa/3.0/>`__
because I couldn't find a license with an even longer name.



