#!/usr/bin/env powershell

# System.Threading.Tasks.Parallel 给 PowerShell 提供了多种并行操作以提高处理速度。
# Parallel.For and Parallel.ForEach 方法可以让循环中的迭代操作在多个线程中并行执行。
# Windows PowerShell 5.1 无法直接使用 Task Parallel Library (TPL) Data Parallelism。
# PowerShell 7.0 直接支持 ForEach-Object -Parallel。
# 文档： Advanced .NET programming documentation - Task Parallel Library (TPL)
# https://learn.microsoft.com/en-us/dotnet/standard/parallel-programming/data-parallelism-task-parallel-library
# https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.parallel

Get-Content -ReadCount 0 -Encoding utf8  $PSCommandPath | Write-Output

if ($host.Version.Major -ge 7){
    [System.Threading.Tasks.Parallel]::For(1, 10, {
        Write-Output "Processing item: $_"
        Start-Sleep -Seconds 1
    })

    $items = 1..10
    [System.Threading.Tasks.Parallel]::ForEach($items, {
        Write-Output "Processing item: $_"
        Start-Sleep -Seconds 1
    })
}