
/TOC - Visual Studio Code Documentation
=======================================

- [Visual Studio Code](https://code.visualstudio.com/docs)
- [Visual Studio Code - github](https://github.com/Microsoft/vscode-docs/)
- [Monaco - The Editor of the Web](https://github.com/Microsoft/monaco-editor)
- [Monaco Editor Samples](https://github.com/microsoft/monaco-editor-samples)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)


/TOC - Visual Studio Code API
=============================

Get Started
-----------
- [Your First Extension][LN001]
- [Extension Anatomy][LN002]
- [Wrapping Up][LN003]

Extension Capabilities
----------------------
- [Overview][LN004]
- [Common Capabilities][LN005]
- [Theming][LN006]
- [Extending Workbench][LN007]

Extension Guides
----------------
- [Overview][LN008]
- [Command][LN009]
- [Color Theme][LN010]
- [File Icon Theme][LN011]
- [Product Icon Theme][LN012]
- [Chat][LN013]
- [Language Model][LN014]
- [Tree View][LN015]
- [Webview][LN016]
- [Notebook][LN017]
- [Custom Editors][LN018]
- [Virtual Documents][LN019]
- [Virtual Workspaces][LN020]
- [Web Extensions][LN021]
- [Workspace Trust][LN022]
- [Task Provider][LN023]
- [Source Control][LN024]
- [Debugger Extension][LN025]
- [Markdown Extension][LN026]
- [Test Extension][LN027]
- [Custom Data Extension][LN028]
- [Telemetry][LN029]

UX Guidelines
-------------
- [Overview][LN030]
- [Activity Bar][LN031]
- [Sidebars][LN032]
- [Panel][LN033]
- [Status Bar][LN034]
- [Views][LN035]
- [Editor Actions][LN036]
- [Quick Picks][LN037]
- [Command Palette][LN038]
- [Notifications][LN039]
- [Webviews][LN040]
- [Context Menus][LN041]
- [Walkthroughs][LN042]
- [Settings][LN043]

Language Extensions
-------------------
- [Overview][LN044]
- [Syntax Highlight Guide][LN045]
- [Semantic Highlight Guide][LN046]
- [Snippet Guide][LN047]
- [Language Configuration Guide][LN048]
- [Programmatic Language Features][LN049]
- [Language Server Extension Guide][LN050]
- [Embedded Languages][LN051]

Testing and Publishing
----------------------
- [Testing Extensions][LN052]
- [Publishing Extensions][LN053]
- [Bundling Extensions][LN054]
- [Continuous Integration][LN055]

Advanced Topics
---------------
- [Extension Host][LN056]
- [Remote Development and Codespaces][LN057]
- [Using Proposed API][LN058]
- [Migrate from TSLint to ESLint][LN059]
- [Python Extension Template][LN060]

References
----------
- [VS Code API ][LN061]
- [Contribution Points][FX002]
- [Activation Events][FX001]
- [Extension Manifest][FX000]
- [Built-in Commands][LN065]
- [When clause contexts][LN066]
- [Theme Color][LN067]
- [Product Icon Reference][LN068]
- [Document Selector][LN069]

Scripts
--------------

```sh
# https://github.com/microsoft/vscode-docs/blob/main/api/toc.json
sed -n 's| *//.*||;p' 'vscode-docs\api\toc.json' \
| jq '
    def recurse(f): def r: (f | select(. != null) | r); r;
    .[] |
    if type == "array" then
        .[] | length
    elif .name? then
        .name, 
        (.name as $sep | $sep | split("") | map("=") | join("") ), 
        .topics.[].[] | recurse
    end
    '
```

```sh
#!/usr/bin/env bash
while read -r it ; do
    printf "\n\n## $it\n\n"
    cat ".$it.md"
done<<EOF
/api/get-started/your-first-extension
/api/get-started/extension-anatomy
/api/get-started/wrapping-up
/api/extension-capabilities/overview
/api/extension-capabilities/common-capabilities
/api/extension-capabilities/theming
/api/extension-capabilities/extending-workbench
/api/extension-guides/overview
/api/extension-guides/command
/api/extension-guides/color-theme
/api/extension-guides/file-icon-theme
/api/extension-guides/product-icon-theme
/api/extension-guides/chat
/api/extension-guides/language-model
/api/extension-guides/tree-view
/api/extension-guides/webview
/api/extension-guides/notebook
/api/extension-guides/custom-editors
/api/extension-guides/virtual-documents
/api/extension-guides/virtual-workspaces
/api/extension-guides/web-extensions
/api/extension-guides/workspace-trust
/api/extension-guides/task-provider
/api/extension-guides/scm-provider
/api/extension-guides/debugger-extension
/api/extension-guides/markdown-extension
/api/extension-guides/testing
/api/extension-guides/custom-data-extension
/api/extension-guides/telemetry
/api/ux-guidelines/overview
/api/ux-guidelines/activity-bar
/api/ux-guidelines/sidebars
/api/ux-guidelines/panel
/api/ux-guidelines/status-bar
/api/ux-guidelines/views
/api/ux-guidelines/editor-actions
/api/ux-guidelines/quick-picks
/api/ux-guidelines/command-palette
/api/ux-guidelines/notifications
/api/ux-guidelines/webviews
/api/ux-guidelines/context-menus
/api/ux-guidelines/walkthroughs
/api/ux-guidelines/settings
/api/language-extensions/overview
/api/language-extensions/syntax-highlight-guide
/api/language-extensions/semantic-highlight-guide
/api/language-extensions/snippet-guide
/api/language-extensions/language-configuration-guide
/api/language-extensions/programmatic-language-features
/api/language-extensions/language-server-extension-guide
/api/language-extensions/embedded-languages
/api/working-with-extensions/testing-extension
/api/working-with-extensions/publishing-extension
/api/working-with-extensions/bundling-extension
/api/working-with-extensions/continuous-integration
/api/advanced-topics/extension-host
/api/advanced-topics/remote-extensions
/api/advanced-topics/using-proposed-api
/api/advanced-topics/tslint-eslint-migration
/api/advanced-topics/python-extension-template
/api/references/vscode-api
/api/references/contribution-points
/api/references/activation-events
/api/references/extension-manifest
/api/references/commands
/api/references/when-clause-contexts
/api/references/theme-color
/api/references/icons-in-labels
/api/references/document-selector
EOF
```



# /api/index.md
----------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: AD26EFB1-FFC6-4284-BAB8-F3BCB8294728
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Visual Studio Code has a rich extension API. Learn how to create your own extensions for VS Code.
    ---

## Extension API

Visual Studio Code is built with extensibility in mind. From the UI to the editing experience, almost every part of VS Code can be customized and enhanced through the Extension API. In fact, many core features of VS Code are built as [extensions][LK001] and use the same Extension API.

This documentation describes:

* How to build, run, debug, test, and publish an extension
* How to take advantage of VS Code's rich Extension API
* Where to find [guides][LK002] and [code samples][LK003] to help get you started
* Following our [UX guidelines][LN069] for best practices

Code samples are available at [Microsoft/vscode-extension-samples][LK003].

If you are looking for published extensions, head to the [VS Code Extension Marketplace][LK004].

## What can extensions do?

Here are some examples of what you can achieve with the Extension API:

* Change the look of VS Code with a color or file icon theme - [Theming][LN069]
* Add custom components & views in the UI - [Extending the Workbench][LN069]
* Create a Webview to display a custom webpage built with HTML/CSS/JS - [Webview Guide][LN069]
* Support a new programming language - [Language Extensions Overview][LN069]
* Support debugging a specific runtime - [Debugger Extension Guide][LN069]

If you'd like to have a more comprehensive overview of the Extension API, refer to the [Extension Capabilities Overview][LN069] page. [Extension Guides Overview][LN069] also includes a list of code samples and guides that illustrate various Extension API usage.

## How to build extensions?

Building a good extension can take a lot of time and effort. Here is what each section of the API docs can help you with:

* **Get Started** teaches fundamental concepts for building extensions with the [Hello World][LK005] sample.
* **Extension Capabilities** dissects VS Code's vast API into smaller categories and points you to more detailed topics.
* **Extension Guides** includes guides and code samples that explain specific usages of VS Code Extension API.
* **UX Guidelines** showcases best practices for providing a great user experience in an extension.
* **Language Extensions** illustrates how to add support for a programming language with guides and code samples.
* **Testing and Publishing** includes in-depth guides on various extension development topics, such as [testing][LN069] and [publishing][LN069] extensions.
* **Advanced Topics** explains advanced concepts such as [Extension Host][LN069], [Supporting Remote Development and GitHub Codespaces][LN069], and [Proposed API][LN069].
* **References** contains exhaustive references for the [VS Code API][LN069], [Contribution Points][FX002], and many other topics.

## What's new?

VS Code updates on a monthly cadence, and that applies to the Extension API as well. New features and APIs become available every month to increase the power and scope of VS Code extensions.

To stay current with the Extension API, you can review the monthly release notes, which have dedicated sections covering:

* [Extension authoring][LK006] - Learn what new extension APIs are available in the latest release.
* [Proposed extension APIs][LK007] - Review and give feedback on upcoming proposed APIs.

## Looking for help

If you have questions for extension development, try asking on:

* [VS Code Discussions][LK008]: GitHub community to discuss VS Code's extension platform, ask questions, help other members of the community, and get answers.
* [Stack Overflow][LK009]: There are [thousands of questions][LK009] tagged `vscode-extensions`, and over half of them already have answers. Search for your issue, ask questions, or help your fellow developers by answering VS Code extension development questions!
* [VS Code Dev Slack][LK010]: Public chatroom for extension developers. VS Code team members often join in the conversations.

To provide feedback on the documentation, create new issues at [Microsoft/vscode-docs][LK011].
If you have extension questions that you cannot find an answer for, or issues with the VS Code Extension API, please open new issues at [Microsoft/vscode][LK012].


<a id="_api_get-started_your-first-extension" ></a>

# /api/get-started/your-first-extension
----------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: DC915D6C-13D4-4022-9101-57C4A4118B07
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Create your first Visual Studio Code extension (plug-in) with a simple Hello World example.
    ---

## Your First Extension

In this topic, we'll teach you the fundamental concepts for building extensions. Make sure you have [Node.js][LK013] and [Git][LK014] installed.

First, use [Yeoman][LK015] and [VS Code Extension Generator][LK016] to scaffold a TypeScript or JavaScript project ready for development.

- If you do not want to install Yeoman for later use, run the following command:

  ```bash
  npx --package yo --package generator-code -- yo code
  ```

- If you instead want to install Yeoman globally to ease running it repeatedly, run the following command:

  ```bash
  npm install --global yo generator-code

  yo code
  ```

For a TypeScript project, fill out the following fields:

```bash
# ? What type of extension do you want to create? New Extension (TypeScript)
# ? What's the name of your extension? HelloWorld
### Press <Enter> to choose default for all options below ###

# ? What's the identifier of your extension? helloworld
# ? What's the description of your extension? LEAVE BLANK
# ? Initialize a git repository? Yes
# ? Bundle the source code with webpack? No
# ? Which package manager to use? npm

# ? Do you want to open the new folder with Visual Studio Code? Open with `code`

```

Inside the editor, open `src/extension.ts` and press `kb(workbench.action.debug.start)` or run the command **Debug: Start Debugging** from the Command Palette (`kb(workbench.action.showCommands)`). This will compile and run the extension in a new **Extension Development Host** window.

Run the **Hello World** command from the Command Palette (`kb(workbench.action.showCommands)`) in the new window:

<video loop muted playsinline controls title="Launch your first VS Code extension video">
  <source src="/assets/api/get-started/your-first-extension/launch.mp4" type="video/mp4">
</video>

You should see the `Hello World from HelloWorld!` notification showing up. Success!

If you aren't able to see the **Hello World** command in the debug window, check the `package.json` file and make sure that `engines.vscode` version is compatible with the installed version of VS Code.

## Developing the extension

Let's make a change to the message:

1. Change the message from "Hello World from HelloWorld!" to "Hello VS Code" in `extension.ts`.
1. Run **Developer: Reload Window** in the new window.
1. Run the command **Hello World** again.

You should see the updated message showing up.

<video loop muted playsinline controls title="Reload VS Code extension video">
  <source src="/assets/api/get-started/your-first-extension/reload.mp4" type="video/mp4">
</video>

Here are some ideas for things for you to try:

- Give the **Hello World** command a new name in the Command Palette.
- [Contribute][LN069] another command that displays current time in an information message. Contribution points are static declarations you make in the `package.json` [Extension Manifest][FX000] to extend VS Code, such as adding commands, menus, or keybindings to your extension.
- Replace the `vscode.window.showInformationMessage` with another [VS Code API][LN069] call to show a warning message.

## Debugging the extension

VS Code's built-in debugging functionality makes it easy to debug extensions. Set a breakpoint by clicking the gutter next to a line, and VS Code will hit the breakpoint. You can hover over variables in the editor or use the **Run and Debug** view in the left to check a variable's value. The Debug Console allows you to evaluate expressions.

<video loop muted playsinline controls title="Debug VS Code extension video">
  <source src="/assets/api/get-started/your-first-extension/debug.mp4" type="video/mp4">
</video>

You can learn more about debugging Node.js apps in VS Code in the [Node.js Debugging Topic][LN070].

## Next steps

In the next topic, [Extension Anatomy][LN070], we'll take a closer look at the source code of the `Hello World` sample and explain key concepts.

You can find the source code of this tutorial at: [https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample][LK016]. The [Extension Guides][LN070] topic contains other samples, each illustrating a different VS Code API or Contribution Point, and following the recommendations in our [UX Guidelines][LN070].

### Using JavaScript

In this guide, we mainly describe how to develop VS Code extension with TypeScript because we believe TypeScript offers the best experience for developing VS Code extensions. However, if you prefer JavaScript, you can still follow along using [helloworld-minimal-sample][LK017].

### UX Guidelines

This is also a good time to review our [UX Guidelines][LN070] so you can start designing your extension user interface to follow the VS Code best practices.


<a id="_api_get-started_extension-anatomy" ></a>

# /api/get-started/extension-anatomy
-------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 8027f6fb-6c9e-4106-8ef1-f9b0ba1b7085
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Explain the structure of a Visual Studio Code extension (plug-in)
    ---

## Extension Anatomy

In the last topic, you were able to get a basic extension running. How does it work under the hood?

The `Hello World` extension does 3 things:

- Registers the [`onCommand`][LN071] [**Activation Event**][LN071]: `onCommand:helloworld.helloWorld`, so the extension becomes activated when user runs the `Hello World` command.
- Uses the [`contributes.commands`][LN072] [**Contribution Point**][LN072] to make the command `Hello World` available in the Command Palette, and bind it to a command ID `helloworld.helloWorld`.
- Uses the [`commands.registerCommand`][LN073] [**VS Code API**][LN073] to bind a function to the registered command ID `helloworld.helloWorld`.

Understanding these three concepts is crucial to writing extensions in VS Code:

- [**Activation Events**][FX001]: events upon which your extension becomes active.
- [**Contribution Points**][FX002]: static declarations that you make in the `package.json` [Extension Manifest][FX000] to extend VS Code.
- [**VS Code API**][LN074]: a set of JavaScript APIs that you can invoke in your extension code.

In general, your extension would use a combination of Contribution Points and VS Code API to extend VS Code's functionality. The [Extension Capabilities Overview][LN074] topic helps you find the right Contribution Point and VS Code API for your extension.

Let's take a closer look at `Hello World` sample's source code and see how these concepts apply to it.

## Extension File Structure

```
.
├── .vscode
│   ├── launch.json     // Config for launching and debugging the extension
│   └── tasks.json      // Config for build task that compiles TypeScript
├── .gitignore          // Ignore build output and node_modules
├── README.md           // Readable description of your extension's functionality
├── src
│   └── extension.ts    // Extension source code
├── package.json        // Extension manifest
├── tsconfig.json       // TypeScript configuration
```

You can read more about the configuration files:

- `launch.json` used to configure VS Code [Debugging][LN075]
- `tasks.json` for defining VS Code [Tasks][LN076]
- `tsconfig.json` consult the TypeScript [Handbook][LK018]

However, let's focus on `package.json` and `extension.ts`, which are essential to understanding the `Hello World` extension.

### Extension Manifest

Each VS Code extension must have a `package.json` as its [Extension Manifest][FX000]. The `package.json` contains a mix of Node.js fields such as `scripts` and `devDependencies` and VS Code specific fields such as `publisher`, `activationEvents` and `contributes`. You can find description of all VS Code specific fields in [Extension Manifest Reference][FX000]. Here are some most important fields:

- `name` and `publisher`: VS Code uses `<publisher>.<name>` as a unique ID for the extension. For example, the Hello World sample has the ID `vscode-samples.helloworld-sample`. VS Code uses the ID to uniquely identify your extension.
- `main`: The extension entry point.
- `activationEvents` and `contributes`: [Activation Events][FX001] and [Contribution Points][FX002].
- `engines.vscode`: This specifies the minimum version of VS Code API that the extension depends on.

```json
{
  "name": "helloworld-sample",
  "displayName": "helloworld-sample",
  "description": "HelloWorld example for VS Code",
  "version": "0.0.1",
  "publisher": "vscode-samples",
  "repository": "https://github.com/microsoft/vscode-extension-samples/helloworld-sample",
  "engines": {
    "vscode": "^1.51.0"
  },
  "categories": ["Other"],
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "helloworld.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run compile",
    "compile": "tsc -p ./",
    "watch": "tsc -watch -p ./"
  },
  "devDependencies": {
    "@types/node": "^8.10.25",
    "@types/vscode": "^1.51.0",
    "tslint": "^5.16.0",
    "typescript": "^3.4.5"
  }
}
```

> **Note**: If your extension targets a VS Code version prior to 1.74, you must explicitly list `onCommand:helloworld.helloWorld` in `activationEvents`.

## Extension Entry File

The extension entry file exports two functions, `activate` and `deactivate`. `activate` is executed when your registered **Activation Event** happens. `deactivate` gives you a chance to clean up before your extension becomes deactivated. For many extensions, explicit cleanup may not be required, and the `deactivate` method can be removed. However, if an extension needs to perform an operation when VS Code is shutting down or the extension is disabled or uninstalled, this is the method to do so.

The VS Code extension API is declared in the [@types/vscode][LK019] type definitions. The version of the `vscode` type definitions is controlled by the value in the `engines.vscode` field in `package.json`. The `vscode` types give you IntelliSense, Go to Definition, and other TypeScript language features in your code.

```ts
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "helloworld-sample" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    vscode.window.showInformationMessage('Hello World!');
  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
```


<a id="_api_get-started_wrapping-up" ></a>

# /api/get-started/wrapping-up
-------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: a15875fa-19b5-4c11-8903-864af133ce57
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Next steps to take after studying the Getting Started section
    ---

## Wrapping Up

In the [Your First Extension][LN076] topic, you learned how to create, run, and debug an extension. In the [Extension Anatomy][LN076] topic, you learned fundamental concepts to Visual Studio Code extension development. However, we have only seen the tip of the iceberg, and here are some suggested routes for furthering your VS Code extension development skills.

## Extension Capabilities

In this section, we split the [VS Code API][LN076] and [Contribution Points][FX002] into a few categories, each with short descriptions as to what your extension could achieve. Validate that your extension idea is achievable by reviewing the [VS Code API][LN076] or reading the [Extension Capabilities][LN076] section for new extension ideas.

## Guides & Samples

We have a great collection of sample extensions that you can adapt from, and some of them include a detailed guide that explains the source code. You can find all samples and guides in the [Extension Guide Listing][LN076] or the [vscode-extension-samples][LK019] repository.

## UX Guidelines

To help make your extension fit seamlessly into the VS Code user interface, refer to the [UX Guidelines][LN076], where you'll learn the best practices for creating extension UI and conventions for following the preferred VS Code workflows.

## Testing and Publishing

This section includes topics that help you develop high-quality VS Code extensions. For example, you can learn

- How to add [integration tests][LN076] for your extension
- How to [publish your extension][LN076] to the VS Code [Marketplace][LK020]
- How to set up [Continuous Integration][LN076] for your extension


<a id="_api_extension-capabilities_overview" ></a>

# /api/extension-capabilities/overview
---------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: d22675fc-6609-43f2-a66b-8f2a52597195
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn the details of what's possible with Visual Studio Code's rich extension (plug-in) API.
    ---

## Extension Capabilities Overview

Visual Studio Code offers many ways for extensions to extend its capabilities. It can sometimes be hard to find the right [Contribution Points][FX002] and [VS Code API][LN076] to use. This topic splits extension capabilities into a few categories. Each category describes:

- Some functionalities your extension could use
- Links to more detailed topics for using these functionalities
- A few extension ideas

However, we also impose [restrictions][LN077] upon extensions to ensure the stability and performance of VS Code. For example, extensions cannot access the DOM of VS Code UI.

## Common Capabilities

[Common Capabilities][LN078] are core pieces of functionality that you can use in any extension.

Some of these capabilities include:

- Registering commands, configurations, keybindings, or context menu items.
- Storing workspace or global data.
- Displaying notification messages.
- Using Quick Pick to collect user input.
- Open the system file picker to let users select files or folders.
- Use the Progress API to indicate long-running operations.

## Theming

[Theming][LN079] controls the look of VS Code, both the colors of source code in the editor and the colors of the VS Code UI. If you've ever wanted to make it look like you're coding the Matrix by making VS Code different shades of green, or just wanted to create the ultimate, minimalist grayscale workspace, then themes are for you.

**Extension Ideas**

- Change colors of your source code.
- Change colors of the VS Code UI.
- Port an existing TextMate theme to VS Code.
- Add custom file icons.

## Declarative Language Features

[Declarative Language Features][LN080] adds basic text editing support for a programming language such as bracket matching, auto-indentation and syntax highlighting. This is done declaratively, without writing any code. For more advanced language features, like IntelliSense or debugging, see [Programmatic Language Features][LN081].

**Extension Ideas**

- Bundle common JavaScript snippets into an extension.
- Tell VS Code about a new programming language.
- Add or replace the grammar for a programming language.
- Extend an existing grammar with grammar injections.
- Port an existing TextMate grammar to VS Code.

## Programmatic Language Features

[Programmatic Language Features][LN081] add rich programming language support such as Hovers, Go to Definition, diagnostic errors, IntelliSense and CodeLens. These language features are exposed through the [`vscode.languages.*`][LN082] API. An extension can either use these API directly, or write a Language Server and adapt it to VS Code using the VS Code [Language Server library][LK021].

Although we provide a listing of [language features][LN082] and their intended usage, nothing prevents you from using these API creatively. For example, CodeLens and Hovers are a great way to present additional information inline, while diagnostic errors can be used to highlight spelling or code style errors.

**Extension Ideas**

- Add hovers that show sample usage of an API.
- Report spelling or linter errors in source code using diagnostics.
- Register a new code formatter for HTML.
- Provide rich, context-aware IntelliSense.
- Add folding, breadcrumbs and outline support for a language.

## Workbench Extensions

[Workbench Extensions][LN083] extend the VS Code Workbench UI. Add new right-click actions to the File Explorer, or even build a custom explorer using VS Code's [TreeView][LN083] API. And if your extension needs a fully customized user interface, use the [Webview API][LN083] to build your own document preview or UI using standard HTML, CSS, and JavaScript.

**Extension Ideas**

- Add custom context menu actions to the File Explorer.
- Create a new, interactive TreeView in the Side Bar.
- Define a new Activity Bar view.
- Show new information in the Status Bar.
- Render custom content using the `WebView` API.
- Contribute Source Control providers.

## Debugging

You can take advantage of VS Code's [Debugging][LN083] functionality by writing [Debugger Extensions][LN083] that connect VS Code's debugging UI to a specific debugger or runtime.

**Extension Ideas**

- Connect VS Code's debugging UI to a debugger or runtime by contributing a [Debug Adapter implementation][LK022].
- Specify the languages supported by a debugger extension.
- Provide rich IntelliSense and hover information for the debug configuration attributes used by the debugger.
- Provide debug configuration snippets.

On the other hand, VS Code also offers a set of [Debug Extension API][LN084], with which you can implement debug-related functionality on top of any VS Code debugger, in order to automate users' debugging experience.

**Extension Ideas**

- Start debug sessions based on dynamically created debug configurations.
- Track the lifecycle of debug sessions.
- Create and manage breakpoints programmatically.

<!-- Add below content back after writing ./extending-core-functionalities.md  -->
<!-- ## Core Extensions

[Core Extensions][LN085] are for very advanced users. These let you build a custom back end for many of VS Code's low-level functionality. For example, the `FileSystem` API can be used to support working with files over FTP or other protocols. Core extensions typically work transparently from a user's point of view.

**Extension Ideas**

- Add support for working with remote files over FTP or SFTP.
- Register new source control provider, such as Mercurial.
- Implement a custom file search provider. -->

## UX Guidelines

To help make your extension fit seamlessly into the VS Code user interface, refer to the [UX Guidelines][LN085], where you'll learn the best practices for creating extension UI and conventions for following the preferred VS Code workflows.

## Restrictions

There are certain restrictions we impose upon extensions. Here are the restrictions and their purposes.

### No DOM Access

Extensions have no access to the DOM of VS Code UI. You **cannot** write an extension that applies custom CSS to VS Code or adds an HTML element to VS Code UI.

At VS Code, we're continually trying to optimize use of the underlying web technologies to deliver an always available, highly responsive editor and we will continue to tune our use of the DOM as these technologies and our product evolve. To ensure that extensions cannot interfere with the stability and performance of VS Code, and that we can continue to improve the DOM of VS Code without breaking existing extensions, we run extensions in an [Extension Host][LN085] process and prevent direct access to the DOM.

### No custom style sheets

A custom style sheet provided by users or extensions would work against the DOM structure and class names. These are not documented as we consider them internal. To evolve, refactor, or improve VS Code, we need the freedom to make changes to the user interface. Any change to the DOM can break existing custom style sheets, resulting in frustration for style sheet providers and a bad user experience with UI glitches coming from the broken style sheet.

Instead, VS Code aims to provide a well-designed extension API supporting UI customizations. The API is documented, comes with tooling and samples, and is kept stable across all upcoming releases of VS Code.


<a id="_api_extension-capabilities_common-capabilities" ></a>

# /api/extension-capabilities/common-capabilities
--------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 9c48dfbf-e49d-4f33-aadc-5ebf06d5dde0
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Common capabilities that Visual Studio Code extensions (plug-ins) can take advantage of
    ---

## Common Capabilities

Common Capabilities are important building blocks for your extensions. Almost all extensions use some of these functionalities. Here is how you can take advantage of them.

## Command

Command is central to how VS Code works. You open the Command Palette to execute commands, bind custom keybindings to commands, and right-click to invoke commands in Context Menus.

An extension could:

- Register and execute commands with the [`vscode.commands`][LN086] API.
- Make commands available in the Command Palette with the [`contributes.commands`][LN086] Contribution Point.

Learn more about commands at the [Extension Guides / Command][LN086] topic.

## Configuration

An extension can contribute extension-specific settings with the [`contributes.configuration`][LN087] Contribution Point and read them using the [`workspace.getConfiguration`][LN088] API.

## Keybinding

An extension can add custom keybindings. Read more in the [`contributes.keybindings`][LN089] and [Key Bindings][LN090] topics.

## Context Menu

An extension can register custom Context Menu items that will be displayed in different parts of the VS Code UI on right-click. Read more at the [`contributes.menus`][LN091] Contribution Point.

## Data Storage

There are four options for storing data:

- [`ExtensionContext.workspaceState`][LN092]: A workspace storage where you can write key/value pairs. VS Code manages the storage and will restore it when the same workspace is opened again.
- [`ExtensionContext.globalState`][LN093]: A global storage where you can write key/value pairs. VS Code manages the storage and will restore it for each extension activation. You can selectively synchronize key/value pairs in global storage by setting the keys for sync using `setKeysForSync` method on `globalState`.
- [`ExtensionContext.storageUri`][LN094]: A workspace specific storage URI pointing to a local directory where your extension has read/write access. This is a good option if you need to store large files that are accessible only from the current workspace.
- [`ExtensionContext.globalStorageUri`][LN095]: A global storage URI pointing to a local directory where your extension has read/write access. This is a good option if you need to store large files that are accessible from all workspaces.

The extension context is available to the `activate` function in the [Extension Entry File][LN096].

### setKeysForSync example

If your extension needs to preserve some user state across different machines then provide the state to [Setting Sync][LN097] using `vscode.ExtensionContext.globalState.setKeysForSync`.

You can use the following pattern:

```TypeScript
// on activate
const versionKey = 'shown.version';
context.globalState.setKeysForSync([versionKey]);

// later on show page
const currentVersion = context.extension.packageJSON.version;
const lastVersionShown = context.globalState.get(versionKey);
if (isHigher(currentVersion, lastVersionShown)) {
    context.globalState.update(versionKey, currentVersion);
}
```

Sharing state across machines can help avoid the problem of users seeing multiple instances of a welcome or update page, by sharing dismissed or viewed flags.

## Display Notifications

Almost all extensions need to present information to the user at some point. VS Code offers three APIs for displaying notification messages of different severity:

- [`window.showInformationMessage`][LN098]
- [`window.showWarningMessage`][LN099]
- [`window.showErrorMessage`][LN100]

## Quick Pick

With the [`vscode.QuickPick`][LN101] API, you can easily collect user input or let the user make a selection from multiple options. The [QuickInput sample][LK023] illustrates the API.

## File Picker

Extensions can use the [`window.showOpenDialog`][LN102] API to open the system file picker and select files or folders.

## Output Channel

The Output Panel displays a collection of [`OutputChannel`][LN103], which are great for logging purpose. You can easily take advantage of it with the [`window.createOutputChannel`][LN104] API.

## Progress API

You can use the [`vscode.Progress`][LN105] API for reporting progress updates to the user.

Progress can be shown in different locations using the [`ProgressLocation`][LN106] option:

- In the Notifications area
- In the Source Control view
- General progress in the VS Code window

The [Progress sample][LK024] illustrates this API.


<a id="_api_extension-capabilities_theming" ></a>

# /api/extension-capabilities/theming
--------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 37b6ae0a-d1b5-48b6-9bd4-9b50ef11d573
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to add custom themes for colors and icons in Visual Studio Code.
    ---

## Theming

In Visual Studio Code, there are three types of themes:

- **Color Theme**: A mapping from both UI Component Identifier and Text Token Identifier to colors. Color theme allows you to apply your favorite colors to both VS Code UI Components and the text in the editor.
- **File Icon Theme**: A mapping from file type / file name to images. File icons are displayed across the VS Code UI in places such as File Explorer, Quick Open List, and Editor Tab.
- **Product Icon Theme**: A set of icons used throughout the UI, from the Side bar, the Activity bar, status bar to the editor glyph margin.

## Color Theme

![color-theme][LN107]

As you can see in the illustration, Color Theme defines colors for UI components as well as for highlighting in the editor:

- The `colors` mapping that controls colors for UI Components.
- The `tokenColors` define the color and styles for highlighting in the editor. The [Syntax Highlight guide][LN107] has more information on that topic.
- The `semanticTokenColors` mappings as well as the `semanticHighlighting` setting allow to enhance the highlighting in the editor. The [Semantic Highlight guide][LN107] explains the APIs related to that.

We have a [Color Theme guide][LN107] and a [Color Theme sample][LK025] that illustrates how to create a theme.

## File Icon Theme

File icon themes allow you to:

- Create a mapping from unique file icon identifiers to images or font icons.
- Associate files to these unique file icon identifiers by filenames or file language types.

The [File Icon Theme guide][LN107] discusses how to create a File Icon Theme.
![file-icon-theme][LN108]

## Product Icon Theme

Product icon themes allow you to:

Redefine all the built-in icons used in the workbench. Examples are the icons in filter action buttons and view icons, in the status bar, breakpoints and the folding icons in trees and the editor.

The [Product Icon Theme guide][LN108] discusses how to create a Product Icon Theme.


<a id="_api_extension-capabilities_extending-workbench" ></a>

# /api/extension-capabilities/extending-workbench
--------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: e0d5bd37-f020-4235-ad81-c977baaeb24f
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Explain how to extend Visual Studio Code's workbench area with custom UI components
    ---

## Extending Workbench

"Workbench" refers to the overall Visual Studio Code UI that encompasses the following UI components:

- Title Bar
- Activity Bar
- Side Bar
- Panel
- Editor Group
- Status Bar

VS Code provides various APIs that allow you to add your own components to the Workbench. For example, in the image below:

![workbench-contribution][LN109]

- Activity Bar: The [Azure App Service extension][LK026] adds a [View Container][LN110]
- Side Bar: The built-in [NPM extension][LK027] adds a [Tree View][LN111] to the Explorer View
- Editor Group: The built-in [Markdown extension][LK028] adds a [Webview][LN112] next to other editors in the Editor Group
- Status Bar: The [VSCodeVim extension][LK029] adds a [Status Bar Item][LN113] in the Status Bar

## Views Container

With the [`contributes.viewsContainers`][LN114] Contribution Point, you can add new Views Containers that display next to the five built-in Views Containers. Learn more at the [Tree View][LN114] topic.

## Tree View

With the [`contributes.views`][LN115] Contribution Point, you can add new Views that display in any of the View Containers. Learn more at the [Tree View][LN115] topic.

## Webview

Webviews are highly customizable views built with HTML/CSS/JavaScript. They display next to text editors in the Editor Group areas. Read more about Webview in the [Webview guide][LN115].

## Status Bar Item

Extensions can create custom [`StatusBarItem`][LN116] that display in the Status Bar. Status Bar Items can show text and icons and run commands on click events.

- Show text and icons
- Run a command on click

You can learn more by reviewing the [Status Bar extension sample][LK030].


<a id="_api_extension-guides_overview" ></a>

# /api/extension-guides/overview
---------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: B32601A8-27ED-4D97-BA83-F1C8C945C635
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn from Visual Studio Code extension guides and code samples
    ---

## Extension Guides

Once you have learned the basics of Visual Studio Code Extension API in the [Hello World][LN116] sample, it's time to build some real-world extensions. While the [Extension Capabilities][LN116] section offers high-level overviews of what an extension **can** do, this section contains a list of detailed code guides and samples that explains **how** to use a specific VS Code API.

In each guide or sample, you can expect to find:

- Thoroughly commented source code.
- A gif or image showing the usage of the sample extension.
- Instructions for running the sample extension.
- Listing of VS Code API being used.
- Listing of Contribution Points being used.
- Real-world extensions resembling the sample.
- Explanation of API concepts.

## Guides & Samples

Here are the guides on the VS Code website, including their usage of the [VS Code API][LN116] and [Contribution Points][FX002]. Don't forget to refer to the [UX Guidelines][LN116] to learn the user interface best practices for creating extensions.

| Guide on VS Code Website | API & Contribution |
| --- | --- |
| [Command][LK031]            | [commands][LK032] |
| [Color Theme][LK033]        | [contributes.themes][LK034] |
| [File Icon Theme][LK035]    | [contributes.iconThemes][LK036] |
| [Product Icon Theme][LK037] | [contributes.productIconThemes][LK038] |
| [Tree View][LK039]          | [window.createTreeView][LK040]<br>[window.registerTreeDataProvider][LK041]<br>[TreeView][LK042]<br>[TreeDataProvider][LK043]<br>[contributes.views][LK044]<br>[contributes.viewsContainers][LK045] |
| [Webview][LK046]            | [window.createWebviewPanel][LK047]<br>[window.registerWebviewPanelSerializer][LK048] |
| [Custom Editors][LK049]     | [window.registerCustomEditorProvider][LK050]<br>[CustomTextEditorProvider][LK051]<br>[contributes.customEditors][LK052] |
| [Virtual Documents][LK053]  | [workspace.registerTextDocumentContentProvider][LK054]<br>[commands.registerCommand][LK055]<br>[window.showInputBox][LK056] |
| [Virtual Workspaces][LK057] | [workspace.fs][LK058]<br>capabilities.virtualWorkspaces |
| [Workspace Trust][LK059]    | [workspace.isTrusted][LK060]<br>[workspace.onDidGrantWorkspaceTrust][LK061]<br>capabilities.untrustedWorkspaces |
| [Task Provider][LK062]      | [tasks.registerTaskProvider][LK063]<br>[Task][LK064]<br>[ShellExecution][LK065]<br>[contributes.taskDefinitions][LK066] |
| [Source Control][LK067]     | [workspace.workspaceFolders][LK068]<br>[SourceControl][LK069]<br>[SourceControlResourceGroup][LK070]<br>[scm.createSourceControl][LK071]<br>[TextDocumentContentProvider][LK072]<br>[contributes.menus][LK073] |
| [Debugger Extension][LK074] | [contributes.breakpoints][LK075]<br>[contributes.debuggers][LK076]<br>[debug][LK077] |
| [Markdown Extension][LK078] | markdown.previewStyles<br>markdown.markdownItPlugins<br>markdown.previewScripts       |
| [Test Extension][LK079]     | [TestController][LK080]<br>[TestItem][LK081] |
| [Custom Data Extension][LK082] | contributes.html.customData<br>contributes.css.customData |
<br>

Here is a list of additional samples from the [VS Code Extensions samples repo][LK082].

| Sample on GitHub Repo | API & Contribution |
| --- | --- |
| [Webview Sample][LK083] | [window.createWebviewPanel][LK083]<br>[window.registerWebviewPanelSerializer][LK083] |
| [Status Bar Sample][LK083] | [window.createStatusBarItem][LK084]<br>[StatusBarItem][LK085] |
| [Tree View Sample][LK086] | [window.createTreeView][LK086]<br>[window.registerTreeDataProvider][LK086]<br>[TreeView][LK086]<br>[TreeDataProvider][LK086]<br>[contributes.views][LK086]<br>[contributes.viewsContainers][LK086] |
| [Task Provider Sample][LK087] | [tasks.registerTaskProvider][LK087]<br>[Task][LK087]<br>[ShellExecution][LK087]<br>[contributes.taskDefinitions][LK087] |
| [Multi Root Sample][LK088] | [workspace.getWorkspaceFolder][LK089]<br>[workspace.onDidChangeWorkspaceFolders][LK090] |
| [Completion Provider Sample][LK091] | [languages.registerCompletionItemProvider][LK092]<br>[CompletionItem][LK093]<br>[SnippetString][LK094] |
| [File System Provider Sample][LK095] | [workspace.registerFileSystemProvider][LK096] |
| [Editor Decorator Sample][LK097] | [TextEditor.setDecorations][LK098]<br>[DecorationOptions][LK099]<br>[DecorationInstanceRenderOptions][LK100]<br>[ThemableDecorationInstanceRenderOptions][LK101]<br>[window.createTextEditorDecorationType][LK102]<br>[TextEditorDecorationType][LK103]<br>[contributes.colors][LK104] |
| [L10N Sample][LK105] |  |
| [Terminal Sample][LK106] | [window.createTerminal][LK107]<br>[window.onDidChangeActiveTerminal][LK108]<br>[window.onDidCloseTerminal][LK109]<br>[window.onDidOpenTerminal][LK110]<br>[window.Terminal][LK111]<br>[window.terminals][LK112] |
| [Vim Sample][LK113] | [commands][LK113]<br>[StatusBarItem][LK113]<br>[window.createStatusBarItem][LK113]<br>[TextEditorCursorStyle][LK114]<br>[window.activeTextEditor][LK115]<br>[Position][LK116]<br>[Range][LK117]<br>[Selection][LK118]<br>[TextEditor][LK119]<br>[TextEditorRevealType][LK120]<br>[TextDocument][LK121] |
| [Source Control Sample][LK122] | [workspace.workspaceFolders][LK122]<br>[SourceControl][LK122]<br>[SourceControlResourceGroup][LK122]<br>[scm.createSourceControl][LK122]<br>[TextDocumentContentProvider][LK122]<br>[contributes.menus][LK122] |
| [Commenting API Sample][LK123] |  |
| [Document Editing Sample][LK124] | [commands][LK124] |
| [Getting Started Sample][LK125] | [contributes.walkthroughs][LK126] |
| [Test extension][LK127] | [TestController][LK127]<br>[TestItem][LK128] |

## Language Extension Samples

These samples are [Language Extensions][LN116] samples:

| Sample | Guide on VS Code Website |
|--------|--------------------------|
| [Snippet Sample][LK129] | [/api/language-extensions/snippet-guide][LK130] | [contributes.snippets][LK131] |
| [Language Configuration Sample][LK132] | [/api/language-extensions/language-configuration-guide][LK133] | [contributes.languages][LK134] |
| [LSP Sample][LK135] | [/api/language-extensions/language-server-extension-guide][LK136] |  |
| [LSP Log Streaming Sample][LK137] | N/A |  |
| [LSP Multi Root Server Sample][LK138] | [https://github.com/microsoft/vscode/wiki/Adopting-Multi-Root-Workspace-APIs#language-client--language-server][LK139] (GitHub repo wiki) |  |
| [LSP Web Extension Sample][LK140] | [/api/language-extensions/language-server-extension-guide][LK140] |  |


<a id="_api_extension-guides_command" ></a>

# /api/extension-guides/command
--------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 995c7085-5fc0-44e0-a171-30a759c0b7da
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to using commands programmatically in Visual Studio Code extensions (plug-ins)
    ---

## Commands

Commands trigger actions in Visual Studio Code. If you have ever [configured a keybinding][LN116], then you've worked with commands. Commands are also used by extensions to expose functionality to users, bind to actions in VS Code's UI, and implement internal logic.

## Using Commands

VS Code includes a large set of [built-in commands][LN116] that you can use to interact with the editor, control the user interface, or perform background operations. Many extensions also expose their core functionality as commands that users and other extensions can leverage.

### Programmatically executing a command

The [`vscode.commands.executeCommand`][LN117] API programmatically executes a command. This lets you use VS Code's built-in functionality, and build on extensions such as VS Code's built-in Git and Markdown extensions.

The `editor.action.addCommentLine` command, for example, comments the currently selected lines in the active text editor:

```ts
import * as vscode from 'vscode';

function commentLine() {
  vscode.commands.executeCommand('editor.action.addCommentLine');
}
```

Some commands take arguments that control their behavior. Commands may also return a result. The API-like `vscode.executeDefinitionProvider` command, for example, queries a document for definitions at a given position. It takes a document URI and a position as arguments, and returns a promise with a list of definitions:

```ts
import * as vscode from 'vscode';

async function printDefinitionsForActiveEditor() {
  const activeEditor = vscode.window.activeTextEditor;
  if (!activeEditor) {
    return;
  }

  const definitions = await vscode.commands.executeCommand<vscode.Location[]>(
    'vscode.executeDefinitionProvider',
    activeEditor.document.uri,
    activeEditor.selection.active
  );

  for (const definition of definitions) {
    console.log(definition);
  }
}
```

To find available commands:

- [Browse the keyboard shortcuts][LN117]
- [Look through VS Code's built-in advanced commands api][LN117]

### Command URIs

Commands URIs are links that execute a given command. They can be used as clickable links in hover text, completion item details, or inside of webviews.

A command URI uses the `command` scheme followed by the command name. The command URI for the `editor.action.addCommentLine` command, for example, is `command:editor.action.addCommentLine`. Here's a hover provider that shows a link in the comments of the current line in the active text editor:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerHoverProvider(
    'javascript',
    new class implements vscode.HoverProvider {
      provideHover(
        _document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const commentCommandUri = vscode.Uri.parse(`command:editor.action.addCommentLine`);
        const contents = new vscode.MarkdownString(`[Add comment][LN118]`);

        // To enable command URIs in Markdown content, you must set the `isTrusted` flag.
        // When creating trusted Markdown string, make sure to properly sanitize all the
        // input content so that only expected command URIs can be executed
        contents.isTrusted = true;

        return new vscode.Hover(contents);
      }
    }()
  );
}
```

The list of arguments to the command is passed as a JSON array that has been properly URI encoded: The example below uses the `git.stage` command to create a hover link that stages the current file:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerHoverProvider(
    'javascript',
    new class implements vscode.HoverProvider {
      provideHover(
        document: vscode.TextDocument,
        _position: vscode.Position,
        _token: vscode.CancellationToken
      ): vscode.ProviderResult<vscode.Hover> {
        const args = [{ resourceUri: document.uri }];
        const stageCommandUri = vscode.Uri.parse(
          `command:git.stage?${encodeURIComponent(JSON.stringify(args))}`
        );
        const contents = new vscode.MarkdownString(`[Stage file][LN119]`);
        contents.isTrusted = true;
        return new vscode.Hover(contents);
      }
    }()
  );
}
```

You can enable command URIs in [webviews][LN119] by setting `enableCommandUris` in the `WebviewOptions` when the webview is created.

## Creating new commands

### Registering a command

[`vscode.commands.registerCommand`][LN119] binds a command ID to a handler function in your extension:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const command = 'myExtension.sayHello';

  const commandHandler = (name: string = 'world') => {
    console.log(`Hello ${name}!!!`);
  };

  context.subscriptions.push(vscode.commands.registerCommand(command, commandHandler));
}
```

The handler function will be invoked whenever the `myExtension.sayHello` command is executed, be it programmatically with `executeCommand`, from the VS Code UI, or through a keybinding.

### Creating a user facing command

`vscode.commands.registerCommand` only binds a command ID to a handler function. To expose this command in the Command Palette so it is discoverable by users, you also need a corresponding command `contribution` in your extension's `package.json`:

```json
{
  "contributes": {
    "commands": [
      {
        "command": "myExtension.sayHello",
        "title": "Say Hello"
      }
    ]
  }
}
```

The `commands` contribution tells VS Code that your extension provides a given command and should be activated when that command is invoked, and also lets you control how the command is displayed in the UI. Now our command will show up in the Command Palette:

![The contributed command in the Command Palette][LN120]

Now when a user first invokes the `myExtension.sayHello` command from the Command Palette or through a keybinding, the extension will be activated and `registerCommand` will bind `myExtension.sayHello` to the proper handler.

> **Note**: Extensions targeting VS Code versions prior to 1.74.0 must explicitly register an `onCommand` `activationEvent` for all user facing commands so that the extension activates and `registerCommand` executes:
> ```json
> {
>   "activationEvents": ["onCommand:myExtension.sayHello"]
> }
> ```


You do not need an `onCommand` activation event for internal commands but you must define them for any commands that:

- Can be invoked using the Command Palette.
- Can be invoked using a keybinding.
- Can be invoked through the VS Code UI, such as through the editor title bar.
- Is intended as an API for other extensions to consume.

### Controlling when a command shows up in the Command Palette

By default, all user facing commands contributed through the `commands` section of the `package.json` show up in the Command Palette. However, many commands are only relevant in certain circumstances, such as when there is an active text editor of a given language or when the user has a certain configuration option set.

The [`menus.commandPalette`][LN120] contribution point lets you restrict when a command should show in the Command Palette. It takes the ID of the target command and a [when clause][LN120] that controls when the command is shown:

```json
{
  "contributes": {
    "menus": {
      "commandPalette": [
        {
          "command": "myExtension.sayHello",
          "when": "editorLangId == markdown"
        }
      ]
    }
  }
}
```

Now the `myExtension.sayHello` command will only show up in the Command Palette when the user is in a Markdown file.

### Enablement of commands

Commands support enablement via an `enablement` property - its value is a [when-clause][LN120]. Enablement applies to all menus and to registered keybindings.

> **Note**: There is semantic overlap between `enablement` and the `when` condition of menu items. The latter is used to prevent menus full of disabled items. For example, a command that analyzes a JavaScript regular expression should show **when** the file is JavaScript and be **enabled** only when the cursor is over a regular expression. The `when` clause prevents clutter, by not showing the command for all other language files. Preventing cluttered menus is highly recommended.

Last, menus showing commands, like the Command Palette or context menus, implement different ways of dealing with enablement. Editor and explorer context menus render enablement/disablement items while the Command Palette filters them.

### Using a custom when clause context

If you are authoring your own VS Code extension and need to enable/disable commands, menus, or views by using a `when` clause context and none of the existing keys suit your needs, then you can add your own context.

The first example below sets the key `myExtension.showMyCommand` to true, which you can use in enablement of commands or with the `when` property. The second example stores a value that you could use with a `when` clause to check if the number of cool open things is greater than 2.

```js
vscode.commands.executeCommand('setContext', 'myExtension.showMyCommand', true);

vscode.commands.executeCommand('setContext', 'myExtension.numberOfCoolOpenThings', 2);
```


<a id="_api_extension-guides_color-theme" ></a>

# /api/extension-guides/color-theme
------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 113b458a-3692-4ccf-a181-048bd572a120
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to creating Color Theme in Visual Studio Code
    ---

## Color Theme

Colors visible in the Visual Studio Code user interface fall in two categories:

- Workbench colors used in views and editors, from the Activity Bar to the Status Bar. A complete list of all these colors can be found in the [theme color reference][LN120].
- Syntax colors and styles used for source code in the editor. The theming of these colors is different as syntax colorization is based on TextMate grammars and TextMate themes as well as semantic tokens.

This guide will cover the different ways in which you can create themes.

## Workbench colors

The easiest way to create a new workbench color theme is to start with an existing color theme and customize it. First switch to the color theme that you want to modify, then open your [settings][LN121] and make changes to the `workbench.colorCustomizations` setting. Changes are applied live to your VS Code instance.

The following, for example, would change the color of the title bar:

```json
{
  "workbench.colorCustomizations": {
    "titleBar.activeBackground": "#ff0000"
  }
}
```

A complete list of all themable colors can be found in the [color reference][LN121].

## Syntax colors

For syntax highlighting colors, there are two approaches. You can reference an existing TextMate theme (`.tmTheme` file) from the community, or you can create your own theming rules. The easiest way is to start with an existing theme and customize it, much like in the workbench colors section above.

First switch to the color theme to customize and use the `editor.tokenColorCustomizations` [settings][LN121]. Changes are applied live to your VS Code instance and no refreshing or reloading is necessary.

For example, the following would change the color of comments within the editor:

```json
{
  "editor.tokenColorCustomizations": {
    "comments": "#FF0000"
  }
}
```

The setting supports a simple model with a set of common token types such as 'comments', 'strings' and 'numbers' available. If you want to color more than that, you need to use TextMate theme rules directly, which are explained in detail in the [Syntax Highlighting guide][LN121].

## Semantic colors

Semantic highlighting is available for TypeScript and JavaScript in VS Code release 1.43. We expect it to be adopted by other languages soon.

Semantic highlighting enriches syntax coloring based on symbol information from the language service, which has more complete understanding of the project. The coloring changes appear once the language server is running and has computed the semantic tokens.

Each theme controls whether to enable semantic highlighting with a specific setting that is part of the theme definition. The style of each semantic token is defined by the theme's styling rules.

Users can override the semantic highlighting feature and colorization rules using the `editor.tokenColorCustomizations` setting:

Enable semantic highlighting for a specific theme:

```json
"editor.tokenColorCustomizations": {
    "[Material Theme]": {
        "semanticHighlighting": true
    }
},
```

Themes can define theming rules for semantic tokens as described in the [Syntax Highlighting guide][LN122].

## Create a new Color Theme

Once you have tweaked your theme colors using `workbench.colorCustomizations` and `editor.tokenColorCustomizations`, it's time to create the actual theme.

1. Generate a theme file using the **Developer: Generate Color Theme from Current Settings** command from the **Command Palette**
2. Use VS Code's [Yeoman][LK140] extension generator to generate a new theme extension:

   ```bash
   npm install -g yo generator-code
   yo code
   ```

3. If you customized a theme as described above, select 'Start fresh'.

   ![yo code theme][LN123]

4. Copy the theme file generated from your settings to the new extension.

You can also use an existing TextMate theme by telling the extension generator to import a TextMate theme file (.tmTheme) and package it for use in VS Code. Alternatively, if you have already downloaded the theme, replace the `tokenColors` section with a link to the `.tmTheme` file to use.

```json
{
  "type": "dark",
  "colors": {
    "editor.background": "#1e1e1e",
    "editor.foreground": "#d4d4d4",
    "editorIndentGuide.background": "#404040",
    "editorRuler.foreground": "#333333",
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb"
  },
  "tokenColors": "./Diner.tmTheme"
}
```

> **Tip:** Give your color definition file the `-color-theme.json` suffix and you will get hovers, code completion, color decorators, and color pickers when editing.

> **Tip:** [ColorSublime][LK141] has hundreds of existing TextMate themes to choose from. Pick a theme you like and copy the Download link to use in the Yeoman generator or into your extension. It will be in a format like `"https://raw.githubusercontent.com/Colorsublime/Colorsublime-Themes/master/themes/(name).tmTheme"`

## Test a new Color Theme

To try out the new theme, press F5 to launch an Extension Development Host window.

There, open the Color Theme picker with **File** > **Preferences** > **Theme** > **Color Theme** and you can see your theme in the dropdown list. Arrow up and down to see a live preview of your theme.

![select my theme][LN124]

Changes to the theme file are applied live in the `Extension Development Host` window.

## Publishing a Theme to the Extension Marketplace

If you'd like to share your new theme with the community, you can publish it to the [Extension Marketplace][LN125]. Use the [vsce publishing tool][LN125] to package your theme and publish it to the VS Code Marketplace.

> **Tip:** To make it easy for users to find your theme, include the word "theme" in the extension description and set the `Category` to `Themes` in your `package.json`.

We also have recommendations on how to make your extension look great on the VS Code Marketplace, see [Marketplace Presentation Tips][LN126].

## Adding a new Color ID

Color IDs can also be contributed by extensions through the [color contribution point][LN127]. These colors also appear when using code complete in the `workbench.colorCustomizations` settings and the color theme definition file. Users can see what colors an extension defines in the [extension contributions][LN128] tab.

## Further reading

- [CSS Tricks - Creating a VS Code theme][LK142]


<a id="_api_extension-guides_file-icon-theme" ></a>

# /api/extension-guides/file-icon-theme
----------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: f470466d-89b0-4115-ab7a-2448023b0a6d
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to creating a File Icon Theme in Visual Studio Code
    ---

## File Icon Theme

Visual Studio Code displays icons next to filenames throughout its UI, and extensions can contribute new sets of file icons that users can choose from.

## Adding a new File Icon Theme

You can create your own file icon theme from icons (preferably SVG) and from icon fonts. As example, check out the two built-in themes: [Minimal][LK143] and [Seti][LK144].

To begin, create a VS Code extension and add the `iconTheme` contribution point.

```json
{
  "contributes": {
    "iconThemes": [
      {
        "id": "turtles",
        "label": "Turtles",
        "path": "./fileicons/turtles-icon-theme.json"
      }
    ]
  }
}
```

The `id` is the identifier for the icon theme. It is used as an identifier in the settings, so make it unique but also readable. `label` is shown in the file icon theme picker dropdown. The `path` points to a file in the extension that defines the icon set. If your icon set name follows the `*icon-theme.json` name scheme, you will get completion support and hovers in VS Code.

### File Icon Set File

The file icon set file is a JSON file consisting of file icon associations and icon definitions.

An icon association maps a file type ('file', 'folder', 'json-file'...) to an icon definition. Icon definitions define where the icon is located: That can be an image file or also glyph in a font.

### Icon definitions

The `iconDefinitions` section contains all definitions. Each definition has an id, which will be used to reference the definition. A definition can be referenced also by more than one file association.

```json
{
  "iconDefinitions": {
    "_folder_dark": {
      "iconPath": "./images/Folder_16x_inverse.svg"
    }
  }
}
```

This icon definition above contains a definition with the identifier `_folder_dark`.

The following properties are supported:

- `iconPath`: When using a svg/png: the path to the image.
- `fontCharacter`: When using a glyph font: The character in the font to use.
- `fontColor`: When using a glyph font: The color to use for the glyph.
- `fontSize`: When using a font: The font size. By default, the size specified in the font specification is used. Should be a relative size (e.g. 150%) to the parent font size.
- `fontId`: When using a font: The id of the font. If not specified, the first font specified in font specification section will be picked.

### File association

Icons can be associated to folders, folder names, files, file extensions, file names and [language IDs][LN129].

Additionally each of these associations can be refined for 'light' and 'highContrast' color themes.

Each file association points to an icon definition.

```json
{
  "file": "_file_dark",
  "folder": "_folder_dark",
  "folderExpanded": "_folder_open_dark",
  "folderNames": {
    ".vscode": "_vscode_folder"
  },
  "fileExtensions": {
    "ini": "_ini_file"
  },
  "fileNames": {
    "win.ini": "_win_ini_file"
  },
  "languageIds": {
    "ini": "_ini_file"
  },
  "light": {
    "folderExpanded": "_folder_open_light",
    "folder": "_folder_light",
    "file": "_file_light",
    "fileExtensions": {
      "ini": "_ini_file_light"
    }
  },
  "highContrast": {}
}
```

- `file` is the default file icon, shown for all files that don't match any extension, filename or language ID. Currently all properties defined by the definition of the file icon will be inherited (only relevant for font glyphs, useful for the fontSize).
- `folder` is the folder icon for collapsed folders, and if `folderExpanded` is not set, also for expanded folders. Icons for specific folder names can be associated using the `folderNames` property.
  The folder icon is optional. If not set, no icon will be shown for folder.
- `folderExpanded` is the folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for `folder` will be shown.
- `folderNames` associates folder names to icons. The key of the set is the folder name, optionally prefixed by a single parent path segment (*). Patterns or wildcards are not supported. Folder name matching is case insensitive.
- `folderNamesExpanded` associates folder names to icons for expanded folder. The key of the set is the folder name, optionally prefixed by a single parent path segment (*). Patterns or wildcards are not supported. Folder name matching is case insensitive.
- `rootFolder` is the folder icon for collapsed workspace root folders , and if `rootFolderExpanded` is not set, also for expanded workspace root folders. If not set, the icon defined for `folder` will be shown for workspace root folders.
- `rootFolderExpanded` is the folder icon for expanded workspace root folders. If not set, the icon defined for `rootFolder` will be shown for expanded workspace root folders.
- `rootFolderNames` associates root folder names to icons. The key of the set is the folder name. Patterns or wildcards are not supported. Root folder name matching is case insensitive.
- `rootFolderNamesExpanded` associates root folder names to icons for expanded folder. The key of the set is the folder name. Patterns or wildcards are not supported. Root folder name matching is case insensitive.
- `languageIds` associates languages to icons. The key in the set is the language ID as defined in the [language contribution point][LN129]. The language of a file is evaluated based on the file extensions and file names as defined in the language contribution. Note that the 'first line match' of the language contribution is not considered.
- `fileExtensions` associates file extensions to icons. The key in the set is the file extension name. The extension name is a file name segment after a dot (not including the dot). File names with multiple dots such as `lib.d.ts` can match multiple extensions; 'd.ts' and 'ts'. Optionally, the file extension name can be prefixed by a single parent path segment (*). Extensions are compared case insensitive.
- `fileNames` associates file names to icons. The key in the set is the full file name, not including any path segments. Optionally, the file extension name can be prefixed by a single parent path segment (*). Patterns or wildcards are not supported. File name matching is case insensitive. A 'fileName' match is the strongest match, and the icon associated to the file name will be preferred over an icon of a matching fileExtension and also of a matching language ID.

(*) Some property keys (`folderNames`, `folderNamesExpanded`, `fileExtensions`, `fileNames`) can be prefixed by a single parent path segment. The icon will only be used if the resource's direct parent folder matches the parent path folder. This can be used to give resources in a particular folder (for example, `system`) a different appearance:

```json
  "fileNames": {
    "system/win.ini": "_win_ini_file"
  },
```

`system/win.ini` means that the association matches files called `win.ini` directly in a folder `system`

```json
  "fileExtensions": {
    "system/ini": "_ini_file"
  },
```

`system/ini` means that the association matches files called `*.ini` directly in a folder `system`

A file extension match is preferred over a language match, but is weaker than a file name match. A match with a parent path segment is preferred over a match without such a segment of the same kind.

`file name match with parent > file name match > file extension match with parent > file extension match > language match ...`

The `light` and the `highContrast` section have the same file association properties as just listed. They allow to override icons for the corresponding themes.

### Font definitions

The `fonts` section lets you declare any number of glyph fonts that you want to use.
You can later reference these fonts in the icon definitions. The font declared first will be used as the default if an icon definition does not specify a font id.

Copy the font file into your extension and set the path accordingly.
It is recommended to use [WOFF][LK145] fonts.

- Set 'woff' as the format.
- the weight property values are defined [here][LK146].
- the style property values are defined [here][LK147].
- the size should be relative to the font size where the icon is used. Therefore, always use percentage.

```json
{
  "fonts": [
    {
      "id": "turtles-font",
      "src": [
        {
          "path": "./turtles.woff",
          "format": "woff"
        }
      ],
      "weight": "normal",
      "style": "normal",
      "size": "150%"
    }
  ],
  "iconDefinitions": {
    "_file": {
      "fontCharacter": "\\E002",
      "fontColor": "#5f8b3b",
      "fontId": "turtles-font"
    }
  }
}
```

### Folder icons in File Icon Themes

File Icon themes can instruct the File Explorer not to show the default folder icon (the rotating triangles or "twisties") when the folder icons are good enough to indicate the expansion state of a folder. This mode is enabled by setting `"hidesExplorerArrows":true` in the File Icon theme definition file.

### Language default icons

Language contributors can define an icon for the language.

```jsonc
{
  "contributes": {
    "languages": [
      {
        "id": "latex",
        // ...
        "icon": {
          "light": "./icons/latex-light.png",
          "dark": "./icons/latex-dark.png"
        }
      }
  ]
```

The icon is used if a file icon theme only has a generic file icon for the language.

Language default icons are only shown if:
- the file icon theme has specific file icons. E.g. `Minimal` does not have specific file icons and therefore does not use the language default icons
- the file icon theme does not contain an icon for the given language, file extension or file name.
- the file icon theme does not define `"showLanguageModeIcons":false`

Language default icons are always shown if
- the file icon theme does define `"showLanguageModeIcons":true`


<a id="_api_extension-guides_product-icon-theme" ></a>

# /api/extension-guides/product-icon-theme
-------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: f470466d-89b0-4115-ab7a-2448023b0a6d
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to creating Product Icon Theme in Visual Studio Code
    ---

## Product Icon Theme

Visual Studio Code contains a set of built-in icons that are used in views and the editor, but can also be referenced in hovers, the status bar, and even by extensions. Examples are the icons in filter action buttons and view icons, in the status bar, breakpoints, and the folding icons in trees and the editor.

A product icon theme allows an extension to redefine these icons to give VS Code a custom appearance. Not covered by product icon themes are the file icons (covered by file icon themes) and icons contributed by extensions.

VS Code requires the icons to be defined as glyph in an icon font and (currently) limits product icons to consist of a single color. The color used for an icon is specific to the place where it is shown and is defined by the active color theme.

## Adding a new product icon theme

To define your own product icon theme, start by creating a VS Code extension and add the `productIconThemes` contribution point to the extension's `package.json`.

```json
{
  "contributes": {
    "productIconThemes": [
      {
        "id": "aliensAreBack",
        "label": "Aliens Are Back",
        "path": "./producticons/aliens-product-icon-theme.json"
      }
    ]
  }
}
```

The `id` is the identifier for the product icon theme. It is used in the settings, so make it unique but also readable. `label` is shown in the product icon theme picker dropdown. The `path` points to a file in the extension that defines the icon set. If your file name follows the `*product-icon-theme.json` name scheme, you will get completion support and hovers when editing the product icon theme file in VS Code.

## Product icon definition file

The product icon definition file is a JSON file defining one or more icon fonts and a set of icon definitions.

### Font definitions

The `fonts` section lets you declare any number of glyph fonts that you want to use, but must define at least one font definition.

These fonts can later be referenced in the icon definitions. The font declared first will be used as the default if an icon definition does not specify a font ID.

Copy the font file into your extension and set the path accordingly.

It is recommended that you use [WOFF][LK147] fonts.

- Set 'woff' as the format.
- The weight property values are defined [here][LK147].
- The style property values are defined [here][LK147].

```json
{
  "fonts": [
    {
      "id": "alien-font",
      "src": [
        {
          "path": "./alien.woff",
          "format": "woff"
        }
      ],
      "weight": "normal",
      "style": "normal"
    }
  ]
}
```

### Icon definitions

VS Code defines a list of icon IDs through which the icons are referenced by the views. The product icon's `iconDefinitions` section assigns new icons to these IDs.

Each definition uses `fontId` to reference one of the fonts defined in the `fonts` section. If `fontId` is omitted, the first font listed in  the font definitions is taken.

```json
{
  "iconDefinitions": {
    "dialog-close": {
      "fontCharacter": "\\43",
      "fontId": "alien-font"
    },
  }
}
```

A list of all icon identifiers can be found in the [icon reference][LN130].

## Develop and test

VS Code has built-in editing support for the `package.json` file as well as for product icon theme files. To get that, your theme file name needs to end with `product-icon-theme.json`. This enables code completion on all properties including the known icon IDs as well as hovers and validation.

To try out a product icon theme, open the extension folder in VS Code and press `kb(workbench.action.debug.start)`. This will run the extension in an extension development host window. The window has your extension enabled and the extension will automatically switch to the first product icon theme.

Also, the theme file is watched for changes and updates to the icons will be applied automatically whenever the theme file is modified. As you work on the product icon definition file, you will see the changes live on save.

To switch between product icon themes, use the command **Preferences: Product Icon Theme**.

To find out which icon is used at a certain location in the VS Code UI, open Developer Tools by running **Help > Toggle Developer Tools** and then:

- Click on the Developer Tools inspect tool in the upper left.
- Move the mouse over the icon to inspect.
- If the icon's class name is `codicon.codicon-remote`, then the icon ID is `remote`.

![dev tools inspect tool][LN131]

## Sample

The [Product Color Theme sample][LK148] can be used as a playground.


<a id="_api_extension-guides_chat" ></a>

# /api/extension-guides/chat
-----------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: ac3f00c8-78a8-408c-8af6-3e997a482972
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to creating an AI extension in Visual Studio Code
    ---

## Chat extensions

Visual Studio Code's Copilot Chat architecture enables extension authors to integrate with the [Copilot Chat][LK149] experience. A chat extension is a VS Code extension that uses the Chat extension API by contributing a *Chat participant*.

Chat participants are domain experts that can answer user queries within a specific domain. They can choose to fully use AI for the query processing, or to forward the user request to a backend service. Participants can also provide the language model access to tools. With the help of the language model, the participant might select a tool and define how to invoke it. Some participants just make use of the Language Model to get answers to custom prompts (for example, the [sample cat participant][LK150]). Other participants are more advanced and act like [autonomous agents][LK151] that invoke tools with the help of the Language Model. An example of such an advanced participant is the built-in `@workspace`. `@workspace` knows about your workspace and can answer questions about it. Internally, `@workspace` is powered by multiple tools: GitHub's knowledge graph, combined with semantic search, local code indexes, and VS Code's language services.

When a user explicitly mentions a `@participant` in their chat prompt, that prompt is forwarded to the extension that contributed that specific chat participant. The participant then uses a `ResponseStream` to respond to the request. To provide a smooth user experience, the Chat API is streaming-based. A `ResponseStream` can include:

- Markdown for simple text and image responses
- Buttons that invoke VS Code commands
- Progress for longer running operations
- References to URIs or editor locations
- File trees (for example, to show a workspace preview when a chat participant proposes to create a new workspace)

To help the user take the conversation further, participants can provide *follow-ups* for each response. Follow-up questions are suggestions that are presented in the chat user interface and might give the user inspiration about the chat extension's capabilities.

Participants can also contribute *commands*, which are a shorthand notation for common user intents, and are indicated by the `/` symbol. The extension can then use the command to prompt the language model accordingly. For example, `/explain` is a command for the `@workspace` participant that corresponds with the intent that the language model should explain some code.

> **Note:** The Chat and Language Model API are in a [proposed state][LK152] and we are actively working on adding more functionality. Share your feedback in [this GitHub issue][LK153] or create new issues.

## Prerequisites

To develop a chat extension make sure to:

- Use the [Visual Studio Code Insiders release][LK154]
- Use the pre-release version of the [GitHub Copilot Chat][LK154] extension

## Links

- [Chat extension sample][LK154]
- [Use the Language Model API][LN131]
- [ChatParticipant API][LK155]
- [ChatVariableResolver API][LK156]
- [GitHub Copilot Trust Center][LK157]
- [`@vscode/prompt-tsx` npm module][LK158]

## Parts of the chat user experience

The following screenshot shows the different chat concepts in the Visual Studio Code chat experience for the sample extension.

![Chat concepts explanation][LN132]

1. Use the `@` syntax to invoke the `@cat` chat participant
1. Use the `/` syntax to call the `/teach` command
1. User-provided query, also known as the user prompt
1. Icon that indicates that Copilot is using the `@cat` chat participant
1. Markdown response, provided by `@cat`
1. Code fragment included in the markdown response
1. Button included in the `@cat` response, the button invokes a VS Code command
1. Suggested [follow-up questions][LN133] provided by the chat participant
1. Chat input field with the placeholder text provided by the chat participant's `description` property

## Develop a chat extension

A chat extension is an extension that has a dependency on the [Copilot Chat extension][LK158] and contributes a chat participant. You can find details about how to define `extensionDependencies` in the [extension manifest][LN133].

The minimum functionality that is needed for implementing a chat extension is:

- Register the chat participant, to let users invoke it by using the `@` symbol in the VS Code Chat view.
- Define a request handler that interprets the user's question, and returns a response in the Chat view.

You can further expand the functionality of the chat extension with the following optional features:

- Register chat commands to provide users with a shorthand notation for common questions
- Define suggested follow-up questions to help the user continue a conversation
- Define chat variables to capture and share domain-specific context in chat conversations

As a starting point for developing a chat extension, you can refer to our [chat extension sample][LK158]. This sample implements a simple cat tutor that can explain computer science topics using cat metaphors.

![Diagram showing how extension can contribute to chat][LN134]

### Register the chat extension

The first step to create a chat extension is to register it in your `package.json` by providing a unique `id`, the `name`, and `description`:

```json
"contributes": {
        "chatParticipants": [
            {
                "id": "chat-sample.cat",
                "name": "cat",
                "description": "Meow! What can I teach you?",
                "isSticky": true
            }
        ]
}
```

We suggest to use a lowercase `name` to align with existing chat participants. Users can then reference the chat participant in the Chat view by using the `@` symbol and the `name` you provided. Some participant names are reserved, and in case you use a reserved name VS Code will display the fully qualified name of your participant (including the extension id). The `description` is shown in the chat input field as a placeholder text.
We suggest to use a lowercase `name` to align with existing chat participants. Users can then reference the chat participant in the Chat view by using the `@` symbol and the `name` you provided. Some participant names are reserved, and in case you use a reserved name VS Code will display the fully qualified name of your participant (including the extension id). The `description` is shown in the chat input field as a placeholder text.

The `isSticky` property controls whether the chat participant is persistent, which means that the participant name is automatically prepended in the chat input field after the user has started interacting with the participant.

Up-front registration of participants and [commands][LN135] in `package.json` is required, so that VS Code can activate your extension at the right time, and not before it is needed.

After registration, all your extension has to do is create the participant by using `vscode.chat.createChatParticipant`. When creating the participant, you have to provide the ID, which you defined in `package.json`, and a [request handler][LN136].

The following code snippet shows how to create the `@cat` chat participant (after you register it in your `package.json`):

```typescript
export function activate(context: vscode.ExtensionContext) {

    // Register the chat participant and its request handler
    const cat = vscode.chat.createChatParticipant('chat-sample.cat', handler);

    // Optionally, set some properties for @cat
    cat.iconPath = vscode.Uri.joinPath(context.extensionUri, 'cat.jpeg');

    // Add the chat request handler here
}
```

After registering and creating the chat participant, you now need to implement the request handler to process a user's request.

### Implement a request handler

The request handler is responsible for processing the user's chat requests in the VS Code Chat view. Each time a user enters a prompt in the chat input field, the chat request handler is invoked. These are the typical steps for implementing a chat request handler:

1. Define the request handler
1. Determine the intent of the user's request
1. Perform logic to answer the user's question
1. Return a response to the user

#### Define the request handler

You define the request handler (`vscode.ChatRequestHandler`) inside the extension's `activate` function.

The following code snippet shows how to define a request handler:

```typescript
const handler: vscode.ChatRequestHandler = async (request: vscode.ChatRequest, context: vscode.ChatContext, stream: vscode.ChatResponseStream, token: vscode.CancellationToken): Promise<ICatChatResult> => {

    // Chat request handler implementation goes here

};
```

#### Determine the request intent

To determine the intent of the user's request, you can reference the `vscode.ChatRequest` parameter to access the prompt, [commands][LN136], chat location, and [chat variables][LN137] that the user entered in the Chat view. Optionally, you can take advantage of the language model to determine the user's intent, rather than using traditional logic. Learn how you can use the [Language Model API][LN137] in your extension.

The following code snippet shows the basic structure of first using the command, and then the user prompt to determine the user intent:

```typescript
const handler: vscode.ChatRequestHandler = async (request: vscode.ChatRequest, context: vscode.ChatContext, stream: vscode.ChatResponseStream, token: vscode.CancellationToken): Promise<ICatChatResult> => {

    // Test for the `teach` command
    if (request.command == 'teach') {

        // Add logic here to handle the teaching scenario
        doTeaching(request.prompt, request.variables);

    } else {

        // Determine the user's intent
        const intent = determineUserIntent(request.prompt, request.variables);

        // Add logic here to handle other scenarios
    }
};
```

#### Process the request

Next, you need to implement the actual logic for processing the user request. Often, chat extensions use the [Language Model API][LN137] to process the request. In this case, you might adjust the language model prompt to match the user's intent. Alternately, you can implement the extension logic by invoking a backend service, by using traditional programming logic, or by using a combination of all these options. For example, you could invoke a web search to gather additional information, which you then provide as context to the language model.

While processing the current request, you might want to refer to previous chat messages. For example, if a previous response returned a C# code snippet, the user's current request might be "give the code in Python". Learn how you can [use the chat message history][LN138].

If you want to process a request differently based on the location of the chat input, you can use the `location` property of the `vscode.ChatRequest`. For example, if the user sends a request from the terminal inline chat, you might look up a shell command. Whereas, if the user uses the Chat view, you could return a more elaborate response.

You can use the [`@vscode/prompt-tsx`][LK158] library to craft chat messages and manage conversation history with respect to your chosen model's context window constraints.

#### Return the chat response

Once you've processed the request, you have to return a response to the user in the Chat view. Chat extensions can use streaming to respond to user queries. Responses can contain different content types: markdown, images, references, progress, buttons, and file trees. For example to generate this response:

![Response from the cat extension that includes code, markdown and a button][LN139]

An extension can use the response stream in the following way:

```typescript
stream.progress('Picking the right topic to teach...');
stream.markdown(`\`\`\`typescript
const myStack = new Stack();
myStack.push(1); // pushing a number on the stack (or let's say, adding a fish to the stack)
myStack.push(2); // adding another fish (number 2)
console.log(myStack.pop()); // eating the top fish, will output: 2
\`\`\`
So remember, Code Kitten, in a stack, the last fish in is the first fish out - which we tech cats call LIFO (Last In, First Out).`);

stream.button({
    command: 'cat.meow',
    title: vscode.l10n.t('Meow!'),
    arguments: []
});
```

In practice, extensions typically send a request to the language model. Once they get a response from the language model, they might further process it, and decide if they should stream anything back to the user. The VS Code Chat API is streaming-based, and is compatible with the streaming Language Model APIs. This allows extensions to report progress and results continuously with the goal of having a smooth user experience. Learn how you can use the [Language Model API][LN139].

#### Use the chat message history

Participants have access to the message history of the current chat session. A participant can only access messages where it was mentioned. A `history` item is either a `ChatRequestTurn` or a `ChatResponseTurn`. For example, use the following code snippet to retrieve all the previous requests that the user sent to your participant in the current chat session:

```typescript
const previousMessages = context.history.filter(h => h instanceof vscode.ChatRequestTurn);
```

History will not be automatically included in the prompt, it is up to the participant to decide if it wants to add history as additional context when passing messages to the language model.

### Register commands

A chat participant can contribute commands, which are shortcuts to specific functionality provided by the extension. Users can reference commands in chat by using the `/` syntax, for example `/explain`.

One of the tasks when answering questions is to determine the user intent. For example, VS Code could infer that `Create a new workspace with Node.js Express Pug TypeScript` means that you want a new project, but `@workspace /new Node.js Express Pug TypeScript` is more explicit, concise, and saves typing time. If you type `/` in the chat input field, VS Code offers a list of registered commands with their description.

![List of commands in chat for @workspace][LN140]

Chat participants can contribute commands with their description by adding them in `package.json`:

```typescript
"contributes": {
    "chatParticipants": [
        {
            "id": "chat-sample.cat",
            "name": "cat",
            "description": "Meow! What can I teach you?",
            "isSticky": true,
            "commands": [
                {
                    "name": "teach",
                    "description": "Pick at random a computer science concept then explain it in purfect way of a cat"
                },
                {
                    "name": "play",
                    "description": "Do whatever you want, you are a cat after all"
                }
            ]
        }
    ]
}
```

### Register follow-up requests

After each chat request, VS Code invokes follow-up providers to get suggested follow-up questions to show to the user. The user can then select the follow-up question, and immediately send it to the chat extension. Follow-up questions can provide inspiration to the user to take the conversation further, or to discover more capabilities of the chat extension.

The following code snippet shows how to register follow-up requests in a chat extension:

```typescript
cat.followupProvider = {
    provideFollowups(result: ICatChatResult, context: vscode.ChatContext, token: vscode.CancellationToken) {
        if (result.metadata.command === 'teach') {
            return [{
                prompt: 'let us play',
                title: vscode.l10n.t('Play with the cat')
            } satisfies vscode.ChatFollowup];
        }
    }
};
```

> **Tip:** Follow-ups should be written as questions or directions, not just concise commands.

## Variables

Chat extensions can also contribute chat *variables*, which provide context about the extension's domain. For example, a C++ extension might contribute a variable `#cpp` that would get resolved based on the state of the language service - what C++ version is being used and what C++ programming approach is preferred.

Users can refer to a chat variable in a prompt by using the `#` symbol. A variable is resolved by either the chat extension that contributed that variable, or by VS Code when it's a built-in variable (for example, `#file` or `#selection`). VS Code offers the list of registered variables upon typing the `#` symbol in the chat input.

![List of variables in chat][LN141]

Variables are resolved independently of the active chat participant. This means that you can use them as a mechanism to share context between different participants. For example, `@workspace` already maintains an index of the current workspace and contributes a variable `#codebase`. Users can include this variable in a prompt to pass the codebase context to another chat participant.

Variables and their values are passed as an object bag to the handler in `request.variables`. The prompt contains variable references as entered by the user and it is up to the participant to further modify the prompt, for instance by inlining variable values or creating links to headings which contain the resolved values. Variables are sorted in reverse order by their appearance in the prompt. That means that the last variable in the prompt is the first in this list. This simplifies string-manipulation of the prompt.

Variable resolvers can offer multiple length levels for the variable value. VS Code selects one based on how many tokens are left in a language model prompt.

```typescript
vscode.chat.registerVariable('cat_context', 'Describes the state of mind and version of the cat', {
    resolve: (name, context, token) => {
        if (name == 'cat_context') {
            const mood = Math.random() > 0.5 ? 'happy' : 'grumpy';
            return [
                {
                    level: vscode.ChatVariableLevel.Short,
                    value: 'version 1.3 ' + mood
                },
                {
                    level: vscode.ChatVariableLevel.Medium,
                    value: 'I am a playful cat, version 1.3, and I am ' + mood
                },
                {
                    level: vscode.ChatVariableLevel.Full,
                    value: 'I am a playful cat, version 1.3, this version prefer to explain everything using mouse and tail metaphors. I am ' + mood
                }
            ]
        }
    }
});
```

## Guidelines

Chat participants should not be purely question-answering bots. When building a chat participant, be creative and use the existing VS Code API to create rich integrations in VS Code. Users also love rich and convenient interactions, such as buttons in your responses, menu items that bring users to your participant in chat. Think about real life scenarios where AI can help your users.

It doesn't make sense for every extension to contribute a chat participant. Having too many participants in chat might lead to a bad user experience. Chat participants are best when you want to control the full prompt, including the system message and instructions to the model. Use chat variables when you only want to provide extra context to a prompt when requested by the user. You can reuse the carefully crafted Copilot system message and you can contribute context to other participants.

For example, language extensions (such as the C++ extension) can contribute in various other ways:

- Contribute variables that bring language service smarts to the user query. For example, the C++ extension could resolve the `#cpp` variable to the C++ state of the workspace. This gives the Copilot language model the right C++ context to improve the quality of Copilot answers for C++.
- Contribute smart actions that use the language model, optionally in combination with traditional language service knowledge, to deliver a great user experience. For example, C++ might already offer an "extract to method" smart action that uses the language model to generate a fitting default name for the new method.

Chat extensions should explicitly ask for user consent if they are about to do a costly operation or are about to edit or delete something that can’t be undone. To have a great user experience, we discourage extensions from contributing multiple chat participants. Up to one chat participant per extension is a simple model that scales well in the UI.

## Publishing your extension

Once you have created your AI extension, and once we finalize the Chat and Language Model API (expected in the next couple of months), you can publish your extension to the Visual Studio Marketplace:

- Before publishing to the VS Marketplace we recommend that you read the [Microsoft AI tools and practices guidelines][LK159]. These guidelines provide best practices for the responsible development and use of AI technologies.
- By publishing to the VS Marketplace, your extension is adhering to the [GitHub Copilot extensibility acceptable development and use policy][LK160].
- Update the attributes in the `package.json` to make it easy for users to find your extension. Add "AI" and "Chat" to the `categories` field in your `package.json`.
- Upload to the Marketplace as described in [Publishing Extension][LK161].


<a id="_api_extension-guides_language-model" ></a>

# /api/extension-guides/language-model
---------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 9bdc3d4e-e6ba-43d3-bd09-2e127cb63ce7
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to adding AI-powered features to a VS Code extension by using language models and natural language understanding.
    ---

## Language Model API

The Language Model API enables you to [use the Language Model][LK162] and integrate AI-powered features and natural language processing in your Visual Studio Code extension.

You can use the Language Model API in different types of extensions. A typical use for this API is in [chat extensions][LN141], where you use a language model to interpret the user's request and help provide an answer. However, the use of the Language Model API is not limited to this scenario. You might use a language model in a [language][LN141] or [debugger][LN141] extension, or as part of a [command][LN141] or [task][LN141] in a custom extension. For example, the Rust extension might use the Language Model to offer default names to improve its rename experience.

The process for using the Language Model API consists of the following steps:

1. Build the language model prompt
1. Send the language model request
1. Interpret the response

> **Note**: The Language Model API is in a [proposed state][LK162] and we are actively working on adding more functionality. Share your feedback in [this GitHub issue][LK162] or create new issues.

## Links

- [Chat extension sample][LK162]
- [LanguageModels API][LK162]
- [GitHub Copilot Trust Center][LK162]

## Prompt crafting

To interact with a language model, extensions should first craft their prompt and then send a request to the language model. Extensions can use two types of prompts:

- `LanguageModelChatSystemMessage`: provides instructions to the language model on the broad task that you're using the model for. It defines the context in which user messages are interpreted. In the following example, the system message is used to specify the persona used by the model in its replies and what rules the model should follow.
- `LanguageModelChatUserMessage`: the specific request or instruction coming from the user, or determined by the specific task to be accomplished. For example, to provide alternative names for renaming a symbol.

```typescript
const craftedPrompt = [
    new vscode.LanguageModelChatSystemMessage('You are a cat! Think carefully and step by step like a cat would. Your job is to explain computer science concepts in the funny manner of a cat, using cat metaphors. Always start your response by stating what concept you are explaining. Always include code samples.'),
    new vscode.LanguageModelChatUserMessage('I want to understand recursion')
];
```

For prompt engineering, we suggest reading OpenAI's excellent [guidelines][LK163].

>**Tip:** use the rich VS Code extension API to get the most relevant context to include in a prompt (e.g. the active file).

## Send the language model request

Once you've built the prompt for the language model, you can send the request by using `sendChatRequest`. You have to provide the name of the specific language model as an input parameter. Currently, only `copilot-gpt-3.5-turbo` and `copilot-gpt-4` are supported. It's expected that the list of supported models will grow over time.

When you make a request to the Language Model API, the request might fail. For example, because the model doesn't exist, or the user didn't give consent to use the Language Model API, or because quota limits are exceeded. Use `LanguageModelError` to distinguish between different types of errors.

The following code snippet shows how to make a language model request:

```typescript
try {
    const chatRequest = vscode.lm.sendChatRequest('copilot-gpt-3.5-turbo', craftedPrompt, {}, token);
} catch (err) {
    // Making the chat request might fail because
    // - model does not exist
    // - user consent not given
    // - quota limits were exceeded
    if (err instanceof vscode.LanguageModelError) {
        console.log(err.message, err.code, err.cause)
    } else {
        // add other error handling logic
    }
}
```

## Interpret the response

After you've sent the request, you have to process the response from the language model API. Depending on your usage scenario, you can pass the response directly on to the user, or you can interpret the response and perform additional logic.

The response from the Language Model API is streaming-based, which enables you to provide a smooth user experience. For example, by reporting results and progress continuously when you use the API in combination with the [Chat API][LN141].

Errors might occur while processing the streaming response, such as network connection issues. Make sure to add appropriate error handling in your code to handle these errors.

The following code snippet shows how an extension can register a command, which uses the language model to change all variable names in the active editor with funny cat names. Notice that the extension streams the code back to the editor for a smooth user experience.

```typescript
 vscode.commands.registerTextEditorCommand('cat.namesInEditor', async (textEditor: vscode.TextEditor) => {
    // Replace all variables in active editor with cat names and words
    const text = textEditor.document.getText();
    const messages = [
        new vscode.LanguageModelChatSystemMessage(`You are a cat! Think carefully and step by step like a cat would.
        Your job is to replace all variable names in the following code with funny cat variable names. Be creative. IMPORTANT respond just with code. Do not use markdown!`),
        new vscode.LanguageModelChatUserMessage(text)
    ];

    try {
        const chatRequest = await vscode.lm.sendChatRequest('copilot-gpt-3.5-turbo', messages, {}, new vscode.CancellationTokenSource().token);
    } catch (err) {
        if (err instanceof vscode.LanguageModelError) {
            console.log(err.message, err.code, err.cause)
        }
        return
    }

    // Clear the editor content before inserting new content
    await textEditor.edit(edit => {
        const start = new vscode.Position(0, 0);
        const end = new vscode.Position(textEditor.document.lineCount - 1, textEditor.document.lineAt(textEditor.document.lineCount - 1).text.length);
        edit.delete(new vscode.Range(start, end));
    });

    try {
        // Stream the code into the editor as it is coming in from the Language Model
        for await (const fragment of chatRequest.stream) {
            await textEditor.edit(edit => {
                const lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
                const position = new vscode.Position(lastLine.lineNumber, lastLine.text.length);
                edit.insert(position, fragment);
            });
        }
    } catch (err) {
        // async response stream may fail, e.g network interruption or server side error
        await textEditor.edit(edit => {
            const lastLine = textEditor.document.lineAt(textEditor.document.lineCount - 1);
            const position = new vscode.Position(lastLine.lineNumber, lastLine.text.length);
            edit.insert(position, (<Error>err).message);
        });
    }
});
```

## Considerations

### Model availability

We don't expect specific models to stay supported forever. When you reference a language model in your extension, make sure to take a "defensive" approach when sending requests to that language model. This means that you should gracefully handle cases where you don't have access to a particular model.

### Choosing the appropriate model

Extension authors can choose which model is the most appropriate for their extension. We recommend starting with less powerful models first (e.g `copilot-gpt-3.5-turbo`), because they are faster and might allow for a smooth user experience. You might use more powerful, but slower models (for example, `copilot-gpt-4`) for complex tasks, and only after the faster models prove to be inadequate.

>**Note:** both `copilot-gpt-3.5-turbo` and `copilot-gpt-4` models have the limit of `4K` tokens. These limits will be expanded as we learn more how extensions are using the language models.

### Rate limiting

Extensions should responsibly use the language model and be aware of rate limiting. VS Code is transparent to the user regarding how extensions are using language models and how many requests each extension is sending and how that influences their respective quotas.

Extensions should not use the Language Model API for integration tests due to rate-limitations. Internally, VS Code uses a dedicated non-production language model for simulation testing, and we are currently thinking how to provide a scalable language model testing solution for extensions.

## Testing your extension

The responses that the Language Model API provides are nondeterministic, which means that you might get a different response for an identical request. This behavior can be challenging for testing your extension.

The part of the extension for building prompts and interpreting language model responses is deterministic, and can thus be unit tested without using an actual language model. However, interacting and getting responses from the language model itself, is nondeterministic and can’t be easily tested. Consider designing your extension code in a modular way to enable you to unit test the specific parts that can be tested.

## Publishing your extension

Once we finalize the Language Model API (expected in the next couple of months), you can publish your extension to the Visual Studio Marketplace:

- Before publishing to the VS Marketplace we recommend that you read the [Microsoft AI tools and practices guidelines][LK163]. These guidelines provide best practices for the responsible development and use of AI technologies.
- By publishing to the VS Marketplace, your extension is adhering to the [GitHub Copilot extensibility acceptable development and use policy][LK163].
- Update the attributes in the `package.json` to make it easy for users to find your extension. Add "AI" to the `categories` field in your `package.json`. If your extension contributes a Chat Participant, add "Chat" as well.
- Upload to the Marketplace as described in [Publishing Extension][LK163].

## Related content

- [Build a chat extension][LN141]


<a id="_api_extension-guides_tree-view" ></a>

# /api/extension-guides/tree-view
----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 9b10cda2-4eb0-4989-8f82-23a46b96c1bb
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to using Tree View in Visual Studio Code extension (plug-in).
    ---

## Tree View API

The Tree View API allows extensions to show content in the sidebar in Visual Studio Code. This content is structured as a tree and conforms to the style of the [built-in views][LN142] of VS Code.

For example, the built-in References Search View extension shows reference search results as a separate view.

![References Search View][LN143]

The **Find All References** results are displayed in a **References: Results** Tree View, which is in the **References** View Container.

This guide teaches you how to write an extension that contributes Tree Views and View Containers to Visual Studio Code.

## Tree View API Basics

To explain the Tree View API, we are going to build a sample extension called **Node Dependencies**. This extension will use a treeview to display all Node.js dependencies in the current folder. The steps for adding a treeview are to contribute the treeview in your `package.json`, create a `TreeDataProvider`, and register the `TreeDataProvider`. You can find the complete source code of this sample extension in the `tree-view-sample` in the [vscode-extension-samples][LK164] GitHub repository.

### package.json Contribution

First you have to let VS Code know that you are contributing a view, using the [contributes.views][LN143] Contribution Point in `package.json`.

Here's the `package.json` for the first version of our extension:

```json
{
    "name": "custom-view-samples",
    "displayName": "Custom view Samples",
    "description": "Samples for VS Code's view API",
    "version": "0.0.1",
    "publisher": "alexr00",
    "engines": {
        "vscode": "^1.74.0"
    },
    "activationEvents": [],
    "main": "./out/extension.js",
    "contributes": {
        "views": {
            "explorer": [
                {
                    "id": "nodeDependencies",
                    "name": "Node Dependencies"
                }
            ]
        }
    },
    "scripts": {
        "vscode:prepublish": "npm run compile",
        "compile": "tsc -p ./",
        "watch": "tsc -watch -p ./"
    },
    "devDependencies": {
        "@types/node": "^10.12.21",
        "@types/vscode": "^1.42.0",
        "typescript": "^3.5.1",
        "tslint": "^5.12.1"
    }
}
```

> **Note**: If your extension targets a VS Code version prior to 1.74, you must explicitly list `onView:nodeDependencies` in `activationEvents`.

You must specify an identifier and name for the view, and you can contribute to following locations:

- `explorer`: Explorer view in the Side Bar
- `debug`: Run and Debug view in the Side Bar
- `scm`: Source Control view in the Side Bar
- `test`: Test explorer view in the Side Bar
- [Custom View Containers][LN144]

### Tree Data Provider

The second step is to provide data to the view you registered so that VS Code can display the data in the view. To do so, you should first implement the [TreeDataProvider][LN145]. Our `TreeDataProvider` will provide node dependencies data, but you can have a data provider that provides other types of data.

There are two necessary methods in this API that you need to implement:

- `getChildren(element?: T): ProviderResult<T[]>` - Implement this to return the children for the given `element` or root (if no element is passed).
- `getTreeItem(element: T): TreeItem | Thenable<TreeItem>` - Implement this to return the UI representation ([TreeItem][LN146]) of the element that gets displayed in the view.

When the user opens the Tree View, the `getChildren` method will be called without an `element`. From there, your `TreeDataProvider` should return your top-level tree items. In our example, the `collapsibleState` of the top-level tree items is `TreeItemCollapsibleState.Collapsed`, meaning that the top-level tree items will show as collapsed. Setting the `collapsibleState` to `TreeItemCollapsibleState.Expanded` will cause tree items to show as expanded. Leaving the `collapsibleState` as its default of `TreeItemCollapsibleState.None` indicates that the tree item has no children. `getChildren` will not be called for tree items with a `collapsibleState` of `TreeItemCollapsibleState.None`.

Here is an example of a `TreeDataProvider` implementation that provides node dependencies data:

```ts
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class NodeDependenciesProvider implements vscode.TreeDataProvider<Dependency> {

    constructor(private workspaceRoot: string) {}

    getTreeItem(element: Dependency): vscode.TreeItem {
        return element;
    }

    getChildren(element?: Dependency): Thenable<Dependency[]> {
        if (!this.workspaceRoot) {
            vscode.window.showInformationMessage('No dependency in empty workspace');
            return Promise.resolve([]);
        }

        if (element) {
            return Promise.resolve(this.getDepsInPackageJson(path.join(this.workspaceRoot, 'node_modules', element.label, 'package.json')));
        } else {
            const packageJsonPath = path.join(this.workspaceRoot, 'package.json');
            if (this.pathExists(packageJsonPath)) {
                return Promise.resolve(this.getDepsInPackageJson(packageJsonPath));
            } else {
                vscode.window.showInformationMessage('Workspace has no package.json');
                return Promise.resolve([]);
            }
        }

    }

    /**
     * Given the path to package.json, read all its dependencies and devDependencies.
     */
    private getDepsInPackageJson(packageJsonPath: string): Dependency[] {
        if (this.pathExists(packageJsonPath)) {
            const toDep = (moduleName: string, version: string): Dependency => {
                if (this.pathExists(path.join(this.workspaceRoot, 'node_modules', moduleName))) {
                    return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.Collapsed);
                } else {
                    return new Dependency(moduleName, version, vscode.TreeItemCollapsibleState.None);
                }
            };

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

            const deps = packageJson.dependencies
                ? Object.keys(packageJson.dependencies).map(dep => toDep(dep, packageJson.dependencies[dep]))
                : [];
            const devDeps = packageJson.devDependencies
                ? Object.keys(packageJson.devDependencies).map(dep => toDep(dep, packageJson.devDependencies[dep]))
                : [];
            return deps.concat(devDeps);
        } else {
            return [];
        }
    }

    private pathExists(p: string): boolean {
        try {
            fs.accessSync(p);
        } catch (err) {
            return false;
        }
        return true;
    }
}

class Dependency extends vscode.TreeItem {

    constructor(
        public readonly label: string,
        private version: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
    ) {
        super(label, collapsibleState);
        this.tooltip = `${this.label}-${this.version}`;
        this.description = this.version;
    }

    iconPath = {
        light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
        dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
    };

}
```

### Registering the TreeDataProvider

The third step is to register the above data provider to your view.

This can be done in the following two ways:

- `vscode.window.registerTreeDataProvider` - Register the tree data provider by providing the registered view ID and above data provider.

    ```typescript
    const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
        ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    vscode.window.registerTreeDataProvider('nodeDependencies', new NodeDependenciesProvider(rootPath));
    ```

- `vscode.window.createTreeView` - Create the Tree View by providing the registered view ID and above data provider. This will give access to the [TreeView][LN147], which you can use for performing other view operations. Use `createTreeView`, if you need the `TreeView` API.

    ```typescript
    vscode.window.createTreeView('nodeDependencies', { treeDataProvider: new NodeDependenciesProvider(rootPath)});
    ```

Here's the extension in action:

![View][LN148]

### Updating Tree View content

Our node dependencies view is simple, and once the data is shown, it isn't updated. However, it would be useful to have a refresh button in the view and update the node dependencies view with the current contents of the `package.json`. To do this, we can use the `onDidChangeTreeData` event.

- `onDidChangeTreeData?: Event<T | undefined | null | void>` - Implement this if your tree data can change and you want to update the treeview.

Add the following to your `NodeDependenciesProvider`.

```ts
  private _onDidChangeTreeData: vscode.EventEmitter<Dependency | undefined | null | void> = new vscode.EventEmitter<Dependency | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<Dependency | undefined | null | void> = this._onDidChangeTreeData.event;

  refresh(): void {
    this._onDidChangeTreeData.fire();
  }
```

Now we have a refresh method, but no one is calling it. We can add a command to call refresh.

In the `contributes` section of your `package.json`, add:

```json
    "commands": [
            {
                "command": "nodeDependencies.refreshEntry",
                "title": "Refresh",
                "icon": {
                    "light": "resources/light/refresh.svg",
                    "dark": "resources/dark/refresh.svg"
                }
            },
    ]
```

And register the command in your extension activation:

```ts
import * as vscode from 'vscode';
import { NodeDependenciesProvider } from './nodeDependencies';

export function activate(context: vscode.ExtensionContext) {
    const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
        ? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;
    const nodeDependenciesProvider = new NodeDependenciesProvider(rootPath);
    vscode.window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);
    vscode.commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh());
}
```

Now we have a command that will refresh the node dependencies view, but a button on the view would be even better. We already added an `icon` to the command, so it will show up with that icon when we add it to the view.

In the `contributes` section of your `package.json`, add:

```json
"menus": {
    "view/title": [
        {
            "command": "nodeDependencies.refreshEntry",
            "when": "view == nodeDependencies",
            "group": "navigation"
        },
    ]
}
```

## Activation

It is important that your extension is activated only when user needs the functionality that your extension provides. In this case, you should consider activating your extension only when the user starts using the view. VS Code automatically does this for you when your extension declares a view contribution. VS Code emits an activationEvent [onView:${viewId}][LN149] (`onView:nodeDependencies` for the example above) when the user opens the view.

> **Note**: For VS Code versions prior to 1.74.0, you must explicitly register this activation event in `package.json` for VS Code to activate your extension on this view:
>```json
>"activationEvents": [
>        "onView:nodeDependencies",
>],
>```

## View Container

A View Container contains a list of views that are displayed in the Activity Bar or Panel along with the built-in View Containers. Examples of built-in View Containers are Source Control and Explorer.

![View Container][LN150]

To contribute a View Container, you should first register it using [contributes.viewsContainers][LN150] Contribution Point in `package.json`.

You have to specify the following required fields:

- `id` - The ID of the new view container you're creating.
- `title` - The name that will show up at the top of the view container.
- `icon` - An image that will be displayed for the view container when in the Activity Bar.

```json
"contributes": {
  "viewsContainers": {
    "activitybar": [
      {
        "id": "package-explorer",
        "title": "Package Explorer",
        "icon": "media/dep.svg"
      }
    ]
  }
}
```

Alternatively, you could contribute this view to the panel by placing it under the `panel` node.

```json
"contributes": {
  "viewsContainers": {
    "panel": [
      {
        "id": "package-explorer",
        "title": "Package Explorer",
        "icon": "media/dep.svg"
      }
    ]
  }
}
```

## Contributing views to View Containers

Once you've created a View Container, you can use the [contributes.views][LN150] Contribution Point in `package.json`.

```json
"contributes": {
  "views": {
    "package-explorer": [
      {
        "id": "nodeDependencies",
        "name": "Node Dependencies",
        "icon": "media/dep.svg",
        "contextualTitle": "Package Explorer"
      }
    ]
  }
}
```

A view can also have an optional `visibility` property which can be set to `visible`, `collapsed`, or `hidden`. This property is only respected by VS Code the first time a workspace is opened with this view. After that, the visibility is set to whatever the user has chosen. If you have a view container with many views, or if your view will not be useful to every user of your extension, consider setting the view the `collapsed` or `hidden`. A `hidden` view will appear in the view containers "Views" menu:

![Views Menu][LN151]

## View Actions

Actions are available as inline icons on your individual tree items, in tree item context menus, and at the top of your view in the view title. Actions are commands that you set to show up in these locations by adding contributions to your `package.json`.

To contribute to these three places, you can use the following menu contribution points in your package.json:

- `view/title` - Location to show actions in the view title. Primary or inline actions use `"group": "navigation"` and rest are secondary actions, which are in `...` menu.
- `view/item/context` - Location to show actions for the tree item. Inline actions use `"group": "inline"` and rest are secondary actions, which are in `...` menu.

You can control the visibility of these actions using a [when clause][LN151].

![View Actions][LN152]

Examples:

```json
"contributes": {
  "commands": [
    {
      "command": "nodeDependencies.refreshEntry",
      "title": "Refresh",
      "icon": {
        "light": "resources/light/refresh.svg",
        "dark": "resources/dark/refresh.svg"
      }
    },
    {
      "command": "nodeDependencies.addEntry",
      "title": "Add"
    },
    {
      "command": "nodeDependencies.editEntry",
      "title": "Edit",
      "icon": {
        "light": "resources/light/edit.svg",
        "dark": "resources/dark/edit.svg"
      }
    },
    {
      "command": "nodeDependencies.deleteEntry",
      "title": "Delete"
    }
  ],
  "menus": {
    "view/title": [
      {
        "command": "nodeDependencies.refreshEntry",
        "when": "view == nodeDependencies",
        "group": "navigation"
      },
      {
        "command": "nodeDependencies.addEntry",
        "when": "view == nodeDependencies"
      }
    ],
    "view/item/context": [
      {
        "command": "nodeDependencies.editEntry",
        "when": "view == nodeDependencies && viewItem == dependency",
        "group": "inline"
      },
      {
        "command": "nodeDependencies.deleteEntry",
        "when": "view == nodeDependencies && viewItem == dependency"
      }
    ]
  }
}
```

By default, actions are ordered alphabetically. To specify a different ordering, add `@` followed by the order you want to the group. For example, `navigation@3` will cause the action to show up 3rd in the `navigation` group.

You can further separate items in the `...` menu by creating different groups. These group names are arbitrary and are ordered alphabetically by group name.

**Note:** If you want to show an action for specific tree items, you can do so by defining the context of a tree item using `TreeItem.contextValue` and you can specify the context value for key `viewItem` in `when` expression.

Examples:

```json
"contributes": {
  "menus": {
    "view/item/context": [
      {
        "command": "nodeDependencies.deleteEntry",
        "when": "view == nodeDependencies && viewItem == dependency"
      }
    ]
  }
}
```

## Welcome content

If your view can be empty, or if you want to add Welcome content to another extension's empty view, you can contribute `viewsWelcome` content. An empty view is a view that has no `TreeView.message` and an empty tree.

```json
"contributes": {
  "viewsWelcome": [
    {
      "view": "nodeDependencies",
      "contents": "No node dependencies found [learn more][LK165].\n[Add Dependency](command:nodeDependencies.addEntry)"
    }
  ]
}
```

![Welcome Content][LN154]

Links are supported in Welcome content. By convention, a link on a line by itself is a button. Each Welcome content can also contain a `when` clause. For more examples, see the [built-in Git extension][LK166].

## TreeDataProvider

Extension writers should register a [TreeDataProvider][LN154] programmatically to populate data in the view.

```typescript
vscode.window.registerTreeDataProvider('nodeDependencies', new DepNodeProvider());
```

See [nodeDependencies.ts][LK167] in the `tree-view-sample` for the implementation.

## TreeView

If you would like to perform some UI operations on the view programmatically, you can use `window.createTreeView` instead of `window.registerTreeDataProvider`. This will give access to the view, which you can use for performing view operations.

```typescript
vscode.window.createTreeView('ftpExplorer', {
  treeDataProvider: new FtpTreeDataProvider()
});
```

See [ftpExplorer.ts][LK168] in the `tree-view-sample` for the implementation.


<a id="_api_extension-guides_webview" ></a>

# /api/extension-guides/webview
--------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: adddd33e-2de6-4146-853b-34d0d7e6c1f1
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Use the Webview API to create fully customizable views within Visual Studio Code.
    ---

## Webview API

The webview API allows extensions to create fully customizable views within Visual Studio Code. For example, the built-in Markdown extension uses webviews to render Markdown previews. Webviews can also be used to build complex user interfaces beyond what VS Code's native APIs support.

Think of a webview as an `iframe` within VS Code that your extension controls. A webview can render almost any HTML content in this frame, and it communicates with extensions using message passing. This freedom makes webviews incredibly powerful, and opens up a whole new range of extension possibilities.

Webviews are used in several VS Code APIs:

- With Webview Panels created using `createWebviewPanel`. In this case, Webview panels are shown in VS Code as distinct editors. This makes them useful for displaying custom UI and custom visualizations.
- As the view for a [custom editor][LN154]. Custom editors allow extensions to provide a custom UI for editing any file in the workspace. The custom editor API also lets your extension hook into editor events such as undo and redo, as well as file events such as save.
- In [Webview views][LN155] that are rendered in the sidebar or panel areas. See the [webview view sample extension][LK169] for more details.

This page focuses on the basic webview panel API, although almost everything covered here applies to the webviews used in custom editors and webview views as well. Even if you are more interested in those APIs, we recommend reading through this page first to familiarize yourself with the webview basics.

## Links

- [Webview sample][LK170]
- [Custom Editors documentation][LN155]
- [Webview View sample][LK170]

### VS Code API Usage

- [`window.createWebviewPanel`][LN156]
- [`window.registerWebviewPanelSerializer`][LN157]

## Should I use a webview?

Webviews are pretty amazing, but they should also be used sparingly and only when VS Code's native API is inadequate. Webviews are resource heavy and run in a separate context from normal extensions. A poorly designed webview can also easily feel out of place within VS Code.

Before using a webview, please consider the following:

- Does this functionality really need to live within VS Code? Would it be better as a separate application or website?

- Is a webview the only way to implement your feature? Can you use the regular VS Code APIs instead?

- Will your webview add enough user value to justify its high resource cost?

Remember: Just because you can do something with webviews, doesn't mean you should. However, if you are confident that you need to use webviews, then this document is here to help. Let's get started.

## Webviews API basics

To explain the webview API, we are going to build a simple extension called **Cat Coding**. This extension will use a webview to show a gif of a cat writing some code (presumably in VS Code). As we work through the API, we'll continue adding functionality to the extension, including a counter that keeps track of how many lines of source code our cat has written and notifications that inform the user when the cat introduces a bug.

Here's the `package.json` for the first version of the **Cat Coding** extension. You can find the complete code for the example app [here][LK170]. The first version of our extension [contributes a command][LN157] called `catCoding.start`. When a user invokes this command, we will show a simple webview with our cat in it. Users will be able to invoke this command from the **Command Palette** as **Cat Coding: Start new cat coding session** or even create a keybinding for it if they are so inclined.

```json
{
  "name": "cat-coding",
  "description": "Cat Coding",
  "version": "0.0.1",
  "publisher": "bierner",
  "engines": {
    "vscode": "^1.74.0"
  },
  "activationEvents": [],
  "main": "./out/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "catCoding.start",
        "title": "Start new cat coding session",
        "category": "Cat Coding"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "tsc -p ./",
    "compile": "tsc -watch -p ./",
    "postinstall": "node ./node_modules/vscode/bin/install"
  },
  "dependencies": {
    "vscode": "*"
  },
  "devDependencies": {
    "@types/node": "^9.4.6",
    "typescript": "^2.8.3"
  }
}
```

> **Note**: If your extension targets a VS Code version prior to 1.74, you must explicitly list `onCommand:catCoding.start` in `activationEvents`.

Now let's implement the `catCoding.start` command. In our extension's main file, we register the `catCoding.start` command and use it to show a basic webview:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show a new webview
      const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {} // Webview options. More on these later.
      );
    })
  );
}
```

The `vscode.window.createWebviewPanel` function creates and shows a webview in the editor. Here is what you see if you try running the `catCoding.start` command in its current state:

![An empty webview][LN158]

Our command opens a new webview panel with the correct title, but with no content! To add our cat to new panel, we also need to set the HTML content of the webview using `webview.html`:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      // Create and show panel
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      // And set its HTML content
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}
```

If you run the command again, now the webview looks like this:

![A webview with some HTML][LN159]

Progress!

`webview.html` should always be a complete HTML document. HTML fragments or malformed HTML may cause unexpected behavior.

### Updating webview content

`webview.html` can also update a webview's content after it has been created. Let's use this to make **Cat Coding** more dynamic by introducing a rotation of cats:

```ts
import * as vscode from 'vscode';

const cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      let iteration = 0;
      const updateWebview = () => {
        const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
        panel.title = cat;
        panel.webview.html = getWebviewContent(cat);
      };

      // Set initial content
      updateWebview();

      // And schedule updates to the content every second
      setInterval(updateWebview, 1000);
    })
  );
}

function getWebviewContent(cat: keyof typeof cats) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="${cats[cat]}" width="300" />
</body>
</html>`;
}
```

![Updating the webview content][LN160]

Setting `webview.html` replaces the entire webview content, similar to reloading an iframe. This is important to remember once you start using scripts in a webview, since it means that setting `webview.html` also resets the script's state.

The example above also uses `webview.title` to change the title of the document displayed in the editor. Setting the title does not cause the webview to be reloaded.

### Lifecycle

Webview panels are owned by the extension that creates them. The extension must hold onto the webview returned from `createWebviewPanel`. If your extension loses this reference, it cannot regain access to that webview again, even though the webview will continue to show in VS Code.

As with text editors, a user can also close a webview panel at any time. When a webview panel is closed by the user, the webview itself is destroyed. Attempting to use a destroyed webview throws an exception. This means that the example above using `setInterval` actually has an important bug: if the user closes the panel, `setInterval` will continue to fire, which will try to update `panel.webview.html`, which of course will throw an exception. Cats hate exceptions. Let's fix this!

The `onDidDispose` event is fired when a webview is destroyed. We can use this event to cancel further updates and clean up the webview's resources:

```ts
import * as vscode from 'vscode';

const cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif'
};

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      let iteration = 0;
      const updateWebview = () => {
        const cat = iteration++ % 2 ? 'Compiling Cat' : 'Coding Cat';
        panel.title = cat;
        panel.webview.html = getWebviewContent(cat);
      };

      updateWebview();
      const interval = setInterval(updateWebview, 1000);

      panel.onDidDispose(
        () => {
          // When the panel is closed, cancel any future updates to the webview content
          clearInterval(interval);
        },
        null,
        context.subscriptions
      );
    })
  );
}
```

Extensions can also programmatically close webviews by calling `dispose()` on them. If, for example, we wanted to restrict our cat's workday to five seconds:

```ts
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      panel.webview.html = getWebviewContent('Coding Cat');

      // After 5sec, programmatically close the webview panel
      const timeout = setTimeout(() => panel.dispose(), 5000);

      panel.onDidDispose(
        () => {
          // Handle user closing panel before the 5sec have passed
          clearTimeout(timeout);
        },
        null,
        context.subscriptions
      );
    })
  );
}
```

### Visibility and Moving

When a webview panel is moved into a background tab, it becomes hidden. It is not destroyed however. VS Code will automatically restore the webview's content from `webview.html` when the panel is brought to the foreground again:

![Webview content is automatically restored when the webview becomes visible again][LN161]

The `.visible` property tells you if the webview panel is currently visible or not.

Extensions can programmatically bring a webview panel to the foreground by calling `reveal()`. This method takes an optional target view column to show the panel in. A webview panel may only show in a single editor column at a time. Calling `reveal()` or dragging a webview panel to a new editor column moves the webview into that new column.

![Webviews are moved when you drag them between tabs][LN162]

Let's update our extension to only allow a single webview to exist at a time. If the panel is in the background, then the `catCoding.start` command will bring it to the foreground:

```ts
export function activate(context: vscode.ExtensionContext) {
  // Track the current panel with a webview
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        // If we already have a panel, show it in the target column
        currentPanel.reveal(columnToShowIn);
      } else {
        // Otherwise, create a new panel
        currentPanel = vscode.window.createWebviewPanel(
          'catCoding',
          'Cat Coding',
          columnToShowIn || vscode.ViewColumn.One,
          {}
        );
        currentPanel.webview.html = getWebviewContent('Coding Cat');

        // Reset when the current panel is closed
        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
      }
    })
  );
}
```

Here's the new extension in action:

![Using a single panel and reveal][LN163]

Whenever a webview's visibility changes, or when a webview is moved into a new column, the `onDidChangeViewState` event is fired. Our extension can use this event to change cats based on which column the webview is showing in:

```ts
const cats = {
  'Coding Cat': 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'Compiling Cat': 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'Testing Cat': 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif'
};

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );
      panel.webview.html = getWebviewContent('Coding Cat');

      // Update contents based on view state changes
      panel.onDidChangeViewState(
        e => {
          const panel = e.webviewPanel;
          switch (panel.viewColumn) {
            case vscode.ViewColumn.One:
              updateWebviewForCat(panel, 'Coding Cat');
              return;

            case vscode.ViewColumn.Two:
              updateWebviewForCat(panel, 'Compiling Cat');
              return;

            case vscode.ViewColumn.Three:
              updateWebviewForCat(panel, 'Testing Cat');
              return;
          }
        },
        null,
        context.subscriptions
      );
    })
  );
}

function updateWebviewForCat(panel: vscode.WebviewPanel, catName: keyof typeof cats) {
  panel.title = catName;
  panel.webview.html = getWebviewContent(catName);
}
```

![Responding to onDidChangeViewState events][LN164]

### Inspecting and debugging webviews

The **Developer: Toggle Developer Tools** command opens a [Developer Tools][LK171] window that you can use debug and inspect your webviews.

![The developer tools][LN165]

Note that if you are using a version of VS Code older than 1.56, or if you are trying to debug a webview that sets `enableFindWidget`, you must instead use the **Developer: Open Webview Developer Tools** command. This command opens a dedicated Developer Tools page for each webview instead of using a Developer Tools page that is shared by all webviews and the editor itself.

From the Developer Tools, you can start inspecting the contents of your webview using the inspect tool located in the top left corner of the Developer Tools window:

![Inspecting a webview using the developer tools][LN166]

You can also view all of the errors and logs from your webview in the developer tools console:

![The developer tools console][LN167]

To evaluate an expression in the context of your webview, make sure to select the **active frame** environment from the dropdown in the top left corner of the Developer tools console panel:

![Selecting the active frame][LN168]

The **active frame** environment is where the webview scripts themselves are executed.

In addition, the **Developer: Reload Webview** command reloads all active webviews. This can be helpful if you need to reset a webview's state, or if some webview content on disk has changed and you want the new content to be loaded.

## Loading local content

Webviews run in isolated contexts that cannot directly access local resources. This is done for security reasons. This means that in order to load images, stylesheets, and other resources from your extension, or to load any content from the user's current workspace, you must use the `Webview.asWebviewUri` function to convert a local `file:` URI into a special URI that VS Code can use to load a subset of local resources.

Imagine that we want to start bundling the cat gifs into our extension rather than pulling them from Giphy. To do this, we first create a URI to the file on disk and then pass these URIs through the `asWebviewUri` function:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {}
      );

      // Get path to resource on disk
      const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.gif');

      // And get the special URI to use with the webview
      const catGifSrc = panel.webview.asWebviewUri(onDiskPath);

      panel.webview.html = getWebviewContent(catGifSrc);
    })
  );
}

function getWebviewContent(catGifSrc: vscode.Uri) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="${catGifSrc}" width="300" />
</body>
</html>`;
}
```

If we debug this code, we'd see that the actual value for `catGifSrc` is something like:

```
vscode-resource:/Users/toonces/projects/vscode-cat-coding/media/cat.gif
```

VS Code understands this special URI and will use it to load our gif from the disk!

By default, webviews can only access resources in the following locations:

- Within your extension's install directory.
- Within the user's currently active workspace.

Use the `WebviewOptions.localResourceRoots` to allow access to additional local resources.

You can also always use data URIs to embed resources directly within the webview.

### Controlling access to local resources

Webviews can control which resources can be loaded from the user's machine with `localResourceRoots` option. `localResourceRoots` defines a set of root URIs from which local content may be loaded.

We can use `localResourceRoots` to restrict **Cat Coding** webviews to only load resources from a `media` directory in our extension:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {
          // Only allow the webview to access resources in our extension's media directory
          localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
        }
      );

      const onDiskPath = vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.gif');
      const catGifSrc = panel.webview.asWebviewUri(onDiskPath);

      panel.webview.html = getWebviewContent(catGifSrc);
    })
  );
}
```

To disallow all local resources, just set `localResourceRoots` to `[]`.

In general, webviews should be as restrictive as possible in loading local resources. However, keep in mind that `localResourceRoots` does not offer complete security protection on its own. Make sure your webview also follows [security best practices][LN169], and add a [content security policy][LN170] to further restrict the content that can be loaded.

### Theming webview content

Webview can use CSS to change their appearance based on VS Code's current theme. VS Code groups themes into three categories, and adds a special class to the `body` element to indicate the current theme:

- `vscode-light` - Light themes.
- `vscode-dark` - Dark themes.
- `vscode-high-contrast` - High contrast themes.

The following CSS changes the text color of the webview based on the user's current theme:

```css
body.vscode-light {
  color: black;
}

body.vscode-dark {
  color: white;
}

body.vscode-high-contrast {
  color: red;
}
```

When developing a webview application, make sure that it works for the three types of themes. And always test your webview in high-contrast mode to make sure it will be usable by people with visual disabilities.

Webviews can also access VS Code theme colors using [CSS variables][LK172]. These variable names are prefixed with `vscode` and replace the `.` with `-`. For example `editor.foreground` becomes `var(--vscode-editor-foreground)`:

```css
code {
  color: var(--vscode-editor-foreground);
}
```

Review the [Theme Color Reference][LN170] for the available theme variables. [An extension][LK173] is available which provides IntelliSense suggestions for the variables.

The following font related variables are also defined:

- `--vscode-editor-font-family` - Editor font family (from the `editor.fontFamily` setting).
- `--vscode-editor-font-weight` - Editor font weight (from the `editor.fontWeight` setting).
- `--vscode-editor-font-size` - Editor font size (from the `editor.fontSize` setting).

Finally, for special cases where you need to write CSS that targets a single theme, the body element of webviews has a data attribute called `vscode-theme-id` that stores the ID of the currently active theme. This lets you write theme-specific CSS for webviews:

```css
body[data-vscode-theme-id="One Dark Pro"] {
    background: hotpink;
}
```

### Supported media formats

Webviews support audio and video, however not every media codec or media file container type is supported.

The following audio formats can be used in Webviews:

- Wav
- Mp3
- Ogg
- Flac

The following video formats can be used in webviews:

- H.264
- VP8

For video files, make sure that both the video and audio track's media formats are supported. Many `.mp4` files for example use `H.264` for video and `AAC` audio. VS Code will be able to play the video part of the `mp4`, but since `AAC` audio is not supported there won't be any sound. Instead you need to use `mp3` for the audio track.

### Context menus

Advanced webviews can customize the context menu that shows when a user right-clicks inside of a webview. This is done using a [contribution point][LN170] similarly to VS Code's normal context menus, so custom menus fit right in with the rest of the editor. Webviews can also show custom context menus for different sections of the webview.

To add a new context menu item to your webview, first add a new entry in `menus` under the new `webview/context` section. Each contribution takes a `command` (which is also where the item's title comes from) and a `when` clause. The [when clause][LN170] should include `webviewId == 'YOUR_WEBVIEW_VIEW_TYPE'` to make sure the context menus only apply to your extension's webviews:

```json
"contributes": {
  "menus": {
    "webview/context": [
      {
        "command": "catCoding.yarn",
        "when": "webviewId == 'catCoding'"
      },
      {
        "command": "catCoding.insertLion",
        "when": "webviewId == 'catCoding' && webviewSection == 'editor'"
      }
    ]
  },
  "commands": [
    {
      "command": "catCoding.yarn",
      "title": "Yarn 🧶",
      "category": "Cat Coding"
    },
    {
      "command": "catCoding.insertLion",
      "title": "Insert 🦁",
      "category": "Cat Coding"
    },
    ...
  ]
}
```

Inside of the webview, you can also set the contexts for specific areas of the HTML using the `data-vscode-context` [data attribute][LK174] (or in JavaScript with `dataset.vscodeContext`). The `data-vscode-context` value is a JSON object that specifies the contexts to set when the user right-clicks on the element. The final context is determined by going from the document root to the element that was clicked.

Consider this HTML for example:

```html
<div class="main" data-vscode-context='{"webviewSection": "main", "mouseCount": 4}'>
  <h1>Cat Coding</h1>

  <textarea data-vscode-context='{"webviewSection": "editor", "preventDefaultContextMenuItems": true}'></textarea>
</div>
```

If the user right-clicks on the `textarea`, the following contexts will be set:

* `webviewSection == 'editor'` - This overrides `webviewSection` from the parent element.
* `mouseCount == 4` - This is inherited from the parent element.
* `preventDefaultContextMenuItems == true` - This is a special context that hides the copy and paste entries that VS Code normally adds to webview context menus.

If the user right-clicks inside of the `<textarea>`, they will see:

![Custom context menus showing in a webview][LN171]

Sometimes it can be useful to show a menu on left/primary click. For example, to show a menu on a split button. You can do this by dispatching the `contextmenu` event in an `onClick` event:

```html
<button data-vscode-context='{"preventDefaultContextMenuItems": true }' onClick='((e) => {
        e.preventDefault();
        e.target.dispatchEvent(new MouseEvent("contextmenu", { bubbles: true, clientX: e.clientX, clientY: e.clientY }));
        e.stopPropagation();
    })(event)'>Create</button>
```

![Split button with a menu][LN172]


## Scripts and message passing

Webviews are just like iframes, which means that they can also run scripts. JavaScript is disabled in webviews by default, but it can easily re-enable by passing in the `enableScripts: true` option.

Let's use a script to add a counter tracking the lines of source code our cat has written. Running a basic script is pretty simple, but note that this example is only for demonstration purposes. In practice, your webview should always disable inline scripts using a [content security policy][LN172]:

```ts
import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {
          // Enable scripts in the webview
          enableScripts: true
        }
      );

      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    <h1 id="lines-of-code-counter">0</h1>

    <script>
        const counter = document.getElementById('lines-of-code-counter');

        let count = 0;
        setInterval(() => {
            counter.textContent = count++;
        }, 100);
    </script>
</body>
</html>`;
}
```

![A script running in a webview][LN173]

Wow! that's one productive cat.

Webview scripts can do just about anything that a script on a normal webpage can. Keep in mind though that webviews exist in their own context, so scripts in a webview do not have access to the VS Code API. That's where message passing comes in!

### Passing messages from an extension to a webview

An extension can send data to its webviews using `webview.postMessage()`. This method sends any JSON serializable data to the webview. The message is received inside the webview through the standard `message` event.

To demonstrate this, let's add a new command to **Cat Coding** that instructs the currently coding cat to refactor their code (thereby reducing the total number of lines). The new `catCoding.doRefactor` command use `postMessage` to send the instruction to the current webview, and `window.addEventListener('message', event => { ... })` inside the webview itself to handle the message:

```ts
export function activate(context: vscode.ExtensionContext) {
  // Only allow a single Cat Coder
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.One);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          'catCoding',
          'Cat Coding',
          vscode.ViewColumn.One,
          {
            enableScripts: true
          }
        );
        currentPanel.webview.html = getWebviewContent();
        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          undefined,
          context.subscriptions
        );
      }
    })
  );

  // Our new command
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.doRefactor', () => {
      if (!currentPanel) {
        return;
      }

      // Send a message to our webview.
      // You can send any JSON serializable data.
      currentPanel.webview.postMessage({ command: 'refactor' });
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    <h1 id="lines-of-code-counter">0</h1>

    <script>
        const counter = document.getElementById('lines-of-code-counter');

        let count = 0;
        setInterval(() => {
            counter.textContent = count++;
        }, 100);

        // Handle the message inside the webview
        window.addEventListener('message', event => {

            const message = event.data; // The JSON data our extension sent

            switch (message.command) {
                case 'refactor':
                    count = Math.ceil(count * 0.5);
                    counter.textContent = count;
                    break;
            }
        });
    </script>
</body>
</html>`;
}
```

![Passing messages to a webview][LN174]

### Passing messages from a webview to an extension

Webviews can also pass messages back to their extension. This is accomplished using a `postMessage` function on a special VS Code API object inside the webview. To access the VS Code API object, call `acquireVsCodeApi` inside the webview. This function can only be invoked once per session. You must hang onto the instance of the VS Code API returned by this method, and hand it out to any other functions that need to use it.

We can use the VS Code API and `postMessage` in our **Cat Coding** webview to alert the extension when our cat introduces a bug in their code:

```js
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {
          enableScripts: true
        }
      );

      panel.webview.html = getWebviewContent();

      // Handle messages from the webview
      panel.webview.onDidReceiveMessage(
        message => {
          switch (message.command) {
            case 'alert':
              vscode.window.showErrorMessage(message.text);
              return;
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    <h1 id="lines-of-code-counter">0</h1>

    <script>
        (function() {
            const vscode = acquireVsCodeApi();
            const counter = document.getElementById('lines-of-code-counter');

            let count = 0;
            setInterval(() => {
                counter.textContent = count++;

                // Alert the extension when our cat introduces a bug
                if (Math.random() < 0.001 * count) {
                    vscode.postMessage({
                        command: 'alert',
                        text: '🐛  on line ' + count
                    })
                }
            }, 100);
        }())
    </script>
</body>
</html>`;
}
```

![Passing messages from the webview to the main extension][LN175]

For security reasons, you must keep the VS Code API object private and make sure it is never leaked into the global scope.

### Using Web Workers

[Web Workers][LK175] are supported inside of webviews but there are a few important restrictions to be aware of.

First off, workers can only be loaded using either a `data:` or `blob:` URI. You cannot directly load a worker from your extension's folder.

If you do need to load worker code from a JavaScript file in your extension, try using `fetch`:

```js
const workerSource = 'absolute/path/to/worker.js';

fetch(workerSource)
  .then(result => result.blob())
  .then(blob => {
    const blobUrl = URL.createObjectURL(blob)
    new Worker(blobUrl);
  });
```

Worker scripts also do not support importing source code using `importScripts` or `import(...)`. If your worker loads code dynamically, try using a bundler such as [webpack][LK176] to package the worker script into a single file.

With `webpack`, you can use `LimitChunkCountPlugin` to force the compiled worker JavaScript to be a single file:

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'webworker',
  entry: './worker/src/index.js',
  output: {
    filename: 'worker.js',
    path: path.resolve(__dirname, 'media'),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
```

## Security

As with any webpage, when creating a webview, you must follow some basic security best practices.

### Limit capabilities

A webview should have the minimum set of capabilities that it needs. For example, if your webview does not need to run scripts, do not set the `enableScripts: true`. If your webview does not need to load resources from the user's workspace, set `localResourceRoots` to `[vscode.Uri.file(extensionContext.extensionPath)]` or even `[]` to disallow access to all local resources.

### Content security policy

[Content security policies][LK177] further restrict the content that can be loaded and executed in webviews. For example, a content security policy can make sure that only a list of allowed scripts can be run in the webview, or even tell the webview to only load images over `https`.

To add a content security policy, put a `<meta http-equiv="Content-Security-Policy">` directive at the top of the webview's `<head>`

```ts
function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">

    <meta http-equiv="Content-Security-Policy" content="default-src 'none';">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cat Coding</title>
</head>
<body>
    ...
</body>
</html>`;
}
```

The policy `default-src 'none';` disallows all content. We can then turn back on the minimal amount of content that our extension needs to function. Here's a content security policy that allows loading local scripts and stylesheets, and loading images over `https`:

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'none'; img-src ${webview.cspSource} https:; script-src ${webview.cspSource}; style-src ${webview.cspSource};"
/>
```

The `${webview.cspSource}` value is a placeholder for a value that comes from the webview object itself. See the [webview sample][LK178] for a complete example of how to use this value.

This content security policy also implicitly disables inline scripts and styles. It is a best practice to extract all inline styles and scripts to external files so that they can be properly loaded without relaxing the content security policy.

### Only load content over https

If your webview allows loading external resources, it is strongly recommended that you only allow these resources to be loaded over `https` and not over http. The example content security policy above already does this by only allowing images to be loaded over `https:`.

### Sanitize all user input

Just as you would for a normal webpage, when constructing the HTML for a webview, you must sanitize all user input. Failing to properly sanitize input can allow content injections, which may open your users up to a security risk.

Example values that must be sanitized:

- File contents.
- File and folder paths.
- User and workspace settings.

Consider using a helper library to construct your HTML strings, or at least ensure that all content from the user's workspace is properly sanitized.

Never rely on sanitization alone for security. Make sure to follow the other security best practices, such as having a [content security policy][LN175] to minimize the impact of any potential content injections.

## Persistence

In the standard webview [lifecycle][LN176], webviews are created by `createWebviewPanel` and destroyed when the user closes them or when `.dispose()` is called. The contents of webviews however are created when the webview becomes visible and destroyed when the webview is moved into the background. Any state inside the webview will be lost when the webview is moved to a background tab.

The best way to solve this is to make your webview stateless. Use [message passing][LN177] to save off the webview's state and then restore the state when the webview becomes visible again.

### getState and setState

Scripts running inside a webview can use the `getState` and `setState` methods to save off and restore a JSON serializable state object. This state is persisted even after the webview content itself is destroyed when a webview panel becomes hidden. The state is destroyed when the webview panel is destroyed.

```js
// Inside a webview script
const vscode = acquireVsCodeApi();

const counter = document.getElementById('lines-of-code-counter');

// Check if we have an old state to restore from
const previousState = vscode.getState();
let count = previousState ? previousState.count : 0;
counter.textContent = count;

setInterval(() => {
  counter.textContent = count++;
  // Update the saved state
  vscode.setState({ count });
}, 100);
```

`getState` and `setState` are the preferred way to persist state, as they have much lower performance overhead than `retainContextWhenHidden`.

### Serialization

By implementing a `WebviewPanelSerializer`, your webviews can be automatically restored when VS Code restarts. Serialization builds on `getState` and `setState`, and is only enabled if your extension registers a `WebviewPanelSerializer` for your webviews.

To make our coding cats persist across VS Code restarts, first add a `onWebviewPanel` activation event to the extension's `package.json`:

```json
"activationEvents": [
    ...,
    "onWebviewPanel:catCoding"
]
```

This activation event ensures that our extension will be activated whenever VS Code needs to restore a webview with the viewType: `catCoding`.

Then, in our extension's `activate` method, call `registerWebviewPanelSerializer` to register a new `WebviewPanelSerializer`. The `WebviewPanelSerializer` is responsible for restoring the contents of the webview from its persisted state. This state is the JSON blob that the webview contents set using `setState`.

```ts
export function activate(context: vscode.ExtensionContext) {
  // Normal setup...

  // And make sure we register a serializer for our webview type
  vscode.window.registerWebviewPanelSerializer('catCoding', new CatCodingSerializer());
}

class CatCodingSerializer implements vscode.WebviewPanelSerializer {
  async deserializeWebviewPanel(webviewPanel: vscode.WebviewPanel, state: any) {
    // `state` is the state persisted using `setState` inside the webview
    console.log(`Got state: ${state}`);

    // Restore the content of our webview.
    //
    // Make sure we hold on to the `webviewPanel` passed in here and
    // also restore any event listeners we need on it.
    webviewPanel.webview.html = getWebviewContent();
  }
}
```

Now if you restart VS Code with a cat coding panel open, the panel will be automatically restored in the same editor position.

### retainContextWhenHidden

For webviews with very complex UI or state that cannot be quickly saved and restored, you can instead use the `retainContextWhenHidden` option. This option makes a webview keep its content around but in a hidden state, even when the webview itself is no longer in the foreground.

Although **Cat Coding** can hardly be said to have complex state, let's try enabling `retainContextWhenHidden` to see how the option changes a webview's behavior:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding',
        'Cat Coding',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );
      panel.webview.html = getWebviewContent();
    })
  );
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
    <h1 id="lines-of-code-counter">0</h1>

    <script>
        const counter = document.getElementById('lines-of-code-counter');

        let count = 0;
        setInterval(() => {
            counter.textContent = count++;
        }, 100);
    </script>
</body>
</html>`;
}
```

![retainContextWhenHidden demo][LN178]

Notice how the counter does not reset now when the webview is hidden and then restored. No extra code required! With `retainContextWhenHidden`, the webview acts similarly to a background tab in a web browser. Scripts and other dynamic content keep running even when the tab is not active or visible. You can also send messages to a hidden webview when `retainContextWhenHidden` is enabled.

Although `retainContextWhenHidden` may be appealing, keep in mind that this has high memory overhead and should only be used when other persistence techniques will not work.

## Accessibility

The class `vscode-using-screen-reader` will be added to your webview's main body in contexts where the user is operating VS Code with a screen reader. Additionally, the class `vscode-reduce-motion` will be added to the document's main body element in cases where the user has expressed a preference to reduce the amount of motion in the window. By observing these classes and adjusting your rendering accordingly, your webview content can better reflect the user's preferences.

## Next steps

If you'd like to learn more about VS Code extensibility, try these topics:

- [Extension API][LN179] - Learn about the full VS Code Extension API.
- [Extension Capabilities][LN179] - Take a look at other ways to extend VS Code.


<a id="_api_extension-guides_notebook" ></a>

# /api/extension-guides/notebook
---------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 535b4d05-c2c8-424a-b075-2cd91566b8da
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Use the Notebook API to create rich Notebook experiences within Visual Studio Code.
    ---

## Notebook API

The Notebook API allows Visual Studio Code extensions to open files as notebooks, execute notebook code cells, and render notebook outputs in a variety of rich and interactive formats. You may know of popular notebook interfaces like Jupyter Notebook or Google Colab – the Notebook API allows for similar experiences inside Visual Studio Code.

## Parts of a Notebook

A notebook consists of a sequence of cells and their outputs. The cells of a notebook can be either **Markdown cells** or **code cells**, and are rendered within the core of VS Code. The outputs can be of various formats. Some output formats, such as plain text, JSON, images, and HTML are rendered by VS Code core. Others, such as application-specific data or interactive applets, are rendered by extensions.

Cells in a notebook are read and written to the file system by a `NotebookSerializer`, which handles reading data from the file system and converting it into a description of cells, as well as persisting modifications to the notebook back to the file system. The **code cells** of a notebook can be executed by a `NotebookController`, which takes the contents of a cell and from it produces zero or more outputs in a variety of formats ranging from plain text to formatted documents or interactive applets. Application-specific output formats and interactive applet outputs are rendered by a `NotebookRenderer`.

Visually:

![Overview of 3 components of notebooks: NotebookSerializer, NotebookController, and NotebookRenderer, and how they interact. Described textually above and in following sections.][LN180]

## Serializer

[NotebookSerializer API Reference][LK179]

A `NotebookSerializer` is responsible for taking the serialized bytes of a notebook and deserializing those bytes into `NotebookData`, which contains list of Markdown and code cells. It is responsible for the opposite conversion as well: taking `NotebookData` and converting the data into serialized bytes to be saved.

Samples:

* [JSON Notebook Serializer][LK180]: Simple example notebook that takes JSON input and outputs prettified JSON in a custom `NotebookRenderer`.
* [Markdown Serializer][LK181]: Open and edit Markdown files as a notebook.

### Example

In this example, we build a simplified notebook provider extension for viewing files in the [Jupyter Notebook format][LK182] with a `.notebook` extension (instead of its traditional file extension `.ipynb`).

A notebook serializer is declared in `package.json` under the `contributes.notebooks` section as follows:

```json
{
    ...
    "contributes": {
        ...
        "notebooks": [
            {
                "type": "my-notebook",
                "displayName": "My Notebook",
                "selector": [
                    {
                        "filenamePattern": "*.notebook"
                    }
                ]
            }
        ]
    }
}
```

The notebook serializer is then registered in the extension's activation event:

```ts
import { TextDecoder, TextEncoder } from "util";
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.workspace.registerNotebookSerializer(
            "my-notebook", new SampleSerializer()
        )
    );
}

interface RawNotebook {
    cells: RawNotebookCell[];
}

interface RawNotebookCell {
    source: string[];
    cell_type: 'code' | 'markdown';
}

class SampleSerializer implements vscode.NotebookSerializer {
    async deserializeNotebook(content: Uint8Array, _token: vscode.CancellationToken): Promise<vscode.NotebookData> {
        var contents = new TextDecoder().decode(content);

        let raw: RawNotebookCell[];
        try {
            raw = (<RawNotebook>JSON.parse(contents)).cells;
        } catch {
            raw = [];
        }

        const cells = raw.map(item => new vscode.NotebookCellData(
            item.cell_type === 'code' ? vscode.NotebookCellKind.Code : vscode.NotebookCellKind.Markup,
            item.source.join('\n'),
            item.cell_type === 'code' ? 'python' : 'markdown'
        ));

        return new vscode.NotebookData(cells);
    }

    async serializeNotebook(data: vscode.NotebookData, _token: vscode.CancellationToken): Promise<Uint8Array> {
        let contents: RawNotebookCell[] = [];

        for (const cell of data.cells) {
            contents.push({
                cell_type: cell.kind === vscode.NotebookCellKind.Code ? 'code' : 'markdown',
                source: cell.value.split(/\r?\n/g)
            });
        }

        return new TextEncoder().encode(JSON.stringify(contents));
    }
}
```

Now try running your extension and opening a Jupyter Notebook formatted file saved with the `.notebook` extension:

![Notebook showing contents of a Jupyter Notebook formatted file][LN181]

You should be able to open Jupyter-formatted notebooks and view their cells as both plain text and rendered Markdown, as well as edit the cells. However, outputs will not be persisted to disk; to save outputs you would need to also serialize and deserialize the outputs of cells from `NotebookData`.

To run a cell, you will need to implement a `NotebookController`.

## Controller

[NotebookController API Reference][LK183]

A `NotebookController` is responsible for taking a **code cell** and executing the code to produce some or no outputs.

A controller is directly associated with a notebook serializer and a type of notebook by setting the `NotebookController#notebookType` property on creation of the controller. Then the controller is registered globally by pushing the controller onto the extension subscriptions on activate of the extension.

```ts
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(new Controller());
}

class Controller {
    readonly controllerId = 'my-notebook-controller-id'
    readonly notebookType = 'my-notebook';
    readonly label = 'My Notebook';
    readonly supportedLanguages = ['python'];

    private readonly _controller: vscode.NotebookController;
    private _executionOrder = 0;

    constructor() {
        this._controller = vscode.notebooks.createNotebookController(this.controllerId, this.notebookType, this.label);

        this._controller.supportedLanguages = this.supportedLanguages;
        this._controller.supportsExecutionOrder = true;
        this._controller.executeHandler = this._execute.bind(this);
    }

    private _execute(cells: vscode.NotebookCell[], _notebook: vscode.NotebookDocument, _controller: vscode.NotebookController): void {
        for (let cell of cells) {
            this._doExecution(cell);
        }
    }

    private async _doExecution(cell: vscode.NotebookCell): Promise<void> {
        const execution = this._controller.createNotebookCellExecution(cell);
        execution.executionOrder = ++this._executionOrder;
        execution.start(Date.now()); // Keep track of elapsed time to execute cell.

        /* Do some execution here; not implemented */

        execution.replaceOutput([new vscode.NotebookCellOutput([vscode.NotebookCellOutputItem.text('Dummy output text!')])])
        execution.end(true, Date.now());
    }
}
```

If you're publishing a `NotebookController`-providing extension separately from its serializer, then add an entry like `notebookKernel<ViewTypeUpperCamelCased>` to the `keywords` in its `package.json`. For example, if you published an alternative kernel for the `github-issues` notebook type, you should add a keyword `notebookKernelGithubIssues` keyword to your extension.

Samples:

* [GitHub Issues Notebook][LK184]: Controller to execute queries for GitHub Issues
* [REST Book][LK185]: Controller to run REST queries.
* [Regexper notebooks][LK186]: Controller to visualize regular expressions.

## Output types

Outputs must be in one of three formats: Text Output, Error Output, or Rich Output. A kernel may provide multiple outputs for a single execution of a cell, in which case they will be displayed as a list.

Simple formats like Text Output, Error Output, or "simple" variants of Rich Output (HTML, Markdown, JSON, etc.) are rendered by VS Code core, whereas application specific Rich Output types are rendered by a [NotebookRenderer][LN182]. An extension may optionally choose to render "simple" Rich Outputs itself, for instance to add LaTeX support to Markdown outputs.

![Diagram of the different output types described above][LN183]

### Text Output

Text outputs are the most simple output format, and work much like many REPLs you may be familiar with. They consist only of a `text` field, which is rendered as plain text in the cell's output element:

```ts
vscode.NotebookCellOutputItem.text('This is the output...')
```

![Cell with simple text output][LN184]

### Error Output

Error outputs are helpful for displaying runtime errors in a consistent and understandable manner. They support standard `Error` objects.

```ts
try {
    /* Some code */
} catch (error) {
    vscode.NotebookCellOutputItem.error(error)
}
```

![Cell with error output showing error name and message, as well as a stack trace with magenta text][LN185]

### Rich Output

Rich outputs are the most advanced form of displaying cell outputs. They allow for providing many different representations of the output data, keyed by mimetype. For example, if a cell output was to represent a GitHub Issue, the kernel might produce a rich output with several properties on its `data` field:

* A `text/html` field containing a formatted view of the issue.
* A `text/x-json` field containing a machine readable view.
* An `application/github-issue` field that a `NotebookRenderer` could use to create a fully interactive view of the issue.

In this case, the `text/html` and `text/x-json` views will be rendered by VS Code natively, but the `application/github-issue` view will display an error if no `NotebookRenderer` was registered to that mimetype.

```ts
execution.replaceOutput([new vscode.NotebookCellOutput([
                            vscode.NotebookCellOutputItem.text('<b>Hello</b> World', 'text/html'),
                            vscode.NotebookCellOutputItem.json({ hello: 'world' }),
                            vscode.NotebookCellOutputItem.json({ custom-data-for-custom-renderer: 'data' }, 'application/custom'),
                        ])]);
```

![Cell with rich output showing switching between formatted HTML, a JSON editor, and an error message showing no renderer is available (application/hello-world)][LN186]

By default, VS Code can render the following mimetypes:

* application/javascript
* text/html
* image/svg+xml
* text/markdown
* image/png
* image/jpeg
* text/plain

VS Code will render these mimetypes as code in a built-in editor:

* text/x-json
* text/x-javascript
* text/x-html
* text/x-rust
* ... text/x-LANGUAGE_ID for any other built-in or installed languages.

This notebook is using the built-in editor to display some Rust code:
![Notebook displaying Rust code in a built in Monaco editor][LN187]

To render an alternative mimetype, a `NotebookRenderer` must be registered for that mimetype.

## Notebook Renderer

A notebook renderer is responsible for taking output data of a specific mimetype and providing a rendered view of that data. A renderer shared by output cells can maintain global state between these cells. The complexity of the rendered view can range from simple static HTML to dynamic fully interactive applets. In this section, we'll explore various techniques for rendering an output representing a GitHub Issue.

You can get started quickly using boilerplate from our Yeoman generators. To do so, first install Yeoman and the VS Code Generators using:

```bash
npm install -g yo generator-code
```

Then, run `yo code` and choose `New Notebook Renderer (TypeScript)`.

If you don't use this template, you'll just want to make sure that you add `notebookRenderer` to the `keywords` in your extension's `package.json`, and mention its mimetype somewhere in the extension name or description, so that users can find your renderer.

### A Simple, Non-Interactive Renderer

Renderers are declared for a set of mimetypes by contributing to the `contributes.notebookRenderer` property of an extension's `package.json`. This renderer will work with input in the `ms-vscode.github-issue-notebook/github-issue` format, which we will assume some installed controller is able to provide:

```json
{
  "activationEvents": ["...."],
  "contributes": {
    ...
    "notebookRenderer": [
      {
        "id": "github-issue-renderer",
        "displayName": "GitHub Issue Renderer",
        "entrypoint": "./out/renderer.js",
        "mimeTypes": [
          "ms-vscode.github-issue-notebook/github-issue"
        ]
      }
    ]
  }
}
```

Output renderers are always rendered in a single `iframe`, separate from the rest of VS Code's UI, to ensure they don't accidentally interfere or cause slowdowns in VS Code. The contribution refers to an "entrypoint" script, which is loaded into the notebook's `iframe` right before any output needs to be rendered. Your entrypoint needs to be a single file, which you can write yourself, or use a bundler like Webpack, Rollup, or Parcel to create.

When it's loaded, your entrypoint script should export `ActivationFunction` from `vscode-notebook-renderer` to render your UI once VS Code is ready to render your renderer. For example, this will put all your GitHub issue data as JSON into the cell output:

```js
import type { ActivationFunction } from 'vscode-notebook-renderer';

export const activate: ActivationFunction = (context) => ({
    renderOutputItem(data, element) {
        element.innerText = JSON.stringify(data.json())
    }
})
```

You can [refer to the complete API definition here][LK187]. If you're using TypeScript, you can install `@types/vscode-notebook-renderer` and then add `vscode-notebook-renderer` to the `types` array in your `tsconfig.json` to make these types available in your code.

To create richer content, you could manually create DOM elements, or use a framework like Preact and render it into the output element, for example:

```jsx
import type { ActivationFunction } from 'vscode-notebook-renderer';
import { h, render } from 'preact';

const Issue: FunctionComponent<{ issue: GithubIssue }> = ({ issue }) => (
  <div key={issue.number}>
    <h2>
      {issue.title}
      (<a href={`https://github.com/${issue.repo}/issues/${issue.number}`}>#{issue.number}</a>)
    </h2>
    <img src={issue.user.avatar_url} style={{ float: 'left', width: 32, borderRadius: '50%', marginRight: 20 }} />
    <i>@{issue.user.login}</i> Opened: <div style="margin-top: 10px">{issue.body}</div>
  </div>
);

const GithubIssues: FunctionComponent<{ issues: GithubIssue[]; }> = ({ issues }) => (
  <div>{issues.map(issue => <Issue key={issue.number} issue={issue} />)}</div>
);

export const activate: ActivationFunction = (context) => ({
    renderOutputItem(data, element) {
        render(<GithubIssues issues={data.json()} />, element);
    }
});
```

Running this renderer on an output cell with a `ms-vscode.github-issue-notebook/github-issue` data field gives us the following static HTML view:

![Cell output showing rendered HTML view of issue][LN188]

If you have elements outside of the container or other asynchronous processes, you can use `disposeOutputItem` to tear them down. This event will fire when output is cleared, a cell is deleted, and before new output is rendered for an existing cell. For example:

```js
const intervals = new Map();

export const activate: ActivationFunction = (context) => ({
    renderOutputItem(data, element) {
        render(<GithubIssues issues={data.json()} />, element);

        intervals.set(data.mime, setInterval(() => {
            if(element.querySelector('h2')) {
                element.querySelector('h2')!.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
        }, 1000));
    },
    disposeOutputItem(id) {
        clearInterval(intervals.get(id));
        intervals.delete(id);
    }
});
```

It's important to bear in mind that all outputs for a notebook are rendered in different elements in the same iframe. If you use functions like `document.querySelector`, make sure to scope it to the specific output you're interested in to avoid conflicting with other outputs. In this example, we use `element.querySelector` to avoid that issue.

### Interactive Notebooks (communicating with the controller)

Imagine we want to add the ability to view an issue's comments after clicking a button in the rendered output. Assuming a controller can provide issue data with comments under the `ms-vscode.github-issue-notebook/github-issue-with-comments` mimetype, we might try to retrieve all the comments up front and implement it as follows:

```jsx
const Issue: FunctionComponent<{ issue: GithubIssueWithComments }> = ({ issue }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div key={issue.number}>
      <h2>
        {issue.title}
        (<a href={`https://github.com/${issue.repo}/issues/${issue.number}`}>#{issue.number}</a>)
      </h2>
      <img src={issue.user.avatar_url} style={{ float: 'left', width: 32, borderRadius: '50%', marginRight: 20 }} />
      <i>@{issue.user.login}</i> Opened: <div style="margin-top: 10px">{issue.body}</div>
      <button onClick={() => setShowComments(true)}>Show Comments</button>
      {showComments && issue.comments.map(comment => <div>{comment.text}</div>)}
    </div>
  );
};
```

This immediately raises some flags. For one, we're loading full comment data for all issues, even before we've clicked the button. Additionally, we require controller support for a whole different mimetype even though we just want to show a bit more data.

Instead, the controller can provide additional functionality to the renderer by including a preload script which VS Code will load in the iframe as well. This script has access global functions `postKernelMessage` and `onDidReceiveKernelMessage` that can be used to communicate with the controller.

![Diagram showing how controllers interact with renderers through the NotebookRendererScript][LN189]

For example, you might modify your controller `rendererScripts` to reference a new file where you create a connection back to the Extension Host, and expose a global communication script for the renderer to use.

In your controller:

```ts
class Controller {
    // ...

    readonly rendererScriptId = 'my-renderer-script';

    constructor() {
        // ...

        this._controller.rendererScripts.push(new vscode.NotebookRendererScript(vscode.Uri.file(/* path to script */), rendererScriptId));
    }
}
```

In your `package.json` specify your script as a dependency of your renderer:

```json
{
  "activationEvents": ["...."],
  "contributes": {
    ...
    "notebookRenderer": [
      {
        "id": "github-issue-renderer",
        "displayName": "GitHub Issue Renderer",
        "entrypoint": "./out/renderer.js",
        "mimeTypes": [...],
        "dependencies": [
            "my-renderer-script"
        ]
      }
    ]
  }
}
```

In your script file you can declare communication functions to communicate with the controller:

```js
import "vscode-notebook-renderer/preload";

globalThis.githubIssueCommentProvider = {
  loadComments(issueId: string, callback: (comments: GithubComment[]) => void) {
    postKernelMessage({ command: 'comments', issueId });

    onDidReceiveKernelMessage(event => {
        if (event.data.type === 'comments' && event.data.issueId === issueId) {
            callback(event.data.comments);
        }
    })
  }
};
```

And then you can consume that in the renderer. You want to make sure that you check whether the global exposed by the controller's render scripts is available, since other developers might create github issue output in other notebooks and controllers that don't implement the `githubIssueCommentProvider`. In this case, we'll only show the **Load Comments** button if the global is available:

```jsx
const canLoadComments = globalThis.githubIssueCommentProvider !== undefined;
const Issue: FunctionComponent<{ issue: GithubIssue }> = ({ issue }) => {
  const [comments, setComments] = useState([]);
  const loadComments = () =>
    globalThis.githubIssueCommentProvider.loadComments(issue.id, setComments);

  return (
    <div key={issue.number}>
      <h2>
        {issue.title}
        (<a href={`https://github.com/${issue.repo}/issues/${issue.number}`}>#{issue.number}</a>)
      </h2>
      <img src={issue.user.avatar_url} style={{ float: 'left', width: 32, borderRadius: '50%', marginRight: 20 }} />
      <i>@{issue.user.login}</i> Opened: <div style="margin-top: 10px">{issue.body}</div>
      {canLoadComments && <button onClick={loadComments}>Load Comments</button>}
      {comments.map(comment => <div>{comment.text}</div>)}
    </div>
  );
};
```

Finally, we want to set up communication to the controller. `NotebookController.onDidReceiveMessage` method is called when a renderer posts a message using the global `postKernelMessage` function. To implement this method, attach to `onDidReceiveMessage` to listen for messages:

```ts
class Controller {
    // ...

    constructor() {
        // ...

        this._controller.onDidReceiveMessage(event => {
            if (event.message.command === 'comments') {
                _getCommentsForIssue(event.message.issueId).then(comments => this._controller.postMessage({
                    type: 'comments',
                    issueId: event.message.issueId,
                    comments,
                }), event.editor);
            }
        })
    }
}
```

### Interactive Notebooks (communicating with the extension host)

Imagine we want to add the ability to open the output item within a separate editor. To make this possible, the renderer needs to be able to send a message to the extension host, which will then launch the editor.

This would be useful in scenarios where the renderer and controller are two separate extensions.

In the `package.json` of the renderer extension specify the value for `requiresMessaging` as `optional` which allows your renderer to work in both situations when it has and doesn't have access to the extension host.


```json
{
  "activationEvents": ["...."],
  "contributes": {
    ...
    "notebookRenderer": [
      {
        "id": "output-editor-renderer",
        "displayName": "Output Editor Renderer",
        "entrypoint": "./out/renderer.js",
        "mimeTypes": [...],
        "requiresMessaging": "optional"
      }
    ]
  }
}
```

The possible values for `requiresMessaging` include:

* `always`  : Messaging is required. The renderer will only be used when it's part of an extension that can be run in an extension host.
* `optional`: The renderer is better with messaging when the extension host is available, but it's not required to install and run the renderer.
* `never`   : The renderer does not require messaging.

The last two options are preferred, as this ensures the portability of renderer extensions to other contexts where the extension host might not necessarily be available.

The renderer script file can setup communications as follows:

```js
import { ActivationFunction } from 'vscode-notebook-renderer';

export const activate: ActivationFunction = (context) => ({
  renderOutputItem(data, element) {
    // Render the output using the output `data`
    ....
    // The availability of messaging depends on the value in `requiresMessaging`
    if (!context.postMessage){
      return;
    }

    // Upon some user action in the output (such as clicking a button),
    // send a message to the extension host requesting the launch of the editor.
    document.querySelector('#openEditor').addEventListener('click', () => {
      context.postMessage({
        request: 'showEditor',
        data: '<custom data>'
      })
    });
  }
});
```

And then you can consume that message in the extension host as follows:

```ts
const messageChannel = notebooks.createRendererMessaging('output-editor-renderer');
messageChannel.onDidReceiveMessage((e) => {
  if (e.message.request === 'showEditor'){
    // Launch the editor for the output identified by `e.message.data`
  }
});
```

Note:

* To ensure your extension is running in the extension host before messages are delivered, add `onRenderer:<your renderer id>` to your `activationEvents` and set up communication in your extension's `activate` function.
* Not all messages sent by the renderer extension to the extension host are guaranteed to be delivered. A user could close the notebook before messages from the renderer are delivered.


## Supporting debugging

For some controllers, such as those that implement a programming language, it can be desirable to allow debugging a cell's execution. To add debugging support, a notebook kernel can implement a [debug adapter][LN189], either by directly implementing the [debug adapter protocol][LK188] (DAP), or by delegating and transforming the protocol to an existing notebook debugger (as done in the 'vscode-simple-jupyter-notebook' sample). A much simpler approach is to use an existing unmodified debug extension and transform the DAP for notebook needs on the fly (as done in 'vscode-nodebook').

Samples:

* [vscode-nodebook][LK189]: Node.js notebook with debugging support provided by VS Code's built-in JavaScript debugger and some simple protocol transformations
* [vscode-simple-jupyter-notebook][LK190]: Jupyter notebook with debugging support provided by the existing Xeus debugger


<a id="_api_extension-guides_custom-editors" ></a>

# /api/extension-guides/custom-editors
---------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 6eb86aa4-0f4c-4168-b34a-6ec6b204e960
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Use the Custom Editor API to create customizable editors within Visual Studio Code.
    ---

## Custom Editor API

Custom editors allow extensions to create fully customizable read/write editors that are used in place of VS Code's standard text editor for specific types of resources. They have a wide variety of use cases, such as:

- Previewing assets, such as shaders or 3D models, directly in VS Code.
- Creating WYSIWYG editors for languages such as Markdown or XAML.
- Offering alternative visual renderings for data files such as CSV or JSON or XML.
- Building fully customizable editing experiences for binary or text files.

This document provides an overview of the custom editor API and the basics of implementing a custom editor. We'll take a look at the two types of custom editors and how they differ, as well as which one is right for your use case. Then for each of these custom editor types, we'll cover the basics of building a well behaved custom editor.

Although custom editors are a powerful new extension point, implementing a basic custom editor is not actually that difficult! Still, if you are working on your first VS Code extension, you may want to consider holding off on diving into custom editors until you are more familiar with the basics of the VS Code API. Custom editors build on a lot of VS Code concepts—such as [webviews][LN189] and text documents—so it may be a bit overwhelming if you are learning all of these new ideas at the same time.

But if you're feeling ready and are thinking about all the cool custom editors you are going to build, then let's get started! Be sure to download the [custom editor extension sample][sample] so you can follow along with the documentation and see how the custom editor API comes together.

## Links

- [Custom Editor sample][sample]

### VS Code API Usage

- [`window.registerCustomEditorProvider`][LN190]
- [`CustomTextEditorProvider`][LN191]

## Custom Editor API basics

A custom editor is an alternative view that is shown in place of VS Code's standard text editor for specific resources. There are two parts to a custom editor: the view that users interact with and the document model that your extension uses to interact with the underlying resource.

The view side of a custom editor is implemented using a [webview][LN191]. This lets you build the user interface of your custom editor using standard HTML, CSS, and JavaScript. Webviews cannot access the VS Code API directly but they can talk with extensions by passing messages back and forth. Check out our [webview documentation][LN191] for more information on webviews and best practices for working with them.

The other part of a custom editor is the document model. This model is how your extension understands the resource (file) it is working with. A `CustomTextEditorProvider` uses VS Code's standard [TextDocument][LN192] as its document model and all changes to the file are expressed using VS Code's standard text editing APIs. `CustomReadonlyEditorProvider` and `CustomEditorProvider` on the other hand let you provide your own document model, which lets them be used for non-text file formats.

Custom editors have a single document model per resource but there may be multiple editor instances (views) of this document. For example, imagine that you open a file that has a `CustomTextEditorProvider` and then run the **View: Split editor** command. In this case, there is still just a single `TextDocument` since there is still just a single copy of the resource in the workspace,  but there are now two webviews for that resource.

### `CustomEditor` vs `CustomTextEditor`

There are two classes of custom editors: custom text editors and custom editors. The main difference between these is how they define their document model.

A `CustomTextEditorProvider` uses VS Code's standard [`TextDocument`][LK190] as its data model. You can use a `CustomTextEditor` for any text based file types. `CustomTextEditor` are considerably easier to implement because VS Code already knows how to work with text files and can therefore implement operations such as save and backing up files for hot exit.

With a `CustomEditorProvider` on the other hand, your extension brings its own document model. This means that you can use a `CustomEditor` for binary formats such as images, but it also means that your extension is responsible for a lot more, including implementing save and backing. You can skip over much of this complexity if your custom editor is readonly, such as custom editors for previews.

When trying to decide which type of custom editor to use, the decision is usually simple: if you are working with a text based file format use `CustomTextEditorProvider`, for binary file formats use `CustomEditorProvider`.

### Contribution point

The `customEditors` [contribution point][LN192] is how your extension tells VS Code about the custom editors that it provides. For example, VS Code needs to know what types of files your custom editor works with as well as how to identify your custom editor in any UI.

Here's a basic `customEditor` contribution for the [custom editor extension sample][sample]:

```json
"contributes": {
  "customEditors": [
    {
      "viewType": "catEdit.catScratch",
      "displayName": "Cat Scratch",
      "selector": [
        {
          "filenamePattern": "*.cscratch"
        }
      ],
      "priority": "default"
    }
  ]
}
```

`customEditors` is an array, so your extension can contribute multiple custom editors. Let's break down the custom editor entry itself:

- `viewType` - Unique identifier for your custom editor.

    This is how VS Code ties a custom editor contribution in the `package.json` to your custom editor implementation in code. This must be unique across all extensions, so instead of a generic `viewType` such as `"preview"` make sure to use one that is unique to your extension, for example `"viewType": "myAmazingExtension.svgPreview"`

- `displayName` - Name that identifies the custom editor in VS Code's UI.

    The display name is shown to the user in VS Code UI such as the **View: Reopen with** dropdown.

- `selector` - Specifies which files a custom editor is active for.

    The `selector` is an array of one or more [glob patterns][LN193]. These glob patterns are matched against file names to determine if the custom editor can be used for them. A `filenamePattern` such as `*.png` will enable the custom editor for all PNG files.

    You can also create more specific patterns that match on file or directory names, for example `**/translations/*.json`.

- `priority` - (optional) Specifies when the custom editor is used.

    `priority` controls when a custom editor is used when a resource is open. Possible values are:

    - `"default"` - Try to use the custom editor for every file that matches the custom editor's `selector`. If there are multiple custom editors for a given file, the user will have to select which custom editor they want to use.
    - `"option"` - Do not use the custom editor by default but allow users to switch to it or configure it as their default.

### Custom editor activation

When a user opens one of your custom editors, VS Code fires an `onCustomEditor:VIEW_TYPE` activation event. During activation, your extension must call `registerCustomEditorProvider` to register a custom editor with the expected `viewType`.

It's important to note that `onCustomEditor` is only called when VS Code needs to create an instance of your custom editor. If VS Code is merely showing the user some information about an available custom editor—such as with the **View: Reopen with** command—your extension will not be activated.

## Custom Text Editor

Custom text editors let you create custom editors for text files. This can be anything from plain unstructured text to [CSV][LK191] to JSON or XML. Custom text editors use VS Code's standard [TextDocument][LN193] as their document model.

The [custom editor extension sample][sample] includes a simple example custom text editor for cat scratch files (which are just JSON files that end with a `.cscratch` file extension). Let's take a look at some of the important bits of implementing a custom text editor.

### Custom Text Editor lifecycle

VS Code handles the lifecycle of both the view component of custom text editors (the webviews) and the model component (`TextDocument`). VS Code calls out to your extension when it needs to create a new custom editor instance and cleans up the editor instances and document model when the user closes their tabs.

To understand how this all works in practice, let's work through what happens from an extension's point of view when a user opens a custom text editor and then when a user closes a custom text editor.

**Opening a custom text editor**

Using the [custom editor extension sample][sample], here's what happens when the user first opens a `.cscratch` file:

1. VS Code fires an `onCustomEditor:catCustoms.catScratch` activation event.

    This activates our extension if it has not already been activated. During activation, our extension must ensure the extension registers a `CustomTextEditorProvider` for `catCustoms.catScratch` by calling `registerCustomEditorProvider`.

1. VS Code then invokes `resolveCustomTextEditor` on the registered `CustomTextEditorProvider` for `catCustoms.catScratch`.

    This method takes the `TextDocument` for the resource that is being opened and a `WebviewPanel`. The extension must fill in the initial HTML contents for this webview panel.

Once `resolveCustomTextEditor` returns, our custom editor is displayed to the user. What is drawn inside the webview is entirely up to our extension.

This same flow happens every time a custom editor is opened, even when you split a custom editor. Every instance of a custom editor has its own `WebviewPanel`, although multiple custom text editors will share the same `TextDocument` if they are for the same resource. Remember: think of the `TextDocument` as being the model for the resource while the webview panels are views of that model.

**Closing custom text editors**

When a user closes a custom text editor, VS Code fires the `WebviewPanel.onDidDispose` event on the `WebviewPanel`. At this point, your extension should clean up any resources associated with that editor (event subscriptions, file watchers, etc.)

When the last custom editor for a given resource is closed, the `TextDocument` for that resource will also be disposed provided there are no other editors using it and no other extensions are holding onto it. You can check the `TextDocument.isClosed` property to see if the `TextDocument` has been closed. Once a `TextDocument` is closed, opening the same resource using a custom editor will cause a new `TextDocument` to be opened.

### Synchronizing changes with the TextDocument

Since custom text editors use a `TextDocument` as their document model, they are responsible for updating the `TextDocument` whenever an edit occurs in a custom editor as well as updating themselves whenever the `TextDocument` changes.

**From webview to `TextDocument`**

Edits in custom text editors can take many different forms—clicking a button, changing some text, dragging some items around. Whenever a user edits the file itself inside the custom text editor, the extension must update the `TextDocument`. Here's how the cat scratch extension implements this:

1. User clicks the **Add scratch** button in the webview. This [posts a message][LN194] from the webview back to the extension.

1. The extension receives the message. It then updates its internal model of the document (which in the cat scratch example just consists of adding a new entry to the JSON).

1. The extension creates a `WorkspaceEdit` that writes the updated JSON to the document. This edit is applied using `vscode.workspace.applyEdit`.

Try to keep your workspace edit to the minimal change required to update the document. Also keep in mind that if you are working with a language such as JSON, your extension should try to observe the user's existing formatting conventions (spaces vs tabs, indent size, etc.).

**From `TextDocument` to webviews**

When a `TextDocument` changes, your extension also needs to make sure its webviews reflect the documents new state. TextDocuments can be changed by user actions such as undo, redo, or revert file; by other extensions using a `WorkspaceEdit`; or by a user who opens the file in VS Code's default text editor. Here's how the cat scratch extension implements this:

1. In the extension, we subscribe to the `vscode.workspace.onDidChangeTextDocument` event. This event is fired for every change to the `TextDocument` (including changes that our custom editor makes!)

1. When a change comes in for a document that we have an editor for, we post a message to the webview with its new document state. This webview then updates itself to render the updated document.

It's important to remember that any file edits that a custom editor triggers will cause `onDidChangeTextDocument` to fire. Make sure your extension does not get into an update loop where the user makes an edit in the webview, which fires `onDidChangeTextDocument`, which causes the webview to update, which causes the webview to trigger another update on your extension, which fires `onDidChangeTextDocument`, and so on.

Also remember that if you are working with a structured language such as JSON or XML, the document may not always be in a valid state. Your extension must either be able gracefully handle errors or display an error message to the user so that they understand what is wrong and how to fix it.

Finally, if updating your webviews is expensive, consider [debouncing][LK192] the updates to your webview.

## Custom Editor

`CustomEditorProvider` and `CustomReadonlyEditorProvider` let you create custom editors for binary file formats. This API gives your full control over the file is displayed to users, how edits are made to it, and lets your extension hook into `save` and other file operations. Again, if you are building an editor for a text based file format, strongly consider using a [`CustomTextEditor`][LN195] instead as they are far simpler to implement.

The [custom editor extension sample][sample] includes a simple example custom binary editor for paw draw files (which are just jpeg files that end with a `.pawdraw` file extension). Let's take a look at what goes into building a custom editor for binary files.

### CustomDocument

With custom editors, your extension is responsible for implementing its own document model with the `CustomDocument` interface. This leaves your extension free to store whatever data it needs on a `CustomDocument` in order to your custom editor, but it also means that your extension must implement basic document operations such as saving and backing up file data for hot exit.

There is one `CustomDocument` per opened file. Users can open multiple editors for a single resource—such as by splitting the current custom editor—but all those editors will be backed by the same `CustomDocument`.

### Custom Editor lifecycle

**supportsMultipleEditorsPerDocument**

By default, VS Code only allows there to be one editor for each custom document. This limitation makes it easier to correctly implement a custom editor as you do not have to worry about synchronizing multiple custom editor instances with each other.

If your extension can support it however, we recommend setting `supportsMultipleEditorsPerDocument: true` when registering your custom editor so that multiple editor instances can be opened for the same document. This will make your custom editors behave more like VS Code's normal text editors.

**Opening Custom Editors**
When the user opens a file that matches the `customEditor` contribution point, VS Code fires an `onCustomEditor` [activation event][LN195] and then invokes the provider registered for the provided view type. A `CustomEditorProvider` has two roles: providing the document for the custom editor and then providing the editor itself. Here's a ordered list of what happens for the `catCustoms.pawDraw` editor from the [custom editor extension sample][sample]:

1. VS Code fires an `onCustomEditor:catCustoms.pawDraw` activation event.

    This activates our extension if it has not already been activated. We must also make sure our extension registers a `CustomReadonlyEditorProvider` or `CustomEditorProvider` for `catCustoms.pawDraw` during activation.

1. VS Code calls `openCustomDocument` on our `CustomReadonlyEditorProvider` or `CustomEditorProvider` registered for `catCustoms.pawDraw` editors.

    Here our extension is given a resource uri and must return a new `CustomDocument` for that resource. This is the point at which our extension should create its document internal model for that resource. This may involve reading and parsing the initial resource state from disk or initializing our new `CustomDocument`.

    Our extension can define this model by creating a new class that implements `CustomDocument`. Remember that this initialization stage is entirely up to extensions; VS Code does not care about any additional information extensions store on a `CustomDocument`.

1. VS Code calls `resolveCustomEditor` with the `CustomDocument` from step 2 and a new `WebviewPanel`.

    Here our extension must fill in the initial html for the custom editor. If we need, we can also hold onto a reference to the `WebviewPanel` so that we can reference it later, for example inside commands.

Once `resolveCustomEditor` returns, our custom editor is displayed to the user.

If the user opens the same resource in another editor group using our custom editor—for example by splitting the first editor—the extension's job is simplified. In this case, VS Code just calls `resolveCustomEditor` with the same `CustomDocument` we created when the first editor was opened.

**Closing Custom Editors**

Say we have two instance of our custom editors open for the same resource. When the user closes these editors, VS Code signals our extension so that it can clean up any resources associated with the editor.

When the first editor instance is closed, VS Code fires the `WebviewPanel.onDidDispose` event on the `WebviewPanel` from the closed editor. At this point, our extension must clean up any resources associated with that specific editor instance.

When the second editor is closed, VS Code again fires `WebviewPanel.onDidDispose`. However now we've also closed all the editors associated with the `CustomDocument`. When there are no more editors for a `CustomDocument`, VS Code calls the `CustomDocument.dispose` on it. Our extension's implementation of `dispose` must clean up any resources associated with the document.

If the user then reopens the same resource using our custom editor, we will go back through the whole `openCustomDocument`, `resolveCustomEditor` flow with a new `CustomDocument`.

### Readonly Custom editors

Many of the following sections only apply to custom editors that support editing and, while it may sound paradoxical, many custom editors don't require editing capabilities at all. Consider a image preview for example. Or a visual rendering of a memory dump. Both can be implemented using custom editors but neither need to be editable. That's where `CustomReadonlyEditorProvider` comes in.

A `CustomReadonlyEditorProvider` lets you create custom editors that do not support editing. They can still be interactive but don't support operations such as undo and save. It is also much simpler to implement a readonly custom editor compared to a fully editable one.

### Editable Custom Editor Basics

Editable custom editors let you hook in to standard VS Code operations such as undo and redo, save, and hot exit. This makes editable custom editors very powerful, but also means that properly implementing is much more complex than implementing an editable custom text editor or a readonly custom editor.

Editable custom editors are implemented by `CustomEditorProvider`. This interface extends `CustomReadonlyEditorProvider`, so you'll have to implement basic operations such as `openCustomDocument` and `resolveCustomEditor`, along with a set of editing specific operations. Let's take a look at the editing specific parts of `CustomEditorProvider`.

**Edits**

Changes to a editable custom document are expressed through edits. An edit can be anything from a text change, to an image rotation, to reordering a list. VS Code leaves the specifics of what an edit does entirely up to your extension, but VS Code does need to know when an edit takes places. Editing is how VS Code marks documents as dirty, which in turn enables auto save and back ups.

Whenever a user makes an edit in any of the webviews for your custom editor, your extension must fire a `onDidChangeCustomDocument` event from its `CustomEditorProvider`. The `onDidChangeCustomDocument` event can fired two event types depending on your custom editor implementation: `CustomDocumentContentChangeEvent` and `CustomDocumentEditEvent`.

**CustomDocumentContentChangeEvent**

A `CustomDocumentContentChangeEvent` is a bare-bones edit. It's only function is to tell VS Code that a document has been edited.

When an extension fires a `CustomDocumentContentChangeEvent` from `onDidChangeCustomDocument`, VS Code will mark the associated document as being dirty. At this point, the only way for the document to become non-dirty is for the user to either save or revert it. Custom editors that use `CustomDocumentContentChangeEvent` do not support undo/redo.

**CustomDocumentEditEvent**

A `CustomDocumentEditEvent` is a more complex edit that allows for undo/redo. You should always try to implement your custom editor using `CustomDocumentEditEvent` and only fallback to using `CustomDocumentContentChangeEvent` if implementing undo/redo is not possible.

A `CustomDocumentEditEvent` has the following fields:

- `document` — The `CustomDocument` the edit was for.
- `label` — Optional text that that describes what type of edit was made (for example: "Crop", "Insert", ...)
- `undo` — Function invoked by VS Code when the edit needs to be undone.
- `redo` — Function invoked by VS Code when the edits needs to be redone.

When an extension fires a `CustomDocumentEditEvent` from `onDidChangeCustomDocument`, VS Code marks the associated document as being dirty. To make the document no longer dirty, a user can then either save or revert the document, or undo/redo back to the document's last saved state.

The `undo` and `redo` methods on an editor are called by VS Code when that specific edits needs to be undone or reapplied. VS Code maintains an internal stack of edits, so if your extension fires `onDidChangeCustomDocument` with three edits, let's call them `a`, `b`, `c`:

```ts
onDidChangeCustomDocument(a);
onDidChangeCustomDocument(b);
onDidChangeCustomDocument(c);
```

The following sequence of user actions results in these calls:

```
undo — c.undo()
undo — b.undo()
redo — b.redo()
redo — c.redo()
redo — no op, no more edits
```

To implement undo/redo, your extension must update it's associated custom document's internal state, as well as updating all associated webviews for the document so that they reflect the document's new state. Keep in mind that there may be multiple webviews for a single resource. These must always show the same document data. Multiple instances of an image editor for example must always show the same pixel data but may allow each editor instance to have its own zoom level and UI state.

### Saving

When a user saves a custom editor, your extension is responsible for writing the saved resource in its current state to disk. How your custom editor does this depends largely on your extension's `CustomDocument` type and how your extension tracks edits internally.

The first step to saving is getting the data stream to write to disk. Common approaches to this include:

- Track the resource's state so that it can be quickly serialized.

    A basic image editor for example may maintain a buffer of pixel data.

- Replay edit since the last save to generate the new file.

    A more efficient image editor for example might track the edits since the last save, such as `crop`, `rotate`, `scale`. On save, it would then apply these edits to file's last saved state to generate the new file.

- Ask a `WebviewPanel` for the custom editor for file data to save.

    Keep in mind though that custom editors can be saved even when they are not visible. For this reason, it is recommended that that your extension's implementation of `save` does not depend on a `WebviewPanel`. If this is not possible, you can use the `WebviewPanelOptions.retainContextWhenHidden` setting so that the webview stays alive even when it is hidden. `retainContextWhenHidden` does have significant memory overhead so be conservative about using it.

After getting the data for the resource, you generally should use the [workspace FS api][LK193] to write it to disk. The FS APIs take a `UInt8Array` of data and can write out both binary and text based files. For binary file data, simply put the binary data into the `UInt8Array`. For text file data, use `Buffer` to convert a string into a `UInt8Array`:

```ts
const writeData = Buffer.from("my text data", 'utf8');
vscode.workspace.fs.writeFile(fileUri, writeData);
```

## Next steps

If you'd like to learn more about VS Code extensibility, try these topics:

- [Extension API][LN195] - Learn about the full VS Code Extension API.
- [Extension Capabilities][LN195] - Take a look at other ways to extend VS Code.

[sample]: https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample


<a id="_api_extension-guides_virtual-documents" ></a>

# /api/extension-guides/virtual-documents
------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 54fdcc33-7ad1-40cc-bc87-ded1841d01ad
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to using Virtual Documents in Visual Studio Code extensions (plug-ins)
    ---

## Virtual Documents

The text document content provider API allows you to create readonly documents in Visual Studio Code from arbitrary sources. You can find a sample extension with source code at: [https://github.com/microsoft/vscode-extension-samples/blob/main/virtual-document-sample/README.md][LK194].

## TextDocumentContentProvider

The API works by claiming an uri-scheme for which your provider then returns text contents. The scheme must be provided when registering a provider and cannot change afterwards. The same provider can be used for multiple schemes and multiple providers can be registered for a single scheme.

```ts
vscode.workspace.registerTextDocumentContentProvider(myScheme, myProvider);
```

Calling `registerTextDocumentContentProvider` returns a disposable with which the registration can be undone. A provider must only implement the `provideTextDocumentContent`-function which is called with an uri and cancellation token.

```ts
const myProvider = new class implements vscode.TextDocumentContentProvider {
  provideTextDocumentContent(uri: vscode.Uri): string {
    // invoke cowsay, use uri-path as text
    return cowsay.say({ text: uri.path });
  }
};
```

Note how the provider doesn't create uris for virtual documents - its role is to **provide** contents given such an uri. In return, content providers are wired into the open document logic so that providers are always considered.

This sample uses a 'cowsay'-command that crafts an uri which the editor should then show:

```ts
vscode.commands.registerCommand('cowsay.say', async () => {
  let what = await vscode.window.showInputBox({ placeHolder: 'cow say?' });
  if (what) {
    let uri = vscode.Uri.parse('cowsay:' + what);
    let doc = await vscode.workspace.openTextDocument(uri); // calls back into the provider
    await vscode.window.showTextDocument(doc, { preview: false });
  }
});
```

The command prompts for input, creates an uri of the `cowsay`-scheme, opens a document for the uri, and finally opens an editor for that document. In step 3, opening the document, the provider is being asked to provide contents for that uri.

With this we have a fully functional text document content provider. The next sections describe how virtual documents can be updated and how UI commands can be registered for virtual documents.

### Update Virtual Documents

Depending on the scenario virtual documents might change. To support that, providers can implement a `onDidChange`-event.

The `vscode.Event`-type defines the contract for eventing in VS Code. The easiest way to implement an event is `vscode.EventEmitter`, like so:

```ts
const myProvider = new class implements vscode.TextDocumentContentProvider {
  // emitter and its event
  onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
  onDidChange = this.onDidChangeEmitter.event;

  //...
};
```

The event emitter has a `fire` method which can be used to notify VS Code when a change has happened in a document. The document which has changed is identified by its uri given as argument to the `fire` method. The provider will then be called again to provide the updated content, assuming the document is still open.

That's all what's needed to make VS Code listen for changes of virtual document. To see a more complex example making use of this feature, look at: [https://github.com/microsoft/vscode-extension-samples/blob/main/contentprovider-sample/README.md][LK195].

### Add Editor Commands

Editor actions can be added which only interact with documents provided by an associated content provider. This is a sample command that reverses what the cow just said:

```ts
// register a command that updates the current cowsay
subscriptions.push(
  vscode.commands.registerCommand('cowsay.backwards', async () => {
    if (!vscode.window.activeTextEditor) {
      return; // no editor
    }
    let { document } = vscode.window.activeTextEditor;
    if (document.uri.scheme !== myScheme) {
      return; // not my scheme
    }
    // get path-components, reverse it, and create a new uri
    let say = document.uri.path;
    let newSay = say
      .split('')
      .reverse()
      .join('');
    let newUri = document.uri.with({ path: newSay });
    await vscode.window.showTextDocument(newUri, { preview: false });
  })
);
```

The snippet above checks that we have an active editor and that its document is one of our scheme. These checks are needed because commands are available (and executable) to everyone. Then the path-component of the uri is reversed and a new uri is created from it, last an editor is opened.

To top things with an editor command a declarative part in `package.json` is needed. In the `contributes`-section add this config:

```json
"menus": {
  "editor/title": [
    {
      "command": "cowsay.backwards",
      "group": "navigation",
      "when": "resourceScheme == cowsay"
    }
  ]
}
```

This references the `cowsay.backwards`-command that defined in the `contributes/commands`-section and says it should appear in the editor title menu (the toolbar in the upper right corner). Now, just that would mean the command always shows, for every editor. That's what the `when`-clause is used for - it describes what condition must be true to show the action. In this sample it states that the scheme of the document in the editor must be the `cowsay`-scheme. The configuration is then repeated for the `commandPalette`-menu - it shows all commands by default.

![cowsay-bwd][LN196]

### Events and Visibility

Document providers are first class citizens in VS Code, their contents appears in regular text documents, they use the same infrastructure as files etc. However, that also means that "your" documents cannot hide, they will appear in `onDidOpenTextDocument` and `onDidCloseTextDocument`-events, they are part of `vscode.workspace.textDocuments` and more. The rule for everyone is check the `scheme` of documents and then decide if you want to do something with/for the document.

# File System API

If you need more flexibility and power take a look at the [`FileSystemProvider`][LN197] API. It allows to implement a full file system, having files, folders, binary data, file-deletion, creation and more.

You can find a sample extension with source code at: [https://github.com/microsoft/vscode-extension-samples/tree/main/fsprovider-sample/README.md][LK196].


When VS Code is opened on a folder or workspace of a such a file system we call it a virtual workspace. When a virtual workspace is open in a VS Code window, this is shown by a label in the remote indicator in the lower left corner, similar to remote windows. See the [Virtual Workspace Guide][LN197] how extensions can support that setup.




<a id="_api_extension-guides_virtual-workspaces" ></a>

# /api/extension-guides/virtual-workspaces
-------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: c64264b1-09cd-4680-b0dc-9f0f7803e451
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to support virtual workspaces in extensions
    ---

## Virtual Workspaces

Extensions like the [GitHub Repositories][LK197] extension open VS Code on one or more folders backed by a [file system provider][LN198]. When an extension implements a file system provider, workspace resources may not be located on the local disk, but be **virtual**, located on a server or the cloud, and editing operations happen there.

This configuration is called a **virtual workspace**. When a virtual workspace is open in a VS Code window, this is indicated by a label in the remote indicator in the lower left corner, similar to other [remote development][LN199] windows.

![Remote indicator][LN200]

Not all extensions are able to work with virtual resources and may require resources to be on disk. Some extensions use tools that rely on disk access, need synchronous file access, or don't have the necessary file system abstractions. In these cases, when in a virtual workspace, VS Code indicates to the user that they are running in a restricted mode and that some extensions are deactivated or work with limited functionality.

In general, users want as many extensions as possible to work in virtual workspaces and to have a good user experience when browsing and editing remote resources. This guide shows how extensions can test against virtual workspaces, describes modifications to allow them to work in virtual workspaces, and introduces the `virtualWorkspaces` capability property.

Modifying an extension to work with virtual workspaces is also an important step for working well in [VS Code for the Web][LN201]. VS Code for the Web runs entirely inside a browser and workspaces are virtual due to the browser sandbox. See the [Web Extensions][LN201] guide for more details.

## Is my extension affected?

When an extension has no executable code but is purely declarative like themes, keybindings, snippets, or grammar extensions, it can run in a virtual workspace and no modification is necessary.

Extensions with code, meaning extensions that define a `main` entry point, require inspection and, possibly, modification.

## Run your extension against a virtual workspace

Install the [GitHub Repositories][LK197] extension and run the **Open GitHub Repository...** command from the Command Palette. The command shows a Quick Pick dropdown and you can paste in any GitHub URL, or choose to search for a specific repository or pull request.

This opens a VS Code window for a virtual workspace where all resources are virtual.

## Review that the extension code is ready for virtual resources

The VS Code API support for virtual file systems has been around for quite a while. You can check out the [file system provider API][LN201].

A file system provider is registered for a new URI scheme (for example, `vscode-vfs`) and resources on that file system will be represented by URIs using that schema (`vscode-vfs://github/microsoft/vscode/package.json`)

Check how your extension deals with URIs returned from the VS Code APIs:

* Never assume that the URI scheme is `file`. `URI.fsPath` can only be used when the URI scheme is `file`.
* Look out for usages of the `fs` node module for file system operations. If possible, use the `vscode.workspace.fs` API, which delegates to the appropriate file system provider.
* Check for third-party components that depend on a `fs` access (for example, a language server or a node module).
* If you run executables and tasks from commands, check whether these commands make sense in a virtual workspace window or whether they should be disabled.

## Signal whether your extension can handle virtual workspaces

The `virtualWorkspaces` property under `capabilities` in `package.json` is used to signal whether an extension works with virtual workspaces.

### No support for virtual workspaces

The example below declares that an extension does not support virtual workspaces and should not be enabled by VS Code in this setup.

```json
{
  "capabilities": {
    "virtualWorkspaces": {
      "supported": false,
      "description": "Debugging is not possible in virtual workspaces."
    }
  }
}
```

### Partial and full support for virtual workspaces

When an extension works or partially works with virtual workspaces, it should define `"virtualWorkspaces": true`.

```json
{
  "capabilities": {
    "virtualWorkspaces": true
  }
}
```

If an extension works, but has limited functionality, it should explain the limitation to the user:

```json
{
  "capabilities": {
    "virtualWorkspaces": {
      "supported": "limited",
      "description": "In virtual workspaces, resolving and finding references across files is not supported."
    }
  }
}
```

The description is shown in the Extensions view:

![Extensions view][LN202]

The extension should then disable the features that are not supported in a virtual workspace as described below.

### Default

`"virtualWorkspaces": true` is the default for all extensions that have not yet filled in the `virtualWorkspaces` capability.

However, while testing virtual workspaces, we came up list of extensions that we think should be disabled in virtual workspaces.
The list can be found in [issue #122836][LK198]. These extensions have `"virtualWorkspaces": false` as default.

Of course, extension authors are in a better position to make this decision. The `virtualWorkspaces` capability in an extension's `package.json` will override our default and we will eventually retire our list.

## Disable functionality when a virtual workspace is opened

### Disable commands and view contributions

The availability of commands and views and many other contributions can be controlled through context keys in [when clauses][LN202].

The `virtualWorkspace` context key is set when all workspace folders are located on virtual file systems. The example below only shows the command `npm.publish` in the Command Palette when not in a virtual workspace:

```json
{
    "menus": {
      "commandPalette": [
        {
          "command": "npm.publish",
          "when": "!virtualWorkspace"
        }
      ]
    }
}
```

The `resourceScheme` context key is set to the URI scheme of the currently selected element in the File Explorer or the element open in the editor.

In the example below, the `npm.runSelectedScript` command is only displayed in the editor context menu if the underlying resource is on the local disk.

```json
{
    "menus": {
      "editor/context": [
        {
          "command": "npm.runSelectedScript",
          "when": "resourceFilename == 'package.json' && resourceScheme == file"
        }
      ]
    }
}
```

### Detect virtual workspaces programmatically

To check whether the current workspace consists of non-`file` schemes and is virtual, you can use the following source code:

```ts
const isVirtualWorkspace = workspace.workspaceFolders && workspace.workspaceFolders.every(f => f.uri.scheme !== 'file');
```

## Language extensions and virtual workspaces

### What are the expectations for language support with virtual workspaces?

It's not realistic that all extensions be able to fully work with virtual resources. Many extensions use external tools that require synchronous file access and files on disk. It's therefore fine to only provide limited functionality, such as the **Basic** and the **Single-file** support as listed below.

A. **Basic** language support:

* TextMate tokenization and colorization
* Language-specific editing support: bracket pairs, comments, on enter rules, folding markers
* Code snippets

B. **Single-file** language support:

* Document symbols (outline), folding, selection ranges
* Document highlights, semantic highlighting, document colors
* Completions, hovers, signature help, find references/declarations based on symbols on the current file and on static language libraries
* Formatting, linked editing
* Syntax validation and same-file semantic validation and Code Actions

C. **Cross-file, workspace-aware** language support:

* References across files
* Workspace symbols
* Validation of all files in the workspace/project

The rich language extensions that ship with VS Code (TypeScript, JSON, CSS, HTML, Markdown) are limited to single-file language support when working on virtual resources.

### Disabling a language extension

If working on a single file is not option, language extensions can also decide to disable the extension when in a virtual workspace.

If your extension provides both grammars and rich language support that needs to be disabled, the grammars will also be disabled. To avoid this, you can create a basic language extension (grammars, language configuration, snippets) separate from the rich language support and have two extensions.

* The basic language extension has `"virtualWorkspaces": true` and provides the language ID, configuration, grammar, and snippets.
* The rich language extension has `"virtualWorkspaces": false` and contains the `main` file. It contributes language support, commands, and has an extension dependency (`extensionDependencies`) on the basic language extension. The rich language extension should keep the extension ID of the established extension, so the user can continue to have the full functionality by installing a single extension.

You can see this approach with the built-in language extensions, such as JSON, which consists of a JSON extension and a JSON language feature extension.

This separation also helps with [Untrusted Workspaces][LN202] running in [Restricted Mode][LN203]. Rich language extensions often require trust while basic language features can run in any setup.

### Language selectors

When registering a provider for a language feature (for example, completions, hovers, Code Actions, etc.) make sure to specify the schemes the provider supports:

```ts
return vscode.languages.registerCompletionItemProvider({ language: 'typescript', scheme: 'file' }, {
  provideCompletionItems(document, position, token) {
    // ...
  }
});
```

### What about support in the Language Server Protocol (LSP) for accessing virtual resources?

Work is under way that will add file system provider support to LSP. Tracked in Language Server Protocol [issue #1264][LK199].


<a id="_api_extension-guides_web-extensions" ></a>

# /api/extension-guides/web-extensions
---------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 282670bb-cc72-4b01-9b51-08bf8f5a13a1
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to run extensions in Visual Studio Code for the web and the web extension host.
    ---

## Web Extensions

Visual Studio Code can run as an editor in the browser. One example is the `github.dev` user interface reached by pressing `.` (the period key) when browsing a repository or Pull Request in GitHub. When VS Code is used in the Web, installed extensions are run in an extension host in the browser, called the 'web extension host'. An extension that can run in a web extension host is called a 'web extension'.

Web extensions share the same structure as regular extensions, but given the different runtime, don't run with the same code as extensions written for a Node.js runtime. Web extensions still have access to the full VS Code API, but no longer to the Node.js APIs and module loading. Instead, web extensions are restricted by the browser sandbox and therefore have [limitations][LN204] compared to normal extensions.

The web extension runtime is supported on VS Code desktop too. If you decide to create your extension as a web extension, it will be supported on [VS Code for the Web][LN204] (including `vscode.dev` and `github.dev`) as well as on the desktop and in services like [GitHub Codespaces][LN205].

## Web extension anatomy

A web extension is [structured like a regular extension][LN205]. The extension manifest (`package.json`) defines the entry file for the extension's source code and declares extension contributions.

For web extensions, the [main entry file][LN205] is defined by the `browser` property, and not by the `main` property as with regular extensions.

The `contributes` property works the same way for both web and regular extensions.

The example below shows the `package.json` for a simple hello world extension, that runs in the web extension host only (it only has a `browser` entry point):

```json
{
  "name": "helloworld-web-sample",
  "displayName": "helloworld-web-sample",
  "description": "HelloWorld example for VS Code in the browser",
  "version": "0.0.1",
  "publisher": "vscode-samples",
  "repository": "https://github.com/microsoft/vscode-extension-samples/helloworld-web-sample",
  "engines": {
    "vscode": "^1.74.0"
  },
  "categories": ["Other"],
  "activationEvents": [],
  "browser": "./dist/web/extension.js",
  "contributes": {
    "commands": [
      {
        "command": "helloworld-web-sample.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  "scripts": {
    "vscode:prepublish": "npm run package-web",
    "compile-web": "webpack",
    "watch-web": "webpack --watch",
    "package-web": "webpack --mode production --devtool hidden-source-map",
  },
  "devDependencies": {
    "@types/vscode": "^1.59.0",
    "ts-loader": "^9.2.2",
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "@types/webpack-env": "^1.16.0",
    "process": "^0.11.10"
  }
}
```

> **Note**: If your extension targets a VS Code version prior to 1.74, you must explicitly list `onCommand:helloworld-web-sample.helloWorld` in `activationEvents`.

Extensions that have only a `main` entry point, but no `browser` are not web extensions. They are ignored by the web extension host and not available for download in the Extensions view.

![Extensions view][LN206]

Extensions with only declarative contributions (only `contributes`, no `main` or `browser`) can be web extensions. They can be installed and run in [VS Code for the Web][LN206] without any modifications by the extension author. Examples of extensions with declarative contributions include themes, grammars, and snippets.

Extensions can have both `browser` and `main` entry points in order to run in browser and in Node.js runtimes. The [Update existing extensions to Web extensions][LN207] section shows how to migrate an extension to work in both runtimes.

The [web extension enablement][LN208] section lists the rules used to decide whether an extension can be loaded in a web extension host.

### Web extension main file

The web extension's main file is defined by the `browser` property. The script runs in the web extension host in a [Browser WebWorker][LK200] environment. It is restricted by the browser worker sandbox and has limitations compared to normal extensions running in a Node.js runtime.

* Importing or requiring other modules is not supported. `importScripts` is not available as well. As a consequence, the code must be packaged to a single file.
* The [VS Code API][LN208] can be loaded via the pattern `require('vscode')`. This will work because there is a shim for `require`, but this shim cannot be used to load additional extension files or additional node modules. It only works with `require('vscode')`.
* Node.js globals and libraries such as `process`, `os`, `setImmediate`, `path`, `util`, `url` are not available at runtime. They can, however, be added with tools like webpack. The [webpack configuration][LN209] section explains how this is done.
* The opened workspace or folder is on a virtual file system. Access to workspace files needs to go through the VS Code [file system][LN210] API accessible at `vscode.workspace.fs`.
* [Extension context][LN211] locations (`ExtensionContext.extensionUri`) and  storage locations (`ExtensionContext.storageUri`, `globalStorageUri`) are also on a virtual file system and need to go through `vscode.workspace.fs`.
* For accessing web resources, the [Fetch][LK201] API must be used. Accessed resources need to support [Cross-Origin Resource Sharing][LK202] (CORS)
* Creating child processes or running executables is not possible. However, web workers can be created through the [Worker][LK203] API. This is used for running language servers as described in the [Language Server Protocol in web extensions][LN212] section.
* As with regular extensions, the extension's `activate/deactivate` functions need to be exported via the pattern `exports.activate = ...`.

## Develop a web extension

Thankfully, tools like TypeScript and webpack can hide many of the browser runtime constraints and allow you to write web extensions the same way as regular extensions. Both a web extension and a regular extension can often be generated from the same source code.

For example, the `Hello Web Extension` created by the `yo code` [generator][LK203] only differs in the build scripts. You can run and debug the generated extension just like traditional Node.js extensions by using the provided launch configurations accessible using the **Debug: Select and Start Debugging** command.

## Create a web extension

To scaffold a new web extension, use `yo code` and pick **New Web Extension**. Make sure to have the latest version of [generator-code][LK203] (>= generator-code@1.6) installed. To update the generator and yo, run `npm i -g yo generator-code`.

The extension that is created consists of the extension's source code (a command showing a hello world notification), the `package.json` manifest file, and a webpack configuration file.

* `src/web/extension.ts` is the extension's entry source code file. It's identical to the regular hello extension.
* `package.json` is the extension manifest.
  * It points to the entry file using the `browser` property.
  * It provides scripts: `compile-web`, `watch-web` and `package-web` to compile, watch, and package.
* `webpack.config.js` is the webpack config file that compiles and bundles the extension sources into a single file.
* `.vscode/launch.json` contains the launch configurations that run the web extension and the tests in the VS Code desktop with a web extension host (setting `extensions.webWorker` is no longer needed).
* `.vscode/task.json` contains the build task used by the launch configuration. It uses `npm run watch-web` and depends on the webpack specific `ts-webpack-watch` problem matcher.
* `.vscode/extensions.json` contains the extensions that provide the problem matchers. These extensions need to be installed for the launch configurations to work.
* `tsconfig.json` defines the compile options matching the `webworker` runtime.

The source code in the [helloworld-web-sample][LK204] is similar to what's created by the generator.

### Webpack configuration

The webpack configuration file is automatically generated by `yo code`. It bundles the source code from your extension into a single JavaScript file to be loaded in the web extension host.

[webpack.config.js][LK205]

```js
const path = require('path');
const webpack = require('webpack');

/** @typedef {import('webpack').Configuration} WebpackConfig **/
/** @type WebpackConfig */
const webExtensionConfig = {
  mode: 'none', // this leaves the source code as close as possible to the original (when packaging we set this to 'production')
  target: 'webworker', // extensions run in a webworker context
  entry: {
    'extension': './src/web/extension.ts', // source of the web extension main file
    'test/suite/index': './src/web/test/suite/index.ts' // source of the web extension test runner
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist/web'),
    libraryTarget: 'commonjs',
    devtoolModuleFilenameTemplate: '../../[resource-path]'
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
    extensions: ['.ts', '.js'], // support ts-files and js-files
    alias: {
      // provides alternate implementation for node module and source files
    },
    fallback: {
      // Webpack 5 no longer polyfills Node.js core modules automatically.
      // see https://webpack.js.org/configuration/resolve/#resolvefallback
      // for the list of Node.js core module polyfills.
      'assert': require.resolve('assert')
    }
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [{
          loader: 'ts-loader'
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser', // provide a shim for the global `process` variable
    }),
  ],
  externals: {
    'vscode': 'commonjs vscode', // ignored because it doesn't exist
  },
  performance: {
    hints: false
  },
  devtool: 'nosources-source-map' // create a source map that points to the original source file
};
module.exports = [webExtensionConfig];
```

Some important fields of `webpack.config.js` are:

* The `entry` field contains the main entry point into your extension and test suite.
  * You may need to adjust this path to appropriately point to the entry point of your extension.
  * For an existing extension, you can start by pointing this path to the file you're using currently for `main` of your `package.json`.
  * If you do not want to package your tests, you can omit the test suite field.
* The `output` field indicates where the compiled file will be located.
  * `[name]` will be replaced by the key used in `entry`. So in the generated config file, it will produce `dist/web/extension.js` and `dist/web/test/suite/index.js`.
* The `target` field indicates which type of environment the compiled JavaScript file will run. For web extensions, you want this to be `webworker`.
* The `resolve` field contains the ability to add aliases and fallbacks for node libraries that don't work in the browser.
  * If you're using a library like `path`, you can specify how to resolve `path` in a web compiled context. For instance, you can point to a file in the project that defines `path` with `path: path.resolve(__dirname, 'src/my-path-implementation-for-web.js')`. Or you can use the Browserify node packaged version of the library called `path-browserify` and specify `path: require.resolve('path-browserify')`.
  * See [webpack resolve.fallback][LK206] for the list of Node.js core module polyfills.
* The `plugins` section uses the [DefinePlugin plugin][LK207] to polyfill globals such as the `process` Node.js global.

## Test your web extension

There are currently three ways to test a web extension before publishing it to the Marketplace.

* Use VS Code running on the desktop with the `--extensionDevelopmentKind=web` option to run your web extension in a web extension host running in VS Code.
* Use the [@vscode/test-web][LK208] node module to open a browser containing VS Code for the Web including your extension, served from a local server.
* [Sideload][LN213] your extension onto [vscode.dev][LK209] to see your extension in the actual environment.

### Test your web extension in VS Code running on desktop

To use the existing VS Code extension development experience, VS Code running on the desktop supports running a web extension host along with the regular Node.js extension host.

Use the `pwa-extensionhost` launch configuration provided by the **New Web Extension** generator:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run Web Extension in VS Code",
      "type": "pwa-extensionHost",
      "debugWebWorkerHost": true,
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionDevelopmentKind=web"
      ],
      "outFiles": [
        "${workspaceFolder}/dist/web/**/*.js"
      ],
      "preLaunchTask": "npm: watch-web"
    }
  ]
}
```

It uses the task `npm: watch-web` to compile the extension by calling `npm run watch-web`. That task is expected in `tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "type": "npm",
      "script": "watch-web",
      "group": "build",
      "isBackground": true,
      "problemMatcher": [
        "$ts-webpack-watch"
      ]
    }
  ]
}
```

`$ts-webpack-watch` is a problem matcher that can parse the output from the webpack tool. It is provided by the [TypeScript + Webpack Problem Matchers][LK210] extension.

In the **Extension Development Host** instance that launches, the web extension will be available and running in a web extension host. Run the `Hello World` command to activate the extension.

Open the **Running Extensions** view (command: **Developer: Show Running Extensions**) to see which extensions are running in the web extension host.

### Test your web extension in a browser using @vscode/test-web

The [@vscode/test-web][LK210] node module offers a CLI and API to test a web extension in a browser.

The node module contributes an npm binary `vscode-test-web` that can open VS Code for the Web from the command line:

* It downloads the web bits of VS Code into `.vscode-test-web`.
* Starts a local server on `localhost:3000`.
* Opens a browser (Chromium, Firefox, or Webkit).

You can run it from command line:

```bash
npx @vscode/test-web --extensionDevelopmentPath=$extensionFolderPath $testDataPath
```

Or better, add `@vscode/test-web` as a development dependency to your extension and invoke it in a script:

```json
  "devDependencies": {
    "@vscode/test-web": "*"
  },
  "scripts": {
    "open-in-browser": "vscode-test-web --extensionDevelopmentPath=. ."
  }
```

Check the [@vscode/test-web README][LK211] for more CLI options:

|Option|Argument Description|
|-----|-----|
| --browserType | The browser to launch: `chromium` (default), `firefox` or `webkit` |
| --extensionDevelopmentPath | A path pointing to an extension under development to include. |
| --extensionTestsPath |  A path to a test module to run. |
| --permission|  Permission granted to the opened browser: e.g. `clipboard-read`, `clipboard-write`.<br>See [full list of options][LK212]. Argument can be provided multiple times.  |
| --folder-uri | URI of the workspace to open VS Code on. Ignored when `folderPath` is provided |
| --extensionPath | A path pointing to a folder containing additional extensions to include.<br>Argument can be provided multiple times. |
| folderPath |  A local folder to open VS Code on.<br>The folder content will be available as a virtual file system and opened as workspace. |

The web bits of VS Code are downloaded to a folder `.vscode-test-web`. You want to add this to your `.gitignore` file.

### Test your web extension in vscode.dev

Before you publish your extension for everyone to use on VS Code for the Web, you can verify how your extension behaves in the actual [vscode.dev][LK212] environment.

To see your extension on vscode.dev, you first need to host it from your machine for vscode.dev to download and run.

First, you'll need to [install `mkcert`][LK213].

Then, generate the `localhost.pem` and `localhost-key.pem` files into a location you won't lose them (for example `$HOME/certs`):

```
$ mkdir -p $HOME/certs
$ cd $HOME/certs
$ mkcert -install
$ mkcert localhost
```

Then, from your extension's path, start an HTTP server by running `npx serve`:

```
$ npx serve --cors -l 5000 --ssl-cert $HOME/certs/localhost.pem --ssl-key $HOME/certs/localhost-key.pem
npx: installed 78 in 2.196s

   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving!                                         │
   │                                                    │
   │   - Local:            https://localhost:5000       │
   │   - On Your Network:  https://172.19.255.26:5000   │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

Finally, open [vscode.dev][LK213], run **Developer: Install Extension From Location...** from the Command Palette (`kb(workbench.action.showCommands)`), paste the URL from above, `https://localhost:5000` in the example, and select **Install**.

**Check the logs**

You can check the logs in the console of the Developer Tools of your browser to see any errors, status, and logs from your extension.

You may see other logs from vscode.dev itself. In addition, you can't easily set breakpoints nor see the source code of your extension. These limitations make debugging in vscode.dev not the most pleasant experience so we recommend using the first two options for testing before sideloading onto vscode.dev. Sideloading is a good final sanity check before publishing your extension.

## Web extension tests

Web extension tests are supported and can be implemented similar to regular extension tests. See the [Testing Extensions][LN213] article to learn the basic structure of extension tests.

The [@vscode/test-web][LK213] node module is the equivalent to [@vscode/test-electron][LK214] (previously named `vscode-test`). It allows you to run extension tests from the command line on Chromium, Firefox, and Safari.

The utility does the following steps:

1. Starts a VS Code for the Web editor from a local web server.
2. Opens the specified browser.
3. Runs the provided test runner script.

You can run the tests in continuous builds to ensure that the extension works on all browsers.

The test runner script is running on the web extension host with the same restrictions as the [web extension main file][LN213]:

* All files are bundled into a single file. It should contain the test runner (for example, Mocha) and all tests (typically `*.test.ts`).
* Only `require('vscode')` is supported.

The [webpack config][LK214] that is created by the `yo code` web extension generator has a section for tests. It expects the test runner script at `./src/web/test/suite/index.ts`. The provided [test runner script][LK215] uses the web version of Mocha and contains webpack-specific syntax to import all test files.

```ts
require('mocha/mocha'); // import the mocha web build

export function run(): Promise<void> {

  return new Promise((c, e) => {
    mocha.setup({
      ui: 'tdd',
      reporter: undefined
    });

    // bundles all files in the current directory matching `*.test`
    const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
    importAll(require.context('.', true, /\.test$/));

    try {
      // Run the mocha test
      mocha.run(failures => {
        if (failures > 0) {
          e(new Error(`${failures} tests failed.`));
        } else {
          c();
        }
      });
    } catch (err) {
      console.error(err);
      e(err);
    }
  });
}
```

To run the web test from the command line, add the following to your `package.json` and run it with `npm test`.

```json
  "devDependencies": {
    "@vscode/test-web": "*"
  },
  "scripts": {
    "test": "vscode-test-web --extensionDevelopmentPath=. --extensionTestsPath=dist/web/test/suite/index.js"
  }
```

To open VS Code on a folder with test data, pass a local folder path (`folderPath`) as the last parameter.

To run (and debug) extension tests in VS Code (Insiders) desktop, use the `Extension Tests in VS Code` launch configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests in VS Code",
      "type": "extensionHost",
      "debugWebWorkerHost": true,
      "request": "launch",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionDevelopmentKind=web",
        "--extensionTestsPath=${workspaceFolder}/dist/web/test/suite/index"
      ],
      "outFiles": [
        "${workspaceFolder}/dist/web/**/*.js"
      ],
      "preLaunchTask": "npm: watch-web"
    }
  ]
}
```

## Publish a web extension

Web extensions are hosted on the [Marketplace][LK215] along with other extensions.

Make sure to use the latest version of `vsce` to publish your extension. `vsce` tags all extensions that are web extension. For that `vsce` is using the rules listed in the [web extension enablement][LN213] section.

## Update existing extensions to Web extensions

### Extension without code

Extensions that have no code, but only contribution points (for example, themes, snippets, and basic language extensions) don't need any modification. They can run in a web extension host and can be installed from the Extensions view.

Republishing is not necessary, but when publishing a new version of the extension, make sure to use the most current version of `vsce`.

### Migrate extension with code

Extensions with source code (defined by the `main` property) need to provide a [web extension main file][LN213] and set the `browser` property in `package.json`.

Use these steps to recompile your extension code for the browser environment:

* Add a webpack config file as shown in the [webpack configuration][LN213] section. If you already have a webpack file for your Node.js extension code, you can add a new section for web. Check out the [vscode-css-formatter][LK216] as an example.
* Add the `launch.json` and `tasks.json` files as shown in the [Test your web extension][LN214] section.
* In the webpack config file, set the input file to the existing Node.js main file or create a new main file for the web extension.
* In `package.json`, add a `browser` and the `scripts` properties as shown in the [Web extension anatomy][LN215] section.
* Run `npm run compile-web` to invoke webpack and see where work is needed to make your extension run in the web.

To make sure as much source code as possible can be reused, here are a few techniques:

* To polyfill a Node.js core module such as `path`, add an entry to [resolve.fallback][LK216].
* To provide a Node.js global such as `process` use the [DefinePlugin plugin][LK216].
* Use node modules that work in both browser and node runtime. Node modules can do that by defining both `browser` and `main` entry points. Webpack will automatically use the one matching its target. Examples of node modules that do this are [request-light][LK217] and [vscode-nls][LK218].
* To provide an alternate implementation for a node module or source file, use [resolve.alias][LK219].
* Separate your code in a browser part, Node.js part, and common part. In common, only use code that works in both the browser and Node.js runtime. Create abstractions for functionality that has different implementations in Node.js and the browser.
* Look out for usages of `path`, `URI.file`, `context.extensionPath`, `rootPath`. `uri.fsPath`. These will not work with virtual workspaces (non-file system) as they are used in VS Code for the Web. Instead use URIs with `URI.parse`, `context.extensionUri`. The [vscode-uri][LK220] node module provides `joinPath`, `dirName`, `baseName`, `extName`, `resolvePath`.
* Look out for usages of `fs`. Replace by using vscode `workspace.fs`.

It is fine to provide less functionality when your extension is running in the web. Use [when clause contexts][LN215] to control which commands, views, and tasks are available or hidden with running in a virtual workspace on the web.

* Use the `virtualWorkspace` context variable to find out if the current workspace is a non-file system workspace.
* Use `resourceScheme` to check if the current resource is a `file` resource.
* Use `shellExecutionSupported` if there is a platform shell present.
* Implement alternative command handlers that show a dialog to explain why the command is not applicable.

WebWorkers can be used as an alternative to forking processes. We have updated several language servers to run as web extensions, including the built-in [JSON][LK221], [CSS][LK222], and [HTML][LK223] language servers. The [Language Server Protocol][LN215] section below gives more details.

The browser runtime environment only supports the execution of JavaScript and [WebAssembly][LK224]. Libraries written in other programming languages need to be cross-compiled, for instance there is tooling to compile [C/C++][LK225] and [Rust][LK226] to WebAssembly. The [vscode-anycode][LK227] extension, for example, uses [tree-sitter][LK228], which is C/C++ code compiled to WebAssembly.

### Language Server Protocol in web extensions

[vscode-languageserver-node][LK229] is an implementation of the [Language Server Protocol][LK230] (LSP) that is used as a foundation to language server implementations such as [JSON][LK230], [CSS][LK230], and [HTML][LK230].

Since 3.16.0, the client and server now also provide a browser implementation. The server can run in a web worker and the connection is based on the webworkers `postMessage` protocol.

The client for the browser can be found at 'vscode-languageclient/browser':

```typescript
import { LanguageClient } from `vscode-languageclient/browser`
```

The server at `vscode-languageserver/browser`.

The [lsp-web-extension-sample][LK231] shows how this works.

## Web extension enablement

VS Code automatically treats an extension as a web extension if:

* The extension manifest (`package.json`) has `browser` entry point.
* The extension manifest has no `main` entry point and none of the following contribution points: `localizations`, `debuggers`, `terminal`, `typescriptServerPlugins`.

If an extension wants to provide a debugger or terminal that also work in the web extension host, a `browser` entry point needs to be defined.

## Samples

* [helloworld-web-sample][LK231]
* [lsp-web-extension-sample][LK231]


<a id="_api_extension-guides_workspace-trust" ></a>

# /api/extension-guides/workspace-trust
----------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 31f461b7-c216-414a-b701-78c205fde8a8
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide for updating Visual Studio Code extensions to support Workspace Trust
    ---

## Workspace Trust Extension Guide

## What is Workspace Trust?

[Workspace Trust][LN216] is a feature driven by the security risks associated with unintended code execution when a user opens a workspace in VS Code. For example, consider that a language extension, in order to provide functionality, may execute code from the currently loaded workspace. In this scenario, the user should trust that the contents of the workspace are not malicious. Workspace Trust centralizes this decision within VS Code and supports a [Restricted Mode][LN217] to protect against automatic code execution so that extension authors do not have to handle this infrastructure themselves. VS Code offers static declaration and API support to onboard extensions quickly without the need to duplicate code across extensions.

## Onboarding

### Static declarations

In your extension's `package.json`, VS Code supports the following new `capabilities` property `untrustedWorkspaces`:

```typescript
capabilities:
  untrustedWorkspaces:
    { supported: true } |
    { supported: false, description: string } |
    { supported: 'limited', description: string, restrictedConfigurations?: string[] }
```

For the `supported` property, the following values are accepted:

* `true` - The extension is fully supported in Restricted Mode as it does not need Workspace Trust to perform any functionality. It will be enabled exactly as before.
* `false` - The extension is not supported in Restricted Mode as it cannot function without Workspace Trust. It will remain disabled until Workspace Trust is granted.
* `'limited'` - Some features of the extension are supported in Restricted Mode. Trust-sensitive features should be disabled until Workspace Trust is granted. The extension can use the VS Code API to hide or disable these features. Workspace settings can be gated by trust automatically using the `restrictedConfigurations` property.

For the `description` property, a description of why trust is needed must be provided to help the user understand what features will be disabled or what they should review before granting or denying Workspace Trust. If `supported` is set to `true`, this property is ignored.

The value for the `description` property should be added to `package.nls.json` and then referenced in the `package.json` file for localization support.

The `restrictedConfigurations` property takes an array of configuration setting IDs. For the settings listed, the extension will not be given workspace-defined values when in Restricted Mode for an untrusted workspace.

## How to support Restricted Mode?

To help extension authors understand what is in scope for Workspace Trust and what types of features are safe in Restricted Mode, here are a list of questions to consider.

### Does my extension have a main entry point?

If an extension does not have a `main` entry point (for example themes and language grammars), the extension does not require Workspace Trust. Extension authors do not need to take any action for such extensions as they will continue to function independent whether the workspace is trusted or not.

### Does my extension rely on files in the opened workspace to provide features?

This can mean things like settings that can be set by the workspace or actual code in the workspace. If the extension never uses any of the contents of the workspace, it probably doesn't require trust. Otherwise, take a look at the other questions.

### Does my extension treat any contents of the workspace as code?

The most common example of this is using a project's workspace dependencies, such as the Node.js modules stored in the local workspace. A malicious workspace might check in a compromised version of the module. Thus, this is a security risk for the user and extension. In addition, an extension may rely on JavaScript or other configuration files that control the extension or other modules' behavior. There are many other examples, such as executing an opened code file to determine its output for error reporting.

### Does my extension use settings that determine code execution that can be defined in the workspace?

Your extension might use settings values as flags to a CLI that your extension executes. If these settings are overridden by a malicious workspace, they could be used as an attack vector against your extension. On the other hand, if the settings' values are only used to detect certain conditions, then it may not be a security risk and does not require Workspace Trust. For example, an extension might check whether the value of a preferred shell setting is `bash` or `pwsh` to determine what documentation to show. The [Configurations (settings)][LN218] section below has guidance on settings to help you find the optimal configuration for your extension.

This is not an exhaustive list of cases that might require Workspace Trust. As we review more extensions, we will update this list. Use this list to think of similar behavior your extension might be doing when considering Workspace Trust.

### What if I don't make changes to my extension?

As mentioned above, an extension that does not contribute anything to their `package.json` will be treated as not supporting Workspace Trust. It will be disabled when a workspace is in Restricted Mode and the user will be notified that some extensions are not working due to Workspace Trust. This measure is the most security-conscious approach for the user. Even though this is the default, it is a best practice to set the appropriate value indicating that as an extension author, you have made the effort to protect the user and your extension from malicious workspace content.

## Workspace Trust API

As described above, the first step to using the API is adding the static declarations to your `package.json`. The easiest method of onboarding would be to use a `false` value for the `supported` property. Once again, this is the default behavior even if you do nothing, but it's a good signal to the user that you have made a deliberate choice. In this case, your extension does not need to do anything else. It will not be activated until trust is given and then your extension will know that it is executing with the consent of the user. However, if your extension only requires trust for part of its functionality, this is likely not the best option.

For extensions that wish to gate their features on Workspace Trust, they should use the `'limited'` value for the `supported` property, and VS Code provides the following API:

```typescript
export namespace workspace {
  /**
    * When true, the user has explicitly trusted the contents of the workspace.
    */
  export const isTrusted: boolean;

  /**
    * Event that fires when the current workspace has been trusted.
    */
  export const onDidGrantWorkspaceTrust: Event<void>;
}
```

Use the `isTrusted` property to determine if the current workspace is trusted and the `onDidGrantWorkspaceTrust` event to listen for when trust has been granted to the workspace. You can use this API to block specific code paths and perform any necessary registrations once the workspace has been trusted.

VS Code also exposes a context key `isWorkspaceTrusted` for use in `when` clauses as described below.

## Contribution points

### Commands, views, or other UI

When the user has not trusted the workspace, they will be operating in Restricted Mode with limited functionality geared towards browsing code. Any features that you disable in Restricted Mode should be hidden from the user. This can be done via [when clause contexts][LN218] and the context key `isWorkspaceTrusted`. A command can still be called even if it is not presented in the UI, so you should block execution or not register a command based on the API above in your extension code.

### Configurations (settings)

First, you should review your settings to determine if they need to take trust into account. As described above, a workspace may define a value for a setting that your extension consumes that is malicious to the use. If you identify settings that are vulnerable, you should use `'limited'` for the `supported` property and list the setting ID in the `restrictedConfigurations` array.

When you add a setting ID to the `restrictedConfigurations` array, VS Code will only return the user-defined value of the setting in Restricted Mode. Your extension then doesn't need to make any additional code changes to handle the setting. When trust is granted, a configuration change event will fire in addition to the Workspace Trust event.

### Debug extensions

VS Code will prevent debugging in Restricted Mode. For this reason, debugging extensions generally do not need to require trust and should select `true` for the `supported` property. However, if your extension provides additional functionality, commands, or settings that are not part of the built-in debugging flow, you should use `'limited'` and follow the above guidance.

### Task providers

Similar to debugging, VS Code prevents running tasks in Restricted Mode. If your extension provides additional functionality, commands, or settings that are not part of the built-in tasks flow, you should use `'limited'` and follow the above guidance. Otherwise, you can specify `supported: true`.

## Testing Workspace Trust

See the [Workspace Trust user guide][LN218] for details on enabling and configuring Workspace Trust.


<a id="_api_extension-guides_task-provider" ></a>

# /api/extension-guides/task-provider
--------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 49744351-83ef-4ef6-99e7-2485e6e9c79f
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to contribute tasks to Visual Studio Code through an extension (plug-in).
    ---

## Task Provider

Users normally define [tasks][LN218] in Visual Studio Code in a `tasks.json` file. However, there are some tasks during software development that can be automatically detected by a VS Code extension with a Task Provider. When the **Tasks: Run Task** command is run from VS Code, all active Task Providers contribute tasks that the user can run. While the `tasks.json` file lets the user manually define a task for a specific folder or workspace, a Task Provider can detect details about a workspace and then automatically create a corresponding VS Code Task. For example, a Task Provider could check if there is a specific build file, such as `make` or `Rakefile`, and create a build task. This topic describes how extensions can auto-detect and provide tasks to end-users.

This guide teaches you how to build a Task Provider that auto-detects tasks defined in [Rakefiles][LK232]. The complete source code is at: [https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample][LK232].

## Task Definition

To uniquely identify a task in the system, an extension contributing a task needs to define the properties that identify a task. In the Rake example, the task definition looks like this:

```json
"taskDefinitions": [
    {
        "type": "rake",
        "required": [
            "task"
        ],
        "properties": {
            "task": {
                "type": "string",
                "description": "The Rake task to customize"
            },
            "file": {
                "type": "string",
                "description": "The Rake file that provides the task. Can be omitted."
            }
        }
    }
]
```

This contributes a task definition for `rake` tasks. The task definition has two attributes `task` and `file`. `task` is the name of the Rake task and `file` points to the `Rakefile` that contains the task. The `task` property is required, the `file` property is optional. If the `file` attribute is omitted, the `Rakefile` in the root of the workspace folder is used.

### When clause

A task definition may optional have a `when` property. The `when` property specifies the condition under which task of this type will be available. The `when` property functions in the same way [as other places in VS Code][LN218], where there is a `when` property. The following contexts should always be considered when creating a task definition:

- `shellExecutionSupported`: True when VS Code can run `ShellExecution` tasks, such as VS Code is run as a desktop application or when using one of the remote extensions, such as Dev Containers.
- `processExecutionSupported`: True when VS Code can run `ProcessExecution` tasks, such as VS Code is run as a desktop application or when using one of the remote extensions, such as Dev Containers. Currently, it will always have the same value as `shellExecutionSupported`.
- `customExecutionSupported`: True when VS Code can run `CustomExecution`. This is always true.

## Task provider

Analogous to language providers that let extensions support code completion, an extension can register a task provider to compute all available tasks. This is done using the `vscode.tasks` namespace as shown in the following code snippet:

```ts
import * as vscode from 'vscode';

let rakePromise: Thenable<vscode.Task[]> | undefined = undefined;
const taskProvider = vscode.tasks.registerTaskProvider('rake', {
  provideTasks: () => {
    if (!rakePromise) {
      rakePromise = getRakeTasks();
    }
    return rakePromise;
  },
  resolveTask(_task: vscode.Task): vscode.Task | undefined {
        const task = _task.definition.task;
        // A Rake task consists of a task and an optional file as specified in RakeTaskDefinition
        // Make sure that this looks like a Rake task by checking that there is a task.
        if (task) {
            // resolveTask requires that the same definition object be used.
            const definition: RakeTaskDefinition = <any>_task.definition;
            return new vscode.Task(definition, _task.scope ?? vscode.TaskScope.Workspace, definition.task, 'rake', new vscode.ShellExecution(`rake ${definition.task}`));
        }
        return undefined;  }
});
```

Like `provideTasks`, the `resolveTask` method is called by VS Code to get tasks from the extension. `resolveTask` can be called instead of `provideTasks`, and is intended to provide an optional performance increase for providers that implement it. For example, if a user has a keybinding that runs an extension provided task, it would be better for VS Code to call `resolveTask` for that task provider and just get the one task quickly instead of having to call `provideTasks` and wait for the extension to provide all of its tasks. It is good practice to have a setting that allows users to turn off individual task providers, so this is common. A user might notice that tasks from a specific provider are slower to get and turn off the provider. In this case, the user might still reference some of the tasks from this provider in their `tasks.json`. If `resolveTask` is not implemented, then there will be a warning that the task in their `tasks.json` was not created. With `resolveTask` an extension can still provide a task for the task defined in `tasks.json`.

The `getRakeTasks` implementation does the following:

- Lists all rake tasks defined in a `Rakefile` using the `rake -AT -f Rakefile` command for each workspace folder.
- Parses the stdio output.
- For every listed task, creates a `vscode.Task` implementation.

Since a Rake task instantiation needs a task definition as defined in the `package.json` file, VS Code also defines the structure using a TypeScript interface like this:

```typescript
interface RakeTaskDefinition extends vscode.TaskDefinition {
  /**
   * The task name
   */
  task: string;

  /**
   * The rake file containing the task
   */
  file?: string;
}
```

Assuming that the output comes from a task called `compile` in the first workspace folder, the corresponding task creation then looks like this:

```typescript
let task = new vscode.Task(
  { type: 'rake', task: 'compile' },
  vscode.workspace.workspaceFolders[0],
  'compile',
  'rake',
  new vscode.ShellExecution('rake compile')
);
```

For every task listed in the output, a corresponding VS Code task is created using the above pattern and then returns the array of all tasks from the `getRakeTasks` call.

The `ShellExecution` executes the `rake compile` command in the shell that is specific for the OS (for example under Windows the command would be executed in PowerShell, under Ubuntu it'd be executed in bash). If the task should directly execute a process (without spawning a shell), `vscode.ProcessExecution` can be used. `ProcessExecution` has the advantage that the extension has full control over the arguments passed to the process. Using `ShellExecution` makes use of the shell command interpretation (like wildcard expansion under bash). If the `ShellExecution` is created with a single command line, then the extension needs to ensure proper quoting and escaping (for example to handle whitespace) inside the command.

## CustomExecution

In general, it is best to use a `ShellExecution` or `ProcessExecution` because they are simple. However, if your task requires a lot of saved state between runs, doesn't work well as a separate script or process, or requires extensive handling of output a `CustomExecution` might be a good fit. Existing uses of `CustomExecution` are usually for complex build systems. A `CustomExecution` has only a callback which is executed at the time that the task is run. This allows for greater flexibility in what the task can do, but it also means that the task provider is responsible for any process management and output parsing that needs to happen. The task provider is also responsible for implementing `Pseudoterminal` and returning it from the `CustomExecution` callback.

```typescript
return new vscode.Task(definition, vscode.TaskScope.Workspace, `${flavor} ${flags.join(' ')}`,
  CustomBuildTaskProvider.CustomBuildScriptType, new vscode.CustomExecution(async (): Promise<vscode.Pseudoterminal> => {
    // When the task is executed, this callback will run. Here, we setup for running the task.
    return new CustomBuildTaskTerminal(this.workspaceRoot, flavor, flags, () => this.sharedState, (state: string) => this.sharedState = state);
  }));
```

The full example, including the implementation of `Pseudoterminal` is at [https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample/src/customTaskProvider.ts][LK233].


<a id="_api_extension-guides_scm-provider" ></a>

# /api/extension-guides/scm-provider
-------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 79996489-8D16-4C0A-8BE8-FF4B1E9C223A
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide illustrating how to use Source Control API.
    ---

## Source Control API

The Source Control API allows extension authors to define Source Control Management (SCM) features. There is a slim, yet powerful API surface which allows many different SCM systems to be integrated in Visual Studio Code, while having a common user interface with all of them.

![VS Code SCM][LN219]

VS Code itself ships with one Source Control provider, the Git extension, which is the best reference for this API and is [a great starting point][LK234] if you'd like to contribute your very own SCM provider. There are other great examples in the Marketplace such as the [SVN extension][LK235].

This documentation will help you build an extension which can make any SCM system work with VS Code.

> **Note:** that you can always refer to the [`vscode` namespace API reference][LN220] in our documentation.

## Source Control Model

A `SourceControl` is the entity responsible for populating the Source Control model with **resource states**, instances of `SourceControlResourceState`. Resource states are themselves organized in **groups**, instances of `SourceControlResourceGroup`.

You can create a new SourceControl with `vscode.scm.createSourceControl`.

In order to better understand how these three entities correlate with each other, let's take [Git][LK235] as an example. Consider the following output of `git status`:

```bash
vsce main* → git status
On branch main
Your branch is up-to-date with 'origin/main'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        renamed:    src/api.ts -> src/test/api.ts

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        deleted:    .travis.yml
        modified:   README.md
```

There are many things going on in this workspace. First, the `README.md` file has been modified, staged and then modified once again. Second, the `src/api.ts` file has been moved to `src/test/api.ts` and that move was staged. Finally, the `.travis.yml` file has been deleted.

For this workspace, Git defines two resource groups: the **working tree** and the **index**. Each **file change** within that group is **resource state**:

- **Index** - resource group
  - `README.md`, modified - resource state
  - `src/test/api.ts`, renamed from `src/api.ts` - resource state
- **Working Tree** - resource group
  - `.travis.yml`, deleted - resource state
  - `README.md`, modified - resource state

Note how the same file, `README.md`, is part of two distinct resource states.

Here's how Git creates this model:

```ts
function createResourceUri(relativePath: string): vscode.Uri {
  const absolutePath = path.join(vscode.workspace.rootPath, relativePath);
  return vscode.Uri.file(absolutePath);
}

const gitSCM = vscode.scm.createSourceControl('git', 'Git');

const index = gitSCM.createResourceGroup('index', 'Index');
index.resourceStates = [
  { resourceUri: createResourceUri('README.md') },
  { resourceUri: createResourceUri('src/test/api.ts') }
];

const workingTree = gitSCM.createResourceGroup('workingTree', 'Changes');
workingTree.resourceStates = [
  { resourceUri: createResourceUri('.travis.yml') },
  { resourceUri: createResourceUri('README.md') }
];
```

Changes made to the source control and resource groups will be propagated to the Source Control view.

## Source Control View

VS Code is able to populate the Source Control view, as the Source Control model changes. Resource states are customizable using `SourceControlResourceDecorations`:

```ts
export interface SourceControlResourceState {
  readonly decorations?: SourceControlResourceDecorations;
}
```

The previous example would be sufficient to populate a simple list in the Source Control view, but there are many user interactions that the user might want to perform with each resource. For instance, what happens when the user clicks a resource state? The resource state can optionally provide a command to handle this action:

```ts
export interface SourceControlResourceState {
  readonly command?: Command;
}
```

### Menus

There are six Source Control menu ids where you can place menu items, in order to provide the user with a much richer user interface.

The `scm/title` menu is located to the right of the SCM view title. The menu items in the `navigation` group will be inline, while all the others will be within the `…` dropdown menu.

These three are similar:

- `scm/resourceGroup/context` adds commands to [`SourceControlResourceGroup`][LN221] items.
- `scm/resourceState/context` adds commands to [`SourceControlResourceState`][LN222] items.
- `scm/resourceFolder/context` add commands to the intermediate folders that appear when a [`SourceControlResourceState`][LN222]'s resourceUri path includes folders and the user has opted for tree-view rather than list-view mode.

Place menu items in the `inline` group to have them inline. All other menu item groups will be represented in a context menu usually accessible using the mouse right-click.

Note that the SCM view supports multiple selection, so a command receives as its argument an array of one or more resources.

For example, Git supports staging multiple files by adding the `git.stage` command to the `scm/resourceState/context` menu and using such a method declaration:

```ts
stage(...resourceStates: SourceControlResourceState[]): Promise<void>;
```

When creating them, `SourceControl` and `SourceControlResourceGroup` instances require you to provide an `id` string. These values will be populated in the `scmProvider` and `scmResourceGroup` context keys, respectively. You can rely on these [context keys][LN222] in the `when` clauses of your menu items. Here's how Git is able to show an inline menu item for its `git.stage` command:

```json
{
  "command": "git.stage",
  "when": "scmProvider == git && scmResourceGroup == merge",
  "group": "inline"
}
```

The `scm/sourceControl` menu is the context menu on each `SourceControl` instance in the **Source Control Repositories** view:

![source control menu][LN223]

The `scm/change/title` allows you to contribute commands to the title bar of the [Quick Diff][LN224] inline diff editor, described [further ahead][LN225]. The command will be passed as arguments the URI of the document, the array of changes within it, and the index of the change which the inline change diff editor is currently focused on. For example, here's the declaration of the `stageChange` Git command which is contributed to this menu with a `when` clause testing that the `originalResourceScheme` [context key][LN225] equals `git`:

```ts
async stageChange(uri: Uri, changes: LineChange[], index: number): Promise<void>;
```

### SCM Input Box

The Source Control Input Box, located atop of each Source Control view, allows the user to input a message. You can get (and set) this message in order to perform operations. In Git, for example, this is used as the commit box, in which users type in commit messages and `git commit` commands pick them up.

```ts
export interface SourceControlInputBox {
  value: string;
}

export interface SourceControl {
  readonly inputBox: SourceControlInputBox;
}
```

The user can type <kbd>Ctrl+Enter</kbd> (or <kbd>Cmd+Enter</kbd> on macOS) to accept any message. You can handle this event by providing a `acceptInputCommand` to your `SourceControl` instance.

```ts
export interface SourceControl {
  readonly acceptInputCommand?: Command;
}
```

## Quick Diff

VS Code also supports displaying **quick diff** editor gutter decorations. Clicking those decorations will reveal an inline diff experience, to which you can contribute contextual commands:

![SCM quick diff][LN226]

These decorations are computed by VS Code itself. All you need to do is provide VS Code with the original contents of any given file.

```ts
export interface SourceControl {
  quickDiffProvider?: QuickDiffProvider;
}
```

Using a `QuickDiffProvider`'s `provideOriginalResource` method, your implementation is able to tell VS Code the `Uri` of the original resource that matches the resource whose `Uri` is provided as an argument to the method.

Combine this API with the [`registerTextDocumentContentProvider` method in the `workspace` namespace][LN227], which lets you provide contents for arbitrary resources, given a [`Uri`][LN228] matching the custom `scheme` that it registered for.

## Next steps

To learn more about VS Code extensibility model, try these topics:

- [SCM API Reference][LN228] - Read the full SCM API documentation
- [Git Extension][LK235] - Learn by reading the Git extension implementation
- [Extension API Overview][LN228] - Learn about the full VS Code extensibility model.
- [Extension Manifest File][LN228] - VS Code package.json extension manifest file reference
- [Contribution Points][FX002] - VS Code contribution points reference


<a id="_api_extension-guides_debugger-extension" ></a>

# /api/extension-guides/debugger-extension
-------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 49EF49AD-8BE6-4D46-ADC8-D678BDC04E85
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to provide debugger extensions (plug-ins) for Visual Studio Code through a Debug Adapter.
    ---

## Debugger Extension

Visual Studio Code's debugging architecture allows extension authors to easily integrate existing debuggers into VS Code, while having a common user interface with all of them.

VS Code ships with one built-in debugger extension, the [Node.js][LK235] debugger extension, which is an excellent showcase for the many debugger features supported by VS Code:

![VS Code Debug Features][LN229]

This screenshot shows the following debugging features:

1. Debug configuration management.
2. Debug actions for starting/stopping and stepping.
3. Source-, function-, conditional-, inline breakpoints, and log points.
4. Stack traces, including multi-thread and multi-process support.
5. Navigating through complex data structures in views and hovers.
6. Variable values shown in hovers or inlined in the source.
7. Managing watch expressions.
8. Debug console for interactive evaluation with autocomplete.

This documentation will help you create a debugger extension which can make any debugger work with VS Code.

## Debugging Architecture of VS Code

VS Code implements a generic (language-agnostic) debugger UI based on an abstract protocol that we've introduced to communicate with debugger backends.
Because debuggers typically do not implement this protocol, some intermediary is needed to "adapt" the debugger to the protocol.
This intermediary is typically a standalone process that communicates with the debugger.

![VS Code Debug Architecture][LN230]

We call this intermediary the **Debug Adapter** (or **DA** for short) and the abstract protocol that is used between the DA and VS Code is the **Debug Adapter Protocol** (**DAP** for short).
Since the Debug Adapter Protocol is independent from VS Code, it has its own [web site][LK235] where you can find an [introduction and overview][LK236], the detailed [specification][LK237], and some lists with [known implementations and supporting tools][LK237].
The history of and motivation behind DAP is explained in this [blog post][LK238].

Since debug adapters are independent from VS Code and can be used in [other developments tools][LK239], they do not match VS Code's extensibility architecture which is based on extensions and contribution points.

For this reason VS Code provides a contribution point, `debuggers`, where a debug adapter can be contributed under a specific debug type (e.g. `node` for the Node.js debugger). VS Code launches the registered DA whenever the user starts a debug session of that type.

So in its most minimal form, a debugger extension is just a declarative contribution of a debug adapter implementation and the extension is basically a packaging container for the debug adapter without any additional code.

![VS Code Debug Architecture 2][LN231]

A more realistic debugger extension contributes many or all of the following declarative items to VS Code:

- List of languages supported by the debugger. VS Code enables the UI to set breakpoints for those languages.
- JSON schema for the debug configuration attributes introduced by the debugger. VS Code uses this schema to verify the configuration in the launch.json editor and provides IntelliSense. Please note that the JSON schema constructs `$ref` and `definition` are not supported.
- Default debug configurations for the initial launch.json created by VS Code.
- Debug configuration snippets that a user can add to a launch.json file.
- Declaration of variables that can be used in debug configurations.

You can find more information in [`contributes.breakpoints`][LN232] and [`contributes.debuggers`][LN233] references.

In addition to the purely declarative contributions from above, the Debug Extension API enables this code-based functionality:

- Dynamically generated default debug configurations for the initial launch.json created by VS Code.
- Determine the debug adapter to use dynamically.
- Verify or modify debug configurations before they are passed to the debug adapter.
- Communicate with the debug adapter.
- Send messages to the debug console.

In the rest of this document we show how to develop a debugger extension.

## The Mock Debug Extension

Since creating a debug adapter from scratch is a bit heavy for this tutorial, we will start with a simple DA which we have created as an educational "debug adapter starter kit". It is called _Mock Debug_ because it does not talk to a real debugger, but mocks one. Mock Debug simulates a debugger and supports step, continue, breakpoints, exceptions, and variable access, but it is not connected to any real debugger.

Before delving into the development setup for mock-debug, let's first install a [pre-built version][LK240]
from the VS Code Marketplace and play with it:

- Switch to the Extensions viewlet and type "mock" to search for the Mock Debug extension,
- "Install" and "Reload" the extension.

To try Mock Debug:

- Create a new empty folder `mock test` and open it in VS Code.
- Create a file `readme.md` and enter several lines of arbitrary text.
- Switch to the Run and Debug view (`kb(workbench.view.debug)`) and select the **create a launch.json file** link.
- VS Code will let you select an "debugger" in order to create a default launch configuration. Pick "Mock Debug".
- Press the green **Start** button and then `kbstyle(Enter)` to confirm the suggested file `readme.md`.

A debug session starts and you can "step" through the readme file, set and hit breakpoints, and run into exceptions (if the word `exception` appears in a line).

![Mock Debugger running][LN234]

Before using Mock Debug as a starting point for your own development, we recommend to uninstall the pre-built version first:

- Switch to the Extensions viewlet and click on the gear icon of the Mock Debug extension.
- Run the "Uninstall" action and then "Reload" the window.

## Development Setup for Mock Debug

Now let's get the source for Mock Debug and start development on it within VS Code:

```bash
git clone https://github.com/microsoft/vscode-mock-debug.git
cd vscode-mock-debug
yarn
```

Open the project folder `vscode-mock-debug` in VS Code.

What's in the package?

- `package.json` is the manifest for the mock-debug extension:
  - It lists the contributions of the mock-debug extension.
  - The `compile` and `watch` scripts are used to transpile the TypeScript source into the `out` folder and watch for subsequent source modifications.
  - The dependencies `vscode-debugprotocol`, `vscode-debugadapter`, and `vscode-debugadapter-testsupport` are NPM modules that simplify the development of node-based debug adapters.
- `src/mockRuntime.ts` is a _mock_ runtime with a simple debug API.
- The code that _adapts_ the runtime to the Debug Adapter Protocol lives in `src/mockDebug.ts`. Here you find the handlers for the various requests of the DAP.
- Since the implementation of debugger extension lives in the debug adapter, there is no need to have extension code at all (i.e. code that runs in the extension host process). However, Mock Debug has a small `src/extension.ts` because it illustrates what can be done in the extension code of a debugger extension.

Now build and launch the Mock Debug extension by selecting the **Extension** launch configuration and hitting `F5`.
Initially, this will do a full transpile of the TypeScript sources into the `out` folder.
After the full build, a _watcher task_ is started that transpiles any changes you make.

After transpiling the source, a new VS Code window labelled "[Extension Development Host]" appears with the Mock Debug extension now running in debug mode. From that window open your `mock test` project with the `readme.md` file, start a debug session with 'F5', and then step through it:

![Debugging Extension and Server][LN235]

Since you are running the extension in debug mode, you could now set and hit breakpoints in `src/extension.ts` but as I've mentioned above, there is not much interesting code executing in the extension. The interesting code runs in the debug adapter which is a separate process.

In order to debug the debug adapter itself, we have to run it in debug mode. This is most easily achieved by running the debug adapter in _server mode_ and configure VS Code to connect to it. In your VS Code vscode-mock-debug project select the launch configuration **Server** from the dropdown menu and press the green start button.

Since we already had an active debug session for the extension the VS Code debugger UI now enters _multi session_ mode which is indicated by seeing the names of the two debug sessions **Extension** and **Server** showing up in the CALL STACK view:

![Debugging Extension and Server][LN236]

Now we are able to debug both the extension and the DA simultaneously.
A faster way to arrive here is by using the **Extension + Server** launch configuration which launches both sessions automatically.

An alternative, even simpler approach for debugging the extension and the DA can be found [below][LN237].

Set a breakpoint at the beginning of method `launchRequest(...)` in file `src/mockDebug.ts` and as a last step configure the mock debugger to connect to the DA server by adding a `debugServer` attribute for port `4711` to your mock test launch config:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "mock",
      "request": "launch",
      "name": "mock test",
      "program": "${workspaceFolder}/readme.md",
      "stopOnEntry": true,
      "debugServer": 4711
    }
  ]
}
```

If you now launch this debug configuration, VS Code does not start the mock debug adapter as a separate process, but directly connects to local port 4711 of the already running server, and you should hit the breakpoint in `launchRequest`.

With this setup, you can now easily edit, transpile, and debug Mock Debug.

But now the real work begins: you will have to replace the mock implementation of the debug adapter in `src/mockDebug.ts` and `src/mockRuntime.ts` by some code that talks to a "real" debugger or runtime. This involves understanding and implementing the Debug Adapter Protocol. More details
about this can be found [here][LK241].

## Anatomy of the package.json of a Debugger Extension

Besides providing a debugger-specific implementation of the debug adapter a debugger extension needs a `package.json` that contributes to the various debug-related contributions points.

So let's have a closer look at the `package.json` of Mock Debug.

Like every VS Code extension, the `package.json` declares the fundamental properties **name**, **publisher**, and **version** of the extension. Use the **categories** field to make the extension easier to find in the VS Code Extension Marketplace.

```json
{
  "name": "mock-debug",
  "displayName": "Mock Debug",
  "version": "0.24.0",
  "publisher": "...",
  "description": "Starter extension for developing debug adapters for VS Code.",
  "author": {
    "name": "...",
    "email": "..."
  },
  "engines": {
    "vscode": "^1.17.0",
    "node": "^7.9.0"
  },
  "icon": "images/mock-debug-icon.png",
  "categories": ["Debuggers"],

  "contributes": {
    "breakpoints": [{ "language": "markdown" }],
    "debuggers": [
      {
        "type": "mock",
        "label": "Mock Debug",

        "program": "./out/mockDebug.js",
        "runtime": "node",

        "configurationAttributes": {
          "launch": {
            "required": ["program"],
            "properties": {
              "program": {
                "type": "string",
                "description": "Absolute path to a text file.",
                "default": "${workspaceFolder}/${command:AskForProgramName}"
              },
              "stopOnEntry": {
                "type": "boolean",
                "description": "Automatically stop after launch.",
                "default": true
              }
            }
          }
        },

        "initialConfigurations": [
          {
            "type": "mock",
            "request": "launch",
            "name": "Ask for file name",
            "program": "${workspaceFolder}/${command:AskForProgramName}",
            "stopOnEntry": true
          }
        ],

        "configurationSnippets": [
          {
            "label": "Mock Debug: Launch",
            "description": "A new configuration for launching a mock debug program",
            "body": {
              "type": "mock",
              "request": "launch",
              "name": "${2:Launch Program}",
              "program": "^\"\\${workspaceFolder}/${1:Program}\""
            }
          }
        ],

        "variables": {
          "AskForProgramName": "extension.mock-debug.getProgramName"
        }
      }
    ]
  },

  "activationEvents": ["onDebug", "onCommand:extension.mock-debug.getProgramName"]
}
```

Now take a look at the **contributes** section which contains the contributions specific to debug extensions.

First, we use the **breakpoints** contribution point to list the languages for which setting breakpoints will be enabled. Without this, it would not be possible to set breakpoints in Markdown files.

Next is the **debuggers** section. Here, one debugger is introduced under a debug **type** `mock`. The user can reference this type in launch configurations. The optional attribute **label** can be used to give the debug type a nice name when showing it in the UI.

Since the debug extension uses a debug adapter, a relative path to its code is given as the **program** attribute.
In order to make the extension self-contained the application must live inside the extension folder. By convention, we keep this applications inside a folder named `out` or `bin`, but you are free to use a different name.

Since VS Code runs on different platforms, we have to make sure that the DA program supports the different platforms as well. For this we have the following options:

1. If the program is implemented in a platform independent way, e.g. as program that runs on a runtime that is available on all supported platforms, you can specify this runtime via the **runtime** attribute. As of today, VS Code supports `node` and `mono` runtimes. Our Mock debug adapter from above uses this approach.

1. If your DA implementation needs different executables on different platforms, the **program** attribute can be qualified for specific platforms like this:

   ```json
   "debuggers": [{
       "type": "gdb",
       "windows": {
           "program": "./bin/gdbDebug.exe",
       },
       "osx": {
           "program": "./bin/gdbDebug.sh",
       },
       "linux": {
           "program": "./bin/gdbDebug.sh",
       }
   }]
   ```

1. A combination of both approaches is possible too. The following example is from the Mono DA which is implemented as a mono application that needs a runtime on macOS and Linux but not on Windows:

   ```json
   "debuggers": [{
       "type": "mono",
       "program": "./bin/monoDebug.exe",
       "osx": {
           "runtime": "mono"
       },
       "linux": {
           "runtime": "mono"
       }
   }]
   ```

**configurationAttributes** declares the schema for the `launch.json` attributes that are available for this debugger. This schema is used for validating the `launch.json` and supporting IntelliSense and hover help when editing the launch configuration.

The **initialConfigurations** define the initial content of the default `launch.json` for this debugger. This information is used when a project does not have a `launch.json` and a user starts a debug session or selects the **create a launch.json file** link in the Run and Debug view. In this case VS Code lets the user pick a debug environment and then creates the corresponding `launch.json`:

![Debugger Quickpick][LN238]

Instead of defining the initial content of the `launch.json` statically in the `package.json`, it is possible to compute the initial configurations dynamically by implementing a `DebugConfigurationProvider` (for details see the section [Using a DebugConfigurationProvider below][LN239]).

**configurationSnippets** define launch configuration snippets that get surfaced in IntelliSense when editing the `launch.json`. As a convention, prefix the `label` attribute of a snippet by the debug environment name so that it can be clearly identified when presented in a list of many snippet proposals.

The **variables** contribution binds "variables" to "commands". These variables can be used in the launch configuration using the **\${command:xyz}** syntax and the variables are substituted by the value returned from the bound command when a debug session is started.

The implementation of a command lives in the extension and it can range from a simple expression with no UI, to sophisticated functionality based on the UI features available in the extension API.
Mock Debug binds a variable `AskForProgramName` to the command `extension.mock-debug.getProgramName`. The [implementation][LK242] of this command in `src/extension.ts` uses the `showInputBox` to let the user enter a program name:

```ts
vscode.commands.registerCommand('extension.mock-debug.getProgramName', config => {
  return vscode.window.showInputBox({
    placeHolder: 'Please enter the name of a markdown file in the workspace folder',
    value: 'readme.md'
  });
});
```

The variable can now be used in any string typed value of a launch configuration as **\${command:AskForProgramName}**.

## Using a DebugConfigurationProvider

If the static nature of debug contributions in the `package.json` is not sufficient, a `DebugConfigurationProvider` can be used to dynamically control the following aspects of a debug extension:

- The initial debug configurations for a newly created launch.json can be generated dynamically, e.g. based on some contextual information available in the workspace.
- A launch configuration can be _resolved_ (or modified) before it is used to start a new debug session. This allows for filling in default values based on information available in the workspace. Two _resolve_ methods exist: `resolveDebugConfiguration` is called before variables are substituted in the launch configuration, `resolveDebugConfigurationWithSubstitutedVariables` is called after all variables have been substituted. The former must be used if the validation logic inserts additional variables into the debug configuration. The latter must be used if the validation logic needs access to the final values of all debug configuration attributes.

The `MockConfigurationProvider` in `src/extension.ts` implements `resolveDebugConfiguration` to detect the case where a debug session is started when no launch.json exists, but a Markdown file is open in the active editor. This is a typical scenario where the user has a file open in the editor and just wants to debug it without creating a launch.json.

A debug configuration provider is registered for a specific debug type via `vscode.debug.registerDebugConfigurationProvider`, typically in the extension's `activate` function.
To ensure that the `DebugConfigurationProvider` is registered early enough, the extension must be activated as soon as the debug functionality is used. This can be easily achieved by configuring extension activation for the `onDebug` event in the `package.json`:

```json
"activationEvents": [
    "onDebug",
    // ...
],
```

This catch-all `onDebug` is triggered as soon as any debug functionality is used. This works fine as long as the extension has cheap startup costs (i.e. does not spend a lot of time in its startup sequence). If a debug extension has an expensive startup (for instance because of starting a language server), the `onDebug` activation event could negatively affect other debug extensions, because it is triggered rather early and does not take a specific debug type into account.

A better approach for expensive debug extensions is to use more fine-grained activation events:

- `onDebugInitialConfigurations` is fired just before the `provideDebugConfigurations` method of the `DebugConfigurationProvider` is called.
- `onDebugResolve:type` is fired just before the `resolveDebugConfiguration` or `resolveDebugConfigurationWithSubstitutedVariables` methods of the `DebugConfigurationProvider` for the specified type is called.

**Rule of thumb:** If activation of a debug extensions is cheap, use `onDebug`. If it is expensive, use `onDebugInitialConfigurations` and/or `onDebugResolve` depending on whether the `DebugConfigurationProvider` implements the corresponding methods `provideDebugConfigurations` and/or `resolveDebugConfiguration`.

## Publishing your debugger extension

Once you have created your debugger extension you can publish it to the Marketplace:

- Update the attributes in the `package.json` to reflect the naming and purpose of your debugger extension.
- Upload to the Marketplace as described in [Publishing Extension][LN239].

## Alternative approach to develop a debugger extension

As we have seen, developing a debugger extension typically involves debugging both the extension and the debug adapter in two parallel sessions. As explained above VS Code supports this nicely but development could be easier if both the extension and the debug adapter would be one program that could be debugged in one debug session.

This approach is in fact easily doable as long as your debug adapter is implemented in TypeScript/JavaScript. The basic idea is to run the debug adapter directly inside the extension and to make VS Code to connect to it instead of launching a new external debug adapter per session.

For this VS Code provides extension API to control how a debug adapter is created and run. A `DebugAdapterDescriptorFactory` has a method `createDebugAdapterDescriptor` that is called by VS Code when a debug session starts and a debug adapter is needed. This method must return a descriptor object (`DebugAdapterDescriptor`) that describes how the debug adapter is run.

Today VS Code supports three different ways for running a debug adapter and consequently offers three different descriptor types:

- `DebugAdapterExecutable`: this object describes a debug adapter as an external executable with a path and optional arguments and runtime. The executable must implement the Debug Adapter Protocol and communicate via stdin/stdout. This is VS Code's default mode of operation and VS Code uses this descriptor automatically with the corresponding values from the package.json if no `DebugAdapterDescriptorFactory` is explicitly registered.
- `DebugAdapterServer`: this object describes a debug adapter running as a server that communicates via a specific local or remote port. A debug adapter implementation based on the [`vscode-debugadapter`][LK243] npm module supports this server mode automatically.
- `DebugAdapterInlineImplementation`: this object describes a debug adapter as a JavaScript or Typescript object that implements the `vscode.DebugAdapter` interface. A debug adapter implementation based on version 1.38-pre.4 or later of the [`vscode-debugadapter`][LK243] npm module implements the interface automatically.

Mock Debug shows examples for the [three types of DebugAdapterDescriptorFactories][LK244]  and how they are [registered for the 'mock' debug type][LK245]. The run mode to use can be selected by [setting the global variable `runMode`][LK246] to one of the possible values `external`, `server`, or `inline`.

For development, the `inline` and `server` modes are particularly useful because they allow for debugging extension and debug adapter within a single process.


<a id="_api_extension-guides_markdown-extension" ></a>

# /api/extension-guides/markdown-extension
-------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 1664249a-ba7a-4a53-b3f0-9d757cff7d27
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to extend Visual Studio Code's built-in Markdown preview.
    ---

## Markdown Extension

Markdown extensions allow you to extend and enhance Visual Studio Code's built-in Markdown preview. This includes changing the look of the preview or adding support for new Markdown syntax.

## Changing the look of the Markdown preview with CSS

Extensions can contribute CSS to change the look or layout of the Markdown preview. Stylesheets are registered using the `markdown.previewStyles` [Contribution Point][LN239] in the extension's `package.json`:

```json
"contributes": {
    "markdown.previewStyles": [
        "./style.css"
    ]
}
```

`"markdown.previewStyles"` is a list of files relative to the extension's root folder.

Contributed styles are added after the built-in Markdown preview styles but before a user's `"markdown.styles"`.

The [Markdown Preview GitHub Styling][LK247] extension is a good example that demonstrates using a stylesheet to make the Markdown preview look like GitHub's rendered Markdown. You can review the extension's source code on [GitHub][LK248].

## Adding support for new syntax with markdown-it plugins

The VS Code Markdown preview supports the [CommonMark specification][LK249]. Extensions can add support for additional Markdown syntax by contributing a [markdown-it plugin.][LK250]

To contribute a markdown-it plugin, first add a `"markdown.markdownItPlugins"` contribution in your extension's `package.json`:

```json
"contributes": {
    "markdown.markdownItPlugins": true
}
```

Then, in the extension's main `activation` function, return an object with a function named `extendMarkdownIt`. This function takes the current markdown-it instance and must return a new markdown-it instance:

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md: any) {
      return md.use(require('markdown-it-emoji'));
    }
  };
}
```

To contribute multiple markdown-it plugins, return multiple `use` statements chained together:

```ts
return md.use(require('markdown-it-emoji')).use(require('markdown-it-hashtag'));
```

Extensions that contribute markdown-it plugins are activated lazily, when a Markdown preview is shown for the first time.

The [markdown-emoji][LK251] extension demonstrates using a markdown-it plugin to add emoji support to the markdown preview. You can review the Emoji extension's source code on [GitHub][LK252].

You may also want to review:

- [Guidelines][LK253] for markdown-it plugin developers
- [Existing markdown-it plugins][LK254]

## Adding advanced functionality with scripts

For advanced functionality, extensions may contribute scripts that are executed inside of the Markdown preview.

```json
"contributes": {
    "markdown.previewScripts": [
        "./main.js"
    ]
}
```

Contributed scripts are loaded asynchronously and reloaded on every content change.

The [Markdown Preview Mermaid Support][LK255] extension demonstrates using scripts to add [Mermaid][LK256] diagrams and flowchart support to the markdown preview. You can review the Mermaid extension's source code on [GitHub][LK257].


<a id="_api_extension-guides_testing" ></a>

# /api/extension-guides/testing
--------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 4ced0b2a-3f5a-44e6-a8b0-66b9012af8c0
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Testing APIs in VS Code allow users to discover and run unit tests in their workspace
    ---

## Testing API

The Testing API allows Visual Studio Code extensions to discover tests in the workspace and publish results. Users can execute tests in the Test Explorer view, from decorations, and inside commands. With these new APIs, Visual Studio Code supports richer displays of outputs and diffs than was previously possible.

>**Note**: The Testing API is available in VS Code version 1.59 and higher.

## Examples

There are two test providers maintained by the VS Code team:

- The [sample test extension][LK257], which provides tests in Markdown files.
- The [selfhost test extension][LK258], that we use for running tests in VS Code itself.

## Discovering tests

Tests are provided by the `TestController`, which requires a globally unique ID and human-readable label to create:

```ts
const controller = vscode.tests.createTestController('helloWorldTests', 'Hello World Tests');
```

To publish tests, you add `TestItem`s as children to the controller's `items` collection. `TestItem`s are the foundation of the test API in the `TestItem` interface, and are a generic type that can describe a test case, suite, or tree item as it exists in code. They can, in turn, have `children` themselves, forming a hierarchy. For example, here's a simplified version of how the sample test extension creates tests:

```ts
parseMarkdown(content, {
  onTest: (range, numberA, mathOperator, numberB, expectedValue) => {
    // If this is a top-level test, add it to its parent's children. If not,
    // add it to the controller's top level items.
    const collection = parent ? parent.children : controller.items;
    // Create a new ID that's unique among the parent's children:
    const id = [numberA, mathOperator, numberB, expectedValue].join('  ');

    // Finally, create the test item:
    const test = controller.createTestItem(id, data.getLabel(), item.uri);
    test.range = range;
    collection.add(test);
  },
  // ...
});
```

Similar to Diagnostics, it's mostly up to the extension to control when tests are discovered. A simple extension might watch the entire workspace and parse all tests in all files at activation. However, parsing everything immediately may be slow for large workspaces. Instead, you can do two things:

1. Actively discover tests for a file when it's opened in the editor, by watching `vscode.workspace.onDidOpenTextDocument`.
1. Setting `item.canResolveChildren = true` and setting the `controller.resolveHandler`. The `resolveHandler` is called if the user takes an action to demand tests be discovered, such as by expanding an item in the Test Explorer.

Here's how this strategy might look in an extension that parses files lazily:

```ts
// First, create the `resolveHandler`. This may initially be called with
// "undefined" to ask for all tests in the workspace to be discovered, usually
// when the user opens the Test Explorer for the first time.
controller.resolveHandler = async test => {
  if (!test) {
    await discoverAllFilesInWorkspace();
  } else {
    await parseTestsInFileContents(test);
  }
};

// When text documents are open, parse tests in them.
vscode.workspace.onDidOpenTextDocument(parseTestsInDocument);
// We could also listen to document changes to re-parse unsaved changes:
vscode.workspace.onDidChangeTextDocument(e => parseTestsInDocument(e.document));

// In this function, we'll get the file TestItem if we've already found it,
// otherwise we'll create it with `canResolveChildren = true` to indicate it
// can be passed to the `controller.resolveHandler` to gets its children.
function getOrCreateFile(uri: vscode.Uri) {
  const existing = controller.items.get(uri.toString());
  if (existing) {
    return existing;
  }

  const file = controller.createTestItem(uri.toString(), uri.path.split('/').pop()!, uri);
  file.canResolveChildren = true;
  return file;
}

function parseTestsInDocument(e: vscode.TextDocument) {
  if (e.uri.scheme === 'file' && e.uri.path.endsWith('.md')) {
    parseTestsInFileContents(getOrCreateFile(e.uri), e.getText());
  }
}

async function parseTestsInFileContents(file: vscode.TestItem, contents?: string) {
  // If a document is open, VS Code already knows its contents. If this is being
  // called from the resolveHandler when a document isn't open, we'll need to
  // read them from disk ourselves.
  if (contents === undefined) {
    const rawContent = await vscode.workspace.fs.readFile(file.uri);
    contents = new TextDecoder().decode(rawContent);
  }

  // some custom logic to fill in test.children from the contents...
}
```

The implementation of `discoverAllFilesInWorkspace` can be built using VS Code' existing file watching functionality. When the `resolveHandler` is called, you should continue watching for changes so that the data in the Test Explorer stays up to date.

```ts
async function discoverAllFilesInWorkspace() {
  if (!vscode.workspace.workspaceFolders) {
    return []; // handle the case of no open folders
  }

  return Promise.all(vscode.workspace.workspaceFolders.map(async workspaceFolder => {
    const pattern = new vscode.RelativePattern(workspaceFolder, '**/*.md');
    const watcher = vscode.workspace.createFileSystemWatcher(pattern);

    // When files are created, make sure there's a corresponding "file" node in the tree
    watcher.onDidCreate(uri => getOrCreateFile(uri));
    // When files change, re-parse them. Note that you could optimize this so
    // that you only re-parse children that have been resolved in the past.
    watcher.onDidChange(uri => parseTestsInFileContents(getOrCreateFile(uri)));
    // And, finally, delete TestItems for removed files. This is simple, since
    // we use the URI as the TestItem's ID.
    watcher.onDidDelete(uri => controller.items.delete(uri.toString()));

    for (const file of await vscode.workspace.findFiles(pattern)) {
      getOrCreateFile(file);
    }

    return watcher;
  }));
}
```

The `TestItem` interface is simple and doesn't have room for custom data. If you need to associate extra information with a `TestItem`, you can use a [`WeakMap`][LK259]:

```ts
const testData = new WeakMap<vscode.TestItem, MyCustomData>();

// to associate data:
const item = controller.createTestItem(id, label);
testData.set(item, new MyCustomData());

// to get it back later:
const myData = testData.get(item);
```

It's guaranteed that the `TestItem` instances passed to all `TestController`-related methods will be the same as the ones originally created from `createTestItem`, so you can be sure that getting the item from the `testData` map will work.

For this example, let's just store the type of each item:

```ts
enum ItemType {
  File,
  TestCase,
}

const testData = new WeakMap<vscode.TestItem, ItemType>();

const getType = (testItem: vscode.TestItem) => testData.get(testItem)!;
```

## Running tests

Tests are executed through `TestRunProfile`s. Each profile belongs to a specific execution `kind`: run, debug, or coverage. Most test extensions will have at most one profile in each of these groups, but more are allowed. For example, if your extension runs tests on multiple platforms, you could have one profile for each combination of platform and `kind`. Each profile has a `runHandler`, which is invoked when a run of that type is requested.

```ts

function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  // todo
}

const runProfile = controller.createRunProfile('Run', vscode.TestRunProfileKind.Run, (request, token) => {
  runHandler(false, request, token);
});

const debugProfile = controller.createRunProfile('Debug', vscode.TestRunProfileKind.Debug, (request, token) => {
  runHandler(true, request, token);
});
```

The `runHandler` should call `controller.createTestRun` at least once, passing through the original request. The request contains the tests to `include` in the test run (which is omitted if the user asked to run all tests) and possibly tests to `exclude` from the run. The extension should use the resulting `TestRun` object to update the state of tests involved in the run. For example:

```ts
async function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  const run = controller.createTestRun(request);
  const queue: vscode.TestItem[] = [];

  // Loop through all included tests, or all known tests, and add them to our queue
  if (request.include) {
    request.include.forEach(test => queue.push(test));
  } else {
    controller.items.forEach(test => queue.push(test));
  }

  // For every test that was queued, try to run it. Call run.passed() or run.failed().
  // The `TestMessage` can contain extra information, like a failing location or
  // a diff output. But here we'll just give it a textual message.
  while (queue.length > 0 && !token.isCancellationRequested) {
    const test = queue.pop()!;

    // Skip tests the user asked to exclude
    if (request.exclude?.includes(test)) {
      continue;
    }

    switch (getType(test)) {
      case ItemType.File:
        // If we're running a file and don't know what it contains yet, parse it now
        if (test.children.size === 0) {
          await parseTestsInFileContents(test);
        }
        break;
      case ItemType.TestCase:
        // Otherwise, just run the test case. Note that we don't need to manually
        // set the state of parent tests; they'll be set automatically.
        const start = Date.now();
        try {
          await assertTestPasses(test);
          run.passed(test, Date.now() - start);
        } catch (e) {
          run.failed(test, new vscode.TestMessage(e.message), Date.now() - start);
        }
        break;
    }

    test.children.forEach(test => queue.push(test));
  }

  // Make sure to end the run after all tests have been executed:
  run.end();
}
```

In addition to the `runHandler`, you can set a `configureHandler` on the `TestRunProfile`. If present, VS Code will have UI to allow the user to configure the test run, and call the handler when they do so. From here, you can open files, show a Quick Pick, or do whatever is appropriate for your test framework.

> VS Code intentionally handles test configuration differently than debug or task configuration. These are traditionally editor or IDE-centric features, and are configured in special files in the `.vscode` folder. However, tests have traditionally been executed from the command line, and most test frameworks have existing configuration strategies. Therefore, in VS Code, we avoid duplication of configuration and instead leave it up to extensions to handle.

### Test Output

In addition to the messages passed to `TestRun.failed` or `TestRun.errored`, you can append generic output using `run.appendOutput(str)`. This output can be displayed in a terminal using the **Test: Show Output** and through various buttons in the UI, such as the terminal icon in the Test Explorer view.

Because the string is rendered in a terminal, you can use the full set of [ANSI codes][LK260], including the styles available in the [ansi-styles][LK261] npm package. Bear in mind that, because it is in a terminal, lines must be wrapped using CRLF (`\r\n`), not just LF (`\n`), which may be the default output from some tools.

### Test Coverage

Test coverage is associated with a `TestRun` via the `run.addCoverage()` method. Canonically this should be done by `runHandler`s of profiles of the `TestRunProfileKind.Coverage`, but it is possible to call it during any test run. The `addCoverage` method takes a `FileCoverage` object, which is a summary of the coverage data in that file:

```ts
async function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  // ...

  for await (const file of readCoverageOutput()) {
    run.addCoverage(new vscode.FileCoverage(file.uri, file.statementCoverage))
  }
}
```

The `FileCoverage` contains the overall covered and uncovered count of statements, branches, and declarations in each file. Depending on your runtime and coverage format, you might see statement coverage referred to as line coverage, or declaration coverage referred to as function or method coverage. You can add file coverage for a single URI multiple times, in which case the new information will replace the old.

Once a user opens a file with coverage or expands a file in the **Test Coverage** view, VS Code requests more information for that file. It does so by calling an extension-defined `loadDetailedCoverage` method on the `TestRunProfile` with the `TestRun`, `FileCoverage`, and a `CancellationToken`. Note that the test run and file coverage instances are the same as the ones used in `run.addCoverage`, which is useful for assocating data. For example, you can create a map of `FileCoverage` objects to your own data:

```ts
const coverageData = new WeakMap<vscode.FileCoverage, MyCoverageDetails>();

profile.loadDetailedCoverage = (testRun, fileCoverage, token) => {
  return coverageData.get(fileCoverage).load(token);
}

async function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  // ...

  for await (const file of readCoverageOutput()) {
    const coverage = new vscode.FileCoverage(file.uri, file.statementCoverage);
    coverageData.set(coverage, file)
    run.addCoverage(coverage);
  }
}
```

Alternatively you might subclass `FileCoverage` with an implementation that includes that data:

```ts
class MyFileCoverage extends vscode.FileCoverage {
  // ...
}

profile.loadDetailedCoverage = async (testRun, fileCoverage, token) => {
  return fileCoverage instanceof MyFileCoverage ? await fileCoverage.load() : [];
}

async function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  // ...

  for await (const file of readCoverageOutput()) {
    // 'file' is MyFileCoverage:
    run.addCoverage(file);
  }
}
```

`loadDetailedCoverage` is expected to return a promise to an array of `DeclarationCoverage` and/or `StatementCoverage` objects. Both objects include a `Position` or `Range` at which they can be found in the source file. `DeclarationCoverage` objects contain a name of the thing being declared (such as a function or method name) and the number of times that declaration was entered or invoked. Statements include the number of times they were executed, as well as zero or more associated branches. Refer to the type definitions in `vscode.d.ts` for more information.

In many cases you might have persistent files lying around from your test run. It's best practice to put such coverage output in the system's temporary directory (which you can retrieve via `require('os').tmpdir()`), but you can also clean them up eagerly by listening to VS Code's cue that it no longer needs to retain the test run:

```ts
import { promises as fs } from 'fs';

async function runHandler(shouldDebug: boolean, request: vscode.TestRunRequest, token: vscode.CancellationToken) {
  // ...

  run.onDidDispose(async () => {
    await fs.rm(coverageOutputDirectory, { recursive: true, force: true });
  });
}
```

### Test Tags

Sometime tests can only be run under certain configurations, or not at all. For these use cases, you can use Test Tags. `TestRunProfile`s can optionally have a tag associated with them and, if they do, only tests that have that tag can be run under the profile. Once again, if there is no eligible profile to run, debug, or gather coverage from a specific test, those options will not be shown in the UI.

```ts
// Create a new tag with an ID of "runnable"
const runnableTag = new TestTag('runnable');

// Assign it to a profile. Now this profile can only execute tests with that tag.
runProfile.tag = runnableTag;

// Add the "runnable" tag to all applicable tests.
for (const test of getAllRunnableTests()) {
  test.tags = [...test.tags, runnableTag];
}
```

Users can also filter by tags in the Test Explorer UI.

### Publish-only controllers

The presence of run profiles is optional. A controller is allowed to create tests, call `createTestRun` outside of the `runHandler`, and update tests' states in the run without having a profile. The common use case for this are controllers who load their results from an external source, like CI or summary files.

In this case, these controllers should usually pass the optional `name` argument to `createTestRun`, and `false` for the `persist` argument. Passing `false` here instructs VS Code not to retain the test result, like it would for runs in the editor, since these results can be reloaded from an external source externally.

```ts
const controller = vscode.tests.createTestController('myCoverageFileTests', 'Coverage File Tests');

vscode.commands.registerCommand('myExtension.loadTestResultFile', async file => {
  const info = await readFile(file);

  // set the controller items to those read from the file:
  controller.items.replace(readTestsFromInfo(info));

  // create your own custom test run, then you can immediately set the state of
  // items in the run and end it to publish results:
  const run = controller.createTestRun(new vscode.TestRunRequest(), path.basename(file), false);
  for (const result of info) {
    if (result.passed) {
      run.passed(result.item);
    } else {
      run.failed(result.item, new vscode.TestMessage(result.message));
    }
  }
  run.end();
});
```

## Migrating from the Test Explorer UI

If you have an existing extension using the Test Explorer UI, we suggest you migrate to the native experience for additional features and efficiency. We've put together a repo with an example migration of the Test Adapter sample in its [Git history][LK262]. You can view each step by selecting the commit name, starting from  `[1] Create a native TestController`.

In summary, the general steps are:

1. Instead of retrieving and registering a `TestAdapter` with the Test Explorer UI's `TestHub`, call `const controller = vscode.tests.createTestController(...)`.

1. Rather than firing `testAdapter.tests` when you discover or rediscover tests, instead create and push tests into `controller.items`, for example by calling `controller.items.replace` with an array of discovered tests that are created by calling `vscode.test.createTestItem`. Note that, as tests change, you can mutate properties on the test item and update their children, and changes will be reflected automatically in VS Code's UI.

1. To load tests initially, instead of waiting for a `testAdapter.load()` method call, set `controller.resolveHandler = () => { /* discover tests */ }`. See more information around how test discovery works in [Discovering Tests][LN240].

1. To run tests, you should create a [Run Profile][LN241] with a handler function that calls `const run = controller.createTestRun(request)`. Instead of firing a `testStates` event, pass `TestItem`s to methods on the `run` to update their state.

## Additional contribution points

The `testing/item/context` [menu contribution point][LN241] may be used to add menu items to Tests in the Test Explorer view. Place menu items in the `inline` group to have them inline. All other menu item groups will be displayed in a context menu accessible using the mouse right-click.

Additional [context keys][LN241] are available in the `when` clauses of your menu items: `testId`, `controllerId`, and `testItemHasUri`. For more complex `when` scenarios, where you want actions to be optionally available for different Test Items, consider using the [`in` conditional operator][LN242].

If you want to reveal a test in the Explorer, you can pass the test to the command `vscode.commands.executeCommand('vscode.revealTestInExplorer', testItem)`.


<a id="_api_extension-guides_custom-data-extension" ></a>

# /api/extension-guides/custom-data-extension
----------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: d40b8849-6a4e-428c-b463-c8d61f18136f
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to extend Visual Studio Code's HTML and CSS language support.
    ---

## Custom Data Extension

[Custom Data format][LK263] allows extension authors to easily extend VS Code's HTML / CSS language support without having to write code.

The two [Contribution Points][FX002] for using custom data in an extension are:

- `contributes.html.customData`
- `contributes.css.customData`

For example, by including this section in an extension's `package.json`:

```json
{
  "contributes": {
    "html": {
      "customData": ["./html.html-data.json"]
    },
    "css": {
      "customData": ["./css.css-data.json"]
    }
  }
}
```

VS Code will load the HTML/CSS entities defined in both files and provide language support such as auto-completion and hover information for those entities.

You can find the [custom-data-sample][LK264] at [microsoft/vscode-extension-samples][LK264].


<a id="_api_extension-guides_telemetry" ></a>

# /api/extension-guides/telemetry
----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: b31344d9-a1d9-4f87-82df-9c7151ef99e3
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how Visual Studio Code extensions can enable telemetry and respect user telemetry choices.
    ---

## Telemetry extension authors guide

Visual Studio Code collects usage data and sends it to Microsoft to help improve our products and services. Read our [privacy statement][LK265] and [telemetry documentation][LN243] to learn more.

This topic has guidelines for extension authors so that their extensions can conform to VS Code telemetry requirements and best practices.

>**Note**: If you don't want to send usage data to Microsoft, you can set the `telemetry.telemetryLevel` user [setting][LN243] to `off`.

## Telemetry module

The VS Code team maintains the [@vscode/extension-telemetry][LK266] npm module that provides a consistent and safe way to collect telemetry within VS Code. The module reports telemetry to [Azure Monitor and Application Insights][LK267] and guarantees backwards compatibility against previous versions of VS Code.

Follow this guide to set up [Azure Monitor][LK268] and get your Application Insights instrumentation key.

## Without the telemetry module

Extension authors who wish not to use Application Insights can utilize their own custom solution to send telemetry. In this case, it is still required that extension authors respect the user's choice by utilizing the `isTelemetryEnabled` and `onDidChangeTelemetryEnabled` API. By doing this, users will have one centralized place to control their telemetry settings.

## Custom telemetry setting

Extension may wish to give user control for extension specific telemetry independent of VS Code telemetry. In this case, we suggest that you introduce a specific extension setting. It is recommended that custom telemetry settings be tagged with `telemetry` and `usesOnlineServices` so that users can more easily query them in the Settings UI. Adding a custom telemetry setting is not an exemption from respecting a user's decision and the `isTelemetryEnabled` and `onDidChangeTelemetryEnabled` flag must always be respected. If `isTelemetryEnabled` reports false, even if your setting is enabled, telemetry must not be sent.

## telemetry.json

We understand that telemetry can be a sensitive topic for many users and we aim to be as transparent as possible. The core VS Code product and most first party extensions ship with a `telemetry.json` file in their root. This allows a user to use the VS Code CLI with the `--telemetry` flag to receive a dump of all telemetry that VS Code produces. Extension authors may include a `telemetry.json` file in their root and it will also appear in the CLI dump.

## Do's and Don'ts

✔️ Do

* Use the [@vscode/extension-telemetry][LK268] npm module if using application insights works for you.
* Otherwise, respect the `isTelemetryEnabled` and `onDidChangeTelemetryEnabled` API.
* Tag your custom telemetry setting with `telemetry` and `usesOnlineServices` if you have one.
* Collect as little telemetry as possible.
* Be as transparent as possible to your users about what you collect.

❌ Don't

* Introduce a custom telemetry collection solution that does not ask for user consent.
* Collect Personally identifiable information (PII).
* Collect more telemetry than necessary.
* Use just the `telemetry.telemetryLevel` setting, as it can sometimes be incorrect compared to `isTelemetryEnabled`.


<a id="_api_ux-guidelines_overview" ></a>

# /api/ux-guidelines/overview
------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 5b4962ff-2dc9-4201-aa95-46edb5a575b6
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Guidelines that showcase best practices for creating Visual Studio Code extensions.
    ---

## UX Guidelines

These guidelines cover the best practices for creating extensions that seamlessly integrate with VS Code's native interface and patterns. In these guidelines, you can expect to find:

- An outline of VS Code's overall UI architecture and elements
- Recommendations and examples for UI contributed by an extension
- Links to relevant guides and samples

Before diving into the details, it's important to understand how the various architectural UI parts of VS Code fit together and how and where your extension could contribute.

## Containers

The VS Code interface can roughly be divided into two main concepts: **containers** and **items**. Generally speaking, containers can be considered the larger sections of the VS Code interface that render one or more items:

[![Overview of Visual Studio Code containers elements][LN244]][LN245]

### Activity Bar

The [Activity Bar][LN245] is a core navigation surface in VS Code. Extensions can contribute items to the Activity Bar that function as [View Containers][LN245] that render [Views][LN245] in the Primary Sidebar.

### Primary Sidebar

The [Primary Sidebar][LN246] renders one or more [Views][LN246]. The Activity Bar and the Primary Sidebar are tightly coupled. Clicking on a contributed Activity Bar Item (read: View Container) opens up the Primary Sidebar where one or more View associated with that View Container will be rendered. A concrete example would be the Explorer. Clicking on the Explorer Item will open up the Primary Sidebar where the Folder(s), Timeline, and Outline Views are visible.

### Secondary Sidebar

The [Secondary Sidebar][LN247] also functions as a surface for rendering a View Container with Views. Users can drag views like the Terminal or the Problems view to the Secondary Sidebar to customize their layout.

### Editor

The Editor area contains one or more Editor Groups. Extensions can contribute [Custom Editors][LN248] or [Webviews][LN248] to open in the Editor area. They can also contribute [Editor Actions][LN248] to expose additional icon buttons in the Editor Toolbar.

### Panel

The [Panel][LN248] is another area for exposing View Containers. By default, Views like the Terminal, Problems, and Output can be viewed in a single tab at a time in the Panel. Users can also drag views into a split layout much like they can do in the Editor. Additionally, extensions can choose to add View Containers specifically to the Panel instead of the Activity Bar/Primary Sidebar.

### Status Bar

The [Status Bar][LN248] provides contextual information about the workspace and currently active file. It renders two groups of [Status Bar Items][LN249].

## Items

Extensions can add items to the various containers listed above.

[![Overview of Visual Studio Code containers elements][LN250]][LN251]

### View

[Views][LN251] can be contributed in the form of a [Tree View][LN252], [Welcome View][LN253], or [Webview View][LN254] and can be dragged around to other areas of the interface.

### View Toolbar

Extensions can expose View-specific [actions][LN255] that appear as buttons on a View Toolbar.

### Sidebar Toolbar

Actions scoped to an entire View Container can also be exposed in the [Sidebar Toolbar][LN256].

### Editor Toolbar

Extensions can contribute [Editor Actions][LN256] scoped to an editor directly in the Editor Toolbar.

### Panel Toolbar

The [Panel Toolbar][LN257] can expose options scoped to the currently selected View. For example the Terminal view exposes actions to add a new terminal, split the view layout, and more. Switching to the Problems view exposes a different set of actions.

### Status Bar Item

On the left, [Status Bar Items][LN257] are scoped to the entire Workspace. On the right, items are scoped to the active file.

## Common UI Elements

### Command Palette

Extensions can contribute Commands that appears in the [Command Palette][LN257] to quickly execute some functionality.

[![Overview of the Command Palette element][LN258]][LN258]

### Quick Pick

[Quick Picks][LN258] capture a user's input in several different ways. They can ask for a single selection, multiple selections, or even freeform text input.

![Overview of the Quick Pick element][LN259]

### Notifications

[Notifications][LN259] are used to communicate information, warning, and error messages to users. They can also be used to indicate progress.

![Overview of the Notification element][LN260]

### Webviews

[Webviews][LN260] can be used to display custom content and functionality for use cases that go beyond VS Code's "native" API.

![Overview of the Webview element][LN261]

### Context Menus

In contrast to the Command Palette's consistent location, [Context Menus][LN261] give users the ability to perform actions or configure something from a specific location.

![Overview of the Context Menu element][LN262]

### Walkthroughs

[Walkthroughs][LN262] provide a consistent experience for onboarding users to an extension via a multi-step checklist featuring rich content.

![Overview of the Walkthrough API][LN263]

### Settings

[Settings][LN263] enable users to configure options relevant to the extension.

![Overview of the Settings page][LN264]


<a id="_api_ux-guidelines_activity-bar" ></a>

# /api/ux-guidelines/activity-bar
----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 13b649f1-156f-489a-9c03-c2cff8060733
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for the Activity Bar in a Visual Studio Code extension.
    ---

## Activity Bar

The Activity Bar is a core navigation surface in VS Code. Extensions can contribute [View Containers][LN265] to the Activity Bar that appear as Activity Bar Items. Users can drag the item to other locations like the Panel to customize their layout.

**✔️ Do**

- Use an icon that matches the default Activity Bar item icon style
- Use a clear, obvious name for the [View Container][LN265] associated with the item

**❌ Don't**

- Duplicate an existing icon
- Use an Activity Bar item to open a Webview Panel

![Example of the Activity Bar][LN266]

## Links Resources

- [View Container contribution point][LN266]
- [View contribution point][LN266]


<a id="_api_ux-guidelines_sidebars" ></a>

# /api/ux-guidelines/sidebars
------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 05bd995d-946e-4046-8816-c6d50dccb1b4
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for the Side Bar in a Visual Studio Code extension.
    ---

## Sidebars

The Primary and Secondary Sidebars consists of one or more [Views][LN266] contributed by a [View Container][LN266]. Extensions can contribute Views to an existing View Container (for example, Explorer) or they can contribute an entirely new View Container.

**✔️ Do**

- Group related Views and content together
- Use clear, descriptive names for View Containers and their Views

**❌ Don't**

- Use an excessive number of View Containers. A single View Container (such as a Sidebar with Views unique to that extension) is generally enough for most extensions.
- Use an excessive number of Views (3-5 is a comfortable max for most screen sizes)
- Add content to the Sidebar that could be a simple Command.
- Repeat existing functionality

![Example of two sidebars][LN267]

## Primary Sidebar

Many extensions choose to contribute Views and/or View Containers to the Primary Sidebar given the high visibility it gives content. Use good judgement when adding content here—too much contributed UI can lead to a cluttered experience that can confuse your users.

![Example of the primary sidebar][LN268]

## Secondary Sidebar

As the name implies, the Secondary Sidebar is normally considered a auxiliary location for Views. While extensions cannot contribute Views directly to it by default, users can drag Views from the Primary Sidebar or the Panel to customize their layout.

![Example of the secondary sidebar][LN269]

## Sidebar Toolbars

By default, View Containers in the Sidebar with more than one View will feature a single `...` icon button in the Sidebar Toolbar to show and hide each View. That looks something like this:

![Sidebar with two views][LN270]

However, if only one View is used, the Sidebar will automatically consolidate the UI to use the Sidebar Toolbar to render all of the actions specific to that View. In place of the `...` button, the two actions associated with the 'Notes' View are rendered in its place:

![Sidebar with a single view and toolbar with actions][LN271]

As with other toolbars, be careful to not add too many actions to reduce clutter and confusion. If possible, use an existing product icon paired with a descriptive Command name.

## Links

- [View Container contribution point][LN271]
- [View contribution point][LN271]
- [View Actions extension guide][LN271]
- [Welcome View contribution point][LN272]
- [Tree View extension sample][LK268]
- [Webview View extension sample][LK268]
- [Welcome View extension sample][LK269]


<a id="_api_ux-guidelines_panel" ></a>

# /api/ux-guidelines/panel
---------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 06ce3b57-9fd5-428a-98aa-d730edbd2728
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for the Panel Bar in a Visual Studio Code extension.
    ---

## Panel

The Panel functions as another main area to display [View Containers][LN272].

**✔️ Do**

- Render Views in the Panel that benefit from more horizontal space
- Use for Views that provide supporting functionality

**❌ Don't**

- Use for Views that are meant to be always visible since users often minimize the Panel
- Render custom Webview content that fails to resize/reflow properly when dragged to other View Containers (like the Primary or Secondary Sidebars).

![Example of a panel][LN273]

## Panel Toolbar

The Panel Toolbar can expose options scoped to the currently selected View. For example the Terminal view exposes [View Actions][LN273] to add a new terminal, split the view layout, and more. Switching to the Problems view exposes a different set of actions. Similar to the [Sidebar Toolbar][LN274], the toolbar will only render if there is just a single View. If more than one View is used, each View will render its own toolbar.

**✔️ Do**

- Use an existing [product icon][LN274] if available
- Provide clear, useful tooltips

**❌ Don't**

- Don't add an excessive number of icon buttons. Consider using a [Context Menu][LN274] if more options are needed for a specific button.
- Don't duplicate the default Panel icons (collapse/expand, close, etc.)

![Example of a panel toolbar with a single view][LN275]

*In this example, the single View rendered in the Panel renders its View Actions in the main Panel Toolbar.*

![Example of a panel toolbar with multiple views][LN276]

*In this example, multiple Views are used, so each View exposes its own specific View Actions.*

## Links

- [View Container contribution point][LN276]
- [View contribution point][LN276]
- [View Actions extension guide][LN276]


<a id="_api_ux-guidelines_status-bar" ></a>

# /api/ux-guidelines/status-bar
--------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 2d16d367-2831-47ca-8f0e-22e3e5fd24bc
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for status bar and status bar items in a Visual Studio Code extension.
    ---

## Status Bar

The [Status Bar][LN276] sits at the bottom of the VS Code workbench and displays information and actions that relate to your workspace. Items are placed into two groups: Primary (left) and Secondary (right). Items that relate to the entire workspace (status, problems/warnings, sync) go on the left and items that are secondary or contextual (language, spacing, feedback) go on the right. Limit the number of items added, as other extensions contribute to the same area.

![Status Bar example][LN277]

**✔️ Do**

* Use short text labels
* Use icons only when necessary
* Use icons only for clear metaphors
* Place primary (global) items on the left
* Place secondary (contextual) items on the right

**❌ Don't**

* Add custom colors
* Add more than one icon (unless necessary)
* Add more than one item (unless necessary)

## Status Bar Items

![Status Bar Item][LN278]

*This example shows an item contributed by the GitHub Pull Requests and Issues extension. It relates to the entire workspace, so it is placed on the left.*

### Progress Status Bar item

When needing to show discreet progress (progress happening in the background), it's recommended to show a Status Bar item with the loading icon (you can also add spin animation). If progress needs to be elevated for user attention, we recommend moving to a progress notification.

![Status Bar Progress][LN279]

*This example shows a progress Status Bar item that is discreet.*


### Error and Warning Status Bar Items

If you need to show an item that is highly visible for warning or error purposes, you can configure a Status Bar Item to use a warning or error background color. Only use this pattern as a last resort and only for special cases given their prominence in the Status Bar.

![Status Bar Error][LN280]

*This example uses the error Status Bar Item for showing a blocking error in the file.*

![Status Bar Warning][LN281]

*This example uses the warning Status Bar Item for showing a warning in the file.*

## Links

* [Status Bar Item API reference][LN281]
* [Status Bar extension sample][LK269]


<a id="_api_ux-guidelines_views" ></a>

# /api/ux-guidelines/views
---------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 1e37b895-d0b3-45b8-a071-107bd665248e
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for views in a Visual Studio Code extension.
    ---

## Views

[Views][LN281] are containers of content that can appear in the Sidebar or Panel. Views can contain Tree Views, Welcome Views, or Webview Views and can also display View Actions. Views can also be rearranged by the user or moved to another View Container (for example, from the Primary Sidebar to the Secondary Sidebar). Limit the number of Views created as other extensions can contribute in the same View Container.

**✔️ Do**

* Use existing icons when possible
* Use file icons for language files
* Use a Tree View for displaying data
* Add an icon to every View (in case it is moved to the Activity Bar or Secondary Sidebar—both of which use icons to represent the View)
* Keep the number of Views to a minimum
* Keep the length of names to a minimum
* Limit the use of custom Webview Views

**❌ Don't**

* Repeat existing functionality
* Use tree items as single action items (for example, firing a Command on click)
* Use custom Webview Views if not necessary
* Use a Activity Bar Item (View Container) to open a Webview in the Editor

![Views example][LN282]

*This example uses a Tree View to display a flat list of Tree View Items.*

## View Locations

Views can be placed in [existing View Containers][LN282], such as the File Explorer, Source Control (SCM) and Debug View Containers. They can also be added to a custom [View Container][LN282] via the Activity Bar. In addition, Views can be added to any View Container in the Panel. They can also be dragged to the Secondary Sidebar.

![View locations][LN283]

## View Containers

View Containers, as the name implies, are the "parent" container in which Views are rendered. Extensions can contribute custom View Containers to the [Activity Bar][LN283]/[Primary Sidebar][LN283] or to the Panel. Users can drag an entire View Container from the Activity Bar to the Panel (or vice versa) and can also move individual Views.

![Example of a View Container][LN284]

*This is an example of a View Container placed in the Activity Bar/Primary Sidebar*

![Example of a View Container in a Panel][LN285]

*This is an example of a View Container placed in the Panel*

## Tree Views

Tree Views are a powerful and flexible format to display content in a View. Extensions can add everything from simple flat lists to deeply nested trees.

* Use descriptive labels to give context to items (if applicable)
* Use product icons to distinguish between item types (if applicable)

**❌ Don't**

* Use Tree View Items as buttons to fire Commands
* Avoid deep nesting unless necessary. A few levels of folders/items is a good balance for most situations.
* Add more than three actions to an item

![Example of a Tree View][LN286]

## Welcome Views

When a view is empty, you can [add content to guide users][LN286] on how to use your extension or get started. Links and icons are supported in Welcome views.

**✔️ Do**

* Use Welcome views only when necessary
* Use links instead of buttons when possible
* Use buttons only for primary actions
* Use clear link text to indicate the link destination
* Limit the length of the content
* Limit the number of Welcome views
* Limit the number of buttons in views

**❌ Don't**

* Use buttons if not necessary
* Use Welcome views for promotions
* Use generic "read more" as link text

![Welcome Views][LN287]

*This example shows one primary action for the extension with an additional link to documentation.*

## Views With Progress

You can also [show progress in a view][LN287] by referencing the view's ID.

![View with progress][LN288]

## View Actions

Views can expose [View Actions][LN288] on the View Toolbar. Be careful not to add too many actions to avoid noise and confusion. Using the built-in product icons helps an extension fit in alongside the native UI. However, an SVG icon can be supplied if a custom icon is needed.

![Example of View Actions][LN289]

## Links

* [View Container API reference][LN289]
* [View API reference][LN289]
* [View Actions extension guide][LN289]
* [Tree View extension sample][LK269]
* [Welcome View extension sample][LK269]
* [Webview View extension sample][LK269]


<a id="_api_ux-guidelines_editor-actions" ></a>

# /api/ux-guidelines/editor-actions
------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: ce5c9fff-df86-454a-b4e8-4ae05c8158e2
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for editor actions in a Visual Studio Code extension.
    ---

## Editor Actions

[Editor actions][LN289] can appear in the editor toolbar. You can either add an icon as a quick action or add menu item under the overflow menu (**...**).

**✔️ Do**

* Show only when contextually appropriate
* Use icons from the icon library
* Use the overflow menu for secondary actions

❌ Don't

* Add more than one icon
* Add custom colors
* Use emojis

![Editor Actions][LN290]

*This example from the GitHub Pull Requests and Issues extension opens a diff view and only shows on files with changes.*

## Links

* [Custom Editor extension guide][LN290]
* [Custom Editor API reference][LN290]
* [Custom Editor extension sample][LK270]
* [Webview extension guide][LN290]
* [Webview extension sample][LK270]


<a id="_api_ux-guidelines_quick-picks" ></a>

# /api/ux-guidelines/quick-picks
---------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 85918f63-ff5d-4ab8-8a18-26ad00618eff
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for quick picks used in a Visual Studio Code extension.
    ---

## Quick Picks

[Quick Picks][LN291] are an easy way to perform actions and receive input from the user. This is helpful when selecting a configuration option, needing to filter content, or picking from a list of items.

![Quick Pick example][LN291]

**✔️ Do**

* Use icons for clear metaphors
* Use the description for displaying the current items (if applicable)
* Use the detail for providing (brief) additional context
* Use the multi-step pattern for a series of basic inputs
* Provide an option to create a new item when picking from a list (if applicable)
* Use a title for multi-step quick picks
* Use a title for quick picks without a text input
* Use a title for quick picks asking for text input (use the placeholder to show a hint or example)
* Use a title for quick picks featuring global buttons (e.g. a refresh icon)

❌ Don't

* Repeat existing functionality
* Use the same icon for multiple items
* Use more than six icons in a list
* Use a title when the placeholder can describe the purpose on its own
* Use inputs without a placeholder

## Multiple Steps

Quick Picks can be configured to feature multiple steps. Use these when you need to capture related-but-separate selections in a single flow. Avoid using quick picks for long flows with many steps—they aren't well suited to function as a wizard or similarly complex experience.

![Multi-step Quick Pick example][LN292]

*Notes the "1/3" text in the Quick Pick title that indicates the current and total number of steps in the flow.*

## Multiple Selections

Use a multi-select quick pick for closely-related selections that need to be selected in one step.

![Multi-step Quick Pick example][LN293]

## Title

Quick Picks can be also be configured to show a title bar above the main input and selection UI. Use a title when the user needs more context for the selection being made. Avoid using a title that uses a label already used in the Quick Pick's input placeholder.

![Multi-step Quick Pick example][LN294]

## Using Separators

Quick Pick Items can be grouped into clear sections using Quick Pick Separators. These feature a divider and label to clearly show the section. Use separators if the extension features a quick pick containing multiple obvious groups of selections.

![Quick Pick with separators][LN295]

## Links

* [Quick Pick API reference][LN295]
* [Quick Pick Item API reference][LN296]
* [Quick Pick extension sample][LK270]


<a id="_api_ux-guidelines_command-palette" ></a>

# /api/ux-guidelines/command-palette
-------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: bf0d9a5e-897b-450a-adf4-3c8ca9b8e9de
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for the Command Palette in a Visual Studio Code extension.
    ---

## Command Palette

The [Command Palette][LN296] is where all Commands are found. It's important that your command names are labeled appropriately so users can easily find them.

**✔️ Do**

* Add keyboard shortcuts where appropriate
* Use clear names for commands
* Group commands together in the same category

❌ Don't

* Overwrite existing keyboard shortcuts
* Use emojis in command names

![Command Palette][LN296]

*This example features commands each displaying a clear `category` prefix, for example "GitHub Issues".*

## Links

* [Commands API reference][LN296]
* [Commands extension guide][LN296]
* [Hello World extension sample][LK270]


<a id="_api_ux-guidelines_notifications" ></a>

# /api/ux-guidelines/notifications
-----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 92904eb4-6ef0-4801-80d2-6c2c3326ad82
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for notifications in a Visual Studio Code extension.
    ---

## Notifications

[Notifications][LN297] display brief information that is surfaced from the bottom right of VS Code.

![Example of a notification][LN297]

You can send three types of notifications:

* [Information][LN297]
* [Warning][LN297]
* [Error][LN297]

It's important to limit the number of notifications sent in order to respect the user's attention. To help guide your decision on whether or not you should show a notification, please follow our notification decision tree:

![Show a multi-step quick pick if multi step user input is immediately needed. If user input is immediately needed but it is not multi-step show a modal dialog. If you need to show progress that is low priority show the progress in the status bar. If the interaction is triggered by the user find the right moment to show the notification and only then show it. If you need to show multiple notifications try to combine them into one. If the user does not really need to be notified consider to not show anything and relax.][LN298]

## Notification examples

![Information notification][LN300]

*This notification appears after the user runs an **Update version** command. Notice that there are no additional actions and is purely informational.*

![Warning notification][LN301]

*This example highlights an issue with a feature that requires user input and shows actions to resolve the issue.*

![Error notification][LN302]

*This example shows a failure notification with an action to resolve the issue.*

**✔️ Do**

* Respect the user's attention by only sending notifications when absolutely necessary
* Add a **Do not show again** option for every notification
* Show one notification at a time

**❌ Don't**

* Send repeated notifications
* Use for promotion
* Ask for feedback on the first install
* Show actions if there aren't any

## Progress notification

When needing to display progress for an indeterminate timeframe (for example, setting up an environment), you can use the progress notification. This type of global progress notification should be used as a last resort as progress is best kept within context (within a view or editor).

**✔️ Do**

* Show a link to see more details (like logs)
* Show information as setup progresses (initializing, building, etc.)
* Provide an action to cancel the operation (if applicable)
* Add timers for timed out scenarios

**❌ Don't**

* Leave a notification running in progress

![Progress notification][LN303]

*This example uses the progress notification to show the setup involved for a remote connection, while also providing a link to the output logs (**details**).*

## Links

* [Hello World extension sample][LK270]
* [Notifications extension sample][LK271]


<a id="_api_ux-guidelines_webviews" ></a>

# /api/ux-guidelines/webviews
------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 1c1f6d51-5914-44fa-ae10-0360be0ae2a3
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for webviews in a Visual Studio Code extension.
    ---

## Webviews

If you need to display custom functionality that is beyond what the VS Code API supports, you can use [webviews][LN303], which are fully customizable. It's important to understand that webviews should only be used if you absolutely need them.

**✔️ Do**

* Only use webviews when absolutely necessary
* Activate your extension only when contextually appropriate
* Open webviews only for the active window
* Ensure all elements in the view are themeable (see the [webview-view-sample][LK272] and [color tokens][LN303] documentation)
* Ensure your views follow [accessibility guidance][LN304] (color contrast, ARIA labels, keyboard navigation)
* Use command actions in the toolbar and in the view

❌ Don't

* Use for promotions (upgrades, sponsors, etc.)
* Use for wizards
* Open on every window
* Open on extension updates (ask via a Notification instead)
* Add functionality that is unrelated to the editor or workspace
* Repeat existing functionality (Welcome page, Settings, configuration, etc.)

## Webview examples

**Simple Browser**

This extension opens a browser preview for the editor to the side.

![Weview sample - Browser][LN305]

*This example shows VS Code Web being developed right inside VS Code. A Webview panel is used to render a browser-like window.*

**Pull Request**

This extension shows pull requests for the repository of the workspace in a custom tree view and then uses a webview for a detail view of the pull request.

![Webview sample - Pull Request][LN306]

## Webview views

You can also place webviews into any view container (sidebar or panel) and these elements are called [webview views][LN306]. The same webview guidance applies to webview views.

![Webview View][LN307]

*This webview view shows content for creating a pull request that uses dropdowns, inputs, and buttons.*

## Links

* [Webview extension guide][LN307]
* [Webview extension sample][LK273]
* [Webview View extension sample][LK273]


<a id="_api_ux-guidelines_context-menus" ></a>

# /api/ux-guidelines/context-menus
-----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: fdd5476c-13e2-4f78-9dd3-0157eed36a29
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for using context menus in a Visual Studio Code extension.
    ---

## Context Menus

[Menu items][LN307] appear in views, actions, and right-click menus. It's important that the grouping of menus remain consistent. If your extension has actions that relate to files, place your actions in the File Explorer context menu (when appropriate). If an extension has actions for certain file types, only display it for those items.

**✔️ Do**

* Show actions when contextually appropriate
* Group similar actions together
* Place large groups of actions into a submenu

❌ Don't

* Show actions for every file without context

![Context Menu][LN307]

*This example places a **Copy GitHub Permalink** next to the other copy commands. This action only appears on files that are from a GitHub repository.*

## Links

* [Context Menu API reference][LN307]


<a id="_api_ux-guidelines_walkthroughs" ></a>

# /api/ux-guidelines/walkthroughs
----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: e8e157c4-ac6e-4278-9994-953212a1bb88
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for walkthroughs in a Visual Studio Code extension.
    ---

## Walkthroughs

Walkthroughs provide a consistent experience for onboarding users to an extension via a multi-step checklist featuring rich content.

**✔️ Do**

- Use helpful images to add context to the current Walkthrough step.
- Make sure images work across different color themes. Use SVGs with VS Code's [Theme Colors][LN307] if possible. The [Visual Studio Code Color Mapper][LK274] Figma plugin enables easy theming of SVGs.
- Provide actions (for example, View all Commands) for each step. Use verbs where possible.

❌ Don't

- Add an excessive number of steps in a single walkthrough
- Add multiple walkthroughs unless absolutely necessary

![Example of walkthrough][LN307]

## Links

- [Walkthroughs contribution point][LN308]
- [SVG with Theme Color CSS variable example][LK275]
- [Visual Studio Code Color Mapper][LK275]


<a id="_api_ux-guidelines_settings" ></a>

# /api/ux-guidelines/settings
------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 9f5daebb-1566-46b8-a04d-0fd6c5d4a926
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: UX guidelines for settings contributed by a Visual Studio Code extension.
    ---

## Settings

[Settings][LN308] are how a user can configure your extension. Settings can be inputs boxes, booleans, dropdowns, lists, key/value pairs. If your extension requires the user to configure specific settings, you can open the Settings UI and query your extension setting via the setting ID.

**✔️ Do**

* Add default values to each setting
* Add clear descriptions to each setting
* Link to documentation for complicated settings
* Link to additional settings that are related
* Link to setting IDs when needing the user to configure specific settings

❌ Don't

* Create your own settings page/webview
* Create long descriptions

![Settings][LN308]

*This example links to a specific setting using the setting ID.*

## Links

* [Configuration contribution point][LN308]


<a id="_api_language-extensions_overview" ></a>

# /api/language-extensions/overview
------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 8b70dba5-f71d-46dd-8da1-f5d44b9a6a96
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to write a Language Extension (plug-in) to add support for a programming language in Visual Studio Code.
    ---

## Language Extensions Overview

Visual Studio Code provides smart editing features for different programming languages through Language Extensions. VS Code doesn't provide built-in language support but offers a set of APIs that enable rich language features. For example, it has a bundled [HTML][LK276] extension that allows VS Code to show syntax highlighting for HTML files. Similarly, when you type `console.` and `log` shows up in IntelliSense, it is the [Typescript Language Features][LK277] extension at work.

Language features can be roughly put into two categories:

## Declarative language features

Declarative language features are defined in configuration files. Examples include [html][LK277], [css][LK278] and [typescript-basic][LK279] extensions bundled with VS Code, which offer a subset of the following Declarative Language Features:

- Syntax highlighting
- Snippet completion
- Bracket matching
- Bracket autoclosing
- Bracket autosurrounding
- Comment toggling
- Auto indentation
- Folding (by markers)

We have three guides for writing Language Extensions that provide Declarative Language Features.

- [Syntax Highlight guide][LN308]: VS Code uses TextMate grammar for syntax highlighting. This guide will walk you through writing a simple TextMate grammar and converting it into a VS Code extension.
- [Snippet Completion guide][LN308]: This guide explains how to bundle a set of snippets into an extension.
- [Language Configuration guide][LN308]: VS Code allows extensions to define a **language configuration** for any programming language. This file controls basic editing features such as comment toggling, bracket matching/surrounding and region folding (legacy).

## Programmatic language features

Programmatic Language Features include auto completion, error checking, and jump to definition. These features are often powered by a Language Server, a program that analyzes your project to provide the dynamic features.
One example is the [`typescript-language-features`][LK279] extension bundled in VS Code. It utilizes the [TypeScript Language Service][LK280] to offer Programmatic Language Features such as:

- Hover information ([`vscode.languages.registerHoverProvider`][LN309])
- Auto completion ([`vscode.languages.registerCompletionItemProvider`][LN310])
- Jump to definition ([`vscode.languages.registerDefinitionProvider`][LN311])
- Error checking
- Formatting
- Refactoring
- Folding

Here is a complete list of [Programmatic Language Features][LN311].

![multi-ls][LN312]

## Language Server Protocol

By standardizing the communication between a Language Server (a static code analysis tool) and a Language Client (usually a source code editor), the [Language Server Protocol][LK280] allows extension authors to write one code analysis program and reuse it in multiple editors.

In the [Programmatic Language Features][LN312] listing, you can find a listing of all VS Code language features and how they map to the [Language Server Protocol Specification][LK281].

We offer an in-depth guide that explains how to implement a Language Server extension in VS Code:

- [Language Server Extension Guide][LN312]

![multi-editor][LN313]

## Special cases

### Multi-root workspace support

When the user opens a [multi-root workspace][LN314], you might need to adapt your Language Server extensions accordingly. This topic discusses multiple approaches to supporting multi-root workspaces.

### Embedded languages

Embedded languages are common in web development. For example, CSS/JavaScript inside HTML, and GraphQL inside JavaScript/TypeScript. The [Embedded languages][LN314] topic discusses how you can make language features available to embedded languages.


<a id="_api_language-extensions_syntax-highlight-guide" ></a>

# /api/language-extensions/syntax-highlight-guide
--------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 2bb06188-d394-4b98-872c-0bf26c8a674d
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to syntax highlighting
    ---

## Syntax Highlight Guide

Syntax highlighting determines the color and style of source code displayed in the Visual Studio Code editor. It is responsible for colorizing keywords like `if` or `for` in JavaScript differently than strings and comments and variable names.

There are two components to syntax highlighting:

- [Tokenization][LN315]: Breaking text into a list of tokens
- [Theming][LN315]: Using themes or user settings to map the tokens to specific colors and styles

Before diving into the details, a good start is to play with the [scope inspector][LN316] tool and explore what tokens are present in a source file and what theme rules they match to. To see both semantic and syntax token, use a built-in theme (for example, Dark+) on a TypeScript file.

## Tokenization

The tokenization of text is about breaking the text into segments and to classify each segment with a token type.

VS Code's tokenization engine is powered by [TextMate grammars][tm-grammars]. TextMate grammars are a structured collection of regular expressions and are written as a plist (XML) or JSON files. VS Code extensions can contribute grammars through the `grammars` contribution point.

The TextMate tokenization engine runs in the same process as the renderer and tokens are updated as the user types. Tokens are used for syntax highlighting, but also to classify the source code into areas of comments, strings, regex.

Starting with release 1.43, VS Code also allows extensions to provide tokenization through a [Semantic Token Provider][LN317]. Semantic providers are typically implemented by language servers that have a deeper understanding of the source file and can resolve symbols in the context of the project. For example, a constant variable name can be rendered using constant highlighting throughout the project, not just at the place of its declaration.

Highlighting based on semantic tokens is considered an addition to the TextMate-based syntax highlighting. Semantic highlighting goes on top of the syntax highlighting. And as language servers can take a while to load and analyze a project, semantic token highlighting may appear after a short delay.

This article focuses on the TextMate-based tokenization. Semantic tokenization and theming are explained in the [Semantic Highlighting guide][LN318].

### TextMate grammars

VS Code uses [TextMate grammars][tm-grammars] as the syntax tokenization engine. Invented for the TextMate editor, they have been adopted by many other editors and IDEs due to large number of language bundles created and maintained by the Open Source community.

TextMate grammars rely on [Oniguruma regular expressions][LK282] and are typically written as a plist or JSON. You can find a good introduction to TextMate grammars [here][LK283], and you can take a look at existing TextMate grammars to learn more about how they work.

### TextMate tokens and scopes

Tokens are one or more characters that are part of the same program element. Example tokens include operators such as `+` and `*`, variable names such as `myVar`, or strings such as `"my string"`.

Each token is associated with a scope that defines the context of the token. A scope is a dot separated list of identifiers that specify the context of the current token. The `+` operation in JavaScript, for example, has the scope `keyword.operator.arithmetic.js`.

Themes map scopes to colors and styles to provide syntax highlighting. TextMate provides [list of common scopes][tm-grammars] that many themes target. In order to have your grammar as broadly supported as possible, try to build on existing scopes rather than defining new ones.

Scopes nest so that each token is also associated with a list of parent scopes. The example below uses the [scope inspector][LN318] to show the scope hierarchy for the `+` operator in a simple JavaScript function. The most specific scope is listed at the top, with more general parent scopes listed below:

![syntax highlighting scopes][LN319]

Parent scope information is also used for theming. When a theme targets a scope, all tokens with that parent scope will be colorized unless the theme also provides a more specific colorization for their individual scopes.

### Contributing a basic grammar

VS Code supports json TextMate grammars. These are contributed through the `grammars` [contribution point][LN319].

Each grammar contribution specifies: the identifier of the language the grammar applies to, the top-level scope name for the tokens of the grammar, and the relative path to a grammar file. The example below shows a grammar contribution for a fictional `abc` language:

```json
{
  "contributes": {
    "languages": [
      {
        "id": "abc",
        "extensions": [".abc"]
      }
    ],
    "grammars": [
      {
        "language": "abc",
        "scopeName": "source.abc",
        "path": "./syntaxes/abc.tmGrammar.json"
      }
    ]
  }
}
```

The grammar file itself consists of a top-level rule. This is typically split into a `patterns` section that lists the top-level elements of the program and a `repository` that defines each of the elements. Other rules in the grammar can reference elements from the `repository` using `{ "include": "#id" }`.

The example `abc` grammar marks the letters `a`, `b`, and `c` as keywords, and nestings of parens as expressions.

```json
{
  "scopeName": "source.abc",
  "patterns": [{ "include": "#expression" }],
  "repository": {
    "expression": {
      "patterns": [{ "include": "#letter" }, { "include": "#paren-expression" }]
    },
    "letter": {
      "match": "a|b|c",
      "name": "keyword.letter"
    },
    "paren-expression": {
      "begin": "\\(",
      "end": "\\)",
      "beginCaptures": {
        "0": { "name": "punctuation.paren.open" }
      },
      "endCaptures": {
        "0": { "name": "punctuation.paren.close" }
      },
      "name": "expression.group",
      "patterns": [{ "include": "#expression" }]
    }
  }
}
```

The grammar engine will try to successively apply the `expression` rule to all text in the document. For a simple program such as:

```
a
(
    b
)
x
(
    (
        c
        xyz
    )
)
(
a
```

The example grammar produces the following scopes (listed left-to-right from most specific to least specific scope):

```
a               keyword.letter, source.abc
(               punctuation.paren.open, expression.group, source.abc
    b           keyword.letter, expression.group, source.abc
)               punctuation.paren.close, expression.group, source.abc
x               source.abc
(               punctuation.paren.open, expression.group, source.abc
    (           punctuation.paren.open, expression.group, expression.group, source.abc
        c       keyword.letter, expression.group, expression.group, source.abc
        xyz     expression.group, expression.group, source.abc
    )           punctuation.paren.close, expression.group, expression.group, source.abc
)               punctuation.paren.close, expression.group, source.abc
(               punctuation.paren.open, expression.group, source.abc
a               keyword.letter, expression.group, source.abc
```

Note that text that is not matched by one of the rules, such as the string `xyz`, is included in the current scope. The last parenthesis at the end of the file is part of the `expression.group` even if the `end` rule is not matched, as `end-of-document` was found before the `end` rule was.

### Embedded languages

If your grammar includes embedded languages within the parent language, such as CSS style blocks in HTML, you can use the `embeddedLanguages` contribution point to tell VS Code to treat the embedded language as distinct from the parent language. This ensures that bracket matching, commenting, and other basic language features work as expected in the embedded language.

The `embeddedLanguages` contribution point maps a scope in the embedded language to a top-level language scope. In the example below, any tokens in the `meta.embedded.block.javascript` scope will be treated as JavaScript content:

```json
{
  "contributes": {
    "grammars": [
      {
        "path": "./syntaxes/abc.tmLanguage.json",
        "scopeName": "source.abc",
        "embeddedLanguages": {
          "meta.embedded.block.javascript": "javascript"
        }
      }
    ]
  }
}
```

Now if you try to comment code or trigger snippets inside a set of tokens marked `meta.embedded.block.javascript`, they will get the correct `//` JavaScript style comment and the correct JavaScript snippets.

### Developing a new grammar extension

To quickly create a new grammar extension, use [VS Code's Yeoman templates][LN319] to run `yo code` and select the `New Language` option:

![Selecting the 'new language' template in 'yo code'][LN320]

Yeoman will walk you through some basic questions to scaffold the new extension. The important questions for creating a new grammar are:

- `Language id` - A unique identifier for your language.
- `Language name` - A human readable name for your language.
- `Scope names` - Root TextMate scope name for your grammar.

![Filling in the 'new language' questions][LN321]

The generator assumes that you want to define both a new language and a new grammar for that language. If you are creating a grammar for an existing language, just fill these in with your target language's information and be sure to delete the `languages` contribution point in the generated `package.json`.

After answering all the questions, Yeoman will create a new extension with the structure:

![A new language extension][LN322]

Remember, if you are contributing a grammar to a language that VS Code already knows about, be sure to delete the `languages` contribution point in the generated `package.json`.

#### Converting an existing TextMate grammar

`yo code` can also help convert an existing TextMate grammar to a VS Code extension. Again, start by running `yo code` and selecting `Language extension`. When asked for an existing grammar file, give it the full path to either a `.tmLanguage` or `.json` TextMate grammar file:

![Converting an existing TextMate grammar][LN323]

#### Using YAML to write a grammar

As a grammar grows more complex, it can become difficult to understand and maintain it as json. If you find yourself writing complex regular expressions or needing to add comments to explain aspects of the grammar, consider using yaml to define your grammar instead.

Yaml grammars have the exact same structure as a json based grammar but allow you to use yaml's more concise syntax, along with features such as multi-line strings and comments.

![A yaml grammar using multiline strings and comments][LN324]

VS Code can only load json grammars, so yaml based grammars must be converted to json. The [`js-yaml` package][LK284] and command-line tool makes this easy.

```bash
# Install js-yaml as a development only dependency in your extension
$ npm install js-yaml --save-dev

# Use the command-line tool to convert the yaml grammar to json
$ npx js-yaml syntaxes/abc.tmLanguage.yaml > syntaxes/abc.tmLanguage.json
```

### Injection grammars

Injection grammars let you extend an existing grammar. An injection grammar is a regular TextMate grammar that is injected into a specific scope within an existing grammar. Example applications of injection grammars:

- Highlighting keywords such as `TODO` in comments.
- Add more specific scope information to an existing grammar.
- Adding highlighting for a new language to Markdown fenced code blocks.

#### Creating a basic injection grammar

Injection grammars are contributed though the `package.json` just like regular grammars. However, instead of specifying a `language`, an injection grammar uses `injectTo` to specify a list of target language scopes to inject the grammar into.

For this example, we'll create a simple injection grammar that highlights `TODO` as a keyword in JavaScript comments. To apply our injection grammar in JavaScript files, we use the `source.js` target language scope in `injectTo`:

```json
{
  "contributes": {
    "grammars": [
      {
        "path": "./syntaxes/injection.json",
        "scopeName": "todo-comment.injection",
        "injectTo": ["source.js"]
      }
    ]
  }
}
```

The grammar itself is a standard TextMate grammar except for the top level `injectionSelector` entry. The `injectionSelector` is a scope selector that specifies which scopes the injected grammar should be applied in. For our example, we want to highlight the word `TODO` in all `//` comments. Using the [scope inspector][LN324], we find that JavaScript's double slash comments have the scope `comment.line.double-slash`, so our injection selector is `L:comment.line.double-slash`:

```json
{
  "scopeName": "todo-comment.injection",
  "injectionSelector": "L:comment.line.double-slash",
  "patterns": [
    {
      "include": "#todo-keyword"
    }
  ],
  "repository": {
    "todo-keyword": {
      "match": "TODO",
      "name": "keyword.todo"
    }
  }
}
```

The `L:` in the injection selector means that the injection is added to the left of existing grammar rules. This basically means that our injected grammar's rules will be applied before any existing grammar rules.

#### Embedded languages

Injection grammars can also contribute embedded languages to their parent grammar. Just like with a normal grammar, an injection grammar can use `embeddedLanguages` to map scopes from the embedded language to a top-level language scope.

An extension that highlights SQL queries in JavaScript strings, for example, may use `embeddedLanguages` to make sure all token inside the string marked `meta.embedded.inline.sql` are treated as SQL for basic language features such as bracket matching and snippet selection.

```json
{
  "contributes": {
    "grammars": [
      {
        "path": "./syntaxes/injection.json",
        "scopeName": "sql-string.injection",
        "injectTo": ["source.js"],
        "embeddedLanguages": {
          "meta.embedded.inline.sql": "sql"
        }
      }
    ]
  }
}
```

#### Token types and embedded languages

There is one additional complication for injection languages embedded languages: by default, VS Code treats all tokens within a string as string contents and all tokens with a comment as token content. Since features such as bracket matching and auto closing pairs are disabled inside of strings and comments, if the embedded language appears inside a string or comment, these features will also be disabled in the embedded language.

To override this behavior, you can use a `meta.embedded.*` scope to reset VS Code's marking of tokens as string or comment content. It is a good idea to always wrap embedded language in a `meta.embedded.*` scope to make sure VS Code treats the embedded language properly.

If you can't add a `meta.embedded.*` scope to your grammar, you can alternatively use `tokenTypes` in the grammar's contribution point to map specific scopes to content mode. The `tokenTypes` section below ensures that any content in the `my.sql.template.string` scope is treated as source code:

```json
{
  "contributes": {
    "grammars": [
      {
        "path": "./syntaxes/injection.json",
        "scopeName": "sql-string.injection",
        "injectTo": ["source.js"],
        "embeddedLanguages": {
          "my.sql.template.string": "sql"
        },
        "tokenTypes": {
          "my.sql.template.string": "other"
        }
      }
    ]
  }
}
```

## Theming

Theming is about assigning colors and styles to tokens. Theming rules are specified in color themes, but users can customize the theming rules in the user settings.

TextMate theme rules are defined in `tokenColors` and have the same syntax as regular TextMate themes. Each rule defines a TextMate scope selector and a resulting color and style.

When evaluating the color and style of a token, the current token's scope is matched against the rule's selector to find the most specific rule for each style property (foreground, bold, italic, underline)

The [Color Theme guide][LN325] describes how to create a color theme. Theming for semantic tokens is explained in the [Semantic Highlighting guide][LN326].

## Scope inspector

VS Code's built-in scope inspector tool helps debug grammars and semantic tokens. It displays the scopes for the token and the semantic tokens at the current position in a file, along with metadata about which theme rules apply to that token.

Trigger the scope inspector from the Command Palette with the `Developer: Inspect Editor Tokens and Scopes` command or [create a keybinding][LN326] for it:

```json
{
  "key": "cmd+alt+shift+i",
  "command": "editor.action.inspectTMScopes"
}
```

![scope inspector][LN327]

The scope inspector displays the following information:

1. The current token.
1. Metadata about the token and information about its computed appearance. If you are working with embedded languages, the important entries here `language` and `token type`.
1. The semantic token section is shown when a semantic token provider is available for the current language and when the current theme supports semantic highlighting. It shows the current semantic token type and modifiers along with the theme rules that match the semantic token type and modifiers.
1. The TextMate section shows the scope list for the current TextMate token, with the most specific scope at the top. It also shows the most specific theme rules that match the scopes. This only shows the theme rules that are responsible for the token's current style, it does not show overridden rules. If semantic tokens are present, the theme rules are only shown when they differ from the rule matching the semantic token.

[tm-grammars]: https://macromates.com/manual/en/language_grammars


<a id="_api_language-extensions_semantic-highlight-guide" ></a>

# /api/language-extensions/semantic-highlight-guide
----------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 8308017a-75de-430a-b420-d9d2064162b9
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to syntax highlighting
    ---

## Semantic Highlight Guide

Semantic highlighting is an addition to syntax highlighting as described in the [Syntax Highlight guide][LN327]. Visual Studio Code uses TextMate grammars as the main tokenization engine. TextMate grammars work on a single file as input and break it up based on lexical rules expressed in regular expressions.

Semantic tokenization allows language servers to provide additional token information based on the language server's knowledge on how to resolve symbols in the context of a project. Themes can opt in to use semantic tokens to improve and refine the syntax highlighting from grammars. The editor applies the highlighting from semantic tokens on top of the highlighting from grammars.

Here's an example of what semantic highlighting can add:

Without semantic highlighting:

![without semantic highlighting][LN328]

With semantic highlighting:

![with semantic highlighting][LN329]

Notice the color differences based on language service symbol understanding:

- line 10: `languageModes` is colored as a parameter
- line 11: `Range` and `Position` are colored as classes and `document` as a parameter.
- line 13: `getFoldingRanges` is colored as a function.

## Semantic token provider

To implement semantic highlighting, language extensions can register a `semantic token provider` by document language and/or file name. The editor will make requests to the providers when semantic tokens are needed.

```ts
const tokenTypes = ['class', 'interface', 'enum', 'function', 'variable'];
const tokenModifiers = ['declaration', 'documentation'];
const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

const provider: vscode.DocumentSemanticTokensProvider = {
  provideDocumentSemanticTokens(document: vscode.TextDocument): vscode.ProviderResult<vscode.SemanticTokens> {
    // analyze the document and return semantic tokens

    const tokensBuilder = new vscode.SemanticTokensBuilder(legend);
    // on line 1, characters 1-5 are a class declaration
    tokensBuilder.push(
      new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 5)),
      'class',
      ['declaration'],
    );
    return tokensBuilder.build();
  }
};

const selector = { language: 'java', scheme: 'file' }; // register for all Java documents from the local file system

vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend);
```

The semantic token provider API comes in two flavors to accommodate a language server's capabilities:

- `DocumentSemanticTokensProvider` - Always takes a full document as input.

  - `provideDocumentSemanticTokens` - Provides all tokens of a document.
  - `provideDocumentSemanticTokensEdits`- Provides all tokens of a document as a delta to the previous response.

- `DocumentRangeSemanticTokensProvider` - Works only on a range.

  - `provideDocumentRangeSemanticTokens` - Provides all tokens of a document range.

Each token returned by the provider comes with a classification that consists of a token type, any number of token modifiers, and a token language.

As seen in the example above, the provider names the types and modifiers it's going to use in a `SemanticTokensLegend`. That allows the `provide` APIs to return token types and modifies as an index to the legend.

## Semantic token classification

The output of a semantic token provider consists of tokens. Each token has a range and a token classification that describes what kind of syntax element the token represents. Optionally, the classification can also name a language, if the token is part of an embedded language.

To describe the kind of syntax element, semantic token types and modifiers are used. This information is similar to the TextMate scopes described in the [Syntax Highlight guide][LN329], but we wanted to come up with a dedicated and cleaner classification system.

VS Code comes with a set of standard semantic token types and modifiers for all semantic token providers to use. Still, semantic token providers are free to define new types and modifiers and create a subtype of the standard types.

### Standard token types and modifiers

The standard types and modifiers cover common concepts used by many languages. While each language might use a different terminology for some types and modifiers, by adhering to the standard classifications, it will be possible for theme authors to define theming rules that work across languages.

These are the standard semantic token types and semantic token modifiers predefined by VS Code:

Standard token types:

| ID      | Description                   |
| ----------------------------- | -------------------------------- |
| `namespace`| For identifiers that declare or reference a namespace, module, or package. |
| `class`| For identifiers that declare or reference a class type. |
| `enum`| For identifiers that declare or reference an enumeration type. |
| `interface`| For identifiers that declare or reference an interface type. |
| `struct`| For identifiers that declare or reference a struct type. |
| `typeParameter`| For identifiers that declare or reference a type parameter. |
| `type`| For identifiers that declare or reference a type that is not covered above. |
| `parameter` | For identifiers that declare or reference a function or method parameters. |
| `variable` | For identifiers that declare or reference a local or global variable. |
| `property` | For identifiers that declare or reference a member property, member field, or member variable. |
| `enumMember` | For identifiers that declare or reference an enumeration property, constant, or member. |
| `decorator` | For identifiers that declare or reference decorators and annotations. |
| `event`| For identifiers that declare an event property. |
| `function`| For identifiers that declare a function. |
| `method`| For identifiers that declare a member function or method. |
| `macro`| For identifiers that declare a macro. |
| `label`| For identifiers that declare a label. |
| `comment`| For tokens that represent a comment. |
| `string`| For tokens that represent a string literal. |
| `keyword`| For tokens that represent a language keyword. |
| `number`| For tokens that represent a number literal. |
| `regexp`| For tokens that represent a regular expression literal. |
| `operator`| For tokens that represent an operator. |

Standard token modifiers:

| ID      | Description                   |
| ----------------------------- | -------------------------------- |
| `declaration`| For declarations of symbols.  |
| `definition`| For definitions of symbols, for example, in header files.  |
| `readonly`| For readonly variables and member fields (constants).  |
| `static`| For class members (static members). |
| `deprecated`| For symbols that should no longer be used.  |
| `abstract`| For types and member functions that are abstract.  |
| `async`| For functions that are marked async.  |
| `modification`| For variable references where the variable is assigned to.  |
| `documentation`| For occurrences of symbols in documentation.  |
| `defaultLibrary`| For symbols that are part of the standard library.  |

Along with the standard types and modifiers, VS Code defines a mapping of types and modifiers to similar TextMate scopes. That's covered in the section [Semantic Token Scope Map][LN330].

### Custom token types and modifiers

If necessary, extensions can declare new types and modifiers or create sub types of existing types through the `semanticTokenTypes` and `semanticTokenModifiers` contribution points in their extension's `package.json`:

```json
{
  "contributes": {
    "semanticTokenTypes": [{
      "id": "templateType",
      "superType": "type",
      "description": "A template type."
    }],
    "semanticTokenModifiers": [{
      "id": "native",
      "description": "Annotates a symbol that is implemented natively"
    }]
  }
}
```

In the example above, an extension declares a new type `templateType` and a new modifier `native`. By naming `type` as the super type, theme styling rules for `type` will also apply to `templateType`:

```json
{
  "name": "Red Theme",
  "semanticTokenColors": {
    "type": "#ff0011"
  }
}
```

The `semanticTokenColors` value `"#ff0011"` shown above applies to both `type` and all it's subtypes, including `templateType`.

Along with custom token types, extensions can define how these are mapped to TextMate scopes. This is described in the [Custom Mappings][LN331] section. Note that custom mapping rules are not automatically inherited from the super type. Instead, subtypes need to redefine the mapping, preferably to more specific scopes.

## Enablement of semantic highlighting

Whether semantic tokens are computed and highlighted is decided by the setting `editor.semanticHighlighting.enabled`. It can have values `true`, `false`, and `configuredByTheme`.

- `true` and `false` turn semantic highlighting on or off for all themes.
- `configuredByTheme` is the default and lets each theme control whether semantic highlighting is enabled or not. All the themes that ship with VS Code (for example, the "Dark+" default) have semantic highlighting enabled by default.

Language extensions that depend on semantic tokens can override the default for their language in their `package.json`:

```json
{
  "configurationDefaults": {
    "[languageId]": {
      "editor.semanticHighlighting.enabled": true
    }
  }
}
```

## Theming

Theming is about assigning colors and styles to tokens. Theming rules are specified in Color Theme files (JSON format). Users can also customize the theming rules in the user settings.

### Semantic coloring in Color Themes

Two new properties have been added to the Color Theme file format in order to support highlighting based on semantic tokens.

The property `semanticHighlighting` defines whether the theme is ready for highlighting using semantic tokens. It is false by default, but we encourage all themes to enable it. The property is used when the setting `editor.semanticHighlighting.enabled` is set to `configuredByTheme`.

The property `semanticTokenColors` allows a theme to define new coloring rules that match against the semantic token types and modifiers that are emitted by the semantic token providers.

```jsonc
{
  "name": "Red Theme",
  "tokenColors": [
    {
      "scope": "comment",
      "settings": {
        "foreground": "#dd0000",
        "fontStyle": "italic"
      }
    }
  ],
  "semanticHighlighting": true,
  "semanticTokenColors": {
    "variable.readonly:java": "#ff0011"
  }
}
```

`variable.readonly:java` is called a selector and has the form `(*|tokenType)(.tokenModifier)*(:tokenLanguage)?`.

The value describes the style if the rule matches. It is either a string, representing the foreground color, or an object, in the form `{ foreground: string, bold: boolean, italic: boolean, underline: boolean }` or `{ foreground: string, fontStyle: string }` as used for TextMate theme rule in `tokenColors`.

The foreground needs to follow a color format as described in [Color formats][LN332]. Transparency is not supported.

Here are other examples of selectors and styles:

- `"*.declaration": { "bold": true } // all declarations are bold`
- `"class:java": { "foreground": "#0f0", "italic": true } // classes in java`

If no rule matches or the theme has no `semanticTokenColors` section (but `semanticHighlighting` enabled), VS Code uses the [Semantic Token Scope Map][LN332] to evaluate a TextMate scope for the given semantic token. That scope is matched against the themes TextMate theming rules in `tokenColors`.

## Semantic token scope map

In order to make semantic highlighting work for themes that have not defined any specific semantic rules and to serve as fallback for custom token types and modifiers, VS Code maintains a map from semantic token selectors to TextMate scopes.

If a theme has semantic highlighting enabled, but does not contain a rule for the given semantic token, these TextMate scopes are used to find a TextMate theming rule instead.

### Predefined TextMate scope mappings

The following table lists the currently predefined mappings.

| Semantic Token Selector       | Fallback TextMate Scope                   |
| ----------------------------- | -------------------------------- |
| `namespace`|`entity.name.namespace`|
| `type`|`entity.name.type`|
| `type.defaultLibrary`|`support.type`|
| `struct`|`storage.type.struct`|
| `class`|`entity.name.type.class`|
| `class.defaultLibrary`|`support.class`|
| `interface`|`entity.name.type.interface`|
| `enum`|`entity.name.type.enum`|
| `function`|`entity.name.function`|
| `function.defaultLibrary`|`support.function`|
| `method`|`entity.name.function.member`|
| `macro`|`entity.name.function.macro`|
| `variable`|`variable.other.readwrite` , `entity.name.variable`|
| `variable.readonly`|`variable.other.constant`|
| `variable.readonly.defaultLibrary`|`support.constant`|
| `parameter`|`variable.parameter`|
| `property`|`variable.other.property`|
| `property.readonly`|`variable.other.constant.property`|
| `enumMember`|`variable.other.enummember`|
| `event`|`variable.other.event`|

### Custom TextMate scope mappings

This map can be extended by extensions through the `semanticTokenScopes` contribution point in their `package.json`.

There are two use cases for extensions to do that:

- The extension that defines custom token types and token modifiers provides TextMate scopes as fallback when a theme does not define a theming rule for the added semantic token type or modifiers:

  ```json
  {
    "contributes": {
      "semanticTokenScopes": [
        {
          "scopes": {
            "templateType": [ "entity.name.type.template" ]
          }
        }
      ]
    }
  }
  ```

- The provider of a TextMate grammar can describe the language-specific scopes. That helps with themes that contain language-specific theming rules.

  ```json
  {
    "contributes": {
      "semanticTokenScopes": [
        {
          "language": "typescript",
          "scopes": {
            "property.readonly": ["variable.other.constant.property.ts"],
          }
        }
      ]
    }
  }
  ```

## Try it out

We have a [Semantic Tokens sample][LK285] that illustrates how to create a semantic token provider.

The [scope inspector][LN332] tool allows you to explore what semantic tokens are present in a source file and what theme rules they match to. To see semantic token, use a built-in theme (for example, Dark+) on a TypeScript file.


<a id="_api_language-extensions_snippet-guide" ></a>

# /api/language-extensions/snippet-guide
-----------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 4b24790b-781a-43cc-afe6-58b1d57d6163
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to bundle snippets into an extension (plug-in) for Visual Studio Code
    ---

## Snippet Guide

The [`contributes.snippets`][LN333] Contribution Point allows you to bundle snippets into a Visual Studio Code extension for sharing.

The [Creating snippets][LK286] topic contains all information for creating snippets. This guide / sample just shows how you can turn your own snippets into an extension for sharing. The suggested workflow is:

- Create and test your snippets using `Snippets: Configure User Snippets` command
- Once you are happy with the snippets, copy the whole JSON file into an extension folder, such as `snippets.json`
- Add the following snippet contribution to your `package.json`

```json
{
  "contributes": {
    "snippets": [
      {
        "language": "javascript",
        "path": "./snippets.json"
      }
    ]
  }
}
```

**Tip**: Tag your extension as a snippet extension with the following config in your `package.json`:

```json
{
  "categories": ["Snippets"]
}
```

You can find the complete source code at: [https://github.com/microsoft/vscode-extension-samples/tree/main/snippet-sample][LK286].

## Using TextMate snippets

You can also add TextMate snippets (.tmSnippets) to your VS Code installation using the [yo code][LN333] extension generator. The generator has an option `New Code Snippets` which lets you point to a folder containing multiple .tmSnippets files and they will be packaged into a VS Code snippet extension. The generator also supports Sublime snippets (.sublime-snippets).

The final generator output has two files: an extension manifest `package.json` which has metadata to integrate the snippets into VS Code and a `snippets.json` file which includes the snippets converted to the VS Code snippet format.

```bash
.
├── snippets                    // VS Code integration
│   └── snippets.json           // The JSON file w/ the snippets
└── package.json                // extension's manifest
```

Copy the generated snippets folder to a new folder under your `.vscode/extensions` folder and restart VS Code.


<a id="_api_language-extensions_language-configuration-guide" ></a>

# /api/language-extensions/language-configuration-guide
--------------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: cd928e7f-bb5a-43b0-8e15-d398e416386d
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to configure language support for any language in Visual Studio Code.
    ---

## Language Configuration Guide

The [`contributes.languages`][LN333] Contribution Point allows you to define a language configuration that controls the following Declarative Language Features:

- Comment toggling
- Brackets definition
- Autoclosing
- Autosurrounding
- Folding
- Word pattern
- Indentation Rules

Here is a [Language Configuration sample][LK286] that configures the editing experience for JavaScript files. This guide explains the content of `language-configuration.json`:

**Note: If your language configuration file name is or ends with `language-configuration.json`, you will get autocompletion and validation in VS Code.**

```json
{
  "comments": {
    "lineComment": "//",
    "blockComment": ["/*", "*/"]
  },
  "brackets": [["{", "}"], ["[", "]"], ["(", ")"]],
  "autoClosingPairs": [
    { "open": "{", "close": "}" },
    { "open": "[", "close": "]" },
    { "open": "(", "close": ")" },
    { "open": "'", "close": "'", "notIn": ["string", "comment"] },
    { "open": "\"", "close": "\"", "notIn": ["string"] },
    { "open": "`", "close": "`", "notIn": ["string", "comment"] },
    { "open": "/**", "close": " */", "notIn": ["string"] }
  ],
  "autoCloseBefore": ";:.,=}])>` \n\t",
  "surroundingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["'", "'"],
    ["\"", "\""],
    ["`", "`"]
  ],
  "folding": {
    "markers": {
      "start": "^\\s*//\\s*#?region\\b",
      "end": "^\\s*//\\s*#?endregion\\b"
    }
  },
  "wordPattern": "(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)",
  "indentationRules": {
    "increaseIndentPattern": "^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$",
    "decreaseIndentPattern": "^((?!.*?\\/\\*).*\\*/)?\\s*[\\)\\}\\]].*$"
  }
}
```

## Comment toggling

VS Code offers two commands for comment toggling. **Toggle Line Comment** and **Toggle Block Comment**. You can specify `comments.blockComment` and `comments.lineComment` to control how VS Code should comment out lines / blocks.

```json
{
  "comments": {
    "lineComment": "//",
    "blockComment": ["/*", "*/"]
  }
}
```

## Brackets definition

When you move the cursor to a bracket defined here, VS Code will highlight that bracket together with its matching pair.

```json
{
  "brackets": [["{", "}"], ["[", "]"], ["(", ")"]]
}
```

Moreover, when you run **Go to Bracket** or **Select to Bracket**, VS Code will use the definition above to find the nearest bracket and its matching pair.

## Autoclosing

When you type `'`, VS Code creates a pair of single quotes and puts your cursor in the middle: `'|'`. This section defines such pairs.


```json
{
  "autoClosingPairs": [
    { "open": "{", "close": "}" },
    { "open": "[", "close": "]" },
    { "open": "(", "close": ")" },
    { "open": "'", "close": "'", "notIn": ["string", "comment"] },
    { "open": "\"", "close": "\"", "notIn": ["string"] },
    { "open": "`", "close": "`", "notIn": ["string", "comment"] },
    { "open": "/**", "close": " */", "notIn": ["string"] }
  ]
}
```

The `notIn` key disables this feature in certain code ranges. For example, when you are writing the following code:

```js
// ES6's Template String
`ES6's Template String`;
```

The single quote will not be autoclosed.

Pairs that do not require a `notIn` property can also use a simpler syntax:
```json
{
  "autoClosingPairs": [ ["{", "}"], ["[", "]"] ]
}
```


Users can tweak the autoclosing behavior with the `editor.autoClosingQuotes` and `editor.autoClosingBrackets` settings.

### Autoclosing before

By default, VS Code only autocloses pairs if there is whitespace right after the cursor. So when you type `{` in the following JSX code, you would not get autoclose:

```js
const Component = () =>
  <div className={>
                  ^ Does not get autoclosed by default
  </div>
```

However, this definition overrides that behavior:

```json
{
  "autoCloseBefore": ";:.,=}])>` \n\t"
}
```

Now when you enter `{` right before `>`, VS Code autocloses it with `}`.

## Autosurrounding

When you select a range in VS Code and enter an opening bracket, VS Code surrounds the selected content with a pair of brackets. This feature is called Autosurrounding, and here you can define the autosurrounding pairs for a specific language:

```json
{
  "surroundingPairs": [
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
    ["'", "'"],
    ["\"", "\""],
    ["`", "`"]
  ]
}
```

Users can tweak the autosurrounding behavior with the `editor.autoSurround` setting.

## Folding

In VS Code, folding is defined either indentation-based, or defined by contributed folding range providers:

- Indentation-based folding with markers: If no folding range provider is available for the given language or if the user has set `editor.foldingStrategy` to `indentation`, indentation-based folding is used. A folding region starts when a line has a smaller indent than one or more following lines, and ends when there is a line with the same or smaller indent. Empty lines are ignored.
Additionally, the language configuration can define start and end markers. These are defined as `start` and `end` regexes in `folding.markers`. When matching lines are found, a folding range inside the pair is created. Folding markers must be non-empty and typically look like `//#region` and `//#endregion`.

The following JSON creates folding markers for `//#region` and `//#endregion`.

```json
{
  "folding": {
    "markers": {
      "start": "^\\s*//\\s*#?region\\b",
      "end": "^\\s*//\\s*#?endregion\\b"
    }
  }
}
```

- Language server folding: The Language Server responds to the [`textDocument/foldingRange`][LK287] request with a list of folding ranges, and VS Code would render the ranges as folding markers. Learn more about the folding support in Language Server Protocol at the [Programmatic Language Feature][LN333] topic.

## Word Pattern

`wordPattern` defines what's considered as a word in the programming language. Code suggestion features will use this setting to determine word boundaries if `wordPattern` is set. Note this setting won't affect word-related editor commands, which are controlled by the editor setting `editor.wordSeparators`.

```json
{
  "wordPattern": "(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)"
}
```

## Indentation Rules

`indentationRules` defines how the editor should adjust the indentation of current line or next line when you type, paste, and move lines.

```json
{
  "indentationRules": {
    "increaseIndentPattern": "^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$",
    "decreaseIndentPattern": "^((?!.*?\\/\\*).*\\*/)?\\s*[\\)\\}\\]].*$"
  }
}
```

For example, `if (true) {` matches `increaseIndentPattern`, then if you press `kbstyle(Enter)` after the open bracket `{`, the editor will automatically indent once, and your code will end up as:

```javascript
if (true) {
  console.log();
```

In addition to `increaseIndentPattern` and `decreaseIndentPatter`, there are two other indentation rules:

- `indentNextLinePattern` - If a line matches this pattern, then **only the next line** after it should be indented once.
- `unIndentedLinePattern` - If a line matches this pattern, then its indentation should not be changed and it should not be evaluated against the other rules.

If there is no indentation rule set for the programming language, the editor will indent when the line ends with an open bracket and outdent when you type a closing bracket. The bracket here is defined by `brackets`.

Notice that `editor.formatOnPaste` setting is controlled by the [`DocumentRangeFormattingEditProvider`][LN334] and not affected by auto indentation.

## On Enter Rules

`onEnterRules` defines a list of rules that will be evaluated when `kbstyle(Enter)` is pressed in the editor.

```json
{
  "onEnterRules": [{
    "beforeText": "^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$",
    "action": { "indent": "indent" }
  }]
}
```

When pressing `kbstyle(Enter)`, the text before, after, or one line above the cursor is checked against the following properties:

- `beforeText` (mandatory). A regular expression that matches the text before the cursor (limited to the current line).
- `afterText`. A regular expression that matches the text after the cursor (limited to the current line).
- `previousLineText`. A regular expression that matches the text one line above the cursor.

If all the specified properties match, the rule is considered to match and no further `onEnterRules` will be evaluated. An `onEnterRule` can specify the following actions:

- `indent` (mandatory). One of `none, indent, outdent, indentOutdent`.
  - `none` means that the new line will inherit the indentation of the current line.
  - `indent` means that the new line will be indented relative to the current line.
  - `outdent` means that the new line will be unindented relative to the current line.
  - `indentOutdent` means that two new lines will be inserted, one indented and the second one outdented.
- `appendText`. A string that will be appended after the new line and after the indentation.
- `removeText`. The number of characters to remove from the new line's indentation.


<a id="_api_language-extensions_programmatic-language-features" ></a>

# /api/language-extensions/programmatic-language-features
----------------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: A9D40038-7837-4320-8C2D-E0CA5769AA69
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Visual Studio Code language extensions contribute programming language features. These guidelines present the language features available in Visual Studio Code and explain the API.
    ---

## Programmatic Language Features

Programmatic Language Features is a set of smart-editing features powered by the [`vscode.languages.*`][LN334] API. There are two common ways to provide a dynamic language feature in Visual Studio Code. Let's take [Hover][LN335] as an example:

```ts
vscode.languages.registerHoverProvider('javascript', {
  provideHover(document, position, token) {
    return {
      contents: ['Hover Content']
    };
  }
});
```

As you see above, the [`vscode.languages.registerHoverProvider`][LN335] API provides an easy way to provide hover contents to JavaScript files. After this extension gets activated, whenever you hover over some JavaScript code, VS Code queries all [`HoverProvider`][LN336] for JavaScript and shows the result in a Hover widget. The [Language Feature Listing][LN337] and illustrated gif below provides an easy way for you to locate which VS Code API / LSP Method your extension needs.

An alternative approach is to implement a Language Server that speaks [Language Server Protocol][LK287]. The way it works is:

- An extension provides a Language Client and a Language Server for JavaScript.
- The Language Client is like any other VS Code extension, running in the Node.js Extension Host context. When it gets activated, it spawns the Language Server in another process and communicates with it through [Language Server Protocol][LK287].
- You hover over JavaScript code in VS Code
- VS Code informs the Language Client of the hover
- The Language Client queries the Language Server for a hover result and sends it back to VS Code
- VS Code displays the hover result in a Hover widget

The process seems more complicated, but it provides two major benefits:

- The Language Server can be written in any language
- The Language Server can be reused to provide smart editing features for multiple editors

For a more in-depth guide, head over to the [Language Server extension guide][LN337].

---

## Language Features Listing

This listing includes the following items for each language feature:

- An illustration of the language feature in VS Code
- Related VS Code API
- Related LSP methods

| VS Code API                                                                                                                       | LSP method                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`createDiagnosticCollection`][LN338]                                   | [PublishDiagnostics][LK288]                                                                                                                 |
| [`registerCompletionItemProvider`][LN338]                           | [Completion][LK289] & [Completion Resolve][LK290]               |
| [`registerHoverProvider`][LN338]                                             | [Hover][LK291]                                                                                                                                           |
| [`registerSignatureHelpProvider`][LN339]                             | [SignatureHelp][LK292]                                                                                                                           |
| [`registerDefinitionProvider`][LN339]                                   | [Definition][LK293]                                                                                                                                 |
| [`registerTypeDefinitionProvider`][LN340]                           | [TypeDefinition][LK294]                                                                                                                         |
| [`registerImplementationProvider`][LN341]                           | [Implementation][LK295]                                                                                                                         |
| [`registerReferenceProvider`][LN342]                                     | [References][LK296]                                                                                                                                 |
| [`registerDocumentHighlightProvider`][LN343]                     | [DocumentHighlight][LK297]                                                                                                                   |
| [`registerDocumentSymbolProvider`][LN344]                           | [DocumentSymbol][LK298]                                                                                                                         |
| [`registerCodeActionsProvider`][LN345]                                 | [CodeAction][LK299]                                                                                                                                 |
| [`registerCodeLensProvider`][LN346]                                       | [CodeLens][LK300] & [CodeLens Resolve][LK301]                           |
| [`registerDocumentLinkProvider`][LN347]                               | [DocumentLink][LK302] & [DocumentLink Resolve][LK303]                   |
| [`registerColorProvider`][LN348]                                     | [DocumentColor][LK304] & [Color Presentation][LK305] |
| [`registerDocumentFormattingEditProvider`][LN349]           | [Formatting][LK306]                                                                                                                                 |
| [`registerDocumentRangeFormattingEditProvider`][LN350] | [RangeFormatting][LK307]                                                                                                                       |
| [`registerOnTypeFormattingEditProvider`][LN351]               | [OnTypeFormatting][LK308]                                                                                                                     |
| [`registerRenameProvider`][LN352]                                           | [Rename][LK309] & [Prepare Rename][LK310]                       |
| [`registerFoldingRangeProvider`][LN353]                               | [FoldingRange][LK310]                                                                                                                             |

## Provide Diagnostics

Diagnostics are a way to indicate issues with the code.

![Diagnostics indicating a misspelled method name][LN354]

#### Language Server Protocol

Your language server sends the `textDocument/publishDiagnostics` message to the language client. The message carries an array of diagnostic items for a resource URI.

**Note**: The client does not ask the server for diagnostics. The server pushes the diagnostic information to the client.

#### Direct Implementation

```typescript
let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(ctx: vscode.ExtensionContext): void {
  ...
  ctx.subscriptions.push(getDisposable());
  diagnosticCollection = vscode.languages.createDiagnosticCollection('go');
  ctx.subscriptions.push(diagnosticCollection);
  ...
}

function onChange() {
  let uri = document.uri;
  check(uri.fsPath, goConfig).then(errors => {
    diagnosticCollection.clear();
    let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
    errors.forEach(error => {
      let canonicalFile = vscode.Uri.file(error.file).toString();
      let range = new vscode.Range(error.line-1, error.startColumn, error.line-1, error.endColumn);
      let diagnostics = diagnosticMap.get(canonicalFile);
      if (!diagnostics) { diagnostics = []; }
      diagnostics.push(new vscode.Diagnostic(range, error.msg, error.severity));
      diagnosticMap.set(canonicalFile, diagnostics);
    });
    diagnosticMap.forEach((diags, file) => {
      diagnosticCollection.set(vscode.Uri.parse(file), diags);
    });
  })
}
```

> **Basic**
>
> Report diagnostics for open editors. Minimally, this needs to happen on every save. Better, diagnostics should be computed based on the un-saved contents of the editor.

> **Advanced**
>
> Report diagnostics not only for the open editors but for all resources in the open folder, no matter whether they have ever been opened in an editor or not.

## Show Code Completion Proposals

Code completions provide context sensitive suggestions to the user.

![Code Completion prompting variable, method, and parameter names while writing code][LN355]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides completions and whether or not it supports the `completionItem\resolve` method to provide additional information for the computed completion items.

```json
{
    ...
    "capabilities" : {
        "completionProvider" : {
            "resolveProvider": "true",
            "triggerCharacters": [ '.' ]
        }
        ...
    }
}
```

#### Direct Implementation

```typescript
class GoCompletionItemProvider implements vscode.CompletionItemProvider {
    public provideCompletionItems(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        Thenable<vscode.CompletionItem[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(getDisposable());
    ctx.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            GO_MODE, new GoCompletionItemProvider(), '.', '\"'));
    ...
}
```

> **Basic**
>
> You don't support resolve providers.

> **Advanced**
>
> You support resolve providers that compute additional information for completion proposal the user selects. This information is displayed along-side the selected item.

## Show Hovers

Hovers show information about the symbol/object that's below the mouse cursor. This is usually the type of the symbol and a description.

![Showing details about a workspace and a method when hovering over them][LN356]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides hovers.

```json
{
    ...
    "capabilities" : {
        "hoverProvider" : "true",
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/hover` request.

#### Direct Implementation

```typescript
class GoHoverProvider implements HoverProvider {
    public provideHover(
        document: TextDocument, position: Position, token: CancellationToken):
        Thenable<Hover> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerHoverProvider(
            GO_MODE, new GoHoverProvider()));
    ...
}
```

> **Basic**
>
> Show type information and include documentation if available.

> **Advanced**
>
> Colorize method signatures in the same style you colorize the code.

## Help With Function and Method Signatures

When the user enters a function or method, display information about the function/method that is being called.

![Showing information about the getPackageInfo method including the necessary parameters][LN357]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides signature help.

```json
{
    ...
    "capabilities" : {
        "signatureHelpProvider" : {
            "triggerCharacters": [ '(' ]
        }
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/signatureHelp` request.

#### Direct Implementation

```typescript
class GoSignatureHelpProvider implements SignatureHelpProvider {
    public provideSignatureHelp(
        document: TextDocument, position: Position, token: CancellationToken):
        Promise<SignatureHelp> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerSignatureHelpProvider(
            GO_MODE, new GoSignatureHelpProvider(), '(', ','));
    ...
}
```

> **Basic**
>
> Ensure that the signature help contains the documentation of the parameters of the function or method.

> **Advanced**
>
> Nothing additional.

## Show Definitions of a Symbol

Allow the user to see the definition of variables/functions/methods right where the variables/functions/methods are being used.

![Right click a variable, function, or method and select "Go to Definition" to jump to the definition][LN358]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides goto-definition locations.

```json
{
    ...
    "capabilities" : {
        "definitionProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/definition` request.

#### Direct Implementation

```typescript
class GoDefinitionProvider implements vscode.DefinitionProvider {
    public provideDefinition(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        Thenable<vscode.Location> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerDefinitionProvider(
            GO_MODE, new GoDefinitionProvider()));
    ...
}
```

> **Basic**
>
> If a symbol is ambivalent, you can show multiple definitions.

> **Advanced**
>
> Nothing additional.

## Find All References to a Symbol

Allow the user to see all the source code locations where a certain variable/function/method/symbol is being used.

![Right clicking and selecting "Find All References" to highlight all the locations where that symbol is used][LN359]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides symbol reference locations.

```json
{
    ...
    "capabilities" : {
        "referencesProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/references` request.

#### Direct Implementation

```typescript
class GoReferenceProvider implements vscode.ReferenceProvider {
    public provideReferences(
        document: vscode.TextDocument, position: vscode.Position,
        options: { includeDeclaration: boolean }, token: vscode.CancellationToken):
        Thenable<vscode.Location[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerReferenceProvider(
            GO_MODE, new GoReferenceProvider()));
    ...
}
```

> **Basic**
>
> Return the location (resource URI and range) for all references.

> **Advanced**
>
> Nothing additional.

## Highlight All Occurrences of a Symbol in a Document

Allow the user to see all occurrences of a symbol in the open editor.

![Select a symbol to highlight all occurrences][LN360]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides symbol document locations.

```json
{
    ...
    "capabilities" : {
        "documentHighlightProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/documentHighlight` request.

#### Direct Implementation

```typescript
class GoDocumentHighlightProvider implements vscode.DocumentHighlightProvider {
    public provideDocumentHighlights(
        document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken):
        vscode.DocumentHighlight[] | Thenable<vscode.DocumentHighlight[]>;
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerDocumentHighlightProvider(
            GO_MODE, new GoDocumentHighlightProvider()));
    ...
}
```

> **Basic**
>
> You return the ranges in the editor's document where the references are being found.

> **Advanced**
>
> Nothing additional.

## Show all Symbol Definitions Within a Document

Allow the user to quickly navigate to any symbol definition in the open editor.

![Navigate to a symbol definition in the open editor using @][LN361]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides symbol document locations.

```json
{
    ...
    "capabilities" : {
        "documentSymbolProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/documentSymbol` request.

#### Direct Implementation

```typescript
class GoDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(
        document: vscode.TextDocument, token: vscode.CancellationToken):
        Thenable<vscode.SymbolInformation[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerDocumentSymbolProvider(
            GO_MODE, new GoDocumentSymbolProvider()));
    ...
}
```

> **Basic**
>
> Return all symbols in the document. Define the kinds of symbols such as variables, functions, classes, methods, etc.

> **Advanced**
>
> Nothing additional.

## Show all Symbol Definitions in Folder

Allow the user to quickly navigate to symbol definitions anywhere in the folder (workspace) opened in VS Code.

![Navigate to symbol definitions in the workspace using #][LN362]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides global symbol locations.

```json
{
    ...
    "capabilities" : {
        "workspaceSymbolProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `workspace/symbol` request.

#### Direct Implementation

```typescript
class GoWorkspaceSymbolProvider implements vscode.WorkspaceSymbolProvider {
    public provideWorkspaceSymbols(
        query: string, token: vscode.CancellationToken):
        Thenable<vscode.SymbolInformation[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerWorkspaceSymbolProvider(
            new GoWorkspaceSymbolProvider()));
    ...
}
```

> **Basic**
>
> Return all symbols define by the source code within the open folder. Define the kinds of symbols such as variables, functions, classes, methods, etc.

> **Advanced**
>
> Nothing additional.

## Possible Actions on Errors or Warnings

Provide the user with possible corrective actions right next to an error or warning. If actions are available, a light bulb appears next to the error or warning. When the user clicks the light bulb, a list of available Code Actions is presented.

![Selecting a light bulb to view a list of available Code Actions][LN363]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides Code Actions.

```json
{
    ...
    "capabilities" : {
        "codeActionProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/codeAction` request.

#### Direct Implementation

```typescript
class GoCodeActionProvider implements vscode.CodeActionProvider<vscode.CodeAction> {
    public provideCodeActions(
        document: vscode.TextDocument, range: vscode.Range | vscode.Selection,
        context: vscode.CodeActionContext, token: vscode.CancellationToken):
        Thenable<vscode.CodeAction[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerCodeActionsProvider(
            GO_MODE, new GoCodeActionProvider()));
    ...
}
```

> **Basic**
>
> Provide Code Actions for error/warning correcting actions.

> **Advanced**
>
> In addition, provide source code manipulation actions such as refactoring. For example, **Extract Method**.

## CodeLens - Show Actionable Context Information Within Source Code

Provide the user with actionable, contextual information that is displayed interspersed with the source code.

![CodeLens providing context][LN364]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides CodeLens results and whether it supports the `codeLens\resolve` method to bind the CodeLens to its command.

```json
{
    ...
    "capabilities" : {
        "codeLensProvider" : {
            "resolveProvider": "true"
        }
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/codeLens` request.

#### Direct Implementation

```typescript
class GoCodeLensProvider implements vscode.CodeLensProvider {
    public provideCodeLenses(document: TextDocument, token: CancellationToken):
        CodeLens[] | Thenable<CodeLens[]> {
    ...
    }

    public resolveCodeLens?(codeLens: CodeLens, token: CancellationToken):
         CodeLens | Thenable<CodeLens> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerCodeLensProvider(
            GO_MODE, new GoCodeLensProvider()));
    ...
}
```

> **Basic**
>
> Define the CodeLens results that are available for a document.

> **Advanced**
>
> Bind the CodeLens results to a command by responding to `codeLens/resolve`.

## Show Color Decorators

Allow the user to preview and modify colors in the document.

![Showing the color picker][LN365]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides color information.

```json
{
    ...
    "capabilities" : {
        "colorProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/documentColor` and `textDocument/colorPresentation` requests.

#### Direct Implementation

```typescript
class GoColorProvider implements vscode.DocumentColorProvider {
    public provideDocumentColors(
        document: vscode.TextDocument, token: vscode.CancellationToken):
        Thenable<vscode.ColorInformation[]> {
    ...
    }
    public provideColorPresentations(
        color: Color, context: { document: TextDocument, range: Range }, token: vscode.CancellationToken):
        Thenable<vscode.ColorPresentation[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerColorProvider(
            GO_MODE, new GoColorProvider()));
    ...
}
```

> **Basic**
>
> Return all color references in the document. Provide color presentations for the color formats supported (for example rgb(...), hsl(...)).

> **Advanced**
>
> Nothing additional.

## Format Source Code in an Editor

Provide the user with support for formatting whole documents.

![Right click and select format code][LN366]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides document formatting.

```json
{
    ...
    "capabilities" : {
        "documentFormattingProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/formatting` request.

#### Direct Implementation

```typescript
class GoDocumentFormatter implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(
        document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken)
        : vscode.ProviderResult<vscode.TextEdit[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider(
            GO_MODE, new GoDocumentFormatter()));
    ...
}
```

> **Basic**
>
> Don't provide formatting support.

> **Advanced**
>
> You should always return the smallest possible text edits that result in the source code being formatted. This is crucial to ensure that markers such as diagnostic results are adjusted correctly and are not lost.

## Format the Selected Lines in an Editor

Provide the user with support for formatting a selected range of lines in a document.

![Select lines, right click, and select format code][LN367]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides formatting support for ranges of lines.

```json
{
    ...
    "capabilities" : {
        "documentRangeFormattingProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/rangeFormatting` request.

#### Direct Implementation

```typescript
class GoDocumentRangeFormatter implements vscode.DocumentRangeFormattingEditProvider{
    public provideDocumentRangeFormattingEdits(
        document: vscode.TextDocument, range: vscode.Range,
        options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.ProviderResult<vscode.TextEdit[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerDocumentRangeFormattingEditProvider(
            GO_MODE, new GoDocumentRangeFormatter()));
    ...
}
```

> **Basic**
>
> Don't provide formatting support.

> **Advanced**
>
> You should always return the smallest possible text edits that result in the source code being formatted. This is crucial to ensure that markers such as diagnostic results are adjusted corrected and are not lost.

## Incrementally Format Code as the User Types

Provide the user with support for formatting text as they type.

**Note**: The user [setting][LN367] `editor.formatOnType` controls whether source code gets formatted or not as the user types.

![Visual indicators for formatting as code is typed][LN368]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides formatting as the user types. It also needs to tell the client on which characters formatting should be triggered. `moreTriggerCharacters` is optional.

```json
{
    ...
    "capabilities" : {
        "documentOnTypeFormattingProvider" : {
            "firstTriggerCharacter": "}",
            "moreTriggerCharacter": [";", ","]
        }
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/onTypeFormatting` request.

#### Direct Implementation

```typescript
class GoOnTypingFormatter implements vscode.OnTypeFormattingEditProvider{
    public provideOnTypeFormattingEdits(
        document: vscode.TextDocument, position: vscode.Position,
        ch: string, options: vscode.FormattingOptions, token: vscode.CancellationToken):
        vscode.ProviderResult<vscode.TextEdit[]> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerOnTypeFormattingEditProvider(
            GO_MODE, new GoOnTypingFormatter()));
    ...
}
```

> **Basic**
>
> Don't provide formatting support.

> **Advanced**
>
> You should always return the smallest possible text edits that result in the source code being formatted. This is crucial to ensure that markers such as diagnostic results are adjusted corrected and are not lost.

## Rename Symbols

Allow the user to rename a symbol and update all references to the symbol.

![Rename a symbol and update all references to the new name][LN369]

#### Language Server Protocol

In the response to the `initialize` method, your language server needs to announce that it provides for renaming.

```json
{
    ...
    "capabilities" : {
        "renameProvider" : "true"
        ...
    }
}
```

In addition, your language server needs to respond to the `textDocument/rename` request.

#### Direct Implementation

```typescript
class GoRenameProvider implements vscode.RenameProvider {
    public provideRenameEdits(
        document: vscode.TextDocument, position: vscode.Position,
        newName: string, token: vscode.CancellationToken):
        Thenable<vscode.WorkspaceEdit> {
    ...
    }
}

export function activate(ctx: vscode.ExtensionContext): void {
    ...
    ctx.subscriptions.push(
        vscode.languages.registerRenameProvider(
            GO_MODE, new GoRenameProvider()));
    ...
}
```

> **Basic**
>
> Don't provide rename support.

> **Advanced**
>
> Return the list of all workspace edits that need to be performed, for example all edits across all files that contain references to the symbol.


<a id="_api_language-extensions_language-server-extension-guide" ></a>

# /api/language-extensions/language-server-extension-guide
-----------------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: A8CBE8D6-1FEE-47BF-B81E-D79FA0DB5D03
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to create Language Servers to provide rich language features in Visual Studio Code.
    ---

## Language Server Extension Guide

As you have seen in the [Programmatic Language Features][LN369] topic, it's possible to implement Language Features by directly using `languages.*` API. Language Server Extension, however, provides an alternative way of implementing such language support.

This topic:

- Explains the benefits of Language Server Extension.
- Walks you through building a Language Server using the [`Microsoft/vscode-languageserver-node`][LK310] library. You can also jump directly to the code in [lsp-sample][LK310].

## Why Language Server?

Language Server is a special kind of Visual Studio Code extension that powers the editing experience for many programming languages. With Language Servers, you can implement autocomplete, error-checking (diagnostics), jump-to-definition, and many other [language features][LN369] supported in VS Code.

However, while implementing support for language features in VS Code, we found three common problems:

First, Language Servers are usually implemented in their native programming languages, and that presents a challenge in integrating them with VS Code, which has a Node.js runtime.

Additionally, language features can be resource intensive. For example, to correctly validate a file, Language Server needs to parse a large amount of files, build up Abstract Syntax Trees for them and perform static program analysis. Those operations could incur significant CPU and memory usage and we need to ensure that VS Code's performance remains unaffected.

Finally, integrating multiple language toolings with multiple code editors could involve significant effort. From language toolings' perspective, they need to adapt to code editors with different APIs. From code editors' perspective, they cannot expect any uniform API from language toolings. This makes implementing language support for `M` languages in `N` code editors the work of `M * N`.

To solve those problems, Microsoft specified [Language Server Protocol][LK310], which standardizes the communication between language tooling and code editor. This way, Language Servers can be implemented in any language and run in their own process to avoid performance cost, as they communicate with the code editor through the Language Server Protocol. Furthermore, any LSP-compliant language toolings can integrate with multiple LSP-compliant code editors, and any LSP-compliant code editors can easily pick up multiple LSP-compliant language toolings. LSP is a win for both language tooling providers and code editor vendors!

![LSP Languages and Editors][LN370]

In this guide, we will:

- Explain how to build a Language Server extension in VS Code using the provided [Node SDK][LK310].
- Explain how to run, debug, log, and test the Language Server extension.
- Point you to some advanced topics on Language Servers.

## Implementing a Language Server

### Overview

In VS Code, a language server has two parts:

- Language Client: A normal VS Code extension written in JavaScript / TypeScript. This extension has access to all [VS Code Namespace API][LN370].
- Language Server: A language analysis tool running in a separate process.

As briefly stated above there are two benefits of running the Language Server in a separate process:

- The analysis tool can be implemented in any languages, as long as it can communicate with the Language Client following the Language Server Protocol.
- As language analysis tools are often heavy on CPU and Memory usage, running them in separate process avoids performance cost.

Here is an illustration of VS Code running two Language Server extensions. The HTML Language Client and PHP Language Client are normal VS Code extensions written in TypeScript. Each of them instantiates a corresponding Language Server and communicates with them through LSP. Although the PHP Language Server is written in PHP, it can still communicate with the PHP Language Client through LSP.

![LSP Illustration][LN371]

This guide will teach you how to build a Language Client / Server using our [Node SDK][LK310]. The remaining document assumes that you are familiar with VS Code [Extension API][LN371].

### LSP Sample - A simple Language Server for plain text files

Let's build a simple Language Server extension that implements autocomplete and diagnostics for plain text files. We will also cover the syncing of configurations between Client / Server.

If you prefer to jump right into the code:

- **[lsp-sample][LK310]**: Heavily documented source code for this guide.
- **[lsp-multi-server-sample][LK310]**: A heavily documented, advanced version of **lsp-sample** that starts a different server instance per workspace folder to support the [multi-root workspace][LN371] feature in VS Code.

Clone the repository [Microsoft/vscode-extension-samples][LK310] and open the sample:

```bash
> git clone https://github.com/microsoft/vscode-extension-samples.git
> cd vscode-extension-samples/lsp-sample
> npm install
> npm run compile
> code .
```

The above installs all dependencies and opens the **lsp-sample** workspace containing both the client and server code. Here is a rough overview of the structure of **lsp-sample**:

```
.
├── client // Language Client
│   ├── src
│   │   ├── test // End to End tests for Language Client / Server
│   │   └── extension.ts // Language Client entry point
├── package.json // The extension manifest
└── server // Language Server
    └── src
        └── server.ts // Language Server entry point
```

### Explaining the 'Language Client'

Let's first take a look at `/package.json`, which describes the capabilities of the Language Client. There are two interesting sections:

First, look at the [`configuration`][LN371] section:

```json
"configuration": {
    "type": "object",
    "title": "Example configuration",
    "properties": {
        "languageServerExample.maxNumberOfProblems": {
            "scope": "resource",
            "type": "number",
            "default": 100,
            "description": "Controls the maximum number of problems produced by the server."
        }
    }
}
```

This section contributes `configuration` settings to VS Code. The example will explain how these settings are sent over to the language server on startup and on every change of the settings.


> **Note**: If your extension is compatible with VS Code versions prior to 1.74.0, you must declare `onLanguage:plaintext` in the [`activationEvents`][LN371]  field of `/package.json` to tell VS Code to activate the extension as soon as a plain text file is opened (for example a file with the extension `.txt`):
> ```json
> "activationEvents": []
> ```

The actual Language Client source code and the corresponding `package.json` are in the `/client` folder. The interesting part in the `/client/package.json` file is that it references the `vscode` extension host API through the `engines` field and adds a dependency to the `vscode-languageclient` library:

```json
"engines": {
    "vscode": "^1.52.0"
},
"dependencies": {
    "vscode-languageclient": "^7.0.0"
}
```

As mentioned, the client is implemented as a normal VS Code extension, and it has access to all VS Code namespace API.

Below is the content of the corresponding extension.ts file, which is the entry of the **lsp-sample** extension:

```typescript
import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
  // The server is implemented in node
  let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
  // The debug options for the server
  // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
  let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  let serverOptions: ServerOptions = {
    run: { module: serverModule, transport: TransportKind.ipc },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: debugOptions
    }
  };

  // Options to control the language client
  let clientOptions: LanguageClientOptions = {
    // Register the server for plain text documents
    documentSelector: [{ scheme: 'file', language: 'plaintext' }],
    synchronize: {
      // Notify the server about file changes to '.clientrc files contained in the workspace
      fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
    }
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    'languageServerExample',
    'Language Server Example',
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
```

### Explaining the 'Language Server'

> **Note:** The 'Server' implementation cloned from the GitHub repository has the final walkthrough implementation. To follow the walkthrough, you can create a new `server.ts` or modify the contents of the cloned version.

In the example, the server is also implemented in TypeScript and executed using Node.js. Since VS Code already ships with a Node.js runtime, there is no need to provide your own, unless you have specific requirements for the runtime.

The source code for the Language Server is at `/server`. The interesting section in the server's `package.json` file is:

```json
"dependencies": {
    "vscode-languageserver": "^7.0.0",
    "vscode-languageserver-textdocument": "^1.0.1"
}
```

This pulls in the `vscode-languageserver` libraries.

Below is a server implementation that uses the provided text document manager that synchronizes text documents by always sending incremental deltas from VS Code to the server.

```typescript
import {
  createConnection,
  TextDocuments,
  Diagnostic,
  DiagnosticSeverity,
  ProposedFeatures,
  InitializeParams,
  DidChangeConfigurationNotification,
  CompletionItem,
  CompletionItemKind,
  TextDocumentPositionParams,
  TextDocumentSyncKind,
  InitializeResult
} from 'vscode-languageserver/node';

import {
  TextDocument
} from 'vscode-languageserver-textdocument';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
let connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
let documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability: boolean = false;
let hasWorkspaceFolderCapability: boolean = false;
let hasDiagnosticRelatedInformationCapability: boolean = false;

connection.onInitialize((params: InitializeParams) => {
  let capabilities = params.capabilities;

  // Does the client support the `workspace/configuration` request?
  // If not, we fall back using global settings.
  hasConfigurationCapability = !!(
    capabilities.workspace && !!capabilities.workspace.configuration
  );
  hasWorkspaceFolderCapability = !!(
    capabilities.workspace && !!capabilities.workspace.workspaceFolders
  );
  hasDiagnosticRelatedInformationCapability = !!(
    capabilities.textDocument &&
    capabilities.textDocument.publishDiagnostics &&
    capabilities.textDocument.publishDiagnostics.relatedInformation
  );

  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      // Tell the client that this server supports code completion.
      completionProvider: {
        resolveProvider: true
      }
    }
  };
  if (hasWorkspaceFolderCapability) {
    result.capabilities.workspace = {
      workspaceFolders: {
        supported: true
      }
    };
  }
  return result;
});

connection.onInitialized(() => {
  if (hasConfigurationCapability) {
    // Register for all configuration changes.
    connection.client.register(DidChangeConfigurationNotification.type, undefined);
  }
  if (hasWorkspaceFolderCapability) {
    connection.workspace.onDidChangeWorkspaceFolders(_event => {
      connection.console.log('Workspace folder change event received.');
    });
  }
});

// The example settings
interface ExampleSettings {
  maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
let documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(
      (change.settings.languageServerExample || defaultSettings)
    );
  }

  // Revalidate all open text documents
  documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'languageServerExample'
    });
    documentSettings.set(resource, result);
  }
  return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
  documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
  validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri);

  // The validator creates diagnostics for all uppercase words length 2 and more
  let text = textDocument.getText();
  let pattern = /\b[A-Z]{2,}\b/g;
  let m: RegExpExecArray | null;

  let problems = 0;
  let diagnostics: Diagnostic[] = [];
  while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
    problems++;
    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Warning,
      range: {
        start: textDocument.positionAt(m.index),
        end: textDocument.positionAt(m.index + m[0].length)
      },
      message: `${m[0]} is all uppercase.`,
      source: 'ex'
    };
    if (hasDiagnosticRelatedInformationCapability) {
      diagnostic.relatedInformation = [
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Spelling matters'
        },
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Particularly for names'
        }
      ];
    }
    diagnostics.push(diagnostic);
  }

  // Send the computed diagnostics to VS Code.
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

connection.onDidChangeWatchedFiles(_change => {
  // Monitored files have change in VS Code
  connection.console.log('We received a file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return [
      {
        label: 'TypeScript',
        kind: CompletionItemKind.Text,
        data: 1
      },
      {
        label: 'JavaScript',
        kind: CompletionItemKind.Text,
        data: 2
      }
    ];
  }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    if (item.data === 1) {
      item.detail = 'TypeScript details';
      item.documentation = 'TypeScript documentation';
    } else if (item.data === 2) {
      item.detail = 'JavaScript details';
      item.documentation = 'JavaScript documentation';
    }
    return item;
  }
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
```

### Adding a Simple Validation

To add document validation to the server, we add a listener to the text document manager that gets called whenever the content of a text document changes. It is then up to the server to decide when the best time is to validate a document. In the example implementation, the server validates the plain text document and flags all occurrences of words that use ALL CAPS. The corresponding code snippet looks like this:

```typescript
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(async(change) => {
  let textDocument = change.document;
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri);

  // The validator creates diagnostics for all uppercase words length 2 and more
  let text = textDocument.getText();
  let pattern = /\b[A-Z]{2,}\b/g;
  let m: RegExpExecArray | null;

  let problems = 0;
  let diagnostics: Diagnostic[] = [];
  while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
    problems++;
    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Warning,
      range: {
        start: textDocument.positionAt(m.index),
        end: textDocument.positionAt(m.index + m[0].length)
      },
      message: `${m[0]} is all uppercase.`,
      source: 'ex'
    };
    if (hasDiagnosticRelatedInformationCapability) {
      diagnostic.relatedInformation = [
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Spelling matters'
        },
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Particularly for names'
        }
      ];
    }
    diagnostics.push(diagnostic);
  }

  // Send the computed diagnostics to VS Code.
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
});
```

### Diagnostics Tips and Tricks

- If the start and end positions are the same, VS Code will underline with a squiggle the word at that position.
- If you want to underline with a squiggle until the end of the line, then set the character of the end position to Number.MAX_VALUE.

To run the Language Server, do the following steps:

- Press `kb(workbench.action.tasks.build)` to start the build task. The task compiles both the client and the server.
- Open the **Run** view, select the **Launch Client** launch configuration, and press the **Start Debugging** button to launch an additional **Extension Development Host** instance of VS Code that executes the extension code.
- Create a `test.txt` file in the root folder and paste the following content:

```
TypeScript lets you write JavaScript the way you really want to.
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
ANY browser. ANY host. ANY OS. Open Source.
```

The **Extension Development Host** instance will then look like this:

![Validating a text file][LN372]

### Debugging both Client and Server

Debugging the client code is as easy as debugging a normal extension. Set a breakpoint in the client code and debug the extension by pressing `kb(workbench.action.debug.start)`.

![Debugging the client][LN373]

Since the server is started by the `LanguageClient` running in the extension (client), we need to attach a debugger to the running server. To do so, switch to the **Run and Debug** view and select the launch configuration **Attach to Server** and press `kb(workbench.action.debug.start)`. This will attach the debugger to the server.

![Debugging the server][LN374]

### Logging Support for Language Server

If you are using `vscode-languageclient` to implement the client, you can specify a setting `[langId].trace.server` that instructs the Client to log communications between Language Client / Server to a channel of the Language Client's `name`.

For **lsp-sample**, you can set this setting: `"languageServerExample.trace.server": "verbose"`. Now head to the channel "Language Server Example". You should see the logs:

![LSP Log][LN375]

### Using Configuration Settings in the Server

When writing the client part of the extension, we already defined a setting to control the maximum numbers of problems reported. We also wrote code on the server side to read these settings from the client:

```typescript
function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
  if (!hasConfigurationCapability) {
    return Promise.resolve(globalSettings);
  }
  let result = documentSettings.get(resource);
  if (!result) {
    result = connection.workspace.getConfiguration({
      scopeUri: resource,
      section: 'languageServerExample'
    });
    documentSettings.set(resource, result);
  }
  return result;
}
```

The only thing we need to do now is to listen to configuration changes on the server side and if a setting changes, revalidate the open text documents. To be able to reuse the validate logic of the document change event handling, we extract the code into a `validateTextDocument` function and modify the code to honor a `maxNumberOfProblems` variable:

```typescript
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
  // In this simple example we get the settings for every validate run.
  let settings = await getDocumentSettings(textDocument.uri);

  // The validator creates diagnostics for all uppercase words length 2 and more
  let text = textDocument.getText();
  let pattern = /\b[A-Z]{2,}\b/g;
  let m: RegExpExecArray | null;

  let problems = 0;
  let diagnostics: Diagnostic[] = [];
  while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
    problems++;
    let diagnostic: Diagnostic = {
      severity: DiagnosticSeverity.Warning,
      range: {
        start: textDocument.positionAt(m.index),
        end: textDocument.positionAt(m.index + m[0].length)
      },
      message: `${m[0]} is all uppercase.`,
      source: 'ex'
    };
    if (hasDiagnosticRelatedInformationCapability) {
      diagnostic.relatedInformation = [
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Spelling matters'
        },
        {
          location: {
            uri: textDocument.uri,
            range: Object.assign({}, diagnostic.range)
          },
          message: 'Particularly for names'
        }
      ];
    }
    diagnostics.push(diagnostic);
  }

  // Send the computed diagnostics to VS Code.
  connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
```

The handling of the configuration change is done by adding a notification handler for configuration changes to the connection. The corresponding code looks like this:

```typescript
connection.onDidChangeConfiguration(change => {
  if (hasConfigurationCapability) {
    // Reset all cached document settings
    documentSettings.clear();
  } else {
    globalSettings = <ExampleSettings>(
      (change.settings.languageServerExample || defaultSettings)
    );
  }

  // Revalidate all open text documents
  documents.all().forEach(validateTextDocument);
});
```

Starting the client again and changing the setting to maximum report 1 problem results in the following validation:

![Maximum One Problem][LN376]

### Adding additional Language Features

The first interesting feature a language server usually implements is validation of documents. In that sense, even a linter counts as a language server and in VS Code linters are usually implemented as language servers (see [eslint][LK311] and [jshint][LK312] for examples). But there is more to language servers. They can provide code completion, Find All References, or Go To Definition. The example code below adds code completion to the server. It proposes the two words 'TypeScript' and 'JavaScript'.

```typescript
// This handler provides the initial list of the completion items.
connection.onCompletion(
  (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return [
      {
        label: 'TypeScript',
        kind: CompletionItemKind.Text,
        data: 1
      },
      {
        label: 'JavaScript',
        kind: CompletionItemKind.Text,
        data: 2
      }
    ];
  }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
  (item: CompletionItem): CompletionItem => {
    if (item.data === 1) {
      item.detail = 'TypeScript details';
      item.documentation = 'TypeScript documentation';
    } else if (item.data === 2) {
      item.detail = 'JavaScript details';
      item.documentation = 'JavaScript documentation';
    }
    return item;
  }
);
```

The `data` fields are used to uniquely identify a completion item in the resolve handler. The data property is transparent for the protocol. Since the underlying message passing protocol is JSON-based, the data field should only hold data that is serializable to and from JSON.

All that is missing is to tell VS Code that the server supports code completion requests. To do so, flag the corresponding capability in the initialize handler:

```typescript
connection.onInitialize((params): InitializeResult => {
    ...
    return {
        capabilities: {
            ...
            // Tell the client that the server supports code completion
            completionProvider: {
                resolveProvider: true
            }
        }
    };
});
```

The screenshot below shows the completed code running on a plain text file:

![Code Complete][LN377]

### Testing The Language Server

To create a high-quality Language Server, we need to build a good test suite covering its functionalities. There are two common ways of testing Language Servers:

- Unit Test: This is useful if you want to test specific functionalities in Language Servers by mocking up all the information being sent to it. VS Code's [HTML][LK313] / [CSS][LK314] / [JSON][LK315] Language Servers take this approach to testing. The LSP npm modules also use this approach. See [here][LK316] for some unit test written using the npm protocol module.
- End-to-End Test: This is similar to [VS Code extension test][LN377]. The benefit of this approach is that it runs the test by instantiating a VS Code instance with a workspace, opening the file, activating the Language Client / Server, and running [VS Code commands][LN377]. This approach is superior if you have files, settings, or dependencies (such as `node_modules`) which are hard or impossible to mock. The popular [Python][LK317] extension takes this approach to testing.

It is possible to do Unit Test in any testing framework of your choice. Here we describe how to do End-to-End testing for Language Server Extension.

Open `.vscode/launch.json`, and you can find a `E2E` test target:

```json
{
  "name": "Language Server E2E Test",
  "type": "extensionHost",
  "request": "launch",
  "runtimeExecutable": "${execPath}",
  "args": [
    "--extensionDevelopmentPath=${workspaceRoot}",
    "--extensionTestsPath=${workspaceRoot}/client/out/test/index",
    "${workspaceRoot}/client/testFixture"
  ],
  "outFiles": ["${workspaceRoot}/client/out/test/**/*.js"]
}
```

If you run this debug target, it will launch a VS Code instance with `client/testFixture` as the active workspace. VS Code will then proceed to execute all tests in `client/src/test`. As a debugging tip, you can set breakpoints in TypeScript files in `client/src/test` and they will be hit.

Let's take a look at the `completion.test.ts` file:

```ts
import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should do completion', () => {
  const docUri = getDocUri('completion.txt');

  test('Completes JS/TS in txt file', async () => {
    await testCompletion(docUri, new vscode.Position(0, 0), {
      items: [
        { label: 'JavaScript', kind: vscode.CompletionItemKind.Text },
        { label: 'TypeScript', kind: vscode.CompletionItemKind.Text }
      ]
    });
  });
});

async function testCompletion(
  docUri: vscode.Uri,
  position: vscode.Position,
  expectedCompletionList: vscode.CompletionList
) {
  await activate(docUri);

  // Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
  const actualCompletionList = (await vscode.commands.executeCommand(
    'vscode.executeCompletionItemProvider',
    docUri,
    position
  )) as vscode.CompletionList;

  assert.ok(actualCompletionList.items.length >= 2);
  expectedCompletionList.items.forEach((expectedItem, i) => {
    const actualItem = actualCompletionList.items[i];
    assert.equal(actualItem.label, expectedItem.label);
    assert.equal(actualItem.kind, expectedItem.kind);
  });
}
```

In this test, we:

- Activate the extension.
- Run the command `vscode.executeCompletionItemProvider` with a URI and a position to simulate completion trigger.
- Assert the returned completion items against our expected completion items.

Let's dive a bit deeper into the `activate(docURI)` function. It is defined in `client/src/test/helper.ts`:

```ts
import * as vscode from 'vscode';
import * as path from 'path';

export let doc: vscode.TextDocument;
export let editor: vscode.TextEditor;
export let documentEol: string;
export let platformEol: string;

/**
 * Activates the vscode.lsp-sample extension
 */
export async function activate(docUri: vscode.Uri) {
  // The extensionId is `publisher.name` from package.json
  const ext = vscode.extensions.getExtension('vscode-samples.lsp-sample')!;
  await ext.activate();
  try {
    doc = await vscode.workspace.openTextDocument(docUri);
    editor = await vscode.window.showTextDocument(doc);
    await sleep(2000); // Wait for server activation
  } catch (e) {
    console.error(e);
  }
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

In the activation part, we:

- Get the extension using the `{publisher.name}.{extensionId}`, as defined in `package.json`.
- Open the specified document, and show it in the active text editor.
- Sleep for 2 seconds, so we are sure the Language Server is instantiated.

After the preparation, we can run the [VS Code Commands][LN377] corresponding to each language feature, and assert against the returned result.

There is one more test that covers the diagnostics feature that we just implemented. Check it out at `client/src/test/diagnostics.test.ts`.

## Advanced Topics

So far, this guide covered:

- A brief overview of Language Server and Language Server Protocol.
- Architecture of a Language Server extension in VS Code
- The **lsp-sample** extension, and how to develop/debug/inspect/test it.

There are some more advanced topics we could not fit in to this guide. We will include links to these resources for further studying of Language Server development.

### Additional Language Server features

The following language features are currently supported in a language server along with code completions:

- _Document Highlights_: highlights all 'equal' symbols in a text document.
- _Hover_: provides hover information for a symbol selected in a text document.
- _Signature Help_: provides signature help for a symbol selected in a text document.
- _Goto Definition_: provides go to definition support for a symbol selected in a text document.
- _Goto Type Definition_: provides go to type/interface definition support for a symbol selected in a text document.
- _Goto Implementation_: provides go to implementation definition support for a symbol selected in a text document.
- _Find References_: finds all project-wide references for a symbol selected in a text document.
- _List Document Symbols_: lists all symbols defined in a text document.
- _List Workspace Symbols_: lists all project-wide symbols.
- _Code Actions_: compute commands to run (typically beautify/refactor) for a given text document and range.
- _CodeLens_: compute CodeLens statistics for a given text document.
- _Document Formatting_: this includes formatting of whole documents, document ranges and formatting on type.
- _Rename_: project-wide rename of a symbol.
- _Document Links_: compute and resolve links inside a document.
- _Document Colors_: compute and resolve colors inside a document to provide color picker in editor.

The [Programmatic Language Features][LN377] topic describes each of the language features above and provides guidance on how to implement them either through the language server protocol or by using the extensibility API directly from your extension.

### Incremental Text Document Synchronization

The example uses the simple text document manager provided by the `vscode-languageserver` module to synchronize documents between VS Code and the language server.

This has two drawbacks:

- Lots of data is transferred since the whole content of a text document is sent to the server repeatedly.
- If an existing language library is used, such libraries usually support incremental document updates to avoid unnecessary parsing and abstract syntax tree creation.

The protocol therefore supports incremental document synchronization as well.

To make use of incremental document synchronization, a server needs to install three notification handlers:

- _onDidOpenTextDocument_: is called when a text document is opened in VS Code.
- _onDidChangeTextDocument_: is called when the content of a text document changes in VS Code.
- _onDidCloseTextDocument_: is called when a text document is closed in VS Code.

Below is a code snippet that illustrates how to hook these notification handlers on a connection and how to return the right capability on initialize:

```typescript
connection.onInitialize((params): InitializeResult => {
    ...
    return {
        capabilities: {
            // Enable incremental document sync
            textDocumentSync: TextDocumentSyncKind.Incremental,
            ...
        }
    };
});

connection.onDidOpenTextDocument((params) => {
    // A text document was opened in VS Code.
    // params.uri uniquely identifies the document. For documents stored on disk, this is a file URI.
    // params.text the initial full content of the document.
});

connection.onDidChangeTextDocument((params) => {
    // The content of a text document has change in VS Code.
    // params.uri uniquely identifies the document.
    // params.contentChanges describe the content changes to the document.
});

connection.onDidCloseTextDocument((params) => {
    // A text document was closed in VS Code.
    // params.uri uniquely identifies the document.
});

/*
Make the text document manager listen on the connection
for open, change and close text document events.

Comment out this line to allow `connection.onDidOpenTextDocument`,
`connection.onDidChangeTextDocument`, and `connection.onDidCloseTextDocument` to handle the events
*/
// documents.listen(connection);
```

### Using VS Code API directly to implement Language Features

While Language Servers have many benefits, they are not the only option for extending the editing capabilities of VS Code. In the cases when you want to add some simple language features for a type of document, consider using `vscode.languages.register[LANGUAGE_FEATURE]Provider` as an option.

Here is a [`completions-sample`][LK317] using `vscode.languages.registerCompletionItemProvider` to add a few snippets as completions for plain text files.

More samples illustrating the usage of VS Code API can be found at [https://github.com/microsoft/vscode-extension-samples][LK317].

### Error Tolerant Parser for Language Server

Most of the time, the code in the editor is incomplete and syntactically incorrect, but developers would still expect autocomplete and other language features to work. Therefore, an error tolerant parser is necessary for a Language Server: The parser generates meaningful AST from partially complete code, and the Language Server provides language features based on the AST.

When we were improving PHP support in VS Code, we realized the official PHP parser is not error tolerant and cannot be reused directly in the Language Server. Therefore, we worked on [Microsoft/tolerant-php-parser][LK318] and left detailed [notes][LK319] that might help Language Server authors who need to implement an error tolerant parser.

## Common questions

### When I try to attach to the server, I get "cannot connect to runtime process (timeout after 5000 ms)"?

You will see this timeout error if the server isn't running when you try to attach the debugger. The client starts the language server so make sure you have started the client in order to have a running server. You may also need to disable your client breakpoints if they are interfering with starting the server.

### I have read through this guide and the [LSP Specification][LK319], but I still have unresolved questions. Where can I get help?

Please open an issue at [https://github.com/microsoft/language-server-protocol][LK320].


<a id="_api_language-extensions_embedded-languages" ></a>

# /api/language-extensions/embedded-languages
----------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: b76a223a-a210-4bdb-b537-36c1ea6814ae
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to create Language Servers to provide rich language features for embedded programming languages in Visual Studio Code.
    ---

## Embedded Programming Languages

Visual Studio Code provides rich language features for programming languages. As you have read in the
[Language Server extension guide][LN377], you can write language servers to support any programming language. However, it involves more effort to enable such support for embedded languages.

Today, there are an increasing number of embedded languages, such as:

- JavaScript and CSS in HTML
- JSX in JavaScript
- Interpolation in templating languages, for example Vue, Handlebars and Razor
- HTML in PHP

This guide focuses on implementing language features for embedded languages. If you are interested in providing syntax highlighting for embedded languages, you can find information in the [Syntax Highlight guide][LN378].

This guide includes two samples that illustrate two approaches to build such a language server: **Language Services** and **Request Forwarding**. We'll review both samples and conclude with each approach's pros and cons.

Source code for both samples can be found at:

- [Language Server for Embedded Language with Language Services][LK321]
- [Language Server for Embedded Language with Request Forwarding][LK322]

Here's the embedded language server we'll be building:

![sample][LN379]

Both samples contribute a new language, `html1`, for illustration purpose. You can create a file `.html1` and test the following functionalities:

- Completions for HTML tags
- Completions for CSS in `<style>` tag
- Diagnostics for CSS (only in the Language Services sample)

## Language Services

A **language service** is a library that implements [programmatic language features][LN379] for a single language. A **language server** can embed language services to handle embedded languages.

Here's an outline of VS Code's HTML support:

- The built-in [html extension][LK322] only provides syntax highlighting and language configuration for HTML.
- The built-in [html-language-features extension][LK322] includes an HTML Language Server to offer programmatic language features for HTML.
- The HTML Language Server uses [vscode-html-languageservice][LK322] to support HTML.
- The CSS Language Server uses [vscode-css-languageservice][LK322] to support CSS in HTML.

The HTML language server analyzes an HTML document, breaks it down into language regions, and uses the corresponding language service to handle language server requests.

For example:

- For auto-completion request at `<|`, the HTML language server uses the HTML language service to provide HTML completions.
- For auto-completion request at `<style>.foo { | }</style>`, the HTML language server uses the CSS language service to provide CSS completions.

Let's examine the [lsp-embedded-language-service][LK322] sample, a simplified version of the HTML language server that implements auto-completion for HTML and CSS, and diagnostic errors for CSS.

### Language Services sample

>**Note**: This sample assumes knowledge of the [Programmatic Language Features topic][LN379] and the [Language Server extension guide][LN379]. The code builds on top of [lsp-sample][LK322].

The source code is available at [microsoft/vscode-extension-samples][LK322].

Compared to the [lsp-sample][LK322], the client-side code is the same.

As mentioned above, the server breaks down the document into different language regions to handle the embedded content.

Here is a simple example:

```html
<div></div>
<style>.foo { }</style>
```

In this case, the server detects the `<style>` tag, and marks `.foo { }` as a CSS region.

Given an auto completion request at a specific position, the server uses the following logic to compute a response:

- If the position falls into any region
  - Handle it with a virtual document with the region's language, while replacing all other regions with whitespace
- If the position falls out of any region
  - Handle it with a virtual document in HTML, while replacing all regions with whitespace

For example, when doing an auto completion in this position:

```html
<div></div>
<style>.foo { | }</style>
```

The server determines that the position is inside the region and computes a virtual CSS document with the following content (█ stands for space)):

```css
███████████
███████.foo { | }████████
```

The server then uses `vscode-css-languageservice` to analyze this document and compute a list of completion items. Because the content now contains no HTML, the CSS language service can handle it without issue. By replacing all non-CSS content with whitespace, we save ourselves from having to manually offset the positions.

The server code handling completion requests:

```ts
connection.onCompletion(async (textDocumentPosition, token) => {
  const document = documents.get(textDocumentPosition.textDocument.uri);
  if (!document) {
    return null;
  }

  const mode = languageModes.getModeAtPosition(document, textDocumentPosition.position);
  if (!mode || !mode.doComplete) {
    return CompletionList.create();
  }
  const doComplete = mode.doComplete!;

  return doComplete(document, textDocumentPosition.position);
});
```

The CSS mode that is responsible for handling all language server requests that fall into CSS regions:

```ts
export function getCSSMode(
  cssLanguageService: CSSLanguageService,
  documentRegions: LanguageModelCache<HTMLDocumentRegions>
): LanguageMode {
  return {
    getId() { return 'css' },
    doComplete(document: TextDocument, position: Position) {
      // Get virtual CSS document, with all non-CSS code replaced with whitespace
      const embedded = documentRegions.get(document).getEmbeddedDocument('css')
      // Compute a response with vscode-css-languageservice
      const stylesheet = cssLanguageService.parseStylesheet(embedded)
      return cssLanguageService.doComplete(embedded, position, stylesheet)
    }
  }
}
```

This is a simple and effective approach for handling embedded languages. However, there are some drawbacks with this approach:

- You have to continuously update the language services that your language server depends on.
- It can be challenging to include language services that are not written in the same language as your language server. For example, a PHP language server written in PHP would find it cumbersome to include the `vscode-css-languageservice` written in TypeScript.

We'll now cover **request forwarding**, which would solve the problems above.

## Request Forwarding

In a nutshell, request forwarding works in a similar way as language services. The request forwarding approach also takes language server requests, computes virtual content, and calculates the responses.

The major differences are:

- While the language service approach uses libraries to calculate language server responses, request forwarding sends the request back to VS Code to use extensions that are active and have registered a completion provider for the embedded language.

Here is the simple example again:

```html
<div></div>
<style>.foo { | }</style>
```

Auto completion happens in this way:

- The language client registers a virtual text document provider for `embedded-content` document using `workspace.registerTextDocumentContentProvider`.
- The language client hijacks completion requests for `<FILE_URI>`.
- The language client determines that the request position falls into a CSS region.
- The language client constructs a new URI, such as `embedded-content://css/<FILE_URI>.css`.
- The language client then calls `commands.executeCommand('vscode.executeCompletionItemProvider', ...)`
  - VS Code's CSS language server responds to this provider request.
  - The virtual text document provider provides CSS language server with virtual content, where all non-CSS code is replaced with whitespace.
  - The language client receives response from VS Code and sends it as the response.

With this approach, we are able to compute CSS auto-completion even if our code does not include any library that understands CSS. As VS Code updates its CSS language server, we get the latest CSS language support without having to update our code.

Let's now review the sample code.

### Request Forwarding sample

>**Note**: This sample assumes knowledge of the [Programmatic Language Features topic][LN379] and the [Language Server extension guide][LN379]. The code builds on top of [lsp-sample][LK322].

The source code is available at [microsoft/vscode-extension-samples][LK322].

Keeping a map between document's URI and their virtual documents, and provide them for corresponding requests:

```ts
const virtualDocumentContents = new Map<string, string>()

workspace.registerTextDocumentContentProvider('embedded-content', {
  provideTextDocumentContent: uri => {
    // Remove leading `/` and ending `.css` to get original URI
    const originalUri = uri.path.slice(1).slice(0, -4);
    const decodedUri = decodeURIComponent(originalUri);
    return virtualDocumentContents.get(decodedUri);
  }
})
```

By using the `middleware` option of language client, we hijack request for auto completion:

```ts
let clientOptions: LanguageClientOptions = {
  documentSelector: [{ scheme: 'file', language: 'html' }],
  middleware: {
    provideCompletionItem: async (document, position, context, token, next) => {
      // If not in `<style>`, do not perform request forwarding
      if (!isInsideStyleRegion(htmlLanguageService, document.getText(), document.offsetAt(position))) {
        return await next(document, position, context, token);
      }

      const originalUri = document.uri.toString(true);
      virtualDocumentContents.set(originalUri, getCSSVirtualContent(htmlLanguageService, document.getText()));

      const vdocUriString = `embedded-content://css/${encodeURIComponent(
        originalUri
      )}.css`;
      const vdocUri = Uri.parse(vdocUriString);
      return await commands.executeCommand<CompletionList>(
        'vscode.executeCompletionItemProvider',
        vdocUri,
        position,
        context.triggerCharacter
      );
    }
  }
}
```

## Potential issues

While implementing embedded language servers, we have encountered many issues. Although we do not have a perfect solution yet, we want to give you a heads-up as you are likely to encounter those issues as well.

### Hard to implement language features

Generally, language features that work across language region boundaries are harder to implement. For example, auto-completion or hover content is easy to implement, as you can detect the embedded content's language and compute a response based on the embedded content. However, language features such as formatting or renaming might need special handling. In the case of formatting, you need to handle indentation and formatter settings for multiple regions inside the single document. For renaming, it can be challenging to make it work across different regions within different documents.

### Language Services can be stateful and hard to embed

VS Code's HTML support provides HTML, CSS, and JavaScript language features. Although the HTML and CSS language services are non-stateful, the TypeScript server powering the JavaScript language features is. We only offer basic JavaScript support inside HTML documents because it is hard to inform TypeScript of the project's state. For example, if you include a `<script>` tag that points to the `lodash` library hosted on a CDN, you will not get `_.` completions inside `<script>` tags.

### Encoding and decoding

The main language of a document might have a different encoding or escaping rules than its embedded language. For example, this HTML document is invalid according to the [HTML spec][LK323]:

```html
<SCRIPT type="text/javascript">
  document.write ("<EM>This won't work</EM>")
</SCRIPT>
```

In this case, if the language server for the embedded JavaScript returns a result that contains `</`, it should be escaped to `<\/`.

## Conclusion

Both approaches have their pros and cons.

Language Service:

- \+ Full control of the language server and the user experience.
- \+ No dependencies on other language servers. All code is in one repository.
- \+ The language server can be reused in all [LSP-compliant code editors][LK324].
- \- Might be hard to embed language services written in other languages.
- \- Needs continued maintenance to get new features from language service dependencies.

Request forwarding:

- \+ Avoid issues embedding language services not written in the language server's language (for example, embedding C# compiler in a Razor language server to support C#).
- \+ No maintenance needed to get new features upstream from other language services.
- \- Does not yet work with diagnostics errors. The VS Code API currently does not support diagnostic providers that can 'pull' (request) diagnostics. ([Issue][LK325]).
- \- Hard to share state to other language servers because of lack of control.
- \- Cross-language features might be hard to implement (for example, providing CSS completion for `.foo` when `<div class="foo">` is present).

Overall, we recommend building a language server by embedding language services, as this approach gives you more control over the user experience and the server is reusable for any LSP-compliant editors. However, if you have a simple use case where embedded content can be easily handled without context or language server state, or if bundling the Node.js library is a problem for you, you can consider the Request Forwarding approach.


<a id="_api_working-with-extensions_testing-extension" ></a>

# /api/working-with-extensions/testing-extension
-------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 2447F8EB-15F1-4279-B621-126C7B8EBF4B
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Write tests for your Visual Studio Code extension (plug-in).
    ---

## Testing Extensions

Visual Studio Code supports running and debugging tests for your extension. These tests will run inside a special instance of VS Code named the **Extension Development Host**, and have full access to the VS Code API. We refer to these tests as integration tests, because they go beyond unit tests that can run without a VS Code instance. This documentation focuses on VS Code integration tests.

## Overview

If you are using the [Yeoman Generator][LK326] to scaffold an extension, integration tests are already created for you.

In the generated extension, you can use `npm run test` or `yarn test` to run the integration tests that:

- Downloads and unzips latest version of VS Code.
- Runs the [Mocha][LK327] tests specified by the extension test runner script.

## Quick Setup: The test CLI

The VS Code team publishes a command-line tool to run extension tests. You can find an example in the [extensions sample repo][LK328].

The test CLI provides quick setup, and also allows you to easily run and debug tests of the VS Code UI using the [Extension Test Runner][LK329]. The CLI exclusively uses [Mocha][LK329] under the hood.

To get started, you'll want to first install the `@vscode/test-cli` module, as well as `@vscode/test-electron` module that enables tests to be run in VS Code Desktop:

```bash
npm install --save-dev @vscode/test-cli @vscode/test-electron
```

After installing the modules, you'll have the `vscode-test` command line, which you can add to the `scripts` section in your `package.json`:

```diff
{
  "name": "my-cool-extension",
  "scripts": {
+   "test": "vscode-test"
```

`vscode-test` looks for a [`.vscode-test.js/mjs/cjs`][LK330] file relative to the current working directory. This file provides the configuration for the test runner, and you can find the entire definition [here][LK331].

Common options include:

- **(required)** `files` - A pattern, list of patterns, or absolute paths containing the tests to run.
- `version` - The version of VS Code to use for running tests (defaults to `stable`).
- `workspaceFolder` - The path to a workspace to open during tests.
- `extensionDevelopmentPath` - The path to your extension folder (defaults to the directory of the config file).
- `mocha` - An object containing additional [options][LK332] to pass to Mocha.

The configuration might be as simple as:

```js
// .vscode-test.js
const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig({ files: 'out/test/**/*.test.js' });
```

...or more advanced:

```js
// .vscode-test.js
const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    label: 'unitTests',
    files: 'out/test/**/*.test.js',
    version: 'insiders',
    workspaceFolder: './sampleWorkspace',
    mocha: {
      ui: 'tdd',
      timeout: 20000,
    },
  },
  // you can specify additional test configurations, too
]);
```

If you define multiple configurations by passing an array, they'll be run sequentially when you run `vscode-test`. You can filter by the `label` and run them individually using the `--label` flag, for example `vscode-test --label unitTests`. Run `vscode-test --help` for the complete set of command-line options.

### Test scripts

Once the CLI is set up, you can write and run your tests. Test scripts have access to the VS Code API, and are run under Mocha. Here's a sample ([src/test/suite/extension.test.ts][LK333]):

```ts
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
  suiteTeardown(() => {
    vscode.window.showInformationMessage('All tests done!');
  });

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
```

You can run this test with the `npm test` command, or by using the **Test: Run All Tests** command in VS Code after you install the [Extension Test Runner][LK333]. You can also debug the test using **Test: Debug All Tests** command.

## Advanced setup: Your own runner

You can find the configuration for this guide in the [helloworld-test-sample][LK334]. The rest of this document explains these files in the context of the sample:

- The **test script** ([`src/test/runTest.ts`][LK335])
- The **test runner script** ([`src/test/suite/index.ts`][LK336])

VS Code provides two CLI parameters for running extension tests, `--extensionDevelopmentPath` and `--extensionTestsPath`.

For example:

```bash
# - Launches VS Code Extension Host
# - Loads the extension at <EXTENSION-ROOT-PATH>
# - Executes the test runner script at <TEST-RUNNER-SCRIPT-PATH>
code \
--extensionDevelopmentPath=<EXTENSION-ROOT-PATH> \
--extensionTestsPath=<TEST-RUNNER-SCRIPT-PATH>
```

The **test script** ([`src/test/runTest.ts`][LK336]) uses the `@vscode/test-electron` API to simplify the process of downloading, unzipping, and launching VS Code with extension test parameters:

```ts
import * as path from 'path';

import { runTests } from '@vscode/test-electron';

async function main() {
  try {
    // The folder containing the Extension Manifest package.json
    // Passed to `--extensionDevelopmentPath`
    const extensionDevelopmentPath = path.resolve(__dirname, '../../');

    // The path to the extension test runner script
    // Passed to --extensionTestsPath
    const extensionTestsPath = path.resolve(__dirname, './suite/index');

    // Download VS Code, unzip it and run the integration test
    await runTests({ extensionDevelopmentPath, extensionTestsPath });
  } catch (err) {
    console.error(err);
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
```

The `@vscode/test-electron` API also allows:

- Launching VS Code with a specific workspace.
- Downloading a different version of VS Code rather than the latest stable release.
- Launching VS Code with additional CLI parameters.

You can find more API usage examples at [microsoft/vscode-test][LK336].

### The test runner script

When running the extension integration test, `--extensionTestsPath` points to the **test runner script** ([`src/test/suite/index.ts`][LK336]) that programmatically runs the test suite. Below is the [test runner script][LK336] of `helloworld-test-sample` that uses Mocha to run the test suite. You can use this as a starting point and customize your setup with [Mocha's API][LK337]. You can also replace Mocha with any other test framework that can be run programmatically.

```ts
import * as path from 'path';
import * as Mocha from 'mocha';
import { glob } from 'glob';

export function run(): Promise<void> {
  // Create the mocha test
  const mocha = new Mocha({
    ui: 'tdd',
    color: true
  });

  const testsRoot = path.resolve(__dirname, '..');

  return new Promise((c, e) => {
    glob('**/**.test.js', { cwd: testsRoot }).then((files) => {
      // Add files to the test suite
      files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

      try {
        // Run the mocha test
        mocha.run(failures => {
          if (failures > 0) {
            e(new Error(`${failures} tests failed.`));
          } else {
            c();
          }
        });
      } catch (err) {
        e(err);
      }
    }).catch((err) => {
      return e(err);
    });
  });
}
```

Both the test runner script and the `*.test.js` files have access to the VS Code API.

Here is a sample test ([src/test/suite/extension.test.ts][LK337]):

```ts
import * as assert from 'assert';
import { after } from 'mocha';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';

suite('Extension Test Suite', () => {
  after(() => {
    vscode.window.showInformationMessage('All tests done!');
  });

  test('Sample test', () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });
});
```

### Debugging the tests

Debugging the tests is similar to debugging the extension.

Here is a sample `launch.json` debugger configuration:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
  ]
}
```

<video autoplay loop muted playsinline controls>
  <source src="/assets/api/working-with-extensions/testing-extension/debug.mp4" type="video/mp4">
</video>

## Tips

### Using Insiders version for extension development

Because of VS Code's limitation, if you are using VS Code stable release and try to run the integration test **on CLI**, it will throw an error:

```
Running extension tests from the command line is currently only supported if no other instance of Code is running.
```

In general if you run extension tests from CLI, the version the tests run with cannot be running already. As a workaround, you can run the tests
in VS Code Stable and use [VS Code Insiders][LK337] for development. As long as you are not running the tests
from CLI in VS Code Insiders but in VS Code Stable, this setup will work fine.

An alternative is to run the extension tests from the debug launch configuration from within VS Code itself. This has the additional advantage
that you can even debug the tests.

### Disabling other extensions while debugging

When you debug an extension test in VS Code, VS Code uses the globally installed instance of VS Code and will load all installed extensions. You can add `--disable-extensions` configuration to the `launch.json` or the `launchArgs` option of `@vscode/test-electron`'s `runTests` API.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Extension Tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test/suite/index"
      ],
      "outFiles": ["${workspaceFolder}/out/test/**/*.js"]
    }
  ]
}
```

```ts
await runTests({
  extensionDevelopmentPath,
  extensionTestsPath,
  /**
   * A list of launch arguments passed to VS Code executable, in addition to `--extensionDevelopmentPath`
   * and `--extensionTestsPath` which are provided by `extensionDevelopmentPath` and `extensionTestsPath`
   * options.
   *
   * If the first argument is a path to a file/folder/workspace, the launched VS Code instance
   * will open it.
   *
   * See `code --help` for possible arguments.
   */
  launchArgs: ['--disable-extensions']
});
```

### Custom setup with `@vscode/test-electron`

Sometimes you might want to run custom setups, such as running `code --install-extension` to install another extension before starting your test. `@vscode/test-electron` has a more granular API to accommodate that case:

```ts
import * as cp from 'child_process';
import * as path from 'path';
import {
  downloadAndUnzipVSCode,
  resolveCliArgsFromVSCodeExecutablePath,
  runTests
} from '@vscode/test-electron';

async function main() {
  try {
    const extensionDevelopmentPath = path.resolve(__dirname, '../../../');
    const extensionTestsPath = path.resolve(__dirname, './suite/index');
    const vscodeExecutablePath = await downloadAndUnzipVSCode('1.40.1');
    const [cliPath, ...args] = resolveCliArgsFromVSCodeExecutablePath(vscodeExecutablePath);

    // Use cp.spawn / cp.exec for custom setup
    cp.spawnSync(cliPath, [...args, '--install-extension', '<EXTENSION-ID-OR-PATH-TO-VSIX>'], {
      encoding: 'utf-8',
      stdio: 'inherit'
    });

    // Run the extension test
    await runTests({
      // Use the specified `code` executable
      vscodeExecutablePath,
      extensionDevelopmentPath,
      extensionTestsPath
    });
  } catch (err) {
    console.error('Failed to run tests');
    process.exit(1);
  }
}

main();
```

## Next steps

- [Continuous Integration][LN379] - Run your extension tests in a Continuous Integration service such as Azure DevOps.


<a id="_api_working-with-extensions_publishing-extension" ></a>

# /api/working-with-extensions/publishing-extension
----------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 7EA90618-43A3-4873-A9B5-61CC131CE4EE
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Learn how to publish Visual Studio Code extensions to the public Marketplace and share them with other developers.
    ---

## Publishing Extensions

Once you have made a high-quality extension, you can publish it to the [VS Code Extension Marketplace][LK337] so others can find, download, and use your extension. Alternatively, you can [package][LN380] an extension into the installable VSIX format and share it with other users.

This topic covers:

- Using [vsce][LN381], the CLI tool for managing VS Code extensions
- [Packaging][LN381], [publishing][LN382] and [unpublishing][LN383] extensions
- [Registering a publisher][LN384] necessary for publishing extensions

## vsce

[vsce][LK338], short for "Visual Studio Code Extensions", is a command-line tool for packaging, publishing and managing VS Code extensions.

### Installation

Make sure you have [Node.js][LK338] installed. Then run:

```bash
npm install -g @vscode/vsce
```

### Usage

You can use `vsce` to easily [package][LN384] and [publish][LN384] your extensions:

```bash
$ cd myExtension
$ vsce package
# myExtension.vsix generated
$ vsce publish
# <publisher id>.myExtension published to VS Code Marketplace
```

`vsce` can also search, retrieve metadata, and unpublish extensions. For a reference on all the available `vsce` commands, run `vsce --help`.

## Publishing extensions

---

**Note:** Due to security concerns, `vsce` will not publish extensions that contain user-provided SVG images.

The publishing tool checks the following constraints:

- The icon provided in `package.json` may not be an SVG.
- The badges provided in the `package.json` may not be SVGs unless they are from [trusted badge providers][LN385].
- Image URLs in `README.md` and `CHANGELOG.md` need to resolve to `https` URLs.
- Images in `README.md` and `CHANGELOG.md` may not be SVGs unless they are from [trusted badge providers][LN385].

---

Visual Studio Code uses [Azure DevOps][LK339] for its Marketplace services. This means that authentication, hosting, and management of extensions are provided through Azure DevOps.

`vsce` can only publish extensions using [Personal Access Tokens][LK340]. You need to create at least one in order to publish an extension.

### Get a Personal Access Token

First off, follow the documentation to [create your own organization][LK341] in Azure DevOps. In the following examples, the organization's name is `vscode`, you should use your new organization name as appropriate. Note that the organization's name doesn't necessarily have to be same as your publisher name.

1. From your organization's home page (for example: `https://dev.azure.com/vscode`), open the User settings dropdown menu next to your profile image and select **Personal access tokens**:

    ![Personal settings menu][LN386]

1. On the **Personal Access Tokens** page, select **New Token**:

    ![Create new token button][LN387]

1. In the Create a new personal access token modal, select the following details for the token:

    - Name: any name you want for the token
    - Organization: **All accessible organizations**
    - Expiration (optional): set the desired expiration date for the token
    - Scopes: **Custom defined**:
      - click **Show all scopes** link below the **Scopes** section
      - in the Scopes list, scroll to **Marketplace** and select **Manage** scope

    ![Create personal access token][LN388]

1. Click **Create**.

    You'll be presented with your newly created Personal Access Token. **Copy** it to the safe location, you'll need it to [create a publisher][LN388].

### Create a publisher

A **publisher** is an identity that can publish extensions to the Visual Studio Code Marketplace. Every extension needs to include a `publisher` identifier in its [`package.json` file][LN388].

To create a publisher:

1. Go to the [Visual Studio Marketplace publisher management page][LK342].
1. Log in with the same Microsoft account you used to create the [Personal Access Token][LN389] in the previous section.
1. Click **Create publisher** in the pane on the left.
1. In the new page, specify the mandatory parameters for a new publisher - identifier and name (**ID** and **Name** fields respectively):

    - **ID**: the **unique** identifier for your publisher in Marketplace that will be used in your extension URLs. ID cannot be changed once created.
    - **Name**: the **unique** name of your publisher that will be displayed in Marketplace with your extensions. This can be your company or brand name.

    Below is an example of publisher identifier and name for the Docker extension:

    ![Example of publisher identifier and name][LN390]

1. Optionally, fill out the rest of the fields.
1. Click **Create**
1. Verify the newly created publisher using `vsce`. In your terminal, run the following command, and when prompted, type the Personal Access Token created in the previous step:

    ```bash
    vsce login <publisher id>

    https://marketplace.visualstudio.com/manage/publishers/
    Personal Access Token for publisher '<publisher id>': ****************************************************

    The Personal Access Token verification succeeded for the publisher '<publisher id>'.
    ```

Once verified, you are ready to publish an extension.

### Publish an extension

You can publish an extension in two ways:

1. Automatically, using `vsce publish` command:

    ```bash
    vsce publish
    ```

    If you haven't already provided your personal access token with the `vsce login` command above, `vsce` will ask for it.

1. Manually, using `vsce package` to package the extension into the installable VSIX format and then uploading it to the [Visual Studio Marketplace publisher management page][LK342]:

    ![Add an extension through management page][LN391]

## Review extension installs and ratings

The [Visual Studio Marketplace publisher management page][LK342] gives you access to each extension's Acquisition Trend over time, as well as Total Acquisition counts and Ratings & Reviews. To see the reports, click an extension or choose **More Actions > Reports**.

![Marketplace extension report][LN392]

## Auto-increment the extension version

When publishing an extension, you can auto-increment its version number by specifying the [SemVer][LK343]-compatible number or version (`major`, `minor`, or `patch`) to increment. For example, to update an extension's version from 1.0.0 to 1.1.0, you would specify:

```bash
vsce publish minor
```

or

```bash
vsce publish 1.1.0
```

Both commands will first modify the extension's `package.json` [version][LN393] attribute and then publish it with the updated version.

> **Note:** If you run `vsce publish` in a git repo, it will also create a version commit and tag via [npm-version][LK344]. The default commit message will be the extension's version, but you can supply a custom commit message using the `-m` flag. (The current version can be referenced from the commit message with `%s`).

## Unpublishing extensions

You can unpublish an extension from the [Visual Studio Marketplace publisher management page][LK344] by clicking **More Actions > Unpublish**:

![Unpublish the extension via the Marketplace management page][LN394]

Once unpublished, the extension's Availability status is changed to **Unpublished** and it will no longer be available for download from both the Marketplace and Visual Studio Code:

![Unpublished extension][LN395]

> **Note:** When you unpublish an extension, the Marketplace will preserve the extension statistics.

## Removing extensions

You can remove an extension in two ways:

1. Automatically, using [`vsce`][LN395] with the `unpublish` command:

    ```bash
    vsce unpublish <publisher id>.<extension name>
    ```

1. Manually, from the [Visual Studio Marketplace publisher management page][LK344] by clicking **More Actions > Remove**:

    ![Remove the extension via the Marketplace management page][LN396]

In both cases, you will be prompted to confirm the removal by typing the extension name. Note that the removal action is **irreversible**.

> **Note:** When you unpublish an extension, the Marketplace will remove any extension statistics. You may want to update your extension rather than unpublish it.

## Deprecating extensions

You can just deprecate an extension or deprecate in favor of another extension or a setting. The deprecated extension will be rendered with a dimmed strikethrough text in the UI:

![Rust extension shown as deprecated in extension search][LN397]

Each deprecated extension has a yellow warning icon in the bottom right corner of the extension tile (see the screenshot above). When hovering over the extension tile, you can see deprecation details next to this icon, whether:

- The extension was deprecated without any alternatives:

  ![Deprecated extension without alternatives][LN398]

- The extension was deprecated in favor of another extension:

  ![Deprecated extension with an alternative extension][LN399]

- The extension was deprecated in favor of a setting:

  ![Deprecated extension with an alternative setting][LN400]

VS Code will not automatically migrate or uninstall already installed deprecated extensions. If a deprecated extension has an alternative extension, or a setting, VS Code will show a **Migrate** button to help you quickly switch to the specified alternative:

![Deprecated extension with a migrate button][LN401]

To mark your extension as deprecated, please leave a comment in the [Deprecated extensions][LK345] discussion thread.

> **Note:** For now, extensions are not rendered as deprecated in the Marketplace. This functionality will be available later.

## Packaging extensions

You can choose to package your extension if you want to:

- Test it on your VS Code instance.
- Distribute it without publishing it to the Marketplace.
- Share it with others privately.

Packaging means creating a `.vsix` file that contains your extension. This file can then be installed in VS Code. Some extensions publish `.vsix` files as a part of their GitHub releases.

For extension authors, to package an extension, run the following command in your extension's root folder:

```bash
vsce package
```

This command will create a `.vsix` file in your extension's root folder. For example, `my-extension-0.0.1.vsix`.

For users, to install a `.vsix` file in VS Code:

1. Go to the Extensions view.
1. Click **Views and More Actions...**
1. Select **Install from VSIX...**

or

in your terminal, run the following command:

```bash
# if you use VS Code
code --install-extension my-extension-0.0.1.vsix

# if you use VS Code Insiders
code-insiders --install-extension my-extension-0.0.1.vsix
```

## Your extension folder

To load an extension, you need to copy the files to your VS Code extensions folder `.vscode/extensions`. Depending on your operating system, this folder has a different location:

- **Windows:** `%USERPROFILE%\.vscode\extensions`
- **macOS:** `~/.vscode/extensions`
- **Linux:** `~/.vscode/extensions`

## Visual Studio Code compatibility

When authoring an extension, you must specify the versions of VS Code your extension is compatible with. To do this, use the `engines.vscode` property inside `package.json`:

```json
{
  "engines": {
    "vscode": "^1.8.0"
  }
}
```

- A value of `1.8.0` (without caret) means that your extension is compatible only with VS Code `1.8.0`.
- A value of `^1.8.0` means that your extension is compatible with VS Code `1.8.0` and onwards, including `1.8.1`, `1.9.0`, etc.

You can use the `engines.vscode` property to ensure the extension only gets installed for clients that contain the API you depend on. This mechanism plays well both with Stable and Insiders releases.

For example, imagine that the latest Stable version of VS Code is `1.8.0`. During the development of version `1.9.0`, a new API was introduced and made available in the Insider release through the version `1.9.0-insider`. If you want to publish an extension version that benefits from this API, you should indicate a version dependency of `^1.9.0`. In this way, your new extension version will only be available on VS Code `>=1.9.0` (in other words, users with the current Insiders release). Users with the VS Code Stable will only get the update when the Stable release reaches version `1.9.0`.

## Advanced usage

### Marketplace integration

You can customize how your extension looks in the Visual Studio Marketplace. See the [Go extension][LK346] for an example.

Here are some tips for making your extension look great on the Marketplace:

- Add a `README.md` file to the root of your extension with the content you want to show on the extension's Marketplace page.

  > **Note:** If you have a `repository` property in your `package.json` that points to a public GitHub repository, `vsce` will automatically detect it and adjust relative links accordingly, using the `main` branch by default. You can override this with the `--githubBranch` flag when running `vsce package` or `vsce publish`. You can also set base URLs for links and images with the `--baseContentUrl` and `--baseImagesUrl` flags.

- Add a `LICENSE` file to the root of your extension with the information about the extension's license.
- Add a `CHANGELOG.md` file to the root of your extension with the information about the history of the changes for your extension.
- Add a `SUPPORT.md` file to the root of your extension with the information about how to get support for your extension.
- Set the banner background color on the Marketplace page by specifying the corresponding hex value via the `galleryBanner.color` property in `package.json`.
- Set an icon by specifying a relative path to a 128x128px PNG file included in your extension via the `icon` property in `package.json`.

See more information in [Marketplace Presentation Tips][LN401].

### Verify a publisher

You can become a **verified publisher** by verifying ownership of an [eligible domain][LN402] associated with your brand or identity. Once your publisher is verified, the Marketplace will add a verified badge to your extension details.

![Verified publisher indicators in VS Code][LN403]

To verify a publisher:

1. Go to the [Visual Studio Marketplace publisher management page][LK346].
2. In the pane on the left, select or [create a publisher][LN403] you wish to verify.
3. In the main pane, select the **Details** tab.

   ![Publisher details tab location][LN404]

4. In the **Details tab**, under the **Verified domain** section, type an [eligible domain][LN404].

   ![Publisher details tab with provided domain to verify][LN405]

   > **Note**: Notice an asterisk (*) next to **Details** tab title after you start typing. Just like in VS Code, this indicates that you have unsaved changes. For the same reason, the **Verify** button is disabled yet.

5. Select **Save** and then **Verify**.

   ![Saved domain to verify][LN406]

   A dialog window will appear, providing you with instructions about adding a TXT record to your domain's DNS configuration.

   ![TXT record verification][LN407]

6. Follow the instructions to add the TXT record to your domain's DNS configuration.
7. Select **Verify** in the dialog window to validate that the TXT record has been successfully added.

   ![Validation submitted][LN408]

   Once your TXT record has been validated, the Marketplace team will review your request and grant verification within 5 business days.

Once verified, you will also see the corresponding badge next to your publisher name in the Visual Studio Marketplace publisher management page:

![Verified publisher manage][LN409]

> **Note**: Any changes to the publisher display name will revoke the verified badge.

### Eligible domains

Eligible domains meet the following criteria:

- You must be able to manage the DNS configuration settings and add a TXT record.
- It is not a subdomain ({subdomain}.github.io, {subdomain}.contoso.com, or similar).
- It must use an HTTPS protocol.
- It must be able to respond with an HTTP 200 status to a HEAD request.

### Extension pricing label

You can opt-in to show a pricing label on your extension's Marketplace page to indicate that it is `Free` or `Free Trial`.

To show a pricing label, add the `pricing` property to your `package.json`. For example:

```json
{
  "pricing": "Free"
}
```

Allowed values are: `Free` and `Trial` (case-sensitive). When the `pricing` property is not specified, the default value is `Free`.

>**Note:** Make sure to use the `vsce` version >= `2.10.0` when publishing your extension for the pricing label to work.

### Extension Sponsor

You can opt-in to sponsorship to give your users a way to support your work.

To show a sponsor link, add the `sponsor` property to your `package.json`. For example:

```json
"sponsor": {
  "url": "https://github.com/sponsors/nvaccess"
}
```

> **Note:** Make sure to use the `vsce` version >= `2.9.1` when publishing your extension for sponsorship to work.

The sponsor link will appear on your extension's page in Marketplace and VS Code in the extension details header:

![Sponsor link in extension details page][LN410]

We hope this will allow our users to fund the extensions that they depend on to improve the extension's performance, reliability, and stability.

### Using .vscodeignore

You can create a `.vscodeignore` file to prevent some files from being included in your extension's package. This file is a collection of [glob][LK347] patterns, one per line. For example:

```bash
**/*.ts
**/tsconfig.json
!file.ts
```

You should ignore all files not needed at runtime. For example, if your extension is written in TypeScript, you should ignore all `**/*.ts` files, like in the example above.

**Note:** Development dependencies listed in `devDependencies` will be automatically ignored, so you don't need to add them explicitly.

### Pre-publish step

You can add a pre-publish step to your manifest file, which will be called every time the extension is packaged. For example, you may want to invoke the [TypeScript][LK348] compiler at this stage:

```json
{
  "name": "uuid",
  "version": "0.0.1",
  "publisher": "someone",
  "engines": {
    "vscode": "0.10.x"
  },
  "scripts": {
    "vscode:prepublish": "tsc"
  }
}
```

### Pre-release extensions

Users can install pre-release versions of extensions in VS Code or VS Code Insiders to regularly get the latest extension version before the official extension release.

![GitHub PR extension pre-release version in the extensions view][LN411]

To publish a pre-release version, pass the `--pre-release` flag to the `vsce package` or `vsce publish` commands:

```bash
vsce package --pre-release
vsce publish --pre-release
```

We only support `major.minor.patch` for extension versions, `semver` pre-release tags are **not supported**. So, if you publish a `major.minor.patch-tag` release to the Marketplace, it will be treated as `major.minor.patch`, and the `tag` will be ignored. Versions must be different between pre-release and regular releases. That is, if `1.2.3` is uploaded as a pre-release, the next regular release must be uploaded with a distinct version, such as `1.2.4`. Full `semver` support will be available in the future.

VS Code will automatically update extensions to the highest version available, so even if a user opted-into a pre-release version and there is an extension release with a higher version, the user will be updated to the released version. So, we recommend that extensions use `major.EVEN_NUMBER.patch` for release versions and `major.ODD_NUMBER.patch` for pre-release versions. For example: `0.2.*` for release and `0.3.*` for pre-release.

If extension authors do not want their pre-release users to be updated to the release version, we recommend always incrementing and publishing a new pre-release version before publishing a release version to make sure that the pre-release version is always higher. Note that while pre-release users will be updated to a release version if it is higher, they still remain eligible to automatically update to future pre-releases with higher version numbers than the release version.

Pre-release extensions are supported after VS Code version `1.63.0`, so all pre-release extensions should have the `engines.vscode` value in their `package.json` set to `>= 1.63.0`.

> **Note:** Extensions that already have a separate standalone pre-release extension should reach out to the VS Code team to enable the automatic uninstall of the outdated separate extension and install the pre-release version of the main extension.

### Platform-specific extensions

You can publish your extension's VSIX package for each platform (Windows, Linux, macOS) VS Code is running on. We call such extensions **platform-specific**.

Starting with version `1.61.0`, VS Code looks for the extension package that matches the current platform.

Platform-specific extensions are useful if your extension has platform-specific libraries or dependencies, so you can control the exact binaries that are included in a platform package. A common use case is the use of **native node modules**.

Platform-specific extensions are published as separate packages containing platform-specific content. You can specify the target platform by passing the [`--target` flag][LN412]. If you don't pass this flag, that package will be used as a fallback for all platforms that have no platform-specific package.

The currently available platforms are: `win32-x64`, `win32-arm64`, `linux-x64`, `linux-arm64`, `linux-armhf`, `alpine-x64`, `alpine-arm64`, `darwin-x64`, `darwin-arm64` and `web`.

If you want a platform-specific extension to also support running in the browser as a [web extension][LN412], it **must** target the `web` platform when publishing. The `web` platform respects the `browser` entry point in the `package.json`. To disable the extension capabilities that are not supported in the `web`, we recommend using `when` clauses in the `package.json` instead of shipping separate `package.json` for the web platform or removing parts of the VSIX that do not work in the `web`.

#### Publishing

Starting from version `1.99.0`, [vsce][LK348] supports a `--target` parameter that allows you to specify the target platform while packaging and publishing a VSIX.

Here's how you can publish a VSIX for the `win32-x64` and `win32-arm64` platforms:

```bash
vsce publish --target win32-x64 win32-arm64
```

Alternatively, you can also use the `--target` flag when packaging to create a platform-specific VSIX. For example, to package a VSIX for the `win32-x64` platform and then publish it:

```bash
vsce package --target win32-x64
vsce publish --packagePath PATH_TO_WIN32X64_VSIX
```

#### Continuous integration

Managing multiple platform-specific VSIXs might get overwhelming, so we suggest automating your extension's build process with [continuous integration][LN412] (CI) tooling. For example, you can use [GitHub Actions][LK349] to build your extensions. Our [platform-specific extension sample][LK350] can be used as a starting point for learning: its [workflow][LK351] enables the common scenario of using platform-specific extension support to distribute native node modules as dependencies across all supported VS Code targets.

## Next steps

- [Extension Marketplace][LN412] - Learn more about VS Code's public Extension Marketplace.
- [Testing Extensions][LN412] - Add tests to your extension project to ensure high quality.
- [Bundling Extensions][LN412] - Improve load times by bundling your extension files with webpack.

## Common questions

### I get a "You exceeded the number of allowed tags of 10" error when I try to publish my extension?

The Visual Studio Marketplace does not allow an extension package to have more than 10 `keywords` in the `package.json`. Keep the number of keywords/tags to less than 10 to avoid this error.

### I get 403 Forbidden (or 401 Unauthorized) error when I try to publish my extension?

One easy mistake to make when creating the PAT (Personal Access Token) is to select a specific organization instead of **All accessible organizations** in the **Organizations** field dropdown. Another possible mistake is incorrect scope - you should set the Authorized Scopes to `Marketplace (Manage)` for the publish to work.

### I can't unpublish my extension through the `vsce` tool?

You may have changed your extension ID or publisher ID. You can also manage your extensions directly via the [Visual Studio Marketplace publisher management page][LK351]. For example, update or [unpublish][LN412].

### Why does vsce not preserve file attributes?

Note that when building and publishing your extension from Windows, all the files included in the extension package will lack POSIX file attributes, namely the executable bit. Some `node_modules` dependencies rely on those attributes to function properly. Publishing from Linux and macOS works as expected.

### Can I publish from a continuous integration (CI) build?

Yes, see the [Automated publishing][LN413] section of the [Continuous Integration][LN413] topic to learn how to configure Azure DevOps, GitHub Actions, and GitLab CI to automatically publish your extension to the Marketplace.

### I get "ERROR The extension 'name' already exists in the Marketplace" error when I try to publish my extension?

The Marketplace requires the [extension name][LN413] to be unique for every extension. If an extension with the same name already exists in the Marketplace, you will get the following error:

```
ERROR The extension 'name' already exists in the Marketplace.
```

The same rule applies for the [display name][LN413] of an extension.

### What package managers are supported?

You can either use npm or yarn v1 to manage your extension's dependencies.


<a id="_api_working-with-extensions_bundling-extension" ></a>

# /api/working-with-extensions/bundling-extension
--------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 26f0c0d6-1ea8-4cc1-bd10-9fa744056e7c
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Bundling Visual Studio Code extensions (plug-ins) with webpack.
    ---

## Bundling Extensions

The first reason to bundle your Visual Studio Code extension is to make sure it works for everyone using VS Code on any platform. Only bundled extensions can be used in VS Code for Web environments like [github.dev][LK352] and [vscode.dev][LK352]. When VS Code is running in the browser, it can only load one file for your extension so the extension code needs to be bundled into one single web-friendly JavaScript file. This also applies to [Notebook Output Renderers][LN413], where VS Code will also only load one file for your renderer extension.

In addition, extensions can quickly grow in size and complexity. They may be authored in multiple source files and depend on modules from [npm][LK352]. Decomposition and reuse are development best practices but they come at a cost when installing and running extensions. Loading 100 small files is much slower than loading one large file. That's why we recommend bundling. Bundling is the process of combining multiple small source files into a single file.

For JavaScript, different bundlers are available. Popular ones are [rollup.js][LK353], [Parcel][LK354], [esbuild][LK355], and [webpack][LK355].

## Using esbuild

`esbuild` is a fast bundler that's simple to configure. To acquire esbuild, open the terminal and type:

```bash
npm i --save-dev esbuild
```

For an example of a complete extension using esbuild, check out the [test-adapter-converter][LK356].

### Run esbuild

You can run esbuild from the command line but to reduce repetition, using npm scripts is helpful.

Merge these entries into the `scripts` section in `package.json`:

```json
"scripts": {
    "vscode:prepublish": "npm run esbuild-base -- --minify",
    "esbuild-base": "esbuild ./src/extension.ts --bundle --outfile=dist/extension.js --external:vscode --format=cjs --platform=node",
    "esbuild": "npm run esbuild-base -- --sourcemap",
    "esbuild-watch": "npm run esbuild-base -- --sourcemap --watch",
    "test-compile": "tsc -p ./"
},
```

The `esbuild` and `esbuild-watch` scripts are for development and they produce the bundle file. The `vscode:prepublish` is used by `vsce`, the VS Code packaging and publishing tool, and run before publishing an extension. Passing the `--minify` flag and no `--sourcemap` compresses the code and creates a small bundle, but also makes debugging hard, so other flags are used during development. To run above scripts, open a terminal and type `npm run esbuild` or select **Tasks: Run Task** from the Command Palette (`kb(workbench.action.showCommands)`).

Finally, you will want to update your `.vscodeignore` file so that compiled files are included in the published extension. Check out the [Publishing][LN414] section for more details.

Jump down to the [Tests][LN415] section to continue reading.

## Using webpack

Webpack is a development tool that's available from [npm][LK356]. To acquire webpack and its command line interface, open the terminal and type:

```bash
npm i --save-dev webpack webpack-cli
```

This will install webpack and update your extension's `package.json` file to include webpack in the `devDependencies`.

Webpack is a JavaScript bundler but many VS Code extensions are written in TypeScript and only compiled to JavaScript. If your extension is using TypeScript, you can use the loader `ts-loader`, so that webpack can understand TypeScript. Use the following to install `ts-loader`:

```bash
npm i --save-dev ts-loader
```

### Configure webpack

With all tools installed, webpack can now be configured. By convention, a `webpack.config.js` file contains the configuration to instruct webpack to bundle your extension. The sample configuration below is for VS Code extensions and should provide a good starting point:

```javascript
//@ts-check

'use strict';

const path = require('path');
const webpack = require('webpack');

/**@type {import('webpack').Configuration}*/
const config = {
    target: 'webworker', // vscode extensions run in webworker context for VS Code web 📖 -> https://webpack.js.org/configuration/target/#target

    entry: './src/extension.ts', // the entry point of this extension, 📖 -> https://webpack.js.org/configuration/entry-context/
    output: { // the bundle is stored in the 'dist' folder (check package.json), 📖 -> https://webpack.js.org/configuration/output/
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: 'source-map',
    externals: {
        vscode: "commonjs vscode" // the vscode-module is created on-the-fly and must be excluded. Add other modules that cannot be webpack'ed, 📖 -> https://webpack.js.org/configuration/externals/
    },
    resolve: { // support reading TypeScript and JavaScript files, 📖 -> https://github.com/TypeStrong/ts-loader
        mainFields: ['browser', 'module', 'main'], // look for `browser` entry point in imported node modules
        extensions: ['.ts', '.js'],
        alias: {
            // provides alternate implementation for node module and source files
        },
        fallback: {
            // Webpack 5 no longer polyfills Node.js core modules automatically.
            // see https://webpack.js.org/configuration/resolve/#resolvefallback
            // for the list of Node.js core module polyfills.
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
            }]
        }]
    },
}
module.exports = config;
```

The file is [available][LK357] as part of the [webpack-extension][LK358] sample. Webpack configuration files are normal JavaScript modules that must export a configuration object.

In the sample above, the following are defined:

* The `target` indicates which context your extension will run. We recommend using `webworker` so that your extension will work both in VS Code for web and VS Code desktop versions.
* The entry point webpack should use. This is similar to the `main` property in `package.json` except that you provide webpack with a "source" entry point, usually `src/extension.ts`, and not an "output" entry point. The webpack bundler understands TypeScript, so a separate TypeScript compile step is redundant.
* The `output` configuration tells webpack where to place the generated bundle file. By convention, that is the `dist` folder. In this sample, webpack will produce a `dist/extension.js` file.
* The `resolve` and `module/rules` configurations are there to support TypeScript and JavaScript input files.
* The `externals` configuration is used to declare exclusions, for example files and modules that should not be included in the bundle. The `vscode` module should not be bundled because it doesn't exist on disk but is created by VS Code on-the-fly when required. Depending on the node modules that an extension uses, more exclusion may be necessary.

Finally, you will want to update your `.vscodeignore` file so that compiled files are included in the published extension. Check out the [Publishing][LN415] section for more details.

### Run webpack

With the `webpack.config.js` file created, webpack can be invoked. You can run webpack from the command line but to reduce repetition, using npm scripts is helpful.

Merge these entries into the `scripts` section in `package.json`:

```json
"scripts": {
    "vscode:prepublish": "npm run package",
    "webpack": "webpack --mode development",
    "webpack-dev": "webpack --mode development --watch",
    "package": "webpack --mode production --devtool hidden-source-map",
    "test-compile": "tsc -p ./"
},
```

The `webpack` and `webpack-dev` scripts are for development and they produce the bundle file. The `vscode:prepublish` is used by `vsce`, the VS Code packaging and publishing tool, and run before publishing an extension. The difference is in the [mode][LK359] and that controls the level of optimization. Using `production` yields the smallest bundle but also takes longer, so else `development` is used. To run above scripts, open a terminal and type `npm run webpack` or select **Tasks: Run Task** from the Command Palette (`kb(workbench.action.showCommands)`).

## Run the extension

Before you can run the extension, the `main` property in `package.json` must point to the bundle, which for the configuration above is [`"./dist/extension"`][LK360]. With that change, the extension can now be executed and tested.

## Tests

Extension authors often write unit tests for their extension source code. With the correct architectural layering, where the extension source code doesn't depend on tests, the webpack produced bundle shouldn't contain any test code. To run unit tests, only a simple compile is necessary. In the sample, there is a `test-compile` script, which uses the TypeScript compiler to compile the extension into the `out` folder. With that intermediate JavaScript available, the following snippet for `launch.json` is enough to run tests.

```json
{
    "name": "Extension Tests",
    "type": "extensionHost",
    "request": "launch",
    "runtimeExecutable": "${execPath}",
    "args": [
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/out/test"
    ],
    "outFiles": [
        "${workspaceFolder}/out/test/**/*.js"
    ],
    "preLaunchTask": "npm: test-compile"
}
```

This configuration for running tests is the same for non-webpacked extensions. There is no reason to webpack unit tests because they are not part of the published portion of an extension.

## Publishing

Before publishing, you should update the `.vscodeignore` file. Everything that's now bundled into the `dist/extension.js` file can be excluded, usually the `out` folder (in case you didn't delete it yet) and most importantly, the `node_modules` folder.

A typical `.vscodeignore` file looks like this:

```bash
.vscode
node_modules
out/
src/
tsconfig.json
webpack.config.js
```

## Migrate an existing extension

Migrating an existing extension to use webpack is easy and similar to the getting started guide above. A real world sample that adopted webpack is the VS Code's References view through this [pull request][LK361].

There you can see:

* Add `webpack`, `webpack-cli`, and `ts-loader` as `devDependencies`.
* Update npm scripts so that webpack is used for development.
* Update the debugger configuration `launch.json` file.
* Add and tweak the `webpack.config.js` configuration file.
* Update `.vscodeignore` to exclude `node_modules` and intermediate output files.
* Enjoy an extension that installs and loads much faster!

## Troubleshooting

### Minification

Bundling in `production` mode also performs code minification. Minification compacts source code by removing whitespace and comments and by changing variable  and function names into something ugly but short. Source code that uses `Function.prototype.name` works differently and so you might have to disable minification.

### webpack critical dependencies

When running webpack, you might encounter a warning like **Critical dependencies: the request of a dependency is an expression**. Such warnings must be taken seriously and likely your bundle won't work. The message means that webpack cannot statically determine how to bundle some dependency. This is usually caused by a dynamic `require` statement, for example `require(someDynamicVariable)`.

To address the warning, you should either:

* Try to make the dependency static so that it can be bundled.
* Exclude that dependency via the `externals` configuration. Also make sure that those JavaScript files aren't excluded from the packaged extension, using a negated [glob pattern][LN415] in `.vscodeignore`, for example `!node_modules/mySpecialModule`.

## Next steps

* [Extension Marketplace][LN415] - Learn more about VS Code's public Extension Marketplace.
* [Testing Extensions][LN415] - Add tests to your extension project to ensure high quality.
* [Continuous Integration][LN415] - Learn how to run extension CI builds on Azure Pipelines.


<a id="_api_working-with-extensions_continuous-integration" ></a>

# /api/working-with-extensions/continuous-integration
------------------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 891072bb-c46d-4392-800a-84d747072ce3
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Use Continuous Integration for testing Visual Studio Code extensions (plug-ins).
    ---

## Continuous Integration

Extension integration tests can be run on CI services. The [`@vscode/test-electron`][LK361] library helps you set up extension tests on CI providers and contains a [sample extension][LK362] setup on Azure Pipelines. You can check out the [build pipeline][LK363] or jump directly to the [`azure-pipelines.yml` file][LK364].

## Automated publishing

You can also configure the CI to publish a new version of the extension automatically.

The publish command is similar to publishing from a local environment using [`vsce`][LK364], but you must somehow provide the Personal Access Token (PAT) in a secure way. By storing the PAT as a `VSCE_PAT` **secret variable**, `vsce` will be able to use it. Secret variables are never exposed, so they are safe to use in a CI pipeline.

## Azure Pipelines

<a href="https://azure.microsoft.com/services/devops/"><img alt="Azure Pipelines" src="/assets/api/working-with-extensions/continuous-integration/pipelines-logo.png" width="318" ></a>

[Azure Pipelines][LK365] is great for running VS Code extension tests as it supports running the tests on Windows, macOS, and Linux. For Open Source projects, you get unlimited minutes and 10 free parallel jobs. This section explains how to set up an Azure Pipelines for running your extension tests.

First, create a free account on [Azure DevOps][LK365] and create an [Azure DevOps project][LK366] for your extension.

Then, add the following `azure-pipelines.yml` file to the root of your extension's repository. Other than the `xvfb` setup script for Linux that is necessary to run VS Code in headless Linux CI machines, the definition is straight-forward:

```yaml
trigger:
  branches:
    include:
    - main
  tags:
    include:
    - v*

strategy:
  matrix:
    linux:
      imageName: 'ubuntu-latest'
    mac:
      imageName: 'macos-latest'
    windows:
      imageName: 'windows-latest'

pool:
  vmImage: $(imageName)

steps:

- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- bash: |
    /usr/bin/Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
    echo ">>> Started xvfb"
  displayName: Start xvfb
  condition: and(succeeded(), eq(variables['Agent.OS'], 'Linux'))

- bash: |
    echo ">>> Compile vscode-test"
    yarn && yarn compile
    echo ">>> Compiled vscode-test"
    cd sample
    echo ">>> Run sample integration test"
    yarn && yarn compile && yarn test
  displayName: Run Tests
  env:
    DISPLAY: ':99.0'
```

Finally, [create a new pipeline][LK367] in your DevOps project and point it to the `azure-pipelines.yml` file. Trigger a build and voilà:

![pipelines][LN416]

You can enable the build to run continuously when pushing to a branch and even on pull requests. See [Build pipeline triggers][LK368] to learn more.

### Azure Pipelines automated publishing

1. Set up `VSCE_PAT` as a secret variable using the [Azure DevOps secrets instructions][LK369].
2. Install `vsce` as a `devDependencies` (`npm install @vscode/vsce --save-dev` or `yarn add @vscode/vsce --dev`).
3. Declare a `deploy` script in `package.json` without the PAT (by default, `vsce` will use the `VSCE_PAT` environment variable as the Personal Access Token).

```json
"scripts": {
  "deploy": "vsce publish --yarn"
}
```

4. Configure the CI so the build will also run when tags are created:

```yaml
trigger:
  branches:
    include:
    - main
  tags:
    include:
    - refs/tags/v*
```

5. Add a `publish` step in `azure-pipelines.yml` that calls `yarn deploy` with the secret variable.

```yaml
- bash: |
    echo ">>> Publish"
    yarn deploy
  displayName: Publish
  condition: and(succeeded(), startsWith(variables['Build.SourceBranch'], 'refs/tags/'), eq(variables['Agent.OS'], 'Linux'))
  env:
    VSCE_PAT: $(VSCE_PAT)
```

The [condition][LK370] property tells the CI to run the publish step only in certain cases.

In our example, the condition has three checks:

- `succeeded()` - Publish only if the tests pass.
- `startsWith(variables['Build.SourceBranch'], 'refs/tags/')` - Publish only if a tagged (release) build.
- `eq(variables['Agent.OS'], 'Linux')` - Include if your build runs on multiple agents (Windows, Linux, etc.). If not, remove that part of the condition.

Since `VSCE_PAT` is a secret variable, it is not immediately usable as an environment variable. Thus, we need to explicitly map the environment variable `VSCE_PAT` to the secret variable.

## GitHub Actions

You can also configure GitHub Actions to run your extension CI. In headless Linux CI machines `xvfb` is required to run VS Code, so if Linux is the current OS run the tests in an Xvfb enabled environment:

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    strategy:
      matrix:
        os: [macos-latest, ubuntu-latest, windows-latest]
    runs-on: $\{{ matrix.os }}
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    - name: Install Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 18.x
    - run: npm install
    - run: xvfb-run -a npm test
      if: runner.os == 'Linux'
    - run: npm test
      if: runner.os != 'Linux'
```

### GitHub Actions automated publishing

1. Set up `VSCE_PAT` as an encrypted secret using the [GitHub Actions secrets instructions][LK371].
2. Install `vsce` as a `devDependencies` (`npm install @vscode/vsce --save-dev` or `yarn add @vscode/vsce --dev`).
3. Declare a `deploy` script in `package.json` without the PAT.

```json
"scripts": {
  "deploy": "vsce publish --yarn"
}
```

4. Configure the CI so the build will also run when tags are created:

```yaml
on:
  push:
    branches:
    - main
  release:
    types:
    - created
```

5. Add a `publish` job to the pipeline that calls `npm run deploy` with the secret variable.

```yaml
- name: Publish
  if: success() && startsWith(github.ref, 'refs/tags/') && matrix.os == 'ubuntu-latest'
  run: npm run deploy
  env:
    VSCE_PAT: $\{{ secrets.VSCE_PAT }}
```

The [if][LK372] property tells the CI to run the publish step only in certain cases.

In our example, the condition has three checks:

- `success()` - Publish only if the tests pass.
- `startsWith(github.ref, 'refs/tags/')` - Publish only if a tagged (release) build.
- `matrix.os == 'ubuntu-latest'` - Include if your build runs on multiple agents (Windows, Linux, etc.). If not, remove that part of the condition.

## GitLab CI

GitLab CI can be used to test and publish the extension in headless Docker containers. This can be done by pulling a preconfigured Docker image, or installing `xvfb` and the libraries required to run Visual Studio Code during the pipeline.

```yaml
image: node:12-buster

before_script:
  - npm install

test:
  script:
    - |
      apt update
      apt install -y libasound2 libgbm1 libgtk-3-0 libnss3 xvfb
      xvfb-run -a npm run test
```

### GitLab CI automated publishing

1. Set up `VSCE_PAT` as a masked variable using the [GitLab CI documentation][LK373].
2. Install `vsce` as a `devDependencies` (`npm install @vscode/vsce --save-dev` or `yarn add @vscode/vsce --dev`).
3. Declare a `deploy` script in `package.json` without the PAT.

```json
"scripts": {
  "deploy": "vsce publish --yarn"
}
```

4. Add a `deploy` job that calls `npm run deploy` with the masked variable which will only trigger on tags.

```yaml
deploy:
  only:
    - tags
  script:
    - npm run deploy
```

## Common questions

### Do I need to use Yarn for continuous integration?

All of the above examples refer to a hypothetical project built with [Yarn][LK374], but can be adapted to use [npm][LK374], [Grunt][LK375], [Gulp][LK376], or any other JavaScript build tool.


<a id="_api_advanced-topics_extension-host" ></a>

# /api/advanced-topics/extension-host
--------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 106AA11C-DB26-493A-9E3C-16F513B2AEC8
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: The Visual Studio Code Extension Host is responsible for managing extensions and ensuring the stability and performance of Visual Studio Code.
    ---

## Extension Host

The **Extension Host** is responsible for running extensions.

## Extension Host configurations

Depending on the configuration of VS Code, there are multiple extension hosts running, with different runtimes, at different locations.

* local – A Node.js extension host running locally, on the same machine as the user interface.
* web – A web extension host running in the browser or locally, on the same machine as the user interface.
* remote – A Node.js extension host running remotely in a container or a remote location.

The following table shows which extension hosts are available in the various configurations of VS Code:

| Configuration | local extension host  | web extension host | remote extension host |
--- | --- | --- | ---
| VS Code on the desktop | ✔️ | ✔️ |  |
| [VS Code with remote][LN416] (Container, SSH, WSL, GitHub Codespace, Tunnel) | ✔️ | ✔️ | ✔️ |
| VS Code for the Web (vscode.dev, github.dev) |  | ✔️ |   |
| VS Code for the Web with Codespaces |  | ✔️ | ✔️ |

### Extension Host runtimes

* Node.js - Extensions are running in a Node.js runtime. Used by the local and remote extension hosts. Extensions need a `main` entry file to run in it.
* Browser - Extensions are running in [Browser WebWorker][LK376] runtime. Used by the web extension host. Extensions need a `browser` entry file to run in it. See the [Web extensions guide][LN416] for more details.

### Preferred extension location

The extension host where an extension is loaded depends on:

* The available extension hosts given by the configuration of VS Code.
* The capabilities of the extension: Can it run in Node.js, and/or the web, or if not indicated, what contributions does it provide?
* Where is the extension installed: On the local machine, on the remote machine, or both.
* The location the extension prefers: the `extensionKind` property.

`extensionKind` is a property in the [extension manifest][LN416]. It allows extensions to specify a preferred running location. That can be the machine that has the workspace (`workspace`) or the user interface (`ui`). If an extension can run on both, it can specify an order of preference.

* `"extensionKind": ["workspace"]` — Indicates the extension requires access to workspace contents and therefore needs to run where the workspace is located. That can be on the local machine or on the remote machine or Codespace. Most extensions fall into this category.
* `"extensionKind": ["ui", "workspace"]` — Indicates the extension **prefers** to run as a UI extension, but does not have any hard requirements on local assets, devices, or capabilities. When using VS Code, the extension will run in VS Code's local extension host if it exists locally and means the user does not have to install the extension on the remote. Otherwise, the extension will run in VS Code's workspace extension host if it exists there. When using VS Code for the Web with Codespaces, it will run in the remote extension host always (as no local extension host is available).
* `"extensionKind": ["workspace", "ui"]` — Indicates the extension **prefers** to run as a workspace extension, but does not have any hard requirements on accessing workspace contents. When using VS Code, the extension will run in VS Code's workspace extension host if it exists in remote workspace, otherwise will run in VS Code's local extension host if it exists locally. When using VS Code for the Web with Codespaces it will run in the remote extension host always (as no local extension host is available).
* `"extensionKind": ["ui"]` — Indicates the extension **must** run close to the UI because it requires access to local assets, devices, or capabilities or because low latency is required. In the case of VS Code for the Web with Codespaces, where no local extension host is available, such an extension can not load, unless it is also a [web extension][LN416]. It will then be loaded in the web extension host with a limitation that it cannot instantiate a web worker.

**Note:** Prior VS Code releases (<1.40) allowed an extension to specify a single location as a string but this is deprecated in favor of multiple locations as a array.

If an extension can run on Node.js and in the browser, a Node.js extension host will be selected if available. There's one exception, when the configuration is VS Code for the Web with Codespaces and the `extensionKind` is set to `ui`, then the web extension host is preferred over the remote extension host.

If an extension is web-only, it will always run on the web extension host, regardless of the `extensionKind` setting. We recommend to not define `extensionKind` in that case.

## Stability and Performance

VS Code aims to deliver a stable and high performance editor to users, and misbehaving extensions should not impact the user experience. The Extension Host in VS Code prevents extensions from:

* Impacting startup performance
* Slowing down UI operations
* Modifying the UI

Additionally, VS Code lets extensions declare their [Activation Events][FX001] and loads them lazily. For example, the Markdown extension should only be loaded when a user opens a Markdown file. This makes sure that extensions do not consume unnecessary CPU and memory.


<a id="_api_advanced-topics_remote-extensions" ></a>

# /api/advanced-topics/remote-extensions
-----------------------------------------

    ---
    ContentId: 5c708951-e566-42db-9d97-e9715d95cdd1
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to adding Visual Studio Code Remote Development and GitHub Codespaces support to extensions
    ---

## Supporting Remote Development and GitHub Codespaces

**[Visual Studio Code Remote Development][LN416]** allows you to transparently interact with source code and runtime environments sitting on other machines (whether virtual or physical). **[GitHub Codespaces][LK377]** is a service that expands these capabilities with managed cloud-hosted environments that are accessible from both VS Code and a browser-based editor.

To ensure performance, Remote Development and GitHub Codespaces both transparently run certain VS Code extensions remotely. However, this can have subtle impacts on how extensions need to work.  While many extensions will work without any modifications, you may need to make changes so that your extension works properly in all environments, although these changes are often fairly minor.

This article summarizes what extension authors need to know about Remote Development and Codespaces including the extension [architecture][LN417], how to [debug your extension][LN418] in remote workspaces or Codespaces, and recommendations on [what to do if your extension does not work properly][LN419].

## Architecture and extension kinds

In order to make working with Remote Development or Codespaces as transparent as possible to users, VS Code distinguishes two kinds of extensions:

- **UI Extensions**: These extensions contribute to the VS Code user interface and are always run on the user's local machine. UI Extensions cannot directly access files in the remote workspace, or run scripts/tools installed in that workspace or on the machine. Example UI Extensions include: themes, snippets, language grammars, and keymaps.

- **Workspace Extensions**: These extensions are run on the same machine as where the workspace is located. When in a local workspace, Workspace Extensions run on the local machine. When in a remote workspace or when using Codespaces, Workspace Extensions run on the remote machine / environment. Workspace Extensions can access files in the workspace to provide rich, multi-file language services, debugger support, or perform complex operations on multiple files in the workspace (either directly or by invoking scripts/tools). While Workspace Extensions do not focus on modifying the UI, they can contribute explorers, views, and other UI elements as well.

When a user installs an extension, VS Code automatically installs it to the correct location based on its kind. If an extension can run as either kind, VS Code will attempt to choose the optimal one for the situation; UI Extensions will run in VS Code's [local Extension Host][LN419], while Workspace Extensions will run in a **Remote Extension Host** that sits in a small [**VS Code Server**][LN420], if it exists in a remote workspace, otherwise will run in VS Code's local extension host if it exists locally. To ensure the latest VS Code client features are available, the server needs to match the VS Code client version exactly. Therefore, the server is automatically installed (or updated) by the Remote Development or GitHub Codespaces extensions when you open a folder in a container, on a remote SSH host, using Codespaces, or in the Windows Subsystem for Linux (WSL). (VS Code also automatically manages starting and stopping the server, so users aren't aware of its presence.)

![Architecture diagram][LN421]

The VS Code APIs are designed to automatically run on the correct machine (either local or remote) when called from both UI or Workspace Extensions. However, if your extension uses APIs not provided by VS Code — such using Node APIs or running shell scripts — it may not work properly when run remotely. We recommend that you test that all features of your extension work properly in both local and remote workspaces.

## Debugging Extensions

While you [can install a development version of your extension][LN422] in a remote environment for testing, if you encounter issues, you will likely want to debug your extension directly in a remote environment. In this section, we will cover how to edit, launch, and debug your extension in [GitHub Codespaces][LN423], a [local container][LN424], an [SSH host][LN425], or in [WSL][LN426].

Typically, your best starting point for testing is to use a remote environment that restricts port access (for example Codespaces, a container, or remote SSH hosts with a restrictive firewall) since extensions that work in these environments tend to work in less restrictive ones like WSL.

### Debugging with GitHub Codespaces

Debugging your extension in [GitHub Codespaces][LK378] preview can be a great starting point since you can use both VS Code and the Codespaces browser-based editor for testing and troubleshooting. You can also use a [custom development container][LN426] if preferred.

Follow these steps:

1. Navigate to the repository that contains your extension on GitHub and [open it in a codespace][LK379] to work with it in a browser-based editor. You can also [open the codespace in VS Code][LK380] if you prefer.

2. While the default image for GitHub Codespaces should have all the needed prerequisites for most extensions, you can install any other required dependencies (for example, using `yarn install` or `sudo apt-get`) in a new VS Code terminal window (`kb(workbench.action.terminal.new)`).

3. Finally, press `kb(workbench.action.debug.start)` or use the **Run and Debug** view to launch the extension inside in the codespace.

    > **Note:** You will not be able to open the extension source code folder in the window that appears, but you can open a sub-folder or somewhere else in the codespace.

The extension development host window that appears will include your extension running in a codespace with the debugger attached to it.

### Debugging in a custom development container

Follow these steps:

1. To use a development container locally, [install and configure the Dev Containers extension][LN427], and use **File > Open... / Open Folder...** to open your source code locally in VS Code. To use Codespaces instead, navigate to the repository that contains your extension on GitHub and [open it in a codespace][LK380] to work with it in a browser-based editor. You can also [open the codespace in VS Code][LK380] if you prefer.

2. Select **Dev Containers: Add Dev Container Configuration Files...** or **Codespaces: Add Dev Container Configuration Files...** from the Command Palette (`kbstyle(F1)`), and pick **Node.js & TypeScript** (or Node.js if you are not using TypeScript) to add the needed container configuration files.

3. **Optional:** After this command runs, you can modify the contents of the `.devcontainer` folder to include additional build or runtime requirements. See the in-depth [Create a Dev Container][LN428] documentation for details.

4. Run **Dev Containers: Reopen in Container** or **Codespaces: Add Dev Container Configuration Files...** and in a moment, VS Code will set up the container and connect. You will now be able to develop your source code from inside the container just as you would in the local case.

5. Run `yarn install` or `npm install` in a new VS Code terminal window (`kb(workbench.action.terminal.new)`) to ensure the Linux versions Node.js native dependencies are installed. You can also install other OS or runtime dependencies, but you may want to add these to `.devcontainer/Dockerfile` as well so they are available if you rebuild the container.

6. Finally, press `kb(workbench.action.debug.start)` or use the **Run and Debug** view to launch the extension inside this same container and attach the debugger.

    > **Note:** You will not be able to open the extension source code folder in the window that appears, but you can open a sub-folder or somewhere else in the container.

The extension development host window that appears will include your extension running in the container you defined in step 2 with the debugger attached to it.

### Debugging using SSH

Follow steps:

1. After [installing and configuring the Remote - SSH extension][LN429], select **Remote-SSH: Connect to Host...** from the Command Palette (`kbstyle(F1)`) in VS Code to connect to a host.

2. Once connected, either use **File > Open... / Open Folder...** to select the remote folder with your extension source code in it or select **Git: Clone** from the Command Palette (`kbstyle(F1)`) to clone it and open it on the remote host.

3. Install any required dependencies that might be missing (for example using `yarn install` or `apt-get`) in a new VS Code terminal window (`kb(workbench.action.terminal.new)`).

4. Finally, press `kb(workbench.action.debug.start)` or use the **Run and Debug** view to launch the extension inside on the remote host and attach the debugger.

    > **Note:** You will not be able to open the extension source code folder in the window that appears, but you can open a sub-folder or somewhere else on the SSH host.

The extension development host window that appears will include your extension running on the SSH host with the debugger attached to it.

### Debugging using WSL

Follow these steps:

1. After [installing and configuring the WSL extension][LN430], select **WSL: New Window** from the Command Palette (`kbstyle(F1)`) in VS Code.

2. In the new window that appears, either use **File > Open... / Open Folder...** to select the remote folder with your extension source code in it or select **Git: Clone** from the Command Palette (`kbstyle(F1)`) to clone it and open it in WSL.

    > **Tip:** You can select the `/mnt/c` folder to access any cloned source code you have on the Windows side.

3. Install any required dependencies that might be missing (for example using `apt-get`) in a new VS Code terminal window (`kb(workbench.action.terminal.new)`). You will at least want to run `yarn install` or `npm install` to ensure Linux versions of native Node.js dependencies are available.

4. Finally, press `kb(workbench.action.debug.start)` or use the **Run and Debug** view to launch the extension and attach the debugger as you would locally.

    > **Note:** You will not be able to open the extension source code folder in the window that appears, but you can open a sub-folder or somewhere else in WSL.

The extension development host window that appears will include your extension running in WSL with the debugger attached to it.

## Installing a development version of your extension

Anytime VS Code automatically installs an extension on an SSH host, inside a container or WSL, or through GitHub Codespaces, the Marketplace version is used (and not the version already installed on your local machine).

While this makes sense in most situations, you may want to use (or share) an unpublished version of your extension for testing without having to set up a debugging environment. To install an unpublished version of your extension, you can package the extension as a `VSIX` and manually install it into a VS Code window that is already connected to a running remote environment.

Follow these steps:

1. If this is a published extension, you may want to add `"extensions.autoUpdate": false` to `settings.json` to prevent it from auto-updating to the latest Marketplace version.
2. Next, use `vsce package` to package your extension as a VSIX.
3. Connect to a [codespace][LK380], [Dev Containers][LN431], [SSH host][LN432], or [WSL environment][LN432].
4. Use the **Install from VSIX...** command available in the Extensions view **More Actions** (`...`) menu to install the extension in this specific window (not a local one).
5. Reload when prompted.

> **Tip:** Once installed, you can use the **Developer: Show Running Extensions** command to see whether VS Code is running the extension locally or remotely.

## Handling dependencies with remote extensions

Extensions can take dependencies on other extensions for APIs. For example:

- An extension can export an API from their `activate` function.
- This API will become available to all extensions running in the same extension host.
- Consumer extensions declare in their `package.json` that they depend on the providing extension using the `extensionDependencies` property.

Extension dependencies work fine when all the extensions are running locally and share the same extension host.

When dealing with remote scenarios, it is possible that an extension running remotely has an extension dependency on an extension running locally. For example, the local extension exposes a command that is critical to the functioning of the remote extension. In this case, we recommend that the remote extension declares the local extension as an `extensionDependency`, but the problem is that the extensions run on two different extension hosts, which means that the API from the provider is not available to the consumer. It is therefore required that the providing extension give up entirely the ability to export any APIs by using `"api": "none"` in their extension's `package.json`. The extensions can still communicate using VS Code commands (which are asynchronous).

This may seem an unnecessarily strict constraint on the providing extension, but an extension that uses `"api": "none"` only gives up the ability to return APIs from its `activate` method. Consumer extensions that execute on other extension hosts can still take a dependency on them and will be activated.

## Common problems

VS Code's APIs are designed to automatically run in the right location regardless of where your extension happens to be located. With this in mind, there are a few APIs that will help you avoid unexpected behaviors.

### Incorrect execution location

If your extension is not functioning as expected, it may be running in the wrong location. Most commonly, this shows up as an extension running remotely when you expect it to only be run locally. You can use the **Developer: Show Running Extensions** command from the Command Palette (`kbstyle(F1)`) to see where an extension is running.

If the **Developer: Show Running Extensions** command shows that a UI extension is incorrectly being treated as a workspace extension or vice versa, try setting the `extensionKind` property in your extension's [package.json][LN432] as described in the [Extension Kinds section][LN433].

You can quickly **test** the effect of changing an extension's kind with the `remote.extensionKind` [setting][LN433]. This setting is a map of extension IDs to extension kinds. For example, if you want to force the [Azure Databases][LK381] extension to be a UI extension (instead of its Workspace default) and the [Remote - SSH: Editing Configuration Files][LK382] extension to be a workspace extension (instead of its UI default), you would set:

```json
{
  "remote.extensionKind": {
      "ms-azuretools.vscode-cosmosdb": ["ui"],
      "ms-vscode-remote.remote-ssh-edit": ["workspace"]
  }
}
```

Using `remote.extensionKind` allows you to quickly test published versions of extensions without having to modify their `package.json` and rebuild them.

### Persisting extension data or state

In some cases, your extension may need to persist state information that does not belong in `settings.json` or a separate workspace configuration file (for example `.eslintrc`). To solve this problem, VS Code provides a set of helpful storage properties on the `vscode.ExtensionContext` object passed to your extension during activation. If your extension already takes advantage of these properties, it should continue to function regardless of where it runs.

However, if your extension relies on current VS Code pathing conventions (for example `~/.vscode`) or the presence of certain OS folders (for example `~/.config/Code` on Linux) to persist data, you may run into problems. Fortunately, it should be simple to update your extension and avoid these challenges.

If you are persisting simple key-value pairs, you can store workspace specific or global state information using `vscode.ExtensionContext.workspaceState` or `vscode.ExtensionContext.globalState` respectively. If your data is more complicated than key-value pairs, the  `globalStorageUri` and `storageUri` properties provide "safe" URIs that you can use to read/write global workspace-specific information in a file.

To use the APIs:

```TypeScript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('myAmazingExtension.persistWorkspaceData', async () => {
            if (!context.storageUri) {
                return;
            }

            // Create the extension's workspace storage folder if it doesn't already exist
            try {
                // When folder doesn't exist, and error gets thrown
                await vscode.workspace.fs.stat(context.storageUri);
            } catch {
                // Create the extension's workspace storage folder
                await vscode.workspace.fs.createDirectory(context.storageUri)
            }

            const workspaceData = vscode.Uri.joinPath(context.storageUri, 'workspace-data.json');
            const writeData = new TextEncoder().encode(JSON.stringify({ now: Date.now() }));
            vscode.workspace.fs.writeFile(workspaceData, writeData);
        }
    ));

    context.subscriptions.push(
        vscode.commands.registerCommand('myAmazingExtension.persistGlobalData', async () => {

        if (!context.globalStorageUri) {
            return;
        }

        // Create the extension's global (cross-workspace) folder if it doesn't already exist
        try {
            // When folder doesn't exist, and error gets thrown
            await vscode.workspace.fs.stat(context.globalStorageUri);
        } catch {
            await vscode.workspace.fs.createDirectory(context.globalStorageUri)
        }

        const workspaceData = vscode.Uri.joinPath(context.globalStorageUri, 'global-data.json');
        const writeData = new TextEncoder().encode(JSON.stringify({ now: Date.now() }));
        vscode.workspace.fs.writeFile(workspaceData, writeData);
    ));
}
```

### Sync user global state between machines

If your extension needs to preserve some user state across different machines then provide the state to [Settings Sync][LN433] using `vscode.ExtensionContext.globalState.setKeysForSync`. This can help prevent displaying the same welcome or updates page to users on multiple machines.

There is an example of using `setKeysforSync` in the [Extension Capabilities][LN434] topic.

### Persisting secrets

If your extension needs to persist passwords or other secrets, you may want to use Visual Studio Code's [SecretStorage API][LK383] which provides a way to securely store text on the filesystem backed by encryption. For example, on desktop, we use Electron's [safeStorage API][LK384] to encrypt secrets before storing them on the filesystem. The API will always store the secrets on the client side but you can use this API regardless of where your extension is running and retrieve the same secret values.

>**Note**: This API is the recommended way to persist passwords & secrets. You should **not** store your secrets using `vscode.ExtensionContext.workspaceState` or `vscode.ExtensionContext.globalState` because these APIs store data in plaintext.

Here's an example:

```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // ...
    const myApiKey = context.secrets.get('apiKey');
    // ...
    context.secrets.delete('apiKey');
    // ...
    context.secrets.store('apiKey', myApiKey);
}
```

### Using the clipboard

Historically, extension authors have used Node.js modules such as `clipboardy` to interact with the clipboard. Unfortunately, if you use these modules in a Workspace Extension, they will use the remote clipboard instead of the user's local one. The VS Code clipboard API solves this problem. It is always run locally, regardless of the type of extension that calls it.

To use the VS Code clipboard API in an extension:

```typescript
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('myAmazingExtension.clipboardIt', async () => {
        // Read from clipboard
        const text = await vscode.env.clipboard.readText();

        // Write to clipboard
        await vscode.env.clipboard.writeText(`It looks like you're copying "${text}". Would you like help?`);
    }));
}
```

### Opening something in a local browser or application

Spawning a process or using a module like `opn` to launch a browser or other application for particular URI can work well for local scenarios, but Workspace Extensions run remotely, which can cause the application to launch on the wrong side. VS Code Remote Development **partially** shims the `opn` node module to allow existing extensions to function. You can call the module with a URI and VS Code will cause the default application for the URI to appear on the client side. However, this is not a complete implementation, as options are not supported and a `child_process` object is not returned.

Instead of relying on a third-party node module, we recommend that extensions take advantage of the `vscode.env.openExternal` method to launch the default registered application on your local operating system for given URI. Even better, `vscode.env.openExternal` **does automatic localhost port forwarding!** You can use it to point to a local web server on a remote machine or codespace and serve up content even if that port is blocked externally.

> **Note:** Currently the forwarding mechanism in the Codespaces browser-based editor only supports **http and https requests**. However, you can interact with any TCP connection when connecting to a codespace from VS Code.

To use the `vscode.env.openExternal` API:

```typescript
import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('myAmazingExtension.openExternal', () => {

        // Example 1 - Open the VS Code homepage in the default browser.
        vscode.env.openExternal(vscode.Uri.parse('https://code.visualstudio.com'));

        // Example 2 - Open an auto-forwarded localhost HTTP server.
        vscode.env.openExternal(vscode.Uri.parse('http://localhost:3000'));

        // Example 3 - Open the default email application.
        vscode.env.openExternal(vscode.Uri.parse('mailto:<fill in your email here>'));
    }));
}
```

### Forwarding localhost

While the [localhost forwarding mechanism in `vscode.env.openExternal` is useful][LN435], there may also be situations where you want to forward something without actually launching a new browser window or application. This is where the `vscode.env.asExternalUri` API comes in.

> **Note:** Currently the forwarding mechanism in the Codespaces browser-based editor only supports **http and https requests**. However, you can interact with any TCP connection when connecting to a codespace from VS Code.

To use the `vscode.env.asExternalUri` API:

```typescript
import * as vscode from 'vscode';
import { getExpressServerPort } from './server';

export async function activate(context: vscode.ExtensionContext) {

    const dynamicServerPort = await getWebServerPort();

    context.subscriptions.push(vscode.commands.registerCommand('myAmazingExtension.forwardLocalhost', async () =>

        // Make the port available locally and get the full URI
        const fullUri = await vscode.env.asExternalUri(
            vscode.Uri.parse(`http://localhost:${dynamicServerPort}`));

        // ... do something with the fullUri ...

    }));
}
```

It is important to note that the URI that is passed back by the API **may not reference localhost at all**, so you should use it in its entirety. This is particularly important for the Codespaces browser-based editor, where localhost cannot be used.

### Callbacks and URI handlers

The `vscode.window.registerUriHandler` API allows your extension to register a custom URI that, if opened in a browser, will fire a callback function in your extension. A common use case for registering a URI handler is when implementing a service sign in with an [OAuth 2.0][LK385] authentication provider (for example, Azure AD). However, it can be used for any scenario where you want an external application or the browser to send information to your extension.

The Remote Development and Codespaces extensions in VS Code will transparently handle passing the URI to your extension regardless of where it is actually running (local or remote). However, `vscode://` URIs will not work with the Codespaces browser-based editor since opening these URIs in something like a browser would attempt to pass them to the local VS Code client rather than the browser-based editor. Fortunately, this can be easily remedied by using the `vscode.env.asExternalUri` API.

Let's use a combination of `vscode.window.registerUriHandler` and `vscode.env.asExternalUri` to wire up an example OAuth authentication callback:

```typescript
import * as vscode from 'vscode';

// This is ${publisher}.${name} from package.json
const extensionId = 'my.amazing-extension';

export async function activate(context: vscode.ExtensionContext) {

    // Register a URI handler for the authentication callback
    vscode.window.registerUriHandler({
        handleUri(uri: vscode.Uri): vscode.ProviderResult<void> {

            // Add your code for what to do when the authentication completes here.
            if (uri.path === '/auth-complete') {
                vscode.window.showInformationMessage('Sign in successful!');
            }

        }
    });

    // Register a sign in command
    context.subscriptions.push(vscode.commands.registerCommand(`${extensionId}.signin`, async () => {

        // Get an externally addressable callback URI for the handler that the authentication provider can use
        const callbackUri = await vscode.env.asExternalUri(vscode.Uri.parse(`${vscode.env.uriScheme}://${extensionId}/auth-complete`));

        // Add your code to integrate with an authentication provider here - we'll fake it.
        vscode.env.clipboard.writeText(callbackUri.toString());
        await vscode.window.showInformationMessage('Open the URI copied to the clipboard in a browser window to authorize.');
    }));
}
```

When running this sample in VS Code, it wires up a `vscode://` or `vscode-insiders://` URI that can be used as a callback for an authentication provider. When running in the Codespaces browser-based editor, it wires up a `https://*.github.dev` URI without any code changes or special conditions.

While OAuth is outside the scope of this document, note that if you adapted this sample to a real authentication provider, you may need to build a proxy service in front of the provider. This is because not all providers allow `vscode://` callback URIs and others do not allow wildcard host names for callbacks over HTTPS. We also recommend using an [OAuth 2.0 Authorization Code with PKCE flow][LK386] wherever possible (for example, Azure AD supports PKCE) to improve the security of the callback.

### Varying behaviors when running remotely or in the Codespaces browser editor

In some cases, your Workspace Extension may need to vary the behavior when running remotely. In others, you might want to vary its behavior when running in the Codespaces browser-based editor. VS Code provides three APIs to detect these situations: `vscode.env.uiKind`, `extension.extensionKind`, and `vscode.env.remoteName`.

Next, you can use the three APIs as follows:

```typescript
import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {

    // extensionKind returns ExtensionKind.UI when running locally, so use this to detect remote
    const extension = vscode.extensions.getExtension('your.extensionId');
    if (extension.extensionKind === vscode.ExtensionKind.Workspace) {
        vscode.window.showInformationMessage('I am running remotely!');
    }

    // Codespaces browser-based editor will return UIKind.Web for uiKind
    if (vscode.env.uiKind === vscode.UIKind.Web) {
        vscode.window.showInformationMessage('I am running in the Codespaces browser editor!');
    }

    // VS Code will return undefined for remoteName if working with a local workspace
    if (typeof(vscode.env.remoteName) === 'undefined') {
        vscode.window.showInformationMessage('Not currently connected to a remote workspace.');
    }

}
```

### Communicating between extensions using commands

Some extensions return APIs as a part of their activation that are intended for use by other extensions (via `vscode.extension.getExtension(extensionName).exports`). While these will work if all extensions involved are on the same side (either all UI Extensions or all Workspace Extensions), these will not work between UI and Workspace Extensions.

Fortunately, VS Code automatically routes any executed commands to the correct extension regardless of its location. You can freely invoke any command (including those provided by other extensions) without worrying about impacts.

If you have a set of extensions that need to interact with one another, exposing functionality using a private command can help you avoid unexpected impacts. However, any objects you pass in as parameters will be "stringified" (`JSON.stringify`) before being transmitted, so the object cannot have cyclic references and will end up as a "plain old JavaScript object" on the other side.

For example:

```typescript
import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
    // Register the private echo command
    const echoCommand = vscode.commands.registerCommand('_private.command.called.echo',
        (value: string) => {
            return value;
        }
    );
    context.subscriptions.push(echoCommand);
}
```

See the [command API guide][LN435] for details on working with commands.

## Using the Webview API

Like the clipboard API, the [Webview API][LN435] is always run on the user's local machine or in the browser, even when used from a Workspace Extension. This means that many webview-based extensions should just work, even when used in remote workspaces or Codespaces. However, there are some considerations to be aware of so that your webview extension works properly when run remotely.

### Always use asWebviewUri

You should use the `asWebviewUri` API to manage extension resources. Using this API instead of hard coding `vscode-resource://` URIs is required to ensure the Codespaces browser-based editor works with your extension. See the [Webview API][LN435] guide for details, but here is a quick example.

You can use the API in your content as follows:

```typescript
// Create the webview
const panel = vscode.window.createWebviewPanel(
    'catWebview',
    'Cat Webview',
    vscode.ViewColumn.One);

// Get the content Uri
const catGifUri = panel.webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, 'media', 'cat.gif'));

// Reference it in your content
panel.webview.html = `<!DOCTYPE html>
<html>
<body>
    <img src="${catGifUri}" width="300" />
</body>
</html>`;
```

### Use the message passing API for dynamic webview content

The VS Code webview includes a [message passing][LN435] API that allows you to dynamically update your webview content without the use of a local web server. Even if your extension is running some local web services that you want to interact with to update webview content, you can do this from the extension itself rather than directly from your HTML content.

This is an important pattern for Remote Development and GitHub Codespaces to ensure your webview code works in both VS Code and the Codespaces browser-based editor.

**Why message passing instead of a localhost web server?**

The alternate pattern is to serve up web content in an `iframe` or have webview content directly interact with a localhost server. Unfortunately, by default, `localhost` inside a webview will resolve to a developer's local machine. This means that for a remotely running workspace extension, the webviews it creates would not be able to access local servers spawned by the extension. Even if you use the IP of the machine, the ports you are connecting to will typically be blocked by default in a cloud VM or a container. Even if this worked in VS Code, it would not work in the Codespaces browser-based editor.

Here's an illustration of the problem when using the Remote - SSH extension, but the problem also exists for Dev Containers and GitHub Codespaces:

![Webview problem][LN436]

If possible, **you should avoid doing this** since it complicates your extension significantly. [Message passing][LN436] API can enable the same type of user experience without these types of headaches. The extension itself will be running in VS Code Server on the remote side, so it can transparently interact with any web servers your extension starts up as a result of any messages passed to it from the webview.

### Workarounds for using localhost from a webview

If you can't use the [message passing][LN436] API for some reason, there are two options that will work with the Remote Development and GitHub Codespaces extensions in VS Code.

Each option allows webview content to route through the same channel VS Code uses to talk to VS Code Server. For example, if we update the illustration in the previous section for Remote - SSH, you would have this:

![Webview Solution][LN437]

### Option 1 - Use asExternalUri

VS Code 1.40 introduced the `vscode.env.asExternalUri` API to allow extensions to forward local `http` and `https` requests remotely in a programmatic way. You can use this same API to forward requests to `localhost` web servers from the webview when your extension is running in VS Code.

Use the API to get a full URI for the iframe and add it to your HTML. You will also need to enable scripts in your webview and add a CSP to your HTML content.

```typescript
// Use asExternalUri to get the URI for the web server
const dynamicWebServerPort = await getWebServerPort();
const fullWebServerUri = await vscode.env.asExternalUri(
        vscode.Uri.parse(`http://localhost:${dynamicWebServerPort}`)
    );

// Create the webview
const panel = vscode.window.createWebviewPanel(
    'asExternalUriWebview',
    'asExternalUri Example',
    vscode.ViewColumn.One, {
        enableScripts: true
    });

const cspSource = panel.webview.cspSource;
panel.webview.html = `<!DOCTYPE html>
        <head>
            <meta
                http-equiv="Content-Security-Policy"
                content="default-src 'none'; frame-src ${fullWebServerUri} ${cspSource} https:; img-src ${cspSource} https:; script-src ${cspSource}; style-src ${cspSource};"
            />
        </head>
        <body>
        <!-- All content from the web server must be in an iframe -->
        <iframe src="${fullWebServerUri}">
    </body>
    </html>`;
```

Note that any HTML content served up in the `iframe` in the example above **needs to use relative pathing** rather than hard coding `localhost`.

### Option 2 - Use a port mapping

If you do **not intend to support the Codespaces browser-based editor**, you can use the `portMapping` option available in the webview API. (This approach will also work with Codespaces from the VS Code client, but not in the browser).

To use a port mapping, pass in a `portMapping` object when you create your webview:

```typescript
const LOCAL_STATIC_PORT = 3000;
const dynamicServerPort = await getWebServerPort();

// Create webview and pass portMapping in
const panel = vscode.window.createWebviewPanel(
    'remoteMappingExample',
    'Remote Mapping Example',
    vscode.ViewColumn.One, {
        portMapping: [
            // This maps localhost:3000 in the webview to the web server port on the remote host.
            { webviewPort: LOCAL_STATIC_PORT, extensionHostPort: dynamicServerPort }
        ]
    });

// Reference the port in any full URIs you reference in your HTML.
panel.webview.html = `<!DOCTYPE html>
    <body>
        <!-- This will resolve to the dynamic server port on the remote machine -->
        <img src="http://localhost:${LOCAL_STATIC_PORT}/canvas.png">
    </body>
    </html>`;
```

In this example, in both the remote and local cases, any requests made to `http://localhost:3000` will automatically be mapped to the dynamic port an Express.js web server is running on.

## Using native Node.js modules

Native modules bundled with (or dynamically acquired for) a VS Code extension must be recompiled [using Electron's `electron-rebuild`][LK387]. However, VS Code Server runs a standard (non-Electron) version of Node.js, which can cause binaries to fail when used remotely.

To solve this problem:

1. Include (or dynamically acquire) both sets of binaries (Electron and standard Node.js) for the "modules" version in Node.js that VS Code ships.
2. Check to see if `vscode.extensions.getExtension('your.extensionId').extensionKind === vscode.ExtensionKind.Workspace` to set up the correct binaries based on whether the extension is running remotely or locally.
3. You may also want to add support for non-x86_64 targets and Alpine Linux at the same time by [following similar logic][LN438].

You can find the "modules" version VS Code uses by going to **Help > Developer Tools** and typing `process.versions.modules` in the console. However, to make sure native modules work seamlessly in different Node.js environments, you may want to compile the native modules against all possible Node.js "modules" versions and platforms you want support (Electron Node.js, official Node.js Windows/Darwin/Linux, all versions). The [node-tree-sitter][LK388] module is a good example of a module that does this well.

## Supporting non-x86_64 hosts or Alpine Linux containers

If your extension is purely written in JavaScript/TypeScript, you may not need to do anything to add support for other processor architectures or the `musl` based Alpine Linux to your extension.

However, if your extension works on Debian 9+, Ubuntu 16.04+, or RHEL / CentOS 7+ remote SSH hosts, containers, or WSL, but fails on supported non-x86_64 hosts (for example ARMv7l) or Alpine Linux containers, the extension may include x86_64 `glibc` specific native code or runtimes that will fail on these architectures/operating systems.

For example, your extension may only include x86_64 compiled versions of native modules or runtimes. For Alpine Linux, the included native code or runtimes may not work due to [fundamental differences][LK389] between how `libc` is implemented in Alpine Linux (`musl`) and other distributions (`glibc`).

To resolve this problem:

1. If you are dynamically acquiring compiled code, you can add support by detecting non-x86_64 targets using `process.arch` and downloading versions compiled for the right architecture. If you are including binaries for all supported architectures inside your extension instead, you can use this logic to use the correct one.

2. For Alpine Linux, you can detect the operating system using  `await fs.exists('/etc/alpine-release')` and once again download or use the correct binaries for a `musl` based operating system.

3. If you'd prefer not to support these platforms, you can use the same logic to provide a good error message instead.

It is important to note that some third-party npm modules include native code that can cause this problem. So, in some cases you may need to work with the npm module author to add additional compilation targets.

## Avoid using Electron modules

While it can be convenient to rely on built-in Electron or VS Code modules not exposed by the extension API, it's important to note that VS Code Server runs a standard (non-Electron) version of Node.js. These modules will be missing when running remotely. There are a few exceptions, where there is specific code in place to make them work.

Use base Node.js modules or modules in your extension VSIX to avoid these problems. If you absolutely have to use an Electron module, be sure to have a fallback if the module is missing.

The example below will use the Electron `original-fs` node module if found, and fall back to the base Node.js `fs` module if not.

```typescript
function requireWithFallback(electronModule: string, nodeModule: string) {
    try {
        return require(electronModule);
    }
    catch (err) { }
    return require(nodeModule);
}

const fs = requireWithFallback('original-fs', 'fs');
```

Try to avoid these situations whenever possible.

## Known issues

There are a few extension problems that could be resolved with some added functionality for Workspace Extensions. The following table is a list of known issues under consideration:

| Problem | Description |
|---------|-------------|
| **Cannot access attached devices from Workspace extension** | Extensions that access locally attached devices will be unable to connect to them when running remotely. One approach to overcome this is to create a companion UI extension whose job is to access the attached device and offers commands that the remote extension can invoke too. <br> Another approach is reverse tunneling, which is being tracked in a [VS Code repo issue][LK390]. |

## Questions and feedback

- See [Tips and Tricks][LN439] or the [FAQ][LN440].
- Search for answers on [Stack Overflow][LK391].
- [Upvote a feature or request a new one][LK392], search [existing issues][LK393], or [report a problem][LK394].
- Create a [development container Template][LK395] or [Feature][LK396] for others to use.
- Contribute to [our documentation][LK397] or [VS Code][LK398].
- See our [CONTRIBUTING][LK399] guide for details.


<a id="_api_advanced-topics_using-proposed-api" ></a>

# /api/advanced-topics/using-proposed-api
------------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: f4d4e9e0-8901-405c-aaf5-faa16c32588b
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Use Visual Studio Code's Proposed API
    ---

## Using Proposed API

At Visual Studio Code, we take Extension API compatibility seriously. We give our best effort to avoid breaking API changes, and extension authors could expect published extensions to continue to work. However, this puts great limitation on us: once we introduce an API, we cannot easily change it anymore.

Proposed APIs solve the problem for us. Proposed APIs are a set of unstable APIs that are implemented in VS Code but not exposed to the public as stable APIs does. They are **subject to change**, **only available in Insiders distribution** and **cannot be used in published extensions**. Nevertheless, extension authors could test these new APIs in local development and provide feedback for VS Code team to iterate on an API. Eventually, proposed APIs find their way into the stable API and becomes available for all extensions.

## Using a proposed API

These are the steps for testing a proposed API in local extension development:

- Use [Insiders][LN441] release of VS Code.
- To your `package.json`, add `"enabledApiProposals": ["<proposalName>"]`.
- Copy the corresponding [vscode.proposed.\<proposalName\>.d.ts][LK400] files into your project's source location.

The [@vscode/dts][LK401] CLI utility allows you to quickly download the latest `vscode.proposed.<proposalName>.d.ts` for extension development. It downloads definition files by the proposals listed in your `package.json` file.

```bash
> npx @vscode/dts dev
Downloading vscode.proposed.languageStatus.d.ts
To:   /Users/Me/Code/MyExtension/vscode.proposed.languageStatus.d.ts
From: https://raw.githubusercontent.com/microsoft/vscode/main/src/vscode-dts/vscode.proposed.languageStatus.d.ts
Read more about proposed API at: https://code.visualstudio.com/api/advanced-topics/using-proposed-api
```

There is a sample using proposed APIs: [proposed-api-sample][LK402].

## Proposed API incompatibility

On the main branch, the `vscode.proposed.<proposalName>.d.ts` is always compatible with `vscode.d.ts`. However, when you add `vscode.proposed.<proposal>.d.ts` to your project that uses `@types/vscode`, the latest `vscode.proposed.<proposal>.d.ts` might be incompatible with the version in `@types/vscode`.

You can solve this issue by either:

- Remove dependency on `@types/vscode` and use `npx @vscode/dts main` to download `vscode.d.ts` from `microsoft/vscode` main branch.
- Use `@types/vscode@<version>` and also use `npx @vscode/dts dev <version>` to download the `vscode.proposed.<proposal>.d.ts` from an old branch of `microsoft/vscode`. However, be careful as the API might have changed in the latest version of VS Code Insiders.

## Sharing extensions using the proposed API

While you're not able to publish extensions using the proposed API on the Marketplace, you can still share your extension with your peers by packaging and sharing your extension.

To package your extension, you can run `vsce package` to create a VSIX file of your extension. You can then share this VSIX file to others to install the extension in their VS Code.

To install an extension from a VSIX file, you would go into the Extensions view, select the **...** ellipsis **View and More Actions** button, and select **Install from VSIX**.

Selecting the **Install from VSIX** menu item is shown in the short video below.

![Demo showing a user going into the Extensions view to find the Install from VSIX menu item][LN442]

For extensions using the proposed API, there are a couple more steps to enable your extension. After installing from your VSIX, you need to quit and relaunch VS Code Insiders from command line with `code-insiders . --enable-proposed-api=<YOUR-EXTENSION-ID>` in your project folder.

If you'd like to set it so that your extension using the proposed API is always available to use on every launch of VS Code Insiders, you can run the **Preferences: Configure Runtime Arguments** command to edit the `.vscode-insiders/argv.json` file to set a list of enabled extensions.

```json
{
    ...
    "enable-proposed-api": ["<YOUR-EXTENSION-ID>"]
}
```


<a id="_api_advanced-topics_tslint-eslint-migration" ></a>

# /api/advanced-topics/tslint-eslint-migration
-----------------------------------------------

    ---
    ContentId: f00c4913-58e3-4a61-aa42-e769c3430906
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: A guide to migrating extension projects from the TSLint linter to ESLint.
    ---

## Migrate from TSLint to ESLint

[TSLint][LK403] has been the recommended linter in the past but now TSLint is deprecated and [ESLint][LK404] is taking over its duties. This article will help you migrate from TSLint to ESLint.

## ESLint: Installation

You need to install ESLint. ESLint doesn't natively support TypeScript, so you will also need to install eslint-typescript-support:

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

or if you're using yarn as your package manager:

```bash
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --dev
```

The command above adds ESLint, adds a parser that makes ESLint understand TypeScript, and adds some TypeScript-specific rules.

Now, to make the actual migration simpler, run the [tslint-to-eslint-config][LK405] utility. This tool will take your TSLint configuration and create the "closest" ESLint configuration from it.

```bash
npx tslint-to-eslint-config
```

This command [downloads and executes][LK406] the utility to perform the migration. For further options, check the utility's [usage guide][LK407].

There should now be a new `.eslintrc.js` file, a log file (`tslint-to-eslint-config.log`), and likely changes to other files, like `.vscode/settings.json`. Carefully review the changes, especially those made to existing files, and check the log file.

## ESLint: Configure

The `.eslintrc.js` file is usually sufficient to get started but it's likely that the `parserOptions.project` property is still set to your `tsconfig.json` file. That means that ESLint rules can use semantic information, for example, is this variable a string or a number-array? This configuration enables some powerful rules but means that ESLint takes much longer to compute. The default rules for extensions do not require semantic information and unless you have added rules that do, we recommend you remove the `parserOptions.project` property.

## ESLint: Run

You are now ready to run ESLint, but before doing that, we recommend you disable TSLint. To do so, open the Extensions view and select **Disable** in the context menu of the TSLint extension.

It is time to lint! Use this command: `eslint -c .eslintrc.js --ext .ts <mySrcFolder>` (notice the `--ext .ts` option which tells ESLint to look at TypeScript files). We recommend putting the command in the `scripts` section of your `package.json`-file, like so:

```json
"lint": "eslint -c .eslintrc.js --ext .ts <mySrcFolder>"
```

To integrate ESLint with Visual Studio Code, do the following:

* Install the [ESLint][LK408] extension.
* Create a task via the **Tasks: Configure Task** command and select **npm: lint**.
* In the resulting `tasks.json` file, configure the problem matcher to be `$eslint-stylish`.

**Hint**: ESLint is sometimes "more correct" in how it does things and you may see warnings that you didn't have before, for example calling out missing semicolons. Try the `--fix` option to let ESLint clean up things up for you.

## TSLint: Removal

Congratulations. You should now have a working ESLint setup and it's time to clean up.

The removal of TSLint depends on your project, but usually these are the steps:

* Update `.vscode/extensions.json` to recommend the ESLint extension and not TSLint anymore:

  ```json
  "recommendations": [
    "dbaeumer.vscode-eslint"
  ]
  ```

* Remove the `tslint.json` file.
* Remove the dependency on `tslint` in the `package.json` file.
* Uninstall TSLint with `npm uninstall tslint`.


<a id="_api_advanced-topics_python-extension-template" ></a>

# /api/advanced-topics/python-extension-template
-------------------------------------------------

    ---
    ContentId: dd7207b0-cf8b-4ed6-8c75-941834179dca
    DateApproved: 9/28/2022

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Using the Python extension template and API to integrate linters, formatters, and language features into Visual Studio Code
    ---

## Authoring Python Extensions

>**Note**: If you are new to VS Code extension authoring, you may want to read the [Your First Extension][LN442] tutorial first and try creating a simple Hello World extension.

The [Python][LK409] extension provides APIs for other extensions to work with Python environments available on the user's machine. Check out [@vscode/python-extension][LK410] npm module that includes types and helper utilities to access these APIs from your extension.

## Python extension template

The [Python extension template][LK411] helps get you started building a Visual Studio Code extension for your favorite Python tool. It could be a linter, formatter, or code analysis, or all of those together. The template will give you the basic building blocks you need to build an extension that integrates your tool into VS Code, and it already has access to the Python APIs mentioned above.

## Programming languages and frameworks

The extension template has two parts, the extension part and language server part. The extension part is written in TypeScript, and language server part is written in Python over the `pygls` (Python language server) library.

You will mostly be working on the Python part of the code when using this template. You will be integrating your tool with the extension part using the [Language Server Protocol][LK411]. `pygls` currently works on the [version 3.16 of LSP][LK412].

The TypeScript part handles working with VS Code and its UI. The extension template comes with a few settings built-in that can be used by your tool. If you need to add new settings to support your tool, you will have to work with a bit of TypeScript. The extension template has examples for a few settings and you can also look at [extensions developed][LN443] by our team for some of the popular tools.

## Requirements

1. VS Code 1.64.0 or greater
1. Python 3.7 or greater
1. node >= 14.19.0
1. npm >= 8.3.0 (`npm` is installed with node, check npm version, use `npm install -g npm@8.3.0` to update)
1. [Python][LK412] extension for VS Code

You should know how to create and work with Python virtual environments.

## Getting started

To get started, follow the instructions in the template [README][LK413]. There you will learn how to use the [template to create your repository][LK414] and how to install the necessary tools (for example, the [nox][LK415] task runner) and optional dependencies (testing support).

The [README][LK415] has the most up-to-date instructions and also goes into details on how to customize the extension's `package.json` placeholders (`<pythontool-module>`, `<pythontool-display-name>`, etc.).

## Features of the template

After creating your extension via the template, it will include the following extension contributions. Assume `<pytool-module>` was replaced with `mytool`, and `<pytool-display-name>` with`My Tool`:

1. A command **My Tool: Restart Server** (command ID: `mytool.restart`).
1. Following settings:
    * `mytool.logLevel`
    * `mytool.args`
    * `mytool.path`
    * `mytool.importStrategy`
    * `mytool.interpreter`
    * `mytool.showNotification`
1. Following triggers for extension activation:
    * On Language `python`.
    * On File with `.py` extension found in the opened workspace.
    * On Command `mytool.restart`.
1. Output channel for logging **Output** > **My Tool**.

## Integrating your tool

The generated `bundled/tool/server.py` file is where you will make most of your changes. `TODO` comments in the file point out the various customization points. Also search for `TODO` comments in other locations in the template, such as other Python and Markdown files. You will want to review the LICENSE file, even if you want to keep it MIT License.

## Examples

There are several example implementations created from the template:

* [Pylint][LK416] - implements linting and Code Actions on file `open`, `save`, and `close`.
* [Flake8][LK417] - implements linting and Code Actions.
* [Black Formatter][LK418] - integrates the [*Black*][LK419] formatter.
* [autopep8][LK420] - integrates the [autopep8][LK421] formatter.
* [isort][LK422] - adds Code Actions to sort imports.

You can also review the [Language Server Protocol specification][LK422] to better understand the `pygls` language server integration.

## Extension development

The template README goes into detail on the [development cycle support][LK423] included with the template. The template has commands and configurations so you can build, run, debug, and test your extension.

If you run into problems during development, there is a [Troubleshooting][LK424] section to help with common issues.

## Packaging and publishing

Before publishing your extension, you'll need to update the extension `package.json` fields (such as `publisher` and `license`) for your specific extension. You also want to update the auxiliary Markdown files (`CODE_OF_CONDUCT.md`, `CHANGELOG.md`, etc.).

Once your extension is ready to publish, there is a `nox` `build-package` task to create a `.vsix` file, which you can then upload to your extension [management page][LK424].

If you are new to creating and publishing VS Code extensions, we recommend you follow best practices outlined in the main VS Code [extension authoring][LN444] topics. Here you'll find guidance to help make your extension look great on the Marketplace and how to become a verified publisher so that the users feel confident installing your extension.


<a id="_api_references_vscode-api" ></a>

# /api/references/vscode-api
-----------------------------

- https://code.visualstudio.com//api/references/vscode-api
- [VS Code Types Declaration](https://github.dev/microsoft/vscode/blob/main/src/vscode-dts/vscode.d.ts)

# VS Code API

**VS Code API** is a set of JavaScript APIs that you can invoke in your Visual Studio Code extension. This page lists all VS Code APIs available to extension authors.

- API namespaces and classes
- authentication
- commands
- comments
- debug
- env
- extensions
- l10n
- languages
- notebooks
- scm
- tasks
- tests
- window
- workspace
- API Patterns

## API namespaces and classes

This listing is compiled from the [`vscode.d.ts`] file from the VS Code repository.

## API Patterns

These are some of the common patterns we use in the VS Code API.

### Promises

The VS Code API represents asynchronous operations with [promises][LK426]. From extensions, __any__ type of promise can be returned, like ES6, WinJS, A+, etc.

Being independent of a specific promise library is expressed in the API by the `Thenable`-type. `Thenable` represents the common denominator which is the [then][LK427] method.

In most cases the use of promises is optional and when VS Code calls into an extension, it can handle the _result type_ as well as a `Thenable` of the _result type_. When the use of a promise is optional, the API indicates this by returning `or`-types.

```typescript
provideNumber(): number | Thenable<number>
```

### Cancellation Tokens

Often operations are started on volatile state which changes before operations can finish. For instance, computing IntelliSense starts and the user continues to type making the result of that operation obsolete.

APIs that are exposed to such behavior will get passed a `CancellationToken` on which you can check for cancellation (`isCancellationRequested`) or get notified when cancellation occurs (`onCancellationRequested`). The cancellation token is usually the last parameter of a function call and optional.

### Disposables

The VS Code API uses the [dispose pattern][LK428] for resources that are obtained from VS Code. This applies to event listening, commands, interacting with the UI, and various language contributions.

For instance, the `setStatusBarMessage(value: string)` function returns a `Disposable` which upon calling `dispose` removes the message again.

### Events

Events in the VS Code API are exposed as functions which you call with a listener-function to subscribe. Calls to subscribe return a `Disposable` which removes the event listener upon dispose.

```javascript
var listener = function(event) {
    console.log("It happened", event);
};

// start listening
var subscription = fsWatcher.onDidDelete(listener);

// do more stuff

subscription.dispose(); // stop listening
```

Names of events follow the `on[Will|Did]VerbNoun?` pattern. The name signals if the event is going to happen *(onWill)* or already happened *(onDid)*, what happened *(verb)*, and the context *(noun)* unless obvious from the context.

An example from the VS Code API is `window.onDidChangeActiveTextEditor` which is an event fired when the active text editor *(noun)* has been (*onDid*) changed (*verb*).

### Strict null

The VS Code API uses the `undefined` and `null` TypeScript types where appropriate to support [strict null checking][LK429].


<a id="_api_references_contribution-points" ></a>

# /api/references/contribution-points
--------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 2F27A240-8E36-4CC2-973C-9A1D8069F83F
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: To extend Visual Studio Code, your extension (plug-in) declares which of the various Contribution Points it is using in its package.json Extension Manifest file.
    ---

## Contribution Points

**Contribution Points** are a set of JSON declarations that you make in the `contributes` field of the `package.json` [Extension Manifest][FX000]. Your extension registers **Contribution Points** to extend various functionalities within Visual Studio Code. Here is a list of all available **Contribution Points**:

- [`breakpoints`][LN449]
- [`colors`][LN449]
- [`commands`][LN449]
- [`configuration`][LN449]
- [`configurationDefaults`][LN450]
- [`customEditors`][LN450]
- [`debuggers`][LN450]
- [`grammars`][LN451]
- [`icons`][LN452]
- [`iconThemes`][LN453]
- [`jsonValidation`][LN454]
- [`keybindings`][LN454]
- [`languages`][LN454]
- [`menus`][LN454]
- [`problemMatchers`][LN455]
- [`problemPatterns`][LN456]
- [`productIconThemes`][LN457]
- [`resourceLabelFormatters`][LN458]
- [`semanticTokenModifiers`][LN459]
- [`semanticTokenScopes`][LN460]
- [`semanticTokenTypes`][LN461]
- [`snippets`][LN461]
- [`submenus`][LN462]
- [`taskDefinitions`][LN463]
- [`terminal`][LN464]
- [`themes`][LN465]
- [`typescriptServerPlugins`][LN466]
- [`views`][LN466]
- [`viewsContainers`][LN466]
- [`viewsWelcome`][LN466]
- [`walkthroughs`][LN466]

## contributes.breakpoints

Usually a debugger extension will also have a `contributes.breakpoints` entry where the extension lists the language file types for which setting breakpoints will be enabled.

```json
{
  "contributes": {
    "breakpoints": [
      {
        "language": "javascript"
      },
      {
        "language": "javascriptreact"
      }
    ]
  }
}
```

## contributes.colors

Contributes new themable colors. These colors can be used by the extension in editor decorators and in the status bar. Once defined, users can customize the color in the `workspace.colorCustomization` setting and user themes can set the color value.

```json
{
  "contributes": {
    "colors": [
      {
        "id": "superstatus.error",
        "description": "Color for error message in the status bar.",
        "defaults": {
          "dark": "errorForeground",
          "light": "errorForeground",
          "highContrast": "#010203",
          "highContrastLight": "#feedc3",
        }
      }
    ]
  }
}
```

Color default values can be defined for light, dark and high contrast theme and can either be a reference to an existing color or a [Color Hex Value][LN466].

Extensions can consume new and existing theme colors with the `ThemeColor` API:

```ts
const errorColor = new vscode.ThemeColor("superstatus.error");
```

## contributes.commands

Contribute the UI for a command consisting of a title and (optionally) an icon, category, and enabled state. Enablement is expressed with [when clauses][LN466]. By default, commands show in the **Command Palette** (`kb(workbench.action.showCommands)`) but they can also show in other [menus][LN466].

Presentation of contributed commands depends on the containing menu. The **Command Palette**, for
instance, prefixes commands with their `category`, allowing for easy grouping. However, the
**Command Palette** doesn't show icons nor disabled commands. The editor context menu, on the other
hand, shows disabled items but doesn't show the category label.

> **Note:** When a command is invoked (from a key binding, from the **Command Palette**, any other menu, or programmatically), VS Code will emit an activationEvent `onCommand:${command}`.

> **Note:** When using icons from [product icons][LN466], setting `light` and `dark` will disable the icon.
> The correct syntax is `"icon": "$(book)"`

### command example

```json
{
  "contributes": {
    "commands": [
      {
        "command": "extension.sayHello",
        "title": "Hello World",
        "category": "Hello",
        "icon": {
          "light": "path/to/light/icon.svg",
          "dark": "path/to/dark/icon.svg"
        }
      }
    ]
  }
}
```

See the [Commands Extension Guide][LK429] to learn more about using commands in VS Code extensions.

![commands extension point example][LN467]

### Command icon specifications

- `Size:` Icons should be 16x16 with a 1 pixel padding (image is 14x14) and centered.
- `Color:` Icons should use a single color.
- `Format:` It is recommended that icons be in SVG, though any image file type is accepted.

![command icons][LN468]

## contributes.configuration

Contribute configuration keys that will be exposed to the user. The user will be able to set these configuration options as User Settings or as Workspace Settings, either by using the Settings editor or by editing the JSON settings file directly.

This section can either be a single object, representing a single category of settings, or an array of objects, representing multiple categories of settings. If there are multiple categories of settings, the Settings editor will show a submenu in the table of contents for that extension, and the title keys will be used for the submenu entry names.

### Configuration example

```json
{
  "contributes": {
    "configuration": {
      "title": "TypeScript",
      "properties": {
        "typescript.useCodeSnippetsOnMethodSuggest": {
          "type": "boolean",
          "default": false,
          "description": "Complete functions with their parameter signature."
        },
        "typescript.tsdk": {
          "type": ["string", "null"],
          "default": null,
          "description": "Specifies the folder path containing the tsserver and lib*.d.ts files to use."
        }
      }
    }
  }
}
```

![configuration extension point example][LN469]

You can read these values from your extension using `vscode.workspace.getConfiguration('myExtension')`.

### Configuration schema

Your configuration entry is used both to provide intellisense when editing your settings in the JSON editor, and to define the way they appear in the settings UI.

![settings UI screenshot with numbers][LN470]

**title**

The `title` 1️⃣️ of a category is the heading used for that category.

```json
{
  "configuration": {
    "title": "GitMagic"
  }
}
```

Note that if the extension has multiple categories of extensions, and the title of one of the categories is the same as the extension display name, then the settings for that category will be placed directly below the main extension heading, no matter what the `order` field is set to.

For both the `title` and `displayName` fields, words like "Extension", "Configuration", and "Settings" are redundant.

- ✔ `"title": "GitMagic"`
- ❌ `"title": "GitMagic Extension"`
- ❌ `"title": "GitMagic Configuration"`
- ❌ `"title": "GitMagic Extension Configuration Settings"`

**properties**

The `properties` 2️⃣ in your configuration will be a dictionary of configuration properties.

In the settings UI, your configuration key will be used to namespace and construct a title. Though an extension can contain multiple categories of settings, each setting of the extension must still have its own unique key. Capital letters in your key are used to indicate word breaks. For example, if your key is `gitMagic.blame.dateFormat`, the generated title for the setting will look like this:

> Blame: **Date Format**

Entries will be grouped according to the hierarchy established in your keys. So for example, these entries

```
gitMagic.blame.dateFormat
gitMagic.blame.format
gitMagic.blame.heatMap.enabled
gitMagic.blame.heatMap.location
```

will appear in a single group like this:

> Blame: **Date Format**
>
> Blame: **Format**
>
> Blame › Heat Map: **Enabled**
>
> Blame › Heat Map: **Location**

Otherwise, properties without an explicit order field appear in alphabetical order (**not** the order in which they're listed in the manifest).

### Configuration property schema

Configuration keys are defined using a superset of [JSON
Schema][LK430].

**description** / **markdownDescription**

Your `description` 3️⃣ appears after the title and before the input field, except for booleans, where the description is used as the label for the checkbox. 6️⃣

```json
{
  "gitMagic.blame.heatMap.enabled": {
    "description": "Specifies whether to provide a heatmap indicator in the gutter blame annotations"
  }
}
```

If you use `markdownDescription` instead of `description`, your setting description will be rendered as Markdown in the settings UI.

```json
{
  "gitMagic.blame.dateFormat": {
    "markdownDescription": "Specifies how to format absolute dates (e.g. using the `${date}` token) in gutter blame annotations. See the [Moment.js docs][LK431] for valid formats"
  }
}
```

For `markdownDescription`, in order to add newlines or multiple paragraphs, use the string `\n\n` to separate the paragraphs instead of just `\n`.

**type**

Entries of type `number` 4️⃣ , `string` 5️⃣ , `boolean` 6️⃣ can be edited directly in the settings UI.

```json
{
  "gitMagic.views.pageItemLimit": {
    "type": "number",
    "default": 20,
    "markdownDescription": "Specifies the number of items to show in each page when paginating a view list. Use 0 to specify no limit"
  }
}
```

A string setting can be rendered with a multiline text input if it sets `"editPresentation": "multilineText"` on the configuration entry.

For `boolean` entries, the `description` (or `markdownDescription`) will be used as the label for the checkbox.

```json
{
  "gitMagic.blame.compact": {
    "type": "boolean",
    "description": "Specifies whether to compact (deduplicate) matching adjacent gutter blame annotations"
  }
}
```

Some `object` and `array` type settings will be rendered in the settings UI. Simple arrays of `number`, `string`, or `boolean` will be rendered as editable lists. Objects that have properties of type `string`, `number`, `integer`, and/or `boolean` will be rendered as editable grids of keys and values. Object settings should also have `additionalProperties` set to either `false`, or an object with an appropriate `type` property, to render in the UI.

If an `object` or `array` type setting can also contain other types like nested objects, arrays, or null, then the value won't be rendered in the settings UI and can only be modified by editing the JSON directly. Users will see a link to **Edit in settings.json** as shown in the screenshot above. 8️⃣

**order**

Both categories and the settings within those categories can take an integer `order` type property, which gives a reference to how they should be sorted relative to other categories and/or settings.

If two categories have `order` properties, the category with the lower order number comes first. If a category is not given an `order` property, it appears after categories that were given that property.

If two settings within the same category have `order` properties, the setting with the lower order number comes first. If another setting within that same category is not given an `order` property, it will appear after settings in that category that were given that property.

If two categories have the same `order` property value, or if two settings within the same category have the same `order` property value, then they will be sorted in increasing alphabetical order within the settings UI.

**enum** / **enumDescriptions** / **enumItemLabels**

If you provide an array of items under the `enum` 7️⃣ property, the settings UI will render a dropdown menu.

![settings UI screenshot of dropdown][LN471]

You can also provide an `enumDescriptions` property, which provides descriptive text rendered at the bottom of the dropdown:

```json
{
  "gitMagic.blame.heatMap.location": {
    "type": "string",
    "default": "right",
    "enum": ["left", "right"],
    "enumDescriptions": [
      "Adds a heatmap indicator on the left edge of the gutter blame annotations",
      "Adds a heatmap indicator on the right edge of the gutter blame annotations"
    ]
  }
}
```

You can also use `markdownEnumDescriptions`, and your descriptions will be rendered as Markdown.

To customize the dropdown options, you can use `enumItemLabels`. The `workbench.iconTheme` setting uses both `enumDescriptions` and `enumItemLabels`. In the screenshot below, the hovered option has the item label "None", with enum description "No file icons" and enum value `null`.
![The workbench.iconTheme setting in the Settings UI with the dropdown expanded showing the enum item labels and one enum description][LN472]

**deprecationMessage** / **markdownDeprecationMessage**

If you set `deprecationMessage`, or `markdownDeprecationMessage`, the setting will get a warning underline with your specified message. Also, the setting will be hidden from the settings UI unless it is configured by the user. If you set `markdownDeprecationMessage`, the markdown will not be rendered in the setting hover or the problems view. If you set both properties, `deprecationMessage` will be shown in the hover and the problems view, and `markdownDeprecationMessage` will be rendered as Markdown in the settings UI.

Example:

```json
{
  "json.colorDecorators.enable": {
    "type": "boolean",
    "description": "Enables or disables color decorators",
    "markdownDeprecationMessage": "**Deprecated**: Please use `#editor.colorDecorators#` instead.",
    "deprecationMessage": "Deprecated: Please use editor.colorDecorators instead."
  }
}
```

**Other JSON Schema properties**

You can use any of the validation JSON Schema properties to describe other constraints on configuration values:

- `default` for defining the default value of a property
- `minimum` and `maximum` for restricting numeric values
- `maxLength`, `minLength` for restricting string length
- `pattern` for restricting strings to a given regular expression
- `patternErrorMessage` for giving a tailored error message when a pattern does not match.
- `format` for restricting strings to well-known formats, such as `date`, `time`, `ipv4`, `email`,
  and `uri`
- `maxItems`, `minItems` for restricting array length
- `editPresentation` for controlling whether a single-line inputbox or multi-line textarea is rendered for the string setting in the Settings editor

**Unsupported JSON Schema properties**

Not supported in the configuration section are:

- `$ref` and `definition`: The configuration schemas needs to be self-contained and cannot make assumptions how the aggregated settings JSON schema document looks like.

For more details on these and other features, see the [JSON Schema Reference][LK431].

**scope**

A configuration setting can have one of the following possible scopes:

- `application` - Settings that apply to all instances of VS Code and can only be configured in user settings.
- `machine` - Machine specific settings that can be set only in user settings or only in remote settings. For example, an installation path which shouldn't be shared across machines.
- `machine-overridable` - Machine specific settings that can be overridden by workspace or folder settings.
- `window` - Windows (instance) specific settings which can be configured in user, workspace, or remote settings.
- `resource` - Resource settings, which apply to files and folders, and can be configured in all settings levels, even folder settings.
- `language-overridable` - Resource settings that can be overridable at a language level.

Configuration scopes determine when a setting is available to the user through the Settings editor and whether the setting is applicable. If no `scope` is declared, the default is `window`.

Below are example configuration scopes from the built-in Git extension:

```json
{
  "contributes": {
    "configuration": {
      "title": "Git",
      "properties": {
        "git.alwaysSignOff": {
          "type": "boolean",
          "scope": "resource",
          "default": false,
          "description": "%config.alwaysSignOff%"
        },
        "git.ignoredRepositories": {
          "type": "array",
          "default": [],
          "scope": "window",
          "description": "%config.ignoredRepositories%"
        },
        "git.autofetch": {
          "type": [
            "boolean",
            "string"
          ],
          "enum": [
            true,
            false,
            "all"
          ],
          "scope": "resource",
          "markdownDescription": "%config.autofetch%",
          "default": false,
          "tags": [
            "usesOnlineServices"
          ]
        }
      }
    }
  }
}
```

You can see that `git.alwaysSignOff` has `resource` scope and can be set per user, workspace, or folder, while the ignored repositories list with `window` scope applies more globally for the VS Code window or workspace (which might be multi-root).

**Linking to settings**

You can insert a link to another setting, which will be rendered as a clickable link in the settings UI, by using this special syntax in the markdown-type properties: ``` `#target.setting.id#` ```. This will work in `markdownDescription`, `markdownEnumDescriptions`, and `markdownDeprecationMessage`. Example:

```json
  "files.autoSaveDelay": {
    "markdownDescription": "Controls the delay in ms after which a dirty editor is saved automatically. Only applies when `#files.autoSave#` is set to `afterDelay`.",
    // ...
  }
```

In the settings UI, this is rendered as:

![setting link example][LN473]

## contributes.configurationDefaults

Contribute default values for other registered configurations and override their defaults.

The following example overrides the default behavior of `files.autoSave` setting to AutoSave files on focus change.

```json
"configurationDefaults": {
      "files.autoSave": "onFocusChange"
}
```

You can also contribute default editor configurations for the provided language. For example, the following snippet contributes default editor configurations for the `markdown` language:

```json
{
  "contributes": {
    "configurationDefaults": {
      "[markdown]": {
        "editor.wordWrap": "on",
        "editor.quickSuggestions": {
                "comments": "off",
                "strings": "off",
                "other": "off"
        }
      }
    }
  }
}
```

## contributes.customEditors

The `customEditors` contribution point is how your extension tells VS Code about the custom editors that it provides. For example, VS Code needs to know what types of files your custom editor works with as well as how to identify your custom editor in any UI.

Here's a basic `customEditor` contribution for the [custom editor extension sample][LK431]:

```json
"contributes": {
  "customEditors": [
    {
      "viewType": "catEdit.catScratch",
      "displayName": "Cat Scratch",
      "selector": [
        {
          "filenamePattern": "*.cscratch"
        }
      ],
      "priority": "default"
    }
  ]
}
```

`customEditors` is an array, so your extension can contribute multiple custom editors.

- `viewType` - Unique identifier for your custom editor.

    This is how VS Code ties a custom editor contribution in the `package.json` to your custom editor implementation in code. This must be unique across all extensions, so instead of a generic `viewType` such as `"preview"` make sure to use one that is unique to your extension, for example `"viewType": "myAmazingExtension.svgPreview"`.

- `displayName` - Name that identifies the custom editor in VS Code's UI.

    The display name is shown to the user in VS Code UI such as the **View: Reopen with** dropdown.

- `selector` - Specifies which files a custom editor is active for.

    The `selector` is an array of one or more [glob patterns][LN473]. These glob patterns are matched against file names to determine if the custom editor can be used for them. A `filenamePattern` such as `*.png` will enable the custom editor for all PNG files.

    You can also create more specific patterns that match on file or directory names, for example `**/translations/*.json`.

- `priority` - (optional) Specifies when the custom editor is used.

    `priority` controls when a custom editor is used when a resource is open. Possible values are:

  - `"default"` - Try to use the custom editor for every file that matches the custom editor's `selector`. If there are multiple custom editors for a given file, the user will have to select which custom editor they want to use.
  - `"option"` - Do not use the custom editor by default but allow users to switch to it or configure it as their default.

You can learn more in the [Custom Editors][LN473] extension guide.

## contributes.debuggers

Contribute a debugger to VS Code. A debugger contribution has the following properties:

- `type` is a unique ID that is used to identify this debugger in a launch configuration.
- `label` is the user visible name of this debugger in the UI.
- `program` the path to the debug adapter that implements the VS Code debug protocol against the real debugger or runtime.
- `runtime` if the path to the debug adapter is not an executable but needs a runtime.
- `configurationAttributes` is the schema for launch configuration arguments specific to this debugger. Please note that the JSON schema constructs `$ref` and `definition` are not supported.
- `initialConfigurations` lists launch configurations that are used to populate an initial launch.json.
- `configurationSnippets` lists launch configurations that are available through IntelliSense when editing a launch.json.
- `variables` introduces substitution variables and binds them to commands implemented by the debugger extension.
- `languages` those languages for which the debug extension could be considered the "default debugger".

### debugger example

```json
{
  "contributes": {
    "debuggers": [
      {
        "type": "node",
        "label": "Node Debug",

        "program": "./out/node/nodeDebug.js",
        "runtime": "node",

        "languages": ["javascript", "typescript", "javascriptreact", "typescriptreact"],

        "configurationAttributes": {
          "launch": {
            "required": ["program"],
            "properties": {
              "program": {
                "type": "string",
                "description": "The program to debug."
              }
            }
          }
        },

        "initialConfigurations": [
          {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/app.js"
          }
        ],

        "configurationSnippets": [
          {
            "label": "Node.js: Attach Configuration",
            "description": "A new configuration for attaching to a running node program.",
            "body": {
              "type": "node",
              "request": "attach",
              "name": "${2:Attach to Port}",
              "port": 9229
            }
          }
        ],

        "variables": {
          "PickProcess": "extension.node-debug.pickNodeProcess"
        }
      }
    ]
  }
}
```

For a full walkthrough on how to integrate a `debugger`, go to [Debugger Extension][LN473].

## contributes.grammars

Contribute a TextMate grammar to a language. You must provide the `language` this grammar applies to, the TextMate `scopeName` for the grammar and the file path.

> **Note:** The file containing the grammar can be in JSON (filenames ending in .json) or in XML plist format (all other files).

### grammar example

```json
{
  "contributes": {
    "grammars": [
      {
        "language": "markdown",
        "scopeName": "text.html.markdown",
        "path": "./syntaxes/markdown.tmLanguage.json",
        "embeddedLanguages": {
          "meta.embedded.block.frontmatter": "yaml"
        }
      }
    ]
  }
}
```

See the [Syntax Highlight Guide][LN473] to learn more about how to register TextMate grammars associated with a language to receive syntax highlighting.

![grammars extension point example][LN474]

## contributes.icons

Contribute a new icon by ID, along with a default icon. The icon ID can then be used by the extension (or any other extensions that depend on the extension) anywhere a `ThemeIcon` can be used `new ThemeIcon("iconId")`, in [Markdown strings][LN475] (`$(iconId)`), and as icons in certain contribution points.

```json
{
  "contributes": {
    "icons": {
      "distro-ubuntu": {
        "description": "Ubuntu icon",
        "default": {
          "fontPath": "./distroicons.woff",
          "fontCharacter": "\\E001"
        }
      },
      "distro-fedora": {
        "description": "Ubuntu icon",
        "default": {
          "fontPath": "./distroicons.woff",
          "fontCharacter": "\\E002"
        }
      }
    }
  }
}
```

## contributes.iconThemes

Contribute a file icon theme to VS Code. File icons are shown next to file names, indicating the file type.

You must specify an id (used in the settings), a label and the path to the file icon definition file.

### file icon theme example

```json
{
  "contributes": {
    "iconThemes": [
      {
        "id": "my-cool-file-icons",
        "label": "Cool File Icons",
        "path": "./fileicons/cool-file-icon-theme.json"
      }
    ]
  }
}
```

![file icon theme extension point example][LN476]

See the [File Icon Theme Guide][LN476] on how to create a File Icon Theme.

## contributes.jsonValidation

Contribute a validation schema for a specific type of `json` file. The `url` value can be either a local path to a schema file included in the extension or a remote server URL such as a [json schema store][LK432].

```json
{
  "contributes": {
    "jsonValidation": [
      {
        "fileMatch": ".jshintrc",
        "url": "https://json.schemastore.org/jshintrc"
      }
    ]
  }
}
```

## contributes.keybindings

Contribute a key binding rule defining what command should be invoked when the user presses a key combination. See the [Key Bindings][LN476] topic where key bindings are explained in detail.

Contributing a key binding will cause the Default Keyboard Shortcuts to display your rule, and every UI representation of the command will now show the key binding you have added. And, of course, when the user presses the key combination the command will be invoked.

> **Note:** Because VS Code runs on Windows, macOS and Linux, where modifiers differ, you can use "key" to set the default key combination and overwrite it with a specific platform.

> **Note:** When a command is invoked (from a key binding or from the Command Palette), VS Code will emit an activationEvent `onCommand:${command}`.

### keybinding example

Defining that `kbstyle(Ctrl+F1)` under Windows and Linux and `kbstyle(Cmd+F1)` under macOS trigger the `"extension.sayHello"` command:

```json
{
  "contributes": {
    "keybindings": [
      {
        "command": "extension.sayHello",
        "key": "ctrl+f1",
        "mac": "cmd+f1",
        "when": "editorTextFocus"
      }
    ]
  }
}
```

![keybindings extension point example][LN477]

## contributes.languages

Contribute definition of a programming language. This will introduce a new language or enrich the knowledge VS Code has about a language.

The main effects of `contributes.languages` are:

- Define a `languageId` that can be reused in other parts of VS Code API, such as `vscode.TextDocument.getLanguageId()` and the `onLanguage` Activation Events.
  - You can contribute a human-readable using the `aliases` field. The first item in the list will be used as the human-readable label.
- Associate file name extensions (`extensions`), file names (`filenames`), file name [glob patterns][LN477] (`filenamePatterns`), files that begin with a specific line (such as hashbang) (`firstLine`), and `mimetypes` to that `languageId`.
- Contribute a set of [Declarative Language Features][LN477] for the contributed language. Learn more about the configurable editing features in the [Language Configuration Guide][LN477].
- Contribute an icon which can be used as in file icon themes if theme does not contain an icon for the language

### language example

```json
{
  "contributes": {
    "languages": [
      {
        "id": "python",
        "extensions": [".py"],
        "aliases": ["Python", "py"],
        "filenames": [],
        "firstLine": "^#!/.*\\bpython[0-9.-]*\\b",
        "configuration": "./language-configuration.json",
        "icon": {
          "light": "./icons/python-light.png",
          "dark": "./icons/python-dark.png"
        }
      }
    ]
  }
}
```

## contributes.menus

Contribute a menu item for a command to the editor or Explorer. The menu item definition contains the command that should be invoked when selected and the condition under which the item should show. The latter is defined with the `when` clause, which uses the key bindings [when clause contexts][LN477].

A `command` property indicates which command to run when selecting a menu item. A `submenu` property indicates which submenu to render in this location.

When declaring a `command` menu item, an alternative command can also be defined using the `alt`-property. It will be shown and invoked when pressing `kbstyle(Alt)` while opening a menu. On Windows and Linux `kbstyle(Shift)` also does this, which is useful in situations where `kbstyle(Alt)` would trigger the window menu bar.

Last, a `group` property defines sorting and grouping of menu items. The `navigation` group is special as it will always be sorted to the top/beginning of a menu.

> **Note** that `when` clauses apply to menus and `enablement` clauses to commands. The `enablement` applies to all menus and even keybindings while the `when` only applies to a single menu.

Currently extension writers can contribute to:

- `commandPalette` - global Command Palette
- `comments/comment/title` - Comments title menu bar
- `comments/comment/context` - Comments context menu
- `comments/commentThread/title` - Comments thread title menu bar
- `comments/commentThread/context`- Comments thread context menu
- `debug/callstack/context` - Debug Call Stack view context menu
- `debug/callstack/context` group `inline` - Debug Call Stack view inline actions
- `debug/toolBar` - Debug view toolbar
- `debug/variables/context` - Debug Variables view context menu
- `editor/context` - editor context menu
- `editor/lineNumber/context` - editor line number context menu
- `editor/title` - editor title menu bar
- `editor/title/context` - editor title context menu
- `editor/title/run` - Run submenu on the editor title menu bar
- `explorer/context` - Explorer view context menu
- `extension/context` - Extensions view context menu
- `file/newFile`  - New File item in the File menu and Welcome page
- `interactive/toolbar` - Interactive Window toolbar
- `interactive/cell/title` - Interactive Window cell title menu bar
- `notebook/toolbar` - notebook toolbar
- `notebook/cell/title` - notebook cell title menu bar
- `notebook/cell/execute` - notebook cell execution menu
- `scm/title` - [SCM title menu][LN478]
- `scm/resourceGroup/context` - [SCM resource groups][LN478] menus
- `scm/resourceFolder/context` - [SCM resource folders][LN478] menus
- `scm/resourceState/context` - [SCM resources][LN478] menus
- `scm/change/title` - [SCM change title][LN478] menus
- `scm/sourceControl`- [SCM source control menu][LN478]
- `terminal/context` - terminal context menu
- `terminal/title/context` - terminal title context menu
- `testing/item/context` - Test Explorer item context menu
- `testing/item/gutter` - menu for a gutter decoration for a test item
- `timeline/title` - Timeline view title menu bar
- `timeline/item/context` - Timeline view item context menu
- `touchBar` - macOS Touch Bar
- `view/title` - [View title menu][LN478]
- `view/item/context` - [View item context menu][LN478]
- `webview/context` - any [webview][LN478] context menu
- Any [contributed submenu][LN478]

> **Note 1:** When a command is invoked from a (context) menu, VS Code tries to infer the currently selected resource and passes that as a parameter when invoking the command. For instance, a menu item inside the Explorer is passed the URI of the selected resource and a menu item inside an editor is passed the URI of the document.

> **Note 2:** Commands of menu items contributed to `editor/lineNumber/context` are also passed the line number. Additionally these items can reference the `editorLineNumber` context key in their `when` clauses, for example by using the `in` or `not in` operators to test it against an array-valued context key managed by the extension.

In addition to a title, a contributed command can specify the icon which VS Code will show when the invoking menu item is represented as a button, for example on a title menu bar.

### menu example

Here's a command menu item:

```json
{
  "contributes": {
    "menus": {
      "editor/title": [
        {
          "when": "resourceLangId == markdown",
          "command": "markdown.showPreview",
          "alt": "markdown.showPreviewToSide",
          "group": "navigation"
        }
      ]
    }
  }
}
```

![menus extension point example][LN479]

Similarly, here's a command menu item added to a particular view. The example below contributes to an arbitrary view like the terminal:

```json
{
  "contributes": {
    "menus": {
      "view/title": [
        {
          "command": "terminalApi.sendText",
          "when": "view == terminal",
          "group": "navigation"
        }
      ]
    }
  }
}
```

![Adding a menu entry to view/title with view == terminal will result in an action in the panel when the terminal is open][LN480]

Here's a submenu menu item:

```json
{
  "contributes": {
    "menus": {
      "scm/title": [
        {
          "submenu": "git.commit",
          "group": "2_main@1",
          "when": "scmProvider == git"
        }
      ]
    }
  }
}
```

![menus extension point example (submenu)][LN481]

### Context specific visibility of Command Palette menu items

When registering commands in `package.json`, they will automatically be shown in the **Command Palette** (`kb(workbench.action.showCommands)`). To allow more control over command visibility, there is the `commandPalette` menu item. It allows you to define a `when` condition to control if a command should be visible in the **Command Palette** or not.

The snippet below makes the 'Hello World' command only visible in the **Command Palette** when something is selected in the editor:

```json
{
  "commands": [
    {
      "command": "extension.sayHello",
      "title": "Hello World"
    }
  ],
  "menus": {
    "commandPalette": [
      {
        "command": "extension.sayHello",
        "when": "editorHasSelection"
      }
    ]
  }
}
```

### Sorting of groups

Menu items can be sorted into groups. They are sorted in lexicographical order with the following defaults/rules.
You can add menu items to these groups or add new groups of menu items in between, below, or above.

The **editor context menu** has these default groups:

- `navigation` - The `navigation` group comes first in all cases.
- `1_modification` - This group comes next and contains commands that modify your code.
- `9_cutcopypaste` - The second last default group with the basic editing commands.
- `z_commands` - The last default group with an entry to open the Command Palette.

![Menu Group Sorting][LN482]

The **explorer context menu** has these default groups:

- `navigation` - Commands related to navigation across VS Code. This group comes first in all cases.
- `2_workspace` - Commands related to workspace manipulation.
- `3_compare` - Commands related to comparing files in the diff editor.
- `4_search` - Commands related to searching in the search view.
- `5_cutcopypaste` - Commands related to cutting, copying, and pasting of files.
- `6_copypath` - Commands related to copying file paths.
- `7_modification` - Commands related to the modification of file.

The **editor tab context menu** has these default groups:

- `1_close` - Commands related to closing editors.
- `3_preview` - Commands related to pinning editors.

The **editor title menu** has these default groups:

- `navigation` - Commands related to navigating.
- `1_run` - Commands related to running and debugging the editor.
- `1_diff` - Commands related to working with diff editors.
- `3_open` - Commands related to opening editors.
- `5_close` - Commands related to closing editors.

`navigation` and `1_run` are shown in the primary editor title area. The other groups are shown in the secondary area - under the `...` menu.

The **terminal tab context menu** has these default groups:

- `1_create` - Commands related to creating terminals.
- `3_run` - Commands related to running/executing something in the terminal.
- `5_manage` - Commands related to managing a terminal.
- `7_configure` - Commands related to terminal 0configuration.

The **terminal context menu** has these default groups:

- `1_create` - Commands related to creating terminals.
- `3_edit` - Commands related to manipulating text, the selection or the clipboard.
- `5_clear` - Commands related to clearing the terminal.
- `7_kill` - Commands related to closing/killing the terminal.
- `9_config` - Commands related to terminal configuration.

The **Timeline view item context menu** has these default groups:

- `inline` - Important or frequently used timeline item commands. Rendered as a toolbar.
- `1_actions` - Commands related to working with timeline items.
- `5_copy` - Commands related to copying timeline item information.

The **Extensions view context menu** has these default groups:

- `1_copy` - Commands related to copying extension information.
- `2_configure` - Commands related to configuring an extension.

### Sorting inside groups

The order inside a group depends on the title or an order-attribute. The group-local order of a menu item is specified by appending `@<number>` to the group identifier as shown below:

```json
{
  "editor/title": [
    {
      "when": "editorHasSelection",
      "command": "extension.Command",
      "group": "myGroup@1"
    }
  ]
}
```

## contributes.problemMatchers

Contribute problem matcher patterns. These contributions work in both the output panel runner and in the terminal runner. Below is an example to contribute a problem matcher for the gcc compiler in an extension:

```json
{
  "contributes": {
    "problemMatchers": [
      {
        "name": "gcc",
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceFolder}"],
        "pattern": {
          "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      }
    ]
  }
}
```

This problem matcher can now be used in a `tasks.json` file via a name reference `$gcc`. An example looks like this:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build",
      "command": "gcc",
      "args": ["-Wall", "helloWorld.c", "-o", "helloWorld"],
      "problemMatcher": "$gcc"
    }
  ]
}
```

Also see: [Defining a Problem Matcher][LN483]

## contributes.problemPatterns

Contributes named problem patterns that can be used in problem matchers (see above).

## contributes.productIconThemes

Contribute a product icon theme to VS Code. Product icons are all icons used in VS Code except file icons and icons contributed from extensions.

You must specify an id (used in the settings), a label and the path to the icon definition file.

### product icon theme example

```json
{
  "contributes": {
    "productIconThemes": [
      {
        "id": "elegant",
        "label": "Elegant Icon Theme",
        "path": "./producticons/elegant-product-icon-theme.json"
      }
    ]
  }
}
```

![product icon theme extension point example][LN484]

See the [Product Icon Theme Guide][LN484] on how to create a Product Icon Theme.

## contributes.resourceLabelFormatters

Contributes resource label formatters that specify how to display URIs everywhere in the workbench. For example here's how an extension could contribute a formatter for URIs with scheme `remotehub`:

```json
{
  "contributes": {
    "resourceLabelFormatters": [
      {
        "scheme": "remotehub",
        "formatting": {
          "label": "${path}",
          "separator": "/",
          "workspaceSuffix": "GitHub"
        }
      }
    ]
  }
}
```

This means that all URIs that have a scheme `remotehub` will get rendered by showing only the `path` segment of the URI and the separator will be `/`. Workspaces which have the `remotehub` URI will have the GitHub suffix in their label.

## contributes.semanticTokenModifiers

Contributes new semantic token modifiers that can be highlighted via theme rules.

```json
{
  "contributes": {
    "semanticTokenModifiers": [
      {
        "id": "native",
        "description": "Annotates a symbol that is implemented natively"
      }
    ]
  }
}
```

See the [Semantic Highlighting Guide][LN484] to read more about semantic highlighting.

## contributes.semanticTokenScopes

Contributes mapping between semantic token types & modifiers and scopes either as a fallback or to support language-specific themes.

```json
{
  "contributes": {
    "semanticTokenScopes": [
      {
        "language": "typescript",
        "scopes": {
          "property.readonly": ["variable.other.constant.property.ts"]
        }
      }
    ]
  }
}
```

See the [Semantic Highlighting Guide][LN484] to read more about semantic highlighting.

## contributes.semanticTokenTypes

Contributes new semantic token types that can be highlighted via theme rules.

```json
{
  "contributes": {
    "semanticTokenTypes": [
      {
        "id": "templateType",
        "superType": "type",
        "description": "A template type."
      }
    ]
  }
}
```

See the [Semantic Highlighting Guide][LN484] to read more about semantic highlighting.

## contributes.snippets

Contribute snippets for a specific language. The `language` attribute is the [language identifier][LN485] and the `path` is the relative path to the snippet file, which defines snippets in the [VS Code snippet format][LN486].

The example below shows adding snippets for the Go language.

```json
{
  "contributes": {
    "snippets": [
      {
        "language": "go",
        "path": "./snippets/go.json"
      }
    ]
  }
}
```

## contributes.submenus

Contribute a submenu as a placeholder onto which menu items can be contributed. A submenu requires a `label` to be shown in the parent menu.

In addition to a title, commands can also define icons that VS Code will show in the editor title menu bar.

### submenu example

```json
{
  "contributes": {
    "submenus": [
      {
        "id": "git.commit",
        "label": "Commit"
      }
    ]
  }
}
```

![submenus extension point example][LN487]

## contributes.taskDefinitions

Contributes and defines an object literal structure that allows to uniquely identify a contributed task in the system. A task definition has at minimum a `type` property but it usually defines additional properties. For example a task definition for a task representing a script in a package.json file looks like this:

```json
{
  "taskDefinitions": [
    {
      "type": "npm",
      "required": ["script"],
      "properties": {
        "script": {
          "type": "string",
          "description": "The script to execute"
        },
        "path": {
          "type": "string",
          "description": "The path to the package.json file. If omitted the package.json in the root of the workspace folder is used."
        }
      }
    }
  ]
}
```

The task definition is defined using JSON schema syntax for the `required` and `properties` property. The `type` property defines the task type. If the above example:

- `"type": "npm"` associates the task definition with the npm tasks
- `"required": [ "script" ]` defines that `script` attributes as mandatory. The `path` property is optional.
- `"properties" : { ... }` defines the additional properties and their types.

When the extension actually creates a Task, it needs to pass a `TaskDefinition` that conforms to the task definition contributed in the package.json file. For the `npm` example a task creation for the test script inside a package.json file looks like this:

```ts
let task = new vscode.Task({ type: 'npm', script: 'test' }, ....);
```

## contributes.terminal

Contribute a terminal profile to VS Code, allowing extensions to handle the creation of the profiles. When defined, the profile should appear when creating the terminal profile

```json
{
  "activationEvents": [
    "onTerminalProfile:my-ext.terminal-profile"
  ],
  "contributes": {
    "terminal": {
      "profiles": [
        {
          "title": "Profile from extension",
          "id": "my-ext.terminal-profile"
        }
      ]
    },
  }
}
```

When defined, the profile will show up in the terminal profile selector. When activated, handle the creation of the profile by returning terminal options:

```ts
vscode.window.registerTerminalProfileProvider('my-ext.terminal-profile', {
  provideTerminalProfile(token: vscode.CancellationToken): vscode.ProviderResult<vscode.TerminalOptions | vscode.ExtensionTerminalOptions> {
    return { name: 'Profile from extension', shellPath: 'bash' };
  }
});
```

## contributes.themes

Contribute a color theme to VS Code, defining workbench colors and styles for syntax tokens in the editor.

You must specify a label, whether the theme is a dark theme or a light theme (such that the rest of VS Code changes to match your theme) and the path to the file (JSON format).

### theme example

```json
{
  "contributes": {
    "themes": [
      {
        "label": "Monokai",
        "uiTheme": "vs-dark",
        "path": "./themes/monokai-color-theme.json"
      }
    ]
  }
}
```

![color theme extension point example][LN488]

See the [Color Theme Guide][LN488] on how to create a Color Theme.

## contributes.typescriptServerPlugins

Contributes [TypeScript server plugins][LK433] that augment VS Code's JavaScript and TypeScript support:

```json
{
  "contributes": {
    "typescriptServerPlugins": [
      {
        "name": "typescript-styled-plugin"
      }
    ]
  }
}
```

The above example extension contributes the [`typescript-styled-plugin`][LK434] which adds styled-component IntelliSense for JavaScript and TypeScript. This plugin will be loaded from the extension and must be installed as a normal NPM `dependency` in the extension:

```json
{
  "dependencies": {
    "typescript-styled-plugin": "*"
  }
}
```

TypeScript server plugins are loaded for all JavaScript and TypeScript files when the user is using VS Code's version of TypeScript. They are not activated if the user is using a workspace version of TypeScript, unless the plugin explicitly sets `"enableForWorkspaceTypeScriptVersions": true`.

```json
{
  "contributes": {
    "typescriptServerPlugins": [
      {
        "name": "typescript-styled-plugin",
        "enableForWorkspaceTypeScriptVersions": true
      }
    ]
  }
}
```

### Plugin configuration

Extensions can send configuration data to contributed TypeScript plugins through an API provided by VS Code's built-in TypeScript extension:

```ts
// In your VS Code extension

export async function activate(context: vscode.ExtensionContext) {
  // Get the TS extension
  const tsExtension = vscode.extensions.getExtension('vscode.typescript-language-features');
  if (!tsExtension) {
    return;
  }

  await tsExtension.activate();

  // Get the API from the TS extension
  if (!tsExtension.exports || !tsExtension.exports.getAPI) {
    return;
  }

  const api = tsExtension.exports.getAPI(0);
  if (!api) {
    return;
  }

  // Configure the 'my-typescript-plugin-id' plugin
  api.configurePlugin('my-typescript-plugin-id', {
    someValue: process.env['SOME_VALUE']
  });
}
```

The TypeScript server plugin receives the configuration data through an `onConfigurationChanged` method:

```ts
// In your TypeScript plugin

import * as ts_module from 'typescript/lib/tsserverlibrary';

export = function init({ typescript }: { typescript: typeof ts_module }) {
  return {
    create(info: ts.server.PluginCreateInfo) {
      // Create new language service
    },
    onConfigurationChanged(config: any) {
      // Receive configuration changes sent from VS Code
    }
  };
};
```

This API allows VS Code extensions to synchronize VS Code settings with a TypeScript server plugin, or dynamically change the behavior of a plugin. Take a look at the [TypeScript TSLint plugin][LK435] and [lit-html][LK436] extensions to see how this API is used in practice.

## contributes.views

Contribute a view to VS Code. You must specify an identifier and name for the view. You can contribute to following view containers:

- `explorer`: Explorer view container in the Activity Bar
- `scm`: Source Control Management (SCM) view container in the Activity Bar
- `debug`: Run and Debug view container in the Activity Bar
- `test`: Test view container in the Activity Bar
- [Custom view containers][LN488] contributed by Extensions.

When the user opens the view, VS Code will then emit an activationEvent `onView:${viewId}` (`onView:nodeDependencies` for the example below). You can also control the visibility of the view by providing the `when` context value. The `icon` specified will be used when the title cannot be shown (e.g. when the view is dragged to the Activity Bar). The `contextualTitle` is used when the view is moved out of its default view container and needs additional context.

```json
{
  "contributes": {
    "views": {
      "explorer": [
        {
          "id": "nodeDependencies",
          "name": "Node Dependencies",
          "when": "workspaceHasPackageJSON",
          "icon": "media/dep.svg",
          "contextualTitle": "Package Explorer"
        }
      ]
    }
  }
}
```

![views extension point example][LN489]

The content of a view can be populated in two ways:

- With a [TreeView][LN489] by providing a [data provider][LN489] through `createTreeView` API or register the [data provider][LN489] directly through `registerTreeDataProvider` API to populate data. TreeViews are ideal for showing hierarchical data and lists. Refer to the [tree-view-sample][LK436].
- With a [WebviewView][LN489] by registering a [provider][LN490] with `registerWebviewViewProvider`. Webview views allow rendering arbitrary HTML in the view. See the [webview view sample extension][LK436] for more details.

## contributes.viewsContainers

Contribute a view container into which [Custom views][LN490] can be contributed. You must specify an identifier, title, and an icon for the view container. At present, you can contribute them to the Activity Bar (`activitybar`) and Panel (`panel`). Below example shows how the `Package Explorer` view container is contributed to the Activity Bar and how views are contributed to it.

```json
{
  "contributes": {
    "viewsContainers": {
      "activitybar": [
        {
          "id": "package-explorer",
          "title": "Package Explorer",
          "icon": "resources/package-explorer.svg"
        }
      ]
    },
    "views": {
      "package-explorer": [
        {
          "id": "package-dependencies",
          "name": "Dependencies"
        },
        {
          "id": "package-outline",
          "name": "Outline"
        }
      ]
    }
  }
}
```

![Custom views container][LN491]

### Icon specifications

- `Size:` Icons should be 24x24 and centered.
- `Color:` Icons should use a single color.
- `Format:` It is recommended that icons be in SVG, though any image file type is accepted.
- `States:` All icons inherit the following state styles:

  | State   | Opacity |
  | ------- | ------- |
  | Default | 60%     |
  | Hover   | 100%    |
  | Active  | 100%    |

## contributes.viewsWelcome

Contribute welcome content to [Custom views][LN491]. Welcome content only applies to empty tree views. A view is considered empty if the tree has no children and no `TreeView.message`. By convention, any command links that are on a line by themselves are displayed as a button. You can specify the view that the welcome content should apply to with the `view` property. Visibility of the welcome content can be controlled with the `when` context value. The text to be displayed as the welcome content is set with the `contents` property.

```json
{
  "contributes": {
    "viewsWelcome": [
      {
        "view": "scm",
        "contents": "In order to use git features, you can open a folder containing a git repository or clone from a URL.\n[Open Folder](command:vscode.openFolder)\n[Clone Repository](command:git.clone)\nTo learn more about how to use git and source control in VS Code [read our docs](https://aka.ms/vscode-scm).",
        "when": "config.git.enabled && git.state == initialized && workbenchState == empty"
      }
    ]
  }
}
```

![Welcome content example][LN494]

Multiple welcome content items can be contributed to one view. When this happens, the content that come from VS Code core comes first, followed by content from built-in extensions, followed by content from all other extensions.

## contributes.walkthroughs

[Sample extension][LK437]

Contribute walkthroughs to appear on the Getting Started page. Walkthroughs are automatically opened on install of your extension and provide a convenient way to introduce users to features of your extension.

Walkthroughs consist of a title, description, id, and a series of steps. Additionally, a `when` condition can be set to hide or show the walkthrough based on context keys. For example, a walkthrough to explain setup on a Linux platform could be given `when: "isLinux"` to only appear on Linux machines.

Each step in a walkthrough has a title, description, id, and media element (either an image or Markdown content), along with an optional set of events that will cause the step to be checked (shown in the example below). Step descriptions are Markdown content, and support `**bold**`, `__underlined__`, and ``` ``code`` ``` rendering, as well as links. Similar to walkthroughs, steps can be given when conditions to hide or show them based on context keys.

SVGs are recommended for images given their ability to scale and their support for VS Code's theme colors. Use the [Visual Studio Code Color Mapper][LK437] Figma plugin to easily reference theme colors in the SVGs.

```json
{
  "contributes": {
    "walkthroughs": [
      {
        "id": "sample",
        "title": "Sample",
        "description": "A sample walkthrough",
        "steps": [
          {
            "id": "runcommand",
            "title": "Run Command",
            "description": "This step will run a command and check off once it has been run.\n[Run Command](command:getting-started-sample.runCommand)",
            "media": { "image": "media/image.png", "altText": "Empty image" },
            "completionEvents": ["onCommand:getting-started-sample.runCommand"]
          },
          {
            "id": "changesetting",
            "title": "Change Setting",
            "description": "This step will change a setting and check off when the setting has changed\n[Change Setting](command:getting-started-sample.changeSetting)",
            "media": { "markdown": "media/markdown.md" },
            "completionEvents": ["onSettingChanged:getting-started-sample.sampleSetting"]
          }
        ]
      }
    ]
  }
}
```

![Walkthrough example][LN497]

### Completion events

By default, if no `completionEvents` events are provided, the step will be checked off when any of it's buttons are clicked, or if the step has no buttons, when it is opened. If finer control is required, a list of `completionEvents` can be provided.

Available completion events include:

- `onCommand:myCommand.id`: Check off step when a command has been run.
- `onSettingChanged:mySetting.id`: Check off step once the given setting has been modified.
- `onContext:contextKeyExpression`: Check off step when a context key expression evaluates true.
- `extensionInstalled:myExt.id`: Check off step if the given extension is installed.
- `onView:myView.id`: Check off step once a given view becomes visible.
- `onLink:https://...`: Check off step once a given link has been opened via a Walkthrough.

Once a step has been checked off, it will remain checked off until the user explicitly unchecks the step or resets their progress (via the **Getting Started: Reset Progress** command).


<a id="_api_references_activation-events" ></a>

# /api/references/activation-events
------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: C83BB647-A37E-45CE-BA4C-837B397C2ABE
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: To support lazy activation of Visual Studio Code extensions (plug-ins), your extension controls when it should be loaded through a set of Activation Events.
    ---

## Activation Events

**Activation Events** is a set of JSON declarations that you make in the `activationEvents` field of `package.json` [Extension Manifest][FX000]. Your extension becomes activated when the **Activation Event** happens. Here is a list of all available **Activation Events**:

- [`onLanguage`][LN498]
- [`onCommand`][LN498]
- [`onDebug`][LN499]
  - [`onDebugInitialConfigurations`][LN500]
  - [`onDebugResolve`][LN501]
- [`workspaceContains`][LN502]
- [`onFileSystem`][LN503]
- [`onView`][LN503]
- [`onUri`][LN504]
- [`onWebviewPanel`][LN505]
- [`onCustomEditor`][LN506]
- [`onAuthenticationRequest`][LN507]
- [`onStartupFinished`][LN508]
- [`*`][LN509]

We also provide a reference of all fields in the [`package.json` extension manifest][LN509].

## onLanguage

This activation event is emitted and interested extensions will be activated whenever a file that resolves to a certain language gets opened.

```json
...
"activationEvents": [
    "onLanguage:python"
]
...
```

The `onLanguage` event takes a [language identifier][LN509] value.

Multiple languages can be declared with separate `onLanguage` entries in the `activationEvents` array.

```json
"activationEvents": [
    "onLanguage:json",
    "onLanguage:markdown",
    "onLanguage:typescript"
]
...
```

> **Note**: Beginning with VS Code 1.74.0, languages contributed by your extension do not require a corresponding `onLanguage` activation event declaration for your extension to be activated.

Additionally, if your extension needs to be activated before any language is used, you can use the generic `onLanguage` activation event to ensure this:

```json
"activationEvents": [
    "onLanguage"
]
```

> **Note**: It is best practice to activate only when a user needs your extension. If your extension works on a subset of languages, it is better for the user to list that subset than to activate on all languages.

## onCommand

This activation event is emitted and interested extensions will be activated whenever a command is being invoked:

```json
...
"activationEvents": [
    "onCommand:extension.sayHello"
]
...
```

> **Note**: Beginning with VS Code 1.74.0, commands contributed by your extension do not require a corresponding `onCommand` activation event declaration for your extension to be activated.

## onDebug

This activation event is emitted and interested extensions will be activated before a debug session is started:

```json
...
"activationEvents": [
    "onDebug"
]
...
```

These are two more fine-grained `onDebug` activation events:

### onDebugInitialConfigurations

`onDebugInitialConfigurations` is fired just before the `provideDebugConfigurations` method of the `DebugConfigurationProvider` is called.

### onDebugResolve

`onDebugResolve:type` is fired just before the `resolveDebugConfiguration` method of the `DebugConfigurationProvider` for the specified type is called.

**Rule of thumb:** If activation of a debug extension is lightweight, use `onDebug`. If it is heavyweight, use `onDebugInitialConfigurations` and/or `onDebugResolve` depending on whether the `DebugConfigurationProvider` implements the corresponding methods `provideDebugConfigurations` and/or `resolveDebugConfiguration`. See [Using a DebugConfigurationProvider][LN509] for more details on these methods.

## workspaceContains

This activation event is emitted and interested extensions will be activated whenever a folder is opened and the folder contains at least one file that matches a [glob pattern][LN509].

```json
...
"activationEvents": [
    "workspaceContains:**/.editorconfig"
]
...
```

## onFileSystem

This activation event is emitted and interested extensions will be activated whenever a file or folder from a specific _scheme_ is read. This is usually the `file`-scheme, but with custom file system providers more schemes come into place, e.g `ftp` or `ssh`.

```json
...
"activationEvents": [
    "onFileSystem:sftp"
]
...
```

## onView

This activation event is emitted and interested extensions will be activated whenever a view of the specified id is expanded in the VS Code sidebar. Built-in views do not emit an activation event.

The activation event below will fire whenever a view with the `nodeDependencies` id is visible:

```json
...
"activationEvents": [
    "onView:nodeDependencies"
]
...
```

> **Note**: Beginning with VS Code 1.74.0, views contributed by your extension do not require a corresponding `onView` activation event declaration for your extension to be activated.


## onUri

This activation event is emitted and interested extensions will be activated whenever a system-wide Uri for that extension is opened. The Uri scheme is fixed to either `vscode` or `vscode-insiders`. The Uri authority must be the extension's identifier. The rest of the Uri is arbitrary.

```json
...
"activationEvents": [
    "onUri"
]
...
```

If the `vscode.git` extension defines `onUri` as an activation event, it will be activated in any of the following Uris are open:

- `vscode://vscode.git/init`
- `vscode://vscode.git/clone?url=https%3A%2F%2Fgithub.com%2FMicrosoft%2Fvscode-vsce.git`
- `vscode-insiders://vscode.git/init` (for VS Code Insiders)

## onWebviewPanel

This activation event is emitted and interested extensions will be activated whenever VS Code needs to restore a [webview][LN509] with the matching `viewType`.

For example, the declaration of `onWebviewPanel` below:

```json
"activationEvents": [
    "onWebviewPanel:catCoding"
]
```

will cause the extension to be activated when VS Code needs to restore a webview with the viewType: `catCoding`. The viewType is set in the call to `window.createWebviewPanel` and you will need to have another activation event (for example, onCommand) to initially activate your extension and create the webview.

## onCustomEditor

This activation event is emitted and interested extensions will be activated whenever VS Code needs to create a [custom editor][LN509] with the matching `viewType`.

For example, the declaration of `onCustomEditor` below:

```json
"activationEvents": [
    "onCustomEditor:catCustoms.pawDraw"
]
```

will cause the extension to be activated when VS Code needs to restore a custom editor with the viewType: `catCustoms.pawDraw`. The viewType is set in the [`customEditors` contribution point][LN510] and bound to a provider with `registerCustomEditorProvider`.

> **Note**: Beginning with VS Code 1.74.0, custom editors contributed by your extension do not require a corresponding `onCustomEditor` activation event declaration for your extension to be activated.

## onAuthenticationRequest

This activation event is emitted and interested extensions will be activated whenever an extension requests an authentication session (via the `authentication.getSession()` API) with the matching `providerId`.

For example, the declaration of `onAuthenticationRequest` below:

```json
"activationEvents": [
    "onAuthenticationRequest:github"
]
```

will cause the extension to be activated when VS Code needs retrieve an `AuthenticationSession` of type `github`.

> **Note**: Beginning with VS Code 1.74.0, authentication providers contributed by your extension do not require a corresponding `onAuthenticationRequest` activation event declaration for your extension to be activated.

## onStartupFinished

This activation event is emitted and interested extensions will be activated **some time after** VS Code starts up. This is similar to the `*` activation event, but it will not slow down VS Code startup. Currently, this event is emitted after all the `*` activated extensions have finished activating.

```json
...
"activationEvents": [
    "onStartupFinished"
]
...
```

## Start up

The `*` activation event is emitted and interested extensions will be activated whenever VS Code starts up.

> **Note:** To ensure a great user experience, please use this activation event in your extension only when no other activation events combination works in your use-case.

```json
...
"activationEvents": [
    "*"
]
...
```

> **Note:** An extension can listen to multiple activation events, and that is preferable to listening to `"*"`.

> **Note:** An extension **must** export an `activate()` function from its main module and it will be invoked **only once** by VS Code when any of the specified activation events is emitted. Also, an extension **should** export a `deactivate()` function from its main module to perform cleanup tasks on VS Code shutdown. Extension **must** return a Promise from `deactivate()` if the cleanup process is asynchronous. An extension may return `undefined` from `deactivate()` if the cleanup runs synchronously.


<a id="_api_references_extension-manifest" ></a>

# /api/references/extension-manifest
-------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: C4F184A5-A804-4B0B-9EBA-AFE83B88EE49
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: At the core of Visual Studio Code's extensibility model is an extension (plug-in) manifest file where your extension declares its extension type(s), activation rules, and runtime resources.
    ---

## Extension Manifest

Every Visual Studio Code extension needs a manifest file `package.json` at the root of the extension directory structure.

## Fields

| Name                        | Required | Type    | Details                                                                                                                                                                                                                                                                                                                |
| --------------------------- | :------: | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                      | Y | `string`      | The name of the extension - should be all lowercase with no spaces.<br>The name must be unique to the Marketplace.
| `version`                   | Y | `string`      | [SemVer][LK437] compatible version.
| `publisher`                 | Y | `string`      | The [publisher identifier][LN510]
| `engines`                   | Y | `object`      | An object containing at least the `vscode` key matching the versions of VS Code that the extension is [compatible][LN511] with. Cannot be `*`. For example: `^0.10.5` indicates compatibility with a minimum VS Code version of `0.10.5`.
| `license`                   |   | `string`      | Refer to [npm's documentation][LK438]. If you do have a `LICENSE` file in the root of your extension, the value for `license` should be `"SEE LICENSE IN <filename>"`.
| `displayName`               |   | `string`      | The display name for the extension used in the Marketplace.<br>The display name must be unique to the Marketplace.
| `description`               |   | `string`      | A short description of what your extension is and does.
| `categories`                |   | `string[]`    | The categories you want to use for the extensions. Allowed values: `[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs, Data Science, Machine Learning, Visualization, Notebooks, Education, Testing]`
| `keywords`                  |   | `array`       | An array of **keywords** to make it easier to find the extension. These are included with other extension **Tags** on the Marketplace. This list is currently limited to 5 keywords.
| `galleryBanner`             |   | `object`      | Helps format the Marketplace header to match your icon. See details below.
| `preview`                   |   | `boolean`     | Sets the extension to be flagged as a Preview in the Marketplace.
| `main`                      |   | `string`      | The entry point to your extension.
| `browser`                   |   | `string`      | The entry point to your [Web extension][LN511].
| [`contributes`][LN511]      |   | `object`      | An object describing the extension's [contributions][LN511].
| [`activationEvents`][LN511] |   | `array`       | An array of the [activation events][LN511] for this extension.
| `badges`                    |   | `array`       | Array of [approved][LN511] badges to display in the sidebar of the Marketplace's extension page. Each badge is an object containing 3 properties: `url` for the badge's image URL, `href` for the link users will follow when clicking the badge and `description`.
| `markdown`                  |   | `string`      | Controls the Markdown rendering engine used in the Marketplace. Either `github` (default) or `standard`.
| `qna`                       |   | `marketplace`  (default), `string`, `false` | Controls the **Q & A** link in the Marketplace. Set to `marketplace` to enable the default Marketplace Q & A site. Set to a string to provide the URL of a custom Q & A site. Set to `false` to disable Q & A altogether.
| `sponsor`                   |   | `object`      | Specify the location from where users can sponsor your extension. This is an object with a single property `url`, which links to a page where users can sponsor your extension.
| `dependencies`              |   | `object`      | Any runtime Node.js dependencies your extensions needs. Exactly the same as [npm's `dependencies`][LK439].
| `devDependencies`           |   | `object`      | Any development Node.js dependencies your extension needs. Exactly the same as [npm's `devDependencies`][LK440].
| `extensionPack`             |   | `array`       | An array with the ids of extensions that can be installed together. The id of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.
| `extensionDependencies`     |   | `array`       | An array with the ids of extensions that this extension depends on. The id of an extension is always `${publisher}.${name}`. For example: `vscode.csharp`.
| `extensionKind`             |   | `array`       | An array that indicates where the extension should run in remote configurations. Values are `ui` (run locally), `workspace` (run on remote machine) or both, with the order setting the preference. For example: `[ui, workspace]` indicates the extension can run in either location but prefers to run on the local machine. See [here][LN511] for more details.
| `scripts`                   |   | `object`      | Exactly the same as [npm's `scripts`][LK441] but with extra VS Code specific fields such as [vscode:prepublish][LN512] or [vscode:uninstall][LN513].
| `icon`                      |   | `string`      | The path to the icon of at least 128x128 pixels (256x256 for Retina screens).
| `pricing`                   |   | `string`      | The pricing information for the extension. Allowed values: `Free`, `Trial`. Default: `Free`. See [here][LN514] for more details.
| `capabilities`              |   | `object`      | An object describing the extension's capabilities in limited workspaces: [`untrustedWorkspaces`][LN515], [`virtualWorkspaces`][LN516].

Also check [npm's `package.json` reference][LK442].

## Example

Here is a complete `package.json`

```json
{
  "name": "wordcount",
  "displayName": "Word Count",
  "version": "0.1.0",
  "publisher": "ms-vscode",
  "description": "Markdown Word Count Example - reports out the number of words in a Markdown file.",
  "author": {
    "name": "sean"
  },
  "categories": ["Other"],
  "icon": "images/icon.png",
  "galleryBanner": {
    "color": "#C80000",
    "theme": "dark"
  },
  "pricing": "Free",
  "activationEvents": ["onLanguage:markdown"],
  "engines": {
    "vscode": "^1.0.0"
  },
  "main": "./out/extension",
  "scripts": {
    "vscode:prepublish": "node ./node_modules/vscode/bin/compile",
    "compile": "node ./node_modules/vscode/bin/compile -watch -p ./"
  },
  "devDependencies": {
    "@types/vscode": "^0.10.x",
    "typescript": "^1.6.2"
  },
  "license": "SEE LICENSE IN LICENSE.txt",
  "bugs": {
    "url": "https://github.com/microsoft/vscode-wordcount/issues",
    "email": "sean@contoso.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/microsoft/vscode-wordcount.git"
  },
  "homepage": "https://github.com/microsoft/vscode-wordcount/blob/main/README.md"
}
```

## Marketplace Presentation Tips

Here are some tips and recommendations to make your extension look great when displayed on the [VS Code Marketplace][LK443].

Always use the latest `vsce` so `npm install -g @vscode/vsce` to make sure you have it.

Have a `README.md` Markdown file in your extension's root folder and we will include the contents in the body of the extension details (on the Marketplace). You can provide relative path image links in the `README.md`.

Here are a few examples:

1. [Word Count][LK444]
2. [MD Tools][LK445]

Provide a good display name and description. This is important for the Marketplace and in product displays. These strings are also used for text search in VS Code and having relevant keywords will help a lot.

```json
    "displayName": "Word Count",
    "description": "Markdown Word Count Example - reports out the number of words in a Markdown file.",
```

An icon and a contrasting banner color look great on the Marketplace page header. The `theme` attribute refers to the font to be used in the banner - `dark` or `light`.

```json
{
  "icon": "images/icon.png",
  "galleryBanner": {
    "color": "#C80000",
    "theme": "dark"
  }
}
```

There are several optional links (`bugs`, `homepage`, `repository`) you can set and these are displayed under the **Resources** section of the Marketplace.

```json
{
  "license": "SEE LICENSE IN LICENSE.txt",
  "homepage": "https://github.com/microsoft/vscode-wordcount/blob/main/README.md",
  "bugs": {
    "url": "https://github.com/microsoft/vscode-wordcount/issues",
    "email": "sean@contoso.com"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/microsoft/vscode-wordcount.git"
  }
}
```

| Marketplace Resources link | package.json attribute |
| -------------------------- | ---------------------- |
| Issues                     | `bugs:url`             |
| Repository                 | `repository:url`       |
| Homepage                   | `homepage`             |
| License                    | `license`              |

Set a `category` for your extension. Extensions in the same `category` are grouped together on the Marketplace which improves filtering and discovery.

> **Note:** Only use the values that make sense for your extension. Allowed values are `[Programming Languages, Snippets, Linters, Themes, Debuggers, Formatters, Keymaps, SCM Providers, Other, Extension Packs, Language Packs, Data Science, Machine Learning, Visualization, Notebooks, Education, Testing]`. Use `Programming Languages` for general language features like syntax highlighting and code completions. The category `Language Packs` is reserved for display language extensions (for example, localized Bulgarian).

```json
{
  "categories": ["Linters", "Programming Languages", "Other"]
}
```

### Approved Badges

Due to security concerns, we only allow badges from trusted services.

We allow badges from the following URL prefixes:

- api.bintray.com
- api.travis-ci.com
- api.travis-ci.org
- app.fossa.io
- badge.buildkite.com
- badge.fury.io
- badge.waffle.io
- badgen.net
- badges.frapsoft.com
- badges.gitter.im
- badges.greenkeeper.io
- cdn.travis-ci.com
- cdn.travis-ci.org
- ci.appveyor.com
- circleci.com
- cla.opensource.microsoft.com
- codacy.com
- codeclimate.com
- codecov.io
- coveralls.io
- david-dm.org
- deepscan.io
- dev.azure.com
- docs.rs
- flat.badgen.net
- gemnasium.com
- github.com (from Workflows only)
- gitlab.com
- godoc.org
- goreportcard.com
- img.shields.io
- isitmaintained.com
- marketplace.visualstudio.com
- nodesecurity.io
- opencollective.com
- snyk.io
- travis-ci.com
- travis-ci.org
- visualstudio.com
- vsmarketplacebadges.dev
- www.versioneye.com

Note : Replace vsmarketplacebadge.apphb.com badge with vsmarketplacebadges.dev badge.

If you have other badges you would like to use, please open a GitHub [issue][LK445] and we're happy to take a look.

## Combining Extension Contributions

The `yo code` generator lets you easily package TextMate themes, colorizers and snippets and create new extensions. When the generator is run, it creates a complete standalone extension package for each option. However, it is often more convenient to have a single extension which combines multiple contributions. For example, if you are adding support for a new language, you'd like to provide users with both the language definition with colorization and also snippets and perhaps even debugging support.

To combine extension contributions, edit an existing extension manifest `package.json` and add the new contributions and associated files.

Below is an extension manifest which includes a LaTex language definition (language identifier and file extensions), colorization (`grammars`), and snippets.

```json
{
  "name": "language-latex",
  "description": "LaTex Language Support",
  "version": "0.0.1",
  "publisher": "someone",
  "engines": {
    "vscode": "0.10.x"
  },
  "categories": ["Programming Languages", "Snippets"],
  "contributes": {
    "languages": [
      {
        "id": "latex",
        "aliases": ["LaTeX", "latex"],
        "extensions": [".tex"]
      }
    ],
    "grammars": [
      {
        "language": "latex",
        "scopeName": "text.tex.latex",
        "path": "./syntaxes/latex.tmLanguage.json"
      }
    ],
    "snippets": [
      {
        "language": "latex",
        "path": "./snippets/snippets.json"
      }
    ]
  }
}
```

Notice that the extension manifest `categories` attribute now includes both `Programming Languages` and `Snippets` for easy discovery and filtering on the Marketplace.

> **Tip:** Make sure your merged contributions are using the same identifiers. In the example above, all three contributions are using "latex" as the language identifier. This lets VS Code know that the colorizer (`grammars`) and snippets are for the LaTeX language and will be active when editing LaTeX files.

## Extension Packs

You can bundle separate extensions together in **Extension Packs**. An Extension Pack is a set of extensions that will be installed together. This enables easily sharing your favorite extensions with other users or creating a set of extensions for a particular scenario like PHP development to help a PHP developer get started with VS Code quickly.

An Extension Pack bundles other extensions using the `extensionPack` attribute inside the `package.json` file.

For example, here is an Extension Pack for PHP that includes a debugger and a language service:

```json
{
  "extensionPack": [
    "xdebug.php-debug",
    "zobo.php-intellisense"
  ]
}
```

When installing an Extension Pack, VS Code will now also install its extension dependencies.

Extension packs should be categorized in the `Extension Packs` Marketplace category:

```json
{
  "categories": ["Extension Packs"]
}
```

To create an extension pack, you can use the `yo code` Yeoman generator and choose the **New Extension Pack** option. There is an option to seed the pack with the set of extensions you have currently installed in your VS Code instance. In this way, you can easily create an Extension Pack with your favorite extensions, publish it to the Marketplace, and share it with others.

An Extension Pack should not have any functional dependencies with its bundled extensions and the bundled extensions should be manageable independent of the pack. If an extension has a dependency on another extension, that dependency should be declared with the `extensionDependencies` attribute.

## Extension uninstall hook

If your extension has some clean up to be done when it is uninstalled from VS Code, you can register a `node` script to the uninstall hook `vscode:uninstall` under `scripts` section in extension's package.json.

```json
{
  "scripts": {
    "vscode:uninstall": "node ./out/src/lifecycle"
  }
}
```

This script gets executed when the extension is completely uninstalled from VS Code which is when VS Code is restarted (shutdown and start) after the extension is uninstalled.

**Note**: Only Node.js scripts are supported.

## Useful Node modules

There are several Node.js modules available on npmjs to help with writing VS Code extensions. You can include these in your extension's `dependencies` section.

- [vscode-nls][LK446] - Support for externalization and localization.
- [vscode-uri][LK446] - The URI implementation used by VS Code and its extensions.
- [jsonc-parser][LK447] - A scanner and fault tolerant parser to process JSON with or without comments.
- [request-light][LK448] - A light weight Node.js request library with proxy support
- [vscode-extension-telemetry][LK448] - Consistent telemetry reporting for VS Code extensions.
- [vscode-languageclient][LK449] - Easily integrate language servers adhering to the [language server protocol][LK449].

## Next steps

To learn more about VS Code extensibility model, try these topics:

- [Contribution Points][FX002] - VS Code contribution points reference
- [Activation Events][FX001] - VS Code activation events reference
- [Extension Marketplace][LN516] - Read more about the VS Code Extension Marketplace


<a id="_api_references_commands" ></a>

# /api/references/commands
---------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: A010AEDF-EF37-406E-96F5-E129408FFDE1
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Visual Studio Code built-in commands reference.
    ---

## Built-in Commands

This document lists a subset of Visual Studio Code commands that you might use with `vscode.commands.executeCommand` API.

Read the [Commands guide][LN516] for how to use the commands API.

The following is a sample of how to open a new folder in VS Code:

```javascript
let uri = Uri.file('/some/path/to/folder');
let success = await commands.executeCommand('vscode.openFolder', uri);
```

>**Note**: You can review the full set of VS Code commands via the Keyboard Shortcuts editor **File** > **Preferences** > **Keyboard Shortcuts**. The Keyboard Shortcuts editor lists all commands built into VS Code or contributed by extensions, along with their keybindings and visibility when clauses.

## Commands

`vscode.executeDataToNotebook` - Invoke notebook serializer

* _notebookType_ - A notebook type
* _data_ - Bytes to convert to data
* _(returns)_ - Notebook Data

`vscode.executeNotebookToData` - Invoke notebook serializer

* _notebookType_ - A notebook type
* _NotebookData_ - Notebook data to convert to bytes
* _(returns)_ - Bytes

`notebook.selectKernel` - Trigger kernel picker for specified notebook editor widget

* _options_ - Select kernel options
* _(returns)_ - no result

`interactive.open` - Open interactive window and return notebook editor and input URI

* _showOptions_ - Show Options
* _resource_ - Interactive resource Uri
* _controllerId_ - Notebook controller Id
* _title_ - Interactive editor title
* _(returns)_ - Notebook and input URI

`vscode.editorChat.start` - Invoke a new editor chat session

* _Run arguments_ -
* _(returns)_ - no result

`vscode.executeDocumentHighlights` - Execute document highlight provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of DocumentHighlight-instances.

`vscode.executeDocumentSymbolProvider` - Execute document symbol provider.

* _uri_ - Uri of a text document
* _(returns)_ - A promise that resolves to an array of SymbolInformation and DocumentSymbol instances.

`vscode.executeFormatDocumentProvider` - Execute document format provider.

* _uri_ - Uri of a text document
* _options_ - Formatting options
* _(returns)_ - A promise that resolves to an array of TextEdits.

`vscode.executeFormatRangeProvider` - Execute range format provider.

* _uri_ - Uri of a text document
* _range_ - A range in a text document
* _options_ - Formatting options
* _(returns)_ - A promise that resolves to an array of TextEdits.

`vscode.executeFormatOnTypeProvider` - Execute format on type provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _ch_ - Trigger character
* _options_ - Formatting options
* _(returns)_ - A promise that resolves to an array of TextEdits.

`vscode.executeDefinitionProvider` - Execute all definition providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Location or LocationLink instances.

`vscode.executeTypeDefinitionProvider` - Execute all type definition providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Location or LocationLink instances.

`vscode.executeDeclarationProvider` - Execute all declaration providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Location or LocationLink instances.

`vscode.executeImplementationProvider` - Execute all implementation providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Location or LocationLink instances.

`vscode.executeReferenceProvider` - Execute all reference providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Location-instances.

`vscode.executeHoverProvider` - Execute all hover providers.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of Hover-instances.

`vscode.executeSelectionRangeProvider` - Execute selection range provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of ranges.

`vscode.executeWorkspaceSymbolProvider` - Execute all workspace symbol providers.

* _query_ - Search string
* _(returns)_ - A promise that resolves to an array of SymbolInformation-instances.

`vscode.prepareCallHierarchy` - Prepare call hierarchy at a position inside a document

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of CallHierarchyItem-instances

`vscode.provideIncomingCalls` - Compute incoming calls for an item

* _item_ - A call hierarchy item
* _(returns)_ - A promise that resolves to an array of CallHierarchyIncomingCall-instances

`vscode.provideOutgoingCalls` - Compute outgoing calls for an item

* _item_ - A call hierarchy item
* _(returns)_ - A promise that resolves to an array of CallHierarchyOutgoingCall-instances

`vscode.prepareRename` - Execute the prepareRename of rename provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to a range and placeholder text.

`vscode.executeDocumentRenameProvider` - Execute rename provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _newName_ - The new symbol name
* _(returns)_ - A promise that resolves to a WorkspaceEdit.

`vscode.executeLinkProvider` - Execute document link provider.

* _uri_ - Uri of a text document
* _linkResolveCount_ - (optional) Number of links that should be resolved, only when links are unresolved.
* _(returns)_ - A promise that resolves to an array of DocumentLink-instances.

`vscode.provideDocumentSemanticTokensLegend` - Provide semantic tokens legend for a document

* _uri_ - Uri of a text document
* _(returns)_ - A promise that resolves to SemanticTokensLegend.

`vscode.provideDocumentSemanticTokens` - Provide semantic tokens for a document

* _uri_ - Uri of a text document
* _(returns)_ - A promise that resolves to SemanticTokens.

`vscode.provideDocumentRangeSemanticTokensLegend` - Provide semantic tokens legend for a document range

* _uri_ - Uri of a text document
* _range_ - (optional) A range in a text document
* _(returns)_ - A promise that resolves to SemanticTokensLegend.

`vscode.provideDocumentRangeSemanticTokens` - Provide semantic tokens for a document range

* _uri_ - Uri of a text document
* _range_ - A range in a text document
* _(returns)_ - A promise that resolves to SemanticTokens.

`vscode.executeCompletionItemProvider` - Execute completion item provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _triggerCharacter_ - (optional) Trigger completion when the user types the character, like `,` or `(`
* _itemResolveCount_ - (optional) Number of completions to resolve (too large numbers slow down completions)
* _(returns)_ - A promise that resolves to a CompletionList-instance.

`vscode.executeSignatureHelpProvider` - Execute signature help provider.

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _triggerCharacter_ - (optional) Trigger signature help when the user types the character, like `,` or `(`
* _(returns)_ - A promise that resolves to SignatureHelp.

`vscode.executeCodeLensProvider` - Execute code lens provider.

* _uri_ - Uri of a text document
* _itemResolveCount_ - (optional) Number of lenses that should be resolved and returned. Will only return resolved lenses, will impact performance
* _(returns)_ - A promise that resolves to an array of CodeLens-instances.

`vscode.executeCodeActionProvider` - Execute code action provider.

* _uri_ - Uri of a text document
* _rangeOrSelection_ - Range in a text document. Some refactoring provider requires Selection object.
* _kind_ - (optional) Code action kind to return code actions for
* _itemResolveCount_ - (optional) Number of code actions to resolve (too large numbers slow down code actions)
* _(returns)_ - A promise that resolves to an array of Command-instances.

`vscode.executeDocumentColorProvider` - Execute document color provider.

* _uri_ - Uri of a text document
* _(returns)_ - A promise that resolves to an array of ColorInformation objects.

`vscode.executeColorPresentationProvider` - Execute color presentation provider.

* _color_ - The color to show and insert
* _context_ - Context object with uri and range
* _(returns)_ - A promise that resolves to an array of ColorPresentation objects.

`vscode.executeInlayHintProvider` - Execute inlay hints provider

* _uri_ - Uri of a text document
* _range_ - A range in a text document
* _(returns)_ - A promise that resolves to an array of Inlay objects

`vscode.executeFoldingRangeProvider` - Execute folding range provider

* _uri_ - Uri of a text document
* _(returns)_ - A promise that resolves to an array of FoldingRange objects

`vscode.resolveNotebookContentProviders` - Resolve Notebook Content Providers

* _(returns)_ - A promise that resolves to an array of NotebookContentProvider static info objects.

`vscode.executeInlineValueProvider` - Execute inline value provider

* _uri_ - Uri of a text document
* _range_ - A range in a text document
* _context_ - An InlineValueContext
* _(returns)_ - A promise that resolves to an array of InlineValue objects

`vscode.open` - Opens the provided resource in the editor.

* _Uri_ -

`vscode.openWith` - Opens the provided resource with a specific editor.

* _resource_ - Resource to open
* _viewId_ - Custom editor view id or 'default' to use VS Code's default editor
* _columnOrOptions_ - (optional) Either the column in which to open or editor options, see vscode.TextDocumentShowOptions
* _(returns)_ - no result

`vscode.diff` - Opens the provided resources in the diff editor to compare their contents.

* _left_ - Left-hand side resource of the diff editor
* _right_ - Right-hand side resource of the diff editor
* _title_ - Human readable title for the diff editor

`vscode.prepareTypeHierarchy` - Prepare type hierarchy at a position inside a document

* _uri_ - Uri of a text document
* _position_ - A position in a text document
* _(returns)_ - A promise that resolves to an array of TypeHierarchyItem-instances

`vscode.provideSupertypes` - Compute supertypes for an item

* _item_ - A type hierarchy item
* _(returns)_ - A promise that resolves to an array of TypeHierarchyItem-instances

`vscode.provideSubtypes` - Compute subtypes for an item

* _item_ - A type hierarchy item
* _(returns)_ - A promise that resolves to an array of TypeHierarchyItem-instances

`vscode.revealTestInExplorer` - Reveals a test instance in the explorer

* _testItem_ - A VS Code TestItem.
* _(returns)_ - no result

`setContext` - Set a custom context key value that can be used in when clauses.

* _name_ - The context key name
* _value_ - The context key value
* _(returns)_ - no result

`vscode.executeMappedEditsProvider` - Execute Mapped Edits Provider

* _uri_ - Uri of a text document
* _string_array_ - Array of string,
* _MappedEditsContext_ - Mapped Edits Context
* _(returns)_ - A promise that resolves to a workspace edit or null

`cursorMove` - Move cursor to a logical position in the view

* _Cursor move argument object_ - Property-value pairs that can be passed through this argument:
  * 'to': A mandatory logical position value providing where to move the cursor.
    ```
    'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',
    'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'
    'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'
    'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'
    ```
  * 'by': Unit to move. Default is computed based on 'to' value.
    ```
    'line', 'wrappedLine', 'character', 'halfLine'
    ```
  * 'value': Number of units to move. Default is '1'.
  * 'select': If 'true' makes the selection. Default is 'false'.

`editorScroll` - Scroll editor in the given direction

* _Editor scroll argument object_ - Property-value pairs that can be passed through this argument:
  * 'to': A mandatory direction value.
    ```
    'up', 'down'
    ```
  * 'by': Unit to move. Default is computed based on 'to' value.
    ```
    'line', 'wrappedLine', 'page', 'halfPage', 'editor'
    ```
  * 'value': Number of units to move. Default is '1'.
  * 'revealCursor': If 'true' reveals the cursor if it is outside view port.

`revealLine` - Reveal the given line at the given logical position

* _Reveal line argument object_ - Property-value pairs that can be passed through this argument:
  * 'lineNumber': A mandatory line number value.
  * 'at': Logical position at which line has to be revealed.
    ```
    'top', 'center', 'bottom'
    ```

`editor.unfold` - Unfold the content in the editor

* _Unfold editor argument_ - Property-value pairs that can be passed through this argument:
  * 'levels': Number of levels to unfold. If not set, defaults to 1.
  * 'direction': If 'up', unfold given number of levels up otherwise unfolds down.
  * 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the unfold action to. If not
  set, the active selection(s) will be used.

`editor.fold` - Fold the content in the editor

* _Fold editor argument_ - Property-value pairs that can be passed through this argument:
  * 'levels': Number of levels to fold.
  * 'direction': If 'up', folds given number of levels up otherwise folds down.
  * 'selectionLines': Array of the start lines (0-based) of the editor selections to apply the fold action to. If not set, the active selection(s) will be used.
  If no levels or direction is set, folds the region at the locations or if already collapsed, the first uncollapsed parent instead.

`editor.toggleFold` - Folds or unfolds the content in the editor depending on its current state

`editor.actions.findWithArgs` - Open a new In-Editor Find Widget with specific options.

* searchString - String to prefill the find input
* replaceString - String to prefill the replace input
* isRegex - enable regex
* preserveCase - try to keep the same case when replacing
* findInSelection - restrict the find location to the current selection
* matchWholeWord
* isCaseSensitive

`editor.action.goToLocations` - Go to locations from a position in a file

* _uri_ - The text document in which to start
* _position_ - The position at which to start
* _locations_ - An array of locations.
* _multiple_ - Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto
* _noResultsMessage_ - Human readable message that shows when locations is empty.

`editor.action.peekLocations` - Peek locations from a position in a file

* _uri_ - The text document in which to start
* _position_ - The position at which to start
* _locations_ - An array of locations.
* _multiple_ - Define what to do when having multiple results, either `peek`, `gotoAndPeek`, or `goto

`workbench.action.quickOpen` - Quick access

* _prefix_ -

`notebook.cell.toggleOutputs` - Toggle Outputs

* _options_ - The cell range options

`notebook.fold` - Fold Cell

* _index_ - The cell index

`notebook.unfold` - Unfold Cell

* _index_ - The cell index

`notebook.selectKernel` - Notebook Kernel Args

* _kernelInfo_ - The kernel info

`notebook.cell.changeLanguage` - Change Cell Language

* _range_ - The cell range
* _language_ - The target cell language

`notebook.execute` - Run All

* _uri_ - The document uri

`notebook.cell.execute` - Execute Cell

* _options_ - The cell range options

`notebook.cell.executeAndFocusContainer` - Execute Cell and Focus Container

* _options_ - The cell range options

`notebook.cell.cancelExecution` - Stop Cell Execution

* _options_ - The cell range options

`workbench.action.findInFiles` - Open a workspace search

* _A set of options for the search_ -

`_interactive.open` - Open Interactive Window

* _showOptions_ - Show Options
* _resource_ - Interactive resource Uri
* _controllerId_ - Notebook controller Id
* _title_ - Notebook editor title

`interactive.execute` - Execute the Contents of the Input Box

* _resource_ - Interactive resource Uri

`search.action.openNewEditor` - Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.

* _Open new Search Editor args_ -

`search.action.openEditor` - Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.

* _Open new Search Editor args_ -

`search.action.openNewEditorToSide` - Open a new search editor. Arguments passed can include variables like ${relativeFileDirname}.

* _Open new Search Editor args_ -

`vscode.openFolder` - Open a folder or workspace in the current window or new window depending on the newWindow argument. Note that opening in the same window will shutdown the current extension host process and start a new one on the given folder/workspace unless the newWindow parameter is set to true.

* _uri_ - (optional) Uri of the folder or workspace file to open. If not provided, a native dialog will ask the user for the folder
* _options_ - (optional) Options. Object with the following properties: `forceNewWindow`: Whether to open the folder/workspace in a new window or the same. Defaults to opening in the same window. `forceReuseWindow`: Whether to force opening the folder/workspace in the same window.  Defaults to false. `noRecentEntry`: Whether the opened URI will appear in the 'Open Recent' list. Defaults to false. Note, for backward compatibility, options can also be of type boolean, representing the `forceNewWindow` setting.

`vscode.newWindow` - Opens an new window depending on the newWindow argument.

* _options_ - (optional) Options. Object with the following properties: `reuseWindow`: Whether to open a new window or the same. Defaults to opening in a new window.

`vscode.removeFromRecentlyOpened` - Removes an entry with the given path from the recently opened list.

* _path_ - URI or URI string to remove from recently opened.

`moveActiveEditor` - Move the active editor by tabs or groups

* _Active editor move argument_ - Argument Properties:
  * 'to': String value providing where to move.
  * 'by': String value providing the unit for move (by tab or by group).
  * 'value': Number value providing how many positions or an absolute position to move.

`copyActiveEditor` - Copy the active editor by groups

* _Active editor copy argument_ - Argument Properties:
  * 'to': String value providing where to copy.
  * 'value': Number value providing how many positions or an absolute position to copy.

`vscode.getEditorLayout` - Get Editor Layout

* _(returns)_ - An editor layout object, in the same format as vscode.setEditorLayout

`workbench.action.files.newUntitledFile` - New Untitled Text File

* _New Untitled Text File arguments_ - The editor view type or language ID if known

`workbench.extensions.installExtension` - Install the given extension

* _extensionIdOrVSIXUri_ - Extension id or VSIX resource uri
* _options_ - (optional) Options for installing the extension. Object with the following properties: `installOnlyNewlyAddedFromExtensionPackVSIX`: When enabled, VS Code installs only newly added extensions from the extension pack VSIX. This option is considered only when installing VSIX.

`workbench.extensions.uninstallExtension` - Uninstall the given extension

* _Id of the extension to uninstall_ -

`workbench.extensions.search` - Search for a specific extension

* _Query to use in search_ -

`workbench.action.tasks.runTask` - Run Task

* _args_ - Filters the tasks shown in the Quick Pick

`workbench.action.openIssueReporter` - Open the issue reporter and optionally prefill part of the form.

* _options_ - Data to use to prefill the issue reporter with.

`vscode.openIssueReporter` - Open the issue reporter and optionally prefill part of the form.

* _options_ - Data to use to prefill the issue reporter with.

`workbench.action.openLogFile` - workbench.action.openLogFile

* _logFile_ -

`workbench.action.openWalkthrough` - Open the walkthrough.

* _walkthroughID_ - ID of the walkthrough to open.
* _toSide_ - Opens the walkthrough in a new editor group to the side.

## Simple commands

Simple commands that do not require parameters can be found in the Keyboard Shortcuts list in the default `keybindings.json` file. The unbound commands are listed in a comment block at the bottom of the file.

To review the default `keybindings.json`, run **Preferences: Open Default Keyboard Shortcuts (JSON)** from the Command Palette (`kb(workbench.action.showCommands)`).


<a id="_api_references_when-clause-contexts" ></a>

# /api/references/when-clause-contexts
---------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 38af73fd-ca95-48e3-9965-81f4cfe29996
    DateApproved: 05/02/2024

    MetaDescription: Visual Studio Code when clause context reference.
    ---

## when clause contexts

Visual Studio Code sets various context keys and specific values depending on what elements are visible and active in the VS Code UI. These contexts can be used to selectively enable or disable extension commands and UI elements, such as menus and views.

For example, VS Code uses when clauses to enable or disable command keybindings, which you can see in the Default Keybindings JSON (**Preferences: Open Default Keyboard Shortcuts (JSON)**):

```json
{ "key": "f5",  "command": "workbench.action.debug.start",
                   "when": "debuggersAvailable && !inDebugMode" },
```

Above, the built-in **Start Debugging** command has the keyboard shortcut `kb(workbench.action.debug.start)`, which is only enabled when there is an appropriate debugger available (context key `debuggersAvailable` is true) and the editor isn't in debug mode (context key `inDebugMode` is false).

## Conditional operators

A when clause can consist of a context key (for example, `inDebugMode`) or can use various operators to express more nuanced editor state.

### Logical operators

Logical operators allow combining simple context keys or when-clause expressions that include other logical, equality, comparison, match, `in`/`not in` operators or parenthesized expressions.

Operator | Symbol | Example
-------- | ------ | -----
Not | `!` | `"!editorReadonly"` or <code>"!(editorReadonly \|\| inDebugMode)"</code>
And | `&&` | `"textInputFocus && !editorReadonly"`
Or | <code>\|\|</code> | `"isLinux`<code> \|\| </code>`isWindows"`

Note on logical operator precedence: the above table lists operators in order of highest to lowest precedence. Examples:

Written as                             | Interpreted as
---------------------------------------|-----------------------------------------
`!foo && bar`                          | `(!foo) && bar`
<code>!foo \|\| bar </code>            | `(!foo) \|\| bar`
<code>foo \|\| bar && baz </code>      | <code>foo \|\| (bar && baz)</code>
<code>!foo && bar \|\| baz </code>     | <code>(!foo && bar) \|\| baz</code>
<code>!(foo \|\| bar) && baz </code>   | <code>(remains same) !(foo \|\| bar) && baz</code>

### Equality operators

You can check for equality of a context key's value against a specified value. Note that the right-hand side is a value and not interpreted as a context key, meaning it is not looked up in the context.

Operator   | Symbol | Example
--------   | ------ | -----
Equality   | `==`   | `"editorLangId == typescript"` or `"editorLangId == 'typescript'"`
Inequality | `!=`   | `"resourceExtname != .js"` or `"resourceExtname != '.js'"`

Notes:

* If the value on the right-hand side is a string containing whitespace, it must be wrapped in single-quotes - `"resourceFilename == 'My New File.md'"`.
* `===` has the same behavior as `==`, and `!==` has the same behavior as `!=`

### Comparison operators

You can compare a context key's value against a number. Note that left- and right-hand side of the operator must be separated by whitespace - `foo < 1`, but not `foo<1`.

Operator | Symbols | Example
-------- | ------ | -----
Greater than | `>`, `>=` | `"gitOpenRepositoryCount >= 1"` but not `"gitOpenRepositoryCount>=1"`
Less than | `<`, `<=` | `"workspaceFolderCount < 2"` but not `"workspaceFolderCount<2"`

### Match operator

(previous name: key-value pair match operator)

Operator | Symbol | Example
-------- | ------ | -----
Matches | `=~` | `"resourceScheme =~ /^untitled$\|^file$/"`

There is a match operator (`=~`) for when clauses. The expression `key =~ regularExpressionLiteral` treats the right-hand side as a regular expression literal to match against the left-hand side. For example, to contribute context menu items for all Docker files, one could use:

```json
   "when": "resourceFilename =~ /docker/"
```

Notes:

* The right-hand side of the `=~` operator follows the same rules as regular expression literals ([reference][LK450]) in JavaScript, except characters need to follow escaping rules both of JSON strings and regular expressions. For example, a regular expression literal to match a substring `file://` would be `/file:\/\//` in JavaScript but `/file:\\/\\//` in a when clause because a backslash needs to be escaped in a JSON string and a slash needs to be escaped in the regular expression pattern.
* There does not exist an operator `!=~`, but you can negate the match expression - `!(foo =~ /baz/)`.

#### Regular expression flags

It is possible to use flags with the regular expression literals. For example, `resourceFilename =~ /json/i` or `myContextKey =~ /baz/si`.

Supported flags: `i`, `s`, `m`, `u`.

Ignored flags: `g`, `y`. <!-- let's be more explicit with unsupported flags -->

### 'in' and 'not in' conditional operators

The `in` operator for when clauses allows for a dynamic lookup of a context key's value within another context key's value. For example, if you wanted to add a context menu command to folders that contain a certain type of file (or something that can't be statically known), you can now use the `in` operator to achieve it. You can use the `not in` operator to check the opposite condition.

Operator | Symbol | Example
-------- | ------ | -----
In | `in` | `"resourceFilename in supportedFolders"`
Not in | `not in` | `"resourceFilename not in supportedFolders"`

First, determine which folders should support the command, and add the folder names to an array. Then, use the [`setContext` command][LN517] to turn the array into a context key:

```ts
vscode.commands.executeCommand('setContext', 'ext.supportedFolders', [ 'test', 'foo', 'bar' ]);

// or

// Note in this case (using an object), the value doesn't matter, it is based on the existence of the key in the object
// The value must be of a simple type
vscode.commands.executeCommand('setContext', 'ext.supportedFolders', { 'test': true, 'foo': 'anything', 'bar': false });
```

Then, in the `package.json` you could add a menu contribution for the `explorer/context` menu:

```json
// Note, this assumes you have already defined a command called ext.doSpecial
"menus": {
  "explorer/context": [
    {
      "command": "ext.doSpecial",
      "when": "explorerResourceIsFolder && resourceFilename in ext.supportedFolders"
    }
  ]
}
```

In that example, we are taking the value of `resourceFilename` (which is the name of the folder in this case) and checking for its existence in the value of `ext.supportedFolders`. If it exists, the menu will be shown. This powerful operator should allow for richer conditional and dynamic contributions that support `when` clauses, for example menus, views, etc.

<!-- TODO@ulugbekna: it would be good to have a section "Examples of more advanced expressions" that would include some examples using multiple operators -->

## Available context keys

<!-- @ulugbekna: should we just mention this list somewhere at the beginning of the page but move the list itself to the bottom as an appendix ? -->

Below are some of the available context keys, which evaluate to Boolean true/false.

The list here isn't exhaustive and you can find other when clause contexts by searching and filtering in the Keyboard Shortcuts editor (**Preferences: Open Keyboard Shortcuts**) or reviewing the Default Keybindings JSON file (**Preferences: Open Default Keyboard Shortcuts (JSON)**). You can also identify context keys you are interested in using the [Inspect Context Keys utility][LN518].

Context name | True when
------------ | ------------
**Editor contexts** |
`editorFocus` | An editor has focus, either the text or a widget.
`editorTextFocus` | The text in an editor has focus (cursor is blinking).
`textInputFocus` | Any editor has focus (regular editor, debug REPL, etc.).
`inputFocus` | Any text input area has focus (editors or text boxes).
`editorTabMovesFocus` | Whether `kbstyle(Tab)` will move focus out of the editor.
`editorHasSelection` | Text is selected in the editor.
`editorHasMultipleSelections` | Multiple regions of text are selected (multiple cursors).
`editorReadonly` | The editor is read only.
`editorLangId` | True when the editor's associated [language ID][LN518] matches.<br>Example: `"editorLangId == typescript"`.
`isInDiffEditor` | The active editor is a difference editor.
`isInEmbeddedEditor` | True when the focus is inside an embedded editor.
**Operating system contexts** |
`isLinux` | True when the OS is Linux.
`isMac` | True when the OS is macOS.
`isWindows` | True when the OS is Windows.
`isWeb` | True when accessing the editor from the Web.
**List contexts** |
`listFocus` | A list has focus.
`listSupportsMultiselect` | A list supports multi select.
`listHasSelectionOrFocus` | A list has selection or focus.
`listDoubleSelection` | A list has a selection of 2 elements.
`listMultiSelection` | A list has a selection of multiple elements.
**Mode contexts** |
`inSnippetMode` | The editor is in snippet mode.
`inQuickOpen` | The Quick Open dropdown has focus.
**Resource contexts** |
`resourceScheme` | True when the resource Uri scheme matches.<br>Example: `"resourceScheme == file"`
`resourceFilename` | True when the Explorer or editor filename matches.<br>Example: `"resourceFilename == gulpfile.js"`
`resourceExtname` | True when the Explorer or editor filename extension matches.<br>Example: `"resourceExtname == .js"`
`resourceDirname` | True when the Explorer or editor's resource absolute folder path matches.<br>Example: `"resourceDirname == /users/alice/project/src"`
`resourcePath` | True when the Explorer or editor's resource absolute path matches.<br>Example: `"resourcePath == /users/alice/project/gulpfile.js"`
`resourceLangId` | True when the Explorer or editor title [language ID][LN518] matches.<br>Example: `"resourceLangId == markdown"`
`isFileSystemResource` | True when the Explorer or editor file is a file system resource that can be handled from a file system provider.
`resourceSet` | True when an Explorer or editor file is set.
`resource` | The full Uri of the Explorer or editor file.
**Explorer contexts** |
`explorerViewletVisible` | True if Explorer view is visible.
`explorerViewletFocus` | True if Explorer view has keyboard focus.
`filesExplorerFocus` | True if File Explorer section has keyboard focus.
`openEditorsFocus` | True if OPEN EDITORS section has keyboard focus.
`explorerResourceIsFolder` | True if a folder is selected in the Explorer.
**Editor widget contexts** |
`findWidgetVisible` | Editor Find widget is visible.
`suggestWidgetVisible` | Suggestion widget (IntelliSense) is visible.
`suggestWidgetMultipleSuggestions` | Multiple suggestions are displayed.
`renameInputVisible` | Rename input text box is visible.
`referenceSearchVisible` | Peek References peek window is open.
`inReferenceSearchEditor` | The Peek References peek window editor has focus.
`config.editor.stablePeek` | Keep peek editors open (controlled by `editor.stablePeek` setting).
`codeActionMenuVisible` | Code Action menu is visible.
`parameterHintsVisible` | Parameter hints are visible (controlled by `editor.parameterHints.enabled` setting).
`parameterHintsMultipleSignatures` | Multiple parameter hints are displayed.
**Debugger contexts** |
`debuggersAvailable` | An appropriate debugger extension is available.
`inDebugMode` | A debug session is running.
`debugState` | Active debugger state.<br>Possible values are `inactive`, `initializing`, `stopped`, `running`.
`debugType` | True when debug type matches.<br>Example: `"debugType == 'node'"`.
`inDebugRepl` | Focus is in the Debug Console REPL.
**Integrated terminal contexts** |
`terminalFocus` | An integrated terminal has focus.
`terminalIsOpen` | An integrated terminal is opened.
**Timeline view contexts** |
`timelineFollowActiveEditor` | True if the Timeline view is following the active editor.
**Timeline view item contexts** |
`timelineItem` | True when the timeline item's context value matches.<br>Example: `"timelineItem =~ /git:file:commit\\b/"`.
**Extension contexts** |
`extension` | True when the extension's ID matches.<br>Example: `"extension == eamodio.gitlens"`.
`extensionStatus` | True when the extension is installed.<br>Example: `"extensionStatus == installed"`.
`extensionHasConfiguration` | True if the extension has configuration.
**Global UI contexts** |
`notificationFocus` | Notification has keyboard focus.
`notificationCenterVisible` | Notification Center is visible at the bottom right of VS Code.
`notificationToastsVisible` | Notification toast is visible at the bottom right of VS Code.
`searchViewletVisible` | Search view is open.
`sideBarVisible` | Side Bar is displayed.
`sideBarFocus` | Side Bar has focus.
`panelFocus` | Panel has focus.
`inZenMode` | Window is in Zen Mode.
`isCenteredLayout` | Editor is in centered layout mode.
`workbenchState` | Can be `empty`, `folder` (1 folder), or `workspace`.
`workspaceFolderCount` | Count of workspace folders.
`replaceActive` | Search view Replace text box is open.
`view` | For `view/title` and `view/item/context`, the view to display the command in.<br>Example: `"view == myViewsExplorerID"`.
`viewItem` | For `view/item/context`, the `contextValue` from the tree item.<br>Example:  `"viewItem == someContextValue"`.
`webviewId` | For `webview/context`, the webview ID to display the command in.<br>Example: `"webviewId == catCoding"`.
`isFullscreen` | True when window is in fullscreen.
`focusedView` | The identifier of the currently focused view.
`canNavigateBack` | True if it is possible to navigate back.
`canNavigateForward` | True if it is possible to navigate forward.
`canNavigateToLastEditLocation` | True if it is possible to navigate to the last edit location.
**Global Editor UI contexts** |
`textCompareEditorVisible` | At least one diff (compare) editor is visible.
`textCompareEditorActive` | A diff (compare) editor is active.
`editorIsOpen` | True if one editor is open.
`groupEditorsCount` | Number of editors in a group.
`activeEditorGroupEmpty` | True if the active editor group has no editors.
`activeEditorGroupIndex` | A number starting from `1` reflecting the position of an editor group in the editor grid.<br>The group with index `1` will be the first in the top-left corner.
`activeEditorGroupLast` | Will be `true` for the last editor group in the editor grid.
`multipleEditorGroups` | True when multiple editor groups are present.
`activeEditor` | The identifier of the active editor in a group.
`activeEditorIsDirty` | True when the active editor in a group is dirty.
`activeEditorIsNotPreview` | True when the active editor in a group is not in preview mode.
`activeEditorIsPinned` | True when the active editor in a group is pinned.
`inSearchEditor` | True when focus is inside a search editor.
`activeWebviewPanelId` | The id of the currently active [webview panel][LN518].
`activeCustomEditorId` | The id of the currently active [custom editor][LN518].
**Configuration settings contexts** |
`config.editor.minimap.enabled` | True when the setting `editor.minimap.enabled` is `true`.

>**Note**: You can use any user or workspace setting that evaluates to a boolean here with the prefix `"config."`.

## Visible/focused view when clause context

You can have a when clause that checks if a specific [View][LN518] is visible or focused.

Context name | True when
------------ | ------------
`view.${viewId}.visible` | True when specific view is visible.<br>Example: `"view.workbench.explorer.fileView.visible"`
focusedView | True when specific view is focused.<br>Example: `"focusedView == 'workbench.explorer.fileView'"`

View identifiers:

* `workbench.explorer.fileView` - File Explorer
* `workbench.explorer.openEditorsView` - Open Editors
* `outline` - Outline view
* `timeline` - Timeline view
* `workbench.scm` - Source Control
* `workbench.scm.repositories` - Source Control Repositories
* `workbench.debug.variablesView` - Variables
* `workbench.debug.watchExpressionsView` - Watch
* `workbench.debug.callStackView` - Call Stack
* `workbench.debug.loadedScriptsView` - Loaded Scripts
* `workbench.debug.breakPointsView` - Breakpoints
* `workbench.debug.disassemblyView` - Disassembly
* `workbench.views.extensions.installed` - Installed extensions
* `extensions.recommendedList` - Recommended extensions
* `workbench.panel.markers.view` - Problems
* `workbench.panel.output` - Output
* `workbench.panel.repl.view` - Debug Console
* `terminal` - Integrated Terminal
* `workbench.panel.comments` - Comments

## Visible view container when clause context

You can have a when clause that checks if a specific [View Container][LN518] is visible

Context key     | True when
--------------- | ------------
activeViewlet   | True when view container is visible in the sidebar.<br>Example: `"activeViewlet == 'workbench.view.explorer'"`
activePanel     | True when view container is visible in the panel.<br>Example: `"activePanel == 'workbench.panel.output'"`
activeAuxiliary | True when view container is visible in the secondary sidebar.<br>Example: `"activeAuxiliary == 'workbench.view.debug'"`

View container identifiers:

* `workbench.view.explorer` - File Explorer
* `workbench.view.search` - Search
* `workbench.view.scm` - Source Control
* `workbench.view.debug` - Run
* `workbench.view.extensions` - Extensions
* `workbench.panel.markers` - Problems
* `workbench.panel.output` - Output
* `workbench.panel.repl` - Debug Console
* `terminal` - Integrated Terminal
* `workbench.panel.comments` - Comments

If you want a when clause that is enabled only when a specific view container has focus, use `sideBarFocus` or `panelFocus` or `auxiliaryBarFocus` in combination with `activeViewlet` or `activePanel` or `activeAuxiliary` context keys.

For example, the when clause below is true only when the File Explorer has focus:

```json
"sideBarFocus && activeViewlet == 'workbench.view.explorer'"
```

## Check a setting in a when clause

In a when clause, you can reference a configuration (setting) value by prefixing it with `config.`, for example `config.editor.tabCompletion` or `config.breadcrumbs.enabled`.

## Add a custom when clause context

If you are authoring your own VS Code extension and need to enable/disable commands, menus, or views using a when clause context and none of the existing keys suit your needs, you can add your own context key with the `setContext` command.

The first example below sets the key `myExtension.showMyCommand` to true, which you can use in enablement of commands or with the `when` property. The second example stores a value that you could use with a when clause to check if the number of cool open things is greater than 2.

```js
vscode.commands.executeCommand('setContext', 'myExtension.showMyCommand', true);

vscode.commands.executeCommand('setContext', 'myExtension.numberOfCoolOpenThings', 4);
```

## Inspect Context Keys utility

If you would like to see all currently active context keys at runtime, you can use the **Developer: Inspect Context Keys** command from the Command Palette (`kb(workbench.action.showCommands)`). **Inspect Context Keys** will display context keys and their values in the VS Code Developer Tools **Console** tab (**Help** > **Toggle Developer Tools**).

When you run **Developer: Inspect Context Keys**, your cursor will highlight elements in the VS Code UI and when you click on an element, the current context keys and their states will be output as an object to the Console.

![Inspect Context Keys output][LN519]

The list of active context keys is extensive and may contain [custom context keys][LN519] from extensions you have installed.

>**Note**: Some context keys are for VS Code internal use and may change in the future.


<a id="_api_references_theme-color" ></a>

# /api/references/theme-color
------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 8e03996d-35e9-4e9f-a60e-50d0962231b8
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Theme Color reference that lists all themable colors in Visual Studio Code.
    ---

## Theme Color

You can customize your active Visual Studio Code [color theme][LN520] with the `workbench.colorCustomizations` user [setting][LN520].

```json
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#00AA00"
  }
}
```

**Note**: If you want to use an existing color theme, see [Color Themes][LN520] where you'll learn how to set the active color theme through the **Preferences: Color Theme** dropdown (`kb(workbench.action.selectTheme)`).

Theme colors are available as CSS variables in [webviews][LN520], and [an extension][LK450] is available which provides IntelliSense for them.

## Color formats

Color values can be defined in the RGB color model with an alpha channel for transparency. As format, the following hexadecimal notations are supported: `#RGB`, `#RGBA`, `#RRGGBB` and `#RRGGBBAA`. R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, a-f or A-F). The three-digit notation (`#RGB`) is a shorter version of the six-digit form (`#RRGGBB`) and the four-digit RGB notation (`#RGBA`) is a shorter version of the eight-digit form (`#RRGGBBAA`). For example `#e35f` is the same color as `#ee3355ff`.

If no alpha value is defined, it defaults to `ff` (opaque, no transparency). If alpha is set to `00`, the color is fully transparent.

Some colors should not be opaque in order to not cover other annotations. Check the color descriptions to see to which colors this applies.

## Contrast colors

The contrast colors are typically only set for high contrast themes. If set, they add an additional border around items across the UI to increase the contrast.

- `contrastActiveBorder`: An extra border around active elements to separate them from others for greater contrast.
- `contrastBorder`: An extra border around elements to separate them from others for greater contrast.

## Base colors

- `focusBorder`: Overall border color for focused elements. This color is only used if not overridden by a component.
- `foreground`: Overall foreground color. This color is only used if not overridden by a component.
- `disabledForeground`: Overall foreground for disabled elements. This color is only used if not overridden by a component.
- `widget.border`: Border color of widgets such as Find/Replace inside the editor.
- `widget.shadow`: Shadow color of widgets such as Find/Replace inside the editor.
- `selection.background`: Background color of text selections in the workbench (for input fields or text areas, does not apply to selections within the editor and the terminal).
- `descriptionForeground`: Foreground color for description text providing additional information, for example for a label.
- `errorForeground`: Overall foreground color for error messages (this color is only used if not overridden by a component).
- `icon.foreground`: The default color for icons in the workbench.
- `sash.hoverBorder`: The hover border color for draggable sashes.

## Window border

The theme colors for VS Code window border.

- `window.activeBorder`: Border color for the active (focused) window.
- `window.inactiveBorder`: Border color for the inactive (unfocused) windows.

The window border colors are only supported on macOS and Linux (not Windows) and only when the custom title bar is enabled (`"window.titleBarStyle": "custom"`).

## Text colors

Colors inside a text document, such as the welcome page.

- `textBlockQuote.background`: Background color for block quotes in text.
- `textBlockQuote.border`: Border color for block quotes in text.
- `textCodeBlock.background`: Background color for code blocks in text.
- `textLink.activeForeground`: Foreground color for links in text when clicked on and on mouse hover.
- `textLink.foreground`: Foreground color for links in text.
- `textPreformat.foreground`: Foreground color for preformatted text segments.
- `textPreformat.background`: Background color for preformatted text segments.
- `textSeparator.foreground`: Color for text separators.

## Action colors

A set of colors to control the interactions with actions across the workbench.

- `toolbar.hoverBackground`: Toolbar background when hovering over actions using the mouse
- `toolbar.hoverOutline`: Toolbar outline when hovering over actions using the mouse
- `toolbar.activeBackground`: Toolbar background when holding the mouse over actions

## Button control

A set of colors for button widgets such as **Open Folder** button in the Explorer of a new window.

![button control][LN521]

- `button.background`: Button background color.
- `button.foreground`: Button foreground color.
- `button.border`: Button border color.
- `button.separator`: Button separator color.
- `button.hoverBackground`: Button background color when hovering.
- `button.secondaryForeground`: Secondary button foreground color.
- `button.secondaryBackground`: Secondary button background color.
- `button.secondaryHoverBackground`: Secondary button background color when hovering.
- `checkbox.background`: Background color of checkbox widget.
- `checkbox.foreground`: Foreground color of checkbox widget.
- `checkbox.border`: Border color of checkbox widget.
- `checkbox.selectBackground`: Background color of checkbox widget when the element it's in is selected.
- `checkbox.selectBorder`: Border color of checkbox widget when the element it's in is selected.

## Dropdown control

A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the
Dropdown control is not used on macOS currently.

![dropdown control][LN522]

- `dropdown.background`: Dropdown background.
- `dropdown.listBackground`: Dropdown list background.
- `dropdown.border`: Dropdown border.
- `dropdown.foreground`: Dropdown foreground.

## Input control

Colors for input controls such as in the Search view or the Find/Replace dialog.

![input control][LN523]

- `input.background`: Input box background.
- `input.border`: Input box border.
- `input.foreground`: Input box foreground.
- `input.placeholderForeground`: Input box foreground color for placeholder text.
- `inputOption.activeBackground`: Background color of activated options in input fields.
- `inputOption.activeBorder`: Border color of activated options in input fields.
- `inputOption.activeForeground`: Foreground color of activated options in input fields.
- `inputOption.hoverBackground`: Background color of activated options in input fields.
- `inputValidation.errorBackground`: Input validation background color for error severity.
- `inputValidation.errorForeground`: Input validation foreground color for error severity.
- `inputValidation.errorBorder`: Input validation border color for error severity.
- `inputValidation.infoBackground`: Input validation background color for information severity.
- `inputValidation.infoForeground`: Input validation foreground color for information severity.
- `inputValidation.infoBorder`: Input validation border color for information severity.
- `inputValidation.warningBackground`: Input validation background color for information warning.
- `inputValidation.warningForeground`: Input validation foreground color for warning severity.
- `inputValidation.warningBorder`: Input validation border color for warning severity.

## Scrollbar control

- `scrollbar.shadow`: Scrollbar slider shadow to indicate that the view is scrolled.
- `scrollbarSlider.activeBackground`: Scrollbar slider background color when clicked on.
- `scrollbarSlider.background`: Scrollbar slider background color.
- `scrollbarSlider.hoverBackground`: Scrollbar slider background color when hovering.

## Badge

Badges are small information labels, for example, search results count.

- `badge.foreground`: Badge foreground color.
- `badge.background`: Badge background color.

## Progress bar

- `progressBar.background`: Background color of the progress bar shown for long running operations.

## Lists and trees

Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.

- `list.activeSelectionBackground`: List/Tree background color for the selected item when the list/tree is active.
- `list.activeSelectionForeground`: List/Tree foreground color for the selected item when the list/tree is active.
- `list.activeSelectionIconForeground`: List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.dropBackground`: List/Tree drag and drop background when moving items around using the mouse.
- `list.focusBackground`: List/Tree background color for the focused item when the list/tree is active.
- `list.focusForeground`: List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.focusHighlightForeground`: List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
- `list.focusOutline`: List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.
- `list.focusAndSelectionOutline`: List/Tree outline color for the focused item when the list/tree is active and selected. An active list/tree has keyboard focus, an inactive does not.
- `list.highlightForeground`: List/Tree foreground color of the match highlights when searching inside the list/tree.
- `list.hoverBackground`: List/Tree background when hovering over items using the mouse.
- `list.hoverForeground`: List/Tree foreground when hovering over items using the mouse.
- `list.inactiveSelectionBackground`: List/Tree background color for the selected item when the list/tree is inactive.
- `list.inactiveSelectionForeground`: List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.inactiveSelectionIconForeground`: List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.inactiveFocusBackground`: List background color for the focused item when the list is inactive. An active list has keyboard focus, an inactive does not. Currently only supported in lists.
- `list.inactiveFocusOutline`: List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.
- `list.invalidItemForeground`: List/Tree foreground color for invalid items, for example an unresolved root in explorer.
- `list.errorForeground`: Foreground color of list items containing errors.
- `list.warningForeground`: Foreground color of list items containing warnings.
- `listFilterWidget.background`: List/Tree Filter background color of typed text when searching inside the list/tree.
- `listFilterWidget.outline`: List/Tree Filter Widget's outline color of typed text when searching inside the list/tree.
- `listFilterWidget.noMatchesOutline`: List/Tree Filter Widget's outline color when no match is found of typed text when searching inside the list/tree.
- `listFilterWidget.shadow`: Shadow color of the type filter widget in lists and tree.
- `list.filterMatchBackground`: Background color of the filtered matches in lists and trees.
- `list.filterMatchBorder`: Border color of the filtered matches in lists and trees.
- `list.deemphasizedForeground`: List/Tree foreground color for items that are deemphasized.
- `list.dropBetweenBackground`: List/Tree drag and drop border color when moving items between items when using the mouse.
- `tree.indentGuidesStroke`: Tree Widget's stroke color for indent guides.
- `tree.inactiveIndentGuidesStroke`: Tree stroke color for the indentation guides that are not active.
- `tree.tableColumnsBorder`: Tree stroke color for the indentation guides.
- `tree.tableOddRowsBackground`: Background color for odd table rows.

## Activity Bar

The Activity Bar is usually displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.

- `activityBar.background`: Activity Bar background color.
- `activityBar.dropBorder`: Drag and drop feedback color for the activity bar items. The activity bar is showing on the far left or right and allows to switch between views of the side bar.
- `activityBar.foreground`: Activity Bar foreground color (for example used for the icons).
- `activityBar.inactiveForeground`: Activity Bar item foreground color when it is inactive.
- `activityBar.border`: Activity Bar border color with the Side Bar.
- `activityBarBadge.background`: Activity notification badge background color.
- `activityBarBadge.foreground`: Activity notification badge foreground color.
- `activityBar.activeBorder`: Activity Bar active indicator border color.
- `activityBar.activeBackground`: Activity Bar optional background color for the active element.
- `activityBar.activeFocusBorder`: Activity bar focus border color for the active item.
- `activityBarTop.foreground`: Active foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
- `activityBarTop.activeBorder`: Focus border color for the active item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
- `activityBarTop.inactiveForeground`: Inactive foreground color of the item in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
- `activityBarTop.dropBorder`: Drag and drop feedback color for the items in the Activity bar when it is on top. The activity allows to switch between views of the side bar.
- `activityBarTop.background`: Background color of the activity bar when set to top / bottom.
- `activityBarTop.activeBackground`: Background color for the active item in the Activity bar when it is on top / bottom. The activity allows to switch between views of the side bar.

## Profiles

- `profileBadge.background`: Profile badge background color. The profile badge shows on top of the settings gear icon in the activity bar.
- `profileBadge.foreground`: Profile badge foreground color. The profile badge shows on top of the settings gear icon in the activity bar.

## Side Bar

The Side Bar contains views like the Explorer and Search.

- `sideBar.background`: Side Bar background color.
- `sideBar.foreground`: Side Bar foreground color. The Side Bar is the container for views like Explorer and Search.
- `sideBar.border`: Side Bar border color on the side separating the editor.
- `sideBar.dropBackground`: Drag and drop feedback color for the side bar sections. The color should have transparency so that the side bar sections can still shine through.

- `sideBarTitle.foreground`: Side Bar title foreground color.
- `sideBarSectionHeader.background`: Side Bar section header background color.
- `sideBarSectionHeader.foreground`: Side Bar section header foreground color.
- `sideBarSectionHeader.border`: Side bar section header border color.
- `sideBarActivityBarTop.border`: Border color between the activity bar at the top/bottom and the views.
- `sideBarTitle.background`: Side bar title background color. The side bar is the container for views like explorer and search.
- `sideBarStickyScroll.background`: Background color of sticky scroll in the side bar.
- `sideBarStickyScroll.border`: Border color of sticky scroll in the side bar.
- `sideBarStickyScroll.shadow`: Shadow color of sticky scroll in the side bar.


## Minimap

The Minimap shows a minified version of the current file.

- `minimap.findMatchHighlight`: Highlight color for matches from search within files.
- `minimap.selectionHighlight`: Highlight color for the editor selection.
- `minimap.errorHighlight`: Highlight color for errors within the editor.
- `minimap.warningHighlight`: Highlight color for warnings within the editor.
- `minimap.background`: Minimap background color.
- `minimap.selectionOccurrenceHighlight`: Minimap marker color for repeating editor selections.
- `minimap.foregroundOpacity`: Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.
- `minimap.infoHighlight`: Minimap marker color for infos.

- `minimapSlider.background`: Minimap slider background color.
- `minimapSlider.hoverBackground`: Minimap slider background color when hovering.
- `minimapSlider.activeBackground`: Minimap slider background color when clicked on.

- `minimapGutter.addedBackground`: Minimap gutter color for added content.
- `minimapGutter.modifiedBackground`: Minimap gutter color for modified content.
- `minimapGutter.deletedBackground`: Minimap gutter color for deleted content.

## Editor Groups & Tabs

Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.

- `editorGroup.border`: Color to separate multiple editor groups from each other.

  ![editorGroup.border][LN524]

- `editorGroup.dropBackground`: Background color when dragging editors around.

  ![editorGroup.dropBackground][LN525]

- `editorGroupHeader.noTabsBackground`: Background color of the editor group title header when using single Tab (set `"workbench.editor.showTabs": "single"`).

  ![editorGroupHeader.noTabsBackground][LN526]

- `editorGroupHeader.tabsBackground`: Background color of the Tabs container.

  ![editorGroupHeader.tabsBackground][LN527]

- `editorGroupHeader.tabsBorder`: Border color below the editor tabs control when tabs are enabled.

  ![editorGroupHeader.tabsBorder][LN528]

- `editorGroupHeader.border`: Border color between editor group header and editor (below breadcrumbs if enabled).
- `editorGroup.emptyBackground`: Background color of an empty editor group.
- `editorGroup.focusedEmptyBorder`: Border color of an empty editor group that is focused.
- `editorGroup.dropIntoPromptForeground`: Foreground color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
- `editorGroup.dropIntoPromptBackground`: Background color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.
- `editorGroup.dropIntoPromptBorder`: Border color of text shown over editors when dragging files. This text informs the user that they can hold shift to drop into the editor.

- `tab.activeBackground`: Active Tab background color in an active group.
- `tab.unfocusedActiveBackground`: Active Tab background color in an inactive editor group.
- `tab.activeForeground`: Active Tab foreground color in an active group.
- `tab.border`: Border to separate Tabs from each other.
- `tab.activeBorder`: Bottom border for the active tab.
- `tab.dragAndDropBorder`: Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
- `tab.unfocusedActiveBorder`: Bottom border for the active tab in an inactive editor group.
- `tab.activeBorderTop`: Top border for the active tab.
- `tab.unfocusedActiveBorderTop`: Top border for the active tab in an inactive editor group
- `tab.dragAndDropBorder`: Border between tabs to indicate that a tab can be inserted between two tabs. Tabs are the containers for editors in the editor area. Multiple tabs can be opened in one editor group. There can be multiple editor groups.
- `tab.lastPinnedBorder`: Border on the right of the last pinned editor to separate from unpinned editors.
- `tab.inactiveBackground`: Inactive Tab background color.
- `tab.unfocusedInactiveBackground`: Inactive Tab background color in an unfocused group
- `tab.inactiveForeground`: Inactive Tab foreground color in an active group.
- `tab.unfocusedActiveForeground`: Active tab foreground color in an inactive editor group.
- `tab.unfocusedInactiveForeground`: Inactive tab foreground color in an inactive editor group.
- `tab.hoverBackground`: Tab background color when hovering
- `tab.unfocusedHoverBackground`: Tab background color in an unfocused group when hovering
- `tab.hoverForeground`: Tab foreground color when hovering
- `tab.unfocusedHoverForeground`: Tab foreground color in an unfocused group when hovering
- `tab.hoverBorder`: Border to highlight tabs when hovering
- `tab.unfocusedHoverBorder`: Border to highlight tabs in an unfocused group when hovering
- `tab.activeModifiedBorder`: Border on the top of modified (dirty) active tabs in an active group.
- `tab.inactiveModifiedBorder`: Border on the top of modified (dirty) inactive tabs in an active group.
- `tab.unfocusedActiveModifiedBorder`: Border on the top of modified (dirty) active tabs in an unfocused group.
- `tab.unfocusedInactiveModifiedBorder`: Border on the top of modified (dirty) inactive tabs in an unfocused group.
- `editorPane.background`: Background color of the editor pane visible on the left and right side of the centered editor layout.
- `sideBySideEditor.horizontalBorder`: Color to separate two editors from each other when shown side by side in an editor group from top to bottom.
- `sideBySideEditor.verticalBorder`: Color to separate two editors from each other when shown side by side in an editor group from left to right.

## Editor colors

The most prominent editor colors are the token colors used for syntax highlighting and are based on the language grammar installed. These colors are defined by the Color Theme but can also be customized with the `editor.tokenColorCustomizations` setting. See [Customizing a Color Theme][LN529] for details on updating a Color Theme and the available token types.

All other editor colors are listed here:

- `editor.background`: Editor background color.
- `editor.foreground`: Editor default foreground color.
- `editorLineNumber.foreground`: Color of editor line numbers.
- `editorLineNumber.activeForeground`: Color of the active editor line number.
- `editorLineNumber.dimmedForeground`: Color of the final editor line when editor.renderFinalNewline is set to dimmed.
- `editorCursor.background`: The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.
- `editorCursor.foreground`: Color of the editor cursor.
- `editorMultiCursor.primary.foreground`: Color of the primary editor cursor when multiple cursors are present.
- `editorMultiCursor.primary.background`: The background color of the primary editor cursor when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.
- `editorMultiCursor.secondary.foreground`: Color of secondary editor cursors when multiple cursors are present.
- `editorMultiCursor.secondary.background`: The background color of secondary editor cursors when multiple cursors are present. Allows customizing the color of a character overlapped by a block cursor.

Selection colors are visible when selecting one or more characters. In addition to the selection also all regions with the same content are highlighted.

![selection highlight][LN530]

- `editor.selectionBackground`: Color of the editor selection.
- `editor.selectionForeground`: Color of the selected text for high contrast.
- `editor.inactiveSelectionBackground`: Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations.
- `editor.selectionHighlightBackground`: Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations.
- `editor.selectionHighlightBorder`: Border color for regions with the same content as the selection.

Word highlight colors are visible when the cursor is inside a symbol or a word. Depending on the language support available for the file type, all matching references and declarations are highlighted and read and write accesses get different colors. If document symbol language support is not available, this falls back to word highlighting.

![occurrences][LN531]

- `editor.wordHighlightBackground`: Background color of a symbol during read-access, for example when reading a variable. The color must not be opaque so as not to hide underlying decorations.
- `editor.wordHighlightBorder`: Border color of a symbol during read-access, for example when reading a variable.
- `editor.wordHighlightStrongBackground`: Background color of a symbol during write-access, for example when writing to a variable. The color must not be opaque so as not to hide underlying decorations.
- `editor.wordHighlightStrongBorder`: Border color of a symbol during write-access, for example when writing to a variable.
- `editor.wordHighlightTextBackground`: Background color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
- `editor.wordHighlightTextBorder`: Border color of a textual occurrence for a symbol.

Find colors depend on the current find string in the Find/Replace dialog.

![Find matches][LN532]

- `editor.findMatchBackground`: Color of the current search match.
- `editor.findMatchHighlightBackground`: Color of the other search matches. The color must not be opaque so as not to hide underlying decorations.
- `editor.findRangeHighlightBackground`: Color the range limiting the search (Enable 'Find in Selection' in the find widget). The color must not be opaque so as not to hide underlying decorations.
- `editor.findMatchBorder`: Border color of the current search match.
- `editor.findMatchHighlightBorder`: Border color of the other search matches.
- `editor.findRangeHighlightBorder`: Border color the range limiting the search (Enable 'Find in Selection' in the find widget).

Search colors are used in the search viewlet's global search results.

![Search Results][LN533]

- `search.resultsInfoForeground`: Color of the text in the search viewlet's completion message. For example, this color is used in the text that says "`{x} results in {y} files`".

Search Editor colors highlight results in a Search Editor. This can be configured separately from other find matches in order to better differentiate between different classes of match in the same editor.

![Search Editor Matches][LN534]

- `searchEditor.findMatchBackground`: Color of the editor's results.
- `searchEditor.findMatchBorder`: Border color of the editor's results.
- `searchEditor.textInputBorder`: Search editor text input box border.

The hover highlight is shown behind the symbol for which a hover is shown.

![Hover Highlight][LN535]

- `editor.hoverHighlightBackground`: Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations.

The current line is typically shown as either background highlight or a border (not both).

![Line Highlight][LN536]

- `editor.lineHighlightBackground`: Background color for the highlight of line at the cursor position.
- `editor.lineHighlightBorder`: Background color for the border around the line at the cursor position.

The color for the editor watermark

- `editorWatermark.foreground`: Foreground color for the labels in the editor watermark.

The color for unicode highlights

- `editorUnicodeHighlight.border`: Border color used to highlight unicode characters.
- `editorUnicodeHighlight.background`: Background color used to highlight unicode characters.

The link color is visible when clicking on a link.

![Link][LN537]

- `editorLink.activeForeground`: Color of active links.

The range highlight is visible when selecting a search result.

![Range Highlight][LN538]

- `editor.rangeHighlightBackground`: Background color of highlighted ranges, used by Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
- `editor.rangeHighlightBorder`: Background color of the border around highlighted ranges.

The symbol highlight is visible when navigating to a symbol via a command such as **Go to Definition**.

- `editor.symbolHighlightBackground`: Background color of highlighted symbol. The color must not be opaque so as not to hide underlying decorations.
- `editor.symbolHighlightBorder`: Background color of the border around highlighted symbols.

To see the editor white spaces, enable **Toggle Render Whitespace**.

- `editorWhitespace.foreground`: Color of whitespace characters in the editor.

To see the editor indent guides, set `"editor.guides.indentation": true` and `"editor.guides.highlightActiveIndentation": true`.

- `editorIndentGuide.background`: Color of the editor indentation guides.
- `editorIndentGuide.background1`: Color of the editor indentation guides (1).
- `editorIndentGuide.background2`: Color of the editor indentation guides (2).
- `editorIndentGuide.background3`: Color of the editor indentation guides (3).
- `editorIndentGuide.background4`: Color of the editor indentation guides (4).
- `editorIndentGuide.background5`: Color of the editor indentation guides (5).
- `editorIndentGuide.background6`: Color of the editor indentation guides (6).
- `editorIndentGuide.activeBackground`: Color of the active editor indentation guide.
- `editorIndentGuide.activeBackground1`: Color of the active editor indentation guides (1).
- `editorIndentGuide.activeBackground2`: Color of the active editor indentation guides (2).
- `editorIndentGuide.activeBackground3`: Color of the active editor indentation guides (3).
- `editorIndentGuide.activeBackground4`: Color of the active editor indentation guides (4).
- `editorIndentGuide.activeBackground5`: Color of the active editor indentation guides (5).
- `editorIndentGuide.activeBackground6`: Color of the active editor indentation guides (6).

To see the editor inline hints, set `"editor.inlineSuggest.enabled": true`.

- `editorInlayHint.background`: Background color of inline hints.
- `editorInlayHint.foreground`: Foreground color of inline hints.
- `editorInlayHint.typeForeground`: Foreground color of inline hints for types
- `editorInlayHint.typeBackground`: Background color of inline hints for types
- `editorInlayHint.parameterForeground`: Foreground color of inline hints for parameters
- `editorInlayHint.parameterBackground`: Background color of inline hints for parameters

To see editor rulers, define their location with `"editor.rulers"`

- `editorRuler.foreground`: Color of the editor rulers.

- `editor.linkedEditingBackground`: Background color when the editor is in linked editing mode.

CodeLens:

![CodeLens][LN539]

- `editorCodeLens.foreground`: Foreground color of an editor CodeLens.

Lightbulb:

- `editorLightBulb.foreground`: The color used for the lightbulb actions icon.
- `editorLightBulbAutoFix.foreground`: The color used for the lightbulb auto fix actions icon.
- `editorLightBulbAi.foreground`: The color used for the lightbulb AI icon.

Bracket matches:

![Bracket colors][LN540]

- `editorBracketMatch.background`: Background color behind matching brackets.
- `editorBracketMatch.border`: Color for matching brackets boxes.

Bracket pair colorization:

- `editorBracketHighlight.foreground1`: Foreground color of brackets (1). Requires enabling bracket pair colorization.
- `editorBracketHighlight.foreground2`: Foreground color of brackets (2). Requires enabling bracket pair colorization.
- `editorBracketHighlight.foreground3`: Foreground color of brackets (3). Requires enabling bracket pair colorization.
- `editorBracketHighlight.foreground4`: Foreground color of brackets (4). Requires enabling bracket pair colorization.
- `editorBracketHighlight.foreground5`: Foreground color of brackets (5). Requires enabling bracket pair colorization.
- `editorBracketHighlight.foreground6`: Foreground color of brackets (6). Requires enabling bracket pair colorization.
- `editorBracketHighlight.unexpectedBracket.foreground`: Foreground color of unexpected brackets.

Bracket pair guides:

- `editorBracketPairGuide.activeBackground1`: Background color of active bracket pair guides (1). Requires enabling bracket pair guides.
- `editorBracketPairGuide.activeBackground2`: Background color of active bracket pair guides (2). Requires enabling bracket pair guides.
- `editorBracketPairGuide.activeBackground3`: Background color of active bracket pair guides (3). Requires enabling bracket pair guides.
- `editorBracketPairGuide.activeBackground4`: Background color of active bracket pair guides (4). Requires enabling bracket pair guides.
- `editorBracketPairGuide.activeBackground5`: Background color of active bracket pair guides (5). Requires enabling bracket pair guides.
- `editorBracketPairGuide.activeBackground6`: Background color of active bracket pair guides (6). Requires enabling bracket pair guides.

- `editorBracketPairGuide.background1`: Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.
- `editorBracketPairGuide.background2`: Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.
- `editorBracketPairGuide.background3`: Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.
- `editorBracketPairGuide.background4`: Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.
- `editorBracketPairGuide.background5`: Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.
- `editorBracketPairGuide.background6`: Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.

Folding:

- `editor.foldBackground`: Background color for folded ranges. The color must not be opaque so as not to hide underlying decorations.

Overview ruler:

This ruler is located beneath the scroll bar on the right edge of the editor and gives an overview of the decorations in the editor.

- `editorOverviewRuler.background`: Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.
- `editorOverviewRuler.border`: Color of the overview ruler border.
- `editorOverviewRuler.findMatchForeground`: Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.rangeHighlightForeground`: Overview ruler marker color for highlighted ranges, like by the Quick Open, Symbol in File and Find features. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.selectionHighlightForeground`: Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.wordHighlightForeground`: Overview ruler marker color for symbol highlights. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.wordHighlightStrongForeground`: Overview ruler marker color for write-access symbol highlights. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.wordHighlightTextForeground`: Overview ruler marker color of a textual occurrence for a symbol. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.modifiedForeground`: Overview ruler marker color for modified content.
- `editorOverviewRuler.addedForeground`: Overview ruler marker color for added content.
- `editorOverviewRuler.deletedForeground`: Overview ruler marker color for deleted content.
- `editorOverviewRuler.errorForeground`: Overview ruler marker color for errors.
- `editorOverviewRuler.warningForeground`: Overview ruler marker color for warnings.
- `editorOverviewRuler.infoForeground`: Overview ruler marker color for infos.
- `editorOverviewRuler.bracketMatchForeground`: Overview ruler marker color for matching brackets.
- `editorOverviewRuler.inlineChatInserted`: Overview ruler marker color for inline chat inserted content.
- `editorOverviewRuler.inlineChatRemoved`: Overview ruler marker color for inline chat removed content.

Errors and warnings:

- `editorError.foreground`: Foreground color of error squiggles in the editor.
- `editorError.border`: Border color of error boxes in the editor.
- `editorError.background`: Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations.
- `editorWarning.foreground`: Foreground color of warning squiggles in the editor.
- `editorWarning.border`: Border color of warning boxes in the editor.
- `editorWarning.background`: Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations.
- `editorInfo.foreground`: Foreground color of info squiggles in the editor.
- `editorInfo.border`: Border color of info boxes in the editor.
- `editorInfo.background`: Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations.
- `editorHint.foreground`: Foreground color of hints in the editor.
- `editorHint.border`: Border color of hint boxes in the editor.
- `problemsErrorIcon.foreground`: The color used for the problems error icon.
- `problemsWarningIcon.foreground`: The color used for the problems warning icon.
- `problemsInfoIcon.foreground`: The color used for the problems info icon.

Unused source code:

- `editorUnnecessaryCode.border`: Border color of unnecessary (unused) source code in the editor.
- `editorUnnecessaryCode.opacity`: Opacity of unnecessary (unused) source code in the editor. For example, `"#000000c0"` will render the code with 75% opacity. For high contrast themes, use the `"editorUnnecessaryCode.border"` theme color to underline unnecessary code instead of fading it out.

The gutter contains the glyph margins and the line numbers:

- `editorGutter.background`: Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.
- `editorGutter.modifiedBackground`: Editor gutter background color for lines that are modified.
- `editorGutter.addedBackground`: Editor gutter background color for lines that are added.
- `editorGutter.deletedBackground`: Editor gutter background color for lines that are deleted.
- `editorGutter.commentRangeForeground`: Editor gutter decoration color for commenting ranges.
- `editorGutter.commentGlyphForeground`: Editor gutter decoration color for commenting glyphs.
- `editorGutter.commentUnresolvedGlyphForeground`: Editor gutter decoration color for commenting glyphs for unresolved comment threads.
- `editorGutter.foldingControlForeground`: Color of the folding control in the editor gutter.

The editor comments widget can be seen when reviewing pull requests:

- `editorCommentsWidget.resolvedBorder`: Color of borders and arrow for resolved comments.
- `editorCommentsWidget.unresolvedBorder`: Color of borders and arrow for unresolved comments.
- `editorCommentsWidget.rangeBackground`: Color of background for comment ranges.
- `editorCommentsWidget.rangeActiveBackground`: Color of background for currently selected or hovered comment range.
- `editorCommentsWidget.replyInputBackground`: Background color for comment reply input box.

## Diff editor colors

For coloring inserted and removed text, use either a background or a border color but not both.

- `diffEditor.insertedTextBackground`: Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations.
- `diffEditor.insertedTextBorder`: Outline color for the text that got inserted.
- `diffEditor.removedTextBackground`: Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations.
- `diffEditor.removedTextBorder`: Outline color for text that got removed.
- `diffEditor.border`: Border color between the two text editors.
- `diffEditor.diagonalFill`: Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.
- `diffEditor.insertedLineBackground`: Background color for lines that got inserted. The color must not be opaque so as not to hide underlying decorations.
- `diffEditor.removedLineBackground`: Background color for lines that got removed. The color must not be opaque so as not to hide underlying decorations.
- `diffEditorGutter.insertedLineBackground`: Background color for the margin where lines got inserted.
- `diffEditorGutter.removedLineBackground`: Background color for the margin where lines got removed.
- `diffEditorOverview.insertedForeground`: Diff overview ruler foreground for inserted content.
- `diffEditorOverview.removedForeground`: Diff overview ruler foreground for removed content.
- `diffEditor.unchangedRegionBackground`: The color of unchanged blocks in diff editor.
- `diffEditor.unchangedRegionForeground`: The foreground color of unchanged blocks in the diff editor.
- `diffEditor.unchangedRegionShadow`: The color of the shadow around unchanged region widgets.
- `diffEditor.unchangedCodeBackground`: The background color of unchanged code in the diff editor.
- `diffEditor.move.border`: The border color for text that got moved in the diff editor.
- `diffEditor.moveActive.border`: The active border color for text that got moved in the diff editor.
- `multiDiffEditor.headerBackground`: The background color of the diff editor's header
- `multiDiffEditor.background`: The background color of the multi file diff editor
- `multiDiffEditor.border`: The border color of the multi file diff editor

## Chat colors

- `chat.requestBorder`: The border color of a chat request.
- `chat.requestBackground`: The background color of a chat request.
- `chat.slashCommandBackground`: The background color of a chat slash command.
- `chat.slashCommandForeground`: The foreground color of a chat slash command.
- `chat.avatarBackground`: The background color of a chat avatar.
- `chat.avatarForeground`: The foreground color of a chat avatar.
- `chat.requestBackground`: The background color of a chat request.

## Inline Chat colors

- `inlineChat.background`: Background color of the interactive editor widget.
- `inlineChat.border`: Border color of the interactive editor widget.
- `inlineChat.shadow`: Shadow color of the interactive editor widget.
- `inlineChat.regionHighlight`: Background highlighting of the current interactive region. Must be transparent.
- `inlineChatInput.border`: Border color of the interactive editor input.
- `inlineChatInput.focusBorder`: Border color of the interactive editor input when focused.
- `inlineChatInput.placeholderForeground`: Foreground color of the interactive editor input placeholder.
- `inlineChatInput.background`: Background color of the interactive editor input.
- `inlineChatDiff.inserted`: Background color of inserted text in the interactive editor input.
- `inlineChatDiff.removed`: Background color of removed text in the interactive editor input.

## Panel Chat colors

- `interactive.activeCodeBorder`: The border color for the current interactive code cell when the editor has focus.
- `interactive.inactiveCodeBorder`: The border color for the current interactive code cell when the editor does not have focus.

## Editor widget colors

The Editor widget is shown in front of the editor content. Examples are the Find/Replace dialog, the suggestion widget, and the editor hover.

- `editorWidget.foreground`: Foreground color of editor widgets, such as find/replace.
- `editorWidget.background`: Background color of editor widgets, such as Find/Replace.
- `editorWidget.border`: Border color of the editor widget unless the widget does not contain a border or defines its own border color.
- `editorWidget.resizeBorder`: Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.

- `editorSuggestWidget.background`: Background color of the suggestion widget.
- `editorSuggestWidget.border`: Border color of the suggestion widget.
- `editorSuggestWidget.foreground`: Foreground color of the suggestion widget.
- `editorSuggestWidget.focusHighlightForeground`: Color of the match highlights in the suggest widget when an item is focused.
- `editorSuggestWidget.highlightForeground`: Color of the match highlights in the suggestion widget.
- `editorSuggestWidget.selectedBackground`: Background color of the selected entry in the suggestion widget.
- `editorSuggestWidget.selectedForeground`: Foreground color of the selected entry in the suggest widget.
- `editorSuggestWidget.selectedIconForeground`: Icon foreground color of the selected entry in the suggest widget.
- `editorSuggestWidgetStatus.foreground`: Foreground color of the suggest widget status.

- `editorHoverWidget.foreground`: Foreground color of the editor hover.
- `editorHoverWidget.background`: Background color of the editor hover.
- `editorHoverWidget.border`: Border color of the editor hover.
- `editorHoverWidget.highlightForeground`: Foreground color of the active item in the parameter hint.
- `editorHoverWidget.statusBarBackground`: Background color of the editor hover status bar.

- `editorGhostText.border`: Border color of the ghost text shown by inline completion providers and the suggest preview.
- `editorGhostText.background`: Background color of the ghost text in the editor.
- `editorGhostText.foreground`: Foreground color of the ghost text shown by inline completion providers and the suggest preview.

- `editorStickyScroll.background`: Editor sticky scroll background color.
- `editorStickyScroll.border`: Border color of sticky scroll in the editor.
- `editorStickyScroll.shadow`:  Shadow color of sticky scroll in the editor.
- `editorStickyScrollHover.background`: Editor sticky scroll on hover background color.

The Debug Exception widget is a peek view that shows in the editor when debug stops at an exception.

- `debugExceptionWidget.background`: Exception widget background color.
- `debugExceptionWidget.border`: Exception widget border color.

The editor marker view shows when navigating to errors and warnings in the editor (**Go to Next Error or Warning** command).

- `editorMarkerNavigation.background`: Editor marker navigation widget background.
- `editorMarkerNavigationError.background`: Editor marker navigation widget error color.
- `editorMarkerNavigationWarning.background`: Editor marker navigation widget warning color.
- `editorMarkerNavigationInfo.background`: Editor marker navigation widget info color.
- `editorMarkerNavigationError.headerBackground`: Editor marker navigation widget error heading background.
- `editorMarkerNavigationWarning.headerBackground`: Editor marker navigation widget warning heading background.
- `editorMarkerNavigationInfo.headerBackground`: Editor marker navigation widget info heading background.

## Peek view colors

Peek views are used to show references and declarations as a view inside the editor.

![Peek view][LN541]

- `peekView.border`: Color of the peek view borders and arrow.
- `peekViewEditor.background`: Background color of the peek view editor.
- `peekViewEditorGutter.background`: Background color of the gutter in the peek view editor.
- `peekViewEditor.matchHighlightBackground`: Match highlight color in the peek view editor.
- `peekViewEditor.matchHighlightBorder`: Match highlight border color in the peek view editor.
  `peekViewEditorStickyScroll.background`: Background color of sticky scroll in the peek view editor.
- `peekViewResult.background`: Background color of the peek view result list.
- `peekViewResult.fileForeground`: Foreground color for file nodes in the peek view result list.
- `peekViewResult.lineForeground`: Foreground color for line nodes in the peek view result list.
- `peekViewResult.matchHighlightBackground`: Match highlight color in the peek view result list.
- `peekViewResult.selectionBackground`: Background color of the selected entry in the peek view result list.
- `peekViewResult.selectionForeground`: Foreground color of the selected entry in the peek view result list.
- `peekViewTitle.background`: Background color of the peek view title area.
- `peekViewTitleDescription.foreground`: Color of the peek view title info.
- `peekViewTitleLabel.foreground`: Color of the peek view title.
- `peekViewEditorStickyScroll.background`: Background color of sticky scroll in the peek view editor.

## Merge conflicts colors

Merge conflict decorations are shown when the editor contains special diff ranges.

![Merge ranges][LN542]

- `merge.currentHeaderBackground`: Current header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
- `merge.currentContentBackground`: Current content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
- `merge.incomingHeaderBackground`: Incoming header background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
- `merge.incomingContentBackground`: Incoming content background in inline merge conflicts. The color must not be opaque so as not to hide underlying decorations.
- `merge.border`: Border color on headers and the splitter in inline merge conflicts.
- `merge.commonContentBackground`: Common ancestor content background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
- `merge.commonHeaderBackground`: Common ancestor header background in inline merge-conflicts. The color must not be opaque so as not to hide underlying decorations.
- `editorOverviewRuler.currentContentForeground`: Current overview ruler foreground for inline merge conflicts.
- `editorOverviewRuler.incomingContentForeground`: Incoming overview ruler foreground for inline merge conflicts.
- `editorOverviewRuler.commonContentForeground`: Common ancestor overview ruler foreground for inline merge conflicts.
- `editorOverviewRuler.commentForeground`: Editor overview ruler decoration color for resolved comments. This color should be opaque.
- `editorOverviewRuler.commentUnresolvedForeground`: Editor overview ruler decoration color for unresolved comments. This color should be opaque.
- `mergeEditor.change.background`: The background color for changes.
- `mergeEditor.change.word.background`: The background color for word changes.
- `mergeEditor.conflict.unhandledUnfocused.border`: The border color of unhandled unfocused conflicts.
- `mergeEditor.conflict.unhandledFocused.border`: The border color of unhandled focused conflicts.
- `mergeEditor.conflict.handledUnfocused.border`: The border color of handled unfocused conflicts.
- `mergeEditor.conflict.handledFocused.border`: The border color of handled focused conflicts.
- `mergeEditor.conflict.handled.minimapOverViewRuler`: The foreground color for changes in input 1.
- `mergeEditor.conflict.unhandled.minimapOverViewRuler`: The foreground color for changes in input 1.
- `mergeEditor.conflictingLines.background`: The background of the "Conflicting Lines" text.
- `mergeEditor.changeBase.background`: The background color for changes in base.
- `mergeEditor.changeBase.word.background`: The background color for word changes in base.
- `mergeEditor.conflict.input1.background`: The background color of decorations in input 1.
- `mergeEditor.conflict.input2.background`: The background color of decorations in input 2.

## Panel colors

Panels are shown below the editor area and contain views like Output and Integrated Terminal.

- `panel.background`: Panel background color.
- `panel.border`: Panel border color to separate the panel from the editor.
- `panel.dropBorder`: Drag and drop feedback color for the panel titles. Panels are shown below the editor area and contain views like output and integrated terminal.
- `panelTitle.activeBorder`: Border color for the active panel title.
- `panelTitle.activeForeground`: Title color for the active panel.
- `panelTitle.inactiveForeground`: Title color for the inactive panel.
- `panelInput.border`: Input box border for inputs in the panel.
- `panelSection.border`: Panel section border color used when multiple views are stacked horizontally in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
- `panelSection.dropBackground`: Drag and drop feedback color for the panel sections. The color should have transparency so that the panel sections can still shine through. Panels are shown below the editor area and contain views like output and integrated terminal.
- `panelSectionHeader.background`: Panel section header background color. Panels are shown below the editor area and contain views like output and integrated terminal.
- `panelSectionHeader.foreground`: Panel section header foreground color. Panels are shown below the editor area and contain views like output and integrated terminal.
- `panelStickyScroll.background`: Background color of sticky scroll in the panel.
- `panelStickyScroll.border`: Border color of sticky scroll in the panel.
- `panelStickyScroll.shadow`: Shadow color of sticky scroll in the panel.
- `panelSectionHeader.border`: Panel section header border color used when multiple views are stacked vertically in the panel. Panels are shown below the editor area and contain views like output and integrated terminal.
- `outputView.background`: Output view background color.
- `outputViewStickyScroll.background`: Output view sticky scroll background color.

## Status Bar colors

The Status Bar is shown in the bottom of the workbench.

- `statusBar.background`: Standard Status Bar background color.
- `statusBar.foreground`: Status Bar foreground color.
- `statusBar.border`: Status Bar border color separating the Status Bar and editor.
- `statusBar.debuggingBackground`: Status Bar background color when a program is being debugged.
- `statusBar.debuggingForeground`: Status Bar foreground color when a program is being debugged.
- `statusBar.debuggingBorder`: Status Bar border color separating the Status Bar and editor when a program is being debugged.
- `statusBar.noFolderForeground`: Status Bar foreground color when no folder is opened.
- `statusBar.noFolderBackground`: Status Bar background color when no folder is opened.
- `statusBar.noFolderBorder`: Status Bar border color separating the Status Bar and editor when no folder is opened.
- `statusBarItem.activeBackground`: Status Bar item background color when clicking.
- `statusBarItem.hoverForeground`: Status bar item foreground color when hovering. The status bar is shown in the bottom of the window.
- `statusBarItem.hoverBackground`: Status Bar item background color when hovering.
- `statusBarItem.prominentForeground`: Status Bar prominent items foreground color.
- `statusBarItem.prominentBackground`: Status Bar prominent items background color.
- `statusBarItem.prominentHoverForeground`: Status bar prominent items foreground color when hovering. Prominent items stand out from other status bar entries to indicate importance. The status bar is shown in the bottom of the window.
- `statusBarItem.prominentHoverBackground`: Status Bar prominent items background color when hovering.
- `statusBarItem.remoteBackground`: Background color for the remote indicator on the status bar.
- `statusBarItem.remoteForeground`: Foreground color for the remote indicator on the status bar.
- `statusBarItem.remoteHoverBackground`: Background color for the remote indicator on the status bar when hovering.
- `statusBarItem.remoteHoverForeground`: Foreground color for the remote indicator on the status bar when hovering.
- `statusBarItem.errorBackground`: Status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
- `statusBarItem.errorForeground`: Status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.
- `statusBarItem.errorHoverBackground`: Status bar error items background color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.errorHoverForeground`: Status bar error items foreground color when hovering. Error items stand out from other status bar entries to indicate error conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.warningBackground`: Status bar warning items background color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.warningForeground`: Status bar warning items foreground color. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.warningHoverBackground`: Status bar warning items background color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.warningHoverForeground`: Status bar warning items foreground color when hovering. Warning items stand out from other status bar entries to indicate warning conditions. The status bar is shown in the bottom of the window.
- `statusBarItem.compactHoverBackground`: Status bar item background color when hovering an item that contains two hovers. The status bar is shown in the bottom of the window.
- `statusBarItem.focusBorder`: Status bar item border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
- `statusBar.focusBorder`: Status bar border color when focused on keyboard navigation. The status bar is shown in the bottom of the window.
- `statusBarItem.offlineBackground`: Status bar item background color when the workbench is offline.
- `statusBarItem.offlineForeground`: Status bar item foreground color when the workbench is offline.
- `statusBarItem.offlineHoverForeground`: Status bar item foreground hover color when the workbench is offline.
- `statusBarItem.offlineHoverBackground`: Status bar item background hover color when the workbench is offline.

Prominent items stand out from other Status Bar entries to indicate importance. One example is the **Toggle Tab Key Moves Focus** command change mode indicator.

## Title Bar colors

- `titleBar.activeBackground`: Title Bar background when the window is active.
- `titleBar.activeForeground`: Title Bar foreground when the window is active.
- `titleBar.inactiveBackground`: Title Bar background when the window is inactive.
- `titleBar.inactiveForeground`: Title Bar foreground when the window is inactive.
- `titleBar.border`: Title bar border color.

## Menu Bar colors

- `menubar.selectionForeground`: Foreground color of the selected menu item in the menubar.
- `menubar.selectionBackground`: Background color of the selected menu item in the menubar.
- `menubar.selectionBorder`: Border color of the selected menu item in the menubar.
- `menu.foreground`: Foreground color of menu items.
- `menu.background`: Background color of menu items.
- `menu.selectionForeground`: Foreground color of the selected menu item in menus.
- `menu.selectionBackground`: Background color of the selected menu item in menus.
- `menu.selectionBorder`: Border color of the selected menu item in menus.
- `menu.separatorBackground`: Color of a separator menu item in menus.
- `menu.border`: Border color of menus.

## Command Center colors

- `commandCenter.foreground`: Foreground color of the Command Center.
- `commandCenter.activeForeground`: Active foreground color of the Command Center.
- `commandCenter.background`: Background color of the Command Center.
- `commandCenter.activeBackground`: Active background color of the Command Center.
- `commandCenter.border`: Border color of the Command Center.
- `commandCenter.inactiveForeground`: Foreground color of the Command Center when the window is inactive.
- `commandCenter.inactiveBorder`: Border color of the Command Center when the window is inactive.
- `commandCenter.activeBorder`: Active border color of the Command Center.
- `commandCenter.debuggingBackground`: Command Center background color when a program is being debugged.

## Notification colors

Notification toasts slide up from the bottom-right of the workbench.

![Notification Toasts][LN543]

Once opened in the Notification Center, they are displayed in a list with a header:

![Notification Center][LN544]

- `notificationCenter.border`: Notification Center border color.
- `notificationCenterHeader.foreground`: Notification Center header foreground color.
- `notificationCenterHeader.background`: Notification Center header background color.
- `notificationToast.border`: Notification toast border color.
- `notifications.foreground`: Notification foreground color.
- `notifications.background`: Notification background color.
- `notifications.border`: Notification border color separating from other notifications in the Notification Center.
- `notificationLink.foreground`: Notification links foreground color.
- `notificationsErrorIcon.foreground`: The color used for the notification error icon.
- `notificationsWarningIcon.foreground`: The color used for the notification warning icon.
- `notificationsInfoIcon.foreground`: The color used for the notification info icon.

## Banner colors

The banner appears below the title bar and spans the entire width of the workbench when visible.

- `banner.background`: Banner background color.
- `banner.foreground`: Banner foreground color.
- `banner.iconForeground`: Color for the icon in front of the banner text.

## Extensions colors

- `extensionButton.prominentForeground`: Extension view button foreground color (for example **Install** button).
- `extensionButton.prominentBackground`: Extension view button background color.
- `extensionButton.prominentHoverBackground`: Extension view button background hover color.
- `extensionButton.background`: Button background color for extension actions.
- `extensionButton.foreground`: Button foreground color for extension actions.
- `extensionButton.hoverBackground`: Button background hover color for extension actions.
- `extensionButton.separator`: Button separator color for extension actions.
- `extensionBadge.remoteBackground`: Background color for the remote badge in the extensions view.
- `extensionBadge.remoteForeground`: Foreground color for the remote badge in the extensions view.
- `extensionIcon.starForeground`: The icon color for extension ratings.
- `extensionIcon.verifiedForeground`: The icon color for extension verified publisher.
- `extensionIcon.preReleaseForeground`: The icon color for pre-release extension.
- `extensionIcon.sponsorForeground`: The icon color for extension sponsor.

## Quick picker colors

- `pickerGroup.border`: Quick picker (Quick Open) color for grouping borders.
- `pickerGroup.foreground`: Quick picker (Quick Open) color for grouping labels.
- `quickInput.background`: Quick input background color. The quick input widget is the container for views like the color theme picker.
- `quickInput.foreground`: Quick input foreground color. The quick input widget is the container for views like the color theme picker.
- `quickInputList.focusBackground`: Quick picker background color for the focused item.
- `quickInputList.focusForeground`: Quick picker foreground color for the focused item.
- `quickInputList.focusIconForeground`: Quick picker icon foreground color for the focused item.
- `quickInputTitle.background`: Quick picker title background color. The quick picker widget is the container for pickers like the Command Palette.

## Keybinding label colors

Keybinding labels are shown when there is a keybinding associated with a command. An example of the keybinding label can be seen in the Command Palette:

![Keybinding label][LN545]

Usages of the keybinding label include (but are not limited to):

- The Command Palette
- The Keyboard Shortcuts editor
- The Keyboard Shortcuts recorder modal
- The "feature contribution" section of an extension's marketplace page

The following customizations are available:

- `keybindingLabel.background`: Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.
- `keybindingLabel.foreground`: Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.
- `keybindingLabel.border`: Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.
- `keybindingLabel.bottomBorder`: Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.

## Keyboard shortcut table colors

- `keybindingTable.headerBackground`: Background color for the keyboard shortcuts table header.
- `keybindingTable.rowsBackground`: Background color for the keyboard shortcuts table alternating rows.

## Integrated Terminal colors

- `terminal.background`: The background of the Integrated Terminal's viewport.
- `terminal.border`: The color of the border that separates split panes within the terminal. This defaults to panel.border.
- `terminal.foreground`: The default foreground color of the Integrated Terminal.
- `terminal.ansiBlack`: 'Black' ANSI color in the terminal.
- `terminal.ansiBlue`: 'Blue' ANSI color in the terminal.
- `terminal.ansiBrightBlack`: 'BrightBlack' ANSI color in the terminal.
- `terminal.ansiBrightBlue`: 'BrightBlue' ANSI color in the terminal.
- `terminal.ansiBrightCyan`: 'BrightCyan' ANSI color in the terminal.
- `terminal.ansiBrightGreen`: 'BrightGreen' ANSI color in the terminal.
- `terminal.ansiBrightMagenta`: 'BrightMagenta' ANSI color in the terminal.
- `terminal.ansiBrightRed`: 'BrightRed' ANSI color in the terminal.
- `terminal.ansiBrightWhite`: 'BrightWhite' ANSI color in the terminal.
- `terminal.ansiBrightYellow`: 'BrightYellow' ANSI color in the terminal.
- `terminal.ansiCyan`: 'Cyan' ANSI color in the terminal.
- `terminal.ansiGreen`: 'Green' ANSI color in the terminal.
- `terminal.ansiMagenta`: 'Magenta' ANSI color in the terminal.
- `terminal.ansiRed`: 'Red' ANSI color in the terminal.
- `terminal.ansiWhite`: 'White' ANSI color in the terminal.
- `terminal.ansiYellow`: 'Yellow' ANSI color in the terminal.
- `terminal.selectionBackground`: The selection background color of the terminal.
- `terminal.selectionForeground`: The selection foreground color of the terminal. When this is null the selection foreground will be retained and have the minimum contrast ratio feature applied.
- `terminal.inactiveSelectionBackground`: The selection background color of the terminal when it does not have focus.
- `terminal.findMatchBackground`: Color of the current search match in the terminal. The color must not be opaque so as not to hide underlying terminal content.
- `terminal.findMatchBorder`: Border color of the current search match in the terminal.
- `terminal.findMatchHighlightBackground`: Color of the other search matches in the terminal. The color must not be opaque so as not to hide underlying terminal content.
- `terminal.findMatchHighlightBorder`: Border color of the other search matches in the terminal.
- `terminal.hoverHighlightBackground`: Color of the highlight when hovering a link in the terminal.
- `terminalCursor.background`: The background color of the terminal cursor. Allows customizing the color of a character overlapped by a block cursor.
- `terminalCursor.foreground`: The foreground color of the terminal cursor.
- `terminal.dropBackground`: The background color when dragging on top of terminals. The color should have transparency so that the terminal contents can still shine through.
- `terminal.tab.activeBorder`: Border on the side of the terminal tab in the panel. This defaults to `tab.activeBorder`.
- `terminalCommandDecoration.defaultBackground`: The default terminal command decoration background color.
- `terminalCommandDecoration.successBackground`: The terminal command decoration background color for successful commands.
- `terminalCommandDecoration.errorBackground`: The terminal command decoration background color for error commands.
- `terminalOverviewRuler.cursorForeground`: The overview ruler cursor color.
- `terminalOverviewRuler.findMatchForeground`: Overview ruler marker color for find matches in the terminal.
- `terminalStickyScroll.background`: The background color of the sticky scroll overlay in the terminal.
- `terminalStickyScrollHover.background`: The background color of the sticky scroll overlay in the terminal when hovered.

## Debug colors

- `debugToolBar.background`: Debug toolbar background color.
- `debugToolBar.border`: Debug toolbar border color.
- `editor.stackFrameHighlightBackground`: Background color of the top stack frame highlight in the editor.
- `editor.focusedStackFrameHighlightBackground`: Background color of the focused stack frame highlight in the editor.
- `editor.inlineValuesForeground`: Color for the debug inline value text.
- `editor.inlineValuesBackground`: Color for the debug inline value background.
- `debugView.exceptionLabelForeground`: Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.
- `debugView.exceptionLabelBackground`: Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.
- `debugView.stateLabelForeground`: Foreground color for a label in the CALL STACK view showing the current session's or thread's state.
- `debugView.stateLabelBackground`: Background color for a label in the CALL STACK view showing the current session's or thread's state.
- `debugView.valueChangedHighlight`: Color used to highlight value changes in the debug views (such as in the Variables view).
- `debugTokenExpression.name`: Foreground color for the token names shown in debug views (such as in the Variables or Watch view).
- `debugTokenExpression.value`: Foreground color for the token values shown in debug views.
- `debugTokenExpression.string`: Foreground color for strings in debug views.
- `debugTokenExpression.boolean`: Foreground color for booleans in debug views.
- `debugTokenExpression.number`: Foreground color for numbers in debug views.
- `debugTokenExpression.error`: Foreground color for expression errors in debug views.

## Testing colors

- `testing.runAction`: Color for 'run' icons in the editor.
- `testing.iconErrored`: Color for the 'Errored' icon in the test explorer.
- `testing.iconFailed`: Color for the 'failed' icon in the test explorer.
- `testing.iconPassed`: Color for the 'passed' icon in the test explorer.
- `testing.iconQueued`: Color for the 'Queued' icon in the test explorer.
- `testing.iconUnset`: Color for the 'Unset' icon in the test explorer.
- `testing.iconSkipped`: Color for the 'Skipped' icon in the test explorer.
- `testing.iconErrored.retired`: Retired color for the 'Errored' icon in the test explorer.
- `testing.iconFailed.retired`: Retired color for the 'failed' icon in the test explorer.
- `testing.iconPassed.retired`: Retired color for the 'passed' icon in the test explorer.
- `testing.iconQueued.retired`: Retired color for the 'Queued' icon in the test explorer.
- `testing.iconUnset.retired`: Retired color for the 'Unset' icon in the test explorer.
- `testing.iconSkipped.retired`: Retired color for the 'Skipped' icon in the test explorer.
- `testing.peekBorder`: Color of the peek view borders and arrow.
- `testing.peekHeaderBackground`: Color of the peek view borders and arrow.
- `testing.message.error.decorationForeground`: Text color of test error messages shown inline in the editor.
- `testing.message.error.lineBackground`: Margin color beside error messages shown inline in the editor.
- `testing.message.info.decorationForeground`: Text color of test info messages shown inline in the editor.
- `testing.message.info.lineBackground`: Margin color beside info messages shown inline in the editor.
- `testing.messagePeekBorder`: Color of the peek view borders and arrow when peeking a logged message.
- `testing.messagePeekHeaderBackground`: Color of the peek view borders and arrow when peeking a logged message.
- `testing.coveredBackground`: Background color of text that was covered.
- `testing.coveredBorder`: Border color of text that was covered.
- `testing.coveredGutterBackground`: Gutter color of regions where code was covered.
- `testing.uncoveredBranchBackground`: Background of the widget shown for an uncovered branch.
- `testing.uncoveredBackground`: Background color of text that was not covered.
- `testing.uncoveredBorder`: Border color of text that was not covered.
- `testing.uncoveredGutterBackground`: Gutter color of regions where code not covered.
- `testing.coverCountBadgeBackground`: Background for the badge indicating execution count
- `testing.coverCountBadgeForeground`: Foreground for the badge indicating execution count

## Welcome page colors

- `welcomePage.background`: Background color for the Welcome page.
- `welcomePage.progress.background`: Foreground color for the Welcome page progress bars.
- `welcomePage.progress.foreground`: Background color for the Welcome page progress bars.
- `welcomePage.tileBackground`: Background color for the tiles on the Welcome page.
- `welcomePage.tileHoverBackground`: Hover background color for the tiles on the Welcome page.
- `welcomePage.tileBorder`: Border color for the tiles on the Welcome page.

- `walkThrough.embeddedEditorBackground`: Background color for the embedded editors on the Interactive Playground.
- `walkthrough.stepTitle.foreground`: Foreground color of the heading of each walkthrough step.

## Git colors

- `gitDecoration.addedResourceForeground`: Color for added Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.modifiedResourceForeground`: Color for modified Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.deletedResourceForeground`: Color for deleted Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.renamedResourceForeground`: Color for renamed or copied Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.stageModifiedResourceForeground`: Color for staged modifications git decorations.  Used for file labels and the SCM viewlet.
- `gitDecoration.stageDeletedResourceForeground`: Color for staged deletions git decorations.  Used for file labels and the SCM viewlet.
- `gitDecoration.untrackedResourceForeground`: Color for untracked Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.ignoredResourceForeground`: Color for ignored Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.conflictingResourceForeground`: Color for conflicting Git resources. Used for file labels and the SCM viewlet.
- `gitDecoration.submoduleResourceForeground`: Color for submodule resources.

## Settings Editor colors

**Note:** These colors are for the GUI settings editor which can be opened with the `Preferences: Open Settings (UI)` command.

- `settings.headerForeground`: The foreground color for a section header or active title.
- `settings.modifiedItemIndicator`: The line that indicates a modified setting.
- `settings.dropdownBackground`: Dropdown background.
- `settings.dropdownForeground`: Dropdown foreground.
- `settings.dropdownBorder`: Dropdown border.
- `settings.dropdownListBorder`: Dropdown list border.
- `settings.checkboxBackground`: Checkbox background.
- `settings.checkboxForeground`: Checkbox foreground.
- `settings.checkboxBorder`: Checkbox border.
- `settings.rowHoverBackground`: The background color of a settings row when hovered.
- `settings.textInputBackground`: Text input box background.
- `settings.textInputForeground`: Text input box foreground.
- `settings.textInputBorder`: Text input box border.
- `settings.numberInputBackground`: Number input box background.
- `settings.numberInputForeground`: Number input box foreground.
- `settings.numberInputBorder`: Number input box border.
- `settings.focusedRowBackground`: Background color of a focused setting row.
- `settings.focusedRowBorder`: The color of the row's top and bottom border when the row is focused.
- `settings.headerBorder`: The color of the header container border.
- `settings.sashBorder`: The color of the Settings editor splitview sash border.
- `settings.settingsHeaderHoverForeground`: The foreground color for a section header or hovered title.

## Breadcrumbs colors

The theme colors for breadcrumbs navigation:

- `breadcrumb.foreground`: Color of breadcrumb items.
- `breadcrumb.background`: Background color of breadcrumb items.
- `breadcrumb.focusForeground`: Color of focused breadcrumb items.
- `breadcrumb.activeSelectionForeground`: Color of selected breadcrumb items.
- `breadcrumbPicker.background`: Background color of breadcrumb item picker.

## Snippets colors

The theme colors for snippets:

- `editor.snippetTabstopHighlightBackground`: Highlight background color of a snippet tabstop.
- `editor.snippetTabstopHighlightBorder`: Highlight border color of a snippet tabstop.
- `editor.snippetFinalTabstopHighlightBackground`: Highlight background color of the final tabstop of a snippet.
- `editor.snippetFinalTabstopHighlightBorder`: Highlight border color of the final tabstop of a snippet.

## Symbol Icons colors

The theme colors for symbol icons that appears in the Outline view, breadcrumb navigation, and suggest widget:

- `symbolIcon.arrayForeground`: The foreground color for array symbols.
- `symbolIcon.booleanForeground`: The foreground color for boolean symbols.
- `symbolIcon.classForeground`: The foreground color for class symbols.
- `symbolIcon.colorForeground`: The foreground color for color symbols.
- `symbolIcon.constantForeground`: The foreground color for constant symbols.
- `symbolIcon.constructorForeground`: The foreground color for constructor symbols.
- `symbolIcon.enumeratorForeground`: The foreground color for enumerator symbols.
- `symbolIcon.enumeratorMemberForeground`: The foreground color for enumerator member symbols.
- `symbolIcon.eventForeground`: The foreground color for event symbols.
- `symbolIcon.fieldForeground`: The foreground color for field symbols.
- `symbolIcon.fileForeground`: The foreground color for file symbols.
- `symbolIcon.folderForeground`: The foreground color for folder symbols.
- `symbolIcon.functionForeground`: The foreground color for function symbols.
- `symbolIcon.interfaceForeground`: The foreground color for interface symbols.
- `symbolIcon.keyForeground`: The foreground color for key symbols.
- `symbolIcon.keywordForeground`: The foreground color for keyword symbols.
- `symbolIcon.methodForeground`: The foreground color for method symbols.
- `symbolIcon.moduleForeground`: The foreground color for module symbols.
- `symbolIcon.namespaceForeground`: The foreground color for namespace symbols.
- `symbolIcon.nullForeground`: The foreground color for null symbols.
- `symbolIcon.numberForeground`: The foreground color for number symbols.
- `symbolIcon.objectForeground`: The foreground color for object symbols.
- `symbolIcon.operatorForeground`: The foreground color for operator symbols.
- `symbolIcon.packageForeground`: The foreground color for package symbols.
- `symbolIcon.propertyForeground`: The foreground color for property symbols.
- `symbolIcon.referenceForeground`: The foreground color for reference symbols.
- `symbolIcon.snippetForeground`: The foreground color for snippet symbols.
- `symbolIcon.stringForeground`: The foreground color for string symbols.
- `symbolIcon.structForeground`: The foreground color for struct symbols.
- `symbolIcon.textForeground`: The foreground color for text symbols.
- `symbolIcon.typeParameterForeground`: The foreground color for type parameter symbols.
- `symbolIcon.unitForeground`: The foreground color for unit symbols.
- `symbolIcon.variableForeground`: The foreground color for variable symbols.

## Debug Icons colors

- `debugIcon.breakpointForeground`: Icon color for breakpoints.
- `debugIcon.breakpointDisabledForeground`: Icon color for disabled breakpoints.
- `debugIcon.breakpointUnverifiedForeground`: Icon color for unverified breakpoints.
- `debugIcon.breakpointCurrentStackframeForeground`: Icon color for the current breakpoint stack frame.
- `debugIcon.breakpointStackframeForeground`: Icon color for all breakpoint stack frames.
- `debugIcon.startForeground`: Debug toolbar icon for start debugging.
- `debugIcon.pauseForeground`: Debug toolbar icon for pause.
- `debugIcon.stopForeground`: Debug toolbar icon for stop.
- `debugIcon.disconnectForeground`: Debug toolbar icon for disconnect.
- `debugIcon.restartForeground`: Debug toolbar icon for restart.
- `debugIcon.stepOverForeground`: Debug toolbar icon for step over.
- `debugIcon.stepIntoForeground`: Debug toolbar icon for step into.
- `debugIcon.stepOutForeground`: Debug toolbar icon for step over.
- `debugIcon.continueForeground`: Debug toolbar icon for continue.
- `debugIcon.stepBackForeground`: Debug toolbar icon for step back.

- `debugConsole.infoForeground`: Foreground color for info messages in debug REPL console.
- `debugConsole.warningForeground`: Foreground color for warning messages in debug REPL console.
- `debugConsole.errorForeground`: Foreground color for error messages in debug REPL console.
- `debugConsole.sourceForeground`: Foreground color for source filenames in debug REPL console.
- `debugConsoleInputIcon.foreground`: Foreground color for debug console input marker icon.

## Notebook colors

- `notebook.editorBackground`: Notebook background color.
- `notebook.cellBorderColor`: The border color for notebook cells.
- `notebook.cellHoverBackground`: The background color of a cell when the cell is hovered.
- `notebook.cellInsertionIndicator`: The color of the notebook cell insertion indicator.
- `notebook.cellStatusBarItemHoverBackground`: The background color of notebook cell status bar items.
- `notebook.cellToolbarSeparator`: The color of the separator in the cell bottom toolbar
- `notebook.cellEditorBackground`: The color of the notebook cell editor background
- `notebook.focusedCellBackground`: The background color of a cell when the cell is focused.
- `notebook.focusedCellBorder`: The color of the cell's focus indicator borders when the cell is focused.
- `notebook.focusedEditorBorder`: The color of the notebook cell editor border.
- `notebook.inactiveFocusedCellBorder`: The color of the cell's top and bottom border when a cell is focused while the primary focus is outside of the editor.
- `notebook.inactiveSelectedCellBorder`: The color of the cell's borders when multiple cells are selected.
- `notebook.outputContainerBackgroundColor`: The Color of the notebook output container background.
- `notebook.outputContainerBorderColor`: The border color of the notebook output container.
- `notebook.selectedCellBackground`: The background color of a cell when the cell is selected.
- `notebook.selectedCellBorder`: The color of the cell's top and bottom border when the cell is selected but not focused.
- `notebook.symbolHighlightBackground`: Background color of highlighted cell
- `notebookScrollbarSlider.activeBackground`: Notebook scrollbar slider background color when clicked on.
- `notebookScrollbarSlider.background`: Notebook scrollbar slider background color.
- `notebookScrollbarSlider.hoverBackground`: Notebook scrollbar slider background color when hovering.
- `notebookStatusErrorIcon.foreground`: The error icon color of notebook cells in the cell status bar.
- `notebookStatusRunningIcon.foreground`: The running icon color of notebook cells in the cell status bar.
- `notebookStatusSuccessIcon.foreground`: The success icon color of notebook cells in the cell status bar.
- `notebookEditorOverviewRuler.runningCellForeground`: The color of the running cell decoration in the notebook editor overview ruler.

## Chart colors

- `charts.foreground`: Contrast color for text in charts.
- `charts.lines`: Color for lines in charts.
- `charts.red`: Color for red elements in charts.
- `charts.blue`: Color for blue elements in charts.
- `charts.yellow`: Color for yellow elements in charts.
- `charts.orange`: Color for orange elements in charts.
- `charts.green`: Color for green elements in charts.
- `charts.purple`: Color for purple elements in charts.

## Ports Colors

- `ports.iconRunningProcessForeground`: The color of the icon for a port that has an associated running process.

## Comments View colors

- `commentsView.resolvedIcon`: Icon color for resolved comments.
- `commentsView.unresolvedIcon`: Icon color for unresolved comments.

## Action Bar colors

- `actionBar.toggledBackground`: Background color for toggled action items in action bar.

## Simple Find Widget

- `simpleFindWidget.sashBorder`: Border color of the sash border.

## SCM

- `scm.historyItemAdditionsForeground`: History item additions foreground color.
- `scm.historyItemDeletionsForeground`: History item deletions foreground color.
- `scm.historyItemStatisticsBorder`: History item statistics border color.
- `scm.historyItemSelectedStatisticsBorder`: History item selected statistics border color.

## Extension colors

Color IDs can also be contributed by extensions through the [color contribution point][LN545]. These colors also appear when using code complete in the `workbench.colorCustomizations` settings and the color theme definition file. Users can see what colors an extension defines in the [extension contributions][LN546] tab.


<a id="_api_references_icons-in-labels" ></a>

# /api/references/icons-in-labels
----------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: 109a10fc-2d64-44b6-98ce-b8375d245776
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Reference of all product icons by id
    ---

## Product Icon Reference

Visual Studio Code contains a set of built-in icons that are used in views and the editor, but can also be used in hovers, the status bar, and by extensions. These icons are **product icons** as opposed to **file icons**, which are used next to file names throughout the UI.

The product icons that ship with VS Code are contained in the [Codicon icon font][LK451] and form the **default** product icon theme. Extensions can provide new [Product Icon Themes][LN546] to redefine these icons and give VS Code a new appearance.

In order to allow this, all product icons are identified by an ID. The icon identifier is what's used in UI components in labels (`$(pencil)`), in the API as `ThemeIcon` and in contributions when icons are needed.

The association of icon identifier to an actual icon font glyph happens the product icon theme.

## Icons in labels

Icons can be used in Markdown labels in hovers, in the  [StatusBarItem][LN546] text and [QuickPickItem][LN546] label API. The syntax for adding an icon in Markdown is `$(iconIdentifier)`:

```ts
$(alert);
```

You can also embed text and use multiple icons:

```ts
$(eye) $(heart) $(mark-github) GitHub
```

To place a literal `${...}` text inside a label, escape the `$` with a backslash:

```ts
\$(eye)
```

## Animation

You can apply a spinning animation to the following icons by appending `~spin` to the icon name:

- `sync`
- `loading`
- `gear`

```ts
$(sync~spin)
```

## Icon contribution point

The icon contribution point allow extensions to define additional icons by ID, along with a default icon. The icon ID can then be used by the extension (or any other extensions that depend on the extension) in labels (`$(iconId)`) or at all places where a `ThemeIcon` can be used (`new ThemeIcon("iconId")`).

```json
"contributes": {
  "icons": {
        "distro-ubuntu": {
            "description": "Ubuntu icon",
            "default": {
                "fontPath": "./distroicons.woff",
                "fontCharacter": "\\E001"
            }
        },
        "distro-fedora": {
            "description": "Ubuntu icon",
            "default": {
                "fontPath": "./distroicons.woff",
                "fontCharacter": "\\E002"
            }
        }
    }
}
```

Product icon themes can redefine the icon (if they know about the icon ID).

## Icon Listing

Below is a listing of the built-in product icons by identifier.

The ID of the icon identifies the location where the icon is used. The default codicon ID describes which icon from the codicon library is used by default, and the preview shows what that icon looks like.

[Product Icon Themes][LN546] can replace each icon individually, as well as all icons from the codicon library.

<div id="codicon-listing">

| preview     | identifier                        | default codicon ID                | description
| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |
|<i class="codicon codicon-account"></i>|accounts-view-bar-icon|account|Accounts icon in the view bar.|
|<i class="codicon codicon-activate-breakpoints"></i>|breakpoints-activate|activate-breakpoints|Icon for the activate action in the breakpoints view.|
|<i class="codicon codicon-close-all"></i>|breakpoints-remove-all|close-all|Icon for the Remove All action in the breakpoints view.|
|<i class="codicon codicon-debug-alt"></i>|breakpoints-view-icon|debug-alt|View icon of the breakpoints view.|
|<i class="codicon codicon-call-incoming"></i>|callhierarchy-incoming|call-incoming|Icon for incoming calls in the call hierarchy view.|
|<i class="codicon codicon-call-outgoing"></i>|callhierarchy-outgoing|call-outgoing|Icon for outgoing calls in the call hierarchy view.|
|<i class="codicon codicon-debug-alt"></i>|callstack-view-icon|debug-alt|View icon of the call stack view.|
|<i class="codicon codicon-bug"></i>|callstack-view-session|bug|Icon for the session icon in the call stack view.|
|<i class="codicon codicon-comment-discussion"></i>|chat-editor-label-icon|comment-discussion|Icon of the chat editor label.|
|<i class="codicon codicon-comment-discussion"></i>|comments-view-icon|comment-discussion|View icon of the comments view.|
|<i class="codicon codicon-debug-breakpoint"></i>|debug-breakpoint|debug-breakpoint|Icon for breakpoints.|
|<i class="codicon codicon-debug-breakpoint-conditional"></i>|debug-breakpoint-conditional|debug-breakpoint-conditional|Icon for conditional breakpoints.|
|<i class="codicon codicon-debug-breakpoint-conditional-disabled"></i>|debug-breakpoint-conditional-disabled|debug-breakpoint-conditional-disabled|Icon for disabled conditional breakpoints.|
|<i class="codicon codicon-debug-breakpoint-conditional-unverified"></i>|debug-breakpoint-conditional-unverified|debug-breakpoint-conditional-unverified|Icon for unverified conditional breakpoints.|
|<i class="codicon codicon-debug-breakpoint-data"></i>|debug-breakpoint-data|debug-breakpoint-data|Icon for data breakpoints.|
|<i class="codicon codicon-debug-breakpoint-data-disabled"></i>|debug-breakpoint-data-disabled|debug-breakpoint-data-disabled|Icon for disabled data breakpoints.|
|<i class="codicon codicon-debug-breakpoint-data-unverified"></i>|debug-breakpoint-data-unverified|debug-breakpoint-data-unverified|Icon for unverified data breakpoints.|
|<i class="codicon codicon-debug-breakpoint-disabled"></i>|debug-breakpoint-disabled|debug-breakpoint-disabled|Icon for disabled breakpoints.|
|<i class="codicon codicon-debug-breakpoint-function"></i>|debug-breakpoint-function|debug-breakpoint-function|Icon for function breakpoints.|
|<i class="codicon codicon-debug-breakpoint-function-disabled"></i>|debug-breakpoint-function-disabled|debug-breakpoint-function-disabled|Icon for disabled function breakpoints.|
|<i class="codicon codicon-debug-breakpoint-function-unverified"></i>|debug-breakpoint-function-unverified|debug-breakpoint-function-unverified|Icon for unverified function breakpoints.|
|<i class="codicon codicon-debug-breakpoint-log"></i>|debug-breakpoint-log|debug-breakpoint-log|Icon for log breakpoints.|
|<i class="codicon codicon-debug-breakpoint-log-disabled"></i>|debug-breakpoint-log-disabled|debug-breakpoint-log-disabled|Icon for disabled log breakpoint.|
|<i class="codicon codicon-debug-breakpoint-log-unverified"></i>|debug-breakpoint-log-unverified|debug-breakpoint-log-unverified|Icon for unverified log breakpoints.|
|<i class="codicon codicon-debug-breakpoint-unsupported"></i>|debug-breakpoint-unsupported|debug-breakpoint-unsupported|Icon for unsupported breakpoints.|
|<i class="codicon codicon-debug-breakpoint-unverified"></i>|debug-breakpoint-unverified|debug-breakpoint-unverified|Icon for unverified breakpoints.|
|<i class="codicon codicon-collapse-all"></i>|debug-collapse-all|collapse-all|Icon for the collapse all action in the debug views.|
|<i class="codicon codicon-gear"></i>|debug-configure|gear|Icon for the debug configure action.|
|<i class="codicon codicon-debug-console"></i>|debug-console|debug-console|Icon for the debug console open action.|
|<i class="codicon codicon-clear-all"></i>|debug-console-clear-all|clear-all|Icon for the clear all action in the debug console.|
|<i class="codicon codicon-arrow-small-right"></i>|debug-console-evaluation-input|arrow-small-right|Icon for the debug evaluation input marker.|
|<i class="codicon codicon-chevron-right"></i>|debug-console-evaluation-prompt|chevron-right|Icon for the debug evaluation prompt.|
|<i class="codicon codicon-debug-console"></i>|debug-console-view-icon|debug-console|View icon of the debug console view.|
|<i class="codicon codicon-debug-continue"></i>|debug-continue|debug-continue|Icon for the debug continue action.|
|<i class="codicon codicon-debug-disconnect"></i>|debug-disconnect|debug-disconnect|Icon for the debug disconnect action.|
|<i class="codicon codicon-gripper"></i>|debug-gripper|gripper|Icon for the debug bar gripper.|
|<i class="codicon codicon-debug-hint"></i>|debug-hint|debug-hint|Icon for breakpoint hints shown on hover in editor glyph margin.|
|<i class="codicon codicon-debug-pause"></i>|debug-pause|debug-pause|Icon for the debug pause action.|
|<i class="codicon codicon-debug-restart"></i>|debug-restart|debug-restart|Icon for the debug restart action.|
|<i class="codicon codicon-debug-restart-frame"></i>|debug-restart-frame|debug-restart-frame|Icon for the debug restart frame action.|
|<i class="codicon codicon-debug-reverse-continue"></i>|debug-reverse-continue|debug-reverse-continue|Icon for the debug reverse continue action.|
|<i class="codicon codicon-debug-stackframe"></i>|debug-stackframe|debug-stackframe|Icon for a stackframe shown in the editor glyph margin.|
|<i class="codicon codicon-debug-stackframe-focused"></i>|debug-stackframe-focused|debug-stackframe-focused|Icon for a focused stackframe  shown in the editor glyph margin.|
|<i class="codicon codicon-debug-start"></i>|debug-start|debug-start|Icon for the debug start action.|
|<i class="codicon codicon-debug-step-back"></i>|debug-step-back|debug-step-back|Icon for the debug step back action.|
|<i class="codicon codicon-debug-step-into"></i>|debug-step-into|debug-step-into|Icon for the debug step into action.|
|<i class="codicon codicon-debug-step-out"></i>|debug-step-out|debug-step-out|Icon for the debug step out action.|
|<i class="codicon codicon-debug-step-over"></i>|debug-step-over|debug-step-over|Icon for the debug step over action.|
|<i class="codicon codicon-debug-stop"></i>|debug-stop|debug-stop|Icon for the debug stop action.|
|<i class="codicon codicon-window"></i>|default-view-icon|window|Default view icon.|
|<i class="codicon codicon-arrow-down"></i>|diff-editor-next-change|arrow-down|Icon for the next change action in the diff editor.|
|<i class="codicon codicon-arrow-up"></i>|diff-editor-previous-change|arrow-up|Icon for the previous change action in the diff editor.|
|<i class="codicon codicon-whitespace"></i>|diff-editor-toggle-whitespace|whitespace|Icon for the toggle whitespace action in the diff editor.|
|<i class="codicon codicon-add"></i>|diff-insert|add|Line decoration for inserts in the diff editor.|
|<i class="codicon codicon-remove"></i>|diff-remove|remove|Line decoration for removals in the diff editor.|
|<i class="codicon codicon-close"></i>|diff-review-close|close|Icon for 'Close' in diff review.|
|<i class="codicon codicon-add"></i>|diff-review-insert|add|Icon for 'Insert' in diff review.|
|<i class="codicon codicon-remove"></i>|diff-review-remove|remove|Icon for 'Remove' in diff review.|
|<i class="codicon codicon-debug"></i>|disassembly-editor-label-icon|debug|Icon of the disassembly editor label.|
|<i class="codicon codicon-files"></i>|explorer-view-icon|files|View icon of the explorer view.|
|<i class="codicon codicon-clear-all"></i>|extensions-clear-search-results|clear-all|Icon for the 'Clear Search Result' action in the extensions view.|
|<i class="codicon codicon-pencil"></i>|extensions-configure-recommended|pencil|Icon for the 'Configure Recommended Extensions' action in the extensions view.|
|<i class="codicon codicon-extensions"></i>|extensions-editor-label-icon|extensions|Icon of the extension editor label.|
|<i class="codicon codicon-filter"></i>|extensions-filter|filter|Icon for the 'Filter' action in the extensions view.|
|<i class="codicon codicon-info"></i>|extensions-info-message|info|Icon shown with an info message in the extensions editor.|
|<i class="codicon codicon-cloud-download"></i>|extensions-install-count|cloud-download|Icon shown along with the install count in the extensions view and editor.|
|<i class="codicon codicon-cloud-download"></i>|extensions-install-local-in-remote|cloud-download|Icon for the 'Install Local Extension in Remote' action in the extensions view.|
|<i class="codicon codicon-cloud-download"></i>|extensions-install-workspace-recommended|cloud-download|Icon for the 'Install Workspace Recommended Extensions' action in the extensions view.|
|<i class="codicon codicon-gear"></i>|extensions-manage|gear|Icon for the 'Manage' action in the extensions view.|
|<i class="codicon codicon-star"></i>|extensions-rating|star|Icon shown along with the rating in the extensions view and editor.|
|<i class="codicon codicon-refresh"></i>|extensions-refresh|refresh|Icon for the 'Refresh' action in the extensions view.|
|<i class="codicon codicon-remote"></i>|extensions-remote|remote|Icon to indicate that an extension is remote in the extensions view and editor.|
|<i class="codicon codicon-star-empty"></i>|extensions-star-empty|star-empty|Empty star icon used for the rating in the extensions editor.|
|<i class="codicon codicon-star-full"></i>|extensions-star-full|star-full|Full star icon used for the rating in the extensions editor.|
|<i class="codicon codicon-star-half"></i>|extensions-star-half|star-half|Half star icon used for the rating in the extensions editor.|
|<i class="codicon codicon-sync"></i>|extensions-sync-enabled|sync|Icon to indicate that an extension is synced.|
|<i class="codicon codicon-sync-ignored"></i>|extensions-sync-ignored|sync-ignored|Icon to indicate that an extension is ignored when syncing.|
|<i class="codicon codicon-extensions"></i>|extensions-view-icon|extensions|View icon of the extensions view.|
|<i class="codicon codicon-warning"></i>|extensions-warning-message|warning|Icon shown with a warning message in the extensions editor.|
|<i class="codicon codicon-chevron-right"></i>|find-collapsed|chevron-right|Icon to indicate that the editor find widget is collapsed.|
|<i class="codicon codicon-chevron-down"></i>|find-expanded|chevron-down|Icon to indicate that the editor find widget is expanded.|
|<i class="codicon codicon-arrow-down"></i>|find-next-match|arrow-down|Icon for 'Find Next' in the editor find widget.|
|<i class="codicon codicon-arrow-up"></i>|find-previous-match|arrow-up|Icon for 'Find Previous' in the editor find widget.|
|<i class="codicon codicon-replace"></i>|find-replace|replace|Icon for 'Replace' in the editor find widget.|
|<i class="codicon codicon-replace-all"></i>|find-replace-all|replace-all|Icon for 'Replace All' in the editor find widget.|
|<i class="codicon codicon-selection"></i>|find-selection|selection|Icon for 'Find in Selection' in the editor find widget.|
|<i class="codicon codicon-chevron-right"></i>|folding-collapsed|chevron-right|Icon for collapsed ranges in the editor glyph margin.|
|<i class="codicon codicon-chevron-down"></i>|folding-expanded|chevron-down|Icon for expanded ranges in the editor glyph margin.|
|<i class="codicon codicon-lightbulb"></i>|getting-started-beginner|lightbulb|Icon used for the beginner category of getting started|
|<i class="codicon codicon-github"></i>|getting-started-codespaces|github|Icon used for the codespaces category of getting started|
|<i class="codicon codicon-pass-filled"></i>|getting-started-item-checked|pass-filled|Used to represent getting started items which have been completed|
|<i class="codicon codicon-circle-large-outline"></i>|getting-started-item-unchecked|circle-large-outline|Used to represent getting started items which have not been completed|
|<i class="codicon codicon-heart"></i>|getting-started-setup|heart|Icon used for the setup category of getting started|
|<i class="codicon codicon-arrow-down"></i>|goto-next-location|arrow-down|Icon for goto next editor location.|
|<i class="codicon codicon-arrow-up"></i>|goto-previous-location|arrow-up|Icon for goto previous editor location.|
|<i class="codicon codicon-add"></i>|keybindings-add|add|Icon for the add action in the keybinding UI.|
|<i class="codicon codicon-edit"></i>|keybindings-edit|edit|Icon for the edit action in the keybinding UI.|
|<i class="codicon codicon-keyboard"></i>|keybindings-editor-label-icon|keyboard|Icon of the keybindings editor label.|
|<i class="codicon codicon-record-keys"></i>|keybindings-record-keys|record-keys|Icon for the 'record keys' action in the keybinding UI.|
|<i class="codicon codicon-sort-precedence"></i>|keybindings-sort|sort-precedence|Icon for the 'sort by precedence' toggle in the keybinding UI.|
|<i class="codicon codicon-debug-alt"></i>|loaded-scripts-view-icon|debug-alt|View icon of the loaded scripts view.|
|<i class="codicon codicon-chevron-down"></i>|marker-navigation-next|chevron-down|Icon for goto next marker.|
|<i class="codicon codicon-chevron-up"></i>|marker-navigation-previous|chevron-up|Icon for goto previous marker.|
|<i class="codicon codicon-filter"></i>|markers-view-filter|filter|Icon for the filter configuration in the markers view.|
|<i class="codicon codicon-warning"></i>|markers-view-icon|warning|View icon of the markers view.|
|<i class="codicon codicon-chevron-down"></i>|markers-view-multi-line-collapsed|chevron-down|Icon indicating that multiple lines are collapsed in the markers view.|
|<i class="codicon codicon-chevron-up"></i>|markers-view-multi-line-expanded|chevron-up|Icon indicating that multiple lines are shown in the markers view.|
|<i class="codicon codicon-diff-multiple"></i>|multi-diff-editor-label-icon|diff-multiple|Icon of the multi diff editor label.|
|<i class="codicon codicon-clear-all"></i>|notebook-clear|clear-all|Icon to clear cell outputs in notebook editors.|
|<i class="codicon codicon-chevron-right"></i>|notebook-collapsed|chevron-right|Icon to annotate a collapsed section in notebook editors.|
|<i class="codicon codicon-trash"></i>|notebook-delete-cell|trash|Icon to delete a cell in notebook editors.|
|<i class="codicon codicon-pencil"></i>|notebook-edit|pencil|Icon to edit a cell in notebook editors.|
|<i class="codicon codicon-play"></i>|notebook-execute|play|Icon to execute in notebook editors.|
|<i class="codicon codicon-run-all"></i>|notebook-execute-all|run-all|Icon to execute all cells in notebook editors.|
|<i class="codicon codicon-chevron-down"></i>|notebook-expanded|chevron-down|Icon to annotate an expanded section in notebook editors.|
|<i class="codicon codicon-settings-gear"></i>|notebook-kernel-configure|settings-gear|Configure icon in kernel configuration widget in notebook editors.|
|<i class="codicon codicon-server-environment"></i>|notebook-kernel-select|server-environment|Configure icon to select a kernel in notebook editors.|
|<i class="codicon codicon-code"></i>|notebook-mimetype|code|Icon for a mime type in notebook editors.|
|<i class="codicon codicon-arrow-down"></i>|notebook-move-down|arrow-down|Icon to move down a cell in notebook editors.|
|<i class="codicon codicon-arrow-up"></i>|notebook-move-up|arrow-up|Icon to move up a cell in notebook editors.|
|<i class="codicon codicon-file-code"></i>|notebook-open-as-text|file-code|Icon to open the notebook in a text editor.|
|<i class="codicon codicon-preview"></i>|notebook-render-output|preview|Icon to render output in diff editor.|
|<i class="codicon codicon-discard"></i>|notebook-revert|discard|Icon to revert in notebook editors.|
|<i class="codicon codicon-split-vertical"></i>|notebook-split-cell|split-vertical|Icon to split a cell in notebook editors.|
|<i class="codicon codicon-error"></i>|notebook-state-error|error|Icon to indicate an error state in notebook editors.|
|<i class="codicon codicon-check"></i>|notebook-state-success|check|Icon to indicate a success state in notebook editors.|
|<i class="codicon codicon-primitive-square"></i>|notebook-stop|primitive-square|Icon to stop an execution in notebook editors.|
|<i class="codicon codicon-check"></i>|notebook-stop-edit|check|Icon to stop editing a cell in notebook editors.|
|<i class="codicon codicon-unfold"></i>|notebook-unfold|unfold|Icon to unfold a cell in notebook editors.|
|<i class="codicon codicon-close"></i>|notifications-clear|close|Icon for the clear action in notifications.|
|<i class="codicon codicon-clear-all"></i>|notifications-clear-all|clear-all|Icon for the clear all action in notifications.|
|<i class="codicon codicon-chevron-down"></i>|notifications-collapse|chevron-down|Icon for the collapse action in notifications.|
|<i class="codicon codicon-gear"></i>|notifications-configure|gear|Icon for the configure action in notifications.|
|<i class="codicon codicon-chevron-up"></i>|notifications-expand|chevron-up|Icon for the expand action in notifications.|
|<i class="codicon codicon-chevron-down"></i>|notifications-hide|chevron-down|Icon for the hide action in notifications.|
|<i class="codicon codicon-book"></i>|open-editors-view-icon|book|View icon of the open editors view.|
|<i class="codicon codicon-symbol-class"></i>|outline-view-icon|symbol-class|View icon of the outline view.|
|<i class="codicon codicon-output"></i>|output-view-icon|output|View icon of the output view.|
|<i class="codicon codicon-close"></i>|panel-close|close|Icon to close a panel.|
|<i class="codicon codicon-chevron-up"></i>|panel-maximize|chevron-up|Icon to maximize a panel.|
|<i class="codicon codicon-chevron-down"></i>|panel-restore|chevron-down|Icon to restore a panel.|
|<i class="codicon codicon-chevron-down"></i>|parameter-hints-next|chevron-down|Icon for show next parameter hint.|
|<i class="codicon codicon-chevron-up"></i>|parameter-hints-previous|chevron-up|Icon for show previous parameter hint.|
|<i class="codicon codicon-plus"></i>|ports-forward-icon|plus|Icon for the forward action.|
|<i class="codicon codicon-globe"></i>|ports-open-browser-icon|globe|Icon for the open browser action.|
|<i class="codicon codicon-x"></i>|ports-stop-forward-icon|x|Icon for the stop forwarding action.|
|<i class="codicon codicon-plug"></i>|ports-view-icon|plug|View icon of the remote ports view.|
|<i class="codicon codicon-clear-all"></i>|preferences-clear-input|clear-all|Icon for clear input in the settings and keybinding UI.|
|<i class="codicon codicon-go-to-file"></i>|preferences-open-settings|go-to-file|Icon for open settings commands.|
|<i class="codicon codicon-lock"></i>|private-ports-view-icon|lock|Icon representing a private remote port.|
|<i class="codicon codicon-eye"></i>|public-ports-view-icon|eye|Icon representing a public remote port.|
|<i class="codicon codicon-lightbulb"></i>|refactor-preview-view-icon|lightbulb|View icon of the refactor preview view.|
|<i class="codicon codicon-book"></i>|remote-explorer-documentation|book|Documentation icon in the remote explorer view.|
|<i class="codicon codicon-twitter"></i>|remote-explorer-feedback|twitter|Feedback icon in the remote explorer view.|
|<i class="codicon codicon-star"></i>|remote-explorer-get-started|star|Getting started icon in the remote explorer view.|
|<i class="codicon codicon-comment"></i>|remote-explorer-report-issues|comment|Report issue icon in the remote explorer view.|
|<i class="codicon codicon-issues"></i>|remote-explorer-review-issues|issues|Review issue icon in the remote explorer view.|
|<i class="codicon codicon-remote-explorer"></i>|remote-explorer-view-icon|remote-explorer|View icon of the remote explorer view.|
|<i class="codicon codicon-chevron-up"></i>|review-comment-collapse|chevron-up|Icon to collapse a review comment.|
|<i class="codicon codicon-debug-alt"></i>|run-view-icon|debug-alt|View icon of the Run and Debug view.|
|<i class="codicon codicon-extensions"></i>|runtime-extensions-editor-label-icon|extensions|Icon of the runtime extensions editor label.|
|<i class="codicon codicon-clear-all"></i>|search-clear-results|clear-all|Icon for clear results in the search view.|
|<i class="codicon codicon-collapse-all"></i>|search-collapse-results|collapse-all|Icon for collapse results in the search view.|
|<i class="codicon codicon-ellipsis"></i>|search-details|ellipsis|Icon to make search details visible.|
|<i class="codicon codicon-search"></i>|search-editor-label-icon|search|Icon of the search editor label.|
|<i class="codicon codicon-expand-all"></i>|search-expand-results|expand-all|Icon for expand results in the search view.|
|<i class="codicon codicon-chevron-right"></i>|search-hide-replace|chevron-right|Icon to collapse the replace section in the search view.|
|<i class="codicon codicon-new-file"></i>|search-new-editor|new-file|Icon for the action to open a new search editor.|
|<i class="codicon codicon-refresh"></i>|search-refresh|refresh|Icon for refresh in the search view.|
|<i class="codicon codicon-close"></i>|search-remove|close|Icon to remove a search result.|
|<i class="codicon codicon-replace"></i>|search-replace|replace|Icon for replace in the search view.|
|<i class="codicon codicon-replace-all"></i>|search-replace-all|replace-all|Icon for replace all in the search view.|
|<i class="codicon codicon-list-selection"></i>|search-show-context|list-selection|Icon for toggle the context in the search editor.|
|<i class="codicon codicon-chevron-down"></i>|search-show-replace|chevron-down|Icon to expand the replace section in the search view.|
|<i class="codicon codicon-search-stop"></i>|search-stop|search-stop|Icon for stop in the search view.|
|<i class="codicon codicon-search"></i>|search-view-icon|search|View icon of the search view.|
|<i class="codicon codicon-add"></i>|settings-add|add|Icon for the add action in the Settings UI.|
|<i class="codicon codicon-discard"></i>|settings-discard|discard|Icon for the discard action in the Settings UI.|
|<i class="codicon codicon-edit"></i>|settings-edit|edit|Icon for the edit action in the Settings UI.|
|<i class="codicon codicon-settings"></i>|settings-editor-label-icon|settings|Icon of the settings editor label.|
|<i class="codicon codicon-triangle-down"></i>|settings-folder-dropdown|triangle-down|Icon for the folder dropdown button in the split JSON Settings editor.|
|<i class="codicon codicon-chevron-right"></i>|settings-group-collapsed|chevron-right|Icon for a collapsed section in the split JSON Settings editor.|
|<i class="codicon codicon-chevron-down"></i>|settings-group-expanded|chevron-down|Icon for an expanded section in the split JSON Settings editor.|
|<i class="codicon codicon-gear"></i>|settings-more-action|gear|Icon for the 'more actions' action in the Settings UI.|
|<i class="codicon codicon-close"></i>|settings-remove|close|Icon for the remove action in the Settings UI.|
|<i class="codicon codicon-sync"></i>|settings-sync-view-icon|sync|View icon of the Settings Sync view.|
|<i class="codicon codicon-settings-gear"></i>|settings-view-bar-icon|settings-gear|Settings icon in the view bar.|
|<i class="codicon codicon-source-control"></i>|source-control-view-icon|source-control|View icon of the Source Control view.|
|<i class="codicon codicon-chevron-right"></i>|suggest-more-info|chevron-right|Icon for more information in the suggest widget.|
|<i class="codicon codicon-gear"></i>|tasks-list-configure|gear|Configuration icon in the tasks selection list.|
|<i class="codicon codicon-close"></i>|tasks-remove|close|Icon for remove in the tasks selection list.|
|<i class="codicon codicon-trash"></i>|terminal-kill|trash|Icon for killing a terminal instance.|
|<i class="codicon codicon-add"></i>|terminal-new|add|Icon for creating a new terminal instance.|
|<i class="codicon codicon-gear"></i>|terminal-rename|gear|Icon for rename in the terminal quick menu.|
|<i class="codicon codicon-terminal"></i>|terminal-view-icon|terminal|View icon of the terminal view.|
|<i class="codicon codicon-beaker"></i>|test-view-icon|beaker|View icon of the test view.|
|<i class="codicon codicon-close"></i>|testing-cancel-icon|close|Icon to cancel ongoing test runs.|
|<i class="codicon codicon-debug-alt"></i>|testing-debug-icon|debug-alt|Icon of the "debug test" action.|
|<i class="codicon codicon-warning"></i>|testing-error-icon|warning|Icon shown for tests that have an error.|
|<i class="codicon codicon-close"></i>|testing-failed-icon|close|Icon shown for tests that failed.|
|<i class="codicon codicon-pass"></i>|testing-passed-icon|pass|Icon shown for tests that passed.|
|<i class="codicon codicon-watch"></i>|testing-queued-icon|watch|Icon shown for tests that are queued.|
|<i class="codicon codicon-run-all"></i>|testing-run-all-icon|run-all|Icon of the "run all tests" action.|
|<i class="codicon codicon-run"></i>|testing-run-icon|run|Icon of the "run test" action.|
|<i class="codicon codicon-list-tree"></i>|testing-show-as-list-icon|list-tree|Icon shown when the test explorer is disabled as a tree.|
|<i class="codicon codicon-debug-step-over"></i>|testing-skipped-icon|debug-step-over|Icon shown for tests that are skipped.|
|<i class="codicon codicon-circle-outline"></i>|testing-unset-icon|circle-outline|Icon shown for tests that are in an unset state.|
|<i class="codicon codicon-history"></i>|timeline-open|history|Icon for the open timeline action.|
|<i class="codicon codicon-pin"></i>|timeline-pin|pin|Icon for the pin timeline action.|
|<i class="codicon codicon-refresh"></i>|timeline-refresh|refresh|Icon for the refresh timeline action.|
|<i class="codicon codicon-pinned"></i>|timeline-unpin|pinned|Icon for the unpin timeline action.|
|<i class="codicon codicon-history"></i>|timeline-view-icon|history|View icon of the timeline view.|
|<i class="codicon codicon-debug-alt"></i>|variables-view-icon|debug-alt|View icon of the variables view.|
|<i class="codicon codicon-chevron-right"></i>|view-pane-container-collapsed|chevron-right|Icon for a collapsed view pane container.|
|<i class="codicon codicon-chevron-down"></i>|view-pane-container-expanded|chevron-down|Icon for an expanded view pane container.|
|<i class="codicon codicon-add"></i>|watch-expressions-add|add|Icon for the add action in the watch view.|
|<i class="codicon codicon-add"></i>|watch-expressions-add-function-breakpoint|add|Icon for the add function breakpoint action in the watch view.|
|<i class="codicon codicon-close-all"></i>|watch-expressions-remove-all|close-all|Icon for the Remove All action in the watch view.|
|<i class="codicon codicon-debug-alt"></i>|watch-view-icon|debug-alt|View icon of the watch view.|
|<i class="codicon codicon-close"></i>|widget-close|close|Icon for the close action in widgets.|
|<i class="codicon codicon-shield"></i>|workspace-trust-editor-label-icon|shield|Icon of the workspace trust editor label.|

The Codicon library contains all the icons used in VS Code views, as well as a set of useful icons.

VS Code extensions can use these icons in labels, views, and trees.

| preview     | identifier
| ----------- | --------------------------------- |
|<i class="codicon codicon-account"></i>|account|
|<i class="codicon codicon-activate-breakpoints"></i>|activate-breakpoints|
|<i class="codicon codicon-add"></i>|add|
|<i class="codicon codicon-alert"></i>|alert|
|<i class="codicon codicon-archive"></i>|archive|
|<i class="codicon codicon-array"></i>|array|
|<i class="codicon codicon-arrow-both"></i>|arrow-both|
|<i class="codicon codicon-arrow-circle-down"></i>|arrow-circle-down|
|<i class="codicon codicon-arrow-circle-left"></i>|arrow-circle-left|
|<i class="codicon codicon-arrow-circle-right"></i>|arrow-circle-right|
|<i class="codicon codicon-arrow-circle-up"></i>|arrow-circle-up|
|<i class="codicon codicon-arrow-down"></i>|arrow-down|
|<i class="codicon codicon-arrow-left"></i>|arrow-left|
|<i class="codicon codicon-arrow-right"></i>|arrow-right|
|<i class="codicon codicon-arrow-small-down"></i>|arrow-small-down|
|<i class="codicon codicon-arrow-small-left"></i>|arrow-small-left|
|<i class="codicon codicon-arrow-small-right"></i>|arrow-small-right|
|<i class="codicon codicon-arrow-small-up"></i>|arrow-small-up|
|<i class="codicon codicon-arrow-swap"></i>|arrow-swap|
|<i class="codicon codicon-arrow-up"></i>|arrow-up|
|<i class="codicon codicon-azure-devops"></i>|azure-devops|
|<i class="codicon codicon-azure"></i>|azure|
|<i class="codicon codicon-beaker-stop"></i>|beaker-stop|
|<i class="codicon codicon-beaker"></i>|beaker|
|<i class="codicon codicon-bell"></i>|bell|
|<i class="codicon codicon-bell-dot"></i>|bell-dot|
|<i class="codicon codicon-bell-slash"></i>|bell-slash|
|<i class="codicon codicon-bell-slash-dot"></i>|bell-slash-dot|
|<i class="codicon codicon-bold"></i>|bold|
|<i class="codicon codicon-book"></i>|book|
|<i class="codicon codicon-bookmark"></i>|bookmark|
|<i class="codicon codicon-bracket-dot"></i>|bracket-dot|
|<i class="codicon codicon-bracket-error"></i>|bracket-error|
|<i class="codicon codicon-bracket"></i>|bracket|
|<i class="codicon codicon-briefcase"></i>|briefcase|
|<i class="codicon codicon-broadcast"></i>|broadcast|
|<i class="codicon codicon-browser"></i>|browser|
|<i class="codicon codicon-bug"></i>|bug|
|<i class="codicon codicon-calendar"></i>|calendar|
|<i class="codicon codicon-call-incoming"></i>|call-incoming|
|<i class="codicon codicon-call-outgoing"></i>|call-outgoing|
|<i class="codicon codicon-case-sensitive"></i>|case-sensitive|
|<i class="codicon codicon-check"></i>|check|
|<i class="codicon codicon-check-all"></i>|check-all|
|<i class="codicon codicon-checklist"></i>|checklist|
|<i class="codicon codicon-chevron-down"></i>|chevron-down|
|<i class="codicon codicon-chevron-left"></i>|chevron-left|
|<i class="codicon codicon-chevron-right"></i>|chevron-right|
|<i class="codicon codicon-chevron-up"></i>|chevron-up|
|<i class="codicon codicon-chip"></i>|chip|
|<i class="codicon codicon-chrome-close"></i>|chrome-close|
|<i class="codicon codicon-chrome-maximize"></i>|chrome-maximize|
|<i class="codicon codicon-chrome-minimize"></i>|chrome-minimize|
|<i class="codicon codicon-chrome-restore"></i>|chrome-restore|
|<i class="codicon codicon-circle-filled"></i>|circle-filled|
|<i class="codicon codicon-circle-large-filled"></i>|circle-large-filled|
|<i class="codicon codicon-circle-large-outline"></i>|circle-large-outline|
|<i class="codicon codicon-circle-outline"></i>|circle-outline|
|<i class="codicon codicon-circle-slash"></i>|circle-slash|
|<i class="codicon codicon-circuit-board"></i>|circuit-board|
|<i class="codicon codicon-clear-all"></i>|clear-all|
|<i class="codicon codicon-clippy"></i>|clippy|
|<i class="codicon codicon-clock"></i>|clock|
|<i class="codicon codicon-clone"></i>|clone|
|<i class="codicon codicon-close"></i>|close|
|<i class="codicon codicon-close-all"></i>|close-all|
|<i class="codicon codicon-close-dirty"></i>|close-dirty|
|<i class="codicon codicon-cloud"></i>|cloud|
|<i class="codicon codicon-cloud-download"></i>|cloud-download|
|<i class="codicon codicon-cloud-upload"></i>|cloud-upload|
|<i class="codicon codicon-code"></i>|code|
|<i class="codicon codicon-coffee"></i>|coffee|
|<i class="codicon codicon-collapse-all"></i>|collapse-all|
|<i class="codicon codicon-color-mode"></i>|color-mode|
|<i class="codicon codicon-combine"></i>|combine|
|<i class="codicon codicon-comment"></i>|comment|
|<i class="codicon codicon-comment-add"></i>|comment-add|
|<i class="codicon codicon-comment-discussion"></i>|comment-discussion|
|<i class="codicon codicon-comment-draft"></i>|comment-draft|
|<i class="codicon codicon-comment-unresolved"></i>|comment-unresolved|
|<i class="codicon codicon-compare-changes"></i>|compare-changes|
|<i class="codicon codicon-compass-active"></i>|compass-active|
|<i class="codicon codicon-compass-dot"></i>|compass-dot|
|<i class="codicon codicon-compass"></i>|compass|
|<i class="codicon codicon-console"></i>|console|
|<i class="codicon codicon-copilot"></i>|copilot|
|<i class="codicon codicon-credit-card"></i>|credit-card|
|<i class="codicon codicon-dash"></i>|dash|
|<i class="codicon codicon-dashboard"></i>|dashboard|
|<i class="codicon codicon-database"></i>|database|
|<i class="codicon codicon-debug-all"></i>|debug-all|
|<i class="codicon codicon-debug"></i>|debug|
|<i class="codicon codicon-debug-alt"></i>|debug-alt|
|<i class="codicon codicon-debug-alt-small"></i>|debug-alt-small|
|<i class="codicon codicon-debug-breakpoint"></i>|debug-breakpoint|
|<i class="codicon codicon-debug-breakpoint-conditional"></i>|debug-breakpoint-conditional|
|<i class="codicon codicon-debug-breakpoint-conditional-disabled"></i>|debug-breakpoint-conditional-disabled|
|<i class="codicon codicon-debug-breakpoint-conditional-unverified"></i>|debug-breakpoint-conditional-unverified|
|<i class="codicon codicon-debug-breakpoint-data"></i>|debug-breakpoint-data|
|<i class="codicon codicon-debug-breakpoint-data-disabled"></i>|debug-breakpoint-data-disabled|
|<i class="codicon codicon-debug-breakpoint-data-unverified"></i>|debug-breakpoint-data-unverified|
|<i class="codicon codicon-debug-breakpoint-disabled"></i>|debug-breakpoint-disabled|
|<i class="codicon codicon-debug-breakpoint-function"></i>|debug-breakpoint-function|
|<i class="codicon codicon-debug-breakpoint-function-disabled"></i>|debug-breakpoint-function-disabled|
|<i class="codicon codicon-debug-breakpoint-function-unverified"></i>|debug-breakpoint-function-unverified|
|<i class="codicon codicon-debug-breakpoint-log"></i>|debug-breakpoint-log|
|<i class="codicon codicon-debug-breakpoint-log-disabled"></i>|debug-breakpoint-log-disabled|
|<i class="codicon codicon-debug-breakpoint-log-unverified"></i>|debug-breakpoint-log-unverified|
|<i class="codicon codicon-debug-breakpoint-unsupported"></i>|debug-breakpoint-unsupported|
|<i class="codicon codicon-debug-breakpoint-unverified"></i>|debug-breakpoint-unverified|
|<i class="codicon codicon-debug-console"></i>|debug-console|
|<i class="codicon codicon-debug-continue-small"></i>|debug-continue-small|
|<i class="codicon codicon-debug-continue"></i>|debug-continue|
|<i class="codicon codicon-debug-coverage"></i>|debug-coverage|
|<i class="codicon codicon-debug-disconnect"></i>|debug-disconnect|
|<i class="codicon codicon-debug-hint"></i>|debug-hint|
|<i class="codicon codicon-debug-line-by-line"></i>|debug-line-by-line|
|<i class="codicon codicon-debug-pause"></i>|debug-pause|
|<i class="codicon codicon-debug-rerun"></i>|debug-rerun|
|<i class="codicon codicon-debug-restart"></i>|debug-restart|
|<i class="codicon codicon-debug-restart-frame"></i>|debug-restart-frame|
|<i class="codicon codicon-debug-reverse-continue"></i>|debug-reverse-continue|
|<i class="codicon codicon-debug-stackframe"></i>|debug-stackframe|
|<i class="codicon codicon-debug-stackframe-active"></i>|debug-stackframe-active|
|<i class="codicon codicon-debug-stackframe-dot"></i>|debug-stackframe-dot|
|<i class="codicon codicon-debug-stackframe-focused"></i>|debug-stackframe-focused|
|<i class="codicon codicon-debug-start"></i>|debug-start|
|<i class="codicon codicon-debug-step-back"></i>|debug-step-back|
|<i class="codicon codicon-debug-step-into"></i>|debug-step-into|
|<i class="codicon codicon-debug-step-out"></i>|debug-step-out|
|<i class="codicon codicon-debug-step-over"></i>|debug-step-over|
|<i class="codicon codicon-debug-stop"></i>|debug-stop|
|<i class="codicon codicon-desktop-download"></i>|desktop-download|
|<i class="codicon codicon-device-camera"></i>|device-camera|
|<i class="codicon codicon-device-camera-video"></i>|device-camera-video|
|<i class="codicon codicon-device-desktop"></i>|device-desktop|
|<i class="codicon codicon-device-mobile"></i>|device-mobile|
|<i class="codicon codicon-diff"></i>|diff|
|<i class="codicon codicon-diff-added"></i>|diff-added|
|<i class="codicon codicon-diff-ignored"></i>|diff-ignored|
|<i class="codicon codicon-diff-modified"></i>|diff-modified|
|<i class="codicon codicon-diff-removed"></i>|diff-removed|
|<i class="codicon codicon-diff-renamed"></i>|diff-renamed|
|<i class="codicon codicon-discard"></i>|discard|
|<i class="codicon codicon-edit"></i>|edit|
|<i class="codicon codicon-editor-layout"></i>|editor-layout|
|<i class="codicon codicon-ellipsis"></i>|ellipsis|
|<i class="codicon codicon-empty-window"></i>|empty-window|
|<i class="codicon codicon-error-small"></i>|error-small|
|<i class="codicon codicon-error"></i>|error|
|<i class="codicon codicon-exclude"></i>|exclude|
|<i class="codicon codicon-expand-all"></i>|expand-all|
|<i class="codicon codicon-export"></i>|export|
|<i class="codicon codicon-extensions"></i>|extensions|
|<i class="codicon codicon-eye"></i>|eye|
|<i class="codicon codicon-eye-closed"></i>|eye-closed|
|<i class="codicon codicon-eye-unwatch"></i>|eye-unwatch|
|<i class="codicon codicon-eye-watch"></i>|eye-watch|
|<i class="codicon codicon-feedback"></i>|feedback|
|<i class="codicon codicon-file"></i>|file|
|<i class="codicon codicon-file-add"></i>|file-add|
|<i class="codicon codicon-file-binary"></i>|file-binary|
|<i class="codicon codicon-file-code"></i>|file-code|
|<i class="codicon codicon-file-directory"></i>|file-directory|
|<i class="codicon codicon-file-directory-create"></i>|file-directory-create|
|<i class="codicon codicon-file-media"></i>|file-media|
|<i class="codicon codicon-file-pdf"></i>|file-pdf|
|<i class="codicon codicon-file-submodule"></i>|file-submodule|
|<i class="codicon codicon-file-symlink-directory"></i>|file-symlink-directory|
|<i class="codicon codicon-file-symlink-file"></i>|file-symlink-file|
|<i class="codicon codicon-file-text"></i>|file-text|
|<i class="codicon codicon-file-zip"></i>|file-zip|
|<i class="codicon codicon-files"></i>|files|
|<i class="codicon codicon-filter-filled"></i>|filter-filled|
|<i class="codicon codicon-filter"></i>|filter|
|<i class="codicon codicon-flame"></i>|flame|
|<i class="codicon codicon-fold"></i>|fold|
|<i class="codicon codicon-fold-down"></i>|fold-down|
|<i class="codicon codicon-fold-up"></i>|fold-up|
|<i class="codicon codicon-folder"></i>|folder|
|<i class="codicon codicon-folder-active"></i>|folder-active|
|<i class="codicon codicon-folder-library"></i>|folder-library|
|<i class="codicon codicon-folder-opened"></i>|folder-opened|
|<i class="codicon codicon-game"></i>|game|
|<i class="codicon codicon-gather"></i>|gather|
|<i class="codicon codicon-gear"></i>|gear|
|<i class="codicon codicon-gift"></i>|gift|
|<i class="codicon codicon-gist"></i>|gist|
|<i class="codicon codicon-gist-fork"></i>|gist-fork|
|<i class="codicon codicon-gist-new"></i>|gist-new|
|<i class="codicon codicon-gist-private"></i>|gist-private|
|<i class="codicon codicon-gist-secret"></i>|gist-secret|
|<i class="codicon codicon-git-branch"></i>|git-branch|
|<i class="codicon codicon-git-branch-create"></i>|git-branch-create|
|<i class="codicon codicon-git-branch-delete"></i>|git-branch-delete|
|<i class="codicon codicon-git-commit"></i>|git-commit|
|<i class="codicon codicon-git-compare"></i>|git-compare|
|<i class="codicon codicon-git-fetch"></i>|git-fetch|
|<i class="codicon codicon-git-fork-private"></i>|git-fork-private|
|<i class="codicon codicon-git-merge"></i>|git-merge|
|<i class="codicon codicon-git-pull-request"></i>|git-pull-request|
|<i class="codicon codicon-git-pull-request-abandoned"></i>|git-pull-request-abandoned|
|<i class="codicon codicon-git-pull-request-closed"></i>|git-pull-request-closed|
|<i class="codicon codicon-git-pull-request-create"></i>|git-pull-request-create|
|<i class="codicon codicon-git-pull-request-draft"></i>|git-pull-request-draft|
|<i class="codicon codicon-git-pull-request-new-changes"></i>|git-pull-request-new-changes|
|<i class="codicon codicon-git-pull-request-go-to-changes"></i>|git-pull-request-go-to-changes|
|<i class="codicon codicon-github"></i>|github|
|<i class="codicon codicon-github-action"></i>|github-action|
|<i class="codicon codicon-github-alt"></i>|github-alt|
|<i class="codicon codicon-github-inverted"></i>|github-inverted|
|<i class="codicon codicon-globe"></i>|globe|
|<i class="codicon codicon-go-to-file"></i>|go-to-file|
|<i class="codicon codicon-grabber"></i>|grabber|
|<i class="codicon codicon-graph"></i>|graph|
|<i class="codicon codicon-graph-left"></i>|graph-left|
|<i class="codicon codicon-graph-line"></i>|graph-line|
|<i class="codicon codicon-graph-scatter"></i>|graph-scatter|
|<i class="codicon codicon-gripper"></i>|gripper|
|<i class="codicon codicon-group-by-ref-type"></i>|group-by-ref-type|
|<i class="codicon codicon-heart"></i>|heart|
|<i class="codicon codicon-history"></i>|history|
|<i class="codicon codicon-home"></i>|home|
|<i class="codicon codicon-horizontal-rule"></i>|horizontal-rule|
|<i class="codicon codicon-hubot"></i>|hubot|
|<i class="codicon codicon-inbox"></i>|inbox|
|<i class="codicon codicon-indent"></i>|indent|
|<i class="codicon codicon-info"></i>|info|
|<i class="codicon codicon-insert"></i>|insert|
|<i class="codicon codicon-inspect"></i>|inspect|
|<i class="codicon codicon-issue-closed"></i>|issue-closed|
|<i class="codicon codicon-issue-draft"></i>|issue-draft|
|<i class="codicon codicon-issue-opened"></i>|issue-opened|
|<i class="codicon codicon-issue-reopened"></i>|issue-reopened|
|<i class="codicon codicon-issues"></i>|issues|
|<i class="codicon codicon-italic"></i>|italic|
|<i class="codicon codicon-jersey"></i>|jersey|
|<i class="codicon codicon-json"></i>|json|
|<i class="codicon codicon-kebab-horizontal"></i>|kebab-horizontal|
|<i class="codicon codicon-kebab-vertical"></i>|kebab-vertical|
|<i class="codicon codicon-key"></i>|key|
|<i class="codicon codicon-keyboard"></i>|keyboard|
|<i class="codicon codicon-law"></i>|law|
|<i class="codicon codicon-layers-active"></i>|layers-active|
|<i class="codicon codicon-layers-dot"></i>|layers-dot|
|<i class="codicon codicon-layers"></i>|layers|
|<i class="codicon codicon-layout-activitybar-left"></i>|layout-activitybar-left|
|<i class="codicon codicon-layout-activitybar-right"></i>|layout-activitybar-right|
|<i class="codicon codicon-layout-centered"></i>|layout-centered|
|<i class="codicon codicon-layout-menubar"></i>|layout-menubar|
|<i class="codicon codicon-layout-panel-center"></i>|layout-panel-center|
|<i class="codicon codicon-layout-panel-justify"></i>|layout-panel-justify|
|<i class="codicon codicon-layout-panel-left"></i>|layout-panel-left|
|<i class="codicon codicon-layout-panel-right"></i>|layout-panel-right|
|<i class="codicon codicon-layout-panel"></i>|layout-panel|
|<i class="codicon codicon-layout-sidebar-left"></i>|layout-sidebar-left|
|<i class="codicon codicon-layout-sidebar-right"></i>|layout-sidebar-right|
|<i class="codicon codicon-layout-statusbar"></i>|layout-statusbar|
|<i class="codicon codicon-layout"></i>|layout|
|<i class="codicon codicon-library"></i>|library|
|<i class="codicon codicon-light-bulb"></i>|light-bulb|
|<i class="codicon codicon-lightbulb"></i>|lightbulb|
|<i class="codicon codicon-lightbulb-autofix"></i>|lightbulb-autofix|
|<i class="codicon codicon-link"></i>|link|
|<i class="codicon codicon-link-external"></i>|link-external|
|<i class="codicon codicon-list-filter"></i>|list-filter|
|<i class="codicon codicon-list-flat"></i>|list-flat|
|<i class="codicon codicon-list-ordered"></i>|list-ordered|
|<i class="codicon codicon-list-selection"></i>|list-selection|
|<i class="codicon codicon-list-tree"></i>|list-tree|
|<i class="codicon codicon-list-unordered"></i>|list-unordered|
|<i class="codicon codicon-live-share"></i>|live-share|
|<i class="codicon codicon-loading"></i>|loading|
|<i class="codicon codicon-location"></i>|location|
|<i class="codicon codicon-lock-small"></i>|lock-small|
|<i class="codicon codicon-lock"></i>|lock|
|<i class="codicon codicon-log-in"></i>|log-in|
|<i class="codicon codicon-log-out"></i>|log-out|
|<i class="codicon codicon-logo-github"></i>|logo-github|
|<i class="codicon codicon-magnet"></i>|magnet|
|<i class="codicon codicon-mail"></i>|mail|
|<i class="codicon codicon-mail-read"></i>|mail-read|
|<i class="codicon codicon-mail-reply"></i>|mail-reply|
|<i class="codicon codicon-mark-github"></i>|mark-github|
|<i class="codicon codicon-markdown"></i>|markdown|
|<i class="codicon codicon-megaphone"></i>|megaphone|
|<i class="codicon codicon-mention"></i>|mention|
|<i class="codicon codicon-menu"></i>|menu|
|<i class="codicon codicon-merge"></i>|merge|
|<i class="codicon codicon-mic"></i>|mic|
|<i class="codicon codicon-mic-filled"></i>|mic-filled|
|<i class="codicon codicon-microscope"></i>|microscope|
|<i class="codicon codicon-milestone"></i>|milestone|
|<i class="codicon codicon-mirror"></i>|mirror|
|<i class="codicon codicon-mirror-private"></i>|mirror-private|
|<i class="codicon codicon-mirror-public"></i>|mirror-public|
|<i class="codicon codicon-more"></i>|more|
|<i class="codicon codicon-mortar-board"></i>|mortar-board|
|<i class="codicon codicon-move"></i>|move|
|<i class="codicon codicon-multiple-windows"></i>|multiple-windows|
|<i class="codicon codicon-music"></i>|music|
|<i class="codicon codicon-mute"></i>|mute|
|<i class="codicon codicon-new-file"></i>|new-file|
|<i class="codicon codicon-new-folder"></i>|new-folder|
|<i class="codicon codicon-newline"></i>|newline|
|<i class="codicon codicon-no-newline"></i>|no-newline|
|<i class="codicon codicon-note"></i>|note|
|<i class="codicon codicon-notebook"></i>|notebook|
|<i class="codicon codicon-notebook-template"></i>|notebook-template|
|<i class="codicon codicon-octoface"></i>|octoface|
|<i class="codicon codicon-open-preview"></i>|open-preview|
|<i class="codicon codicon-organization"></i>|organization|
|<i class="codicon codicon-organization-filled"></i>|organization-filled|
|<i class="codicon codicon-organization-outline"></i>|organization-outline|
|<i class="codicon codicon-output"></i>|output|
|<i class="codicon codicon-package"></i>|package|
|<i class="codicon codicon-paintcan"></i>|paintcan|
|<i class="codicon codicon-pass"></i>|pass|
|<i class="codicon codicon-pass-filled"></i>|pass-filled|
|<i class="codicon codicon-pencil"></i>|pencil|
|<i class="codicon codicon-person"></i>|person|
|<i class="codicon codicon-person-add"></i>|person-add|
|<i class="codicon codicon-person-filled"></i>|person-filled|
|<i class="codicon codicon-person-follow"></i>|person-follow|
|<i class="codicon codicon-person-outline"></i>|person-outline|
|<i class="codicon codicon-pie-chart"></i>|pie-chart|
|<i class="codicon codicon-piano"></i>|piano|
|<i class="codicon codicon-pin"></i>|pin|
|<i class="codicon codicon-pinned"></i>|pinned|
|<i class="codicon codicon-pinned-dirty"></i>|pinned-dirty|
|<i class="codicon codicon-play"></i>|play|
|<i class="codicon codicon-play-circle"></i>|play-circle|
|<i class="codicon codicon-plug"></i>|plug|
|<i class="codicon codicon-plus"></i>|plus|
|<i class="codicon codicon-preserve-case"></i>|preserve-case|
|<i class="codicon codicon-preview"></i>|preview|
|<i class="codicon codicon-primitive-dot"></i>|primitive-dot|
|<i class="codicon codicon-primitive-square"></i>|primitive-square|
|<i class="codicon codicon-project"></i>|project|
|<i class="codicon codicon-pulse"></i>|pulse|
|<i class="codicon codicon-question"></i>|question|
|<i class="codicon codicon-quote"></i>|quote|
|<i class="codicon codicon-radio-tower"></i>|radio-tower|
|<i class="codicon codicon-reactions"></i>|reactions|
|<i class="codicon codicon-record"></i>|record|
|<i class="codicon codicon-record-keys"></i>|record-keys|
|<i class="codicon codicon-record-small"></i>|record-small|
|<i class="codicon codicon-redo"></i>|redo|
|<i class="codicon codicon-references"></i>|references|
|<i class="codicon codicon-refresh"></i>|refresh|
|<i class="codicon codicon-regex"></i>|regex|
|<i class="codicon codicon-remote"></i>|remote|
|<i class="codicon codicon-remote-explorer"></i>|remote-explorer|
|<i class="codicon codicon-remove"></i>|remove|
|<i class="codicon codicon-remove-close"></i>|remove-close|
|<i class="codicon codicon-repl"></i>|repl|
|<i class="codicon codicon-replace"></i>|replace|
|<i class="codicon codicon-replace-all"></i>|replace-all|
|<i class="codicon codicon-reply"></i>|reply|
|<i class="codicon codicon-repo"></i>|repo|
|<i class="codicon codicon-repo-clone"></i>|repo-clone|
|<i class="codicon codicon-repo-create"></i>|repo-create|
|<i class="codicon codicon-repo-delete"></i>|repo-delete|
|<i class="codicon codicon-repo-force-push"></i>|repo-force-push|
|<i class="codicon codicon-repo-forked"></i>|repo-forked|
|<i class="codicon codicon-repo-pull"></i>|repo-pull|
|<i class="codicon codicon-repo-push"></i>|repo-push|
|<i class="codicon codicon-repo-sync"></i>|repo-sync|
|<i class="codicon codicon-report"></i>|report|
|<i class="codicon codicon-request-changes"></i>|request-changes|
|<i class="codicon codicon-rocket"></i>|rocket|
|<i class="codicon codicon-root-folder"></i>|root-folder|
|<i class="codicon codicon-root-folder-opened"></i>|root-folder-opened|
|<i class="codicon codicon-rss"></i>|rss|
|<i class="codicon codicon-ruby"></i>|ruby|
|<i class="codicon codicon-run"></i>|run|
|<i class="codicon codicon-run-all"></i>|run-all|
|<i class="codicon codicon-run-above"></i>|run-above|
|<i class="codicon codicon-run-below"></i>|run-below|
|<i class="codicon codicon-run-errors"></i>|run-errors|
|<i class="codicon codicon-save"></i>|save|
|<i class="codicon codicon-save-all"></i>|save-all|
|<i class="codicon codicon-save-as"></i>|save-as|
|<i class="codicon codicon-screen-full"></i>|screen-full|
|<i class="codicon codicon-screen-normal"></i>|screen-normal|
|<i class="codicon codicon-search"></i>|search|
|<i class="codicon codicon-search-save"></i>|search-save|
|<i class="codicon codicon-search-stop"></i>|search-stop|
|<i class="codicon codicon-search-fuzzy"></i>|search-fuzzy|
|<i class="codicon codicon-selection"></i>|selection|
|<i class="codicon codicon-send"></i>|send|
|<i class="codicon codicon-server"></i>|server|
|<i class="codicon codicon-server-environment"></i>|server-environment|
|<i class="codicon codicon-server-process"></i>|server-process|
|<i class="codicon codicon-settings"></i>|settings|
|<i class="codicon codicon-settings-gear"></i>|settings-gear|
|<i class="codicon codicon-shield"></i>|shield|
|<i class="codicon codicon-sign-in"></i>|sign-in|
|<i class="codicon codicon-sign-out"></i>|sign-out|
|<i class="codicon codicon-smiley"></i>|smiley|
|<i class="codicon codicon-sparkle"></i>|sparkle|
|<i class="codicon codicon-sort-precedence"></i>|sort-precedence|
|<i class="codicon codicon-source-control"></i>|source-control|
|<i class="codicon codicon-split-horizontal"></i>|split-horizontal|
|<i class="codicon codicon-split-vertical"></i>|split-vertical|
|<i class="codicon codicon-squirrel"></i>|squirrel|
|<i class="codicon codicon-star"></i>|star|
|<i class="codicon codicon-star-add"></i>|star-add|
|<i class="codicon codicon-star-delete"></i>|star-delete|
|<i class="codicon codicon-star-empty"></i>|star-empty|
|<i class="codicon codicon-star-full"></i>|star-full|
|<i class="codicon codicon-star-half"></i>|star-half|
|<i class="codicon codicon-stop"></i>|stop|
|<i class="codicon codicon-stop-circle"></i>|stop-circle|
|<i class="codicon codicon-symbol-array"></i>|symbol-array|
|<i class="codicon codicon-symbol-boolean"></i>|symbol-boolean|
|<i class="codicon codicon-symbol-class"></i>|symbol-class|
|<i class="codicon codicon-symbol-color"></i>|symbol-color|
|<i class="codicon codicon-symbol-constant"></i>|symbol-constant|
|<i class="codicon codicon-symbol-constructor"></i>|symbol-constructor|
|<i class="codicon codicon-symbol-enum"></i>|symbol-enum|
|<i class="codicon codicon-symbol-enum-member"></i>|symbol-enum-member|
|<i class="codicon codicon-symbol-event"></i>|symbol-event|
|<i class="codicon codicon-symbol-field"></i>|symbol-field|
|<i class="codicon codicon-symbol-file"></i>|symbol-file|
|<i class="codicon codicon-symbol-folder"></i>|symbol-folder|
|<i class="codicon codicon-symbol-function"></i>|symbol-function|
|<i class="codicon codicon-symbol-interface"></i>|symbol-interface|
|<i class="codicon codicon-symbol-key"></i>|symbol-key|
|<i class="codicon codicon-symbol-keyword"></i>|symbol-keyword|
|<i class="codicon codicon-symbol-method"></i>|symbol-method|
|<i class="codicon codicon-symbol-misc"></i>|symbol-misc|
|<i class="codicon codicon-symbol-module"></i>|symbol-module|
|<i class="codicon codicon-symbol-namespace"></i>|symbol-namespace|
|<i class="codicon codicon-symbol-null"></i>|symbol-null|
|<i class="codicon codicon-symbol-number"></i>|symbol-number|
|<i class="codicon codicon-symbol-numeric"></i>|symbol-numeric|
|<i class="codicon codicon-symbol-object"></i>|symbol-object|
|<i class="codicon codicon-symbol-operator"></i>|symbol-operator|
|<i class="codicon codicon-symbol-package"></i>|symbol-package|
|<i class="codicon codicon-symbol-parameter"></i>|symbol-parameter|
|<i class="codicon codicon-symbol-property"></i>|symbol-property|
|<i class="codicon codicon-symbol-reference"></i>|symbol-reference|
|<i class="codicon codicon-symbol-ruler"></i>|symbol-ruler|
|<i class="codicon codicon-snake"></i>|snake|
|<i class="codicon codicon-symbol-snippet"></i>|symbol-snippet|
|<i class="codicon codicon-symbol-string"></i>|symbol-string|
|<i class="codicon codicon-symbol-struct"></i>|symbol-struct|
|<i class="codicon codicon-symbol-structure"></i>|symbol-structure|
|<i class="codicon codicon-symbol-text"></i>|symbol-text|
|<i class="codicon codicon-symbol-type-parameter"></i>|symbol-type-parameter|
|<i class="codicon codicon-symbol-unit"></i>|symbol-unit|
|<i class="codicon codicon-symbol-value"></i>|symbol-value|
|<i class="codicon codicon-symbol-variable"></i>|symbol-variable|
|<i class="codicon codicon-sync"></i>|sync|
|<i class="codicon codicon-sync-ignored"></i>|sync-ignored|
|<i class="codicon codicon-tag-add"></i>|tag-add|
|<i class="codicon codicon-tag-remove"></i>|tag-remove|
|<i class="codicon codicon-tag"></i>|tag|
|<i class="codicon codicon-target"></i>|target|
|<i class="codicon codicon-tasklist"></i>|tasklist|
|<i class="codicon codicon-telescope"></i>|telescope|
|<i class="codicon codicon-terminal-bash"></i>|terminal-bash|
|<i class="codicon codicon-terminal-cmd"></i>|terminal-cmd|
|<i class="codicon codicon-terminal-debian"></i>|terminal-debian|
|<i class="codicon codicon-terminal-linux"></i>|terminal-linux|
|<i class="codicon codicon-terminal-powershell"></i>|terminal-powershell|
|<i class="codicon codicon-terminal-tmux"></i>|terminal-tmux|
|<i class="codicon codicon-terminal-ubuntu"></i>|terminal-ubuntu|
|<i class="codicon codicon-terminal"></i>|terminal|
|<i class="codicon codicon-text-size"></i>|text-size|
|<i class="codicon codicon-three-bars"></i>|three-bars|
|<i class="codicon codicon-thumbsdown"></i>|thumbsdown|
|<i class="codicon codicon-thumbsdown-filled"></i>|thumbsdown-filled|
|<i class="codicon codicon-thumbsup"></i>|thumbsup|
|<i class="codicon codicon-thumbsup-filled"></i>|thumbsup-filled|
|<i class="codicon codicon-tools"></i>|tools|
|<i class="codicon codicon-trash"></i>|trash|
|<i class="codicon codicon-trashcan"></i>|trashcan|
|<i class="codicon codicon-triangle-down"></i>|triangle-down|
|<i class="codicon codicon-triangle-left"></i>|triangle-left|
|<i class="codicon codicon-triangle-right"></i>|triangle-right|
|<i class="codicon codicon-triangle-up"></i>|triangle-up|
|<i class="codicon codicon-twitter"></i>|twitter|
|<i class="codicon codicon-type-hierarchy-sub"></i>|type-hierarchy|
|<i class="codicon codicon-type-hierarchy-sub"></i>|type-hierarchy-sub|
|<i class="codicon codicon-type-hierarchy-super"></i>|type-hierarchy-super|
|<i class="codicon codicon-unfold"></i>|unfold|
|<i class="codicon codicon-ungroup-by-ref-type"></i>|ungroup-by-ref-type|
|<i class="codicon codicon-unlock"></i>|unlock|
|<i class="codicon codicon-unmute"></i>|unmute|
|<i class="codicon codicon-unverified"></i>|unverified|
|<i class="codicon codicon-variable"></i>|variable|
|<i class="codicon codicon-verified-filled"></i>|verified-filled|
|<i class="codicon codicon-verified"></i>|verified|
|<i class="codicon codicon-versions"></i>|versions|
|<i class="codicon codicon-vm"></i>|vm|
|<i class="codicon codicon-vm-active"></i>|vm-active|
|<i class="codicon codicon-vm-connect"></i>|vm-connect|
|<i class="codicon codicon-vm-outline"></i>|vm-outline|
|<i class="codicon codicon-vm-running"></i>|vm-running|
|<i class="codicon codicon-vr"></i>|vr|
|<i class="codicon codicon-warning"></i>|warning|
|<i class="codicon codicon-watch"></i>|watch|
|<i class="codicon codicon-whitespace"></i>|whitespace|
|<i class="codicon codicon-whole-word"></i>|whole-word|
|<i class="codicon codicon-window"></i>|window|
|<i class="codicon codicon-word-wrap"></i>|word-wrap|
|<i class="codicon codicon-workspace-trusted"></i>|workspace-trusted|
|<i class="codicon codicon-workspace-unknown"></i>|workspace-unknown|
|<i class="codicon codicon-workspace-untrusted"></i>|workspace-untrusted|
|<i class="codicon codicon-wrench"></i>|wrench|
|<i class="codicon codicon-wrench-subaction"></i>|wrench-subaction|
|<i class="codicon codicon-x"></i>|x|
|<i class="codicon codicon-zap"></i>|zap|
|<i class="codicon codicon-zoom-in"></i>|zoom-in|
|<i class="codicon codicon-zoom-out"></i>|zoom-out|
</div>



<a id="_api_references_document-selector" ></a>

# /api/references/document-selector
------------------------------------

    ---
    # DO NOT TOUCH — Managed by doc writer
    ContentId: f328d7e0-8982-4510-b7fb-975188eca502
    DateApproved: 05/02/2024

    # Summarize the whole topic in less than 300 characters for SEO purpose
    MetaDescription: Visual Studio Code extensions can filter their features based on Document Selectors by language, file type, and location.
    ---

## Document Selectors

Extensions can filter their features based on document selectors by language, file type, and location. This topic discusses document selectors, document schemes, and what extensions authors should be aware about.

## Text documents not on disk

Not all text documents are stored on disk, for example, newly created documents. Unless specified, a document selector applies to **all** document types. Use the [DocumentFilter][LN547] `scheme` property to narrow down on certain schemes, for example `{ scheme: 'file', language: 'typescript' }` for TypeScript files that are stored on disk.

## Document selectors

The Visual Studio Code extension API combines language-specific features, like IntelliSense, with document selectors through the [DocumentSelector][LN548] type. They are an easy mechanism to narrow down functionality to a specific language.

The snippet below registers a [HoverProvider][LN548] for TypeScript files and the document selector is the `typescript` language identifier string.

```ts
vscode.languages.registerHoverProvider('typescript', {
  provideHover(doc: vscode.TextDocument) {
    return new vscode.Hover('For *all* TypeScript documents.');
  }
});
```

A document selector can be more than just a language identifier and more complex selectors can use a [DocumentFilter][LN548] to filter based on the `scheme` and file location through a `pattern` path glob-pattern:

```ts
vscode.languages.registerHoverProvider(
  { pattern: '**/test/**' },
  {
    provideHover(doc: vscode.TextDocument) {
      return new vscode.Hover('For documents inside `test`-folders only');
    }
  }
);
```

The next snippet uses the `scheme` filter and combines it with a language identifier. The `untitled` scheme is for new files that have not yet been saved to disk.

```ts
vscode.languages.registerHoverProvider(
  { scheme: 'untitled', language: 'typescript' },
  {
    provideHover(doc: vscode.TextDocument) {
      return new vscode.Hover('For new, unsaved TypeScript documents only');
    }
  }
);
```

## Document scheme

The `scheme` of a document is often overlooked but is an important piece of information. Most documents are saved on disk and extension authors typically assume they are working with a file on disk. For example with a simple `typescript` selector, the assumption is **TypeScript files on disk**. However, there are scenarios where that assumption is too lax and a more explicit selector like `{ scheme: 'file', language: 'typescript' }` should be used.

The importance of this comes into play when features rely on reading/writing files from/to disk. Check out the snippet below:

```ts
// 👎 too lax
vscode.languages.registerHoverProvider('typescript', {
  provideHover(doc: vscode.TextDocument) {
    const { size } = fs.statSync(doc.uri.fsPath); // ⚠️ what about 'untitled:/Untitled1.ts' or others?
    return new vscode.Hover(`Size in bytes is ${size}`);
  }
});
```

The hover provider above wants to display the size of a document on disk but it fails to check whether the document is actually stored on disk. For example, it could be newly created and not yet saved. The correct way would be to tell VS Code that the provider can only work with files on disk.

```ts
// 👍 only works with files on disk
vscode.languages.registerHoverProvider(
  { scheme: 'file', language: 'typescript' },
  {
    provideHover(doc: vscode.TextDocument) {
      const { size } = fs.statSync(doc.uri.fsPath);
      return new vscode.Hover(`Size in bytes is ${size}`);
    }
  }
);
```

## Summary

Documents are usually stored on the file system, but not always: there are untitled documents, cached documents that Git uses, documents from remote sources like FTP, and so forth. If your feature relies on disk access, make sure to use a document selector with the `file` scheme.

## Next steps

To learn more about VS Code extensibility model, try these topics:

- [Extension Manifest File][LN548] - VS Code package.json extension manifest file reference
- [Contribution Points][FX002] - VS Code contribution points reference


[LK001]: https://github.com/microsoft/vscode/tree/main/extensions
[LK002]: https://code.visualstudio.com/api/extension-guides/overview
[LK003]: https://github.com/microsoft/vscode-extension-samples
[LK004]: https://marketplace.visualstudio.com/vscode
[LK005]: https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-sample
[LK006]: https://code.visualstudio.com/updates#_extension-authoring
[LK007]: https://code.visualstudio.com/updates#_proposed-extension-apis
[LK008]: https://github.com/microsoft/vscode-discussions
[LK009]: https://stackoverflow.com/questions/tagged/vscode-extensions
[LK010]: https://vscode-dev-community.slack.com
[LK011]: https://github.com/microsoft/vscode-docs/issues
[LK012]: https://github.com/microsoft/vscode/issues
[LK013]: https://nodejs.org
[LK014]: https://git-scm.com
[LK015]: https://yeoman.io
[LK016]: https://www.npmjs.com/package/generator-code
[LK017]: https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-minimal-sample
[LK018]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
[LK019]: https://www.npmjs.com/package/@types/vscode
[LK020]: https://marketplace.visualstudio.com
[LK021]: https://github.com/microsoft/vscode-languageserver-node
[LK022]: https://microsoft.github.io/debug-adapter-protocol/implementors/adapters
[LK023]: https://github.com/microsoft/vscode-extension-samples/tree/main/quickinput-sample
[LK024]: https://github.com/microsoft/vscode-extension-samples/tree/main/progress-sample
[LK025]: https://github.com/microsoft/vscode-extension-samples/tree/main/theme-sample
[LK026]: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice
[LK027]: https://github.com/microsoft/vscode/tree/main/extensions/npm
[LK028]: https://github.com/microsoft/vscode/tree/main/extensions/markdown-language-features
[LK029]: https://marketplace.visualstudio.com/items?itemName=vscodevim.vim
[LK030]: https://github.com/microsoft/vscode-extension-samples/tree/main/statusbar-sample
[LK031]: https://code.visualstudio.com/api/extension-guides/command
[LK032]: https://code.visualstudio.com/api/references/vscode-api#commands
[LK033]: https://code.visualstudio.com/api/extension-guides/color-theme
[LK034]: https://code.visualstudio.com/api/references/contribution-points#contributes.themes
[LK035]: https://code.visualstudio.com/api/extension-guides/file-icon-theme
[LK036]: https://code.visualstudio.com/api/references/contribution-points#contributes.iconThemes
[LK037]: https://code.visualstudio.com/api/extension-guides/product-icon-theme
[LK038]: https://code.visualstudio.com/api/references/contribution-points#contributes.productIconThemes
[LK039]: https://code.visualstudio.com/api/extension-guides/tree-view
[LK040]: https://code.visualstudio.com/api/references/vscode-api#window.createTreeView
[LK041]: https://code.visualstudio.com/api/references/vscode-api#window.registerTreeDataProvider
[LK042]: https://code.visualstudio.com/api/references/vscode-api#TreeView
[LK043]: https://code.visualstudio.com/api/references/vscode-api#TreeDataProvider
[LK044]: https://code.visualstudio.com/api/references/contribution-points#contributes.views
[LK045]: https://code.visualstudio.com/api/references/contribution-points#contributes.viewsContainers
[LK046]: https://code.visualstudio.com/api/extension-guides/webview
[LK047]: https://code.visualstudio.com/api/references/vscode-api#window.createWebviewPanel
[LK048]: https://code.visualstudio.com/api/references/vscode-api#window.registerWebviewPanelSerializer
[LK049]: https://code.visualstudio.com/api/extension-guides/custom-editors
[LK050]: https://code.visualstudio.com/api/references/vscode-api#window.registerCustomEditorProvider
[LK051]: https://code.visualstudio.com/api/references/vscode-api#CustomTextEditorProvider
[LK052]: https://code.visualstudio.com/api/references/contribution-points#contributes.customEditors
[LK053]: https://code.visualstudio.com/api/extension-guides/virtual-documents
[LK054]: https://code.visualstudio.com/api/references/vscode-api#workspace.registerTextDocumentContentProvider
[LK055]: https://code.visualstudio.com/api/references/vscode-api#commands.registerCommand
[LK056]: https://code.visualstudio.com/api/references/vscode-api#window.showInputBox
[LK057]: https://code.visualstudio.com/api/extension-guides/virtual-workspaces
[LK058]: https://code.visualstudio.com/api/references/vscode-api#workspace.fs
[LK059]: https://code.visualstudio.com/api/extension-guides/workspace-trust
[LK060]: https://code.visualstudio.com/api/references/vscode-api#workspace.isTrusted
[LK061]: https://code.visualstudio.com/api/references/vscode-api#workspace.onDidGrantWorkspaceTrust
[LK062]: https://code.visualstudio.com/api/extension-guides/task-provider
[LK063]: https://code.visualstudio.com/api/references/vscode-api#tasks.registerTaskProvider
[LK064]: https://code.visualstudio.com/api/references/vscode-api#Task
[LK065]: https://code.visualstudio.com/api/references/vscode-api#ShellExecution
[LK066]: https://code.visualstudio.com/api/references/contribution-points#contributes.taskDefinitions
[LK067]: https://code.visualstudio.com/api/extension-guides/scm-provider
[LK068]: https://code.visualstudio.com/api/references/vscode-api#workspace.workspaceFolders
[LK069]: https://code.visualstudio.com/api/references/vscode-api#SourceControl
[LK070]: https://code.visualstudio.com/api/references/vscode-api#SourceControlResourceGroup
[LK071]: https://code.visualstudio.com/api/references/vscode-api#scm.createSourceControl
[LK072]: https://code.visualstudio.com/api/references/vscode-api#TextDocumentContentProvider
[LK073]: https://code.visualstudio.com/api/references/contribution-points#contributes.menus
[LK074]: https://code.visualstudio.com/api/extension-guides/debugger-extension
[LK075]: https://code.visualstudio.com/api/references/contribution-points#contributes.breakpoints
[LK076]: https://code.visualstudio.com/api/references/contribution-points#contributes.debuggers
[LK077]: https://code.visualstudio.com/api/references/vscode-api#debug
[LK078]: https://code.visualstudio.com/api/extension-guides/markdown-extension
[LK079]: https://code.visualstudio.com/api/extension-guides/testing
[LK080]: https://code.visualstudio.com/api/references/vscode-api#TestController
[LK081]: https://code.visualstudio.com/api/references/vscode-api#TestItem
[LK082]: https://code.visualstudio.com/api/extension-guides/custom-data-extension
[LK083]: https://github.com/microsoft/vscode-extension-samples/tree/main/webview-sample
[LK084]: https://code.visualstudio.com/api/references/vscode-api#window.createStatusBarItem
[LK085]: https://code.visualstudio.com/api/references/vscode-api#StatusBarItem
[LK086]: https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample
[LK087]: https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample
[LK088]: https://github.com/microsoft/vscode-extension-samples/tree/main/basic-multi-root-sample
[LK089]: https://code.visualstudio.com/api/references/vscode-api#workspace.getWorkspaceFolder
[LK090]: https://code.visualstudio.com/api/references/vscode-api#workspace.onDidChangeWorkspaceFolders
[LK091]: https://github.com/microsoft/vscode-extension-samples/tree/main/completions-sample
[LK092]: https://code.visualstudio.com/api/references/vscode-api#languages.registerCompletionItemProvider
[LK093]: https://code.visualstudio.com/api/references/vscode-api#CompletionItem
[LK094]: https://code.visualstudio.com/api/references/vscode-api#SnippetString
[LK095]: https://github.com/microsoft/vscode-extension-samples/tree/main/fsprovider-sample
[LK096]: https://code.visualstudio.com/api/references/vscode-api#workspace.registerFileSystemProvider
[LK097]: https://github.com/microsoft/vscode-extension-samples/tree/main/decorator-sample
[LK098]: https://code.visualstudio.com/api/references/vscode-api#TextEditor.setDecorations
[LK099]: https://code.visualstudio.com/api/references/vscode-api#DecorationOptions
[LK100]: https://code.visualstudio.com/api/references/vscode-api#DecorationInstanceRenderOptions
[LK101]: https://code.visualstudio.com/api/references/vscode-api#ThemableDecorationInstanceRenderOptions
[LK102]: https://code.visualstudio.com/api/references/vscode-api#window.createTextEditorDecorationType
[LK103]: https://code.visualstudio.com/api/references/vscode-api#TextEditorDecorationType
[LK104]: https://code.visualstudio.com/api/references/contribution-points#contributes.colors
[LK105]: https://github.com/microsoft/vscode-extension-samples/tree/main/l10n-sample
[LK106]: https://github.com/microsoft/vscode-extension-samples/tree/main/terminal-sample
[LK107]: https://code.visualstudio.com/api/references/vscode-api#window.createTerminal
[LK108]: https://code.visualstudio.com/api/references/vscode-api#window.onDidChangeActiveTerminal
[LK109]: https://code.visualstudio.com/api/references/vscode-api#window.onDidCloseTerminal
[LK110]: https://code.visualstudio.com/api/references/vscode-api#window.onDidOpenTerminal
[LK111]: https://code.visualstudio.com/api/references/vscode-api#window.Terminal
[LK112]: https://code.visualstudio.com/api/references/vscode-api#window.terminals
[LK113]: https://github.com/microsoft/vscode-extension-samples/tree/main/vim-sample
[LK114]: https://code.visualstudio.com/api/references/vscode-api#TextEditorCursorStyle
[LK115]: https://code.visualstudio.com/api/references/vscode-api#window.activeTextEditor
[LK116]: https://code.visualstudio.com/api/references/vscode-api#Position
[LK117]: https://code.visualstudio.com/api/references/vscode-api#Range
[LK118]: https://code.visualstudio.com/api/references/vscode-api#Selection
[LK119]: https://code.visualstudio.com/api/references/vscode-api#TextEditor
[LK120]: https://code.visualstudio.com/api/references/vscode-api#TextEditorRevealType
[LK121]: https://code.visualstudio.com/api/references/vscode-api#TextDocument
[LK122]: https://github.com/microsoft/vscode-extension-samples/tree/main/source-control-sample
[LK123]: https://github.com/microsoft/vscode-extension-samples/tree/main/comment-sample
[LK124]: https://github.com/microsoft/vscode-extension-samples/tree/main/document-editing-sample
[LK125]: https://github.com/microsoft/vscode-extension-samples/tree/main/getting-started-sample
[LK126]: https://code.visualstudio.com/api/references/contribution-points#contributes.walkthroughs
[LK127]: https://github.com/microsoft/vscode-extension-samples/tree/main/test-provider-sample
[LK128]: https://code.visualstudio.com.azurewebsites.net/api/references/vscode-api#TestItem
[LK129]: https://github.com/microsoft/vscode-extension-samples/tree/main/snippet-sample
[LK130]: https://code.visualstudio.com/api/language-extensions/snippet-guide
[LK131]: https://code.visualstudio.com/api/references/contribution-points#contributes.snippets
[LK132]: https://github.com/microsoft/vscode-extension-samples/tree/main/language-configuration-sample
[LK133]: https://code.visualstudio.com/api/language-extensions/language-configuration-guide
[LK134]: https://code.visualstudio.com/api/references/contribution-points#contributes.languages
[LK135]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-sample
[LK136]: https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
[LK137]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-log-streaming-sample
[LK138]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-multi-server-sample
[LK139]: https://github.com/microsoft/vscode/wiki/Adopting-Multi-Root-Workspace-APIs#language-client--language-server
[LK140]: https://github.com/Microsoft/vscode-extension-samples/tree/main/lsp-web-extension-sample
[LK141]: https://colorsublime.github.io
[LK142]: https://css-tricks.com/creating-a-vs-code-theme
[LK143]: https://github.com/microsoft/vscode/tree/main/extensions/theme-defaults
[LK144]: https://github.com/microsoft/vscode/tree/main/extensions/theme-seti
[LK145]: https://developer.mozilla.org/docs/Web/Guide/WOFF
[LK146]: https://developer.mozilla.org/docs/Web/CSS/font-weight#Values
[LK147]: https://developer.mozilla.org/docs/Web/CSS/@font-face/font-style#Values
[LK148]: https://github.com/microsoft/vscode-extension-samples/tree/main/product-icon-theme-sample
[LK149]: https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat
[LK150]: https://github.com/microsoft/vscode-extension-samples/tree/main/chat-sample
[LK151]: https://learn.microsoft.com/en-us/semantic-kernel/agents
[LK152]: https://code.visualstudio.com/api/advanced-topics/using-proposed-api
[LK153]: https://github.com/microsoft/vscode/issues/199908
[LK154]: https://code.visualstudio.com/insiders
[LK155]: https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.chatParticipant.d.ts
[LK156]: https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.chatVariableResolver.d.ts
[LK157]: https://resources.github.com/copilot-trust-center
[LK158]: https://www.npmjs.com/package/@vscode/prompt-tsx
[LK159]: https://www.microsoft.com/en-us/ai/tools-practices
[LK160]: https://docs.github.com/en/early-access/copilot/github-copilot-extensibility-platform-partnership-plugin-acceptable-development-and-use-policy
[LK161]: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
[LK162]: https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.proposed.languageModels.d.ts
[LK163]: https://platform.openai.com/docs/guides/prompt-engineering
[LK164]: https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample/README.md
[LK165]: https://www.npmjs.com
[LK166]: https://github.com/microsoft/vscode/tree/main/extensions/git
[LK167]: https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample/src/nodeDependencies.ts
[LK168]: https://github.com/microsoft/vscode-extension-samples/tree/main/tree-view-sample/src/ftpExplorer.ts
[LK169]: https://github.com/microsoft/vscode-extension-samples/tree/main/webview-view-sample
[LK170]: https://github.com/microsoft/vscode-extension-samples/blob/main/webview-sample/README.md
[LK171]: https://developer.chrome.com/docs/devtools
[LK172]: https://developer.mozilla.org/docs/Web/CSS/Using_CSS_variables
[LK173]: https://marketplace.visualstudio.com/items?itemName=connor4312.css-theme-completions
[LK174]: https://developer.mozilla.org/docs/Learn/HTML/Howto/Use_data_attributes
[LK175]: https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Using_web_workers
[LK176]: https://webpack.js.org
[LK177]: https://developers.google.com/web/fundamentals/security/csp
[LK178]: https://github.com/microsoft/vscode-extension-samples/blob/main/webview-sample
[LK179]: https://github.com/microsoft/vscode/blob/e1a8566a298dcced016d8e16db95c33c270274b4/src/vs/vscode.d.ts#L11865-L11884
[LK180]: https://github.com/microsoft/notebook-extension-samples/tree/main/notebook-serializer
[LK181]: https://github.com/microsoft/vscode-markdown-notebook
[LK182]: https://nbformat.readthedocs.io/en/latest/format_description.html
[LK183]: https://github.com/microsoft/vscode/blob/e1a8566a298dcced016d8e16db95c33c270274b4/src/vs/vscode.d.ts#L11941
[LK184]: https://github.com/microsoft/vscode-github-issue-notebooks/blob/93359d842cd01dfaef0a78b620c5a3b4cf5c2e38/src/extension/notebookProvider.ts#L29
[LK185]: https://github.com/tanhakabir/rest-book/blob/main/src/extension/notebookKernel.ts
[LK186]: https://github.com/jrieken/vscode-regex-notebook/blob/master/src/extension/extension.ts#L56
[LK187]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/vscode-notebook-renderer/index.d.ts
[LK188]: https://microsoft.github.io/debug-adapter-protocol
[LK189]: https://github.com/microsoft/vscode-nodebook
[LK190]: https://github.com/microsoft/vscode-simple-jupyter-notebook
[LK191]: https://en.wikipedia.org/wiki/Comma-separated_values
[LK192]: https://davidwalsh.name/javascript-debounce-function
[LK193]: https://code.visualstudio.com/api/references/vscode-api#FileSystem
[LK194]: https://github.com/microsoft/vscode-extension-samples/blob/main/virtual-document-sample/README.md
[LK195]: https://github.com/microsoft/vscode-extension-samples/blob/main/contentprovider-sample/README.md
[LK196]: https://github.com/microsoft/vscode-extension-samples/tree/main/fsprovider-sample/README.md
[LK197]: https://marketplace.visualstudio.com/items?itemName=GitHub.remotehub
[LK198]: https://github.com/microsoft/vscode/issues/122836
[LK199]: https://github.com/microsoft/language-server-protocol/issues/1264
[LK200]: https://developer.mozilla.org/docs/Web/API/Web_Workers_API
[LK201]: https://developer.mozilla.org/docs/Web/API/Fetch_API
[LK202]: https://developer.mozilla.org/docs/Web/HTTP/CORS
[LK203]: https://developer.mozilla.org/en-US/docs/Web/API/Worker
[LK204]: https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-web-sample
[LK205]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-web-sample/webpack.config.js
[LK206]: https://webpack.js.org/configuration/resolve/#resolvefallback
[LK207]: https://webpack.js.org/plugins/define-plugin
[LK208]: https://github.com/microsoft/vscode-test-web
[LK209]: https://vscode.dev
[LK210]: https://marketplace.visualstudio.com/items?itemName=eamodio.tsl-problem-matcher
[LK211]: https://www.npmjs.com/package/@vscode/test-web
[LK212]: https://playwright.dev/docs/api/class-browsercontext#browser-context-grant-permissions
[LK213]: https://github.com/FiloSottile/mkcert#installation
[LK214]: https://github.com/microsoft/vscode-test
[LK215]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-web-sample/src/web/test/suite/index.ts
[LK216]: https://github.com/aeschli/vscode-css-formatter/blob/master/webpack.config.js
[LK217]: https://github.com/microsoft/node-request-light
[LK218]: https://github.com/Microsoft/vscode-nls
[LK219]: https://webpack.js.org/configuration/resolve/#resolvealias
[LK220]: https://www.npmjs.com/package/vscode-uri
[LK221]: https://github.com/microsoft/vscode/tree/main/extensions/json-language-features
[LK222]: https://github.com/microsoft/vscode/tree/main/extensions/css-language-features
[LK223]: https://github.com/microsoft/vscode/tree/main/extensions/html-language-features
[LK224]: https://webassembly.org
[LK225]: https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm
[LK226]: https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
[LK227]: https://github.com/microsoft/vscode-anycode
[LK228]: https://www.npmjs.com/package/tree-sitter
[LK229]: https://github.com/Microsoft/vscode-languageserver-node
[LK230]: https://microsoft.github.io/language-server-protocol
[LK231]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-web-extension-sample
[LK232]: https://ruby.github.io/rake
[LK233]: https://github.com/microsoft/vscode-extension-samples/tree/main/task-provider-sample/src/customTaskProvider.ts
[LK234]: https://github.com/microsoft/vscode/blob/main/extensions/git/src/repository.ts
[LK235]: https://marketplace.visualstudio.com/items?itemName=johnstoncode.svn-scm
[LK236]: https://microsoft.github.io/debug-adapter-protocol/overview
[LK237]: https://microsoft.github.io/debug-adapter-protocol/specification
[LK238]: https://code.visualstudio.com/blogs/2018/08/07/debug-adapter-protocol-website#_why-the-need-for-decoupling-with-protocols
[LK239]: https://microsoft.github.io/debug-adapter-protocol/implementors/tools
[LK240]: https://marketplace.visualstudio.com/items/andreweinand.mock-debug
[LK241]: https://microsoft.github.io/debug-adapter-protocol/overview#How_it_works
[LK242]: https://github.com/microsoft/vscode-mock-debug/blob/606454ff3bd669867a38d9b2dc7b348d324a3f6b/src/extension.ts#L21-L26
[LK243]: https://www.npmjs.com/package/vscode-debugadapter
[LK244]: https://github.com/microsoft/vscode-mock-debug/blob/668fa6f5db95dbb76825d4eb670ab0d305050c3b/src/extension.ts#L91-L150
[LK245]: https://github.com/microsoft/vscode-mock-debug/blob/668fa6f5db95dbb76825d4eb670ab0d305050c3b/src/extension.ts#L50
[LK246]: https://github.com/microsoft/vscode-mock-debug/blob/668fa6f5db95dbb76825d4eb670ab0d305050c3b/src/extension.ts#L16
[LK247]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles
[LK248]: https://github.com/mjbvz/vscode-github-markdown-preview-style
[LK249]: https://spec.commonmark.org
[LK250]: https://github.com/markdown-it/markdown-it#syntax-extensions
[LK251]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji
[LK252]: https://github.com/mjbvz/vscode-markdown-emoji
[LK253]: https://github.com/markdown-it/markdown-it/blob/master/docs/development.md
[LK254]: https://www.npmjs.com/browse/keyword/markdown-it-plugin
[LK255]: https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid
[LK256]: https://mermaid.js.org
[LK257]: https://github.com/mjbvz/vscode-markdown-mermaid
[LK258]: https://github.com/microsoft/vscode-selfhost-test-provider
[LK259]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
[LK260]: https://en.wikipedia.org/wiki/ANSI_escape_code
[LK261]: https://www.npmjs.com/package/ansi-styles
[LK262]: https://github.com/connor4312/test-controller-migration-example/commits/master
[LK263]: https://github.com/microsoft/vscode-custom-data
[LK264]: https://github.com/microsoft/vscode-extension-samples/tree/main/custom-data-sample
[LK265]: https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409
[LK266]: https://www.npmjs.com/package/@vscode/extension-telemetry
[LK267]: https://azure.microsoft.com/services/monitor
[LK268]: https://learn.microsoft.com/azure/azure-monitor/app/nodejs
[LK269]: https://github.com/microsoft/vscode-extension-samples/tree/main/welcome-view-content-sample
[LK270]: https://github.com/microsoft/vscode-extension-samples/tree/main/custom-editor-sample
[LK271]: https://github.com/microsoft/vscode-extension-samples/tree/main/notifications-sample
[LK272]: https://github.com/microsoft/vscode-extension-samples/blob/main/webview-view-sample/media/main.css
[LK273]: https://github.com/Microsoft/vscode-extension-samples/tree/main/webview-sample
[LK274]: https://www.figma.com/community/plugin/1218260433851630449
[LK275]: https://github.com/microsoft/vscode/blob/a28eab68734e629c61590fae8c4b231c91f0eaaa/src/vs/workbench/contrib/welcomeGettingStarted/common/media/commandPalette.svg?short_path=52f2d6f#L11
[LK276]: https://github.com/microsoft/vscode/tree/main/extensions/html
[LK277]: https://github.com/microsoft/vscode/tree/main/extensions/typescript-language-features
[LK278]: https://github.com/microsoft/vscode/tree/main/extensions/css
[LK279]: https://github.com/microsoft/vscode/tree/main/extensions/typescript-basics
[LK280]: https://github.com/microsoft/TypeScript/wiki/Using-the-Language-Service-API
[LK281]: https://microsoft.github.io/language-server-protocol/specification
[LK282]: https://macromates.com/manual/en/regular_expressions
[LK283]: https://www.apeth.com/nonblog/stories/textmatebundle.html
[LK284]: https://www.npmjs.com/package/js-yaml
[LK285]: https://github.com/microsoft/vscode-extension-samples/tree/main/semantic-tokens-sample
[LK286]: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets
[LK287]: https://microsoft.github.io/language-server-protocol/specification#textDocument_foldingRange
[LK288]: https://microsoft.github.io/language-server-protocol/specification#textDocument_publishDiagnostics
[LK289]: https://microsoft.github.io/language-server-protocol/specification#textDocument_completion
[LK290]: https://microsoft.github.io/language-server-protocol/specification#completionItem_resolve
[LK291]: https://microsoft.github.io/language-server-protocol/specification#textDocument_hover
[LK292]: https://microsoft.github.io/language-server-protocol/specification#textDocument_signatureHelp
[LK293]: https://microsoft.github.io/language-server-protocol/specification#textDocument_definition
[LK294]: https://microsoft.github.io/language-server-protocol/specification#textDocument_typeDefinition
[LK295]: https://microsoft.github.io/language-server-protocol/specification#textDocument_implementation
[LK296]: https://microsoft.github.io/language-server-protocol/specification#textDocument_references
[LK297]: https://microsoft.github.io/language-server-protocol/specification#textDocument_documentHighlight
[LK298]: https://microsoft.github.io/language-server-protocol/specification#textDocument_documentSymbol
[LK299]: https://microsoft.github.io/language-server-protocol/specification#textDocument_codeAction
[LK300]: https://microsoft.github.io/language-server-protocol/specification#textDocument_codeLens
[LK301]: https://microsoft.github.io/language-server-protocol/specification#codeLens_resolve
[LK302]: https://microsoft.github.io/language-server-protocol/specification#textDocument_documentLink
[LK303]: https://microsoft.github.io/language-server-protocol/specification#documentLink_resolve
[LK304]: https://microsoft.github.io/language-server-protocol/specification#textDocument_documentColor
[LK305]: https://microsoft.github.io/language-server-protocol/specification#textDocument_colorPresentation
[LK306]: https://microsoft.github.io/language-server-protocol/specification#textDocument_formatting
[LK307]: https://microsoft.github.io/language-server-protocol/specification#textDocument_rangeFormatting
[LK308]: https://microsoft.github.io/language-server-protocol/specification#textDocument_onTypeFormatting
[LK309]: https://microsoft.github.io/language-server-protocol/specification#textDocument_rename
[LK310]: https://microsoft.github.io/language-server-protocol/specification#textDocument_prepareRename
[LK311]: https://github.com/microsoft/vscode-eslint
[LK312]: https://github.com/microsoft/vscode-jshint
[LK313]: https://github.com/microsoft/vscode-html-languageservice
[LK314]: https://github.com/microsoft/vscode-css-languageservice
[LK315]: https://github.com/microsoft/vscode-json-languageservice
[LK316]: https://github.com/microsoft/vscode-languageserver-node/blob/main/protocol/src/node/test/connection.test.ts
[LK317]: https://github.com/microsoft/vscode-python
[LK318]: https://github.com/microsoft/tolerant-php-parser
[LK319]: https://github.com/microsoft/tolerant-php-parser/blob/master/docs/HowItWorks.md
[LK320]: https://github.com/microsoft/language-server-protocol
[LK321]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-embedded-language-service
[LK322]: https://github.com/microsoft/vscode-extension-samples/tree/main/lsp-embedded-request-forwarding
[LK323]: https://www.w3.org/TR/html401/appendix/notes.html#h-B.3.2
[LK324]: https://microsoft.github.io/language-server-protocol/implementors/tools
[LK325]: https://github.com/microsoft/vscode/issues/159911
[LK326]: https://code.visualstudio.com/api/get-started/your-first-extension
[LK327]: https://mochajs.org
[LK328]: https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-test-cli-sample
[LK329]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.extension-test-runner
[LK330]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-cli-sample/.vscode-test.mjs
[LK331]: https://github.com/microsoft/vscode-test-cli/blob/main/src/config.cts
[LK332]: https://mochajs.org/api/mocha#Mocha
[LK333]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/extension.test.ts
[LK334]: https://github.com/microsoft/vscode-extension-samples/tree/main/helloworld-test-sample
[LK335]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/runTest.ts
[LK336]: https://github.com/microsoft/vscode-extension-samples/blob/main/helloworld-test-sample/src/test/suite/index.ts
[LK337]: https://mochajs.org/api/mocha
[LK338]: https://github.com/microsoft/vscode-vsce
[LK339]: https://azure.microsoft.com/services/devops
[LK340]: https://learn.microsoft.com/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate
[LK341]: https://learn.microsoft.com/azure/devops/organizations/accounts/create-organization
[LK342]: https://marketplace.visualstudio.com/manage
[LK343]: https://semver.org
[LK344]: https://docs.npmjs.com/cli/version#description
[LK345]: https://github.com/microsoft/vscode-discussions/discussions/1
[LK346]: https://marketplace.visualstudio.com/items/golang.go
[LK347]: https://github.com/isaacs/minimatch
[LK348]: https://www.typescriptlang.org
[LK349]: https://github.com/features/actions
[LK350]: https://github.com/microsoft/vscode-platform-specific-sample
[LK351]: https://github.com/microsoft/vscode-platform-specific-sample/blob/main/.github/workflows/ci.yml
[LK352]: https://github.dev
[LK353]: https://rollupjs.org
[LK354]: https://parceljs.org
[LK355]: https://esbuild.github.io
[LK356]: https://github.com/microsoft/vscode-test-adapter-converter
[LK357]: https://github.com/microsoft/vscode-extension-samples/blob/main/webpack-sample/webpack.config.js
[LK358]: https://github.com/microsoft/vscode-extension-samples/blob/main/webpack-sample
[LK359]: https://webpack.js.org/concepts/mode
[LK360]: https://github.com/microsoft/vscode-references-view/blob/d649d01d369e338bbe70c86e03f28269cbf87027/package.json#L26
[LK361]: https://github.com/microsoft/vscode-references-view/pull/50
[LK362]: https://github.com/microsoft/vscode-test/tree/main/sample
[LK363]: https://dev.azure.com/vscode/vscode-test/_build?definitionId=15
[LK364]: https://github.com/microsoft/vscode-test/blob/main/sample/azure-pipelines.yml
[LK365]: https://azure.microsoft.com/services/devops/pipelines
[LK366]: https://azure.microsoft.com/features/devops-projects
[LK367]: https://learn.microsoft.com/azure/devops/pipelines/create-first-pipeline
[LK368]: https://learn.microsoft.com/azure/devops/pipelines/build/triggers
[LK369]: https://learn.microsoft.com/azure/devops/pipelines/process/variables?tabs=classic%2Cbatch#secret-variables
[LK370]: https://learn.microsoft.com/azure/devops/pipelines/process/conditions
[LK371]: https://docs.github.com/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository
[LK372]: https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idif
[LK373]: https://docs.gitlab.com/ee/ci/variables/README.html#mask-a-cicd-variable
[LK374]: https://yarnpkg.com
[LK375]: https://gruntjs.com
[LK376]: https://gulpjs.com
[LK377]: https://github.com/features/codespaces
[LK378]: https://docs.github.com/github/developing-online-with-codespaces
[LK379]: https://docs.github.com/github/developing-online-with-codespaces/creating-a-codespace
[LK380]: https://docs.github.com/github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
[LK381]: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb
[LK382]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit
[LK383]: https://code.visualstudio.com/api/references/vscode-api#SecretStorage
[LK384]: https://www.electronjs.org/docs/latest/api/safe-storage
[LK385]: https://oauth.net/2
[LK386]: https://oauth.net/2/pkce
[LK387]: https://electronjs.org/docs/tutorial/using-native-node-modules
[LK388]: https://github.com/tree-sitter/node-tree-sitter/releases/tag/v0.14.0
[LK389]: https://wiki.musl-libc.org/functional-differences-from-glibc.html
[LK390]: https://github.com/microsoft/vscode/issues/100222
[LK391]: https://stackoverflow.com/questions/tagged/vscode-remote
[LK392]: https://aka.ms/vscode-remote/feature-requests
[LK393]: https://aka.ms/vscode-remote/issues
[LK394]: https://aka.ms/vscode-remote/issues/new
[LK395]: https://containers.dev/templates
[LK396]: https://containers.dev/features
[LK397]: https://github.com/microsoft/vscode-docs
[LK398]: https://github.com/microsoft/vscode
[LK399]: https://aka.ms/vscode-remote/contributing
[LK400]: https://github.com/microsoft/vscode/blob/main/src/vscode-dts
[LK401]: https://github.com/microsoft/vscode-dts
[LK402]: https://github.com/microsoft/vscode-extension-samples/tree/main/proposed-api-sample
[LK403]: https://palantir.github.io/tslint
[LK404]: https://eslint.org
[LK405]: https://github.com/typescript-eslint/tslint-to-eslint-config
[LK406]: https://www.npmjs.com/package/npx
[LK407]: https://github.com/typescript-eslint/tslint-to-eslint-config#usage
[LK408]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[LK409]: https://marketplace.visualstudio.com/items?itemName=ms-python.python
[LK410]: https://www.npmjs.com/package/@vscode/python-extension
[LK411]: https://github.com/microsoft/vscode-python-tools-extension-template
[LK412]: https://microsoft.github.io/language-server-protocol/specifications/specification-3-16
[LK413]: https://github.com/microsoft/vscode-python-tools-extension-template#readme
[LK414]: https://docs.github.com/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template
[LK415]: https://nox.thea.codes
[LK416]: https://github.com/microsoft/vscode-pylint/tree/main/bundled/tool
[LK417]: https://github.com/microsoft/vscode-flake8/tree/main/bundled/tool
[LK418]: https://github.com/microsoft/vscode-black-formatter/tree/main/bundled/tool
[LK419]: https://github.com/python/black
[LK420]: https://github.com/microsoft/vscode-autopep8/tree/main/bundled/tool
[LK421]: https://pypi.org/project/autopep8
[LK422]: https://github.com/microsoft/vscode-isort/blob/main/bundled/tool
[LK423]: https://github.com/microsoft/vscode-python-tools-extension-template#debugging
[LK424]: https://github.com/microsoft/vscode-python-tools-extension-template#troubleshooting
[LK425]: https://github.com/microsoft/vscode/blob/main/src/vs/vscode.d.ts
[LK426]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
[LK427]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
[LK428]: https://en.wikipedia.org/wiki/Dispose_pattern
[LK429]: https://github.com/microsoft/TypeScript/pull/7140
[LK430]: https://json-schema.org/overview/what-is-jsonschema
[LK431]: https://momentjs.com/docs/#/displaying/format
[LK432]: https://www.schemastore.org/json
[LK433]: https://github.com/microsoft/TypeScript/wiki/Writing-a-Language-Service-Plugin
[LK434]: https://github.com/microsoft/typescript-styled-plugin
[LK435]: https://github.com/microsoft/vscode-typescript-tslint-plugin/blob/main/src/index.ts
[LK436]: https://github.com/mjbvz/vscode-lit-html/blob/master/src/index.ts
[LK437]: https://aka.ms/vscode-scm
[LK438]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#license
[LK439]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#dependencies
[LK440]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json#devdependencies
[LK441]: https://docs.npmjs.com/misc/scripts
[LK442]: https://docs.npmjs.com/cli/v7/configuring-npm/package-json
[LK443]: https://marketplace.visualstudio.com/VSCode
[LK444]: https://marketplace.visualstudio.com/items?itemName=ms-vscode.wordcount
[LK445]: https://marketplace.visualstudio.com/items/seanmcbreen.MDTools
[LK446]: https://www.npmjs.com/package/vscode-nls
[LK447]: https://www.npmjs.com/package/jsonc-parser
[LK448]: https://www.npmjs.com/package/request-light
[LK449]: https://www.npmjs.com/package/vscode-languageclient
[LK450]: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions#creating_a_regular_expression
[LK451]: https://github.com/microsoft/vscode-codicons

[FX000]: https://code.visualstudio.com/api/references/extension-manifest
[FX001]: https://code.visualstudio.com/api/references/activation-events
[FX002]: https://code.visualstudio.com/api/references/contribution-points

[LN001]: #_api_get-started_your-first-extension
[LN002]: #_api_get-started_extension-anatomy
[LN003]: #_api_get-started_wrapping-up
[LN004]: #_api_extension-capabilities_overview
[LN005]: #_api_extension-capabilities_common-capabilities
[LN006]: #_api_extension-capabilities_theming
[LN007]: #_api_extension-capabilities_extending-workbench
[LN008]: #_api_extension-guides_overview
[LN009]: #_api_extension-guides_command
[LN010]: #_api_extension-guides_color-theme
[LN011]: #_api_extension-guides_file-icon-theme
[LN012]: #_api_extension-guides_product-icon-theme
[LN013]: #_api_extension-guides_chat
[LN014]: #_api_extension-guides_language-model
[LN015]: #_api_extension-guides_tree-view
[LN016]: #_api_extension-guides_webview
[LN017]: #_api_extension-guides_notebook
[LN018]: #_api_extension-guides_custom-editors
[LN019]: #_api_extension-guides_virtual-documents
[LN020]: #_api_extension-guides_virtual-workspaces
[LN021]: #_api_extension-guides_web-extensions
[LN022]: #_api_extension-guides_workspace-trust
[LN023]: #_api_extension-guides_task-provider
[LN024]: #_api_extension-guides_scm-provider
[LN025]: #_api_extension-guides_debugger-extension
[LN026]: #_api_extension-guides_markdown-extension
[LN027]: #_api_extension-guides_testing
[LN028]: #_api_extension-guides_custom-data-extension
[LN029]: #_api_extension-guides_telemetry
[LN030]: #_api_ux-guidelines_overview
[LN031]: #_api_ux-guidelines_activity-bar
[LN032]: #_api_ux-guidelines_sidebars
[LN033]: #_api_ux-guidelines_panel
[LN034]: #_api_ux-guidelines_status-bar
[LN035]: #_api_ux-guidelines_views
[LN036]: #_api_ux-guidelines_editor-actions
[LN037]: #_api_ux-guidelines_quick-picks
[LN038]: #_api_ux-guidelines_command-palette
[LN039]: #_api_ux-guidelines_notifications
[LN040]: #_api_ux-guidelines_webviews
[LN041]: #_api_ux-guidelines_context-menus
[LN042]: #_api_ux-guidelines_walkthroughs
[LN043]: #_api_ux-guidelines_settings
[LN044]: #_api_language-extensions_overview
[LN045]: #_api_language-extensions_syntax-highlight-guide
[LN046]: #_api_language-extensions_semantic-highlight-guide
[LN047]: #_api_language-extensions_snippet-guide
[LN048]: #_api_language-extensions_language-configuration-guide
[LN049]: #_api_language-extensions_programmatic-language-features
[LN050]: #_api_language-extensions_language-server-extension-guide
[LN051]: #_api_language-extensions_embedded-languages
[LN052]: #_api_working-with-extensions_testing-extension
[LN053]: #_api_working-with-extensions_publishing-extension
[LN054]: #_api_working-with-extensions_bundling-extension
[LN055]: #_api_working-with-extensions_continuous-integration
[LN056]: #_api_advanced-topics_extension-host
[LN057]: #_api_advanced-topics_remote-extensions
[LN058]: #_api_advanced-topics_using-proposed-api
[LN059]: #_api_advanced-topics_tslint-eslint-migration
[LN060]: #_api_advanced-topics_python-extension-template
[LN061]: #_api_references_vscode-api
[LN062]: #_api_references_contribution-points
[LN063]: #_api_references_activation-events
[LN064]: #_api_references_extension-manifest
[LN065]: #_api_references_commands
[LN066]: #_api_references_when-clause-contexts
[LN067]: #_api_references_theme-color
[LN068]: #_api_references_icons-in-labels
[LN069]: #_api_references_document-selector
[LN070]: https://code.visualstudio.com/docs/nodejs/nodejs-debugging
[LN071]: #onCommand
[LN072]: #contributes.commands
[LN073]: #commands.registerCommand
[LN074]: #extension-manifest
[LN075]: https://code.visualstudio.com/docs/editor/debugging
[LN076]: https://code.visualstudio.com/docs/editor/tasks
[LN077]: #restrictions
[LN078]: #common-capabilities
[LN079]: #theming
[LN080]: #declarative-language-features
[LN081]: #programmatic-language-features
[LN082]: #languages
[LN083]: #extending-workbench
[LN084]: #debug
[LN085]: extending-core-functionalities
[LN086]: #commands
[LN087]: #contributes.configuration
[LN088]: #workspace.getConfiguration
[LN089]: #contributes.keybindings
[LN090]: https://code.visualstudio.com/docs/getstarted/keybindings
[LN091]: #contributes.menus
[LN092]: #ExtensionContext.workspaceState
[LN093]: #ExtensionContext.globalState
[LN094]: #ExtensionContext.storageUri
[LN095]: #ExtensionContext.globalStorageUri
[LN096]: #extension-entry-file
[LN097]: https://code.visualstudio.com/docs/editor/settings-sync
[LN098]: #window.showInformationMessage
[LN099]: #window.showWarningMessage
[LN100]: #window.showErrorMessage
[LN101]: #QuickPick
[LN102]: #window.showOpenDialog
[LN103]: #OutputChannel
[LN104]: #window.createOutputChannel
[LN105]: #Progress
[LN106]: #ProgressLocation
[LN107]: https://code.visualstudio.com/assets/api/extension-capabilities/theming/color-theme.png
[LN108]: https://code.visualstudio.com/assets/api/extension-capabilities/theming/file-icon-theme.png
[LN109]: https://code.visualstudio.com/assets/api/extension-capabilities/extending-workbench/workbench-contribution.png
[LN110]: #views-container
[LN111]: #tree-view
[LN112]: #webview
[LN113]: #status-bar-item
[LN114]: #contributes.viewsContainers
[LN115]: #contributes.views
[LN116]: #StatusBarItem
[LN117]: #commands.executeCommand
[LN118]: ${commentCommandUri}
[LN119]: ${stageCommandUri}
[LN120]: https://code.visualstudio.com/assets/api/extension-guides/commands/palette.png
[LN121]: https://code.visualstudio.com/docs/getstarted/settings
[LN122]: #semantic-theming
[LN123]: #https://code.visualstudio.com/assets/api/extension-guides/color-theme/yocode-colortheme.png
[LN124]: https://code.visualstudio.com/assets/api/extension-guides/color-theme/mytheme.png
[LN125]: https://code.visualstudio.com/docs/editor/extension-marketplace
[LN126]: #marketplace-presentation-tips
[LN127]: #contributes.colors
[LN128]: https://code.visualstudio.com/docs/editor/extension-marketplace#_extension-details
[LN129]: #contributes.languages
[LN130]: #icon-listing
[LN131]: https://code.visualstudio.com/assets/api/extension-guides/product-icon-theme/dev-tool-select-tool.png
[LN132]: https://code.visualstudio.com/assets/api/extension-guides/chat/chat.png
[LN133]: #register-follow-up-requests
[LN134]: https://code.visualstudio.com/assets/api/extension-guides/chat/diagram.png
[LN135]: #register-commands
[LN136]: #implement-a-request-handler
[LN137]: #variables
[LN138]: #use-the-chat-message-history
[LN139]: https://code.visualstudio.com/assets/api/extension-guides/chat/stream.png
[LN140]: https://code.visualstudio.com/assets/api/extension-guides/chat/commands.png
[LN141]: https://code.visualstudio.com/assets/api/extension-guides/chat/variables.png
[LN142]: https://code.visualstudio.com/docs/getstarted/userinterface#_views
[LN143]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/references-search-tree-view.png
[LN144]: #view-container
[LN145]: #TreeDataProvider
[LN146]: #TreeItem
[LN147]: #TreeView
[LN148]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/view.png
[LN149]: #onView
[LN150]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/view-container.png
[LN151]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/views-menu.png
[LN152]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/view-actions.png
[LN153]: command:nodeDependencies.addEntry
[LN154]: https://code.visualstudio.com/assets/api/extension-guides/tree-view/welcome-content.png
[LN155]: #WebviewView
[LN156]: #window.createWebviewPanel
[LN157]: #window.registerWebviewPanelSerializer
[LN158]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-no_content.png
[LN159]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-html.png
[LN160]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-update.gif
[LN161]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-restore.gif
[LN162]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-drag.gif
[LN163]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-single_panel.gif
[LN164]: https://code.visualstudio.com/assets/api/extension-guides/webview/basics-ondidchangeviewstate.gif
[LN165]: https://code.visualstudio.com/assets/api/extension-guides/webview/developer-overview.png
[LN166]: https://code.visualstudio.com/assets/api/extension-guides/webview/developer-inspect.png
[LN167]: https://code.visualstudio.com/assets/api/extension-guides/webview/developer-console.png
[LN168]: https://code.visualstudio.com/assets/api/extension-guides/webview/developer-active-frame.png
[LN169]: #security
[LN170]: #content-security-policy
[LN171]: https://code.visualstudio.com/assets/api/extension-guides/webview/webview-context-menus.png
[LN172]: https://code.visualstudio.com/assets/api/extension-guides/webview/webview-split-button-menu.png
[LN173]: https://code.visualstudio.com/assets/api/extension-guides/webview/scripts-basic.gif
[LN174]: https://code.visualstudio.com/assets/api/extension-guides/webview/scripts-extension_to_webview.gif
[LN175]: https://code.visualstudio.com/assets/api/extension-guides/webview/scripts-webview_to_extension.gif
[LN176]: #lifecycle
[LN177]: #passing-messages-from-a-webview-to-an-extension
[LN178]: https://code.visualstudio.com/assets/api/extension-guides/webview/retainContextWhenHidden.gif
[LN179]: /api
[LN180]: https://code.visualstudio.com/assets/api/extension-guides/notebook/architecture-overview.png
[LN181]: https://code.visualstudio.com/assets/api/extension-guides/notebook/ipynb-simple-provider.png
[LN182]: #notebook-renderer
[LN183]: https://code.visualstudio.com/assets/api/extension-guides/notebook/kernel.png
[LN184]: https://code.visualstudio.com/assets/api/extension-guides/notebook/text-output.png
[LN185]: https://code.visualstudio.com/assets/api/extension-guides/notebook/error-output.png
[LN186]: https://code.visualstudio.com/assets/api/extension-guides/notebook/rich-output.gif
[LN187]: https://code.visualstudio.com/assets/api/extension-guides/notebook/rust-output.png
[LN188]: https://code.visualstudio.com/assets/api/extension-guides/notebook/static-renderer-sample.png
[LN189]: https://code.visualstudio.com/assets/api/extension-guides/notebook/kernel-communication.png
[LN190]: #window.registerCustomEditorProvider
[LN191]: #CustomTextEditorProvider
[LN192]: #TextDocument
[LN193]: https://code.visualstudio.com/docs/editor/glob-patterns
[LN194]: #scripts-and-message-passing
[LN195]: #custom-text-editor
[LN196]: https://code.visualstudio.com/assets/api/extension-guides/virtual-documents/cowsay-bwd.png
[LN197]: #FileSystemProvider
[LN198]: #file-system-api
[LN199]: https://code.visualstudio.com/docs/remote/remote-overview
[LN200]: https://code.visualstudio.com/assets/api/extension-guides/virtual-workspaces/remote-indicator.png
[LN201]: https://code.visualstudio.com/docs/editor/vscode-web
[LN202]: https://code.visualstudio.com/assets/api/extension-guides/virtual-workspaces/extensions-view.png
[LN203]: https://code.visualstudio.com/docs/editor/workspace-trust#restricted-mode
[LN204]: #web-extension-main-file
[LN205]: https://code.visualstudio.com/docs/remote/codespaces
[LN206]: https://code.visualstudio.com/assets/api/extension-guides/web-extensions/extensions-view-item-disabled.png
[LN207]: #update-existing-extensions-to-web-extensions
[LN208]: #web-extension-enablement
[LN209]: #webpack-configuration
[LN210]: #FileSystem
[LN211]: #ExtensionContext
[LN212]: #language-server-protocol-in-web-extensions
[LN213]: #test-your-web-extension-in-vscode.dev
[LN214]: #test-your-web-extension
[LN215]: #web-extension-anatomy
[LN216]: https://code.visualstudio.com/docs/editor/workspace-trust
[LN217]: https://code.visualstudio.com/docs/editor/workspace-trust#_restricted-mode
[LN218]: #configurations-settings
[LN219]: https://code.visualstudio.com/assets/api/extension-guides/scm-provider/main.png
[LN220]: #scm
[LN221]: #SourceControlResourceGroup
[LN222]: #SourceControlResourceState
[LN223]: https://code.visualstudio.com/assets/api/extension-guides/scm-provider/sourcecontrol-menu.png
[LN224]: #QuickDiffProvider
[LN225]: #quick-diff
[LN226]: https://code.visualstudio.com/assets/api/extension-guides/scm-provider/quickdiff.png
[LN227]: #workspace
[LN228]: #Uri
[LN229]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-features.png
[LN230]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-arch1.png
[LN231]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-arch2.png
[LN232]: #contributes.breakpoints
[LN233]: #contributes.debuggers
[LN234]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/mock-debug.gif
[LN235]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-mock-session.png
[LN236]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debugger-extension-server.png
[LN237]: #alternative-approach-to-develop-a-debugger-extension
[LN238]: https://code.visualstudio.com/assets/api/extension-guides/debugger-extension/debug-init-config.png
[LN239]: #using-a-debugconfigurationprovider
[LN240]: #discovering-tests
[LN241]: #running-tests
[LN242]: #in-and-not-in-conditional-operators
[LN243]: https://code.visualstudio.com/docs/getstarted/telemetry
[LN244]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-containers.png
[LN245]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-containers.png
[LN246]: #primary-sidebar
[LN247]: #secondary-sidebar
[LN248]: #contributes.customEditors
[LN249]: #status-bar-items
[LN250]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-sections.png
[LN251]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/architecture-sections.png
[LN252]: #tree-views
[LN253]: #welcome-views
[LN254]: #webview-views
[LN255]: #view-actions
[LN256]: #sidebar-toolbars
[LN257]: #panel-toolbar
[LN258]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/command-palette.png
[LN259]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick.png
[LN260]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification.png
[LN261]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/webview.png
[LN262]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/context-menu.png
[LN263]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/walkthrough.png
[LN264]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/settings.png
[LN265]: #view-containers
[LN266]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/activity-bar.png
[LN267]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/sidebars.png
[LN268]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/primary-sidebar.png
[LN269]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/secondary-sidebar.png
[LN270]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/sidebar-toolbar-default.png
[LN271]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/sidebar-toolbar-actions.png
[LN272]: #contributes.viewsWelcome
[LN273]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/panel.png
[LN274]: #sidebar-toolbar
[LN275]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/panel-toolbar.png
[LN276]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/panel-toolbar-multiple-views.png
[LN277]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar.png
[LN278]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar-item.png
[LN279]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar-progress.png
[LN280]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar-error.png
[LN281]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/status-bar-warning.png
[LN282]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view.png
[LN283]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view-locations.png
[LN284]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view-container.png
[LN285]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view-container-panel.png
[LN286]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/tree-view.png
[LN287]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/welcome-view.png
[LN288]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view-with-progress.png
[LN289]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/view-toolbar.png
[LN290]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/editor-actions.png
[LN291]: #quick-pick
[LN292]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick-multi-step.png
[LN293]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick-multi-select.png
[LN294]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick-title.png
[LN295]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/quick-pick-separators.png
[LN296]: #QuickPickItem
[LN297]: #display-notifications
[LN298]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-decision-tree.png
[LN299]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-decision-tree.png
[LN300]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-info.png
[LN301]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-warning.png
[LN302]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-error.png
[LN303]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/notification-progress.png
[LN304]: https://code.visualstudio.com/docs/editor/accessibility
[LN305]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/webview-browser.png
[LN306]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/webview-pull-request.png
[LN307]: https://code.visualstudio.com/assets/api/ux-guidelines/examples/webview-view.png
[LN308]: #contributes.walkthroughs
[LN309]: #languages.registerHoverProvider
[LN310]: #languages.registerCompletionItemProvider
[LN311]: #languages.registerDefinitionProvider
[LN312]: https://code.visualstudio.com/assets/api/language-extensions/overview/multi-ls.png
[LN313]: https://code.visualstudio.com/assets/api/language-extensions/overview/multi-editor.png
[LN314]: https://code.visualstudio.com/docs/editor/multi-root-workspaces
[LN315]: #tokenization
[LN316]: #scope-inspector
[LN317]: #DocumentSemanticTokensProvider
[LN318]: semantic-highlight-guide
[LN319]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/scopes.png
[LN320]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/yo-new-language.png
[LN321]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/yo-new-language-questions.png
[LN322]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/generated-new-language-extension.png
[LN323]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/yo-convert.png
[LN324]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/yaml-grammar.png
[LN325]: #syntax-colors
[LN326]: semantic-highlight-guide#theming
[LN327]: https://code.visualstudio.com/assets/api/language-extensions/syntax-highlighting/scope-inspector.png
[LN328]: https://code.visualstudio.com/assets/api/language-extensions/semantic-highlighting/no-semantic-highlighting.png
[LN329]: https://code.visualstudio.com/assets/api/language-extensions/semantic-highlighting/with-semantic-highlighting.png
[LN330]: #semantic-token-scope-map
[LN331]: #custom-textmate-scope-mappings
[LN332]: #color-formats
[LN333]: #contributes.snippets
[LN334]: #DocumentRangeFormattingEditProvider
[LN335]: #hover
[LN336]: #HoverProvider
[LN337]: #language-features-listing
[LN338]: #languages.createDiagnosticCollection
[LN339]: #languages.registerSignatureHelpProvider
[LN340]: #languages.registerTypeDefinitionProvider
[LN341]: #languages.registerImplementationProvider
[LN342]: #languages.registerReferenceProvider
[LN343]: #languages.registerDocumentHighlightProvider
[LN344]: #languages.registerDocumentSymbolProvider
[LN345]: #languages.registerCodeActionsProvider
[LN346]: #languages.registerCodeLensProvider
[LN347]: #languages.registerDocumentLinkProvider
[LN348]: #languages.registerColorProvider
[LN349]: #languages.registerDocumentFormattingEditProvider
[LN350]: #languages.registerDocumentRangeFormattingEditProvider
[LN351]: #languages.registerOnTypeFormattingEditProvider
[LN352]: #languages.registerRenameProvider
[LN353]: #languages.registerFoldingRangeProvider
[LN354]: https://code.visualstudio.com/assets/api/language-extensions/language-support/diagnostics.gif
[LN355]: https://code.visualstudio.com/assets/api/language-extensions/language-support/code-completion.gif
[LN356]: https://code.visualstudio.com/assets/api/language-extensions/language-support/hovers.gif
[LN357]: https://code.visualstudio.com/assets/api/language-extensions/language-support/signature-help.gif
[LN358]: https://code.visualstudio.com/assets/api/language-extensions/language-support/goto-definition.gif
[LN359]: https://code.visualstudio.com/assets/api/language-extensions/language-support/find-references.gif
[LN360]: https://code.visualstudio.com/assets/api/language-extensions/language-support/document-highlights.gif
[LN361]: https://code.visualstudio.com/assets/api/language-extensions/language-support/document-symbols.gif
[LN362]: https://code.visualstudio.com/assets/api/language-extensions/language-support/workspace-symbols.gif
[LN363]: https://code.visualstudio.com/assets/api/language-extensions/language-support/quick-fixes.gif
[LN364]: https://code.visualstudio.com/assets/api/language-extensions/language-support/code-lens.gif
[LN365]: https://code.visualstudio.com/assets/api/language-extensions/language-support/color-decorators.png
[LN366]: https://code.visualstudio.com/assets/api/language-extensions/language-support/format-document.gif
[LN367]: https://code.visualstudio.com/assets/api/language-extensions/language-support/format-document-range.gif
[LN368]: https://code.visualstudio.com/assets/api/language-extensions/language-support/format-on-type.gif
[LN369]: https://code.visualstudio.com/assets/api/language-extensions/language-support/rename.gif
[LN370]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/lsp-languages-editors.png
[LN371]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/lsp-illustration.png
[LN372]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/validation.png
[LN373]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/debugging-client.png
[LN374]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/debugging-server.png
[LN375]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/lsp-log.png
[LN376]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/validationOneProblem.png
[LN377]: https://code.visualstudio.com/assets/api/language-extensions/language-server-extension-guide/codeComplete.png
[LN378]: #embedded-languages
[LN379]: https://code.visualstudio.com/assets/api/language-extensions/embedded-languages/embedded-lsp-sample.gif
[LN380]: #packaging-extensions
[LN381]: #vsce
[LN382]: #publishing-extensions
[LN383]: #unpublishing-extensions
[LN384]: #create-a-publisher
[LN385]: #approved-badges
[LN386]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/menu-pat.png
[LN387]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/new-token.png
[LN388]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/create-token.png
[LN389]: #get-a-personal-access-token
[LN390]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/publisher-id-and-name.png
[LN391]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/add-extension.png
[LN392]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/extension-report.png
[LN393]: #fields
[LN394]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/unpublish-extension.png
[LN395]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/unpublished-extension.png
[LN396]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/remove-extension.png
[LN397]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/deprecated-extension.png
[LN398]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/deprecated-with-no-alternatives.png
[LN399]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/deprecated-with-alternative-extension.png
[LN400]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/deprecated-with-alternative-setting.png
[LN401]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/deprecated-migrate-button.png
[LN402]: #eligible-domains
[LN403]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/verified-publisher.png
[LN404]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/publisher-details-tab.png
[LN405]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/publisher-details-tab-verified-domain.png
[LN406]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/saved-domain-to-verify.png
[LN407]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/txt-record-verification.png
[LN408]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/validation-submitted.png
[LN409]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/verified-publisher-manage.png
[LN410]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/sponsor-link-example.png
[LN411]: https://code.visualstudio.com/assets/api/working-with-extensions/publishing-extension/pre-release.png
[LN412]: #publishing
[LN413]: #automated-publishing
[LN414]: #Publishing
[LN415]: #tests
[LN416]: https://code.visualstudio.com/assets/api/working-with-extensions/continuous-integration/pipelines.png
[LN417]: #architecture-and-extension-kinds
[LN418]: #debugging-extensions
[LN419]: #common-problems
[LN420]: https://code.visualstudio.com/docs/remote/vscode-server
[LN421]: https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/architecture.png
[LN422]: #installing-a-development-version-of-your-extension
[LN423]: #debugging-with-github-codespaces
[LN424]: #debugging-in-a-custom-development-container
[LN425]: #debugging-using-ssh
[LN426]: #debugging-using-wsl
[LN427]: https://code.visualstudio.com/docs/devcontainers/containers#getting-started
[LN428]: https://code.visualstudio.com/docs/devcontainers/create-dev-container
[LN429]: https://code.visualstudio.com/docs/remote/ssh#getting-started
[LN430]: https://code.visualstudio.com/docs/remote/wsl
[LN431]: https://code.visualstudio.com/docs/devcontainers/containers
[LN432]: https://code.visualstudio.com/docs/remote/ssh
[LN433]: #preferred-extension-location
[LN434]: #data-storage
[LN435]: #opening-something-in-a-local-browser-or-application
[LN436]: https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/webview-problem.png
[LN437]: https://code.visualstudio.com/assets/api/advanced-topics/remote-extensions/webview-solution.png
[LN438]: #supporting-nonx8664-hosts-or-alpine-linux-containers
[LN439]: https://code.visualstudio.com/docs/remote/troubleshooting
[LN440]: https://code.visualstudio.com/docs/remote/faq
[LN441]: /insiders
[LN442]: https://code.visualstudio.com/assets/api/advanced-topics/proposed-api/install-from-vsix.gif
[LN443]: #examples
[LN444]: #advanced-usage
[LN445]: command:myCommandId
[LN446]: #Webview.asWebviewUri
[LN447]: #ConfigurationTarget.Global
[LN448]: #ConfigurationTarget.Workspace
[LN449]: #ConfigurationTarget.WorkspaceFolder
[LN450]: #contributes.configurationDefaults
[LN451]: #contributes.grammars
[LN452]: #contributes.icons
[LN453]: #contributes.iconThemes
[LN454]: #contributes.jsonValidation
[LN455]: #contributes.problemMatchers
[LN456]: #contributes.problemPatterns
[LN457]: #contributes.productIconThemes
[LN458]: #contributes.resourceLabelFormatters
[LN459]: #contributes.semanticTokenModifiers
[LN460]: #contributes.semanticTokenScopes
[LN461]: #contributes.semanticTokenTypes
[LN462]: #contributes.submenus
[LN463]: #contributes.taskDefinitions
[LN464]: #contributes.terminal
[LN465]: #contributes.themes
[LN466]: #contributes.typescriptServerPlugins
[LN467]: https://code.visualstudio.com/assets/api/references/contribution-points/commands.png
[LN468]: https://code.visualstudio.com/assets/api/references/contribution-points/command-icons.png
[LN469]: https://code.visualstudio.com/assets/api/references/contribution-points/configuration.png
[LN470]: https://code.visualstudio.com/assets/api/references/contribution-points/settings-ui.png
[LN471]: https://code.visualstudio.com/assets/api/references/contribution-points/settings-ui-enum.png
[LN472]: https://code.visualstudio.com/assets/api/references/contribution-points/settings-ui-icon-theme.png
[LN473]: https://code.visualstudio.com/assets/api/references/contribution-points/setting-link.png
[LN474]: https://code.visualstudio.com/assets/api/references/contribution-points/grammars.png
[LN475]: #icon-in-labels
[LN476]: https://code.visualstudio.com/assets/api/references/contribution-points/file-icon-themes.png
[LN477]: https://code.visualstudio.com/assets/api/references/contribution-points/keybindings.png
[LN478]: #menus
[LN479]: https://code.visualstudio.com/assets/api/references/contribution-points/menus.png
[LN480]: https://code.visualstudio.com/assets/api/references/contribution-points/menu_view_title.png
[LN481]: https://code.visualstudio.com/assets/api/references/contribution-points/submenu.png
[LN482]: https://code.visualstudio.com/assets/api/references/contribution-points/groupSorting.png
[LN483]: https://code.visualstudio.com/docs/editor/tasks#_defining-a-problem-matcher
[LN484]: https://code.visualstudio.com/assets/api/references/contribution-points/product-icon-themes.png
[LN485]: https://code.visualstudio.com/docs/languages/identifiers
[LN486]: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax
[LN487]: https://code.visualstudio.com/assets/api/references/contribution-points/submenucontrib.png
[LN488]: https://code.visualstudio.com/assets/api/references/contribution-points/color-themes.png
[LN489]: https://code.visualstudio.com/assets/api/references/contribution-points/views.png
[LN490]: #WebviewViewProvider
[LN491]: https://code.visualstudio.com/assets/api/references/contribution-points/custom-views-container.png
[LN492]: command:vscode.openFolder
[LN493]: command:git.clone
[LN494]: https://code.visualstudio.com/assets/api/references/contribution-points/viewsWelcome.png
[LN495]: command:getting-started-sample.runCommand
[LN496]: command:getting-started-sample.changeSetting
[LN497]: https://code.visualstudio.com/assets/api/references/contribution-points/walkthroughs.png
[LN498]: #onLanguage
[LN499]: #onDebug
[LN500]: #onDebugInitialConfigurations
[LN501]: #onDebugResolve
[LN502]: #workspaceContains
[LN503]: #onFileSystem
[LN504]: #onUri
[LN505]: #onWebviewPanel
[LN506]: #onCustomEditor
[LN507]: #onAuthenticationRequest
[LN508]: #onStartupFinished
[LN509]: #Start-up
[LN510]: #contribution-point
[LN511]: #visual-studio-code-compatibility
[LN512]: #prepublish-step
[LN513]: #extension-uninstall-hook
[LN514]: #extension-pricing-label
[LN515]: #static-declarations
[LN516]: #signal-whether-your-extension-can-handle-virtual-workspaces
[LN517]: #add-a-custom-when-clause-context
[LN518]: #inspect-context-keys-utility
[LN519]: https://code.visualstudio.com/assets/api/references/when-clause-contexts/inspect-context-keys.png
[LN520]: https://code.visualstudio.com/docs/getstarted/themes
[LN521]: https://code.visualstudio.com/assets/api/references/theme-color/button.png
[LN522]: https://code.visualstudio.com/assets/api/references/theme-color/dropdown.png
[LN523]: https://code.visualstudio.com/assets/api/references/theme-color/input.png
[LN524]: https://code.visualstudio.com/assets/api/references/theme-color/editorGroup-border.gif
[LN525]: https://code.visualstudio.com/assets/api/references/theme-color/editorGroup-dropbackground.gif
[LN526]: https://code.visualstudio.com/assets/api/references/theme-color/editorgroupheader-notabsbackground.gif
[LN527]: https://code.visualstudio.com/assets/api/references/theme-color/editorgroupheader-tabsbackground.gif
[LN528]: https://code.visualstudio.com/assets/api/references/theme-color/editorgroupheader-tabsborder.gif
[LN529]: https://code.visualstudio.com/docs/getstarted/themes#customizing-a-color-theme
[LN530]: https://code.visualstudio.com/assets/api/references/theme-color/selectionhighlight.png
[LN531]: https://code.visualstudio.com/assets/api/references/theme-color/occurrences.png
[LN532]: https://code.visualstudio.com/assets/api/references/theme-color/findmatches.png
[LN533]: https://code.visualstudio.com/assets/api/references/theme-color/search-colors.png
[LN534]: https://code.visualstudio.com/assets/api/references/theme-color/searchEditorMatches.png
[LN535]: https://code.visualstudio.com/assets/api/references/theme-color/hoverhighlight.png
[LN536]: https://code.visualstudio.com/assets/api/references/theme-color/line.png
[LN537]: https://code.visualstudio.com/assets/api/references/theme-color/link.png
[LN538]: https://code.visualstudio.com/assets/api/references/theme-color/rangehighlight.png
[LN539]: https://code.visualstudio.com/assets/api/references/theme-color/codelens.png
[LN540]: https://code.visualstudio.com/assets/api/references/theme-color/bracket-colors.png
[LN541]: https://code.visualstudio.com/assets/api/references/theme-color/peek-view.png
[LN542]: https://code.visualstudio.com/assets/api/references/theme-color/merge-ranges.png
[LN543]: https://code.visualstudio.com/assets/api/references/theme-color/notification-toast.png
[LN544]: https://code.visualstudio.com/assets/api/references/theme-color/notification-center.png
[LN545]: https://code.visualstudio.com/assets/api/references/theme-color/keybinding-label.png
[LN546]: https://code.visualstudio.com/docs/editor/extension-marketplace#extension-details
[LN547]: #DocumentFilter
[LN548]: #DocumentSelector
[LN549]: #_api_references_contribution-points
