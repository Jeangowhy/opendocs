#!/usr/bin/env powershell

# 导入 WPF 模块
Add-Type -AssemblyName PresentationFramework

# 设定 XAML 配置
$xaml = @"
<Window xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="Hello World" Height="200" Width="300">
    <Grid>
    <Label Content="Hello, World!" HorizontalAlignment="Center" VerticalAlignment="Center"/>
    </Grid>
</Window>
"@

# 加载并解析 XAML 配置以创建程序界面
[xml]$xamlXML = $xaml
$reader = (New-Object System.Xml.XmlNodeReader $xamlXML)
$window = [Windows.Markup.XamlReader]::Load($reader)

$window.ShowDialog() | Out-Null