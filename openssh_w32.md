## Manuals
* [sshd_config](https://github.com/PowerShell/Win32-OpenSSH/wiki/sshd_config)
* [sshd](https://github.com/PowerShell/Win32-OpenSSH/wiki/sshd)
* [ssh_config](https://man.openbsd.org/ssh_config)
* [ssh](https://man.openbsd.org/ssh)
* [ssh-keygen](https://man.openbsd.org/ssh-keygen)
* [ssh-keyscan](https://man.openbsd.org/ssh-keyscan)
* [ssh-add](https://man.openbsd.org/ssh-add)

## Installation
* [MSI Install Instructions](https://github.com/PowerShell/Win32-OpenSSH/wiki/Install-Win32-OpenSSH-Using-MSI) 
* [Install Instructions](https://github.com/PowerShell/Win32-OpenSSH/wiki/Install-Win32-OpenSSH)
* [Alternative installation using the universal installer](https://github.com/PowerShell/Win32-OpenSSH/wiki/%5BDeprecated%5D-Win32-OpenSSH-Automated-Install-and-Upgrade-using-Chocolatey)
* [Retrieving download links for the latest packages](https://github.com/PowerShell/Win32-OpenSSH/wiki/How-to-retrieve-links-to-latest-packages)

## Usage
* [SSH Usage Examples](https://github.com/PowerShell/Win32-OpenSSH/wiki/ssh.exe-examples)
* [SFTP Usage Examples](https://github.com/PowerShell/Win32-OpenSSH/wiki/sftp.exe-examples)
* [Using Certificate Authentication](https://github.com/PowerShell/Win32-OpenSSH/wiki/Certificate-Authentication)
* [Fix SSH file permissions](https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH)
* [Info on SSH remote sessions on Windows](https://github.com/PowerShell/Win32-OpenSSH/wiki/SSH-remote-sessions-on-Windows)
* [TTY PTY support](https://github.com/PowerShell/Win32-OpenSSH/wiki/TTY-PTY-support-in-Windows-OpenSSH)
* [Troubleshooting](https://github.com/PowerShell/Win32-OpenSSH/wiki/Troubleshooting-Steps)

## Project
* [Project Status](https://github.com/PowerShell/Win32-OpenSSH/wiki/Project-Status)
* [Project Scope](https://github.com/PowerShell/Win32-OpenSSH/wiki/Project-Scope)
* [Area Owners](https://github.com/PowerShell/Win32-OpenSSH/wiki/Area-Owners)
* [Design Details](https://github.com/PowerShell/Win32-OpenSSH/wiki/About-Win32-OpenSSH-and-Design-Details)


## Developing and Contributing to Win32-OpenSSH
* [Building Win32-OpenSSH on Windows (w/ LibreSSL)](https://github.com/PowerShell/Win32-OpenSSH/wiki/Building-OpenSSH-for-Windows-(using-LibreSSL-crypto))
* [VS 2015 Build Instructions](https://github.com/PowerShell/Win32-OpenSSH/wiki/Building-using-VS-2015)
* [Running Pester tests](https://github.com/PowerShell/Win32-OpenSSH/wiki/Run-OpenSSH-Pester-Tests)



# wiki/sshd_config
========================================================
Listed here are Windows specific details that supplement or override the original sshd configuration 
manual documented in [OpenBSD manual](https://man.openbsd.org/sshd_config). 
If you don't see a configuration entry here, the original man page reference holds true.

In Windows, [sshd](https://man.openbsd.org/sshd) reads configuration data from 
`%programdata%\ssh\sshd_config` (or the file specified with -f on the command line). 
If this file is absent, sshd will generate one with the default configuration on a service start.

To override the default shell (cmd.exe) used for command invocations, 
follow steps [here](https://github.com/PowerShell/Win32-OpenSSH/wiki/DefaultShell) 
_______
#### AllowGroups AllowUsers DenyGroups DenyUsers

[AllowGroups](https://man.openbsd.org/sshd_config#AllowGroups), 
[AllowUsers](https://man.openbsd.org/sshd_config#AllowUsers), 
[DenyGroups](https://man.openbsd.org/sshd_config#DenyGroups), 
[DenyUsers](https://man.openbsd.org/sshd_config#DenyUsers)

The allow/deny directives are processed in the following order: 
**DenyUsers**, **AllowUsers**, **DenyGroups**, and finally **AllowGroups**. 

See PATTERNS in [ssh_config](http://man.openbsd.org/ssh_config.5#PATTERNS) for more information on patterns.

User and group names are case insensitive in Windows (unlike in Unix). 
You **should** always use **lower** case while specifying these irrespective of their original case.  

**Note** the following for domain accounts:

Prior to v7.7.0.0, there was no well defined way to specify domain principals (users and groups). 
To account for a domain principal in 
[various forms](https://msdn.microsoft.com/en-us/library/windows/desktop/ms724268(v=vs.85).aspx), 
it is recommended to use the following format while configuring user/group based rules - 
`user?domain*` - note the `?` instead of `@` 
to avoid conflict with `username@host` format and `*` added to cover FQDNs.

From v7.7.0.0 on wards, work group users/groups and internet-connected accounts are strictly 
resolved to their local account name (no domain part, similar to standard Unix names). 
Domain users and groups are strictly resolved to NameSamCompatible format - 
domain_short_name\user_name. All user/group based configuration rules need to adhere to this format. 

- Ex. for domain users and groups
  - `DenyUsers contoso\admin@192.168.2.23` : blocks contoso\admin from 192.168.2.23
  - `DenyUsers contoso\*`  : blocks all users from contoso domain
  - `AllowGroups contoso\sshusers` : only allow users from contoso\sshusers group
  - `AllowGroups "contoso\ssh users"` : only allow users from "contoso\ssh users" group
- Ex. for local users and groups
  - `AllowUsers localuser@192.168.2.23`
  - `AllowGroups sshusers`

**Note that user and group names are in lower case**

______
#### [AuthenticationMethods](https://man.openbsd.org/sshd_config#AuthenticationMethods)
Available authentication methods are "password" and "publickey".
______
#### [AuthorizedKeysFile](https://man.openbsd.org/sshd_config#AuthorizedKeysFile)
The default is “.ssh/authorized_keys .ssh/authorized_keys2”. If the path is not absolute, 
it is taken relative to user's home directory (or profile image path). Ex. c:\users\user.

From v7.7.2.2 on wards, following is the default location of AuthorizedKeysFile for 
all users in Administrators group

_%programdata%/ssh/administrators_authorized_keys_
______
#### [ChrootDirectory](https://man.openbsd.org/sshd_config#ChrootDirectory)
Support added in v7.7.0.0

This directive is only supported with sftp sessions. A remote session into cmd.exe 
wouldn't honor this. To setup a sftp-only chroot server, set ForceCommand to `internal-sftp`. 
You may also set up scp with chroot, by implementing a custom shell that would only allow scp and sftp. 
_____
#### [ForceCommand](https://man.openbsd.org/sshd_config#ForceCommand)
Enforced only on non-PTY sessions. To block PTY access, use 
[PermitTTY="no"](https://man.openbsd.org/sshd_config#PermitTTY) directive.
For certificate based ForceCommand, use [no-pty](https://man.openbsd.org/ssh-keygen#no-pty) option. 
_____
#### [GSSAPIAuthentication](https://man.openbsd.org/sshd_config#GSSAPIAuthentication)
Support for Kerberos authentication via GSSAPI is added in v7.9.0.0.
_____
#### [HostKey](https://man.openbsd.org/sshd_config#HostKey)

The defaults are :

    %programdata%/ssh/ssh_host_ecdsa_key
    %programdata%/ssh/ssh_host_ed25519_key
    %programdata%/ssh/ssh_host_rsa_key

If the defaults are not present, sshd will automatically generate these on a service start.
______
#### [Match](https://man.openbsd.org/sshd_config#Match)
Note that pattern rules in 
[this](https://github.com/PowerShell/Win32-OpenSSH/wiki/sshd_config#allowgroups-allowusers-denygroups-denyusers) 
section. User and group names should be in **lower** case.
______
#### [PermitRootLogin](https://man.openbsd.org/sshd_config#PermitRootLogin)
Not applicable in Windows. To prevent administrator login, use _Administrators_ with DenyGroups directive.
______
#### [SyslogFacility](https://man.openbsd.org/sshd_config#SyslogFacility)
If you need file based logging, use LOCAL0. Logs will be generated under %programdata%\ssh\logs.

Any other value, including the default value AUTH directs logging to ETW. For more info see 
[Logging Facilities in Windows](https://github.com/PowerShell/Win32-OpenSSH/wiki/Logging-Facilities).
______
#### Not supported

    AcceptEnv
    AllowStreamLocalForwarding
    AuthorizedKeysCommand
    AuthorizedKeysCommandUser
    AuthorizedPrincipalsCommand
    AuthorizedPrincipalsCommandUser
    Compression
    ExposeAuthInfo
    GSSAPICleanupCredentials
    GSSAPIStrictAcceptorCheck
    HostbasedAcceptedKeyTypes
    HostbasedAuthentication
    HostbasedUsesNameFromPacketOnly
    IgnoreRhosts
    IgnoreUserKnownHosts
    KbdInteractiveAuthentication
    KerberosAuthentication
    KerberosGetAFSToken
    KerberosOrLocalPasswd
    KerberosTicketCleanup
    PermitTunnel
    PermitUserEnvironment
    PermitUserRC
    PidFile
    PrintLastLog
    PrintMotd
    RDomain
    StreamLocalBindMask
    StreamLocalBindUnlink
    StrictModes
    X11DisplayOffset
    X11Forwarding
    X11UseLocalhost
    XAuthLocation


# wiki/sshd
========================================================

Listed here are Windows specific details that supplement or override the original sshd 
manual documented in [OpenBSD manual](https://man.openbsd.org/sshd). 

In Windows, sshd service can run under SYSTEM as service or run in interactive mode (typically as admin). 

Please see "Server side: run sshd in debug mode" at 
[Troubleshooting](https://github.com/PowerShell/Win32-OpenSSH/wiki/Troubleshooting-Steps) 
to run in interactive mode


# wiki/MSI Install Instructions
========================================================

## Prerequisites
1. Win32-OpenSSH Github releases can be installed on Windows 7 and up.
1. Note [these considerations](https://github.com/PowerShell/Win32-OpenSSH/wiki/Various-Considerations) 
   and [project scope](https://github.com/PowerShell/Win32-OpenSSH/wiki/Project-Scope) first.
1. Download the [latest](https://github.com/PowerShell/Win32-OpenSSH/releases/latest) 
   build of OpenSSH, selecting either the 32-bit or 64-bit MSI.

## Install Win32-OpenSSH using MSI

1. Run MSI Installer

    The MSI must be run in any command prompt (cmd.exe & pwsh.exe both work), 
    as it does not yet have a UI (coming soon).

    The MSI will install OpenSSH to the `ProgramFiles\OpenSSH` folder.  
    
    The commands to run, are as follows:
    * To install both the SSH Client & the SSH Server (default behavior)  
    `msiexec /i <path to openssh.msi>`
    * To install only the SSH Client  
    `msiexec /i <path to openssh.msi> ADDLOCAL=Client`
    * To install only the SSH Server  
    `msiexec /i <path to openssh.msi> ADDLOCAL=Server`
    * To uninstall only the SSH Client  
    `msiexec /i <path to openssh.msi> REMOVE=Client`
    * To uninstall only the SSH Server  
    `msiexec /i <path to openssh.msi> REMOVE=Server`

    ###  Examples:
    * Installing SSH Client & openssh.msi is in the working directory:  
    `msiexec /i openssh.msi ADDLOCAL=Client`
    * Installing SSH Server & openssh.msi is in C:\users\public\downloads\:  
    `msiexec /i C:\users\public\downloads\openssh.msi ADDLOCAL=Server`
    * Uninstalling SSH Client & openssh.msi is in the working directory:  
    `msiexec /i openssh.msi REMOVE=Client`
    * Uninstalling SSH Server & openssh.msi is in C:\users\public\downloads\:  
    `msiexec /i C:\users\public\downloads\openssh.msi REMOVE=Server`


2. Update SYSTEM PATH (Required for SCP and SFTP)

    Append the Win32-OpenSSH install directory to the system path, 
    by running the following command in an elevated PowerShell session:  
    `[Environment]::SetEnvironmentVariable("Path", [Environment]::GetEnvironmentVariable("Path",[System.EnvironmentVariableTarget]::Machine) + ';' + ${Env:ProgramFiles} + '\OpenSSH', [System.EnvironmentVariableTarget]::Machine)`

    To verify that the System Path variable was modified properly, the Environment Variables 
    can be viewed in Control Panel, under the Advanced tab. 

3. Verify OpenSSH Install

    Check the status of the SSH Service.  
    In PowerShell, run:   
    `Get-Service -Name ssh*`

## Uninstall Win32-OpenSSH using MSI
Similarly, the command to uninstall Win32-OpenSSH is as follows:  
``msiexec /x <path to openssh.msi>``

## Additional Documentation on msiexec
Further information on msi command-line options can be found 
[here](https://docs.microsoft.com/en-us/windows/win32/msi/command-line-options)

## Video recording
https://user-images.githubusercontent.com/23668037/159090480-fb40882f-bf52-4dd7-a6b2-f3536128ab82.mp4



# wiki/Install Instructions
========================================================

## Install using WinGet

Starting with GitHub Release 8.9.1.0, OpenSSH Beta releases are available through 
[WinGet](https://learn.microsoft.com/en-us/windows/package-manager/winget/). 

With WinGet installed on the machine, use the following commands:  
* Search: `winget search "openssh beta"`
* Install: `winget install "openssh beta"`
* Uninstall: `winget uninstall "openssh beta"`

## Install Win32 OpenSSH (test release)

1. Win32-OpenSSH Github releases can be installed on Windows 7 and up.
1. Note [these considerations](https://github.com/PowerShell/Win32-OpenSSH/wiki/Various-Considerations) 
   and [project scope](https://github.com/PowerShell/Win32-OpenSSH/wiki/Project-Scope) first.
1. Download the [latest](https://github.com/PowerShell/Win32-OpenSSH/releases/latest) build of OpenSSH.

To get links to latest downloads [this wiki page](https://github.com/PowerShell/Win32-OpenSSH/wiki/How-to-retrieve-links-to-latest-packages).
1. Extract contents of the latest build to `C:\Program Files\OpenSSH` 
   (Make sure binary location has the Write permissions to just to SYSTEM, Administrator groups. 
   Authenticated users should and only have Read and Execute.)
1. In an elevated Powershell console, run the following
    ```sh
    powershell.exe -ExecutionPolicy Bypass -File install-sshd.ps1`
    ```
1. Open the firewall for sshd.exe to allow inbound SSH connections
    ```sh
    New-NetFirewallRule -Name sshd -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22`
    ```

    Note: `New-NetFirewallRule` is for Windows 2012 and above servers only. 
    If you're on a client desktop machine (like Windows 10) or Windows 2008 R2 and below, try:

    ```sh
    netsh advfirewall firewall add rule name=sshd dir=in action=allow protocol=TCP localport=22
    ```

1. Start `sshd` (this will automatically generate host keys under %programdata%\ssh if they don't already exist)
    * `net start sshd`
1. Optional
    - To configure a default shell, 
       see [here](https://github.com/PowerShell/Win32-OpenSSH/wiki/DefaultShell)
    - To setup `sshd` service to auto-start 
      * `Set-Service sshd -StartupType Automatic`
    - To migrate sshd configuration from older versions (0.0.X.X), 
       see [here](https://github.com/PowerShell/Win32-OpenSSH/wiki/Migrate-sshd_config-from-older-versions)

## Uninstall Win32 OpenSSH

* Start Windows Powershell as Administrator
* Navigate to the OpenSSH directory
    * `cd 'C:\Program Files\OpenSSH'`
* Run the uninstall script
    * `powershell.exe -ExecutionPolicy Bypass -File uninstall-sshd.ps1`

[Secure file]: https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-win32-openssh
[build13]: https://github.com/PowerShell/Win32-OpenSSH/releases/tag/v0.0.13.0



# wiki/Retrieving download links for the latest packages
========================================================

Follow these PowerShell steps to retrieve links to the latest Win32-OpenSSH packages:

```sh
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$url = 'https://github.com/PowerShell/Win32-OpenSSH/releases/latest/'
$request = [System.Net.WebRequest]::Create($url)
$request.AllowAutoRedirect=$false
$response=$request.GetResponse()
$([String]$response.GetResponseHeader("Location")).Replace('tag','download') + '/OpenSSH-Win64.zip'  
$([String]$response.GetResponseHeader("Location")).Replace('tag','download') + '/OpenSSH-Win32.zip'
```



# wiki/SSH Usage Examples
========================================================


## Login With Password

1. Workgroup users
     * `ssh user@host`
2. Domain users: Prior to v7.7.0.0, domain needs to be explicitly specified. 
   Any of the following formats work
     * `ssh -l user@domain host`
     * `ssh domain\user@host`
     * `ssh user@domain@host`
     * `ssh user@host` (works from v7.7.0.0 onwards provided `user` has no conflicts otherwise - ex. 
       `user` exists both on local account data base and on domain)


## Login With SSH Keys

### Usage from client-side (`ssh`)

1. Generate a key pair on the client (preferably with a passphrase):
     * `ssh-keygen -t rsa -f id_rsa`
2. Register private key with ssh-agent (optional, for single sign-on experience)
     * `net start ssh-agent`
     * `ssh-add id_rsa` 
3. Login using private key
     * `ssh -i .\id_rsa user@host` (workgroup user)
     * `ssh -i .\id_rsa -l user@domain host` (domain user)

### Setup server-side (`sshd`)

1. Append contents of `id_rsa.pub` (client's public key) to the following file in corresponding 
   user's directory `%systemdrive%\Users\<user>\.ssh\authorized_keys` (create one if needed). 
2. Double check access permissions on authorized_keys (only System, Administrators and owner can have access).
`icacls %systemdrive%\Users\<user>\.ssh\authorized_keys`

## Login using Kerberos Authentication
### Setup server-side
1. On a domain joined server, set GSSAPIAuthentication to `yes` in sshd_config
2. If sshd_config is modified then restart the sshd service
     * `net stop sshd`
     * `net start sshd`


### Usage on a domain joined Windows client logged in as domain user

* `ssh -K host`

**Please note you have to use the hostname instead of the username.**

### For Unix and Linux users

The [Modern Unix Rosetta Stone](https://certsimple.com/rosetta-stone) 
includes PowerShell examples of common Unix and Linux commands. 

[Secure file]: https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-win32-openssh




# wiki/SFTP Usage Examples
========================================================

## Setup `sftp-server` on host

* Add location of sftp-server.exe binary as a subsystem in sshd_config file by adding this entry:
    * `Subsystem       sftp    sftp-server.exe`
* Restart sshd.exe
    * `Restart-Service sshd`
* `sftp-server` will now be started automatically by `sshd` when an SFTP client connects to the host

## Using `sftp.exe`

This example connects to the local machine (`localhost`) as the user `test1`, and downloads/uploads some files.

```sh
sftp test1@localhost                  //login to local machine using test1 username
sftp -i .ssh/id_rsa test1@remotehost  //login using .ssh/id_rsa public key pair
pwd                                   //show current remote directory
lpwd                                  //show current local directory
cd /tests                             //changed to remote directory c:/tests
get file1.txt                         //download file1.txt from remote system to local directory
put file2.txt                         //upload the file to remote system from the current local directory
exit
```


# wiki/Using Certificate Authentication
========================================================

#### Setup SSHD server for certificate based user authentication
- Generate CA keys (just like any other keys)
  - `ssh-keygen -t rsa -f ca_userkeys`
- Register above key as trusted CA for sshd. Add following entry in sshd_config
  - `TrustedUserCAKeys ca_userkeys.pub`
  - Path above is relative to sshd binaries directory. Absolute path is recommended to avoid confusion
- Prior to v7.7.0.0, check out [#1055](https://github.com/PowerShell/Win32-OpenSSH/issues/1055) 
  for considerations while working with domain accounts. 

At this point, server can accept any user certificates signed using ca_userkeys and there is 
no need to explicitly map user keys in authorized_keys

#### Signing user keys
- sign user keys using ssh-keygen
  - `ssh-keygen.exe -s ca_userkeys -I cert_identity -V -1w:+54w5d -n username id_rsa.pub`
  - `username` should match the user to be authenticated



# wiki/Fix SSH file permissions
========================================================

Various OpenSSH resource files are integral to secure working of both server and client stacks. 
Here we discuss how to protect these resources, how OpenSSH for Windows enforces permission 
checks and individual case studies on how to fix any permission related issues. 

Improper file permissions will likely result in a broken configuration (OpenSSH fails to work). 
Here, you'll find icacls based commands to fix such issues.

2 fundamental reasons leading to the differences between how these permission checks work on Unix vs Windows:
- SuperUser on Unix maps to either 
  [System (SY)](https://msdn.microsoft.com/en-us/library/windows/desktop/ms684190(v=vs.85).aspx) or 
  AdministratorsGroup (AG) on Windows. 
- Permission controlling in Windows is more granular than in Unix. 


Its important to understand the distinction between "AdministratorsGroup" and an admin user. 
A logged on admin user would typically run processes in 
[non-elevated](https://msdn.microsoft.com/en-us/library/windows/desktop/dn742497(v=vs.85).aspx) mode. 
Even though an admin user is part of AG, these non-elevated processes **do not have authority** 
to access resources that are locked only to AG. 

Any misconfigured permissions would manifest as an attention seeking log entry. 
Ex. if a private key is not protected, you'll see the following:

```sh
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for 'ssh_host_dsa_key' are too open.
```

## Server side resources
### Host private key files
Host keys represent host's identity. To prevent unauthorized access to these files, host keys 
need to be owned by SY or AG. No other user should have access to host key files. Following 
is a misconfigured host private key because 'otheruser' owns it and has access to the key. 

```sh
PS C:\>(get-acl .\ssh_host_dsa_key).owner
otheruser
PS C:\>icacls .\ssh_host_dsa_key
ssh_host_dsa_key   NT AUTHORITY\SYSTEM:(F)
                   BUILTIN\Administrators:(F)
                   otheruser:(R) 
```
Steps to fix these permissions

```sh
PS C:\>icacls .\ssh_host_dsa_key /setowner system
PS C:\>icacls .\ssh_host_dsa_key /remove otheruser
```
At this point, you could do the following to replicate these permissions onto other host keys

```sh
PS C:\>get-acl .\ssh_host_dsa_key | Set-Acl ssh_host*key
```
### authorized_keys
authorized_keys is an user associated file that represents a list of authorized public keys 
that could be used for (key-based) user authentication. Unauthorized access to this file 
compromises the associated user's account. This file should not be owned by, nor provide 
access to any other user. 

Following is a misconfigured authorized key because 
- 'otheruser1' has access to the file (through inheritance) 
- 'otheruser2' has access to this file (explicit permission). 

```sh
PS C:\>(get-acl .\users\thisuser\.ssh\authorized_keys).owner
thisuser
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys
ssh_host_dsa_key   BUILTIN\Administrators:(F)
                   thisuser:(F) 
                   otheruser1:(IR)
                   otheruser2:(R)
```
Steps to fix these permissions - remove inheritance and inherited permissions

```sh
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys /inheritance:r
PS C:\>icacls .\users\thisuser\.ssh\authorized_keys /remove otheruser2
```
### administrators_authorized_keys
Default location for authorized keys file for users in administrators group is 
`%programdata%\ssh\administrators_authorized_keys`
This file should only be accessible by SYSTEM and Administrators group.

Steps to fix permissions on this file:

```sh
PS C:\>icacls administrators_authorized_keys /inheritance:r
PS C:\>icacls administrators_authorized_keys /grant SYSTEM:`(F`)
PS C:\>icacls administrators_authorized_keys /grant BUILTIN\Administrators:`(F`)
```


## Client side resources
### User private key files
User's private keys are user's credentials. To prevent unauthorized access to these files, 
private keys need to be owned by the user and no other user should have access to user's key files.

### ssh_config
User level default ssh_config is located in user's profile (~/.ssh/config). This has 
similar restrictions as the user's private keys described above.  



# wiki/Info on SSH remote sessions on Windows
========================================================

Win32-OpenSSH currently supports password and key based authentication. Both local (workgroup) 
and domain accounts are supported. For domain accounts it is necessary to specify the domain 
as part of user name. See [wiki](https://github.com/PowerShell/Win32-OpenSSH/wiki/ssh.exe-examples) 
for different supported formats. 

### Double Hop differences between password and keybased auth

-   A remote session opened via password authentication has the user credentials attached to it 
    and hence is capable of outbound authentication as the user. 

-   A remote session opened via key based authentication does not have associated user credentials 
    and hence is **not** capable of outbound authentication as the user. This is by design and 
    goes by the rules of standard Windows security. 



# wiki/TTY PTY support
========================================================

On Windows 10+ and Windows server 2019+, OpenSSH uses the features provided by console. 
OpenSSH ssh client uses console ability to parse the incoming VTSequence from ssh server. 
On the server side, OpenSSH sshd server component uses 
[conpty support](https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/) 
provided by the Microsoft console team. If you are using downlevel OS 
(_Windows 10 / Windows server 2019 below OS version_) 
then please be aware of some restrictions listed below.


# SETUP

## Windows SSH client to Linux/Unix/macOS (Unix) SSH server 
 
If you want to have the best experience while using utilities like vi, top, man, etc. 
while connected from a Windows SSH client to a Unix server, you should configure 
your terminal to use an xterm-like rendering mode.

Unfortunately, this rendering mode is only included with Windows 10. If you're not on 
Windows 10, you may have more luck using a third-party terminal emulator or console 
host like [Cmder](http://cmder.net/) or [ConEmu](https://conemu.github.io/).

1. Open a shell from which you want to use `ssh` (either `powershell` or `cmd`).
1. Right-click the application icon in the upper-left and the window and select `Properties`.
1. Ensure that `Use legacy console (requires relaunch)` is unchecked:

   ![image](https://cloud.githubusercontent.com/assets/23668037/23882278/cc062726-081c-11e7-8e4c-792da6af23b9.png)    
1. In the `Layout` tab, set the Screen Buffer width and Window Size width to >= 90:

   ![image](https://cloud.githubusercontent.com/assets/23668037/23882328/11ed4116-081d-11e7-87e0-757680ea3a74.png)

   All of these changes will persist within the same shortcut to `cmd` or `powershell`.
   If you want to change the defaults for *new* shortcuts, select `Defaults` in Step 2 instead of `Properties`.
1. Set the `TERM` environment variable to `xterm`:

   ```sh
   set TERM=xterm 
   ```
   
   In PowerShell you can also use the `$env:` namespace to edit this variable:
   
   ```sh
   $env:TERM = 'xterm'
   ```
   
   Both of these methods will only persist for the current session.
   If you want this to happen every time you start PowerShell, you can leverage 
   [PowerShell profiles](https://msdn.microsoft.com/en-us/powershell/reference/5.1/microsoft.powershell.core/about/about_profiles).

   If the TERM environment variable is not found then the SSH client code sets the TERM as 
   'xterm-256color' for the duration of SSH session.

## Linux/Unix/macOS SSH client to Windows SSH server

1. Set the `TERM` environment variable to `xterm`:
   ```bash
   export TERM=xterm
   ```

## Windows SSH Client to Windows SSH server

1) Set the non-legacy console mode in the console properties,   
   Make sure you **uncheck** the "use legacy console"   
![image](https://cloud.githubusercontent.com/assets/23668037/23882278/cc062726-081c-11e7-8e4c-792da6af23b9.png)    

2) Set the Screenbuffer width, window size width to >= 90.   
![image](https://cloud.githubusercontent.com/assets/23668037/23882328/11ed4116-081d-11e7-87e0-757680ea3a74.png)

3) If your windows client machine is **windows 10 or above** and if you have any issues,   

   a) exit the current ssh session (if any)     

   b) set the environment variable SSH_TERM_CONHOST_PARSER to 0  

     ```sh
       c:\test\> set SSH_TERM_CONHOST_PARSER=0    
       c:\test\> set SSH_TERM_CONHOST_PARSER (This should show "0")         
     ```

   c) start a new ssh session.    

   d) if you are NOT able to reproduce then it is the windows 10 console issue. Please let us 
   know by filing an issue, so that we will update the known issues. FYI, the fix should 
   come from the windows 10 console team but not from the SSH team.    

   e) if you are able to reproduce then file an issue.    


## Known windows 10 console issues (These will be fixed by the windows console team)
### When connected to unix ssh server   
a) vim command, intermittently the file is opened in the Replace mode.     
b) top command, clears the previous screen contents.    
c) window resize is not supported because of a bug in conhost.exe
  (conhost.exe is a windows 10 module to parse ANSI sequences).

### When connected to windows ssh server and using powershell    
a) while executing an unknown command (abcdef) in the powershell, the last line 
( + FullyQualifiedErrorId : CommandNotFoundException) is not displayed on the console

# Implementation details
## PTY
Windows versions before Windows 10 1809 did not have built-in support for a 
[pseudoterminal](https://en.wikipedia.org/wiki/Pseudoterminal). 

Windows version of OpenSSH server implements a [VT100](https://en.wikipedia.org/wiki/VT100) 
PTY by intercepting [Windows Console](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682055(v=vs.85).aspx) 
events. This is implemented in ssh-shellhost.exe, connected to sshd via 
[std i/o](https://en.wikipedia.org/wiki/Standard_streams). 
At a high level, ssh-shellhost.exe acts as an intermediary between sshd and a 
Windows console applications performing the following: 

  - interprets incoming VT100, processes and calls Windows Console IO
  - processes Windows Console (output) event queue, translates them to 
    [VT100](https://en.wikipedia.org/wiki/VT100) and spits out on stdout.

## TTY
Windows console previously did not have the capability to process any incoming terminal 
control codes. Support for xterm is added in Windows 10. 

To support downlevel platforms (down till Windows 7), a [VT100](https://en.wikipedia.org/wiki/VT100) 
interpreter is implemented in Windows OpenSSH client (ssh.exe) to support typical TTY scenarios. 
Although this works well when talking to Windows targets, there are limitations and known 
issues when dealing with interactive applications on Unix like top, vi, etc. 


If you are using the openssh client,  

  a) Windows 10+ OS then windows console (cmd.exe/powershell) has the support to interpret 
  the VT sequences received from the SSH server. We simply pass the raw VT sequences 
  to the console (cmd.exe/powershell). If you are facing any issues then it should be 
  fixed by the windows console team.   

  If you want to use the inbuilt [VT100](https://en.wikipedia.org/wiki/VT100) ANSI parser 
  (that's part of the openssh client) then set the environment variable "SSH_TERM_CONHOST_PARSER" to 0.

  b) Prior versions of windows 10 OS, the raw VT sequences will be parsed by the inbuilt 
  [VT100](https://en.wikipedia.org/wiki/VT100) ANSI parser that's part of the ssh.exe. 
  We have fixed most of the issues. We have no plans to extend to VT100+ sequences. 
  After 9999 you will have to refresh the screen, otherwise the data will only be rendered on the last line.  

  If you want support for the VT100+ sequences then please upgrade to windows 10+ OS
  or use the third party tools like putty, Cygwin, etc.

## Testing  
We have tested different scenarios,   
1) Windows client (cmd.exe / powershell) to windows server   
2) Windows client (cmd.exe / powershell) to Linux server   
3) Linux client to windows server   
4) Third party ssh tools like putty/Cygwin to windows server   

While making any terminal code changes, please make sure below manual test cases are passed
1) All the arrow key functions should work properly (up, down, left and right arrows).
2) The backspace, delete, home, end functions keys should work properly.
3) "cls" should clear only the visible window (windows 10+ OS) / should clear entire buffer (prior versions of windows 10 OS).
4) When connected to unix ssh server, the basic commands like vi, top, man, clear, etc should work properly.    


# wiki/Troubleshooting
========================================================

See [Logging Facilities](https://github.com/PowerShell/Win32-OpenSSH/wiki/Logging-Facilities) 
to modify logging location.

See if you have the right [file permissions][permissions] set. 

[permissions]: https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-Win32-OpenSSH

Troubleshooting steps for typical service startup and connection issues:

* If you see connection getting reset right after sending SSH2_MSG_KEXINIT, 
  see if [this](https://github.com/PowerShell/Win32-OpenSSH/issues/1027) may help. 

* Server side: run `sshd` in debug mode
  * `Stop-Service sshd` (if sshd service is running)
  * `sshd.exe -d` This will run sshd in interactive mode under currently logged on user 
    (typically as admin). Note that, in this mode, you can only login as the 
    "currently logged on user" and only using "key based auth". To overcome these restrictions, 
    you should instead run `psexec -s sshd.exe -d` to run sshd as SYSTEM.
  * This will dump debug logs in real time to stdout on the console
  * You can also add additional `d`s for more detailed loggin:
    * `sshd.exe -dd` or `sshd.exe -ddd`
* Client side: start `ssh` in verbose mode
  * `ssh.exe -v ...`
  * This will dump verbose logs in real time to stdout on the console
  * You can also add additional `v`s to get more verbose messages:
    * `ssh.exe -vv ...` or `ssh.exe -vvv`

Troubleshooting more complex issues:
* Server side
  * Stop `sshd`
    * `Stop-Service sshd`
  * Delete `sshd.log` and `ssh-agent.log` (under %programdata%\ssh\logs)
  * Set the following in `sshd_config`
    * `SyslogFacility LOCAL0`
    * `LogLevel` to `DEBUG` (or `DEBUG2`/`DEBUG3` for higher levels of logging)
  * Rerun the workflow that's giving you problems. `logs\sshd.log` will contain `sshd` related traces.
  * If the problem isn't clear, please post these logs along with some steps to help us reproduce 
    your problem in [our GitHub Issues](https://github.com/powershell/Win32-OpenSSH/issues).
* Client side
  * Set `LogLevel` to `DEBUG` (or `DEBUG2`/`DEBUG3` for higher levels of logging) in `ssh_config`. 
  * Run `ssh.exe` in verbose mode as detailed above

[Secure file]: https://github.com/PowerShell/Win32-OpenSSH/wiki/Security-protection-of-various-files-in-win32-openssh


# wiki/Project Status
========================================================

**As of Nov 1st 2016, active development on Win32 fork is being done in https://github.com/PowerShell/openssh-portable.**

This repo (https://github.com/PowerShell/Win32-OpenSSH) is being maintained to keep 
track of releases and issues. Win32-OpenSSH will be deprecated once changes in
PowerShell/openssh-portable are integrated back into openssh/openssh-portable.

Win32-OpenSSH is shipped as FOD (Feature On Demand) in Windows 10 fall creator update. 
For more information, please visit our 
[official blog](https://blogs.msdn.microsoft.com/powershell/2017/12/15/using-the-openssh-beta-in-windows-10-fall-creators-update-and-windows-server-1709/).

Refer to project scope [here](https://github.com/PowerShell/Win32-OpenSSH/wiki/Project-Scope)

#### Work in progress
 - Following up on minor issues identified via penetration testing. 
 - Conversation with upstream community - seeking their feedback and evaluating integration plans. 
   PR posted [here](https://github.com/openssh/openssh-portable/pull/63). 
   Contentious areas of logic identified and refactoring work to converge Unix and Windows code is in progress.

#### High level tasks completed
 - POSIX compliant IO wrapper on Win32 Overlapped IO: 
    this enables Unix based OpenSSH code to work for and on Windows. 
 - Visual Studio 2015 solution to build OpenSSH for Windows.
 - Secure architecture for Windows: OpenSSH server side architecture is altered for Windows 
    adhering to its security principles. This is done with minimal impact to overall source layout. 
 - Secure ssh-agent: A different version of agent is authored for Windows to fit 
    Windows security model and enable a Single Sign-On experience. 
 - VT100/ANSI TTY and PTY: Rewritten client side ANSI parser to accurately interpret and 
    render VT100 stream on Windows console. Server side VT100 PTY that will support rich 
    Windows console applications. Due to missing dependencies on Nano, 
    this feature is only supported on full SKUs. 
 - Unicode support in Windows: Windows APIs are typically UTF-16 based while on Unix, 
    its UTF-8. All ssh binaries on Windows can now take in Unicode arguments, 
    support Unicode (UTF-8) based configuration, key and log files, 
    accurately encode file names going over SCP and SFTP.
 - POSIX File API support in Windows: SFTP and SCP code is cleaned up 
    to effectively use original OpenSSH code on Windows.  
 - Syncing Win32 fork with the latest changes from OpenSSH main repo. 
    Windows fork is being maintained up-to-date with upstream repo.
 - Code cleanup and refactoring - Common OpenSSH code is cleaned up and ready to take upstream. 
    Changes in [this](https://github.com/PowerShell/openssh-portable/tree/latestw) 
    branch are ready for community feedback. 
 - Automated build and validation system - automated Windows builds, unittest and E2E test runs is now enabled.
 - Evaluated Microsoft CNG support in OpenSSH. Since this requires significant crypto 
    interface refactoring, its decided to switch to LibreSSL (in place of OpenSSL). 
 - Improved overall test coverage on Windows. Pester based E2E coverage is still pretty minimal 
    compared to bash scripts based coverage on Unix. Plan is to progressively add more coverage 
    going forward. Any contributions here are very welcome. 
 - Initial [Penetration Testing OpenSSH](https://blogs.msdn.microsoft.com/powershell/2017/05/01/openssh-security-testing-kick-off/) done. 



# wiki/Project Scope
========================================================

Intent of this project is to get to a state that can converge to and integrate into 
OpenSSH's main repo. To simplify this integration, following features have been scoped 
out and will not work on Windows yet:

- VerifyHostKeyDNS
- Client ControlMaster
- Background ssh execution mode
- VPN forwarding
- X11 forwarding
- PKCS based smart cards
- Host based authentication
- Authentication forwarding
- Compression
- AuthorizedKeysCommand
- AuthorizedPrincipalsCommand
- Bind Interface, i.e. `ssh -B` (note: Bind Address, i.e. `ssh -b` _is_ supported)

(Windows specific feature/work items)
- MINGW build support
- Use MS CNG (instead of OpenSSL)
- Key management using MS CNG
- Xterm, VT220 terminal modes

If you are looking for a specific feature not in above list and not in 
[here](https://github.com/PowerShell/Win32-OpenSSH/labels/feature%20request), 
feel free to add it [issue list](https://github.com/PowerShell/Win32-OpenSSH/issues).



# wiki/Area Owners
========================================================

|Area|Owner|
|----|-----|
|Area-Logging/Diagnostics| ManojAmpalam |
|Area-Port Forwarding| ManojAmpalam |
|Area-SCP| Bingbing8 | 
|Area-SFTP| bagajjal |
|Area-ssh-agent| ManojAmpalam |
|Area-Terminal experience| bagajjal  |
|Area-Core | ManojAmpalam |

# wiki/Design Details
========================================================

Intro
-----
[OpenSSH](https://en.wikipedia.org/wiki/OpenSSH), part of OpenBSD operating system, 
is a bunch of utility programs based on [SSH](https://en.wikipedia.org/wiki/Secure_Shell) protocol. 
These include server and client executables as well as utilities to create and manage cryptographic keys. 
[Portable OpenSSH](http://www.openssh.com/portable.html) is derived from the OpenBSD project 
and ported to support a wide variety of Unix flavors. The goal of this project is to extend support 
to Windows family of operating systems and be able to do this in a common repository 
without needing a Windows specific fork. 

Relevant design details in the context of this project -     
OpenSSH and the portable version are single threaded applications, 
interacting with IO using POSIX based [File Descriptors](https://en.wikipedia.org/wiki/File_descriptor) 
and multiplexing IO operations using [select](https://en.wikipedia.org/wiki/Select_%28Unix%29) calls. 
Session isolation and [privilege separation](http://www.citi.umich.edu/u/provos/ssh/privsep.html) 
are implemented using the standard UNIX routines - 
[fork](https://en.wikipedia.org/wiki/Fork_(system_call)), 
[setuid](https://en.wikipedia.org/wiki/Setuid), 
[chroot](https://en.wikipedia.org/wiki/Chroot). 
IPC is carried over [UNIX domain sockets](https://en.wikipedia.org/wiki/Unix_domain_socket). 


Goals
-----
As stated earlier, the main goal is side by side Windows support in the portable version of OpenSSH. 
The project is currently being worked on a fork of OpenSSH7.1p1 - here after, 
called windows-fork code and main code respectively. The plan is get this fork to a state 
that could integrate into the latest version in main, with minimum impact to main sources. 
Obviously, we would want to reuse the main code as much as possible, whilst respecting 
the fundamental differences between Unix and Windows operating systems. 

Guidelines
-----------
To prevent any regressions in main and to enable easier review of the changes coming from 
win32-fork, there will be no "main" code moving or refactoring in windows-fork. 
There are multiple places where platform abstraction makes sense (auth, console to name a few), 
but this wont be addressed in the fork as it would lead to significant code churn. 
This will be done post integration once we have stable Windows supported version with 
significant test coverage living in main repo. Coding style will follow 
[OpenBSD guidelines](http://www.openbsd.org/cgi-bin/man.cgi/OpenBSD-current/man9/style.9?query=style&sec=9).

Design details
-------------
Here, we'll discuss the design choices aimed at keeping majority of code base common 
between Unix and Windows, deviating where deemed necessary.

### POSIX IO
POSIX IO calls are a significant part of OpenSSH code. A POSIX IO wrapper will be implemented 
on top of Win32 async File IO. This wrapper strictly implements the POSIX IO needs of OpenSSH 
keeping the code differences, especially in the transport layer, to a minimum. 
Note that the wrapper implements only the calls needed by OpenSSH 
(and not all defined in POSIX standard). Specifically, the wrapper implements

+   IO calls creating file descriptors - open, creat, socket, accept, socketpair, pipe
+   operations on a single file descriptor - fd_set, FD_* macros, fcntl, read, write, recv, send, fstat, fdopen, close, dup and dup2
+   operations on multiple file descriptors - select
+   signal semantics on these operations - ex. select (or any blocking IO call) returning EINTR
+   Apart from these, the wrapper also bridges the gap in using POSIX signals. Details below.

Design summary of POSIX wrapper

+   Single threaded (not thread safe based on current needs but can be made so if needed going forward). 
+   Maintains file descriptor table and its state. Table stores mapping between file descriptors (int) 
    and associated Windows IO state (handle, buffers, async call state, etc). 
+   fd_set implemented as a bit array, lowest available file descriptors get allocated first.
+   Calls underlying Win32 APIs that provide [Overlapped](https://en.wikipedia.org/wiki/Overlapped_I/O) semantics. 
+   "select" and blocking IO calls go through a common "wait_for_any" function that wakes up on
    - IO completions
    - Signals
    - Timers
+   All underlying Win32 IO API calls are made asynchronous (non-blocking). Blocking semantics 
    are implemented within the wrapper by an explicit "wait_for_any" for IO to complete.
+   FD_CLOEXEC is supported, setting this flag denies inheritance of underlying Windows handle. 
+   Uses [APCs](https://msdn.microsoft.com/en-us/library/windows/desktop/ms681951(v=vs.85).aspx) 
    wherever available and minimzing use of 
    [events](https://msdn.microsoft.com/en-us/library/windows/desktop/ms682655(v=vs.85).aspx). 
    This simplifies code and has performance benefits.
+   Maintains internal buffers to accommodate a fundamental underlying difference between 
    POSIX and Win32 IO async models - IOReady Vs IOComplete (Ex for a Read operation, 
    POSIX APIs signal when IO is ready - data will be subsequently explicitly read, 
    Win32 APIs signal when IO has completed - data is already copied to a user provided buffer. 
    Though the internal buffer and additional copy may seem to be a performance hit, 
    a validation exercise did not show any major impact. It in fact proved beneficial in reducing 
    kernel calls during "read"s (ex. reading a header, would fetch the entire packet in a single call). 
+   Maintains Interrupt queue and interrupt handler mapping table. Queue is maintained to temporarily 
    hold interrupts that are otherwise supported in Windows but handled in a different approach 
    typically in a different thread. Ex SIGINT, SIGWINCH. These are processed inside of "wait_for_any" 
    in the main thread. On processing any queued interrupt, this function will return SIGINT.
+   Details on different interrupts handled by OPENSSH code and how they will be handled in Windows

    | Signal | Detail |
    |:-------|:-------|
    | SIGINT   |Windows invokes its Ctrl+C handler on a different thread, that handler queues the interrupt in the internal queue and schedules an APC on main thread |
    | SIGWINCH |Like Ctrl+C, a console windows size change event is captured in a native handled, queued and processed in one of the blocking calls |
    | SIGILL, SIGTERM, SIGQUIT, WJSIGNAL,SIGTTIN, SIGTTOU, SIGHUP | Not generated in Windows, these may be defined by handlers will never be invoked |
    | SIGCHLD | Implemented by listening (WaitForAnyObject) on child process handles |
    | SIGTSTP | See SIGINT |
    | SIGPIPE | Implemented by scheduling an APC call back |
    | SIGALARM | implemented internally inside the wrapper. handler automatically called when native timer set by CreateWaitableTimer expires |

+ Additional details on underlying Win32 calls used

    | POSIX IO call  |  Underlying Win32 IO call(s) | Additional details |
    |:-----|:-----|:-----|
    | accept | AcceptEx | No APC semantics so, explicit event used for async IO   |
    | connect | ConnectEx | No APC semantics so, explicit event used for async IO |
    | send | WSASend |  |
    | recv | WSARecv |   |
    | open | CreateFile |   |
    | creat | CreateFile |  |
    | pipe | CreateNamedPipe  | A uni directional named pipe with and internal name is created, CreateFile called to connect from other end  |
    | read | ReadFileEx |   |
    | write | WriteFileEx |   |
    | dup, dup2 | SetStdHandle | only supported on standard IO file descriptors (used for IO redirection) |
    | setitimer | CreateWaitableTimer |

#### fork()
There is no easy fork() equivalent in Windows. Instead posix_spawn is implemented and used instead. 
This will result in additional code to accommodate the underlying differences between two calls. 
More details around the following logic below will be added soon. 

+ Session isolation: 
+ Privilege separation:  
+ sftp and scp: 


#### AF_UNIX domain sockets
Unix domain sockets are used for IPC communication between processes on the same host. 
Apart from providing stream/datagram modes, they also support a secure way to transmit 
ancillary data (like file descriptors). The only place ancillary data is used in OpenSSH is in 
"ProxyUseFDPass" feature where a proxy command is issued by ssh client to create a 
connected socket, and its FD is transmitted back over IPC. This feature will be disabled on Windows. 
The rest of the places AF_UNIX sockets are used:

+   ControlMaster - used to multiplex multiple sessions over a single SSH connection. 
    This feature passes on ancillary data (file descriptors) over the socket connection.
+   SSHAgent - used to managed store keys and crypto validation based on those. 
    SSH agent and key management for Windows are discussed later in this document.
+   Local Socket Forwarding - This is forwarding traffic to AF_UNIX sockets.
+   SSHD rexec - Not applicable for Windows. SSHD will be implemented as Windows service, 
    that can be configured for auto restart.
+   SSHD from inetd - Not applicable for Windows. 

AF_UNIX channel will be implemented using secure bidirectional named pipes in Windows. 
Support for ancillary data will be added at a later time to support ControlMaster. 

#### Security model in Windows
SSHD will be implemented as a Windows service. The overall architecture is similar to Unix. 
SSHD listener runs as System with trusted computing base (TCB)  privileges (equivalent to root on Linux), 
spawns a worker to process and incoming connection. The worker acts as a privileged monitor, 
further spawning an unprivileged child (running as "sshd") to process unauthenticated network data. 
Once the connection is authentication, unprivileged child exits, and the privileged monitor 
spawns one more worker running in the context of the authenticated user.  

ssh-agent will be reimplemented for Windows as a Windows service, running as LocalSystem. 
Unlike in Unix, ssh-agent will listen on a known static IPC port. This is done as a security 
measure to protect ssh-agent port from hijack/spoof attacks. It serves the following 
"key-agent" requests that need be processed at SYSTEM privilege level:

+   Register a host key - All host keys, to be used by ssh deamon for host authentication can
    be securely registered with ssh-agent.  The registration process will be similar to ssh-add 
    usage in Unix. Host keys will be internally encrypted using DPAPI using OS System account.
+   Register a user key - User keys, can be securely one-time registered with ssh-agent 
    for a single sign-on experience. These keys are DPAI encrypted using user's password 
    and ACL'ed as SYSTEM only. This ensures that malware running under user's context 
    can never steal key material.
+   Delete a host or a user key - Similar to ssh-add usage in Unix. 
+   signature generation and validation - using a registered key. 

End result of authentication in Windows is a Windows user token (if authentication succeeds).
SSH sessions that need client user capabilities are hosted in processes running under the 
context of client user (launched using CreateProcess(user_token)). Ex. cmd.exe for terminal session, 
sftp_server.exe for sftp session and scp.exe for scp session.

This means that in order to login via ssh, one needs to have a valid Windows account on the target.
If user profile does not exist, it gets created upon first logon via ssh. This would typically 
(in default sshd configuration) be via password based authentication 
(since profile does not exist for authorized_keys to be placed).



# wiki/Building Win32-OpenSSH on Windows (w/ LibreSSL)
========================================================

#### Download Latest Source
  - git clone https://github.com/PowerShell/openssh-portable
  - git checkout latestw_all

#### Building OpenSSH for Windows Using Visual Studio [*Recommended*]
  - Download and Install Visual Studio - [latest install here](https://visualstudio.microsoft.com/downloads/). 
    - If using the Visual Studio installer, select the following:
      - Desktop Development with C++ Workload
      - Windows 11 SDK 10.0.22621.0 Individual Component
      - MSVC 143 Build Tool(s) Individual Component(s) - 
        up to 3 depending on which architecture(s) will be built: x86/x64, ARM, ARM64 
      - MSVC 143 Spectre-Mitigated Lib(s) Individual Component(s) - 
        up to 3 depending on which architecture(s) will be built: x86/x64, ARM, ARM64

    - Confirm the selections look something like this: 
![Visual Studio Installer GUI](https://github.com/PowerShell/Win32-OpenSSH/assets/14894321/1966b3df-2c42-4eb6-a8b1-dad3bc84d095)

     - Confirm the Desktop Development with C++ Kit was installed properly by checking 
       `${env:ProgramFiles}\Microsoft Visual Studio\*\*\VC\Auxiliary\Build` 
       for a `vcvarsall.bat` file, as shown in the image below: 
![C++ Development Kit Folder Location](https://github.com/PowerShell/Win32-OpenSSH/assets/14894321/f27bf4cd-70fd-4c48-847c-41cf5cf4b0aa)

- Install Windows SDK 10.0.22621.0 during Visual Studio install, or download from 
    [here](https://developer.microsoft.com/en-us/windows/downloads/sdk-archive/)
     - Confirm the SDK was installed properly by checking `${env:ProgramFiles(x86)}\Windows Kits\10\Bin` 
     for a `10.0.22621.0` folder, as shown in the image below: 
![Windows 10 SDK Folder Location](https://github.com/PowerShell/Win32-OpenSSH/assets/14894321/fbde27f5-3f2e-4ded-9733-61b1279f06ac)

- Confirm the Build Tools were installed properly by checking 
    `${env:ProgramFiles}\Microsoft Visual Studio\2022\*\MSBuild\Microsoft\VC\v170` 
    for a `Microsoft.Cpp.Default.Props` file, as shown in the image below: 
![Microsoft Build Tools 2022 Folder Location](https://github.com/PowerShell/Win32-OpenSSH/assets/14894321/4e8b0f24-2ef1-4d4a-8c60-b580d425fe89)

- Open `contrib\win32\openssh\Win32-OpenSSH.sln` in Visual Studio, if prompted ensure 
    platform toolset is set to "no upgrade" and Windows SDK is set to "10.0.22621.0" 

- If necessary, change the configuration and architecture from the middle toolbar

- Build the Win32-OpenSSH binaries

- Note: after the first build of a configuration & architecture or if a new libcrypto version 
    is being pulled in, the corresponding `libcrypto.dll` needs to be copied from 
    `\contrib\win32\openssh\libressl\bin\desktop\{Architecture}\` to 
    `.\bin\{Architecture}\{Configuration}`
     - Binaries will be in a `\bin\{Architecture}\{Configuration}` folder, 
     as shown in the image below for an x64, Debug build:
![OpenSSH Binaries Folder Location](https://user-images.githubusercontent.com/14894321/155556691-3573b5df-8295-4815-9543-a8e38e78b5fa.png)


#### Building OpenSSH for Windows Using Build Script
In Powershell:
  - cd repository-root
  - ipmo .\contrib\win32\openssh\OpenSSHBuildHelper.psm1 -Force
  - Start-OpenSSHBuild -Configuration <Release|Debug> -NativeHostArch <x64|x86|ARM|ARM64>

#### Deploying OpenSSH for Windows
  - Start-OpenSSHPackage -Configuration <Release|Debug> -NativeHostArch <x64|x86|ARM|ARM64>
  - Above generates Zipped binary and symbols payload. Follow further installation instructions 
    [here](https://github.com/PowerShell/Win32-OpenSSH/wiki/Install-Win32-OpenSSH).


# wiki/VS 2015 Build Instructions
========================================================

**Deprecated as of August 2023 by https://github.com/PowerShell/openssh-portable/pull/677.** 

**Please see 
https://github.com/PowerShell/Win32-OpenSSH/wiki/Building-OpenSSH-for-Windows-(using-LibreSSL-crypto) 
for up-to-date instructions.**

#### Building using Visual Studio 2015

Download and Install VS 2015 [Community Edition](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx)  

Clone https://github.com/PowerShell/openssh-portable

Download the latest PowerShell LibreSSL 
[release](https://github.com/PowerShell/LibreSSL/releases/tag/V2.6.4.1) 
and copy LibreSSL folder to $openssh-portable\contrib\win32\openssh.

Open "contrib\win32\openssh\Win32-OpenSSH.sln" in Visual Studio and continue building Win32-OpenSSH binaries

If you see crt headers related errors on recompilations, try deleting the following file, 
and do a clean build subsequently

contrib\win32\win32compat\inc\crtheaders.h



# wiki/Running Pester tests
========================================================

## Build OpenSSH: (skip these steps if you’ve already done)

```sh
Import-Module C:\git\openssh-portable\contrib\win32\openssh\OpenSSHBuildHelper.psm1 -Force
Start-OpenSSHBuild -Configuration Debug -NativeHostArch x64
```

## Run OpenSSH E2E Tests:

```sh
Import-Module C:\git\openssh-portable\contrib\win32\openssh\OpenSSHTestHelper.psm1 -Force
Set-OpenSSHTestEnvironment -Confirm:$false -OpenSSHBinPath c:\openSSH
Invoke-OpenSSHE2ETest
```
   Note: If you want to run a particular test, just launch it by the script name:

```sh
#need to explicitly import pester module on win7 only
import-module pester
.\SCP.Tests.ps1
```





