
# 📜 Structure and Interpretation of Computer Programs
https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip
https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html

Welcome to the SICP Web Site

> **Wizard Book** n. Hal Abelson's, Jerry Sussman's and Julie Sussman's _Structure and Interpretation of Computer Programs_ (MIT Press, 1984; ISBN 0-262-01077-1), an excellent computer science text used in introductory courses at MIT. So called because of the wizard on the jacket. One of the bibles of the LISP/Scheme world. Also, less commonly, known as the Purple Book.
> 
> from _The New Hacker's Dictionary, 2nd edition_  
> (MIT Press, 1993)
> 
> * * *
> 

![SICP Cover](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/cover.jpg)

This site is a companion to the influential computer-science text [_**Structure and Interpretation of Computer Programs**_](https://mitpress.mit.edu/books/structure-and-interpretation-computer-programs), by Abelson, Sussman, and Sussman. Its purpose is to demonstrate the Web's potential to be a channel for innovative support for textbook users.

The material on this site is aimed at instructors using _SICP_ as a course text, and at people using the book for self-study.

Currently at this site you will find:

> **[Full text!](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book.html)**  
> The complete text in HTML.
> 
> [![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
> Structure and Interpretation of Computer Programs by [Harold Abelson and Gerald Jay Sussman with Julie Sussman](https://mitpress.mit.edu/sicp) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) by the MIT Press.
> 
> **[Sample programming assignments](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/psets/index.html)**  
> This is a collection of assignments, developed for the course at MIT, which instructors can download and modify. Each assignment contains an extensive write-up and all necessary source code.
> 
> **[Code from the book](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/code/index.html)**  
> These files contain all source code from the book, in a form suitable for loading and running.
> 
> **[Instructor's Manual](https://mitpress.mit.edu/books/instructors-manual-ta-structure-and-interpretation-computer-programs-second-edition)**  
> Contains discussions of exercises and other material in the text as well as supplementary material, additional examples and exercises, and teaching suggestions. An appendix summarizes the Scheme programming language as used in the text, showing at what point in the text each element of Scheme is introduced.
> 
> **[Errata](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/errata.html)**  _last posted 08/09/99_
> 
> **[How to get Scheme](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/scheme/index.html)**  
> _SICP_ uses the Scheme dialect of Lisp. Scheme implementations are available for most common platforms. From MIT, we supply free implementations of the MIT Scheme programming environment. This page provides information on how to obtain copies of MIT Scheme as well as other implementations.
> 
> **[A note on our course at MIT](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/course.html)**  
> This note describes the organization of our course as MIT, as well as an overview of the educational approach underlying the course and _SICP_. There is also a [sample syllabus](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/syllabus.html) for the course.
> 
> **[Schools using _SICP_](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/adopt-list.html)**  
> A partial and growing list of universities and colleges that are using _SICP_ for either an introductory or an advanced course.
> 
> Comments or questions [Contact Us](https://mitpress.mit.edu/contact).

* * *

Last modified: Thu Apr 5 2018

Title Page
===================================================


                Structure and Interpretation
                  of Computer Programs
                     second edition 



            Harold Abelson and Gerald Jay Sussman
                   with Julie Sussman 
                foreword by Alan J. Perlis 





                        The MIT Press
            Cambridge, Massachusetts     London, England
                    McGraw-Hill Book Company
    New York     St. Louis     San Francisco     Montreal     Toronto 


This book is one of a series of texts written by faculty of the Electrical Engineering and Computer Science Department at the Massachusetts Institute of Technology. It was edited and produced by The MIT Press under a joint production-distribution arrangement with the McGraw-Hill Book Company.

**Ordering Information:**

_North America_  
Text orders should be addressed to the McGraw-Hill Book Company.  
All other orders should be addressed to The MIT Press.

_Outside North America_  
All orders should be addressed to The MIT Press or its local distributor.

© 1996 by The Massachusetts Institute of Technology  

Second edition

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)  
Structure and Interpretation of Computer Programs by [Harold Abelson and Gerald Jay Sussman with Julie Sussman](http://mitpress.mit.edu/sicp/) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) by the MIT Press.

This book was set by the authors using the LATEX typesetting system and was printed and bound in the United States of America.

**Library of Congress Cataloging-in-Publication Data**

    Abelson, Harold  
    Structure and interpretation of computer programs / Harold Abelson  
    and Gerald Jay Sussman, with Julie Sussman. -- 2nd ed.  
    p. cm. -- (Electrical engineering and computer science series)
    Includes bibliographical references and index.  
    ISBN 0-262-01153-0 (MIT Press hardcover)  
    ISBN 0-262-51087-1 (MIT Press paperback)  
    ISBN 0-07-000484-6 (McGraw-Hill hardcover)  
    1. Electronic digital computers -- Programming. 2. LISP (Computer  
    program language) I. Sussman, Gerald Jay. II. Sussman, Julie.  
    III. Title. IV. Series: MIT electrical engineering and computer  
    science series.  
    QA76.6.A255         1996  
    005.13'3 -- dc20              96-17756  

Fourth printing, 1999  


This book is dedicated, in respect and admiration, to the spirit that lives in the computer.

"I think that it's extraordinarily important that we in computer science keep fun in computing. When it started out, it was an awful lot of fun. Of course, the paying customers got shafted every now and then, and after a while we began to take their complaints seriously. We began to feel as if we really were responsible for the successful, error-free perfect use of these machines. I don't think we are. I think we're responsible for stretching them, setting them off in new directions, and keeping fun in the house. I hope the field of computer science never loses its sense of fun. Above all, I hope we don't become missionaries. Don't feel as if you're Bible salesmen. The world has too many of those already. What you know about computing other people will learn. Don't feel as if the key to successful computing is only in your hands. What's in your hands, I think and hope, is intelligence: the ability to see the machine as more than when you were first led up to it, that you can make it more."

Alan J. Perlis (April 1, 1922-February 7, 1990)

TOC Contents
===================================================

  **[Foreword](#_chap_Temp_2)**  

  **[Preface to the Second Edition](#_chap_Temp_3)**  

  **[Preface to the First Edition](#_chap_Temp_4)**  

  **[Acknowledgments](#_chap_Temp_5)**  

  **[1 Building Abstractions with Procedures](#_chap_1)**  
    [1.1 The Elements of Programming](#_sec_1.1)  
      [1.1.1 Expressions](#_sec_1.1.1)  
      [1.1.2 Naming and the Environment](#_sec_1.1.2)  
      [1.1.3 Evaluating Combinations](#_sec_1.1.3)  
      [1.1.4 Compound Procedures](#_sec_1.1.4)  
      [1.1.5 The Substitution Model for Procedure Application](#_sec_1.1.5)  
      [1.1.6 Conditional Expressions and Predicates](#_sec_1.1.6)  
      [1.1.7 Example: Square Roots by Newton's Method](#_sec_1.1.7)  
      [1.1.8 Procedures as Black-Box Abstractions](#_sec_1.1.8)  
    [1.2 Procedures and the Processes They Generate](#_sec_1.2)  
      [1.2.1 Linear Recursion and Iteration](#_sec_1.2.1)  
      [1.2.2 Tree Recursion](#_sec_1.2.2)  
      [1.2.3 Orders of Growth](#_sec_1.2.3)  
      [1.2.4 Exponentiation](#_sec_1.2.4)  
      [1.2.5 Greatest Common Divisors](#_sec_1.2.5)  
      [1.2.6 Example: Testing for Primality](#_sec_1.2.6)  
    [1.3 Formulating Abstractions with Higher-Order Procedures](#_sec_1.3)  
      [1.3.1 Procedures as Arguments](#_sec_1.3.1)  
      [1.3.2 Constructing Procedures Using Lambda](#_sec_1.3.2)  
      [1.3.3 Procedures as General Methods](#_sec_1.3.3)  
      [1.3.4 Procedures as Returned Values](#_sec_1.3.4)  

  **[2 Building Abstractions with Data](#_chap_2)**  
    [2.1 Introduction to Data Abstraction](#_sec_2.1)  
      [2.1.1 Example: Arithmetic Operations for Rational Numbers](#_sec_2.1.1)  
      [2.1.2 Abstraction Barriers](#_sec_2.1.2)  
      [2.1.3 What Is Meant by Data?](#_sec_2.1.3)  
      [2.1.4 Extended Exercise: Interval Arithmetic](#_sec_2.1.4)  
    [2.2 Hierarchical Data and the Closure Property](#_sec_2.2)  
      [2.2.1 Representing Sequences](#_sec_2.2.1)  
      [2.2.2 Hierarchical Structures](#_sec_2.2.2)  
      [2.2.3 Sequences as Conventional Interfaces](#_sec_2.2.3)  
      [2.2.4 Example: A Picture Language](#_sec_2.2.4)  
    [2.3 Symbolic Data](#_sec_2.3)  
      [2.3.1 Quotation](#_sec_2.3.1)  
      [2.3.2 Example: Symbolic Differentiation](#_sec_2.3.2)  
      [2.3.3 Example: Representing Sets](#_sec_2.3.3)  
      [2.3.4 Example: Huffman Encoding Trees](#_sec_2.3.4)  
    [2.4 Multiple Representations for Abstract Data](#_sec_2.4)  
      [2.4.1 Representations for Complex Numbers](#_sec_2.4.1)  
      [2.4.2 Tagged data](#_sec_2.4.2)  
      [2.4.3 Data-Directed Programming and Additivity](#_sec_2.4.3)  
    [2.5 Systems with Generic Operations](#_sec_2.5)  
      [2.5.1 Generic Arithmetic Operations](#_sec_2.5.1)  
      [2.5.2 Combining Data of Different Types](#_sec_2.5.2)  
      [2.5.3 Example: Symbolic Algebra](#_sec_2.5.3)  

  **[3 Modularity, Objects, and State](#_chap_3)**  
    [3.1 Assignment and Local State](#_sec_3.1)  
      [3.1.1 Local State Variables](#_sec_3.1.1)  
      [3.1.2 The Benefits of Introducing Assignment](#_sec_3.1.2)  
      [3.1.3 The Costs of Introducing Assignment](#_sec_3.1.3)  
    [3.2 The Environment Model of Evaluation](#_sec_3.2)  
      [3.2.1 The Rules for Evaluation](#_sec_3.2.1)  
      [3.2.2 Applying Simple Procedures](#_sec_3.2.2)  
      [3.2.3 Frames as the Repository of Local State](#_sec_3.2.3)  
      [3.2.4 Internal Definitions](#_sec_3.2.4)  
    [3.3 Modeling with Mutable Data](#_sec_3.3)  
      [3.3.1 Mutable List Structure](#_sec_3.3.1)  
      [3.3.2 Representing Queues](#_sec_3.3.2)  
      [3.3.3 Representing Tables](#_sec_3.3.3)  
      [3.3.4 A Simulator for Digital Circuits](#_sec_3.3.4)  
      [3.3.5 Propagation of Constraints](#_sec_3.3.5)  
    [3.4 Concurrency: Time Is of the Essence](#_sec_3.4)  
      [3.4.1 The Nature of Time in Concurrent Systems](#_sec_3.4.1)  
      [3.4.2 Mechanisms for Controlling Concurrency](#_sec_3.4.2)  
    [3.5 Streams](#_sec_3.5)  
      [3.5.1 Streams Are Delayed Lists](#_sec_3.5.1)  
      [3.5.2 Infinite Streams](#_sec_3.5.2)  
      [3.5.3 Exploiting the Stream Paradigm](#_sec_3.5.3)  
      [3.5.4 Streams and Delayed Evaluation](#_sec_3.5.4)  
      [3.5.5 Modularity of Functional Programs and Modularity of Objects](#_sec_3.5.5)  

  **[4 Metalinguistic Abstraction](#_chap_4)**  
    [4.1 The Metacircular Evaluator](#_sec_4.1)  
      [4.1.1 The Core of the Evaluator](#_sec_4.1.1)  
      [4.1.2 Representing Expressions](#_sec_4.1.2)  
      [4.1.3 Evaluator Data Structures](#_sec_4.1.3)  
      [4.1.4 Running the Evaluator as a Program](#_sec_4.1.4)  
      [4.1.5 Data as Programs](#_sec_4.1.5)  
      [4.1.6 Internal Definitions](#_sec_4.1.6)  
      [4.1.7 Separating Syntactic Analysis from Execution](#_sec_4.1.7)  
    [4.2 Variations on a Scheme -- Lazy Evaluation](#_sec_4.2)  
      [4.2.1 Normal Order and Applicative Order](#_sec_4.2.1)  
      [4.2.2 An Interpreter with Lazy Evaluation](#_sec_4.2.2)  
      [4.2.3 Streams as Lazy Lists](#_sec_4.2.3)  
    [4.3 Variations on a Scheme -- Nondeterministic Computing](#_sec_4.3)  
      [4.3.1 Amb and Search](#_sec_4.3.1)  
      [4.3.2 Examples of Nondeterministic Programs](#_sec_4.3.2)  
      [4.3.3 Implementing the Amb Evaluator](#_sec_4.3.3)  
    [4.4 Logic Programming](#_sec_4.4)  
      [4.4.1 Deductive Information Retrieval](#_sec_4.4.1)  
      [4.4.2 How the Query System Works](#_sec_4.4.2)  
      [4.4.3 Is Logic Programming Mathematical Logic?](#_sec_4.4.3)  
      [4.4.4 Implementing the Query System](#_sec_4.4.4)  

  **[5 Computing with Register Machines](#_chap_5)**  
    [5.1 Designing Register Machines](#_sec_5.1)  
      [5.1.1 A Language for Describing Register Machines](#_sec_5.1.1)  
      [5.1.2 Abstraction in Machine Design](#_sec_5.1.2)  
      [5.1.3 Subroutines](#_sec_5.1.3)  
      [5.1.4 Using a Stack to Implement Recursion](#_sec_5.1.4)  
      [5.1.5 Instruction Summary](#_sec_5.1.5)  
    [5.2 A Register-Machine Simulator](#_sec_5.2)  
      [5.2.1 The Machine Model](#_sec_5.2.1)  
      [5.2.2 The Assembler](#_sec_5.2.2)  
      [5.2.3 Generating Execution Procedures for Instructions](#_sec_5.2.3)  
      [5.2.4 Monitoring Machine Performance](#_sec_5.2.4)  
    [5.3 Storage Allocation and Garbage Collection](#_sec_5.3)  
      [5.3.1 Memory as Vectors](#_sec_5.3.1)  
      [5.3.2 Maintaining the Illusion of Infinite Memory](#_sec_5.3.2)  
    [5.4 The Explicit-Control Evaluator](#_sec_5.4)  
      [5.4.1 The Core of the Explicit-Control Evaluator](#_sec_5.4.1)  
      [5.4.2 Sequence Evaluation and Tail Recursion](#_sec_5.4.2)  
      [5.4.3 Conditionals, Assignments, and Definitions](#_sec_5.4.3)  
      [5.4.4 Running the Evaluator](#_sec_5.4.4)  
    [5.5 Compilation](#_sec_5.5)  
      [5.5.1 Structure of the Compiler](#_sec_5.5.1)  
      [5.5.2 Compiling Expressions](#_sec_5.5.2)  
      [5.5.3 Compiling Combinations](#_sec_5.5.3)  
      [5.5.4 Combining Instruction Sequences](#_sec_5.5.4)  
      [5.5.5 An Example of Compiled Code](#_sec_5.5.5)  
      [5.5.6 Lexical Addressing](#_sec_5.5.6)  
      [5.5.7 Interfacing Compiled Code to the Evaluator](#_sec_5.5.7)  

  **[References](#_chap_Temp_849)**  

  **[List of Exercises](#_chap_Temp_850)**  

  **[Index](#_chap_Temp_851)**  

<a name="_chap_Temp_2"></a>

Foreword
===================================================

Educators, generals, dieticians, psychologists, and parents program. Armies, students, and some societies are programmed. An assault on large problems employs a succession of programs, most of which spring into existence en route. These programs are rife with issues that appear to be particular to the problem at hand. To appreciate programming as an intellectual activity in its own right you must turn to computer programming; you must read and write computer programs -- many of them. It doesn't matter much what the programs are about or what applications they serve. What does matter is how well they perform and how smoothly they fit with other programs in the creation of still greater programs. The programmer must seek both perfection of part and adequacy of collection. In this book the use of \`\`program'' is focused on the creation, execution, and study of programs written in a dialect of Lisp for execution on a digital computer. Using Lisp we restrict or limit not what we may program, but only the notation for our program descriptions.

Our traffic with the subject matter of this book involves us with three foci of phenomena: the human mind, collections of computer programs, and the computer. Every computer program is a model, hatched in the mind, of a real or mental process. These processes, arising from human experience and thought, are huge in number, intricate in detail, and at any time only partially understood. They are modeled to our permanent satisfaction rarely by our computer programs. Thus even though our programs are carefully handcrafted discrete collections of symbols, mosaics of interlocking functions, they continually evolve: we change them as our perception of the model deepens, enlarges, generalizes until the model ultimately attains a metastable place within still another model with which we struggle. The source of the exhilaration associated with computer programming is the continual unfolding within the mind and on the computer of mechanisms expressed as programs and the explosion of perception they generate. If art interprets our dreams, the computer executes them in the guise of programs!

For all its power, the computer is a harsh taskmaster. Its programs must be correct, and what we wish to say must be said accurately in every detail. As in every other symbolic activity, we become convinced of program truth through argument. Lisp itself can be assigned a semantics (another model, by the way), and if a program's function can be specified, say, in the predicate calculus, the proof methods of logic can be used to make an acceptable correctness argument. Unfortunately, as programs get large and complicated, as they almost always do, the adequacy, consistency, and correctness of the specifications themselves become open to doubt, so that complete formal arguments of correctness seldom accompany large programs. Since large programs grow from small ones, it is crucial that we develop an arsenal of standard program structures of whose correctness we have become sure -- we call them idioms -- and learn to combine them into larger structures using organizational techniques of proven value. These techniques are treated at length in this book, and understanding them is essential to participation in the Promethean enterprise called programming. More than anything else, the uncovering and mastery of powerful organizational techniques accelerates our ability to create large, significant programs. Conversely, since writing large programs is very taxing, we are stimulated to invent new methods of reducing the mass of function and detail to be fitted into large programs.

Unlike programs, computers must obey the laws of physics. If they wish to perform rapidly -- a few nanoseconds per state change -- they must transmit electrons only small distances (at most 1 1/2 feet). The heat generated by the huge number of devices so concentrated in space has to be removed. An exquisite engineering art has been developed balancing between multiplicity of function and density of devices. In any event, hardware always operates at a level more primitive than that at which we care to program. The processes that transform our Lisp programs to \`\`machine'' programs are themselves abstract models which we program. Their study and creation give a great deal of insight into the organizational programs associated with programming arbitrary models. Of course the computer itself can be so modeled. Think of it: the behavior of the smallest physical switching element is modeled by quantum mechanics described by differential equations whose detailed behavior is captured by numerical approximations represented in computer programs executing on computers composed of ...!

It is not merely a matter of tactical convenience to separately identify the three foci. Even though, as they say, it's all in the head, this logical separation induces an acceleration of symbolic traffic between these foci whose richness, vitality, and potential is exceeded in human experience only by the evolution of life itself. At best, relationships between the foci are metastable. The computers are never large enough or fast enough. Each breakthrough in hardware technology leads to more massive programming enterprises, new organizational principles, and an enrichment of abstract models. Every reader should ask himself periodically \`\`Toward what end, toward what end?'' -- but do not ask it too often lest you pass up the fun of programming for the constipation of bittersweet philosophy.

Among the programs we write, some (but never enough) perform a precise mathematical function such as sorting or finding the maximum of a sequence of numbers, determining primality, or finding the square root. We call such programs algorithms, and a great deal is known of their optimal behavior, particularly with respect to the two important parameters of execution time and data storage requirements. A programmer should acquire good algorithms and idioms. Even though some programs resist precise specifications, it is the responsibility of the programmer to estimate, and always to attempt to improve, their performance.

Lisp is a survivor, having been in use for about a quarter of a century. Among the active programming languages only Fortran has had a longer life. Both languages have supported the programming needs of important areas of application, Fortran for scientific and engineering computation and Lisp for artificial intelligence. These two areas continue to be important, and their programmers are so devoted to these two languages that Lisp and Fortran may well continue in active use for at least another quarter-century.

Lisp changes. The Scheme dialect used in this text has evolved from the original Lisp and differs from the latter in several important ways, including static scoping for variable binding and permitting functions to yield functions as values. In its semantic structure Scheme is as closely akin to Algol 60 as to early Lisps. Algol 60, never to be an active language again, lives on in the genes of Scheme and Pascal. It would be difficult to find two languages that are the communicating coin of two more different cultures than those gathered around these two languages. Pascal is for building pyramids -- imposing, breathtaking, static structures built by armies pushing heavy blocks into place. Lisp is for building organisms -- imposing, breathtaking, dynamic structures built by squads fitting fluctuating myriads of simpler organisms into place. The organizing principles used are the same in both cases, except for one extraordinarily important difference: The discretionary exportable functionality entrusted to the individual Lisp programmer is more than an order of magnitude greater than that to be found within Pascal enterprises. Lisp programs inflate libraries with functions whose utility transcends the application that produced them. The list, Lisp's native data structure, is largely responsible for such growth of utility. The simple structure and natural applicability of lists are reflected in functions that are amazingly nonidiosyncratic. In Pascal the plethora of declarable data structures induces a specialization within functions that inhibits and penalizes casual cooperation. It is better to have 100 functions operate on one data structure than to have 10 functions operate on 10 data structures. As a result the pyramid must stand unchanged for a millennium; the organism must evolve or perish.

To illustrate this difference, compare the treatment of material and exercises within this book with that in any first-course text using Pascal. Do not labor under the illusion that this is a text digestible at MIT only, peculiar to the breed found there. It is precisely what a serious book on programming Lisp must be, no matter who the student is or where it is used.

Note that this is a text about programming, unlike most Lisp books, which are used as a preparation for work in artificial intelligence. After all, the critical programming concerns of software engineering and artificial intelligence tend to coalesce as the systems under investigation become larger. This explains why there is such growing interest in Lisp outside of artificial intelligence.

As one would expect from its goals, artificial intelligence research generates many significant programming problems. In other programming cultures this spate of problems spawns new languages. Indeed, in any very large programming task a useful organizing principle is to control and isolate traffic within the task modules via the invention of language. These languages tend to become less primitive as one approaches the boundaries of the system where we humans interact most often. As a result, such systems contain complex language-processing functions replicated many times. Lisp has such a simple syntax and semantics that parsing can be treated as an elementary task. Thus parsing technology plays almost no role in Lisp programs, and the construction of language processors is rarely an impediment to the rate of growth and change of large Lisp systems. Finally, it is this very simplicity of syntax and semantics that is responsible for the burden and freedom borne by all Lisp programmers. No Lisp program of any size beyond a few lines can be written without being saturated with discretionary functions. Invent and fit; have fits and reinvent! We toast the Lisp programmer who pens his thoughts within nests of parentheses.

Alan J. Perlis  
New Haven, Connecticut

<a name="_chap_Temp_3"></a>

Preface to the Second Edition
==================================================

    Is it possible that software is not like anything else, that it is meant to be discarded: that the whole point is to always see it as a soap bubble?

    Alan J. Perlis

The material in this book has been the basis of MIT's entry-level computer science subject since 1980. We had been teaching this material for four years when the first edition was published, and twelve more years have elapsed until the appearance of this second edition. We are pleased that our work has been widely adopted and incorporated into other texts. We have seen our students take the ideas and programs in this book and build them in as the core of new computer systems and languages. In literal realization of an ancient Talmudic pun, our students have become our builders. We are lucky to have such capable students and such accomplished builders.

In preparing this edition, we have incorporated hundreds of clarifications suggested by our own teaching experience and the comments of colleagues at MIT and elsewhere. We have redesigned most of the major programming systems in the book, including the generic-arithmetic system, the interpreters, the register-machine simulator, and the compiler; and we have rewritten all the program examples to ensure that any Scheme implementation conforming to the IEEE Scheme standard (IEEE 1990) will be able to run the code.

This edition emphasizes several new themes. The most important of these is the central role played by different approaches to dealing with time in computational models: objects with state, concurrent programming, functional programming, lazy evaluation, and nondeterministic programming. We have included new sections on concurrency and nondeterminism, and we have tried to integrate this theme throughout the book.

The first edition of the book closely followed the syllabus of our MIT one-semester subject. With all the new material in the second edition, it will not be possible to cover everything in a single semester, so the instructor will have to pick and choose. In our own teaching, we sometimes skip the section on logic programming (section [4.4](#_sec_4.4)), we have students use the register-machine simulator but we do not cover its implementation (section [5.2](#_sec_5.2)), and we give only a cursory overview of the compiler (section [5.5](#_sec_5.5)). Even so, this is still an intense course. Some instructors may wish to cover only the first three or four chapters, leaving the other material for subsequent courses.

The World-Wide-Web site mitpress.mit.edu/sicp provides support for users of this book. This includes programs from the book, sample programming assignments, supplementary materials, and downloadable implementations of the Scheme dialect of Lisp.

<a name="_chap_Temp_4"></a>

Preface to the First Edition
==================================================

A computer is like a violin. You can imagine a novice trying first a phonograph and then a violin. The latter, he says, sounds terrible. That is the argument we have heard from our humanists and most of our computer scientists. Computer programs are good, they say, for particular purposes, but they aren't flexible. Neither is a violin, or a typewriter, until you learn how to use it.

Marvin Minsky, \`\`Why Programming Is a Good  
Medium for Expressing Poorly-Understood and Sloppily-Formulated Ideas''

\`\`The Structure and Interpretation of Computer Programs'' is the entry-level subject in computer science at the Massachusetts Institute of Technology. It is required of all students at MIT who major in electrical engineering or in computer science, as one-fourth of the \`\`common core curriculum,'' which also includes two subjects on circuits and linear systems and a subject on the design of digital systems. We have been involved in the development of this subject since 1978, and we have taught this material in its present form since the fall of 1980 to between 600 and 700 students each year. Most of these students have had little or no prior formal training in computation, although many have played with computers a bit and a few have had extensive programming or hardware-design experience.

Our design of this introductory computer-science subject reflects two major concerns. First, we want to establish the idea that a computer language is not just a way of getting a computer to perform operations but rather that it is a novel formal medium for expressing ideas about methodology. Thus, programs must be written for people to read, and only incidentally for machines to execute. Second, we believe that the essential material to be addressed by a subject at this level is not the syntax of particular programming-language constructs, nor clever algorithms for computing particular functions efficiently, nor even the mathematical analysis of algorithms and the foundations of computing, but rather the techniques used to control the intellectual complexity of large software systems.

Our goal is that students who complete this subject should have a good feel for the elements of style and the aesthetics of programming. They should have command of the major techniques for controlling complexity in a large system. They should be capable of reading a 50-page-long program, if it is written in an exemplary style. They should know what not to read, and what they need not understand at any moment. They should feel secure about modifying a program, retaining the spirit and style of the original author.

These skills are by no means unique to computer programming. The techniques we teach and draw upon are common to all of engineering design. We control complexity by building abstractions that hide details when appropriate. We control complexity by establishing conventional interfaces that enable us to construct systems by combining standard, well-understood pieces in a \`\`mix and match'' way. We control complexity by establishing new languages for describing a design, each of which emphasizes particular aspects of the design and deemphasizes others.

Underlying our approach to this subject is our conviction that \`\`computer science'' is not a science and that its significance has little to do with computers. The computer revolution is a revolution in the way we think and in the way we express what we think. The essence of this change is the emergence of what might best be called _procedural epistemology_ -- the study of the structure of knowledge from an imperative point of view, as opposed to the more declarative point of view taken by classical mathematical subjects. Mathematics provides a framework for dealing precisely with notions of \`\`what is.'' Computation provides a framework for dealing precisely with notions of \`\`how to.''

In teaching our material we use a dialect of the programming language Lisp. We never formally teach the language, because we don't have to. We just use it, and students pick it up in a few days. This is one great advantage of Lisp-like languages: They have very few ways of forming compound expressions, and almost no syntactic structure. All of the formal properties can be covered in an hour, like the rules of chess. After a short time we forget about syntactic details of the language (because there are none) and get on with the real issues -- figuring out what we want to compute, how we will decompose problems into manageable parts, and how we will work on the parts. Another advantage of Lisp is that it supports (but does not enforce) more of the large-scale strategies for modular decomposition of programs than any other language we know. We can make procedural and data abstractions, we can use higher-order functions to capture common patterns of usage, we can model local state using assignment and data mutation, we can link parts of a program with streams and delayed evaluation, and we can easily implement embedded languages. All of this is embedded in an interactive environment with excellent support for incremental program design, construction, testing, and debugging. We thank all the generations of Lisp wizards, starting with John McCarthy, who have fashioned a fine tool of unprecedented power and elegance.

Scheme, the dialect of Lisp that we use, is an attempt to bring together the power and elegance of Lisp and Algol. From Lisp we take the metalinguistic power that derives from the simple syntax, the uniform representation of programs as data objects, and the garbage-collected heap-allocated data. From Algol we take lexical scoping and block structure, which are gifts from the pioneers of programming-language design who were on the Algol committee. We wish to cite John Reynolds and Peter Landin for their insights into the relationship of Church's lambda calculus to the structure of programming languages. We also recognize our debt to the mathematicians who scouted out this territory decades before computers appeared on the scene. These pioneers include Alonzo Church, Barkley Rosser, Stephen Kleene, and Haskell Curry.

<a name="_chap_Temp_5"></a>

Acknowledgments
==================================================

We would like to thank the many people who have helped us develop this book and this curriculum.

Our subject is a clear intellectual descendant of \`\`6.231,'' a wonderful subject on programming linguistics and the lambda calculus taught at MIT in the late 1960s by Jack Wozencraft and Arthur Evans, Jr.

We owe a great debt to Robert Fano, who reorganized MIT's introductory curriculum in electrical engineering and computer science to emphasize the principles of engineering design. He led us in starting out on this enterprise and wrote the first set of subject notes from which this book evolved.

Much of the style and aesthetics of programming that we try to teach were developed in conjunction with Guy Lewis Steele Jr., who collaborated with Gerald Jay Sussman in the initial development of the Scheme language. In addition, David Turner, Peter Henderson, Dan Friedman, David Wise, and Will Clinger have taught us many of the techniques of the functional programming community that appear in this book.

Joel Moses taught us about structuring large systems. His experience with the Macsyma system for symbolic computation provided the insight that one should avoid complexities of control and concentrate on organizing the data to reflect the real structure of the world being modeled.

Marvin Minsky and Seymour Papert formed many of our attitudes about programming and its place in our intellectual lives. To them we owe the understanding that computation provides a means of expression for exploring ideas that would otherwise be too complex to deal with precisely. They emphasize that a student's ability to write and modify programs provides a powerful medium in which exploring becomes a natural activity.

We also strongly agree with Alan Perlis that programming is lots of fun and we had better be careful to support the joy of programming. Part of this joy derives from observing great masters at work. We are fortunate to have been apprentice programmers at the feet of Bill Gosper and Richard Greenblatt.

It is difficult to identify all the people who have contributed to the development of our curriculum. We thank all the lecturers, recitation instructors, and tutors who have worked with us over the past fifteen years and put in many extra hours on our subject, especially Bill Siebert, Albert Meyer, Joe Stoy, Randy Davis, Louis Braida, Eric Grimson, Rod Brooks, Lynn Stein, and Peter Szolovits. We would like to specially acknowledge the outstanding teaching contributions of Franklyn Turbak, now at Wellesley; his work in undergraduate instruction set a standard that we can all aspire to. We are grateful to Jerry Saltzer and Jim Miller for helping us grapple with the mysteries of concurrency, and to Peter Szolovits and David McAllester for their contributions to the exposition of nondeterministic evaluation in chapter 4.

Many people have put in significant effort presenting this material at other universities. Some of the people we have worked closely with are Jacob Katzenelson at the Technion, Hardy Mayer at the University of California at Irvine, Joe Stoy at Oxford, Elisha Sacks at Purdue, and Jan Komorowski at the Norwegian University of Science and Technology. We are exceptionally proud of our colleagues who have received major teaching awards for their adaptations of this subject at other universities, including Kenneth Yip at Yale, Brian Harvey at the University of California at Berkeley, and Dan Huttenlocher at Cornell.

Al Moyé arranged for us to teach this material to engineers at Hewlett-Packard, and for the production of videotapes of these lectures. We would like to thank the talented instructors -- in particular Jim Miller, Bill Siebert, and Mike Eisenberg -- who have designed continuing education courses incorporating these tapes and taught them at universities and industry all over the world.

Many educators in other countries have put in significant work translating the first edition. Michel Briand, Pierre Chamard, and André Pic produced a French edition; Susanne Daniels-Herold produced a German edition; and Fumio Motoyoshi produced a Japanese edition. We do not know who produced the Chinese edition, but we consider it an honor to have been selected as the subject of an \`\`unauthorized'' translation.

It is hard to enumerate all the people who have made technical contributions to the development of the Scheme systems we use for instructional purposes. In addition to Guy Steele, principal wizards have included Chris Hanson, Joe Bowbeer, Jim Miller, Guillermo Rozas, and Stephen Adams. Others who have put in significant time are Richard Stallman, Alan Bawden, Kent Pitman, Jon Taft, Neil Mayle, John Lamping, Gwyn Osnos, Tracy Larrabee, George Carrette, Soma Chaudhuri, Bill Chiarchiaro, Steven Kirsch, Leigh Klotz, Wayne Noss, Todd Cass, Patrick O'Donnell, Kevin Theobald, Daniel Weise, Kenneth Sinclair, Anthony Courtemanche, Henry M. Wu, Andrew Berlin, and Ruth Shyu.

Beyond the MIT implementation, we would like to thank the many people who worked on the IEEE Scheme standard, including William Clinger and Jonathan Rees, who edited the R4RS, and Chris Haynes, David Bartley, Chris Hanson, and Jim Miller, who prepared the IEEE standard.

Dan Friedman has been a long-time leader of the Scheme community. The community's broader work goes beyond issues of language design to encompass significant educational innovations, such as the high-school curriculum based on EdScheme by Schemer's Inc., and the wonderful books by Mike Eisenberg and by Brian Harvey and Matthew Wright.

We appreciate the work of those who contributed to making this a real book, especially Terry Ehling, Larry Cohen, and Paul Bethge at the MIT Press. Ella Mazel found the wonderful cover image. For the second edition we are particularly grateful to Bernard and Ella Mazel for help with the book design, and to David Jones, TEX wizard extraordinaire. We also are indebted to those readers who made penetrating comments on the new draft: Jacob Katzenelson, Hardy Mayer, Jim Miller, and especially Brian Harvey, who did unto this book as Julie did unto his book _Simply Scheme_.

Finally, we would like to acknowledge the support of the organizations that have encouraged this work over the years, including support from Hewlett-Packard, made possible by Ira Goldstein and Joel Birnbaum, and support from DARPA, made possible by Bob Kahn.

<a name="_chap_1"></a>

[Chapter 1 Building Abstractions with Procedures](#_chap_1)
===================================================

The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.

John Locke, _An Essay Concerning Human Understanding_ (1690)

We are about to study the idea of a _computational process_. Computational processes are abstract beings that inhabit computers. As they evolve, processes manipulate other abstract things called _data_. The evolution of a process is directed by a pattern of rules called a _program_. People create programs to direct processes. In effect, we conjure the spirits of the computer with our spells.

A computational process is indeed much like a sorcerer's idea of a spirit. It cannot be seen or touched. It is not composed of matter at all. However, it is very real. It can perform intellectual work. It can answer questions. It can affect the world by disbursing money at a bank or by controlling a robot arm in a factory. The programs we use to conjure processes are like a sorcerer's spells. They are carefully composed from symbolic expressions in arcane and esoteric _programming languages_ that prescribe the tasks we want our processes to perform.

A computational process, in a correctly working computer, executes programs precisely and accurately. Thus, like the sorcerer's apprentice, novice programmers must learn to understand and to anticipate the consequences of their conjuring. Even small errors (usually called _bugs_ or _glitches_) in programs can have complex and unanticipated consequences.

Fortunately, learning to program is considerably less dangerous than learning sorcery, because the spirits we deal with are conveniently contained in a secure way. Real-world programming, however, requires care, expertise, and wisdom. A small bug in a computer-aided design program, for example, can lead to the catastrophic collapse of an airplane or a dam or the self-destruction of an industrial robot.

Master software engineers have the ability to organize programs so that they can be reasonably sure that the resulting processes will perform the tasks intended. They can visualize the behavior of their systems in advance. They know how to structure programs so that unanticipated problems do not lead to catastrophic consequences, and when problems do arise, they can _debug_ their programs. Well-designed computational systems, like well-designed automobiles or nuclear reactors, are designed in a modular manner, so that the parts can be constructed, replaced, and debugged separately.

#### [Programming in Lisp](book-Z-H-4.html#%_toc_%_sec_Temp_6)

We need an appropriate language for describing processes, and we will use for this purpose the programming language Lisp. Just as our everyday thoughts are usually expressed in our natural language (such as English, French, or Japanese), and descriptions of quantitative phenomena are expressed with mathematical notations, our procedural thoughts will be expressed in Lisp. Lisp was invented in the late 1950s as a formalism for reasoning about the use of certain kinds of logical expressions, called _recursion equations_, as a model for computation. The language was conceived by John McCarthy and is based on his paper \`\`Recursive Functions of Symbolic Expressions and Their Computation by Machine'' (McCarthy 1960).

Despite its inception as a mathematical formalism, Lisp is a practical programming language. A Lisp _interpreter_ is a machine that carries out processes described in the Lisp language. The first Lisp interpreter was implemented by McCarthy with the help of colleagues and students in the Artificial Intelligence Group of the MIT Research Laboratory of Electronics and in the MIT Computation Center.[1](book-Z-H-9.html#footnote_Temp_7) Lisp, whose name is an acronym for LISt Processing, was designed to provide symbol-manipulating capabilities for attacking programming problems such as the symbolic differentiation and integration of algebraic expressions. It included for this purpose new data objects known as atoms and lists, which most strikingly set it apart from all other languages of the period.

Lisp was not the product of a concerted design effort. Instead, it evolved informally in an experimental manner in response to users' needs and to pragmatic implementation considerations. Lisp's informal evolution has continued through the years, and the community of Lisp users has traditionally resisted attempts to promulgate any \`\`official'' definition of the language. This evolution, together with the flexibility and elegance of the initial conception, has enabled Lisp, which is the second oldest language in widespread use today (only Fortran is older), to continually adapt to encompass the most modern ideas about program design. Thus, Lisp is by now a family of dialects, which, while sharing most of the original features, may differ from one another in significant ways. The dialect of Lisp used in this book is called Scheme.[2](book-Z-H-9.html#footnote_Temp_8)

Because of its experimental character and its emphasis on symbol manipulation, Lisp was at first very inefficient for numerical computations, at least in comparison with Fortran. Over the years, however, Lisp compilers have been developed that translate programs into machine code that can perform numerical computations reasonably efficiently. And for special applications, Lisp has been used with great effectiveness.[3](book-Z-H-9.html#footnote_Temp_9) Although Lisp has not yet overcome its old reputation as hopelessly inefficient, Lisp is now used in many applications where efficiency is not the central concern. For example, Lisp has become a language of choice for operating-system shell languages and for extension languages for editors and computer-aided design systems.

If Lisp is not a mainstream language, why are we using it as the framework for our discussion of programming? Because the language possesses unique features that make it an excellent medium for studying important programming constructs and data structures and for relating them to the linguistic features that support them. The most significant of these features is the fact that Lisp descriptions of processes, called _procedures_, can themselves be represented and manipulated as Lisp data. The importance of this is that there are powerful program-design techniques that rely on the ability to blur the traditional distinction between \`\`passive'' data and \`\`active'' processes. As we shall discover, Lisp's flexibility in handling procedures as data makes it one of the most convenient languages in existence for exploring these techniques. The ability to represent procedures as data also makes Lisp an excellent language for writing programs that must manipulate other programs as data, such as the interpreters and compilers that support computer languages. Above and beyond these considerations, programming in Lisp is great fun.

* * *

[1](book-Z-H-9.html#call_footnote_Temp_7) The _Lisp 1 Programmer's Manual_ appeared in 1960, and the _Lisp 1.5 Programmer's Manual_ (McCarthy 1965) was published in 1962. The early history of Lisp is described in McCarthy 1978.

[2](book-Z-H-9.html#call_footnote_Temp_8) The two dialects in which most major Lisp programs of the 1970s were written are MacLisp (Moon 1978; Pitman 1983), developed at the MIT Project MAC, and Interlisp (Teitelman 1974), developed at Bolt Beranek and Newman Inc. and the Xerox Palo Alto Research Center. Portable Standard Lisp (Hearn 1969; Griss 1981) was a Lisp dialect designed to be easily portable between different machines. MacLisp spawned a number of subdialects, such as Franz Lisp, which was developed at the University of California at Berkeley, and Zetalisp (Moon 1981), which was based on a special-purpose processor designed at the MIT Artificial Intelligence Laboratory to run Lisp very efficiently. The Lisp dialect used in this book, called Scheme (Steele 1975), was invented in 1975 by Guy Lewis Steele Jr. and Gerald Jay Sussman of the MIT Artificial Intelligence Laboratory and later reimplemented for instructional use at MIT. Scheme became an IEEE standard in 1990 (IEEE 1990). The Common Lisp dialect (Steele 1982, Steele 1990) was developed by the Lisp community to combine features from the earlier Lisp dialects to make an industrial standard for Lisp. Common Lisp became an ANSI standard in 1994 (ANSI 1994).

[3](book-Z-H-9.html#call_footnote_Temp_9) One such special application was a breakthrough computation of scientific importance -- an integration of the motion of the Solar System that extended previous results by nearly two orders of magnitude, and demonstrated that the dynamics of the Solar System is chaotic. This computation was made possible by new integration algorithms, a special-purpose compiler, and a special-purpose computer all implemented with the aid of software tools written in Lisp (Abelson et al. 1992; Sussman and Wisdom 1992).

\[Go to [first](book.html), [previous](book-Z-H-8.html), [next](book-Z-H-10.html) page;   [contents](book-Z-H-4.html#%_toc_start);   [index](book-Z-H-38.html#%_index_start)\]