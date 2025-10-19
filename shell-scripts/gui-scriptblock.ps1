#!/usr/bin/env powershell

using assembly System.Windows.Forms
using namespace System.Windows.Forms

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form = [Form] @{
    Text = 'My First Form'
}

$button = [Button] @{
    Text = 'Push Me!'
    Dock = 'Fill'
}

$button.add_Click{
    $form.Close()
}

$button.add_Click([EventHandler]{
    Start-Sleep 1
    $form.Close()
})

$form.Controls.Add($button)
$form.ShowDialog()