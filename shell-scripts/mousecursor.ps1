#!/usr/bin/env powershell
# https://learn.microsoft.com/zh-cn/dotnet/api/system.windows.forms.sendkeys

using namespace System.Drawing
using namespace System.Windows.Forms

Add-Type -AssemblyName System.Windows.Forms

function Move-MouseSmoothly {
    param (
        [int]$TargetX,
        [int]$TargetY,
        [int]$Steps = 0x0f
    )
    $CurrentPosition = [Cursor]::Position
    for ($i = 1; $i -le $Steps; $i++) {
        $X = $CurrentPosition.X + (($TargetX - $CurrentPosition.X) * $i / $Steps)
        $Y = $CurrentPosition.Y + (($TargetY - $CurrentPosition.Y) * $i / $Steps)
        [Cursor]::Position = New-Object Point([math]::Round($X), [math]::Round($Y))
        Start-Sleep -Milliseconds 10
    }
    [System.Windows.Forms.SendKeys]::SendWait("{CAPSLOCK}")
}
Move-MouseSmoothly -TargetX 600 -TargetY 400
