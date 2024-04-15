#!/usr/bin/env bash

inno_manual_2_markdown()
{
    url=https://jrsoftware.org/ishelp/contents.htm
    while read url; do
      curl "https://jrsoftware.org/ishelp/$url" | /od/html2md.ts >> $0
    done <<EOF
    $(curl "$url" | sed -n 's/.*href="\([^"]\+htm\)".*/\1/p')
EOF
}

ispp_manual_2_markdown()
{
    url=https://jrsoftware.org/ispphelp/contents.htm
    while read url; do
      curl "https://jrsoftware.org/ispphelp/$url" | /od/html2md.ts >> $0
    done <<EOF
    $(curl "$url" | sed -n 's/.*href="\([^"]\+htm\)".*/\1/p')
EOF
}
url=https://jrsoftware.org/ishelp/topic_scriptfunctions.htm
#curl "$url" | /od/html2md.ts
#ispp_manual_2_markdown

exit
==============================================================================

/Inno Setup Help Contents 
============================

* [What is Inno Setup?]
* [Creating Installations]
* [Script Format Overview]
* [Parameters in Sections]
* [Constants]
* [Common Parameters]
* [Components and Tasks Parameters]
* [Setup Script Sections]
    * [`Setup` section]
    * [`Setup` section directives]
    * [AllowCancelDuringInstall]
    * [AllowNetworkDrive]
    * [AllowNoIcons]
    * [AllowRootDirectory]
    * [AllowUNCPath]
    * [AlwaysCreateUninstallIcon]
    * [AlwaysRestart]
    * [AlwaysShowComponentsList]
    * [AlwaysShowDirOnReadyPage]
    * [AlwaysShowGroupOnReadyPage]
    * [AlwaysUsePersonalGroup]
    * [AppComments]
    * [AppContact]
    * [AppCopyright]
    * [AppendDefaultDirName]
    * [AppendDefaultGroupName]
    * [AppId]
    * [AppModifyPath]
    * [AppMutex]
    * [AppName]
    * [AppPublisher]
    * [AppPublisherURL]
    * [AppReadmeFile]
    * [AppSupportPhone]
    * [AppSupportURL]
    * [AppUpdatesURL]
    * [AppVerName]
    * [AppVersion]
    * [ArchitecturesAllowed]
    * [ArchitecturesInstallIn64BitMode]
    * [ASLRCompatible]
    * [BackColor]
    * [BackColorDirection]
    * [BackSolid]
    * [ChangesAssociations]
    * [ChangesEnvironment]
    * [CloseApplications]
    * [CloseApplicationsFilter]
    * [Compression]
    * [CompressionThreads]
    * [CreateAppDir]
    * [CreateUninstallRegKey]
    * [DefaultDialogFontName]
    * [DefaultDirName]
    * [DefaultGroupName]
    * [DefaultUserInfoName]
    * [DefaultUserInfoOrg]
    * [DefaultUserInfoSerial]
    * [DEPCompatible]
    * [DirExistsWarning]
    * [DisableAppendDir]
    * [DisableDirPage]
    * [DisableFinishedPage]
    * [DisableProgramGroupPage]
    * [DisableReadyMemo]
    * [DisableReadyPage]
    * [DisableStartupPrompt]
    * [DisableWelcomePage]
    * [DiskClusterSize]
    * [DiskSliceSize]
    * [DiskSpanning]
    * [DontMergeDuplicateFiles]
    * [EnableDirDoesntExistWarning]
    * [Encryption]
    * [ExtraDiskSpaceRequired]
    * [FlatComponentsList]
    * [InfoAfterFile]
    * [InfoBeforeFile]
    * [InternalCompressLevel]
    * [LanguageDetectionMethod]
    * [LicenseFile]
    * [LZMAAlgorithm]
    * [LZMABlockSize]
    * [LZMADictionarySize]
    * [LZMAMatchFinder]
    * [LZMANumBlockThreads]
    * [LZMANumFastBytes]
    * [LZMAUseSeparateProcess]
    * [MergeDuplicateFiles]
    * [MessagesFile]
    * [MinVersion]
    * [MissingMessagesWarning]
    * [MissingRunOnceIdsWarning]
    * [NotRecognizedMessagesWarning]
    * [OnlyBelowVersion]
    * [Output]
    * [OutputBaseFilename]
    * [OutputDir]
    * [OutputManifestFile]
    * [Password]
    * [PrivilegesRequired]
    * [PrivilegesRequiredOverridesAllowed]
    * [ReserveBytes]
    * [RestartApplications]
    * [RestartIfNeededByRun]
    * [SetupIconFile]
    * [SetupLogging]
    * [SetupMutex]
    * [ShowComponentSizes]
    * [ShowLanguageDialog]
    * [ShowTasksTreeLines]
    * [SignedUninstaller]
    * [SignedUninstallerDir]
    * [SignTool]
    * [SignToolMinimumTimeBetween]
    * [SignToolRetryCount]
    * [SignToolRetryDelay]
    * [SignToolRunMinimized]
    * [SlicesPerDisk]
    * [SolidCompression]
    * [SourceDir]
    * [TerminalServicesAware]
    * [TimeStampRounding]
    * [TimeStampsInUTC]
    * [TouchDate]
    * [TouchTime]
    * [Uninstallable]
    * [UninstallDisplayIcon]
    * [UninstallDisplayName]
    * [UninstallDisplaySize]
    * [UninstallFilesDir]
    * [UninstallIconFile]
    * [UninstallIconName]
    * [UninstallLogMode]
    * [UninstallRestartComputer]
    * [UninstallStyle]
    * [UpdateUninstallLogAppName]
    * [UsedUserAreasWarning]
    * [UsePreviousAppDir]
    * [UsePreviousGroup]
    * [UsePreviousLanguage]
    * [UsePreviousPrivileges]
    * [UsePreviousSetupType]
    * [UsePreviousTasks]
    * [UsePreviousUserInfo]
    * [UserInfoPage]
    * [UseSetupLdr]
    * [VersionInfoCompany]
    * [VersionInfoCopyright]
    * [VersionInfoDescription]
    * [VersionInfoOriginalFileName]
    * [VersionInfoProductName]
    * [VersionInfoProductTextVersion]
    * [VersionInfoProductVersion]
    * [VersionInfoTextVersion]
    * [VersionInfoVersion]
    * [WindowResizable]
    * [WindowShowCaption]
    * [WindowStartMaximized]
    * [WindowVisible]
    * [WizardImageAlphaFormat]
    * [WizardImageBackColor]
    * [WizardImageFile]
    * [WizardImageStretch]
    * [WizardResizable]
    * [WizardSizePercent]
    * [WizardSmallImageBackColor]
    * [WizardSmallImageFile]
    * [WizardStyle]
    * [`Types` section]
    * [`Components` section]
    * [`Tasks` section]
    * [`Dirs` section]
    * [`Files` section]
    * [`Icons` section]
    * [`INI` section]
    * [`InstallDelete` section]
    * [`Languages` section]
    * [`Messages` section]
    * [`CustomMessages` section]
    * [`LangOptions` section]
    * [`Registry` section]
    * [`Run` section]
    * [`UninstallDelete` section]
    * [`UninstallRun` section]
* [Pascal Scripting]
    * [Introduction]
    * [Creating the `Code` Section]
    * [Event Functions]
    * [Scripted Constants]
    * [Check Parameters]
    * [BeforeInstall and AfterInstall Parameters]
    * [Uninstall Code]
    * [Examples]
    * [Support Functions Reference]
    * [Support Classes Reference]
    * [Using Custom Wizard Pages]
    * [Using DLLs and .NET assemblies]
    * [Using COM Automation objects]
    * [Debugging]
* [Other Information]
    * [Support Inno Setup]
    * [Unicode Inno Setup]
    * [Non Administrative Install Mode]
    * [64-bit Install Mode]
    * [64-bit Installation Limitations]
    * [Wizard Pages]
    * [Installation Order]
    * [Unsafe Files]
    * [Compiler Command Line Execution]
    * [Setup Command Line Parameters]
    * [Uninstaller Command Line Parameters]
    * [Setup Exit Codes]
    * [Uninstaller Exit Codes]
    * [Compiler IDE Keyboard Commands]
    * [Miscellaneous Notes]
    * [Example Scripts]
    * [Frequently Asked Questions]
    * [Contributors]

  What is Inno Setup? 

/What is Inno Setup?
====================

**Inno Setup version 6.2.2**  
**Copyright © 1997-2023 Jordan Russell. All rights reserved.**  
**Portions Copyright © 2000-2023 Martijn Laan. All rights reserved.**  
[Inno Setup home page](https://jrsoftware.org/ "https://jrsoftware.org/")

  
Inno Setup is a _free_ installer for Windows programs by Jordan Russell and Martijn Laan. First introduced in 1997, Inno Setup today rivals and even surpasses many commercial installers in feature set and stability.

  
**_Key features:_**

*   Support for every Windows release since 2006, including: Windows 11, Windows 10, Windows 10 on ARM, Windows Server 2019, Windows Server 2016, Windows 8.1, Windows 8, Windows Server 2012, Windows 7, Windows Server 2008 R2, Windows Server 2008, and Windows Vista. (No service packs are required.)
*   Extensive support for installation of [64-bit] applications on the 64-bit editions of Windows. The x64, ARM64 and Itanium architectures are all supported.
*   Extensive support for both administrative and [non administrative installations] installations.
*   Supports creation of a single EXE to install your program for easy online distribution. [Disk spanning] is also supported.
*   Resizable standard Windows wizard interface.
*   Customizable setup [types], e.g. Full, Minimal, Custom.
*   Complete [uninstall] capabilities.
*   Installation of [files]:  
    Includes integrated support for "deflate", bzip2, and 7-Zip LZMA/LZMA2 file [compression]. The installer has the ability to compare file version info, replace in-use files, use shared file counting, register DLL/OCX's and type libraries, and install fonts.
*   Creation of [shortcuts] anywhere, including in the Start Menu and on the desktop.
*   Creation of [registry] and [.INI] entries.
*   [Running] other programs before, during or after install.
*   Support for [multilingual] installs, including right-to-left language support.
*   Support for [password-protected] and [encrypted] installs.
*   Support for [digitally signed] installs and uninstalls, including dual signing (SHA1 & SHA256).
*   [Silent install] and [silent uninstall].
*   [Unicode installs].
*   Integrated preprocessor option for advanced compile-time customization.
*   Integrated [Pascal scripting] engine option for advanced run-time install and uninstall customization.
*   Full source code is available from [GitHub](https://github.com/jrsoftware/issrc "https://github.com/jrsoftware/issrc").
*   Tiny footprint: only about 1.5 mB overhead with all features included.
*   All features are fully documented.
*   Used by [Microsoft Visual Studio Code](https://code.visualstudio.com "https://code.visualstudio.com") and [Embarcardero Delphi](https://www.embarcadero.com/products/delphi "https://www.embarcadero.com/products/delphi").

  
**_Is it really free of charge, even for commercial use?_**

Yes, it may be used completely free of charge, even when deploying commercial applications.

(Note: "Completely free of charge" must not be confused with "completely free". Inno Setup is copyrighted software, _not_ public domain software. There are some restrictions on distribution and use; see the LICENSE.TXT file for details.)  Creating Installations 

/Creating Installations
=======================

Installations are created by means of _scripts_, which are ASCII or Unicode (UTF-8 encoded with a BOM) text files with a format somewhat similar to .INI files. (No, it's not as complicated as you might be thinking!).

Scripts have an ".iss" (meaning Inno Setup Script) extension. The script controls every aspect of the installation. It specifies which files are to be installed and where, what shortcuts are to be created and what they are to be named, and so on.

Script files are usually edited from inside the "Inno Setup Compiler" Compiler IDE program. After you have finishing writing the script, the next and final step is select "Compile" in the Compiler IDE. What this does is create a complete, ready-to-run Setup program based on your script. By default, this is created in a directory named "Output" under the directory containing the script.

To give you an idea of how this all works, start the Compiler IDE, click _File | Open_, and select one of the script files in the Examples subdirectory located under the Inno Setup directory. (It may be helpful to use the sample scripts as a template for your own scripts.)

  
**See also:**  
[Script Format Overview]  Script Format Overview 

/Script Format Overview
=======================

Inno Setup Scripts are arranged into _sections_. Each section controls a different aspect of the installation. A section is started by specifying the name of the section enclosed in square brackets \[\]. Inside each section is any number of _entries_.

There are two different main types of sections: those such as [Setup] whose entries contain directive names and values (in the form Directive=Value), and those such as [Files] whose entries are divided into [parameters].

Here is an example:

    [Setup]
    AppName=My Program

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"

Note that it is legal to specify multiple sections of the same name.

You can put "comments" in the script (which are ignored by the compiler) by placing a semicolon at the beginning of a line. For example:

; This is a comment. I could put reminders to myself here...

A C-like #include directive is supported, which pulls in lines from a separate file into the script at the position of the #include directive. The syntax is:

    #include "filename.txt"

If the filename is not fully qualified, the compiler will look for it in the same directory as the file containing the #include directive. The filename may be prefixed by "compiler:", in which case it looks for the file in the compiler directory.

A #preproc directive is supported, which specifies whether to use the built-in preprocessor which only supports the above #include directive or to use Inno Setup Preprocessor (ISPP) which supports many more directives. The syntax is:

    #preproc builtin
    #preproc ispp

By default, scripts use ISPP if available, and .isl files use the built-in preprocessor.

If an Unicode file is used, it must be UTF-8 encoded with a BOM.


/Parameters in Sections
=======================

All of the sections in a script, with the exception of [Setup], [Messages], `CustomMessages`, [LangOptions], and [Code], contain lines separated into _parameters_. The following is an example of a [Files] section:

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"
    Source: "MYPROG.CHM"; DestDir: "{app}"
    Source: "README.TXT"; DestDir: "{app}"; Flags: isreadme

Each parameter consists of a name, followed by a colon, and then a value. Unless otherwise noted, parameters are optional in that they assume a default value if they are not specified. Multiple parameters on a line are separated by semicolons, and can be listed in any order.

The value of a parameter is traditionally surrounded in double quotes (") when it contains a user-defined string, such as a filename. Using quotes is not required, though, but by doing so it makes it possible to embed leading and trailing spaces in the value, as well as semicolons and double-quote characters.

To embed a double-quote character inside a quoted value, use two consecutive double-quote characters. For example:

    "This "" contains "" embedded "" quotes"

The compiler would see that as:

    This " contains " embedded " quotes

If you want the value of a parameter to be a single double-quote character, use four double-quote characters: """". The outer two are needed to surround the string in quotes; the inner two are used to embed a single double-quote character.  Constants 

/Constants
==========

The majority of the script entries can have _constants_ embedded in them. These are predefined strings enclosed in brace characters { }. Setup or Uninstall translates the constants to their literal values, depending on the user's choices and system configuration. For example, {win}, as described below, would translate to "C:\WINDOWS" on most systems.

A "{" character is treated as the start of the constant. If you want to use that actual character in a place where constants are supported, you must use two consecutive "{" characters. (You do not need to double "}" characters.)

When a backslash immediately follows a constant, Setup or Uninstall will automatically remove the backslash if the value of the constant ends in a backslash already. Thus, if the value of a particular constant is "C:\", {_constantname_}\file will translate to "C:\file", not "C:\file". If you want to prevent this from happening, enclose the backslash in { } characters, e.g. {app}{\}.

The following is the list of supported constants.

Directory Constants
-------------------

*   **{app}**

    The application directory, which the user selects on the _Select Destination Location_ page of the wizard.  
    For example: If you used {app}\MYPROG.EXE on an entry and the user selected "C:\MYPROG" as the application directory, Setup will translate it to "C:\MYPROG\MYPROG.EXE".

*   **{win}**

    The system's Windows directory.  
    For example: If you used {win}\MYPROG.INI on an entry and the system's Windows directory is "C:\WINDOWS", Setup or Uninstall will translate it to "C:\WINDOWS\MYPROG.INI".

*   **{sys}**

    The system's System32 directory.  
    For example: If you used {sys}\CTL3D32.DLL on an entry and the system's Windows System directory is "C:\WINDOWS\SYSTEM", Setup or Uninstall will translate it to "C:\WINDOWS\SYSTEM\CTL3D32.DLL".

    On 64-bit Windows, by default, the System32 path returned by this constant maps to the directory containing 32-bit system files, just like on 32-bit Windows. (This can be overridden by enabling [64-bit install mode].)

*   **{sysnative}**

    On 64-bit Windows, the directory containing 64-bit system files. On 32-bit Windows, the directory containing 32-bit system files.

*   **{syswow64}**

    On 64-bit Windows, the system's SysWOW64 directory, typically "C:\WINDOWS\SysWOW64". This is the actual directory in which 32-bit system files reside. On 32-bit Windows, 32-bit system files do not reside in a separate SysWOW64 directory, so this constant will resolve to the same directory as {sys} if used there.

    Do not use this constant unless you have a specific need to obtain the name of the actual directory in which 32-bit system files reside. Gratuitously using {syswow64} in places where {sys} will suffice may cause problems. (See the documentation for the [Files] section's sharedfile flag for one example.)

*   **{src}**

    The directory in which the Setup files are located.  
    For example: If you used {src}\MYPROG.EXE on an entry and the user is installing from "S:\", Setup will translate it to "S:\MYPROG.EXE".

*   **{sd}**

    System Drive. The drive Windows is installed on, typically "C:". This directory constant is equivalent to the _SystemDrive_ environment variable.

*   **{commonpf}**

    Program Files. The path of the system's Program Files directory. {commonpf} is equivalent to {commonpf32} unless the install is running in [64-bit install mode], in which case it is equivalent to {commonpf64}.

*   **{commonpf32}**

    32-bit Program Files. The path of the system's 32-bit Program Files directory, typically "C:\Program Files" on 32-bit Windows and "C:\Program Files (x86)" on 64-bit Windows.

*   **{commonpf64}**

    64-bit Windows only: 64-bit Program Files. The path of the system's 64-bit Program Files directory, typically "C:\Program Files". An exception will be raised if an attempt is made to expand this constant on 32-bit Windows.

*   **{commoncf}**

    Common Files. The path of the system's Common Files directory. {commoncf} is equivalent to {commoncf32} unless the install is running in [64-bit install mode], in which case it is equivalent to {commoncf64}.

*   **{commoncf32}**

    32-bit Common Files. The path of the system's 32-bit Common Files directory, typically "C:\Program Files\Common Files" on 32-bit Windows and "C:\Program Files (x86)\Common Files" on 64-bit Windows.

*   **{commoncf64}**

    64-bit Windows only: 64-bit Common Files. The path of the system's 64-bit Common Files directory, typically "C:\Program Files\Common Files". An exception will be raised if an attempt is made to expand this constant on 32-bit Windows.

*   **{tmp}**

    Temporary directory used by Setup or Uninstall. This is _not_ the value of the user's TEMP environment variable. It is a subdirectory of the user's temporary directory which is created by Setup or Uninstall at startup (with a name like "C:\WINDOWS\TEMP\IS-xxxxx.tmp"). All files and subdirectories in this directory are deleted when Setup or Uninstall exits. During Setup, this is primarily useful for extracting files that are to be executed in the [Run] section but aren't needed after the installation.

*   **{commonfonts}**

    Fonts directory. Normally named "Fonts" under the Windows directory.

*   **{dao}**

    DAO directory. This is equivalent to {commoncf}\Microsoft Shared\DAO.

*   **{dotnet11}**

    32-bit .NET Framework version 1.1 install root directory.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 1.1 present.

*   **{dotnet20}**

    .NET Framework version 2.0-3.5 install root directory. {dotnet20} is equivalent to {dotnet2032} unless the install is running in [64-bit install mode], in which case it is equivalent to {dotnet2064}.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 2.0-3.5 present.

*   **{dotnet2032}**

    32-bit .NET Framework version 2.0-3.5 install root directory.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 2.0-3.5 present.

*   **{dotnet2064}**

    64-bit Windows only: 64-bit .NET Framework version 2.0-3.5 install root directory.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 2.0-3.5 present.

*   **{dotnet40}**

    .NET Framework version 4.0 and later install root directory. {dotnet40} is equivalent to {dotnet4032} unless the install is running in [64-bit install mode], in which case it is equivalent to {dotnet4064}.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 4.0 or later present.

    Also see [IsDotNetInstalled].

*   **{dotnet4032}**

    32-bit .NET Framework version 4.0 and later install root directory.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 4.0 or later present.

*   **{dotnet4064}**

    64-bit Windows only: 64-bit .NET Framework version 4.0 and later install root directory.

    An exception will be raised if an attempt is made to expand this constant on a system with no .NET Framework version 4.0 or later present.

Shell Folder Constants
----------------------

Inno Setup supports another set of directory constants, referred to as _shell folder constants_. They can be used in the same way as the other directory constants.

The "common" constants refer to the _All Users_ profile.

The "user" constants refer to the profile of the user running Setup. This user is often not the same as the currently logged-in user, so use the "user" constants with caution.

*   **{group}**

    The path to the Start Menu folder, as selected by the user on Setup's _Select Start Menu Folder_ wizard page. This folder is created in the _All Users_ profile unless the installation is running in [non administrative install mode], in which case it is created in the current user's profile.

*   **{localappdata}**

    The path to the current user's local (non-roaming) Application Data folder.

*   **{userappdata}** & **{commonappdata}**

    The path to the Application Data folder.

*   **{usercf}**

    The path to the current user's Common Files directory. Only Windows 7 and later supports {usercf}; if used on previous Windows versions, it will translate to the same directory as {localappdata}\Programs\Common.

*   **{userdesktop}** & **{commondesktop}**

    The path to the desktop folder.

*   **{userdocs}** & **{commondocs}**

    The path to the My Documents folder.

*   **{userfavorites}**

    The path to the current user's Favorites folder. (There is no common Favorites folder.)

*   **{userfonts}**

    The path to the current user's Fonts folder. Only Windows 10 Version 1803 and later supports {userfonts}. Same directory as {localappdata}\Microsoft\Windows\Fonts.

*   **{userpf}**

    The path to the current user's Program Files directory. Only Windows 7 and later supports {userpf}; if used on previous Windows versions, it will translate to the same directory as {localappdata}\Programs.

*   **{userprograms}** & **{commonprograms}**

    The path to the Programs folder on the Start Menu.

*   **{usersavedgames}**

    The path to the current user's Saved Games directory.

*   **{usersendto}**

    The path to the current user's Send To folder. (There is no common Send To folder.)

*   **{userstartmenu}** & **{commonstartmenu}**

    The path to the top level of the Start Menu.

*   **{userstartup}** & **{commonstartup}**

    The path to the Startup folder on the Start Menu.

*   **{usertemplates}** & **{commontemplates}**

    The path to the Templates folder.

Auto Constants
--------------

Besides the "common" and "user" constants, Inno Setup also supports "auto" constants. These automatically map to their "common" form unless the installation is running in [non administrative install mode], in which case they map to their "user" form.

It is recommended you always use these "auto" constants when possible to avoid mistakes.

                    | Administrative     | Non administrative 
    ================|====================|==========================|
    autoappdata     | commonappdata      | userappdata 
    autocf          | commoncf           | usercf 
    autocf32        | commoncf32         | usercf 
    autocf64        | commoncf64         | usercf 
    autodesktop     | commondesktop      | userdesktop 
    autodocs        | commondocs         | userdocs 
    autofonts       | commonfonts        | userfonts 
    autopf          | commonpf           | userpf 
    autopf32        | commonpf32         | userpf 
    autopf64        | commonpf64         | userpf 
    autoprograms    | commonprograms     | userprograms 
    autostartmenu   | commonstartmenu    | userstartmenu 
    autostartup     | commonstartup      | userstartup 
    autotemplates   | commontemplates    | usertemplates 


Renamed Constants
-----------------

Inno Setup 6 renamed some of the directory and shell folder constants. The old names are still supported, but it is recommended to update your scripts to the new names (or the "auto" form) and the compiler will issue a warning if you don't.

    Old name   | New name 
    ===========|===========|
    cf         | commoncf 
    cf32       | commoncf32 
    cf64       | commoncf64 
    fonts      | commonfonts 
    pf         | commonpf 
    pf32       | commonpf32 
    pf64       | commonpf64 
    sendto     | usersendto 

Other Constants
---------------

*   **{\}**

    A backslash character. See the note at the top of this page for an explanation of what the difference between using {\} and only a \ is.

*   **{%_NAME_|_DefaultValue_}**

    Embeds the value of an environment variable.

    *   _NAME_ specifies the name of the environment variable to use.

    *   _DefaultValue_ determines the string to embed if the specified variable does not exist on the user's system.

    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".

    *   _NAME_ and _DefaultValue_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

    Examples:

        {%COMSPEC}
        {%PROMPT|$P$G}

*   **{cmd}**

    The full pathname of the system's standard command interpreter, Windows\System32_cmd.exe. Note that the COMSPEC environment variable is not used when expanding this constant.

*   **{computername}**

    The name of the computer the Setup or Uninstall program is running on (as returned by the Windows _GetComputerName_ function).

*   **{drive:_Path_}**

    Extracts and returns the drive letter and colon (e.g. "C:") from the specified path. In the case of a UNC path, it returns the server and share name (e.g. "\\SERVER\SHARE").

    *   _Path_ specifies the path.

    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".

    *   _Path_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.


    Examples:

        {drive:{src}}
        {drive:c:\path\file}
        {drive:\\server\share\path\file}

*   **{groupname}**

    The name of the folder the user selected on Setup's _Select Start Menu Folder_ wizard page. This differs from {group} in that it is only the name; it does not include a path.

*   **{hwnd}**

    _(Special-purpose)_ Translates to the window handle of the Setup program's background window.

*   **{wizardhwnd}**

    _(Special-purpose)_ Translates to the window handle of the Setup wizard window. This handle is set to '0' if the window handle isn't available at the time the translation is done.

*   **{ini:_Filename_,_Section_,_Key_|_DefaultValue_}**

    Embeds a value from an .INI file.

    *   _Filename_ specifies the name of the .INI file to read from.

    *   _Section_ specifies the name of the section to read from.

    *   _Key_ specifies the name of the key to read.

    *   _DefaultValue_ determines the string to embed if the specified key does not exist.

    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".

    *   _Filename, Section, Key_ and _DefaultValue_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

    Example:

        {ini:{win}\MyProg.ini,Settings,Path|{autopf}\My Program}

*   **{language}**

    The internal name of the selected language. See the [[Languages] section] documentation for more information.

*   **{cm:_MessageName_}**  
*   **{cm:_MessageName_,_Arguments_}**

    Embeds a custom message value based on the active language.

    *   _MessageName_ specifies the name of custom message to read from. See the [`CustomMessages` section] documentation for more information.

    *   _Arguments_ optionally specifies a comma separated list of arguments to the message value.

    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".

    *   Each argument in _Arguments_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

    Example:

        {cm:LaunchProgram,Inno Setup}

    The example above translates to "Launch Inno Setup" if English is the active language.

*   **{reg:HK_xx__SubkeyName_,_ValueName_|_DefaultValue_}**

    Embeds a registry value.


    *   HK_xx_ specifies the root key; see the [`Registry`] section documentation for a list of possible root keys.

    *   _SubkeyName_ specifies the name of the subkey to read from.

    *   _ValueName_ specifies the name of the value to read; leave _ValueName_ blank if you wish to read the "default" value of a key.

    *   _DefaultValue_ determines the string to embed if the specified registry value does not exist, or is not a string type (REG_SZ or REG_EXPAND_SZ).

    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".

    *   _SubkeyName, ValueName,_ and _DefaultValue_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

    Example:

        {reg:HKA\Software\My Program,Path|{autopf}\My Program}

*   **{param:_ParamName_|_DefaultValue_}**

    Embeds a command line parameter value.

    *   _ParamName_ specifies the name of the command line parameter to read from.
    *   _DefaultValue_ determines the string to embed if the specified command line parameter does not exist, or its value could not be determined.
    *   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".
    *   _ParamName_ and _DefaultValue_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

    Example:

        {param:Path|{autopf}\My Program}

    The example above translates to c:\My Program if the command line /Path="c:\My Program" was specified.

*   **{srcexe}**

    The full pathname of the Setup program file, e.g. "C:\SETUP.EXE".

*   **{uninstallexe}**

    The full pathname of the uninstall program extracted by Setup, e.g. "C:\Program Files\My Program\unins000.exe". This constant is typically used in an [Icons] section entry for creating an Uninstall icon. It is only valid if Uninstallable is yes (the default setting).

*   **{sysuserinfoname}**  
*   **{sysuserinfoorg}**

    The name and organization, respectively, that Windows is registered to. This information is read from the registry.

*   **{userinfoname}**  
*   **{userinfoorg}**  
*   **{userinfoserial}**

    The name, organization and serial number, respectively, that the user entered on the _User Information_ wizard page (which can be enabled via the UserInfoPage directive). Typically, these constants are used in `Registry` or [INI] entries to save their values for later use.

*   **{username}**

    The name of the user who is running Setup or Uninstall program (as returned by the _GetUserName_ function).

*   **{log}**

    The log file name, or an empty string if [logging] is not enabled.  Common Parameters 

/Common Parameters
==================

There are three optional [parameters] that are supported by all sections whose entries are separated into parameters. They are:

**Languages**

A space separated list of language names, telling Setup to which languages the entry belongs. If the end user selects a language from this list, the entry is processed (for example: the file is installed).

An entry without a Languages parameter is always processed, unless other parameters say it shouldn't be.

Besides space separated lists, you may also use boolean expressions. See [Components and Tasks parameters] for examples of boolean expressions.

Example:

    Languages: en nl

**MinVersion**

A minimum [Windows version] for the entry to be processed. If you use "0" then the entry will never be processed. [Build numbers and/or service pack levels] may be included. This overrides any MinVersion directive in the script's [Setup] section.

An entry without a MinVersion parameter is always processed, unless other parameters say it shouldn't be.

Example:

    MinVersion: 6.2

**OnlyBelowVersion**

Essentially the opposite of MinVersion. Specifies the minimum [Windows version] for the entry _not_ to be processed. For example, if you put 6.2 and the user is running Windows 7, the entry _will_ be processed, but if the user is running Windows 8 (which reports its version as 6.2) or later, it will _not_ be processed. Putting "0" means there is no upper version limit. [Build numbers and/or service pack levels] may be included. This overrides any OnlyBelowVersion directive in the script's [Setup] section.

An entry without an OnlyBelowVersion parameter is always processed, unless other parameters say it shouldn't be.

Example:

    OnlyBelowVersion: 6.2  Components and Tasks Parameters 

/Components and Tasks Parameters
================================


/ Setup Script Sections
=======================


There are two optional [parameters] that are supported by all sections whose entries are separated into parameters, except [Types], [Components] and [Tasks]. They are:

**Components**

A space separated list of component names, telling Setup to which components the entry belongs. If the end user selects a component from this list, the entry is processed (for example: the file is installed).

An entry without a Components parameter is always processed, unless other parameters say it shouldn't be.

Example:

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"; Components: main
    Source: "MYPROG.CHM"; DestDir: "{app}"; Components: help
    Source: "README.TXT"; DestDir: "{app}"

**Tasks**

A space separated list of task names, telling Setup to which task the entry belongs. If the end user selects a task from this list, the entry is processed (for example: the file is installed).

An entry without a Tasks parameter is always processed, unless other parameters say it shouldn't be.

Note that the _Don't create a Start Menu folder_ checkbox on the _Select Start Menu Folder_ wizard page doesn't affect [Icons] entries that have Tasks parameters since they have their own checkboxes.

Example:

    [Icons]
    Name: "{group}\My Program"; Filename: "{app}\MyProg.exe"; Components: main; Tasks: startmenu
    Name: "{group}\My Program Help"; Filename: "{app}\MyProg.chm"; Components: help; Tasks: startmenu
    Name: "{commondesktop}\My Program"; Filename: "{app}\MyProg.exe"; Components: main; Tasks: desktopicon

  
Besides space separated lists, you may also use boolean expressions as Components and Tasks parameters. Supported operators include not, and, and or. For example:

    [Components]
    Name: a; Description: a
    Name: b; Description: b

    [Tasks]
    Name: p; Description: a or b; Components: a or b
    Name: q; Description: a and b; Components: a and b
    Name: r; Description: not a or b; Components: not a or b
    Name: s; Description: not (a or b); Components: not (a or b)
    Name: t; Description: a or b - old style; Components: a b

/`Setup` section
=================

This section contains global settings used by the installer and uninstaller. Certain directives are required for any installation you create. Here is an example of a [Setup] section:

    [Setup]
    AppName=My Program
    AppVersion=1.5
    DefaultDirName={autopf}\My Program
    DefaultGroupName=My Program

By default, any leading or trailing whitespace in a directive's value will be stripped. It is possible to avoid this by surrounding the directive's value in double quotes (").

  
The following directives can be placed in the [Setup] section:

(**bold** = required)

Compiler-related
----------------

*   [ASLRCompatible]
*   [Compression]
*   [CompressionThreads]
*   [DEPCompatible]
*   [DiskClusterSize]
*   [DiskSliceSize]
*   [DiskSpanning]
*   [Encryption]
*   [InternalCompressLevel]
*   [LZMAAlgorithm]
*   [LZMABlockSize]
*   [LZMADictionarySize]
*   [LZMAMatchFinder]
*   [LZMANumBlockThreads]
*   [LZMANumFastBytes]
*   [LZMAUseSeparateProcess]
*   [MergeDuplicateFiles]
*   [MissingMessagesWarning]
*   [MissingRunOnceIdsWarning]
*   [NotRecognizedMessagesWarning]
*   [Output]
*   [OutputBaseFilename]
*   [OutputDir]
*   [OutputManifestFile]
*   [ReserveBytes]
*   [SignedUninstaller]
*   [SignedUninstallerDir]
*   [SignTool]
*   [SignToolMinimumTimeBetween]
*   [SignToolRetryCount]
*   [SignToolRetryDelay]
*   [SignToolRunMinimized]
*   [SlicesPerDisk]
*   [SolidCompression]
*   [SourceDir]
*   [TerminalServicesAware]
*   [UsedUserAreasWarning]
*   [UseSetupLdr]
*   [VersionInfoCompany]
*   [VersionInfoCopyright]
*   [VersionInfoDescription]
*   [VersionInfoOriginalFileName]
*   [VersionInfoProductName]
*   [VersionInfoProductTextVersion]
*   [VersionInfoProductVersion]
*   [VersionInfoTextVersion]
*   [VersionInfoVersion]

Installer-related
-----------------

**Functional:** These directives affect the operation of the Setup program, or are saved and used later by the uninstaller.

*   [AllowCancelDuringInstall]
*   [AllowNetworkDrive]
*   [AllowNoIcons]
*   [AllowRootDirectory]
*   [AllowUNCPath]
*   [AlwaysRestart]
*   [AlwaysShowComponentsList]
*   [AlwaysShowDirOnReadyPage]
*   [AlwaysShowGroupOnReadyPage]
*   [AlwaysUsePersonalGroup]
*   [AppendDefaultDirName]
*   [AppendDefaultGroupName]
*   [AppComments]
*   [AppContact]
*   [AppId]
*   [AppModifyPath]
*   [AppMutex]
*   [**AppName**]
*   [AppPublisher]
*   [AppPublisherURL]
*   [AppReadmeFile]
*   [AppSupportPhone]
*   [AppSupportURL]
*   [AppUpdatesURL]
*   [AppVerName]
*   [**AppVersion**]
*   [ArchitecturesAllowed]
*   [ArchitecturesInstallIn64BitMode]
*   [ChangesAssociations]
*   [ChangesEnvironment]
*   [CloseApplications]
*   [CloseApplicationsFilter]
*   [CreateAppDir]
*   [CreateUninstallRegKey]
*   [DefaultDialogFontName]
*   [DefaultDirName]
*   [DefaultGroupName]
*   [DefaultUserInfoName]
*   [DefaultUserInfoOrg]
*   [DefaultUserInfoSerial]
*   [DirExistsWarning]
*   [DisableDirPage]
*   [DisableFinishedPage]
*   [DisableProgramGroupPage]
*   [DisableReadyMemo]
*   [DisableReadyPage]
*   [DisableStartupPrompt]
*   [DisableWelcomePage]
*   [EnableDirDoesntExistWarning]
*   [ExtraDiskSpaceRequired]
*   [InfoAfterFile]
*   [InfoBeforeFile]
*   [LanguageDetectionMethod]
*   [LicenseFile]
*   [MinVersion]
*   [OnlyBelowVersion]
*   [Password]
*   [PrivilegesRequired]
*   [PrivilegesRequiredOverridesAllowed]
*   [RestartApplications]
*   [RestartIfNeededByRun]
*   [SetupLogging]
*   [SetupMutex]
*   [ShowLanguageDialog]
*   [TimeStampRounding]
*   [TimeStampsInUTC]
*   [TouchDate]
*   [TouchTime]
*   [Uninstallable]
*   [UninstallDisplayIcon]
*   [UninstallDisplayName]
*   [UninstallDisplaySize]
*   [UninstallFilesDir]
*   [UninstallLogMode]
*   [UninstallRestartComputer]
*   [UpdateUninstallLogAppName]
*   [UsePreviousAppDir]
*   [UsePreviousGroup]
*   [UsePreviousLanguage]
*   [UsePreviousPrivileges]
*   [UsePreviousSetupType]
*   [UsePreviousTasks]
*   [UsePreviousUserInfo]
*   [UserInfoPage]

**Cosmetic:** These directives only affect the appearance of the Setup program.

*   [AppCopyright]
*   [BackColor]
*   [BackColor2]
*   [BackColorDirection]
*   [BackSolid]
*   [FlatComponentsList]
*   [SetupIconFile]
*   [ShowComponentSizes]
*   [ShowTasksTreeLines]
*   [WindowShowCaption]
*   [WindowStartMaximized]
*   [WindowResizable]
*   [WindowVisible]
*   [WizardImageAlphaFormat]
*   [WizardImageFile]
*   [WizardImageStretch]
*   [WizardResizable]
*   [WizardSizePercent]
*   [WizardSmallImageFile]
*   [WizardStyle]

Obsolete
--------

These directives are obsolete and should not be used in any new scripts.

*   [AlwaysCreateUninstallIcon]
*   [DisableAppendDir]
*   [DontMergeDuplicateFiles]
*   [MessagesFile]
*   [UninstallIconFile]
*   [UninstallIconName]
*   [UninstallStyle]
*   [WizardImageBackColor]
*   [WizardSmallImageBackColor]

[Setup] AllowCancelDuringInstall
--------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

Setting this to no prevents the user from cancelling during the actual installation process, by disabling the Cancel button and ignoring clicks on the close button. This has the same effect as passing /NOCANCEL to Setup on the command line.

[Setup] AllowNetworkDrive
-------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to no, the user will not be allowed to enter a network drive on the _Select Destination Location_ page of the wizard.

To fully disallow installation to network locations, you must also set [AllowUNCPath] to no.

[Setup] AllowNoIcons
--------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to yes, Setup will display a _Don't create a Start Menu folder_ check box on the _Select Start Menu Folder_ wizard page, which allows the user to skip creation of program shortcuts on the Start Menu.

Only [Icons] entries that have a Name parameter starting with {group}\ and no Tasks parameter are affected by default. To force the check box to have an effect on a particular [Icons] entry, add a Check: not [WizardNoIcons] parameter.

[Setup] AllowRootDirectory
--------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to no, the default, the user will not be allowed to enter a root directory (such as "C:\") on the _Select Destination Location_ page of the wizard.

[Setup] AllowUNCPath
--------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to no, the user will not be allowed to enter a UNC path (such as "\\server\share") on the _Select Destination Location_ page of the wizard. This was the default behavior in Inno Setup 2.0.17 and earlier.

To fully disallow installation to network locations, you must also set [AllowNetworkDrive] to no.

[Setup] AlwaysCreateUninstallIcon
---------------------------------

**Description:**

_Obsolete in 3.0._ This directive is no longer supported. If you wish to create an Uninstall icon, use the new {uninstallexe} constant in the Filename parameter of an [Icons] section entry.

[Setup] AlwaysRestart
---------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to yes, Setup will always prompt the user to restart the system at the end of a successful installation, regardless of whether this is necessary (for example, because of [Files] section entries with the restartreplace flag).

[Setup] AlwaysShowComponentsList
--------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If this directive is set to yes, Setup will always show the components list for customizable setups. If this is set to no Setup will only show the components list if the user selected a custom type from the type list.

[Setup] AlwaysShowDirOnReadyPage
--------------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this directive is set to yes, Setup will always show the selected directory in the list of settings on the _Ready to Install_ wizard page. If this is set to no, Setup will not show the selected directory if DisableDirPage is yes.

[Setup] AlwaysShowGroupOnReadyPage
----------------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this directive is set to yes, Setup will always show the selected Start Menu folder name in the list of settings on the _Ready to Install_ wizard page. If this is set to no, Setup will not show the selected Start Menu folder name if DisableProgramGroupPage is yes.

If no Start Menu folder is going to be created by Setup, this directive is effectively ignored.

[Setup] AlwaysUsePersonalGroup
------------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

Normally, Inno Setup's {group} constant points to the All Users start menu if the user has administrative privileges. If this directive is set to yes, it always uses current user's profile.

You should be careful about using this option: it may not achieve what you are intending. The compiler will warn you about this, which can be disabled using [UsedUserAreasWarning].

[Setup] AppComments
-------------------

**Description:**

This string is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppComments=Hello.

[Setup] AppContact
------------------

**Description:**

This string is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppContact=My Company Customer Support

[Setup] AppCopyright
--------------------

**Description:**

Specifies a copyright message that Setup will display in the bottom-right corner of Setup's background window when [WindowVisible] is yes.

The value of this directive is also used as the default value for the [VersionInfoCopyright] directive if it is not specified.

Example:

    AppCopyright=Copyright (C) 1997-2005 My Company, Inc.

[Setup] AppendDefaultDirName
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

By default, when a folder in the dialog displayed by the _Browse..._ button on the _Select Destination Location_ wizard page is clicked, Setup automatically appends the last component of DefaultDirName onto the new path. For example, if DefaultDirName is {autopf}\My Program and "Z:\" is clicked, the new path will become "Z:\My Program".

Setting this directive to no disables the aforementioned behavior. In addition, it causes a _Make New Folder_ button to appear on the dialog.

[Setup] AppendDefaultGroupName
------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

By default, when a folder in the dialog displayed by the _Browse..._ button on the _Select Start Menu Folder_ wizard page is clicked, Setup automatically appends the last component of DefaultGroupName onto the new path. For example, if DefaultGroupName is My Program and "Accessories" is clicked, the new path will become "Accessories\My Program".

Setting this directive to no disables the aforementioned behavior. In addition, it causes a _Make New Folder_ button to appear on the dialog.

[Setup] AppId
-------------

*Default value:* [AppName]

**Description:**

The value of AppId is stored inside uninstall log files (unins???.dat), and is checked by subsequent installations to determine whether it may [append to a particular existing uninstall log]. Setup will only append to an uninstall log if the AppId of the existing uninstall log is the same as the current installation's AppId. For a practical example, say you have two installations -- one entitled _My Program_ and the other entitled _My Program 1.1 Update._ To get My Program 1.1 Update to append to My Program's uninstall log, you would have to set AppId to the same value in both installations.

AppId also determines the actual name of the Uninstall registry key, to which Inno Setup tacks on "_is1" at the end. (Therefore, if AppId is "MyProgram", the key will be named "MyProgram_is1".) Pre-1.3 versions of Inno Setup based the key name on the value of AppVerName.

AppId is a not used for display anywhere, so feel free to make it as cryptic as you desire. The value may include constants.

If you use a {code:..} constant to allow your user to customize AppId, you do not need to return the real value until just before the installation starts: if necessary you may return an empty or generic value at earlier times. If not empty, this value will only be used to attempt to restore previous install settings (like the settings stored by [Setup] section directive [UsePreviousAppDir]). If empty, it isn't used for anything.

The length of AppId with all constants evaluated should never exceed 127 characters.

Example:

    AppId=MyProgram

[Setup] AppModifyPath
---------------------

**Description:**

When this directive is set, a separate "Modify" button in the Add/Remove Programs Control Panel applet will be displayed. Setting it is optional. The value may include constants.

Example:

    AppModifyPath="{app}\Setup.exe" /modify=1

[Setup] AppMutex
----------------

**Description:**

This directive is used to prevent the user from installing new versions of an application while the application is still running, and to prevent the user from uninstalling a running application. It specifies the names of one or more named mutexes (multiple mutexes are separated by commas), which Setup and Uninstall will check for at startup. If any exist, Setup/Uninstall will display the message: "[Setupor Uninstall\] has detected that [AppName] is currently running. Please close all instances of it now, then click OK to continue, or Cancel to exit." The value may include constants.

Use of this directive requires that you add code to your application which creates a mutex with the name you specify in this directive. Examples of creating a mutex in Delphi, C, and Visual Basic are shown below. The code should be executed during your application's startup.

Delphi:

    CreateMutex(nil, False, 'MyProgramsMutexName');

C:

    CreateMutex(NULL, FALSE, "MyProgramsMutexName");

Visual Basic (submitted by Peter Young):

    'Place in Declarations section:
    Private Declare Function CreateMutex Lib "kernel32" _
            Alias "CreateMutexA" _
           (ByVal lpMutexAttributes As Long, _
            ByVal bInitialOwner As Long, _
            ByVal lpName As String) As Long

    'Place in startup code (Form_Load or Sub Main):
    CreateMutex 0&, 0&, "MyProgramsMutexName"

It is not necessary to explicitly destroy the mutex object upon your application's termination; the system will do this automatically. Nor is it recommended that you do so, because ideally the mutex object should exist until the process completely terminates.

Note that mutex name comparison in Windows is _case sensitive._

To specify a mutex name containing a comma, escape the comma with a backslash.

See the topic for CreateMutex in the MS SDK help for more information on mutexes.

Example:

    AppMutex=MyProgramsMutexName,Global\MyProgramsMutexName

**See also:**  
[SetupMutex]  
[CloseApplications]

[Setup] AppName
---------------

**Description:**

This required directive specifies the name of the application being installed. Do not include the version number, as that is defined by the [AppVersion] and/or [AppVerName] directives. AppName is displayed throughout the Setup program and uninstaller in window titles, wizard pages, and dialog boxes. The value may include constants.

If [DisableWelcomePage] is set to yes (which it is by default) then [AppVerName] is displayed in window titles instead of AppName.

The value of this directive is also used as the default value for the [AppId], [VersionInfoDescription], and [VersionInfoProductName] directives if those are not specified.

Example:

    AppName=My Program

**See also:**  
[AppVerName]

[Setup] AppPublisher
--------------------

**Description:**

This string is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

The value of this directive is also used as the default value for the [VersionInfoCompany] directive if it is not specified.

Example:

    AppPublisher=My Company, Inc.
    AppPublisherURL=http://www.example.com/

[Setup] AppPublisherURL
-----------------------

**Description:**

A link to the specified URL is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppPublisher=My Company, Inc.
    AppPublisherURL=http://www.example.com/

[Setup] AppReadmeFile
---------------------

**Description:**

This string, which may be a URL, is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppReadmeFile=http://www.example.com/readme.html

[Setup] AppSupportPhone
-----------------------

**Description:**

This string is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppSupportPhone=1-800-555-1212

[Setup] AppSupportURL
---------------------

**Description:**

A link to the specified URL is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppSupportURL=http://www.example.com/support.html

[Setup] AppUpdatesURL
---------------------

**Description:**

A link to the specified URL is displayed on the "Support" dialog of the _Add/Remove Programs_ Control Panel applet. The value may include constants.

Example:

    AppUpdatesURL=http://www.example.com/updates.html

[Setup] AppVerName
------------------

*Default value:* [AppName] version [AppVersion], localized according to the active language's NameAndVersion [custom message]

**Description:**

This directive specifies the name of the application plus its version number. The value of this directive is displayed on the _Welcome_ page of Setup's wizard, and is used as the default title of the application's _Add/Remove Programs_ entry (see [UninstallDisplayName]). The value may include constants.

If [DisableWelcomePage] is set to yes (which it is by default) then AppVerName is also displayed in window titles instead of [AppName].

This directive is required if the [AppVersion] directive is not set.

Examples:

    AppVerName=My Program 1.5
    AppVerName=My Program version 1.5
    AppVerName={cm:NameAndVersion,My Program,1.5}

**See also:**  
[AppName]

[Setup] AppVersion
------------------

**Description:**

This directive specifies the version number of the application being installed. The value of this directive, which may include constants, is used in the default value for the [AppVerName] directive, and is displayed in the Version field of the application's _Add/Remove Programs_ entry. It is also used to set the MajorVersion and MinorVersion values in the Uninstall registry key when possible.

This directive is required and cannot be empty if the [AppVerName] directive is not set.

Example:
    
    AppVersion=1.5

[Setup] ArchitecturesAllowed
----------------------------

*Valid values:* One or more of the following, separated by spaces: x86 x64 arm64 ia64

*Default value:* _(blank)_

**Description:**

Specifies which processor architecture(s) Setup is allowed to run on. If this directive is not specified or is blank, Setup will be allowed to run on all processor architectures capable of executing its 32-bit code (including ones it doesn't recognize). Otherwise, if a user's processor architecture is not one of those specified in this directive, Setup will display an error message and exit.

If your application's binaries are all 32-bit and run in user mode, you should not change this directive from its default value (specifically, don't set it to x86), because normally such binaries will run without issue on the 64-bit Windows via the WOW64 emulator.

If you install any 32-bit device drivers, you should set this directive to x86, as 32-bit device drivers cannot function on 64-bit Windows.

If your application's binaries are built for the x64, ARM64 or Itanium architectures, you should set this directive to either x64, arm64 or ia64 respectively.

**See also:**  
[ArchitecturesInstallIn64BitMode]

[Setup] ArchitecturesInstallIn64BitMode
---------------------------------------

*Valid values:* One or more of the following, separated by spaces: x64 arm64 ia64

*Default value:* _(blank)_

**Description:**

Specifies the 64-bit processor architecture(s) on which Setup should install in [64-bit install mode]. If this directive is not specified or is blank, Setup will always install in [32-bit install mode].

Normally, you should not change this directive from its default value unless your application contains native 64-bit binaries.

Be sure you have read the [64-bit Installation Limitations] topic before setting this directive.

If your application runs only on 64-bit processor architectures, you should set [ArchitecturesAllowed] to the same value as this directive to prevent Setup from running on 32-bit Windows.

**See also:**  
[ArchitecturesAllowed]

[Setup] ASLRCompatible
----------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

Specifies whether the compiler should set the "Dynamic Base" flag in the headers of the Setup and Uninstall programs. This feature is new to version 5.5.7 and defaults to yes; previous versions never set the flag.  [Setup]: BackColor, BackColor2 

[Setup] BackColor, BackColor2
-----------------------------

*Valid values:* A value in the form of $_bbggrr_, where rr, gg, and bb specify the two-digit intensities (in hexadecimal) for red, green, and blue respectively. Or it may be one of the following predefined color names: clBlack, clMaroon, clGreen, clOlive, clNavy, clPurple, clTeal, clGray, clSilver, clRed, clLime, clYellow, clBlue, clFuchsia, clAqua, clWhite.

*Default value:* clBlue for BackColor, clBlack for BackColor2

**Description:**

The BackColor directive specifies the color to use at the top (or left, if BackColorDirection=lefttoright) of the setup window's gradient background. BackColor2 specifies the color to use at the bottom (or right).

The setting of BackColor2 is ignored if BackSolid=yes.

Examples:

    BackColor=clBlue
    BackColor2=clBlack

    BackColor=$FF0000
    BackColor2=$000000

[Setup] BackColorDirection
--------------------------

*Valid values:* toptobottom or lefttoright

*Default value:* toptobottom

**Description:**

This determines the direction of the gradient background on the setup window. If BackColorDirection is toptobottom, it is drawn from top to bottom; if it is lefttoright, it is drawn from left to right.

[Setup] BackSolid
-----------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

This specifies whether to use a solid or gradient background on the setup window. If this is yes, the background is a solid color (the color specified by BackColor; BackColor2 is ignored).

[Setup] ChangesAssociations
---------------------------

*Valid values:* [yes or no], or a [boolean expression]

*Default value:* no

**Description:**

When set to yes or to a [boolean expression] evaluating to True, Setup will tell Explorer to refresh its file associations information at the end of the installation, and Uninstall will do the same at the end of uninstallation.

If your installation creates a file association but doesn't have ChangesAssociations set to yes, the correct icon for the file type likely won't be displayed until the user logs off or restarts the computer.

[Setup] ChangesEnvironment
--------------------------

*Valid values:* [yes or no], or a [boolean expression]

*Default value:* no

**Description:**

When set to yes or to a [boolean expression] evaluating to True, at the end of the installation Setup will notify other running applications (notably Windows Explorer) that they should reload their environment variables from the registry.

If your installation creates or changes an environment variable but doesn't have ChangesEnvironment set to yes, the new/changed environment variable will not be seen by applications launched from Explorer until the user logs off or restarts the computer.

[Setup] CloseApplications
-------------------------

*Valid values:* force, [yes, or no]

*Default value:* yes

**Description:**

If set to yes or force and Setup is not running silently, Setup will pause on the _Preparing to Install_ wizard page if it detects applications using files that need to be updated by the [Files] or [InstallDelete] section, showing the applications and asking the user if Setup should automatically close the applications and restart them after the installation has completed.

If set to yes or force and Setup is running silently, Setup will always close and restart such applications, unless told not to via the command line.

If set to force Setup will force close when closing applications, unless told not to via the command line. Use with care since this may cause the user to lose unsaved work.

Note: Setup uses Windows [Restart Manager](https://docs.microsoft.com/en-us/windows/win32/rstmgr/about-restart-manager "https://docs.microsoft.com/en-us/windows/win32/rstmgr/about-restart-manager") to detect, close, and restart applications.

**See also:**  
[CloseApplicationsFilter]  
[RegisterExtraCloseApplicationsResources]  
[RestartApplications]  
[AppMutex]

[Setup] CloseApplicationsFilter
-------------------------------

*Valid values:* A list of file name wildcards, separated by commas

*Default value:* *.exe,*.dll,*.chm

**Description:**

Limits which [Files] and [InstallDelete] entries Setup will check for being in use. Only files matching one of the wildcards will be checked.

Setting this to *.* can provide better checking at the expense of speed.

**See also:**  
[CloseApplications]  
[RestartApplications]

[Setup] Compression
-------------------

*Valid values:* 

    zip
    zip/1 through zip/9  
    bzip  
    bzip/1 through bzip/9  
    lzma  
    lzma/fast  
    lzma/normal  
    lzma/max  
    lzma/ultra   (review memory requirements below before using)  
    lzma/ultra64   (review memory requirements below before using)  
    lzma2  
    lzma2/fast  
    lzma2/normal  
    lzma2/max  
    lzma2/ultra   (review memory requirements below before using)  
    lzma2/ultra64   (review memory requirements below before using)  
    none

*Default value:* lzma2/max

**Description:**

This specifies the method of compression to use on the files, and optionally the level of compression. Higher levels compress better but take longer doing so, and may also require more memory while compressing/decompressing.

zip is the method of compression employed by .zip files ("deflate"). It is fast in both compression and decompression, and has very low memory requirements (less than 1 MB for both compression and decompression at level 9), but generally does not compress nearly as well as the other supported methods. zip, like lzma2, has one special property, though: it will not expand incompressible data (e.g., files that are already compressed). If a compression level isn't specified, it defaults to 7.

bzip is the method of compression employed by the [bzip2](http://www.bzip.org/ "http://www.bzip.org/") compressor. It almost always compresses better than zip but is usually slower in both compression and decompression. Up to 4 MB of memory is required during decompression, and up to 8 MB during compression. If a compression level isn't specified, it defaults to 9.

lzma is the method of compression employed by the [7-Zip LZMA](http://www.7-zip.org/ "http://www.7-zip.org/") compressor. It typically compresses significantly better than the zip and bzip methods. However, depending on the compression level used, it can be significantly slower at compressing, and consume a _lot_ more memory. The following table summarizes the approximate memory requirements for each of the supported lzma compression levels. If a compression level isn't specified, it defaults to max.

                     Decompression         Compression 
                     (dictionary size)     (4 MB + 11 * dictionary size) 
    ===============|=====================|============================
    fast (worst)   | 32 KB               | 3 MB 
    normal         | 2 MB                | 26 MB 
    max (default)  | 8 MB                | 92 MB 
    ultra          | 32 MB               | 356 MB 
    ultra64 (best) | 64 MB               | 708 MB 
                   | 128 MB              | 1.38 GB 
                   | 256 MB              | 2.75 GB 
                   | 512 MB              | 5.5 GB 
                   | 1 GB                | 11 GB 

lzma2 is the method of compression employed by the [7-Zip LZMA2](http://www.7-zip.org/ "http://www.7-zip.org/") compressor. LZMA2 is a modified version of LZMA that offers a better compression ratio for incompressible data (random data expands about 0.005%, compared to 1.35% with original LZMA), and optionally can compress multiple parts of large files in parallel, greatly increasing compression speed but with a possible reduction in compression ratio (see [LZMANumBlockThreads]). Like LZMA, it can consume a _lot_ of memory; see the above table. If a compression level isn't specified, it defaults to max.

none specifies that no compression be used.

**See also:**  
[SolidCompression]  
[LZMAAlgorithm]  
[LZMABlockSize]  
[LZMADictionarySize]  
[LZMAMatchFinder]  
[LZMANumBlockThreads]  
[LZMANumFastBytes]  
[LZMAUseSeparateProcess]

[Setup] CompressionThreads
--------------------------

*Valid values:* auto 1 2 (or higher)

*Default value:* auto

**Description:**

Controls whether the multi-threaded match finder is enabled on the LZMA and LZMA2 compressors. Enabling the multi-threaded match finder can speed up the compression process by 50% or more on systems with multiple processor cores, and 20% or more on systems with Intel processors featuring Hyper-Threading Technology.

A value of auto (the default) enables the multi-threaded match finder for all compression levels except fast, which doesn't support it.

A value of 1 always disables the multi-threaded match finder.

Values of 2 or higher are currently equivalent to auto.

Note that for the LZMA2 compressor, this directive only controls whether the multi-threaded match finder is used. To enable support for compressing multiple parts of large files in parallel, set [LZMANumBlockThreads].

**See also:**  
[LZMANumBlockThreads]

[Setup] CreateAppDir
--------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If this is set to no, no directory for the application will be created, the _Select Destination Location_ wizard page will not be displayed, and the {app} directory constant is equivalent to the {win} directory constant. If the uninstall feature is enabled when CreateAppDir is no, the uninstall data files are created in the system's Windows directory.

[Setup] CreateUninstallRegKey
-----------------------------

*Valid values:* [yes or no], or a [boolean expression]

*Default value:* yes

**Description:**

If this is set to no or to a [boolean expression] evaluating to False, Setup won't create an entry in the _Add/Remove Programs_ Control Panel applet.

Setting this to no can be useful if your installation is merely an update to an existing application and you don't want another entry created, but don't want to the disable the uninstall features entirely (via Uninstallable=no). In this case, [UpdateUninstallLogAppName] is usually set to no as well.

**See also:**  
[Uninstallable]

[Setup] DefaultDialogFontName
-----------------------------

*Default value:* Tahoma

**Description:**

Specifies the name of the font that should be used in dialogs on languages that do not set DialogFontName in their [[LangOptions] section].

If the specified font name does not exist on the user's system or is an empty string, 8-point Microsoft Sans Serif or MS Sans Serif will be substituted.

Prior to the introduction of the DefaultDialogFontName directive in Inno Setup 5.3.9, the default dialog font name was always an empty string.

[Setup] DefaultDirName
----------------------

**Description:**

The value of this required directive is used for the default directory name, which is used in the _Select Destination Location_ page of the wizard. Normally it is prefixed by a directory constant.

If [UsePreviousAppDir] is yes (the default) and Setup finds a previous version of the [same application] is already installed, it will substitute the default directory name with the directory selected previously.

Examples:

**If you used:**  

    DefaultDirName={sd}\MYPROG

**In Setup, this would typically display:**  

    C:\MYPROG  
  
**If you used:**  

    DefaultDirName={autopf}\My Program

**In Setup, this would typically display:**  

    C:\Program Files\My Program

[Setup] DefaultGroupName
------------------------

**Description:**

The value of this directive is used for the default Start Menu folder name on the _Select Start Menu Folder_ page of the wizard. If this directive is blank or isn't specified, it will use "(Default)" for the name.

Keep in mind that Start Menu folders are stored as literal directories so any characters not allowed in normal directory names can't be used in Start Menu folder names.

Example:

    DefaultGroupName=My Program

[Setup] DefaultUserInfoName
---------------------------

*Default value:* {sysuserinfoname}

**Description:**

Specifies the default name shown on the _User Information_ wizard page. This can include constants.

[Setup] DefaultUserInfoOrg
--------------------------

*Default value:* {sysuserinfoorg}

**Description:**

Specifies the default organization shown on the _User Information_ wizard page. This can include constants.

[Setup] DefaultUserInfoSerial
-----------------------------

**Description:**

Specifies the default serial number shown on the _User Information_ wizard page. This can include constants.

[Setup] DEPCompatible
---------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

Specifies whether the compiler should set the "NX Compatible" flag in the headers of the Setup and Uninstall programs to mark them compatible with data execution prevention (DEP). This feature is new to version 5.5.7 and defaults to yes; previous versions never set the flag.

Setting this to no might be needed if you're using a buggy third-party DLL from [Code].

[Setup] DirExistsWarning
------------------------

*Valid values:* auto, [yes, or no]

*Default value:* auto

**Description:**

When set to auto, the default setting, Setup will show a "The directory ... already exists. Would you like to install to that directory anyway?" message if the user selects a directory that already exists on the _Select Destination Location_ wizard page, except when another version of the [same application] is already installed and the selected directory is the same as the previous one (only if UsePreviousAppDir is yes, the default setting).

When set to yes, Setup will always display the "Directory Exists" message when the user selects an existing directory.

When set to no, Setup will never display the "Directory Exists" message.

[Setup] DisableAppendDir
------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

_Obsolete in 4.1.2._ Pre-4.1.2 versions of Inno Setup had a different directory selection interface, and the DisableAppendDir directive was used to control its behaviour.

[Setup] DisableDirPage
----------------------

*Valid values:* auto, [yes, or no]

*Default value:* auto

**Description:**

If this is set to yes, Setup will not show the _Select Destination Location_ wizard page.

If this is set to auto, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will not show the _Select Destination Location_ wizard page.

If the _Select Destination Location_ wizard page is not shown, it will always use the default directory name.

Also see [AlwaysShowDirOnReadyPage].

[Setup] DisableFinishedPage
---------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this is set to yes, Setup will not show the _Setup Completed_ wizard page, and instead will immediately close the Setup program once the installation process finishes. This may be useful if you execute a program in the [Run] section using the nowait flag, and don't want the _Setup Completed_ window to remain in the background after the other program has started.

Note that the DisableFinishedPage directive is ignored if a restart of the computer is deemed necessary, or if a file is assigned to the InfoAfterFile [Setup] section directive. In those cases, the _Setup Completed_ wizard page will still be displayed.

[Setup] DisableProgramGroupPage
-------------------------------

*Valid values:* auto, [yes, or no]

*Default value:* auto

**Description:**

If this is set to yes, Setup will not show the _Select Start Menu Folder_ wizard page.

If this is set to auto, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will not show the _Select Start Menu Folder_ wizard page.

If the _Select Start Menu Folder_ wizard page is not shown, it will always use the default Start Menu folder name.

Also see [AlwaysShowGroupOnReadyPage].

[Setup] DisableReadyMemo
------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this is set to yes, Setup will not show a list of settings on the _Ready to Install_ wizard page. Otherwise the list is shown and contains information like the chosen setup type and the chosen components.

[Setup] DisableReadyPage
------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this is set to yes, Setup will not show the _Ready to Install_ wizard page.

When Setup is not running silently, this directive is ignored if no other wizard page before the _Ready to Install_ wizard page has been shown yet.

Setting this to yes does not automatically change the caption of the _Next_ button on the new last pre-installation wizard page to _Install_. You must do so manually instead. For example, if the new last pre-installation wizard page is the _Select Program Group_ page:

Example:

    [Setup]
    DisableReadyPage=yes

    [Code]
    procedure CurPageChanged(CurPageID: Integer);
    begin
      if CurPageID = wpSelectProgramGroup then
        WizardForm.NextButton.Caption := SetupMessage(msgButtonInstall)
      else
        WizardForm.NextButton.Caption := SetupMessage(msgButtonNext);
    end;

[Setup] DisableStartupPrompt
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this is set to yes, Setup will not show the _This will install... Do you wish to continue?_ prompt.

This setting has no effect if UseSetupLdr is set to no.

[Setup] DisableWelcomePage
--------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If this is set to yes, Setup will not show the _Welcome_ wizard page.

[Setup] DiskClusterSize
-----------------------

*Default value:* 512 (the standard cluster size for floppy disks)

**Description:**

This specifies the cluster size of the disk media. The compiler needs to know this in order to properly fill each disk to capacity.

This directive is ignored if disk spanning is not enabled using the DiskSpanning [Setup] section directive.

[Setup] DiskSliceSize
---------------------

*Valid values:* 262144 through 2100000000, or max

*Default value:* max (2100000000)

**Description:**

This specifies the maximum number of bytes per disk slice (`SETUP-*.BIN` file). Normally, this should be set to the total number of bytes available on the disk media divided by the value of the SlicesPerDisk [Setup] section directive, which defaults to 1.

This directive is ignored if disk spanning is not enabled using the DiskSpanning [Setup] section directive.

To optimally fill 4.7 GB recordable DVDs, use:

    SlicesPerDisk=3
    DiskSliceSize=1566000000

To optimally fill 8.5 GB (dual-layer) recordable DVDs, use:

    SlicesPerDisk=5
    DiskSliceSize=1708200000

To optimally fill 700 MB (80-minute) recordable CDs, use:

    SlicesPerDisk=1
    DiskSliceSize=736000000

To optimally fill 1.44MB floppy disks, use:

    SlicesPerDisk=1
    DiskSliceSize=1457664

[Setup] DiskSpanning
--------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If set to yes, the disk spanning feature will be enabled. Instead of storing all the compressed file data inside SETUP.EXE, the compiler will split it into multiple `SETUP-*.BIN` files -- known as "slices" -- suitable for copying onto separate floppy disks, CD-ROMs, or DVD-ROMs. Each generated slice contains a number in its name which indicates the disk onto which it should be copied. (For example, SETUP-2.BIN should be placed on disk 2.) The generated SETUP.EXE always goes on disk 1 along with the SETUP-1*.BIN file.

The size of each slice and the number of slices to create for each disk are determined by the values of the [DiskSliceSize] and [SlicesPerDisk] [Setup] section directives, respectively. Other disk spanning-related directives that you may want to tweak include [DiskClusterSize] and [ReserveBytes].

Note that it is required that you set this directive to yes if the compressed size of your installation exceeds 2,100,000,000 bytes, even if you don't intend to place the installation onto multiple disks. (The installation will still function correctly if all the `SETUP-*.BIN` files are placed on the same disk.)


[Setup] DontMergeDuplicateFiles
-------------------------------

*Valid values:* [yes or no]

**Description:**

_Obsolete in 4.2.5._ Use [MergeDuplicateFiles] instead.

MergeDuplicateFiles=no is equivalent to DontMergeDuplicateFiles=yes.

[Setup] EnableDirDoesntExistWarning
-----------------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to yes, Setup will display a message box if the directory the user selects doesn't exist. Usually you will also set DirExistsWarning=no when this is yes.

[Setup] Encryption
------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If set to yes, files that are compiled into the installation (via [Files] section entries) will be encrypted using ARCFOUR encryption, with a 160-bit key derived from the value of the [Password] [Setup] section directive.

Because of encryption import/export laws in some countries, encryption support is not included in the main Inno Setup installer but downloaded by it instead. See the [Inno Setup Downloads](https://jrsoftware.org/isdl.php "https://jrsoftware.org/isdl.php") page for more information.

If encryption is enabled and you call the [ExtractTemporaryFile] function from the [Code] section prior to the user entering the correct password, the function will fail unless the noencryption flag is used on the [Files] section entry for the file.

The key used for encryption is a 160-bit SHA-1 hash of 64-bit random salt plus the value of [Password].

[Setup] ExtraDiskSpaceRequired
------------------------------

*Default value:* 0

**Description:**

Normally, the disk space requirement displayed on the wizard is calculated by adding up the size of all the files in the [Files] section. If you want to increase the disk space display for whatever reason, set ExtraDiskSpaceRequired to the amount of bytes you wish to add to this figure. (1048576 bytes = 1 megabyte)

[Setup] FlatComponentsList
--------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is set to yes, Setup will use 'flat' checkboxes for the components list. Otherwise Setup will use '3D' checkboxes.

[Setup] InfoAfterFile
---------------------

**Description:**

Specifies the name of an optional "readme" file, in .txt or .rtf (rich text) format, which is displayed after a successful install. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

This differs from isreadme files in that this text is displayed as a page of the wizard, instead of in a separate Notepad window.

If the user selects a language for which the InfoAfterFile parameter is set, this directive is effectively ignored. See the [[Languages] section] documentation for more information.

Example:

InfoAfterFile=infoafter.txt

[Setup] InfoBeforeFile
----------------------

**Description:**

Specifies the name of an optional "readme" file, in .txt or .rtf (rich text) format, which is displayed before the user selects the destination directory for the program. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

If the user selects a language for which the InfoBeforeFile parameter is set, this directive is effectively ignored. See the [[Languages] section] documentation for more information.

Example:

InfoBeforeFile=infobefore.txt

[Setup] InternalCompressLevel
-----------------------------

*Valid values:* none, or one of the [LZMA compression levels]

*Default value:* normal

**Description:**

This specifies the level of LZMA compression to use on Setup's internal structures. Generally, there is little reason to change this from the default setting of normal.

[Setup] LanguageDetectionMethod
-------------------------------

*Valid values:* uilanguage, locale, none

*Default value:* uilanguage

**Description:**

When set to uilanguage, Setup will determine the default language to use by checking the user's "UI language" (by calling GetUserDefaultUILanguage(), or on Windows versions where that function is unsupported, by reading the registry). This is the method that Microsoft recommends. The "UI language" is the language used in Windows' own dialogs. Thus, on an English edition of Windows, English will be the default, while on a Dutch edition of Windows, Dutch will be the default. On the MUI edition of Windows, the default will be the currently selected UI language.

When set to locale, Setup will determine the default language to use by calling GetUserDefaultLangID(). This function returns the setting of "Your locale" in Control Panel's Regional Options. It should however be noted that the "Your locale" option is not intended to affect languages; it is only documented to affect "numbers, currencies, times, and dates".

When set to none, Setup will use the first language specified in the [Languages] section as the default language.

[Setup] LicenseFile
-------------------

**Description:**

Specifies the name of an optional license agreement file, in .txt or .rtf (rich text) format, which is displayed before the user selects the destination directory for the program. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

If the user selects a language for which the LicenseFile parameter is set, this directive is effectively ignored. See the [[Languages] section] documentation for more information.

Example:

LicenseFile=license.txt

[Setup] LZMAAlgorithm
---------------------

*Valid values:* 0 or 1

*Default value:* 0 if the [LZMA compression level] is set to fast
1 otherwise

**Description:**

Controls the algorithm used by the LZMA and LZMA2 compressors.

A value of 0 enables the fast algorithm.

A value of 1 enables the normal algorithm.

[Setup] LZMABlockSize
---------------------

*Valid values:* 1024 through 262144

*Default value:* 4 * [LZMADictionarySize] with a minimum of 1024 and a maximum of 262144

**Description:**

Controls the block size used by the LZMA2 compressor, in kilobytes, when [LZMANumBlockThreads] is set to 2 or higher.

Note that setting this too high can negate the benefits of using multiple block threads. Typically, the block size should be no more than the total size of your data divided by the number of block threads.

**See also:**  
[LZMADictionarySize]  
[LZMANumBlockThreads]

[Setup] LZMADictionarySize
--------------------------

*Valid values:* 4 through 131072 (by default)
4 through 1048576 if [LZMAUseSeparateProcess] is set to yes and running on 64-bit Windows (x64)

*Default value:* 32 if the [LZMA compression level] is set to fast
2048 if the LZMA compression level is set to normal  
8192 if the LZMA compression level is set to max  
32768 if the LZMA compression level is set to ultra  
65536 if the LZMA compression level is set to ultra64

**Description:**

Controls the dictionary size used by the LZMA and LZMA2 compressors, in kilobytes. A larger dictionary size can provide a better compression ratio at the expense of compression speed and memory requirements.

Review the memory requirements listed in the [Compression] topic before using.

If an "Out of memory" error is seen after increasing the dictionary size, [LZMAUseSeparateProcess] may need to be set.

**See also:**  
[LZMABlockSize]

[Setup] LZMAMatchFinder
-----------------------

*Valid values:* HC or BT

*Default value:* HC if the [LZMA compression level] is set to fast
BT otherwise

**Description:**

Controls the match finder method used by the LZMA and LZMA2 compressors.

A value of HC enables the Hash Chain method with 4 hash bytes.

A value of BT enables the Binary Tree method with 4 hash bytes.

The Binary Tree method can provide a better compression ratio at the expense of compression speed.

[Setup] LZMANumBlockThreads
---------------------------

*Valid values:* 1 through 32

*Default value:* 1

**Description:**

When compressing a large amount of data, the LZMA2 compressor has the ability to divide the data into "blocks" and compress two or more of these blocks in parallel through the use of additional threads (provided sufficient processor power is available). This directive specifies the number of threads to use -- that is, the maximum number of blocks that the LZMA2 compressor may compress in parallel.

The memory required during compression when multiple block threads are used is roughly:

LZMANumBlockThreads * ([Normal memory usage] + ([LZMABlockSize] * 2))

Since LZMA2 (and LZMA) uses two threads for match-finding by default (see [CompressionThreads]), there ideally should be two processor cores available for each block thread. Thus, to see the maximum benefit from a value of 2, four cores are needed.

Dividing the data into multiple blocks can reduce the compression ratio, as the compressor cannot find matches across blocks. Using a large [block size] can help to mitigate this.

If an "Out of memory" error is seen when multiple block threads are enabled in combination with a compression level that uses a large dictionary size (such as ultra64), [LZMAUseSeparateProcess] may need to be set.

**See also:**  
[LZMABlockSize]

[Setup] LZMANumFastBytes
------------------------

*Valid values:* 5 through 273

*Default value:* 64 if the [LZMA compression level] is set to max, ultra, or ultra64
32 otherwise

**Description:**

Controls number of fast bytes used by the LZMA and LZMA2 compressors. A larger number of fast bytes can provide a better compression ratio at the expense of compression speed.

[Setup] LZMAUseSeparateProcess
------------------------------

*Valid values:* [yes, no], or x86

*Default value:* no

**Description:**

Controls whether LZMA compression is performed inside the main compiler process or in a separate process.

Using a separate process for LZMA compression allows the compressor to allocate larger amounts of memory, which makes it possible for higher [LZMADictionarySize] and [LZMANumBlockThreads] settings to be used. Additionally, on 64-bit Windows (x64), a small increase in compression speed may be observed.

On 64-bit Windows (x64), there are no limitations on the amount of memory the compressor may use, as it runs inside a native 64-bit process. On 32-bit Windows, however, due to address space constraints, typically only about 1.5 GB is available for use by the compressor.

A value of yes enables the use of a 64-bit process on 64-bit Windows (x64), and a 32-bit process on 32-bit Windows.

A value of x86 enables the use of a 32-bit process only (normally only useful for debugging purposes).

A value of no disables the use of a separate process for LZMA compression.

Note that this directive only affects the compression of files specified in the [Files] section; compression of Setup's internal structures is always performed inside the main compiler process.

[Setup] MergeDuplicateFiles
---------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

Normally two file entries referring to the same source file will be compressed and stored only once. If you have a bunch of identical files in your installation, make them point to the same source file in the script, and the size of your installation can drop significantly. If you wish to disable this feature for some reason, set this directive to no.

[Setup] MessagesFile
--------------------

**Description:**

_Obsolete in 4.0._ This directive is no longer supported. Use the new [[Languages] section] to specify a custom messages file.

[Setup] MinVersion
------------------

Format:

_major_._minor_

*Default value:* 6.1sp1 (Windows 7 with Service Pack 1 or Windows Server 2008 R2 with Service Pack 1)

**Description:**

This directive lets you specify a minimum [version of Windows] that your software runs on. [Build numbers and/or service pack levels] may be included.

If the user's system does not meet the minimum version requirement, Setup will give an error message and exit.

[Setup] MissingMessagesWarning
------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

This directive lets you disable warnings about messages missing for a language.

**See also:**  
[NotRecognizedMessagesWarning]

[Setup] MissingRunOnceIdsWarning
--------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

This directive lets you disable the missing RunOnceIds warning. See [RunOnceId] for more information.

[Setup] NotRecognizedMessagesWarning
------------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

This directive lets you disable warnings about messages not recognized for a language.

**See also:**  
[MissingMessagesWarning]

[Setup] OnlyBelowVersion
------------------------

Format:

_major_._minor_

*Default value:* 0

**Description:**

This directive lets you specify a minimum [version of Windows] that your software _will not_ run on. Specifying "0" means there is no upper version limit. [Build numbers and/or service pack levels] may be included.

This directive is essentially the opposite of [MinVersion].

[Setup] Output
--------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to no the compiler will only check the script for errors and skip creating setup files. Note: it will still clean the output directory and delete the manifest file, unless OutputDir and OutputManifestFile are set to an empty string.

[Setup] OutputBaseFilename
--------------------------

*Default value:* mysetup

**Description:**

This directive allows you to assign a different name for the resulting Setup file(s), so you don't have to manually rename them after running the compiler.

Setting this to setup is not recommended: all executables named "setup.exe" are shimmed by Windows application compatibility to load additional DLLs, such as version.dll. These DLLs are loaded unsafely by Windows and can be hijacked.

Example:

OutputBaseFilename=MyProg100

[Setup] OutputDir
-----------------

*Default value:* Output

**Description:**

Specifies the "output" directory for the script, which is where the compiler will place the resulting SETUP.* files. By default, it creates a directory named "Output" under the directory containing the script for this.

If OutputDir is not a fully-qualified pathname, it will be treated as being relative to SourceDir, unless the pathname is prefixed by "userdocs:", in which case it will be treated as being relative to the the My Documents folder of the currently logged-in user. Setting OutputDir to . will result in the files being placed in the source directory.

Example:

OutputDir=c:\output

[Setup] OutputManifestFile
--------------------------

**Description:**

When this directive is set, the compiler will create a manifest file detailing information about the files compiled into Setup. The file will be created in the [output directory] unless a path is included.

Example:

OutputManifestFile=Setup-Manifest.txt

[Setup] Password
----------------

**Description:**

Specifies a password you want to prompt the user for at the beginning of the installation.

When using a password, you might consider setting [Encryption] to yes as well, otherwise files will be stored as plain text and it would not be exceedingly difficult for someone to gain access to them through reverse engineering.

The password itself is not stored as clear text; it's stored as a 160-bit SHA-1 hash, salted with a 64-bit random number. (Note: When encryption is enabled, this stored hash is _not_ used for the encryption key; a different hash with a different salt is generated for that.)

[Setup] PrivilegesRequired
--------------------------

*Valid values:* admin, or lowest

*Default value:* admin

**Description:**

This directive affects whether elevated rights are requested (via a User Account Control dialog) when the installation is started.

When set to admin (the default), Setup will always run with administrative privileges and in [administrative install mode]. If Setup was started by an unprivileged user, Windows will ask for the password to an account that has administrative privileges, and Setup will then run under that account.

When set to lowest, Setup will not request to be run with administrative privileges even if it was started by a member of the Administrators group and will always run in [non administrative install mode]. Do not use this setting unless you are sure your installation will run successfully on unprivileged accounts.

**See also:**  
[PrivilegesRequiredOverridesAllowed]

[Setup] PrivilegesRequiredOverridesAllowed
------------------------------------------

*Valid values:* One or more of the following, separated by spaces:
commandline  
dialog

*Default value:* _(blank)_

**Description:**

Can be set to one or more overrides which allow the end user to override the script's default [PrivilegesRequired] setting.

If override commandline is allowed then Setup will support two additional command line parameters to override the script's default [PrivilegesRequired] setting: /ALLUSERS and /CURRENTUSER. See [Setup Command Line Parameters] for more details.

If override dialog is allowed then Setup will ask the user to choose the install mode based on the script's default [PrivilegesRequired] setting using a suppressible dialog. Allowing dialog automatically allows commandline and when one of the command line parameters is used then Setup will not ask the user.

**See also:**  
[UsePreviousPrivileges]

[Setup] ReserveBytes
--------------------

*Default value:* 0

**Description:**

This specifies the minimum number of free bytes to reserve on the first disk. This is useful if you have to copy other files onto the first disk that aren't part of the setup program, such as a Readme file.

The compiler rounds this number up to the nearest cluster.

This directive is ignored if disk spanning is not enabled using the DiskSpanning [Setup] section directive.

[Setup] RestartApplications
---------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When set to yes and [CloseApplications] is also set to yes, Setup restarts the closed applications after the installation has completed.

Note: For Setup to be able to restart an application after the installation has completed, the application needs to be using the Windows RegisterApplicationRestart API function.

**See also:**  
[CloseApplications]  
[CloseApplicationsFilter]

[Setup] RestartIfNeededByRun
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When set to yes, and a program executed in the [Run] section queues files to be replaced on the next reboot (by calling MoveFileEx or by modifying wininit.ini), Setup will detect this and prompt the user to restart the computer at the end of installation.

[Setup] SetupIconFile
---------------------

*Default value:* _(blank)_

**Description:**

Specifies a custom program icon to use for Setup/Uninstall. The file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

It is recommended to include at least the following sizes in your icon: 16x16, 32x32, 48x48, 64x64, and 256x256.

If this directive is not specified or is blank, a built-in icon supporting the above sizes will be used.

To use the old default icon set this directive to compiler:SetupClassicIcon.ico.

Example:

SetupIconFile=MyProgSetup.ico

[Setup] SetupLogging
--------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If set to yes, Setup will always create a log file. Equivalent to passing [/LOG] on the command line.

[Setup] SetupMutex
------------------

**Description:**

This directive is used to prevent Setup from running while Setup is already running. It specifies the names of one or more named mutexes (multiple mutexes are separated by commas), which Setup will check for at startup. If any exist, Setup will display the message: "Setup has detected that Setup is currently running. Please close all instances of it now, then click OK to continue, or Cancel to exit." If none exist, Setup will create the mutex(es) and continue normally. The value may include constants.

To specify a mutex name containing a comma, escape the comma with a backslash.

See the topic for CreateMutex in the MS SDK help for more information on mutexes.

Example:

SetupMutex=MySetupsMutexName,Global\MySetupsMutexName

**See also:**  
[AppMutex]

[Setup] ShowComponentSizes
--------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is set to yes, Setup will show the size of a component in the components list. Depending on the largest component, Setup will display sizes in kilobytes or in megabytes.

[Setup] ShowLanguageDialog
--------------------------

*Valid values:* [yes, no], or auto

*Default value:* yes

**Description:**

When set to yes and there are multiple [[Languages] section] entries, a _Select Language_ dialog will be displayed to give the user an opportunity to override the language Setup chose by default. See the [Languages] section documentation for more information.

When set to no, the dialog will never be displayed.

When set to auto, the dialog will only be displayed if Setup does not find a language identifier match.

**See also:**  
[UsePreviousLanguage]

[Setup] ShowTasksTreeLines
--------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When this directive is set to yes, Setup will show 'tree lines' between parent and sub tasks.

[Setup] SignedUninstaller
-------------------------

*Valid values:* [yes or no]

*Default value:* yes if a [SignTool] is set, no otherwise

**Description:**

Specifies whether the uninstaller program (unins???.exe) should be deployed with a digital signature attached. When the uninstaller has a valid digital signature, users will not see an "unknown publisher" warning when launching it.

The first time you compile a script with this directive set to yes, a uniquely-named copy of the uninstaller EXE file will be created in the directory specified by the [SignedUninstallerDir] directive (which defaults to the [output directory]). Depending on the [SignTool] setting, you will either then be prompted to attach a digital signature to this file using an external code-signing tool (such as Microsoft's signtool.exe) or the file will be automatically signed on the fly. On subsequent compiles, the signature from the file will be embedded into the compiled installations' uninstallers.

Upgrading to a newer version of Inno Setup, or changing certain [Setup] section directives that affect the contents of the uninstaller EXE file (such as [SetupIconFile] and VersionInfo directives), will cause a new file to be created under a different name.

If a file generated by this directive is deleted, it will be recreated automatically if necessary on the next compile.

When the uninstaller has a digital signature, Setup will write the messages from the active language into a separate file (unins???.msg). It cannot embed the messages into the EXE file because doing so would invalidate the digital signature.

When set to yes, any temporary self-copies used by Setup are digitally signed too.

Details on obtaining signing certificates and using code-signing tools are beyond the scope of this documentation.

[Setup] SignedUninstallerDir
----------------------------

*Default value:* [OutputDir]

**Description:**

Specifies the directory in which [signed uninstaller] files should be stored. By default, such files are stored in the [output directory].

Separate script files may share the same SignedUninstallerDir setting. By setting up a common directory to hold signed uninstaller files, you won't have to re-sign the uninstaller each time you compile a new script file with a distinct OutputDir setting.

If SignedUninstallerDir is not a fully-qualified pathname, it will be treated as being relative to SourceDir. Setting SignedUninstallerDir to . will result in the files being placed in the source directory.

Example:

SignedUninstallerDir=c:\signeduninstallers

[Setup] SignTool
----------------

*Valid values:* A name followed by zero or more parameters, space separated

**Description:**

Specifies the name and parameters of the Sign Tool to be used to digitally sign:

*   Setup
*   Uninstall if [SignedUninstaller] is set to yes
*   Original source files if the [Files] section's sign or signonce flag is used

When Setup has a valid digital signature, users will not see an "unidentified program" warning when launching it.

The specified Sign Tool name and its command have to be defined in the Compiler IDE (via the _Tools | Configure Sign Tools..._ menu) or on the [compiler command line] (via the "/S" parameter), else an error will occur.

The following special sequences may be used in Sign Tool parameters and commands:

$f, replaced by the quoted file name of the file to be signed. (required)

$p, replaced by the Sign Tool parameters.

$q, replaced by a quote, useful for defining a Sign Tool which contains quotes from the command line.

$$, replaced by a single $ character.

Example:

Assume the following Sign Tools have been defined in the Compiler IDE:

mystandard=signtool.exe sign /a /n $qMy Common Name$q /t http://timestamp.comodoca.com/authenticode /d $qMy Program$q $f
mycustom=signtool.exe $p
byparam=$p

then some examples would be:

[Setup]
SignTool=mystandard

[Setup]
SignTool=mycustom sign /a /n $qMy Common Name$q /t http://timestamp.comodoca.com/authenticode /d $qMy Program$q $f

[Setup]
SignTool=byparam signtool.exe sign /a /n $qMy Common Name$q /t http://timestamp.comodoca.com/authenticode /d $qMy Program$q $f

The Setup section may also list multiple SignTool directives which will be executed in order of appearance. This can be used to dual sign (SHA1 & SHA256) Setup and Uninstall:

[Setup]
SignTool=mycustom sign /a /n $qMy Common Name$q /fd sha1 /t http://timestamp.comodoca.com/authenticode /d $qMy Program$q $f
;the /as parameter in the following SignTool requires a recent signtool.exe version and a SHA256 (SHA-2) certificate
SignTool=mycustom sign /a /n $qMy Common Name$q /as /fd sha256 /td sha256 /tr http://timestamp.comodoca.com/rfc3161 /d $qMy Program$q $f

Note: for security reasons you should give a unique name to any Sign Tool set to $p, and not use a byparam name copied from this example. Consider what happens if you #include a third-party file that says:

[Setup]
SignTool=byparam format c: 

Further details on obtaining signing certificates and using code-signing tools are beyond the scope of this documentation.

_Note:_ If you use a Sign Tool and your Setup contains a large amount of data, it is recommended that you enable [Disk spanning] with [DiskSliceSize] set to max. If you don't do this, the user might experience a long delay after starting Setup caused by Windows verifying the digital signature against all your data. There should be no security reduction from using disk spanning in practice: all files extracted from the unsigned .bin files undergo SHA-1 verification (provided dontverifychecksum isn't used). The SHA-1 hashes for this (along with all other metadata) are kept inside Setup's EXE, which is protected by the digital signature.

**See also:**  
[SignToolMinimumTimeBetween]  
[SignToolRetryCount]  
[SignToolRunMinimized]

[Setup] SignToolMinimumTimeBetween
----------------------------------

*Default value:* 0

**Description:**

If not set to 0, specifies the minimum number of milliseconds that should have elapsed between consecutive digital signing actions by the compiler. For example, if set to 5000 then the compiler will perform 1 digital signing per 5 seconds at most. Can be used to avoid being rejected by rate limiting timestamp services.

**See also:**  
[SignTool]

[Setup] SignToolRetryCount
--------------------------

*Default value:* 2

**Description:**

Specifies the number of times the compiler should automatically retry digital signing on any errors.

**See also:**  
[SignTool]  
[SignToolRetryDelay]

[Setup] SignToolRetryDelay
--------------------------

*Default value:* 500

**Description:**

Specifies the number of milliseconds the compiler should wait before any automatic digital signing retries specified by [SignToolRetryCount].

**See also:**  
[SignTool]  
[SignToolRetryCount]

[Setup] SignToolRunMinimized
----------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to yes, the compiler will run Sign Tools in a minimized window.

**See also:**  
[SignTool]

[Setup] SlicesPerDisk
---------------------

*Valid values:* 1 through 26

*Default value:* 1

**Description:**

The number of `SETUP-*.BIN` files to create for each disk. If this is 1 (the default setting), the files will be named SETUP-_x_.BIN, where _x_ is the disk number. If this is greater than 1, the files will be named SETUP-_xy_.BIN, where _x_ is the disk number and _y_ is a unique letter.

One reason why you may need to increase this from the default value of 1 is if the size of your disk media exceeds 2,100,000,000 bytes -- the upper limit of the DiskSliceSize [Setup] section directive. If, for example, your disk media has a capacity of 3,000,000,000 bytes, you can avoid the 2,100,000,000-byte disk slice size limit by setting SlicesPerDisk to 2 and DiskSliceSize to 1500000000 (or perhaps slightly less, due to file system overhead).

[Setup] SolidCompression
------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If yes, solid compression will be enabled. This causes all files to be compressed at once instead of separately. This can result in a much greater overall compression ratio if your installation contains many files with common content, such as text files, especially if such common content files are grouped together within the [Files] section.

The disadvantage to using solid compression is that because all files are compressed into a single compressed stream, Setup can no longer randomly access the files. This can decrease performance. If a certain file isn't going to be extracted on the user's system, it has to decompress the data for that file anyway (into memory) before it can decompress the next file. And if, for example, there was an error while extracting a particular file and the user clicks Retry, it can't just seek to the beginning of that file's compressed data; since all files are stored in one stream, it has seek to the very beginning. If disk spanning was enabled, the user would have to re-insert disk 1.

[Setup] SourceDir
-----------------

**Description:**

Specifies a new [source directory] for the script.

Example:

    SourceDir=c:\files

[Setup] TerminalServicesAware
-----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

Specifies whether the compiler should set the "Terminal Services aware" flag in the headers of the Setup and Uninstall programs. This feature is new to version 5.1.7 and defaults to yes; previous versions never set the flag.

Most importantly, the "Terminal Services aware" flag affects the behavior of the {win} constant (and [GetWinDir] support function) on servers with Terminal Services installed in application mode.

When the flag is set, {win} will consistently return the system's real Windows directory, typically "C:\WINDOWS", just as on systems that do not have Terminal Services installed.

When the flag is not set, Windows runs the program in compatibility mode, where {win} may return either the real Windows directory or a user-specific Windows directory, such as "C:\Documents and Settings\<user name>\WINDOWS". Which one you get depends on the name of the program's EXE file and how it is launched. If the program is named setup.exe or install.exe, or if it is launched from the _Add/Remove Programs_ Control Panel applet, then Windows will put the system in "install mode", which effectively makes the program (and all other programs running in the session) behave as if the "Terminal Services aware" flag were set. Otherwise, the program is treated as a legacy application and is given a private Windows directory. (This is true even if the user running the program has full administrative privileges.)

Because the behavior that results from setting TerminalServicesAware to no is inconsistent and hard to predict, it is recommended that you use the default setting of yes. Only use no as a temporary fix if you encounter troubles on systems with Terminal Services after upgrading from a previous Inno Setup version.

[Setup] TimeStampRounding
-------------------------

*Valid values:* 0 through 60

*Default value:* 2

**Description:**

By default, time stamps on files referenced by non external [Files] section entries are rounded down to the nearest 2-second boundary. FAT partitions have only a 2-second time stamp resolution, so this ensures that time stamps are set the same way on both FAT and NTFS partitions.

The rounding can be altered or disabled by setting the TimeStampRounding directive. Setting it to 0 will disable the rounding. Setting it to a number between 1 and 60 will cause time stamps to be rounded down to the nearest TimeStampRounding-second boundary.

[Setup] TimeStampsInUTC
-----------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

By default, time stamps on files referenced by non external [Files] section entries are saved and restored as local times. This means that if a particular file has a time stamp of 01:00 local time at compile time, Setup will extract the file with a time stamp of 01:00 local time, regardless of the user's time zone setting or whether DST is in effect.

If TimeStampsInUTC is set to yes, time stamps will be saved and restored in UTC -- the native time format of Win32 and NTFS. In this mode, a file with a time stamp of 01:00 local time in New York will have a time stamp of 06:00 local time when installed in London.

[Setup] TouchDate
-----------------

*Valid values:* current, none, or _YYYY_-_MM_-_DD_

*Default value:* current

**Description:**

The date used in the time/date stamp of files referenced by [Files] section entries that include the touch flag.

A value of current causes the current system date (at compile time) to be used. A value of none leaves the date as-is. Otherwise, TouchDate is interpreted as an explicit date in _YYYY_-_MM_-_DD_ (ISO 8601) format. If [TimeStampsInUTC] is set to yes, the date is assumed to be a UTC date.

Example:

    TouchDate=2004-01-31

[Setup] TouchTime
-----------------

*Valid values:* current, none, _HH_:_MM_, or _HH_:_MM_:_SS_

*Default value:* current

**Description:**

The time used in the time/date stamp of files referenced by [Files] section entries that include the touch flag.

A value of current causes the current system time (at compile time) to be used. A value of none leaves the time as-is. Otherwise, TouchTime is interpreted as an explicit time in _HH_:_MM_ or _HH_:_MM_:_SS_ format. If [TimeStampsInUTC] is set to yes, the time is assumed to be a UTC time.

Example:

    TouchTime=13:00

[Setup] Uninstallable
---------------------

*Valid values:* [yes or no], or a [boolean expression]

*Default value:* yes

**Description:**

This determines if Inno Setup's automatic uninstaller is to be included in the installation. If this is yes or to a [boolean expression] evaluating to True the uninstaller is included. Otherwise, no uninstallation support is included, requiring the end-user to manually remove the files pertaining to your application.

Setting this to a boolean expression can be useful if you want to offer the user a 'portable mode' option.

Example:

    [Setup]
    Uninstallable=not IsTaskSelected('portablemode')

    [Tasks]
    Name: portablemode; Description: "Portable Mode"

**See also:**  
[CreateUninstallRegKey]

[Setup] UninstallDisplayIcon
----------------------------

**Description:**

This lets you specify a particular icon file (either an executable or an .ico file) to display for the Uninstall entry in the _Add/Remove Programs_ Control Panel applet. The filename will normally begin with a directory constant.

If the file you specify contains multiple icons, you may append the suffix ",_n_" to specify an icon index, where _n_ is the zero-based numeric index.

If this directive is not specified or is blank, Windows will select an icon itself, which may not be the one you prefer.

Examples:

    UninstallDisplayIcon={app}\MyProg.exe
    UninstallDisplayIcon={app}\MyProg.exe,1

[Setup] UninstallDisplayName
----------------------------

**Description:**

This lets you specify a custom name for the program's entry in the _Add/Remove Programs_ Control Panel applet. The value may include constants. If this directive is not specified or is blank, Setup will use the value of [Setup] section directive AppVerName for the name.

Example:

    UninstallDisplayName=My Program

**See also:**  
[Side-by-side installation]

[Setup] UninstallDisplaySize
----------------------------

**Description:**

On Windows 7 and later, Setup uses this directive to set the EstimatedSize value in the Uninstall registry key when possible since the Windows 7 _Add/Remove Programs_ Control Panel (called _Program and Features_) no longer automatically calculates it. If an UninstallDisplaySize is not set, Setup estimates the size itself by taking the size of all files installed and adding any ExtraDiskSpaceRequired values set. Note: Windows 7 without any service pack only supports the display of values smaller than 4 GB.

Set in bytes. (1048576 bytes = 1 megabyte)

Example:

    UninstallDisplaySize=1073741824

[Setup] UninstallFilesDir
-------------------------

*Default value:* {app}

**Description:**

Specifies the directory where the "unins*.*" files for the uninstaller are stored.

_Note:_ You should not assign a different value here on a new version of an application, or else Setup won't find the uninstall logs from the previous versions and therefore won't be able to [append to] them.

Example:

    UninstallFilesDir={app}\uninst

[Setup] UninstallIconFile
-------------------------

**Description:**

_Obsolete in 5.0.0._ As Setup and Uninstall have been merged into a single executable, setting a custom icon for Uninstall is no longer possible.

[Setup] UninstallIconName
-------------------------

**Description:**

_Obsolete in 3.0._ This directive is no longer supported. If you wish to create an Uninstall icon, use the new {uninstallexe} constant in the Filename parameter of an [Icons] section entry.

[Setup] UninstallLogMode
------------------------

*Valid values:* append, new, or overwrite

*Default value:* append

**Description:**

append, the default setting, instructs Setup to [append to an existing uninstall log] when possible.

new, which corresponds to the behavior in pre-1.3 versions of Inno Setup, instructs Setup to always create a new uninstall log.

overwrite instructs Setup to overwrite any existing uninstall logs from the [same application] instead of appending to them (this is _not_ recommended). The same rules for appending to existing logs apply to overwriting existing logs.

Example:

    UninstallLogMode=append

[Setup] UninstallRestartComputer
--------------------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

When set to yes, the uninstaller will always prompt the user to restart the system at the end of a successful uninstallation, regardless of whether it is necessary (e.g., because of [Files] section entries with the uninsrestartdelete flag).

[Setup] UninstallStyle
----------------------

**Description:**

_Obsolete in 5.0.0._

[Setup] UpdateUninstallLogAppName
---------------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If yes, when appending to an existing uninstall log, Setup will replace the AppName field in the log with the current installation's AppName. The AppName field of the uninstall log determines the title displayed in the uninstaller. You may want to set this to no if your installation is merely an upgrade or add-on to an existing program, and you don't want the title of the uninstaller changed.

[Setup] UsedUserAreasWarning
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

This directive lets you disable the used user areas warning. See [Non Administrative Install Mode] for more information.

[Setup] UsePreviousAppDir
-------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the directory of the previous installation as the default directory presented to the user in the wizard.

Note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

[Setup] UsePreviousGroup
------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the Start Menu folder name of the previous installation as the default Start Menu folder name presented to the user in the wizard. Additionally, if AllowNoIcons is set to yes, the _Don't create a Start Menu folder_ setting from the previous installation will be restored.

Note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

[Setup] UsePreviousLanguage
---------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the language of the previous installation as the default language presented to the user in the wizard.

Note that this directive does not change the language used by the _Select Language_ dialog itself. See the [[Languages] section] help topic for details on which language the _Select Language_ dialog uses by default.

Also note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

UsePreviousLanguage must be set to no when AppId includes constants.

[Setup] UsePreviousPrivileges
-----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed in one of the two install modes, and if so, it will use that install mode and not ask the user.

If PrivilegesRequiredOverridesAllowed does not allow dialog, this directive is effectively ignored.

UsePreviousPrivileges must be set to no when AppId includes constants and PrivilegesRequiredOverridesAllowed allows dialog.

**See also:**  
[PrivilegesRequiredOverridesAllowed]

[Setup] UsePreviousSetupType
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the setup type and component settings of the previous installation as the default settings presented to the user in the wizard.

Note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

[Setup] UsePreviousTasks
------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the task settings of the previous installation as the default settings presented to the user in the wizard.

Note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

[Setup] UsePreviousUserInfo
---------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

When this directive is yes, the default, at startup Setup will look in the registry to see if the [same application] is already installed, and if so, it will use the name, organization and serial number entered previously as the default settings presented to the user on the _User Information_ wizard page.

Note that Setup cannot re-use settings from a previous installation that had Uninstallable set to no, since the registry entries it looks for are not created when Uninstallable is no.

[Setup] UserInfoPage
--------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If this is set to yes, Setup will show a _User Information_ wizard page which asks for the user's name, organization and possibly a serial number. The values the user enters are stored in the {userinfoname}, {userinfoorg} and {userinfoserial} constants. You can use these constants in `Registry` or [INI] entries to save their values for later use.

For the serial number field to appear, a [CheckSerial] event function must be present.

The [DefaultUserInfoName], [DefaultUserInfoOrg] and [DefaultUserInfoSerial] directives determine the default name, organization and serial number shown. If [UsePreviousUserInfo] is yes (the default) and Setup finds that a previous version of the [same application] is already installed, it will use the name, organization and serial number entered previously instead.

On silent installs, the default user name, organization, and serial number values will be assumed. Setup will not check whether the user name is blank (since the user has no way of correcting it), however it will still check the serial number.

[Setup] UseSetupLdr
-------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

This tells the compiler which type of Setup to create. If this is yes, it compiles all setup data into a single EXE. If this is no, it compiles the setup data into at least three files: setup.exe, setup-0.bin, and setup-1.bin. The **only** reason you would probably want to use no is for debugging purposes.

_Note:_ Do not use UseSetupLdr=no on an installation which uses disk spanning (DiskSpanning=yes). When UseSetupLdr is yes, the setup program is copied to and run from the user's TEMP directory. This does not happen when UseSetupLdr is no, and could result in errors if Windows tries to locate the setup.exe file on the disk and can't find it because a different disk is in the drive.

_Note:_ Do not use UseSetupLdr=no to avoid digital signature verification startup delays on a large Setup, use disk spanning instead. See [SignTool] for more information. Also note that digitally signing a UseSetupLdr=no based Setup will lead to an invalid digital signature for Uninstall.

[Setup] VersionInfoCompany
--------------------------

*Default value:* [AppPublisher] if [AppPublisher] doesn't include constants, an empty string otherwise

**Description:**

Specifies the company name value for the Setup version info.

[Setup] VersionInfoCopyright
----------------------------

*Default value:* [AppCopyright] if [AppCopyright] doesn't include constants, an empty string otherwise

**Description:**

Specifies the copyright value for the Setup version info.

[Setup] **VersionInfoDescription**-------------------

*Default value:* "[AppName] Setup" if [AppName] doesn't include constants, an empty string otherwise

**Description:**

Specifies the file description value for the Setup version info.

This setting has no effect if UseSetupLdr is set to no.

[Setup] VersionInfoOriginalFileName
-----------------------------------

**Description:**

Specifies the original file name value for the Setup version info.

[Setup] VersionInfoProductName
------------------------------

*Default value:* [AppName] if [AppName] doesn't include constants, an empty string otherwise

**Description:**

Specifies the product name value for the Setup version info.

[Setup] VersionInfoProductTextVersion
-------------------------------------

*Default value:* [VersionInfoProductVersion] if set, else [AppVersion] if set and does not include constants, else [VersionInfoTextVersion]

**Description:**

Specifies the textual product version value for the Setup version info.

[Setup] VersionInfoProductVersion
---------------------------------

*Valid values:* A value in the form of up to 4 numbers separated by dots

*Default value:* [VersionInfoVersion]

**Description:**

Specifies the binary product version value for the Setup version info.

Partial version numbers are allowed. Missing numbers will be appended as zero's.

Note that this value is only known to be displayed by Explorer on Windows Vista SP2. Other versions display the textual product version value ([VersionInfoProductTextVersion]) instead.

[Setup] VersionInfoTextVersion
------------------------------

*Default value:* [VersionInfoVersion]

**Description:**

Specifies the textual file version value for the Setup version info.

Note that this value was only displayed on Explorer's Version tab on Windows 98 and earlier. Later versions display the binary version value ([VersionInfoVersion]) instead.

This setting has no effect if UseSetupLdr is set to no.

[Setup] VersionInfoVersion
--------------------------

*Valid values:* A value in the form of up to 4 numbers separated by dots

*Default value:* 0.0.0.0

**Description:**

Specifies the binary file version value for the Setup version info.

Partial version numbers are allowed. Missing numbers will be appended as zero's.

This setting has no effect if UseSetupLdr is set to no.

[Setup] WindowResizable
-----------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to no, the user won't be able to resize the Setup program's background window when it's not maximized.

This directive has no effect if WindowVisible is not set to yes.

[Setup] WindowShowCaption
-------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to no, Setup will be truly "full screen" -- it won't have a caption bar or border, and it will be on top of the taskbar.

This directive has no effect if WindowVisible is not set to yes.

[Setup] WindowStartMaximized
----------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to yes, the Setup program's background window will initially be displayed in a maximized state, where it won't cover over the taskbar.

This directive has no effect if WindowVisible is not set to yes.

[Setup] WindowVisible
---------------------

*Valid values:* [yes or no]

*Default value:* no

**Description:**

If set to yes, there will be a gradient background window displayed behind the wizard.

Note that this is considered a legacy feature; it likely will be removed at some point in the future.

[Setup] WizardImageAlphaFormat
------------------------------

*Valid values:* none, defined, premultiplied

*Default value:* none

**Description:**

If set to none, the default, any wizard image which is a 32 bit bitmap file should not have an alpha channel.

If set to premultiplied, any wizard image which is a 32 bit bitmap file should have its red, green and blue channel values premultiplied with the alpha channel value.

If set to defined, any wizard image which is a 32 bit bitmap file should not have its red, green and blue channel values premultiplied with the alpha channel value.

This directive has no effect for a wizard image which is not a 32 bit bitmap file.

[Setup] WizardImageBackColor
----------------------------

**Description:**

_Obsolete in 5.5.7._ This directive formerly specified the background color used to fill any unused space around the wizard bitmap when [WizardImageStretch] was set to no. Now any unused space is filled with the standard window color (usually white). If you wish to create a colored border around the image, do so by modifying the bitmap itself.

[Setup] WizardImageFile
-----------------------

*Default value:* _(blank)_

**Description:**

Specifies the name(s) of the bitmap file(s) to display on the left side of the wizard. Wildcards are supported and the files(s) must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

256-color bitmaps may not display correctly in 256-color mode, since it does not handle palettes.

When multiple files are specified, Setup will automatically select the one which best matches the system's DPI setting. The recommended size of the bitmap per DPI setting is:

    100%    164x314
    125%    192x386
    150%    246x459
    175%    273x556
    200%    328x604
    225%    355x700
    250%    410x797


If this directive is not specified or is blank, built-in wizard images supporting multiple DPI settings will be used.

To use the old default wizard images set this directive to compiler:WizClassicImage.bmp.

Example:

    WizardImageFile=myimage.bmp,myimage2.bmp

**See also:**  
[WizardSmallImageFile]  
[WizardImageAlphaFormat]  
[WizardImageStretch]

[Setup] WizardImageStretch
--------------------------

*Valid values:* [yes or no]

*Default value:* yes

**Description:**

If set to yes, the default, the wizard images will be stretched or shrunk if the images are larger or smaller than required.

If set to no, the wizard images will be centered in their respective areas if the images are larger than required, and clipped if the images are smaller than required. (This corresponds to the default behavior of Inno Setup 4.1.2 and earlier.)

[Setup] WizardResizable
-----------------------

*Valid values:* [yes or no]

*Default value:* yes if [WizardStyle] is set to modern, no otherwise

**Description:**

If set to yes, the user will be able to resize the main Setup wizard window.

Use Anchors and KeepSizeY properties to add full support for WizardResizable and WizardSizePercent to all your custom controls, custom wizard pages and TSetupForm forms if you have any. See the _CodeClasses.iss_ example script for an example.

**See also:**  
[WizardSizePercent]

[Setup] WizardSizePercent
-------------------------

Format: _a_,_b_, where _a_ is the horizontal size, and _b_ is the vertical size.

**Valid values:** each size: 100 through 150

**Default value:** 120,120 if [WizardStyle] is set to modern, 100,100 otherwise

**Description:**

Lets you increase the default size of all Setup and Uninstall wizard windows without increasing the font size. A size of for example 120 means a 20% size increase.

If you specify only one size it will be used as both the horizontal and the vertical size.

Example:

    WizardSizePercent=120

Use Anchors and KeepSizeY properties to add full support for WizardResizable and WizardSizePercent to all your custom controls and wizard pages if you have any. See the _CodeClasses.iss_ example script for an example.

Note: Some of the wizard windows such as the _Select Language_ dialog will only increase in size horizontally.

**See also:**  
[WizardResizable]  
[DialogFontSize]

[Setup] WizardSmallImageBackColor
---------------------------------

**Description:**

_Obsolete in 5.0.4._ This directive formerly specified the background color used to fill any unused space around the small wizard bitmap when [WizardImageStretch] was set to no. Now any unused space is filled with the standard window color (usually white). If you wish to create a colored border around the image, do so by modifying the bitmap itself.

[Setup] WizardSmallImageFile
----------------------------

**Default value:** _(blank)_

**Description:**

Specifies the name(s) of the bitmap file(s) to display in the upper right corner of the wizard. Wildcards are supported and the file(s) must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

256-color bitmaps may not display correctly in 256-color mode, since it does not handle palettes.

When multiple files are specified, Setup will automatically select the one which best matches the system's DPI setting. The recommended size of the bitmap per DPI setting is:


    100%    55x55
    125%    64x68
    150%    83x80
    175%    92x97
    200%    110x106
    225%    119x123
    250%    138x140


If this directive is not specified or is blank, built-in wizard images supporting multiple DPI settings will be used.

To use the old default wizard images set this directive to compiler:WizClassicSmallImage.bmp.

Example:

    WizardSmallImageFile=mysmallimage.bmp,mysmallimage2.bmp

**See also:**  
[WizardImageFile]  
[WizardImageAlphaFormat]  
[WizardImageStretch]

[Setup] WizardStyle
-------------------

**Valid values:**  classic or modern

**Default value:**  classic

**Description:**

If this directive is set to modern, Setup and Uninstall will show a more modern look and also the defaults for [WizardResizable] and [WizardSizePercent] change to respectively yes and 120,120.

Use Anchors and KeepSizeY properties to add full support for WizardResizable and WizardSizePercent to all your custom controls and wizard pages if you have any. See the _CodeClasses.iss_ example script for an example.

/`Types` section
=================

This section is optional. It defines all of the setup types Setup will show on the _Select Components_ page of the wizard. During compilation a set of default setup types is created if you define components in a [[Components] section] but don't define types. If you are using the default (English) messages file, these types are the same as the types in the example below.

Here is an example of a [Types] section:

    [Types]
    Name: "full"; Description: "Full installation"
    Name: "compact"; Description: "Compact installation"
    Name: "custom"; Description: "Custom installation"; Flags: iscustom

The following is a list of the supported [parameters]:

*   **Name**  _(Required)_

    The internal name of the type. Used as parameter for components in the [Components] section to instruct Setup to which types a component belongs.

    Example:

        Name: "full"

*   **Description**  _(Required)_

    The description of the type, which can include constants. This description is shown during installation.

    Example:

        Description: "Full installation"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   *iscustom*

        Instructs Setup that the type is a custom type. Whenever the end user manually changes the components selection during installation, Setup will set the setup type to the custom type. Note that if you don't define a custom type, Setup will only allow the user to choose a setup type and they can no longer manually select/unselect components.

        Only one type may include this flag.

    Example:

        Flags: iscustom


/`Components` section
======================

This section is optional. It defines all of the components Setup will show on the _Select Components_ page of the wizard for setup type customization.

By itself a component does nothing: it needs to be 'linked' to other installation entries. See [Components and Tasks Parameters].

Here is an example of a [Components] section:

    [Components]
    Name: "main"; Description: "Main Files"; Types: full compact custom; Flags: fixed
    Name: "help"; Description: "Help Files"; Types: full
    Name: "help\english"; Description: "English"; Types: full
    Name: "help\dutch"; Description: "Dutch"; Types: full

The example above generates four components: A "main" component which gets installed if the end user selects a type with name "full" or "compact" and a "help" component which has two child components and only gets installed if the end user selects the "full" type.

The following is a list of the supported [parameters]:

*   **Name**  _(Required)_

    The internal name of the component.

    The total number of \ or / characters in the name of the component is called the level of the component. Any component with a level of 1 or more is a child component. The component listed before the child component with a level of 1 less than the child component, is the parent component. Other components with the same parent component as the child component are sibling components.

    A child component can't be selected if its parent component isn't selected. A parent component can't be selected if none of its children are selected, unless a Components parameter directly references the parent component or the parent component includes the checkablealone flag.

    If sibling components have the exclusive flag, only one of them can be selected.

    Example:

        Name: "help"

*   **Description**  _(Required)_

    The description of the component, which can include constants. This description is shown to the end user during installation.

    Example:

        Description: "Help Files"

*   **Types**

    A space separated list of types this component belongs to. If the end user selects a type from this list, this component will be installed.

    If the fixed flag isn't used (see below), any custom types (types using the iscustom flag) in this list are ignored by Setup.

    Example:

        Types: full compact

*   **ExtraDiskSpaceRequired**

    The extra disk space required by this component, similar to the [ExtraDiskSpaceRequired] directive for the [Setup] section.

    Example:

        ExtraDiskSpaceRequired: 0

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **checkablealone**

    Specifies that the component can be checked when none of its children are. By default, if no Components parameter directly references the component, unchecking all of the component's children will cause the component to become unchecked.

    *   **dontinheritcheck**

    Specifies that the component should not automatically become checked when its parent is checked. Has no effect on top-level components, and cannot be combined with the exclusive flag.

    *   **exclusive**

    Instructs Setup that this component is mutually exclusive with sibling components that also have the exclusive flag.

    *   **fixed**

    Instructs Setup that this component can not be manually selected or unselected by the end user during installation.

    *   **restart**

    Instructs Setup to ask the user to restart the system if this component is installed, regardless of whether this is necessary (for example because of [Files] section entries with the restartreplace flag). Like [AlwaysRestart] but per component.

    *   **disablenouninstallwarning**

    Instructs Setup not to warn the user that this component will not be uninstalled after they deselected this component when it's already installed on his/her machine.

    Depending on the complexity of your components, you can try to use the [InstallDelete] section and this flag to automatically 'uninstall' deselected components.

    Example:

        Flags: fixed


/`Tasks` section
=================

This section is optional. It defines all of the user-customizable tasks Setup will perform during installation. These tasks appear as check boxes and radio buttons on the _Select Additional Tasks_ wizard page.

By itself a task does nothing: it needs to be 'linked' to other installation entries. See [Components and Tasks Parameters].

Here is an example of a [Tasks] section:

    [Tasks]
    Name: desktopicon; Description: "Create a &desktop icon"; GroupDescription: "Additional icons:"; Components: main
    Name: desktopicon\common; Description: "For all users"; GroupDescription: "Additional icons:"; Components: main; Flags: exclusive
    Name: desktopicon\user; Description: "For the current user only"; GroupDescription: "Additional icons:"; Components: main; Flags: exclusive unchecked
    Name: quicklaunchicon; Description: "Create a &Quick Launch icon"; GroupDescription: "Additional icons:"; Components: main; Flags: unchecked
    Name: associate; Description: "&Associate files"; GroupDescription: "Other tasks:"; Flags: unchecked

The following is a list of the supported [parameters]:

*   **Name**  _(Required)_

    The internal name of the task.

    The total number of \ or / characters in the name of the task is called the level of the task. Any task with a level of 1 or more is a child task. The task listed before the child task with a level of 1 less than the child task, is the parent task. Other tasks with the same parent task as the child task are sibling tasks.

    A child task can't be selected if its parent task isn't selected. A parent task can't be selected if none of its children are selected, unless a Tasks parameter directly references the parent task or the parent task includes the checkablealone flag.

    If sibling tasks have the exclusive flag, only one of them can be selected.

    Example:

        Name: "desktopicon"

*   **Description**  _(Required)_

    The description of the task, which can include constants. This description is shown to the end user during installation.

    Example:

        Description: "Create a &desktop icon"

*   **GroupDescription**

    The group description of a group of tasks, which can include constants. Consecutive tasks with the same group description will be grouped below a text label. The text label shows the group description.

    Example:

        GroupDescription: "Additional icons"

*   **Components**

    A space separated list of components this task belongs to. If the end user selects a component from this list, this task will be shown. A task entry without a Components parameter is always shown.

    Example:

        Components: main

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **checkablealone**

        Specifies that the task can be checked when none of its children are. By default, if no Tasks parameter directly references the task, unchecking all of the task's children will cause the task to become unchecked.

    *   **checkedonce**

        Instructs Setup that this task should be unchecked initially when Setup finds a previous version of the [same application] is already installed.

        If the UsePreviousTasks [Setup] section directive is no, this flag is effectively disabled.

    *   **dontinheritcheck**

        Specifies that the task should not automatically become checked when its parent is checked. Has no effect on top-level tasks, and cannot be combined with the exclusive flag.

    *   **exclusive**

        Instructs Setup that this task is mutually exclusive with sibling tasks that also have the exclusive flag.

    *   **restart**

        Instructs Setup to ask the user to restart the system at the end of installation if this task is selected, regardless of whether it is necessary (for example because of [Files] section entries with the restartreplace flag). Like [AlwaysRestart] but per task.

    *   **unchecked**

        Instructs Setup that this task should be unchecked initially.

    Example:

        Flags: unchecked


/`Dirs` section
================

This optional section defines any additional directories Setup is to create _besides_ the application directory the user chooses, which is created automatically. Creating subdirectories underneath the main application directory is a common use for this section.

Note that you aren't required to explicitly create directories before installing files to them using the [Files] section, so this section is primarily useful for creating empty directories.

Here is an example of a [Dirs] section:

    [Dirs]
    Name: "{app}\data"
    Name: "{app}\bin"

    The example above will, after Setup creates the application directory, create two subdirectories underneath the application directory.

    The following is a list of the supported [parameters]:

*   **Name**  _(Required)_

    The name of the directory to create, which normally will start with one of the directory constants.

    Example:

        Name: "{app}\MyDir"

*   **Attribs**

    Specifies additional attributes for the directory. This can include one or more of the following: readonly, hidden, system, notcontentindexed. If this parameter is not specified, Setup does not assign any special attributes to the directory.

    If the directory already exists, the specified attributes will be combined with the directory's existing attributes.

    Example:

        Attribs: hidden system

*   **Permissions**

    Specifies additional permissions to grant in the directory's ACL (access control list). It is not recommended that you use this parameter if you aren't familiar with ACLs or why you would need to change them, because misusing it could negatively impact system security.

    For this parameter to have an effect the directory must be located on a partition that supports ACLs (such as NTFS), and the current user must be able to change the permissions on the directory. In the event these conditions are not met, no error message will be displayed, and the permissions will not be set.

    This parameter should _only_ be used on directories private to your application. Never change the ACLs on top-level directories like {sys} or {commonpf}, otherwise you can open up security holes on your users' systems.

    In addition, it is recommended that you avoid using this parameter to grant write access on directories containing program files. Granting, for example, everyone-modify permission on the {app} directory will allow unprivileged users to tamper with your application's program files; this creates the potential for a privilege escalation vulnerability. (However, it is safe to change the permissions on a subdirectory of your application's directory which does not contain program files, e.g. {app}\data.)

    The specified permissions are set regardless of whether the directory existed prior to installation.

    This parameter can include one or more space separated values in the format:

    [<user or group identifier>]-<access type>

    The following access types are supported for the [Dirs] section:

    *   **full**

        Grants "Full Control" permission, which is the same as modify (see below), but additionally allows the specified user/group to take ownership of the directory and change its permissions. Use sparingly; generally, modify is sufficient.

    *   **modify**

        Grants "Modify" permission, which allows the specified user/group to read, execute, create, modify, and delete files in the directory and its subdirectories.

    *   **readexec**

        Grants "Read & Execute" permission, which allows the specified user/group to read and execute files in the directory and its subdirectories.

    Example:

        Permissions: users-modify

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **deleteafterinstall**

        Instructs Setup to create the directory as usual, but then delete it once the installation is completed (or aborted) if it's empty. This can be useful when extracting temporary data needed by a program executed in the script's [Run] section.

        This flag will not cause directories that already existed before installation to be deleted.

    *   **setntfscompression**

        Instructs Setup to enable NTFS compression on the directory. If it fails to set the compression state for any reason (for example, if compression is not supported by the file system), no error message will be displayed.

        If the directory already exists, the compression state of any files present in the directory will not be changed.

    *   **uninsalwaysuninstall**

        Instructs the uninstaller to always attempt to delete the directory if it's empty. Normally the uninstaller will only try to delete the directory if it didn't already exist prior to installation.

    *   **uninsneveruninstall**

        Instructs the uninstaller to not attempt to delete the directory. By default, the uninstaller deletes any directory specified in the [Dirs] section if it is empty.

    *   **unsetntfscompression**

        Instructs Setup to disable NTFS compression on the directory. If it fails to set the compression state for any reason (for example, if compression is not supported by the file system), no error message will be displayed.

        If the directory already exists, the compression state of any files present in the directory will not be changed.

    Example:

        Flags: uninsneveruninstall
        

/`Files` section
=================

This optional section defines any files Setup is to install on the user's system.

Here is an example of a [Files] section:

    [Files]
    Source: "CTL3DV2.DLL"; DestDir: "{sys}"; Flags: onlyifdoesntexist uninsneveruninstall
    Source: "MYPROG.EXE"; DestDir: "{app}"
    Source: "MYPROG.CHM"; DestDir: "{app}"
    Source: "README.TXT"; DestDir: "{app}"; Flags: isreadme

See the _Remarks_ section at the bottom of this topic for some important notes.

The following is a list of the supported [parameters]:

*   **Source**  _(Required)_

    The name of the _source file_. The compiler will prepend the path of your installation's [source directory] if you do not specify a fully qualified pathname.

    This can be a wildcard to specify a group of files in a single entry. When a wildcard is used, all files matching it use the same options.

    When the flag external is specified, Source must be the full pathname of an existing file (or wildcard) on the distribution media or the user's system (e.g. "{src}\license.ini").

    Constants may only be used when the external flag is specified, because the compiler does not do any constant translating itself.

    Examples:

        Source: "MYPROG.EXE"
        Source: "Files\*"

*   **DestDir**  _(Required)_

    The directory where the file is to be installed on the user's system. Will almost always begin with one of the directory constants. If the specified path does not already exist on the user's system, it will be created automatically, and removed automatically during uninstallation if empty.

    Examples:

        DestDir: "{app}"
        DestDir: "{app}\subdir"

*   **DestName**

    This parameter specifies a new name for the file when it is installed on the user's system. By default, Setup uses the name from the Source parameter, so in most cases it's not necessary to specify this parameter.

    Example:

        DestName: "MYPROG2.EXE"

*   **Excludes**

    Specifies a list of patterns to exclude, separated by commas. This parameter cannot be combined with the external flag.

    Patterns may include wildcard characters (* and ?). Note that unlike the Source parameter, a simple Unix-style pattern matching routine is used for Excludes. Dots in the pattern are always significant, thus `*.*` will not exclude a file with no extension (instead, use just * ). Also, question marks always match exactly one character, thus "?????" will not exclude files with names less than five characters long.

    If a pattern starts with a backslash ("\") it is matched against the start of a path name, otherwise it is matched against the end of a path name. Thus "\foo" will only exclude a file named "foo" at the base of the tree. On the other hand, "foo" will exclude any file named "foo" anywhere in the tree.

    The patterns may include backslashes. "foo\bar" will exclude both "foo\bar" and "subdir\foo\bar". "\foo\bar" will only exclude "foo\bar".

    Examples:

        Source: "*"; Excludes: "*.~*"
        Source: "*"; Excludes: "*.~*,\Temp\*"; Flags: recursesubdirs

*   **ExternalSize**

    This parameter must be combined with the external flag and specifies the size of the external file in bytes. If this parameter is not specified, Setup retrieves the file size at startup. Primarily useful for files that aren't available at startup, for example files located on a second disk when [disk spanning] is being used.

    Example:

        ExternalSize: 1048576; Flags: external

*   **CopyMode**

    You should not use this parameter in any new scripts. This parameter was deprecated and replaced by flags in Inno Setup 3.0.5:

        CopyMode: normal -> Flags: promptifolder  
        CopyMode: alwaysskipifsameorolder -> no flags  
        CopyMode: onlyifdoesntexist -> Flags: onlyifdoesntexist  
        CopyMode: alwaysoverwrite -> Flags: ignoreversion  
        CopyMode: dontcopy -> Flags: dontcopy

    What was CopyMode: alwaysskipifsameorolder is now the default behavior. (The previous default was CopyMode: normal.)

*   **Attribs**

    Specifies additional attributes for the file. This can include one or more of the following: readonly, hidden, system, notcontentindexed. If this parameter is not specified, Setup does not assign any special attributes to the file.

    Example:

        Attribs: hidden system

*   **Permissions**

    Specifies additional permissions to grant in the file's ACL (access control list). It is not recommended that you use this parameter if you aren't familiar with ACLs or why you would need to change them, because misusing it could negatively impact system security.

    For this parameter to have an effect the file must be located on a partition that supports ACLs (such as NTFS), and the current user must be able to change the permissions on the file. In the event these conditions are not met, no error message will be displayed, and the permissions will not be set.

    This parameter should _only_ be used on files private to your application. Never change the ACLs on shared system files, otherwise you can open up security holes on your users' systems.

    The specified permissions are set regardless of whether the file existed prior to installation.

    This parameter can include one or more space separated values in the format:

        [<user or group identifier>]-<access type>

    The following access types are supported for the [Files] section:

    *   **full**

        Grants "Full Control" permission, which is the same as modify (see below), but additionally allows the specified user/group to take ownership of the file and change its permissions. Use sparingly; generally, modify is sufficient.

    *   **modify**

        Grants "Modify" permission, which allows the specified user/group to read, execute, modify, and delete the file.

    *   **readexec**

        Grants "Read & Execute" permission, which allows the specified user/group to read and execute the file.

    Example:

        Permissions: users-modify

*   **FontInstall**

    Tells Setup the file is a font that needs to be installed. The value of this parameter is the name of the font as stored in the registry or WIN.INI. This must be exactly the same name as you see when you double-click the font file in Explorer. Note that Setup will automatically append " (TrueType)" to the end of the name.

    If the file is not a TrueType font, you must specify the flag fontisnttruetype in the Flags parameter.

    It's recommended that you use the flags onlyifdoesntexist and uninsneveruninstall when installing fonts to the {autofonts} directory.

    If the installation is running in [non administrative install mode], Windows 10 Version 1803 or later is required to successfully install a font.

    For compatibility with 64-bit Windows, fonts should not be installed to the {sys} directory. Use {autofonts} as the destination directory instead.

    Example:

        Source: "OZHANDIN.TTF"; DestDir: "{autofonts}"; FontInstall: "Oz Handicraft BT"; Flags: onlyifdoesntexist uninsneveruninstall

*   **StrongAssemblyName**

    Specifies the strong assembly name of the file. Used by Uninstall only.

    This parameter is ignored if the gacinstall flag isn't also specified.

    Example:

        StrongAssemblyName: "MyAssemblyName, Version=1.0.0.0, Culture=neutral, PublicKeyToken=abcdef123456, ProcessorArchitecture=MSIL"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **32bit**

        Causes the {sys} constant to map to the 32-bit System directory when used in the Source and DestDir parameters, the regserver and regtypelib flags to treat the file as 32-bit, and the sharedfile flag to update the 32-bit SharedDLLs registry key. This is the default behavior in [32-bit install mode].

    *   **64bit**

        Causes the {sys} constant to map to the 64-bit System directory when used in the Source and DestDir parameters, the regserver and regtypelib flags to treat the file as 64-bit, and the sharedfile flag to update the 64-bit SharedDLLs registry key. This is the default behavior in [64-bit install mode].

    *   **allowunsafefiles**

        Disables the compiler's automatic checking for [unsafe files]. It is strongly recommended that you DO NOT use this flag, unless you are absolutely sure you know what you're doing.

    *   **comparetimestamp**

        _(Not recommended; see below)_  
        Instructs Setup to proceed to comparing time stamps (last write/modified time) if the file being installed already exists on the user's system, and at least one of the following conditions is true:

        *   Neither the existing file nor the file being installed has version info.
        *   The ignoreversion flag is also used on the entry.
        *   The replacesameversion flag isn't used, and the existing file and the file being installed have the same version number (as determined by the files' version info).

        If the existing file has an older time stamp (last write/modified time) than the file being installed, the existing file will replaced. Otherwise, it will not be replaced.

        Use of this flag is _not recommended_ except as a last resort, because there is an inherent issue with it: NTFS partitions store time stamps in UTC (unlike FAT partitions), which causes local time stamps -- what Inno Setup works with by default -- to shift whenever a user changes their system's time zone or when daylight saving time goes into or out of effect. This can create a situation where files are replaced when the user doesn't expect them to be, or not replaced when the user expects them to be.

    *   **confirmoverwrite**

        Always ask the user to confirm before replacing an existing file.

    *   **createallsubdirs**

        By default the compiler skips empty directories when it recurses subdirectories searching for the Source filename/wildcard. This flag causes these directories to be created at install time (just like if you created [Dirs] entries for them).

        Must be combined with recursesubdirs.

    *   **deleteafterinstall**

        Instructs Setup to install the file as usual, but then delete it once the installation is completed (or aborted). This can be useful for extracting temporary data needed by a program executed in the script's [Run] section.

        This flag will not cause existing files that weren't replaced during installation to be deleted.

        This flag cannot be combined with the isreadme, regserver, regtypelib, restartreplace, sharedfile, or uninsneveruninstall flags.

    *   **dontcopy**

        Don't copy the file to the user's system during the normal file copying stage but do statically compile the file into the installation. This flag is useful if the file is handled by the [Code] section exclusively and extracted using [ExtractTemporaryFile].

    *   **dontverifychecksum**

        Prevents Setup from verifying the file checksum after extraction. Use this flag on files you wish to modify while already compiled into Setup.

        Must be combined with nocompression.

    *   **external**

        This flag instructs Inno Setup not to statically compile the file specified by the Source parameter into the installation files, but instead copy from an existing file on the distribution media or the user's system. See the Source parameter description for more information.

    *   **fontisnttruetype**

        Specify this flag if the entry is installing a _non-TrueType_ font with the FontInstall parameter.

    *   **gacinstall**

        Install the file into the .NET Global Assembly Cache. When used in combination with sharedfile, the file will only be uninstalled when the reference count reaches zero.

        To uninstall the file Uninstaller uses the strong assembly name specified by parameter StrongAssemblyName.

        An exception will be raised if an attempt is made to use this flag on a system with no .NET Framework present.

    *   **ignoreversion**

        Don't compare version info at all; replace existing files regardless of their version number.

        This flag should only be used on files private to your application, _never_ on shared system files.

    *   **isreadme**

        File is the "README" file. Only _one_ file in an installation can have this flag. When a file has this flag, the user will asked if they would like to view the README file after the installation has completed. If Yes is chosen, Setup will open the file, using the default program for the file type. For this reason, the README file should always end with an extension like .txt, .wri, or .doc.

        Note that if Setup has to restart the user's computer (as a result of installing a file with the flag restartreplace or if the AlwaysRestart [Setup] section directive is yes), the user will not be given an option to view the README file.

    *   **nocompression**

        Prevents the compiler from attempting to compress the file. Use this flag on file types that you know can't benefit from compression (for example, JPEG images) to speed up the compilation process and save a few bytes in the resulting installation.

    *   **noencryption**

        Prevents the file from being stored encrypted. Use this flag if you have enabled encryption (using the [Setup] section directive Encryption) but want to be able to extract the file using the [Code] section support function [ExtractTemporaryFile][ExtractTemporaryFile] before the user has entered the correct password.

    *   **noregerror**

        When combined with either the regserver or regtypelib flags, Setup will not display any error message if the registration fails.

    *   **onlyifdestfileexists**

        Only install the file if a file of the same name already exists on the user's system. This flag may be useful if your installation is a patch to an existing installation, and you don't want files to be installed that the user didn't already have.

    *   **onlyifdoesntexist**

        Only install the file if it doesn't already exist on the user's system.

    *   **overwritereadonly**

        Always overwrite a read-only file. Without this flag, Setup will ask the user if an existing read-only file should be overwritten.

    *   **promptifolder**

        By default, when a file being installed has an older version number (or older time stamp, when the comparetimestamp flag is used) than an existing file, Setup will not replace the existing file. (See the _Remarks_ section at the bottom of this topic for more details.) When this flag is used, Setup will ask the user whether the file should be replaced, with the default answer being to keep the existing file.

    *   **recursesubdirs**

        Instructs the compiler or Setup to also search for the Source filename/wildcard in subdirectories under the Source directory.

    *   **regserver**

        Register the DLL/OCX file. With this flag set, Setup will call the DllRegisterServer function exported by the DLL/OCX file, and the uninstaller will call DllUnregisterServer prior to removing the file. When used in combination with sharedfile, the DLL/OCX file will only be unregistered when the reference count reaches zero.

        In [64-bit install mode], the file is assumed to be a 64-bit image and will be registered inside a 64-bit process. You can override this by specifying the 32bit flag.

        See the _Remarks_ at the bottom of this topic for more information.

    *   **regtypelib**

        Register the type library (.tlb). The uninstaller will unregister the type library (unless the flag uninsneveruninstall is specified). As with the regserver flag, when used in combination with sharedfile, the file will only be unregistered by the uninstaller when the reference count reaches zero.

        In [64-bit install mode] running on an x64 edition of Windows, the type library will be registered inside a 64-bit process. You can override this by specifying the 32bit flag.

        Registering type libraries in 64-bit mode on Itanium editions of Windows is not supported.

        See the _Remarks_ at the bottom of this topic for more information.

    *   **replacesameversion**

        When this flag is used and the file already exists on the user's system and it has the same version number as the file being installed, Setup will compare the files and replace the existing file if their contents differ.

        The default behavior (i.e. when this flag isn't used) is to not replace an existing file with the same version number.

    *   **restartreplace**

        When an existing file needs to be replaced, and it is in use (locked) by another running process, Setup will by default display an error message. This flag tells Setup to instead register the file to be replaced the next time the system is restarted (by calling MoveFileEx or by creating an entry in WININIT.INI). When this happens, the user will be prompted to restart their computer at the end of the installation process.

        **NOTE:** This flag has no effect if the user does not have administrative privileges. Therefore, when using this flag, it is recommended that you leave the [PrivilegesRequired] [Setup] section directive at the default setting of admin.

    *   **setntfscompression**

        Instructs Setup to enable NTFS compression on the file (even if it didn't replace the file). If it fails to set the compression state for any reason (for example, if compression is not supported by the file system), no error message will be displayed.

    *   **sharedfile**

        Specifies that the file is shared among multiple applications, and should only be removed at uninstall time if no other applications are using it. Most files installed to the Windows System directory should use this flag, including .OCX, .BPL, and .DPL files.

        Windows' standard shared file reference-counting mechanism (located in the registry under HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\SharedDLLs) is used to keep track of how many applications depend on the file. Each time the file is installed, the reference count for the file is incremented. (This happens regardless of whether the installer actually replaces the file on disk.) When an application using the file is uninstalled, the reference count is decremented. If the count reaches zero, the file is deleted (with the user's confirmation, unless the uninsnosharedfileprompt flag is also specified).

        If Setup is run more than once, the reference count for the file will be incremented more than once. The uninstaller will decrement the reference count the same number of times, however, so no references are leaked (provided the [UninstallLogMode] [Setup] section directive isn't changed from its default setting of append).

        When this flag is used, do not specify {syswow64} in the DestDir parameter; use {sys} instead. Even though {sys} and {syswow64} map to the same underlying directory in [32-bit install mode], the path name must exactly match what every other existing installer is using; otherwise, a second reference count for the file would be created, which could result in the file being removed prematurely. If you need to install a shared file to the 32-bit System directory in [64-bit install mode], specify {sys} in the DestDir parameter and additionally include the 32bit flag.

    *   **sign**

        This flag instructs the compiler to digitally sign the original source files before storing them. Ignored if [Setup] section directive [SignTool] is not set.

    *   **signonce**

        This flag instructs the compiler to digitally sign the original source files before storing them, but only if the files are not already signed. Ignored if [Setup] section directive [SignTool] is not set.

    *   **skipifsourcedoesntexist**

        This flag instructs the compiler -- or Setup, if the external flag is also used -- to silently skip over the entry if the source file does not exist, instead of displaying an error message.

    *   **solidbreak**

        When [solid compression] is enabled, this flag instructs the compiler to finalize the current compression stream and begin a new one before compressing the file(s) matched by Source. This allows Setup to seek to the file instantly without having to decompress any preceding files first. May be useful in a large, multi-component installation if you find too much time is being spent decompressing files belonging to components that weren't selected.

    *   **sortfilesbyextension**

        This flag instructs the compiler to compress the found files sorted by extension before it sorts by path name. This potentially decreases the size of Setup if [solid compression] is also used.

    *   **sortfilesbyname**

        This flag instructs the compiler to compress the found files sorted by name before it sorts by path name. This potentially decreases the size of Setup if [solid compression] is also used. If sortfilesbyextension is also used, files are first sorted by extension.

    *   **touch**

        This flag causes Setup to set the time/date stamp of the installed file(s) to that which is specified by the [TouchDate] and [TouchTime] [Setup] section directives.

        This flag has no effect if combined with the external flag.

    *   **uninsnosharedfileprompt**

        When uninstalling the shared file, automatically remove the file if its reference count reaches zero instead of asking the user. Must be combined with the sharedfile flag to have an effect.

    *   **uninsremovereadonly**

        When uninstalling the file, remove any read-only attribute from the file before attempting to delete it.

    *   **uninsrestartdelete**

        When this flag is used and the file is in use at uninstall time, the uninstaller will queue the file to be deleted when the system is restarted, and at the end of the uninstallation process ask the user if they wants to restart. This flag can be useful when uninstalling things like shell extensions which cannot be programmatically stopped. Note that administrative privileges are required for this flag to have an effect.

    *   **uninsneveruninstall**

        Never remove the file. This flag can be useful when installing very common shared files that shouldn't be deleted under any circumstances, such as MFC DLLs.

        Note that if this flag is combined with the sharedfile flag, the file will never be deleted at uninstall time but the reference count will still be properly decremented.

    *   **unsetntfscompression**

        Instructs Setup to disable NTFS compression on the file (even if it didn't replace the file). If it fails to set the compression state for any reason (for example, if compression is not supported by the file system), no error message will be displayed.

    Example:

            Flags: isreadme


Remarks
-------

If a file already exists on the user's system, it by default will be replaced according to the following rules:

1.  If the existing file is an older version than the file being installed 
    (as determined by the files' version info), the existing file will be replaced.

2.  If the existing file is the same version as the file being installed, the 
    existing file will not be replaced, except if the replacesameversion flag 
    is used and the content of the two files differs.

3.  If the existing file is a newer version than the file being installed, or if 
    the existing file has version info but the file being installed does not, 
    the existing file will not be replaced.

4.  If the existing file does not have version info, it will be replaced.

Certain flags such as onlyifdoesntexist, ignoreversion, and promptifolder alter the aforementioned rules.

If Setup is unable to replace an existing file because it is in use by another process, it will make up to 4 additional attempts to replace the file, delaying one second before each attempt. If all attempts fail, an error message will be displayed.

Setup registers all files with the regserver or regtypelib flags as the last step of installation. However, if the [Setup] section directive AlwaysRestart is yes, or if there are files with the restartreplace flag, all files get registered on the next reboot (by creating an entry in Windows' _RunOnce_ registry key).

When files with a .HLP extension (Windows help files) are uninstalled, the corresponding .GID and .FTS files are automatically deleted as well. Similarly, when a .CHM (HTML Help) file is deleted, any .CHW (generated index) file is automatically deleted.

/`Icons` section
=================

This optional section defines any shortcuts Setup is to create in the Start Menu and/or other locations, such as the desktop.

Here is an example of an [Icons] section:

    [Icons]
    Name: "{group}\My Program"; Filename: "{app}\MYPROG.EXE"; WorkingDir: "{app}"
    Name: "{group}\Uninstall My Program"; Filename: "{uninstallexe}"

The following is a list of the supported [parameters]:

*   **Name**  _(Required)_

    The name and location of the shortcut to create. Any of the shell folder constants or directory constants may be used in this parameter.

    Keep in mind that shortcuts are stored as literal files so any characters not allowed in normal filenames can't be used here. Also, because it's not possible to have two files with the same name, it's therefore not possible to have two shortcuts with the same name.

    Examples:

        Name: "{group}\My Program"
        Name: "{group}\Subfolder\My Program"
        Name: "{commondesktop}\My Program"
        Name: "{commonprograms}\My Program"
        Name: "{commonstartup}\My Program"

*   **Filename**  _(Required)_

    The command line filename for the shortcut, which normally begins with a directory constant.

    In addition to file and folder names, URLs (web site addresses) may also be specified. When a URL is specified, Setup will create an "Internet Shortcut" (.url) file, and ignore the Parameters, WorkingDir, HotKey, and Comment parameters.

    On 64-bit Windows, note that the {sys} constant will map to the native 64-bit System directory when the shortcut is launched by a 64-bit process, such as Windows Explorer. This is true regardless of whether the install is running in [64-bit install mode]. To create a shortcut that always points to the 32-bit System directory, use {syswow64} instead. (The same applies to the WorkingDir and IconFilename parameters.)

    Examples:

        Filename: "{app}\MYPROG.EXE"
        Filename: "{uninstallexe}"
        Filename: "{app}\FolderName"
        Filename: "http://www.example.com/"

*   **Parameters**

    Optional command line parameters for the shortcut, which can include constants.

    Example:

        Parameters: "/play filename.mid"

*   **WorkingDir**

    The working (or _Start In_) directory for the shortcut, which specifies the initial current directory for the program. This parameter can include constants.

    If this parameter is not specified or is blank, Setup will try to extract a directory name from the Filename parameter. If that fails (unlikely), the working directory will be set to {sys}.

    Example:

        WorkingDir: "{app}"

*   **HotKey**

    The hot key (or "shortcut key") setting for the shortcut, which is a combination of keys with which the program can be started.

    Note: If you change the shortcut key and reinstall the application, Windows may continue to recognize old shortcut key(s) until you log off and back on or restart the system.

    Example:

        HotKey: "ctrl+alt+k"

*   **Comment**

    Specifies the _Comment_ (or "description") field of the shortcut, which determines the popup hint for it. This parameter can include constants.

    Example:

    Comment: "This is my program"

*   **IconFilename**

    The filename of a custom icon (located on the user's system) to be displayed. This can be an executable image (.exe, .dll) containing icons or a .ico file. If this parameter is not specified or is blank, Windows will use the file's default icon. This parameter can include constants.

    Example:

        IconFilename: "{app}\myicon.ico"

    Note: when Setup is running on 64-bit Windows, it will automatically replace {commonpf32}\'s value in the filename with '%ProgramFiles(x86)%\' to work around a bug in 64-bit Windows: 64-bit Windows replaces it with '%ProgramFiles%\' instead which is incorrect.

*   **IconIndex**

    Zero-based index of the icon to use in the file specified by IconFilename. Defaults to 0.

    If IconIndex is non-zero and IconFilename is not specified or is blank, it will act as if IconFilename is the same as Filename.

    Example:

        IconIndex: 0

*   **AppUserModelID**

    Specifies the Windows 7 (or later) Application User Model ID for the shortcut. Ignored on earlier Windows versions. This parameter can include constants.

    Example:

        AppUserModelID: "MyCompany.MyProg"

*   **AppUserModelToastActivatorCLSID**

    Specifies the Windows 10 (or later) Application User Model Toast Activator CLSID for the shortcut. Ignored on earlier Windows versions.

    Example:

        AppUserModelToastActivatorCLSID: "B784B1A4-D682-4FE6-BDBA-21EDDAE42795"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **closeonexit**

        When this flag is set, Setup will set the "Close on Exit" property of the shortcut. This flag only has an effect if the shortcut points to an MS-DOS application (if it has a .pif extension, to be specific). If neither this flag nor the dontcloseonexit flags are specified, Setup will not attempt to change the "Close on Exit" property.

    *   **createonlyiffileexists**

        When this flag is set, the installer will only try to create the icon if the file specified by the Filename parameter exists.

    *   **dontcloseonexit**

        Same as closeonexit, except it causes Setup to uncheck the "Close on Exit" property.

    *   **excludefromshowinnewinstall**

        Prevents the Start menu entry for the new shortcut from receiving a highlight on Windows 7 and additionally prevents the new shortcut from being automatically pinned the Start screen on Windows 8 (or later). Ignored on earlier Windows versions.

    *   **foldershortcut**

        Creates a special type of shortcut known as a "Folder Shortcut". Normally, when a shortcut to a folder is present on the Start Menu, clicking the item causes a separate Explorer window to open showing the target folder's contents. In contrast, a "folder shortcut" will show the contents of the target folder as a submenu instead of opening a separate window.

        This flag is currently ignored when running on Windows 7 (or later), as folder shortcuts do not expand properly on the Start Menu anymore. It is not known whether this is a bug in Windows 7 or a removed feature.

        When this flag is used, a folder name must be specified in the Filename parameter. Specifying the name of a file will result in a non-working shortcut.

    *   **preventpinning**

        Prevents a Start menu entry from being pinnable to Taskbar or the Start Menu on Windows 7 (or later). This also makes the entry ineligible for inclusion in the Start menu's Most Frequently Used (MFU) list. Ignored on earlier Windows versions.

    *   **runmaximized**

        When this flag is set, Setup sets the "Run" setting of the icon to "Maximized" so that the program will be initially maximized when it is started.

    *   **runminimized**

        When this flag is set, Setup sets the "Run" setting of the icon to "Minimized" so that the program will be initially minimized when it is started.

    *   **uninsneveruninstall**

        Instructs the uninstaller not to delete the icon.

    *   **useapppaths**

        When this flag is set, specify just a filename (no path) in the Filename parameter, and Setup will retrieve the pathname from the "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths" registry key and prepend it to the filename automatically.

        Example:

            Flags: runminimized
            

/`INI` section
===============

This optional section defines any .INI file entries you would like Setup to set on the user's system.

Here is an example of an [INI] section:

    [INI]
    Filename: "MyProg.ini"; Section: "InstallSettings"; Flags: uninsdeletesection
    Filename: "MyProg.ini"; Section: "InstallSettings"; Key: "InstallPath"; String: "{app}"

    The following is a list of the supported [parameters]:

*   **Filename**  _(Required)_

    The name of the .INI file you want Setup to modify, which can include constants. If this parameter does not include a path, it will write to the Windows directory. If this parameter is blank, it will write to WIN.INI in the Windows directory.

    Example:

        Filename: "{app}\MyProg.ini"

*   **Section**  _(Required)_

    The name of the section in which to create the entry, which can include constants.

    Example:

        Section: "Settings"

*   **Key**

    The name of the key to set, which can include constants. If this parameter is not specified or is blank, no key is created.

    Example:

        Key: "Version"

*   **String**

    The value to assign to the key, which can use constants. If this parameter is not specified, no key is created.

    Example:

        String: "1.0"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **createkeyifdoesntexist**

        Assign to the key _only_ if the key doesn't already exist in the file. If this flag is _not_ specified, the key will be set regardless of whether it already existed.

    *   **uninsdeleteentry**

        Delete the entry when the program is uninstalled. This can be combined with the uninsdeletesectionifempty flag.

    *   **uninsdeletesection**

        When the program is uninstalled, delete the entire section in which the entry is located. It obviously wouldn't be a good idea to use this on a section that is used by Windows itself (like some of the sections in WIN.INI). You should only use this on sections private to your application.

    *   **uninsdeletesectionifempty**

        Same as uninsdeletesection, but deletes the section only if there are no keys left in it. This can be combined with the uninsdeleteentry flag.

    Example:

        Flags: uninsdeleteentry
        

/`InstallDelete` section
=========================

This optional section is identical in format to the [UninstallDelete] section, except its entries are processed as the first step of _installation._

/`Languages` section
=====================

Inno Setup supports multilingual installations. The [Languages] section defines the languages to make available to the Setup program.

Setup determines the default language to use for its messages in the following order:

1.  It searches for a language whose LanguageID setting (normally specified in the [LangOptions] section of the language's .isl file) matches both the primary language identifier and sublanguage identifier of the current user's UI language or locale (depending on the setting of [LanguageDetectionMethod]).
2.  If no match is found, it searches for just a primary language identifier match. If two or more available languages have the same primary language identifier, it selects the first one listed in the [Languages] section.  
    Exception: Simplified Chinese is excluded from consideration in this step if the user's UI language or locale (depending on the setting of [LanguageDetectionMethod]) is Traditional Chinese, and vice versa.
3.  If no match is found, it defaults to the first language specified in the [Languages] section.

If the [ShowLanguageDialog] [Setup] section directive is set to yes (the default), a _Select Language_ dialog will be displayed which gives the user an opportunity to override the language Setup chose. See the [[LangOptions] section] help topic for details.

The following is an example of a [Languages] section. It defines two languages: English, based on the standard Default.isl file, and Dutch, based on a third-party translation.

    [Languages]
    Name: "en"; MessagesFile: "compiler:Default.isl"
    Name: "nl"; MessagesFile: "compiler:Languages\Dutch.isl"

*   **Name**  _(Required)_

    The internal name of the language, which you can set to anything you like. This can used as a prefix on [LangOptions] or [Messages] section entries to have the entries apply to only one language. The {language} constant returns the internal name of the selected language.

    Example:

        Name: "en"

*   **MessagesFile**  _(Required)_

    Specifies the name(s) of the .isl file(s) to read the default messages from. The file(s) must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

    Each message file may contain a [[LangOptions] section], a [[Messages] section], and a [`CustomMessages` section.]

    When multiple files are specified, they are read in the order they are specified, thus the last message file overrides any language options or messages from previous files. Any language options or messages in the main script override the ones from message files.

    If an Unicode file is used, it must be UTF-8 encoded with a BOM.

    Examples:

    MessagesFile: "compiler:Dutch.isl"
        MessagesFile: "compiler:Default.isl,compiler:MyMessages.isl"

*   **LicenseFile**

    Specifies the name of an optional license agreement file, in .txt or .rtf (rich text) format, which is displayed before the user selects the destination directory for the program. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

    If an Unicode .txt file is used, it must be UTF-8 or UTF-16LE encoded with a BOM.

    Example:

        LicenseFile: "license-Dutch.txt"

*   **InfoBeforeFile**

    Specifies the name of an optional "readme" file, in .txt or .rtf (rich text) format, which is displayed before the user selects the destination directory for the program. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

    If an Unicode .txt file is used, it must be UTF-8 or UTF-16LE encoded with a BOM.

    Example:

        InfoBeforeFile: "infobefore-Dutch.txt"

*   **InfoAfterFile**

    Specifies the name of an optional "readme" file, in .txt or .rtf (rich text) format, which is displayed after a successful install. This file must be located in your installation's [source directory] when running the compiler, unless a fully qualified pathname is specified or the pathname is prefixed by "compiler:", in which case it looks for the file in the compiler directory.

    This differs from isreadme files in that this text is displayed as a page of the wizard, instead of in a separate Notepad window.

    If an Unicode .txt file is used, it must be UTF-8 or UTF-16LE encoded with a BOM.

    Example:

        InfoAfterFile: "infoafter-Dutch.txt"

/`Messages` section
====================

A [Messages] section is used to define the messages displayed by the Setup program and uninstaller. Normally, you need not create a [Messages] section in your script file, since all messages are, by default, pulled in from the file _Default.isl_ included with Inno Setup (or whichever file is specified by a [Languages] section entry).

However, particular messages can be overridden by creating a [Messages] section in your script file. To do this, first you will need to know the ID of the message you want to change. This can be easily found by searching Default.isl. For example, say you wanted to change the "&Next" button on the wizard to read "&Forward". The ID of this message is "ButtonNext", so you would create a [Messages] section like this:

    [Messages]
    ButtonNext=&Forward

Some messages take arguments such as %1 and %2. You can rearrange the order of the arguments (i.e. move the %2 before a %1) and also duplicate arguments if needed (i.e. "%1 ... %1 %2"). On messages with arguments, use two consecutive "%" characters to embed a single "%". "%n" creates a line break.

If you wish to translate all of Inno Setup's text to another language, instead of modifying Default.isl or overriding each message in every script you create, make a copy of Default.isl with another name like _MyTranslation.isl._ On any installation you wish to use MyTranslation.isl, create a [[Languages] section] entry pointing to the file.

In cases where there are multiple [Languages] section entries, specifying a [Messages] section entry in your script (as opposed to an .isl file) will by default override that message for all languages. To apply a [Messages] section entry to only one language, prefix it with the language's internal name followed by a period. For example:

    en.ButtonNext=&Forward

If a message is missing or not recognized for a language, the compiler will warn you about this, which can be disabled using [MissingMessagesWarning] and [NotRecognizedMessagesWarning].

Special-purpose messages
------------------------

The BeveledLabel message can be used to specify a line of text that is shown in the lower left corner of the wizard window and uninstaller window. The following is an example:

    [Messages]
    BeveledLabel=Inno Setup

The HelpTextNote message can be used to specify one or more lines of text that are added to the list of parameters in the summary shown when passing [/HELP] on the command line. The following is an example:

    [Messages]
    HelpTextNote=/PORTABLE=1%nEnable portable mode.

These special-purpose messages default to an empty string so make sure to provide a non-empty default for all languages from your main script if you want to use these messages.


/`CustomMessages` section
==========================

A `CustomMessages` section is used to define the custom message values for {cm:...} constants. See the [Constants] documentation for more information.

An example of a task with a description taken from the `CustomMessages` section using a {cm:...} constant:

    [CustomMessages]
    CreateDesktopIcon=Create a &desktop icon

    [Tasks]
    Name: desktopicon; Description: "{cm:CreateDesktopIcon}"

Messages may take arguments, from %1 up to %9. You can rearrange the order of the arguments (i.e. move the %2 before a %1) and also duplicate arguments if needed (i.e. "%1 ... %1 %2"). On messages with arguments, use two consecutive "%" characters to embed a single "%". "%n" creates a line break.

In cases where there are multiple [Languages] section entries, specifying a `CustomMessages` section entry in your script (as opposed to an .isl file) will by default override that message for all languages. To apply a `CustomMessages` section entry to only one language, prefix it with the language's internal name followed by a period. For example:

nl.CreateDesktopIcon=Maak een snelkoppeling op het &bureaublad

Currently, the .isl files for all languages that come with Inno Setup have the following custom messages defined and translated for each language (shown here with their English values):

    NameAndVersion=%1 version %2
    AdditionalIcons=Additional icons:
    CreateDesktopIcon=Create a &desktop icon
    CreateQuickLaunchIcon=Create a &Quick Launch icon
    ProgramOnTheWeb=%1 on the Web
    UninstallProgram=Uninstall %1
    LaunchProgram=Launch %1
    AssocFileExtension=&Associate %1 with the %2 file extension
    AssocingFileExtension=Associating %1 with the %2 file extension...
    AutoStartProgramGroupDescription=Startup:
    AutoStartProgram=Automatically start %1
    AddonHostProgramNotFound=%1 could not be located in the folder you selected.%n%nDo you want to continue anyway?

You may use these predefined custom messages in your own script. An example which uses UninstallProgram:

    [Icons]
    Name: "{group}\{cm:UninstallProgram,My Program}"; Filename: "{uninstallexe}"

/`LangOptions` section
=======================

A [LangOptions] section is used to define the language-specific settings, such as fonts, used by the Setup program and uninstaller. Normally, you need not create a [LangOptions] section in your script file, since the language-specific settings are, by default, pulled in from the file _Default.isl_ included with Inno Setup (or whichever file is specified by a [Languages] section entry).

The following is an example of a [LangOptions] section. (The settings listed below are the defaults.)

    [LangOptions]
    LanguageName=English
    LanguageID=$0409
    LanguageCodePage=0
    DialogFontName=
    DialogFontSize=8
    WelcomeFontName=Verdana
    WelcomeFontSize=12
    TitleFontName=Arial
    TitleFontSize=29
    CopyrightFontName=Arial
    CopyrightFontSize=8
    RightToLeft=no

**LanguageName** is the native name of the language (so not the English name). It is displayed in the list of available languages on the _Select Language_ dialog in a multilingual installation.

**LanguageID** is the numeric "language identifier" of the language. Refer to the [list of valid language identifiers on MSDN](http://msdn.microsoft.com/en-us/library/dd318693.aspx "http://msdn.microsoft.com/en-us/library/dd318693.aspx"). This, along with LanguageCodePage, is used for the purpose of auto-detecting the most appropriate language to use by default, so be sure it is set correctly. It should always begin with a "$" sign, since language identifiers are in hexadecimal. If no language identifier currently exists for the language, set this to zero.

**LanguageCodePage** specifies the "code page" (character set) used by the compiler to convert any ASCII text in the language's files to Unicode text. Note that any text in the .iss file such as a `CustomMessages` entry for the language is never converted and should be in Unicode already.  
If no code page currently exists for the language, set LanguageCodePage to zero and only use Unicode text (UTF-8) in the languages's files.  
If LanguageCodePage is set to zero but ASCII text is used in one of the language's files, the system code page will be used to convert the text in the file to Unicode.

**DialogFontName** and **DialogFontSize** specify the font name and point size to use in dialogs. If no DialogFontName setting is present, then the value of the [DefaultDialogFontName] [Setup] section directive is used for the font name. If the specified font name does not exist on the user's system or is an empty string, 8-point _Microsoft Sans Serif_ or _MS Sans Serif_ will be substituted.

**WelcomeFontName** and **WelcomeFontSize** specify the font name and point size to use at the top of the _Welcome_ and _Setup Completed_ wizard pages. If the specified font name does not exist on the user's system or is an empty string, 12-point _Microsoft Sans Serif_ or _MS Sans Serif_ will be substituted.

**TitleFontName** and **TitleFontSize** specify the font name and point size to use when displaying the application name on the background window (only visible when WindowVisible=yes). If the specified font name does not exist on the user's system, 29-point _Arial_ will be substituted. If the specified font name is an empty string, 29-point _Microsoft Sans Serif_ or _MS Sans Serif_ will be substituted.

**CopyrightFontName** and **CopyrightFontSize** specify the font name and point size to use when displaying the AppCopyright message on the background window (only visible when WindowVisible=yes). If the specified font name does not exist on the user's system, 8-point _Arial_ will be substituted. If the specified font name is an empty string, 8-point _Microsoft Sans Serif_ or _MS Sans Serif_ will be substituted.

**RightToLeft** specifies whether the language is written from right to left. If set to yes, text alignment and reading order will be reversed (with some intentional exceptions), and controls will be arranged from right to left ("flipped").

  
In cases where there are multiple [Languages] section entries, specifying a [LangOptions] section directive in your script (as opposed to an .isl file) will by default override that directive for all languages. To apply a [LangOptions] section directive to only one language, prefix it with the language's internal name followed by a period. For example:

    en.LanguageName=English

/`Registry` section
====================

This optional section defines any registry keys/values you would like Setup to create, modify, or delete on the user's system.

By default, registry keys and values created by Setup are not deleted at uninstall time. If you want the uninstaller to delete keys or values, you must include one of the uninsdelete* flags described below.

The following is an example of a `Registry` section.

    [Registry]
    Root: HKLM; Subkey: "Software\My Company"; Flags: uninsdeletekeyifempty
    Root: HKLM; Subkey: "Software\My Company\My Program"; Flags: uninsdeletekey
    Root: HKLM; Subkey: "Software\My Company\My Program\Settings"; ValueType: string; ValueName: "InstallPath"; ValueData: "{app}"

The following is a list of the supported [parameters]:

*   **Root**  _(Required)_

    The root key. This must be one of the following values:

        HKCU    (HKEY_CURRENT_USER)
        HKLM    (HKEY_LOCAL_MACHINE)
        HKCR    (HKEY_CLASSES_ROOT)
        HKU     (HKEY_USERS)
        HKCC    (HKEY_CURRENT_CONFIG)


    Additionally one special value is allowed:

        HKA     (equals HKLM in [administrative install mode], HKCU otherwise)

    HKCU and HKA should only be used for settings which are compatible with roaming profiles.

    Using HKCR is not recommended, use HKA with the Subkey parameter set to "Software\Classes" instead.

    The values (including HKA) may have a suffix of 32 or 64. Root key values with a suffix of 32 (for example, HKLM32) map to the 32-bit view of the registry; root key values with a suffix of 64 (for example, HKLM64) map to the 64-bit view of the registry.

    Root key values with a suffix of 64 can only be used when Setup is running on 64-bit Windows, otherwise an error will occur. On an installation supporting both 32- and 64-bit architectures, it is possible to avoid the error by adding a Check: IsWin64 parameter, which will cause the entry to be silently skipped when running on 32-bit Windows.

    A root key value without a suffix (for example, HKLM) is equivalent to the value with a suffix of 32 (for example, HKLM32) unless the install is running in [64-bit install mode], in which case it is equivalent to the value with a suffix of 64 (for example, HKLM64).

    Example:

        Root: HKLM

*   **Subkey**  _(Required)_

    The subkey name, which can include constants.

    Example:

        Subkey: "Software\My Company\My Program"

*   **ValueType**

    The data type of the value. This must be one of the following:

    none  
    string  
    expandsz  
    multisz  
    dword  
    qword  
    binary

    If none (the default setting) is specified, Setup will create the key but _not_ a value. In this case the ValueData parameter is ignored.  
    If string is specified, Setup will create a string (REG_SZ) value.  
    If expandsz is specified, Setup will create an expand-string (REG_EXPAND_SZ) value.  
    If multisz is specified, Setup will create an multi-string (REG_MULTI_SZ) value.  
    If dword is specified, Setup will create a 32-bit integer (REG_DWORD) value.  
    If qword is specified, Setup will create a 64-bit integer (REG_QWORD) value.  
    If binary is specified, Setup will create a binary (REG_BINARY) value.

    Example:

        ValueType: string

*   **ValueName**

    The name of the value to modify, which can include constants. If this is blank, it will modify the "Default" value.

    Example:

        ValueName: "Version"

*   **ValueData**

    The data for the value. If the ValueType parameter is string, expandsz, or multisz, this is a string that can include constants. If the data type is dword or qword, this can be a decimal integer (e.g. "123"), a hexadecimal integer (e.g. "$7B"), or a constant which resolves to an integer. If the data type is binary, this is a sequence of hexadecimal bytes in the form: "00 ff 12 34". If the data type is none, this is ignored.

    On a string, expandsz, or multisz type value, you may use a special constant called {olddata} in this parameter. {olddata} is replaced with the previous data of the registry value. The {olddata} constant can be useful if you need to append a string to an existing value, for example, {olddata};{app}. If the value does not exist or the existing value isn't a string type, the {olddata} constant is silently removed. {olddata} will also be silently removed if the value being created is a multisz type but the existing value is not a multi-string type (i.e. it's REG_SZ or REG_EXPAND_SZ), and vice versa.

    On a multisz type value, you may use a special constant called {break} in this parameter to embed line breaks (nulls).

    Example:

        ValueData: "1.0"

*   **Permissions**

    Specifies additional permissions to grant in the registry key's ACL (access control list). It is not recommended that you use this parameter if you aren't familiar with ACLs or why you would need to change them, because misusing it could negatively impact system security.

    For this parameter to have an effect the current user must be able to change the permissions on the registry key. In the event these conditions are not met, no error message will be displayed, and the permissions will not be set.

    This parameter should _only_ be used on registry keys private to your application. Never change the ACLs on a top-level key like HKEY_LOCAL_MACHINE\SOFTWARE, otherwise you can open up security holes on your users' systems.

    The specified permissions are set regardless of whether the registry key existed prior to installation. The permissions are not set if ValueType is none and the deletekey flag or deletevalue flag is used.

    On Itanium editions of Windows, this parameter is only effectual on 32-bit registry keys. (There is no such limitation on x64 editions of Windows.)

    This parameter can include one or more space separated values in the format:

        [<user or group identifier>]-<access type>

    The following access types are supported for the `Registry` section:

    *   **full**

        Grants "Full Control" permission, which is the same as modify (see below), but additionally allows the specified user/group to take ownership of the registry key and change its permissions. Use sparingly; generally, modify is sufficient.

    *   **modify**

        Grants "Modify" permission, which allows the specified user/group to read, create, modify, and delete values and subkeys.

    *   **read**

        Grants "Read" permission, which allows the specified user/group to read values and subkeys.

        Example:

            Permissions: users-modify

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **createvalueifdoesntexist**

        When this flag is specified, Setup will create the value _only_ if a value of the same name doesn't already exist. This flag has no effect if the data type is none, or if you specify the deletevalue flag.

    *   **deletekey**

        When this flag is specified, Setup will first try deleting the entire key if it exists, including all values and subkeys in it. If ValueType is not none, it will then create a new key and value.

        To prevent disasters, this flag is ignored during installation if Subkey is blank or contains only backslashes.

    *   **deletevalue**

        When this flag is specified, Setup will first try deleting the value if it exists. If ValueType is not none, it will then create the key if it didn't already exist, and the new value.

    *   **dontcreatekey**

        When this flag is specified, Setup will not attempt to create the key or any value if the key did not already exist on the user's system. No error message is displayed if the key does not exist.

        Typically this flag is used in combination with the uninsdeletekey flag, for deleting keys during uninstallation but not creating them during installation.

    *   **noerror**

        Don't display an error message if Setup fails to create the key or value for any reason.

    *   **preservestringtype**

        This is only applicable when the ValueType parameter is string or expandsz. When this flag is specified and the value did not already exist or the existing value isn't a string type (REG_SZ or REG_EXPAND_SZ), it will be created with the type specified by ValueType. If the value did exist and is a string type, it will be replaced with the same value type as the pre-existing value.

    *   **uninsclearvalue**

        When the program is uninstalled, set the value's data to a null string (type REG_SZ). This flag cannot be combined with the uninsdeletekey flag.

    *   **uninsdeletekey**

        When the program is uninstalled, delete the entire key, including all values and subkeys in it. It obviously wouldn't be a good idea to use this on a key that is used by Windows itself. You should only use this on keys private to your application.

        To prevent disasters, this flag is ignored during installation if Subkey is blank or contains only backslashes.

    *   **uninsdeletekeyifempty**

        When the program is uninstalled, delete the key if it has no values or subkeys left in it. This flag can be combined with uninsdeletevalue.

        To prevent disasters, this flag is ignored during installation if Subkey is blank or contains only backslashes.

    *   **uninsdeletevalue**

        Delete the value when the program is uninstalled. This flag can be combined with uninsdeletekeyifempty.

        **NOTE:** In Inno Setup versions prior to 1.1, you could use this flag along with the data type none and it would function as a "delete key if empty" flag. This technique is no longer supported. You must now use the uninsdeletekeyifempty flag to accomplish this.

        Example:

            Flags: uninsdeletevalue


/`Run` & `UninstallRun` sections
===================================

The [Run] section is optional, and specifies any number of programs to execute after the program has been successfully installed, but before the Setup program displays the final dialog. The [UninstallRun] section is optional as well, and specifies any number of programs to execute as the first step of _uninstallation._ Both sections share an identical syntax, except where otherwise noted below.

Programs are executed in the order they appear in the script. By default, when processing a [Run]/[UninstallRun] entry, Setup/Uninstall will wait until the program has terminated before proceeding to the next one, unless the nowait, shellexec, or waituntilidle flags are used.

Note that by default, if a program executed in the [Run] section queues files to be replaced on the next reboot (by calling MoveFileEx or by modifying wininit.ini), Setup will detect this and prompt the user to restart the computer at the end of installation. If you don't want this, set the [RestartIfNeededByRun] directive to no.

The following is an example of a [Run] section.

    [Run]
    Filename: "{app}\INIT.EXE"; Parameters: "/x"
    Filename: "{app}\README.TXT"; Description: "View the README file"; Flags: postinstall shellexec skipifsilent
    Filename: "{app}\MYPROG.EXE"; Description: "Launch application"; Flags: postinstall nowait skipifsilent unchecked

The following is a list of the supported [parameters]:

*   **Filename**  _(Required)_

    The program to execute, or file/folder to open. If Filename is not an executable (.exe or .com) or batch file (.bat or .cmd), you _must_ use the shellexec flag on the entry. This parameter can include constants.

    Example:

        Filename: "{app}\INIT.EXE"

*   **Description**

    Valid only in a [Run] section. The description of the entry, which can include constants. This description is used for entries with the postinstall flag. If the description is not specified for an entry, Setup will use a default description. This description depends on the type of the entry (normal or shellexec).

    Example:

        Description: "View the README file"

*   **Parameters**

    Optional command line parameters for the program, which can include constants.

    Example:

        Parameters: "/x"

*   **WorkingDir**

    The initial current directory for the program. If this parameter is not specified or is blank, it uses the directory from the Filename parameter; if Filename does not include a path, it will use a default directory. This parameter can include constants.

    Example:

        WorkingDir: "{app}"

*   **StatusMsg**

    Valid only in a [Run] section. Determines the message displayed on the wizard while the program is executed. If this parameter is not specified or is blank, a default message of "Finishing installation..." will be used. This parameter can include constants.

    Example:

        StatusMsg: "Installing BDE..."

*   **RunOnceId**

    Valid only in an [UninstallRun] section. If the [same application] is installed more than once, "run" entries will be duplicated in the uninstall log file. By assigning a string to RunOnceId, you can ensure that a particular [UninstallRun] entry will only be executed once during uninstallation. For example, if two or more "run" entries in the uninstall log have a RunOnceId setting of "DelService", only the latest entry with a RunOnceId setting of "DelService" will be executed; the rest will be ignored. Note that RunOnceId comparisons are case-sensitive. If you don't assign a string to RunOnceId, the compiler will warn you about this, which can be disabled using [MissingRunOnceIdsWarning].

    Example:

        RunOnceId: "DelService"

*   **Verb**

    Specifies the action to be performed on the file. Must be combined with the shellexec flag. Commonly available verbs include "open" and "print". If this parameter is not specified or is blank, the default verb for the file type will be used (typically "open").

    Example:

        Verb: "print"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **32bit**

        Causes the {sys} constant to map to the 32-bit System directory when used in the Filename and WorkingDir parameters. This is the default behavior in [32-bit install mode].

        This flag cannot be combined with the shellexec flag.

    *   **64bit**

        Causes the {sys} constant to map to the 64-bit System directory when used in the Filename and WorkingDir parameters. This is the default behavior in [64-bit install mode] install.

        This flag can only be used when Setup is running on 64-bit Windows, otherwise an error will occur. On an installation supporting both 32- and 64-bit architectures, it is possible to avoid the error by adding a Check: IsWin64 parameter, which will cause the entry to be silently skipped when running on 32-bit Windows.

        This flag cannot be combined with the shellexec flag.

    *   **dontlogparameters**

        If this flag is specified, the command line parameters for the program will not be included in the log file.

    *   **hidewizard**

        If this flag is specified, the wizard will be hidden while the program is running.

    *   **nowait**

        If this flag is specified, it will not wait for the process to finish executing before proceeding to the next [Run] entry, or completing Setup. Cannot be combined with waituntilidle or waituntilterminated.

    *   **postinstall**

        Valid only in a [Run] section. Instructs Setup to create a checkbox on the _Setup Completed_ wizard page. The user can uncheck or check this checkbox and thereby choose whether this entry should be processed or not. Previously this flag was called showcheckbox.

        If Setup has to restart the user's computer (as a result of installing a file with the flag restartreplace or if the AlwaysRestart [Setup] section directive is yes), there will not be an opportunity for the checkbox to be displayed and therefore the entry will never be processed.

        The isreadme flag for entries in the [Files] section is now obsolete. If the compiler detects a entry with an isreadme flag, it strips the isreadme flag from the [Files] entry and inserts a generated [Run] entry at the head of the list of [Run] entries. This generated [Run] entry runs the README file and has flags shellexec, skipifdoesntexist, postinstall and skipifsilent.

    *   **runascurrentuser**

        If this flag is specified, the spawned process will inherit Setup/Uninstall's user credentials (typically, full administrative privileges).

        This is the default behavior when the postinstall flag is not used.

        This flag cannot be combined with the runasoriginaluser flag.

    *   **runasoriginaluser**

        Valid only in a [Run] section. If this flag is specified, the spawned process will execute with the (normally non-elevated) credentials of the user that started Setup initially (i.e., the "pre-UAC dialog" credentials).

        This is the default behavior when the postinstall flag is used.

        If a user launches Setup by right-clicking its EXE file and selecting "Run as administrator", then this flag, unfortunately, will have no effect, because Setup has no opportunity to run any code with the original user credentials. The same is true if Setup is launched from an already-elevated process. Note, however, that this is not an Inno Setup-specific limitation; Windows Installer-based installers cannot return to the original user credentials either in such cases.

        This flag cannot be combined with the runascurrentuser flag.

    *   **runhidden**

        If this flag is specified, it will launch the program in a hidden window. Never use this flag when executing a program that may prompt for user input.

    *   **runmaximized**

        If this flag is specified, it will launch the program or document in a maximized window.

    *   **runminimized**

        If this flag is specified, it will launch the program or document in a minimized window.

    *   **shellexec**

        This flag is required if Filename is not a directly executable file (an .exe or .com file). When this flag is set, Filename can be a folder or any registered file type -- including .chm, .doc, and so on. The file will be opened with the application associated with the file type on the user's system, the same way it would be if the user double-clicked the file in Explorer.

        By default, when the shellexec flag is used it will not wait until the spawned process terminates. If you need that, you must add the flag waituntilterminated. Note that it cannot and will not wait if a new process isn't spawned -- for example, if Filename specifies a folder.

    *   **skipifdoesntexist**

        If this flag is specified in the [Run] section, Setup won't display an error message if Filename doesn't exist.

        If this flag is specified in the [UninstallRun] section, the uninstaller won't display the "some elements could not be removed" warning if Filename doesn't exist.

        When this flag is used, Filename must be an absolute path.

    *   **skipifnotsilent**

        Valid only in a [Run] section. Instructs Setup to skip this entry if Setup is not running (very) silent.

    *   **skipifsilent**

        Valid only in a [Run] section. Instructs Setup to skip this entry if Setup is running (very) silent.

    *   **unchecked**

        Valid only in a [Run] section. Instructs Setup to initially uncheck the checkbox. The user can still check the checkbox if they wishes to process the entry. This flag is ignored if the postinstall flag isn't also specified.

    *   **waituntilidle**

        If this flag is specified, it will wait until the process is waiting for user input with no input pending, instead of waiting for the process to terminate. (This calls the _WaitForInputIdle_ Win32 function.) Cannot be combined with nowait or waituntilterminated.

    *   **waituntilterminated**

        If this flag is specified, it will wait until the process has completely terminated. Note that this is the default behavior (i.e. you don't need to specify this flag) unless you're using shellexec flag, in which case you do need to specify this flag if you want it to wait. Cannot be combined with nowait or waituntilidle.

        Example:

            Flags: postinstall nowait skipifsilent


/`UninstallDelete` section
===========================

This optional section defines any additional files or directories you want the uninstaller to delete, besides those that were installed/created using [Files] or [Dirs] section entries. Deleting .INI files created by your application is one common use for this section. The uninstaller processes these entries as the last step of uninstallation.

Here is an example of a [UninstallDelete] section:

    [UninstallDelete]
    Type: files; Name: "{win}\MYPROG.INI"

The following is a list of the supported [parameters]:

*   **Type**  _(Required)_

    Specifies what is to be deleted by the uninstaller. This must be one of the following:

    *  files

        The Name parameter specifies a name of a particular file, or a filename with wildcards.

    *  filesandordirs

        Functions the same as files except it matches directory names also, and any directories matching the name are deleted including all files and subdirectories in them.

    *  dirifempty

        When this is used, the Name parameter must be the name of a directory, but it cannot include wildcards. The directory will only be deleted if it contains no files or subdirectories.

    Example:

        Type: files

*   **Name**  _(Required)_

    Name of the file or directory to delete.

    **NOTE:** Don't be tempted to use a wildcard here to delete all files in the {app} directory. Doing this is strongly recommend against for two reasons. First, users usually don't appreciate having their data files they put in the application directory deleted without warning (they might only be uninstalling it because they want to move it to a different drive, for example). It's better to leave it up to the end users to manually remove them if they want. Also, if the user happened to install the program in the wrong directory by mistake (for example, C:\WINDOWS) and then went to uninstall it there could be disastrous consequences. So again, **DON'T DO THIS!**

    Example:

        Name: "{win}\MYPROG.INI"



/`Run` & `UninstallRun` sections
===================================

The [Run] section is optional, and specifies any number of programs to execute after the program has been successfully installed, but before the Setup program displays the final dialog. The [UninstallRun] section is optional as well, and specifies any number of programs to execute as the first step of _uninstallation._ Both sections share an identical syntax, except where otherwise noted below.

Programs are executed in the order they appear in the script. By default, when processing a [Run]/[UninstallRun] entry, Setup/Uninstall will wait until the program has terminated before proceeding to the next one, unless the nowait, shellexec, or waituntilidle flags are used.

Note that by default, if a program executed in the [Run] section queues files to be replaced on the next reboot (by calling MoveFileEx or by modifying wininit.ini), Setup will detect this and prompt the user to restart the computer at the end of installation. If you don't want this, set the [RestartIfNeededByRun] directive to no.

The following is an example of a [Run] section.

    [Run]
    Filename: "{app}\INIT.EXE"; Parameters: "/x"
    Filename: "{app}\README.TXT"; Description: "View the README file"; Flags: postinstall shellexec skipifsilent
    Filename: "{app}\MYPROG.EXE"; Description: "Launch application"; Flags: postinstall nowait skipifsilent unchecked

The following is a list of the supported [parameters]:

*   **Filename**  _(Required)_

    The program to execute, or file/folder to open. If Filename is not an executable (.exe or .com) or batch file (.bat or .cmd), you _must_ use the shellexec flag on the entry. This parameter can include constants.

    Example:

        Filename: "{app}\INIT.EXE"

*   **Description**

    Valid only in a [Run] section. The description of the entry, which can include constants. This description is used for entries with the postinstall flag. If the description is not specified for an entry, Setup will use a default description. This description depends on the type of the entry (normal or shellexec).

    Example:

        Description: "View the README file"

*   **Parameters**

    Optional command line parameters for the program, which can include constants.

    Example:

        Parameters: "/x"

*   **WorkingDir**

    The initial current directory for the program. If this parameter is not specified or is blank, it uses the directory from the Filename parameter; if Filename does not include a path, it will use a default directory. This parameter can include constants.

    Example:

        WorkingDir: "{app}"

*   **StatusMsg**

    Valid only in a [Run] section. Determines the message displayed on the wizard while the program is executed. If this parameter is not specified or is blank, a default message of "Finishing installation..." will be used. This parameter can include constants.

    Example:

        StatusMsg: "Installing BDE..."

*   **RunOnceId**

    Valid only in an [UninstallRun] section. If the [same application] is installed more than once, "run" entries will be duplicated in the uninstall log file. By assigning a string to RunOnceId, you can ensure that a particular [UninstallRun] entry will only be executed once during uninstallation. For example, if two or more "run" entries in the uninstall log have a RunOnceId setting of "DelService", only the latest entry with a RunOnceId setting of "DelService" will be executed; the rest will be ignored. Note that RunOnceId comparisons are case-sensitive. If you don't assign a string to RunOnceId, the compiler will warn you about this, which can be disabled using [MissingRunOnceIdsWarning].

    Example:

        RunOnceId: "DelService"

*   **Verb**

    Specifies the action to be performed on the file. Must be combined with the shellexec flag. Commonly available verbs include "open" and "print". If this parameter is not specified or is blank, the default verb for the file type will be used (typically "open").

    Example:

        Verb: "print"

*   **Flags**

    This parameter is a set of extra options. Multiple options may be used by separating them by spaces. The following options are supported:

    *   **32bit**

        Causes the {sys} constant to map to the 32-bit System directory when used in the Filename and WorkingDir parameters. This is the default behavior in [32-bit install mode].

        This flag cannot be combined with the shellexec flag.

    *   **64bit**

        Causes the {sys} constant to map to the 64-bit System directory when used in the Filename and WorkingDir parameters. This is the default behavior in [64-bit install mode] install.

        This flag can only be used when Setup is running on 64-bit Windows, otherwise an error will occur. On an installation supporting both 32- and 64-bit architectures, it is possible to avoid the error by adding a Check: IsWin64 parameter, which will cause the entry to be silently skipped when running on 32-bit Windows.

        This flag cannot be combined with the shellexec flag.

    *   **dontlogparameters**

        If this flag is specified, the command line parameters for the program will not be included in the log file.

    *   **hidewizard**

        If this flag is specified, the wizard will be hidden while the program is running.

    *   **nowait**

        If this flag is specified, it will not wait for the process to finish executing before proceeding to the next [Run] entry, or completing Setup. Cannot be combined with waituntilidle or waituntilterminated.

    *   **postinstall**

        Valid only in a [Run] section. Instructs Setup to create a checkbox on the _Setup Completed_ wizard page. The user can uncheck or check this checkbox and thereby choose whether this entry should be processed or not. Previously this flag was called showcheckbox.

        If Setup has to restart the user's computer (as a result of installing a file with the flag restartreplace or if the AlwaysRestart [Setup] section directive is yes), there will not be an opportunity for the checkbox to be displayed and therefore the entry will never be processed.

        The isreadme flag for entries in the [Files] section is now obsolete. If the compiler detects a entry with an isreadme flag, it strips the isreadme flag from the [Files] entry and inserts a generated [Run] entry at the head of the list of [Run] entries. This generated [Run] entry runs the README file and has flags shellexec, skipifdoesntexist, postinstall and skipifsilent.

    *   **runascurrentuser**

        If this flag is specified, the spawned process will inherit Setup/Uninstall's user credentials (typically, full administrative privileges).

        This is the default behavior when the postinstall flag is not used.

        This flag cannot be combined with the runasoriginaluser flag.

    *   **runasoriginaluser**

        Valid only in a [Run] section. If this flag is specified, the spawned process will execute with the (normally non-elevated) credentials of the user that started Setup initially (i.e., the "pre-UAC dialog" credentials).

        This is the default behavior when the postinstall flag is used.

        If a user launches Setup by right-clicking its EXE file and selecting "Run as administrator", then this flag, unfortunately, will have no effect, because Setup has no opportunity to run any code with the original user credentials. The same is true if Setup is launched from an already-elevated process. Note, however, that this is not an Inno Setup-specific limitation; Windows Installer-based installers cannot return to the original user credentials either in such cases.

        This flag cannot be combined with the runascurrentuser flag.

    *   **runhidden**

        If this flag is specified, it will launch the program in a hidden window. Never use this flag when executing a program that may prompt for user input.

    *   **runmaximized**

        If this flag is specified, it will launch the program or document in a maximized window.

    *   **runminimized**

        If this flag is specified, it will launch the program or document in a minimized window.

    *   **shellexec**

        This flag is required if Filename is not a directly executable file (an .exe or .com file). When this flag is set, Filename can be a folder or any registered file type -- including .chm, .doc, and so on. The file will be opened with the application associated with the file type on the user's system, the same way it would be if the user double-clicked the file in Explorer.

        By default, when the shellexec flag is used it will not wait until the spawned process terminates. If you need that, you must add the flag waituntilterminated. Note that it cannot and will not wait if a new process isn't spawned -- for example, if Filename specifies a folder.

    *   **skipifdoesntexist**

        If this flag is specified in the [Run] section, Setup won't display an error message if Filename doesn't exist.

        If this flag is specified in the [UninstallRun] section, the uninstaller won't display the "some elements could not be removed" warning if Filename doesn't exist.

        When this flag is used, Filename must be an absolute path.

    *   **skipifnotsilent**

        Valid only in a [Run] section. Instructs Setup to skip this entry if Setup is not running (very) silent.

    *   **skipifsilent**

        Valid only in a [Run] section. Instructs Setup to skip this entry if Setup is running (very) silent.

    *   **unchecked**

        Valid only in a [Run] section. Instructs Setup to initially uncheck the checkbox. The user can still check the checkbox if they wishes to process the entry. This flag is ignored if the postinstall flag isn't also specified.

    *   **waituntilidle**

        If this flag is specified, it will wait until the process is waiting for user input with no input pending, instead of waiting for the process to terminate. (This calls the _WaitForInputIdle_ Win32 function.) Cannot be combined with nowait or waituntilterminated.

    *   **waituntilterminated**

        If this flag is specified, it will wait until the process has completely terminated. Note that this is the default behavior (i.e. you don't need to specify this flag) unless you're using shellexec flag, in which case you do need to specify this flag if you want it to wait. Cannot be combined with nowait or waituntilidle.

        Example:

            Flags: postinstall nowait skipifsilent



/Pascal Scripting
=================

Pascal Scripting: Introduction
------------------------------

The Pascal scripting feature (modern Delphi-like Pascal) adds lots of new possibilities to customize your Setup or Uninstall at run-time. Some examples:

*   Support for aborting Setup or Uninstall startup under custom conditions.
*   Support for adding custom wizard pages to Setup at run-time.
*   Support for extracting and calling DLL or other files from the Pascal script before, during or after the installation.
*   Support for scripted constants that can do anything the normal constants, the read-from-registry, read-from-ini and read-from-commandline constants can do + more.
*   Support for run-time removal of types, components and/or tasks under custom conditions.
*   Support for conditional installation of [Files], `Registry`, [Run] etc. entries based on custom conditions.
*   Lots of support functions to do from the Pascal script just about everything Inno Setup itself does/can do + more.

An integrated [run-time debugger] to debug your custom Pascal script is also available.

The scripting engine used by Inno Setup is RemObjects Pascal Script by Carlo Kok. Like Inno Setup, RemObjects Pascal Script is freely available and comes with source. See [http://www.remobjects.com/ps](http://www.remobjects.com/ps "http://www.remobjects.com/ps") for more information.

Note: the Pascal scripting feature works exclusively at run-time, and has no compile-time functionality.


Pascal Scripting: Creating the [Code] Section
---------------------------------------------

The [Code] section is an optional section that specifies a Pascal script. A Pascal script can be used to customize Setup or Uninstall in many ways. Note that creating a Pascal script is not easy and requires experience with Inno Setup and knowledge about programming in Pascal or at least a similar programming language.

The "Code*.iss" and "UninstallCode*.iss" files in the "Examples" subdirectory in your Inno Setup directory contain various example [Code] sections. Please study them carefully before trying to create your own Pascal script.

Note: to learn more about the Pascal programming language you may find useful to refer to Marco Cantù's free Essential Pascal book. See [http://www.marcocantu.com/epascal/](http://www.marcocantu.com/epascal/ "http://www.marcocantu.com/epascal/") and [https://www.marcocantu.com/epascal/EssentialPascal.zip](https://www.marcocantu.com/epascal/EssentialPascal.zip "https://www.marcocantu.com/epascal/EssentialPascal.zip").  Pascal Scripting: Event Functions 

Pascal Scripting: Event Functions
---------------------------------

The Pascal script can contain several event functions which are called at appropriate times.

### Setup event functions
---------------------

Setup supports following event functions:

*   **function InitializeSetup(): Boolean;**

    Called during Setup's initialization. Return False to abort Setup, True otherwise.

*   **procedure InitializeWizard();**

    Use this event function to make changes to the wizard or wizard pages at startup. You can't use the InitializeSetup event function for this since at the time it is triggered, the wizard form does not yet exist.

*   **procedure DeinitializeSetup();**

    Called just before Setup terminates. Note that this function is called even if the user exits Setup before anything is installed.

*   **procedure CurStepChanged(CurStep: [TSetupStep]);**

    You can use this event function to perform your own pre-install and post-install tasks.

    Called with CurStep=ssInstall just before the actual installation starts, with CurStep=ssPostInstall just after the actual installation finishes, and with CurStep=ssDone just before Setup terminates after a successful install.

*   **procedure CurInstallProgressChanged(CurProgress, MaxProgress: Integer);**

    You can use this event function to monitor progress while Setup is extracting files, creating shortcuts, creating INI entries, and creating registry entries.

*   **function NextButtonClick([CurPageID]: Integer): Boolean;**

    Called when the user clicks the Next button. If you return True, the wizard will move to the next page; if you return False, it will remain on the current page (specified by CurPageID).

    Note that this function is called on silent installs as well, even though there is no Next button that the user can click. Setup instead simulates "clicks" on the Next button. On a silent install, if your NextButtonClick function returns False prior to installation starting, Setup will exit automatically.

*   **function BackButtonClick([CurPageID]: Integer): Boolean;**

    Called when the user clicks the Back button. If you return True, the wizard will move to the previous page; if you return False, it will remain on the current page (specified by CurPageID).

*   **procedure CancelButtonClick([CurPageID]: Integer; var Cancel, Confirm: Boolean);**

    Called when the user clicks the Cancel button or clicks the window's Close button. The Cancel parameter specifies whether normal cancel processing should occur; it defaults to True. The Confirm parameter specifies whether an "Exit Setup?" message box should be displayed; it usually defaults to True. If Cancel is set to False, then the value of Confirm is ignored.

*   **function ShouldSkipPage([PageID]: Integer): Boolean;**

    The wizard calls this event function to determine whether or not a particular page (specified by PageID) should be shown at all. If you return True, the page will be skipped; if you return False, the page may be shown.

    Note: This event function isn't called for the wpPreparing, and wpInstalling pages, nor for pages that Setup has already determined should be skipped (for example, wpSelectComponents in an install containing no components).

*   **procedure CurPageChanged([CurPageID]: Integer);**

    Called after a new wizard page (specified by CurPageID) is shown.

*   **function CheckPassword(Password: String): Boolean;**

    If Setup finds the CheckPassword event function in the Pascal script, it automatically displays the _Password_ page and calls CheckPassword to check passwords. Return True to accept the password and False to reject it.

    To avoid storing the actual password inside the compiled [Code] section which is stored inside Setup, you should use comparisons by hash only: calculate the SHA-1 hash of your salted password yourself and then compare that to [GetSHA1OfString](Password). This way the actual value of the password remains protected.

    Note: If Setup is run with a /PASSWORD= [command line parameter], your CheckPassword function will be called _before_ any other event function is called, including [InitializeSetup].

*   **function NeedRestart(): Boolean;**

    Return True to instruct Setup to prompt the user to restart the system at the end of a successful installation, False otherwise.

*   **function UpdateReadyMemo(Space, NewLine, MemoUserInfoInfo, MemoDirInfo, MemoTypeInfo, MemoComponentsInfo, MemoGroupInfo, MemoTasksInfo: String): String;**

    If Setup finds the UpdateReadyMemo event function in the Pascal script, it is called automatically when the _Ready to Install_ wizard page becomes the active page. It should return the text to be displayed in the settings memo on the _Ready to Install_ wizard page as a single string with lines separated by the NewLine parameter. Parameter Space contains a string with spaces. Setup uses this string to indent settings. The other parameters contain the (possibly empty) strings that Setup would have used as the setting sections. The MemoDirInfo parameter for example contains the string for the _Selected Directory_ section.

*   **procedure RegisterPreviousData(PreviousDataKey: Integer);**

    To store user settings entered on custom wizard pages, place a RegisterPreviousData event function in the Pascal script and call [SetPreviousData(PreviousDataKey, ...)] inside it, once per setting.

*   **function CheckSerial(Serial: String): Boolean;**

    If Setup finds the CheckSerial event function in the Pascal script, a serial number field will automatically appear on the User Info wizard page (which must be enabled using UserInfoPage=yes in your [Setup] section!). Return True to accept the serial number and False to reject it. When using serial numbers, it's important to keep in mind that since no encryption is used and the source code to Inno Setup is freely available, it would not be too difficult for an experienced individual to remove the serial number protection from an installation. Use this only as a convenience to the end user and double check the entered serial number (stored in the {userinfoserial} constant) in your application.

*   **function GetCustomSetupExitCode: Integer;**

    Return a non zero number to instruct Setup to return a custom exit code. This function is only called if Setup was successfully run to completion and the exit code would have been 0. Also see [Setup Exit Codes].

*   **function PrepareToInstall(var NeedsRestart: Boolean): String;**

    You can use this event function to detect and install missing prerequisites and/or to shutdown any application which is about to be updated.

    Return a non empty string to instruct Setup to stop at the [Preparing to Install] wizard page, showing the returned string as the error message. Set NeedsRestart to True (and return a non empty string) if a restart is needed. If Setup is stopped this way, it will exit with a dedicated exit code as described in [Setup Exit Codes]. Any custom exit code set by the /RESTARTEXITCODE= [command line parameter] will not be used in this case.

    This function is called before Setup checks for files being in-use if [CloseApplications] is set to yes.

    This function is only called if Setup didn't already determine it can't continue because one or more files specified in the [Files] and [InstallDelete] sections were queued (by some other installation) to be replaced or deleted on the next restart.

*   **procedure RegisterExtraCloseApplicationsResources;**

    To register extra files which Setup should check for being in-use if [CloseApplications] is set to yes, place a RegisterExtraCloseApplicationsResources event function in the Pascal script and call [RegisterExtraCloseApplicationsResource] inside it, once per file.

### Uninstall event functions
-------------------------

Uninstall supports following event functions:

*   **function InitializeUninstall(): Boolean;**

    Return False to abort Uninstall, True otherwise.

*   **procedure InitializeUninstallProgressForm();**

    Use this event function to make changes to the progress form at startup. You can't use the InitializeUninstall event function for this since at the time it is triggered, the progress form does not yet exist.

*   **procedure DeinitializeUninstall();**

*   **procedure CurUninstallStepChanged(CurUninstallStep: [TUninstallStep]);**

*   **function UninstallNeedRestart(): Boolean;**

    Return True to instruct Uninstall to prompt the user to restart the system at the end of a successful uninstallation, False otherwise.

### Constants
---------

Here's the list of constants used by these functions:

*   _TSetupStep values_  
    ssInstall, ssPostInstall, ssDone
*   _TUninstallStep values_  
    usAppMutexCheck, usUninstall, usPostUninstall, usDone
*   _PageID values for predefined [wizard pages]_  
    wpWelcome, wpLicense, wpPassword, wpInfoBefore, wpUserInfo, wpSelectDir, wpSelectComponents, wpSelectProgramGroup, wpSelectTasks, wpReady, wpPreparing, wpInstalling, wpInfoAfter, wpFinished

### Event Attributes
----------------

Normally a script can contain only one implementation per event function. Using event attributes it is possible to have multiple implementations of the same event function in your script. This is especially useful in included scripts implementing an event function to avoid conflicts with the main script.

Here is an example of a script which contains three implementations of the InitializeWizard event function.

    [Code]
    procedure InitializeWizard;
*   **begin**
      Log('InitializeWizard called');
    end;

    <event('InitializeWizard')>
    procedure InitializeWizard2;
*   **begin**
      Log('InitializeWizard2 called');
    end;

    <event('InitializeWizard')>
    procedure InitializeWizard3;
*   **begin**
      Log('InitializeWizard3 called');
    end;

The following rules apply:

*   The implementations will be called in order of their definition except that any main implementation (=the implementation without an event attribute) will be called last.
*   Event attributes may be used for all event functions. If the event function has a return value then lazy evaluation is performed:

*   InitializeSetup, BackButtonClick, NextButtonClick, InitializeUninstall: All implementations must return True for the event function to be treated as returning True and an implementation returning False stops the calls to the other implementations.
*   CheckPassword, CheckSerial, ShouldSkipPage, NeedRestart: All implementations must return False for the event function to be treated as returning False and an implementation returning True stops the calls to the other implementations.
*   UpdateReadyMemo, PrepareToInstall: All implementations must return an empty string for the event function to be treated as returning an empty string and an implementation returning a non empty string stops the calls to the other implementations.
*   GetCustomSetupExitCode: All implementations must return zero for the event function to be treated as returning zero and an implementation returning a non zero number stops the calls to the other implementations.

*   Event attributes may only be used on procedures or functions which do not already have the name of an event function.
*   If the event function uses var parameters then the value will be passed on from implementation to implementation.
*   To call an implementation with an event attribute yourself from [Code] you should use the normal name of the function, just as if the implementation had no event attribute.  Pascal Scripting: Scripted Constants 

Pascal Scripting: Scripted Constants
------------------------------------

The Pascal script can contain several functions which are called when Setup wants to know the value of a scripted {code:...} constant. The called function must have 1 String parameter named Param, and must return a String or a Boolean value depending on where the constant is used.

The syntax of a {code:...} constant is: {code:_FunctionName_|_Param_}

*   _FunctionName_ specifies the name of the Pascal script function.
*   _Param_ specifies the string parameter to pass to the function. If you omit _Param_, an empty string will be passed.
*   If you wish to include a comma, vertical bar ("|"), or closing brace ("}") inside the constant, you must escape it via "%-encoding." Replace the character with a "%" character, followed by its two-digit hex code. A comma is "%2c", a vertical bar is "%7c", and a closing brace is "%7d". If you want to include an actual "%" character, use "%25".
*   _Param_ may include constants. Note that you do _not_ need to escape the closing brace of a constant as described above; that is only necessary when the closing brace is used elsewhere.

Example:

DefaultDirName={code:MyConst}\My Program

Here is an example of a [Code] section containing the MyConst function used above.

    [Code]
    function MyConst(Param: String): String;
*   **begin**
      Result := ExpandConstant('{autopf}');
    end;

    If the function specified by the {code:...} constant is not included in the [Code] section, it must be a [support function]. Here is an example.

    [INI]
    FileName: "{app}\MyIni.ini"; Section: "MySettings"; Key: "ShortApp"; String: "{code:GetShortName|{app}}"


 **See also:**
[Constants]  Pascal Scripting: Check Parameters 

Pascal Scripting: Check Parameters
----------------------------------

There is one optional [parameter] that is supported by all sections whose entries are separated into parameters. This is:

**Check**

The name of a check function that determines whether an entry has to be processed or not. The function must either be a custom function in the [Code] section or a [support function].

Besides a single name, you may also use boolean expressions. See [Components and Tasks parameters] for examples of boolean expressions.

For each check function, may include a comma separated list of parameters that Setup should pass to the check function. Allowed parameter types are String, Integer and Boolean. String parameters may include constants. These constants will not be automatically expanded. If you want to pass an expanded constant, there's one special [support function] that may be called from within a parameter list for this: ExpandConstant.

Example:

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"; Check: MyProgCheck
    Source: "A\MYFILE.TXT"; DestDir: "{app}"; Check: MyDirCheck(ExpandConstant('{app}\A'))
    Source: "B\MYFILE.TXT"; DestDir: "{app}"; Check: DirExists(ExpandConstant('{app}\B'))

All check functions must have a Boolean return value. If a check function (or the boolean expression) returns True, the entry is processed otherwise it's skipped.

Setup might call each check function several times, even if there's only one entry that uses the check function. If your function performs a lengthy piece of code, you can optimize it by performing the code only once and 'caching' the result in a global variable.

A check function isn't called if Setup already determined the entry shouldn't be processed.

A check function for a [Files] section entry using a wildcard but not the external flag is called once per file matching the wildcard, instead of once per entry. Use CurrentFileName to check for which file the function is called.

Here is an example of a [Code] section containing the check functions used above. Function DirExists is a [support function] and therefore not included in this [Code] section.

    [Code]
*   **var**
      MyProgChecked: Boolean;
      MyProgCheckResult: Boolean;

    function MyProgCheck(): Boolean;
*   **begin**
      if not MyProgChecked then begin
        MyProgCheckResult := MsgBox('Do you want to install MyProg.exe to ' + ExtractFilePath(CurrentFileName) + '?', mbConfirmation, MB_YESNO) = idYes;
        MyProgChecked := True;
      end;
      Result := MyProgCheckResult;
    end;

    function MyDirCheck(DirName: String): Boolean;
*   **begin**
      Result := DirExists(DirName);
    end;  Pascal Scripting: BeforeInstall and AfterInstall Parameters 

Pascal Scripting: BeforeInstall and AfterInstall Parameters
-----------------------------------------------------------

There are two optional [parameters] that are supported by all sections whose entries are separated into parameters except for [Languages], [Types], [Components] and [Tasks]. These are:

**BeforeInstall**

The name of a function that is to be called once just before an entry is installed. The function must either be a custom function in the [Code] section or a [support function].

May include a comma separated list of parameters that Setup should pass to the function. Allowed parameter types are String, Integer and Boolean. String parameters may include constants. These constants will not be automatically expanded. If you want to pass an expanded constant, there's one special [support function] that may be called from within a parameter list for this: ExpandConstant.

Example:

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"; BeforeInstall: MyBeforeInstall
    Source: "A\MYFILE.TXT"; DestDir: "{app}"; BeforeInstall: MyBeforeInstall2('{app}\A\MYFILE.TXT')
    Source: "B\MYFILE.TXT"; DestDir: "{app}"; BeforeInstall: MyBeforeInstall2('{app}\B\MYFILE.TXT')
    Source: "MYPROG.CHM"; DestDir: "{app}"; BeforeInstall: Log('Before MYPROG.CHM Install')

**AfterInstall**

The name of a function that is to be called once just after an entry is installed. The function must either be a custom function in the [Code] section or a [support function].

May include a comma separated list of parameters that Setup should pass to the function. Allowed parameter types are String, Integer and Boolean. String parameters may include constants. These constants will not be automatically expanded. If you want to pass an expanded constant, there's one special [support function] that may be called from within a parameter list for this: ExpandConstant.

Example:

    [Files]
    Source: "MYPROG.EXE"; DestDir: "{app}"; AfterInstall: MyAfterInstall
    Source: "A\MYFILE.TXT"; DestDir: "{app}"; AfterInstall: MyAfterInstall2('{app}\A\MYFILE.TXT')
    Source: "B\MYFILE.TXT"; DestDir: "{app}"; AfterInstall: MyAfterInstall2('{app}\B\MYFILE.TXT')
    Source: "MYPROG.CHM"; DestDir: "{app}"; AfterInstall: Log('After MYPROG.CHM Install')

All BeforeInstall and AfterInstall functions must not have a return value.

A BeforeInstall or AfterInstall function isn't called if Setup already determined the entry shouldn't be processed.

A BeforeInstall or AfterInstall function for a [Files] section entry using a wildcard but not the external flag is called once per file matching the wildcard, instead of once per entry. Use CurrentFileName to check for which file the function is called.

Here is an example of a [Code] section containing the functions used above. Functions CurrentFileName and Log are [support functions] and therefore not included in this [Code] section.

    [Code]
    procedure MyBeforeInstall();
*   **begin**
      MsgBox('About to install MyProg.exe as ' + CurrentFileName + '.', mbInformation, MB_OK);
    end;

    procedure MyBeforeInstall2(FileName: String);
*   **begin**
      MsgBox('About to install ' + FileName + ' as ' + CurrentFileName + '.', mbInformation, MB_OK);
    end;

    procedure MyAfterInstall();
*   **begin**
      MsgBox('Just installed MyProg.exe as ' + CurrentFileName + '.', mbInformation, MB_OK);
    end;

    procedure MyAfterInstall2(FileName: String);
*   **begin**
      MsgBox('Just installed ' + FileName + ' as ' + CurrentFileName + '.', mbInformation, MB_OK);
    end;  Pascal Scripting: Uninstall Code 

Pascal Scripting: Uninstall Code
--------------------------------

The Pascal script can also contain code invoked at uninstall time. See the [Event Functions] topic for more information.

There is one thing that's important to be aware of when designing code to be executed at uninstall time: In cases where multiple versions of an application are installed over each other, only _one_ Pascal script is run at uninstall time. Ordinarily, the script from the most recent install will be chosen. If, however, you were to _downgrade_ your version of Inno Setup in a new version of your application, the script from the install built with the most recent Inno Setup version may be chosen instead. A similar situation can occur if a user installs an older version of your application over a newer one.

When producing an installation that is a "patch" for another install, and the patch install shares the same uninstall log as the original install (i.e. Uninstallable is set to yes and AppId is the set the same as the original install), make sure the patch includes a copy of the full [Code] section from the original install. Otherwise, no code would be run at uninstall time.

If, however, the patch install has Uninstallable set to no then Setup will not touch the existing uninstaller EXE or uninstall log; in this case, the patch install need not contain a copy of the [Code] section from the original install.  Pascal Scripting: Examples 

Pascal Scripting: Examples
--------------------------

The Pascal Scripting example scripts are located in separate files. Open one of the "Code*.iss" or "UninstallCode*.iss" files in the "Examples" subdirectory in your Inno Setup directory.  Pascal Scripting: Support Functions Reference 

Pascal Scripting: Support Functions Reference
---------------------------------------------
https://jrsoftware.org/ishelp/topic_scriptfunctions.htm

The Pascal script can call several built-in support functions.

[GetCmdTail]: https://jrsoftware.org/ishelp/topic_isxfunc_getcmdtail.htm
[ParamCount]: https://jrsoftware.org/ishelp/topic_isxfunc_paramcount.htm
[ParamStr]: https://jrsoftware.org/ishelp/topic_isxfunc_paramstr.htm
[ActiveLanguage]: https://jrsoftware.org/ishelp/topic_isxfunc_activelanguage.htm
[CustomMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_custommessage.htm
[FmtMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_fmtmessage.htm
[SetupMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_setupmessage.htm
[WizardDirValue]: https://jrsoftware.org/ishelp/topic_isxfunc_wizarddirvalue.htm
[WizardGroupValue]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardgroupvalue.htm
[WizardNoIcons]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardnoicons.htm
[WizardSetupType]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardsetuptype.htm
[WizardSelectedComponents]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardselectedcomponents.htm
[WizardIsComponentSelected]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardiscomponentselected.htm
[WizardSelectComponents]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardselectcomponents.htm
[WizardSelectedTasks]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardselectedtasks.htm
[WizardIsTaskSelected]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardistaskselected.htm
[WizardSelectTasks]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardselecttasks.htm
[WizardSilent]: https://jrsoftware.org/ishelp/topic_isxfunc_wizardsilent.htm
[IsUninstaller]: https://jrsoftware.org/ishelp/topic_isxfunc_isuninstaller.htm
[UninstallSilent]: https://jrsoftware.org/ishelp/topic_isxfunc_uninstallsilent.htm
[CurrentFilename]: https://jrsoftware.org/ishelp/topic_isxfunc_currentfilename.htm
[CurrentSourceFilename]: https://jrsoftware.org/ishelp/topic_isxfunc_currentsourcefilename.htm
[ExpandConstant]: https://jrsoftware.org/ishelp/topic_isxfunc_expandconstant.htm
[ExpandConstantEx]: https://jrsoftware.org/ishelp/topic_isxfunc_expandconstantex.htm
[GetPreviousData]: https://jrsoftware.org/ishelp/topic_isxfunc_getpreviousdata.htm
[SetPreviousData]: https://jrsoftware.org/ishelp/topic_isxfunc_setpreviousdata.htm
[Terminated]: https://jrsoftware.org/ishelp/topic_isxfunc_terminated.htm
[RegisterExtraCloseApplicationsResource]: https://jrsoftware.org/ishelp/topic_isxfunc_registerextracloseapplicationsresource.htm
[RmSessionStarted]: https://jrsoftware.org/ishelp/topic_isxfunc_rmsessionstarted.htm
[GetWizardForm]: https://jrsoftware.org/ishelp/topic_isxfunc_getwizardform.htm
[GetUninstallProgressForm]: https://jrsoftware.org/ishelp/topic_isxfunc_getuninstallprogressform.htm
[GetMainForm]: https://jrsoftware.org/ishelp/topic_isxfunc_getmainform.htm
[Abort]: https://jrsoftware.org/ishelp/topic_isxfunc_abort.htm);  
[RaiseException]: https://jrsoftware.org/ishelp/topic_isxfunc_raiseexception.htm
[GetExceptionMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_getexceptionmessage.htm
[ShowExceptionMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_showexceptionmessage.htm);  
[IsAdmin]: https://jrsoftware.org/ishelp/topic_isxfunc_isadmin.htm
[IsAdminInstallMode]: https://jrsoftware.org/ishelp/topic_isxfunc_isadmininstallmode.htm
[GetWindowsVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_getwindowsversion.htm
[GetWindowsVersionEx]: https://jrsoftware.org/ishelp/topic_isxfunc_getwindowsversionex.htm
[GetWindowsVersionString]: https://jrsoftware.org/ishelp/topic_isxfunc_getwindowsversionstring.htm
[IsWin64]: https://jrsoftware.org/ishelp/topic_isxfunc_iswin64.htm
[Is64BitInstallMode]: https://jrsoftware.org/ishelp/topic_isxfunc_is64bitinstallmode.htm
[ProcessorArchitecture]: https://jrsoftware.org/ishelp/topic_isxfunc_processorarchitecture.htm
[IsX86]: https://jrsoftware.org/ishelp/topic_isxfunc_isx86.htm
[IsX64]: https://jrsoftware.org/ishelp/topic_isxfunc_isx64.htm
[IsIA64]: https://jrsoftware.org/ishelp/topic_isxfunc_isia64.htm
[IsARM64]: https://jrsoftware.org/ishelp/topic_isxfunc_isarm64.htm
[InstallOnThisVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_installonthisversion.htm
[IsDotNetInstalled]: https://jrsoftware.org/ishelp/topic_isxfunc_isdotnetinstalled.htm
[IsMsiProductInstalled]: https://jrsoftware.org/ishelp/topic_isxfunc_ismsiproductinstalled.htm
[GetEnv]: https://jrsoftware.org/ishelp/topic_isxfunc_getenv.htm
[GetUserNameString]: https://jrsoftware.org/ishelp/topic_isxfunc_getusernamestring.htm
[GetComputerNameString]: https://jrsoftware.org/ishelp/topic_isxfunc_getcomputernamestring.htm
[GetUILanguage]: https://jrsoftware.org/ishelp/topic_isxfunc_getuilanguage.htm
[FontExists]: https://jrsoftware.org/ishelp/topic_isxfunc_fontexists.htm
[FindWindowByClassName]: https://jrsoftware.org/ishelp/topic_isxfunc_findwindowbyclassname.htm
[FindWindowByWindowName]: https://jrsoftware.org/ishelp/topic_isxfunc_findwindowbywindowname.htm
[SendMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_sendmessage.htm
[PostMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_postmessage.htm
[SendNotifyMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_sendnotifymessage.htm
[RegisterWindowMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_registerwindowmessage.htm
[SendBroadcastMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_sendbroadcastmessage.htm
[PostBroadcastMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_postbroadcastmessage.htm
[SendBroadcastNotifyMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_sendbroadcastnotifymessage.htm
[CreateMutex]: https://jrsoftware.org/ishelp/topic_isxfunc_createmutex.htm
[CheckForMutexes]: https://jrsoftware.org/ishelp/topic_isxfunc_checkformutexes.htm
[MakePendingFileRenameOperationsChecksum]: https://jrsoftware.org/ishelp/topic_isxfunc_makependingfilerenameoperationschecksum.htm
[CreateCallback]: https://jrsoftware.org/ishelp/topic_isxfunc_createcallback.htm
[UnloadDLL]: https://jrsoftware.org/ishelp/topic_isxfunc_unloaddll.htm
[DLLGetLastError]: https://jrsoftware.org/ishelp/topic_isxfunc_dllgetlasterror.htm
[Chr]: https://jrsoftware.org/ishelp/topic_isxfunc_chr.htm
[Ord]: https://jrsoftware.org/ishelp/topic_isxfunc_ord.htm
[Copy]: https://jrsoftware.org/ishelp/topic_isxfunc_copy.htm
[Length]: https://jrsoftware.org/ishelp/topic_isxfunc_length.htm
[Lowercase]: https://jrsoftware.org/ishelp/topic_isxfunc_lowercase.htm
[Uppercase]: https://jrsoftware.org/ishelp/topic_isxfunc_uppercase.htm
[AnsiLowercase]: https://jrsoftware.org/ishelp/topic_isxfunc_ansilowercase.htm
[AnsiUppercase]: https://jrsoftware.org/ishelp/topic_isxfunc_ansiuppercase.htm
[StringOfChar]: https://jrsoftware.org/ishelp/topic_isxfunc_stringofchar.htm
[Delete]: https://jrsoftware.org/ishelp/topic_isxfunc_delete.htm
[Insert]: https://jrsoftware.org/ishelp/topic_isxfunc_insert.htm
[StringChange]: https://jrsoftware.org/ishelp/topic_isxfunc_stringchange.htm
[StringChangeEx]: https://jrsoftware.org/ishelp/topic_isxfunc_stringchangeex.htm
[Pos]: https://jrsoftware.org/ishelp/topic_isxfunc_pos.htm
[AddQuotes]: https://jrsoftware.org/ishelp/topic_isxfunc_addquotes.htm
[RemoveQuotes]: https://jrsoftware.org/ishelp/topic_isxfunc_removequotes.htm
[ConvertPercentStr]: https://jrsoftware.org/ishelp/topic_isxfunc_convertpercentstr.htm
[CompareText]: https://jrsoftware.org/ishelp/topic_isxfunc_comparetext.htm
[CompareStr]: https://jrsoftware.org/ishelp/topic_isxfunc_comparestr.htm
[SameText]: https://jrsoftware.org/ishelp/topic_isxfunc_sametext.htm
[SameStr]: https://jrsoftware.org/ishelp/topic_isxfunc_samestr.htm
[IsWildcard]: https://jrsoftware.org/ishelp/topic_isxfunc_iswildcard.htm
[WildcardMatch]: https://jrsoftware.org/ishelp/topic_isxfunc_wildcardmatch.htm
[Format]: https://jrsoftware.org/ishelp/topic_isxfunc_format.htm
[Trim]: https://jrsoftware.org/ishelp/topic_isxfunc_trim.htm
[TrimLeft]: https://jrsoftware.org/ishelp/topic_isxfunc_trimleft.htm
[TrimRight]: https://jrsoftware.org/ishelp/topic_isxfunc_trimright.htm
[StrToIntDef]: https://jrsoftware.org/ishelp/topic_isxfunc_strtointdef.htm
[StrToInt]: https://jrsoftware.org/ishelp/topic_isxfunc_strtoint.htm
[StrToInt64Def]: https://jrsoftware.org/ishelp/topic_isxfunc_strtoint64def.htm
[StrToInt64]: https://jrsoftware.org/ishelp/topic_isxfunc_strtoint64.htm
[StrToFloat]: https://jrsoftware.org/ishelp/topic_isxfunc_strtofloat.htm
[IntToStr]: https://jrsoftware.org/ishelp/topic_isxfunc_inttostr.htm
[FloatToStr]: https://jrsoftware.org/ishelp/topic_isxfunc_floattostr.htm
[CharLength]: https://jrsoftware.org/ishelp/topic_isxfunc_charlength.htm
[AddBackslash]: https://jrsoftware.org/ishelp/topic_isxfunc_addbackslash.htm
[RemoveBackslashUnlessRoot]: https://jrsoftware.org/ishelp/topic_isxfunc_removebackslashunlessroot.htm
[RemoveBackslash]: https://jrsoftware.org/ishelp/topic_isxfunc_removebackslash.htm
[AddPeriod]: https://jrsoftware.org/ishelp/topic_isxfunc_addperiod.htm
[ChangeFileExt]: https://jrsoftware.org/ishelp/topic_isxfunc_changefileext.htm
[ExtractFileExt]: https://jrsoftware.org/ishelp/topic_isxfunc_extractfileext.htm
[ExtractFileDir]: https://jrsoftware.org/ishelp/topic_isxfunc_extractfiledir.htm
[ExtractFilePath]: https://jrsoftware.org/ishelp/topic_isxfunc_extractfilepath.htm
[ExtractFileName]: https://jrsoftware.org/ishelp/topic_isxfunc_extractfilename.htm
[ExtractFileDrive]: https://jrsoftware.org/ishelp/topic_isxfunc_extractfiledrive.htm
[ExtractRelativePath]: https://jrsoftware.org/ishelp/topic_isxfunc_extractrelativepath.htm
[ExpandFileName]: https://jrsoftware.org/ishelp/topic_isxfunc_expandfilename.htm
[ExpandUNCFileName]: https://jrsoftware.org/ishelp/topic_isxfunc_expanduncfilename.htm
[GetDateTimeString]: https://jrsoftware.org/ishelp/topic_isxfunc_getdatetimestring.htm
[SetLength]: https://jrsoftware.org/ishelp/topic_isxfunc_setlength.htm
[CharToOemBuff]: https://jrsoftware.org/ishelp/topic_isxfunc_chartooembuff.htm
[OemToCharBuff]: https://jrsoftware.org/ishelp/topic_isxfunc_oemtocharbuff.htm
[GetMD5OfString]: https://jrsoftware.org/ishelp/topic_isxfunc_getmd5ofstring.htm
[GetMD5OfUnicodeString]: https://jrsoftware.org/ishelp/topic_isxfunc_getmd5ofunicodestring.htm
[GetSHA1OfString]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha1ofstring.htm
[GetSHA1OfUnicodeString]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha1ofunicodestring.htm
[GetSHA256OfString]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha256ofstring.htm
[GetSHA256OfUnicodeString]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha256ofunicodestring.htm
[SysErrorMessage]: https://jrsoftware.org/ishelp/topic_isxfunc_syserrormessage.htm
[MinimizePathName]: https://jrsoftware.org/ishelp/topic_isxfunc_minimizepathname.htm
[GetArrayLength]: https://jrsoftware.org/ishelp/topic_isxfunc_getarraylength.htm
[SetArrayLength]: https://jrsoftware.org/ishelp/topic_isxfunc_setarraylength.htm
[Null]: https://jrsoftware.org/ishelp/topic_isxfunc_null.htm
[Unassigned]: https://jrsoftware.org/ishelp/topic_isxfunc_unassigned.htm
[VarIsEmpty]: https://jrsoftware.org/ishelp/topic_isxfunc_varisempty.htm
[VarIsClear]: https://jrsoftware.org/ishelp/topic_isxfunc_varisclear.htm
[VarIsNull]: https://jrsoftware.org/ishelp/topic_isxfunc_varisnull.htm
[VarType]: https://jrsoftware.org/ishelp/topic_isxfunc_vartype.htm
[DirExists]: https://jrsoftware.org/ishelp/topic_isxfunc_direxists.htm
[FileExists]: https://jrsoftware.org/ishelp/topic_isxfunc_fileexists.htm
[FileOrDirExists]: https://jrsoftware.org/ishelp/topic_isxfunc_fileordirexists.htm
[FileSize]: https://jrsoftware.org/ishelp/topic_isxfunc_filesize.htm
[FileSize64]: https://jrsoftware.org/ishelp/topic_isxfunc_filesize64.htm
[GetSpaceOnDisk]: https://jrsoftware.org/ishelp/topic_isxfunc_getspaceondisk.htm
[GetSpaceOnDisk64]: https://jrsoftware.org/ishelp/topic_isxfunc_getspaceondisk64.htm
[FileSearch]: https://jrsoftware.org/ishelp/topic_isxfunc_filesearch.htm
[FindFirst]: https://jrsoftware.org/ishelp/topic_isxfunc_findfirst.htm
[FindNext]: https://jrsoftware.org/ishelp/topic_isxfunc_findnext.htm
[FindClose]: https://jrsoftware.org/ishelp/topic_isxfunc_findclose.htm
[GetCurrentDir]: https://jrsoftware.org/ishelp/topic_isxfunc_getcurrentdir.htm
[SetCurrentDir]: https://jrsoftware.org/ishelp/topic_isxfunc_setcurrentdir.htm
[GetWinDir]: https://jrsoftware.org/ishelp/topic_isxfunc_getwindir.htm
[GetSystemDir]: https://jrsoftware.org/ishelp/topic_isxfunc_getsystemdir.htm
[GetSysWow64Dir]: https://jrsoftware.org/ishelp/topic_isxfunc_getsyswow64dir.htm
[GetTempDir]: https://jrsoftware.org/ishelp/topic_isxfunc_gettempdir.htm
[GetShellFolderByCSIDL]: https://jrsoftware.org/ishelp/topic_isxfunc_getshellfolderbycsidl.htm
[GetShortName]: https://jrsoftware.org/ishelp/topic_isxfunc_getshortname.htm
[GenerateUniqueName]: https://jrsoftware.org/ishelp/topic_isxfunc_generateuniquename.htm
[IsProtectedSystemFile]: https://jrsoftware.org/ishelp/topic_isxfunc_isprotectedsystemfile.htm
[GetMD5OfFile]: https://jrsoftware.org/ishelp/topic_isxfunc_getmd5offile.htm
[GetSHA1OfFile]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha1offile.htm
[GetSHA256OfFile]: https://jrsoftware.org/ishelp/topic_isxfunc_getsha256offile.htm
[EnableFsRedirection]: https://jrsoftware.org/ishelp/topic_isxfunc_enablefsredirection.htm
[Exec]: https://jrsoftware.org/ishelp/topic_isxfunc_exec.htm
[ExecAsOriginalUser]: https://jrsoftware.org/ishelp/topic_isxfunc_execasoriginaluser.htm
[ShellExec]: https://jrsoftware.org/ishelp/topic_isxfunc_shellexec.htm
[ShellExecAsOriginalUser]: https://jrsoftware.org/ishelp/topic_isxfunc_shellexecasoriginaluser.htm
[ExtractTemporaryFile]: https://jrsoftware.org/ishelp/topic_isxfunc_extracttemporaryfile.htm
[ExtractTemporaryFiles]: https://jrsoftware.org/ishelp/topic_isxfunc_extracttemporaryfiles.htm
[DownloadTemporaryFile]: https://jrsoftware.org/ishelp/topic_isxfunc_downloadtemporaryfile.htm
[SetDownloadCredentials]: https://jrsoftware.org/ishelp/topic_isxfunc_setdownloadcredentials.htm
[DownloadTemporaryFileSize]: https://jrsoftware.org/ishelp/topic_isxfunc_downloadtemporaryfilesize.htm
[DownloadTemporaryFileDate]: https://jrsoftware.org/ishelp/topic_isxfunc_downloadtemporaryfiledate.htm
[RenameFile]: https://jrsoftware.org/ishelp/topic_isxfunc_renamefile.htm
[FileCopy]: https://jrsoftware.org/ishelp/topic_isxfunc_filecopy.htm
[DeleteFile]: https://jrsoftware.org/ishelp/topic_isxfunc_deletefile.htm
[DelayDeleteFile]: https://jrsoftware.org/ishelp/topic_isxfunc_delaydeletefile.htm
[SetNTFSCompression]: https://jrsoftware.org/ishelp/topic_isxfunc_setntfscompression.htm
[LoadStringFromFile]: https://jrsoftware.org/ishelp/topic_isxfunc_loadstringfromfile.htm
[LoadStringsFromFile]: https://jrsoftware.org/ishelp/topic_isxfunc_loadstringsfromfile.htm
[SaveStringToFile]: https://jrsoftware.org/ishelp/topic_isxfunc_savestringtofile.htm
[SaveStringsToFile]: https://jrsoftware.org/ishelp/topic_isxfunc_savestringstofile.htm
[SaveStringsToUTF8File]: https://jrsoftware.org/ishelp/topic_isxfunc_savestringstoutf8file.htm
[CreateDir]: https://jrsoftware.org/ishelp/topic_isxfunc_createdir.htm
[ForceDirectories]: https://jrsoftware.org/ishelp/topic_isxfunc_forcedirectories.htm
[RemoveDir]: https://jrsoftware.org/ishelp/topic_isxfunc_removedir.htm
[DelTree]: https://jrsoftware.org/ishelp/topic_isxfunc_deltree.htm
[CreateShellLink]: https://jrsoftware.org/ishelp/topic_isxfunc_createshelllink.htm
[UnpinShellLink]: https://jrsoftware.org/ishelp/topic_isxfunc_unpinshelllink.htm
[RegisterServer]: https://jrsoftware.org/ishelp/topic_isxfunc_registerserver.htm
[UnregisterServer]: https://jrsoftware.org/ishelp/topic_isxfunc_unregisterserver.htm
[RegisterTypeLibrary]: https://jrsoftware.org/ishelp/topic_isxfunc_registertypelibrary.htm
[UnregisterTypeLibrary]: https://jrsoftware.org/ishelp/topic_isxfunc_unregistertypelibrary.htm
[IncrementSharedCount]: https://jrsoftware.org/ishelp/topic_isxfunc_incrementsharedcount.htm
[DecrementSharedCount]: https://jrsoftware.org/ishelp/topic_isxfunc_decrementsharedcount.htm
[RestartReplace]: https://jrsoftware.org/ishelp/topic_isxfunc_restartreplace.htm
[UnregisterFont]: https://jrsoftware.org/ishelp/topic_isxfunc_unregisterfont.htm
[ModifyPifFile]: https://jrsoftware.org/ishelp/topic_isxfunc_modifypiffile.htm
[GetVersionNumbers]: https://jrsoftware.org/ishelp/topic_isxfunc_getversionnumbers.htm
[GetVersionComponents]: https://jrsoftware.org/ishelp/topic_isxfunc_getversioncomponents.htm
[GetVersionNumbersString]: https://jrsoftware.org/ishelp/topic_isxfunc_getversionnumbersstring.htm
[GetPackedVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_getpackedversion.htm
[PackVersionNumbers]: https://jrsoftware.org/ishelp/topic_isxfunc_packversionnumbers.htm
[PackVersionComponents]: https://jrsoftware.org/ishelp/topic_isxfunc_packversioncomponents.htm
[ComparePackedVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_comparepackedversion.htm
[SamePackedVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_samepackedversion.htm
[UnpackVersionNumbers]: https://jrsoftware.org/ishelp/topic_isxfunc_unpackversionnumbers.htm
[UnpackVersionComponents]: https://jrsoftware.org/ishelp/topic_isxfunc_unpackversioncomponents.htm
[VersionToStr]: https://jrsoftware.org/ishelp/topic_isxfunc_versiontostr.htm
[StrToVersion]: https://jrsoftware.org/ishelp/topic_isxfunc_strtoversion.htm
[RegKeyExists]: https://jrsoftware.org/ishelp/topic_isxfunc_regkeyexists.htm
[RegValueExists]: https://jrsoftware.org/ishelp/topic_isxfunc_regvalueexists.htm
[RegGetSubkeyNames]: https://jrsoftware.org/ishelp/topic_isxfunc_reggetsubkeynames.htm
[RegGetValueNames]: https://jrsoftware.org/ishelp/topic_isxfunc_reggetvaluenames.htm
[RegQueryStringValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regquerystringvalue.htm
[RegQueryMultiStringValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regquerymultistringvalue.htm
[RegQueryDWordValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regquerydwordvalue.htm
[RegQueryBinaryValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regquerybinaryvalue.htm
[RegWriteStringValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regwritestringvalue.htm
[RegWriteExpandStringValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regwriteexpandstringvalue.htm
[RegWriteMultiStringValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regwritemultistringvalue.htm
[RegWriteDWordValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regwritedwordvalue.htm
[RegWriteBinaryValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regwritebinaryvalue.htm
[RegDeleteKeyIncludingSubkeys]: https://jrsoftware.org/ishelp/topic_isxfunc_regdeletekeyincludingsubkeys.htm
[RegDeleteKeyIfEmpty]: https://jrsoftware.org/ishelp/topic_isxfunc_regdeletekeyifempty.htm
[RegDeleteValue]: https://jrsoftware.org/ishelp/topic_isxfunc_regdeletevalue.htm
[IniKeyExists]: https://jrsoftware.org/ishelp/topic_isxfunc_inikeyexists.htm
[IsIniSectionEmpty]: https://jrsoftware.org/ishelp/topic_isxfunc_isinisectionempty.htm
[GetIniBool]: https://jrsoftware.org/ishelp/topic_isxfunc_getinibool.htm
[GetIniInt]: https://jrsoftware.org/ishelp/topic_isxfunc_getiniint.htm
[GetIniString]: https://jrsoftware.org/ishelp/topic_isxfunc_getinistring.htm
[SetIniBool]: https://jrsoftware.org/ishelp/topic_isxfunc_setinibool.htm
[SetIniInt]: https://jrsoftware.org/ishelp/topic_isxfunc_setiniint.htm
[SetIniString]: https://jrsoftware.org/ishelp/topic_isxfunc_setinistring.htm
[DeleteIniSection]: https://jrsoftware.org/ishelp/topic_isxfunc_deleteinisection.htm
[DeleteIniEntry]: https://jrsoftware.org/ishelp/topic_isxfunc_deleteinientry.htm
[CreateInputQueryPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createinputquerypage.htm
[CreateInputOptionPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createinputoptionpage.htm
[CreateInputDirPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createinputdirpage.htm
[CreateInputFilePage]: https://jrsoftware.org/ishelp/topic_isxfunc_createinputfilepage.htm
[CreateOutputMsgPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createoutputmsgpage.htm
[CreateOutputMsgMemoPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createoutputmsgmemopage.htm
[CreateOutputProgressPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createoutputprogresspage.htm
[CreateOutputMarqueeProgressPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createoutputmarqueeprogresspage.htm
[CreateDownloadPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createdownloadpage.htm
[CreateCustomPage]: https://jrsoftware.org/ishelp/topic_isxfunc_createcustompage.htm
[CreateCustomForm]: https://jrsoftware.org/ishelp/topic_isxfunc_createcustomform.htm
[PageFromID]: https://jrsoftware.org/ishelp/topic_isxfunc_pagefromid.htm
[PageIndexFromID]: https://jrsoftware.org/ishelp/topic_isxfunc_pageindexfromid.htm
[ScaleX]: https://jrsoftware.org/ishelp/topic_isxfunc_scalex.htm
[ScaleY]: https://jrsoftware.org/ishelp/topic_isxfunc_scaley.htm
[InitializeBitmapImageFromIcon]: https://jrsoftware.org/ishelp/topic_isxfunc_initializebitmapimagefromicon.htm
[MsgBox]: https://jrsoftware.org/ishelp/topic_isxfunc_msgbox.htm
[SuppressibleMsgBox]: https://jrsoftware.org/ishelp/topic_isxfunc_suppressiblemsgbox.htm
[TaskDialogMsgBox]: https://jrsoftware.org/ishelp/topic_isxfunc_taskdialogmsgbox.htm
[SuppressibleTaskDialogMsgBox]: https://jrsoftware.org/ishelp/topic_isxfunc_suppressibletaskdialogmsgbox.htm
[GetOpenFileName]: https://jrsoftware.org/ishelp/topic_isxfunc_getopenfilename.htm
[GetOpenFileNameMulti]: https://jrsoftware.org/ishelp/topic_isxfunc_getopenfilenamemulti.htm
[GetSaveFileName]: https://jrsoftware.org/ishelp/topic_isxfunc_getsavefilename.htm
[BrowseForFolder]: https://jrsoftware.org/ishelp/topic_isxfunc_browseforfolder.htm
[ExitSetupMsgBox]: https://jrsoftware.org/ishelp/topic_isxfunc_exitsetupmsgbox.htm
[SelectDisk]: https://jrsoftware.org/ishelp/topic_isxfunc_selectdisk.htm
[CreateOleObject]: https://jrsoftware.org/ishelp/topic_isxfunc_createoleobject.htm
[GetActiveOleObject]: https://jrsoftware.org/ishelp/topic_isxfunc_getactiveoleobject.htm
[IDispatchInvoke]: https://jrsoftware.org/ishelp/topic_isxfunc_idispatchinvoke.htm
[CreateComObject]: https://jrsoftware.org/ishelp/topic_isxfunc_createcomobject.htm
[StringToGUID]: https://jrsoftware.org/ishelp/topic_isxfunc_stringtoguid.htm
[OleCheck]: https://jrsoftware.org/ishelp/topic_isxfunc_olecheck.htm
[CoFreeUnusedLibraries]: https://jrsoftware.org/ishelp/topic_isxfunc_cofreeunusedlibraries.htm);  
[Log]: https://jrsoftware.org/ishelp/topic_isxfunc_log.htm
[Sleep]: https://jrsoftware.org/ishelp/topic_isxfunc_sleep.htm
[Random]: https://jrsoftware.org/ishelp/topic_isxfunc_random.htm
[Beep]: https://jrsoftware.org/ishelp/topic_isxfunc_beep.htm);  
[Set8087CW]: https://jrsoftware.org/ishelp/topic_isxfunc_set8087cw.htm
[Get8087CW]: https://jrsoftware.org/ishelp/topic_isxfunc_get8087cw.htm
[BringToFrontAndRestore]: https://jrsoftware.org/ishelp/topic_isxfunc_bringtofrontandrestore.htm);  
[LoadDLL]: https://jrsoftware.org/ishelp/topic_isxfunc_loaddll.htm
[CallDLLProc]: https://jrsoftware.org/ishelp/topic_isxfunc_calldllproc.htm
[FreeDLL]: https://jrsoftware.org/ishelp/topic_isxfunc_freedll.htm
[CastStringToInteger]: https://jrsoftware.org/ishelp/topic_isxfunc_caststringtointeger.htm
[CastIntegerToString]: https://jrsoftware.org/ishelp/topic_isxfunc_castintegertostring.htm

Support functions
-----------------

Here's the list of support functions that can be called from within the Pascal script.

**Setup or Uninstall Info functions**  
  
- function [GetCmdTail][GetCmdTail]: String;  
- function [ParamCount][ParamCount]: Integer;  
- function [ParamStr][ParamStr](Index: Integer): String;  
  
- function [ActiveLanguage][ActiveLanguage]: String;  
  
- function [CustomMessage][CustomMessage](const MsgName: String): String;  
- function [FmtMessage][FmtMessage](const S: String; const Args: array of String): String;  
- function [SetupMessage][SetupMessage](const ID: TSetupMessageID): String;  
  
- function [WizardDirValue][WizardDirValue]: String;  
- function [WizardGroupValue][WizardGroupValue]: String;  
- function [WizardNoIcons][WizardNoIcons]: Boolean;  
- function [WizardSetupType][WizardSetupType](const Description: Boolean): String;  
- function [WizardSelectedComponents][WizardSelectedComponents](const Descriptions: Boolean): String;  
- function [WizardIsComponentSelected][WizardIsComponentSelected](const Components: String): Boolean;  
- procedure [WizardSelectComponents][WizardSelectComponents](const Components: String);  
- function [WizardSelectedTasks][WizardSelectedTasks](const Descriptions: Boolean): String;  
- function [WizardIsTaskSelected][WizardIsTaskSelected](const Tasks: String): Boolean;  
- procedure [WizardSelectTasks][WizardSelectTasks](const Tasks: String);  
- function [WizardSilent][WizardSilent]: Boolean;  
  
- function [IsUninstaller][IsUninstaller]: Boolean;  
- function [UninstallSilent][UninstallSilent]: Boolean;  
  
- function [CurrentFilename][CurrentFilename]: String;  
- function [CurrentSourceFilename][CurrentSourceFilename]: String;  
  
- function [ExpandConstant][ExpandConstant](const S: String): String;  
- function [ExpandConstantEx][ExpandConstantEx](const S: String; const CustomConst, CustomValue: String): String;  
  
- function [GetPreviousData][GetPreviousData](const ValueName, DefaultValueData: String): String;  
- function [SetPreviousData][SetPreviousData](const PreviousDataKey: Integer; const ValueName, ValueData: String): Boolean;  
  
- function [Terminated][Terminated]: Boolean;  
  
- function [RegisterExtraCloseApplicationsResource][RegisterExtraCloseApplicationsResource](const DisableFsRedir: Boolean; const AFilename: String): Boolean;  
- function [RmSessionStarted][RmSessionStarted]: Boolean;  
  
- function [GetWizardForm][GetWizardForm]: TWizardForm;  
- function [GetUninstallProgressForm][GetUninstallProgressForm]: TUninstallProgressForm;  
- function [GetMainForm][GetMainForm]: TMainForm;  

**Exception functions**  
  
- procedure [Abort][Abort];  
- procedure [RaiseException][RaiseException](const Msg: String);  
  
- function [GetExceptionMessage][GetExceptionMessage]: String;  
- procedure [ShowExceptionMessage][ShowExceptionMessage];  

**System functions**  
  
- function [IsAdmin][IsAdmin]: Boolean;  
- function [IsAdminInstallMode][IsAdminInstallMode]: Boolean;  
- function [GetWindowsVersion][GetWindowsVersion]: Cardinal;  
- procedure [GetWindowsVersionEx][GetWindowsVersionEx](var Version: TWindowsVersion);  
- function [GetWindowsVersionString][GetWindowsVersionString]: String;  
  
- function [IsWin64][IsWin64]: Boolean;  
- function [Is64BitInstallMode][Is64BitInstallMode]: Boolean;  
- function [ProcessorArchitecture][ProcessorArchitecture]: TSetupProcessorArchitecture;  
- function [IsX86][IsX86]: Boolean;  
- function [IsX64][IsX64]: Boolean;  
- function [IsIA64][IsIA64]: Boolean;  
- function [IsARM64][IsARM64]: Boolean;  
  
- function [InstallOnThisVersion][InstallOnThisVersion](const MinVersion, OnlyBelowVersion: String): Boolean;  
- function [IsDotNetInstalled][IsDotNetInstalled](const MinVersion: TDotNetVersion; const MinServicePack: Cardinal): Boolean;  
- function [IsMsiProductInstalled][IsMsiProductInstalled](const UpgradeCode: String; const PackedMinVersion: Int64): Boolean;  
  
- function [GetEnv][GetEnv](const EnvVar: String): String;  
- function [GetUserNameString][GetUserNameString]: String;  
- function [GetComputerNameString][GetComputerNameString]: String;  
  
- function [GetUILanguage][GetUILanguage]: Integer;  
  
- function [FontExists][FontExists](const FaceName: String): Boolean;  
  
- function [FindWindowByClassName][FindWindowByClassName](const ClassName: String): HWND;  
- function [FindWindowByWindowName][FindWindowByWindowName](const WindowName: String): HWND;  
- function [SendMessage][SendMessage](const Wnd: HWND; const Msg, WParam, LParam: Longint): Longint;  
- function [PostMessage][PostMessage](const Wnd: HWND; const Msg, WParam, LParam: Longint): Boolean;  
- function [SendNotifyMessage][SendNotifyMessage](const Wnd: HWND; const Msg, WParam, LParam: Longint): Boolean;  
- function [RegisterWindowMessage][RegisterWindowMessage](const Name: String): Longint;  
- function [SendBroadcastMessage][SendBroadcastMessage](const Msg, WParam, LParam: Longint): Longint;  
- function [PostBroadcastMessage][PostBroadcastMessage](const Msg, WParam, LParam: Longint): Boolean;  
- function [SendBroadcastNotifyMessage][SendBroadcastNotifyMessage](const Msg, WParam, LParam: Longint): Boolean;  
  
- procedure [CreateMutex][CreateMutex](const Name: String);  
- function [CheckForMutexes][CheckForMutexes](Mutexes: String): Boolean;  
  
- procedure [MakePendingFileRenameOperationsChecksum][MakePendingFileRenameOperationsChecksum]: String;  
  
- function [CreateCallback][CreateCallback](Method: AnyMethod): Longword;  
- procedure [UnloadDLL][UnloadDLL](Filename: String);  
- function [DLLGetLastError][DLLGetLastError](): Longint;  

**String functions**  
  
- function [Chr][Chr](B: Byte): Char;  
- function [Ord][Ord](C: Char): Byte;  
- function [Copy][Copy](S: String; Index, Count: Integer): String;  
- function [Length][Length](s: String): Longint;  
- function [Lowercase][Lowercase](S: String): String;  
- function [Uppercase][Uppercase](S: String): String;  
- function [AnsiLowercase][AnsiLowercase](S: String): String;  
- function [AnsiUppercase][AnsiUppercase](S: String): String;  
- function [StringOfChar][StringOfChar](c: Char; I : Longint): String;  
- procedure [Delete][Delete](var S: String; Index, Count: Integer);  
- procedure [Insert][Insert](Source: String; var Dest: String; Index: Integer);  
- function [StringChange][StringChange](var S: String; const FromStr, ToStr: String): Integer;  
- function [StringChangeEx][StringChangeEx](var S: String; const FromStr, ToStr: String; const SupportDBCS: Boolean): Integer;  
- function [Pos][Pos](SubStr, S: String): Integer;  
- function [AddQuotes][AddQuotes](const S: String): String;  
- function [RemoveQuotes][RemoveQuotes](const S: String): String;  
- function [ConvertPercentStr][ConvertPercentStr](var S: String): Boolean;  
  
- function [CompareText][CompareText](const S1, S2: string): Integer;  
- function [CompareStr][CompareStr](const S1, S2: string): Integer;  
- function [SameText][SameText](const S1, S2: string): Boolean;  
- function [SameStr][SameStr](const S1, S2: string): Boolean;  
- function [IsWildcard][IsWildcard](const Pattern: String): Boolean;  
- function [WildcardMatch][WildcardMatch](const Text, Pattern: String): Boolean;  
  
- function [Format][Format](const Format: string; const Args: array of const): string;  
  
- function [Trim][Trim](const S: string): String;  
- function [TrimLeft][TrimLeft](const S: string): String;  
- function [TrimRight][TrimRight](const S: string): String;  
  
- function [StrToIntDef][StrToIntDef](s: string; def: Longint): Longint;  
- function [StrToInt][StrToInt](s: string): Longint;  
- function [StrToInt64Def][StrToInt64Def](s: string; def: Int64): Int64;  
- function [StrToInt64][StrToInt64](s: string): Int64;  
- function [StrToFloat][StrToFloat](s: string): Extended;  
- function [IntToStr][IntToStr](i: Int64): String;  
- function [FloatToStr][FloatToStr](e: extended): String;  
  
- function [CharLength][CharLength](const S: String; const Index: Integer): Integer;  
  
- function [AddBackslash][AddBackslash](const S: String): String;  
- function [RemoveBackslashUnlessRoot][RemoveBackslashUnlessRoot](const S: String): String;  
- function [RemoveBackslash][RemoveBackslash](const S: String): String;  
- function [AddPeriod][AddPeriod](const S: String): String;  
- function [ChangeFileExt][ChangeFileExt](const FileName, Extension: string): String;  
- function [ExtractFileExt][ExtractFileExt](const FileName: string): String;  
- function [ExtractFileDir][ExtractFileDir](const FileName: string): String;  
- function [ExtractFilePath][ExtractFilePath](const FileName: string): String;  
- function [ExtractFileName][ExtractFileName](const FileName: string): String;  
- function [ExtractFileDrive][ExtractFileDrive](const FileName: string): String;  
- function [ExtractRelativePath][ExtractRelativePath](const BaseName, DestName: String): String;  
- function [ExpandFileName][ExpandFileName](const FileName: string): String;  
- function [ExpandUNCFileName][ExpandUNCFileName](const FileName: string): String;  
  
- function [GetDateTimeString][GetDateTimeString](const DateTimeFormat: String; const DateSeparator, TimeSeparator: Char): String;  
  
- procedure [SetLength][SetLength](var S: String; L: Longint);  
- procedure [CharToOemBuff][CharToOemBuff](var S: AnsiString);  
- procedure [OemToCharBuff][OemToCharBuff](var S: AnsiString);  
  
- function [GetMD5OfString][GetMD5OfString](const S: AnsiString): String;  
- function [GetMD5OfUnicodeString][GetMD5OfUnicodeString](const S: String): String;  
- function [GetSHA1OfString][GetSHA1OfString](const S: AnsiString): String;  
- function [GetSHA1OfUnicodeString][GetSHA1OfUnicodeString](const S: String): String;  
- function [GetSHA256OfString][GetSHA256OfString](const S: AnsiString): String;  
- function [GetSHA256OfUnicodeString][GetSHA256OfUnicodeString](const S: String): String;  
  
- function [SysErrorMessage][SysErrorMessage](ErrorCode: Integer): String;  
  
- function [MinimizePathName][MinimizePathName](const Filename: String; const Font: TFont; MaxLen: Integer): String;  

**Array functions**  
  
- function [GetArrayLength][GetArrayLength](var Arr: Array): Longint;  
- procedure [SetArrayLength][SetArrayLength](var Arr: Array; I: Longint);  

**Variant functions**  
  
- function [Null][Null]: Variant;  
- function [Unassigned][Unassigned]: Variant;  
  
- function [VarIsEmpty][VarIsEmpty](const V: Variant): Boolean;  
- function [VarIsClear][VarIsClear](const V: Variant): Boolean;  
- function [VarIsNull][VarIsNull](const V: Variant): Boolean;  
- function [VarType][VarType](const V: Variant): TVarType;  

**File System functions**  
  
- function [DirExists][DirExists](const Name: String): Boolean;  
- function [FileExists][FileExists](const Name: String): Boolean;  
- function [FileOrDirExists][FileOrDirExists](const Name: String): Boolean;  
- function [FileSize][FileSize](const Name: String; var Size: Integer): Boolean;  
- function [FileSize64][FileSize64](const Name: String; var Size: Int64): Boolean;  
- function [GetSpaceOnDisk][GetSpaceOnDisk](const Path: String; const InMegabytes: Boolean; var Free, Total: Cardinal): Boolean;  
- function [GetSpaceOnDisk64][GetSpaceOnDisk64](const Path: String; var Free, Total: Int64): Boolean;  
  
- function [FileSearch][FileSearch](const Name, DirList: string): String;  
- function [FindFirst][FindFirst](const FileName: String; var FindRec: TFindRec): Boolean;  
- function [FindNext][FindNext](var FindRec: TFindRec): Boolean;  
- procedure [FindClose][FindClose](var FindRec: TFindRec);  
  
- function [GetCurrentDir][GetCurrentDir]: String;  
- function [SetCurrentDir][SetCurrentDir](const Dir: string): Boolean;  
- function [GetWinDir][GetWinDir]: String;  
- function [GetSystemDir][GetSystemDir]: String;  
- function [GetSysWow64Dir][GetSysWow64Dir]: String;  
- function [GetTempDir][GetTempDir]: String;  
- function [GetShellFolderByCSIDL][GetShellFolderByCSIDL](const Folder: Integer; const Create: Boolean): String;  
  
- function [GetShortName][GetShortName](const LongName: String): String;  
- function [GenerateUniqueName][GenerateUniqueName](Path: String; const Extension: String): String;  
  
- function [IsProtectedSystemFile][IsProtectedSystemFile](const Filename: String): Boolean;  
  
- function [GetMD5OfFile][GetMD5OfFile](const Filename: String): String;  
- function [GetSHA1OfFile][GetSHA1OfFile](const Filename: String): String;  
- function [GetSHA256OfFile][GetSHA256OfFile](const Filename: String): String;  
  
- function [EnableFsRedirection][EnableFsRedirection](const Enable: Boolean): Boolean;  

**File functions**  
  
- function [Exec][Exec](const Filename, Params, WorkingDir: String; const ShowCmd: Integer; const Wait: TExecWait; var ResultCode: Integer): Boolean;  
- function [ExecAsOriginalUser][ExecAsOriginalUser](const Filename, Params, WorkingDir: String; const ShowCmd: Integer; const Wait: TExecWait; var ResultCode: Integer): Boolean;  
- function [ShellExec][ShellExec](const Verb, Filename, Params, WorkingDir: String; const ShowCmd: Integer; const Wait: TExecWait; var ErrorCode: Integer): Boolean;  
- function [ShellExecAsOriginalUser][ShellExecAsOriginalUser](const Verb, Filename, Params, WorkingDir: String; const ShowCmd: Integer; const Wait: TExecWait; var ErrorCode: Integer): Boolean;  
  
- procedure [ExtractTemporaryFile][ExtractTemporaryFile](const FileName: String);  
- function [ExtractTemporaryFiles][ExtractTemporaryFiles](const Pattern: String): Integer;  
- function [DownloadTemporaryFile][DownloadTemporaryFile](const Url, FileName, RequiredSHA256OfFile: String; const OnDownloadProgress: TOnDownloadProgress): Int64;  
- procedure [SetDownloadCredentials][SetDownloadCredentials](const User, Pass: String);  
- function [DownloadTemporaryFileSize][DownloadTemporaryFileSize](const Url): Int64;  
- function [DownloadTemporaryFileDate][DownloadTemporaryFileDate](const Url): String;  
  
- function [RenameFile][RenameFile](const OldName, NewName: string): Boolean;  
- function [FileCopy][FileCopy](const ExistingFile, NewFile: String; const FailIfExists: Boolean): Boolean;  
- function [DeleteFile][DeleteFile](const FileName: string): Boolean;  
- procedure [DelayDeleteFile][DelayDeleteFile](const Filename: String; const Tries: Integer);  
- function [SetNTFSCompression][SetNTFSCompression](const FileOrDir: String; Compress: Boolean): Boolean;  
  
- function [LoadStringFromFile][LoadStringFromFile](const FileName: String; var S: AnsiString): Boolean;  
- function [LoadStringsFromFile][LoadStringsFromFile](const FileName: String; var S: TArrayOfString): Boolean;  
- function [SaveStringToFile][SaveStringToFile](const FileName: String; const S: AnsiString; const Append: Boolean): Boolean;  
- function [SaveStringsToFile][SaveStringsToFile](const FileName: String; const S: TArrayOfString; const Append: Boolean): Boolean;  
- function [SaveStringsToUTF8File][SaveStringsToUTF8File](const FileName: String; const S: TArrayOfString; const Append: Boolean): Boolean;  
  
- function [CreateDir][CreateDir](const Dir: string): Boolean;  
- function [ForceDirectories][ForceDirectories](Dir: string): Boolean;  
- function [RemoveDir][RemoveDir](const Dir: string): Boolean;  
- function [DelTree][DelTree](const Path: String; const IsDir, DeleteFiles, DeleteSubdirsAlso: Boolean): Boolean;  
  
- function [CreateShellLink][CreateShellLink](const Filename, Description, ShortcutTo, Parameters, WorkingDir, IconFilename: String; const IconIndex, ShowCmd: Integer): String;  
- function [UnpinShellLink][UnpinShellLink](const Filename: String): Boolean;  
  
- procedure [RegisterServer][RegisterServer](const Is64Bit: Boolean; const Filename: String; const FailCriticalErrors: Boolean);  
- function [UnregisterServer][UnregisterServer](const Is64Bit: Boolean; const Filename: String; const FailCriticalErrors: Boolean): Boolean;  
- procedure [RegisterTypeLibrary][RegisterTypeLibrary](const Is64Bit: Boolean; const Filename: String);  
- function [UnregisterTypeLibrary][UnregisterTypeLibrary](const Is64Bit: Boolean; const Filename: String): Boolean  
- procedure [IncrementSharedCount][IncrementSharedCount](const Is64Bit: Boolean; const Filename: String; const AlreadyExisted: Boolean);  
- function [DecrementSharedCount][DecrementSharedCount](const Is64Bit: Boolean; const Filename: String): Boolean;  
- procedure [RestartReplace][RestartReplace](const TempFile, DestFile: String);  
- procedure [UnregisterFont][UnregisterFont](const FontName, FontFilename: String; const PerUserFont: Boolean);  
- function [ModifyPifFile][ModifyPifFile](const Filename: String; const CloseOnExit: Boolean): Boolean;  

**File Version functions**  
  
- function [GetVersionNumbers][GetVersionNumbers](const Filename: String; var VersionMS, VersionLS: Cardinal): Boolean;  
- function [GetVersionComponents][GetVersionComponents](const Filename: String; var Major, Minor, Revision, Build: Word): Boolean;  
- function [GetVersionNumbersString][GetVersionNumbersString](const Filename: String; var Version: String): Boolean;  
- function [GetPackedVersion][GetPackedVersion](const Filename: String; var Version: Int64): Boolean;  
  
- function [PackVersionNumbers][PackVersionNumbers](const VersionMS, VersionLS: Cardinal): Int64;  
- function [PackVersionComponents][PackVersionComponents](const Major, Minor, Revision, Build: Word): Int64;  
  
- function [ComparePackedVersion][ComparePackedVersion](const Version1, Version2: Int64): Integer;  
- function [SamePackedVersion][SamePackedVersion](const Version1, Version2: Int64): Boolean;  
  
- procedure [UnpackVersionNumbers][UnpackVersionNumbers](const Version: Int64; var VersionMS, VersionLS: Cardinal);  
- procedure [UnpackVersionComponents][UnpackVersionComponents](const Version: Int64; var Major, Minor, Revision, Build: Word);  
  
- function [VersionToStr][VersionToStr](const Version: Int64): String;  
- function [StrToVersion][StrToVersion](const Version: String; var Version: Int64): Boolean;  

**Registry functions**  
  
- function [RegKeyExists][RegKeyExists](const RootKey: Integer; const SubKeyName: String): Boolean;  
- function [RegValueExists][RegValueExists](const RootKey: Integer; const SubKeyName, ValueName: String): Boolean;  
  
- function [RegGetSubkeyNames][RegGetSubkeyNames](const RootKey: Integer; const SubKeyName: String; var Names: TArrayOfString): Boolean;  
- function [RegGetValueNames][RegGetValueNames](const RootKey: Integer; const SubKeyName: String; var Names: TArrayOfString): Boolean;  
  
- function [RegQueryStringValue][RegQueryStringValue](const RootKey: Integer; const SubKeyName, ValueName: String; var ResultStr: String): Boolean;  
- function [RegQueryMultiStringValue][RegQueryMultiStringValue](const RootKey: Integer; const SubKeyName, ValueName: String; var ResultStr: String): Boolean;  
- function [RegQueryDWordValue][RegQueryDWordValue](const RootKey: Integer; const SubKeyName, ValueName: String; var ResultDWord: Cardinal): Boolean;  
- function [RegQueryBinaryValue][RegQueryBinaryValue](const RootKey: Integer; const SubKeyName, ValueName: String; var ResultStr: AnsiString): Boolean;  
  
- function [RegWriteStringValue][RegWriteStringValue](const RootKey: Integer; const SubKeyName, ValueName, Data: String): Boolean;  
- function [RegWriteExpandStringValue][RegWriteExpandStringValue](const RootKey: Integer; const SubKeyName, ValueName, Data: String): Boolean;  
- function [RegWriteMultiStringValue][RegWriteMultiStringValue](const RootKey: Integer; const SubKeyName, ValueName, Data: String): Boolean;  
- function [RegWriteDWordValue][RegWriteDWordValue](const RootKey: Integer; const SubKeyName, ValueName: String; const Data: Cardinal): Boolean;  
- function [RegWriteBinaryValue][RegWriteBinaryValue](const RootKey: Integer; const SubKeyName, ValueName: String; const Data: AnsiString): Boolean;  
  
- function [RegDeleteKeyIncludingSubkeys][RegDeleteKeyIncludingSubkeys](const RootKey: Integer; const SubkeyName: String): Boolean;  
- function [RegDeleteKeyIfEmpty][RegDeleteKeyIfEmpty](const RootKey: Integer; const SubkeyName: String): Boolean;  
- function [RegDeleteValue][RegDeleteValue](const RootKey: Integer; const SubKeyName, ValueName: String): Boolean;  

**INI File functions**  
  
- function [IniKeyExists][IniKeyExists](const Section, Key, Filename: String): Boolean;  
- function [IsIniSectionEmpty][IsIniSectionEmpty](const Section, Filename: String): Boolean;  
  
- function [GetIniBool][GetIniBool](const Section, Key: String; const Default: Boolean; const Filename: String): Boolean  
- function [GetIniInt][GetIniInt](const Section, Key: String; const Default, Min, Max: Longint; const Filename: String): Longint;  
- function [GetIniString][GetIniString](const Section, Key, Default, Filename: String): String;  
  
- function [SetIniBool][SetIniBool](const Section, Key: String; const Value: Boolean; const Filename: String): Boolean;  
- function [SetIniInt][SetIniInt](const Section, Key: String; const Value: Longint; const Filename: String): Boolean;  
- function [SetIniString][SetIniString](const Section, Key, Value, Filename: String): Boolean;  
  
- procedure [DeleteIniSection][DeleteIniSection](const Section, Filename: String);  
- procedure [DeleteIniEntry][DeleteIniEntry](const Section, Key, Filename: String);  

**Custom Setup Wizard Page functions**  
  
- function [CreateInputQueryPage][CreateInputQueryPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String): TInputQueryWizardPage;  
- function [CreateInputOptionPage][CreateInputOptionPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; Exclusive, ListBox: Boolean): TInputOptionWizardPage;  
- function [CreateInputDirPage][CreateInputDirPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; AAppendDir: Boolean; ANewFolderName: String): TInputDirWizardPage;  
- function [CreateInputFilePage][CreateInputFilePage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String): TInputFileWizardPage;  
- function [CreateOutputMsgPage][CreateOutputMsgPage](const AfterID: Integer; const ACaption, ADescription, AMsg: String): TOutputMsgWizardPage;  
- function [CreateOutputMsgMemoPage][CreateOutputMsgMemoPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; const AMsg: AnsiString): TOutputMsgMemoWizardPage;  
- function [CreateOutputProgressPage][CreateOutputProgressPage](const ACaption, ADescription: String): TOutputProgressWizardPage;  
- function [CreateOutputMarqueeProgressPage][CreateOutputMarqueeProgressPage](const ACaption, ADescription: String): TOutputMarqueeProgressWizardPage;  
- function [CreateDownloadPage][CreateDownloadPage](const ACaption, ADescription: String; const OnDownloadProgress: TOnDownloadProgress): TDownloadWizardPage;  
- function [CreateCustomPage][CreateCustomPage](const AfterID: Integer; const ACaption, ADescription: String): TWizardPage;  
  
- function [CreateCustomForm][CreateCustomForm]: TSetupForm;  
  
- function [PageFromID][PageFromID](const ID: Integer): TWizardPage;  
- function [PageIndexFromID][PageIndexFromID](const ID: Integer): Integer;  
- function [ScaleX][ScaleX](X: Integer): Integer;  
- function [ScaleY][ScaleY](Y: Integer): Integer;  
- function [InitializeBitmapImageFromIcon][InitializeBitmapImageFromIcon](const BitmapImage: TBitmapImage; const IconFilename: String; const BkColor: TColor; const AscendingTrySizes: TArrayOfInteger): Boolean;  

**Dialog functions**  
  
- function [MsgBox][MsgBox](const Text: String; const Typ: TMsgBoxType; const Buttons: Integer): Integer;  
- function [SuppressibleMsgBox][SuppressibleMsgBox](const Text: String; const Typ: TMsgBoxType; const Buttons, Default: Integer): Integer;  
- function [TaskDialogMsgBox][TaskDialogMsgBox](const Instruction, Text: String; const Typ: TMsgBoxType; const Buttons: Cardinal; const ButtonLabels: TArrayOfString; const ShieldButton: Integer): Integer;  
- function [SuppressibleTaskDialogMsgBox][SuppressibleTaskDialogMsgBox](const Instruction, Text: String; const Typ: TMsgBoxType; const Buttons: Cardinal; const ButtonLabels: TArrayOfString; const ShieldButton: Integer; const Default: Integer): Integer;  
- function [GetOpenFileName][GetOpenFileName](const Prompt: String; var FileName: String; const InitialDirectory, Filter, DefaultExtension: String): Boolean;  
- function [GetOpenFileNameMulti][GetOpenFileNameMulti](const Prompt: String; var FileNameList: TStrings; const InitialDirectory, Filter, DefaultExtension: String): Boolean;  
- function [GetSaveFileName][GetSaveFileName](const Prompt: String; var FileName: String; const InitialDirectory, Filter, DefaultExtension: String): Boolean;  
- function [BrowseForFolder][BrowseForFolder](const Prompt: String; var Directory: String; const NewFolderButton: Boolean): Boolean;  
- function [ExitSetupMsgBox][ExitSetupMsgBox]: Boolean;  
- function [SelectDisk][SelectDisk](const DiskNumber: Integer; const AFilename: String; var Path: String): Boolean;  

**COM Automation objects support functions**  
  
- function [CreateOleObject][CreateOleObject](const ClassName: string): Variant;  
- function [GetActiveOleObject][GetActiveOleObject](const ClassName: string): Variant;  
- function [IDispatchInvoke][IDispatchInvoke](Self: IDispatch; PropertySet: Boolean; const Name: String; Par: array of Variant): Variant;  
- function [CreateComObject][CreateComObject](const ClassID: TGUID): IUnknown;  
- function [StringToGUID][StringToGUID](const S: String): TGUID;  
- procedure [OleCheck][OleCheck](Result: HResult);  
- procedure [CoFreeUnusedLibraries][CoFreeUnusedLibraries];  

**Setup Logging functions**  
  
- procedure [Log][Log](const S: String);  

**Other functions**  
  
- procedure [Sleep][Sleep](const Milliseconds: LongInt);  
- function [Random][Random](const Range: Integer): Integer;  
- procedure [Beep][Beep];  
- procedure [Set8087CW][Set8087CW](NewCW: Word);  
- function [Get8087CW][Get8087CW]: Word;  
  
- procedure [BringToFrontAndRestore][BringToFrontAndRestore];  

**Deprecated functions**  
  
- function [LoadDLL][LoadDLL](const DLLName: String; var ErrorCode: Integer): Longint;  
- function [CallDLLProc][CallDLLProc](const DLLHandle: Longint; const ProcName: String; const Param1, Param2: Longint; var Result: Longint): Boolean;  
- function [FreeDLL][FreeDLL](const DLLHandle: Longint): Boolean;  
  
- function [CastStringToInteger][CastStringToInteger](var S: String): Longint;  
- function [CastIntegerToString][CastIntegerToString](const L: Longint): String;  

Constants
---------

Here's the list of constants used by these functions:

_CurStep values_  
ssInstall, ssPostInstall, ssDone

_CurPage values_  
wpWelcome, wpLicense, wpPassword, wpInfoBefore, wpUserInfo, wpSelectDir, wpSelectComponents, wpSelectProgramGroup, wpSelectTasks, wpReady, wpPreparing, wpInstalling, wpInfoAfter, wpFinished

_Exec and ShellExec - ShowCmd values_  
SW_SHOW, SW_SHOWNORMAL, SW_SHOWMAXIMIZED, SW_SHOWMINIMIZED, SW_SHOWMINNOACTIVE, SW_HIDE

_TMsgBoxType_  
mbInformation, mbConfirmation, mbError, mbCriticalError

_MsgBox - Buttons flags_  
MB_OK, MB_OKCANCEL, MB_ABORTRETRYIGNORE, MB_YESNOCANCEL, MB_YESNO, MB_RETRYCANCEL, MB_DEFBUTTON1, MB_DEFBUTTON2, MB_DEFBUTTON3, MB_SETFOREGROUND

_MsgBox - return values_  
IDOK, IDCANCEL, IDABORT, IDRETRY, IDIGNORE, IDYES, IDNO

_Reg* - RootKey values (also see the [`Registry`] section documentation)_  

    HKEY_AUTO, HKEY_AUTO_32, HKEY_AUTO_64,  
    HKEY_CLASSES_ROOT, HKEY_CLASSES_ROOT_32, HKEY_CLASSES_ROOT_64,  
    HKEY_CURRENT_USER, HKEY_CURRENT_USER_32, HKEY_CURRENT_USER_64,  
    HKEY_LOCAL_MACHINE, HKEY_LOCAL_MACHINE_32, HKEY_LOCAL_MACHINE_64,  
    HKEY_USERS, HKEY_USERS_32, HKEY_USERS_64,  
    HKEY_PERFORMANCE_DATA,  
    HKEY_CURRENT_CONFIG, HKEY_CURRENT_CONFIG_32, HKEY_CURRENT_CONFIG_64,  
    HKEY_DYN_DATA,  
    HKA, HKA32, HKA64, HKCR, HKCR32, HKCR64, HKCU, HKCU32, HKCU64, HKLM, HKLM32, HKLM64, HKU, HKU32, HKU64, HKCC, HKCC32, HKCC64

_TShellFolderID_  
sfDesktop, sfStartMenu, sfPrograms, sfStartup, sfSendTo, sfFonts, sfAppData, sfDocs, sfTemplates, sfFavorites, sfLocalAppData

_TSetupMessageID_  
Use 'msg' + the message name. Example: _SetupMessage(msgSetupAppTitle)_

_TShouldProcessEntryResult_  
srNo, srYes, srUnknown  Pascal Scripting: Support Classes Reference 

Pascal Scripting: Support Classes Reference
-------------------------------------------

Below is the list of support classes that can be used from within the Pascal script. There are also three support objects available globally:

*   WizardForm of type [TWizardForm].
*   UninstallProgressForm of type [TUninstallProgressForm].
*   MainForm of type [TMainForm] (only visible if [WindowVisible] is set to yes.)

One special constant is available: crHand of type TControl.Cursor.

Note: you may find it useful to also refer to the Delphi Visual Component Library (VCL) Help files by Embarcadero Technologies, since the classes below are mostly simple wrappers around the VCL classes Inno Setup uses internally. See [http://docwiki.embarcadero.com/RADStudio/Rio/en/VCL](http://docwiki.embarcadero.com/RADStudio/Rio/en/VCL "http://docwiki.embarcadero.com/RADStudio/Rio/en/VCL").

```sh
TObject = class  
  constructor Create;  
  procedure Free;  
end;  
  
TPersistent = class([TObject])  
  procedure Assign(Source: [TPersistent]);  
end;  
  
TComponent = class([TPersistent])  
  function FindComponent(AName: String): [TComponent];  
  constructor Create(AOwner: [TComponent]);  
  property Owner: [TComponent]; read write;  
  procedure DestroyComponents;  
  procedure Destroying;  
  procedure FreeNotification(AComponent: [TComponent]);  
  procedure InsertComponent(AComponent: [TComponent]);  
  procedure RemoveComponent(AComponent: [TComponent]);  
  property Components[Index Integer]: [TComponent]; read;  
  property ComponentCount: Integer; read;  
  property ComponentIndex: Integer; read write;  
  property ComponentState: Byte; read;  
  property DesignInfo: Longint; read write;  
  property Name: String; read write;  
  property Tag: Longint; read write;  
end;  
  
TStrings = class([TPersistent])  
  function Add(S: String): Integer;  
  procedure Append(S: String);  
  procedure AddStrings(Strings: [TStrings]);  
  procedure Clear;  
  procedure Delete(Index: Integer);  
  function IndexOf(const S: String): Integer;  
  procedure Insert(Index: Integer; S: String);  
  property Count: Integer; read;  
  property Text: String; read write;  
  property CommaText: String; read write;  
  procedure LoadFromFile(FileName: String);  
  procedure SaveToFile(FileName: String);  
  property Strings[Index Integer]: String; read write;  
  property Objects[Index Integer]: [TObject]; read write;  
end;  
  
TNotifyEvent = procedure(Sender: [TObject]);  
  
TStringList = class([TStrings])  
  function Find(S: String; var Index: Integer): Boolean;  
  procedure Sort;  
  property Duplicates: TDuplicates; read write;  
  property Sorted: Boolean; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnChanging: [TNotifyEvent]; read write;  
end;  
  
TStream = class([TObject])  
  function Read(Buffer: String; Count: Longint): Longint;  
  function Write(Buffer: String; Count: Longint): Longint;  
  function Seek(Offset: Int64; Origin: Word): Int64;  
  procedure ReadBuffer(Buffer: String; Count: Longint);  
  procedure WriteBuffer(Buffer: String; Count: Longint);  
  function CopyFrom(Source: [TStream]; Count: Int64): Int64;  
  property Position: Longint; read write;  
  property Size: Longint; read write;  
end;  
  
THandleStream = class([TStream])  
  constructor Create(AHandle: Integer);  
  property Handle: Integer; read;  
end;  
  
TFileStream = class([THandleStream])  
  constructor Create(Filename: String; Mode: Word);  
end;  
  
TStringStream = class([TStream])  
  constructor Create(AString: String);  
end;  
  
TGraphicsObject = class([TPersistent])  
  property OnChange: [TNotifyEvent]; read write;  
end;  
  
TFontStyle = (fsBold, fsItalic, fsUnderline, fsStrikeOut);  
  
TFontStyles = set of [TFontStyle];  
  
TFont = class([TGraphicsObject])  
  constructor Create;  
  property Handle: Integer; read;  
  property Color: Integer; read write;  
  property Height: Integer; read write;  
  property Name: String; read write;  
  property Pitch: Byte; read write;  
  property Size: Integer; read write;  
  property PixelsPerInch: Integer; read write;  
  property Style: [TFontStyles]; read write;  
end;  
  
TCanvas = class([TPersistent])  
  procedure Arc(X1, Y1, X2, Y2, X3, Y3, X4, Y4: Integer);  
  procedure Chord(X1, Y1, X2, Y2, X3, Y3, X4, Y4: Integer);  
  procedure Draw(X, Y: Integer; Graphic: [TGraphic]);  
  procedure Ellipse(X1, Y1, X2, Y2: Integer);  
  procedure FloodFill(X, Y: Integer; Color: TColor; FillStyle: Byte);  
  procedure LineTo(X, Y: Integer);  
  procedure MoveTo(X, Y: Integer);  
  procedure Pie(X1, Y1, X2, Y2, X3, Y3, X4, Y4: Integer);  
  procedure Rectangle(X1, Y1, X2, Y2: Integer);  
  procedure Refresh;  
  procedure RoundRect(X1, Y1, X2, Y2, X3, Y3: Integer);  
  function TextHeight(Text: String): Integer;  
  procedure TextOut(X, Y: Integer; Text: String);  
  function TextWidth(Text: String): Integer;  
  property Handle: Integer; read write;  
  property Pixels: Integer Integer Integer; read write;  
  property Brush: [TBrush]; read;  
  property CopyMode: Byte; read write;  
  property Font: [TFont]; read;  
  property Pen: [TPen]; read;  
end;  
  
TPenMode = (pmBlack, pmWhite, pmNop, pmNot, pmCopy, pmNotCopy, pmMergePenNot, pmMaskPenNot, pmMergeNotPen, pmMaskNotPen, pmMerge, pmNotMerge, pmMask, pmNotMask, pmXor, pmNotXor);  
  
TPenStyle = (psSolid, psDash, psDot, psDashDot, psDashDotDot, psClear, psInsideFrame);  
  
TPen = class([TGraphicsObject])  
  constructor Create;  
  property Color: TColor; read write;  
  property Mode: [TPenMode]; read write;  
  property Style: [TPenStyle]; read write;  
  property Width: Integer; read write;  
end;  
  
TBrushStyle = (bsSolid, bsClear, bsHorizontal, bsVertical, bsFDiagonal, bsBDiagonal, bsCross, bsDiagCross);  
  
TBrush = class([TGraphicsObject])  
  constructor Create;  
  property Color: TColor; read write;  
  property Style: [TBrushStyle]; read write;  
end;  
  
TGraphic = class([TPersistent])  
  procedure LoadFromFile(const Filename: String);  
  procedure SaveToFile(const Filename: String);  
  property Empty: Boolean; read write;  
  property Height: Integer; read write;  
  property Modified: Boolean; read write;  
  property Width: Integer; read write;  
  property OnChange: [TNotifyEvent]; read write;  
end;  
  
TAlphaFormat = (afIgnored, afDefined, afPremultiplied);  
  
TBitmap = class([TGraphic])  
  procedure LoadFromStream(Stream: [TStream]);  
  procedure SaveToStream(Stream: [TStream]);  
  property AlphaFormat: [TAlphaFormat]; read write;  
  property Canvas: [TCanvas]; read write;  
  property Handle: HBITMAP; read write;  
end;  
  
TAlign = (alNone, alTop, alBottom, alLeft, alRight, alClient);  
  
TAnchorKind = (akLeft, akTop, akRight, akBottom);  
  
TAnchors = set of [TAnchorKind];  
  
TControl = class([TComponent])  
  constructor Create(AOwner: [TComponent]);  
  procedure BringToFront;  
  procedure Hide;  
  procedure Invalidate;  
  procedure Refresh;  
  procedure Repaint;  
  procedure SendToBack;  
  procedure Show;  
  procedure Update;  
  procedure SetBounds(ALeft, ATop, AWidth, AHeight: Integer);  
  property Left: Integer; read write;  
  property Top: Integer; read write;  
  property Width: Integer; read write;  
  property Height: Integer; read write;  
  property Hint: String; read write;  
  property Align: [TAlign]; read write;  
  property ClientHeight: Longint; read write;  
  property ClientWidth: Longint; read write;  
  property ShowHint: Boolean; read write;  
  property Visible: Boolean; read write;  
  property Enabled: Boolean; read write;  
  property Cursor: Integer; read write;  
end;  
  
TWinControl = class([TControl])  
  property Parent: [TWinControl]; read write;  
  property ParentBackground: Boolean; read write;  
  property Handle: Longint; read write;  
  property Showing: Boolean; read;  
  property TabOrder: Integer; read write;  
  property TabStop: Boolean; read write;  
  function CanFocus: Boolean;  
  function Focused: Boolean;  
  property Controls[Index Integer]: [TControl]; read;  
  property ControlCount: Integer; read;  
end;  
  
TGraphicControl = class([TControl])  
end;  
  
TCustomControl = class([TWinControl])  
end;  
  
TScrollBarKind = (sbHorizontal, sbVertical);  
  
TScrollBarInc = SmallInt;  
  
TScrollingWinControl = class([TWinControl])  
  procedure ScrollInView(AControl: [TControl]);  
end;  
  
TFormBorderStyle = (bsNone, bsSingle, bsSizeable, bsDialog, bsToolWindow, bsSizeToolWin);  
  
TBorderIcon = (biSystemMenu, biMinimize, biMaximize, biHelp);  
  
TBorderIcons = set of [TBorderIcon];  
  
TConstraintSize = 0..MaxInt;  
  
TSizeConstraints = class([TPersistent]);  
  property MaxHeight: [TConstraintSize]; read write;  
  property MaxWidth: [TConstraintSize]; read write;  
  property MinHeight: [TConstraintSize]; read write;  
  property MinWidth: [TConstraintSize]; read write;  
end;  
  
TPosition = (poDesigned, poDefault, poDefaultPosOnly, poDefaultSizeOnly, poScreenCenter, poDesktopCenter, poMainFormCenter, poOwnerFormCenter);  
  
TCloseAction = (caNone, caHide, caFree, caMinimize);  
  
TCloseEvent = procedure(Sender: [TObject]; var Action: [TCloseAction]);  
  
TCloseQueryEvent = procedure(Sender: [TObject]; var CanClose: Boolean);  
  
TEShiftState = (ssShift, ssAlt, ssCtrl, ssLeft, ssRight, ssMiddle, ssDouble);  
  
TShiftState = set of [TEShiftState];  
  
TKeyEvent = procedure(Sender: [TObject]; var Key: Word; Shift: [TShiftState]);  
  
TKeyPressEvent = procedure(Sender: [TObject]; var Key: Char);  
  
TForm = class([TScrollingWinControl])  
  constructor CreateNew(AOwner: [TComponent]);  
  procedure Close;  
  procedure Hide;  
  procedure Show;  
  function ShowModal: Integer;  
  procedure Release;  
  property Active: Boolean; read;  
  property ActiveControl: [TWinControl]; read write;  
  property Anchors: [TAnchors]; read write;  
  property AutoScroll: Boolean; read write;  
  property BorderIcons: [TBorderIcons]; read write;  
  property BorderStyle: [TFormBorderStyle]; read write;  
  property Caption: String; read write;  
  property Color: TColor; read write;  
  property Constraints: [TSizeConstraints]; read write;  
  property Font: [TFont]; read write;  
  property FormStyle: TFormStyle; read write;  
  property KeyPreview: Boolean; read write;  
  property Position: [TPosition]; read write;  
  property OnActivate: [TNotifyEvent]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnClose: [TCloseEvent]; read write;  
  property OnCloseQuery: [TCloseQueryEvent]; read write;  
  property OnCreate: [TNotifyEvent]; read write;  
  property OnDestroy: [TNotifyEvent]; read write;  
  property OnDeactivate: [TNotifyEvent]; read write;  
  property OnHide: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
  property OnResize: [TNotifyEvent]; read write;  
  property OnShow: [TNotifyEvent]; read write;  
end;  
  
TCustomLabel = class([TGraphicControl])  
end;  
  
TAlignment = (taLeftJustify, taRightJustify, taCenter);  
  
TLabel = class([TCustomLabel])  
  property Alignment: [TAlignment]; read write;  
  property Anchors: [TAnchors]; read write;  
  property AutoSize: Boolean; read write;  
  property Caption: String; read write;  
  property Color: TColor; read write;  
  property FocusControl: [TWinControl]; read write;  
  property Font: [TFont]; read write;  
  property WordWrap: Boolean; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
end;  
  
TCustomEdit = class([TWinControl])  
  procedure Clear;  
  procedure ClearSelection;  
  procedure SelectAll;  
  property Modified: Boolean; read write;  
  property SelLength: Integer; read write;  
  property SelStart: Integer; read write;  
  property SelText: String; read write;  
  property Text: String; read write;  
end;  
  
TBorderStyle = [TFormBorderStyle];  
  
TEditCharCase = (ecNormal, ecUpperCase, ecLowerCase);  
  
TEdit = class([TCustomEdit])  
  property Anchors: [TAnchors]; read write;  
  property AutoSelect: Boolean; read write;  
  property AutoSize: Boolean; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property CharCase: [TEditCharCase]; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property HideSelection: Boolean; read write;  
  property MaxLength: Integer; read write;  
  property PasswordChar: Char; read write;  
  property ReadOnly: Boolean; read write;  
  property Text: String; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
end;  
  
TNewEdit = class([TEdit])  
end;  
  
TCustomMemo = class([TCustomEdit])  
  property Lines: [TStrings]; read write;  
end;  
  
TScrollStyle = (ssNone, ssHorizontal, ssVertical, ssBoth);  
  
TMemo = class([TCustomMemo])  
  property Alignment: [TAlignment]; read write;  
  property Anchors: [TAnchors]; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property HideSelection: Boolean; read write;  
  property Lines: [TStrings]; read write;  
  property MaxLength: Integer; read write;  
  property ReadOnly: Boolean; read write;  
  property ScrollBars: [TScrollStyle]; read write;  
  property WantReturns: Boolean; read write;  
  property WantTabs: Boolean; read write;  
  property WordWrap: Boolean; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
end;  
  
TNewMemo = class([TMemo])  
end;  
  
TCustomComboBox = class([TWinControl])  
  property DroppedDown: Boolean; read write;  
  property Items: [TStrings]; read write;  
  property ItemIndex: Integer; read write;  
end;  
  
TComboBoxStyle = (csDropDown, csSimple, csDropDownList, csOwnerDrawFixed, csOwnerDrawVariable);  
  
TComboBox = class([TCustomComboBox])  
  property Anchors: [TAnchors]; read write;  
  property Color: TColor; read write;  
  property DropDownCount: Integer; read write;  
  property Font: [TFont]; read write;  
  property MaxLength: Integer; read write;  
  property Sorted: Boolean; read write;  
  property Style: [TComboBoxStyle]; read write;  
  property Text: String; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnDropDown: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
end;  
  
TNewComboBox = class([TComboBox])  
end;  
  
TButtonControl = class([TWinControl])  
end;  
  
TButton = class([TButtonControl])  
  property Anchors: [TAnchors]; read write;  
  property Cancel: Boolean; read write;  
  property Caption: String; read write;  
  property Default: Boolean; read write;  
  property Font: [TFont]; read write;  
  property ModalResult: Longint; read write;  
  property OnClick: [TNotifyEvent]; read write;  
end;  
  
TNewButton = class([TButton])  
end;  
  
TCustomCheckBox = class([TButtonControl])  
end;  
  
TCheckBoxState = (cbUnchecked, cbChecked, cbGrayed);  
  
TCheckBox = class([TCustomCheckBox])  
  property Alignment: [TAlignment]; read write;  
  property AllowGrayed: Boolean; read write;  
  property Anchors: [TAnchors]; read write;  
  property Caption: String; read write;  
  property Checked: Boolean; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property State: [TCheckBoxState]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
end;  
  
TNewCheckBox = class([TCheckBox])  
end;  
  
TRadioButton = class([TButtonControl])  
  property Alignment: [TAlignment]; read write;  
  property Anchors: [TAnchors]; read write;  
  property Caption: String; read write;  
  property Checked: Boolean; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
end;  
  
TNewRadioButton = class([TRadioButton])  
end;  
  
TCustomListBox = class([TWinControl])  
  property Items: [TStrings]; read write;  
  property ItemIndex: Integer; read write;  
  property SelCount: Integer; read;  
  property Selected[Index Integer]: Boolean; read write;  
end;  
  
TListBoxStyle = (lbStandard, lbOwnerDrawFixed, lbOwnerDrawVariable);  
  
TListBox = class([TCustomListBox])  
  property Anchors: [TAnchors]; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property MultiSelect: Boolean; read write;  
  property Sorted: Boolean; read write;  
  property Style: [TListBoxStyle]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
end;  
  
TNewListBox = class([TListBox])  
end;  
  
TBevelKind = (bkNone, bkTile, bkSoft, bkFlat);  
  
TBevelShape = (bsBox, bsFrame, bsTopLine, bsBottomLine, bsLeftLine, bsRightLine, bsSpacer);  
  
TBevelStyle = (bsLowered, bsRaised);  
  
TBevel = class([TGraphicControl])  
  property Anchors: [TAnchors]; read write;  
  property Shape: [TBevelShape]; read write;  
  property Style: [TBevelStyle]; read write;  
end;  
  
TCustomPanel = class([TCustomControl])  
end;  
  
TPanelBevel = (bvNone, bvLowered, bvRaised, bvSpace);  
  
TBevelWidth = Longint;  
  
TBorderWidth = Longint;  
  
TPanel = class([TCustomPanel])  
  property Alignment: [TAlignment]; read write;  
  property Anchors: [TAnchors]; read write;  
  property BevelInner: [TPanelBevel]; read write;  
  property BevelKind: [TBevelKind]; read write;  
  property BevelOuter: [TPanelBevel]; read write;  
  property BevelWidth: [TBevelWidth]; read write;  
  property BorderWidth: [TBorderWidth]; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property Caption: String; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
end;  
  
TNewStaticText = class([TWinControl])  
  function AdjustHeight: Integer;  
  property Anchors: [TAnchors]; read write;  
  property AutoSize: Boolean; read write;  
  property Caption: String; read write;  
  property Color: TColor; read write;  
  property FocusControl: [TWinControl]; read write;  
  property Font: [TFont]; read write;  
  property ForceLTRReading: Boolean; read write;  
  property ShowAccelChar: Boolean; read write;  
  property WordWrap: Boolean; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
end;  
  
TCheckItemOperation = (coUncheck, coCheck, coCheckWithChildren);  
  
TNewCheckListBox = class([TCustomListBox])  
  function AddCheckBox(const ACaption, ASubItem: String; ALevel: Byte; AChecked, AEnabled, AHasInternalChildren, ACheckWhenParentChecked: Boolean; AObject: [TObject]): Integer;  
  function AddGroup(ACaption, ASubItem: String; ALevel: Byte; AObject: [TObject]): Integer;  
  function AddRadioButton(const ACaption, ASubItem: String; ALevel: Byte; AChecked, AEnabled: Boolean; AObject: [TObject]): Integer;  
  function CheckItem(const Index: Integer; const AOperation: [TCheckItemOperation]): Boolean;  
  property Anchors: [TAnchors]; read write;  
  property Checked[Index Integer]: Boolean; read write;  
  property State[Index Integer]: [TCheckBoxState]; read write;  
  property ItemCaption[Index Integer]: String; read write;  
  property ItemEnabled[Index Integer]: Boolean; read write;  
  property ItemFontStyle[Index Integer]: [TFontStyles]; read write;  
  property ItemLevel[Index Integer]: Byte; read;  
  property ItemObject[Index Integer]: [TObject]; read write;  
  property ItemSubItem[Index Integer]: String; read write;  
  property SubItemFontStyle[Index Integer]: [TFontStyles]; read write;  
  property Flat: Boolean; read write;  
  property MinItemHeight: Integer; read write;  
  property Offset: Integer; read write;  
  property OnClickCheck: [TNotifyEvent]; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property Sorted: Boolean; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
  property ShowLines: Boolean; read write;  
  property WantTabs: Boolean; read write;  
  property RequireRadioSelection: Boolean; read write;  
end;  
  
TNewProgressBarState = (npbsNormal, npbsError, npbsPaused);  
  
TNewProgressBarStyle = (npbstNormal, npbstMarquee);  
  
TNewProgressBar = class([TWinControl])  
  property Anchors: [TAnchors]; read write;  
  property Min: Longint; read write;  
  property Max: Longint; read write;  
  property Position: Longint; read write;  
  property State: [TNewProgressBarState]; read write;  
  property Style: [TNewProgressBarStyle]; read write;  
  property Visible: Boolean; read write;  
end;  
  
TRichEditViewer = class([TMemo])  
  property Anchors: [TAnchors]; read write;  
  property BevelKind: [TBevelKind]; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property RTFText: AnsiString; write;  
  property UseRichEdit: Boolean; read write;  
end;  
  
TPasswordEdit = class([TCustomEdit])  
  property Anchors: [TAnchors]; read write;  
  property AutoSelect: Boolean; read write;  
  property AutoSize: Boolean; read write;  
  property BorderStyle: [TBorderStyle]; read write;  
  property Color: TColor; read write;  
  property Font: [TFont]; read write;  
  property HideSelection: Boolean; read write;  
  property MaxLength: Integer; read write;  
  property Password: Boolean; read write;  
  property ReadOnly: Boolean; read write;  
  property Text: String; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
  property OnKeyDown: [TKeyEvent]; read write;  
  property OnKeyPress: [TKeyPressEvent]; read write;  
  property OnKeyUp: [TKeyEvent]; read write;  
end;  
  
TCustomFolderTreeView = class([TWinControl])  
  procedure ChangeDirectory(const Value: String; const CreateNewItems: Boolean);  
  procedure CreateNewDirectory(const ADefaultName: String);  
  property: Directory: String; read write;  
end;  
  
TFolderRenameEvent = procedure(Sender: [TCustomFolderTreeView]; var NewName: String; var Accept: Boolean);  
  
TFolderTreeView = class([TCustomFolderTreeView])  
  property Anchors: [TAnchors]; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnRename: [TFolderRenameEvent]; read write;  
end;  
  
TStartMenuFolderTreeView = class([TCustomFolderTreeView])  
  procedure SetPaths(const AUserPrograms, ACommonPrograms, AUserStartup, ACommonStartup: String);  
  property Anchors: [TAnchors]; read write;  
  property OnChange: [TNotifyEvent]; read write;  
  property OnRename: [TFolderRenameEvent]; read write;  
end;  
  
TBitmapImage = class([TGraphicControl])  
  property Anchors: [TAnchors]; read write;  
  property AutoSize: Boolean; read write;  
  property BackColor: TColor; read write;  
  property Center: Boolean; read write;  
  property Bitmap: [TBitmap]; read write;  
  property ReplaceColor: TColor; read write;  
  property ReplaceWithColor: TColor; read write;  
  property Stretch: Boolean; read write;  
  property OnClick: [TNotifyEvent]; read write;  
  property OnDblClick: [TNotifyEvent]; read write;  
end;  
  
TNewNotebook = class([TWinControl])  
  function FindNextPage(CurPage: [TNewNotebookPage]; GoForward: Boolean): [TNewNotebookPage];  
  property Anchors: [TAnchors]; read write;  
  property PageCount: Integer; read write;  
  property Pages[Index Integer]: [TNewNotebookPage]; read;  
  property ActivePage: [TNewNotebookPage]; read write;  
end;  
  
TNewNotebookPage = class([TCustomControl])  
  property Color: TColor; read write;  
  property Notebook: [TNewNotebook]; read write;  
  property PageIndex: Integer; read write;  
end;  
  
TWizardPageNotifyEvent = procedure(Sender: [TWizardPage]);  
TWizardPageButtonEvent = function(Sender: [TWizardPage]): Boolean;  
TWizardPageCancelEvent = procedure(Sender: [TWizardPage]; var ACancel, AConfirm: Boolean);  
TWizardPageShouldSkipEvent = function(Sender: [TWizardPage]): Boolean;  
  
TWizardPage = class([TComponent])  
  property ID: Integer; read;  
  property Caption: String; read write;  
  property Description: String; read write;  
  property Surface: [TNewNotebookPage]; read;  
  property SurfaceColor: TColor; read;  
  property SurfaceHeight: Integer; read;  
  property SurfaceWidth: Integer; read;  
  property OnActivate: [TWizardPageNotifyEvent]; read write;  
  property OnBackButtonClick: [TWizardPageButtonEvent]; read write;  
  property OnCancelButtonClick: [TWizardPageCancelEvent]; read write;  
  property OnNextButtonClick: [TWizardPageButtonEvent]; read write;  
  property OnShouldSkipPage: [TWizardPageShouldSkipEvent]; read write;  
end;  
  
TInputQueryWizardPage = class([TWizardPage])  
  function Add(const APrompt: String; const APassword: Boolean): Integer;  
  property Edits[Index Integer]: [TPasswordEdit]; read;  
  property PromptLabels[Index Integer]: [TNewStaticText]; read;  
  property SubCaptionLabel: [TNewStaticText]; read;  
  property Values[Index Integer]: String; read write;  
end;  
  
TInputOptionWizardPage = class([TWizardPage])  
  function Add(const ACaption: String): Integer;  
  function AddEx(const ACaption: String; const ALevel: Byte; const AExclusive: Boolean): Integer;  
  property CheckListBox: [TNewCheckListBox]; read;  
  property SelectedValueIndex: Integer; read write;  
  property SubCaptionLabel: [TNewStaticText]; read;  
  property Values[Index Integer]: Boolean; read write;  
end;  
  
TInputDirWizardPage = class([TWizardPage])  
  function Add(const APrompt: String): Integer;  
  property Buttons[Index Integer]: [TNewButton]; read;  
  property Edits[Index Integer]: [TEdit]; read;  
  property PromptLabels[Index Integer]: [TNewStaticText]; read;  
  property SubCaptionLabel: [TNewStaticText]; read;  
  property Values[Index Integer]: String; read write;  
end;  
  
TInputFileWizardPage = class([TWizardPage])  
  function Add(const APrompt, AFilter, ADefaultExtension: String): Integer;  
  property Buttons[Index Integer]: [TNewButton]; read;  
  property Edits[Index Integer]: [TEdit]; read;  
  property PromptLabels[Index Integer]: [TNewStaticText]; read;  
  property SubCaptionLabel: [TNewStaticText]; read;  
  property Values[Index Integer]: String; read write;  
  property IsSaveButton[Index Integer]: Boolean; read write;  
end;  
  
TOutputMsgWizardPage = class([TWizardPage])  
  property MsgLabel: [TNewStaticText]; read;  
end;  
  
TOutputMsgMemoWizardPage = class([TWizardPage])  
  property RichEditViewer: [TRichEditViewer]; read;  
  property SubCaptionLabel: [TNewStaticText]; read;  
end;  
  
TOutputProgressWizardPage = class([TWizardPage])  
  procedure Hide;  
  property Msg1Label: [TNewStaticText]; read;  
  property Msg2Label: [TNewStaticText]; read;  
  property ProgressBar: [TNewProgressBar]; read;  
  procedure SetProgress(const Position, Max: Longint);  
  procedure SetText(const Msg1, Msg2: String);  
  procedure Show;  
end;  
  
TOutputMarqueeProgressWizardPage = class([TOutputProgressWizardPage])  
  procedure Animate;  
end;  
  
TDownloadWizardPage = class([TOutputProgressWizardPage])  
  property AbortButton: [TNewButton]; read;  
  property AbortedByUser: Boolean; read;  
  procedure Add(const Url, BaseName, RequiredSHA256OfFile: String);  
  procedure AddEx(const Url, BaseName, RequiredSHA256OfFile, UserName, Password: String);  
  procedure Clear;  
  function Download: Int64;  
end;  
  
TUIStateForm = class([TForm])  
end;  
  
TSetupForm = class([TUIStateForm])  
  function CalculateButtonWidth(const ButtonCaptions: array of String): Integer;  
  function ShouldSizeX: Boolean;  
  function ShouldSizeY: Boolean;  
  procedure FlipSizeAndCenterIfNeeded(const ACenterInsideControl: Boolean; const CenterInsideControlCtl: [TWinControl]; const CenterInsideControlInsideClientArea: Boolean);  
  property ControlsFlipped: Boolean; read;  
  property FlipControlsOnShow: Boolean; read write;  
  property KeepSizeY: Boolean; read; write;  
  property RightToLeft: Boolean; read;  
  property SizeAndCenterOnShow: Boolean; read write;  
end;  
  
TMainForm = class([TSetupForm])  
  procedure ShowAboutBox;  
end;  
  
TWizardForm = class([TSetupForm])  
  property CancelButton: [TNewButton]; read;  
  property NextButton: [TNewButton]; read;  
  property BackButton: [TNewButton]; read;  
  property OuterNotebook: TNotebook; read;  
  property InnerNotebook: TNotebook; read;  
  property WelcomePage: [TNewNotebookPage]; read;  
  property InnerPage: [TNewNotebookPage]; read;  
  property FinishedPage: [TNewNotebookPage]; read;  
  property LicensePage: [TNewNotebookPage]; read;  
  property PasswordPage: [TNewNotebookPage]; read;  
  property InfoBeforePage: [TNewNotebookPage]; read;  
  property UserInfoPage: [TNewNotebookPage]; read;  
  property SelectDirPage: [TNewNotebookPage]; read;  
  property SelectComponentsPage: [TNewNotebookPage]; read;  
  property SelectProgramGroupPage: [TNewNotebookPage]; read;  
  property SelectTasksPage: [TNewNotebookPage]; read;  
  property ReadyPage: [TNewNotebookPage]; read;  
  property PreparingPage: [TNewNotebookPage]; read;  
  property InstallingPage: [TNewNotebookPage]; read;  
  property InfoAfterPage: [TNewNotebookPage]; read;  
  property DiskSpaceLabel: [TNewStaticText]; read;  
  property DirEdit: [TEdit]; read;  
  property GroupEdit: [TNewEdit]; read;  
  property NoIconsCheck: [TNewCheckBox]; read;  
  property PasswordLabel: [TNewStaticText]; read;  
  property PasswordEdit: [TPasswordEdit]; read;  
  property PasswordEditLabel: [TNewStaticText]; read;  
  property ReadyMemo: [TNewMemo]; read;  
  property TypesCombo: [TNewComboBox]; read;  
  property Bevel: [TBevel]; read;  
  property WizardBitmapImage: [TBitmapImage]; read;  
  property WelcomeLabel1: [TNewStaticText]; read;  
  property InfoBeforeMemo: [TRichEditViewer]; read;  
  property InfoBeforeClickLabel: [TNewStaticText]; read;  
  property MainPanel: [TPanel]; read;  
  property Bevel1: [TBevel]; read;  
  property PageNameLabel: [TNewStaticText]; read;  
  property PageDescriptionLabel: [TNewStaticText]; read;  
  property WizardSmallBitmapImage: [TBitmapImage]; read;  
  property ReadyLabel: [TNewStaticText]; read;  
  property FinishedLabel: [TNewStaticText]; read;  
  property YesRadio: [TNewRadioButton]; read;  
  property NoRadio: [TNewRadioButton]; read;  
  property WizardBitmapImage2: [TBitmapImage]; read;  
  property WelcomeLabel2: [TNewStaticText]; read;  
  property LicenseLabel1: [TNewStaticText]; read;  
  property LicenseMemo: [TRichEditViewer]; read;  
  property InfoAfterMemo: [TRichEditViewer]; read;  
  property InfoAfterClickLabel: [TNewStaticText]; read;  
  property ComponentsList: [TNewCheckListBox]; read;  
  property ComponentsDiskSpaceLabel: [TNewStaticText]; read;  
  property BeveledLabel: [TNewStaticText]; read;  
  property StatusLabel: [TNewStaticText]; read;  
  property FilenameLabel: [TNewStaticText]; read;  
  property ProgressGauge: [TNewProgressBar]; read;  
  property SelectDirLabel: [TNewStaticText]; read;  
  property SelectStartMenuFolderLabel: [TNewStaticText]; read;  
  property SelectComponentsLabel: [TNewStaticText]; read;  
  property SelectTasksLabel: [TNewStaticText]; read;  
  property LicenseAcceptedRadio: [TNewRadioButton]; read;  
  property LicenseNotAcceptedRadio: [TNewRadioButton]; read;  
  property UserInfoNameLabel: [TNewStaticText]; read;  
  property UserInfoNameEdit: [TNewEdit]; read;  
  property UserInfoOrgLabel: [TNewStaticText]; read;  
  property UserInfoOrgEdit: [TNewEdit]; read;  
  property PreparingErrorBitmapImage: [TBitmapImage]; read;  
  property PreparingLabel: [TNewStaticText]; read;  
  property FinishedHeadingLabel: [TNewStaticText]; read;  
  property UserInfoSerialLabel: [TNewStaticText]; read;  
  property UserInfoSerialEdit: [TNewEdit]; read;  
  property TasksList: [TNewCheckListBox]; read;  
  property RunList: [TNewCheckListBox]; read;  
  property DirBrowseButton: [TNewButton]; read;  
  property GroupBrowseButton: [TNewButton]; read;  
  property SelectDirBitmapImage: [TBitmapImage]; read;  
  property SelectGroupBitmapImage: [TBitmapImage]; read;  
  property SelectDirBrowseLabel: [TNewStaticText]; read;  
  property SelectStartMenuFolderBrowseLabel: [TNewStaticText]; read;  
  property PreparingYesRadio: [TNewRadioButton]; read;  
  property PreparingNoRadio: [TNewRadioButton]; read;  
  property PreparingMemo: [TNewMemo]; read;  
  property CurPageID: Integer; read;  
  function AdjustLabelHeight(ALabel: [TNewStaticText]): Integer;  
  procedure IncTopDecHeight(AControl: [TControl]; Amount: Integer);  
  property PrevAppDir: String; read;  
end;  
  
TUninstallProgressForm = class([TSetupForm])  
  property OuterNotebook: [TNewNotebook]; read;  
  property InnerPage: [TNewNotebookPage]; read;  
  property InnerNotebook: [TNewNotebook]; read;  
  property InstallingPage: [TNewNotebookPage]; read;  
  property MainPanel: [TPanel]; read;  
  property PageNameLabel: [TNewStaticText]; read;  
  property PageDescriptionLabel: [TNewStaticText]; read;  
  property WizardSmallBitmapImage: [TBitmapImage]; read;  
  property Bevel1: [TBevel]; read;  
  property StatusLabel: [TNewStaticText]; read;  
  property ProgressBar: [TNewProgressBar]; read;  
  property BeveledLabel: [TNewStaticText]; read;  
  property Bevel: [TBevel]; read;  
  property CancelButton: [TNewButton]; read;  
end;  
```

**See also:**  

- function [CreateInputQueryPage][CreateInputQueryPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String): TInputQueryWizardPage;  
- function [CreateInputOptionPage][CreateInputOptionPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; Exclusive, ListBox: Boolean): TInputOptionWizardPage;  
- function [CreateInputDirPage][CreateInputDirPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; AAppendDir: Boolean; ANewFolderName: String): TInputDirWizardPage;  
- function [CreateInputFilePage][CreateInputFilePage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String): TInputFileWizardPage;  
- function [CreateOutputMsgPage][CreateOutputMsgPage](const AfterID: Integer; const ACaption, ADescription, AMsg: String): TOutputMsgWizardPage;  
- function [CreateOutputMsgMemoPage][CreateOutputMsgMemoPage](const AfterID: Integer; const ACaption, ADescription, ASubCaption: String; const AMsg: AnsiString): TOutputMsgMemoWizardPage;  
- function [CreateOutputProgressPage][CreateOutputProgressPage](const ACaption, ADescription: String): TOutputProgressWizardPage;  
- function [CreateOutputMarqueeProgressPage][CreateOutputMarqueeProgressPage](const ACaption, ADescription: String): TOutputMarqueeProgressWizardPage;  
- function [CreateCustomPage][CreateCustomPage](const AfterID: Integer; const ACaption, ADescription: String): TWizardPage;  
- function [CreateCustomForm][CreateCustomForm]: TSetupForm;  
  
- function [PageFromID][PageFromID](const ID: Integer): TWizardPage;  
- function [MinimizePathName][MinimizePathName](const Filename: String; const Font: TFont; MaxLen: Integer): String;  Pascal Scripting: Using Custom Wizard Pages 

Pascal Scripting: Using Custom Wizard Pages
-------------------------------------------

The Pascal script allows you to add custom pages to Setup's wizard. This includes "pre-built" wizard pages for common queries and completely custom wizard pages with the controls of your choice.

To use custom wizard pages, first create them inside your InitializeWizard event function. You can either use pre-built pages created by the CreateInput...Page and CreateOutput...Page functions or "empty" pages created by the CreateCustomPage function. See [Support Functions] topic for a listing and explanation of all Create...Page functions.

After creating each page, you add controls to it, either by calling the special methods of the pre-built pages, or by manually creating controls on the page yourself.

Most of the Create...Page functions take a "page ID" as their first parameter; this identifies the existing page after which the newly created page should be placed. There are several ways to find the "page ID" of an existing page. The pages you create yourself have ID properties which hold their page IDs. Built-in wizard pages have predefined IDs. For example, for the _Welcome_ wizard page this is wpWelcome. See the [Support Functions] topic for a listing of all predefined IDs.

After the custom wizard pages are created, Setup will show and handle them just as if they were built-in wizard pages. This includes the calling of all page related event functions such as NextButtonClick and ShouldSkipPage.

At any time during Setup you can retrieve the values entered by the user either by using the special properties of the pre-built pages, or by using the properties of the controls you created yourself.

Open the "CodeDlg.iss" script in the "Examples" subdirectory of your Inno Setup directory for an example of how to use pre-built custom wizard pages and event functions. Open the "CodeClasses.iss" script for an example of how to use completely custom wizard pages and controls.  Pascal Scripting: Using DLLs and .NET assemblies 

Pascal Scripting: Using DLLs and .NET assemblies
------------------------------------------------

The Pascal script can call functions inside external DLLs. This includes both standard Win32 API functions inside standard Windows DLLs and custom functions in custom made DLLs. Additionally .NET assemblies can be called.

Open the "CodeDll.iss" file in the "Examples" subdirectory in your Inno Setup directory for an example script using DLLs.

The "Examples" subdirectory also contains three custom DLL example projects, one for Microsoft Visual C++, one for Microsoft Visual C# and one for Borland Delphi. The C# example shows how to make your .NET assemblies callable by the Pascal script.

To be able to call a DLL function you should first write the function prototype as normal but instead of then writing the function body, you use the 'external' keyword to specify a DLL. If your function has for example prototype function A(B: Integer): Integer;, the following three forms are supported:

    [Code]
    function A(B: Integer): Integer;
    external '<dllfunctionname>@<dllfilename>';

    function A(B: Integer): Integer;
    external '<dllfunctionname>@<dllfilename> <callingconvention>';

    function A(B: Integer): Integer;
    external '<dllfunctionname>@<dllfilename> <callingconvention> <options>';

The first form specifies that the DLL function should be called using default calling convention, which is 'stdcall'. All standard Win32 API functions use 'stdcall' just like most custom DLL functions.

The second form specifies that the DLL function should be called using a special calling convention. Valid calling conventions are: 'stdcall' (the default), 'cdecl', 'pascal' and 'register'.

The third form specifies additional one or more options for loading the DLL, separated by spaces:

*   delayload

    Specifies that the DLL should be delay loaded. Normally the Pascal script checks at startup whether the DLL function can be called and if not, refuses to run. This does not happen if you specify delay loading using 'delayload'. Use delay loading if you want to call a DLL function for which you don't know whether it will actually be available at runtime: if the DLL function can't be called, the Pascal script will still run but throw an exception when you try to call the DLL function which you can catch to handle the absence of the DLL function.

*   loadwithalteredsearchpath

    Specifies that the DLL should be loaded using the Windows flag LOAD_WITH_ALTERED_SEARCH_PATH, which, in essence, causes the loader to search for any dependent DLLs in the directory containing the DLL.

*   setuponly

    Specifies that the DLL should only be loaded when the script is running from Setup.

*   uninstallonly

    Specifies that the DLL should only be loaded when the script is running from Uninstall.

An example (of the second form) if the DLL function has name 'A2' inside the DLL, the DLL has name 'MyDll.dll' and the DLL function uses the 'stdcall' calling convention:

    [Code]
    function A(B: Integer): Integer;
    external 'A2@MyDll.dll stdcall';

Constants may be used in the DLL filename.

During Setup, a special 'files:' prefix may also be used to instruct Setup to automatically extract one or more DLLs from the [Files] section before loading the first DLL. For example:

    [Files]
    Source: "MyDll.dll"; Flags: dontcopy
    Source: "A.dll"; Flags: dontcopy
    Source: "B.dll"; Flags: dontcopy

    [Code]
    procedure MyDllFunc(hWnd: Integer; lpText, lpCaption: AnsiString; uType: Cardinal);
    external 'MyDllFunc@files:MyDll.dll stdcall';

    procedure ADllFunc(hWnd: Integer; lpText, lpCaption: AnsiString; uType: Cardinal);
    external 'ADllFunc@files:A.dll,B.dll stdcall loadwithalteredsearchpath'; //A.dll depends on B.dll

If you use a 'files:' prefix and [solid compression] is enabled, be sure to list your DLLs at (or near) the top of the [Files] section. In order to extract an arbitrary file in a solid-compressed installation, Setup must first decompress all prior files (to a temporary buffer in memory). This can result in a substantial delay if a number of other files are listed above the specified file in the [Files] section.

Use [CreateCallback] to be able to perform direct callbacks from DLL functions (like Windows API functions) to functions in your script  Pascal Scripting: Using COM Automation objects 

Pascal Scripting: Using COM Automation objects
----------------------------------------------

The Pascal script can access COM (also known as OLE or ActiveX) methods and properties via the COM Automation objects support. This allows you to access for example standard Windows COM servers, custom COM servers, Visual Basic ActiveX DLLs and .NET assemblies via COM Interop.

*   **IDispatch based COM**

    There are two support functions to initialize IDispatch based COM Automation objects: [CreateOleObject] and [GetActiveOleObject].

    Use [CreateOleObject] to create a new COM object with the specified class name. This function returns a variable of type Variant if successful and throws an exception otherwise.

    Use [GetActiveOleObject] to connect to an existing COM object with the specified class name. This function returns a variable of type Variant if successful and throws an exception otherwise. In case of some programs, this can be used to detect whether the program is running or not.

    The value returned by [CreateOleObject] or [GetActiveOleObject] can then be used to access the properties and methods of the COM object. The access is done via 'late binding' which means it is not checked whether the methods or properties you're trying to access actually exist until Setup actually needs to at run time.

    To access a property or method whose name is a reserved word, use [IDispatchInvoke].

    Open the "CodeAutomation.iss" file in the "Examples" subdirectory in your Inno Setup directory for an example script using IDispatch based COM Automation objects.

    If you're using a .NET COM object and loading it fails since Inno Setup 5.5.9 try putting this line in your script before creating the COM object: LoadDLL(ExpandConstant('{sys}\mscoree.dll'), ErrorCode); and add a variable ErrorCode of type Integer.

*   **IUnknown based COM**

    If the IDispatch interface isn't implemented by the object, you can use the IUnknown based COM support.

    To initialize IUnknown based COM Automation objects use [CreateComObject].

    The value returned by [CreateComObject] can then be used to access the methods of the COM object after casting it to the desired interface. The access is done via 'early binding' which means the desired interface needs to be defined in the script, unlike for IDispatch based COM support.

    [StringToGUID] can be used to convert the string representation of a GUID into a 'real' GUID. Use [OleCheck] to check the return values of any method you call.

    If you copy the interface definition from any existing Delphi source code, remove the brackets around the interface GUID string. Also remove any calling conventions, Inno Setup assumes 'stdcall'. If the interface contains any functions you won't call, you can replace these by dummies to avoid having to define any special types used by them.

    Open the "CodeAutomation2.iss" file in the "Examples" subdirectory in your Inno Setup directory for an example script using IUnknown based COM Automation objects.

*   **General**

    COM objects are released automatically when they go out of scope. There are no functions to 'destroy' or 'free' them.

    If you are extracting a COM Automation library to a temporary location and want to be able to delete it after using it, make sure you no longer have any references to the library and then call [CoFreeUnusedLibraries]. This Windows function will then attempt to unload the library so you can delete it.  Pascal Scripting: Debugging 

Pascal Scripting: Debugging
---------------------------

The Compiler IDE contains an integrated run-time debugger to debug your custom Pascal script, accessed via the _Run_ menu. This debugger works very much like debuggers in other IDE's and uses the following menu items:

*   _Run To Cursor_ (F4)

    Runs or unpauses Setup until it reaches the line of the cursor, then pauses it.

*   _Step Into_ (F7)

    Runs or unpauses Setup until it reaches the next line, then pauses it. By continually pressing F7 you can follow the entire execution flow of Setup.

*   _Step Over_ (F8)

    Runs or unpauses Setup until it reaches the next line, then pauses it. Lines inside functions calls are skipped.

*   _Step Out_ (Shift+F8)

    Unpauses Setup until it reaches the end of the current function, then pauses it on the next line.

*   _Toggle Breakpoint_ (F5)

    Next time Setup reaches the line of the cursor, it pauses. There can be multiple breakpoints at once and breakpoints can be removed by pressing F5 again.

*   _Pause_

    Next time Setup reaches any line, it pauses.

When Setup is paused variables and constants can be inspected by hovering the mouse over them.

To debug Uninstall instead of Setup first run Setup to completion then choose _Target Uninstall_ (Ctrl+W) and finally use one of the above menu items.

Lines which can be paused on are marked by a gray square in the gutter. The square turns green the first time Setup reaches the line.

Besides lines in the Pascal script, lines in some other sections can also be paused on, again shown by a gray square in the gutter. For example, toggling a breakpoint on a line in the [Files] section will pause Setup when that file is about to be processed. On such lines _Step Over_ and _Step Out_ both act as _Step Into_.  Support Inno Setup 


/Other Information
==================

Support Inno Setup
------------------

To support Inno Setup, go to this page:  
[https://jrsoftware.org/isdonate.php](https://jrsoftware.org/isdonate.php "https://jrsoftware.org/isdonate.php")

Thank you in advance for your support!  Unicode Inno Setup 

Unicode Inno Setup
------------------

Prior to Inno Setup 6 two versions of Inno Setup were available: Non Unicode Inno Setup and Unicode Inno Setup. Starting with Inno Setup 6 there's only one version available: Unicode Inno Setup.

Key features of Unicode Inno Setup are its ability to display any language on any system regardless of the system code page, and its ability to work with Unicode filenames.

If you don't remember which version you installed, click the "Inno Setup Compiler" shortcut created in the Start Menu. If the version number displayed in its title bar says "(a)" you are running Non Unicode Inno Setup. Otherwise you are running Unicode Inno Setup.

For the most part the two versions are used identically, and any differences between them are noted throughout the help file. However, the following overview lists the primary differences:

*   Unicode Inno Setup supports UTF-8 encoded .iss and .isl files (but not UTF-16).
*   Any existing ANSI .isl language files are automatically converted during compilation using the LanguageCodePage setting of the language.
*   Any [Messages] and `CustomMessages` entries in existing ANSI .iss script files must to be converted to Unicode manually if the language used a special LanguageCodePage.
*   Unicode Inno Setup supports UTF-8 and UTF-16LE encoded .txt files for LicenseFile, InfoBeforeFile, and InfoAfterFile.
*   Any language specific plain text ANSI files used for LicenseFile, InfoBeforeFile, or InfoAfterFile are automatically converted during compilation using the LanguageCodePage setting of the language.
*   The [Setup] directive ShowUndisplayableLanguages is ignored by Unicode Inno Setup.
*   Existing installations of your programs done by non Unicode installers can be freely updated by Unicode installers, and vice versa.
*   Unicode Pascal Scripting notes:
    *   The Unicode compiler sees type 'String' as a Unicode string, and 'Char' as a Unicode character. Its 'AnsiString' type hasn't changed and still is an ANSI string. Its 'PChar' type has been renamed to 'PAnsiChar'.
    *   The Unicode compiler is more strict about correct ';' usage: it no longer accepts certain missing ';' characters.
    *   Some support functions had their prototype changed: some parameters of CreateOutputMsgMemoPage, RegQueryBinaryValue, RegWriteBinaryValue, OemToCharBuff, CharToOemBuff, LoadStringFromfile, SaveStringToFile, and GetMD5OfString are of type AnsiString now instead of String.
    *   Added new SaveStringsToUTF8File, and GetMD5OfUnicodeString support functions.
    *   Added new 'Int64' type, supported by IntToStr. Also added new StrToInt64, StrToInt64Def, and GetSpaceOnDisk64 support functions.
    *   Added new TStringStream class.
    *   If you want to compile an existing script that imports ANSI Windows API calls with the Unicode compiler, either upgrade to the 'W' Unicode API call or change the parameters from 'String' or 'PChar' to 'AnsiString'. The 'AnsiString' approach will make your [Code] compatible with both the Unicode and the non Unicode version.

Note: Unicode Inno Setup can only create Unicode installers and like wise the non Unicode version can only create non Unicode installers. If you want to be able to create both Unicode and non Unicode installers on one computer, you have to install both versions of Inno Setup into different folders.  Non Administrative Install Mode 

Non Administrative Install Mode
-------------------------------

An installation can run in one of two modes: administrative or non administrative. Which mode is selected is specified by the [PrivilegesRequired] and [PrivilegesRequiredOverridesAllowed] [Setup] section directives.

In administrative install mode:

*   The {group} folder is created in the _All Users_ profile.
*   The "auto" form of the directory and Shell Folder constants is mapped to the "common" form.
*   The "user" form of these constants should NOT be used: user-level files and settings must be handled by the application itself, and never in an administrative install mode installer.
*   The [HKA], uninstall info, and font install root keys will be HKEY_LOCAL_MACHINE.

In non administrative install mode:

*   The {group} folder is created in the current user's profile.
*   The "auto" form of the directory and Shell Folder constants is mapped to the "user" form.
*   The [HKA], uninstall info, and font install root keys will be HKEY_CURRENT_USER.

**Notes:**

Regardless of the version of Windows, if the installation is running in administrative install mode then you should be careful about making any per-user area changes: user-level files and settings must be handled by the application itself, and never in an administrative install mode installer. The compiler will warn you about this, which can be disabled using [UsedUserAreasWarning].

If the installation is running in non administrative install mode, but administrative privileges are available anyway then Setup or the [Code] section might still make use of these privileges. For this reason the uninstaller will always be marked as requiring administrative privileges in this case, just as if the installation was running in administrative install mode.  64-bit Install Mode 

64-bit Install Mode
-------------------

An installation can run in one of two modes: 32-bit or 64-bit. 64-bit install mode is selected if the user is running a 64-bit version of Windows and the system's processor architecture is included in the value of the [ArchitecturesInstallIn64BitMode] [Setup] section directive. Otherwise, 32-bit install mode is used.

How do the two modes of installation differ? Primarily, the differences lie in where things are installed by default.

In 32-bit install mode:

*   The System32 path returned by the {sys} constant maps to the 32-bit System directory by default.
*   The {commonpf} constant is equivalent to {commonpf32}.
*   The {commoncf} constant is equivalent to {commoncf32}.
*   `Registry` writes to the 32-bit view by default.
*   The {reg:...} constant reads the 32-bit view by default.
*   The Reg* [Code] support functions access the 32-bit view by default.
*   The useapppaths flag of the [Icons] section reads the "App Paths" key in the 32-bit view of the registry.
*   The regserver and regtypelib flags of the [Files] section load and register files inside a 32-bit process by default.
*   The sharedfile flag of the [Files] section updates the "SharedDLLs" key in the 32-bit view of the registry by default.
*   The Uninstall key is created in the 32-bit view of the registry.

In 64-bit install mode:

*   The System32 path returned by the {sys} constant maps to the 64-bit System directory by default when used in the [Dirs], [Files], [InstallDelete], [Run], [UninstallDelete], and [UninstallRun] sections. This is because Setup/Uninstall temporarily disables [WOW64 file system redirection](http://msdn.microsoft.com/en-us/library/aa384187.aspx "http://msdn.microsoft.com/en-us/library/aa384187.aspx") when files/directories are accessed by those sections. Elsewhere, System32 and {sys} map to the 32-bit System directory, as is normal in a 32-bit process.
*   The {commonpf} constant is equivalent to {commonpf64}.
*   The {commoncf} constant is equivalent to {commoncf64}.
*   `Registry` writes to the 64-bit view by default.
*   The {reg:...} constant reads the 64-bit view by default.
*   The Reg* [Code] support functions access the 64-bit view by default.
*   The useapppaths flag of the [Icons] section reads the "App Paths" key in the 64-bit view of the registry.
*   The regserver and regtypelib flags of the [Files] section load and register files inside a 64-bit process by default.
*   The sharedfile flag of the [Files] section updates the "SharedDLLs" key in the 64-bit view of the registry by default.
*   The Uninstall key is created in the 64-bit view of the registry.  64-bit Installation Limitations 

64-bit Installation Limitations
-------------------------------

Because Inno Setup is a 32-bit application, there are some limitations to be aware of when utilizing its 64-bit installation features:

*   The System32 path returned by the {sys} constant does not always map to the 
    64-bit System directory. When Setup/Uninstall is running in 64-bit install mode, it maps to the 64-bit System directory when used in the [Dirs], [Files], [InstallDelete], [Run], [UninstallDelete], and [UninstallRun] sections because Setup temporarily disables [WOW64 file system redirection](http://msdn.microsoft.com/en-us/library/aa384187.aspx "http://msdn.microsoft.com/en-us/library/aa384187.aspx") when files/directories are accessed by those sections. Elsewhere, System32 and {sys} map to the 32-bit System directory, as is normal in a 32-bit process.

*   In the [Code] section, when Setup/Uninstall is running in 64-bit install mode, 
    functions that access files disable WOW64 file system redirection (unless overridden by a call to [EnableFsRedirection]). However, there are exceptions, listed below. These functions never disable file system redirection, meaning you cannot pass them (or get back) the name of a file located in the 64-bit System directory:
    

        *Ini*               (all of the functions that manipulate .INI files)
    *   **BrowseForFolder**
    *   **CreateShellLink**
    *   **GetOpenFileName**
        LoadDLL             (see following point)
    *   **ModifyPifFile**
    *   **SetCurrentDir**
        ShellExec           (use Exec instead)
    *   **UnregisterFont**

    Additionally, no VCL classes are capable of disabling file system redirection. For example, you cannot call the LoadFromFile method of TBitmap to load a bitmap file from the 64-bit System directory.
    
*   You cannot load/use 64-bit DLLs in the [Code] section, because Windows 
    does not allow 32-bit processes to load 64-bit DLLs (and vice versa). A 32-bit process can, however, launch 64-bit EXEs. Use the Exec function or the [Run] section to do that.  Wizard Pages 

Wizard Pages
------------

Below is a list of all the wizard pages Setup may potentially display, and the conditions under which they are displayed.

*   **Welcome** Shown if [DisableWelcomePage] is set to no.
*   **License Agreement**  
    Shown if [LicenseFile] is set. Users may proceed to the next page only if the option "I accept the agreement" is selected.
*   **Password**  
    Shown if [Password] is set. Users may proceed to the next page only after entering the correct password.
*   **Information** Shown if [InfoBeforeFile] is set.
*   **User Information** Shown if [UserInfoPage] is set to yes.
*   **Select Destination Location** Shown if [DisableDirPage] is set to no or auto.
*   **Select Components** Shown if there are any [Components] entries.
*   **Select Start Menu Folder**  
    Shown if there are any [Icons] entries and if [DisableProgramGroupPage] is set to no or auto.
*   **Select Tasks**  
    Shown if there are any [Tasks] entries, unless the [Tasks] entries are all tied to components that were not selected on the _Select Components_ page.
*   **Ready to Install** Shown by default, but can be disabled via [DisableReadyPage].
*   **Preparing to Install**  
    Normally, Setup will never stop or pause on this page. The only time it will is if Setup determines it can't continue or if it detects applications using files that need to be updated.  
      
    The former can happen if the [PrepareToInstall] event function returned an error or if one or more files specified in the [Files] and [InstallDelete] sections were queued (by some other installation) to be replaced or deleted on the next restart. In this case, it tells the user they need to restart their computer and then run Setup again. Note that this check is performed on silent installations too, but any messages are displayed in a message box instead of inside a wizard page.  
      
    The latter can happen if [CloseApplications] is set to yes or force.
*   **Installing** Shown during the actual installation process.
*   **Information** Shown if [InfoAfterFile] is set.
*   **Setup Completed**  
    Shown by default, but can be disabled in some cases via [DisableFinishedPage].

See the _AllPagesExample.iss_ example script for an example which shows all these pages.  Installation Order 

Installation Order
------------------

Once the actual installation process begins, this is the order in which the various installation tasks are performed:

*   If [CloseApplications] was set to yes, Setup closes applications using files that need to be updated.
*   [InstallDelete] is processed.
*   The entries in [UninstallDelete] are stored in the uninstall log (which, at this stage, is stored in memory).
*   The application directory is created, if necessary.
*   [Dirs] is processed.
*   A filename for the uninstall log is reserved, if necessary.
*   [Files] is processed. (File registration does not happen yet.)
*   [Icons] is processed.
*   [INI] is processed.
*   [`Registry`] is processed.
*   Files that needed to be registered are now registered, unless the system needs to be restarted, in which case no files are registered until the system is restarted.
*   The _Add/Remove Programs_ entry for the program is created, if necessary.
*   The entries in [UninstallRun] are stored in the uninstall log.
*   The uninstaller EXE and log are finalized and saved to disk. After this is done, the user is forbidden from cancelling the install, and any subsequent errors will not cause what was installed before to be rolled back.
*   [Run] is processed, except for entries with the postinstall flag, which get processed after the _Setup Completed_ wizard page is shown.
*   If [RestartApplications] was set to yes, Setup restarts closed applications which support being restarted.
*   If [ChangesAssociations] was set to yes or to a [boolean expression] evaluating to True, file associations are refreshed now.
*   If [ChangesEnvironment] was set to yes or to a [boolean expression] evaluating to True, other applications are notified at this point.

All entries are processed by the installer in the order they appear in a section.

Changes are undone by the uninstaller in the _opposite_ order in which the installer made them. This is because the uninstall log is parsed from end to beginning.

In this example:

    [INI]
    Filename: "{win}\MYPROG.INI"; Section: "InstallSettings"; Flags: uninsdeletesectionifempty
    Filename: "{win}\MYPROG.INI"; Section: "InstallSettings"; Key: "InstallPath"; String: "{app}"; Flags: uninsdeleteentry

the installer will first record the data for first entry's uninsdeletesectionifempty flag in the uninstall log, create the key of the second entry, and then record the data for the uninsdeleteentry flag in the uninstall log. When the program is uninstalled, the uninstaller will first process the uninsdeleteentry flag, deleting the entry, and then the uninsdeletesectionifempty flag, deleting the section.

Note that the uninstaller processes [UninstallRun] and [UninstallDelete] entries in the same order they appear in the script (not in reverse order).  Unsafe Files 

Unsafe Files
------------

As a convenience to new users who are unfamiliar with which files they should and should not distribute, the compiler will display an error message if one attempts to install certain "unsafe" files using the [[Files] section]. These files are listed below.

(Note: It is possible to disable the error message by using a certain flag on the [Files] section entry, but this is NOT recommended.)

**Any DLL file from own Windows System directory**

You should not deploy any DLLs out of your own Windows System directory to {sys} because most of them are tailored for your own specific version of Windows, and will not work when installed on other versions. Often times a user's system will be **rendered unbootable** if you install a DLL from a different version of Windows. Another reason why it's a bad idea is that when you install programs on your computer, the DLLs may be replaced with different/incompatible versions without your knowledge. This could lead to unexpected and difficult-to-trace problems on users' systems when you build new installations.

Instead of deploying the DLLs from your Windows System directory, you should find versions that are specifically deemed "redistributable". Redistributable DLLs typically work on more than one version of Windows. To find redistributable versions of the Visual Basic and Visual C++ run-time DLLs, see the Inno Setup FAQ.

If you have a DLL residing in the Windows System directory that you are **absolutely sure** is redistributable, copy it to your script's source directory and deploy it from there instead.

**ADVAPI32.DLL, COMDLG32.DLL, GDI32.DLL, KERNEL32.DLL, RICHED32.DLL, SHELL32.DLL, USER32.DLL, UXTHEME.DLL**

These are all core components of Windows and must never be deployed with an installation. Users may only get new versions of these DLLs by installing a new version of Windows or a service pack or hotfix for Windows.

_(Special case)_ **COMCAT.DLL, MSVBVM50.DLL, MSVBVM60.DLL, OLEAUT32.DLL, OLEPRO32.DLL, STDOLE2.TLB**

If DestDir is set to a location _other_ than {sys} and the regserver or regtypelib flag is used, then the above files will be considered "unsafe". These files must never be deployed to and registered in a directory other than {sys} because doing so can potentially cause _all_ programs on the system to use them in favor of the files in {sys}. Problems would result if your copies of the files are older than the ones in {sys}. Also, if your copies of the files were removed, other applications would break.

**COMCTL32.DLL**

Microsoft does not allow separate redistribution of COMCTL32.DLL (and for good reason - the file differs between platforms), so you should never place COMCTL32.DLL in a script's [Files] section. You can however direct your users to [download the COMCTL32 update from Microsoft](http://www.microsoft.com/downloads/details.aspx?FamilyID=cb2cf3a2-8025-4e8f-8511-9b476a8d35d2&DisplayLang=en "http://www.microsoft.com/downloads/details.aspx?FamilyID=cb2cf3a2-8025-4e8f-8511-9b476a8d35d2&DisplayLang=en"), or distribute the COMCTL32 update along with your program.

**SHDOCVW.DLL, SHLWAPI.DLL, URLMON.DLL, WININET.DLL**

These are core components of Internet Explorer and are also used by Windows Explorer. Replacing them may prevent Explorer from starting. If your application depends on these DLLs, or a recent version of them, then your users will need to install a recent version of Internet Explorer to get them.

**MSCOREE.DLL**

This file is part of the Microsoft .NET Framework. You cannot safely install or update the .NET Framework by including this file with your installation. Call or direct your users to dotnetfx.exe instead.  Command Line Compiler Execution 

Command Line Compiler Execution
-------------------------------

*   You can compile scripts from the command line using the console-mode compiler, ISCC.exe. Command line usage is as follows:
    
        iscc _[options]_ _<script-name>_
        
    Or to read from standard input:
    
        iscc _[options]_ -
        
    Example:
    
        iscc "c:\isetup\samples\my script.iss"
    
    As shown in the example above, filenames that include spaces must be enclosed in quotes.
    
    Valid options are: "/O-" to disable output (overriding any Output setting in the script), "/O+" to enable output (overriding any Output setting in the script), "/O" to specify an output path (overriding any OutputDir setting in the script), "/F" to specify an output filename (overriding any OutputBaseFilename setting in the script), "/S" to specify a Sign Tool (any Sign Tools configured using the Compiler IDE will be specified automatically), "/Q[p]" for quiet compile (print only error messages, "p" will show progress info), and "/?" to show a help screen.
    
    Example:
    
        iscc /Qp /O"My Output" /F"MyProgram-1.0" /Sbyparam=$p "c:\isetup\samples\my script.iss"
    
    ISCC will return an exit code of 0 if the compile was successful, 1 if the command line parameters were invalid or an internal error occurred, or 2 if the compile failed.
    
*   Alternatively, scripts can also be compiled by the Compiler IDE from the command line. Command line usage is as follows:
    
        compil32 /cc _<script-name>_
    
    Example:
    
        compil32 /cc "c:\isetup\samples\my script.iss"
    
    As shown in the example above, filenames that include spaces must be enclosed in quotes.
    
    Running the Compiler IDE from the command line does not suppress the normal progress display or any error messages. The Compiler IDE will return an exit code of 0 if the compile was successful, 1 if the command line parameters were invalid, or 2 if the compile failed.
    
*   The Setup Script Wizard can be started from the command line. Command line usage is as follows:
    
        compil32 /wizard _<wizard name> <script-name>_
    
    Example:
    
        compil32 /wizard "MyProg Script Wizard" "c:\temp.iss"
    
    As shown in the example above, wizard names and filenames that include spaces must be enclosed in quotes.
    
    Running the wizard from the command line does not suppress any error messages. The Setup Script Wizard will return an exit code of 0 if there was no error and additionally it will save the generated script file to the specified filename, 1 if the command line parameters were invalid, or 2 if the generated script file could not be saved. If the user cancelled the Setup Script Wizard, an exit code of 0 is returned and no script file is saved.  Setup Command Line Parameters 

Setup Command Line Parameters
-----------------------------

The Setup program accepts optional command line parameters. These can be useful to system administrators, and to other programs calling the Setup program.

*   **/HELP, /?**

    Shows a summary of this information. Ignored if the UseSetupLdr [Setup] section directive was set to no.

*   **/SP-**

    Disables the _This will install... Do you wish to continue?_ prompt at the beginning of Setup. Of course, this will have no effect if the DisableStartupPrompt [Setup] section directive was set to yes.

*   **/SILENT, /VERYSILENT**

    Instructs Setup to be silent or very silent. When Setup is silent the wizard and the background window are not displayed but the installation progress window is. When a setup is very silent this installation progress window is not displayed. Everything else is normal so for example error messages during installation are displayed and the startup prompt is (if you haven't disabled it with DisableStartupPrompt or the '/SP-' command line option explained above).

    If a restart is necessary and the '/NORESTART' command isn't used (see below) and Setup is silent, it will display a _Reboot now?_ message box. If it's very silent it will reboot without asking.

*   **/SUPPRESSMSGBOXES**

    Instructs Setup to suppress message boxes. Only has an effect when combined with '/SILENT' or '/VERYSILENT'.

    The default response in situations where there's a choice is:

    *   Yes in a 'Keep newer file?' situation.
    *   No in a 'File exists, confirm overwrite.' situation.
    *   Abort in Abort/Retry situations.
    *   Cancel in Retry/Cancel situations.
    *   Yes (=continue) in a DiskSpaceWarning/DirExists/DirDoesntExist/NoUninstallWarning/ExitSetupMessage/ConfirmUninstall situation.
    *   Yes (=restart) in a FinishedRestartMessage/UninstalledAndNeedsRestart situation.
    *   The recommended choice in a PrivilegesRequiredOverridesAllowed=dialog situation.

    5 message boxes are not suppressible:

    *   The About Setup message box.
    *   The Exit Setup? message box.
    *   The FileNotInDir2 message box displayed when Setup requires a new disk to be inserted and the disk was not found.
    *   Any (error) message box displayed before Setup (or Uninstall) could read the command line parameters.
    *   Any task dialog or message box displayed by [Code] support functions TaskDialogMsgBox and MsgBox.

*   **/ALLUSERS**

    Instructs Setup to install in [administrative install] mode. Only has an effect when the [Setup] section directive [PrivilegesRequiredOverridesAllowed] allows the commandline override.

*   **/CURRENTUSER**

    Instructs Setup to install in [non administrative install] mode. Only has an effect when the [Setup] section directive [PrivilegesRequiredOverridesAllowed] allows the commandline override.

*   **/LOG**

    Causes Setup to create a log file in the user's TEMP directory detailing file installation and [Run] actions taken during the installation process. This can be a helpful debugging aid. For example, if you suspect a file isn't being replaced when you believe it should be (or vice versa), the log file will tell you if the file was really skipped, and why.

    The log file is created with a unique name based on the current date. (It will not overwrite or append to existing files.)

    The information contained in the log file is technical in nature and therefore not intended to be understandable by end users. Nor is it designed to be machine-parsable; the format of the file is subject to change without notice.

*   **/LOG="_filename_"**

    Same as /LOG, except it allows you to specify a fixed path/filename to use for the log file. If a file with the specified name already exists it will be overwritten. If the file cannot be created, Setup will abort with an error message.

*   **/NOCANCEL**

    Prevents the user from cancelling during the installation process, by disabling the Cancel button and ignoring clicks on the close button. Useful along with '/SILENT' or '/VERYSILENT'.

*   **/NORESTART**

    Prevents Setup from restarting the system following a successful installation, or after a _Preparing to Install_ failure that requests a restart. Typically used along with /SILENT or /VERYSILENT.

*   **/RESTARTEXITCODE=_exit code_**

    Specifies a custom exit code that Setup is to return when the system needs to be restarted following a successful installation. (By default, 0 is returned in this case.) Typically used along with /NORESTART. See also: [Setup Exit Codes]

*   **/CLOSEAPPLICATIONS**

    Instructs Setup to close applications using files that need to be updated by Setup if possible.

*   **/NOCLOSEAPPLICATIONS**

    Prevents Setup from closing applications using files that need to be updated by Setup. If /CLOSEAPPLICATIONS was also used, this command line parameter is ignored.

*   **/FORCECLOSEAPPLICATIONS**

    Instructs Setup to force close when closing applications.

*   **/NOFORCECLOSEAPPLICATIONS**

    Prevents Setup from force closing when closing applications. If /FORCECLOSEAPPLICATIONS was also used, this command line parameter is ignored.

*   **/LOGCLOSEAPPLICATIONS**

    Instructs Setup to create extra logging when closing applications for debugging purposes.

*   **/RESTARTAPPLICATIONS**

    Instructs Setup to restart applications if possible.

*   **/NORESTARTAPPLICATIONS**

    Prevents Setup from restarting applications. If /RESTARTAPPLICATIONS was also used, this command line parameter is ignored.

*   **/LOADINF="_filename_"**

    Instructs Setup to load the settings from the specified file after having checked the command line. This file can be prepared using the '/SAVEINF=' command as explained below.

    Don't forget to use quotes if the filename contains spaces.

*   **/SAVEINF="_filename_"**

    Instructs Setup to save installation settings to the specified file.

    Don't forget to use quotes if the filename contains spaces.

*   **/LANG=_language_**

    Specifies the language to use. _language_ specifies the internal name of the language as specified in a [Languages] section entry.

    When a valid /LANG parameter is used, the _Select Language_ dialog will be suppressed.

*   **/DIR="_x_:_dirname_"**

    Overrides the default directory name displayed on the _Select Destination Location_ wizard page. A fully qualified pathname must be specified. May include an "expand:" prefix which instructs Setup to expand any constants in the name. For example: 

        /DIR=expand:{autopf}\My Program

*   **/GROUP="_folder name_"**

    Overrides the default folder name displayed on the _Select Start Menu Folder_ wizard page. May include an "expand:" prefix, see '/DIR='. If the [Setup] section directive DisableProgramGroupPage was set to yes, this command line parameter is ignored.

*   **/NOICONS**

    Instructs Setup to initially check the _Don't create a Start Menu folder_ check box on the _Select Start Menu Folder_ wizard page.

*   **/TYPE=_type name_**

    Overrides the default [setup type].

    If the specified type exists and isn't a custom type, then any /COMPONENTS parameter will be ignored.

*   **/COMPONENTS="_comma separated list of component names_"**

    Overrides the default [component] settings. Using this command line parameter causes Setup to automatically select a custom type. If no custom type is defined, this parameter is ignored.

    Only the specified components will be selected; the rest will be deselected.

    If a component name is prefixed with a * character, any child components will be selected as well (except for those that include the dontinheritcheck flag). If a component name is prefixed with a "!" character, the component will be deselected.

    This parameter does not change the state of components that include the fixed flag.

    Example:

    Deselect all components, then select the "help" and "plugins" components:  

        /COMPONENTS="help,plugins"

    Example:

    Deselect all components, then select a parent component and all of its children with the exception of one:  

        /COMPONENTS="*parent,!parent\child"

*   **/TASKS="_comma separated list of task names_"**

    Specifies a list of [tasks] that should be initially selected.

    Only the specified tasks will be selected; the rest will be deselected. Use the /MERGETASKS parameter instead if you want to keep the default set of tasks and only select/deselect some of them.

    If a task name is prefixed with a * character, any child tasks will be selected as well (except for those that include the dontinheritcheck flag). If a task name is prefixed with a "!" character, the task will be deselected.

    Example:

    Deselect all tasks, then select the "desktopicon" and "fileassoc" tasks:  

        /TASKS="desktopicon,fileassoc"

    Example:

    Deselect all tasks, then select a parent task and all of its children with the exception of one:  

        /TASKS="*parent,!parent\child"

*   **/MERGETASKS="_comma separated list of task names_"**

    Like the /TASKS parameter, except the specified tasks will be merged with the set of tasks that would have otherwise been selected by default.

    If [UsePreviousTasks] is set to yes, the specified tasks will be selected/deselected after any previous tasks are restored.

    Example:

    Keep the default set of selected tasks, but additionally select the "desktopicon" and "fileassoc" tasks:  

        /MERGETASKS="desktopicon,fileassoc"

    Example:

    Keep the default set of selected tasks, but deselect the "desktopicon" task:  

        /MERGETASKS="!desktopicon"

*   **/PASSWORD=_password_**

    Specifies the password to use. If the [Setup] section directive Password was not set, this command line parameter is ignored.

    When an invalid password is specified, this command line parameter is also ignored.  Uninstaller Command Line Parameters 

Uninstaller Command Line Parameters
-----------------------------------

The uninstaller program (unins???.exe) accepts optional command line parameters. These can be useful to system administrators, and to other programs calling the uninstaller program.

*   **/SILENT, /VERYSILENT**

    When specified, the uninstaller will not ask the user for startup confirmation or display a message stating that uninstall is complete. Shared files that are no longer in use are deleted automatically without prompting. Any critical error messages will still be shown on the screen. When '/VERYSILENT' is specified, the uninstallation progress window is not displayed.

    If a restart is necessary and the '/NORESTART' command isn't used (see below) and '/VERYSILENT' is specified, the uninstaller will reboot without asking.

*   **/SUPPRESSMSGBOXES**

    Instructs the uninstaller to suppress message boxes. Only has an effect when combined with '/SILENT' and '/VERYSILENT'. See '/SUPPRESSMSGBOXES' under [Setup Command Line Parameters] for more details.

*   **/LOG**

    Causes Uninstall to create a log file in the user's TEMP directory detailing file uninstallation and [UninstallRun] actions taken during the uninstallation process. This can be a helpful debugging aid.

    The log file is created with a unique name based on the current date. (It will not overwrite or append to existing files.)

    The information contained in the log file is technical in nature and therefore not intended to be understandable by end users. Nor is it designed to be machine-parsable; the format of the file is subject to change without notice.

*   **/LOG="_filename_"**

    Same as /LOG, except it allows you to specify a fixed path/filename to use for the log file. If a file with the specified name already exists it will be overwritten. If the file cannot be created, Uninstall will abort with an error message.

*   **/NORESTART**

    Instructs the uninstaller not to reboot even if it's necessary.  Setup Exit Codes 

Setup Exit Codes
----------------

Beginning with Inno Setup 3.0.3, the Setup program may return one of the following exit codes:

*   **0**

    Setup was successfully run to completion or the /HELP or /? command line parameter was used.

*   **1**

    Setup failed to initialize.

*   **2**

    The user clicked Cancel in the wizard before the actual installation started, or chose "No" on the opening "This will install..." message box.

*   **3**

    A fatal error occurred while preparing to move to the next installation phase (for example, from displaying the pre-installation wizard pages to the actual installation process). This should never happen except under the most unusual of circumstances, such as running out of memory or Windows resources.

*   **4**

    A fatal error occurred during the actual installation process.

    _Note:_ Errors that cause an Abort-Retry-Ignore box to be displayed are not fatal errors. If the user chooses _Abort_ at such a message box, exit code 5 will be returned.

*   **5**

    The user clicked Cancel during the actual installation process, or chose _Abort_ at an Abort-Retry-Ignore box.

*   **6**

    The Setup process was forcefully terminated by the debugger (_Run | Terminate_ was used in the Compiler IDE).

*   **7**

    The [_Preparing to Install_] stage determined that Setup cannot proceed with installation. _(First introduced in Inno Setup 5.4.1.)_

*   **8**

    The [_Preparing to Install_] stage determined that Setup cannot proceed with installation, and that the system needs to be restarted in order to correct the problem. _(First introduced in Inno Setup 5.4.1.)_

Before returning an exit code of 1, 3, 4, 7, or 8, an error message explaining the problem will normally be displayed.

Future versions of Inno Setup may return additional exit codes, so applications checking the exit code should be programmed to handle unexpected exit codes gracefully. Any non-zero exit code indicates that Setup was not run to completion.  Uninstaller Exit Codes 

Uninstaller Exit Codes
----------------------

Beginning with Inno Setup 4.0.8, the uninstaller will return a non-zero exit code if the user cancels or a fatal error is encountered. Programs checking the exit code to detect failure should not check for a specific non-zero value; any non-zero exit code indicates that the uninstaller was not run to completion.

Note that at the moment you get an exit code back from the uninstaller, some code related to uninstallation might still be running. Because Windows doesn't allow programs to delete their own EXEs, the uninstaller creates and spawns a copy of itself in the TEMP directory. This "clone" performs the actual uninstallation, and at the end, terminates the original uninstaller EXE (at which point you get an exit code back), deletes it, then displays the "uninstall complete" message box (if it hasn't been suppressed with /SILENT or /VERYSILENT).  Compiler IDE Keyboard Commands 

Compiler IDE Keyboard Commands
------------------------------

Besides the keyboard commands listed in the menus, the Compiler IDE supports the following additional keyboard commands:

| Indent block.                                  | Tab                           |
| Unindent block.                                | Shift+Tab                     |
| Delete to start of word.                       | Ctrl+Backspace                |
| Delete to end of word.                         | Ctrl+Delete                   |
| Delete to start of line.                       | Ctrl+Shift+Backspace          |
| Delete to end of line.                         | Ctrl+Shift+Delete             |
| Go to start of document.                       |                               |
| -- Shift extends selection.                    | Ctrl+Home                     |
| Go to start of line.                           | Alt+Home                      |
| Go to end of document.                         |                               |
| -- Shift extends selection.                    | Ctrl+End                      |
| Go to end of line.                             | Alt+End                       |
| Scroll up.                                     | Ctrl+Up                       |
| Scroll down.                                   | Ctrl+Down                     |
| Cut line.                                      | Ctrl+L                        |
| Copy line.                                     | Ctrl+Shift+T                  |
| Delete line.                                   | Ctrl+Shift+L                  |
| Switch line with previous.                     | Ctrl+T                        |
| Duplicate selection or line.                   | Ctrl+D                        |
| Go to previous paragraph.                      |                               |
| -- Shift extends selection.                    | Ctrl+[                        |
| Go to next paragraph.                          |                               |
| -- Shift extends selection.                    | Ctrl+]                        |
| Go to previous word.                           |                               |
| -- Shift extends selection.                    | Ctrl+Left                     |
| Go to next word.                               |                               |
| -- Shift extends selection.                    | Ctrl+Right                    |
| Go to previous word part.                      |                               |
| -- Shift extends selection.                    | Ctrl+/                        |
| Go to next word part.                          |                               |
| -- Shift extends selection.                    | Ctrl+\                        |
| Rectangular block selection.                   | Alt+Shift+Movement            |
| Extend rectangular selection to start of line. | Alt+Shift+Home                |
| Extend rectangular selection to end of line.   | Alt+Shift+End                 |
| Complete word.                                 | Ctrl+Space or Alt+Right       |
| Fillup complete word.                          | Space (for ISPP directives)   |
|                                                | or \ (for constants)          |
|                                                | or : (for constants           |
|                                                | and section parameters)       |
|                                                | or ] (for sections)           |
|                                                | or = (for section directives) |
|                                                | or Tab or Enter.              |
| Cancel complete word.                          | Esc                           |


Miscellaneous Notes
-------------------

*   To easily auto update your application, first make your application somehow detect a new version of your Setup.exe and make it locate or download this new version. Then, to auto update, start your Setup.exe from your application with for example the following command line:
    
        /SP- /silent /noicons "/dir=expand:{autopf}\My Program"
    
    After starting setup.exe, exit your application as soon as possible. Note that to avoid problems with updating your .exe, Setup has an auto retry feature.
    
    Optionally you could also use the skipifsilent and skipifnotsilent flags and make your application aware of a '/updated' parameter to for example show a nice message box to inform the user that the update has completed.
    
*   Inno Setup's own installers accept an additional /PORTABLE=1 command line parameter to enable portable mode which causes the installers to install to the desktop by default and to not create an uninstaller nor an entry in the Add/Remove Programs Control Panel applet. For example:
    
        /portable=1 /silent /currentuser
    
*   The Inno Setup backup domain can be found at [www.innosetup.nl](https://www.innosetup.nl/ "https://www.innosetup.nl/"). There's currently no website active on this domain but in case of emergencies it will be activated.  Example Scripts 

Example Scripts
---------------

The Inno Setup Example Scripts are located in a separate folder. Please click the "Inno Setup Example Scripts" shortcut created in the Start Menu when you installed Inno Setup, or open the "Examples" folder in your Inno Setup directory.  Frequently Asked Questions 

Frequently Asked Questions
--------------------------

The Frequently Asked Questions is now located in a separate document. Please click the "Inno Setup FAQ" shortcut created in the Start Menu when you installed Inno Setup, or open the "isfaq.url" file in your Inno Setup directory.

For the most recent Frequently Asked Questions, go to [https://jrsoftware.org/isfaq.php](https://jrsoftware.org/isfaq.php "https://jrsoftware.org/isfaq.php")  Contributers 

Contributers
------------

Inno Setup was created by Jordan Russell and is currently maintained by Martijn Laan (since 5.4.3, released in 2011).

The following is a list of those who have contributed significant code to the Inno Setup project, or otherwise deserve special recognition:

*   Jean-loup Gailly & Mark Adler: Creators of the [zlib](http://www.zlib.net/ "http://www.zlib.net/") compression library that Inno Setup uses.
*   Julian Seward: Creator of the [bzlib](http://www.bzip.org/ "http://www.bzip.org/") compression library that Inno Setup uses.
*   Igor Pavlov: Creator of the [LZMA](http://www.7-zip.org/sdk.html "http://www.7-zip.org/sdk.html") compression library that Inno Setup uses.
*   Vince Valenti: Most of the code for the "Window" [Setup] section directives (1.12.4).
*   Joe White: Code for ChangesAssociations [Setup] section directive (1.2).
*   Jason Olsen: Most of the code for [appending to existing uninstall logs] (1.3).
*   Martijn Laan: Rich Edit 2.0 & URL detection support (1.3.13); Silent uninstallation (1.3.25); System image list support in drive and directory lists (1.3.25); Silent installation (2.0); The [Types], [Components] and [Tasks] sections (2.0); The postinstall flag (2.0); The [Code] section (4.0); Subcomponents and subtasks support (4.0); Many other features after 4.0.
*   Alex Yackimoff: Portions of [TNewCheckListBox] (4.0); ISPP (5.4.1).
*   Carlo Kok: [RemObjects Pascal Script](http://www.remobjects.com/ps "http://www.remobjects.com/ps") (4.0).
*   Creators of SynEdit: The syntax-highlighting editor used in the Compiler IDE (2.0 - 5.2.4).
*   Creators of UniSynEdit: The syntax-highlighting editor used in the Compiler IDE (5.3 - 5.3.11).
*   Creators of [Scintilla](http://www.scintilla.org/ "http://www.scintilla.org/"): The syntax-highlighting editor used in the Compiler IDE (5.4).
*   Zaher Dirkey: Initial work on improved right-to-left languages support (5.2.3).
*   Evgeny Karpov of RemObjects Software: Initial work on Unicode support (5.3).
*   Motaz Alnuweiri: 128x128 and 256x256 sizes of the Compiler IDE and document icons (5.5.3).
*   DRON: Code for the improved image stretching (5.6).
*   Sherlock Software: Most of the code for the CreateCallback support function (6.0).
*   Vizit0r: Code for the "Debug Call Stack" view (6.0.3).
*   Cristoph Nahr: Code for the .NET version detection (6.0.4).
*   Sergii Leonov: Code for the Compiler IDE's MessageBox Designer (6.1.0).

Special thanks to everyone answering questions on the forum and on Stack Overflow, especially: Gavin Lambert, Deanna Hants, Jernej Simončič, Martin Prikryl and TLama.  What is Inno Setup? 


/Inno Setup Preprocessor
========================
https://jrsoftware.org/ispphelp/contents.htm



- [Inno Setup Preprocessor]
    - [Introduction]
    - [Directives Reference]
    - [Support Functions Reference]
    - [User Defined Functions]
    - [Expression Syntax]
    - [Predefined Variables]
    - [Line Spanning]
- [Other Information]
    - [Visibility of Identifiers]
    - [Example Script]
    - [ISPPBuiltins.iss]
    - [Extended Command Line Compiler]

Inno Setup Preprocessor: Current preprocessor output

Current preprocessor output refers to the preprocessor output up to the line which ISPP is currently processing.

Inno Setup Preprocessor: Preprocessor output

Preprocessor output refers to the preprocessed version of the script.


[Introduction]: https://jrsoftware.org/ispphelp/topic_isppoverview.htm
[Directives Reference]: https://jrsoftware.org/ispphelp/topic_directives.htm
[Support Functions Reference]: https://jrsoftware.org/ispphelp/topic_funcs.htm
[User Defined Functions]: https://jrsoftware.org/ispphelp/topic_macros.htm
[Expression Syntax]: https://jrsoftware.org/ispphelp/topic_expressions.htm
[Predefined Variables]: https://jrsoftware.org/ispphelp/topic_predefinedvars.htm
[Line Spanning]: https://jrsoftware.org/ispphelp/topic_linespan.htm
[Visibility of Identifiers]: https://jrsoftware.org/ispphelp/topic_visibility.htm
[Example Script]: https://jrsoftware.org/ispphelp/topic_example.htm
[ISPPBuiltins.iss]: https://jrsoftware.org/ispphelp/topic_builtinsiss.htm
[Extended Command Line Compiler]: https://jrsoftware.org/ispphelp/topic_isppcc.htm

[emit]: https://jrsoftware.org/ispphelp/topic_emit.htm
[#define]: https://jrsoftware.org/ispphelp/topic_define.htm
[#dim, #redim]: https://jrsoftware.org/ispphelp/topic_dim.htm
[#undef]: https://jrsoftware.org/ispphelp/topic_undef.htm
[#include]: https://jrsoftware.org/ispphelp/topic_include.htm
[#file]: https://jrsoftware.org/ispphelp/topic_file.htm
[#emit]: https://jrsoftware.org/ispphelp/topic_emit.htm
[#expr]: https://jrsoftware.org/ispphelp/topic_expr.htm
[#insert]: https://jrsoftware.org/ispphelp/topic_insert.htm
[#append]: https://jrsoftware.org/ispphelp/topic_append.htm
[#if, #elif, #else, #endif]: https://jrsoftware.org/ispphelp/topic_if.htm
[#ifdef, #ifndef, #ifexist, #ifnexist]: https://jrsoftware.org/ispphelp/topic_ifdef.htm
[#for]: https://jrsoftware.org/ispphelp/topic_for.htm
[#sub, #endsub]: https://jrsoftware.org/ispphelp/topic_sub.htm
[#pragma]: https://jrsoftware.org/ispphelp/topic_pragma.htm
[#error]: https://jrsoftware.org/ispphelp/topic_error.htm
[define]: https://jrsoftware.org/ispphelp/topic_define.htm
[pragma]: https://jrsoftware.org/ispphelp/topic_pragma.htm
[ifdef]: https://jrsoftware.org/ispphelp/topic_ifdef.htm
[include]: https://jrsoftware.org/ispphelp/topic_include.htm
[file]: https://jrsoftware.org/ispphelp/topic_file.htm

[GetVersionNumbersString]: https://jrsoftware.org/ispphelp/topic_getversionnumbersstring.htm
[GetStringFileInfo]: https://jrsoftware.org/ispphelp/topic_getstringfileinfo.htm
[Int]: https://jrsoftware.org/ispphelp/topic_int.htm
[Str]: https://jrsoftware.org/ispphelp/topic_str.htm
[FileExists]: https://jrsoftware.org/ispphelp/topic_fileexists.htm
[DirExists]: https://jrsoftware.org/ispphelp/topic_direxists.htm
[ForceDirectories]: https://jrsoftware.org/ispphelp/topic_forcedirectories.htm
[FileSize]: https://jrsoftware.org/ispphelp/topic_filesize.htm
[ReadIni]: https://jrsoftware.org/ispphelp/topic_readini.htm
[WriteIni]: https://jrsoftware.org/ispphelp/topic_writeini.htm
[ReadReg]: https://jrsoftware.org/ispphelp/topic_readreg.htm
[Exec]: https://jrsoftware.org/ispphelp/topic_exec.htm
[Copy]: https://jrsoftware.org/ispphelp/topic_copy.htm
[Pos]: https://jrsoftware.org/ispphelp/topic_pos.htm
[RPos]: https://jrsoftware.org/ispphelp/topic_rpos.htm
[Len]: https://jrsoftware.org/ispphelp/topic_len.htm
[SaveToFile]: https://jrsoftware.org/ispphelp/topic_savetofile.htm
[Find]: https://jrsoftware.org/ispphelp/topic_find.htm
[SetupSetting]: https://jrsoftware.org/ispphelp/topic_setupsetting.htm
[SetSetupSetting]: https://jrsoftware.org/ispphelp/topic_setsetupsetting.htm
[LowerCase]: https://jrsoftware.org/ispphelp/topic_lowercase.htm
[UpperCase]: https://jrsoftware.org/ispphelp/topic_uppercase.htm
[EntryCount]: https://jrsoftware.org/ispphelp/topic_entrycount.htm
[GetEnv]: https://jrsoftware.org/ispphelp/topic_getenv.htm
[DeleteFile]: https://jrsoftware.org/ispphelp/topic_deletefile.htm
[DeleteFileNow]: https://jrsoftware.org/ispphelp/topic_deletefilenow.htm
[CopyFile]: https://jrsoftware.org/ispphelp/topic_copyfile.htm
[FindFirst]: https://jrsoftware.org/ispphelp/topic_findfirst.htm
[FindNext]: https://jrsoftware.org/ispphelp/topic_findnext.htm
[FindClose]: https://jrsoftware.org/ispphelp/topic_findclose.htm
[FindGetFileName]: https://jrsoftware.org/ispphelp/topic_findgetfilename.htm
[FileOpen]: https://jrsoftware.org/ispphelp/topic_fileopen.htm
[FileRead]: https://jrsoftware.org/ispphelp/topic_fileread.htm
[FileReset]: https://jrsoftware.org/ispphelp/topic_filereset.htm
[FileEof]: https://jrsoftware.org/ispphelp/topic_fileeof.htm
[FileClose]: https://jrsoftware.org/ispphelp/topic_fileclose.htm
[SaveStringToFile]: https://jrsoftware.org/ispphelp/topic_savestringtofile.htm
[GetDateTimeString]: https://jrsoftware.org/ispphelp/topic_getdatetimestring.htm
[GetFileDateTimeString]: https://jrsoftware.org/ispphelp/topic_getfiledatetimestring.htm
[GetMD5OfString]: https://jrsoftware.org/ispphelp/topic_getmd5ofstring.htm
[GetMD5OfUnicodeString]: https://jrsoftware.org/ispphelp/topic_getmd5ofunicodestring.htm
[GetMD5OfFile]: https://jrsoftware.org/ispphelp/topic_getmd5offile.htm
[GetSHA1OfString]: https://jrsoftware.org/ispphelp/topic_getsha1ofstring.htm
[GetSHA1OfUnicodeString]: https://jrsoftware.org/ispphelp/topic_getsha1ofunicodestring.htm
[GetSHA1OfFile]: https://jrsoftware.org/ispphelp/topic_getsha1offile.htm
[Trim]: https://jrsoftware.org/ispphelp/topic_trim.htm
[StringChange]: https://jrsoftware.org/ispphelp/topic_stringchange.htm
[IsWin64]: https://jrsoftware.org/ispphelp/topic_iswin64.htm
[Defined]: https://jrsoftware.org/ispphelp/topic_defined.htm
[TypeOf]: https://jrsoftware.org/ispphelp/topic_typeof.htm
[DimOf]: https://jrsoftware.org/ispphelp/topic_dimof.htm
[GetVersionNumbers]: https://jrsoftware.org/ispphelp/topic_getversionnumbers.htm
[GetVersionComponents]: https://jrsoftware.org/ispphelp/topic_getversioncomponents.htm
[GetPackedVersion]: https://jrsoftware.org/ispphelp/topic_getpackedversion.htm
[PackVersionNumbers]: https://jrsoftware.org/ispphelp/topic_packversionnumbers.htm
[PackVersionComponents]: https://jrsoftware.org/ispphelp/topic_packversioncomponents.htm
[ComparePackedVersion]: https://jrsoftware.org/ispphelp/topic_comparepackedversion.htm
[SamePackedVersion]: https://jrsoftware.org/ispphelp/topic_samepackedversion.htm
[UnpackVersionNumbers]: https://jrsoftware.org/ispphelp/topic_unpackversionnumbers.htm
[UnpackVersionComponents]: https://jrsoftware.org/ispphelp/topic_unpackversioncomponents.htm
[VersionToStr]: https://jrsoftware.org/ispphelp/topic_versiontostr.htm
[StrToVersion]: https://jrsoftware.org/ispphelp/topic_strtoversion.htm
[EncodeVer]: https://jrsoftware.org/ispphelp/topic_encodever.htm
[DecodeVer]: https://jrsoftware.org/ispphelp/topic_decodever.htm
[FindSection]: https://jrsoftware.org/ispphelp/topic_findsection.htm
[FindSectionEnd]: https://jrsoftware.org/ispphelp/topic_findsectionend.htm
[FindCode]: https://jrsoftware.org/ispphelp/topic_findcode.htm
[ExtractFilePath]: https://jrsoftware.org/ispphelp/topic_extractfilepath.htm
[ExtractFileDir]: https://jrsoftware.org/ispphelp/topic_extractfiledir.htm
[ExtractFileExt]: https://jrsoftware.org/ispphelp/topic_extractfileext.htm
[ExtractFileName]: https://jrsoftware.org/ispphelp/topic_extractfilename.htm
[ChangeFileExt]: https://jrsoftware.org/ispphelp/topic_changefileext.htm
[RemoveFileExt]: https://jrsoftware.org/ispphelp/topic_removefileext.htm
[AddBackslash]: https://jrsoftware.org/ispphelp/topic_addbackslash.htm
[RemoveBackslash]: https://jrsoftware.org/ispphelp/topic_removebackslash.htm
[Delete]: https://jrsoftware.org/ispphelp/topic_delete.htm
[Insert]: https://jrsoftware.org/ispphelp/topic_insert2.htm
[YesNo]: https://jrsoftware.org/ispphelp/topic_yesno.htm
[Power]: https://jrsoftware.org/ispphelp/topic_power.htm
[Min]: https://jrsoftware.org/ispphelp/topic_min.htm
[Max]: https://jrsoftware.org/ispphelp/topic_max.htm
[SameText]: https://jrsoftware.org/ispphelp/topic_sametext.htm
[SameStr]: https://jrsoftware.org/ispphelp/topic_samestr.htm
[Message]: https://jrsoftware.org/ispphelp/topic_message.htm
[Warning]: https://jrsoftware.org/ispphelp/topic_warning.htm
[Error]: https://jrsoftware.org/ispphelp/topic_error2.htm
[preprocessor output]: https://jrsoftware.org/ispphelp/topic_translation.htm


Inno Setup Preprocessor: Introduction
=====================================

The main purpose of Inno Setup Preprocessor (ISPP) is to automate compile-time tasks and avoid repetition in your scripts. For example, you can declare a compile-time ISPP variable – containing your application name, for instance – and then use its value in several places of your script. If for some reason you need to change the name of your application, you'll have to change it only once in your script. Without ISPP, you would need to change all occurrences of your application name throughout the script.

Another example of using ISPP would be gathering version information from your application at compile-time by reading the version info of an EXE file, and using it in your [AppVerName] [Setup] section directive or anywhere else. Without ISPP, you would have to modify your script each time the version of your application changes.

ISPP can even scan your source folder and generate script lines for the found files. Without ISPP, you would have to manually maintain the list of files.

Conditional in- and exclusion of portions of script is also possible by using ISPP: you can create one single script for different versions/levels of your applications (for example, trial versus fully functional). Without ISPP, you would need multiple scripts.

Finally, ISPP makes it possible to split long lines using a line spanning symbol.

Note: ISPP works exclusively at compile-time, and has no run-time functionality.


Inno Setup Preprocessor: Directives Reference
=============================================

There are two kinds of directives in ISPP: simple and inline.

Simple directives occupy a whole line and begin with the # symbol. For example the following defines a variable called MyAppName:

#define MyAppName "My Program"  

Inline directives appear inside other lines and begin with {# and end with }. For example the following sets Inno Setup's AppName directive to the value of the previously defined variable:

    [Setup]
    AppName={#MyAppName}  

As seen in the above example it is not necessary to specify the name of the [emit] directive when it is used inline, so {#MyAppName} is short for {#emit MyAppName}.

Directive syntax documenting conventions
----------------------------------------

Directive usage syntax uses the following conventions.

    ()          Group of tokens.
    []          Optional token or group of tokens.
    |           Mutually exclusive tokens.
    ...         Previous token or group of tokens can be repeated.
    token       Reserved word or symbol(s). Must be typed exactly as shown.
    <token>     Non-terminal. Its syntax is either shown before, or explained.

Available directives
--------------------

*   [#define]
*   [#dim, #redim]
*   [#undef]
*   [#include]
*   [#file]
*   [#emit]
*   [#expr]
*   [#insert]
*   [#append]
*   [#if, #elif, #else, #endif]
*   [#ifdef, #ifndef, #ifexist, #ifnexist]
*   [#for]
*   [#sub, #dsub]
*   [#pragma]
*   [#error]

Inno Setup Preprocessor: Support Functions Reference
====================================================

There are a number of built-in support functions which you can use to perform compile-time actions and/or change your script. For example the following uses ISPP function [GetVersionNumbersString] to read version info from an EXE and uses the return value of the function to set the [AppVerName] [Setup] section directive using ISPP directive [emit]:

#define MyAppVer GetVersionNumbersString(AddBackslash(SourcePath) + "MyProg.exe")  
      
    [Setup]  
    AppVerName=MyProg version {#MyAppVer}  

Function prototypes documenting conventions
-------------------------------------------

Function prototypes show the function result type, name, and arguments.

Return and argument types int, str, any, and void respectively specify the integer type, the string type, any type, and the null type. The integer type is a signed 64-bit integer. When the null type is specified as a function result type then the function does not return a value.

A question mark (?) after an argument type means that the argument is optional.

Available functions
-------------------

*   [GetStringFileInfo]          *   [GetSHA1OfFile]
*   [Int]                        *   [Trim]
*   [Str]                        *   [StringChange]
*   [FileExists]                 *   [IsWin64]
*   [DirExists]                  *   [Defined]
*   [ForceDirectories]           *   [TypeOf]
*   [FileSize]                   *   [DimOf]
*   [ReadIni]                    *   [GetVersionNumbers]
*   [WriteIni]                   *   [GetVersionComponents]
*   [ReadReg]                    *   [GetVersionNumbersString]
*   [Exec]                       *   [GetPackedVersion]
*   [Copy]                       *   [PackVersionNumbers]
*   [Pos]                        *   [PackVersionComponents]
*   [RPos]                       *   [ComparePackedVersion]
*   [Len]                        *   [SamePackedVersion]
*   [SaveToFile]                 *   [UnpackVersionNumbers]
*   [Find]                       *   [UnpackVersionComponents]
*   [SetupSetting]               *   [VersionToStr]
*   [SetSetupSetting]            *   [StrToVersion]
*   [LowerCase]                  *   [EncodeVer]
*   [UpperCase]                  *   [DecodeVer]
*   [EntryCount]                 *   [FindSection]
*   [GetEnv]                     *   [FindSectionEnd]
*   [DeleteFile]                 *   [FindCode]
*   [DeleteFileNow]              *   [ExtractFilePath]
*   [CopyFile]                   *   [ExtractFileDir]
*   [FindFirst]                  *   [ExtractFileExt]
*   [FindNext]                   *   [ExtractFileName]
*   [FindClose]                  *   [ChangeFileExt]
*   [FindGetFileName]            *   [RemoveFileExt]
*   [FileOpen]                   *   [AddBackslash]
*   [FileRead]                   *   [RemoveBackslash]
*   [FileReset]                  *   [Delete]
*   [FileEof]                    *   [Insert]
*   [FileClose]                  *   [YesNo]
*   [SaveStringToFile]           *   [Power]
*   [GetDateTimeString]          *   [Min]
*   [GetFileDateTimeString]      *   [Max]
*   [GetMD5OfString]             *   [SameText]
*   [GetMD5OfUnicodeString]      *   [SameStr]
*   [GetMD5OfFile]               *   [Message]
*   [GetSHA1OfString]            *   [Warning]
*   [GetSHA1OfUnicodeString]     *   [Error] 

Inno Setup Preprocessor: User Defined Functions
===============================================

You can define user defined functions.

A user defined function declaration consists of a formal parameter list and an expression. That expression is evaluated when the function is called (see below). The result of the function call is the result of the expression. The expression can contain parameter names, they are treated as usual variables.

The formal syntax of a user defined function is provided in [define] and [ISPPBuiltins.iss] contains many example functions.

Please note that there must be no space between the function name and opening parenthesis.

Actual parameters for parameters declared as by-reference must be modifiable l-values (in other words, other defined variables or expressions that evaluate to l-values). If the expression modifies by-reference parameter, the variable that is passed as this parameter gets modified. By-value parameters can also be modified by the expression (using assignment operators), but this modification doesn't affect the value of a variable which could be passed as this parameter.

Though a user defined function can only contain one expression, sequential evaluation operators (comma), assignment operators (simple and compound) and conditional operators (?:) can be used to build more complicated functions.

Local array
-----------

In context of the expression, an additional array named Local is valid. Its elements can be used for temporary storage and reusing values in sequential expressions. Values stored in Local array are neither preserved from call to call (including recursive), nor are they accessible from anywhere except the expression.

    #define DeleteToFirstPeriod(str *S) /* user defined function declaration */ \  
      Local[1] = [Copy](S, 1, (Local[0] = [Pos](".", S)) - 1), \  
      S = Copy(S, Local[0] + 1), \  
      Local[1]

Inno Setup Preprocessor: Expression Syntax
==========================================

ISPP uses C/C++-like expression syntax. It supports simple and compound assignment operators, conditional operator, and sequential evaluation operator. Although ISPP is an interpreter, it does support short circuit boolean evaluation and never evaluates expressions (nor calls any user defined functions mentioned in those expressions) that should not be evaluated due to specific rules (for example, when conditional operator is used, always only 2 out of 3 operands are evaluated).

[ISPPBuiltins.iss] contains many example expressions.

Differences between C and ISPP expression syntax
------------------------------------------------

*   ISPP does not support a number of operators (reference, dereference, namespace resolution, member selection, etc.).
*   ISPP treats an identifier and the equality sign as a name of an argument, if it is used in argument list.
*   Arithmetic division operator (slash) performs integer division, since ISPP does not support floating point math.
*   ISPP does not check for validity of expressions in certain cases. For example, in conditional expression, "true" operand can be of string type, whereas "false" operand can be of integer type.
*   String literals can be quoted by both single and double quotes (in both modes – C-style or Pascal-style). If a literal begins with a single quote, it must also end with a single quote. Double quotes may be used in single quoted string without any escaping, and vice versa. Within a string, the character used to quote the string must be escaped (the manner depends on current state of "Pascal-style string literals" parser option, see [pragma]).

Data types
----------

There are three types in ISPP: void, integer, and string. Variable of void type is declared by just specifying its name after [define] directive without any value. Such variables should be used with [ifdef] directive or [Defined] function.

If "allow undeclared identifiers" parser option is off (the default state, see [pragma]), an error is raised when undefined variable is mentioned. Otherwise, it will be treated as a value of type void.

Void is compatible with integer and string in expressions. For example, you can use addition operator with void and integer operands, in this case void operand will be treated as zero. In conjunction with string, void operand is treated as an empty string.

Comments
--------

Comments may be embedded in an expression by using a slash and an asterisk. For example:

    #emit Var1 /* this is a comment */ + Var2 /* this is also a comment */  

Comments may also be placed at the end of an expression by using a semicolon or two slashes. For example:

    #emit Var1 + Var2 ; this is a comment  
    #emit Var1 + Var2 // this is also comment  

Please note that line spanning feature is triggered before any further processing, so this is also a valid comment:

    #emit Var1 + Var2 ; this is \  
      still a comment  

Comments may also be placed anywhere by starting a line with two slashes. For example:

    // This is a comment  

All of the comments listed above are not included in the [preprocessor output], unlike (non ISPP) comments using a semicolon at the start of a line. For example:

    #emit Var1 + Var2 ; this comment is not included  
    // This comment is not included  
    ; This comment IS included  

Extended User Defined Function Call **Syntax:**------------------------------------

In ISPP, it is possible to use named arguments when calling user defined function. Given the declaration:

    #define MyFunction(int A = 2, int B = 2) A + B  

This function can be called specifying argument names:

    #emit MyFunction(A = 5, B = 10)  
    #emit MyFunction(B = 3)  
    #emit MyFunction(B = 10, A = 5)  

*   If a name is specified for one argument, then all (required) arguments in the list must also be named.
*   The order of named arguments does not matter.
*   Because of this extension, an assignment expression must be enclosed in parentheses, if not using extended call syntax, to avoid ambiguity:
    
        #emit MyFunction((MyVar = 5), 10)  
    
    In the above example, the equality sign is treated as a direct assignment operator.
    
    Although functions do not have named arguments, it is still required to enclose assignment expressions in parentheses when calling those functions.
    
*   By standard rule, comma is used to separate actual parameters. If you need to use sequential evaluation operator, you must include the expression in parentheses:
    
        #emit MyFunction((SaveToFile("script.txt"), 5), 10)  
    
    In the above example, the first comma is treated as the sequential evaluation operator, whereas the second one as the argument delimiter.

Inno Setup Preprocessor: Predefined Variables
=============================================

There are a number of predefined variables provided ISPP:

*  `__COUNTER__`   **int**. 
    Automatically increments each time it is used (afterwards).

*  `__FILE__`   **str**. 
    Returns the name of the current file. Empty string for the root file.

*  `__INCLUDE__`   **str**. 
    Returns the current include path (or paths delimited with semicolons) set via #pragma include.

*  `__LINE__`   **int**. 
    Returns the number of the line in the current file.

*  `__OPT_X__`   **void**. 
    Defined if specified option set via #pragma option -x+ is in effect. In place of "X" may be any letter from "A" to "Z." Use [Defined] function to test whether the variable is defined.

*  `__PATHFILENAME__`   **str**. 
    Similar to __FILE__, but returns the full pathname of the file. Empty string for the root file.

*  `__POPT_X__`   **void**. 
    Defined if specified parser option set via #pragma parseroption -x+ is in effect. In place of "X" may be any letter from "A" to "Z." Use [Defined] function to test whether the variable is defined.

*  `__WIN32__`   **void**. 
    Always defined.

*  `ISPP_INVOKED`   **void**. 
    Always defined.

*  `ISPPCC_INVOKED`   **void**. 
    Defined if compilation was invoked using the console-mode compiler, ISCC.exe.

*  `PREPROCVER`   **int**. 
    Returns the 32-bit encoded version of ISPP. Highest byte holds the major version, lowest byte holds the build number.

*  `WINDOWS`   **void**. 
    Always defined.

*  `UNICODE`   **void**. 
    Always defined.

*  `CompilerPath`   **str**. 
    Points to the directory where the compiler is located.

*  `SourcePath`   **str**. 
    Points to the directory where the current script is located, or the My Documents directory if the script has not yet been saved.

*  `Ver`   **int**. 
    Returns the 32-bit encoded version of Inno Setup compiler. Highest byte holds the major version, lowest byte the minor version.

*  `NewLine`   **str**. 
    Returns the newline character. Declared in [ISPPBuiltins.iss].

*  `Tab`   **str**. 
    Returns the tab character. Declared in [ISPPBuiltins.iss].

Inno Setup Preprocessor: Line Spanning
======================================

By ending lines with ISPP's line spanning symbol preceded with a space, you can split long lines. For example:

    #define MyAppName \  
      "My Program"  

The default line spanning symbol is "\" which can be changed using [pragma].

Inno Setup Preprocessor: Visibility of Identifiers
==================================================

Variables (as well as user defined functions, read "variable or user defined function" anywhere it says "variable" below) can be explicitly defined as "public," "protected," or "private." To define such a variable, its name in its [define] directive should be prepended with one of the visibility keywords:

    #define public MyVar 12  
    #define protected MyVar 13  
    #define private MyVar 14  

In the example above, none of the last two declarations undefine any of the previous, though they share the same identifier (MyVar). This is because they are declared in different visibilities.

Public variables are ordinary variables accessible from anywhere after the point they are declared.

Protected variables are accessible only in the file they are declared in and in files included by that file via [include] or [file] directives. You can basically think of them as public variables which are automatically undefined once their file has finished.

Private variables are accessible only in the file they are declared in. They are not propagated to any other file, be it included or "parent" file.

Since ISPP does not have semantics of pushing and popping variable value, visibility resolution can be useful.

Note that you cannot explicitly refer to a variable in a specific visibility from expressions. Given the example above, if MyVar is mentioned in expression in declaration file, its identifier refers to private MyVar. If it is mentioned in included file, it refers to protected MyVar. If it is mentioned in one of the files above the declaration file on the include stack (i. e. one of the files from which a chain of [include] directives resulted in processing the declaration file), it refers to public MyVar.

Also note, that if we'd swap last two declarations from the above example, private MyVar would become inaccessible (until protected is undefined) because protected would be declared after it and would take precedence. But it wouldn't undefine its private counterpart.

Each file can set a default visibility, the visibility that will be used when no resolution clause is specified in variable declaration. This can be done using [define] directive, for example:

    #define protected  

sets protected visibility by default.

The default visibility isn't used when evaluating expressions, it is only used when a variable is defined or undefined without explicitly specifying its visibility. When default visibility is not set, public is assumed by default. Setting default visibility is not propagated on included or parent files.

In user defined function expressions, avoid using identifiers of lower visibility than the one the user defined function is declared in. This may cause "Undeclared identifier" errors if the user defined function is called from another file.

It is recommended that you use appropriate visibility when declaring variables to avoid problems with unexpected redefinition of a variable (for example in included third-party file). If no included files depend on a variable, declare it as private. If they do, but the parent file doesn't, declare it as protected. Declare it as public otherwise. If you're unsure, then protected visibility is the common case.

Inno Setup Preprocessor: Example Script
=======================================

An example script called _ISPPExample1.iss_ is located in a separate folder. Please click the "Inno Setup Example Scripts" shortcut created in the Start Menu when you installed Inno Setup, or open the "Examples" folder in your Inno Setup directory.

Also see [ISPPBuiltins.iss].

Inno Setup Preprocessor: ISPPBuiltins.iss
=========================================

The ISPPBuiltins.iss file is part of Inno Setup Preprocessor and is automatically installed to root of your Inno Setup folder. This file is automatically included at the start of preprocessing: some of ISPP's functions are actually implemented by this file instead of being built-in. It also contains common declarations such as special constants. The file is a regular Inno Setup Script file so you can use all of its techniques in your own script as well.

Inno Setup Preprocessor: Command Line Compiler Execution
========================================================

If Inno Setup Preprocessor is installed the console-mode compiler ISCC.exe automatically provides extra parameters to control Inno Setup Preprocessor:

    /D<name>[=<value>]  Emulate #define public <name> <value>
    /$<letter>(+|-)     Emulate #pragma option -<letter>(+|-)
    /P<letter>(+|-)     Emulate #pragma parseroption -<letter>(+|-)
    /I<paths>           Emulate #pragma include <paths>
    /J<filename>        Emulate #include <filename>
    /{#<string>         Emulate #pragma inlinestart <string>
    /}<string>          Emulate #pragma inlineend <string>
    /V<number>          Emulate #pragma verboselevel <number>

Example: 

    iscc /$c- /Pu+ "/DLicenseFile=Trial License.txt" /Ic:\inc;d:\inc /Jdefines.iss "c:\isetup\samples\my script.iss"

/ISSP Directive Reference
==========================

ISSP Directive: #emit
==============================

**Syntax:**

    _emit-directive:_  (emit | =) <expr>


**Description**

Replaces the directive with the value of expr.

When used inline, the name of this directive can be omitted unless expr begins with the name of another directive.

Examples:

    [Files]  
    #emit 'Source: "file1.ext"; DestDir: ' + MyDestDir  
    Source: "file2.ext"; DestDir: {#MyDestDir}  
    #emit GenerateVisualCppFilesEntries ; user defined function  
      
    [Code]  
    const  
      AppName = '{#[SetupSetting](topic_setupsetting.htm)("AppName")}';  


ISSP Directive: #define
================================

**Syntax:**

    _define-directive:_

    <variable-definition>

    <macro-definition>

    <default-visibility-set>

    _variable-definition:_

    (define | :) [private | protected | public] <ident> [[ <expr> ]] [[=] <expr>]

    _macro-definition:_

    (define | :) [private | protected | public] <ident> ( [<formal-macro-args>] ) <expr>

    _default-visibility-set:_

    (define | :) private | protected | public

    _formal-macro-args:_

    <formal-macro-arg> [, <formal-macro-arg>]...

    _formal-macro-arg:_

    <by-val-arg> | <by-ref-arg>

    _by-val-arg:_

    [<type-id>] <ident> [= <expr>]

    _by-ref-arg:_

    [<type-id>] * <ident>

    _type-id:_

    any | int | str | func


**Description**

The first syntax ("variable-definition") defines a variable named ident, or assigns a value to an element of an array named ident (use [dim] instead of define to define the array variable itself). If none of the public, protected, or private keywords are specified, default [visibility] is assumed.

The second syntax ("macro-definition") defines [a user defined function] named ident. When defining a user defined function there must be no whitespace between the name and opening parenthesis, otherwise it will be treated as variable declaration.

The third syntax ("default-visibility-set") sets the default [visibility] of further variable and user defined function definitions in this file. If no visibility declaration occurs in a file, public visibility is assumed by default.

Examples:

    #define MyAppName "My Program"  
    #define MyAppExe MyAppName + ".exe"  
    #define MyAppVer [GetVersionNumbersString](MyAppExe)  
    #define MyArray[0] 15  
    #define Multiply(int A, int B = 10) A * B  


[User Defined Functions].

ISSP Directive: #dim, #redim
=====================================

**Syntax:**

    _dim-directive:_

    dim [private | protected | public] <ident> [ <expr> ] [{ <expr> [, <expr>]... }]

    _redim-directive:_

    redim [private | protected | public] <ident> [ <expr> ]


**Description**

Use dim to define an array variable, set its dimension and optionally intialize it. All unitialized elements of the array are initialized to null (void). To assign an element value after declaring the array, use [define]. Instead of assigning element values with [define], it is also possible to set an element value by using it as the left operand of an assignment.

Use redim to increase or decrease the dimension of an existing array variable. All new elements of the array are initialized to null (void) and existing elements are left unchanged. Identical to dim if ident isn't an existing array variable.

Examples:

    #dim MyArray[10]  
    #define MyArray[0] 15  
    #redim MyArray[20]  
    #define MyArray[10] 30  
    #redim MyArray[10]  
    #dim MyArray2[3] {1, 2, 3}  


ISSP Directive: #undef
===============================

**Syntax:**

    _undef-directive:_

    (undef | x) [private | protected | public] <ident>


**Description**

Undefines (removes) a variable or user defined function. If no [visibility] (public, protected, or private) is specified, ISPP first tries to remove a private variable of the given name, then protected, then public.

Examples:

    #undef MyVar  
    #undef MyFunction  
    #undef public MyVar  


ISSP Directive: #include
=================================

**Syntax:**

    _include-directive:_

    (include | +) < <filename> >

    (include | +) <expr>


**Description**

Includes the [preprocessor output] of the specified file. If an Unicode file is used, it must be UTF-8 encoded with a BOM.

If the filename is enclosed in quotes, ISPP first searches for the file in the directory where current file resides, then in the directory where the file that included current file resides, and so on. If the file is not found, it is searched on current include path, set via [pragma], then on the path specified by INCLUDE environment variable.

If filename is an expression or specified in angle brackets, it is searched on current include path only.

The filename may be prefixed by "compiler:", in which case it looks for the file in the Compiler directory.

This directive cannot be used inline.

Examples:

    #include <file.iss>  
    #include "c:dirfile.iss"  
    #include AddBackslash([CompilerPath]) + "common.iss"  


ISSP Directive: #file
==============================

**Syntax:**

    _file-directive:_

    file <expr>


**Description**

Replaces the directive with the name of a temporary file containing the [preprocessor output] of the specified file. Upon end of compilation, the temporary file is automatically deleted. If an Unicode file is used, it must be UTF-8 encoded with a BOM.

Including a file using this directive creates a new independent instance of the preprocessor, passing it options currently in effect and all declared identifiers. If the included file modifies options in some way, they are not propagated back.

When using this directive in Inno Setup's Source parameter of the [Files] section, specify a DestName parameter too, else the file with not be installed with the original name.

This directive can only be used inline.

Examples:

    [Setup]  
    LicenseFile={#file "mylic.txt"}  


ISSP Directive: #expr
==============================

**Syntax:**

    _expr-directive:_

    (expr | !) <expr>


**Description**

Evaluates an expression ignoring its result. This directive acts like [emit] with the exception that it doesn't emit anything to the [preprocessor output].

This directive is intended to be used with functions that produce side effects and do not return any significant value.

Examples:

    #expr SaveToFile(AddBackslash(SourcePath) + "Preprocessed.iss"), Exec(AddBackslash(CompilerPath) + "Compil32.exe", """" + AddBackslash(SourcePath) + "Preprocessed.iss""")  


ISSP Directive: #insert
================================

**Syntax:**

    _insert-directive:_

    insert <expr>


**Description**

Changes the insertion point. By default, each processed line is added to the end of the [preprocessor output]. Using insert the point at which the next processed line will be added to the [preprocessor output] can be changed. insert takes an expression which must evaluate to an integer. The insertion point will be set to this integer.

The insertion point is also always automatically incremented each time after a line has been added to the [preprocessor output], so that each new line is inserted after the one previously inserted.

It is not recommended to use script generating functions (such as [SetSetupSetting]) which may insert a line by themselves, thus shifting a part of the [preprocessor output] one line down, whereas insertion point is not updated. This may result in different insertion point than expected.

The [Find] function can be used to produce values for the insert directive.

Examples:

    #insert FindSectionEnd("Icons")  
    #insert FindSection("Setup") + 1  
    #insert Find(0, "somefile.ext", FIND_CONTAINS)  


ISSP Directive: #append
================================

**Syntax:**

    _append-directive:_

    append


**Description**

Resets the insertion point (if previously changed using [insert]) to the end of the [preprocessor output].


ISSP Directive: #if, #elif, #else, #endif
==================================================

**Syntax:**

    _if-directive:_

    if <expr>

    _elif-directive:_

    elif <expr>

    _else-directive:_

    else

    _endif-directive:_

    endif


**Description**

The if, elif, else, and endif conditional directives control in- and exclusion of portions of script.

ISPP first evaluates the expressions following each if or elif directive until it finds one evaluating to non-zero. It then selects the portion of script following this directive up to its associated elif, else, or endif. Earlier portions which followed an if or elif which evaluated to zero, or which follows any next elif are not selected and thus not seen by the Inno Setup compiler.

If no expression evaluated to non-zero, the preprocessor selects the script portion after the else directive if present, otherwise nothing is selected.

Finally, after selecting any script portion, ISPP preprocesses it too, so if it contains other preprocessor directives, ISPP carries out those directives as well.

Each if directive in a source file must be matched by a closing endif directive. Any number of elif directives can appear between the if and endif directives, but at most one else directive is allowed. The else directive, if present, must be the last directive before endif.

The if, elif, else, and endif directives can be nested. Each nested else, elif, or endif directive belongs to the closest preceding if directive.

Inline conditional directives may not be mixed with simple. If the if directive is simple (occupying a whole line), its associated directives (elif, else, or endif) must also be simple and not inline (appearing inside other lines).

Examples:

    #define Lang  
      
    [Tasks]  
    #if "English" == Lang = ReadIni(SetupSetting("MessagesFile"),   
      "LangOptions", "LanguageName")  
      Description: "For all users"; Name: all  
    #elif "German" == Lang  
      Description: "Fur alle"; Name: all  
    #else  
    # error Unsupported language  
    #endif  Inno Setup Preprocessor: #ifdef, #ifndef, #ifexist, #ifnexist 

ISSP Directive: #ifdef, #ifndef, #ifexist, #ifnexist
=============================================================

**Syntax:**

_ifdef-directive:_

**ifdef** <ident>

_ifndef-directive:_

**ifndef** <ident>

_ifexist-directive:_

**ifexist** <expr>

_ifnexist-directive:_

**ifnexist** <expr>


**Description**

You can use the ifdef, ifndef, ifexist, and ifnexist directives anywhere [if] can be used. The ifdef identifier statement is equivalent to if 1 when the specified identifier has been defined, and equivalent to if 0 when the identifier has not been defined or has been undefined with the [undef] directive. These directives check only for the presence or absence of identifiers defined with [define].

ifexist and ifnexist directives check for presence and absence of the file, respectively.

Examples:

    [Files]  
    #ifexist "myfile.ext"  
      Filename: "myfile.ext"; DestDir: {app}  
    #endif  
    #ifdef Enterpise  
      Filename: "extra.dll"; DestDir: {app}  
    #endif  


ISSP Directive: #for
=============================

**Syntax:**

    _for-directive:_

    for   { <expr1> ; <expr2> ; <expr3> } <expr4>


**Description**

Use the for directive to get loop behaviour. for takes 4 expressions. The first expression (expr1) is called "initialization expression," the second expression (expr2) "condition," the third expression (expr3) "action," and the final expression (expr4) "loop body."

The logic the for directive follows is:

  1. The initialization expression is evaluated.

  2. The condition is evaluated. If it evaluates to 0, the loop ends.

  3. The loop body is evaluated.

  4. The action is evaluated.

  5. Process repeats from 2.

Examples:

    // Call AddFile user defined procedure 200 times  
    #for {i = 200; i > 0; i--} AddFile  

**More examples**

[FindFirst], [FileRead].


ISSP Directive: #sub, #endsub
======================================

**Syntax:**

    _sub-directive:_

    sub <ident>

    _endsub-directive:_

    endsub


**Description**

sub and endsub directives are used to declare a user defined procedure which is a portion of script which may be included later once or several times. You may think of a user defined procedure as being similar to an external file, and a call to a user defined procedure as being similar to inclusion of an external file, except that procedures may also be called from within expressions. Please note that it is strongly not recommended to call procedures which emit several lines to the [preprocessor output] from within compound expressions or directives.

A procedure is called by simply specifying its identifier, with which it was declared.

A procedure is not processed in any way until it is called, so if any errors exist in its body, they will only pop up when the procedure is called.

Examples:

    #sub AddFile  
      #if [Copy](FileName, 1, 1) == "A"  
        Source: {#FileName}; DestDir: {app}A  
      #else  
        Source: {#FileName}; DestDir: {app}  
      #endif  
    #endsub  

**More examples**

[FindFirst], [FileRead].


ISSP Directive: #pragma
================================

**Syntax:**

    _pragma-directive:_

    <pragma-option>

    <pragma-itokens>

    <pragma-msg>

    <pragma-verblev>

    <pragma-include>

    <pragma-spansymb>

    _pragma-option:_

    pragma (option | parseroption) - <letter> (+ | -) [- <letter> (+ | -) ]...

    _pragma-itokens:_

    pragma (inlinestart | inlineend) <expr>

    _pragma-msg:_

    pragma (message | warning | error) <expr>

    _pragma-verblev:_

    pragma verboselevel <expr>

    _pragma-include:_

    pragma include <expr>

    _pragma-spansymb:_

    pragma spansymbol <expr>


**Description**

pragma is a special directive. Please note that if ISPP fails to parse parameters of this directive (because of typo or wrong syntax), no error will occur – only a warning will be issued; this is done for compatibility with other preprocessors, which can have their own syntax of pragma directive.

First syntax of pragma directive controls the options, which ISPP uses to read the source. There are two groups of options. Each group consists of 26 flags (not all of them are meaningful and used by ISPP, though). Each flag has an assigned latin letter. You specify options by typing group name (option or parseroption), then the letter following the dash. After a letter, a plus or minus sign shall be specified. Plus sign to turn the option on, minus to turn it off. Unrestricted number of options can be specified at once (see syntax). The list of options is provided at the end of this topic.

The first group of options (option) controls the general options, while the second group (parseroption) controls options specific to parser. The list of options is provided at the end of this topic.

Second syntax is used to specify inline directive terminators: starting and ending, respectively. After the token description keyword (inlinestart or inlineend) a string type expression must follow. It must not evaluate to an empty string. Only first seven symbols from the string are taken. It is allowed to specify the same token for both starting and ending terminators. By default, {# (opening brace and a number sign) and } (closing brace) are assumed.

Third syntax of pragma directive issues a message of the type specified by the keyword following the directive name. Messages and warnings are sent to the messages window of the compiler. Errors are shown (by the compiler) using message boxes. Expression must be of type string. Also see the [error] directive.

Fourth syntax turns on verbose mode and sets the level of verbosity which controls the importance of messages (see below). Least important messages will show up only when highest verbose level is set.

Fifth syntax sets the include path. Expression may specify multiple paths delimited with semicolons. The list of these directories is used when ISPP tries to find a file, mentioned in [include] directive.

The last syntax sets the symbol used to span multiple lines together. Expression must not evaluate to an empty string. Only first symbol in string is taken.

ISPP options
------------

    c   Indicates that the [preprocessor output] should be 
        sent to the compiler after preprocessing is done. Default state: on.

    e   Specifies whether empty lines or lines with only whitespace should be emitted 
        to the [preprocessor output]. Default state: on.

    v   Turns on/off the verbose mode. Default state: off.

Parser options
--------------

    b  Short-circuit boolean evaluation. Default state: on.
    m  Short-circuit multiplication evaluation. 
       (In "0 * A", A will not be evaluated, since the result of expression is known to be zero.) 
       Default state: off.

    p  Pascal-style string literals. In off state, uses C-style string 
       literals (with escape sequences). Default state: on.

    u  Allow undeclared identifiers. If an undefined identifier is 
       encountered, ISPP will raise an error unless this option is turned on, in which case a 
       standalone identifier (the one that does not look like a function call) 
       will be considered void value. Default state: off.


Verbose levels
--------------

    0     Verbosity level messages
    1     Messages about any temporary files created by #file
    2     #insert and #append messages
    4     #dim, #define and #undef messages
    6     Conditional inclusion messages
    8     #emit messages
    9     Macro and functions call messages
    10    Local macro array allocation messages

Examples:

    #pragma parseroption -b- -u+  
    #pragma option -c-  
    #pragma warning "Variable value is: " + Str(MyVar)  
    #pragma option -v+  
    #pragma verboselevel 9  
    #pragma inlinestart "$("  
    #pragma inlineend ")"  
    #pragma include __INCLUDE__ + ";D:INCLUDE"  
    #pragma spansymbol "_"  


ISSP Directive: #error
===============================

**Syntax:**

_error-directive:_

**error** <text>


**Description**

Causes the Inno Setup compiler to issue an error message with the specified text. Unlike pragma error, text in error directive is not parsed, so it is recommended to use this directive instead of [pragma] when possible to avoid possible syntax errors that may hide real errors your script is trying to report.

Examples:

    #if [VER] < EncodeVer(5,4,2)  
      #error A more recent version of Inno Setup is required to compile this script (5.4.2 or newer)  
    #endif  



/ISSP Function Reference
========================


ISSP Function: GetVersionNumbersString
======================================

**Prototype**

    str GetVersionNumbersString(str Filename)  

**Description**

Returns the version of the specified file as a string (in "0.0.0.0" format) if successful, an empty string otherwise.

Also see [GetStringFileInfo], which can also be used to retrieve file versions using "FileVersion" or "ProductVersion" as the second parameter. The difference is that GetVersionNumbersString takes it from the fixed block of version info, unlike GetStringFileInfo which extracts string from the language specific block.

ISSP Function: GetStringFileInfo
================================

**Prototype**

    str GetStringFileInfo(str 1, str 2, int? 3)  

**Description**

Retrieves string from specified file's (first argument) version information resource.

Second argument is the name of the version info string-value. This should be one of the predefined strings. Those strings and shortcuts are declared in [ISPPBuiltins.iss].

Third optional argument should specify the language and charset identifier. For example: 0x04BE0409 stands for "English (United States)." If this parameter is omitted, ISPP scans for all available version info blocks to find the value.

The function returns an empty string, if it was unable to retrieve the desired string-value.

ISSP Function: Int
==================

**Prototype**

    int Int(any 1, int? 2)  

**Description**

Converts an expression (first argument) to its integer representation. If the expression is an integer, the result of the function is the expression value. If the expression is void, the result is 0. If the expression is string, ISPP tries to convert it to integer; if such attempt fails, an error is raised unless second parameter specifies the default result.

ISSP Function: Str
==================

**Prototype**

    str Str(any)  

**Description**

Converts an expression to string. If the expression is integer, the result is its string representation. If the expression is void, the result is an empty string. Otherwise the result is the value of the expression.

ISSP Function: FileExists
=========================

**Prototype**

    int FileExists(str)  

**Description**

Returns non-zero value if the specified file exists.

ISSP Function: DirExists
========================

**Prototype**

    int DirExists(str)  

**Description**

Returns non-zero value if the specified directory exists.

ISSP Function: ForceDirectories
===============================

**Prototype**

    int ForceDirectories(str)  

**Description**

Creates all the directories along the specified directory path all at once. If the first directories in the path do exist, but the latter ones don't, ForceDirectories creates just the ones that don't exist. Returns non-zero value if successful.

ISSP Function: FileSize
=======================

**Prototype**

    int FileSize(str)  

**Description**

Returns size, in bytes, of the specified file. If the file does not exist, the result is -1.

ISSP Function: ReadIni
======================

**Prototype**

    str ReadIni(str 1, str 2, str 3, str? 4)  

**Description**

Reads the value from an INI file. Argument 1 must be the name of the INI file, argument 2 – the name of a section in the INI file, the third argument is the key in the section to read. Last optional argument can be used to provide the default value that will be returned on failure, if it is omitted, an empty string is returned.

ISSP Function: WriteIni
=======================

**Prototype**

    void WriteIni(str 1, str 2, str 3, any 4)  

**Description**

Writes specified value to an INI file. Argument 1 is the name of the INI file, argument 2 – the name of a section in the INI file, argument 3 – the name of a key in the section. Last argument should be set to the value you wish to be written to the INI file, it can be of any type.

ISSP Function: ReadReg
======================

**Prototype**

    any ReadReg(int 1, str 2, str? 3, any? 4)  

**Description**

Reads the value of the specified key in the 32-bit or 64-bit system registry. First parameter is the root key, such as HKEY_LOCAL_MACHINE (32-bit) or HKEY_LOCAL_MACHINE_64 (64-bit). Constants for use with this parameter are declared in [ISPPBuiltins.iss] accompanying ISPP. Second parameter specifies a subkey. Third parameter specifies the name of the value, if this parameter is omitted, a default value is assumed. Last optional parameter may be used to specify the default value that will be returned on failure.

Note that this function can return a value of any type depending on the type of actual value in the registry.

ISSP Function: Exec
===================

**Prototype**

    int Exec(str 1, str? 2, str? 3, int? 4, int? 5)  

**Description**

Executes specified executable file.

First argument specifies the filename of the module to execute.

Second argument may be used to specify command line to execute.

Third argument may be used to specify the working directory of the process.

Fourth argument should be set to zero, if you don't wish to wait for the process to finish, and non-zero otherwise. By default, non-zero value is assumed.

Fifth argument can be any of the SW_\* constants defined in [ISPPBuiltins.iss]. For GUI processes, it specifies the default value the first time ShowWindow is called. By default, SW_SHOWNORMAL (i. e. 1) is assumed.

If fourth argument is omitted or is non-zero, the function returns the exit code of the process. Otherwise, the function result indicates whether the process has been successfully launched (non-zero for success).

ISSP Function: Copy
===================

**Prototype**

    str Copy(str 1, int 2, int? 3)  

**Description**

Extracts a substring from a string (first argument). The 1-based index of the character from which the substring should start is specified by the second argument. The third argument specifies the number of characters to take, if it is omitted, all characters up to the end of the string are copied to the result.

ISSP Function: Pos
==================

**Prototype**

    int Pos(str 1, str 2)  

**Description**

Searches for a substring (first argument) in another string (second argument) and returns an integer value that is the 1-based index of the first character of the substring within the second string. Pos is case-sensitive. If the substring is not found, Pos returns zero.

ISSP Function: RPos
===================

**Prototype**

    int RPos(str 1, str 2)  

**Description**

Searches for a substring (first argument) in another string (second argument) and returns an integer value that is the 1-based index of the first character of the last occurrence of the substring within the second string. RPos is case-sensitive. If the substring is not found, RPos returns zero.

ISSP Function: Len
==================

**Prototype**

    int Len(str)  

**Description**

Returns the length of the given string.

ISSP Function: SaveToFile
=========================

**Prototype**

    void SaveToFile(str)  

**Description**

Saves [current preprocessor output] to the specified file.

ISSP Function: Find
===================

**Prototype**

    int Find(int 1, str 2, int? 3, str? 4, int? 5, str? 6, int? 7)  

**Description**

Intended to be used with [insert] directive: returns the index of the line in the [preprocessor output] depending on specified criteria.

First parameter denotes the index of the line to start the search from, usually it is set to zero.

Second, fourth, and sixth parameters should specify string(s) to search within each line. Only the second parameter must be specified, whereas fourth and sixth may be omitted.

Third, fifth, and seventh parameters should specify the search flags for each string meaning that third parameter specifies flags for second, fifth for fourth, and seventh for sixth.

If any of the 'flags' parameters is omitted but the string parameter preceding it is specified, FIND_MATCH | FIND_AND (i. e. 0) is assumed.

Values for third, fifth, and seventh parameters of Find function are declared in [ISPPBuiltins.iss]. See [Find flags] topic for the description of each value.


ISSP Function: SetupSetting
===========================

**Prototype**

    str SetupSetting(str)  

**Description**

Parses [[Setup] section] in [current preprocessor output] to find the key whose name is specified as function parameter. Function returns the value of that key if it's found, or an empty string otherwise.

ISSP Function: SetSetupSetting
==============================

**Prototype**

    void SetSetupSetting(str 1, str 2)  

**Description**

Modifies or generates [Setup] section directive given the key (first parameter) and its value (second parameter).

If there is no [Setup] section in [current preprocessor output] (it may happen that function is called before that section in a script), its header (as well as directive itself) is generated by this function.

Please use this function carefully – it should not be called when ISPP is in insert mode (i. e. after [insert] directive).

ISSP Function: LowerCase
========================

**Prototype**

    str LowerCase(str)  

**Description**

Returns a string with the same text as the string passed in its parameter, but with all letters converted to lowercase. The conversion affects only 7-bit ASCII characters between 'A' and 'Z'.

ISSP Function: UpperCase
========================

**Prototype**

    str UpperCase(str)  

**Description**

Returns a string with the same text as the string passed in its parameter, but with all letters converted to uppercase. The conversion affects only 7-bit ASCII characters between 'A' and 'Z'.

ISSP Function: EntryCount
=========================

**Prototype**

    int EntryCount(str)  

**Description**

Returns the total number of entries in specified section in [current preprocessor output]. It does not count empty lines or comments. Function takes care of multiple sections with the same name and counts all of them.

ISSP Function: GetEnv
=====================

**Prototype**

    str GetEnv(str)  

**Description**

Returns the value of the environment variable whose name is specified as the parameter. Returns an empty string if the variable is not defined.

ISSP Function: DeleteFile
=========================

**Prototype**

    void DeleteFile(str)  

**Description**

Marks the specified file for deletion after the compilation has completed. Does not return anything. Also see [DeleteFileNow].

ISSP Function: DeleteFileNow
============================

**Prototype**

    void DeleteFileNow(str)  

**Description**

Deletes the specified file. Does not return anything. Also see [DeleteFile].

ISSP Function: CopyFile
=======================

**Prototype**

    void CopyFile(str 1, str 2)  

**Description**

Copies an existing file (first parameter) to a new file (second parameter). If the new file already exists, it will be overwritten.

ISSP Function: FindFirst
========================

**Prototype**

    int FindFirst(str, int)  

**Description**

Searches the directory specified by first parameter for the first file that matches the file name implied by first parameter and the attributes specified by second parameter. If the file is found, the result is a find handle, that should be used in subsequent calls to [FindGetFileName], [FindNext], and [FindClose] functions, otherwise the return value is 0.

The first parameter is the directory and file name mask, including wildcard characters. For example, '.\\\*.\*' specifies all files in the current directory).

The second parameter specifies the special files to include in addition to all normal files. Choose from these file attribute constants defined in [ISPPBuiltins.iss] when specifying this parameter:

    faReadOnly  Read-only files
    faHidden    Hidden files
    faSysFile   System files
    faVolumeID  Volume ID files
    faDirectory Directory files
    faArchive   Archive files
    faAnyFile   Any file

Attributes can be combined by OR-ing their constants or values. For example, to search for read-only and hidden files in addition to normal files, pass faReadOnly | faHidden as the parameter.

**Example**

    [Files]
    #define FindHandle
    #define FindResult
    #define Mask "*.pas"  
      
    #sub ProcessFoundFile  
      #define FileName FindGetFileName(FindHandle)  
      #if LowerCase(Copy(FileName, 1, 4)) == "ispp"  
        Source: {#FileName}; DestDir: {app}\\ispp  
      #else  
        Source: {#FileName}; DestDir: {app}  
      #endif  
    #endsub  
      
    #for {FindHandle = FindResult = FindFirst(Mask, 0); FindResult; FindResult = FindNext(FindHandle)} ProcessFoundFile  
    #if FindHandle  
      #expr FindClose(FindHandle)  
    #endif  


ISSP Function: FindNext
=======================

**Prototype**

    int FindNext(int)  

**Description**

Returns the next entry that matches the name and attributes specified in a previous call to [FindFirst]. The parameter must be a find handle returned by FindFirst. The return value is non-zero if the function was successful.

ISSP Function: FindClose
========================

**Prototype**

    void FindClose(int)  

**Description**

Terminates a [FindFirst]/[FindNext] sequence. The parameter must be a non-zero find handle returned by FindFirst.

This function is obsolete since 1.2. ISPP automatically frees resources allocated in a call to FindFirst.

ISSP Function: FindGetFileName
==============================

**Prototype**

    str FindGetFileName(int)  

**Description**

Feed FindGetFileName with the find handle returned by [FindFirst] to get the name of the file found by the last call to FindFirst or [FindNext].

ISSP Function: FileOpen
=======================

**Prototype**

    int FileOpen(str)  

**Description**

Opens a text file for reading and returns the file handle (or zero on failure) to be used in subsequent calls to File\* functions.

ISSP Function: FileRead
=======================

**Prototype**

    str FileRead(int)  

**Description**

Reads the next line in a text file opened with [FileOpen]. The only parameter should be the file handle returned by FileOpen.

**Example**

    #define FileHandle
    #define FileLine
    #sub ProcessFileLine
      #define FileLine = FileRead(FileHandle)  
      #pragma message FileLine  
    #endsub  
    #for {FileHandle = FileOpen("c:\\autoexec.bat"); \\  
      FileHandle && ![FileEof](FileHandle); ""} \\  
      ProcessFileLine  
    #if FileHandle  
      #expr [FileClose](FileHandle)  
    #endif  


ISSP Function: FileReset
========================

**Prototype**

    void FileReset(int)  

**Description**

Resets the file pointer to zero, so the subsequent call to [FileRead] will read the first line of the file. The only parameter should be the file handle returned by [FileOpen].

ISSP Function: FileEof
======================

**Prototype**

    int FileEof(int)  

**Description**

Returns zero if the file pointer does not point to the end of the file, or non-zero otherwise. If this function returns non-zero value, subsequent calls to [FileRead] will fail. The only parameter should be the file handle returned by [FileOpen].

ISSP Function: FileClose
========================

**Prototype**

    void FileClose(int)  

**Description**

Closes a file opened using [FileOpen]. After calling FileClose, the file handle becomes invalid.

Note: opened files which are not closed using this function will be automatically closed after the script has been preprocessed.

ISSP Function: SaveStringToFile
===============================

**Prototype**

    int SaveStringToFile(str Filename, str S, int? Append, int? UTF8)  

**Description**

Saves the specified string to the specified file. If Append is True or ommitted and the specified file already exists, it will be appended to instead of overwritten. If UTF8 is True or ommitted, the string will be saved with UTF8 encoding instead of ASCII encoding. Returns True if successful, or False otherwise.

This function does not automatically write a line break before or after the string. If Append is True or ommitted and the existing file did not end in a line break, the function will effectively append to the existing last line. To avoid this you can put line break characters (using [NewLine]) before and/or after your string.

**Example**

    #expr SaveStringToFile('c:\\filename.txt', NewLine + 'the string' + NewLine)

ISSP Function: GetDateTimeString
================================

**Prototype**

    str GetDateTimeString(str, str, str)  

**Description**

Returns the current date and time as a string using the specified formatting.

The first parameter is the format string. The second and third parameters denote the DateSeparator and TimeSeparator parameters explained below.

The following format specifiers are supported:

| d         | Displays the day as a number without a leading zero (1-31).
| dd        | Displays the day as a number with a leading zero (01-31).
| d         | dd Displays the day as an abbreviation (Sun-Sat).
| dddd      | Displays the day as a full name (Sunday-Saturday).
| ddddd     | Displays the date using the system's short date format.
| dddddd    | Displays the date using the system's long date format.
| m         | Displays the month as a number without a leading zero (1-12). 
|           | If the m specifier immediately follows an h or hh specifier, 
|           | the minute rather than the month is displayed.
| mm        | Displays the month as a number with a leading zero (01-12). 
|           | If the mm specifier immediately follows an h or hh specifier, 
|           | the minute rather than the month is displayed.
| m         | mm Displays the month as an abbreviation (Jan-Dec).
| mmmm      | Displays the month as a full name (January-December).
| yy        | Displays the year as a two-digit number (00-99).
| yyyy      | Displays the year as a four-digit number (0000-9999).
| h         | Displays the hour without a leading zero (0-23).
| hh        | Displays the hour with a leading zero (00-23).
| n         | Displays the minute without a leading zero (0-59).
| nn        | Displays the minute with a leading zero (00-59).
| s         | Displays the second without a leading zero (0-59).
| ss        | Displays the second with a leading zero (00-59).
| t         | Displays the time using the system's short time format.
| tt        | Displays the time using the system's long time format.
| am/pm     | Uses the 12-hour clock for the preceding h or hh specifier. 
|           | Displays 'am' for any hour before noon, and 'pm' for any hour after noon. 
|           | The am/pm specifier can use lower, upper, or mixed case, and the result is displayed accordingly.
| a         | /p Uses the 12-hour clock for the preceding h or hh specifier. 
|           | Displays 'a' for any hour before noon, and 'p' for any hour after noon. 
|           | The a/p specifier can use lower, upper, or mixed case, and the result is displayed accordingly.
| /         | Displays the date separator character given by the DateSeparator parameter. 
|           | If DateSeparator is set to an empty string, the system's date separator character will be used instead.
| :         | Displays the time separator character given by the TimeSeparator parameter. 
|           | If TimeSeparator is set to an empty string, the system's time separator character will be used instead.
| 'xx'/"xx" | Characters enclosed in single or double quotes are displayed as-is, 
|           | and do not affect formatting.


Format specifiers may be written in upper case as well as in lower case letters--both produce the same result.

**Example**

    #define MyDateTimeString GetDateTimeString('ddddd', '', '')
    #define MyDateTimeString GetDateTimeString('ddddd tt', '', '')
    #define MyDateTimeString GetDateTimeString('dd/mm/yyyy hh:nn:ss', '-', ':')

ISSP Function: GetFileDateTimeString
====================================

**Prototype**

    str GetFileDateTimeString(str, str, str, str)  

**Description**

Returns the date and time of the specified file as a string using the specified formatting.

The first parameter is the file name. The second, third and fourth parameters denote the format string, DateSeparator and TimeSeparator parameters as explained in the [GetDateTimeString] topic.

**Example**

    #define MyFileDateTimeString GetFileDateTimeString('myfile.txt', 'dd/mm/yyyy hh:nn:ss', '-', ':');

ISSP Function: GetMD5OfString
=============================

**Prototype**

    str GetMD5OfString(str)  

**Description**

Gets the MD5 sum of the specified ANSI string, as a string.

**Example**

    #define MD5 GetMD5OfString('Test')
    // MD5 = '0cbc6611f5540bd0809a388dc95a615b'

ISSP Function: GetMD5OfUnicodeString
====================================

**Prototype**

    str GetMD5OfString(str)  

**Description**

Gets the MD5 sum of the specified Unicode string, as a string.

Causes an internal error if called during non Unicode compilation.

**Example**

    #define MD5 GetMD5OfUnicodeString('Test')
    // MD5 = '8e06915d5f5d4f8754f51892d884c477'

ISSP Function: GetMD5OfFile
===========================

**Prototype**

    str GetMD5OfFile(str)  

**Description**

Gets the MD5 sum of the specified file, as a string.

ISSP Function: GetSHA1OfString
==============================

**Prototype**

    str GetSHA1OfString(str)  

**Description**

Gets the SHA-1 hash of the specified ANSI string, as a string.

ISSP Function: GetSHA1OfUnicodeString
=====================================

**Prototype**

    str GetSHA1OfString(str)  

**Description**

Gets the SHA-1 hash of the specified Unicode string, as a string.

Causes an internal error if called during non Unicode compilation.

ISSP Function: GetSHA1OfFile
============================

**Prototype**

    str GetSHA1OfFile(str)  

**Description**

Gets the SHA-1 hash of the specified file, as a string.

ISSP Function: Trim
===================

**Prototype**

    str Trim(str)  

**Description**

Returns a copy of the specified string without leading and trailing spaces.

ISSP Function: StringChange
===========================

**Prototype**

    str StringChange(str, str, str)  

**Description**

Returns a copy of the first string, with all occurrences of the second string changed to the third string.

**Example**

    #define MyString "a ca c"
    #define MyString2 StringChange(MyString, " ", "b")
    // MyString2 = 'abcabc'

ISSP Function: IsWin64
======================

**Prototype**

    int IsWin64()  

**Description**

Returns non-zero if the system is running a 64-bit version of Windows that provides the API support Inno Setup requires to perform 64-bit installation tasks, or zero otherwise.

ISSP Function: Defined
======================

**Prototype**

    int Defined(<ident>)  
**int** Defined <ident>  

**Description**

Special function. Returns non-zero if the specified identifier is defined with [define] directive.

Using parentheses is optional.

ISSP Function: TypeOf
=====================

**Prototype**

    int TypeOf(<ident>)  
**int** TypeOf <ident>  

**Description**

Special function. Returns one of predefined TypeOf constants which are declared in [ISPPBuiltins.iss] for the specified identifier.

Using parentheses is optional.

ISSP Function: DimOf
====================

**Prototype**

    int DimOf(<ident>)  
**int** DimOf <ident>  

**Description**

Special function. Returns the dimension of the specified identifier.

Using parentheses is optional.


ISSP Function: GetVersionNumbers
================================

**Prototype**

    str GetVersionNumbers(str Filename, int *VersionMS, int *VersionLS)  

**Description**

Gets the version numbers of the specified file. Returns the version as a string (in "0.0.0.0" format) if successful, an empty string otherwise.

Declared in [ISPPBuiltins.iss].


ISSP Function: GetVersionComponents
===================================

**Prototype**

    str GetVersionComponents(str Filename, int *Major, int *Minor, int *Revision, int *Build)  

**Description**

Gets the individual version components of the specified file. Returns the version as a string (in "0.0.0.0" format) if successful, an empty string otherwise.

Declared in [ISPPBuiltins.iss].


ISSP Function: GetPackedVersion
===============================

**Prototype**

    str GetPackedVersion(str Filename, int *Version)  

**Description**

Gets the packed version of the specified file. Returns the version as a string (in "0.0.0.0" format) if successful, an empty string otherwise.

Always use [ComparePackedVersion] or [SamePackedVersion] to compare packed versions.

Declared in [ISPPBuiltins.iss].


ISSP Function: PackVersionNumbers
=================================

**Prototype**

    int PackVersionNumbers(int VersionMS, int VersionLS)  

**Description**

Packs version numbers into a single value.

Always use [ComparePackedVersion] or [SamePackedVersion] to compare packed versions.

Declared in [ISPPBuiltins.iss].



ISSP Function: PackVersionComponents
====================================

**Prototype**

    int PackVersionComponents(int Major, int Minor, int Revision, int Build)  

**Description**

Packs individual version components into a single value.

Always use [ComparePackedVersion] or [SamePackedVersion] to compare packed versions.

Declared in [ISPPBuiltins.iss].



ISSP Function: ComparePackedVersion
===================================

**Prototype**

    int ComparePackedVersion(int Version1, int Version2)  

**Description**

Compares Version1 to Version2. The return value is less than 0 if Version1 is less than Version2, 0 if Version1 equals Version2, or greater than 0 if Version1 is greater than Version2.

ISSP Function: SamePackedVersion
================================

**Prototype**

    int SamePackedVersion(int Version1, int Version2)  

**Description**

Compares the packed versions Version1 and Version2 and returns True if they are equal.

ISSP Function: UnpackVersionNumbers
===================================

**Prototype**

    void UnpackVersionNumbers(int Version, int *VersionMS, int *VersionLS)  

**Description**

Unpacks a packed version into version numbers.

Declared in [ISPPBuiltins.iss].


ISSP Function: UnpackVersionComponents
======================================

**Prototype**

    void UnpackVersionComponents(int Version, int *Major, int *Minor, int *Revision, int *Build)  

**Description**

Unpacks a packed version into individual version components.

Declared in [ISPPBuiltins.iss].


ISSP Function: VersionToStr
===========================

**Prototype**

    void VersionToStr(int Version)  

**Description**

Returns the specified packed version as a string (in "0.0.0.0" format).

Declared in [ISPPBuiltins.iss].



ISSP Function: StrToVersion
===========================

**Prototype**

    int StrToVersion(str Version)  

**Description**

Returns the specified string (in "0.0.0.0" format) as a packed version.

Declared in [ISPPBuiltins.iss].



ISSP Function: EncodeVer
========================

**Prototype**

    int EncodeVer(int Major, int Minor, int Revision = 0, int Build = -1)  

**Description**

Returns given four version elements encoded to a 32 bit integer number (8 bits for each element, i.e. elements must be within 0...255 range).

Declared in [ISPPBuiltins.iss].

ISSP Function: DecodeVer
========================

**Prototype**

    str DecodeVer(int Version, int Digits = 3)  

**Description**

Returns given 32 bit integer encoded version decoded to its string representation. The Digits parameter indicates how many elements to show (if the fourth element is 0, it won't be shown anyway).

Declared in [ISPPBuiltins.iss].

ISSP Function: FindSection
==========================

**Prototype**

    int FindSection(str Section = "Files")  

**Description**

Returns the index of the line following the header of the section. This function is intended to be used with [insert] directive.

Declared in [ISPPBuiltins.iss].

ISSP Function: FindSectionEnd
=============================

**Prototype**

    int FindSectionEnd(str Section = "Files")  

**Description**

Returns the index of the line following last entry of the section. This function is intended to be used with #insert directive.

Declared in [ISPPBuiltins.iss].

ISSP Function: FindCode
=======================

**Prototype**

    int FindCode()  

**Description**

Returns the index of the line following either the [Code] section header, or the "program" keyword, if any.

Declared in [ISPPBuiltins.iss].

ISSP Function: ExtractFilePath
==============================

**Prototype**

    str ExtractFilePath(str PathName)  

**Description**

Returns the directory portion of the given filename with a backslash. If PathName doesn't contain a directory portion, the result is an empty string.

Declared in [ISPPBuiltins.iss].

ISSP Function: ExtractFileDir
=============================

**Prototype**

    str ExtractFileDir(str PathName)  

**Description**

Returns the directory portion of the given filename without a backslash (unless it is a root directory). If PathName doesn't contain a directory portion, the result is an empty string.

Declared in [ISPPBuiltins.iss].

ISSP Function: ExtractFileExt
=============================

**Prototype**

    str ExtractFileExt(str PathName)  

**Description**

Returns the extension portion of the given filename, NOT including the period character.

Declared in [ISPPBuiltins.iss].

ISSP Function: ExtractFileName
==============================

**Prototype**

    str ExtractFileName(str PathName)  

**Description**

Returns the name portion of the given filename. If PathName ends with a backslash, the result is an empty string.

Declared in [ISPPBuiltins.iss].

ISSP Function: ChangeFileExt
============================

**Prototype**

    str ChangeFileExt(str FileName, str NewExt)  

**Description**

Changes the extension in FileName with NewExt. NewExt must not contain period.

Declared in [ISPPBuiltins.iss].

ISSP Function: RemoveFileExt
============================

**Prototype**

    void RemoveFileExt(str FileName)  

**Description**

Removes the extension in FileName.

Declared in [ISPPBuiltins.iss].

ISSP Function: AddBackslash
===========================

**Prototype**

    str AddBackslash(str S)  

**Description**

Appends a backslash to the string, if it's not already there, and returns the result.

Declared in [ISPPBuiltins.iss].

ISSP Function: RemoveBackslash
==============================

**Prototype**

    str RemoveBackslash(str S)  

**Description**

Removes the trailing backslash from the string unless the string points to a root directory, and returns the result.

Declared in [ISPPBuiltins.iss].

ISSP Function: Delete
=====================

**Prototype**

    void Delete(str *S, int Index, int Count = MaxInt)  

**Description**

Deletes the specified number of characters beginning with Index from S. S is passed by reference (therefore is modified).

Declared in [ISPPBuiltins.iss].

ISSP Function: Insert
=====================

**Prototype**

    void Insert(str *S, int Index, str Substr)  

**Description**

Inserts specified Substr at Index'th character into S. S is passed by reference (therefore is modified).

Declared in [ISPPBuiltins.iss].

ISSP Function: YesNo
====================

**Prototype**

    int YesNo(str S)  

**Description**

Returns nonzero value if given string is "yes", "true" or "1". Intended to be used with the [SetupSetting] function.

Declared in [ISPPBuiltins.iss].

ISSP Function: Power
====================

**Prototype**

    int Power(int X, int P = 2)  

**Description**

Declared in [ISPPBuiltins.iss].

ISSP Function: Min
==================

**Prototype**

    int Min(int A, int B, int C = MaxInt)  

**Description**

Declared in [ISPPBuiltins.iss].

ISSP Function: Max
==================

**Prototype**

    int Max(int A, int B, int C = MinInt)  

**Description**

Declared in [ISPPBuiltins.iss].

ISSP Function: SameText
=======================

**Prototype**

    int SameText(str S1, str S2)  

**Description**

Returns True if the given strings are identical, ignoring case.

Declared in [ISPPBuiltins.iss].

ISSP Function: SameStr
======================

**Prototype**

    int SameStr(str S1, str S2)  

**Description**

Returns True if the given strings are identical, with case-sensitivity.

Declared in [ISPPBuiltins.iss].

ISSP Function: Message
======================

**Prototype**

    void Message(str S)  

**Description**

Functional version of [pragma message].

ISSP Function: Warning
======================

**Prototype**

    void Warning(str S)  

**Description**

Functional version of [pragma warning].

ISSP Function: Error
====================

**Prototype**

    void Error(str S)  

**Description**

Functional version of [error].
