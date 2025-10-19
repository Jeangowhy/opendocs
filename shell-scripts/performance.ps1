#!/usr/bin/env powershell

$sw = New-Object System.Diagnostics.Stopwatch
$sw.Start()
Write-Host "I/O and Pipeline always has the lowest performance"
Write-Host Stopwatch Elapsed: $sw.Elapsed

Write-Host "Make sequence data (1..10): " (1..10)
Write-Host Stopwatch Elapsed: $sw.Elapsed

Write-Output 'Case 1A: {1..100000 | Write-Output}'
Write-Output 'Case 1B: {$list = 1..100000}'

Measure-Command {1..100000 | Write-Output} | Select-Object -Property TotalSeconds
Measure-Command {$list = 1..100000} | Select-Object -Property TotalSeconds
Write-Host Stopwatch Elapsed: $sw.Elapsed

Write-Output 'Case 2A: {1..100000 | Get-Random}'
Write-Output 'Case 2B: {Get-Random -InputObject (1..100000)}'

Measure-Command {1..100000 | Get-Random} | Select-Object -Property TotalSeconds
Measure-Command {Get-Random -InputObject (1..100000)} | Select-Object -Property TotalSeconds
Write-Host Stopwatch Elapsed: $sw.Elapsed

Write-Host "Shell command always has lower performance than .Net compiled API."

Write-Output 'Case 3A: {Get-Content $PSCommandPath}'
Write-Output 'Case 3B: {[IO.File]::ReadAllLines($PSCommandPath)}'

Measure-Command {Get-Content -ReadCount 0 $PSCommandPath} | Select-Object -Property TotalSeconds
Measure-Command {[IO.File]::ReadAllLines($PSCommandPath)} | Select-Object -Property TotalSeconds
Write-Host Stopwatch Elapsed: $sw.Elapsed
