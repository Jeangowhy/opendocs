#!/usr/bin/env powershell
# https://learn.microsoft.com/en-us/dotnet/api/system.management.automation.job
# https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/start-job
# https://learn.microsoft.com/en-us/powershell/scripting/dev-cross-plat/performance/parallel-execution
# https://learn-powershell.net/2012/05/13/using-background-runspaces-instead-of-psjobs-for-better-performance/

# PowerShell provides several options for the creation of parallel invocations.
# 1. Start-Job runs each job in a separate process, each with a new instance of PowerShell.
# 2. Start-ThreadJob runs each job via PowerShell runspaces. 
# 3. Use the System.Management.Automation.Runspaces namespace.
# 4. Workflows are a feature of Windows PowerShell 5.1. Deprecated in PowerShell 7.0 and higher.
# 5. ForEach-Object -Parallel is a feature of PowerShell 7.0 and higher. Like Start-ThreadJob.

# PowerShell 多线程的使用大概是两大方式：一是创建多个后台 job，二是使用 runspace 并发运行空间。后台 job 使用一套管理命令来完成并发任务的处理，缺点是性能不高，创建和退出大量 job 的过程中会消耗大量时间和资源。PowerShell 新版本的多线程的使用 runspace pool，指定在这个资源池里面最多可以同时执行限定数量的 runspace 并发任务。比起第一种方式，runspace 的性能强悍了太多。有人做的对比实验，可以看见几乎是几十倍的性能差距。

$RAND = New-Object System.Random

Start-Job -Name TestJob -ScriptBlock {
    Register-EngineEvent -SourceIdentifier This.Nothing -Forward
    Start-Sleep -seconds 1
    New-Event -SourceIdentifier This.Nothing -Message "Job ended"
}

Write-Host "Wait a job named TestJob until it completed."
$results = Get-Job -Name TestJob | Wait-Job | Receive-Job 
$results
Get-Job | Remove-Job

# Example: Pass input data by a InputObject to a background job
# 注意，$input（用于 -InputObject 管道输入）或者 $args 本身是自动变量，如果脚本块内使用 param($input) 这样的设置会导致冲突。以上脚本中同时使用了管道与参数列表向 Job 脚本块传递数据，但是它们的处理逻辑完全不同。

# Start-Job
#    [[-InitializationScript] <ScriptBlock>]
#    [-InputObject <PSObject>]
#    [-ArgumentList <Object[]>]

# In PowerShell 7
# ForEach-Object -Parallel {...} -ThrottleLimit 5

1..5 | ForEach-Object {
    $sec = $RAND.NextDouble() * 2;
    $inputObj = @{ sid=$_; sec=$sec }
    Start-Job -ScriptBlock { 
        param($params)
        # The Code is run in a new thread
        # $sec = $RAND.NextDouble(); THIS IS WRONG WAY
        $sec = $params.sec
        $sid = $params.sid
        # ("Inside Job: ", $input, $params) | Write-Host
        Start-Sleep -seconds $sec
        Write-Output "Hello ${sid} [sleep ${sec}]"
    } -InputObject $inputObj -ArgumentList $inputObj
}

Write-Host "Wait for any jobs to complete."
Get-Job | Wait-Job -Any
$cjobs = Get-Job -State Completed
$result = $cjobs | Receive-Job
$result
$cjobs |  Remove-Job

Write-Host "Wait for all jobs to complete."
Get-Job | Wait-Job
$result = Get-Job | Receive-Job
$result 
Get-Job | Remove-Job


Write-Host "Use jobs to do host ping test"
# [System.Net.Dns]::GetHostByAddress("113.75.104.75")
# [System.Net.Dns]::GetHostEntry("www.baidu.com")
# Test-Connection -ComputerName "192.168.0.1" -Count 1
# Test-Connection -ComputerName "192.168.0.1" -Count 1 -AsJob ABC
# Test-Connection -ComputerName "113.75.104.75" -Count 1 -ErrorAction SilentlyContinue -ErrorVariable err

$maxjobs = 10
1..$maxjobs| ForEach-Object {
    Test-Connection -ComputerName "192.168.0.10$_" -Count 1 -AsJob "ping_$_"
} | Out-Null
Get-Job|Wait-Job | Out-Null
$results = Get-Job | Receive-Job -Wait -AutoRemoveJob | Out-Null
$results | ForEach-Object {
    if ($_) {
        $status = "✅ 可达 (延迟: $($_.ResponseTime)ms)"
    } else {
        $status = "❌ 不可达"
    }
    Write-Host "$($_.Address) - $status"
}
Get-Job | Remove-Job -Force


# $complete = New-Object System.Collections.ArrayList
# while ($complete.Count -le $maxjobs -and (Get-Job).Count) {
#     $results = Get-Job -State Completed | Receive-Job
#     $results 
#     $results | ForEach-Object { $complete.add($_); Write-Host "A: $_"}

#     # $jobs | Remove-Job
#     # using carriage return
#     Write-Host -NoNewline "`rJobs $($complete.Count)/$maxjobs   $((Get-Job).Count)"
#     Wait-Job -Name pinh_* -Any 
#     Start-sleep 1
# }
# Write-Host
# Write-Host "Results: $($complete.ToArray())"
