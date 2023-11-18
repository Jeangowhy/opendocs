
________________________________________________________________________
/MD docs combine script
====================================================

    #! /usr/bin/env bash
    
    printf '_%.0s' {1..72}; echo "";
    echo "/MD docs combine script"
    printf '=%.0s' {1..52}; echo ""; echo "";
    cat $0 | sed -n 's/^/    /p'
    
    while read -r line
    do 
        echo ""
        printf '_%.0s' {1..72}; echo "";
        echo "$line" | sed -n 's/\(^* \|^..\/\)/\/MD /gp'
        printf '=%.0s' {1..52}; echo ""; echo "";
        cat `echo "$line" | sed -n 's/^\(.*\)deps\/\([^)]\+\))\?/..\/deps\/\2/gp'`
    done << EOF
    * [NPM Readme](deps/npm/README.md)
    `find ../deps/npm/docs/content | sed -n '/.md/p'`
    EOF

________________________________________________________________________
/MD [NPM Readme](deps/npm/README.md)
====================================================

# npm - a JavaScript package manager

[![npm version](https://img.shields.io/npm/v/npm.svg)](https://npm.im/npm)
[![license](https://img.shields.io/npm/l/npm.svg)](https://npm.im/npm)
[![CI - cli](https://github.com/npm/cli/actions/workflows/ci.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/ci.yml)
[![Benchmark Suite](https://github.com/npm/cli/actions/workflows/benchmark.yml/badge.svg)](https://github.com/npm/cli/actions/workflows/benchmark.yml)

### Requirements

One of the following versions of [Node.js](https://nodejs.org/en/download/) must be installed to run **`npm`**:

* `18.x.x` >= `18.17.0`
* `20.5.0` or higher

### Installation

**`npm`** comes bundled with [**`node`**](https://nodejs.org/), & most third-party distributions, by default. Officially supported downloads/distributions can be found at: [nodejs.org/en/download](https://nodejs.org/en/download)

#### Direct Download

You can download & install **`npm`** directly from [**npmjs**.com](https://npmjs.com/) using our custom `install.sh` script:

```bash
curl -qL https://www.npmjs.com/install.sh | sh
```

#### Node Version Managers

If you're looking to manage multiple versions of **`Node.js`** &/or **`npm`**, consider using a [node version manager](https://github.com/search?q=node+version+manager+archived%3Afalse&type=repositories&ref=advsearch)

### Usage

```bash
npm <command>
```

### Links & Resources

* [**Documentation**](https://docs.npmjs.com/) - Official docs & how-tos for all things **npm**
    * Note: you can also search docs locally with `npm help-search <query>`
* [**Bug Tracker**](https://github.com/npm/cli/issues) - Search or submit bugs against the CLI
* [**Roadmap**](https://github.com/orgs/github/projects/4247/views/1?filterQuery=npm) - Track & follow along with our public roadmap
* [**Feedback**](https://github.com/npm/feedback) - Contribute ideas & discussion around the npm registry, website & CLI
* [**RFCs**](https://github.com/npm/rfcs) - Contribute ideas & specifications for the API/design of the npm CLI
* [**Service Status**](https://status.npmjs.org/) - Monitor the current status & see incident reports for the website & registry
* [**Project Status**](https://npm.github.io/statusboard/) - See the health of all our maintained OSS projects in one view
* [**Events Calendar**](https://calendar.google.com/calendar/u/0/embed?src=npmjs.com_oonluqt8oftrt0vmgrfbg6q6go@group.calendar.google.com) - Keep track of our Open RFC calls, releases, meetups, conferences & more
* [**Support**](https://www.npmjs.com/support) - Experiencing problems with the **npm** [website](https://npmjs.com) or [registry](https://registry.npmjs.org)? File a ticket [here](https://www.npmjs.com/support)

### Acknowledgments

* `npm` is configured to use the **npm Public Registry** at [https://registry.npmjs.org](https://registry.npmjs.org) by default; Usage of this registry is subject to **Terms of Use** available at [https://npmjs.com/policies/terms](https://npmjs.com/policies/terms)
* You can configure `npm` to use any other compatible registry you prefer. You can read more about configuring third-party registries [here](https://docs.npmjs.com/cli/v7/using-npm/registry)

### FAQ on Branding

#### Is it "npm" or "NPM" or "Npm"?

**`npm`** should never be capitalized unless it is being displayed in a location that is customarily all-capitals (ex. titles on `man` pages).

#### Is "npm" an acronym for "Node Package Manager"?

Contrary to popular belief, **`npm`** **is not** in fact an acronym for "Node Package Manager"; It is a recursive bacronymic abbreviation for **"npm is not an acronym"** (if the project was named "ninaa", then it would be an acronym). The precursor to **`npm`** was actually a bash utility named **"pm"**, which was the shortform name of **"pkgmakeinst"** - a bash function that installed various things on various platforms. If **`npm`** were to ever have been considered an acronym, it would be as "node pm" or, potentially "new pm".


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-access.md
====================================================

---
title: npm-access
section: 1
description: Set access level on published packages
---

### Synopsis

```bash
npm access list packages [<user>|<scope>|<scope:team> [<package>]
npm access list collaborators [<package> [<user>]]
npm access get status [<package>]
npm access set status=public|private [<package>]
npm access set mfa=none|publish|automation [<package>]
npm access grant <read-only|read-write> <scope:team> [<package>]
npm access revoke <scope:team> [<package>]
```

Note: This command is unaware of workspaces.

### Description

Used to set access controls on private packages.

For all of the subcommands, `npm access` will perform actions on the packages
in the current working directory if no package name is passed to the
subcommand.

* public / restricted (deprecated):
  Set a package to be either publicly accessible or restricted.

* grant / revoke (deprecated):
  Add or remove the ability of users and teams to have read-only or read-write
  access to a package.

* 2fa-required / 2fa-not-required (deprecated):
  Configure whether a package requires that anyone publishing it have two-factor
  authentication enabled on their account.

* ls-packages (deprecated):
  Show all of the packages a user or a team is able to access, along with the
  access level, except for read-only public packages (it won't print the whole
  registry listing)

* ls-collaborators (deprecated):
  Show all of the access privileges for a package. Will only show permissions
  for packages to which you have at least read access. If `<user>` is passed in,
  the list is filtered only to teams _that_ user happens to belong to.

* edit (not implemented)

### Details

`npm access` always operates directly on the current registry, configurable
from the command line using `--registry=<registry url>`.

Unscoped packages are *always public*.

Scoped packages *default to restricted*, but you can either publish them as
public using `npm publish --access=public`, or set their access as public using
`npm access public` after the initial publish.

You must have privileges to set the access of a package:

* You are an owner of an unscoped or scoped package.
* You are a member of the team that owns a scope.
* You have been given read-write privileges for a package, either as a member
  of a team or directly as an owner.

If you have two-factor authentication enabled then you'll be prompted to provide a second factor, or may use the `--otp=...` option to specify it on
the command line.

If your account is not paid, then attempts to publish scoped packages will
fail with an HTTP 402 status code (logically enough), unless you use
`--access=public`.

Management of teams and team memberships is done with the `npm team` command.

### Configuration

#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [`libnpmaccess`](https://npm.im/libnpmaccess)
* [npm team](/commands/npm-team)
* [npm publish](/commands/npm-publish)
* [npm config](/commands/npm-config)
* [npm registry](/using-npm/registry)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-adduser.md
====================================================

---
title: npm-adduser
section: 1
description: Add a registry user account
---

### Synopsis

```bash
npm adduser

alias: add-user
```

Note: This command is unaware of workspaces.

### Description

Create a new user in the specified registry, and save the credentials to
the `.npmrc` file. If no registry is specified, the default registry
will be used (see [`registry`](/using-npm/registry)).

When using `legacy` for your `auth-type`, the username, password, and
email are read in from prompts.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



#### `auth-type`

* Default: "web"
* Type: "legacy" or "web"

What authentication strategy to use with `login`. Note that if an `otp`
config is given, this value will always be set to `legacy`.



### See Also

* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm owner](/commands/npm-owner)
* [npm whoami](/commands/npm-whoami)
* [npm token](/commands/npm-token)
* [npm profile](/commands/npm-profile)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-audit.md
====================================================

---
title: npm-audit
section: 1
description: Run a security audit
---

### Synopsis

```bash
npm audit [fix|signatures]
```

### Description

The audit command submits a description of the dependencies configured in
your project to your default registry and asks for a report of known
vulnerabilities.  If any vulnerabilities are found, then the impact and
appropriate remediation will be calculated.  If the `fix` argument is
provided, then remediations will be applied to the package tree.

The command will exit with a 0 exit code if no vulnerabilities were found.

Note that some vulnerabilities cannot be fixed automatically and will
require manual intervention or review.  Also note that since `npm audit
fix` runs a full-fledged `npm install` under the hood, all configs that
apply to the installer will also apply to `npm install` -- so things like
`npm audit fix --package-lock-only` will work as expected.

By default, the audit command will exit with a non-zero code if any
vulnerability is found. It may be useful in CI environments to include the
`--audit-level` parameter to specify the minimum vulnerability level that
will cause the command to fail. This option does not filter the report
output, it simply changes the command's failure threshold.

### Package lock

By default npm requires a package-lock or shrinkwrap in order to run the
audit.  You can bypass the package lock with `--no-package-lock` but be
aware the results may be different with every run, since npm will
re-build the dependency tree each time.

### Audit Signatures

To ensure the integrity of packages you download from the public npm registry, or any registry that supports signatures, you can verify the registry signatures of downloaded packages using the npm CLI.

Registry signatures can be verified using the following `audit` command:

```bash
$ npm audit signatures
```

The npm CLI supports registry signatures and signing keys provided by any registry if the following conventions are followed:

1. Signatures are provided in the package's `packument` in each published version within the `dist` object:

```json
"dist":{
  "..omitted..": "..omitted..",
  "signatures": [{
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "sig": "a312b9c3cb4a1b693e8ebac5ee1ca9cc01f2661c14391917dcb111517f72370809..."
  }]
}
```

See this [example](https://registry.npmjs.org/light-cycle/1.4.3) of a signed package from the public npm registry.

The `sig` is generated using the following template: `${package.name}@${package.version}:${package.dist.integrity}` and the `keyid` has to match one of the public signing keys below.

2. Public signing keys are provided at `registry-host.tld/-/npm/v1/keys` in the following format:

```
{
  "keys": [{
    "expires": null,
    "keyid": "SHA256:{{SHA256_PUBLIC_KEY}}",
    "keytype": "ecdsa-sha2-nistp256",
    "scheme": "ecdsa-sha2-nistp256",
    "key": "{{B64_PUBLIC_KEY}}"
  }]
}
```

Keys response:

- `expires`: null or a simplified extended <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601 format</a>: `YYYY-MM-DDTHH:mm:ss.sssZ`
- `keydid`: sha256 fingerprint of the public key
- `keytype`: only `ecdsa-sha2-nistp256` is currently supported by the npm CLI
- `scheme`: only `ecdsa-sha2-nistp256` is currently supported by the npm CLI
- `key`: base64 encoded public key

See this <a href="https://registry.npmjs.org/-/npm/v1/keys" target="_blank">example key's response from the public npm registry</a>.

### Audit Endpoints

There are two audit endpoints that npm may use to fetch vulnerability
information: the `Bulk Advisory` endpoint and the `Quick Audit` endpoint.

#### Bulk Advisory Endpoint

As of version 7, npm uses the much faster `Bulk Advisory` endpoint to
optimize the speed of calculating audit results.

npm will generate a JSON payload with the name and list of versions of each
package in the tree, and POST it to the default configured registry at
the path `/-/npm/v1/security/advisories/bulk`.

Any packages in the tree that do not have a `version` field in their
package.json file will be ignored.  If any `--omit` options are specified
(either via the [`--omit` config](/using-npm/config#omit), or one of the
shorthands such as `--production`, `--only=dev`, and so on), then packages will
be omitted from the submitted payload as appropriate.

If the registry responds with an error, or with an invalid response, then
npm will attempt to load advisory data from the `Quick Audit` endpoint.

The expected result will contain a set of advisory objects for each
dependency that matches the advisory range.  Each advisory object contains
a `name`, `url`, `id`, `severity`, `vulnerable_versions`, and `title`.

npm then uses these advisory objects to calculate vulnerabilities and
meta-vulnerabilities of the dependencies within the tree.

#### Quick Audit Endpoint

If the `Bulk Advisory` endpoint returns an error, or invalid data, npm will
attempt to load advisory data from the `Quick Audit` endpoint, which is
considerably slower in most cases.

The full package tree as found in `package-lock.json` is submitted, along
with the following pieces of additional metadata:

* `npm_version`
* `node_version`
* `platform`
* `arch`
* `node_env`

All packages in the tree are submitted to the Quick Audit endpoint.
Omitted dependency types are skipped when generating the report.

#### Scrubbing

Out of an abundance of caution, npm versions 5 and 6 would "scrub" any
packages from the submitted report if their name contained a `/` character,
so as to avoid leaking the names of potentially private packages or git
URLs.

However, in practice, this resulted in audits often failing to properly
detect meta-vulnerabilities, because the tree would appear to be invalid
due to missing dependencies, and prevented the detection of vulnerabilities
in package trees that used git dependencies or private modules.

This scrubbing has been removed from npm as of version 7.

#### Calculating Meta-Vulnerabilities and Remediations

npm uses the
[`@npmcli/metavuln-calculator`](http://npm.im/@npmcli/metavuln-calculator)
module to turn a set of security advisories into a set of "vulnerability"
objects.  A "meta-vulnerability" is a dependency that is vulnerable by
virtue of dependence on vulnerable versions of a vulnerable package.

For example, if the package `foo` is vulnerable in the range `>=1.0.2
<2.0.0`, and the package `bar` depends on `foo@^1.1.0`, then that version
of `bar` can only be installed by installing a vulnerable version of `foo`.
In this case, `bar` is a "metavulnerability".

Once metavulnerabilities for a given package are calculated, they are
cached in the `~/.npm` folder and only re-evaluated if the advisory range
changes, or a new version of the package is published (in which case, the
new version is checked for metavulnerable status as well).

If the chain of metavulnerabilities extends all the way to the root
project, and it cannot be updated without changing its dependency ranges,
then `npm audit fix` will require the `--force` option to apply the
remediation.  If remediations do not require changes to the dependency
ranges, then all vulnerable packages will be updated to a version that does
not have an advisory or metavulnerability posted against it.

### Exit Code

The `npm audit` command will exit with a 0 exit code if no vulnerabilities
were found.  The `npm audit fix` command will exit with 0 exit code if no
vulnerabilities are found _or_ if the remediation is able to successfully
fix all vulnerabilities.

If vulnerabilities were found the exit code will depend on the
[`audit-level` config](/using-npm/config#audit-level).

### Examples

Scan your project for vulnerabilities and automatically install any compatible
updates to vulnerable dependencies:

```bash
$ npm audit fix
```

Run `audit fix` without modifying `node_modules`, but still updating the
pkglock:

```bash
$ npm audit fix --package-lock-only
```

Skip updating `devDependencies`:

```bash
$ npm audit fix --only=prod
```

Have `audit fix` install SemVer-major updates to toplevel dependencies, not
just SemVer-compatible ones:

```bash
$ npm audit fix --force
```

Do a dry run to get an idea of what `audit fix` will do, and _also_ output
install information in JSON format:

```bash
$ npm audit fix --dry-run --json
```

Scan your project for vulnerabilities and just show the details, without
fixing anything:

```bash
$ npm audit
```

Get the detailed audit report in JSON format:

```bash
$ npm audit --json
```

Fail an audit only if the results include a vulnerability with a level of moderate or higher:

```bash
$ npm audit --audit-level=moderate
```

### Configuration

#### `audit-level`

* Default: null
* Type: null, "info", "low", "moderate", "high", "critical", or "none"

The minimum level of vulnerability for `npm audit` to exit with a non-zero
exit code.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm install](/commands/npm-install)
* [config](/using-npm/config)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-bugs.md
====================================================

---
title: npm-bugs
section: 1
description: Report bugs for a package in a web browser
---

### Synopsis

```bash
npm bugs [<pkgname> [<pkgname> ...]]

alias: issues
```

### Description

This command tries to guess at the likely location of a package's bug
tracker URL or the `mailto` URL of the support email, and then tries to
open it using the [`--browser` config](/using-npm/config#browser) param. If no
package name is provided, it will search for a `package.json` in the current
folder and use the `name` property.

### Configuration

#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [npm docs](/commands/npm-docs)
* [npm view](/commands/npm-view)
* [npm publish](/commands/npm-publish)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [package.json](/configuring-npm/package-json)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-cache.md
====================================================

---
title: npm-cache
section: 1
description: Manipulates packages cache
---

### Synopsis

```bash
npm cache add <package-spec>
npm cache clean [<key>]
npm cache ls [<name>@<version>]
npm cache verify
```

Note: This command is unaware of workspaces.

### Description

Used to add, list, or clean the npm cache folder.

* add:
  Add the specified packages to the local cache.  This command is primarily
  intended to be used internally by npm, but it can provide a way to
  add data to the local installation cache explicitly.

* clean:
  Delete all data out of the cache folder.  Note that this is typically
  unnecessary, as npm's cache is self-healing and resistant to data
  corruption issues.

* verify:
  Verify the contents of the cache folder, garbage collecting any unneeded
  data, and verifying the integrity of the cache index and all cached data.

### Details

npm stores cache data in an opaque directory within the configured `cache`,
named `_cacache`. This directory is a
[`cacache`](http://npm.im/cacache)-based content-addressable cache that
stores all http request data as well as other package-related data. This
directory is primarily accessed through `pacote`, the library responsible
for all package fetching as of npm@5.

All data that passes through the cache is fully verified for integrity on
both insertion and extraction. Cache corruption will either trigger an
error, or signal to `pacote` that the data must be refetched, which it will
do automatically. For this reason, it should never be necessary to clear
the cache for any reason other than reclaiming disk space, thus why `clean`
now requires `--force` to run.

There is currently no method exposed through npm to inspect or directly
manage the contents of this cache. In order to access it, `cacache` must be
used directly.

npm will not remove data by itself: the cache will grow as new packages are
installed.

### A note about the cache's design

The npm cache is strictly a cache: it should not be relied upon as a
persistent and reliable data store for package data. npm makes no guarantee
that a previously-cached piece of data will be available later, and will
automatically delete corrupted contents. The primary guarantee that the
cache makes is that, if it does return data, that data will be exactly the
data that was inserted.

To run an offline verification of existing cache contents, use `npm cache
verify`.

### Configuration

#### `cache`

* Default: Windows: `%LocalAppData%\npm-cache`, Posix: `~/.npm`
* Type: Path

The location of npm's cache directory.



### See Also

* [package spec](/using-npm/package-spec)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm install](/commands/npm-install)
* [npm publish](/commands/npm-publish)
* [npm pack](/commands/npm-pack)
* https://npm.im/cacache
* https://npm.im/pacote
* https://npm.im/@npmcli/arborist
* https://npm.im/make-fetch-happen


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-ci.md
====================================================

---
title: npm-ci
section: 1
description: Clean install a project
---

### Synopsis

```bash
npm ci

aliases: clean-install, ic, install-clean, isntall-clean
```

### Description

This command is similar to [`npm install`](/commands/npm-install), except
it's meant to be used in automated environments such as test platforms,
continuous integration, and deployment -- or any situation where you want
to make sure you're doing a clean install of your dependencies.

The main differences between using `npm install` and `npm ci` are:

* The project **must** have an existing `package-lock.json` or
  `npm-shrinkwrap.json`.
* If dependencies in the package lock do not match those in `package.json`,
  `npm ci` will exit with an error, instead of updating the package lock.
* `npm ci` can only install entire projects at a time: individual
  dependencies cannot be added with this command.
* If a `node_modules` is already present, it will be automatically removed
  before `npm ci` begins its install.
* It will never write to `package.json` or any of the package-locks:
  installs are essentially frozen.

NOTE: If you create your `package-lock.json` file by running `npm install`
with flags that can affect the shape of your dependency tree, such as
`--legacy-peer-deps` or `--install-links`, you _must_ provide the same
flags to `npm ci` or you are likely to encounter errors. An easy way to do
this is to run, for example,
`npm config set legacy-peer-deps=true --location=project` and commit the
`.npmrc` file to your repo.

### Example

Make sure you have a package-lock and an up-to-date install:

```bash
$ cd ./my/npm/project
$ npm install
added 154 packages in 10s
$ ls | grep package-lock
```

Run `npm ci` in that project

```bash
$ npm ci
added 154 packages in 5s
```

Configure Travis CI to build using `npm ci` instead of `npm install`:

```bash
# .travis.yml
install:
- npm ci
# keep the npm cache around to speed up installs
cache:
  directories:
  - "$HOME/.npm"
```

### Configuration

#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm install](/commands/npm-install)
* [package-lock.json](/configuring-npm/package-lock-json)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-completion.md
====================================================

---
title: npm-completion
section: 1
description: Tab Completion for npm
---

### Synopsis

```bash
npm completion
```

Note: This command is unaware of workspaces.

### Description

Enables tab-completion in all npm commands.

The synopsis above
loads the completions into your current shell.  Adding it to
your ~/.bashrc or ~/.zshrc will make the completions available
everywhere:

```bash
npm completion >> ~/.bashrc
npm completion >> ~/.zshrc
```

You may of course also pipe the output of `npm completion` to a file
such as `/usr/local/etc/bash_completion.d/npm` or 
`/etc/bash_completion.d/npm` if you have a system that will read 
that file for you.

When `COMP_CWORD`, `COMP_LINE`, and `COMP_POINT` are defined in the
environment, `npm completion` acts in "plumbing mode", and outputs
completions based on the arguments.

### See Also

* [npm developers](/using-npm/developers)
* [npm](/commands/npm)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-config.md
====================================================

---
title: npm-config
section: 1
description: Manage the npm configuration files
---

### Synopsis

```bash
npm config set <key>=<value> [<key>=<value> ...]
npm config get [<key> [<key> ...]]
npm config delete <key> [<key> ...]
npm config list [--json]
npm config edit
npm config fix

alias: c
```

Note: This command is unaware of workspaces.

### Description

npm gets its config settings from the command line, environment
variables, `npmrc` files, and in some cases, the `package.json` file.

See [npmrc](/configuring-npm/npmrc) for more information about the npmrc
files.

See [config](/using-npm/config) for a more thorough explanation of the
mechanisms involved, and a full list of config options available.

The `npm config` command can be used to update and edit the contents
of the user and global npmrc files.

### Sub-commands

Config supports the following sub-commands:

#### set

```bash
npm config set key=value [key=value...]
npm set key=value [key=value...]
```

Sets each of the config keys to the value provided.

If value is omitted, the key will be removed from your config file entirely.

Note: for backwards compatibility, `npm config set key value` is supported
as an alias for `npm config set key=value`.

#### get

```bash
npm config get [key ...]
npm get [key ...]
```

Echo the config value(s) to stdout.

If multiple keys are provided, then the values will be prefixed with the
key names.

If no keys are provided, then this command behaves the same as `npm config
list`.

#### list

```bash
npm config list
```

Show all the config settings. Use `-l` to also show defaults. Use `--json`
to show the settings in json format.

#### delete

```bash
npm config delete key [key ...]
```

Deletes the specified keys from all configuration files.

#### edit

```bash
npm config edit
```

Opens the config file in an editor.  Use the `--global` flag to edit the
global config.

#### fix

```bash
npm config fix
```

Attempts to repair invalid configuration items.  Usually this means
attaching authentication config (i.e. `_auth`, `_authToken`) to the
configured `registry`.

### Configuration

#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `editor`

* Default: The EDITOR or VISUAL environment variables, or
  '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.



#### `location`

* Default: "user" unless `--global` is passed, which will also set this value
  to "global"
* Type: "global", "user", or "project"

When passed to `npm config` this refers to which config file to use.

When set to "global" mode, packages are installed into the `prefix` folder
instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



### See Also

* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [package.json](/configuring-npm/package-json)
* [npmrc](/configuring-npm/npmrc)
* [npm](/commands/npm)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-dedupe.md
====================================================

---
title: npm-dedupe
section: 1
description: Reduce duplication in the package tree
---

### Synopsis

```bash
npm dedupe

alias: ddp
```

### Description

Searches the local package tree and attempts to simplify the overall
structure by moving dependencies further up the tree, where they can
be more effectively shared by multiple dependent packages.

For example, consider this dependency graph:

```
a
+-- b <-- depends on c@1.0.x
|   `-- c@1.0.3
`-- d <-- depends on c@~1.0.9
    `-- c@1.0.10
```

In this case, `npm dedupe` will transform the tree to:

```bash
a
+-- b
+-- d
`-- c@1.0.10
```

Because of the hierarchical nature of node's module lookup, b and d
will both get their dependency met by the single c package at the root
level of the tree.

In some cases, you may have a dependency graph like this:

```
a
+-- b <-- depends on c@1.0.x
+-- c@1.0.3
`-- d <-- depends on c@1.x
    `-- c@1.9.9
```

During the installation process, the `c@1.0.3` dependency for `b` was
placed in the root of the tree.  Though `d`'s dependency on `c@1.x` could
have been satisfied by `c@1.0.3`, the newer `c@1.9.0` dependency was used,
because npm favors updates by default, even when doing so causes
duplication.

Running `npm dedupe` will cause npm to note the duplication and
re-evaluate, deleting the nested `c` module, because the one in the root is
sufficient.

To prefer deduplication over novelty during the installation process, run
`npm install --prefer-dedupe` or `npm config set prefer-dedupe true`.

Arguments are ignored. Dedupe always acts on the entire tree.

Note that this operation transforms the dependency tree, but will never
result in new modules being installed.

Using `npm find-dupes` will run the command in `--dry-run` mode.

Note: `npm dedupe` will never update the semver values of direct
dependencies in your project `package.json`, if you want to update
values in `package.json` you can run: `npm update --save` instead.

### Configuration

#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm find-dupes](/commands/npm-find-dupes)
* [npm ls](/commands/npm-ls)
* [npm update](/commands/npm-update)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-deprecate.md
====================================================

---
title: npm-deprecate
section: 1
description: Deprecate a version of a package
---

### Synopsis

```bash
npm deprecate <package-spec> <message>
```

Note: This command is unaware of workspaces.

### Description

This command will update the npm registry entry for a package, providing a
deprecation warning to all who attempt to install it.

It works on [version ranges](https://semver.npmjs.com/) as well as specific
versions, so you can do something like this:

```bash
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

SemVer ranges passed to this command are interpreted such that they *do*
include prerelease versions.  For example:

```bash
npm deprecate my-thing@1.x "1.x is no longer supported"
```

In this case, a version `my-thing@1.0.0-beta.0` will also be deprecated.

You must be the package owner to deprecate something.  See the `owner` and
`adduser` help topics.

To un-deprecate a package, specify an empty string (`""`) for the `message`
argument. Note that you must use double quotes with no space between them to
format an empty string.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [package spec](/using-npm/package-spec)
* [npm publish](/commands/npm-publish)
* [npm registry](/using-npm/registry)
* [npm owner](/commands/npm-owner)
* [npm adduser](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-diff.md
====================================================

---
title: npm-diff
section: 1
description: The registry diff command
---

### Synopsis

```bash
npm diff [...<paths>]
```

### Description

Similar to its `git diff` counterpart, this command will print diff patches
of files for packages published to the npm registry.

* `npm diff --diff=<spec-a> --diff=<spec-b>`

    Compares two package versions using their registry specifiers, e.g:
    `npm diff --diff=pkg@1.0.0 --diff=pkg@^2.0.0`. It's also possible to
    compare across forks of any package,
    e.g: `npm diff --diff=pkg@1.0.0 --diff=pkg-fork@1.0.0`.

    Any valid spec can be used, so that it's also possible to compare
    directories or git repositories,
    e.g: `npm diff --diff=pkg@latest --diff=./packages/pkg`

    Here's an example comparing two different versions of a package named
    `abbrev` from the registry:

    ```bash
    npm diff --diff=abbrev@1.1.0 --diff=abbrev@1.1.1
    ```

    On success, output looks like:

    ```bash
    diff --git a/package.json b/package.json
    index v1.1.0..v1.1.1 100644
    --- a/package.json
    +++ b/package.json
    @@ -1,6 +1,6 @@
     {
       "name": "abbrev",
    -  "version": "1.1.0",
    +  "version": "1.1.1",
       "description": "Like ruby's abbrev module, but in js",
       "author": "Isaac Z. Schlueter <i@izs.me>",
       "main": "abbrev.js",
    ```

    Given the flexible nature of npm specs, you can also target local
    directories or git repos just like when using `npm install`:

    ```bash
    npm diff --diff=https://github.com/npm/libnpmdiff --diff=./local-path
    ```

    In the example above we can compare the contents from the package installed
    from the git repo at `github.com/npm/libnpmdiff` with the contents of the
    `./local-path` that contains a valid package, such as a modified copy of
    the original.

* `npm diff` (in a package directory, no arguments):

    If the package is published to the registry, `npm diff` will fetch the
    tarball version tagged as `latest` (this value can be configured using the
    `tag` option) and proceed to compare the contents of files present in that
    tarball, with the current files in your local file system.

    This workflow provides a handy way for package authors to see what
    package-tracked files have been changed in comparison with the latest
    published version of that package.

* `npm diff --diff=<pkg-name>` (in a package directory):

    When using a single package name (with no version or tag specifier) as an
    argument, `npm diff` will work in a similar way to
    [`npm-outdated`](npm-outdated) and reach for the registry to figure out
    what current published version of the package named `<pkg-name>`
    will satisfy its dependent declared semver-range. Once that specific
    version is known `npm diff` will print diff patches comparing the
    current version of `<pkg-name>` found in the local file system with
    that specific version returned by the registry.

    Given a package named `abbrev` that is currently installed:

    ```bash
    npm diff --diff=abbrev
    ```

    That will request from the registry its most up to date version and
    will print a diff output comparing the currently installed version to this
    newer one if the version numbers are not the same.

* `npm diff --diff=<spec-a>` (in a package directory):

    Similar to using only a single package name, it's also possible to declare
    a full registry specifier version if you wish to compare the local version
    of an installed package with the specific version/tag/semver-range provided
    in `<spec-a>`.

    An example: assuming `pkg@1.0.0` is installed in the current `node_modules`
    folder, running:

    ```bash
    npm diff --diff=pkg@2.0.0
    ```

    It will effectively be an alias to
    `npm diff --diff=pkg@1.0.0 --diff=pkg@2.0.0`.

* `npm diff --diff=<semver-a> [--diff=<semver-b>]` (in a package directory):

    Using `npm diff` along with semver-valid version numbers is a shorthand
    to compare different versions of the current package.

    It needs to be run from a package directory, such that for a package named
    `pkg` running `npm diff --diff=1.0.0 --diff=1.0.1` is the same as running
    `npm diff --diff=pkg@1.0.0 --diff=pkg@1.0.1`.

    If only a single argument `<version-a>` is provided, then the current local
    file system is going to be compared against that version.

    Here's an example comparing two specific versions (published to the
    configured registry) of the current project directory:

    ```bash
    npm diff --diff=1.0.0 --diff=1.1.0
    ```

Note that tag names are not valid `--diff` argument values, if you wish to
compare to a published tag, you must use the `pkg@tagname` syntax.

#### Filtering files

It's possible to also specify positional arguments using file names or globs
pattern matching in order to limit the result of diff patches to only a subset
of files for a given package, e.g:

  ```bash
  npm diff --diff=pkg@2 ./lib/ CHANGELOG.md
  ```

In the example above the diff output is only going to print contents of files
located within the folder `./lib/` and changed lines of code within the
`CHANGELOG.md` file.

### Configuration

#### `diff`

* Default:
* Type: String (can be set multiple times)

Define arguments to compare in `npm diff`.



#### `diff-name-only`

* Default: false
* Type: Boolean

Prints only filenames when using `npm diff`.



#### `diff-unified`

* Default: 3
* Type: Number

The number of lines of context to print in `npm diff`.



#### `diff-ignore-all-space`

* Default: false
* Type: Boolean

Ignore whitespace when comparing lines in `npm diff`.



#### `diff-no-prefix`

* Default: false
* Type: Boolean

Do not show any source or destination prefix in `npm diff` output.

Note: this causes `npm diff` to ignore the `--diff-src-prefix` and
`--diff-dst-prefix` configs.



#### `diff-src-prefix`

* Default: "a/"
* Type: String

Source prefix to be used in `npm diff` output.



#### `diff-dst-prefix`

* Default: "b/"
* Type: String

Destination prefix to be used in `npm diff` output.



#### `diff-text`

* Default: false
* Type: Boolean

Treat all files as text in `npm diff`.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `tag`

* Default: "latest"
* Type: String

If you ask npm to install a package and don't tell it a specific version,
then it will install the specified tag.

Also the tag that is added to the package@version specified by the `npm tag`
command, if no explicit tag is given.

When used by the `npm diff` command, this is the tag used to fetch the
tarball that will be compared with the local files by default.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.
## See Also

* [npm outdated](/commands/npm-outdated)
* [npm install](/commands/npm-install)
* [npm config](/commands/npm-config)
* [npm registry](/using-npm/registry)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-dist-tag.md
====================================================

---
title: npm-dist-tag
section: 1
description: Modify package distribution tags
---

### Synopsis

```bash
npm dist-tag add <package-spec (with version)> [<tag>]
npm dist-tag rm <package-spec> <tag>
npm dist-tag ls [<package-spec>]

alias: dist-tags
```

### Description

Add, remove, and enumerate distribution tags on a package:

* add: Tags the specified version of the package with the specified tag,
  or the [`--tag` config](/using-npm/config#tag) if not specified. If you have
  two-factor authentication on auth-and-writes then you’ll need to include a
  one-time password on the command line with
  `--otp <one-time password>`, or go through a second factor flow based on your `authtype`.

* rm: Clear a tag that is no longer in use from the package. If you have
  two-factor authentication on auth-and-writes then you’ll need to include
  a one-time password on the command line with `--otp <one-time password>`,
  or go through a second factor flow based on your `authtype`

* ls: Show all of the dist-tags for a package, defaulting to the package in
  the current prefix. This is the default action if none is specified.

A tag can be used when installing packages as a reference to a version instead
of using a specific version number:

```bash
npm install <name>@<tag>
```

When installing dependencies, a preferred tagged version may be specified:

```bash
npm install --tag <tag>
```

(This also applies to any other commands that resolve and install
dependencies, such as `npm dedupe`, `npm update`, and `npm audit fix`.)

Publishing a package sets the `latest` tag to the published version unless the
`--tag` option is used. For example, `npm publish --tag=beta`.

By default, `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag.

### Purpose

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream, e.g., `stable`, `beta`, `dev`,
`canary`.

By default, the `latest` tag is used by npm to identify the current version
of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the `latest` tag. Typically, projects only use the
`latest` tag for stable release versions, and use other tags for unstable
versions such as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

Other than `latest`, no tag has any special significance to npm itself.

### Caveats

This command used to be known as `npm tag`, which only created new tags,
and so had a different syntax.

Tags must share a namespace with version numbers, because they are
specified in the same slot: `npm install <pkg>@<version>` vs
`npm install <pkg>@<tag>`.

Tags that can be interpreted as valid semver ranges will be rejected. For
example, `v1.4` cannot be used as a tag, because it is interpreted by
semver as `>=1.4.0 <1.5.0`.  See <https://github.com/npm/npm/issues/6082>.

The simplest way to avoid semver problems with tags is to use tags that do
not begin with a number or the letter `v`.

### Configuration

#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [npm publish](/commands/npm-publish)
* [npm install](/commands/npm-install)
* [npm dedupe](/commands/npm-dedupe)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-docs.md
====================================================

---
title: npm-docs
section: 1
description: Open documentation for a package in a web browser
---

### Synopsis

```bash
npm docs [<pkgname> [<pkgname> ...]]

alias: home
```

### Description

This command tries to guess at the likely location of a package's
documentation URL, and then tries to open it using the
[`--browser` config](/using-npm/config#browser) param. You can pass multiple
package names at once. If no package name is provided, it will search for a
`package.json` in the current folder and use the `name` property.

### Configuration

#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [npm view](/commands/npm-view)
* [npm publish](/commands/npm-publish)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [package.json](/configuring-npm/package-json)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-doctor.md
====================================================

---
title: npm-doctor
section: 1
description: Check the health of your npm environment
---

### Synopsis

```bash
npm doctor [ping] [registry] [versions] [environment] [permissions] [cache]
```

Note: This command is unaware of workspaces.

### Description

`npm doctor` runs a set of checks to ensure that your npm installation has
what it needs to manage your JavaScript packages. npm is mostly a
standalone tool, but it does have some basic requirements that must be met:

+ Node.js and git must be executable by npm.
+ The primary npm registry, `registry.npmjs.com`, or another service that
  uses the registry API, is available.
+ The directories that npm uses, `node_modules` (both locally and
  globally), exist and can be written by the current user.
+ The npm cache exists, and the package tarballs within it aren't corrupt.

Without all of these working properly, npm may not work properly.  Many
issues are often attributable to things that are outside npm's code base,
so `npm doctor` confirms that the npm installation is in a good state.

Also, in addition to this, there are also very many issue reports due to
using old versions of npm. Since npm is constantly improving, running
`npm@latest` is better than an old version.

`npm doctor` verifies the following items in your environment, and if
there are any recommended changes, it will display them.  By default npm
runs all of these checks. You can limit what checks are ran by
specifying them as extra arguments.

#### `npm ping`

By default, npm installs from the primary npm registry,
`registry.npmjs.org`.  `npm doctor` hits a special ping endpoint within the
registry. This can also be checked with `npm ping`. If this check fails,
you may be using a proxy that needs to be configured, or may need to talk
to your IT staff to get access over HTTPS to `registry.npmjs.org`.

This check is done against whichever registry you've configured (you can
see what that is by running `npm config get registry`), and if you're using
a private registry that doesn't support the `/whoami` endpoint supported by
the primary registry, this check may fail.

#### `npm -v`

While Node.js may come bundled with a particular version of npm, it's the
policy of the CLI team that we recommend all users run `npm@latest` if they
can. As the CLI is maintained by a small team of contributors, there are
only resources for a single line of development, so npm's own long-term
support releases typically only receive critical security and regression
fixes. The team believes that the latest tested version of npm is almost
always likely to be the most functional and defect-free version of npm.

#### `node -v`

For most users, in most circumstances, the best version of Node will be the
latest long-term support (LTS) release. Those of you who want access to new
ECMAscript features or bleeding-edge changes to Node's standard library may
be running a newer version, and some may be required to run an older
version of Node because of enterprise change control policies. That's OK!
But in general, the npm team recommends that most users run Node.js LTS.

#### `npm config get registry`

You may be installing from private package registries for your project or
company. That's great! Others may be following tutorials or StackOverflow
questions in an effort to troubleshoot problems you may be having.
Sometimes, this may entail changing the registry you're pointing at.  This
part of `npm doctor` just lets you, and maybe whoever's helping you with
support, know that you're not using the default registry.

#### `which git`

While it's documented in the README, it may not be obvious that npm needs
Git installed to do many of the things that it does. Also, in some cases
– especially on Windows – you may have Git set up in such a way that it's
not accessible via your `PATH` so that npm can find it. This check ensures
that Git is available.

#### Permissions checks

* Your cache must be readable and writable by the user running npm.
* Global package binaries must be writable by the user running npm.
* Your local `node_modules` path, if you're running `npm doctor` with a
  project directory, must be readable and writable by the user running npm.

#### Validate the checksums of cached packages

When an npm package is published, the publishing process generates a
checksum that npm uses at install time to verify that the package didn't
get corrupted in transit. `npm doctor` uses these checksums to validate the
package tarballs in your local cache (you can see where that cache is
located with `npm config get cache`). In the event that there are corrupt
packages in your cache, you should probably run `npm cache clean -f` and
reset the cache.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [npm bugs](/commands/npm-bugs)
* [npm help](/commands/npm-help)
* [npm ping](/commands/npm-ping)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-edit.md
====================================================

---
title: npm-edit
section: 1
description: Edit an installed package
---

### Synopsis

```bash
npm edit <pkg>[/<subpkg>...]
```

Note: This command is unaware of workspaces.

### Description

Selects a dependency in the current project and opens the package folder in
the default editor (or whatever you've configured as the npm `editor`
config -- see [`npm-config`](npm-config).)

After it has been edited, the package is rebuilt so as to pick up any
changes in compiled packages.

For instance, you can do `npm install connect` to install connect
into your package, and then `npm edit connect` to make a few
changes to your locally installed copy.

### Configuration

#### `editor`

* Default: The EDITOR or VISUAL environment variables, or
  '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.



### See Also

* [npm folders](/configuring-npm/folders)
* [npm explore](/commands/npm-explore)
* [npm install](/commands/npm-install)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-exec.md
====================================================

---
title: npm-exec
section: 1
description: Run a command from a local or remote npm package
---

### Synopsis

```bash
npm exec -- <pkg>[@<version>] [args...]
npm exec --package=<pkg>[@<version>] -- <cmd> [args...]
npm exec -c '<cmd> [args...]'
npm exec --package=foo -c '<cmd> [args...]'

alias: x
```

### Description

This command allows you to run an arbitrary command from an npm package
(either one installed locally, or fetched remotely), in a similar context
as running it via `npm run`.

Run without positional arguments or `--call`, this allows you to
interactively run commands in the same sort of shell environment that
`package.json` scripts are run.  Interactive mode is not supported in CI
environments when standard input is a TTY, to prevent hangs.

Whatever packages are specified by the `--package` option will be
provided in the `PATH` of the executed command, along with any locally
installed package executables.  The `--package` option may be
specified multiple times, to execute the supplied command in an environment
where all specified packages are available.

If any requested packages are not present in the local project
dependencies, then a prompt is printed, which can be suppressed by
providing either `--yes` or `--no`. When standard input is not a TTY or a
CI environment is detected, `--yes` is assumed. The requested packages are
installed to a folder in the npm cache, which is added to the `PATH`
environment variable in the executed process.

Package names provided without a specifier will be matched with whatever
version exists in the local project.  Package names with a specifier will
only be considered a match if they have the exact same name and version as
the local dependency.

If no `-c` or `--call` option is provided, then the positional arguments
are used to generate the command string.  If no `--package` options
are provided, then npm will attempt to determine the executable name from
the package specifier provided as the first positional argument according
to the following heuristic:

- If the package has a single entry in its `bin` field in `package.json`,
  or if all entries are aliases of the same command, then that command
  will be used.
- If the package has multiple `bin` entries, and one of them matches the
  unscoped portion of the `name` field, then that command will be used.
- If this does not result in exactly one option (either because there are
  no bin entries, or none of them match the `name` of the package), then
  `npm exec` exits with an error.

To run a binary _other than_ the named binary, specify one or more
`--package` options, which will prevent npm from inferring the package from
the first command argument.

### `npx` vs `npm exec`

When run via the `npx` binary, all flags and options *must* be set prior to
any positional arguments.  When run via `npm exec`, a double-hyphen `--`
flag can be used to suppress npm's parsing of switches and options that
should be sent to the executed command.

For example:

```
$ npx foo@latest bar --package=@npmcli/foo
```

In this case, npm will resolve the `foo` package name, and run the
following command:

```
$ foo bar --package=@npmcli/foo
```

Since the `--package` option comes _after_ the positional arguments, it is
treated as an argument to the executed command.

In contrast, due to npm's argument parsing logic, running this command is
different:

```
$ npm exec foo@latest bar --package=@npmcli/foo
```

In this case, npm will parse the `--package` option first, resolving the
`@npmcli/foo` package.  Then, it will execute the following command in that
context:

```
$ foo@latest bar
```

The double-hyphen character is recommended to explicitly tell npm to stop
parsing command line options and switches.  The following command would
thus be equivalent to the `npx` command above:

```
$ npm exec -- foo@latest bar --package=@npmcli/foo
```

### Configuration

#### `package`

* Default:
* Type: String (can be set multiple times)

The package or packages to install for [`npm exec`](/commands/npm-exec)



#### `call`

* Default: ""
* Type: String

Optional companion option for `npm exec`, `npx` that allows for specifying a
custom command to be run along with the installed packages.

```bash
npm exec --package yo --package generator-node --call "yo node"
```



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### Examples

Run the version of `tap` in the local dependencies, with the provided
arguments:

```
$ npm exec -- tap --bail test/foo.js
$ npx tap --bail test/foo.js
```

Run a command _other than_ the command whose name matches the package name
by specifying a `--package` option:

```
$ npm exec --package=foo -- bar --bar-argument
# ~ or ~
$ npx --package=foo bar --bar-argument
```

Run an arbitrary shell script, in the context of the current project:

```
$ npm x -c 'eslint && say "hooray, lint passed"'
$ npx -c 'eslint && say "hooray, lint passed"'
```

### Workspaces support

You may use the [`workspace`](/using-npm/config#workspace) or
[`workspaces`](/using-npm/config#workspaces) configs in order to run an
arbitrary command from an npm package (either one installed locally, or fetched
remotely) in the context of the specified workspaces.
If no positional argument or `--call` option is provided, it will open an
interactive subshell in the context of each of these configured workspaces one
at a time.

Given a project with configured workspaces, e.g:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   +-- b
   |   `-- package.json
   `-- c
       `-- package.json
```

Assuming the workspace configuration is properly set up at the root level
`package.json` file. e.g:

```
{
    "workspaces": [ "./packages/*" ]
}
```

You can execute an arbitrary command from a package in the context of each of
the configured workspaces when using the
[`workspaces` config options](/using-npm/config#workspace), in this example
we're using **eslint** to lint any js file found within each workspace folder:

```
npm exec --ws -- eslint ./*.js
```

#### Filtering workspaces

It's also possible to execute a command in a single workspace using the
`workspace` config along with a name or directory path:

```
npm exec --workspace=a -- eslint ./*.js
```

The `workspace` config can also be specified multiple times in order to run a
specific script in the context of multiple workspaces. When defining values for
the `workspace` config in the command line, it also possible to use `-w` as a
shorthand, e.g:

```
npm exec -w a -w b -- eslint ./*.js
```

This last command will run the `eslint` command in both `./packages/a` and
`./packages/b` folders.

### Compatibility with Older npx Versions

The `npx` binary was rewritten in npm v7.0.0, and the standalone `npx`
package deprecated at that time.  `npx` uses the `npm exec`
command instead of a separate argument parser and install process, with
some affordances to maintain backwards compatibility with the arguments it
accepted in previous versions.

This resulted in some shifts in its functionality:

- Any `npm` config value may be provided.
- To prevent security and user-experience problems from mistyping package
  names, `npx` prompts before installing anything.  Suppress this
  prompt with the `-y` or `--yes` option.
- The `--no-install` option is deprecated, and will be converted to `--no`.
- Shell fallback functionality is removed, as it is not advisable.
- The `-p` argument is a shorthand for `--parseable` in npm, but shorthand
  for `--package` in npx.  This is maintained, but only for the `npx`
  executable.
- The `--ignore-existing` option is removed.  Locally installed bins are
  always present in the executed process `PATH`.
- The `--npm` option is removed.  `npx` will always use the `npm` it ships
  with.
- The `--node-arg` and `-n` options are removed.
- The `--always-spawn` option is redundant, and thus removed.
- The `--shell` option is replaced with `--script-shell`, but maintained
  in the `npx` executable for backwards compatibility.

### A note on caching

The npm cli utilizes its internal package cache when using the package
name specified.  You can use the following to change how and when the
cli uses this cache. See [`npm cache`](/commands/npm-cache) for more on
how the cache works.

#### prefer-online

Forces staleness checks for packages, making the cli look for updates
immediately even if the package is already in the cache.

#### prefer-offline

Bypasses staleness checks for packages.  Missing data will still be
requested from the server. To force full offline mode, use `offline`.

#### offline

Forces full offline mode. Any packages not locally cached will result in
an error.

#### workspace

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result to selecting all of the
  nested workspaces)

This value is not exported to the environment for child processes.

#### workspaces

* Alias: `--ws`
* Type: Boolean
* Default: `false`

Run scripts in the context of all configured workspaces for the current
project.

### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm start](/commands/npm-start)
* [npm restart](/commands/npm-restart)
* [npm stop](/commands/npm-stop)
* [npm config](/commands/npm-config)
* [npm workspaces](/using-npm/workspaces)
* [npx](/commands/npx)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-explain.md
====================================================

---
title: npm-explain
section: 1
description: Explain installed packages
---

### Synopsis

```bash
npm explain <package-spec>

alias: why
```

### Description

This command will print the chain of dependencies causing a given package
to be installed in the current project.

If one or more package specs are provided, then only packages matching
one of the specifiers will have their relationships explained.

The package spec can also refer to a folder within `./node_modules`

For example, running `npm explain glob` within npm's source tree will show:

```bash
glob@7.1.6
node_modules/glob
  glob@"^7.1.4" from the root project

glob@7.1.1 dev
node_modules/tacks/node_modules/glob
  glob@"^7.0.5" from rimraf@2.6.2
  node_modules/tacks/node_modules/rimraf
    rimraf@"^2.6.2" from tacks@1.3.0
    node_modules/tacks
      dev tacks@"^1.3.0" from the root project
```

To explain just the package residing at a specific folder, pass that as the
argument to the command.  This can be useful when trying to figure out
exactly why a given dependency is being duplicated to satisfy conflicting
version requirements within the project.

```bash
$ npm explain node_modules/nyc/node_modules/find-up
find-up@3.0.0 dev
node_modules/nyc/node_modules/find-up
  find-up@"^3.0.0" from nyc@14.1.1
  node_modules/nyc
    nyc@"^14.1.1" from tap@14.10.8
    node_modules/tap
      dev tap@"^14.10.8" from the root project
```

### Configuration
#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm folders](/configuring-npm/folders)
* [npm ls](/commands/npm-ls)
* [npm install](/commands/npm-install)
* [npm link](/commands/npm-link)
* [npm prune](/commands/npm-prune)
* [npm outdated](/commands/npm-outdated)
* [npm update](/commands/npm-update)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-explore.md
====================================================

---
title: npm-explore
section: 1
description: Browse an installed package
---

### Synopsis

```bash
npm explore <pkg> [ -- <command>]
```

Note: This command is unaware of workspaces.

### Description

Spawn a subshell in the directory of the installed package specified.

If a command is specified, then it is run in the subshell, which then
immediately terminates.

This is particularly handy in the case of git submodules in the
`node_modules` folder:

```bash
npm explore some-dependency -- git pull origin master
```

Note that the package is *not* automatically rebuilt afterwards, so be
sure to use `npm rebuild <pkg>` if you make any changes.

### Configuration

#### `shell`

* Default: SHELL environment variable, or "bash" on Posix, or "cmd.exe" on
  Windows
* Type: String

The shell to run for the `npm explore` command.



### See Also

* [npm folders](/configuring-npm/folders)
* [npm edit](/commands/npm-edit)
* [npm rebuild](/commands/npm-rebuild)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-find-dupes.md
====================================================

---
title: npm-find-dupes
section: 1
description: Find duplication in the package tree
---

### Synopsis

```bash
npm find-dupes
```

### Description

Runs `npm dedupe` in `--dry-run` mode, making npm only output the
duplications, without actually changing the package tree.

### Configuration

#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm dedupe](/commands/npm-dedupe)
* [npm ls](/commands/npm-ls)
* [npm update](/commands/npm-update)
* [npm install](/commands/npm-install)



________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-fund.md
====================================================

---
title: npm-fund
section: 1
description: Retrieve funding information
---

### Synopsis

```bash
npm fund [<package-spec>]
```

### Description

This command retrieves information on how to fund the dependencies of a
given project. If no package name is provided, it will list all
dependencies that are looking for funding in a tree structure, listing
the type of funding and the url to visit. If a package name is provided
then it tries to open its funding url using the
[`--browser` config](/using-npm/config#browser) param; if there are multiple
funding sources for the package, the user will be instructed to pass the
`--which` option to disambiguate.

The list will avoid duplicated entries and will stack all packages that
share the same url as a single entry. Thus, the list does not have the
same shape of the output from `npm ls`.

#### Example

### Workspaces support

It's possible to filter the results to only include a single workspace
and its dependencies using the
[`workspace` config](/using-npm/config#workspace) option.

#### Example:

Here's an example running `npm fund` in a project with a configured
workspace `a`:

```bash
$ npm fund
test-workspaces-fund@1.0.0
+-- https://example.com/a
| | `-- a@1.0.0
| `-- https://example.com/maintainer
|     `-- foo@1.0.0
+-- https://example.com/npmcli-funding
|   `-- @npmcli/test-funding
`-- https://example.com/org
    `-- bar@2.0.0
```

And here is an example of the expected result when filtering only by a
specific workspace `a` in the same project:

```bash
$ npm fund -w a
test-workspaces-fund@1.0.0
`-- https://example.com/a
  | `-- a@1.0.0
  `-- https://example.com/maintainer
      `-- foo@2.0.0
```

### Configuration

#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `which`

* Default: null
* Type: null or Number

If there are multiple funding sources, which 1-indexed source URL to open.



## See Also

* [package spec](/using-npm/package-spec)
* [npm install](/commands/npm-install)
* [npm docs](/commands/npm-docs)
* [npm ls](/commands/npm-ls)
* [npm config](/commands/npm-config)
* [npm workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-help-search.md
====================================================

---
title: npm-help-search
section: 1
description: Search npm help documentation
---

### Synopsis

```bash
npm help-search <text>
```

Note: This command is unaware of workspaces.

### Description

This command will search the npm markdown documentation files for the terms
provided, and then list the results, sorted by relevance.

If only one result is found, then it will show that help topic.

If the argument to `npm help` is not a known help topic, then it will call
`help-search`.  It is rarely if ever necessary to call this command
directly.

### Configuration

#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



### See Also

* [npm](/commands/npm)
* [npm help](/commands/npm-help)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-help.md
====================================================

---
title: npm-help
section: 1
description: Get help on npm
---

### Synopsis

```bash
npm help <term> [<terms..>]

alias: hlep
```

Note: This command is unaware of workspaces.

### Description

If supplied a topic, then show the appropriate documentation page.

If the topic does not exist, or if multiple terms are provided, then npm
will run the `help-search` command to find a match.  Note that, if
`help-search` finds a single subject, then it will run `help` on that
topic, so unique matches are equivalent to specifying a topic name.

### Configuration

#### `viewer`

* Default: "man" on Posix, "browser" on Windows
* Type: String

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.



### See Also

* [npm](/commands/npm)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [package.json](/configuring-npm/package-json)
* [npm help-search](/commands/npm-help-search)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-hook.md
====================================================

---
title: npm-hook
section: 1
description: Manage registry hooks
---

### Synopsis

```bash
npm hook add <pkg> <url> <secret> [--type=<type>]
npm hook ls [pkg]
npm hook rm <id>
npm hook update <id> <url> <secret>
```

Note: This command is unaware of workspaces.

### Description

Allows you to manage [npm
hooks](https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm),
including adding, removing, listing, and updating.

Hooks allow you to configure URL endpoints that will be notified whenever a
change happens to any of the supported entity types. Three different types
of entities can be watched by hooks: packages, owners, and scopes.

To create a package hook, simply reference the package name.

To create an owner hook, prefix the owner name with `~` (as in,
`~youruser`).

To create a scope hook, prefix the scope name with `@` (as in,
`@yourscope`).

The hook `id` used by `update` and `rm` are the IDs listed in `npm hook ls`
for that particular hook.

The shared secret will be sent along to the URL endpoint so you can verify
the request came from your own configured hook.

### Example

Add a hook to watch a package for changes:

```bash
$ npm hook add lodash https://example.com/ my-shared-secret
```

Add a hook to watch packages belonging to the user `substack`:

```bash
$ npm hook add ~substack https://example.com/ my-shared-secret
```

Add a hook to watch packages in the scope `@npm`

```bash
$ npm hook add @npm https://example.com/ my-shared-secret
```

List all your active hooks:

```bash
$ npm hook ls
```

List your active hooks for the `lodash` package:

```bash
$ npm hook ls lodash
```

Update an existing hook's url:

```bash
$ npm hook update id-deadbeef https://my-new-website.here/
```

Remove a hook:

```bash
$ npm hook rm id-deadbeef
```

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* ["Introducing Hooks" blog post](https://blog.npmjs.org/post/145260155635/introducing-hooks-get-notifications-of-npm)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-init.md
====================================================

---
title: npm-init
section: 1
description: Create a package.json file
---

### Synopsis

```bash
npm init <package-spec> (same as `npx <package-spec>`)
npm init <@scope> (same as `npx <@scope>/create`)

aliases: create, innit
```

### Description

`npm init <initializer>` can be used to set up a new or existing npm
package.

`initializer` in this case is an npm package named `create-<initializer>`,
which will be installed by [`npm-exec`](/commands/npm-exec), and then have its
main bin executed -- presumably creating or updating `package.json` and
running any other initialization-related operations.

The init command is transformed to a corresponding `npm exec` operation as
follows:

* `npm init foo` -> `npm exec create-foo`
* `npm init @usr/foo` -> `npm exec @usr/create-foo`
* `npm init @usr` -> `npm exec @usr/create`
* `npm init @usr@2.0.0` -> `npm exec @usr/create@2.0.0`
* `npm init @usr/foo@2.0.0` -> `npm exec @usr/create-foo@2.0.0`

If the initializer is omitted (by just calling `npm init`), init will fall
back to legacy init behavior. It will ask you a bunch of questions, and
then write a package.json for you. It will attempt to make reasonable
guesses based on existing fields, dependencies, and options selected. It is
strictly additive, so it will keep any fields and values that were already
set. You can also use `-y`/`--yes` to skip the questionnaire altogether. If
you pass `--scope`, it will create a scoped package.

*Note:* if a user already has the `create-<initializer>` package
globally installed, that will be what `npm init` uses.  If you want npm
to use the latest version, or another specific version you must specify
it:

* `npm init foo@latest` # fetches and runs the latest `create-foo` from
    the registry
* `npm init foo@1.2.3` #  runs `create-foo@1.2.3` specifically

#### Forwarding additional options

Any additional options will be passed directly to the command, so `npm init
foo -- --hello` will map to `npm exec -- create-foo --hello`.

To better illustrate how options are forwarded, here's a more evolved
example showing options passed to both the **npm cli** and a create package,
both following commands are equivalent:

- `npm init foo -y --registry=<url> -- --hello -a`
- `npm exec -y --registry=<url> -- create-foo --hello -a`

### Examples

Create a new React-based project using
[`create-react-app`](https://npm.im/create-react-app):

```bash
$ npm init react-app ./my-react-app
```

Create a new `esm`-compatible package using
[`create-esm`](https://npm.im/create-esm):

```bash
$ mkdir my-esm-lib && cd my-esm-lib
$ npm init esm --yes
```

Generate a plain old package.json using legacy init:

```bash
$ mkdir my-npm-pkg && cd my-npm-pkg
$ git init
$ npm init
```

Generate it without having it ask any questions:

```bash
$ npm init -y
```

### Workspaces support

It's possible to create a new workspace within your project by using the
`workspace` config option. When using `npm init -w <dir>` the cli will
create the folders and boilerplate expected while also adding a reference
to your project `package.json` `"workspaces": []` property in order to make
sure that new generated **workspace** is properly set up as such.

Given a project with no workspaces, e.g:

```
.
+-- package.json
```

You may generate a new workspace using the legacy init:

```bash
$ npm init -w packages/a
```

That will generate a new folder and `package.json` file, while also updating
your top-level `package.json` to add the reference to this new workspace:

```
.
+-- package.json
`-- packages
   `-- a
       `-- package.json
```

The workspaces init also supports the `npm init <initializer> -w <dir>`
syntax, following the same set of rules explained earlier in the initial
**Description** section of this page. Similar to the previous example of
creating a new React-based project using
[`create-react-app`](https://npm.im/create-react-app), the following syntax
will make sure to create the new react app as a nested **workspace** within your
project and configure your `package.json` to recognize it as such:

```bash
npm init -w packages/my-react-app react-app .
```

This will make sure to generate your react app as expected, one important
consideration to have in mind is that `npm exec` is going to be run in the
context of the newly created folder for that workspace, and that's the reason
why in this example the initializer uses the initializer name followed with a
dot to represent the current directory in that context, e.g: `react-app .`:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   `-- my-react-app
       +-- README
       +-- package.json
       `-- ...
```

### Configuration

#### `init-author-name`

* Default: ""
* Type: String

The value `npm init` should use by default for the package author's name.



#### `init-author-url`

* Default: ""
* Type: "" or URL

The value `npm init` should use by default for the package author's
homepage.



#### `init-license`

* Default: "ISC"
* Type: String

The value `npm init` should use by default for the package license.



#### `init-module`

* Default: "~/.npm-init.js"
* Type: Path

A module that will be loaded by the `npm init` command. See the
documentation for the
[init-package-json](https://github.com/npm/init-package-json) module for
more information, or [npm init](/commands/npm-init).



#### `init-version`

* Default: "1.0.0"
* Type: SemVer string

The value that `npm init` should use by default for the package version
number, if not already set in package.json.



#### `yes`

* Default: null
* Type: null or Boolean

Automatically answer "yes" to any prompts that npm might print on the
command line.



#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `workspaces-update`

* Default: true
* Type: Boolean

If set to true, the npm cli will run an update after operations that may
possibly change the workspaces installed to the `node_modules` folder.



#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [init-package-json module](http://npm.im/init-package-json)
* [package.json](/configuring-npm/package-json)
* [npm version](/commands/npm-version)
* [npm scope](/using-npm/scope)
* [npm exec](/commands/npm-exec)
* [npm workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-install-ci-test.md
====================================================

---
title: npm-install-ci-test
section: 1
description: Install a project with a clean slate and run tests
---

### Synopsis

```bash
npm install-ci-test

aliases: cit, clean-install-test, sit
```

### Description

This command runs `npm ci` followed immediately by `npm test`.

### Configuration

#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm install-test](/commands/npm-install-test)
* [npm ci](/commands/npm-ci)
* [npm test](/commands/npm-test)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-install-test.md
====================================================

---
title: npm-install-test
section: 1
description: Install package(s) and run tests
---

### Synopsis

```bash
npm install-test [<package-spec> ...]

alias: it
```

### Description

This command runs an `npm install` followed immediately by an `npm test`. It
takes exactly the same arguments as `npm install`.

### Configuration

#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `save-exact`

* Default: false
* Type: Boolean

Dependencies saved to package.json will be configured with an exact version
rather than using npm's default semver range operator.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `prefer-dedupe`

* Default: false
* Type: Boolean

Prefer to deduplicate packages if possible, rather than choosing a newer
version of a dependency.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `cpu`

* Default: null
* Type: null or String

Override CPU architecture of native modules to install. Acceptable values
are same as `cpu` field of package.json, which comes from `process.arch`.



#### `os`

* Default: null
* Type: null or String

Override OS of native modules to install. Acceptable values are same as `os`
field of package.json, which comes from `process.platform`.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm install](/commands/npm-install)
* [npm install-ci-test](/commands/npm-install-ci-test)
* [npm test](/commands/npm-test)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-install.md
====================================================

---
title: npm-install
section: 1
description: Install a package
---

### Synopsis

```bash
npm install [<package-spec> ...]

aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
```

### Description

This command installs a package and any packages that it depends on. If the
package has a package-lock, or an npm shrinkwrap file, or a yarn lock file,
the installation of dependencies will be driven by that, respecting the
following order of precedence:

* `npm-shrinkwrap.json`
* `package-lock.json`
* `yarn.lock`

See [package-lock.json](/configuring-npm/package-lock-json) and
[`npm shrinkwrap`](/commands/npm-shrinkwrap).

A `package` is:

* a) a folder containing a program described by a
  [`package.json`](/configuring-npm/package-json) file
* b) a gzipped tarball containing (a)
* c) a url that resolves to (b)
* d) a `<name>@<version>` that is published on the registry (see
  [`registry`](/using-npm/registry)) with (c)
* e) a `<name>@<tag>` (see [`npm dist-tag`](/commands/npm-dist-tag)) that
  points to (d)
* f) a `<name>` that has a "latest" tag satisfying (e)
* g) a `<git remote url>` that resolves to (a)

Even if you never publish your package, you can still get a lot of benefits
of using npm if you just want to write a node program (a), and perhaps if
you also want to be able to easily install it elsewhere after packing it up
into a tarball (b).


* `npm install` (in a package directory, no arguments):

    Install the dependencies to the local `node_modules` folder.

    In global mode (ie, with `-g` or `--global` appended to the command),
    it installs the current package context (ie, the current working
    directory) as a global package.

    By default, `npm install` will install all modules listed as
    dependencies in [`package.json`](/configuring-npm/package-json).

    With the `--production` flag (or when the `NODE_ENV` environment
    variable is set to `production`), npm will not install modules listed
    in `devDependencies`. To install all modules listed in both
    `dependencies` and `devDependencies` when `NODE_ENV` environment
    variable is set to `production`, you can use `--production=false`.

    > NOTE: The `--production` flag has no particular meaning when adding a
    dependency to a project.

* `npm install <folder>`:

    If `<folder>` sits inside the root of your project, its dependencies will be installed and may
    be hoisted to the top-level `node_modules` as they would for other
    types of dependencies. If `<folder>` sits outside the root of your project,
    *npm will not install the package dependencies* in the directory `<folder>`,
    but it will create a symlink to `<folder>`.

    > NOTE: If you want to install the content of a directory like a package from the registry instead of creating a link, you would need to use the `--install-links` option.

    Example:

    ```bash
    npm install ../../other-package --install-links
    npm install ./sub-package
    ```

* `npm install <tarball file>`:

    Install a package that is sitting on the filesystem.  Note: if you just
    want to link a dev directory into your npm root, you can do this more
    easily by using [`npm link`](/commands/npm-link).

    Tarball requirements:
    * The filename *must* use `.tar`, `.tar.gz`, or `.tgz` as the
      extension.
    * The package contents should reside in a subfolder inside the tarball
      (usually it is called `package/`). npm strips one directory layer
      when installing the package (an equivalent of `tar x
      --strip-components=1` is run).
    * The package must contain a `package.json` file with `name` and
      `version` properties.

    Example:

    ```bash
    npm install ./package.tgz
    ```

* `npm install <tarball url>`:

    Fetch the tarball url, and then install it.  In order to distinguish between
    this and other options, the argument must start with "http://" or "https://"

    Example:

    ```bash
    npm install https://github.com/indexzero/forever/tarball/v0.5.6
    ```

* `npm install [<@scope>/]<name>`:

    Do a `<name>@<tag>` install, where `<tag>` is the "tag" config. (See
    [`config`](/using-npm/config#tag). The config's default value is `latest`.)

    In most cases, this will install the version of the modules tagged as
    `latest` on the npm registry.

    Example:

    ```bash
    npm install sax
    ```

    `npm install` saves any specified packages into `dependencies` by default.
    Additionally, you can control where and how they get saved with some
    additional flags:

    * `-P, --save-prod`: Package will appear in your `dependencies`. This
      is the default unless `-D` or `-O` are present.

    * `-D, --save-dev`: Package will appear in your `devDependencies`.

    * `-O, --save-optional`: Package will appear in your
      `optionalDependencies`.

    * `--no-save`: Prevents saving to `dependencies`.

    When using any of the above options to save dependencies to your
    package.json, there are two additional, optional flags:

    * `-E, --save-exact`: Saved dependencies will be configured with an
      exact version rather than using npm's default semver range operator.

    * `-B, --save-bundle`: Saved dependencies will also be added to your
      `bundleDependencies` list.

    Further, if you have an `npm-shrinkwrap.json` or `package-lock.json`
    then it will be updated as well.

    `<scope>` is optional. The package will be downloaded from the registry
    associated with the specified scope. If no registry is associated with
    the given scope the default registry is assumed. See
    [`scope`](/using-npm/scope).

    Note: if you do not include the @-symbol on your scope name, npm will
    interpret this as a GitHub repository instead, see below. Scopes names
    must also be followed by a slash.

    Examples:

    ```bash
    npm install sax
    npm install githubname/reponame
    npm install @myorg/privatepackage
    npm install node-tap --save-dev
    npm install dtrace-provider --save-optional
    npm install readable-stream --save-exact
    npm install ansi-regex --save-bundle
    ```

    **Note**: If there is a file or folder named `<name>` in the current
    working directory, then it will try to install that, and only try to
    fetch the package by name if it is not valid.

* `npm install <alias>@npm:<name>`:

    Install a package under a custom alias. Allows multiple versions of
    a same-name package side-by-side, more convenient import names for
    packages with otherwise long ones, and using git forks replacements
    or forked npm packages as replacements. Aliasing works only on your
    project and does not rename packages in transitive dependencies.
    Aliases should follow the naming conventions stated in
    [`validate-npm-package-name`](https://www.npmjs.com/package/validate-npm-package-name#naming-rules).

    Examples:

    ```bash
    npm install my-react@npm:react
    npm install jquery2@npm:jquery@2
    npm install jquery3@npm:jquery@3
    npm install npa@npm:npm-package-arg
    ```

* `npm install [<@scope>/]<name>@<tag>`:

    Install the version of the package that is referenced by the specified tag.
    If the tag does not exist in the registry data for that package, then this
    will fail.

    Example:

    ```bash
    npm install sax@latest
    npm install @myorg/mypackage@latest
    ```

* `npm install [<@scope>/]<name>@<version>`:

    Install the specified version of the package.  This will fail if the
    version has not been published to the registry.

    Example:

    ```bash
    npm install sax@0.1.1
    npm install @myorg/privatepackage@1.5.0
    ```

* `npm install [<@scope>/]<name>@<version range>`:

    Install a version of the package matching the specified version range.
    This will follow the same rules for resolving dependencies described in
    [`package.json`](/configuring-npm/package-json).

    Note that most version ranges must be put in quotes so that your shell
    will treat it as a single argument.

    Example:

    ```bash
    npm install sax@">=0.1.0 <0.2.0"
    npm install @myorg/privatepackage@"16 - 17"
    ```

* `npm install <git remote url>`:

    Installs the package from the hosted git provider, cloning it with
    `git`.  For a full git remote url, only that URL will be attempted.

    ```bash
    <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
    ```

    `<protocol>` is one of `git`, `git+ssh`, `git+http`, `git+https`, or
    `git+file`.

    If `#<commit-ish>` is provided, it will be used to clone exactly that
    commit. If the commit-ish has the format `#semver:<semver>`, `<semver>`
    can be any valid semver range or exact version, and npm will look for
    any tags or refs matching that range in the remote repository, much as
    it would for a registry dependency. If neither `#<commit-ish>` or
    `#semver:<semver>` is specified, then the default branch of the
    repository is used.

    If the repository makes use of submodules, those submodules will be
    cloned as well.

    If the package being installed contains a `prepare` script, its
    `dependencies` and `devDependencies` will be installed, and the prepare
    script will be run, before the package is packaged and installed.

    The following git environment variables are recognized by npm and will
    be added to the environment when running git:

    * `GIT_ASKPASS`
    * `GIT_EXEC_PATH`
    * `GIT_PROXY_COMMAND`
    * `GIT_SSH`
    * `GIT_SSH_COMMAND`
    * `GIT_SSL_CAINFO`
    * `GIT_SSL_NO_VERIFY`

    See the git man page for details.

    Examples:

    ```bash
    npm install git+ssh://git@github.com:npm/cli.git#v1.0.27
    npm install git+ssh://git@github.com:npm/cli#pull/273
    npm install git+ssh://git@github.com:npm/cli#semver:^5.0
    npm install git+https://isaacs@github.com/npm/cli.git
    npm install git://github.com/npm/cli.git#v1.0.27
    GIT_SSH_COMMAND='ssh -i ~/.ssh/custom_ident' npm install git+ssh://git@github.com:npm/cli.git
    ```

* `npm install <githubname>/<githubrepo>[#<commit-ish>]`:
* `npm install github:<githubname>/<githubrepo>[#<commit-ish>]`:

    Install the package at `https://github.com/githubname/githubrepo` by
    attempting to clone it using `git`.

    If `#<commit-ish>` is provided, it will be used to clone exactly that
    commit. If the commit-ish has the format `#semver:<semver>`, `<semver>`
    can be any valid semver range or exact version, and npm will look for
    any tags or refs matching that range in the remote repository, much as
    it would for a registry dependency. If neither `#<commit-ish>` or
    `#semver:<semver>` is specified, then the default branch is used.

    As with regular git dependencies, `dependencies` and `devDependencies`
    will be installed if the package has a `prepare` script before the
    package is done installing.

    Examples:

    ```bash
    npm install mygithubuser/myproject
    npm install github:mygithubuser/myproject
   ```

* `npm install gist:[<githubname>/]<gistID>[#<commit-ish>|#semver:<semver>]`:

    Install the package at `https://gist.github.com/gistID` by attempting to
    clone it using `git`. The GitHub username associated with the gist is
    optional and will not be saved in `package.json`.

    As with regular git dependencies, `dependencies` and `devDependencies` will
    be installed if the package has a `prepare` script before the package is
    done installing.

    Example:

    ```bash
    npm install gist:101a11beef
    ```

* `npm install bitbucket:<bitbucketname>/<bitbucketrepo>[#<commit-ish>]`:

    Install the package at `https://bitbucket.org/bitbucketname/bitbucketrepo`
    by attempting to clone it using `git`.

    If `#<commit-ish>` is provided, it will be used to clone exactly that
    commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
    be any valid semver range or exact version, and npm will look for any tags
    or refs matching that range in the remote repository, much as it would for a
    registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
    specified, then `master` is used.

    As with regular git dependencies, `dependencies` and `devDependencies` will
    be installed if the package has a `prepare` script before the package is
    done installing.

    Example:

    ```bash
    npm install bitbucket:mybitbucketuser/myproject
    ```

* `npm install gitlab:<gitlabname>/<gitlabrepo>[#<commit-ish>]`:

    Install the package at `https://gitlab.com/gitlabname/gitlabrepo`
    by attempting to clone it using `git`.

    If `#<commit-ish>` is provided, it will be used to clone exactly that
    commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
    be any valid semver range or exact version, and npm will look for any tags
    or refs matching that range in the remote repository, much as it would for a
    registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
    specified, then `master` is used.

    As with regular git dependencies, `dependencies` and `devDependencies` will
    be installed if the package has a `prepare` script before the package is
    done installing.

    Example:

    ```bash
    npm install gitlab:mygitlabuser/myproject
    npm install gitlab:myusr/myproj#semver:^5.0
    ```

You may combine multiple arguments and even multiple types of arguments.
For example:

```bash
npm install sax@">=0.1.0 <0.2.0" bench supervisor
```

The `--tag` argument will apply to all of the specified install targets. If
a tag with the given name exists, the tagged version is preferred over
newer versions.

The `--dry-run` argument will report in the usual way what the install
would have done without actually installing anything.

The `--package-lock-only` argument will only update the
`package-lock.json`, instead of checking `node_modules` and downloading
dependencies.

The `-f` or `--force` argument will force npm to fetch remote resources
even if a local copy exists on disk.

```bash
npm install sax --force
```

### Configuration

See the [`config`](/using-npm/config) help doc.  Many of the configuration
params have some effect on installation, since that's most of what npm
does.

These are some of the most common options related to installation.

#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `save-exact`

* Default: false
* Type: Boolean

Dependencies saved to package.json will be configured with an exact version
rather than using npm's default semver range operator.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `prefer-dedupe`

* Default: false
* Type: Boolean

Prefer to deduplicate packages if possible, rather than choosing a newer
version of a dependency.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `cpu`

* Default: null
* Type: null or String

Override CPU architecture of native modules to install. Acceptable values
are same as `cpu` field of package.json, which comes from `process.arch`.



#### `os`

* Default: null
* Type: null or String

Override OS of native modules to install. Acceptable values are same as `os`
field of package.json, which comes from `process.platform`.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### Algorithm

Given a `package{dep}` structure: `A{B,C}, B{C}, C{D}`,
the npm install algorithm produces:

```bash
A
+-- B
+-- C
+-- D
```

That is, the dependency from B to C is satisfied by the fact that A already
caused C to be installed at a higher level. D is still installed at the top
level because nothing conflicts with it.

For `A{B,C}, B{C,D@1}, C{D@2}`, this algorithm produces:

```bash
A
+-- B
+-- C
   `-- D@2
+-- D@1
```

Because B's D@1 will be installed in the top-level, C now has to install
D@2 privately for itself. This algorithm is deterministic, but different
trees may be produced if two dependencies are requested for installation in
a different order.

See [folders](/configuring-npm/folders) for a more detailed description of
the specific folder structures that npm creates.

### See Also

* [npm folders](/configuring-npm/folders)
* [npm update](/commands/npm-update)
* [npm audit](/commands/npm-audit)
* [npm fund](/commands/npm-fund)
* [npm link](/commands/npm-link)
* [npm rebuild](/commands/npm-rebuild)
* [npm scripts](/using-npm/scripts)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm registry](/using-npm/registry)
* [npm dist-tag](/commands/npm-dist-tag)
* [npm uninstall](/commands/npm-uninstall)
* [npm shrinkwrap](/commands/npm-shrinkwrap)
* [package.json](/configuring-npm/package-json)
* [workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-link.md
====================================================

---
title: npm-link
section: 1
description: Symlink a package folder
---

### Synopsis

```bash
npm link [<package-spec>]

alias: ln
```

### Description

This is handy for installing your own stuff, so that you can work on it and
test iteratively without having to continually rebuild.

Package linking is a two-step process.

First, `npm link` in a package folder with no arguments will create a
symlink in the global folder `{prefix}/lib/node_modules/<package>` that
links to the package where the `npm link` command was executed. It will
also link any bins in the package to `{prefix}/bin/{name}`.  Note that
`npm link` uses the global prefix (see `npm prefix -g` for its value).

Next, in some other location, `npm link package-name` will create a
symbolic link from globally-installed `package-name` to `node_modules/` of
the current folder.

Note that `package-name` is taken from `package.json`, _not_ from the
directory name.

The package name can be optionally prefixed with a scope. See
[`scope`](/using-npm/scope).  The scope must be preceded by an @-symbol and
followed by a slash.

When creating tarballs for `npm publish`, the linked packages are
"snapshotted" to their current state by resolving the symbolic links, if
they are included in `bundleDependencies`.

For example:

```bash
cd ~/projects/node-redis    # go into the package directory
npm link                    # creates global link
cd ~/projects/node-bloggy   # go into some other package directory.
npm link redis              # link-install the package
```

Now, any changes to `~/projects/node-redis` will be reflected in
`~/projects/node-bloggy/node_modules/node-redis/`. Note that the link
should be to the package name, not the directory name for that package.

You may also shortcut the two steps in one.  For example, to do the
above use-case in a shorter way:

```bash
cd ~/projects/node-bloggy  # go into the dir of your main project
npm link ../node-redis     # link the dir of your dependency
```

The second line is the equivalent of doing:

```bash
(cd ../node-redis; npm link)
npm link redis
```

That is, it first creates a global link, and then links the global
installation target into your project's `node_modules` folder.

Note that in this case, you are referring to the directory name,
`node-redis`, rather than the package name `redis`.

If your linked package is scoped (see [`scope`](/using-npm/scope)) your
link command must include that scope, e.g.

```bash
npm link @myorg/privatepackage
```

### Caveat

Note that package dependencies linked in this way are _not_ saved to
`package.json` by default, on the assumption that the intention is to have
a link stand in for a regular non-link dependency.  Otherwise, for example,
if you depend on `redis@^3.0.1`, and ran `npm link redis`, it would replace
the `^3.0.1` dependency with `file:../path/to/node-redis`, which you
probably don't want!  Additionally, other users or developers on your
project would run into issues if they do not have their folders set up
exactly the same as yours.

If you are adding a _new_ dependency as a link, you should add it to the
relevant metadata by running `npm install <dep> --package-lock-only`.

If you _want_ to save the `file:` reference in your `package.json` and
`package-lock.json` files, you can use `npm link <dep> --save` to do so.

### Workspace Usage

`npm link <pkg> --workspace <name>` will link the relevant package as a
dependency of the specified workspace(s).  Note that It may actually be
linked into the parent project's `node_modules` folder, if there are no
conflicting dependencies.

`npm link --workspace <name>` will create a global link to the specified
workspace(s).

### Configuration

#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `save-exact`

* Default: false
* Type: Boolean

Dependencies saved to package.json will be configured with an exact version
rather than using npm's default semver range operator.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [package spec](/using-npm/package-spec)
* [npm developers](/using-npm/developers)
* [package.json](/configuring-npm/package-json)
* [npm install](/commands/npm-install)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-login.md
====================================================

---
title: npm-login
section: 1
description: Login to a registry user account
---

### Synopsis

```bash
npm login
```

Note: This command is unaware of workspaces.

### Description

Verify a user in the specified registry, and save the credentials to the
`.npmrc` file. If no registry is specified, the default registry will be
used (see [`config`](/using-npm/config)).

When using `legacy` for your `auth-type`, the username and password, are
read in from prompts.

To reset your password, go to <https://www.npmjs.com/forgot>

To change your email address, go to <https://www.npmjs.com/email-edit>

You may use this command multiple times with the same user account to
authorize on a new machine.  When authenticating on a new machine,
the username, password and email address must all match with
your existing record.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



#### `auth-type`

* Default: "web"
* Type: "legacy" or "web"

What authentication strategy to use with `login`. Note that if an `otp`
config is given, this value will always be set to `legacy`.



### See Also

* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm owner](/commands/npm-owner)
* [npm whoami](/commands/npm-whoami)
* [npm token](/commands/npm-token)
* [npm profile](/commands/npm-profile)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-logout.md
====================================================

---
title: npm-logout
section: 1
description: Log out of the registry
---

### Synopsis

```bash
npm logout
```

Note: This command is unaware of workspaces.

### Description

When logged into a registry that supports token-based authentication, tell
the server to end this token's session. This will invalidate the token
everywhere you're using it, not just for the current environment.

When logged into a legacy registry that uses username and password
authentication, this will clear the credentials in your user configuration.
In this case, it will _only_ affect the current environment.

If `--scope` is provided, this will find the credentials for the registry
connected to that scope, if set.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



### See Also

* [npm adduser](/commands/npm-adduser)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npm whoami](/commands/npm-whoami)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-ls.md
====================================================

---
title: npm-ls
section: 1
description: List installed packages
---

### Synopsis

```bash
npm ls <package-spec>

alias: list
```

### Description

This command will print to stdout all the versions of packages that are
installed, as well as their dependencies when `--all` is specified, in a
tree structure.

Note: to get a "bottoms up" view of why a given package is included in the
tree at all, use [`npm explain`](/commands/npm-explain).

Positional arguments are `name@version-range` identifiers, which will limit
the results to only the paths to the packages named.  Note that nested
packages will *also* show the paths to the specified packages.  For
example, running `npm ls promzard` in npm's source tree will show:

```bash
npm@10.2.0 /path/to/npm
└─┬ init-package-json@0.0.4
  └── promzard@0.1.5
```

It will print out extraneous, missing, and invalid packages.

If a project specifies git urls for dependencies these are shown
in parentheses after the `name@version` to make it easier for users to
recognize potential forks of a project.

The tree shown is the logical dependency tree, based on package
dependencies, not the physical layout of your `node_modules` folder.

When run as `ll` or `la`, it shows extended information by default.

### Note: Design Changes Pending

The `npm ls` command's output and behavior made a _ton_ of sense when npm
created a `node_modules` folder that naively nested every dependency.  In
such a case, the logical dependency graph and physical tree of packages on
disk would be roughly identical.

With the advent of automatic install-time deduplication of dependencies in
npm v3, the `ls` output was modified to display the logical dependency
graph as a tree structure, since this was more useful to most users.
However, without using `npm ls -l`, it became impossible to show _where_ a
package was actually installed much of the time!

With the advent of automatic installation of `peerDependencies` in npm v7,
this gets even more curious, as `peerDependencies` are logically
"underneath" their dependents in the dependency graph, but are always
physically at or above their location on disk.

Also, in the years since npm got an `ls` command (in version 0.0.2!),
dependency graphs have gotten much larger as a general rule.  Therefore, in
order to avoid dumping an excessive amount of content to the terminal, `npm
ls` now only shows the _top_ level dependencies, unless `--all` is
provided.

A thorough re-examination of the use cases, intention, behavior, and output
of this command, is currently underway.  Expect significant changes to at
least the default human-readable `npm ls` output in npm v8.

### Configuration

#### `all`

* Default: false
* Type: Boolean

When running `npm outdated` and `npm ls`, setting `--all` will show all
outdated or installed packages, rather than only those directly depended
upon by the current project.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `depth`

* Default: `Infinity` if `--all` is set, otherwise `1`
* Type: null or Number

The depth to go when recursing packages for `npm ls`.

If not set, `npm ls` will show only the immediate dependencies of the root
project. If `--all` is set, then npm will show all dependencies by default.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `link`

* Default: false
* Type: Boolean

Used with `npm ls`, limiting output to only those packages that are linked.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [package spec](/using-npm/package-spec)
* [npm explain](/commands/npm-explain)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm folders](/configuring-npm/folders)
* [npm explain](/commands/npm-explain)
* [npm install](/commands/npm-install)
* [npm link](/commands/npm-link)
* [npm prune](/commands/npm-prune)
* [npm outdated](/commands/npm-outdated)
* [npm update](/commands/npm-update)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-org.md
====================================================

---
title: npm-org
section: 1
description: Manage orgs
---

### Synopsis

```bash
npm org set orgname username [developer | admin | owner]
npm org rm orgname username
npm org ls orgname [<username>]

alias: ogr
```

Note: This command is unaware of workspaces.

### Example

Add a new developer to an org:

```bash
$ npm org set my-org @mx-smith
```

Add a new admin to an org (or change a developer to an admin):

```bash
$ npm org set my-org @mx-santos admin
```

Remove a user from an org:

```bash
$ npm org rm my-org mx-santos
```

List all users in an org:

```bash
$ npm org ls my-org
```

List all users in JSON format:

```bash
$ npm org ls my-org --json
```

See what role a user has in an org:

```bash
$ npm org ls my-org @mx-santos
```

### Description

You can use the `npm org` commands to manage and view users of an
organization.  It supports adding and removing users, changing their roles,
listing them, and finding specific ones and their roles.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



### See Also

* [using orgs](/using-npm/orgs)
* [Documentation on npm Orgs](https://docs.npmjs.com/orgs/)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-outdated.md
====================================================

---
title: npm-outdated
section: 1
description: Check for outdated packages
---

### Synopsis

```bash
npm outdated [<package-spec> ...]
```

### Description

This command will check the registry to see if any (or, specific) installed
packages are currently outdated.

By default, only the direct dependencies of the root project and direct
dependencies of your configured *workspaces* are shown.
Use `--all` to find all outdated meta-dependencies as well.

In the output:

* `wanted` is the maximum version of the package that satisfies the semver
  range specified in `package.json`. If there's no available semver range
  (i.e.  you're running `npm outdated --global`, or the package isn't
  included in `package.json`), then `wanted` shows the currently-installed
  version.
* `latest` is the version of the package tagged as latest in the registry.
  Running `npm publish` with no special configuration will publish the
  package with a dist-tag of `latest`. This may or may not be the maximum
  version of the package, or the most-recently published version of the
  package, depending on how the package's developer manages the latest
  [dist-tag](/commands/npm-dist-tag).
* `location` is where in the physical tree the package is located.
* `depended by` shows which package depends on the displayed dependency
* `package type` (when using `--long` / `-l`) tells you whether this
  package is a `dependency` or a dev/peer/optional dependency. Packages not
  included in `package.json` are always marked `dependencies`.
* `homepage` (when using `--long` / `-l`) is the `homepage` value contained
  in the package's packument
* Red means there's a newer version matching your semver requirements, so
  you should update now.
* Yellow indicates that there's a newer version _above_ your semver
  requirements (usually new major, or new 0.x minor) so proceed with
  caution.

### An example

```bash
$ npm outdated
Package      Current   Wanted   Latest  Location                  Depended by
glob          5.0.15   5.0.15    6.0.1  node_modules/glob         dependent-package-name
nothingness    0.0.3      git      git  node_modules/nothingness  dependent-package-name
npm            3.5.1    3.5.2    3.5.1  node_modules/npm          dependent-package-name
local-dev      0.0.3   linked   linked  local-dev                 dependent-package-name
once           1.3.2    1.3.3    1.3.3  node_modules/once         dependent-package-name
```

With these `dependencies`:
```json
{
  "glob": "^5.0.15",
  "nothingness": "github:othiym23/nothingness#master",
  "npm": "^3.5.1",
  "once": "^1.3.1"
}
```

A few things to note:

* `glob` requires `^5`, which prevents npm from installing `glob@6`, which
  is outside the semver range.
* Git dependencies will always be reinstalled, because of how they're
  specified.  The installed committish might satisfy the dependency
  specifier (if it's something immutable, like a commit SHA), or it might
  not, so `npm outdated` and `npm update` have to fetch Git repos to check.
  This is why currently doing a reinstall of a Git dependency always forces
  a new clone and install.
* `npm@3.5.2` is marked as "wanted", but "latest" is `npm@3.5.1` because
  npm uses dist-tags to manage its `latest` and `next` release channels.
  `npm update` will install the _newest_ version, but `npm install npm`
  (with no semver range) will install whatever's tagged as `latest`.
* `once` is just plain out of date. Reinstalling `node_modules` from
  scratch or running `npm update` will bring it up to spec.

### Configuration

#### `all`

* Default: false
* Type: Boolean

When running `npm outdated` and `npm ls`, setting `--all` will show all
outdated or installed packages, rather than only those directly depended
upon by the current project.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [npm update](/commands/npm-update)
* [npm dist-tag](/commands/npm-dist-tag)
* [npm registry](/using-npm/registry)
* [npm folders](/configuring-npm/folders)
* [npm workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-owner.md
====================================================

---
title: npm-owner
section: 1
description: Manage package owners
---

### Synopsis

```bash
npm owner add <user> <package-spec>
npm owner rm <user> <package-spec>
npm owner ls <package-spec>

alias: author
```

### Description

Manage ownership of published packages.

* ls: List all the users who have access to modify a package and push new
  versions.  Handy when you need to know who to bug for help.
* add: Add a new user as a maintainer of a package.  This user is enabled
  to modify metadata, publish new versions, and add other owners.
* rm: Remove a user from the package owner list.  This immediately revokes
  their privileges.

Note that there is only one level of access.  Either you can modify a package,
or you can't.  Future versions may contain more fine-grained access levels, but
that is not implemented at this time.

If you have two-factor authentication enabled with `auth-and-writes` (see
[`npm-profile`](/commands/npm-profile)) then you'll need to go through a second factor
flow when changing ownership or include an otp on the command line with `--otp`.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [npm profile](/commands/npm-profile)
* [npm publish](/commands/npm-publish)
* [npm registry](/using-npm/registry)
* [npm adduser](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-pack.md
====================================================

---
title: npm-pack
section: 1
description: Create a tarball from a package
---

### Synopsis

```bash
npm pack <package-spec>
```

### Configuration

#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `pack-destination`

* Default: "."
* Type: String

Directory in which `npm pack` will save tarballs.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### Description

For anything that's installable (that is, a package folder, tarball,
tarball url, git url, name@tag, name@version, name, or scoped name), this
command will fetch it to the cache, copy the tarball to the current working
directory as `<name>-<version>.tgz`, and then write the filenames out to
stdout.

If the same package is specified multiple times, then the file will be
overwritten the second time.

If no arguments are supplied, then npm packs the current package folder.

### See Also

* [package spec](/using-npm/package-spec)
* [npm-packlist package](http://npm.im/npm-packlist)
* [npm cache](/commands/npm-cache)
* [npm publish](/commands/npm-publish)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-ping.md
====================================================

---
title: npm-ping
section: 1
description: Ping npm registry
---

### Synopsis

```bash
npm ping
```

Note: This command is unaware of workspaces.

### Description

Ping the configured or given npm registry and verify authentication.
If it works it will output something like:

```bash
npm notice PING https://registry.npmjs.org/
npm notice PONG 255ms
```
otherwise you will get an error:
```bash
npm notice PING http://foo.com/
npm ERR! code E404
npm ERR! 404 Not Found - GET http://www.foo.com/-/ping?write=true
```

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [npm doctor](/commands/npm-doctor)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-pkg.md
====================================================

---
title: npm-pkg
section: 1
description: Manages your package.json
---

### Synopsis

```bash
npm pkg set <key>=<value> [<key>=<value> ...]
npm pkg get [<key> [<key> ...]]
npm pkg delete <key> [<key> ...]
npm pkg set [<array>[<index>].<key>=<value> ...]
npm pkg set [<array>[].<key>=<value> ...]
npm pkg fix
```

### Description

A command that automates the management of `package.json` files.
`npm pkg` provide 3 different sub commands that allow you to modify or retrieve
values for given object keys in your `package.json`.

The syntax to retrieve and set fields is a dot separated representation of
the nested object properties to be found within your `package.json`, it's the
same notation used in [`npm view`](/commands/npm-view) to retrieve information
from the registry manifest, below you can find more examples on how to use it.

Returned values are always in **json** format.

* `npm pkg get <field>`

    Retrieves a value `key`, defined in your `package.json` file.

    For example, in order to retrieve the name of the current package, you
    can run:

    ```bash
    npm pkg get name
    ```

    It's also possible to retrieve multiple values at once:

    ```bash
    npm pkg get name version
    ```

    You can view child fields by separating them with a period. To retrieve
    the value of a test `script` value, you would run the following command:

    ```bash
    npm pkg get scripts.test
    ```

    For fields that are arrays, requesting a non-numeric field will return
    all of the values from the objects in the list. For example, to get all
    the contributor emails for a package, you would run:

    ```bash
    npm pkg get contributors.email
    ```

    You may also use numeric indices in square braces to specifically select
    an item in an array field. To just get the email address of the first
    contributor in the list, you can run:

    ```bash
    npm pkg get contributors[0].email
    ```

    For complex fields you can also name a property in square brackets
    to specifically select a child field. This is especially helpful
    with the exports object:

    ```bash
    npm pkg get "exports[.].require"
    ```

* `npm pkg set <field>=<value>`

    Sets a `value` in your `package.json` based on the `field` value. When
    saving to your `package.json` file the same set of rules used during
    `npm install` and other cli commands that touches the `package.json` file
    are used, making sure to respect the existing indentation and possibly
    applying some validation prior to saving values to the file.

    The same syntax used to retrieve values from your package can also be used
    to define new properties or overriding existing ones, below are some
    examples of how the dot separated syntax can be used to edit your
    `package.json` file.

    Defining a new bin named `mynewcommand` in your `package.json` that points
    to a file `cli.js`:

    ```bash
    npm pkg set bin.mynewcommand=cli.js
    ```

    Setting multiple fields at once is also possible:

    ```bash
    npm pkg set description='Awesome package' engines.node='>=10'
    ```

    It's also possible to add to array values, for example to add a new
    contributor entry:

    ```bash
    npm pkg set contributors[0].name='Foo' contributors[0].email='foo@bar.ca'
    ```

    You may also append items to the end of an array using the special
    empty bracket notation:

    ```bash
    npm pkg set contributors[].name='Foo' contributors[].name='Bar'
    ```

    It's also possible to parse values as json prior to saving them to your
    `package.json` file, for example in order to set a `"private": true`
    property:

    ```bash
    npm pkg set private=true --json
    ```

    It also enables saving values as numbers:

    ```bash
    npm pkg set tap.timeout=60 --json
    ```

* `npm pkg delete <key>`

    Deletes a `key` from your `package.json`

    The same syntax used to set values from your package can also be used
    to remove existing ones. For example, in order to remove a script named
    build:

    ```bash
    npm pkg delete scripts.build
    ```

* `npm pkg fix`

    Auto corrects common errors in your `package.json`.  npm already
    does this during `publish`, which leads to subtle (mostly harmless)
    differences between the contents of your `package.json` file and the
    manifest that npm uses during installation.

### Workspaces support

You can set/get/delete items across your configured workspaces by using the
[`workspace`](/using-npm/config#workspace) or
[`workspaces`](/using-npm/config#workspaces) config options.

For example, setting a `funding` value across all configured workspaces
of a project:

```bash
npm pkg set funding=https://example.com --ws
```

When using `npm pkg get` to retrieve info from your configured workspaces, the
returned result will be in a json format in which top level keys are the
names of each workspace, the values of these keys will be the result values
returned from each of the configured workspaces, e.g:

```
npm pkg get name version --ws
{
  "a": {
    "name": "a",
    "version": "1.0.0"
  },
  "b": {
    "name": "b",
    "version": "1.0.0"
  }
}
```

### Configuration

#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.
## See Also

* [npm install](/commands/npm-install)
* [npm init](/commands/npm-init)
* [npm config](/commands/npm-config)
* [workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-prefix.md
====================================================

---
title: npm-prefix
section: 1
description: Display prefix
---

### Synopsis

```bash
npm prefix [-g]
```

Note: This command is unaware of workspaces.

### Description

Print the local prefix to standard output. This is the closest parent directory
to contain a `package.json` file or `node_modules` directory, unless `-g` is
also specified.

If `-g` is specified, this will be the value of the global prefix. See
[`npm config`](/commands/npm-config) for more detail.

### Example

```bash
npm prefix
/usr/local/projects/foo
```

```bash
npm prefix -g
/usr/local
```

### Configuration

#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



### See Also

* [npm root](/commands/npm-root)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-profile.md
====================================================

---
title: npm-profile
section: 1
description: Change settings on your registry profile
---

### Synopsis

```bash
npm profile enable-2fa [auth-only|auth-and-writes]
npm profile disable-2fa
npm profile get [<key>]
npm profile set <key> <value>
```

Note: This command is unaware of workspaces.

### Description

Change your profile information on the registry.  Note that this command
depends on the registry implementation, so third-party registries may not
support this interface.

* `npm profile get [<property>]`: Display all of the properties of your
  profile, or one or more specific properties.  It looks like:

```bash
+-----------------+---------------------------+
| name            | example                   |
+-----------------+---------------------------+
| email           | me@example.com (verified) |
+-----------------+---------------------------+
| two factor auth | auth-and-writes           |
+-----------------+---------------------------+
| fullname        | Example User              |
+-----------------+---------------------------+
| homepage        |                           |
+-----------------+---------------------------+
| freenode        |                           |
+-----------------+---------------------------+
| twitter         |                           |
+-----------------+---------------------------+
| github          |                           |
+-----------------+---------------------------+
| created         | 2015-02-26T01:38:35.892Z  |
+-----------------+---------------------------+
| updated         | 2017-10-02T21:29:45.922Z  |
+-----------------+---------------------------+
```

* `npm profile set <property> <value>`: Set the value of a profile
  property. You can set the following properties this way: email, fullname,
  homepage, freenode, twitter, github

* `npm profile set password`: Change your password.  This is interactive,
  you'll be prompted for your current password and a new password.  You'll
  also be prompted for an OTP if you have two-factor authentication
  enabled.

* `npm profile enable-2fa [auth-and-writes|auth-only]`: Enables two-factor
  authentication. Defaults to `auth-and-writes` mode. Modes are:
  * `auth-only`: Require an OTP when logging in or making changes to your
    account's authentication.  The OTP will be required on both the website
    and the command line.
  * `auth-and-writes`: Requires an OTP at all the times `auth-only` does,
    and also requires one when publishing a module, setting the `latest`
    dist-tag, or changing access via `npm access` and `npm owner`.

* `npm profile disable-2fa`: Disables two-factor authentication.

### Details

Some of these commands may not be available on non npmjs.com registries.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [npm adduser](/commands/npm-adduser)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm owner](/commands/npm-owner)
* [npm whoami](/commands/npm-whoami)
* [npm token](/commands/npm-token)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-prune.md
====================================================

---
title: npm-prune
section: 1
description: Remove extraneous packages
---

### Synopsis

```bash
npm prune [[<@scope>/]<pkg>...]
```

### Description

This command removes "extraneous" packages.  If a package name is provided,
then only packages matching one of the supplied names are removed.

Extraneous packages are those present in the `node_modules` folder that are
not listed as any package's dependency list.

If the `--production` flag is specified or the `NODE_ENV` environment
variable is set to `production`, this command will remove the packages
specified in your `devDependencies`. Setting `--no-production` will negate
`NODE_ENV` being set to `production`.

If the `--dry-run` flag is used then no changes will actually be made.

If the `--json` flag is used, then the changes `npm prune` made (or would
have made with `--dry-run`) are printed as a JSON object.

In normal operation, extraneous modules are pruned automatically, so you'll
only need this command with the `--production` flag.  However, in the real
world, operation is not always "normal".  When crashes or mistakes happen,
this command can help clean up any resulting garbage.

### Configuration

#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm uninstall](/commands/npm-uninstall)
* [npm folders](/configuring-npm/folders)
* [npm ls](/commands/npm-ls)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-publish.md
====================================================

---
title: npm-publish
section: 1
description: Publish a package
---

### Synopsis

```bash
npm publish <package-spec>
```

### Description

Publishes a package to the registry so that it can be installed by name.

By default npm will publish to the public registry. This can be
overridden by specifying a different default registry or using a
[`scope`](/using-npm/scope) in the name, combined with a
scope-configured registry (see
[`package.json`](/configuring-npm/package-json)).


A `package` is interpreted the same way as other commands (like
`npm install` and can be:

* a) a folder containing a program described by a
  [`package.json`](/configuring-npm/package-json) file
* b) a gzipped tarball containing (a)
* c) a url that resolves to (b)
* d) a `<name>@<version>` that is published on the registry (see
  [`registry`](/using-npm/registry)) with (c)
* e) a `<name>@<tag>` (see [`npm dist-tag`](/commands/npm-dist-tag)) that
  points to (d)
* f) a `<name>` that has a "latest" tag satisfying (e)
* g) a `<git remote url>` that resolves to (a)

The publish will fail if the package name and version combination already
exists in the specified registry.

Once a package is published with a given name and version, that specific
name and version combination can never be used again, even if it is removed
with [`npm unpublish`](/commands/npm-unpublish).

As of `npm@5`, both a sha1sum and an integrity field with a sha512sum of the
tarball will be submitted to the registry during publication. Subsequent
installs will use the strongest supported algorithm to verify downloads.

Similar to `--dry-run` see [`npm pack`](/commands/npm-pack), which figures
out the files to be included and packs them into a tarball to be uploaded
to the registry.

### Files included in package

To see what will be included in your package, run `npm pack --dry-run`.  All
files are included by default, with the following exceptions:

- Certain files that are relevant to package installation and distribution
  are always included.  For example, `package.json`, `README.md`,
  `LICENSE`, and so on.

- If there is a "files" list in
  [`package.json`](/configuring-npm/package-json), then only the files
  specified will be included.  (If directories are specified, then they
  will be walked recursively and their contents included, subject to the
  same ignore rules.)

- If there is a `.gitignore` or `.npmignore` file, then ignored files in
  that and all child directories will be excluded from the package.  If
  _both_ files exist, then the `.gitignore` is ignored, and only the
  `.npmignore` is used.

  `.npmignore` files follow the [same pattern
  rules](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
  as `.gitignore` files

- If the file matches certain patterns, then it will _never_ be included,
  unless explicitly added to the `"files"` list in `package.json`, or
  un-ignored with a `!` rule in a `.npmignore` or `.gitignore` file.

- Symbolic links are never included in npm packages.


See [`developers`](/using-npm/developers) for full details on what's
included in the published package, as well as details on how the package is
built.

### Configuration

#### `tag`

* Default: "latest"
* Type: String

If you ask npm to install a package and don't tell it a specific version,
then it will install the specified tag.

Also the tag that is added to the package@version specified by the `npm tag`
command, if no explicit tag is given.

When used by the `npm diff` command, this is the tag used to fetch the
tarball that will be compared with the local files by default.



#### `access`

* Default: 'public' for new packages, existing packages it will not change the
  current level
* Type: null, "restricted", or "public"

If you do not want your scoped package to be publicly viewable (and
installable) set `--access=restricted`.

Unscoped packages can not be set to `restricted`.

Note: This defaults to not changing the current access level for existing
packages. Specifying a value of `restricted` or `public` during publish will
change the access for an existing package the same way that `npm access set
status` would.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `provenance`

* Default: false
* Type: Boolean

When publishing from a supported cloud CI/CD system, the package will be
publicly linked to where it was built and published from.

This config can not be used with: `provenance-file`

#### `provenance-file`

* Default: null
* Type: Path

When publishing, the provenance bundle at the given path will be used.

This config can not be used with: `provenance`

### See Also

* [package spec](/using-npm/package-spec)
* [npm-packlist package](http://npm.im/npm-packlist)
* [npm registry](/using-npm/registry)
* [npm scope](/using-npm/scope)
* [npm adduser](/commands/npm-adduser)
* [npm owner](/commands/npm-owner)
* [npm deprecate](/commands/npm-deprecate)
* [npm dist-tag](/commands/npm-dist-tag)
* [npm pack](/commands/npm-pack)
* [npm profile](/commands/npm-profile)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-query.md
====================================================

---
title: npm-query
section: 1
description: Dependency selector query
---

### Synopsis

```bash
npm query <selector>
```

### Description

The `npm query` command allows for usage of css selectors in order to retrieve
an array of dependency objects.

### Piping npm query to other commands

```bash
# find all dependencies with postinstall scripts & uninstall them
npm query ":attr(scripts, [postinstall])" | jq 'map(.name)|join("\n")' -r | xargs -I {} npm uninstall {}

# find all git dependencies & explain who requires them
npm query ":type(git)" | jq 'map(.name)' | xargs -I {} npm why {}
```

### Extended Use Cases & Queries

```stylus
// all deps
*

// all direct deps
:root > *

// direct production deps
:root > .prod

// direct development deps
:root > .dev

// any peer dep of a direct deps
:root > * > .peer

// any workspace dep
.workspace

// all workspaces that depend on another workspace
.workspace > .workspace

// all workspaces that have peer deps
.workspace:has(.peer)

// any dep named "lodash"
// equivalent to [name="lodash"]
#lodash

// any deps named "lodash" & within semver range ^"1.2.3"
#lodash@^1.2.3
// equivalent to...
[name="lodash"]:semver(^1.2.3)

// get the hoisted node for a given semver range
#lodash@^1.2.3:not(:deduped)

// querying deps with a specific version
#lodash@2.1.5
// equivalent to...
[name="lodash"][version="2.1.5"]

// has any deps
:has(*)

// deps with no other deps (ie. "leaf" nodes)
:empty

// manually querying git dependencies
[repository^=github:],
[repository^=git:],
[repository^=https://github.com],
[repository^=http://github.com],
[repository^=https://github.com],
[repository^=+git:...]

// querying for all git dependencies
:type(git)

// get production dependencies that aren't also dev deps
.prod:not(.dev)

// get dependencies with specific licenses
[license=MIT], [license=ISC]

// find all packages that have @ruyadorno as a contributor
:attr(contributors, [email=ruyadorno@github.com])
```

### Example Response Output

- an array of dependency objects is returned which can contain multiple copies of the same package which may or may not have been linked or deduped

```json
[
  {
    "name": "",
    "version": "",
    "description": "",
    "homepage": "",
    "bugs": {},
    "author": {},
    "license": {},
    "funding": {},
    "files": [],
    "main": "",
    "browser": "",
    "bin": {},
    "man": [],
    "directories": {},
    "repository": {},
    "scripts": {},
    "config": {},
    "dependencies": {},
    "devDependencies": {},
    "optionalDependencies": {},
    "bundledDependencies": {},
    "peerDependencies": {},
    "peerDependenciesMeta": {},
    "engines": {},
    "os": [],
    "cpu": [],
    "workspaces": {},
    "keywords": [],
    ...
  },
  ...
```
### Package lock only mode

If package-lock-only is enabled, only the information in the package
lock (or shrinkwrap) is loaded.  This means that information from the
package.json files of your dependencies will not be included in the
result set (e.g. description, homepage, engines).

### Package lock only mode

If package-lock-only is enabled, only the information in the package
lock (or shrinkwrap) is loaded.  This means that information from the
package.json files of your dependencies will not be included in the
result set (e.g. description, homepage, engines).

### Configuration

#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.


## See Also

* [dependency selectors](/using-npm/dependency-selectors)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-rebuild.md
====================================================

---
title: npm-rebuild
section: 1
description: Rebuild a package
---

### Synopsis

```bash
npm rebuild [<package-spec>] ...]

alias: rb
```

### Description

This command runs the `npm build` command on the matched folders.  This is
useful when you install a new version of node, and must recompile all your
C++ addons with the new binary.  It is also useful when installing with
`--ignore-scripts` and `--no-bin-links`, to explicitly choose which
packages to build and/or link bins.

If one or more package specs are provided, then only packages with a
name and version matching one of the specifiers will be rebuilt.

### Configuration

#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [package spec](/using-npm/package-spec)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-repo.md
====================================================

---
title: npm-repo
section: 1
description: Open package repository page in the browser
---

### Synopsis

```bash
npm repo [<pkgname> [<pkgname> ...]]
```

### Description

This command tries to guess at the likely location of a package's
repository URL, and then tries to open it using the
[`--browser` config](/using-npm/config#browser) param. If no package name is
provided, it will search for a `package.json` in the current folder and use the
`repository` property.

### Configuration

#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### See Also

* [npm docs](/commands/npm-docs)
* [npm config](/commands/npm-config)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-restart.md
====================================================

---
title: npm-restart
section: 1
description: Restart a package
---

### Synopsis

```bash
npm restart [-- <args>]
```

### Description

This restarts a project.  It is equivalent to running `npm run-script
restart`.

If the current project has a `"restart"` script specified in
`package.json`, then the following scripts will be run:

1. prerestart
2. restart
3. postrestart

If it does _not_ have a `"restart"` script specified, but it does have
`stop` and/or `start` scripts, then the following scripts will be run:

1. prerestart
2. prestop
3. stop
4. poststop
6. prestart
7. start
8. poststart
9. postrestart

### Configuration

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm start](/commands/npm-start)
* [npm stop](/commands/npm-stop)
* [npm restart](/commands/npm-restart)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-root.md
====================================================

---
title: npm-root
section: 1
description: Display npm root
---

### Synopsis

```bash
npm root
```

Note: This command is unaware of workspaces.

### Description

Print the effective `node_modules` folder to standard out.

Useful for using npm in shell scripts that do things with the
`node_modules` folder.  For example:

```bash
#!/bin/bash
global_node_modules="$(npm root --global)"
echo "Global packages installed in: ${global_node_modules}"
```

### Configuration

#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



### See Also

* [npm prefix](/commands/npm-prefix)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-run-script.md
====================================================

---
title: npm-run-script
section: 1
description: Run arbitrary package scripts
---

### Synopsis

```bash
npm run-script <command> [-- <args>]

aliases: run, rum, urn
```

### Description

This runs an arbitrary command from a package's `"scripts"` object.  If no
`"command"` is provided, it will list the available scripts.

`run[-script]` is used by the test, start, restart, and stop commands, but
can be called directly, as well. When the scripts in the package are
printed out, they're separated into lifecycle (test, start, restart) and
directly-run scripts.

Any positional arguments are passed to the specified script.  Use `--` to
pass `-`-prefixed flags and options which would otherwise be parsed by npm.

For example:

```bash
npm run test -- --grep="pattern"
```

The arguments will only be passed to the script specified after `npm run`
and not to any `pre` or `post` script.

The `env` script is a special built-in command that can be used to list
environment variables that will be available to the script at runtime. If an
"env" command is defined in your package, it will take precedence over the
built-in.

In addition to the shell's pre-existing `PATH`, `npm run` adds
`node_modules/.bin` to the `PATH` provided to scripts. Any binaries
provided by locally-installed dependencies can be used without the
`node_modules/.bin` prefix. For example, if there is a `devDependency` on
`tap` in your package, you should write:

```bash
"scripts": {"test": "tap test/*.js"}
```

instead of

```bash
"scripts": {"test": "node_modules/.bin/tap test/*.js"}
```

The actual shell your script is run within is platform dependent. By default,
on Unix-like systems it is the `/bin/sh` command, on Windows it is
`cmd.exe`.
The actual shell referred to by `/bin/sh` also depends on the system.
You can customize the shell with the
[`script-shell` config](/using-npm/config#script-shell).

Scripts are run from the root of the package folder, regardless of what the
current working directory is when `npm run` is called. If you want your
script to use different behavior based on what subdirectory you're in, you
can use the `INIT_CWD` environment variable, which holds the full path you
were in when you ran `npm run`.

`npm run` sets the `NODE` environment variable to the `node` executable
with which `npm` is executed.

If you try to run a script without having a `node_modules` directory and it
fails, you will be given a warning to run `npm install`, just in case you've
forgotten.

### Workspaces support

You may use the [`workspace`](/using-npm/config#workspace) or
[`workspaces`](/using-npm/config#workspaces) configs in order to run an
arbitrary command from a package's `"scripts"` object in the context of the
specified workspaces. If no `"command"` is provided, it will list the available
scripts for each of these configured workspaces.

Given a project with configured workspaces, e.g:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   +-- b
   |   `-- package.json
   `-- c
       `-- package.json
```

Assuming the workspace configuration is properly set up at the root level
`package.json` file. e.g:

```
{
    "workspaces": [ "./packages/*" ]
}
```

And that each of the configured workspaces has a configured `test` script,
we can run tests in all of them using the
[`workspaces` config](/using-npm/config#workspaces):

```
npm test --workspaces
```

#### Filtering workspaces

It's also possible to run a script in a single workspace using the `workspace`
config along with a name or directory path:

```
npm test --workspace=a
```

The `workspace` config can also be specified multiple times in order to run a
specific script in the context of multiple workspaces. When defining values for
the `workspace` config in the command line, it also possible to use `-w` as a
shorthand, e.g:

```
npm test -w a -w b
```

This last command will run `test` in both `./packages/a` and `./packages/b`
packages.

### Configuration

#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `if-present`

* Default: false
* Type: Boolean

If true, npm will not exit with an error code when `run-script` is invoked
for a script that isn't defined in the `scripts` section of `package.json`.
This option can be used when it's desirable to optionally run a script when
it's present and fail if the script fails. This is useful, for example, when
running scripts that may only apply for some builds in an otherwise generic
CI setup.

This value is not exported to the environment for child processes.

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



### See Also

* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm start](/commands/npm-start)
* [npm restart](/commands/npm-restart)
* [npm stop](/commands/npm-stop)
* [npm config](/commands/npm-config)
* [npm workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-sbom.md
====================================================

---
title: npm-sbom
section: 1
description: Generate a Software Bill of Materials (SBOM)
---

### Synopsis

```bash
npm sbom
```

### Description

The `npm sbom` command generates a Software Bill of Materials (SBOM) listing the
dependencies for the current project. SBOMs can be generated in either
[SPDX](https://spdx.dev/) or [CycloneDX](https://cyclonedx.org/) format.

### Example CycloneDX SBOM

```json
{
  "$schema": "http://cyclonedx.org/schema/bom-1.5.schema.json",
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:09f55116-97e1-49cf-b3b8-44d0207e7730",
  "version": 1,
  "metadata": {
    "timestamp": "2023-09-01T00:00:00.001Z",
    "lifecycles": [
      {
        "phase": "build"
      }
    ],
    "tools": [
      {
        "vendor": "npm",
        "name": "cli",
        "version": "10.1.0"
      }
    ],
    "component": {
      "bom-ref": "simple@1.0.0",
      "type": "library",
      "name": "simple",
      "version": "1.0.0",
      "scope": "required",
      "author": "John Doe",
      "description": "simple react app",
      "purl": "pkg:npm/simple@1.0.0",
      "properties": [
        {
          "name": "cdx:npm:package:path",
          "value": ""
        }
      ],
      "externalReferences": [],
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ]
    }
  },
  "components": [
    {
      "bom-ref": "lodash@4.17.21",
      "type": "library",
      "name": "lodash",
      "version": "4.17.21",
      "scope": "required",
      "author": "John-David Dalton",
      "description": "Lodash modular utilities.",
      "purl": "pkg:npm/lodash@4.17.21",
      "properties": [
        {
          "name": "cdx:npm:package:path",
          "value": "node_modules/lodash"
        }
      ],
      "externalReferences": [
        {
          "type": "distribution",
          "url": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz"
        },
        {
          "type": "vcs",
          "url": "git+https://github.com/lodash/lodash.git"
        },
        {
          "type": "website",
          "url": "https://lodash.com/"
        },
        {
          "type": "issue-tracker",
          "url": "https://github.com/lodash/lodash/issues"
        }
      ],
      "hashes": [
        {
          "alg": "SHA-512",
          "content": "bf690311ee7b95e713ba568322e3533f2dd1cb880b189e99d4edef13592b81764daec43e2c54c61d5c558dc5cfb35ecb85b65519e74026ff17675b6f8f916f4a"
        }
      ],
      "licenses": [
        {
          "license": {
            "id": "MIT"
          }
        }
      ]
    }
  ],
  "dependencies": [
    {
      "ref": "simple@1.0.0",
      "dependsOn": [
        "lodash@4.17.21"
      ]
    },
    {
      "ref": "lodash@4.17.21",
      "dependsOn": []
    }
  ]
}
```

### Example SPDX SBOM

```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "SPDXID": "SPDXRef-DOCUMENT",
  "name": "simple@1.0.0",
  "documentNamespace": "http://spdx.org/spdxdocs/simple-1.0.0-bf81090e-8bbc-459d-bec9-abeb794e096a",
  "creationInfo": {
    "created": "2023-09-01T00:00:00.001Z",
    "creators": [
      "Tool: npm/cli-10.1.0"
    ]
  },
  "documentDescribes": [
    "SPDXRef-Package-simple-1.0.0"
  ],
  "packages": [
    {
      "name": "simple",
      "SPDXID": "SPDXRef-Package-simple-1.0.0",
      "versionInfo": "1.0.0",
      "packageFileName": "",
      "description": "simple react app",
      "primaryPackagePurpose": "LIBRARY",
      "downloadLocation": "NOASSERTION",
      "filesAnalyzed": false,
      "homepage": "NOASSERTION",
      "licenseDeclared": "MIT",
      "externalRefs": [
        {
          "referenceCategory": "PACKAGE-MANAGER",
          "referenceType": "purl",
          "referenceLocator": "pkg:npm/simple@1.0.0"
        }
      ]
    },
    {
      "name": "lodash",
      "SPDXID": "SPDXRef-Package-lodash-4.17.21",
      "versionInfo": "4.17.21",
      "packageFileName": "node_modules/lodash",
      "description": "Lodash modular utilities.",
      "downloadLocation": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
      "filesAnalyzed": false,
      "homepage": "https://lodash.com/",
      "licenseDeclared": "MIT",
      "externalRefs": [
        {
          "referenceCategory": "PACKAGE-MANAGER",
          "referenceType": "purl",
          "referenceLocator": "pkg:npm/lodash@4.17.21"
        }
      ],
      "checksums": [
        {
          "algorithm": "SHA512",
          "checksumValue": "bf690311ee7b95e713ba568322e3533f2dd1cb880b189e99d4edef13592b81764daec43e2c54c61d5c558dc5cfb35ecb85b65519e74026ff17675b6f8f916f4a"
        }
      ]
    }
  ],
  "relationships": [
    {
      "spdxElementId": "SPDXRef-DOCUMENT",
      "relatedSpdxElement": "SPDXRef-Package-simple-1.0.0",
      "relationshipType": "DESCRIBES"
    },
    {
      "spdxElementId": "SPDXRef-Package-simple-1.0.0",
      "relatedSpdxElement": "SPDXRef-Package-lodash-4.17.21",
      "relationshipType": "DEPENDS_ON"
    }
  ]
}
```

### Package lock only mode

If package-lock-only is enabled, only the information in the package
lock (or shrinkwrap) is loaded.  This means that information from the
package.json files of your dependencies will not be included in the
result set (e.g. description, homepage, engines).

### Configuration

#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `sbom-format`

* Default: null
* Type: "cyclonedx" or "spdx"

SBOM format to use when generating SBOMs.



#### `sbom-type`

* Default: "library"
* Type: "library", "application", or "framework"

The type of package described by the generated SBOM. For SPDX, this is the
value for the `primaryPackagePurpose` fieled. For CycloneDX, this is the
value for the `type` field.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.
## See Also

* [package spec](/using-npm/package-spec)
* [dependency selectors](/using-npm/dependency-selectors)
* [package.json](/configuring-npm/package-json)
* [workspaces](/using-npm/workspaces)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-search.md
====================================================

---
title: npm-search
section: 1
description: Search for packages
---

### Synopsis

```bash
npm search [search terms ...]

aliases: find, s, se
```

Note: This command is unaware of workspaces.

### Description

Search the registry for packages matching the search terms. `npm search`
performs a linear, incremental, lexically-ordered search through package
metadata for all files in the registry. If your terminal has color
support, it will further highlight the matches in the results.  This can
be disabled with the config item `color`

Additionally, using the `--searchopts` and `--searchexclude` options
paired with more search terms will include and exclude further patterns.
The main difference between `--searchopts` and the standard search terms
is that the former does not highlight results in the output and you can
use them more fine-grained filtering. Additionally, you can add both of
these to your config to change default search filtering behavior.

Search also allows targeting of maintainers in search results, by prefixing
their npm username with `=`.

If a term starts with `/`, then it's interpreted as a regular expression
and supports standard JavaScript RegExp syntax. In this case search will
ignore a trailing `/` .  (Note you must escape or quote many regular
expression characters in most shells.)

### Configuration

#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `color`

* Default: true unless the NO_COLOR environ is set to something other than '0'
* Type: "always" or Boolean

If false, never shows colors. If `"always"` then always shows colors. If
true, then only prints color codes for tty file descriptors.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `description`

* Default: true
* Type: Boolean

Show the description in `npm search`



#### `searchopts`

* Default: ""
* Type: String

Space-separated options that are always passed to search.



#### `searchexclude`

* Default: ""
* Type: String

Space-separated options that limit the results from search.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `prefer-online`

* Default: false
* Type: Boolean

If true, staleness checks for cached data will be forced, making the CLI
look for updates immediately even for fresh package data.



#### `prefer-offline`

* Default: false
* Type: Boolean

If true, staleness checks for cached data will be bypassed, but missing data
will be requested from the server. To force full offline mode, use
`--offline`.



#### `offline`

* Default: false
* Type: Boolean

Force offline mode: no network requests will be done during install. To
allow the CLI to fill in missing cache data, see `--prefer-offline`.



### See Also

* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm view](/commands/npm-view)
* [npm cache](/commands/npm-cache)
* https://npm.im/npm-registry-fetch


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-shrinkwrap.md
====================================================

---
title: npm-shrinkwrap
section: 1
description: Lock down dependency versions for publication
---

### Synopsis

```bash
npm shrinkwrap
```

Note: This command is unaware of workspaces.

### Description

This command repurposes `package-lock.json` into a publishable
`npm-shrinkwrap.json` or simply creates a new one. The file created and
updated by this command will then take precedence over any other existing
or future `package-lock.json` files. For a detailed explanation of the
design and purpose of package locks in npm, see
[package-lock-json](/configuring-npm/package-lock-json).

### See Also

* [npm install](/commands/npm-install)
* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [package.json](/configuring-npm/package-json)
* [package-lock.json](/configuring-npm/package-lock-json)
* [npm-shrinkwrap.json](/configuring-npm/npm-shrinkwrap-json)
* [npm ls](/commands/npm-ls)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-star.md
====================================================

---
title: npm-star
section: 1
description: Mark your favorite packages
---

### Synopsis

```bash
npm star [<package-spec>...]
```

Note: This command is unaware of workspaces.

### Description

"Starring" a package means that you have some interest in it.  It's
a vaguely positive way to show that you care.

It's a boolean thing. Starring repeatedly has no additional effect.

### More

There's also these extra commands to help you manage your favorite packages:

#### Unstar

You can also "unstar" a package using [`npm unstar`](/commands/npm-unstar)

"Unstarring" is the same thing, but in reverse.

#### Listing stars

You can see all your starred packages using [`npm stars`](/commands/npm-stars)

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [package spec](/using-npm/package-spec)
* [npm unstar](/commands/npm-unstar)
* [npm stars](/commands/npm-stars)
* [npm view](/commands/npm-view)
* [npm whoami](/commands/npm-whoami)
* [npm adduser](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-stars.md
====================================================

---
title: npm-stars
section: 1
description: View packages marked as favorites
---

### Synopsis

```bash
npm stars [<user>]
```

Note: This command is unaware of workspaces.

### Description

If you have starred a lot of neat things and want to find them again
quickly this command lets you do just that.

You may also want to see your friend's favorite packages, in this case
you will most certainly enjoy this command.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [npm star](/commands/npm-star)
* [npm unstar](/commands/npm-unstar)
* [npm view](/commands/npm-view)
* [npm whoami](/commands/npm-whoami)
* [npm adduser](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-start.md
====================================================

---
title: npm-start
section: 1
description: Start a package
---

### Synopsis

```bash
npm start [-- <args>]
```

### Description

This runs a predefined command specified in the `"start"` property of
a package's `"scripts"` object.

If the `"scripts"` object does not define a  `"start"` property, npm
will run `node server.js`.

Note that this is different from the default node behavior of running
the file specified in a package's `"main"` attribute when evoking with
`node .`

As of [`npm@2.0.0`](https://blog.npmjs.org/post/98131109725/npm-2-0-0), you can
use custom arguments when executing scripts. Refer to [`npm run-script`](/commands/npm-run-script) for more details.

### Example

```json
{
  "scripts": {
    "start": "node foo.js"
  }
}
```

```bash
npm start

> npm@x.x.x start
> node foo.js

(foo.js output would be here)

```

### Configuration

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm restart](/commands/npm-restart)
* [npm stop](/commands/npm-stop)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-stop.md
====================================================

---
title: npm-stop
section: 1
description: Stop a package
---

### Synopsis

```bash
npm stop [-- <args>]
```

### Description

This runs a predefined command specified in the "stop" property of a
package's "scripts" object.

Unlike with [npm start](/commands/npm-start), there is no default script
that will run if the `"stop"` property is not defined.

### Example

```json
{
  "scripts": {
    "stop": "node bar.js"
  }
}
```

```bash
npm stop

> npm@x.x.x stop
> node bar.js

(bar.js output would be here)

```

### Configuration

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm start](/commands/npm-start)
* [npm restart](/commands/npm-restart)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-team.md
====================================================

---
title: npm-team
section: 1
description: Manage organization teams and team memberships
---

### Synopsis

```bash
npm team create <scope:team> [--otp <otpcode>]
npm team destroy <scope:team> [--otp <otpcode>]
npm team add <scope:team> <user> [--otp <otpcode>]
npm team rm <scope:team> <user> [--otp <otpcode>]
npm team ls <scope>|<scope:team>
```

Note: This command is unaware of workspaces.

### Description

Used to manage teams in organizations, and change team memberships. Does not
handle permissions for packages.

Teams must always be fully qualified with the organization/scope they belong to
when operating on them, separated by a colon (`:`). That is, if you have a
`newteam` team in an `org` organization, you must always refer to that team
as `@org:newteam` in these commands.

If you have two-factor authentication enabled in `auth-and-writes` mode, then
you can provide a code from your authenticator with `[--otp <otpcode>]`.
If you don't include this then you will be taken through a second factor flow based
on your `authtype`.

* create / destroy:
  Create a new team, or destroy an existing one. Note: You cannot remove the
  `developers` team, <a href="https://docs.npmjs.com/about-developers-team" target="_blank">learn more.</a>

  Here's how to create a new team `newteam` under the `org` org:

  ```bash
  npm team create @org:newteam
  ```

  You should see a confirming message such as: `+@org:newteam` once the new
  team has been created.

* add:
  Add a user to an existing team.

  Adding a new user `username` to a team named `newteam` under the `org` org:

  ```bash
  npm team add @org:newteam username
  ```

  On success, you should see a message: `username added to @org:newteam`

* rm:
  Using `npm team rm` you can also remove users from a team they belong to.

  Here's an example removing user `username` from `newteam` team
  in `org` organization:

  ```bash
  npm team rm @org:newteam username
  ```

  Once the user is removed a confirmation message is displayed:
  `username removed from @org:newteam`

* ls:
  If performed on an organization name, will return a list of existing teams
  under that organization. If performed on a team, it will instead return a list
  of all users belonging to that particular team.

  Here's an example of how to list all teams from an org named `org`:

  ```bash
  npm team ls @org
  ```

  Example listing all members of a team named `newteam`:

  ```bash
  npm team ls @org:newteam
  ```

### Details

`npm team` always operates directly on the current registry, configurable from
the command line using `--registry=<registry url>`.

You must be a *team admin* to create teams and manage team membership, under
the given organization. Listing teams and team memberships may be done by
any member of the organization.

Organization creation and management of team admins and *organization* members
is done through the website, not the npm CLI.

To use teams to manage permissions on packages belonging to your organization,
use the `npm access` command to grant or revoke the appropriate permissions.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



### See Also

* [npm access](/commands/npm-access)
* [npm config](/commands/npm-config)
* [npm registry](/using-npm/registry)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-test.md
====================================================

---
title: npm-test
section: 1
description: Test a package
---

### Synopsis

```bash
npm test [-- <args>]

aliases: tst, t
```

### Description

This runs a predefined command specified in the `"test"` property of
a package's `"scripts"` object.

### Example

```json
{
  "scripts": {
    "test": "node test.js"
  }
}
```

```bash
npm test
> npm@x.x.x test
> node test.js

(test.js output would be here)
```

### Configuration

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm start](/commands/npm-start)
* [npm restart](/commands/npm-restart)
* [npm stop](/commands/npm-stop)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-token.md
====================================================

---
title: npm-token
section: 1
description: Manage your authentication tokens
---

### Synopsis

```bash
npm token list
npm token revoke <id|token>
npm token create [--read-only] [--cidr=list]
```

Note: This command is unaware of workspaces.

### Description

This lets you list, create and revoke authentication tokens.

* `npm token list`:
  Shows a table of all active authentication tokens. You can request
  this as JSON with `--json` or tab-separated values with `--parseable`.

```bash
+--------+---------+------------+----------+----------------+
| id     | token   | created    | read-only | CIDR whitelist |
+--------+---------+------------+----------+----------------+
| 7f3134 | 1fa9ba… | 2017-10-02 | yes      |                |
+--------+---------+------------+----------+----------------+
| c03241 | af7aef… | 2017-10-02 | no       | 192.168.0.1/24 |
+--------+---------+------------+----------+----------------+
| e0cf92 | 3a436a… | 2017-10-02 | no       |                |
+--------+---------+------------+----------+----------------+
| 63eb9d | 74ef35… | 2017-09-28 | no       |                |
+--------+---------+------------+----------+----------------+
| 2daaa8 | cbad5f… | 2017-09-26 | no       |                |
+--------+---------+------------+----------+----------------+
| 68c2fe | 127e51… | 2017-09-23 | no       |                |
+--------+---------+------------+----------+----------------+
| 6334e1 | 1dadd1… | 2017-09-23 | no       |                |
+--------+---------+------------+----------+----------------+
```

* `npm token create [--read-only] [--cidr=<cidr-ranges>]`:
  Create a new authentication token. It can be `--read-only`, or accept
  a list of
  [CIDR](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
  ranges with which to limit use of this token. This will prompt you for
  your password, and, if you have two-factor authentication enabled, an
  otp.

  Currently, the cli can not generate automation tokens. Please refer to
  the [docs
  website](https://docs.npmjs.com/creating-and-viewing-access-tokens)
  for more information on generating automation tokens.

```bash
+----------------+--------------------------------------+
| token          | a73c9572-f1b9-8983-983d-ba3ac3cc913d |
+----------------+--------------------------------------+
| cidr_whitelist |                                      |
+----------------+--------------------------------------+
| readonly       | false                                |
+----------------+--------------------------------------+
| created        | 2017-10-02T07:52:24.838Z             |
+----------------+--------------------------------------+
```

* `npm token revoke <token|id>`:
  Immediately removes an authentication token from the registry.  You
  will no longer be able to use it.  This can accept both complete
  tokens (such as those you get back from `npm token create`, and those
  found in your `.npmrc`), and ids as seen in the parseable or json
  output of `npm token list`.  This will NOT accept the truncated token
  found in the normal `npm token list` output.

### Configuration

#### `read-only`

* Default: false
* Type: Boolean

This is used to mark a token as unable to publish when configuring limited
access tokens with the `npm token create` command.



#### `cidr`

* Default: null
* Type: null or String (can be set multiple times)

This is a list of CIDR address to be used when configuring limited access
tokens with the `npm token create` command.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [npm adduser](/commands/npm-adduser)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm owner](/commands/npm-owner)
* [npm whoami](/commands/npm-whoami)
* [npm profile](/commands/npm-profile)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-uninstall.md
====================================================

---
title: npm-uninstall
section: 1
description: Remove a package
---

### Synopsis

```bash
npm uninstall [<@scope>/]<pkg>...

aliases: unlink, remove, rm, r, un
```

### Description

This uninstalls a package, completely removing everything npm installed
on its behalf.

It also removes the package from the `dependencies`, `devDependencies`,
`optionalDependencies`, and `peerDependencies` objects in your
`package.json`.

Further, if you have an `npm-shrinkwrap.json` or `package-lock.json`, npm
will update those files as well.

`--no-save` will tell npm not to remove the package from your
`package.json`, `npm-shrinkwrap.json`, or `package-lock.json` files.

`--save` or `-S` will tell npm to remove the package from your
`package.json`, `npm-shrinkwrap.json`, and `package-lock.json` files.
This is the default, but you may need to use this if you have for
instance `save=false` in your `npmrc` file

In global mode (ie, with `-g` or `--global` appended to the command),
it uninstalls the current package context as a global package.
`--no-save` is ignored in this case.

Scope is optional and follows the usual rules for [`scope`](/using-npm/scope).

### Examples

```bash
npm uninstall sax
```

`sax` will no longer be in your `package.json`, `npm-shrinkwrap.json`, or
`package-lock.json` files.

```bash
npm uninstall lodash --no-save
```

`lodash` will not be removed from your `package.json`,
`npm-shrinkwrap.json`, or `package-lock.json` files.

### Configuration

#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm prune](/commands/npm-prune)
* [npm install](/commands/npm-install)
* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-unpublish.md
====================================================

---
title: npm-unpublish
section: 1
description: Remove a package from the registry
---

### Synopsis

```bash
npm unpublish [<package-spec>]
```

To learn more about how the npm registry treats unpublish, see our <a
href="https://docs.npmjs.com/policies/unpublish" target="_blank"
rel="noopener noreferrer"> unpublish policies</a>

### Warning

Consider using the [`deprecate`](/commands/npm-deprecate) command instead,
if your intent is to encourage users to upgrade, or if you no longer
want to maintain a package.

### Description

This removes a package version from the registry, deleting its entry and
removing the tarball.

The npm registry will return an error if you are not [logged
in](/commands/npm-adduser).

If you do not specify a version or if you remove all of a package's
versions then the registry will remove the root package entry entirely.

Even if you unpublish a package version, that specific name and version
combination can never be reused. In order to publish the package again,
you must use a new version number. If you unpublish the entire package,
you may not publish any new versions of that package until 24 hours have
passed.

### Configuration

#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

### See Also

* [package spec](/using-npm/package-spec)
* [npm deprecate](/commands/npm-deprecate)
* [npm publish](/commands/npm-publish)
* [npm registry](/using-npm/registry)
* [npm adduser](/commands/npm-adduser)
* [npm owner](/commands/npm-owner)
* [npm login](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-unstar.md
====================================================

---
title: npm-unstar
section: 1
description: Remove an item from your favorite packages
---

### Synopsis

```bash
npm unstar [<package-spec>...]
```

Note: This command is unaware of workspaces.

### Description

"Unstarring" a package is the opposite of [`npm star`](/commands/npm-star),
it removes an item from your list of favorite packages.

### More

There's also these extra commands to help you manage your favorite packages:

#### Star

You can "star" a package using [`npm star`](/commands/npm-star)

#### Listing stars

You can see all your starred packages using [`npm stars`](/commands/npm-stars)

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



### See Also

* [npm star](/commands/npm-star)
* [npm stars](/commands/npm-stars)
* [npm view](/commands/npm-view)
* [npm whoami](/commands/npm-whoami)
* [npm adduser](/commands/npm-adduser)



________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-update.md
====================================================

---
title: npm-update
section: 1
description: Update packages
---

### Synopsis

```bash
npm update [<pkg>...]

aliases: up, upgrade, udpate
```

### Description

This command will update all the packages listed to the latest version
(specified by the [`tag` config](/using-npm/config#tag)), respecting the semver
constraints of both your package and its dependencies (if they also require the
same package).

It will also install missing packages.

If the `-g` flag is specified, this command will update globally installed
packages.

If no package name is specified, all packages in the specified location (global
or local) will be updated.

Note that by default `npm update` will not update the semver values of direct
dependencies in your project `package.json`, if you want to also update
values in `package.json` you can run: `npm update --save` (or add the
`save=true` option to a [configuration file](/configuring-npm/npmrc)
to make that the default behavior).

### Example

For the examples below, assume that the current package is `app` and it depends
on dependencies, `dep1` (`dep2`, .. etc.).  The published versions of `dep1`
are:

```json
{
  "dist-tags": { "latest": "1.2.2" },
  "versions": [
    "1.2.2",
    "1.2.1",
    "1.2.0",
    "1.1.2",
    "1.1.1",
    "1.0.0",
    "0.4.1",
    "0.4.0",
    "0.2.0"
  ]
}
```

#### Caret Dependencies

If `app`'s `package.json` contains:

```json
"dependencies": {
  "dep1": "^1.1.1"
}
```

Then `npm update` will install `dep1@1.2.2`, because `1.2.2` is `latest` and
`1.2.2` satisfies `^1.1.1`.

#### Tilde Dependencies

However, if `app`'s `package.json` contains:

```json
"dependencies": {
  "dep1": "~1.1.1"
}
```

In this case, running `npm update` will install `dep1@1.1.2`.  Even though the
`latest` tag points to `1.2.2`, this version do not satisfy `~1.1.1`, which is
equivalent to `>=1.1.1 <1.2.0`.  So the highest-sorting version that satisfies
`~1.1.1` is used, which is `1.1.2`.

#### Caret Dependencies below 1.0.0

Suppose `app` has a caret dependency on a version below `1.0.0`, for example:

```json
"dependencies": {
  "dep1": "^0.2.0"
}
```

`npm update` will install `dep1@0.2.0`, because there are no other
versions which satisfy `^0.2.0`.

If the dependence were on `^0.4.0`:

```json
"dependencies": {
  "dep1": "^0.4.0"
}
```

Then `npm update` will install `dep1@0.4.1`, because that is the highest-sorting
version that satisfies `^0.4.0` (`>= 0.4.0 <0.5.0`)


#### Subdependencies

Suppose your app now also has a dependency on `dep2`

```json
{
  "name": "my-app",
  "dependencies": {
      "dep1": "^1.0.0",
      "dep2": "1.0.0"
  }
}
```

and `dep2` itself depends on this limited range of `dep1`

```json
{
"name": "dep2",
  "dependencies": {
    "dep1": "~1.1.1"
  }
}
```

Then `npm update` will install `dep1@1.1.2` because that is the highest
version that `dep2` allows.  npm will prioritize having a single version
of `dep1` in your tree rather than two when that single version can
satisfy the semver requirements of multiple dependencies in your tree.
In this case if you really did need your package to use a newer version
you would need to use `npm install`.


#### Updating Globally-Installed Packages

`npm update -g` will apply the `update` action to each globally installed
package that is `outdated` -- that is, has a version that is different from
`wanted`.

Note: Globally installed packages are treated as if they are installed with a
caret semver range specified. So if you require to update to `latest` you may
need to run `npm install -g [<pkg>...]`

NOTE: If a package has been upgraded to a version newer than `latest`, it will
be _downgraded_.

### Configuration

#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



### See Also

* [npm install](/commands/npm-install)
* [npm outdated](/commands/npm-outdated)
* [npm shrinkwrap](/commands/npm-shrinkwrap)
* [npm registry](/using-npm/registry)
* [npm folders](/configuring-npm/folders)
* [npm ls](/commands/npm-ls)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-version.md
====================================================

---
title: npm-version
section: 1
description: Bump a package version
---

### Synopsis

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]

alias: verison
```

### Configuration

#### `allow-same-version`

* Default: false
* Type: Boolean

Prevents throwing an error when `npm version` is used to set the new version
to the same value as the current version.



#### `commit-hooks`

* Default: true
* Type: Boolean

Run git commit hooks when using the `npm version` command.



#### `git-tag-version`

* Default: true
* Type: Boolean

Tag the commit when using the `npm version` command. Setting this to false
results in no commit being made at all.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `preid`

* Default: ""
* Type: String

The "prerelease identifier" to use as a prefix for the "prerelease" part of
a semver. Like the `rc` in `1.2.0-rc.8`.



#### `sign-git-tag`

* Default: false
* Type: Boolean

If set to true, then the `npm version` command will tag the version using
`-s` to add a signature.

Note that git requires you to have set up GPG keys in your git configs for
this to work properly.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `workspaces-update`

* Default: true
* Type: Boolean

If set to true, the npm cli will run an update after operations that may
possibly change the workspaces installed to the `node_modules` folder.



#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### Description

Run this in a package directory to bump the version and write the new data
back to `package.json`, `package-lock.json`, and, if present,
`npm-shrinkwrap.json`.

The `newversion` argument should be a valid semver string, a valid second
argument to [semver.inc](https://github.com/npm/node-semver#functions) (one
of `patch`, `minor`, `major`, `prepatch`, `preminor`, `premajor`,
`prerelease`), or `from-git`. In the second case, the existing version will
be incremented by 1 in the specified field.  `from-git` will try to read
the latest git tag, and use that as the new npm version.

If run in a git repo, it will also create a version commit and tag.  This
behavior is controlled by `git-tag-version` (see below), and can be
disabled on the command line by running `npm --no-git-tag-version version`.
It will fail if the working directory is not clean, unless the `-f` or
`--force` flag is set.

If supplied with `-m` or [`--message` config](/using-npm/config#message) option,
npm will use it as a commit message when creating a version commit.  If the
`message` config contains `%s` then that will be replaced with the resulting
version number. For example:

```bash
npm version patch -m "Upgrade to %s for reasons"
```

If the [`sign-git-tag` config](/using-npm/config#sign-git-tag) is set, then the
tag will be signed using the `-s` flag to git. Note that you must have a default
GPG key set up in your git config for this to work properly. For example:

```bash
$ npm config set sign-git-tag true
$ npm version patch

You need a passphrase to unlock the secret key for
user: "isaacs (http://blog.izs.me/) <i@izs.me>"
2048-bit RSA key, ID 6C481CF6, created 2010-08-31

Enter passphrase:
```

If `preversion`, `version`, or `postversion` are in the `scripts` property
of the package.json, they will be executed as part of running `npm
version`.

The exact order of execution is as follows:

1. Check to make sure the git working directory is clean before we get
   started.  Your scripts may add files to the commit in future steps.
   This step is skipped if the `--force` flag is set.
2. Run the `preversion` script. These scripts have access to the old
   `version` in package.json.  A typical use would be running your full
   test suite before deploying.  Any files you want added to the commit
   should be explicitly added using `git add`.
3. Bump `version` in `package.json` as requested (`patch`, `minor`,
   `major`, etc).
4. Run the `version` script. These scripts have access to the new `version`
   in package.json (so they can incorporate it into file headers in
   generated files for example).  Again, scripts should explicitly add
   generated files to the commit using `git add`.
5. Commit and tag.
6. Run the `postversion` script. Use it to clean up the file system or
   automatically push the commit and/or tag.

Take the following example:

```json
{
  "scripts": {
    "preversion": "npm test",
    "version": "npm run build && git add -A dist",
    "postversion": "git push && git push --tags && rm -rf build/temp"
  }
}
```

This runs all your tests and proceeds only if they pass. Then runs your
`build` script, and adds everything in the `dist` directory to the commit.
After the commit, it pushes the new commit and tag up to the server, and
deletes the `build/temp` directory.

### See Also

* [npm init](/commands/npm-init)
* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [package.json](/configuring-npm/package-json)
* [config](/using-npm/config)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-view.md
====================================================

---
title: npm-view
section: 1
description: View registry info
---

### Synopsis

```bash
npm view [<package-spec>] [<field>[.subfield]...]

aliases: info, show, v
```

### Description

This command shows data about a package and prints it to stdout.

As an example, to view information about the `connect` package from the registry, you would run:

```bash
npm view connect
```

The default version is `"latest"` if unspecified.

Field names can be specified after the package descriptor.
For example, to show the dependencies of the `ronn` package at version
`0.3.5`, you could do the following:

```bash
npm view ronn@0.3.5 dependencies
```

You can view child fields by separating them with a period.
To view the git repository URL for the latest version of `npm`, you would run the following command:

```bash
npm view npm repository.url
```

This makes it easy to view information about a dependency with a bit of
shell scripting. For example, to view all the data about the version of
`opts` that `ronn` depends on, you could write the following:

```bash
npm view opts@$(npm view ronn dependencies.opts)
```

For fields that are arrays, requesting a non-numeric field will return
all of the values from the objects in the list. For example, to get all
the contributor email addresses for the `express` package, you would run:

```bash
npm view express contributors.email
```

You may also use numeric indices in square braces to specifically select
an item in an array field. To just get the email address of the first
contributor in the list, you can run:

```bash
npm view express contributors[0].email
```

If the field value you are querying for is a property of an object, you should run:

```bash
npm view express time'[4.8.0]'
```

Multiple fields may be specified, and will be printed one after another.
For example, to get all the contributor names and email addresses, you
can do this:

```bash
npm view express contributors.name contributors.email
```

"Person" fields are shown as a string if they would be shown as an
object.  So, for example, this will show the list of `npm` contributors in
the shortened string format.  (See [`package.json`](/configuring-npm/package-json) for more on this.)

```bash
npm view npm contributors
```

If a version range is provided, then data will be printed for every
matching version of the package.  This will show which version of `jsdom`
was required by each matching version of `yui3`:

```bash
npm view yui3@'>0.5.4' dependencies.jsdom
```

To show the `connect` package version history, you can do
this:

```bash
npm view connect versions
```

### Configuration

#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

### Output

If only a single string field for a single version is output, then it
will not be colorized or quoted, to enable piping the output to
another command. If the field is an object, it will be output as a JavaScript object literal.

If the `--json` flag is given, the outputted fields will be JSON.

If the version range matches multiple versions then each printed value
will be prefixed with the version it applies to.

If multiple fields are requested, then each of them is prefixed with
the field name.

### See Also

* [package spec](/using-npm/package-spec)
* [npm search](/commands/npm-search)
* [npm registry](/using-npm/registry)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm docs](/commands/npm-docs)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm-whoami.md
====================================================

---
title: npm-whoami
section: 1
description: Display npm username
---

### Synopsis

```bash
npm whoami
```

Note: This command is unaware of workspaces.

### Description

Display the npm username of the currently logged-in user.

If logged into a registry that provides token-based authentication, then
connect to the `/-/whoami` registry endpoint to find the username
associated with the token, and print to standard output.

If logged into a registry that uses Basic Auth, then simply print the
`username` portion of the authentication string.

### Configuration

#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



### See Also

* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm adduser](/commands/npm-adduser)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npm.md
====================================================

---
title: npm
section: 1
description: javascript package manager
---

### Synopsis

```bash
npm
```

Note: This command is unaware of workspaces.

### Version

10.2.0

### Description

npm is the package manager for the Node JavaScript platform.  It puts
modules in place so that node can find them, and manages dependency
conflicts intelligently.

It is extremely configurable to support a variety of use cases.  Most
commonly, you use it to publish, discover, install, and develop node
programs.

Run `npm help` to get a list of available commands.

### Important

npm comes preconfigured to use npm's public registry at
https://registry.npmjs.org by default. Use of the npm public registry is
subject to terms of use available at
https://docs.npmjs.com/policies/terms.

You can configure npm to use any compatible registry you like, and even
run your own registry. Use of someone else's registry is governed by
their terms of use.

### Introduction

You probably got npm because you want to install stuff.

The very first thing you will most likely want to run in any node
program is `npm install` to install its dependencies.

You can also run `npm install blerg` to install the latest version of
"blerg".  Check out [`npm install`](/commands/npm-install) for more
info.  It can do a lot of stuff.

Use the `npm search` command to show everything that's available in the
public registry.  Use `npm ls` to show everything you've installed.

### Dependencies

If a package lists a dependency using a git URL, npm will install that
dependency using the [`git`](https://github.com/git-guides/install-git)
command and will generate an error if it is not installed.

If one of the packages npm tries to install is a native node module and
requires compiling of C++ Code, npm will use
[node-gyp](https://github.com/nodejs/node-gyp) for that task.
For a Unix system, [node-gyp](https://github.com/nodejs/node-gyp)
needs Python, make and a buildchain like GCC. On Windows,
Python and Microsoft Visual Studio C++ are needed. For more information
visit [the node-gyp repository](https://github.com/nodejs/node-gyp) and
the [node-gyp Wiki](https://github.com/nodejs/node-gyp/wiki).

### Directories

See [`folders`](/configuring-npm/folders) to learn about where npm puts
stuff.

In particular, npm has two modes of operation:

* local mode:
  npm installs packages into the current project directory, which
  defaults to the current working directory.  Packages install to
  `./node_modules`, and bins to `./node_modules/.bin`.
* global mode:
  npm installs packages into the install prefix at
  `$npm_config_prefix/lib/node_modules` and bins to
  `$npm_config_prefix/bin`.

Local mode is the default.  Use `-g` or `--global` on any command to
run in global mode instead.

### Developer Usage

If you're using npm to develop and publish your code, check out the
following help topics:

* json:
  Make a package.json file.  See
  [`package.json`](/configuring-npm/package-json).
* link:
  Links your current working code into Node's path, so that you don't
  have to reinstall every time you make a change.  Use [`npm
  link`](/commands/npm-link) to do this.
* install:
  It's a good idea to install things if you don't need the symbolic
  link.  Especially, installing other peoples code from the registry is
  done via [`npm install`](/commands/npm-install)
* adduser:
  Create an account or log in.  When you do this, npm will store
  credentials in the user config file.
* publish:
  Use the [`npm publish`](/commands/npm-publish) command to upload your
  code to the registry.

#### Configuration

npm is extremely configurable.  It reads its configuration options from
5 places.

* Command line switches:
  Set a config with `--key val`.  All keys take a value, even if they
  are booleans (the config parser doesn't know what the options are at
  the time of parsing).  If you do not provide a value (`--key`) then
  the option is set to boolean `true`.
* Environment Variables:
  Set any config by prefixing the name in an environment variable with
  `npm_config_`.  For example, `export npm_config_key=val`.
* User Configs:
  The file at `$HOME/.npmrc` is an ini-formatted list of configs.  If
  present, it is parsed.  If the `userconfig` option is set in the cli
  or env, that file will be used instead.
* Global Configs:
  The file found at `./etc/npmrc` (relative to the global prefix will be
  parsed if it is found.  See [`npm prefix`](/commands/npm-prefix) for
  more info on the global prefix.  If the `globalconfig` option is set
  in the cli, env, or user config, then that file is parsed instead.
* Defaults:
  npm's default configuration options are defined in
  `lib/utils/config/definitions.js`.  These must not be changed.

See [`config`](/using-npm/config) for much much more information.

### Contributions

Patches welcome!

If you would like to help, but don't know what to work on, read the
[contributing
guidelines](https://github.com/npm/cli/blob/latest/CONTRIBUTING.md) and
check the issues list.

### Bugs

When you find issues, please report them:
<https://github.com/npm/cli/issues>

Please be sure to follow the template and bug reporting guidelines.

### Feature Requests

Discuss new feature ideas on our discussion forum:

* <https://github.com/npm/feedback>

Or suggest formal RFC proposals:

* <https://github.com/npm/rfcs>

### See Also

* [npm help](/commands/npm-help)
* [package.json](/configuring-npm/package-json)
* [npmrc](/configuring-npm/npmrc)
* [npm config](/commands/npm-config)
* [npm install](/commands/npm-install)
* [npm prefix](/commands/npm-prefix)
* [npm publish](/commands/npm-publish)


________________________________________________________________________
/MD deps/npm/docs/content/commands/npx.md
====================================================

---
title: npx
section: 1
description: Run a command from a local or remote npm package
---

### Synopsis

```bash
npx -- <pkg>[@<version>] [args...]
npx --package=<pkg>[@<version>] -- <cmd> [args...]
npx -c '<cmd> [args...]'
npx --package=foo -c '<cmd> [args...]'
```

### Description

This command allows you to run an arbitrary command from an npm package
(either one installed locally, or fetched remotely), in a similar context
as running it via `npm run`.

Whatever packages are specified by the `--package` option will be
provided in the `PATH` of the executed command, along with any locally
installed package executables.  The `--package` option may be
specified multiple times, to execute the supplied command in an environment
where all specified packages are available.

If any requested packages are not present in the local project
dependencies, then they are installed to a folder in the npm cache, which
is added to the `PATH` environment variable in the executed process.  A
prompt is printed (which can be suppressed by providing either `--yes` or
`--no`).

Package names provided without a specifier will be matched with whatever
version exists in the local project.  Package names with a specifier will
only be considered a match if they have the exact same name and version as
the local dependency.

If no `-c` or `--call` option is provided, then the positional arguments
are used to generate the command string.  If no `--package` options
are provided, then npm will attempt to determine the executable name from
the package specifier provided as the first positional argument according
to the following heuristic:

- If the package has a single entry in its `bin` field in `package.json`,
  or if all entries are aliases of the same command, then that command
  will be used.
- If the package has multiple `bin` entries, and one of them matches the
  unscoped portion of the `name` field, then that command will be used.
- If this does not result in exactly one option (either because there are
  no bin entries, or none of them match the `name` of the package), then
  `npm exec` exits with an error.

To run a binary _other than_ the named binary, specify one or more
`--package` options, which will prevent npm from inferring the package from
the first command argument.

### `npx` vs `npm exec`

When run via the `npx` binary, all flags and options *must* be set prior to
any positional arguments.  When run via `npm exec`, a double-hyphen `--`
flag can be used to suppress npm's parsing of switches and options that
should be sent to the executed command.

For example:

```
$ npx foo@latest bar --package=@npmcli/foo
```

In this case, npm will resolve the `foo` package name, and run the
following command:

```
$ foo bar --package=@npmcli/foo
```

Since the `--package` option comes _after_ the positional arguments, it is
treated as an argument to the executed command.

In contrast, due to npm's argument parsing logic, running this command is
different:

```
$ npm exec foo@latest bar --package=@npmcli/foo
```

In this case, npm will parse the `--package` option first, resolving the
`@npmcli/foo` package.  Then, it will execute the following command in that
context:

```
$ foo@latest bar
```

The double-hyphen character is recommended to explicitly tell npm to stop
parsing command line options and switches.  The following command would
thus be equivalent to the `npx` command above:

```
$ npm exec -- foo@latest bar --package=@npmcli/foo
```

### Examples

Run the version of `tap` in the local dependencies, with the provided
arguments:

```
$ npm exec -- tap --bail test/foo.js
$ npx tap --bail test/foo.js
```

Run a command _other than_ the command whose name matches the package name
by specifying a `--package` option:

```
$ npm exec --package=foo -- bar --bar-argument
# ~ or ~
$ npx --package=foo bar --bar-argument
```

Run an arbitrary shell script, in the context of the current project:

```
$ npm x -c 'eslint && say "hooray, lint passed"'
$ npx -c 'eslint && say "hooray, lint passed"'
```

### Compatibility with Older npx Versions

The `npx` binary was rewritten in npm v7.0.0, and the standalone `npx`
package deprecated at that time.  `npx` uses the `npm exec`
command instead of a separate argument parser and install process, with
some affordances to maintain backwards compatibility with the arguments it
accepted in previous versions.

This resulted in some shifts in its functionality:

- Any `npm` config value may be provided.
- To prevent security and user-experience problems from mistyping package
  names, `npx` prompts before installing anything.  Suppress this
  prompt with the `-y` or `--yes` option.
- The `--no-install` option is deprecated, and will be converted to `--no`.
- Shell fallback functionality is removed, as it is not advisable.
- The `-p` argument is a shorthand for `--parseable` in npm, but shorthand
  for `--package` in npx.  This is maintained, but only for the `npx`
  executable.
- The `--ignore-existing` option is removed.  Locally installed bins are
  always present in the executed process `PATH`.
- The `--npm` option is removed.  `npx` will always use the `npm` it ships
  with.
- The `--node-arg` and `-n` options are removed.
- The `--always-spawn` option is redundant, and thus removed.
- The `--shell` option is replaced with `--script-shell`, but maintained
  in the `npx` executable for backwards compatibility.

### See Also

* [npm run-script](/commands/npm-run-script)
* [npm scripts](/using-npm/scripts)
* [npm test](/commands/npm-test)
* [npm start](/commands/npm-start)
* [npm restart](/commands/npm-restart)
* [npm stop](/commands/npm-stop)
* [npm config](/commands/npm-config)
* [npm exec](/commands/npm-exec)


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/folders.md
====================================================

---
title: folders
section: 5
description: Folder Structures Used by npm
---

### Description

npm puts various things on your computer.  That's its job.

This document will tell you what it puts where.

#### tl;dr

* Local install (default): puts stuff in `./node_modules` of the current
  package root.
* Global install (with `-g`): puts stuff in /usr/local or wherever node
  is installed.
* Install it **locally** if you're going to `require()` it.
* Install it **globally** if you're going to run it on the command line.
* If you need both, then install it in both places, or use `npm link`.

#### prefix Configuration

The [`prefix` config](/using-npm/config#prefix) defaults to the location where
node is installed. On most systems, this is `/usr/local`. On Windows, it's
`%AppData%\npm`. On Unix systems, it's one level up, since node is typically
installed at `{prefix}/bin/node` rather than `{prefix}/node.exe`.

When the `global` flag is set, npm installs things into this prefix.
When it is not set, it uses the root of the current package, or the
current working directory if not in a package already.

#### Node Modules

Packages are dropped into the `node_modules` folder under the `prefix`.
When installing locally, this means that you can
`require("packagename")` to load its main module, or
`require("packagename/lib/path/to/sub/module")` to load other modules.

Global installs on Unix systems go to `{prefix}/lib/node_modules`.
Global installs on Windows go to `{prefix}/node_modules` (that is, no
`lib` folder.)

Scoped packages are installed the same way, except they are grouped together
in a sub-folder of the relevant `node_modules` folder with the name of that
scope prefix by the @ symbol, e.g. `npm install @myorg/package` would place
the package in `{prefix}/node_modules/@myorg/package`. See
[`scope`](/using-npm/scope) for more details.

If you wish to `require()` a package, then install it locally.

#### Executables

When in global mode, executables are linked into `{prefix}/bin` on Unix,
or directly into `{prefix}` on Windows.  Ensure that path is in your
terminal's `PATH` environment to run them.

When in local mode, executables are linked into
`./node_modules/.bin` so that they can be made available to scripts run
through npm.  (For example, so that a test runner will be in the path
when you run `npm test`.)

#### Man Pages

When in global mode, man pages are linked into `{prefix}/share/man`.

When in local mode, man pages are not installed.

Man pages are not installed on Windows systems.

#### Cache

See [`npm cache`](/commands/npm-cache).  Cache files are stored in `~/.npm` on Posix, or
`%LocalAppData%/npm-cache` on Windows.

This is controlled by the [`cache` config](/using-npm/config#cache) param.

#### Temp Files

Temporary files are stored by default in the folder specified by the
[`tmp` config](/using-npm/config#tmp), which defaults to the TMPDIR, TMP, or
TEMP environment variables, or `/tmp` on Unix and `c:\windows\temp` on Windows.

Temp files are given a unique folder under this root for each run of the
program, and are deleted upon successful exit.

### More Information

When installing locally, npm first tries to find an appropriate
`prefix` folder.  This is so that `npm install foo@1.2.3` will install
to the sensible root of your package, even if you happen to have `cd`ed
into some other folder.

Starting at the $PWD, npm will walk up the folder tree checking for a
folder that contains either a `package.json` file, or a `node_modules`
folder.  If such a thing is found, then that is treated as the effective
"current directory" for the purpose of running npm commands.  (This
behavior is inspired by and similar to git's .git-folder seeking
logic when running git commands in a working dir.)

If no package root is found, then the current folder is used.

When you run `npm install foo@1.2.3`, then the package is loaded into
the cache, and then unpacked into `./node_modules/foo`.  Then, any of
foo's dependencies are similarly unpacked into
`./node_modules/foo/node_modules/...`.

Any bin files are symlinked to `./node_modules/.bin/`, so that they may
be found by npm scripts when necessary.

#### Global Installation

If the [`global` config](/using-npm/config#global) is set to true, then npm will
install packages "globally".

For global installation, packages are installed roughly the same way,
but using the folders described above.

#### Cycles, Conflicts, and Folder Parsimony

Cycles are handled using the property of node's module system that it
walks up the directories looking for `node_modules` folders.  So, at every
stage, if a package is already installed in an ancestor `node_modules`
folder, then it is not installed at the current location.

Consider the case above, where `foo -> bar -> baz`.  Imagine if, in
addition to that, baz depended on bar, so you'd have:
`foo -> bar -> baz -> bar -> baz ...`.  However, since the folder
structure is: `foo/node_modules/bar/node_modules/baz`, there's no need to
put another copy of bar into `.../baz/node_modules`, since when baz calls
`require("bar")`, it will get the copy that is installed in
`foo/node_modules/bar`.

This shortcut is only used if the exact same
version would be installed in multiple nested `node_modules` folders.  It
is still possible to have `a/node_modules/b/node_modules/a` if the two
"a" packages are different versions.  However, without repeating the
exact same package multiple times, an infinite regress will always be
prevented.

Another optimization can be made by installing dependencies at the
highest level possible, below the localized "target" folder (hoisting).
Since version 3, npm hoists dependencies by default.

#### Example

Consider this dependency graph:

```bash
foo
+-- blerg@1.2.5
+-- bar@1.2.3
|   +-- blerg@1.x (latest=1.3.7)
|   +-- baz@2.x
|   |   `-- quux@3.x
|   |       `-- bar@1.2.3 (cycle)
|   `-- asdf@*
`-- baz@1.2.3
    `-- quux@3.x
        `-- bar
```

In this case, we might expect a folder structure like this
(with all dependencies hoisted to the highest level possible):

```bash
foo
+-- node_modules
    +-- blerg (1.2.5) <---[A]
    +-- bar (1.2.3) <---[B]
    |   +-- node_modules
    |       +-- baz (2.0.2) <---[C]
    +-- asdf (2.3.4)
    +-- baz (1.2.3) <---[D]
    +-- quux (3.2.0) <---[E]
```

Since foo depends directly on `bar@1.2.3` and `baz@1.2.3`, those are
installed in foo's `node_modules` folder.

Even though the latest copy of blerg is 1.3.7, foo has a specific
dependency on version 1.2.5.  So, that gets installed at [A].  Since the
parent installation of blerg satisfies bar's dependency on `blerg@1.x`,
it does not install another copy under [B].

Bar [B] also has dependencies on baz and asdf.  Because it depends on `baz@2.x`, it cannot
re-use the `baz@1.2.3` installed in the parent `node_modules` folder [D],
and must install its own copy [C]. In order to minimize duplication, npm hoists
dependencies to the top level by default, so asdf is installed under [A].

Underneath bar, the `baz -> quux -> bar` dependency creates a cycle.
However, because bar is already in quux's ancestry [B], it does not
unpack another copy of bar into that folder. Likewise, quux's [E]
folder tree is empty, because its dependency on bar is satisfied
by the parent folder copy installed at [B].

For a graphical breakdown of what is installed where, use `npm ls`.

#### Publishing

Upon publishing, npm will look in the `node_modules` folder.  If any of
the items there are not in the `bundleDependencies` array, then they will
not be included in the package tarball.

This allows a package maintainer to install all of their dependencies
(and dev dependencies) locally, but only re-publish those items that
cannot be found elsewhere.  See [`package.json`](/configuring-npm/package-json) for more information.

### See also

* [package.json](/configuring-npm/package-json)
* [npm install](/commands/npm-install)
* [npm pack](/commands/npm-pack)
* [npm cache](/commands/npm-cache)
* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [config](/using-npm/config)
* [npm publish](/commands/npm-publish)


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/install.md
====================================================

---
title: install
section: 5
description: Download and install node and npm
---

### Description

To publish and install packages to and from the public npm registry, you
must install Node.js and the npm command line interface using either a Node
version manager or a Node installer. **We strongly recommend using a Node
version manager to install Node.js and npm.** We do not recommend using a
Node installer, since the Node installation process installs npm in a
directory with local permissions and can cause permissions errors when you
run npm packages globally.

### Overview

- [Checking your version of npm and
  Node.js](#checking-your-version-of-npm-and-nodejs)
- [Using a Node version manager to install Node.js and
  npm](#using-a-node-version-manager-to-install-nodejs-and-npm)
- [Using a Node installer to install Node.js and
  npm](#using-a-node-installer-to-install-nodejs-and-npm)

### Checking your version of npm and Node.js

To see if you already have Node.js and npm installed and check the
installed version, run the following commands:

```
node -v
npm -v
```

### Using a Node version manager to install Node.js and npm

Node version managers allow you to install and switch between multiple
versions of Node.js and npm on your system so you can test your
applications on multiple versions of npm to ensure they work for users on
different versions.  You can
[search for them on GitHub](https://github.com/search?q=node+version+manager+archived%3Afalse&type=repositories&ref=advsearch).

### Using a Node installer to install Node.js and npm

If you are unable to use a Node version manager, you can use a Node
installer to install both Node.js and npm on your system.

* [Node.js installer](https://nodejs.org/en/download/)
* [NodeSource installer](https://github.com/nodesource/distributions). If
  you use Linux, we recommend that you use a NodeSource installer.

#### OS X or Windows Node installers

If you're using OS X or Windows, use one of the installers from the
[Node.js download page](https://nodejs.org/en/download/). Be sure to
install the version labeled **LTS**. Other versions have not yet been
tested with npm.

#### Linux or other operating systems Node installers

If you're using Linux or another operating system, use one of the following
installers:

- [NodeSource installer](https://github.com/nodesource/distributions)
  (recommended)
- One of the installers on the [Node.js download
  page](https://nodejs.org/en/download/)

Or see [this page](https://nodejs.org/en/download/package-manager/) to
install npm for Linux in the way many Linux developers prefer.

#### Less-common operating systems

For more information on installing Node.js on a variety of operating
systems, see [this page][pkg-mgr].

[pkg-mgr]: https://nodejs.org/en/download/package-manager/


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/npm-shrinkwrap-json.md
====================================================

---
title: npm-shrinkwrap.json
section: 5
description: A publishable lockfile
---

### Description

`npm-shrinkwrap.json` is a file created by [`npm
shrinkwrap`](/commands/npm-shrinkwrap). It is identical to
`package-lock.json`, with one major caveat: Unlike `package-lock.json`,
`npm-shrinkwrap.json` may be included when publishing a package.

The recommended use-case for `npm-shrinkwrap.json` is applications deployed
through the publishing process on the registry: for example, daemons and
command-line tools intended as global installs or `devDependencies`. It's
strongly discouraged for library authors to publish this file, since that
would prevent end users from having control over transitive dependency
updates.

If both `package-lock.json` and `npm-shrinkwrap.json` are present in a
package root, `npm-shrinkwrap.json` will be preferred over the
`package-lock.json` file.

For full details and description of the `npm-shrinkwrap.json` file format,
refer to the manual page for
[package-lock.json](/configuring-npm/package-lock-json).

### See also

* [npm shrinkwrap](/commands/npm-shrinkwrap)
* [package-lock.json](/configuring-npm/package-lock-json)
* [package.json](/configuring-npm/package-json)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/npmrc.md
====================================================

---
title: npmrc
section: 5
description: The npm config files
---

### Description

npm gets its config settings from the command line, environment variables,
and `npmrc` files.

The `npm config` command can be used to update and edit the contents of the
user and global npmrc files.

For a list of available configuration options, see
[config](/using-npm/config).

### Files

The four relevant files are:

* per-project config file (/path/to/my/project/.npmrc)
* per-user config file (~/.npmrc)
* global config file ($PREFIX/etc/npmrc)
* npm builtin config file (/path/to/npm/npmrc)

All npm config files are an ini-formatted list of `key = value` parameters.
Environment variables can be replaced using `${VARIABLE_NAME}`. For
example:

```bash
prefix = ${HOME}/.npm-packages
```

Each of these files is loaded, and config options are resolved in priority
order.  For example, a setting in the userconfig file would override the
setting in the globalconfig file.

Array values are specified by adding "[]" after the key name. For example:

```bash
key[] = "first value"
key[] = "second value"
```

#### Comments

Lines in `.npmrc` files are interpreted as comments when they begin with a
`;` or `#` character. `.npmrc` files are parsed by
[npm/ini](https://github.com/npm/ini), which specifies this comment syntax.

For example:

```bash
# last modified: 01 Jan 2016
; Set a new registry for a scoped package
@myscope:registry=https://mycustomregistry.example.org
```

#### Per-project config file

When working locally in a project, a `.npmrc` file in the root of the
project (ie, a sibling of `node_modules` and `package.json`) will set
config values specific to this project.

Note that this only applies to the root of the project that you're running
npm in.  It has no effect when your module is published.  For example, you
can't publish a module that forces itself to install globally, or in a
different location.

Additionally, this file is not read in global mode, such as when running
`npm install -g`.

#### Per-user config file

`$HOME/.npmrc` (or the `userconfig` param, if set in the environment or on
the command line)

#### Global config file

`$PREFIX/etc/npmrc` (or the `globalconfig` param, if set above): This file
is an ini-file formatted list of `key = value` parameters.  Environment
variables can be replaced as above.

#### Built-in config file

`path/to/npm/itself/npmrc`

This is an unchangeable "builtin" configuration file that npm keeps
consistent across updates.  Set fields in here using the `./configure`
script that comes with npm.  This is primarily for distribution maintainers
to override default configs in a standard and consistent manner.

### Auth related configuration

The settings `_auth`, `_authToken`, `username` and `_password` must all be
scoped to a specific registry. This ensures that `npm` will never send
credentials to the wrong host.

The full list is:
 - `_auth` (base64 authentication string)
 - `_authToken` (authentication token)
 - `username`
 - `_password`
 - `email`
 - `certfile` (path to certificate file)
 - `keyfile` (path to key file)

In order to scope these values, they must be prefixed by a URI fragment.
If the credential is meant for any request to a registry on a single host,
the scope may look like `//registry.npmjs.org/:`. If it must be scoped to a
specific path on the host that path may also be provided, such as
`//my-custom-registry.org/unique/path:`.

```
; bad config
_authToken=MYTOKEN

; good config
@myorg:registry=https://somewhere-else.com/myorg
@another:registry=https://somewhere-else.com/another
//registry.npmjs.org/:_authToken=MYTOKEN
; would apply to both @myorg and @another
; //somewhere-else.com/:_authToken=MYTOKEN
; would apply only to @myorg
//somewhere-else.com/myorg/:_authToken=MYTOKEN1
; would apply only to @another
//somewhere-else.com/another/:_authToken=MYTOKEN2
```

### See also

* [npm folders](/configuring-npm/folders)
* [npm config](/commands/npm-config)
* [config](/using-npm/config)
* [package.json](/configuring-npm/package-json)
* [npm](/commands/npm)


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/package-json.md
====================================================

---
title: package.json
section: 5
description: Specifics of npm's package.json handling
---

### Description

This document is all you need to know about what's required in your
package.json file.  It must be actual JSON, not just a JavaScript object
literal.

A lot of the behavior described in this document is affected by the config
settings described in [`config`](/using-npm/config).

### name

If you plan to publish your package, the *most* important things in your
package.json are the name and version fields as they will be required. The
name and version together form an identifier that is assumed to be
completely unique.  Changes to the package should come along with changes
to the version. If you don't plan to publish your package, the name and
version fields are optional.

The name is what your thing is called.

Some rules:

* The name must be less than or equal to 214 characters. This includes the
  scope for scoped packages.
* The names of scoped packages can begin with a dot or an underscore. This
  is not permitted without a scope.
* New packages must not have uppercase letters in the name.
* The name ends up being part of a URL, an argument on the command line,
  and a folder name. Therefore, the name can't contain any non-URL-safe
  characters.

Some tips:

* Don't use the same name as a core Node module.
* Don't put "js" or "node" in the name.  It's assumed that it's js, since
  you're writing a package.json file, and you can specify the engine using
  the "engines" field.  (See below.)
* The name will probably be passed as an argument to require(), so it
  should be something short, but also reasonably descriptive.
* You may want to check the npm registry to see if there's something by
  that name already, before you get too attached to it.
  <https://www.npmjs.com/>

A name can be optionally prefixed by a scope, e.g. `@myorg/mypackage`. See
[`scope`](/using-npm/scope) for more detail.

### version

If you plan to publish your package, the *most* important things in your
package.json are the name and version fields as they will be required. The
name and version together form an identifier that is assumed to be
completely unique.  Changes to the package should come along with changes
to the version. If you don't plan to publish your package, the name and
version fields are optional.

Version must be parseable by
[node-semver](https://github.com/npm/node-semver), which is bundled with
npm as a dependency.  (`npm install semver` to use it yourself.)

### description

Put a description in it.  It's a string.  This helps people discover your
package, as it's listed in `npm search`.

### keywords

Put keywords in it.  It's an array of strings.  This helps people discover
your package as it's listed in `npm search`.

### homepage

The url to the project homepage.

Example:

```json
"homepage": "https://github.com/owner/project#readme"
```

### bugs

The url to your project's issue tracker and / or the email address to which
issues should be reported. These are helpful for people who encounter
issues with your package.

It should look like this:

```json
{
  "bugs": {
    "url": "https://github.com/owner/project/issues",
    "email": "project@hostname.com"
  }
}
```

You can specify either one or both values. If you want to provide only a
url, you can specify the value for "bugs" as a simple string instead of an
object.

If a url is provided, it will be used by the `npm bugs` command.

### license

You should specify a license for your package so that people know how they
are permitted to use it, and any restrictions you're placing on it.

If you're using a common license such as BSD-2-Clause or MIT, add a current
SPDX license identifier for the license you're using, like this:

```json
{
  "license" : "BSD-3-Clause"
}
```

You can check [the full list of SPDX license
IDs](https://spdx.org/licenses/).  Ideally you should pick one that is
[OSI](https://opensource.org/licenses/) approved.

If your package is licensed under multiple common licenses, use an [SPDX
license expression syntax version 2.0
string](https://spdx.dev/specifications/), like this:

```json
{
  "license" : "(ISC OR GPL-3.0)"
}
```
If you are using a license that hasn't been assigned an SPDX identifier, or if
you are using a custom license, use a string value like this one:

```json
{
  "license" : "SEE LICENSE IN <filename>"
}
```
Then include a file named `<filename>` at the top level of the package.

Some old packages used license objects or a "licenses" property containing
an array of license objects:

```json
// Not valid metadata
{
  "license" : {
    "type" : "ISC",
    "url" : "https://opensource.org/licenses/ISC"
  }
}

// Not valid metadata
{
  "licenses" : [
    {
      "type": "MIT",
      "url": "https://www.opensource.org/licenses/mit-license.php"
    },
    {
      "type": "Apache-2.0",
      "url": "https://opensource.org/licenses/apache2.0.php"
    }
  ]
}
```

Those styles are now deprecated. Instead, use SPDX expressions, like this:

```json
{
  "license": "ISC"
}
```

```json
{
  "license": "(MIT OR Apache-2.0)"
}
```

Finally, if you do not wish to grant others the right to use a private or
unpublished package under any terms:

```json
{
  "license": "UNLICENSED"
}
```

Consider also setting `"private": true` to prevent accidental publication.

### people fields: author, contributors

The "author" is one person.  "contributors" is an array of people.  A
"person" is an object with a "name" field and optionally "url" and "email",
like this:

```json
{
  "name" : "Barney Rubble",
  "email" : "b@rubble.com",
  "url" : "http://barnyrubble.tumblr.com/"
}
```

Or you can shorten that all into a single string, and npm will parse it for
you:

```json
{
  "author": "Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"
}
```

Both email and url are optional either way.

npm also sets a top-level "maintainers" field with your npm user info.

### funding

You can specify an object containing a URL that provides up-to-date
information about ways to help fund development of your package, or a
string URL, or an array of these:

```json
{
  "funding": {
    "type" : "individual",
    "url" : "http://example.com/donate"
  },

  "funding": {
    "type" : "patreon",
    "url" : "https://www.patreon.com/my-account"
  },

  "funding": "http://example.com/donate",

  "funding": [
    {
      "type" : "individual",
      "url" : "http://example.com/donate"
    },
    "http://example.com/donateAlso",
    {
      "type" : "patreon",
      "url" : "https://www.patreon.com/my-account"
    }
  ]
}
```

Users can use the `npm fund` subcommand to list the `funding` URLs of all
dependencies of their project, direct and indirect. A shortcut to visit
each funding url is also available when providing the project name such as:
`npm fund <projectname>` (when there are multiple URLs, the first one will
be visited)

### files

The optional `files` field is an array of file patterns that describes the
entries to be included when your package is installed as a dependency. File
patterns follow a similar syntax to `.gitignore`, but reversed: including a
file, directory, or glob pattern (`*`, `**/*`, and such) will make it so
that file is included in the tarball when it's packed. Omitting the field
will make it default to `["*"]`, which means it will include all files.

Some special files and directories are also included or excluded regardless
of whether they exist in the `files` array (see below).

You can also provide a `.npmignore` file in the root of your package or in
subdirectories, which will keep files from being included. At the root of
your package it will not override the "files" field, but in subdirectories
it will. The `.npmignore` file works just like a `.gitignore`. If there is
a `.gitignore` file, and `.npmignore` is missing, `.gitignore`'s contents
will be used instead.

Certain files are always included, regardless of settings:

* `package.json`
* `README`
* `LICENSE` / `LICENCE`
* The file in the "main" field
* The file(s) in the "bin" field

`README` & `LICENSE` can have any case and extension.

Conversely, some files are always ignored:

* `.git`
* `CVS`
* `.svn`
* `.hg`
* `.lock-wscript`
* `.wafpickle-N`
* `.*.swp`
* `.DS_Store`
* `._*`
* `npm-debug.log`
* `.npmrc`
* `node_modules`
* `config.gypi`
* `*.orig`
* `package-lock.json` (use
  [`npm-shrinkwrap.json`](/configuring-npm/npm-shrinkwrap-json) if you wish
  it to be published)

### main

The main field is a module ID that is the primary entry point to your
program.  That is, if your package is named `foo`, and a user installs it,
and then does `require("foo")`, then your main module's exports object will
be returned.

This should be a module relative to the root of your package folder.

For most modules, it makes the most sense to have a main script and often
not much else.

If `main` is not set, it defaults to `index.js` in the package's root folder.

### browser

If your module is meant to be used client-side the browser field should be
used instead of the main field. This is helpful to hint users that it might
rely on primitives that aren't available in Node.js modules. (e.g.
`window`)

### bin

A lot of packages have one or more executable files that they'd like to
install into the PATH. npm makes this pretty easy (in fact, it uses this
feature to install the "npm" executable.)

To use this, supply a `bin` field in your package.json which is a map of
command name to local file name. When this package is installed globally,
that file will be either linked inside the global bins directory or
a cmd (Windows Command File) will be created which executes the specified
file in the `bin` field, so it is available to run by `name` or `name.cmd` (on
Windows PowerShell). When this package is installed as a dependency in another
package, the file will be linked where it will be available to that package
either directly by `npm exec` or by name in other scripts when invoking them
via `npm run-script`.


For example, myapp could have this:

```json
{
  "bin": {
    "myapp": "./cli.js"
  }
}
```

So, when you install myapp, in case of unix-like OS it'll create a symlink
from the `cli.js` script to `/usr/local/bin/myapp` and in case of windows it
will create a cmd file usually at `C:\Users\{Username}\AppData\Roaming\npm\myapp.cmd`
which runs the `cli.js` script.

If you have a single executable, and its name should be the name of the
package, then you can just supply it as a string.  For example:

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": "./path/to/program"
}
```

would be the same as this:

```json
{
  "name": "my-program",
  "version": "1.2.5",
  "bin": {
    "my-program": "./path/to/program"
  }
}
```

Please make sure that your file(s) referenced in `bin` starts with
`#!/usr/bin/env node`, otherwise the scripts are started without the node
executable!

Note that you can also set the executable files using [directories.bin](#directoriesbin).

See [folders](/configuring-npm/folders#executables) for more info on
executables.

### man

Specify either a single file or an array of filenames to put in place for
the `man` program to find.

If only a single file is provided, then it's installed such that it is the
result from `man <pkgname>`, regardless of its actual filename.  For
example:

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": "./man/doc.1"
}
```

would link the `./man/doc.1` file in such that it is the target for `man
foo`

If the filename doesn't start with the package name, then it's prefixed.
So, this:

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": [
    "./man/foo.1",
    "./man/bar.1"
  ]
}
```

will create files to do `man foo` and `man foo-bar`.

Man files must end with a number, and optionally a `.gz` suffix if they are
compressed.  The number dictates which man section the file is installed
into.

```json
{
  "name": "foo",
  "version": "1.2.3",
  "description": "A packaged foo fooer for fooing foos",
  "main": "foo.js",
  "man": [
    "./man/foo.1",
    "./man/foo.2"
  ]
}
```

will create entries for `man foo` and `man 2 foo`

### directories

The CommonJS [Packages](http://wiki.commonjs.org/wiki/Packages/1.0) spec
details a few ways that you can indicate the structure of your package
using a `directories` object. If you look at [npm's
package.json](https://registry.npmjs.org/npm/latest), you'll see that it
has directories for doc, lib, and man.

In the future, this information may be used in other creative ways.

#### directories.bin

If you specify a `bin` directory in `directories.bin`, all the files in
that folder will be added.

Because of the way the `bin` directive works, specifying both a `bin` path
and setting `directories.bin` is an error. If you want to specify
individual files, use `bin`, and for all the files in an existing `bin`
directory, use `directories.bin`.

#### directories.man

A folder that is full of man pages.  Sugar to generate a "man" array by
walking the folder.

### repository

Specify the place where your code lives. This is helpful for people who
want to contribute.  If the git repo is on GitHub, then the `npm docs`
command will be able to find you.

Do it like this:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git"
  }
}
```

The URL should be a publicly available (perhaps read-only) url that can be
handed directly to a VCS program without any modification.  It should not
be a url to an html project page that you put in your browser.  It's for
computers.

For GitHub, GitHub gist, Bitbucket, or GitLab repositories you can use the
same shortcut syntax you use for `npm install`:

```json
{
  "repository": "npm/npm",

  "repository": "github:user/repo",

  "repository": "gist:11081aaa281",

  "repository": "bitbucket:user/repo",

  "repository": "gitlab:user/repo"
}
```

If the `package.json` for your package is not in the root directory (for
example if it is part of a monorepo), you can specify the directory in
which it lives:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/facebook/react.git",
    "directory": "packages/react-dom"
  }
}
```

### scripts

The "scripts" property is a dictionary containing script commands that are
run at various times in the lifecycle of your package.  The key is the
lifecycle event, and the value is the command to run at that point.

See [`scripts`](/using-npm/scripts) to find out more about writing package
scripts.

### config

A "config" object can be used to set configuration parameters used in
package scripts that persist across upgrades.  For instance, if a package
had the following:

```json
{
  "name": "foo",
  "config": {
    "port": "8080"
  }
}
```

It could also have a "start" command that referenced the
`npm_package_config_port` environment variable.

### dependencies

Dependencies are specified in a simple object that maps a package name to a
version range. The version range is a string which has one or more
space-separated descriptors.  Dependencies can also be identified with a
tarball or git URL.

**Please do not put test harnesses or transpilers or other "development"
time tools in your `dependencies` object.**  See `devDependencies`, below.

See [semver](https://github.com/npm/node-semver#versions) for more details about specifying version ranges.

* `version` Must match `version` exactly
* `>version` Must be greater than `version`
* `>=version` etc
* `<version`
* `<=version`
* `~version` "Approximately equivalent to version"  See
  [semver](https://github.com/npm/node-semver#versions)
* `^version` "Compatible with version"  See [semver](https://github.com/npm/node-semver#versions)
* `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0
* `http://...` See 'URLs as Dependencies' below
* `*` Matches any version
* `""` (just an empty string) Same as `*`
* `version1 - version2` Same as `>=version1 <=version2`.
* `range1 || range2` Passes if either range1 or range2 are satisfied.
* `git...` See 'Git URLs as Dependencies' below
* `user/repo` See 'GitHub URLs' below
* `tag` A specific version tagged and published as `tag`  See [`npm
  dist-tag`](/commands/npm-dist-tag)
* `path/path/path` See [Local Paths](#local-paths) below

For example, these are all valid:

```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl"
  }
}
```

#### URLs as Dependencies

You may specify a tarball URL in place of a version range.

This tarball will be downloaded and installed locally to your package at
install time.

#### Git URLs as Dependencies

Git urls are of the form:

```bash
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

`<protocol>` is one of `git`, `git+ssh`, `git+http`, `git+https`, or
`git+file`.

If `#<commit-ish>` is provided, it will be used to clone exactly that
commit. If the commit-ish has the format `#semver:<semver>`, `<semver>` can
be any valid semver range or exact version, and npm will look for any tags
or refs matching that range in the remote repository, much as it would for
a registry dependency. If neither `#<commit-ish>` or `#semver:<semver>` is
specified, then the default branch is used.

Examples:

```bash
git+ssh://git@github.com:npm/cli.git#v1.0.27
git+ssh://git@github.com:npm/cli#semver:^5.0
git+https://isaacs@github.com/npm/cli.git
git://github.com/npm/cli.git#v1.0.27
```

When installing from a `git` repository, the presence of certain fields in the
`package.json` will cause npm to believe it needs to perform a build. To do so
your repository will be cloned into a temporary directory, all of its deps
installed, relevant scripts run, and the resulting directory packed and
installed.

This flow will occur if your git dependency uses `workspaces`, or if any of the
following scripts are present:

* `build`
* `prepare`
* `prepack`
* `preinstall`
* `install`
* `postinstall`

If your git repository includes pre-built artifacts, you will likely want to
make sure that none of the above scripts are defined, or your dependency
will be rebuilt for every installation.

#### GitHub URLs

As of version 1.1.65, you can refer to GitHub urls as just "foo":
"user/foo-project".  Just as with git URLs, a `commit-ish` suffix can be
included.  For example:

```json
{
  "name": "foo",
  "version": "0.0.0",
  "dependencies": {
    "express": "expressjs/express",
    "mocha": "mochajs/mocha#4727d357ea",
    "module": "user/repo#feature\/branch"
  }
}
```

#### Local Paths

As of version 2.0.0 you can provide a path to a local directory that
contains a package. Local paths can be saved using `npm install -S` or `npm
install --save`, using any of these forms:

```bash
../foo/bar
~/foo/bar
./foo/bar
/foo/bar
```

in which case they will be normalized to a relative path and added to your
`package.json`. For example:

```json
{
  "name": "baz",
  "dependencies": {
    "bar": "file:../foo/bar"
  }
}
```

This feature is helpful for local offline development and creating tests
that require npm installing where you don't want to hit an external server,
but should not be used when publishing packages to the public registry.

*note*: Packages linked by local path will not have their own
dependencies installed when `npm install` is ran in this case.  You must
run `npm install` from inside the local path itself.

### devDependencies

If someone is planning on downloading and using your module in their
program, then they probably don't want or need to download and build the
external test or documentation framework that you use.

In this case, it's best to map these additional items in a
`devDependencies` object.

These things will be installed when doing `npm link` or `npm install` from
the root of a package, and can be managed like any other npm configuration
param.  See [`config`](/using-npm/config) for more on the topic.

For build steps that are not platform-specific, such as compiling
CoffeeScript or other languages to JavaScript, use the `prepare` script to
do this, and make the required package a devDependency.

For example:

```json
{
  "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepare": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

The `prepare` script will be run before publishing, so that users can
consume the functionality without requiring them to compile it themselves.
In dev mode (ie, locally running `npm install`), it'll run this script as
well, so that you can test it easily.

### peerDependencies

In some cases, you want to express the compatibility of your package with a
host tool or library, while not necessarily doing a `require` of this host.
This is usually referred to as a *plugin*. Notably, your module may be
exposing a specific interface, expected and specified by the host
documentation.

For example:

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x"
  }
}
```

This ensures your package `tea-latte` can be installed *along* with the
second major version of the host package `tea` only. `npm install
tea-latte` could possibly yield the following dependency graph:

```bash
├── tea-latte@1.3.5
└── tea@2.2.0
```

In npm versions 3 through 6, `peerDependencies` were not automatically
installed, and would raise a warning if an invalid version of the peer
dependency was found in the tree.  As of npm v7, peerDependencies _are_
installed by default.

Trying to install another plugin with a conflicting requirement may cause
an error if the tree cannot be resolved correctly. For this reason, make
sure your plugin requirement is as broad as possible, and not to lock it
down to specific patch versions.

Assuming the host complies with [semver](https://semver.org/), only changes
in the host package's major version will break your plugin. Thus, if you've
worked with every 1.x version of the host package, use `"^1.0"` or `"1.x"`
to express this. If you depend on features introduced in 1.5.2, use
`"^1.5.2"`.

### peerDependenciesMeta

When a user installs your package, npm will emit warnings if packages
specified in `peerDependencies` are not already installed. The
`peerDependenciesMeta` field serves to provide npm more information on how
your peer dependencies are to be used. Specifically, it allows peer
dependencies to be marked as optional.

For example:

```json
{
  "name": "tea-latte",
  "version": "1.3.5",
  "peerDependencies": {
    "tea": "2.x",
    "soy-milk": "1.2"
  },
  "peerDependenciesMeta": {
    "soy-milk": {
      "optional": true
    }
  }
}
```

Marking a peer dependency as optional ensures npm will not emit a warning
if the `soy-milk` package is not installed on the host. This allows you to
integrate and interact with a variety of host packages without requiring
all of them to be installed.

### bundleDependencies

This defines an array of package names that will be bundled when publishing
the package.

In cases where you need to preserve npm packages locally or have them
available through a single file download, you can bundle the packages in a
tarball file by specifying the package names in the `bundleDependencies`
array and executing `npm pack`.

For example:

If we define a package.json like this:

```json
{
  "name": "awesome-web-framework",
  "version": "1.0.0",
  "bundleDependencies": [
    "renderized",
    "super-streams"
  ]
}
```

we can obtain `awesome-web-framework-1.0.0.tgz` file by running `npm pack`.
This file contains the dependencies `renderized` and `super-streams` which
can be installed in a new project by executing `npm install
awesome-web-framework-1.0.0.tgz`.  Note that the package names do not
include any versions, as that information is specified in `dependencies`.

If this is spelled `"bundledDependencies"`, then that is also honored.

Alternatively, `"bundleDependencies"` can be defined as a boolean value. A
value of `true` will bundle all dependencies, a value of `false` will bundle
none.

### optionalDependencies

If a dependency can be used, but you would like npm to proceed if it cannot
be found or fails to install, then you may put it in the
`optionalDependencies` object.  This is a map of package name to version or
url, just like the `dependencies` object.  The difference is that build
failures do not cause installation to fail.  Running `npm install
--omit=optional` will prevent these dependencies from being installed.

It is still your program's responsibility to handle the lack of the
dependency.  For example, something like this:

```js
try {
  var foo = require('foo')
  var fooVersion = require('foo/package.json').version
} catch (er) {
  foo = null
}
if ( notGoodFooVersion(fooVersion) ) {
  foo = null
}

// .. then later in your program ..

if (foo) {
  foo.doFooThings()
}
```

Entries in `optionalDependencies` will override entries of the same name in
`dependencies`, so it's usually best to only put in one place.

### overrides

If you need to make specific changes to dependencies of your dependencies, for
example replacing the version of a dependency with a known security issue,
replacing an existing dependency with a fork, or making sure that the same
version of a package is used everywhere, then you may add an override.

Overrides provide a way to replace a package in your dependency tree with
another version, or another package entirely. These changes can be scoped as
specific or as vague as desired.

To make sure the package `foo` is always installed as version `1.0.0` no matter
what version your dependencies rely on:

```json
{
  "overrides": {
    "foo": "1.0.0"
  }
}
```

The above is a short hand notation, the full object form can be used to allow
overriding a package itself as well as a child of the package. This will cause
`foo` to always be `1.0.0` while also making `bar` at any depth beyond `foo`
also `1.0.0`:

```json
{
  "overrides": {
    "foo": {
      ".": "1.0.0",
      "bar": "1.0.0"
    }
  }
}
```

To only override `foo` to be `1.0.0` when it's a child (or grandchild, or great
grandchild, etc) of the package `bar`:

```json
{
  "overrides": {
    "bar": {
      "foo": "1.0.0"
    }
  }
}
```

Keys can be nested to any arbitrary length. To override `foo` only when it's a
child of `bar` and only when `bar` is a child of `baz`:

```json
{
  "overrides": {
    "baz": {
      "bar": {
        "foo": "1.0.0"
      }
    }
  }
}
```

The key of an override can also include a version, or range of versions.
To override `foo` to `1.0.0`, but only when it's a child of `bar@2.0.0`:

```json
{
  "overrides": {
    "bar@2.0.0": {
      "foo": "1.0.0"
    }
  }
}
```

You may not set an override for a package that you directly depend on unless
both the dependency and the override itself share the exact same spec. To make
this limitation easier to deal with, overrides may also be defined as a
reference to a spec for a direct dependency by prefixing the name of the
package you wish the version to match with a `$`.

```json
{
  "dependencies": {
    "foo": "^1.0.0"
  },
  "overrides": {
    // BAD, will throw an EOVERRIDE error
    // "foo": "^2.0.0"
    // GOOD, specs match so override is allowed
    // "foo": "^1.0.0"
    // BEST, the override is defined as a reference to the dependency
    "foo": "$foo",
    // the referenced package does not need to match the overridden one
    "bar": "$foo"
  }
}
```

### engines

You can specify the version of node that your stuff works on:

```json
{
  "engines": {
    "node": ">=0.10.3 <15"
  }
}
```

And, like with dependencies, if you don't specify the version (or if you
specify "\*" as the version), then any version of node will do.

You can also use the "engines" field to specify which versions of npm are
capable of properly installing your program.  For example:

```json
{
  "engines": {
    "npm": "~1.0.20"
  }
}
```

Unless the user has set the
[`engine-strict` config](/using-npm/config#engine-strict) flag, this field is
advisory only and will only produce warnings when your package is installed as a
dependency.

### os

You can specify which operating systems your
module will run on:

```json
{
  "os": [
    "darwin",
    "linux"
  ]
}
```

You can also block instead of allowing operating systems, just prepend the
blocked os with a '!':

```json
{
  "os": [
    "!win32"
  ]
}
```

The host operating system is determined by `process.platform`

It is allowed to both block and allow an item, although there isn't any
good reason to do this.

### cpu

If your code only runs on certain cpu architectures,
you can specify which ones.

```json
{
  "cpu": [
    "x64",
    "ia32"
  ]
}
```

Like the `os` option, you can also block architectures:

```json
{
  "cpu": [
    "!arm",
    "!mips"
  ]
}
```

The host architecture is determined by `process.arch`

### private

If you set `"private": true` in your package.json, then npm will refuse to
publish it.

This is a way to prevent accidental publication of private repositories.
If you would like to ensure that a given package is only ever published to
a specific registry (for example, an internal registry), then use the
`publishConfig` dictionary described below to override the `registry`
config param at publish-time.

### publishConfig

This is a set of config values that will be used at publish-time. It's
especially handy if you want to set the tag, registry or access, so that
you can ensure that a given package is not tagged with "latest", published
to the global public registry or that a scoped module is private by
default.

See [`config`](/using-npm/config) to see the list of config options that
can be overridden.

### workspaces

The optional `workspaces` field is an array of file patterns that describes
locations within the local file system that the install client should look
up to find each [workspace](/using-npm/workspaces) that needs to be
symlinked to the top level `node_modules` folder.

It can describe either the direct paths of the folders to be used as
workspaces or it can define globs that will resolve to these same folders.

In the following example, all folders located inside the folder
`./packages` will be treated as workspaces as long as they have valid
`package.json` files inside them:

```json
{
  "name": "workspace-example",
  "workspaces": [
    "./packages/*"
  ]
}
```

See [`workspaces`](/using-npm/workspaces) for more examples.

### DEFAULT VALUES

npm will default some values based on package contents.

* `"scripts": {"start": "node server.js"}`

  If there is a `server.js` file in the root of your package, then npm will
  default the `start` command to `node server.js`.

* `"scripts":{"install": "node-gyp rebuild"}`

  If there is a `binding.gyp` file in the root of your package and you have
  not defined an `install` or `preinstall` script, npm will default the
  `install` command to compile using node-gyp.

* `"contributors": [...]`

  If there is an `AUTHORS` file in the root of your package, npm will treat
  each line as a `Name <email> (url)` format, where email and url are
  optional.  Lines which start with a `#` or are blank, will be ignored.

### SEE ALSO

* [semver](https://github.com/npm/node-semver#versions)
* [workspaces](/using-npm/workspaces)
* [npm init](/commands/npm-init)
* [npm version](/commands/npm-version)
* [npm config](/commands/npm-config)
* [npm help](/commands/npm-help)
* [npm install](/commands/npm-install)
* [npm publish](/commands/npm-publish)
* [npm uninstall](/commands/npm-uninstall)


________________________________________________________________________
/MD deps/npm/docs/content/configuring-npm/package-lock-json.md
====================================================

---
title: package-lock.json
section: 5
description: A manifestation of the manifest
---

### Description

`package-lock.json` is automatically generated for any operations where npm
modifies either the `node_modules` tree, or `package.json`. It describes the
exact tree that was generated, such that subsequent installs are able to
generate identical trees, regardless of intermediate dependency updates.

This file is intended to be committed into source repositories, and serves
various purposes:

* Describe a single representation of a dependency tree such that
  teammates, deployments, and continuous integration are guaranteed to
  install exactly the same dependencies.

* Provide a facility for users to "time-travel" to previous states of
  `node_modules` without having to commit the directory itself.

* Facilitate greater visibility of tree changes through readable source
  control diffs.

* Optimize the installation process by allowing npm to skip repeated
  metadata resolutions for previously-installed packages.

* As of npm v7, lockfiles include enough information to gain a complete
  picture of the package tree, reducing the need to read `package.json`
  files, and allowing for significant performance improvements.

### `package-lock.json` vs `npm-shrinkwrap.json`

Both of these files have the same format, and perform similar functions in
the root of a project.

The difference is that `package-lock.json` cannot be published, and it will
be ignored if found in any place other than the root project.

In contrast, [npm-shrinkwrap.json](/configuring-npm/npm-shrinkwrap-json) allows
publication, and defines the dependency tree from the point encountered.
This is not recommended unless deploying a CLI tool or otherwise using the
publication process for producing production packages.

If both `package-lock.json` and `npm-shrinkwrap.json` are present in the
root of a project, `npm-shrinkwrap.json` will take precedence and
`package-lock.json` will be ignored.

### Hidden Lockfiles

In order to avoid processing the `node_modules` folder repeatedly, npm as
of v7 uses a "hidden" lockfile present in
`node_modules/.package-lock.json`.  This contains information about the
tree, and is used in lieu of reading the entire `node_modules` hierarchy
provided that the following conditions are met:

- All package folders it references exist in the `node_modules` hierarchy.
- No package folders exist in the `node_modules` hierarchy that are not
  listed in the lockfile.
- The modified time of the file is at least as recent as all of the package
  folders it references.

That is, the hidden lockfile will only be relevant if it was created as
part of the most recent update to the package tree.  If another CLI mutates
the tree in any way, this will be detected, and the hidden lockfile will be
ignored.

Note that it _is_ possible to manually change the _contents_ of a package
in such a way that the modified time of the package folder is unaffected.
For example, if you add a file to `node_modules/foo/lib/bar.js`, then the
modified time on `node_modules/foo` will not reflect this change.  If you
are manually editing files in `node_modules`, it is generally best to
delete the file at `node_modules/.package-lock.json`.

As the hidden lockfile is ignored by older npm versions, it does not
contain the backwards compatibility affordances present in "normal"
lockfiles.  That is, it is `lockfileVersion: 3`, rather than
`lockfileVersion: 2`.

### Handling Old Lockfiles

When npm detects a lockfile from npm v6 or before during the package
installation process, it is automatically updated to fetch missing
information from either the `node_modules` tree or (in the case of empty
`node_modules` trees or very old lockfile formats) the npm registry.

### File Format

#### `name`

The name of the package this is a package-lock for. This will match what's
in `package.json`.

#### `version`

The version of the package this is a package-lock for. This will match
what's in `package.json`.

#### `lockfileVersion`

An integer version, starting at `1` with the version number of this
document whose semantics were used when generating this
`package-lock.json`.

Note that the file format changed significantly in npm v7 to track
information that would have otherwise required looking in `node_modules` or
the npm registry.  Lockfiles generated by npm v7 will contain
`lockfileVersion: 2`.

* No version provided: an "ancient" shrinkwrap file from a version of npm
  prior to npm v5.
* `1`: The lockfile version used by npm v5 and v6.
* `2`: The lockfile version used by npm v7 and v8. Backwards compatible to v1
  lockfiles.
* `3`: The lockfile version used by npm v9. Backwards compatible to npm v7.

npm will always attempt to get whatever data it can out of a lockfile, even
if it is not a version that it was designed to support.

#### `packages`

This is an object that maps package locations to an object containing the
information about that package.

The root project is typically listed with a key of `""`, and all other
packages are listed with their relative paths from the root project folder.

Package descriptors have the following fields:

* version: The version found in `package.json`

* resolved: The place where the package was actually resolved from.  In
  the case of packages fetched from the registry, this will be a url to a
  tarball.  In the case of git dependencies, this will be the full git url
  with commit sha.  In the case of link dependencies, this will be the
  location of the link target. `registry.npmjs.org` is a magic value meaning
  "the currently configured registry".

* integrity: A `sha512` or `sha1` [Standard Subresource
  Integrity](https://w3c.github.io/webappsec/specs/subresourceintegrity/)
  string for the artifact that was unpacked in this location.

* link: A flag to indicate that this is a symbolic link.  If this is
  present, no other fields are specified, since the link target will also
  be included in the lockfile.

* dev, optional, devOptional: If the package is strictly part of the
  `devDependencies` tree, then `dev` will be true.  If it is strictly part
  of the `optionalDependencies` tree, then `optional` will be set.  If it
  is both a `dev` dependency _and_ an `optional` dependency of a non-dev
  dependency, then `devOptional` will be set.  (An `optional` dependency of
  a `dev` dependency will have both `dev` and `optional` set.)

* inBundle: A flag to indicate that the package is a bundled dependency.

* hasInstallScript: A flag to indicate that the package has a `preinstall`,
  `install`, or `postinstall` script.

* hasShrinkwrap: A flag to indicate that the package has an
  `npm-shrinkwrap.json` file.

* bin, license, engines, dependencies, optionalDependencies: fields from
  `package.json`

#### dependencies

Legacy data for supporting versions of npm that use `lockfileVersion: 1`.
This is a mapping of package names to dependency objects.  Because the
object structure is strictly hierarchical, symbolic link dependencies are
somewhat challenging to represent in some cases.

npm v7 ignores this section entirely if a `packages` section is present,
but does keep it up to date in order to support switching between npm v6
and npm v7.

Dependency objects have the following fields:

* version: a specifier that varies depending on the nature of the package,
  and is usable in fetching a new copy of it.

    * bundled dependencies: Regardless of source, this is a version number
      that is purely for informational purposes.
    * registry sources: This is a version number. (eg, `1.2.3`)
    * git sources: This is a git specifier with resolved committish. (eg,
      `git+https://example.com/foo/bar#115311855adb0789a0466714ed48a1499ffea97e`)
    * http tarball sources: This is the URL of the tarball. (eg,
      `https://example.com/example-1.3.0.tgz`)
    * local tarball sources: This is the file URL of the tarball. (eg
      `file:///opt/storage/example-1.3.0.tgz`)
    * local link sources: This is the file URL of the link. (eg
      `file:libs/our-module`)

* integrity: A `sha512` or `sha1` [Standard Subresource
  Integrity](https://w3c.github.io/webappsec/specs/subresourceintegrity/)
  string for the artifact that was unpacked in this location.  For git
  dependencies, this is the commit sha.

* resolved: For registry sources this is path of the tarball relative to
  the registry URL.  If the tarball URL isn't on the same server as the
  registry URL then this is a complete URL. `registry.npmjs.org` is a magic
  value meaning "the currently configured registry".

* bundled:  If true, this is the bundled dependency and will be installed
  by the parent module.  When installing, this module will be extracted
  from the parent module during the extract phase, not installed as a
  separate dependency.

* dev: If true then this dependency is either a development dependency ONLY
  of the top level module or a transitive dependency of one.  This is false
  for dependencies that are both a development dependency of the top level
  and a transitive dependency of a non-development dependency of the top
  level.

* optional: If true then this dependency is either an optional dependency
  ONLY of the top level module or a transitive dependency of one.  This is
  false for dependencies that are both an optional dependency of the top
  level and a transitive dependency of a non-optional dependency of the top
  level.

* requires: This is a mapping of module name to version.  This is a list of
  everything this module requires, regardless of where it will be
  installed.  The version should match via normal matching rules a
  dependency either in our `dependencies` or in a level higher than us.

* dependencies: The dependencies of this dependency, exactly as at the top
  level.

### See also

* [npm shrinkwrap](/commands/npm-shrinkwrap)
* [npm-shrinkwrap.json](/configuring-npm/npm-shrinkwrap-json)
* [package.json](/configuring-npm/package-json)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/config.md
====================================================

---
title: config
section: 7
description: More than you probably want to know about npm configuration
---

### Description

npm gets its configuration values from the following sources, sorted by priority:

#### Command Line Flags

Putting `--foo bar` on the command line sets the `foo` configuration
parameter to `"bar"`.  A `--` argument tells the cli parser to stop
reading flags.  Using `--flag` without specifying any value will set
the value to `true`.

Example: `--flag1 --flag2` will set both configuration parameters
to `true`, while `--flag1 --flag2 bar` will set `flag1` to `true`,
and `flag2` to `bar`.  Finally, `--flag1 --flag2 -- bar` will set
both configuration parameters to `true`, and the `bar` is taken
as a command argument.

#### Environment Variables

Any environment variables that start with `npm_config_` will be
interpreted as a configuration parameter.  For example, putting
`npm_config_foo=bar` in your environment will set the `foo`
configuration parameter to `bar`.  Any environment configurations that
are not given a value will be given the value of `true`.  Config
values are case-insensitive, so `NPM_CONFIG_FOO=bar` will work the
same. However, please note that inside [`scripts`](/using-npm/scripts)
npm will set its own environment variables and Node will prefer
those lowercase versions over any uppercase ones that you might set.
For details see [this issue](https://github.com/npm/npm/issues/14528).

Notice that you need to use underscores instead of dashes, so `--allow-same-version`
would become `npm_config_allow_same_version=true`.

#### npmrc Files

The four relevant files are:

* per-project configuration file (`/path/to/my/project/.npmrc`)
* per-user configuration file (defaults to `$HOME/.npmrc`; configurable via CLI
  option `--userconfig` or environment variable `$NPM_CONFIG_USERCONFIG`)
* global configuration file (defaults to `$PREFIX/etc/npmrc`; configurable via
  CLI option `--globalconfig` or environment variable `$NPM_CONFIG_GLOBALCONFIG`)
* npm's built-in configuration file (`/path/to/npm/npmrc`)

See [npmrc](/configuring-npm/npmrc) for more details.

#### Default Configs

Run `npm config ls -l` to see a set of configuration parameters that are
internal to npm, and are defaults if nothing else is specified.

### Shorthands and Other CLI Niceties

The following shorthands are parsed on the command-line:

* `-a`: `--all`
* `--enjoy-by`: `--before`
* `-c`: `--call`
* `--desc`: `--description`
* `-f`: `--force`
* `-g`: `--global`
* `--iwr`: `--include-workspace-root`
* `-L`: `--location`
* `-d`: `--loglevel info`
* `-s`: `--loglevel silent`
* `--silent`: `--loglevel silent`
* `--ddd`: `--loglevel silly`
* `--dd`: `--loglevel verbose`
* `--verbose`: `--loglevel verbose`
* `-q`: `--loglevel warn`
* `--quiet`: `--loglevel warn`
* `-l`: `--long`
* `-m`: `--message`
* `--local`: `--no-global`
* `-n`: `--no-yes`
* `--no`: `--no-yes`
* `-p`: `--parseable`
* `--porcelain`: `--parseable`
* `-C`: `--prefix`
* `--readonly`: `--read-only`
* `--reg`: `--registry`
* `-S`: `--save`
* `-B`: `--save-bundle`
* `-D`: `--save-dev`
* `-E`: `--save-exact`
* `-O`: `--save-optional`
* `-P`: `--save-prod`
* `-?`: `--usage`
* `-h`: `--usage`
* `-H`: `--usage`
* `--help`: `--usage`
* `-v`: `--version`
* `-w`: `--workspace`
* `--ws`: `--workspaces`
* `-y`: `--yes`

If the specified configuration param resolves unambiguously to a known
configuration parameter, then it is expanded to that configuration
parameter.  For example:

```bash
npm ls --par
# same as:
npm ls --parseable
```

If multiple single-character shorthands are strung together, and the
resulting combination is unambiguously not some other configuration
param, then it is expanded to its various component pieces.  For
example:

```bash
npm ls -gpld
# same as:
npm ls --global --parseable --long --loglevel info
```

### Config Settings

#### `_auth`

* Default: null
* Type: null or String

A basic-auth string to use when authenticating against the npm registry.
This will ONLY be used to authenticate against the npm registry. For other
registries you will need to scope it like "//other-registry.tld/:_auth"

Warning: This should generally not be set via a command-line option. It is
safer to use a registry-provided authentication bearer token stored in the
~/.npmrc file by running `npm login`.



#### `access`

* Default: 'public' for new packages, existing packages it will not change the
  current level
* Type: null, "restricted", or "public"

If you do not want your scoped package to be publicly viewable (and
installable) set `--access=restricted`.

Unscoped packages can not be set to `restricted`.

Note: This defaults to not changing the current access level for existing
packages. Specifying a value of `restricted` or `public` during publish will
change the access for an existing package the same way that `npm access set
status` would.



#### `all`

* Default: false
* Type: Boolean

When running `npm outdated` and `npm ls`, setting `--all` will show all
outdated or installed packages, rather than only those directly depended
upon by the current project.



#### `allow-same-version`

* Default: false
* Type: Boolean

Prevents throwing an error when `npm version` is used to set the new version
to the same value as the current version.



#### `audit`

* Default: true
* Type: Boolean

When "true" submit audit reports alongside the current npm command to the
default registry and all registries configured for scopes. See the
documentation for [`npm audit`](/commands/npm-audit) for details on what is
submitted.



#### `audit-level`

* Default: null
* Type: null, "info", "low", "moderate", "high", "critical", or "none"

The minimum level of vulnerability for `npm audit` to exit with a non-zero
exit code.



#### `auth-type`

* Default: "web"
* Type: "legacy" or "web"

What authentication strategy to use with `login`. Note that if an `otp`
config is given, this value will always be set to `legacy`.



#### `before`

* Default: null
* Type: null or Date

If passed to `npm install`, will rebuild the npm tree such that only
versions that were available **on or before** the `--before` time get
installed. If there's no versions available for the current set of direct
dependencies, the command will error.

If the requested version is a `dist-tag` and the given tag does not pass the
`--before` filter, the most recent version less than or equal to that tag
will be used. For example, `foo@latest` might install `foo@1.2` even though
`latest` is `2.0`.



#### `bin-links`

* Default: true
* Type: Boolean

Tells npm to create symlinks (or `.cmd` shims on Windows) for package
executables.

Set to false to have it not do this. This can be used to work around the
fact that some file systems don't support symlinks, even on ostensibly Unix
systems.



#### `browser`

* Default: OS X: `"open"`, Windows: `"start"`, Others: `"xdg-open"`
* Type: null, Boolean, or String

The browser that is called by npm commands to open websites.

Set to `false` to suppress browser behavior and instead print urls to
terminal.

Set to `true` to use default system URL opener.



#### `ca`

* Default: null
* Type: null or String (can be set multiple times)

The Certificate Authority signing certificate that is trusted for SSL
connections to the registry. Values should be in PEM format (Windows calls
it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string
"\n". For example:

```ini
ca="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

Set to `null` to only allow "known" registrars, or to a specific CA cert to
trust only that specific signing authority.

Multiple CAs can be trusted by specifying an array of certificates:

```ini
ca[]="..."
ca[]="..."
```

See also the `strict-ssl` config.



#### `cache`

* Default: Windows: `%LocalAppData%\npm-cache`, Posix: `~/.npm`
* Type: Path

The location of npm's cache directory.



#### `cafile`

* Default: null
* Type: Path

A path to a file containing one or multiple Certificate Authority signing
certificates. Similar to the `ca` setting, but allows for multiple CA's, as
well as for the CA information to be stored in a file on disk.



#### `call`

* Default: ""
* Type: String

Optional companion option for `npm exec`, `npx` that allows for specifying a
custom command to be run along with the installed packages.

```bash
npm exec --package yo --package generator-node --call "yo node"
```



#### `cidr`

* Default: null
* Type: null or String (can be set multiple times)

This is a list of CIDR address to be used when configuring limited access
tokens with the `npm token create` command.



#### `color`

* Default: true unless the NO_COLOR environ is set to something other than '0'
* Type: "always" or Boolean

If false, never shows colors. If `"always"` then always shows colors. If
true, then only prints color codes for tty file descriptors.



#### `commit-hooks`

* Default: true
* Type: Boolean

Run git commit hooks when using the `npm version` command.



#### `cpu`

* Default: null
* Type: null or String

Override CPU architecture of native modules to install. Acceptable values
are same as `cpu` field of package.json, which comes from `process.arch`.



#### `depth`

* Default: `Infinity` if `--all` is set, otherwise `1`
* Type: null or Number

The depth to go when recursing packages for `npm ls`.

If not set, `npm ls` will show only the immediate dependencies of the root
project. If `--all` is set, then npm will show all dependencies by default.



#### `description`

* Default: true
* Type: Boolean

Show the description in `npm search`



#### `diff`

* Default:
* Type: String (can be set multiple times)

Define arguments to compare in `npm diff`.



#### `diff-dst-prefix`

* Default: "b/"
* Type: String

Destination prefix to be used in `npm diff` output.



#### `diff-ignore-all-space`

* Default: false
* Type: Boolean

Ignore whitespace when comparing lines in `npm diff`.



#### `diff-name-only`

* Default: false
* Type: Boolean

Prints only filenames when using `npm diff`.



#### `diff-no-prefix`

* Default: false
* Type: Boolean

Do not show any source or destination prefix in `npm diff` output.

Note: this causes `npm diff` to ignore the `--diff-src-prefix` and
`--diff-dst-prefix` configs.



#### `diff-src-prefix`

* Default: "a/"
* Type: String

Source prefix to be used in `npm diff` output.



#### `diff-text`

* Default: false
* Type: Boolean

Treat all files as text in `npm diff`.



#### `diff-unified`

* Default: 3
* Type: Number

The number of lines of context to print in `npm diff`.



#### `dry-run`

* Default: false
* Type: Boolean

Indicates that you don't want npm to make any changes and that it should
only report what it would have done. This can be passed into any of the
commands that modify your local installation, eg, `install`, `update`,
`dedupe`, `uninstall`, as well as `pack` and `publish`.

Note: This is NOT honored by other network related commands, eg `dist-tags`,
`owner`, etc.



#### `editor`

* Default: The EDITOR or VISUAL environment variables, or
  '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
* Type: String

The command to run for `npm edit` and `npm config edit`.



#### `engine-strict`

* Default: false
* Type: Boolean

If set to true, then npm will stubbornly refuse to install (or even consider
installing) any package that claims to not be compatible with the current
Node.js version.

This can be overridden by setting the `--force` flag.



#### `fetch-retries`

* Default: 2
* Type: Number

The "retries" config for the `retry` module to use when fetching packages
from the registry.

npm will retry idempotent read requests to the registry in the case of
network failures or 5xx HTTP errors.



#### `fetch-retry-factor`

* Default: 10
* Type: Number

The "factor" config for the `retry` module to use when fetching packages.



#### `fetch-retry-maxtimeout`

* Default: 60000 (1 minute)
* Type: Number

The "maxTimeout" config for the `retry` module to use when fetching
packages.



#### `fetch-retry-mintimeout`

* Default: 10000 (10 seconds)
* Type: Number

The "minTimeout" config for the `retry` module to use when fetching
packages.



#### `fetch-timeout`

* Default: 300000 (5 minutes)
* Type: Number

The maximum amount of time to wait for HTTP requests to complete.



#### `force`

* Default: false
* Type: Boolean

Removes various protections against unfortunate side effects, common
mistakes, unnecessary performance degradation, and malicious input.

* Allow clobbering non-npm files in global installs.
* Allow the `npm version` command to work on an unclean git repository.
* Allow deleting the cache folder with `npm cache clean`.
* Allow installing packages that have an `engines` declaration requiring a
  different version of npm.
* Allow installing packages that have an `engines` declaration requiring a
  different version of `node`, even if `--engine-strict` is enabled.
* Allow `npm audit fix` to install modules outside your stated dependency
  range (including SemVer-major changes).
* Allow unpublishing all versions of a published package.
* Allow conflicting peerDependencies to be installed in the root project.
* Implicitly set `--yes` during `npm init`.
* Allow clobbering existing values in `npm pkg`
* Allow unpublishing of entire packages (not just a single version).

If you don't have a clear idea of what you want to do, it is strongly
recommended that you do not use this option!



#### `foreground-scripts`

* Default: false
* Type: Boolean

Run all build scripts (ie, `preinstall`, `install`, and `postinstall`)
scripts for installed packages in the foreground process, sharing standard
input, output, and error with the main npm process.

Note that this will generally make installs run slower, and be much noisier,
but can be useful for debugging.



#### `format-package-lock`

* Default: true
* Type: Boolean

Format `package-lock.json` or `npm-shrinkwrap.json` as a human readable
file.



#### `fund`

* Default: true
* Type: Boolean

When "true" displays the message at the end of each `npm install`
acknowledging the number of dependencies looking for funding. See [`npm
fund`](/commands/npm-fund) for details.



#### `git`

* Default: "git"
* Type: String

The command to use for git commands. If git is installed on the computer,
but is not in the `PATH`, then set this to the full path to the git binary.



#### `git-tag-version`

* Default: true
* Type: Boolean

Tag the commit when using the `npm version` command. Setting this to false
results in no commit being made at all.



#### `global`

* Default: false
* Type: Boolean

Operates in "global" mode, so that packages are installed into the `prefix`
folder instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `globalconfig`

* Default: The global --prefix setting plus 'etc/npmrc'. For example,
  '/usr/local/etc/npmrc'
* Type: Path

The config file to read for global config options.



#### `heading`

* Default: "npm"
* Type: String

The string that starts all the debugging log output.



#### `https-proxy`

* Default: null
* Type: null or URL

A proxy to use for outgoing https requests. If the `HTTPS_PROXY` or
`https_proxy` or `HTTP_PROXY` or `http_proxy` environment variables are set,
proxy settings will be honored by the underlying `make-fetch-happen`
library.



#### `if-present`

* Default: false
* Type: Boolean

If true, npm will not exit with an error code when `run-script` is invoked
for a script that isn't defined in the `scripts` section of `package.json`.
This option can be used when it's desirable to optionally run a script when
it's present and fail if the script fails. This is useful, for example, when
running scripts that may only apply for some builds in an otherwise generic
CI setup.

This value is not exported to the environment for child processes.

#### `ignore-scripts`

* Default: false
* Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as
`npm start`, `npm stop`, `npm restart`, `npm test`, and `npm run-script`
will still run their intended script if `ignore-scripts` is set, but they
will *not* run any pre- or post-scripts.



#### `include`

* Default:
* Type: "prod", "dev", "optional", or "peer" (can be set multiple times)

Option that allows for defining which types of dependencies to install.

This is the inverse of `--omit=<type>`.

Dependency types specified in `--include` will not be omitted, regardless of
the order in which omit/include are specified on the command-line.



#### `include-staged`

* Default: false
* Type: Boolean

Allow installing "staged" published packages, as defined by [npm RFC PR
#92](https://github.com/npm/rfcs/pull/92).

This is experimental, and not implemented by the npm public registry.



#### `include-workspace-root`

* Default: false
* Type: Boolean

Include the workspace root when workspaces are enabled for a command.

When false, specifying individual workspaces via the `workspace` config, or
all workspaces via the `workspaces` flag, will cause npm to operate only on
the specified workspaces, and not on the root project.

This value is not exported to the environment for child processes.

#### `init-author-email`

* Default: ""
* Type: String

The value `npm init` should use by default for the package author's email.



#### `init-author-name`

* Default: ""
* Type: String

The value `npm init` should use by default for the package author's name.



#### `init-author-url`

* Default: ""
* Type: "" or URL

The value `npm init` should use by default for the package author's
homepage.



#### `init-license`

* Default: "ISC"
* Type: String

The value `npm init` should use by default for the package license.



#### `init-module`

* Default: "~/.npm-init.js"
* Type: Path

A module that will be loaded by the `npm init` command. See the
documentation for the
[init-package-json](https://github.com/npm/init-package-json) module for
more information, or [npm init](/commands/npm-init).



#### `init-version`

* Default: "1.0.0"
* Type: SemVer string

The value that `npm init` should use by default for the package version
number, if not already set in package.json.



#### `install-links`

* Default: false
* Type: Boolean

When set file: protocol dependencies will be packed and installed as regular
dependencies instead of creating a symlink. This option has no effect on
workspaces.



#### `install-strategy`

* Default: "hoisted"
* Type: "hoisted", "nested", "shallow", or "linked"

Sets the strategy for installing packages in node_modules. hoisted
(default): Install non-duplicated in top-level, and duplicated as necessary
within directory structure. nested: (formerly --legacy-bundling) install in
place, no hoisting. shallow (formerly --global-style) only install direct
deps at top-level. linked: (experimental) install in node_modules/.store,
link in place, unhoisted.



#### `json`

* Default: false
* Type: Boolean

Whether or not to output JSON data, rather than the normal output.

* In `npm pkg set` it enables parsing set values with JSON.parse() before
  saving them to your `package.json`.

Not supported by all npm commands.



#### `legacy-peer-deps`

* Default: false
* Type: Boolean

Causes npm to completely ignore `peerDependencies` when building a package
tree, as in npm versions 3 through 6.

If a package cannot be installed because of overly strict `peerDependencies`
that collide, it provides a way to move forward resolving the situation.

This differs from `--omit=peer`, in that `--omit=peer` will avoid unpacking
`peerDependencies` on disk, but will still design a tree such that
`peerDependencies` _could_ be unpacked in a correct place.

Use of `legacy-peer-deps` is not recommended, as it will not enforce the
`peerDependencies` contract that meta-dependencies may rely on.



#### `link`

* Default: false
* Type: Boolean

Used with `npm ls`, limiting output to only those packages that are linked.



#### `local-address`

* Default: null
* Type: IP Address

The IP address of the local interface to use when making connections to the
npm registry. Must be IPv4 in versions of Node prior to 0.12.



#### `location`

* Default: "user" unless `--global` is passed, which will also set this value
  to "global"
* Type: "global", "user", or "project"

When passed to `npm config` this refers to which config file to use.

When set to "global" mode, packages are installed into the `prefix` folder
instead of the current working directory. See
[folders](/configuring-npm/folders) for more on the differences in behavior.

* packages are installed into the `{prefix}/lib/node_modules` folder, instead
  of the current working directory.
* bin files are linked to `{prefix}/bin`
* man pages are linked to `{prefix}/share/man`



#### `lockfile-version`

* Default: Version 3 if no lockfile, auto-converting v1 lockfiles to v3,
  otherwise maintain current lockfile version.
* Type: null, 1, 2, 3, "1", "2", or "3"

Set the lockfile format version to be used in package-lock.json and
npm-shrinkwrap-json files. Possible options are:

1: The lockfile version used by npm versions 5 and 6. Lacks some data that
is used during the install, resulting in slower and possibly less
deterministic installs. Prevents lockfile churn when interoperating with
older npm versions.

2: The default lockfile version used by npm version 7 and 8. Includes both
the version 1 lockfile data and version 3 lockfile data, for maximum
determinism and interoperability, at the expense of more bytes on disk.

3: Only the new lockfile information introduced in npm version 7. Smaller on
disk than lockfile version 2, but not interoperable with older npm versions.
Ideal if all users are on npm version 7 and higher.



#### `loglevel`

* Default: "notice"
* Type: "silent", "error", "warn", "notice", "http", "info", "verbose", or
  "silly"

What level of logs to report. All logs are written to a debug log, with the
path to that file printed if the execution of a command fails.

Any logs of a higher level than the setting are shown. The default is
"notice".

See also the `foreground-scripts` config.



#### `logs-dir`

* Default: A directory named `_logs` inside the cache
* Type: null or Path

The location of npm's log directory. See [`npm logging`](/using-npm/logging)
for more information.



#### `logs-max`

* Default: 10
* Type: Number

The maximum number of log files to store.

If set to 0, no log files will be written for the current run.



#### `long`

* Default: false
* Type: Boolean

Show extended information in `ls`, `search`, and `help-search`.



#### `maxsockets`

* Default: 15
* Type: Number

The maximum number of connections to use per origin (protocol/host/port
combination).



#### `message`

* Default: "%s"
* Type: String

Commit message which is used by `npm version` when creating version commit.

Any "%s" in the message will be replaced with the version number.



#### `node-options`

* Default: null
* Type: null or String

Options to pass through to Node.js via the `NODE_OPTIONS` environment
variable. This does not impact how npm itself is executed but it does impact
how lifecycle scripts are called.



#### `noproxy`

* Default: The value of the NO_PROXY environment variable
* Type: String (can be set multiple times)

Domain extensions that should bypass any proxies.

Also accepts a comma-delimited string.



#### `offline`

* Default: false
* Type: Boolean

Force offline mode: no network requests will be done during install. To
allow the CLI to fill in missing cache data, see `--prefer-offline`.



#### `omit`

* Default: 'dev' if the `NODE_ENV` environment variable is set to
  'production', otherwise empty.
* Type: "dev", "optional", or "peer" (can be set multiple times)

Dependency types to omit from the installation tree on disk.

Note that these dependencies _are_ still resolved and added to the
`package-lock.json` or `npm-shrinkwrap.json` file. They are just not
physically installed on disk.

If a package type appears in both the `--include` and `--omit` lists, then
it will be included.

If the resulting omit list includes `'dev'`, then the `NODE_ENV` environment
variable will be set to `'production'` for all lifecycle scripts.



#### `omit-lockfile-registry-resolved`

* Default: false
* Type: Boolean

This option causes npm to create lock files without a `resolved` key for
registry dependencies. Subsequent installs will need to resolve tarball
endpoints with the configured registry, likely resulting in a longer install
time.



#### `os`

* Default: null
* Type: null or String

Override OS of native modules to install. Acceptable values are same as `os`
field of package.json, which comes from `process.platform`.



#### `otp`

* Default: null
* Type: null or String

This is a one-time password from a two-factor authenticator. It's needed
when publishing or changing package permissions with `npm access`.

If not set, and a registry response fails with a challenge for a one-time
password, npm will prompt on the command line for one.



#### `pack-destination`

* Default: "."
* Type: String

Directory in which `npm pack` will save tarballs.



#### `package`

* Default:
* Type: String (can be set multiple times)

The package or packages to install for [`npm exec`](/commands/npm-exec)



#### `package-lock`

* Default: true
* Type: Boolean

If set to false, then ignore `package-lock.json` files when installing. This
will also prevent _writing_ `package-lock.json` if `save` is true.



#### `package-lock-only`

* Default: false
* Type: Boolean

If set to true, the current operation will only use the `package-lock.json`,
ignoring `node_modules`.

For `update` this means only the `package-lock.json` will be updated,
instead of checking `node_modules` and downloading dependencies.

For `list` this means the output will be based on the tree described by the
`package-lock.json`, rather than the contents of `node_modules`.



#### `parseable`

* Default: false
* Type: Boolean

Output parseable results from commands that write to standard output. For
`npm search`, this will be tab-separated table format.



#### `prefer-dedupe`

* Default: false
* Type: Boolean

Prefer to deduplicate packages if possible, rather than choosing a newer
version of a dependency.



#### `prefer-offline`

* Default: false
* Type: Boolean

If true, staleness checks for cached data will be bypassed, but missing data
will be requested from the server. To force full offline mode, use
`--offline`.



#### `prefer-online`

* Default: false
* Type: Boolean

If true, staleness checks for cached data will be forced, making the CLI
look for updates immediately even for fresh package data.



#### `prefix`

* Default: In global mode, the folder where the node executable is installed.
  Otherwise, the nearest parent folder containing either a package.json file
  or a node_modules folder.
* Type: Path

The location to install global items. If set on the command line, then it
forces non-global commands to run in the specified folder.



#### `preid`

* Default: ""
* Type: String

The "prerelease identifier" to use as a prefix for the "prerelease" part of
a semver. Like the `rc` in `1.2.0-rc.8`.



#### `progress`

* Default: `true` unless running in a known CI system
* Type: Boolean

When set to `true`, npm will display a progress bar during time intensive
operations, if `process.stderr` is a TTY.

Set to `false` to suppress the progress bar.



#### `provenance`

* Default: false
* Type: Boolean

When publishing from a supported cloud CI/CD system, the package will be
publicly linked to where it was built and published from.

This config can not be used with: `provenance-file`

#### `provenance-file`

* Default: null
* Type: Path

When publishing, the provenance bundle at the given path will be used.

This config can not be used with: `provenance`

#### `proxy`

* Default: null
* Type: null, false, or URL

A proxy to use for outgoing http requests. If the `HTTP_PROXY` or
`http_proxy` environment variables are set, proxy settings will be honored
by the underlying `request` library.



#### `read-only`

* Default: false
* Type: Boolean

This is used to mark a token as unable to publish when configuring limited
access tokens with the `npm token create` command.



#### `rebuild-bundle`

* Default: true
* Type: Boolean

Rebuild bundled dependencies after installation.



#### `registry`

* Default: "https://registry.npmjs.org/"
* Type: URL

The base URL of the npm registry.



#### `replace-registry-host`

* Default: "npmjs"
* Type: "npmjs", "never", "always", or String

Defines behavior for replacing the registry host in a lockfile with the
configured registry.

The default behavior is to replace package dist URLs from the default
registry (https://registry.npmjs.org) to the configured registry. If set to
"never", then use the registry value. If set to "always", then replace the
registry host with the configured host every time.

You may also specify a bare hostname (e.g., "registry.npmjs.org").



#### `save`

* Default: `true` unless when using `npm update` where it defaults to `false`
* Type: Boolean

Save installed packages to a `package.json` file as dependencies.

When used with the `npm rm` command, removes the dependency from
`package.json`.

Will also prevent writing to `package-lock.json` if set to `false`.



#### `save-bundle`

* Default: false
* Type: Boolean

If a package would be saved at install time by the use of `--save`,
`--save-dev`, or `--save-optional`, then also put it in the
`bundleDependencies` list.

Ignored if `--save-peer` is set, since peerDependencies cannot be bundled.



#### `save-dev`

* Default: false
* Type: Boolean

Save installed packages to a package.json file as `devDependencies`.



#### `save-exact`

* Default: false
* Type: Boolean

Dependencies saved to package.json will be configured with an exact version
rather than using npm's default semver range operator.



#### `save-optional`

* Default: false
* Type: Boolean

Save installed packages to a package.json file as `optionalDependencies`.



#### `save-peer`

* Default: false
* Type: Boolean

Save installed packages to a package.json file as `peerDependencies`



#### `save-prefix`

* Default: "^"
* Type: String

Configure how versions of packages installed to a package.json file via
`--save` or `--save-dev` get prefixed.

For example if a package has version `1.2.3`, by default its version is set
to `^1.2.3` which allows minor upgrades for that package, but after `npm
config set save-prefix='~'` it would be set to `~1.2.3` which only allows
patch upgrades.



#### `save-prod`

* Default: false
* Type: Boolean

Save installed packages into `dependencies` specifically. This is useful if
a package already exists in `devDependencies` or `optionalDependencies`, but
you want to move it to be a non-optional production dependency.

This is the default behavior if `--save` is true, and neither `--save-dev`
or `--save-optional` are true.



#### `sbom-format`

* Default: null
* Type: "cyclonedx" or "spdx"

SBOM format to use when generating SBOMs.



#### `sbom-type`

* Default: "library"
* Type: "library", "application", or "framework"

The type of package described by the generated SBOM. For SPDX, this is the
value for the `primaryPackagePurpose` fieled. For CycloneDX, this is the
value for the `type` field.



#### `scope`

* Default: the scope of the current project, if any, or ""
* Type: String

Associate an operation with a scope for a scoped registry.

Useful when logging in to or out of a private registry:

```
# log in, linking the scope to the custom registry
npm login --scope=@mycorp --registry=https://registry.mycorp.com

# log out, removing the link and the auth token
npm logout --scope=@mycorp
```

This will cause `@mycorp` to be mapped to the registry for future
installation of packages specified according to the pattern
`@mycorp/package`.

This will also cause `npm init` to create a scoped package.

```
# accept all defaults, and create a package named "@foo/whatever",
# instead of just named "whatever"
npm init --scope=@foo --yes
```



#### `script-shell`

* Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
* Type: null or String

The shell to use for scripts run with the `npm exec`, `npm run` and `npm
init <package-spec>` commands.



#### `searchexclude`

* Default: ""
* Type: String

Space-separated options that limit the results from search.



#### `searchlimit`

* Default: 20
* Type: Number

Number of items to limit search results to. Will not apply at all to legacy
searches.



#### `searchopts`

* Default: ""
* Type: String

Space-separated options that are always passed to search.



#### `searchstaleness`

* Default: 900
* Type: Number

The age of the cache, in seconds, before another registry request is made if
using legacy search endpoint.



#### `shell`

* Default: SHELL environment variable, or "bash" on Posix, or "cmd.exe" on
  Windows
* Type: String

The shell to run for the `npm explore` command.



#### `sign-git-commit`

* Default: false
* Type: Boolean

If set to true, then the `npm version` command will commit the new package
version using `-S` to add a signature.

Note that git requires you to have set up GPG keys in your git configs for
this to work properly.



#### `sign-git-tag`

* Default: false
* Type: Boolean

If set to true, then the `npm version` command will tag the version using
`-s` to add a signature.

Note that git requires you to have set up GPG keys in your git configs for
this to work properly.



#### `strict-peer-deps`

* Default: false
* Type: Boolean

If set to `true`, and `--legacy-peer-deps` is not set, then _any_
conflicting `peerDependencies` will be treated as an install failure, even
if npm could reasonably guess the appropriate resolution based on non-peer
dependency relationships.

By default, conflicting `peerDependencies` deep in the dependency graph will
be resolved using the nearest non-peer dependency specification, even if
doing so will result in some packages receiving a peer dependency outside
the range set in their package's `peerDependencies` object.

When such an override is performed, a warning is printed, explaining the
conflict and the packages involved. If `--strict-peer-deps` is set, then
this warning is treated as a failure.



#### `strict-ssl`

* Default: true
* Type: Boolean

Whether or not to do SSL key validation when making requests to the registry
via https.

See also the `ca` config.



#### `tag`

* Default: "latest"
* Type: String

If you ask npm to install a package and don't tell it a specific version,
then it will install the specified tag.

Also the tag that is added to the package@version specified by the `npm tag`
command, if no explicit tag is given.

When used by the `npm diff` command, this is the tag used to fetch the
tarball that will be compared with the local files by default.



#### `tag-version-prefix`

* Default: "v"
* Type: String

If set, alters the prefix used when tagging a new version when performing a
version increment using `npm version`. To remove the prefix altogether, set
it to the empty string: `""`.

Because other tools may rely on the convention that npm version tags look
like `v1.0.0`, _only use this property if it is absolutely necessary_. In
particular, use care when overriding this setting for public packages.



#### `timing`

* Default: false
* Type: Boolean

If true, writes timing information to a process specific json file in the
cache or `logs-dir`. The file name ends with `-timing.json`.

You can quickly view it with this [json](https://npm.im/json) command line:
`cat ~/.npm/_logs/*-timing.json | npm exec -- json -g`.

Timing information will also be reported in the terminal. To suppress this
while still writing the timing file, use `--silent`.



#### `umask`

* Default: 0
* Type: Octal numeric string in range 0000..0777 (0..511)

The "umask" value to use when setting the file creation mode on files and
folders.

Folders and executables are given a mode which is `0o777` masked against
this value. Other files are given a mode which is `0o666` masked against
this value.

Note that the underlying system will _also_ apply its own umask value to
files and folders that are created, and npm does not circumvent this, but
rather adds the `--umask` config to it.

Thus, the effective default umask value on most POSIX systems is 0o22,
meaning that folders and executables are created with a mode of 0o755 and
other files are created with a mode of 0o644.



#### `unicode`

* Default: false on windows, true on mac/unix systems with a unicode locale,
  as defined by the `LC_ALL`, `LC_CTYPE`, or `LANG` environment variables.
* Type: Boolean

When set to true, npm uses unicode characters in the tree output. When
false, it uses ascii characters instead of unicode glyphs.



#### `update-notifier`

* Default: true
* Type: Boolean

Set to false to suppress the update notification when using an older version
of npm than the latest.



#### `usage`

* Default: false
* Type: Boolean

Show short usage output about the command specified.



#### `user-agent`

* Default: "npm/{npm-version} node/{node-version} {platform} {arch}
  workspaces/{workspaces} {ci}"
* Type: String

Sets the User-Agent request header. The following fields are replaced with
their actual counterparts:

* `{npm-version}` - The npm version in use
* `{node-version}` - The Node.js version in use
* `{platform}` - The value of `process.platform`
* `{arch}` - The value of `process.arch`
* `{workspaces}` - Set to `true` if the `workspaces` or `workspace` options
  are set.
* `{ci}` - The value of the `ci-name` config, if set, prefixed with `ci/`, or
  an empty string if `ci-name` is empty.



#### `userconfig`

* Default: "~/.npmrc"
* Type: Path

The location of user-level configuration settings.

This may be overridden by the `npm_config_userconfig` environment variable
or the `--userconfig` command line option, but may _not_ be overridden by
settings in the `globalconfig` file.



#### `version`

* Default: false
* Type: Boolean

If true, output the npm version and exit successfully.

Only relevant when specified explicitly on the command line.



#### `versions`

* Default: false
* Type: Boolean

If true, output the npm version as well as node's `process.versions` map and
the version in the current working directory's `package.json` file if one
exists, and exit successfully.

Only relevant when specified explicitly on the command line.



#### `viewer`

* Default: "man" on Posix, "browser" on Windows
* Type: String

The program to use to view help content.

Set to `"browser"` to view html help content in the default web browser.



#### `which`

* Default: null
* Type: null or Number

If there are multiple funding sources, which 1-indexed source URL to open.



#### `workspace`

* Default:
* Type: String (can be set multiple times)

Enable running a command in the context of the configured workspaces of the
current project while filtering by running only the workspaces defined by
this configuration option.

Valid values for the `workspace` config are either:

* Workspace names
* Path to a workspace directory
* Path to a parent workspace directory (will result in selecting all
  workspaces within that folder)

When set for the `npm init` command, this may be set to the folder of a
workspace which does not yet exist, to create the folder and set it up as a
brand new workspace within the project.

This value is not exported to the environment for child processes.

#### `workspaces`

* Default: null
* Type: null or Boolean

Set to true to run the command in the context of **all** configured
workspaces.

Explicitly setting this to false will cause commands like `install` to
ignore workspaces altogether. When not set explicitly:

- Commands that operate on the `node_modules` tree (install, update, etc.)
will link workspaces into the `node_modules` folder. - Commands that do
other things (test, exec, publish, etc.) will operate on the root project,
_unless_ one or more workspaces are specified in the `workspace` config.

This value is not exported to the environment for child processes.

#### `workspaces-update`

* Default: true
* Type: Boolean

If set to true, the npm cli will run an update after operations that may
possibly change the workspaces installed to the `node_modules` folder.



#### `yes`

* Default: null
* Type: null or Boolean

Automatically answer "yes" to any prompts that npm might print on the
command line.



#### `also`

* Default: null
* Type: null, "dev", or "development"
* DEPRECATED: Please use --include=dev instead.

When set to `dev` or `development`, this is an alias for `--include=dev`.



#### `cache-max`

* Default: Infinity
* Type: Number
* DEPRECATED: This option has been deprecated in favor of `--prefer-online`

`--cache-max=0` is an alias for `--prefer-online`



#### `cache-min`

* Default: 0
* Type: Number
* DEPRECATED: This option has been deprecated in favor of `--prefer-offline`.

`--cache-min=9999 (or bigger)` is an alias for `--prefer-offline`.



#### `cert`

* Default: null
* Type: null or String
* DEPRECATED: `key` and `cert` are no longer used for most registry
  operations. Use registry scoped `keyfile` and `certfile` instead. Example:
  //other-registry.tld/:keyfile=/path/to/key.pem
  //other-registry.tld/:certfile=/path/to/cert.crt

A client certificate to pass when accessing the registry. Values should be
in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)") with
newlines replaced by the string "\n". For example:

```ini
cert="-----BEGIN CERTIFICATE-----\nXXXX\nXXXX\n-----END CERTIFICATE-----"
```

It is _not_ the path to a certificate file, though you can set a
registry-scoped "certfile" path like
"//other-registry.tld/:certfile=/path/to/cert.pem".



#### `dev`

* Default: false
* Type: Boolean
* DEPRECATED: Please use --include=dev instead.

Alias for `--include=dev`.



#### `global-style`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=shallow`

Only install direct dependencies in the top level `node_modules`, but hoist
on deeper dependencies. Sets `--install-strategy=shallow`.



#### `init.author.email`

* Default: ""
* Type: String
* DEPRECATED: Use `--init-author-email` instead.

Alias for `--init-author-email`



#### `init.author.name`

* Default: ""
* Type: String
* DEPRECATED: Use `--init-author-name` instead.

Alias for `--init-author-name`



#### `init.author.url`

* Default: ""
* Type: "" or URL
* DEPRECATED: Use `--init-author-url` instead.

Alias for `--init-author-url`



#### `init.license`

* Default: "ISC"
* Type: String
* DEPRECATED: Use `--init-license` instead.

Alias for `--init-license`



#### `init.module`

* Default: "~/.npm-init.js"
* Type: Path
* DEPRECATED: Use `--init-module` instead.

Alias for `--init-module`



#### `init.version`

* Default: "1.0.0"
* Type: SemVer string
* DEPRECATED: Use `--init-version` instead.

Alias for `--init-version`



#### `key`

* Default: null
* Type: null or String
* DEPRECATED: `key` and `cert` are no longer used for most registry
  operations. Use registry scoped `keyfile` and `certfile` instead. Example:
  //other-registry.tld/:keyfile=/path/to/key.pem
  //other-registry.tld/:certfile=/path/to/cert.crt

A client key to pass when accessing the registry. Values should be in PEM
format with newlines replaced by the string "\n". For example:

```ini
key="-----BEGIN PRIVATE KEY-----\nXXXX\nXXXX\n-----END PRIVATE KEY-----"
```

It is _not_ the path to a key file, though you can set a registry-scoped
"keyfile" path like "//other-registry.tld/:keyfile=/path/to/key.pem".



#### `legacy-bundling`

* Default: false
* Type: Boolean
* DEPRECATED: This option has been deprecated in favor of
  `--install-strategy=nested`

Instead of hoisting package installs in `node_modules`, install packages in
the same manner that they are depended on. This may cause very deep
directory structures and duplicate package installs as there is no
de-duplicating. Sets `--install-strategy=nested`.



#### `only`

* Default: null
* Type: null, "prod", or "production"
* DEPRECATED: Use `--omit=dev` to omit dev dependencies from the install.

When set to `prod` or `production`, this is an alias for `--omit=dev`.



#### `optional`

* Default: null
* Type: null or Boolean
* DEPRECATED: Use `--omit=optional` to exclude optional dependencies, or
  `--include=optional` to include them.

Default value does install optional deps unless otherwise omitted.

Alias for --include=optional or --omit=optional



#### `production`

* Default: null
* Type: null or Boolean
* DEPRECATED: Use `--omit=dev` instead.

Alias for `--omit=dev`



#### `shrinkwrap`

* Default: true
* Type: Boolean
* DEPRECATED: Use the --package-lock setting instead.

Alias for --package-lock



### See also

* [npm config](/commands/npm-config)
* [npmrc](/configuring-npm/npmrc)
* [npm scripts](/using-npm/scripts)
* [npm folders](/configuring-npm/folders)
* [npm](/commands/npm)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/dependency-selectors.md
====================================================

---
title: Dependency Selector Syntax & Querying
section: 7
description: Dependency Selector Syntax & Querying
---

### Description

The [`npm query`](/commands/npm-query) command exposes a new dependency selector syntax (informed by & respecting many aspects of the [CSS Selectors 4 Spec](https://dev.w3.org/csswg/selectors4/#relational)) which:

- Standardizes the shape of, & querying of, dependency graphs with a robust object model, metadata & selector syntax
- Leverages existing, known language syntax & operators from CSS to make disparate package information broadly accessible
- Unlocks the ability to answer complex, multi-faceted questions about dependencies, their relationships & associative metadata
- Consolidates redundant logic of similar query commands in `npm` (ex. `npm fund`, `npm ls`, `npm outdated`, `npm audit` ...)

### Dependency Selector Syntax `v1.0.0`

#### Overview:

- there is no "type" or "tag" selectors (ex. `div, h1, a`) as a dependency/target is the only type of `Node` that can be queried
- the term "dependencies" is in reference to any `Node` found in a `tree` returned by `Arborist`

#### Combinators

- `>` direct descendant/child
- ` ` any descendant/child
- `~` sibling

#### Selectors

- `*` universal selector
- `#<name>` dependency selector (equivalent to `[name="..."]`)
- `#<name>@<version>` (equivalent to `[name=<name>]:semver(<version>)`)
- `,` selector list delimiter
- `.` dependency type selector
- `:` pseudo selector

#### Dependency Type Selectors

- `.prod` dependency found in the `dependencies` section of `package.json`, or is a child of said dependency
- `.dev` dependency found in the `devDependencies` section of `package.json`, or is a child of said dependency
- `.optional` dependency found in the `optionalDependencies` section of `package.json`, or has `"optional": true` set in its entry in the `peerDependenciesMeta` section of `package.json`, or a child of said dependency
- `.peer` dependency found in the `peerDependencies` section of `package.json`
- `.workspace` dependency found in the [`workspaces`](https://docs.npmjs.com/cli/v8/using-npm/workspaces) section of `package.json`
- `.bundled` dependency found in the `bundleDependencies` section of `package.json`, or is a child of said dependency

#### Pseudo Selectors
- [`:not(<selector>)`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [`:has(<selector>)`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
- [`:is(<selector list>)`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
- [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) matches the root node/dependency
- [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope) matches node/dependency it was queried against
- [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty) when a dependency has no dependencies
- [`:private`](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#private) when a dependency is private
- `:link` when a dependency is linked (for instance, workspaces or packages manually [`linked`](https://docs.npmjs.com/cli/v8/commands/npm-link)
- `:deduped` when a dependency has been deduped (note that this does *not* always mean the dependency has been hoisted to the root of node_modules)
- `:overridden` when a dependency has been overridden
- `:extraneous` when a dependency exists but is not defined as a dependency of any node
- `:invalid` when a dependency version is out of its ancestors specified range
- `:missing` when a dependency is not found on disk
- `:semver(<spec>, [selector], [function])` match a valid [`node-semver`](https://github.com/npm/node-semver) version or range to a selector
- `:path(<path>)` [glob](https://www.npmjs.com/package/glob) matching based on dependencies path relative to the project
- `:type(<type>)` [based on currently recognized types](https://github.com/npm/npm-package-arg#result-object)
- `:outdated(<type>)` when a dependency is outdated

##### `:semver(<spec>, [selector], [function])`

The `:semver()` pseudo selector allows comparing fields from each node's `package.json` using [semver](https://github.com/npm/node-semver#readme) methods. It accepts up to 3 parameters, all but the first of which are optional.

- `spec` a semver version or range
- `selector` an attribute selector for each node (default `[version]`)
- `function` a semver method to apply, one of: `satisfies`, `intersects`, `subset`, `gt`, `gte`, `gtr`, `lt`, `lte`, `ltr`, `eq`, `neq` or the special function `infer` (default `infer`)

When the special `infer` function is used the `spec` and the actual value from the node are compared. If both are versions, according to `semver.valid()`, `eq` is used. If both values are ranges, according to `!semver.valid()`, `intersects` is used. If the values are mixed types `satisfies` is used.

Some examples:

- `:semver(^1.0.0)` returns every node that has a `version` satisfied by the provided range `^1.0.0`
- `:semver(16.0.0, :attr(engines, [node]))` returns every node which has an `engines.node` property satisfying the version `16.0.0`
- `:semver(1.0.0, [version], lt)` every node with a `version` less than `1.0.0`

##### `:outdated(<type>)`

The `:outdated` pseudo selector retrieves data from the registry and returns information about which of your dependencies are outdated. The type parameter may be one of the following:

- `any` (default) a version exists that is greater than the current one
- `in-range` a version exists that is greater than the current one, and satisfies at least one if its dependents
- `out-of-range` a version exists that is greater than the current one, does not satisfy at least one of its dependents
- `major` a version exists that is a semver major greater than the current one
- `minor` a version exists that is a semver minor greater than the current one
- `patch` a version exists that is a semver patch greater than the current one

In addition to the filtering performed by the pseudo selector, some extra data is added to the resulting objects. The following data can be found under the `queryContext` property of each node.

- `versions` an array of every available version of the given node
- `outdated.inRange` an array of objects, each with a `from` and `versions`, where `from` is the on-disk location of the node that depends on the current node and `versions` is an array of all available versions that satisfies that dependency. This is only populated if `:outdated(in-range)` is used.
- `outdated.outOfRange` an array of objects, identical in shape to `inRange`, but where the `versions` array is every available version that does not satisfy the dependency. This is only populated if `:outdated(out-of-range)` is used.

Some examples:

- `:root > :outdated(major)` returns every direct dependency that has a new semver major release
- `.prod:outdated(in-range)` returns production dependencies that have a new release that satisfies at least one of its edges in

#### [Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

The attribute selector evaluates the key/value pairs in `package.json` if they are `String`s.

- `[]` attribute selector (ie. existence of attribute)
- `[attribute=value]` attribute value is equivalant...
- `[attribute~=value]` attribute value contains word...
- `[attribute*=value]` attribute value contains string...
- `[attribute|=value]` attribute value is equal to or starts with...
- `[attribute^=value]` attribute value starts with...
- `[attribute$=value]` attribute value ends with...

#### `Array` & `Object` Attribute Selectors

The generic `:attr()` pseudo selector standardizes a pattern which can be used for attribute selection of `Object`s, `Array`s or `Arrays` of `Object`s accessible via `Arborist`'s `Node.package` metadata. This allows for iterative attribute selection beyond top-level `String` evaluation. The last argument passed to `:attr()` must be an `attribute` selector or a nested `:attr()`. See examples below:

#### `Objects`

```css
/* return dependencies that have a `scripts.test` containing `"tap"` */
*:attr(scripts, [test~=tap])
```

#### Nested `Objects`

Nested objects are expressed as sequential arguments to `:attr()`.

```css
/* return dependencies that have a testling config for opera browsers */
*:attr(testling, browsers, [~=opera])
```

#### `Arrays`

`Array`s specifically uses a special/reserved `.` character in place of a typical attribute name. `Arrays` also support exact `value` matching when a `String` is passed to the selector.

##### Example of an `Array` Attribute Selection:
```css
/* removes the distinction between properties & arrays */
/* ie. we'd have to check the property & iterate to match selection */
*:attr([keywords^=react])
*:attr(contributors, :attr([name~=Jordan]))
```

##### Example of an `Array` matching directly to a value:
```css
/* return dependencies that have the exact keyword "react" */
/* this is equivalent to `*:keywords([value="react"])` */
*:attr([keywords=react])
```

##### Example of an `Array` of `Object`s:
```css
/* returns */
*:attr(contributors, [email=ruyadorno@github.com])
```

### Groups

Dependency groups are defined by the package relationships to their ancestors (ie. the dependency types that are defined in `package.json`). This approach is user-centric as the ecosystem has been taught to think about dependencies in these groups first-and-foremost. Dependencies are allowed to be included in multiple groups (ex. a `prod` dependency may also be a `dev` dependency (in that it's also required by another `dev` dependency) & may also be `bundled` - a selector for that type of dependency would look like: `*.prod.dev.bundled`).

- `.prod`
- `.dev`
- `.optional`
- `.peer`
- `.bundled`
- `.workspace`

Please note that currently `workspace` deps are always `prod` dependencies.  Additionally the `.root` dependency is also considered a `prod` dependency.

### Programmatic Usage

- `Arborist`'s `Node` Class has a `.querySelectorAll()` method
  - this method will return a filtered, flattened dependency Arborist `Node` list based on a valid query selector

```js
const Arborist = require('@npmcli/arborist')
const arb = new Arborist({})
```

```js
// root-level
arb.loadActual().then(async (tree) => {
  // query all production dependencies
  const results = await tree.querySelectorAll('.prod')
  console.log(results)
})
```

```js
// iterative
arb.loadActual().then(async (tree) => {
  // query for the deduped version of react
  const results = await tree.querySelectorAll('#react:not(:deduped)')
  // query the deduped react for git deps
  const deps = await results[0].querySelectorAll(':type(git)')
  console.log(deps)
})
```

## See Also

* [npm query](/commands/npm-query)
* [@npmcli/arborist](https://npm.im/@npmcli/arborist)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/developers.md
====================================================

---
title: developers
section: 7
description: Developer Guide
---

### Description

So, you've decided to use npm to develop (and maybe publish/deploy)
your project.

Fantastic!

There are a few things that you need to do above the simple steps
that your users will do to install your program.

### About These Documents

These are man pages.  If you install npm, you should be able to
then do `man npm-thing` to get the documentation on a particular
topic, or `npm help thing` to see the same information.

### What is a Package

A package is:

* a) a folder containing a program described by a package.json file
* b) a gzipped tarball containing (a)
* c) a url that resolves to (b)
* d) a `<name>@<version>` that is published on the registry with (c)
* e) a `<name>@<tag>` that points to (d)
* f) a `<name>` that has a "latest" tag satisfying (e)
* g) a `git` url that, when cloned, results in (a).

Even if you never publish your package, you can still get a lot of
benefits of using npm if you just want to write a node program (a), and
perhaps if you also want to be able to easily install it elsewhere
after packing it up into a tarball (b).

Git urls can be of the form:

```bash
git://github.com/user/project.git#commit-ish
git+ssh://user@hostname:project.git#commit-ish
git+http://user@hostname/project/blah.git#commit-ish
git+https://user@hostname/project/blah.git#commit-ish
```

The `commit-ish` can be any tag, sha, or branch which can be supplied as
an argument to `git checkout`.  The default is whatever the repository uses
as its default branch.

### The package.json File

You need to have a `package.json` file in the root of your project to do
much of anything with npm.  That is basically the whole interface.

See [`package.json`](/configuring-npm/package-json) for details about what
goes in that file.  At the very least, you need:

* name: This should be a string that identifies your project.  Please do
  not use the name to specify that it runs on node, or is in JavaScript.
  You can use the "engines" field to explicitly state the versions of node
  (or whatever else) that your program requires, and it's pretty well
  assumed that it's JavaScript.

  It does not necessarily need to match your github repository name.

  So, `node-foo` and `bar-js` are bad names.  `foo` or `bar` are better.

* version: A semver-compatible version.

* engines: Specify the versions of node (or whatever else) that your
  program runs on.  The node API changes a lot, and there may be bugs or
  new functionality that you depend on.  Be explicit.

* author: Take some credit.

* scripts: If you have a special compilation or installation script, then
  you should put it in the `scripts` object.  You should definitely have at
  least a basic smoke-test command as the "scripts.test" field.  See
  [scripts](/using-npm/scripts).

* main: If you have a single module that serves as the entry point to your
  program (like what the "foo" package gives you at require("foo")), then
  you need to specify that in the "main" field.

* directories: This is an object mapping names to folders.  The best ones
  to include are "lib" and "doc", but if you use "man" to specify a folder
  full of man pages, they'll get installed just like these ones.

You can use `npm init` in the root of your package in order to get you
started with a pretty basic package.json file.  See [`npm
init`](/commands/npm-init) for more info.

### Keeping files *out* of your Package

Use a `.npmignore` file to keep stuff out of your package.  If there's no
`.npmignore` file, but there *is* a `.gitignore` file, then npm will ignore
the stuff matched by the `.gitignore` file.  If you *want* to include
something that is excluded by your `.gitignore` file, you can create an
empty `.npmignore` file to override it. Like `git`, `npm` looks for
`.npmignore` and `.gitignore` files in all subdirectories of your package,
not only the root directory.

`.npmignore` files follow the [same pattern
rules](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring)
as `.gitignore` files:

* Blank lines or lines starting with `#` are ignored.
* Standard glob patterns work.
* You can end patterns with a forward slash `/` to specify a directory.
* You can negate a pattern by starting it with an exclamation point `!`.

By default, the following paths and files are ignored, so there's no
need to add them to `.npmignore` explicitly:

* `.*.swp`
* `._*`
* `.DS_Store`
* `.git`
* `.gitignore`
* `.hg`
* `.npmignore`
* `.npmrc`
* `.lock-wscript`
* `.svn`
* `.wafpickle-*`
* `config.gypi`
* `CVS`
* `npm-debug.log`

Additionally, everything in `node_modules` is ignored, except for
bundled dependencies. npm automatically handles this for you, so don't
bother adding `node_modules` to `.npmignore`.

The following paths and files are never ignored, so adding them to
`.npmignore` is pointless:

* `package.json`
* `README` (and its variants)
* `CHANGELOG` (and its variants)
* `LICENSE` / `LICENCE`

If, given the structure of your project, you find `.npmignore` to be a
maintenance headache, you might instead try populating the `files`
property of `package.json`, which is an array of file or directory names
that should be included in your package. Sometimes manually picking
which items to allow is easier to manage than building a block list.

#### Testing whether your `.npmignore` or `files` config works

If you want to double check that your package will include only the files
you intend it to when published, you can run the `npm pack` command locally
which will generate a tarball in the working directory, the same way it
does for publishing.

### Link Packages

`npm link` is designed to install a development package and see the
changes in real time without having to keep re-installing it.  (You do
need to either re-link or `npm rebuild -g` to update compiled packages,
of course.)

More info at [`npm link`](/commands/npm-link).

### Before Publishing: Make Sure Your Package Installs and Works

**This is important.**

If you can not install it locally, you'll have
problems trying to publish it.  Or, worse yet, you'll be able to
publish it, but you'll be publishing a broken or pointless package.
So don't do that.

In the root of your package, do this:

```bash
npm install . -g
```

That'll show you that it's working.  If you'd rather just create a symlink
package that points to your working directory, then do this:

```bash
npm link
```

Use `npm ls -g` to see if it's there.

To test a local install, go into some other folder, and then do:

```bash
cd ../some-other-folder
npm install ../my-package
```

to install it locally into the node_modules folder in that other place.

Then go into the node-repl, and try using require("my-thing") to
bring in your module's main module.

### Create a User Account

Create a user with the adduser command.  It works like this:

```bash
npm adduser
```

and then follow the prompts.

This is documented better in [npm adduser](/commands/npm-adduser).

### Publish your Package

This part's easy.  In the root of your folder, do this:

```bash
npm publish
```

You can give publish a url to a tarball, or a filename of a tarball,
or a path to a folder.

Note that pretty much **everything in that folder will be exposed**
by default.  So, if you have secret stuff in there, use a
`.npmignore` file to list out the globs to ignore, or publish
from a fresh checkout.

### Brag about it

Send emails, write blogs, blab in IRC.

Tell the world how easy it is to install your program!

### See also

* [npm](/commands/npm)
* [npm init](/commands/npm-init)
* [package.json](/configuring-npm/package-json)
* [npm scripts](/using-npm/scripts)
* [npm publish](/commands/npm-publish)
* [npm adduser](/commands/npm-adduser)
* [npm registry](/using-npm/registry)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/logging.md
====================================================

---
title: Logging
section: 7
description: Why, What & How We Log
---

### Description

The `npm` CLI has various mechanisms for showing different levels of information back to end-users for certain commands, configurations & environments.

### Setting Log File Location

All logs are written to a debug log, with the path to that file printed if the execution of a command fails.

The default location of the logs directory is a directory named `_logs` inside the npm cache. This can be changed with the `logs-dir` config option.

For example, if you wanted to write all your logs to the current working directory, you could run: `npm install --logs-dir=.`.  This is especially helpful in debugging a specific `npm` issue as you can run
a command multiple times with different config values and then diff all the log files.

Log files will be removed from the `logs-dir` when the number of log files exceeds `logs-max`, with the oldest logs being deleted first.

To turn off logs completely set `--logs-max=0`.

### Setting Log Levels

#### `loglevel`

`loglevel` is a global argument/config that can be set to determine the type of information to be displayed.

The default value of `loglevel` is `"notice"` but there are several levels/types of logs available, including:

- `"silent"`
- `"error"`
- `"warn"`
- `"notice"`
- `"http"`
- `"info"`
- `"verbose"`
- `"silly"`

All logs pertaining to a level proceeding the current setting will be shown.

##### Aliases

The log levels listed above have various corresponding aliases, including:

- `-d`: `--loglevel info`
- `--dd`: `--loglevel verbose`
- `--verbose`: `--loglevel verbose`
- `--ddd`: `--loglevel silly`
- `-q`: `--loglevel warn`
- `--quiet`: `--loglevel warn`
- `-s`: `--loglevel silent`
- `--silent`: `--loglevel silent`

#### `foreground-scripts`

The `npm` CLI began hiding the output of lifecycle scripts for `npm install` as of `v7`. Notably, this means you will not see logs/output from packages that may be using "install scripts" to display information back to you or from your own project's scripts defined in `package.json`. If you'd like to change this behavior & log this output you can set `foreground-scripts` to `true`.

### Timing Information

The [`--timing` config](/using-npm/config#timing) can be set which does a few
things:

1. Always shows the full path to the debug log regardless of command exit status
1. Write timing information to a process specific timing file in the cache or `logs-dir`
1. Output timing information to the terminal

This file contains a `timers` object where the keys are an identifier for the
portion of the process being timed and the value is the number of milliseconds it took to complete.

Sometimes it is helpful to get timing information without outputting anything to the terminal. For
example, the performance might be affected by writing to the terminal. In this case you can use
`--timing --silent` which will still write the timing file, but not output anything to the terminal
while running.

### Registry Response Headers

#### `npm-notice`

The `npm` CLI reads from & logs any `npm-notice` headers that are returned from the configured registry. This mechanism can be used by third-party registries to provide useful information when network-dependent requests occur.

This header is not cached, and will not be logged if the request is served from the cache.

### Logs and Sensitive Information

The `npm` CLI makes a best effort to redact the following from terminal output and log files:

- Passwords inside basic auth URLs
- npm tokens

However, this behavior should not be relied on to keep all possible sensitive information redacted. If you are concerned about secrets in your log file or terminal output, you can use `--loglevel=silent` and `--logs-max=0` to ensure no logs are written to your terminal or filesystem.

### See also

* [config](/using-npm/config)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/orgs.md
====================================================

---
title: orgs
section: 7
description: Working with Teams & Orgs
---

### Description

There are three levels of org users:

1. Super admin, controls billing & adding people to the org.
2. Team admin, manages team membership & package access.
3. Developer, works on packages they are given access to.  

The super admin is the only person who can add users to the org because it impacts the monthly bill. The super admin will use the website to manage membership. Every org has a `developers` team that all users are automatically added to.

The team admin is the person who manages team creation, team membership, and package access for teams. The team admin grants package access to teams, not individuals.

The developer will be able to access packages based on the teams they are on. Access is either read-write or read-only.

There are two main commands:

1. `npm team` see [npm team](/commands/npm-team) for more details
2. `npm access` see [npm access](/commands/npm-access) for more details

### Team Admins create teams

* Check who you’ve added to your org:

```bash
npm team ls <org>:developers
```

* Each org is automatically given a `developers` team, so you can see the whole list of team members in your org. This team automatically gets read-write access to all packages, but you can change that with the `access` command.

* Create a new team:

```bash
npm team create <org:team>
```

* Add members to that team:

```bash
npm team add <org:team> <user>
```

### Publish a package and adjust package access

* In package directory, run

```bash
npm init --scope=<org>
```
to scope it for your org & publish as usual

* Grant access:  

```bash
npm access grant <read-only|read-write> <org:team> [<package>]
```

* Revoke access:

```bash
npm access revoke <org:team> [<package>]
```

### Monitor your package access

* See what org packages a team member can access:

```bash
npm access ls-packages <org> <user>
```

* See packages available to a specific team:

```bash
npm access ls-packages <org:team>
```

* Check which teams are collaborating on a package:

```bash
npm access ls-collaborators <pkg>
```

### See also

* [npm team](/commands/npm-team)
* [npm access](/commands/npm-access)
* [npm scope](/using-npm/scope)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/package-spec.md
====================================================

---
title: package-spec
section: 7
description: Package name specifier
---

### Description

Commands like `npm install` and the dependency sections in the
`package.json` use a package name specifier.  This can be many different
things that all refer to a "package".  Examples include a package name,
git url, tarball, or local directory.  These will generally be referred
to as `<package-spec>` in the help output for the npm commands that use
this package name specifier.

### Package name

* `[<@scope>/]<pkg>`
* `[<@scope>/]<pkg>@<tag>`
* `[<@scope>/]<pkg>@<version>`
* `[<@scope>/]<pkg>@<version range>`

Refers to a package by name, with or without a scope, and optionally
tag, version, or version range.  This is typically used in combination
with the [registry](/using-npm/config#registry) config to refer to a
package in a registry.

Examples:
* `npm`
* `@npmcli/arborist`
* `@npmcli/arborist@latest`
* `npm@6.13.1`
* `npm@^4.0.0`

### Aliases

* `<alias>@npm:<name>`

Primarily used by commands like `npm install` and in the dependency
sections in the `package.json`, this refers to a package by an alias.
The `<alias>` is the name of the package as it is reified in the
`node_modules` folder, and the `<name>` refers to a package name as
found in the configured registry.

See `Package name` above for more info on referring to a package by
name, and [registry](/using-npm/config#registry) for configuring which
registry is used when referring to a package by name.

Examples:
* `semver:@npm:@npmcli/semver-with-patch`
* `semver:@npm:semver@7.2.2`
* `semver:@npm:semver@legacy`

### Folders

* `<folder>`

This refers to a package on the local filesystem.  Specifically this is
a folder with a `package.json` file in it.  This *should* always be
prefixed with a `/` or `./` (or your OS equivalent) to reduce confusion.
npm currently will parse a string with more than one `/` in it as a
folder, but this is legacy behavior that may be removed in a future
version.

Examples:

* `./my-package`
* `/opt/npm/my-package`

### Tarballs

* `<tarball file>`
* `<tarball url>`

Examples:

* `./my-package.tgz`
* `https://registry.npmjs.org/semver/-/semver-1.0.0.tgz`

Refers to a package in a tarball format, either on the local filesystem
or remotely via url.  This is the format that packages exist in when
uploaded to a registry.

### git urls

* `<git:// url>`
* `<github username>/<github project>`

Refers to a package in a git repo.  This can be a full git url, git
shorthand, or a username/package on GitHub.  You can specify a
git tag, branch, or other git ref by appending `#ref`.

Examples:

* `https://github.com/npm/cli.git`
* `git@github.com:npm/cli.git`
* `git+ssh://git@github.com/npm/cli#v6.0.0`
* `github:npm/cli#HEAD`
* `npm/cli#c12ea07`

### See also

* [npm-package-arg](https://npm.im/npm-package-arg)
* [scope](/using-npm/scope)
* [config](/using-npm/config)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/registry.md
====================================================

---
title: registry
section: 7
description: The JavaScript Package Registry
---

### Description

To resolve packages by name and version, npm talks to a registry website
that implements the CommonJS Package Registry specification for reading
package info.

npm is configured to use the **npm public registry** at
<https://registry.npmjs.org> by default. Use of the npm public registry is
subject to terms of use available at <https://docs.npmjs.com/policies/terms>.

You can configure npm to use any compatible registry you like, and even run
your own registry. Use of someone else's registry may be governed by their
terms of use.

npm's package registry implementation supports several
write APIs as well, to allow for publishing packages and managing user
account information.

The npm public registry is powered by a CouchDB database,
of which there is a public mirror at <https://skimdb.npmjs.com/registry>.

The registry URL used is determined by the scope of the package (see
[`scope`](/using-npm/scope). If no scope is specified, the default registry is
used, which is supplied by the [`registry` config](/using-npm/config#registry)
parameter.  See [`npm config`](/commands/npm-config),
[`npmrc`](/configuring-npm/npmrc), and [`config`](/using-npm/config) for more on
managing npm's configuration.
Authentication configuration such as auth tokens and certificates are configured
specifically scoped to an individual registry. See
[Auth Related Configuration](/configuring-npm/npmrc#auth-related-configuration)

When the default registry is used in a package-lock or shrinkwrap it has the
special meaning of "the currently configured registry". If you create a lock
file while using the default registry you can switch to another registry and
npm will install packages from the new registry, but if you create a lock
file while using a custom registry packages will be installed from that
registry even after you change to another registry.

### Does npm send any information about me back to the registry?

Yes.

When making requests of the registry npm adds two headers with information
about your environment:

* `Npm-Scope` – If your project is scoped, this header will contain its
  scope. In the future npm hopes to build registry features that use this
  information to allow you to customize your experience for your
  organization.
* `Npm-In-CI` – Set to "true" if npm believes this install is running in a
  continuous integration environment, "false" otherwise. This is detected by
  looking for the following environment variables: `CI`, `TDDIUM`,
  `JENKINS_URL`, `bamboo.buildKey`. If you'd like to learn more you may find
  the [original PR](https://github.com/npm/npm-registry-client/pull/129)
  interesting.
  This is used to gather better metrics on how npm is used by humans, versus
  build farms.

The npm registry does not try to correlate the information in these headers
with any authenticated accounts that may be used in the same requests.

### How can I prevent my package from being published in the official registry?

Set `"private": true` in your `package.json` to prevent it from being
published at all, or
`"publishConfig":{"registry":"http://my-internal-registry.local"}`
to force it to be published only to your internal/private registry.

See [`package.json`](/configuring-npm/package-json) for more info on what goes in the package.json file.

### Where can I find my (and others') published packages?

<https://www.npmjs.com/>

### See also

* [npm config](/commands/npm-config)
* [config](/using-npm/config)
* [npmrc](/configuring-npm/npmrc)
* [npm developers](/using-npm/developers)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/removal.md
====================================================

---
title: removal
section: 7
description: Cleaning the Slate
---

### Synopsis

So sad to see you go.

```bash
sudo npm uninstall npm -g
```

Or, if that fails, get the npm source code, and do:

```bash
sudo make uninstall
```

### More Severe Uninstalling

Usually, the above instructions are sufficient.  That will remove
npm, but leave behind anything you've installed.

If that doesn't work, or if you require more drastic measures,
continue reading.

Note that this is only necessary for globally-installed packages.  Local
installs are completely contained within a project's `node_modules`
folder.  Delete that folder, and everything is gone unless a package's
install script is particularly ill-behaved.

This assumes that you installed node and npm in the default place.  If
you configured node with a different `--prefix`, or installed npm with a
different prefix setting, then adjust the paths accordingly, replacing
`/usr/local` with your install prefix.

To remove everything npm-related manually:

```bash
rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/npm*
```

If you installed things *with* npm, then your best bet is to uninstall
them with npm first, and then install them again once you have a
proper install.  This can help find any symlinks that are lying
around:

```bash
ls -laF /usr/local/{lib/node{,/.npm},bin,share/man} | grep npm
```

Prior to version 0.3, npm used shim files for executables and node
modules.  To track those down, you can do the following:

```bash
find /usr/local/{lib/node,bin} -exec grep -l npm \{\} \; ;
```

### See also

* [npm uninstall](/commands/npm-uninstall)
* [npm prune](/commands/npm-prune)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/scope.md
====================================================

---
title: scope
section: 7
description: Scoped packages
---

### Description

All npm packages have a name. Some package names also have a scope. A scope
follows the usual rules for package names (URL-safe characters, no leading dots
or underscores). When used in package names, scopes are preceded by an `@` symbol
and followed by a slash, e.g.

```bash
@somescope/somepackagename
```

Scopes are a way of grouping related packages together, and also affect a few
things about the way npm treats the package.

Each npm user/organization has their own scope, and only you can add packages
in your scope. This means you don't have to worry about someone taking your
package name ahead of you. Thus it is also a good way to signal official packages
for organizations.

Scoped packages can be published and installed as of `npm@2` and are supported
by the primary npm registry. Unscoped packages can depend on scoped packages and
vice versa. The npm client is backwards-compatible with unscoped registries,
so it can be used to work with scoped and unscoped registries at the same time.

### Installing scoped packages

Scoped packages are installed to a sub-folder of the regular installation
folder, e.g. if your other packages are installed in `node_modules/packagename`,
scoped modules will be installed in `node_modules/@myorg/packagename`. The scope
folder (`@myorg`) is simply the name of the scope preceded by an `@` symbol, and can
contain any number of scoped packages.

A scoped package is installed by referencing it by name, preceded by an
`@` symbol, in `npm install`:

```bash
npm install @myorg/mypackage
```

Or in `package.json`:

```json
"dependencies": {
  "@myorg/mypackage": "^1.3.0"
}
```

Note that if the `@` symbol is omitted, in either case, npm will instead attempt to
install from GitHub; see [`npm install`](/commands/npm-install).

### Requiring scoped packages

Because scoped packages are installed into a scope folder, you have to
include the name of the scope when requiring them in your code, e.g.

```javascript
require('@myorg/mypackage')
```

There is nothing special about the way Node treats scope folders. This
simply requires the `mypackage` module in the folder named `@myorg`.

### Publishing scoped packages

Scoped packages can be published from the CLI as of `npm@2` and can be
published to any registry that supports them, including the primary npm
registry.

(As of 2015-04-19, and with npm 2.0 or better, the primary npm registry
**does** support scoped packages.)

If you wish, you may associate a scope with a registry; see below.

#### Publishing public scoped packages to the primary npm registry

Publishing to a scope, you have two options:

- Publishing to your user scope (example: `@username/module`)
- Publishing to an organization scope (example: `@org/module`)

If publishing a public module to an organization scope, you must
first either create an organization with the name of the scope
that you'd like to publish to or be added to an existing organization
with the appropriate permissions. For example, if you'd like to
publish to `@org`, you would  need to create the `org` organization
on npmjs.com prior to trying to publish.

Scoped packages are not public by default.  You will need to specify
`--access public` with the initial `npm publish` command.  This will publish
the package and set access to `public` as if you had run `npm access public`
after publishing.  You do not need to do this when publishing new versions of
an existing scoped package.

#### Publishing private scoped packages to the npm registry

To publish a private scoped package to the npm registry, you must have
an [npm Private Modules](https://docs.npmjs.com/private-modules/intro)
account.

You can then publish the module with `npm publish` or `npm publish
--access restricted`, and it will be present in the npm registry, with
restricted access. You can then change the access permissions, if
desired, with `npm access` or on the npmjs.com website.

### Associating a scope with a registry

Scopes can be associated with a separate registry. This allows you to
seamlessly use a mix of packages from the primary npm registry and one or more
private registries, such as [GitHub Packages](https://github.com/features/packages) or the open source [Verdaccio](https://verdaccio.org)
project.

You can associate a scope with a registry at login, e.g.

```bash
npm login --registry=http://reg.example.com --scope=@myco
```

Scopes have a many-to-one relationship with registries: one registry can
host multiple scopes, but a scope only ever points to one registry.

You can also associate a scope with a registry using `npm config`:

```bash
npm config set @myco:registry http://reg.example.com
```

Once a scope is associated with a registry, any `npm install` for a package
with that scope will request packages from that registry instead. Any
`npm publish` for a package name that contains the scope will be published to
that registry instead.

### See also

* [npm install](/commands/npm-install)
* [npm publish](/commands/npm-publish)
* [npm access](/commands/npm-access)
* [npm registry](/using-npm/registry)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/scripts.md
====================================================

---
title: scripts
section: 7
description: How npm handles the "scripts" field
---

### Description

The `"scripts"` property of your `package.json` file supports a number
of built-in scripts and their preset life cycle events as well as
arbitrary scripts. These all can be executed by running
`npm run-script <stage>` or `npm run <stage>` for short. *Pre* and *post*
commands with matching names will be run for those as well (e.g. `premyscript`,
`myscript`, `postmyscript`). Scripts from dependencies can be run with
`npm explore <pkg> -- npm run <stage>`.

### Pre & Post Scripts

To create "pre" or "post" scripts for any scripts defined in the
`"scripts"` section of the `package.json`, simply create another script
*with a matching name* and add "pre" or "post" to the beginning of them.

```json
{
  "scripts": {
    "precompress": "{{ executes BEFORE the `compress` script }}",
    "compress": "{{ run command to compress files }}",
    "postcompress": "{{ executes AFTER `compress` script }}"
  }
}
```

In this example `npm run compress` would execute these scripts as
described.

### Life Cycle Scripts

There are some special life cycle scripts that happen only in certain
situations. These scripts happen in addition to the `pre<event>`, `post<event>`, and
`<event>` scripts.

* `prepare`, `prepublish`, `prepublishOnly`, `prepack`, `postpack`, `dependencies`

**prepare** (since `npm@4.0.0`)
* Runs BEFORE the package is packed, i.e. during `npm publish`
    and `npm pack`
* Runs on local `npm install` without any arguments
* Runs AFTER `prepublish`, but BEFORE `prepublishOnly`

* NOTE: If a package being installed through git contains a `prepare`
 script, its `dependencies` and `devDependencies` will be installed, and
 the prepare script will be run, before the package is packaged and
 installed.

* As of `npm@7` these scripts run in the background.
  To see the output, run with: `--foreground-scripts`.

**prepublish** (DEPRECATED)
* Does not run during `npm publish`, but does run during `npm ci`
  and `npm install`. See below for more info.

**prepublishOnly**
* Runs BEFORE the package is prepared and packed, ONLY on `npm publish`.

**prepack**
* Runs BEFORE a tarball is packed (on "`npm pack`", "`npm publish`", and when installing a git dependency).
* NOTE: "`npm run pack`" is NOT the same as "`npm pack`". "`npm run pack`" is an arbitrary user defined script name, where as, "`npm pack`" is a CLI defined command.

**postpack**
* Runs AFTER the tarball has been generated but before it is moved to its final destination (if at all, publish does not save the tarball locally)

**dependencies**
* Runs AFTER any operations that modify the `node_modules` directory IF changes occurred.
* Does NOT run in global mode

#### Prepare and Prepublish

**Deprecation Note: prepublish**

Since `npm@1.1.71`, the npm CLI has run the `prepublish` script for both `npm publish` and `npm install`, because it's a convenient way to prepare a package for use (some common use cases are described in the section below).  It has also turned out to be, in practice, [very confusing](https://github.com/npm/npm/issues/10074).  As of `npm@4.0.0`, a new event has been introduced, `prepare`, that preserves this existing behavior. A _new_ event, `prepublishOnly` has been added as a transitional strategy to allow users to avoid the confusing behavior of existing npm versions and only run on `npm publish` (for instance, running the tests one last time to ensure they're in good shape).

See <https://github.com/npm/npm/issues/10074> for a much lengthier justification, with further reading, for this change.

**Use Cases**

If you need to perform operations on your package before it is used, in a way that is not dependent on the operating system or architecture of the target system, use a `prepublish` script. This includes tasks such as:

* Compiling CoffeeScript source code into JavaScript.
* Creating minified versions of JavaScript source code.
* Fetching remote resources that your package will use.

The advantage of doing these things at `prepublish` time is that they can be done once, in a single place, thus reducing complexity and variability. Additionally, this means that:

* You can depend on `coffee-script` as a `devDependency`, and thus
  your users don't need to have it installed.
* You don't need to include minifiers in your package, reducing
  the size for your users.
* You don't need to rely on your users having `curl` or `wget` or
  other system tools on the target machines.

#### Dependencies

The `dependencies` script is run any time an `npm` command causes changes to the `node_modules` directory. It is run AFTER the changes have been applied and the `package.json` and `package-lock.json` files have been updated.

### Life Cycle Operation Order

#### [`npm cache add`](/commands/npm-cache)

* `prepare`

#### [`npm ci`](/commands/npm-ci)

* `preinstall`
* `install`
* `postinstall`
* `prepublish`
* `preprepare`
* `prepare`
* `postprepare`

 These all run after the actual installation of modules into
 `node_modules`, in order, with no internal actions happening in between

#### [`npm diff`](/commands/npm-diff)

* `prepare`

#### [`npm install`](/commands/npm-install)

These also run when you run `npm install -g <pkg-name>`

* `preinstall`
* `install`
* `postinstall`
* `prepublish`
* `preprepare`
* `prepare`
* `postprepare`

If there is a `binding.gyp` file in the root of your package and you
haven't defined your own `install` or `preinstall` scripts, npm will
default the `install` command to compile using node-gyp via `node-gyp
rebuild`

These are run from the scripts of `<pkg-name>`

#### [`npm pack`](/commands/npm-pack)

* `prepack`
* `prepare`
* `postpack`

#### [`npm publish`](/commands/npm-publish)

* `prepublishOnly`
* `prepack`
* `prepare`
* `postpack`
* `publish`
* `postpublish`

`prepare` will not run during `--dry-run`

#### [`npm rebuild`](/commands/npm-rebuild)

* `preinstall`
* `install`
* `postinstall`
* `prepare`

`prepare` is only run if the current directory is a symlink (e.g. with
linked packages)

#### [`npm restart`](/commands/npm-restart)

If there is a `restart` script defined, these events are run, otherwise
`stop` and `start` are both run if present, including their `pre` and
`post` iterations)

* `prerestart`
* `restart`
* `postrestart`

#### [`npm run <user defined>`](/commands/npm-run-script)

* `pre<user-defined>`
* `<user-defined>`
* `post<user-defined>`

#### [`npm start`](/commands/npm-start)

* `prestart`
* `start`
* `poststart`

If there is a `server.js` file in the root of your package, then npm
will default the `start` command to `node server.js`.  `prestart` and
`poststart` will still run in this case.

#### [`npm stop`](/commands/npm-stop)

* `prestop`
* `stop`
* `poststop`

#### [`npm test`](/commands/npm-test)

* `pretest`
* `test`
* `posttest`

#### [`npm version`](/commands/npm-version)

* `preversion`
* `version`
* `postversion`

#### A Note on a lack of [`npm uninstall`](/commands/npm-uninstall) scripts

While npm v6 had `uninstall` lifecycle scripts, npm v7 does not. Removal of a package can happen for a wide variety of reasons, and there's no clear way to currently give the script enough context to be useful.

Reasons for a package removal include:

* a user directly uninstalled this package
* a user uninstalled a dependant package and so this dependency is being uninstalled
* a user uninstalled a dependant package but another package also depends on this version
* this version has been merged as a duplicate with another version
* etc.

Due to the lack of necessary context, `uninstall` lifecycle scripts are not implemented and will not function.

### User

When npm is run as root, scripts are always run with the effective uid
and gid of the working directory owner.

### Environment

Package scripts run in an environment where many pieces of information
are made available regarding the setup of npm and the current state of
the process.

#### path

If you depend on modules that define executable scripts, like test
suites, then those executables will be added to the `PATH` for
executing the scripts.  So, if your package.json has this:

```json
{
  "name" : "foo",
  "dependencies" : {
    "bar" : "0.1.x"
  },
  "scripts": {
    "start" : "bar ./test"
  }
}
```

then you could run `npm start` to execute the `bar` script, which is
exported into the `node_modules/.bin` directory on `npm install`.

#### package.json vars

The package.json fields are tacked onto the `npm_package_` prefix. So,
for instance, if you had `{"name":"foo", "version":"1.2.5"}` in your
package.json file, then your package scripts would have the
`npm_package_name` environment variable set to "foo", and the
`npm_package_version` set to "1.2.5".  You can access these variables
in your code with `process.env.npm_package_name` and
`process.env.npm_package_version`, and so on for other fields.

See [`package.json`](/configuring-npm/package-json) for more on package configs.

#### current lifecycle event

Lastly, the `npm_lifecycle_event` environment variable is set to
whichever stage of the cycle is being executed. So, you could have a
single script used for different parts of the process which switches
based on what's currently happening.

Objects are flattened following this format, so if you had
`{"scripts":{"install":"foo.js"}}` in your package.json, then you'd
see this in the script:

```bash
process.env.npm_package_scripts_install === "foo.js"
```

### Examples

For example, if your package.json contains this:

```json
{
  "scripts" : {
    "install" : "scripts/install.js",
    "postinstall" : "scripts/install.js",
    "uninstall" : "scripts/uninstall.js"
  }
}
```

then `scripts/install.js` will be called for the install
and post-install stages of the lifecycle, and `scripts/uninstall.js`
will be called when the package is uninstalled.  Since
`scripts/install.js` is running for two different phases, it would
be wise in this case to look at the `npm_lifecycle_event` environment
variable.

If you want to run a make command, you can do so.  This works just
fine:

```json
{
  "scripts" : {
    "preinstall" : "./configure",
    "install" : "make && make install",
    "test" : "make test"
  }
}
```

### Exiting

Scripts are run by passing the line as a script argument to `sh`.

If the script exits with a code other than 0, then this will abort the
process.

Note that these script files don't have to be Node.js or even
JavaScript programs. They just have to be some kind of executable
file.

### Best Practices

* Don't exit with a non-zero error code unless you *really* mean it.
  Except for uninstall scripts, this will cause the npm action to
  fail, and potentially be rolled back.  If the failure is minor or
  only will prevent some optional features, then it's better to just
  print a warning and exit successfully.
* Try not to use scripts to do what npm can do for you.  Read through
  [`package.json`](/configuring-npm/package-json) to see all the things that you can specify and enable
  by simply describing your package appropriately.  In general, this
  will lead to a more robust and consistent state.
* Inspect the env to determine where to put things.  For instance, if
  the `npm_config_binroot` environment variable is set to `/home/user/bin`, then
  don't try to install executables into `/usr/local/bin`.  The user
  probably set it up that way for a reason.
* Don't prefix your script commands with "sudo".  If root permissions
  are required for some reason, then it'll fail with that error, and
  the user will sudo the npm command in question.
* Don't use `install`. Use a `.gyp` file for compilation, and `prepare`
  for anything else. You should almost never have to explicitly set a
  preinstall or install script. If you are doing this, please consider if
  there is another option. The only valid use of `install` or `preinstall`
  scripts is for compilation which must be done on the target architecture.
* Scripts are run from the root of the package folder, regardless of what the
  current working directory is when `npm` is invoked. If you want your
  script to use different behavior based on what subdirectory you're in, you
  can use the `INIT_CWD` environment variable, which holds the full path you
  were in when you ran `npm run`.

### See Also

* [npm run-script](/commands/npm-run-script)
* [package.json](/configuring-npm/package-json)
* [npm developers](/using-npm/developers)
* [npm install](/commands/npm-install)


________________________________________________________________________
/MD deps/npm/docs/content/using-npm/workspaces.md
====================================================

---
title: workspaces
section: 7
description: Working with workspaces
---

### Description

**Workspaces** is a generic term that refers to the set of features in the
npm cli that provides support to managing multiple packages from your local
file system from within a singular top-level, root package.

This set of features makes up for a much more streamlined workflow handling
linked packages from the local file system. Automating the linking process
as part of `npm install` and avoiding manually having to use `npm link` in
order to add references to packages that should be symlinked into the current
`node_modules` folder.

We also refer to these packages being auto-symlinked during `npm install` as a
single **workspace**, meaning it's a nested package within the current local
file system that is explicitly defined in the [`package.json`](/configuring-npm/package-json#workspaces)
`workspaces` configuration.

### Defining workspaces

Workspaces are usually defined via the `workspaces` property of the
[`package.json`](/configuring-npm/package-json#workspaces) file, e.g:

```json
{
  "name": "my-workspaces-powered-project",
  "workspaces": [
    "packages/a"
  ]
}
```

Given the above `package.json` example living at a current working
directory `.` that contains a folder named `packages/a` that itself contains
a `package.json` inside it, defining a Node.js package, e.g:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
```

The expected result once running `npm install` in this current working
directory `.` is that the folder `packages/a` will get symlinked to the
`node_modules` folder of the current working dir.

Below is a post `npm install` example, given that same previous example
structure of files and folders:

```
.
+-- node_modules
|  `-- a -> ../packages/a
+-- package-lock.json
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
```

### Getting started with workspaces

You may automate the required steps to define a new workspace using
[npm init](/commands/npm-init). For example in a project that already has a
`package.json` defined you can run:

```
npm init -w ./packages/a
```

This command will create the missing folders and a new `package.json`
file (if needed) while also making sure to properly configure the
`"workspaces"` property of your root project `package.json`.

### Adding dependencies to a workspace

It's possible to directly add/remove/update dependencies of your workspaces
using the [`workspace` config](/using-npm/config#workspace).

For example, assuming the following structure:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   `-- b
       `-- package.json
```

If you want to add a dependency named `abbrev` from the registry as a
dependency of your workspace **a**, you may use the workspace config to tell
the npm installer that package should be added as a dependency of the provided
workspace:

```
npm install abbrev -w a
```

Note: other installing commands such as `uninstall`, `ci`, etc will also
respect the provided `workspace` configuration.

### Using workspaces

Given the [specifities of how Node.js handles module resolution](https://nodejs.org/dist/latest-v14.x/docs/api/modules.html#modules_all_together) it's possible to consume any defined workspace
by its declared `package.json` `name`. Continuing from the example defined
above, let's also create a Node.js script that will require the workspace `a`
example module, e.g:

```
// ./packages/a/index.js
module.exports = 'a'

// ./lib/index.js
const moduleA = require('a')
console.log(moduleA) // -> a
```

When running it with:

`node lib/index.js`

This demonstrates how the nature of `node_modules` resolution allows for
**workspaces** to enable a portable workflow for requiring each **workspace**
in such a way that is also easy to [publish](/commands/npm-publish) these
nested workspaces to be consumed elsewhere.

### Running commands in the context of workspaces

You can use the `workspace` configuration option to run commands in the context
of a configured workspace.
Additionally, if your current directory is in a workspace, the `workspace`
configuration is implicitly set, and `prefix` is set to the root workspace.

Following is a quick example on how to use the `npm run` command in the context
of nested workspaces. For a project containing multiple workspaces, e.g:

```
.
+-- package.json
`-- packages
   +-- a
   |   `-- package.json
   `-- b
       `-- package.json
```

By running a command using the `workspace` option, it's possible to run the
given command in the context of that specific workspace. e.g:

```
npm run test --workspace=a
```

You could also run the command within the workspace.

```
cd packages/a && npm run test
```

Either will run the `test` script defined within the
`./packages/a/package.json` file.

Please note that you can also specify this argument multiple times in the
command-line in order to target multiple workspaces, e.g:

```
npm run test --workspace=a --workspace=b
```

Or run the command for each workspace within the 'packages' folder:
```
npm run test --workspace=packages
```

It's also possible to use the `workspaces` (plural) configuration option to
enable the same behavior but running that command in the context of **all**
configured workspaces. e.g:

```
npm run test --workspaces
```

Will run the `test` script in both `./packages/a` and `./packages/b`.

Commands will be run in each workspace in the order they appear in your `package.json`

```
{
  "workspaces": [ "packages/a", "packages/b" ]
}
```

Order of run is different with:

```
{
  "workspaces": [ "packages/b", "packages/a" ]
}
```

### Ignoring missing scripts

It is not required for all of the workspaces to implement scripts run with the `npm run` command.

By running the command with the `--if-present` flag, npm will ignore workspaces missing target script.

```
npm run test --workspaces --if-present
```

### See also

* [npm install](/commands/npm-install)
* [npm publish](/commands/npm-publish)
* [npm run-script](/commands/npm-run-script)
* [config](/using-npm/config)

