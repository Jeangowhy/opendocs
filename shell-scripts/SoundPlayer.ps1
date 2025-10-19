#!/usr/bin/env powershell

using namespace System.Management.Automation

$wave = "$env:windir\Media\windows logon.wav"

$duration = 3 * (New-Object System.Random).NextDouble() + 1
[System.Math]::Round($duration, 0).ToString() + " seconds preset"

try {
    # Test if ffmpeg has installed
    ffmpeg >$null 2>&1
    $ffout = (ffmpeg -hide_banner -i  $wave 2>&1) -match "Duration: (\d\d:){2}\d\d"
    $duration = ($ffout -replace ".*(\d\d):(\d\d):(\d\d).*","`$1*3600+`$2*60+`$3") -join ""
    $duration = Invoke-Expression $duration
} catch [CommandNotFoundException] {
    Write-Output "FFMPEG Not found."
}

$player = New-Object System.Media.SoundPlayer $wave -Verbose
$player.PlayLooping() # Play and looping
# Start-Sleep $duration
Write-Output "Sleep in $duration seconds before stop play"
Start-Sleep $duration

$player.Stop() # Methode ==> Stop