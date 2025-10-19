#!/usr/bin/env powershell

$Source = @"
using System;
using System.Windows.Forms;
using System.Drawing;

public class MyForm : Form
{
    public MyForm(string title)
    {
        this.Text = title;
    }
    public static int Add(int a, int b)
    {
        Console.WriteLine("Added");
        return (a + b);
    }
    public int Multiply(int a, int b)
    {
        return (a * b);
    }
}
"@

Add-Type -TypeDefinition $Source -ReferencedAssemblies @(
    "System.Windows.Forms";
    "System.Drawing")

Write-Host "Invokes static method: [MyForm]::Add(4, 3)"
[MyForm]::Add(4, 3)

# $myObject = New-Object MyForm
$myObject = [MyForm]::new("test")

Write-Host "Invokes member method: $myObject.Multiply(5, 2)"
$myObject.Multiply(5, 2)
$myObject.ShowDialog()