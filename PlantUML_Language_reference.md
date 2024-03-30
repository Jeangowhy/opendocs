/PlantUML Language Reference Guide
==================================

                        PlantUML Language Reference Guide

                            Drawing UML with PlantUML

                              (Version 1.2023.11)


PlantUML is a component that allows to quickly write :

1. • Sequence diagram
2. • Usecase diagram
3. • Class diagram
4. • Object diagram
5. • Activity diagram
6. • Component diagram
7. • Deployment diagram
8. • State diagram
9. • Timing diagram

The following non-UML diagrams are also supported:

• JSON Data
• YAML Data
• Network diagram (nwdiag)
• Wireframe graphical interface
• Archimate diagram
• Specification and Description Language (SDL)
• Ditaa diagram
• Gantt diagram
• MindMap diagram
• Work Breakdown Structure diagram
• Mathematic with AsciiMath or JLaTeXMath notation
• Entity Relationship diagram

Diagrams are defined using a simple and intuitive language.

PlantUML Language Reference Guide (1.2023.11) 1 / 550


/1 Sequence Diagram
===================

Creating sequence diagrams with PlantUML is remarkably straightforward. This ease of use is largely
attributed to the user-friendly nature of its syntax, designed to be both intuitive and easy to remember.

• **Intuitive Syntax**:
    First and foremost, users appreciate the straightforward and intuitive syntax that PlantUML employs.
    This well-thought-out design means that even those new to diagram creation find it easy to grasp the
    basics quickly and without hassle.

• **Text-to-Graphic Correlation**:
    Another distinguishing feature is the close resemblance between the textual representation and the 
    graphical output. This harmonious correlation ensures that the textual drafts translate quite accurately into
    graphical diagrams, providing a cohesive and predictable design experience without unpleasant surprises
    in the final output.

• **Efficient Crafting Process**:
    The strong correlation between the text and the graphical result not only simplifies the crafting process
    but also significantly speeds it up. Users benefit from a more streamlined process with fewer requirements
    for time-consuming revisions and adjustments.

• **Visualization While Drafting**:
    The ability to envisage the final graphical outcome while drafting the text is a feature that many find
    invaluable. It naturally fosters a smooth transition from initial draft to final presentation, enhancing
    productivity and reducing the likelihood of errors.

• **Easy Edits and Revisions**:
    Importantly, editing existing diagrams is a hassle-free process. Since the diagrams are generated from
    text, users find that making adjustments is considerably easier and more precise than altering an image
    using graphical tools. It boils down to simply modifying the text, a process far more straightforward and
    less prone to errors than making changes through a graphical interface with a mouse.

    PlantUML facilitates a straightforward and user-friendly approach to creating and editing sequence
    diagrams, meeting the needs of both novices and seasoned designers alike. It skillfully leverages
    the simplicity of textual inputs to craft visually descriptive and accurate diagrams, thereby
    establishing itself as a must have tool in the diagram creation toolkit.

    You can learn more about some of the common commands in PlantUML to enhance your diagram creation experience.

/Clipboard and PlantUML ASCII Graph
------------------------------------

Windows 提供 clip 命令行工具用于将输入、输出重定向到剪贴板或粘贴（重定向 stdout）到其他程序中。
PowerShell 提供了粘贴板内容读取命令，Bash 脚本中可以这样调用 `pwsh -c 'Get-Clipboard'`：

```sh
# clip < put_file_to_clipboard.txt
echo "put string to clipboard" | clip
echo $(pwsh -c 'Get-Clipboard')
sleep 3
```

通过以下脚本调用 PlantUML 绘图工具，就可以拷贝以下 UML 定义转绘成 ASCII Graph 图表：

```sh
# clip < put_file_to_clipboard.txt
# echo "put string to clipboard" | clip
cat <<< "$(pwsh -c 'Get-Clipboard')"
plantuml='C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar'
cat | java -jar "$plantuml" -txt -pipe <<<"$(pwsh -c 'Get-Clipboard')"
sleep 3
```

另外，可以使用 Sublime Text，配置 Build System 设置，直接通过快捷键转换粘贴板上的 UML。
以下 PlantUML_Snippet.sublime-build 配置仅供参考。获取环境变量根据操作系统不同，这里因为在
Windows 系统上执行，使用 `%PLANTUML%` 获取环境变量。如果是 Linux 就应该使用 `$PLANTUML`。


```json
{
    "working_dir": "$file_path",
       "encoding":"UTF8",
      "selector" : "text.html.markdown",
      "word_wrap": false,
            "env": {
                "PLANTUML": "C:/jdk-14.0.2/jars/plantuml.1.2018.1.jar",
                "PLANTUML": "C:/jdk-14.0.2/jars/plantuml-1.2024.3.jar",
                "PLANTUML": "C:/jdk-14.0.2/jars/plantuml-lgpl-1.2024.3.jar",
                "TMPPNG": "/c/dl/tmp.png",
                "TMPUML": "/c/dl/tmp.uml",
            },
        "windows": { },
       "variants": [
            {
                "name": "Test PlantUML and Clipboard",
               "shell_cmd": "bash -c \"ls -l '%PLANTUML%'; echo $(pwsh -c 'Get-Clipboard')\"",
            },
            {
               "name": "PlantUML to ASCII",
               "shell_cmd": "bash -c \"echo cat | java -jar '%PLANTUML%' -txt -pipe <<<$(pwsh -c 'Get-Clipboard')\""
            },
            {
               "name": "PlantUML to ASCII [Unicode]",
               "shell_cmd": "bash -c \"echo cat | java -jar '%PLANTUML%' -tutxt -pipe <<<$(pwsh -c 'Get-Clipboard')\""
            },
            {
               "name": "PlantUML to ASCII [UniCOPY]",
               "shell_cmd": "bash -c \"echo cat | java -jar '%PLANTUML%' -tutxt -pipe > %TMPUML% <<<$(pwsh -c 'CHCP 65001; Get-Clipboard') && clip < %TMPUML%\""
            },
            {
               "name": "PlantUML to PNG",
               "shell_cmd": "bash -c \"echo cat | java -jar '%PLANTUML%' -png -pipe > %TMPPNG% <<<$(pwsh -c 'Get-Clipboard') && start %TMPPNG%\""
            },
       ]
}
```

注意，定义环境变量时不要与 PlantUML 本身需要使用的变量名称冲突， 例如 TMP 就用于指定缓存文件路径。
还有 filename 环境变量用于指定输入的 UML 文件，也可以使用 -filename 选项指定文件。
如果使用 Unicode （-tutxt） 输出，则脚本运行环境的编码方案应该改为 UTF8，GBK 就会导致乱码。
Unicode 编码方案可使用的字符更多，看起来也更美观，例如以下是 Basic Example 效果对比：

     ┌─────┐                           ┌───┐
     │Alice│                           │Bob│
     └──┬──┘                           └─┬─┘
        │    Authentication Request      │
        │───────────────────────────────>│
        │                                │
        │    Authentication Response     │
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│
        │                                │
        │Another authentication Request  │
        │───────────────────────────────>│
        │                                │
        │Another authentication Response │
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│
     ┌──┴──┐                           ┌─┴─┐
     │Alice│                           │Bob│
     └─────┘                           └───┘

Bash 脚本编程参考 [Bash 5.1 Manual](./bash.5.1.md)


//1.1 Basic Examples
--------------------
In PlantUML sequence diagrams, the -> sequence denotes a message sent between two participants, which
are automatically recognized and do not need to be declared beforehand.

Utilize dotted arrows by employing the --> sequence, offering a distinct visualization in your diagrams.
To improve readability without affecting the visual representation, use reverse arrows like <- or <--.
However, be aware that this is specifically for sequence diagrams and the rules differ for other diagram
types.

```uml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```

     ,-----.                           ,---.
     |Alice|                           |Bob|
     `--+--'                           `-+-'
        |    Authentication Request      |
        |------------------------------->|
        |                                |
        |    Authentication Response     |
        |<- - - - - - - - - - - - - - - -|
        |                                |
        |Another authentication Request  |
        |------------------------------->|
        |                                |
        |Another authentication Response |
        |<- - - - - - - - - - - - - - - -|
     ,--+--.                           ,-+-.
     |Alice|                           |Bob|
     `-----'                           `---'


<!-- Page 1 / 550 -->

//1.2 Declaring participant
---------------------------

If the keyword participant is used to declare a participant, more control on that
participant is possible. The order of declaration will be the (default) order of display.

Using these other keywords to declare participants will change the shape of the
participant representation:

*  • actor
*  • boundary
*  • control
*  • entity
*  • database
*  • collections
*  • queue

```uml
@startuml
participant Participant as Foo
actor Actor as Foo1
boundary Boundary as Foo2
control Control as Foo3
entity Entity as Foo4
database Database as Foo5
collections Collections as Foo6
queue Queue as Foo7
Foo -> Foo1 : To actor
Foo -> Foo2 : To boundary
Foo -> Foo3 : To control
Foo -> Foo4 : To entity
Foo -> Foo5 : To database
Foo -> Foo6 : To collections
Foo -> Foo7: To queue
@enduml
```
                              ┌─┐                                                                       ,.-^^-._
                              ║"│                                                                      |-.____.-|
                              └┬┘                                                                      |        |
                              ┌┼┐              |   ,-.                                                 |        |
     ┌───────────┐             │               +--{   )          ┌───────┐          ┌──────┐           |        |         ┌───────────┐          ┌─────┐
     │Participant│            ┌┴┐              |   `-'           │Control│          │Entity│           '-.____.-'         │Collections│          │Queue│
     └─────┬─────┘           Actor            Boundary           └───────┘          └──────┘           Database           └───────────┘          └─────┘
           │     To actor      │                 │                   │                 │                  │                     │                   │
           │──────────────────>│                 │                   │                 │                  │                     │                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │            To boundary              │                   │                 │                  │                     │                   │
           │────────────────────────────────────>│                   │                 │                  │                     │                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │                   │   To control    │                   │                 │                  │                     │                   │
           │────────────────────────────────────────────────────────>│                 │                  │                     │                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │                   │            To entity                │                 │                  │                     │                   │
           │──────────────────────────────────────────────────────────────────────────>│                  │                     │                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │                   │                 │   To database     │                 │                  │                     │                   │
           │─────────────────────────────────────────────────────────────────────────────────────────────>│                     │                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │                   │                 │            To collections           │                  │                     │                   │
           │───────────────────────────────────────────────────────────────────────────────────────────────────────────────────>│                   │
           │                   │                 │                   │                 │                  │                     │                   │
           │                   │                 │                   │     To queue    │                  │                     │                   │
           │───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────>│
     ┌─────┴─────┐           Actor            Boundary           ┌───────┐          ┌──────┐           Database           ┌───────────┐          ┌─────┐
     │Participant│            ┌─┐              |   ,-.           │Control│          │Entity│            ,.-^^-._          │Collections│          │Queue│
     └───────────┘            ║"│              +--{   )          └───────┘          └──────┘           |-.____.-|         └───────────┘          └─────┘
                              └┬┘              |   `-'                                                 |        |
                              ┌┼┐                                                                      |        |
                               │                                                                       |        |
                              ┌┴┐                                                                      '-.____.-'

<!-- Page 2 / 550 -->

Rename a participant using the as keyword.
You can also change the background color of actor or participant.

```uml
@startuml
actor Bob #red
' The only difference between actor
'and participant is the drawing
participant Alice
participant "I have a really\nlong name" as L #99FF99
/' You can also declare:
participant L as "I have a really\nlong name" #99FF99
'/
Alice->Bob: Authentication Request
Bob->Alice: Authentication Response
Bob->L: Log transaction
@enduml
```

      ,-.
      `-'
      /|\                                     ,---------------.
       |                     ,-----.          |I have a really|
      / \                    |Alice|          |long name      |
      Bob                    `--+--'          `-------+-------'
       |Authentication Request  |                     |
       |<-----------------------|                     |
       |                        |                     |
       |Authentication Response |                     |
       |----------------------->|                     |
       |                        |                     |
       |               Log transaction                |
       |--------------------------------------------->|
      Bob                    ,--+--.          ,-------+-------.
      ,-.                    |Alice|          |I have a really|
      `-'                    `-----'          |long name      |
      /|\                                     `---------------'
       |
      / \

You can use the order keyword to customize the display order of participants.
<!-- Page 3 / 550 -->

//1.3 Declaring participant on multiline
--------------------------------------------------------

```uml
@startuml
participant Last order 30
participant Middle order 20
participant First order 10
@enduml
```
     ,-----.          ,------.          ,----.
     |First|          |Middle|          |Last|
     ,--+--.          ,--+---.          ,-+--.
     |First|          |Middle|          |Last|
     `-----'          `------'          `----'

You can declare participant on multi-line.

```uml
@startuml
participant Participant [
	=Title
	----
	""SubTitle""
]
participant Bob
Participant -> Bob
@enduml
```

     ,------------.
     |=TITLE      |
     |----        |          ,---.          ,-----------.
     |""SubTitle""|          |Bob|          |Participant|
     `-----+------'          `-+-'          `-----+-----'
           |                   |                  |
           |                   |<-----------------|
     ,-----+------.          ,-+-.          ,-----+-----.
     |=TITLE      |          |Bob|          |Participant|
     |----        |          `---'          `-----------'
     |""SubTitle""|
     `------------'

[Ref. QA-15232]


//1.4 Use non-letters in participants
-------------------------------------
You can use quotes to define participants. And you can use the as keyword to give an alias to those
participants.

```uml
@startuml
Alice -> "Bob()" : Hello
"Bob()" -> "This is very\nlong" as Long
' You can also declare:
' "Bob()" -> Long as "This is very\nlong"
Long --> "Bob()" : ok
@enduml
```
                                       ,------------.
     ,-----.          ,-----.          |This is very|
     |Alice|          |Bob()|          |long        |
     `--+--'          `--+--'          `-----+------'
        |     Hello      |                   |
        |--------------->|                   |
        |                |                   |
        |                |                   |
        |                |------------------>|
        |                |                   |
        |                |        ok         |
        |                |<- - - - - - - - - |
     ,--+--.          ,--+--.          ,-----+------.
     |Alice|          |Bob()|          |This is very|
     `-----'          `-----'          |long        |
                                       `------------'
<!-- Page 4 / 550 -->

//1.5 Message to Self
----------------------------------------
A participant can send a message to itself.
It is also possible to have multi-line using .

```uml
@startuml
Alice -> Alice: This is a signal to self.\nIt also demonstrates\nmultiline \ntext
@enduml
```
                            ┌─────┐
                            │Alice│
                            └──┬──┘
                               │────┐
                               │    │ This is a signal to self.
                               │<───┘ It also demonstrates
                               │      multiline
                               │      text
                               │
                            ┌──┴──┐
                            │Alice│
                            └─────┘

```uml
@startuml
Alice <- Alice: This is a signal to self.\nIt also demonstrates\nmultiline \ntext
@enduml
```
                           ┌─────┐
                           │Alice│
                           └──┬──┘
                              │────┐
                              │    │ This is a signal to self.
                              │<───┘ It also demonstrates
                              │      multiline
                              │      text
                              │
                           ┌──┴──┐
                           │Alice│
                           └─────┘

[Ref. QA-1361]

//1.6 Text alignment
--------------------
Text alignment on arrows can be set to left, right or center using skinparam sequenceMessageAlign.
You can also use direction or reverseDirection to align text depending on arrow direction. Further
details and examples of this are available on the skinparam page.

```uml
@startuml
skinparam sequenceMessageAlign right
Bob -> Alice : Request
Alice -> Bob : Response
@enduml
```
     ,---.          ,-----.
     |Bob|          |Alice|
     `-+-'          `--+--'
       |   Request     |
       |-------------->|
       |               |
       |   Response    |
       |<--------------|
     ,-+-.          ,--+--.
     |Bob|          |Alice|
     `---'          `-----'


//1.6.1 Text of response message below the arrow
------------------------------------------------
You can put the text of the response message below the arrow, with the skinparam responseMessageBelowArrow
true command.

<!-- Page 5 / 550 -->

```uml
@startuml
skinparam responseMessageBelowArrow true
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```
     ,---.          ,-----.
     |Bob|          |Alice|
     `-+-'          `--+--'
       |    hello      |
       |-------------->|
       |               |
       |      ok       |
       |<--------------|
     ,-+-.          ,--+--.
     |Bob|          |Alice|
     `---'          `-----'


//1.7 Change arrow style
------------------------

You can change arrow style by several ways:
• add a final x to denote a lost message

• use \ or / instead of < or > to have only the bottom or top part of the arrow

• repeat the arrow head (for example, >> or //) head to have a thin drawing

• use -- instead of - to have a dotted arrow

• add a final ”o” at arrow head

• use bidirectional arrow <->


```uml
@startuml
Bob ->x Alice
Bob -> Alice
Bob ->> Alice
Bob -\ Alice
Bob \\- Alice
Bob //-- Alice
Bob ->o Alice
Bob o\\-- Alice
Bob <-> Alice
Bob <->o Alice
@enduml
```


//1.8 Change arrow color
------------------------
You can change the color of individual arrows using the following notation:
<!-- Page 6 / 550 -->

```uml
@startuml
Bob -[#red]> Alice : hello
Alice -[#0000FF]->Bob : ok
@enduml
```
     ,---.          ,-----.
     |Bob|          |Alice|
     `-+-'          `--+--'
       |    hello      |
       |-------------->|
       |               |
       |      ok       |
       |<- - - - - - - |
     ,-+-.          ,--+--.
     |Bob|          |Alice|
     `---'          `-----'


//1.9 Message sequence numbering
--------------------------------

The keyword autonumber is used to automatically add an incrementing number to messages.

```uml
@startuml
autonumber
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response
@enduml
```
     ,---.                     ,-----.
     |Bob|                     |Alice|
     `-+-'                     `--+--'
       |1 Authentication Request  |
       |------------------------->|
       |                          |
       |2 Authentication Response |
       |<-------------------------|
     ,-+-.                     ,--+--.
     |Bob|                     |Alice|
     `---'                     `-----'

You can specify a startnumber with autonumber <start> , and also an increment with autonumber
<start> <increment>.

```uml
@startuml
autonumber
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response
autonumber 15
Bob -> Alice : Another authentication Request
Bob <- Alice : Another authentication Response
autonumber 40 10
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response
@enduml
```
     ,---.                                  ,-----.
     |Bob|                                  |Alice|
     `-+-'                                  `--+--'
       |       1 Authentication Request        |
       |-------------------------------------->|
       |                                       |
       |      2 Authentication Response        |
       |<--------------------------------------|
       |                                       |
       |  15 Another authentication Request    |
       |-------------------------------------->|
       |                                       |
       |  16 Another authentication Response   |
       |<--------------------------------------|
       |                                       |
       |40 Yet another authentication Request  |
       |-------------------------------------->|
       |                                       |
       |50 Yet another authentication Response |
       |<--------------------------------------|
     ,-+-.                                  ,--+--.
     |Bob|                                  |Alice|
     `---'                                  `-----'

You can specify a format for your number by using between double-quote.
The formatting is done with the Java class DecimalFormat
(0 means digit, # means digit and zero if absent).

You can use some html tag in the format.

```uml
@startuml
autonumber "<b>[000]"
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response
autonumber 15 "<b>(<u>##</u>)"
Bob -> Alice : Another authentication Request
Bob <- Alice : Another authentication Response
autonumber 40 10 "<font color=red><b>Message 0 "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response
@enduml
```

You can also use autonumber stop and autonumber resume <increment> <format> to respectively
pause and resume automatic numbering.

<!-- Page 8 / 550 -->

```uml
@startuml
autonumber 10 10 "<b>[000]"
Bob -> Alice : Authentication Request
Bob <- Alice : Authentication Response
autonumber stop
Bob -> Alice : dummy
autonumber resume "<font color=red><b>Message 0 "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response
autonumber stop
Bob -> Alice : dummy
autonumber resume 1 "<font color=blue><b>Message 0 "
Bob -> Alice : Yet another authentication Request
Bob <- Alice : Yet another authentication Response
@enduml
```
     ,---.                                           ,-----.
     |Bob|                                           |Alice|
     `-+-'                                           `--+--'
       |         [010] Authentication Request           |
       |----------------------------------------------->|
       |                                                |
       |         [020] Authentication Response          |
       |<-----------------------------------------------|
       |                                                |
       |                     dummy                      |
       |----------------------------------------------->|
       |                                                |
       |Message 30  Yet another authentication Request  |
       |----------------------------------------------->|
       |                                                |
       |Message 40  Yet another authentication Response |
       |<-----------------------------------------------|
       |                                                |
       |                     dummy                      |
       |----------------------------------------------->|
       |                                                |
       |Message 50  Yet another authentication Request  |
       |----------------------------------------------->|
       |                                                |
       |Message 51  Yet another authentication Response |
       |<-----------------------------------------------|
     ,-+-.                                           ,--+--.
     |Bob|                                           |Alice|
     `---'                                           `-----'

Your startnumber can also be a 2 or 3 digit sequence using a field delimiter
such as ., ;, ,, : or a mix of these. For example: 1.1.1 or 1.1:1.

Automatically the last digit will increment.

To increment the first digit, use: autonumber inc A. To increment the second digit,
use: autonumber inc B.

```uml
@startuml
autonumber 1.1.1
Alice -> Bob: Authentication request
Bob --> Alice: Response
autonumber inc A
'Now we have 2.1.1
Alice -> Bob: Another authentication request
Bob --> Alice: Response
autonumber inc B
'Now we have 2.2.1
Alice -> Bob: Another authentication request
Bob --> Alice: Response
autonumber inc A
'Now we have 3.1.1
Alice -> Bob: Another authentication request
autonumber inc B
'Now we have 3.2.1
Bob --> Alice: Response
@enduml
```
     ,-----.                                ,---.
     |Alice|                                |Bob|
     `--+--'                                `-+-'
        |    1.1.1 Authentication request     |
        |------------------------------------>|
        |                                     |
        |           1.1.2 Response            |
        |<- - - - - - - - - - - - - - - - - - |
        |                                     |
        |2.1.1 Another authentication request |
        |------------------------------------>|
        |                                     |
        |           2.1.2 Response            |
        |<- - - - - - - - - - - - - - - - - - |
        |                                     |
        |2.2.1 Another authentication request |
        |------------------------------------>|
        |                                     |
        |           2.2.2 Response            |
        |<- - - - - - - - - - - - - - - - - - |
        |                                     |
        |3.1.1 Another authentication request |
        |------------------------------------>|
        |                                     |
        |           3.2.1 Response            |
        |<- - - - - - - - - - - - - - - - - - |
     ,--+--.                                ,-+-.
     |Alice|                                |Bob|
     `-----'                                `---'

<!-- Page 9 / 550 -->

You can also use the value of autonumber with the %autonumber% variable:

```uml
@startuml
autonumber 10
Alice -> Bob
note right
the <U+0025>autonumber<U+0025> works everywhere.
Here, its value is ** %autonumber% **
end note
Bob --> Alice: //This is the response %autonumber%//
@enduml
```
     ,-----.                          ,---.
     |Alice|                          |Bob|
     `--+--'                          `-+-'
        |             10                | ,------------------------------------------------!.
        |------------------------------>| |the <U+0025>autonumber<U+0025> works everywhere.|_\
        |                               | |Here, its value is ** 10 **                       |
        |                               | `--------------------------------------------------'
        |11 //This is the response 11// |
        |<- - - - - - - - - - - - - - - |
     ,--+--.                          ,-+-.
     |Alice|                          |Bob|
     `-----'                          `---'

[Ref. QA-7119]

//1.10 Page Title, Header and Footer
------------------------------------
The title keyword is used to add a title to the page.
Pages can display headers and footers using header and footer.

```uml
@startuml
header Page Header
footer Page %page% of %lastpage%
title Example Title
Alice -> Bob : message 1
Alice -> Bob : message 2
@enduml
```
         Example Title

     ,-----.          ,---.
     |Alice|          |Bob|
     `--+--'          `-+-'
        |  message 1    |
        |-------------->|
        |               |
        |  message 2    |
        |-------------->|
     ,--+--.          ,-+-.
     |Alice|          |Bob|
     `-----'          `---'

<!-- Page 10 / 550 -->

//1.11 Splitting diagrams
-------------------------

The newpage keyword is used to split a diagram into several images.
You can put a title for the new page just after the newpage keyword. This title overrides the previously
specified title if any.
This is very handy with Word to print long diagram on several pages.
(Note: this really does work. Only the first page is shown below, but it is a display artifact.)

```uml
@startuml
Alice -> Bob : message 1
Alice -> Bob : message 2
newpage
Alice -> Bob : message 3
Alice -> Bob : message 4
newpage A title for the\nlast page
Alice -> Bob : message 5
Alice -> Bob : message 6
@enduml
```
         ,-----.          ,---.
         |Alice|          |Bob|
         `--+--'          `-+-'
            |  message 1    |
            |-------------->|
            |               |
            |  message 2    |
            |-------------->|
            |               |
    ================================
            |               |
            |  message 3    |
            |-------------->|
            |               |
            |  message 4    |
            |-------------->|
            |               |
    ================================
            |               |
            |  message 5    |
            |-------------->|
            |               |
            |  message 6    |
            |-------------->|
         ,--+--.          ,-+-.
         |Alice|          |Bob|
         `-----'          `---'



//1.12 Grouping message
-----------------------
It is possible to group messages together using the following keywords:

*  • alt/else
*  • opt
*  • loop
*  • par
*  • break
*  • critical
*  • group, followed by a text to be displayed

<!-- Page 11 / 550 -->
It is possible to add a text that will be displayed into the header
(for group, see next paragraph ’Secondary group label’).

The end keyword is used to close the group.
Note that it is possible to nest groups.

```uml
@startuml
Alice -> Bob: Authentication Request
alt successful case
	Bob -> Alice: Authentication Accepted
else some kind of failure
	Bob -> Alice: Authentication Failure
	group My own label
		Alice -> Log : Log attack start
		loop 1000 times
		Alice -> Bob: DNS Attack
	end
	Alice -> Log : Log attack end
end
else Another type of failure
	Bob -> Alice: Please repeat
end
@enduml
```
                                        ,-----.                   ,---.          ,---.
                                        |Alice|                   |Bob|          |Log|
                                        `--+--'                   `-+-'          `-+-'
                                           |Authentication Request  |              |
                                           |----------------------->|              |
                                           |                        |              |
                                           |                        |              |
          _______________________________________________________________________________________________
          ! ALT  /  successful case        |                        |              |                     !
          !_____/                          |                        |              |                     !
          !                                |Authentication Accepted |              |                     !
          !                                |<-----------------------|              |                     !
          !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!
          ! [some kind of failure]         |                        |              |                     !
          !                                |Authentication Failure  |              |                     !
          !                                |<-----------------------|              |                     !
          !                                |                        |              |                     !
          !                                |                        |              |                     !
          !         ___________________________________________________________________________          !
          !         ! MY OWN LABEL  /      |                        |              |           !         !
          !         !______________/       |           Log attack start            |           !         !
          !         !                      |-------------------------------------->|           !         !
          !         !                      |                        |              |           !         !
          !         !                      |                        |              |           !         !
          !         !         __________________________________________________   |           !         !
          !         !         ! LOOP  /  1000 times                 |           !  |           !         !
          !         !         !______/     |                        |           !  |           !         !
          !         !         !            |      DNS Attack        |           !  |           !         !
          !         !         !            |----------------------->|           !  |           !         !
          !         !         !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!  |           !         !
          !         !                      |                        |              |           !         !
          !         !                      |            Log attack end             |           !         !
          !         !                      |-------------------------------------->|           !         !
          !         !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!         !
          !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!
          ! [Another type of failure]      |                        |              |                     !
          !                                |     Please repeat      |              |                     !
          !                                |<-----------------------|              |                     !
          !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!
                                        ,--+--.                   ,-+-.          ,-+-.
                                        |Alice|                   |Bob|          |Log|
                                        `-----'                   `---'          `---'


//1.13 Secondary group label
----------------------------
For group, it is possible to add, between[ and ], a secondary text or label that will be displayed into the
header.
<!-- Page 12 / 550 -->


```uml
@startuml
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Failure
group My own label [My own label 2]
    Alice -> Log : Log attack start
    loop 1000 times
        Alice -> Bob: DNS Attack
    end
    Alice -> Log : Log attack end
end
@enduml
```
                              ,-----.                  ,---.          ,---.
                              |Alice|                  |Bob|          |Log|
                              `--+--'                  `-+-'          `-+-'
                                 |Authentication Request |              |
                                 |---------------------->|              |
                                 |                       |              |
                                 |Authentication Failure |              |
                                 |<----------------------|              |
                                 |                       |              |
                                 |                       |              |
          __________________________________________________________________________
          ! MY OWN LABEL   /  My own label 2             |              |           !
          !_______________/      |                       |              |           !
          !                      |          Log attack start            |           !
          !                      |------------------------------------->|           !
          !                      |                       |              |           !
          !                      |                       |              |           !
          !         _________________________________________________   |           !
          !         ! LOOP  /  1000 times                |           !  |           !
          !         !______/     |                       |           !  |           !
          !         !            |      DNS Attack       |           !  |           !
          !         !            |---------------------->|           !  |           !
          !         !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!  |           !
          !                      |                       |              |           !
          !                      |           Log attack end             |           !
          !                      |------------------------------------->|           !
          !~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!
                              ,--+--.                  ,-+-.          ,-+-.
                              |Alice|                  |Bob|          |Log|
                              `-----'                  `---'          `---'

[Ref. QA-2503]

//1.14 Notes on messages
------------------------
It is possible to put notes on message using the note left or note right keywords just after the message.
You can have a multi-line note using the end note keywords.

```uml
@startuml
Alice->Bob : hello
note left: this is a first note
Bob->Alice : ok
note right: this is another note
Bob->Bob : I am thinking
note left
    a note
    can also be defined
    on several lines
end note
@enduml
```
                           ,-----.          ,---.
                           |Alice|          |Bob|
                           `--+--'          `-+-'
      ,--------------------!. |    hello      |
      |this is a first note|_\|-------------->|
      `----------------------'|               |
                              |      ok       | ,--------------------!.
                              |<--------------| |this is another note|_\
                              |               | `----------------------'
                      ,-------------------!.  ----.
                      |a note             |_\     | I am thinking
                      |can also be defined  | <---'
                      |on several lines     | |
                      `---------------------'-+-.
                           |Alice|          |Bob|
                           `-----'          `---'

<!-- Page 13 / 550 -->

//1.15 Some other notes
-----------------------

It is also possible to place notes relative to participant with note left of ,
note right of or note over keywords.

It is possible to highlight a note by changing its background color.
You can also have a multi-line note using the end note keywords.

```uml
@startuml
participant Alice
participant Bob
note left of Alice #aqua
    This is displayed
    left of Alice.
end note
note right of Alice: This is displayed right of Alice.
note over Alice: This is displayed over Alice.
note over Alice, Bob #FFAAAA: This is displayed\n over Bob and Alice.
note over Bob, Alice
    This is yet another
    example of
    a long note.
end note
@enduml
```
                        ┌─────┐          ┌───┐
                        │Alice│          │Bob│
                        └──┬──┘          └─┬─┘
      ╔═══════════════════╗│               │
      ║This is displayed ░║│               │
      ║left of Alice.     ║│               │
      ╚═══════════════════╝│               │
                           │ ╔═════════════╧═════════════════════╗
                           │ ║This is displayed right of Alice. ░║
                           │ ╚═════════════╤═════════════════════╝
           ╔═══════════════╧═══════════════╗
           ║This is displayed over Alice. ░║
           ╚═══════════════╤═══════════════╝
                        ╔══╧═══════════════╧═══╗
                        ║This is displayed    ░║
                        ║ over Bob and Alice.  ║
                        ╚══╤═══════════════╤═══╝
                        ╔══╧═══════════════╧═══╗
                        ║This is yet another  ░║
                        ║example of            ║
                        ║a long note.          ║
                        ╚══════════════════════╝
                        │Alice│          │Bob│
                        └─────┘          └───┘

<!-- Page 14 / 550 -->

//1.16 Changing notes shape [hnote, rnote]
------------------------------------------
You can use hnote and rnote keywords to change note shapes :

• hnote for hexagonal note;
• rnote for rectangle note.

```uml
@startuml
caller -> server : conReq
hnote over caller : idle
caller <- server : conConf
rnote over server
    "r" as rectangle
    "h" as hexagon
endrnote
rnote over server
    this is
    on several
    lines
endrnote
hnote over caller
    this is
    on several
    lines
endhnote
@enduml
```
         ┌──────┐          ┌──────┐      
         │caller│          │server│      
         └──┬───┘          └──┬───┘      
            │      conReq     │          
            │ ────────────────>          
            │                 │          
         ┌──────┐             │          
         │idle  │             │          
         └──────┘             │          
            │     conConf     │          
            │ <────────────────          
            │                 │          
            │        ┌──────────────────┐
            │        │"r" as rectangle  │
            │        │"h" as hexagon    │
            │        └──────────────────┘
            │           ┌────────────┐   
            │           │this is     │   
            │           │on several  │   
            │           │lines       │   
            │           └────────────┘   
      ┌────────────┐          │          
      │this is     │          │          
      │on several  │          │          
      │lines       │          │          
      └────────────┘       ┌──┴───┐      
         │caller│          │server│      
         └──────┘          └──────┘      


[Ref. QA-1765]

//1.17 Note over all participants [across]
------------------------------------------
You can directly make a note over all participants, with the syntax:
• note across: note_description


```uml
@startuml
Alice->Bob:m1
Bob->Charlie:m2
note over Alice, Charlie: Old method for note over all part. with:\n ""note over //FirstPart, LastPart//"".
note across: New method with:\n""note across""
Bob->Alice
hnote across:Note across all part.

@enduml
```
         ┌─────┐          ┌───┐          ┌───────┐ 
         │Alice│          │Bob│          │Charlie│ 
         └──┬──┘          └─┬─┘          └───┬───┘ 
            │      m1       │                │     
            │──────────────>│                │     
            │               │                │     
            │               │      m2        │     
            │               │───────────────>│     
            │               │                │     
       ╔════╧═══════════════╧════════════════╧════╗
       ║Old method for note over all part. with: ░║
       ║ ""note over //FirstPart, LastPart//"".   ║
       ╚════╤═══════════════╤════════════════╤════╝
        ╔═══╧═══════════════╧════════════════╧════╗
        ║New method with:                        ░║
        ║""note across""                          ║
        ╚═══╤═══════════════╤════════════════╤════╝
            │               │                │     
            │<──────────────│                │     
            │               │                │     
        ┌─────────────────────────────────────────┐
        │Note across all part.                    │
        └─────────────────────────────────────────┘
         │Alice│          │Bob│          │Charlie│ 
         └─────┘          └───┘          └───────┘ 


<!-- Page 15 / 550 -->

[Ref. QA-9738]

//1.18 Several notes aligned at the same level [/]
--------------------------------------------------
You can make several notes aligned at the same level, with the syntax /:
• without / (by default, the notes are not aligned)


```uml
@startuml
note over Alice : initial state of Alice
note over Bob : initial state of Bob
Bob -> Alice : hello
@enduml
```
               ┌─────┐          ┌───┐          
               │Alice│          │Bob│          
               └──┬──┘          └─┬─┘          
      ╔═══════════╧════════════╗  │            
      ║initial state of Alice ░║  │            
      ╚═══════════╤════════════╝  │            
                  │    ╔══════════╧═══════════╗
                  │    ║initial state of Bob ░║
                  │    ╚══════════╤═══════════╝
                  │    hello      │            
                  │<──────────────│            
               ┌──┴──┐          ┌─┴─┐          
               │Alice│          │Bob│          
               └─────┘          └───┘          


• with / (the notes are aligned)


```uml
@startuml
note over Alice : initial state of Alice
/ note over Bob : initial state of Bob
Bob -> Alice : hello
@enduml
```
               ,-----.                      ,---.
               |Alice|                      |Bob|
               `--+--'                      `-+-'
      ,----------------------!.    ,--------------------!.
      |initial state of Alice|_\   |initial state of Bob|_\
      `------------------------'   `----------------------'
                  |          hello            |
                  |<--------------------------|
               ,--+--.                      ,-+-.
               |Alice|                      |Bob|
               `-----'                      `---'

[Ref. QA-354]
<!-- Page 16 / 550 -->

//1.19 Creole and HTML
----------------------

It is also possible to use creole formatting:

```uml
@startuml
participant Alice
participant "The **Famous** Bob" as Bob
Alice -> Bob : hello --there--
... Some ~~long delay~~ ...
Bob -> Alice : ok
note left
    This is **bold**
    This is //italics//
    This is ""monospaced""
    This is --stroked--
    This is __underlined__
    This is ~~waved~~
end note

Alice -> Bob : A //well formatted// message
note right of Alice
    This is <back:cadetblue><size:18>displayed</size></back>
    __left of__ Alice.
end note
note left of Bob
    <u:red>This</u> is <color #118888>displayed</color>
    **<color purple>left of</color> <s:red>Alice</strike> Bob**.
end note
note over Alice, Bob
    <w:#FF33FF>This is hosted</w> by <img sourceforge.jpg>
end note
@enduml
```
                                   ┌─────┐                ┌──────────────────┐                      
                                   │Alice│                │The **Famous** Bob│                      
                                   └──┬──┘                └────────┬─────────┘                      
                                      │      hello --there--       │                                
                                      │────────────────────────────>                                
                                      │                            │                                
                                      .                            .                                
                                      .     Some ~~long delay~~    .                                
                                      .                            .                                
                                      .                            .                                
                                      .                            .                                
           ╔════════════════════════╗ │                            │                                
           ║This is **bold**       ░║ │                            │                                
           ║This is //italics//     ║ │             ok             │                                
           ║This is ""monospaced""  ║ │<────────────────────────────                                
           ║This is --stroked--     ║ │                            │                                
           ║This is __underlined__  ║ │                            │                                
           ║This is ~~waved~~       ║ │                            │                                
           ╚════════════════════════╝ │                            │                                
                                      │A //well formatted// message│                                
                                      │────────────────────────────>                                
                                      │                            │                                
                                      │ ╔══════════════════════════╧═══════════════════════════════╗
                                      │ ║This is <back:cadetblue><size:18>displayed</size></back> ░║
                                      │ ║__left of__ Alice.                                        ║
                                      │ ╚══════════════════════════╤═══════════════════════════════╝
    ╔═════════════════════════════════╧════════════════════════════╗                                
    ║<u:red>This</u> is <color #118888>displayed</color>          ░║                                
    ║**<color purple>left of</color> <s:red>Alice</strike> Bob**.  ║                                
    ╚═════════════════════════════════╤════════════════════════════╝                                
                         ╔════════════╧════════════════════════════╧══════════════╗                 
                         ║<w:#FF33FF>This is hosted</w> by <img sourceforge.jpg> ░║                 
                         ╚════════════════════════════════════════════════════════╝                 
                                   │Alice│                │The **Famous** Bob│                      
                                   └─────┘                └──────────────────┘                      
  

<!-- Page 17 / 550 -->

//1.20 Divider or separator
---------------------------

If you want, you can split a diagram using == separator to divide your diagram into logical steps.

```uml
@startuml
== Initialization ==
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
== Repetition ==
Alice -> Bob: Another authentication Request
Alice <-- Bob: another authentication Response
@enduml
```
         ┌─────┐                           ┌───┐     
         │Alice│                           │Bob│     
         └──┬──┘                           └─┬─┘     
            │                                │       
            │      ╔════════════════╗        │       
    ════════╪══════╣ Initialization ╠════════╪═══════
            │      ╚════════════════╝        │       
            │                                │       
            │    Authentication Request      │       
            │───────────────────────────────>│       
            │                                │       
            │    Authentication Response     │       
            │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│       
            │                                │       
            │                                │       
            │        ╔════════════╗          │       
    ════════╪════════╣ Repetition ╠══════════╪═══════
            │        ╚════════════╝          │       
            │                                │       
            │Another authentication Request  │       
            │───────────────────────────────>│       
            │                                │       
            │another authentication Response │       
            │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│       
         ┌──┴──┐                           ┌─┴─┐     
         │Alice│                           │Bob│     
         └─────┘                           └───┘     


//1.21 Reference
----------------
You can use reference in a diagram, using the keyword ref over.

```uml
@startuml
participant Alice
actor Bob
ref over Alice, Bob : init
Alice -> Bob : hello
ref over Bob
    This can be on
    several lines
end ref
@enduml
```
                           ┌─┐         
                           ║"│         
                           └┬┘         
                           ┌┼┐         
         ┌─────┐            │          
         │Alice│           ┌┴┐         
         └──┬──┘           Bob         
    ╔══════╤╪═══════════════╪══════╗   
    ║ REF  ││               │      ║   
    ╟──────┘│               │      ║   
    ║ init  │               │      ║   
    ╚═══════╪═══════════════╪══════╝   
            │    hello      │          
            │──────────────>│          
            │               │          
            │        ╔══════╤═════════╗
            │        ║ REF  │         ║
            │        ╟──────┘         ║
            │        ║ This can be on ║
            │        ║ several lines  ║
         ┌──┴──┐     ╚════════════════╝
         │Alice│           ┌─┐         
         └─────┘           ║"│         
                           └┬┘         
                           ┌┼┐         
                            │          
                           ┌┴┐         


<!-- Page 18 / 550 -->

//1.22 Delay
------------

You can use ... to indicate a delay in the diagram. And it is also possible to put a message with this
delay.

```uml
@startuml
Alice -> Bob: Authentication Request
...
Bob --> Alice: Authentication Response
...5 minutes later...
Bob --> Alice: Good Bye !
@enduml
```
     ┌─────┐                   ┌───┐
     │Alice│                   │Bob│
     └──┬──┘                   └─┬─┘
        │Authentication Request  │  
        │───────────────────────>│  
        │                        │  
        .                        .  
        .                        .  
        .                        .  
        .                        .  
        │Authentication Response │  
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│  
        │                        │  
        .                        .  
        .    5 minutes later     .  
        .                        .  
        .                        .  
        .                        .  
        .      Good Bye !        .  
        .<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─.  
     ┌──┴──┐                   ┌─┴─┐
     │Alice│                   │Bob│
     └─────┘                   └───┘



//1.23 Text wrapping
--------------------
To break long messages, you can manually add in your text.
Another option is to use maxMessageSize setting:

```uml
@startuml
skinparam maxMessageSize 50
participant a
participant b
a -> b :this\nis\nmanually\ndone
a -> b :this is a very long message on several words
@enduml
```
     ┌─┐                                           ┌─┐
     │a│                                           │b│
     └┬┘                                           └┬┘
      │                  this                       │ 
      │                  is                         │ 
      │                  manually                   │ 
      │                  done                       │ 
      │────────────────────────────────────────────>│ 
      │                                             │ 
      │this is a very long message on several words │ 
      │────────────────────────────────────────────>│ 
     ┌┴┐                                           ┌┴┐
     │a│                                           │b│
     └─┘                                           └─┘

<!-- Page 19 / 550 -->

//1.24 Space
------------

You can use ||| to indicate some spacing in the diagram.
It is also possible to specify a number of pixel to be used.

```uml
@startuml
Alice -> Bob: message 1
Bob --> Alice: ok
|||
Alice -> Bob: message 2
Bob --> Alice: ok
||45||
Alice -> Bob: message 3
Bob --> Alice: ok
@enduml
```
     ┌─────┐          ┌───┐
     │Alice│          │Bob│
     └──┬──┘          └─┬─┘
        │  message 1    │  
        │──────────────>│  
        │      ok       │  
        │<─ ─ ─ ─ ─ ─ ─ │  
        │               │  
        . . . . . . . . .
        │  message 2    │  
        │──────────────>│  
        │               │  
        │      ok       │  
        │<─ ─ ─ ─ ─ ─ ─ │  
        │               │  
        . . . . . . . . .
        │               │  
        │               │  
        │  message 3    │  
        │──────────────>│  
        │               │  
        │      ok       │  
        │<─ ─ ─ ─ ─ ─ ─ │  
     ┌──┴──┐          ┌─┴─┐
     │Alice│          │Bob│
     └─────┘          └───┘



//1.25 Lifeline Activation and Destruction
------------------------------------------
The activate and deactivate are used to denote participant activation.
Once a participant is activated, its lifeline appears.
The activate and deactivate apply on the previous message.
<!-- Page 20 / 550 -->

The destroy denote the end of the lifeline of a participant.

```uml
@startuml
participant User
User -> A: DoWork
activate A
A -> B: << createRequest >>
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: RequestCreated
deactivate B
A -> User: Done
deactivate A
@enduml
```
     ┌────┐          ┌─┐                   ┌─┐          ┌─┐
     │User│          │A│                   │B│          │C│
     └─┬──┘          └┬┘                   └┬┘          └┬┘
       │   DoWork    ┌┴┐                    │            │ 
       │ ───────────>│ │                    │            │ 
       │             │ │                    │            │ 
       │             │ │<< createRequest >>┌┴┐           │ 
       │             │ │ ─────────────────>│ │           │ 
       │             │ │                   │ │           │ 
       │             │ │                   │ │  DoWork  \┴/
       │             │ │                   │ │ ────────>│X│
       │             │ │                   │ │          /┬\
       │             │ │                   │ │ WorkDone  │ 
       │             │ │                   │ │ <─ ─ ─ ─ ─│ 
       │             │ │                   └┬┘           │ 
       │             │ │   RequestCreated   │            │ 
       │             │ │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─            │ 
       │             └┬┘                    │            │ 
       │     Done     │                     │            │ 
       │ <────────────│                     │            │ 
     ┌─┴──┐          ┌┴┐                   ┌┴┐          ┌┴┐
     │User│          │A│                   │B│          │C│
     └────┘          └─┘                   └─┘          └─┘


Nested lifeline can be used, and it is possible to add a color on the lifeline.

```uml
@startuml
participant User
User -> A: DoWork
activate A #FFBBBB
A -> A: Internal call
activate A #DarkSalmon
A -> B: << createRequest >>
activate B
B --> A: RequestCreated
deactivate B
deactivate A
A -> User: Done
deactivate A
@enduml
```
     ┌────┐          ┌─┐                   ┌─┐  
     │User│          │A│                   │B│  
     └─┬──┘          └┬┘                   └┬┘  
       │   DoWork    ┌┴┐                    │   
       │ ───────────>│ │     ────┐              
       │             │ │         │ Internal call
       │             │ │     <───┘              
       │             │ │                    │   
       │             │ │                    │   
       │             │ │                    │   
       │             │ │<< createRequest >>┌┴┐  
       │             │ │ ─────────────────>│ │  
       │             │ │                   └┬┘  
       │             │ │   RequestCreated   │   
       │             │┌┴┐<─ ─ ─ ─ ─ ─ ─ ─ ─ ─   
       │             │└┬┘                   │   
       │    Done     │ │                    │   
       │ <───────────│ │                    │   
     ┌─┴──┐          │ │                   ┌┴┐  
     │User│          │ │                   │B│  
     └────┘          │ │                   └─┘  
                     └┬┘                        


<!-- Page 21 / 550 -->

Autoactivation is possible and works with the return keywords:

```uml
@startuml
autoactivate on
alice -> bob : hello
bob -> bob : self call
bill -> bob #005500 : hello from thread 2
bob -> george ** : create
return done in thread 2
return rc
bob -> george !! : delete
return success
@enduml
```
     ┌─────┐          ┌───┐                 ┌────┐                  
     │alice│          │bob│                 │bill│                  
     └──┬──┘          └─┬─┘                 └─┬──┘                  
        │   hello      ┌┴┐                    │                     
        │────────────> │ │     ────┐          │                     
        │              │ │         │ self call│                     
        │              │ │     <───┘          │                     
        │              │ │                    │                     
        │              │ │                    │                     
        │              │ │                    │                     
        │              │ │ hello from thread 2│                     
        │              │ │ <───────────────────                │    
        │              │ │                    │                │    
        │              │ │              create│             ┌──────┐
        │              │┌┴┐────────────────────────────────>│george│
        │              │└┬┘                   │             └──┬───┘
        │              │ │  done in thread 2  │                │    
        │              │ │  ─ ─ ─ ─ ─ ─ ─ ─ ─ >                │    
        │              │ │                    │                │    
        │              │ │                    │                │    
        │              │ │─ ─ ┐               │               \│/   
        │              │ │    | rc            │                X    
        │              │ │< ─ ┘               │               /│\   
        │              │ │                delete               │    
        │              │ │ ────────────────────────────────────>    
        │              └┬┘                    │                │    
        │   success     │                     │                │    
        │<─ ─ ─ ─ ─ ─ ─ │                     │                │    
     ┌──┴──┐          ┌─┴─┐                 ┌─┴──┐          ┌──┴───┐
     │alice│          │bob│                 │bill│          │george│
     └─────┘          └───┘                 └────┘          └──────┘



//1.26 Return
-------------

Command return generates a return message with optional text label.
The return point is that which caused the most recent life-line activation.
The syntax is return label where label if provided is any string acceptable for conventional messages.

```uml
@startuml
Bob -> Alice : hello
activate Alice
Alice -> Alice : some action
return bye
@enduml
```
     ┌───┐          ┌─────┐               
     │Bob│          │Alice│               
     └─┬─┘          └──┬──┘               
       │   hello      ┌┴┐                 
       │────────────> │ │                 
       │              │ │                 
       │              │ │────┐            
       │              │ │    │ some action
       │              │ │<───┘            
       │              └┬┘                 
       │     bye       │                  
       │<─ ─ ─ ─ ─ ─ ─ │                  
     ┌─┴─┐          ┌──┴──┐               
     │Bob│          │Alice│               
     └───┘          └─────┘               


<!-- Page 22 / 550 -->

//1.27 Participant creation
---------------------------

You can use the create keyword just before the first reception of a message to emphasize the fact that
this message is actually creating this new object.

```uml
@startuml
Bob -> Alice : hello
create Other
Alice -> Other : new
create control String
Alice -> String
note right : You can also put notes!
Alice --> Bob : ok
@enduml
```
     ┌───┐          ┌─────┐                                                                
     │Bob│          │Alice│                                                                
     └─┬─┘          └──┬──┘                                                                
       │    hello      │                                                                   
       │──────────────>│                │                                                  
       │               │                │                                                  
       │               │    new      ┌─────┐                                               
       │               │───────────> │Other│             │                                 
       │               │             └──┬──┘             │                                 
       │               │                │             ┌──────┐  ╔═════════════════════════╗
       │               │────────────────────────────> │String│  ║You can also put notes! ░║
       │               │                │             └──────┘  ╚═════════════════════════╝
       │      ok       │                │                │                                 
       │<─ ─ ─ ─ ─ ─ ─ │                │                │                                 
     ┌─┴─┐          ┌──┴──┐          ┌──┴──┐          ┌──────┐                             
     │Bob│          │Alice│          │Other│          │String│                             
     └───┘          └─────┘          └─────┘          └──────┘                             




//1.28 Shortcut syntax for activation, deactivation, creation
--------------------------------------------------------
Immediately after specifying the target participant, the following syntax can be used:

• ++ Activate the target (optionally a color may follow this)
• -- Deactivate the source
• ** Create an instance of the target
• !! Destroy an instance of the target
<!-- Page 23 / 550 -->

```uml
@startuml
alice -> bob ++ : hello
bob -> bob ++ : self call
bob -> bib ++ #005500 : hello
bob -> george ** : create
return done
return rc
bob -> george !! : delete
return success
@enduml
```
     ┌─────┐          ┌───┐             ┌───┐                  
     │alice│          │bob│             │bib│                  
     └──┬──┘          └─┬─┘             └─┬─┘                  
        │   hello      ┌┴┐                │                    
        │────────────> │ │     ────┐                           
        │              │ │         │ self call                 
        │              │ │     <───┘                           
        │              │ │                │                    
        │              │ │                │                    
        │              │ │                │                    
        │              │ │     hello     ┌┴┐                   
        │              │ │ ─────────────>│ │              │    
        │              │ │               │ │              │    
        │              │ │           create│           ┌──────┐
        │              │┌┴┐───────────────────────────>│george│
        │              ││ │              └┬┘           └──┬───┘
        │              ││ │     done      │               │    
        │              ││ │ <─ ─ ─ ─ ─ ─ ─│               │    
        │              ││ │               │               │    
        │              ││ │               │               │    
        │              ││ │─ ─ ┐          │              \│/   
        │              ││ │    | rc       │               X    
        │              ││ │< ─ ┘          │              /│\   
        │              ││ │            delete             │    
        │              ││ │ ─────────────────────────────>│    
        │              │└┬┘               │               │    
        │  success     │ │                │               │    
        │<─ ─ ─ ─ ─ ─  │ │                │               │    
     ┌──┴──┐          ┌│ │┐             ┌─┴─┐          ┌──┴───┐
     │alice│          ││ ││             │bib│          │george│
     └─────┘          └│ │┘             └───┘          └──────┘
                       └┬┘                                     

Then you can mix activation and deactivation, on same line:

```uml
@startuml
alice -> bob ++ : hello1
bob -> charlie --++ : hello2
charlie --> alice -- : ok
@enduml
```
     ┌─────┐          ┌───┐          ┌───────┐
     │alice│          │bob│          │charlie│
     └──┬──┘          └─┬─┘          └───┬───┘
        │   hello1     ┌┴┐               │    
        │────────────> │ │               │    
        │              └┬┘               │    
        │               │   hello2      ┌┴┐   
        │               │─────────────> │ │   
        │               │               └┬┘   
        │              ok                │    
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│    
     ┌──┴──┐          ┌─┴─┐          ┌───┴───┐
     │alice│          │bob│          │charlie│
     └─────┘          └───┘          └───────┘


```uml
@startuml
    @startuml
    alice -> bob --++ #gold: hello
    bob -> alice --++ #gold: you too
    alice -> bob --: step1
    alice -> bob : step2
    @enduml
@enduml
```
     ┌─────┐          ┌───┐
     │alice│          │bob│
     └──┬──┘          └─┬─┘
        │   hello      ┌┴┐ 
        │────────────> │ │ 
        │              └┬┘ 
       ┌┴┐   you too    │  
       │ │ <────────────│  
       └┬┘              │  
        │    step1      │  
        │──────────────>│  
        │               │  
        │    step2      │  
        │──────────────>│  
     ┌──┴──┐          ┌─┴─┐
     │alice│          │bob│
     └─────┘          └───┘


<!-- Page 24 / 550 -->

[Ref. QA-4834, QA-9573 and QA-13234]

//1.29 Incoming and outgoing messages
-------------------------------------
You can use incoming or outgoing arrows if you want to focus on a part of the diagram.
Use square brackets to denote the left ”[” or the right ”]” side of the diagram.

```uml
@startuml
[-> A: DoWork
activate A
A -> A: Internal call
activate A
A ->] : << createRequest >>
A<--] : RequestCreated
deactivate A
[<- A: Done
deactivate A
@enduml
```
              ┌─┐                        
              │A│                        
              └┬┘                        
        DoWork┌┴┐                        
         ────>│ │     ────┐              
              │ │         │ Internal call
              │ │     <───┘              
              │ │                        
              │ │                        
              │ │                        
              │ │  << createRequest >>   
              │ │ ──────────────────────>
              │ │                        
              │ │     RequestCreated     
              │ ┌┴<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ 
              │ └┬┘                      
         Done │ │                        
         <────│ │                        
              └┬┘                        
              │A│                        
              └─┘                        


<!-- Page 25 / 550 -->

You can also have the following syntax:

```uml
@startuml
participant Alice
participant Bob #lightblue
Alice -> Bob
Bob -> Carol
...
[-> Bob
[o-> Bob
[o->o Bob
[x-> Bob
...
[<- Bob
[x<- Bob
...
Bob ->]
Bob ->o]
Bob o->o]
Bob ->x]
...
Bob <-]
Bob x<-]
@enduml
```
         ┌─────┐          ┌───┐          ┌─────┐    
         │Alice│          │Bob│          │Carol│    
         └──┬──┘          └─┬─┘          └──┬──┘    
            │               │               │       
            │──────────────>│               │       
            │               │──────────────>│       
            .               .               .       
            .               .               .       
     ──────────────────────>│               │       
            │──────────────>│               │       
            │──────────────>│               │       
     <─────────────────────>│               │       
            .               .               .       
     <──────────────────────│               │       
     <──────────────────────│               │       
            .               .               .       
            │               │──────────────────────>
            │               │──────────────>│       
            │               │──────────────>│       
            │               │──────────────────────>
            .               .               .       
            │               │<──────────────────────
            │               │<──────────────────────
         ┌──┴──┐          ┌─┴─┐          ┌──┴──┐    
         │Alice│          │Bob│          │Carol│    
         └─────┘          └───┘          └─────┘    




//1.30 Short arrows for incoming and outgoing messages
------------------------------------------------------
You can have short arrows with using ?.

```uml
@startuml
?-> Alice : ""?->""\n**short** to actor1
[-> Alice : ""[->""\n**from start** to actor1
[-> Bob : ""[->""\n**from start** to actor2
?-> Bob : ""?->""\n**short** to actor2
Alice ->] : ""->]""\nfrom actor1 **to end**
Alice ->? : ""->?""\n**short** from actor1
Alice -> Bob : ""->"" \nfrom actor1 to actor2
@enduml
    ```
                          ,-----.                 ,---.
                          |Alice|                 |Bob|
                          `--+--'                 `-+-'
          ""?->""            |                      |
          **short** to actor1|                      |
          ------------------->                      |
                             |                      |
     ""[->""                 |                      |
     **from start** to actor1|                      |
     ------------------------>                      |
                             |                      |
                ""[->""      |                      |
                **from start** to actor2            |
     ----------------------------------------------->
                             |                      |
                             |   ""?->""            |
                             |   **short** to actor2|
                             |   ------------------->
                             |                      |
                             |    ""->]""           |
                             |    from actor1 **to end**
                             | ---------------------------->
                             |                      |
                             | ""->?""              |
                             | **short** from actor1|
                             | --------------------->
                             |                      |
                             | ""->""               |
                             | from actor1 to actor2|
                             | --------------------->
                          ,--+--.                 ,-+-.
                          |Alice|                 |Bob|
                          `-----'                 `---'

<!-- Page 26 / 550 -->

[Ref. QA-310]

//1.31 Anchors and Duration
---------------------------
With teoz it is possible to add anchors to the diagram and use the anchors to specify duration time.

```uml
@startuml
!pragma teoz true
{start} Alice -> Bob : start doing things during duration
Bob -> Max : something
Max -> Bob : something else
{end} Bob -> Alice : finish
{start} <-> {end} : some time
@enduml
```

     ┌─────┐                              ┌───┐           ┌───┐
     │Alice│                              │Bob│           │Max│
     └──┬──┘                              └─┬─┘           └─┬─┘
        │start doing things during duration │               │
        │──────────────────────────────────>│               │
        │                 ^                 │               │
        │                 |                 │  something    │
        │                 |                 │──────────────>│
        │                 | some time       │               │
        │                 |                 │something else │
        │                 |                 │<──────────────│
        │                 |                 │               │
        │     finish      v                 │               │
        │<──────────────────────────────────│               │
     ┌──┴──┐                              ┌─┴─┐           ┌─┴─┐
     │Alice│                              │Bob│           │Max│
     └─────┘                              └───┘           └───┘

You can use the -P command-line option to specify the pragma:
java -jar plantuml.jar -Pteoz=true

[Ref. issue-582]

//1.32 Stereotypes and Spots
----------------------------
It is possible to add stereotypes to participants using << and >>.
<!-- Page 27 / 550 -->

In the stereotype, you can add a spotted character in a colored circle using the syntax (X,color).

```uml
@startuml
participant "Famous Bob" as Bob << Generated >>
participant Alice << (C,#ADD1B2) Testable >>
Bob->Alice: First message
@enduml
```
     ┌───────────────┐          ┌────────────────┐
     │<< Generated >>│          │C << Testable >>│
     │Famous Bob     │          │Alice           │
     └───────┬───────┘          └───────┬────────┘
             │      First message       │         
             │─────────────────────────>│         
     ┌───────┴───────┐          ┌───────┴────────┐
     │<< Generated >>│          │C << Testable >>│
     │Famous Bob     │          │Alice           │
     └───────────────┘          └────────────────┘


By default, the guillemet character is used to display the stereotype. You can change this behavious
using the skinparam guillemet:

```uml
@startuml
skinparam guillemet false
participant "Famous Bob" as Bob << Generated >>
participant Alice << (C,#ADD1B2) Testable >>
Bob->Alice: First message
@enduml
```
     ┌───────────────┐          ┌────────────────┐
     │<< Generated >>│          │C << Testable >>│
     │Famous Bob     │          │Alice           │
     └───────┬───────┘          └───────┬────────┘
             │      First message       │         
             │─────────────────────────>│         
     ┌───────┴───────┐          ┌───────┴────────┐
     │<< Generated >>│          │C << Testable >>│
     │Famous Bob     │          │Alice           │
     └───────────────┘          └────────────────┘


```uml
@startuml
participant Bob << (C,#ADD1B2) >>
participant Alice << (C,#ADD1B2) >>
Bob->Alice: First message
@enduml
```
     ┌───┐          ┌─────┐
     │C  │          │C    │
     │Bob│          │Alice│
     └─┬─┘          └──┬──┘
       │First message  │   
       │──────────────>│   
     ┌─┴─┐          ┌──┴──┐
     │C  │          │C    │
     │Bob│          │Alice│
     └───┘          └─────┘


//1.33 More information on titles
---------------------------------
You can use creole formatting in the title.
<!-- Page 28 / 550 -->


```uml
@startuml
title __Simple__ **communication** example
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response
@enduml
```
      __Simple__ **communication** example
                                          
         ┌─────┐                   ┌───┐  
         │Alice│                   │Bob│  
         └──┬──┘                   └─┬─┘  
            │Authentication Request  │    
            │───────────────────────>│    
            │                        │    
            │Authentication Response │    
            │<───────────────────────│    
         ┌──┴──┐                   ┌─┴─┐  
         │Alice│                   │Bob│  
         └─────┘                   └───┘  

You can add newline using in the title description.

```uml
@startuml
title __Simple__ communication example\non several lines
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response
@enduml
```
    __Simple__ communication example
    on several lines                
                                    
     ┌─────┐                   ┌───┐
     │Alice│                   │Bob│
     └──┬──┘                   └─┬─┘
        │Authentication Request  │  
        │───────────────────────>│  
        │                        │  
        │Authentication Response │  
        │<───────────────────────│  
     ┌──┴──┐                   ┌─┴─┐
     │Alice│                   │Bob│
     └─────┘                   └───┘


You can also define title on several lines using title and end title keywords.

```uml
@startuml
title
    <u>Simple</u> communication example
    on <i>several</i> lines and using <font color=red>html</font>
    This is hosted by <img:sourceforge.jpg>
end title
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response
@enduml
```

    <u>Simple</u> communication example                          
    on <i>several</i> lines and using <font color=red>html</font>
    This is hosted by <img:sourceforge.jpg>                      
                                                                 
         ┌─────┐                   ┌───┐                         
         │Alice│                   │Bob│                         
         └──┬──┘                   └─┬─┘                         
            │Authentication Request  │                           
            │───────────────────────>│                           
            │                        │                           
            │Authentication Response │                           
            │<───────────────────────│                           
         ┌──┴──┐                   ┌─┴─┐                         
         │Alice│                   │Bob│                         
         └─────┘                   └───┘                         



<!-- Page 29 / 550 -->

//1.34 Participants encompass
-----------------------------

It is possible to draw a box around some participants, using box and end box commands.
You can add an optional title or a optional background color, after the box keyword.

```uml
@startuml
box "Internal Service" #LightBlue
    participant Bob
    participant Alice
end box
participant Other
Bob -> Alice : hello
Alice -> Other : hello
@enduml
```
    ┌────────────────────────┐
    │     Internal Servie    │
    │┌───┐          ┌─────┐  │        ┌─────┐
    ││Bob│          │Alice│  │        │Other│
    │└─┬─┘          └──┬──┘  │        └──┬──┘
    │  │    hello      │     │           │   
    │  │──────────────>│     │           │   
    │  │               │     │           │   
    │  │               │     │ hello     │   
    │  │               │─────│──────────>│   
    │┌─┴─┐          ┌──┴──┐  │        ┌──┴──┐
    ││Bob│          │Alice│  │        │Other│
    │└───┘          └─────┘  │        └─────┘
    └────────────────────────┘


It is also possible to nest boxes - to draw a box within a box - when using the teoz rendering engine, for
example:

```uml
@startuml
!pragma teoz true
box "Internal Service" #LightBlue
    participant Bob
    box "Subteam"
        participant Alice
        participant John
    end box
end box
participant Other
Bob -> Alice : hello
Alice -> John : hello
John -> Other: Hello
@enduml
```
    ┌────────────────────────────────────────┐
    │    Internal Service                    │
    │             ┌──────────────────────────┐
    │             │           Subteam        │
    │┌───┐        │ ┌─────┐          ┌────┐  │       ┌─────┐
    ││Bob│        │ │Alice│          │John│  │       │Other│
    │└─┬─┘        │ └──┬──┘          └─┬──┘  │       └──┬──┘
    │  │    hello │    │               │     │          │
    │  │──────────│───>│               │     │          │
    │  │          │    │               │     │          │
    │  │          │    │    hello      │     │          │
    │  │          │    │──────────────>│     │          │
    │  │          │    │               │     │          │
    │  │          │    │               │     Hello      │
    │  │          │    │               │ ──────────────>│
    │┌─┴─┐        │ ┌──┴──┐          ┌─┴──┐  │       ┌──┴──┐
    ││Bob│        │ │Alice│          │John│  │       │Other│
    │└───┘        │ └─────┘          └────┘  │       └─────┘
    └────────────────────────────────────────┘

注：上图手工添加两个外框，Txt 或 Unicode 格式输出无此外框。

<!-- Page 30 / 550 -->

//1.35 Removing Foot Boxes
--------------------------

You can use the hide footbox keywords to remove the foot boxes of the diagram.

```uml
@startuml
hide footbox
title Foot Box removed
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
@enduml
```
            Foot Box removed

     ┌─────┐                   ┌───┐
     │Alice│                   │Bob│
     └──┬──┘                   └─┬─┘
        │Authentication Request  │
        │───────────────────────>│
        │                        │
        │Authentication Response │
        │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│
        │                        │
        │                        │


//1.36 Skinparam
----------------
You can use the skinparam command to change colors and fonts for the drawing.
You can use this command:
• In the diagram definition, like any other commands,

• In an included file,

• In a configuration file, provided in the command line or the ANT task.

You can also change other rendering parameter, as seen in the following examples:
<!-- Page 31 / 550 -->

```uml
@startuml
skinparam sequenceArrowThickness 2
skinparam roundcorner 20
skinparam maxmessagesize 60
skinparam sequenceParticipant underline
actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C
User -> A: DoWork
activate A
A -> B: Create Request
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: Request Created
deactivate B
A --> User: Done
deactivate A
@enduml
```
        ┌─┐                                                                                 
        ║"│                                                                                 
        └┬┘                                                                                 
        ┌┼┐                                                                                 
         │              ┌──────────────┐          ┌───────────────┐          ┌─────────────┐
        ┌┴┐             │<u>First Class│          │<u>Second Class│          │<u>Last Class│
      <u>User           └──────┬───────┘          └───────┬───────┘          └──────┬──────┘
         │      DoWork        ┌┴┐                         │                         │       
         │───────────────────>│ │                         │                         │       
         │                    │ │                         │                         │       
         │                    │ │    Create Request      ┌┴┐                        │       
         │                    │ │ ─────────────────────> │ │                        │       
         │                    │ │                        │ │                        │       
         │                    │ │                        │ │        DoWork         \┴/      
         │                    │ │                        │ │ ─────────────────────>│X│      
         │                    │ │                        │ │                       /┬\      
         │                    │ │                        │ │        WorkDone        │       
         │                    │ │                        │ │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │       
         │                    │ │                        └┬┘                        │       
         │                    │ │     Request Created     │                         │       
         │                    │ │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─│                         │       
         │                    └┬┘                         │                         │       
         │        Done         │                          │                         │       
         │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ │                          │                         │       
      <u>User           ┌──────┴───────┐          ┌───────┴───────┐          ┌──────┴──────┐
        ┌─┐             │<u>First Class│          │<u>Second Class│          │<u>Last Class│
        ║"│             └──────────────┘          └───────────────┘          └─────────────┘
        └┬┘                                                                                 
        ┌┼┐                                                                                 
         │                                                                                  
        ┌┴┐                                                                                 

<!-- Page 32 / 550 -->



```uml
@startuml
skinparam backgroundColor #EEEBDC
skinparam handwritten true
skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF
ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
ParticipantFontName Impact
ParticipantFontSize 17
ParticipantFontColor #A9DCDF
ActorBackgroundColor aqua
ActorFontColor DeepSkyBlue
ActorFontSize 17
ActorFontName Aapex
}
actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C
User -> A: DoWork
activate A
A -> B: Create Request
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: Request Created
deactivate B
A --> User: Done
deactivate A
@enduml
```
       ┌─┐                                                                      
       ║"│                                                                      
       └┬┘                                                                      
       ┌┼┐                                                                      
        │            ┌───────────┐          ┌────────────┐          ┌──────────┐
       ┌┴┐           │First Class│          │Second Class│          │Last Class│
      User           └─────┬─────┘          └─────┬──────┘          └────┬─────┘
       │      DoWork      ┌┴┐                     │                      │      
       │ ────────────────>│ │                     │                      │      
       │                  │ │                     │                      │      
       │                  │ │   Create Request   ┌┴┐                     │      
       │                  │ │ ──────────────────>│ │                     │      
       │                  │ │                    │ │                     │      
       │                  │ │                    │ │       DoWork       \┴/     
       │                  │ │                    │ │ ──────────────────>│X│     
       │                  │ │                    │ │                    /┬\     
       │                  │ │                    │ │      WorkDone       │      
       │                  │ │                    │ │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─│      
       │                  │ │                    └┬┘                     │      
       │                  │ │   Request Created   │                      │      
       │                  │ │ <─ ─ ─ ─ ─ ─ ─ ─ ─ ─                       │      
       │                  └┬┘                     │                      │      
       │       Done        │                      │                      │      
       │ <─ ─ ─ ─ ─ ─ ─ ─ ─│                      │                      │      
      User           ┌─────┴─────┐          ┌─────┴──────┐          ┌────┴─────┐
       ┌─┐           │First Class│          │Second Class│          │Last Class│
       ║"│           └───────────┘          └────────────┘          └──────────┘
       └┬┘                                                                      
       ┌┼┐                                                                      
        │                                                                       
       ┌┴┐                                                                      

注：花括号中不能缩进，否则执行解释时错误。

//1.37 Changing padding
-----------------------

It is possible to tune some padding settings.

```uml
@startuml
skinparam ParticipantPadding 20
skinparam BoxPadding 10
box "Foo1"
participant Alice1
participant Alice2
end box
box "Foo2"
participant Bob1
participant Bob2
end box
Alice1 -> Bob1 : hello
Alice1 -> Out : out
@enduml
```
     ┌──────┐          ┌──────┐          ┌────┐          ┌────┐          ┌───┐
     │Alice1│          │Alice2│          │Bob1│          │Bob2│          │Out│
     └──┬───┘          └──┬───┘          └─┬──┘          └─┬──┘          └─┬─┘
        │               hello              │               │               │  
        │ ─────────────────────────────────>               │               │  
        │                 │                │               │               │  
        │                 │             out│               │               │  
        │ ────────────────────────────────────────────────────────────────>│  
     ┌──┴───┐          ┌──┴───┐          ┌─┴──┐          ┌─┴──┐          ┌─┴─┐
     │Alice1│          │Alice2│          │Bob1│          │Bob2│          │Out│
     └──────┘          └──────┘          └────┘          └────┘          └───┘


//1.38 Appendix: Examples of all arrow type
-------------------------------------------

//1.38.1 Normal arrow
---------------------

<!-- Page 33 / 550 -->

```uml
@startuml
participant Alice as a
participant Bob as b
a -> b : ""-> ""
a ->> b : ""->> ""
a -\ b : ""-\ ""
a -\\ b : ""-\\\\""
a -/ b : ""-/ ""
a -// b : ""-// ""
a ->x b : ""->x ""
a x-> b : ""x-> ""
a o-> b : ""o-> ""
a ->o b : ""->o ""
a o->o b : ""o->o ""
a <-> b : ""<-> ""
a o<->o b : ""o<->o""
a x<->x b : ""x<->x""
a ->>o b : ""->>o ""
a -\o b : ""-\o ""
a -\\o b : ""-\\\\o""
a -/o b : ""-/o ""
a -//o b : ""-//o ""
a x->o b : ""x->o ""
@enduml
```
     ┌─────┐          ┌───┐
     │Alice│          │Bob│
     └──┬──┘          └─┬─┘
        │   ""-> ""     │  
        │──────────────>│  
        │   ""->> ""    │  
        │──────────────>│  
        │   ""-\ ""     │  
        │──────────────>│  
        │   ""-\\""     │  
        │──────────────>│  
        │   ""-/ ""     │  
        │──────────────>│  
        │   ""-// ""    │  
        │──────────────>│  
        │   ""->x ""    │  
        │──────────────>│  
        │   ""x-> ""    │  
        │<─────────────>│  
        │   ""o-> ""    │  
        │──────────────>│  
        │   ""->o ""    │  
        │──────────────>│  
        │  ""o->o ""    │  
        │──────────────>│  
        │   ""<-> ""    │  
        │<─────────────>│  
        │  ""o<->o""    │  
        │<─────────────>│  
        │  ""x<->x""    │  
        │<─────────────>│  
        │  ""->>o ""    │  
        │──────────────>│  
        │   ""-\o ""    │  
        │──────────────>│  
        │   ""-\\o""    │  
        │──────────────>│  
        │   ""-/o ""    │  
        │──────────────>│  
        │  ""-//o ""    │  
        │──────────────>│  
        │  ""x->o ""    │  
        │<─────────────>│  
     ┌──┴──┐          ┌─┴─┐
     │Alice│          │Bob│
     └─────┘          └───┘

<!-- Page 34 / 550 -->

//1.38.2 Itself arrow
---------------------

```uml
@startuml
participant Alice as a
participant Bob as b
a -> a : ""-> ""
a ->> a : ""->> ""
a -\ a : ""-\ ""
a -\\ a : ""-\\\\""
a -/ a : ""-/ ""
a -// a : ""-// ""
a ->x a : ""->x ""
a x-> a : ""x-> ""
a o-> a : ""o-> ""
a ->o a : ""->o ""
a o->o a : ""o->o ""
a <-> a : ""<-> ""
a o<->o a : ""o<->o""
a x<->x a : ""x<->x""
a ->>o a : ""->>o ""
a -\o a : ""-\o ""
a -\\o a : ""-\\\\o""
a -/o a : ""-/o ""
a -//o a : ""-//o ""
a x->o a : ""x->o ""
@enduml
```
     ┌─────┐           ┌───┐
     │Alice│           │Bob│
     └──┬──┘           └─┬─┘
        │────┐           │  
        │    │ ""-> ""   │  
        │<───┘           │  
        │────┐           │  
        │    │ ""->> ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-\ ""   │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-\\""   │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-/ ""   │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-// ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""->x ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""x-> ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""o-> ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""->o ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""o->o "" │  
        │<───┘           │  
        │────┐           │  
        │    │ ""<-> ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""o<->o"" │  
        │<───┘           │  
        │────┐           │  
        │    │ ""x<->x"" │  
        │<───┘           │  
        │────┐           │  
        │    │ ""->>o "" │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-\o ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-\\o""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-/o ""  │  
        │<───┘           │  
        │────┐           │  
        │    │ ""-//o "" │  
        │<───┘           │  
        │────┐           │  
        │    │ ""x->o "" │  
        │<───┘           │  
     ┌──┴──┐           ┌─┴─┐
     │Alice│           │Bob│
     └─────┘           └───┘

<!-- Page 35 / 550 -->

//1.38.3 Incoming and outgoing messages (with ’[’, ’]’)
-------------------------------------------------------

//1.38.4 Incoming messages (with ’[’)
-------------------------------------

<!-- Page 36 / 550 -->

```uml
@startuml
participant Alice as a
participant Bob as b
[-> b : ""[-> ""
[->> b : ""[->> ""
[-\ b : ""[-\ ""
[-\\ b : ""[-\\\\""
[-/ b : ""[-/ ""
[-// b : ""[-// ""
[->x b : ""[->x ""
[x-> b : ""[x-> ""
[o-> b : ""[o-> ""
[->o b : ""[->o ""
[o->o b : ""[o->o ""
[<-> b : ""[<-> ""
[o<->o b : ""[o<->o""
[x<->x b : ""[x<->x""
[->>o b : ""[->>o ""
[-\o b : ""[-\o ""
[-\\o b : ""[-\\\\o""
[-/o b : ""[-/o ""
[-//o b : ""[-//o ""
[x->o b : ""[x->o ""
@enduml
```

注：需要使用图像格式渲染才能区分箭头样式。

<!-- Page 37 / 550 -->

<!-- Page 38 / 550 -->

1.38.5 Outgoing messages (with ’]’)

```uml
@startuml
participant Alice as a
participant Bob as b
a ->] : ""->] ""
a ->>] : ""->>] ""
a -\] : ""-\] ""
a -\\] : ""-\\\\]""
a -/] : ""-/] ""
a -//] : ""-//] ""
a ->x] : ""->x] ""
a x->] : ""x->] ""
a o->] : ""o->] ""
a ->o] : ""->o] ""
a o->o] : ""o->o] ""
a <->] : ""<->] ""
a o<->o] : ""o<->o]""
a x<->x] : ""x<->x]""
a ->>o] : ""->>o] ""
a -\o] : ""-\o] ""
a -\\o] : ""-\\\\o]""
a -/o] : ""-/o] ""
a -//o] : ""-//o] ""
a x->o] : ""x->o] ""
@enduml
```

<!-- Page 39 / 550 -->

1.38.6 Short incoming and outgoing messages (with ’?’)
1.38.7 Short incoming (with ’?’)

```uml
@startuml
participant Alice as a
participant Bob as b
a -> b : //Long long label//
?-> b : ""?-> ""
?->> b : ""?->> ""
?-\ b : ""?-\ ""
?-\\ b : ""?-\\\\""
?-/ b : ""?-/ ""
?-// b : ""?-// ""
?->x b : ""?->x ""
?x-> b : ""?x-> ""
?o-> b : ""?o-> ""
?->o b : ""?->o ""
?o->o b : ""?o->o ""
?<-> b : ""?<-> ""
?o<->o b : ""?o<->o""
?x<->x b : ""?x<->x""
?->>o b : ""?->>o ""
?-\o b : ""?-\o ""
?-\\o b : ""?-\\\\o ""
?-/o b : ""?-/o ""
?-//o b : ""?-//o ""
?x->o b : ""?x->o ""
@enduml
```

<!-- Page 40 / 550 -->

1.38.8 Short outgoing (with ’?’)

```uml
@startuml
participant Alice as a
participant Bob as b
a -> b : //Long long label//
a ->? : ""->? ""
a ->>? : ""->>? ""
a -\? : ""-\? ""
a -\\? : ""-\\\\?""
a -/? : ""-/? ""
a -//? : ""-//? ""
a ->x? : ""->x? ""
a x->? : ""x->? ""
a o->? : ""o->? ""
a ->o? : ""->o? ""
a o->o? : ""o->o? ""
a <->? : ""<->? ""
a o<->o? : ""o<->o?""
a x<->x? : ""x<->x?""
a ->>o? : ""->>o? ""
a -\o? : ""-\o? ""
a -\\o? : ""-\\\\o?""
a -/o? : ""-/o? ""
a -//o? : ""-//o? ""
a x->o? : ""x->o? ""
@enduml
```

<!-- Page 41 / 550 -->

//1.39 Specific SkinParameter
-----------------------------

//1.39.1 By default
-------------------

```uml
@startuml
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```
     ┌───┐          ┌─────┐
     │Bob│          │Alice│
     └─┬─┘          └──┬──┘
       │    hello      │   
       │──────────────>│   
       │               │   
       │      ok       │   
       │<──────────────│   
     ┌─┴─┐          ┌──┴──┐
     │Bob│          │Alice│
     └───┘          └─────┘

注：图像格式可以看到两竖线为虚线样式。

//1.39.2 LifelineStrategy
-------------------------
• nosolid (by default)


```uml
@startuml
skinparam lifelineStrategy nosolid
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```
     ┌───┐          ┌─────┐
     │Bob│          │Alice│
     └─┬─┘          └──┬──┘
       │    hello      │   
       │──────────────>│   
       │               │   
       │      ok       │   
       │<──────────────│   
     ┌─┴─┐          ┌──┴──┐
     │Bob│          │Alice│
     └───┘          └─────┘

[Ref. QA-9016]

• solid


In order to have solid life line in sequence diagrams, you can use: skinparam lifelineStrategy solid

```uml
@startuml
skinparam lifelineStrategy solid
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```
     ┌───┐          ┌─────┐
     │Bob│          │Alice│
     └─┬─┘          └──┬──┘
       │    hello      │   
       │──────────────>│   
       │               │   
       │      ok       │   
       │<──────────────│   
     ┌─┴─┐          ┌──┴──┐
     │Bob│          │Alice│
     └───┘          └─────┘

[Ref. QA-2794]

//1.39.3 style strictuml
------------------------
To be conform to strict UML (for arrow style: emits triangle rather than sharp arrowheads), you can use:
• skinparam style strictuml

<!-- Page 42 / 550 -->


```uml
@startuml
skinparam style strictuml
Bob -> Alice : hello
Alice -> Bob : ok
@enduml
```
     ┌───┐          ┌─────┐
     │Bob│          │Alice│
     └─┬─┘          └──┬──┘
       │    hello      │   
       │──────────────>│   
       │               │   
       │      ok       │   
       │<──────────────│   
       │               │   
       │               │   

注：图像格式竖线为虚线。

[Ref. QA-1047]

//1.40 Hide unlinked participant
--------------------------------
By default, all participants are displayed.

```uml
@startuml
participant Alice
participant Bob
participant Carol
Alice -> Bob : hello
@enduml
```
     ┌─────┐          ┌───┐          ┌─────┐
     │Alice│          │Bob│          │Carol│
     └──┬──┘          └─┬─┘          └──┬──┘
        │    hello      │               │   
        │──────────────>│               │   
     ┌──┴──┐          ┌─┴─┐          ┌──┴──┐
     │Alice│          │Bob│          │Carol│
     └─────┘          └───┘          └─────┘

But you can hide unlinked participant.

```uml
@startuml
hide unlinked
participant Alice
participant Bob
participant Carol
Alice -> Bob : hello
@enduml
```
     ┌─────┐          ┌───┐
     │Alice│          │Bob│
     └──┬──┘          └─┬─┘
        │    hello      │  
        │──────────────>│  
     ┌──┴──┐          ┌─┴─┐
     │Alice│          │Bob│
     └─────┘          └───┘

[Ref. QA-4247]

//1.41 Color a group message
----------------------------
It is possible to color a group messages:

```uml
@startuml
Alice -> Bob: Authentication Request
alt#Gold #LightBlue Successful case
Bob -> Alice: Authentication Accepted
else #Pink Failure
Bob -> Alice: Authentication Rejected
end
@enduml
```
                    ┌─────┐                   ┌───┐          
                    │Alice│                   │Bob│          
                    └──┬──┘                   └─┬─┘          
                       │Authentication Request  │            
                       │───────────────────────>│            
                       │                        │            
                       │                        │            
          ╔══════╤═════╪════════════════════════╪═══════════╗
          ║ ALT  │  Successful case             │           ║
          ╟──────┘     │                        │           ║
          ║            │Authentication Accepted │           ║
          ║            │<───────────────────────│           ║
          ╠════════════╪════════════════════════╪═══════════╣
          ║ [Failure]  │                        │           ║
          ║            │Authentication Rejected │           ║
          ║            │<───────────────────────│           ║
          ╚════════════╪════════════════════════╪═══════════╝
                    ┌──┴──┐                   ┌─┴─┐          
                    │Alice│                   │Bob│          
                    └─────┘                   └───┘          

<!-- Page 43 / 550 -->

[Ref. QA-4750 and QA-6410]

//1.42 Mainframe
----------------

```uml
@startuml
mainframe This is a **mainframe**
Alice->Bob : Hello
@enduml
```
    ┌───────────────────────┐
    │ This is mainframe ./  │  
    │──────────────────"    │
    │┌─────┐          ┌───┐ │
    ││Alice│          │Bob│ │
    │└──┬──┘          └─┬─┘ │
    │   │    Hello      │   │
    │   │──────────────>│   │
    │┌──┴──┐          ┌─┴─┐ │
    ││Alice│          │Bob│ │
    │└─────┘          └───┘ │
    └───────────────────────┘

注：此外框手工调整，图像格式可以正常呈现 mainframe 外框。

[Ref. QA-4019 and Issue#148]

//1.43 Slanted or odd arrows
----------------------------
You can use the (nn) option (before or after arrow) to make the arrows slanted, where nn is the number
of shift pixels.
[Available only after v1.2022.6beta+]

```uml
@startuml
A ->(10) B: text 10
B ->(10) A: text 10
A ->(10) B: text 10
A (10)<- B: text 10
@enduml
```
     ┌─┐          ┌─┐
     │A│          │B│
     └┬┘          └┬┘
      │  text 10   │ 
      │───────────>│ 
      │            │ 
      │  text 10   │ 
      │<───────────│ 
      │            │ 
      │  text 10   │ 
      │───────────>│ 
      │            │ 
      │  text 10   │ 
      │<───────────│ 
     ┌┴┐          ┌┴┐
     │A│          │B│
     └─┘          └─┘

注：图像格式可以呈现斜向箭头。

<!-- Page 44 / 550 -->


```uml
@startuml
A ->(40) B++: Rq
B -->(20) A--: Rs
@enduml
```
     ┌─┐          ┌─┐
     │A│          │B│
     └┬┘          └┬┘
      │   Rq      ┌┴┐
      │─────────> │ │
      │           └┬┘
      │    Rs      │ 
      │<─ ─ ─ ─ ─ ─│ 
     ┌┴┐          ┌┴┐
     │A│          │B│
     └─┘          └─┘

[Ref. QA-14145]

```uml
@startuml
!pragma teoz true
A ->(50) C: Starts\nwhen 'B' sends
& B ->(25) C: \nBut B's message\n arrives before A's
@enduml
```
     ┌─┐             ┌─┐                  ┌─┐
     │A│             │C│                  │B│
     └┬┘             └┬┘                  └┬┘
      │Starts         │                    │ 
      │when 'B' sends │                    │ 
      │──────────────>│                    │ 
      │               │                    │ 
      │               │                    │ 
      │               │But B's message     │ 
      │               │ arrives before A's │ 
      │               │<───────────────────│ 
     ┌┴┐             ┌┴┐                  ┌┴┐
     │A│             │C│                  │B│
     └─┘             └─┘                  └─┘

[Ref. QA-6684]

<!-- Page 45 / 550 -->

```uml
@startuml
!pragma teoz true
S1 ->(30) S2: msg 1\n
& S2 ->(30) S1: msg 2
note left S1: msg\nS2 to S1
& note right S2: msg\nS1 to S2
@enduml
```
                 ┌──┐          ┌──┐            
                 │S1│          │S2│            
                 └┬─┘          └┬─┘            
                  │    msg 1    │              
                  │             │              
                  │ ────────────>              
                  │             │              
                  │    msg 2    │              
                  │ <────────────              
                  │             │              
      ╔══════════╗│             │              
      ║msg      ░║│             │              
      ║S2 to S1  ║│             │              
      ╚══════════╝│             │              
                  │             │  ╔══════════╗
                  │             │  ║msg      ░║
                  │             │  ║S1 to S2  ║
                 ┌┴─┐          ┌┴─┐╚══════════╝
                 │S1│          │S2│            
                 └──┘          └──┘            

注：图像格式可以呈现交叉斜向箭头，msg 框右上角折角。

[Ref. QA-1072]
<!-- Page 46 / 550 -->

/2 Use Case Diagram
===================

A use case diagram is a visual representation used in software engineering to depict the interactions
between system actors and the system itself. It captures the dynamic behavior of a system by
illustrating its use cases and the roles that interact with them. These diagrams are essential in specifying
the system’s functional requirements and understanding how users will interact with the system. By
providing a high-level view, use case diagrams help stakeholders understand the system’s functionality
and its potential value.

PlantUML offers a unique approach to creating use case diagrams through its text-based language. One
of the primary advantages of using PlantUML is its simplicity and efficiency. Instead of manually
drawing shapes and connections, users can define their diagrams using intuitive and concise textual
descriptions. This not only speeds up the diagram creation process but also ensures consistency and
accuracy. The ability to integrate with various documentation platforms and its wide range of supported
output formats make PlantUML a versatile tool for both developers and non-developers. Lastly, being
open-source, PlantUML boasts a strong community that continually contributes to its improvement
and offers a wealth of resources for users at all levels.

//2.1 Usecases
--------------
Use cases are enclosed using between parentheses (because two parentheses looks like an oval).
You can also use the usecase keyword to define a usecase. And you can define an alias, using the as
keyword. This alias will be used later, when defining relations.

```uml
@startuml
(First usecase)
(Another usecase) as (UC2)
usecase UC3
usecase (Last\nusecase) as UC4
@enduml
```

    ,-------------.  ,---------------.
    |First usecase|  |Another usecase|
    |-------------|  |---------------|
    `-------------'  `---------------'
                                      
                                      
         ,---.  ,-------.             
         |UC3|  |Last   |             
         |---|  |-------|             
         `---'  |       |             
                `-------'             

注：图像格式可以呈现椭圆形状。

//2.2 Actors
------------
The name defining an actor is enclosed between colons.
You can also use the actor keyword to define an actor. An alias can be assigned using the as keyword
and can be used later instead of the actor’s name, e. g. when defining relations.
You can see from the following examples, that the actor definitions are optional.

```uml
@startuml
:First Actor:
:Another\nactor: as Man2
actor Woman3
actor :Last actor: as Person1
@enduml
```
                   ,-------. 
    ,-----------.  |Another| 
    |First Actor|  |-------| 
    |-----------|  |       | 
    `-----------'  `-------' 
                             
                             
      ,------.   ,----------.
      |Woman3|   |Last actor|
      |------|   |----------|
      `------'   `----------'

注：图像格式可以呈现 Actor 公仔图案。

<!-- Page 47 / 550 -->

//2.3 Change Actor style
------------------------

You can change the actor style from stick man (by default) to:
• an awesome man with the skinparam actorStyle awesome command;

• a hollow man with the skinparam actorStyle hollow command.


//2.3.1 Stick man (by default)
------------------------------

```uml
@startuml
:User: --> (Use)
"Main Admin" as Admin
"Use the application" as (Use)
Admin --> (Admin the application)
@enduml
```
           ,----.                ,----------.     
           |User|                |Main Admin|     
           |----|                |----------|     
           `----'                `----------'     
              |                        |          
              |                        |          
    ,-------------------.  ,---------------------.
    |Use the application|  |Admin the application|
    |-------------------|  |---------------------|
    `-------------------'  `---------------------'

//2.3.2 Awesome man
-------------------

```uml
@startuml
skinparam actorStyle awesome
:User: --> (Use)
"Main Admin" as Admin
"Use the application" as (Use)
Admin --> (Admin the application)
@enduml
```
           ,----.                ,----------.     
           |User|                |Main Admin|     
           |----|                |----------|     
           `----'                `----------'     
              |                        |          
              |                        |          
    ,-------------------.  ,---------------------.
    |Use the application|  |Admin the application|
    |-------------------|  |---------------------|
    `-------------------'  `---------------------'

<!-- Page 48 / 550 -->

[Ref. QA-10493]

//2.3.3 Hollow man
------------------

```uml
@startuml
skinparam actorStyle Hollow
:User: --> (Use)
"Main Admin" as Admin
"Use the application" as (Use)
Admin --> (Admin the application)
@enduml
```
           ,----.                ,----------.     
           |User|                |Main Admin|     
           |----|                |----------|     
           `----'                `----------'     
              |                        |          
              |                        |          
    ,-------------------.  ,---------------------.
    |Use the application|  |Admin the application|
    |-------------------|  |---------------------|
    `-------------------'  `---------------------'

[Ref. PR#396]

//2.4 Usecases description
--------------------------
If you want to have a description spanning several lines, you can use quotes.
You can also use the following separators:

• -- (dashes)
• .. (periods)
• == (equals)
• __ (underscores)

By using them pairwise and enclosing text between them, you can created separators with titles.

```uml
@startuml
usecase UC1 as "You can use
several lines to define your usecase.
You can also use separators.
--
Several separators are possible.
==
And you can add titles:
..Conclusion..
This allows large description."
@enduml
```
    ,-------------------------------------.
    |You can use                          |
    |-------------------------------------|
    |You can also use separators.         |
    |--                                   |
    |Several separators are possible.     |
    |==                                   |
    |And you can add titles:              |
    |..Conclusion..                       |
    |This allows large description.       |
    |                                     |
    `-------------------------------------'

<!-- Page 49 / 550 -->

//2.5 Use package
-----------------

You can use packages to group actors or use cases.

```uml
@startuml
left to right direction
actor Guest as g
package Professional {
actor Chef as c
actor "Food Critic" as fc
}
package Restaurant {
usecase "Eat Food" as UC1
usecase "Pay for Food" as UC2
usecase "Drink" as UC3
usecase "Review" as UC4
}
fc --> UC4
g --> UC1
g --> UC2
g --> UC3
@enduml
```
                    ,-----.    ,----.    ,-----------.
                    |Guest|    |Chef|    |Food Critic|
                    |-----|    |----|    |-----------|
                    `-----'    `----'    `-----------'
                       |                       |      
                       |                       |      
    ,--------.  ,------------.   ,-----.   ,------.   
    |Eat Food|  |Pay for Food|   |Drink|   |Review|   
    |--------|  |------------|   |-----|   |------|   
    `--------'  `------------'   `-----'   `------'   

注：图像格式可以呈现分组，Professional 和 Restaurant 外框。

You can use rectangle to change the display of the package.

```uml
@startuml
left to right direction
actor "Food Critic" as fc
rectangle Restaurant {
usecase "Eat Food" as UC1
usecase "Pay for Food" as UC2
usecase "Drink" as UC3
}
fc --> UC1
fc --> UC2
fc --> UC3
@enduml
```
                 ,-----------.          
                 |Food Critic|          
                 |-----------|          
                 `-----------'          
                       |                
                       |                
    ,--------.  ,------------.   ,-----.
    |Eat Food|  |Pay for Food|   |Drink|
    |--------|  |------------|   |-----|
    `--------'  `------------'   `-----'

注：图像格式可以呈现分组，Restaurant 外框。

<!-- Page 50 / 550 -->

//2.6 Basic example
-------------------

To link actors and use cases, the arrow --> is used.
The more dashes - in the arrow, the longer the arrow. You can add a label on the arrow, by adding a :
character in the arrow definition.
In this example, you see that User has not been defined before, and is used as an actor.

```uml
@startuml
User -> (Start)
User --> (Use the application) : A small label
:Main Admin: ---> (Use the application) : This is\nyet another\nlabel
@enduml
```
                  ,----------.
                  |Main Admin|
                  |----------|
                  `----------'
                              
                              
    ,----.  ,-----.           
    |User|  |Start|           
    |----|--|-----|           
    `----'  `-----'           
                              
     ,-------------------.    
     |Use the application|    
     |-------------------|    
     `-------------------'    

注：图像格式可以呈曲线箭头。

//2.7 Extension
---------------
If one actor/use case extends another one, you can use the symbol <|--.

```uml
@startuml
:Main Admin: as Admin
(Use the application) as (Use)
User <|-- Admin
(Start) <|-- (Use)
@enduml
```
       ,----.            ,-----.       
       |User|            |Start|       
       |----|            |-----|       
       `----'            `-----'       
          |                  |         
          |                  |         
    ,----------.  ,-------------------.
    |Main Admin|  |Use the application|
    |----------|  |-------------------|
    `----------'  `-------------------'

注：图像格式可以呈现三角线框箭头。

<!-- Page 51 / 550 -->

//2.8 Using notes
-----------------

You can use the note left of , note right of , note top of , note bottom of keywords to define
notes related to a single object.
A note can be also define alone with the note keywords, then linked to other objects using the .. symbol.

```uml
@startuml
:Main Admin: as Admin
(Use the application) as (Use)
User -> (Start)
User --> (Use)
Admin ---> (Use)
note right of Admin : This is an example.
note right of (Use)
A note can also
be on several lines
end note
note "This note is connected\nto several objects." as N2
(Start) .. N2
N2 .. (Use)
@enduml
```
    ,----------.  ,-------------------.   ,----.   ,-----.               
    |Main Admin|  |This is an example.|   |User|   |Start|               
    |----------|--|-------------------|   |----|---|-----|               
    `----------'  `-------------------'   `----'   `-----'               
                                                       |                 
                                                       |                 
                                           ,----------------------.      
                                           |This note is connected|      
                                           |----------------------|      
                                           |                      |      
                                           `----------------------'      
                                                                         
                                                    ,-------------------.
                            ,-------------------.   |A note can also    |
                            |Use the application|   |-------------------|
                            |-------------------|---|                   |
                            `-------------------'   `-------------------'

注：图像格式可以呈现 note 多行便签内容。

//2.9 Stereotypes
-----------------
You can add stereotypes while defining actors and use cases using << and >>.
<!-- Page 52 / 550 -->


```uml
@startuml
User << Human >>
:Main Database: as MySql << Application >>
(Start) << One Shot >>
(Use the application) as (Use) << Main >>
User -> (Start)
User --> (Use)
MySql --> (Use)
@enduml
```
    ,----.  ,-----.   ,-------------.
    |User|  |Start|   |Main Database|
    |----|--|-----|   |-------------|
    `----'  `-----'   `-------------'
                                     
                                     
        ,-------------------.        
        |Use the application|        
        |-------------------|        
        `-------------------'        

//2.10 Changing arrows direction
--------------------------------

By default, links between classes have two dashes -- and are vertically oriented. It is possible to use
horizontal link by putting a single dash (or dot) like this:

```uml
@startuml
:user: --> (Use case 1)
:user: -> (Use case 2)
@enduml
```
       ,----.  ,----------.
       |user|  |Use case 2|
       |----|--|----------|
       `----'  `----------'
          |                
          |                
    ,----------.           
    |Use case 1|           
    |----------|           
    `----------'           

You can also change directions by reversing the link:

```uml
@startuml
(Use case 1) <.. :user:
(Use case 2) <- :user:
@enduml
```
               ,----------.
               |Use case 1|
               |----------|
               `----------'
                     |     
                     |     
    ,----------.  ,----.   
    |Use case 2|  |user|   
    |----------|--|----|   
    `----------'  `----'   

<!-- Page 53 / 550 -->

It is also possible to change arrow direction by adding left, right, up or down keywords inside the arrow:

```uml
@startuml
:user: -left-> (dummyLeft)
:user: -right-> (dummyRight)
:user: -up-> (dummyUp)
:user: -down-> (dummyDown)
@enduml
```
                ,-------.             
                |dummyUp|             
                |-------|             
                `-------'             
                    |                 
                    |                 
    ,---------.  ,----.   ,----------.
    |dummyLeft|  |user|   |dummyRight|
    |---------|--|----|---|----------|
    `---------'  `----'   `----------'
                    |                 
               ,---------.            
               |dummyDown|            
               |---------|            
               `---------'            

You can shorten the arrow by using only the first character of the direction (for example, -d- instead of
-down-) or the two first characters (-do-).
Please note that you should not abuse this functionality : Graphviz gives usually good results without
tweaking.
And with the left to right direction parameter:

```uml
@startuml
left to right direction
:user: -left-> (dummyLeft)
:user: -right-> (dummyRight)
:user: -up-> (dummyUp)
:user: -down-> (dummyDown)
@enduml
```
                ,-------.             
                |dummyUp|             
                |-------|             
                `-------'             
                    |                 
                    |                 
    ,---------.  ,----.   ,----------.
    |dummyLeft|  |user|   |dummyRight|
    |---------|--|----|---|----------|
    `---------'  `----'   `----------'
                    |                 
               ,---------.            
               |dummyDown|            
               |---------|            
               `---------'            

//2.11 Splitting diagrams
-------------------------
The newpage keywords to split your diagram into several pages or images.

```uml
@startuml
:actor1: --> (Usecase1)
newpage
:actor2: --> (Usecase2)
@enduml
```
             ,------. 
             |actor1| 
             |------| 
             `------' 
                 |    
                 |    
            ,--------.
            |Usecase1|
            |--------|
            `--------'

<!-- Page 54 / 550 -->

//2.12 Left to right direction
------------------------------

The general default behavior when building diagram is top to bottom.

```uml
@startuml
'default
top to bottom direction
user1 --> (Usecase 1)
user2 --> (Usecase 2)
@enduml
```
      ,-----.      ,-----.  
      |user1|      |user2|  
      |-----|      |-----|  
      `-----'      `-----'  
         |             |    
         |             |    
    ,---------.  ,---------.
    |Usecase 1|  |Usecase 2|
    |---------|  |---------|
    `---------'  `---------'

You may change to left to right using the left to right direction command. The result is often
better with this direction.

```uml
@startuml
left to right direction
user1 --> (Usecase 1)
user2 --> (Usecase 2)
@enduml
```
      ,-----.      ,-----.  
      |user1|      |user2|  
      |-----|      |-----|  
      `-----'      `-----'  
         |             |    
         |             |    
    ,---------.  ,---------.
    |Usecase 1|  |Usecase 2|
    |---------|  |---------|
    `---------'  `---------'

<!-- Page 55 / 550 -->

//2.13 Skinparam
----------------
You can use the skinparam command to change colors and fonts for the drawing.
You can use this command :

• In the diagram definition, like any other commands,


• In an included file,


• In a configuration file, provided in the command line or the ANT task.


You can define specific color and fonts for stereotyped actors and usecases.

```uml
@startuml
skinparam handwritten true
skinparam usecase {
BackgroundColor DarkSeaGreen
BorderColor DarkSlateGray
BackgroundColor<< Main >> YellowGreen
BorderColor<< Main >> YellowGreen
ArrowColor Olive
ActorBorderColor black
ActorFontName Courier
ActorBackgroundColor<< Human >> Gold
}
User << Human >>
:Main Database: as MySql << Application >>
(Start) << One Shot >>
(Use the application) as (Use) << Main >>
User -> (Start)
User --> (Use)
MySql --> (Use)
@enduml
```
        ,----.  ,-----.   ,-------------.
        |User|  |Start|   |Main Database|
        |----|--|-----|   |-------------|
        `----'  `-----'   `-------------'
                                         
                                         
            ,-------------------.        
            |Use the application|        
            |-------------------|        
            `-------------------'        

注：图像格式可以展示色彩与椭圆、公仔形状。

//2.14 Complete example
-----------------------

```uml
@startuml
left to right direction
skinparam packageStyle rectangle
actor customer
actor clerk
rectangle checkout {
customer -- (checkout)
(checkout) .> (payment) : include
(help) .> (checkout) : extends
(checkout) -- clerk
}
@enduml
```

注：字符格式无法绘制，可以绘制图像格式。

<!-- Page 56 / 550 -->

//2.15 Business Use Case
------------------------

You can add / to make Business Use Case.

//2.15.1 Business Usecase
-------------------------

```uml
@startuml
(First usecase)/
(Another usecase)/ as (UC2)
usecase/ UC3
usecase/ (Last\nusecase) as UC4
@enduml
```
    ,-------------.  ,---------------.
    |First usecase|  |Another usecase|
    |-------------|  |---------------|
    `-------------'  `---------------'
                                      
                                      
         ,---.  ,-------.             
         |UC3|  |Last   |             
         |---|  |-------|             
         `---'  |       |             
                `-------'             

//2.15.2 Business Actor
-----------------------

```uml
@startuml
:First Actor:/
:Another\nactor:/ as Man2
actor/ Woman3
actor/ :Last actor: as Person1
@enduml
```
                   ,-------. 
    ,-----------.  |Another| 
    |First Actor|  |-------| 
    |-----------|  |       | 
    `-----------'  `-------' 
                             
                             
      ,------.   ,----------.
      |Woman3|   |Last actor|
      |------|   |----------|
      `------'   `----------'

<!-- Page 57 / 550 -->

[Ref. QA-12179]

//2.16 Change arrow color and style (inline style)
--------------------------------------------------
You can change the color or style of individual arrows using the inline following notation:
• #color;line.[bold|dashed|dotted];text:color


```uml
@startuml
actor foo
foo --> (bar) : normal
foo --> (bar1) #line:red;line.bold;text:red : red bold
foo --> (bar2) #green;line.dashed;text:green : green dashed
foo --> (bar3) #blue;line.dotted;text:blue : blue dotted
@enduml
```
                ,---.              
                |foo|              
                |---|              
                `---'              
                                   
                                   
    ,---.  ,----.   ,----.   ,----.
    |bar|  |bar1|   |bar2|   |bar3|
    |---|  |----|   |----|   |----|
    `---'  `----'   `----'   `----'

[Ref. QA-3770 and QA-3816] [See similar feature on deployment-diagram or class diagram]

//2.17 Change element color and style (inline style)
----------------------------------------------------
You can change the color or style of individual element using the following notation:
• #[color|back:color];line:color;line.[bold|dashed|dotted];text:color


```uml
@startuml
actor a
actor b #pink;line:red;line.bold;text:red
usecase c #palegreen;line:green;line.dashed;text:green
usecase d #aliceblue;line:blue;line.dotted;text:blue
@enduml
```
    ,-.  ,-.
    |a|  |b|
    |-|  |-|
    `-'  `-'
            
            
    ,-.  ,-.
    |c|  |d|
    |-|  |-|
    `-'  `-'

<!-- Page 58 / 550 -->

[Ref. QA-5340 and adapted from QA-6852]

//2.18 Display JSON Data on Usecase diagram
-------------------------------------------

//2.18.1 Simple example
-----------------------

```uml
@startuml
allowmixing
actor Actor
usecase Usecase
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

注：字符格式无法绘制，可以绘制图像格式。

[Ref. QA-15481]

For another example, see on JSON page.

<!-- Page 59 / 550 -->

/3 Class Diagram
================

Class diagrams are designed using a syntax that mirrors those traditionally employed in programming
languages. This resemblance fosters a familiar environment for developers, thereby facilitating an easier
and more intuitive diagram creation process.

This design approach is not only succinct but also enables the creation of representations that are both
concise and expressive. Moreover, it allows for the portrayal of relationships between classes through a
syntax that echoes that of sequence diagrams, paving the way for a fluid and insightful depiction of class
interactions.

Beyond structural and relational representations, the class diagram syntax supports further enrichments
such as the inclusion of notes and the application of colors, empowering users to create diagrams that are
both informative and visually appealing.

You can learn more about some of the common commands in PlantUML to enhance your diagram creation
experience.

//3.1 Declaring element
-----------------------

```uml
@startuml
abstract abstract
abstract class "abstract class"
annotation annotation
circle circle
() circle_short_form
class class
class class_stereo <<stereotype>>
diamond diamond
<> diamond_short_form
entity entity
enum enum
exception exception
interface interface
metaclass metaclass
protocol protocol
stereotype stereotype
struct struct
@enduml
```

注：字符格式无法绘制，可以绘制图像格式。

<!-- Page 60 / 550 -->

[Ref. for protocol and struct: GH-1028, for exception: QA-16258]

//3.2 Relations between classes
-------------------------------
Relations between classes are defined using the following symbols :

|     Type    | Symbol | Drawing |
|-------------|--------|---------|
| Extension   | <--    | ◁──     |
| Composition | *--    | ◇──     |
| Aggregation | o--    | ◆──     |

It is possible to replace -- by .. to have a dotted line.
Knowing those rules, it is possible to draw the following drawings:

```uml
@startuml
Class01 <|-- Class02
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 -- Class10
@enduml
```
    ,-------.  ,-------.   ,-------.   ,-------.   ,-------.
    |Class01|  |Class03|   |Class05|   |Class07|   |Class09|
    |-------|  |-------|   |-------|   |-------|   |-------|
    `-------'  `-------'   `-------'   `-------'   `-------'
        |           |           |          |           |    
        |           |           |          |           |    
    ,-------.  ,-------.   ,-------.   ,-------.   ,-------.
    |Class02|  |Class04|   |Class06|   |Class08|   |Class10|
    |-------|  |-------|   |-------|   |-------|   |-------|
    `-------'  `-------'   `-------'   `-------'   `-------'

注：字符格式无法呈现箭头。

```uml
@startuml
Class11 <|.. Class12
Class13 --> Class14
Class15 ..> Class16
Class17 ..|> Class18
Class19 <--* Class20
@enduml
```


```uml
@startuml
Class21 #-- Class22
Class23 x-- Class24
Class25 }-- Class26
Class27 +-- Class28
Class29 ^-- Class30
@enduml
```

<!-- Page 61 / 550 -->

//3.3 Label on relations
------------------------

It is possible to add a label on the relation, using :, followed by the text of the label.
For cardinality, you can use double-quotes "" on each side of the relation.

```uml
@startuml
Class01 "1" *-- "many" Class02 : contains
Class03 o-- Class04 : aggregation
Class05 --> "1" Class06
@enduml
```

You can add an extra arrow pointing at one object showing which object acts on the other object, using
< or > at the begin or at the end of the label.

```uml
@startuml
class Car
Driver - Car : drives >
Car *- Wheel : have 4 >
Car -- Person : < owns
@enduml
```
    ,------.  ,---.   ,-----.
    |Driver|  |Car|   |Wheel|
    |------|--|---|---|-----|
    `------'  `---'   `-----'
                 |           
                 |           
             ,------.        
             |Person|        
             |------|        
             `------'        

//3.4 Using non-letters in element names and relation labels
--------------------------------------------------------
If you want to use non-letters in the class (or enum...) display name, you can either :
<!-- Page 62 / 550 -->

• Use the as keyword in the class definition to assign an alias


• Put quotes "" around the class name


```uml
@startuml
class "This is my class" as class1
class class2 as "It works this way too"
class2 *-- "foo/dummy" : use
@enduml
```
    ,----------------.  ,---------------------.
    |This is my class|  |It works this way too|
    |----------------|  |---------------------|
    `----------------'  `---------------------'
                                    |          
                                    |          
                              ,---------.      
                              |foo/dummy|      
                              |---------|      
                              `---------'      

If an alias is assigned to an element, the rest of the file must refer to the element by the alias instead of
the name.

//3.4.1 Starting names with $
-----------------------------

Note that names starting with $ cannot be hidden or removed later, because hide and remove command
will consider the name a $tag instead of a component name. To later remove such elements they must
have an alias or must be tagged.

```uml
@startuml
class $C1
class $C2 $C2
class "$C2" as dollarC2
remove $C1
remove $C2
remove dollarC2
@enduml
```
            ,---.  ,---.
            |$C1|  |$C2|
            |---|  |---|
            `---'  `---'
                        
                        
            ,---.       
            |$C2|       
            |---|       
            `---'       

Also note that names starting with $ are valid, but to assign an alias to such element the name must be
put between quotes "".

//3.5 Adding methods
--------------------
To declare fields and methods, you can use the symbol : followed by the field’s or method’s name.
The system checks for parenthesis to choose between methods and fields.

```uml
@startuml
Object <|-- ArrayList
Object : equals()
ArrayList : Object[] elementData
ArrayList : size()
@enduml
```
              ,--------.      
              |Object  |      
              |--------|      
              |equals()|      
              `--------'      
                   |          
                   |          
        ,--------------------.
        |ArrayList           |
        |--------------------|
        |Object[] elementData|
        |size()              |
        `--------------------'

<!-- Page 63 / 550 -->

It is also possible to group between brackets {} all fields and methods.
Note that the syntax is highly flexible about type/name order.

```uml
@startuml
class Dummy {
String data
void methods()
}
class Flight {
flightNumber : Integer
departureTime : Date
}
@enduml
```
        ,--------------.  ,----------------------.
        |Dummy         |  |Flight                |
        |--------------|  |----------------------|
        |String data   |  |flightNumber : Integer|
        |void methods()|  |departureTime : Date  |
        `--------------'  `----------------------'

You can use {field} and {method} modifiers to override default behaviour of the parser about fields
and methods.

```uml
@startuml
class Dummy {
{field} A field (despite parentheses)
{method} Some method
}
@enduml
```
        ,-------------------------------------.
        |Dummy                                |
        |-------------------------------------|
        |{field} A field (despite parentheses)|
        |{method} Some method                 |
        `-------------------------------------'

<!-- Page 64 / 550 -->

//3.6 Defining visibility
-------------------------
When you define methods or fields, you can use characters to define the visibility of the corresponding
item:

| Character | Icon for field | Icon for method |    Visibility   |
|-----------|----------------|-----------------|-----------------|
| -         | ⬜              | 🟥               | private         |
| #         |                |                 | protected       |
| ~         |                |                 | package private |
| +         | ⚪              | 🟢               | public          |

注：参考图像，无法用符号表示各个 Icon。

```uml
@startuml
class Dummy {
-field1
#field2
~method1()
+method2()
}
@enduml
```
        ,----------.
        |Dummy     |
        |----------|
        |-field1   |
        |#field2   |
        |~method1()|
        |+method2()|
        `----------'

You can turn off this feature using the skinparam classAttributeIconSize 0 command :

```uml
@startuml
skinparam classAttributeIconSize 0
class Dummy {
-field1
#field2
~method1()
+method2()
}
@enduml
```
        ,----------.
        |Dummy     |
        |----------|
        |-field1   |
        |#field2   |
        |~method1()|
        |+method2()|
        `----------'

Visibility indicators are optional and can be ommitted individualy without turning off the icons globally
using skinparam classAttributeIconSize 0.

```uml
@startuml
class Dummy {
field1
field2
method1()
method2()
}
@enduml
```
        ,---------.
        |Dummy    |
        |---------|
        |field1   |
        |field2   |
        |method1()|
        |method2()|
        `---------'

In such case if you’d like to use methods or fields that start with -, #, ~ or + characters such as a destructor
in some languages for Dummy class (), escape the first character with a \ character:
<!-- Page 65 / 550 -->


```uml
@startuml
class Dummy {
field1
\~Dummy()
method1()
}
@enduml
```
        ,---------.
        |Dummy    |
        |---------|
        |field1   |
        |Dummy()  |
        |method1()|
        `---------'

//3.7 Abstract and Static
-------------------------

You can define static or abstract methods or fields using the {static} or {abstract} modifier.
These modifiers can be used at the start or at the end of the line. You can also use {classifier} instead
of {static}.

```uml
@startuml
class Dummy {
{static} String id
{abstract} void methods()
}
@enduml
```

<!-- Page 66 / 550 -->

//3.8 Advanced class body
-------------------------
By default, methods and fields are automatically regrouped by PlantUML. You can use separators to
define your own way of ordering fields and methods. The following separators are possible : -- .. == __.
You can also use titles within the separators:

```uml
@startuml
class Foo1 {
You can use
several lines
..
as you want
and group
==
things together.
__
You can have as many groups
as you want
--
End of class
}
class User {
.. Simple Getter ..
+ getName()
+ getAddress()
.. Some setter ..
+ setName()
__ private data __
int age
-- encrypted --
String password
}
@enduml
```
        ,---------------------------.                       
        |Foo1                       |                       
        |---------------------------|  ,-------------------.
        |You can use                |  |User               |
        |several lines              |  |-------------------|
        |..                         |  |.. Simple Getter ..|
        |as you want                |  |+ getName()        |
        |and group                  |  |+ getAddress()     |
        |==                         |  |.. Some setter ..  |
        |things together.           |  |+ setName()        |
        |__                         |  |__ private data __ |
        |You can have as many groups|  |int age            |
        |as you want                |  |-- encrypted --    |
        |--                         |  |String password    |
        |End of class               |  `-------------------'
        `---------------------------'                       

//3.9 Notes and stereotypes
---------------------------
Stereotypes are defined with the class keyword, << and >>.
You can also define notes using note left of , note right of , note top of , note bottom of keywords.
You can also define a note on the last defined class using note left, note right, note top, note
bottom.

A note can be also define alone with the note keywords, then linked to other objects using the .. symbol.

```uml
@startuml
class Object << general >>
Object <|--- ArrayList
note top of Object : In java, every class\nextends this one.
note "This is a floating note" as N1
note "This note is connected\nto several objects." as N2
Object .. N2
N2 .. ArrayList
class Foo
note left: On last defined class
@enduml
```
    ,--------------------.                                                             
    |In java, every class|  ,-----------------------.   ,---------------------.   ,---.
    |--------------------|  |This is a floating note|   |On last defined class|   |Foo|
    |                    |  |-----------------------|   |---------------------|---|---|
    `--------------------'  `-----------------------'   `---------------------'   `---'
               |                                                                       
               |                                                                       
           ,------.                                                                    
           |Object|                                                                    
           |------|                                                                    
           `------'                                                                    
                                                                                       
         | ,----------------------.                                                    
         | |This note is connected|                                                    
         | |----------------------|                                                    
         | |                      |                                                    
         | `----------------------'                                                    
                                                                                       
                                                                                       
         ,---------.                                                                   
         |ArrayList|                                                                   
         |---------|                                                                   
         `---------'                                                                   

注：字符格式不能整完呈现类型关系。

<!-- Page 67 / 550 -->

//3.10 More on notes
--------------------

It is also possible to use few HTML tags (See Creole expression) like :

    • <b>
    • <u>
    • <i>
    • <s>, <del>, <strike>
    • <font color="#AAAAAA"> or <font color="colorName">
    • <color:#AAAAAA> or <color:colorName>
    • <size:nn> to change font size
    • <img src="file"> or <img:file>: the file must be accessible by the filesystem

You can also have a note on several lines.
You can also define a note on the last defined class using note left, note right, note top, note
bottom.

```uml
@startuml
class Foo
note left: On last defined class
note top of Foo
In java, <size:18>every</size> <u>class</u>
<b>extends</b>
<i>this</i> one.
end note
note as N1
This note is <u>also</u>
<b><color:royalBlue>on several</color>
<s>words</s> lines
And this is hosted by <img:sourceforge.jpg>
end note
<!-- Page 68 / 550 -->

@enduml
```

//3.11 Note on field (field, attribute, member) or method
---------------------------------------------------------
It is possible to add a note on field (field, attribute, member) or on method.

//3.11.1 Constraint
-------------------

• This cannot be used with top or bottom (only left and right are implemented)


• This cannot be used with namespaceSeparator ::


//3.11.2 Note on field or method
--------------------------------

```uml
@startuml
class A {
{static} int counter
+void {abstract} start(int timeout)
}
note right of A::counter
This member is annotated
end note
note right of A::start
This method is now explained in a UML note
end note
@enduml
```
    ,-----------------------------------.     
    |A                                  |  ,-.
    |-----------------------------------|  | |
    |{static} int counter               |  |-|
    |+void {abstract} start(int timeout)|  `-'
    `-----------------------------------'     

//3.11.3 Note on method with the same name
------------------------------------------

```uml
@startuml
class A {
{static} int counter
+void {abstract} start(int timeoutms)
+void {abstract} start(Duration timeout)
}
note left of A::counter
This member is annotated
end note
note right of A::"start(int timeoutms)"
This method with int
end note
note right of A::"start(Duration timeout)"
This method with Duration
end note
@enduml
```
         ,----------------------------------------.      
         |A                                       |      
    ,-.  |----------------------------------------|   ,-.
    | |  |{static} int counter                    |   | |
    |-|  |+void {abstract} start(int timeoutms)   |   |-|
    `-'  |+void {abstract} start(Duration timeout)|   `-'
         `----------------------------------------'      

注：字符格式不能整完呈现类型关系，丢失便签内容。

<!-- Page 69 / 550 -->

[Ref. QA-3474 and QA-5835]

//3.12 Note on links
--------------------
It is possible to add a note on a link, just after the link definition, using note on link.
You can also use note left on link, note right on link, note top on link, note bottom on link
if you want to change the relative position of the note with the label.

```uml
@startuml
class Dummy
Dummy --> Foo : A link
note on link #red: note that is red
Dummy --> Foo2 : Another link
note right on link #blue
this is my note on right link
and in blue
end note
@enduml
```

//3.13 Abstract class and interface
-----------------------------------
You can declare a class as abstract using abstract or abstract class keywords.
The class will be printed in italic.
You can use the interface, annotation and enum keywords too.

```uml
@startuml
abstract class AbstractList
abstract AbstractCollection
interface List
interface Collection
List <|-- AbstractList
Collection <|-- AbstractCollection
<!-- Page 70 / 550 -->

Collection <|- List
AbstractCollection <|- AbstractList
AbstractList <|-- ArrayList
class ArrayList {
Object[] elementData
size()
}
enum TimeUnit {
DAYS
HOURS
MINUTES
}
annotation SuppressWarnings
annotation Annotation {
annotation with members
String foo()
String bar()
}
@enduml
```

[Ref. ’Annotation with members’ Issue#458]

//3.14 Hide attributes, methods...
----------------------------------
You can parameterize the display of classes using the hide/show command.
The basic command is: hide empty members. This command will hide attributes or methods if they are
empty.
Instead of empty members, you can use:
• empty fields or empty attributes for empty fields,

<!-- Page 71 / 550 -->

• empty methods for empty methods,

• fields or attributes which will hide fields, even if they are described,

• methods which will hide methods, even if they are described,

• members which will hide fields and methods, even if they are described,

• circle for the circled character in front of class name,

• stereotype for the stereotype.

You can also provide, just after the hide or show keyword:
• class for all classes,

• interface for all interfaces,

• enum for all enums,

• <<foo1>> for classes which are stereotyped with foo1,

• an existing class name.

You can use several show/hide commands to define rules and exceptions.

```uml
@startuml
class Dummy1 {
+myMethods()
}
class Dummy2 {
+hiddenMethod()
}
class Dummy3 <<Serializable>> {
String name
}
hide members
hide <<Serializable>> circle
show Dummy1 methods
show <<Serializable>> fields
@enduml
```

//3.15 Hide classes
-------------------
You can also use the show/hide commands to hide classes.
This may be useful if you define a large !included file, and if you want to hide some classes after file
inclusion.
<!-- Page 72 / 550 -->


```uml
@startuml
class Foo1
class Foo2
Foo2 *-- Foo1
hide Foo2
@enduml
```

//3.16 Remove classes
---------------------

You can also use the remove commands to remove classes.
This may be useful if you define a large !included file, and if you want to remove some classes after file
inclusion.

```uml
@startuml
class Foo1
class Foo2
Foo2 *-- Foo1
remove Foo2
@enduml
```

//3.17 Hide, Remove or Restore tagged element or wildcard
--------------------------------------------------------
You can put $tags (using $) on elements, then remove, hide or restore components either individually
or by tags.
By default, all components are displayed:

```uml
@startuml
class C1 $tag13
enum E1
interface I1 $tag13
C1 -- I1
@enduml
```

<!-- Page 73 / 550 -->

But you can:
• hide $tag13 components:


```uml
@startuml
class C1 $tag13
enum E1
interface I1 $tag13
C1 -- I1
hide $tag13
@enduml
```

• or remove $tag13 components:


```uml
@startuml
class C1 $tag13
enum E1
interface I1 $tag13
C1 -- I1
remove $tag13
@enduml
```

• or remove $tag13 and restore $tag1 components:


```uml
@startuml
class C1 $tag13 $tag1
enum E1
interface I1 $tag13
C1 -- I1
remove $tag13
restore $tag1
@enduml
```

<!-- Page 74 / 550 -->

• or remove * and restore $tag1 components:


```uml
@startuml
class C1 $tag13 $tag1
enum E1
interface I1 $tag13
C1 -- I1
remove *
restore $tag1
@enduml
```

//3.18 Hide or Remove unlinked class
------------------------------------

By default, all classes are displayed:

```uml
@startuml
class C1
class C2
class C3
C1 -- C2
@enduml
```

But you can:
• hide @unlinked classes:


```uml
@startuml
class C1
class C2
class C3
C1 -- C2
hide @unlinked
@enduml
```

• or remove @unlinked classes:


```uml
@startuml
class C1
class C2
class C3
<!-- Page 75 / 550 -->

C1 -- C2
remove @unlinked
@enduml
```

[Adapted from QA-11052]

//3.19 Use generics
-------------------

You can also use bracket < and > to define generics usage in a class.

```uml
@startuml
class Foo<? extends Element> {
int size()
}
Foo *- Element
@enduml
```

It is possible to disable this drawing using skinparam genericDisplay old command.

//3.20 Specific Spot
--------------------
Usually, a spotted character (C, I, E or A) is used for classes, interface, enum and abstract classes.
But you can define your own spot for a class when you define the stereotype, adding a single character
and a color, like in this example:

```uml
@startuml
class System << (S,#FF7700) Singleton >>
class Date << (D,orchid) >>
@enduml
```

//3.21 Packages
---------------
You can define a package using the package keyword, and optionally declare a background color for your
package (Using a html color code or name).
Note that package definitions can be nested.

```uml
@startuml
<!-- Page 76 / 550 -->

package "Classic Collections" #DDDDDD {
Object <|-- ArrayList
}
package com.plantuml {
Object <|-- Demo1
Demo1 *- Demo2
}
@enduml
```

//3.22 Packages style
---------------------
There are different styles available for packages.
You can specify them either by setting a default style with the command : skinparam packageStyle,
or by using a stereotype on the package:

```uml
@startuml
scale 750 width
package foo1 <<Node>> {
class Class1
}
package foo2 <<Rectangle>> {
class Class2
}
package foo3 <<Folder>> {
class Class3
}
package foo4 <<Frame>> {
class Class4
}
package foo5 <<Cloud>> {
class Class5
}
package foo6 <<Database>> {
class Class6
}
@enduml
```

<!-- Page 77 / 550 -->

You can also define links between packages, like in the following example:

```uml
@startuml
skinparam packageStyle rectangle
package foo1.foo2 {
}
package foo1.foo2.foo3 {
class Object
}
foo1.foo2 +-- foo1.foo2.foo3
@enduml
```

//3.23 Namespaces
-----------------
Starting with version 1.2023.2 (which is online as a beta), PlantUML handles differently namespaces and
packages.
There won’t be any difference between namespaces and packages anymore: both keywords are now
synonymous.

//3.24 Automatic package creation
---------------------------------
You can define another separator (other than the dot) using the command : set separator ???.

```uml
@startuml
set separator ::
class X1::X2::foo {
some info
}
<!-- Page 78 / 550 -->

@enduml
```

You can disable automatic namespace creation using the command set separator none.

```uml
@startuml
set separator none
class X1.X2.foo {
some info
}
@enduml
```

//3.25 Lollipop interface
-------------------------
You can also define lollipops interface on classes, using the following syntax:
• bar ()- foo

• bar ()-- foo

• foo -() bar


```uml
@startuml
class foo
bar ()- foo
@enduml
```

//3.26 Changing arrows orientation
----------------------------------

By default, links between classes have two dashes -- and are vertically oriented. It is possible to use
horizontal link by putting a single dash (or dot) like this:

```uml
@startuml
Room o- Student
Room *-- Chair
@enduml
```

<!-- Page 79 / 550 -->

You can also change directions by reversing the link:

```uml
@startuml
Student -o Room
Chair --* Room
@enduml
```

It is also possible to change arrow direction by adding left, right, up or down keywords inside the arrow:

```uml
@startuml
foo -left-> dummyLeft
foo -right-> dummyRight
foo -up-> dummyUp
foo -down-> dummyDown
@enduml
```

You can shorten the arrow by using only the first character of the direction (for example, -d- instead of
-down-) or the two first characters (-do-).
Please note that you should not abuse this functionality : Graphviz gives usually good results without
tweaking.
And with the left to right direction parameter:

```uml
@startuml
left to right direction
foo -left-> dummyLeft
foo -right-> dummyRight
foo -up-> dummyUp
<!-- Page 80 / 550 -->

foo -down-> dummyDown
@enduml
```

//3.27 Association classes
--------------------------

You can define association class after that a relation has been defined between two classes, like in this
example:

```uml
@startuml
class Student {
Name
}
Student "0..*" - "1..*" Course
(Student, Course) .. Enrollment
class Enrollment {
drop()
cancel()
}
@enduml
```

You can define it in another direction:

```uml
@startuml
class Student {
Name
}
Student "0..*" -- "1..*" Course
(Student, Course) . Enrollment
class Enrollment {
drop()
cancel()
}
@enduml
```

<!-- Page 81 / 550 -->

//3.28 Association on same class
--------------------------------


```uml
@startuml
class Station {
+name: string
}
class StationCrossing {
+cost: TimeInterval
}
<> diamond
StationCrossing . diamond
diamond - "from 0..*" Station
diamond - "to 0..* " Station
@enduml
```

[Ref. Incubation: Associations]

//3.29 Skinparam
----------------
You can use the skinparam command to change colors and fonts for the drawing.
You can use this command :
• In the diagram definition, like any other commands,

• In an included file,

• In a configuration file, provided in the command line or the ANT task.


```uml
@startuml
skinparam class {
BackgroundColor PaleGreen
ArrowColor SeaGreen
BorderColor SpringGreen
}
<!-- Page 82 / 550 -->

skinparam stereotypeCBackgroundColor YellowGreen
Class01 "1" *-- "many" Class02 : contains
Class03 o-- Class04 : aggregation
@enduml
```

//3.30 Skinned Stereotypes
--------------------------

You can define specific color and fonts for stereotyped classes.

```uml
@startuml
skinparam class {
BackgroundColor PaleGreen
ArrowColor SeaGreen
BorderColor SpringGreen
BackgroundColor<<Foo>> Wheat
BorderColor<<Foo>> Tomato
}
skinparam stereotypeCBackgroundColor YellowGreen
skinparam stereotypeCBackgroundColor<< Foo >> DimGray
class Class01 <<Foo>>
class Class03 <<Foo>>
Class01 "1" *-- "many" Class02 : contains
Class03 o-- Class04 : aggregation
@enduml
```

//3.31 Color gradient
---------------------
You can declare individual colors for classes, notes etc using the # notation.
You can use standard color names or RGB codes in various notations, see Colors.
You can also use color gradient for background colors, with the following syntax: two colors names
separated either by:
<!-- Page 83 / 550 -->

• |,

• /,

• \, or

• -

depending on the direction of the gradient.
For example:

```uml
@startuml
skinparam backgroundcolor AntiqueWhite/Gold
skinparam classBackgroundColor Wheat|CornflowerBlue
class Foo #red-green
note left of Foo #blue\9932CC
this is my
note on this class
end note
package example #GreenYellow/LightGoldenRodYellow {
class Dummy
}
@enduml
```

//3.32 Help on layout
---------------------
Sometimes, the default layout is not perfect...
You can use together keyword to group some classes together : the layout engine will try to group them
(as if they were in the same package).
You can also use hidden links to force the layout.

```uml
@startuml
class Bar1
class Bar2
together {
class Together1
class Together2
class Together3
}
Together1 - Together2
Together2 - Together3
Together2 -[hidden]--> Bar1
Bar1 -[hidden]> Bar2
@enduml
```

<!-- Page 84 / 550 -->

//3.33 Splitting large files
----------------------------

Sometimes, you will get some very large image files.
You can use the page (hpages)x(vpages) command to split the generated image into several files :
hpages is a number that indicated the number of horizontal pages, and vpages is a number that indicated
the number of vertical pages.
You can also use some specific skinparam settings to put borders on splitted pages (see example).

```uml
@startuml
' Split into 4 pages
page 2x2
skinparam pageMargin 10
skinparam pageExternalColor gray
skinparam pageBorderColor black
class BaseClass
namespace net.dummy #DDDDDD {
.BaseClass <|-- Person
Meeting o-- Person
.BaseClass <|- Meeting
}
namespace net.foo {
net.dummy.Person <|- Person
.BaseClass <|-- Person
net.dummy.Meeting o-- Person
}
BaseClass <|-- net.unused.Person
@enduml
```

<!-- Page 85 / 550 -->

//3.34 Extends and implements
-----------------------------

It is also possible to use extends and implements keywords.

```uml
@startuml
class ArrayList implements List
class ArrayList extends AbstractList
@enduml
```

//3.35 Bracketed relations (linking or arrow) style
---------------------------------------------------

//3.35.1 Line style
-------------------
It’s also possible to have explicitly bold, dashed, dotted, hidden or plain relation, links or arrows:
• without label


```uml
@startuml
title Bracketed line style without label
class foo
class bar
bar1 : [bold]
bar2 : [dashed]
bar3 : [dotted]
bar4 : [hidden]
bar5 : [plain]
foo --> bar
foo -[bold]-> bar1
foo -[dashed]-> bar2
foo -[dotted]-> bar3
<!-- Page 86 / 550 -->

foo -[hidden]-> bar4
foo -[plain]-> bar5
@enduml
```

• with label


```uml
@startuml
title Bracketed line style with label
class foo
class bar
bar1 : [bold]
bar2 : [dashed]
bar3 : [dotted]
bar4 : [hidden]
bar5 : [plain]
foo --> bar : ?
foo -[bold]-> bar1 : [bold]
foo -[dashed]-> bar2 : [dashed]
foo -[dotted]-> bar3 : [dotted]
foo -[hidden]-> bar4 : [hidden]
foo -[plain]-> bar5 : [plain]
@enduml
```

[Adapted from QA-4181]

//3.35.2 Line color
-------------------

```uml
@startuml
title Bracketed line color
class foo
class bar
bar1 : [#red]
bar2 : [#green]
<!-- Page 87 / 550 -->

bar3 : [#blue]
foo --> bar
foo -[#red]-> bar1 : [#red]
foo -[#green]-> bar2 : [#green]
foo -[#blue]-> bar3 : [#blue]
'foo -[#blue;#yellow;#green]-> bar4
@enduml
```

//3.35.3 Line thickness
-----------------------

```uml
@startuml
title Bracketed line thickness
class foo
class bar
bar1 : [thickness=1]
bar2 : [thickness=2]
bar3 : [thickness=4]
bar4 : [thickness=8]
bar5 : [thickness=16]
foo --> bar : ?
foo -[thickness=1]-> bar1 : [1]
foo -[thickness=2]-> bar2 : [2]
foo -[thickness=4]-> bar3 : [4]
foo -[thickness=8]-> bar4 : [8]
foo -[thickness=16]-> bar5 : [16]
@enduml
```

[Ref. QA-4949]
<!-- Page 88 / 550 -->

//3.35.4 Mix
------------

```uml
@startuml
title Bracketed line style mix
class foo
class bar
bar1 : [#red,thickness=1]
bar2 : [#red,dashed,thickness=2]
bar3 : [#green,dashed,thickness=4]
bar4 : [#blue,dotted,thickness=8]
bar5 : [#blue,plain,thickness=16]
foo --> bar : ?
foo -[#red,thickness=1]-> bar1 : [#red,1]
foo -[#red,dashed,thickness=2]-> bar2 : [#red,dashed,2]
foo -[#green,dashed,thickness=4]-> bar3 : [#green,dashed,4]
foo -[#blue,dotted,thickness=8]-> bar4 : [blue,dotted,8]
foo -[#blue,plain,thickness=16]-> bar5 : [blue,plain,16]
@enduml
```

//3.36 Change relation (linking or arrow) color and style (inline style)
--------------------------------------------------------
You can change the color or style of individual relation or arrows using the inline following notation:
• #color;line.[bold|dashed|dotted];text:color


```uml
@startuml
class foo
foo --> bar : normal
foo --> bar1 #line:red;line.bold;text:red : red bold
foo --> bar2 #green;line.dashed;text:green : green dashed
foo --> bar3 #blue;line.dotted;text:blue : blue dotted
@enduml
```

[See similar feature on deployment]

//3.37 Change class color and style (inline style)
--------------------------------------------------
You can change the color or style of individual class using the two following notations:
<!-- Page 89 / 550 -->

• #color ##[style]color

With background color first (#color), then line style and line color (##[style]color )

```uml
@startuml
abstract abstract
annotation annotation #pink ##[bold]red
class class #palegreen ##[dashed]green
interface interface #aliceblue ##[dotted]blue
@enduml
```

[Ref. QA-1487]
• #[color|back:color];header:color;line:color;line.[bold|dashed|dotted];text:color


```uml
@startuml
abstract abstract
annotation annotation #pink;line:red;line.bold;text:red
class class #palegreen;line:green;line.dashed;text:green
interface interface #aliceblue;line:blue;line.dotted;text:blue
@enduml
```

First original example:

```uml
@startuml
class bar #line:green;back:lightblue
class bar2 #lightblue;line:green
class Foo1 #back:red;line:00FFFF
class FooDashed #line.dashed:blue
class FooDotted #line.dotted:blue
class FooBold #line.bold
class Demo1 #back:lightgreen|yellow;header:blue/red
@enduml
```

<!-- Page 90 / 550 -->

[Ref. QA-3770]

//3.38 Arrows from/to class members
-----------------------------------

```uml
@startuml
class Foo {
+ field1
+ field2
}
class Bar {
+ field3
+ field4
}
Foo::field1 --> Bar::field3 : foo
Foo::field2 --> Bar::field4 : bar
@enduml
```

[Ref. QA-3636]

```uml
@startuml
left to right direction
class User {
id : INTEGER
..
other_id : INTEGER
}
class Email {
<!-- Page 91 / 550 -->

id : INTEGER
..
user_id : INTEGER
address : INTEGER
}
User::id *-- Email::user_id
@enduml
```

[Ref. QA-5261]

//3.39 Grouping inheritance arrow heads
---------------------------------------
You can merge all arrow heads using the skinparam groupInheritance, with a threshold as parameter.
3.39.1 GroupInheritance 1 (no grouping)

```uml
@startuml
skinparam groupInheritance 1
A1 <|-- B1
A2 <|-- B2
A2 <|-- C2
A3 <|-- B3
A3 <|-- C3
A3 <|-- D3
A4 <|-- B4
A4 <|-- C4
A4 <|-- D4
A4 <|-- E4
@enduml
```

3.39.2 GroupInheritance 2 (grouping from 2)

```uml
@startuml
skinparam groupInheritance 2
A1 <|-- B1
A2 <|-- B2
<!-- Page 92 / 550 -->

A2 <|-- C2
A3 <|-- B3
A3 <|-- C3
A3 <|-- D3
A4 <|-- B4
A4 <|-- C4
A4 <|-- D4
A4 <|-- E4
@enduml
```

3.39.3 GroupInheritance 3 (grouping only from 3)

```uml
@startuml
skinparam groupInheritance 3
A1 <|-- B1
A2 <|-- B2
A2 <|-- C2
A3 <|-- B3
A3 <|-- C3
A3 <|-- D3
A4 <|-- B4
A4 <|-- C4
A4 <|-- D4
A4 <|-- E4
@enduml
```

3.39.4 GroupInheritance 4 (grouping only from 4)

```uml
@startuml
skinparam groupInheritance 4
<!-- Page 93 / 550 -->

A1 <|-- B1
A2 <|-- B2
A2 <|-- C2
A3 <|-- B3
A3 <|-- C3
A3 <|-- D3
A4 <|-- B4
A4 <|-- C4
A4 <|-- D4
A4 <|-- E4
@enduml
```

[Ref. QA-3193, and Defect QA-13532]

//3.40 Display JSON Data on Class or Object diagram
---------------------------------------------------

//3.40.1 Simple example
-----------------------

```uml
@startuml
class Class
object Object
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-15481]
For another example, see on JSON page.
<!-- Page 94 / 550 -->

//3.41 Packages and Namespaces Enhancement
------------------------------------------

[From V1.2023.2+, and V1.2023.5]

```uml
@startuml
class A.B.C.D.Z {
}
@enduml
```


```uml
@startuml
set separator none
class A.B.C.D.Z {
}
@enduml
```


```uml
@startuml
!pragma useIntermediatePackages false
class A.B.C.D.Z {
}
@enduml
```


```uml
@startuml
set separator none
package A.B.C.D {
class Z {
}
}
@enduml
```

<!-- Page 95 / 550 -->

[Ref. GH-1352]
<!-- Page 96 / 550 -->

/4 Object Diagram
=================

An object diagram is a graphical representation that showcases objects and their relationships at a
specific moment in time. It provides a snapshot of the system’s structure, capturing the static view of
the instances present and their associations.

PlantUML offers a simple and intuitive way to create object diagrams using plain text. 
Its user-friendly syntax allows for quick diagram creation without the need for complex GUI tools. Moreover,
the PlantUML forum provides a platform for users to discuss, share, and seek assistance, fostering a
collaborative community. By choosing PlantUML, users benefit from both the efficiency of markdown-
based diagramming and the support of an active community.

//4.1 Definition of objects
---------------------------
You define instances of objects using the object keyword.

```uml
@startuml
object firstObject
object "My Second Object" as o2
@enduml
```

//4.2 Relations between objects
-------------------------------
Relations between objects are defined using the following symbols :
Type Symbol Image
Extension <|--
Composition *--
Aggregation o--
It is possible to replace -- by .. to have a dotted line.
Knowing those rules, it is possible to draw the following drawings.
It is possible a add a label on the relation, using : followed by the text of the label.
For cardinality, you can use double-quotes "" on each side of the relation.

```uml
@startuml
object Object01
object Object02
object Object03
object Object04
object Object05
object Object06
object Object07
object Object08
Object01 <|-- Object02
Object03 *-- Object04
Object05 o-- "4" Object06
Object07 .. Object08 : some labels
@enduml
```

<!-- Page 97 / 550 -->

//4.3 Associations objects
--------------------------


```uml
@startuml
object o1
object o2
diamond dia
object o3
o1 --> dia
o2 --> dia
dia --> o3
@enduml
```

//4.4 Adding fields
-------------------
To declare fields, you can use the symbol : followed by the field’s name.

```uml
@startuml
object user
user : name = "Dummy"
user : id = 123
@enduml
```

It is also possible to group all fields between brackets {}.

```uml
@startuml
object user {
name = "Dummy"
id = 123
}
<!-- Page 98 / 550 -->

@enduml
```

//4.5 Common features with class diagrams
-----------------------------------------

• Hide attributes, methods...

• Defines notes

• Use packages

• Skin the output


//4.6 Map table or associative array
------------------------------------
You can define a map table or associative array, with map keyword and => separator.

```uml
@startuml
map CapitalCity {
UK => London
USA => Washington
Germany => Berlin
}
@enduml
```


```uml
@startuml
map "Map **Contry => CapitalCity**" as CC {
UK => London
USA => Washington
Germany => Berlin
}
@enduml
```


```uml
@startuml
map "map: Map<Integer, String>" as users {
1 => Alice
2 => Bob
3 => Charlie
}
@enduml
```

<!-- Page 99 / 550 -->

And add link with object.

```uml
@startuml
object London
map CapitalCity {
UK *-> London
USA => Washington
Germany => Berlin
}
@enduml
```


```uml
@startuml
object London
object Washington
object Berlin
object NewYork
map CapitalCity {
UK *-> London
USA *--> Washington
Germany *---> Berlin
}
NewYork --> CapitalCity::USA
@enduml
```

[Ref. #307]
<!-- Page 100 / 550 -->


```uml
@startuml
package foo {
object baz
}
package bar {
map A {
b *-> foo.baz
c =>
}
}
A::c --> foo
@enduml
```

[Ref. QA-12934]

```uml
@startuml
object Foo
map Bar {
abc=>
def=>
}
object Baz
Bar::abc --> Baz : Label one
Foo --> Bar::def : Label two
@enduml
```

<!-- Page 101 / 550 -->

[Ref. #307]

//4.7 Program (or project) evaluation and review technique (PERT) with map
--------------------------------------------------------
You can use map table in order to make Program (or project) evaluation and review technique (PERT)
diagram.

```uml
@startuml PERT
left to right direction
' Horizontal lines: -->, <--, <-->
' Vertical lines: ->, <-, <->
title PERT: Project Name
map Kick.Off {
}
map task.1 {
Start => End
}
map task.2 {
Start => End
}
map task.3 {
Start => End
}
map task.4 {
Start => End
}
map task.5 {
Start => End
}
Kick.Off --> task.1 : Label 1
Kick.Off --> task.2 : Label 2
Kick.Off --> task.3 : Label 3
task.1 --> task.4
task.2 --> task.4
task.3 --> task.4
task.4 --> task.5 : Label 4
@enduml
```

[Ref. QA-12337]
<!-- Page 102 / 550 -->

//4.8 Display JSON Data on Class or Object diagram
--------------------------------------------------

//4.8.1 Simple example
----------------------

```uml
@startuml
class Class
object Object
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-15481]
For another example, see on JSON page.
<!-- Page 103 / 550 -->

/5 Activity Diagram (legacy)
============================

This is the old Activity Diagram (legacy) syntax, to see the new current version see: Activity
Diagram (new).

//5.1 Simple Action
-------------------
You can use (*) for the starting point and ending point of the activity diagram.
In some occasion, you may want to use (*top) to force the starting point to be at the top of the diagram.
Use --> for arrows.

```uml
@startuml
(*) --> "First Action"
"First Action" --> (*)
@enduml
```

//5.2 Label on arrows
---------------------
By default, an arrow starts at the last used activity.
You can put a label on an arrow using brackets [ and ] just after the arrow definition.

```uml
@startuml
(*) --> "First Action"
-->[You can put also labels] "Second Action"
--> (*)
@enduml
```

//5.3 Changing arrow direction
------------------------------
You can use -> for horizontal arrows. It is possible to force arrow’s direction using the following syntax:
• -down-> (default arrow)

<!-- Page 104 / 550 -->

• -right-> or ->

• -left->

• -up->


```uml
@startuml
(*) -up-> "First Action"
-right-> "Second Action"
--> "Third Action"
-left-> (*)
@enduml
```

//5.4 Branches
--------------

You can use if/then/else keywords to define branches.

```uml
@startuml
(*) --> "Initialization"
if "Some Test" then
-->[true] "Some Action"
--> "Another Action"
-right-> (*)
else
->[false] "Something else"
-->[Ending process] (*)
endif
@enduml
```

Unfortunately, you will have to sometimes repeat the same activity in the diagram text:

```uml
@startuml
<!-- Page 105 / 550 -->

(*) --> "check input"
If "input is verbose" then
--> [Yes] "turn on verbosity"
--> "run command"
else
--> "run command"
Endif
-->(*)
@enduml
```

//5.5 More on Branches
----------------------

By default, a branch is connected to the last defined activity, but it is possible to override this and to
define a link with the if keywords.
It is also possible to nest branches.

```uml
@startuml
(*) --> if "Some Test" then
-->[true] "action 1"
if "" then
-> "action 3" as a3
else
if "Other test" then
-left-> "action 5"
else
--> "action 6"
endif
endif
else
->[false] "action 2"
endif
<!-- Page 106 / 550 -->

a3 --> if "last test" then
--> "action 7"
else
-> "action 8"
endif
@enduml
```

//5.6 Synchronization
---------------------

You can use === code === to display synchronization bars.

```uml
@startuml
(*) --> ===B1===
--> "Parallel Action 1"
--> ===B2===
===B1=== --> "Parallel Action 2"
--> ===B2===
--> (*)
@enduml
```

<!-- Page 107 / 550 -->

//5.7 Long action description
-----------------------------

When you declare activities, you can span on several lines the description text. You can also add in the
description.
You can also give a short code to the activity with the as keyword. This code can be used latter in the
diagram description.

```uml
@startuml
(*) -left-> "this <size:20>action</size>
is <b>very</b> <color:red>long2</color>
and defined on several lines
that contains many <i>text</i>" as A1
-up-> "Another action\n on several lines"
A1 --> "Short action <img:sourceforge.jpg>"
@enduml
```

//5.8 Notes
-----------
You can add notes on a activity using the commands note left, note right, note top or note bottom,
just after the description of the activity you want to note.
If you want to put a note on the starting point, define the note at the very beginning of the diagram
description.
You can also have a note on several lines, using the endnote keywords.

```uml
@startuml
(*) --> "Some action"
<!-- Page 108 / 550 -->

note right: This action has to be defined
"Some action" --> (*)
note left
This note is on
several lines
end note
@enduml
```

//5.9 Partition
---------------

You can define a partition using the partition keyword, and optionally declare a background color for
your partition (Using a html color code or name)
When you declare activities, they are automatically put in the last used partition.
You can close the partition definition using a closing bracket }.

```uml
@startuml
partition Conductor {
(*) --> "Climbs on Platform"
--> === S1 ===
--> Bows
}
partition Audience #LightSkyBlue {
=== S1 === --> Applauds
}
partition Conductor {
Bows --> === S2 ===
--> WavesArmes
Applauds --> === S2 ===
}
partition Orchestra #CCCCEE {
WavesArmes --> Introduction
--> "Play music"
}
@enduml
```

<!-- Page 109 / 550 -->

//5.10 Skinparam
----------------

You can use the skinparam command to change colors and fonts for the drawing.
You can use this command :
• In the diagram definition, like any other commands,

• In an included file,

• In a configuration file, provided in the command line or the ANT task.

You can define specific color and fonts for stereotyped activities.

```uml
@startuml
skinparam backgroundColor #AAFFFF
skinparam activity {
StartColor red
BarColor SaddleBrown
EndColor Silver
BackgroundColor Peru
BackgroundColor<< Begin >> Olive
BorderColor Peru
FontName Impact
}
(*) --> "Climbs on Platform" << Begin >>
--> === S1 ===
--> Bows
<!-- Page 110 / 550 -->

--> === S2 ===
--> WavesArmes
--> (*)
@enduml
```

//5.11 Octagon
--------------

You can change the shape of activities to octagon using the skinparam activityShape octagon command.

```uml
@startuml
'Default is skinparam activityShape roundBox
skinparam activityShape octagon
(*) --> "First Action"
"First Action" --> (*)
@enduml
```

//5.12 Complete example
-----------------------

```uml
@startuml
title Servlet Container
(*) --> "ClickServlet.handleRequest()"
--> "new Page"
if "Page.onSecurityCheck" then
<!-- Page 111 / 550 -->

->[true] "Page.onInit()"
if "isForward?" then
->[no] "Process controls"
if "continue processing?" then
-->[yes] ===RENDERING===
else
-->[no] ===REDIRECT_CHECK===
endif
else
-->[yes] ===RENDERING===
endif
if "is Post?" then
-->[yes] "Page.onPost()"
--> "Page.onRender()" as render
--> ===REDIRECT_CHECK===
else
-->[no] "Page.onGet()"
--> render
endif
else
-->[false] ===REDIRECT_CHECK===
endif
if "Do redirect?" then
->[yes] "redirect request"
--> ==BEFORE_DESTROY===
else
if "Do Forward?" then
-left->[yes] "Forward request"
--> ==BEFORE_DESTROY===
else
-right->[no] "Render page template"
--> ==BEFORE_DESTROY===
endif
endif
--> "Page.onDestroy()"
-->(*)
@enduml
```

<!-- Page 112 / 550 -->

<!-- Page 113 / 550 -->

/6 Activity Diagram (New Syntax)
================================

The previous syntax used for activity diagrams encountered several limitations and maintainability issues.
Recognizing these drawbacks, we have introduced a wholly revamped syntax and implementation that is
not only user-friendly but also more stable.

//6.0.1 Benefits of the New Syntax
----------------------------------
• No Dependency on Graphviz: Just like with sequence diagrams, the new syntax eliminates the

necessity for Graphviz installation, thereby simplifying the setup process.
• Ease of Maintenance: The intuitive nature of the new syntax means it is easier to manage and

maintain your diagrams.

//6.0.2 Transition to the New Syntax
------------------------------------
While we will continue to support the old syntax to maintain compatibility, we highly encourage users
to migrate to the new syntax to leverage the enhanced features and benefits it offers.
Make the shift today and experience a more streamlined and efficient diagramming process with the new
activity diagram syntax.

//6.1 Simple action
-------------------
Activities label starts with : and ends with ;.
Text formatting can be done using creole wiki syntax.
They are implicitly linked in their definition order.

```uml
@startuml
:Hello world;
:This is defined on
several **lines**;
@enduml
```

//6.2 Start/Stop/End
--------------------
You can use start and stop keywords to denote the beginning and the end of a diagram.

```uml
@startuml
start
:Hello world;
:This is defined on
several **lines**;
stop
@enduml
```

<!-- Page 114 / 550 -->

You can also use the end keyword.

```uml
@startuml
start
:Hello world;
:This is defined on
several **lines**;
end
@enduml
```

//6.3 Conditional
-----------------
You can use if, then and else keywords to put tests in your diagram. Labels can be provided using
parentheses.
The 3 syntaxes are possible:
• if (...) then (...)


```uml
@startuml
start
if (Graphviz installed?) then (yes)
:process all\ndiagrams;
else (no)
:process only
__sequence__ and __activity__ diagrams;
endif
stop
@enduml
```

<!-- Page 115 / 550 -->

• if (...) is (...) then


```uml
@startuml
if (color?) is (<color:red>red) then
:print red;
else
:print not red;
@enduml
```

• if (...) equals (...) then


```uml
@startuml
if (counter?) equals (5) then
:print 5;
else
:print not 5;
@enduml
```

[Ref. QA-301]

//6.3.1 Several tests (horizontal mode)
---------------------------------------
You can use the elseif keyword to have several tests (by default, it is the horizontal mode):

```uml
@startuml
start
if (condition A) then (yes)
:Text 1;
elseif (condition B) then (yes)
:Text 2;
stop
(no) elseif (condition C) then (yes)
:Text 3;
(no) elseif (condition D) then (yes)
:Text 4;
else (nothing)
<!-- Page 116 / 550 -->

:Text else;
endif
stop
@enduml
```

//6.3.2 Several tests (vertical mode)
-------------------------------------
You can use the command !pragma useVerticalIf on to have the tests in vertical mode:

```uml
@startuml
!pragma useVerticalIf on
start
if (condition A) then (yes)
:Text 1;
elseif (condition B) then (yes)
:Text 2;
stop
elseif (condition C) then (yes)
:Text 3;
elseif (condition D) then (yes)
:Text 4;
else (nothing)
:Text else;
endif
stop
@enduml
```

<!-- Page 117 / 550 -->

You can use the -P command-line option to specify the pragma:
java -jar plantuml.jar -PuseVerticalIf=on
[Refs. QA-3931, issue-582]

//6.4 Switch and case [switch, case, endswitch]
-----------------------------------------------
You can use switch, case and endswitch keywords to put switch in your diagram.
Labels can be provided using parentheses.

```uml
@startuml
start
switch (test?)
case ( condition A )
:Text 1;
case ( condition B )
:Text 2;
case ( condition C )
:Text 3;
case ( condition D )
:Text 4;
case ( condition E )
:Text 5;
endswitch
stop
@enduml
```

<!-- Page 118 / 550 -->

6.5 Conditional with stop on an action [kill, detach]
You can stop action on a if loop.

```uml
@startuml
if (condition?) then
:error;
stop
endif
#palegreen:action;
@enduml
```

But if you want to stop at the precise action, you can use the kill or detach keyword:
• kill


```uml
@startuml
if (condition?) then
#pink:error;
kill
endif
#palegreen:action;
@enduml
```

[Ref. QA-265]
• detach

<!-- Page 119 / 550 -->


```uml
@startuml
if (condition?) then
#pink:error;
detach
endif
#palegreen:action;
@enduml
```

//6.6 Repeat loop
-----------------

//6.6.1 Simple repeat loop
--------------------------
You can use repeat and repeat while keywords to have repeat loops.

```uml
@startuml
start
repeat
:read data;
:generate diagrams;
repeat while (more data?) is (yes)
->no;
stop
@enduml
```

//6.6.2 Repeat loop with repeat action and backward action
----------------------------------------------------------
It is also possible to use a full action as repeat target and insert an action in the return path using the
backward keyword.

```uml
@startuml
start
<!-- Page 120 / 550 -->

repeat :foo as starting label;
:read data;
:generate diagrams;
backward:This is backward;
repeat while (more data?)
stop
@enduml
```

[Ref. QA-5826]

//6.7 Break on a repeat loop [break]
------------------------------------
You can use the break keyword after an action on a loop.

```uml
@startuml
start
repeat
:Test something;
if (Something went wrong?) then (no)
#palegreen:OK;
break
endif
->NOK;
:Alert "Error with long text";
repeat while (Something went wrong with long text?) is (yes) not (no)
->//merged step//;
:Alert "Success";
stop
@enduml
```

<!-- Page 121 / 550 -->

[Ref. QA-6105]

//6.8 Goto and Label Processing [label, goto]
---------------------------------------------
? It is currently only experimental ?
You can use label and goto keywords to denote goto processing, with:
• label <label_name>

• goto <label_name>


```uml
@startuml
title Point two queries to same activity\nwith `goto`
start
if (Test Question?) then (yes)
'space label only for alignment
label sp_lab0
label sp_lab1
'real label
label lab
:shared;
else (no)
if (Second Test Question?) then (yes)
label sp_lab2
goto sp_lab1
else
:nonShared;
endif
endif
:merge;
<!-- Page 122 / 550 -->

@enduml
```

[Ref. QA-15026, QA-12526 and initially QA-1626]

//6.9 While loop
----------------

//6.9.1 Simple while loop
-------------------------
You can use while and endwhile keywords to have while loop.

```uml
@startuml
start
while (data available?)
:read data;
:generate diagrams;
endwhile
stop
@enduml
```

It is possible to provide a label after the endwhile keyword, or using the is keyword.

```uml
@startuml
while (check filesize ?) is (not empty)
:read file;
endwhile (empty)
:close file;
<!-- Page 123 / 550 -->

@enduml
```

//6.9.2 While loop with backward action
---------------------------------------
It is also possible to insert an action in the return path using the backward keyword.

```uml
@startuml
while (check filesize ?) is (not empty)
:read file;
backward:log;
endwhile (empty)
:close file;
@enduml
```

[Ref. QA-11144]

//6.9.3 Infinite while loop
---------------------------
If you are using detach to form an infinite while loop, then you will want to also hide the partial arrow
that results using -[hidden]->

```uml
@startuml
:Step 1;
if (condition1) then
while (loop forever)
:Step 2;
endwhile
-[hidden]->
detach
else
:end normally;
stop
endif
@enduml
```

<!-- Page 124 / 550 -->

6.10 Parallel processing [fork, fork again, end fork, end merge]
You can use fork, fork again and end fork or end merge keywords to denote parallel processing.

//6.10.1 Simple fork
--------------------

```uml
@startuml
start
fork
:action 1;
fork again
:action 2;
end fork
stop
@enduml
```

//6.10.2 fork with end merge
----------------------------

```uml
@startuml
start
fork
:action 1;
fork again
:action 2;
end merge
stop
@enduml
```

<!-- Page 125 / 550 -->

[Ref. QA-5320]

```uml
@startuml
start
fork
:action 1;
fork again
:action 2;
fork again
:action 3;
fork again
:action 4;
end merge
stop
@enduml
```


```uml
@startuml
start
fork
:action 1;
fork again
:action 2;
end
end merge
stop
@enduml
```

[Ref. QA-13731]
6.10.3 Label on end fork (or UML joinspec):

```uml
@startuml
start
fork
:action A;
fork again
<!-- Page 126 / 550 -->

:action B;
end fork {or}
stop
@enduml
```


```uml
@startuml
start
fork
:action A;
fork again
:action B;
end fork {and}
stop
@enduml
```

[Ref. QA-5346]

//6.10.4 Other example
----------------------

```uml
@startuml
start
if (multiprocessor?) then (yes)
fork
:Treatment 1;
fork again
:Treatment 2;
end fork
else (monoproc)
:Treatment 1;
:Treatment 2;
endif
@enduml
```

<!-- Page 127 / 550 -->

//6.11 Split processing
-----------------------

//6.11.1 Split
--------------
You can use split, split again and end split keywords to denote split processing.

```uml
@startuml
start
split
:A;
split again
:B;
split again
:C;
split again
:a;
:b;
end split
:D;
end
@enduml
```

6.11.2 Input split (multi-start)
You can use hidden arrows to make an input split (multi-start):

```uml
@startuml
split
-[hidden]->
:A;
split again
-[hidden]->
<!-- Page 128 / 550 -->

:B;
split again
-[hidden]->
:C;
end split
:D;
@enduml
```


```uml
@startuml
split
-[hidden]->
:A;
split again
-[hidden]->
:a;
:b;
split again
-[hidden]->
(Z)
end split
:D;
@enduml
```

[Ref. QA-8662]
6.11.3 Output split (multi-end)
You can use kill or detach to make an output split (multi-end):

```uml
@startuml
start
split
:A;
kill
split again
:B;
detach
split again
:C;
kill
<!-- Page 129 / 550 -->

end split
@enduml
```


```uml
@startuml
start
split
:A;
kill
split again
:b;
:c;
detach
split again
(Z)
detach
split again
end
split again
stop
end split
@enduml
```

//6.12 Notes
------------

Text formatting can be done using creole wiki syntax.
A note can be floating, using floating keyword.

```uml
@startuml
start
:foo1;
floating note left: This is a note
:foo2;
note right
This note is on several

//lines// and can
contain <b>HTML</b>
====
* Calling the method ""foo()"" is prohibited
end note
stop
@enduml
```

<!-- Page 130 / 550 -->

You can add note on backward activity:

```uml
@startuml
start
repeat :Enter data;
:Submit;
backward :Warning;
note right: Note
repeat while (Valid?) is (No) not (Yes)
stop
@enduml
```

[Ref. QA-11788]
You can add note on partition activity:

```uml
@startuml
start
partition "**process** HelloWorld" {
note
This is my note
----

//Creole test//
end note
:Ready;
:HelloWorld(i)>
:Hello-Sent;
}
@enduml
```

<!-- Page 131 / 550 -->

[Ref. QA-2398]

//6.13 Colors
-------------
You can specify a color for some activities.

```uml
@startuml
start
:starting progress;
#HotPink:reading configuration files
These files should be edited at this point!;
#AAAAAA:ending of the process;
@enduml
```

You can also use gradient color.

```uml
@startuml
start
partition #red/white testPartition {
#blue\green:testActivity;
}
@enduml
```

[Ref. QA-4906]
<!-- Page 132 / 550 -->

//6.14 Lines without arrows
---------------------------

You can use skinparam ArrowHeadColor none in order to connect activities using lines only, without
arrows.

```uml
@startuml
skinparam ArrowHeadColor none
start
:Hello world;
:This is on defined on
several **lines**;
stop
@enduml
```


```uml
@startuml
skinparam ArrowHeadColor none
start
repeat :Enter data;
:Submit;
backward :Warning;
repeat while (Valid?) is (No) not (Yes)
stop
@enduml
```

//6.15 Arrows
-------------
Using the -> notation, you can add texts to arrow, and change their color.
It’s also possible to have dotted, dashed, bold or hidden arrows.

```uml
@startuml
:foo1;
-> You can put text on arrows;
if (test) then
-[#blue]->
:foo2;
-[#green,dashed]-> The text can
<!-- Page 133 / 550 -->

also be on several lines
and **very** long...;
:foo3;
else
-[#black,dotted]->
:foo4;
endif
-[#gray,bold]->
:foo5;
@enduml
```

//6.16 Connector
----------------
You can use parentheses to denote connector.

```uml
@startuml
start
:Some activity;
(A)
detach
(A)
:Other activity;
@enduml
```

//6.17 Color on connector
-------------------------
You can add color on connector.

```uml
@startuml
<!-- Page 134 / 550 -->

start
:The connector below
wishes he was blue;
#blue:(B)
:This next connector
feels that she would
be better off green;
#green:(G)
stop
@enduml
```

[Ref. QA-10077]

//6.18 Grouping or partition
----------------------------

//6.18.1 Group
--------------
You can group activity together by defining group:

```uml
@startuml
start
group Initialization
:read config file;
:init internal variable;
end group
group Running group
:wait for user interaction;
:print information;
end group
stop
@enduml
```

<!-- Page 135 / 550 -->

//6.18.2 Partition
------------------
You can group activity together by defining partition:

```uml
@startuml
start
partition Initialization {
:read config file;
:init internal variable;
}
partition Running {
:wait for user interaction;
:print information;
}
stop
@enduml
```

It’s also possible to change partition color:
<!-- Page 136 / 550 -->


```uml
@startuml
start
partition #lightGreen "Input Interface" {
:read config file;
:init internal variable;
}
partition Running {
:wait for user interaction;
:print information;
}
stop
@enduml
```

[Ref. QA-2793]
It’s also possible to add link to partition:

```uml
@startuml
start
partition "[[http://plantuml.com partition_name]]" {
:read doc. on [[http://plantuml.com plantuml_website]];
:test diagram;
}
end
@enduml
```

[Ref. QA-542]
<!-- Page 137 / 550 -->

6.18.3 Group, Partition, Package, Rectangle or Card
You can group activity together by defining:
• group;

• partition;

• package;

• rectangle;

• card.


```uml
@startuml
start
group Group
:Activity;
end group
floating note: Note on Group
partition Partition {
:Activity;
}
floating note: Note on Partition
package Package {
:Activity;
}
floating note: Note on Package
rectangle Rectangle {
:Activity;
}
floating note: Note on Rectangle
card Card {
:Activity;
}
floating note: Note on Card
end
@enduml
```

<!-- Page 138 / 550 -->

//6.19 Swimlanes
----------------

Using pipe |, you can define swimlanes.
It’s also possible to change swimlanes color.

```uml
@startuml
|Swimlane1|
start
:foo1;
|#AntiqueWhite|Swimlane2|
:foo2;
:foo3;
|Swimlane1|
:foo4;
|Swimlane2|
:foo5;
stop
@enduml
```

<!-- Page 139 / 550 -->

You can add if conditional or repeat or while loop within swimlanes.

```uml
@startuml
|#pink|Actor_For_red|
start
if (color?) is (red) then
#pink:**action red**;
:foo1;
else (not red)
|#lightgray|Actor_For_no_red|
#lightgray:**action not red**;
:foo2;
endif
|Next_Actor|
#lightblue:foo3;
:foo4;
|Final_Actor|
#palegreen:foo5;
stop
@enduml
```

<!-- Page 140 / 550 -->

You can also use alias with swimlanes, with this syntax:
• |[#<color>|]<swimlane_alias>| <swimlane_title>


```uml
@startuml
|#palegreen|f| fisherman
|c| cook
|#gold|e| eater
|f|
start
:go fish;
|c|
:fry fish;
|e|
:eat fish;
stop
@enduml
```

[Ref. QA-2681]
<!-- Page 141 / 550 -->

6.20 Detach or kill [detach, kill]
It’s possible to remove an arrow using the detach or kill keyword:
• detach


```uml
@startuml
:start;
fork
:foo1;
:foo2;
fork again
:foo3;
detach
endfork
if (foo4) then
:foo5;
detach
endif
:foo6;
detach
:foo7;
stop
@enduml
```

• kill


```uml
@startuml
:start;
fork
:foo1;
:foo2;
fork again
:foo3;
kill
<!-- Page 142 / 550 -->

endfork
if (foo4) then
:foo5;
kill
endif
:foo6;
kill
:foo7;
stop
@enduml
```

//6.21 SDL (Specification and Description Language)
---------------------------------------------------

//6.21.1 Table of SDL Shape Name
--------------------------------
Name Old syntax Stereotype syntax
Input < <<input>>
Output > <<output>>
Procedure | <<procedure>>
Load \ <<load>>
Save / <<save>>
Continuous } <<continuous>>
Task ] <<task>>
[Ref. QA-11518, GH-1270]

//6.21.2 SDL using final separator (Deprecated form)
----------------------------------------------------
By changing the final ; separator, you can set different rendering for the activity:
• |

• <

• >

<!-- Page 143 / 550 -->

• /

• \\

• ]

• }


```uml
@startuml
:Ready;
:next(o)|
:Receiving;
split
:nak(i)<
:ack(o)>
split again
:ack(i)<
:next(o)
on several lines|
:i := i + 1]
:ack(o)>
split again
:err(i)<
:nak(o)>
split again
:foo/
split again
:bar\\
split again
:i > 5}
stop
end split
:finish;
@enduml
```

<!-- Page 144 / 550 -->

//6.21.3 SDL using Normal separator and Stereotype (Current offiial form)
-------------------------------------------------------------------------

```uml
@startuml
start
:SDL Shape;
:input; <<input>>
:output; <<output>>
:procedure; <<procedure>>
:load; <<load>>
:save; <<save>>
:continuous; <<continuous>>
:task; <<task>>
end
@enduml
```


```uml
@startuml
:Ready;
:next(o); <<procedure>>
:Receiving;
split
:nak(i); <<input>>
:ack(o); <<output>>
split again
:ack(i); <<input>>
:next(o)
on several lines; <<procedure>>
:i := i + 1; <<task>>
:ack(o); <<output>>
split again
:err(i); <<input>>
:nak(o); <<output>>
split again
:foo; <<save>>
<!-- Page 145 / 550 -->

split again
:bar; <<load>>
split again
:i > 5; <<continuous>>
stop
end split
:finish;
@enduml
```

//6.22 Complete example
-----------------------


```uml
@startuml
start
:ClickServlet.handleRequest();
:new page;
if (Page.onSecurityCheck) then (true)
:Page.onInit();
if (isForward?) then (no)
:Process controls;
if (continue processing?) then (no)
stop
endif
if (isPost?) then (yes)
:Page.onPost();
else (no)
:Page.onGet();
endif
:Page.onRender();
endif
else (false)
<!-- Page 146 / 550 -->

endif
if (do redirect?) then (yes)
:redirect process;
else
if (do forward?) then (yes)
:Forward request;
else (no)
:Render page template;
endif
endif
stop
@enduml
```

<!-- Page 147 / 550 -->

//6.23 Condition Style
----------------------

//6.23.1 Inside style (by default)
----------------------------------

```uml
@startuml
skinparam conditionStyle inside
start
repeat
:act1;
:act2;
repeatwhile (<b>end)
:act3;
<!-- Page 148 / 550 -->

@enduml
```


```uml
@startuml
start
repeat
:act1;
:act2;
repeatwhile (<b>end)
:act3;
@enduml
```

//6.23.2 Diamond style
----------------------

```uml
@startuml
skinparam conditionStyle diamond
start
repeat
:act1;
:act2;
repeatwhile (<b>end)
:act3;
@enduml
```

<!-- Page 149 / 550 -->

6.23.3 InsideDiamond (or Foo1) style

```uml
@startuml
skinparam conditionStyle InsideDiamond
start
repeat
:act1;
:act2;
repeatwhile (<b>end)
:act3;
@enduml
```


```uml
@startuml
skinparam conditionStyle foo1
start
repeat
:act1;
:act2;
repeatwhile (<b>end)
:act3;
@enduml
```

<!-- Page 150 / 550 -->

[Ref. QA-1290 and #400]

//6.24 Condition End Style
--------------------------

//6.24.1 Diamond style (by default)
-----------------------------------
• With one branch


```uml
@startuml
skinparam ConditionEndStyle diamond
:A;
if (decision) then (yes)
:B1;
else (no)
endif
:C;
@enduml
```

• With two branches (B1, B2)


```uml
@startuml
skinparam ConditionEndStyle diamond
:A;
if (decision) then (yes)
:B1;
else (no)
:B2;
endif
:C;
@enduml
```

@enduml
```

<!-- Page 151 / 550 -->

//6.24.2 Horizontal line (hline) style
--------------------------------------
• With one branch


```uml
@startuml
skinparam ConditionEndStyle hline
:A;
if (decision) then (yes)
:B1;
else (no)
endif
:C;
@enduml
```

• With two branches (B1, B2)


```uml
@startuml
skinparam ConditionEndStyle hline
:A;
if (decision) then (yes)
:B1;
else (no)
:B2;
endif
:C;
@enduml
```

@enduml
```

<!-- Page 152 / 550 -->

[Ref. QA-4015]

//6.25 Using (global) style
---------------------------

//6.25.1 Without style (by default)
-----------------------------------

```uml
@startuml
start
:init;
-> test of color;
if (color?) is (<color:red>red) then
:print red;
else
:print not red;
note right: no color
endif
partition End {
:end;
}
-> this is the end;
end
@enduml
```

//6.25.2 With style
-------------------
You can use style to change rendering of elements.

```uml
@startuml
<!-- Page 153 / 550 -->

<style>
activityDiagram {
BackgroundColor #33668E
BorderColor #33668E
FontColor #888
FontName arial
diamond {
BackgroundColor #ccf
LineColor #00FF00
FontColor green
FontName arial
FontSize 15
}
arrow {
FontColor gold
FontName arial
FontSize 15
}
partition {
LineColor red
FontColor green
RoundCorner 10
BackgroundColor PeachPuff
}
note {
FontColor Blue
LineColor Navy
BackgroundColor #ccf
}
}
document {
BackgroundColor transparent
}
</style>
start
:init;
-> test of color;
if (color?) is (<color:red>red) then
:print red;
else
:print not red;
note right: no color
endif
partition End {
:end;
}
-> this is the end;
end
@enduml
```

<!-- Page 154 / 550 -->

<!-- Page 155 / 550 -->

/7 Component Diagram
====================

Component Diagram: A component diagram is a type of structural diagram used in 
UML (Unified Modeling Language) to visualize the organization and relationships of system components. 
These diagrams help in breaking down complex systems into manageable components, showcasing 
their inter-dependencies, and ensuring efficient system design and architecture.

Advantages of PlantUML:

•   Simplicity: With PlantUML, you can create component diagrams using simple and 
    intuitive text-based descriptions, eliminating the need for complex drawing tools.

•   Integration: PlantUML seamlessly integrates with various tools and platforms, 
    making it a versatile choice for developers and architects.

•   Collaboration: The PlantUML forum offers a platform for users to discuss, share, 
    and seekassistance on their diagrams, fostering a collaborative community.

//7.1 Components
----------------
Components must be bracketed.
You can also use the component keyword to define a component. In this case the brackets can be omitted,
but only if the component name does not include white-space or special characters.
You can define an alias, using the as keyword. This alias will be used later, when defining relations.

```uml
@startuml
[First component]
[Another component] as Comp2
component Comp3
component [Last\ncomponent] as Comp4
@enduml
```

//7.1.1 Naming exceptions
-------------------------
Note that component names starting with $ cannot be hidden or removed later, because hide and remove
command will consider the name a $tag instead of a component name. To later remove such component
they must have an alias or must be tagged.

```uml
@startuml
component [$C1]
component [$C2] $C2
component [$C2] as dollarC2
remove $C1
remove $C2
remove dollarC2
@enduml
```

<!-- Page 156 / 550 -->

//7.2 Interfaces
----------------

Interface can be defined using the () symbol (because this looks like a circle).
You can also use the interface keyword to define an interface. And you can define an alias, using the
as keyword. This alias will be used latter, when defining relations.
We will see latter that interface definition is optional.

```uml
@startuml
() "First Interface"
() "Another interface" as Interf2
interface Interf3
interface "Last\ninterface" as Interf4
[component]
footer //Adding "component" to force diagram to be a **component diagram**//
@enduml
```

//7.3 Basic example
-------------------
Links between elements are made using combinations of dotted line (..), straight line (--), and arrows
(-->) symbols.

```uml
@startuml
DataAccess - [First Component]
[First Component] ..> HTTP : use
@enduml
```

//7.4 Using notes
-----------------
You can use the note left of , note right of , note top of , note bottom of keywords to define
notes related to a single object.

```uml
@startuml
[Component] as C
<!-- Page 157 / 550 -->

note top of C: A top note
note bottom of C
A bottom note can also
be on several lines
end note
note left of C
A left note can also
be on several lines
end note
note right of C: A right note
@enduml
```

A note can be also defined alone with the note keywords, then linked to other objects using the ..
symbol or whatever arrow symbol (-, --, ...).

```uml
@startuml
[Component] as C
note as N
A floating note can also
be on several lines
end note
C .. N
@enduml
```

Another note example:

```uml
@startuml
interface "Data Access" as DA
DA - [First Component]
[First Component] ..> HTTP : use
<!-- Page 158 / 550 -->

note left of HTTP : Web Service only
note right of [First Component]
A note can also
be on several lines
end note
@enduml
```

//7.5 Grouping Components
-------------------------

You can use several keywords to group components and interfaces together:
• package

• node

• folder

• frame

• cloud

• database


```uml
@startuml
package "Some Group" {
HTTP - [First Component]
[Another Component]
}
node "Other Groups" {
FTP - [Second Component]
[First Component] --> FTP
}
cloud {
[Example 1]
}
database "MySql" {
folder "This is my folder" {
[Folder 3]
}
frame "Foo" {
[Frame 4]
}
}
<!-- Page 159 / 550 -->

[Another Component] --> [Example 1]
[Example 1] --> [Folder 3]
[Folder 3] --> [Frame 4]
@enduml
```

//7.6 Changing arrows direction
-------------------------------

By default, links between classes have two dashes -- and are vertically oriented. It is possible to use
horizontal link by putting a single dash (or dot) like this:

```uml
@startuml
[Component] --> Interface1
[Component] -> Interface2
@enduml
```

You can also change directions by reversing the link:

```uml
@startuml
<!-- Page 160 / 550 -->

Interface1 <-- [Component]
Interface2 <- [Component]
@enduml
```

It is also possible to change arrow direction by adding left, right, up or down keywords inside the arrow:

```uml
@startuml
[Component] -left-> left
[Component] -right-> right
[Component] -up-> up
[Component] -down-> down
@enduml
```

You can shorten the arrow by using only the first character of the direction (for example, -d- instead of
-down-) or the two first characters (-do-).
Please note that you should not abuse this functionality : Graphviz gives usually good results without
tweaking.
And with the left to right direction parameter:

```uml
@startuml
left to right direction
[Component] -left-> left
[Component] -right-> right
[Component] -up-> up
[Component] -down-> down
@enduml
```

<!-- Page 161 / 550 -->

7.7 Use UML2 notation
By default (from v1.2020.13-14), UML2 notation is used.

```uml
@startuml
interface "Data Access" as DA
DA - [First Component]
[First Component] ..> HTTP : use
@enduml
```

//7.8 Use UML1 notation
-----------------------
The skinparam componentStyle uml1 command is used to switch to UML1 notation.

```uml
@startuml
skinparam componentStyle uml1
interface "Data Access" as DA
DA - [First Component]
[First Component] ..> HTTP : use
@enduml
```

<!-- Page 162 / 550 -->

//7.9 Use rectangle notation (remove UML notation)
--------------------------------------------------

The skinparam componentStyle rectangle command is used to switch to rectangle notation (without
any UML notation).

```uml
@startuml
skinparam componentStyle rectangle
interface "Data Access" as DA
DA - [First Component]
[First Component] ..> HTTP : use
@enduml
```

//7.10 Long description
-----------------------
It is possible to put description on several lines using square brackets.

```uml
@startuml
component comp1 [
This component
has a long comment
on several lines
]
@enduml
```

//7.11 Individual colors
------------------------
You can specify a color after component definition.

```uml
@startuml
component [Web Server] #Yellow
@enduml
```

//7.12 Using Sprite in Stereotype
---------------------------------
You can use sprites within stereotype components.

```uml
@startuml
sprite $businessProcess [16x16/16] {
<!-- Page 163 / 550 -->

FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFF0FFFFF
FFFFFFFFFF00FFFF
FF00000000000FFF
FF000000000000FF
FF00000000000FFF
FFFFFFFFFF00FFFF
FFFFFFFFFF0FFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
FFFFFFFFFFFFFFFF
}
rectangle " End to End\nbusiness process" <<$businessProcess>> {
rectangle "inner process 1" <<$businessProcess>> as src
rectangle "inner process 2" <<$businessProcess>> as tgt
src -> tgt
}
@enduml
```

//7.13 Skinparam
----------------

You can use the skinparam command to change colors and fonts for the drawing.
You can use this command :
• In the diagram definition, like any other commands;

• In an included file;

• In a configuration file, provided in the command line or the Ant task.

You can define specific color and fonts for stereotyped components and interfaces.

```uml
@startuml
skinparam interface {
backgroundColor RosyBrown
borderColor orange
}
skinparam component {
FontSize 13
BackgroundColor<<Apache>> Pink
BorderColor<<Apache>> #FF6655
FontName Courier
BorderColor black
<!-- Page 164 / 550 -->

BackgroundColor gold
ArrowFontName Impact
ArrowColor #FF6655
ArrowFontColor #777777
}
() "Data Access" as DA
Component "Web Server" as WS << Apache >>
DA - [First Component]
[First Component] ..> () HTTP : use
HTTP - WS
@enduml
```


```uml
@startuml
skinparam component {
backgroundColor<<static lib>> DarkKhaki
backgroundColor<<shared lib>> Green
}
skinparam node {
borderColor Green
backgroundColor Yellow
backgroundColor<<shared_node>> Magenta
}
skinparam databaseBackgroundColor Aqua
[AA] <<static lib>>
[BB] <<shared lib>>
[CC] <<static lib>>
node node1
node node2 <<shared_node>>
database Production
@enduml
```

<!-- Page 165 / 550 -->

//7.14 Specific SkinParameter
-----------------------------

//7.14.1 componentStyle
-----------------------
• By default (or with skinparam componentStyle uml2), you have an icon for component


```uml
@startuml
skinparam BackgroundColor transparent
skinparam componentStyle uml2
component A {
component "A.1" {
}
component A.44 {
[A4.1]
}
component "A.2"
[A.3]
component A.5 [
A.5]
component A.6 [
]
}
[a]->[b]
@enduml
```

• If you want to suppress it, and to have only the rectangle, you can use skinparam componentStyle

rectangle

```uml
@startuml
skinparam BackgroundColor transparent
skinparam componentStyle rectangle
component A {
component "A.1" {
}
component A.44 {
<!-- Page 166 / 550 -->

[A4.1]
}
component "A.2"
[A.3]
component A.5 [
A.5]
component A.6 [
]
}
[a]->[b]
@enduml
```

[Ref. 10798]

//7.15 Hide or Remove unlinked component
----------------------------------------
By default, all components are displayed:

```uml
@startuml
component C1
component C2
component C3
C1 -- C2
@enduml
```

But you can:
• hide @unlinked components:


```uml
@startuml
component C1
component C2
component C3
C1 -- C2
hide @unlinked
@enduml
```

<!-- Page 167 / 550 -->

• or remove @unlinked components:


```uml
@startuml
component C1
component C2
component C3
C1 -- C2
remove @unlinked
@enduml
```

[Ref. QA-11052]

//7.16 Hide, Remove or Restore tagged component or wildcard
--------------------------------------------------------
You can put $tags (using $) on components, then remove, hide or restore components either individually
or by tags.
By default, all components are displayed:

```uml
@startuml
component C1 $tag13
component C2
component C3 $tag13
C1 -- C2
@enduml
```

But you can:
• hide $tag13 components:


```uml
@startuml
component C1 $tag13
component C2
component C3 $tag13
<!-- Page 168 / 550 -->

C1 -- C2
hide $tag13
@enduml
```

• or remove $tag13 components:


```uml
@startuml
component C1 $tag13
component C2
component C3 $tag13
C1 -- C2
remove $tag13
@enduml
```

• or remove $tag13 and restore $tag1 components:


```uml
@startuml
component C1 $tag13 $tag1
component C2
component C3 $tag13
C1 -- C2
remove $tag13
restore $tag1
@enduml
```

• or remove * and restore $tag1 components:


```uml
@startuml
component C1 $tag13 $tag1
component C2
component C3 $tag13
C1 -- C2
remove *
restore $tag1
@enduml
```

<!-- Page 169 / 550 -->

[Ref. QA-7337 and QA-11052]

//7.17 Display JSON Data on Component diagram
---------------------------------------------

//7.17.1 Simple example
-----------------------

```uml
@startuml
allowmixing
component Component
() Interface
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-15481]
For another example, see on JSON page.

//7.18 Port [port, portIn, portOut]
-----------------------------------
You can add port with port, portinand portout keywords.

//7.18.1 Port
-------------

```uml
@startuml
[c]
component C {
port p1
port p2
port p3
component c1
}
c --> p1
c --> p2
c --> p3
p1 --> c1
p2 --> c1
@enduml
```

<!-- Page 170 / 550 -->

//7.18.2 PortIn
---------------

```uml
@startuml
[c]
component C {
portin p1
portin p2
portin p3
component c1
}
c --> p1
c --> p2
c --> p3
p1 --> c1
p2 --> c1
@enduml
```

//7.18.3 PortOut
----------------

```uml
@startuml
component C {
portout p1
portout p2
portout p3
component c1
}
[o]
p1 --> o
p2 --> o
p3 --> o
<!-- Page 171 / 550 -->

c1 --> p1
@enduml
```

7.18.4 Mixing PortIn & PortOut

```uml
@startuml
[i]
component C {
portin p1
portin p2
portin p3
portout po1
portout po2
portout po3
component c1
}
[o]
i --> p1
i --> p2
i --> p3
p1 --> c1
p2 --> c1
po1 --> o
po2 --> o
po3 --> o
c1 --> po1
@enduml
```

<!-- Page 172 / 550 -->

<!-- Page 173 / 550 -->

/8 Deployment Diagram
=====================

A Deployment Diagram is a type of diagram that visualizes the architecture of systems, showcasing
how software components are deployed onto hardware. It provides a clear picture of the distribution of
components across various nodes, such as servers, workstations, and devices.
With PlantUML, creating deployment diagrams becomes a breeze. The platform offers a simple and
intuitive way to design these diagrams using plain text, ensuring rapid iterations and easy version control.
Moreover, the PlantUML forum provides a vibrant community where users can seek help, share ideas,
and collaborate on diagramming challenges. One of the key advantages of PlantUML is its ability to
integrate seamlessly with various tools and platforms, making it a preferred choice for professionals and
enthusiasts alike.

//8.1 Declaring element
-----------------------

```uml
@startuml
actor actor
actor/ "actor/"
agent agent
artifact artifact
boundary boundary
card card
circle circle
cloud cloud
collections collections
component component
control control
database database
entity entity
file file
folder folder
frame frame
hexagon hexagon
interface interface
label label
node node
package package
person person
queue queue
rectangle rectangle
stack stack
storage storage
usecase usecase
usecase/ "usecase/"
@enduml
```

<!-- Page 174 / 550 -->

You can optionaly put text using bracket [] for a long description.

```uml
@startuml
folder folder [
This is a <b>folder
----
You can use separator
====
of different kind
....
and style
]
node node [
This is a <b>node
----
You can use separator
====
of different kind
....
and style
]
database database [
This is a <b>database
----
You can use separator
====
of different kind
....
and style
<!-- Page 175 / 550 -->

]
usecase usecase [
This is a <b>usecase
----
You can use separator
====
of different kind
....
and style
]
card card [
This is a <b>card
----
You can use separator
====
of different kind
....
and style
<i><color:blue>(add from V1.2020.7)</color></i>
]
@enduml
```

//8.2 Declaring element (using short form)
------------------------------------------
We can declare element using some short forms.
Long form Keyword Short form Keyword Long form example Short form example Ref.
actor : a : actor actor1 :actor2: Actors
component [ c ] component component1 [component2] Components
interface () i interface interface1 () "interface2" Interfaces
usecase ( u ) usecase usecase1 (usecase2) Usecases

//8.2.1 Actor
-------------

```uml
@startuml
actor actor1
:actor2:
@enduml
```

<!-- Page 176 / 550 -->

NB: There is an old syntax for actor with guillemet which is now deprecated and will be removed some
days. Please do not use in your diagram.

//8.2.2 Component
-----------------

```uml
@startuml
component component1
[component2]
@enduml
```

//8.2.3 Interface
-----------------

```uml
@startuml
interface interface1
() "interface2"
label "//interface example//"
@enduml
```

//8.2.4 Usecase
---------------

```uml
@startuml
usecase usecase1
(usecase2)
@enduml
```

//8.3 Linking or arrow
----------------------
You can create simple links between elements with or without labels:

```uml
@startuml
node node1
node node2
node node3
node node4
<!-- Page 177 / 550 -->

node node5
node1 -- node2 : label1
node1 .. node3 : label2
node1 ~~ node4 : label3
node1 == node5
@enduml
```

It is possible to use several types of links:

```uml
@startuml
artifact artifact1
artifact artifact2
artifact artifact3
artifact artifact4
artifact artifact5
artifact artifact6
artifact artifact7
artifact artifact8
artifact artifact9
artifact artifact10
artifact1 --> artifact2
artifact1 --* artifact3
artifact1 --o artifact4
artifact1 --+ artifact5
artifact1 --# artifact6
artifact1 -->> artifact7
artifact1 --0 artifact8
artifact1 --^ artifact9
artifact1 --(0 artifact10
@enduml
```

You can also have the following types:

```uml
@startuml
cloud cloud1
cloud cloud2
cloud cloud3
cloud cloud4
<!-- Page 178 / 550 -->

cloud cloud5
cloud1 -0- cloud2
cloud1 -0)- cloud3
cloud1 -(0- cloud4
cloud1 -(0)- cloud5
@enduml
```

or another example:

```uml
@startuml
actor foo1
actor foo2
foo1 <-0-> foo2
foo1 <-(0)-> foo2
(ac1) -le(0)-> left1
ac1 -ri(0)-> right1
ac1 .up(0).> up1
ac1 ~up(0)~> up2
ac1 -do(0)-> down1
ac1 -do(0)-> down2
actor1 -0)- actor2
component comp1
component comp2
comp1 *-0)-+ comp2
[comp3] <-->> [comp4]
boundary b1
control c1
b1 -(0)- c1
component comp1
interface interf1
comp1 #~~( interf1
:mode1actor: -0)- fooa1
:mode1actorl: -ri0)- foo1l
[component1] 0)-(0-(0 [componentC]
() component3 )-0-(0 "foo" [componentC]
[aze1] #-->> [aze2]
@enduml
```

<!-- Page 179 / 550 -->

[Ref. QA-547 and QA-1736]
? See all type on Appendix.

//8.4 Bracketed arrow style
---------------------------
Similar as Bracketed class relations (linking or arrow) style

//8.4.1 Line style
------------------
It’s also possible to have explicitly bold, dashed, dotted, hidden or plain arrows:
• without label


```uml
@startuml
node foo
title Bracketed line style without label
foo --> bar
foo -[bold]-> bar1
foo -[dashed]-> bar2
foo -[dotted]-> bar3
foo -[hidden]-> bar4
foo -[plain]-> bar5
@enduml
```

• with label


```uml
@startuml
title Bracketed line style with label
node foo
foo --> bar : ?
foo -[bold]-> bar1 : [bold]
foo -[dashed]-> bar2 : [dashed]
foo -[dotted]-> bar3 : [dotted]
foo -[hidden]-> bar4 : [hidden]
foo -[plain]-> bar5 : [plain]
@enduml
```

<!-- Page 180 / 550 -->

[Adapted from QA-4181]

//8.4.2 Line color
------------------

```uml
@startuml
title Bracketed line color
node foo
foo --> bar
foo -[#red]-> bar1 : [#red]
foo -[#green]-> bar2 : [#green]
foo -[#blue]-> bar3 : [#blue]
foo -[#blue;#yellow;#green]-> bar4
@enduml
```

//8.4.3 Line thickness
----------------------

```uml
@startuml
title Bracketed line thickness
node foo
foo --> bar : ?
foo -[thickness=1]-> bar1 : [1]
foo -[thickness=2]-> bar2 : [2]
foo -[thickness=4]-> bar3 : [4]
foo -[thickness=8]-> bar4 : [8]
foo -[thickness=16]-> bar5 : [16]
@enduml
```

<!-- Page 181 / 550 -->

[Adapted from QA-4949]

//8.4.4 Mix
-----------

```uml
@startuml
title Bracketed line style mix
node foo
foo --> bar : ?
foo -[#red,thickness=1]-> bar1 : [#red,1]
foo -[#red,dashed,thickness=2]-> bar2 : [#red,dashed,2]
foo -[#green,dashed,thickness=4]-> bar3 : [#green,dashed,4]
foo -[#blue,dotted,thickness=8]-> bar4 : [blue,dotted,8]
foo -[#blue,plain,thickness=16]-> bar5 : [blue,plain,16]
foo -[#blue;#green,dashed,thickness=4]-> bar6 : [blue;green,dashed,4]
@enduml
```

//8.5 Change arrow color and style (inline style)
-------------------------------------------------
You can change the color or style of individual arrows using the inline following notation:
• #color;line.[bold|dashed|dotted];text:color


```uml
@startuml
node foo
foo --> bar : normal
foo --> bar1 #line:red;line.bold;text:red : red bold
foo --> bar2 #green;line.dashed;text:green : green dashed
foo --> bar3 #blue;line.dotted;text:blue : blue dotted
@enduml
```

<!-- Page 182 / 550 -->

[Ref. QA-3770 and QA-3816] [See similar feature on class diagram]

//8.6 Change element color and style (inline style)
---------------------------------------------------
You can change the color or style of individual element using the following notation:
• #[color|back:color];line:color;line.[bold|dashed|dotted];text:color


```uml
@startuml
agent a
cloud c #pink;line:red;line.bold;text:red
file f #palegreen;line:green;line.dashed;text:green
node n #aliceblue;line:blue;line.dotted;text:blue
@enduml
```


```uml
@startuml
agent a
cloud c #pink;line:red;line.bold;text:red [
c
cloud description
]
file f #palegreen;line:green;line.dashed;text:green {
[c1]
[c2]
}
frame frame {
node n #aliceblue;line:blue;line.dotted;text:blue
}
@enduml
```

[Ref. QA-6852]
<!-- Page 183 / 550 -->

//8.7 Nestable elements
-----------------------

Here are the nestable elements:

```uml
@startuml
artifact artifact {
}
card card {
}
cloud cloud {
}
component component {
}
database database {
}
file file {
}
folder folder {
}
frame frame {
}
hexagon hexagon {
}
node node {
}
package package {
}
queue queue {
}
rectangle rectangle {
}
stack stack {
}
storage storage {
}
@enduml
```

//8.8 Packages and nested elements
----------------------------------

//8.8.1 Example with one level
------------------------------

```uml
@startuml
artifact artifactVeryLOOOOOOOOOOOOOOOOOOOg as "artifact" {
file f1
}
card cardVeryLOOOOOOOOOOOOOOOOOOOg as "card" {
file f2
}
cloud cloudVeryLOOOOOOOOOOOOOOOOOOOg as "cloud" {
file f3
}
component componentVeryLOOOOOOOOOOOOOOOOOOOg as "component" {
file f4
}
database databaseVeryLOOOOOOOOOOOOOOOOOOOg as "database" {
file f5
<!-- Page 184 / 550 -->

}
file fileVeryLOOOOOOOOOOOOOOOOOOOg as "file" {
file f6
}
folder folderVeryLOOOOOOOOOOOOOOOOOOOg as "folder" {
file f7
}
frame frameVeryLOOOOOOOOOOOOOOOOOOOg as "frame" {
file f8
}
hexagon hexagonVeryLOOOOOOOOOOOOOOOOOOOg as "hexagon" {
file f9
}
node nodeVeryLOOOOOOOOOOOOOOOOOOOg as "node" {
file f10
}
package packageVeryLOOOOOOOOOOOOOOOOOOOg as "package" {
file f11
}
queue queueVeryLOOOOOOOOOOOOOOOOOOOg as "queue" {
file f12
}
rectangle rectangleVeryLOOOOOOOOOOOOOOOOOOOg as "rectangle" {
file f13
}
stack stackVeryLOOOOOOOOOOOOOOOOOOOg as "stack" {
file f14
}
storage storageVeryLOOOOOOOOOOOOOOOOOOOg as "storage" {
file f15
}
@enduml
```

//8.8.2 Other example
---------------------

```uml
@startuml
artifact Foo1 {
folder Foo2
}
folder Foo3 {
artifact Foo4
}
frame Foo5 {
database Foo6
}
cloud vpc {
node ec2 {
stack stack
}
}
<!-- Page 185 / 550 -->

@enduml
```


```uml
@startuml
node Foo1 {
cloud Foo2
}
cloud Foo3 {
frame Foo4
}
database Foo5 {
storage Foo6
}
storage Foo7 {
storage Foo8
}
@enduml
```

//8.8.3 Full nesting
--------------------
Here is all the nested elements:
• by alphabetical order:


```uml
@startuml
artifact artifact {
card card {
cloud cloud {
component component {
database database {
file file {
folder folder {
frame frame {
hexagon hexagon {
node node {
package package {
queue queue {
rectangle rectangle {
stack stack {
storage storage {
<!-- Page 186 / 550 -->

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
@enduml
```

<!-- Page 187 / 550 -->

• or reverse alphabetical order


```uml
@startuml
storage storage {
stack stack {
rectangle rectangle {
queue queue {
package package {
<!-- Page 188 / 550 -->

node node {
hexagon hexagon {
frame frame {
folder folder {
file file {
database database {
component component {
cloud cloud {
card card {
artifact artifact {
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
@enduml
```

<!-- Page 189 / 550 -->

//8.9 Alias
-----------

//8.9.1 Simple alias with as
----------------------------

```uml
@startuml
node Node1 as n1
node "Node 2" as n2
<!-- Page 190 / 550 -->

file f1 as "File 1"
cloud c1 as "this
is
a
cloud"
cloud c2 [this
is
another
cloud]
n1 -> n2
n1 --> f1
f1 -> c1
c1 -> c2
@enduml
```

//8.9.2 Examples of long alias
------------------------------

```uml
@startuml
actor "actor" as actorVeryLOOOOOOOOOOOOOOOOOOOg
agent "agent" as agentVeryLOOOOOOOOOOOOOOOOOOOg
artifact "artifact" as artifactVeryLOOOOOOOOOOOOOOOOOOOg
boundary "boundary" as boundaryVeryLOOOOOOOOOOOOOOOOOOOg
card "card" as cardVeryLOOOOOOOOOOOOOOOOOOOg
cloud "cloud" as cloudVeryLOOOOOOOOOOOOOOOOOOOg
collections "collections" as collectionsVeryLOOOOOOOOOOOOOOOOOOOg
component "component" as componentVeryLOOOOOOOOOOOOOOOOOOOg
control "control" as controlVeryLOOOOOOOOOOOOOOOOOOOg
database "database" as databaseVeryLOOOOOOOOOOOOOOOOOOOg
entity "entity" as entityVeryLOOOOOOOOOOOOOOOOOOOg
file "file" as fileVeryLOOOOOOOOOOOOOOOOOOOg
folder "folder" as folderVeryLOOOOOOOOOOOOOOOOOOOg
frame "frame" as frameVeryLOOOOOOOOOOOOOOOOOOOg
hexagon "hexagon" as hexagonVeryLOOOOOOOOOOOOOOOOOOOg
interface "interface" as interfaceVeryLOOOOOOOOOOOOOOOOOOOg
label "label" as labelVeryLOOOOOOOOOOOOOOOOOOOg
node "node" as nodeVeryLOOOOOOOOOOOOOOOOOOOg
package "package" as packageVeryLOOOOOOOOOOOOOOOOOOOg
person "person" as personVeryLOOOOOOOOOOOOOOOOOOOg
queue "queue" as queueVeryLOOOOOOOOOOOOOOOOOOOg
stack "stack" as stackVeryLOOOOOOOOOOOOOOOOOOOg
rectangle "rectangle" as rectangleVeryLOOOOOOOOOOOOOOOOOOOg
storage "storage" as storageVeryLOOOOOOOOOOOOOOOOOOOg
usecase "usecase" as usecaseVeryLOOOOOOOOOOOOOOOOOOOg
@enduml
```

<!-- Page 191 / 550 -->


```uml
@startuml
actor actorVeryLOOOOOOOOOOOOOOOOOOOg as "actor"
agent agentVeryLOOOOOOOOOOOOOOOOOOOg as "agent"
artifact artifactVeryLOOOOOOOOOOOOOOOOOOOg as "artifact"
boundary boundaryVeryLOOOOOOOOOOOOOOOOOOOg as "boundary"
card cardVeryLOOOOOOOOOOOOOOOOOOOg as "card"
cloud cloudVeryLOOOOOOOOOOOOOOOOOOOg as "cloud"
collections collectionsVeryLOOOOOOOOOOOOOOOOOOOg as "collections"
component componentVeryLOOOOOOOOOOOOOOOOOOOg as "component"
control controlVeryLOOOOOOOOOOOOOOOOOOOg as "control"
database databaseVeryLOOOOOOOOOOOOOOOOOOOg as "database"
entity entityVeryLOOOOOOOOOOOOOOOOOOOg as "entity"
file fileVeryLOOOOOOOOOOOOOOOOOOOg as "file"
folder folderVeryLOOOOOOOOOOOOOOOOOOOg as "folder"
frame frameVeryLOOOOOOOOOOOOOOOOOOOg as "frame"
hexagon hexagonVeryLOOOOOOOOOOOOOOOOOOOg as "hexagon"
interface interfaceVeryLOOOOOOOOOOOOOOOOOOOg as "interface"
label labelVeryLOOOOOOOOOOOOOOOOOOOg as "label"
node nodeVeryLOOOOOOOOOOOOOOOOOOOg as "node"
package packageVeryLOOOOOOOOOOOOOOOOOOOg as "package"
person personVeryLOOOOOOOOOOOOOOOOOOOg as "person"
queue queueVeryLOOOOOOOOOOOOOOOOOOOg as "queue"
stack stackVeryLOOOOOOOOOOOOOOOOOOOg as "stack"
rectangle rectangleVeryLOOOOOOOOOOOOOOOOOOOg as "rectangle"
storage storageVeryLOOOOOOOOOOOOOOOOOOOg as "storage"
usecase usecaseVeryLOOOOOOOOOOOOOOOOOOOg as "usecase"
@enduml
```

<!-- Page 192 / 550 -->

[Ref. QA-12082]

//8.10 Round corner
-------------------

```uml
@startuml
skinparam rectangle {
roundCorner<<Concept>> 25
}
rectangle "Concept Model" <<Concept>> {
rectangle "Example 1" <<Concept>> as ex1
rectangle "Another rectangle"
}
@enduml
```

//8.11 Specific SkinParameter
-----------------------------

//8.11.1 roundCorner
--------------------

```uml
@startuml
skinparam roundCorner 15
actor actor
agent agent
artifact artifact
<!-- Page 193 / 550 -->

boundary boundary
card card
circle circle
cloud cloud
collections collections
component component
control control
database database
entity entity
file file
folder folder
frame frame
hexagon hexagon
interface interface
label label
node node
package package
person person
queue queue
rectangle rectangle
stack stack
storage storage
usecase usecase
@enduml
```

[Ref. QA-5299, QA-6915, QA-11943]

//8.12 Appendix: All type of arrow line
---------------------------------------

```uml
@startuml
left to right direction
skinparam nodesep 5
<!-- Page 194 / 550 -->

f3 ~~ b3 : ""~~""\n//dotted//
f2 .. b2 : ""..""\n//dashed//
f1 == b1 : ""==""\n//bold//
f0 -- b0 : ""--""\n//plain//
@enduml
```

//8.13 Appendix: All type of arrow head or ’0’ arrow
----------------------------------------------------

//8.13.1 Type of arrow head
---------------------------

```uml
@startuml
left to right direction
skinparam nodesep 5
f13 --0 b13 : ""--0""
f12 --@ b12 : ""--@""
f11 --:|> b11 : ""--:|>""
f10 --||> b10 : ""--||>""
f9 --|> b9 : ""--|>""
f8 --^ b8 : ""--^ ""
f7 --\\ b7 : ""--\\\\""
f6 --# b6 : ""--# ""
f5 --+ b5 : ""--+ ""
f4 --o b4 : ""--o ""
f3 --* b3 : ""--* ""
f2 -->> b2 : ""-->>""
f1 --> b1 : ""--> ""
f0 -- b0 : ""-- ""
@enduml
```

<!-- Page 195 / 550 -->

8.13.2 Type of ’0’ arrow or circle arrow

```uml
@startuml
left to right direction
skinparam nodesep 5
f10 0--0 b10 : "" 0--0 ""
f9 )--( b9 : "" )--( ""
f8 0)--(0 b8 : "" 0)--(0""
f7 0)-- b7 : "" 0)-- ""
f6 -0)- b6 : "" -0)- ""
f5 -(0)- b5 : "" -(0)-""
<!-- Page 196 / 550 -->

f4 -(0- b4 : "" -(0- ""
f3 --(0 b3 : "" --(0 ""
f2 --( b2 : "" --( ""
f1 --0 b1 : "" --0 ""
@enduml
```

8.14 Appendix: Test of inline style on all element

//8.14.1 Simple element
-----------------------

```uml
@startuml
actor actor #aliceblue;line:blue;line.dotted;text:blue
actor/ "actor/" #aliceblue;line:blue;line.dotted;text:blue
agent agent #aliceblue;line:blue;line.dotted;text:blue
artifact artifact #aliceblue;line:blue;line.dotted;text:blue
boundary boundary #aliceblue;line:blue;line.dotted;text:blue
card card #aliceblue;line:blue;line.dotted;text:blue
circle circle #aliceblue;line:blue;line.dotted;text:blue
cloud cloud #aliceblue;line:blue;line.dotted;text:blue
collections collections #aliceblue;line:blue;line.dotted;text:blue
component component #aliceblue;line:blue;line.dotted;text:blue
control control #aliceblue;line:blue;line.dotted;text:blue
database database #aliceblue;line:blue;line.dotted;text:blue
entity entity #aliceblue;line:blue;line.dotted;text:blue
file file #aliceblue;line:blue;line.dotted;text:blue
folder folder #aliceblue;line:blue;line.dotted;text:blue
<!-- Page 197 / 550 -->

frame frame #aliceblue;line:blue;line.dotted;text:blue
hexagon hexagon #aliceblue;line:blue;line.dotted;text:blue
interface interface #aliceblue;line:blue;line.dotted;text:blue
label label #aliceblue;line:blue;line.dotted;text:blue
node node #aliceblue;line:blue;line.dotted;text:blue
package package #aliceblue;line:blue;line.dotted;text:blue
person person #aliceblue;line:blue;line.dotted;text:blue
queue queue #aliceblue;line:blue;line.dotted;text:blue
rectangle rectangle #aliceblue;line:blue;line.dotted;text:blue
stack stack #aliceblue;line:blue;line.dotted;text:blue
storage storage #aliceblue;line:blue;line.dotted;text:blue
usecase usecase #aliceblue;line:blue;line.dotted;text:blue
usecase/ "usecase/" #aliceblue;line:blue;line.dotted;text:blue
@enduml
```

//8.14.2 Nested element
-----------------------
8.14.3 Without sub-element

```uml
@startuml
artifact artifact #aliceblue;line:blue;line.dotted;text:blue {
}
card card #aliceblue;line:blue;line.dotted;text:blue {
}
cloud cloud #aliceblue;line:blue;line.dotted;text:blue {
}
component component #aliceblue;line:blue;line.dotted;text:blue {
}
database database #aliceblue;line:blue;line.dotted;text:blue {
}
file file #aliceblue;line:blue;line.dotted;text:blue {
<!-- Page 198 / 550 -->

}
folder folder #aliceblue;line:blue;line.dotted;text:blue {
}
frame frame #aliceblue;line:blue;line.dotted;text:blue {
}
hexagon hexagon #aliceblue;line:blue;line.dotted;text:blue {
}
node node #aliceblue;line:blue;line.dotted;text:blue {
}
package package #aliceblue;line:blue;line.dotted;text:blue {
}
queue queue #aliceblue;line:blue;line.dotted;text:blue {
}
rectangle rectangle #aliceblue;line:blue;line.dotted;text:blue {
}
stack stack #aliceblue;line:blue;line.dotted;text:blue {
}
storage storage #aliceblue;line:blue;line.dotted;text:blue {
}
@enduml
```

8.14.4 With sub-element

```uml
@startuml
artifact artifactVeryLOOOOOOOOOOOOOOOOOOOg as "artifact" #aliceblue;line:blue;line.dotted;text:blue {
file f1
}
card cardVeryLOOOOOOOOOOOOOOOOOOOg as "card" #aliceblue;line:blue;line.dotted;text:blue {
file f2
}
cloud cloudVeryLOOOOOOOOOOOOOOOOOOOg as "cloud" #aliceblue;line:blue;line.dotted;text:blue {
file f3
}
component componentVeryLOOOOOOOOOOOOOOOOOOOg as "component" #aliceblue;line:blue;line.dotted;text:blue {
file f4
}
database databaseVeryLOOOOOOOOOOOOOOOOOOOg as "database" #aliceblue;line:blue;line.dotted;text:blue {
file f5
}
file fileVeryLOOOOOOOOOOOOOOOOOOOg as "file" #aliceblue;line:blue;line.dotted;text:blue {
file f6
}
folder folderVeryLOOOOOOOOOOOOOOOOOOOg as "folder" #aliceblue;line:blue;line.dotted;text:blue {
file f7
}
frame frameVeryLOOOOOOOOOOOOOOOOOOOg as "frame" #aliceblue;line:blue;line.dotted;text:blue {
file f8
}
hexagon hexagonVeryLOOOOOOOOOOOOOOOOOOOg as "hexagon" #aliceblue;line:blue;line.dotted;text:blue {
file f9
}
node nodeVeryLOOOOOOOOOOOOOOOOOOOg as "node" #aliceblue;line:blue;line.dotted;text:blue {
file f10
}
package packageVeryLOOOOOOOOOOOOOOOOOOOg as "package" #aliceblue;line:blue;line.dotted;text:blue {
<!-- Page 199 / 550 -->

file f11
}
queue queueVeryLOOOOOOOOOOOOOOOOOOOg as "queue" #aliceblue;line:blue;line.dotted;text:blue {
file f12
}
rectangle rectangleVeryLOOOOOOOOOOOOOOOOOOOg as "rectangle" #aliceblue;line:blue;line.dotted;text:blue {
file f13
}
stack stackVeryLOOOOOOOOOOOOOOOOOOOg as "stack" #aliceblue;line:blue;line.dotted;text:blue {
file f14
}
storage storageVeryLOOOOOOOOOOOOOOOOOOOg as "storage" #aliceblue;line:blue;line.dotted;text:blue {
file f15
}
@enduml
```

//8.15 Appendix: Test of style on all element
---------------------------------------------

//8.15.1 Simple element
-----------------------

//8.15.2 Global style (on componentDiagram)
-------------------------------------------

```uml
@startuml
<style>
componentDiagram {
BackGroundColor palegreen
LineThickness 1
LineColor red
}
document {
BackGroundColor white
}
</style>
actor actor
actor/ "actor/"
agent agent
artifact artifact
boundary boundary
card card
circle circle
cloud cloud
collections collections
component component
control control
database database
entity entity
file file
folder folder
frame frame
hexagon hexagon
interface interface
label label
node node
package package
<!-- Page 200 / 550 -->

person person
queue queue
rectangle rectangle
stack stack
storage storage
usecase usecase
usecase/ "usecase/"
@enduml
```

//8.15.3 Style for each element
-------------------------------

```uml
@startuml
<style>
actor {
BackGroundColor #f80c12
LineThickness 1
LineColor black
}
agent {
BackGroundColor #f80c12
LineThickness 1
LineColor black
}
artifact {
BackGroundColor #ee1100
LineThickness 1
LineColor black
}
boundary {
BackGroundColor #ee1100
LineThickness 1
<!-- Page 201 / 550 -->

LineColor black
}
card {
BackGroundColor #ff3311
LineThickness 1
LineColor black
}
circle {
BackGroundColor #ff3311
LineThickness 1
LineColor black
}
cloud {
BackGroundColor #ff4422
LineThickness 1
LineColor black
}
collections {
BackGroundColor #ff4422
LineThickness 1
LineColor black
}
component {
BackGroundColor #ff6644
LineThickness 1
LineColor black
}
control {
BackGroundColor #ff6644
LineThickness 1
LineColor black
}
database {
BackGroundColor #ff9933
LineThickness 1
LineColor black
}
entity {
BackGroundColor #feae2d
LineThickness 1
LineColor black
}
file {
BackGroundColor #feae2d
LineThickness 1
LineColor black
}
folder {
BackGroundColor #ccbb33
LineThickness 1
LineColor black
}
frame {
BackGroundColor #d0c310
LineThickness 1
LineColor black
}
hexagon {
<!-- Page 202 / 550 -->

BackGroundColor #aacc22
LineThickness 1
LineColor black
}
interface {
BackGroundColor #69d025
LineThickness 1
LineColor black
}
label {
BackGroundColor black
LineThickness 1
LineColor black
}
node {
BackGroundColor #22ccaa
LineThickness 1
LineColor black
}
package {
BackGroundColor #12bdb9
LineThickness 1
LineColor black
}
person {
BackGroundColor #11aabb
LineThickness 1
LineColor black
}
queue {
BackGroundColor #11aabb
LineThickness 1
LineColor black
}
rectangle {
BackGroundColor #4444dd
LineThickness 1
LineColor black
}
stack {
BackGroundColor #3311bb
LineThickness 1
LineColor black
}
storage {
BackGroundColor #3b0cbd
LineThickness 1
LineColor black
}
usecase {
BackGroundColor #442299
LineThickness 1
LineColor black
}
</style>
actor actor
actor/ "actor/"
agent agent
<!-- Page 203 / 550 -->

artifact artifact
boundary boundary
card card
circle circle
cloud cloud
collections collections
component component
control control
database database
entity entity
file file
folder folder
frame frame
hexagon hexagon
interface interface
label label
node node
package package
person person
queue queue
rectangle rectangle
stack stack
storage storage
usecase usecase
usecase/ "usecase/"
@enduml
```

[Ref. QA-13261]
<!-- Page 204 / 550 -->

//8.15.4 Nested element (without level)
---------------------------------------

//8.15.5 Global style (on componentDiagram)
-------------------------------------------

```uml
@startuml
<style>
componentDiagram {
BackGroundColor palegreen
LineThickness 2
LineColor red
}
</style>
artifact artifact {
}
card card {
}
cloud cloud {
}
component component {
}
database database {
}
file file {
}
folder folder {
}
frame frame {
}
hexagon hexagon {
}
node node {
}
package package {
}
queue queue {
}
rectangle rectangle {
}
stack stack {
}
storage storage {
}
@enduml
```

//8.15.6 Style for each nested element
--------------------------------------

```uml
@startuml
<style>
artifact {
BackGroundColor #ee1100
LineThickness 1
LineColor black
}
card {
BackGroundColor #ff3311
LineThickness 1
<!-- Page 205 / 550 -->

LineColor black
}
cloud {
BackGroundColor #ff4422
LineThickness 1
LineColor black
}
component {
BackGroundColor #ff6644
LineThickness 1
LineColor black
}
database {
BackGroundColor #ff9933
LineThickness 1
LineColor black
}
file {
BackGroundColor #feae2d
LineThickness 1
LineColor black
}
folder {
BackGroundColor #ccbb33
LineThickness 1
LineColor black
}
frame {
BackGroundColor #d0c310
LineThickness 1
LineColor black
}
hexagon {
BackGroundColor #aacc22
LineThickness 1
LineColor black
}
node {
BackGroundColor #22ccaa
LineThickness 1
LineColor black
}
package {
BackGroundColor #12bdb9
LineThickness 1
LineColor black
}
queue {
BackGroundColor #11aabb
LineThickness 1
LineColor black
}
rectangle {
BackGroundColor #4444dd
LineThickness 1
LineColor black
}
stack {
<!-- Page 206 / 550 -->

BackGroundColor #3311bb
LineThickness 1
LineColor black
}
storage {
BackGroundColor #3b0cbd
LineThickness 1
LineColor black
}
</style>
artifact artifact {
}
card card {
}
cloud cloud {
}
component component {
}
database database {
}
file file {
}
folder folder {
}
frame frame {
}
hexagon hexagon {
}
node node {
}
package package {
}
queue queue {
}
rectangle rectangle {
}
stack stack {
}
storage storage {
}
@enduml
```

//8.15.7 Nested element (with one level)
----------------------------------------

//8.15.8 Global style (on componentDiagram)
-------------------------------------------

```uml
@startuml
<style>
componentDiagram {
BackGroundColor palegreen
LineThickness 1
LineColor red
}
document {
BackGroundColor white
<!-- Page 207 / 550 -->

}
</style>
artifact e1 as "artifact" {
file f1
}
card e2 as "card" {
file f2
}
cloud e3 as "cloud" {
file f3
}
component e4 as "component" {
file f4
}
database e5 as "database" {
file f5
}
file e6 as "file" {
file f6
}
folder e7 as "folder" {
file f7
}
frame e8 as "frame" {
file f8
}
hexagon e9 as "hexagon" {
file f9
}
node e10 as "node" {
file f10
}
package e11 as "package" {
file f11
}
queue e12 as "queue" {
file f12
}
rectangle e13 as "rectangle" {
file f13
}
stack e14 as "stack" {
file f14
}
storage e15 as "storage" {
file f15
}
@enduml
```

//8.15.9 Style for each nested element
--------------------------------------

```uml
@startuml
<style>
<!-- Page 208 / 550 -->

artifact {
BackGroundColor #ee1100
LineThickness 1
LineColor black
}
card {
BackGroundColor #ff3311
LineThickness 1
LineColor black
}
cloud {
BackGroundColor #ff4422
LineThickness 1
LineColor black
}
component {
BackGroundColor #ff6644
LineThickness 1
LineColor black
}
database {
BackGroundColor #ff9933
LineThickness 1
LineColor black
}
file {
BackGroundColor #feae2d
LineThickness 1
LineColor black
}
folder {
BackGroundColor #ccbb33
LineThickness 1
LineColor black
}
frame {
BackGroundColor #d0c310
LineThickness 1
LineColor black
}
hexagon {
BackGroundColor #aacc22
LineThickness 1
LineColor black
}
node {
BackGroundColor #22ccaa
LineThickness 1
LineColor black
}
package {
BackGroundColor #12bdb9
LineThickness 1
LineColor black
}
queue {
BackGroundColor #11aabb
LineThickness 1
<!-- Page 209 / 550 -->

LineColor black
}
rectangle {
BackGroundColor #4444dd
LineThickness 1
LineColor black
}
stack {
BackGroundColor #3311bb
LineThickness 1
LineColor black
}
storage {
BackGroundColor #3b0cbd
LineThickness 1
LineColor black
}
</style>
artifact e1 as "artifact" {
file f1
}
card e2 as "card" {
file f2
}
cloud e3 as "cloud" {
file f3
}
component e4 as "component" {
file f4
}
database e5 as "database" {
file f5
}
file e6 as "file" {
file f6
}
folder e7 as "folder" {
file f7
}
frame e8 as "frame" {
file f8
}
hexagon e9 as "hexagon" {
file f9
}
node e10 as "node" {
file f10
}
package e11 as "package" {
file f11
}
queue e12 as "queue" {
file f12
}
rectangle e13 as "rectangle" {
file f13
}
stack e14 as "stack" {
<!-- Page 210 / 550 -->

file f14
}
storage e15 as "storage" {
file f15
}
@enduml
```

8.16 Appendix: Test of stereotype with style on all element

//8.16.1 Simple element
-----------------------

```uml
@startuml
<style>
.stereo {
BackgroundColor palegreen
}
</style>
actor actor << stereo >>
actor/ "actor/" << stereo >>
agent agent << stereo >>
artifact artifact << stereo >>
boundary boundary << stereo >>
card card << stereo >>
circle circle << stereo >>
cloud cloud << stereo >>
collections collections << stereo >>
component component << stereo >>
control control << stereo >>
database database << stereo >>
entity entity << stereo >>
file file << stereo >>
folder folder << stereo >>
frame frame << stereo >>
hexagon hexagon << stereo >>
interface interface << stereo >>
label label << stereo >>
node node << stereo >>
package package << stereo >>
person person << stereo >>
queue queue << stereo >>
rectangle rectangle << stereo >>
stack stack << stereo >>
storage storage << stereo >>
usecase usecase << stereo >>
usecase/ "usecase/" << stereo >>
@enduml
```

<!-- Page 211 / 550 -->

//8.17 Display JSON Data on Deployment diagram
----------------------------------------------

//8.17.1 Simple example
-----------------------

```uml
@startuml
allowmixing
component Component
actor Actor
usecase Usecase
() Interface
node Node
cloud Cloud
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

<!-- Page 212 / 550 -->

diagram
[Ref. QA-15481]
For another example, see on JSON page.

//8.18 Mixing Deployment (Usecase, Component, Deployment) element within
--------------------------------------------------------
a Class or Object diagram
In order to add a Deployment element or a State element within a Class or Object diagram, you can use
the allowmixing or allow_mixing directive.

//8.18.1 Mixing all elements
----------------------------

```uml
@startuml
allowmixing
skinparam nodesep 10
abstract abstract
abstract class "abstract class"
annotation annotation
circle circle
() circle_short_form
class class
diamond diamond
<> diamond_short_form
entity entity
enum enum
exception exception
interface interface
metaclass metaclass
protocol protocol
stereotype stereotype
struct struct
object object
map map {
key => value
}
json JSON {
"fruit":"Apple",
<!-- Page 213 / 550 -->

diagram
"size":"Large",
"color": ["Red", "Green"]
}
actor actor
actor/ "actor/"
agent agent
artifact artifact
boundary boundary
card card
circle circle
cloud cloud
collections collections
component component
control control
database database
entity entity
file file
folder folder
frame frame
hexagon hexagon
interface interface
label label
node node
package package
person person
queue queue
rectangle rectangle
stack stack
storage storage
usecase usecase
usecase/ "usecase/"
state state
@enduml
```

<!-- Page 214 / 550 -->

[Ref. QA-2335 and QA-5329]

//8.19 Port [port, portIn, portOut]
-----------------------------------
You can added port with port, portinand portout keywords.

//8.19.1 Port
-------------

```uml
@startuml
[c]
node node {
port p1
port p2
port p3
file f1
}
c --> p1
<!-- Page 215 / 550 -->

c --> p2
c --> p3
p1 --> f1
p2 --> f1
@enduml
```

//8.19.2 PortIn
---------------

```uml
@startuml
[c]
node node {
portin p1
portin p2
portin p3
file f1
}
c --> p1
c --> p2
c --> p3
p1 --> f1
p2 --> f1
@enduml
```

//8.19.3 PortOut
----------------

```uml
@startuml
node node {
portout p1
portout p2
portout p3
file f1
<!-- Page 216 / 550 -->

}
[o]
p1 --> o
p2 --> o
p3 --> o
f1 --> p1
@enduml
```

8.19.4 Mixing PortIn & PortOut

```uml
@startuml
[i]
node node {
portin p1
portin p2
portin p3
portout po1
portout po2
portout po3
file f1
}
[o]
i --> p1
i --> p2
i --> p3
p1 --> f1
p2 --> f1
po1 --> o
po2 --> o
po3 --> o
f1 --> po1
@enduml
```

<!-- Page 217 / 550 -->

<!-- Page 218 / 550 -->

/9 State Diagram
================

State diagrams provide a visual representation of the various states a system or an object can be in,
as well as the transitions between those states. They are essential in modeling the dynamic behavior of
systems, capturing how they respond to different events over time. State diagrams depict the system’s
life cycle, making it easier to understand, design, and optimize its behavior.
Using PlantUML to create state diagrams offers several advantages:

• Text-Based Language: Quickly define and visualize the states and transitions without the hassle

of manual drawing.

• Efficiency and Consistency: Ensure streamlined diagram creation and easy version control.


• Versatility: Integrate with various documentation platforms and support multiple output formats.


• Open-Source & Community Support: Backed by a strong community that continuously

contributes to its enhancements and offers invaluable resources.

//9.1 Simple State
------------------
You can use [\*] for the starting point and ending point of the state diagram.
Use --> for arrows.

```uml
@startuml
[*] --> State1
State1 --> [*]
State1 : this is a string
State1 : this is another string
State1 -> State2
State2 --> [*]
@enduml
```
              ,-.                     
              | |                     
              |-|                     
              `-'                     
                |                     
                |                     
    ,----------------------.          
    |State1                |  ,------.
    |----------------------|  |State2|
    |this is a string      |--|------|
    |this is another string|  `------'
    `----------------------'          
                                      
                       ,-.            
                       | |            
                       |-|            
                       `-'            

//9.2 Change state rendering
----------------------------
You can use hide empty description to render state as simple box.

```uml
@startuml
hide empty description
[*] --> State1
State1 --> [*]
State1 : this is a string
State1 : this is another string
State1 -> State2
State2 --> [*]
@enduml
```

<!-- Page 219 / 550 -->

//9.3 Composite state
---------------------

A state can also be composite. You have to define it using the state keywords and brackets.
9.3.1 Internal sub-state

```uml
@startuml
scale 350 width
[*] --> NotShooting
state NotShooting {
[*] --> Idle
Idle --> Configuring : EvConfig
Configuring --> Idle : EvConfig
}
state Configuring {
[*] --> NewValueSelection
NewValueSelection --> NewValuePreview : EvNewValue
NewValuePreview --> NewValueSelection : EvNewValueRejected
NewValuePreview --> NewValueSelection : EvNewValueSaved
state NewValuePreview {
State1 -> State2
}
}
@enduml
```

<!-- Page 220 / 550 -->

//9.3.2 Sub-state to sub-state
------------------------------

```uml
@startuml
state A {
state X {
}
state Y {
}
}
state B {
state Z {
}
}
X --> Z
Z --> Y
@enduml
```

<!-- Page 221 / 550 -->

[Ref. QA-3300]

//9.4 Long name
---------------
You can also use the state keyword to use long description for states.

```uml
@startuml
scale 600 width
[*] -> State1
State1 --> State2 : Succeeded
State1 --> [*] : Aborted
State2 --> State3 : Succeeded
State2 --> [*] : Aborted
state State3 {
state "Accumulate Enough Data\nLong State Name" as long1
long1 : Just a test
[*] --> long1
long1 --> long1 : New Data
long1 --> ProcessData : Enough Data
}
State3 --> State3 : Failed
State3 --> [*] : Succeeded / Save Result
State3 --> [*] : Aborted
@enduml
```

<!-- Page 222 / 550 -->

//9.5 History [[H], [H*]]
-------------------------
You can use [H] for the history and [H*] for the deep history of a substate.

```uml
@startuml
[*] -> State1
State1 --> State2 : Succeeded
State1 --> [*] : Aborted
State2 --> State3 : Succeeded
State2 --> [*] : Aborted
state State3 {
state "Accumulate Enough Data" as long1
long1 : Just a test
[*] --> long1
long1 --> long1 : New Data
long1 --> ProcessData : Enough Data
State2 --> [H]: Resume
}
State3 --> State2 : Pause
State2 --> State3[H*]: DeepResume
State3 --> State3 : Failed
State3 --> [*] : Succeeded / Save Result
State3 --> [*] : Aborted
@enduml
```

//9.6 Fork [fork, join]
-----------------------
You can also fork and join using the <<fork>> and <<join>> stereotypes.
<!-- Page 223 / 550 -->


```uml
@startuml
state fork_state <<fork>>
[*] --> fork_state
fork_state --> State2
fork_state --> State3
state join_state <<join>>
State2 --> join_state
State3 --> join_state
join_state --> State4
State4 --> [*]
@enduml
```

//9.7 Concurrent state [–, ||]
------------------------------

You can define concurrent state into a composite state using either -- or || symbol as separator.


//9.7.1 Horizontal separator --
-------------------------------


```uml
@startuml
[*] --> Active
state Active {
[*] -> NumLockOff
NumLockOff --> NumLockOn : EvNumLockPressed
NumLockOn --> NumLockOff : EvNumLockPressed
--
[*] -> CapsLockOff
CapsLockOff --> CapsLockOn : EvCapsLockPressed
CapsLockOn --> CapsLockOff : EvCapsLockPressed
--
[*] -> ScrollLockOff
ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
<!-- Page 224 / 550 -->

ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
}
@enduml
```

//9.7.2 Vertical separator \||
-----------------------------

```uml
@startuml
[*] --> Active
state Active {
[*] -> NumLockOff
NumLockOff --> NumLockOn : EvNumLockPressed
NumLockOn --> NumLockOff : EvNumLockPressed
||
[*] -> CapsLockOff
CapsLockOff --> CapsLockOn : EvCapsLockPressed
CapsLockOn --> CapsLockOff : EvCapsLockPressed
||
[*] -> ScrollLockOff
ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
}
@enduml
```

<!-- Page 225 / 550 -->

[Ref. QA-3086]

//9.8 Conditional [choice]
--------------------------
The stereotype <<choice>> can be used to use conditional state.

```uml
@startuml
state "Req(Id)" as ReqId <<sdlreceive>>
state "Minor(Id)" as MinorId
state "Major(Id)" as MajorId
state c <<choice>>
Idle --> ReqId
ReqId --> c
c --> MinorId : [Id <= 10]
c --> MajorId : [Id > 10]
@enduml
```

<!-- Page 226 / 550 -->

//9.9 Stereotypes full example [start, choice, fork, join, end]
---------------------------------------------------------------

```uml
@startuml
state start1 <<start>>
state choice1 <<choice>>
state fork1 <<fork>>
state join2 <<join>>
state end3 <<end>>
[*] --> choice1 : from start\nto choice
start1 --> choice1 : from start stereo\nto choice
choice1 --> fork1 : from choice\nto fork
choice1 --> join2 : from choice\nto join
choice1 --> end3 : from choice\nto end stereo
fork1 ---> State1 : from fork\nto state
fork1 --> State2 : from fork\nto state
State2 --> join2 : from state\nto join
State1 --> [*] : from state\nto end
join2 --> [*] : from join\nto end
@enduml
```

[Ref. QA-404, QA-1159 and GH-887]

//9.10 Point [entryPoint, exitPoint]
------------------------------------
You can add point with <<entryPoint>> and <<exitPoint>> stereotypes:
<!-- Page 227 / 550 -->


```uml
@startuml
state Somp {
state entry1 <<entryPoint>>
state entry2 <<entryPoint>>
state sin
entry1 --> sin
entry2 -> sin
sin -> sin2
sin2 --> exitA <<exitPoint>>
}
[*] --> entry1
exitA --> Foo
Foo1 -> entry2
@enduml
```

//9.11 Pin [inputPin, outputPin]
--------------------------------
You can add pin with <<inputPin>> and <<outputPin>> stereotypes:

```uml
@startuml
state Somp {
state entry1 <<inputPin>>
state entry2 <<inputPin>>
state sin
entry1 --> sin
entry2 -> sin
sin -> sin2
sin2 --> exitA <<outputPin>>
}
[*] --> entry1
exitA --> Foo
Foo1 -> entry2
@enduml
```

<!-- Page 228 / 550 -->

[Ref. QA-4309]

//9.12 Expansion [expansionInput, expansionOutput]
--------------------------------------------------
You can add expansion with <<expansionInput>> and <<expansionOutput>> stereotypes:

```uml
@startuml
state Somp {
state entry1 <<expansionInput>>
state entry2 <<expansionInput>>
state sin
entry1 --> sin
entry2 -> sin
sin -> sin2
sin2 --> exitA <<expansionOutput>>
}
[*] --> entry1
exitA --> Foo
Foo1 -> entry2
@enduml
```

<!-- Page 229 / 550 -->

[Ref. QA-4309]

//9.13 Arrow direction
----------------------
You can use -> for horizontal arrows. It is possible to force arrow’s direction using the following syntax:
• -down-> or -->

• -right-> or -> (default arrow)

• -left->

• -up->


```uml
@startuml
[*] -up-> First
First -right-> Second
Second --> Third
Third -left-> Last
@enduml
```

You can shorten the arrow definition by using only the first character of the direction 
(for example, -d- instead of -down-) or the two first characters (-do-).
Please note that you should not abuse this functionality : Graphviz gives usually good results without
tweaking.
<!-- Page 230 / 550 -->

//9.14 Change line color and style
----------------------------------

You can change line color and/or line style.

```uml
@startuml
State S1
State S2
S1 -[#DD00AA]-> S2
S1 -left[#yellow]-> S3
S1 -up[#red,dashed]-> S4
S1 -right[dotted,#blue]-> S5
X1 -[dashed]-> X2
Z1 -[dotted]-> Z2
Y1 -[#blue,bold]-> Y2
@enduml
```

[Ref. Incubation: Change line color in state diagrams]

//9.15 Note
-----------
You can also define notes using note left of, note right of, note top of, note bottom of keywords.
You can also define notes on several lines.

```uml
@startuml
[*] --> Active
Active --> Inactive
note left of Active : this is a short\nnote
note right of Inactive
A note can also
be defined on
several lines
end note
@enduml
```

<!-- Page 231 / 550 -->

You can also have floating notes.

```uml
@startuml
state foo
note "This is a floating note" as N1
@enduml
```

//9.16 Note on link
-------------------
You can put notes on state-transition or link, with note on link keyword.

```uml
@startuml
[*] -> State1
State1 --> State2
note on link
this is a state-transition note
end note
@enduml
```

//9.17 More in notes
--------------------
You can put notes on composite states.

```uml
@startuml
[*] --> NotShooting
state "Not Shooting State" as NotShooting {
state "Idle mode" as Idle
state "Configuring mode" as Configuring
<!-- Page 232 / 550 -->

[*] --> Idle
Idle --> Configuring : EvConfig
Configuring --> Idle : EvConfig
}
note right of NotShooting : This is a note on a composite state
@enduml
```

//9.18 Inline color
-------------------


```uml
@startuml
state CurrentSite #pink {
state HardwareSetup #lightblue {
state Site #brown
Site -[hidden]-> Controller
Controller -[hidden]-> Devices
}
state PresentationSetup{
Groups -[hidden]-> PlansAndGraphics
}
state Trends #FFFF77
state Schedule #magenta
state AlarmSupression
}
@enduml
```

<!-- Page 233 / 550 -->

[Ref. QA-1812]

//9.19 Skinparam
----------------
You can use the skinparam command to change colors and fonts for the drawing.
You can use this command :

• In the diagram definition, like any other commands,


• In an included file,


• In a configuration file, provided in the command line or the Ant task.


You can define specific color and fonts for stereotyped states.

```uml
@startuml
skinparam backgroundColor LightYellow
skinparam state {
StartColor MediumBlue
EndColor Red
BackgroundColor Peru
BackgroundColor<<Warning>> Olive
BorderColor Gray
FontName Impact
}
[*] --> NotShooting
state "Not Shooting State" as NotShooting {
state "Idle mode" as Idle <<Warning>>
state "Configuring mode" as Configuring
[*] --> Idle
Idle --> Configuring : EvConfig
Configuring --> Idle : EvConfig
}
NotShooting --> [*]
@enduml
```

<!-- Page 234 / 550 -->

//9.19.1 Test of all specific skinparam to State Diagrams
---------------------------------------------------------

```uml
@startuml
skinparam State {
AttributeFontColor blue
AttributeFontName serif
AttributeFontSize 9
AttributeFontStyle italic
BackgroundColor palegreen
BorderColor violet
EndColor gold
FontColor red
FontName Sanserif
FontSize 15
FontStyle bold
StartColor silver
}
state A : a a a\na
state B : b b b\nb
[*] -> A : start
A -> B : a2b
B -> [*] : end
@enduml
```

//9.20 Changing style
---------------------
You can change style.

```uml
@startuml
<!-- Page 235 / 550 -->

<style>
stateDiagram {
BackgroundColor Peru
'LineColor Gray
FontName Impact
FontColor Red
arrow {
FontSize 13
LineColor Blue
}
}
</style>
[*] --> NotShooting
state "Not Shooting State" as NotShooting {
state "Idle mode" as Idle <<Warning>>
state "Configuring mode" as Configuring
[*] --> Idle
Idle --> Configuring : EvConfig
Configuring --> Idle : EvConfig
}
NotShooting --> [*]
@enduml
```


```uml
@startuml
<style>
diamond {
BackgroundColor #palegreen
LineColor #green
LineThickness 2.5
}
</style>
state state1
<!-- Page 236 / 550 -->

state state2
state choice1 <<choice>>
state end3 <<end>>
state1 --> choice1 : 1
choice1 --> state2 : 2
choice1 --> end3 : 3
@enduml
```

[Ref. GH-880]

//9.21 Change state color and style (inline style)
--------------------------------------------------
You can change the color or style of individual state using the following notation:
• #color ##[style]color

With background color first (#color), then line style and line color (##[style]color ).

```uml
@startuml
state FooGradient #red-green ##00FFFF
state FooDashed #red|green ##[dashed]blue {
}
state FooDotted ##[dotted]blue {
}
state FooBold ##[bold] {
}
state Foo1 ##[dotted]green {
state inner1 ##[dotted]yellow
}
state out ##[dotted]gold
state Foo2 ##[bold]green {
state inner2 ##[dotted]yellow
}
inner1 -> inner2
out -> inner2
@enduml
```

<!-- Page 237 / 550 -->

[Ref. QA-1487]
• #color;line:color;line.[bold|dashed|dotted];text:color

TODO: FIXME ? text:color seems not to be taken into account TODO: FIXME

```uml
@startuml

```uml
@startuml
state FooGradient #red-green;line:00FFFF
state FooDashed #red|green;line.dashed;line:blue {
}
state FooDotted #line.dotted;line:blue {
}
state FooBold #line.bold {
}
state Foo1 #line.dotted;line:green {
state inner1 #line.dotted;line:yellow
}
state out #line.dotted;line:gold
state Foo2 #line.bold;line:green {
state inner2 #line.dotted;line:yellow
}
inner1 -> inner2
out -> inner2
@enduml
```

@enduml
```


```uml
@startuml
state s1 : s1 description
state s2 #pink;line:red;line.bold;text:red : s2 description
state s3 #palegreen;line:green;line.dashed;text:green : s3 description
state s4 #aliceblue;line:blue;line.dotted;text:blue : s4 description
@enduml
```

[Adapted from QA-3770]

//9.22 Alias
------------
With State you can use alias, like:

```uml
@startuml
state alias1
state "alias2"
state "long name" as alias3
state alias4 as "long name"
alias1 : ""state alias1""
alias2 : ""state "alias2"""
alias3 : ""state "long name" as alias3""
alias4 : ""state alias4 as "long name"""
alias1 -> alias2
alias2 -> alias3
alias3 -> alias4
@enduml
```

or:

```uml
@startuml
state alias1 : ""state alias1""
state "alias2" : ""state "alias2"""
state "long name" as alias3 : ""state "long name" as alias3""
state alias4 as "long name" : ""state alias4 as "long name"""
alias1 -> alias2
alias2 -> alias3
alias3 -> alias4
@enduml
```

//9.23 Display JSON Data on State diagram
-----------------------------------------

//9.23.1 Simple example
-----------------------

```uml
@startuml
state "A" as stateA
state "C" as stateC {
state B
}
json jsonJ {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-17275]
For another example, see on JSON page.
<!-- Page 239 / 550 -->

/10 Timing Diagram
==================

This is still under construction. You can propose new features if you need some.

//10.1 Declaring element or participant
---------------------------------------
You declare participant using the following keywords, depending on how you want them to be drawn.
| Keyword |                                                  Description                                                   |
|---------|----------------------------------------------------------------------------------------------------------------|
| analog  | An analog signal is continuous, and the values are linearly interpolated between the given setpoints           |
| binary  | A binary signal restricted to only 2 states                                                                    |
| clock   | A clocked signal that repeatedly transitions from high to low, with a period, and an optional pulse and offset |
| concise | A simplified concise signal designed to show the movement of data (great for messages)                         |
| robust  | A robust complex line signal designed to show the transition from one state to another (can have many states)  |

You define state change using the @ notation, and the is verb.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```


```uml
@startuml
clock "Clock_0" as C0 with period 50
clock "Clock_1" as C1 with period 50 pulse 15 offset 10
binary "Binary" as B
concise "Concise" as C
robust "Robust" as R
analog "Analog" as A
@0
C is Idle
R is Idle
A is 0
@100
B is high
C is Waiting
R is Processing
A is 3
@300
R is Waiting
A is 1
@enduml
```

[Ref. QA-14631, QA-14647 and QA-11288]

//10.2 Binary and Clock
-----------------------
It’s also possible to have binary and clock signal, using the following keywords:
• binary

• clock


```uml
@startuml
clock clk with period 1
binary "Enable" as EN
@0
EN is low
@5
EN is high
@10
EN is low
@enduml
```

//10.3 Adding message
---------------------

You can add message using the following syntax.
<!-- Page 241 / 550 -->


```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU -> WB : URL
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```

//10.4 Relative time
--------------------

It is possible to use relative time with @.

```uml
@startuml
robust "DNS Resolver" as DNS
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
DNS is Idle
@+100
WU -> WB : URL
WU is Waiting
WB is Processing
@+200
WB is Waiting
WB -> DNS@+50 : Resolve URL
@+100
DNS is Processing
@+300
DNS is Idle
@enduml
```

<!-- Page 242 / 550 -->

//10.5 Anchor Points
--------------------

Instead of using absolute or relative time on an absolute time you can define a time as an anchor point
by using the as keyword and starting the name with a :.
@XX as :<anchor point name>

```uml
@startuml
clock clk with period 1
binary "enable" as EN
concise "dataBus" as db
@0 as :start
@5 as :en_high
@10 as :en_low
@:en_high-2 as :en_highMinus2
@:start
EN is low
db is "0x0000"
@:en_high
EN is high
@:en_low
EN is low
@:en_highMinus2
db is "0xf23a"
@:en_high+6
db is "0x0000"
@enduml
```

//10.6 Participant oriented
---------------------------
Rather than declare the diagram in chronological order, you can define it by participant.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@WB
0 is idle
+200 is Proc.
+100 is Waiting
@WU
0 is Waiting
+500 is ok
@enduml
```

//10.7 Setting scale
--------------------
You can also set a specific scale.

```uml
@startuml
concise "Web User" as WU
scale 100 as 50 pixels
@WU
0 is Waiting
+500 is ok
@enduml
```

When using absolute Times/Dates, 1 ”tick” is equivalent to 1 second.

```uml
@startuml
concise "Season" as S
'30 days is scaled to 50 pixels
scale 2592000 as 50 pixels
@2000/11/01
S is "Winter"
@2001/02/01
S is "Spring"
@2001/05/01
S is "Summer"
@2001/08/01
S is "Fall"
@enduml
```

<!-- Page 244 / 550 -->

//10.8 Initial state
--------------------

You can also define an inital state.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
WB is Initializing
WU is Absent
@WB
0 is idle
+200 is Processing
+100 is Waiting
@WU
0 is Waiting
+500 is ok
@enduml
```

//10.9 Intricated state
-----------------------
A signal could be in some undefined state.

//10.9.1 Intricated or undefined robust state
---------------------------------------------

```uml
@startuml
robust "Signal1" as S1
robust "Signal2" as S2
S1 has 0,1,2,hello
S2 has 0,1,2
@0
S1 is 0
S2 is 0
@100
S1 is {0,1} #SlateGrey
S2 is {0,1}
@200
S1 is 1
S2 is 0
@300
S1 is hello
S2 is {0,2}
@enduml
```

//10.9.2 Intricated or undefined binary state
---------------------------------------------

```uml
@startuml
clock "Clock" as C with period 2
binary "Enable" as EN
@0
EN is low
@1
EN is high
@3
EN is low
@5
EN is {low,high}
@10
EN is low
@enduml
```

[Ref. QA-11936 and QA-15933]

//10.10 Hidden state
--------------------
It is also possible to hide some state.

```uml
@startuml
concise "Web User" as WU
@0
WU is {-}
@100
WU is A1
@200
WU is {-}
@300
WU is {hidden}
@400
WU is A3
@500
WU is {-}
@enduml
```


```uml
@startuml
scale 1 as 50 pixels
concise state0
concise substate1
robust bit2
bit2 has HIGH,LOW
@state0
0 is 18_start
6 is s_dPause
8 is 10_data
14 is {hidden}
@substate1
0 is sSeq
4 is sPause
6 is {hidden}
8 is dSeq
12 is dPause
14 is {hidden}
@bit2
0 is HIGH
2 is LOW
4 is {hidden}
8 is HIGH
10 is LOW
12 is {hidden}
@enduml
```

[Ref. QA-12222]
<!-- Page 247 / 550 -->

//10.11 Hide time axis
----------------------

It is possible to hide time axis.

```uml
@startuml
hide time-axis
concise "Web User" as WU
WU is Absent
@WU
0 is Waiting
+500 is ok
@enduml
```

//10.12 Using Time and Date
---------------------------
It is possible to use time or date.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@2019/07/02
WU is Idle
WB is Idle
@2019/07/04
WU is Waiting : some note
WB is Processing : some other note
@2019/07/05
WB is Waiting
@enduml
```


```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@1:15:00
WU is Idle
WB is Idle
@1:16:30
WU is Waiting : some note
WB is Processing : some other note
@1:17:30
WB is Waiting
@enduml
```

//10.13 Adding constraint
-------------------------

It is possible to display time constraints on the diagrams.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
WB is Initializing
WU is Absent
@WB
0 is idle
+200 is Processing
+100 is Waiting
WB@0 <-> @50 : {50 ms lag}
@WU
0 is Waiting
+500 is ok
@200 <-> @+150 : {150 ms}
@enduml
```

//10.14 Highlighted period
--------------------------
You can higlight a part of diagram.

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU -> WB : URL
WU is Waiting #LightCyan;line:Aqua
@200
WB is Proc.
@300
WU -> WB@350 : URL2
WB is Waiting
@+200
WU is ok
@+200
WB is Idle
highlight 200 to 450 #Gold;line:DimGrey : This is my caption
highlight 600 to 700 : This is another\nhighlight
@enduml
```

[Ref. QA-10868]

//10.15 Using notes
-------------------
You can use the note top of and note bottom of keywords to define notes related to a single object
or participant (available only for concise or binary object).

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
note top of WU : first note\non several\nlines
note bottom of WU : second note\non several\nlines
@300
WB is Waiting
@enduml
```

<!-- Page 250 / 550 -->

[Ref. QA-6877, GH-1465]

//10.16 Adding texts
--------------------
You can optionally add a title, a header, a footer, a legend and a caption:

```uml
@startuml
Title This is my title
header: some header
footer: some footer
legend
Some legend
end legend
caption some caption
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```

<!-- Page 251 / 550 -->

//10.17 Complete example
------------------------

Thanks to Adam Rosien for this example.

```uml
@startuml
concise "Client" as Client
concise "Server" as Server
concise "Response freshness" as Cache
Server is idle
Client is idle
@Client
0 is send
Client -> Server@+25 : GET
+25 is await
+75 is recv
+25 is idle
+25 is send
Client -> Server@+25 : GET\nIf-Modified-Since: 150
+25 is await
+50 is recv
+25 is idle
@100 <-> @275 : no need to re-request from server
@Server
25 is recv
+25 is work
+25 is send
Server -> Client@+25 : 200 OK\nExpires: 275
+25 is idle
+75 is recv
+25 is send
Server -> Client@+25 : 304 Not Modified
+25 is idle
@Cache
75 is fresh
+200 is stale
@enduml
```

<!-- Page 252 / 550 -->

//10.18 Digital Example
-----------------------


```uml
@startuml
scale 5 as 150 pixels
clock clk with period 1
binary "enable" as en
binary "R/W" as rw
binary "data Valid" as dv
concise "dataBus" as db
concise "address bus" as addr
@6 as :write_beg
@10 as :write_end
@15 as :read_beg
@19 as :read_end
@0
en is low
db is "0x0"
addr is "0x03f"
rw is low
dv is 0
@:write_beg-3
en is high
@:write_beg-2
db is "0xDEADBEEF"
@:write_beg-1
dv is 1
@:write_beg
rw is high
@:write_end
rw is low
dv is low
@:write_end+1
rw is low
db is "0x0"
addr is "0x23"
@12
dv is high
@13
db is "0xFFFF"
@20
en is low
dv is low
@21
db is "0x0"
highlight :write_beg to :write_end #Gold:Write
highlight :read_beg to :read_end #lightBlue:Read
db@:write_beg-1 <-> @:write_end : setup time
db@:write_beg-1 -> addr@:write_end+1 : hold
@enduml
```

//10.19 Adding color
--------------------

You can add color.

```uml
@startuml
concise "LR" as LR
concise "ST" as ST
LR is AtPlace #palegreen
ST is AtLoad #gray
@LR
0 is Lowering
100 is Lowered #pink
350 is Releasing
@ST
200 is Moving
@enduml
```

<!-- Page 254 / 550 -->

[Ref. QA-5776]

//10.20 Using (global) style
----------------------------

//10.20.1 Without style (by default)
------------------------------------

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
WB is Initializing
WU is Absent
@WB
0 is idle
+200 is Processing
+100 is Waiting
WB@0 <-> @50 : {50 ms lag}
@WU
0 is Waiting
+500 is ok
@200 <-> @+150 : {150 ms}
@enduml
```

//10.20.2 With style
--------------------
You can use style to change rendering of elements.

```uml
@startuml
<style>
timingDiagram {
document {
BackGroundColor SandyBrown
}
constraintArrow {
LineStyle 2-1
LineThickness 3
LineColor Blue
}
}
</style>
robust "Web Browser" as WB
concise "Web User" as WU
WB is Initializing
WU is Absent
@WB
0 is idle
+200 is Processing
+100 is Waiting
WB@0 <-> @50 : {50 ms lag}
@WU
0 is Waiting
+500 is ok
@200 <-> @+150 : {150 ms}
@enduml
```

[Ref. QA-14340]

//10.21 Applying Colors to specific lines
-----------------------------------------
You can use the `<style>` tags and sterotyping to give a name to line attributes.

```uml
@startuml
<style>
timingDiagram {
.red {
LineColor red
}
.blue {
LineColor blue
LineThickness 5
}
}
</style>
clock clk with period 1
binary "Input Signal 1" as IS1
binary "Input Signal 2" as IS2 <<blue>>
binary "Output Signal 1" as OS1 <<red>>
@0
IS1 is low
IS2 is high
OS1 is low
@2
OS1 is high
@4
OS1 is low
@5
IS1 is high
OS1 is high
@6
IS2 is low
@10
IS1 is low
OS1 is low
@enduml
```

[Ref. QA-15870]

//10.22 Compact mode
--------------------
You can use compact command to compact the timing layout.

//10.22.1 By default
--------------------

```uml
@startuml
robust "Web Browser" as WB
concise "Web User" as WU
robust "Web Browser2" as WB2
@0
WU is Waiting
WB is Idle
WB2 is Idle
@200
WB is Proc.
@300
WB is Waiting
WB2 is Waiting
@500
WU is ok
@700
WB is Idle
@enduml
```

<!-- Page 257 / 550 -->

//10.22.2 Global mode with mode compact
---------------------------------------

```uml
@startuml
mode compact
robust "Web Browser" as WB
concise "Web User" as WU
robust "Web Browser2" as WB2
@0
WU is Waiting
WB is Idle
WB2 is Idle
@200
WB is Proc.
@300
WB is Waiting
WB2 is Waiting
@500
WU is ok
@700
WB is Idle
@enduml
```

//10.22.3 Local mode with only compact on element
-------------------------------------------------

```uml
@startuml
compact robust "Web Browser" as WB
compact concise "Web User" as WU
robust "Web Browser2" as WB2
@0
WU is Waiting
WB is Idle
<!-- Page 258 / 550 -->

WB2 is Idle
@200
WB is Proc.
@300
WB is Waiting
WB2 is Waiting
@500
WU is ok
@700
WB is Idle
@enduml
```

[Ref. QA-11130]
<!-- Page 259 / 550 -->

/11 Display JSON Data
=====================

JSON format is widely used in software.
You can use PlantUML to visualize your data.
To activate this feature, the diagram must:
• begin with @startjson keyword

• end with @endjson keyword.


```json
@startjson
{
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@endjson
```


//11.1 Complex example
----------------------
You can use complex JSON structure.

```json
@startjson
{
"firstName": "John",
"lastName": "Smith",
"isAlive": true,
"age": 27,
"address": {
"streetAddress": "21 2nd Street",
"city": "New York",
"state": "NY",
"postalCode": "10021-3100"
},
"phoneNumbers": [
{
"type": "home",
"number": "212 555-1234"
},
{
"type": "office",
"number": "646 555-4567"
}
],
"children": [],
"spouse": null
}
@endjson
```

<!-- Page 260 / 550 -->

//11.2 Highlight parts
----------------------


```json
@startjson
#highlight "lastName"
#highlight "address" / "city"
#highlight "phoneNumbers" / "0" / "number"
{
"firstName": "John",
"lastName": "Smith",
"isAlive": true,
"age": 28,
"address": {
"streetAddress": "21 2nd Street",
"city": "New York",
"state": "NY",
"postalCode": "10021-3100"
},
"phoneNumbers": [
{
"type": "home",
"number": "212 555-1234"
},
{
"type": "office",
"number": "646 555-4567"
}
],
"children": [],
"spouse": null
}
@endjson
```


<!-- Page 261 / 550 -->

//11.3 Using different styles for highlight
-------------------------------------------
It is possible to have different styles for different highlights.

```json
@startjson
<style>
.h1 {
BackGroundColor green
FontColor white
FontStyle italic
}
.h2 {
BackGroundColor red
FontColor white
FontStyle bold
}
</style>
#highlight "lastName"
#highlight "address" / "city" <<h1>>
#highlight "phoneNumbers" / "0" / "number" <<h2>>
{
"firstName": "John",
"lastName": "Smith",
"isAlive": true,
"age": 28,
"address": {
"streetAddress": "21 2nd Street",
"city": "New York",
"state": "NY",
"postalCode": "10021-3100"
},
"phoneNumbers": [
{
"type": "home",
"number": "212 555-1234"
},
{
"type": "office",
"number": "646 555-4567"
}
],
"children": [],
"spouse": null
}
@endjson
```

[Ref. QA-15756, GH-1393]

//11.4 JSON basic element
-------------------------

//11.4.1 Synthesis of all JSON basic element
--------------------------------------------

<!-- Page 262 / 550 -->

```json
@startjson
{
"null": null,
"true": true,
"false": false,
"JSON_Number": [-1, -1.1, "<color:green>TBC"],
"JSON_String": "a\nb\rc\td <color:green>TBC...",
"JSON_Object": {
"{}": {},
"k_int": 123,
"k_str": "abc",
"k_obj": {"k": "v"}
},
"JSON_Array" : [
[],
[true, false],
[-1, 1],
["a", "b", "c"],
["mix", null, true, 1, {"k": "v"}]
]
}
@endjson
```


//11.5 JSON array or table
--------------------------

//11.5.1 Array type
-------------------

```json
@startjson
{
"Numeric": [1, 2, 3],
"String ": ["v1a", "v2b", "v3c"],
"Boolean": [true, false, true]
}
@endjson
```

<!-- Page 263 / 550 -->

//11.5.2 Minimal array or table
-------------------------------

//11.5.3 Number array
---------------------

```json
@startjson
[1, 2, 3]
@endjson
```


//11.5.4 String array
---------------------

```json
@startjson
["1a", "2b", "3c"]
@endjson
```


//11.5.5 Boolean array
----------------------

```json
@startjson
[true, false, true]
@endjson
```


//11.6 JSON numbers
-------------------

```json
@startjson
{
"DecimalNumber": [-1, 0, 1],
"DecimalNumber . Digits": [-1.1, 0.1, 1.1],
"DecimalNumber ExponentPart": [1E5]
}
@endjson
```

<!-- Page 264 / 550 -->

//11.7 JSON strings
-------------------

//11.7.1 JSON Unicode
---------------------
On JSON you can use Unicode directly or by using escaped form like .

```json
@startjson
{
"<color:blue><b>code": "<color:blue><b>value",
"a\\u005Cb": "a\u005Cb",
"\\uD83D\\uDE10": "\uD83D\uDE10",
"?": "?"
}
@endjson
```

//11.7.2 JSON two-character escape sequence
-------------------------------------------

```json
@startjson
{
"**legend**: character name": ["**two-character escape sequence**", "example (between 'a' and 'b')"],
"quotation mark character (U+0022)": ["\\\"", "a\"b"],
"reverse solidus character (U+005C)": ["\\\\", "a\\b"],
"solidus character (U+002F)": ["\\\/", "a\/b"],
"backspace character (U+0008)": ["\\b", "a\bb"],
"form feed character (U+000C)": ["\\f", "a\fb"],
"line feed character (U+000A)": ["\\n", "a\nb"],
"carriage return character (U+000D)": ["\\r", "a\rb"],
"character tabulation character (U+0009)": ["\\t", "a\tb"]
}
@endjson
```

<!-- Page 265 / 550 -->

TODO: FIXME FIXME or not ?, on the same item as management in PlantUML ? See Report Bug on
QA-13066 TODO: FIXME

```json
@startjson
[
"\\\\",
"\\n",
"\\r",
"\\t"
]
@endjson
```


//11.8 Minimal JSON examples
----------------------------


```json
@startjson
"Hello world!"
@endjson
```

<!-- Page 266 / 550 -->


```json
@startjson
42
@endjson
```


```json
@startjson
true
@endjson
```

(Examples come from STD 90 - Examples)

//11.9 Empty table or list
--------------------------


```json
@startjson
{
"empty_tab": [],
"empty_list": {}
}
@endjson
```

[Ref. QA-14397]

//11.10 Using (global) style
----------------------------

//11.10.1 Without style (by default)
------------------------------------

```json
@startjson
#highlight "1" / "hr"
[
{
"name": "Mark McGwire",
"hr": 65,
"avg": 0.278
},
{
"name": "Sammy Sosa",
"hr": 63,
"avg": 0.288
}
]
@endjson
```

<!-- Page 267 / 550 -->

//11.10.2 With style
--------------------
You can use style to change rendering of elements.

```json
@startjson
<style>
jsonDiagram {
node {
BackGroundColor Khaki
LineColor lightblue
FontName Helvetica
FontColor red
FontSize 18
FontStyle bold
RoundCorner 0
LineThickness 2
LineStyle 10-5
separator {
LineThickness 0.5
LineColor black
LineStyle 1-5
}
}
arrow {
BackGroundColor lightblue
LineColor green
LineThickness 2
LineStyle 2-5
}
highlight {
BackGroundColor red
FontColor white
FontStyle italic
}
}
</style>
#highlight "1" / "hr"
[
{
"name": "Mark McGwire",
"hr": 65,
"avg": 0.278
},
{
"name": "Sammy Sosa",
"hr": 63,
"avg": 0.288
}
]
@endjson
```

<!-- Page 268 / 550 -->

[Adapted from QA-13123 and QA-13288]

//11.11 Display JSON Data on Class or Object diagram
----------------------------------------------------

//11.11.1 Simple example
------------------------

```uml
@startuml
class Class
object Object
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-15481]

//11.11.2 Complex example: with all JSON basic element
------------------------------------------------------

```uml
@startuml
json "<b>JSON basic element" as J {
"null": null,
"true": true,
"false": false,
"JSON_Number": [-1, -1.1, "<color:green>TBC"],
"JSON_String": "a\nb\rc\td <color:green>TBC...",
"JSON_Object": {
"{}": {},
"k_int": 123,
"k_str": "abc",
"k_obj": {"k": "v"}
},
"JSON_Array" : [
[],
[true, false],
[-1, 1],
<!-- Page 269 / 550 -->

["a", "b", "c"],
["mix", null, true, 1, {"k": "v"}]
]
}
@enduml
```

//11.12 Display JSON Data on Deployment (Usecase, Component, Deployment) diagram
--------------------------------------------------------------------------------

//11.12.1 Simple example
------------------------

```uml
@startuml
allowmixing
component Component
actor Actor
usecase Usecase
() Interface
node Node
cloud Cloud
json JSON {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

<!-- Page 270 / 550 -->

[Ref. QA-15481]
Complex example: with arrow

```uml
@startuml
allowmixing
agent Agent
stack {
json "JSON_file.json" as J {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
}
database Database
Agent -> J
J -> Database
@enduml
```

//11.13 Display JSON Data on State diagram
------------------------------------------

<!-- Page 271 / 550 -->

//11.13.1 Simple example
------------------------

```uml
@startuml
state "A" as stateA
state "C" as stateC {
state B
}
json J {
"fruit":"Apple",
"size":"Large",
"color": ["Red", "Green"]
}
@enduml
```

[Ref. QA-17275]
<!-- Page 272 / 550 -->

/12 Display YAML Data
=====================

YAML format is widely used in software.
You can use PlantUML to visualize your data.
To activate this feature, the diagram must:

• begin with @startyaml keyword


• end with @endyaml keyword.


    @startyaml
    fruit: Apple
    size: Large
    color:
    - Red
    - Green
    @endyaml


//12.1 Complex example
----------------------
    @startyaml
    doe: "a deer, a female deer"
    ray: "a drop of golden sun"
    pi: 3.14159
    xmas: true
    french-hens: 3
    calling-birds:
    - huey
    - dewey
    - louie
    - fred
    xmas-fifth-day:
    calling-birds: four
    french-hens: 3
    golden-rings: 5
    partridges:
    count: 1
    location: "a pear tree"
    turtle-doves: two
    @endyaml

<!-- Page 273 / 550 -->

//12.2 Specific key (with symbols or unicode)
---------------------------------------------

    @startyaml
    @fruit: Apple
    $size: Large
    &color: Red
    ?: Heart
    ‰: Per mille
    @endyaml

[Ref. QA-13376]

//12.3 Highlight parts
----------------------

//12.3.1 Normal style
---------------------
    @startyaml
    #highlight "french-hens"
    #highlight "xmas-fifth-day" / "partridges"
    doe: "a deer, a female deer"
    ray: "a drop of golden sun"
    pi: 3.14159
    xmas: true
    french-hens: 3
    calling-birds:
    - huey
    - dewey
    - louie
    - fred
    xmas-fifth-day:
    calling-birds: four
    french-hens: 3
    golden-rings: 5
    partridges:
    count: 1
    location: "a pear tree"
    turtle-doves: two
    @endyaml

<!-- Page 274 / 550 -->

//12.3.2 Customised style
-------------------------
    @startyaml
    <style>
    yamlDiagram {
    highlight {
    BackGroundColor red
    FontColor white
    FontStyle italic
    }
    }
    </style>
    #highlight "french-hens"
    #highlight "xmas-fifth-day" / "partridges"
    doe: "a deer, a female deer"
    ray: "a drop of golden sun"
    pi: 3.14159
    xmas: true
    french-hens: 3
    calling-birds:
    - huey
    - dewey
    - louie
    - fred
    xmas-fifth-day:
    calling-birds: four
    french-hens: 3
    golden-rings: 5
    partridges:
    count: 1
    location: "a pear tree"
    turtle-doves: two
    @endyaml

[Ref. QA-13288]

/*Page 275 / 550*/

//12.4 Using different styles for highlight
-------------------------------------------
It is possible to have different styles for different highlights.

    @startyaml
    <style>
    .h1 {
    BackGroundColor green
    FontColor white
    FontStyle italic
    }
    .h2 {
    BackGroundColor red
    FontColor white
    FontStyle italic
    }
    </style>
    #highlight "french-hens" <<h1>>
    #highlight "xmas-fifth-day" / "partridges" <<h2>>
    doe: "a deer, a female deer"
    ray: "a drop of golden sun"
    pi: 3.14159
    xmas: true
    french-hens: 3
    calling-birds:
    - huey
    - dewey
    - louie
    - fred
    xmas-fifth-day:
    calling-birds: four
    french-hens: 3
    golden-rings: 5
    partridges:
    count: 1
    location: "a pear tree"
    turtle-doves: two
    @endyaml

[Ref. QA-15756, GH-1393]

//12.5 Using (global) style
---------------------------

//12.5.1 Without style (by default)
-----------------------------------

    @startyaml
    -
    name: Mark McGwire
    hr: 65
    avg: 0.278
    -
    name: Sammy Sosa
    hr: 63
    avg: 0.288
    @endyaml

<!-- Page 276 / 550 -->

//12.5.2 With style
-------------------
You can use style to change rendering of elements.

    @startyaml
    <style>
    yamlDiagram {
    node {
    BackGroundColor lightblue
    LineColor lightblue
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    BackGroundColor Khaki
    RoundCorner 0
    LineThickness 2
    LineStyle 10-5
    separator {
    LineThickness 0.5
    LineColor black
    LineStyle 1-5
    }
    }
    arrow {
    BackGroundColor lightblue
    LineColor green
    LineThickness 2
    LineStyle 2-5
    }
    }
    </style>
    -
    name: Mark McGwire
    hr: 65
    avg: 0.278
    -
    name: Sammy Sosa
    hr: 63
    avg: 0.288
    @endyaml

<!-- Page 277 / 550 -->

[Ref. QA-13123]
<!-- Page 278 / 550 -->

/13 Network diagram (nwdiag)
============================

nwdiag has been created by Takeshi Komiya and allows to quickly draw network diagrams. So we thank
him for his creation!

Since the syntax is clear and simple, this has been integrated within PlantUML. We reuse here the
examples that Takeshi has documented.

//13.1 Simple diagram
---------------------

//13.1.1 Define a network
-------------------------

```uml
@startuml
nwdiag {
network dmz {
address = "210.x.x.x/24"
}
}
@enduml
```

//13.1.2 Define some elements or servers on a network
-----------------------------------------------------

```uml
@startuml
nwdiag {
network dmz {
address = "210.x.x.x/24"
web01 [address = "210.x.x.1"];
web02 [address = "210.x.x.2"];
}
}
@enduml
```

//13.1.3 Full example
---------------------

```uml
@startuml
nwdiag {
network dmz {
address = "210.x.x.x/24"
web01 [address = "210.x.x.1"];
web02 [address = "210.x.x.2"];
}
network internal {
address = "172.x.x.x/24";
web01 [address = "172.x.x.1"];
web02 [address = "172.x.x.2"];
<!-- Page 279 / 550 -->

db01;
db02;
}
}
@enduml
```

//13.2 Define multiple addresses
--------------------------------


```uml
@startuml
nwdiag {
network dmz {
address = "210.x.x.x/24"

// set multiple addresses (using comma)
web01 [address = "210.x.x.1, 210.x.x.20"];
web02 [address = "210.x.x.2"];
}
network internal {
address = "172.x.x.x/24";
web01 [address = "172.x.x.1"];
web02 [address = "172.x.x.2"];
db01;
db02;
}
}
@enduml
```

<!-- Page 280 / 550 -->

//13.3 Grouping nodes
---------------------

//13.3.1 Define group inside network definitions
------------------------------------------------

```uml
@startuml
nwdiag {
network Sample_front {
address = "192.168.10.0/24";

// define group
group web {
web01 [address = ".1"];
web02 [address = ".2"];
}
}
network Sample_back {
address = "192.168.20.0/24";
web01 [address = ".1"];
web02 [address = ".2"];
db01 [address = ".101"];
db02 [address = ".102"];

// define network using defined nodes
group db {
db01;
db02;
}
}
}
@enduml
```

//13.3.2 Define group outside of network definitions
----------------------------------------------------

```uml
@startuml
nwdiag {

// define group outside of network definitions
group {
color = "#FFAAAA";
web01;
web02;
db01;
}
network dmz {
<!-- Page 281 / 550 -->

web01;
web02;
}
network internal {
web01;
web02;
db01;
db02;
}
}
@enduml
```

//13.3.3 Define several groups on same network
----------------------------------------------
13.3.4 Example with 2 group

```uml
@startuml
nwdiag {
group {
color = "#FFaaaa";
web01;
db01;
}
group {
color = "#aaaaFF";
web02;
db02;
}
network dmz {
address = "210.x.x.x/24"
web01 [address = "210.x.x.1"];
web02 [address = "210.x.x.2"];
}
network internal {
address = "172.x.x.x/24";
web01 [address = "172.x.x.1"];
web02 [address = "172.x.x.2"];
db01 ;
db02 ;
}
}
@enduml
```

<!-- Page 282 / 550 -->

[Ref. QA-12663]
13.3.5 Example with 3 groups

```uml
@startuml
nwdiag {
group {
color = "#FFaaaa";
web01;
db01;
}
group {
color = "#aaFFaa";
web02;
db02;
}
group {
color = "#aaaaFF";
web03;
db03;
}
network dmz {
web01;
web02;
web03;
}
network internal {
web01;
db01 ;
web02;
db02 ;
web03;
db03;
}
}
@enduml
```

<!-- Page 283 / 550 -->

[Ref. QA-13138]

//13.4 Extended Syntax (for network or group)
---------------------------------------------

//13.4.1 Network
----------------
For network or network’s component, you can add or change:

• addresses (separated by comma ,);


• color;


• description;


• shape.


```uml
@startuml
nwdiag {
network Sample_front {
address = "192.168.10.0/24"
color = "red"

// define group
group web {
web01 [address = ".1, .2", shape = "node"]
web02 [address = ".2, .3"]
}
}
network Sample_back {
address = "192.168.20.0/24"
color = "palegreen"
web01 [address = ".1"]
web02 [address = ".2"]
db01 [address = ".101", shape = database ]
db02 [address = ".102"]

// define network using defined nodes
group db {
db01;
db02;
}
}
}
@enduml
```

<!-- Page 284 / 550 -->

//13.4.2 Group
--------------
For a group, you can add or change:

• color;


• description.


```uml
@startuml
nwdiag {
group {
color = "#CCFFCC";
description = "Long group description";
web01;
web02;
db01;
}
network dmz {
web01;
web02;
}
network internal {
web01;
web02;
db01 [address = ".101", shape = database];
}
}
@enduml
```

<!-- Page 285 / 550 -->

[Ref. QA-12056]

//13.5 Using Sprites
--------------------
You can use all sprites (icons) from the Standard Library or any other library.
Use the notation <$sprite> to use a sprite, to make a new line, or any other Creole syntax.

```uml
@startuml
!include <office/Servers/application_server>
!include <office/Servers/database_server>
nwdiag {
network dmz {
address = "210.x.x.x/24"

// set multiple addresses (using comma)
web01 [address = "210.x.x.1, 210.x.x.20", description = "<$application_server>\n web01"]
web02 [address = "210.x.x.2", description = "<$application_server>\n web02"];
}
network internal {
address = "172.x.x.x/24";
web01 [address = "172.x.x.1"];
web02 [address = "172.x.x.2"];
db01 [address = "172.x.x.100", description = "<$database_server>\n db01"];
db02 [address = "172.x.x.101", description = "<$database_server>\n db02"];
}
}
@enduml
```

<!-- Page 286 / 550 -->

[Ref. QA-11862]

//13.6 Using OpenIconic
-----------------------
You can also use the icons from OpenIconic in network or node descriptions.
Use the notation <&icon> to make an icon, <&icon*n> to multiply the size by a factor n, and to make
a newline:

```uml
@startuml
nwdiag {
group nightly {
color = "#FFAAAA";
description = "<&clock> Restarted nightly <&clock>";
web02;
db01;
}
network dmz {
address = "210.x.x.x/24"
user [description = "<&person*4.5>\n user1"];

// set multiple addresses (using comma)
web01 [address = "210.x.x.1, 210.x.x.20", description = "<&cog*4>\nweb01"]
web02 [address = "210.x.x.2", description = "<&cog*4>\nweb02"];
}
network internal {
address = "172.x.x.x/24";
web01 [address = "172.x.x.1"];
web02 [address = "172.x.x.2"];
db01 [address = "172.x.x.100", description = "<&spreadsheet*4>\n db01"];
db02 [address = "172.x.x.101", description = "<&spreadsheet*4>\n db02"];
ptr [address = "172.x.x.110", description = "<&print*4>\n ptr01"];
}
}
@enduml
```

<!-- Page 287 / 550 -->

//13.7 Same nodes on more than two networks
-------------------------------------------

You can use same nodes on different networks (more than two networks); nwdiag use in this case ’jump
line’ over networks.

```uml
@startuml
nwdiag {

// define group at outside network definitions
group {
color = "#7777FF";
web01;
web02;
db01;
}
network dmz {
color = "pink"
web01;
web02;
}
network internal {
web01;
web02;
db01 [shape = database ];
}
network internal2 {
color = "LightBlue";
web01;
web02;
db01;
}
}
<!-- Page 288 / 550 -->

@enduml
```

//13.8 Peer networks
--------------------

Peer networks are simple connections between two nodes, for which we don’t use a horizontal ”busbar”
network

```uml
@startuml
nwdiag {
inet [shape = cloud];
inet -- router;
network {
router;
web01;
web02;
}
}
@enduml
```

//13.9 Peer networks and group
------------------------------

//13.9.1 Without group
----------------------

```uml
@startuml
nwdiag {
internet [ shape = cloud];
<!-- Page 289 / 550 -->

internet -- router;
network proxy {
router;
app;
}
network default {
app;
db;
}
}
@enduml
```

//13.9.2 Group on first
-----------------------

```uml
@startuml
nwdiag {
internet [ shape = cloud];
internet -- router;
group {
color = "pink";
app;
db;
}
network proxy {
router;
app;
}
network default {
app;
db;
}
}
<!-- Page 290 / 550 -->

@enduml
```

//13.9.3 Group on second
------------------------

```uml
@startuml
nwdiag {
internet [ shape = cloud];
internet -- router;
network proxy {
router;
app;
}
group {
color = "pink";
app;
db;
}
network default {
app;
db;
}
}
@enduml
```

<!-- Page 291 / 550 -->

//13.9.4 Group on third
-----------------------

```uml
@startuml
nwdiag {
internet [ shape = cloud];
internet -- router;
network proxy {
router;
app;
}
network default {
app;
db;
}
group {
color = "pink";
app;
db;
}
}
@enduml
```

<!-- Page 292 / 550 -->

[Ref. Issue#408 and QA-12655]

//13.10 Add title, caption, header, footer or legend on network diagram
--------------------------------------------------------

```uml
@startuml
header some header
footer some footer
title My title
nwdiag {
network inet {
web01 [shape = cloud]
}
}
legend
The legend
end legend
caption This is caption
@enduml
```

<!-- Page 293 / 550 -->

[Ref. QA-11303 and Common commands]

//13.11 With or without shadow
------------------------------

//13.11.1 With shadow (by default)
----------------------------------

```uml
@startuml
nwdiag {
network nw {
server;
internet;
}
internet [shape = cloud];
}
@enduml
```

//13.11.2 Without shadow
------------------------

```uml
@startuml
<style>
root {
shadowing 0
}
</style>
nwdiag {
network nw {
server;
internet;
}
internet [shape = cloud];
}
@enduml
```

<!-- Page 294 / 550 -->

[Ref. QA-14516]

//13.12 Change width of the networks
------------------------------------
You can change the width of the networks, especially in order to have the same full width for only some
or all networks.
Here are some examples, with all the possibilities:
• without


```uml
@startuml
nwdiag {
network NETWORK_BASE {
dev_A [address = "dev_A" ]
dev_B [address = "dev_B" ]
}
network IntNET1 {
dev_B [address = "dev_B1" ]
dev_M [address = "dev_M1" ]
}
network IntNET2 {
dev_B [address = "dev_B2" ]
dev_M [address = "dev_M2" ]
}
}
@enduml
```

• only the first


```uml
@startuml
nwdiag {
network NETWORK_BASE {
width = full
dev_A [address = "dev_A" ]
dev_B [address = "dev_B" ]
<!-- Page 295 / 550 -->

}
network IntNET1 {
dev_B [address = "dev_B1" ]
dev_M [address = "dev_M1" ]
}
network IntNET2 {
dev_B [address = "dev_B2" ]
dev_M [address = "dev_M2" ]
}
}
@enduml
```

• the first and the second


```uml
@startuml
nwdiag {
network NETWORK_BASE {
width = full
dev_A [address = "dev_A" ]
dev_B [address = "dev_B" ]
}
network IntNET1 {
width = full
dev_B [address = "dev_B1" ]
dev_M [address = "dev_M1" ]
}
network IntNET2 {
dev_B [address = "dev_B2" ]
dev_M [address = "dev_M2" ]
}
}
@enduml
```

<!-- Page 296 / 550 -->

• all the network (with same full width)


```uml
@startuml
nwdiag {
network NETWORK_BASE {
width = full
dev_A [address = "dev_A" ]
dev_B [address = "dev_B" ]
}
network IntNET1 {
width = full
dev_B [address = "dev_B1" ]
dev_M [address = "dev_M1" ]
}
network IntNET2 {
width = full
dev_B [address = "dev_B2" ]
dev_M [address = "dev_M2" ]
}
}
@enduml
```

<!-- Page 297 / 550 -->

//13.13 Other internal networks
-------------------------------

You can define other internal networks (TCP/IP, USB, SERIAL,...).
• Without address or type


```uml
@startuml
nwdiag {
network LAN1 {
a [address = "a1"];
}
network LAN2 {
a [address = "a2"];
switch;
}
switch -- equip;
equip -- printer;
}
@enduml
```

• With address or type


```uml
@startuml
nwdiag {
network LAN1 {
a [address = "a1"];
}
network LAN2 {
a [address = "a2"];
switch [address = "s2"];
}
switch -- equip;
equip [address = "e3"];
equip -- printer;
printer [address = "USB"];
}
@enduml
```

<!-- Page 298 / 550 -->

[Ref. QA-12824]

//13.14 Using (global) style
----------------------------

//13.14.1 Without style (by default)
------------------------------------

```uml
@startuml
nwdiag {
network DMZ {
address = "y.x.x.x/24"
web01 [address = "y.x.x.1"];
web02 [address = "y.x.x.2"];
}
network Internal {
web01;
web02;
db01 [address = "w.w.w.z", shape = database];
}
group {
description = "long group label";
web01;
web02;
db01;
}
}
@enduml
```

<!-- Page 299 / 550 -->

//13.14.2 With style
--------------------
You can use style to change rendering of elements.

```uml
@startuml
<style>
nwdiagDiagram {
network {
BackGroundColor green
LineColor red
LineThickness 1.0
FontSize 18
FontColor navy
}
server {
BackGroundColor pink
LineColor yellow
LineThickness 1.0
' FontXXX only for description or label
FontSize 18
FontColor #blue
}
arrow {
' FontXXX only for address
FontSize 17
FontColor #red
FontName Monospaced
LineColor black
}
group {
BackGroundColor cadetblue
LineColor black
LineThickness 2.0
FontSize 11
FontStyle bold
Margin 5
Padding 5
}
}
</style>
nwdiag {
<!-- Page 300 / 550 -->

network DMZ {
address = "y.x.x.x/24"
web01 [address = "y.x.x.1"];
web02 [address = "y.x.x.2"];
}
network Internal {
web01;
web02;
db01 [address = "w.w.w.z", shape = database];
}
group {
description = "long group label";
web01;
web02;
db01;
}
}
@enduml
```

[Ref. QA-14479]

//13.15 Appendix: Test of all shapes on Network diagram (nwdiag)
--------------------------------------------------------

```uml
@startuml
nwdiag {
network Network {
Actor [shape = actor]
Agent [shape = agent]
Artifact [shape = artifact]
Boundary [shape = boundary]
Card [shape = card]
Cloud [shape = cloud]
Collections [shape = collections]
Component [shape = component]
}
}
@enduml
```

<!-- Page 301 / 550 -->


```uml
@startuml
nwdiag {
network Network {
Control [shape = control]
Database [shape = database]
Entity [shape = entity]
File [shape = file]
Folder [shape = folder]
Frame [shape = frame]
Hexagon [shape = hexagon]
Interface [shape = interface]
}
}
@enduml
```


```uml
@startuml
nwdiag {
network Network {
Label [shape = label]
Node [shape = node]
Package [shape = package]
Person [shape = person]
Queue [shape = queue]
Stack [shape = stack]
Rectangle [shape = rectangle]
Storage [shape = storage]
Usecase [shape = usecase]
}
}
@enduml
```

TODO: FIXME ?ol?? ?olli?level?0??Overlap of label for folder?olli?? ?olli?level?0??Hexagon shape is missing?olli?? ?ol??
<!-- Page 302 / 550 -->


```uml
@startuml
nwdiag {
network Network {
Folder [shape = folder]
Hexagon [shape = hexagon]
}
}
@enduml
```


```uml
@startuml
nwdiag {
network Network {
Folder [shape = folder, description = "Test, long long label\nTest, long long label"]
Hexagon [shape = hexagon, description = "Test, long long label\nTest, long long label"]
}
}
@enduml
```

TODO: FIXME
<!-- Page 303 / 550 -->

/14 Salt (Wireframe)
====================

Salt is a subproject included in PlantUML that may help you to design graphical interface or Website
Wireframe or Page Schematic or Screen Blueprint.
The goal of this tool is to discuss about simple and sample windows.
You can use either @startsalt keyword, or @startuml followed by a line with salt keyword.

//14.1 Basic widgets
--------------------
A window must start and end with brackets. You can then define:
• Button using [ and ].

• Radio button using ( and ).

• Checkbox using [ and ].

• User text area using ".

• Droplist using ^.


    @startsalt
    {
    Just plain text
    [This is my button]
    () Unchecked radio
    (X) Checked radio
    [] Unchecked box
    [X] Checked box
    "Enter text here "
    ^This is a droplist^
    }
    @endsalt


//14.2 Text area
----------------
Here is an attempt to create a text area:

    @startsalt
    {+
    This is a long
    text in a textarea
    .
    " "
    }
    @endsalt

Note:
<!-- Page 304 / 550 -->

• the dot (.) to fill up vertical space;

• the last line of space ("  ") to make the area wider.

[Ref. QA-14765]
Then you can add scroll bar:

    @startsalt
    {SI
    This is a long
    text in a textarea
    .
    " "
    }
    @endsalt
    @startsalt
    {S-
    This is a long
    text in a textarea
    .
    " "
    }
    @endsalt


//14.3 Open, close droplist
---------------------------
You can open a droplist, by adding values enclosed by ^, as:

    @startsalt
    {
    ^This is a closed droplist^ |
    ^This is an open droplist^^ item 1^^ item 2^ |
    ^This is another open droplist^ item 1^ item 2^
    }
    @endsalt

[Ref. QA-4184]

<!-- Page 305 / 550 -->

//14.4 Using grid [| and #, !, -, +]
------------------------------------
A table is automatically created when you use an opening bracket {. And you have to use | to separate
columns.
For example:

    @startsalt
    {
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

Just after the opening bracket, you can use a character to define if you want to draw lines or columns of
the grid :

| Symbol |                    Result                    |
|--------|----------------------------------------------|
| #      | To display all vertical and horizontal lines |
| !      | To display all vertical lines                |
| -      | To display all horizontal lines              |
| +      | To display external lines                    |

    @startsalt
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt
    14.5 Group box [^]
    @startsalt
    {^"My group box"
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

[Ref. QA-5840]

<!-- Page 306 / 550 -->

//14.6 Using separator [.., ==, \~~, –]
--------------------------------------
You can use several horizontal lines as separator.

    @startsalt
    {
    Text1
    ..
    "Some field"
    ==
    Note on usage
    ~~
    Another text
    --
    [Ok]
    }
    @endsalt

//14.7 Tree widget [T]
---------------------

To have a Tree, you have to start with {T and to use + to denote hierarchy.

    @startsalt
    {
    {T
    + World
    ++ America
    +++ Canada
    +++ USA
    ++++ New York
    ++++ Boston
    +++ Mexico
    ++ Europe
    +++ Italy
    +++ Germany
    ++++ Berlin
    ++ Africa
    }
    }
    @endsalt


<!-- Page 307 / 550 -->

//14.8 Tree table [T]
---------------------
You can combine trees with tables.

    @startsalt
    {
    {T
    +Region | Population | Age
    + World | 7.13 billion | 30
    ++ America | 964 million | 30
    +++ Canada | 35 million | 30
    +++ USA | 319 million | 30
    ++++ NYC | 8 million | 30
    ++++ Boston | 617 thousand | 30
    +++ Mexico | 117 million | 30
    ++ Europe | 601 million | 30
    +++ Italy | 61 million | 30
    +++ Germany | 82 million | 30
    ++++ Berlin | 3 million | 30
    ++ Africa | 1 billion | 30
    }
    }
    @endsalt

And add lines.

    @startsalt
    {
    ..
    == with T!
    {T!
    +Region | Population | Age
    + World | 7.13 billion | 30
    ++ America | 964 million | 30
    }
    ..
    == with T-
    {T-
    +Region | Population | Age
    + World | 7.13 billion | 30
    ++ America | 964 million | 30
    }
    ..
    == with T+
    {T+
    +Region | Population | Age
    + World | 7.13 billion | 30
    ++ America | 964 million | 30
    }
    ..
    == with T#
    {T#
    +Region | Population | Age
    + World | 7.13 billion | 30
    ++ America | 964 million | 30
    }
    ..
    }
    @endsalt

<!-- Page 308 / 550 -->

[Ref. QA-1265]

//14.9 Enclosing brackets [{, }]
--------------------------------
You can define subelements by opening a new opening bracket.

    @startsalt
    {
    Name | " "
    Modifiers: | { (X) public | () default | () private | () protected
    [] abstract | [] final | [] static }
    Superclass: | { "java.lang.Object " | [Browse...] }
    }
    @endsalt


//14.10 Adding tabs [/]
-----------------------
You can add tabs using {/ notation. Note that you can use HTML code to have bold text.

    @startsalt
    {+
    {/ <b>General | Fullscreen | Behavior | Saving }
    {
    { Open image in: | ^Smart Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
    }
    [Close]
    }
    @endsalt

<!-- Page 309 / 550 -->

Tab could also be vertically oriented:

    @startsalt
    {+
    {/ <b>General
    Fullscreen
    Behavior
    Saving } |
    {
    { Open image in: | ^Smart Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
    [Close]
    }
    }
    @endsalt
    14.11 Using menu [*]
    You can add a menu by using {* notation.
    @startsalt
    {+
    {* File | Edit | Source | Refactor }
    {/ General | Fullscreen | Behavior | Saving }
    {
    { Open image in: | ^Smart Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
    }
    [Close]
    }
    @endsalt

It is also possible to open a menu:

<!-- Page 310 / 550 -->

    @startsalt
    {+
    {* File | Edit | Source | Refactor
    Refactor | New | Open File | - | Close | Close All }
    {/ General | Fullscreen | Behavior | Saving }
    {
    { Open image in: | ^Smart Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
    }
    [Close]
    }
    @endsalt

Like it is possible to open a droplist:

    @startsalt
    {+
    {* File | Edit | Source | Refactor }
    {/ General | Fullscreen | Behavior | Saving }
    {
    { Open image in: | ^Smart Mode^^Normal Mode^ }
    [X] Smooth images when zoomed
    [X] Confirm image deletion
    [ ] Show hidden images
    }
    [Close]
    }
    @endsalt

[Ref. QA-4184]

//14.12 Advanced table
----------------------
You can use two special notations for table :
• * to indicate that a cell with span with left

• . to denotate an empty cell


    @startsalt
    {#
    . | Column 2 | Column 3
    Row header 1 | value 1 | value 2
    Row header 2 | A long cell | *
    }
    @endsalt

<!-- Page 311 / 550 -->

14.13 Scroll Bars [S, SI, S-]
You can use {S notation for scroll bar like in following examples:
• {S: for horizontal and vertical scrollbars


    @startsalt
    {S
    Message
    .
    .
    .
    .
    }
    @endsalt
    • {SI : for vertical scrollbar only
    @startsalt
    {SI
    Message
    .
    .
    .
    .
    }
    @endsalt
    • {S- : for horizontal scrollbar only
    @startsalt
    {S-
    Message
    .
    .
    .
    .
    }
    @endsalt


//14.14 Colors
--------------
It is possible to change text color of widget.
<!-- Page 312 / 550 -->


    @startsalt
    {
    <color:Blue>Just plain text
    [This is my default button]
    [<color:green>This is my green button]
    [<color:#9a9a9a>This is my disabled button]
    [] <color:red>Unchecked box
    [X] <color:green>Checked box
    "Enter text here "
    ^This is a droplist^
    ^<color:#9a9a9a>This is a disabled droplist^
    ^<color:red>This is a red droplist^
    }
    @endsalt

[Ref. QA-12177]

<!-- Page 313 / 550 -->

//14.15 Creole on Salt
----------------------
You can use Creole or HTML Creole on salt:

    @startsalt
    {{^==Creole
    This is **bold**
    This is //italics//
    This is ""monospaced""
    This is --stricken-out--
    This is __underlined__
    This is ~~wave-underlined~~
    --test Unicode and icons--
    This is <U+221E> long
    This is a <&code> icon
    Use image : <img:http://plantuml.com/logo3.png>
    }|
    {^<b>HTML Creole
    This is <b>bold</b>
    This is <i>italics</i>
    This is <font:monospaced>monospaced</font>
    This is <s>stroked</s>
    This is <u>underlined</u>
    This is <w>waved</w>
    This is <s:green>stroked</s>
    This is <u:red>underlined</u>
    This is <w:#0000FF>waved</w>
    -- other examples --
    This is <color:blue>Blue</color>
    This is <back:orange>Orange background</back>
    This is <size:20>big</size>
    }|
    {^Creole line
    You can have horizontal line
    ----
    Or double line
    ====
    Or strong line
    ____
    Or dotted line
    ..My title..
    Or dotted title

    //and title... //
    ==Title==
    Or double-line title
    --Another title--
    Or single-line title
    Enjoy!
    }|
    {^Creole list item
    **test list 1**
    * Bullet list
    * Second item
    ** Sub item
    *** Sub sub item
    * Third item
    ----
    **test list 2**
    # Numbered list
    # Second item
    ## Sub item
    ## Another sub item
    # Third item
    }|
    {^Mix on salt
    ==<color:Blue>Just plain text
    [This is my default button]
    [<b><color:green>This is my green button]
    [ ---<color:#9a9a9a>This is my disabled button-- ]
    [] <size:20><color:red>Unchecked box
    [X] <color:green>Checked box
    "//Enter text here// "
    ^This is a droplist^
    ^<color:#9a9a9a>This is a disabled droplist^
    ^<b><color:red>This is a red droplist^
    }}
    @endsalt

<!-- Page 314 / 550 -->

//14.16 Pseudo sprite [«, »]
----------------------------

Using << and >> you can define a pseudo-sprite or sprite-like drawing and reusing it latter.

    @startsalt
    {
    [X] checkbox|[] checkbox
    () radio | (X) radio
    This is a text|[This is my button]|This is another text
    "A field"|"Another long Field"|[A button]
    <<folder
    ............
    .XXXXX......
    .X...X......
    .XXXXXXXXXX.
    .X........X.
    .X........X.
    .X........X.
    .X........X.
    .XXXXXXXXXX.
    ............
    >>|<color:blue>other folder|<<folder>>
    ^Droplist^
    }
    @endsalt

[Ref. QA-5849]
<!-- Page 315 / 550 -->


//14.17 OpenIconic
------------------
OpenIconic is a very nice open source icon set. Those icons have been integrated into the creole parser,
so you can use them out-of-the-box. You can use the following syntax: <&ICON_NAME>.

    @startsalt
    {
    Login<&person> | "MyName "
    Password<&key> | "**** "
    [Cancel <&circle-x>] | [OK <&account-login>]
    }
    @endsalt

The complete list is available on OpenIconic Website, or you can use the following special diagram:

```uml
@startuml
listopeniconic
@enduml
```

14.18 Add title, header, footer, caption or legend

    @startsalt
    title My title
    header some header
    footer some footer
    caption This is caption
    legend
    The legend
    end legend
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

<!-- Page 316 / 550 -->

(See also: Common commands)
14.19 Zoom, DPI

//14.19.1 Whitout zoom (by default)
-----------------------------------

    @startsalt
    {
    <&person> Login | "MyName "
    <&key> Password | "**** "
    [<&circle-x> Cancel ] | [ <&account-login> OK ]
    }
    @endsalt


//14.19.2 Scale
---------------
You can use the scale command to zoom the generated image.
You can use either a number or a fraction to define the scale factor. You can also specify either width
or height (in pixel). And you can also give both width and height: the image is scaled to fit inside the
specified dimension.

    @startsalt
    scale 2
    {
    <&person> Login | "MyName "
    <&key> Password | "**** "
    [<&circle-x> Cancel ] | [ <&account-login> OK ]
    }
    @endsalt

(See also: Zoom on Common commands)

<!-- Page 317 / 550 -->

//14.19.3 DPI
-------------
You can also use the skinparam dpicommand to zoom the generated image.

    @startsalt
    skinparam dpi 200
    {
    <&person> Login | "MyName "
    <&key> Password | "**** "
    [<&circle-x> Cancel ] | [ <&account-login> OK ]
    }
    @endsalt

//14.20 Include Salt ”on activity diagram”
-----------------------------------------
You can read the following explanation.

```uml
@startuml
(*) --> "
{{
salt
{+
<b>an example
choose one option
()one
()two
[ok]
}
}}
" as choose
choose -right-> "
{{
salt
{+
<b>please wait
operation in progress
<&clock>
[cancel]
}
}}
" as wait
wait -right-> "
{{
salt
{+
<b>success
congratulations!
[ok]
}
}}
" as success
wait -down-> "
{{
salt
<!-- Page 318 / 550 -->

{+
<b>error
failed, sorry
[ok]
}
}}
"
@enduml
```

It can also be combined with define macro.

```uml
@startuml
!unquoted procedure SALT($x)
"{{
salt
%invoke_procedure("_"+$x)
}}" as $x
!endprocedure
!procedure _choose()
{+
<b>an example
choose one option
()one
()two
[ok]
}
!endprocedure
!procedure _wait()
{+
<b>please wait
operation in progress
<&clock>
[cancel]
}
!endprocedure
!procedure _success()
{+
<b>success
congratulations!
<!-- Page 319 / 550 -->

[ok]
}
!endprocedure
!procedure _error()
{+
<b>error
failed, sorry
[ok]
}
!endprocedure
(*) --> SALT(choose)
-right-> SALT(wait)
wait -right-> SALT(success)
wait -down-> SALT(error)
@enduml
```

14.21 Include salt ”on while condition of activity diagram”
You can include salt on while condition of activity diagram.

```uml
@startuml
start
while (\n{{\nsalt\n{+\nPassword | "**** "\n[Cancel] | [ OK ]}\n}}\n) is (Incorrect)
:log attempt;
:attempt_count++;
if (attempt_count > 4) then (yes)
:increase delay timer;
:wait for timer to expire;
else (no)
endif
endwhile (correct)
:log request;
:disable service;
@enduml
```

<!-- Page 320 / 550 -->

[Ref. QA-8547]

//14.22 Include salt ”on repeat while condition of activity diagram”
--------------------------------------------------------
You can include salt on ’repeat while’ condition of activity diagram.

```uml
@startuml
start
repeat :read data;
:generate diagrams;
repeat while (\n{{\nsalt\n{^"Next step"\n Do you want to continue? \n[Yes]|[No]\n}\n}}\n)
stop
@enduml
```

<!-- Page 321 / 550 -->

[Ref. QA-14287]

//14.23 Skinparam
-----------------
You can use [only] some skinparam command to change the skin of the drawing.
Some example:

    @startsalt
    skinparam Backgroundcolor palegreen
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt
    @startsalt
    skinparam handwritten true
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt
    TODO: FIXME ? FYI, some other skinparam does not work with salt, as:
    @startsalt
    skinparam defaultFontName monospaced
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

<!-- Page 322 / 550 -->

//14.24 Style
-------------

You can use [only] some style command to change the skin of the drawing.
Some example:

    @startsalt
    <style>
    saltDiagram {
    BackgroundColor palegreen
    }
    </style>
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt
    TODO: FIXME ? FYI, some other style does not work with salt, as:
    @startsalt
    <style>
    saltDiagram {
    Fontname Monospaced
    FontSize 10
    FontStyle italic
    LineThickness 0.5
    LineColor red
    }
    </style>
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

[Ref. QA-13460]
<!-- Page 323 / 550 -->

/15 Archimate Diagram
=====================

This is only a proposal and subject to change.
You are very welcome to create a new discussion on this future syntax. Your feedbacks, ideas and
suggestions help us to find the right solution.

//15.1 Archimate keyword
------------------------
You can use the archimate keyword to define an element. Stereotype can optionally 
specify an additional icon. Some colors (Business, Application, Motivation, Strategy, 
Technology, Physical, Implementation) are also available.

```uml
@startuml
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
@enduml
```

//15.2 Defining Junctions
-------------------------
Using the circle keyword and the preprocessor, you can also create junctions.

```uml
@startuml
!define Junction_Or circle #black
!define Junction_And circle #whitesmoke
Junction_And JunctionAnd
Junction_Or JunctionOr
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
GO -up-> JunctionOr
STOP -up-> JunctionOr
STOP -down-> JunctionAnd
WAIT -down-> JunctionAnd
@enduml
```

<!-- Page 324 / 550 -->

15.3 Example 1

```uml
@startuml
skinparam rectangle<<behavior>> {
roundCorner 25
}
sprite $bProcess jar:archimate/business-process
sprite $aService jar:archimate/application-service
sprite $aComponent jar:archimate/application-component
rectangle "Handle claim" as HC <<$bProcess>><<behavior>> #Business
rectangle "Capture Information" as CI <<$bProcess>><<behavior>> #Business
rectangle "Notify\nAdditional Stakeholders" as NAS <<$bProcess>><<behavior>> #Business
rectangle "Validate" as V <<$bProcess>><<behavior>> #Business
rectangle "Investigate" as I <<$bProcess>><<behavior>> #Business
rectangle "Pay" as P <<$bProcess>><<behavior>> #Business
HC *-down- CI
HC *-down- NAS
HC *-down- V
HC *-down- I
HC *-down- P
CI -right->> NAS
NAS -right->> V
V -right->> I
I -right->> P
rectangle "Scanning" as scanning <<$aService>><<behavior>> #Application
rectangle "Customer admnistration" as customerAdministration <<$aService>><<behavior>> #Application
rectangle "Claims admnistration" as claimsAdministration <<$aService>><<behavior>> #Application
rectangle Printing <<$aService>><<behavior>> #Application
rectangle Payment <<$aService>><<behavior>> #Application
scanning -up-> CI
customerAdministration -up-> CI
claimsAdministration -up-> NAS
claimsAdministration -up-> V
claimsAdministration -up-> I
Payment -up-> P
Printing -up-> V
Printing -up-> P
<!-- Page 325 / 550 -->

rectangle "Document\nManagement\nSystem" as DMS <<$aComponent>> #Application
rectangle "General\nCRM\nSystem" as CRM <<$aComponent>> #Application
rectangle "Home & Away\nPolicy\nAdministration" as HAPA <<$aComponent>> #Application
rectangle "Home & Away\nFinancial\nAdministration" as HFPA <<$aComponent>> #Application
DMS .up.|> scanning
DMS .up.|> Printing
CRM .up.|> customerAdministration
HAPA .up.|> claimsAdministration
HFPA .up.|> Payment
legend left
Example from the "Archisurance case study" (OpenGroup).
See
====
<$bProcess> :business process
====
<$aService> : application service
====
<$aComponent> : application component
endlegend
@enduml
```

//15.4 Example 2
----------------

```uml
@startuml
<!-- Page 326 / 550 -->

skinparam roundcorner 25
rectangle "Capture Information" as CI <<$archimate/business-process>> #Business
@enduml
```

//15.5 List possible sprites
----------------------------

You can list all possible sprites for Archimate using the following diagram:

```uml
@startuml
listsprite
@enduml
```

//15.6 ArchiMate Macros
-----------------------

//15.6.1 Archimate Macros and Library
-------------------------------------
A list of Archimate macros are defined Archimate-PlantUML here which simplifies the 
creation of ArchiMate diagrams, and Archimate is natively on the Standard Library of PlantUML.

//15.6.2 Archimate elements
---------------------------
Using the macros, creation of ArchiMate elements are done using the following format: Category_ElementName(nameOfTheElement,
"description")
For example:
• To define a Stakeholder element, which is part of Motivation category, the syntax will be Motivation_Stakeholder(StakeholderElement,

"Stakeholder Description"):
<!-- Page 327 / 550 -->


```uml
@startuml
!include <archimate/Archimate>
Motivation_Stakeholder(StakeholderElement, "Stakeholder Description")
@enduml
```

• To define a Business Service element, Business_Service(BService, "Business Service"):


```uml
@startuml
!include <archimate/Archimate>
Business_Service(BService, "Business Service")
@enduml
```

//15.6.3 Archimate relationships
--------------------------------
The ArchiMate relationships are defined with the following pattern: Rel_RelationType(fromElement,
toElement, "description") and to define the direction/orientation of the two elements: Rel_RelationType_Direction(fromElement,
toElement, "description")
The RelationTypes supported are:
• Access

• Aggregation

• Assignment

• Association

• Composition

• Flow

• Influence

• Realization

• Serving

• Specialization

• Triggering

The Directions supported are:
• Up

• Down

• Left

• Right

For example:
• To denote a composition relationship between the Stakeholder and Business Service defined above,

the syntax will be
Rel_Composition(StakeholderElement, BService, "Description for the relationship")

```uml
@startuml
!include <archimate/Archimate>
Motivation_Stakeholder(StakeholderElement, "Stakeholder Description")
<!-- Page 328 / 550 -->

Business_Service(BService, "Business Service")
Rel_Composition(StakeholderElement, BService, "Description for the relationship")
@enduml
```

• Unordered List ItemTo orient the two elements in top - down position, the syntax will be

Rel_Composition_Down(StakeholderElement, BService, "Description for the relationship")

```uml
@startuml
!include <archimate/Archimate>
Motivation_Stakeholder(StakeholderElement, "Stakeholder Description")
Business_Service(BService, "Business Service")
Rel_Composition_Down(StakeholderElement, BService, "Description for the relationship")
@enduml
```

15.6.4 Appendice: Examples of all Archimate RelationTypes

```uml
@startuml
left to right direction
skinparam nodesep 4
!include <archimate/Archimate>
Rel_Triggering(i15, j15, Triggering)
Rel_Specialization(i14, j14, Specialization)
Rel_Serving(i13, j13, Serving)
Rel_Realization(i12, j12, Realization)
Rel_Influence(i11, j11, Influence)
Rel_Flow(i10, j10, Flow)
Rel_Composition(i9, j9, Composition)
Rel_Association_dir(i8, j8, Association_dir)
Rel_Association(i7, j7, Association)
Rel_Assignment(i6, j6, Assignment)
Rel_Aggregation(i5, j5, Aggregation)
Rel_Access_w(i4, j4, Access_w)
Rel_Access_rw(i3, j3, Access_rw)
Rel_Access_r(i2, j2, Access_r)
Rel_Access(i1, j1, Access)
@enduml
```

<!-- Page 329 / 550 -->


```uml
@startuml
title ArchiMate Relationships Overview
skinparam nodesep 5
<style>
interface {
shadowing 0
backgroundcolor transparent
linecolor transparent
FontColor transparent
/*Page 330 / 550*/

//15.6 ArchiMate Macros
--------------------------------------------
}
</style>
!include <archimate/Archimate>
left to right direction
rectangle Other {
() i14
() j14
}
rectangle Dynamic {
() i10
() j10
() i15
() j15
}
rectangle Dependency {
() i13
() j13
() i4
() j4
() i11
() j11
() i7
() j7
}
rectangle Structural {
() i9
() j9
() i5
() j5
() i6
() j6
() i12
() j12
}
Rel_Triggering(i15, j15, Triggering)
Rel_Specialization(i14, j14, Specialization)
Rel_Serving(i13, j13, Serving)
Rel_Realization(i12, j12, Realization)
Rel_Influence(i11, j11, Influence)
Rel_Flow(i10, j10, Flow)
Rel_Composition(i9, j9, Composition)
Rel_Association_dir(i7, j7, \nAssociation_dir)
Rel_Association(i7, j7, Association)
Rel_Assignment(i6, j6, Assignment)
Rel_Aggregation(i5, j5, Aggregation)
Rel_Access_w(i4, j4, Access_w)
Rel_Access_rw(i4, j4, Access_rw)
Rel_Access_r(i4, j4, Access_r)
Rel_Access(i4, j4, Access)
@enduml
```

<!-- Page 331 / 550 -->

[Adapted from Archimate PR#25]
<!-- Page 332 / 550 -->

/16 Gantt Diagram
=================

The Gantt is described in natural language, using very simple sentences (subject-verb-complement).

//16.1 Declaring tasks
----------------------
Tasks defined using square bracket.

//16.1.1 Duration
-----------------
Their durations are defined using the last verb:

    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    -- All example --
    [Task 1 (1 day)] lasts 1 day
    [T2 (5 days)] lasts 5 days
    [T3 (1 week)] lasts 1 week
    [T4 (1 week and 4 days)] lasts 1 week and 4 days
    [T5 (2 weeks)] lasts 2 weeks
    @endgantt

A week is a synonym for how many non-closed days are in a week. So if you specify Saturday and Sunday
as closed, a week will be equivalent to 5 days

//16.1.2 Start
--------------
Their beginning are defined using the start verb:

    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    Project starts 2020-07-01
    [Prototype design] starts 2020-07-01
    [Test prototype] starts 2020-07-16
    @endgantt

<!-- Page 333 / 550 -->

    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    [Prototype design] starts D+0
    [Test prototype] starts D+15
    @endgantt

[Ref. for D+nn form: QA-14494]

//16.1.3 End
------------
Their ending are defined using the end verb:

    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    Project starts 2020-07-01
    [Prototype design] ends 2020-07-15
    [Test prototype] ends 2020-07-25
    @endgantt
    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    [Prototype design] ends D+14
    [Test prototype] ends D+24
    @endgantt
    16.1.4 Start/End
    It is possible to define both absolutely, by specifying dates:
    @startgantt
    Project starts 2020-07-01
    [Prototype design] starts 2020-07-01
    [Test prototype] starts 2020-07-16
    [Prototype design] ends 2020-07-15
    [Test prototype] ends 2020-07-25
    @endgantt
<!-- Page 334 / 550 -->


    @startgantt
    [Prototype design] starts D+0
    [Test prototype] starts D+15
    [Prototype design] ends D+14
    [Test prototype] ends D+24
    @endgantt

//16.2 One-line declaration (with the and conjunction)
------------------------------------------------------

It is possible to combine declaration on one line with the and conjunction.

    @startgantt
    Project starts 2020-07-01
    [Prototype design] starts 2020-07-01 and ends 2020-07-15
    [Test prototype] starts 2020-07-16 and lasts 10 days
    @endgantt


//16.3 Adding constraints
-------------------------
It is possible to add constraints between tasks.

    @startgantt
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    [Test prototype] starts at [Prototype design]'s end
    @endgantt
    @startgantt
    [Prototype design] lasts 10 days
    [Code prototype] lasts 10 days
    [Write tests] lasts 5 days
    [Code prototype] starts at [Prototype design]'s end
    [Write tests] starts at [Code prototype]'s start
    @endgantt


//16.4 Short names
------------------
It is possible to define short name for tasks with the as keyword.

<!-- Page 335 / 550 -->

    @startgantt
    [Prototype design] as [D] lasts 15 days
    [Test prototype] as [T] lasts 10 days
    [T] starts at [D]'s end
    @endgantt

//16.5 Customize colors
-----------------------

It is also possible to customize colors with is colored in.

    @startgantt
    [Prototype design] lasts 13 days
    [Test prototype] lasts 4 days
    [Test prototype] starts at [Prototype design]'s end
    [Prototype design] is colored in Fuchsia/FireBrick
    [Test prototype] is colored in GreenYellow/Green
    @endgantt


//16.6 Completion status
------------------------

//16.6.1 Adding completion depending percentage
-----------------------------------------------
You can set the completion status of a task, by the command:
• is xx% completed

• is xx% complete


    @startgantt
    [foo] lasts 21 days
    [foo] is 40% completed
    [bar] lasts 30 days and is 10% complete
    @endgantt


//16.6.2 Change colour of completion (by style)
-----------------------------------------------
<!-- Page 336 / 550 -->

    @startgantt
    <style>
    ganttDiagram {
    task {
    BackGroundColor GreenYellow
    LineColor Green
    unstarted {
    BackGroundColor Fuchsia
    LineColor FireBrick
    }
    }
    }
    </style>
    [Prototype design] lasts 7 days
    [Test prototype 0] lasts 4 days
    [Test prototype 10] lasts 4 days
    [Test prototype 20] lasts 4 days
    [Test prototype 30] lasts 4 days
    [Test prototype 40] lasts 4 days
    [Test prototype 50] lasts 4 days
    [Test prototype 60] lasts 4 days
    [Test prototype 70] lasts 4 days
    [Test prototype 80] lasts 4 days
    [Test prototype 90] lasts 4 days
    [Test prototype 100] lasts 4 days
    [Test prototype 0] starts at [Prototype design]'s end
    [Test prototype 10] starts at [Prototype design]'s end
    [Test prototype 20] starts at [Prototype design]'s end
    [Test prototype 30] starts at [Prototype design]'s end
    [Test prototype 40] starts at [Prototype design]'s end
    [Test prototype 50] starts at [Prototype design]'s end
    [Test prototype 60] starts at [Prototype design]'s end
    [Test prototype 70] starts at [Prototype design]'s end
    [Test prototype 80] starts at [Prototype design]'s end
    [Test prototype 90] starts at [Prototype design]'s end
    [Test prototype 100] starts at [Prototype design]'s end
    [Test prototype 0] is 0% complete
    [Test prototype 10] is 10% complete
    [Test prototype 20] is 20% complete
    [Test prototype 30] is 30% complete
    [Test prototype 40] is 40% complete
    [Test prototype 50] is 50% complete
    [Test prototype 60] is 60% complete
    [Test prototype 70] is 70% complete
    [Test prototype 80] is 80% complete
    [Test prototype 90] is 90% complete
    [Test prototype 100] is 100% complete
    @endgantt

[Ref. QA-8297]

//16.7 Milestone
----------------
You can define Milestones using the happen verb.
<!-- Page 337 / 550 -->

//16.7.1 Relative milestone (use of constraints)
------------------------------------------------

    @startgantt
    [Test prototype] lasts 10 days
    [Prototype completed] happens at [Test prototype]'s end
    [Setup assembly line] lasts 12 days
    [Setup assembly line] starts at [Test prototype]'s end
    @endgantt


//16.7.2 Absolute milestone (use of fixed date)
-----------------------------------------------

    @startgantt
    Project starts 2020-07-01
    [Test prototype] lasts 10 days
    [Prototype completed] happens 2020-07-10
    [Setup assembly line] lasts 12 days
    [Setup assembly line] starts at [Test prototype]'s end
    @endgantt


//16.7.3 Milestone of maximum end of tasks
------------------------------------------

    @startgantt
    [Task1] lasts 4 days
    then [Task1.1] lasts 4 days
    [Task1.2] starts at [Task1]'s end and lasts 7 days
    [Task2] lasts 5 days
    then [Task2.1] lasts 4 days
    [MaxTaskEnd] happens at [Task1.1]'s end
    [MaxTaskEnd] happens at [Task1.2]'s end
    [MaxTaskEnd] happens at [Task2.1]'s end
    @endgantt

[Ref. QA-10764]

//16.8 Hyperlinks
-----------------
You can add hyperlinks to tasks.
<!-- Page 338 / 550 -->


    @startgantt
    [task1] lasts 10 days
    [task1] links to [[http://plantuml.com]]
    @endgantt


//16.9 Calendar
---------------
You can specify a starting date for the whole project. By default, the first task starts at this date.

    @startgantt
    Project starts the 20th of september 2017
    [Prototype design] as [TASK1] lasts 13 days
    [TASK1] is colored in Lavender/LightBlue
    @endgantt


//16.10 Coloring days
---------------------
It is possible to add colors to some days.

    @startgantt
    Project starts the 2020/09/01
    2020/09/07 is colored in salmon
    2020/09/13 to 2020/09/16 are colored in lightblue
    [Prototype design] as [TASK1] lasts 22 days
    [TASK1] is colored in Lavender/LightBlue
    [Prototype completed] happens at [TASK1]'s end
    @endgantt


//16.11 Changing scale
----------------------
You can change scale for very long project, with one of those parameters:
• printscale

• ganttscale

• projectscale

and one of the values:
• daily (by default)

• weekly

• monthly

<!-- Page 339 / 550 -->

• quarterly

• yearly

(See QA-11272, QA-9041 and QA-10948)

//16.11.1 Daily (by default)
----------------------------

    @startgantt
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.11.2 Weekly
----------------

    @startgantt
    printscale weekly
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt
<!-- Page 340 / 550 -->


    @startgantt
    printscale weekly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

//16.11.3 Monthly
-----------------

    @startgantt
    projectscale monthly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.11.4 Quarterly
-------------------

    @startgantt
    projectscale quarterly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt
    @startgantt
    projectscale quarterly
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt

<!-- Page 341 / 550 -->

//16.11.5 Yearly
----------------

    @startgantt
    projectscale yearly
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt


//16.12 Zoom (example for all scale)
------------------------------------
You can change zoom, with the parameter:
• zoom <integer>


//16.12.1 Zoom on weekly scale
------------------------------

//16.12.2 Without zoom
----------------------

    @startgantt
    printscale daily
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 8 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 3 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


<!-- Page 342 / 550 -->

//16.12.3 With zoom
-------------------

    @startgantt
    printscale daily zoom 2
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 8 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 3 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

[Ref. QA-13725]

//16.12.4 Zoom on weekly scale
------------------------------

//16.12.5 Without zoom
----------------------

    @startgantt
    printscale weekly
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.12.6 With zoom
-------------------

    @startgantt
    printscale weekly zoom 4
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

<!-- Page 343 / 550 -->

//16.12.7 Zoom on monthly scale
-------------------------------

//16.12.8 Without zoom
----------------------

    @startgantt
    projectscale monthly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.12.9 With zoom
-------------------

    @startgantt
    projectscale monthly zoom 3
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.12.10 Zoom on quarterly scale
----------------------------------

<!-- Page 344 / 550 -->

//16.12.11 Without zoom
-----------------------

    @startgantt
    projectscale quarterly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

//16.12.12 With zoom
--------------------

    @startgantt
    projectscale quarterly zoom 7
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.12.13 Zoom on yearly scale
-------------------------------

//16.12.14 Without zoom
-----------------------

    @startgantt
    projectscale yearly
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt


//16.12.15 With zoom
--------------------

    @startgantt
    projectscale yearly zoom 2
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt

<!-- Page 345 / 550 -->

//16.13 Weekscale with Weeknumbers or Calendar Date
---------------------------------------------------

//16.13.1 With Weeknumbers (by default)
---------------------------------------

    @startgantt
    printscale weekly
    Project starts the 6th of July 2020
    [Task1] on {Alice} lasts 2 weeks
    [Task2] on {Bob:50%} lasts 2 weeks
    then [Task3] on {Alice:25%} lasts 3 days
    @endgantt


//16.13.2 With Calendar Date
----------------------------

    @startgantt
    printscale weekly with calendar date
    Project starts the 6th of July 2020
    [Task1] on {Alice} lasts 2 weeks
    [Task2] on {Bob:50%} lasts 2 weeks
    then [Task3] on {Alice:25%} lasts 3 days
    @endgantt

[Ref. QA-11630]

//16.14 Close day
-----------------
It is possible to close some day.
<!-- Page 346 / 550 -->

    @startgantt
    project starts the 2018/04/09
    saturday are closed
    sunday are closed
    2018/05/01 is closed
    2018/04/17 to 2018/04/19 is closed
    [Prototype design] lasts 14 days
    [Test prototype] lasts 4 days
    [Test prototype] starts at [Prototype design]'s end
    [Prototype design] is colored in Fuchsia/FireBrick
    [Test prototype] is colored in GreenYellow/Green
    @endgantt

Then it is possible to open some closed day.

    @startgantt
    2020-07-07 to 2020-07-17 is closed
    2020-07-13 is open
    Project starts the 2020-07-01
    [Prototype design] lasts 10 days
    Then [Test prototype] lasts 10 days
    @endgantt


//16.15 Definition of a week depending of closed days
-----------------------------------------------------
A week is a synonym for how many non-closed days are in a week, as:

    @startgantt
    Project starts 2021-03-29
    [Review 01] happens at 2021-03-29
    [Review 02 - 3 weeks] happens on 3 weeks after [Review 01]'s end
    [Review 02 - 21 days] happens on 21 days after [Review 01]'s end
    @endgantt
    So if you specify Saturday and Sunday as closed, a week will be equivalent to 5 days, as:
    @startgantt
    Project starts 2021-03-29
    saturday are closed
    sunday are closed
    [Review 01] happens at 2021-03-29
    [Review 02 - 3 weeks] happens on 3 weeks after [Review 01]'s end
    [Review 02 - 21 days] happens on 21 days after [Review 01]'s end
    @endgantt

<!-- Page 347 / 550 -->

[Ref. QA-13434]

//16.16 Working days
--------------------
It is possible to manage working days.

    @startgantt
    saturday are closed
    sunday are closed
    2022-07-04 to 2022-07-15 is closed
    Project starts 2022-06-27
    [task1] starts at 2022-06-27 and lasts 1 week
    [task2] starts 2 working days after [task1]'s end and lasts 3 days
    @endgantt

[Ref. QA-16188]

//16.17 Simplified task succession
----------------------------------
It’s possible to use the then keyword to denote consecutive tasks.

    @startgantt
    [Prototype design] lasts 14 days
    then [Test prototype] lasts 4 days
    then [Deploy prototype] lasts 6 days
    @endgantt
    You can also use arrow ->
    @startgantt
    [Prototype design] lasts 14 days
    [Build prototype] lasts 4 days
    [Prepare test] lasts 6 days
    [Prototype design] -> [Build prototype]
    [Prototype design] -> [Prepare test]
    @endgantt

<!-- Page 348 / 550 -->

//16.18 Working with resources
------------------------------

You can affect tasks on resources using the on keyword and brackets for resource name.

    @startgantt
    [Task1] on {Alice} lasts 10 days
    [Task2] on {Bob:50%} lasts 2 days
    then [Task3] on {Alice:25%} lasts 1 days
    @endgantt
    Multiple resources can be assigned to a task:
    @startgantt
    [Task1] on {Alice} {Bob} lasts 20 days
    @endgantt
    Resources can be marked as off on specific days:
    @startgantt
    project starts on 2020-06-19
    [Task1] on {Alice} lasts 10 days
    {Alice} is off on 2020-06-24 to 2020-06-26
    @endgantt


//16.19 Hide resources
----------------------

//16.19.1 Without any hiding (by default)
-----------------------------------------

    @startgantt
    [Task1] on {Alice} lasts 10 days
    [Task2] on {Bob:50%} lasts 2 days
    then [Task3] on {Alice:25%} lasts 1 days
    then [Task4] on {Alice:25%} {Bob} lasts 1 days
    @endgantt

<!-- Page 349 / 550 -->

//16.19.2 Hide resources names
------------------------------
You can hide ressources names and percentage, on tasks, using the hide ressources names keywords.

    @startgantt
    hide ressources names
    [Task1] on {Alice} lasts 10 days
    [Task2] on {Bob:50%} lasts 2 days
    then [Task3] on {Alice:25%} lasts 1 days
    then [Task4] on {Alice:25%} {Bob} lasts 1 days
    @endgantt


//16.19.3 Hide resources footbox
--------------------------------
You can also hide ressources names on bottom of the diagram using the hide ressources footbox
keywords.

    @startgantt
    hide ressources footbox
    [Task1] on {Alice} lasts 10 days
    [Task2] on {Bob:50%} lasts 2 days
    then [Task3] on {Alice:25%} lasts 1 days
    then [Task4] on {Alice:25%} {Bob} lasts 1 days
    @endgantt


//16.19.4 Hide the both (resources names and resources footbox)
---------------------------------------------------------------
You can also hide the both.

<!-- Page 350 / 550 -->

    @startgantt
    hide ressources names
    hide ressources footbox
    [Task1] on {Alice} lasts 10 days
    [Task2] on {Bob:50%} lasts 2 days
    then [Task3] on {Alice:25%} lasts 1 days
    then [Task4] on {Alice:25%} {Bob} lasts 1 days
    @endgantt

//16.20 Horizontal Separator
----------------------------

You can use -- to separate sets of tasks.

    @startgantt
    [Task1] lasts 10 days
    then [Task2] lasts 4 days
    -- Phase Two --
    then [Task3] lasts 5 days
    then [Task4] lasts 6 days
    @endgantt


//16.21 Vertical Separator
--------------------------
You can add Vertical Separators with the syntax: Separator just [at].

    @startgantt
    [task1] lasts 1 week
    [task2] starts 20 days after [task1]'s end and lasts 3 days
    Separator just at [task1]'s end
    Separator just 2 days after [task1]'s end
    Separator just at [task2]'s start
    Separator just 2 days before [task2]'s start
    @endgantt

[Ref. QA-16247]

//16.22 Complex example
-----------------------
It also possible to use the and conjunction.
You can also add delays in constraints.

<!-- Page 351 / 550 -->

    @startgantt
    [Prototype design] lasts 13 days and is colored in Lavender/LightBlue
    [Test prototype] lasts 9 days and is colored in Coral/Green and starts 3 days after [Prototype design]'s end
    [Write tests] lasts 5 days and ends at [Prototype design]'s end
    [Hire tests writers] lasts 6 days and ends at [Write tests]'s start
    [Init and write tests report] is colored in Coral/Green
    [Init and write tests report] starts 1 day before [Test prototype]'s start and ends at [Test prototype]'s end
    @endgantt

//16.23 Comments
----------------

As is mentioned on Common Commands page: ?blockquote?? Everything that starts with simple quote
' is a comment.
You can also put comments on several lines using /' to start and '/ to end. ?blockquote?? (i.e.: the first
character (except space character) of a comment line must be a simple quote ')

    @startgantt
    ' This is a comment
    [T1] lasts 3 days
    /' this comment
    is on several lines '/
    [T2] starts at [T1]'s end and lasts 1 day
    @endgantt


//16.24 Using style
-------------------

//16.24.1 Without style (by default)
------------------------------------

    @startgantt
    [Task1] lasts 20 days
    note bottom
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [Task2] lasts 4 days
    [Task1] -> [Task2]
    -- Separator title --
    [M1] happens on 5 days after [Task1]'s end
    -- end --
    @endgantt

<!-- Page 352 / 550 -->

//16.24.2 With style
--------------------
You can use style to change rendering of elements.

<!-- Page 353 / 550 -->

    @startgantt
    <style>
    ganttDiagram {
    task {
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    BackGroundColor GreenYellow
    LineColor blue
    }
    milestone {
    FontColor blue
    FontSize 25
    FontStyle italic
    BackGroundColor yellow
    LineColor red
    }
    note {
    FontColor DarkGreen
    FontSize 10
    LineColor OrangeRed
    }
    arrow {
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    BackGroundColor GreenYellow
    LineColor blue
    }
    separator {
    LineColor red
    BackGroundColor green
    FontSize 16
    FontStyle bold
    FontColor purple
    }
    }
    </style>
    [Task1] lasts 20 days
    note bottom
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [Task2] lasts 4 days
    [Task1] -> [Task2]
    -- Separator title --
    [M1] happens on 5 days after [Task1]'s end
    -- end --
    @endgantt

[Ref. QA-10835, QA-12045, QA-11877 and PR-438]

//16.24.3 With style (full example)
-----------------------------------

<!-- Page 354 / 550 -->

    @startgantt
    <style>
    ganttDiagram {
    task {
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    BackGroundColor GreenYellow
    LineColor blue
    }
    milestone {
    FontColor blue
    FontSize 25
    FontStyle italic
    BackGroundColor yellow
    LineColor red
    }
    note {
    FontColor DarkGreen
    FontSize 10
    LineColor OrangeRed
    }
    arrow {
    FontName Helvetica
    FontColor red
    FontSize 18
    FontStyle bold
    BackGroundColor GreenYellow
    LineColor blue
    LineStyle 8.0;13.0
    LineThickness 3.0
    }
    separator {
    BackgroundColor lightGreen
    LineStyle 8.0;3.0
    LineColor red
    LineThickness 1.0
    FontSize 16
    FontStyle bold
    FontColor purple
    Margin 5
    Padding 20
    }
    timeline {
    BackgroundColor Bisque
    }
    closed {
    BackgroundColor pink
    FontColor red
    }
    }
    </style>
    Project starts the 2020-12-01
    [Task1] lasts 10 days
    sunday are closed
    note bottom
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [Task2] lasts 20 days
    [Task2] starts 10 days after [Task1]'s end
    -- Separator title --
    [M1] happens on 5 days after [Task1]'s end
    <style>
    separator {
    LineColor black
    Margin 0
    Padding 0
    }
    </style>
    -- end --
    @endgantt

<!-- Page 355 / 550 -->

[Ref. QA-13570, QA-13672]
TODO: DONE Thanks for style for Separator and all style for Arrow (thickness...)

//16.24.4 Clean style
---------------------
With style, you can also clean a Gantt diagram (showing tasks, dependencies and relative 
durations only - but no actual start date and no actual scale):

    @startgantt
    <style>
    ganttDiagram {
    timeline {
    LineColor transparent
    FontColor transparent
    }
    }
    </style>
    hide footbox
    [Test prototype] lasts 7 days
    [Prototype completed] happens at [Test prototype]'s end
    [Setup assembly line] lasts 9 days
    [Setup assembly line] starts at [Test prototype]'s end
    then [Setup] lasts 5 days
    [T2] lasts 2 days and starts at [Test prototype]'s end
    then [T3] lasts 3 days
    -- end task --
    then [T4] lasts 2 days
    @endgantt

[Ref. QA-13971]
Or:

<!-- Page 356 / 550 -->

    @startgantt
    <style>
    ganttDiagram {
    timeline {
    LineColor transparent
    FontColor transparent
    }
    closed {
    FontColor transparent
    }
    }
    </style>
    hide footbox
    project starts the 2018/04/09
    saturday are closed
    sunday are closed
    2018/05/01 is closed
    2018/04/17 to 2018/04/19 is closed
    [Prototype design] lasts 9 days
    [Test prototype] lasts 5 days
    [Test prototype] starts at [Prototype design]'s end
    [Prototype design] is colored in Fuchsia/FireBrick
    [Test prototype] is colored in GreenYellow/Green
    @endgantt

[Ref. QA-13464]

//16.25 Add notes
-----------------

    @startgantt
    [task01] lasts 15 days
    note bottom
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [task01] -> [task02]
    @endgantt

Example with overlap.

<!-- Page 357 / 550 -->

    @startgantt
    [task01] lasts 15 days
    note bottom
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [task01] -> [task02]
    [task03] lasts 5 days
    @endgantt

    @startgantt
    -- test01 --
    [task01] lasts 4 days
    note bottom
    'note left
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    [task02] lasts 8 days
    [task01] -> [task02]
    note bottom
    'note left
    memo1 ...
    memo2 ...
    explanations1 ...
    explanations2 ...
    end note
    -- test02 --
    [task03] as [t3] lasts 7 days
    [t3] -> [t4]
    @endgantt

<!-- Page 358 / 550 -->

TODO: DONE Thanks for correction (of #386 on v1.2020.18) when overlapping

    @startgantt
    Project starts 2020-09-01
    [taskA] starts 2020-09-01 and lasts 3 days
    [taskB] starts 2020-09-10 and lasts 3 days
    [taskB] displays on same row as [taskA]
    [task01] starts 2020-09-05 and lasts 4 days
    then [task02] lasts 8 days
    note bottom
    note for task02
    more notes
    end note
    then [task03] lasts 7 days
    note bottom
    note for task03
    more notes
    end note
    -- separator --
    [taskC] starts 2020-09-02 and lasts 5 days
    [taskD] starts 2020-09-09 and lasts 5 days
    [taskD] displays on same row as [taskC]
    [task 10] starts 2020-09-05 and lasts 5 days
    then [task 11] lasts 5 days
    note bottom
    note for task11
    more notes
    end note
    @endgantt


//16.26 Pause tasks
-------------------
<!-- Page 359 / 550 -->


    @startgantt
    Project starts the 5th of december 2018
    saturday are closed
    sunday are closed
    2018/12/29 is opened
    [Prototype design] lasts 17 days
    [Prototype design] pauses on 2018/12/13
    [Prototype design] pauses on 2018/12/14
    [Prototype design] pauses on monday
    [Test prototype] starts at [Prototype design]'s end and lasts 2 weeks
    @endgantt

//16.27 Change link colors
--------------------------

You can change link colors:
• with this syntax: with 


    <color> <style> link

    @startgantt
    [T1] lasts 4 days
    [T2] lasts 4 days and starts 3 days after [T1]'s end with blue dotted link
    [T3] lasts 4 days and starts 3 days after [T2]'s end with green bold link
    [T4] lasts 4 days and starts 3 days after [T3]'s end with green dashed link
    @endgantt

• or directly by using arrow style


    @startgantt
    <style>
    ganttDiagram {
    arrow {
    LineColor blue
    }
    }
    </style>
    [Prototype design] lasts 7 days
    [Build prototype] lasts 4 days
    [Prepare test] lasts 6 days
    [Prototype design] -[#FF00FF]-> [Build prototype]
    [Prototype design] -[dotted]-> [Prepare test]
    Then [Run test] lasts 4 days
    @endgantt

[Ref. QA-13693]
<!-- Page 360 / 550 -->

//16.28 Tasks or Milestones on the same line
--------------------------------------------

You can put Tasks or Milestones on the same line, with this syntax:

• [T|M] displays on same row as [T|M]


    @startgantt
    [Prototype design] lasts 13 days
    [Test prototype] lasts 4 days and 1 week
    [Test prototype] starts 1 week and 2 days after [Prototype design]'s end
    [Test prototype] displays on same row as [Prototype design]
    [r1] happens on 5 days after [Prototype design]'s end
    [r2] happens on 5 days after [r1]'s end
    [r3] happens on 5 days after [r2]'s end
    [r2] displays on same row as [r1]
    [r3] displays on same row as [r1]
    @endgantt


//16.29 Highlight today
-----------------------

    @startgantt
    Project starts the 20th of september 2018
    sunday are close
    2018/09/21 to 2018/09/23 are colored in salmon
    2018/09/21 to 2018/09/30 are named [Vacation in the Bahamas]
    today is 30 days after start and is colored in #AAF
    [Foo] happens 40 days after start
    [Dummy] lasts 10 days and starts 10 days after start
    @endgantt


//16.30 Task between two milestones
-----------------------------------


    @startgantt
    project starts on 2020-07-01
    [P_start] happens 2020-07-03
    [P_end] happens 2020-07-13
    [Prototype design] occurs from [P_start] to [P_end]
    @endgantt

<!-- Page 361 / 550 -->

//16.31 Grammar and verbal form
-------------------------------

Verbal form Example
[T] starts
[M] happens

//16.32 Add title, header, footer, caption or legend
----------------------------------------------------

    @startgantt
    header some header
    footer some footer
    title My title
    [Prototype design] lasts 13 days
    legend
    The legend
    end legend
    caption This is caption
    @endgantt

(See also: Common commands)

//16.33 Removing Foot Boxes (example for all scale)
---------------------------------------------------

You can use the hide footbox keywords to remove the foot boxes of the gantt diagram (as for sequence
diagram).
Examples on:
• daily scale (without project start)


    @startgantt
    hide footbox
    title Foot Box removed
    [Prototype design] lasts 15 days
    [Test prototype] lasts 10 days
    @endgantt

<!-- Page 362 / 550 -->

• daily scale


    @startgantt
    Project starts the 20th of september 2017
    [Prototype design] as [TASK1] lasts 13 days
    [TASK1] is colored in Lavender/LightBlue
    hide footbox
    @endgantt
    • weekly scale
    @startgantt
    hide footbox
    printscale weekly
    saturday are closed
    sunday are closed
    Project starts the 1st of january 2021
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt
    • monthly scale
    @startgantt
    hide footbox
    projectscale monthly
    Project starts the 20th of september 2020
    [Prototype design] as [TASK1] lasts 130 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 20 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are named [End's committee]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

• quarterly scale


<!-- Page 363 / 550 -->

    @startgantt
    hide footbox
    projectscale quarterly
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt

• yearly scale


    @startgantt
    hide footbox
    projectscale yearly
    Project starts the 1st of october 2020
    [Prototype design] as [TASK1] lasts 700 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 200 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-03-22 are colored in salmon
    @endgantt


//16.34 Language of the calendar
--------------------------------

You can choose the language of the Gantt calendar, with the language <xx> command where <xx> is
the ISO 639 code of the language.
16.34.1 English (en, by default)

    @startgantt
    saturday are closed
    sunday are closed
    Project starts 2021-01-01
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

<!-- Page 364 / 550 -->

//16.34.2 Deutsch (de)
----------------------

    @startgantt
    language de
    saturday are closed
    sunday are closed
    Project starts 2021-01-01
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.34.3 Japanese (ja)
-----------------------

    @startgantt
    language ja
    saturday are closed
    sunday are closed
    Project starts 2021-01-01
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.34.4 Chinese (zh)
----------------------
<!-- Page 365 / 550 -->


    @startgantt
    language zh
    saturday are closed
    sunday are closed
    Project starts 2021-01-01
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt

//16.34.5 Korean (ko)
---------------------

    @startgantt
    language ko
    saturday are closed
    sunday are closed
    Project starts 2021-01-01
    [Prototype design end] as [TASK1] lasts 19 days
    [TASK1] is colored in Lavender/LightBlue
    [Testing] lasts 14 days
    [TASK1]->[Testing]
    2021-01-18 to 2021-01-22 are colored in salmon
    @endgantt


//16.35 Delete Tasks or Milestones
----------------------------------
You can mark some Tasks or Milestones as deleted instead of normally completed to distinguish tasks
that may possibly have been discarded, postponed or whatever.

    @startgantt
    [Prototype design] lasts 1 weeks
    then [Prototype completed] lasts 4 days
    [End Prototype completed] happens at [Prototype completed]'s end
    then [Test prototype] lasts 5 days
    [End Test prototype] happens at [Test prototype]'s end
    [Prototype completed] is deleted
    [End Prototype completed] is deleted
    @endgantt

<!-- Page 366 / 550 -->

[Ref. QA-9129]

//16.36 Start a project, a task or a milestone a number of days before or after
--------------------------------------------------------
today
You can start a project, a task or a milestone a number of days before or after today, using the builtin
functions %now and %date:

    @startgantt
    title Today is %date("YYYY-MM-dd")
    !$now = %now()
    !$past = %date("YYYY-MM-dd", $now - 14*24*3600)
    Project starts $past
    today is colored in pink
    [foo] lasts 10 days
    [bar] lasts 5 days and starts %date("YYYY-MM-dd", $now + 4*24*3600)
    [Tomorrow] happens %date("YYYY-MM-dd", $now + 1*24*3600)
    @endgantt

[Ref. QA-16285]

//16.37 Change Label position
-----------------------------

//16.37.1 The labels are near elements (by default)
---------------------------------------------------

    @startgantt
    [Task1] lasts 1 days
    then [Task2_long_long_long] as [T2] lasts 2 days
    -- Phase Two --
    then [Task3] as [T3] lasts 2 days
    [Task4] as [T4] lasts 1 day
    [Task5] as [T5] lasts 2 days
    [T2] -> [T4]
    [T2] -> [T5]
    [Task6_long_long_long] as [T6] lasts 4 days
    [T3] -> [T6]
    [T5] -> [T6]
    [End] happens 1 day after [T6]'s end
    @endgantt

<!-- Page 367 / 550 -->

To change the label position, you can use the command label:

//16.37.2 Label on first column
-------------------------------
• Left aligned


    @startgantt
    Label on first column and left aligned
    [Task1] lasts 1 days
    then [Task2_long_long_long] as [T2] lasts 2 days
    -- Phase Two --
    then [Task3] as [T3] lasts 2 days
    [Task4] as [T4] lasts 1 day
    [Task5] as [T5] lasts 2 days
    [T2] -> [T4]
    [T2] -> [T5]
    [Task6_long_long_long] as [T6] lasts 4 days
    [T3] -> [T6]
    [T5] -> [T6]
    [End] happens 1 day after [T6]'s end
    @endgantt
    • Right aligned
    @startgantt
    Label on first column and right aligned
    [Task1] lasts 1 days
    then [Task2_long_long_long] as [T2] lasts 2 days
    -- Phase Two --
    then [Task3] as [T3] lasts 2 days
    [Task4] as [T4] lasts 1 day
    [Task5] as [T5] lasts 2 days
    [T2] -> [T4]
    [T2] -> [T5]
    [Task6_long_long_long] as [T6] lasts 4 days
    [T3] -> [T6]
    [T5] -> [T6]
    [End] happens 1 day after [T6]'s end
    @endgantt

<!-- Page 368 / 550 -->

//16.37.3 Label on last column
------------------------------
• Left aligned


    @startgantt
    Label on last column and left aligned
    [Task1] lasts 1 days
    then [Task2_long_long_long] as [T2] lasts 2 days
    -- Phase Two --
    then [Task3] as [T3] lasts 2 days
    [Task4] as [T4] lasts 1 day
    [Task5] as [T5] lasts 2 days
    [T2] -> [T4]
    [T2] -> [T5]
    [Task6_long_long_long] as [T6] lasts 4 days
    [T3] -> [T6]
    [T5] -> [T6]
    [End] happens 1 day after [T6]'s end
    @endgantt
    • Right aligned
    @startgantt
    Label on last column and right aligned
    [Task1] lasts 1 days
    then [Task2_long_long_long] as [T2] lasts 2 days
    -- Phase Two --
    then [Task3] as [T3] lasts 2 days
    [Task4] as [T4] lasts 1 day
    [Task5] as [T5] lasts 2 days
    [T2] -> [T4]
    [T2] -> [T5]
    [Task6_long_long_long] as [T6] lasts 4 days
    [T3] -> [T6]
    [T5] -> [T6]
    [End] happens 1 day after [T6]'s end
    @endgantt

<!-- Page 369 / 550 -->

[Ref. QA-12433]
<!-- Page 370 / 550 -->

/17 MindMap
===========

MindMap diagram are still in beta: the syntax may change without notice.

//17.1 OrgMode syntax
---------------------
This syntax is compatible with OrgMode

    @startmindmap
    * Debian
    ** Ubuntu
    *** Linux Mint
    *** Kubuntu
    *** Lubuntu
    *** KDE Neon
    ** LMDE
    ** SolydXK
    ** SteamOS
    ** Raspbian with a very long name
    *** <s>Raspmbc</s> => OSMC
    *** <s>Raspyfi</s> => Volumio
    @endmindmap


//17.2 Markdown syntax
----------------------

This syntax is compatible with Markdown

    @startmindmap
    * root node
    * some first level node
    * second level node
    * another second level node
    * another first level node
    @endmindmap

<!-- Page 371 / 550 -->

//17.3 Arithmetic notation
--------------------------

You can use the following notation to choose diagram side.

    @startmindmap
    + OS
    ++ Ubuntu
    +++ Linux Mint
    +++ Kubuntu
    +++ Lubuntu
    +++ KDE Neon
    ++ LMDE
    ++ SolydXK
    ++ SteamOS
    ++ Raspbian
    -- Windows 95
    -- Windows 98
    -- Windows NT
    --- Windows 8
    --- Windows 10
    @endmindmap


//17.4 Multilines
-----------------
You can use : and ; to have multilines box.
<!-- Page 372 / 550 -->

    @startmindmap
    * Class Templates
    **:Example 1
    <code>
    template <typename T>
    class cname{
    void f1()<U+003B>
    ...
    }
    </code>
    ;
    **:Example 2
    <code>
    other template <typename T>
    class cname{
    ...
    </code>
    ;
    @endmindmap

    @startmindmap
    + root
    **:right_1.1
    right_1.2;
    ++ right_2
    left side
    -- left_1
    -- left_2
    **:left_3.1
    left_3.2;
    @endmindmap

<!-- Page 373 / 550 -->

//17.5 Multiroot Mindmap
------------------------

You can create multiroot mindmap, as:

    @startmindmap
    * Root 1
    ** Foo
    ** Bar
    * Root 2
    ** Lorem
    ** Ipsum
    @endmindmap

[Ref. QH-773]

//17.6 Colors
-------------
It is possible to change node color.

//17.6.1 With inline color
--------------------------

• OrgMode syntax mindmap


    @startmindmap
    *[#Orange] Colors
    **[#lightgreen] Green
    **[#FFBBCC] Rose
    **[#lightblue] Blue
    @endmindmap
    • Arithmetic notation syntax mindmap
    @startmindmap
    +[#Orange] Colors
    ++[#lightgreen] Green
    ++[#FFBBCC] Rose
    --[#lightblue] Blue
    @endmindmap

<!-- Page 374 / 550 -->


• Markdown syntax mindmap


    @startmindmap
    *[#Orange] root node
    *[#lightgreen] some first level node
    *[#FFBBCC] second level node
    *[#lightblue] another second level node
    *[#lightgreen] another first level node
    @endmindmap


//17.6.2 With style color
-------------------------

• OrgMode syntax mindmap


    @startmindmap
    <style>
    mindmapDiagram {
    .green {
    BackgroundColor lightgreen
    }
    .rose {
    BackgroundColor #FFBBCC
    }
    .your_style_name {
    BackgroundColor lightblue
    }
    }
    </style>
    * Colors
    ** Green <<green>>
    ** Rose <<rose>>
    ** Blue <<your_style_name>>
    @endmindmap

<!-- Page 375 / 550 -->


• Arithmetic notation syntax mindmap


    @startmindmap
    <style>
    mindmapDiagram {
    .green {
    BackgroundColor lightgreen
    }
    .rose {
    BackgroundColor #FFBBCC
    }
    .your_style_name {
    BackgroundColor lightblue
    }
    }
    </style>
    + Colors
    ++ Green <<green>>
    ++ Rose <<rose>>
    -- Blue <<your_style_name>>
    @endmindmap

• Markdown syntax mindmap

<!-- Page 376 / 550 -->

    @startmindmap
    <style>
    mindmapDiagram {
    .green {
    BackgroundColor lightgreen
    }
    .rose {
    BackgroundColor #FFBBCC
    }
    .your_style_name {
    BackgroundColor lightblue
    }
    }
    </style>
    * root node
    * some first level node <<green>>
    * second level node <<rose>>
    * another second level node <<your_style_name>>
    * another first level node <<green>>
    @endmindmap

• Apply style to a branch


    @startmindmap
    <style>
    mindmapDiagram {
    .myStyle * {
    BackgroundColor lightgreen
    }
    }
    </style>
    + root
    ++ b1 <<myStyle>>
    +++ b11
    +++ b12
    ++ b2
    @endmindmap

[Ref. GA-920]

//17.7 Removing box
-------------------
You can remove the box drawing using an underscore.

    @startmindmap
    * root node
    ** some first level node
    ***_ second level node
    ***_ another second level node
    ***_ foo
    ***_ bar
    ***_ foobar
    ** another first level node
    @endmindmap

<!-- Page 377 / 550 -->


    @startmindmap
    *_ root node
    **_ some first level node
    ***_ second level node
    ***_ another second level node
    ***_ foo
    ***_ bar
    ***_ foobar
    **_ another first level node
    @endmindmap
    @startmindmap
    + root node
    ++ some first level node
    +++_ second level node
    +++_ another second level node
    +++_ foo
    +++_ bar
    +++_ foobar
    ++_ another first level node
    -- some first right level node
    --_ another first right level node
    @endmindmap


//17.8 Changing diagram direction
---------------------------------

It is possible to use both sides of the diagram.
<!-- Page 378 / 550 -->

    @startmindmap
    * count
    ** 100
    *** 101
    *** 102
    ** 200
    left side
    ** A
    *** AA
    *** AB
    ** B
    @endmindmap

//17.9 Complete example
-----------------------


    @startmindmap
    caption figure 1
    title My super title
    * <&flag>Debian
    ** <&globe>Ubuntu
    *** Linux Mint
    *** Kubuntu
    *** Lubuntu
    *** KDE Neon
    ** <&graph>LMDE
    ** <&pulse>SolydXK
    ** <&people>SteamOS
    ** <&star>Raspbian with a very long name
    *** <s>Raspmbc</s> => OSMC
    *** <s>Raspyfi</s> => Volumio
    header
    My super header
    endheader
    center footer My super footer
    legend right
    Short
    legend
    endlegend
    @endmindmap

<!-- Page 379 / 550 -->

//17.10 Changing style
----------------------

17.10.1 node, depth

    @startmindmap
    <style>
    mindmapDiagram {
    node {
    BackgroundColor lightGreen
    }
    :depth(1) {
    BackGroundColor white
    }
    }
    </style>
    * Linux
    ** NixOS
    ** Debian
    *** Ubuntu
    **** Linux Mint
    **** Kubuntu
    **** Lubuntu
    **** KDE Neon
    @endmindmap

<!-- Page 380 / 550 -->

//17.10.2 boxless
-----------------

    @startmindmap
    <style>
    mindmapDiagram {
    node {
    BackgroundColor lightGreen
    }
    boxless {
    FontColor darkgreen
    }
    }
    </style>
    * Linux
    ** NixOS
    ** Debian
    ***_ Ubuntu
    **** Linux Mint
    **** Kubuntu
    **** Lubuntu
    **** KDE Neon
    @endmindmap

<!-- Page 381 / 550 -->

//17.11 Word Wrap
-----------------
Using MaximumWidth setting you can control automatic word wrap. Unit used is pixel.

    @startmindmap
    <style>
    node {
    Padding 12
    Margin 3
    HorizontalAlignment center
    LineColor blue
    LineThickness 3.0
    BackgroundColor gold
    RoundCorner 40
    MaximumWidth 100
    }
    rootNode {
    LineStyle 8.0;3.0
    LineColor red
    BackgroundColor white
    LineThickness 1.0
    RoundCorner 0
    Shadowing 0.0
    }
    leafNode {
    LineColor gold
    RoundCorner 0
    Padding 3
    }
    arrow {
    LineStyle 4
    LineThickness 0.5
    LineColor green
    }
    </style>
    * Hi =)
    ** sometimes i have node in wich i want to write a long text
    *** this results in really huge diagram
    **** of course, i can explicit split with a\nnew line
    **** but it could be cool if PlantUML was able to split long lines, maybe with an option
    @endmindmap

//17.12 Creole on Mindmap diagram
---------------------------------
You can use Creole or HTML Creole on Mindmap:
<!-- Page 382 / 550 -->

    @startmindmap
    * Creole on Mindmap
    left side
    **:==Creole
    This is **bold**
    This is //italics//
    This is ""monospaced""
    This is --stricken-out--
    This is __underlined__
    This is ~~wave-underlined~~
    --test Unicode and icons--
    This is <U+221E> long
    This is a <&code> icon
    Use image : <img:http://plantuml.com/logo3.png>
    ;
    **: <b>HTML Creole
    This is <b>bold</b>
    This is <i>italics</i>
    This is <font:monospaced>monospaced</font>
    This is <s>stroked</s>
    This is <u>underlined</u>
    This is <w>waved</w>
    This is <s:green>stroked</s>
    This is <u:red>underlined</u>
    This is <w:#0000FF>waved</w>
    -- other examples --
    This is <color:blue>Blue</color>
    This is <back:orange>Orange background</back>
    This is <size:20>big</size>
    ;
    right side
    **:==Creole line
    You can have horizontal line
    ----
    Or double line
    ====
    Or strong line
    ____
    Or dotted line
    ..My title..
    Or dotted title

    //and title... //
    ==Title==
    Or double-line title
    --Another title--
    Or single-line title
    Enjoy!;
    **:==Creole list item
    **test list 1**
    * Bullet list
    * Second item
    ** Sub item
    *** Sub sub item
    * Third item
    ----
    **test list 2**
    # Numbered list
    # Second item
    ## Sub item
    ## Another sub item
    # Third item
    ;
    @endmindmap

[Ref. QA-17838]

<!-- Page 383 / 550 -->
<!-- Page 384 / 550 -->

/18 Work Breakdown Structure (WBS)
==================================

WBS diagram are still in beta: the syntax may change without notice.

//18.1 OrgMode syntax
---------------------
This syntax is compatible with OrgMode

    @startwbs
    * Business Process Modelling WBS
    ** Launch the project
    *** Complete Stakeholder Research
    *** Initial Implementation Plan
    ** Design phase
    *** Model of AsIs Processes Completed
    **** Model of AsIs Processes Completed1
    **** Model of AsIs Processes Completed2
    *** Measure AsIs performance metrics
    *** Identify Quick Wins
    ** Complete innovate phase
    @endwbs

//18.2 Change direction
-----------------------

You can change direction using < and >

    @startwbs
    * Business Process Modelling WBS
    ** Launch the project
    *** Complete Stakeholder Research
    *** Initial Implementation Plan
    ** Design phase
    *** Model of AsIs Processes Completed
    ****< Model of AsIs Processes Completed1
    ****> Model of AsIs Processes Completed2
    ***< Measure AsIs performance metrics
    ***< Identify Quick Wins
    @endwbs

<!-- Page 385 / 550 -->

//18.3 Arithmetic notation
--------------------------

You can use the following notation to choose diagram side.

    @startwbs
    + New Job
    ++ Decide on Job Requirements
    +++ Identity gaps
    +++ Review JDs
    ++++ Sign-Up for courses
    ++++ Volunteer
    ++++ Reading
    ++- Checklist
    +++- Responsibilities
    +++- Location
    ++ CV Upload Done
    +++ CV Updated
    ++++ Spelling & Grammar
    ++++ Check dates
    ---- Skills
    +++ Recruitment sites chosen
    @endwbs

//18.4 Multilines
-----------------
You can use : and ; to have multilines box, as on MindMap.

<!-- Page 386 / 550 -->

    @startwbs
    * <&flag> Debian
    ** <&globe> Ubuntu
    ***:Linux Mint
    Open Source;
    *** Kubuntu
    *** ...
    @endwbs

[Ref. QA-13945]

//18.5 Removing box
-------------------
You can use underscore _ to remove box drawing.

//18.5.1 Boxless on Arithmetic notation
---------------------------------------

//18.5.2 Several boxless node
-----------------------------

    @startwbs
    + Project
    + Part One
    + Task 1.1
    - LeftTask 1.2
    + Task 1.3
    + Part Two
    + Task 2.1
    + Task 2.2
    -_ Task 2.2.1 To the left boxless
    -_ Task 2.2.2 To the Left boxless
    +_ Task 2.2.3 To the right boxless
    @endwbs

<!-- Page 387 / 550 -->

//18.5.3 All boxless node
-------------------------

    @startwbs
    +_ Project
    +_ Part One
    +_ Task 1.1
    -_ LeftTask 1.2
    +_ Task 1.3
    +_ Part Two
    +_ Task 2.1
    +_ Task 2.2
    -_ Task 2.2.1 To the left boxless
    -_ Task 2.2.2 To the Left boxless
    +_ Task 2.2.3 To the right boxless
    @endwbs

//18.5.4 Boxless on OrgMode syntax
----------------------------------

//18.5.5 Several boxless node
-----------------------------

<!-- Page 388 / 550 -->

    @startwbs
    * World
    ** America
    ***_ Canada
    ***_ Mexico
    ***_ USA
    ** Europe
    ***_ England
    ***_ Germany
    ***_ Spain
    @endwbs

[Ref. QA-13297]

//18.5.6 All boxless node
-------------------------

    @startwbs
    *_ World
    **_ America
    ***_ Canada
    ***_ Mexico
    ***_ USA
    **_ Europe
    ***_ England
    ***_ Germany
    ***_ Spain
    @endwbs

[Ref. QA-13355]

//18.6 Colors (with inline or style color)
------------------------------------------
It is possible to change node color:

• with inline color


    @startwbs
    *[#SkyBlue] this is the partner workpackage
    **[#pink] this is my workpackage
    ** this is another workpackage
    @endwbs

<!-- Page 389 / 550 -->


    @startwbs
    +[#SkyBlue] this is the partner workpackage
    ++[#pink] this is my workpackage
    ++ this is another workpackage
    @endwbs

[Ref. QA-12374, only from v1.2020.20]

• with style color


    @startwbs
    <style>
    wbsDiagram {
    .pink {
    BackgroundColor pink
    }
    .your_style_name {
    BackgroundColor SkyBlue
    }
    }
    </style>
    * this is the partner workpackage <<your_style_name>>
    ** this is my workpackage <<pink>>
    ** this is another workpackage
    @endwbs


<!-- Page 390 / 550 -->

    @startwbs
    <style>
    wbsDiagram {
    .pink {
    BackgroundColor pink
    }
    .your_style_name {
    BackgroundColor SkyBlue
    }
    }
    </style>
    + this is the partner workpackage <<your_style_name>>
    ++ this is my workpackage <<pink>>
    ++ this is another workpackage
    @endwbs

//18.7 Using style
------------------

It is possible to change diagram style.

    @startwbs
    <style>
    wbsDiagram {

    // all lines (meaning connector and borders, there are no other lines in WBS) are black by default
    Linecolor black
    arrow {

    // note that connector are actually "arrow" even if they don't look like as arrow

    // This is to be consistent with other UML diagrams. Not 100% sure that it's a good idea

    // So now connector are green
    LineColor green
    }
    :depth(0) {

    // will target root node
    BackgroundColor White
    RoundCorner 10
    LineColor red

    // Because we are targetting depth(0) for everything, border and connector for level 0 will be red
    }
    arrow {
    :depth(2) {

    // Targetting only connector between Mexico-Chihuahua and USA-Texas
    LineColor blue
    LineStyle 4
    LineThickness .5
    }
    }
    node {
    :depth(2) {
    LineStyle 2
    LineThickness 2.5
    }
    }
    boxless {

    // will target boxless node with '_'
    FontColor darkgreen
    }
    }
    </style>
    * World
    ** America
    *** Canada
    *** Mexico
    **** Chihuahua
    *** USA
    **** Texas
    ***< New York
    ** Europe
    ***_ England
    ***_ Germany
    ***_ Spain
    @endwbs

<!-- Page 391 / 550 -->


//18.8 Word Wrap
----------------

Using MaximumWidth setting you can control automatic word wrap. Unit used is pixel.

    @startwbs
    <style>
    node {
    Padding 12
    Margin 3
    HorizontalAlignment center
    LineColor blue
    LineThickness 3.0
    BackgroundColor gold
    RoundCorner 40
    MaximumWidth 100
    }
    rootNode {
    LineStyle 8.0;3.0
    LineColor red
    BackgroundColor white
    LineThickness 1.0
    RoundCorner 0
    Shadowing 0.0
    }
    leafNode {
    LineColor gold
    RoundCorner 0
    Padding 3
    }
    arrow {
    LineStyle 4
    LineThickness 0.5
    LineColor green
    }
    </style>
    * Hi =)
    ** sometimes i have node in wich i want to write a long text
    *** this results in really huge diagram
    **** of course, i can explicit split with a\nnew line
    **** but it could be cool if PlantUML was able to split long lines, maybe with an option who specify the maximum width of a node
    @endwbs

<!-- Page 392 / 550 -->

//18.9 Add arrows between WBS elements
--------------------------------------
You can add arrows between WBS elements.
Using alias with as:

    @startwbs
    <style>
    .foo {
    LineColor #00FF00;
    }
    </style>
    * Test
    ** A topic
    *** "common" as c1
    *** "common2" as c2
    ** "Another topic" as t2
    t2 -> c1 <<foo>>
    t2 ..> c2 #blue
    @endwbs

<!-- Page 393 / 550 -->

Using alias in parentheses:

    @startwbs
    * Test
    **(b) A topic
    ***(c1) common
    **(t2) Another topic
    t2 --> c1
    b -> t2 #blue
    @endwbs

[Ref. QA-16251]

//18.10 Creole on WBS diagram
-----------------------------
You can use Creole or HTML Creole on WBS:

<!-- Page 394 / 550 -->

    @startwbs
    * Creole on WBS
    **:==Creole
    This is **bold**
    This is //italics//
    This is ""monospaced""
    This is --stricken-out--
    This is __underlined__
    This is ~~wave-underlined~~
    --test Unicode and icons--
    This is <U+221E> long
    This is a <&code> icon
    Use image : <img:http://plantuml.com/logo3.png>
    ;
    **: <b>HTML Creole
    This is <b>bold</b>
    This is <i>italics</i>
    This is <font:monospaced>monospaced</font>
    This is <s>stroked</s>
    This is <u>underlined</u>
    This is <w>waved</w>
    This is <s:green>stroked</s>
    This is <u:red>underlined</u>
    This is <w:#0000FF>waved</w>
    -- other examples --
    This is <color:blue>Blue</color>
    This is <back:orange>Orange background</back>
    This is <size:20>big</size>
    ;
    **:==Creole line
    You can have horizontal line
    ----
    Or double line
    ====
    Or strong line
    ____
    Or dotted line
    ..My title..
    Or dotted title

    //and title... //
    ==Title==
    Or double-line title
    --Another title--
    Or single-line title
    Enjoy!;
    **:==Creole list item
    **test list 1**
    * Bullet list
    * Second item
    ** Sub item
    *** Sub sub item
    * Third item
    ----
    **test list 2**
    # Numbered list
    # Second item
    ## Sub item
    ## Another sub item
    # Third item
    ;
    @endwbs

<!-- Page 395 / 550 -->

<!-- Page 396 / 550 -->

/19 Maths
=========

Within PlantUML, you can use AsciiMath notation:

```uml
@startuml
:<math>int_0^1f(x)dx</math>;
:<math>x^2+y_1+z_12^34</math>;
note right
Try also
<math>d/dxf(x)=lim_(h->0)(f(x+h)-f(x))/h</math>
<math>P(y|bb"x") or f(bb"x")+epsilon</math>
end note
@enduml
```

or JLaTeXMath notation:

```uml
@startuml
:<latex>\int_0^1f(x)dx</latex>;
:<latex>x^2+y_1+z_{12}^{34}</latex>;
note right
Try also
<latex>\dfrac{d}{dx}f(x)=\lim\limits_{h \to 0}\dfrac{f(x+h)-f(x)}{h}</latex>
<latex>P(y|\mathbf{x}) \mbox{ or } f(\mathbf{x})+\epsilon</latex>
end note
@enduml
```

Here is another example:

```uml
@startuml
Bob -> Alice : Can you solve: <math>ax^2+bx+c=0</math>
Alice --> Bob: <math>x = (-b+-sqrt(b^2-4ac))/(2a)</math>
@enduml
```

<!-- Page 397 / 550 -->

//19.1 Standalone diagram
-------------------------

You can also use @startmath/@endmath to create standalone AsciiMath formula.

    @startmath
    f(t)=(a_0)/2 + sum_(n=1)^ooa_ncos((npit)/L)+sum_(n=1)^oo b_n\ sin((npit)/L)
    @endmath

Or use @startlatex/@endlatex to create standalone JLaTeXMath formula.

    @startlatex
    \sum_{i=0}^{n-1} (a_i + b_i^2)
    @endlatex

//19.2 How is this working?
---------------------------
To draw those formulas, PlantUML uses two open source projects:
• AsciiMath that converts AsciiMath notation to LaTeX expression;

• JLatexMath that displays mathematical formulas written in LaTeX. JLaTeXMath is the best Java
library to display LaTeX code.

ASCIIMathTeXImg.js is small enough to be integrated into PlantUML standard distribution.
Since JLatexMath is bigger, you have to download it separately, then unzip the 4 jar files (batik-all-1.7.jar,
jlatexmath-minimal-1.0.3.jar, jlm_cyrillic.jar and jlm_greek.jar) in the same folder as PlantUML.jar.
<!-- Page 398 / 550 -->

/20 Entity Relationship Diagram
===============================

Based on the Information Engineering notation.
This is an extension to the existing Class Diagram. This extension adds:
• Additional relations for the Information Engineering notation.

• An entity alias that maps to the class diagram class.

• An additional visibility modifier * to identify mandatory attributes.

Otherwise, the syntax for drawing diagrams is the same as for class diagrams. All other features of class
diagrams are also supported.

//20.1 Information Engineering Relations
----------------------------------------

    |       Type         |   Symbol   |
    |--------------------|------------|
    | Zero or One        |  |o--      |
    | Exactly One        |  ||--      |
    | Zero or Many       |  }o--      |
    | One or Many        |  }|--      |

Examples:

```uml
@startuml
Entity01 }|..|| Entity02
Entity03 }o..o| Entity04
Entity05 ||--o{ Entity06
Entity07 |o--|| Entity08
@enduml
```

//20.2 Entities
---------------

```uml
@startuml
entity Entity01 {
* identifying_attribute
--
* mandatory_attribute
optional_attribute
}
@enduml
```

Again, this is the normal class diagram syntax (aside from use of entity instead of class). Anything
that you can do in a class diagram can be done here.
<!-- Page 399 / 550 -->

The * visibility modifier can be used to identify mandatory attributes. A space can be used after the
modifier character to avoid conflicts with the creole bold:

```uml
@startuml
entity Entity01 {
optional attribute
**optional bold attribute**
* **mandatory bold attribute**
}
@enduml
```

//20.3 Complete Example
-----------------------

```uml
@startuml
' hide the spot
' hide circle
' avoid problems with angled crows feet
skinparam linetype ortho
entity "Entity01" as e01 {
*e1_id : number <<generated>>
--
*name : text
description : text
}
entity "Entity02" as e02 {
*e2_id : number <<generated>>
--
*e1_id : number <<FK>>
other_details : text
}
entity "Entity03" as e03 {
*e3_id : number <<generated>>
--
e1_id : number <<FK>>
other_details : text
}
entity "Entity04" as e04 {
*e4_id : number <<generated>>
--
e1_id : number <<FK>>
other_details : text
}
e01 ||..o{ e02
e01 |o..o{ e03
e01 |o..o{ e04
@enduml
```

Currently the crows feet do not look very good when the relationship is drawn at an angle to the entity.
This can be avoided by using the linetype ortho skinparam.
<!-- Page 401 / 550 -->

/21 Common Commands in PlantUML
===============================

Discover the fundamental commands universally applicable across all diagram types in PlantUML. These
commands allow you to inject versatility and personalized details into your diagrams. 
Below, we breakdown these common commands into three major categories:

//21.0.1 Global Elements
------------------------
•   Comments: Add remarks or explanatory notes in your diagram script to convey 
    additional infomation or to leave reminders for further modifications.

•   Notes: Incorporate supplementary information directly onto your diagram to 
    aid in understanding or to highlight important aspects.

•   Size Control: Adjust the dimensions of various elements to suit your preferences, 
    ensuring a balanced and well-proportioned diagram.

•   Title and Captions: Define a fitting title and add captions to elucidate the 
    context or to annotate specific parts of your diagram.

//21.0.2 Creole Syntax Description
----------------------------------
Harness the power of Creole syntax to further format the content of any element within your diagram.
This wiki markup style allows for:

• Text Formatting: Customize the appearance of your text with various styles and alignments.

• Lists: Create ordered or unordered lists to present information neatly.

• Links: Integrate hyperlinks to facilitate quick navigation to relevant resources.


//21.0.3 Style Control Command
------------------------------
Gain complete control over the presentation style of your diagram elements using the style command.
Utilize this to:
• Define Styles: Set uniform styles for elements to maintain a cohesive visual theme.

• Customize Colors: Choose specific colors for various elements to enhance visual appeal and to

create distinct classifications.
Explore these commands to create diagrams that are both functional and aesthetically pleasing, tailoring
each element to your exact specifications.

//21.1 Comments
---------------

//21.1.1 Simple comment
-----------------------
Everything that starts with simple quote ' is a comment.

```uml
@startuml
'Line comments use a single apostrophe
@enduml
```

//21.1.2 Block comment
----------------------
Block comment use C-style comments except that instead of * you use an apostrophe ', then you can
also put comments on several lines using /' to start and '/ to end.

```uml
@startuml
/'
many lines comments
here
'/
@enduml
```

<!-- Page 402 / 550 -->

[Ref. QA-1353]
Then you can also put block comment on the same line, as:

```uml
@startuml
/' case 1 '/ A -> B : AB-First step
B -> C : BC-Second step
/' case 2 '/ D -> E : DE-Third step
@enduml
```

[Ref. QA-3906 and QA-3910]

//21.1.3 Full example
---------------------

```uml
@startuml
skinparam activity {
' this is a comment
BackgroundColor White
BorderColor Black /' this is a comment '/
BorderColor Red ' this is not a comment and this line is ignored
}
start
:foo1;
@enduml
```

[Ref. GH-214]

//21.2 Zoom
-----------
You can use the scale command to zoom the generated image.
You can use either a number or a fraction to define the scale factor. You can also specify either width
or height (in pixel). And you can also give both width and height: the image is scaled to fit inside the
specified dimension.

• scale 1.5
• scale 2/3
• scale 200 width
• scale 200 height
• scale 200 * 100
• scale max 300 * 200
• scale max 1024 width
• scale max 800 height


```uml
@startuml
scale 180*90
Bob->Alice : hello
@enduml
```

//21.3 Title
------------

The title keywords is used to put a title. You can add newline using in the title description.
Some skinparam settings are available to put borders on the title.

```uml
@startuml
skinparam titleBorderRoundCorner 15
skinparam titleBorderThickness 2
skinparam titleBorderColor red
skinparam titleBackgroundColor Aqua-CadetBlue
title Simple communication\nexample
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
@enduml
```

You can use creole formatting in the title.
You can also define title on several lines using title and end title keywords.

```uml
@startuml
title
<u>Simple</u> communication example
on <i>several</i> lines and using <back:cadetblue>creole tags</back>
end title
Alice -> Bob: Authentication Request
Bob -> Alice: Authentication Response
@enduml
```

<!-- Page 404 / 550 -->

//21.4 Caption
--------------

There is also a caption keyword to put a caption under the diagram.

```uml
@startuml
caption figure 1
Alice -> Bob: Hello
@enduml
```

//21.5 Footer and header
------------------------
You can use the commands header or footer to add a footer or a header on any generated diagram.
You can optionally specify if you want a center, left or right footer/header, by adding a keyword.
As with title, it is possible to define a header or a footer on several lines.
It is also possible to put some HTML into the header or footer.

```uml
@startuml
Alice -> Bob: Authentication Request
header
<font color=red>Warning:</font>
Do not use in production.
endheader
center footer Generated for demonstration
@enduml
```

<!-- Page 405 / 550 -->

//21.6 Legend the diagram
-------------------------

The legend and end legend are keywords is used to put a legend.
You can optionally specify to have left, right, top, bottom or center alignment for the legend.

```uml
@startuml
Alice -> Bob : Hello
legend right
Short
legend
endlegend
@enduml
```


```uml
@startuml
Alice -> Bob : Hello
legend top left
Short
legend
endlegend
@enduml
```

//21.7 Appendix: Examples on all diagram
----------------------------------------

//21.7.1 Activity
-----------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
start
:Hello world;
:This is defined on
several **lines**;
stop
@enduml
```

//21.7.2 Archimate
------------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
@enduml
```

<!-- Page 407 / 550 -->

//21.7.3 Class
--------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
a -- b
@enduml
```

//21.7.4 Component, Deployment, Use-Case
----------------------------------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
node n
(u) -> [c]
@enduml
```

//21.7.5 Gantt project planning
-------------------------------

    @startgantt
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    [t] lasts 5 days
    @endgantt

TODO: DONE [(Header, footer) corrected on V1.2020.18]

//21.7.6 Object
---------------

<!-- Page 409 / 550 -->

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
object user {
name = "Dummy"
id = 123
}
@enduml
```

//21.7.7 MindMap
----------------

    @startmindmap
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endmindmap

<!-- Page 410 / 550 -->

//21.7.8 Network (nwdiag)
-------------------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
nwdiag {
network inet {
web01 [shape = cloud]
}
}
@enduml
```

//21.7.9 Sequence
-----------------

```uml
@startuml
header some header
footer some footer
<!-- Page 411 / 550 -->

title My title
caption This is caption
legend
The legend
end legend
a->b
@enduml
```

//21.7.10 State
---------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
[*] --> State1
State1 -> State2
@enduml
```

<!-- Page 412 / 550 -->

//21.7.11 Timing
----------------

```uml
@startuml
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```

//21.7.12 Work Breakdown Structure (WBS)
----------------------------------------

<!-- Page 413 / 550 -->

    @startwbs
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endwbs

TODO: DONE [Corrected on V1.2020.17]

//21.7.13 Wireframe (SALT)
--------------------------

    @startsalt
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

<!-- Page 414 / 550 -->

TODO: DONE [Corrected on V1.2020.18]

//21.8 Appendix: Examples on all diagram with style
---------------------------------------------------
TODO: DONE
FYI:
• all is only good for Sequence diagram

• title, caption and legend are good for all diagrams except for salt diagram

TODO: FIXME ?
• Now (test on 1.2020.18-19) header, footer are not good for all other diagrams except only for

Sequence diagram.
To be fix; Thanks
TODO: FIXME
Here are tests of title, header, footer, caption or legend on all the diagram with the debug style:

    <style>
    title {
    HorizontalAlignment right
    FontSize 24
    FontColor blue
    }
    header {
    HorizontalAlignment center
    FontSize 26
    FontColor purple
    }
    footer {
    HorizontalAlignment left
    FontSize 28
    FontColor red
    }
    legend {
    FontSize 30
    BackGroundColor yellow
    Margin 30
    Padding 50
    }
    caption {
    FontSize 32
    }
    </style>

//21.8.1 Activity
-----------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
start
:Hello world;
:This is defined on
several **lines**;
stop
@enduml
```

<!-- Page 416 / 550 -->

//21.8.2 Archimate
------------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
@enduml
```

<!-- Page 418 / 550 -->

//21.8.3 Class
--------------


```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
a -- b
@enduml
```

<!-- Page 419 / 550 -->

//21.8.4 Component, Deployment, Use-Case
----------------------------------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
node n
(u) -> [c]
@enduml
```

<!-- Page 420 / 550 -->


//21.8.5 Gantt project planning
-------------------------------

    @startgantt
    <style>
    title {
    HorizontalAlignment right
    FontSize 24
    FontColor blue
    }
    header {
    HorizontalAlignment center
    FontSize 26
    FontColor purple
    }
    footer {
    HorizontalAlignment left
    FontSize 28
    FontColor red
    }
    legend {
    FontSize 30
    BackGroundColor yellow
    Margin 30
    Padding 50
    }
    caption {
    FontSize 32
    }
    </style>
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    [t] lasts 5 days
    @endgantt

<!-- Page 422 / 550 -->

//21.8.6 Object
---------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
object user {
name = "Dummy"
id = 123
}
@enduml
```

<!-- Page 423 / 550 -->

//21.8.7 MindMap
----------------
<!-- Page 424 / 550 -->

    @startmindmap
    <style>
    title {
    HorizontalAlignment right
    FontSize 24
    FontColor blue
    }
    header {
    HorizontalAlignment center
    FontSize 26
    FontColor purple
    }
    footer {
    HorizontalAlignment left
    FontSize 28
    FontColor red
    }
    legend {
    FontSize 30
    BackGroundColor yellow
    Margin 30
    Padding 50
    }
    caption {
    FontSize 32
    }
    </style>
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endmindmap

<!-- Page 425 / 550 -->

//21.8.8 Network (nwdiag)
-------------------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
nwdiag {
network inet {
web01 [shape = cloud]
}
}
@enduml
```

<!-- Page 426 / 550 -->

//21.8.9 Sequence
-----------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
a->b
@enduml
```

<!-- Page 427 / 550 -->

<!-- Page 428 / 550 -->

//21.8.10 State
---------------


```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
[*] --> State1
State1 -> State2
@enduml
```

<!-- Page 429 / 550 -->

//21.8.11 Timing
----------------

```uml
@startuml
<style>
title {
HorizontalAlignment right
FontSize 24
FontColor blue
}
header {
HorizontalAlignment center
FontSize 26
FontColor purple
}
footer {
HorizontalAlignment left
FontSize 28
FontColor red
}
legend {
FontSize 30
BackGroundColor yellow
Margin 30
Padding 50
}
caption {
FontSize 32
}
</style>
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```
<!-- Page 430 / 550 -->


//21.8.12 Work Breakdown Structure (WBS)
----------------------------------------


    @startwbs
    <style>
    title {
    HorizontalAlignment right
    FontSize 24
    FontColor blue
    }
    header {
    HorizontalAlignment center
    FontSize 26
    FontColor purple
    }
    footer {
    HorizontalAlignment left
    FontSize 28
    FontColor red
    }
    legend {
    FontSize 30
    BackGroundColor yellow
    Margin 30
    Padding 50
    }
    caption {
    FontSize 32
    }
    </style>
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endwbs

//21.8.13 Wireframe (SALT)
--------------------------
TODO: FIXME Fix all (title, caption, legend, header, footer) for salt. TODO: FIXME

    @startsalt
    <style>
    title {
    HorizontalAlignment right
    FontSize 24
    FontColor blue
    }
    header {
    HorizontalAlignment center
    FontSize 26
    FontColor purple
    }
    footer {
    HorizontalAlignment left
    FontSize 28
    FontColor red
    }
    legend {
    FontSize 30
    BackGroundColor yellow
    Margin 30
    Padding 50
    }
    caption {
    FontSize 32
    }
    </style>

    @startsalt
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt


//21.9 Mainframe
----------------


```uml
@startuml
mainframe This is a **mainframe**
Alice->Bob : Hello
@enduml
```

<!-- Page 433 / 550 -->

[Ref. QA-4019 and Issue#148]

//21.10 Appendix: Examples of Mainframe on all diagram
------------------------------------------------------

//21.10.1 Activity
------------------

```uml
@startuml
mainframe This is a **mainframe**
start
:Hello world;
:This is defined on
several **lines**;
stop
@enduml
```

//21.10.2 Archimate
-------------------

```uml
@startuml
mainframe This is a **mainframe**
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
@enduml
```

<!-- Page 434 / 550 -->

TODO: FIXME ? Cropped on the top and on the left TODO: FIXME

//21.10.3 Class
---------------

```uml
@startuml
mainframe This is a **mainframe**
a -- b
@enduml
```

TODO: FIXME ? Cropped on the top and on the left TODO: FIXME

//21.10.4 Component, Deployment, Use-Case
-----------------------------------------

```uml
@startuml
mainframe This is a **mainframe**
node n
(u) -> [c]
@enduml
```

TODO: FIXME ? Cropped on the top and on the left TODO: FIXME

//21.10.5 Gantt project planning
--------------------------------

    @startgantt
    mainframe This is a **mainframe**
    [t] lasts 5 days
    @endgantt

<!-- Page 435 / 550 -->

TODO: FIXME ? Cropped on the top and on the left TODO: FIXME

//21.10.6 Object
----------------

```uml
@startuml
mainframe This is a **mainframe**
object user {
name = "Dummy"
id = 123
}
@enduml
```

TODO: FIXME ? Cropped on the top! TODO: FIXME

//21.10.7 MindMap
-----------------

    @startmindmap
    mainframe This is a **mainframe**
    * r
    ** d1
    ** d2
    @endmindmap


//21.10.8 Network (nwdiag)
--------------------------

```uml
@startuml
mainframe This is a **mainframe**
nwdiag {
network inet {
web01 [shape = cloud]
}
}
@enduml
```

<!-- Page 436 / 550 -->

TODO: FIXME ? Cropped on the top! TODO: FIXME

//21.10.9 Sequence
------------------

```uml
@startuml
mainframe This is a **mainframe**
a->b
@enduml
```

//21.10.10 State
----------------

```uml
@startuml
mainframe This is a **mainframe**
[*] --> State1
State1 -> State2
@enduml
```

TODO: FIXME ? Cropped on the top and on the left TODO: FIXME

//21.10.11 Timing
-----------------

```uml
@startuml
mainframe This is a **mainframe**
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```

<!-- Page 437 / 550 -->

//21.10.12 Work Breakdown Structure (WBS)
-----------------------------------------

    @startwbs
    mainframe This is a **mainframe**
    * r
    ** d1
    ** d2
    @endwbs

//21.10.13 Wireframe (SALT)
---------------------------

    @startsalt
    mainframe This is a **mainframe**
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

<!-- Page 438 / 550 -->

//21.11 Appendix: Examples of title, header, footer, caption, legend and mainframe on all diagram
-----------------------------------------------------------

//21.11.1 Activity
------------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
start
:Hello world;
:This is defined on
several **lines**;
stop
@enduml
```

//21.11.2 Archimate
-------------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
archimate #Technology "VPN Server" as vpnServerA <<technology-device>>
rectangle GO #lightgreen
rectangle STOP #red
rectangle WAIT #orange
@enduml
```

<!-- Page 439 / 550 -->

//21.11.3 Class
---------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
a -- b
@enduml
```

<!-- Page 440 / 550 -->

//21.11.4 Component, Deployment, Use-Case
-----------------------------------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
node n
(u) -> [c]
@enduml
```

//21.11.5 Gantt project planning
--------------------------------
<!-- Page 441 / 550 -->

    @startgantt
    mainframe This is a **mainframe**
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    [t] lasts 5 days
    @endgantt

//21.11.6 Object
----------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
object user {
name = "Dummy"
id = 123
}
@enduml
```

<!-- Page 442 / 550 -->

//21.11.7 MindMap
-----------------

    @startmindmap
    mainframe This is a **mainframe**
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endmindmap


//21.11.8 Network (nwdiag)
--------------------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
nwdiag {
network inet {
web01 [shape = cloud]
}
}
@enduml
```

//21.11.9 Sequence
------------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
a->b
@enduml
```

<!-- Page 444 / 550 -->

//21.11.10 State
----------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
[*] --> State1
State1 -> State2
@enduml
```

//21.11.11 Timing
-----------------

```uml
@startuml
mainframe This is a **mainframe**
header some header
footer some footer
title My title
caption This is caption
legend
The legend
end legend
robust "Web Browser" as WB
concise "Web User" as WU
@0
WU is Idle
WB is Idle
@100
WU is Waiting
WB is Processing
@300
WB is Waiting
@enduml
```

//21.11.12 Work Breakdown Structure (WBS)
-----------------------------------------

<!-- Page 446 / 550 -->

    @startwbs
    mainframe This is a **mainframe**
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    * r
    ** d1
    ** d2
    @endwbs

//21.11.13 Wireframe (SALT)
---------------------------

    @startsalt
    mainframe This is a **mainframe**
    header some header
    footer some footer
    title My title
    caption This is caption
    legend
    The legend
    end legend
    {+
    Login | "MyName "
    Password | "**** "
    [Cancel] | [ OK ]
    }
    @endsalt

<!-- Page 447 / 550 -->

<!-- Page 448 / 550 -->

/22 Creole
==========

Creole is a lightweight common markup language for various wikis. A light-weight Creole engine is
integrated in PlantUML to have a standardized way to emit styled text.
All diagrams support this syntax.

Note that compatibility with HTML syntax is preserved.

//22.1 Emphasized text
----------------------

```uml
@startuml
Alice -> Bob : hello --there-- here
... Some ~~long delay~~ ...
Bob -> Alice : ok
note left
This is **bold**
This is //italics//
This is ""monospaced""
This is --stricken-out--
This is __underlined__
This is ~~wave-underlined~~
end note
@enduml
```

//22.2 Lists
------------
You can use numbered and bulleted lists in node text, notes, etc.
TODO: FIXME ? You cannot quite mix numbers and bullets in a list and its sublist.

```uml
@startuml
object demo {
* Bullet list
* Second item
}
note left
* Bullet list
* Second item
** Sub item
end note
legend
# Numbered list
# Second item
## Sub item
## Another sub item
* Can't quite mix
* Numbers and bullets
# Third item
end legend
@enduml
```

//22.3 Escape character
-----------------------

You can use the tilde ~ to escape special creole characters.

```uml
@startuml
object demo {
This is not ~___underscored__.
This is not ~""monospaced"".
}
@enduml
```

//22.4 Headings
---------------

```uml
@startuml
usecase UC1 as "
= Extra-large heading
Some text
== Large heading
Other text
=== Medium heading
Information
....
==== Small heading"
@enduml
```

<!-- Page 450 / 550 -->

//22.5 Emoji
------------

All emojis from Twemoji (see EmojiTwo on Github) are available using the following syntax:

```uml
@startuml
Alice -> Bob : Hello <:1f600:>
return <:innocent:>
Alice -> Bob : Without color: <#0:sunglasses:>
Alice -> Bob : Change color: <#green:sunny:>
@enduml
```

Unlike Unicode Special characters that depend on installed fonts, the emoji are always available. 
Furthermore, emoji are already colored, but you can recolor them if you like (see examples above).
One can pick emoji from the emoji cheat sheet, the Unicode full-emoji-list, or the flat list emoji.txt in
the plantuml source.
You can also use the following PlantUML command to list available emoji:

```uml
@startuml
emoji <block>
@enduml
```

As of 13 April 2023, you can select between 1174 emoji from the following Unicode blocks:

    • Unicode block 26: 83 emoji
    • Unicode block 27: 33 emoji
    • Unicode block 1F3: 246 emoji
    • Unicode block 1F4: 255 emoji
    • Unicode block 1F5: 136 emoji
    • Unicode block 1F6: 181 emoji
    • Unicode block 1F9: 240 emoji

//22.5.1 Unicode block 26
-------------------------

```uml
@startuml
emoji 26
@enduml
```

<!-- Page 451 / 550 -->

//22.6 Horizontal lines
-----------------------


```uml
@startuml
database DB1 as "
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..
Enjoy!
"
note right
This is working also in notes
You can also add title in all these lines
==Title==
--Another title--
end note
@enduml
```

<!-- Page 452 / 550 -->

//22.7 Links
------------

You can also use URL and links.
Simple links are define using two square brackets (or three square brackets for field or method on class
diagram).

Example:

• [[http://plantuml.com]]

• [[http://plantuml.com This label is printed]]

• [[http://plantuml.com{Optional tooltip} This label is printed]]

URL can also be authenticated.

//22.8 Code
-----------
You can use <code> to display some programming code in your diagram (sorry, syntax highlighting is
not yet supported).

```uml
@startuml
Alice -> Bob : hello
note right
<code>
main() {
printf("Hello world");
}
</code>
end note
@enduml
```

This is especially useful to illustrate some PlantUML code and the resulting rendering:

```uml
@startuml
hide footbox
note over Source
<code>
This is **bold**
This is //italics//
This is ""monospaced""
This is --stricken-out--
This is __underlined__
This is ~~wave-underlined~~
--test Unicode and icons--
This is <U+221E> long
This is a <&code> icon
</code>
end note
/note over Output
This is **bold**
This is //italics//
This is ""monospaced""
This is --stricken-out--
This is __underlined__
This is ~~wave-underlined~~
--test Unicode and icons--
This is <U+221E> long
This is a <&code> icon
end note
@enduml
```

//22.9 Table
------------

//22.9.1 Create a table
-----------------------
It is possible to build table, with | separator.

```uml
@startuml
skinparam titleFontSize 14
title
Example of simple table
|= |= table |= header |
| a | table | row |
| b | table | row |
end title
[*] --> State1
@enduml
```

<!-- Page 454 / 550 -->

//22.9.2 Add color on rows or cells
-----------------------------------
You can specify background colors of rows and cells:

```uml
@startuml
start
:Here is the result
|= |= table |= header |
| a | table | row |
|<#FF8080> red |<#80FF80> green |<#8080FF> blue |
<#yellow>| b | table | row |;
@enduml
```

//22.9.3 Add color on border and text
-------------------------------------
You can also specify colors of text and borders.

```uml
@startuml
title
<#lightblue,#red>|= Step |= Date |= Name |= Status |= Link |
<#lightgreen>| 1.1 | TBD | plantuml news |<#Navy><color:OrangeRed><b> Unknown | [[https://plantuml.com/news plantuml news]] |
end title
@enduml
```

[Ref. QA-7184]

//22.9.4 No border or same color as the background
--------------------------------------------------
You can also set the border color to the same color as the background.

```uml
@startuml
node n
note right of n
<#FBFB77,#FBFB77>|= Husky / Yorkie |= Foo |
| SourceTree1 | foo1 |
| ST2 | foo2 |
end note
@enduml
```

[Ref. QA-12448]

//22.9.5 Bold header or not
---------------------------
= as the first char of a cell indicates whether to make it bold (usually used for headers), or not.
<!-- Page 455 / 550 -->


```uml
@startuml
note as deepCSS0
|<#white> Husky / Yorkie |
|=<#gainsboro> SourceTree0 |
endnote
note as deepCSS1
|= <#white> Husky / Yorkie |= Foo |
|<#gainsboro><r> SourceTree1 | foo1 |
endnote
note as deepCSS2
|= Husky / Yorkie |
|<#gainsboro> SourceTree2 |
endnote
note as deepCSS3
<#white>|= Husky / Yorkie |= Foo |
|<#gainsboro> SourceTree1 | foo1 |
endnote
@enduml
```

[Ref. QA-10923]

//22.10 Tree
------------
You can use |_ characters to build a tree.
On common commands, like title:

```uml
@startuml
skinparam titleFontSize 14
title
Example of Tree
|_ First line
|_ **Bom (Model)**
|_ prop1
|_ prop2
|_ prop3
|_ Last line
end title
[*] --> State1
@enduml
```

<!-- Page 456 / 550 -->

On Class diagram.
(Please note how we have to use an empty second compartment, else the parentheses in (Model) cause
that text to be moved to a separate first compartment):

```uml
@startuml
class Foo {
**Bar (Model)**
|_ prop
|_ **Bom (Model)**
|_ prop2
|_ prop3
|_ prop3.1
|_ prop4 :(
--
}
@enduml
```

[Ref. QA-3448]
On Component or Deployment diagrams:

```uml
@startuml
[A] as A
rectangle "Box B" {
component B [
Level 1
|_ Level 2a
|_ Level 3a
|_ Level 3b
|_ Level 3c
|_ Level 4a
|_ Level 3d
|_ Level 2b
|_ Level 3e
<!-- Page 457 / 550 -->

]
}
A -> B
@enduml
```

[Ref. QA-11365]

//22.11 Special characters
--------------------------
It’s possible to use any unicode character, either directly or with syntax &#nnnnnn; (decimal) or <U+XXXXX>
(hex):

```uml
@startuml
usecase direct as "this is ∞ long"
usecase ampHash as "this is also ∞ long"
usecase angleBrackets as "this is also <U+221E> long"
@enduml
```

Please note that not all Unicode chars appear correctly, depending on installed fonts.
• You can use the listfonts command with a test string of your desired characters, to see which fonts

may include them.
• For characters that are emoji, it’s better to use the Emoji notation that doesn’t depend on installed

fonts, and the emoji are colored.
• The PlantUML server has the ”Noto Emoji” font that has most emoji. If you want to render

diagrams on your local system, you should check which fonts you have.
• Unfortunately ”Noto Emoji” lacks normal chars, so you need to switch fonts, eg


```uml
@startuml
rectangle "<font:Noto Emoji><U+1F3F7></font> label"
rectangle "<font:Noto Emoji><U+1F527></font> wrench"
rectangle "<font:Noto Emoji><U+1F6E0></font> hammer_and_wrench"
@enduml
```

<!-- Page 458 / 550 -->

See Issue 72 for more details.

//22.12 Legacy HTML
-------------------
You can mix Creole with the following HTML tags:

    • <b> for bold text
    • <u> or <u:#AAAAAA> or <u:[[color|colorName]]> for underline
    • <i> for italic
    • <s> or <s:#AAAAAA> or <s:[[color|colorName]]> for strike text
    • <w> or <w:#AAAAAA> or <w:[[color|colorName]]> for wave underline text
    • <plain> for plain text
    • <color:#AAAAAA> or <color:[[color|colorName]]>
    • <back:#AAAAAA> or <back:[[color|colorName]]> for background color
    • <size:nn> to change font size
    • <img:file> : the file must be accessible by the filesystem
    • <img:http://plantuml.com/logo3.png> : the URL must be available from the Internet

```uml
@startuml
:* You can change <color:red>text color</color>
* You can change <back:cadetblue>background color</back>
* You can change <size:18>size</size>
* You use <u>legacy</u> <b>HTML <i>tag</i></b>
* You use <u:red>color</u> <s:green>in HTML</s> <w:#0000FF>tag</w>
----
* Use image : <img:http://plantuml.com/logo3.png>
;
@enduml
```

<!-- Page 459 / 550 -->

//22.12.1 Common HTML element
-----------------------------

```uml
@startuml
hide footbox
note over Source
<code>
This is <b>bold</b>
This is <i>italics</i>
This is <font:monospaced>monospaced</font>
This is <s>stroked</s>
This is <u>underlined</u>
This is <w>waved</w>
This is <s:green>stroked</s>
This is <u:red>underlined</u>
This is <w:#0000FF>waved</w>
This is <b>a bold text containing <plain>plain text</plain> inside</b>
-- other examples --
This is <color:blue>Blue</color>
This is <back:orange>Orange background</back>
This is <size:20>big</size>
</code>
end note
/note over Output
This is <b>bold</b>
This is <i>italics</i>
This is <font:monospaced>monospaced</font>
This is <s>stroked</s>
This is <u>underlined</u>
This is <w>waved</w>
This is <s:green>stroked</s>
This is <u:red>underlined</u>
This is <w:#0000FF>waved</w>
This is <b>a bold text containing <plain>plain text</plain> inside</b>
-- other examples --
This is <color:blue>Blue</color>
This is <back:orange>Orange background</back>
This is <size:20>big</size>
end note
@enduml
```

[Ref. QA-5254 for plain]
<!-- Page 460 / 550 -->

//22.12.2 Subscript and Superscript element [sub, sup]
------------------------------------------------------

```uml
@startuml
:<code>
This is the "caffeine" molecule: C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
</code>
This is the "caffeine" molecule: C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>
----
<code>
This is the Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</code>
This is the Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>;
@enduml
```

//22.13 OpenIconic
------------------
OpenIconic is a very nice open-source icon set. Those icons are integrated in the creole parser, so you
can use them out-of-the-box.
Use the following syntax: <&ICON_NAME>.

```uml
@startuml
title: <size:20><&heart>Use of OpenIconic<&heart></size>
class Wifi
note left
Click on <&wifi>
end note
@enduml
```

The complete list is available with the following special command:

```uml
@startuml
listopeniconic
@enduml
```
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
| List Open Iconic           | bell           | cloud                    | excerpt          | justify-right       | musical-note    | star                  |
| Credit to                  | bluetooth      | cloudy                   | expand-down      | key                 | paperclip       | sun                   |
|                            |                |                          |                  |                     |                 |                       |
| https://useiconic.com/open | bold           | code                     | expand-left      | laptop              | pencil          | tablet                |
|                            | bolt           | cog                      | expand-right     | layers              | people          | tag                   |
|                            |                |                          |                  |                     |                 |                       |
| account-login              | book           | collapse-down            | expand-up        | lightbulb           | person          | tags                  |
| account-logout             | bookmark       | collapse-left            | external-link    | link-broken         | phone           | target                |
| action-redo                | box            | collapse-right           | eye              | link-intact         | pie-chart       | task                  |
|                            |                |                          |                  |                     |                 |                       |
| action-undo                | briefcase      | collapse-up              | eyedropper       | list-rich           | pin             | terminal              |
| align-center               | british-pound  | command                  | file             | list                | play-circle     | text                  |
| align-left                 | browser        | comment-square           | fire             | location            | plus            | thumb-down            |
| align-right                | brush          | compass                  | flag             | lock-locked         | power-standby   | thumb-up              |
| aperture                   | bug            | contrast                 | flash            | lock-unlocked       | print           | timer                 |
|                            |                |                          |                  |                     |                 |                       |
| arrow-bottom               | bullhorn       | copywriting              | folder           | loop-circular       | project         | transfer              |
| arrow-circle-bottom        | calculator     | credit-card              | fork             | loop-square         | pulse           | trash                 |
| arrow-circle-left          | calendar       | crop                     | fullscreen-enter | loop                | puzzle-piece    | underline             |
| arrow-circle-right         | camera-slr     | dashboard                | fullscreen-exit  | magnifying-glass    | question-mark   | vertical-align-bottom |
| arrow-circle-top           | caret-bottom   | data-transfer-download   | globe            | map-marker          | rain            | vertical-align-center |
|                            |                |                          |                  |                     |                 |                       |
| arrow-left                 | caret-left     | data-transfer-upload     | graph            | map                 | random          | vertical-align-top    |
| arrow-right                | caret-right    | delete                   | grid-four-up     | media-pause         | reload          | video                 |
| arrow-thick-bottom         | caret-top      | dial                     | grid-three-up    | media-play          | resize-both     | volume-high           |
| arrow-thick-left           | cart           | document                 | grid-two-up      | media-record        | resize-height   | volume-low            |
| arrow-thick-right          | chat           | dollar                   | hard-drive       | media-skip-backward | resize-width    | volume-off            |
|                            |                |                          |                  |                     |                 |                       |
| arrow-thick-top            | check          | double-quote-sans-left   | header           | media-skip-forward  | rss-alt         | warning               |
| arrow-top                  | chevron-bottom | double-quote-sans-right  | headphones       | media-step-backward | rss             | wifi                  |
| audio-spectrum             | chevron-left   | double-quote-serif-left  | heart            | media-step-forward  | script          | wrench                |
| audio                      | chevron-right  | double-quote-serif-right | home             | media-stop          | share-boxed     | x                     |
| badge                      | chevron-top    | droplet                  | image            | medical-cross       | share           | yen                   |
|                            |                |                          |                  |                     |                 |                       |
| ban                        | circle-check   | eject                    | inbox            | menu                | shield          | zoom-in               |
| bar-chart                  | circle-x       | elevator                 | infinity         | microphone          | signal          | zoom-out              |
| basket                     | clipboard      | ellipses                 | info             | minus               | signpost        |                       |
| battery-empty              | clock          | envelope-closed          | italic           | monitor             | sort-ascending  |                       |
| battery-full               | cloud-download | envelope-open            | justify-center   | moon                | sort-descending |                       |
|                            |                |                          |                  |                     |                 |                       |
| beaker                     | cloud-upload   | euro                     | justify-left     | move                | spreadsheet     |                       |

<!-- Page 461 / 550 -->

//22.14 Appendix: Examples of ”Creole List” on all diagrams
-----------------------------------------------------------

//22.14.1 Activity
------------------

```uml
@startuml
start
:**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item;
stop
@enduml
```

<!-- Page 462 / 550 -->

//22.14.2 Class
---------------
TODO: FIXME ?
• Sub item

• Sub sub item

TODO: FIXME

```uml
@startuml
class a {
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
}
a -- b
@enduml
```

<!-- Page 463 / 550 -->

//22.14.3 Component, Deployment, Use-Case
-----------------------------------------

```uml
@startuml
node n [
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
]
file f as "
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
"
@enduml
```

<!-- Page 464 / 550 -->

TODO: DONE [Corrected in V1.2020.18]

//22.14.4 Gantt project planning
--------------------------------
N/A

//22.14.5 Object
----------------
TODO: FIXME ?
• Sub item

• Sub sub item

TODO: FIXME

```uml
@startuml
object user {
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
}
@enduml
```

<!-- Page 465 / 550 -->

//22.14.6 MindMap
-----------------

    @startmindmap
    * root
    ** d1
    **:**test list 1**
    * Bullet list
    * Second item
    ** Sub item
    *** Sub sub item
    * Third item
    ----
    **test list 2**
    # Numbered list
    # Second item
    ## Sub item
    ## Another sub item
    # Third item;
    @endmindmap


//22.14.7 Network (nwdiag)
--------------------------

```uml
@startuml
nwdiag {
<!-- Page 466 / 550 -->

network Network {
Server [description="**test list 1**\n* Bullet list\n* Second item\n** Sub item\n*** Sub sub item\n* Third item\n----\n**test list 2**\n# Numbered list\n# Second item\n## Sub item\n## Another sub item\n# Third item"];
}
@enduml
```

//22.14.8 Note
--------------

```uml
@startuml
note as n
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
end note
@enduml
```

//22.14.9 Sequence
------------------

```uml
@startuml
<style>
participant {HorizontalAlignment left}
</style>
<!-- Page 467 / 550 -->

participant Participant [
**test list 1**
* Bullet list
* Second item
** Sub item
*** Sub sub item
* Third item
----
**test list 2**
# Numbered list
# Second item
## Sub item
## Another sub item
# Third item
]
participant B
Participant -> B
@enduml
```

[Ref. QA-15232]

//22.14.10 State
----------------

```uml
@startuml
<style>
stateDiagram {
title {HorizontalAlignment left}
}
</style>
state "**test list 1**\n* Bullet list\n* Second item\n** Sub item\n*** Sub sub item\n* Third item\n----\n**test list 2**\n# Numbered list\n# Second item\n## Sub item\n## Another sub item\n# Third item" as a {
state "**test list 1**\n* Bullet list\n* Second item\n** Sub item\n*** Sub sub item\n* Third item\n----\n**test list 2**\n# Numbered list\n# Second item\n## Sub item\n## Another sub item\n# Third item" as b
<!-- Page 468 / 550 -->

state : **test list 1**\n* Bullet list\n* Second item\n** Sub item\n*** Sub sub item\n* Third item\n----\n**test list 2**\n# Numbered list\n# Second item\n## Sub item\n## Another sub item\n# Third item
}
@enduml
```

[Ref. QA-16978]

//22.14.11 WBS
--------------

    @startwbs
    * root
    ** d1
    **:**test list 1**
    * Bullet list
    * Second item
    ** Sub item
    *** Sub sub item
    * Third item
    ----
    **test list 2**
    # Numbered list
    # Second item
    ## Sub item
    ## Another sub item
    # Third item;
    @endwbs

<!-- Page 469 / 550 -->

22.15 Appendix: Examples of ”Creole horizontal lines” on all diagrams

//22.15.1 Activity
------------------
TODO: FIXME ? strong line ____ TODO: FIXME

```uml
@startuml
start
:You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..
Or dotted title

//and title... //
==Title==
Or double-line title
--Another title--
Or single-line title
Enjoy!;
stop
@enduml
```

<!-- Page 470 / 550 -->

//22.15.2 Class
---------------

```uml
@startuml
class a {
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..
Or dotted title

//and title... //
==Title==
Or double-line title
--Another title--
Or single-line title
Enjoy!
}
a -- b
@enduml
```

//22.15.3 Component, Deployment, Use-Case
-----------------------------------------

```uml
@startuml
node n [
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..
<!-- Page 471 / 550 -->

//and title... //
==Title==
--Another title--
Enjoy!
]
file f as "
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..

//and title... //
==Title==
--Another title--
Enjoy!
"
person p [
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..

//and title... //
==Title==
--Another title--
Enjoy!
]
@enduml
```

<!-- Page 472 / 550 -->

//22.15.4 Gantt project planning
--------------------------------
N/A

//22.15.5 Object
----------------

```uml
@startuml
object user {
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..

//and title... //
==Title==
--Another title--
Enjoy!
}
@enduml
```

<!-- Page 473 / 550 -->

TODO: DONE [Corrected on V1.2020.18]

//22.15.6 MindMap
-----------------
TODO: FIXME ? strong line ____ TODO: FIXME

    @startmindmap
    * root
    ** d1
    **:You can have horizontal line
    ----
    Or double line
    ====
    Or strong line
    ____
    Or dotted line
    ..My title..

    //and title... //
    ==Title==
    --Another title--
    Enjoy!;
    @endmindmap

//22.15.7 Network (nwdiag)
--------------------------

```uml
@startuml
nwdiag {
network Network {
<!-- Page 474 / 550 -->

Server [description="You can have horizontal line\n----\nOr double line\n====\nOr strong line\n____\nOr dotted line\n..My title..\n//and title... //\n==Title==\n--Another title--\nEnjoy!"];
}
@enduml
```

//22.15.8 Note
--------------

```uml
@startuml
note as n
You can have horizontal line
----
Or double line
====
Or strong line
____
Or dotted line
..My title..

//and title... //
==Title==
--Another title--
Enjoy!
end note
@enduml
```

//22.15.9 Sequence
------------------

```uml
@startuml
<style>
participant {HorizontalAlignment left}
</style>
participant Participant [
You can have horizontal line
----
Or double line
<!-- Page 475 / 550 -->

====
Or strong line
____
Or dotted line
..My title..

//and title... //
==Title==
--Another title--
Enjoy!
]
participant B
Participant -> B
@enduml
```

[Ref. QA-15232]

//22.15.10 State
----------------


```uml
@startuml
<style>
stateDiagram {
title {HorizontalAlignment left}
}
</style>
state "You can have horizontal line\n----\nOr double line\n====\nOr strong line\n____\nOr dotted line\n..My title..\n//and title... //\n==Title==\n--Another title--\nEnjoy!" as a {
state "You can have horizontal line\n----\nOr double line\n====\nOr strong line\n____\nOr dotted line\n..My title..\n//and title... //\n==Title==\n--Another title--\nEnjoy!" as b
state : "You can have horizontal line\n----\nOr double line\n====\nOr strong line\n____\nOr dotted line\n..My title..\n//and title... //\n==Title==\n--Another title--\nEnjoy!
}
@enduml
```

<!-- Page 476 / 550 -->

[Ref. QA-16978]

//22.15.11 WBS
--------------
TODO: FIXME ? strong line ____ TODO: FIXME

    @startwbs
    * root
    ** d1
    **:You can have horizontal line
    ----
    Or double line
    ====
    Or strong line
    ____
    Or dotted line
    ..My title..

    //and title... //
    ==Title==
    --Another title--
    Enjoy!;
    @endwbs

<!-- Page 477 / 550 -->

//22.16 Style equivalent (between Creole and HTML)
--------------------------------------------------

Style Creole Legacy HTML like
bold This is **bold** This is <b>bold</b>
italics This is //italics// This is <i>italics</i>
monospaced This is ""monospaced"" This is <font:monospaced>monospaced</font>
stroked This is --stroked-- This is <s>stroked</s>
underlined This is __underlined__ This is <u>underlined</u>
waved This is ~~~ This is <w>waved</w>

    @startmindmap
    * Style equivalent\n(between Creole and HTML)
    **:**Creole**
    ----
    <#silver>|= code|= output|
    | \n This is ""~**bold**""\n | \n This is **bold** |
    | \n This is ""~//italics//""\n | \n This is //italics// |
    | \n This is ""~""monospaced~"" ""\n | \n This is ""monospaced"" |
    | \n This is ""~--stroked--""\n | \n This is --stroked-- |
    | \n This is ""~__underlined__""\n | \n This is __underlined__ |
    | \n This is ""<U+007E><U+007E>waved<U+007E><U+007E>""\n | \n This is ~~waved~~ |;
    **:<b>Legacy HTML like
    ----
    <#silver>|= code|= output|
    | \n This is ""~<b>bold</b>""\n | \n This is <b>bold</b> |
    | \n This is ""~<i>italics</i>""\n | \n This is <i>italics</i> |
    | \n This is ""~<font:monospaced>monospaced</font>""\n | \n This is <font:monospaced>monospaced</font> |
    | \n This is ""~<s>stroked</s>""\n | \n This is <s>stroked</s> |
    | \n This is ""~<u>underlined</u>""\n | \n This is <u>underlined</u> |
    | \n This is ""~<w>waved</w>""\n | \n This is <w>waved</w> |
    And color as a bonus...
    <#silver>|= code|= output|
    | \n This is ""~<s:""<color:green>""green""</color>"">stroked</s>""\n | \n This is <s:green>stroked</s> |
    | \n This is ""~<u:""<color:red>""red""</color>"">underlined</u>""\n | \n This is <u:red>underlined</u> |
    | \n This is ""~<w:""<color:#0000FF>""#0000FF""</color>"">waved</w>""\n | \n This is <w:#0000FF>waved</w> |;
    @endmindmap

<!-- Page 478 / 550 -->

<!-- Page 479 / 550 -->

/23 Defining and using sprites
==============================

A Sprite is a small graphic element that can be used in diagrams.
In PlantUML, sprites are monochrome and can have either 4, 8 or 16 gray level.
To define a sprite, you have to use a hexadecimal digit between 0 and F per pixel.
Then you can use the sprite using <$XXX> where XXX is the name of the sprite.

```uml
@startuml
sprite $foo1 {
FFFFFFFFFFFFFFF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
FFFFFFFFFFFFFFF
}
Alice -> Bob : Testing <$foo1>
@enduml
```

You can scale the sprite.

```uml
@startuml
sprite $foo1 {
FFFFFFFFFFFFFFF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
FFFFFFFFFFFFFFF
}
Alice -> Bob : Testing <$foo1{scale=3}>
@enduml
```

<!-- Page 480 / 550 -->

//23.1 Inline SVG sprite
------------------------

You can also use inlined SVG for sprites. Only a tiny subset of SVG directives is possible, so you probably
have to compress existing SVG files using https://vecta.io/nano.

```uml
@startuml
sprite foo1 <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 0l-1 1 1.5 1.5-1.5 1.5h4v-4l-1.5 1.5-1.5-1.5zm3 4v4l1.5-1.5 1.5 1.5 1-1-1.5-1.5 1.5-1.5h-4z" /></svg>
Alice->Bob : <$foo1*3>
@enduml
```

Another example:

```uml
@startuml
sprite foo1 <svg viewBox="0 0 36 36">
<path fill="#77B255" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/>
<path fill="#FFF" d="M21.529 18.006l8.238-8.238c.977-.976.977-2.559 0-3.535-.977-.977-2.559-.977-3.535 0l-8.238 8.238-8.238-8.238c-.976-.977-2.56-.977-3.535 0-.977.976-.977 2.559 0 3.535l8.238 8.238-8.258 8.258c-.977.977-.977 2.559 0 3.535.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732l8.258-8.259 8.238 8.238c.488.488 1.128.732 1.768.732s1.279-.244 1.768-.732c.977-.977.977-2.559 0-3.535l-8.24-8.237z"/>
</svg>
Alice->Bob : <$foo1>
@enduml
```

//23.2 Changing colors
----------------------
Although sprites are monochrome, it’s possible to change their color.

```uml
@startuml
sprite $foo1 {
FFFFFFFFFFFFFFF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
F0123456789ABCF
FFFFFFFFFFFFFFF
}
Alice -> Bob : Testing <$foo1,scale=3.4,color=orange>
@enduml
```

<!-- Page 481 / 550 -->

//23.3 Encoding Sprite
----------------------

To encode sprite, you can use the command line like:
java -jar plantuml.jar -encodesprite 16z foo.png
where foo.png is the image file you want to use (it will be converted to gray automatically).
After -encodesprite, you have to specify a format: 4, 8, 16, 4z, 8z or 16z.
The number indicates the gray level and the optional z is used to enable compression in sprite definition.

//23.4 Importing Sprite
-----------------------
You can also launch the GUI to generate a sprite from an existing image.
Click in the menubar then on File/Open Sprite Window.
After copying an image into you clipboard, several possible definitions of the corresponding sprite will be
displayed : you will just have to pickup the one you want.

//23.5 Examples
---------------

```uml
@startuml
sprite $printer [15x15/8z] NOtH3W0W208HxFz_kMAhj7lHWpa1XC716sz0Pq4MVPEWfBHIuxP3L6kbTcizR8tAhzaqFvXwvFfPEqm0
start
:click on <$printer> to print the page;
@enduml
```


```uml
@startuml
sprite $bug [15x15/16z] PKzR2i0m2BFMi15p__FEjQEqB1z27aeqCqixa8S4OT7C53cKpsHpaYPDJY_12MHM-BLRyywPhrrlw3qumqNThmXgd1TOterAZmOW8sgiJafogofWRwtV3nCF
sprite $printer [15x15/8z] NOtH3W0W208HxFz_kMAhj7lHWpa1XC716sz0Pq4MVPEWfBHIuxP3L6kbTcizR8tAhzaqFvXwvFfPEqm0
sprite $disk {
444445566677881
436000000009991
43600000000ACA1
53700000001A7A1
53700000012B8A1
53800000123B8A1
63800001233C9A1
634999AABBC99B1
744566778899AB1
7456AAAAA99AAB1
8566AFC228AABB1
8567AC8118BBBB1
867BD4433BBBBB1
39AAAAABBBBBBC1
}
<!-- Page 482 / 550 -->

title Use of sprites (<$printer>, <$bug>...)
class Example {
Can have some bug : <$bug>
Click on <$disk> to save
}
note left : The printer <$printer> is available
@enduml
```

//23.6 StdLib
-------------
The PlantUML StdLib includes a number of ready icons in various IT areas such as architecture, cloud
services, logos etc. It including AWS, Azure, Kubernetes, C4, product Logos and many others. To explore
these libraries:
• Browse the Github folders of PlantUML StdLib

• Browse the source repos of StdLib collections that interest you. Eg if you are interested in logos

you can find that it came from gilbarbara-plantuml-sprites, and quickly find its
sprites-list. (The next section shows how to list selected sprites but unfortunately that’s in grayscale
whereas this custom listing is in color.)
• Study the in-depth Hitchhiker’s Guide to PlantUML, eg sections Standard Library Sprites and

PlantUML Stdlib Overview

//23.7 Listing Sprites
----------------------
You can use the listsprites command to show available sprites:
• Used on its own, it just shows ArchiMate sprites

• If you include some sprite libraries in your diagram, the command shows all these sprites, as

explained in View all the icons with listsprites.
(Example from Hitchhikers Guide to PlantUML)

```uml
@startuml
!define osaPuml https://raw.githubusercontent.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons/master
!include osaPuml/Common.puml
!include osaPuml/User/all.puml
!include osaPuml/Hardware/all.puml
!include osaPuml/Misc/all.puml
!include osaPuml/Server/all.puml
!include osaPuml/Site/all.puml
listsprites
' From The Hitchhiker’s Guide to PlantUML
@enduml
```

<!-- Page 483 / 550 -->

Most collections have files called all that allow you to see a whole sub-collection at once. Else you
need to find the sprites that interest you and include them one by one. Unfortunately, the version of
a collection included in StdLib often does not have such all files, so as you see above we include the
collection from github, not from StdLib.

All sprites are in grayscale, but most collections define specific macros that 
include appropriate (vendor-specific) colors.
<!-- Page 484 / 550 -->

/24 Skinparam command
=====================

You can change colors and font of the drawing using the skinparam command.
Example:
skinparam backgroundColor transparent

//24.1 Usage
------------
You can use this command :
• In the diagram definition, like any other commands,

• In an included file,

• In a configuration file, provided in the command line or the ANT task.


//24.2 Nested
-------------
To avoid repetition, it is possible to nest definition. So the following definition :
skinparam xxxxParam1 value1
skinparam xxxxParam2 value2
skinparam xxxxParam3 value3
skinparam xxxxParam4 value4
is strictly equivalent to:
skinparam xxxx {
Param1 value1
Param2 value2
Param3 value3
Param4 value4
}

//24.3 Black and White
----------------------
You can force the use of a black&white output using skinparam monochrome true command.

```uml
@startuml
skinparam monochrome true
actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C
User -> A: DoWork
activate A
A -> B: Create Request
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: Request Created
deactivate B
<!-- Page 485 / 550 -->

A --> User: Done
deactivate A
@enduml
```

//24.4 Shadowing
----------------

You can disable the shadowing using the skinparam shadowing false command.

```uml
@startuml
left to right direction
skinparam shadowing<<no_shadow>> false
skinparam shadowing<<with_shadow>> true
actor User
(Glowing use case) <<with_shadow>> as guc
(Flat use case) <<no_shadow>> as fuc
User -- guc
User -- fuc
@enduml
```

//24.5 Reverse colors
---------------------
You can force the use of a black&white output using skinparam monochrome reverse command. This
can be useful for black background environment.

```uml
@startuml
skinparam monochrome reverse
<!-- Page 486 / 550 -->

actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C
User -> A: DoWork
activate A
A -> B: Create Request
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: Request Created
deactivate B
A --> User: Done
deactivate A
@enduml
```

//24.6 Colors
-------------

You can use either standard color name or RGB code.

```uml
@startuml
colors
@enduml
```

<!-- Page 487 / 550 -->

transparent can only be used for background of the image.

//24.7 Font color, name and size
--------------------------------
You can change the font for the drawing using xxxFontColor, xxxFontSize and xxxFontName parameters.
Example:

    skinparam classFontColor red
    skinparam classFontSize 10
    skinparam classFontName Aapex

You can also change the default font for all fonts using skinparam defaultFontName.

Example:

    skinparam defaultFontName Aapex

Please note the fontname is highly system dependent, so do not over use it, if you look for portability.
Helvetica and Courier should be available on all systems.

A lot of parameters are available. You can list them using the following command:

    java -jar plantuml.jar -language

//24.8 Text Alignment
---------------------
Text alignment can be set to left, right or center in skinparam sequenceMessageAlign. You can
also use direction or reverseDirection values to align text depending on arrow direction.

Param name Default value Comment

sequenceMessageAlign left Used for messages in sequence diagrams
sequenceReferenceAlign center Used for ref over in sequence diagrams

```uml
@startuml
skinparam sequenceMessageAlign center
Alice -> Bob : Hi
Bob -> Alice : This is very long
@enduml
```

<!-- Page 488 / 550 -->


```uml
@startuml
skinparam sequenceMessageAlign right
Alice -> Bob : Hi
Bob -> Alice : This is very long
@enduml
```


```uml
@startuml
skinparam sequenceMessageAlign direction
Alice -> Bob : Hi
Bob -> Alice: Hi
@enduml
```

//24.9 Examples
---------------

<!-- Page 489 / 550 -->


```uml
@startuml
skinparam backgroundColor #EEEBDC
skinparam handwritten true
skinparam sequence {
ArrowColor DeepSkyBlue
ActorBorderColor DeepSkyBlue
LifeLineBorderColor blue
LifeLineBackgroundColor #A9DCDF
ParticipantBorderColor DeepSkyBlue
ParticipantBackgroundColor DodgerBlue
ParticipantFontName Impact
ParticipantFontSize 17
ParticipantFontColor #A9DCDF
ActorBackgroundColor aqua
ActorFontColor DeepSkyBlue
ActorFontSize 17
ActorFontName Aapex
}
actor User
participant "First Class" as A
participant "Second Class" as B
participant "Last Class" as C
User -> A: DoWork
activate A
A -> B: Create Request
activate B
B -> C: DoWork
activate C
C --> B: WorkDone
destroy C
B --> A: Request Created
deactivate B
A --> User: Done
deactivate A
@enduml
```


```uml
@startuml
skinparam handwritten true
skinparam actor {
BorderColor black
FontName Courier
BackgroundColor<< Human >> Gold
}
skinparam usecase {
BackgroundColor DarkSeaGreen
BorderColor DarkSlateGray
BackgroundColor<< Main >> YellowGreen
<!-- Page 490 / 550 -->

BorderColor<< Main >> YellowGreen
ArrowColor Olive
}
User << Human >>
:Main Database: as MySql << Application >>
(Start) << One Shot >>
(Use the application) as (Use) << Main >>
User -> (Start)
User --> (Use)
MySql --> (Use)
@enduml
```


```uml
@startuml
skinparam roundcorner 20
skinparam class {
BackgroundColor PaleGreen
ArrowColor SeaGreen
BorderColor SpringGreen
}
skinparam stereotypeCBackgroundColor YellowGreen
Class01 "1" *-- "many" Class02 : contains
Class03 o-- Class04 : aggregation
@enduml
```


```uml
@startuml
skinparam interface {
backgroundColor RosyBrown
borderColor orange
}
skinparam component {
FontSize 13
<!-- Page 491 / 550 -->

BackgroundColor<<Apache>> LightCoral
BorderColor<<Apache>> #FF6655
FontName Courier
BorderColor black
BackgroundColor gold
ArrowFontName Impact
ArrowColor #FF6655
ArrowFontColor #777777
}
() "Data Access" as DA
[Web Server] << Apache >>
DA - [First Component]
[First Component] ..> () HTTP : use
HTTP - [Web Server]
@enduml
```


```uml
@startuml
[AA] <<static lib>>
[BB] <<shared lib>>
[CC] <<static lib>>
node node1
node node2 <<shared node>>
database Production
skinparam component {
backgroundColor<<static lib>> DarkKhaki
backgroundColor<<shared lib>> Green
}
skinparam node {
borderColor Green
backgroundColor Yellow
backgroundColor<<shared node>> Magenta
}
skinparam databaseBackgroundColor Aqua
@enduml
```

<!-- Page 492 / 550 -->

//24.10 List of all skinparam parameters
----------------------------------------

You can use -language on the command line or generate a ”diagram” with a list of all the skinparam
parameters using :
• help skinparams

• skinparameters

//24.10.1 Command Line: -language command
-----------------------------------------
Since the documentation is not always up to date, you can have the complete list of parameters using
this command:

    java -jar plantuml.jar -language

//24.10.2 Command: help skinparams
----------------------------------
That will give you the following result, from this page (code of this command): CommandHelpSkinparam.java

```uml
@startuml
help skinparams
@enduml
```

//24.10.3 Command: skinparameters
---------------------------------

```uml
@startuml
skinparameters
@enduml
```

<!-- Page 493 / 550 -->


| ActivityBackgroundColor      | ClassFontStyle                    | FolderStereotypeFontSize     | NoteFontStyle                  | SequenceDelayFontName                  |
| ActivityBorderColor          | ClassStereotypeFontColor          | FolderStereotypeFontStyle    | NoteShadowing                  | SequenceDelayFontSize                  |
|                              |                                   |                              |                                |                                        |
| ActivityBorderThickness      | ClassStereotypeFontName           | FooterFontColor              | NoteTextAlignment              | SequenceDelayFontStyle                 |
| ActivityDiamondFontColor     | ClassStereotypeFontSize           | FooterFontName               | ObjectAttributeFontColor       | SequenceDividerBorderThickness         |
| ActivityDiamondFontName      | ClassStereotypeFontStyle          | FooterFontSize               | ObjectAttributeFontName        | SequenceDividerFontColor               |
| ActivityDiamondFontSize      | CloudFontColor                    | FooterFontStyle              | ObjectAttributeFontSize        | SequenceDividerFontName                |
| ActivityDiamondFontStyle     | CloudFontName                     | FrameFontColor               | ObjectAttributeFontStyle       | SequenceDividerFontSize                |
|                              |                                   |                              |                                |                                        |
| ActivityFontColor            | CloudFontSize                     | FrameFontName                | ObjectBorderThickness          | SequenceDividerFontStyle               |
| ActivityFontName             | CloudFontStyle                    | FrameFontSize                | ObjectFontColor                | SequenceGroupBodyBackgroundColor       |
| ActivityFontSize             | CloudStereotypeFontColor          | FrameFontStyle               | ObjectFontName                 | SequenceGroupBorderThickness           |
| ActivityFontStyle            | CloudStereotypeFontName           | FrameStereotypeFontColor     | ObjectFontSize                 | SequenceGroupFontColor                 |
| ActorBackgroundColor         | CloudStereotypeFontSize           | FrameStereotypeFontName      | ObjectFontStyle                | SequenceGroupFontName                  |
|                              |                                   |                              |                                |                                        |
| ActorBorderColor             | CloudStereotypeFontStyle          | FrameStereotypeFontSize      | ObjectStereotypeFontColor      | SequenceGroupFontSize                  |
| ActorFontColor               | ColorArrowSeparationSpace         | FrameStereotypeFontStyle     | ObjectStereotypeFontName       | SequenceGroupFontStyle                 |
| ActorFontName                | ComponentBorderThickness          | GenericDisplay               | ObjectStereotypeFontSize       | SequenceGroupHeaderFontColor           |
| ActorFontSize                | ComponentFontColor                | Guillemet                    | ObjectStereotypeFontStyle      | SequenceGroupHeaderFontName            |
| ActorFontStyle               | ComponentFontName                 | Handwritten                  | PackageBorderThickness         | SequenceGroupHeaderFontSize            |
|                              |                                   |                              |                                |                                        |
| ActorStereotypeFontColor     | ComponentFontSize                 | HeaderFontColor              | PackageFontColor               | SequenceGroupHeaderFontStyle           |
| ActorStereotypeFontName      | ComponentFontStyle                | HeaderFontName               | PackageFontName                | SequenceLifeLineBorderColor            |
| ActorStereotypeFontSize      | ComponentStereotypeFontColor      | HeaderFontSize               | PackageFontSize                | SequenceLifeLineBorderThickness        |
| ActorStereotypeFontStyle     | ComponentStereotypeFontName       | HeaderFontStyle              | PackageFontStyle               | SequenceMessageAlignment               |
| AgentBorderThickness         | ComponentStereotypeFontSize       | HexagonBorderThickness       | PackageStereotypeFontColor     | SequenceMessageTextAlignment           |
|                              |                                   |                              |                                |                                        |
| AgentFontColor               | ComponentStereotypeFontStyle      | HexagonFontColor             | PackageStereotypeFontName      | SequenceNewpageSeparatorColor          |
| AgentFontName                | ComponentStyle                    | HexagonFontName              | PackageStereotypeFontSize      | SequenceParticipant                    |
| AgentFontSize                | ConditionEndStyle                 | HexagonFontSize              | PackageStereotypeFontStyle     | SequenceParticipantBorderThickness     |
| AgentFontStyle               | ConditionStyle                    | HexagonFontStyle             | PackageStyle                   | SequenceReferenceAlignment             |
| AgentStereotypeFontColor     | ControlFontColor                  | HexagonStereotypeFontColor   | PackageTitleAlignment          | SequenceReferenceBackgroundColor       |
|                              |                                   |                              |                                |                                        |
| AgentStereotypeFontName      | ControlFontName                   | HexagonStereotypeFontName    | Padding                        | SequenceReferenceBorderThickness       |
| AgentStereotypeFontSize      | ControlFontSize                   | HexagonStereotypeFontSize    | PageBorderColor                | SequenceReferenceFontColor             |
| AgentStereotypeFontStyle     | ControlFontStyle                  | HexagonStereotypeFontStyle   | PageExternalColor              | SequenceReferenceFontName              |
| ArchimateBorderThickness     | ControlStereotypeFontColor        | HyperlinkColor               | PageMargin                     | SequenceReferenceFontSize              |
| ArchimateFontColor           | ControlStereotypeFontName         | HyperlinkUnderline           | ParticipantFontColor           | SequenceReferenceFontStyle             |
|                              |                                   |                              |                                |                                        |
| ArchimateFontName            | ControlStereotypeFontSize         | IconIEMandatoryColor         | ParticipantFontName            | SequenceReferenceHeaderBackgroundColor |
| ArchimateFontSize            | ControlStereotypeFontStyle        | IconPackageBackgroundColor   | ParticipantFontSize            | SequenceStereotypeFontColor            |
| ArchimateFontStyle           | DatabaseFontColor                 | IconPackageColor             | ParticipantFontStyle           | SequenceStereotypeFontName             |
| ArchimateStereotypeFontColor | DatabaseFontName                  | IconPrivateBackgroundColor   | ParticipantPadding             | SequenceStereotypeFontSize             |
| ArchimateStereotypeFontName  | DatabaseFontSize                  | IconPrivateColor             | ParticipantStereotypeFontColor | SequenceStereotypeFontStyle            |
|                              |                                   |                              |                                |                                        |
| ArchimateStereotypeFontSize  | DatabaseFontStyle                 | IconProtectedBackgroundColor | ParticipantStereotypeFontName  | Shadowing                              |
| ArchimateStereotypeFontStyle | DatabaseStereotypeFontColor       | IconProtectedColor           | ParticipantStereotypeFontSize  | StackFontColor                         |
| ArrowFontColor               | DatabaseStereotypeFontName        | IconPublicBackgroundColor    | ParticipantStereotypeFontStyle | StackFontName                          |
| ArrowFontName                | DatabaseStereotypeFontSize        | IconPublicColor              | PartitionBorderThickness       | StackFontSize                          |
| ArrowFontSize                | DatabaseStereotypeFontStyle       | InterfaceFontColor           | PartitionFontColor             | StackFontStyle                         |
|                              |                                   |                              |                                |                                        |
| ArrowFontStyle               | DefaultFontColor                  | InterfaceFontName            | PartitionFontName              | StackStereotypeFontColor               |
| ArrowHeadColor               | DefaultFontName                   | InterfaceFontSize            | PartitionFontSize              | StackStereotypeFontName                |
| ArrowLollipopColor           | DefaultFontSize                   | InterfaceFontStyle           | PartitionFontStyle             | StackStereotypeFontSize                |
| ArrowMessageAlignment        | DefaultFontStyle                  | InterfaceStereotypeFontColor | PathHoverColor                 | StackStereotypeFontStyle               |
| ArrowThickness               | DefaultMonospacedFontName         | InterfaceStereotypeFontName  | PersonBorderThickness          | StateAttributeFontColor                |
|                              |                                   |                              |                                |                                        |
| ArtifactFontColor            | DefaultTextAlignment              | InterfaceStereotypeFontSize  | PersonFontColor                | StateAttributeFontName                 |
| ArtifactFontName             | DesignedBackgroundColor           | InterfaceStereotypeFontStyle | PersonFontName                 | StateAttributeFontSize                 |
| ArtifactFontSize             | DesignedBorderColor               | LabelFontColor               | PersonFontSize                 | StateAttributeFontStyle                |
| ArtifactFontStyle            | DesignedDomainBorderThickness     | LabelFontName                | PersonFontStyle                | StateBorderColor                       |
| ArtifactStereotypeFontColor  | DesignedDomainFontColor           | LabelFontSize                | PersonStereotypeFontColor      | StateFontColor                         |
|                              |                                   |                              |                                |                                        |
| ArtifactStereotypeFontName   | DesignedDomainFontName            | LabelFontStyle               | PersonStereotypeFontName       | StateFontName                          |
| ArtifactStereotypeFontSize   | DesignedDomainFontSize            | LabelStereotypeFontColor     | PersonStereotypeFontSize       | StateFontSize                          |
| ArtifactStereotypeFontStyle  | DesignedDomainFontStyle           | LabelStereotypeFontName      | PersonStereotypeFontStyle      | StateFontStyle                         |
| BackgroundColor              | DesignedDomainStereotypeFontColor | LabelStereotypeFontSize      | QueueBorderThickness           | StateMessageAlignment                  |
| BiddableBackgroundColor      | DesignedDomainStereotypeFontName  | LabelStereotypeFontStyle     | QueueFontColor                 | StereotypePosition                     |
|                              |                                   |                              |                                |                                        |
| BiddableBorderColor          | DesignedDomainStereotypeFontSize  | LegendBorderThickness        | QueueFontName                  | StorageFontColor                       |
| BoundaryFontColor            | DesignedDomainStereotypeFontStyle | LegendFontColor              | QueueFontSize                  | StorageFontName                        |
| BoundaryFontName             | DiagramBorderColor                | LegendFontName               | QueueFontStyle                 | StorageFontSize                        |
| BoundaryFontSize             | DiagramBorderThickness            | LegendFontSize               | QueueStereotypeFontColor       | StorageFontStyle                       |
| BoundaryFontStyle            | DomainBackgroundColor             | LegendFontStyle              | QueueStereotypeFontName        | StorageStereotypeFontColor             |
|                              |                                   |                              |                                |                                        |
| BoundaryStereotypeFontColor  | DomainBorderColor                 | LexicalBackgroundColor       | QueueStereotypeFontSize        | StorageStereotypeFontName              |
| BoundaryStereotypeFontName   | DomainBorderThickness             | LexicalBorderColor           | QueueStereotypeFontStyle       | StorageStereotypeFontSize              |
| BoundaryStereotypeFontSize   | DomainFontColor                   | LifelineStrategy             | Ranksep                        | StorageStereotypeFontStyle             |
| BoundaryStereotypeFontStyle  | DomainFontName                    | Linetype                     | RectangleBorderThickness       | Style                                  |
| BoxPadding                   | DomainFontSize                    | MachineBackgroundColor       | RectangleFontColor             | SvglinkTarget                          |
|                              |                                   |                              |                                |                                        |
| CaptionFontColor             | DomainFontStyle                   | MachineBorderColor           | RectangleFontName              | SwimlaneBorderThickness                |
| CaptionFontName              | DomainStereotypeFontColor         | MachineBorderThickness       | RectangleFontSize              | SwimlaneTitleFontColor                 |
| CaptionFontSize              | DomainStereotypeFontName          | MachineFontColor             | RectangleFontStyle             | SwimlaneTitleFontName                  |
| CaptionFontStyle             | DomainStereotypeFontSize          | MachineFontName              | RectangleStereotypeFontColor   | SwimlaneTitleFontSize                  |
| CardBorderThickness          | DomainStereotypeFontStyle         | MachineFontSize              | RectangleStereotypeFontName    | SwimlaneTitleFontStyle                 |
|                              |                                   |                              |                                |                                        |
| CardFontColor                | Dpi                               | MachineFontStyle             | RectangleStereotypeFontSize    | SwimlaneWidth                          |
| CardFontName                 | EntityFontColor                   | MachineStereotypeFontColor   | RectangleStereotypeFontStyle   | SwimlaneWrapTitleWidth                 |
| CardFontSize                 | EntityFontName                    | MachineStereotypeFontName    | RequirementBackgroundColor     | TabSize                                |
| CardFontStyle                | EntityFontSize                    | MachineStereotypeFontSize    | RequirementBorderColor         | TimingFontColor                        |
| CardStereotypeFontColor      | EntityFontStyle                   | MachineStereotypeFontStyle   | RequirementBorderThickness     | TimingFontName                         |
|                              |                                   |                              |                                |                                        |
| CardStereotypeFontName       | EntityStereotypeFontColor         | MaxAsciiMessageLength        | RequirementFontColor           | TimingFontSize                         |
| CardStereotypeFontSize       | EntityStereotypeFontName          | MaxMessageSize               | RequirementFontName            | TimingFontStyle                        |
| CardStereotypeFontStyle      | EntityStereotypeFontSize          | MinClassWidth                | RequirementFontSize            | TitleBorderRoundCorner                 |
| CircledCharacterFontColor    | EntityStereotypeFontStyle         | Monochrome                   | RequirementFontStyle           | TitleBorderThickness                   |
| CircledCharacterFontName     | FileFontColor                     | NodeFontColor                | RequirementStereotypeFontColor | TitleFontColor                         |
|                              |                                   |                              |                                |                                        |
| CircledCharacterFontSize     | FileFontName                      | NodeFontName                 | RequirementStereotypeFontName  | TitleFontName                          |
| CircledCharacterFontStyle    | FileFontSize                      | NodeFontSize                 | RequirementStereotypeFontSize  | TitleFontSize                          |
| CircledCharacterRadius       | FileFontStyle                     | NodeFontStyle                | RequirementStereotypeFontStyle | TitleFontStyle                         |
| ClassAttributeFontColor      | FileStereotypeFontColor           | NodeStereotypeFontColor      | ResponseMessageBelowArrow      | UsecaseBorderThickness                 |
| ClassAttributeFontName       | FileStereotypeFontName            | NodeStereotypeFontName       | RoundCorner                    | UsecaseFontColor                       |
|                              |                                   |                              |                                |                                        |
| ClassAttributeFontSize       | FileStereotypeFontSize            | NodeStereotypeFontSize       | SameClassWidth                 | UsecaseFontName                        |
| ClassAttributeFontStyle      | FileStereotypeFontStyle           | NodeStereotypeFontStyle      | SequenceActorBorderThickness   | UsecaseFontSize                        |
| ClassAttributeIconSize       | FixCircleLabelOverlapping         | Nodesep                      | SequenceArrowThickness         | UsecaseFontStyle                       |
| ClassBackgroundColor         | FolderFontColor                   | NoteBackgroundColor          | SequenceBoxBorderColor         | UsecaseStereotypeFontColor             |
| ClassBorderColor             | FolderFontName                    | NoteBorderColor              | SequenceBoxFontColor           | UsecaseStereotypeFontName              |
|                              |                                   |                              |                                |                                        |
| ClassBorderThickness         | FolderFontSize                    | NoteBorderThickness          | SequenceBoxFontName            | UsecaseStereotypeFontSize              |
| ClassFontColor               | FolderFontStyle                   | NoteFontColor                | SequenceBoxFontSize            | UsecaseStereotypeFontStyle             |
| ClassFontName                | FolderStereotypeFontColor         | NoteFontName                 | SequenceBoxFontStyle           | WrapWidth                              |
| ClassFontSize                | FolderStereotypeFontName          | NoteFontSize                 | SequenceDelayFontColor         |                                        |

<!-- Page 494 / 550 -->

//24.10.4 All Skin Parameters on the Ashley’s PlantUML Doc
----------------------------------------------------------

You can also view each skinparam parameters with its results displayed at the page All Skin Parameters
of Ashley's PlantUML Doc:
• https://plantuml-documentation.readthedocs.io/en/latest/formatting/all-skin-params.html.

<!-- Page 495 / 550 -->

/25 Preprocessing
=================

Some preprocessing capabilities are included in PlantUML, and available for all diagrams.
Those functionalities are very similar to the C language preprocessor, except that the special character
# has been changed to the exclamation mark !.

//25.1 Variable definition [=, ?=]
----------------------------------
Although this is not mandatory, we highly suggest that variable names start with a $.
There are three types of data:
• Integer number (int);

• String (str) - these must be surrounded by single quote or double quote;

• JSON (JSON) - these must be surrounded by curly brackets.

(for JSON variable definition and usage, see more details on Preprocessing-JSON page)
Variables created outside function are global, that is you can access them from everywhere (including
from functions). You can emphasize this by using the optional global keyword when defining a variable.

```uml
@startuml
!$a = 42
!$ab = "foo1"
!$cd = "foo2"
!$ef = $ab + $cd
!$foo = { "name": "John", "age" : 30 }
Alice -> Bob : $a
Alice -> Bob : $ab
Alice -> Bob : $cd
Alice -> Bob : $ef
Alice -> Bob : Do you know **$foo.name** ?
@enduml
```

You can also assign a value to a variable, only if it is not already defined, with the syntax: !$a ?= "foo"

```uml
@startuml
Alice -> Bob : 1. **$name** should be empty
!$name ?= "Charlie"
Alice -> Bob : 2. **$name** should be Charlie
!$name = "David"
Alice -> Bob : 3. **$name** should be David
!$name ?= "Ethan"
Alice -> Bob : 4. **$name** should be David
<!-- Page 496 / 550 -->

@enduml
```

//25.2 Boolean expression
-------------------------


25.2.1 Boolean representation [0 is false]

There is not real boolean type, but PlantUML use this integer convention:
• Integer 0 means false

• and any non-null number (as 1) or any string (as "1", or even "0") means true.

[Ref. QA-9702]

25.2.2 Boolean operation and operator [&&, ||, ()]

You can use boolean expression, in the test, with :
• parenthesis ();

• and operator &&;

• or operator ||.

(See next example, within if test.)

25.2.3 Boolean builtin functions [%false(), %true(), %not(<exp>)]

For convenience, you can use those boolean builtin functions:
• %false()

• %true()

• %not(<exp>)

[See also Builtin functions]

//25.3 Conditions [!if, !else, !elseif, !endif]
-----------------------------------------------
• You can use expression in condition.

• else and elseif are also implemented


```uml
@startuml
!$a = 10
!$ijk = "foo"
Alice -> Bob : A
!if ($ijk == "foo") && ($a+10>=4)
Alice -> Bob : yes
!else
Alice -> Bob : This should not appear
!endif
Alice -> Bob : B
@enduml
```

<!-- Page 497 / 550 -->

//25.4 While loop [!while, !endwhile]
-------------------------------------
You can use !while and !endwhile keywords to have repeat loops.

//25.4.1 While loop (on Activity diagram)
-----------------------------------------

```uml
@startuml
!procedure $foo($arg)
:procedure start;
!while $arg!=0
!$i=3
#palegreen:arg=$arg;
!while $i!=0
:arg=$arg and i=$i;
!$i = $i - 1
!endwhile
!$arg = $arg - 1
!endwhile
:procedure end;
!endprocedure
start
$foo(2)
end
@enduml
```

<!-- Page 498 / 550 -->

[Adapted from QA-10838]

//25.4.2 While loop (on Mindmap diagram)
----------------------------------------

    @startmindmap
    !procedure $foo($arg)
    !while $arg!=0
    !$i=3
    **[#palegreen] arg = $arg
    !while $i!=0
    *** i = $i
    !$i = $i - 1
    !endwhile
    !$arg = $arg - 1
    !endwhile
    !endprocedure
    *:While
    Loop;
    $foo(2)
    @endmindmap

<!-- Page 499 / 550 -->

//25.4.3 While loop (on Component/Deployment diagram)
------------------------------------------------------

```uml
@startuml
!procedure $foo($arg)
!while $arg!=0
[Component $arg] as $arg
!$arg = $arg - 1
!endwhile
!endprocedure
$foo(4)
1->2
3-->4
@enduml
```

[Ref. QA-14088]

//25.5 Procedure [!procedure, !endprocedure]
--------------------------------------------
• Procedure names should start with a $

• Argument names should start with a $

• Procedures can call other procedures

Example:

```uml
@startuml
!procedure $msg($source, $destination)
$source --> $destination
!endprocedure
<!-- Page 500 / 550 -->

!procedure $init_class($name)
class $name {
$addCommonMethod()
}
!endprocedure
!procedure $addCommonMethod()
toString()
hashCode()
!endprocedure
$init_class("foo1")
$init_class("foo2")
$msg("foo1", "foo2")
@enduml
```

Variables defined in procedures are local. It means that the variable is destroyed when the procedure
ends.

//25.6 Return function [!function, !endfunction]
------------------------------------------------
A return function does not output any text. It just define a function that you can call:
• directly in variable definition or in diagram text

• from other return functions

• from procedures

• Function name should start with a $

• Argument names should start with a $


```uml
@startuml
!function $double($a)
!return $a + $a
!endfunction
Alice -> Bob : The double of 3 is $double(3)
@enduml
```

<!-- Page 501 / 550 -->

It is possible to shorten simple function definition in one line:

```uml
@startuml
!function $double($a) !return $a + $a
Alice -> Bob : The double of 3 is $double(3)
Alice -> Bob : $double("This work also for strings.")
@enduml
```

As in procedure (void function), variable are local by default (they are destroyed when the function is
exited). However, you can access to global variables from function. However, you can use the local
keyword to create a local variable if ever a global variable exists with the same name.

```uml
@startuml
!function $dummy()
!local $ijk = "local"
!return "Alice -> Bob : " + $ijk
!endfunction
!global $ijk = "foo"
Alice -> Bob : $ijk
$dummy()
Alice -> Bob : $ijk
@enduml
```

//25.7 Default argument value
-----------------------------
In both procedure and return functions, you can define default values for arguments.

```uml
@startuml
!function $inc($value, $step=1)
!return $value + $step
!endfunction
Alice -> Bob : Just one more $inc(3)
Alice -> Bob : Add two to three : $inc(3, 2)
@enduml
```

<!-- Page 502 / 550 -->

Only arguments at the end of the parameter list can have default values.

```uml
@startuml
!procedure defaulttest($x, $y="DefaultY", $z="DefaultZ")
note over Alice
x = $x
y = $y
z = $z
end note
!endprocedure
defaulttest(1, 2, 3)
defaulttest(1, 2)
defaulttest(1)
@enduml
```

//25.8 Unquoted procedure or function [!unquoted]
-------------------------------------------------
By default, you have to put quotes when you call a function or a procedure. It is possible to use the
unquoted keyword to indicate that a function or a procedure does not require quotes for its arguments.

```uml
@startuml
!unquoted function id($text1, $text2="FOO") !return $text1 + $text2
alice -> bob : id(aa)
alice -> bob : id(ab,cd)
@enduml
```

<!-- Page 503 / 550 -->

//25.9 Keywords arguments
-------------------------

Like in Python, you can use keywords arguments :

```uml
@startuml
!unquoted procedure $element($alias, $description="", $label="", $technology="", $size=12, $colour="green")
rectangle $alias as "
<color:$colour><<$alias>></color>
==$label==

//<size:$size>[$technology]</size>//
$description"
!endprocedure
$element(myalias, "This description is %newline()on several lines", $size=10, $technology="Java")
@enduml
```

//25.10 Including files or URL [!include, !include_many, !include_once]
--------------------------------------------------------
Use the !include directive to include file in your diagram. Using URL, you can also include file from
Internet/Intranet. Protected Internet resources can also be accessed, this is described in URL authentication.

Imagine you have the very same class that appears in many diagrams. Instead of duplicating 
the description of this class, you can define a file that contains the description.

```uml
@startuml
interface List
List : int size()
List : void clear()
List <|.. ArrayList
@enduml
```

    File List.iuml
    interface List
    List : int size()
    List : void clear()

The file List.iuml can be included in many diagrams, and any modification in this file will change all
diagrams that include it.
<!-- Page 504 / 550 -->

You can also put several @startuml/@enduml text block in an included file and then specify which block
you want to include adding !0 where 0 is the block number. The !0 notation denotes the first diagram.
For example, if you use !include foo.txt!1, the second @startuml/@enduml block within foo.txt will
be included.
You can also put an id to some @startuml/@enduml text block in an included file using @startuml(id=MY_OWN_ID)
syntax and then include the block adding !MY_OWN_ID when including the file, so using something like
!include foo.txt!MY_OWN_ID.
By default, a file can only be included once. You can use !include_many instead of !include if you
want to include some file several times. Note that there is also a !include_once directive that raises an
error if a file is included several times.

//25.11 Including Subpart [!startsub, !endsub, !includesub]
--------------------------------------------------------
You can also use !startsub NAME and !endsub to indicate sections of text to include from other files
using !includesub. For example:
file1.puml:

```uml
@startuml
A -> A : stuff1
!startsub BASIC
B -> B : stuff2
!endsub
C -> C : stuff3
!startsub BASIC
D -> D : stuff4
!endsub
@enduml
```

file1.puml would be rendered exactly as if it were:

```uml
@startuml
A -> A : stuff1
B -> B : stuff2
C -> C : stuff3
D -> D : stuff4
@enduml
```

However, this would also allow you to have another file2.puml like this:
file2.puml

```uml
@startuml
title this contains only B and D
!includesub file1.puml!BASIC
@enduml
```

This file would be rendered exactly as if:

```uml
@startuml
title this contains only B and D
B -> B : stuff2
D -> D : stuff4
@enduml
```

//25.12 Builtin functions [%]
-----------------------------
Some functions are defined by default. Their name starts by %
<!-- Page 505 / 550 -->

|         Name         |                                              Description - Example Return                                             |
|----------------------|-----------------------------------------------------------------------------------------------------------------------|
| %chr                 | Return a character from a give Unicode value %chr(65) A                                                               |
| %darken              | Return a darken color of a given color with some ratio %darken("red", 20) #CC0000                                     |
| %date                | Retrieve current date. You can provide an optional format for the date %date("yyyy.MM.dd' at 'HH:mm") current date    |
| You                  | can provide another optional time (on epoch format) %date("YYYY-MM-dd", %now() + 1*24*3600) tomorrow date             |
| %dec2hex             | Return the hexadecimal string (String) of a decimal value (Int) %dec2hex(12) c                                        |
| %dirpath             | Retrieve current dirpath %dirpath() current path                                                                      |
| %feature             | Check if some feature is available in the current PlantUML running version %feature("theme") true                     |
| %false               | Return always false %false() false                                                                                    |
| %file_exists         | Check if a file exists on the local filesystem %file_exists("c:/foo/dummy.txt") true if the file exists               |
| %filename            | Retrieve current filename %filename() current filename                                                                |
| %function_exists     | Check if a function exists %function_exists("$some_function") true if the function has been defined                   |
| %get_variable_value  | Retrieve some variable value %get_variable_value("$my_variable") the value of the variable                            |
| %getenv              | Retrieve environment variable value %getenv("OS") the value of OS variable                                            |
| %hex2dec             | Return the decimal value (Int) of a hexadecimal string (String) %hex2dec("d") or %hex2dec(d) 13                       |
| %hsl_color           | Return the RGBa color from a HSL color %hsl_color(h, s, l) or %hsl_color(h, s, l, a) %hsl_color(120, 100, 50) #00FF00 |
| %intval              | Convert a String to Int %intval("42") 42                                                                              |
| %is_dark             | Check if a color is a dark one %is_dark("#000000") true                                                               |
| %is_light            | Check if a color is a light one %is_light("#000000") false                                                            |
| %lighten             | Return a lighten color of a given color with some ratio %lighten("red", 20) #CC3333                                   |
| %load_json           | Load JSON data from local file or external URL %load_json("http://localhost:7778/management/health") JSON data        |
| %lower               | Return a lowercase string %lower("Hello") hello in that example                                                       |
| %newline             | Return a newline %newline() a newline                                                                                 |
| %not                 | Return the logical negation of an expression %not(2+2==4) false in that example                                       |
| %now                 | Return the current epoch time %now() 1685547132 in that example (when updating the doc.)                              |
| %ord                 | Return a Unicode value from a given character %ord("A") 65                                                            |
| %lighten             | Return a lighten color of a given color with some ratio %lighten("red", 20) #CC3333                                   |
| %reverse_color       | Reverse a color using RGB %reverse_color("#FF7700") #0088FF                                                           |
| %reverse_hsluv_color | Reverse a color using HSLuv %reverse_hsluv_color("#FF7700") #602800                                                   |
| %set_variable_value  | Set a global variable %set_variable_value("$my_variable", "some_value") an empty string                               |
| %size                | Return the size of any string or JSON structure %size("foo") 3 in the example                                         |
| %string              | Convert an expression to String %string(1 + 2) 3 in the example                                                       |
| %strlen              | Calculate the length of a String %strlen("foo") 3 in the example                                                      |
| %strpos              | Search a substring in a string %strpos("abcdef", "ef") 4 (position of ef)                                             |
| %substr              | Extract a substring. Takes 2 or 3 arguments %substr("abcdef", 3, 2) "de" in the example                               |
| %true                | Return always true %true() true                                                                                       |
| %upper               | Return an uppercase string %upper("Hello") HELLO in that example                                                      |
| %variable_exists     | Check if a variable exists %variable_exists("$my_variable") true if the variable has been defined exists              |
| %version             | Return PlantUML current version %version() 1.2020.8 for example                                                       |

//25.13 Logging [!log]
----------------------
You can use !log to add some log output when generating the diagram. This has no impact at all on
the diagram itself. However, those logs are printed in the command line’s output stream. This could be
useful for debug purpose.

```uml
@startuml
!function bold($text)
!$result = "<b>"+ $text +"</b>"
!log Calling bold function with $text. The result is $result
!return $result
!endfunction
Alice -> Bob : This is bold("bold")
Alice -> Bob : This is bold("a second call")
@enduml
```

<!-- Page 506 / 550 -->

//25.14 Memory dump [!dump_memory]
----------------------------------
You can use !dump_memory to dump the full content of the memory when generating the diagram. An
optional string can be put after !dump_memory. This has no impact at all on the diagram itself. This
could be useful for debug purpose.

```uml
@startuml
!function $inc($string)
!$val = %intval($string)
!log value is $val
!dump_memory
!return $val+1
!endfunction
Alice -> Bob : 4 $inc("3")
!unused = "foo"
!dump_memory EOF
@enduml
```

//25.15 Assertion [!assert]
---------------------------
You can put assertions in your diagram.

```uml
@startuml
Alice -> Bob : Hello
!assert %strpos("abcdef", "cd")==3 : "This always fails"
@enduml
```

<!-- Page 507 / 550 -->

25.16 Building custom library [!import, !include]
----------------------------------------------------------------

It’s possible to package a set of included files into a single .zip or .jar archive. This single zip/jar can
then be imported into your diagram using !import directive.
Once the library has been imported, you can !include file from this single zip/jar.
Example:

    @startuml
    !import /path/to/customLibrary.zip
    ' This just adds "customLibrary.zip" in the search path
    !include myFolder/myFile.iuml
    ' Assuming that myFolder/myFile.iuml is located somewhere
    ' either inside "customLibrary.zip" or on the local filesystem
    ...


//25.17 Search path
-------------------

You can specify the java property plantuml.include.path in the command line.
For example:

    java -Dplantuml.include.path="c:/mydir" -jar plantuml.jar atest1.txt

Note the this -D option has to put before the -jar option. -D options after the -jar option will be used to
define constants within plantuml preprocessor.

//25.18 Argument concatenation [##]
-----------------------------------

It is possible to append text to a macro argument using the ## syntax.

```uml
@startuml
!unquoted procedure COMP_TEXTGENCOMP(name)
[name] << Comp >>
interface Ifc << IfcType >> AS name##Ifc
name##Ifc - [name]
!endprocedure
COMP_TEXTGENCOMP(dummy)
@enduml
```

<!-- Page 508 / 550 -->

//25.19 Dynamic invocation [%invoke_procedure(), %call_user_func()]
----------------------------------------------------------------
You can dynamically invoke a procedure using the special %invoke_procedure() procedure. 
This procedure takes as first argument the name of the actual procedure to be called. 
The optional following arguments are copied to the called procedure.

For example, you can have:

```uml
@startuml
!procedure $go()
Bob -> Alice : hello
!endprocedure
!$wrapper = "$go"
%invoke_procedure($wrapper)
@enduml
```


```uml
@startuml
!procedure $go($txt)
Bob -> Alice : $txt
!endprocedure
%invoke_procedure("$go", "hello from Bob...")
@enduml
```

For return functions, you can use the corresponding special function %call_user_func() :

```uml
@startuml
!function bold($text)
!return "<b>"+ $text +"</b>"
!endfunction
Alice -> Bob : %call_user_func("bold", "Hello") there
@enduml
```

<!-- Page 509 / 550 -->

//25.20 Evaluation of addition depending of data types [+]
----------------------------------------------------------------
Evaluation of $a + $b depending of type of $a or $b

```uml
@startuml
title
<#LightBlue>|= |= $a |= $b |= <U+0025>string($a + $b)|
<#LightGray>| type | str | str | str (concatenation) |
| example |= "a" |= "b" |= %string("a" + "b") |
<#LightGray>| type | str | int | str (concatenation) |
| ex.|= "a" |= 2 |= %string("a" + 2) |
<#LightGray>| type | str | int | str (concatenation) |
| ex.|= 1 |= "b" |= %string(1 + "b") |
<#LightGray>| type | bool | str | str (concatenation) |
| ex.|= <U+0025>true() |= "b" |= %string(%true() + "b") |
<#LightGray>| type | str | bool | str (concatenation) |
| ex.|= "a" |= <U+0025>false() |= %string("a" + %false()) |
<#LightGray>| type | int | int | int (addition of int) |
| ex.|= 1 |= 2 |= %string(1 + 2) |
<#LightGray>| type | bool | int | int (addition) |
| ex.|= <U+0025>true() |= 2 |= %string(%true() + 2) |
<#LightGray>| type | int | bool | int (addition) |
| ex.|= 1 |= <U+0025>false() |= %string(1 + %false()) |
<#LightGray>| type | int | int | int (addition) |
| ex.|= 1 |= <U+0025>intval("2") |= %string(1 + %intval("2")) |
end title
@enduml
```

//25.21 Preprocessing JSON
--------------------------
You can extend the functionality of the current Preprocessing with JSON Preprocessing features:
• JSON Variable definition

• Access to JSON data

• Loop over JSON array

(See more details on Preprocessing-JSON page)

//25.22 Including theme [!theme]
--------------------------------

Use the !theme directive to change the default theme of your diagram.
<!-- Page 510 / 550 -->


```uml
@startuml
!theme spacelab
class Example {
Theme spacelab
}
@enduml
```

You will find more information on the dedicated page.

//25.23 Migration notes
-----------------------
The current preprocessor is an update from some legacy preprocessor.
Even if some legacy features are still supported with the actual preprocessor, you should not use them
any more (they might be removed in some long term future).
• You should not use !define and !definelong anymore. Use !function, !procedure or variable

definition instead.
– !define should be replaced by return !function
– !definelong should be replaced by !procedure.
• !include now allows multiple inclusions : you don’t have to use !include_many anymore

• !include now accepts a URL, so you don’t need !includeurl

• Some features (like %date%) have been replaced by builtin functions (for example %date())

• When calling a legacy !definelong macro with no arguments, you do have to use parenthesis.

You have to use my_own_definelong() because my_own_definelong without parenthesis is not
recognized by the new preprocessor.
Please contact us if you have any issues.

//25.24 %Splitstr builtin function
----------------------------------

    @startmindmap
    !$list = %splitstr("abc~def~ghi", "~")
    * root
    !foreach $item in $list
    ** $item
    !endfor
    @endmindmap

[Ref. QA-15374]
<!-- Page 511 / 550 -->

/26 Unicode
===========

The PlantUML language use letters to define actor, usecase and so on.
But letters are not only A-Z latin characters, it could be any kind of letter from any language.

//26.1 Examples
---------------

```uml
@startuml
skinparam handwritten true
skinparam backgroundColor #EEEBDC
actor 使用者
participant "頭等艙" as A
participant "第二類" as B
participant "最後一堂課" as 別的東西
使用者 -> A: 完成這項工作
activate A
A -> B: 創建請求
activate B
B -> 別的東西: 創建請求
activate 別的東西
別的東西 --> B: 這項工作完成
destroy 別的東西
B --> A: 請求創建
deactivate B
A --> 使用者: 做完
deactivate A
@enduml
```


```uml
@startuml
(*) --> "膩平台"
--> === S1 ===
--> 鞠躬向公眾
--> === S2 ===
<!-- Page 512 / 550 -->

--> 這傢伙波武器
--> (*)
skinparam backgroundColor #AAFFFF
skinparam activityStartColor red
skinparam activityBarColor SaddleBrown
skinparam activityEndColor Silver
skinparam activityBackgroundColor Peru
skinparam activityBorderColor Peru
@enduml
```


```uml
@startuml
skinparam usecaseBackgroundColor DarkSeaGreen
skinparam usecaseArrowColor Olive
skinparam actorBorderColor black
skinparam usecaseBorderColor DarkSlateGray
使用者 << 人類 >>
"主數據庫" as 數據庫 << 應用程式 >>
(草創) << 一桿 >>
"主数据燕" as (贏余) << 基本的 >>
使用者 -> (草創)
使用者 --> (贏余)
數據庫 --> (贏余)
@enduml
```

<!-- Page 513 / 550 -->


```uml
@startuml
() ”Σ?????????????” as Σ???????
Σ??????? - [Π???? ???????????]
[Π???? ???????????] ..> () Α???? : Α???? ?? ???????????????? ??????
@enduml
```

//26.2 Charset
--------------
The default charset used when reading the text files containing the UML text description is system
dependent.

Normally, it should just be fine, but in some case, you may want to the use another charset. For example,
with the command line:

    java -jar plantuml.jar -charset UTF-8 files.txt

Or, with the ant task:

    <!-- Put images in c:/images directory -->
    <target name="main">
    <plantuml dir="./src" charset="UTF-8" />

Depending of your Java installation, the following charset should be available: ISO-8859-1, UTF-8,
UTF-16BE, UTF-16LE, UTF-16.

//26.3 Using Unicode Character on PlantUML
------------------------------------------
On PlantUML diagram, you can integrate:
• Special characters using &#XXXX; or <U+XXXX> form;

• Emoji using <:XXXXX:> or <:NameOfEmoji:>form.

<!-- Page 514 / 550 -->

/27 PlantUML Standard Library
=============================

Welcome to the guide on PlantUML’s official Standard Library (stdlib). Here, we delve into this
integral resource that is now included in all official releases of PlantUML, facilitating a richer diagram
creation experience. The library borrows its file inclusion convention from the ”C standard library”, a
well-established protocol in the programming world.

//27.0.1 Standard Library Overview
----------------------------------
The Standard Library is a repository of files and resources, constantly updated to enhance your PlantUML
experience. It forms the backbone of PlantUML, offering a range of functionalities and features to explore.

//27.0.2 Contribution from the Community
----------------------------------------
A significant portion of the library’s contents are generously provided by third-party contributors. We
extend our heartfelt gratitude to them for their invaluable contributions that have played a pivotal role
in enriching the library.
We encourage users to delve into the abundant resources the Standard Library offers, to not only enhance
their diagram crafting experience but also possibly contribute and be a part of this collaborative endeavor.

//27.1 List of Standard Library
-------------------------------
You can list standard library folders using the special diagram:

```uml
@startuml
stdlib
@enduml
```

<!-- Page 515 / 550 -->

It is also possible to use the command line 

    java -jar plantuml.jar -stdlib 

to display the same list.

Finally, you can extract the full standard library sources using 

    java -jar plantuml.jar -extractstdlib.

All files will be extracted in the folder stdlib.
Sources used to build official PlantUML releases are hosted here https://github.com/plantuml/plantumlstdlib. 
You can create Pull Request to update or add some library if you find it relevant.

<!-- Page 516 / 550 -->

//27.2 ArchiMate [archimate]
----------------------------
|  Type  |                                Link                               |
|--------|-------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/archimate |
| src    | https://github.com/ebbypeter/Archimate-PlantUML                   |
| orig   | https://en.wikipedia.org/wiki/ArchiMate                           |

This repository contains ArchiMate PlantUML macros and other includes for 
creating Archimate Diagrams easily and consistantly.

```uml
@startuml
!include <archimate/Archimate>
title Archimate Sample - Internet Browser
' Elements
Business_Object(businessObject, "A Business Object")
Business_Process(someBusinessProcess,"Some Business Process")
Business_Service(itSupportService, "IT Support for Business (Application Service)")
Application_DataObject(dataObject, "Web Page Data \n 'on the fly'")
Application_Function(webpageBehaviour, "Web page behaviour")
Application_Component(ActivePartWebPage, "Active Part of the web page \n 'on the fly'")
Technology_Artifact(inMemoryItem,"in memory / 'on the fly' html/javascript")
Technology_Service(internetBrowser, "Internet Browser Generic & Plugin")
Technology_Service(internetBrowserPlugin, "Some Internet Browser Plugin")
Technology_Service(webServer, "Some web server")
'Relationships
Rel_Flow_Left(someBusinessProcess, businessObject, "")
Rel_Serving_Up(itSupportService, someBusinessProcess, "")
Rel_Specialization_Up(webpageBehaviour, itSupportService, "")
Rel_Flow_Right(dataObject, webpageBehaviour, "")
Rel_Specialization_Up(dataObject, businessObject, "")
Rel_Assignment_Left(ActivePartWebPage, webpageBehaviour, "")
Rel_Specialization_Up(inMemoryItem, dataObject, "")
Rel_Realization_Up(inMemoryItem, ActivePartWebPage, "")
Rel_Specialization_Right(inMemoryItem,internetBrowser, "")
Rel_Serving_Up(internetBrowser, webpageBehaviour, "")
Rel_Serving_Up(internetBrowserPlugin, webpageBehaviour, "")
Rel_Aggregation_Right(internetBrowser, internetBrowserPlugin, "")
Rel_Access_Up(webServer, inMemoryItem, "")
Rel_Serving_Up(webServer, internetBrowser, "")
@enduml
```

<!-- Page 517 / 550 -->

//27.2.1 List possible sprites
------------------------------
You can list all possible sprites for Archimate using the following diagram:

```uml
@startuml
listsprite
@enduml
```

<!-- Page 518 / 550 -->

//27.3 Amazon Labs AWS Library [awslib]
--------------------------------
|  Type  |                              Link                              |
|--------|----------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/awslib |
| src    | https://github.com/awslabs/aws-icons-for-plantuml              |
| orig   | https://aws.amazon.com/en/architecture/icons/                  |

The Amazon Labs AWS library provides PlantUML sprites, macros, and other includes for Amazon Web
Services (AWS) services and resources.
Used to create PlantUML diagrams with AWS components. All elements are generated from the official
AWS Architecture Icons and when combined with PlantUML and the C4 model, are a great way to
communicate your design, deployment, and topology as code.

```uml
@startuml
!include <awslib/AWSCommon>
!include <awslib/InternetOfThings/IoTRule>
!include <awslib/Analytics/KinesisDataStreams>
!include <awslib/ApplicationIntegration/SimpleQueueService>
left to right direction
agent "Published Event" as event #fff
IoTRule(iotRule, "Action Error Rule", "error if Kinesis fails")
KinesisDataStreams(eventStream, "IoT Events", "2 shards")
SimpleQueueService(errorQueue, "Rule Error Queue", "failed Rule actions")
event --> iotRule : JSON message
iotRule --> eventStream : messages
iotRule --> errorQueue : Failed action message
@enduml
```

<!-- Page 519 / 550 -->

//27.4 Azure library [azure]
----------------------------
|  Type  |                              Link                             |
|--------|---------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/azure |
| src    | https://github.com/RicardoNiepel/Azure-PlantUML/              |
| orig   | Microsoft Azure                                               |

The Azure library consists of Microsoft Azure icons.
Use it by including the file that contains the sprite, eg: !include <azure/Analytics/AzureEventHub>.
When imported, you can use the sprite as normally you would, using <$sprite_name>.
You may also include the AzureCommon.puml file, eg: !include <azure/AzureCommon>, which contains
helper macros defined. With the AzureCommon.puml imported, you can use the NAME_OF_SPRITE(parameters...)
macro.

Example of usage:

```uml
@startuml
!include <azure/AzureCommon>
!include <azure/Analytics/AzureEventHub>
!include <azure/Analytics/AzureStreamAnalyticsJob>
!include <azure/Databases/AzureCosmosDb>
left to right direction
agent "Device Simulator" as devices #fff
AzureEventHub(fareDataEventHub, "Fare Data", "PK: Medallion HackLicense VendorId; 3 TUs")
AzureEventHub(tripDataEventHub, "Trip Data", "PK: Medallion HackLicense VendorId; 3 TUs")
AzureStreamAnalyticsJob(streamAnalytics, "Stream Processing", "6 SUs")
AzureCosmosDb(outputCosmosDb, "Output Database", "1,000 RUs")
devices --> fareDataEventHub
devices --> tripDataEventHub
fareDataEventHub --> streamAnalytics
tripDataEventHub --> streamAnalytics
streamAnalytics --> outputCosmosDb
@enduml
```

<!-- Page 520 / 550 -->

//27.5 C4 Library [C4]
--------------------------------
|  Type  |                            Link                            |
|--------|------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/C4 |
| src    | https://github.com/plantuml-stdlib/C4-PlantUML             |
| orig   | https://en.wikipedia.org/wiki/C4_modelhttps://c4model.com  |

```uml
@startuml
!include <C4/C4_Container>
Person(personAlias, "Label", "Optional Description")
Container(containerAlias, "Label", "Technology", "Optional Description")
System(systemAlias, "Label", "Optional Description")
System_Ext(extSystemAlias, "Label", "Optional Description")
Rel(personAlias, containerAlias, "Label", "Optional Technology")
Rel_U(systemAlias, extSystemAlias, "Label", "Optional Technology")
@enduml
```

//27.6 Cloud Insight [cloudinsight]
-----------------------------------
|  Type  |                                 Link                                 |
|--------|----------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/cloudinsight |
| src    | https://github.com/rabelenda/cicon-plantuml-sprites                  |
| orig   | Cloudinsight icons                                                   |

This repository contains PlantUML sprites generated from Cloudinsight icons, which can easily be used
in PlantUML diagrams for nice visual representation of popular technologies.

```uml
@startuml
!include <cloudinsight/tomcat>
!include <cloudinsight/kafka>
!include <cloudinsight/java>
!include <cloudinsight/cassandra>
title Cloudinsight sprites example
skinparam monochrome true
rectangle "<$tomcat>\nwebapp" as webapp
queue "<$kafka>" as kafka
rectangle "<$java>\ndaemon" as daemon
database "<$cassandra>" as cassandra
webapp -> kafka
kafka -> daemon
daemon --> cassandra
@enduml
```
<!-- Page 521 / 550 -->

//27.7 Cloudogu [cloudogu]
--------------------------------
|  Type  |                               Link                               |
|--------|------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/cloudogu |
| src    | https://github.com/cloudogu/plantuml-cloudogu-sprites            |
| orig   | https://cloudogu.com                                             |

The Cloudogu library provides PlantUML sprites, macros, and other includes for Cloudogu services and
resources.

```uml
@startuml
!include <cloudogu/common>
!include <cloudogu/dogus/jenkins>
!include <cloudogu/dogus/cloudogu>
!include <cloudogu/dogus/scm>
!include <cloudogu/dogus/smeagol>
!include <cloudogu/dogus/nexus>
!include <cloudogu/tools/k8s>
node "Cloudogu Ecosystem" <<$cloudogu>> {
DOGU_JENKINS(jenkins, Jenkins) #ffffff
DOGU_SCM(scm, SCM-Manager) #ffffff
DOGU_SMEAGOL(smeagol, Smeagol) #ffffff
DOGU_NEXUS(nexus,Nexus) #ffffff
}
TOOL_K8S(k8s, Kubernetes) #ffffff
actor developer
developer --> smeagol : "Edit Slides"
smeagol -> scm : Push
scm -> jenkins : Trigger
jenkins -> nexus : Deploy
jenkins --> k8s : Deploy
@enduml
```

<!-- Page 522 / 550 -->

All cloudogu sprites
See all possible cloudogu sprites on plantuml-cloudogu-sprites.

//27.8 Elastic library [elastic]
--------------------------------
|  Type  |                               Link                              |
|--------|-----------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/elastic |
| src    | https://github.com/Crashedmind/PlantUML-Elastic-icons           |
| orig   | Elastic                                                         |

The Elastic library consists of Elastic icons. It is similar in use to the AWS and Azure libraries (it used
the same tool to create them).

Use it by including the file that contains the sprite, eg: !include elastic/elastic_search/elastic_search>.
When imported, you can use the sprite as normally you would, using <$sprite_name>.
You may also include the common.puml file, eg: !include <elastic/common>, which contains helper
macros defined. With the common.puml imported, you can use the NAME//OF//SPRITE(parameters...)
macro.

Example of usage:

```uml
@startuml
!include <elastic/common>
!include <elastic/elasticsearch/elasticsearch>
!include <elastic/logstash/logstash>
!include <elastic/kibana/kibana>
ELASTICSEARCH(ElasticSearch, "Search and Analyze",database)
LOGSTASH(Logstash, "Parse and Transform",node)
KIBANA(Kibana, "Visualize",agent)
Logstash -right-> ElasticSearch: Transformed Data
ElasticSearch -right-> Kibana: Data to View
@enduml
```
<!-- Page 523 / 550 -->


All Elastic Sprite Set

```uml
@startuml
'Adapted from https://github.com/Crashedmind/PlantUML-Elastic-icons/blob/master/All.puml
'Elastic stuff here
'================================
!include <elastic/common>
!include <elastic/apm/apm>
!include <elastic/app_search/app_search>
!include <elastic/beats/beats>
!include <elastic/cloud/cloud>
!include <elastic/cloud_in_kubernetes/cloud_in_kubernetes>
!include <elastic/code_search/code_search>
!include <elastic/ece/ece>
!include <elastic/eck/eck>
' Beware of the difference between Crashedmind and plantuml-stdlib version: with '_' usage!
!include <elastic/elasticsearch/elasticsearch>
!include <elastic/endpoint/endpoint>
!include <elastic/enterprise_search/enterprise_search>
!include <elastic/kibana/kibana>
!include <elastic/logging/logging>
!include <elastic/logstash/logstash>
!include <elastic/maps/maps>
!include <elastic/metrics/metrics>
!include <elastic/siem/siem>
!include <elastic/site_search/site_search>
!include <elastic/stack/stack>
!include <elastic/uptime/uptime>
skinparam agentBackgroundColor White
APM(apm)
APP_SEARCH(app_search)
BEATS(beats)
CLOUD(cloud)
CLOUD_IN_KUBERNETES(cloud_in_kubernetes)
CODE_SEARCH(code_search)
ECE(ece)
ECK(eck)
ELASTICSEARCH(elastic_search)
ENDPOINT(endpoint)
ENTERPRISE_SEARCH(enterprise_search)
KIBANA(kibana)
LOGGING(logging)
LOGSTASH(logstash)
MAPS(maps)
METRICS(metrics)
SIEM(siem)
SITE_SEARCH(site_search)
STACK(stack)
UPTIME(uptime)
@enduml
```

<!-- Page 524 / 550 -->

//27.9 Google Material Icons [material]
---------------------------------------
|  Type  |                               Link                               |
|--------|------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/material |
| src    | https://github.com/Templarian/MaterialDesign                     |
| orig   | Material Design Icons                                            |

This library consists of a free Material style icons from Google and other artists.
Use it by including the file that contains the sprite, eg: !include <material/ma_folder_move>. When
imported, you can use the sprite as normally you would, using <$ma_sprite_name>. Notice that this
<!-- Page 525 / 550 -->

library requires an ma_ prefix on sprites names, this is to avoid clash of names if multiple sprites have
the same name on different libraries.

You may also include the common.puml file, eg: !include <material/common>, which contains helper
macros defined. With the common.puml imported, you can use the MA_NAME_OF_SPRITE(parameters...)
macro, note again the use of the prefix MA_.

Example of usage:

```uml
@startuml
!include <material/common>
' To import the sprite file you DON'T need to place a prefix!
!include <material/folder_move>
MA_FOLDER_MOVE(Red, 1, dir, rectangle, "A label")
@enduml
```

Notes:
When mixing sprites macros with other elements you may get a syntax error if, for example, trying to
add a rectangle along with classes. In those cases, add { and } after the macro to create the empty
rectangle.

Example of usage:

```uml
@startuml
!include <material/common>
' To import the sprite file you DON'T need to place a prefix!
!include <material/folder_move>
MA_FOLDER_MOVE(Red, 1, dir, rectangle, "A label") {
}
class foo {
bar
}
@enduml
```

//27.10 Kubernetes [kubernetes]
-------------------------------

|  Type  |                                Link                                |
|--------|--------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/kubernetes |
| src    | https://github.com/michiel/plantuml-kubernetes-sprites             |
| orig   | Kubernetes                                                         |


```uml
@startuml
!include <kubernetes/k8s-sprites-unlabeled-25pct>
package "Infrastructure" {
component "<$master>\nmaster" as master
component "<$etcd>\netcd" as etcd
component "<$node>\nnode" as node
}
@enduml
```
<!-- Page 526 / 550 -->


//27.11 Logos [logos]
---------------------

|  Type  |                              Link                              |
|--------|----------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/logos  |
| src    | https://github.com/plantuml-stdlib/gilbarbara-plantuml-sprites |
| orig   | Gil Barbara’s logos                                            |

This repository contains PlantUML sprites generated from Gil Barbara’s logos, which can easily be used
in PlantUML diagrams for nice visual aid.

```uml
@startuml
!include <logos/flask>
!include <logos/kafka>
!include <logos/kotlin>
!include <logos/cassandra>
title Gil Barbara's logos example
skinparam monochrome true
rectangle "<$flask>\nwebapp" as webapp
queue "<$kafka>" as kafka
rectangle "<$kotlin>\ndaemon" as daemon
database "<$cassandra>" as cassandra
webapp -> kafka
kafka -> daemon
daemon --> cassandra
@enduml
```

<!-- Page 527 / 550 -->


```uml
@startuml
scale 0.7
!include <logos/apple-pay>
!include <logos/dinersclub>
!include <logos/discover>
!include <logos/google-pay>
!include <logos/jcb>
!include <logos/maestro>
!include <logos/mastercard>
!include <logos/paypal>
!include <logos/unionpay>
!include <logos/visaelectron>
!include <logos/visa>
' ...
title Gil Barbara's logos example - **Payment Scheme**
actor customer
rectangle "<$apple-pay>" as ap
rectangle "<$dinersclub>" as dc
rectangle "<$discover>" as d
rectangle "<$google-pay>" as gp
rectangle "<$jcb>" as j
rectangle "<$maestro>" as ma
rectangle "<$mastercard>" as m
rectangle "<$paypal>" as p
rectangle "<$unionpay>" as up
rectangle "<$visa>" as v
rectangle "<$visaelectron>" as ve
rectangle "..." as etc
customer --> ap
customer ---> dc
customer --> d
customer ---> gp
customer --> j
customer ---> ma
customer --> m
customer ---> p
customer --> up
customer ---> v
customer --> ve
customer ---> etc
@enduml
```
<!-- Page 528 / 550 -->


//27.12 Office [office]
-----------------------

|  Type  |                              Link                              |
|--------|----------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/office |
| src    | https://github.com/Roemer/plantuml-office                      |
| orig   |                                                                |

There are sprites (*.puml) and colored png icons available. Be aware that the sprites are all only
monochrome even if they have a color in their name (due to automatically generating the files). You can
either color the sprites with the macro (see examples below) or directly use the fully colored pngs. See
the following examples on how to use the sprites, the pngs and the macros.

Example of usage:

```uml
@startuml
!include <tupadr3/common>
!include <office/Servers/database_server>
!include <office/Servers/application_server>
!include <office/Concepts/firewall_orange>
!include <office/Clouds/cloud_disaster_red>
title Office Icons Example
package "Sprites" {
OFF_DATABASE_SERVER(db,DB)
OFF_APPLICATION_SERVER(app,App-Server)
OFF_FIREWALL_ORANGE(fw,Firewall)
OFF_CLOUD_DISASTER_RED(cloud,Cloud)
db <-> app
app <--> fw
fw <.left.> cloud
}
@enduml
```

<!-- Page 529 / 550 -->


```uml
@startuml
!include <tupadr3/common>
!include <office/servers/database_server>
!include <office/servers/application_server>
!include <office/Concepts/firewall_orange>
!include <office/Clouds/cloud_disaster_red>
' Used to center the label under the images
skinparam defaultTextAlignment center
title Extended Office Icons Example
package "Use sprite directly" {
[Some <$cloud_disaster_red> object]
}
package "Different macro usages" {
OFF_CLOUD_DISASTER_RED(cloud1)
OFF_CLOUD_DISASTER_RED(cloud2,Default with text)
OFF_CLOUD_DISASTER_RED(cloud3,Other shape,Folder)
OFF_CLOUD_DISASTER_RED(cloud4,Even another shape,Database)
OFF_CLOUD_DISASTER_RED(cloud5,Colored,Rectangle, red)
OFF_CLOUD_DISASTER_RED(cloud6,Colored background) #red
}
@enduml
```

<!-- Page 530 / 550 -->

//27.13 Open Security Architecture (OSA) [osa]
----------------------------------------------

|  Type  |                                                                      Link                                                                     |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/osa                                                                                   |
| src    | https://github.com/Crashedmind/PlantUML-opensecurityarchitecture-iconshttps://github.com/Crashedmind/PlantUML-opensecurityarchitecture2-icons |
| orig   | https://www.opensecurityarchitecture.org                                                                                                      |


```uml
@startuml
'Adapted from https://github.com/Crashedmind/PlantUML-opensecurityarchitecture-icons/blob/master/all
scale .5
!include <osa/arrow/green/left/left>
!include <osa/arrow/yellow/right/right>
!include <osa/awareness/awareness>
!include <osa/contract/contract>
!include <osa/database/database>
!include <osa/desktop/desktop>
!include <osa/desktop/imac/imac>
!include <osa/device_music/device_music>
!include <osa/device_scanner/device_scanner>
!include <osa/device_usb/device_usb>
!include <osa/device_wireless_router/device_wireless_router>
!include <osa/disposal/disposal>
!include <osa/drive_optical/drive_optical>
!include <osa/firewall/firewall>
!include <osa/hub/hub>
!include <osa/ics/drive/drive>
!include <osa/ics/plc/plc>
!include <osa/ics/thermometer/thermometer>
!include <osa/id/card/card>
!include <osa/laptop/laptop>
!include <osa/lifecycle/lifecycle>
!include <osa/lightning/lightning>
!include <osa/media_flash/media_flash>
!include <osa/media_optical/media_optical>
!include <osa/media_tape/media_tape>
!include <osa/mobile/pda/pda>
!include <osa/padlock/padlock>
!include <osa/printer/printer>
!include <osa/site_branch/site_branch>
!include <osa/site_factory/site_factory>
!include <osa/vpn/vpn>
!include <osa/wireless/network/network>
rectangle "OSA" {
rectangle "Left:\n <$left>"
rectangle "Right:\n <$right>"
rectangle "Awareness:\n <$awareness>"
rectangle "Contract:\n <$contract>"
rectangle "Database:\n <$database>"
rectangle "Desktop:\n <$desktop>"
rectangle "Imac:\n <$imac>"
rectangle "Device_music:\n <$device_music>"
rectangle "Device_scanner:\n <$device_scanner>"
rectangle "Device_usb:\n <$device_usb>"
rectangle "Device_wireless_router:\n <$device_wireless_router>"
rectangle "Disposal:\n <$disposal>"
rectangle "Drive_optical:\n <$drive_optical>"
rectangle "Firewall:\n <$firewall>"
rectangle "Hub:\n <$hub>"
rectangle "Drive:\n <$drive>"
rectangle "Plc:\n <$plc>"
rectangle "Thermometer:\n <$thermometer>"
rectangle "Card:\n <$card>"
rectangle "Laptop:\n <$laptop>"
rectangle "Lifecycle:\n <$lifecycle>"
rectangle "Lightning:\n <$lightning>"
rectangle "Media_flash:\n <$media_flash>"
rectangle "Media_optical:\n <$media_optical>"
rectangle "Media_tape:\n <$media_tape>"
rectangle "Pda:\n <$pda>"
rectangle "Padlock:\n <$padlock>"
rectangle "Printer:\n <$printer>"
rectangle "Site_branch:\n <$site_branch>"
rectangle "Site_factory:\n <$site_factory>"
rectangle "Vpn:\n <$vpn>"
rectangle "Network:\n <$network>"
}
@enduml
```
<!-- Page 531 / 550 -->


<!-- Page 532 / 550 -->


```uml
@startuml
scale .5
!include <osa/user/audit/audit>
'beware of 'hat-sprite'
!include <osa/user/black/hat/hat-sprite>
!include <osa/user/blue/blue>
!include <osa/user/blue/security/specialist/specialist>
!include <osa/user/blue/sysadmin/sysadmin>
!include <osa/user/blue/tester/tester>
!include <osa/user/blue/tie/tie>
!include <osa/user/green/architect/architect>
!include <osa/user/green/business/manager/manager>
!include <osa/user/green/developer/developer>
!include <osa/user/green/green>
!include <osa/user/green/operations/operations>
!include <osa/user/green/project/manager/manager>
!include <osa/user/green/service/manager/manager>
!include <osa/user/green/warning/warning>
!include <osa/user/large/group/group>
!include <osa/users/blue/green/green>
!include <osa/user/white/hat/hat>
listsprites
@enduml
```

<!-- Page 533 / 550 -->

//27.14 Tupadr3 library [tupadr3]
---------------------------------

|  Type  |                               Link                              |
|--------|-----------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/tupadr3 |
| src    | https://github.com/tupadr3/plantuml-icon-font-sprites           |
| orig   | https://github.com/tupadr3/plantuml-icon-font-sprites#icon-sets |

This library contains several libraries of icons (including Devicons and Font Awesome).
Use it by including the file that contains the sprite, eg: !include <font-awesome/align_center>.
When imported, you can use the sprite as normally you would, using <$sprite_name>.
You may also include the common.puml file, eg: !include <font-awesome/common>, which contains
helper macros defined. With the common.puml imported, you can use the NAME_OF_SPRITE(parameters...)
macro.

Example of usage:

```uml
@startuml
!include <tupadr3/common>
!include <tupadr3/font-awesome/server>
!include <tupadr3/font-awesome/database>
title Styling example
FA_SERVER(web1,web1) #Green
FA_SERVER(web2,web2) #Yellow
FA_SERVER(web3,web3) #Blue
FA_SERVER(web4,web4) #YellowGreen
FA_DATABASE(db1,LIVE,database,white) #RoyalBlue
FA_DATABASE(db2,SPARE,database) #Red
db1 <--> db2
web1 <--> db1
web2 <--> db1
web3 <--> db1
web4 <--> db1
<!-- Page 534 / 550 -->

@enduml
```


```uml
@startuml
!include <tupadr3/common>
!include <tupadr3/devicons/mysql>
DEV_MYSQL(db1)
DEV_MYSQL(db2,label of db2)
DEV_MYSQL(db3,label of db3,database)
DEV_MYSQL(db4,label of db4,database,red) #DeepSkyBlue
@enduml
```

//27.15 AWS library [aws]
-------------------------

|  Type  |                             Link                            |
|--------|-------------------------------------------------------------|
| stdlib | https://github.com/plantuml/plantuml-stdlib/tree/master/aws |
| src    | https://github.com/milo-minderbinder/AWS-PlantUML           |
| orig   | https://aws.amazon.com/en/architecture/icons/               |

Warning: We are thinking about deprecating this library.
So you should probably use <awslib> instead (see above).
<!-- Page 535 / 550 -->

hr

The AWS library consists of Amazon AWS icons, it provides icons of two different sizes (normal and
large).

Use it by including the file that contains the sprite, eg: !include <aws/Storage/AmazonS3/AmazonS3>.
When imported, you can use the sprite as normally you would, using <$sprite_name>.
You may also include the common.puml file, eg: !include <aws/common>, which contains helper macros
defined. With the common.puml imported, you can use the NAME_OF_SPRITE(parameters...) macro.

Example of usage:

```uml
@startuml
!include <aws/common>
!include <aws/Storage/AmazonS3/AmazonS3>
AMAZONS3(s3_internal)
AMAZONS3(s3_partner,"Vendor's S3")
s3_internal <- s3_partner
@enduml
```

<!-- Page 536 / 550 -->
<!-- Contents -->
<!-- Page 550 / 550 -->
