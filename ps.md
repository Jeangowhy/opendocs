# TS m3u8 视频流切片文件下载

deno run --unstable -A C:\coding\md-code\deno\demos\src\douyin\douyin.ts m3u8 index.m3u8

使用脚本获取网页清单文件内容：

```js
var server = /.{4,5}:\/\/[^\/]+/.exec(videoUrl)[0];
var resource = null;
function get(url){
    return fetch(url).then((res)=>{
        return res.text();
    }).then((res)=>{
        //console.log(res,{ content: res.body});
        var list = [];
        var lines = res.split("\n");
        resource = res;
        for(var idx in lines){
            var it = lines[idx];
            if(!it.trim() || it.startsWith("#")) continue;
            //console.log({it, server, len:lines.length});
            list.push((it.startsWith("http")? "":server)+it);
        }
        return list;
    });
}
get(videoUrl).then(res=>{
    console.log(`
["no/inden.m3u8",
"${document.title}", 
"${litImgUrl}", 
"${res[0]}",
"${location.href}"],`);
    get(res[0]).then(res => {
        res.forEach((it,k) => {res[k] = 
            `"${it.split("/").pop()}"`});
        console.log(res.join(","));
    });
});
```

文件下载完成率统计：

```sh
$ds = dir vjs/* -Directory;
foreach($d in $ds){
    $dn = $d.Name;
    $lo = (dir "$d\*.ts").Length;
    if((dir "$d\*.ts") -is [System.IO.FileSystemInfo]){
        $lo = 1;
    }
    if(Test-Path "$d\index.m3u8"){
        $ro = ((Get-Content "$d\index.m3u8") -match ".ts$").Length;
        if($lo -eq 0){
            $p = 0;
        }else{
            $p = $lo/$ro;
        }
        "{0,8} download percent {1,12} {2:0.00%}" -f $dn,"[$lo/$ro]", $p;
    }else{
        #echo "Directory $dn has no index.m3u8 list file.";
    }
}
# .\doreports.ps1 | sort { [Double]::Parse((($_ -split " +")[5] -replace "%",""))}
# .\doreports.ps1 > .\report.txt
# $sorted = Get-Content report.txt | sort { [Double]::Parse((($_ -split " +")[5] -replace "%",""))}
# Out-File "report.txt" -InputObject $sorted
# $sorted
```


对文件大小进行二次确认下载：

```sh
param(
    [string]$Target="vjs\*\index.m3u8"
    )
echo "Target = $Target"

dir $target | 
% {
    echo $_.DirectoryName;
    cd $_.DirectoryName;
    $m3u = Get-Content index.m3u8;
    $items = $m3u -match "\.ts$";

    $iCOUNT = $items.Length;
    echo "Items count: $iCOUNT";
    $url = $m3u[0].SubString(1) -replace "\w+\.m3u8?", "";
    $count = 1000;
    $nextfix = 0;
    if(Test-Path "all.verify"){ 
        echo "All Verified [$iCOUNT] $vt";
        return;
    }

    foreach($it in $items){
        $count ++;
        $verify = "$count.ts.verify";
        if(Test-Path "$verify"){ 
            echo "Varified $count.ts <== $it";
            continue;
        }
        if(Test-Path "$count.ts"){
            $len = (dir "$count.ts").Length;
            $size = (curl -Method Head "$url$it").Headers["Content-Length"];

            $next = $count + 1;
            $nextlen = (dir "$next.ts").Length;
            if ($nextlen -eq $size) {
                echo "🗨Next file size fit with $next.ts <== $it $size";
                $nextfix ++
            }else {
                $nextfix = 0;
            }

            if($nextlen -eq $size -and $nextfix -ge 3){
                echo "⚡Next file size fit with: $next.ts <== $it $size";
                if(Test-Path "$count.ts.bak") { 
                    rm "$count.ts";
                }else{
                    ren "$count.ts" "$count.ts.bak";
                }
                cp "$next.ts" "$count.ts";
                Out-File "$verify" -InputObject "$it $size";
                continue;
            }

            if($len -eq $size){
                echo "$count.ts $len 👈✔👉 $size $url$it";
                Out-File "$verify" -InputObject "$it $len";
            }else{
                echo "$count.ts $len 👈❌👉 $size $url$it";
                if(Test-Path "$count.ts.bak") { 
                    rm "$count.ts";
                }else{
                    ren "$count.ts" "$count.ts.bak";
                }
                curl -O "$count.ts" "$url$it";
                $newsize = (dir "$count.ts").Length;
                echo "$count.ts $len 👈<== $newsize $url$it";
                if($size -eq $newsize){
                    Out-File "$verify" -InputObject "$it $newsize";
                }
            }
        }
    }

    $v = (dir *.ts.verify).Length;
    if($v -eq $items.Length){
        echo "All Verified [$iCOUNT] $vt";
        Out-File "all.verify" -InputObject $items;
        rm *.ts.verify, *.bak;
    }
}
```

Powershell Download file script：

```sh
function DownloadTS(){
    if(!(Test-Path index.m3u8)){
        return 
    }

    $m3u = Get-Content index.m3u8
    $url = $m3u[0].SubString(1)
    $server = ($url -Split "(/)")[0..4] -join ""
    $path = ($url -Split "(/)")[5..12] -join ""
    $items = ($m3u.Replace("$$path/","") -split "`n") -match '.ts$'

    if(!(Test-Path inden.m3u8)){
        $count = 1000
        $m3u | % {
            if($_ -match '.ts$'){
                $count++
                echo "$count.ts" >> inden.m3u8
            }else{
                echo $_ >> inden.m3u8
            }
        }
    }

    # $items = @("z2CoViuX.ts", "18Hk225w.ts")
    $count = 1000
    foreach($it in $items){
        $count ++
        #$web.DownloadFile("$server$path/$it", "$count.ts")
        if(!(Test-Path "$count.ts")){ echo "$count.ts <= $server$path/$it"; curl -O "$count.ts" "$server$path/$it" }
        # break;
    }
}

function DownloadM3u8(){
    param($url)
    echo "Download m3u8 $url"
    # $agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
    if(!(Test-Path index.m3u8)){
        $web = new-object System.Net.WebClient
        # $web.Headers["user-agent"] = $agent
        # $web.Headers["referer"] = "https://www.rtmm6.com/"
        $m3u = $web.DownloadString("$url")
        # $m3u = (curl "$url").RawContent

        $server = ($url -Split "(/)")[0..4] -join ""
        $path = ($url -Split "(/)")[5..12] -join ""
        $items = ($m3u.Replace("$$path/","") -split "`n") -match '.ts$'
        
        $keytag = "#EXT-X-KEY:METHOD=AES-128,URI="
        if($m3u -match $keytag){
            $keyuri = ($m3u.split("`n") -match $keytag).Replace($keytag, "")
            $keyuri = $keyuri.SubString(1, $keyuri.Length-2)
            $keyfile = $keyuri.Split("/")[-1]
            if(!(Test-Path "$keyfile")){ echo "$keyfile <= $server$keyuri"; curl -O "$keyfile" "$server$keyuri" }
        }
        echo "#$url" > index.m3u8
        echo (($m3u -split "(#EXTM3U)")[1..2] -join "").Replace("$path/", "") >> index.m3u8
    }

    DownloadTS
}

echo "ARGS(URL, Limit): $args"
try{
    $limit = 0
    echo "Try type-casting args[0] or args[1] to be a number:"
    echo $args
    if($limit -eq 0 -and $args.Length -eq 1){
        $limit = [int]$args[0]
    }
    if(($limit -eq 0) -and ($args.Length -gt 1)){
        $limit = [int]$args[1]
    }
    DownloadTS
}catch{
    echo "It is Not a Number"
    if($args) {
        DownloadM3u8($args)
    }else{
        DownloadTS
    }
}
```



# 🚩 PowerShell 脚本编程语言
- https://docs.microsoft.com/zh-cn/powershell/
- https://docs.microsoft.com/en-us/powershell/
- https://github.com/PowerShell/PowerShell

克隆 PowerShell 源代码及文档：

    git clone git@github.com:PowerShell/PowerShell
    git clone git@github.com:MicrosoftDocs/PowerShell-Docs

PowerShell 是跨平台的，带有面向对象的管道，能够调用 .NET 的脚本编程环境即 .NET CLI 接口交互，所以不要将 PowerShell 当作命令控制台。

PowerShell 是一种跨平台的任务自动化和配置管理框架，由命令行管理程序和脚本语言组成。 与大多数接受并返回文本的 shell 不同，PowerShell 构建在 .NET 公共语言运行时 (CLR) 的基础之上，接受并返回 .NET 对象。 这一根本上的改变引入了全新的自动化工具和方法。

Unlike most shells, which accept and return text, Windows PowerShell is built on top of the .NET Framework common language runtime (CLR) and the .NET Framework, and accepts and returns .NET Framework objects.

PowerShell 和 CMD 最大的不同，并且也是和其它 Unix Shell 最大的不同在于其 pipe 传递的是 .Net 对象而不是原始字符串。

于是这就打开了一扇神奇的大门，一切组件都可以和谐地共存，数据全流通。共享一个 CLR，拥有丰富的 metadata，自由自在地在 .net 的世界里徜徉和探索。

PowerShell Core 6.0 于 2016 年发布，当时微软公布了 PowerShell Core 并决定使该产品跨平台，免费和开源，独立于 Windows。 它于 2018 年1月10日实现了 Windows，macOS 和 Linux 的普遍可用性。

Windows 的 chocolatey 依赖包管理工具，相当于 Linux 的 apt-get，基于 PowerShell。

PowerShell 别名和旧命令的名称有冲突是个常见的问题，服务控制命令 SC.EXE 与 Set-Content 的别名 SC 冲突，但它优先于 SC.EXE 文件。

Windows 10 自带最新版本是 PowerShell 5.1，使用 Get-Host 命令或 $host.version 直接查看当前脚本宿主版本，使用 $args 接收脚本参数。

对于已经安装 .Net Core SDK 的用户可以直接使用命令安装最新版 PowerShell，或者下载安装包进行安装：

```sh
> Get-Host | Select-Object Version

Version      
-------       
5.1.18362.1171

> $host.Version

Major  Minor  Build  Revision
-----  -----  -----  --------
5      1      18362  1171 

> cd $Env:USERPROFILE\.dotnet\tools
> dotnet tool install --global PowerShell
# https://github.com/PowerShell/PowerShell/releases
```

通过环境变量 Providers 临时读写环境变量使用，比如读取 JAVA_HOME，或临时设置 PATH 环境变量，变量名不区分大小写：

```sh
$Env:JAVA_HOME
del env:windir
$Env:Path+=";C:\"
```

上述对于环境变量的操作只对当前命令窗口的副本有效，影响当前 powershell 会话。 要更新到系统设置，使用 .NET System.Environment 的静态方法读写：

```sh
[environment]::SetEnvironmentvariable("TestPath", ";c:\powershellscript", "User")
[environment]::GetEnvironmentvariable("TestPath", "User")
;c:\powershellscript
```

```C#
// https://github.com/dotnet/runtime 
// src\libraries\System.Private.CoreLib\src\System\Environment.cs
// https://github.com/dotnet/corefx 
// src\System.Private.CoreLib\shared\System\Environment.cs
public enum EnvironmentVariableTarget
{
    Process = 0,
    User = 1,
    Machine = 2,
}
public static void SetEnvironmentVariable(string variable, string? value, EnvironmentVariableTarget target);
public static string? GetEnvironmentVariable(string variable, EnvironmentVariableTarget target);
public static IDictionary GetEnvironmentVariables(EnvironmentVariableTarget target);
```

执行命令带有空格路径时，使用 & 号及引号进行调用，即 Invoke-Expression，参数要另传，因为它相当于将变量内容加双引后执行：

```sh
&'C:\Program Files (x86)\MSBuild\14.0\Bin\csc.exe'
```

使用面向对象编程思想，获取对象的成员，查询环境变量字符串对象的成员：

```sh
> $Env:Path | Get-Member

   TypeName:System.String

Name             MemberType            Definition
----             ----------            ----------
Clone            Method                System.Object Clone(), ...
CompareTo        Method                int CompareTo(System.Object value), ...
Contains         Method                bool Contains(string value...
CopyTo           Method                void CopyTo(int sourceIndex, char[] dest...
EndsWith         Method                bool EndsWith(string value), ...
Equals           Method                bool Equals(System.Object obj), ...
GetEnumerator    Method                System.CharEnumerator GetEnumerator(), ...
GetHashCode      Method                int GetHashCode() 
...
```

内容过滤：

    Get-content somefile.txt|findstr "someregexp"
    get-process | findstr 'powershell'

    Select-String "some_regexp" somefile.txt

利用 where 过滤

    cat .\readme.tp.md | where {$_ -match "###"}

使用 Get/Set-Location 或者 Pop-Location Push-Location 管理当前工作目录，简化命令别名 pwd/cd 和 popd/pushd：

```sh
> pushd
> Get-Location -Stack

Path
----
C:\vulkan\imgui
```



## ⚡ PowerShell ISE Keybord shortcut
- https://powershellmagazine.com/2013/01/29/the-complete-list-of-powershell-ise-3-0-keyboard-shortcuts/
- https://docs.microsoft.com/zh-cn/powershell/scripting/windows-powershell/ise/keyboard-shortcuts-for-the-windows-powershell-ise

```sh
$gps = $psISE.GetType().Assembly
$rm = New-Object System.Resources.ResourceManager GuiStrings,$gps
$rs = $rm.GetResourceSet((Get-Culture),$true,$true)
$rs | where Name -match 'Shortcut\d?$|^F\d+Keyboard' | Sort-Object Value | Format-Table -AutoSize
```

    Name                                            Value              
    ----                                            -----              
    EditorUndoShortcut2                             Alt+Backspace      
    EditorSelectNextSiblingShortcut                 Alt+Down           
    ExitShortcut                                    Alt+F4             
    EditorSelectEnclosingShortcut                   Alt+Left           
    EditorSelectFirstChildShortcut                  Alt+Right          
    EditorRedoShortcut2                             Alt+Shift+Backspace
    EditorBoxSelectLineDownShortcut                 Alt+Shift+Down     
    ToggleHorizontalAddOnPaneShortcut               Alt+Shift+H        
    EditorBoxSelectToPreviousCharacterShortcut      Alt+Shift+Left     
    EditorBoxSelectToNextCharacterShortcut          Alt+Shift+Right    
    EditorTransposeLineShortcut                     Alt+Shift+T        
    EditorBoxSelectLineUpShortcut                   Alt+Shift+Up       
    ToggleVerticalAddOnPaneShortcut                 Alt+Shift+V        
    EditorSelectPreviousSiblingShortcut             Alt+Up             
    ShowScriptPaneTopShortcut                       Ctrl+1             
    ShowScriptPaneRightShortcut                     Ctrl+2             
    ShowScriptPaneMaximizedShortcut                 Ctrl+3             
    EditorSelectAllShortcut                         Ctrl+A             
    ZoomIn1Shortcut                                 Ctrl+Add           
    EditorMoveCurrentLineToBottomShortcut           Ctrl+Alt+End       
    。。。       



## ⚡ Netstat 命令输出数据整理示范


有几个问题要注意：

- 有些进程需要权限获取状态，否则没有相应数据列；
- 有些进程名称无法获取服务名，因为没有具体服务；
- netstat 输出数据前四行是表头，后面是进程 IP 相关数据；
- 根据查询内容不同，可能会有一行、二行、三行组成的数据单元，第一行是协议、IP地址行；
- 后续两行可能是服务名称和进行名称，不一定会有相应的内容；


先上结果：

```sh
# Now is the time to figure it out.
# $Processes = Get-CimInstance -Class win32_process -Filter "name='notepad.exe'"
cls
chcp 65001

$a = netstat -bano;
$list = [System.Collections.ArrayList]@()
$row = -1
$a[4..$a.Count] | %{ 
    $parts = ($_ -split '\s+')
    if($parts.Length -eq 5) # No state column
    {
        $parts = @(
            $parts[0];
            $parts[1];
            $parts[2];
            $parts[3];
            "无权获取"
            $parts[4];
            )
    }
    if ($parts.Length -gt 2)
    {
        $row++;
        $record = [System.Collections.ArrayList]@("Parts: $($parts.Length)")
        $ret = $list.Add($record)
    }
    foreach ($part in $parts[1..$parts.Count])
    {
        if ($parts.Length -eq 2 -and $part -eq ""){ continue }
        if ($part.EndsWith("]") -and $list[$row].Count -lt 7){
            $ret = $list[$row].Add("NoSrvName")
        }
        $ret = $list[$row].Add($part)
    }
    # echo "Row $row Col: $($list[$row].Count) ==> [$($list[$row] -join ' ➡')]"
}

# Turn arraylist to table
$header = @(
    "Inden",
    "Proto",
    "Local",
    "Foreign",
    "State",
    "PID",
    "SrvName",
    "FileName")
$ht = [System.Collections.ArrayList]@()
foreach ($record in $list)
{
    $id = 0
    $item = @{}
    foreach ($field in $record)
    {
        $key = $header[$id]
        $id = $id+1
        # echo "==> key: [$key] id: [$id] field: [$field]"
        $item.Add($key, $field)
    }
    $count = $ht.Add([PSCustomObject]$item)
}
$ht | Select Proto,PID,SrvName,FileName,Local,Foreign,State | Format-Table 


Proto PID   SrvName          FileName              Local                   State      
----- ---   -------          --------              -----                   -----      
TCP   1408  RpcSs            [svchost.exe]         0.0.0.0:135             LISTENING  
TCP   4     无法获取所有权信息                       0.0.0.0:445             LISTENING  
TCP   6256  NoSrvName        [vmms.exe]            0.0.0.0:2179            LISTENING  
TCP   8532  CDPSvc           [svchost.exe]         0.0.0.0:5040            LISTENING  
TCP   4     无法获取所有权信息                       0.0.0.0:5357            LISTENING  
TCP   14504 NoSrvName        [CastSrv.exe]         0.0.0.0:7250            LISTENING  

$ht | Format-Table | findstr python
$re = ($ht | Format-Table | findstr python) -split "\s+"; 
echo "PID = $($re[3])"

[python.exe]    127.0.0.1:55062   NoSrvName   3420  LISTENING   TCP   0.0.0.0:0   Parts: 6
PID = 3420
```


步骤分解：

```sh
# Turns a string list to be a string
# $a = netstat -bano | Out-String
# or Out-String -InputObject $a;
# $a.GetType()

# Have a look what is output format of netstat command
# As we see it, the table rows come from 1 to 4, [0..3].
$a = netstat -bano;
$index = 0
$a[0..7] | %{($index++).ToString() +" ==> "+ $_}
# $a[0..$a.Count] | %{($index++).ToString() +" ==> "+ $_}
# $headers = $index = 1; $a[0..3] | %{($index++).ToString() +" ==> "+ $_}
# $a[3..7] | ConvertFrom-String | select p2,p3,p5,p6

0 ==> 
1 ==> 活动连接
2 ==> 
3 ==>   协议  本地地址          外部地址        状态           PID
4 ==>   TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1408
5 ==>   RpcSs
6 ==>  [svchost.exe]
7 ==>   TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       4

# Let's select the data part to be continue, 
# Data recor has two part, one row of protocol, loca address, status, PID...
# and then second or 3rd row may be process name or executable file respectively.
# Test each items length, and try to split it
$index = 3
$a[4..7] | %{$index++; "$index ==> Length: $($_.Length) ==> $_"}
# $a[4..7] | %{($index++).ToString() +" ==> Length: "+$_.Length+" ==> "}
$index = 3
$a[4..7] | %{$index++; "$index ==> Parts: $(($_ -split '\s+').Length) ==> $_"}
# $a[4..7] | %{($index++).ToString() +" ==> Parts: "+($_ -split "\s+").Length}

4 ==> Length: 75 ==>   TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1408
5 ==> Length: 7 ==>   RpcSs
6 ==> Length: 14 ==>  [svchost.exe]
7 ==> Length: 72 ==>   TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       4

4 ==> Parts: 6 ==>   TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       1408
5 ==> Parts: 2 ==>   RpcSs
6 ==> Parts: 2 ==>  [svchost.exe]
7 ==> Parts: 6 ==>   TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       4

# the 1st part of each row is indent whitespace,
# and the data is come from part 2.
# remove indention of the lines beginning with UDP or TCP
# $a -replace '(?m)^  (TCP|UDP)', '$1'
$a[4..7] | %{"Row ==> Parts: $(($t=($_ -split '\s+')).Length) ==> $($t[1])"}

Row ==> Parts: 6 ==> TCP
Row ==> Parts: 2 ==> RpcSs
Row ==> Parts: 2 ==> [svchost.exe]
Row ==> Parts: 6 ==> TCP



# $Processes | Format-Table ProcessName, 
#   @{ Label = "Total Running Time"; Expression={(Get-Date) - $_.CreationDate} }
@{C1=@(1,2,3,4,5); C2=@('Red','Orange','Yellow','Green','Cyan')} | Format-Table

Name                           Value 
----                           ----- 
C2                             {Red, Orange, Yellow, Green...}
C1                             {1, 2, 3, 4...}

@([PSCustomObject]@{C1=1; C2="Red"; C3="Color" })

C1 C2  C3   
-- --  --   
 1 Red Color

@(
    [PSCustomObject]@{C1=1; C2="Red"; C3="Color"};
    [PSCustomObject]@{C1=2; C2="Orange"; C3="Color"};
    )

C1 C2     C3   
-- --     --   
 1 Red    Color
 2 Orange Color

@([PSCustomObject]@{
    ProcessID= "1408";
    State= "LISTENING";
    FileName= "[svchost.exe]";
    LocalAddress= "0.0.0.0:135";
    ForeignAddress= "0.0.0.0:0";
    Proto= "TCP";
    ProcessName= "RpcSs";
    Inden= "Parts: 6";
}) | Format-Table; # Table row too long, use Format-Table to fore print table
```



# 🚩 PowerShell Language Specification 3.0

克隆 PowerShell 源代码及文档：

    git clone git@github.com:PowerShell/PowerShell
    git clone git@github.com:MicrosoftDocs/PowerShell-Docs
    git clone git@github.com:dotnet/dotnet-api-docs

PowerShell Language Specification 3.0 官方文档参考：

- [ 1. Introduction](lang-spec/chapter-01.md)
- [ 2. Lexical Structure](lang-spec/chapter-02.md)
- [ 3. Basic concepts](lang-spec/chapter-03.md)
- [ 4. Types](lang-spec/chapter-04.md)
- [ 5. Variables](lang-spec/chapter-05.md)
- [ 6. Conversions](lang-spec/chapter-06.md)
- [ 7. Expressions](lang-spec/chapter-07.md)
- [ 8. Statements](lang-spec/chapter-08.md)
- [ 9. Arrays](lang-spec/chapter-09.md)
- [10. Hashtables](lang-spec/chapter-10.md)
- [11. Modules](lang-spec/chapter-11.md)
- [12. Attributes](lang-spec/chapter-12.md)
- [13. Cmdlets](lang-spec/chapter-13.md)
- [ A. Comment-Based Help](lang-spec/chapter-14.md)
- [ B. Grammar](lang-spec/chapter-15.md)
- [ C. References](lang-spec/chapter-16.md)


## ⚡ About PS

About Topics

- [about_Alias_Provider](about_Alias_Provider.md)
- [about_Aliases](about_Aliases.md)
- [about_Arithmetic_Operators](about_Arithmetic_Operators.md)
- [about_Arrays](about_Arrays.md)
- [about_Assignment_Operators](about_Assignment_Operators.md)
- [about_Automatic_Variables](about_Automatic_Variables.md)
- [about_Break](about_Break.md)
- [about_CimSession](about_CimSession.md)
- [about_Classes](about_Classes.md)
- [about_Command_Precedence](about_Command_Precedence.md)
- [about_Command_Syntax](about_Command_Syntax.md)
- [about_Comment_Based_Help](about_Comment_Based_Help.md)
- [about_CommonParameters](about_CommonParameters.md)
- [about_Comparison_Operators](about_Comparison_Operators.md)
- [about_Continue](about_Continue.md)
- [about_Core_Commands](about_Core_Commands.md)
- [about_Data_Sections](about_Data_Sections.md)
- [about_Debuggers](about_Debuggers.md)
- [about_Do](about_Do.md)
- [about_Enum](about_Enum.md)
- [about_Environment_Provider](about_Environment_Provider.md)
- [about_Environment_Variables](about_Environment_Variables.md)
- [about_Execution_Policies](about_Execution_Policies.md)
- [about_Experimental_Features](about_Experimental_Features.md)
- [about_FileSystem_Provider](about_FileSystem_Provider.md)
- [about_For](about_For.md)
- [about_Foreach](about_Foreach.md)
- [about_Format.ps1xml](about_Format.ps1xml.md)
- [about_Function_Provider](about_Function_Provider.md)
- [about_Functions](about_Functions.md)
- [about_Functions_Advanced](about_Functions_Advanced.md)
- [about_Functions_Advanced_Methods](about_Functions_Advanced_Methods.md)
- [about_Functions_Advanced_Parameters](about_Functions_Advanced_Parameters.md)
- [about_Functions_CmdletBindingAttribute](about_Functions_CmdletBindingAttribute.md)
- [about_Functions_OutputTypeAttribute](about_Functions_OutputTypeAttribute.md)
- [about_Group_Policy_Settings](about_Group_Policy_Settings.md)
- [about_Hash_Tables](about_Hash_Tables.md)
- [about_hidden](about_hidden.md)
- [about_History](about_History.md)
- [about_If](about_If.md)
- [about_Job_Details](about_Job_Details.md)
- [about_Jobs](about_Jobs.md)
- [about_Join](about_Join.md)
- [about_Language_Keywords](about_Language_Keywords.md)
- [about_Language_Modes](about_Language_Modes.md)
- [about_Line_Editing](about_Line_Editing.md)
- [about_locations](about_locations.md)
- [about_Logging_Non-Windows](about_Logging_Non-Windows.md)
- [about_Logging_Windows](about_Logging_Windows.md)
- [about_logical_operators](about_logical_operators.md)
- [about_Methods](about_Methods.md)
- [about_Modules](about_Modules.md)
- [about_Object_Creation](about_Object_Creation.md)
- [about_Objects](about_Objects.md)
- [about_Operator_Precedence](about_Operator_Precedence.md)
- [about_Operators](about_Operators.md)
- [about_PackageManagement](about_PackageManagement.md)
- [about_Parameters](about_Parameters.md)
- [about_Parameters_Default_Values](about_Parameters_Default_Values.md)
- [about_Parsing](about_Parsing.md)
- [about_Path_Syntax](about_Path_Syntax.md)
- [about_pipelines](about_pipelines.md)
- [about_PowerShell_Config](about_PowerShell_Config.md)
- [about_PowerShell_Editions](about_PowerShell_Editions.md)
- [about_Preference_Variables](about_Preference_Variables.md)
- [about_Profiles](about_Profiles.md)
- [about_Prompts](about_Prompts.md)
- [about_Properties](about_Properties.md)
- [about_Providers](about_Providers.md)
- [about_psconsolehostreadline](about_psconsolehostreadline.md)
- [about_PSSession_Details](about_PSSession_Details.md)
- [about_PSSessions](about_PSSessions.md)
- [about_pwsh](about_pwsh.md)
- [about_Quoting_Rules](about_Quoting_Rules.md)
- [about_Redirection](about_Redirection.md)
- [about_Ref](about_Ref.md)
- [about_Registry_Provider](about_Registry_Provider.md)
- [about_Regular_Expressions](about_Regular_Expressions.md)
- [about_Remote](about_Remote.md)
- [about_Remote_Disconnected_Sessions](about_Remote_Disconnected_Sessions.md)
- [about_Remote_Jobs](about_Remote_Jobs.md)
- [about_Remote_Output](about_Remote_Output.md)
- [about_Remote_Requirements](about_Remote_Requirements.md)
- [about_Remote_Troubleshooting](about_Remote_Troubleshooting.md)
- [about_Remote_Variables](about_Remote_Variables.md)
- [about_Requires](about_Requires.md)
- [about_Reserved_Words](about_Reserved_Words.md)
- [about_Return](about_Return.md)
- [about_Run_With_PowerShell](about_Run_With_PowerShell.md)
- [about_Scopes](about_Scopes.md)
- [about_Script_Blocks](about_Script_Blocks.md)
- [about_Script_Internationalization](about_Script_Internationalization.md)
- [about_Scripts](about_Scripts.md)
- [about_Session_Configuration_Files](about_Session_Configuration_Files.md)
- [about_Session_Configurations](about_Session_Configurations.md)
- [about_Signing](about_Signing.md)
- [about_simplified_syntax](about_simplified_syntax.md)
- [about_Special_Characters](about_Special_Characters.md)
- [about_Splatting](about_Splatting.md)
- [about_Split](about_Split.md)
- [about_Switch](about_Switch.md)
- [about_Telemetry](about_Telemetry.md)
- [about_Throw](about_Throw.md)
- [about_Trap](about_Trap.md)
- [about_Try_Catch_Finally](about_Try_Catch_Finally.md)
- [about_Type_Operators](about_Type_Operators.md)
- [about_Types.ps1xml](about_Types.ps1xml.md)
- [about_Updatable_Help](about_Updatable_Help.md)
- [About_Using](About_Using.md)
- [about_Variable_Provider](about_Variable_Provider.md)
- [about_Variables](about_Variables.md)
- [about_While](about_While.md)
- [about_Wildcards](about_Wildcards.md)


## ⚡ Lexical & Syntactic grammar
- [ 2. Lexical Structure](lang-spec/chapter-02.md)
- [ 3. Basic concepts](lang-spec/chapter-03.md)
- [ 4. Types](lang-spec/chapter-04.md)
- [ B. Grammar](lang-spec/chapter-15.md)
- ECMA-334, C# Language Specification, 4th edition (June 2006)

从编译器原理上讲，PowerShell 通过词法 Lexical grammar、语法 Syntactic grammar 分析输入的命令字符，支持 Unicode 字符集，使用分号作为命令终结符，使用 # 号作为注解符号。多行注解使用 <# and #>。

词法标记中使用 `~opt~` 记号表示一个可选项，脚本内容 Unicode 字符串数据流输入到 PowerShell 转序程序中，使用 input 对象表示。脚本可选地包含任意的输入元素（空白字符、注解和 Tokens）和一个签名块。

```yaml
input:
    input-elements~opt~   signature-block~opt~

input-elements:
    input-element
    input-elements   input-element

input-element:
    whitespace
    comment
    token

signature-block:
    signature-begin   signature   signature-end

signature-begin:
    new-line-character   # SIG # Begin signature block   new-line-character

signature:
    base64 encoded signature blob in multiple single-line-comments

signature-end:
    new-line-character   # SIG # End signature block   new-line-character
```

根据词法规则，注解有三种表达，：

   - A *single-line-comment* begins with the character `#` and ends with a *new-line-character*.
   - A *delimited-comment* begins with the character pair `<#` and ends with the character pair `#>`.
   - A *requires-comment* cannot be present inside a snap-in.

There are four other forms of a requires-comment:

```sh
#requires -Version N[.n]
#requires --Assembly AssemblyId
#requires --Module ModuleName
#requires --PsSnapIn PsSnapIn [ -Version *N* [.n] ]
#requires --ShellId ShellId
```

主要内容是 Tokens 的规则定义，它决定了脚本的表达式、运算符号等如何书写：

```yaml
token:
    keyword
    variable
    command
    command-parameter
    command-argument-token
    integer-literal
    real-literal
    string-literal
    type-literal
    operator-or-punctuator
```

PowerShell 关键字列表如下：

```yaml
keyword: one of
    begin          break          catch       class
    continue       data           define      do
    dynamicparam   else           elseif      end
    exit           filter         finally     for
    foreach        from           function    if
    in             inlinescript   parallel    param
    process        return         switch      throw
    trap           try            until       using
    var            while          workflow
```

## ==⚡ Special Characters
- [about_Special_Characters](about_Special_Characters.md)
- [about_Splatting](Microsoft.PowerShell.Core/About/about_Splatting.md)
- [about_Wildcards](Microsoft.PowerShell.Core\About\about_Wildcards.md)

Table 1-1. Sample of special characters

    | Special character |                Meaning                |
    |-------------------|---------------------------------------|
    | "                 | The beginning (or end) of quoted text |
    | #                 | The beginning of a comment            |
    | $                 | The beginning of a variable           |
    | &                 | Reserved for future use               |
    | ( )               | Parentheses used for subexpressions   |
    | ;                 | Statement separator                   |
    | { }               | Script block                          |
    | |                 | Pipeline separator                    |
    | `                 | Escape character                      |


PowerShell recognizes these escape sequences:

    |  Sequence   |       Description       |
    | ----------- | ----------------------- |
    | `` `0 ``    | Null                    |
    | `` `a ``    | Alert                   |
    | `` `b ``    | Backspace               |
    | `` `e ``    | Escape                  |
    | `` `f ``    | Form feed               |
    | `` `n ``    | New line                |
    | `` `r ``    | Carriage return         |
    | `` `t ``    | Horizontal tab          |
    | `` `u{x} `` | Unicode escape sequence |
    | `` `v ``    | Vertical tab            |

PowerShell also has a special token to mark where you want parsing to stop. All
characters that follow this token are used as literal values that aren't
interpreted.

Special parsing token:

| Sequence |            Description             |
| -------- | ---------------------------------- |
| `--%`    | Stop parsing anything that follows |


### ===🗝 splatting operator '@'

Splatting is a method of passing a collection of parameter values to a command
as a unit. PowerShell associates each value in the collection with a command
parameter. Splatted parameter values are stored in named splatting variables,
which look like standard variables, but begin with an At symbol (`@`) instead
of a dollar sign (`$`). The At symbol tells PowerShell that you are passing a
collection of values, instead of a single value.

Splatting makes your commands shorter and easier to read. You can reuse the
splatting values in different command calls and use splatting to pass parameter
values from the `$PSBoundParameters` automatic variable to other scripts and
functions.

Beginning in Windows PowerShell 3.0, you can also use splatting to represent
all parameters of a command.


The first example uses the traditional format in which parameter names are
included.

```sh
## Splatting with hash tables
Copy-Item -Path "test.txt" -Destination "test2.txt" -WhatIf

$HashArguments = @{
  Path = "test.txt"
  Destination = "test2.txt"
  WhatIf = $true
}
Copy-Item @HashArguments

## Splatting with arrays
Copy-Item "test.txt" "test2.txt" -WhatIf

$ArrayArguments = "test.txt", "test2.txt"
Copy-Item @ArrayArguments -WhatIf
```

数组与 ArgumentsList

```sh
> $a = (1)
> $a = ((1))
> $a.GetType() # Int32 Sysmte.ValueType

> $a = (,1)
> $a.GetType() # Object[] System.Array


## Using the ArgumentList parameter

$array = 'Hello', 'World!'
Invoke-Command -ScriptBlock {
  param([string[]]$words) $words -join ' '
} -ArgumentList (,$array)

# Output:
Hello World!
```



## ⚡ signature block
- [Add Credential support to PowerShell functions](deep-dives\add-credentials-to-powershell-functions.md)

签名块起止标记为 `# SIG # Begin signature block`，`# SIG # End signature block`，包括换行符号，签名内容是 base64 编码的字符串，每行都使用注解符号，签名用来验证脚本的完整性防止加入恶意代码。

PowerShell 默认设置是不允许运行未签名脚本的，可以使用 *Set-ExecutionPolicy RemoteSigned* 修改为 LocalMachine = RemoteSigned 方式，它允许本地机器脚本插：

```sh
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
> Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser    RemoteSigned
 LocalMachine    RemoteSigned
```

执行策略的可选项如下：

- **AllSigned**. Requires that all scripts and configuration files are signed by a trusted
  publisher, including scripts written on the local computer.
- **Bypass**. Nothing is blocked and there are no warnings or prompts.
- **Default**. Sets the default execution policy. **Restricted** for Windows clients or
  **RemoteSigned** for Windows servers.
- **RemoteSigned**. Requires that all scripts and configuration files downloaded from the Internet
  are signed by a trusted publisher. The default execution policy for Windows server computers.
- **Restricted**. Doesn't load configuration files or run scripts. The default execution policy for
  Windows client computers.
- **Undefined**. No execution policy is set for the scope. Removes an assigned execution policy from
  a scope that is not set by a Group Policy. If the execution policy in all scopes is **Undefined**,
  the effective execution policy is **Restricted**.
- **Unrestricted**. Loads all configuration files and runs all scripts. If you run an unsigned
  script that was downloaded from the Internet, you are prompted for permission before it runs.

对脚本进行签名需要数字证书，自签名证书也可以，注意证书用途设置为 CodeSigningCert 用于代码签名。除了可以使用 OpenSSL 等工具生成证书，也可以使用 PowerShell *New-SelfSignedCertificate* 生成自签名证书。自签名证书没有可信任的根据证书，因为不是通过认证的 CA 中心颁发，所以其签名状态会显示在不受信任提供程序信任的根证书中终止。

根据证书存储位置加载使用，CurrentUser 或 LocalMachine 等位置，以下脚本可以进行签名操作，文件属性页获取脚本文件的签名信息：

```sh
# Get the code-signing certificate from the local computer's certificate 
# store with the name *Code Authenticode*.
$cn = "CN=Code Authenticode"
$cert = New-SelfSignedCertificate -certstorelocation cert:\CurrentUser\My -dnsname $cn -Type CodeSigningCert
$cert = Get-ChildItem Cert:\CurrentUser\My | Where-Object {$_.Subject -eq $cn} | Select -First 1
# $cert = Get-ChildItem Cert:\LocalMachine\My | Where-Object {$_.Subject -eq $cn} | Select -First 1

# Sign the PowerShell script
# PARAMETERS:
# FilePath - Specifies the file path of the PowerShell script to sign.
# Certificate - Specifies the certificate to use when signing the script.
# TimeStampServer - Specifies the trusted timestamp server that adds a timestamp to your 
# script's digital signature. Adding a timestamp ensures that your code will not expire 
# when the signing certificate expires.
Set-AuthenticodeSignature -FilePath myscript.ps1 -Certificate $cert -TimeStampServer http://timestamp.digicert.com
Get-AuthenticodeSignature -FilePath myscript.ps1 | Select-Object -Property *
```

## ⚡ Variables & Providers and Drives

```yaml
variable:
    $$
    $?
    $^
    $   variable-scope~opt~  variable-characters
    @   variable-scope~opt~  variable-characters
    braced-variable


braced-variable:
    ${   variable-scope~opt~   braced-variable-characters   }

variable-scope:
    global:
    local:
    private:
    script:
    using:
    workflow:
    variable-namespace

variable-namespace:
    variable-characters   :

variable-characters:
    variable-character
    variable-characters   variable-character

variable-character:
    A Unicode character of classes Lu, Ll, Lt, Lm, Lo, or Nd
    _   (The underscore character U+005F)
    ?

braced-variable-characters:
    braced-variable-character
    braced-variable-characters   braced-variable-character

braced-variable-character:
    Any Unicode character except
        }   (The closing curly brace character U+007D)
        `   (The backtick character U+0060)
    escaped-character

escaped-character:
    `   (The backtick character U+0060) followed by any Unicode character
```

以下都是有效变量命名，使用花括号支持变量名中含有各种符号：

```sh
$totalCost
$Maximum_Count_26

$végösszeg # Hungarian
$итог # Russian
$総計 # Japanese (Kanji)

${Maximum_Count_26}
${Name with`twhite space and `{punctuation`}}
```

PowerShell 支持以下作用域：

- Global: This is the top-most level scope. All automatic and preference variables are defined in
  this scope. The global scope is the parent scope of all other scopes, and all other scopes are
  child scopes of the global scope.

- Local: This is the current scope at any execution point within a script, script block, or
  function. Any scope can be the local scope.

- Script: This scope exists for each script file that is executed. The script scope is the parent
  scope of all scopes created from within it. A script block does *not* have its own script scope;
  instead, its script scope is that of its nearest ancestor script file. Although there is no such
  thing as module scope, script scope provides the equivalent.

除非使用 *dot source notation* 以下三种情况都会创建变量作用域：

- A script file
- A script block
- A function or filter

使用打点标记可以避免执行命令之前创建新的作用域：

```sh
# Use *dot source notation*
. Script2.ps1
. "Script2.ps1"
. { ... }
. FunctionA
```

变量名作用域修饰是可选，可以显式指定：

| **Scope Modifier** |  **Within a Script File** | **Within a Script Block** | **Within a Function**  |
|--------------------|---------------------------|---------------------------|------------------------|
| global             | Global scope              | Global scope              | Global scope           |
| private            | Global/Script/Local scope | Local scope               | Local scope            |
| local              | Global/Script/Local scope | Local scope               | Local scope            |
| using              | Implementation defined    | Implementation defined    | Implementation defined |
| workflow           | Implementation defined    | Implementation defined    | Implementation defined |
| none               | Global/Script/Local scope | Local scope               | Local scope            |

特别的 *script* 作用域修修饰无论在哪里使用，它总是使用最近父级脚本文件的作用域或 Global 作用域，如果没有最近祖先脚本文件。

作用域修饰 *using* 在通过 cmdlet 运行脚本时，用于诸如 `Start-Job`, `Invoke-Command`, 或者在 *inlinescript-statement* 内部，以访问在另一个作用域中定义的变量，例如：

```sh
$a = 42
Invoke-Command --ComputerName RemoteServer { $using:a } # returns 42
workflow foo
{
    $b = "Hello"
    inlinescript { $using:b }
}
foo # returns "Hello"
```


变量的命名空间，也是一种作用作用域修饰，它决定了变量的用途，为了方便使用，PowerShell 提供了数据供应器 Providers and drives：

```sh
> ${C:some.txt} = 134
> ${C:\test\some.txt}
> function myfun{echo "my function"}
> ${function:myfun}
echo "my function"
```

参考 3. Basic concepts - 3.1 Providers and drives

直接绑定文件路径名称，则是简化的文件读、写操作，或者绑定脚本函数。

PowerShell 提供以下内置的数据供应器：

|   Provider  |    Drive Name   |             Description             |  Ref.  |
|-------------|-----------------|-------------------------------------|--------|
| Alias       | Alias:          | PowerShell aliases                  | §3.1.1 |
| Environment | Env:            | Environment variables               | §3.1.2 |
| FileSystem  | A:, B:, C:, ... | Disk drives, directories, and files | §3.1.3 |
| Function    | Function:       | PowerShell functions                | §3.1.4 |
| Variable    | Variable:       | PowerShell variables                | §3.1.5 |

使用命令查询当前系统的数据供应器：

```sh
> Get-PSProvider

Name                 Capabilities                                  Drives
----                 ------------                                  ------
Registry             ShouldProcess, Transactions                   {HKLM, HKCU}
Alias                ShouldProcess                                 {Alias}
Environment          ShouldProcess                                 {Env}
FileSystem           Filter, ShouldProcess, Credentials            {C}
Function             ShouldProcess                                 {Function}
Variable             ShouldProcess                                 {Variable}
Certificate          ShouldProcess                                 {Cert}
WSMan                Credentials                                   {WSMan}


> Get-PSDrive

Name           Used (GB)     Free (GB) Provider      Root                  CurrentLocation
----           ---------     --------- --------      ----                  ---------------
Alias                                  Alias                                              
C                 415.61         60.78 FileSystem    C:\                          download
Cert                                   Certificate   \                                    
Env                                    Environment                                        
Function                               Function                                           
HKCU                                   Registry      HKEY_CURRENT_USER                    
HKLM                                   Registry      HKEY_LOCAL_MACHINE                   
Variable                               Variable                                           
WSMan                                  WSMan                                              
```

## ⚡ Numeric/Real literals

字面量有 3 种：

```yaml
literal:
    integer-literal
    real-literal
    string-literal
```

整数字面量词法结构：

```yaml
integer-literal:
    decimal-integer-literal
    hexadecimal-integer-literal

decimal-integer-literal:
    decimal-digits numeric-type-suffix~opt~ numeric-multiplier~opt~

decimal-digits:
    decimal-digit
    decimal-digit decimal-digits

decimal-digit: one of
    0  1  2  3  4  5  6  7  8  9

numeric-type-suffix:
    long-type-suffix
    decimal-type-suffix

hexadecimal-integer-literal:
    0x hexadecimal-digits long-type-suffix~opt~
    numeric-multiplier~opt~

hexadecimal-digits:
    hexadecimal-digit
    hexadecimal-digit decimal-digits

hexadecimal-digit: one of
    0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f

long-type-suffix:
    l

numeric-multiplier: one of
    kb mb gb tb pb
```

可以注意到，数值定义了单位后缀乘数，有了这些单位表示容量数据就非常易读：

| Multiplier |                   Meaning                   |            Example             |
|------------|---------------------------------------------|--------------------------------|
| kb         | kilobyte (1024)                             | 1kb ≡ 1024                     |
| mb         | megabyte (1024 x 1024)                      | 1.30Dmb ≡ 1363148.80           |
| gb         | gigabyte (1024 x 1024 x 1024)               | 0x10Gb ≡ 17179869184           |
| tb         | terabyte (1024 x 1024 x 1024 x 1024)        | 1.4e23tb ≡ 1.5393162788864E+35 |
| pb         | petabyte (1024 x 1024 x 1024 x 1024 x 1024) | 0x12Lpb ≡ 20266198323167232    |


实数字面量词法结构：

```yaml
real-literal:
    decimal-digits . decimal-digits exponent-part~opt~ decimal-type-suffix~opt~ numeric-multiplier~opt~
    . decimal-digits exponent-part~opt~ decimal-type-suffix~opt~ numeric-multiplier~opt~
    decimal-digits exponent-part decimal-type-suffix~opt~ numeric-multiplier~opt~

exponent-part:
    e sign~opt~  decimal-digits

sign: one of
    +
    dash

decimal-type-suffix:
    d
    l

numeric-multiplier: one of
    kb mb gb tb pb

dash:
    - (U+002D)
    EnDash character (U+2013)
    EmDash character (U+2014)
    Horizontal bar character (U+2015)
```

## ⚡ Strings literals
- [Everything about variable substitution in strings](deep-dives\everything-about-string-substitutions.md)
- [ 2. Lexical Structure](lang-spec/chapter-02.md)
- [Appendix A - Grammar](lang-spec\chapter-15.md)

字符串字面量结构的内容非常多，主要是字符串的可扩展性。

有四种字符串字面量表达：

- *verbatim-string-literal* 单行、单引号包裹的字符串，如 '' and 'red'；
- *expandable-string-literal* 单行、双引号包裹的带变量插值字符串，如 "" and "red"；
- *verbatim-here-string-literal* 多行、单引号包裹的字符串，如 @''@ 或 @'abc'@；
- *expandable-here-string-literal* 多行、双引号包裹的带变量插值的字符串，如 @""@ 或 @"abc"@；

字符串字面量可以使用 Here String 设置多行字符串内容，单引号、双引号的差别在于前者不会进行变量插值，所以，前者称为 verbatim-here-string-literal，后者称为 expandable-here-string-literal。

```sh
> $ml = @'
line 1
line 2
'@

> $ml = @"
$ml
line 3
line 4
"@

> $ml
line 1
line 2
line 3
line 4
```

字符串字面量 String literals 使用反引号作为转义符号。要使用字符串内的求值表达式，sub-expression，需要使用 $( ... ) 符号将表达式使用圆括号包裹：

```sh
> $count = 10
"$count + 5 is $($count + 5)"
"$count + 5 is `$($count + 5)"
"$count + 5 is `$(`$count + 5)"
10 + 5 is 15
10 + 5 is $(10 + 5)
10 + 5 is $($count + 5)
```

以下演示了 sub-expression 的使用：

```sh
$a = 10
$s1 = "`$a = $($a; ++$a)"
"`$s1 = >$s1<"
$s2 = "`$a = $($a; ++$a)"
"`$s2 = >$s2<"
$s2 = $s1
"`$s2 = >$s2<"
# Output
$s1 = >$a = 10<
$s2 = >$a = 11<
$s2 = >$a = 10<

$i = 5; $j = 10; $k = 15
"`$i, `$j, and `$k have the values $( $i; $j; $k )"
"`$i, `$j, and `$k have the values $(($i = 5); ($j = 10); ($k = 15))"
# Output
$i, $j, and $k have the values 5 10 15


"First 10 squares: $(for ($i = 1; $i -le 10; ++$i) { "$i $($i*$i) " })"
# Output
First 10 squares: 1 1  2 4  3 9  4 16  5 25  6 36  7 49  8 64  9 81  10 100 
```

注意，在字符串中的求值表达式中，++ 或 -- 运算符不会返回一个值。字符串内的求值表达式会在使用字符串时执行，并且分号不需要转义，因为它不像通常的命令终结符号用法。

字符串字面量词法结构：

```yaml
string-literal:
    expandable-string-literal
    expandable-here-string-literal
    verbatim-string-literal
    verbatim-here-string-literal

expandable-string-literal:
    double-quote-character expandable-string-characters~opt~  dollars~opt~ double-quote-character

double-quote-character:
    " (U+0022)
    Left double quotation mark (U+201C)
    Right double quotation mark (U+201D)
    Double low-9 quotation mark (U+201E)

expandable-string-characters:
      expandable-string-part
      expandable-string-characters
      expandable-string-part

expandable-string-part:
    Any Unicode character except
        $
        double-quote-character
        ` (The backtick character U+0060)
    braced-variable
    $ Any Unicode character except
        (
        {
        double-quote-character
        ` (The backtick character U+0060)*
    $ escaped-character
    escaped-character
    double-quote-character double-quote-character

dollars:
    $
    dollars $

expandable-here-string-literal:
    @  double-quote-character  whitespace~opt~  new-line-character
        expandable-here-string-characters~opt~  new-line-character  double-quote-character  @

expandable-here-string-characters:
    expandable-here-string-part
    expandable-here-string-characters  expandable-here-string-part

expandable-here-string-part:
    Any Unicode character except
        $
        new-line-character
    braced-variable
    $ Any Unicode character except
        (
        new-line-character
    $ new-line-character  Any Unicode character except double-quote-char
    $ new-line-character double-quote-char  Any Unicode character except @
    new-line-character  Any Unicode character except double-quote-char
    new-line-character double-quote-char  Any Unicode character except @

expandable-string-with-subexpr-start:
    double-quote-character  expandable-string-chars~opt~  $(

expandable-string-with-subexpr-end:
    double-quote-char

expandable-here-string-with-subexpr-start:
    @  double-quote-character  whitespace~opt~  new-line-character  expandable-here-string-chars~opt~  $(

expandable-here-string-with-subexpr-end:
    new-line-character  double-quote-character  @

verbatim-string-literal:
    single-quote-character verbatim-string-characters~opt~ single-quote-char

single-quote-character:
    ' (U+0027)
    Left single quotation mark (U+2018)
    Right single quotation mark (U+2019)
    Single low-9 quotation mark (U+201A)
    Single high-reversed-9 quotation mark (U+201B)

verbatim-string-characters:
    verbatim-string-part
    verbatim-string-characters verbatim-string-part

verbatim-string-part:
    *Any Unicode character except* single-quote-character
    single-quote-character  single-quote-character

verbatim-here-string-literal:
    @ single-quote-character whitespace~opt~  new-line-character
        verbatim-here-string-characters~opt~  new-line-character
            single-quote-character *@*

verbatim-*here-string-characters:
    verbatim-here-string-part
    verbatim-here-string-characters  verbatim-here-string-part

verbatim-here-string-part:
    Any Unicode character except* new-line-character
    new-line-character  Any Unicode character except single-quote-character
    new-line-character  single-quote-character  Any Unicode character except @
```


## ⚡ Operators and punctuators

Use PowerShell’s arithmetic operators:

    |     Operators      |                         Meaning                          |
    |--------------------|----------------------------------------------------------|
    | +                  | Addition                                                 |
    | -                  | Subtraction                                              |
    | *                  | Multiplication                                           |
    | /                  | Division                                                 |
    | %                  | Modulus                                                  |
    | +=, -=, *=, /=, %= | Assignment variations of the previously listed operators |
    | ()                 | Precedence/order of operations                           |

PowerShell supports the following arithmetic operators:

| Operator |       Description Example        |                             |
|----------|----------------------------------|-----------------------------|
| +        | Adds integers:                   | 6 + 2                       |
|          | concatenates strings:            | "file" + "name"             |
|          | concatenates arrays:             | @(1, "one") + @(2.0, "two") |
|          | concatenates hash tables:        | @{"one" = 1} + @{"two" = 2} |
|----------|----------------------------------|-----------------------------|
| -        | Subtracts one value from another | 6 - 2                       |
|----------|----------------------------------|-----------------------------|
| +        | Makes a number out of an object  | + 123                       |
|----------|----------------------------------|-----------------------------|
| -        | Calculates the opposite number   | - -6                        |
|          |                                  | (Get-Date).AddDays(-1)      |
|----------|----------------------------------|-----------------------------|
| *        | Multiply numbers                 | 6 * 2                       |
|          | or copy strings arrays of times. | @("!") * 4                  |
|----------|----------------------------------|-----------------------------|
| /        | Divides two values.              | 6 / 2                       |
| %        | Modulus - returns the remainder. | 7 % 2                       |
| -band    | Bitwise AND                      | 5 -band 3                   |
| -bnot    | Bitwise NOT                      | -bnot 5                     |
| -bor     | Bitwise OR                       | 5 -bor 0x03                 |
| -bxor    | Bitwise XOR                      | 5 -bxor 3                   |
| -shl     | Shifts bits to the left          | 102 -shl 2                  |
| -shr     | Shifts bits to the right         | 102 -shr 2                  |


Bitwise Logical Operators

- Bitwise AND -band operator
- Bitwise OR -bor operator
- Bitwise XOR (Exclusive OR) -bxor operator
- Bitwise NOT -bnot operator

```sh
> 123 -band 321
65
> 123 -bor 321
379
> 123 -bxor 321
314
> -bnot 123
-124
```

PowerShell processes arithmetic operators in the following order:

| Order |   Operator   |               Description               |
|-------|--------------|-----------------------------------------|
|     1 | ()           | Parentheses                             |
|     2 | -            | For a negative number or unary operator |
|     3 | *, /, %      | For multiplication and division         |
|     4 | +, -         | For addition and subtraction            |
|     5 | -band, -bnot | For bitwise operations                  |
|     5 | -bor, -bxor  | For bitwise operations                  |
|     5 | -shr, -shl   | For bitwise operations                  |

PowerShell supports the following logical operators.

- Logical AND. TRUE when both statement are TRUE.
- Logical OR. TRUE when either statement is TRUE.
- Logical EXCLUSIVE OR. TRUE when only one statement is TRUE.
- Logical not. Negates the statement that follows.

| Operator |      Description      |         Example          |       |
|----------|-----------------------|--------------------------|-------|
| -and     | Logical AND.          | (1 -eq 1) -and (1 -eq 2) | False |
| -or      | Logical OR.           | (1 -eq 1) -or (1 -eq 2)  | True  |
| -xor     | Logical EXCLUSIVE OR. | (1 -eq 1) -xor (2 -eq 2) | False |
| -not     | Logical not.          | -not (1 -eq 1)           | False |
| !        | Same as -not          | !(1 -eq 1)               | False |


数学函数调用：

```sh
# Example 6-1. A root function and some example calculations
PS > function root($number, $root) { [Math]::Pow($number, 1 / $root) }
PS > root 64 3
4
PS > root 25 5
1.90365393871588
PS > [Math]::Pow(1.90365393871588, 5)
25.0000000000001
PS > [Math]::Pow( $(root 25 5), 5)
25
> [Convert]::ToInt32("100000000100001", 2)
16417
```

逻辑判断：

- *-eq* Compares two values and returns True if they are equal.
- *-ne* Compares two values and returns True if they are not equal.
- *-gt* Compares two values and returns True if the first is greater than
the second.
- *-ge* Compares two values and returns True if the first is greater than or
equal to the second.
- *-lt* Compares two values and returns True if the first is less than the
second.
- *-le* Compares two values and returns True if the first is less than or
equal to the second.
- *-contains* Returns True if the second value is “in” the second. You can
use this to determine whether a value is inside an array.

Operators and punctuators 运算符词法结构：

```yaml
operator-or-punctuator: one of
    {   }   [   ]   (   )   @(   @{   $(   ;
    &&  ||  &   |   ,   ++  ..   ::   .
    !   *   /   %   +   -   --
    -and   -band   -bnot   -bor
    -bxor   -not   -or     -xor
    assignment-operator
    merging-redirection-operator
    file-redirection-operator
    comparison-operator
    format-operator

assignment-operator: one of
    =  -=  +=  *=  /=  %=

file-redirection-operator: one of
    >  >>  2>  2>>  3>  3>>  4>  4>>
    5>  5>>  6>  6>>  *>  *>>  <

merging-redirection-operator: one of
    *>&1  2>&1  3>&1  4>&1  5>&1  6>&1
    *>&2  1>&2  3>&2  4>&2  5>&2  6>&2

comparison-operator: *one of
    -as           -ccontains      -ceq
    -cge          -cgt            -cle
    -clike        -clt            -cmatch
    -cne          -cnotcontains   -cnotlike
    -cnotmatch    -contains       -creplace
    -csplit       -eq             -ge
    -gt           -icontains      -ieq
    -ige          -igt            -ile
    -ilike        -ilt            -imatch
    -in           -ine            -inotcontains
    -inotlike     -inotmatch      -ireplace
    -is           -isnot          -isplit
    -join         -le             -like
    -lt           -match          -ne
    -notcontains  -notin         -notlike
    -notmatch     -replace       -shl*
    -shr          -split

format-operator:
    -f
```


## ⚡ Builtin Automatic Variables
- [about_automatic_variables](module/microsoft.powershell.core/about/about_automatic_variables.md)
- [SpecialVariables](src\System.Management.Automation\engine\SpecialVariables.cs)
- [MutableTuple](src\System.Management.Automation\engine\runtime\MutableTuple.cs)
- [Everything about $null](deep-dives\everything-about-null.md)

变量作用域修饰符：

- *$local* 局部变量：变量将只在局部范围内创建，变量的默认作用域。
- *$script* 脚本变量：该变量在整个脚本中有效。
- *$global* 全局变量：变量在任何地方都是有效的，即使是在函数和脚本之外。
- *$private* 私有变量：该变量将仅在当前作用域中创建，而不会传递到其他作用域。


PowerShell 内置的自动变量：

1. $$   此变量用于表示会话接收到的最后一行中的最后一个 Token。
2. $?   此变量用于表示最后一个操作的执行状态。如果没有错误，则返回True，否则返回False。
3. $^   此变量用于表示会话接收到的最后一行中的第一个 Token。
4. $_   此变量充当 `$PSItem`，它在管道对象中包含当前对象。
5. $Args    此变量包含未声明参数的值的数组，这些值传递给脚本，函数或脚本块，使用 PARAM 时无效。
6. $ConsoleFileName     此变量用于表示控制台文件的路径，该文件最近在会话中使用。
7. $Error   此变量用于包含代表最新错误的错误对象数组。
8. $Event   此变量用于包含PSEventArgs的对象。PSEventArgs是用于表示正在处理的事件的对象。
9. $EventSubscriber     此变量用于包含PSEventSubscriber的对象。该对象包含正在处理的事件的事件订阅者。
10. $EventArgs  此变量用于包含一个对象，该对象表示第一个事件的参数。
11. $false  此变量用于表示False。
12. $foreach    此变量用于包含ForEach循环的枚举数。该变量仅在执行ForEach循环时存在。
13. $Home   此变量用于表示用户主目录的完整路径
14. $Input  该枚举器枚举传递给该函数的所有输入，它仅适用于脚本块和功能。
15. $Host   脚本宿主对象，System.Management.Automation.Host.PSHost。
16. $IsLinux    如果当前会话在Linux操作系统上运行，则此变量值为$True，否则为$False。
17. $IsWindows  如果当前会话在Windows操作系统上运行，则此变量值为$True，否则为$False。
18. $IsMacOS    如果当前会话在MacOS操作系统上运行，则此变量值为$True，否则为$False。
19. $null   此变量用于表示null值或空值。可以使用它来表示脚本和命令中缺少或未定义的值。
20. $PID    此变量显示进程的PID，该进程正在托管当前PowerShell的会话。
21. $PSItem     此变量充当 `$_`，它在管道对象中包含当前对象。
22. $PSHome     此变量表示Windows PowerShell安装目录的完整路径。
24. $PWD    此变量用于包含路径对象，该路径对象显示当前目录的完整路径。
25. $ShellId    此变量用于表示当前Shell的标识符。
26. $Profile        包含多个配置文件路径。
27. $PSScriptRoot   脚本所在目录。
29. $PSVersionTable 版本号信息表格，只读哈希表对象。
28. $OFS    数组转字符串时使用的分隔符，Output Field Separator。
30. $Env    环境变量，如 $Env:USERPROFILE，或修改当前运行环境变量 $Env:PATH="."。


自动变量 *$MyInvocation* 包含了当前运行脚本作用域的相关信息，在脚本执行环境中：

- *$PSCommandPath* 自动变量包含脚本的路径；
- *$PSScriptRoot*自动变量包含脚本的所在目录；

但是在脚本块执行环境中，由于它是创建在一个新的 Runspace 运行空间，并且不归属于脚本文件，所以以上两个自动变量不能提供有用信息，或者说通过检测它们的值为空，就表示有可能在脚本块中运行。

以下是脚本运行状态、脚本块运行状态的信息比较，MyInvocation in Scripts vs ScriptBlocks：

    MyInvocation in Scripts :                   |     MyInvocation in ScriptBlocks :
    =========================================== | ================================================
    MyCommand             : jobs.ps1            |     MyCommand             :
                                                |                               function msg($id){
                                                |                                  echo "MSG: $id"
    BoundParameters       : {}                  |                               }
    UnboundArguments      : {}                  | 
    ScriptLineNumber      : 1                   |     BoundParameters       : {}
    OffsetInLine          : 6                   |     UnboundArguments      : {}
    HistoryId             : 13                  |     ScriptLineNumber      : 0
    ScriptName            :                     |     OffsetInLine          : 0
    Line                  : cls; .\jobs.ps1     |     HistoryId             : 1
    PositionMessage       : At line:1 char:6    |     ScriptName            :
                            + cls; .\jobs.ps1   |     Line                  :
                            +      ~~~~~~~~~~   |     PositionMessage       :
    PSScriptRoot          :                     |     PSScriptRoot          :
    PSCommandPath         :                     |     PSCommandPath         :
    InvocationName        : .\jobs.ps1          |     InvocationName        :
    PipelineLength        : 1                   |     PipelineLength        : 1
    PipelinePosition      : 1                   |     PipelinePosition      : 1
    ExpectingInput        : False               |     ExpectingInput        : False
    CommandOrigin         : Runspace            |     CommandOrigin         : Runspace
    DisplayScriptPosition :                     |     DisplayScriptPosition :


➡ **$IsCoreCLR**
Contains $True if the current session is running on the .NET Core Runtime (CoreCLR). Otherwise contains $False.

➡ **$LastExitCode**
Contains the exit code of the last native program that was run.

➡ **$Matches**
The $Matches variable works with the -match and -notmatch operators.

➡ **$MyInvocation**
Contains information about the current command, such as the name, parameters, parameter values, and information about how the command was started, called, or invoked, such as the name of the script that called the current command.

➡ **$NestedPromptLevel**
Contains the current prompt level. A value of 0 indicates the original prompt level. The value is incremented when you enter a nested level and decremented when you exit it.

➡ **$PSBoundParameters**
Contains a dictionary of the parameters that are passed to a script or function and their current values. This variable has a value only in a scope where parameters are declared, such as a script or function. You can use it to display or change the current values of parameters or to pass parameter values to another script or function.

➡ **$PSCmdlet**
Contains an object that represents the cmdlet or advanced function that's being run.

➡ **$PSCommandPath**
Contains the full path and file name of the script that's being run. This variable is valid in all scripts.

➡ **$PSCulture**
Beginning in PowerShell 7, $PSCulture reflects the culture of the current PowerShell runspace (session). If the culture is changed in a PowerShell runspace, the $PSCulture value for that runspace is updated.

The culture determines the display format of items such as numbers, currency, and dates, and is stored in a System.Globalization.CultureInfo object. Use Get-Culture to display the computer's culture. $PSCulture contains the Name property's value.

➡ **$PSDebugContext**
While debugging, this variable contains information about the debugging environment. Otherwise, it contains a null value. As a result, you can use it to indicate whether the debugger has control. When populated, it contains a PsDebugContext object that has Breakpoints and InvocationInfo properties. The InvocationInfo property has several useful properties, including the Location property. The Location property indicates the path of the script that is being debugged.

➡ **$PSScriptRoot**
Contains the full path of the executing script's parent directory.

➡ **$PSSenderInfo**
Contains information about the user who started the PSSession, including the user identity and the time zone of the originating computer. This variable is available only in PSSessions.

➡ **$PSStyle**
As of PowerShell 7.2 you can now access the $PSStyle automatic variable to view and change the rendering of ANSI string output. The variable contains the following properties:

   - Reset - Turns off all decorations
   - Blink - Turns Blink on
   - BlinkOff - Turns Blink off
   - Bold - Turns Bold on
   - BoldOff - Turns Bold off
   - Hidden - Turns Hidden on
   - HiddenOff - Turns Hidden off
   - Reverse - Turns Reverse on
   - ReverseOff - Turns Reverse off
   - Italic - Turns Italic on
   - ItalicOff - Turns Italic off
   - Underline - Turns underlining on
   - UnderlineOff - Turns underlining off
   - OutputRendering - Control when output rendering is used
   - Background - Nested object to control background coloring
   - Foreground - Nested object to control foreground coloring
   - Formatting - Nested object that controls default formatting for output streams
   - Progress - Nested object that controls the rendering of progress bars
   - FileInfo - (experimental) Nested object to control the coloring of FileInfo objects.



## ⚡ Types - Numbers/Strings/Datetime
- 4. Types https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04
- 5. Variables https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-05
- 6. Conversions https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-06
- 7. Expressions https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-07
- https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_split


使用方法 GetType() 以获取变量类型，所有 Object 基类的类型都继承此方法：

```sh
$a = netstat -bano
$a.GetType()

IsPublic IsSerial Name                                     BaseType
-------- -------- ----                                     --------
True     True     Object[]                                 System.Array

$a = netstat -bano | Out-String
$a.GetType()

IsPublic IsSerial Name                                     BaseType
-------- -------- ----                                     --------
True     True     String                                   System.Object
```

使用 Get-Member 查询类型提供的方法，使用管道操作符号或者使用 -InputObject 指定输入变量：

```sh
# $a | Get-Member
Get-Member -InputObject $a

   TypeName:System.Object[]

Name           MemberType            Definition
----           ----------            ----------
Count          AliasProperty         Count = Length
Add            Method                int IList.Add(System.Object value)...
Address        Method                System.Object&, mscorlib, Version=...
Clear          Method                void IList.Clear()                ...
Clone          Method                System.Object Clone(), System.Obje...
CompareTo      Method                int IStructuralComparable.CompareT...
Contains       Method                bool IList.Contains(System.Object ...
CopyTo         Method                void CopyTo(array array, int index...
Equals         Method                bool Equals(System.Object obj), bo...
Get            Method                System.Object Get(int )           ...
GetEnumerator  Method                System.Collections.IEnumerator Get...
GetHashCode    Method                int GetHashCode(), int IStructural...
GetLength      Method                int GetLength(int dimension)      ...
GetLongLength  Method                long GetLongLength(int dimension) ...
GetLowerBound  Method                int GetLowerBound(int dimension)  ...
GetType        Method                type GetType()                    ...
GetUpperBound  Method                int GetUpperBound(int dimension)  ...
GetValue       Method                System.Object GetValue(Params int[...
IndexOf        Method                int IList.IndexOf(System.Object va...
Initialize     Method                void Initialize()                 ...
Insert         Method                void IList.Insert(int index, Syste...
Remove         Method                void IList.Remove(System.Object va...
RemoveAt       Method                void IList.RemoveAt(int index)    ...
Set            Method                void Set(int , System.Object )    ...
SetValue       Method                void SetValue(System.Object value,...
ToString       Method                string ToString()                 ...
Item           ParameterizedProperty System.Object IList.Item(int index...
IsFixedSize    Property              bool IsFixedSize {get;}           ...
IsReadOnly     Property              bool IsReadOnly {get;}            ...
IsSynchronized Property              bool IsSynchronized {get;}        ...
Length         Property              int Length {get;}                 ...
LongLength     Property              long LongLength {get;}            ...
Rank           Property              int Rank {get;}                   ...
SyncRoot       Property              System.Object SyncRoot {get;}     ...
```

PowerShell 数值有整数、实数两大类，整数有 int long 两类，浮点有 float double 两类：

- A character value has type char, which is capable of storing any UTF-16-encoded 16-bit Unicode code point. 
- Type *int*, which uses 32 bits giving it a range of -2147483648 to +2147483647, inclusive.
- Type *long*, which uses 64 bits giving it a range of -9223372036854775808 to +9223372036854775807, inclusive.
- Type *float* uses the 32-bit IEEE single-precision representation.
- Type *double* uses the 64-bit IEEE double-precision representation.
- Type *decimal* uses a 128-bit representation. At a minimum it must support a scale s such that 0 <= s <= at least 28, and a value range -79228162514264337593543950335 to 79228162514264337593543950335. The actual representation of decimal is implementation defined.

PowerShell defines the following categories of variables: 

- static variables
- instance variables
- array elements
- Hashtable key/value pairs
- parameters
- ordinary variables
- variables on provider drives

The subsections that follow describe each of these categories.

```sh
function F ($p1, $p2) {
    $radius = 2.45
    $circumference = 2 * ([Math]::PI) * $radius

    $date = Get-Date -Date "2010-2-1 10:12:14 pm"
    $month = $date.Month

    $values = 10, 55, 93, 102
    $value = $values[2]

    $h1 = @{ FirstName = "James"; LastName = "Anderson" }
    $h1.FirstName = "Smith"

    $Alias:A = "Help"
    $Env:MyPath = "e:\Temp"
    ${E:output.txt} = 123
    $function:F = { "Hello there" }
    $Variable:v = 10
}
```

- *[Math::PI]* is a static variable
- *$date.Month* is an instance variable
- *$values[2]* is an array element
- *$h1.FirstName* is a Hashtable key whose corresponding value is $h1['FirstName']`
- *$p1 and $p2* are parameters
- *$radius, $circumference, $date, $month, $values, $value, and $h1* are ordinary variables
- *$Alias:A, $Env:MyPath, ${E:output.txt}, and $function:F* are variables on the corresponding provider drives.
- *$Variable:v* is actually an ordinary variable written with its fully qualified provider drive.

By default, a variable may designate a value of any type. However, a variable may be constrained to designating values of a given type by specifying that type as a type literal before its name in an assignment or a parameter. For example,

```sh
# Constrained variables
[int]$i = 10   # constrains $i to designating ints only
$i = "Hello"   # error, no conversion to int
$i = "0x10"    # ok, conversion to int
$i = $true     # ok, conversion to int

function F ([int]$p1, [switch]$p2, [regex]$p3) { ... }
```


Null 值字面量使用 *$null* 表示，布尔值字面量使用 *$true* 和 *$false* 两个自动变量表示真值、假值。

PowerShell 类型与 C# 类型映射：

|  Types  |    Maps to     |
|---------|----------------|
| bool    | System.Boolean |
| char    | System.Char    |
| byte    | System.Byte    |
| int     | System.Int32   |
| long    | System.Int64   |
| float   | System.Single  |
| double  | System.Double  |
| decimal | System.Decimal |


字符串到数值的类型转换使用到的静态方法，可以在 ISE 中通过 *[Int32]::Parse* 或 *[Int]::Parse* 这样的语法查询：

```C#
bool TryParse(string s, [ref] int result);
bool TryParse(string s, System.Globalization.NumberStyles style, System.IFormatProvider provider, [ref] int result
);
int Parse(string s);
int Parse(string s, System.Globalization.NumberStyles style);
int Parse(string s, System.IFormatProvider provider);
int Parse(string s, System.Globalization.NumberStyles style, System.IFormatProvider provider);

double Parse(string s);
double Parse(string s, System.Globalization.NumberStyles style);
double Parse(string s, System.IFormatProvider provider);
double Parse(string s, System.Globalization.NumberStyles style, System.IFormatProvider provider);

bool TryParse(string s, [ref] double result);
bool TryParse(string s, System.Globalization.NumberStyles style, System.IFormatProvider provider, [ref] double res
ult);                       
```

被转换的字符串不能含有非数字字符，可以使用替换方法过滤：

```sh
> [int]::Parse(("100%" -replace "%",""))
100
```


字符串处理，Split() 指定多个分割符，分隔符默认值为空格，使用反引号转义分割符。

使用 -split 运算符可以使用字符串作为分割符，但不支持连续的换行符分割，可以使用括号来包括分割符到输出列表：

    -Split <String>
    -Split (<String[]>)
    <String> -Split <Delimiter>[,<Max-substrings>[,"<Options>"]]
    <String> -Split {<ScriptBlock>} [,<Max-substrings>]

```sh
> $text = @"
Here string
Here doc
something
"@
> $text.Split(" `n")
Here
string
Here
doc
something

> -split "red yellow blue green"
red
yellow
blue
green

> "Lastname:FirstName:Address" -split ":"
Lastname
FirstName
Address

> "Lastname:FirstName:Address" -split "(:)"
Lastname
:
FirstName
:
Address

> "Lastname/:/FirstName/:/Address" -split "/(:)/"
Lastname
:
FirstName
:
Address


> 'First,Second;Third'.Split(',;')
First
Second
Third
```

拼接字符串时，要使用平台相应的换行符号，Windows 系统要指定 \r\n，Linux 系统指定 \n 即可，注意 Powershell 使用反引号转义

```sh
> $m3u = Get-Content .\index.m3u8
> $m3u -join "`r`n"
```

Out-String - Outputs input objects as a string.

```sh
> Get-Alias | Out-String -Stream

CommandType     Name                  Version    Source
-----------     ----                  -------    ------
Alias           % -> ForEach-Object
Alias           ? -> Where-Object
Alias           ac -> Add-Content                         
```
xsub0
## ⚡ ArrayList & Hashtable & PSCustomObject
- [7. Expressions](lang-spec/chapter-07.md)
- [9. Arrays](lang-spec/chapter-09.md)
- [10. Hashtables](lang-spec/chapter-10.md)
- [Appendix A - Grammar](lang-spec/chapter-15.md)
- [about_Properties](about_Properties.md)
- [about_Arrays](about_Arrays.md)
- [about_Hash_Tables](about_Hash_Tables.md)
- [Everything about PSCustomObject](everything-about-pscustomobject.md)
- [Everything about hashtables](deep-dives\everything-about-hashtable.md)
- [Everything about arrays](deep-dives\everything-about-arrays.md)

PowerShell 提供了 3 个特殊的运算符 @{...}、 @(...) 和 $(...)，分别是 Hashtable 字面量、数组运算符和子表达式运算符：

```sh
array-expression:
    @( new-lines~opt~ statement-list~opt~ new-lines~opt~ )

sub-expression:
    $( new-lines~opt~ statement-list~opt~ new-lines~opt~ )

hash-literal-expression:
    @{ new-lines~opt~ hash-literal-body~opt~ new-lines~opt~ }

# Creating and initializing an array
$A = 22,5,10,8,12,9,80
$B = ,7
# As a result, $C contains four values: 5, 6, 7, and 8.
$C = 5..8
```

HashTable 可以转换为 PSCustomObject 类型，并且它们的字段访问方式相似，可以通过成员操作符号访问，比方括号的方式更方便，并且也支持变量作为成员名称：

```sh
$ps = [pscustomobject]@{Name="badapple"; weight=2};
$ps = [hashtable]@{Name="badapple"; weight=2};
$ps.Name
$ps.'Name'
$ps.("N"+"ame")
$property = 'Name'
$ps.$property
```

和 Hashtable 的枚举操作不同，自定义对象需要通过基类 PSObject.properties 可以对成员进行枚举处理。


使用 @() 定义大小是固定的集合，需要改动增删元素就使用 ArrayList，使用 [ArrayList] 类型转换语法。

元素有标点符号要使用引号括起来：

```sh
> 1..3
1
2
3
> $colorPicker = @(
    'blue'
    'white'
    'yellow'
    'black'
    )
> $colorPicker = @('blue','white','yellow','black')
> $colorPicker[3] = 'White'
> $colorPicker[1..3]
White
yellow
black
> $colors = [System.Collections.ArrayList]@('blue','white','yellow', 'black')
> $null = $colors.Add('gray')
> $color.Remove('gray')
> $color = 'blue white yellow black' -split
> $color.Insert(0, "Black")
```

使用 .. 省略运算符可以截取指定的序号之间的元素，并且可以实现 reverse 效果，如 [1, -1] 将第 1 号、0 号、最未位置的元素组成新的数组。

和字符串一样，使用 * 运算符可以按指定次数复制数组元素。

其它数组创建方法：

```sh
$values = 10, 20, 30
for ($i = 0; $i -lt $values.Length; ++$i) {
    "`$values[$i] = $($values[$i])"
}

$x = , 10                         # x refers to an array of length 1
$x = @(10)                        # x refers to an array of length 1
$x = @()                          # x refers to an array of length 0

$a = New-Object 'object[,]' 2, 2  # create a 2x2 array of anything
$a[0, 0] = 10                     # set to an int value
$a[0, 1] = $false                 # set to a boolean value
$a[1, 0] = "red"                  # set to a string value
$a[1, 1] = 10.50D                 # set to a decimal value
foreach ($e in $a) {              # enumerate over the whole array
    $e
}
```

使用 HashTable，如果 key 有标点等特殊字符可以使用双引号：

```sh
# The syntax of a hash table is as follows:
@{ <name> = <value>; [<name> = <value> ] ...}
# The syntax of an ordered dictionary is as follows:
# The [ordered] attribute was introduced in PowerShell 3.0.
[ordered]@{ <name> = <value>; [<name> = <value> ] ...}


> $users = @{
abertram = 'Adam Bertram'
raquelcer = 'Raquel Cerillo'
zheng21 = 'Justin Zheng'
}
PS> $users
Name                           Value
----                           -----
abertram                       Adam Bertram
raquelcer                      Raquel Cerillo
zheng21                        Justin Zheng
> $users.Keys
abertram
raquelcer
zheng21
> $users.Values
Adam Bertram
Raquel Cerillo
Justin Zheng
> $users.Add('natice', 'Natalie Ice')
> $users['phrigo'] = 'Phil Rigo'
> $users.Remove('natice')
> $users.ContainsKey('johnny')
False

$h1 = @{ FirstName = "James"; LastName = "Anderson"; IDNum = 123}
foreach ($e in $h1.Keys) {
   "Key is " + $e + ", Value is " + $h1[$e]
}
```

哈希表除了使用 Keys 获取字段集体来做枚举处理，还可以通过 `GetEnumerator()` 来直接获得迭代器：

```sh
$ageList.GetEnumerator() | ForEach-Object{
    $message = '{0} is {1} years old!' -f $_.key, $_.value
    Write-Output $message
}
```



## ⚡ Flow Control
- [8. Statements](lang-spec/chapter-08.md)
- [about_Switch](Microsoft.PowerShell.Core/About/about_Switch.md)
- [about_If](Microsoft.PowerShell.Core/About/about_If.md)
- [about_Try_Catch_Finally](Microsoft.PowerShell.Core/About/about_Try_Catch_Finally.md)
- [about_Data_Sections](Microsoft.PowerShell.Core/About/about_Data_Sections.md)
- [about_InlineScript](5.1\PSWorkflow\About\about_InlineScript.md)
- [about_Parallel](5.1\PSWorkflow\About\about_Parallel.md)
- [about_Pipelines](Microsoft.PowerShell.Core\About\about_Pipelines.md)
- [Everything about the `if` statement](deep-dives/everything-about-if.md)

根据语法定义，支持以下流程语句，除了基本的 if/for/foreach/try/catch 等，还有 Workflow 支持的 parallel/sequence 等：

```yaml
statement-block:
    new-lines~opt~ { statement-list~opt~ new-lines~opt~ }

statement-list:
    statement
    statement-list statement

statement:
    if-statement
    label~opt~ labeled-statement
    function-statement
    flow-control-statement statement-terminator
    trap-statement
    try-statement
    data-statement
    inlinescript-statement
    parallel-statement
    sequence-statement
    pipeline statement-terminator

statement-terminator:
    ;
    new-line-character

flow-control-statement:
    break label-expression~opt~
    continue label-expression~opt~
    throw pipeline~opt~
    return pipeline~opt~
    exit pipeline~opt~

label-expression:
    simple-name
    unary-expression
```

流程控制，条件、开关、循环语句：

```sh
$grade = 92
if ($grade -ge 90) { "Grade A" }
elseif ($grade -ge 80) { "Grade B" }
elseif ($grade -ge 70) { "Grade C" }
elseif ($grade -ge 60) { "Grade D" }
else { "Grade F" }

if (Test-Connection -ComputerName $servers[0] -Quiet -Count 1) {
    Get-Content -Path "\\$($servers[0])\c$\App_configuration.txt"
} else {
    Write-Error -Message "The server $($servers[0]) is not responding!"
}
# Listing 4-4: Using the else statement to run code if the condition is not true

switch (expression) {
    expressionvalue {
        # Do something with code here.
    }
    expressionvalue {
    }
    default {
        # Stuff to do if no matches were found
    }
}
# Listing 4-6: Template for a switch statement

foreach ($server in $servers) {
    Get-Content -Path "\\$server\c$\App_configuration.txt"
}
# Listing 4-9: Using a foreach statement

$servers = @('SRV1','SRV2','SRV3','SRV4','SRV5')
ForEach-Object -InputObject $servers -Process {
    Get-Content -Path "\\$_\c$\App_configuration.txt"
}
# Listing 4-10: Using the ForEach-Object cmdlet

for ($i = 0; $i -lt 10; $i++) {
    $i
}
# Listing 4-12: A simple for loop

$counter = 0
while ($counter -lt 10) {
    $counter
    $counter++
}
# Listing 4-13: A simple counter using a while loop

do {
    $choice = Read-Host -Prompt 'What is the best programming language?'
} until ($choice -eq 'PowerShell')
Write-Host -Object 'Correct!'
# Listing 4-15: Using a do/until loop
```

### ===🗝 Break Continue Return
- [about_Break](microsoft.powershell.core/about/about_break.md)
- [about_Continue](microsoft.powershell.core/about/about_continue.md)
- [about_Return](microsoft.powershell.core/about/about_return.md)

流程控制 Break Continue Return 除了可以在循环结构、函数中使用，还可以在脚本中提前结束脚本的执行：

```sh
foreach( $i in (1..5)){
  echo "-->"; continue; echo $i
}
continue # exit script
echo It is this line dead code?

-->
-->
-->
-->
-->

foreach( $i in (1..5)){
  echo "-->"; break; echo $i
}

-->


foreach( $i in (1..5)){
  echo "-->"; return; echo $i
}

-->
```

### ===🗝 For For-Each Statement
- [about_For](microsoft.PowerShell.Core/About/about_For.md)
- [about_Foreach](microsoft.PowerShell.Core/About/about_Foreach.md)
- [ForEach-Object](Microsoft.PowerShell.Core\ForEach-Object.md)

注意 foreach 语句和 ForEach-Object 命令是两种不同的概念，虽然它们功能上一致，前者不可以使用 pipeline 作为输入。

使用 $foreach 自动变量控制循环，修改自定义对象成员属性或 Hashtable 数据：

```sh
$Array = 1,2,3,4,5
$pso = [PSCustomObject]@{1=0; 3=0; 5=0}
foreach ($t in $pso) { $t }
foreach ($t in $Array) { [void] $foreach.MoveNext(); $pso.$t = $foreach.Current }
$pso

# Expected Output:
1 3 5
- - -
2 4

$Array = 1,2,3,4,5
$Hash = @{}
foreach ($t in $Array) { [void] $foreach.MoveNext(); $Hash.$t = $foreach.Current }
$Hash

# Expected Output:
Name                           Value
----                           -----
5
3                              4
1                              2
```

注意，在脚本中使用 foreach 等价 ForEach-Object，而在类定义中使用则是 foreach 语句。

对象属性不能直接通过 foreach 枚举，需要通过 PSObject 获取属性后再操作，或者使用 Get-Member 命令获取属性：

```sh
$pso = [PSCustomObject]@{1=0; 3=0; 5=0}
foreach ($t in $pso.PSObject.Properties) { 
    Write-Host [iterator]==> $t.Name = $t.Value; 
}

$documents | Get-Member -MemberType Property | ForEach-Object {
    $_.Name
}
```


The following shows the `For` statement syntax.

```sh
# Syntax
for (<Init>; <Condition>; <Repeat>)
{
    <Statement list>
}
```

The `For` loop can also be written on one line as in the following example.

```sh
for ($i = 0; $i -lt 10; $i++) { Write-Host $i }
```


注意，foreach 的 % 这种使用管道的简写形式不支持使用 continue，它会打断循环，但可以使用 return 进入下一轮循环。

```sh
1..100 | ForEach-Object {
  if ($_ % 7 -ne 0 ) { return }
  Write-Host "$($_) is a multiple of 7"
}

foreach($_ in 1..100) {
  if ($_ % 7 -ne 0 ) { continue }
  Write-Host "$($_) is a multiple of 7"
}
```

I am not sure it's possible with an "automatic" variable. You can always declare one for yourself and increment it:

    $letters = { 'A', 'B', 'C' }
    $letters | % {$counter = 0}{...;$counter++}

Or use a for loop instead...

    for ($counter=0; $counter -lt $letters.Length; $counter++){...}

For PowerShell 3.0 and later, there is one built in :)

    foreach ($item in $array) {
        $array.IndexOf($item)
    }

    0..($letters.count-1) | foreach { "Value: {0}, Index: {1}" -f $letters[$_],$_}


### ===🗝 Switch Statement
- [about_Switch](microsoft.PowerShell.Core/About/about_Switch.md)
- [Everything about the switch statement](learn\deep-dives\everything-about-switch.md)

在 Switch 分支语句中使用正则表达式，或通配符，注意此时不需要在条件匹配中使用花括号：

```sh
$fileNames | ForEach-Object –Process {
    # switch -Wildcard ( $_ )
    switch –regex ($_) {
        'Index' { "Use index on: $_" }
        'Stats' { "Use stats on: $_" }
        'Backups' { "Use backups on: $_" }
        'Restores' { "Use restores on: $_" }
        'Checkdbs' { "Use checkdbs on: $_" }
        Default { "didn't match anything…" }
    };
};

$fileNames | ForEach-Object –Process {
    switch ($_) {
        {$_ -match 'Index'} { "Use index on: $_" }
        {$_ -match 'Stats'} { "Use stats on: $_" }
        {$_ -match 'Backups'} { "Use backups on: $_" }
        {$_ -match 'Restores'} { "Use restores on: $_" }
        {$_ -match 'Checkdbs'} { "Use checkdbs on: $_" }
        Default { "didn't match anything…" }
    };
};
```

Switch 可以使用数组来操作多个数据：

```sh
switch (1,4,-1,3,"Hello",2,1)
{
    {$_ -lt 0} { continue }
    {$_ -isnot [Int32]} { break }
    {$_ % 2} {
        "$_ is Odd"
    }
    {-not ($_ % 2)} {
        "$_ is Even"
    }
}
```

```Output
1 is Odd
4 is Even
3 is Odd
```


A little known feature of the switch statement is that it can process a file with the `-File`
parameter. You use `-file` with a path to a file instead of giving it a variable expression.

``` sh
switch -Wildcard -File $path
{
    'Error*'
    {
        Write-Error -Message $PSItem
    }
    'Warning*'
    {
        Write-Warning -Message $PSItem
    }
    default
    {
        Write-Output $PSItem
    }
}
```

在各个匹配块中，如果不使用 `continue` 可以有多个匹配的情况，使用它可以避免多重匹配。而使用 `break` 可以打断后续的其它数据处理。


### ===🗝 Try_Catch_Finally 
- [about_Try_Catch_Finally](Microsoft.PowerShell.Core/About/about_Try_Catch_Finally.md)
- [about_Throw](microsoft.powershell.core/about/about_Throw.md)
- [about_Trap](microsoft.powershell.core/about/about_Trap.md)
- [Everything about exceptions](deep-dives\everything-about-exceptions.md)

```sh
try {<statement list>}

catch [[<error type>][',' <error type>]*] {<statement list>}

finally {<statement list>}

throw [<expression>]

trap [[<error type>]] {<statement list>}
```

Use `try`, `catch`, and `finally` blocks to respond to or handle terminating
errors in scripts. The `Trap` statement can also be used to handle terminating
errors in scripts.

A terminating error stops a statement from running. If PowerShell does not
handle a terminating error in some way, PowerShell also stops running the
function or script using the current pipeline. In other languages, such as C\#,
terminating errors are referred to as exceptions.

In the following example, the function includes a nonsense string that causes
a runtime error.

```sh
function TrapTest {
    trap {"Error found."}
        nonsenseString
    echo $("#" * 80) # this line will be exectued
}

TrapTest
```

Use the `try` block to define a section of a script in which you want
PowerShell to monitor for errors. When an error occurs within the `try` block,
the error is first saved to the `$Error` automatic variable. PowerShell then
searches for a `catch` block to handle the error. If the `try` statement does
not have a matching `catch` block, PowerShell continues to search for an
appropriate `catch` block or `Trap` statement in the parent scopes. After a
`catch` block is completed or if no appropriate `catch` block or `Trap`
statement is found, the `finally` block is run. If the error cannot be handled,
the error is written to the error stream.

A `catch` block can include commands for tracking the error or for recovering
the expected flow of the script. A `catch` block can specify which error types
it catches. A `try` statement can include multiple `catch` blocks for different
kinds of errors.

A `finally` block can be used to free any resources that are no longer needed
by your script.

`try`, `catch`, and `finally` resemble the `try`, `catch`, and `finally`
keywords used in the C\# programming language.



## ⚡ Function
- [12. Atributes](https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-12)
- [A. Comment-Based Help](https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-14)
- [ 8. Statements](lang-spec/chapter-08.md)
- [ A. Comment-Based Help](lang-spec/chapter-14.md)
- [ B. Grammar](lang-spec/chapter-15.md)
- [about_Return](Microsoft.PowerShell.Core\About\about_Return.md)
- [about_Functions](Microsoft.PowerShell.Core\About\about_Functions.md)
- [about_Functions_Advanced](Microsoft.PowerShell.Core\About\about_Functions_Advanced.md).


函数语言规范参考，由文法定义可知函数定义有三种类型：

- 1 Function definitions
- 2 Filter functions
- 3 Workflow functions

```yaml
function-statement:
    function new-lines~opt~ function-name function-parameter-declaration~opt~ { script-block }
    filter new-lines~opt~ function-name function-parameter-declaration~opt~ { script-block }
    workflow new-lines~opt~ function-name function-parameter-declaration~opt~ { script-block }

function-name:
    command-argument

command-argument:
    command-name-expr

function-parameter-declaration:
    new-lines~opt~ ( parameter-list new-lines~opt~ )

parameter-list:
    script-parameter
    parameter-list new-lines~opt~ , script-parameter

script-parameter:
    new-lines~opt~ attribute-list~opt~ new-lines~opt~ variable script-parameter-default~opt~
    ...
```

带参数列表的函数定义与使用：

- 参数列表中可以指定参数的类型，多个参数使用逗号分隔；
- 调用函数时，传入参数不需要使用圆括号，也不使用逗号分隔参数；
- 注意，圆括号表示 ArrayList 数据类型；
- 函数的嵌套调用有点类似 LISP 语言使用圆括号，如 *fun1 (fun2 1 2 3)*；

```sh
function Get-Power ([long]$base, [int]$exponent) {
    $result = 1
    for ($i = 1; $i -le $exponent; ++$i) {
        $result *= $base
    }
    return $result
}
Get-Power 3 2

function Test-Args($list, $tag){
  echo "list = $list"
  echo "count = $($list.Count)"
  echo "tag = $tag"
  echo "==================="
}
Test-Args({1,2,3,4}, "ABC")
Test-Args {1,2,3,4}  "ABC"

# Expected Output:
9
list = 1,2,3,4 ABC
count = 2
tag = 
===================
list = 1,2,3,4
count = 1
tag = ABC
===================
```


使用自定义函数：

```sh
> function Install-Software { Write-Host 'I installed some software, Yippee!' }
> Install-Software
I installed some software, Yippee!
# Listing 6-2: Writing a message to the console with a simple function

function Install-Software {
    [CmdletBinding()]
    param(
        [Parameter()]
        [string] $Version = 2
        # Using a default value
    )
    Write-Host "I installed software version $Version. Yippee!"
}
# Listing 6-5: Creating a parameter
> Install-Software -Version 2
I installed software version 2. Yippee!

function Install-Software {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory)]
        [string]$Version
    )
    Write-Host "I installed software version $Version. Yippee!"
}
# Listing 6-7: Using a mandatory parameter
> Install-Software
cmdlet Install-Software at command pipeline position 1
Supply values for the following parameters:
Version:
```

函数中，可以使用 Functions CmdletBinding Attribute 传值。

这个功能从 Powershell Version 2 开始引入的，叫做函数的高级功能，在函数的声明出启用以后，可以调用通用参数：

    -Verbose
    -Debug
    -ErrorAction
    -WarningAction
    -ErrorVariable
    -WarningVariable
    -OutVariable
    -OutBuffer
    -PipeLineVariable

通过放在函数开始部分可以很简单的启用访问这些通用参数。

```sh
{
    [CmdletBinding(ConfirmImpact=<String>,
    DefaultParameterSetName=<String>,
    HelpURI=<URI>,
    SupportsPaging=<Boolean>,
    SupportsShouldProcess=<Boolean>,
    PositionalBinding=<Boolean>)]

    Param ($Parameter1)
    Begin{}
    Process{}
    End{}
}
```

示范 Verbose 信息：

```sh
Function Go-Verbose {

     [CmdletBinding()]
     Param()

     Write-Verbose "Alright, you prefer talkative functions. First of all, I appreciate your wish to learn more about the common parameter -Verbose. Secondly, blah blah.."

     Write-Host "This is self-explanatory, anyway."

}

Go-Verbose -Verbose
```

示范 Should Continue：

```sh
Function Remove-ByForce {

     [CmdletBinding(SupportsShouldProcess)]
     Param([String]$File)

     $ConfirmPreference = "Low"

     If ($PSCmdlet.ShouldContinue("Are you sure that you know what you are doing?","Delete with -Force parameter!")) { 
             Remove-Item $File -Force
     } Else { 
             "Mission aborted!"
     }
}

Remove-ByForce test
```

## ⚡ Paramerters & Attributes
- [12. Atributes](reference\docs-conceptual\lang-spec\chapter-12.md)
- [ValidateRangeAttribute](System.Management.Automation\engine\Attributes.cs)
- [Advanced Parameters](Microsoft.PowerShell.Core\About\about_Functions_Advanced_Parameters.md)
- [Parameter Attribute Declaration](cmdlet\parameter-attribute-declaration.md)
- [Parameter Sets](Microsoft.PowerShell.Core\About\about_Parameter_Sets.md)
- [ScriptBlocks](microsoft.powershell.core/about/about_script_blocks)
- [about_parameters](microsoft.powershell.core/about/about_parameters.md)
- [about_parameter_sets](microsoft.powershell.core/about/about_parameter_sets.md)
- [about_Parameters_Default_Values](microsoft.powershell.core/about/about_Parameters_Default_Values.md)

Comlet、函数、脚本块、脚本文件参数可以指定属性类型，参考源代码 [Attributes](System.Management.Automation\engine\Attributes.cs)，ParameterAttribute 提供参数基本属性设置，比如参数是否必需、是否是管道传入参数等，ValidateRangeAttribute 提供参数的取值范围验证，或者使用 AliasAttribute 给输入参数绑定别名：

```sh
  param
  (
    [Parameter(Mandatory,ValueFromPipeline,ValueFromPipelineByPropertyName)]
    # define property names
    [Alias('DisplayName','Text')]
    # allow string arrays:
    [string[]]
    $Name,

    [ValidateRange(-10,10)]
    [int]
    $Speed = 0
  )
```

当定义 *PARAM()* 参数列表后，自动变量 `$args` 就会失效，不能用来访问参数。

PowerShell 使用 `ParameterSetName` 来给参数指定参数集，函数可以针对不同的场景使用不同的参数执行不同的操作，而这些参数可以根据不同的参数集进行分类。参数集允许您向用户公开不同的参数，以及，根据用户指定的参数返回不同的信息。一次只能使用一个参数集，不同参数集的参数互斥不能混合使用，使用 `DefaultParameterSetName` 设置默认的参数集。

另外，对于 Cmdlet 可以通过 `$PSDefaultParameterValues` 设置参数默认值，语法格式如下：

```sh
$PSDefaultParameterValues=@{"CmdletName:ParameterName"="DefaultValue"}
$PSDefaultParameterValues=@{ "CmdletName:ParameterName"={{ScriptBlock}} }
$PSDefaultParameterValues["Disabled"]=$True | $False
```


参数属性设置：

`Mandatory` ([System.Boolean](/dotnet/api/System.Boolean))
Optional named parameter. `True` indicates the cmdlet parameter is required. If a required parameter is not provided when the cmdlet is invoked, Windows PowerShell prompts the user for a parameter value. The default is `false`.

`ParameterSetName` ([System.String](/dotnet/api/System.String))
Optional named parameter. Specifies the parameter set that this cmdlet parameter belongs to. If no parameter set is specified, the parameter belongs to all parameter sets.

`Position` ([System.Int32](/dotnet/api/System.Int32))
Optional named parameter. Specifies the position of the parameter within a Windows PowerShell command.

`ValueFromPipeline` ([System.Boolean](/dotnet/api/System.Boolean))
Optional named parameter. `True` indicates that the cmdlet parameter takes its value from a pipeline object. Specify this keyword if the cmdlet accesses the complete object, not just a property of the object. The default is `false`.

`ValueFromPipelineByPropertyName` ([System.Boolean](/dotnet/api/System.Boolean))
Optional named parameter. `True` indicates that the cmdlet parameter takes its value from a property of a pipeline object that has either the same name or the same alias as this parameter. For example, if the cmdlet has a `Name` parameter and the pipeline object also has a `Name` property, the value of the `Name` property is assigned to the `Name` parameter of the cmdlet. The default is `false`.

`ValueFromRemainingArguments` ([System.Boolean](/dotnet/api/System.Boolean))
Optional named parameter. `True` indicates that the cmdlet parameter accepts all remaining arguments that are passed to the cmdlet. The default is `false`.

`HelpMessage`
Optional named parameter. Specifies a short description of the parameter. Windows PowerShell displays this message when a cmdlet is run and a mandatory parameter is not specified.

`HelpMessageBaseName`
Optional named parameter. Specifies the location where resource identifiers reside. For example, this parameter could specify a resource assembly that contains Help messages that you want to localize.

`HelpMessageResourceId`
Optional named parameter.Specifies the resource identifier for a Help message.


### ===🗝 HelpMessage & Comment Based Help
- [about Comment Based Help](Microsoft.PowerShell.Core\About\about_Comment_Based_Help.md)

The `HelpMessage` argument specifies a string that contains a brief description
of the parameter or its value. PowerShell displays this message in the prompt
that appears when a mandatory parameter value is missing from a command. This
argument has no effect on optional parameters.

The following example declares a mandatory **ComputerName** parameter and a
help message that explains the expected parameter value.

If there is no other [comment-based help](./about_comment_based_help.md) syntax
for the function (for example, `.SYNOPSIS`) then this message also shows up in
`Get-Help` output.

```sh
Param(
    [Parameter(Mandatory,
    HelpMessage="Enter one or more computer names separated by commas.")]
    [string[]]
    $ComputerName
)
```

The syntax for comment-based help is as follows:

```sh
# .<help keyword>
# <help content>
```

or

```sh
<#
.<help keyword>
<help content>
#>
```

For example, the `.Description` keyword precedes a description of a function or
script.

```sh
<#
.Description
Get-Function displays the name and syntax of all functions in the session.
#>
```

The comment block must contain at least one keyword. Some of the keywords,
such as `.EXAMPLE`, can appear many times in the same comment block. The help
content for each keyword begins on the line after the keyword and can span
multiple lines.


Comment-based help keywords

    .SYNOPSIS
    .DESCRIPTION
    .PARAMETER
    .EXAMPLE
    .INPUTS
    .OUTPUTS
    .NOTES
    .LINK
    .COMPONENT
    .ROLE
    .FUNCTIONALITY
    .FORWARDHELPTARGETNAME
    .FORWARDHELPCATEGORY
    .REMOTEHELPRUNSPACE
    .EXTERNALHELP

Comment-based help for a function can appear in one of three locations:

- At the beginning of the function body.
- At the end of the function body.
- Before the `function` keyword. There cannot be more than one blank line
  between the last line of the function help and the `function` keyword.


### ===🗝 Parameter Example

The following example function counts the number lines, characters, and words
in a text file. Using parameters, you can specify which values you want
returned and which files you want to measure. There are four parameter sets
defined:

- Path
- PathAll
- LiteralPath
- LiteralPathAll

Each parameter set must have a unique parameter or a unique combination of
parameters. The `Path` and `PathAll` parameter sets are very similar but the
**All** parameter is unique to the `PathAll` parameter set. The same is true
with the `LiteralPath` and `LiteralPathAll` parameter sets. Even though the
`PathAll` and `LiteralPathAll` parameter sets both have the **All** parameter,
the **Path** and **LiteralPath** parameters differentiate them.

```sh
function Measure-Lines {
    [CmdletBinding(DefaultParameterSetName = 'Path')]
    param (
        [Parameter(Mandatory = $true,
            ParameterSetName = 'Path',
            HelpMessage = 'Enter one or more filenames',
            Position = 0)]
        [Parameter(Mandatory = $true,
            ParameterSetName = 'PathAll',
            Position = 0)]
        [string[]]$Path,

        [Parameter(Mandatory = $true, ParameterSetName = 'LiteralPathAll')]
        [Parameter(Mandatory = $true,
            ParameterSetName = 'LiteralPath',
            HelpMessage = 'Enter a single filename',
            ValueFromPipeline = $true)]
        [string]$LiteralPath,

        [Parameter(ParameterSetName = 'Path')]
        [Parameter(ParameterSetName = 'LiteralPath')]
        [switch]$Lines,

        [Parameter(ParameterSetName = 'Path')]
        [Parameter(ParameterSetName = 'LiteralPath')]
        [switch]$Words,

        [Parameter(ParameterSetName = 'Path')]
        [Parameter(ParameterSetName = 'LiteralPath')]
        [switch]$Characters,

        [Parameter(Mandatory = $true, ParameterSetName = 'PathAll')]
        [Parameter(Mandatory = $true, ParameterSetName = 'LiteralPathAll')]
        [switch]$All,

        [Parameter(ParameterSetName = 'Path')]
        [Parameter(ParameterSetName = 'PathAll')]
        [switch]$Recurse
    )

    begin {
        if ($All) {
            $Lines = $Words = $Characters = $true
        }
        elseif (($Words -eq $false) -and ($Characters -eq $false)) {
            $Lines = $true
        }

        if ($Path) {
            $Files = Get-ChildItem -Path $Path -Recurse:$Recurse
        }
        else {
            $Files = Get-ChildItem -LiteralPath $LiteralPath
        }
    }
    process {
        foreach ($file in $Files) {
            $result = [ordered]@{ }
            $result.Add('File', $file.fullname)

            $content = Get-Content -LiteralPath $file.fullname

            if ($Lines) { $result.Add('Lines', $content.Length) }

            if ($Words) {
                $wc = 0
                foreach ($line in $content) { $wc += $line.split(' ').Length }
                $result.Add('Words', $wc)
            }

            if ($Characters) {
                $cc = 0
                foreach ($line in $content) { $cc += $line.Length }
                $result.Add('Characters', $cc)
            }

            New-Object -TypeName psobject -Property $result
        }
    }
}
```


Use `Get-Command -Syntax` shows you the syntax of each parameter set. However
it does not show the name of the parameter set. The following example shows
which parameters can be used in each parameter set.

```sh
(Get-Command Measure-Lines).ParameterSets |
  Select-Object -Property @{n='ParameterSetName';e={$_.name}},
    @{n='Parameters';e={$_.ToString()}}

# Output
ParameterSetName Parameters
---------------- ----------
Path             [-Path] <string[]> [-Lines] [-Words] [-Characters] [-Recurse] [<CommonParameters>]
PathAll          [-Path] <string[]> -All [-Recurse] [<CommonParameters>]
LiteralPath      -LiteralPath <string> [-Lines] [-Words] [-Characters] [<CommonParameters>]
LiteralPathAll   -LiteralPath <string> -All [<CommonParameters>]
```

## ⚡ Scopes
- [about_Scopes](microsoft.powershell.core/about/about_Scopes.md)

PowerShell 支持三种作用域：

- *Global*: The scope that is in effect when PowerShell starts or when you create
  a new session or runspace. Variables and functions that are present when
  PowerShell starts have been created in the global scope, such as automatic
  variables and preference variables. The variables, aliases, and functions in
  your PowerShell profiles are also created in the global scope. The global
  scope is the root parent scope in a session.

- *Local*: The current scope. The local scope can be the global scope or any
  other scope.

- *Script*: The scope that is created while a script file runs. Only the commands
  in the script run in the script scope. To the commands in a script, the
  script scope is the local scope.
  
The following are the basic rules of scope:

- *Scopes may nest*. An outer scope is referred to as a parent scope. Any nested
  scopes are child scopes of that parent.

- An item is visible in the scope in which it was created and in any child
  scopes, unless you explicitly make it private.

- You can declare variables, aliases, functions, and PowerShell drives in a
  scope outside of the current scope.

- An item that you created within a scope can be changed only in the scope in
  which it was created, unless you explicitly specify a different scope.


A variable, alias, or function name can include any one of the following
optional scope modifiers:

- `global:` - Specifies that the name exists in the **Global** scope.
- `local:` - Specifies that the name exists in the **Local** scope. The current
  scope is always the **Local** scope.
- `private:` - Specifies that the name is **Private** and only visible to the
  current scope.
- `script:` - Specifies that the name exists in the **Script** scope.
  **Script** scope is the nearest ancestor script file's scope or **Global** if
  there is no nearest ancestor script file.
- `using:` - Used to access variables defined in another scope while running
  scripts via cmdlets like `Start-Job` and `Invoke-Command`.
- `workflow:` - Specifies that the name exists within a workflow. Note:
  Workflows are not supported in PowerShell v6 and higher.
- `<variable-namespace>` - A modifier created by a PowerShell PSDrive provider.
  For example:

  |  Namespace  |                    Description                     |
  | ----------- | -------------------------------------------------- |
  | `Alias:`    | Aliases defined in the current scope               |
  | `Env:`      | Environment variables defined in the current scope |
  | `Function:` | Functions defined in the current scope             |
  | `Variable:` | Variables defined in the current scope             |

The default scope for scripts is the script scope. The default scope for
functions and aliases is the local scope, even if they are defined in a
script.


Using scope modifiers

```sh
# The syntax for a scope modifier in a variable is:
$[<scope-modifier>:]<name> = <value>

# The syntax for a scope modifier in a function is:
function [<scope-modifier>:]<name> {<function-body>}

# creates a variable in the current or **local** scope:
$a = "one"

# To create the same variable in the **global** scope:
$global:a = "one"

# To create the same variable in the **script** scope:
$script:a = "one"

# To create a scope modifier with functions:
function global:Hello {
  Write-Host "Hello, World"
}

# Use scope modifiers to refer to a variable in a different scope.
# first in the local scope and then in the global scope:
$test
$global:test
```

## ⚡ ScriptBlocks
- [ScriptBlocks](Microsoft.PowerShell.Core\About\about_Script_Blocks.md)
- [about_Return](Microsoft.PowerShell.Core\About\about_Return.md)
- [about_Functions](Microsoft.PowerShell.Core\About\about_Functions.md)
- [about_Functions_Advanced](Microsoft.PowerShell.Core\About\about_Functions_Advanced.md).
- [about_Providers](about_Providers.md)
- [about_Automatic_Variables](about_Automatic_Variables.md)
- [PowerShell Test Code](test\perf\benchmarks\Engine.ScriptBlock.cs)
- [PowerShell Source](src\System.Management.Automation\engine\lang\scriptblock.cs)
- [Invoke-Command](Microsoft.PowerShell.Core/Invoke-Command.md)
- [Invoke-Expression](Microsoft.PowerShell.Utility/Invoke-Expression.md)
- [Rename-Item](Microsoft.PowerShell.Management/Rename-Item.md)
- [RenameItemCommand](Microsoft.PowerShell.Commands.Management\commands\management\Navigation.cs)
- [SpecialVariables](src\System.Management.Automation\engine\SpecialVariables.cs)
- [Advanced Parameters](Microsoft.PowerShell.Core\About\about_Functions_Advanced_Parameters.md)
- [Parameter Attribute Declaration](cmdlet\parameter-attribute-declaration.md)

脚本通常指脚本文件，但是 PowerShell 还有一个脚本块的概念，ScriptBlocks，即使用花括号包括的脚本，和函数非常类似。

并且，通过 Function Provider 可以将函数转换为 ScriptBlock，以下可以演示函数是如何被转换为脚本块的：

```sh
function hi($msg){ echo "Hi! $msg"; }
&$function:hi ABC
$function:hi

# Output:
Hi! ABC
param($msg)
 echo "Hi! $msg"; 
```

脚本块可以使用传递给其它命令使用，也可以使用 Invoke()、InvokeWithContext()、InvokeWithPipe() 方法执行脚本块，例如 `Invoke-Command` 命令。

```C#
// System.Collections.ObjectModel.Collection[psobject] Invoke(Params System.Object[] args)
public Collection<PSObject> Invoke(params object[] args) =>
    DoInvoke(dollarUnder: AutomationNull.Value, input: AutomationNull.Value, args);
```

After the function receives all the objects in the pipeline, the `End`
statement list runs one time. If no `Begin`, `Process`, or `End` keywords
are used, all the statements are treated like an `End` statement list.


以下以文件重命令操作为例，先使用 dir 命令获取文件信息，数据进入管道后再交给 Rename 命令处理，-NewName 参数接收一个脚本块，*ValueFromPipeline = True*。它还可以从管道中接收旧文件名，并且需要产生一个新的文件名输出到管道，即 *Echo $_* 这里，它直接返回原文件名。注意脚本块中使用 Write-Host 产生的输出直接到控制台，而不是到管道。

Invoke-Command 命令也可以通过 -ScriptBlock 接收脚本块，并通过 -ArgumentList 给脚本块传入参数，通过 -InputObject 给脚本块传递输入对象，脚本块中使用 $Input 获取。

```sh
$block = { 
    PARAM (
        [Parameter(ValueFromPipeline,ValueFromPipelineByPropertyName)]
        [Object]$_
    ) 
    Process{ echo "PSItem: [$args] [$_] [$input]" $_}
}

Invoke-Command -ScriptBlock $block -ArgumentList "Arguments","List" -InputObject "INPUT"

"Pipeline","Data" | Invoke-Command
"Pipeline","Data" | Rename-Item -Newname {echo $_}

> (dir .).Name | Rename-Item -Newname {Write-Host "OldName: $input ==> NewName: $_"; Echo $_}

old name: Chapter_01.pdf ==> new name: Chapter_01.pdf
old name: download.ps1 ==> new name: download.ps1

> Invoke-Command -ScriptBlock { echo "[$args] [$_] [$input]" $_ } -ArgumentList "Args","List" -InputObject "INPUT"

[Args List] [] [INPUT]
```

因为命令中太经常使用管道来传递数据，所以在自动变量中 *SpecialVariables* 设置了 *$PSItem* 即 `$_` 来引用当前管道的数据对象。

以下脚本中，演示 `Invoke-Command` 命令是如何将接收到的参数传递给脚本块的：

- 其中 -InputObject 是可以从管道接收数据的参数，*ValueFromPipeline = True*，参考 (Function Advanced Parameters)；
- 在脚本块中通过 *$input* 自动变量来接收数据，注意，通常 $PSItem 自动变量引用管道的数据，例如 Rename-Item 就会给 -NewName 指定的脚本块自动设置好 $PSItem 为当前的文件名。

```sh
$block = { 
    PARAM (
        [Object]$Name,

        [Object]$Value,

        [Parameter(ValueFromPipeline,ValueFromPipelineByPropertyName)]
        [Object]$_
    )
    Process { 
        Write-Host "Test: Args:[$args] PSItem:[$_] Input:[$input]"
        Write-Host "Name: $Name"
        Write-Host "Value: $Value"
        Write-Host "PSItem: $_"
        # $MyInvocation
    }
}

$args = "Arguments", "List", "PIPE"
Invoke-Command -ScriptBlock $block -ArgumentList $args -InputObject "PipeInput"
"PipeInput" | Invoke-Command -ScriptBlock $block -ArgumentList $args
# $block.Invoke($args)

<#
Expected Output:

Test: Args:[] PSItem:[PIPE] Input:[PipeInput]
Name: Arguments
Value: List
PSItem: PIPE

Test: Args:[] PSItem:[PIPE] Input:[PipeInput]
Name: Arguments
Value: List
PSItem: PIPE
#>
```

将脚本块传递给 Start-Job 这些命令后，代码块的代码就会变成字符串，即使在接收代码块内设置了参数类型为 ScriptBlock 也不可以。

一个变通的方法是使用 Invoke-Expression 去调用由字符串构建出来的函数：

```sh
function hi(){ 123 }
$fun = ${function:hi}

# TypeName: System.Management.Automation.ScriptBlock
# $fun | Get-Member

$destScriptBlock = {
    param(
    [System.Management.Automation.ScriptBlock]$fun
    )
}

$code = @"
  Function Foo { $(Get-Command hi | Select -expand Definition) } 
"@
Invoke-Expression $code
Foo
```

另一个方法是使用 -InitializationScript 设置初始脚本块，里面定义的函数可以直接被调用，但是不能去调用外部的函数。即使期望通过 Get-Command 来获取外函数代码也不行，因为 ScriptBlock 是 **delay-bind**，在它被调用时才会去获取：

```sh
$url = "http://192.168.43.1:11024/sdcard/Android/data/tv.danmaku.bili/download/335346867/c_401962334/80/audio.m4s?cmd=file"

function hi($msg){ echo "Hi! $msg"; }

$download = {
  param(
    [String]$url,
    [Int]$id,
    [String]$code
    )

  # $code TypeName: System.String
  # Invoke-Expression $code
  # Foo

  echo "What is Bar?"
  $function:Bar

  # echo "args: $args"
  echo "download z$id.m4s from url: $url"; 
  # curl.exe -o z$id.m4s -L "$url" 
}

$code = @"
  Function Foo { $(Get-Command hi | Select -expand Definition) } 
"@

$initcode = {
  echo "Here is -InitializationScript"
  Function Bar { "$(Get-Command hi | Select -expand Definition)" } 
}


1..3 | % {
  $job = Start-Job -Name PShellJob -ScriptBlock $download -InitializationScript $initcode -ArgumentList $url, $_, $code
}

Get-Job | Format-Table
Get-Job | Wait-Job | Receive-Job
Get-Job | Remove-Job
```

以上方法都比较复杂而且混乱，简单的方法是使用 *Dot Source* 语法将脚本定义的函数符号添加到当前作用域，这样就可以直接调用到：

```sh
$date = Get-Date

function hello($id){
  echo "$date HELLO: $id"
}

$block = {
  function msg($id){
    echo "MSG: $id"
  }

  Start-Sleep 0.1
  echo "`$args = $args `$_ = $_"
  msg("`$_ is not visibled in Jobs or ThreadJobs")

  # Dot Source to add script to current scope
  . "./jobs.ps1" "DONE"

  hello "Dot Source"
  hello "see also: [about_Scripts](microsoft.powershell.core/about/about_Scripts.md)"
}

function PrintSection($msg){
  Write-Host ""
  Write-Host ("=" * 40) -ForegroundColor Blue  
  Write-Host ($msg): -ForegroundColor Blue
}

PrintSection ArgumentList
  $args
PrintSection MyInvocation
  $MyInvocation

if ($args[0] -ne "DONE")
{
  0..1 | % -ThrottleLimit 4 -Parallel $block
}
```

以下脚本可以检测脚本的不同的运行状态，是通过 *Dot Source* 还是 Import-Module 都有办法检测到，当前环境导入模块后，再次导入不会执行，需要 Remove-Module 后再导入：

```sh
# Don't remove this very fist line which to dectect import-module
PARAM([String]$sentinal)

$isDotSource = $MyInvocation.Line.StartsWith(". ")
$isImported = $MyInvocation.Line.StartsWith("# ")

echo "sentinal: $sentinal"
if ($isDotSource){ Echo "Dot Source" }
if ($isImported){ Echo "Import-Module" }

# Test Command:
# Import-Module testMyinvocation.ps1 -ArgumentList $true
# . testMyinvocation.ps1 $true
```

A script block returns the output of all the commands in the script block,
either as a single object or as an array.

You can also specify a return value using the `return` keyword. The `return`
keyword does not affect or suppress other output returned from your script
block. However, the `return` keyword exits the script block at that line.

Like functions, a script block can include parameters. Use the Param
keyword to assign named parameters, as shown in the following syntax:

```sh
{
    Param([type]$Parameter1 [,[type]$Parameter2])
    <statement list>
}
```

Like functions, script blocks can include the `DynamicParam`, `Begin`,
`Process`, and `End` keywords. 

大多数命令都可以传入并使用脚本块，脚本块也可以单独使用。

A typed parameter that accepts pipeline input (`by Value`) or
(`by PropertyName`) enables use of **delay-bind** script blocks on the parameter.
Within the **delay-bind** script block, you can reference the piped in object
using the pipeline variable `$_`.

```sh
# rename file and the newname offer from scriptblock
dir config.log | Rename-Item -NewName {"old_" + $_.Name}

$newname = {"old_" + $_.Name}
dir some.m4s | Rename-Item -NewName $newname

$a ={ param($p1, $p2)
"p1: $p1"
"p2: $p2"
}

# call scriptblock
&$a -p2 "First" -p1 "Second"
```
HKL￥ mMii

直接使用 [System.Management.Automation.ScriptBlock] 静态方法从字符串创建脚本块：

```sh
# Create your own scriptblock without argument
$NewScriptBlock = [scriptblock]::Create("Get-ChildItem")
# Executing the scriptblock
$NewScriptBlock.Invoke()
# It also can be reused, example with Invoke-Command
Invoke-Command -ScriptBlock $NewScriptBlock
```

Notes on **delay-bind** script blocks as parameters:

- You must explicitly specify any parameter names you use with **delay-bind**
  script blocks.
- The parameter must not be untyped, and the parameter's type cannot be
  `[scriptblock]` or `[object]`.
- You receive an error if you use a **delay-bind** script block without
  providing pipeline input.

```sh
> Rename-Item -NewName {$_.Name + ".old"}

# Output
Rename-Item : Cannot evaluate parameter 'NewName' because its argument is
specified as a script block and there is no input. A script block cannot
be evaluated without input.
At line:1 char:23
+  Rename-Item -NewName {$_.Name + ".old"}
+                       ~~~~~~~~~~~~~~~~~~
  + CategoryInfo          : MetadataError: (:) [Rename-Item],
    ParameterBindingException
  + FullyQualifiedErrorId : ScriptBlockArgumentNoInput,
    Microsoft.PowerShell.Commands.RenameItemCommand
```

可以给脚本文件、函数、Cmdlet 或模块设置帮助信息，并且通过 help 命令查询帮助信息内容，但脚本块不可以。


## ⚡ Scripts & Arguments
- [about_Scripts](microsoft.powershell.core/about/about_Scripts.md)
- [about_Script_Internationalization](about/about_Script_Internationalization.md)
- [about_Scopes](microsoft.powershell.core/about/about_Scopes.md)
- [about_Modules](microsoft.powershell.core/about/about_Modules.md)
- Windows PowerShell: Writing Cmdlets in Script https://docs.microsoft.com/en-us/previous-versions/technet-magazine/ff677563

脚本可以定义多个函数，并作为函数库来使用，可以按模块的方式来组织脚本，或者将函数设置到 Profile 启动脚本中。

还可以使用 *Dot Source* 来加载脚本中的符号到当前作用域，以下假设在脚本文件中定义了一个 `New-Profile`
函数和 `$ProfileName` 变量，通过打点代码 *Dot Source* 来加载脚本，就可以当作脚本库来使用它：

```sh
#In UtilityFunctions.ps1
function New-Profile
{
  Write-Host "Running New-Profile function"
  $profileName = split-path $profile -leaf

  if (test-path $profile)
    {write-error "Profile $profileName already exists on this computer."}
  else
    {new-item -type file -path $profile -force }
}

# Dot Source
C:\PS> . .\UtilityFunctions.ps1

C:\PS> New-Profile

    Directory: C:\Users\juneb\Documents\WindowsPowerShell

    Mode    LastWriteTime     Length Name
    ----    -------------     ------ ----
    -a---   1/14/2009 3:08 PM      0 Microsoft.PowerShellISE_profile.ps1

C:\PS> $profileName
Microsoft.PowerShellISE_profile.ps1
```


解释传入脚本的参数，并尝试转换为数值，如果没有传入参数会转换得到 0：

```sh
$len = $args.Length
echo @"
ARGS LEN: $len
ARGS: $args
"@

try{
    echo "Try type-casting args[0] to be a number:"
    $limit = [int]$args[0]
    $limit
}catch{
    echo "It is Not a Number"
}
```

要将 $args 二次传递给其它脚本，如果直接将 $args 写在脚本名后面，会被转换成 "System.Object[]" 即会被转型为类型字符串表达。

如果，参数只是简单的字符串，有一个简单的方法，使用一个变量保存 System.Object[] 类型的脚本参数，如下 *$newargs*，再通过它来给其它脚本传递参数，还可以使用 param 进行参数验证：

```sh
# some.ps1
param(
    [string]$URL=$(throw "Parameter missing: -URL urlstring"),
    [int]$Limit=$(throw "Parameter missing: -Limt a number")
)
echo @"
    URL = $URL
    Limit=$Limit
"@

# Test some.ps1
> some.ps1 -Limit 10 -URL some_url_string

echo "args: $args"
$newargs = "$args"
dir -Directory |% {echo $_; cd $_; ..\Download.ps1 $newargs; cd.. }
```


脚本定义函数与执行：

```sh
> function New-Thing {
    param()
    Write-Host "Hi! I am in New-Thing"
}
> New-Thing
Hi! I am in New-Thing

# Creating and executing a scriptblock
> $newThing = { Write-Host "Hi! I am in a scriptblock!" }
> & $newThing
Hi! I am in a scriptblock!
```


Other script features

PowerShell has many useful features that you can use in scripts.

- `#Requires` - You can use a `#Requires` statement to prevent a script from
  running without specified modules or snap-ins and a specified version of
  PowerShell. For more information, see [about_Requires](about_Requires.md).

- `$PSCommandPath` - Contains the full path and name of the script that is
  being run. This parameter is valid in all scripts. This automatic variable is
  introduced in PowerShell 3.0.

- `$PSScriptRoot` - Contains the directory from which a script is being run. In
  PowerShell 2.0, this variable is valid only in script modules (`.psm1`).
  Beginning in PowerShell 3.0, it is valid in all scripts.

- `$MyInvocation` - The `$MyInvocation` automatic variable contains information
  about the current script, including information about how it was started or
  "invoked." You can use this variable and its properties to get information
  about the script while it is running. For example, the
  `$MyInvocation`.MyCommand.Path variable contains the path and filename of the
  script. `$MyInvocation`.Line contains the command that started the script,
  including all parameters and values.

  Beginning in PowerShell 3.0, `$MyInvocation` has two new properties that
  provide information about the script that called or invoked the current
  script. The values of these properties are populated only when the invoker or
  caller is a script.

  - **PSCommandPath** contains the full path and name of the script that called or
    invoked the current script.

  - **PSScriptRoot** contains the directory of the script that called or invoked
    the current script.

  Unlike the `$PSCommandPath` and `$PSScriptRoot` automatic variables, which
  contain information about the current script, the **PSCommandPath** and
  **PSScriptRoot** properties of the `$MyInvocation` variable contain
  information about the script that called the current script.

- Data sections - You can use the `Data` keyword to separate data from logic in
  scripts. Data sections can also make localization easier. For more
  information, see [about_Data_Sections](about_Data_Sections.md) and
  [about_Script_Internationalization](about_Script_Internationalization.md).

- Script Signing - You can add a digital signature to a script. Depending on
  the execution policy, you can use digital signatures to restrict the running
  of scripts that could include unsafe commands. For more information, see
  [about_Execution_Policies](about_Execution_Policies.md) and
  [about_Signing](about_Signing.md).



Using *Invoke-Command* or *New-PSSession* to Execute Code on Remote Systems.

```sh
> Invoke-Command
cmdlet Invoke-Command at command pipeline position 1
Supply values for the following parameters:
ScriptBlock:
# Listing 8-5: Running Invoke-Command with no parameters

> Invoke-Command {Write-Host "Echo Hi!"}
echo Hi!

# Run remote script:
# computer WEBSRV1 have to be part of the same Active Directory (AD) domain,
# and current machine needs to have admin rights on WEBSRV1.
> Invoke-Command -ScriptBlock { hostname } -ComputerName WEBSRV1

# Running Local Scripts on Remote Computers
> Invoke-Command -ComputerName WEBSRV1 -FilePath C:\GetHostName.ps1
WEBSRV1
# Listing 8-7: Running a local script on remote computers

> Invoke-Command -ComputerName WEBSRV1 -ScriptBlock { Write-Host "The value of foo is $serverFilePath" }
The value of foo is
# Listing 8-8: Local variables do not work in remote sessions.

# Passing Variables with the ArgumentList Parameter
> Invoke-Command -ComputerName WEBSRV1 -ScriptBlock { Write-Host "The value of foo is $($args[0])" } -ArgumentList $serverFilePath
The value of foo is C:\File.txt

> New-PSSession -ComputerName WEBSRV1
Id Name ComputerName ComputerType State ConfigurationName Availability
-- ---- ------------ ------------ ----- ----------------- ------------
3 WinRM3 WEBSRV1 RemoteMachine Opened Microsoft.PowerShell Available
# Listing 8-11: Creating a new PSSession

> $session = Get-PSSession
> $session
Id Name ComputerName ComputerType State ConfigurationName Availability
-- ---- ------------ ------------ ----- ----------------- ------------
6 WinRM6 WEBSRV1 RemoteMachine Opened Microsoft.PowerShell Available
# Listing 8-12: Finding sessions created on the local computer

> Invoke-Command -Session $session -ScriptBlock { hostname }
WEBSRV1
# Listing 8-13: Using an existing session to invoke commands on a remote computer

> Invoke-Command -Session $session -ScriptBlock { $foo = 'Please be here next time' }
> Invoke-Command -Session $session -ScriptBlock { $foo }
Please be here next time
# Listing 8-14: Variable values remain over subsequent session connections.
```

## ==⚡ Hosting
- [Windows PowerShell Host Quickstart](hosting\windows-powershell-host-quickstart.md)
- System.Management.Automation\engine\hostifaces\RunspacePool.cs

创建 PowerShell 脚本宿主来运行脚本：

```sh
$ps = [PowerShell]::Create()
$ps.AddScript("dir c:/videos")
$ps.Invoke()
$ps.Dispose()
```

## ⚡ Start-Job Async & Parallel
- https://devblogs.microsoft.com/powershell/powershell-foreach-object-parallel-feature/
- https://triveniglobalsoft.com/parallel-processing-with-powershell/
- [PowerShell Docs - About jobs](Microsoft.PowerShell.Core\About\about_Jobs.md)
- [about_Job_Details](Microsoft.PowerShell.Core\About\about_Job_Details.md)
- [about_Remote](Microsoft.PowerShell.Core\About\about_Remote.md)
- [about_Remote_Variables](Microsoft.PowerShell.Core\About\about_Remote_Variables.md)
- [Invoke-Command](Microsoft.PowerShell.Core\Invoke-Command.md)
- [Get-Job](Microsoft.PowerShell.Core\Get-Job.md)
- [Remove-Job](Microsoft.PowerShell.Core\Remove-Job.md)
- [Start-Job](Microsoft.PowerShell.Core\Start-Job.md)
- [Stop-Job](Microsoft.PowerShell.Core\Stop-Job.md)
- [Wait-Job](Microsoft.PowerShell.Core\Wait-Job.md)
- [Receive-Job](Microsoft.PowerShell.Core\Receive-Job.md)
- [Start-ThreadJob](7.0\ThreadJob\Start-ThreadJob.md)
- [ForEach-Object](Microsoft.PowerShell.Core\ForEach-Object.md)

*Start-Job* Starts a PowerShell background job.

*Invoke-Command* cmdlet to run a Start-Job command on the remote computer.

The job cmdlets

|Cmdlet          |Description                                            |
|----------------|-------------------------------------------------------|
|`Start-Job`     |Starts a background job on a local computer.           |
|`Get-Job`       |Gets the background jobs that were started in the      |
|                |current session.                                       |
|`Receive-Job`   |Gets the results of background jobs.                   |
|`Stop-Job`      |Stops a background job.                                |
|`Wait-Job`      |Suppresses the command prompt until one or all jobs are|
|                |complete.                                              |
|`Remove-Job`    |Deletes a background job.                              |
|`Invoke-Command`|The **AsJob** parameter creates a background job on a  |
|                |remote computer. You can use `Invoke-Command` to run   |
|                |any job command remotely, including `Start-Job`.       |

创建一个多线程工作，注意：

- Wait-Job 必需在接收数据前执行以等待数据已经准备好，发生 Timeout 的情况下没有返回 Jobs；
    - 注意，时间是整数，大于 0.5 会当作一秒看待，可以使用 Start-Sleep 来模块更短时间的等待；
- Receive-Job 会自动移除已经完成的任务，如果和 Wait-Job -Timeout 管道连接使用会导致数据丢失；
    - 和 *Get-Job | Receive-Job* 通过管道连接接收当下的输出的数据，可以随时监测 Jobs 的状态；
    - 和 *Get-Job -State Completed | Receive-Job* 连接使用只接收使用已经完成的 Jobs 数据；
- Remove-Job 在接收完数据后依然要执行，否任务会在内存中保持；
- Job 代码块中可以返回任意数量的值，每个 echo 和直接输出到管道的数据都可以被捕获；
- `-Keep` 可以保持数据可以被重复捕获；

```sh
$code = {sleep $args[1]; echo "JOB: $args"; echo "EXTRA_DATA_$args"; }
1..100 | %{
  $sleep = ((Get-Random 10)/10)
  Write-Host "[JOB_$_T$sleep] " -NoNewline
  $jobs = Start-ThreadJob -ThrottleLimit 8 -ScriptBlock $code -ArgumentList $_,$sleep
}
Echo "Jobs ongoing"
$result = @{}
$jobs = (Get-Job).Count
while ($sum -lt $jobs){
  Get-Job | Wait-Job -Timeout 1
  $Completed = Get-Job -State Completed
  $sum = $Completed.Count
  echo "Has Jobs $sum/$jobs"
  # Get-Job | Wait-Job -Timeout 0.3 | Receive-Job | %{ 
  $Completed | Receive-Job | %{ 
    $result.Add($_, "Received")
  };
  # $Completed | remove-job
}
Get-Job | remove-job
$result | Format-Table
"$($result.Count) jobs data received."
```

创建一个工作分派器，$materials 为要处理的工作，直到它被 4 个 Jobs 进程处理完或者时间超出 $life 时结束，每个 Jobs 具体功由 $tasks 指定：

```sh
$id = 0
$result = @{}
$life = (Get-Date) + [TimeSpan]::FromSeconds(30)
$total = 0
$materials = [System.Collections.ArrayList](0..10)
$uri = "http://olympus.realpython.org/dice"
$tasks = @{
  "Task-A" = { (curl.exe $args[0] | Select-String -pattern ">(\d)<") -replace ".+>(\d)<.+","[Dice-$($args[1])-`$1]" }
  "Task-B" = { Sleep ((Get-Random 30)/10); "[DATA-B]" }
  "Task-C" = { Sleep ((Get-Random 50)/10); "[DATA-C]" }
  "Task-D" = { Sleep ((Get-Random 70)/10); "[DATA-D]" }
}
Get-Job | remove-job -Force
while ($life -gt (Get-Date) -and $materials.Count){
  $names = (Get-Job).Name
  foreach($task in $tasks.Keys){
    if ($task -in $names){ continue }
    if ($task -eq "Task-A"){
      $mat = $materials[0];
      $materials.RemoveAt(0)
    }
    $job = Start-Job -Name $task -ScriptBlock $tasks[$task] -ArgumentList $uri,$mat
    Write-Host "$task created! [$names]"
    $total += 1
  }
  $jobs = (Get-Job).Count
  $wait = Get-Job | Wait-Job -Timeout 1
  $Completed = Get-Job -State Completed
  echo "Has Jobs $($Completed.Count)/$jobs"
  $Completed | Receive-Job | %{ 
    $result.Add($id++, $_)
  };
  $Completed | remove-job
}

if ($left = Get-Job){
  $running = "$($left.Count) stil runing, "
  $left | Wait-Job -Timeout 5 | Receive-Job | %{ 
    $result.Add($id++, $_)
  };
  $left | remove-job
}
$result | Format-Table
"Total jobs: $total, $running$($result.Count) datas received."
```

PowerShell currently supports parallelism in three main categories.

1. PowerShell *remoting*. Here PowerShell sends script to external machines to run, using PowerShell’s remoting system.
2. PowerShell *jobs*. This is the same as remoting except that script is run in separate processes on the local machine, rather than on external machines.
3. PowerShell *runspaces*. Here script is run on the local machine within the same process but on separate threads.

This new feature uses the third method for running scripts in parallel. It has the least overhead of the other two methods and does not use the PowerShell remoting system. So it is generally much faster than the other two methods.

PowerShell 中要高效执行任务脚本，现在通常使用 Runspace，效率很高；任务比较多时，用 Runspace pool 来执行异步操作，可以控制资源池数量，就像 C# 中的线程池一样。runspace 使用的频率越来越高，由于他的高效率，基本上很多时候已经取代了传统的 Job 后台操作。

PowerShell 3.0 引入 Jobs，是一种后台执行的任务，Background Jobs，通过创建新 PowerSHell 进程来执行，这是比较消耗系统资源的并发模型，但好处是在当前进行出现问题时，不影响其它进行的任务。

和 Invoke-Command 不同，Start-Job 是异步执行的，不会阻塞。 

PowerShell 6.0 引入 ThreadJob，多线程执行任务，创建线任务比创建进程要轻松，所以更快，但是缺点是在当前进行出现问题时，所以线程都会受到影响。

This is a thread based job. This is a lighter weight solution compared to Jobs. Unlike traditional PS Jobs which spawn a whole new host process for each running job, PS ThreadJobs run in multiple threads on the same process which vastly increases performance by lowering overhead.

There are a few drawbacks to using a ThreadJob over a background job. If a background job hangs, only that process hangs. All other jobs keep chugging away. If you have a job that hangs with ThreadJob the entire queue is affected.

PowerShell 7.0 可以设置 ForEach 以并行方式运行脚本块，这是更轻量的并发实现，可以指定并发数 ThrottleLimit：

```sh
# function msg(){ Echo "Output: $args" }
# $Message = $function:msg
# ForEach-Object -Parallel using variable cannot be a script block.
$Message = "Output:"
1..8 | ForEach-Object -Parallel {
    "$using:Message $_"
    Start-Sleep 0.1
} -ThrottleLimit 4
```

使用 Jobs 的基本流程，从创建、执行，等待作业完成，再到获取结果，最后还需要从工作空间中移除 Jobs 对象：

- *Start-Job*: Create and execute job.
- *Get-Job*: Get all jobs that are started with Start-Job cmd.
- *Wait-Job*: Wait for all jobs to complete.
- *Receive-Job*: To print output of job to console.
- *Remove-Job*: To delete all jobs that were created with Start-Job command.

```sh
# Start-Job: Create and execute job.
1..5 | % {Start-Job { echo "Hello" } }
# Parallel Processing Start Job
Get-Job | Wait-Job
# Parallel Processing Wait Job
Get-Job | Receive-Job
# Parallel Processing Receive Job
Get-Job | Remove-Job
# *Jobs created must be removed with this command.
```

使用并行 ForEach 或 Job、ThreadJob 注意，循环内部的脚本块不能方法脚本中的其它函数等符号定义。

ForeEach 并行脚本块可以访问管道 *$PSItem* 但不能使用 ArgumentsList 传递参数，需要通过 *$using:* Scope Modifier 引用外部符号，但是这种方式不支持函数符号，即不支持脚本块。

而 Job、ThreadJob 可以传递参数但脚本块内部访问不到 *$PSItem*。使用 ArgumentList 可以往脚本块内传递参数，使用逗号或圆括号，并通过 *$args* 获取。
使用 InputObject 可以信脚本块内传递输入对象，通过 *$input* 获取。

其它注意事项：

- 使用 Echo 输出的内容会被 Receive-Job 命令捕获，而 Write-Host 输出的内容直接到控制台，可以设置类型过滤处理。

    ```sh
    if($_.GetType() -eq [System.Management.Automation.PSCustomObject]){ ... }
    # Remove the property
    $MyCustomObject.PSObject.properties.remove('property')
    ```

- 如需要进行编码转换的操作，那么注意，Start-Job 会启动新的 PowerShell 进程，并且使用系统默认的编码方案设置，这意味着当前进程正确的输入、输出编码方案设置将不会被应用到新的进程，这很有可能导致 ConvertTo-Json 或 ConvertFrom-Json 这操作涉及编码转换的操作失败！

根据脚本块中输出的内容不同，会在结果中出现不同的数据，例如，使用 *Format-Table* 就会出现这些数据类型：FormatStartData、GroupStartData、FormatEntryData、GroupEndData、FormatEndData。

通过 Write-Host 输出流的数据直接到控制台输出，不会被捕捉到。


如下，hello 不能被访问：

```sh
function hello($id){
  echo "HELLO: $id"
}

$block = {
  function hi($id){
    echo "MSG: $id"
  }

  Start-Sleep 1
  echo "`$args = $args `$_ = $_"
  hi("PSItem is not visibled in ThreadJob")
  # hello($_) # is not recognized
}

0..3 | % -ThrottleLimit 4 -Parallel $block

1..5 | %{ 
  echo "each ===>: $_";
  $a = "a"
  Start-ThreadJob -ThrottleLimit 5 -ScriptBlock $block -ArgumentList $_,"more..."
}
Get-Job | Wait-Job | Receive-Job
Get-Job | Remove-Job -Force
```

在 ScriptBlock 中使用 param() 定义参数：

```sh
$block = {
  param(
    [String]$url,
    )
  # echo "args: $args"
}
```

通过 *Dot Source* 将脚本加载到当前作用域就可以解决不能访问脚本块外部符号的问题，通过传递类到脚本也是一种不错的解决方法：

- 创建一个 Transfer 并实例化后通过 -ArgumentList 传递到脚本块内部；
- 在 -ScriptBlock 指定的脚本块中，接收参数的类型设置为 Transfer 会出现类型转换错误，可以使用 Object 基类；
- 脚本普遍有多态能力，除标准静态成员访问方式 `[ClassName]::StaticMember`，还有 `$var::StaticMember`；
- 使用 *Dot Source* 加载脚本文件到当前作用域，以使用类形及符号，可以在初始化脚本中操作；
- 加载脚本意味执行它，Transfer 的静态成员的值会重新构建，所以在不同的运行空间上，它拥有不同的副本；
- 另外，要防止脚本文件循环加载，可以设置一个标志以避免死循环；

- 使用 *Start-Job* 会导致类实例不能被正确传递，Deserialized 结果会丢失类方法成员，需要变通在脚本块内部重新实例化处理；

```sh
Class Transfer {
  static [Object] $config = [PSCustomObject]@{
    Value = "Static Value: " + (Get-Date)
  }
  [String]$value

  Transfer([String]$v){
    $this.value = $v;
  }

  [String] Todo() {
    return "Todo: " + $this.value;
  }
}

$block = {
  PARAM(
    [int]$id,
    [Object]$it
    )
  Write-Host "ID: $id"
  Write-Host "IT: $it"
  Write-Host "What type is config? $($it::config)"
  $it.Todo()
  # Write-Host [$([Transfer]::config.Value)]
  Write-Host [$($it::config.Value)]
  Return "Value from ScriptBlock"
}

$init = {
  # Dot Source: add script to current scope
  # . "./jobs.ps1" DONE
  # Write-Host "Why is dead code here?"
}

$t = [Transfer]::new("ScriptBlock Test: $(Get-Date)")
Write-Host "" -NoNewline
Write-Host "Test" "$t" -BackgroundColor Yellow -ForegroundColor Black
[Console]::ResetColor()
$static = [Transfer]::config.Value
Write-Host $static
Start-Sleep .2


if ($args[0] -eq $null){
  Write-Host "Sentinal is null and go to run" $args[0]
  1..2 | % {
    Start-ThreadJob -ThrottleLimit 5 -InitializationScript $init -ScriptBlock $block -ArgumentList $_,$t
  }
}

# "Wait then receive result..."
$result = @{}
Get-Job | Wait-Job | Receive-Job | % { 
  # if ($_.GetType().Name -in "FormatStartData","GroupStartData","GroupEndData","FormatEndData")
  # if ($_.GetType().Name -in "String","FormatEntryData")
  { 
    $id = $result.Count
    $result.Add("$id-"+$_.GetType().Name, $_)
  }.Invoke()
}
Get-Job | Remove-Job -Force

$result|ft
$result.Values|ft
```

Performance test，按效率从低到高排序：

- 第一种，单线同步执行 ForEach，5 个任务理想状态合计 5s 时间；
- 第二种，创建进程执行 Job，5 个任务执行时间受到进程创建的影响较大；
- 第三种，使用 PowerShell 7.0 多单线执行 Job，5 个任务理想状态合计 1s 时间，但除去线程资源配置开销，不可能达到；
- 第四种，并行 ForEach 执行，5 个任务理想状态合计 1s 时间，比线程方式更节省资源，更优化；

```sh
#% -> ForEach-Object
Measure-Command {1..5 | % {Start-Sleep 1} } | Select-Object TotalSeconds
#Job
Measure-Command {1..5 | % {Start-Job {Start-Sleep 1}} | Wait-Job} | Select-Object TotalSeconds
#Thread Job
Measure-Command {1..5 | % {Start-ThreadJob -ThrottleLimit 5 {Start-Sleep 1}} | Wait-Job} | Select-Object TotalSeconds
#ForEach-Object Parallel
Measure-Command {1..5 | ForEach-Object -Parallel {Start-Sleep 1} -ThrottleLimit 5} | Select-Object TotalSeconds

TotalSeconds
------------
   5.0311368
   4.2587164
   1.4038681
   1.1093434
```

Powershell 是单线程程序且一次只能做一件事情，后台作业能额外增加并发处理能力。当需要程序同时运行且数据量不是很大时它能很好的解决问题。但从 Powershell 后台回传数据是一个非常麻烦的工作，它将浪费很多时间，并导致脚本更慢。

这里有 3 个并发执行任务：

```sh
$start = Get-Date
 
# get all hotfixes
$task1 = { Get-Hotfix }
 
# get all scripts in your profile
$task2 = { Get-Service | Where-Object Status -eq Running }
 
# parse log file
$task3 = { Get-Content -Path $env:windir\windowsupdate.log | Where-Object { $_ -like '*successfully installed*' } }
 
# run 2 tasks in the background, and 1 in the foreground task
$job1 =  Start-Job -ScriptBlock $task1
$job2 =  Start-Job -ScriptBlock $task2
$result3 = Invoke-Command -ScriptBlock $task3
 
# wait for the remaining tasks to complete (if not done yet)
$null = Wait-Job -Job $job1, $job2
 
# now they are done, get the results
$result1 = Receive-Job -Job $job1
$result2 = Receive-Job -Job $job2
 
# discard the jobs
Remove-Job -Job $job1, $job2
 
$end = Get-Date
Write-Host -ForegroundColor Red ($end - $start).TotalSeconds

# $result1 | Format-Table
# $result2 | FT
# $result3
```

上面执行全部的任务消耗了 5.9 秒。三个任务的结果将分别存入 $result1, $result2, 和 $result3.
让我们再继续查看相继在前台执行完命令需要多长时间：

```sh
$start = Get-Date
 
# get all hotfixes
$task1 = { Get-Hotfix }
 
# get all scripts in your profile
$task2 = { Get-Service | Where-Object Status -eq Running }
 
# parse log file
$task3 = { Get-Content -Path $env:windir\windowsupdate.log | Where-Object { $_ -like '*successfully installed*' } }
 
# run them all in the foreground:
$result1 = Invoke-Command -ScriptBlock $task1
$result2 = Invoke-Command -ScriptBlock $task2
$result3 = Invoke-Command -ScriptBlock $task3
 
$end = Get-Date
Write-Host -ForegroundColor Red ($end - $start).TotalSeconds
```

结果，这次只花费了 5.05 秒。与后台作业几乎同时完成，所以后台作业更适合解决长时间执行的任务。从三个任务返回的数据观察，好处是这种按顺数在前台获得数据能减少了执行过程的开销。


## ⚡ ThreadJob 多线程下载器
- [Progress while multi-threading](learn/deep-dives/write-progress-across-multiple-threads.md)


Displaying progress while multi-threading 文档演示了如何使用 synced hashtable 多线程同步对象来创建进度条，注意使用了 *$using:* 来引用外部符号：

```sh
# Create a hashtable for process.
# Keys should be ID's of the processes
$origin = @{}
$dataset | Foreach-Object {$origin.($_.id) = @{}}

# Create synced hashtable
$sync = [System.Collections.Hashtable]::Synchronized($origin)

$job = $dataset | Foreach-Object -ThrottleLimit 3 -AsJob -Parallel {
    $syncCopy = $using:sync
    $process = $syncCopy.$($PSItem.Id)

    $process.Id = $PSItem.Id
    $process.Activity = "Id $($PSItem.Id) starting"
    $process.Status = "Processing"

    # Fake workload start up that takes x amount of time to complete
    start-sleep -Milliseconds ($PSItem.wait*5)

    # Process. update activity
    $process.Activity = "Id $($PSItem.id) processing"
    foreach ($percent in 1..100)
    {
        # Update process on status
        $process.Status = "Handling $percent/100"
        $process.PercentComplete = (($percent / 100) * 100)

        # Fake workload that takes x amount of time to complete
        Start-Sleep -Milliseconds $PSItem.Wait
    }

    # Mark process as completed
    $process.Completed = $true
}
```

Programming Language Pragmatics by Michael L. Scott，这本书是讲解编译器语用论的，非常适合入门阅读，网站上提供了部分共享资源可以使用以下多线程睵脚本获取：

- 脚本中使用 Start-ThreadJob 创建多线程任务；
- 脚本中使用 `$MyInvocation.Line -NotLike "*=*"` 判断脚本运行状态，如果是赋值给变量跳过不必要的内容输出；


```sh
param([HashTable]$map, [String]$url)

function RemapName([String]$ori, [Object]$map){
  $type = $map.GetType()
  Switch ($type) {
    { $_ -eq [Boolean] } { $rename = $ori }
    { $_ -eq [String]  }
    {
      $rename = ($map -replace "{NAME}", $ori)
      $rename = ($rename -replace "{BASE}", $base)
      Write-Host "--> Rename:[STR]: [$ori] ==> [$rename]"
    } 
    { $_ -eq [ScriptBlock] }
    { 
      $rename = $map.invoke($ori)
      Write-Host "--> Rename:[SB]: [$ori] ==> [$rename]"
    }
    Default {
      Write-Host "No matches [$type]"
      $rename = $ori
    }
  }
  return $rename
}

function Download([Object]$work){
  [String]$name = $work["name"]
  [String]$url = $work["url"]
  $url = [System.Web.HttpUtility]::UrlPathEncode($url)
  if($name){
    curl.exe -L -o $name "$url"
  }else{
    curl.exe -L -O "$url"
  }
  # curl will be no progress write to stder if set --no-progress-meter
  # Invoke-WebRequest -OutFile $name -Uri "$url"
  if($LASTEXITCODE){
    return "Donwlod Error $name : $url"
  }else{
    return "Donwlod Completed $name : $url"
  }
}

function ReWriteProgress([System.Management.Automation.Job2]$Job)
{
  $b = $Job.Progress
  $a = $Job.ChildJobs[0].Progress
  $progress = $a ? $a : $b
  if($Progress -ne $null)
  {    $latest = $progress[-1];
    $config = @{
      ID = $job.Id
      Activity = $latest.Activity+" Rewrited";
      Status = $latest.StatusDescription;
      PercentComplete = $latest.PercentComplete;
      Complete = $false
    }
    $finished = $config.Status.StartsWith("Web request completed.")
    if ($config.PercentComplete -ge 100 -or $finished){
      $config.Complete = $true
    }
    Write-Progress @config
  }
}

# ParseCurlProgress("100  192k  100  192k    0     0  23691      0  0:00:08...")
function ParseCurlProgress([String]$progress){
  $reg = "(\d+) +(\d+)[k] +(\d+) +(\d+)[k].+"
  $json = '{"TP":$1, "Total":$2, "RP":$3, "Received":$4, "Unit":"KB"}'
  $json = $progress -replace $reg,$json
  if($json -ne $progress){
    return ConvertFrom-Json $json
  }else{
    return $false
  }
}

function StartJobs([System.Collections.ArrayList]$list, [ScriptBlock]$code, [int]$threads = 4){
  $result = [System.Collections.ArrayList]@()
  $done = 0
  $count = $list.Count
  Get-Job | Remove-Job -Force
  while($list.Count -or (Get-Job)){
    while ($list.Count -and (Get-Job).Count -lt $threads){
      $work = $list[0];
      $c = $list.RemoveAt(0);
      $job = Start-ThreadJob -ThrottleLimit $threads -ScriptBlock $code -ArgumentList $work
    }
    $jobs = (Get-Job).Count
    $p = $done/$count * 100
    Write-Progress -ID 0 -Activity "Downloading $jobs threads" -Status "$done/$count jobs" -PercentComplete $p

    Start-Sleep (1/30)
    # Get-Job | Wait-Job -Timeout 1
    $finished = Get-Job -State Completed 
    $done += $finished.Count
    # Get-Job | Receive-Job | % {
    # $finished | % {
    Get-Job | % {
      # ReWriteProgress $_ # for Invoke-WebRequest
      $progress = ParseCurlProgress($_.Error[-1])
      if ($progress){
        $Received = $progress.Received
        $Total = $progress.Total
        $Unit = $progress.Unit

        $params = @{
          Id = $_.Id
          ParentId = 0
          Activity = "Sub task #$($_.ID)"
          Status = "$Received/$Total $unit"
          PercentComplete = $Received/$Total * 100
          Completed = $Received -ge $Total
        }
        Write-Progress @params
      }
      $c = $result.Add($_.Output[-1]) # save the last one
    }
    $finished | Remove-Job
  }
  return $result
}

function DownloadList([HashTable]$list, [String]$url){
  $skip = 0
  $works = [System.Collections.ArrayList]@()
  $list.keys | % {
    $map = $list[$_]
    $ori = ("$_" -split "/")[-1]
    $base = ("$ori" -split ".")[0]
    $rename = RemapName $ori $map

    $a = (Test-Path $ori)
    $b = $rename -and (Test-Path "$rename")
    if($a -or $b) {
      $skip += 1
      Write-Host "Skip $_ ==> $rename"
      return # continue in % (for-each form)
    }
    if (!$url.EndsWith("/")){ $url += "/" }
    $c = $works.Add(@{ name = $rename; url = "$url$_"})
  }

  $result = StartJobs $works $function:Download

  $result | Format-Table

  echo "================================="
  echo "COUNT: $($list.Count) SKIP: $skip"
  echo "================================="
}

if ($map -and ($map.GetType() -eq [HashTable])) {
  DownloadList $map $url
  Write-Host DONE!
} else {

  if ($MyInvocation.Line -NotLike "*=*") {
    Write-Host "Usage:" -ForegroundColor Green
    Write-Host ("="*80) -BackgroundColor Yellow
    Write-Host @'
  $do =  Downlist
  Invoke-Expression $do

  # Or
  # ============================================================================

'@}

  Echo @'
  $rename = { PARAM([String]$name); $name -replace "Chapter_","Figures of " }
  $list = @{
      "Code Samples/Scott 4e_Code.zip" = $false
      "Sections and Sub-sections/Scott 4e_Supplementary Sections.pdf" = $false
      "Chapters 5 and 17/Scott 4e_Chapter 05.pdf" = { PARAM([String]$name); $name -replace ".pdf"," Target Machine Architecture.pdf" }
      "Chapters 5 and 17/Scott 4e_Chapter 17.pdf" = { PARAM([String]$name); $name -replace ".pdf"," Code Improvement.pdf" }
      "Figures from the Text/PDF/Chapter_01.pdf"  = $rename
      "Figures from the Text/PDF/Chapter_02.pdf"  = $rename
  }
  $root = "https://booksite.elsevier.com/9780124104099/content/"
  downlist $list $root
'@
}
```

## ⚡ Workflows
- [about_Remote_Disconnected_Sessions](Microsoft.PowerShell.Core/About/about_Remote_Disconnected_Sessions.md)
- [about_WorkFlows](5.1\PSWorkflow\about_WorkFlows.md)
- [about_ActivityCommonParameters](5.1\PSWorkflow\about_ActivityCommonParameters.md)
- [about_Parallel](5.1\PSWorkflow\about_Parallel.md)
- [about_ForEach-Parallel](5.1\PSWorkflow\about_ForEach-Parallel.md)
- [about_WorkflowCommonParameters](5.1\PSWorkflow\about_WorkflowCommonParameters.md)
- [about_Sequence](5.1\PSWorkflow\About\about_Sequence.md)

Windows Workflow Foundation 建立工作流应用程序的编程模型、引擎和工具，对执行模型进行了活动自动控制方面的虚拟化。这使您能编写可以捕捉各种控制流模式的复合活动，范围包括多种连接和合并、状态机、图形、序列、交叉存取和非本地退出等。总之，它将使您能够通过“高保真”的复合活动对存在于现实世界中的控制流模式进行建模。

简单的说，一个完整得工作流平台 Workflow Foundation 由 3 个部分组成：

- Activity（活动）是工作流的一个工作单位，Activity 能够组合在一起成为一个大的 Activity，而一个顶层的 Activity 被称为工作流（Workflow），就像程序中的 Main 函数。 
- Runtime（运行时）可以被托管在 .NET 的应用程序中，比如 IIS。WF Runtime 中运行 Activity，会进行诸如应用程序持久化，日志记录，数据追踪方面的工作。
- Tooling（开发工具），Visual Stuido 中的工作流设计器是一部分工具，但是一个好的开发工具还应该提供了调试功能，你将可以在设计器中更加直观的调试你的工作流。设计器的在别的平台是使用，比如 Web Page 或者一个 WinForm 的程序上。 称为 Rehosting。

PowerShell Workflow 把 WWF 带到了脚本编译环境，可以使用脚本实现 WWF 编程。

PowerShell Workflow was introduced in PowerShell 3.0 and the module is
available up to PowerShell 5.1.

Workflows can be written in XAML, the language used in Windows Workflow
Foundation, or in the PowerShell language.

A PowerShell Workflow configuration consists of the following elements:

- A client computer, which runs the workflow.
- A workflow session, **PSSession**, on the client computer or on a remote
  computer.
- Managed nodes, the target computers that are affected by the workflow
  activities.

The workflow session isn't required, but is recommended. **PSSessions** can
take advantage of the robust recovery and Disconnected Sessions features of
PowerShell to recover disconnected workflow sessions.

Workflows are typically packaged in modules. To import the module that includes
a workflow, use any command in the module or use the `Import-Module` cmdlet.
Modules are imported automatically on first use of any command in the module.

To find the workflows in modules installed on your computer, use the
`Get-Command` cmdlet's **CommandType** parameter.

```powershell
Get-Command -CommandType Workflow
```




## ⚡ Write Output Stream
- [about_Output_Streams](Microsoft.PowerShell.Core/About/about_Output_Streams.md)
- [about_Redirection](Microsoft.PowerShell.Core/About/about_Redirection.md)
- [about_Return](Microsoft.PowerShell.Core/About/about_Return.md)
- [about_CommonParameters](Microsoft.PowerShell.Core/About/about_CommonParameters.md)
- [about_Preference_Variables](Microsoft.PowerShell.Core/About/about_Preference_Variables.md)
- [Write-Debug](Microsoft.PowerShell.Utility/Write-Debug.md)
- [Write-Error](Microsoft.PowerShell.Utility/Write-Error.md)
- [Write-Host](Microsoft.PowerShell.Utility/Write-Host.md)
- [Write-Information](Microsoft.PowerShell.Utility/Write-Information.md)
- [Write-Output](Microsoft.PowerShell.Utility/Write-Output.md)
- [Write-Progress](Microsoft.PowerShell.Utility/Write-Progress.md)
- [Write-Verbose](Microsoft.PowerShell.Utility/Write-Verbose.md)
- [Write-Warning](Microsoft.PowerShell.Utility/Write-Warning.md)

和传统 C/C++ 等控制台程序使用的 stdin/stdout/stderr 三种基本 I/O 流不同，PowerShell 提供了多种输出流来控制输出内容的流向。

PowerShell provides multiple output streams. The streams provide channels for
different types of messages. You can write to these streams using the
associated cmdlet or redirection.

PowerShell supports the following output streams.

| Stream # |      Description       | Introduced in  |    Write Cmdlet     |
| -------- | ---------------------- | -------------- | ------------------- |
| 1        | **Success** stream     | PowerShell 2.0 | `Write-Output`      |
| 2        | **Error** stream       | PowerShell 2.0 | `Write-Error`       |
| 3        | **Warning** stream     | PowerShell 2.0 | `Write-Warning`     |
| 4        | **Verbose** stream     | PowerShell 2.0 | `Write-Verbose`     |
| 5        | **Debug** stream       | PowerShell 2.0 | `Write-Debug`       |
| 6        | **Information** stream | PowerShell 5.0 | `Write-Information` |
| n/a      | **Progress** stream    | PowerShell 2.0 | `Write-Progress`    |

```sh
> help write*

Name                              Category  Module                    Synopsis
----                              --------  ------                    --------
write                             Alias                               Write-Output
Write-Debug                       Cmdlet    Microsoft.PowerShell.Uti… …
Write-Error                       Cmdlet    Microsoft.PowerShell.Uti… …
Write-Host                        Cmdlet    Microsoft.PowerShell.Uti… …
Write-Information                 Cmdlet    Microsoft.PowerShell.Uti… …
Write-Output                      Cmdlet    Microsoft.PowerShell.Uti… …
Write-Progress                    Cmdlet    Microsoft.PowerShell.Uti… …
Write-Verbose                     Cmdlet    Microsoft.PowerShell.Uti… …
Write-Warning                     Cmdlet    Microsoft.PowerShell.Uti… …
Write-DtcTransactionsTraceSession Function  MsDtc                     …
Write-PrinterNfcTag               Function  PrintManagement           …
Write-VolumeCache                 Function  Storage                   …
```

子进程的进度条显示会打乱屏幕内容

默认将输出流送到 PowerShell host，控制台程序使用 echo 即 Write-Output 的默认行为，可以使用重定义到输出文件。

The PowerShell redirection operators are as follows, where `n` represents
the stream number, ex. 6 is **Information** stream. 

The **Success** stream ( `1` ) is the default if no stream is specified.

| Operator |                         Description                         | Syntax |
| -------- | ----------------------------------------------------------- | ------ |
| `>`      | Send specified stream to a file.                            | `n>`   |
| `>>`     | **Append** specified stream to a file.                      | `n>>`  |
| `>&1`    | _Redirects_ the specified stream to the **Success** stream. | `n>&1` |

使用 Write-Host 控制字符颜色，-BackgroundColor 和 -ForegroundColor 都可以指定一种颜色：

    - Black     -
    - Blue      - DarkBlue
    - Cyan      - DarkCyan
    - Gray      - DarkGray
    - Green     - DarkGreen
    - Magenta   - DarkMagenta
    - Red       - DarkRed
    - Yellow    - DarkYellow
    - White     -

```sh
function ColoredText([String[]]$txt, [ConsoleColor[]] $colors, [int]$id=0)
{
    $txt | % { 
        Write-Host $_ -ForegroundColor $colors[$id] -NoNewline 
        $id += 1
        if ($id -ge $colors.Count){ $id = 0 }
    }
}
ColoredText (100..900) Green,Red,Yellow
ColoredText (100..900) ([Enum]::GetValues([ConsoleColor]))
ColoredText (100..900) ([ConsoleColor].GetEnumValues())
ColoredText (100..900) ([ConsoleColor].GetFields()[1..16].Name)
ColoredText "Green", " Red ", "Yellow" Green,Red,Yellow

> [enum]::GetValues([System.ConsoleColor]) | % {Write-Host $_ -ForegroundColor $_ }
> $host.ui.RawUI.ForegroundColor = 'Red'
> [Console]::ResetColor()
```

### ===🗝 ProgressBar
- [How to Display Job Progress](https://key2consulting.com/powershell-how-to-display-job-progress/)
- [System.Management.Automation.Job](System.Management.Automation\engine\remoting\client\Job.cs)


进度条属性说明：

- 进度条有 3 处设置文字：
    - *-Activity* 和 *-Status* 设置第一行的两列内容；
    - *-CurrentOperation* 在进度条下一行的内容，显示当前的操作；
- 通过 *-ParentID* 关系父级进度条用于级联显示；
- *-ID* 指定自然数，用于标记当前进程中的进度条，重用 ID 将导致进度条内容被覆盖；
- *-PercentComplete* 设置 0 ~ 100 表示进度百分比；
- *-Completed* 表示进度已经完整，并且会隐藏掉；

```sh
1..100 | % {
    Start-Sleep -Milliseconds 500
    Write-Progress -Activity "Waiting..." -Id 1 -Status "Current: $_" -PercentComplete $_
}
```

在 Job 子线程中使用进度条时，如果直接使用 Receive-Job 接收数据，则会导致子进程的进度条显示会打乱主进程的屏幕内容，解决方法是使用 Job 或 Job.ChildJobs 获取子进程对象的进度流，并在主线程中进行重写。

为了获取数据同时不使用 Receive-Job 避免导致管道内容输出与 Progress 流输出混乱，可以通过 *Get-Job* 获取已经完成、或未完成的 Job 对象，通过其 *Output* 属性来捕获输出流的数据。

另外，Invoke-WebRequest 下载时，因为没有确定的要下载的数据量，进度条无法确定百分比，需要通过状态信息判断是否完成： Web request completed.

```sh
function ReWriteProgress([System.Management.Automation.Job2]$Job)
{
  $b = $Job.Progress
  $a = $Job.ChildJobs[0].Progress
  $progress = $a ? $a : $b
  if($Progress -ne $null)
  {    $latest = $progress[-1];
    $config = @{
      ID = $job.Id
      Activity = $latest.Activity+" Rewrited";
      Status = $latest.StatusDescription;
      PercentComplete = $latest.PercentComplete;
      Complete = $false
    }
    $finished = $config.Status.StartsWith("Web request completed.")
    if ($config.PercentComplete -ge 100 -or $finished){
      $config.Complete = $true
    }
    Write-Progress @config
  }
}

function StartJobs {
    PARAM(
        [System.Collections.ArrayList]$works,
        [ScriptBlock]$task
        )
    $id = 0
    $done = 0
    $result = @{}
    $max = $works.Count
    if ($works.Count -eq 0){ 
        Echo "Not thing in the works group"
    }
    while($works.Count -or (Get-Job))
    {
        if($works.Count){
            $work = $works[0]
            $works.RemoveAt(0)
            $job = Start-ThreadJob -ThrottleLimit 16 -ArgumentList $work -ScriptBlock $task
        }

        Start-Sleep (1/15)
        # Get-Job| Wait-Job -Timeout 1
        if ($works.Count -eq 0){
            $jobs = Get-Job | Wait-Job
        }
        Get-Job | % { ReWriteProgress $_ }

        $jobs = Get-Job -State Completed
        $done += $jobs.Count
        $time = (Get-Date).ToString("HH:MM:ss")
        $params = @{
            Activity = "Woking jobs $((Get-Job -State Running).Count) [$time] ..."
            Status = "Received: $($result.Keys.Count)] $done/$max "
            PercentComplete = ($donw/$max*100)
        }
        Write-Progress @params

        $jobs | % {
            $result.Add($id, $_.Output)
            $id += 1
        }
        $jobs | Remove-Job
    }
    return $result
}


$task = {
  PARAM([PSCustomObject]$work)
  [int]$id = $work.id
  [int]$max = $work.load
  for ($i = 1; $i -le $max; $i++ )
  {
    $p = (($i/$max)*100).ToString("##.##")
    Write-Progress -Activity "[$id] Worker load: $max" -Status "$p%:" -PercentComplete $p
    Start-Sleep -Milliseconds (1000/60)
  }
  Echo "[$id] worker: done with $max load"
}

$works = [System.Collections.ArrayList]@()
$max = Get-Random (50..300)
1..$max | % {
  $c = $works.Add([PSCustomObject]@{
    id = $_
    load = (Get-Random (30..100))
    })
}

return StartJobs $works $task
```



## ⚡ Pipeline
- https://powershell.one/powershell-internals/scriptblocks/powershell-pipeline
- [ValidateRangeAttribute](System.Management.Automation\engine\Attributes.cs)
- [about Pipeline](Microsoft.PowerShell.Core/About/about_Pipelines.md)
- [about_PSReadLine](PSReadLine/About/about_PSReadLine.md)
- [about_PSReadLine](PSReadLine/About/about_Invoke-Command.md)

管道机制是设计用来在命令之前传递 Streaming Data 的，使用 `|` 符号连接命令，左侧的命令输数据流就会进入左则命令，使用 `$_` 或者 $PSItem 获取管道数据流。

Methods of accepting pipeline input

Cmdlets parameters can accept pipeline input in one of two different ways:

- **ByValue**: The parameter accepts values that match the expected .NET type
  or that can be converted to that type.

  For example, the **Name** parameter of `Start-Service` accepts pipeline input
  by value. It can accept string objects or objects that can be converted to
  strings.

- **ByPropertyName**: The parameter accepts input only when the input object
  has a property of the same name as the parameter.

  For example, the Name parameter of `Start-Service` can accept objects that
  have a **Name** property. To list the properties of an object, pipe it to
  `Get-Member`.

Some parameters can accept objects by both value or property name, making it
easier to take input from the pipeline.


The pipeline is not doing parallel processing, though. It just cleverly interweaves the code of all commands. That’s why pipeline-aware PowerShell commands can provide up to three different code blocks: begin, process, and end:

- *begin*: This code executes once before the pipeline starts to process data. Code can be used to initialize things that only need to be set up once.
- *process*: This code executes repeatedly like a loop, once per incoming pipeline object.
- *end*: This code executes once after all pipeline elements have been processed. Code can be used to clean up things, i.e. delete temporary files.

```sh
function Test-Pipeline
{
  param
  (
    [Parameter(Mandatory)]
    [string]
    $Name,
    
    [Parameter(ValueFromPipeline,ValueFromPipelineByPropertyName)]
    [object]
    $InputObject
  )
  
  begin   { Write-Host "BEGIN   ${Name}" -ForegroundColor Green }
  process 
  { 
    Write-Host "PROCESS ${Name}: $InputObject" -ForegroundColor DarkYellow 
    # pass received object on to next command:
    $InputObject
  }
  end     { Write-Host "END     ${Name}" -ForegroundColor Red }
}

# Processing One Pipeline Element
1 | Test-Pipeline -Name A | Test-Pipeline -Name B | Test-Pipeline -Name C 
# Processing Many Pipeline Elements
1..3 | Test-Pipeline -Name A | Test-Pipeline -Name B | Test-Pipeline -Name C 
```

管道执行数据处理时，会先执行 begin 代码块，完成初始化后再执行 process 代码块，最后执行 end 代码块进行结尾清理工作：

    BEGIN   A
    BEGIN   B
    BEGIN   C
    PROCESS A: 1
    PROCESS B: 1
    PROCESS C: 1
    1
    END     A
    END     B
    END     C

- First, the *begin* section of all three commands execute.
- Next, the *process* section processes the input data, and at the end the data is returned.
- Finally, the *end* section of all three commands execute.


要定义提供管理支持的函数，可以使用 filter 关键字，或者使用函数的 process 代码块：

```sh
filter Test-PipelineInput
{
    Write-Warning "receiving $_"
    # for example, create IP addresses:
    "10.12.100.$_"
}

function Test-PipelineInput
{
    process
    {
        Write-Warning "receiving $_"
        # for example, create IP addresses:
        "10.12.100.$_"
    }
}

1..10 | Test-PipelineInput
```

管道传递的参数还可以进行更细致的定义，参考属性类型源代码 [Attributes](System.Management.Automation\engine\Attributes.cs)，ParameterAttribute 提供参数基本属性设置，比如参数是否必需、是否是管道传入参数等，ValidateRangeAttribute 提供参数的取值范围验证，或者使用 AliasAttribute 给输入参数绑定别名：

```sh
  param
  (
    [Parameter(Mandatory,ValueFromPipeline,ValueFromPipelineByPropertyName)]
    # define property names
    [Alias('DisplayName','Text')]
    # allow string arrays:
    [String[]]
    $Name,

    [ValidateRange(-10,10)]
    [int]
    $Speed = 0
  )
```

要处理管道中传递的所有数据，可以使用 $Input 这个自动变量，它是枚举变量，@($Input) 可以转化为数组。

以下示范手动收集管道中的所有数据：

```sh
function Test-CollectData
{
  param
  (
    [Parameter(Mandatory,ValueFromPipeline)]
    [Object]
    $InputData
  )
  
  begin
  {
    # initialize empty generic list
    $all = [System.Collections.Generic.List[Object]]::new()
  }
  
  process
  {
    # add incoming pipeline object to list:
    $all.Add($_)
  }
  
  end
  {
    # work with collection of received data:
    $count = $all.Count
    "I received $count elements."
    "Received: $all"
  }
}

1..10 | Test-CollectData
```


## ⚡ PowerShell Speeding-up

本机映像生成器 (Ngen.exe) 是一种提高托管应用程序性能的工具。 Ngen.exe 创建本机映像（包含经编译的特定于处理器的机器代码的文件），并将它们安装到本地计算机上的本机映像缓存中。 运行时可从缓存中使用本机映像，而不必使用实时 (JIT) 编译器编译原始程序集，从而加速程序启动。

Ngen.exe 编译仅面向 .NET Framework 的程序集的本机映像。 适用于 .NET Core 的等效本机映像生成器为 CrossGen。

```sh
# Set-Alias ngen (Join-Path ([System.Runtime.InteropServices.RuntimeEnvironment]::GetRuntimeDirectory()) ngen.exe)
[AppDomain]::CurrentDomain.GetAssemblies() |
    sort {Split-path $_.location -leaf} | 
    %{
        $Name = (Split-Path $_.location -leaf)
        if ([System.Runtime.InteropServices.RuntimeEnvironment]::FromGlobalAccessCache($_))
        {
            Write-Host "Already GACed: $Name"
        }else
        {
            Write-Host -ForegroundColor Yellow "NGENing      : $Name"
            ngen $_.location | %{"`t$_"}
         }
      }
```

## ⚡ Sudo
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/start-process
- https://blog.walterlv.com/post/windows-user-account-control.html
- https://nsudo.m2team.org/en-us/docs/#quick-start
- Windows PowerShell Profiles https://docs.microsoft.com/en-us/previous-versions//bb613488(v=vs.85)


Powershell 的 Start-Process -Verb RunAs 可以提出 UAC 授权请求，实现 Run As Administrator。

完整性级别（Integrity Level）

从 Windows Vista 开始，进程在创建的时候，可以得到一个访问令牌（Access Token），这个令牌有四个完整性级别：

  - System（系统）
  - High（高）
  - Medium（中）
  - Low（低）

System 令牌是对系统完全操作的令牌，对应 SYSTEM 用户拥有的最高权限，可以对 Windows 操作系统做任何事。通常一个服务进程会以 SYSTEM 用户启动，拿到 System 令牌。

使用 PowerShell 变量来定位：start $PSHome，使用 $Profile 变量获取配置文件路径：

  - $PROFILE.CurrentUserCurrentHost “Current user, PowerShell ISE” 
  - $PROFILE.AllUsersCurrentHost    “All users, PowerShell ISE” 
  - $PROFILE.CurrentUserAllHosts    “Current user, All hosts” 
  - $PROFILE.AllUsersAllHosts       “All users, All hosts” 

```sh
> $PROFILE.AllUsersAllHosts
C:\Windows\System32\WindowsPowerShell\v1.0\profile.ps1
> $PROFILE.AllUsersCurrentHost
C:\Windows\System32\WindowsPowerShell\v1.0\Microsoft.PowerShell_profile.ps1
> $PROFILE.CurrentUserAllHosts
C:\Users\OCEAN\Documents\WindowsPowerShell\profile.ps1
> $PROFILE; $PROFILE.CurrentUserCurrentHost
C:\Users\OCEAN\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

创建配置脚本：

```sh
# mkdir (dir "$($PROFILE.CurrentUserCurrentHost)").Parent
if (!(Test-Path $PROFILE.CurrentUserCurrentHost)){
    echo "mkdir $($PROFILE.CurrentUserCurrentHost)"
    mkdir $PROFILE.CurrentUserCurrentHost
    del "$($PROFILE.CurrentUserCurrentHost)"
    touch $PROFILE
    notepad $PROFILE
}

if (!(Test-Path -Path $PROFILE ))
{ New-Item -Type File -Path $PROFILE -Force }
```

添加以下脚本到 PowerShell 配置文件，并重新启动以加载配置脚本：

    %USERPROFILE%\Documents\WindowsPowerShell\profile.ps1

想要 PowerShell 启动时能成功的载入配置文件，还需要 Execution Policy（执行策略）中设置允许它这样做。否则，尝试载入配置文件将会失败，会显示无法加载配置文件。所以，需要在 PowerShell 执行 Set-ExecutionPolicy RemoteSigned 命令以启用脚本加载功能。

```sh
function SwitchUser-Do {
    if($args.Length -lt 1) {
        Write-Warning("program must be provided!")
        Write-Output("Usage: sudo program [args...]")
        return
    }
    $program = $args[0]
    $prog_args = $args[1..($args.Count-1)]
    Write-Output("Program: " + $program)
    if ($args.Length -le 1) {
        Start-Process -FilePath $program -Verb RunAs
    }
    else {
        Write-Output("Arguments: " + $prog_args)
        Start-Process -FilePath $program -Verb RunAs -ArgumentList $prog_args
    }
}

Set-Alias sudo SwitchUser-Do
echo ">>> ${PSScriptRoot}"
echo ">>> $($MyInvocation.MyCommand)"
```

## ⚡ PowerShell Over SSH
- OpenBSD manual page server https://man.openbsd.org/sshd
- OpenSSH Manual Pages http://www.openssh.com/manual.html
- https://github.com/PowerShell/Win32-OpenSSH/wiki

为了方便使用，PowerShell 提供了数据供应器 Providers and drives，可以用来获取函数体：

> function myfun{echo "my function"}
> ${function:myfun}
echo "my function"

结合 ScriptBlock 对象实现程序化方式构建函数，注意函数的圆括号参考列表是可选的，调用没有参数的函数时不能使用圆括号：

```sh
function GetBar() {
    $bar = "bar"
    $bar
}

function GetFoo() {     
    $foo = "foo"
    $bar = GetBar
    $foo
    $bar
}

$fget = "function Get"
$getbar = ${function:GetBar}
$getfoo = ${function:GetFoo}
$SBlock = [ScriptBlock]::Create("${fget}Bar() { $getbar } ${fget}Foo() { ${getfoo} } GetFoo")

# Config WinRM first: "winrm quickconfig"
Invoke-Command -ComputerName localhost -ScriptBlock $SBlock
Invoke-Command -ComputerName localhost -ScriptBlock { Get-ChildItem C:\ } -credential Jeango
```

PowerShell 支持多种方式以远程方式运行脚本：

  - Just Enough Administration (JEA)
  - PowerShell remoting over SSH
  - WS-Management (WSMan) remoting in PowerShell Core

像 `New-PSSession`, `Enter-PSSession`, `Invoke-Command` 这些命令都支持以下用于远程执行脚本的参数：

```sh
[-HostName <string>]  [-UserName <string>]  [-KeyFilePath <string>]
```

双系统安装需要进行以下要求及步骤：

- PowerShell 6 or higher, and SSH must be installed on all computers. 
- Install both the SSH client (`ssh.exe`) and server (`sshd.exe`) so that you can remote to and from the computers.
- OpenSSH for Windows is now available in Windows 10 build 1809 and Windows Server 2019.
- For Linux, install SSH, including sshd server, that's appropriate for your platform. 
- You also need to install PowerShell from GitHub to get the SSH remoting feature. 
- The SSH server must be configured to create an SSH subsystem to host a PowerShell process on the remote computer. 
- And, you must enable **password** or **key-based** authentication.

基于 SSH 的远程处理依赖于 SSH 客户端和 SSH 服务之间的身份验证交换，PowerShell 本身不实现任何身份验证方案。任何配置的身份验证方案（包括多因素身份验证）都由 SSH 服务处理，并且独立于 PowerShell。

确保配置文件设置了 `PasswordAuthentication yes`，可以使用密码登录，避免未配置公钥登录认证时不能登录，例如在 WSL Ubuntu 系统中修改配置文件 *sudo vi /etc/ssh/sshd_config*。

首先是安装 SSH service，使用 Win32 OpenSSH。并生成密钥对，配置并启动服务，然后确保可以查询到有 SSHost 等信息：

```sh
> Restart-Service sshd
> (Get-Command New-PSSession).ParameterSets.Name

Name
----
SSHHost
SSHHostHashParam

# Generate CA keys (just like any other keys)
ssh-keygen -t rsa -f ca_userkeys
# Register above key as trusted CA for sshd. Add following entry in sshd_config
TrustedUserCAKeys ca_userkeys.pub

# Sign user keys using ssh-keygen
ssh-keygen.exe -s ca_userkeys -I cert_identity -V -1w:+54w5d -n username id_rsa.pub
# username should match the user to be authenticated
```

生成默认的密钥对：

```sh
$ sudo ssh-keygen -t rsa -f ssh_host_rsa_key
$ sudo ssh-keygen -t ecdsa -f ssh_host_ecdsa_key
$ sudo ssh-keygen -t ed25519 -f ssh_host_ed25519_key
$ ls -l ssh_host*
-rw------- 1 root root  513 Apr 28 19:28 ssh_host_ecdsa_key
-rw-r--r-- 1 root root  182 Apr 28 19:28 ssh_host_ecdsa_key.pub
-rw------- 1 root root  411 Apr 28 19:30 ssh_host_ed25519_key
-rw-r--r-- 1 root root  102 Apr 28 19:30 ssh_host_ed25519_key.pub
-rw------- 1 root root 2610 Apr 28 19:20 ssh_host_rsa_key
-rw-r--r-- 1 root root  574 Apr 28 19:20 ssh_host_rsa_key.pub
```



注意，如果安装了 PowerShell 32-bit，而 OpenSSH 64-bit，那么将会访问不到 OpenSSH 的客户端，System32 目录不供 32-bit 应用访问，需要使用 SysNative 路径下的 32-bit SSH 程序：

```sh
Get-Item -Force C:\Windows\System32\OpenSSH\ssh.exe
Get-Item: Cannot find path 'C:\Windows\System32\OpenSSH\ssh.exe' because it does not exist.
# This would only work from a 32-bit PowerShell instance.
# Access the 64-bit C:\Windows\System32 directory.
Get-Item -Force C:\Windows\SysNative\OpenSSH\ssh.exe
$Env:Path="C:\Windows\SysNative\OpenSSH;$($Env:Path)"
```

远程系统 WSL Ubuntu 充当，安装 OpenSSH 服务，并且需要为 PowerShell 创建子系统入口：

```bash
sudo apt install openssh-client
sudo apt install openssh-server

# Edit the `sshd_config` file at location `/etc/ssh`.
# Make sure password authentication is enabled:
#   PasswordAuthentication yes
# Optionally, enable key authentication:
#   PubkeyAuthentication yes
# Add a PowerShell subsystem entry:
#   Subsystem powershell /usr/bin/pwsh -sshs -NoLogo
vim /etc/ssh/sshd_config
```

在 SSH 服务中配置 Subsystem entry 目的是让服务端 PowerShell 处理客户端的请求，注意名称大小定要匹配，参数 -sshs -NoLogo 不能少，可以使用 *sshd -d* 以调试方式运行服务。

并且指定程序路径时不能有空格，所以在 Windows 系统上的带空格目录就要使用 8.3 格式的路径，最好是直接通过环境变量搜索到程序，这样就不用设置目录：

    Subsystem powershell pwsh.exe -sshs -nologo
    Subsystem powershell c:/progra~1/powershell/7/pwsh.exe -sshs -NoLogo

可以使用以下命令查询是否正确设置，使用 ssh 连接时无输出内容是正确的，如果有内容输出，New-PSSession 连接时就会出错：

```sh
> sshd -T | grep 'subsystem'

subsystem sftp /usr/lib/openssh/sftp-server
subsystem powershell /usr/bin/pwsh -sshs -NoLogo -NoProfile

> ssh root@localhost -s powershell
PowerShell 7.2.2
Copyright (c) Microsoft Corporation.

https://aka.ms/powershell
Type 'help' to get help.
```

注意 sshd -T 延申测试输出的信息中指示了密钥文件位置，配置文件对应是 %ProgramData%\ssh\sshd_config。

PowerShell 需要使用 SSH 客户端来连接服务器，使用 *ssh user@localhost -p 22* 测试连接。确保 ssh 客户端程序可以被调用，否则会报错：A remote session might have ended.

通过 Package Repository 安装 PowerShell：

```sh
# Update the list of packages
sudo apt-get update
# Install pre-requisite packages.
sudo apt-get install -y wget apt-transport-https software-properties-common
# Download the Microsoft repository GPG keys
# wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb
wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
# Register the Microsoft repository GPG keys
sudo dpkg -i packages-microsoft-prod.deb
# Update the list of packages after we added packages.microsoft.com
sudo apt-get update
# Install PowerShell
sudo apt-get install -y powershell
# Start PowerShell
pwsh
```

或者直接下载安装包，根据系统选择版本：

```sh
# PowerShell 7.2.2 (universal package) for any support version of Ubuntu
wget -q https://github.com/PowerShell/PowerShell/releases/download/v7.2.2/powershell-lts_7.2.2-1.deb_amd64.deb

# Install the downloaded package
sudo dpkg -i powershell-lts_7.2.2-1.deb_amd64.deb

# Resolve missing dependencies and finish the install (if necessary)
sudo apt-get install -f
```

连接测试，可以采取 Enter-PSSession -> 执行远程命令 -> Exit-PSSession -> Remove-PSSession 流程，也可以使用 Invoke-Command 行命令直接运行远程命令：

```sh
> $session = New-PSSession -HostName 127.0.0.1 -UserName root
> $session

 Id Name       Transport ComputerName ComputerType    State   ConfigurationName  Availability
 -- ----       --------- ------------ ------------    -----   -----------------  ------------
  3 Runspace2  SSH       127.0.0.1    RemoteMachine   Opened  DefaultShell       Available

> Enter-PSSession $session
[root@127.0.0.1]: PS /home/root> uname
Linux
[root@127.0.0.1]: PS /home/root> Invoke-Command $session -ScriptBlock { ps }
Invoke-Command: Cannot validate argument on parameter 'Session'. The argument is null or empty..
[root@127.0.0.1]: PS /home/root> Exit-PSSession

> Invoke-Command $session -ScriptBlock { ps }
  PID TTY          TIME CMD
 8368 ?        00:00:00 sshd
 8369 ?        00:00:04 pwsh
 8704 ?        00:00:00 ps

> Invoke-Command $session -ScriptBlock { Get-Process pwsh }

 NPM(K)    PM(M)      WS(M)     CPU(s)      Id  SI ProcessName                        PSComputerName
 ------    -----      -----     ------      --  -- -----------                        --------------
      0     0.00      99.02       4.57    8369 …69 pwsh                               127.0.0.1
      0     0.00      65.48       0.90    8709   5 pwsh                               127.0.0.1

> Get-PSSession | Remove-PSSession
> $sess.State
Closed
```

功能限制提示：

- **sudo** 命令不能在 Linux 远程主机中运行；
- 基于 SSH 的 PSRemoting 不支持访问 `$PROFILE` 也不载入配置文件，建议会话后，可以通过 Dot sourcing 加载它。
- PowerShell 7.1 之前的版本，基于 SSH 远程执行不支持 second-hop 远程会话，此功能仅限于使用 WinRM。
- PowerShell 7.1 允许在任何交互式远程会话中工作使用 `Enter-PSSession`、`Enter-PSHostProcess`。

常见错误提示：

- 不能运行 SSH 客户端程序：An error has occurred which PowerShell cannot handle. A remote session might have ended.
- 未安装或 SSH 服务端未运行：Connecting to remote server localhost failed..
- 未启用密码登录，且未配置好公钥认证登录：Permission denied (publickey)..
- 公钥验证错误： Failed publickey for <user> from <host>
- 服务主机上未安装 PowerShell 或未配置子系统入口，或者入口名字不匹配，或参数不正确，程序路径有误：
    - The SSH client session has ended with error message: Permission denied, please try again.
    - The SSH client session has ended with error message: subsystem request failed on channel 0.
    - There is an error processing data from the background process. Error reported: PowerShell 7.2.2.

处理数据报错，消息来源自服务端的 PowerShell 7.2.2，这可能是因为配置 SSH 子系统入口时，没有为 PowerShell 设置 -NoLogo 参数，导致建立会话时有额外数据传递，导致异常。

连接期间打印 trying public key file .ssh/authorized_keys 表示服务器正在查询公钥认证文件，如果读取到公钥验证文件但又没有登录成功，那么就可能是公钥配置问题。重新在服务器端生成密钥对，将 id_rsa.pub 复制一份作为 authorized_keys，并且将密钥下载到本地系统用于登录。

```sh
# copy publickey on server
sudo cp ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys

# download rsa privatekey to client, PowerShell or Bat
scp jeango@localhost:~/.ssh/id_rsa $env:USERPROFILE\.ssh\id_rsa
scp jeango@localhost:~/.ssh/id_rsa.pub $env:USERPROFILE\.ssh\id_rsa.pub
scp jeango@localhost:~/.ssh/id_rsa %USERPROFILE%\.ssh\id_rsa
```


关于密钥保文件权限护，以及进行公钥验证登录的问题，服务端各个密钥文件不能给多个账户授权，即使没有授予访问权也不可，OpenSSH 不允许宽松的访问权限，但可以添加相关的用户组的权限，应该将管理员设置为密钥的所有者。

```sh
> sshd -d
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for '__PROGRAMDATA__\\ssh/ssh_host_rsa_key' are too open.
Permissions for '__PROGRAMDATA__\\ssh/ssh_host_ecdsa_key' are too open.
Permissions for '__PROGRAMDATA__\\ssh/ssh_host_ed25519_key' are too open.
...
sshd: no hostkeys available -- exiting.
```

理解“管理员组”和管理员用户之间的区别很重要，User Account Control (UAC) 完全启用的情况下，登录管理员用户通常会在非提升模式下运行进程，Non-elevated，被称为受保护的管理员。这时进程处于最少权限状态，least-privileged state。

在权限最低的状态下，尽管用户是管理员用户组的成员，但这些非提升进程无权访问仅限管理员组的资源。

管理员账户可以通过 Consent UI 或 Credential UI 提升为拥有完全权限的状态，这两种 UI 窗口区别在于后者需要输入管理员账户密码。

相比之下，标准用户无法自行提升，但他们可以要求管理员使用 Credential UI 提升他们，内置管理员帐户不需要提升。

按以下方式修正密钥文件权限：

```sh
PS C:\ProgramData\ssh>(get-acl .\ssh_host_dsa_key).owner
otheruser
PS C:\ProgramData\ssh>icacls .\ssh_host_dsa_key
ssh_host_dsa_key   NT AUTHORITY\SYSTEM:(F)
                   BUILTIN\Administrators:(F)
                   otheruser:(R) 

# Steps to fix these permissions
PS C:\ProgramData\ssh>icacls .\ssh_host_dsa_key /setowner system
PS C:\ProgramData\ssh>icacls .\ssh_host_dsa_key /remove otheruser
PS C:\ProgramData\ssh>get-acl .\ssh_host_dsa_key | Set-Acl ssh_host*key
```

客户端也添加 -v 参数显示连接过程的交互信息，以观察公钥认证过程，并通过 [preauth] 了角认证前期的状态：

    ssh -v user@127.0.0.1 -s powershell

根据 SSH2_MSG_NEWKEYS 消息可以了解决 sshd 服务建立连接过程传递的消息，还有当前可以进行的认证方式：Authentications that can continue: publickey,password,keyboard-interactive。

另外，有两条比较重要的消息可以确定问题是否在于公钥数据，或文件路径，或者访问权限上。如果调试消息显示已经提供公钥，服务器在接收到公钥后直接给出 Authentication refused 可能就是文件权限大开开放导致 sshd 拒绝验证：

- 客户端调试消息 ssh.exe: Offering public key
- 服务端调试消息 sshd.exe: trying public key file

对于启用 PubkeyAuthentication 以及配置授权密钥文件 *AuthorizedKeysFile* ，需要将客户的公钥登记到公钥认证记录文件内。

对于用户的授权密钥文件，authorized_keys，只需要保证其用户的所有权，及单独访问权限即可以，多用户访问会导致 sshd 直接拒绝使用公钥验证，Authentication refused。

而管理员组的授权密钥文件，administrators_authorized_keys，只提供管理员登录时使用，需要指定系统用户账户 SYSTEM 和 Administrators 管理员组权限。

```sh
# authorized_keys
PS C:\>(get-acl .\users\thisuser\.ssh\authorized_keys).owner
thisuser
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys
ssh_host_dsa_key   BUILTIN\Administrators:(F)
                   thisuser:(F) 
                   otheruser1:(IR)
                   otheruser2:(R)

# Steps to fix these permissions - remove inheritance and inherited permissions
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys /inheritance:r
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys /remove otheruser2

# administrators_authorized_keys
# Default location for authorized keys file for users in administrators group is 
# %programdata%\ssh\administrators_authorized_keys 
# This file should only be accessible by SYSTEM and Administrators group.

# Steps to fix permissions on this file:
PS C:\>icacls administrators_authorized_keys /inheritance:r
PS C:\>icacls administrators_authorized_keys /grant SYSTEM:"(F)"
PS C:\>icacls administrators_authorized_keys /grant BUILTIN\Administrators:"(F)"
```

启用管理员授权密钥后，sshd 就进行 MATCH GROUP 比对，匹配的账户就读取相应的授权文件内容，可以指定命令行参数测试：

    sshd -C user=administrators,host=127.0.0.1 -T


给服务指定登录账户，注意需要给服务使用的账户设置 NETWORK SERVICE 安全主体策略以许可服务通过指定账户登录。

类似的安全策略还有“允许通过远程桌面服务登录”，它默认许可远程桌面用户（Remote Desktop Users）进行远程登录。更多的安全策略设定可以使用本地用户组策略编辑器，gpedit.msc。

打开本地安全策略面板 secpol.msc -> 本地策略 -> 用户权限分配 -> 作为服务登录，并将用户账户，或所属用户组添加到列表中。NT SERVICE\ALL SERVICES 安全主体是默认设置，它可以作为服务登录账户。

空密码账户只需要将密码文本框的占位字符删除即可，选择了“本地服务”帐户或“网络服务”安全主体，NT AUTHORITY\LocalService & NT AUTHORITY\NetworkService 密码必须为空。要指定此服务使用“本地系统”帐户，请单击“本地系统帐户”。

Windows 服务默认的登录账户是本地系统帐户，LocalSystem，是一个具有完全系统访问权并且在网络中担当计算机的超级帐户。如果一个服务在一台域控制器上用本地系统帐户登录，该服务就可以访问整个域。


大多数服务都设计为不能更改默认帐户。当您更改了服务的默认帐户时，该服务可能无法启动。

服务运行时，首先进行登录，然后再进行权限审核，任何一个环节出错都有相应提示。

1. 账户登录问题会提示错误 1069: 由于登录失败而无法启动服务。
2. 账户权限配置问题会提示错误 1297: 服务账户配置中不存在服务正常运行所需的特权。
3. 服务程序遇到错误会提示错误 1067: 进程意外终止。

最后一个问题很棘手，因为日志中无法获取到进程终止的原因，只是提示 Error 1067: 'The process terminated unexpectedly'。但有一个可能是，所有密钥文件的权限设置不正确导致 sshd 直接终止服务的执行。正确的权限应该是，Administrators 组和 SYSTEM 账户，但是配置文件可以给用户指定修改权限。

```sh
 PS C:\ProgramData\ssh> icacls .\ssh_host_dsa_key
 .\ssh_host_dsa_key BUILTIN\Administrators:(F)
                    NT AUTHORITY\SYSTEM:(F)

get-acl *

    Directory: C:\ProgramData\ssh

Path                           Owner                  Access
----                           -----                  ------
logs                           NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
administrators_authorized_keys NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_dsa_key               NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_dsa_key.pub           NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_ecdsa_key             NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_ecdsa_key.pub         NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_ed25519_key           NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_ed25519_key.pub       NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_rsa_key               NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
ssh_host_rsa_key.pub           NT AUTHORITY\SYSTEM    BUILTIN\Administrators Allow  ReadAndExecute, Synchronize
sshd_config                    DESKTOP-CBSK60R\You  DESKTOP-CBSK60R\You Allow  FullControl…
sshd.pid                       BUILTIN\Administrators DESKTOP-CBSK60R\You Allow  FullControl…
```

使用 PowerShell 脚本修正权限：

```sh
using namespace System.Security.AccessControl
using namespace System.Security.Principal

$acl = Get-Acl .
$identity = New-Object NTAccount("System")
$rights = [FileSystemRights]::FullControl
$type = [AccessControlType]::Allow
$accessRule = New-Object FileSystemAccessRule($identity,$rights,$type)
$acl.SetAccessRule($accessRule)
$acl.SetOwner($identity)

$other = New-Object NTAccount("otherusers")
$otherRule  = New-Object FileSystemAccessRule($other,$rights,$type)
$acl.RemoveAccessRule($otherRule)
Set-Acl -Path "ssh_host_*_key" -AclObject $acl
Get-Acl * | Format-Table
```

日志配置 SyslogFacility 指定记录日志消息时使用的日志工具代码，UNIX Syslog Facilities，默认值 AUTH。

Win32 OpenSSH v7.6.1.0 之前的版本只支持 LOCAL0 一种日志工作，基于文件 logs\sshd.log。新版本支持 ETW - Event Tracing for Windows，除了日志文件方式，其它日志类型设置都会将日志会记录到以下位置，可以使用日志查看器 eventvwr.msc 查看，归类于应用程序与服务日志：

    %SystemRoot%\System32\Winevt\Logs\

OpenSSH 在 Windows 中配置用户名和组名不区分大小写（与 Unix 不同）。无论原始大小写如何，在指定这些时都应始终使用小写字母。

请注意域帐户的以下内容：

在 v7.7.0.0 之前，没有明确定义的方式来指定域主体（用户和组）。为了以各种形式考虑域主体，建议在配置基于用户/组的规则时使用格式为 `user?domain*`。 注意 ? 代替 @ 以避免与 username@host 格式冲突并添加 * 以覆盖 FQDN。

从 v7.7.0.0 起，工作组用户/组和连接互联网的帐户被严格解析为其本地帐户名称（无域部分，类似于标准 Unix 名称）。域用户和组被严格解析为 NameSamCompatible 格式，domain_short_name\user_name。所有基于用户/组的配置规则都需要遵守这种格式。

    Ex. for domain users and groups
    DenyUsers contoso\admin@192.168.2.23 : blocks contoso\admin from 192.168.2.23
    DenyUsers contoso\* : blocks all users from contoso domain
    AllowGroups contoso\sshusers : only allow users from contoso\sshusers group
    AllowGroups "contoso\ssh users" : only allow users from "contoso\ssh users" group

    Ex. for local users and groups
    AllowUsers localuser@192.168.2.23
    AllowGroups sshusers


## ⚡ ACL/ACE/SID 与访问权限系统
- https://docs.microsoft.com/en-us/windows/win32/secauthz/access-control-model
- https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/access-control
- https://docs.microsoft.com/en-us/dotnet/api/system.security.accesscontrol.filesystemsecurity
- https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/icacls
- Windows SID & Integrity Level https://0xfocu5.github.io/posts/37e301d0/
- .Net Core Libraries 项目开源地址 https://github.com/dotnet/corefx
- Security in the .NET Framework - ACL Technology https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-4.0/ms229742(v=vs.100)

Windows Active Directory 网络中，使用 ACL 访问控制列表定义有权访问相关对象的受信任方，以及他们拥有的访问类型，受信任方可以是任何安全主体，例如用户帐户、组或登录会话。

Windows 系统使用 ACL 访问控制列表来实现安全权限管理，包括文件、文件夹的访问权限管理。

对于任何可用的对象，例如文件、文件夹，都可以将其拥有的各种可能权限，如读、写等权限赋给指定的 ACL 对象，如计算机账户、用户组等等。为了方便管理员的操作，权限设计为可以被继承模式，例如文件可以通过继承获取与父目录所具有的权限设置。

这个系统中涉及三个基本内容，一是被访问的对象，二是被访问对象可提供的权限或者是功能，三是获取相应权限的受信任方，即*安全主体* Security Principal。而 ACL/ACE 在这个系统中充当的是，这种信任关系管理系统中的数据结构。

Windows 系统上的 Security Principals 包含以下几类：

- Local Accounts
- Active Directory Accounts
- Microsoft Accounts
- Service Accounts
- Active Directory Security Groups


安全系统涉及的高频名词：

- Authentication 认证、验证、许可
- Authorization 批准、授权
- Permission 同意, 许可; 准许
- Priviledge 特权
- Audit 审计, 调查
- Security 安全性

Access Control Lists (ACL) 是数据表或简单列表，有两类，它们与 ACE 的关系如下：

   - Discretionary Access Control List (DACL)
       - Access denied ACE
       - Access allowed ACE
       - Access denied object ACE
       - Access allowed object ACE
   - System Access Control List (SACL)
       - System audit ACEs
       - System audit object ACEs

DACL 为受信方定义相关安全对象的访问权，包含任意个 ACE。当受信方试图访问对象时，系统会检查 DACL，以了解对该对象授权的访问级别。如果一个安全对象没有任何与之关联的 DACL，那么系统将授予其完全访问权限。如果为对象定义了 DACL，但没有 ACE，则系统将拒绝所有受托人访问该对象。

SACL 生成审核日志，指定受信者是否试图访问对象，是被授予还是被拒绝，以及如果被授予，受托人将获得何种类型的访问。

Access Control Entry (ACE) 分为 6 类，所有安全对象都支持的有前面三个，后面三个根据对象类型使用，称为 object-specific ACEs：

1. Access denied ACE (Used in a DACL)
2. Access allowed ACE (Used in a DACL)
3. System audit ACE (Used in a SACL)
4. Access denied object ACE (Used in a DACL)
5. Access allowed object ACE (Used in a DACL)
6. System audit object ACE (Used in a SACL)

每个 ACE 都命名一个受信者，并定义受信者对相关安全对象的访问类型。因此，ACE 列表决定了可保护对象的整个访问权限，从而使该对象不受任何可能产生灾难性后果的关键数据暴露威胁的影响。实施此类安全检查措施可确保组织免受潜在的数据泄露或黑客攻击。

每个 ACE 都有以下要素构成：

- The security identifier (SID) of a trustee.
- An access mask, which is a 32-bit value that defines the operations that are either allowed or denied for the trustee.
- A flag that indicates the type of ACE, such as whether it is an access denied ACE, access allowed ACE, or a system audit ACE.
- A set of bit flags that determine if child containers or objects can inherit the ACE from their primary object or parent.


### ===🗝 SID - Security ID

安全标识符 SID 是二进制格式的数据结构，包含可变数量的值，是安全主体或安全组的唯一标识。*安全主体* Security Principal 是可由操作系统进行身份验证的任何实体，例如用户帐户、计算机帐户，或在用户或计算机帐户的安全上下文中运行的线程或进程。

创建安全主体时，SID 就一并创建，并且这是唯一的，可用于确认一个安全主体。本地用户或组的 SID 由计算机的 Local Security Authority (LSA) 生成。域账户或组的 SID 由 Domain security authority (DSA) 生成，并且保存到 Active Directory Domain Services 用户或组属性中。

SID 数据结构中的第一个部分包含有关 SID 结构的信息，如 Subauthority Count 和 SID Revision Version。

其余的值按层次结构排列，类似于电话号码：

- SID-issuing authority (for example, “NT Authority”), 
- the SID-issuing domain, 
- and a particular security principal or group.

SID 第二部分是 Identifier authority，确定可以为特定类型的安全主体颁发 SID 的最高权限级别。例如，Everyone 用户组 SID 标识符权限值为 1 (World Authority)。特定 Windows Server 帐户或组 SID 标识符权限值为 5 (NT Authority)。

其它可能的值为：

     0 SECURITY_NULL_SID_AUTHORITY 空帐户 SID S-1-0-0
     1 SECURITY_WORLD_SID_AUTHORITY EveryOne 组 只有一个 SID S-1-1-0
     2 SECURITY_LOCAL_SID_AUTHORITY local group 只有一个 SID S-1-2-0
     3 SECURITY_CREATOR_SID_AUTHORITY 创建者 SID S-1-3-0 ~ S-1-3-5
     4 SECURITY_NON_UNIQUE_AUTHORITY 未使用
     5 SECURITY_NT_AUTHORITY 拥有由 NT 安全子系统管理的帐户
     9 SECURITY_RESOURCE_MANAGER_AUTHORITY 
    16 SECURITY_MANDATORY_LABEL_AUTHORITY 完整性等级

SID 第三部分是子权限系列 Subauthorities，有多个，这也是 SID 最重要的部分。系列中最后一个值称为相对标识符 relative identifier (RID)，用于标识相对于域的特定帐户或组。之前的所有值共同标识企业中的一个域，这一部分称为域标识符。

SID 标识的转换为字符串后的格式如下：

    S-R-X-Y1-Y2-Yn-1-Yn

| Comment |                                 Description                                 |
|---------|-----------------------------------------------------------------------------|
| S       | Indicates that the string is a SID                                          |
| R       | Indicates the revision level                                                |
| X       | Indicates the identifier authority value                                    |
| Y       | Represents a series of subauthority values, where n is the number of values |

如前面所说，SID 最重要的信息是 Y 表示的一系列 subauthority values，其第一部分 (-Y1-Y2-Yn-1) 表示 domain identifier。这个元素在具有多个域的企业中变得非常重要，因为域标识符将一个域发布的 SID 与企业中所有其他域发布的 SID 区分开来，企业中没有两个域共享相同的域标识符。

子权限值系列最后一项（-Yn）是相对标识符，它将一个帐户或组与域中的所有其他帐户和组区分开来，任何域中没有两个帐户或组共享相同的相对标识符。

例如，以下是 Contoso\Domain Admins 的 SID:

    S-1-5-21-1004336348-1177238915-682003330-512

- A revision level (1)
- An identifier authority (5, NT Authority)
- A domain identifier (21-1004336348-1177238915-682003330, Contoso)
- A relative identifier (512, Domain Admins)

有些特殊的 SID 应于不同的场合，Universal Well-Known SID:

- S-1-0-0 (Null SID): Assigned when the SID value is unknown, or for a group without any members.
- S-1-1-0 (World): This is a group of every user (EveryOne).
- S-1-2-0 (Local): This SID is assigned to users who log on to a local terminal.
- S-1-2-1 Console Logon   A group that includes users who are logged on to the physical console.
- S-1-5   NT Authority    A SID that represents an identifier authority.


完整性级别表示正在运行的应用程序进程和对象的可信度，例如应用程序创建的文件，由一组特殊的 SID 和 ACL 条目实现的，它们代表五个不断增加的特权级别：

Table 2-3: Integrity SIDs

|    Integrity Levels   |     SID      |
|-----------------------|--------------|
| Untrusted(?)          | S-1-16-0     |
| Low integrity (LW)    | S-1-16-4096  |
| Medium integrity (ME) | S-1-16-8192  |
| High integrity (HI)   | S-1-16-12288 |
| System integrity (SI) | S-1-16-16384 |

参考 Mario Hewardt, Daniel Pravat: Advanced Windows Debugging

Integrity Level 完整性等级保护增加了一层防御，以帮助减少恶意软件损坏操作系统的机会。在各种 Windows 开发工具包中，完整性级别通常被称为强制标签，Mandatory Label。重要的是，完整性级别的目标是保护操作系统免受损坏，而不是阻止数据泄露，完整性保护只允许或禁止写操作，不允许读操作。

完整性级别的原则非常简单，完整性级别较低的进程无法写入完整性级别较高的对象。当一个进程试图打开一个对象进行写访问时，首先检查完整性级别。如果该检查成功，则执行正常的 DACL 检查。


一些常用用户组与账户的 SID，复数结尾的 s 表示这是一个用户组：

| well-known SIDs  |                   Display Name                   |
|------------------|--------------------------------------------------|
| S-1-5-11         | Authenticated Users                              |
| S-1-5-113        | Local account                                    |
| S-1-5-114        | Local account and member of Administrators group |
| S-1-5-domain-512 | Domain Admins                                    |
| S-1-5-domain-513 | Domain Users                                     |
| S-1-5-domain-514 | Domain Guests                                    |
| S-1-5-32-544     | Administrators  (A built-in group)               |
| S-1-5-32-545     | Users   (A built-in group)                       |
| S-1-5-32-546     | Guests  (A built-in group)                       |
| S-1-5-domain-501 | Guest                                            |

The following table lists the predefined identifier authority constants. The first four values are used with universal well-known SIDs, and the rest of the values are used with well-known SIDs in Windows operating systems designated in the Applies To list.

|        Identifier Authority       | Value | SID String Prefix |
|-----------------------------------|-------|-------------------|
| SECURITY_NULL_SID_AUTHORITY       |     0 | S-1-0             |
| SECURITY_WORLD_SID_AUTHORITY      |     1 | S-1-1             |
| SECURITY_LOCAL_SID_AUTHORITY      |     2 | S-1-2             |
| SECURITY_CREATOR_SID_AUTHORITY    |     3 | S-1-3             |
| SECURITY_NT_AUTHORITY             |     5 | S-1-5             |
| SECURITY_AUTHENTICATION_AUTHORITY |    18 | S-1-18            |

The following RID values are used with universal well-known SIDs. The Identifier authority column shows the prefix of the identifier authority with which you can combine the RID to create a universal well-known SID.

| Relative Identifier Authority | Value | Identifier Authority |
|-------------------------------|-------|----------------------|
| SECURITY_NULL_RID             |     0 | S-1-0                |
| SECURITY_WORLD_RID            |     0 | S-1-1                |
| SECURITY_LOCAL_RID            |     0 | S-1-2                |
| SECURITY_CREATOR_OWNER_RID    |     0 | S-1-3                |
| SECURITY_CREATOR_GROUP_RID    |     1 | S-1-3                |


### ===🗝 ICACLS & Get-Acl/Set-Acl

icacls - Intergrity Control Access Control List 命令用来显示、修改指定文件的 DACL，或并将 DACL 应用于指定目录、文件。相当于 Linux 中的 chmod 命令，原命令 cacls 已经被废弃。

例如，当设置文件或目录的所有者，就是在设置 DACL 列表，将用户账户相关的 ACE 添加到 ACL 列表，并将原所有者 ACE 记录移除。

PowerShell 等价命令是 Get-Acl 和 Set-Acl，它们提供更完善的功能，例如 Get-Acl 可以直接查看到 Owner。

```sh
> Get-Acl .\logs\ | Format-List

Path   : Microsoft.PowerShell.Core\FileSystem::C:\ProgramData\ssh\logs\
Owner  : Everyone
Group  : NT AUTHORITY\SYSTEM
Access : NT AUTHORITY\SYSTEM Allow  FullControl
         BUILTIN\Administrators Allow  FullControl
         Everyone Allow  FullControl
         CREATOR OWNER Allow  268435456
         BUILTIN\Users Allow  ReadAndExecute, Synchronize
         BUILTIN\Users Allow  Write
Audit  :
Sddl   : O:WDG:SYD:AI(A;OICIID;FA;;;SY)(A;OICIID;FA;;;BA)(A;ID;FA;;;WD)(A;OICIIOID;GA;;;CO)(A;OICIID;0
         x1200a9;;;BU)(A;CIID;DCLCRPCR;;;BU)
```

计算机中的账户可以通过 compmgmt.msc 计算机管理控制台进行管理，也可以通过 *whoami.exe /groups* 查询现有账户信息。当一个账户被删除后，磁盘文件、目录可能还残留有旧的 ACL 数据，这就会在文件安全面板出现一些未知账户，以 SID 字符串替代账户显示出来。


ICACLS 工具使用：

```sh
> ICACLS name /save aclfile [/T] [/C] [/L] [/Q]
# 将 DACL 存储到 aclfile 中，后缀使用 /restore 还原。请注意，未保存 SACL、所有者或完整性标签。

> ICACLS directory [/substitute SidOld SidNew [...]] /restore aclfile [/C] [/L] [/Q]
# 将存储的 DACL 文件应用于目录中的文件。

> ICACLS name /setowner user [/T] [/C] [/L] [/Q]
# 更改新的所有者，该选项不会强制更改所有身份；使用 takeown.exe 实现该目的。

> ICACLS name /findsid Sid [/T] [/C] [/L] [/Q]
# 查找 ACL 中包含指定 Sid 的文件、目录。

> ICACLS name /verify [/T] [/C] [/L] [/Q]
# 查找其 ACL 不规范或长度与 ACE 计数不一致的所有文件。

> ICACLS name /reset [/T] [/C] [/L] [/Q]
# 为所有匹配文件使用默认继承的 ACL 替换 ACL。

> ICACLS name [/grant[:r] Sid:perm[...]]
       [/deny Sid:perm [...]]
       [/remove[:g|:d]] Sid[...]] [/T] [/C] [/L] [/Q]
       [/setintegritylevel Level:policy[...]]

    # /grant[:r] Sid:perm 授予指定的用户访问权限。
    #     使用 :r 用这些权限替换以前授予的所有显式权限。
    #     不用 :r 将这些权限添加到以前授予的所有显式权限。

    # /deny Sid:perm 显式拒绝指定的用户访问权限。
    #     将为列出的权限添加显式拒绝 ACE，
    #     并删除所有显式授予的权限中的相同权限。

    # /remove[:[g|d]] Sid 删除 ACL 指定 SID 所有权限。
    #     使用 :g 将删除授予该 SID 的所有权限。
    #     使用 :d 将删除拒绝该 SID 的所有权限。

    # /setintegritylevel [(CI)(OI)] 将完整性级别 ACE 显式添加到所有匹配文件。
    #     完整性 ACE 的继承选项可以优先于级别，但只应用于目录。
    #     Level 替换为以下级别之一:
    #          L[ow]
    #          M[edium]
    #          H[igh]

> ICACLS name /inheritance:e|d|r
    #     e - 启用 (I) 继承
    #     d - 禁用继承并复制 ACE
    #     r - 删除所有继承的 ACE

# Basic permissions:
icacls * /grant:r EveryOne:"RW"; 
icacls * /remove:g EveryOne; 

icacls * /deny EveryOne:"RW"; 
icacls * /remove:d EveryOne; 

icacls * /grant EveryOne:"RW" /deny EveryOne:"R";

# Advanced permissions:
# A comma-separated list in parenthesis of specific rights 
icacls * /grant EveryOne:"(D,WDAC)"
icacls * /grant *S-1-5-21:"(D,WDAC)"

# Inheritance rights may precede either <perm> form:
ICACLS * /inheritance:e
ICACLS * /inheritance:d
ICACLS * /inheritance:r

# To save the DACLs for all files in the C:\Windows and its subdirectories.
icacls c:\windows\* /save aclfile /t

# To restore the DACLs for every file within ACLFile 
# that exists in the C:\Windows directory and its subdirectories.
icacls c:\windows\ /restore aclfile

# Set Owner of files
icacls * /setowner OCEAN

icacls * /remove "NT AUTHORITY\Authenticated Users" EveryOne
icacls * /reset
```

注意:

   - Sid 可以采用数字格式或友好的账户名称格式，如果给定数字格式，那么请在 SID 的数字开头添加一个 * 号。
   - /T 指示在以该名称指定的目录下的所有匹配文件/目录上执行此操作。
   - /C 指示此操作将在所有文件错误上继续进行，仍显示错误消息。
   - /L 指示此操作在符号链接本身而不是其目标上执行。
   - /Q 指示 icacls 应该禁止显示成功消息。

文件安全属性面板与 icacls 命令内容有对应关系，安全选项卡分为两部分，上面用户组及账户对应访问控制列表（ACL），下方权限列表对应（ACE）。

安全面板显示的是一般权限，读、写、执行等等，对应 icals 的 Basic permissions 选项。

|      Basic Permissions       |   Types    |    Note    |
|------------------------------|------------|------------|
| F - Full access              | Grant/Deny | 完全控制   |
| M - Modify access            | Grant/Deny | 修改(RXRW) |
| RX - Read and execute access | Grant/Deny | 读取和运行 |
| R - Read-only access         | Grant/Deny | 读取       |
| W - Write-only access        | Grant/Deny | 写入       |

在权限列表中还可能出现“特殊权限”，它指代的是在高级权限面板中的出现的其它特殊权限，比如读取、写入属性，读取、写入权限，遍历目录(X)，列出文件夹(RD) 等等。

在高级权限面板中有更详细的 ACE 权限条目，包括权限类型、安全主体类型、继承性、访问属性，对应 icals 的 Advanced permissions 选项。

|          Advanced Permissions         |
|---------------------------------------|
| D - Delete                            |
| RC - Read control (read permissions)  |
| WDAC - Write DAC (change permissions) |
| WO - Write owner (take ownership)     |
| S - Synchronize                       |
| AS - Access system security           |
| MA - Maximum allowed                  |
| GR - Generic read                     |
| GW - Generic write                    |
| GE - Generic execute                  |
| GA - Generic all                      |
| RD - Read data/list directory         |
| WD - Write data/add file              |
| AD - Append data/add subdirectory     |
| REA - Read extended attributes        |
| WEA - Write extended attributes       |
| X - Execute/traverse                  |
| DC - Delete child                     |
| RA - Read attributes                  |
| WA - Write attributes                 |

安全主体的 ACL 权限继承性选项有五种，以下是各种继承的功能，：

| Inheritance   | Means                       | 说明                             |
| ------------- | --------------------------- | :------------------------------- |
| (I)           | Inherit.                    | 从父容器继承 ACE                  |
| (OI)          | Object inherit.             | 此容器内的对象继承此 ACE           |
| (CI)          | Container inherit.          | 此容器内的容器继承此 ACE           |
| (IO)          | Inherit only.               | 从父容器继承此 ACE 嵌套继承但仅限于容器   |
| (NP)          | Do not propagate inherit.   | 从父容器继承此 ACE 于子容器及对象但不嵌套 |

注意，Containers 容器这个术语可以理解为目录，Object 对象这个术语理解为文件，但它不仅于文件和目录这种具体的对象。

除了第一种 (I) 不局限用途，比如从父目录继承权限的子目录或者文件，其它四种只能用于目录权限的继承。

使用 icacls 设置权限时，只支持 ICACLS name /inheritance:e 启用 (I) 这种继承，其它继承设置需要通过属性面板操作，继承权优先于其它权限。

因为继承性的加入，权限管理就显得过分复杂，并且还有一些特殊的权限主体。

Everyone 或者 World 是一个用户组，包含所有用户，所有用户都是这个组的成员，所以叫世界组。当为 EveryOne 这个组设置权限时，注意，所有用户都会获取相应的权限。

CREATOR OWNER 也比较特殊，它是可继承 ACE 内的一个占位符。NTFS 磁盘文件的安全选项中都会有"所有者"一项，它代表的是文件、文件夹的拥有者。当 ACE 被继承，其 CREATOR OWNER SID 也随之改变为新的所有者的 SID。

例如，当父目录设置了 (OI) 或 (CI) 继承，那么目录内的文件或目录就会继承其 ACE。父目录设置 CREATOR OWNER 的权限就会被继承到目录下的文件或目录上，它们的所有者就会继承到父目录 CREATOR OWNER 拥有的权限。

要移除一个对象从父容器继承得到的权限，无法直接使用 /remove 从其本身移除，只能先使用 icacls /inheritance:r 命令将继承权限移除，或者使用  /inheritance:d 禁继承后，再 /remove 相应的权限。

演示如下，ssh 目录的权限设置中可以看到：

- 4 个账户都有设置 (I)，即从上一级目录继承了权限：
- Users 账户设置 (CI)(WD,AD,WEA,WA)，这部分会继承给子目录，即 logs 目录才继承并拥有这一组权限；
- Users 账户设置 (OI)(CI)(RX)，这部分会将 RX 读取和运行权限继承给子目录及文件，可以看到它们都有 (RX) 权限；
- CREATOR OWNER 设置 (OI)(CI)(IO)(F)，这部分将会嵌套继承到子目录及文件，也就是它们的所有者会拥有 (F) 完全控制权；

使用 Get-Acl 命令就可以查询到文件的所有者归属，并且输出的内容更直观。

```sh
> cd $Env:ProgramData\ssh\
> icacls . /Remove CreatorOwner; icacls .; icacls logs; icacls ssh_host_dsa_key

. NT AUTHORITY\SYSTEM:(I)(OI)(CI)(F)
  BUILTIN\Administrators:(I)(OI)(CI)(F)
  CREATOR OWNER:(I)(OI)(CI)(IO)(F)
  BUILTIN\Users:(I)(OI)(CI)(RX)
  BUILTIN\Users:(I)(CI)(WD,AD,WEA,WA)

logs NT AUTHORITY\SYSTEM:(I)(OI)(CI)(F)
     BUILTIN\Administrators:(I)(OI)(CI)(F)
     Everyone:(I)(F)
     CREATOR OWNER:(I)(OI)(CI)(IO)(F)
     BUILTIN\Users:(I)(OI)(CI)(RX)
     BUILTIN\Users:(I)(CI)(WD,AD,WEA,WA)

ssh_host_dsa_key NT AUTHORITY\SYSTEM:(I)(F)
                 BUILTIN\Administrators:(I)(F)
                 Everyone:(I)(F)
                 BUILTIN\Users:(I)(RX)
```

Get-Acl Set-Acl 使用示范，注意，PowerShell 会自动将字符串转换为枚举，也可以使用这样的转换表达式 *[AccessControlType]"Allowd"*：

```sh
# (".","logs",".\ssh_host_dsa_key")|Get-Acl|Format-List
# https://docs.microsoft.com/en-us/dotnet/api/system.security.accesscontrol.objectsecurity
# https://docs.microsoft.com/en-us/dotnet/api/system.security.accesscontrol.filesystemsecurity

# Example 1: Copy a security descriptor from one file to another
$DogACL = Get-Acl -Path "C:\Dog.txt"
Set-Acl -Path "C:\Cat.txt" -AclObject $DogACL

# Example 2: Use the pipeline operator to pass a descriptor
Get-Acl -Path "C:\Dog.txt" | Set-Acl -Path "C:\Cat.txt"

# Example 3: Apply a security descriptor to multiple files
$NewAcl = Get-Acl File0.txt
$files = Get-ChildItem -Path "C:\temp" -Recurse -Include "*.txt" -Force
 Set-Acl -InputObject $files -AclObject $NewAcl

# Example 4: Disable inheritance and preserve inherited access rules
$NewAcl = Get-Acl -Path "C:\Pets\Dog.txt"
$isProtected = $true
$preserveInheritance = $true
$NewAcl.SetAccessRuleProtection($isProtected, $preserveInheritance)
Set-Acl -Path "C:\Pets\Dog.txt" -AclObject $NewAcl

# Example 5: Grant Administrators Full Control of the file
using namespace System.Security.AccessControl #.FileSystemAccessRule ...
$NewAcl = Get-Acl -Path "C:\Pets\Dog.txt"
# Set properties
$identity = "BUILTIN\Administrators"
$rights = "FullControl" # or [AccessControlType]::Deny
$type = "Allow"         # or [AccessControlType]::Deny
# Create new rule
$args = $identity, $rights, $type
$fileSystemAccessRule = New-Object -TypeName FileSystemAccessRule -ArgumentList $args
# Apply new rule
$NewAcl.SetAccessRule($fileSystemAccessRule)
Set-Acl -Path "C:\Pets\Dog.txt" -AclObject $NewAcl
```

换一种脚本写法，使用静态类型转换调用枚举数据，使用 New-Object 创建对象实例：

```sh
# ACL & ACE process
using namespace System.Security.AccessControl
using namespace System.Security.Principal

$file = "sshd.pid"
$NewAcl = Get-Acl -Path $file # get FileSecurity or DirectorySecurity
$NewAcl | Format-List

# Set properties
# $identity = "BUILTIN\Administrators" 
$identity = New-Object  NTAccount("Users")
$rights = [FileSystemRights]::ExecuteFile -bor [FileSystemRights]::Write -bor [FileSystemRights]::Read
$type = [AccessControlType]::Allow

# Create new rule
$args = $identity, $rights, $type
$fileSystemAccessRule = New-Object FileSystemAccessRule($args)

# Set new owner
$NewAcl.SetOwner($identity)

# Append new rule to ACL
$NewAcl.AddAccessRule($fileSystemAccessRule)
# Grant new rule
$NewAcl.SetAccessRule($fileSystemAccessRule)
# Remove rules
#$NewAcl.RemoveAccessRule($fileSystemAccessRule)

# Remove inheritance priveledges
$isProtected = $true # Not allow inheritance if true
$preservedInheritance = $false
#$NewAcl.SetAccessRuleProtection($isProtected, $preservedInheritance)

$files = (dir *.*) 
$files = Get-ChildItem -Path "." -Recurse -Include "*" -Force
#Set-Acl -InputObject $file -AclObject $NewAcl

Set-Acl -Path "*" -AclObject $NewAcl
$NewAcl | Format-List
```

创建访问权限规则对象 FileSystemAccessRule，有两类构造方法，一是创建包含安全主体、权限、访问类型这些基本信息，另一种是额外包含权限继承选项。要将所有者复制到子目录及文件，需要通过目录属性面板的高级安全属性中操作。

现有继承权限还可以使用 SetAccessRuleProtection 方法单独处理，这个方法接收两个布尔值：

- *isProtected* 指示是否保护 ACL 防止继承得到的其它 ACL，如果不保护，就会通过继承机制得到父级容器的 ACL；
- *preservedInheritance* 指示是否保持继承权，如果不保持继承权，所有通过继承的权限将会失去；

```cs
public void SetAccessRuleProtection (bool isProtected, bool preserveInheritance);
```

InheritanceFlags 继承标志选项对应启用 CI 和 OI 两种继承方式：ContainerInherit、ObjectInherit，分别使子目录、文件拥有父级的权限。

PropagationFlags 控制 ACE 如何传播到子对象，在启用继承标志时，以下这些值才有效：

- *InheritOnly* - IO 传递方式，从父容器继承此 ACE 嵌套继承但仅限于容器；
- *None* - 不设置继承标记；
- *NoPropagateInherit* - NP 传递方式，从父容器继承此 ACE 于子容器及对象但不嵌套。

Specifies how Access Control Entries (ACEs) are propagated to child objects.  These flags are significant only if inheritance flags are present.

    Specifies that the ACE is propagated only to child objects. This includes both container and leaf child objects.

    Specifies that no inheritance flags are set.

    Specifies that the ACE is not propagated to child objects.

ACE 传递是比较费解的，因为它要结合 InheritanceFlags 标志使用，一个容器设置继承标记位决定其 ACE 可否被子容器，或者子对象继承。而传递标志位决定了如何将 ACE 传递到子容器或子对象。

不同的组合功能如下，ACL Propagation Rules，Target 是当前正在设置 ACE 的容器：

| Flag combinations |                          Propagation results                          |
|-------------------|-----------------------------------------------------------------------|
| No Flags          | Target folder.                                                        |
| OI                | Target folder, child object, grandchild object.                       |
| OI and NP         | Target folder, child object.                                          |
| OI and IO         | Child object, grandchild object.                                      |
| OI, IO, and NP    | Child object.                                                         |
| CI                | Target folder, child folder, grandchild folder.                       |
| CI, and NP        | Target folder, child folder.                                          |
| CI, and IO        | Child folder, grandchild folder.                                      |
| CI, IO, and NP    | Child folder.                                                         |
| CI, and OI        | Target folder, child folder and object, grandchild folder and object. |
| CI, OI, and NP    | Target folder, child folder and object.                               |
| CI, OI, and IO    | Child folder, child object, grandchild folder and object.             |
| CI, OI, NP, IO    | Child folder, child object.                                           |

注意，要实现特定的子目录及对象的权限继承，无法一次过实现，需要进行多次操作。


API 用途总结：

- SetAccessRule 设置对象的 ACL，以及控制是否要通过 CI 或 CI 方式继承到子级；
- SetAccessRule 另一用法是通过 AccessRule 传入 accessMask 和 isInherited 来直接控制权限和继承；
- SetAccessRuleProtection 控制当前对象的如何处理继承得来的 ACL；


```sh
using namespace System.Security.AccessControl
using namespace System.Security.Principal

$identity = New-Object NTAccount("Ocean")
$acl = Get-Acl .
#$acl.SetOwner($identity)

# CI, and OI ==> Target folder, child folder and object, grandchild folder and object.
$inheritance = [InheritanceFlags]::ContainerInherit -bor [InheritanceFlags]::ObjectInherit
$propagation = [PropagationFlags]::None

# OI, IO, and NP ==> Child object.
# $inheritance = [InheritanceFlags]::ContainerInherit -bor [InheritanceFlags]::ObjectInherit
# $propagation = [PropagationFlags]::NoPropagateInherit

# CI  ==> Target folder, child folder, grandchild folder
# $inheritance = [InheritanceFlags]::ContainerInherit
# $propagation = [PropagationFlags]::None

$rights = [FileSystemRights]::Modify
$type = [AccessControlType]::Allow
$args = $identity,$rights,$inheritance,$propagation,$type

# $isInherited = $false
# $accessMask = [int]0xffff
# $args = $identity,$accessMask,$isInherited,$inheritance,$propagation,$type

$rule = New-Object FileSystemAccessRule($args)
$acl.SetAccessRule($rule)

$isPretected = $true # Protece ACLs, don't inerit permissions from parent container
$preservedInheritance = $false # Let permintions inherited go awawy
$acl.SetAccessRuleProtection($isPretected,$preservedInheritance)

Set-Acl -Path . -AclObject $acl

# icacls . /remove otheruser1 /remove ...
# icacls *
Get-Acl . | Format-List
Get-Acl * | Format-Table
```

“拒绝访问”是一个很多人都想知道的问题，为什么以管理员身份登录，即使是资源的所有者，却没法访问文件资源或服务呢？
统限制了，在开启用户账户控制的情况下，管理员组的权限会被系统设置为“只用于拒绝的组”。

也就是说，这个用户组只能用于设置 Deny 权限，系统并没有给你完整的权限。设置相应的 deny 权限后，因为它的优先级更高，被拒绝的权限就不能再使用，即使已经通过 grant 授予账户相应的权限。

ICACLS 保留 ACE 项的规范顺序为显式拒绝 -> 显式授予 -> 继承的拒绝-> 继承的授予：

- Explicit denials
- Explicit grants
- Inherited denials
- Inherited grants

所以，当管理员账户 deny 完全控制权时，这就很尴尬，自动放弃了权限导致资源不受控制，包括无法删除的文件。

还有一种上诡异的现象，在用户目录下创建的目录是正常可以删除的，通过使用 git clone 产生了包含只读属性的 .git 目录，这会导致其上级目录无法被删除到回收站，并且总是提示需要管理员权限，但可以强制删除。

解决方法是 Take Ownership of a File or Folder 或者使用 TAKEOWN 命令获取资源的所有权。

操作路径 *Windows Explorer* 定位到文件，从右键菜单打开文件属性面板 *Properties*，选择安全选项卡 *Security*，进入高级面板 *Advanced* 并且点击所有权选项卡上的更改按钮，在弹出的选择用户组、账户面板中选择一个新的所有者。

对于一个目录，还可以勾选*替换子容器及对象的所有者*，以设置子目录及文件为新的所有者所拥有。

要获取所有权，可使用的命令有三个，takwown 最简单，其次是 icacls，最后是 Set-Acl：

```sh
> takeown /F .\sshd_config
> icacls .\sshd_config /setowner YourAccount

using namespace System.Security.AccessControl
using namespace System.Security.Principal

$identity = New-Object NTAccount("YourAccount")
$acl = Get-Acl .\sshd_config
$acl.SetOwner($identity)
Set-Acl -Path .\sshd_config -AclObject $acl
```

而在 Linux 系统上，使用 chmod chgrp chown 三个命令，并且文件权限结构表达极简，三个 8 进入制数字就可以解决，0777 打满权限。

Linux 文件有三种权限，对应值 1、2、4，全权相加为 7：

- *read* 指示文件可否被读取，对于目录就是可否获取文件列表，或拷贝等操作；
- *write* 指示文件可否被写入，对于目录就是可否创建文件，或删除等操作；
- *execute* 指示文件可否执行，对于目录就是可否进入目录操作；

有三种用户访问类型，对应文件权限的三个数值：

- *owner* 是文件的所有者，默认是创建文件的账户；
- *group* 是拥有文件的组，可以和所有者的用户组不同；
- *others* 是其它用户，即不是 owning group 又不是 owner 的用户；



## ⚡ ScriptBlockAst - Abstract Syntax Tree
- https://docs.microsoft.com/en-us/dotnet/api/system.management.automation.language
- https://docs.microsoft.com/en-us/dotnet/api/system.management.automation.scriptblock
- https://devblogs.microsoft.com/scripting/learn-how-it-pros-can-use-the-powershell-ast/
- https://vexx32.github.io/2018/12/20/Searching-PowerShell-Abstract-Syntax-Tree
- https://powershell.one/powershell-internals/parsing-and-tokenization/abstract-syntax-tree
- Windows PowerShell Cookbook: The Complete Guide to Scripting Microsoft's Command Shell
- Mastering Powershell Scripting, 4th, by Chris Dent
- [PowerShell Sources](System.Management.Automation\engine\parser\Parser.cs)

PowerShell Language Specification 3.0 官方文档参考：

- [ 1. Introduction](lang-spec/chapter-01.md)
- [ 2. Lexical Structure](lang-spec/chapter-02.md)
- [ 3. Basic concepts](lang-spec/chapter-03.md)
- [ 4. Types](lang-spec/chapter-04.md)
- [ 5. Variables](lang-spec/chapter-05.md)
- [ 6. Conversions](lang-spec/chapter-06.md)
- [ 7. Expressions](lang-spec/chapter-07.md)
- [ 8. Statements](lang-spec/chapter-08.md)
- [ 9. Arrays](lang-spec/chapter-09.md)
- [10. Hashtables](lang-spec/chapter-10.md)
- [11. Modules](lang-spec/chapter-11.md)
- [12. Attributes](lang-spec/chapter-12.md)
- [13. Cmdlets](lang-spec/chapter-13.md)
- [ A. Comment-Based Help](lang-spec/chapter-14.md)
- [ B. Grammar](lang-spec/chapter-15.md)
- [ C. References](lang-spec/chapter-16.md)

PowerShell 脚本的功能十分强大，同时作为系统的功能组件不会被常规杀毒引擎查杀，导致恶意程序从 2012 年开始得到快速发展。从高级持续威胁、勒索软件、网络钓鱼电子邮件、加密劫持、金融威胁到无文件攻击。但是，由于 PowerShell 语言在设计上是动态的，并且可以在不同级别构建脚本片段，因此基于最新静态分析的 PowerShell 攻击检测方法本质上容易受到混淆。

In recent years, PowerShell is increasingly reported to appear in a variety of cyber attacks ranging from advanced persistent threat, ransomware, phishing emails, cryptojacking, financial threats, to fileless attacks.

无文件攻击在感染计算机时，不需写入磁盘即可从事恶意活动，绕过那些基于签名和文件检测的传统安全软件。 如何检测这些恶意行为成了安全厂商和企业用户与个人更为关心的问题。微软在 2015 年中旬开始提出了针对无文件攻击和 PowerShell 脚本攻击的检测缓解方案 AMSI - Antimalware Scan Interface。

定向威胁攻击 APT - Advanced Persistent Threat 的特点是不易被安全检测引擎所发现，当中的功劳很大程度都是归“无文件攻击”所有。

PowerShell's Abstract Syntax Tree, or AST for short, contains a full listing of all parsed content in PowerShell code. This means that it contains just about everything you need to be able to figure out precisely what is going on in someone's code — all without ever having to delve into regex or other text parsing messiness. About the only thing it doesn't contain are code comments, but in this instance that's not what we're here for anyway.

抽象语法树是脚本编译过程产生的一种树状数据结构，通过 AST 可以访问脚本中的各种信息，例如，通过函数的 AST 就可以访问到参数列表，函数名称等等信息。

使用正则表达式可以实现部分字符串内容的解析，但是正则表达式这种专用域语言缺乏通用语言的完善功能，而通用语言中的 AST 则可以提供完整的脚本解析功能。

使用 Set-ExecutionPolicy 命令设置脚本执行策略：

- *Restricted* No Script either local, remote or downloaded can be executed on the system.
- *AllSigned* All script that are ran require to be digitally signed.
- *RemoteSigned* All remote scripts (UNC) or downloaded need to be signed.
- *Unrestricted* No signature for any type of script is required.

每种脚本执行策略都应用到不同的作用域，以控制谁具有执行什么样的脚本，使用 Get-ExecutionPolicy -List 查询：

- *MachinePolicy*: The execution policy set by a Group Policy for all users.
- *UserPolicy*: The execution policy set by a Group Policy for the current user.
- *Process*: The execution policy that is set for the current Windows PowerShell process.
- *CurrentUser*: The execution policy that is set for the current user.
- *LocalMachine*: The execution policy that is set for all users.

ScriptBlock 对象代表预编译的 PowerShell 脚本代码块。

ScriptBlock 有两种结构，旧式 CmdLet 使用完整结构，新式写法更简洁：

    a. Full form (cmdlet form) Legacy PowerShell SDK 
    {
      begin { statementlist; } 
      process { statementlist; } 
      end { statementlist; } 
    }

    b. Simple form
    { statementlist; }

调用脚本块 {"text"}.Invoke()，或者 & {"text"}，后面这种简写方式类似与执行命令，& "path/to/command"。

    {echo $args}.Invoke("hi")

例如，fun.ps1 脚本中定义了两个函数和一些语句，通过打印出来的 AST 信息，可以看到脚本内容就是简单方式组织的，只有 EndBlock 部分的代码：

```sh
> $s = get-command .\fun.ps1
> $s.ScriptBlock.Ast

Attributes         : {}
UsingStatements    : {}
ParamBlock         :
BeginBlock         :
ProcessBlock       :
EndBlock           : function fun() {
                         echo "fun()"
                     }
                     function fun2() {
                         echo "fun2()"
                     }
                     fun
                     fun2
                     echo "fun.ps1"
DynamicParamBlock  :
ScriptRequirements :
Extent             : # The extent in the source this ast represents.
Parent             : # The parent tree for this node.
```

以上是抽象语法树 *ScriptBlockAst* 基本信息，其中 Extent 是整个脚本代码的内容，Block 后缀的部分对应一个代码块，而语法树节点对象的抽象基类 Ast 只有两个属性：

- *Extent*  The extent in the source this ast represents.
- *Parent*  The parent tree for this node.

以下是来自 Windows PowerShell Cookbook (O'Reilly) 书上的例子，保存到 Invoke-ScriptBlock.ps1 文件就可以当作 ComLet 来使用，例如 `.\Invoke-ScriptBlock({echo "hi"})`。

它是一个 Full Form 结构，ParamBlock、BeginBlock、ProcessBlock 都有定义，除了 DynamicParamBlock 和 EndBlock 等代码块：

```sh
<#
.SYNOPSIS

Apply the given mapping command to each element of the input. (Note that
PowerShell includes this command natively, and calls it Foreach-Object)

.EXAMPLE

PS > 1,2,3 | Invoke-ScriptBlock { $_ * 2 }
#>
param(
    ## The script block to apply to each incoming element
    [ScriptBlock] $MapCommand
)
begin
{
    Set-StrictMode -Version 3
}
process
{
    & $MapCommand
}
```

以下是 ComLet 脚本文件、函数代码块对象、脚本字面量代码块对象，等脚本对象的 AST 根节点访问方法：

```sh
# System.Management.Automation.ExternalScriptInfo -> AST
(Get-Command .\Path\Script.ps1).ScriptBlock.Ast
# System.Management.Automation.FunctionInfo -> AST
(Get-Command MyFunction).ScriptBlock.Ast
# Scriptblock literals: System.Object - > Ast
{Test-Path 'C:\'}.Ast
```

更一般的方法是使用 Parser 解析读取到脚本文件内容得到抽象语法树 *ScriptBlockAst*，或者使用 PSParser 进行 Tokenize 得到 *PSToken* 集合：

    [System.Management.Automation.Language.Parser]::ParseFile($Path, [ref] $tokens, [ref]$errors)
    [System.Management.Automation.Language.Parser]::ParseInput($Code, [ref] $tokens, [ref]$errors)

目前有 20 种 PSToken：

    [Enum]::GetNames([System.Management.Automation.PSTokenType]) | Sort-Object

    Attribute
    Command
    CommandArgument
    CommandParameter
    Comment
    GroupEnd
    GroupStart
    Keyword
    LineContinuation
    LoopLabel
    Member
    NewLine
    Number
    Operator
    Position
    StatementSeparator
    String
    Type
    Unknown
    Variable

```sh
$code = Get-Content $PROFILE

[System.Management.Automation.PSParser]::Tokenize($code,[ref]$null) |

    ForEach-Object {

        if ($_.Type -eq 'Command') {

            $Content = $_.Content

            if ($Alias = Get-Alias | where { $_.Name -eq $Content }) {

                New-Object PSObject -Property @{
                    Alias = $Alias.Name
                    Definition = $Alias.Definition
                    Start = $_.Start
                    Length = $_.Length
                }

            }

        }

    } | Format-Table -AutoSize Alias, Definition, Start, Length
```

    Alias Definition   Start Length
    ----- ----------   ----- ------
    echo  Write-Output   572      4
    echo  Write-Output   600      4


抽象语法树上所有节点都在 *Ast* 类型，它是一个抽象基类，非抽象子类有 63 种。

抽象语法树的节点类型定义在 [PowerShell Sources](System.Management.Automation\engine\parser\ast.cs)

```C#
internal class SequencePointAst : Ast
public abstract class AttributeBaseAst : Ast
    public class AttributeAst : AttributeBaseAst
    public class TypeConstraintAst : AttributeBaseAst
public abstract class CommandElementAst : Ast
    public class CommandParameterAst : CommandElementAst
    public abstract class ExpressionAst : CommandElementAst
        public class ArrayExpressionAst : ExpressionAst
        public class ArrayLiteralAst : ExpressionAst, ISupportsAssignment
        public class AttributedExpressionAst : ExpressionAst, ISupportsAssignment, IAssignableValue
            public class ConvertExpressionAst : AttributedExpressionAst, ISupportsAssignment
        public class BinaryExpressionAst : ExpressionAst
        public class ConstantExpressionAst : ExpressionAst
            public class StringConstantExpressionAst : ConstantExpressionAst
        public class ErrorExpressionAst : ExpressionAst
        public class ExpandableStringExpressionAst : ExpressionAst
        public class HashtableAst : ExpressionAst
        public class IndexExpressionAst : ExpressionAst, ISupportsAssignment
        public class MemberExpressionAst : ExpressionAst, ISupportsAssignment
            public class InvokeMemberExpressionAst : MemberExpressionAst, ISupportsAssignment
                public class BaseCtorInvokeMemberExpressionAst : InvokeMemberExpressionAst
        public class ParenExpressionAst : ExpressionAst, ISupportsAssignment
        public class ScriptBlockExpressionAst : ExpressionAst
        public class SubExpressionAst : ExpressionAst
        public class TernaryExpressionAst : ExpressionAst
        public class TypeExpressionAst : ExpressionAst
        public class UnaryExpressionAst : ExpressionAst
        public class UsingExpressionAst : ExpressionAst
        public class VariableExpressionAst : ExpressionAst, ISupportsAssignment, IAssignableValue
public abstract class MemberAst : Ast
    internal class CompilerGeneratedMemberFunctionAst : MemberAst, IParameterMetadataProvider
    public class FunctionMemberAst : MemberAst, IParameterMetadataProvider
    public class PropertyMemberAst : MemberAst
public abstract class RedirectionAst : Ast
    public class FileRedirectionAst : RedirectionAst
    public class MergingRedirectionAst : RedirectionAst
public abstract class StatementAst : Ast
    public abstract class CommandBaseAst : StatementAst
        public class CommandAst : CommandBaseAst
        public class CommandExpressionAst : CommandBaseAst
    public abstract class LabeledStatementAst : StatementAst
        public class SwitchStatementAst : LabeledStatementAst
        public abstract class LoopStatementAst : LabeledStatementAst
            public class DoUntilStatementAst : LoopStatementAst
            public class DoWhileStatementAst : LoopStatementAst
            public class ForEachStatementAst : LoopStatementAst
            public class ForStatementAst : LoopStatementAst
            public class WhileStatementAst : LoopStatementAst
    public abstract class PipelineBaseAst : StatementAst
        public abstract class ChainableAst : PipelineBaseAst
            public class PipelineAst : ChainableAst
            public class PipelineChainAst : ChainableAst
        public class AssignmentStatementAst : PipelineBaseAst
        public class ErrorStatementAst : PipelineBaseAst
    public class BlockStatementAst : StatementAst
    public class BreakStatementAst : StatementAst
    public class ConfigurationDefinitionAst : StatementAst
    public class ContinueStatementAst : StatementAst
    public class DataStatementAst : StatementAst
    public class DynamicKeywordStatementAst : StatementAst
    public class ExitStatementAst : StatementAst
    public class FunctionDefinitionAst : StatementAst, IParameterMetadataProvider
    public class IfStatementAst : StatementAst
    public class ReturnStatementAst : StatementAst
    public class ThrowStatementAst : StatementAst
    public class TrapStatementAst : StatementAst
    public class TryStatementAst : StatementAst
    public class TypeDefinitionAst : StatementAst
    public class UsingStatementAst : StatementAst
public class CatchClauseAst : Ast
public class NamedAttributeArgumentAst : Ast
public class NamedBlockAst : Ast
public class ParamBlockAst : Ast
public class ParameterAst : Ast
public class ScriptBlockAst : Ast, IParameterMetadataProvider
public class StatementBlockAst : Ast
```

例如，查询 AST 上的循环结构节点，LoopStatementAst，参数 $Predicate 指定一个过滤函数：

```sh
# All AST types are kept in here; this will save a LOT of writing!
using namespace System.Management.Automation.Language

$Predicate = {
    param( [Ast] $AstObject )
    return ( $AstObject -is [LoopStatementAst] )
}

$Ast.FindAll($Predicate, $true)
```

以下 FindAll 方法过滤获取抽象语法树上的 CommandBaseAst 节点，这种节点代表一个命令调用，并通过 foreach 循环处理它们。与 Get-Alias 获取到命令别名进行比较，然后输出匹配的命令：

```sh
using System.Management.Automation.Language

$AST = [Parser]::ParseFile(
    '.\s.ps1',
    [ref]$null,
    [ref]$Null
)

$AST.FindAll({ $args[0] -is [CommandAst]}, $true) | foreach {

    $Command = $_.CommandElements[0]
    if ($Alias = Get-Alias | where { $_.Name -eq $Command }) {
        [PSCustomObject]@{
            Alias = $Alias.Name
            Definition = $Alias.Definition
            Start = $Command.Extent.StartOffset
            End = $Command.Extent.EndOffset
        }
    }   
} | Format-Table -AutoSize
```

AST 对象方法属性参考：

```sh
>     {Test-Path 'C:\'}.Ast | Get-Member

   TypeName: System.Management.Automation.Language.ScriptBlockAst

Name               MemberType Definition
----               ---------- ----------
Copy()             ~.Ast Copy()
Equals()           bool Equals(System.Object obj)
Find()             ~.Ast Find(System.Func[~.Ast,bool] predicate, bool searchNestedScriptBlocks)
FindAll()          ~.IEnumerable[~.Ast] 
                   FindAll(System.Func[~.Ast, bool], bool searchNestedScriptBlocks)
GetHashCode()      int GetHashCode()
GetHelpContent()   ~.CommentHelpInfo GetHelpContent()
GetScriptBlock()   scriptblock GetScriptBlock()
GetType()          type GetType()
SafeGetValue()     System.Object SafeGetValue(), 
                   System.Object SafeGetValue(bool skipHashtableSizeCheck)
ToString()         string ToString()
Visit()            System.Object Visit(~.ICustomAstVisitor astVisitor), 
                   void Visit(~.AstVisitor astVisitor)
Attributes         ~.ReadOnlyCollection[~.AttributeAst] Attributes {get;}
BeginBlock         ~.NamedBlockAst BeginBlock {get;}
DynamicParamBlock  ~.NamedBlockAst DynamicParamBlock {get;}
EndBlock           ~.NamedBlockAst EndBlock {get;}
Extent             ~.IScriptExtent Extent {get;}
ParamBlock         ~.ParamBlockAst ParamBlock {get;}
Parent             ~.Ast Parent {get;}
ProcessBlock       ~.NamedBlockAst ProcessBlock {get;}
ScriptRequirements ~.ScriptRequirements ScriptRequirements {get;}
UsingStatements    ~.ReadOnlyCollection[~.UsingStatementAst] UsingStatements {get;}
```


## ⚡ Write a Cmdlet with C#
- https://docs.microsoft.com/en-us/powershell/scripting/developer/cmdlet/how-to-write-a-simple-cmdlet
- https://docs.microsoft.com/powershell/scripting/developer/cmdlet/writing-a-windows-powershell-cmdlet
- 11. Modules https://docs.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-11
- .NET Core 2.0 https://dotnet.microsoft.com/en-us/download/dotnet/2.0
- .Net Standard https://docs.microsoft.com/en-us/dotnet/standard/net-standard
- .Net Standard Interactive Table https://dotnet.microsoft.com/en-us/platform/dotnet-standard
- Target frameworks in SDK-style projects https://docs.microsoft.com/en-us/dotnet/standard/frameworks
- System.Management.Automation Namespace https://docs.microsoft.com/en-us/dotnet/api/system.management.automation
- [Tutorials for Writing Cmdlets](developer\cmdlet\tutorials-for-writing-cmdlets.md)

Cmdlet 起名有约束条件，以下特殊符号不能使用：

    | Character |           Name           |
    |-----------|--------------------------|
    | #         | number sign              |
    | ,         | comma                    |
    | ()        | parentheses              |
    | {}        | braces                   |
    | []        | brackets                 |
    | &         | ampersand                |
    | -         | hyphen                   |
    | /         | slash mark               |
    | \         | backslash                |
    | $         | dollar sign              |
    | ^         | caret                    |
    | ;         | semicolon                |
    | :         | colon                    |
    | "         | double quotation mark    |
    | '         | single quotation mark    |
    | <>        | angle brackets           |
    | |         | vertical bar             |
    | ?         | question mark            |
    | @         | at sign                  |
    | `         | back tick (grave accent) |
    | *         | asterisk                 |
    | %         | percent sign             |
    | +         | plus sign                |
    | =         | equals sign              |
    | ~         | tilde                    |

Note: The hyphen can be used to separate the verb from the noun, but it cannot be used within the noun or within the verb.


.NET Standard 是一套技术规范，.NET Framework 是一个实现规范的技术框架。遵守这套规范的类库可以被不同 .NET 框架引用，比如 .NET Core 项目和 .NET Framework 项目都可以引用这个类库。

.NET Standard 规范从 2000 年 11 月开始发布第一个版本，发展到目前最新的版本是 .Net Standard 2.1，中间经过 1.0、1.1、1.2、1.3、1.4、1.5、1.6、2.0、2.1 版本号。

以 .NET Standard 2.0 规范为例，以下实现是所有实现这一规范的框架或工具：

| .NET implementation           | Version support                          |
| :---------------------------- | ---------------------------------------- |
| .NET and .NET Core            | 2.0, 2.1, 2.2, 3.0, 3.1, 5.0, 6.0        |
| .NET Framework 1              | 4.6.1 2, 4.6.2, 4.7, 4.7.1, 4.7.2, 4.8   |
| Mono                          | 5.4, 6.4                                 |
| Xamarin.iOS                   | 10.14, 12.16                             |
| Xamarin.Mac                   | 3.8, 5.16                                |
| Xamarin.Android               | 8.0, 10.0                                |
| Universal Windows Platform    | 10.0.16299, TBD                          |
| Unity                         | 2018.1                                   |

在开发程序时，在工程中指定 TargetFramework 就是选择一个 Target Framework Moniker (TFM)，就表示基于选择的这套 API 进行程序的开发。

| Target framework | Latest stable version |      TFM       | .NET Standard version |
|------------------|-----------------------|----------------|-----------------------|
| .NET 6           |                     6 | net6.0         | N/A                   |
| .NET 5           |                     5 | net5.0         | N/A                   |
| .NET Standard    |                   2.0 | netstandard2.0 | N/A                   |
| .NET Standard    |                   2.1 | netstandard2.1 | N/A                   |
| .NET Core        |                   3.1 | netcoreapp3.1  | 2.1                   |
| .NET Framework   |                   4.8 | net48          | 2.0                   |


以下示范了如何调用 .NET Core SDK 编译工具编译 DLL 模块并进行调用：

```sh
> dotnet new --list
Templates                   Short Name        Language          Tags           
----------------------      ------------      ------------      ---------------
Console Application         console           [C#], F#, VB      Common/Console 
Class library               classlib          [C#], F#, VB      Common/Library 
WPF Application             wpf               [C#], VB          Common/WPF     
WPF Class library           wpflib            [C#], VB          Common/WPF     
...

#Add a global.json file 
dotnet new classlib --name MyModule

#Add the PowerShell Standard Library package to the project file.
cd MyModule
dotnet new globaljson --sdk-version 2.0
dotnet add package PowerShellStandard.Library --version 3.0.0-preview-01
```

ComLet 工程主要内容：

- 根据模板创建 Class Library；
- 设置 .Net SDK 2.0.0 版本；
- 添加 PowerShellStandard.Library 依赖库；

```xml
<Project Sdk="Microsoft.NET.Sdk">

  <PropertyGroup>
    <TargetFramework>netstandard2.0</TargetFramework>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="PowerShellStandard.Library" Version="5.1.0" />
  </ItemGroup>

</Project>
```

PowerShellStandard.Library 5.1.0 支持 TargetFramework: netstandard2.0。使用不兼容 .Net Core SDK 版本编译将导致库文件不能被加载，即使使用 .Net Framework 设置为 net48 也不兼容，尽管它已经实现 .Net Standard 2.0 规范。执行命令时，会出现未能加载文件或程序集或它的某一个依赖项。

可以下载安装包，或者使用 Chocolatey 依赖工具进行安装：

```sh
> dotnet  --list-sdks
2.0.0 [C:\Program Files\dotnet\sdk]
2.1.818 [C:\Program Files\dotnet\sdk]
3.0.100 [C:\Program Files\dotnet\sdk]
3.1.300 [C:\Program Files\dotnet\sdk]
3.1.414 [C:\Program Files\dotnet\sdk]
5.0.100-preview.4.20258.7 [C:\Program Files\dotnet\sdk]

# .NET Core SDK 2.0.0 - Chocolatey Software
# @powershell -NoProfile -ExecutionPolicy unrestricted -Command 
#   "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && 
#   SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
> iex (curl 'https://chocolatey.org/install.ps1')
> [environment]::SetEnvironmentvariable("Path", "$Env:Path;$Env:ALLUSERSPROFILE\chocolatey\bin;", "User")
> choco help
Chocolatey v0.10.15
> choco install dotnetcore-sdk --version=2.0.0
```

添加源代码文件 Class1.cs，并通过注解 Cmdlet 向 PowerShell 导出模块方法：

```C#
using System;
using System.Management.Automation;

namespace MyModule
{
    [Cmdlet(VerbsCommunications.Write, "TimestampedMessage")]
    public class WriteTimestampedMessageCommand : PSCmdlet
    {
        [Parameter(Position=1)]
        public string Message { get; set; } = string.Empty;

        protected override void EndProcessing()
        {
            string timestamp = DateTime.Now.ToString("u");
            this.WriteObject($"[{timestamp}] - {this.Message}");
            this.WriteObject(DateTime.Now);
            base.EndProcessing();
        }
    }
}
```

可以多次调用 Cmdlet WriteObject() 方法，命令行获取到的将是 Object[] 数组类型。

编译并加载运行，使用完可以强制移除模块：

```sh
> dotnet build

  MyModule -> C:\MyModule\bin\Debug\netstandard2.0\MyModule.dll

已成功生成。

> Import-Module .\bin\Debug\netstandard2.0\MyModule.dll

> Write-TimestampedMessage "Test message."

[2022-02-13 23:42:52Z] - Test message.

> Get-Module -Name MyModule

ModuleType Version    Name                ExportedCommands
---------- -------    ----                ----------------
Binary     1.0.0.0    MyModule            Write-TimestampedMessage

> Remove-Module MyModule -Force
```


## ⚡ Modules
- [PowerShell Module](developer/module/understanding-a-windows-powershell-module)
- [Writing a PowerShell Module](developer/module/writing-a-windows-powershell-module.md)
- [How to Write a PowerShell Binary Module](developer/module/how-to-write-a-powershell-binary-module.md)
- [Tutorials for Writing Cmdlets](developer\cmdlet\tutorials-for-writing-cmdlets.md)
- [4. Types](lang-spec/chapter-04.md)
- [11. Modules](lang-spec/chapter-11.md)
- [about_Modules](microsoft.powershell.core/about/about_Modules.md)
- [about_Scopes](microsoft.powershell.core/about/about_Scopes.md)
- [about Module Manifests](About\about_Module_Manifest.md)
- [about_Environment_Variables](about_Environment_Variables.md)
- [Get-Module](Microsoft.PowerShell.Core\Get-Module.md)
- [Import-Module](Microsoft.PowerShell.Core\Import-Module.md)
- [Remove-Module](Microsoft.PowerShell.Core\Remove-Module.md)

A module is a package that contains PowerShell members, such as cmdlets,
providers, functions, workflows, variables, and aliases.

People who write commands can use modules to organize their commands and share
them with others. People who receive modules can add the commands in the
modules to their PowerShell sessions and use them just like the built-in
commands.

A *module* is a self-contained reusable unit that allows PowerShell code to be partitioned,
organized, and abstracted. A module can contain commands (such as cmdlets and functions) and items
(such as variables and aliases) that can be used as a single unit.

Once a module has been created, it must be *imported* into a session before the commands and items
within it can be used. Once imported, commands and items behave as if they were defined locally. A
module is imported explicitly with the `Import-Module` command. A module may also be imported
automatically as determined in an implementation defined manner.

```sh
# [Environment]::SetEnvironmentVariable('Foo','')
# [Environment]::GetEnvironmentVariable('Foo')
> $env:PSModulePath -split ";" | % {start $_}
```

假设 MyModule 目录包含一个 PS 模块，要安装安，只需要将其拷贝到 PS 模拟目录下：

```sh
$ModulePath = $HOME\Documents\PowerShell\Modules
New-Item -Type Directory -Path $ModulePath
Copy-Item -Path C:\ps-test\MyModule -Destination $ModulePath
```


Module description type

This type encapsulates the state of a module. It has the following accessible members:

| **Member**  |    **Member Kind**      |        **Type**        |                 **Purpose**               |
| ----------- | ----------------------- | ---------------------- | ----------------------------------------- |
| Description | Instance property (RW) | string                 | The description set by the manifest        |
| ModuleType  | Instance property (RO) | Implementation defined | Manifest, Script, CIM, Workflow, or Binary |
| Name        | Instance property (RO) | string                 | The name of the module                     |
| Path        | Instance property (RO) | string                 | The module's path                          |

In PowerShell, this type is `System.Management.Automation.PSModuleInfo`. The type of `ModuleType` is
`System.Management.Automation.ModuleType`.


模块元信息文件中可以为 **RootModule** 配置为以下文件类型：

- a script (`.ps1`)
- a script module (`.psm1`)
- a module manifest (`.psd1`)
- an assembly (`.dll`)
- a cmdlet definition XML file (`.cdxml`)
- a Windows PowerShell 5.1 Workflow (`.xaml`)

The file path should be relative to the module manifest.

If a module has a manifest file and no root file was designated in the
**RootModule** key, the manifest becomes the primary file for the module, and
the module becomes a manifest module (*ModuleType* = *Manifest*). When
**RootModule** is defined, the module's type is determined from the file
extension used:

- a `.ps1` or `.psm1` file makes the module type **Script**
- a `.psd1` file makes the module type **Manifest**
- a `.dll` file makes the module type **Binary**
- a `.cdxml` file makes the module type **CIM**
- a `.xaml` file makes the module type **Workflow**

By default, all module members in the **RootModule** are exported.

结合作用域演示一个简单地定义 PS 模块 MyModule.psm1 及模块中变量的使用：

- Import-Module [MODULE] 导入可用的模块；
- Get-Module -All 查询当前运行环境已经加载的模块；
- Get-Module -Avaliable 查询当前系统可使用的模块；
- Remove-Module [MODULE] 从当前运行环境中移除模块；

```sh
# MyModule.psm1 definition
$a = "Hello"

function foo {
    "`$a = $a"
    "`$global:a = $global:a"
}

# Test ps MyModule
> Import-Module .\MyModule.psm1
> $a

> foo
$a = Hello
$global:a =

> $a = "Bye Bye"
> foo
$a = Hello
$global:a = Bye Bye

> Remove-Module MyModule
```

要开发二进制模块，可以使用 C# 编写模块代码，类似实现 cmdlets，以下模块 ModuleCmdlets 就导出了三个 Cmdlsts：

```csharp
using System.Management.Automation;           // Windows PowerShell namespace.

namespace ModuleCmdlets
{
     [Cmdlet(VerbsDiagnostic.Test,"BinaryModuleCmdlet1")]
     public class TestBinaryModuleCmdlet1Command : Cmdlet
     {
       protected override void BeginProcessing()
       {
         WriteObject("BinaryModuleCmdlet1 exported by the ModuleCmdlets module.");
       }
     }

     [Cmdlet(VerbsDiagnostic.Test, "BinaryModuleCmdlet2")]
     public class TestBinaryModuleCmdlet2Command : Cmdlet
     {
         protected override void BeginProcessing()
         {
             WriteObject("BinaryModuleCmdlet2 exported by the ModuleCmdlets module.");
         }
     }

     [Cmdlet(VerbsDiagnostic.Test, "BinaryModuleCmdlet3")]
     public class TestBinaryModuleCmdlet3Command : Cmdlet
     {
         protected override void BeginProcessing()
         {
             WriteObject("BinaryModuleCmdlet3 exported by the ModuleCmdlets module.");
         }
     }

}
```

Clojure 脚本语言开发工具提供了一个 PowerShell 7 Modules，安装后就会在用户文档的 PowerShell 模块目录保存相关的模块定义文件：

```sh
> $clj = 'https://download.clojure.org/install/win-install-1.11.1.1113.ps1'
> Invoke-Expression (New-Object System.Net.WebClient).DownloadString($clj)
> clj -version
Invoke-Clojure: Clojure CLI version 1.11.1.1113
```

- Documents\PowerShell\Modules\ClojureTools\ClojureTools.psd1 
- Documents\PowerShell\Modules\ClojureTools\ClojureTools.psm1

模块元信息文件 `.psd1` 中通过 *RootModule* 引用了模块定义文件 `.psm1`，里的函数负责调用 clojure-tools.jar 类型库：

```sh
@{

  # Script module or binary module file associated with this manifest.
  RootModule        = 'ClojureTools.psm1'

  # Version number of this module.
  ModuleVersion     = '1.11.1.1113'

  # Supported PSEditions
  # CompatiblePSEditions = @()

  # ID used to uniquely identify this module
  GUID              = 'd5a9d8ac-5951-4a8d-9dec-2d5f47518e5b'

  # Author of this module
  Author            = 'Rich Hickey'

  # Company or vendor of this module
  CompanyName       = 'Rich Hickey'

  # Copyright statement for this module
  Copyright         = '(c) Rich Hickey. All rights reserved.'

  # Description of the functionality provided by this module
  Description       = 'Provides an unofficial Clojure tools install'

  # Minimum version of the PowerShell engine required by this module
  # PowerShellVersion = ''

  # Name of the PowerShell host required by this module
  # PowerShellHostName = ''

  # Minimum version of the PowerShell host required by this module
  # PowerShellHostVersion = ''

  # Minimum version of Microsoft .NET Framework required by this module. This prerequisite is valid for the PowerShell Desktop edition only.
  # DotNetFrameworkVersion = ''

  # Minimum version of the common language runtime (CLR) required by this module. This prerequisite is valid for the PowerShell Desktop edition only.
  # CLRVersion = ''

  # Processor architecture (None, X86, Amd64) required by this module
  # ProcessorArchitecture = ''

  # Modules that must be imported into the global environment prior to importing this module
  # RequiredModules = @()

  # Assemblies that must be loaded prior to importing this module
  # RequiredAssemblies = @()

  # Script files (.ps1) that are run in the caller's environment prior to importing this module.
  # ScriptsToProcess = @()

  # Type files (.ps1xml) to be loaded when importing this module
  # TypesToProcess = @()

  # Format files (.ps1xml) to be loaded when importing this module
  # FormatsToProcess = @()

  # Modules to import as nested modules of the module specified in RootModule/ModuleToProcess
  # NestedModules = @()

  # Functions to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no functions to export.
  FunctionsToExport = 'Invoke-Clojure'

  # Cmdlets to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no cmdlets to export.
  CmdletsToExport   = @()

  # Variables to export from this module
  VariablesToExport = '*'

  # Aliases to export from this module, for best performance, do not use wildcards and do not delete the entry, use an empty array if there are no aliases to export.
  AliasesToExport   = 'clj', 'clojure'

  # DSC resources to export from this module
  # DscResourcesToExport = @()

  # List of all modules packaged with this module
  # ModuleList = @()

  # List of all files packaged with this module
  FileList          = 'deps.edn', 'example-deps.edn', 'exec.jar', 'clojure-tools-1.11.1.1113.jar'

  # Private data to pass to the module specified in RootModule/ModuleToProcess. This may also contain a PSData hashtable with additional module metadata used by PowerShell.
  PrivateData       = @{

    PSData = @{

      # Tags applied to this module. These help with module discovery in online galleries.
      Tags       = 'clojure'

      # A URL to the license for this module.
      LicenseUri = 'https://www.eclipse.org/legal/epl-v10.html'

      # A URL to the main website for this project.
      ProjectUri = 'https://github.com/clojure/brew-install'

      # A URL to an icon representing this module.
      # IconUri = ''

      # ReleaseNotes of this module
      # ReleaseNotes = ''

    } # End of PSData hashtable

  } # End of PrivateData hashtable

  # HelpInfo URI of this module
  # HelpInfoURI = ''

  # Default prefix for commands exported from this module. Override the default prefix using Import-Module -Prefix.
  # DefaultCommandPrefix = ''

}
```


## ⚡ Module Example


编写脚本模块：

```sh
function Convert-CentigradeToFahrenheit ([double]$tempC) {
    return ($tempC * (9.0 / 5.0)) + 32.0
}
New-Alias c2f Convert-CentigradeToFahrenheit

function Convert-FahrenheitToCentigrade ([double]$tempF) {
    return ($tempF - 32.0) * (5.0 / 9.0)
}
New-Alias f2c Convert-FahrenheitToCentigrade

Export-ModuleMember -Function Convert-CentigradeToFahrenheit
Export-ModuleMember -Function Convert-FahrenheitToCentigrade
Export-ModuleMember -Alias c2f, f2c
```

然后根据路径安装脚本模块，并导入、使用模块：

```sh
$Env:PSModulepath = $Env:PSModulepath + ";<additional-path>"
Import-Module "E:\Scripts\Modules\PSTest_Temperature" -Verbose

"0 degrees C is " + (Convert-CentigradeToFahrenheit 0) + " degrees F"
"100 degrees C is " + (c2f 100) + " degrees F"
"32 degrees F is " + (Convert-FahrenheitToCentigrade 32) + " degrees C"
"212 degrees F is " + (f2c 212) + " degrees C"
```

使用 Remove-Module 命令移除模块，可以监听移除事件：

```sh
$MyInvocation.MyCommand.ScriptBlock.Module.OnRemove = { *on-removal-code* }
```

A module need not have a corresponding manifest, but if it does, that manifest has the same name as the module it describes, but with a *.psd1* file extension.

Here is an example of a simple module manifest:

```sh
@{
ModuleVersion = '1.0'
Author = 'John Doe'
RequiredModules = @()
FunctionsToExport = 'Set*','Get*','Process*'
}
```

A dynamic module is a module that is created in memory at runtime by the cmdlet *New-Module*; it is not loaded from disk. 

A dynamic module can be used to create a closure, a function with attached data. Consider the following example:

```sh
function Get-NextID ([int]$startValue = 1) {
    $nextID = $startValue
    {
        ($script:nextID++)
    }.GetNewClosure()
}

$v1 = Get-NextID      # get a scriptblock with $startValue of 0
& $v1                 # invoke Get-NextID getting back 1
& $v1                 # invoke Get-NextID getting back 1

$v2 = Get-NextID 100  # get a scriptblock with $startValue of 100
& $v2                 # invoke Get-NextID getting back 100
& $v2                 # invoke Get-NextID getting back 101
```

Each time a new closure is created by *GetNewClosure*, a new dynamic module is created, and the variables in the caller's scope (in this case, the script block containing the increment) are copied into this new module. To ensure that the nextId defined inside the parent function (but outside the script block) is incremented, the explicit script: scope prefix is needed.

Of course, the script block need not be a named function; for example:

```sh
$v3 = & {      # get a scriptblock with $startValue of 200
    param ([int]$startValue = 1)
    $nextID = $startValue
    {
        ($script:nextID++)
    }.GetNewClosure()
} 200

& $v3          # invoke script getting back 200
& $v3          # invoke script getting back 201
```

注意，花括号表示一个 System.Management.Automation.ScriptBlock 类型，可以使用 *{}.GetType()* 或 *{} | Get-Member* 查看。


## ⚡ Classes
- [3. Basic concepts](lang-spec/chapter-03.md)
- [about_classes](microsoft.powershell.core/about/about_classes.md)
- [about_Methods](microsoft.powershell.core/about/about_methods.md)
- [about_Using](microsoft.powershell.core/about/about_using.md)
- [about_Language_Keywords](Microsoft.PowerShell.Core\About\about_Language_Keywords.md)
- [about_PSCustomObject](Microsoft.PowerShell.Core/About/about_PSCustomObject.md)
- [about_Objects](microsoft.powershell.core/about/about_Objects.md)
- [about_Object_Creation](microsoft.powershell.core/about/about_Object_Creation.md)
- [about_Objects](microsoft.powershell.core/about/about_Objects.md)
- [System.Management.Automation.PSObject](System.Management.Automation\engine\MshObject.cs)
- [System.Management.Automation.PSCustomObject](System.Management.Automation\engine\MshObject.cs)

Supported scenarios

- Define custom types in PowerShell using familiar object-oriented programming semantics like classes, properties, methods, inheritance, etc.
- Debug types using the PowerShell language.
- Generate and handle exceptions using formal mechanisms.
- Define DSC resources and their associated types by using the PowerShell language.

Classes are declared using the following syntax:

```sh
class <class-name> [: [<base-class>][,<interface-list>]] 
{
    [[<attribute>] [hidden] [static] <property-definition> ...]
    [<class-name>([<constructor-argument-list>])
      {<constructor-statement-list>} ...]
    [[<attribute>] [hidden] [static] <method-definition> ...]
}
```

Classes are instantiated using either of the following syntaxes:

```sh
[$<variable-name> =] New-Object -TypeName <class-name> [
  [-ArgumentList] <constructor-argument-list>]

[$<variable-name> =] [<class-name>]::new([<constructor-argument-list>])
```


⚠ Output in class methods

Methods should have a return type defined. If a method doesn't return output,
then the output type should be `[void]`.

In class methods, no objects get sent to the pipeline except those mentioned in
the `return` statement. There's no accidental output to the pipeline from the
code.

> [!NOTE]
> This is fundamentally different from how PowerShell functions handle output,
> where everything goes to the pipeline.

Non-terminating errors written to the error stream from inside a class method
are not passed through. You must use `throw` to surface a terminating error.
Using the `Write-*` cmdlets, you can still write to PowerShell's output streams
from within a class method. However, this should be avoided so that the method
emits objects using only the `return` statement.

类实例示范：

```sh
class TypeName
{
   [ValidateSet("ABC", "XYZ")]
   [string] $P1

   static [hashtable] $P2

   # don't show by Get-Member
   hidden [int] $P3

   # 构造函数
   TypeName ([string] $s)
   {
       $this.P1 = $s       
   }

   static [void] StaticMethod([hashtable] $h)
   {
       [TypeName]::P2 = $h
   }

   [int] MemberMethod([int] $i)
   {
       $this.P3 = $i
       return $this.P3
   }
}

$obj = [TypeName]::new("ABC")
$obj.P1 = "XYZ"
```

To invoke a base class constructor from a subclass, add the `base` keyword.

```C#
class Person {
    [int]$Age

    Person([int]$a)
    {
        $this.Age = $a
    }
}

class Child : Person
{
    [string]$School

    Child([int]$a, [string]$s ) : base($a) {
        $this.School = $s
    }
}

[Child]$littleone = [Child]::new(10, "Silver Fir Elementary School")

$littleone.Age
```

To call base class methods from overridden implementations, cast to the
base class (`[baseclass]$this`) on invocation.

```C#
class BaseClass
{
    [int]days() {return 1}
}
class ChildClass1 : BaseClass
{
    [int]days () {return 2}
    [int]basedays() {return ([BaseClass]$this).days()}
}

[ChildClass1]::new().days()
[ChildClass1]::new().basedays()
```



## ⚡ Type Accelerators
- [about_Type_Accelerators](microsoft.powershell.core/about/about_type_accelerators.md)


所有对象的基类都是 System.Object，包含以下两个常用对象：

    public class PSObject : IFormattable, IComparable, ISerializable, IDynamicMetaObjectProvider
    public class PSCustomObject

可以使用简化的类型加速访问，完整映射关系参考 about_Type_Accelerators：

Available Type Accelerators

|        Accelerator          |                           Full Class Name                           |
|---------------------------- | ------------------------------------------------------------------- |
|adsi                         | System.DirectoryServices.DirectoryEntry                             |
|adsisearcher                 | System.DirectoryServices.DirectorySearcher                          |
|Alias                        | System.Management.Automation.AliasAttribute                         |
|AllowEmptyCollection         | System.Management.Automation.AllowEmptyCollectionAttribute          |
|AllowEmptyString             | System.Management.Automation.AllowEmptyStringAttribute              |
|AllowNull                    | System.Management.Automation.AllowNullAttribute                     |
|ArgumentCompleter            | System.Management.Automation.ArgumentCompleterAttribute             |
|array                        | System.Array                                                        |
|bigint                       | System.Numerics.BigInteger                                          |
|bool                         | System.Boolean                                                      |
|byte                         | System.Byte                                                         |
|char                         | System.Char                                                         |
|cimclass                     | Microsoft.Management.Infrastructure.CimClass                        |
|cimconverter                 | Microsoft.Management.Infrastructure.CimConverter                    |
|ciminstance                  | Microsoft.Management.Infrastructure.CimInstance                     |
|CimSession                   | Microsoft.Management.Infrastructure.CimSession                      |
|cimtype                      | Microsoft.Management.Infrastructure.CimType                         |
|CmdletBinding                | System.Management.Automation.CmdletBindingAttribute                 |
|cultureinfo                  | System.Globalization.CultureInfo                                    |
|datetime                     | System.DateTime                                                     |
|decimal                      | System.Decimal                                                      |
|double                       | System.Double                                                       |
|DscLocalConfigurationManager | System.Management.Automation.DscLocalConfigurationManagerAttribute  |
|DscProperty                  | System.Management.Automation.DscPropertyAttribute                   |
|DscResource                  | System.Management.Automation.DscResourceAttribute                   |
|float                        | System.Single                                                       |
|guid                         | System.Guid                                                         |
|hashtable                    | System.Collections.Hashtable                                        |
|initialsessionstate          | System.Management.Automation.Runspaces.InitialSessionState          |
|int                          | System.Int32                                                        |
|int16                        | System.Int16                                                        |
|int32                        | System.Int32                                                        |
|int64                        | System.Int64                                                        |
|ipaddress                    | System.Net.IPAddress                                                |
|IPEndpoint                   | System.Net.IPEndPoint                                               |
|long                         | System.Int64                                                        |
|mailaddress                  | System.Net.Mail.MailAddress                                         |
|NullString                   | System.Management.Automation.Language.NullString                    |
|ObjectSecurity               | System.Security.AccessControl.ObjectSecurity                        |
|OutputType                   | System.Management.Automation.OutputTypeAttribute                    |
|Parameter                    | System.Management.Automation.ParameterAttribute                     |
|PhysicalAddress              | System.Net.NetworkInformation.PhysicalAddress                       |
|powershell                   | System.Management.Automation.PowerShell                             |
|psaliasproperty              | System.Management.Automation.PSAliasProperty                        |
|pscredential                 | System.Management.Automation.PSCredential                           |
|pscustomobject               | System.Management.Automation.PSObject                               |
|PSDefaultValue               | System.Management.Automation.PSDefaultValueAttribute                |
|pslistmodifier               | System.Management.Automation.PSListModifier                         |
|psmoduleinfo                 | System.Management.Automation.PSModuleInfo                           |
|psnoteproperty               | System.Management.Automation.PSNoteProperty                         |
|psobject                     | System.Management.Automation.PSObject                               |
|psprimitivedictionary        | System.Management.Automation.PSPrimitiveDictionary                  |
|psscriptmethod               | System.Management.Automation.PSScriptMethod                         |
|psscriptproperty             | System.Management.Automation.PSScriptProperty                       |
|PSTypeNameAttribute          | System.Management.Automation.PSTypeNameAttribute                    |
|psvariable                   | System.Management.Automation.PSVariable                             |
|psvariableproperty           | System.Management.Automation.PSVariableProperty                     |
|ref                          | System.Management.Automation.PSReference                            |
|regex                        | System.Text.RegularExpressions.Regex                                |
|runspace                     | System.Management.Automation.Runspaces.Runspace                     |
|runspacefactory              | System.Management.Automation.Runspaces.RunspaceFactory              |
|sbyte                        | System.SByte                                                        |
|scriptblock                  | System.Management.Automation.ScriptBlock                            |
|securestring                 | System.Security.SecureString                                        |
|single                       | System.Single                                                       |
|string                       | System.String                                                       |
|SupportsWildcards            | System.Management.Automation.SupportsWildcardsAttribute             |
|switch                       | System.Management.Automation.SwitchParameter                        |
|timespan                     | System.TimeSpan                                                     |
|type                         | System.Type                                                         |
|uint16                       | System.UInt16                                                       |
|uint32                       | System.UInt32                                                       |
|uint64                       | System.UInt64                                                       |
|uri                          | System.Uri                                                          |
|ValidateCount                | System.Management.Automation.ValidateCountAttribute                 |
|ValidateDrive                | System.Management.Automation.ValidateDriveAttribute                 |
|ValidateLength               | System.Management.Automation.ValidateLengthAttribute                |
|ValidateNotNull              | System.Management.Automation.ValidateNotNullAttribute               |
|ValidateNotNullOrEmpty       | System.Management.Automation.ValidateNotNullOrEmptyAttribute        |
|ValidatePattern              | System.Management.Automation.ValidatePatternAttribute               |
|ValidateRange                | System.Management.Automation.ValidateRangeAttribute                 |
|ValidateScript               | System.Management.Automation.ValidateScriptAttribute                |
|ValidateSet                  | System.Management.Automation.ValidateSetAttribute                   |
|ValidateTrustedData          | System.Management.Automation.ValidateTrustedDataAttribute           |
|ValidateUserDrive            | System.Management.Automation.ValidateUserDriveAttribute             |
|version                      | System.Version                                                      |
|void                         | System.Void                                                         |




## ⚡ File & Directory

批量处理文件名、创建文件夹：

```sh
0..+9 |% {$i = 90 + $_; mkdir $i}
foreach($it in dir){ Ren $it.Name $it.Name.Replace("沙发", "SFML"); }
```

编译目录大小：

```sh
# ls -r | measure -s Length
# dir . -Recurse | Measure-Object -Sum Length
# dir . -Recurse | Measure-Object -property length -Sum
dir .| % {
  $len = 0;
  if ($_.PSIsContainer){
      dir -Path $_ -Recurse | % {
        $len += $_.Length
      }
  }else{
    $len += $_.Length
  }
  $u = 1; $unit = "Byte"
  if ($len -gt 1024*1024*1024){
    $u = 1GB; $unit = "GB"
  }elseif($len -gt 1024*1024){
    $u = 1MB; $unit = "MB"
  }elseif($len -gt 1024){
    $u = 1KB; $unit = "KB"
  }
  [PSCustomObject]@{
    Name=$_.Name;
    IsFolder=$_.PsIsContainer
    Length= "$(($len/$u).ToString('0.000')) $unit"
  }
}
```

判断文件路径是否存在，创建文件、文件夹：

```cpp
> if( Test-Path 0820.ts ){ echo "YES"  }
> if( !(Test-Path 0820.ts) ){ echo "Doesn't"  }

> New-Item -Path . -Name "testfile1.txt" -ItemType "file" -Value "some text."

> ni some.txt
> ni -ItemType File some.txt
> ni -ItemType Directory somefolder
```

使用通配符进行批量文件处理：

```sh
> dir -Path C:\Temp\

Directory:  C:\Temp

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d-----        5/15/2019   6:45 AM        1   One
d-----        5/15/2019   6:45 AM        1   Two
d-----        5/15/2019   6:45 AM        1   Three

> ni -Path C:\Temp\* -Name temp.txt -ItemType File | Select-Object FullName

FullName
--------
C:\Temp\One\temp.txt
C:\Temp\Three\temp.txt
C:\Temp\Two\temp.txt
```

使用目录查询命令时，如果文件有多个，Length 属性返回的是 *System.Array* 文件个数，如果文件只有一个返回的是 *System.IO.FileSystemInfo* 文件的大小！

可以使用 -is 判断类型，使用 GetType() 方法获取类型对象，如果没有文件，Length 返回 0，则不能使用 GetType() 获取类型对象。

```sh
(dir *.ts).Length
(dir *.ts) -is [System.IO.FileSystemInfo]
```

## ⚡ IPconfig

示范获取网卡 IP 地址：

```sh
# # Script to return current IPv4 addresses on a Linux or MacOS host
# $ipInfo = ifconfig | Select-String 'inet'
# $ipInfo = [regex]::matches($ipInfo, "addr:\b(?:\d{1,3}\.){3}\d{1,3}\b") | ForEach-Object value
# foreach ($ip in $ipInfo) {
#     $ip.Replace('addr:', '')
# }

# Script to return current IPv4 addresses for Linux, MacOS, or Windows
$IP = if ($IsLinux -or $IsMacOS) {
    $ipInfo = ifconfig | Select-String 'inet'
    $ipInfo = [regex]::matches($ipInfo, "addr:\b(?:\d{1,3}\.){3}\d{1,3}\b") | ForEach-Object value
    foreach ($ip in $ipInfo) {
        $ip.Replace('addr:', '')
    }
}
else {
    Get-NetIPAddress | Where-Object { $_.AddressFamily -eq 'IPv4' } | ForEach-Object IPAddress
}

# Remove loopback address from output regardless of platform
$IP | Where-Object { $_ -ne '127.0.0.1' }
```



## ⚡ Format Output
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/custom-numeric-format-strings

数值格式化使用到的标识符：

- The "0" custom specifier
- The "#" custom specifier
- The "." custom specifier
- The "," custom specifier
- The "%" custom specifier
- The "‰" custom specifier
- The "E" and "e" custom specifiers
- The "\" escape character
- The ";" section separator

在 Powershell 可以使用 *'{0:X4}' -f 1282* 这样的脚本转换为 16 进制显示，也可调用数值对象的转换方法，进行任意进制的转换 `[int64][convert]::ToString(1281, 2)`。

```sh
0 .. 65535 | % { "{0:D16}" -f [int64][convert]::ToString($_,2) }
```

双引号中的字符串可以使用变量进行插值，使用单引号则不会进行插值。如 $i = "it"; "$i is ok"; 将得到 “it is ok”。


下面使用 -f Format operator 进行固定列宽格式化，可读性更强。要设置列宽可以将一个逗号放置在通配符与列宽编号的中间，负数设置右对齐，正数设置左对齐。

```sh
PS> dir | ForEach-Object { "{0,-20} = {1,10} Bytes" -f $_.name, $_.Length }
Virtual Machines     =            Bytes
VirtualBox VMs       =            Bytes
funshion.ini         =       6798 Bytes
```

浮点转字符串并设置小数点位数，使用 0 和 # 的差别在于，前者保留、后者不保留前缀、后的 0 值输出：

```sh
> $('{0:N2}' -f 0.2222)
0.22

> 1.001,1.101,1.111 | % { '{0:0.###}' -f $_ }
1.001
1.101
1.111

> 1.001,1.101,1.111 | % { '{0:0.##}' -f $_ }
1
1.1
1.11

> "{0:#.##%}" -f 0.1222
12.22%
```

使用分号分组格式化 positive, negative, zero numbers 三种数值：

```C#
double posValue = 1234;
double negValue = -1234;
double zeroValue = 0;

string fmt2 = "##;(##)";
string fmt3 = "##;(##);**Zero**";

Console.WriteLine(posValue.ToString(fmt2));
Console.WriteLine(String.Format("{0:" + fmt2 + "}", posValue));
// Displays 1234

Console.WriteLine(negValue.ToString(fmt2));
Console.WriteLine(String.Format("{0:" + fmt2 + "}", negValue));
// Displays (1234)

Console.WriteLine(zeroValue.ToString(fmt3));
Console.WriteLine(String.Format("{0:" + fmt3 + "}", zeroValue));
// Displays **Zero**
```


使用百分号显示分数：

```C#
double value = .086;
Console.WriteLine(value.ToString("#0.##%", CultureInfo.InvariantCulture));
Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                "{0:#0.##%}", value));
// Displays 8.6%
```

参考 C# 的数值格式化，使用点号指定小数点、逗号设置千分位：

```C#
 double value;

 value = 123;
 Console.WriteLine(value.ToString("00000"));
 Console.WriteLine(String.Format("{0:00000}", value));
 // Displays 00123

 value = 1.2;
 Console.WriteLine(value.ToString("0.00", CultureInfo.InvariantCulture));
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                   "{0:0.00}", value));
 // Displays 1.20

 Console.WriteLine(value.ToString("00.00", CultureInfo.InvariantCulture));
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                 "{0:00.00}", value));
 // Displays 01.20

 CultureInfo daDK = CultureInfo.CreateSpecificCulture("da-DK");
 Console.WriteLine(value.ToString("00.00", daDK));
 Console.WriteLine(String.Format(daDK, "{0:00.00}", value));
 // Displays 01,20

 value = .56;
 Console.WriteLine(value.ToString("0.0", CultureInfo.InvariantCulture));
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                 "{0:0.0}", value));
 // Displays 0.6

 value = 1234567890;
 Console.WriteLine(value.ToString("0,0", CultureInfo.InvariantCulture));    
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                 "{0:0,0}", value));    
 // Displays 1,234,567,890

 CultureInfo elGR = CultureInfo.CreateSpecificCulture("el-GR");
 Console.WriteLine(value.ToString("0,0", elGR));    
Console.WriteLine(String.Format(elGR, "{0:0,0}", value));   
 // Displays 1.234.567.890

 value = 1234567890.123456;
 Console.WriteLine(value.ToString("0,0.0", CultureInfo.InvariantCulture));  
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                 "{0:0,0.0}", value));  
 // Displays 1,234,567,890.1

 value = 1234.567890;
 Console.WriteLine(value.ToString("0,0.00", CultureInfo.InvariantCulture)); 
 Console.WriteLine(String.Format(CultureInfo.InvariantCulture,
                                 "{0:0,0.00}", value)); 
 // Displays 1,234.57
 ```



## ⚡ Input/Keyboard 输入
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/read-host
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/write-host
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/convertfrom-securestring
- https://github.com/Microsoft/Console-Docs
- https://adamtheautomator.com/powershell-pause/

使用 Read-Host 弹框获取键盘输入，不弹框就不需要 -Prompt 参数：

```sh
# [console]::TreatControlCAsInput = $true
while( $_=$host.UI.RawUI.ReadKey('NoEcho,AllowCtrlC,IncludeKeyUp') ){
    $_
    if ($_.Character -eq 'x' -or $_.VirtualKeyCode -eq 88){ break }
}

Echo "$([System.ConsoleKeyInfo].DeclaredProperties.Name)"
Do {
    $Keyinf = [Console]::ReadKey($True)
    $Key = $Keyinf.Key
    $KeyChar = $Keyinf.KeyChar
    $Modifiers = $Keyinf.Modifiers
    Write-Host "$Key".PadLeft(7) "$KeyChar".PadLeft(3) "$Modifiers".PadLeft(1)
} While ( $Key.Key -NE [ConsoleKey]::Escape )


Write-Host "Welcome to demo of powershell prompt input" -ForegroundColor Green
$s1= Read-Host -Prompt "Enter your subject 1 name" -AsSecureString
$s2= Read-Host -Prompt "Enter your subject 2 name" -AsSecureString
$s3= Read-Host -Prompt "Enter your subject 3 name" -AsSecureString
Write-Host "The entered name is" $s1 -ForegroundColor Green
Write-Host "The entered age is" $s2 -ForegroundColor Green
Write-Host "The entered city is" $s3 -ForegroundColor Green
# Output:
# Welcome to demo of powershell prompt input
# The entered name is System.Security.SecureString
# The entered age is System.Security.SecureString
# The entered city is System.Security.SecureString
```

Clocks Spin 

```sh
[console]::TreatControlCAsInput = $true
$spin = 0
$clocks = '🕐|🕑|🕒|🕓|🕔|🕕|🕖|🕗|🕘|🕙|🕚|🕛'.Split("|")
while ($true)
{
    $icon = $clocks[$spin++ % $clocks.Count]
    Write-Host "`r$icon Processing..." -NoNewLine 
    if ([console]::KeyAvailable)
    {
        $key = [system.console]::readkey($true)
        Write-Host "$($key.Key)".PadLeft(10) -NoNewLine
        if (($key.modifiers -band [consolemodifiers]::Control) -and ($key.key -eq "C"))
        {
            Write-Host "`rTerminating..." -NoNewLine
            break
        }
    } else {
        Sleep (1/24)
    }
}
```

使用 Host.UI.RawUI.ReadKey 读取按键信息 KeyInfo，键盘虚拟码：

- *Character* Gets and set unicode Character of the key
- *ControlKeyState* State of the control keys.
- *KeyDown* Gets and set the status of whether this instance is generated by a key pressed or released
- *VirtualKeyCode* Gets and set device-independent key

执行脚本时可能遇到使用参数调用“ReadKey”时发生异常:“未实现该方法或操作。”，但是查询结果显示已经实现重载方法：

```sh
> $host.UI.RawUI.ReadKey.OverloadDefinitions
System.Management.Automation.Host.KeyInfo ReadKey(System.Management.Automation.Host.ReadKeyOptions options)
System.Management.Automation.Host.KeyInfo ReadKey()

> using namespace System.Management.Automation.Host
> [enum]::GetValues([ReadKeyOptions]) | % {Write-Host $_ -ForegroundColor $_ }
AllowCtrlC
NoEcho
IncludeKeyDown
IncludeKeyUp
```

应用于 PowerShell 5.1.0.0，使用 $host.version 查询当前的脚本版本。

```sh
using namespace System.Threading
using namespace System.Management.Automation.Host

Write-Host "Content before waiting keys."
Write-Host "Begin waiting keys..... Press 'Esc' to quit."

while($true)
{
    while(-not $host.UI.RawUI.KeyAvailable)
    {
        Write-Host '.' -NoNewLine
        [Thread]::Sleep(1000)
    }
    
    # No matter any combination of values of the ReadKeyOptions enum, 
    # the behavior of capturing not-really-pressed Enter key is the same.
    $ki = $host.UI.RawUI.ReadKey("NoEcho, IncludeKeyUp")
    
    Write-Host "[$($ki.ControlKeyState)]" -ForegroundColor Yellow
    
    $altPressed = (($ki.ControlKeyState -band [ControlKeyStates]::LeftAltPressed) -gt 0) -or 
        (($ki.ControlKeyState -band [ControlKeyStates]::RightAltPressed) -gt 0)
    $ctrlPressed = (($ki.ControlKeyState -band [ControlKeyStates]::LeftCtrlPressed) -gt 0) -or 
        (($ki.ControlKeyState -band [ControlKeyStates]::RightCtrlPressed) -gt 0)
    $shiftPressed = (($ki.ControlKeyState -band [ControlKeyStates]::ShiftPressed) -gt 0)
    
    $keyState = $ki.KeyDown ? "Down" : "UP"
    
    Write-Host "`nGot a key:"
    Write-Host "`tkey: $($ki.Character)"  # Char
    Write-Host "`tkey code: $($ki.VirtualKeyCode)"  # int.
    
    Write-Host "`tAlt: $altPressed"
    Write-Host "`tCtrl: $ctrlPressed"
    Write-Host "`tShift: $shiftPressed"
    
    Write-Host "`tkey state: $keyState"
    
    if($ki.VirtualKeyCode -eq 27)
    {
        break
    }
}

Write-Host "`nContent after waiting keys."
```

## ⚡ RegExp
- [about_regular_expressions.md](microsoft.powershell.core/about/about_regular_expressions.md)
- [Select-String](Microsoft.PowerShell.Utility/Select-String.md)
- [-match and -replace operators](about_Comparison_Operators.md)
- [-split](microsoft.powershell.core/about/about_Split.md)
- [switch statement with -regex option](microsoft.powershell.core/about/about_Switch.md)
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference
- https://docs.microsoft.com/en-us/dotnet/standard/base-types/substitutions-in-regular-expressions

PowerShell has several operators and cmdlets that use regular expressions. You can read more about their syntax and usage at the links below.

- Select-String
- -match and -replace operators
- -split
- switch statement with -regex option

The following are a few of the quantifiers available in PowerShell:

| Quantifier |              Description               |
|------------|----------------------------------------|
| *          | Zero or more times.                    |
| +          | One or more times.                     |
| ?          | Zero or one time.                      |
| {n}        | Match EXACTLY n number of times.       |
| {n,}       | Match at LEAST n number of times.      |
| {n,m}      | Match between n and m number of times. |

Substitutions in Regular Expressions
Using the regular expressions with the -replace operator allows you to dynamically replace text using captured text.

    <input> -replace <original>, <substitute>

- `<input>`: The string to be searched
- `<original>`: A regular expression used to search the input string
- `<substitute>`: A regular expression substitution expression to replace matches found in the input string.

使用正则替换：

```sh
# By Number - Capturing Groups are numbered from left to right.
'John D. Smith' -replace '(\w+) (\w+)\. (\w+)', '$1.$2.$3@contoso.com'
John.D.Smith@contoso.com

# By Name - Capturing Groups can also be referenced by name.
'CONTOSO\Administrator' -replace '\w+\\(?<user>\w+)', 'FABRIKAM\${user}'
FABRIKAM\Administrator

# The $& expression represents all the text matched.
'Gobble' -replace 'Gobble', '$& $&'
Gobble Gobble
```

因为 $ 符号在双引号中会进行变量插值，需要进行转义或者使用单引号避免，在单引号中使用 $$ 表示一个美元符号字面量：

```sh
'Hello World' -replace '(\w+) \w+', '$1 Universe'
"Hello World" -replace "(\w+) \w+", "`$1 Universe"
Hello Universe
Hello Universe

'5.72' -replace '(.+)', '$$$1'
"5.72" -replace "(.+)", "`$`$`$1"
$5.72
$5.72
```


## ⚡ Encoding & Cultures
- [About Character Encoding](microsoft.powershell.core/about/about_character_encoding.md)
- [About Preference Variables](microsoft.powershell.core/about/about_preference_variables.md)
- [Encoding.CodePage](/dotnet/api/system.text.encoding.codepage).
- [about_Parameters_Default_Values](about_Parameters_Default_Values.md).
- [about_Automatic_Variables](About\about_Automatic_Variables.md)

输入输出编码方案设置要一致，否则会导致乱码。控制台可以使用 chcp 命令改变代码页，从而解决显示乱码问题：

```sh
# Change code page for Unicode
> chcp 65001
# Change code page for GBK
> chcp 936
```

In PowerShell 5.1, the *Encoding* parameter supports the following values:

- *Ascii* Uses Ascii (7-bit) character set.
- *BigEndianUnicode* Uses UTF-16 with the big-endian byte order.
- *BigEndianUTF32* Uses UTF-32 with the big-endian byte order.
- *Byte* Encodes a set of characters into a sequence of bytes.
- *Default* Uses the encoding that corresponds to the system's active code page (usually ANSI).
- *Oem* Uses the encoding that corresponds to the system's current OEM code page.
- *String* Same as Unicode.
- *Unicode* Uses UTF-16 with the little-endian byte order.
- *Unknown* Same as Unicode.
- *UTF32* Uses UTF-32 with the little-endian byte order.
- *UTF7* Uses UTF-7.
- *UTF8* Uses UTF-8 (with BOM).


In PowerShell v6 and higher, the **Encoding** parameter supports the
following values:

- `ascii`: Uses the encoding for the ASCII (7-bit) character set.
- `bigendianunicode`: Encodes in UTF-16 format using the big-endian byte order.
- `oem`: Uses the default encoding for MS-DOS and console programs.
- `unicode`: Encodes in UTF-16 format using the little-endian byte order.
- `utf7`: Encodes in UTF-7 format.
- `utf8`: Encodes in UTF-8 format (no BOM).
- `utf8BOM`: Encodes in UTF-8 format with Byte Order Mark (BOM)
- `utf8NoBOM`: Encodes in UTF-8 format without Byte Order Mark (BOM)
- `utf32`: Encodes in UTF-32 format.

Beginning with PowerShell 6.2, the **Encoding** parameter also allows numeric
IDs of registered code pages (like `-Encoding 1251`) or string names of
registered code pages (like `-Encoding "windows-1251"`).


In general, Windows PowerShell uses the *Unicode UTF-16LE* encoding by default. However, the default encoding used by cmdlets in Windows PowerShell is not consistent.

*Out-File* and the redirection operators > and >> create *UTF-16LE*, which notably differs from *Set-Content* and *Add-Content*.

*Out-File -Append* and the *>>* redirection operator make no attempt to match the encoding of the existing target file's content. Instead, they use the default encoding unless the Encoding parameter is used. You must use the files original encoding when appending content.


PowerShell 有四个设置编码的相关属性，它们会影响输入、输出的编码行为：

- *$PSDefaultParameterValues* PowerShell 默认参数自动变量，影响内部命令的编码行为；
- *$OutputEncoding* 自动变量，影响 PowerShell 与外部程序的编码行为；
- *[System.Console]::OutputEncoding* 控制台全局变量；
- *[System.Console]::InputEncoding* 控制台全局变量；

Beginning in PowerShell 5.1, the redirection operators (> and >>) call the *Out-File* cmdlet. Therefore, you can set the default encoding of them using preference variable as shown in this example:

```sh
$PSDefaultParameterValues['Out-File:Encoding'] = 'utf8'
$PSDefaultParameterValues['*:Encoding'] = 'utf8'
```

The automatic variable *$OutputEncoding* affects the encoding PowerShell uses to communicate with external programs. It has no effect on the encoding that the output redirection operators and PowerShell cmdlets use to save to files.


```sh
# Write-Output with UTF-16 LE with BOM
> echo "something unidoe" > some.txt

# UTF-8 with BOM
> Out-File -Encoding utf8 "some.txt"

# Default Encoding GBK
> ${c:\download\test.txt}="中文"
> ${c:\download\test.txt}=”中文“

# Change default Encoding
> $OutputEncoding = [System.Text.Encoding]::Unicode
> $OutputEncoding
BodyName          : utf-16
EncodingName      : Unicode
HeaderName        : utf-16
WebName           : utf-16
WindowsCodePage   : 1200
IsBrowserDisplay  : False
IsBrowserSave     : True
IsMailNewsDisplay : False
IsMailNewsSave    : False
IsSingleByte      : False
EncoderFallback   : System.Text.EncoderReplacementFallback
DecoderFallback   : System.Text.DecoderReplacementFallback
IsReadOnly        : True
CodePage          : 1200
```

即使设置 chcp 65001 和 UTF8 编译，有时候执行脚本时，控制台还是会输出乱码，但是可以通过新的 pwsh.exe 进行解决，这和当前 PowerShell 配置有关：

    pwsh.exe path/to/some.ps1
    pwsh.exe -noprofile -ExecutionPolicy Bypass -file path/to/some.ps1

控制台输出编码是通过 System.Console 全局变量设置的，当创建新的 pwsh.exe 运行脚本时，它可以自动输入与输出的编码方案一致。

而直接在当前控制台中执行脚本时，就不会自动设置输出的编码方案，从而导致乱码，需要手动设置。

另外，如何需要进行编码转换的操作，那么注意，Start-Job 会启动新的 PowerShell 进程，并且使用系统默认的编码方案设置，这意味着当前进程正确的输入、输出编码方案设置将不会被应用到新的进程，这很有可能导致 ConvertTo-Json 或 ConvertFrom-Json 这操作涉及编码转换的操作失败！


Beginning in PowerShell 7, `$PSCulture` reflects the culture of the current
PowerShell runspace (session). If the culture is changed in a PowerShell
runspace, the `$PSCulture` value for that runspace is updated.

The culture determines the display format of items such as numbers, currency,
and dates, and is stored in a **System.Globalization.CultureInfo** object. Use
`Get-Culture` to display the computer's culture. `$PSCulture` contains the
**Name** property's value.


以下脚本可以测试，在当前 PowerShell 进程下，chcp 命令并不会改变 System.Console 的编码设置，但在创建新的 pwsh.exe 进行运行脚本时，chcp 命令会改变控制台的输入、输出编码为一致的方案：

```sh
# Define a ScriptBlock to test encoding setting
> $SetEncoding = { 
    if ($args.Count -ge 1){ chcp $args[0] }
    if ($args.Count -ge 2){ 
        [System.Console]::InputEncoding = [System.Text.Encoding]::GetEncoding($args[1])
    }
    if ($args.Count -ge 3){ 
        [System.Console]::OutputEncoding = [System.Text.Encoding]::GetEncoding($args[2])
    }
    [System.Console]::InputEncoding.EncodingName
    [System.Console]::OutputEncoding.EncodingName
}
> &$SetEncoding 936

活动代码页: 936
Unicode (UTF-8)
Chinese Simplified (GB2312)

> &$SetEncoding 65001 

Active code page: 65001
Unicode (UTF-8)
Chinese Simplified (GB2312)
```

- chcp 936      默认的 GBK 简体中文
- chcp 950      繁体中文
- chcp 65001    Unicode (UTF-8)
- chcp 437      MS-DOS 美国英语

可以将以下脚本保存到 SetEncding.ps1 方便使用：

```sh
<#
.Description
Set codepage for chcp InputEncoding OutputEncoding

.SYNOPSIS
Set-Encoding chcp InputEncoding OutputEncoding

.EXAMPLE
help Set-Encoding
# Get help
.EXAMPLE
Set-Encoding
# Get Encoding
.EXAMPLE
Set-Encoding 936 936 936
# Set codepage=GBK InputEncoding=GBK OutputEncoding=GBK
.EXAMPLE
Set-Encoding 936 936 65001
# Set codepage=GBK InputEncoding=GBK OutputEncoding=UTF8
#>
param(
    # [Parameter(Mandatory = $false,
    #     ParameterSetName = 'code',
    #     HelpMessage = 'Enter a Codepage for chcp command',
    #     Position = 0)]
    # [String]$code,
    # [Parameter(Mandatory = $false,
    #     ParameterSetName = 'code',
    #     HelpMessage = 'Enter a Codepage for chcp command',
    #     Position = 0)]
    # [String]$input_code,
    # [String]$output_code
)

if ($args.Count -ge 1){ 
    chcp $args[0] 
}else{
    chcp
}
if ($args.Count -ge 2){ 
    [System.Console]::InputEncoding=[System.Text.Encoding]::GetEncoding($args[1])
}
if ($args.Count -ge 3){ 
    [System.Console]::OutputEncoding=[System.Text.Encoding]::GetEncoding($args[2])
}
Write-Host InputEncoding: $([System.Console]::InputEncoding.EncodingName)
Write-Host OutputEncoding: $([System.Console]::OutputEncoding.EncodingName)
```


## ⚡ Out-File
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/out-file
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_filesystem_provider
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-content

使用 Get/Set-Content 进行文件读写：

```sh
> $pdf = Get-Content "Vulkan Tutorial en.pdf"
> $pdf.Length
24396
> $pdf[0]
%PDF-1.5

> Set-Content -Path .\DateTime.txt -Value (Get-Date)
> Get-Content -Path .\DateTime.txt

1/30/2019 09:55:08

> Get-ChildItem -Path .\Test*.txt

Test1.txt
Test2.txt
Test3.txt

> Set-Content -Path .\Test*.txt -Value 'Hello, World'
> Get-Content -Path .\Test*.txt

Hello, World
Hello, World
Hello, World
```

使用过滤器处理文件，或使用循环结构替换内容：

```sh
> Set-Content -Path C:\Temp\* -Filter *.txt -Value "Empty"

> Get-Content -Path .\Notice.txt

Warning
Replace Warning with a new word.
The word Warning was replaced.

> (Get-Content -Path .\Notice.txt) |
    ForEach-Object {$_ -Replace 'Warning', 'Caution'} |
        Set-Content -Path .\Notice.txt
Get-Content -Path .\Notice.txt

Caution
Replace Caution with a new word.
The word Caution was replaced.
```

使用 Echo 即 Write-Output 命令默认使用 UTF-16 LE BOM 格式。

使用 Out-File 可以指定字符编码方案，注意直接输出字符到文件时，请使用单引号以避免变量进行插值替换：

```sh
# Write-Output with UTF-16 LE with BOM
> echo "something unidoe" > some.txt

> Out-File -FilePath .\each.ps1 -InputObject 'dir -Directory |% {echo $_; cd $_; ..\Download.ps1; cd.. }'
> Get-Content .\each.ps1
dir -Directory |% {echo $_; cd $_; ..\Download.ps1; cd.. }

> $Procs = Get-Process
> Out-File -FilePath .\Process.txt -InputObject $Procs -Encoding ASCII -Width 50

> Get-Process | Out-File -FilePath .\Process.txt
> Get-Content -Path .\Process.txt

NPM(K)    PM(M)      WS(M)     CPU(s)      Id  SI ProcessName
 ------    -----      -----     ------      --  -- -----------
     29    22.39      35.40      10.98   42764   9 Application
     53    99.04     113.96       0.00   32664   0 CcmExec
     27    96.62     112.43     113.00   17720   9 Code
```

*-NoClobber*
NoClobber prevents an existing file from being overwritten and displays a message that the file already exists. By default, if a file exists in the specified path, Out-File overwrites the file without warning.

*-NoNewline*
Specifies that the content written to the file does not end with a newline character. The string representations of the input objects are concatenated to form the output. No spaces or newlines are inserted between the output strings. No newline is added after the last output string.

*-Encoding*
Specifies the type of encoding for the target file. The default value is utf8NoBOM.

The acceptable values for this parameter are as follows:

- *ascii*: Uses the encoding for the ASCII (7-bit) character set.
- *bigendianunicode*: Encodes in UTF-16 format using the big-endian byte order.
- *bigendianutf32*: Encodes in UTF-32 format using the big-endian byte order.
- *oem*: Uses the default encoding for MS-DOS and console programs.
- *unicode*: Encodes in UTF-16 format using the little-endian byte order.
- *utf7*: Encodes in UTF-7 format.
- *utf8*: Encodes in UTF-8 format.
- *utf8BOM*: Encodes in UTF-8 format with Byte Order Mark (BOM)
- *utf8NoBOM*: Encodes in UTF-8 format without Byte Order Mark (BOM)
- *utf32*: Encodes in UTF-32 format.



## ⚡ Sort Where Select

Findstr 或 Select-String 相当于 Linux 的 grep 正则表达式字符串处理。配合 Select-Object 可以对指定属性进行数量限定的选择：

```sh
> 'Hello', 'HELLO' | Select-String -Pattern 'HELLO' -CaseSensitive -SimpleMatch
HELLO

> dir |sort -Property LastWriteTime | select -Last 5

Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----        12/2/2022  上午 11:35                b
d-----        12/2/2022  上午 11:37                239

> dir |sort -Property LastWriteTime | select Name -Last 5

Name
----
b   
239
```

Sort-Object 默认升序 可以指定降序 Descending，Select 选择多个属性使用逗号分隔，如下选择最大的 20 个文件：

```sh
> dir -Recurse *.ts |sort -Property Length  -Descending| select Length, Name -First 20

dir -Recurse *.ts |
sort -Property Length | 
select DirectoryName, Length, BaseName, Name -First 120 |
% {
    $d = $_.DirectoryName; $b=$_.BaseName;  $n=$_.Name;$l=$_.Length; echo "$d $b.ts $l";
    if(Test-Path "$d\$n.bak"){
        echo "Exists backupt file: $n.bak";
        continue;
    }else{
        cd $d; $limit = [int]$b-1000;
        ren $n "$n.bak";
    }
    ..\..\Download.ps1 $limit;
    if($LASTEXITCODE){
        ren "$n.bak" $n;
    }
    $it = dir $n | select Name, Length; $s =  "✔", $it.Name, $it.Length, " => ", $l; $s -join " ";
    cd ..;
}
```


对有表头的内容进行排序，单列内容可以直接转换类型后再排序，使用 *-Unique* 过滤重复行：

```sh
> help sort -Examples

> dir | sort Length

Mode                LastWriteTime         Length Name                                                                                                                      
----                -------------         ------ ----
-a----        26/1/2022   上午 1:53         271367 SFML-2.4-sources.zip
-a----        26/1/2022   上午 1:52         324088 SFML-2.5.1-sources.zip
-a----        26/1/2022   上午 1:52        1576020 SFML-2.5.1-windows-32-bit.zip
-a----        26/1/2022   上午 1:53        1764542 SFML-2.5.1-windows-64-bit.zip
-a----        26/1/2022   上午 1:56        2203216 SFML-2.4-windows-32-bit.zip
-a----        26/1/2022   上午 1:53        2364876 SFML-2.4-windows-64-bit.zip    
```

对没有表头的文本内容排序，单列直接转换类型，多列先分割再转换类型，最后排序：

```sh
> Get-Content -Path C:\Test\ProductId.txt | Sort-Object {[int]$_}
    
    88
    500
    1500
    2800
    ...

> Get-content a.txt | sort {[int]$_.split()[2]}
> Get-Content .\report.txt | sort { [int]($_ -split " +")[1]}
> Get-Content .\report.txt | sort { [Double]::Parse((($_ -split " +")[5] -replace "%",""))}
```

字符串分割方法 Split() ，默认为空格分割，可以指定多个分割字符。这种分割方法对使用多空格的定宽的内容处理不友好，可以使用正则分割方法 -split。



使用 Where 或者 Where-Object 指定条件查询，可以查询属性中包含、不含指定内容，也可以使用条件匹配，或者使用其它运算符：

- `-contains` / `-ccontains` – Filter a collection containing a property value.
- `-notcontains` / `-cnotcontains` – Filter a collection that does not contain a property value.
- `-in` / `-cin` – value is in a collection, returns property value if a match is found.
- `-notin` / `-cnotin` – value is not in a collection, null/$false if there is no property value.
- `-like` / `-clike` – string matches a wildcard pattern.
- `-notlike` / `-cnotlike` – string does not match wildcard pattern.
- `-match` / `-cmatch` – string matches regex pattern.
- `-notmatch` / `-cnotmatch` – string does not match regex pattern
- `-eq` / `-ceq` – value equal to specified value.
- `-ne` / `-cne` – value not equal to specified value.
- `-gt` / `-cgt` – value greater than specified value.
- `-ge` / `-cge` – value greater than or equal to specified value.
- `-lt` / `-clt` – value less than specified value.
- `-le` / `-cle` – value less than or equal to specified value.
- `-Is [Type]` Indicates if the property value is an instance of the specified .NET [Type].
- `-IsNot [Type]` Indicates if the property value is not an instance of the specified .NET [Type].
- `-Not` Indicates if the property does not exist or has a value of null or false.

Where 查询简写形式为一个问号：

    ls | ?{ $_.Name -match ".cache" }

For case sensitivity, use containment operators that begin with -c[operator]

```sh
> help ?
Name             Category  Module      Synopsis
----             --------  ------      --------
%                Alias                 ForEach-Object
?                Alias                 Where-Object
h                Alias                 Get-History
r                Alias                 Invoke-History

> 1..10 | where {-not ($_ -band 1)}
> 1..10 | ? {!($_-band 1)}
> 1..26 | ? {!($_-band 1)}|%{[string][char]([int][char]'A'+$_-1)*$_}


> Get-Service | where -Not "DependentServices"
> Get-Process | where StartTime -Is [DateTime]
> Get-Process | where StartTime -IsNot [DateTime]

> $array = @(2,4,5,6,8,8,9,9,9)
> $array -contains 9
True
> 9 -in $array
True

> $string = "PowerShell"
> $string -like "*Shell"
True

> $array = @("PowerShell","Microsoft")
> $array -like "*Shell"
PowerShell
> $array -cmatch "Po"
PowerShell

> $dates = "2016-09", "2016-10"
> $dates -match "10"
2016-10
> $dates -match "16" |% {echo $_.Replace("16", "22")}
2022-09
2022-10

> Get-Service | Where-Object -Property Name -Contains 'BITS'
> Get-Service | Where-Object -Property Status -EQ 'Stopped'
> Get-Service | Where-Object -Property StartType -EQ 'Automatic'
> Get-Service | Where-Object -FilterScript {$_.StartType -EQ 'Automatic'}
> Get-Service | Where-Object {($_.Name -like 'Win*')}
> Get-Service | Where-Object {($_.Status -contains 'Running') -and ($_.StartType -in 'Manual')}
Status   Name               DisplayName                           
------   ----               -----------                           
Running  Appinfo            Application Information               
Running  AppXSvc            AppX Deployment Service (AppXSVC)     
Running  BDESVC             BitLocker Drive Encryption Service    
Running  camsvc             功能访问管理器服务                             
Running  cbdhsvc_d4d78      cbdhsvc_d4d78                         
Running  CertPropSvc        Certificate Propagation               
Running  cphs               Intel(R) Content Protection HECI Se...
Running  DisplayEnhancem... 显示增强服务                                
...
```


## ⚡ History 命令历史

PowerShell 所有执行过的命令都有历史记录，使用 h 查询，使用 r 调用历史命令：

```sh
> help ?
Name             Category  Module      Synopsis
----             --------  ------      --------
%                Alias                 ForEach-Object
?                Alias                 Where-Object
h                Alias                 Get-History
r                Alias                 Invoke-History

> h

  Id     Duration CommandLine
  --     -------- -----------
   1        0.013 $host.UI.RawUI.WindowTitle = 'PowerShell 7 (x64)'
   2        0.053 ls | ?{ $_.Name -match ".cache" }
   3        0.371 help ?

> r -id 1
$host.UI.RawUI.WindowTitle = 'PowerShell 7 (x64)'
```


## ⚡ Register 注册表读写
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy

增加 Powershell 右键菜单项：

    Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\Directory\Background\shell\PS]
    @="@shell32.dll,-8508"
    "Icon"="C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"

    [HKEY_CLASSES_ROOT\Directory\Background\shell\PS\command]
    @="powershell.exe -noexit -command Set-Location -literalPath '%V'"

    [HKEY_CLASSES_ROOT\Directory\shell\PS_ISE]
    @="⚡✒ Power Shell ISE..."
    "ICON"="C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell_ise.exe"

    [HKEY_CLASSES_ROOT\Directory\shell\PS_ISE\command]
    @="C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell_ise.exe"

在文件夹、文件夹空白区的右键菜单功能对应注册表以下位置：

- Directory\shell
- Directory\Background\shell

使用 LastKey 设置，以打开 Regedit 时自动定位：

        REG ADD HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey /t REG_SZ /d 计算机\HKEY_CLASSES_ROOT\Directory\Background\shell\Powershell\command

设置 command 默认项：

        powershell.exe -noexit -command Set-Location -literalPath '%V'

设置 Powershell 默认项为 *@shell32.dll,-8508*，它对应的字符串就是 “在此处打开 Powershell 窗口”，可以再设置一个 Icon 字符串项，指定一个图标

创建注册表条目：

```sh
PS > New-Item "HKLM:\Software\Microsoft\Windows\CurrentVersion\Run\New"
New-Item : Requested registry access is not allowed.
At line:1 char:9
+ New-Item <<<< "HKLM:\Software\Microsoft\Windows\CurrentVersion\Run\New"
```

如果脚本运行策略限制，可以使用命令设置：

```sh
> Set-ExecutionPolicy RemoteSigned
> Get-ExecutionPolicy -List

        Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined
   UserPolicy       Undefined
      Process       Undefined
  CurrentUser       Undefined
 LocalMachine    RemoteSigned
```

The effective execution policy is determined by the order of precedence as follows:

- *MachinePolicy*. Set by a Group Policy for all users of the computer.
- *UserPolicy*. Set by a Group Policy for the current user of the computer.
- *Process*. Affects only the current PowerShell session.
- *CurrentUser*. Affects only the current user.
- *LocalMachine*. Default scope that affects all users of the computer.


## ⚡ Download
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest


下面这个脚本的作用是显示一个 RSS 源最近的 8 篇文章的标题：


```sh
$rssUrl = "http://blogs.msdn.com/powershell/rss.aspx"
$blog = [xml](new-object System.Net.WebClient).DownloadString($rssUrl)
$blog.rss.channel.item | select title -first 8 
```

Powershell 提供了 Invoke-WebRequest 命令别名为 curl，不要和 curl 工具混淆了。

使用 curl 命令通过 Content-Length 头信息获取文件大小：

```sh
$sfml = "https://www.sfml-dev.org/files/SFML-2.4.1-linux-gcc-64-bit.tar.gz";
$size = (curl -Method Head $sfml).Headers["Content-Length"];
$size 
12263554
```


注意其中网络连接，内容下载，XML 解析等工作全部由 .NET 库完成。还可以执行 DownloadFile 文件下载或 DownloadData 二进制数据下载。

PowerShell 有集编辑与调试为一体的 IDE：Windows PowerShell ISE。

使用 System.Net.WebClient 下载：

```sh
$url = "http://mirror.internode.on.net/pub/test/10meg.test"
$output = "$PSScriptRoot\10meg.test"
$start_time = Get-Date

$wc = New-Object System.Net.WebClient
$wc.DownloadFile($url, $output)
#OR
(New-Object System.Net.WebClient).DownloadFile($url, $output)

Write-Output "Time taken: $((Get-Date).Subtract($start_time).Seconds) second(s)"
```

使用 Server Message Block (SMB) 协议下载文件：

```sh
Copy-Item -Source \\server\share\file -Destination C:\path\
```

Invoke-WebRequest 方法下载文件：

```sh
$url = "http://mirror.internode.on.net/pub/test/10meg.test"
$output = "$PSScriptRoot\10meg.test"
$start_time = Get-Date

Invoke-WebRequest -Uri $url -OutFile $output
Write-Output "Time taken: $((Get-Date).Subtract($start_time).Seconds) second(s)"

Invoke-WebRequest -Uri https://www.contoso.com/ -OutFile C:"\path\file" -Credential "yourUserName"
$Credentials = Get-Credential
Invoke-WebRequest -Uri "https://www.contoso.com" -OutFile "C:\path\file" -Credential $Credentials
```

Background Intelligent Transfer Service (BITS) 方法下载文件：


```sh
$url = "http://mirror.internode.on.net/pub/test/10meg.test"
$output = "$PSScriptRoot\10meg.test"
$start_time = Get-Date

Import-Module BitsTransfer
Start-BitsTransfer -Source $url -Destination $output
#OR
Start-BitsTransfer -Source $url -Destination $output -Asynchronous

Write-Output "Time taken: $((Get-Date).Subtract($start_time).Seconds) second(s)"
```


## ⚡ Powershell error exception
- https://powershellexplained.com/2017-04-10-Powershell-exceptions-everything-you-ever-wanted-to-know/
- https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_try_catch_finally


抛出异常：

```sh
function Do-Something
{
    throw "Bad thing happened"
}

> Do-Something

Bad thing happened
At line:1 char:1
+ throw "Bad thing happened"
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : OperationStopped: (Bad thing happened:String) [], RuntimeException
    + FullyQualifiedErrorId : Bad thing happened
```

输出错误信息，抛出 WriteErrorException 异常：

```sh
> Write-Error -Message "Houston, we have a problem." -ErrorAction Stop
Write-Error -Message "Houston, we have a problem." -ErrorAction Stop : Houston, we have a problem.
所在位置 行:1 字符: 1
+ Write-Error -Message "Houston, we have a problem." -ErrorAction Stop
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [Write-Error], WriteErrorException
    + FullyQualifiedErrorId : Microsoft.PowerShell.Commands.WriteErrorException
```

Throwing typed exceptions

```sh
throw "Could not find: $path"
throw [System.IO.FileNotFoundException] "Could not find: $path"

throw [System.IO.FileNotFoundException]::new()
throw [System.IO.FileNotFoundException]::new("Could not find path: $path")

# If you are not yet using PowerShell 5.0, you will have to use the older New-Object approach.
throw (New-Object -TypeName System.IO.FileNotFoundException )
throw (New-Object -TypeName System.IO.FileNotFoundException -ArgumentList "Could not find path: $path")
```


经常执行一些命令时会提示 RemoteException 错误，但命令执行是正确的，如下：

```sh
> php.exe -S localhost:80 -t . 
php.exe : [Mon Feb 14 03:18:23 2022] PHP 8.0.1 Development Server (http://localhost:80) started
所在位置 行:1 字符: 1
+ php.exe -S localhost:80 -t .
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: ([Mon Feb 14 03:...ost:80) started:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
```

这是因为执行的命令通过 stderr 标准错误文件对象打印了提示信息，导致 PowerShell ISE 认为命令执行出错了。

因为，try catch is only for terminating errors 所以无法对这种错误消息打印行为进行捕捉。

如果一定要处理，也可以设置喜好配置实现：

```sh
> try{
    $ErrorActionPreference = 'Stop'
    iex("php.exe -S localhost:80 -t . ")
}catch
{
    echo $PSItem.Exception.Message
}
[Mon Feb 14 04:04:21 2022] PHP 8.0.1 Development Server (http://localhost:80) started
```


Try/Catch/Finally 捕捉异常，多个异常类型捕捉使用逗号分隔：

```sh
try
{
    Do-Something
    Do-Something -ErrorAction Stop
}
# catch [System.IO.FileNotFoundException]
# catch [System.IO.DirectoryNotFoundException],[System.IO.FileNotFoundException]
catch
{
    Write-Output "Something threw an exception or used Write-Error"
}
```

异常处理中包含的上下文信息可以使用管道数据自动变量 `$PSItem` or `$_`，ErrorRecord 类型。

- $PSItem.InvocationInfo
- $PSItem.ScriptStackTrace
- $PSItem.Exception
- $PSItem.Exception.Message

解读异常信息：

```sh
$url = "https://www.xxx.com/some.html"
$agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36"
$webclient = new-object System.Net.WebClient
$webclient.Headers["user-agent"] = $agent
$webclient.Headers["referer"] = "https://www.rtmm6.com/"
$webclient.DownloadFile($url, "index.html")

使用“2”个参数调用“DownloadFile”时发生异常:“在 WebClient 请求期间发生异常。”
所在位置 行:2 字符: 1
+ $blog = (new-object System.Net.WebClient).DownloadFile($Url, "output. ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (:) [], MethodInvocationException
    + FullyQualifiedErrorId : WebException
```

输出异常信息表示调用方法出错，在 Web 请求期间的异常，异常类型为 WebException，有可能是服务器拒绝了请求。


## ⚡ COM

Powershell 从 Windows7 时代开始内置于 Windows 系统当中，可以看作是微软对 cmd 的大升级，目前两者并存于 Windows 系统中。Powershell 使命令行用户和脚本编写者可以利用 .NET Framework 的强大功能。它引入了许多非常有用的新概念，从而进一步扩展了您在 Windows 命令提示符和 Windows Script Host 环境中获得的知识和创建的脚本。

.NET Framework 中包含了一个异常强大的库，而微软为了保证二进制层面上跨语言的兼容性，很多库都是用 COM 封装的。PowerShell 的一大特色就是可以直接调用这些库。比如示例用 New-Object 命令创建了一个 Excel 应用对象。

```sh
# create new excel instance
$objExcel = New-Object -comobject Excel.Application
$objExcel.Visible = $True
$objWorkbook = $objExcel.Workbooks.Add()
$objWorksheet = $objWorkbook.Worksheets.Item(1)

# write information to the excel file
$i = 0
$first10 = (ps | sort ws -Descending | select -first 10)
$first10 | foreach -Process {$i++; $objWorksheet.Cells.Item($i,1) = $_.name; $objWorksheet.Cells.Item($i,2) = $_.ws}
$otherMem = (ps | measure ws -s).Sum - ($first10 | measure ws -s).Sum
$objWorksheet.Cells.Item(11,1) = "Others"; $objWorksheet.Cells.Item(11,2) = $otherMem

# draw the pie chart
$objCharts = $objWorksheet.ChartObjects()
$objChart = $objCharts.Add(0, 0, 500, 300)
$objChart.Chart.SetSourceData($objWorksheet.range("A1:B11"), 2)
$objChart.Chart.ChartType = 70
$objChart.Chart.ApplyDataLabels(5)
```

这个脚本调用了 Excel 的 COM 库进行绘图，当然从命令耦合的角度来看，输出成文本格式更有利，但这个例子主要想说明 PowerShell 的强大以及微软产品优异的复用性。

## ⚡ JSON

使用 ConvertFrom-Json 处理 JSON，并使用 echo 写入文件：

```sh
$json = @"
{
        "ServerName": "$Env:ComputerName",
        "UserName": "$Env:UserName",
        "BIOS": {
                 "Manufacturer" : "$((Get-WmiObject -Class Win32_BIOS).Manufacturer)",
                 "Version" : "$((Get-WmiObject -Class Win32_BIOS).Version)",
                 "Serial" : "$((Get-WmiObject -Class Win32_BIOS).SerialNumber)"
                 },
        "OS" : "$([Environment]::OSVersion.VersionString)"
 }
"@
 
$info = ConvertFrom-Json -InputObject $json
 
$info.ServerName
$info.BIOS.Version
$info.OS
echo "$info" > some.json
# @{ServerName=DESKTOP-CBSK60R; UserName=OCEAN; BIOS=; OS=Microsoft Windows NT 10.0.18362.0} > some.json
echo "$json" > some.json
# {
#         "ServerName": "DESKTOP-CBSK60R",
#         "UserName": "OCEAN",
#         "BIOS": {
#                  "Manufacturer" : "Microsoft Corporation",
#                  "Version" : "MSFT   - 0",
#                  "Serial" : "015698675057"
#                  },
#         "OS" : "Microsoft Windows NT 10.0.18362.0"
#  }
```

ConvertFrom-Json 和 ConvertTo-Json 结对使用，类似的有 ConvertFrom-Csv 和 ConvertTo-Csv。

结合 Get-Content 读取文件内容，如果有中文符合，可以指定编码如 -encoding utf8。

```sh
$json=Get-Content -Path some.json | ConvertFrom-Json
$json=Get-Content -encoding utf8 -Path some.json | ConvertFrom-Json
$json | ConvertTo-Csv
(dir)[0] | ConvertTo-Json
```

在 .Net 平台上，XML 数据格式始终是 C 位：

```sh
$x = [xml]@"
<Name>
<FirstName>Mary</FirstName>
<LastName>King</LastName>
</Name>
"@

$x['Name']                # refers to the element Name
$x['Name']['FirstName']   # refers to the element FirstName within Name
$x['FirstName'] -eq $null # No such child element at the top level, result is `$null`
```

The type of the result is System.Xml.XmlElement or System.String.


## ⚡ PowerShell GUI
- [about_Using](microsoft.powershell.core/about/about_Using.md)
- http://eddiejackson.net/web_documents/Building_Forms_with_PowerShell_Part1.pdf
- https://docs.microsoft.com/en-us/dotnet/api/system.windows.forms.form
- https://github.com/dotnet/dotnet-api-docs/blob/main/xml/System.Windows.Forms/Form.xml

桌面 GUI 程序开发涉及 Windows 的各种图形框架，其中最常用的是 WinForms，开放在 Github 上的文档是 XML 格式，查询起来不是很方便：

首先，掌握 PowerShell 的 Using 指令的使用：

```sh
# Syntax
using namespace <.NET-namespace>
using module <module-name>
using assembly <.NET-assembly-path>
using assembly <.NET-namespace>

# Example
using assembly 'C:\Program Files\PowerShell\7\System.DirectoryServices.dll'
using namespace System.DirectoryServices.ActiveDirectory

class myDirectoryClass : System.DirectoryServices.ActiveDirectory.DirectoryContext
{

  [DirectoryContext]$domain

  myDirectoryClass([DirectoryContextType]$ctx) : base($ctx)
  {
    $this.domain = [DirectoryContext]::new([DirectoryContextType]$ctx)
  }

}

$myDomain = [myDirectoryClass]::new([DirectoryContextType]::Domain)
$myDomain
```


PowerShell 可以像 C# 编写 WinForm 程序，当然它只是一种脚本，始终不及 C# 方便调用 WinForms 框架的 API，要通过脚本调用 GUI 控件，需要对 WinForms 框架有深入了解决：

```sh
# using assembly System.Windows.Forms
using namespace System.Windows.Forms
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
$form.Controls.Add($button)
$form.ShowDialog()
```

Form 和 Button 算得上最典型的两种基本 GUI 对象了，一个是窗口，另一个是控件，它们都是图形组件。

    Object
    → MarshalByRefObject
        → Component
            → Control
              | → ScrollableControl
              |    | → ContainerControl
              |    | → Form
              | → ButtonBase
                   | → Button

除了去翻文档，另一个查询 API 的方法就是使用类型反射功能：

    $form.GetType().GetMembers()|FT
    $form.gettype().GetProperties()|FT
    $form.gettype().GetFields()|FT
    $form.gettype().GetMembers()|FT


以下官方示例展示了 UI 编程，构造一个包含列表的窗口，并在点击确认按钮时返回选择的项目：

```sh
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$form = New-Object System.Windows.Forms.Form
$form.Text = 'Data Entry Form'
$form.Size = New-Object System.Drawing.Size(640,320)
$form.StartPosition = 'CenterScreen'

$OKButton = New-Object System.Windows.Forms.Button
$OKButton.Location = New-Object System.Drawing.Point(75,220)
$OKButton.Size = New-Object System.Drawing.Size(75,23)
$OKButton.Text = 'OK'
$OKButton.DialogResult = [System.Windows.Forms.DialogResult]::OK
$form.AcceptButton = $OKButton
$form.Controls.Add($OKButton)

$CancelButton = New-Object System.Windows.Forms.Button
$CancelButton.Location = New-Object System.Drawing.Point(150,220)
$CancelButton.Size = New-Object System.Drawing.Size(75,23)
$CancelButton.Text = 'Cancel'
$CancelButton.DialogResult = [System.Windows.Forms.DialogResult]::Cancel
$form.CancelButton = $CancelButton
$form.Controls.Add($CancelButton)

$label = New-Object System.Windows.Forms.Label
$label.Location = New-Object System.Drawing.Point(10,20)
$label.Size = New-Object System.Drawing.Size(280,20)
$label.Text = 'Please make a selection from the list below:'
$form.Controls.Add($label)

$listBox = New-Object System.Windows.Forms.Listbox
$listBox.Location = New-Object System.Drawing.Point(10,40)
$listBox.Size = New-Object System.Drawing.Size(260,20)

$listBox.SelectionMode = 'MultiExtended'

[void] $listBox.Items.Add('Item 1')
[void] $listBox.Items.Add('Item 2')
[void] $listBox.Items.Add('Item 3')
[void] $listBox.Items.Add('Item 4')
[void] $listBox.Items.Add('Item 5')

$listBox.Height = 70
$form.Controls.Add($listBox)
$form.Topmost = $true

$result = $form.ShowDialog()

if ($result -eq [System.Windows.Forms.DialogResult]::OK)
{
        $x = $listBox.SelectedItems
        $x
}
```

# chocolatey

安装 Chocolatey，只需要在 Windows 系统的命令行工具下面去执行一行命令（cmd），只需要在其中的一个上面安装 Chocolatey 就可以了。你要用管理员的身份去运行命令行工具，不然会遇到权限问题。

在命令行终端下执行：

    @powershell -NoProfile -ExecutionPolicy unrestricted -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin


安装完成后，在命令行工具的下面，输入：

    choco help

如果出现一些有用的帮助信息，比如 Chocolatey 的版本号，安装到的目录，相关的命令，还有示例等等，这就说明我们已经可以在系统上使用 Chocolatey 了。

Chocolatey的使用也很简单，使用指令如下：

    choco search <keyword>    搜索软件
    choco list <keyword>  跟 search 命令功能类似
    choco install <package1 package2 package3...>  安装软件
    choco install <package>  -version *** 安装指定版本
    choco  uninstall name 卸载软件
    choco version <package>  查看安装包的版本情况
    choco  upgrade <package>   更新某个软件 
    choco list -localonly        查看一下所有安装在本地的包的列表
    choco list -lo       功能同上

Chocolatey 的包有不同的类型，有些包的名字里面会包含特殊的后缀，比如 .install ，.commandline，.portable ，有些包的名字不带这些后缀。

安装带 .install 后缀的包，这个包会出现在系统控制面板里的 卸载或更改程序 里面，你可以把 .install 的包想成是通过安装程序（msi）安装的包。

.commandline（未来会被抛弃） 与 .portable 后缀的包是压缩包（zip），安装这种后缀的包，你不能在 卸载或更改程序 里找到它们。

你也可以选择不带后缀的包，这样如果系统中已经安装了这个包，就会跳过去，如果没安装，Chocolatey 就会为你安装一个，默认安装的这个包的类型应该就是 .install 后缀的包。

## ==⚡ Version Manager

```sh
PARAM([string]$version, $target="c:/go")

$PS = $PSCommandPath -replace "^.+[\\/]",""
$VMD = (Get-Item $PSCommandPath).LinkTarget
if ($VMD -eq $null){ 
    $VMD = $PSCommandPath
}
$VMD = $VMD -replace "\\[^/\\]+$","\"
$versions = Get-Childitem -Directory $VMD

function Print($msg)
{
    Write-Host ("="*80)
    Write-Host $msg
    Write-Host ("="*80)
} 

function PrintHelp 
{
    Print @"
    Golang Version Manager`n
    Usage:
     $VMD $($versions[-1].Name)
     $VMD $($versions[-1].Name) c:/golang
    
    Candidate: 
        $($versions.Name)
"@
}

function PrintNoVersion 
{
    Print @"
    No such version: $version
          Candidate: $($versions.Name)
"@
}

function PrintNotSymblic 
{
    Print "Target is not a symbolic: $target"
}

function SwitchVersion
{
    $versions | % {
        if ($_.Name.IndexOf($version) -ge 0){
            $vm = "$_/bin/$PS"
            if (!(Test-Path "$vm")){
                echo "mklink `"$vm`" `"$VMD/$PS`""
                cmd.exe /c "mklink `"$vm`" `"$VMD/$PS`""
            }
            if (Test-Path $target){ 
                rm $target 
            }
            Write-Host "use $($_.Name)"
            echo "mklink /d `"$target`" `"$_`""
            cmd.exe /c "mklink /d `"$target`" `"$_`""
            break
        }
    }
}

if ($version -eq ""){ 
    PrintHelp 
} elseif ($versions.Count -eq 0) {
    Print "No any golang version found"
} elseif ( (Test-Path $target) -and (get-item $target).LinkTarget -eq $null) {
    PrintNotSymblic
} elseif ((Get-Childitem -Directory "*$version*").Ccount -eq 0) {
    PrintNoVersion
} else{
    SwitchVersion($version)
}
```


# 🚩 BAT Readme

批处理脚本编程，下载程序示范，需要安装 CURL 工具，功能二，拖动 ts 文件到 bat 中进行合并：

    @echo off
    rem ============================================================================
    rem Drag and drop mpegts file to this bat to combine together
    rem ============================================================================
    chcp 65001

    title Tsumugi2闪烁风暴 明丽つむぎ
    rem start http://www.qiankantv.cn/movie/201-152743.html@play=0-0
    set c=curl -O https://yiqikan.wuyouzuida.com/20200327/4008_5c86f8ad/1000k/hls/986fa0f24bd000902.ts
    set MAX=582

    rem ==============================================================================================
    :ParseParam
    rem ==============================================================================================
    set str=%1
    rem if "%str%"=="" (
    if [%str%]==[] (
        goto ParseEnd
    )
    if "%allparam%"=="" (
        set allparam="%str%"
    ) else (
        set allparam=%allparam% "%str%"
    )
    shift /0
    goto ParseParam

    :ParseEnd
    if "%allparam%"=="" (
        goto Download
    )
    if NOT "%allparam%"=="" (
        echo File list:
        for %%G in (%allparam:;=" "%) do @echo %%G
        rem PAUSE>NUL 
        goto Combine
    )

    rem ==============================================================================================
    :Download
    rem ==============================================================================================

    rem for /l %i in (1000000,1,1000010) do ( setlocal enabledelayedexpansion && echo %i:~-0,6%)
    rem start http://www.qiankantv.cn/movie/201-152743.html@play=0-0
    rem set c=curl -O https://yiqikan.wuyouzuida.com/20200327/4008_5c86f8ad/1000k/hls/986fa0f24bd000902.ts

    setlocal enabledelayedexpansion

    for /L %%i in (%MAX%,-1,0) do (
        set /a n=1000000 + %%i
        echo !n:~-6!.ts
        if EXIST "!c:~-20,11!!n:~-6!.ts" (ECHO FILE EXISTS !n:~-6!.ts) ELSE %c:~0,-9%!n:~-6!.ts
    )

    goto Finished

    rem ==============================================================================================
    :Combine
    rem ==============================================================================================

    rem ffmpeg -ss 0:00:03 -to 0:00:07 -i "6087be503be000017.ts" -c copy "6087be503be000017-.ts"
    rem string replace %variable:StrToFind=NewStr%
    rem echo /B %allparam: =+% 00.ts
    set rename=00.ts
    set /p rename= Set output file naem? [00.ts]
    if EXIST %rename% (
        set /p confirm=File exists %rename%, overwrite? [yes or no]
    )
    if EXIST %rename% (
        if NOT "%confirm%"=="yes" (
            goto FileExists
        )
    )
    copy /B %allparam: =+% %rename%
    set /p delete= Do you want to delete those mpegts file? [yes or no]
    echo %delete%
    if [%delete%] == [yes] (
        del %allparam%
        echo Ole files deleted. Press key to continue.
    )
    PAUSE>NUL
    goto Finished

    :FileExists
    echo File exists %rename% and task canceled.
    PAUSE>NUL

    :Finished
    @echo on



## ⚡ Command Cateogry
https://ss64.com/nt/commands.html

A categorized list of Windows CMD commands

Active Directory
     ADmodcmd Active Directory Bulk Modify
     CSVDE    Import or Export Active Directory data 
     DSACLs   Active Directory ACLs
     DSAdd    Add items to active directory (user group computer) 
     DSGet    View items in active directory (user group computer)
     DSQuery  Search for items in active directory (user group computer)
     DSMod    Modify items in active directory (user group computer)
     DSMove   Move an Active directory Object
     DSRM     Remove items from Active Directory

Batch Files
     CALL     Call one batch program from another•
     CHOICE   Accept keyboard input to a batch file
     CLIP     Copy STDIN to the Windows clipboard
     CLS      Clear the screen•
     CMD      Start a new CMD shell
     COLOR    Change colors of the CMD window•
     DOSKEY   Edit command line, recall commands, and create macros
     ECHO     Display message on screen•
     ENDLOCAL End localisation of environment changes in a batch file•
     EVENTCREATE Add a message to the Windows event log
     EXIT     Quit the current script/routine and set an errorlevel•
     FOR /F   Loop command: against a set of files•
     FOR /F   Loop command: against the results of another command•
     FOR      Loop command: all options Files, Directory, List•
     GOTO     Direct a batch program to jump to a labelled line•
     IF       Conditionally perform a command•
     IFMEMBER Is the current user a member of a Workgroup
     LOGTIME  Log the date and time in a file
     MAPISEND Send email from the command line
     MORE     Display output, one screen at a time
     PAUSE    Suspend processing of a batch file and display a message•
     PROMPT   Change the command prompt•
     REM      Record comments (remarks) in a batch file•
     RUN      Start | RUN commands
     RUNAS    Execute a program under a different user account
     SET      Display, set, or remove session environment variables•
     SETLOCAL Control the visibility of environment variables•
     SETX     Set environment variables
     SORT     Sort input
     SHIFT    Shift the position of batch file parameters•
     SLEEP    Wait for x seconds
     START    Start a program, command or batch file•
     TIMEOUT  Delay processing of a batch file
     TITLE    Set the window title for a CMD.EXE session•
     WAITFOR  Wait for or send a signal
     WMIC     WMI Commands
     ::       Comment / Remark•

Disk Management
     BCDBOOT  Create or repair a system partition
     BCDEDIT  Manage Boot Configuration Data
     CONVERT  Convert a FAT drive to NTFS
     CHKDSK   Check Disk - check and repair disk problems
     CHKNTFS  Check the NTFS file system
     DEFRAG   Defragment hard drive
     DISKPART Disk Administration
     DISKSHADOW Volume Shadow Copy Service
     DriverQuery Display installed device drivers
     FORMAT   Format a disk
     FREEDISK Check free disk space (in bytes)
     LABEL    Edit a disk label
     MOUNTVOL Manage a volume mount point
     NTBACKUP Backup folders to tape
     SFC      System File Checker
     VOL      Display a disk label•

Files and Folders
     ASSOC    Change file extension associations•
     ASSOCIAT One step file association
     ATTRIB   Change file attributes
     BITSADMIN Background Intelligent Transfer Service
     CACLS    Change file permissions
     CD       Change Directory - move to a specific Folder•
     CIPHER   Encrypt or Decrypt files/folders
     COMP     Compare the contents of two files or sets of files
     COMPACT  Compress files or folders on an NTFS partition
     COMPRESS Compress individual files on an NTFS partition
     COPY     Copy one or more files to another location•
     CSCcmd   Client-side caching (Offline Files)
     DEL      Delete one or more files•
     DELTREE  Delete a folder and all subfolders
     DIR      Display a list of files and folders•
     ERASE    Delete one or more files•
     EXPAND   Uncompress files
     EXTRACT  Uncompress CAB files
     FC       Compare two files
     FIND     Search for a text string in a file
     FINDSTR  Search for strings in files
     FORFILES Batch process multiple files
     FSUTIL   File and Volume utilities
     FTP      File Transfer Protocol
     FTYPE    File extension file type associations•
     iCACLS   Change file and folder permissions
     MD       Create new folders•
     MOVE     Move files from one folder to another•
     MKLINK   Create a symbolic link (linkd)
     OPENFILES Query or display open files
     POPD     Return to a previous directory saved by PUSHD•
     PsFile   Show files opened remotely
     PUSHD    Save and then change the current directory•
     QGREP    Search file(s) for lines that match a given pattern
     RECOVER  Recover a damaged file from a defective disk
     REN      Rename a file or files•
     REPLACE  Replace or update one file with another
     RD       Delete folder(s)•
     RMTSHARE Share a folder or a printer
     ROBOCOPY Robust File and Folder Copy
     SHARE    List or edit a file share or print share
     SHORTCUT Create a windows shortcut (.LNK file)
     SUBINACL Edit file and folder Permissions, Ownership and Domain
     TAKEOWN  Take ownership of a file
     TOUCH    Change file timestamps
     TREE     Graphical display of folder structure
     TYPE     Display the contents of a text file•
     WHERE    Locate and display files in a directory tree
     WINDIFF  Compare the contents of two files or sets of files
     XCACLS   Change file and folder permissions
     XCOPY    Copy files and folders

Group Policy/Windows Installer
     DevCon   Device Manager Command Line Utility 
     GPRESULT Display Resultant Set of Policy information
     GPUPDATE Update Group Policy settings
     MSIEXEC  Microsoft Windows Installer
     PsInfo   List information about a system
     PsShutdown Shutdown or reboot a computer
     REGSVR32 Register or unregister a DLL
     SHUTDOWN Shutdown the computer
     SLMGR    Software Licensing Management (Vista/2008)
     WUAUCLT  Windows Update

Networking
     ARP      Address Resolution Protocol
     BROWSTAT Get domain, browser and PDC info
     DNSSTAT  DNS Statistics
     GETMAC   Display the Media Access Control (MAC) address
     IPCONFIG Configure IP
     NET      Manage network resources
     NETDOM   Domain Manager
     NETSH    Configure Network Interfaces, Windows Firewall & Remote access
     NBTSTAT  Display networking statistics (NetBIOS over TCP/IP)
     NETSTAT  Display networking statistics (TCP/IP)
     NSLOOKUP Name server lookup
     PATHPING Trace route plus network latency and packet loss
     PsPing   Measure network performance
     PING     Test a network connection
     ROUTE    Manipulate network routing tables
     TRACERT  Trace route to a remote host

Processes
     PATH     Display or set a search path for executable files•
     PsExec   Execute process remotely
     PsKill   Kill processes by name or process ID
     PsList   List detailed information about processes
     PsGetSid Display the SID of a computer or a user
     PsSuspend Suspend processes
     SCHTASKS Schedule a command to run at a specific time
     SYSMON   Monitor and log system activity to the Windows event log
     TASKLIST List running applications and services
     TASKKILL End a running process
     TSKILL   End a running process
     TLIST    Task list with full path

Printing
     MODE     Configure a system device
     PRINT    Print a text file
     PRINTBRM Print queue Backup/Recovery
     PRNCNFG  Display, configure or rename a printer
     PRNMNGR  Add, delete, list printers and printer connections
     RUNDLL32 Run a DLL command (add/remove print connections)

Registry
     REG      Registry: Read, Set, Export, Delete keys and values
     REGEDIT  Import or export registry settings
     REGINI   Change Registry Permissions

Remote Desktop
     CHANGE   Change Terminal Server Session properties
     Query Process    Display processes (TS/Remote Desktop)
     Query Session    Display all sessions (TS/Remote Desktop)
     Query TermServer List all servers (TS/Remote Desktop)
     Query User       Display user sessions (TS/Remote Desktop)
     MSTSC    Terminal Server Connection (Remote Desktop Protocol)
     RASDIAL  Manage RAS connections
     RASPHONE Manage RAS connections
     Reset Session - Delete a Remote Desktop Session
     TSDISCON Disconnect a Remote Desktop Session
     WINRM    Windows Remote Management
     WINRS    Windows Remote Shell

Services
     CASPOL   Code Access Security Policy Tool.
     PORTQRY  Display the status of ports and services
     PsService View and control services
     SC       Service Control

System Information
     NOW      Display the current Date and Time 
     DATE     Display or set the date•
     HELP     Online Help
     LOGMAN   Manage Performance Monitor logs
     MBSAcli  Baseline Security Analyzer
     MSINFO32 System Information
     NTRIGHTS Edit user account rights
     PsLogList  Event log records
     SYSMON   Monitor and log system activity to the Windows event log
     SYSTEMINFO List system configuration
     TIME     Display or set the system time•
     TypePerf Write performance data to a log file
     VER      Display version information•
     VERIFY   Verify that files have been saved•
     WHOAMI   Output the current UserName and domain

User Administration
     ADDUSERS Add or list users to/from a CSV file
     CERTREQ  Request certificate from a certification authority
     CleanMgr Automated cleanup of Temp files, recycle bin
     CON2PRT  Connect or disconnect a Printer
     CMDKEY   Manage stored usernames/passwords
     DELPROF  Delete user profiles
     DIRUSE   Display disk usage
     LOGOFF   Log a user off
     MOVEUSER Move a user from one domain to another
     MSG      Send a message
     PERMS    Show permissions for a user
     POWERCFG Configure power settings
     PsLoggedOn Who's logged on (locally or via resource sharing)
     PsPasswd   Change account password
     SUBST    Associate a path with a drive letter

Commands marked • are Internal commands only available within the CMD shell.
All other commands (not marked with •) are external commands.
External commands may be used under the CMD shell, PowerShell, or directly from START-RUN.


## ⚡ CHOICE 备选交互
https://ss64.com/nt/choice.html

Accept user input to a batch file. Choice allows single key-presses to be captured from the keyboard.

    CHOICE [/c [choiceKeys]] [/N] [/CS] [/t Timeout /D Choice] [/M Text]

key
   /C[:]choiceKeys  One or more keys the user can press. Default is YN.

   /N               Do not display choiceKeys at the end of the prompt string.

   /CS              Make the choiceKeys Case Sensitive.

   /T Timeout       Timeout in Timeout seconds
                    If Timeout is 0 there will be no pause and the
                    default will be selected.

   /D choice        Default choice made on Timeout.

   /M "text"        Message string to describe the choices available.

ERRORLEVEL will return the numerical offset of choiceKeys.
Choice.exe is a standard command in Windows 2003 and greater, it was first made available in the Windows XP resource kit.

If you need to include a quotation mark within the message string, it needs to be escaped by doubling it: "message""withquote"

CHOICE can be used to set a specific %errorlevel%
for example to set the %errorlevel% to 6 :

    ECHO 6| CHOICE /C 123456 /N >NUL

Examples:

```sh
CHOICE /C CH /M "Select [C] CD or [H] Hard drive"
IF %ERRORLEVEL% EQU 2 goto sub_hard_drive
IF %ERRORLEVEL% EQU 1 goto sub_cd

@echo off
set v1=MinGW 8.1
set v2=MinGW 8.0
echo [1] %v1%
echo [2] %v2%
CHOICE /C 12 /m "Switch MinGW Version:"
    goto sub_%ERRORLEVEL% 
    
:sub_1
    Echo %v1%
goto:eof 

:sub_2
    Echo %v2%
goto:eof
```



## ⚡ CMD.EXE
- https://ss64.com/nt/cmd.html

CMD.exe 命令控制台，用来创建 CMD Shell 或运行命令程序。

    Syntax
          CMD [charset] [options]

          CMD [charset] [options] [/C Command] 

          CMD [charset] [options] [/K Command] 

    Options   
       /C     Run Command and then terminate

       /K     Run Command and then return to the CMD prompt.
              This is useful for testing, to examine variables

       Command : The command, program or batch script to be run.
                 This can even be several commands separated with '&' 
                 (the whole should also be surrounded by "quotes")

       /T:fg  Sets the foreground/background colours 
       
       /A     Output ANSI characters
       /U     Output UNICODE characters (UCS-2 le)
              These options will affect piping or redirecting to a file.
              Most common text files are ANSI, use these switches
              when you need to convert the character set.

       /D     Ignore registry AutoRun commands
              HKLM | HKCU \Software\Microsoft\Command Processor\AutoRun

       /E:ON  Enable CMD Command Extensions (default)
       /X     Enable CMD Command Extensions (old switch for compatibility)
       /E:OFF Disable CMD Command Extensions
       /Y     Disable CMD Command Extensions (old switch for compatibility)

       /F:ON  Enable auto-completion of pathnames entered at the CMD prompt
       /F:OFF Disable auto-completion of pathnames entered at the CMD prompt (default)
    At the command prompt Ctrl-D gives folder name completion and Ctrl-F gives File and folder name completion.

    These key-strokes will display the first matching path. Thereafter, repeated pressing of the same control key will cycle through the list of matching paths. Pressing SHIFT with the control key will move through the list backwards.

       /Q    Turn echo off

       /S    Strip " quote characters from command.
             If command starts with a quote, the first and last quote chars in command
             will be removed, whether /s is specified or not.

       /V:ON Enable delayed environment variable expansion 
             this allows a FOR loop to specify !variable! instead of %variable% 
             expanding the variable at execution time instead of at input time. 
       
       /V:OFF
             Disable delayed environment expansion.
             Delayed Environment expansion can also be set with SETLOCAL


命令扩展是一种高级功能，打开命令扩展功能就可以在批处理中使用这些高级功能，默认状态是激活的。

除了通过 CMD 的命令行参数 /X 激活命令扩展，还可以通过 SETLOCAL 修改匹配变量激活：

    SETLOCAL ENABLEEXTENSIONS
    SETLOCAL DISABLEEXTENSIONS

    setlocal enabledelayedexpansion

以文本处理为演示命令扩展功能，假设有一个文本 demo.txt 内容如下：

    HELLO WORLD!
    I'M COMMING.
    WHY COMMING SO LATE?
    IT'S BETTER LATE THAN NEVER.

想提取最后一行，启用命令扩展，那么一切都很简单：

    @ECHO OFF
    FOR /F "DELIMS=" %%I IN (demo.TXT) DO (SET FOO=%%I)
    CALL ECHO.%%FOO%%
    PAUSE>NUL

FOR 命令扩展通过参数 /F 作用。


## ⚡ Keypress

使用 PowerShell 获取按键信息

    @echo off
    setlocal

    cls
    echo Press any key to test, ESC to end
    :loop
    for /F %%k in ('PowerShell Write-Host $Host.UI.RawUI.ReadKey(\"NoEcho,IncludeKeyDown\"^).VirtualKeyCode') do set "key=%%k"
    echo Key read: %key%
    if %key% neq 27 goto loop

实现一个 MinGW 版本管理工具：

```sh
@echo off
set v1=MinGW-W64-builds-4.2.0: GCC 5.3.0 (GDB) 7.10.1
set v2=MinGW-W64-builds-4.3.5: GCC 8.1.0 (GDB) 8.1

@REM setlocal

cls
echo Choose a MinGW version, ESC to end
echo [1] %v1%
echo [2] %v2%
:loop
for /F %%k in ('PowerShell Write-Host $Host.UI.RawUI.ReadKey(\"NoEcho,IncludeKeyDown\"^).VirtualKeyCode') do set "key=%%k"
echo "Key press %key%"
@REM set /p="Key press %key%"
if %key% equ 49 goto version_1
if %key% equ 50 goto version_2
if %key% neq 27 goto loop
goto end

:version_2
echo %v1%
rmdir c:\mingw
mklink /d c:\mingw c:\mingw_8.1
goto end

:version_1
echo %v2%
rmdir c:\mingw
mklink /d c:\mingw C:\Qt\Tools\mingw530_32\bin
goto end

:end
```


## ⚡ mklink 文件链接
- https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink

Windows 系统下的文件夹链接功能 mklink/linkd，Windows 2000/XP/server 2003 的相应功能是 linkd。

vista 及以上系统的 mklink 命令可以创建文件夹的链接，是从底层实现文件夹链接，所以这个链接是对应用程序透明的。

    mklink /d \MyFolder \Users\User1\Documents
    mklink /h \MyFile.file \User1\Documents\example.file
    rd \MyFolder
    del \MyFile.file

命令用法，动机：想将 `_next` 文件夹指向 `.next` 文件夹，访问前者等效访问后者的内容：

    >mklink /D _next "C:\coding\md-code\nextjs-blog\.next"
    为 _next <<===>> C:\coding\md-code\nextjs-blog\.next 创建的符号链接

使用相对目录时，注意 Target 只能相对于 Link 所在的位置。

而 C:\Program Files 这个文件夹是对应用程序透明的，应用程序访问链接文件就是访问 Target 目标文件。

    MKLINK [[/D] | [/H] | [/J]] Link Target

            /D      创建目录符号链接。默认为文件符号链接。
            /H      创建硬链接而非符号链接。
            /J      创建目录联接。
            Link    指定新的符号链接名称。
            Target  指定新链接引用的路径 (相对或绝对)。

符号链接和软链接大致相同，区别在于，软链接是绝对路径链接，而符号链接允许相对路径的链接。

文件的硬链接是对文件创建的链接，比如给 1.txt 创建硬链接 2.txt，那么这两个文件就是磁盘同一个文件的两个等价别名，相当于是指向同一个硬盘存储空间的两个指针，删除其中任何一个都不影响另一个文件，但是限制就是这种链接不能跨分区。

删除链接符号：

    rmdir link_symbol 

示范使用 for 循环指处理目录下的文件链接创建：

    @echo off
    setlocal enabledelayedexpansion
    cls

    set TARGET=C:\coding\md-code\nextjs-blog\
    set LINK=C:\coding\md-code\nextjs-blog\.next\server\pages\
    if not exist %LINK% (
        mkdir %LINK%
    )
    cd %TARGET%public

    mklink /D %LINK%_next ..\..\..\.next
    for %%G in (*.*) do (
        rem echo %LINK%%%G === %%G
        rem 屏蔽 mklink 的输出
        rem mklink %LINK%%%G ..\..\..\public\%%G > nul 2>&1 
        mklink /H %LINK%%%G %TARGET%public\%%G 
    )
    endlocal

    rem set n_dir=0
    rem set n_count=0
    rem     REM 每 1000 个提示一下
    rem     set /A n_count += 1
    rem     set /A r = !n_count! %% 1000
    rem     if !r! EQU 0 (
    rem         echo !n_count!
    rem     )
    rem )
    rem set /A n_dir += 1



## ⚡ variables
- https://ss64.com/nt/syntax-variables.html
- https://ss64.com/nt/shift.html

基本变量：

- %1 %2 ... %9 传入 bat 的参数，%0 为脚本文件路径；
- %* 批处理参数是所有参数，不包括 %0，这些参数传递到批处理文件中。
- %i 在命令行中的 for 循环中定义变量
- %%i 在 bat 脚本文件中定义变量
- set var=xx 定义变量值
- %var% 引用变量值
- !var! 延迟环境变量扩展

对 %0 %1 %2 ... 变量进行移位：

    Syntax
          SHIFT [/n]

    Key
       /n    Start at the nth argument, where n is between zero and eight. 


示范：

    @echo off

    set var1=110
    set var1=120 & echo %var1%

运行之后的结果为：

    >extVar.bat
    110

使用延迟环境变量扩展：

    @echo off

    setlocal enabledelayedexpansion
    set var1=110
    set var1=120 & echo !var1!

运行之后的结果为：

    >extVar.bat
    120

## ⚡ SET 变量赋值
- https://ss64.com/nt/setx.html
- https://ss64.com/nt/set.html

变量设置指令

Syntax

      SET variable
      SET variable=string
      SET "variable=string"
      SET "variable="

      SET /A "variable=expression"
      SET /P variable=[promptString]
      SET "

Key

    variable    : A new or existing environment variable name e.g. _num
    string      : A text string to assign to the variable.

    expression  : Arithmetic expression
    /A          : see full details of Arithmetic expressions below.

set /a 执行数学计算并赋值到变量
set /p 提示用户输入并赋值到变量

```sh
set /p msg=启动 SQL 服务吗(Y/N)?:
echo off
if %msg% == Y goto start
if %msg% == N goto stop

:start
net start MSSQL$SQLEXPRESS
goto end

:stop
net stop MSSQL$SQLEXPRESS
goto end

:end
echo 运行完了,呵呵
```

实例

    @echo off
    set /p b=输入一个数字：
    4
    echo %b%
    set /a a=2*%b%
    echo %b%+%b%=%a%
    pause>nul

利用 set /p 可以输入无换行的内容，并输出到文件：

    set /p=XXX<nul>XXX.txt

先显示promptstring，再接受用户输入的内容,以回车表示结束，赋值给变量a

    set /p a=promptstring

先显示promptstring，再把"<"管道号右边的1.txt文件中从第一个字符开始直到碰到回车符的内容赋值给变量a （通常表现为第一行）。

    set /p a=promptstring<1.txt

先显示promptstring，再把"<"管道号右边nul中内容赋值给变量a ，不用用户按回车就结束语句。因nul是空设备，故没有内容可赋值，变量a仍属未定义。

    set /p a=promptstring<nul

表达式参考：

    +   Add                set /a "_num=_num+5"
    +=  Add variable       set /a "_num+=5"
    -   Subtract           set /a "_num=_num-5"
    -=  Subtract variable  set /a "_num-=5"
    *   Multiply           set /a "_num=_num*5"
    *=  Multiply variable  set /a "_num*=5"
    /   Divide             set /a "_num=_num/5"
    /=  Divide variable    set /a "_num/=5"
    %%  Modulus            set /a "_num=17%%5"
    %%= Modulus            set /a "_num%%=5"
    !   Logical negation  0 (FALSE) ⇨ 1 (TRUE) and any non-zero value (TRUE) ⇨ 0 (FALSE)
    ~   Bitwise invert
    &   AND                set /a "_num=5&3"    0101 AND 0011 = 0001 (decimal 1)
    &=  AND variable       set /a "_num&=3"
    |   OR                 set /a "_num=5|3"    0101 OR 0011 = 0111 (decimal 7)
    |=  OR variable        set /a "_num|=3"
    ^   XOR                set /a "_num=5^3"    0101 XOR 0011 = 0110 (decimal 6)
    ^=  XOR variable       set /a "_num=^3"
    <<  Left Shift.    (sign bit ⇨ 0) An arithmetic shift.
    >>  Right Shift.   (Fills in the sign bit such that a negative number always remains negative.)
                       Neither ShiftRight nor ShiftLeft will detect overflow.
    <<= Left Shift variable     set /a "_num<<=2"
    >>= Right Shift variable    set /a "_num>>=2"

    ( )  Parenthesis group expressions  set /a "_num=(2+3)*5"
    ,   Commas separate expressions    set /a "_num=2,_result=_num*5"


## ⚡ PATH
- https://ss64.com/nt/path.html

环境变量 PATH 可以提供目录位置，在执行命令时自动在 PATH 提供的目录中搜索，这样就不必指定命令的完整路径。

Syntax

      PATH pathname [;pathname] [;pathname] [;pathname]...
      PATH
      PATH ;

直接执行 PATH 可以打印当前的变量内容，指定任意目录路径 pathname 替换原来的 PATH 变量，如果指定 ; 表示清空变量。

如果要保留旧变量内容，可以按以下方式执行：

    path c:\tools;%path%;
    set path=c:\tools;%path%;

结合 FOR 指令打印 PATH 变量，以下表示用分号分割 path 变量：

    for %G in ("%path:;=" "%") do @echo %G

或者在 BAT 文件中：

    for %%G in ("%path:;=" "%") do @echo %%G



## ⚡ Echo

Example for non-newline:

```sh
# clear out.txt
set /p="" echo > out.txt
# appen hello to out.txt, no newline
set /p="hello" echo >> out.txt

set /p="hello "
set /p="world "
echo again
echo new line
```

Result:

    hello world again
    new line

linux echo 输出是自动换行的那么怎么让其不换行呢？

    echo -n "不换行输出"
    echo -e "字符串\c"
    echo -e 处理特殊字符;

可接的特殊字符有

    \c 最后不加上换行符号；
    \f 换行但光标仍旧停留在原来的位置；
    \n 换行且光标移至行首；
    \r 光标移至行首，但不换行；
    \t 插入tab；
    \v 与\f相同；
    \\ 插入\字符；


## ⚡ IF 条件判断
- https://ss64.com/nt/if.html

IF 条件判断，判断文件是不存在、字符或数值是否相等、决断程序 ERRORLEVEL 返回值：

    File syntax
       IF [NOT] EXIST filename command 

       IF [NOT] EXIST filename (command) ELSE (command)

    String syntax
       IF [/I] [NOT] item1==item2 command 

       IF [/I] item1 compare-op item2 command

       IF [/I] item1 compare-op item2 (command) ELSE (command)

    Error Check Syntax
       IF [NOT] DEFINED variable command

       IF [NOT] ERRORLEVEL number command 

       IF CMDEXTVERSION number command

参数：

       item        A text string or environment variable, for more complex
                   comparisons, a variable can be modified using
                   either Substring or Search syntax.

       command     The command to perform.

       filename    A file to test or a wildcard pattern.

       NOT         perform the command if the condition is false. 

       ==          perform the command if the two strings are equal. 

       /I          Do a case Insensitive string comparison.

       compare-op  can be one of
                    EQU : Equal
                    NEQ : Not equal

                    LSS : Less than <
                    LEQ : Less than or Equal <=

                    GTR : Greater than >
                    GEQ : Greater than or equal >=

                    This 3 digit syntax is necessary because the > and <
                    symbols are recognised as redirection operators

使用 EQU, NEQ, LSS, LEQ, GTR, GEQ 只会解析数值。

使用 == 总是比较字符串。

ERRORLEVEL 是程序运行结束反回值，通常是 C 语言中 main 函数的返回值。有两种方法判断 ERRORLEVEL

- IF ERRORLEVEL ... 方式兼容 Windows 95 语法；

    IF ERRORLEVEL n 意思是 IF Errorlevel >= number。
    IF ERRORLEVEL 0 返回 TRUE 只要 errorlevel 大于等于 0
    IF ERRORLEVEL 1 返回 TRUE 只要 errorlevel 大于等于 1
    IF NOT ERRORLEVEL 1 表示 ERRORLEVEL 小于 1

- IF %ERRORLEVEL% ... 作为变量使用是新的 Windows 2000 语法；

    使用 %ERRORLEVEL% 变量方式逻辑更清晰。

    IF %ERRORLEVEL% NEQ 0 Echo An error was found
    IF %ERRORLEVEL% EQU 0 Echo No error found

    IF %ERRORLEVEL% EQU 0 (Echo No error found) ELSE (Echo An error was found)
    IF %ERRORLEVEL% EQU 0 Echo No error found || Echo An error was found

    IF %ERRORLEVEL% EQU 64 ...
    
    在批处理文件可以使用 EXIT /B 命令反回一个错误值。

测试变量是不为空值 empty：

    IF [%1]==[] ECHO Value Missing
    IF [%1] EQU [] ECHO Value Missing

对可能包含空格的变量使用双引号：

    IF [%_myvar%] EQU [""]
    IF ["C:\Some Path"] EQU [] ECHO False
    IF ""C:\Some Path"" EQU ""  ECHO False

注意变量是否已经包双引号。


测试变量是否为 NULL：

    IF NOT DEFINED _example ECHO Value Missing

测试文件或文件夹是否存在：

    IF EXIST filename.txt (
        Echo deleting filename.txt
        Del filename.txt
     ) ELSE ( 
        Echo The file was not found.
     )

使用管道：

    IF SomeCondition Command1 | Command2
    (IF SomeCondition Command1 ) | Command2

不管 Command1 是什么值，Command2 总会执行。

    IF SomeCondition (Command1 | Command2)

括号也会当作比较的字符看待：

    IF (%_var1%==(demo Echo the variable _var1 contains the text demo

IF 放在管道右则不是很好的做法：

    Echo Y | IF red==blue del *.log

IF 只提供 NOT 支持，要执行逻辑 AND 需要嵌套语法：

    IF SomeCondition (
       IF SomeOtherCondition (
         Command_if_both_are_true
       )
    )

逻辑 OR 则可以通过多次赋值再判断实现：

    Set "_tempvar="
    If SomeCondition Set _tempvar=1
    If SomeOtherCondition Set _tempvar=1
    if %_tempvar% EQU 1 Command_to_run_if_either_is_true

在字符串比较时，包含分隔符 Delimiters 如空格、逗号的内容要使用双引号包括，或者使用 ^ 转义，否则 IF 会当成多个字符串对待：



正确比较数值使用 EQU, NEQ, LSS, LEQ, GTR, GEQ 运行符号：

        IF 2 GEQ 15 echo "bigger"

使用 == 进行字符串比较，那么 "2" 是大于 "19" 的，而 "026" 小于 "10"，如果使用数值比较，结果就是相反的。

使用括号会当成字符进行比较：

    IF (2) GEQ (15) echo "bigger"
    IF "2" GEQ "15" echo "bigger"

数值变量赋值使用 SET /a 命令，否则是字符串赋值：

    set str = 100
    set /a num = 100
    set /a "num = 100"

IF 能正确处理 32 bit 符号整数，(-2,147,483,648 到 2,147,483,647)。

    C:\> if 2147483646 GEQ 2147483647 (Echo Larger) Else (Echo Smaller)
    Smaller   ⇨ correct

    C:\> if 2147483647 GEQ 2147483648 (Echo Larger) Else (Echo Smaller)
    Larger   ⇨ wrong due to overflow

    C:\> if -2147483649 GEQ -2147483648 (Echo Larger) Else (Echo Smaller)
    Larger   ⇨ wrong due to overflow

    C:\> if "2147483647" GEQ "2147483648" (Echo Larger) Else (Echo Smaller)
    Smaller   ⇨ correct

通配符号 Wildcards 不支持，像 %COMPUTERNAME%==SS6* 并不匹配 SS64。

可以截取子字符串进行比较：

    SET _prefix=%COMPUTERNAME:~0,3%
    IF %_prefix%==SS6 GOTO com_matched

如果关闭命令扩展 Command Extensions，条件判断只支持 IF ==, IF EXIST, IF ERRORLEVEL。系统变量 CMDEXTVERSION 也无效。

Examples:

    IF EXIST C:\logs\*.log (Echo Log file exists)

    IF EXIST C:\logs\install.log (Echo Complete) ELSE (Echo failed)

    IF DEFINED _department ECHO Got the _department variable

    IF DEFINED _commission SET /A _salary=%_salary% + %_commission% 

    IF CMDEXTVERSION 1 GOTO start_process

    IF %ERRORLEVEL% EQU 2 goto sub_problem2


## ⚡ GOTO
- https://ss64.com/nt/goto.html

GOTO 跳转执行，在 FOR 中使用会打断流程：

    Syntax
          GOTO label

          GOTO:eof

    Key
       label   A predefined label in the batch program.
               Each label must be defined on a line by itself, beginning with
               a colon and ending with either a space, a colon or a CR/LF.

       :eof    This predefined label will exit the current subroutine or script.

Examples:

A simple goto jump:

    GOTO sub_message
       Echo this wont display
    goto:eof

    :sub_message
       Echo this is a subroutine

Use the %1 parameter to jump:

    IF %1==12 GOTO specialcase 
       Echo the input was NOT 12
    goto:eof 
     
    :specialcase
       Echo the input was  12
    goto:eof

Use a variable as a label:

    CHOICE /C YN /m "choose yes or No"
        goto sub_%ERRORLEVEL% 
        
    :sub_1
        Echo You typed Y for yes
    goto:eof 

    :sub_2
        Echo You typed N for no
    goto:eof



## ⚡ SORT
- https://ss64.com/nt/sort.html

按文件最后访问时间降序

    dir gif |sort LastWriteTime -descending 1>list.txt


Sort will accept a redirected or piped file input and TYPE the file, sorted line by line.

        Syntax
                    SORT [options] 

        Options
             /R  : Reverse sort order (Z to A, 9 to 0)

             /+n : Sort the file ignoring the first one or more characters in each row.
                         The default (/+1) will sort using all characters in each row.
                            /+2 will start comparing at the second character, /+3 the third etc.
                         Lines with fewer than n characters collate before other lines.

            [drive:][pathname]
        
                         The file to be sorted.
                         If not specified, the standard input is sorted.
                         Specifying an input file is faster than
                         redirecting the same file as standard input.
        
             /T[EMPORARY] [drive:][path]
        
                         The path of the directory to hold
                         SORT's working storage, in case the data
                         does not fit in RAM.  The default is %temp%
        
             /O[UTPUT] [drive:][pathname]
        
                         The file where the sorted input is to be stored.
                         If not specified, the data is written to standard output.
                         Specifying an output file is faster than redirecting
                         standard output to a file.
        
             /C[ASE_SENSITIVE]
        
                         Case sensitive sort. (undocumented switch in Win7 and above)
        
             /U[NI_OUTPUT]
        
                         Output in unicode. (undocumented switch in Win7 and above)

2019/09/25  15:56            57,344
Examples

dir | sort        # sort by date
dir | sort /+18   # sort by size
dir | sort /+36   # sort by name

how can I sort a text file by 3rd column in PowerShell? That is part of the file:

    reza             zabihi          12     1
    maryam           joraee          17     2
    leyla            ahmadi          13     2
    farzin           farahbakhsh     16     1
    keyvan           maleki          8      1
    kaveh            ahangar         18     1
    nooshafarin      bakhtiari       13     2

    Get-Content namef | Sort-Object { [double]($_ -split '\s+')[-2] } -Descending


## ⚡ Find
https://ss64.com/nt/find.html

Search for a text string in a file & display all the lines where it is found.

        Syntax
                    FIND [/V] [/C] [/N] [/I] "string" [pathname(s)]

        Key
             "string"    The text string to find (must be in quotes).

             [pathname]  A drive/file(s) to search (wildcards accepted).

                 /V        Display all lines NOT containing the specified string.

                 /C        Count the number of lines containing the string.

                 /N        Display Line numbers.

                 /I        Ignore the case of characters when searching for the string.

        [/off[line]] Do not skip files that have the offline attribute set.

If a [pathname] is not specified, FIND will prompt for text input or will accept text piped from another command.
(use CTRL-Z to end manual text input)

If searching for text that contains double quote characters " , they must be escaped by doubling to ""
This is in addition to enclosing the entire string in quotation marks: "The ""main"" event"

The FIND command will output a string of 10 dashes ---------- followed by the filename being searched, followed by any matching lines of text in the file.

Errorlevel
FIND will return an ErrorLevel as follows:

0 String found in at least one of the files.
1 String not found
2 If any files in the list do not exist or if no files match a wildcard mask. An invalid switch is given.

Limitations
Find does not support wildcards, use FINDSTR instead.

Although FIND can be used to scan large files, it will not detect any string that is positioned more than 1070 characters along a single line (with no carriage return) This makes it of limited use in searching binary or XML file types.

An empty string "" will normally match nothing, with the/v flag reversing the test, to match everything, but this will fail for any lines longer than 4091 characters long.

Examples:

If names.txt contains the following:

    Joe Bloggs, 123 Main St, Dunoon 
    Arnold Jones, 127 Scotland Street, Edinburgh

To search for "Jones" in names.txt

    C:\> FIND "Jones" names.txt

    ---------- NAMES.TXT
    Arnold Jones, 127 Scotland Street, Edinburgh

If you want to pipe the output from a command into FIND use this syntax

    C:\> TYPE names.txt | FIND "Jones" 

You can also redirect like this

    C:\> FIND /i "Jones" < names.txt >logfile.txt

To search a folder for files that contain a given search string:

    C:\> FOR %G IN (*.txt) do (find /n /i "SearchWord" "%G")

Count the number of lines in a file (like wc -l on unix).
The empty string "" is treated as never matching. The /v flag reverses the test, so now it matches everything and then /c returns the count:

    C:\> TYPE myfile.txt | FIND "" /v /c

“For my art, there is a common theme most of the time: it is using the things we can see to search for the world we cannot see” ~ Cai Guo-Qiang

## ⚡ String
- https://ss64.com/nt/syntax-substring.html
- https://ss64.com/nt/syntax-replace.html

截取变量子字符串内容。

Syntax

      %variable:~num_chars_to_skip%
      %variable:~num_chars_to_skip,num_chars_to_keep%

This can include negative numbers:

      %variable:~num_chars_to_skip, -num_chars_to_keep%
      %variable:~-num_chars_to_skip,num_chars_to_keep%
      %variable:~-num_chars_to_skip,-num_chars_to_keep%

截取字符串可以说是字符串处理功能中最常用的一个子功能了，能够实现截取字符串中的特定位置的一个或多个字符。

示范时间字符串处理，代码如下:

    @echo off
    echo 当前时间是：%time% 即 %time:~0,2%点%time:~3,2%分%time:~6,2%秒%time:~9,2%厘秒
    pause


替换字符串，即将某一字符串中的特定字符或字符串替换为给定的字符串。

Syntax

    %variable:StrToFind=NewStr%

    %~[param_ext]$variable:Param

Key

    StrToFind    : The characters we are looking for
    NewStr       : The chars to replace with (if any)
    variable     : The environment variable
    param_ext    : Any filename Parameter Extension
    Param        : A command line parameter (e.g. 1)

示范：

    @echo off
    set aa=伟大的中国！我为你自豪！
    echo 替换前 --> %aa%
    echo 替换后 --> %aa:中国=中华人民共和国%

合并字符串就是将两个字符串放在一起就可以了。

    @echo off
    set aa=伟大的中国！
    set bb=我为你自豪！
    echo %aa%%bb%
    echo aa=%aa%
    echo bb=%bb%
    set "aa=%aa%%bb%"
    echo aa=%aa%
    pause

结合 FOR 指令打印 PATH 变量，以下表示分号分割 path 变量：

    for %G in (%path:;=" "%) do @echo %G

或者在 BAT 文件中：

    for %%G in (%path:;=" "%) do @echo %%G


扩充字符串 Expand 这个是非常混乱的用法，比如，有一个 c:\test\a.bat 批处理：

    rem c:\test\a.bat
    cd /d %~dp0

这里 `%~dp0` 就是混乱的，它总体表示批处理的目录。 %0 是一个传入批处理的参数，代表批处理本身，其它参数还有 %1、%2、%3 ... %9 等等。

而 `~dp` 表示变量扩充的功能，d 表示扩充到分区号 C:，p 表示扩充到路径 \test，所以 `%~dp0%` 就是扩充到路径。`%~nx0%` 就是批处理文件名。

还可以使用 SHIFT 指令对传入 BAT 的参数变量依次前移，移位一次后，%0 就等于之前的 %1，而 %1 等于之前的 %2，如此。

    ~I - 扩充 %I 变量，删除任何引号(")
    %~fI - 扩充 %I 变量到一个完全合格的路径名
    %~dI - 仅将 %I 扩充到一个驱动器号
    %~pI - 仅将 %I 扩充到一个路径
    %~nI - 仅将 %I 扩充到一个文件名
    %~xI - 仅将 %I 扩充到一个文件扩展名
    %~sI - 扩充的路径只含有短名
    %~aI - 将 %I 扩充到文件的文件属性
    %~tI - 将 %I 扩充到文件的日期/时间
    %~zI - 将 %I 扩充到文件的大小

其中的 I 代表变量，不是所有的变量都能够进行扩充的，需要满足变量字符串代表一个文件路径，并且变量要用 a-z A-Z 0-9 这 62 个字符中的任意一个表示。

一个复杂点的例子 `%~$PATH:I` 查找列在路径环境变量的目录，并将 %I 扩充到找到的第一个完全合格的名称。如果环境变量名未被定义，或者没有找到文件，此组合键会扩充到 空字符串。

可以组合修饰符来得到多重结果:

    %~dpI - 仅将 %I 扩充到一个驱动器号和路径
    %~nxI - 仅将 %I 扩充到一个文件名和扩展名
    %~fsI - 仅将 %I 扩充到一个带有短名的完整路径名
    %~dp$PATH:i - 查找列在路径环境变量的目录，并将 %I 扩充到找到的第一个驱动器号和路径。

    %~ftzaI - 将 %I 扩充到类似以下格式：

    --a-------- 2020-07-23 13:58 12 C:\test.bat


代码如下:

    @echo off
    echo 当前批处理文件：
    echo 完全路径：%0
    echo 去掉引号：%~0
    echo 所在分区：%~d0
    echo 所处路径：%~p0
    echo 文件名：%~n0
    echo 扩展名：%~x0
    echo 文件属性：%~a0
    echo 修改时间：%~t0
    echo 文件大小：%~z0
    pause

其中的 %0 是批处理里面的参数，代表当前运行的批处理的完全路径。类似的还有 %1-%9，分别代表传递来的第 1-9 个参数。

代码如下:

    @echo off
    set aa=C:\Windows\PPP\a.btx
    call :deal aaa %aa% "c c" ddd eee
    pause>nul
    exit
    :deal
    echo %%0 = %0
    echo %%1 = %1
    echo %%2 = %2
    echo %%3 = %3
    echo %%4 = %4
    echo %%5 = %5

其中，变量 aa 在之前是不可以扩充的，通过 call 命令并将 aa 作为参数传递给子函数 :deal，将 aa 变量转换成了变量 %1，即符合 %x 格式，从而可以进行字符串扩充。

至于 %x 中 x 取 a-z A-Z 的形式，可以复习一下 for 语句，for 语句里面的变量就是用 %x 来表示的，因而可以直接进行扩充。


## ⚡ FindStr
https://ss64.com/nt/findstr.html

Search for a text string in a file (or multiple files) unlike the simple FIND command FINDSTR supports more complex regular expressions.

    Syntax
                FINDSTR string(s) [pathname(s)]
                     [/R] [/C:"string"] [/G:StringsFile] [/F:file] [/D:DirList]
                            [/A:color] [/OFF[LINE]] [options]

    Key
         string(s)    Text to search for, each word a separate search.
         pathname(s)  The file(s) to search. 
         /C:string    Use string as a literal search string (may include spaces).
         /R           Evaluate as a regular expression.
         /R /C:string  Use string as a regular expression.
         /G:StringsFile  Get search string from a file (/ stands for console).
         /F:file      Get a list of filename(s) to search from a file (/ stands for console).
         /d:dirlist   Search a comma-delimited list of directories.
         /A:color     Display filenames in colour (2 hex digits)

    options can be any combination of the following switches:

         /I   Case-insensitive search.
         /S   Search subfolders.
         /P   Skip any file that contains non-printable characters
         /OFF[LINE] Do not skip files with the OffLine attribute set.
         /L   Use search string(s) literally.
         /B   Match pattern if at the Beginning of a line.
         /E   Match pattern if at the END of a line.
         /X   Print lines that match exactly.
         /V   Print only lines that do NOT contain a match.
         /N   Print the line number before each line that matches.
         /M   Print only the filename if a file contains a match.
         /O   Print character offset before each matching line.


FINDSTR - Search for a text string in a file.

Equivalent bash command (Linux): grep - Search file(s) for lines that match a given pattern.

DEMO

- FINDSTR "hello there" x.y 
    在文件 x.y 中寻找 "hello" 或 "there"。
    
- FINDSTR /C:"hello there" x.y
    在文件 x.y 寻找 "hello there"，/c 此参数多用于查找含有空格的字符串。

- findstr /r "icq msn" 123.txt
    在 123.txt 中查找包含有 “icq”或“msn”的行，查找的多个字符串间用空格隔格开。

- findstr /s /i "MSN" *.txt
    在当前目录和所有子目录中的 txt 文件中搜索字符串 "MSN"，/i 不区分字母大小写。

-findstr "[^echo]" 123.txt
    过滤含有 e c h o 四个字母的行。

- findstr "[0-9]" 123.txt
    在文件123.txt中查找数字0－9的任意之一的行。

- findstr "[a-zA-Z]" 123.txt
    在文件123.txt中查找包括任意字母行。

- findstr "[abcezy]" 2.txt
    在文件123.txt中查找包括a b c e z y其中任意一字母的行。

- findstr "[a-fl-z]" 2.txt
    在文件123.txt中查找小写字符a到f 或l到z的任意一字母的行，但不包含g h I j k这几个字母。


一般表达式的快速参考:

    . 通配符: 任何字符
    * 重复: 以前字符或类别出现零或零以上次数
    ^ 行位置: 行的开始
    $ 行位置: 行的终点
    [class] 字符类别: 任何在字符集中的字符
    [^class] 补字符类别: 任何不在字符集中的字符
    [x-y] 范围: 在指定范围内的任何字符
    \x Escape: 元字符 x 的文字用法，把表达式中的特殊字符(元字符)转化为普通字符。
    \<xyz 字位置: 字的开始
    xyz\> 字位置: 字的结束




## ⚡ Replace
replace /?
替换文件。

REPLACE [drive1:][path1]filename [drive2:][path2] [/A] [/P] [/R] [/W]
REPLACE [drive1:][path1]filename [drive2:][path2] [/P] [/R] [/S] [/W] [/U]

    [drive1:][path1]filename 指定源文件。
    [drive2:][path2]         指定要替换文件的目录。
    /A                       把新文件加入目标目录。不能和/S 或 /U 命令行开关搭配使用。
    /P                       替换文件或加入源文件之前会先提示你进行确认。
    /R                       替换只读文件以及未受保护的文件。
    /S                       替换目标目录中所有子目录的文件。不能与 /A 命令开关搭配使用。
    /W                       等你插入磁盘以后再运行。
    /U                       只会替换或更新比源文件日期早的文件。不能与 /A 命令行开关搭配使用。




## ⚡ Register


REG Operation [Parameter List]

    Operation  [ QUERY   | ADD    | DELETE  | COPY    |
                             SAVE    | LOAD   | UNLOAD  | RESTORE |
                             COMPARE | EXPORT | IMPORT  | FLAGS ]

返回代码: (除了 REG COMPARE)

    0 - 成功
    1 - 失败

要得到有关某个操作的帮助，请键入:

    REG Operation /?

例如:

    REG QUERY /?
    REG ADD /?
    REG DELETE /?
    REG COPY /?
    REG SAVE /?
    REG RESTORE /?
    REG LOAD /?
    REG UNLOAD /?
    REG COMPARE /?
    REG EXPORT /?
    REG IMPORT /?
    REG FLAGS /?

常用的子健：

```sh
    HKEY_CLASSES_ROOT\*
    # 系统所有文件，右键系统任一文件都会添加右键菜单
    HKEY_CLASSES_ROOT\AllFilesystemObjects
    # 系统所有文件和文件夹，右键任一文件或者文件夹都会添加右键菜单
    HKEY_CLASSES_ROOT\Folder
    # 系统所有文件夹，右键系统任一文件夹都会添加右键菜单
    HKEY_CLASSES_ROOT\Directory
    # 系统所有目录，右键系统任一文件夹都会添加右键菜单
    HKEY_CLASSES_ROOT\Directory\Background
    # 系统文件夹空白处右键，在文件夹内空白处右键都会添加右键菜单
    HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont
    # Windows Console 程序字体设定。
```

控制台程序每代码页可以设置默认字体，比如 936 对应简体中文，950 代表繁体中文等。0 和 00 两项则比较特殊，这两个都是代码页 437 对应的字体。65001 对应 UTF-8 代码页。

    "0"="Lucida Console"
    "00"="Consolas"
    "932"="*ＭＳ ゴシック"
    "936"="*新宋体"
    "65001"="FiraCode Nerd Font Mono"


## ⚡ REG QUERY

REG QUERY KeyName [/v [ValueName] | /ve] [/s]
                    [/f Data [/k] [/d] [/c] [/e]] [/t Type] [/z] [/se Separator]
                    [/reg:32 | /reg:64]

    KeyName  [\\Machine\]FullKey
                     Machine - 远程机器名称，省略当前机器的默认值。在远程机器上
                                         只有 HKLM 和 HKU 可用。
                     FullKey - 以 ROOTKEY\SubKey 名称形式
                                ROOTKEY - [ HKLM | HKCU | HKCR | HKU | HKCC ]
                                SubKey  - 在选择的 ROOTKEY 下的注册表项的全名

    /v       具体的注册表项值的查询。
                     如果省略，会查询该项的所有值。

                     只有与 /f 开关一起指定的情况下，此开关的参数才是可选的。它指定
                     只在值名称中搜索。

    /ve      查询默认值或空值名称(默认)。

    /s       循环查询所有子项和值(如 dir /s)。

    /se      为 REG_MULTI_SZ 在数据字符串中指定分隔符(长度只为 1 个字符)。
                     默认分隔符为 "\0"。

    /f       指定搜索的数据或模式。
                     如果字符串包含空格，请使用双引号。默认为 "*"。

    /k       指定只在项名称中搜索。

    /d       指定只在数据中搜索。

    /c       指定搜索时区分大小写。
                     默认搜索为不区分大小写。

    /e       指定只返回完全匹配。
                     默认是返回所有匹配。

    /t       指定注册表值数据类型。
                     有效的类型是:
                         REG_SZ, REG_MULTI_SZ, REG_EXPAND_SZ,
                         REG_DWORD, REG_QWORD, REG_BINARY, REG_NONE
                     默认为所有类型。

    /z       详细: 显示值名称类型的数字等值。

 /reg:32  指定应该使用 32 位注册表视图访问的注册表项。

 /reg:64  指定应该使用 64 位注册表视图访问的注册表项。

示例:

    REG QUERY HKLM\Software\Microsoft\ResKit /v Version
        显示注册表值 Version 的值

    REG QUERY \\ABC\HKLM\Software\Microsoft\ResKit\Nt\Setup /s
        显示远程机器 ABC 上的、在注册表项设置下的所有子项和值

    REG QUERY HKLM\Software\Microsoft\ResKit\Nt\Setup /se #
        用 "#" 作为分隔符，显示类型为 REG_MULTI_SZ 的所有值名称的所有
        子项和值。

    REG QUERY HKLM /f SYSTEM /t REG_SZ /c /e
        以区分大小写的形式显示项、值和数据和数据类型 REG_SZ
        的、在 HKLM 更目录下的、"SYSTEM" 出现的精确次数

    REG QUERY HKCU /f 0F /d /t REG_BINARY
        显示在 HKCU 根目录下、数据类型为 REG_BINARY 的数据的项、值和
        数据的 "0F" 出现的次数。

    REG QUERY HKLM\SOFTWARE /ve
        显示在 HKLM\SOFTWARE 下的项、值和数据(默认)


## ⚡ REG ADD /?

REG ADD KeyName [/v ValueName | /ve] [/t Type] [/s Separator] [/d Data] [/f]
                [/reg:32 | /reg:64]

    KeyName  [\\Machine\]FullKey
                     Machine  远程机器名 - 忽略默认到当前机器。远程机器上
                                        只有 HKLM 和 HKU 可用。
                     FullKey  ROOTKEY\SubKey
                     ROOTKEY  [ HKLM | HKCU | HKCR | HKU | HKCC ]
                     SubKey   所选 ROOTKEY 下注册表项的完整名称。

    /v       所选项之下要添加的值名称。

    /ve      为注册表项添加空白值名称(默认)。

    /t       RegKey 数据类型
                     [ REG_SZ    | REG_MULTI_SZ | REG_EXPAND_SZ |
                         REG_DWORD | REG_QWORD    | REG_BINARY    | REG_NONE ]
                     如果忽略，则采用 REG_SZ。

    /s       指定一个在 REG_MULTI_SZ 数据字符串中用作分隔符的字符
                     如果忽略，则将 "\0" 用作分隔符。

    /d       要分配给添加的注册表 ValueName 的数据。

    /f       不用提示就强行覆盖现有注册表项。

 /reg:32  指定应该使用 32 位注册表视图访问的注册表项。

 /reg:64  指定应该使用 64 位注册表视图访问的注册表项。

例如:

    REG ADD \\ABC\HKLM\Software\MyCo
        添加远程机器 ABC 上的一个注册表项 HKLM\Software\MyCo

    REG ADD HKLM\Software\MyCo /v Data /t REG_BINARY /d fe340ead
        添加一个值(名称: Data，类型: REG_BINARY，数据: fe340ead)

    REG ADD HKLM\Software\MyCo /v MRU /t REG_MULTI_SZ /d fax\0mail
        添加一个值(名称: MRU，类型: REG_MULTI_SZ，数据: fax\0mail\0\0)

    REG ADD HKLM\Software\MyCo /v Path /t REG_EXPAND_SZ /d ^%systemroot^%
        添加一个值(名称: Path，类型: REG_EXPAND_SZ，数据: %systemroot%)
        注意: 在扩充字符串中使用插入符号 ( ^ )

## ⚡ 3D 加速设置

兼容性问题：需要右键打开游戏快捷图标选择属性，选择兼容模式。在前面打勾使用兼容模式运行，选择 Windows XP SP3。然后继续选中简化的颜色模式，选择使用16位色，同时选中以管理员身份运行程序。 

对于高分屏，还需要更改高 DPI 设置，替代高 DPI 缩放行为，缩放执行：应用程序。

快捷方式使用 -win 参数可进行窗口游戏。

找到 ra2.ini 配置文件，找到 video 项，可以指定分辨率，如 1440x900。

        [Video]
        VideoBackBuffer=no
        AllowHiResModes=yes
        AllowVRAMSidebar=no
        ScreenWidth=1024
        ScreenHeight=768
        StretchMovies=yes

红色警戒2 不支持 3D 加速，禁用 Windows 10 默认的 3D 加速：

        REG ADD HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DirectDraw /v EmulationOnly /t REG_DWORD /d 1
        REG QUERY HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DirectDraw /v EmulationOnly

## ⚡ LastKey

查询注册表最后位置，再打开regedit会自动定位到 LastKey 指定的位置：

        REG QUERY HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey

        HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit
                LastKey    REG_SZ    计算机\HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys

        REG ADD HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey /t REG_SZ /d HKEY_CURRENT_USER\Software\SimonTatham\PuTTY\SshHostKeys

        REG ADD HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey /t REG_SZ /d HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\DirectDraw

        REG ADD HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey /t REG_SZ /d HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}

增加 Powershell 右键菜单项：

        REG ADD HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Applets\Regedit /v LastKey /t REG_SZ /d 计算机\HKEY_CLASSES_ROOT\Directory\Background\shell\Powershell\command

设置 command 默认项：

        powershell.exe -noexit -command Set-Location -literalPath '%V'

设置 Powershell 默认项为 *@shell32.dll,-8508*，它对应的字符串就是 “在此处打开 Powershell 窗口”，可以再设置一个 Icon 字符串项，指定一个图标，或含有图标的程序。

## ⚡ Context Shell & COM

安装 Sublime Text 后可以再文件的上下文菜单中添加 Open with Sublime Text 菜单，可以查看注册表中菜单设置，"%1" 是文件路径占位符：

        REG QUERY "HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text\command" /ve

        HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text\command
                (默认)    REG_SZ    C:\Program Files\Sublime Text 3\sublime_text.exe "%1"

也可以将以下脚本保存到 bt.js 来测试传入的参数:

        for (var i = WScript.Arguments.length - 1; i >= 0; i--) {
                WScript.Echo("#"+i + " " + WScript.Arguments(i));
        }

菜单命令使用以下设置：

        C:\Windows\System32\wscript.exe C:\bt.js "%0" "%1" "%2"

在文件上下文菜单中执行就可以看到参数内容提示。

除了 shell 设置文件上下文菜单，还可以在 shellex 中的 ContextMenuHandlers 指定一个编程对象的全局标识 CLSID，如以下就是 CuteFTP 设置的菜单：

        REG QUERY "HKEY_CL#CANCELASSES_ROOT\*\shellex\ContextMenuHandlers\CuteShellExt" /ve

        HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers\CuteShellExt
                (默认)    REG_SZ    {A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}

组件对象模型 COM - Component Object Model 是 Windows 平台下的最基础的编程模型，是和动态链接库 DLL、.NET 等具有同等性重要的基础软件架构。Win32 原始是通过 DLL 导出表的方式暴露 Windows 系统一整套非OOP的函数，这种方式的最大缺点，就是零散混乱。

而 COM 的出现就以面向对象方式导出编程接口，是一套独立于所有语言的数据交互格式规范。COM 是为了解决 DLL 的存在问题出现的，如 DLL 导出的函数的线程安全问题，也就是两个线程可以同时访问吗？可以再进入的吗？等等这些问题，如果是简单的导出表，编程人员上协商好j就行，但是对于大工程，在模块需要大量交互的情况下，编程人员还要做很多附加的工作，微软索性就重新修订了一套模块交互标准，这就是组件对象模型 COM 的初衷。COM 是一种技术标准，商业推广则称为 ActiveX。

根据 CLSID 查询对象信息，基本信息包含 InprocServer32，Programmable，TypeLib，Version，其中类型信息库 TypeLib 也是 COM 组件：

        REG QUERY "HKEY_CLASSES_ROOT\.iso" /s
        REG QUERY "HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}" /s
        REG QUERY "HKEY_CLASSES_ROOT\TypeLib\{D1CC9868-E464-4DCF-B7E7-B31254F894EA}" /s

        HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}
                (默认)    REG_SZ    CuteShellExt Class

        HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}\InprocServer32
                (默认)    REG_SZ    C:\Program Files (x86)\Globalscape\CuteFTP\CuteShell64.dll
                ThreadingModel    REG_SZ    Apartment

        HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}\Programmable

        HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}\TypeLib
                (默认)    REG_SZ    {D1CC9868-E464-4DCF-B7E7-B31254F894EA}

        HKEY_CLASSES_ROOT\CLSID\{A09315EC-39D3-4ED3-B6A1-262DDC54A3C5}\Version
                (默认)    REG_SZ    1.0

InprocServer32 默认值是该 DLL 的路径信息，ThreadingModel 键值是标记该 DLL 的线程模型。它代表容纳此COM 类的载体应当是一个动态链接库，路径指明了组件所处的物理位置，这个信息对 COM 库查找和定位组件起到了决定性的作用。

这些 COM 组件信息可以通过 RegSvr32 管理，这个命令用来注册、清除：

        RegSvr32 /i "C:\Program Files (x86)\Globalscape\CuteFTP\CuteShell64.dll"
        RegSvr32 /u "C:\Program Files (x86)\Globalscape\CuteFTP\CuteShell64.dll"


## ⚡ .iso 虚拟光盘

Window 10 内置虚拟光驱 Explorer.exe c:\cc.iso

        REG QUERY "HKEY_CLASSES_ROOT\.iso" /s

        HKEY_CLASSES_ROOT\.iso
                (默认)    REG_SZ    Disc Image File

        HKEY_CLASSES_ROOT\.iso\OpenWithProgids
                Windows.IsoFile    REG_SZ


        REG QUERY "HKEY_CLASSES_ROOT\Windows.IsoFile" /s

        HKEY_CLASSES_ROOT\Windows.IsoFile
                (默认)    REG_SZ    Disc Image File
                FriendlyTypeName    REG_EXPAND_SZ    @%SystemRoot%\System32\shell32.dll,-30602

        HKEY_CLASSES_ROOT\Windows.IsoFile\DefaultIcon
                (默认)    REG_EXPAND_SZ    %SystemRoot%\System32\imageres.dll,-5205

        HKEY_CLASSES_ROOT\Windows.IsoFile\shell
                (默认)    REG_SZ    mount

        HKEY_CLASSES_ROOT\Windows.IsoFile\shell\burn
                MUIVerb    REG_EXPAND_SZ    @%SystemRoot%\System32\isoburn.exe,-351

        HKEY_CLASSES_ROOT\Windows.IsoFile\shell\burn\command
                (默认)    REG_EXPAND_SZ    %SystemRoot%\System32\isoburn.exe "%1"

        HKEY_CLASSES_ROOT\Windows.IsoFile\shell\mount
                CommandStateSync    REG_SZ
                ExplorerCommandHandler    REG_SZ    {9ab3b1c9-3225-4bb4-93b6-bfb3c0d93743}
                MultiSelectModel    REG_SZ    Document

        HKEY_CLASSES_ROOT\Windows.IsoFile\shell\mount\command
                (默认)    REG_EXPAND_SZ    %SystemRoot%\Explorer.exe
                DelegateExecute    REG_SZ    {9ab3b1c9-3225-4bb4-93b6-bfb3c0d93743}

        HKEY_CLASSES_ROOT\Windows.IsoFile\tabsets
                selection    REG_DWORD    0x704


PowerShell 也提供 [Mount-DiskImage](https://docs.microsoft.com/en-us/powershell/module/storage/mount-diskimage?view=win10-ps) 装载 ISO 等镜像

        PS C:\>Mount-DiskImage -ImagePath "E:\ISO-Files\Pictures.iso"


## ⚡ VirtualBox vmdk 映射到U盘

https://www.virtualbox.org/manual/ch09.html#rawdisk

手册第9章第9节第1小节，使用下列命令创建一个虚拟硬盘镜像，然后创建虚拟机使用该镜像即可。

VirtualBox虚拟机U盘启动，应该怎么设置？

直接看操作方法吧：

1、VirtualBox虚拟机已建议虚拟机

2、U盘已经制作成为启动U盘

3、点开始－－运行－－输入CMD，以管理员运行，在CMD窗口中输入cd %programfiles%\oracle\virtualbox，按回车，会跳转到VirtualBox的安装目录

4、在CMD窗口中，执行以下的命令。

VBoxManage internalcommands createrawvmdk -filename udisk.vmdk -rawdisk \\.\PhysicalDrive1

其中"#"可以是1或2或更大的数字，0 对应的是当前操作系统所在得磁盘，应该怎么确认这个数字呢？

方法是右键点击计算机，选择管理，定位到硬盘管理，然后查看U盘的物理编号

5、命令成功执行后，会在D盘生成USB.vmdk文件。然后选择设置USB.vmdk为第一控制器主通道启动。要从U盘启动，就在开机时按F12选择2启动了。


VBoxManage internalcommands createrawvmdk -filename /path/to/file.vmdk -rawdisk /dev/sda


该命令将会创建/path/to/file.vmdk（必须是绝对路径）镜像，并且所有数据将会从/dev/sda上读写。



在windows host机上使用如\\.\PhysicalDrive0；在Mac OS X host机上使用如/dev/disk1作为rawdisk的参数。



并且根据手册说明，在某些平台上，譬如vista及以后版本的windows上，在某些情况下读写物理磁盘可能会被禁止。第一次创建虚拟镜像的时候得到以下错误，使用管理员权限后再次创建成功。在创建虚拟机并使用该镜像作为硬盘时也得到VERR_ACCESS_DENIED的错误，使用管理员权限后错误解决。

Windows 系统下运行下述命令查看物理硬盘信息。

    wmic diskdrive list
    wmic diskdrive list brief 

注意，根据手册中的说明，千万不要尝试在虚拟机中从当前操作系统的启动分区启动当前正在运行的操作系统。并且，如果你的host的操作系统同样也是从该物理硬盘中启动的话，特别注意不要从guest读写该硬盘的启动分区。并且在手册9.9.1.2中还详细说明了如何使用一块物理硬盘中的模块分区作为磁盘镜像，可作参考。






## ⚡ robocopy  /MIR 镜像完整目录树 解决目录嵌套过深不能删除问题

    下载 robocopy，然后解压 robocopy.exe， win8+ 内置 robocopy 命令
    假设问题路径 D:\MIS\abc\abc\abc.....
    将以下三行内容在问题目录下保存为bat文件，然后执行它

    md robo
    Robocopy /MIR robo .
    rm .

    * 注意，此命令会删除同级目录下的内容，包括脚本本身，小心操作！
    ------------------------------------------------------------------------------

                                    总数        复制        跳过       不匹配        失败        其他
             目录:         1         0         1         0         0       314
             文件:         0         0         0         0         0         0
             字节:         0         0         0         0         0         0
             时间:   0:00:06   0:00:00                       0:00:00   0:00:06
        结束时间: 2018年8月19日星期日 下午 1:26:06


Windows Powershell 管理员权限操作，首先给待删除文件夹赋予所有权给本机管理员 Administrator
拿到文件/文件夹的所有权之后，然后修改 administrator 对文件/文件夹的访问权限，确保我们有删除它的权限：

    Takeown /F "C:\CMakeFiles" /r /d y
    cacls "C:\CMakeFiles" /t /e /g Administrators:F
    rd "C:\CMakeFiles"

编写代码 del.bat 如下： 

    DEL /F /A /Q \\?\%1
    RD /S /Q \\?\%1

再用它 del path 删除目录。


## ⚡ File UnLocked

查看文件(或文件夹)被哪个进程使用【文件已在另一程序中打开】
windows系统中当我们在删除某个文件或文件夹时有时会提示该文件有程序在使用不能被删除，这时相当惆怅。那么可以用这个方法来找到是哪个进程在占用该文件：  

1：打开任务管理器选择“性能”  
2：单击下部的“资源监视器”  
3：选择“CPU”，在下部可以看到“关联的句柄”搜索框  
4：在该搜索框中输入要删除的文件名回车  

在下面就会列出来占用该文件的进程名，右键该进程单击“结束进程”，OK，可以删除了

查看文件被哪个进程占用
 
openfiles
用于查看各个进程所打开的文件。windows自带工具。
必须先用命令启用系统全局标志“维护对象列表”；

        openfiles /local on 
        openfiles /query /fo list /v
        openfiles /disconnect /id *

再重启后执行openfiles查看各进程文件。

Process Mointor

微软提供的工具，需要下载 http://technet.microsoft.com/en-us/sysinternals/bb896645.aspx

process explorer          process monitor


## ⚡ WiFi Password

netsh wlan show profile
netsh wlan export profile name="cloud"
start .


## ⚡ Services sc.exe
- 用户服务 ServiceName_LUID https://docs.microsoft.com/zh-cn/windows/application-management/per-user-services-in-windows

SC 是用来与服务控制管理器和服务进行通信的命令行程序。

用法:

    sc <server> [command] [service name] <option1> <option2>...

语法示例

    sc query                - 枚举活动服务和驱动程序的状态
    sc query eventlog       - 显示 eventlog 服务的状态
    sc queryex eventlog     - 显示 eventlog 服务的扩展状态
    sc query type= driver   - 仅枚举活动驱动程序
    sc query type= service  - 仅枚举 Win32 服务
    sc query state= all     - 枚举所有服务和驱动程序
    sc query bufsize= 50    - 枚举缓冲区为 50 字节
    sc query ri= 14         - 枚举时恢复索引 = 14
    sc queryex group= ""    - 枚举不在组内的活动服务
    sc query type= interact - 枚举所有不活动服务
    sc query type= driver group= NDIS     - 枚举所有 NDIS 驱动程序

示例:

    sc start MyService
    sc create Minis binPath="c:\php7.2.6\php.exe -S 0.0.0.0:80 -t c:\coding\minis" 
    sc delete Minis

    <server> 选项的格式为 "\\ServerName"

    sc create Miniot binPath="c:\iceWorks\iris\miniot.exe" 

查看任务与服务的关系：

    TASKLIST /SVC /FO table | findstr /B [^chrome]

在注册表和服务数据库中创建服务项

    sc <server> create [service name] [binPath= ] <option1> <option2>...

选项:
注意: 选项名称包括等号。等号和值之间需要一个空格。

     type= <own|share|interact|kernel|filesys|rec|userown|usershare>
                 (默认 = own)
     start= <boot|system|auto|demand|disabled|delayed-auto>
                 (默认 = demand)
     error= <normal|severe|critical|ignore>
                 (默认 = normal)
     binPath= <.exe 文件的 BinaryPathName>
     group= <LoadOrderGroup>
     tag= <yes|no>
     depend= <依存关系(以 / (斜杠)分隔)>
     obj= <AccountName|ObjectName>
                 (默认= LocalSystem)
     DisplayName= <显示名称>
     password= <密码>


可通过键入以下命令获取有关命令的更多帮助: "sc [command]"

    query-----------查询服务的状态，
                                    或枚举服务类型的状态。
    queryex---------查询服务的扩展状态，
                                    或枚举服务类型的状态。
    start-----------启动服务。
    pause-----------向服务发送 PAUSE 控制请求。
    interrogate-----向服务发送 INTERROGATE 控制请求。
    continue--------向服务发送 CONTINUE 控制请求。
    stop------------向服务发送 STOP 请求。
    config----------更改服务的配置(永久)。
    description-----更改服务的描述。
    failure---------更改失败时服务执行的操作。
    failureflag-----更改服务的失败操作标志。
    sidtype---------更改服务的服务 SID 类型。
    privs-----------更改服务的所需特权。
    managedaccount--更改服务以将服务帐户密码
                                    标记为由 LSA 管理。
    qc--------------查询服务的配置信息。
    qdescription----查询服务的描述。
    qfailure--------查询失败时服务执行的操作。
    qfailureflag----查询服务的失败操作标志。
    qsidtype--------查询服务的服务 SID 类型。
    qprivs----------查询服务的所需特权。
    qtriggerinfo----查询服务的触发器参数。
    qpreferrednode--查询服务的首选 NUMA 节点。
    qmanagedaccount-查询服务是否将帐户
                                    与 LSA 管理的密码结合使用。
    qprotection-----查询服务的进程保护级别。
    quserservice----查询用户服务模板的本地实例。
    delete ----------(从注册表中)删除服务。
    create----------创建服务(并将其添加到注册表中)。
    control---------向服务发送控制。
    sdshow----------显示服务的安全描述符。
    sdset-----------设置服务的安全描述符。
    showsid---------显示与任意名称对应的服务 SID 字符串。
    triggerinfo-----配置服务的触发器参数。
    preferrednode---设置服务的首选 NUMA 节点。
    GetDisplayName--获取服务的 DisplayName。
    GetKeyName------获取服务的 ServiceKeyName。
    EnumDepend------枚举服务依赖关系。

以下命令不需要服务名称:

        sc <server> <command> <option>

    boot------------(ok | bad)指示是否应将上一次启动另存为
                                最近一次已知的正确启动配置
    Lock------------锁定服务数据库
    QueryLock-------查询 SCManager 数据库的 LockStatus


QUERY 和 QUERYEX 选项:

如果查询命令带服务名称，将返回 该服务的状态。其他选项不适合这种 情况。如果查询命令不带参数或 带下列选项之一，将枚举此服务。

    type=    要枚举的服务的类型(driver, service, userservice, all)
                     (默认 = service)
    state=   要枚举的服务的状态 (inactive, all)
                     (默认 = active)
    bufsize= 枚举缓冲区的大小(以字节计)
                     (默认 = 4096)
    ri=      开始枚举的恢复索引号
                     (默认 = 0)
    group=   要枚举的服务组
                     (默认 = all groups)



## ⚡ netsh reset Windows 网络重置

    rem 刷新 DNS 解析缓存。
    ipconfig /flushdns

    rem 重置 Winsock 目录
    netsh winsock reset catalog

    netsh int ip reset

## ⚡ COLOR
Sets the default console foreground and background colours.

Syntax

            COLOR [background][foreground]

Colour attributes are specified by 2 of the following hex digits. There should be no space between the two color numbers.

Each digit can be any of the following values:

        0 = Black    8 = Gray
        1 = Blue     9 = Light Blue
        2 = Green    A = Light Green
        3 = Aqua     B = Light Aqua
        4 = Red      C = Light Red
        5 = Purple   D = Light Purple
        6 = Yellow   E = Light Yellow
        7 = White    F = Bright White

If no argument is given, COLOR restores the colour to what it was when CMD.EXE started.

Colour values are assigned in the following order:

The DefaultColor registry value.
The CMD /T command line switch
The current colour settings when cmd was launched

The COLOR command sets ERRORLEVEL to 1 if an attempt is made to execute the COLOR command with a foreground and background colour that are the same.

In Windows 10 clean-install versions greater than build 16257 the default colour scheme has been changed to modernize the look of the Windows Console suitable for modern high-contrast LCD displays.

Examples (from Windows 7):

        CMD colors 1

        CMD colors 2

The default terminal color is COLOR 07, white on black

The COLOR command will change the color of all the text in the window.

Errorlevels
If the color was successfully changed %ERRORLEVEL% = 0
Background and foreground colors are the same (will fail) = 1
e.g. COLOR 00

Windows 10 color schemes
In Windows 10 (new build >= 16257) the default color values have been changed to improve legibility of darker colors on modern screens.

For upgraded machines (rather than fresh installs), the Windows Console Colortool can be used to change color schemes.

In PowerShell you will probably need to tinker with the new Colortool values: So up until very recently the console only supported 16 colours at a time. When the PowerShell team decided they wanted a very specific dark blue as the background colour, rather than altering the colour value for dark or light blue, they instead changed dark magenta to blue and used that as the background colour.

COLOR is an internal command.
If Command Extensions are disabled, the COLOR command will not function.

“How much more black could this be?" and the answer is "None...none more black” ~ Spinal Tap


## ⚡ TITLE [string]
https://ss64.com/nt/title.html

The default title for the CMD shell is %comspec% however, since the title can be re-defined in a program shortcut, the title is typically set to "Command Prompt".

In a batch file, you can set the title to match the name of the batch file with:

    TITLE %~nx0

The START command, used to start a program in a separate window also has an option to specify a title for the new Window.

If you call a batch script in a new CMD session, then any TITLE set within the batch file will revert when the second CMD session ends.

    TITLE Some initial title text
    CMD /c MyBatchFile.cmd

TITLE is an internal command.

"The longer the title, the less important the job" - George McGovern.


## ⚡ for
- https://ss64.com/nt/for.html

FOR 指令基本语法：

    syntax-FOR-Files
       FOR %%parameter IN (set) DO command 
   
    syntax-FOR-Files-Rooted at Path   
       FOR /R [[drive:]path] %%parameter IN (set) DO command 
   
    syntax-FOR-Folders
       FOR /D %%parameter IN (folder_set) DO command 
   
    syntax-FOR-List of numbers   
       FOR /L %%parameter IN (start,step,end) DO command 
   
    syntax-FOR-File contents   
       FOR /F ["options"] %%parameter IN (filenameset) DO command 
   
       FOR /F ["options"] %%parameter IN ("Text string to process") DO command
   
    syntax-FOR-Command Results 
       FOR /F ["options"] %%parameter IN ('command to process') DO command

例子：

    @echo off

    setlocal

    for %%G in (*.bat *.txt) do echo %%G

    endlocal

示范 for(start,step,end) 循环处理字符串，ts 为《不伦纯爱》影片：

    @echo off

    rem for /l %i in (1000000,1,1000010) do ( setlocal enabledelayedexpansion && echo %i:~-0,6%)
    rem http://www.qiankantv.cn/movie/201-1081.html@play=0-0

    setlocal enabledelayedexpansion
    set c=curl -O https://yiqikan.wuyouzuida.com/20190906/18_48328a45/1000k/hls/1882b53f96c001413.ts

    for /L %%i in (0,1,1071) do (
        set /a n=1000000 + %%i
        echo !n:~-6!.ts
        %c:~0,-9%!n:~-6!.ts
    )
    @echo on


Conditionally perform a command on several files.

        Syntax
            FOR %%parameter IN (set) DO command

        Key
        set         : A set of one or more files, separated by any standard delimiter.
                                 enclosed in parenthesis (file1,file2). Wildcards can be used.

        command     : The command to carry out, including any parameters.
                                 This can be a single command, or if you enclose it
                                 in (brackets), several commands, one per line.

        %%parameter : A replaceable parameter:
                                 e.g. in a batch file use %%G 
                                            (on the command line %G)
Examples

Copy a single file

        FOR %%G IN (MyFile.txt) DO copy %%G d:\backups\

Copy a list of several files

        FOR %%G IN (Myfile.txt SecondFile.txt) DO copy %%G d:\backups\

        FOR %%G IN ("C:\demo files\file1.txt" "C:\demo files\File2.txt") DO copy %%G d:\backups\

The FOR command is mostly used to process files, but you can also process a text string:

        FOR %%G IN ("Hello World") DO Echo %%G

This is not really useful being much the same as Echo Hello World

Although wildcards can be used, an alternative method of processing files is to let FOR /F process the output of the command 'DIR /b' This can be useful when you want to use DIR options like sorting.

Errorlevels

The FOR command does not generally set any errorlevels, leaving that to the command being called. 
One exception is using a wildcard, if the wildcard does not match any files, then FOR will return %ERRORLEVEL% = 5

FOR is an internal command.

    @echo off
    for /l %i in (1,1,10) do (
        echo %i
    )

局域网主机测试

    @echo off
    for /l %i in (1,1,255) do (
        ping -w 20 -n 1 192.168.0.%i | findstr TTL
    )


## ⚡ Random

一、random的取值范围

    要使用random，必须将其当作一个变量来使用，这样才能得到值。
    打开MS-DOS窗口，输入如下代码，即可获得值。

代码如下:

    echo %random%

    %random%可以产生0到65535之间的随机数。

二、通过获得一定范围内的随机数

    通过一，我们知道，%random%可以产生0到32767之间的随机数，但是，如何才能得到一定范围内的随机数呢？
    通用的算法公式如下：
    通用的公式%random%%%(max-min+1)+min来产生[min,max]区间里的随机数，注：批处理中求模得用两个%%符号。
    比如，我们想获得4到12之间的随机数，就可以这样来使用，代码如下：

代码如下:

    @REM 产生10个[4,12]间的随机数
    @echo off
    REM 启用延迟环境变量扩展
    setlocal enabledelayedexpansion
    REM 设置随机数的最小和最大值以及求模用的变量
    set min=4
    set max=12
    set /a mod=!max!-!min!+1

    for /l %%i in (1,1,10) do (
        REM 产生[min,max]之间的随机数
        set /a r=!random!%%!mod!+!min!
        echo.
        echo 随机数%%i：!r!
    )


三、其它实例

    实例①：常用功能    
    生成1到100之间的随机数

代码如下:

    set /a RandomNumber=%random%%%100+1
    ::100是范围数,1是底数即开始的数.（在bat 中使用）,在CMD中会出错.
    ::取随机两位数
    set /a d=%random:~0,2%
    echo %d%
    ::避免00
    set /a e=1%random:~0,2%-100
    echo %e% @echo off
    :loop
    set /a RandomNumber=1%random:~-1%%random:~-1%-99
    ::最大值100
    if %RandomNumber% LSS 35 goto loop
    ::小于35返回
    if %RandomNumber% GTR 75 goto loop
    ::大于75返回
    echo %RandomNumber%
    if "%RandomNumber%" == "50" pause
    goto loop


    实例②：随机获取文件名

代码如下:

    @echo off
    if "%1" NEQ "$" (
     for /f "tokens=1,2 delims=:" %%a in ('"%~0" $^|sort') do @echo %%b
    ) else for /f "delims=" %%i in ('dir /b /a-d *.mp3') do @call :sub %%i
    goto :EOF:sub
    echo %random%:%*
    goto :EOF


    实例③：在一个文本中随机取一行数据

代码如下:

    @ECHO %DBG% OFF
    SETLOCAL ENABLEDELAYEDEXPANSION
    FOR /F "TOKENS=*" %%i IN (TEST.TXT) DO (SET /A h+=1 & SET r!h!=%%i)
    SET /A s=%RANDOM%%%%h%+1
    ECHO !r%s%!


## ⚡ Delayed Expansion
[Delayed Expansion](https://ss64.com/nt/delayedexpansion.html)

设置本地为延迟扩展。其实也就是：延迟变量，全称延迟环境变量扩展, 想进阶，变量延迟是必过的一关！

    @echo off 
    set a=4 
    set a=5&echo %a% 
    pause
    结果：4 

解说：为什么是4而不是5呢？让我们先了解一下批处理运行命令的机制：批处理读取命令时是按行读取的，如for命令等，其后用一对圆括号闭合的所有语句也当作一行。在处理之前要完成必要的预处理工作，这其中就包括对该行命令中的变量赋值。我们现在分析一下例中批处理在运行到`set a=5&echo %a%`之前，先把这一句整句读取并做了预处理，—对变量a赋了值，那么`%a%`当然就是4了！

为了能够感知环境变量的动态变化，批处理设计了变量延迟。简单来说，在读取了一条完整的语句之后，不立即对该行的变量赋值，而会在某个单条语句执行之前再进行赋值，也就是说延迟扩展 Delayed Expansion。

    @echo off 
    setlocal enabledelayedexpansion 
    set a=4 
    set a=5&echo !a! 
    pause
    结果：5 

解说：由于启动了变量延迟，得到了正确答案。变量延迟要用感叹号 `!!` 括起来。注意要用英文的叹号，否则就没有变量延迟的效果。

for语句中进行变量赋值，例如：

    @echo off
    setlocal enabledelayedexpansion
    set k= 3
    for /l %%i in (1,1,3) do (
            set k=%%i
            echo %k% %%i
    )

    set k= 3
    for /l %%i in (1,1,3) do (
            set k=%%i
            echo !k! %%i
    )

分别输出

    3 1
    3 2
    3 3

    1 1
    2 2
    3 3
