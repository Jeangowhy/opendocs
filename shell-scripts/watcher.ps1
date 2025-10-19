#!/usr/bin/env powershell
#!/usr/bin/env pwsh

$script = $PSCommandPath.Split("(/|\)")[-1]
$watcher = New-Object System.IO.FileSystemWatcher
$watcher | Get-Member -Type Event
$watcher.Path = $PSScriptRoot
$watcher.Filter = $script
$watcher | Get-Member -MemberType Event | ForEach-Object {
    Write-Host "Register Object Event:  $($_.name)"
    Register-ObjectEvent $watcher -EventName $_.Name -Action { 
        try {
            $fse = [System.IO.FileSystemEventArgs] $Event.SourceEventArgs[0]
        }
        catch {
            Write-Host $_
        }
        Write-Host @"

FileSystemWatcher: $($Event)
$("=".PadLeft("FileSystemWatcher: $($Event)".Length, "="))
░ ComputerName     :$($Event.ComputerName)
░ EventIdentifier  :$($Event.EventIdentifier)
░ MessageData      :$($Event.MessageData)
░ RunspaceId       :$($Event.RunspaceId)
░ Sender           :$($Event.Sender)
░ SourceArgs       :$($Event.SourceArgs)
░ SourceEventArgs  :$($Event.SourceEventArgs)
░ SourceIdentifier :$($Event.SourceIdentifier)
░ TimeGenerated    :$($Event.TimeGenerated)
▒ ChangeType       :$($fse.ChangeType)
▒ FullPath         :$($fse.FullPath)
▒ Name             :$($fse.Name)
"@ }
} | Out-Null

Write-Host "Do something with $PSScriptRoot\$($watcher.Filter) to riase some events."
New-Item -ErrorAction SilentlyContinue "$PSScriptRoot\$($watcher.Filter)"
Wait-Event -Timeout 15 # Works unexpected.

Get-EventSubscriber | Unregister-Event
