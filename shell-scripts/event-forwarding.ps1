#!/usr/bin/env powershell

Write-Host "Show no events are in queue"
Get-Event

Write-Host "Start job (remoting event with forwarding)"
Start-Job -Name TestJobFW -ScriptBlock {
    Register-EngineEvent -SourceIdentifier This.Forward -Forward
    Start-Sleep -seconds 2
    New-Event -SourceIdentifier This.Forward -Message "Job forward"
} 

Write-Host "Wait for job to finish"
Get-Job | Wait-Job

Write-Host "Start job (remoting event without forwarding)"
Start-Job -Name TestJobNF -ScriptBlock {
    Register-EngineEvent -SourceIdentifier This.Nothing
    Start-Sleep -seconds 2
    New-Event -SourceIdentifier This.Nothing -Message "Job nothing"
} 

Write-Host "Wait for job to finish (This.Nothing will be lost)"
Get-Job | Wait-Job

Write-Host "Show the new event waiting in queue from background job"
Get-Event