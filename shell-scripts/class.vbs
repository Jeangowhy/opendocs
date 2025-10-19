''#!/usr/bin/env cscript
' How to make sha-bang support two more character?
' How to make Visual Basic use # as comment symbol?
' Both questions are big.

class SayHi

    Private name
    Public Property Get UserName ()
        UserName = Me.name
    End Property
    Public Property Let UserName(strName)
        Me.name = strName
    End Property

    ' VBScript does not have "Sub New".
    Private Sub Class_Initialize
        WScript.Echo "Class_Initialize"
    End Sub
    
    Private Sub Class_Terminate
        WScript.Echo "Class_Terminate"
    End Sub

End class

WScript.Echo "Hello VBScript! " & WScript.Version
Set obj = new SayHi

' ⚡ Key Differences: VBScript vs. Visual Basic (VB6/VBA)
' Feature                VBScript (VBS)                          Visual Basic (VB6/VBA)
' Object Initialization  Class_Initialize (no parameters)        Sub New() or Class_Initialize
' Constructors           ❌ No parameterized constructors         ✅ Supports Sub New(Params)
' Destructors            Class_Terminate                         Class_Terminate
' Class Inheritance      ❌ No inheritance                        ❌ No true inheritance (uses interfaces)
' Error Handling         On Error Resume Next only               On Error GoTo, Resume, Resume Next
' Typing                 All variables are Variant               Strong typing (Integer, String, etc.)
' UI Development         ❌ No forms/controls (web/script only)   ✅ Drag-and-drop form designer
' Compilation            ❌ Interpreted (script)                  ✅ Compiled to P-code/EXE
' Use Cases              Web scripts (ASP), system automation    Desktop applications, Office macros

' Deprecation Note: VBScript is obsolete (no support after IE11). 
' Use VB.NET (supports Sub New(), full OOP) or 
' PowerShell for modern scripting.