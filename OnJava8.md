# 📜 On Java 8
1. https://www.onjava8.com/onjava8/
2. https://leanpub.com/onjava8
3. https://github.com/BruceEckel/OnJava8-Examples
4. https://github.com/Knn120/OnJava8-PDF
5. https://njuics.github.io/OnJava8/

About the Author

Bruce Eckel
Bruce Eckel is the author of the multi-award-winning Thinking in Java and Thinking in C++, and a number of other books on computer programming including Atomic Scala. He's given hundreds of presentations throughout the world and puts on alternative conferences and events like the www.WinterTechForum.com and developer retreats. He lives in Crested Butte, Colorado. Bruce has a BS in applied physics and an MS in computer engineering. His blog is at www.BruceEckel.com and his consulting, training and conference business is www.MindviewLLC.com.

Frontmatter
Bruce Eckel
EPISODE 192

## 🍀 Table of Contents

📜00. Preface
📜01. Introduction
📜02. What is an Object?
📜03. Installing Java and the Book Examples
📜04. Operators
📜05. Control Flow
📜06. Housekeeping
📜07. Implementation Hiding
📜08. Reuse
📜09. Polymorphism
📜10. Interfaces
📜11. Inner Classes
📜12. Collections
📜13. Functional Programming
📜14. Streams
📜15. Exceptions
📜16. Validating Your Code
📜17. Files
📜18. Strings
📜19. Reflection
📜20. Generics
📜21. Arrays
📜22. Enumerations
📜23. Annotations
📜24. Concurrent Programming
📜25. Patterns
📜Appendix: Supplements
📜Appendix: I/O Streams
📜Appendix: Standard I/O
📜Appendix: Understanding equals() and hashCode()
📜Appendix: Low-Level Concurrency
📜Appendix: Data Compression
📜Appendix: Object Serialization
📜Appendix: The Positive Legacy of C++ and Java
📜Appendix: Becoming a Programmer

📜Copyright
📜00. Preface
    00.01 Post-Java-8 Features in this Book
    00.02 This is Only an eBook
    00.03 Colophon
    00.04 Acknowledgements
    00.05 Dedication
📜01. Introduction
    01.01 Goals
    01.02 Language Design Errors
    01.03 Popularity
    01.04 Android Programmers
    01.05 Book Updates
    01.06 The New Java “Release Cadence”
    01.07 What About User Interfaces?
    01.08 JDK HTML Documentation
    01.09 Tested Examples
    01.10 Coding Standards
    01.11 Bug Reports
    01.12 Source Code
📜02. What is an Object?
    02.01 The Progress of Abstraction
    02.02 An Object Has an Interface
    02.03 Objects Provide Services
    02.04 The Hidden Implementation
    02.05 Reusing the Implementation
    02.06 Inheritance
    02.07 Interchangeable Objects with Polymorphism
    02.08 The Singly-Rooted Hierarchy
    02.09 Collections
    02.10 Object Creation & Lifetime
    02.11 Exception Handling: Dealing with Errors
    02.12 Summary
📜03. Installing Java and the Book Examples
    03.01 Editors
    03.02 The Shell
    03.03 Installing Java
    03.04 Verify Your Installation
    03.05 Installing and Running the Book Examples
    03.06 Objects Everywhere
    03.07 You Manipulate Objects with References
    03.08 You Must Create All the Objects
    03.09 Comments
    03.10 You Never Need to Destroy an Object
    03.11 Creating New Data Types: class
    03.12 Methods, Arguments, and Return Values
    03.13 Writing a Java Program
    03.14 Your First Java Program
    03.15 Coding Style
    03.16 Summary
📜04. Operators
    04.01 Using Java Operators
    04.02 Precedence
    04.03 Assignment
    04.04 Mathematical Operators
    04.05 Auto Increment and Decrement
    04.06 Relational Operators
    04.07 Logical Operators
    04.08 Literals
    04.09 Bitwise Operators
    04.10 Shift Operators
    04.11 Ternary if-else Operator
    04.12 String Operator + and +=
    04.13 Common Pitfalls When Using Operators
    04.14 Casting Operators
    04.15 Java Has No “sizeof”
    04.16 A Compendium of Operators
    04.17 Summary
📜05. Control Flow
    05.01 true and false
    05.02 if-else
    05.03 Iteration Statements
    05.04 For-in Syntax
    05.05 return
    05.06 break and continue
    05.07 The Infamous “Goto”
    05.08 switch
    05.09 Switching on Strings
    05.10 Summary
📜06. Housekeeping
    06.01 Guaranteed Initialization with the Constructor
    06.02 Method Overloading
    06.03 Zero-Argument Constructors
    06.04 The this Keyword
    06.05 Cleanup: Finalization and Garbage Collection
    06.06 Member Initialization
    06.07 Constructor Initialization
    06.08 Array Initialization
    06.09 Enumerated Types
    06.10 New Feature: Local Variable Type Inference
    06.11 Summary
📜07. Implementation Hiding
    07.1 package: the Library Unit
    07.2 Java Access Specifiers
    07.3 Interface and Implementation
    07.4 Class Access
    07.5 New Feature: Modules
    07.6 Summary
📜08. Reuse
    08.01 Composition Syntax
    08.02 Inheritance Syntax
    08.03 Delegation
    08.04 Combining Composition and Inheritance
    08.05 Choosing Composition vs. Inheritance
    08.06 protected
    08.07 Upcasting
    08.08 The final Keyword
    08.09 Initialization and Class Loading
    08.10 Summary
📜09. Polymorphism
    09.01 Upcasting Revisited
    09.02 The Twist
    09.03 Constructors and Polymorphism
    09.04 Covariant Return Types
    09.05 Designing with Inheritance
    09.06 Summary
📜10. Interfaces
    10.01 Abstract Classes and Methods
    10.02 Defining Interfaces
    10.03 Abstract Classes vs. Interfaces
    10.04 Complete Decoupling
    10.05 Combining Multiple Interfaces
    10.06 Extending an Interface with Inheritance
    10.07 Adapting to an Interface
    10.08 Fields in Interfaces
    10.09 Nesting Interfaces
    10.10 Interfaces and Factories
    10.11 New Feature: private Methods in Interfaces
    10.12 New Feature: Sealed Classes and Interfaces
    10.13 Summary
📜11. Inner Classes
    11.01 Creating Inner Classes
    11.02 The Link to the Outer Class
    11.03 Using .this and .new
    11.04 Inner Classes and Upcasting
    11.05 Inner Classes in Methods and Scopes
    11.06 Anonymous Inner Classes
    11.07 Nested Classes
    11.08 Why Inner Classes?
    11.09 Inheriting from Inner Classes
    11.10 Can Inner Classes Be Overridden?
    11.11 Local Inner Classes
    11.12 Inner-Class Identifiers
    11.13 Summary
📜12. Collections
    12.01 Generics and Type-Safe Collections
    12.02 Basic Concepts
    12.03 Adding Groups of Elements
    12.04 Printing Collections
    12.05 List
    12.06 Iterators
    12.07 LinkedList
    12.08 Stack
    12.09 Set
    12.10 Map
    12.11 New Feature: Records
    12.12 Queue
    12.13 Collection vs. Iterator
    12.14 for-in and Iterators
    12.15 Summary
📜13. Functional Programming
    13.01 Old vs. New
    13.02 Lambda Expressions
    13.03 Method References
    13.04 Functional Interfaces
    13.05 Higher-Order Functions
    13.06 Closures
    13.07 Function Composition
    13.08 Currying and Partial Evaluation
    13.09 Pure Functional Programming
    13.10 Summary
📜14. Streams
    14.01 Java 8 Stream Support
    14.02 Stream Creation
    14.03 Intermediate Operations
    14.04 Optional
    14.05 Terminal Operations
    14.06 Summary
📜15. Exceptions
    15.01 Concepts
    15.02 Basic Exceptions
    15.03 Catching an Exception
    15.04 Creating Your Own Exceptions
    15.05 The Exception Specification
    15.06 Catching Any Exception
    15.07 Standard Java Exceptions
    15.08 New Feature: Better NullPointerException Reporting
    15.09 Performing Cleanup with finally
    15.10 Exception Restrictions
    15.11 Constructors
    15.12 Try-With-Resources
    15.13 Exception Matching
    15.14 Alternative Approaches
    15.15 Exception Guidelines
    15.16 Summary
📜16. Validating Your Code
    16.01 Testing
    16.02 Preconditions
    16.03 Test-Driven Development
    16.04 Logging
    16.05 Debugging
    16.06 Benchmarking
    16.07 Profiling and Optimizing
    16.08 Style Checking
    16.09 Static Error Analysis
    16.10 Code Reviews
    16.11 Pair Programming
    16.12 Refactoring
    16.13 Continuous Integration
    16.14 Summary
📜17. Files
    17.01 File and Directory Paths
    17.02 Directories
    17.03 File Systems
    17.04 Watching a Path
    17.05 Finding Files
    17.06 Reading & Writing Files
    17.07 Summary
📜18. Strings
    18.01 Immutable Strings
    18.02 Overloading + vs. StringBuilder
    18.03 Unintended Recursion
    18.04 Operations on Strings
    18.05 Formatting Output
    18.06 New Feature: Text Blocks
    18.07 Regular Expressions
    18.08 Scanning Input
    18.09 StringTokenizer
    18.10 Summary
📜19. Reflection
    19.01 The Need for Reflection
    19.02 The Class Object
    19.03 Checking Before a Cast
    19.04 Registered Factories
    19.05 Instanceof vs. Class Equivalence
    19.06 Runtime Class Information
    19.07 Dynamic Proxies
    19.08 Using Optional
    19.09 Interfaces and Type Information
    19.10 Summary
📜20. Generics
    20.01 Comparison with C++
    20.02 Simple Generics
    20.03 Generic Interfaces
    20.04 Generic Methods
    20.05 Building Complex Models
    20.06 The Mystery of Erasure
    20.07 Compensating for Erasure
    20.08 Bounds
    20.09 Wildcards
    20.10 Issues
    20.11 Self-Bounded Types
    20.12 Dynamic Type Safety
    20.13 Exceptions
    20.14 Mixins
    20.15 Latent Typing
    20.16 Compensating for the Lack of (Direct) Latent Typing
    20.17 Assisted Latent Typing in Java 8
    20.18 Summary: Is Casting Really So Bad?
📜21. Arrays
    21.01 Why Arrays are Special
    21.02 Arrays are First-Class Objects
    21.03 Returning an Array
    21.04 Multidimensional Arrays
    21.05 Arrays and Generics
    21.06 Arrays.fill()
    21.07 Arrays.setAll()
    21.08 Incremental Generators
    21.09 Random Generators
    21.10 Generics and Primitive Arrays
    21.11 Modifying Existing Array Elements
    21.12 An Aside On Parallelism
    21.13 Arrays Utilities
    21.14 Copying an Array
    21.15 Comparing Arrays
    21.16 Streams and Arrays
    21.17 Sorting Arrays
    21.18 Searching with Arrays.binarySearch()
    21.19 Accumulating with parallelPrefix()
    21.20 Summary
📜22. Enumerations
    22.01 Basic enum Features
    22.02 Adding Methods to an enum
    22.03 enums in switch Statements
    22.04 The Mystery of values()
    22.05 Implements, not Inherits
    22.06 Random Selection
    22.07 Using Interfaces for Organization
    22.08 Using EnumSet Instead of Flags
    22.09 Using EnumMap
    22.10 Constant-Specific Methods
    22.11 Multiple Dispatching
    22.12 New Features to Support Pattern Matching
    22.13 New Feature: Arrow in switch
    22.14 New Feature: case null in switch
    22.15 New Feature: switch as an Expression
    22.16 New Feature: Smart Casts
    22.17 New Feature: Pattern Matching
    22.18 Summary
📜23. Annotations
    23.01 Basic Syntax
    23.02 Writing Annotation Processors
    23.03 Using javac to Process Annotations
    23.04 Annotation-Based Unit Testing
    23.05 Summary
📜24. Concurrent Programming
    24.01 The Terminology Problem
    24.02 Concurrency Superpowers
    24.03 Concurrency is for Speed
    24.04 The Four Maxims of Java Concurrency
    24.05 The Brutal Truth
    24.06 The Rest of the Chapter
    24.07 Parallel Streams
    24.08 Creating and Running Tasks
    24.09 Terminating Long-Running Tasks
    24.10 CompletableFutures
    24.11 Deadlock
    24.12 Constructors are not Thread-Safe
    24.13 Effort, Complexity, Cost
    24.14 Summary
📜25. Patterns
    25.01 The Pattern Concept
    25.02 Singleton
    25.03 Classifying Patterns
    25.04 Template Method
    25.05 Fronting for an Implementation
    25.06 Factories: Encapsulating Object Creation
    25.07 Function Objects
    25.08 Changing the Interface
    25.09 Interpreter: Runtime Flexibility
    25.10 Callbacks
    25.11 Multiple Dispatching
    25.12 Pattern Refactoring
    25.13 Summary
📜Appendix: Supplements
    A01 On Java 8 Example Code
    A02 Hands-On Java eSeminar
    A03 Appendix: Programming Guidelines
    A04 Design
    A05 Implementation
    A06 Appendix: Javadoc
    A07 Syntax
    A08 Embedded HTML
    A09 Some Example Tags
    A10 Documentation Example
    A11 Appendix: Passing and Returning Objects
    A12 Passing References
    A13 Making Local Copies
    A14 Controlling Cloneability
    A15 Immutable Classes
    A16 Summary
📜Appendix: I/O Streams
    B01 Types of InputStream
    B02 Types of OutputStream
    B03 Adding Attributes and Useful Interfaces
    B04 Readers & Writers
    B05 Off By Itself: RandomAccessFile
    B06 Typical Uses of I/O Streams
    B07 Summary
📜Appendix: Standard I/O
    C01 Reading from Standard Input
    C02 Changing System.out to a PrintWriter
    C03 Redirecting Standard I/O
    C04 Process Control
    C05 Appendix: New I/O
    C06 ByteBuffers
    C07 Converting Data
    C08 Fetching Primitives
    C09 View Buffers
    C10 Data Manipulation with Buffers
    C11 Memory-Mapped Files
    C12 File Locking
📜Appendix: Understanding equals() and hashCode()
    D01 A Canonical equals()
    D02 Hashing and Hash Codes
    D03 Tuning a HashMap
    D04 Appendix: Collection Topics
    D05 Sample Data
    D06 List Behavior
    D07 Set Behavior
    D08 Using Functional Operations with any Map
    D09 Selecting Parts of a Map
    D10 Filling Collections
    D11 Custom Collection and Map using Flyweight
    D12 Collection Functionality
    D13 Optional Operations
    D14 Sets and Storage Order
    D15 Queues
    D16 Understanding Maps
    D17 Utilities
    D18 Holding References
    D19 Java 1.0/1.1 Collections
    D20 Summary
📜Appendix: Low-Level Concurrency
    E01 What is a Thread?
    E02 Catching Exceptions
    E03 Sharing Resources
    E04 The volatile Keyword
    E05 Atomicity
    E06 Critical Sections
    E07 Library Components
    E08 Summary
📜Appendix: Data Compression
    F01 Simple Compression with GZIP
    F02 Multifile Storage with Zip
    F03 Java Archives (Jars)
📜Appendix: Object Serialization
    G01 Overview
    G02 Finding the Class
    G03 Controlling Serialization
    G04 Using Persistence
    G05 Appendix: Benefits and Costs of Static Type Checking
    G06 Foreword to the 2021 Edition
    G07 Foreword to the Original Edition
    G08 Static Type Checking vs. Testing
    G09 How to Argue about Typing
    G10 The Cost of Productivity
    G11 Static vs. Dynamic
📜Appendix: The Positive Legacy of C++ and Java
📜Appendix: Becoming a Programmer
    I01 How I Got Started in Programming
    I02 A Career in Computing
    I03 The Mythical 5%
    I04 Writing Software Is Like … Writing
    I05 Programming as Typing
    I06 Do What You Love
📜Notes



# 📜Copyright

                        Copyright ©2017, ©2021
                        by Bruce Eckel, President, MindView LLC.
                        ISBN 978-0-9818725-2-0

All rights reserved. Produced in the United States of America. This publication is
protected by copyright, and permission must be obtained from the publisher prior
to any prohibited reproduction, storage in a retrieval system, or transmission in any
form or by any means, electronic, mechanical, photocopying, recording, or likewise.
Many of the designations used by manufacturers and sellers to distinguish their
products are claimed as trademarks. Where those designations appear in this book,
andthepublisherwasawareofatrademarkclaim, thedesignations havebeenprinted
with initial capital letters or in all capitals.

Java is a trademark of Oracle, Inc. Windows 95, Windows NT, Windows 2000,
Windows XP, Windows 7, Windows 8 and Windows 10 are trademarks ofMicrosoft
Corporation. All other product names and company names mentioned herein are the
property oftheir respective owners.

The author and publisher have taken care in the preparation ofthis book, but make
no expressed or impliedwarrantyofanykind and assume no responsibilityfor errors
or omissions. No liability is assumed for incidental or consequential damages in
connection with or arising out ofthe use ofthe information or programs contained
herein.

This book was created as an eBook for tablets and computers. That is, it was not first
created for print and then converted. It is an eBook first—all layout and formatting
is designed to optimize your viewing experience on the various eBook reading
platforms and systems.

Cover design by Daniel Will-Harris, www.Will-Harris.com¹.
¹ http://www.Will-Harris.com


In 2017, I published this book on Google Play Books. As an experiment, it was
exclusivelyon that platform. This not onlyturned out to be achallenging process, but
because Google doesn’t do business in a number ofcountries where I have readers,
it prevented those readers from getting the book. It wasn’t a good fit, but in the
meantime I wrote offthe experiment and focused on the next book, Atomic Kotlin².
Over time, awareness of the book trickled out and it turned out there was demand
for it. After putting Atomic Kotlin on Leanpub, I decided it would be worthwhile to
convert On Java 8 to Leanpub as well, which is what you now (virtually) hold in
your hands.

Leanpub generates multiple formats: PDF, ePub (especiallynice onApple iOS devices
via iBooks. There are also ePub readers for most other platforms) and MOBI, for
Kindlereaders. Inaddition, there’saversionthatyoucanreaddirectlyonlinethrough
the Leanpub site.

From the table of contents you can jump to any part of the book. Note that in the
PDF version you must click on the name ofthe chapter or subhead you want to go
to, not the page number.

Unfortunately, Leanpub does not support indices (I know of no ebook-creation
systems that do), but the ebook allows you to easily search for topics.

## 🍀 Updates
The Leanpub edition of the book also contains a number of updates. The initial
updates (not chronicled below) were primarily to the code, allowing the examples to
² https://www.atomickotlin.com/

run with newer versions ofJava, along with more recent versions ofthe Gradle build
tool and JUnit testing libraries.

Note that, although newerversions ofJavahave introducedahandful offeatures that
are useful, Java 8 contained the most sweeping and dramatic changes to the language
since Java 5 (covered in Thinkingin Java, 4th Edition). After reading On Java 8 you
should be able to understand the features that have been added since.

## 🍀 January 2021 Update
This primarily included a rewrite of the Reflection chapter. It also added missing
@Override annotations throughout the book (because Java doesn’t enforce the use
of @Override ). The /* Output: sections of all examples have been updated, and
the examples were reformatted in various ways to improve readability.

## 🍀 March 2021 Update
• Patterns: Thoroughrewriteofmostexamples & prose. This is thelargestchange
in this update.
• Objects Everywhere: Fixed primitive data type table (superscript values were
missing).
• Operators: Rewrote “Testing Object Equivalence” section.
• ImplementationHiding: Rewrote onjava/Range. java andadded onjava/Tes-
tRange. java .
• Changed “RTTI” to “Reflection” throughout the book, including changing the
Type Information chapter name to Reflection.
• Fixed the swapped images in Reuse and Polymorphism.
• Changedfrom“no-argconstructor” to “zero-argumentconstructor” throughout,
following modern terminology in Java documentation.
• Various grammar & spelling fixes throughout the book.

On Java 8 (www.OnJava8.com) by Bruce Eckel ©2021 MindView LLC

# 📜00. Preface
This book teaches Java programming using the features in the 8th version
ofthat language.

My previous Java book, Thinking in Java, 4th Edition (Prentice Hall 2006), is still
useful for programming in Java 5, the version of the language used for Android
programming. But with the advent ofJava 8, the language has changed significantly
enough that new Java code feels and reads differently. This justified the two-year
effort ofcreating a new book.

On Java 8 is designed for someone with a basic foundation in programming. For
beginners, web sites like Code.org³ and Khan Academy⁴ can provide at least some
of that background, along with the free Thinking in C⁵ seminar. Services like
YouTube, blogs and StackOverflow have made finding answers ridiculously easy
compared to just a few years ago when we relied on print media. Combine these
with perseverance, and you can use this book as your first programming text. It’s
also intended for professional programmers who want to expand their knowledge.
Iamgratefulforallthebenefits fromThinkinginJava, mostlyintheformofspeaking
engagements alloverthe world. Ithas provedinvaluableincreatingconnections with
people and companies.


##  🍀00.01 Goals

Each chapter teaches a concept, or a group of associated concepts, without relying
on features that haven’t yet been introduced. That way you can digest each piece in
the context ofyour current knowledge before moving on.
My goals in this book are to:
³ https://code.org/learn
⁴ https://www.khanacademy.org/computing/computer-programming
⁵ https://archive.org/details/ThinkingInC

1. Present the material one step at a time so you can easily incorporate each idea
before moving on, and to carefully sequence the presentation of features so
you’re exposed to a topic before you see it in use. This isn’t always possible; in
those situations, a briefintroductory description is given.
2. Use examples that are as simple and short as possible. This sometimes prevents
me from tackling “real world” problems, but I’ve found that beginners are
usually happier when they can understand every detail of an example rather
than being impressed by the scope of the problem it solves. For this I might
receive criticism for using “toy examples,” but I’m willing to accept that in favor
ofproducing something pedagogically useful.
3. Teach what I think is important about the language, rather than everything
I know. I believe there is an information importance hierarchy, and there are
some facts that 95 percent of programmers will never need to know—details
that just confuse people and increase their perception ofthe complexity ofthe
language. Ifyou must think about it, it will also confuse the reader/maintainer
ofthat code, so I advocate choosing a simpler approach.
4. Provide you with a solid foundation so you understand the issues well enough
to move on to more difficult coursework and books.

##  🍀00.02 Language Design Errors
Every language has design errors. New programmers experience deep uncertainty
and frustration when they must wade through features and guess at what they
should use and what they shouldn’t. It’s embarrassing to admit mistakes, but this
bad beginner experience is a lot worse than the discomfort of acknowledging you
were wrong about something. Alas, every failed language/library design experiment
is forever embedded in the Java distribution.

The Nobel laureate economist Joseph Stiglitz has a philosophy of life that applies
here, called The Theory of Escalating Commitment:

    “The cost of continuing mistakes is borne by others, while the cost of
    admitting mistakes is borne by yourself.”

If you’ve read my past writings, you’ll know that when I find design errors in
a language, I tend to point them out. Java has developed a particularly avid
following, folks who treat the language more like a country oforigin and less like a
programming tool. Because I’ve written about Java, theyassume I am a fellow patriot.

When I criticize the errors I find, it tends to have two effects:
1. Initially, alot of“my-country-right-or-wrong” furor, which typically dies down
to isolated pockets. Eventually—this can take years—the error is acknowledged
and seen as just part ofthe history ofJava.
2. More importantly, new programmers don’t go through the struggle of won-
dering why “they” did it this way, especially the self-doubt that comes from
finding something that just doesn’t seem right and naturally assuming I must be
doing it wrong or I just don’t get it. Worse, those who teach the language often
go right along with the misconceptions rather than delving in and analyzing
the issue. By understanding the language design errors, new programmers can
understand that something was a mistake, and move forward.

Understanding language and library design errors is essential because ofthe impact
they have on programmer productivity. Some companies and teams choose to avoid
certain features because, while seductive on the surface, those features can block
your progress when you least expect it. Design errors also inform the creation and
adoption ofnew languages. It’s fun to explore what can be done with a language, but
design errors tell you what can’t be done with that language.

For many years, I honestly felt a lack ofcare from the Java designers regarding their
users. Some ofthese errors seemed so blatant, so poorly thought-out, that it appeared
the designers had some other motivation in mind instead of serving their users. There
was a lot ofnotoriety around the Java language for a long time, and perhaps that’s
where the seduction was. This seeming lack ofrespect for programmers is the major
reason I moved away from Java and didn’t want anything to do with it for such a
long time.

WhenI did start looking into Javaagain, something aboutJava8 felt very different, as
ifa fundamental shift had occurred in the designers’ attitude about the language and
its users. Many features and libraries that had been warts on the language were fixed
after years of ignoring user complaints. New features felt very different, as if there
were new folks on board who were extremely interested in programmer experience.
These features were—finally—working to make the language better rather than just
quickly adding ideas without delving into their implications. And some of the
new features are downright elegant (or at least, as elegant as possible given Java
constraints). I can only guess that some person or people have departed the language
group and this has changed the perspective.

Because of this new focus by the language developers—and I don’t
think I’m imagining it—writing this book has been dramatically better
than past experiences. Java 8 contains fundamental and important
improvements. Alas, because of Java’s rigid backwards-compatibility
promise, these improvements required great effort so it’s unlikely we’ll
see anything this dramatic again (I hope I’m wrong about this).
Nonetheless, I applaud those who have turned the ship as much as
they have and set the language on a better course. For the first time I
can ever recall, I found myself saying “I love that!” about some of the
Java code I’ve been able to write in Java 8.

Ultimately, the timing for this book seems good, because Java 8
introduces important features that strongly affect the way code is
written, while—so far—Java 9 seems to focus on the understory of the

language, bringing important infrastructure features but not those that
affect the kind of coding focused on in this book. However, because it’s
an eBook, if I discover something I think requires an update or an
addition, I can push the new version to existing customers.


##  🍀01.09 Tested Examples

The code examples in this book compile with Java 8 and the Gradle
build tool. All the examples are in a freely-accessible Github
repository.
Without a built-in test framework with tests that run every time you
do a build of your system, you have no way of knowing whether your
code is reliable. To accomplish this in the book, I created a test system
to display and validate the output of most examples. The output from
running an example is attached, as a block comment, at the end of
examples that produce output. In some cases only the first few lines
are shown, or first and last lines. Embedded output improves the
reading and learning experience, and provides yet another way to
verify the correctness of the examples.

##  🍀00.04 Popularity
Java’s popularity has significant implications. If you learn it, getting a
job will probably be easier. There are a lot more training materials,
courses, and other learning resources available. If you’re starting a
company and you choose to work in Java, it’s much easier to find
programmers, and that’s a compelling argument.
Short-term thinking is almost always a bad idea. Don’t use Java if you
really don’t like it—using it just to get a job is an unhappy life choice.
As a company, think hard before choosing Java just because you can
hire people. There might be another language that makes fewer
employees far more productive for your particular need.
But if you do enjoy it, if Java does call to you, then welcome. I hope
this book will enrich your programming experience.

##  🍀00.05 Android Programmers
I’ve made this book as “Java 8 as possible,” so if you want to program
for Android devices, you must study Java 5, which I cover in Thinking
in Java, 4th edition. At the time of publishing of On Java 8, Thinking in Java,
4th Edition has become a free download, available through
www.OnJava8.com. Thinking in Java, 4th Edition is available in print from
Prentice-Hall. In addition, there are many other resources that
specialize in Android programming.

##  🍀00.06 This is Only an eBook
On Java 8 is only available as an eBook, and only via www.OnJava8.com. Any
other source or delivery mechanism is illegitimate. There is no print version.

This is copyrighted work. Do not post or share it in any way without
permission via mindviewinc@gmail.com. You may use the examples
for teaching, as long as they are not republished without permission
and attribution. See the Copyright.txt file in the example
distribution for full details.

This book is far too large to publish as a single print volume, and my
intent has always been to only publish it as an eBook. Color syntax
highlighting for code listings is, alone, worth the cost of admission.
Searchability, font resizing or text-to-voice for the vision-impaired, the
fact you can always keep it with you—there are so many benefits to
eBooks it’s hard to name them all.

Anyone buying this book needs a computer to run the programs and
write code, and the eBook reads nicely on a computer (I was also
surprised to discover that it even reads tolerably well on a phone).
However, the best reading experience is on a tablet computer. Tablets
are inexpensive enough that you can now buy one for less than you’d
pay for an equivalent print version of this book. It’s much easier to
read a tablet in bed (for example) than trying to manage the pages of a
physical book, especially one this big. When working at your
computer, you don’t have to hold the pages open when using a tablet
at your side. It might feel different at first, but I think you’ll find the
benefits far outweigh the discomfort of adapting.

I’ve done the research, and Google Play Books works on, and provides
a very nice reading experience, every platform, including Linux and
iOS devices. As an experiment, I’ve decided to try publishing
exclusively through Google Books.

Note: At the time of this writing, reading the book through the
Google Play Books web browser app was—although tolerable—the
least satisfying viewing experience. I strongly advocate using a tablet
computer instead.

##  🍀00.07 Colophon

This book was written with Pandoc-flavored Markdown, and produced
into ePub version 3 format using Pandoc.

The body font is Georgia and the headline font is Verdana. The code
font is Ubuntu Mono, because it is especially compact and allows more
characters on a line without wrapping. I chose to place the code inline
(rather than make listings into images, as I’ve seen some books do)
because it was important to me that the reader be able to resize the
font of the code listings when they resize the body font (otherwise,
really, what’s the point?).

The build process for the book was automated, as well as the process
to extract, compile and test the code examples. All automation was
achieved through fairly extensive programs I wrote in Python 3.

Cover Design
The cover of On Java 8 is from a mosaic created through the Works Progress
Administration (WPA, a huge project during the US Great Depression from 1935-
1943 which put millions of out-of-work people back to work). It also reminds me
of the illustrations from The Wizard ofOz series of books. My friend and designer,
Daniel Will-Harris (www.will-harris.com¹⁴) and I just liked the image.

##  🍀00.08 Thanks
Thanks to Eric Evans (author of Domain-Driven Design) for
suggesting the book title, and to everyone else in the conference
newsgroups for their help in finding the title.

Thanks to James Ward for starting me with the Gradle build tool for
this book, and for his help and friendship over the years. Thanks to
Ben Muschko for his work polishing the build files, and Hans Dockter
for giving Ben the time.

Jeremy Cerise and Bill Frasure came to the developer retreat for the
book and followed up with valuable help.

Thanks to all who have taken the time and effort to come to my
conferences, workshops, developer retreats, and other events in my
town of Crested Butte, Colorado. Your contributions might not be
easily seen, but they are deeply important.


##  🍀00.09 Dedication
For my beloved father, E. Wayne Eckel. April 1, 1924—November 23, 2016.


# 📜01. Introduction

            “The limits of my language are the limits
            of my world”—Wittgenstein

This is true of both spoken/written languages and programming
languages. It’s often subtle: A language gently guides you into certain
modes of thought and away from others. Java is particularly
opinionated.

Java is a derived language. The original language designers didn’t
want to use C++ for a project, so created a new language which
unsurprisingly looked a lot like C++, but with improvements (their
original project never came to fruition). The core changes were the
incorporation of a virtual machine and garbage collection, both of
which are described in detail in this book. Java is also responsible for
pushing the industry forward in other ways; for example, most
languages are now expected to include documentation markup syntax
and a tool to produce HTML documentation.

One of the most predominant Java concepts came from the SmallTalk
language, which insists that the “object” (described in the next
chapter) is the fundamental unit of programming, so everything must
be an object. Time has tested this belief and found it overenthusiastic.
Some folks even declare that objects are a complete failure and should
be discarded. Personally, I find that making everything an object is not
only an unnecessary burden but also pushes many designs in a poor
direction. However, there are still situations where objects shine.
Requiring that everything be an object (especially all the way down to
the lowest level) is a design mistake, but banning objects altogether
seems equally draconian.

Other Java language decisions haven’t panned out as promised.
Throughout this book I attempt to explain these so you not only
understand those features, but also why they might not feel quite right
to you. It’s not about declaring that Java is a good language or a bad
one. If you understand the flaws and limitations of the language you
will:
1. Not get stymied when you encounter a feature that seems “off.”
2. Design and code better by knowing where the boundaries are.

Programming is about managing complexity: the complexity of the
problem, laid upon the complexity of the machine. Because of this
complexity, most of our programming projects fail.

Many language design decisions are made with complexity in mind,
but at some point other issues are considered essential. Inevitably,
those other issues are what cause programmers to eventually “hit the
wall” with a language. For example, C++ had to be backward-
compatible with C (to allow easy migration for C programmers), as
well as efficient. Those are both useful goals and account for much of
the success of C++, but they also expose extra complexity that prevent
some projects from finishing. Certainly, you can blame programmers
and management, but if a language can help by catching your
mistakes, why shouldn’t it?

Visual BASIC (VB) was tied to BASIC, which wasn’t really designed as
an extensible language. All the extensions piled upon VB have
produced some truly un-maintainable syntax. Perl is backward-
compatible with `awk`, `sed`, `grep`, and other Unix tools it was meant
to replace, and as a result it is often accused of producing “write-only
code” (that is, you can’t read your own code). On the other hand, C++,
VB, Perl, and other languages such as SmallTalk had some of their
design efforts focused on the issue of complexity and as a result are
remarkably successful in solving certain types of problems.

The communication revolution enables all of us to communicate with
each other more easily: one-on-one as well as in groups and as a
planet. I’ve heard it suggested that the next revolution is the formation
of a kind of global mind that results from enough people and enough
interconnectedness. Java might or might not be one of the tools for
that revolution, but at least the possibility has made me feel like I’m
doing something meaningful by attempting to teach the language.

##  🍀01.01 Prerequisites
This book assumes you have some programming familiarity, so you understand:
• A program is a collection ofstatements
• The idea ofa subroutine/function/macro
• Control statements such as “if” and looping constructs such as “while”
• Etc.
You might have learned this in many places, typically school, books, or the Internet.
As long as you you feel comfortable with the basic ideas of programming, you can
work through this book.

If you don’t feel comfortable with foundational concepts, the free Thinking in C¹⁵
seminar will bring you up to speed on the fundamentals necessary to learn Java. On
Java 8 introduces the concepts of object-oriented programming (OOP) and Java’s
basic control mechanisms.

I occasionally refer to features in C and C++ (and sometimes other languages). These
comments do not require that you understand C/C++. They are intended to help
all programmers put Java in perspective with those languages, from which, after all,
Java is descended. I attempt to make these references simple and to explain anything
that might be unfamiliar to a non-C/C++ programmer.

##  🍀01.02 JDK HTML Documentation
The Java Development Kit (JDK) from Oracle (a free download) comes with
documentation in electronic form, readable through your
Web browser. Unless necessary, this book will not repeat that
documentation, because it’s usually much faster to find the class
descriptions with your browser than to look them up in a book (also,
the online documentation is current). I’ll simply refer to “the JDK
documentation.” I’ll provide extra descriptions of the classes only
when it’s necessary to supplement that documentation so you
understand a particular example.

##  🍀01.03 Thinking in C
The Thinking in C multimedia seminar is freely downloadable from
www.OnJava8.com. This gives an introduction to the C syntax, operators,
and functions that are the foundation of Java syntax.
Thinking in C also provides a gentle introduction to coding, assuming
even less about the student’s programming background than does this book.

I commissioned Chuck Allison to create Thinking in C as a standalone
product, which was later included in book CDs, and finally reworked
as a free download. By freely providing this seminar online, I can
ensure that everyone begins with adequate preparation.

##  🍀01.04 Source Code
All the source code for this book is available as copyrighted freeware,
distributed via Github. To ensure you have the most current version, this is
the official code distribution site. You may use this code in
classroom and other educational situations.
The primary goal of the copyright is to ensure that the source of the
code is properly cited, and to prevent you from republishing the code
without permission. (As long as this book is cited, using examples
from the book in most media is generally not a problem.)
In each source-code file you find a reference to the following copyright
notice:

    // Copyright.txt
    This computer source code is Copyright ©2017 MindView LLC.
    All Rights Reserved.
    Permission to use, copy, modify, and distribute this
    computer source code (Source Code) and its documentation
    without fee and without a written agreement for the
    purposes set forth below is hereby granted, provided that
    the above copyright notice, this paragraph and the
    following five numbered paragraphs appear in all copies.
    1. Permission is granted to compile the Source Code and to
    include the compiled code, in executable format only, in
    personal and commercial software programs.
    2. Permission is granted to use the Source Code without
    modification in classroom situations, including in
    presentation materials, provided that the book "On
    Java 8" is cited as the origin.
    3. Permission to incorporate the Source Code into printed
    media may be obtained by contacting:
    MindView LLC, PO Box 969, Crested Butte, CO 81224
    MindViewInc@gmail.com
    4. The Source Code and documentation are copyrighted by
    MindView LLC. The Source code is provided without express
    or implied warranty of any kind, including any implied
    warranty of merchantability, fitness for a particular
    purpose or non-infringement. MindView LLC does not
    warrant that the operation of any program that includes the
    Source Code will be uninterrupted or error-free. MindView
    LLC makes no representation about the suitability of the
    Source Code or of any software that includes the Source
    Code for any purpose. The entire risk as to the quality
    and performance of any program that includes the Source
    Code is with the user of the Source Code. The user
    understands that the Source Code was developed for research
    and instructional purposes and is advised not to rely
    exclusively for any reason on the Source Code or any
    program that includes the Source Code. Should the Source
    Code or any resulting software prove defective, the user
    assumes the cost of all necessary servicing, repair, or
    correction.
    5. IN NO EVENT SHALL MINDVIEW LLC, OR ITS PUBLISHER BE
    LIABLE TO ANY PARTY UNDER ANY LEGAL THEORY FOR DIRECT,
    INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES,
    INCLUDING LOST PROFITS, BUSINESS INTERRUPTION, LOSS OF
    BUSINESS INFORMATION, OR ANY OTHER PECUNIARY LOSS, OR FOR
    PERSONAL INJURIES, ARISING OUT OF THE USE OF THIS SOURCE
    CODE AND ITS DOCUMENTATION, OR ARISING OUT OF THE INABILITY
    TO USE ANY RESULTING PROGRAM, EVEN IF MINDVIEW LLC, OR
    ITS PUBLISHER HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
    DAMAGE. MINDVIEW LLC SPECIFICALLY DISCLAIMS ANY
    WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE. THE SOURCE CODE AND DOCUMENTATION PROVIDED
    HEREUNDER IS ON AN "AS IS" BASIS, WITHOUT ANY ACCOMPANYING
    SERVICES FROM MINDVIEW LLC, AND MINDVIEW LLC HAS NO
    OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
    ENHANCEMENTS, OR MODIFICATIONS.

    Please note that MindView LLC maintains a Web site which
    is the sole distribution point for electronic copies of the
    Source Code, https://github.com/BruceEckel/OnJava8-examples,
    where it is freely available under the terms stated above.
    If you think you've found an error in the Source Code,
    please submit a correction at:
    https://github.com/BruceEckel/OnJava8-examples/issues

You may use the code in your projects and in the classroom (including
your presentation materials) as long as the copyright notice that
appears in each source file is retained.


##  🍀01.05 Coding Standards
In the text of this book, identifiers (keywords, methods, variables, and
class names) are set in bold, fixed-width code font. Some
keywords, such as class, are used so much that the bolding can
become tedious. Those which are distinctive enough are left in normal
font.
I use a particular coding style for the examples in this book. As much
as possible within the book’s formatting constraints, this follows the
style that Oracle itself uses in virtually all code you find at its site, and
seems to be supported by most Java development environments. As
the subject of formatting style is good for hours of hot debate, I’ll just
say I’m not trying to dictate correct style via my examples; I have my
own motivation for using the style I do. Because Java is a free-form
programming language, continue to use whatever style you’re
comfortable with. One solution to the coding style issue is to use an
IDE ( integrated development environment) tool like IntelliJ IDEA,
Eclipse or NetBeans to change formatting to that which suits you.
The code files in this book are tested with an automated system, and
should work without compiler errors (except those specifically tagged)
in the latest version of Java.
This book focuses on and is tested with Java 8. If you must learn about
earlier releases of the language not covered here, the 4th edition of
Thinking in Java is freely downloadable at www.OnJava8.com.
Bug Reports
No matter how many tools a writer uses to detect errors, some always
creep in and these often leap off the page for a fresh reader. If you
discover anything you believe to be an error, please submit the error
along with your suggested correction, for either the book’s prose or
examples, here. Your help is appreciated.
Mailing List
For news and notifications, you can subscribe to the low-volume email
list at www.OnJava8.com. I don’t use ads and strive to make the content as
appropriate as possible.

##  🍀01.06 Bug Reports
No matter how many tools a writer uses to detect errors, some always creep in and
these often leap offthe page forafreshreader. Ifyoudiscoveranything youbelieve to
be an error, please submit the error along with your suggested correction, for either
the book’s prose or examples, here²⁰. Your help is appreciated.

²⁰ https://github.com/BruceEckel/Onjava8-examples/issues

##  🍀01.07 What About User Interfaces?
Graphical user interfaces and desktop programming in Java have had a tumultuous—
some would say tragic—history.

The original design goal of the graphical user interface (GUI) library in Java 1.0 was to
enable the programmer to build a GUI to look good on all platforms. That goal was
not achieved. Instead, the Java 1.0 Abstract Windowing Toolkit (AWT) produced a
GUI that looked equally mediocre on all systems. In addition, it was restrictive; you
could use only four fonts and you could not access any of the more sophisticated
GUI elements that exist in your operating system. The Java 1.0 AWT programming
model was also awkward and non-object-oriented. A student in one ofmy seminars
(who had been at Sun during the creation ofJava) explained why: The original AWT
had been conceived, designed, and implemented in a month. Certainly a marvel of
productivity, and also an object lesson in why design is important.

The situation improved with the Java 1.1 AWT event model, which took a much
clearer, object-oriented approach, along withthe addition of Java Beans, a component
programming model (now dead) oriented toward the easy creation of visual programming 
environments. Java 2 (Java 1.2) finished the transformation away from the old
Java 1.0 AWT by essentially replacing everything with the Java Foundation Classes
(JFC), the GUI portion ofwhich is called “Swing.” These are a rich set ofJavaBeans
that create a reasonable GUI. The revision 3 rule ofthe software industry (“a product
isn’t good until revision 3”) seems to hold true with programming languages as well.
It seemed that Swing was the final GUI library for Java. This assumption turned out
to be wrong—Sun made afinal attempt, calledJavaFX. When Oracle bought Sun they
changed the original ambitious project (which included a scripting language) into a
library, and now it appears to be the only UI toolkit getting development effort (see
the Wikipedia article on JavaFX)—but even that effort has diminished. JavaFX, too,
seems eventually doomed.

Swing is still part of the Java distribution (but it only receives maintenance, no
new development), and with Java now an open-source project it should always be
available. Also, Swing and JavaFX have some limited interactivity, presumably to
aid the transition to JavaFX.

Ultimately, desktop Java never took hold, and never even touched the designers’
ambitions. Other pieces, such as JavaBeans, were given much fanfare (and many
unfortunate authors spent a lot of effort writing books solely on Swing and even
books just on JavaBeans) but never gained any traction. Most usage you’ll see for
desktop Java is for integrated development environments (IDEs) and some in-house
corporate applications. People do develop user interfaces in Java, but it’s safe to
consider that a niche usage ofthe language.

If you must learn Swing, it’s covered in Thinking in Java, 4th Edition (available at
www.OnJava8.com²¹), and in books dedicated to the topic.


# 📜02. What is an Object?

    “We do not realize what tremendous power the structure of an habitual
    languagehas. Itis notanexaggerationto saythatitenslaves us throughthe
    mechanism ofsemantic reactions and that the structure which a language
    exhibits, and impresses upon us unconsciously, is automatically projected
    upon the world around us.”—Alfred Korzybski (1930)

The genesis of the computer revolution was in a machine. Our programming
languages thus tend to look like that machine.

But computers are not so much machines as they are mind amplification tools
(“bicycles for the mind,” as Steve Jobs was fond of saying) and a different kind of
expressive medium. As a result, tools are beginning to look less like machines and
more like parts ofour minds.

Programming languages are the fabric of thought for creating applications. Lan-
guages take inspiration from other forms of expression such as writing, painting,
sculpture, animation, and filmmaking.

Object-oriented programming (OOP) is one experiment in using the computer as an
expressive medium.

Many people feel uncomfortable wading into object-oriented programming without
understanding the big picture, so the concepts introduced here give you an overview
ofOOP. Others might not understand such an overview until they are exposed to the
mechanism, becoming lost without seeing code. Ifyou’re part ofthis latter group and
are eager to get to the specifics ofthe language, feel free to jump past this chapter—
skipping it nowwill not prevent you from writing programs or learning the language.
However, come back here eventually to fillin your knowledge so you understand why
objects are important and how to design with them.

This chapter assumes you have some programming experience, although not neces-
sarily in C. Ifyou need more preparation in programming before tackling this book,
work through the free Thinking in C²² seminar.
²² https://archive.org/details/ThinkingInC

##  🍀02.01 The Progress of Abstraction

All programming languages are abstractions. It can be argued that the complexity
of the problems you’re able to solve is directly related to the kind and quality of
abstraction. By “kind” I mean, “What is it you are abstracting?” Assembly language²³
is a minimal abstraction of the underlying machine. Many so-called “imperative”
languages (such as FORTRAN, BASIC, and C) were themselves abstractions of
assembly language. Although they were big improvements, their primary abstraction
still requires you to think in terms of the structure of the computer rather than the
structure ofthe problem you are trying to solve. The programmer must establish the
association between the machine model (the “solution space,” the place where you’re
implementing that solution, such as a computer) and the model ofthe problem that
is actually solved (the “problem space,” the place where the problem exists, such as a
business). The effort required to perform this mapping, and the fact it is extrinsic
to the programming language, produces programs that are difficult to write and
expensive to maintain.

The alternative to modeling the machine is to model the problem you’re trying to
solve. Early languages such as LISP and APL chose particular views of the world
(“All problems are ultimately lists” or “All problems are algorithmic,” respectively).
Prolog casts all problems into chains ofdecisions. Languages have been created for
constraint-based programming and for programming exclusively by manipulating
graphical symbols. Each ofthese approaches can be a good solution to the particular
class ofproblem they’re designed to solve, but when you step outside ofthat domain
they become awkward.

The object-oriented approach goes a step further by providing tools for the pro-
grammer to represent elements in the problem space. This representation is general
enough that the programmer is not constrained to any particular type ofproblem. We
refer to the elements in the problem space and their representations in the solution
space as “objects.” (Note that some objects don’t have problem-space analogs.) The
idea is that the program adapts itself to the lingo of the problem by adding new
types of objects. When you read the code describing the solution, you’re reading
words that also express the problem. This is a more flexible and powerful language
abstraction than what we’ve had before. Thus, OOP describes the problem in terms
²³ https://en.wikipedia.org/wiki/Assembly_language

of the problem, rather than in terms of the computer where the solution will run.
There’s still a connection, because objects look somewhat like little computers: Each
has state and performs operations. This is similar to objects in the real world—they
all have characteristics and behaviors.

Alan Kay summarized five basic characteristics of SmallTalk, the first successful
object-oriented language and a language that inspired Java. These characteristics
represent a pure approach to object-oriented programming:
1. Everything is an object. Think ofan object as a fancy variable; it stores data,
but you can “make requests”, asking it to perform operations on itself. You can
usually take any conceptual component in the problem you’re trying to solve
(dogs, buildings, services, etc.) and represent it as an object in your program.
2. A program is a bunch ofobjects telling each other what to do by sending
messages. When you “send a message” to an object, it’s a request to call a
method that belongs to that object.
3. Each object has its own memory made up ofother objects. Put another way,
you create a new kind of object by packaging existing objects. This hides the
complexity ofa program behind the simplicity ofobjects.
4. Every object has a type. Each object is an instance ofa class, where “class” is
(approximately) synonymous with “type.” The most important distinguishing
characteristic ofa class is “What messages can you send to it?”
5. All objects of a particular type can receive the same messages. This is a
loaded statement, as you will see later. Because an object of type “circle” is
also an object oftype “shape,” a circle is guaranteed to accept shape messages.
This means you can write code that talks to shapes and automatically handles
any thing that fits the description of a shape. This substitutability is afoundation
of OOP.

Grady Booch offers an even more succinct description ofan object:

    An objecthas state, behavior and identity

This means an object can have internal data (which gives it state), methods (to
produce behavior), and each object is uniquely distinguished from every other
object—that is, every object has a unique address in memory.²⁴

²⁴ This is actually a bit restrictive because objects can conceivably exist in different 
machines and address spaces, and they can also be stored on disk. In these cases, 
the identity ofthe object must be determined by something other than a
memory address.
On Java 8 (www.OnJava8.com) by Bruce Eckel ©2021 MindView LLC

##  🍀02.02 An Object Has an Interface
Aristotle was probably the first to begin a careful study of the concept of type; he
spoke of “the class of fishes and the class of birds.” The idea that all objects, while
unique, are also part ofa class ofobjects that have characteristics and behaviors in
common was used directly in the first object-oriented language, Simula-67, with its
fundamental keyword class that introduces a new type into a program.

Simula, as its name implies, was created for developing simulations such as the
classic “bank teller problem.” In this, you have numerous tellers, customers, accounts,
transactions, and units of money—many “objects.” Objects that are identical except
for their state are grouped together into “classes of objects,” and that’s where the
keyword class arose.

Creating abstract data types (classes) is a fundamental concept in object-oriented
programming. Abstract datatypes work almost exactly like built-in types: You create
variables of a type (called objects or instances in object-oriented parlance) and
manipulate those variables (called sendingmessages or requests; you send a message
and the object figures out what to do with it). The members (elements) ofeach class
share some commonality: Every account has a balance, every teller can accept a
deposit, etc. At the same time, each member has its own state: Each account has
a different balance, each teller has a name. Thus, the tellers, customers, accounts,
transactions, etc., can each be represented with a unique entity in the program. This
entity is the object, and each object belongs to a particular class that defines its
characteristics and behaviors.

So, although what we really do in object-oriented programming is create new data
types, virtually all object-oriented programming languages use the “class” keyword.
When you see the word “type” think “class” and vice versa.²⁵

A class describes a set of objects that have identical characteristics (data elements)
and behaviors (functionality), so a class is really a data type because a floating point
number, for example, also has a set ofcharacteristics and behaviors. The difference is
that a programmer defines a class to fit a problem rather than being forced to use an
existing data type that was designed to represent a unit ofstorage in a machine. You
extend the programming language by adding new data types specific to your needs.

²⁵ In some cases we make a distinction, stating that type determines the interface 
while class is a particular implementation ofthat interface.

The programming system welcomes the new classes and gives them the same care
and type checking it gives to built-in types.

The object-oriented approach is not limited to building simulations. Whether or not
you agree that any program is a simulation of the system you’re designing, OOP
techniques help reduce a large set ofproblems to a simpler solution.

Once a class is established, make as many objects of that class as you like, then
manipulate those objects as if they are the elements that exist in your problem.
Indeed, one of the challenges of object-oriented programming is creating a one-to-
one mapping between the elements in the problem space and objects in the solution
space.

How do you get an object to do useful work? You make a request of that object—
complete a transaction, draw something on the screen, turn on a switch. Each
object accepts only certain requests, defined by its interface The type determines
the interface. As a simple example, consider a representation for a light bulb:

    Light lt = new Light( );
    lt. on( );

The interface determines the requests you can make for a particular object. However,
there must be code somewhere to satisfy that request. This, along with the hidden
data, comprises the implementation. A type has a method associated with each
possible request, and when you make a particular request to an object, that method
is called. This process is usually summarized by saying you “send a message” (make
a request) to an object, and the object figures out what to do with that message (it
executes code).

Here, the name ofthe class is Light , the name ofthis particular Light object is lt ,
and the requests you can make ofa Light object are to turn it on, turn it off, make
it brighter, or make it dimmer. You create a Light object by defining a “reference”
( lt ) for that object and calling new to request a new object of that type. To send a
message to the object, you state the name ofthe object and connect it to the message
request with a period (dot). From the standpoint of the user of a predefined class,
that’s pretty much all there is to programming with objects.

The preceding diagram follows the format ofthe Unified Modeling Language (UML).
Each class is represented by a box, with the type name in the top portion ofthe box,
any data members you care to describe in the middle portion of the box, and the
methods (the functions that belong to this object, which receive any messages you
sendto that object) in the bottomportion ofthe box. Often, onlythe name ofthe class
and the public methods are shown in UML design diagrams, so the middle portion
is not shown, as in this case. Ifyou’re interested only in the class name, the bottom
portion doesn’t need to be shown, either.

##  🍀02.03 Objects Provide Services
When trying to develop or understand a program design, an excellent way to think
about objects is as “service providers.” Your program itself will provide services to
the user, and it will accomplish this by using the services offered by other objects.
Your goal is to produce (or better, locate in existing code libraries) a set of objects
providing the ideal services to solve your problem.

A way to start doing this is to ask, “If I could magically pull them out of a hat,
what objects would solve my problem right away?” For example, suppose you are
creating a bookkeeping program. You might imagine objects that contain predefined
bookkeeping input screens, other objects that perform bookkeeping calculations, and
an object that handles printing of checks and invoices on all different kinds of
printers. Maybe some ofthese objects already exist, and for the ones that don’t, what
would they look like? What services would those objects provide, and what objects
would they need to fulfill their obligations? If you keep doing this, you eventually
reach a point where you say either, “That object seems simple enough to sit down
and write” or “I’m sure that object must exist already.” This is a reasonable way to
decompose a problem into a set ofobjects.

Thinking ofan object as a service provider has an additional benefit: It helps improve
the cohesiveness of the object. High cohesion is a fundamental quality of software
design: It means the various aspects of a software component (such as an object,
although this could also apply to a method or a library of objects) “fit together”
well. One problem people have when designing objects is cramming too much
functionality into one object. For example, in your check printing module, you might
decide you need an object that knows all about formatting and printing. You’ll
probably discover this is too much for one object, and that what you need is three or
more objects. One object might be a catalog ofall the possible check layouts, which
can be queried for information about how to print a check. One object or set of
objects can be a generic printing interface that knows all about different kinds of
printers (but nothing about bookkeeping—that is a candidate for buying rather than
writing yourself). A third object uses the services ofthe other two to accomplish the
task. Thus, each object has a cohesive set ofservices it offers. In good object-oriented
design, each object does one thing well, but doesn’t try to do too much. This not
only discovers objects that might be purchased (the printer interface object), but it
also produces new objects that might be reused somewhere else (the catalog ofcheck
layouts).

Treating objects as service providers is useful not only during the design process, but
also when someone else is trying to understand your code or reuse an object. Ifthey
can see the value of the object based on what service it provides, it makes it much
easier to fit it into the design.

##  🍀02.04 The Hidden Implementation
We can break up the playing field into class creators (those who create new data
types) and client programmers²⁶ (the class consumers who use the data types in
their applications). The goal of the client programmer is to collect a toolbox full of
classes to use for rapid application development. The goal of the class creator is to
build a class that exposes only what’s necessary to the client programmer and keeps
everything else hidden. Why? Because if it’s hidden, the client programmer can’t
access it, whichmeans the class creatorcanchange the hiddenportionatwillwithout
worrying about the impact on anyone else. The hidden portion usuallyrepresents the
²⁶ I’m indebted to my friend Scott Meyers for this term.

tender insides ofan object that could easily be corrupted by a careless or uninformed
client programmer, so hiding the implementation reduces program bugs.

All relationships need boundaries, respected by all parties involved. When you
create a library, you establish a relationship with the client programmer, who is
also a programmer, but one who is putting together an application by using your
library, possibly to build a bigger library. If all members of a class are available
to everyone, the client programmer can do anything with that class and there’s no
way to enforce rules. Even though you might prefer that the client programmer not
directlymanipulate some ofthe members ofyourclass, withoutaccess controlthere’s
no way to prevent it. Everything’s naked to the world.

So the firstreasonforaccess controlis to keep clientprogrammers’ hands offportions
they shouldn’t touch—parts necessary for the internal operation of the data type
but not part of the interface that users need to solve their particular problems.
This is actually a service to client programmers because they can easily see what’s
important and what they can ignore. (Notice this is also a philosophical decision.
Some programming languages assume that if a programmer wishes to access the
internals, they should be allowed.)

The second reason for access control is to enable the library designer to change the
internal workings of the class without worrying about how it will affect the client
programmer. Forexample, youmightimplementaparticularclass inasimple fashion
to ease development, then later discover you must rewrite it to make it run faster.
If the interface and implementation are clearly separated and protected, you can
accomplish this easily.

Java has three explicit keywords to set the boundaries in a class: public , private ,
and protected . These access specifiers determine who can use the definitions that
follow. public means the element is available to everyone. private means no one
can access that element except you, the creator of the type, inside methods of that
type. private is abrickwall between youandthe client programmer. Anyone trying
to access a private membergets acompile-time error. protected acts like private ,
with the exception that an inheriting class may access protected members, but not
private members. Inheritance is introduced shortly.

Java also has a “default” access, which comes into play if you don’t use one of the
aforementioned specifiers. This is usually called package access because classes can
access the members of other classes in the same package (library component), but
outside the package those same members appear to be private .

##  🍀02.05 Reusing the Implementation
Once a class is tested, it should (ideally) represent a useful unit of code. This
reusability is not nearly so easy to achieve as many hope; it takes experience and
insight to produce a reusable object design. But once you have such a design, it begs
for reuse. Code reuse is an argument for object-oriented programming languages.

The simplest way to reuse a class is to use an object ofthat class directly, but you can
also place an object ofthat class inside a new class. Your new class can be made up
ofany number and type ofother objects, in any combination, to produce the desired
functionality. Because you compose a new class from existing classes, this concept
is called composition (if composition is dynamic, it’s usually called aggregation).
Composition is often called a has-a relationship, as in “A car has an engine.”

    +------+      +--------+
    | Car  | <--- | Engine |
    +------+      +--------+

(This diagram indicates composition with the filled diamond, which states there is
one car. I typically use a simpler form: just a line, without the diamond, to indicate
an association.²⁷

Composition comes with a great deal offlexibility. The member objects ofyour new
class are typically private, making them inaccessible to client programmers who use
the class. This means changing those members doesn’t disturb existing client code.
You can also change the member objects at run time, to dynamically change the
behavior ofyour program. Inheritance, described next, does not have this flexibility
because the compiler must place compile-time restrictions on classes created using
inheritance.

Inheritance is is often highly emphasized in object-oriented programming. A new
programmer can get the impression that inheritance should be used everywhere.
This can result in awkward and overly complicated designs. Instead, first look to
composition when creating new classes because it is simpler, more flexible, and
produces cleaner designs. Once you’ve had some experience, it is reasonably obvious
when you need inheritance.

²⁷ This is enough detail for most diagrams, and you don’t need to get specific 
about whether you’re using aggregation or composition.

##  🍀02.06 Inheritance
By itself, the idea of an object is a convenient tool. Objects package data and
functionality together by concept and represent an appropriate problem-space idea
rather than being forced to use the idioms ofthe underlying machine. These concepts
are expressed as fundamental units in the programming language byusing the class
keyword.

It seems a pity, however, to go to all the trouble to create a class, then be forced to
create a brand new one that might have similar functionality. It’s nicer ifwe can take
the existing class, clone it, then make additions andmodifications to the clone. This is
effectively what you get with inheritance, with the exception that ifthe original class
(called the base class or superclass or parentclass) is changed, the modified “clone”
(called the derived class or inherited class or subclass or childclass) also reflects those
changes.

    +-------+
    | Base  |
    +-------+
        ↑
    +---------+
    | Derived |
    +---------+

The arrow in this diagram points from the derived class to the base class. As you will
see, there is commonly more than one derived class.

A type does more than describe the constraints on a set ofobjects; it also relates to
other types. Two types can have characteristics and behaviors in common, but one
type might contain more characteristics than another and might also handle more
messages (or handle them differently). Inheritance expresses this similarity through
the concept ofbase types and derived types. A base type contains all characteristics
and behaviors shared among the types derived from it. You create a base type to
representthe core ofyourideas. Fromthe base type, you derive othertypes to express
the different ways this core can be realized.

For example, a trash-recycling machine sorts pieces oftrash. The base type is “trash.”
Each piece of trash has a weight, a value, and so on, and can be shredded, melted,
or decomposed. From this, more specific types of trash are derived with additional
characteristics (a bottle has a color, a steel can is magnetic) or behaviors (you can
crush an aluminum can). In addition, some behaviors can be different (the value
of paper depends on its type and condition). Using inheritance, you build a type
hierarchy that expresses the problem you’re trying to solve in terms ofits types.

A second example is the common“shape” example, perhaps used in a computer-aided
design system or game simulation. The base type is “shape,” and each shape has a
size, a color, a position, and so on. Each shape can be drawn, erased, moved, colored,
etc. From this, specific types ofshapes are derived(inherited)—circle, square, triangle,
and so on—each ofwhich can have additional characteristics and behaviors. Certain
shapes can be flipped, for example. Some behaviors might be different, such as when
you calculate the area ofa shape. The type hierarchy embodies both the similarities
and differences between the shapes.

              +------------+
              |    Shape   |
              |------------|
              |     draw() |
              |    erase() |
              |     move() |
              | getColor() |
              | setColor() |
              +------------+
                    ↑
        /-----------+-----------\
        ↑           ↑           ↑
    +--------+  +--------+  +----------+
    | Circle |  | Square |  | Triangle |
    +--------+  +--------+  +----------+

Casting the solution in the same terms as the problem is useful because you don’t
need intermediate models to get from a description ofthe problem to a description of
the solution. With objects, the type hierarchy is an important aspect ofthe model, so
you go directly from the description ofthe system in the real world to the description
ofthe system in code. Indeed, sometimes people who are trained to look for complex
solutions have difficulty with the simplicity ofobject-oriented design.

Inheriting from an existing type creates a new type. This new type contains not only
all the members of the existing type (although the private ones are hidden away
and inaccessible), but more importantly it duplicates the interface of the base class.
That is, all messages accepted by base-class objects are also accepted by derived-class
objects. We know the type ofa class by the messages it accepts, so the derived class is
the same typeas the base class. In the previous example, “Acircleis ashape.” This type
equivalence viainheritance is one ofthe fundamental gateways in understanding the
meaning of object-oriented programming.

Because both base class and derived class have the same fundamental interface, there
must be some implementation to go along with that interface. That is, there must be
executable code when an object receives a particular message. Ifyou inherit a class
and don’t do anything else, the methods from the base-class interface come right
along into the derived class. That means objects of the derived class have not only
the same type, they also have the same behavior, which isn’t particularly interesting.

There are two ways to differentiate your new derived class from the original base
class. The first is straightforward: add brand new methods to the derived class. These
new methods are not part ofthe base-class interface. This means the base class didn’t
do as much as you wanted, so you added more methods. This simple and primitive
use for inheritance is, at times, the perfect solution to your problem. However, look
closely for the possibility that your base class might also need these additional
methods (or that you should be using composition instead). This process of discovery
and iteration ofyour design happens regularly in object-oriented programming.

Although inheritance can sometimes imply (especially in Java, where the keyword
for inheritance is extends ) that you are going to add new methods to the interface,
that’s not necessarily true. The second and more important way to differentiate your
new class is to change the behavior ofan existing base-class method. This is called
overriding that method.

To override a method, you create a new definition for the method in the derived
class. You’re saying, “I’m using the same interface method here, but I want it to do
something different for my new type.”

### Is-a vs. Is-Like-a Relationships
There’s a certain debate that can occur about inheritance: Should inheritance override
only base-class methods (and not add new methods that aren’t in the base class)? This
would mean that the derived class is exactly the same type as the base class because
it has exactly the same interface. As a result, you can perfectly substitute an object
of the derived class for an object of the base class. This can be thought of as pure
substitution, and it’s often called the substitution principle²⁸. In a sense, this is the
ideal way to treat inheritance. We often refer to the relationship between the base
class and derived classes in this case as an is-a relationship, because you can say, “A
circle is a shape.” A test for inheritance is to see ifthe is-a relationship makes sense
for your classes.

Sometimes you add new interface elements to a derived type, thus extending the
interface. The new type can still substitute for the base type, but the substitution isn’t
perfect because your new methods are not accessible from the base type. This can be
described as an is-like-a relationship (my term). The new type has the interface of
the old type but it also contains other methods, so you can’t really say it’s exactly the
same. For example, consider an air conditioner. Suppose your house is wired with all
the controls for cooling; that is, it has an interface that to control cooling. Imagine
that the air conditioner breaks down and you replace it with a heat pump, which
can both heat and cool. The heat pump is-like-an air conditioner, but it can do more.
Because the control system of your house is designed only to control cooling, it is
restricted to communication with the cooling part of the new object. The interface
ofthe new object is extended, and the existing system only knows about the original
interface.
²⁸ Or Liskov Substitution Principle, after Barbara Liskov who first described it.

Once you see this design it becomes clear that the base class “cooling system” is not
general enough, and should be renamed to “temperature control system” so it can
also include heating—at which point the substitution principle will work. However,
this diagram shows what can happen with design in the real world.

When you see the substitution principle it’s easy to feel like this approach (pure
substitution) is the only way to do things, and in fact it is nice ifyour design works
out that way. But you’ll find there are times when it’s equally clear you must add
new methods to the interface of a derived class (extension). With inspection both
cases should be reasonably obvious.

##  🍀02.07 Interchangeable Objects with Polymorphism

When dealing with type hierarchies, you often treat an object not as the specific type
it is, but as its base type. This way you can write code that doesn’t depend on specific
types. In the shape example, methods manipulate generic shapes, unconcerned about
whether they’re circles, squares, triangles, or some shape that hasn’t even been
defined yet. All shapes can be drawn, erased, and moved, so these methods send a
message to a shape object without worrying how the object copes with the message.
Such code is unaffected by the addition of new types, and adding new types is
a common way to extend an object-oriented program to handle new situations.

For example, you can derive a new subtype of shape called “pentagon” without
modifying methods that deal only with generic shapes. This ability to easily extend a
design by deriving new subtypes is one ofthe essential ways to encapsulate change.
This improves designs while reducing the cost ofsoftware maintenance.

There’s aproblem when attempting to treat derived-type objects as their generic base
types (circles as shapes, bicycles as vehicles, cormorants as birds, etc.). If a method
tells a generic shape to draw itself, or a generic vehicle to steer, or a generic bird
to move, the compiler cannot know at compile time precisely what piece ofcode is
executed. That’s the whole point—when the message is sent, the programmer doesn’t
want to know what piece of code is executed; the draw method can be applied
equally to a circle, a square, or a triangle, and the object will execute the proper
code depending on its specific type.

If you don’t need to know what piece of code is executed, when you add a new
subtype, the code it executes can be different without requiring changes to the code
that calls it. But what does the compiler do when it cannot knowpreciselywhat piece
of code is executed? For example, in the following diagram the BirdController
object just works with generic Bird objects and does not know what exact type
they are. This is convenient from BirdController ’s perspective because it doesn’t
require special code to determine the exact type of Bird it’s working with or that
Bird s behavior. So how does it happen that, when move( ) is called while ignoring
thespecifictype of Bird , the right behavior will occur(a Goose walks, flies, orswims,
and a Penguin walks or swims)?

The answer is the primary twist of inheritance: The compiler cannot make a function
call in the traditional sense. The function call generated by a non-OOP compiler
produces what is called early binding, a term you might not have heard because
you’ve never thought about it any other way. It means the compiler generates a call
to a specific function name, which resolves to the absolute address ofthe code to be
executed. With inheritance, the program cannot determine the address of the code
until run time, so some other scheme is necessary when amessage is sent to an object.

To solve the problem, object-oriented languages use the concept of late binding.
When you send a message to an object, the code called isn’t determined until run
time. The compiler does ensure that the method exists and performs type checking
on the arguments and return value, but it doesn’t know the exact code to execute.

To perform late binding, Java uses a special bit of code in lieu of the absolute call.
This code calculates the address ofthe method body, using information stored in the
object (this process is covered in great detail in the Polymorphism chapter). Thus,
each object behaves differently according to the contents ofthat special bit ofcode.
When you send a message to an object, the object actually does figure out what to
do with that message.

In some languages you must explicitly grant a method the flexibility oflate-binding
properties. For example, C++ uses the virtual keyword. In such languages, methods
are not dynamically bound by default. In Java, dynamic binding is the default
behavior and you don’t need extra keywords to produce polymorphism.

Consider the shape example. The family of classes (all based on the same uniform
interface) was diagrammedearlierin this chapter. To demonstrate polymorphism, we
write a single piece ofcode that ignores specific details oftype and talks only to the
base class. That code is decoupled from type-specific information and thus is simpler
to write and easier to understand. And, if a new type—a Hexagon , for example—is
added through inheritance, code works just as well for the new type of Shape as it
did on the existing types. Thus, the program is extensible.
Ifyou write a method in Java (you will soon learn how):
```java
void doSomething( Shape shape) {
    shape. erase( );
    // . . .
    shape. draw( );
}
```
This method speaks to any Shape , so it is independent ofthe specific type ofobject
it’s drawing and erasing. Ifsome other part ofthe program uses the doSomething( )
method:
```java
Circle circle = new Circle( );
Triangle triangle = new Triangle( );
Line line = new Line( );
doSomething( circle);
doSomething( triangle);
doSomething( line);
```
The calls to doSomething( ) automatically work correctly, regardless of the exact
type ofthe object.
This is a rather amazing trick. Consider the line:

    doSomething( circle);

What’s happening here is that a Circle is passed into a method that expects a Shape .
Because a Circle is a Shape it is treated as such by doSomething( ) . That is, any
message that doSomething( ) can send to a Shape , a Circle can accept. It is a
completely safe and logical thing to do.

We call this process of treating a derived type as though it were its base type
upcasting. The name cast is used in the sense of casting into a mold and the up
comes from the way the inheritance diagram is typically arranged, with the base
type at the top and the derived classes fanning out downward. Thus, casting to a
base type is moving up the inheritance diagram: “upcasting.”

                  +------------+
                  |    Shape   |
                  |------------|
                  |     draw() |
                  |    erase() |
                  |     move() |
                  | getColor() |
              ↑   | setColor() |
         /----+   +------------+
         |              ↑
      /--+  /-----------+-----------\
      |     ↑           ↑           ↑
      | +--------+  +--------+  +----------+
      · | Circle |  | Square |  | Triangle |
        +--------+  +--------+  +----------+

An object-oriented program contains upcasting somewhere, because that’s how you
decouple yourself from knowing the exact type you’re working with. Look at the
code in doSomething( ) :
```java
shape. erase( );
// . . .
shape. draw( );
```
Notice it doesn’t say, “If you’re a Circle , do this, if you’re a Square , do that, etc.”

If you write that kind of code, which checks for all the possible types a Shape can
actually be, it’s messy and you must change it every time you add a new kind of
Shape . Here, you just say, “You’re a shape, I know you can erase( ) and draw( )
yourself, do it, and take care ofthe details correctly.”

What’s impressive about the code in doSomething( ) is that, somehow, the right
thing happens. Calling draw( ) for Circle causes different code to be executed than
calling draw( ) for a Square or a Line , but when the draw( ) message is sent to
an anonymous Shape , the correct behavior occurs based on the actual type of the
Shape . This is amazing because when the Java compiler is compiling the code for
doSomething( ) , it cannot know exactly what types it is dealing with. Ordinarily,
you’d expect it to end up calling the version of erase( ) and draw( ) for the base
class Shape , and not for the specific Circle , Square , or Line . And yet the right
thing happens—that’s polymorphism. The compiler and runtime system handle the
details; all you must know is it happens, and more importantly, how to design with
it. When you send a message to an object, the object will do the right thing, even
when upcasting is involved.

##  🍀02.08 The Singly-Rooted Hierarchy

An OOP issue that has become especially prominent since the introduction of C++
is whether all classes should by default be inherited from a single base class. In Java
(as with virtually all other OOP languages except for C++) the answer is yes, and the
name ofthis ultimate base class is simply Object .

There are many benefits to a singly-rooted hierarchy. All objects have a common
interface, so they are all ultimately the same fundamental type. The alternative
(provided by C++) is that you don’t know that everything is the same basic type.
From a backward-compatibility standpoint this fits the model ofC better and can be
thought ofas less restrictive, but for full-on object-oriented programming you must
build your own hierarchy to provide the same convenience that’s built into other
OOP languages. And in any new class library you acquire, some other incompatible
interface is used. It requires effort to work the new interface into your design. Is the
extra “flexibility” ofC++ worth it? Ifyou need it—ifyou have a large investment in
C—it’s quite valuable. If you’re starting from scratch, alternatives such as Java can
be more productive.

A singly rooted hierarchy makes it much easier to implement agarbagecollector, one
ofthe fundamental improvements ofJavaoverC++. Andsince information about the
type ofan object is guaranteed to be in all objects, you’ll never end up with an object
whose type you cannot determine. This is especially important with system-level
operations, such as exception handling (a language mechanism for reporting errors),
and to allow greater flexibility in programming.

##  🍀02.09 Collections

In general, you don’t know howmany objects you need to solve a particular problem,
or how long they will last. You also don’t know how to store those objects. How can
you know how much space to create ifthat information isn’t known until run time?

The solution to most problems in object-oriented design seems flippant: You create
another type of object. The new type of object that solves this particular problem
holds references to other objects. You can also do the same thing with an array,
available in most languages. But this new object, generally called a collection (also
called a container, but the Java libraries use “collection” almost universally), will
expand itself whenever necessary to accommodate everything you place inside it.
You don’t need to know how many objects you’re going to hold in a collection—just
create a collection object and let it take care ofthe details.

Fortunately, a good OOP language comes with a set of collections as part of the
package. InC++, it’s partoftheStandardC++ Libraryandis often called the Standard
Template Library (STL). SmallTalk has a very complete set of collections. Java also
has numerous collections in its standard library. In some libraries, one or two generic
collections is considered good enough for all needs, and in others (Java, for example)
the library has different types of collections for different needs: several different
kinds of List classes (to hold sequences), Map s (also known as associative arrays, to
associate objects with other objects), Set s (to hold one of each type of object), and
more components such as queues, trees, stacks, etc.

From a design standpoint, all you really want is a collection you can manipulate
to solve your problem. If a single type of collection satisfied all of your needs, we
wouldn’t needdifferent kinds. There are two reasons youneedachoice ofcollections:
1. Collections provide different types of interfaces and external behavior. Stacks
and queues are different from sets and lists. One ofthese might provide a more
flexible solution to your problem than another.
2. Different implementations have different efficiencies for certain operations. For
example, there are two basic types of List : ArrayList and LinkedList . Both
are simple sequences that can have identical interfaces and external behaviors.

But some operations have significantly different costs. Randomly accessing
elements in an ArrayList is a constant-time operation; it takes the same
amount oftime regardless ofthe element you select. However, in a LinkedList
it is expensive to move through the list to randomly select an element, and it
takes longer to find an element that is farther down the list. On the other hand,
to insert an element in the middle ofa sequence, it’s cheaper in a LinkedList
than in an ArrayList . These and other operations have different efficiencies
dependingontheunderlyingstructureofthe sequence. Youmightstartbuilding
your program with a LinkedList and, when tuning for performance, change
to an ArrayList . Because of the abstraction via the interface List , you can
change from one to the other with minimal impact on your code.

### Parameterized Types (Generics)
Before Java 5, collections held the one universal type in Java: Object . The singly
rooted hierarchy means everything is an Object , so a collection that holds Object s
can hold anything.²⁹ This made collections easy to reuse.

²⁹ They do not hold primitives, but autoboxing simplifies this restriction somewhat. 
This is discussed in detail later in the book.

To use such a collection, you add object references to it and later ask for them back.
But the collection holds only Object s, so when you add an object reference into the
collection it is upcast to Object , thus losing its character. When fetching it back, you
get an Object reference, and not a reference to the type you put in. How do you turn
it back into something with the specific type ofthe object you put into the collection?
Here, the cast is used again, but this time you’re not casting up the inheritance
hierarchy to a more general type. Instead, you cast down the hierarchy to a more

specific type, so this manner of casting is called downcasting. With upcasting, you
know that a Circle is a type of Shape so it’s safe to upcast, but you don’t know that
an Object is necessarily a Circle or a Shape so it’s not safe to downcast unless you
determine extra type information about that object.

It’s not completely dangerous because if you downcast to the wrong type you’ll
get a runtime error called an exception, described shortly. When you fetch Object
references from acollection, however, you need some wayto remember exactlywhat
they are in order to perform a proper downcast.

Downcasting and the associated runtime checks require extra time for the running
program and extra effort from the programmer. Wouldn’t it make sense to somehow
create the collection so it knows the types it holds, eliminating the need for the down-
cast and a possible mistake? The solution is called a parameterizedtype mechanism.
Aparameterizedtypeis aclass thatthecompilercanautomaticallycustomizeto work
with particular types. For example, with a parameterized collection, the compiler can
customize that collection so it accepts only Shape s and fetches only Shapes.

Java 5 added parameterized types, called generics, which is a major feature. You’ll
recognize generics by the angle brackets with types inside; for example, you can
create an ArrayList to hold Shape like this:

ArrayList<Shape> shapes = new ArrayList<>( );

There have also been changes to many of the standard library components to take
advantage ofgenerics. You will see that generics have an impact on much ofthe code
in this book.

##  🍀02.10 Object Creation & Lifetime
One critical issue when working with objects is the way they are created and
destroyed. Each object requires resources, most notably memory, to exist. When an
object is no longer needed it must be cleaned up so these resources are released for
reuse. In simple programming situations the question ofhow an object is cleaned up
doesn’t seem too challenging: You create the object, use it for as long as it’s needed,
then it should be destroyed. However, it’s not hard to encounter situations that are
more complex.

Suppose, for example, you are designing a system to manage air traffic for an airport.
(The same model might also work for managing crates in a warehouse, or a video
rental system, or a kennel for boarding pets.) At first it seems simple: Make a
collection to hold airplanes, then create a new airplane and place it in the collection
for each airplane that enters the air-traffic-control zone. For cleanup, simply clean
up the appropriate airplane object when a plane leaves the zone.

But suppose you have some other system to record data about the planes; perhaps
data that doesn’t require such immediate attention as the main controller function.
Maybe it’s a record ofthe flight plans ofall the small planes that leave the airport. So
you have a second collection ofsmall planes, and whenever you create a plane object
you also put it in this second collection ifit’s a small plane. Then some background
process performs operations on the objects in this collection during idle moments.

Now the problem is more difficult: How can you possibly know when to destroy the
objects? When you’re done with the object, some other part ofthe system might not
be. This same problem can arise in anumber ofother situations, and in programming
systems (such as C++) where you must explicitly delete an object this can become
quite complex.

Where is the data for an object and how is the lifetime of the object controlled?
C++ takes the approach that efficiency is the most important issue, so it gives the
programmer a choice. For maximum runtime speed, the storage and lifetime can be
determined while the program is written, by placing the objects on the stack (these
are sometimes called automaticor scopedvariables) or in the static storage area. This
places a priority on the speed ofstorage allocation and release, and this control can
be very valuable in certain situations. However, you sacrifice flexibility because you
must know the exact quantity, lifetime, and type ofobjects while you’re writing the
program. Ifyou are trying to solve a more general problem such as computer-aided
design, warehouse management, or air-traffic control, this is too restrictive.

The second approach is to create objects dynamically in a pool ofmemory called the
heap. In this approach, you don’t know until run time how many objects you need,
what their lifetime is, or what their exact type is. Those are determined at the spur
ofthe moment while the program is running. Ifyou need a new object, you simply
make it on the heap when you need it. Because the storage is managed dynamically,
at run time, the amount oftime required to allocate storage on the heap can be longer
than the time to create storage on the stack (but not necessarily). Creating storage on
the stack is often a single assembly instruction to move the stack pointer down and
another to move it back up. The time to create heap storage depends on the design
ofthe storage mechanism.

The dynamic approach makes the generally logical assumption that objects tend to be
complicated, so the extra overhead offinding storage and releasing that storage will
not have an important impact on the creation of an object. In addition, the greater
flexibility is essential to solve general programming problems.

Java uses dynamic memory allocation, exclusively.³⁰ Every time you create an object,
you use the new operator to build a dynamic instance ofthat object.

There’s another issue, however, and that’s the lifetime ofan object. With languages
that allow objects to be created on the stack, the compiler determines how long the
object lasts and automatically destroys it. However, ifyou create it on the heap the
compilerhas no knowledgeofits lifetime. InalanguagelikeC++, youmustdetermine
programmatically when to destroy the object, which can lead to memory leaks if
you don’t do it correctly. Java is built upon a garbage collector which automatically
discovers when an object is no longer in use and releases it. A garbage collector is
much more convenient because it reduces the number ofissues you must track and
the code you must write. Thus, the garbage collector provides a much higher level of
insurance against the insidious problem ofmemory leaks, which has brought many
a C++ project to its knees.

With Java, the garbage collector is designed to take care ofthe problem ofreleasing
memory (although this doesn’t include other aspects ofcleaning up an object). The
garbage collector “knows” when an object is no longer in use, and automatically
releases the memory for that object. This, combined with the fact that all objects
are inherited from the single root class Object and you can create objects only one
way—on the heap—makes the process of programming in Java much simpler than
programming in C++. You have far fewer decisions to make and hurdles to overcome.

##  🍀02.11 Exception Handling: Dealing with Errors
Since the beginning of programming languages, error handling has been especially
difficult. Because it’s so hard to design a good error-handling scheme, many lan-
guages ignore the issue, passing the problem on to library designers who come up
³⁰ Primitive types, which you’ll learn about later, are a special case.

with halfway measures that work in many situations but can easily be circumvented,
generallybyjustignoringerrors. A major problem with most error-handling schemes
is that they rely on programmers to follow an agreed-upon convention that is not
enforced by the language. If the programmer is not vigilant—often the case if they
are in a hurry—these schemes can easily be forgotten.
Exception handling wires error handling directly into the programming language and
sometimes even the operating system. Anexceptionis anobjectthatis “thrown” from
the site of the error and can be“caught” by an appropriate exception handler designed
for that particular type of error. It’s as if exception handling is a different, parallel
path ofexecution, taken when things go wrong. Because it uses a separate execution
path, it doesn’t interfere with your normallyexecuting code. This can make that code
simpler to write because you aren’t constantly forced to check for errors. In addition,
a thrown exception is unlike an error value returned from a method or a flag set by a
method to indicate an error condition—these can be ignored. An exception cannot be
ignored, so it’s guaranteed to be dealt with at some point. Finally, exceptions provide
a way to reliably recover from a bad situation. Instead of just exiting the program,
you are sometimes able to set things right and restore execution, which produces
more robust programs.

Java’s exception handling stands out among programming languages, because in
Java, exception handling was wired in from the beginning and you’re forced to use
it. It is the single acceptable way to report errors. If you don’t write your code to
properlyhandle exceptions, you’ll get acompile-time errormessage. This guaranteed
consistency can sometimes make error handling much easier.

It’s worth noting that exception handling isn’t an object-oriented feature, although
in object-oriented languages the exception is normally represented by an object.
Exception handling existed before object-oriented languages.

##  🍀02.12 Summary
A procedural program contains data definitions and function calls. To find the
meaning ofsuch a program, you must work at it, looking through the function calls
and low-level concepts to create a model in your mind. This is the reason we need
intermediate representations when designing procedural programs—by themselves,
these programs tend to be confusing because the terms of expression are oriented
more toward the computer than to the problem you’re solving.

Because OOP adds many new concepts on top of what you find in a procedural
language, your natural assumption might be that the resulting Java program is far
more complicatedthan the equivalentprocedural program. Here, you’ll be pleasantly
surprised: A well-written Java program is generally simpler and easier to understand
than a procedural program. What you’ll see are the definitions of the objects that
represent concepts in your problem space (rather than the issues of the computer
representation) and messages sent to those objects to indicate activities in that space.

One of the delights of object-oriented programming is that, with a well-designed
program, it’s easy to understand the code by reading it. Usually, there’s a lot less
code as well, because many problems are solved by reusing existing library code.
OOP and Java might not be for everyone. It’s important to evaluate your own needs
and decide whether Java will optimally satisfy those needs, or ifyou might be better
off with another programming system (perhaps the one you’re currently using). If
your needs are very specialized for the foreseeable future and you have specific
constraints that might not be satisfied by Java, you owe it to yourselfto investigate
the alternatives (in particular, I recommend looking at Python³¹). Ifyou still choose
Java as your language, you’ll at least understand what the options were and have a
clear vision ofwhy you took that direction.
³¹ https://www.python.org/

# 📜03. Installing Java and the Book Examples

##  🍀03.01 Editors

##  🍀03.02 The Shell

##  🍀03.03 Installing Java

##  🍀03.04 Verify Your Installation

##  🍀03.05 Installing and Running the Book Examples

##  🍀03.06 Objects Everywhere

##  🍀03.07 You Manipulate Objects with References

##  🍀03.08 You Must Create All the Objects

##  🍀03.09 Comments

##  🍀03.10 You Never Need to Destroy an Object

##  🍀03.11 Creating New Data Types: class

##  🍀03.12 Methods, Arguments, and Return Values

##  🍀03.13 Writing a Java Program

##  🍀03.14 Your First Java Program

##  🍀03.15 Coding Style

##  🍀03.16 Summary

# 📜04. Operators

##  🍀04.01 Using Java Operators

##  🍀04.02 Precedence

##  🍀04.03 Assignment

##  🍀04.04 Mathematical Operators

##  🍀04.05 Auto Increment and Decrement

##  🍀04.06 Relational Operators

##  🍀04.07 Logical Operators

##  🍀04.08 Literals

##  🍀04.09 Bitwise Operators

##  🍀04.10 Shift Operators

##  🍀04.11 Ternary if-else Operator

##  🍀04.12 String Operator + and +=

##  🍀04.13 Common Pitfalls When Using Operators

##  🍀04.14 Casting Operators

##  🍀04.15 Java Has No “sizeof”

##  🍀04.16 A Compendium of Operators

##  🍀04.17 Summary

# 📜05. Control Flow

##  🍀05.01 true and false

##  🍀05.02 if-else

##  🍀05.03 Iteration Statements

##  🍀05.04 For-in Syntax

##  🍀05.05 return

##  🍀05.06 break and continue

##  🍀05.07 The Infamous “Goto”

##  🍀05.08 switch

##  🍀05.09 Switching on Strings

##  🍀05.10 Summary

# 📜06. Housekeeping

##  🍀06.01 Guaranteed Initialization with the Constructor

##  🍀06.02 Method Overloading

##  🍀06.03 Zero-Argument Constructors

##  🍀06.04 The this Keyword

##  🍀06.05 Cleanup: Finalization and Garbage Collection

##  🍀06.06 Member Initialization

##  🍀06.07 Constructor Initialization

##  🍀06.08 Array Initialization

##  🍀06.09 Enumerated Types

##  🍀06.10 New Feature: Local Variable Type Inference

##  🍀06.11 Summary

# 📜07. Implementation Hiding

    Accesscontrol (or implementationhiding) is about “not getting it right the
    first time.”

All good writers—including those who write software—know that a piece of work
isn’t good until it’s been rewritten, often many times. Ifyou leave a piece ofcode in
a drawer for a while and come back to it, you might see a much better way to do it.
This is one ofthe prime motivations for refactoring, which rewrites working code to
make it more readable, understandable, and thus maintainable.⁶⁹

⁶⁹ See Refactoring: Improvingthe Design ofExistingCode, by Martin Fowler, et al. 
(Addison-Wesley, 1999). Occasionally someone will argue against refactoring, suggesting 
that code which works is perfectly good and it’s a waste oftime to refactor it. 
The problem with this way ofthinking is that the lion’s share ofa project’s time and 
money is not in the initial writing ofthe code, but in maintaining it. Making code 
easier to understand translates into very significant dollars.

There is atension, however, in this desire to change and improve your code. There are
often consumers (client programmers) who rely on some aspect ofyour code staying
the same. So you want to change it; they want it to stay the same. Thus a primary
consideration in object-oriented design is to “separate the things that change from
the things that stay the same.”

This is particularly important for libraries. Consumers of that library must rely on
the part they use, and know they won’t have to rewrite code if a new version of
the library comes out. On the flip side, the library creator must have the freedom to
make modifications and improvements with the certainty that the client code won’t
be affected by those changes.

This can be achieved through convention. For example, the library programmer must
agree not to remove existing methods when modifying a class in the library. That
would break the client programmer’s code. The reverse situation is more complex.
In the case of a field, how can the library creator know which fields were accessed
by client programmers? This is also true with methods used only to implement a
class, but not meant for direct use by client programmers. What ifthe library creator
wants to rip out an old implementation and put in a new one? Changing any of
those members might break a client programmer’s code. Thus the library creator is
in a strait jacket and can’t change anything.

To solve this problem, Java provides access specifiers to allow the library creator to
say what is available to the client programmer and what is not. The levels ofaccess
control span from “most access” to “least access”: `public` , `protected` , 
package access (which has no keyword), and `private` . From the previous paragraph you
might think, as a library designer, you’ll keep everything as “private” as possible,
and expose only the methods you want the client programmer to use. This is generally
what you’ll do, even though it’s often counterintuitive for people who program in
other languages (especially C) and who are used to accessing everything without
restriction.

The concept of a library of components and the control over who can access the
components ofthat libraryis not complete, however. There’s still the question ofhow
the components are bundled together into a cohesive library unit. This is controlled
with the package keyword in Java, and the access specifiers are affected by whether
a class is in the same package or in a separate package. So to begin this chapter, you’ll
learn how library components are placed into packages. Then you can understand
the complete meaning ofthe access specifiers.

##  🍀07.1 package: the Library Unit
A package contains a group ofclasses, organized together under a single namespace.
For example, there’s a utility library that’s part of the standard Java distribution,
organized under the namespace java. util . One of the classes in java. util is
called ArrayList . One way to use an ArrayList is to specify the full name
java. util. ArrayList.
```java
// hiding/FullQualification.java
public class FullQualification {
    public static void main( String[] args) {
        java. util. ArrayList list =
        new java. util. ArrayList( );
    }
}
```

This rapidly becomes tedious, so you can use the `import` keyword instead. To import
a single class, you name that class in the import statement:
```java
// hiding/Singl eImport.java
import java.util.ArrayList;

public class SingleImport {
    public static void main( String[] args) {
        ArrayList list = new ArrayList( );
    }
}
```
Now you can use `ArrayList` with no qualification. However, none of the other
classes in java. util are available. To import everything, you use the * as you’ve
been seeing in the rest ofthe examples in this book:

    import java.util.*;

JDK1.5 新增 import static 用于导入指定类的静态属性和静态方法，方便直接使用静态属性和静态方法。

The reason for all this importing is to provide a mechanism to manage namespaces.
The names of all your class members are insulated from each other. A method `f( )`
inside a class A will not clash with an `f( )` that has the same signature in class B .
But what about the class names? Suppose you create a Stack class that is installed
on a machine that already has a Stack class that’s written by someone else? This
potential clashing of names is why we need complete control over namespaces in
Java. To achieve this, we create a unique identifier combination for each class.

Most ofthe examples thus far have existed in a single file and are designed for local
use, so they haven’t bothered with package names. However, an example without
a package name is still in a package: the “unnamed” or default package. This is
certainly an option, and for simplicity’s sake this approach is used whenever possible
throughout the rest of this book. However, if you’re planning to create libraries or
programs friendly to other Java programs on the same machine, you must think about
preventing class name clashes.

A Java source-code file is called a compilation unit (sometimes a translation unit).
Each compilation unit must have afile name ending in .java . Inside the compilation
unit there can be a public class that must have the same name as the file (including
capitalization, but excluding the .java file name extension). There can be only one
public class in each compilation unit; otherwise, the compiler will complain. Ifthere
are additional classes in that compilation unit, they are hidden from the world outside
that package because they’re not public , and they comprise “support” classes for the
main public class.

### Code Organization
When you compile a .java file, you get an output file foreachclass in the .java file.
Each output file has the name ofits corresponding class in the .java file, but with an
extension of .class . Thus you can end up with quite afew .class files from asmall
number of .java files. If you’ve programmed with a compiled language, you might
be usedto the compiler spitting out an intermediate form(usuallyan“obj” file) thatis
then packaged together with others ofits kind using a linker (to create an executable
file) or a librarian(to create a library). That’s not how Java works. A working program
is a bunch of .class files, which can be packaged and compressed into a Java
ARchive (JAR) file (using the jar archiver). The Java interpreter is responsible for
finding, loading, and interpreting these files.

A library is agroup ofthese class files. Each source file usually has a public class and
any number of non-public classes, so there’s one public component for each source
file. To say that all these components belong together, use the package keyword.
Ifyou use a package statement, it must appear as the first non-comment in the file.
When you say:

    package hiding;

you’re stating this compilation unit is part ofa library named hiding . Put another
way, you’re saying that the public class name within this compilation unit is under
the umbrella of the name hiding , and anyone who wants to use that name must
either fully specify the name or use the import keyword in combination with hiding ,
using the choices given previously. (Note that the convention for Javapackage names
is to use all lowercase letters, even for intermediate words.)
For example, suppose the name of a file is MyClass. java . This means there can
only be one public class in that file, and the name of that class must be MyClass
(including the capitalization):
```java
// hiding/mypackage/MyClass.java
package hiding.mypackage;

public class MyClass {
// . . .
}

```
Now, ifsomeone wants to use MyClass or, for that matter, any ofthe other public
classes in hiding. mypackage , they must use the import keyword to make the
name or names in hiding. mypackage available. The alternative is to give the fully
qualified name:
```java
// hiding/QualifiedMyCl ass.java
public class QualifiedMyClass {
    public static void main( String[] args) {
        hiding. mypackage. MyClass m =
            new hiding. mypackage. MyClass( );
    }
}

```
The import keyword makes it cleaner:
```java
// hiding/ImportedMyClass.java
import hiding. mypackage. *;
public class ImportedMyClass {
    public static void main( String[] args) {
        MyClass m = new MyClass( );
    }
}
```
The package and import keywords divide up the single global namespace so names
don’t clash.


### Creating Unique Package Names
You might observe that, because a package never really gets “packaged” into a single
file, a package can be made up of many . class files, and things could get a bit
cluttered. To prevent this, a logical thing to do is to place all the . class files for a
particular package into a single directory; that is, use the hierarchical file structure
ofthe operating system to your advantage. This is one way that Java references the
problem ofclutter; you’ll see the other way later when the jar utility is introduced.

Collecting the package files into a single subdirectory solves two other problems:
creating unique package names, and finding those classes that might be buried in
a directory structure someplace. This is accomplished by encoding the path of the
location of the . class file into the name of the package . By convention, the first
part of the package name is the reversed Internet domain name of the creator of
the class. Because Internet domain names are unique, if you follow this convention,
your package name is also unique and you won’t have a name clash. If you don’t
have your own domain name, you must fabricate an unlikely combination (such as
your first and last name) to create unique package names. Ifyou’ve decided to start
publishing Java code, it’s worth the relatively small effort to get a domain name.

The second part of this trick is resolving the package name into a directory on your
machine, so when the Java interpreter must load a . class file, it can locate the
directory where that . class file resides. First, it finds the environment variable
CLASSPATH⁷⁰ (set via the operating system, and sometimes by the installation
program that installs Java or a Java-based tool on your machine). CLASSPATH
contains one or more directories that are roots in asearch for . class files. Starting at
that root, the interpreter takes the package name and replaces each dot with a slash
to generate a path name off of the CLASSPATH root (so package foo. bar. baz
becomes `foo\bar\baz` or `foo/bar/baz` or possibly something else, depending on
your operating system). This is then concatenated with the various entries in the
CLASSPATH. That’s where it looks for the . class file with the name corresponding
to the class you’re trying to create. (It also searches some standarddirectories relative
to where the Java interpreter resides.)

⁷⁰ When referring to the environment variable, capital letters are used (e.g. CLASSPATH).

To understand this, consider my domain name, MindviewInc. com . By reversing this
and making it all lowercase, com. mindviewinc establishes my unique global name
for my classes. (The com , edu , org , etc., extensions were formerly capitalized in Java
packages, but this was changed in Java 2 so the entire package name is lowercase.) I
subdivide this by deciding to create a library named simple , yielding:

    package com.mindviewinc.simple;

This package name can be used as an umbrella namespace for the following two files:
```java
// com/mindviewinc/simple/Vector.java
// Creating a package
package com.mindviewinc.simple;

public class Vector {
    public Vector( ) {
        System.out.println( "com.mindviewinc.simple.Vector");
    }
}
```
As mentioned before, the package statement must be the first non-comment code in
the file. The second file looks much the same:
```java
// com/mindviewinc/simple/List.java
// Creating a package
package com.mindviewinc.simple;

public class List {
    public List( ) {
        System.out.println( "com.mindviewinc.simple.List");
    }
}
```
Both ofthese files are placed in the following subdirectory on my machine:

    C: \DOC\Java\com\mindviewinc\simple

(The first comment line in every file in this book establishes the directory location of
that file in the source-code tree—this is used by the automatic code-extraction tool
for this book.)

If you walk back through this path, you see the package name com.mindviewinc.simple ,
but what about the first portion ofthe path? That’s taken care ofby the CLASSPATH
environment variable. On my machine, part ofthe CLASSPATH looks like this:

    CLASSPATH=. ; D:\JAVA\LIB; C:\DOC\Java

The CLASSPATH can contain many alternative search paths.
There’s a variation when using JAR files, however. You must put the actual name of
the JAR file in the classpath, not just the path where it’s located. So for a JAR named
grape. jar your classpath would include:

    CLASSPATH=. ; D:\JAVA\LIB; C:\flavors\grape.jar

Once the classpathis setup properly, the followingfile can be placedin anydirectory:
```java
// hiding/LibTest.java
// Uses the library
import com. mindviewinc.simple.*;

public class LibTest {
    public static void main( String[] args) {
        Vector v = new Vector( );
        List l = new List( );
    }
}
/* Output:
com. mindviewinc. simple. Vector
com. mindviewinc. simple. List
*/
```
When the compilerencounters the import statementforthe simple library, itbegins
searching at the directories specified by CLASSPATH, looking for subdirectory
com/mindviewinc/simple , then seeking the compiled files of the appropriate
names ( Vector. class for Vector , and List. class for List ). Note that both the
classes and the desired methods in Vector and List must be public .

Setting the CLASSPATH is such atrial for beginning Javausers (it was forme, when I
started) that the JDK for later versions ofJava got a bit smarter. You’ll find that when
you install it, even ifyou don’t set the CLASSPATH, you can compile and run basic
Java programs. However, to compile and run the individual examples for this book
(available at https://github.com/BruceEckel/OnJava8-examples⁷¹), you must add the
base directory ofthe book’s unpacked code tree to your CLASSPATH (the gradlew
command manages its own CLASSPATH, so you only need to set the CLASSPATH
ifyou want to use javac and java directly, without Gradle).
⁷¹ https://github.com/BruceEckel/Onjava8-examples

### Collisions
What happens iftwo libraries are imported via * and they include the same names?
For example, suppose a program does this:

    import com. mindviewinc. simple. *;
    import java. util. *;

java.util.* also contains a Vector class so this causes a potential collision.
However, as long as you don’t write the code that actually causes the collision,
everything is OK—this is good, because otherwise you might do a lot of typing to
prevent collisions that never happen.

The collision does occur ifyou now try to make a Vector :

    Vector v = new Vector( );

Which Vector class does this refer to? The compiler can’t know, and the reader can’t
knoweither. So the compilercomplains andforces youto be explicit. Forthe standard
Java Vector , you say:

    java.util.Vector v = new java.util.Vector( );

This, along with the CLASSPATH, completely specifies the location ofthat Vector
so there’s no need for the `import java.util.*` statement unless I use something
else from `java.util`.

Alternatively, you can use the single-class import form to prevent clashes—as long
as you don’t use both colliding names in the same program (in which case you must
fall back to fully specifying the names).

### A Custom Tool Library
With this knowledge, you can now create your own libraries of tools to reduce or
eliminate duplicate code.

Ordinarily, I would package such a utility using my reversed domain name, in
something like com. mindviewinc. util , but to simplify and reduce some visual
noise, I’ll reduce this book’s utility package name to just onjava .

For example, here are the range( ) methods introduced in the Control Flow chapter.
These allow for-in syntax for simple integer sequences:
```java
// onjava/Range.java
// Create arrays initialized with integer values.
package onjava;

public class Range {
    // Produce sequence [start. . end) incrementing by step
    public static
    int[] range( int start, int end, int step) {
        if ( step == 0)
            throw new
        IllegalArgumentException( "Step cannot be zero");
        int sz = Math. max( 0, step >= 0 ?
            ( end + step - 1 - start) / step
            : ( end + step + 1 - start) / step);
        int[] result = new int[sz] ;
        for( int i = 0; i < sz; i++)
            result[i] = start + ( i * step);
        return result;
    } // Produce a sequence [start. . end)
    public static int[] range( int start, int end) {
        return range( start, end, 1);
    }
    // Produce a sequence [0. . n)
    public static int[] range( int n) {
        return range( 0, n);
    }
}
```
The location of Range. java must be in a directory that starts at one of the
CLASSPATH locations, then continues into onjava . After compiling, the methods
can be used anywhere in your system using an import static statement. Here are
a few basic tests to verify that it’s working correctly:
```java
// onjava/TestRange.java
// Basic test of Range.java
import static onjava.Range.*;
import java.util.Arrays;

public class TestRange {
    private static void show( int[] rng) {
        System. out. println( Arrays. toString( rng));
    }
    public static void main( String[] args) {
        show( range( 10, 21, 3));
        show( range( 21, 10, -3));
        show( range( -5, 5, -3));
        show( range( -5, 5, 3));
        show( range( 10, 21));
        show( range( 10));
    }
}
/* Output:
[10, 13, 16, 19]
[21, 18, 15, 12]
[]
[-5, -2, 1, 4]
[10, 11, 12, 13, 14, 15, 1 6, 1 7, 18, 19, 20]
[0, 1 , 2, 3, 4, 5, 6, 7, 8, 9]
*/
```
Fromnowon, wheneveryoucome up withauseful newutility, youcan additto your
own library. You’ll see more components added to the onjava librarythroughout the
book.

### Using Imports to Change Behavior
A missing feature in Java is C’s conditionalcompilation, where you change a switch
and get different behavior without changing any other code. The reason such a
feature was left out of Java is probably because it is most often used in C to solve
cross-platform issues: Different portions ofthe code are compiled depending on the
target platform. Java is intended to be automatically cross-platform so such a feature
should not be necessary.

However, there are other valuable uses for conditional compilation. A very common
use is for debugging code. The debugging features are enabled during development
and disabled in the shipping product. You can accomplish this by changing the
package that’s imported to change the code used in your program from the debug
version to the production version. This technique can be used for any kind of
conditional code.

### Package Caveat
When you create a package, you implicitly specify a directory structure when you
give the package a name. The package must live in the directory indicated by
its name, and that directory must be searchable starting from the CLASSPATH.

Experimenting with the package keyword can be a bit frustrating at first, because
unless you adhere to the package-name to directory-path rule, you’ll get many
mysterious runtime messages about not being able to find a particular class, even
if that class is sitting there in the same directory. If you get a message like this,
try commenting out the package statement, and if it runs, you’ll know where the
problem lies.

Note that compiled code is often placed in a different directory than source code.
This is the standard for many projects, and integrated development environments
will usually do it automatically. The path to the compiled code must still be found
by the JVM through the CLASSPATH.

##  🍀07.2 Java Access Specifiers
The Java access specifiers public , protected , and private are placed in front of
definitions for members in your class, both fields and methods. Each access specifier
only controls the access for that particular definition.

If you don’t provide an access specifier, it means “package access.” So one way or
another, everything has some kind ofaccess control. In the following sections, you’ll
learn about various kinds ofaccess.

### Package Access
All the examples before this chapter have only used the public access specifier,
or no specifier (default access). Default access has no keyword, and is commonly
called package access(sometimes “friendly”). It means that all the other classes in the
current package have access to that member. To all the classes outside ofthis package,
the member appears as private . A compilation unit—a file—can belong to only a
single package so all the classes within a single compilation unit are automatically
available to each other via package access.

Package access groups related classes into a package so they can easily interact
with each other. Classes in a package grant mutual access to their package-access
members, so you “own” the code in that package. It makes sense that only code you
own should have package access to other code you own. Package access is one reason
for grouping classes together in a package. In many languages, the way you organize
your definitions in files can be arbitrary, but in Java you’re compelled to organize
them in a sensible fashion. In addition, you’ll probably exclude classes that shouldn’t
have access to the classes defined in the current package.

The class controls the code that has access to its members. Code from another package
can’t just come around and say, “Hi, I’m a friend of Bob s!” and expect to be 
shown the protected , package-access, and private members of Bob . The only way to 
grant access to a member is to:
1. Make the member public . Then everybody, everywhere, can access it.
2. Give the member package access by leaving offany access specifier, and put the
other classes in the same package. Then the other classes in that package can
access the member.
3. As you’ll see in the Reuse chapter, when inheritance is introduced, an inherited
class can access a protected member as well as a public member (but
not private members). It can access package-access members only if the
two classes are in the same package. But don’t worry about inheritance and
protected right now.
4. Provide “accessor/mutator” methods (also known as “get/set” methods) that
read and change the value.

### public: Interface Access
When you use the public keyword, it means the member declaration that immediately 
follows public is available to everyone, in particular to the client
programmerwho uses the library. Suppose you define apackage dessert containing
the following compilation unit:
```java
// hiding/dessert/Cookie.java
// Creates a library
package hiding.dessert;

public class Cookie {
    public Cookie( ) {
        System. out. println( "Cookie constructor");
    }
    void bite( ) { System. out. println( "bite"); }
}
```
Remember, the class file produced by Cookie. java must reside in a subdirectory
called dessert , in a directory under hiding (indicating the Implementation Hiding
chapter ofthis book) that must be under one ofthe CLASSPATH directories. Don’t
make the mistake of thinking that Java will always look at the current directory as
one ofthe starting points for searching. Ifyou don’t have a . as one ofthe paths in
your CLASSPATH, Java won’t look there.

Now we can create a program that uses Cookie :
```java
// hiding/Dinner.java
// Uses the library
import hiding.dessert.*;

public class Dinner {
    public static void main( String[] args) {
        Cookie x = new Cookie( );
        //- x. bite(); // Can't access
    }
}
/* Output:
Cookie constructor
*/
```

You can create a Cookie object because its constructor is public and the class is
public . (We’lllookmoreatthe conceptofa public class later.) However, the bite( )
member is inaccessible inside Dinner. java because bite( ) provides access only
within package dessert , so the compiler prevents you from using it.

### The Default Package
You might be surprised to discover that the following code compiles, even though it
appears to break the rules:
```java
// hiding/Cake.java
// Accesses a class in a separate compil ation unit
class Cake {
    public static void main( String[] args) {
        Pie x = new Pie( );
        x. f( );
    }
}
/* Output:
Pie. f()
*/
```

In a second file in the same directory:
```java
// hiding/Pie.java
// The other cl ass
class Pie {
    void f( ) { System.out.println( "Pie.f( )"); }
}
```
Initially, these seem like completely foreign files, and yet Cake is able to create a
Pie object and call its f( ) method. (Note you must have . in your CLASSPATH
for the files to compile.) You’d typically think Pie and f( ) have package access and
are therefore not available to Cake . They dohave package access—that part is correct.
The reason they are available in Cake. java is because they are in the same directory
and have no explicit package name. Java treats files like this as implicitly part ofthe
“default package” for that directory, and thus they provide package access to all the
other files in that directory.

### private: You Can’t Touch That!
The private keyword means no one can access that member except the class that
contains thatmember, inside methods ofthatclass. Otherclasses in the same package
cannot access private members, so it’s as ifyou’re even insulating the class against
yourself. On the other hand, it’s not unlikely that a package might be created by
several people collaborating together. With private , you can freely change that
member without worrying whether it affects another class in the same package.

Default package access often provides an adequate amount of hiding; remember, a
package-access member is inaccessible to the client programmer using the class. This
is nice because default access is the one you normally use (and the one that you’ll
get ifyou forget to add any access control). Thus, you’ll typically think about access
for the members you make public for the client programmer. As a result, you might
initially think you won’t use the private keyword very often because it’s tolerable to
get away without it. However, the consistent use of private is important, especially
where multithreading is concerned. (As you’ll see in the Concurrent Programming
chapter.)

Here’s an example of private :
```java
// hiding/IceCream.java
// Demonstrates "private" keyword
class Sundae {
    private Sundae( ) {}
    static Sundae makeASundae( ) {
        return new Sundae( );
    }
}
public class IceCream {
    public static void main( String[] args) {
        //- Sundae x = new Sundae();
        Sundae x = Sundae. makeASundae( );
    }
}
```
This shows an example where private comes in handy: To control how an object
is created and prevent someone from directly accessing a particular constructor (or
all of them). In the preceding example, you cannot create a Sundae object via its
constructor; instead, you must call the makeASundae( ) method to do it for you.⁷²
Any method that you’re certain is only a “helper” method for that class can be made
private , to ensure you don’t accidentally use it elsewhere in the package and thus
prohibityourselffromchanging orremovingthe method. Making amethod private
retains these options.

⁷² There’s another effect here: The zero-argument constructor is the only one defined 
and it’s private so it prevents inheritance ofthis class (A subject to be introduced later).

The same is true for a private field inside a class. Unless you must expose the
underlying implementation (less likely than you might think), make fields private .
However, just because a reference to an object is private inside a class doesn’t
mean that some other object can’t have a public reference to the same object. (See
Appendix: Passing and Returning Objects to learn about aliasing issues.)

### protected: Inheritance Access
Understanding the protected access specifier requires ajump ahead. First, be aware
you don’t have to understand this section to continue through this book up through
inheritance (the Reuse chapter). But for completeness, here is a briefdescription and
example using protected .

The protected keyword deals with a concept called inheritance, that takes an
existing class—which we refer to as the base class—and adds new members to that
class withouttouchingthe existingclass. Youcanalso change the behaviorofexisting
members ofthe class. To inherit from a class, you say that your new class extends
an existing class, like this:

    class Foo extends Bar {

The rest of the class definition looks the same.

If you create a new package and inherit from a class in another package, the only
members you can access are the public members of the original class. (If you
perform the inheritance in the same package, you can manipulate all the members
with package access.) Sometimes the creator of the base class would like to take a
particular member and grant access to derived classes but not the world in general.
That’s what protected does. protected also gives package access—that is, other
classes in the same package can access protected elements.

Ifyou refer backto the file Cookie. java , the following class cannotcall the package-
access member bite( ) :
```java
// hiding/ChocolateChip.java
// Can't use package-access member from another package
import hiding.dessert.*;

public class ChocolateChip extends Cookie {
    public ChocolateChip( ) {
        System.out.println( "ChocolateChip constructor");
    }
    public void chomp( ) {
        //- bite(); // Can't access bite
    }
    public static void main( String[] args) {
        ChocolateChip x = new ChocolateChip( );
        x. chomp( );
    }
}
/* Output:
Cookie constructor
ChocolateChip constructor
*/
```
Ifa method bite( ) exists in class Cookie , it also exists in any class inherited from
Cookie . But bite( ) has package access andis inaforeignpackage so it’s unavailable
to us in this package. You can make it public , but then everyone has access, and
maybe that’s not what you want. Ifyou change the class Cookie as follows:

```java
// hiding/cookie2/Cookie.java
package hiding.cookie2;

public class Cookie {
    public Cookie( ) {
        System.out.println( "Cookie constructor");
    }
    protected void bite( ) {
        System.out.println( "bite");
    }
}
```
bite( ) becomes accessible to anyone inheriting from Cookie :
```java
// hiding/ChocolateChip2.java
import hiding.cookie2.*;

public class ChocolateChip2 extends Cookie {
    public ChocolateChip2( ) {
        System.out.println( "ChocolateChip2 constructor");
    }
    public void chomp( ) { bite( ); } // Protected method
    public static void main( String[] args) {
        ChocolateChip2 x = new ChocolateChip2( );
        x.chomp( );
    }
}
/* Output:
Cookie constructor
ChocolateChip2 constructor
bite
*/
```

Although bite( ) also has package access, it is not public .

### Package Access vs. Public Constructors
When you define a class with package access, you can give it a public constructor
without any complaints from the compiler:

```java
// hiding/packageaccess/PublicConstructor.java
package hiding.packageaccess;

class PublicConstructor {
    public PublicConstructor( ) {}
}
```
A tool like Checkstyle, which you can run with the command gradlew hiding: 
checkstyleMain , points out that this is false advertising, and technically an
error. You can’t actually access this so-called public constructor from outside the
package:
```java
// hiding/CreatePackageAccessObject.java
// {Will NotCompile}
import hiding.packageaccess.*;

public class CreatePackageAccessObject {
    public static void main( String[] args) {
        new PublicConstructor( );
    }
}
```
If you compile this file by hand, you’ll get a compiler error message:
```sh
CreatePackageAccessObject. java: 6: error:
PublicConstructor is not public in hiding.packageaccess;
cannot be accessed from outside package
new PublicConstructor( );
^
1 error
```
Thus, declaring a constructor public inside a package-access class doesn’t actually
make it public , and it should probably be flagged with a compiler error at the point
of declaration.

##  🍀07.3 Interface and Implementation
Access control is often called implementation hiding. Wrapping data and methods
within classes in combination with implementation hiding is called encapsulation.⁷³
The result is a data type with characteristics and behaviors.
⁷³ However, people often refer to implementation hiding alone as encapsulation.

Access control puts boundaries within a data type for two important reasons. The first
is to establish what client programmers can and cannot use. You build your internal
mechanisms into the structure without worrying that the client programmers will
accidentally treat the internals as part ofthe interface they should be using.
This feeds directly into the second reason: to separate interface from implementation.
Ifthe structure is usedin aset ofprograms, but client programmers can’t do anything
but send messages to the public interface, you are free to change anything that’s
not public (e.g., package access, protected , or private ) without breaking client
code.

For clarity, you might prefer a style of creating classes that puts the public
members atthebeginning, followedbythe protected , package-access, and private
members. The advantage is that the user of the class can then read down from the
top and see first what’s important to them (the public members, because they can
be accessed outside the file), and stop reading when they encounter the non- public
members, which are part ofthe internal implementation:
```java
// hiding/OrganizedByAccess. java
public class OrganizedByAccess {
    public void pub1( ) { /* . . . */ }
    public void pub2( ) { /* . . . */ }
    public void pub3( ) { /* . . . */ }
    private void priv1( ) { /* . . . */ }
    private void priv2( ) { /* . . . */ }
    private void priv3( ) { /* . . . */ }
    private int i;
    // . . .
}
```
This makes it only partially easier to read, because the interface and implementation
are still mixed together. That is, you still see the source code—the implementation—
because it’s right there in the class. In addition, the comment documentation
supported by Javadoc lessens the importance of code readability by the client
programmer. Displaying the interface to the consumer of a class is really the job
ofthe class browser, a tool that shows all available classes and what you can do with
them (i.e., what members are available). In Java, the JDK documentation gives the
same effect as a class browser.

##  🍀07.4 Class Access
Access specifiers also determine which classes within a library are available to the
users ofthat library. Ifyou want a class to be available to a client programmer, you
use the public keyword on the entire class definition. This controls whether the
client programmer can even create an object ofthe class.

To control access for a class, the specifier must appear before the keyword class :

    public class Widget {

If the name ofyour library is hiding , any client programmer can access Widget by
saying:

    import hiding.Widget;
or

    import hiding.*;

There are additional constraints:
1. There can be only one public class per compilation unit (file). The idea is that
each compilation unit has a single public interface represented by that public
class. It can have as many supporting package-access classes as you want. More
than one public class inside a compilation unit produces a compile-time error
message.
2. The name of the public class must exactly match the name of the file
containing the compilation unit, including capitalization. So for Widget , the
name of the file must be Widget. java , not widget. java or WIDGET. java .
Again, you’ll get a compile-time error ifthey don’t agree.
3. It is possible, though not typical, for a compilation unit to lack a public class.
Here, you can name the file whatever you like (although naming it arbitrarily
is confusing to people reading and maintaining the code).

What if you’ve got a class inside hiding that you’re only using to accomplish
the tasks performed by Widget or some other public class in hiding ? You don’t
want to bother creating documentation for the client programmer, and you think
sometime later you might completely change things and rip out your class altogether,
substituting a different one. To give you this flexibility, ensure that no client
programmers become dependent on your particular implementation details hidden
inside hiding by leaving the public keyword offthe class, to give it package access.
When you create a package-access class, it still makes sense to make the fields of
the class private —you should always make fields as private as possible—but it’s
generally reasonable to give the methods the same access as the class (packageaccess).
A package-access class is usually used only within the package so you only make the
methods ofsuch a class public ifyou’re forced, and in those cases, the compiler will
tell you.

Note that a class cannot be private (that would make it inaccessible to anyone but
the class) or protected .⁷⁴ So you have only two choices for class access: package
access or public . To prevent access to that class, make all the constructors private ,
thereby prohibiting anyone but you, inside a static member of the class, from
creating an object ofthat class:
⁷⁴ Actually, an inner class can be private or protected, but that’s a special case.
These are introduced in the Inner Classes chapter.

```java
// hiding/Lunch. java
// Demonstrates class access specifiers. Make a class
// effectively private with private constructors:
class Soup1 {
    private Soup1( ) {}
    public static Soup1 makeSoup( ) { // [1]
        return new Soup1( );
    }
}
class Soup2 {
    private Soup2( ) {}
    private static Soup2 ps1 = new Soup2( ); // [2]
    public static Soup2 access( ) {
     return ps1;
    }
    public void f( ) {}
    }
// Only one public class allowed per fil e:
public class Lunch {
    void testPrivate( ) {
        // Can't do this! Private constructor:
        //- Soup1 soup = new Soup1 ();
    }
    void testStatic( ) {
        Soup1 soup = Soup1.makeSoup( );
    }
    void testSingleton( ) {
        Soup2.access( ).f( );
    }
}
```

You can create an object via a static method using [1]. You can also create a static
object and return a reference when the user requests it, as in [2].

Up to now, most of the methods return either void or a primitive type, so the
definition in [1] might look a little confusing at first. The word Soup1 before the
method name ( makeSoup ) tells what the method returns. So far, this has usually
been void , which means it returns nothing. But you can also return a reference to
an object, which happens here. This method returns a reference to an object ofclass
Soup1 .

The classes Soup1 and Soup2 show how to prevent direct creation of a class
by making all the constructors private . Remember that if you don’t explicitly
create at least one constructor, the zero-argument constructor (constructor with no
arguments) is created for you. By writing the zero-argument constructor, it won’t
be created automatically. By making it private , no one can create an object ofthat
class. But now how does anyone use this class? The preceding example shows two
options. In Soup1 , a static method is created that creates a new Soup1 and returns
a reference to it. This can be useful to perform extra operations on the Soup1 before
returning it, orto keep count of how many Soup1 objects to create (perhaps to restrict
their population).

Soup2 uses what’s called a design pattern. This particular pattern is called a Singleton,
because it allows only a single object to ever be created. The object ofclass Soup2 is
created as a static private member of Soup2 , so there’s one and only one, and
you can’t get at it except through the public method access( ) .


##  🍀07.5 New Feature: Modules
https://www.oracle.com/corporate/features/understanding-java-9-modules.html

##  🍀07.6 Summary
Boundaries are important in any relationship, respected by all parties involved. When
you create a library, you establish a relationship with the user of that library—the
client programmer—who is another programmer, but one using your library to build
an application or a bigger library.

Without rules, client programmers can do anything they want with all the members
of a class, even if you might prefer they don’t directly manipulate some of the
members. Everything’s naked to the world.

This chapter looked at how classes are built to form libraries: first, the way a group
ofclasses is packaged within a library, and second, the way the class controls access
to its members.

It is estimated that a C programming project begins to break down somewhere
between 50K and 100K lines of code because C has a single namespace, and names
begin to collide, causing extra management overhead. In Java, the package keyword,
the package naming scheme, andthe import keyword give you complete control over
names, so the issue ofname collision is easily avoided.

There are two reasons for controlling access to members. The first is to keep users’
hands offportions they shouldn’t touch. These pieces are necessary for the internal
operations ofthe class, but not part ofthe interface that the client programmer needs.
So making methods and fields private is a service to client programmers, because
they can easily see what’s important to them and what they can ignore. It simplifies
their understanding ofthe class.

The second and most important reason for access control is to allow the library
designer to change the internal workings of the class without worrying it will
affect the client programmer. You might, for example, build a class one way at
first, then discover that restructuring your code will provide much greater speed.
If the interface and implementation are clearly separated and protected, you can
accomplish this without forcing client programmers to rewrite their code. Access
control ensures that no client programmer becomes dependent on any part of the
underlying implementation ofa class.

When you have the ability to change the underlying implementation, you not only
have the freedom to improve your design, you also have the freedom to make mis

# 📜08. Reuse

##  🍀08.01 Composition Syntax

##  🍀08.02 Inheritance Syntax

##  🍀08.03 Delegation

##  🍀08.04 Combining Composition and Inheritance

##  🍀08.05 Choosing Composition vs. Inheritance

##  🍀08.06 protected

##  🍀08.07 Upcasting

##  🍀08.08 The final Keyword

##  🍀08.09 Initialization and Class Loading

##  🍀08.10 Summary

# 📜09. Polymorphism

##  🍀09.01 Upcasting Revisited

##  🍀09.02 The Twist

##  🍀09.03 Constructors and Polymorphism

##  🍀09.04 Covariant Return Types

##  🍀09.05 Designing with Inheritance

##  🍀09.06 Summary

# 📜10. Interfaces

##  🍀10.01 Abstract Classes and Methods

##  🍀10.02 Defining Interfaces

##  🍀10.03 Abstract Classes vs. Interfaces

##  🍀10.04 Complete Decoupling

##  🍀10.05 Combining Multiple Interfaces

##  🍀10.06 Extending an Interface with Inheritance

##  🍀10.07 Adapting to an Interface

##  🍀10.08 Fields in Interfaces

##  🍀10.09 Nesting Interfaces

##  🍀10.10 Interfaces and Factories

##  🍀10.11 New Feature: private Methods in Interfaces

##  🍀10.12 New Feature: Sealed Classes and Interfaces

##  🍀10.13 Summary

# 📜11. Inner Classes

##  🍀11.01 Creating Inner Classes

##  🍀11.02 The Link to the Outer Class

##  🍀11.03 Using .this and .new

##  🍀11.04 Inner Classes and Upcasting

##  🍀11.05 Inner Classes in Methods and Scopes

##  🍀11.06 Anonymous Inner Classes

##  🍀11.07 Nested Classes

##  🍀11.08 Why Inner Classes?

##  🍀11.09 Inheriting from Inner Classes

##  🍀11.10 Can Inner Classes Be Overridden?

##  🍀11.11 Local Inner Classes

##  🍀11.12 Inner-Class Identifiers

##  🍀11.13 Summary

# 📜12. Collections

##  🍀12.01 Generics and Type-Safe Collections

##  🍀12.02 Basic Concepts

##  🍀12.03 Adding Groups of Elements

##  🍀12.04 Printing Collections

##  🍀12.05 List

##  🍀12.06 Iterators

##  🍀12.07 LinkedList

##  🍀12.08 Stack

##  🍀12.09 Set

##  🍀12.10 Map

##  🍀12.11 New Feature: Records

##  🍀12.12 Queue

##  🍀12.13 Collection vs. Iterator

##  🍀12.14 for-in and Iterators

##  🍀12.15 Summary

# 📜13. Functional Programming

##  🍀13.01 Old vs. New

##  🍀13.02 Lambda Expressions

##  🍀13.03 Method References

##  🍀13.04 Functional Interfaces

##  🍀13.05 Higher-Order Functions

##  🍀13.06 Closures

##  🍀13.07 Function Composition

##  🍀13.08 Currying and Partial Evaluation

##  🍀13.09 Pure Functional Programming

##  🍀13.10 Summary

# 📜14. Streams

##  🍀14.01 Java 8 Stream Support

##  🍀14.02 Stream Creation

##  🍀14.03 Intermediate Operations

##  🍀14.04 Optional

##  🍀14.05 Terminal Operations

##  🍀14.06 Summary

# 📜15. Exceptions

##  🍀15.01 Concepts

##  🍀15.02 Basic Exceptions

##  🍀15.03 Catching an Exception

##  🍀15.04 Creating Your Own Exceptions

##  🍀15.05 The Exception Specification

##  🍀15.06 Catching Any Exception

##  🍀15.07 Standard Java Exceptions

##  🍀15.08 New Feature: Better NullPointerException Reporting

##  🍀15.09 Performing Cleanup with finally

##  🍀15.10 Exception Restrictions

##  🍀15.11 Constructors

##  🍀15.12 Try-With-Resources

##  🍀15.13 Exception Matching

##  🍀15.14 Alternative Approaches

##  🍀15.15 Exception Guidelines

##  🍀15.16 Summary

# 📜16. Validating Your Code

##  🍀16.01 Testing

##  🍀16.02 Preconditions

##  🍀16.03 Test-Driven Development

##  🍀16.04 Logging

##  🍀16.05 Debugging

##  🍀16.06 Benchmarking

##  🍀16.07 Profiling and Optimizing

##  🍀16.08 Style Checking

##  🍀16.09 Static Error Analysis

##  🍀16.10 Code Reviews

##  🍀16.11 Pair Programming

##  🍀16.12 Refactoring

##  🍀16.13 Continuous Integration

##  🍀16.14 Summary

# 📜17. Files

##  🍀17.01 File and Directory Paths

##  🍀17.02 Directories

##  🍀17.03 File Systems

##  🍀17.04 Watching a Path

##  🍀17.05 Finding Files

##  🍀17.06 Reading & Writing Files

##  🍀17.07 Summary

# 📜18. Strings

##  🍀18.01 Immutable Strings

##  🍀18.02 Overloading + vs. StringBuilder

##  🍀18.03 Unintended Recursion

##  🍀18.04 Operations on Strings

##  🍀18.05 Formatting Output

##  🍀18.06 New Feature: Text Blocks

##  🍀18.07 Regular Expressions

##  🍀18.08 Scanning Input

##  🍀18.09 StringTokenizer

##  🍀18.10 Summary

# 📜19. Reflection

##  🍀19.01 The Need for Reflection

##  🍀19.02 The Class Object

##  🍀19.03 Checking Before a Cast

##  🍀19.04 Registered Factories

##  🍀19.05 Instanceof vs. Class Equivalence

##  🍀19.06 Runtime Class Information

##  🍀19.07 Dynamic Proxies

##  🍀19.08 Using Optional

##  🍀19.09 Interfaces and Type Information

##  🍀19.10 Summary

# 📜20. Generics

##  🍀20.01 Comparison with C++

##  🍀20.02 Simple Generics

##  🍀20.03 Generic Interfaces

##  🍀20.04 Generic Methods

##  🍀20.05 Building Complex Models

##  🍀20.06 The Mystery of Erasure

##  🍀20.07 Compensating for Erasure

##  🍀20.08 Bounds

##  🍀20.09 Wildcards

##  🍀20.10 Issues

##  🍀20.11 Self-Bounded Types

##  🍀20.12 Dynamic Type Safety

##  🍀20.13 Exceptions

##  🍀20.14 Mixins

##  🍀20.15 Latent Typing

##  🍀20.16 Compensating for the Lack of (Direct) Latent Typing

##  🍀20.17 Assisted Latent Typing in Java 8

##  🍀20.18 Summary: Is Casting Really So Bad?

# 📜21. Arrays

##  🍀21.01 Why Arrays are Special

##  🍀21.02 Arrays are First-Class Objects

##  🍀21.03 Returning an Array

##  🍀21.04 Multidimensional Arrays

##  🍀21.05 Arrays and Generics

##  🍀21.06 Arrays.fill()

##  🍀21.07 Arrays.setAll()

##  🍀21.08 Incremental Generators

##  🍀21.09 Random Generators

##  🍀21.10 Generics and Primitive Arrays

##  🍀21.11 Modifying Existing Array Elements

##  🍀21.12 An Aside On Parallelism

##  🍀21.13 Arrays Utilities

##  🍀21.14 Copying an Array

##  🍀21.15 Comparing Arrays

##  🍀21.16 Streams and Arrays

##  🍀21.17 Sorting Arrays

##  🍀21.18 Searching with Arrays.binarySearch()

##  🍀21.19 Accumulating with parallelPrefix()

##  🍀21.20 Summary

# 📜22. Enumerations

##  🍀22.01 Basic enum Features

##  🍀22.02 Adding Methods to an enum

##  🍀22.03 enums in switch Statements

##  🍀22.04 The Mystery of values()

##  🍀22.05 Implements, not Inherits

##  🍀22.06 Random Selection

##  🍀22.07 Using Interfaces for Organization

##  🍀22.08 Using EnumSet Instead of Flags

##  🍀22.09 Using EnumMap

##  🍀22.10 Constant-Specific Methods

##  🍀22.11 Multiple Dispatching

##  🍀22.12 New Features to Support Pattern Matching

##  🍀22.13 New Feature: Arrow in switch

##  🍀22.14 New Feature: case null in switch

##  🍀22.15 New Feature: switch as an Expression

##  🍀22.16 New Feature: Smart Casts

##  🍀22.17 New Feature: Pattern Matching

##  🍀22.18 Summary

# 📜23. Annotations

##  🍀23.01 Basic Syntax

##  🍀23.02 Writing Annotation Processors

##  🍀23.03 Using javac to Process Annotations

##  🍀23.04 Annotation-Based Unit Testing

##  🍀23.05 Summary

# 📜24. Concurrent Programming

##  🍀24.01 The Terminology Problem

##  🍀24.02 Concurrency Superpowers

##  🍀24.03 Concurrency is for Speed

##  🍀24.04 The Four Maxims of Java Concurrency

##  🍀24.05 The Brutal Truth

##  🍀24.06 The Rest of the Chapter

##  🍀24.07 Parallel Streams

##  🍀24.08 Creating and Running Tasks

##  🍀24.09 Terminating Long-Running Tasks

##  🍀24.10 CompletableFutures

##  🍀24.11 Deadlock

##  🍀24.12 Constructors are not Thread-Safe

##  🍀24.13 Effort, Complexity, Cost

##  🍀24.14 Summary

# 📜25. Patterns

##  🍀25.01 The Pattern Concept

##  🍀25.02 Singleton

##  🍀25.03 Classifying Patterns

##  🍀25.04 Template Method

##  🍀25.05 Fronting for an Implementation

##  🍀25.06 Factories: Encapsulating Object Creation

##  🍀25.07 Function Objects

##  🍀25.08 Changing the Interface

##  🍀25.09 Interpreter: Runtime Flexibility

##  🍀25.10 Callbacks

##  🍀25.11 Multiple Dispatching

##  🍀25.12 Pattern Refactoring

##  🍀25.13 Summary

# 📜Appendix: Supplements

##  🍀A01 On Java 8 Example Code

##  🍀A02 Hands-On Java eSeminar

##  🍀A03 Appendix: Programming Guidelines

##  🍀A04 Design

##  🍀A05 Implementation

##  🍀A06 Appendix: Javadoc

##  🍀A07 Syntax

##  🍀A08 Embedded HTML

##  🍀A09 Some Example Tags

##  🍀A10 Documentation Example

##  🍀A11 Appendix: Passing and Returning Objects

##  🍀A12 Passing References

##  🍀A13 Making Local Copies

##  🍀A14 Controlling Cloneability

##  🍀A15 Immutable Classes

##  🍀A16 Summary

# 📜Appendix: I/O Streams

##  🍀B01 Types of InputStream

##  🍀B02 Types of OutputStream

##  🍀B03 Adding Attributes and Useful Interfaces

##  🍀B04 Readers & Writers

##  🍀B05 Off By Itself: RandomAccessFile

##  🍀B06 Typical Uses of I/O Streams

##  🍀B07 Summary

# 📜Appendix: Standard I/O

##  🍀C01 Reading from Standard Input

##  🍀C02 Changing System.out to a PrintWriter

##  🍀C03 Redirecting Standard I/O

##  🍀C04 Process Control

##  🍀C05 Appendix: New I/O

##  🍀C06 ByteBuffers

##  🍀C07 Converting Data

##  🍀C08 Fetching Primitives

##  🍀C09 View Buffers

##  🍀C10 Data Manipulation with Buffers

##  🍀C11 Memory-Mapped Files

##  🍀C12 File Locking

# 📜Appendix: Understanding equals() and hashCode()

##  🍀D01 A Canonical equals()

##  🍀D02 Hashing and Hash Codes

##  🍀D03 Tuning a HashMap

##  🍀D04 Appendix: Collection Topics

##  🍀D05 Sample Data

##  🍀D06 List Behavior

##  🍀D07 Set Behavior

##  🍀D08 Using Functional Operations with any Map

##  🍀D09 Selecting Parts of a Map

##  🍀D10 Filling Collections

##  🍀D11 Custom Collection and Map using Flyweight

##  🍀D12 Collection Functionality

##  🍀D13 Optional Operations

##  🍀D14 Sets and Storage Order

##  🍀D15 Queues

##  🍀D16 Understanding Maps

##  🍀D17 Utilities

##  🍀D18 Holding References

##  🍀D19 Java 1.0/1.1 Collections

##  🍀D20 Summary

# 📜Appendix: Low-Level Concurrency

##  🍀E01 What is a Thread?

##  🍀E02 Catching Exceptions

##  🍀E03 Sharing Resources

##  🍀E04 The volatile Keyword

##  🍀E05 Atomicity

##  🍀E06 Critical Sections

##  🍀E07 Library Components

##  🍀E08 Summary

# 📜Appendix: Data Compression

##  🍀F01 Simple Compression with GZIP

##  🍀F02 Multifile Storage with Zip

##  🍀F03 Java Archives (Jars)

# 📜Appendix: Object Serialization

##  🍀G01 Overview

##  🍀G02 Finding the Class

##  🍀G03 Controlling Serialization

##  🍀G04 Using Persistence

##  🍀G05 Appendix: Benefits and Costs of Static Type Checking

##  🍀G06 Foreword to the 2021 Edition

##  🍀G07 Foreword to the Original Edition

##  🍀G08 Static Type Checking vs. Testing

##  🍀G09 How to Argue about Typing

##  🍀G10 The Cost of Productivity

##  🍀G11 Static vs. Dynamic

# 📜Appendix: The Positive Legacy of C++ and Java

# 📜Appendix: Becoming a Programmer

##  🍀I01 How I Got Started in Programming

##  🍀I02 A Career in Computing

##  🍀I03 The Mythical 5%

##  🍀I04 Writing Software Is Like … Writing

##  🍀I05 Programming as Typing

##  🍀I06 Do What You Love

# 📜Notes


