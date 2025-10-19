# Summary

- [Introduction](#index)
- [Issue Tracker](#issues)
- [Cargo Team](#team)
- [Process](#process_index)
    - [Working on Cargo](#process_working_on_cargo)
    - [Release process](#process_release)
    - [Writing an RFC](#process_rfc)
    - [Unstable features](#process_unstable)
    - [Security issues](#process_security)
- [Design Principles](#design)
- [Implementing a Change](#implementation_index)
    - [Architecture](#implementation_architecture)
    - [New packages](#implementation_packages)
    - [New subcommands](#implementation_subcommands)
    - [Data Schemas](#implementation_schemas)
    - [Console Output](#implementation_console)
    - [Filesystem](#implementation_filesystem)
    - [Formatting](#implementation_formatting)
    - [Debugging](#implementation_debugging)
- [Tests](#tests_index)
    - [Running Tests](#tests_running)
    - [Writing Tests](#tests_writing)
    - [Benchmarking and Profiling](#tests_profiling)
    - [Crater](#tests_crater)

# Cargo Contributor Guide

This is the source of the Cargo Contributor Guide, published at
<https://rust-lang.github.io/cargo/contrib/>. It is written in Markdown, using
the [mdbook] tool to convert to HTML. If you are editing these pages, the best
option to view the results is to run `mdbook serve`, which will start a web
server on localhost that you can visit to view the book, and it will
automatically reload each time you edit a page.

This is published via GitHub Actions to GitHub Pages.

[mdbook]: https://rust-lang.github.io/mdBook/


<a id=index></a>

# Introduction

Thank you for your interest in contributing to [Cargo]! This guide provides an
overview of how to contribute to Cargo, how to dive into the code, and how the
testing infrastructure works.

There are many ways to contribute, such as [helping other users], [filing
issues], improving [the documentation], [triaging issues], [fixing bugs], and
working on [small] and [large features].

If you have a general question about Cargo or its internals, feel free to ask
on [Zulip].

This guide assumes you have some familiarity with Rust, and how to use Cargo,
[rustup], and general development tools like [git].

Please also read the [Rust Code of Conduct].

[Cargo]: https://doc.rust-lang.org/cargo/
[Zulip]: https://rust-lang.zulipchat.com/#narrow/stream/246057-t-cargo
[Rust Code of Conduct]: https://www.rust-lang.org/policies/code-of-conduct
[helping other users]: https://users.rust-lang.org/
[filing issues]: #issues
[rustup]: https://rust-lang.github.io/rustup/
[git]: https://git-scm.com/
[the documentation]: https://github.com/rust-lang/cargo/tree/master/src/doc
[fixing bugs]: process/index.md#working-on-issues
[small]: process/index.md#working-on-small-features
[large features]: process/index.md#working-on-large-features
[triaging issues]: issues.md#triaging-issues


<a id=issues></a>

# Issue Tracker

Cargo's issue tracker is located at
<https://github.com/rust-lang/cargo/issues/>. This is the primary spot where
we track bugs and small feature requests. See [Process] for more about our
process for proposing changes.

## Filing issues

We can't fix what we don't know about, so please report problems liberally.
This includes problems with understanding the documentation, unhelpful error
messages, and unexpected behavior.

**If you think that you have identified an issue with Cargo that might
compromise its users' security, please do not open a public issue on GitHub.
Instead, we ask you to refer to Rust's [security policy].**

Opening an issue is as easy as following [this link][new-issues]. There are
several templates for different issue kinds, but if none of them fit your
issue, don't hesitate to modify one of the templates, or click the [Open a
blank issue] link.

The Rust tools are spread across multiple repositories in the Rust
organization. It may not always be clear where to file an issue. No worries!
If you file in the wrong tracker, someone will either transfer it to the
correct one or ask you to move it. Some other repositories that may be
relevant are:

* [`rust-lang/rust`] --- Home for the [`rustc`] compiler and [`rustdoc`].
* [`rust-lang/rustup`] --- Home for the [`rustup`] toolchain installer.
* [`rust-lang/rustfmt`] --- Home for the `rustfmt` tool, which also includes `cargo fmt`.
* [`rust-lang/rust-clippy`] --- Home for the `clippy` tool, which also includes `cargo clippy`.
* [`rust-lang/crates.io`] --- Home for the [crates.io] website.

Issues with [`cargo fix`] can be tricky to know where they should be filed,
since the fixes are driven by `rustc`, and the front-interface is implemented
in Cargo. Feel free to file in the Cargo issue tracker, and it will get moved
to the [`rust-lang/rust`] issue tracker if necessary.

[Process]: #process_index
[security policy]: https://www.rust-lang.org/security.html
[new-issues]: https://github.com/rust-lang/cargo/issues/new/choose
[Open a blank issue]: https://github.com/rust-lang/cargo/issues/new
[`rust-lang/rust`]: https://github.com/rust-lang/rust
[`rust-lang/rustup`]: https://github.com/rust-lang/rustup
[`rust-lang/rustfmt`]: https://github.com/rust-lang/rustfmt
[`rust-lang/rust-clippy`]: https://github.com/rust-lang/rust-clippy
[`rustc`]: https://doc.rust-lang.org/rustc/
[`rustdoc`]: https://doc.rust-lang.org/rustdoc/
[`rustup`]: https://rust-lang.github.io/rustup/
[`rust-lang/crates.io`]: https://github.com/rust-lang/crates.io
[crates.io]: https://crates.io/
[`cargo fix`]: https://doc.rust-lang.org/cargo/commands/cargo-fix.html

## Issue labels

[Issue labels] are very helpful to identify the types of issues and which
category they are related to.

Anyone can apply most labels by posting comments with a form such as:

```text
@rustbot label: +A-doctests, -A-dependency-resolution
```

This example will add the [`A-doctests`] label and remove the
[`A-dependency-resolution`] label.

[Issue labels]: https://github.com/rust-lang/cargo/labels
[`A-doctests`]: https://github.com/rust-lang/cargo/labels/A-doctests
[`A-dependency-resolution`]: https://github.com/rust-lang/cargo/labels/A-dependency-resolution

The labels use a naming convention with short prefixes and colors to indicate
the kind of label:

<style>
.label-color {
    border-radius:0.5em;
}
table td:nth-child(2) {
    white-space: nowrap;
}
</style>


| Labels | Color | Description |
|--------|-------|-------------|
| [A-]   | <span class="label-color" style="background-color:#fbca04;">&#x2003;</span>&nbsp;Yellow | The **area** of the project an issue relates to. |
| [beta-] | <span class="label-color" style="background-color:#1e76d9;">&#x2003;</span>&nbsp;Dark Blue | Tracks changes which need to be [backported to beta][beta-backport] |
| [C-] | <span class="label-color" style="background-color:#f5f1fd;">&#x2003;</span>&nbsp;Light Purple | The **category** of an issue. |
| [Command-] | <span class="label-color" style="background-color:#5319e7;">&#x2003;</span>&nbsp;Dark Purple | The `cargo` command it is related to. |
| [E-] | <span class="label-color" style="background-color:#02e10c;">&#x2003;</span>&nbsp;Green | The **experience** level necessary to fix an issue. |
| [I-] | <span class="label-color" style="background-color:#fc2929;">&#x2003;</span>&nbsp;Red | The **importance** of the issue. |
| [O-] | <span class="label-color" style="background-color:#7e7ec8;">&#x2003;</span>&nbsp;Purple Grey | The **operating system** or platform that the issue is specific to. |
| [P-] | <span class="label-color" style="background-color:#eb6420;">&#x2003;</span>&nbsp;Orange | The issue **priority**. |
| [regression-] | <span class="label-color" style="background-color:#e4008a;">&#x2003;</span>&nbsp;Pink | Tracks regressions from a stable release. |
| [relnotes] | <span class="label-color" style="background-color:#fad8c7;">&#x2003;</span>&nbsp;Light Orange | Marks issues or PRs that should be highlighted in the [Rust release notes] of the next release. |
| [S-] | Varies | Tracks the **status** of issues and pull requests (see [Issue status labels](#issue-status-labels)) |
| [Z-] | <span class="label-color" style="background-color:#453574;">&#x2003;</span>&nbsp;Dark Blue | Unstable, [nightly features]. |


[A-]: https://github.com/rust-lang/cargo/labels?q=A
[beta-]: https://github.com/rust-lang/cargo/labels?q=beta
[beta-backport]: https://forge.rust-lang.org/release/backporting.html#beta-backporting-in-rust-langcargo
[C-]: https://github.com/rust-lang/cargo/labels?q=C
[Command-]: https://github.com/rust-lang/cargo/labels?q=Command
[E-]: https://github.com/rust-lang/cargo/labels?q=E
[I-]: https://github.com/rust-lang/cargo/labels?q=I
[nightly features]: https://doc.rust-lang.org/nightly/cargo/reference/unstable.html
[O-]: https://github.com/rust-lang/cargo/labels?q=O
[P-]: https://github.com/rust-lang/cargo/labels?q=P
[regression-]: https://github.com/rust-lang/cargo/labels?q=regression
[relnotes]: https://github.com/rust-lang/cargo/issues?q=label%3Arelnotes
[Rust release notes]: https://github.com/rust-lang/rust/blob/master/RELEASES.md
[S-]: https://github.com/rust-lang/cargo/labels?q=S
[Z-]: https://github.com/rust-lang/cargo/labels?q=nightly

### Issue status labels

The `S-` prefixed *status* labels are the primary mechanism we use to track
what is happening with an issue and what it is waiting on. The following is a
list of the status labels and what they mean. This is listed roughly in the
order that an issue might go through, though issues will often jump to
different steps, or in rare cases have multiple statuses.

* **[S-triage]** --- New issues get this label automatically assigned to them
  to indicate that nobody has yet looked at them, and they need someone to
  assign other labels and decide what the next step is.

* **[S-needs-info]** --- Needs more info, such as a reproduction or more
  background for a feature request.

  Anyone is welcome to help with providing additional info to help reproduce
  or provide more detail on use cases and such. But usually this is a request
  to the initial author.

  When adding this label, there should also usually be a comment that goes
  along with it stating the information requested.

* **[S-needs-team-input]** --- Needs input from team on whether/how to
  proceed.

  Here it is essentially blocked waiting for a team member to move it to the
  next stage.

* **[S-needs-design]** --- Needs someone to work further on the design for the
  feature or fix.

  Anyone is welcome to help at this stage, but it should be clear that it is
  not yet accepted. It is expected that people should contribute comments and
  ideas to the issue which furthers the process of fleshing out what is
  needed, or alternate ideas. This may also require reaching out to the wider
  community via forums and such.

* **[S-needs-rfc]** --- Needs an [RFC] before this can make more progress.

  Anyone is welcome to help at this stage, but it should be clear that it is
  not yet accepted.
  See [Before creating an RFC](https://github.com/rust-lang/rfcs?tab=readme-ov-file#before-creating-an-rfc)
  for next steps.

* **[S-needs-mentor]** --- Needs a Cargo team member to commit to helping and
  reviewing.

  This is for something that is accepted, such as after an RFC or a team
  discussion, or an obvious issue that just needs fixing, but no team member
  is available to help or review.

* **[S-accepted]** --- Issue or feature is accepted, and has a team member
  available to help mentor or review.

* **[S-waiting-on-feedback]** --- An implemented feature is waiting on
  community feedback for bugs or design concerns.

  This is typically used on a [tracking issue] after it has been implemented
  to indicate what it is waiting on.


[S-triage]: https://github.com/rust-lang/cargo/labels/S-triage
[S-needs-info]: https://github.com/rust-lang/cargo/labels/S-needs-info
[S-needs-team-input]: https://github.com/rust-lang/cargo/labels/S-needs-team-input
[S-needs-design]: https://github.com/rust-lang/cargo/labels/S-needs-design
[S-needs-rfc]: https://github.com/rust-lang/cargo/labels/S-needs-rfc
[S-needs-mentor]: https://github.com/rust-lang/cargo/labels/S-needs-mentor
[S-accepted]: https://github.com/rust-lang/cargo/labels/S-accepted
[S-waiting-on-feedback]: https://github.com/rust-lang/cargo/labels/S-waiting-on-feedback
[RFC]: https://github.com/rust-lang/rfcs/
[tracking issue]: https://github.com/rust-lang/cargo/labels/C-tracking-issue

## Triaging issues

Triaging issues involves processing issues to assign appropriate labels, make
sure the issue has sufficient information, and to decide the next steps.
When new issues are filed, they should automatically get the [S-triage] label
assuming the author uses one of the templates. This helps identify which
issues have not yet been triaged.

There are several things to consider when triaging an issue:

* Is this a duplicate? Search the issue tracker (including closed issues) to
  see if there is an issue with a similar or identical root cause to what is reported.
  We generally focus issues around root causes so alternative solutions can be
  discussed and evaluated together.
  If it is obviously a duplicate, write a comment that it is a duplicate of the
  other issue, and close the issue.
  If it isn't obvious that it is a duplicate, leave a comment asking the author
  if the other issue covers what they reported.

* For a bug, check if the report contains enough information to reproduce it.
  If you can't reproduce it, solicit more information from the author to
  better understand the issue.
  Change the label from [S-triage] to [S-needs-info] if this is the case.

* Add labels that describe what the issue is related to.

    * Add the appropriate [A-], [Command-], [O-], and [Z-] prefixed labels.
    * If this is a regression from stable, add one of the [regression-]
      prefixed labels (depending on if it is a regression in an already
      released stable release, or it is in nightly).

* Assuming the issue looks valid, switch the [S-triage] label for one of the following:

  * [S-needs-team-input] --- The next steps are not clear, and the Cargo team
    needs to discuss whether or not to proceed and what needs to be done to
    address the issue.
  * [S-needs-design] --- The resolution of the issue or small feature request
    will need more work to come up with the appropriate design.
  * [S-needs-rfc] --- This is a large feature request that will require a
    public design process.
  * [S-needs-mentor] --- This is something the Cargo team wants to address,
    but does not currently have the capacity to help with reviewing. **(reserved for Cargo team)**
  * [S-accepted] --- This is something that clearly needs to be addressed, and
    a Cargo team member has volunteered to help review. **(reserved for Cargo team)**

Anyone is welcome to help with the triaging process. You can help with
reproducing issues, checking for duplicates, gathering more information from
the reporter, assigning labels using [`@rustbot` comments](#issue-labels), and
creating a test using [Cargo's testsuite] ([example][cargotest-example]).

[Cargo's testsuite]: #tests_writing
[cargotest-example]: https://github.com/rust-lang/cargo/issues/11628#issuecomment-1411088951


<a id=team></a>

# Cargo Team

## Mission

The Cargo Team is a group of volunteers that support the Rust community in developing and maintaining Cargo, the Rust package manager and build tool.
The team is responsible for deciding how Cargo and its related libraries operate and evolve.
The team has a shared responsibility with the [crates.io team] for the design and usage of Cargo's index format and its registry API as it relates to the [crates.io] service.

The team is expected to keep Cargo in an operational state, to support Rust's 6-week release cycle, and to uphold the [Design Principles] of Cargo.

[crates.io team]: https://www.rust-lang.org/governance/teams/crates-io
[crates.io]: https://crates.io/
[Design Principles]: #design

## Team membership

The Cargo Team consists of team members with one serving as a team leader.
The team leader is responsible for coordinating the team and providing a contact point with other teams.
The leader is selected by consensus of the existing members with no objections.

Membership is maintained in the [Rust team database].

[Rust team database]: https://github.com/rust-lang/team/blob/master/teams/cargo.toml

### Membership expectations

Team members are expected to participate in voting on RFCs and major change proposals

Team members are expected to regularly participate in at least some of the following membership-related activities.
Members are not expected to participate in all of these activities, but exhibit some interest and involvement in the project that covers some of these activities.

- Attending meetings
- Reviewing contributions (auto-assignment is managed in [triagebot.toml])
- Triaging and responding to issues
- Mentoring new contributors
- Shepherding major changes and RFCs
- Coordinating interaction with other Rust groups and outside interests
- Managing and updating the policies of the Cargo Team itself
- Keeping up with maintenance of the Cargo codebase, ensuring it stays functional and that infrastructure and team processes continue to run smoothly

Breaks and vacations are welcome and encouraged.
If a member is no longer participating after a few months, they may be asked to step down.

Members are required to always:

- Represent the Rust project in a way that upholds the [Rust code of conduct][coc] to a high standard.
- Represent the Cargo Team in a way that upholds the expectations of this charter, and be friendly, welcoming, and constructive with contributors and users.

Members are given privileges, such as:

- Merge permissions (GitHub permissions)
- Issue and project management (GitHub permissions)
- Voting and decision making (RFCs, major changes)
- Access to private communications related to team management and security discussions

[coc]: https://www.rust-lang.org/policies/code-of-conduct
[triagebot.toml]: https://github.com/rust-lang/cargo/blob/master/triagebot.toml

### Meetings

The primary focus of team meetings is for unblocking designs, including discussing
- [RFCs][t-cargo-rfcs]
- [FCPs][cargo-status-tracker]
- [Items marked **I-nominated-to-discuss**][i-nominated]
- [Items marked **S-needs-team-input**][s-team-input]
- Topics proposed on [Zulip][zulip-meeting], subject to availability

Generally, topics for the agenda should be posted a day in advance to give people the opportunity to review them before the meeting.

The team meets on a weekly basis ([ics][meeting-ics]) on a video chat.
Members of the community are welcome to attend.
Minutes for all meetings are recorded on [HackMD][meeting-minutes].

For discussing contributions, [Office Hours](../process/index.md#mentorship) would be more appropriate venue.

[t-cargo-rfcs]: https://github.com/rust-lang/rfcs/pulls?q=is%3Apr+is%3Aopen+label%3AT-cargo
[cargo-status-tracker]: https://github.com/orgs/rust-lang/projects/47
[i-nominated]: https://github.com/rust-lang/cargo/labels/I-nominated-to-discuss
[s-team-input]: https://github.com/rust-lang/cargo/labels/S-needs-team-input
[meeting-ics]: https://rust-lang.github.io/calendar/cargo/team-meeting.ics
[meeting-minutes]: https://hackmd.io/@rust-cargo-team?tags=%5B%22meetings%22%5D
[zulip-meeting]: https://rust-lang.zulipchat.com/#narrow/channel/246057-t-cargo/topic/Cargo.20meeting

### Becoming a member

A contributor can become a member of the Cargo Team by requesting a review or being nominated by one of the existing members.
They can be added by unanimous consent of the team.
The team lead or another member of the team will also confirm with the moderation team that there are no concerns involving the proposed team member.

Contributors who wish to join the team should exhibit an interest in carrying the design principles of Cargo and participate in some of the activities listed above in [Membership Expectations](#membership-expectations).

Members may leave at any time, preferably by letting the team know ahead of time.

## Team resources

### Zulip

The Cargo team has several streams on Zulip:

- [`#t-cargo`](https://rust-lang.zulipchat.com/#narrow/stream/246057-t-cargo) --- General public channel for discussing any topics related to Cargo.
- [`#t-cargo/build-integration`](https://rust-lang.zulipchat.com/#narrow/stream/334885-t-cargo.2Fbuild-integration) --- Discussions about integration with build systems.
- [`#t-cargo/PubGrub`](https://rust-lang.zulipchat.com/#narrow/stream/260232-t-cargo.2FPubGrub) --- Discussions about the [PubGrub](https://github.com/pubgrub-rs/pubgrub) project.

The following are private streams for the Cargo team. The team should avoid using this unless necessary (for example, discussing a security issue or team and meeting organization).

- [`#t-cargo/private`](https://rust-lang.zulipchat.com/#narrow/stream/296752-t-cargo.2Fprivate) --- Private channel for discussions among the team.
- [`#t-cargo/meetings`](https://rust-lang.zulipchat.com/#narrow/stream/364532-t-cargo.2Fmeetings) --- Private channel for discussions about team meetings, including non-members who regularly attend the meetings.

### HackMD

The Cargo team has a shared, public workspace on HackMD at <https://hackmd.io/@rust-cargo-team> for drafting documents and recording meeting minutes.

Since this HackMD workspace is using the free service, it does not support private documents. If you need to draft a private document, create it in your personal workspace and use private channels to share the link.

## Decision process

The team uses a consensus-driven process for making decisions ranging from new features and major changes to management of the team itself.
The degree of process is correlated with the degree of change being proposed:

- Bug fixes, refactorings, documentation updates, and other small changes are usually delegated to a single team member (who is not the author) to approve based on their judgement.
  Team members may also solicit feedback from other members or the whole team for any change should they want to gather other perspectives from the team.

  Some examples of what this might cover are:
  - Bug fixes that do not introduce backwards-incompatible changes, and adhere to Cargo's expected behavior.
  - Addition of new warnings, or other diagnostic changes.
  - New or updated documentation.
  - Localized refactorings (that is, those that do not have a significant, wide-ranging impact to the usage and maintenance of the codebase).
  - Minor or planned changes to Cargo's console output.
  - Beta backports that clearly address a regression, and are expected to be low-risk.
  - Development of a previously approved unstable feature that matches the expected development of that feature.

- Small features or changes, large refactorings, or major changes to Cargo's codebase or process require an approval by the team via consensus.
  These decisions can be done via the FCP process of [rfcbot], or in an ad-hoc manner such as during a team meeting.
  rfcbot FCP requests do not require waiting for the 10-day feedback window if there is a complete team consensus, as this process is mostly aimed at polling the team rather than publicly soliciting feedback.
  Though, public feedback is welcome at any time.

  Some examples of what this might cover are:
  - Addition of a new, minor command-line argument, or an addition of an option to an existing one.
  - Addition of new fields and values to JSON outputs.
  - A bug fix or change that may technically involve a backwards-incompatible change.
    See the [Backwards compatibility] section for some examples.
  - Documentation changes that may substantially change the expected usage of Rust and Cargo.
    For example, the [SemVer chapter] contains subjective prescriptions for how users should develop their code.
  - A significant change in Cargo's console output.
  - A significant change to Cargo's code structure, or how maintenance or usage of the Cargo codebase is handled.
  - Beta backports that are risky or have any uncertainty about their necessity.
  - [Stable backports].
    These usually also require involvement with the Release team.
  - A significant change to the management of the Cargo team itself or the processes it uses, such as significant updates to this document.
  - Addition of new members to the Cargo team, or other actions involving the team membership.
    These decisions are usually processed via private channels by the entirety of the team.
  - A change that is a "one-way door".
    That is, something that is difficult to reverse without breaking backwards compatibility.
  - New or transferred "Intentional Artifact" crates to the team, see also [Rust crate ownership policy](https://forge.rust-lang.org/policies/crate-ownership.html)

- Larger features should usually go through the [RFC process].
  This usually involves first soliciting feedback from the Cargo team and the rest of the community, often via the [Rust Internals] discussion board, [Cargo's issue tracker], and the [Zulip] channel.
  If there is positive feedback to the idea, the next step is to formally post an RFC on the RFC repo.
  The community and the Cargo team will have an opportunity to provide feedback on the proposal.
  After some period of time, the Cargo team may decide to either accept, postpone, or close a proposal based on the interest in the proposal and the team's availability.

  Some examples of what this might cover are:
  - Major changes or new features or options in `Cargo.toml` or the config files.
  - Changes to the registry index or API.
  - New or changed CLI options that are expected to have a significant impact on how Cargo is used.
  - New `cargo` commands that are not trivial.
    In some cases, the team may decide to adopt a pre-existing external command without an RFC if the command has already been broadly adopted.

- Stabilization of [Unstable] features requires an approval via the FCP process of [rfcbot].
  This provides a final opportunity to solicit feedback from the public, and for the Cargo team to agree via consensus.

- The team may decide to experiment with larger features without starting the RFC process if it is an initiative that the team has consensus that it is something they want to pursue.
  This is usually reserved for something that has an unclear path that the RFC process is not expected to provide feedback that would substantially move the process forward.
  Such experiments are expected to be nightly-only (see the [Unstable] chapter), and involve efforts to shape the final result via exploration, testing, and public involvement.
  Any such features *must* ultimately have an RFC approved before they can be stabilized.

[rfcbot]: https://github.com/rust-lang/rfcbot-rs
[RFC process]: https://github.com/rust-lang/rfcs/
[Rust Internals]: https://internals.rust-lang.org/
[Unstable]: #process_unstable
[Backwards compatibility]: design.md#backwards-compatibility
[Stable backports]: process/release.md#stable-backports
[SemVer chapter]: https://doc.rust-lang.org/cargo/reference/semver.html

## Intentional Artifacts

Per the [Rust crate ownership policy](https://forge.rust-lang.org/policies/crate-ownership.html), the Cargo team's "Intentional Artifacts" include:

- [build-rs](https://crates.io/crates/build-rs)
- [cargo-credential](https://crates.io/crates/cargo-credential)
- [cargo-platform](https://crates.io/crates/cargo-platform)
- [cargo-util-schemas](https://crates.io/crates/cargo-util-schemas)
- [crates-io](https://crates.io/crates/crates-io)

## Contacting the team

The team may be contacted through several channels:

- If you have a **security concern**, please refer to Rust's [security policy] for the correct contact method.
- Issues and feature requests can be submitted to [Cargo's issue tracker].
  Please see the [Issues chapter] for more detail.
- The [`t-cargo` Zulip channel][Zulip] stream is the chat platform the Cargo Team uses to coordinate on.
- The <cargo@rust-lang.org> email address can be used to contact the team.
  However, using one of the other channels is strongly encouraged.

[Zulip]: https://rust-lang.zulipchat.com/#narrow/stream/246057-t-cargo
[security policy]: https://www.rust-lang.org/security.html
[Cargo's issue tracker]: https://github.com/rust-lang/cargo/issues/
[Issues chapter]: #issues


<a id=process_index></a>

# Process

This chapter gives an overview of how Cargo comes together, and how you can be
a part of that process.

See the [Working on Cargo] chapter for an overview of the contribution
process.

Please read the guidelines below before working on an issue or new feature.

[Working on Cargo]: #working-on-cargo

## Mentorship

Some Cargo team members are available to directly mentor contributions to Cargo.
See the [office hours] page for more information.

[office hours]: https://github.com/rust-lang/cargo/wiki/Office-Hours

## Roadmap

The [Roadmap Project Board] is used for tracking major initiatives. This gives
an overview of the things the team is interested in and thinking about.

The [RFC Project Board] is used for tracking [RFCs].

[the 2020 roadmap]: https://blog.rust-lang.org/inside-rust/2020/01/10/cargo-in-2020.html
[Roadmap Project Board]: https://github.com/orgs/rust-lang/projects/37
[RFC Project Board]: https://github.com/orgs/rust-lang/projects/36
[RFCs]: https://github.com/rust-lang/rfcs/

## Working on issues

Issues labeled with the [S-accepted] [label] are typically issues that the
Cargo team wants to see addressed. If you are interested in one of those, and
it has not already been assigned to someone, leave a comment. See [Issue
assignment](#issue-assignment) below for assigning yourself.

When possible, the Cargo team will try to also include [E-easy], [E-medium],
or [E-hard] labels to try to give an estimate of the difficulty involved with
the issue.

If there is a specific issue that you are interested in, but it is not marked
as [S-accepted], leave a comment on the issue. If a Cargo team member has the
time to help out, they will respond to help with the next steps.

[E-easy]: https://github.com/rust-lang/cargo/labels/E-easy
[E-medium]: https://github.com/rust-lang/cargo/labels/E-medium
[E-hard]: https://github.com/rust-lang/cargo/labels/E-hard
[S-accepted]: https://github.com/rust-lang/cargo/labels/S-accepted
[label]: ../issues.md#issue-labels

## Working on small features

Small feature requests are typically managed on the [issue
tracker][issue-feature-request]. Features that the Cargo team have approved
will have the [S-accepted] label.

If there is a feature request that you are interested in, but it is not marked
as [S-accepted], feel free to leave a comment expressing your interest. If a
Cargo team member has the time to help out, they will respond to help with the
next steps. Keep in mind that the Cargo team has limited time, and may not be
able to help with every feature request. Most of them require some design
work, which can be difficult. Check out the [design principles chapter] for
some guidance.

## Working on large features

Cargo follows the Rust model of evolution. Major features usually go through
an [RFC process]. Therefore, before opening a feature request issue create a
Pre-RFC thread on the [internals][irlo] forum to get preliminary feedback.

Implementing a feature as a [custom subcommand][subcommands] is encouraged as
it helps demonstrate the demand for the functionality and is a great way to
deliver a working solution faster as it can iterate outside of Cargo's release
cadence.

See the [unstable chapter] for how new major features are typically
implemented.

[unstable chapter]: #process_unstable

## Bots and infrastructure

The Cargo project uses several bots:

* [GitHub Actions] are used to automatically run all tests for each PR.
* [triagebot] automatically assigns reviewers for PRs, see [PR Assignment] for
  how to configure.
* [GitHub merge queue] is used to merge PRs. See [The merging process].
* [triagebot] is used for assigning issues to non-members, see [Issue
  assignment](#issue-assignment).
* [rfcbot] is used for making asynchronous decisions by team members.

[GitHub merge queue]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
[The merging process]: working-on-cargo.md#the-merging-process
[GitHub Actions]: https://github.com/features/actions
[triagebot]: https://forge.rust-lang.org/triagebot/index.html
[rfcbot]: https://github.com/rust-lang/rfcbot-rs
[PR Assignment]: https://forge.rust-lang.org/triagebot/pr-assignment.html

## Issue assignment

Normally, if you plan to work on an issue that has been marked with the
[S-accepted] label, it is sufficient just to leave a comment that you are
working on it. We also have a bot that allows you to formally claim an issue
by entering the text `@rustbot claim` in a comment. See the [Issue Assignment] docs
on how this works.


[Issue Assignment]: https://forge.rust-lang.org/triagebot/issue-assignment.html
[team]: https://www.rust-lang.org/governance/teams/dev-tools#cargo
[Zulip]: https://rust-lang.zulipchat.com/#narrow/stream/246057-t-cargo
[issue-feature-request]: https://github.com/rust-lang/cargo/labels/C-feature-request
[Feature accepted]: https://github.com/rust-lang/cargo/labels/Feature%20accepted
[design principles #chapter]: design
[RFC process]: #process_rfc
[irlo]: https://internals.rust-lang.org/
[subcommands]: https://doc.rust-lang.org/cargo/reference/external-tools.html#custom-subcommands


<a id=process_working_on_cargo></a>

# Working on Cargo

This chapter gives an overview of how to build Cargo, make a change, and
submit a Pull Request.

0. [Before hacking on Cargo.](#before-hacking-on-cargo)
1. [Check out the Cargo source.](#checkout-out-the-source)
2. [Building Cargo.](#building-cargo)
3. [Making a change.](#making-a-change)
4. [Writing and running tests.](../tests/index.md)
5. [Submitting a Pull Request.](#submitting-a-pull-request)
6. [The merging process.](#the-merging-process)

## Before hacking on Cargo

We encourage people to discuss their design before hacking on code. This gives
the Cargo team a chance to know your idea more. Sometimes after a discussion,
we even find a way to solve the problem without coding! Typically, you
[file an issue] or start a thread on the [internals forum] before submitting a
pull request.

Please read [the process] of how features and bugs are managed in Cargo.
**Only issues that have been explicitly marked as [accepted] will be reviewed.**

## Checkout the source

We use the "fork and pull" model [described here][development-models], where
contributors push changes to their personal fork and [create pull requests] to
bring those changes into the source repository. Cargo uses [git] and [GitHub]
for all development.

1. Fork the [`rust-lang/cargo`] repository on GitHub to your personal account
   (see [GitHub docs][how-to-fork]).
2. Clone your fork to your local machine using `git clone` (see [GitHub
   docs][how-to-clone])
3. It is recommended to start a new branch for the change you want to make.
   All Pull Requests are made against the master branch.

## Building Cargo

Cargo is built by...running `cargo`! There are a few prerequisites that you
need to have installed:

* `rustc` and `cargo` need to be installed. Cargo is expected to build and
  test with the current stable, beta, and nightly releases. It is your choice
  which to use. Nightly is recommended, since some nightly-specific tests are
  disabled when using the stable release. But using stable is fine if you
  aren't working on those.
* A C compiler (typically gcc, clang, or MSVC).
* [git]
* Unix:
    * pkg-config
    * OpenSSL (`libssl-dev` on Ubuntu, `openssl-devel` on Fedora)
* macOS:
    * OpenSSL ([homebrew] is recommended to install the `openssl` package)

If you can successfully run `cargo build`, you should be good to go!

[homebrew]: https://brew.sh/

## Running Cargo

You can use `cargo run` to run cargo itself, or you can use the path directly
to the cargo binary, such as `target/debug/cargo`.

If you are using [`rustup`], beware that running the binary directly can cause
issues with rustup overrides. Usually, when `cargo` is executed as part of
rustup, the toolchain becomes sticky (via an environment variable), and all
calls to `rustc` will use the same toolchain. But when `cargo` is not run via
rustup, the toolchain may change based on the directory. Since Cargo changes
the directory for each compilation, this can cause different calls to `rustc`
to use different versions. There are a few workarounds:

* Don't use rustup overrides.
* Use `rustup run <toolchain> target/debug/cargo` to specify the toolchain(rustc) to use.
  For example, `rustup run nightly target/debug/cargo`.
* Set the `RUSTC` environment variable to a specific `rustc` executable (not
  the rustup wrapper).
* Create a [custom toolchain]. This is a bit of a hack, but you can create a
  directory in the rustup `toolchains` directory, and create symlinks for all
  the files and directories in there to your toolchain of choice (such as
  nightly), except for the `cargo` binary, which you can symlink to your
  `target/debug/cargo` binary in your project directory.

*Normally*, all development is done by running Cargo's test suite, so running
it directly usually isn't required. But it can be useful for testing Cargo on
more complex projects.

[`rustup`]: https://rust-lang.github.io/rustup/
[custom toolchain]: https://rust-lang.github.io/rustup/concepts/toolchains.html#custom-toolchains

## Making a change

Some guidelines on working on a change:

* All code changes are expected to comply with the formatting suggested by
  `rustfmt`. You can use `rustup component add rustfmt` to install `rustfmt`
  and use `cargo fmt` to automatically format your code.
* Include tests that cover all non-trivial code. See the [Testing chapter] for
  more about writing and running tests.
* All code should be warning-free. This is checked during tests.

## Submitting a Pull Request

After you have committed your work, and pushed it to GitHub, you can
open a Pull Request

* Push your commits to GitHub and create a pull request against Cargo's
  `master` branch.
* Include a clear description of what the change is and why it is being made.
* Use [GitHub's keywords] in the description to automatically link to an issue
  if the PR resolves the issue. For example `Closes #1234` will link issue
  #1234 to the PR. When the PR is merged, GitHub will automatically close the
  issue.

[`@rustbot`] will automatically assign a reviewer for the PR. It
may take at least a few days for someone to respond. If you don't get a
response in over a week, feel free to ping the assigned reviewer.

When your PR is submitted, GitHub automatically runs all tests. The GitHub
interface will show a green checkmark if it passes, or a red X if it fails.
There are links to the logs on the PR page to diagnose any issues. The tests
typically finish in under 30 minutes.

The reviewer might point out changes deemed necessary. Large or tricky changes
may require several passes of review and changes.

> **tip:** Prefer atomic commits where each commit is a single, complete, and coherent unit of work.
> For example, if your feature work leads to renaming a module, make the rename its own commit.
> However, adding an internal function that is unused is not complete or coherent.
>
> As part of your atomic commits, prefer adding tests as their own commit *before* any functionality changes.
> The tests should pass in each commit, demonstrating the behavior before your
> change and how each commit affects behavior.
> This makes it easier for reviewers and community members to understand the
> precise details of the side effects of your change and gives you confidence
> that your tests are verifying the right behavior.
>
> Examples:
> - [#13910: fix: remove symlink dir on Windows](https://github.com/rust-lang/cargo/pull/13910)
> - [#14006: fix(add): Avoid escaping double-quotes by using string literals](https://github.com/rust-lang/cargo/pull/14006)

### Status labeling

PRs will get marked with [labels] like [`S-waiting-on-review`] or [`S-waiting-on-author`] to indicate their status.
The [`@rustbot`] bot can be used by anyone to adjust the labels.
If a PR gets marked as `S-waiting-on-author`, and you have pushed new changes that you would like to be reviewed, you can write a comment on the PR with the text `@rustbot ready`.
The bot will switch the labels on the PR.

More information about these commands can be found at the [shortcuts documentation].

[labels]: https://github.com/rust-lang/cargo/labels
[`S-waiting-on-review`]: https://github.com/rust-lang/cargo/labels/S-waiting-on-review
[`S-waiting-on-author`]: https://github.com/rust-lang/cargo/labels/S-waiting-on-author
[`@rustbot`]: https://github.com/rustbot
[shortcuts documentation]: https://forge.rust-lang.org/triagebot/shortcuts.html

## The merging process

After a reviewer has approved your PR,
they will add the PR to [GitHub merge queue].
The merge queue will create a temporary branch with your PR,
and run all required jobs.
If it fails, it will be removed from the queue.
The merge queue ensures that the master branch is always in a good state,
and that merges are processed one at a time.
The [merge queue dashboard] shows the current queued pull requests.

Assuming everything works, congratulations! It may take at least a week for
the changes to arrive on the nightly channel. See the [release chapter] for
more information on how Cargo releases are made.

[development-models]: https://help.github.com/articles/about-collaborative-development-models/
[create pull requests]: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
[how-to-fork]: https://docs.github.com/en/github/getting-started-with-github/fork-a-repo
[`rust-lang/cargo`]: https://github.com/rust-lang/cargo/
[git]: https://git-scm.com/
[GitHub]: https://github.com/
[how-to-clone]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[Testing chapter]: #tests_index
[GitHub's keywords]: https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
[GitHub merge queue]: https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue
[merge queue dashboard]: https://github.com/rust-lang/cargo/queue/master
[release chapter]: #process_release
[internals forum]: https://internals.rust-lang.org/c/tools-and-infrastructure/cargo
[file an issue]: https://github.com/rust-lang/cargo/issues
[the process]: #process_index
[accepted]: https://github.com/rust-lang/cargo/issues?q=is%3Aissue+is%3Aopen+label%3AS-accepted


<a id=process_release></a>

# Release process

Cargo is released with `rustc` using a ["train model"][choochoo]. After a
change lands in Cargo's master branch, it will be synced with the
[rust-lang/rust] repository by a Cargo team member, which happens about once a
week. If there are complications, it can take longer. After it is synced and
merged, the changes will appear in the next nightly release, which is usually
published around 00:30 UTC.

After changes are in the nightly release, they will make their way to the
stable release anywhere from 6 to 12 weeks later, depending on when during the
cycle it landed.

The current release schedule is posted on the [Rust Forge]. See the [release
process] for more details on how Rust's releases are created. Rust releases
are managed by the [Release team].

[Rust Forge]: https://forge.rust-lang.org/

## Build process

The build process for Cargo is handled as part of building Rust. Every PR on
the [rust-lang/rust] repository creates a full collection of release artifacts
for every platform. The code for this is in the [`dist` bootstrap module].
Every night at 00:00 UTC, the artifacts from the most recently merged PR are
promoted to the nightly release channel. A similar process happens for beta
and stable releases.

[`dist` bootstrap module]: https://github.com/rust-lang/rust/blob/master/src/bootstrap/src/core/build_steps/dist.rs

## Submodule updates

Cargo is tracked in the [rust-lang/rust] repository using a [git submodule].
It is updated manually about once a week by a Cargo team member.
However, anyone is welcome to update it as needed.

[@ehuss] has a tool called [subup](https://github.com/ehuss/subup) to automate the process of updating the submodule, updating the lockfile, running tests, and creating a PR.
Running the tests ahead-of-time helps avoid long cycle times waiting for bors if there are any errors.
Subup will also provide a message to include in the PR with a list of all PRs it covers.
Posting this in the PR message also helps create reference links on each Cargo PR to the submodule update PR to help track when it gets merged.

The following is an example of the command to run in a local clone of rust-lang/rust to run a certain set of tests of things that are likely to get broken by a Cargo update:

```bash
subup --up-branch update-cargo \
    --commit-message "Update cargo" \
    --test="src/tools/linkchecker tidy \
        src/tools/cargo \
        src/tools/rustfmt" \
    src/tools/cargo
```

If doing a [beta backport](#beta-backports), the command is similar, but needs to point to the correct branches:

```bash
subup --up-branch update-beta-cargo \
    --rust-branch beta \
    --set-config rust.channel=beta \
    --commit-message "[beta] Update cargo" \
    --test="src/tools/linkchecker tidy \
        src/tools/cargo \
        src/tools/rustfmt" \
    rust-1.66.0:src/tools/cargo
```

[@ehuss]: https://github.com/ehuss/
[git submodule]: https://git-scm.com/book/en/v2/Git-Tools-Submodules

## Version updates

Shortly after each major release, a Cargo team member will post a PR to update
Cargo's version in `Cargo.toml`. Cargo's library is permanently unstable, so
its version number starts with a `0`. The minor version is always 1 greater
than the Rust release it is a part of, so cargo 0.49.0 is part of the 1.48
Rust release. The [CHANGELOG] is also usually updated at this time.

Also, any version-specific checks that are no longer needed can be removed.
For example, some tests are disabled on stable if they require some nightly
behavior. Once that behavior is available on the new stable release, the
checks are no longer necessary. (I usually search for the word "nightly" in
the testsuite directory, and read the comments to see if any of those nightly
checks can be removed.)

Sometimes Cargo will have a runtime check to probe `rustc` if it supports a
specific feature. This is usually stored in the [`TargetInfo`] struct. If this
behavior is now stable, those checks should be removed.

Cargo has several other packages in the [`crates/` directory]. If any of these
packages have changed, the version should be bumped **before the beta
release**. It is rare that these get updated. Bumping these as-needed helps
avoid churning incompatible version numbers. This process should be improved
in the future!

[@ehuss] has a tool called [cargo-new-release] to automate the process of doing a version bump.
It runs through several steps:
1. Creates a branch
2. Updates the version numbers
3. Creates a changelog for anything on the master branch that is not part of beta
4. Creates a changelog for anything on the beta branch

It opens a browser tab for every PR in order to review each change.
It places each PR in the changelog with its title, but usually every PR should be rewritten to explain the change from the user's perspective.
Each PR should also be categorized as an Addition, Change, Fix, or Nightly-only change.
Most PRs are deleted, since they are not relevant to users of Cargo.
For example, remove all PRs related to Cargo internals, infrastructure, documentation, error changes, refactorings, etc.
Usually about half of the PRs get removed.
This process usually takes @ehuss about an hour to finish.

[@ehuss]: https://github.com/ehuss/
[cargo-new-release]: https://github.com/ehuss/cargo-new-release
[`crates/` directory]: https://github.com/rust-lang/cargo/tree/master/crates

## Docs publishing

Docs are automatically published during the Rust release process. The nightly
channel's docs appear at <https://doc.rust-lang.org/nightly/cargo/>. Once
nightly is promoted to beta, those docs will appear at
<https://doc.rust-lang.org/beta/cargo/>. Once the stable release is made, it
will appear on <https://doc.rust-lang.org/cargo/> (which is the "current"
stable) and the release-specific URL such as
<https://doc.rust-lang.org/1.46.0/cargo/>.

The code that builds the documentation is located in the [`doc` bootstrap
module].

[`doc` bootstrap module]: https://github.com/rust-lang/rust/blob/master/src/bootstrap/src/core/build_steps/doc.rs

## crates.io publishing

Cargo's library and its related dependencies (like `cargo-util`) are published
to [crates.io] as part of the 6-week stable release process by the [Release
team]. The release process involves a series of steps:

1. The Release team's automation scripts (see <https://github.com/rust-lang/simpleinfra/>) will run [`promote-release`] which will create a tag in the `rust-lang/cargo` repository associated with the version of the cargo submodule for that release.
2. The creation of a tag will trigger the [release workflow] in `rust-lang/cargo`.
3. The release workflow will run the [`publish.py` script] on the commit associated with the tag.
4. The `publish.py` script will run `cargo publish` on any crates that are not already published.

[`promote-release`]: https://github.com/rust-lang/promote-release
[release workflow]: https://github.com/rust-lang/cargo/blob/master/.github/workflows/release.yml

On very rare cases, the Cargo team may decide to manually publish a new
release to [crates.io]. For example, this may be necessary if there is a
problem with the current version that only affects API users, and does not
affect the `cargo` binary shipped in the stable release. In this situation,
PRs should be merged to the associated stable release branch in the cargo repo
(like `rust-1.70.0`) that fix the issue and bump the patch version of the
affected package. Then you need to work with the Release Team to get a release
published to crates.io.[^release-problem]

Some packages are not published automatically because they are not part of the
Rust release train. This currently only includes the [`home`] package. These
are published manually on an as-needed or as-requested basis by whoever has
permissions (currently [@ehuss] or the Release/Infra team)[^fix-manual-release].

[^release-problem]: Unfortunately there are some complications with this process. See <https://github.com/rust-lang/cargo/issues/14538> for more detail, and thoughts on how to improve this.

[^fix-manual-release]: This should be fixed, see [crate ownership policy](https://forge.rust-lang.org/policies/crate-ownership.html) about removing ownership. Also see <https://github.com/rust-lang/cargo/issues/14538> for problems with tagging. In general, these should be published from GitHub Actions, but we don't have the infrastructure set up for that, yet.

[`home`]: https://github.com/rust-lang/cargo/tree/master/crates/home
[`publish.py` script]: https://github.com/rust-lang/cargo/blob/master/publish.py

## Beta backports

If there is a regression or major problem detected during the beta phase, it
may be necessary to backport a fix to beta. The process is documented in the
[Beta Backporting] page.

[Beta Backporting]: https://forge.rust-lang.org/release/beta-backporting.html

## Stable backports

In (hopefully!) very rare cases, a major regression or problem may be reported
after the stable release. Decisions about this are usually coordinated between
the [Release team] and the Cargo team. There is usually a high bar for making
a stable patch release, and the decision may be influenced by whether or not
there are other changes that need a new stable release.

The process here is similar to the beta-backporting process. The
[rust-lang/cargo] branch is the same as beta (`rust-1.XX.0`). The
[rust-lang/rust] branch is called `stable`.

[choochoo]: https://doc.rust-lang.org/book/appendix-07-nightly-rust.html
[rust-lang/rust]: https://github.com/rust-lang/rust/
[rust-lang/cargo]: https://github.com/rust-lang/cargo/
[CHANGELOG]: https://github.com/rust-lang/cargo/blob/master/src/doc/src/CHANGELOG.md
[release process]: https://forge.rust-lang.org/release/process.html
[`TargetInfo`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/core/compiler/build_context/target_info.rs
[crates.io]: https://crates.io/
[release team]: https://www.rust-lang.org/governance/teams/operations#release


<a id=process_rfc></a>

# Writing an RFC

Generally, an RFC goes through:
1. Pre-RFC discussions on the [internals forum][irlo]
2. [RFC]
3. [Development and stabilization][unstable]

Please keep in mind our [design principles](../design.md).

For more concrete areas of consideration:

## `.cargo/config.toml` and `Cargo.toml`

`.cargo/config.toml` is for environment or transient configuration,
being dependent on what directory you are running from and settable on the command-line,
independent of other flags like `--manifest-path` or `--package`.

On the other hand `Cargo.toml` is for static, high-level project configuration.

For example,
- [RFC 3537] chose
  configuration for the MSRV-aware resolver because users would likely need
  to change this setting, like in CI to verify the opposite case of
  what they run by default.
- The Cargo team rejected a [`[cfg]` table][cfg table] to represent `rustc`
  `--cfg` flags as it was a direct port of low-level rustc behavior that didn't
  mesh with the other high level abstractions of manifests.
  - For stabilization, this was worked around through a build script directive and a `[lints]` field configuration.
- [#12738][cargo#12738] for exploring how existing config might be representable in `Cargo.toml`.


[irlo]: https://internals.rust-lang.org/
[RFC]: https://github.com/rust-lang/rfcs/
[unstable]: #process_unstable
[RFC 3537]: https://rust-lang.github.io/rfcs/3537-msrv-resolver.html
[cfg table]: https://github.com/rust-lang/cargo/pull/11631#issuecomment-1487424886
[cargo#12738]: https://github.com/rust-lang/cargo/issues/12738

## `Cargo.toml`

When adding a table to a manifest,
- Should it be inheritable?
- Ensure the package table and the inheritable table under `workspace` align
- Care is needed to ensure a `workspace = true` field doesn't conflict with other entries
  - e.g. [RFC 3389] had to explicitly exclude ever supporting a `workspace` linter

When adding a field,
- Is it inheritable?
  - Consider whether sharing of the field would be driven by requirements or is a manifestation of the current implementation.
    For example, in most cases, dependency sources (e.g. `version` field) should be aligned across a workspace
    However, frequently dependency `features` will vary across a workspace.
- When inheriting, can specify it in your package?
- How does specifying a field in both `workspace` and a package interact?
  - e.g. dependency sources cannot be overridden
  - e.g. dependency `features` get merged
  - e.g. dependency `default-features` has been hard to get right ([#12162][cargo#12162])

When working extending `dependencies` tables:
- How does this affect `cargo add` or `cargo remove`?
- How does this affect `[patches]` which are just modified dependencies?

[RFC 3389]: https://rust-lang.github.io/rfcs/3389-manifest-lint.html
[cargo#12162]: https://github.com/rust-lang/cargo/issues/12162



<a id=process_unstable></a>

# Unstable features

Most new features should go through the unstable process. This means that the
feature will only be usable on the nightly channel, and requires a specific
opt-in by the user. Small changes can skip this process, but please consult
with the Cargo team first.

## Tracking issues

Each unstable feature should get a [tracking issue]. These issues are
typically created when a PR is close to being merged, or soon after it is
merged. Use the [tracking issue template] when creating a tracking issue.

Larger features should also get a new label in the issue tracker so that when
issues are filed, they can be easily tied together. Typically this would be
one of the `Z-` prefixed labels for nightly features.

When opening a tracking issue, be sure to also add an `S-` status label to
indicate what needs to happen for it to move forward:

* [S-needs-mentor] --- The feature isn't yet implemented, and needs a Cargo
  team member to commit to helping guide and review the implementation.
* [S-accepted] --- The feature isn't yet implemented, and has a Cargo team
  member willing to help review the implementation.
* [S-waiting-on-feedback] --- After the feature has been implemented, this
  label indicates that it is waiting on community feedback for bugs or design
  concerns.

Tracking issues may have multiple status labels if necessary, for example if
something is only partially implemented, it may have both
[S-waiting-on-feedback] (for what is implemented) and [S-needs-mentor] or
[S-accepted] to finish the rest of the work.

[tracking issue]: https://github.com/rust-lang/cargo/labels/C-tracking-issue
[tracking issue template]: https://github.com/rust-lang/cargo/issues/new?labels=C-tracking-issue&template=tracking_issue.yml
[S-needs-mentor]: https://github.com/rust-lang/cargo/labels/S-needs-mentor
[S-accepted]: https://github.com/rust-lang/cargo/labels/S-accepted
[S-waiting-on-feedback]: https://github.com/rust-lang/cargo/labels/S-waiting-on-feedback

## Implementation

See [Working on Cargo](working-on-cargo.md).

During implementation and testing, you may find reasons to deviate from the RFC.
Please call these out in the tracking issue, with links to more information justifying the change
(e.g. see [workspace inheritance tracking issue]).

[workspace inheritance tracking issue]: https://github.com/rust-lang/cargo/issues/8415

#### Unstable feature opt-in

For features that require behavior changes or new syntax in `Cargo.toml`, then
it will need a `cargo-features` value placed at the top of `Cargo.toml` to
enable it. The process for adding a new feature is described in the
[`features` module]. Code that implements the feature will need to manually
check that the feature is enabled for the current manifest.

For features that add new command-line flags, config options, or environment
variables, then the `-Z` flags will be needed to enable them. The [`features`
module] also describes how to add these. New flags should use the
`fail_if_stable_opt` method to check if the `-Z unstable-options` flag has
been passed.

#### Unstable documentation

Every unstable feature should have a section added to the [unstable chapter]
describing how to use the feature.
This can also serve as a place for the final documentation to live until its stabilized.

[unstable chapter]: https://github.com/rust-lang/cargo/blob/master/src/doc/src/reference/unstable.md

## Pre-Stabilization 

Once an unstable feature is "complete", the search for users to test
and give feedback begins:
1. Write up test instructions for users, summarizing where the feature is useful, how to use it (with links to the unstable documentation), and if there are any areas of particular concern
  - This could be on the tracking issue or in a dedicated issue for feedback
  - e.g. [workspace inheritance testing notes]
2. Call for testing
  - In the RFC, link to the test instructions and label it with `call-for-testing` to be picked up by [This Week in Rust]
    - If there is not an RFC, a pull request should be made to the [TWiR repo]
      adding the feature to the `Call for Testing` section ([example]).
  - Post on various Rust communities ([rust subreddit], [users], [internals], etc)
  - e.g. [reddit post], [users post], [internals post]

[workspace inheritance testing notes]: https://github.com/rust-lang/cargo/blob/6d6dd9d9be9c91390da620adf43581619c2fa90e/src/doc/src/reference/unstable.md#testing-notes
[rust subreddit]: https://www.reddit.com/r/rust/
[users]: https://users.rust-lang.org/
[internals]: https://internals.rust-lang.org/
[reddit post]: https://www.reddit.com/r/rust/comments/uo8zeh/help_test_workspace_inheritance_in_preparation/
[users post]: https://users.rust-lang.org/t/help-test-workspace-inheritance-in-preparation-for-stablization/75582
[internals post]: https://internals.rust-lang.org/t/help-test-workspace-inheritance-in-preparation-for-stablization/16618
[This Week in Rust]: https://this-week-in-rust.org/
[TWiR repo]: https://github.com/rust-lang/this-week-in-rust
[example]: https://github.com/rust-lang/this-week-in-rust/pull/3256

## Stabilization

After some period of time, typically measured in months, the feature can be
considered to be stabilized. The feature should not have any significant known
bugs or issues, and any design concerns should be resolved.

The stabilization process depends on the kind of feature. For smaller
features, you can leave a comment on the tracking issue expressing interest in
stabilizing it. It can usually help to indicate that the feature has received
some real-world testing, and has exhibited some demand for broad use.

For larger features that have not gone through the [RFC process], then an RFC
to call for stabilization might be warranted. This gives the community a final
chance to provide feedback about the proposed design.

For a small feature, or one that has already gone through the RFC process, a
Cargo Team member may decide to call for a "final comment period" using
[rfcbot]. This is a public signal that a major change is being made, and gives
the Cargo Team members an opportunity to confirm or block the change. This
process can take a few days or weeks, or longer if a concern is raised.

Once the stabilization has been approved, the person who called for
stabilization should prepare a PR to stabilize the feature. This PR should:

* Flip the feature to stable in the [`features` module].
* Remove any unstable checks that aren't automatically handled by the feature
  system.
* Move the documentation from the [unstable chapter] into the appropriate
  places in the Cargo book and man pages.
* Remove the `-Z` flags and help message if applicable.
* Update all tests to remove nightly checks.
* Tag the PR with [relnotes] label if it seems important enough to highlight
  in the [Rust release notes].

[`features` module]: https://github.com/rust-lang/cargo/blob/master/src/cargo/core/features.rs
[RFC process]: https://github.com/rust-lang/rfcs/
[rfcbot]: https://github.com/rust-lang/rfcbot-rs
[Rust release notes]: https://github.com/rust-lang/rust/blob/master/RELEASES.md
[relnotes]: https://github.com/rust-lang/cargo/issues?q=label%3Arelnotes


<a id=process_security></a>

# Security issues

Issues involving reporting a security vulnerability in cargo usually start by following the [Rust security policy].
The Security Response Working Group ("the WG") is responsible for running the process of handling the response to a security issue.
Their process is documented at [Handling Reports].
This document gives an overview of the process from a Cargo team member's perspective.

The general order of events happens as follows:

1. The "reporter" (even if it is a Cargo team member) reports an issue to <security@rust-lang.org>.
1. The WG will evaluate if the report is credible, and manages responses to the reporter.
1. The WG will start a private Zulip stream to coordinate discussion and plans for a fix.
1. The WG will pull in one or more team members into the Zulip stream ("responders").
    - Security vulnerabilities are **embargoed** until they are released publicly.
      People who are brought into these discussions should **not** discuss the issue with *anyone* outside of the group, including your employer, without first consulting The WG.
1. A discussion then starts to evaluate the severity of the issue and what possible solutions should be considered.
   This includes figuring out who will volunteer to actually develop the patches to resolve the issue, and who will review it.
1. The WG will create a temporary private fork of the `rust-lang/cargo` repo using GitHub's [repository security advisory][github-advisory] system.
   This provides a space where changes can be securely posted, and the security advisory can be drafted.
   See ["Collaborating in a temporary private fork"][private-fork] for some screenshots of what this looks like.
   GitHub includes instructions on how to work with the fork.

   Beware that the private fork has some limitations, such as not supporting CI, or (for some weird reason) not supporting syntax highlighting.
1. Someone will need to review the patches and make sure everyone agrees on the solution.
   This may also involve the WG conferring with the reporter to validate the fix.
1. Create a rollout plan.
   This includes deciding if there will be a new patch release of Rust, or if it should wait for the next stable release, or whether to remove the embargo on the fix.
1. The WG will handle drafting a Security Advisory using GitHub's Security Advisory ("GHSA") system.
   [GHSA-r5w3-xm58-jv6j] is an example of what this looks like.
   This process also involves reserving a [CVE](https://www.cve.org/) number, where the report will eventually be posted.

   The responders should carefully review the report to make sure it is correct.

   This process may also involve deciding on the CVSS score.
   There are a bunch of calculators on the web where you can see how this works (such as the [FIRST CVSS Calculator][calc], or you can view GitHub's calculator by drafting a security advisory in one of your personal repos).
   FIRST has a [user guide][first-guide] for deciding how to score each characteristic.
1. If it is decided to do a patch release of Rust, the general overview of steps is:
    1. Finalizing the patches.
       This includes all the little details like updating changelogs, version numbers, and such.
    1. Preparing PRs in the private fork against the stable, beta, and nightly (master) branches.
    1. The WG handles creating a private fork of `rust-lang/rust` to prepare the point release.
       This usually includes changes for stable, beta, and nightly.
    1. The WG handles posting patches in various places (such as mailing lists), possibly several days in advance.
    1. The WG handles posting public PRs to `rust-lang/rust` to incorporate the fix and prepare a new release.
    1. The WG handles announcing everything, including publishing the GHSA, publishing a blog post, and several other places.

## External dependency patches

Sometimes it may be necessary to make changes to external dependencies to support a fix.
This can make things complicated.
If the change is by itself benign and not directly related to the security issue,
then it may be safe to publicly propose the change (but not giving context) and try to get a new release of the dependency made (though confer with the WG first!).
However, if the issue is directly related to the dependency, then it becomes significantly more awkward.

The general process for [GHSA-r5w3-xm58-jv6j] which involved a fix in `git2-rs` was handled by the responders because it is a dependency owned by the rust-lang org.
The general outline of how we managed this is:

- Pre-release:
    1. Created a private fork of `rust-lang/git2-rs` just like we did for `rust-lang/cargo`.
       git2-rs also had its own Security Advisory just like cargo did.
    1. Created and reviewed PRs in the private fork for the fixes.
        - The PRs in the `rust-lang/cargo` private fork had to have a temporary `[patch]` git dependency on the `git2-rs` private fork.
    1. Before the release, the PRs were changed to remove the `[patch]`, and pretend as-if git2-rs had already been published.
- Showtime:
    1. The git2-rs changes were publicly merged, and a new release was published to crates.io.
    1. The cargo PR was merged to cargo's stable branch.
    1. The private rust-lang/rust PR updated the cargo submodule and updated `Cargo.lock` to pick up the new git2 dependencies.
    1. Release proceeds as normal (publish both GHSA, create release, etc.).
- Post-release:
    1. Various forward ports were created in git2-rs, and new releases were made.

If the change is in a crate not managed by any responder, then confer with the WG on a strategy.
One option is to create a temporary fork used for the security response that will be removed as soon as the security advisory is released and a new public release of the dependency is made with the fix.

## Checklist

There are a lot of details to handle, and it can be a bit of a challenge under time pressure.
The following is a checklist of some items to pay attention to during the process.

Pre-release:
- [ ] Check for any SemVer-incompatible changes in the public API of any crates that are modified.
  - Try to avoid these if at all possible.
    Although not a severe problem, making Cargo's version number drift farther from Rust's can contribute to confusion.
  - If a SemVer-breaking release is made to a dependency, make sure this is coordinated correctly between the stable, beta, and master branches.
- [ ] With a checkout of the proposed fixes, run as much of cargo's CI testsuite locally as you can.
  Since private forks don't support CI, the responders will be responsible for making sure all tests pass.
  Enlist other responders if you don't have the necessary systems like Windows.
- [ ] Manually exercise the fix locally.
  Since we will essentially have *no* nightly testing, the responders are responsible for making sure things work.
  Try to consider all the different environments users may be using.
- [ ] Make sure any comments or docs that need updating get updated.
- [ ] Review the git commit messages of the patch.
  Make sure they clearly and accurately reflect what is being changed and why.
  Clean up the commit history if it goes through several revisions during review.
- [ ] Make sure that the *public* cargo repo's stable and beta branches are in a state where they are passing CI.
  This may require backporting changes that fix problems that have already been fixed in master.
  This can be done publicly at any time, and helps with ensuring a smooth process once the security issue is released.
  (The WG may disable branch protections to push directly to the stable branch, but this step is still useful to assist with local testing and the beta branch.)
- [ ] After the fix is approved, create backports to the stable and beta master branches and post PRs to the private fork.
- [ ] If any internal dependencies are changed, make sure their versions are bumped appropriately, and dependency specifications are updated (stable, beta, and master branches).
- [ ] Thoroughly test the stable and beta PRs locally, too. We want to make sure everything goes smoothly, and we can't assume that just because a patch applied cleanly that there won't be issues.
- [ ] Make sure cargo's version in [`Cargo.toml`] is updated correctly on the stable branch private PR.
- [ ] Make sure cargo's `Cargo.lock` is updated (stable, beta, master branches).
- [ ] Update [`CHANGELOG.md`] on cargo's master branch private PR.
- [ ] Update [`RELEASES.md`] on rust's master branch private PR (and stable and beta?).
- [ ] Remove any temporary things in the patch, like a temporary `[patch]` table.

Showtime:
- [ ] Publish any embargoed external dependencies to crates.io.
- [ ] (WG) Merge the cargo stable change.
- [ ] (WG) Update the cargo submodule in the rust-lang/rust private PR to point to the new stable commit.
    - [ ] Also update `Cargo.lock`.
- [ ] (WG) Make a new stable release.
- [ ] (WG) Publish the GHSA.
- [ ] (WG) Send announcements.
- [ ] Make sure stable, beta, and master branches of `rust-lang/cargo` get updated.
- [ ] Make sure stable, beta, and master branches of `rust-lang/rust` get updated, pointing to the correct submodule versions.
- [ ] If any external dependencies are updated, make sure their back or forward ports are handled.

Post release:
- [ ] Verify that the appropriate crates are published on crates.io.
- [ ] Verify that `rust-lang/cargo` got a new tag.
- [ ] Verify that the patches were backported to the correct branches in the `rust-lang/cargo` repository (stable, beta, and master).
- [ ] Verify that the cargo submodule is updated on the correct branches in the `rust-lang/rust` repository (stable, beta, and master).
- [ ] Follow up on any non-critical tasks that were identified during review.

[Rust security policy]: https://www.rust-lang.org/policies/security
[github-advisory]: https://docs.github.com/en/code-security/security-advisories/repository-security-advisories
[private-fork]: https://docs.github.com/en/code-security/security-advisories/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability
[calc]: https://www.first.org/cvss/calculator
[GHSA-r5w3-xm58-jv6j]: https://github.com/rust-lang/cargo/security/advisories/GHSA-r5w3-xm58-jv6j
[handling reports]: https://github.com/rust-lang/wg-security-response/blob/main/docs/handling-reports.md
[first-guide]: https://www.first.org/cvss/user-guide
[`CHANGELOG.md`]: https://github.com/rust-lang/cargo/blob/master/src/doc/src/CHANGELOG.md
[`Cargo.toml`]: https://github.com/rust-lang/cargo/blob/master/Cargo.toml
[`RELEASES.md`]: https://github.com/rust-lang/rust/blob/master/RELEASES.md


<a id=design></a>

# Design Principles

The purpose of Cargo is to formalize a canonical Rust workflow, by automating
the standard tasks associated with distributing software. Cargo simplifies
structuring a new project, adding dependencies, writing and running unit
tests, and more.

Cargo is not intended to be a general-purpose build tool. Ideally, it should
be easy to integrate it within another build tool, though admittedly that is
not as seamless as desired.

## Stability and compatibility

### Backwards compatibility

Cargo strives to remain backwards compatible with projects created in previous
versions. The CLI interface also strives to remain backwards compatible, such
that the commands and options behave the same. That being said, changes in
behavior, and even outright breakage are sometimes done in limited situations.
The following outlines some situations where backwards-incompatible changes are
made:

* Anything that addresses a security concern.
* Dropping support for older platforms and tooling. Cargo follows the Rust
  [tiered platform support].
* Changes to resolve possibly unsafe or unreliable behavior.

None of these changes should be taken lightly, and should be avoided if
possible, or possibly with some transition period to alert the user of the
potential change.

Behavior is sometimes changed in ways that have a high confidence that it
won't break existing workflows. Almost every change carries this risk, so it
is often a judgment call balancing the benefit of the change with the
perceived possibility of its negative consequences.

At times, some changes fall in the gray area, where the current behavior is
undocumented, or not working as intended. These are more difficult judgment
calls. The general preference is to balance towards avoiding breaking existing
workflows.

Support for older registry APIs and index formats may be dropped, if there is
high confidence that there aren't any active registries that may be affected.
This has never (to my knowledge) happened so far, and is unlikely to happen in
the future, but remains a possibility.

In all of the above, a transition period may be employed if a change is known
to cause breakage. A warning can be issued to alert the user that something
will change, and provide them with an alternative to resolve the issue
(preferably in a way that is compatible across versions if possible).

Cargo is only expected to work with the version of the related Rust tools
(`rustc`, `rustdoc`, etc.) that it is released with. As a matter of choice,
the latest nightly works with the most recent stable release, but that is
mostly to accommodate development of Cargo itself, and should not be expected
by users.

### Forwards compatibility

Additionally, Cargo strives a limited degree of *forwards compatibility*.
Changes should not egregiously prevent older versions from working. This is
mostly relevant for persistent data, such as on-disk files and the registry
interface and index. It also applies to a lesser degree to the registry API.

Changes to `Cargo.lock` require a transition time, where the new format is not
automatically written when the lock file is updated. The transition time
should not be less than 6 months, though preferably longer. New projects may
use the new format in a shorter time frame.

Changes to `Cargo.toml` can be made in any release. This is because the user
must manually modify the file, and opt-in to any new changes. Additionally,
Cargo will usually only issue a warning about new fields it doesn't
understand, but otherwise continue to function.

Changes to cache files (such as artifacts in the `target` directory, or cached
data in Cargo's home directory) should not *prevent* older versions from
running, but they may cause older versions to recreate the cache, which may
result in a performance impact.

Changes to the registry index should not prevent older versions from working.
Generally, older versions ignore new fields, so the format should be easily
extensible. Changes to the format or interpretation of existing fields should
be done very carefully to avoid preventing older versions of Cargo from
working. In some cases, this may mean that older versions of Cargo will not be
able to *select* a newly published crate, but it shouldn't prevent them from
working at all. This level of compatibility may not last forever, but the
exact time frame for such a change has not yet been decided.

The registry API may be changed in such a way to prevent older versions of
Cargo from working. Generally, compatibility should be retained for as long as
possible, but the exact length of time is not specified.

## Simplicity and layers

Standard workflows should be easy and consistent. Each knob that is added has
a high cost, regardless if it is intended for a small audience. Layering and
defaults can help avoid the surface area that the user needs to be concerned
with. Try to avoid small functionalities that may have complex interactions
with one another.

[tiered platform support]: https://doc.rust-lang.org/nightly/rustc/platform-support.html


<a id=implementation_index></a>

# Implementing a Change

This chapter gives an overview of what you need to know in making a change to cargo.

If you feel something is missing that would help you, feel free to ask on
[Zulip](https://rust-lang.zulipchat.com/#narrow/stream/246057-t-cargo).


<a id=implementation_architecture></a>

# Architecture Overview

See the
[nightly docs](https://doc.rust-lang.org/nightly/nightly-rustc/cargo/index.html)
for an overview of `cargo`s architecture and links out to further details.


<a id=implementation_packages></a>

# New Packages

This chapter sketches out how to add a new package to the cargo workspace.

## Steps

Choose the relevant parent directory
- `credential/` for credential-process related packages
- `benches/` for benchmarking of cargo itself
- `crates/` for everything else

Run `cargo new <name>`
- `<name>`:
  - We tend to use `-` over `_`
  - For internal APIs, to avoid collisions with third-party subcommands, we can use the `cargo-util-` prefix
  - For xtasks, we use the `xtask-` prefix
- `package.rust-version`
  - Internal packages tend to have a policy of "latest" with a [`# MSRV:1` comment](#msrv-policy)
  - Ecosystem packages tend to have a policy of "N-2" with a [`# MSRV:3` comment](#msrv-policy)
  - If the right choice is inherited from the workspace, feel free to keep it that way
- If running without [cargo new automatically adding to workspace](https://github.com/rust-lang/cargo/pull/12779), add it as a workspace member if not already captured by a glob

If its an xtask,
- Add it to `.cargo/config.toml`s `[alias]` table
- Mark `package.publish = false`

If needed to be published with `cargo`,
add the package to `publish.py` in the repo root,
in dependency order.

Note: by adding the package to the workspace, you automatically get
- CI running `cargo test`
- CI verifying MSRV
- CI checking for `cargo doc` warnings

## MSRV Policy

Our MSRV policies are
- Internal packages: support latest version
- Ecosystem packages: support latest 3 versions

We proactively update the MSRV
- So contributors don't shy away from using newer features, either assuming they
  can't ask or feeling like they have to have a justification when asking
- To avoid a de facto MSRV developing from staying on a version for a long
  period of time, leaving users unhappy when their expectations aren't met

To proactively update the MSRV, we use [RenovateBot](https://docs.renovatebot.com/)
with the configuration file in `.github/renovatebot.json5`.
To know what MSRV policy to use,
it looks for comments of the form `# MSRV:N`,
where `N` is the number of supported rust versions.


<a id=implementation_subcommands></a>

# New Subcommands

Cargo is a single binary composed of a set of [`clap`] subcommands. All
subcommands live in [`src/bin/cargo/commands`] directory.
[`src/bin/cargo/main.rs`] is the entry point.

Each subcommand, such as [`src/bin/cargo/commands/build.rs`], usually performs
the following:

1. Parse the CLI flags. See the [`command_prelude`] module for some helpers to make this easier.
2. Load the config files.
3. Discover and load the workspace.
4. Calls the actual implementation of the subcommand which resides in [`src/cargo/ops`].

If the subcommand is not found in the built-in list, then Cargo will
automatically search for a subcommand named `cargo-{NAME}` in the users `PATH`
to execute the subcommand.


[`clap`]: https://docs.rs/clap
[`src/bin/cargo/commands/build.rs`]: https://github.com/rust-lang/cargo/tree/master/src/bin/cargo/commands/build.rs
[`src/cargo/ops`]: https://github.com/rust-lang/cargo/tree/master/src/cargo/ops
[`src/bin/cargo/commands`]: https://github.com/rust-lang/cargo/tree/master/src/bin/cargo/commands
[`src/bin/cargo/main.rs`]: https://github.com/rust-lang/cargo/blob/master/src/bin/cargo/main.rs
[`command_prelude`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/util/command_prelude.rs


<a id=implementation_schemas></a>

# Data Schemas

Cargo reads and writes user and machine facing data formats, like
- `Cargo.toml`, read and written on `cargo package`
- `Cargo.lock`, read and written
- `.cargo/config.toml`, read-only
- `cargo metadata` output
- `cargo build --message-format` output

## Schema Design

Generally,
- Fields should be kebab case
  - `#[serde(rename_all = "kebab-case")]` should be applied defensively
- Fields should only be present when needed, saving space and parse time
  - Also, we can always switch to always outputting the fields but its harder to stop outputting them
  - `#[serde(skip_serializing_if = "Default::default")]` should be applied liberally
- For output, prefer [jsonlines](https://jsonlines.org/) as it allows streaming output and flexibility to mix content (e.g. adding diagnostics to output that didn't previously have it
- `#[serde(deny_unknown_fields)]` should not be used to allow evolution of formats, including feature gating

## Schema Evolution Strategies

When changing a schema for data that is read, some options include:
- Adding new fields is relatively safe
  - If the field must not be ignored when present,
    have a transition period where it is invalid to use on stable Cargo before stabilizing it or
    error if its used before supported within the schema version
    (e.g. `edition` requires a minimum `package.rust-version`, if present)
- Adding new values to a field is relatively safe
  - Unstable values should fail on stable Cargo
- Version the structure and interpretation of the data (e.g. the `edition` field or `package.resolver` which has an `edition` fallback)

Note: some formats that are read are also written back out
(e.g. `cargo package` generating a `Cargo.toml` file)
and those strategies need to be considered as well.

When changing a schema for data that is written, some options include:
- Add new fields if the presence can be ignored
- Infer permission from the users use of the new schema (e.g. a new alias for an `enum` variant)
- Version the structure and interpretation of the format
  - Defaulting to the latest version with a warning that behavior may change (e.g. `cargo metadata --format-version`, `edition` in cargo script)
  - Defaulting to the first version, eventually warning the user of the implicit stale behavior (e.g. `package.edition` in `Cargo.toml`)
  - Without a default (e.g. `package.rust-version`, or a command-line flag like `--format-version`)

Note: While `serde` makes it easy to support data formats that add new fields,
new data types or supported values for a field are more difficult to future-proof
against.


<a id=implementation_console></a>

# Console Output

All of Cargo's output should go through the [`Shell`] struct. You can normally
obtain the `Shell` instance from the [`GlobalContext`] struct. Do **not** use
the std `println!` macros.

Most of Cargo's output goes to stderr. When running in JSON mode, the output
goes to stdout.

It is important to properly handle errors when writing to the console.
Informational commands, like `cargo list`, should ignore any errors writing
the output. There are some [`drop_print`] macros that are intended to make
this easier.

Messages written during compilation should handle errors, and abort the build
if they are unable to be displayed. This is generally automatically handled in
the [`JobQueue`] as it processes each message.

[`Shell`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/core/shell.rs
[`GlobalContext`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/util/context/mod.rs
[`drop_print`]: https://github.com/rust-lang/cargo/blob/e4b65bdc80f2a293447f2f6a808fa7c84bf9a357/src/cargo/util/config/mod.rs#L1820-L1848
[`JobQueue`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/core/compiler/job_queue/mod.rs

## Errors

Cargo uses [`anyhow`] for managing errors. This makes it convenient to "chain"
errors together, so that Cargo can report how an error originated, and what it
was trying to do at the time.

Error helpers are implemented in the [`errors`] module. Use the
`InternalError` error type for errors that are not expected to happen. This
will print a message to the user to file a bug report.

The binary side of Cargo uses the `CliError` struct to wrap the process exit
code. Usually Cargo exits with 101 for an error, but some commands like `cargo
test` will exit with different codes.

[`errors`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/util/errors.rs

## Style

Some guidelines for Cargo's output:

* Keep the normal output brief. Cargo is already fairly noisy, so try to keep
  the output as brief and clean as possible.
* Good error messages are very important! Try to keep them brief and to the
  point, but good enough that a beginner can understand what is wrong and can
  figure out how to fix. It is a difficult balance to hit! Err on the side of
  providing extra information.
* When using any low-level routines, such as `std::fs`, *always* add error
  context about what it is doing. For example, reading from a file should
  include context about which file is being read if there is an error.
* Cargo's error style is usually a phrase, starting with a lowercase letter.
  If there is a longer error message that needs multiple sentences, go ahead
  and use multiple sentences. This should probably be improved sometime in the
  future to be more structured.

[`anyhow`]: https://docs.rs/anyhow


<a id=implementation_filesystem></a>

# Filesystem

Cargo tends to get run on a very wide array of file systems. Different file
systems can have a wide range of capabilities, and Cargo should strive to do
its best to handle them. Some examples of issues to deal with:

* Not all file systems support locking. Cargo tries to detect if locking is
  supported, and if not, will ignore lock errors. This isn't ideal, but it is
  difficult to deal with.
* The [`fs::canonicalize`] function doesn't work on all file systems
  (particularly some Windows file systems). If that function is used, there
  should be a fallback if it fails. This function will also return `\\?\`
  style paths on Windows, which can have some issues (such as some tools not
  supporting them, or having issues with relative paths).
* Timestamps can be unreliable. The [`fingerprint`] module has a deeper
  discussion of this. One example is that Docker cache layers will erase the
  fractional part of the time stamp.
* Symlinks are not always supported, particularly on Windows.

[`fingerprint`]: https://github.com/rust-lang/cargo/blob/master/src/cargo/core/compiler/fingerprint/mod.rs
[`fs::canonicalize`]: https://doc.rust-lang.org/std/fs/fn.canonicalize.html


<a id=implementation_formatting></a>

# Formatting

When modifying user files, like `Cargo.toml`, we should not change other
sections of the file,
preserving the general formatting.
This includes the table, inline-table, or array that a field is being edited in.

When adding new entries, they do not need to match the canonical style of the
document but can use the default formatting.
If the entry is already sorted, preserving the sort order is preferred.

When removing entries,
comments on the same line should be removed but comments on following lines
should be preserved.

Inconsistencies in style after making a change are left to the user and their
preferred auto-formatter.


<a id=implementation_debugging></a>

# Debugging

## Logging

Cargo uses the [`tracing`] crate to display debug log messages.
The `CARGO_LOG` environment variable can be set to enable debug logging, with a value such as `trace`, `debug`, or `warn`.
It also supports filtering for specific modules with comma-separated [directives].
Feel free to use [shorthand macros] to help with diagnosing problems.
We're looking forward to making Cargo logging mechanism more structural!

```sh
# Outputs all logs with levels debug and higher
CARGO_LOG=debug cargo generate-lockfile

# Don't forget that you can filter by module as well
CARGO_LOG=cargo::core::resolver=trace cargo generate-lockfile

# This will print lots of info about the download process. `trace` prints even more.
CARGO_HTTP_DEBUG=true CARGO_LOG=network=debug cargo fetch

# This is an important command for diagnosing fingerprint issues.
CARGO_LOG=cargo::core::compiler::fingerprint=trace cargo build
```

[`tracing`]: https://docs.rs/tracing
[directive]: https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#directives
[shorthand macros]: https://docs.rs/tracing/latest/tracing/index.html#shorthand-macros


<a id=tests_index></a>

# Tests

Cargo has an extensive test suite. Most of it is implemented as integration
tests in the [`testsuite`] directory. There are several other tests:

* Unit tests are scattered throughout.
* The dependency resolver has its own set of tests in the [`resolver-tests`]
  directory.
* All of the packages in the [`crates`] directory have their own set of tests.
* The [`build-std`] test is for the [build-std feature]. It is separate since
  it has some special requirements.
* Documentation has a variety of tests, such as link validation, and the
  [SemVer chapter validity checks].

[`testsuite`]: https://github.com/rust-lang/cargo/tree/master/tests/testsuite/
[`resolver-tests`]: https://github.com/rust-lang/cargo/tree/master/crates/resolver-tests
[`crates`]: https://github.com/rust-lang/cargo/tree/master/crates
[`build-std`]: https://github.com/rust-lang/cargo/blob/master/tests/build-std/main.rs
[build-std feature]: https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#build-std
[SemVer chapter validity checks]: https://github.com/rust-lang/cargo/tree/master/src/doc/semver-check


<a id=tests_running></a>

# Running Tests

Using `cargo test` is usually sufficient for running the full test suite. This
can take a few minutes, so you may want to use more targeted flags to pick the
specific test you want to run, such as `cargo test --test testsuite
-- check::check_success`.

## Running nightly tests

Some tests only run on the nightly toolchain, and will be ignored on other
channels. It is recommended that you run tests with both nightly and stable to
ensure everything is working as expected.

Some of the nightly tests require the `rustc-dev` and `llvm-tools-preview`
rustup components installed. These components include the compiler as a
library. This may already be installed with your nightly toolchain, but if it
isn't, run `rustup component add rustc-dev llvm-tools-preview
--toolchain=nightly`.

## Running cross tests

Some tests exercise cross compiling to a different target. This will require
you to install the appropriate target. This typically is the 32-bit target of
your host platform. For example, if your host is a 64-bit
`x86_64-unknown-linux-gnu`, then you should install the 32-bit target with
`rustup target add i686-unknown-linux-gnu`. If you don't have the alternate
target installed, there should be an error message telling you what to do. You
may also need to install additional tools for the target. For example, on Ubuntu
you should install the `gcc-multilib` package.

If you can't install an alternate target, you can set the
`CFG_DISABLE_CROSS_TESTS=1` environment variable to disable these tests. The
Windows cross tests only support the MSVC toolchain.

## Running build-std tests

The `build-std` tests are disabled by default, but you can run them by setting
the `CARGO_RUN_BUILD_STD_TESTS=1` environment variable and running `cargo test
--test build-std`. This requires the nightly channel, and also requires the
`rust-src` component installed with `rustup component add rust-src
--toolchain=nightly`.

## Running with `gitoxide` as default git backend in tests

By default, the `git2` backend is used for most git operations. As tests need to explicitly
opt-in to use nightly features and feature flags, adjusting all tests to run with nightly
and `-Zgitoxide` is unfeasible.

This is why the private environment variable named `__CARGO_USE_GITOXIDE_INSTEAD_OF_GIT2` can be
set while running tests to automatically enable the `-Zgitoxide` flag implicitly, allowing to
test `gitoxide` for the entire cargo test suite.

## Running public network tests

Some (very rare) tests involve connecting to the public internet.
These tests are disabled by default,
but you can run them by setting the `CARGO_PUBLIC_NETWORK_TESTS=1` environment variable.
Additionally our CI suite has a smoke test for fetching dependencies.
For most contributors, you will never need to bother with this.

## Running container tests

Tests marked with `container_test` involve running Docker to test more complex configurations.
These tests are disabled by default,
but you can run them by setting the `CARGO_CONTAINER_TESTS=1` environment variable.
You will need to have Docker installed and running to use these.

> Note: Container tests mostly do not work on Windows.
> * The SSH tests require ssh-agent, but the two versions of ssh-agent
> on Windows are not suitable for testing.
>     * The Microsoft version of ssh-agent runs as a global service, and can't be isolated per test.
>     * The mingw/cygwin one can't be accessed from a Windows executable like cargo.
>     * Pageant similarly does not seem to have a way to isolate it (and I'm not certain it can be driven completely from the command-line).
>
> The tests also can't run on Windows CI because the Docker that is preinstalled doesn't support Linux containers, and setting up Windows containers is a pain.
>
> macOS should work with Docker installed and running,
> but unfortunately the tests are not run on CI because Docker is not available.


<a id=tests_writing></a>

# Writing Tests

The following focuses on writing an integration test. However, writing unit
tests is also encouraged!

## Testsuite

Cargo has a wide variety of integration tests that execute the `cargo` binary
and verify its behavior, located in the [`testsuite`] directory.  The
[`support`] crate and [`snapbox`] contain many helpers to make this process easy.

There are two styles of tests that can roughly be categorized as
- functional tests
  - The fixture is programmatically defined
  - The assertions may be in-source snapshots, hard-coded strings, or programmatically generated
  - Easier to share in an issue as a code block is completely self-contained
- ui tests
  - The fixture is file-based
  - The assertions use file-backed snapshots that can be updated with an env variable
  - Easier to review the expected behavior of the command as more details are included
  - Easier to get up and running from an existing project
  - Easier to reason about as everything is just files in the repo

These tests typically work by creating a temporary "project" with a
`Cargo.toml` file, executing the `cargo` binary process, and checking the
stdout and stderr output against the expected output.

### Functional Tests

Generally, a functional test will be placed in `tests/testsuite/<command>.rs` and will look roughly like:
```rust,ignore
use crate::prelude::*;
use cargo_test_support::str;
use cargo_test_support::project;

#[cargo_test]
fn <description>() {
    let p = project()
        .file("src/main.rs", r#"fn main() { println!("hi!"); }"#)
        .build();

    p.cargo("run --bin foo")
        .with_stderr_data(str![[r#"
[COMPILING] foo [..]
[FINISHED] [..]
[RUNNING] `target/debug/foo`
"#]])
        .with_stdout_data(str![["hi!"]])
        .run();
}
```

The [`#[cargo_test]` attribute][cargo_test attribute] is used in place of
`#[test]` to inject some setup code and declare requirements for running the
test.

[`ProjectBuilder`] via `project()`:
- Each project is in a separate directory in the sandbox
- If you do not specify a `Cargo.toml` manifest using `file()`, one is
  automatically created with a project name of `foo` using `basic_manifest()`.

[`Execs`] via `p.cargo(...)`:
- This executes the command and evaluates different assertions
  - See [`support::compare`] for an explanation of the string pattern matching.
    Patterns are used to make it easier to match against the expected output.

#### Testing Nightly Features

If you are testing a Cargo feature that only works on "nightly" Cargo, then
you need to call `masquerade_as_nightly_cargo` on the process builder and pass 
the name of the feature as the reason, like this:

```rust,ignore
p.cargo("build").masquerade_as_nightly_cargo(&["print-im-a-teapot"])
```

If you are testing a feature that only works on *nightly rustc* (such as
benchmarks), then you should use the `nightly` option of the `cargo_test`
attribute, like this:

```rust,ignore
#[cargo_test(nightly, reason = "-Zfoo is unstable")]
```

This will cause the test to be ignored if not running on the nightly toolchain.

#### Specifying Dependencies

You should not write any tests that use the network such as contacting
crates.io. Typically, simple path dependencies are the easiest way to add a
dependency. Example:

```rust,ignore
let p = project()
    .file("Cargo.toml", r#"
        [package]
        name = "foo"
        version = "1.0.0"

        [dependencies]
        bar = {path = "bar"}
    "#)
    .file("src/lib.rs", "extern crate bar;")
    .file("bar/Cargo.toml", &basic_manifest("bar", "1.0.0"))
    .file("bar/src/lib.rs", "")
    .build();
```

If you need to test with registry dependencies, see
[`support::registry::Package`] for creating packages you can depend on.

If you need to test git dependencies, see [`support::git`] to create a git
dependency.

#### Cross compilation

There are some utilities to help support tests that need to work against a
target other than the host. See [Running cross
tests](running.md#running-cross-tests) for more an introduction on cross
compilation tests.

Tests that need to do cross-compilation should include this at the top of the
test to disable it in scenarios where cross compilation isn't available:

```rust,ignore
if crate::utils::cross_compile::disabled() {
    return;
}
```

The name of the target can be fetched with the [`cross_compile::alternate()`]
function. The name of the host target can be fetched with
[`cargo_test_support::rustc_host()`].

If the test needs to run the cross-compiled binary, then it should have
something like this to exit the test before doing so:

```rust,ignore
if crate::utils::cross_compile::can_run_on_host() {
    return;
}
```

[`cross_compile::alternate()`]: https://github.com/rust-lang/cargo/blob/d58902e22e148426193cf3b8c4449fd3c05c0afd/crates/cargo-test-support/src/cross_compile.rs#L208-L225
[`cargo_test_support::rustc_host()`]: https://github.com/rust-lang/cargo/blob/d58902e22e148426193cf3b8c4449fd3c05c0afd/crates/cargo-test-support/src/lib.rs#L1137-L1140

### UI Tests

UI Tests are a bit more spread out and generally look like:

`tests/testsuite/<command>/mod.rs`:
```rust,ignore
mod <case>;
```

`tests/testsuite/<command>/<case>/mod.rs`:
```rust,ignore
use crate::prelude::*;
use cargo_test_support::compare::assert_ui;
use cargo_test_support::current_dir;
use cargo_test_support::file;
use cargo_test_support::Project;

#[cargo_test]
fn case() {
    let project = Project::from_template(current_dir!().join("in"));
    let project_root = project.root();
    let cwd = &project_root;

    snapbox::cmd::Command::cargo_ui()
        .arg("run")
        .arg_line("--bin foo")
        .current_dir(cwd)
        .assert()
        .success()
        .stdout_matches(file!("stdout.log"))
        .stderr_matches(file!("stderr.log"));

    assert_ui().subset_matches(current_dir!().join("out"), &project_root);
}
```

Then populate
- `tests/testsuite/<command>/<case>/in` with the project's directory structure
- `tests/testsuite/<command>/<case>/out` with the files you want verified
- `tests/testsuite/<command>/<case>/stdout.log` with nothing
- `tests/testsuite/<command>/<case>/stderr.log` with nothing

`#[cargo_test]`:
- This is used in place of `#[test]`
- This attribute injects code which does some setup before starting the
  test, creating a filesystem "sandbox" under the "cargo integration test"
  directory for each test such as
  `/path/to/cargo/target/cit/t123/`
- The sandbox will contain a `home` directory that will be used instead of your normal home directory

`Project`:
- The project is copied from a directory in the repo
- Each project is in a separate directory in the sandbox

[`Command`] via `Command::cargo_ui()`:
- Set up and run a command.

[`OutputAssert`] via `Command::assert()`:
- Perform assertions on the result of the [`Command`]

[`Assert`] via `assert_ui()`:
- Verify the command modified the file system as expected

#### Updating Snapshots

The project, stdout, and stderr snapshots can be updated by running with the
`SNAPSHOTS=overwrite` environment variable, like:
```console
$ SNAPSHOTS=overwrite cargo test
```

Be sure to check the snapshots to make sure they make sense.

#### Testing Nightly Features

If you are testing a Cargo feature that only works on "nightly" Cargo, then
you need to call `masquerade_as_nightly_cargo` on the process builder and pass
the name of the feature as the reason, like this:

```rust,ignore
    snapbox::cmd::Command::cargo()
        .masquerade_as_nightly_cargo(&["print-im-a-teapot"])
```

If you are testing a feature that only works on *nightly rustc* (such as
benchmarks), then you should use the `nightly` option of the `cargo_test`
attribute, like this:

```rust,ignore
#[cargo_test(nightly, reason = "-Zfoo is unstable")]
```

This will cause the test to be ignored if not running on the nightly toolchain.

### Platform-specific Notes

When checking output, use `/` for paths even on Windows: the actual output
of `\` on Windows will be replaced with `/`.

Be careful when executing binaries on Windows. You should not rename, delete,
or overwrite a binary immediately after running it. Under some conditions
Windows will fail with errors like "directory not empty" or "failed to remove"
or "access is denied".

## Debugging tests

In some cases, you may need to dig into a test that is not working as you
expect, or you just generally want to experiment within the sandbox
environment. The general process is:

1. Build the sandbox for the test you want to investigate. For example:

   `cargo test --test testsuite -- features2::inactivate_targets`.
2. In another terminal, head into the sandbox directory to inspect the files and run `cargo` directly.
    1. The sandbox directories start with `t0` for the first test.

       `cd target/tmp/cit/t0`
    2. Set up the environment so that the sandbox configuration takes effect:

       `export CARGO_HOME=$(pwd)/home/.cargo`
    3. Most tests create a `foo` project, so head into that:

       `cd foo`
3. Run whatever cargo command you want. See [Running Cargo] for more details
   on running the correct `cargo` process. Some examples:

   * `/path/to/my/cargo/target/debug/cargo check`
   * Using a debugger like `lldb` or `gdb`:
        1. `lldb /path/to/my/cargo/target/debug/cargo`
        2. Set a breakpoint, for example: `b generate_root_units`
        3. Run with arguments: `r check`

[cargo_test attribute]: https://doc.rust-lang.org/nightly/nightly-rustc/cargo_test_macro/attr.cargo_test.html
[`testsuite`]: https://github.com/rust-lang/cargo/tree/master/tests/testsuite/
[`ProjectBuilder`]: https://github.com/rust-lang/cargo/blob/d847468768446168b596f721844193afaaf9d3f2/crates/cargo-test-support/src/lib.rs#L196-L202
[`Execs`]: https://github.com/rust-lang/cargo/blob/d847468768446168b596f721844193afaaf9d3f2/crates/cargo-test-support/src/lib.rs#L531-L550
[`support`]: https://github.com/rust-lang/cargo/blob/master/crates/cargo-test-support/src/lib.rs
[`support::compare`]: https://github.com/rust-lang/cargo/blob/master/crates/cargo-test-support/src/compare.rs
[`support::registry::Package`]: https://github.com/rust-lang/cargo/blob/d847468768446168b596f721844193afaaf9d3f2/crates/cargo-test-support/src/registry.rs#L311-L389
[`support::git`]: https://github.com/rust-lang/cargo/blob/master/crates/cargo-test-support/src/git.rs
[Running Cargo]: ../process/working-on-cargo.md#running-cargo
[`snapbox`]: https://docs.rs/snapbox/latest/snapbox/
[`Command`]: https://docs.rs/snapbox/latest/snapbox/cmd/struct.Command.html
[`OutputAssert`]: https://docs.rs/snapbox/latest/snapbox/cmd/struct.OutputAssert.html
[`Assert`]: https://docs.rs/snapbox/latest/snapbox/struct.Assert.html


<a id=tests_profiling></a>

# Benchmarking and Profiling

## Internal profiler

Cargo leverages [tracing](https://crates.io/crates/tracing)
as a basic, hierarchical built-in profiler.

Environment variables:
- `CARGO_LOG_PROFILE=<true|1>`: log tracing events to a file in the current working directory
- `CARGO_LOG_PROFILE_CAPTURE_ARGS=<true|1>`: include arguments in the events

At process exit, your trace will be in a file like `trace-1668480819035032.json`.
Open that file with [ui.perfetto.dev](https://ui.perfetto.dev) (or chrome://tracing) to browse your trace.

Example:
```console
$ # Output first three levels of profiling info
$ CARGO_LOG_PROFILE=true cargo generate-lockfile
```

**Note:** This is intended for the development of cargo and there are no compatibility guarantees on this functionality.

## Benchmarking

### Benchsuite

Head over to the [`benches`
directory](https://github.com/rust-lang/cargo/tree/master/benches) for more
information about the benchmarking suite.

### Informal benchmarking

The overhead for starting a build should be kept as low as possible
(preferably, well under 0.5 seconds on most projects and systems). Currently,
the primary parts that affect this are:

* Running the resolver.
* Querying the index.
* Checking git dependencies.
* Scanning the local project.
* Building the unit dependency graph.

One way to test this is to use [hyperfine]. This is a tool that can be used to
measure the difference between different commands and settings. Usually this
is done by measuring the time it takes for `cargo build` to finish in a large
project where the build is fresh (no actual compilation is performed). Just
run `cargo build` once before using hyperfine.

[hyperfine]: https://github.com/sharkdp/hyperfine


<a id=tests_crater></a>

# Crater

[Crater](https://github.com/rust-lang/crater) is a tool for compiling and running tests for _every_ crate on [crates.io](https://crates.io) (and a few on GitHub).
It is mainly used for checking the extent of breakage when implementing potentially breaking changes and ensuring lack of breakage by running beta vs stable compiler versions.

Essentially it runs some `cargo` command on every crate twice; once against the "start" toolchain and again against the "end" toolchain.
For example, "start" could be the stable release, and "end" could be beta.
If it passes in "start" but fails with "end", then that is reported as a regression.

There is a bot called [craterbot] which is used to run crater on hardware managed by the rust-lang organization.

Crater is run by the release team during the beta cycle.
If there are any regressions that look like they are caused by Cargo, they should contact the Cargo team to decide how to handle it.

## Running crater

If you have a change that you want to test before the beta release, or you want to test behavior that is not normally exercised by crater, you can do a manual run of crater.
Roughly the steps are:

1. Create a branch with your changes.

   In your clone of cargo, make the changes to incorporate whatever new thing you want to test and push it to a branch on your fork on GitHub.

2. Get a clone of <https://github.com/rust-lang/rust>

3. Create a branch in your rust-lang/rust clone to add your changes.

4. Change the `src/tools/cargo` submodule to point to your new branch.

   Modify `.gitmodules` to point to your clone and branch of cargo with the changes you want to test.
   For example:

   ```bash
   git submodule set-url src/tools/cargo https://github.com/ehuss/cargo.git
   git submodule set-branch --branch my-awesome-feature src/tools/cargo
   git submodule update --remote src/tools/cargo
   git add .gitmodules src/tools/cargo
   git commit
   ```

5. Create a PR on rust-lang/rust.

   Push your submodule changes to GitHub and make a PR.
   Start the PR title with `[EXPERIMENT]` to make it clear what the PR is for and assign yourself or @ghost.

6. Make a "try" build.

   A "try" build creates a full release of x86_64-unknown-linux-gnu and stores it on rust-lang servers.
   This can be done with a comment `@bors try` on the PR (all Cargo team members should have permission to do this).

7. Run crater.

   Look at the [craterbot] docs to determine the command that you want to run.
   There are different modes like `check-only`, `build-and-test`, `rustdoc`, etc.

   You can also choose how many crates to run against.
   If you are uncertain if your cargo changes will work correctly, it might be a good idea to run against `top-100` first to check its behavior.
   This will run much faster.
   You can do a full run afterwards.

   After the try build finishes (which should take a couple hours), ask someone to make a crater run.
   The Cargo team does not have that permission, so just ask someone on Zulip.
   They will need to write a comment to `@craterbot` with the command that you have specified.

8. Wait.

   Crater can take anywhere from a few hours to a few weeks to run depending on how long the [craterbot queue](https://crater.rust-lang.org/) is and which mode you picked and the priority of your job.
   When the crater run finishes, craterbot will post a comment to the PR with a link to a report of the results.

9. Investigate the report.

   Look through the report which contains links to build logs for any regressions or errors.

10. Close the PR.

    Whenever you are done doing crater runs, close your PR.

[craterbot]: https://github.com/rust-lang/crater/blob/master/docs/bot-usage.md


## Advanced crater modes

Crater only has a few built-in modes, such as running `cargo check` or `cargo test`.
You can pass extra flags with `+cargoflags`.

More complex tests can be accomplished by customizing Cargo to perform whatever actions you want.
Since crater essentially runs `cargo check`, you can modify the `check` command to perform whichever actions you want.
For example, to test `cargo fix --edition`, [this commit](https://github.com/ehuss/cargo/commit/6901690a6f8d519efb4fabf48c1c2b94af0c3bd8) intercepted `cargo check` and modified it to instead:

1. Only run on crates with the 2018 edition.
2. Run `cargo fix --edition`.
3. Modify the manifest to switch to the 2021 edition.
4. Run `cargo check` to verify.

If you need to compare the before and after of a command that is not part of crater's built-in modes, that can be more difficult.
Two possible options:

* Work with the infra team to add a new mode.
* Build two custom try builds.
  Each one should modify the `cargo check` command as described above.
  The "start" build should perform whichever action you want with an otherwise unmodified cargo.
  The "end" build should perform whichever action you want with your modified cargo.
  Then, in the `@craterbot` command, specify the start and end hashes of the two try builds.

## Limitations

There are some limitations of crater to consider when running Cargo:

* A crater run without regressions is not a green light to move forward.
   * A large portion of Rust code is not tested, such as closed-source projects or things otherwise not collected by crater.
   * Many crates can't build in crater's environment or are otherwise broken.
   * Some crates have flaky tests.
* Crater runs in an isolated environment.
    * It only runs on Linux x86-64.
    * It does not have network access.
    * The crate source is in a read-only mount.
* Crater does several steps before running the test (using its own copy of the stable toolchain):
    * It generates a lockfile using `generate-lockfile` and includes `-Zno-index-update` to prevent index updates (which makes it run much faster).
    * All dependencies are downloaded ahead-of-time with `cargo fetch`.
* The built-in modes pass several flags to cargo such as `--frozen` or `--message-format=json`.
  It will sometimes use `--all-targets` and sometimes not.
  Check the [crater source](https://github.com/rust-lang/crater/blob/master/src/runner/test.rs) for more details on how it works.