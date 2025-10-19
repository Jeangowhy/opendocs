#!/usr/bin/env powershell

# 通过反射函数加载 WinForm 组件库
[void][System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")

# Windows API
$code=@"
    using System;
    using System.Runtime.InteropServices;
    public static class GetWin32Api{
        [DllImport("user32.dll")]
        private static extern bool ShowWindow(IntPtr hWnd,uint showType);

        [DllImport("kernel32.dll")]
        private static extern IntPtr GetConsoleWindow();
		public static bool ShowConsoleWindow(uint showType){
			return ShowWindow(GetConsoleWindow(),showType);
		}
    }
"@
Add-Type -TypeDefinition $code 

# https://learn.microsoft.com/en-gb/windows/win32/api/winuser/nf-winuser-showwindow
# BOOL ShowWindow( [in] HWND hWnd, [in] int  nCmdShow );
# 0 SW_HIDE, 1 SW_NORMAL, 2 SW_SHOWMINIMIZED, 3 SW_MAXIMIZE ...

Write-Host "Set console window with SW_HIDE"
[GetWin32Api]::ShowConsoleWindow(0) 
sleep 2
Write-Host "Set console window with SW_NORMAL"
[GetWin32Api]::ShowConsoleWindow(1) 
sleep 2