#!/usr/bin/env powershell

using namespace System.Windows.Forms
using namespace System.Drawing

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

class MyForm : System.Windows.Forms.Form {
    MyForm($mystuff) {
        $this.amethod
        $this.Add_Load( $this.MyForm_Load )
    }

    $MyForm_Load = {
        $mlabel = [System.Windows.Forms.Label]::new()
        $mlabel.Name = "trolol"
        $mlabel.Text = "hello, world!"

        $mbutton = [System.Windows.Forms.Button]::new()
        $mbutton.Text = "click me"
        $mbutton.Location = [System.Drawing.Point]::new(100,100)
        $mbutton.Add_Click( $this.mbutton_click )

        $this.Controls.Add($mlabel)
        $this.Controls.Add($mbutton)
    }

    [void]amethod(){ Write-Host "a method called." }

    $mbutton_click = [System.EventHandler] {
        # The $this refers $mbutton, but not the form!
        $this.Parent.amethod()
        $this.Parent.Controls["trolol"].Text = "goodbye, world."
    }
}

$foo = [MyForm]::new("test")
$foo.ShowDialog()

