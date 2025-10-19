#!/usr/bin/env powershell

# PowerShell Workflow 是一种可以在分布式环境中并行执行的命令流程。通过使用 Parallel 和
# Sequence 关键字，循环可以轻松地创建并行执行的工作流，从而实现多线程操作。其中 foreach
# -parallel 参数只能在工作流内部使用。以下执行 10 次（1..10）sleep 一秒的操作，看看并行
# 的运行方式下需要多少时间？

Get-Content -ReadCount 0 -Encoding utf8  $PSCommandPath | Write-Output

workflow Resolve-Items {
    param([string[]]$Items)

    foreach -parallel ($item in $Items) {
        Write-Output "Processing item: $item"
        Start-Sleep -Seconds 1
    }
}

$sw = New-Object System.Diagnostics.Stopwatch
$sw.Start()
$items = 1..10
Resolve-Items -Items $items
Write-Output ("Stopwatch Elapsed: {0}" -f  $sw.Elapsed.ToString())
