FTP(1)                             BSD General Commands Manual                            FTP(1)

NAME
     ftp — Internet file transfer program

SYNOPSIS
     ftp [-46pinegvd] [host [port]]
     pftp [-46inegvd] [host [port]]

DESCRIPTION
     Ftp is the user interface to the Internet standard File Transfer Protocol.  The program al‐
     lows a user to transfer files to and from a remote network site.

     Options may be specified at the command line, or to the command interpreter.

     -4    Use only IPv4 to contact any host.

     -6    Use IPv6 only.

     -p    Use passive mode for data transfers. Allows use of ftp in environments where a fire‐
           wall prevents connections from the outside world back to the client machine. Requires
           that the ftp server support the PASV command. This is the default if invoked as pftp.

     -i    Turns off interactive prompting during multiple file transfers.

     -n    Restrains ftp from attempting “auto-login” upon initial connection.  If auto-login is
           enabled, ftp will check the .netrc (see netrc(5)) file in the user's home directory
           for an entry describing an account on the remote machine.  If no entry exists, ftp
           will prompt for the remote machine login name (default is the user identity on the
           local machine), and, if necessary, prompt for a password and an account with which to
           login.

     -e    Disables command editing and history support, if it was compiled into the ftp exe‐
           cutable. Otherwise, does nothing.

     -g    Disables file name globbing.

     -v    Verbose option forces ftp to show all responses from the remote server, as well as
           report on data transfer statistics.

     -d    Enables debugging.

     The client host and an optional port number with which ftp is to communicate may be speci‐
     fied on the command line.  If this is done, ftp will immediately attempt to establish a
     connection to an FTP server on that host; otherwise, ftp will enter its command interpreter
     and await instructions from the user.  When ftp is awaiting commands from the user the
     prompt ‘ftp>’ is provided to the user.  The following commands are recognized by ftp:

     ! [command [args]]
                 Invoke an interactive shell on the local machine.  If there are arguments, the
                 first is taken to be a command to execute directly, with the rest of the argu‐
                 ments as its arguments.

     $ macro-name [args]
                 Execute the macro macro-name that was defined with the macdef command.  Argu‐
                 ments are passed to the macro unglobbed.

     account [passwd]
                 Supply a supplemental password required by a remote system for access to re‐
                 sources once a login has been successfully completed.  If no argument is in‐
                 cluded, the user will be prompted for an account password in a non-echoing in‐
                 put mode.

     append local-file [remote-file]
                 Append a local file to a file on the remote machine.  If remote-file is left
                 unspecified, the local file name is used in naming the remote file after being
                 altered by any ntrans or nmap setting.  File transfer uses the current settings
                 for type, format, mode, and structure.

     ascii       Set the file transfer type to network ASCII.  This is the default type.

     bell        Arrange that a bell be sounded after each file transfer command is completed.

     binary      Set the file transfer type to support binary image transfer.

     bye         Terminate the FTP session with the remote server and exit ftp.  An end of file
                 will also terminate the session and exit.

     case        Toggle remote computer file name case mapping during mget commands.  When case
                 is on (default is off), remote computer file names with all letters in upper
                 case are written in the local directory with the letters mapped to lower case.

     cd remote-directory
                 Change the working directory on the remote machine to remote-directory.

     cdup        Change the remote machine working directory to the parent of the current remote
                 machine working directory.

     chmod mode file-name
                 Change the permission modes of the file file-name on the remote system to mode.

     close       Terminate the FTP session with the remote server, and return to the command in‐
                 terpreter.  Any defined macros are erased.

     cr          Toggle carriage return stripping during ascii type file retrieval.  Records are
                 denoted by a carriage return/linefeed sequence during ascii type file transfer.
                 When cr is on (the default), carriage returns are stripped from this sequence
                 to conform with the UNIX single linefeed record delimiter.  Records on non-UNIX
                 remote systems may contain single linefeeds; when an ascii type transfer is
                 made, these linefeeds may be distinguished from a record delimiter only when cr
                 is off.

     qc          Toggle the printing of control characters in the output of ASCII type commands.
                 When this is turned on, control characters are replaced with a question mark if
                 the output file is the standard output.  This is the default when the standard
                 output is a tty.

     delete remote-file
                 Delete the file remote-file on the remote machine.

     debug [debug-value]
                 Toggle debugging mode.  If an optional debug-value is specified it is used to
                 set the debugging level.  When debugging is on, ftp prints each command sent to
                 the remote machine, preceded by the string ‘-->’

     dir [remote-directory] [local-file]
                 Print a listing of the directory contents in the directory, remote-directory,
                 and, optionally, placing the output in local-file.  If interactive prompting is
                 on, ftp will prompt the user to verify that the last argument is indeed the
                 target local file for receiving dir output.  If no directory is specified, the
                 current working directory on the remote machine is used.  If no local file is
                 specified, or local-file is -, output comes to the terminal.

     disconnect  A synonym for close.

     form format
                 Set the file transfer form to format.  The default format is “file”.

     get remote-file [local-file]
                 Retrieve the remote-file and store it on the local machine.  If the local file
                 name is not specified, it is given the same name it has on the remote machine,
                 subject to alteration by the current case, ntrans, and nmap settings.  The cur‐
                 rent settings for type, form, mode, and structure are used while transferring
                 the file.

     glob        Toggle filename expansion for mdelete, mget and mput.  If globbing is turned
                 off with glob, the file name arguments are taken literally and not expanded.
                 Globbing for mput is done as in csh(1).  For mdelete and mget, each remote file
                 name is expanded separately on the remote machine and the lists are not merged.
                 Expansion of a directory name is likely to be different from expansion of the
                 name of an ordinary file: the exact result depends on the foreign operating
                 system and ftp server, and can be previewed by doing ‘mls remote-files -’ Note:
                 mget and mput are not meant to transfer entire directory subtrees of files.
                 That can be done by transferring a tar(1) archive of the subtree (in binary
                 mode).

     hash [increment]
                 Toggle hash-sign (``#'') printing for each transferred data block, but only in
                 the absence of an argument.  The size of a data block is set to 1024 bytes by
                 default, but can be changed by the argument increment, which also accepts the
                 suffixed multipliers 'k' and 'K' for kilobytes, 'm' and 'M' for Megabytes, and
                 finally 'g' and 'G' for Gigabytes.  Setting a size activates hash printing un‐
                 conditionally.

     help [command]
                 Print an informative message about the meaning of command.  If no argument is
                 given, ftp prints a list of the known commands.

     idle [seconds]
                 Set the inactivity timer on the remote server to seconds seconds.  If seconds
                 is omitted, the current inactivity timer is printed.

     ipany       Allow the address resolver to return any address family.

     ipv4        Restrict the address resolver to look only for IPv4 addresses.

     ipv6        Restrict host adressing to IPv6 only.

     lcd [directory]
                 Change the working directory on the local machine.  If no directory is speci‐
                 fied, the user's home directory is used.

     ls [remote-directory] [local-file]
                 Print a listing of the contents of a directory on the remote machine.  The
                 listing includes any system-dependent information that the server chooses to
                 include; for example, most UNIX systems will produce output from the command
                 ‘ls -l’.  (See also nlist.)  If remote-directory is left unspecified, the cur‐
                 rent working directory is used.  If interactive prompting is on, ftp will
                 prompt the user to verify that the last argument is indeed the target local
                 file for receiving ls output.  If no local file is specified, or if local-file
                 is ‘-’, the output is sent to the terminal.

     macdef macro-name
                 Define a macro.  Subsequent lines are stored as the macro macro-name; a null
                 line (consecutive newline characters in a file or carriage returns from the
                 terminal) terminates macro input mode.  There is a limit of 16 macros and 4096
                 total characters in all defined macros.  Macros remain defined until a close
                 command is executed.  The macro processor interprets `$' and `\' as special
                 characters.  A `$' followed by a number (or numbers) is replaced by the corre‐
                 sponding argument on the macro invocation command line.  A `$' followed by an
                 `i' signals that macro processor that the executing macro is to be looped.  On
                 the first pass `$i' is replaced by the first argument on the macro invocation
                 command line, on the second pass it is replaced by the second argument, and so
                 on.  A `\' followed by any character is replaced by that character.  Use the
                 `\' to prevent special treatment of the `$'.

     mdelete [remote-files]
                 Delete the remote-files on the remote machine.

     mdir remote-files local-file
                 Like dir, except multiple remote files may be specified.  If interactive
                 prompting is on, ftp will prompt the user to verify that the last argument is
                 indeed the target local file for receiving mdir output.

     mget remote-files
                 Expand the remote-files on the remote machine and do a get for each file name
                 thus produced.  See glob for details on the filename expansion.  Resulting file
                 names will then be processed according to case, ntrans, and nmap settings.
                 Files are transferred into the local working directory, which can be changed
                 with ‘lcd directory’; new local directories can be created with ‘! mkdir
                 directory’.

     mkdir directory-name
                 Make a directory on the remote machine.

     mls remote-files local-file
                 Like nlist, except multiple remote files may be specified, and the local-file
                 must be specified.  If interactive prompting is on, ftp will prompt the user to
                 verify that the last argument is indeed the target local file for receiving mls
                 output.

     mode [mode-name]
                 Set the file transfer mode to mode-name.  The default mode is “stream” mode.

     modtime file-name
                 Show the last modification time of the file on the remote machine.

     mput local-files
                 Expand wild cards in the list of local files given as arguments and do a put
                 for each file in the resulting list.  See glob for details of filename expan‐
                 sion.  Resulting file names will then be processed according to ntrans and nmap
                 settings.

     newer file-name [local-file]
                 Get the file only if the modification time of the remote file is more recent
                 that the file on the current system.  If the file does not exist on the current
                 system, the remote file is considered newer.  Otherwise, this command is iden‐
                 tical to get.

     nlist [remote-directory] [local-file]
                 Print a  list of the files in a directory on the remote machine.  If
                 remote-directory is left unspecified, the current working directory is used.
                 If interactive prompting is on, ftp will prompt the user to verify that the
                 last argument is indeed the target local file for receiving nlist output.  If
                 no local file is specified, or if local-file is -, the output is sent to the
                 terminal.

     nmap [inpattern outpattern]
                 Set or unset the filename mapping mechanism.  If no arguments are specified,
                 the filename mapping mechanism is unset.  If arguments are specified, remote
                 filenames are mapped during mput commands and put commands issued without a
                 specified remote target filename.  If arguments are specified, local filenames
                 are mapped during mget commands and get commands issued without a specified lo‐
                 cal target filename.  This command is useful when connecting to a non-UNIX re‐
                 mote computer with different file naming conventions or practices.  The mapping
                 follows the pattern set by inpattern and outpattern.  [Inpattern] is a template
                 for incoming filenames (which may have already been processed according to the
                 ntrans and case settings).  Variable templating is accomplished by including
                 the sequences `$1', `$2', ..., `$9' in inpattern.  Use `\' to prevent this spe‐
                 cial treatment of the `$' character.  All other characters are treated liter‐
                 ally, and are used to determine the nmap [inpattern] variable values.  For ex‐
                 ample, given inpattern $1.$2 and the remote file name "mydata.data", $1 would
                 have the value "mydata", and $2 would have the value "data".  The outpattern
                 determines the resulting mapped filename.  The sequences `$1', `$2', ...., `$9'
                 are replaced by any value resulting from the inpattern template.  The sequence
                 `$0' is replace by the original filename.  Additionally, the sequence ‘[seq1,
                 seq2]’ is replaced by [seq1] if seq1 is not a null string; otherwise it is re‐
                 placed by seq2.  For example, the command

                       nmap $1.$2.$3 [$1,$2].[$2,file]

                 would yield the output filename "myfile.data" for input filenames "myfile.data"
                 and "myfile.data.old", "myfile.file" for the input filename "myfile", and "my‐
                 file.myfile" for the input filename ".myfile".  Spaces may be included in
                 outpattern, as in the example: `nmap $1 sed "s/  *$//" > $1' .  Use the `\'
                 character to prevent special treatment of the `$','[','[', and `,' characters.

     ntrans [inchars [outchars]]
                 Set or unset the filename character translation mechanism.  If no arguments are
                 specified, the filename character translation mechanism is unset.  If arguments
                 are specified, characters in remote filenames are translated during mput com‐
                 mands and put commands issued without a specified remote target filename.  If
                 arguments are specified, characters in local filenames are translated during
                 mget commands and get commands issued without a specified local target file‐
                 name.  This command is useful when connecting to a non-UNIX remote computer
                 with different file naming conventions or practices.  Characters in a filename
                 matching a character in inchars are replaced with the corresponding character
                 in outchars.  If the character's position in inchars is longer than the length
                 of outchars, the character is deleted from the file name.

     open host [port]
                 Establish a connection to the specified host FTP server.  An optional port num‐
                 ber may be supplied, in which case, ftp will attempt to contact an FTP server
                 at that port.  If the auto-login option is on (default), ftp will also attempt
                 to automatically log the user in to the FTP server (see below).

     prompt      Toggle interactive prompting.  Interactive prompting occurs during multiple
                 file transfers to allow the user to selectively retrieve or store files.  If
                 prompting is turned off (default is on), any mget or mput will transfer all
                 files, and any mdelete will delete all files.

     proxy ftp-command
                 Execute an ftp command on a secondary control connection.  This command allows
                 simultaneous connection to two remote ftp servers for transferring files be‐
                 tween the two servers.  The first proxy command should be an open, to establish
                 the secondary control connection.  Enter the command "proxy ?" to see other ftp
                 commands executable on the secondary connection.  The following commands behave
                 differently when prefaced by proxy: open will not define new macros during the
                 auto-login process, close will not erase existing macro definitions, get and
                 mget transfer files from the host on the primary control connection to the host
                 on the secondary control connection, and put, mput, and append transfer files
                 from the host on the secondary control connection to the host on the primary
                 control connection.  Third party file transfers depend upon support of the ftp
                 protocol PASV command by the server on the secondary control connection.

     put local-file [remote-file]
                 Store a local file on the remote machine.  If remote-file is left unspecified,
                 the local file name is used after processing according to any ntrans or nmap
                 settings in naming the remote file.  File transfer uses the current settings
                 for type, format, mode, and structure.

     pwd         Print the name of the current working directory on the remote machine.

     quit        A synonym for bye.

     quote arg1 arg2 ...
                 The arguments specified are sent, verbatim, to the remote FTP server.

     recv remote-file [local-file]
                 A synonym for get.

     reget remote-file [local-file]
                 Reget acts like get, except that if local-file exists and is smaller than
                 remote-file, local-file is presumed to be a partially transferred copy of
                 remote-file and the transfer is continued from the apparent point of failure.
                 If local-file does not exist ftp won't fetch the file.  This command is useful
                 when transferring very large files over networks that are prone to dropping
                 connections.

     remotehelp [command-name]
                 Request help from the remote FTP server.  If a command-name is specified it is
                 supplied to the server as well.

     remotestatus [file-name]
                 With no arguments, show status of remote machine.  If file-name is specified,
                 show status of file-name on remote machine.

     rename [from] [to]
                 Rename the file from on the remote machine, to the file to.

     reset       Clear reply queue.  This command re-synchronizes command/reply sequencing with
                 the remote ftp server.  Resynchronization may be necessary following a viola‐
                 tion of the ftp protocol by the remote server.

     restart marker
                 Restart the immediately following get or put at the indicated marker.  On UNIX
                 systems, marker is usually a byte offset into the file.

     rmdir directory-name
                 Delete a directory on the remote machine.

     runique     Toggle storing of files on the local system with unique filenames.  If a file
                 already exists with a name equal to the target local filename for a get or mget
                 command, a ".1" is appended to the name.  If the resulting name matches another
                 existing file, a ".2" is appended to the original name.  If this process con‐
                 tinues up to ".99", an error message is printed, and the transfer does not take
                 place.  The generated unique filename will be reported.  Note that runique will
                 not affect local files generated from a shell command (see below).  The default
                 value is off.

     send local-file [remote-file]
                 A synonym for put.

     sendport    Toggle the use of PORT commands.  By default, ftp will attempt to use a PORT
                 command when establishing a connection for each data transfer.  The use of PORT
                 commands can prevent delays when performing multiple file transfers.  If the
                 PORT command fails, ftp will use the default data port.  When the use of PORT
                 commands is disabled, no attempt will be made to use PORT commands for each
                 data transfer.  This is useful for certain FTP implementations which do ignore
                 PORT commands but, incorrectly, indicate they've been accepted.

     site arg1 arg2 ...
                 The arguments specified are sent, verbatim, to the remote FTP server as a SITE
                 command.

     size file-name
                 Return size of file-name on remote machine.

     status      Show the current status of ftp.

     struct [struct-name]
                 Set the file transfer structure to struct-name.  By default “stream” structure
                 is used.

     sunique     Toggle storing of files on remote machine under unique file names.  Remote ftp
                 server must support ftp protocol STOU command for successful completion.  The
                 remote server will report unique name.  Default value is off.

     system      Show the type of operating system running on the remote machine.

     tenex       Set the file transfer type to that needed to talk to TENEX machines.

     trace       Toggle packet tracing.

     type [type-name]
                 Set the file transfer type to type-name.  If no type is specified, the current
                 type is printed.  The default type is network ASCII.

     umask [newmask]
                 Set the default umask on the remote server to newmask.  If newmask is omitted,
                 the current umask is printed.

     user user-name [password] [account]
                 Identify yourself to the remote FTP server.  If the password is not specified
                 and the server requires it, ftp will prompt the user for it (after disabling
                 local echo).  If an account field is not specified, and the FTP server requires
                 it, the user will be prompted for it.  If an account field is specified, an ac‐
                 count command will be relayed to the remote server after the login sequence is
                 completed if the remote server did not require it for logging in.  Unless ftp
                 is invoked with “auto-login” disabled, this process is done automatically on
                 initial connection to the FTP server.

     verbose     Toggle verbose mode.  In verbose mode, all responses from the FTP server are
                 displayed to the user.  In addition, if verbose is on, when a file transfer
                 completes, statistics regarding the efficiency of the transfer are reported.
                 By default, verbose is on.

     ? [command]
                 A synonym for help.

     Command arguments which have embedded spaces may be quoted with quote `"' marks.

ABORTING A FILE TRANSFER
     To abort a file transfer, use the terminal interrupt key (usually Ctrl-C).  Sending trans‐
     fers will be immediately halted.  Receiving transfers will be halted by sending a ftp pro‐
     tocol ABOR command to the remote server, and discarding any further data received.  The
     speed at which this is accomplished depends upon the remote server's support for ABOR pro‐
     cessing.  If the remote server does not support the ABOR command, an ‘ftp>’ prompt will not
     appear until the remote server has completed sending the requested file.

     The terminal interrupt key sequence will be ignored when ftp has completed any local pro‐
     cessing and is awaiting a reply from the remote server.  A long delay in this mode may re‐
     sult from the ABOR processing described above, or from unexpected behavior by the remote
     server, including violations of the ftp protocol.  If the delay results from unexpected re‐
     mote server behavior, the local ftp program must be killed by hand.

FILE NAMING CONVENTIONS
     Files specified as arguments to ftp commands are processed according to the following
     rules.

     1.   If the file name ‘-’ is specified, the stdin (for reading) or stdout (for writing) is
          used.

     2.   If the first character of the file name is ‘|’, the remainder of the argument is in‐
          terpreted as a shell command.  Ftp then forks a shell, using popen(3) with the argu‐
          ment supplied, and reads (writes) from the stdout (stdin).  If the shell command in‐
          cludes spaces, the argument must be quoted; e.g.  “" ls -lt"”.  A particularly useful
          example of this mechanism is: “dir more”.

     3.   Failing the above checks, if ``globbing'' is enabled, local file names are expanded
          according to the rules used in the csh(1); c.f. the glob command.  If the ftp command
          expects a single local file (.e.g.  put), only the first filename generated by the
          "globbing" operation is used.

     4.   For mget commands and get commands with unspecified local file names, the local file‐
          name is the remote filename, which may be altered by a case, ntrans, or nmap setting.
          The resulting filename may then be altered if runique is on.

     5.   For mput commands and put commands with unspecified remote file names, the remote
          filename is the local filename, which may be altered by a ntrans or nmap setting.  The
          resulting filename may then be altered by the remote server if sunique is on.

FILE TRANSFER PARAMETERS
     The FTP specification specifies many parameters which may affect a file transfer.  The type
     may be one of “ascii”, “image” (binary), “ebcdic”, and “local byte size” (for PDP-10's and
     PDP-20's mostly).  Ftp supports the ascii and image types of file transfer, plus local byte
     size 8 for tenex mode transfers.

     Ftp supports only the default values for the remaining file transfer parameters: mode,
     form, and struct.

ENVIRONMENT
     Ftp utilizes the following environment variables.

     HOME        For default location of a .netrc file, if one exists.

     SHELL       For default shell.

SEE ALSO
     ftpd(8), netrc(5), RFC 959

HISTORY
     The ftp command appeared in 4.2BSD.

BUGS
     Correct execution of many commands depends upon proper behavior by the remote server.

     An error in the treatment of carriage returns in the 4.2BSD ascii-mode transfer code has
     been corrected.  This correction may result in incorrect transfers of binary files to and
     from 4.2BSD servers using the ascii type.  Avoid this problem by using the binary image
     type.

Linux NetKit (0.17)                      August 15, 1999                     Linux NetKit (0.17)
