SFTP-SERVER(8)                     BSD System Manager's Manual                    SFTP-SERVER(8)

NAME
     sftp-server — OpenSSH SFTP server subsystem

SYNOPSIS
     sftp-server [-ehR] [-d start_directory] [-f log_facility] [-l log_level]
                 [-P blacklisted_requests] [-p whitelisted_requests] [-u umask]
     sftp-server -Q protocol_feature

DESCRIPTION
     sftp-server is a program that speaks the server side of SFTP protocol to stdout and expects
     client requests from stdin.  sftp-server is not intended to be called directly, but from
     sshd(8) using the Subsystem option.

     Command-line flags to sftp-server should be specified in the Subsystem declaration.  See
     sshd_config(5) for more information.

     Valid options are:

     -d start_directory
             specifies an alternate starting directory for users.  The pathname may contain the
             following tokens that are expanded at runtime: %% is replaced by a literal '%', %d
             is replaced by the home directory of the user being authenticated, and %u is re‐
             placed by the username of that user.  The default is to use the user's home direc‐
             tory.  This option is useful in conjunction with the sshd_config(5) ChrootDirectory
             option.

     -e      Causes sftp-server to print logging information to stderr instead of syslog for de‐
             bugging.

     -f log_facility
             Specifies the facility code that is used when logging messages from sftp-server.
             The possible values are: DAEMON, USER, AUTH, LOCAL0, LOCAL1, LOCAL2, LOCAL3, LO‐
             CAL4, LOCAL5, LOCAL6, LOCAL7.  The default is AUTH.

     -h      Displays sftp-server usage information.

     -l log_level
             Specifies which messages will be logged by sftp-server.  The possible values are:
             QUIET, FATAL, ERROR, INFO, VERBOSE, DEBUG, DEBUG1, DEBUG2, and DEBUG3.  INFO and
             VERBOSE log transactions that sftp-server performs on behalf of the client.  DEBUG
             and DEBUG1 are equivalent.  DEBUG2 and DEBUG3 each specify higher levels of debug‐
             ging output.  The default is ERROR.

     -P blacklisted_requests
             Specify a comma-separated list of SFTP protocol requests that are banned by the
             server.  sftp-server will reply to any blacklisted request with a failure.  The -Q
             flag can be used to determine the supported request types.  If both a blacklist and
             a whitelist are specified, then the blacklist is applied before the whitelist.

     -p whitelisted_requests
             Specify a comma-separated list of SFTP protocol requests that are permitted by the
             server.  All request types that are not on the whitelist will be logged and replied
             to with a failure message.

             Care must be taken when using this feature to ensure that requests made implicitly
             by SFTP clients are permitted.

     -Q protocol_feature
             Query protocol features supported by sftp-server.  At present the only feature that
             may be queried is “requests”, which may be used for black or whitelisting (flags -P
             and -p respectively).

     -R      Places this instance of sftp-server into a read-only mode.  Attempts to open files
             for writing, as well as other operations that change the state of the filesystem,
             will be denied.

     -u umask
             Sets an explicit umask(2) to be applied to newly-created files and directories, in‐
             stead of the user's default mask.

     On some systems, sftp-server must be able to access /dev/log for logging to work, and use
     of sftp-server in a chroot configuration therefore requires that syslogd(8) establish a
     logging socket inside the chroot directory.

SEE ALSO
     sftp(1), ssh(1), sshd_config(5), sshd(8)

     T. Ylonen and S. Lehtinen, SSH File Transfer Protocol, draft-ietf-secsh-filexfer-02.txt,
     October 2001, work in progress material.

HISTORY
     sftp-server first appeared in OpenBSD 2.8.

AUTHORS
     Markus Friedl <markus@openbsd.org>

BSD                                     November 30, 2019                                    BSD
