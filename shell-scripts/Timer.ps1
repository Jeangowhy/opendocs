#!/usr/bin/env powershell

$timer = New-Object System.Timers.Timer
$timer | Get-Member -Type Event

$timer.Interval  = 1000
$timer.Autoreset = $true
$timer.Enabled   = $true  # Equals to $timer.Start()

# Doesn't works!
# $block = { Write-Host "Timer.Elapsed: $Event.SourceEventArgs.SignalTime" }
# $timer.add_Elapsed($block)
# $timer.remove_Elapsed($block)

# Get-Event -SourceIdentifier Timer.Elapsed
# Get-Event : 源标识符为“Timer.Elapsed”的事件不存在。只能 Pooling 由 New-Event 创建的事件。

$count =0
Register-ObjectEvent $timer -EventName Elapsed -SourceIdentifier Timer.Elapsed -Action {
    # $event = [System.Management.Automation.PSEventArgs] $Event
    $count += 1
    if ($count % 3 -eq 0) {
        [Console]::Beep(1300, 200)
    } else {
        [Console]::Beep(300, 100)
    }
    Write-Host -NoNewline ("Event from {0} occurred! " -f $Event.Sender)
    Write-Host ("==> ElapsedEventArgs.SignalTime: {0} " -f $Event.SourceEventArgs.SignalTime)
} | Out-Null

# Works unexpectedly
Wait-Event -Timeout 3 -SourceIdentifier Timer.Elapsed

# Get-EventSubscriber | Unregister-Event
Get-EventSubscriber -SourceIdentifier Timer.Elapsed | Unregister-Event

