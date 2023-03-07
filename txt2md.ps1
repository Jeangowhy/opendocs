PARAM(
    [Parameter(Mandatory)] [String]$FileName,
    [Parameter(Mandatory)] [String]$OutFileName,
    [Parameter(Mandatory)] [String]$EndMark,
    [int]$threads=4
    )

function TagContent($text, $keywords, $threads)
{
    1..$threads | ForEach-Object -Parallel {
        $threads = $using:threads
        $text = $using:text
        $keywords = $using:keywords
        $avg = [int]($text.Count / $threads)
        $from = [int]($avg * ($_ -1))
        $to = $from + $avg
        "Thread $_/$threads @$avg/$($text.Count)"

        $no = $from
        if ($to -gt $text.Count) { $to = $text.Count }
        while($text.Count -ge $no -and $no -le $to){
            $Count = $to - $from
            $p = (($no-$from)/$Count * 100).ToString("#.##")
            Write-Progress -Id $_ -Activity " " -Status " $no/$to $p % processed" -PercentComplete $p
            $line = $text[$no]
            foreach($key in $keywords.Keys){
                $leader = $keywords.($key)[0]
                $keyword = $keywords.($key)[1]
                if ($line -match "^$key$"){
                    $text[$no] = $line -replace "^$key$",("`n$leader $key`n" + "*$keyword*`n".PadLeft(80))
                }
            }
            $no ++
        }

    } -ThrottleLimit $threads
}

function Toc($text, $EndMark)
{
    $no = 0
    $keywords = @{}
    foreach( $line in $text.GetEnumerator()){
        $ori = $line
        $ret = $line -replace '^    ((\d+.?){1,}) ([- .a-zA-Z0-9?]+)', '    $1 |$3|<key>$3<key>$3' -split "<key>"
        if ($ret[1] -and $keywords.Contains($ret[1]) -eq $False) { 
            $keywords.Add($ret[1], @("##", $ret[2])) 
        }else{
            if ($ret[1]) { Write-Host "Hash Key exits: $($ret[1])" }
        }
        $text[$no] = $ret[0]
        if($ret[0] -eq $line){
            $ret = $line -replace '^((\w+)? ?([-.a-zA-Z0-9]+)+) ([- a-zA-Z0-9?]+)',"`n`$1 |`$4|<key>`$4<key>`$4" -split "<key>"
            if ($ret[1] -and $keywords.Contains($ret[1]) -eq $False) { 
                $keywords.Add($ret[1], @("#", $ret[2])) 
            }else{
                if ($ret[1]) { Write-Host "Hash Key exits: $($ret[1])" }
            }
            $text[$no] = $ret[0]
        }
        $no ++
        if ($ori -eq $EndMark) { Write-Host "EndMark: $EndMark"; break }
    }
    return $keywords
}

$text = get-content $FileName
$keywords = Toc $text $EndMark

$keywords

TagContent $text $keywords $threads
if ($OutFileName){
    Echo "Write to: $OutFileName"
    Out-File -Encoding UTF8 -InputObject $text -FilePath $OutFileName
}
