
以下音乐库网站提供免费音乐，可以用于商业用途：

- Bensound：https://www.bensound.com/
- WOWA：https://www.wowa.me/
- Incompetech：https://incompetech.com/music/，https://incompetech.filmmusic.io/search/
- Free Music Archive：http://freemusicarchive.org/
- CCMixter：http://ccmixter.org/
- Jamendo Music：https://www.jamendo.com/
- Free Loops：http://free-loops.com/
- Freesound：https://freesound.org/
- Internet Archive’s Netlabels Collection ：https://archive.org/details/netlabels
- Jukedeck：https://www.jukedeck.com/
- Sound Image：http://soundimage.org/
- Sound Bible（音效网站）：http://soundbible.com/

# =🚩 Plugins 插件开发
- https://docs.sublimetext.io/guide/extensibility/plugins/
- https://docs.sublimetext.io/reference/plugins.html
- https://docs.sublimetext.io/reference/python_api.html
- https://docs.sublimetext.io/reference/key_bindings.html
- https://www.sublimetext.com/docs/3/api_reference.html
- Package Control https://packagecontrol.io/docs

## ==⚡ Sublime API 探索

将 Python 脚本放到 Sublime 安装包目录下就可以被插件管理器加载执行，可以使用以下脚本测试脚本解析器的版本及位置，并且最简单的插件只需要继承指定的类型就只可以实现：

```py
import sys
import sublime
import sublime_api

print("👉 Sublime Text Plugin Test - Python Script 👈")
if sys.version_info >= (3,6):
    print(
    f"    Module Name: {__name__}\n"
    f" Python Version: {sys.version}\n"
    f"   Version Info: {sys.version_info}\n"
    f"    Interpreter: {sys.executable}\n"
    f"   Sublime Text: {sublime.version()}\n"
    f"     Below 3.9?: {(3,9)>sys.version_info}\n"
    f"Type of version_info: {type(sys.version_info)}\n"
    f"Is version_info type of tuple: {isinstance(sys.version_info, tuple)}\n"
    f"sublime_api.version()                : {sublime_api.version()}\n"
    f"sublime_api.platform()               : {sublime_api.platform()}\n"
    f"sublime_api.architecture()           : {sublime_api.architecture()}\n"
    f"sublime_api.channel()                : {sublime_api.channel()}\n"
    f"sublime_api.executable_path()        : {sublime_api.executable_path()}\n"
    f"sublime_api.packages_path()          : {sublime_api.packages_path()}\n"
    f"sublime_api.installed_packages_path(): {sublime_api.installed_packages_path()}\n"
    f"sublime_api.cache_path()             : {sublime_api.cache_path()}\n"
    )
else:
    print("\n".join((
    " Python Version: %s" % str(sys.version), 
    "    Interpreter: %s" % sys.executable,
    "   Sublime Text: %s" % str(sublime.version()),
    )))
if sys.version_info >= (3,8):
    print(
    f"Byte-Code Cache  {sys.pycache_prefix}\n"
    )
```

>> Output:
👉 Sublime Text Plugin Test - Python Script 👈
    Module Name: User.TestPlugin
 Python Version: 3.8.8 (default, Mar 10 2021, 13:30:47) [MSC v.1915 64 bit (AMD64)]
   Version Info: sys.version_info(major=3, minor=8, micro=8, releaselevel='final', serial=0)
    Interpreter: C:\Program Files\Sublime Text 3\plugin_host-3.8.exe
   Sublime Text: 4121
     Below 3.9?: True
Type of version_info: <class 'sys.version_info'>
Is version_info type of tuple: True
sublime_api.version()                : 4121
sublime_api.platform()               : windows
sublime_api.architecture()           : x64
sublime_api.channel()                : stable
sublime_api.executable_path()        : C:\Program Files\Sublime Text 3\sublime_text.exe
sublime_api.packages_path()          : C:\Users\UserName\AppData\Roaming\Sublime Text 3\Packages
sublime_api.installed_packages_path(): C:\Users\UserName\AppData\Roaming\Sublime Text 3\Installed Packages
sublime_api.cache_path()             : C:\Users\UserName\AppData\Local\Sublime Text 3\Cache
Byte-Code Cache  C:\Users\UserName\AppData\Local\Sublime Text 3\Cache\__pycache__

因为 Python 运行时会先将脚本编译生成字节码再执行，所以开发插件时，可能因为文件经常改动导致原有的类型还存在字码文件中，但是最新的状态应该是删除掉的，这可以能导致一些难以发现的根源的问题。

可以重启或清理 Sublime Text 插件宿主程序生成的临时文件。

了解决 Sublime Text API 的基本框架，核心是 sublime_api 模块，它是 Plugin Host 导出的非开源 API 接口，基于这套开发插件。并且 Sublime Text 官方提供的插件 API 框架也是基于 sublime_api 整理的一套 Python 类框架。


### ===🗝 Windows、View、Sheet 关系

每个 Sublime 程序都可以创建多个窗口，也就是系统任务中看到的窗口，每个窗口包含多个 View，它与 Sheet 关联，不同类型的 Sheet 子类形，对应不同的内容格式，有 TextSheet、ImageSheet、HtmlSheet。

可以使用 Window 对象的 new_file() 方法创建一个 View，默认为 TextSheet 内容格式，当然，最后还是回到 sublime_api 展出的接口。

```py
    def new_html_sheet(self, name, contents, flags=0, group=-1):
        return make_sheet(sublime_api.window_new_html_sheet(
            self.window_id, name, contents, flags, group))


    def new_file(self, flags=0, syntax=""):
        """ flags must be either 0 or TRANSIENT """
        return View(sublime_api.window_new_file(self.window_id, flags, syntax))


    sublime_api.html_sheet_set_contents(self.sheet_id, contents)
```

以下代码演示了 Windows、View、Sheet 等对象是如何关联的，这些类对象是主程序界面的类型代表：

```py
import sys
import sublime
import sublime_api

# Window and View API
windows= sublime.windows()
window = sublime.active_window()
view = window.active_view()
view_id = view.id()
window_id = sublime_api.active_window()

window  = sublime.Window(window_id)
view_window = sublime.Window(sublime_api.view_window(view_id))
view    = sublime.View(view_id)

window_active_sheet = sublime_api.window_active_sheet(window_id)
view_sheet_id = sublime_api.view_sheet_id(view_id)
sheet_ids = sublime_api.window_sheets(window_id)
sheets = [sublime.make_sheet(x) for x in sheet_ids]
sheet_window = sublime.make_sheet(view_sheet_id).window()

title = "New HTML Sheet"
sheet_id = sublime_api.window_new_html_sheet(window_id, title, f"<h1>{title}</h1>", 1, 1)
Substitute = (f"""
    <h2>🚩Window & View & Sheet APIs</h2>
    <hr />
    <p>active_window = {window}, active_window_id = {window_id},
    <p>windows = {windows}, view_window = {view_window}, sheet_window = {sheet_window}
    <p>active_view = {view},     active_view_id = {view_id},
    <p>window_active_sheet = {window_active_sheet}
    <p>view_sheet_id = {view_sheet_id}
    <p>sheet_ids = {sheet_ids}
    <p>sheets = {sheets}
    <p>html sheet_id = {sheet_id}"
    """)
sublime_api.html_sheet_set_contents(sheet_id, Substitute)
```


### ===🗝 settings api

配置文件读写管理 API：

```py
import sublime

# Settings API
pc_settings_filename = 'Package Control.sublime-settings'
settings = sublime.load_settings(pc_settings_filename)
settings_to_dict=settings.to_dict()
name_map = settings.get('package_name_map', {})
installed_packages = settings.get('installed_packages')

print(f"""
    {pc_settings_filename}:
    name_map={name_map},
    repositories = {settings.get('repositories')}
    channels = {settings.get('channels')}
    package_name_map = {settings.get('package_name_map', {})}
    installed_packages = {installed_packages}
    package_profiles = {settings.get('package_profiles')}
    debug = {settings.get('debug')}
    submit_usage = {settings.get('submit_usage')}
    platform = {settings.get('platform')}
    version = {settings.get('version')}
    submit_url = {settings.get('submit_url')}
    """)
```

### ===🗝 Prints to panel

直接通过 Sublime API 实现一个 Prints to panel 动态输出文件内容的脚本功能：

```py
import sublime

def print_to_panel(output):
    """
    Prints to panel.
    👉 Sublime Text 4/Package Control/package_control/package_manager.py
    """
    window = sublime.active_window()

    views = window.views()
    view = None
    panel_name = 'Print To Panel.md'
    for _view in views:
        if _view.name() == panel_name:
            view = _view
            break

    if not view:
        view = window.new_file()
        view.set_name(panel_name)
        view.set_scratch(True) # without prompting to save
        view.settings().set("word_wrap", True)
        view.settings().set("auto_indent", False)
        view.settings().set("tab_width", 2)
        view.settings().set("syntax", "Markdown.sublime-syntax")
    else:
        view.set_read_only(False)
        if window.active_view() != view:
            window.focus_view(view)

    def write(string):
        view.run_command('insert', {'characters': string})

    old_sel = list(view.sel())
    old_vpos = view.viewport_position()

    size = view.size()
    view.sel().clear()
    view.sel().add(sublime.Region(size, size))

    if not view.size():
        write((u'''
# Print To Panel
========================

This orginal function code come from Package Control of Sublime Text.
'''))
    write(output)

    # Move caret to the new end of the file if it was previously
    if sublime.Region(size, size) == old_sel[-1]:
        old_sel[-1] = sublime.Region(view.size(), view.size())

    view.sel().clear()
    for reg in old_sel:
        view.sel().add(reg)

    view.set_viewport_position(old_vpos, False)
    # view.set_read_only(True)


def period_update(seconds:int, content: str):
    sublime.set_timeout((lambda it: lambda: print_to_panel(it))(content), seconds*1000)

period_update(0.2, f"""
# ⚡ Introduction

Content generated by a Python Lambda expression, in twice to make a closure to manager free variables.

And update view contents by a sublime.set_timeout API aka:

➡ sublime_api.set_timeout(f, timeout_ms) or 
➡ sublime_api.set_timeout_async(f, timeout_ms)
""")

pc_settings_filename = 'Package Control.sublime-settings'
settings = sublime.load_settings(pc_settings_filename)
installed_packages = settings.get('installed_packages')
period_update(2, f"""\n# ⚡ Installed Packages\n""")
for it in range(1, len(installed_packages)):
    pak = installed_packages[it]
    period_update(it/50 + 2, f"""## ✅ {it} - {installed_packages[it]} \n""")
```


### ===🗝 Output Panels & run_command

Output Panel 也是 View 的一种形式，Sublime 默认提供了 Build Result，对应名称为 output.exec，这个前缀表明了这是一个输出视图对象。可以通过菜单打开：Tools -> Build Results，也可以通过左正角的图标引出 Output Panel 切换菜单。

可以往 Context 菜单添加相应的菜单项，以方便用户打开输出框。

自定义的 Output Panel 的命名也会自动使用 output 前缀，在使用命令打开面板时需要添加这个前缀，注意，使用 window_find_output_panel 查找时不用指定前缀。

window_panels 可以检索所有面板，console 作为默认的控制台输出面板，比较特殊的，还有查找、替换面板，不能通过 window_find_output_panel 查找，不能执行 inser 这些命令。

	['console', 'find', 'find_in_files', 'output.SFTP', 'output.find_results', 'replace'] 

用户自定义面板都有 output 前缀，它们可以执行命令插入内容。每插入一行内容，都会在当前光标位置进行缩进，需要设置缩进模式及控制光标选区。

Python 标准输出文件在 Sublime 模块中定义为 LogWriter，它会向控制台的缓冲区写入输出数据：

```py
class _LogWriter(io.TextIOBase):
    def __init__(self):
        self.buf = None

    def flush(self):
        b = self.buf
        self.buf = None
        if b is not None and len(b):
            sublime_api.log_message(b)

    def write(self, s):
        if self.buf is None:
            self.buf = s
        else:
            self.buf += s
        if '\n' in s or '\r' in s:
            self.flush()

sys.stdout = _LogWriter()
sys.stderr = _LogWriter()
```

通过改写逻辑，就可以插件的控制台输出重定向到自定义面板。但是对多行文本无效，变通一下使用转义字符解决。

另外，不同类型的命令，需要相应的执行对象，比如，show_panel 命令一般由 window_run_command 执行，使用 view_run_command 就无法打开 *find_in_files* 面板，属于无效命令。

目前 Sublime 集成的 Python 3.8 版本，像 *match* 这种新版本语法是不支持的，使用它会导致无效语法报错。

```py
import sys
import io
from datetime import date, datetime
import sublime_api as sapi
from sublime import *
from sublime_plugin import *

# Console Panel redirect
class _LogWriter(sublime._LogWriter):

    def write(self, s):
        super().write(s)
        if '\n' in s or '\r' in s:
            return sapi.status_message("⚠ console output flush")

        window_id = sapi.active_window()
        unlisted = True
        name = "TestPlugin_OutputPanel"
        panel_id = sapi.window_find_output_panel(window_id, name)
        panel_view = View(panel_id) if panel_id else \
            View(sapi.window_create_output_panel(window_id, name, unlisted))

        panel_view.settings().set("auto_indent", False)
        panel_view.sel().clear()
        panel_view.sel().add(Region(0))

        timestamp = datetime.today().strftime("%H:%M::%S")
        console_output = s.replace("/n/n", "\n")
        panel_view.run_command('insert', {'characters':f'''
--===== 👉TestPlugin Output Panel {panel_view}👈 =====---
=================== {timestamp} ===================
{console_output}
'''})

sys.stdout = _LogWriter()
# sys.stderr = _LogWriter()


# Output Panel API
window_id = sapi.active_window()
window = Window(window_id)
view = View(sapi.window_active_view(window_id))

panels = sapi.window_panels(window_id)
view_ids = sapi.window_views(window_id, True)
# sapi.window_focus_view(window_id, view_id)
views = [{ 
    "view": View(x), 
    "file": View(x).file_name().replace("\\","/").rsplit("/", 1)[1] \
         if View(x).file_name() else "NONAME"
    } for x in view_ids]

name = "TestPlugin_OutputPanel"
panel_id = sapi.window_find_output_panel(window_id, name)
panel = View(panel_id) if panel_id else None
panel.set_name(name)

edit_token = 991
edit = None
try:
    edit = panel.begin_edit(edit_token, "insert", "ABC")
finally:
    panel.end_edit(edit)

print(f'''\
#==> sys.stdout: {sys.stdout}
#==> sys.stderr: {sys.stderr}
#==> sys.stdin: {sys.stdin}
#==> panel name: {panel.name()}
#==> panel id: {panel_id} {panel_id or ": 0 means not a valid id."}
#==> panel view: {panel} {panel or ": Can't find panel view."}
#==> edit: {edit}
#==> is_valid: {panel.is_valid()}
#==> is_in_edit: {panel.is_in_edit()}
#==> is_read_only: {panel.is_read_only()}
#==> is_scratch: {panel.is_scratch()}
#==> panel names: {panels} 
#==> view ids: {view_ids} 
#==> view names: {views} 
'''.replace("\n", "/n/n"))

# Run Command API
cmd = "type_pad"
args =  {"type":"SimpleInputHandler", "text": "Run from TestPlugin.py"}
# view.run_command(cmd, args)
# view.run_command('insert', {'characters': "string"})
# sapi.view_run_command(view_id, cmd, args)
# sapi.window_run_command(window_id, cmd, args)

cmd = "show_panel"
args =  {"panel": "find_in_files"}
args =  {"panel":"output.exec"}      # Build tools output panel
args =  {"panel":"console", "toggle": True}
args =  {"panel":"output.%s" % name} # Other output panel
sapi.window_run_command(window_id, cmd, args)
# sapi.view_run_command(view_id, cmd, args)
```


### ===🗝 Dialogs test

以下脚本可以测试 Sublime 提供的各种 Dialogs，包括输入框等：

```py
import sys
import sublime
import sublime_api

def on_select(*args): show_callback_result("on_select", *args)
def on_done(*args): 
    show_quick_panel(["You have type:", *args], on_select, 1, 0)
    show_callback_result("on_done", *args)
def on_change(*args): show_callback_result("on_change", *args)
def on_cancel(*args): show_callback_result("on_cancel", *args)
def on_highlight(*args): show_callback_result("on_highlight", *args)
def show_callback_result(type, args):
    print(f'''
    show_callback_result:
        type: {type}
        args = {args}
        ''')
    sublime.status_message("⚡show_callback_result: %s -> %s" % (type, str(args)))

def show_input_panel(caption, initial_text, on_done, on_change, on_cancel):
    """ on_done and on_change should accept a string argument, on_cancel should have no arguments """
    window_id = sublime_api.active_window()
    return sublime.View(sublime_api.window_show_input_panel(
        window_id, caption, initial_text, on_done, on_change, on_cancel))

def show_quick_panel(items, on_select, selected_index=-1, flags = None, on_highlight=None, placeholder=None):
    windows = sublime.windows()
    window_id = sublime_api.active_window()
    window  = sublime.Window(window_id)
    view_id = sublime_api.window_active_view(window_id)
    view    = sublime.View(view_id)

    if flags==None and int(sublime.version()) >= 3070:
        flags = sublime.KEEP_OPEN_ON_FOCUS_LOST
    elif flags==None:
        flags = 0

    sublime_api.window_show_quick_panel(
        window_id, items, on_select, on_highlight,
        flags, selected_index, placeholder or '')

# Quick List/Input Panel API
def switchable_panels(index:int = 0):
    selected_index = 1
    flags = 0
    items = [
        "Exit TestPlugin List", 
        "show_quick_panel", 
        "show_input_panel", 
        "window.show_quick_panel", 
        "sublime_api.window_show_quick_panel",
        "sublime_api.window_show_input_panel"]

    window_id = sublime_api.active_window()
    window = sublime.Window(window_id)

    on_select(index)

    item = items[index]

    # match case: # python 3.10
    item == "show_quick_panel" and \
        show_quick_panel(items, switchable_panels, selected_index, flags, on_highlight, items[index])
    item == "show_input_panel" and \
        show_input_panel("TestPlugin", "type some text: show_quick_panel", on_done, on_change, on_cancel)
    item == "window.show_quick_panel" and \
        window.show_quick_panel(items, switchable_panels, selected_index, flags, on_highlight, items[index])
    item == "sublime_api.window_show_quick_panel" and \
        sublime_api.window_show_quick_panel(
                window_id, items, switchable_panels, on_highlight,
                flags, selected_index, 'This is window_show_quick_panel')
    item == "sublime_api.window_show_input_panel" and \
        sublime_api.window_show_input_panel(
            window_id, items[0], items[index], on_done, on_change, on_cancel)
    index == 0 and on_select(index)
    sublime.status_message(f"👉 {item}")
    return items
    
items = switchable_panels()
show_quick_panel(items, switchable_panels, 0)
```


## ==⚡ Window Panels APIs 用户界面

可以通过 API 创建用户界面，更灵活的方法还包括使用 View 创建文件视图并展示内容，Sublime Text 本来就是文字编辑工具！

和弹窗相关的全局方法由 sublime 模块提供，主要是调用 Plugin Host 封装的 sublime_api 方法：

```py
def status_message(msg): sublime_api.status_message(msg)
def error_message(msg): sublime_api.error_message(msg)
def message_dialog(msg): sublime_api.message_dialog(msg)

def ok_cancel_dialog(msg, ok_title="", title=""): 
	return sublime_api.ok_cancel_dialog(msg, title, ok_title)
def yes_no_cancel_dialog(msg, yes_title="", no_title="", title=""):
    return sublime_api.yes_no_cancel_dialog(msg, title, yes_title, no_title)

def open_dialog(callback, file_types=[], directory=None, multi_select=False, allow_folders=False):
    """
    Show the open file dialog.

    callback - Called with selected path or `None` once open dialog is closed.
    file_types: [(str, [str])] - A list of allowed file types, consisting of a
                                 description and a list of allowed extensions.
    directory: str | None - The directory the dialog should start in. Will use
                            the virtual working directory if not provided.
    multi_select: bool - Whether to allow selecting multiple files. Function
                         will call callback with a list if this is True.
    allow_folders: bool - Whether to also allow selecting folders. Only works on
                          macOS. If you only want to select folders use
                          `select_folder_dialog`.
    """
    flags = 0
    if multi_select:
        flags |= 1
    if allow_folders:
        flags |= 2

    cb = callback
    if not multi_select:
        cb = lambda files: callback(files[0] if files else None)

    sublime_api.open_dialog(file_types, directory or '', flags, cb)


def save_dialog(callback, file_types=[], directory=None, name=None, extension=None):
    """
    Show the save file dialog.

    callback - Called with selected path or `None` once open dialog is closed.
    file_types: [(str, [str])] - A list of allowed file types, consisting of a
                                 description and a list of allowed extensions.
    directory: str | None - The directory the dialog should start in. Will use
                            the virtual working directory if not provided.
    name: str | None - The default name of the file in the save dialog.
    extension: str | None - The default extension used in the save dialog.
    """
    sublime_api.save_dialog(file_types, directory or '', name or '', extension or '', callback)


def select_folder_dialog(callback, directory=None, multi_select=False):
    """
    Show the select folder dialog.

    callback - Called with selected path or `None` once open dialog is closed.
    directory: str | None - The directory the dialog should start in. Will use
                            the virtual working directory if not provided.
    multi_select: bool - Whether to allow selecting multiple folders. Function
                         will call callback with a list if this is True.
    """
    cb = callback
    if not multi_select:
        cb = lambda folders: callback(folders[0] if folders else None)

    sublime_api.select_folder_dialog(directory or '', multi_select, cb)


def active_window():
    return Window(sublime_api.active_window())


def windows():
    return [Window(id) for id in sublime_api.windows()]
```

扩展 *WindowCommand* 插件时，可以在构造方法中接收窗口实例的引用。sublime.Window 提供多种用户界面相关的方法，主要是以 panel 后缀命名，有 output_panel、input_panel、quick_panel 等：

- *showQuickPanel(key, command, args, <displayArgs>, <flags>)* ->  none
- *showSelectPanel(displayArgs, onSelect, onCancel, flags, <key>, <selectedIndex>)* -> none
- *showInputPanel(caption, initialText, onDone, onChange, onCancel)* ->    View

```py
    def create_output_panel(self, name, unlisted=False):
        return View(sublime_api.window_create_output_panel(self.window_id, name, unlisted))

    def find_output_panel(self, name):
        view_id = sublime_api.window_find_output_panel(self.window_id, name)
        return View(view_id) if view_id else None

    def destroy_output_panel(self, name):
        sublime_api.window_destroy_output_panel(self.window_id, name)

    def active_panel(self):
        name = sublime_api.window_active_panel(self.window_id)
        return name or None

    def panels(self):
        return sublime_api.window_panels(self.window_id)

    def get_output_panel(self, name):
        """ deprecated, use create_output_panel """
        return self.create_output_panel(name)

    def show_input_panel(self, caption, initial_text, on_done, on_change, on_cancel):
        """ on_done and on_change should accept a string argument, on_cancel should have no arguments """
        return View(sublime_api.window_show_input_panel(
            self.window_id, caption, initial_text, on_done, on_change, on_cancel))

    def show_quick_panel(self, items, on_select, flags=0, selected_index=-1, on_highlight=None, placeholder=None):
		...
        sublime_api.window_show_quick_panel(
            self.window_id, item_tuples, on_select, on_highlight,
            flags, selected_index, placeholder or '')
```


sublime.View 提供的和用户界面相关的方法：

```py
    def show_popup_menu(self, items, on_select, flags=0):
        """
        on_select is called when the the quick panel is finished, and should accept a
        single integer, specifying which item was selected, or -1 for none
        """
        return sublime_api.view_show_popup_table(self.view_id, items, on_select, flags, -1)

    def show_popup(self, content, flags=0, location=-1,
                   max_width=320, max_height=240,
                   on_navigate=None, on_hide=None):
        sublime_api.view_show_popup(
            self.view_id, location, content, flags, max_width, max_height,
            on_navigate, on_hide)

    def update_popup(self, content):
        sublime_api.view_update_popup_content(self.view_id, content)

    def is_popup_visible(self):
        return sublime_api.view_is_popup_visible(self.view_id)

    def hide_popup(self):
        sublime_api.view_hide_popup(self.view_id)
```



## ==⚡ Basic Concepts

Plugins are Python scripts subclassing any of the `*Command` or `*Listener` classes from the sublime_plugin module.

In order to write plugins, you must be able to program in Python. At the time of this writing, Sublime Text uses Python 3.3.


➡ **Where to Store Plugins**
Sublime Text will look for plugins in these places:

	Packages
	Packages/<pkg_name>
	.sublime-package files

Plugin files nested deeper in Packages won't be loaded.

All plugins should live inside a folder of their own and not directly under Packages. This will spare you confusions when Sublime Text attempts to sort packages for loading.

➡ **Your First Plugin**
Let's write a "Hello, World!" plugin for Sublime Text:

	Select Tools | Developer | New Plugin... in the menu.

Save to Packages/User/hello_world.py.

You've just written your first plugin! Let's put it to use:

- Create a new buffer (Ctrl N).
- Open the Python console (Ctrl `).
- Type: `view.run_command("example")` and press enter.

You should see the text "Hello, World!" in the newly created buffer. `window.run_command("example")` will insert text into console window.

➡ **Analyzing Your First Plugin**
The plugin created in the previous section should look roughly like this:

```py
import sublime
import sublime_plugin


class ExampleCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        self.view.insert(edit, 0, "Hello, World!")
```

Both the *sublime* and *sublime_plugin* modules are provided by Sublime Text; they are not part of the Python standard library.

As we mentioned earlier, plugins reuse or create commands. Commands are an essential building block in Sublime Text. They are simply Python classes that can be called in similar ways from different Sublime Text facilities, like the plugin API, menu files, macros, etc.

Sublime Text Commands derive from the `*Command` classes defined in sublime_plugin.

The rest of the code in our example is concerned with particulars of `TextCommand` or with the API. We'll discuss those topics in later sections.

Before moving on, though, we'll look at how we invoked the new command: first we opened the Python console and then we issued a call to `view.run_command()`.

This is a rather inconvenient way of calling commands, but it's often useful when you're in the development phase of a plugin. 

For now, keep in mind that your commands can be accessed through key bindings and by other means, just like:

- Key Bindings: Select Preferences -> Key Bindings ... in the menu.

	    { "keys": ["alt+m"], "command": "view_latex" },

- Command Palette: ref Packages/Default/Default.sublime-commands

	    { "caption": "Example Plugin", "command": "example" },

- Menus: default Main.sublime-menu, Context.sublime-menu.


➡ **Another Plugin Example: Feeding the Completions List**
Let's create a plugin that fetches data from Google's Autocomplete service and then feeds it to the Sublime Text completions list. Please note that, as ideas for plugins go, this a very bad one.

```py
import sublime
import sublime_plugin

from xml.etree import ElementTree as ET
import urllib

GOOGLE_AC = r"http://google.com/complete/search?output=toolbar&q=%s"


class GoogleAutocomplete(sublime_plugin.EventListener):
    def on_query_completions(self, view, prefix, locations):
        elements = ET.parse(
            urllib.request.urlopen(GOOGLE_AC % prefix)
        ).getroot().findall("./CompleteSuggestion/suggestion")

        sugs = [(x.attrib["data"],) * 2 for x in elements]

        return sugs
```

Note
Make sure you don't keep this plugin around after trying it or it will interfere with the autocompletion system.

➡ **How to Call Commands from the API**
Depending on the type of command, use a reference to a `View` or a `Window` and call `<object>.run_command('command_name')`. In addition to the command's name, `.run_command` accepts a dictionary whose keys are the names of valid parameters for said command:

	window.run_command("echo", {"Tempus": "Irreparabile", "Fugit": "."})

All user-provided arguments to commands must JSON-serializable. This includes strings, integers, floats, booleans, None, and the recursive list and dict types. Mapping keys must be strings.

➡ **Text Commands and the edit Object**
Text commands receive an edit object passed to them by Sublime Text.

All actions done within an edit are grouped as a single undo action. Callbacks such as `on_modified()` and `on_selection_modified()` are called when the most outer edit operation is finished.

The edit object's life time is solely managed by Sublime Text internally. Plugin authors must ensure to perform all editing operations within the `run()` method of text commands so that macros and repeating commands work as expected.

➡ **Conventions for Command Names**
By convention, Sublime Text command class names are suffixed with Command and written as `NamesLikeThisCommand`.

However, command names are automatically transformed from `NamesLikeThisCommand` to `name_like_this`. Thus, `ExampleCommand` would become `example`, and `AnotherExampleCommand` would become `another_example`.

In names for classes defining commands, use NameLikeThisCommand. To call a command from the API, use the standardized name_like_this.

➡ **Types of Commands**

- sublime_plugin.ApplicationCommand
- sublime_plugin.WindowCommand
- sublime_plugin.TextCommand

Instances of WindowCommand have a *.window* attribute pointing to the window instance that created them. Similarly, instances of TextCommand have a *.view* attribute. ApplicationCommand instances don't have either.

➡ **Shared Traits of Commands**
All commands need to implement a `.run()` method in order to work. Additionally, they can receive an arbitrarily long number of keyword parameters.

➡ **Responding to Events**

Any command deriving from `EventListener` will be able to respond to events.

➡ **Learning the API**

To get acquainted with the Sublime Text API and the available commands, it may be helpful to read existing code and learn from it.

In particular, the Packages/Default contains many examples of undocumented commands and API calls. Note that you will first have to extract its contents to a folder if you want to take a look at the code within - PackageResourceViewer (opens new window)helps with this.

➡ **Automatic Plugin Reload**
Sublime Text will reload topmost Python modules as they change (perhaps because you are editing a .py file within Packages). By contrast, Python subpackages won't be reloaded automatically, and this can lead to confusion while you're developing plugins. Generally speaking, it's best to restart Sublime Text after you've made changes to plugin files, so all changes can take effect.


## ==⚡ Creating Package Files
- Creating Package Files https://packagecontrol.io/docs/creating_package_files
- Submitting a Package https://packagecontrol.io/docs/submitting_a_package

开发好插件，最后一个流程就是打包发布共享，也可以直接将插件包文件复制到 Packages 目录即完成安装，但是，通过官方插件库安装的插件配置优先加载。

插件打包就是使用 zip 压缩包，只不过扩展名是 .sublime-package，统一管理插件所有脚本、配置文件等，方便统一管理。

压缩包内容可以参考现有的插件，如 Python.sublime-package，内容包括：

```sh
- Python.sublime-package
	- Comments.tmPreferences
	- Completion Rules.tmPreferences
	- Console Input Widget.sublime-settings
	- Default.sublime-keymap
	- Indentation Rules.tmPreferences
	- Python.sublime-build
	- Python.sublime-syntax
	- Regular Expressions (Python).sublime-syntax
	- Symbol List.tmPreferences
	- syntax_test_python.py
	- syntax_test_python_strings.py
	+ Snippets
		- for.sublime-snippet
		- function.sublime-snippet
		- if-__name__-==-'__main__'.sublime-snippet
		- if.sublime-snippet
		- method.sublime-snippet
		- New-Class.sublime-snippet
		- New-Property.sublime-snippet
		- Try-Except-Else-Finally.sublime-snippet
		- Try-Except-Else.sublime-snippet
		- Try-Except-Finally.sublime-snippet
		- Try-Except.sublime-snippet
		- while.sublime-snippet
		- __magic__.sublime-snippet
```

要通过 Package Control 插件管理器来安装，就需要按手册要求制作插件配置文件，并使用 package_control_channel 方式推送插件：

1). 注册 github 帐号，并 fork https://github.com/wbond/package_control_channel
2). 通过 git clone 命令下载你 fork 产生的代码仓库，如: git@github.com:youname/package_control_channel.git
3). 修改 repositories.json 这个文件，把插件名称和对应的 github 项目地址添加进去
4). ci 并 push 到你的 package ctrol 里，然后通过 pull
5). request 推到官方的 github 里，如果审批通过，插件就会放到 package control 里，别人就可以通过 install 直接安装了


➡ `Pick a Name`

Try not to use the word Sublime in your package name. Every package available via Package Control is for Sublime Text. Using the word Sublime just adds noise to the list when trying to find packages. You can use the word Sublime in your marketing material, but omit it the package list, e.g. Sublime SFTP.
↪1. Don’t use a name too similar to another. We don’t want `Todo` and `T0d0`.
↪2. Use `CamelCase` or `underscore_notation`. Other Python packages in ST3 will be able to more easily interact with it. Additionally, the search indexer will properly split words, making search results more accurate. Obviously this does not matter if your package name is a single word or contains no Python.
↪3. Do not use a `.` in the package name. If you package includes any Python code, it will not load in ST3. This is because Python uses `.` as a folder separator when importing code.
↪4. Do not use a `/` or other restricted characters in the package name. Package names are used as part of a file or folder name, depending on what version of Sublime Text the user is using. Invalid characters include: `<, >, :, ", /, \, |, ? and *`.
↪5. Use ASCII only if possible. The quick panel that Package Control uses in Sublime Text for selecting packages does not do match characters with diacritics unless they are entered by the user. Thus a user searching for resume will not find résumé.
↪6. Check hard-coded references. The package name is (effectively) used as the package folder name. Any file path references in a theme or Python code must use this package folder name. Be sure your local package folder name matches. See the `.no-sublime-package` file discussed in step 5 if you need to ensure files are always unpacked into a folder.


➡ `Decide how to Host`

You‘ll need to pick one of the following two hosting options:

↪ Use a public `GitHub` or `BitBucket` repository. Only include one package per repository and be sure the root of the package is the root of the repository.
↪ Host `.sublime-package` files and a `packages.json` on a web server with SSL. For each release you’ll need to create and upload a new package file and update the `packages.json` information. Hosting of the files must be done on a secure server to help ensure the security of users’ machines. Unsecure URLs could lead to malicious code being loaded and run. This is rarely used – see `example-repository.json` for documentation.

No matter how your package is hosted, Package Control will check it for updates approximately once per hour. The Last Seen date on the package detail page of this site will show the last time (UTC) when the package information was refreshed.


➡ `Prepare Your Repository`
 
Remove any `.pyc` files from your repository. Sublime Text will generate the appropriate `.pyc` files the first time the package is loaded. Also, different versions of Python use different formats.

Remove `package-metadata.json`. This is automatically generated by Package Control when a package is installed and should not be in your repository.

Check file names. Windows has the most restrictive rules on valid characters in a file name. Be sure file names do not contain characters including: `<, >, :, ", /, \, |, ? and *`. Non-ASCII characters may present trouble when developing cross-platform packages.

If including executables or shared libraries, add a `.no-sublime-package` file. Adding this file to the root of your repository will prevent Package Control from keeping your package packed as a `.sublime-package` file in ST3.


➡ `Packed vs. Unpacked`

Sublime Text 3 offers the most options for overriding a package. By default, packages will be installed by placing a .sublime-package file in the Install `Packages/` folder. Then users may override individual files in the package by creating a folder `Packages/{Package Name}/` and placing edited files in there.

Unfortunately not all packages work when stored inside of a `.sublime-package` file. This is usually because the package includes files such as shared libraries or executables. If a developer places a file named `.no-sublime-package` in the root of their package, Package Control will extract the package into `Packages/{Package Name}/`.

Packages stored in `.sublime-package` files are referred to as packed, whereas packages extracted into a folder in `Packages/` are referred to as unpacked. Sublime Text 2 only supports unpacked packages.

Unpacked packages can be customized via User Package or Git/Hg Clone. Packed packages may use Overrides, User Package or Git/Hg Clone.



➡ `Creating Package Files`
If you are developing a package, and plan on doing custom repository hosting instead of using GitHub or BitBucket, Package Control includes the command Create Package to assist in creating `.sublime-package` files from your package directories. This command is run via the command palette, and via the settings, allows you to customize what files are included in the output package file.

➡ `Package Profiles`
Before running the `Create Package` command, take a moment to review the various settings that control the output. Package Control ships with two profiles, Default and Binaries Only. Here are the settings the control the Default profile:

↪ dirs_to_ignore
↪ files_to_ignore
↪ files_to_include
↪ package_destination

The `package_profiles` setting allows creating other named profiles that can override each of the settings listed above. By default, a single custom profile is included: `Binaries Only`. Copy the settings from `Preferences > Package Settings > Package Control > Settings – Default` into `Preferences > Package Settings > Package Control > Settings – User` and customize to suit your needs.

➡ `Running Create Package`
Running the Create Package command will prompt you to select a package to create the package file for. Next, it will ask you to choose what package profile you would like to use. Package Control will then create a `.sublime-package` file, add the package files to it and place it in the package_destination.

➡ `.pyc Files`
With Sublime Text 2, all python files are compiled into .pyc files by default by Sublime Text itself. This allows you to choose if you want to ship a binary-only package. Python 3 in Sublime Text 3 changes how Python scripts are compiled, storing them all in a __pycache__/ folder, which doesn’t work if you are trying to ship a binary only package.

Because of this, Package Control explicitly compiles all .py files into .pyc files, in the same directory, bypassing the __pycache__/ for Sublime Text 3. So, while normally Python 2 and Python 3 are quite different when it comes to .pyc files, Package Control works around the issue. Please note, however, that it will still be required to ship a different version of the package for Sublime Text 2 and Sublime Text 3 since they use different .pyc formats. This can be accomplished by running Create Package from Sublime Text 2 for an ST2-compatible version of the package, and running Create Package from Sublime Text 3 for an ST3-compatible version.


## ==⚡ Menus configs
https://docs.sublimetext.io/guide/customization/menus.html

Sublime Text provides several menus that can be modified, for example, by adding menu items.

The file name of a *.sublime-menu* file specifies the menu to be modified in the application.

The following menus are available:

|      Menu Name       |                             Description                              |
|----------------------|----------------------------------------------------------------------|
| Main                 | Main menu                                                            |
| Context              | Context menu in the editing area                                     |
| Find in Files        | Appears when clicking the “…” button in the Find in Files panel.     |
| Side Bar             | Context menu for each node in the sidebar                            |
| Side Bar Mount Point | Additional context menu items for the top-level nodes in the sidebar |
| Tab Context          | Context menu of the tab bar                                          |
| Widget Context       | Context menu of input fields                                         |


Widget Context is menu of input fields in all kinds of widgets, including Command Palette, Goto Anything, the Find panels and panels opened by plugins

Additionally, the following four menus open when you click their respective section in the status bar menuitem:

- Encoding  状态栏文件编码弹出菜单
- Line Endings 状态栏文本文件换行符号类型设置菜单
- Indentation 状态栏制表符设置弹出菜单
- Syntax 状态栏文件语法设置菜单

File Format

|   Format  |               Description               |
|-----------|-----------------------------------------|
| Format    | JSON (with comments)                    |
| Extension | .sublime-menu                           |
| Name      | One out of the list of available menus. |
| Location  | Any under Packages                      |
| Content   | A list of Menu Item objects             |

➡ **Example**
The following is an excerpt from the default Main.sublime-menu file.

```json
[
    {
        "caption": "Edit",
        "mnemonic": "E",
        "id": "edit",
        "children":
        [
            { "command": "undo", "mnemonic": "U" },
            { "command": "redo_or_repeat", "mnemonic": "R" },
            {
                "caption": "Undo Selection",
                "children":
                [
                    { "command": "soft_undo" },
                    { "command": "soft_redo" }
                ]
            },
            { "caption": "-", "id": "clipboard" },
            { "command": "copy", "mnemonic": "C" },
            { "command": "cut", "mnemonic": "t" },
            { "command": "paste", "mnemonic": "P" },
            { "command": "paste_and_indent", "mnemonic": "I" },
            { "command": "paste_from_history", "caption": "Paste from History" }
        ]
    }
]
```

主菜单对应 id 设置，可以将菜单配置到指定的主菜单上显示，或者创建一个新的菜单。多个设置出现时，只有最后一个 id 生效：

```json
[
    {
        "id": "file", "caption": "File", "mnemonic": "f",
        "id": "edit", "caption": "Edit", "mnemonic": "e",
        "id": "find", "caption": "Find", "mnemonic": "i",
        "id": "view", "caption": "View", "mnemonic": "v",
        "id": "project", "caption": "Project", "mnemonic": "p",
        "id": "preferences", "caption": "Preferences", "mnemonic": "n",
        "id": "goto", "caption": "Goto", "mnemonic": "g",
        "id": "tools", "caption": "Tools", "mnemonic": "t",
        "id": "help", "caption": "Help", "mnemonic": "h",
        "id": "latex", "caption": "Latex", "mnemonic": "l",
        "children":[
        {
            "caption": "View Latex",
            "command": "view_latex",
            "mnemonic": "V",
            "id": "view_latex",
            "keys": ["f1"], 
            "args": {"paths": [],"files": []}
        },
        {
            "caption": "First Column",
            "command": "first_column",
            "mnemonic": "F",
            "id": "first_column",
            "keys": ["alt+m"], 
            "args": {"paths": [],"files": []}
        },
        {
            "caption": "Index Rows",
            "command": "index_rows",
            "mnemonic": "I",
            "id": "index_rows",
            "keys": ["f5"], 
            "args": {"paths": [],"files": []}
        }
        ]
    }
]
```



➡ **Menu Item Objects**
Menu items may have the following properties.

Unless you are referencing an existing item via ID, each menu item must define either children, command or caption.

- *command* Name of the command to be called when the menu item is selected.
- *args* Object of arguments to the command. For Side Bar and Side Bar Mount Point menus, this is extended by a files argument that contains all selected items in the sidebar as a list.
- *caption* Text to be displayed in the menu. A single hyphen (-) turns the item into a Menu Separator.
- *children* List of Menu Item objects that are displayed when the item is hovered. Overrides existence of command property.
- *mnemonic* A single character used for menu accelerators. The character must be contained in the caption and is case-sensitive.
- *id* A unique string identifier for the menu item. This can be used to extend menu sections or sub-menu or to alter a menu item entirely.
- *Refer* to the main documentation on how this works. 
- *platform* The platform name for which the menu entry should be made visible. One of the strings: "OSX", "!OSX", "Windows", "!Windows", "Linux" or "!Linux". Negation form, such is !OSX, means to show the menu entry for all platforms except OSX.

When selected, a menu item can either invoke a command (with arguments), or open a submenu.

In order to function properly, a menu item must provide at least:

- a command name,
- a caption and a submenu,
- just a caption, or
- an ID (see below).

When parsing a menu item, the following rules apply:

- A menu item with a submenu cannot invoke a command. If the separator caption is used, it will be rendered as a literal hyphen.
- If no caption is provided, a caption is inferred from the command's description method. If neither caption nor command are provided, the caption will be an empty string.
- The character used for the mnemonic must be contained in the item's caption. Mnemonics are case-sensitive.
- Menu that reference missing commands are disabled.
- Menu items can be hidden or disabled by their referenced command.

➡ **Separators**
Separators are menu items with the caption - and no submenu. They are commonly used to group menu items with a similar purpose or that are otherwise related. Separators cannot invoke commands. The presence of a submenu causes the menu separator to be rendered as a regular item with a single hyphen as its caption.

Multiple consecutive separators are reduced to one, and separators at the beginning or the end of a menu are not displayed.

➡ **Menu Merging**
*.sublime-menu* files are loaded in the same order as packages. Menu files with the same name are concatenated, unless IDs are specified (see below).

Menu files in the same package are loaded in lexicographical order starting at the root folder, and then traversing sub-folders in the same manner.

As a special case, menu items from the User package declared in the standard non-ID section of a menu are always inserted after any standard items from other packages.

➡ **Item IDs**
When a menu item specifies an ID, a separate section within the menu is searched for and, if it does not exist, created at the end of the menu. This ID lookup is forward-going only.

The ID determines the section's name, and the menu item with the matching ID will be the first item in this section. All following items in the file will then be appended to the ID's section, until another item with an ID is found.

If two menu items from different *.sublime-menu* files reference the same item via ID, Sublime Text will override the item's previous parameters with the new parameters, if there are any. Child elements extend the submenu. All following items are then appended to the ID's section, until another item with an ID is found.

It is common practice to assign IDs to separators and items having a submenu, so that other packages or the user themselves can easily customize the menu. This allows appending items to sections introduced by separators and appending items to submenus.

➡ **Note**

Due to the strict forward lookup, it is possible to have multiple different items with the same ID in one menu. Because of the potential confusion this may cause, it is discouraged.

Example: The following three IDs are defined in a menu, in this order: test, test2, test.

The item with the second "test" ID can then be targeted using the following ID combinations: test, test2, test; test, test or test2, test.

➡ **Submenus**
Every menu item can have a submenu. Hovering the mouse pointer over a menu item with a submenu will reveal the items grouped under it. Submenus are independent menus with their own ID hierarchy.

In order to extend a submenu from a different menu file, an ID must be specified in both places to target the correct item.

➡ **The Main Menu**
Unlike all other menus, the Main Menu's root menu represents the menu items in the menu bar (File, Help, etc.).

➡ **Interface for Commands**
A menu item can be dynamically

- hidden,
- disabled,
- checked, or
- assigned a different caption.

For this, commands must implement the required methods in their class. Each implemented method will be called with the arguments specified in the corresponding menu item. If that call fails, the method will be immediately called again without arguments.

- is_visible
- is_enabled
- is_checked
- description

Some of these methods also have an influence on the Command Palette.

See Also

Official API Documentation on the Command interface(opens new window)



## ==⚡ RunSnippetCommand 插件

作为一个重度 Sublime Text 用户，掌握 Plugin-host 插件机制及插件开发是非常必要的，有些稀奇古怪的想法功能都可以实现。

在 MD 文档中执行 Python 代码片段，比如 MD 文档中有以下代码片段，按注解提示配置好插件上下文菜单，保持光标在代码块上，按 F6 就可以执行：

```py
import sys
import datetime

'''
Context.sublime-menu config for RunSnippetCommand:
[
    {
        "caption": "Run Snippet code",
        "command": "run_snippet",
        "mnemonic": "R",
        "id": "run_snippet",
        "keys": ["f6"], 
    },
    {
        "caption": "Open Result Panel",
        "keys": ["shift+escape"], "command": "show_panel",
        "args": {"panel": "output.exec"},
        "context": [ { "key": "panel_visible", "operand": true } ]
    },
]
'''

newline = ("\n    ** ")

print(datetime.datetime.now())
print("*" * 80)
print(newline+newline.join(sys.path))
print("*" * 80)

# print(f'''
# 	{datetime.datetime.now()}
# 	{"*" * 80}
# 	** {newline.join(sys.path)}
# 	{"*" * 80}
# 	''')
```

Sublime Text 4 插件宿主支持 Python 3.3 3.8，但在 Packages 目录安装的插件默认是 Plugin-Host 3.3，某些 Python 3.8 新功能不能使用。

RunSnippetCommand 插件实现代码，可以根据 Sublime 选择器实现更多语言的支持，包括 C/C++，只需要配置好编译器待调用即可：


```py
import sublime_api as sapi
from sublime import *
from sublime_plugin import *


class RunSnippetCommand(TextCommand):
    __dict__ = ['lang_type','code_snippets']
    selector = "source.python"

    def __init__(self, view):
        self.view = view
        pass

    def run(self, edit):
        self.snippet_test(True)
        # self.view.insert(edit, 0, "Hello, RunSnipetCommand!")
        pass

    def is_enabled(self, *args):
        return self.snippet_test()

    def message(self, content):
        msg = f"⚡RS: {content}"
        sublime.status_message(msg)
        print(msg)
        pass

    def execute_snippet(self, code):
        window = active_window()
        execpanel = window.find_output_panel("exec")
        if execpanel is None:
            execpanel = View(window.create_output_panel("exec", True))

        execpanel.settings().set("auto_indent", False)
        execpanel.sel().clear()
        execpanel.sel().add(Region(0))
        execpanel.run_command("insert", {"characters":f"""\n{"⚡" * 40}\n"""})
        try:
            # code = compile(code, "string", "exec")
            exec(code)
        except Exception as ex:
            print(f"execute_snippet error: {ex=}")
            # print(f"tb: {ex.__traceback__}")
            raise

    def snippet_test(self, execute=False):
        regionset = self.view.sel()
        self.code_snippets = []

        for region in regionset:
            scope:str = self.view.scope_name(region.a)
            if scope.find(self.selector)>-1:
                if not execute: return True
                self.snippet_region(region)
        return False

    def snippet_region(self, region):
        if region.a != region.b:
            code = self.view.substr(region)
            self.code_snippets.append(code)
            self.execute_snippet(code)
        else:
            scope:str = self.view.scope_name(region.a)
            (a, b) = self.view.full_line(region)
            if scope.find(self.selector)<0: return None
            start = self.lookup_boundary(Region(a), "```py", min)
            end = self.lookup_boundary(Region(a), "```", max)

            if start != None and end:
                codesnippet = Region(start.b+1, end.a-1)
                code = self.view.substr(codesnippet)
                self.view.sel().add(codesnippet)
                self.execute_snippet(code)

    def lookup_boundary(self, region, tag, direction=max, maxline= 500) -> Region or None:
        a = direction(region.a, region.b)

        while a>1 and (maxline:=maxline-1)>-1:
            rgn = self.view.line(a)
            line = self.view.substr(rgn)
            a = direction(rgn.a-1, rgn.b+1)
            if line.startswith(tag): return rgn

        size = self.view.size()
        if maxline==-1 or a==direction(-1, size+1): return None
```


## ⚡ SendTo ...

```py
import os
import re
import sys
import sublime_api as sapi
import sublime
from sublime import *
from sublime_plugin import *
from datetime import datetime

if( hasattr(sapi, "dymenu") ):
  print("sapi.dymenu: %s" % (sapi.dymenu or "None"))
sapi.dymenu = "BADAPPLE"

class SendToCommand(WindowCommand):
  """ SendToCommand
  Send file to other Sublime Text windows

  REF:
  https://wbond.net/sublime_packages/sftp
  https://github.com/absop/ST-dctxmenu/blob/main/menu.py

    1. sublime.dymenu = "Temporaty data used for plugin after reloaded"
    2. modify Context.sublime-menu
    3. sublime_plugin.reload_plugin(__name__)
  """
  # def __init__(self, window):
  #   super(SendToCommand, self).__init__()
  #   self.window = window
     
  windows = None
  items = None

  def is_enabled(self):
    return None is not self.window.active_view().file_name()

  def run(self, id=-1, file=None):
    # return reload_plugin("RunSnippet.SendTo")

    self.items = []
    self.windows = sublime.windows()
    for it in self.windows:
      name = str(it.project_file_name())
      name = re.split(r"[/\\]", name)[-1]
      id = it.id()
      self.items.append(str(len(self.items)) + ("  [#%d]  " % id) + name)

    if id < len(items) and id>=0 and os.path.isfile(file):
      self.on_select(id, file)
    else:
      sublime.active_window().active_view().show_popup_menu(self.items, self.on_select)
      pass

  def on_select(self, index, file_name = None):
    if file_name is None:
      file_name = sublime.active_window().active_view().file_name()
    self.windows[index].open_file(file_name)
    self.windows[index].bring_to_front()
```

## ⚡ JumpTo ...

使用 SublimeText 阅读文档和写作是日常活动，特别是最近在阅读 [CPython](https://github.com/python/cpython) 以及 C# 相关开源代码及文档，Sublime 提供的跳转工具非常强大，因为会对代码文件进行符号索引，所以在已经建立索引的工程上，直接按 F12 就可以跳转到光标所在的符号定义上，对于 URL 地址，也可以通过右角菜单打开浏览器进行访问。

    git clone git@github.com:python/cpython
    git clone git@github.com:python/devguide
    git clone git@github.com:python/peps

不足的是，文档中有非常多的相对引用，这些引用都不能直接跳转到对应的文件中，需要通过 Ctrl+P 手动输入文件名间接跳转，对于大量文件查询来说，这是极其差的体验。

例如，C# 规范文档就包含许多文件，还有 .NET Core 和 ASP.NET Core 的参考文档中有大量示范代码文件的引用：

    - [ §1](csharp/standard/scope.md)  Scope
    - [ §2](csharp/standard/normative-references.md)  Normative references
    - [ §3](csharp/standard/terms-and-definitions.md)  Terms and definitions
    - [ §4](csharp/standard/general-description.md)  General description
    - [ §5](csharp/standard/conformance.md)  Conformance
    - [ §6](csharp/standard/lexical-structure.md)  Lexical structure
    - [ §7](csharp/standard/basic-concepts.md)  Basic concepts
    - [ §8](csharp/standard/types.md)  Types
    - [ §9](csharp/standard/variables.md)  Variables
    - [§10](csharp/standard/conversions.md)  Conversions
    - [§11](csharp/standard/expressions.md)  Expressions
    - [§12](csharp/standard/statements.md)  Statements
    - [§13](csharp/standard/namespaces.md)  Namespaces
    - [§14](csharp/standard/classes.md)  Classes
    - [§15](csharp/standard/structs.md)  Structs
    - [§16](csharp/standard/arrays.md)  Arrays
    - [§17](csharp/standard/interfaces.md)  Interfaces
    - [§18](csharp/standard/enums.md)  Enums
    - [§19](csharp/standard/delegates.md)  Delegates
    - [§20](csharp/standard/exceptions.md)  Exceptions
    - [§21](csharp/standard/attributes.md)  Attributes
    - [§22](csharp/standard/unsafe-code.md)  Unsafe code
    - [ §A](csharp/standard/grammar.md)  Grammar
    - [ §B](csharp/standard/portability-issues.md)  Portability issues
    - [ §C](csharp/standard/standard-library.md)  Standard library
    - [ §D](csharp/standard/documentation-comments.md)  Documentation comments
    - [ §E](csharp/standard/bibliography.md)  Bibliography

为此，有了开发 JumpTo 插件的想法，这是一个可以极高地提升文档阅读效率的插件，你值得拥有。

预期支持跳转地址格式如下：

- [x] 带括号的文件 (scope.md)
- [x] 带引号的文件 'scope.md' 或 "scope.md"
- [x] 带前导符号且使用空格分隔的文件路径
- [x] http 标记的 URL 地址
- [ ] 带 # 的设置的行号 (scope.md#LINE_NO)
- [ ] 带 # 的设置的标签 (scope.md#ANCHRO)

因为 Sublime 文件跳转有个临时状态，文件并没有完全确定打开，此时按方向键及回车之外的键，都会撤消文件的打开。所以，带标签的自动定位还需要寻求其它解决办法。

可跳转的内容示范：

    - language-reference\builtin-types\value-types.md
    - language-reference/builtin-types/value-types.md
    - [`is` expression](operators/is.md)
    # csharp\fundamentals\functional\pattern-matching.md
    :::code language="csharp" source="Program.cs" ID="NullableCheck":::

默认按 Shift 点击内容进行跳转，配置热键使用更方便。实现中使用了 on_text_command 事件，它可以获取鼠标点击坐标，但没有找到相应的 API 将坐标转换为 Text Point。

Sublime 使用 Ctrl 和 Alt 两个控制键分别用于增减选区，所以不太好直接使用它们。同时 Shift 也被用来做字符扩展选择，但是还是免强可用，最好还是配置按键触发，默认配置 F9 触发。

使用到正则字符串处理具，参考 CPython 文档：

    +-- Doc\howto
    |   • -- regex.rst          => Regular Expression HOWTO
    +-- Doc\library
    |   • - re.rst              => `re` --- Regular expression operations

JumpTo 插件参考代码：

```py
class JumpToCommand(TextCommand, ViewEventListener):

    def __init__(self, *args):
        if args and isinstance(args[0], View):
            self.view = args[0]
        Logger.message("init %s" % str(args))

    def run(self, edit, *args):
        file = self.parseline()
        self.jump(file)

    def jump(self, file):
        if file:
            self.view.window().run_command("show_overlay", 
            {"overlay":"goto", "show_file": True, "text":file.replace("\\","/")})

    def is_enabled(self, *args):
        Logger.message("jump to is_enabled %s" % str(args))
        return self.parseline() != None

    def parseline(self):
        rng = self.view.sel()[0]
        if rng.a != rng.b:
            sel = self.view.substr(rng)
            if len(sel.split("\n"))==1:
                return sel
        rnl = self.view.line(rng.a)
        if rnl.a == rnl.b:
            return None

        line = self.view.substr(rnl)
        point = rng.a - rnl.a

        rp = line[point:] or ""
        lp = line[0:point] or ""

        r = rp.find("'")
        l = lp.rfind("'")
        if r>=0 and l>=0 :
            return line[l+1:r+point]

        r = rp.find('"')
        l = lp.rfind('"')
        if r>=0 and l>=0 :
            return line[l+1:r+point]

        r = rp.find(")")
        l = lp.rfind("(")
        if r>=0 and l>=0 :
            return line[l+1:r+point]

        l = lp.find(' ')
        if l==1:
            return line[l+1:].strip()
        
        l = lp.rfind(' ')
        r = rp.find(' ')
        if l == -1: l = 0
        if r == -1: r = len(rp)
        block = line[l:r+point].strip()
        if block.startswith("http"):
            return {"kind":"block", "text": block}

        print(lp, "<===>" , rp)
```

## ==⚡ Auto focus on Hover
https://github.com/Jeangowhy/Origami

if you want to activate a pane when mouse on hover event, set `auto_focus_on_hover` to true in the Origami preferences.

    // Automatically focus a pane when View.on_hover event.
    "auto_focus_on_hover": false,
 
```py
class TravelToPaneOnMoveCommand(sublime_plugin.EventListener, WithSettings):

    # I know there is Command.want_event can trigger some input function when mouse action.
    # But there any sublime callback like on_mouse_move?
    # View.on_hover Event callback
    # this callback receive a view reference, and a text point (text length), 
    # which can be conver to window position like this below:
    #   view.text_to_window(txtpoint)
    # hover_zone enum defined sublime.HoverZone under sublime Python 3.8
    #
    # Add .python-version to support newest ST4 #174
    # https://www.sublimetext.com/docs/api_environments.html#python-version
    #   print({"sys.version": sys.version})
    def on_hover(self, view, txtpoint, hover_zone):

        if not self.settings().get("auto_focus_on_hover") : 
            # or view.settings().get("origami_auto_focus_on_hover")
            return

        try:
            window = sublime.active_window()
            window.focus_view(view)
            # window_id = sublime.active_window().window_id
            # sublime_api.window_focus_view(window_id, view.view_id)
        except Exception as ex:
            zones = ['TEXT', 'GUTTER', 'MARGIN']
            print("on_hover error=>", ex, {"point": txtpoint, "hover_zone": zones[hover_zone-1]})
```


## ==⚡ LaTeX WebViewer/First Column/Index Rows

Sublime Text 插件开发，以下功能于 Windows 平台 4121 版本正常使用：

- ViewLatexListener 监听事实，提供代码片段输入功能；
- ViewLatexCommand 处理当前选择区的 LaTeX 内容，并调用在线的 Equation Editor 显示数学公式；
- FirstColumnCommand 处理当前选区，将选区处理成为选择所有相关行的第一列，即包最靠近行首、含多个空格或一个 Tab 符号的位置；
- IndexRowsCommand 调用上一个命令插件，并在每行首位置插入一个从 1 开始的数值编号；

Sublime Text 插件开发基础知识点：

- 基于 Python 开发，需要函数式或 OOP 编程相关的编程基础；
- 插件的触发途径：
	- 通过 Python Console 直接使用代码调用，需要掌握 Sublime Python API；
	- 通过菜单触发，需要配置相关的 .sublime-menu 菜单文件；
	- 通过 Command Palette 面板触发，需要配置 .sublime-command 文件；
	- 通过快速键触发，需要配置 .sublime-keyman 文件，通过菜单操作 Preferences -> Key Bindings；
- Sublime Text 主要插件相关 Python API 类型：
	-  sublime 模块，提供版本号、配置信息读写、系统剪贴版、状态栏访问等全局功能，和相应的类型：
		-  sublime.Settings 配置信息类型，包含配置文件类型的增、删等处理功能，通过模块提供的方法读写；
		-  sublime.Options
		-  sublime.Window 窗口类型，Sublime Text 窗口管理了所有视图及编辑的文件；
		-  sublime.View 视图类型，即打开每个文件的并看到内容的 UI 界面所代表的类型；
		-  sublime.Edit 没有提供功能，代表视图对应的一个编辑器标志；
		-  sublime.Region 当前视图对象所有对应的光标选区对象；
		-  sublime.RegionSet 选区集合对象；
		-  sublime.Sheet 是数据容器，可以包含编辑文件的 View 或者图像预览等；
		-  sublime.TextSheet(Sheet) 
		-  sublime.ImageSheet(Sheet) 
		-  sublime.HtmlSheet(Sheet) 
		-  sublime.Html 用于区分 HTML 内容和文本，数据保存在 data 属性； 
		-  sublime.Phantom
		-  sublime.PhantomSet
	-  sublime_plugin 插件模块，没有提供方法功能，只包含不同插件类型依赖的接口类型：
		-  sublime_plugin.EventListener 事件监听处理类型；
		-  sublime_plugin.ViewEventListener 视图事件处理；
		-  sublime_plugin.TextChangeListener 文本改动事件处理；
		-  sublime_plugin.Command 插件基础类，早期文档使用 Plugin；
		-  sublime_plugin.ApplicationCommand(Commnd) 应用类型插件；
		-  sublime_plugin.WindowCommand(Commnd) 窗口交互类型插件，每个窗口只实例化一次/个插件，self.window 引用窗口；
		-  sublime_plugin.TextCommand(Commnd) 文本处理类型插件，self.view 引用视图，并在构造函数中保存引用；
		-  sublime_plugin.CommandInputHandler 用户输入处理处理器类型实现；
		-  sublime_plugin.BackInputHandler(CommandInputHandler) 基本输入处理类型结构，需要实现更多多的接口方法；
		-  sublime_plugin.TextInputHandler(CommandInputHandler) 文本输入处理；
		-  sublime_plugin.ListInputHandler(CommandInputHandler) 为输入提供后选内容列表；

继承命令对象，最主要的是处理以下四个方法：

- ↪`run(<args>)` -> None: 执行插件命令时调用；
- ↪`is_enabled(<args>)` -> bool: 在准备阶段调用，给插件开发者提供一个时机，以确定插件功能是否可供用户使用。
- ↪`is_visible(<args>)` -> bool: 在准备阶段调用，给插件开发者一个时机，以设置插件菜单等是否可被用户看见。
- ↪`description(<args>)` -> String: 插件设置了菜单时，加载插件后并要确定菜单栏显示的标题时调用。

Sublime Text 插件加载机制可以参数安装目录下的脚本源代码，如：Sublime Text 3\Lib\python38\sublime_plugin.py 和 sublime.py，在内部，使用了非开源的 Plugin Host 导出的 sublime_api 接口。

插件模块中 *all_callbacks* 定义了 53 个类型类型，这么多主要是有 19 个 async 版本的事件：

- 继承 *EventListener* 可以响应处理所有这事件。
- 继承 *ViewEventListener* 专注处理视图事件，不能处理 *view_event_listener_excluded_callbacks* 指定的 25 个不太相关的事件。
- 继承 *TextChangeListener* 只处理 *text_change_listener_callbacks* 指定的 6 个事件，on_text_changed、on_revert、on_reload，以及它们的异步版本。

主要是 *ViewEventListener* 视图事件，列表如下，18 个，外加异步版本 10 个：

|       View Events       |         Async Version         |
|-------------------------|-------------------------------|
| [on_activated]          | [on_activated_async]          |
| [on_close]              | -                             |
| [on_deactivated]        | [on_deactivated_async]        |
| [on_hover]              | -                             |
| [on_load]               | [on_load_async]               |
| [on_modified]           | [on_modified_async]           |
| [on_post_move]          | [on_post_move_async]          |
| [on_post_save]          | [on_post_save_async]          |
| [on_post_text_command]  | -                             |
| [on_pre_close]          | -                             |
| [on_pre_move]           | -                             |
| [on_pre_save]           | [on_pre_save_async]           |
| [on_query_completions]  | -                             |
| [on_query_context]      | -                             |
| [on_reload]             | [on_reload_async]             |
| [on_revert]             | [on_revert_async]             |
| [on_selection_modified] | [on_selection_modified_async] |
| [on_text_command]       | -                             |

在文本处理插件开发中，选区、和选区集合是非常重要的类型。Region 对象代表一个选择区间，包含 a 和 b 两个属性，begin 和 end 方法，它们指定了这个选区起止字符位置。注意，根据鼠标或键盘控制选择方向的不同，a b 值的大小也不同，向下选择时 a > b。 dir 函数并不能获取到 Region 的属性列表内容，使用 print 函数可以打印这两个值出来。

Selection 即 RegionSet 对象包含多个选区对象，View.sel() 方法获取当的选区集合。

自定义右键菜单，就创建自己的 Context.sublime-menu 等菜单配置文件，默认的右键菜单配置在 Packages\Default\Context.sublime-menu。

可用的菜单配置文件命名规则如下，名称决定了菜单的类型，注意名称大小写和空格：

- *Main.sublime-menu* 窗口主菜单配置文件；
- *Context.sublime-menu* 文件内容视图右键菜单配置文件；
- *Find in Files.sublime-menu* 查找文件 ... 按键弹出菜单配置文件；
- *Tab Context.sublime-menu* 文件选项卡右键菜单配置文件；
- *Widget Context.sublime-menu* 小工具面板右键菜单配置文件，如命令列表面板中的右键菜单；
- *Side Bar.sublime-menu* 侧栏目录树右键菜单配置文件；
- *Side Bar Mount Point.sublime-menu* 侧栏目录树顶级目录右键菜单配置文件；
- *Encoding.sublime-menu* 状态栏编码选择菜单配置文件；
- *Line Endings.sublime-menu* 状态栏编码选择菜单配置文件；
- *Indentation.sublime-menu* 状态栏缩进选择菜单配置文件；
- *Syntax.sublime-menu* 状态栏文件语法类型选择菜单配置文件；

Side Bar 或者 Side Bar Mount Point 两个菜单的操作会涉及文件、目录，所以需要在配置菜单时设置 args 参数列表，像如下这样配置，使用 *paths* 和 *files* 来传递侧栏目录树操作相关的目录或文件。并且命令类实现 run 方法时，除了 self、view 两个默认要求的参数外，需要相应添加 args 指定的额外参数列表：

```json
[
    {
        "caption": "View Latex",
        "command": "view_latex",
        "mnemonic": "V",
        "id": "view_latex",
        "args": {"paths": [],"files": []}
    }
]
```

多选文件支持，通过实现 *is_enabled* 来决定命令是不否有效，可以参考 SideBarEnhancements 插件的实现。

另外，读取菜单配置文件时注意，因为 JSON 中不是规范的数据，注意最外层的方括号，规范 JSON 最外层是花括号。所以 sublime.load_settings() 不能加载到菜单配置数据，并且 sublime.save_settings() 将规范 JSON 写入会导致菜单配置不正确。可以考虑使用 *load_resource* 加载资源字符串内容进行处理：

```py
# str = sublime.load_resource('Packages/User/Context.sublime-menu')
s = sublime.load_settings('Context.sublime-menu') 
print(s.to_dict())
s.set("caption","ViewLatex")
children = s.get('children') or [{"caption":"empty"}]
print(children[0])
children[0]["caption"] = "Message changed" 
s.set('children', children) 
sublime.save_settings('Context.sublime-menu') 
```

运行命令查看事件响应统计数据 Plugin Development: Profile Events

几条事件触发线路：

- 输入内容时，如果文件有启用提示，或者使用 Tab 触发，并且光标在单词尾，但没有找到合适内容时，就会触发 on_query_completions 事件获取候选内容。
- 改变光标、选择内容时：on_text_command -> on_selection_modified -> on_post_text_command
- 打开现有文件时： on_activated [View(403)] -> on_load [View(403)]-> on_deactivated [View(401)]
- 创建新文件缓冲区时： on_window_command(new_file) -> on_deactivated(old view) -> on_activated(new view) -> on_new
- 关闭文件缓冲区时： on_window_command(close) -> on_pre_close(thisview) -> on_deactivated - on_activated(otherviwe) -> on_close(thisview)

- on_query_context 事件比较多参数，触发时机也比较混乱，具体参考 API 文档。
- on_hover 事件在光标移动时触发，参数有光标所在字符位置，具体参考 API 文档。
- on_query_completions 事件可以很好地通过提供自动完成内容来替代 code sippet 功能。

Key Bindings/Menus/Command 配置参考：

```json
[
    {
        "caption": "View Latex",
        "command": "view_latex",
        "mnemonic": "V",
        "id": "view_latex",
        "keys": ["f1"], 
        "args": {"paths": [],"files": []}
    },
    {
        "caption": "First Column",
        "command": "first_column",
        "mnemonic": "F",
        "id": "first_column",
        "keys": ["alt+m"], 
        "args": {"paths": [],"files": []}
    },
    {
        "caption": "Index Rows",
        "command": "index_rows",
        "mnemonic": "I",
        "id": "index_rows",
        "keys": ["f5"], 
        "args": {"paths": [],"files": []}
    }
]
```

以下是插件代码实现，保存文件 ViewLatex.py 即相应会产生 User.ViewLatex 模块：

```py
import os
from code import InteractiveConsole
import urllib
import sublime
import sublime_plugin

print("Sublime Text version %s"%sublime.version())
# print("View Events:")
# for event in sublime_plugin.all_callbacks.keys():
#   if event not in sublime_plugin.view_event_listener_excluded_callbacks:
#     print("\t[%s]"%event)

def info(cls):
  print("cls.inf() %s"%cls.inf);
  print("cls.info() %s"%cls.info);

# @classmethod 
# from User.ViewLatex import inf
# import sublime, sublime_api, sublime_plugin
# inf(sublime_api)
def inf(cls, obj=None):
  target = obj or cls;
  print("Informations of class or instance: %s\n"%(target))
  for p in dir(target):
    if p.startswith("__"): continue # pass by magic methods
    attr = None
    try:
      attr = "is " + str(type(getattr(target,p)))
    except Exception as e:
      attr = ": " + str(e)
    inf = "%s %s" % (p.rjust(26), attr)
    print(inf)


class ViewLatexListener(sublime_plugin.EventListener):

  # def on_activated(self, view):
  #   print("VLL: on_activated [%s]" % view)

  # def on_close(self, view):
  #   print("VLL: on_close [%s]" % view)

  # def on_deactivated(self, view):
  #   print("VLL: on_deactivated [%s]" % view)

  # def on_hover(self, view, pos, zone):
  #   zones = "T%s G%s M%s" %(sublime.HOVER_TEXT, sublime.HOVER_GUTTER, sublime.HOVER_MARGIN)
  #   print("VLL: on_hover [%s] [pos %s] [zone %s] %s" % (view, pos, zone, zones))

  # def on_load(self, view):
  #   print("VLL: on_load [%s]" % view)

  # def on_modified(self, view):
  #   print("VLL: on_modified [%s] [%s]" % (self,view))
  #   if hasattr(view, 'livePythonInterpreter'):
  #     print('VLL: Modified and interpreting.')
  #   else:
  #     print('VLL: Modified but not interpreting.')

  # def on_new(self, view):
  #   print("VLL: on_new [%s]" % view)

  # def on_post_save(self, view):
  #   print("VLL: on_post_save [%s]" % view)

  # def on_post_text_command(self, view, act, extras):
  #   act in ['move','drag_select','left_delete','right_delete','redo_or_repeat','find_next'] #....
  #   print("VLL: on_post_text_command [%s] [act %s] %s" % (view, act, extras))

  # def on_pre_close(self, view):
  #   print("VLL: on_pre_close [%s]" % view)

  # def on_pre_save(self, view):
  #   print("VLL: on_pre_save [%s]" % view)

  def on_query_completions(self, view, prefix, locations):
    print("VLL: on_query_completions [%s] [%s] [%s]" % (view, prefix, locations))
    return [] or [
      ("prefix", "description", "prefix => value"),
      ("code",   "Code block", "```${1:syntax}\n${2:codes}\n```"),
      ("matlab", "Matlab code block", "```${1:matlab}\n${2:codes}\n```"),
      ("py",     "Python code block", "```${1:py}\n${2:codes}\n```"),
      ("cpp",    "cpp code block", "```${1:cpp}\n${2:codes}\n```"),
      ("cs",     "cs code block", "```${1:cs}\n${2:codes}\n```"),
      ("xml",    "xml code block", "```${1:xml}\n${2:codes}\n```"),
      ("json",   "json code block", "```${1:json}\n${2:codes}\n```"),
      ]

  # def on_query_context(self, view, key, op, opr, match_all):
  #   print("VLL: on_query_context [%s] [%s] [%s] [%s] [%s]" % (view, key, op, opr, match_all))       

  # def on_selection_modified(self, view):
  #   print("VLL: on_selection_modified [%s]" % view)

  # def on_text_command(self, view, act, extras):
  #   act in ['move','drag_select','left_delete','right_delete','redo_or_repeat','find_next'] #....
  #   print("VLL: on_text_command [%s] [act %s] %s" % (view, act, extras))

  # def on_window_command(self, view, act, b):
  #   act in ['new_file', 'close']
  #   print("VLL: on_window_command [%s] [act %s] [%s]" % (view, act, b))


class ViewLatexCommand(sublime_plugin.TextCommand):
  def __init__(self, view):
    self.view = view
    print("VLC ViewLatexCommandview init %s %s\n%s\n" 
      %(view, __name__, __file__))

    if hasattr(view, 'livePythonInterpreter'):
        print('VLC: Already had an interpreter, but replacing it.')
    else:
        print("VLC: Didn't have an interpreter, making one now.")
    view.livePythonInterpreter = InteractiveConsole()

  def run(self, edit, files, paths):
    # print([edit,files,paths])
    print(self.view.file_name())
    # print(self.view.sel())
    # self.info()

    # print({"view.settings()":self.view.settings().to_dict()})
    # s = sublime.load_settings('Packages/User/Context.sublime-menu') 
    # print(s)
    # s.set("caption","ViewLatex")
    # children = s.get('children') or [{"caption":"empty"}]
    # print(children[0])
    # children[0]["caption"] = "Message changed" 
    # s.set('children', children) 
    # sublime.save_settings('Context.sublime-menu') 

    for region in self.view.sel():

      current = self.view.full_line(region.begin()) # region of current line with NEWLINE
      current = self.view.line(region.begin()) # region of current line
      linetxt = self.view.substr(current);
      select = self.view.substr(region);
      content = self.view.substr(sublime.Region(0, 15))
      latex = linetxt;

      if(region.a == region.b):
        print("ViewLatex: select nothing %s" % region)
      else:
        latex = select
        # self.view.replace(edit, region, "%i %s" %(i, txt))
      '''
      F(t) = A_0/2 + \sum_{n=1}^{\infty} A_n cos(n\omega_0 t) + B_n sin(n\omega_0 t)
      '''
      startweb = "start https://latex.codecogs.com/svg.latex?%s" % urllib.parse.quote(latex.strip())
      # os.system(startweb)
      os.startfile(startweb.replace("start ",""))

      # print({
      #   "Line Text":linetxt,
      #   "Selected Text": select,
      #   "startweb": startweb,
      #   "line(25)": 
      #           self.view.line(25), # region of line at position 25
      #   "full_line(25)": 
      #           self.view.full_line(25), # region of line at 25, LineEndings included
      #   "line(Region(1, 50))": 
      #           self.view.line(sublime.Region(1, 50)), # region spans lines at position 1 to 50
      #   "full_line(Region(1, 50))": 
      #           self.view.full_line(sublime.Region(1, 50)), # region spans lines at postion 1 to 50, with LineEndings
      #   "lines(Region(1,32))": 
      #           self.view.lines(sublime.Region(1,32)), # region of all lines between [1, 32]
      #   "word(15)": 
      #           self.view.word(15), # region of wold at position 15
      #   },"\n")

      # self.view.sel().clear() # unselect
      # self.view.sel().add(sublime.Region(20, 40))
      # self.view.show(self.view.size()) # set view position to end

      # sublime.set_clipboard('ViewLatexCommand') # set system clipboard
      # self.view.erase(edit, Region(0, self.view.size())) # clear content
      # self.view.insert(edit, 0, "#Hello, World!\n") # insert text at very first
      # self.view.replace(edit, current, "NEW LINE CONTENT!")
      
      # print(self.view.line_height()) # font-size line-height
      # print(self.view.line_endings()) # status bar LineEndings setting

class FirstColumnCommand(sublime_plugin.TextCommand):
  def __init__(self, view):
    self.view = view
    print("FCC FirstColumnCommand init [%s] [%s]...\n%s\n"%(self, view, __file__))
  def run(self, edit, paths, files):
    # ViewLatexCommand.inf(edit) # Print Edit API Information
    # ViewLatexCommand.inf(self.view) # Print View API Information
    # ViewLatexCommand.inf(self.view.sel()) # Print RegionSet API Information
    print("FirstColumnCommand...")
    selections = self.view.sel()
    lines = []
    for region in selections:
      lines = lines + self.view.lines(region)

    self.view.sel().clear()
    # self.view.sel().add_all(lines)
    for line in lines:
      c1 = self.view.find(r"\t|\s\s+", line.a)
      if(c1.b>line.b) : c1 = sublime.Region(line.a,line.a)
      self.view.sel().add(c1)

class IndexRowsCommand(sublime_plugin.TextCommand):
  def __init__(self, view):
    self.view = view
    print("IRC init [%s] [%s]...\n%s\n"%(self, view, __file__))

  def run(self, edit, paths, files):
    view = self.view
    print(["IRC run ", view.sel()])
    # FirstColumnCommand(view).run(edit, [], [])

    regionset = view.sel()

    nums = []
    alllines = []
    for region in regionset:
      index = 0
      lines = view.lines(region)
      alllines+=(lines) # list extend
      for region in lines:
        index += 1
        nums.append(index)

    # print(alllines)
    view.sel().clear()
    # for region in regionset:
      # view.sel().subtract(region)

    index = 0
    view.sel().add_all(alllines)
    for region in view.sel():
      view.insert(edit, region.a, str(nums[index]))
      index += 1

  # def description(self, *args, **kwargs):
  def is_enabled(self, *args, **kwargs):
    regionset = self.view.sel()
    print("is_enabled(self, *args): %s %s" % (args, kwargs))
    # print(regionset)
    return len(regionset)>0 and len(regionset)>1 or regionset[0].b != regionset[0].a 
```


## ==⚡ Input handlers 用户输入处理
- https://docs.sublimetext.io/guide/extensibility/plugins/input_handlers.html

Input handlers are a mechanism to query a user for one or multiple input parameters via the Command Palette. They replace the older method of input and quick panels (Window.show_input_panel and Window.show_quick_panel) for a unified user experience in a single component.

Input Handlers have been added in build 3154 and were first available on the stable channel in version 3.1.

➡ **Examples**
The following commands provided by Sublime Text's Default package use input handlers (command names are for the Command Palette):

|    Command name   |          File         |                        Description                        |
|-------------------|-----------------------|-----------------------------------------------------------|
| Arithmetic        | Default/arithmetic.py | Evaluates a given expression.                             |
| View Package File | Default/ui.py         | Provides a list of all resource files.                    |
| Rename File       | Default/rename.py     | Queries the user for a new file name for the active view. |

You can use the above View Package File command to view the source code of these files.

➡ **Input Handler Kinds**
There are currently two types of input handlers:

- text input handlers accepting arbitrary text input,
- list input handlers providing a list of options for the user to choose from.

Text input handlers always forward the entered text to the command, while list input handlers can handle any JSON-serializable value, accompanied by a caption for their respective list entry.

典型的用户输入处理是 Command Palette 中提供并接收用户输入的数据，需要插件 run 函数中设置相应的参数接收。调用插件时，Sublime Text 通过插件的 input 方法的实现来检查插件是否需要处理用户数据输入。如果返回一个输入处理器接口类型，那么就会有用户输入的交互流程。而具体的数据处理就通过插件开发者实现输入处理逻辑，也就是 *CommandInputHandler* 接口类型的具体实现。

基本的程序逻辑如下：

- 通过命令面板加载插件后，先调用 input_description(self) 获取用户输入状态下展示的提示性内容；
- 在插件基础类 *Command* 内部有通过 create_input_handler_ 函数调用 input(self, args) 以检查是否实现了数据输入处理逻辑；
- 插件返回一个输入处理器接口类型 *CommandInputHandler* 实例，并在其中实现数据交互输入的处理。

输入处理器接口类型运行流程：

- 插件方法 *input* 返回一个输入处理器后，进入用户输入交互流程；
- 进入准备阶段，内部方法 *setup_* 依次调用以下初始化方法：
	- *name(self)* 默认返回类名，下划线分隔大写字母，不包括 input_handler 后缀，用来确认插件 run 方法接收字符串的参数名。
	- *initial_text(self) -> str* 需要返回一个字符串，作为输入框的默认值；
	- *initial_selection(self)* 这是一个通知性调用，插件开发者可以在这里做一些关于文件选区的处理；
	- *placeholder(self)* 
- 如果用户按 ESC 取消输入，就会触发 *cancel* 方法，并结束本轮流程；
- 如果用户输入内容，则持续触发预览 *preview(self, text)*，需要返回字符串或 sublime.Html 内容，以显示到输入面板；
- 如果用户按下回车，就会调用 *validate(self, text) -> bool* 验证用户输入是否有效；
- 通过验证后，Sublime 会调用 *confirm(self, text) -> None* 通知插件输入已经通过验证，下一步准入将内容插入视图；
- 插件主方法 *run(self, edit, text)* 正式执行，并会接收到传入的用户数据，这里可以再进一步对数据进行处理，并调用视图提供的方法修改文件内容；

通过 *want_event() -> bool* 方法返回值可以控制验证、确认函数是否需要使用 event 参数：

- self.validate(v, event)
- self.confirm(v, event)

参数 event 包含控制组合键的状态信息，如：

- 只按下 Alt： {'modifier_keys': {'alt': True}}
- 只按下 Shift： {'modifier_keys': {'shift': True}}
- 只按下 Ctrl： {'modifier_keys': {'ctrl': True, 'primary': True}}
- 同时按下 Ctrl+Alt+Shift：{'modifier_keys': {'alt': True, 'ctrl': True, 'primary': True, 'shift': True}}

输入处理插件接口 *CommandInputHandler* 有三种：

- BackInputHandler(CommandInputHandler): 只定义了 name(self) 方法，返回 "_Back"；
- TextInputHandler(CommandInputHandler): 基本字符串输入实现，定义了内部的配置方法；
- ListInputHandler(CommandInputHandler): 带候选内容列表的输入实现，定义了内部的配置方法；

一般文本输入实现与列表候选输入实现的差别在于内部配置方法的配置 setup_(self, args)，以下是这两种配置的对比：

        props = {
            "initial_text": self.initial_text(),
            "initial_selection": self.initial_selection(),
            "placeholder_text": self.placeholder(),
            "type": "text",
        }

        props = {
            "initial_text": self.initial_text(),
            "placeholder_text": self.placeholder(),
            "selected": selected_item_index,
            "type": "list",
        }

可以看到异同点在于：

- 文本输入有 *initial_selection* 而列表输入没有；
- 列表输入有 *selected_item_index* 可以指定默认候选内容的序号；
- 文本输入、列表输入指定 type 值分别为 *text* 和 *list*; 
- 它们都有 *initial_text* 设置初始值和占位符内容 *placeholder_text*，它会以浅色调显示在输入面板的背景中；

列表指定默认候选内容的序号时，不是通过专用函数，而是通过 *list_items* 返回值类型来设置，并且必需实现此方法否则插件不能正确运行：

- 返回 tuple 为 (items, index) 即可以指定默认序号为: index
- 返回 list 为 [items...] 就不设置默认序号： selected_item_index = -1


关于 *name()* 这个函数的返回值，里面有个 Python 编程上的问题，是关于可变长函数参数列表处理的问题。

Python 采用可命名参数的函数调用方式，即调用函数时，可以使用参数名来指定要传递的数据。

可变长参数传递的两种方式、两种数据类型：

- `*args` 列表传递，用在函数参数列表以接收任意数量的非命名参数，用在调用函数时将 *tuple* 扩展开来；
- `*kwargs` 字典传递，用在函数参数列表以接收任意数量的命名参数，用在调用函数时将 *dict* 扩展开来；

可变长参数函数方法中，`*args` 用来将参数打包成 tuple 给函数体调用，`**kwargs` 打包关键字参数成 dict 给函数体调用，这是 Python 特有的语法结构。

定义函数时，参数列表必需按：非命名参数、`*args`、命名参数和、`**kwargs` 这样的位置必须保持以下这种顺序，不能打乱，可以省略不传，但参形式不能乱放。args 或 kwargs 这个名字不重要，重点是星号的数量。

Sublime Text 调用插件主方法时，使用的是以下这种方式：

	self.run(edit, **args)

这就表示编写插件时，插件命令、菜单项、快捷键输入的参数，即 *args* 字段内中配置的参数名称必需和 run 函数参数列表统一，或者是使用 `def run(self, edit, *args, **kwargs)` 这种省事的形式，这样无论传递什么参数都可以接收到。

参数列表和传入参数的命名不统一时，就会出现类似以下这样的错误：

>>> window.run_command("type_pad")
Traceback (most recent call last):
  File "C:\Program Files\Sublime Text 3\Lib\python38\sublime_plugin.py", line 1518, in run_
    return self.run(edit)
TypeError: run() missing 1 required positional argument: 'text'

应该在参数中加入 *args* 配置数据，或者按上面说明的方式，修改函数参数列表：

>>> window.run_command("type_pad",{"text":"abc"})
abc

了解这此后，就可以在 *input* 方法中依次创建多个输入处理器，供用户输入多个参数，并且完全输入后，参数再汇总传入 *run* 函数。因为，多个输入处理器就需要多个命名参数对应接收处理，构造 *CommandInputHandler* 实例时，可以记录一个参数名，并且通过 *name()* 函数返回给插件加载程序使用。


在使用多个输入处理器的情况下，*next_input* 函数就起作用了，通过它可以让用户连续输入多组数据。

```py
class MultiNumberInputHandler(sublime_plugin.TextInputHandler):
def __init__(self, names):
    self._name, *self.next_names = names

def name(self):
    return self._name

def placeholder(self):
    return "Number"

def next_input(self, args):
    if self.next_names:
        return MultiNumberInputHandler(self.next_names)
```

插件命令配置参考如下，需要写入配置文件 Default.sublime-commands：

```json
[
    { "caption": "Type Pad [Multiple]", "command": "type_pad", "args": {"type":"MultipleInputHandler" }},
    { "caption": "Type Pad [SimpleList]", "command": "type_pad", "args": {"type":"SimpleListInputHandler" }},
    { "caption": "Type Pad [Simple]", "command": "type_pad", "args": {"type":"SimpleInputHandler", "text":"✒TEST TYPEPAD"}},
    { "caption": "Type Pad [Any]", "command": "type_pad", "args": {"type":"AnyInputHandler"}},

]
```

TypePad 插件示范代码如下，包含 SimpleInputHandler、SimpleListInputHandler、MultipleInputHandler 三种形式，都统一通过 TypePadCommand 插件命令调用，如果分开处理会更简洁：

```py
import sublime
import sublime_plugin
import sublime_api
from User import TypePad

# Run in Python Console
# view.run_command("type_pad",{"text":""})
# window.run_command("type_pad",{"text":""})
class TypePadCommand(sublime_plugin.TextCommand):

    ops = ['operand1', 'operand2']

    def run(self, edit, **kwargs):
        ops = self.ops
        litxt = kwargs['simple_list'] if 'simple_list' in kwargs else ""
        litxt = "&"+litxt if litxt and litxt.endswith(";") else litxt
        op1 = kwargs[ops[0]] if ops[0] in kwargs else "";
        op2 = kwargs[ops[1]] if ops[1] in kwargs else "";
        text = kwargs['text'] if 'text' in kwargs else ""

        if len(kwargs.keys()) == 1:
            return
        text = text or litxt or ""
        bothFloat = checkNumber(op1) and checkNumber(op1)
        text = str(float(op1) * float(op2)) if bothFloat else text
        print("TypePad run(): text: %s kwargs: %s" % (text, kwargs))
        for region in self.view.sel():
            self.view.replace(edit, region, text)

    def input_description(self): # return a text show on left of input box in GUI
        return "Type Here:"

    def input(self, args):
        typeid = args["type"] if "type" in args else "" 
        names = [name for name in self.ops if name not in args]
        print("TypePad input() args: %s names: %s" % (args, names))
        if not hasattr(TypePad, typeid):
            sublime.status_message("TypePad incorrect type: 👉 %s" % typeid)
            return None
        Type = getattr(TypePad, typeid)
        parameters = dict(
            MultipleInputHandler = dict(view=self.view, names=names),
            SimpleListInputHandler = dict(),
            SimpleInputHandler = dict(view=self.view),
            )
        if typeid in parameters:
            return Type(**parameters[typeid])
        else:
            sublime.status_message("TypePad needs: 👉 Multiple, SimpleList or Simple InputHandler")
        return None

    def on_select(self, args):
        msg = "⚡ on_select: %s" % args
        print({"On select message": msg})
        sublime.status_message(msg)


def checkNumber(text):
    value = None
    try:
        value = float(text)
        return True
    except Exception as e:
        sublime.status_message("👉"+str(e))  # status bar message
    return isinstance(value, float)

class SimpleInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, view):
        self.view = view

    def name(self): # args name to transport data in command.run(...)
        return "text"

    def placeholder(self): # a text show as backgroud of input box in GUI
        return "Text to insert" 

    def preview(self, text): # return some text/html preview on GUI
        return sublime.Html("<h1>{} :</h1>Selections: {}, Characters: {}"
                .format(self.__class__.__name__, len(self.view.sel()), len(text)))

class SimpleListInputHandler(sublime_plugin.ListInputHandler):
    def list_items(self):
        from html.entities import html5
        itemlist = sorted(html5.keys())
        selected_item_index = 2
        # return itemlist
        return (itemlist, selected_item_index)

    def preview(self, value):
        return sublime.Html("<h1>{} :</h1>Character: {}"
            .format(self.__class__.__name__, html5.get(value)))

class MultipleInputHandler(sublime_plugin.TextInputHandler):
    def __init__(self, view, names = None):
        self.view = view
        print("TPI __init__ names: %s" % (names))
        if(isinstance(names, tuple) or isinstance(names, list)):
            self._name, *self.next_names = names # destructuring assignment: "first" and "rest" 
        else:
            self._name, *self.next_names = [names]
        print("TPI __init__ _name: %s names: %s " % (self._name, self.next_names))
    
    def next_input(self, args):
        print("TPI next_input(self, args): %s %s" % (self.next_names, args))
        if self.next_names:
            self._name, *self.next_names = self.next_names
            return MultipleInputHandler(self.view, self._name)

    def name(self): 
        name = self._name if hasattr(self,'_name') else "text"
        print( "TPI name() return '%s'" % (name))
        return name # it may say plugin.run(self, edit, text)

    def placeholder(self):
        return "Type Number Here"

    def preview(self, text): # return preview when use typeing
        text = text or ""
        style = "border-bottom:2px solid #282828;opacity:0.2;padding-bottom: 4px"
        html = "<h1 style='{}'>{} :</h1>Selections: {} Characters: {} <hr> {}"
        name = self.__class__.__name__
        return sublime.Html(html.format(style,name,len(self.view.sel()), len(text), text))

    def want_event(self) -> bool:
        return True 
        # self.validate(v, event)
        # self.confirm(v, event)

    def confirm(self, text, event) -> None: # Just a notification
        print("confirm(self, text, event) text: %s event: %s" % (text,event))

    def validate(self, text, event): # Pass by return True 
        print("✒ validate(self, text, event): event: %s text: %s" % (event, text))
        return checkNumber(text)

    def cancel(self): # Press Esc to cancel
        print("cancel by user")

    def initial_text(self): # return text as a default value
        return "<h1>✒ Number multiple</h1>"

    def initial_selection(self): # Just prepares Selections
        # region = sublime.Region(2800,3028)
        region = self.view.find("gui_api_test", 1)
        regions = self.view.sel()
        regions.add(region)     # and new region at position between [2800,3028] 
        self.view.show(region)  # scroll view to the region
        return []
```

## ==⚡ Regions in Selection
- https://stackoverflow.com/questions/38632861/sublime-text-plugin-how-to-find-all-regions-in-selection
- https://www.sublimetext.com/docs/3/api_reference.html


The Selection class (returned by View.sel()) is essentially just a list of Region objects that represent the current selection. A Region can be empty, so the list always contains a least one region with a length of 0.

The only methods available on the Selection class are to modify and query it's extents. Similar methods are available on the Region class.

What you can do is instead find all of the interesting regions as your code is currently doing, and then as you're iterating them to perform your check, see if they are contained in the selection or not.

Here's a stripped down version of your example above to illustrate this (some of your logic has been removed for clarity). First the entire list of URL's is collected, and then as the list is iterated each region is only considered if there is NO selection or if THERE IS a selection AND the URL region is contained in the selection bounds.

```py
import sublime, sublime_plugin

class ExampleCommand(sublime_plugin.TextCommand):
    # Check all links in view
    def check_links(self, view):
        # The view selection list always has at least one item; if its length is
        # 0, then there is no selection; otherwise one or more regions are
        # selected.
        has_selection = len(view.sel()[0]) > 0

        # Find all URL's in the view
        url_regions = view.find_all ("https?://[^\"'\s]+")

        i = 0
        for region in url_regions:
            # Skip any URL regions that aren't contained in the selection.
            if has_selection and not view.sel ().contains (region):
                continue

            # Region is either in the selection or there is no selection; process
            # Check and
            view.add_regions ('url'+str(i), [region], "mark", "Packages/Default/Icon.png")
            i = i + 1

    def run(self, edit):
        if self.view.is_read_only() or self.view.size () == 0:
            return
        self.check_links (self.view)
```

```py
# Project: SublimeKSP   Author: nojanath   File: bbcode.py    License: GNU General Public License v3.0
# https://www.programcreek.com/python?code=nojanath%2FSublimeKSP%2FSublimeKSP-master%2Fbbcode.py
def run(self, *args, **kwargs):
        view = sublime.active_window().active_view()

        #settings = sublime.load_settings('KSP.sublime-settings')
        #scheme_file = settings.get('color_scheme', 'Packages/SublimeKSP/KScript Light.tmTheme')
        scheme_file = 'Packages/SublimeKSP/KScript Light.tmTheme'
        plist = readPlistFromBytes(sublime.load_binary_resource(scheme_file))

        result = ['[pre]']
        start, end = view.sel()[0].a, view.sel()[0].b
        if start == end:
            start, end = 0, view.size()
        for a, b, scopes in get_ranges(view.scope_name(i) for i in range(start, end)):
            result.append(self.apply_style(scopes, plist, view.substr(sublime.Region(start+a, start+b))))
        result.append('[/pre]')
        sublime.set_clipboard(''.join(result)) 
```

```py
# Project: tandem   Author: typeintandem   File: tandem.py    License: Apache License 2.0
# https://www.programcreek.com/python?code=typeintandem%2Ftandem%2Ftandem-master%2Fplugins%2Fsublime%2Ftandem.py
def _handle_apply_patches(self, message):
        for patch in message.patch_list:
            start = patch["oldStart"]
            end = patch["oldEnd"]
            text = patch["newText"]
            start_point = self._view.text_point(
                start["row"],
                start["column"],
            )
            end_point = self._view.text_point(
                end["row"],
                end["column"],
            )
            """
            Edit cannot be passed around
            https://forum.sublimetext.com/t/multithreaded-plugin/14439
            Use view abstraction instead.
            """
            with Edit(self._view) as edit:
                edit.replace(
                    sublime.Region(start_point, end_point),
                    text,
                )

        self._buffer = self._current_buffer 
```


## ==⚡ Plugin API Reference
- https://www.sublimetext.com/docs/3/api_reference.html

➡ **Core Components**
- sublime Module
- Sheet Class
- Buffer Class 4081
- View Class
- Selection Class
- Region Class
- Phantom Class
- PhantomSet Class
- Edit Class
- Syntax Class 4081
- TextChange Class 4050
- HistoricPosition Class 4050
- completion Value
- CompletionItem Class 4050
- event Dict
- kind Tuple 4050
- CompletionList Class 4050
- QuickPanelItem Class 4083
- SymbolRegion Class 4085
- Window Class
- SymbolLocation Class 4085
- Settings Class
- ListInputItem Class 4095

➡ **Plugin Extension Points**
- sublime_plugin Module
- EventListener Class
- ViewEventListener Class
- TextChangeListener Class 4081
- ApplicationCommand Class
- WindowCommand Class
- TextCommand Class
- TextInputHandler Class 3154
- ListInputHandler Class 3154

➡ **Example Plugins**
Several pre-made plugins come with Sublime Text, you can find them in the Default package:

Packages/Default/exec.py Uses phantoms to display errors inline
Packages/Default/font.py Shows how to work with settings
Packages/Default/goto_line.py Prompts the user for input, then updates the selection
Packages/Default/mark.py Uses add_regions() to add an icon to the gutter
Packages/Default/show_scope_name.py Uses a popup to show the scope names at the caret
Packages/Default/arithmetic.py Accepts an input from the user when run via the Command Palette
➡ **Plugin Lifecycle**
At importing time, plugins may not call any API functions, with the exception of:

sublime.version()
sublime.platform()
sublime.arch()
sublime.channel()
sublime.executable_path() 4081
sublime.packages_path() 4081
sublime.installed_packages_path() 4081
sublime.cache_path() 4081
If a plugin defines a module level function plugin_loaded(), this will be called when the API is ready to use. Plugins may also define plugin_unloaded(), to get notified just before the plugin is unloaded.

➡ **Threading**
All API functions are thread-safe, however keep in mind that from the perspective of code running in an alternate thread, application state will be changing while the code is running.

➡ **Units and Coordinates**
API functions that accept or return coordinates or dimensions do so using device-independent pixel (dip) values. While in some cases these will be equivalent to device pixels, this is often not the case. Per the CSS specification, minihtml treats the px unit as device-independent.

➡ **Types**
This documentation generally refers to simply Python data types. Some type names are classes documented herein, however there are also a few custom type names that refer to construct with specific semantics:

- *location* a tuple of (str, str, (int, int)) that contains information about a location of a symbol. The first string is the absolute file path, the second is the file path relative to the project, the third element is a two-element tuple of the row and column.
- *point* an int that represents the offset from the beginning of the editor buffer. The View methods text_point() and rowcol() allow converting to and from this format.
- *value* any of the Python data types bool, int, float, str, list or dict.
- *dip* a float that represents a device-independent pixel.
- *vector* a tuple of (dip, dip) representing x and y coordinates.
- *CommandInputHandler* a subclass of either TextInputHandler or ListInputHandler.


### ===🗝 sublime_api Module

Informations of class or instance: <module 'sublime_api' (built-in)>

<class 'builtin_function_or_method'> Type of: <class 'module'>

| active_window                | view_classify                             | view_settings                          |
| architecture                 | view_clear_undo_stack                     | view_sheet_id                          |
| buffer_add_text_listener     | view_clones                               | view_show_point                        |
| buffer_clear_text_listener   | view_command_history                      | view_show_point_at_center              |
| buffer_file_name             | view_context_backtrace                    | view_show_popup                        |
| buffer_primary_view          | view_element                              | view_show_popup_table                  |
| buffer_views                 | view_em_width                             | view_show_region                       |
| buffers                      | view_encoding                             | view_show_region_at_center             |
| cache_path                   | view_end_edit                             | view_size                              |
| can_accept_input             | view_erase                                | view_split_by_newlines                 |
| channel                      | view_erase_phantom                        | view_style                             |
| decode_value                 | view_erase_phantoms                       | view_style_for_scope                   |
| encode_value                 | view_erase_regions                        | view_substr                            |
| error_message                | view_erase_status                         | view_symbol_regions                    |
| executable_path              | view_expand_by_class                      | view_symbols                           |
| expand_variables             | view_export_to_html                       | view_text_point                        |
| find_resources               | view_extract_completions                  | view_text_point_utf16                  |
| find_syntax_for_file         | view_extract_scope                        | view_text_point_utf8                   |
| gather_plugin_profiling_data | view_extract_tokens_with_scopes           | view_text_to_layout                    |
| get_clipboard                | view_file_name                            | view_transform_region_from             |
| get_clipboard_async          | view_find                                 | view_unfold_region                     |
| get_log_build_systems        | view_find_all                             | view_unfold_regions                    |
| get_log_commands             | view_find_all_results                     | view_update_popup_content              |
| get_log_control_tree         | view_find_all_results_with_text           | view_viewport_extents                  |
| get_log_fps                  | view_find_all_with_contents               | view_viewport_position                 |
| get_log_indexing             | view_find_by_class                        | view_visible_region                    |
| get_log_input                | view_find_by_selector                     | view_window                            |
| get_log_result_regex         | view_fold_region                          | view_window_to_layout                  |
| get_macro                    | view_fold_regions                         | view_word_from_point                   |
| get_syntax                   | view_folded_regions                       | view_word_from_region                  |
| html_sheet_set_contents      | view_full_line_from_point                 | window_active_group                    |
| incompatible_syntax_patterns | view_full_line_from_region                | window_active_panel                    |
| installed_packages_path      | view_get_name                             | window_active_sheet                    |
| list_syntaxes                | view_get_overwrite_status                 | window_active_sheet_in_group           |
| load_binary_resource         | view_get_regions                          | window_active_view                     |
| load_resource                | view_get_status                           | window_active_view_in_group            |
| load_settings                | view_has_non_empty_selection_region       | window_automate_ui                     |
| log_build_systems            | view_hide_popup                           | window_bring_to_front                  |
| log_commands                 | view_indentation_level                    | window_can_accept_input                |
| log_control_tree             | view_indented_region                      | window_close_file                      |
| log_fps                      | view_indexed_references                   | window_create_output_panel             |
| log_indexing                 | view_indexed_symbol_regions               | window_destroy_output_panel            |
| log_input                    | view_indexed_symbols                      | window_extract_variables               |
| log_message                  | view_insert                               | window_file_history                    |
| log_result_regex             | view_is_auto_complete_visible             | window_find_open_file                  |
| message_dialog               | view_is_dirty                             | window_find_output_panel               |
| notify_application_commands  | view_is_folded                            | window_focus_group                     |
| ok_cancel_dialog             | view_is_in_edit                           | window_focus_sheet                     |
| open_dialog                  | view_is_loading                           | window_focus_view                      |
| packages_path                | view_is_popup_visible                     | window_folders                         |
| platform                     | view_is_primary                           | window_get_layout                      |
| plugin_host_loaded_plugins   | view_is_read_only                         | window_get_project_data                |
| plugin_host_ready            | view_is_scratch                           | window_get_sheet_index                 |
| profile_syntax_definition    | view_layout_extents                       | window_get_view_index                  |
| run_command                  | view_layout_to_text                       | window_is_dragging                     |
| run_syntax_test              | view_layout_to_window                     | window_is_ui_element_visible           |
| save_dialog                  | view_line_endings                         | window_lookup_references               |
| save_settings                | view_line_from_point                      | window_lookup_references_in_open_files |
| score_selector               | view_line_from_region                     | window_lookup_symbol                   |
| select_folder_dialog         | view_line_height                          | window_lookup_symbol_in_open_files     |
| set_clipboard                | view_lines                                | window_new_file                        |
| set_timeout                  | view_match_selector                       | window_new_html_sheet                  |
| set_timeout_async            | view_meta_info                            | window_num_groups                      |
| settings_add_on_change       | view_preserve_auto_complete_on_focus_lost | window_open_file                       |
| settings_clear_on_change     | view_query_phantoms                       | window_panels                          |
| settings_erase               | view_replace                              | window_project_file_name               |
| settings_get                 | view_reset_reference_document             | window_run_command                     |
| settings_get_default         | view_retarget                             | window_select_sheets                   |
| settings_has                 | view_row_col                              | window_selected_sheets                 |
| settings_set                 | view_row_col_utf16                        | window_selected_sheets_in_group        |
| settings_to_dict             | view_row_col_utf8                         | window_set_layout                      |
| sheet_close                  | view_run_command                          | window_set_project_data                |
| sheet_file_name              | view_scope_name                           | window_set_sheet_index                 |
| sheet_group                  | view_score_selector                       | window_set_ui_element_visible          |
| sheet_is_semi_transient      | view_selection_add_point                  | window_set_view_index                  |
| sheet_is_transient           | view_selection_add_region                 | window_settings                        |
| sheet_set_name               | view_selection_clear                      | window_sheets                          |
| sheet_view                   | view_selection_contains                   | window_sheets_in_group                 |
| sheet_window                 | view_selection_erase                      | window_show_input_panel                |
| status_message               | view_selection_get                        | window_show_quick_panel                |
| ui_info                      | view_selection_size                       | window_status_message                  |
| verify_pc_signature          | view_selection_subtract_region            | window_symbol_locations                |
| version                      | view_set_completions                      | window_system_handle                   |
| view_add_phantom             | view_set_encoding                         | window_template_settings               |
| view_add_regions             | view_set_line_endings                     | window_transient_sheet_in_group        |
| view_assign_syntax           | view_set_name                             | window_transient_view_in_group         |
| view_begin_edit              | view_set_overwrite_status                 | window_views                           |
| view_buffer_id               | view_set_read_only                        | window_views_in_group                  |
| view_cached_substr           | view_set_reference_document               | window_workspace_file_name             |
| view_can_accept_input        | view_set_scratch                          | windows                                |
| view_change_count            | view_set_status                           | yes_no_cancel_dialog                   |
| view_change_id               | view_set_viewport_position                |                                        |


### ===🗝 sublime_plugin.EventListener Class

Note that many of these events are triggered by the buffer underlying the view, and thus the method is only called once, with the first view as the parameter.

Methods	Return Value	Description	
- ↪`on_init([views])`	None	Called once with a list of views that were loaded before the EventListener was instantiated	4050
- ↪`on_exit()`	None	Called once after the API has shut down, immediately before the plugin_host process exits	4050
- ↪`on_new(view)`	None	Called when a new file is created.	
- ↪`on_new_async(view)`	None	Called when a new buffer is created. Runs in a separate thread, and does not block the application.	
- ↪`on_associate_buffer(buffer)`	None	Called when a buffer is associated with a file. buffer will be a Buffer object.	4084
- ↪`on_associate_buffer_async(buffer)`	None	Called when a buffer is associated with file. Runs in a separate thread, and does not block the application. buffer will be a Buffer object.	4084
- ↪`on_clone(view)`	None	Called when a view is cloned from an existing one.	
- ↪`on_clone_async(view)`	None	Called when a view is cloned from an existing one. Runs in a separate thread, and does not block the application.	
- ↪`on_load(view)`	None	Called when the file is finished loading.	
- ↪`on_load_async(view)`	None	Called when the file is finished loading. Runs in a separate thread, and does not block the application.	
- ↪`on_reload(view)`	None	Called when the View is reloaded.	4050
- ↪`on_reload_async(view)`	None	Called when the View is reloaded. Runs in a separate thread, and does not block the application.	4050
- ↪`on_revert(view)`	None	Called when the View is reverted.	4050
- ↪`on_revert_async(view)`	None	Called when the View is reverted. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_move(view)`	None	Called right before a view is moved between two windows, passed the View object.	4050
- ↪`on_post_move(view)`	None	Called right after a view is moved between two windows, passed the View object.	4050
- ↪`on_post_move_async(view)`	None	Called right after a view is moved between two windows, passed the View object. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_close(view)`	None	Called when a view is about to be closed. The view will still be in the window at this point.	
- ↪`on_close(view)`	None	Called when a view is closed (note, there may still be other views into the same buffer).	
- ↪`on_pre_save(view)`	None	Called just before a view is saved.	
- ↪`on_pre_save_async(view)`	None	Called just before a view is saved. Runs in a separate thread, and does not block the application.	
- ↪`on_post_save(view)`	None	Called after a view has been saved.	
- ↪`on_post_save_async(view)`	None	Called after a view has been saved. Runs in a separate thread, and does not block the application.	
- ↪`on_modified(view)`	None	Called after changes have been made to a view.	
- ↪`on_modified_async(view)`	None	Called after changes have been made to a view. Runs in a separate thread, and does not block the application.	
- ↪`on_selection_modified(view)`	None	Called after the selection has been modified in a view.	
- ↪`on_selection_modified_async(view)`	None	Called after the selection has been modified in a view. Runs in a separate thread, and does not block the application.	
- ↪`on_activated(view)`	None	Called when a view gains input focus.	
- ↪`on_activated_async(view)`	None	Called when a view gains input focus. Runs in a separate thread, and does not block the application.	
- ↪`on_deactivated(view)`	None	Called when a view loses input focus.	
- ↪`on_deactivated_async(view)`	None	Called when a view loses input focus. Runs in a separate thread, and does not block the application.	
- ↪`on_hover(view, point, hover_zone)`	None	

	Called when the user's mouse hovers over a view for a short period.

	point is the closest point in the view to the mouse location. The mouse may not actually be located adjacent based on the value of hover_zone:

	- *sublime.HOVER_TEXT*: When the mouse is hovered over text.
	- *sublime.HOVER_GUTTER*: When the mouse is hovered over the gutter.
	- *sublime.HOVER_MARGIN*: When the mouse is hovered in whitespace to the right of a line.

- ↪`on_query_context(view, key, operator, operand, match_all)`	bool or None	

	Called when determining to trigger a key binding with the given context key. If the plugin knows how to respond to the context, it should return either True or False. If the context is unknown, it should return None.

	operator is one of:

	- *sublime.OP_EQUAL*: Is the value of the context equal to the operand?
	- *sublime.OP_NOT_EQUAL*: Is the value of the context not equal to the operand?
	- *sublime.OP_REGEX_MATCH*: Does the value of the context match the regex given in operand?
	- *sublime.OP_NOT_REGEX_MATCH*: Does the value of the context not match the regex given in operand?
	- *sublime.OP_REGEX_CONTAINS*: Does the value of the context contain a substring matching the regex given in operand?
	- *sublime.OP_NOT_REGEX_CONTAINS*: Does the value of the context not contain a substring matching the regex given in operand?
	match_all should be used if the context relates to the selections: does every selection have to match (match_all == True), or is at least one matching enough (match_all == False)?

- ↪`on_query_completions(view, prefix, locations)`	None or list or tuple or CompletionList	

	Called whenever completions are to be presented to the user. The prefix is a unicode string of the text to complete.

	locations is a list of points. Since this method is called for all completions in every view no matter the syntax, view.match_selector(point, relevant_scope) should be called to determine if the point is relevant.

	The return value must be one of the following formats:

	None: no completions are provided

	return None
	A list of completion values

	return [
	    ["me1", "method1()"],
	    ["me2", "method2()"]
	]
	A 2-element tuple with the first element being a list of completion values, and the second element being flags composed via bitwise OR of:

	- *sublime.INHIBIT_WORD_COMPLETIONS*: prevent Sublime Text from showing completions based on the contents of the view
	- *sublime.INHIBIT_EXPLICIT_COMPLETIONS*: prevent Sublime Text from showing completions based on .sublime-completions files
	- *sublime.DYNAMIC_COMPLETIONS*: if completions should be re-queried as the user types 4057
	- *sublime.INHIBIT_REORDER*: prevent Sublime Text from changing the completion order 4074
	return (
	    [
	        ["me1", "method1()"],
	        ["me2", "method2()"]
	    ],
	    sublime.INHIBIT_WORD_COMPLETIONS
	    | sublime.INHIBIT_EXPLICIT_COMPLETIONS
	)
	A CompletionList object 4050

	cl = sublime.CompletionList(flags=sublime.INHIBIT_WORD_COMPLETIONS)
	start_background_fetch(cl)
	return cl

- ↪`on_text_command(view, command_name, args)`	(str, dict)	Called when a text command is issued. The listener may return a (command, arguments) tuple to rewrite the command, or None to run the command unmodified.	
- ↪`on_window_command(window, command_name, args)`	(str, dict)	Called when a window command is issued. The listener may return a (command, arguments) tuple to rewrite the command, or None to run the command unmodified.	
- ↪`on_post_text_command(view, command_name, args)`	None	Called after a text command has been executed.	
- ↪`on_post_window_command(window, command_name, args)`	None	Called after a window command has been executed.	
- ↪`on_new_window(window)`	None	Called when a window is created, passed the Window object.	4050
- ↪`on_new_window_async(window)`	None	Called when a window is created, passed the Window object. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_close_window(window)`	None	Called right before a window is closed, passed the Window object.	4050
- ↪`on_new_project(window)`	None	Called right after a new project is created, passed the Window object.	4050
- ↪`on_new_project_async(window)`	None	Called right after a new project is created, passed the Window object. Runs in a separate thread, and does not block the application.	4050
- ↪`on_load_project(window)`	None	Called right after a project is loaded, passed the Window object.	4050
- ↪`on_load_project_async(window)`	None	Called right after a project is loaded, passed the Window object. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_save_project(window)`	None	Called right before a project is saved, passed the Window object.	4050
- ↪`on_post_save_project(window)`	None	Called right after a project is saved, passed the Window object.	4050
- ↪`on_post_save_project_async(window)`	None	Called right after a project is saved, passed the Window object. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_close_project(window)`	None	Called right before a project is closed, passed the Window object.	4050

### ===🗝 sublime_plugin.ViewEventListener Class

A class that provides similar event handling to EventListener, but bound to a specific view. Provides class method-based filtering to control what views objects are created for.

The view is passed as a single parameter to the constructor. The default implementation makes the view available via self.view.

Class Methods	Return Value	Description
- ↪`is_applicable(settings)`	bool	A @classmethod that receives a Settings object and should return a bool indicating if this class applies to a view with those settings
- ↪`applies_to_primary_view_only()`	bool	A @classmethod that should return a bool indicating if this class applies only to the primary view for a file. A view is considered primary if it is the only, or first, view into a file.
Methods 	Return Value	Description	
- ↪`on_load()`	None	Called when the file is finished loading.	3155
- ↪`on_load_async()`	None	Called when the file is finished loading. Runs in a separate thread, and does not block the application.	3155
- ↪`on_reload()`	None	Called when the file is reloaded.	4050
- ↪`on_reload_async()`	None	Called when the file is reloaded. Runs in a separate thread, and does not block the application.	4050
- ↪`on_revert()`	None	Called when the file is reverted.	4050
- ↪`on_revert_async()`	None	Called when the file is reverted. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_move()`	None	Called right before a view is moved between two windows.	4050
- ↪`on_post_move()`	None	Called right after a view is moved between two windows.	4050
- ↪`on_post_move_async()`	None	Called right after a view is moved between two windows. Runs in a separate thread, and does not block the application.	4050
- ↪`on_pre_close()`	None	Called when a view is about to be closed. The view will still be in the window at this point.	3155
- ↪`on_close()`	None	Called when a view is closed (note, there may still be other views into the same buffer).	3155
- ↪`on_pre_save()`	None	Called just before a view is saved.	3155
- ↪`on_pre_save_async()`	None	Called just before a view is saved. Runs in a separate thread, and does not block the application.	3155
- ↪`on_post_save()`	None	Called after a view has been saved.	3155
- ↪`on_post_save_async()`	None	Called after a view has been saved. Runs in a separate thread, and does not block the application.	3155
- ↪`on_modified()`	None	Called after changes have been made to the view.	
- ↪`on_modified_async()`	None	Called after changes have been made to the view. Runs in a separate thread, and does not block the application.	
- ↪`on_text_changed([changes])`	None	

	Called once after changes has been made to a view, with detailed information about what has changed.

	changes is a list of TextChange objects.

	4050

- ↪`on_text_changed_async([changes])`	None	

	Called once after changes has been made to a view, with detailed information about what has changed. Runs in a separate thread, and does not block the application.

	changes is a list of TextChange objects.

	4050

- ↪`on_selection_modified()`	None	Called after the selection has been modified in the view.	
- ↪`on_selection_modified_async()`	None	Called after the selection has been modified in the view. Runs in a separate thread, and does not block the application.	
- ↪`on_activated()`	None	Called when a view gains input focus.	
- ↪`on_activated_async()`	None	Called when the view gains input focus. Runs in a separate thread, and does not block the application.	
- ↪`on_deactivated()`	None	Called when the view loses input focus.	
- ↪`on_deactivated_async()`	None	Called when the view loses input focus. Runs in a separate thread, and does not block the application.	
- ↪`on_hover(point, hover_zone)`	None	

	Called when the user's mouse hovers over the view for a short period.

	point is the closest point in the view to the mouse location. The mouse may not actually be located adjacent based on the value of hover_zone:

	- ↪*sublime.HOVER_TEXT*: When the mouse is hovered over text.
	- ↪*sublime.HOVER_GUTTER*: When the mouse is hovered over the gutter.
	- ↪*sublime.HOVER_MARGIN*: When the mouse is hovered in whitespace to the right of a line.

- ↪`on_query_context(key, operator, operand, match_all)`	bool or None	

	Called when determining to trigger a key binding with the given context key. If the plugin knows how to respond to the context, it should return either True of False. If the context is unknown, it should return None.

	operator is one of:

	- ↪*sublime.OP_EQUAL*: Is the value of the context equal to the operand?
	- ↪*sublime.OP_NOT_EQUAL*: Is the value of the context not equal to the operand?
	- ↪*sublime.OP_REGEX_MATCH*: Does the value of the context match the regex given in operand?
	- ↪*sublime.OP_NOT_REGEX_MATCH*: Does the value of the context not match the regex given in operand?
	- ↪*sublime.OP_REGEX_CONTAINS*: Does the value of the context contain a substring matching the regex given in operand?
	- ↪*sublime.OP_NOT_REGEX_CONTAINS*: Does the value of the context not contain a substring matching the regex given in operand?
	match_all should be used if the context relates to the selections: does every selection have to match (match_all == True), or is at least one matching enough (match_all == False)?

- ↪`on_query_completions(prefix, locations)`	None or list or tuple or CompletionList	
Called whenever completions are to be presented to the user. The prefix is a unicode string of the text to complete.

	locations is a list of points. Since this method is called for all completions no matter the syntax, self.view.match_selector(point, relevant_scope) should be called to determine if the point is relevant.

	The return value must be one of the following formats:

	None: no completions are provided

	return None
	A list of completion values

	return [
	    ["me1", "method1()"],
	    ["me2", "method2()"]
	]

	A 2-element tuple with the first element being a list of completion values, and the second element being flags composed via bitwise OR of:

	- ↪*sublime.INHIBIT_WORD_COMPLETIONS*: prevent Sublime Text from showing completions based on the contents of the view
	- ↪*sublime.INHIBIT_EXPLICIT_COMPLETIONS*: prevent Sublime Text from showing completions based on .sublime-completions files
	- ↪*sublime.DYNAMIC_COMPLETIONS*: if completions should be re-queried as the user types 4057
	- ↪*sublime.INHIBIT_REORDER*: prevent Sublime Text from changing the completion order 4074
	return (
	    [
	        ["me1", "method1()"],
	        ["me2", "method2()"]
	    ],
	    sublime.INHIBIT_WORD_COMPLETIONS
	    | sublime.INHIBIT_EXPLICIT_COMPLETIONS
	)
	A CompletionList object 4050

	cl = sublime.CompletionList(flags=sublime.INHIBIT_WORD_COMPLETIONS)
	start_background_fetch(cl)
	return cl

- ↪`on_text_command(command_name, args)`	(str, dict)	Called when a text command is issued. The listener may return a (command, arguments) tuple to rewrite the command, or None to run the command unmodified.	3155
- ↪`on_post_text_command(command_name, args)`	None	Called after a text command has been executed.	3155


### ===🗝 sublime Module

Methods	Return Value	Description
- *set_timeout(callback, delay)*	none	Calls the given callback after the given delay (in milliseconds). Callbacks with an equal delay will be run in the order they were added. It is safe to call setTimeout from multiple threads.
- *status_message(string)*	none	Sets the message that appears in the status bar.
- *error_message(string)*	none	Displays an error dialog to the user.
- *message_box(string)*	none	Displays a message box to the user.
- *question_box(string)*	bool	Displays a yes / no message box to the user, return True iff they selected yes.
- *options()*	Options	Returns a reference to the application options.
- *windows()*	[Window]	Returns a list of all the open windows.
- *active_window()*	Window	Returns the most recently used window.
- *run_command(string, <args>)*	none	Runs the named ApplicationCommand with the (optional) given arguments.
- *can_run_command(string, <args>)*	none	Returns True iff the command is enabled with the (optional) given arguments
- *make_command(string, <args>)*	String	Builds a command string from a command name and arguments. This string is suitable to use as an argument to showCompletions().
- *packages_path()*	String	Returns the base path to the packages.
- *installed_packages_path()*	String	Returns the path where all the user's *.sublime-package files are.
- *get_clipboard()*	String	Returns the contents of the clipboard.
- *set_clipboard(string)*	none	Sets the contents of the clipboard.
- *get_macro()*	[String]	Returns the current macro. The macro is represented as a list of commands to run.
- *set_macro([string])*	none	Sets the current macro.

sublime Module
Methods	Return Value	Description	
- ↪*set_timeout(callback, delay)*	None	Runs the callback in the main thread after the given delay (in milliseconds). Callbacks with an equal delay will be run in the order they were added.	
- ↪*set_timeout_async(callback, delay)*	None	Runs the callback on an alternate thread after the given delay (in milliseconds).	
- ↪*error_message(string)*	None	Displays an error dialog to the user.	
- ↪*message_dialog(string)*	None	Displays a message dialog to the user.	
- ↪*ok_cancel_dialog(string, <ok_title>)*	bool	Displays an ok / cancel question dialog to the user. If ok_title is provided, this may be used as the text on the ok button. Returns True if the user presses the ok button.	
- ↪*yes_no_cancel_dialog(string, <yes_title>, <no_title>)*	int	Displays a yes / no / cancel question dialog to the user. If yes_title and/or no_title are provided, they will be used as the text on the corresponding buttons on some platforms. Returns sublime.DIALOG_YES, sublime.DIALOG_NO or sublime.DIALOG_CANCEL.	
- ↪*open_dialog(callback, <file_types>, <directory>, <multi_select>, <allow_folders>)*	None	
	Presents the user with a file dialog for the purpose of opening a file, and passes the resulting file path to callback.

	callback
	A callback to accept the result of the user’s choice. If the user cancels the dialog, None will be passed. If a file is selected, a str containing the path will be passed. If the parameter multi_select is True, a list of str file paths will be passed.

	file_types
	A specification of allowable file types. This parameter should be a list containing 2-element tuples:

	A str containing a description
	A list of str with valid file extensions
	Example:

	[
	    ('Python source files', ['py', 'py3', 'pyw']),
	    ('C source files', ['c', 'h'])
	]
	directory
	A str of the directory to open the file dialog to. If not specified, will use the directory of the current view.

	multi_select
	A bool to indicate that the user should be allowed to select multiple files

	allow_folders
	A bool to indicate that the user should be allowed to select folders

	4075
- ↪*save_dialog(callback, <file_types>, <directory>, <name>, <extension>)*	None	
	Presents the user with file dialog for the purpose of saving a file, and passes the result to callback.

	callback
	A callback to accept the result of the user’s choice. If the user cancels the dialog, None will be passed. If a file is selected, a str containing the path will be passed.

	file_types
	A specification of allowable file types. This parameter should be a list containing 2-element tuples:

	A str containing a description
	A list of str with valid file extensions
	Example:

	[
	    ('Python source files', ['py', 'py3', 'pyw']),
	    ('C source files', ['c', 'h'])
	]
	directory
	A str of the directory to open the file dialog to. If not specified, will use the directory of the current view.

	name
	A str with the default file name

	extension
	A str containing the default file extension

	4075
- ↪`select_folder_dialog(callback, <directory>, <multi_select>)`	None	
	Presents the user with a file dialog for the purpose of selecting a folder, and passes the result to callback.

	callback
	A callback to accept the result of the user’s choice. If the user cancels the dialog, None will be passed. If a folder is selected, a str containing the path will be passed. If the parameter multi_select is True, a list of str folder paths will be passed.

	directory
	A str of the directory to open the file dialog to. If not specified, will use the directory of the current view.

	multi_select
	A bool to indicate that the user should be allowed to select multiple folders

	4075
- ↪`load_resource(name)`	str	Loads the given resource. The name should be in the format "Packages/Default/Main.sublime-menu".	
- ↪`load_binary_resource(name)`	bytes	Loads the given resource. The name should be in the format "Packages/Default/Main.sublime-menu".	
- ↪`find_resources(pattern)`	[str]	Finds resources whose file name matches the given pattern.	
- ↪`ui_info()`	dict	Returns information about the user interface, including top-level keys system, theme and color_scheme	4096
- ↪`list_syntaxes()`	[Syntax]	Returns a list of all available syntaxes	4081
- ↪`syntax_from_path(path)`	Syntax or None	Returns the the Syntax, if any, at the unicode string path specified	4081
- ↪`find_syntax_by_name(name)`	[Syntax]	Returns the the Syntax, if any, with the unicode string name specified	4081
- ↪`find_syntax_by_scope(scope)`	[Syntax]	Returns the the Syntax, if any, with the unicode string base scope specified	4081
- ↪`find_syntax_for_file(fname, <first_line>)`	Syntax or None	Returns the the Syntax that will be used when opening a file with the name fname. The first_line of file contents may also be provided if available.	4081
- ↪`encode_value(value, <pretty>)`	str	Encode a JSON compatible value into a string representation. If pretty is set to True, the string will include newlines and indentation.	
- ↪`decode_value(string)`	value	Decodes a JSON string into an object. If the string is invalid, a ValueError will be thrown.	
- ↪`expand_variables(value, variables)`	value	Expands any variables in the string value using the variables defined in the dictionary variables. value may also be a list or dict, in which case the structure will be recursively expanded. Strings should use snippet syntax, for example: expand_variables("Hello, ${name}", {"name": "Foo"})	
- ↪`format_command(cmd, <args>)`	str	Create a "command string" from a str cmd name, and an optional dict of args. This is used when constructing a command-based CompletionItem.	4075
- ↪`command_url(cmd, <args>)`	str	Creates a subl:-protocol URL for executing a command in a minihtml link.	4075
- ↪`load_settings(base_name)`	Settings	Loads the named settings. The name should include a file name and extension, but not a path. The packages will be searched for files matching the base_name, and the results will be collated into the settings object. Subsequent calls to load_settings() with the base_name will return the same object, and not load the settings from disk again.	
- ↪`save_settings(base_name)`	None	Flushes any in-memory changes to the named settings object to disk.	
- ↪`windows()`	[Window]	Returns a list of all the open windows.	
- ↪`active_window()`	Window	Returns the most recently used window.	
- ↪`packages_path()`	str	Returns the path where all the user's loose packages are located.	
- ↪`installed_packages_path()`	str	Returns the path where all the user's .sublime-package files are located.	
- ↪`cache_path()`	str	Returns the path where Sublime Text stores cache files.	
- ↪`get_clipboard(<size_limit>)`	str	DEPRECATED - use get_clipboard_async() when possible. Returns the contents of the clipboard. size_limit protects against unnecessarily large data, and defaults to 16,777,216 bytes. If the clipboard is larger than size_limit, an empty string will be returned.	
- ↪`get_clipboard_async(callback, <size_limit>)`	None	Calls callback with the contents of the clipboard. size_limit protects against unnecessarily large data, and defaults to 16,777,216 bytes. If the clipboard is larger than size_limit, an empty string will be passed.	4075
- ↪`set_clipboard(string)`	None	Sets the contents of the clipboard.	
- ↪`score_selector(scope, selector)`	int	Matches the selector against the given scope, returning a score. A score of 0 means no match, above 0 means a match. Different selectors may be compared against the same scope: a higher score means the selector is a better match for the scope.	
- ↪`run_command(string, <args>)`	None	Runs the named ApplicationCommand with the (optional) given args.	
- ↪`get_macro()`	[dict]	Returns a list of the commands and args that compromise the currently recorded macro. Each dict will contain the keys "command" and "args".	
- ↪`log_commands(flag)`	None	Controls command logging. If enabled, all commands run from key bindings and the menu will be logged to the console.	
- ↪`log_input(flag)`	None	Controls input logging. If enabled, all key presses will be logged to the console.	
- ↪`log_result_regex(flag)`	None	Controls result regex logging. This is useful for debugging regular expressions used in build systems.	
- ↪`log_control_tree(flag)`	None	When enabled, clicking with Ctrl+Alt will log the control tree under the mouse to the console.	4064
- ↪`log_fps(flag)`	None	When enabled, logs the number of frames per second being rendered for the user interface	4075
- ↪`version()`	str	Returns the version number	
- ↪`platform()`	str	Returns the platform, which may be "osx", "linux" or "windows"	
- ↪`arch()`	str	Returns the CPU architecture, which may be "x32", "x64" or "arm64"	
- ↪`channel()`	str	Returns the release channel this build of Sublime Text is from: "dev" or "stable"


### ===🗝 sublime.Settings Class

Methods	Return Value	Description	
- ↪*get(name, <default>)*	value	Returns the named setting, or default if it's not defined. If not passed, default will have a value of None.	
- ↪*set(name, value)*	None	Sets the named setting. Only primitive types, lists, and dicts are accepted.	
- ↪*erase(name)*	None	Removes the named setting. Does not remove it from any parent Settings.	
- ↪*has(name)*	bool	Returns True iff the named option exists in this set of Settings or one of its parents.	
- ↪*add_on_change(key, on_change)*	None	Register a callback to be run whenever a setting in this object is changed.	
- ↪*clear_on_change(key)*	None	Remove all callbacks registered with the given key.	
- ↪*to_dict()*	dict	Returns a copy of the settings as a dict	4078 3.8
- ↪*update(pairs)*	None	

	Update the settings from pairs, which may be any of the following:
	- A dict
	- An implementation of collections.abc.Mapping
	- An object that has a keys() method
	- An object that provides key/value pairs when iterated
	- Keyword arguments


### ===🗝 Class sublime.View
Represents a view into a text buffer. Note that multiple views may refer to the same buffer, but they have their own unique selection and geometry.

Methods Return Value    Description
- *id()*    int Returns a number that uniquely identifies this view.
- *buffer_id()*  int Returns a number that uniquely identifies the buffer underlying this view.
- *file_name()*  String  The full name file the file associated with the buffer, or None if it doesn't exist on disk.
- *name()*  String  The name assigned to the buffer, if any
- *set_name(name)*   none    Assigns a name to the buffer
- *is_loading()* bool    Returns true if the buffer is still loading from disk, and not ready for use.
- *is_dirty()*   bool    Returns true if there are any unsaved modifications to the buffer.
- *is_read_only()*    bool    Returns true if the buffer may not be modified.
- *set_read_only(value)*  none    Sets the read only property on the buffer.
- *is_scratch()* bool    Returns true if the buffer is a scratch buffer. Scratch buffers never report as being dirty.
- *set_scratch(value)*   none    Sets the scratch property on the buffer.
- *options()*   Options Returns a reference to the file type options for the view.
- *window()*    Window  Returns a reference to the window containing the view.
- *run_command(string,* <args>)  none    Runs the named text_command with the (optional) given arguments.
- *can_run_command(string,* <args>)   none    Returns True iff the command is enabled with the (optional) given arguments
- *size()*  int Returns the number of character in the file.
- *substr(region)*  String  Returns the contents of the region as a string.
- *substr(point)*   String  Returns the character to the right of the point.
- *insert(point, string)*   int Inserts the given string in the buffer at the specified point. Returns the number of characters inserted: this may be different if tabs are being translated into spaces in the current buffer.
- *erase(region)*   none    Erases the contents of the region from the buffer.
- *replace(region, string)* none    Replaces the contents of the region with the given string.
- *sel()*   region_set   Returns a reference to the selection.
- *line(point)* Region  Returns the line that contains the point.
- *line(region)*    Region  Returns a modified copy of region such that it starts at the beginning of a line, and ends at the end of a line. Note that it may span several lines.
- *full_line(point)* Region  As line(), but the region includes the trailing newline character, if any.
- *full_line(region)*    Region  As line(), but the region includes the trailing newline character, if any.
- *lines(region)*   [Region]    Returns a list of lines (in sorted order) intersecting the region.
- *split_by_newlines(region)* [Region]    Splits the region up such that each region returned exists on exactly one line.
- *word(point)* Region  Returns the word that contains the point.
- *word(region)*    Region  Returns a modified copy of region such that it starts at the beginning of a word, and ends at the end of a word. Note that it may span several words.
- *find(pattern,* from_position, <flags>)    Region  Returns the first Region matching the regex pattern, starting from the given point, or None if it can't be found. The optional flags parameter may be sublime.LITERAL, sublime.IGNORECASE, or the two ORed together.
- *find_all(pattern, <flags>, <format>, <extractions>)*  [Region]    Returns all (non-overlapping) regions matching the regex pattern. The optional flags parameter may be sublime.LITERAL, sublime.IGNORECASE, or the two ORed together. If a format string is given, then all matches will be formatted with the formatted string and placed into the extractions list.
- *rowcol(point)*   (int, int)  Calculates the 0 based line and column numbers of the point.
- *text_point(row,* col) int Calculates the character offset of the given, 0 based, row and column. Note that 'col' is interpreted as the number of characters to advance past the beginning of the row.
- *extract_scope(point)* Region  Returns the extents of the syntax name assigned to the character at the given point.
- *syntax_name(point)*   String  Returns the syntax name assigned to the character at the given point.
- *match_selector(point,* selector)  bool    Returns True iff the selector matches the syntax name assigned to the character at the given point.
- *show(point,* <show_surrounds>)    none    Scroll the view to show the given point.
- *show(region,* <show_surrounds>)   none    Scroll the view to show the given region.
- *show(region_set,* <show_surrounds>)    none    Scroll the view to show the given region_set.
- *visible_region()* Region  Returns the currently visible area of the view.
- *extract_completions(prefix, <point>)* [String]    Returns the completions for the given prefix, based on the contents of the buffer. Completions will be ordered by frequency, and distance from the given point, if supplied.
- *show_completions(point,* prefix, [completions])   none    Shows the autocomplete menu, at the given point, with the given completions. If an entry is selected, the given prefix will be replaced with the selected completion. Each completion may be either a string, or a tuple consisting of a description and a command to run.
- *add_regions(key, [regions], scope, <flags>)*  none    Add a set of regions to the view. If a set of regions already exists with the given key, they'll be overwritten. The scope is used to source a color to draw the regions in, it should be the name of a scope, such as "comment" or "string". If the scope is empty, the regions won't be drawn.

    The optional flags parameter is a bitwise combination of:

    - ↪*sublime.DRAW_EMPTY*. Draw empty regions with a vertical bar. By default, they aren't drawn at all.
    - ↪*sublime.HIDE_ON_MINIMAP*. Don't show the regions on the minimap.
    - ↪*sublime.DRAW_EMPTY_AS_OVERWRITE*. Draw empty regions with a horizontal bar instead of a vertical one.
    - ↪*sublime.DRAW_OUTLINED*. Draw regions as an outline, rather than filled in.
    - ↪*sublime.PERSISTENT*. Save the regions in the session.

- *get_regions(key)* [regions]   Return the regions associated with the given key, if any
- *erase_regions(key)*   none    Removed the named regions
- *set_status(key,* value)   none    Adds the status key to the view. The value will be displayed in the status bar, in a comma separated list of all status values, ordered by key. Setting the value to the empty string will clear the status.
- *get_status(key)*  String  Returns the previously assigned value associated with the key, if any.
- *erase_status(key)*    none    Clears the named status.

- *begin_edit(<command>, <args>)*	Edit	创建一个 edit 对象，可以划定一组撤销操作，需要对应到 end_edit()标记。
- *end_edit(edit)*	Edit	标记完成一个edit对象。（begin_edit 到 end_edit 之间的操作可以当成一个命令分组，可以用于撤销操作。）

每一个 begion_edit() 调用都要对应一个 view.end_edit() 调用，通常会写在 try ... finally 块内。

### ===🗝 Class sublime.region_set
Maintains a set of Regions, ensuring that none overlap, and that they are kept in sorted order.

Methods Return Value    Description
- *clear()* none    Removes all regions.
- *add(region)* none    Adds the given region. It will be merged with any intersecting regions already contained within the set.
- *add_all(region_set)*   none    *add_all* Adds all regions in the given set.
- *subtract(region)*    none    Subtracts the region from all regions in the set.
- *contains(region)*    bool    Returns true iff the given region is a subset.

### ===🗝 Class sublime.Region
Represents an area of the buffer. Empty regions, where a == b are valid.

Constructors    Description
- *Region(a, b)*    Creates a Region with initial values a and b.
- Properties    Type    Description
- *a*   int The first end of the region.
- *b*   int The second end of the region. May be less that a, in which case the region is a reversed one.
- Methods   Return Value    Description
- *begin()* int Returns the minimum of a and b.
- *end()*   int Returns the maximum of a and b.
- *size()*  int Returns the number of characters spanned by the region. Always >= 0.
- *empty()* bool    Returns true iff begin() == end().
- *cover(region)*   Region  Returns a Region spanning both this and the given regions.
- *intersection(region)*    Region  Returns the set intersection of the two regions.
- *intersects(region)*  bool    Returns True iff this == region or both include one or more positions in common.
- *contains(region)*    bool    Returns True iff the given region is a subset.
- *contains(point)* bool    Returns True iff begin() <= point <= end().

### ===🗝 Class sublime.Window
Methods Return Value    Description
- *id()*    int Returns a number that uniquely identifies this window.
- *new_file()*   View    Creates a new file. The returned view will be empty, and its is_loaded method will return true.
- *open_file(filename, <row>, <col>)*    View    Opens the named file, and returns the corresponding view. Row and col are optional and may be omitted. If the file is already opened, it will be brought to the front. Note that as file loading is asynchronous, operations on the returned view won't be possible until its is_loading method returns false.
- *active_view()*    View    Returns the currently edited view.
- *active_view_in_group(group_idx)* View    Returns the active view in the given group.
- *views()* [View]  Returns a list of all the views in the current window.
- *views_in_group(group_idx)*  [View]  Returns a list of all the views in given group.
- *focus_view(view)* none    Focuses the given view.
- *num_groups()* int Returns the number of view groups in the window.
- *active_group()*   int Returns the index of the currently selected group.
- *get_view_position(view)*   group_idx, view_idx   Returns the group, and the index within the group, of the given view.
- *set_view_position(view, group_idx, view_idx)*    none    Moves the view to to the given group and index within the group.
- *run_command(string, <args>)*  none    Runs the named window_command with the (optional) given arguments.
- *can_run_command(string, <args>)*   none    Returns True iff the command is enabled with the (optional) given arguments
- *is_full_screen()*  bool    Returns true of the Window is currently in full screen mode.
- *show_quick_panel(key, command, args, <display_args>, <flags>)*  none    Shows the quick panel, populated with display_args. When an entry is selected, the command is run, with the arg corresponding to the selected display arg as a parameter. key should be used if updating the list asynchronously, or left blank otherwise.
    display_args is optional, and will default to the list given for args.

    The optional flags parameter is a bitwise combination of:

    - ↪*sublime.QUICK_PANEL_FILES*. Indicates that the args correspond to file names, which changes how they're drawn.
    - ↪*sublime.QUICK_PANEL_MULTI_SELECT*. Enables Ctrl+Enter to select all displayed items in the quick panel, up to a maximum of 16.
    - ↪*sublime.QUICK_PANEL_NO_MULTI_SELECT_SAFETY_CHECK*. Used in conjunction with the above, removes the 16 item limit.
    - ↪*sublime.QUICK_PANEL_UPDATE_ONLY*. When asynchronously updating the panel, ignore the update call if the panel has been closed.
    - ↪*sublime.QUICK_PANEL_MONOSPACE_FONT*. Use a monospace font to draw the quick panel.

- *show_select_panel(display_args, on_select, on_cancel, flags, <key>, <selected_index>)* none    Shows the quick panel, populated with display_args.
    on_select will be run for each item selected, with the index of the item passed in as a parameter.

    on_cancel will be run if the panel is closed without any items being selected.

    The flags parameter should be 0, or a bitwise combination of:

    - ↪*sublime.SELECT_PANEL_FILES*. Indicates that the args correspond to file names, which changes how they're drawn.
    - ↪*sublime.SELECT_PANEL_MULTI_SELECT*. Enables Ctrl+Enter to select all displayed items in the quick panel, up to a maximum of 16.
    - ↪*sublime.SELECT_PANEL_NO_MULTI_SELECT_SAFETY_CHECK*. Used in conjunction with the above, removes the 16 item limit.
    - ↪*sublime.SELECT_PANEL_UPDATE_ONLY*. When asynchronously updating the panel, ignore the update call if the panel has been closed.
    - ↪*sublime.SELECT_PANEL_MONOSPACE_FONT*. Use a monospace font to draw the quick panel.
    key should be used if updating the list asynchronously, or left blank otherwise.

    selected_index should be the index of the item to be initially selected, or omitted otherwise.

- *show_input_panel(caption, initial_text, on_done, on_change, on_cancel)*    View    Shows the input panel, to collect a line of input from the user. on_done and on_change, if not None, should both be functions that expect a single string argument. on_cancel should be a function that expects no arguments. The view used for the input widget is returned.
- *renderer()*  String  Returns the name of the active Renderer, either "direct_x", or "open_gl".
- *hwnd()*  HWND    Returns the win32 window handle for the window.

### ===🗝 Class sublime.Options
Methods Return Value    Description
- *get_string(name)* String  Returns the string value of the named option.
- *get(name)*   value   Returns the named option as the appropriate type.
- *get(name, default)*  value   Returns the named option as the appropriate type, or default if it's not defined.
- *set(name, value)*    none    Sets the named option. Only primitive types are accepted.
- *erase(name)* none    Removes the named option. Does not remove it from any parent Options.
- *has(name)*   bool    Returns true iff the named option exists in this set of Options or one of its parents.

### ===🗝 Module sublimeplugin
Methods Return Value    Description
(no methods)        

### ===🗝 Class sublimeplugin.Plugin
Note that many of these events are triggered by the buffer underlying the view, and thus the method is only called once, with the first view as the parameter.

Methods Return Value    Description
- *on_new(view)* none    Called when a new buffer is created.
- *on_clone(view)*   none    Called when a view is cloned from an existing one.
- *on_load(view)*    none    Called when the file is finished loading.
- *on_close(view)*   none    Called when a view is closed (note, there may still be other views into the same buffer).
- *on_pre_save(view)* none    Called just before a view is saved.
- *on_post_save(view)*    none    Called after a view has been saved.
- *on_modified(view)*    none    Called after changes have been made to a view.
- *on_selection_modified(view)*   none    Called after the selection has been modified in a view.
- *on_activated(view)*   none    Called when a view gains input focus.
- *on_project_load(window)*   none    Called after a project has been loaded.
- *on_project_close(window)*  none    Called after a project has been closed.
- *on_query_context(view, key, value)*    bool or none    Called when determining to trigger a key binding with the given context key. If the plugin knows how to respond to the context, it should return either True of False. If the context is unknown, it should return None.

### ===🗝 Class sublimeplugin.application_command(Plugin)
Methods Return Value    Description
- *run(args)*   none    Called when the command is run.
- *is_enabled(args)* bool    Returns true if the command is able to be run at this time. The default implementation simply always returns True.

### ===🗝 Class sublimeplugin.window_command(Plugin)
Methods Return Value    Description
- *run(window, args)*   none    Called when the command is run.
- *is_enabled(window, args)* bool    Returns true if the command is able to be run at this time. The default implementation simply always returns True.

### ===🗝 Class sublimeplugin.text_command(Plugin)
Methods Return Value    Description
- *run(view, args)* none    Called when the command is run.
- *is_enabled(view, args)*   bool    Returns true if the command is able to be run at this time. The default implementation simply always returns True.


# =🚩 Snippet 代码片段插件
- https://docs.sublimetext.io/guide/extensibility/snippets.html

Whether you are coding or writing the next vampire best-seller, you're likely to need certain short fragments of text again and again. Use snippets to save yourself tedious typing. Snippets are smart templates that will insert text for you and adapt it to their context.

To create a new snippet, select Tools | Developer | New Snippet... Sublime Text will present you with a skeleton for it.

Snippets can be stored under any package's folder, but to keep it simple while you're learning, you can save them to your Packages/User folder.

**Snippets File Format**

Snippets typically live in a Sublime Text package. They are simplified XML files with the extension .sublime-snippet. For instance, you could have a greeting.sublime-snippet inside an Email package.

The structure of a typical snippet is as follows (including the default hints Sublime Text inserts for your convenience):

代码片段配置文件的一般格式如下，创建 C++ 程序模板，保存到 %AppData%\Sublime Text 3\Packages 目录下：

```xml
<snippet>
    <description>cpp - My Fancy Snippet</description>
    <content><![CDATA[
#include <iostream>

using namespace std;

int main(int argc, char *argv[]) try
{
    cout << "${1:Hello World!}" << endl;
}
catch (const char *err)
{
    cout << "${2:Error}: " << err << endl;
}
]]></content>
    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
    <tabTrigger>cpp</tabTrigger>
    <!-- Optional: Set a scope to limit where the snippet will trigger -->
    <scope>text.plain，text.html.markdown, source.c++</scope>
</snippet>
```

- *content* 输出的代码片段内容，使用 XML 的标记 <![CDATA[…]]>；
	- If you want to get a literal $, you have to escape it like this: \$.
	- When writing a snippet that contains indentation, always use tabs. When the snippet is inserted, the tabs will be transformed into spaces if the option translate_tabs_to_spaces is true.
- *tabTrigger* 触发器字符串，输入指定的内容，按 Tab ⭾ 就会触发代码片段内容；
- *scope* 触发器字符串在什么作用域下有效，多个作用域使用逗号分隔，使用空格分隔表示作用域都成立才触发，Tools -> Developer -> Show Scope Name 菜单查看光标当前所在的作用域；
- *description* 描述内容，默认值是 snippet 配置文件名，这个内容会出现在命令列表中；

比如，以下 Python 代码片段，只有在 Python 代码文件输入 @property 再按 Tab 才会触发，这个标注类型就是 meta.annotation 对应的作用域：

```xml
<snippet>
	<content><![CDATA[property
def ${1:foo}(self):
	return self.${2:_$1}
$0]]></content>
	<tabTrigger>property</tabTrigger>
	<scope>source.python meta.annotation</scope>
	<description>New Property</description>
</snippet>
```


The content must be included in a <![CDATA[…]]> section. Snippets won't work if you don't do this!

The content of your snippet must not contain ]]> because this string of characters will prematurely close the <![CDATA[…]]> section, resulting in an XML error. To work around this pitfall, you can insert an undefined variable into the string like this: ]]$NOT_DEFINED>. This modified string passes through the XML parser without closing the content element's <![CDATA[…]]> section, but Sublime Text will replace $NOT_DEFINED with an empty string before inserting the snippet into your file. In other words, ]]$NOT_DEFINED> in your snippet file content will be written as ]]> when you trigger the snippet.

使用控制台查询所有代码片段文件：

    sublime.find_resources('*.sublime-snippet') 


**Environment Variables**

Snippets have access to contextual information in the form of environment variables. The values of the variables listed below are set automatically by Sublime Text.

|      Variable      |                             Description                             |
|--------------------|---------------------------------------------------------------------|
| $PARAM1 .. $PARAMn | Arguments passed to the insert_snippet command. (Not covered here.) |
| $SELECTION         | The text that was selected when the snippet was triggered.          |
| $TM_CURRENT_LINE   | Content of the cursor's line when the snippet was triggered.        |
| $TM_CURRENT_WORD   | Word under the cursor when the snippet was triggered.               |
| $TM_DIRECTORY      | Directory name of the file being edited. (since 3154)               |
| $TM_FILENAME       | Name of the file being edited, including extension.                 |
| $TM_FILEPATH       | Path to the file being edited.                                      |
| $TM_FULLNAME       | User's user name.                                                   |
| $TM_LINE_INDEX     | Column where the snippet is being inserted, 0 based.                |
| $TM_LINE_NUMBER    | Row where the snippet is being inserted, 1 based.                   |
| $TM_SELECTED_TEXT  | An alias for $SELECTION.                                            |
| $TM_SCOPE          | The scope of the beginning of each selected region. (since 3154)    |
| $TM_SOFT_TABS      | YES if translate_tabs_to_spaces is true, otherwise NO.              |
| $TM_TAB_SIZE       | Spaces per-tab (controlled by the tab_size option).                 |

Let's see a simple example of a snippet using variables:

	=================================
	USER NAME:          $TM_FULLNAME
	FILE NAME:          $TM_FILENAME
	 TAB SIZE:          $TM_TAB_SIZE
	SOFT TABS:          $TM_SOFT_TABS
	=================================

	# Output:
	=============================
	USER NAME:          guillermo
	FILE NAME:          test.txt
	 TAB SIZE:          4
	SOFT TABS:          YES
	=============================

	<snippet>
	    <description>scope - Scope Test Snippet</description>
	    <content><![CDATA[
	```${1:syntax}
	Snippet Environment Variables:
	    PARAM1          : $PARAM1
	    PARAM2          : $PARAM2
	    PARAM3          : $PARAM3
	    SELECTION       : $SELECTION
	    TM_CURRENT_LINE : $TM_CURRENT_LINE
	    TM_CURRENT_WORD : $TM_CURRENT_WORD
	    TM_DIRECTORY    : $TM_DIRECTORY
	    TM_FILENAME     : $TM_FILENAME
	    TM_FILEPATH     : $TM_FILEPATH
	    TM_FULLNAME     : $TM_FULLNAME
	    TM_LINE_INDEX   : $TM_LINE_INDEX
	    TM_LINE_NUMBER  : $TM_LINE_NUMBER
	    TM_SELECTED_TEXT: $TM_SELECTED_TEXT
	    TM_SCOPE        : $TM_SCOPE
	    TM_SOFT_TABS    : $TM_SOFT_TABS
	    TM_TAB_SIZE     : $TM_TAB_SIZE
	```
	]]></content>
	    <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
	    <tabTrigger>scope</tabTrigger>
	    <!-- Optional: Set a scope to limit where the snippet will trigger -->
	    <!-- <scope>text.html.markdown</scope> -->
	</snippet>

**#Fields**

With the help of field markers, you can cycle through positions within the snippet by pressing the ⭾ key. Fields are used to walk you through the customization of a snippet after it's been inserted.

	First Name: $1
	Second Name: $2
	Address: $3

In the example above, the cursor will jump to $1 if you press ⭾ once. If you press ⭾ a second time, it will advance to $2, etc. You can also move backwards in the series with ⇧ ⭾. If you press ⭾ after the highest tab stop, Sublime Text will place the cursor at the end of the snippet's content so that you can resume normal editing.

If you want to control where the exit point should be, use the $0 mark. By default, this is the end of the snippet.

You can break out of the field cycle any time by pressing Esc.

**Mirrored** Fields

Identical field markers mirror each other: when you edit the first one, the rest will be populated in real time with the same value.

	First Name: $1
	Second Name: $2
	Address: $3
	User name: $1

In this example, "User name" will be filled out with the same value as "First Name".

**Placeholders**

By expanding the field syntax a little bit, you can define default values for a field. Placeholders are useful whenever there's a general case for your snippet, but you still want to keep it customizable.

	First Name: ${1:Guillermo}
	Second Name: ${2:López}
	Address: ${3:Main Street 1234}
	User name: $1

Variables can be used as placeholders:

	First Name: ${1:Guillermo}
	Second Name: ${2:López}
	Address: ${3:Main Street 1234}
	User name: ${4:$TM_FULLNAME}

And you can nest placeholders within other placeholders too:

	Test: ${1:Nested ${2:Placeholder}}

**Substitutions**

In addition to the place holder syntax, tab stops can specify more complex operations with substitutions. Use substitutions to dynamically generate text based on a mirrored tab stop. Of course, the tab stop you want to use as variable has to be mirrored somewhere else in the snippet.

The substitution syntax has the following syntaxes:

	${var_name/regex/format_string/}
	${var_name/regex/format_string/options}

- *var_name* The variable name: 1, 2… or an environment variable such as TM_FILENAME or SELECTION.
- *regex* Perl-style regular expression: See the Boost library documentation for regular expressions (opens new window).
- *format_string* See the Boost library documentation for format strings (opens new window).
- *options* Optional. May be any of the following:
	- i Case-insensitive regex.
	- g Replace all occurrences of regex.
	- m Don't ignore newlines in the string.

With substitutions you can, for instance, underline text effortlessly:

	      Original: ${1:Hey, Joe!}
	Transformation: ${1/./=/g}

	# Output:

	      Original: Hey, Joe!
	Transformation: =========

Another more complex example can translate snail_case to Tile Case With Spaces. Basically, it combines two separate expressions and replaces into one. It also illustrates that replaces may occur before the actual tabstop.

	Transformation: ${1/^(\w)|(?:_(\w))/(?1\u$1:)(?2 \u$2:)/g}
	      Original: ${1:text_in_snail_case}

	# Output:

	Transformation: Text In Snail Case
	      Original: text_in_snail_case

You can also use environment variables with substitutions:

	# In file MyModule.js:

	Transformation: ${TM_FILENAME/(\w+)\.js/\1/g}

	# Output:

	Transformation: MyModule



# =🚩 Syntax Definitions
- https://docs.sublimetext.io/guide/extensibility/syntaxdefs.html
- Syntax Definitions https://www.sublimetext.com/docs/3/syntax.html


Syntax definitions make Sublime Text aware of programming and markup languages. Most noticeably, they work together with colors to provide syntax highlighting. Syntax definitions define scopes that divide the text in a buffer into named regions. Several editing features in Sublime Text make extensive use of this fine-grained contextual information.

Essentially, syntax definitions consist of regular expressions used to find text, as well as more or less arbitrary, dot-separated strings called scopes or scope names. For every occurrence of a given regular expression, Sublime Text gives the matching text its corresponding scope name.

Deprecation Notice

For Sublime Text 3 (Build 3084), a new syntax definition format has been added with the .sublime-syntax extension.

It is highly encouraged to be used in favor of the legacy TextMate format described in this document, unless compatibility with older versions or other editors is desired.

Documentation is available at the official documentation (opens new window).


# =🚩 Sublime Text

安装 Sublime Text：

OS X (10.7 or later is required) 
	https://download.sublimetext.com/Sublime%20Text%20Build%203126.dmg
Windows - also available as a portable version 
	https://download.sublimetext.com/Sublime%20Text%20Build%203126%20Setup.exe
	https://download.sublimetext.com/Sublime%20Text%20Build%203126.zip
Windows 64 bit - also available as a portable version
	https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64%20Setup.exe
	https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64.zip
Ubuntu 64 bit - also available as a tarball for other Linux distributions.
	https://download.sublimetext.com/sublime-text_build-3126_amd64.deb
	https://download.sublimetext.com/sublime_text_3_build_3126_x64.tar.bz2
Ubuntu 32 bit - also available as a tarball for other Linux distributions.
	https://download.sublimetext.com/sublime-text_build-3126_i386.deb
	https://download.sublimetext.com/sublime_text_3_build_3126_x32.tar.bz2


在 Ubuntu 18.04 中安装 Sublime Text 3.2：

对于 Ubuntu 18.04 及更高版本，只需打开 Ubuntu 软件搜索并安装 sublime-text 即可

对于 Ubuntu 16.04，打开终端（Ctrl + Alt + T）并运行snap命令来安装：

	sudo apt install snapd && sudo snap install sublime-text

通过其官方 apt 存储库安装 Sublime Text 3.2：

打开终端，Ctrl + Alt + T，运行命令添加密钥环：

	wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -

在提示时键入用户密码（无星号反馈），然后按Enter键。

然后运行命令添加 apt 存储库：

	echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list

最后通过Synaptic包管理器或运行命令安装sublime-text包：

	sudo apt update && sudo apt install sublime-text

要删除编辑器，请运行命令：

	sudo apt remove --autoremove sublime-text

要删除 apt 存储库，请转到软件和更新 -> 其他软件。


## ==⚡ 按需配置

Sublime Text 提供上百种配置项，Preferences - Settings 浏览查看，每项都有注解，需要什么功能就设置什么功能。

比如 Ctrl-Left/Right 或 Ctrl-Shift-Left/Right 可以按配置好的标点分隔符号来快速移动光标，或选择词组，但是中文件符号是不管用的，需要增加中文符号配置：

    "word_separators": "“”’‘；：，。？！《》（）……——￥、./\\()\"'_-:,.;<>~!@#$%^&*|+=[]{}`~?",
    "translate_tabs_to_spaces": true,


## ==⚡ Windows 资源管理器集成

增加文件夹右键菜单项，使用 UTF-16 LE with BOM 格式保存，因为有特殊符号，UTF-8 不会正确导入：

```sh
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\ST]
@="Sublime Text ✒ 🏡"
"Icon"="C:\\Program Files\\Sublime Text\\sublime_text.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\ST\command]
@="C:\\Program Files\\Sublime Text\\sublime_text.exe \"%V\""

[HKEY_CLASSES_ROOT\Directory\shell\ST]
@="Sublime Text ⚡ 🏡"
"ICON"="C:\\Program Files\\Sublime Text\\sublime_text.exe"

[HKEY_CLASSES_ROOT\Directory\shell\ST\command]
@="C:\\Program Files\\Sublime Text\\sublime_text.exe \"%V\""
```

## ==⚡ 插件源设置

只需要在 Package Control.sublime-settings 中修改：

	"channels": [
		"https://packagecontrol.io/channel_v3.json"
	],

换一下插件默认模块映射json即可。需要重新下载一个channel_v3.json文件。


## ==⚡ File Indexing 文件符号索引 
- File Indexing http://www.sublimetext.com/blog/articles/file-indexing

Sublime Text 3 的跳转功能 Goto Definition， Goto Symbol, Goto Anythig 都是基于文件索引的功能，新开的项目都会在后台执行索引的建立，如果文件较多比较消耗 CPU，特别是 Node.js 项目，其 node_modules 目录的文件可以到十万级别。如果 CPU 负载不来，可以通过以下选项设置不需要索引的目录或文件或禁止索引：

	index_exclude_patterns:
	index_files: false


在 Sublime Text 的控制台可查看索引的内容：

	>>> sublime.log_indexing(True)
	indexing [job 16]: spawning 1 workers to process 1 / 1 files
	indexing [job 16]: indexed 1 files
	indexing [job 3]: indexed 4095 files
	indexing [job 3]: spawning 2 workers to process 1174 / 1174 files

对二进制是不会处理的，有几个配置项可以过滤不需要处理的文件或文件夹，避免 index_files 引起卡顿：

	"folder_exclude_patterns": ["node_modules", ".svn", ".git", ".hg", "CVS"],
	"file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb", "*.idb", ".DS_Store", "*.class", "*.psd", "*.db", "*.sublime-workspace"],
	"binary_file_patterns": ["generated/*", "*.tbz2", "*.gzip", "*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip"],
	"tab_size": 4,
	"translate_tabs_to_spaces": true,


## ==⚡ Macro 功能

    [
        { "args": {"characters": "\n\n`"}, "command": "insert"},
        { "args": {"characters": "```"}, "command": "insert"},
        { "args": {"by": "lines", "forward": false }, "command": "move"},
        { "args": {"by": "characters", "forward": false }, "command": "move"},
        { "args": {"characters": "```"}, "command": "insert"},
        { "args": {"by": "words", "extend": true, "forward": false }, "command": "move"}
        { "args": {"file": "res://Packages/Default/Add Line Before.sublime-macro"}, "command": "run_macro_file"},
        { "args": null, "command": "paste"},
    ]


## ==⚡ Keyboard 快捷键大全

最爱的符号定位：

	Ctrl-P			文件跳转 Goto Anything
	Ctrl-R			文件级符号跳转 Goto Symbol
	Ctrl-G			文件级行跳转 Goto Line
	Ctrl-;			文件级关键字查找
	Alt-R			工程级符号跳转 Goto Symbol in Project
	Ctrl-M			配对花括号间来回跳转
	Ctrl-Shift-M	选择配对花括号的内容
    Ctrl-.          选择配对标签的内容
    Alt-.           自动添加结束标签


	Win：CTRL-Alt-Up/Down    			    多点编辑上/下行
	Win：CTRL-Alt-Left/Right 			    快速跳转到配对的花括号

	Win：CTRL - D 			Mac：⌘ + D 			就近选择相同项 MULTIPLE SELECTIONS
	Win：CTRL - Shift - L   Mac： 			    将选中行转换为多点编辑
	Win：ALT  - F3 			Mac：CTRL + ⌘ + G 	选择当前文件所有匹配项
	Win：CTRL - SHIFT - "	Mac：⌘ + ⇧ + K 		选择当前元素的父级标签
	Win：CTRL - <			Mac：CTRL + D		选择上一层标签包含的内容
	Win：CTRL - SHIFT - A 	Mac：CTRL + D 		由子元素向上选择父元素
	Win：CTRL - SHIFT - M 	Mac：⌘ + ⇧ + SPACE 	选择括号内的内容
	Win：ALT  - SHIFT - W 	Mac：CTRL + ⇧ + W 	用标签包裹行或选中项
	Win：CTRL - SHIFT - Y 	Mac：⌘ + ⇧ + Y 		计算数学表达式


根据菜单命令配置快捷键：

    { "keys": ["ctrl+alt+f"], "command": "open_in_browser" },


在 Visual Studio 和 Sublime中，经常遇到 Ctrl-Shift-F 不能用，然后输入法总是自动切换成繁体中文。

这是和 Windows 10 自带的微软拼音输入法冲突，这个拼音输入法用这个快捷键切换简体/繁体。

查找功能快捷被输入法截获了，只要切换成英文的输入法，“Find in Files”这个功能也能正常使用了。

要不然，你就还个快捷键来执行 “Find in Files”：

	[
		{ "keys": ["ctrl+shift+i"], "command": "show_panel", "args": {"panel": "find_in_files"} },
	]


窗口布局与文件标签分组

	Alt-1~0			打开对应标签序号的文件 select_by_index
	Alt-Shift-1		默认单独窗口 set_layout
	Alt-Shift-2		水平分割的 2 窗口 set_layout
	Alt-Shift-5		田字分割的 4 窗口 set_layout
	Alt-Shift-8		竖直分割的 2 窗口 set_layout
	Ctrl-0			侧栏快捷键，焦点移动到侧栏 focus_side_bar
	Ctrl-1~4		焦点移动到序号对应的窗口 focus_group
	Ctrl-Shift-1~4	文件标签移动到序号对应的窗口 move_to_group

其它相关快捷键配置：

	{ "keys": ["ctrl+k", "ctrl+up"], "command": "new_pane" },
	{ "keys": ["ctrl+k", "ctrl+down"], "command": "close_pane" },
	{ "keys": ["ctrl+k", "ctrl+shift+up"], "command": "new_pane", "args": {"move": false} },
	{ "keys": ["ctrl+k", "ctrl+left"], "command": "focus_neighboring_group", "args": {"forward": false} },
	{ "keys": ["ctrl+k", "ctrl+right"], "command": "focus_neighboring_group" },
	{ "keys": ["ctrl+k", "ctrl+shift+left"], "command": "move_to_neighboring_group", "args": {"forward": false} },
	{ "keys": ["ctrl+k", "ctrl+shift+right"], "command": "move_to_neighboring_group" },

Sublime Text 3 目前还支持分组窗口的最大化最小化快捷键，但是通过覆盖 set_layout 可以实现分组的最大化最小化的效果，只需要将更多或更少的空间分配给指定的分组即可：

    {
        "keys": ["alt+shift+8"], "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.97, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2]]
        }
    },

    {
        "keys": ["alt+shift+9"], "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.03, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2]]
        }
    },

命令参数中，cols 和 row 分别设置窗口的水平、竖直分割比例，上面水平方向没有分割，坚直方向分割一次，即 1x2 个窗口。cells 设置各个窗口的左上角、右下角坐标，即安排空间，因为水平方向没有分割，坐标最大值为 1，而竖直方向分割一次，最大值为 2，如果分割两次最大值就为 3，如此。

如果涉及打开的文件多，还可以设置三行分割，对于我这种越多文件处理的简真是极好的：

    {
        "keys": ["alt+shift+8"], "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.94, 0.97, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3]]
        }
    },

    {
        "keys": ["alt+shift+9"], "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.03, 0.97, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3]]
        }
    },

    {
        "keys": ["alt+shift+0"], "command": "set_layout",
        "args":
        {
            "cols": [0.0, 1.0],
            "rows": [0.0, 0.03, 0.06, 1.0],
            "cells": [[0, 0, 1, 1], [0, 1, 1, 2], [0, 2, 1, 3]]
        }
    },


Mac 快捷键：

	Command-Z 撤销
	Command-X 剪切　
	Command-C 拷贝（Copy）　
	Command-V 粘贴　
	Command-A 全选（All）　
	Command-S 保存（Save)　
	Command-F 查找（Find）　

	Command-Shift-4 截取所选屏幕区域到一个文件　　
	Command-Shift-3 截取全部屏幕到文件　　
	Command-Shift-Control-3 截取全部屏幕到剪贴板　　
	Command-Shift-4 截取所选屏幕区域到一个文件，或按空格键仅捕捉一个窗口　　
	Command-Shift-Control-4 截取所选屏幕区域到剪贴板，或按空格键仅捕捉一个窗

	Command-右箭头 将光标移至当前行的行尾　　
	Command-B 切换所选文字粗体（Bold）显示　　
	fn-Delete 相当于PC全尺寸键盘上的Delete，也就是向后删除　　
	fn-上箭头 向上滚动一页（Page Up）　　
	fn-下箭头 向下滚动一页（Page Down）　　
	fn-左箭头 滚动至文稿开头（Home）　　
	fn-右箭头 滚动至文稿末尾（End）　　
	Command-右箭头 将光标移至当前行的行尾　　
	Command-左箭头 将光标移至当前行的行首　　
	Command-下箭头 将光标移至文稿末尾　　
	Command-上箭头 将光标移至文稿开头　　
	Option-右箭头 将光标移至下一个单词的末尾　　
	Option-左箭头 将光标移至上一个单词的开头　　
	Control-A 移至行或段落的开头

Command 即 Super 键，`Control+Super+g` 与 Windows 中的 `Alt+F3` 同功能，即 find_all_under 选择所有相同符号。 `Shift+Super+箭头` 选择到行首行未




## ==⚡ PackageControl 插件管理器安装

`ctrl+~` 键调出控制台，然后输入如下代码：

	import urllib.request,os,hashlib; h = '7183a2d3e96f11eeadd761d777e62404e330c659d4bb41d3bdf022e94cab3cd0'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

Debug 模式开启方法：将 PackageControl.sublime-settings 文件中的 debug 参数设为 true。

举个例子，我的文件处于安装目录的这个位置：

	D:\Program Files\Sublime Text 2\Data\Packages\PackageControl\PackageControl.sublime-settings

安装 MAC 版 sublime text 3 安装插件管理器

打开Sublime，按下Control + `(Mac)或者Ctrl + `(Windows)，然后粘贴上下面的代码：

	import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

点击 Preferences，如果安装成功了，Package Settings 、Package Control 会出现在菜单里了。



安装错误情形情形一

	Package Control：There are no packages available for installation

据 StackOverflow 上说是 IPv6 造成，如果我们的 Intent 服务提供者（ISP）不支持IPv6就会引发上述错误，原文如下：

	This error is happened with IPv6 problem. If yourInternet Service Provider (ISP) does not support for IPv6 you got this error.

具体请参考：http://stackoverflow.com/questions/25105139/sublime-text-2-there-are-no-packages-available-for-installation

如果 IPV6 有问题，curl 就会打印类似这样的错误：

	curl: (7) Failed to connect to xxxxx...

找到了问题原因，下面着手解决它。

第一步：取得sublime.wbond.net的IPv4地址。在命令提示符中输入以下命令：

	ping sublime.wbond.net

第二步：打开 C:\Windows\system32\drivers\etc\hosts 文件，增加如下对应关系：

	{IPv4 address} sublime.wbond.net

保存文件，然后再打开Package Control（快捷键Ctrl+Shift+P）开始安装即可。

 

安装错误情形情形二

	Package Control：Unableto download Emmet.Please view the console for more details./Error while loading PyV8 binary:exit code 3…

类似这种插件无法下载的问题，一般是由于网速慢，或者目标域名被墙而无法正常访问导致的。

这种情况下，首先检查本地网络是否可以访问，检测下载速度是不是特别慢，

如果网速太慢，换个时间再安装。还有一个办法是：到github或第三方网站手动下载安装包，然后解压到安装目录下的/Packages目录下。

另外许多插件都依赖于 Python 的，在插件安装开始时会去下载 Python相关资源，其中有两条，表示下载失败，原因一般是网速慢请求超时或被墙了。


情形三：无法调出 Package Control 或未安装 PackageControl

首次安装或重新安装的方式是一样的，首先打开控制台 `Ctrl+~` ，不过 Sublime Text 的版本不同，执行的命令是不一样的。

对于 Sublime Text2 输入以下命令执行：

	import urllib2,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')

对于 Sublime Text 3 需要输入如下的命令：

	import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)

执行完后，Package Control 安装成功。此时便可以调出 PackageControl 命令输入面板 Ctrl+Shift+P，输入 install。




# =🚩 Project & Build Systems
- https://www.sublimetext.com/docs/3/projects.html
- https://sublime.wbond.net/packages/Project%20Manager
- http://sublime-text.readthedocs.org/en/latest/reference/build_systems.html
- https://sublime-text.readthedocs.io/en/latest/file_management/projects.html

在旧版本 Sublime 可以使用 Project Manager 插件。按下 Ctrl-Shift-P 输入命令 Project Manager，简写 PM，列出所有工程管理命令，选择 Add New Project 将当前打开的目录保存到工程中进行管理，已在管理的工程只可以通过 `Ctrl+Alt+P` 切换。

在但在新版本中，不必安装插件了，配置快捷键就可以。本机版本是 3210，快速切换的快键键 Ctrl+Alt+P 已不在默认设置中，因此没效果，这时可以添加到自定义 keymap，菜单 Preference -> Key Bindings，添加如下:

	{
		"keys": ["ctrl+alt+p"],
		"command": "prompt_select_workspace"
	}

如果，没效果，可能是快捷键有冲突。

Sublime 的 Build Systems 是很强大很灵活的，可以为指定的文件上下文，Ctrl-Shift-Alt-P 查看，配置命令，将命令配置保存在 `.build-system` 文件中即可以调用，F7 或 Ctrl-B 执行上一次编译命令，或 Ctrl-Shift-B 调用。

内置的 Build Systems 默认就有 Node.js 的编译命令，安装 Node.js 就可以使用，Tools -> Build Systems -> Node.js，或者在打开 JS 文件的状态下按 Ctrl-B 调用。

创建自定义 Build 命令工具，执行菜单 Tools -> Build System -> New Build System ... 会自动创建一个 `.build-system` 文件，编辑好后保存到 Packages/User 目录下即可。

构建系统的命令配置也可以在 Sublime Text 的工程文件中，配置构建命令如下 demo.sublime-project，注意 working_dir 设置的当前工作目录一定要存在，否则命令不能执行，${project_path} 表示工程文件所在目录：

    {
        "build_systems":
        [
            {
                "name": "MyProject (Windows)",
                "file_regex": "^  (.+)\\((\\d+)\\)(): ((?:fatal )?(?:error|warning) \\w+\\d\\d\\d\\d: .*) \\[.*$",
    			"cmd": ["echo", "shell_cmd cause this command disabled!"],
                "shell_cmd": "cmake --build .",
                "syntax": "Packages/Users/CMake.sublime-syntax",
                "encoding":"gbk",
                "selector":"text.plain",
                "quiet": true,
                "working_dir": "${project_path}/build"
				"env":
				{
					"PATH": "c:/MinGW/bin/;%PATH%"
				},
                "variants":
                [
                    {"name": "Test", "shell_cmd":"echo Testing..."},
					{
						"name": "Unix Makefiles",
						"shell_cmd": "cmake .. -G 'Unix Makefiles'"
					},
					{
						"name": "clean",
						"shell_cmd": "make clean"
					},
					{
						"name": "clear all",
						"shell_cmd": "del * /q"
					},
					{
						"name": "Make",
						"shell_cmd": "make"
					}
                ],
            }
        ],
        "folders":
        [
            {
                "path": "."
            }
        ],
        "settings":
        {
            "cmake":
            {
                "build_folder": "${project_path}/build"
            }
        }
    }

参数解析：

- `name` 命令配置名称，同名配置会覆盖前面的配置。

- `cmd` 和 `shell_cmd` 执行命令两种设置方式，但对于 `variants` 命令变体设置中，在工程配置中只能使用 shell_cmd 方式：

		"cmd": ["cmake", ".", "-g", "Sublime Text 2 - Ninja"],
		"shell_cmd": "cmake .. -G \"Sublime Text 2 - Ninja\"",

	shell_cmd 方式指定一个字符串执行，cmd 方式指定一个列表，其第一项为命令或可执行程序，其它后续的为参数，会自动添加引号到命令行。

	如构建系统中设置 `variants` 命令变体注意，如果在 **shell_cmd** 中使用 **cmd /c** 这样的方式执行命令时，不能访问到 **env** 配置的环境变量： 

        { "name": "-> Test cmd", "cmd":["cmd", "/c", "set plantuml_jar"]},
        { "name": "-> Test shell_cmd", "shell_cmd": "set plantuml_jar"},


- `file_regex` 用来处理输出信息指定的定位内容，如php脚本运行输出提示信息，其中文件名/行号可以提取，点击这条信息就可以定位到代码

		PHP Notice:  Use of undefined constant b - assumed 'b' in E:\coding\coding.php on line 49

- `selector` 是 sublime 用来自动关联当前编辑文件与 build 工具的关键字，可以通过菜单获取：

		Tools => Developer => Show Scope Name

	获取当前光标位置所在的作用域，拷贝下来后用来配置 build 工具。

- `quiet` 是静默模式配置，如果设置 true 打开靓车模式，在执行命令出错时就不会输出环境变量信息。
- `syntax` 文件语法格式配置。
- `working_dir` 命令行工作目录设置，注意，如何不存在此目录，命令不会被执行，可以直接设置为工程目录 *${project_path}*。
- `encoding` 命令行输出内容的编码，一般中文操作系统指定 "gbk" 或者 "utf8"。
- `variants` 命令变体，可以设置多个不同参数的命令执行方式，只能使用 shell_cmd 不能使用 cmd。
- `env` 配置环境变量，PATH 是常用配置，如果你没有为构建系统指定一个可执行文件的绝对路径，就不能直接调用命令。

在某些操作系统中，终端和图形化应用的 PATH 值会有所不同。所以即便你的构建系统在命令行下 可以正常工作，在 Sublime Text 也不见得能够正常，这与 Shell 中的用户设置有关。

另外，你也可以在 .sublime-build 文件中设定 path 来替代 PATH ，并在 path 指定的路径中查找 cmd 可执行文件。新设定的值，仅在构建系统运行期间有效，过后将会恢复为原始的 PATH。


编译命令还可以扩展 sublime.WindowCommand 接口实现。

使用 ``file_regex``获取错误输出，用 Perl 的正则表达式来捕获构建系统的错误输出，主要包括四部分内容，分别是 file name ， line number ， column number 和 error message。Sublime Text 在匹配模式中使用分组的方式捕获信息。 file name 和 line number 域是必须的。

当错误信息被捕获时，你可以使用 F4 和 Shift+F4 在你的项目文件中跳转。被捕获的 错误信息 会显示在状态栏。


平台相关选项，windows, osx 以及 linux 元素可以帮助你在构建系统中设定平台相关的选项，举例如下:

	{
	    "cmd": ["ant"],
	    "file_regex": "^ *\\[javac\\] (.+):([0-9]+):() (.*)$",
	    "working_dir": "${project_path:${folder}}",
	    "selector": "source.java",

	    "windows":
	    {
	        "cmd": ["ant.bat"]
	    }
	}

注意，如果当前打开的只是一般文件夹，那么 project_path 就包含空字符，可以使用 folder 变量作为候选值，它指向侧栏目录列表中的第一个目录。否则，工作目录就会对应当前打开的文件所在目录。

在这个例子中，ant 在除了 Windows 之外的平台中都是执行 ant ，而在 Windows 中则执行 ant.bat。而 `variants` 是构建系统备选项，可以在多种系统下运行。


目录还可以进行细致的配置：

	{
	    "folders":
	    [
	        {
	            "path": "src",
	            "folder_exclude_patterns": ["backup"],
	            "follow_symlinks": true
	        },
	        {
	            "path": "docs",
	            "name": "Documentation",
	            "file_exclude_patterns": ["*.css"]
	        }
	    ],
	    "settings":
	    {
	        "tab_size": 8
	    },
	    "build_systems":
	    [
	        {
	            "name": "List",
	            "shell_cmd": "ls -l"
	        }
	    ]
	}

FOLDERS 配置，path 是必须的，路径可以是绝对或相对的，此外还可以配置：

- `name` - 在 sidebar 显示的名字。
- `file_include_patterns` - 文件名匹配列表，匹配的文件才显示。
- `file_exclude_patterns` - 文件名匹配列表，匹配的文件不显示。
- `folder_include_patterns` - 目录匹配列表，匹配的文件才显示。
- `folder_exclude_patterns` - 目录匹配列表，匹配的文件不显示。
- `binary_file_patterns` - 二进制文件匹配列表，匹配的文件不执行查找、符号定位，节省资源提高效率。
- `index_include_patterns` - 索引目录匹配列表，对匹配的目录进行索引。
- `index_exclude_patterns` - 索引目录匹配列表，不对匹配的目录进行索引。
- `follow_symlinks` - If symlinks should be followed when building the folder tree.


## ==⚡ variables 内置变量
http://www.sublimetext.com/docs/3/build_systems.html#variables

	$packages           The path to the Packages/ folder
	$platform           A string containing the platform Sublime Text is running on: windows, osx or linux.
	$file               The full path, including folder, to the file in the active view.
	$file_path          The path to the folder that contains the file in the active view.
	$file_name          The file name (sans folder path) of the file in the active view.
	$file_base_name     The file name, exluding the extension, of the file in the active view.
	$file_extension     The extension of the file name of the file in the active view.
	$folder             The full path to the first folder open in the side bar.
	$project            The full path to the current project file.
	$project_path       The path to the folder containing the current project file.
	$project_name       The file name (sans folder path) of the current project file.
	$project_base_name  The file name, excluding the extension, of the current project file.
	$project_extension  The extension of the current project file.

可以在代码片段上中使用以上变量。例如:

	${project_name:Default}

如果当前项目存在则使用该项目名称，否则则使用 Default 替代

	${file/\.php/\.txt/}

该例会获取当前文件的完整路径，并用 .txt 替换路径中的 .php。



## ==⚡ 可配置项

exec Target Options

	cmd: ["my_command", "-d", "$file"]

A list of strings specifying the executable to run, plus any arguments to pass to it. Shell constructs such as piping and redirection are not supported – see shell_cmd. May use variables.

	shell_cmd: "my_command \"$file\" | other_command"

A string specifying a shell command to execute. Unlike the cmd option, this does allow piping and redirection. Will use bash on Mac and Linux machine, and cmd.exe on Windows. May use variables.

	working_dir: "$file_path"

A string specifying the directory to execute the cmd or shell_cmd within. May use variables.

	file_regex: "^\s*(\\S[^:]*)\\((\\d+):(\\d+)\\): ([^\\n]+)"

A string containing a regular expression to run on the build output to match file information. The matched file information is used to enable result navigation. The regex should capture 2, 3 or 4 groups.

The capture groups should be: filename, line number, column number and message

	line_regex: "^\s*line (\\d+) col (\\d+): ([^\\n]+)"

A string containing a regular expression to run on the build output to match line information. The matched file information is used to enable result navigation. The regex should capture 1, 2 or 3 groups.

The groups should capture: line number, column number, error message.

This regular expression is only necessary when some results contain strictly a line number, line and column numbers, or line and column numbers with a message. When such a match is made, the file_regex option will be used to search backwards to find the appropriate file name. 

	encoding: "iso-8859-1"

A string specifying the encoding of the build system output. Uses Python codec names. Defaults to "utf-8".

	env: {"PYTHONIOENCODING": "utf-8"}
	
An object containing environment variable values to use when running the cmd or shell_cmd.

	quiet: true

A boolean that reduces the amount of output about the build system invocation.

	word_wrap: true

A boolean that turns on word wrapping in the build system output panel.

	syntax: "Packages/JavaScript/JSON.sublime-syntax"

A string specifying the syntax file to use to highlight the build system output panel.


## ==⚡ Custom Options

When implementing a command to act as a build system target, the command's keyword arguments are available via options in the .sublime-build file. However, certain parameter names will not work since they conflict with built-in build system functionality.

The following names will not be passed as arguments to commands. This also applies to other situations, such as options specified in the cancel, linux, osx and windows options.

	cancel
	file_patterns
	keyfile
	keyfiles
	linux
	osx
	save_untitled_files
	selector
	target
	variants
	windows


## ==⚡ SQLExec

Git Clone代码到本地:

	git clone http://www.github.com/jum4/sublime-sqlexec

Subversion代码到本地:

	$ svn co --depth empty http://www.github.com/jum4/sublime-sqlexec
	Checked out revision 1.
	$ cd repo
	$ svn up trunk

在 Sublime 文本中运行SQL命令的插件。

	Features
	ctrl+alt+e         Switching between connections
	ctrl+e ctrl+d      Desc table
	ctrl+e ctrl+s      Quick show table records
	ctrl+e ctrl+q      Execute queries
	ctrl+e ctrl+e      Execute selected query and show the result un the output panel.
	ctrl+e ctrl+h      Show an quick pane containing the history of queries

	Installation
	With Package Control
	Look for the package named SQLExec.

	With Git
	Download the Zip file, extract it to your Sublime Text packages directory, and rename it to SQLExec.

	Requirements
	Some directories have to be defined in the PATH environment variable, according to the SGBD that you want to use: "mysql" executable for MySQL, "pgsql" executable for PostgreSQL, "vsql" executable for Vertica, or "sqlplus" executable for Oracle ( Not tested ).

	You can also specify full path for these command in settings :

	( Preferences > Package Settings > SQLExec > Settings - User )

	    "sql_exec.commands": {
	        "mysql" : "/usr/bin/mysql"
	    },

	Configuration
	Sample configuration file
	The configuration file is accessible by the menu
	( Preferences > Package Settings > SQLExec > Settings - User )

		{
		     "connections": {
		         "Connection 1": {
		             "type"    : "mysql",
		             "host"    : "127.0.0.1",
		             "port"    : 3306,
		             "username": "user",
		             "password": "password",
		             "database": "dbname"
		         },
		         "Connection 2": {
		             "type"    : "pgsql",
		             "host"    : "127.0.0.1",
		             "port"    :  5432,
		             "username": "anotheruser",
		             "database": "dbname"
		         },
		         "Connection 2": {
		             "type"    : "oracle",
		             "host"    : "127.0.0.1",
		             "port"    :  1522,
		             "username": "anotheruser",
		             "password": "password",
		             "database": "dbname",
		             "service" : "servicename"
		         }
		     }
		 }

	Options
	show_result_on_window (default:false)
	By default, query results are displayed in the quick panel. By setting this param to true, you can specify that all results will be displayed in a separate window instead.




## ==⚡ Node.js ES6

`-harmony` 选项打开 node 的 ES6 特性支持，要运行 TypeScript 需要先安装解释器，一并安装 ts-node 这个直接运行 TypeScript 程序的工具。

	{
	    "cmd": ["node", "--harmony", "$file"],
	    "file_regex": "^[ ]* at .* \\((.*?):([0-9]*):([0-9]*)\\)",
	    "selector": "source.js, source.ts",
	    "shell": true,
	    "encoding": "utf-8",
	    "variants": [{
	        "name": "TypeScript[ts-node]",
	        "shell_cmd": "ts-node $file"
	    }, {
	        "name": "TypeScript ES3)",
	        "shell_cmd": "tsc $file"
	    }, {
	        "name": "TypeScript ES5)",
	        "shell_cmd": "tsc -t ES5 $file"
	    }, {
	        "name": "TypeScript ES6)",
	        "shell_cmd": "tsc -t ES6 $file"
	    }, {
	        "name": "ES6(ECMAScript 2015)",
	        "shell_cmd": "node --harmony $file"
	    }, {
	        "name": "ES5(ECMAScript 2009)",
	        "shell_cmd": "node $file"
	    }],
	    // "windows": {
	    //     "shell_cmd": "node $file", // echo try to Kill node.exe & taskkill /F /IM node.exe & 
	    // },
	    "linux": {
	        "shell_cmd": "killall node; /usr/bin/env node $file"
	    },
	    "osx": {
	        "shell_cmd": "killall node; /usr/bin/env node $file"
	    }
	}

## ==⚡ julia

	{
		"shell_cmd": "C:/Julia-1.0.0/bin/julia.exe \"$file\"",
		// "cmd": ["C:/Julia-1.0.0/bin/julia.exe", "${file}"],
		"working_dir": "${file_path}",
		"path":"C:/Julia-1.0.0/bin/",
		"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
		"selector": "source.julia"
	}

## ==⚡ php

	{
		"cmd": ["php.exe", "-f", "${file}"],
		"working_dir": "${file_path}",
		"path":"c:/php7.1.16",
		"file_regex": "^.* in (.*?) on line ([0-9]*)",
		"selector": "embedding.php, source.php"
	}

## ==⚡ JAVA

	{
		// "shell_cmd": "javac.exe \"$file\" && java.exe \"$file_base_name\"",
	    // "shell_cmd": "ECHO Compiling $file_base_name.java & javac -encoding UTF-8 \"$file\" & java \"$file_base_name\"",
	    "shell_cmd": "ECHO Compiling $file_base_name.java && javac -encoding UTF-8 \"$file\" && java \"$file_base_name\"",
	    "file_regex": "^(...*?):([0-9]*):?([0-9]*)",
	    "working_dir": "${file_path}",
	    "selector": "source.java",
	    "encoding":"gbk",
	    "variants":[
	         {   
	            "name":"编译",
	            "shell_cmd": "ECHO Compiling $file_base_name.java & javac -d . -encoding UTF-8 \"$file\"",
	        },
	        {   
	            "name":"运行当前类",
	            "shell_cmd":" java \"$file_base_name\" "       
	        },
	        {   
	            "name":"cmd中运行",
	            "shell_cmd":" start cmd /c \"javac -encoding UTF-8 \"$file\" & java \"$file_base_name\" & pause \""  
	        }
	   ]
	}


## ==⚡ MinGW GCC

	{
		// "cmd": ["E:\CodeBlocks\MinGW\bin\gcc.exe", "$file"],
		"env": {
			"QTDIR":"C:/Qt/5.9/mingw53_32",
			"PATH":"C:/Qt/5.9/mingw53_32/bin;C:/Qt/Tools/mingw530_32/bin;%PATH%",
			"inc":"-IC:/Qt/5.9/mingw53_32/include -IC:/Qt/5.9/mingw53_32/include/QtCore -IC:/Qt/5.9/mingw53_32/include/QtGui -IC:/Qt/5.9/mingw53_32/include/QtQuick -IC:/Qt/5.9/mingw53_32/include/QtQml -IC:/Qt/5.9/mingw53_32/include/QtWidgets",
			"libpath":"-LC:/Qt/5.9/mingw53_32/lib",
			"libs":"-lQt5Core -lQt5Gui -lQt5Widgets -lQt53DAnimation -lQt53DCore -lQt53DExtras -lQt53DInput -lQt53DLogic -lQt53DQuick -lQt53DQuickAnimation -lQt53DQuickExtras -lQt53DQuickInput -lQt53DQuickRender -lQt53DQuickScene2D -lQt53DRender -lQt5AccessibilitySupport -lQt5AxBase -lQt5AxContainer -lQt5AxServer -lQt5Bluetooth -lQt5Bootstrap -lQt5Charts -lQt5Concurrent -lQt5DataVisualization -lQt5DBus -lQt5Designer -lQt5DesignerComponents -lQt5DeviceDiscoverySupport -lQt5DeviceDiscoverySupport -lQt5EglSupport -lQt5EventDispatcherSupport -lQt5EventDispatcherSupport -lQt5FbSupport -lQt5FontDatabaseSupport -lQt5Help -lQt5Location -lQt5Multimedia -lQt5MultimediaQuick_p -lQt5MultimediaWidgets -lQt5Network -lQt5NetworkAuth -lQt5Nfc -lQt5OpenGL -lQt5OpenGLExtensions -lQt5PacketProtocol -lQt5Positioning -lQt5PrintSupport -lQt5Purchasing -lQt5Qml -lQt5QmlDebug -lQt5QmlDevTools -lQt5Quick -lQt5QuickControls2 -lQt5QuickParticles -lQt5QuickTemplates2 -lQt5QuickTest -lQt5QuickWidgets -lQt5RemoteObjects -lQt5Script -lQt5ScriptTools -lQt5Scxml -lQt5Sensors -lQt5SerialBus -lQt5SerialPort -lQt5Sql -lQt5Svg -lQt5Test -lQt5TextToSpeech -lQt5ThemeSupport -lQt5UiTools -lQt5WebChannel -lQt5WebSockets -lQt5WinExtras -lQt5Xml -lQt5XmlPatterns -lqtfreetype -lqtlibpng -lqtmain ",
			"cc":"g++.exe -Wall -Wno-unused-variable"
		},
		"env": {
			"PATH":"C:/CodeBlocks/MinGW/bin;C:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/x64/mingw/bin;%PATH%",
			"inc":"-IC:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/include -IC:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/include/opencv2",
			"libpath":"-LC:/download/OpenCV/MinGW-OpenCV-4.1.1-x64/x64/mingw/lib",
			"libs":"-lopencv_calib3d411 -lopencv_core411 -lopencv_dnn411 -lopencv_features2d411 -lopencv_flann411 -lopencv_gapi411 -lopencv_highgui411 -lopencv_imgcodecs411 -lopencv_imgproc411 -lopencv_ml411 -lopencv_objdetect411 -lopencv_photo411 -lopencv_stitching411 -lopencv_video411 -lopencv_videoio411",
			"cc":"g++.exe -Wall -Wno-unused-variable"
		},
		"shell_cmd": "ECHO MinGW GCC 8.1.0 Compiling $file_name ... && %cc% -g -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && echo done.",
		"file_regex": "^(...*?):([0-9]*):?([0-9]*)",
		"working_dir": "${file_path}",
		"selector": "source.c++",
		"encoding":"utf8",
		"quiet": true,
		"variants":[
			{
				"name":"(-std=c++17)",
				"shell_cmd":"ECHO Compiling (-std=c++17) $file_name ... && %cc% -g -std=c++17 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++14)",
				"shell_cmd":"ECHO Compiling (-std=c++14) $file_name ... && %cc% -g -std=c++14 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++11)",
				"shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -g -std=c++11 -c \"$file\" -o $file_base_name.o && g++.exe -o ${file_base_name}.exe ${file_base_name}.o && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++11) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -g -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++11) Release with ENV",
				"shell_cmd":"ECHO Compiling (-std=c++11) $file_name ... && %cc% -DNDEBUG -std=c++11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++0x) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c++0x) $file_name ... && %cc% -g -std=c++0x %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c++98) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c++98 $file_name ... && %cc% -g -std=c++98 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-ansi) with ENV",
				"shell_cmd":"ECHO Compiling (-ansi) $file_name ... && %cc% -g -ansi %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c11) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c11) $file_name ... && %cc% -g -std=c11 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c99) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c99) $file_name ... && g++.exe -Wall -g -std=c99 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"(-std=c90) with ENV",
				"shell_cmd":"ECHO Compiling (-std=c90) $file_name ... && g++.exe -Wall -g -std=c90 %inc% -c \"$file\" -o $file_base_name.o && g++.exe %libpath% -o ${file_base_name}.exe ${file_base_name}.o %libs% && ECHO Start run $file_name ... && ${file_base_name} "
			},
			{
				"name":"控制台中运行",
				"shell_cmd":"start cmd /c \"${file_base_name} & pause \""  
			}
		]
	}



## ==⚡ C++

	{
		"working_dir": "$file_path",
		"cmd": "g++ -Wall -std=c++14 -fexec-charset=GBK \"$file_name\" -o \"$file_base_name\"",
		"file_regex": "^(..[^:]*):([0-9]+):?([0-9]+)?:? (.*)$",
		"selector": "source.c, source.cpp",
	 
		"variants": 
		[
			{	
				"name": "Run",
	        	"shell_cmd": "g++ -Wall -std=c++11 -fexec-charset=GBK \"$file\" -o \"$file_base_name\" && start cmd /c \"\"${file_path}/${file_base_name}\" & pause\""
			}
		]
	}


## ==⚡ C# C-Sharp

首先安装 .Net Core 或 .Net Framework，再配置你的 Sublime 编译工具，将 Sublime 项目保存到 DotNet 项目中，可以使用 $project_path 引用。因为 .Net Core 支持中文输出，在中文系统中指定 "encoding": "cp936" 防止控制台乱码：

	{
	    "env": {
	        "PATH":"C:\\Program Files (x86)\\MSBuild\\14.0\\Bin;C:\\Windows\\Microsoft.NET\\Framework\\v4.0.30319\\;%PATH%",
	        "libs":"/lib:./bin/ /r:a.dll,b.dll,c.dll",
	    },
	    "working_dir": "$file_path",
	    "cmd": "csc.exe $file",
	    "file_regex": "^(.[^\\(]*)\\(([0-9]+),([0-9]+)\\):(.*)$",
	    "selector": "source.cs, text.xml, source.csproj, source.fsharp",
	    "encoding": "cp936",
	    "quiet": true,
	    "variants": [{
	        "name": "Build Exe & Run ...",
	        "shell_cmd": "csc.exe $file_name && $file_base_name"
	    },{
	        "name": "Build DLL",
	        "shell_cmd": "csc.exe /target:library $file"
	    },{
	        "name": "Run",
	        "shell_cmd": "$file_base_name"
	    },{
	        "name": ".Net New",
	        "shell_cmd": "dotnet new console -o demo"
	    },{
	        "name": ".Net Run",
	        "shell_cmd": "dotnet run"
	    },{
	        "name": ".Net Watch",
	        "shell_cmd": "dotnet watch run"
	    },{
	        "name": ".Net Run Project",
	        "shell_cmd": "echo $project_path && dotnet run --project $project_path"
	    },{
	        "name": ".Net Watch Project",
	        "shell_cmd": "echo $project_path && dotnet watch run --project $project_path"
	    },{
	        "name": "Run with Test Arguments",
	        "shell_cmd": "$file_base_name http://baidu.com/ http://golang.org/ http://goproxy.io"
	    }]
	}   


## ==⚡ Nim Language

	{
		"cmd": ["c:\\C:\nim-1.0.0\\bin\\nim.exe", "run", "${file}"],
	    "env": {
	        "PATH":"C:/nim-1.0.0/bin;c:\\CodeBlocks\\MinGW\\bin\\;%PATH%",
	    },
		"working_dir": "${file_path}",
		"PATH":"C:/nim-1.0.0/bin;%PATH%",
		"file_regex": "^(.+\\.nim)\\(([0-9]*), ([0-9]+)\\) (.+)",
		"selector": "source.nim",
	    "variants": [{
	        "name": "nim build",
	        "shell_cmd": "nim.exe c $file"
	    },{
	        "name": "run",
	        "shell_cmd": "$file_base_name"
	    },{
	        "name": "run with Test Arguments",
	        "shell_cmd": "$file_base_name http://baidu.com/ http://golang.org/ http://goproxy.io"
	    }]
	}   


## ==⚡ Golang

可以使用 margo/GoSublime 插件
https://github.com/DisposaBoy/GoSublime

	{
		"cmd": ["c:\\go\\bin\\go.exe", "run", "${file}"],
	    "env": {
	        "PATH":"c:/go/bin;c:\\CodeBlocks\\MinGW\\bin\\;%PATH%",
	    },
		"working_dir": "${file_path}",
		"PATH":"c:/go/bin;%PATH%",
		"file_regex": "^(.+\\.go):([0-9]*):([0-9]+):(.+)",
		"selector": "source.go",
	    "variants": [{
	        "name": "Go build",
	        "shell_cmd": "go build -ldflags=\"-s -w\" $file"
	    },{
	        "name": "Go build Window GUI App",
	        "shell_cmd": "go build -ldflags=\"-H windowsgui -s -w\" $file"
	    },{
	        "name": "Go Release Window GUI App",
	        "shell_cmd": "go build -ldflags=\"-H windowsgui -s -w\" $file && upx $file_base_name.exe"
	    },{
	        "name": "Go Release App",
	        "shell_cmd": "go build -ldflags=\"-s -w\" $file && upx $file_base_name.exe"
	    },{
	        "name": "Go run",
	        "shell_cmd": "go build -ldflags=\"-s -w\" $file && $file_base_name"
	    },{
	        "name": "Go install",
	        "shell_cmd": "go install $file"
	    },{
	        "name": "Go run with Test Arguments",
	        "shell_cmd": "go run $file http://baidu.com/ http://golang.org/ http://goproxy.io"
	    }]
	}   



## ==⚡ python

	{
		"encoding": "utf-8",
		"working_dir": "$file_path",
		"shell_cmd": "python -u \"$file\"",
		"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
		"selector": "source.python",
	 
		"variants":
		[
			{
				"name": "Run",
				"shell_cmd": "start cmd /c \"python -u \"$file\" & pause\"",
			}
		]
	}

## ==⚡ windows 脚本宿主

通过 cscript.exe 和 wscript.exe 运行 VBS 或 JScript 脚本，c/w 分别表示运行环境 Console/Window

	{
		"cmd":["cscript.exe", "$file"],
		"file_regex": "^[ ]*File \"(...*?)\", line ([0-9]*)",
		"selector": "source.js, source.wsj"
	}


## ==⚡ sublime 文件类型语法关联

	可以通过菜单: 查看->语法 中选择 xml, 或者状态栏右下角选择xml文件类型，这样sublime text就会根据xml来显示这个文件.

	让sublime 记住文件后缀与语法关联，可以设置：

	1. 打开目标文件
	2. 点击右下角的Plain Text,这时候会出现所有的文件格式.
	3. 选择open all with current extension as…  ->XML

	其实内部就是在Data\Packages\User\目录下生成一个名字叫XML.sublime-settings的文件保存了配置信息:

	{
		"extensions":
		[
			"xml",
			"xsd",
			"xslt",
			"svg",
			"lng"
		]
	}




# =🚩 SublimeREPL 插件

SublimeREPL 插件可以调用系统控制台，可以有输入交互，安装插件后，可以结合 Sublime 的窗口分栏功能使用：

- Alt-Shift-8 将 Sublime 窗口分拆上下两栏；
- 选中下栏，执行菜单 Tools -> SublimeREPL -> shell 即可以打开系统控制台。

Sublime 自带的 Console 只是 Python 命令行交互界面，也可以使用 os 模块执行 shell call：

	|import os
	val = os.system('ls -al')
	val = os.popen('ls -al')
	for i in val.readlines():
		print(i)

可惜不是动态交互，它需要等程序完全执行完成才获取输出数据。

还可以执行外部脚本，filename 最好是全路径，os.system() 可以传参，os.popen() 可获取输出：

	import os
	os.system("python filename")
	os.popen(filename)



# =🚩 Emmet Zen-Coding 插件
- PyV8 Binaries - https://github.com/emmetio/pyv8-binaries#readme
- Python 安装 V8 引擎 – https://xwsoul.com/posts/490
- https://packagecontrol.io/packages/Emmet
- Emmet Chatsheet https://docs.emmet.io/cheat-sheet/

关于 Emmet 安装快捷键失效问题的几个要点：

Sublime Text 3.0 在 Windows 安装 PyV8 的版本文件夹是 pyv8-win64-p3 即 Python 3.0 的接口打包的 V8 JavaScript 引擎，和 Emmet.sublime-package 默认安装路径是 Installed Packages，但是目前问题是 Emmet 和 PyV8 都安装好了，也是相同目录，能使用就是快捷键不能设置。问题出在加载过程上，如果将 Emmet 和 PyV8 都手动安装到 Packages 目录下，可以设置快捷键，但是加 Emmet 时出现 `_PyV8` PYD 加载失败，解决办法是根据 Python import 原理，将 PyV8 文件拷贝一份到 import 导入机制会搜索的目录中。

在 Sublime 界面打开调试面板，输入以下 Python 脚本，查看其中一个目录，并将 PyV8 拷贝过去：

    import sys; print('\n'.join(sys.path))



## ==⚡ Expanding abbreviation
- https://github.com/emmetio/sublime-text-plugin#expanding-abbreviation

If you used previous version of Emmet plugin, you already know how to expand abbreviations: type something like `ul>li.items*4` and hit `Tab` or `Ctrl-E`. While this approach generally works, it has lots of downsides:

Tab key hijacking: Emmet binds Tab key for expanding abbreviations so user is unable to insert native Sublime Text snippet or put tab right after word since almost every word can be abbreviation for Emmet.

No preview of expanded abbreviations: writing complex abbreviations becomes trial and error with expand/undo/expand actions.
Unpredictable result: it’s not possible to determine what happens when you hit `Tab` key, it will either expand abbreviation, insert native snippet or just output tab character.

In this plugin, abbreviation expander acts as autocomplete provider and automatically captures abbreviation as you type.

When you start typing in Emmet-supported context (HTML, CSS, Slim etc.) Emmet detects if you’re typing something similar to abbreviation and adds underline which indicates captured abbreviation. When captured abbreviation becomes complex (e.g. contains attributes or multiple elements), you’ll see a preview of expanded abbreviation every time caret is inside it. Hit Tabkey inside captured abbreviation to expand it, hit Esc to remove mark from abbreviation so you can use `Tab` for expanding native ST snippets or insert tab character.

If you already have an abbreviation in document and you want to expand it, move caret to the end of abbreviation and invoke autocomplete (`Ctrl+Space` by default) to capture abbreviation:


## ==⚡ Tab key doesn’t work anymore
- https://github.com/emmetio/sublime-text-plugin#tab-key-doesnt-work-anymore

改版后不再支持 Tab 快捷键，因为副作用。非要用，可以按以下设置：

Go to Preferences > Package Settings > Emmet > Settings menu item and set auto_mark option to false.

Add the following into user key bindings (Preferences > Key Bindings menu item) file:

    {
        "keys": ["tab"],
        "command": "emmet_expand_abbreviation",
        "args": { "tab": true },
        "context": [
            { "key": "emmet_capture_abbreviation" },
            { "key": "selection_empty" },
            { "key": "has_next_field", "operand": false },
            { "key": "auto_complete_visible", "operand": false },
            { "key": "selector", "operand": "source.css, source.sass, source.less, source.scss, source.stylus, source.postcss, source.jade, text.jade, source.pug, text.pug, text.slim, text.xml, text.html - source, text.haml, text.scala.html, source string" }
        ]
    }

Note that old behavior has lots of downsides: you won‘t be able to expand native ST snippets and use Tab key to insert indentation after word.




谷歌开源的 JavaScript V8 引擎使用 C++ 开发，并在谷歌浏览器中使用，它可以独立运行，也可以嵌入到任何 C++ 应用程序中。PyV8 是 Python 的对 v8 引擎一个封装。 Emmet 依赖 PyV8 模块，PyV8 是 V8 引擎的 Python 语言封装，这是 Python 和 JavaScript 对象之间的桥，支持在 Python 脚本中调用 V8 引擎。

安装 Emmet 时会先下载当前系统匹配的 Python 版本，在 debug 窗口可以看到这些信息。

	Emmet: Loading PyV8 binary from https://raw.github.com/emmetio/pyv8-binaries/master/pyv8-win64.zip
	Emmet.pyv8loader: Unable to download package from https://raw.github.com/emmetio/pyv8-binaries/master/pyv8-win64.zip Wrong URL error

如果下载 PyV8 失败会弹出一个提示框，这时候，按照给出的 zip 包下载地址手动下载 PyV8 安装包。可以根据系统种类选择对应安装包，下载成功后打开菜单 Preferences – Browser Packages 打开插件目录，然后根据 Sublime 版本进行手动安装 PyV8：

- Sublime Text 2 安装，解包到 Sublime Text Packages 下 PyV8/%filename% 目录，%filename% 就是下载到的文件名，如 pyv8-win64-p3 如果下载 pyv8-win64-p3.zip。
- Sublime Text 3 安装，解包到 Sublime Text Installed Packages 下的 PyV8/%filename% 目录。
- 装完重启 Sublie Text

大多数情况，PyV8安装好了以后，再安装需要的其他插件便可顺利进行了。

安装 PyV8 不能使用 pip 直接安装，需要配置编译环境，否则安装脚本执行不正确。也可以将 PyV8 Binary 文件 copy 到当前系统内的 Python 下的 site_packages 文件夹下进行安装。如果有虚拟环境的话，在安装后到非虚拟环境的 Python 的 site-packages 目录下搜索 pyv8，把那几个文件都复制到虚拟环境下即可。

	pip install pyv8
	Looking in indexes: https://pypi.tuna.tsinghua.edu.cn/simple
	Collecting pyv8
	  Downloading https://pypi.tuna.tsinghua.edu.cn/packages/c6/fb/5c0512a373e3d0aad0b683f439e7bdd67f95a69e6473b76dc2cfdca2c43f/PyV8-0.5.zip
	    ERROR: Command errored out with exit status 1:
	     command: 'c:\anaconda3\python.exe' -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'C:\\Users\\USER\\AppData\\Local\\Temp\\pip-install-g99_24j2\\pyv8\\setup.py'"'"'; __file__='"'"'C:\\Users\\USER\\AppData\\Local\\Temp\\pip-install-g99_24j2\\pyv8\\setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' egg_info --egg-base 'C:\Users\USER\AppData\Local\Temp\pip-install-g99_24j2\pyv8\pip-egg-info'
	         cwd: C:\Users\USER\AppData\Local\Temp\pip-install-g99_24j2\pyv8\
	    Complete output (7 lines):
	    Traceback (most recent call last):
	      File "<string>", line 1, in <module>
	      File "C:\Users\USER\AppData\Local\Temp\pip-install-g99_24j2\pyv8\setup.py", line 17, in <module>
	        include_dirs += os.environ["INCLUDE"].split(';')
	      File "c:\anaconda3\lib\os.py", line 678, in __getitem__
	        raise KeyError(key) from None
	    KeyError: 'INCLUDE'
	    ----------------------------------------
	ERROR: Command errored out with exit status 1: python setup.py egg_info Check the logs for full command output.

只是配置环境变量 `set INCLUDE=;` 和 `set LIB=;` 还不：

	ERROR: Failed building wheel for pyv8


Emmet 提供的功能很强大，Zen-Coding 语法参考后面：

	alt+down         decrement_number_by_01
	alt+up           increment_number_by_01
	ctrl+'           encode_decode_data_url
	ctrl+,           balance_outward
	ctrl+alt+enter   expand_as_you_type
	ctrl+alt+j       matching_pair
	ctrl+alt+left    prev_edit_point
	ctrl+alt+right   next_edit_point
	ctrl+down        decrement_number_by_1
	ctrl+e           expand_abbreviation
	ctrl+shift+/     toggle_comment
	ctrl+shift+0     balance_inward
	ctrl+shift+u     update_as_you_type 
	ctrl+u           update_image_size
	ctrl+up          increment_number_by_1
	shift+alt+down   decrement_number_by_10
	shift+alt+up     increment_number_by_10
	shift+ctrl+'     rename_tag 
	shift+ctrl+,     select_previous_item
	shift+ctrl+.     select_next_item
	shift+ctrl+;     remove_tag
	shift+ctrl+`     split_join_tag
	shift+ctrl+g     wrap_as_you_type
	shift+ctrl+r     reflect_css_value
	shift+ctrl+y     evaluate_math_expression
	tab              expand_abbreviation_by_tab


## ==⚡ Zen-Coding(Emmet) 代码生成工具

editplus, sublime 都可以使用，在 sublime 上需要先安装 Emmet 插件，然后输入以下一行 zen coding 语法内容再按下 Ctrl+E 就会得到一段自动生成的代码。用>表示子节点，+表示同级节点，^表示上一级节点，方括号表示属性设置，花括号表示节点内容设置。 sublime 上还支持时间实时输入，快捷键是 Ctrl+Alt+Enter，然后在输入框中输入，编辑器实时更新所输入的内容， [Emmet 语法参考](http://emmet.io)。

	view.header+view.navigator^view.container>view.item[title=demo$]{$}*10^view.footer

	<view class="header"></view>
	<view class="navigator"></view>
	<view class="container">
		<view class="item" title="demo1">1</view>
		<view class="item" title="demo2">2</view>
		<view class="item" title="demo3">3</view>
		<view class="item" title="demo4">4</view>
		<view class="item" title="demo5">5</view>
		<view class="item" title="demo6">6</view>
		<view class="item" title="demo7">7</view>
		<view class="item" title="demo8">8</view>
		<view class="item" title="demo9">9</view>
		<view class="item" title="demo10">10</view>
	</view>
	<view class="footer"></view>


## ==⚡ Zen-Coding 语法如下：

	E#name:   div#name      -> <div id="name"></div>
	E.name:   div.name      -> <div class="name"></div>
	E>E:      head>link     -> <head><link/></head>
	E>E^E:    div>p^h1      -> <div> <p></p> </div> <h1></h1>
	E+E:      p+p           -> <p></p><p></p>
	{text}:   p>{Click }+a{here}+{ to continue} -> <p>Click <a href="">here</a> to continue</p>
	E[attr]:  img[title alt=demo]               -> <img src="" alt="demo" title="">
	(group):  div(i.$$*2)   -> <div> <i class="01"></i><i class="02"></i> </div>
	E|filter: p.title|e     -> &lt;p class="title"&gt;&lt;/p&gt;
	E*N:      p*3           -> <p></p><p></p><p></p>
	E*N$:     p.name-$*3    -> <p class="name-1"></p><p class="name-2"></p><p class="name-3"></p>
	@-:       div.$$@-*2    -> <div class="02"></div> <div class="01"></div>
	@N:       li.i$@3*2     -> <li class="i3"></li> <li class="i4"></li>
	@-N:      li.i$@-3*2    -> <li class="i4"></li> <li class="i3"></li>
	E+:       table+        -> <table> <tr> <td></td> </tr> </table>




# =🚩 Node.js plugin
https://packagecontrol.io/packages/Nodejs

## ==⚡ Code Completion
The package code completion is generated from the main Node.js libraries and global namespaces. To invoke the code completion start typing the namespace you want (For example, type fs) and then Ctrl + Space, you get this:

A picture of the file system context menu

## ==⚡ Node Commands
You can access node commands in two ways.

Via the menu in Tools -> Node
By accessing the Command Palette and typing node
The current commands available are (with Windows binding, other bindings are provided):

☛ Run current script in node (Alt + R)
☛ Run current script in node debug (Alt + D)
☛ Run current script in node and arguments (Ctrl + Alt + r)
☛ Run current script in node debug and arguments (Ctrl + Alt + D)
☛ Uglify Code

## ==⚡ NPM Command
Build documentation (builds the completion files)
Snippets
Also included are some boilerplate snippets. They include functionality such as a http server, reading the contents of a directory, etc.

To access these snippets type node in your editor followed by Ctrl + Space

If you have any boilerplate code you would like to see in here, get in touch.

## ==⚡ Install Node.js
You can install this package from Sublime Text 3 package manager. Also you can install this package manually:

MacOSX

`git clone https://github.com/tanepiper/SublimeText-Nodejs.git ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/Nodejs`

Windows

`git clone https://github.com/tanepiper/SublimeText-Nodejs "%APPDATA%\Sublime Text 3\Packages\Nodejs"`

Linux

`git clone https://github.com/tanepiper/SublimeText-Nodejs $HOME/.config/sublime-text-3/Packages/Nodejs`


After the package is installed, install Node.js packages needed for working the package built-in tools. You can to install either globaly by: 

    npm install -g commander@"~2.9.0" uglify-js@"~2.6.0" 

or localy by adding previously mentioned Node.js packages to your current project, either: 

    npm install commander@"~2.9.0" uglify-js@"~2.6.0"

or manully editing your project package.json file.

PLEASE NOTE: When your installed Node.js packages (previously mentioned) globaly, you also need to set the package node_path setting. For that, go to the Preferences -> Package Settings -> Node.js -> Settings User.


# =🚩 SublimeCodeIntel 自动补全提示

1、SublimeText3 下载地址

https://www.sublimetext.com/3

2、安装SublimeText3

3、安装SublimeCodeIntel

- 打开SublimeText3;
- 按快捷键“ctrl+p”，或者“Preferences->Package control”输入“Package Control: InstallPackage”;
- 输入“SublimeCodeIntel”，点击列表中的“SublimeCodeIntel”包，安装完后会有相应的提示。

4、配置python提示

(1)找配置文件 Preferences->Package settings->SublimeCodeIntel->settings-user

(2)修改文件内容如下，其中python的路径需要根据自己的需要修改

	{
	    "codeintel_language_settings": {
	        "Python": {
	            "python": "D:\\python\\python.exe",
	            "codeintel_scan_extra_dir": [
	                "D:\\python",
	                "D:\\python\\DLLs",
	                "D:\\python\\Lib",
	                "D:\\python\\Lib\\site-packages",
	                "D:\\python\\Lib\\idlelib"             
	            ],
	            "codeintel_scan_files_in_project": true,
	            "codeintel_selected_catalogs": []
	        },
	    }
	}

5、快捷键

ctrl+/:代码注释
ctrl+shift+space:代码提示

(2)自定应快捷键：

自定义“鼠标”跳转注释代码

找配置文件 Preferences->Package settings->SublimeCodeIntel->Mouse Bindings-User

添加以下内容

	[{ "button": "button1", "modifiers": ["ctrl"], "command": "goto_python_definition", "press_command": "drag_select" }]

自定义“键盘”快捷方式

	Preferences->Package settings->SublimeCodeIntel->Key Bindings-User

定义方式类似于鼠标的格式。
上述自定义方法可以参见Preferences->Package settings->SublimeCodeIntel->Key Bindings-Default中的内容


## ==⚡ AutoFileName 插件

在字符串中以 "/" 开头时会被 AFN 自动删除，Ctrl+Z 撤销时可以发现状态栏提示 Undo:afn delete prfixed slash。

问题就出在插件 AutoFileName 上，它会自动把这个字符串的斜杠删除;

解决方法:在插件 AFN 的 setting-user 里添加一行 "afn_use_project_root": true 即可。



# 📜 www.sublimetext.com docs

Use wget to download all Sublime Text Docs:

    wget -r -k -L -np  https://www.sublimetext.com/docs/index.html

The following pages contain the official documentation for Sublime Text. The
Sublime Text Unofficial Documentation https://docs.sublimetext.io/ is an
excellent supplementary resource, with a huge amount of information not covered
in the official documentation.

1. - Usage
    01. Tab Multi-Select  https://www.sublimetext.com/docs/tab_multi-select.html
    02. Git Integration  https://www.sublimetext.com/docs/git_integration.html
    03. Incremental Diff  https://www.sublimetext.com/docs/incremental_diff.html
    04. Indexing  https://www.sublimetext.com/docs/indexing.html
    05. Command Line Interface  https://www.sublimetext.com/docs/command_line.html
    06. Column Selection  https://www.sublimetext.com/docs/column_selection.html
    07. Multiple Selection with the Keyboard  https://www.sublimetext.com/docs/multiple_selection_with_the_keyboard.html
    08. Completions  https://www.sublimetext.com/docs/completions.html
    09. Distraction Free Mode  https://www.sublimetext.com/docs/distraction_free.html
    10. Vintage Mode  https://www.sublimetext.com/docs/vintage.html
    11. Projects  https://www.sublimetext.com/docs/projects.html

2. - Customization
    1. Settings  https://www.sublimetext.com/docs/settings.html
    2. Key Bindings  https://www.sublimetext.com/docs/key_bindings.html
    3. Font Settings  https://www.sublimetext.com/docs/font.html
    4. Indentation Settings  https://www.sublimetext.com/docs/indentation.html
    5. Spell Checking  https://www.sublimetext.com/docs/spell_checking.html
    6. Build Systems  https://www.sublimetext.com/docs/build_systems.html
    7. Packages  https://www.sublimetext.com/docs/packages.html
    8. Selectors  https://www.sublimetext.com/docs/selectors.html
    9. File Patterns  https://www.sublimetext.com/docs/file_patterns.html

3. - Miscellaneous
    1. GPU Rendering  https://www.sublimetext.com/docs/gpu_rendering.html
    2. Operating System Compatibility  https://www.sublimetext.com/docs/os_compatibility.html
    3. Linux Package Manager Repositories  https://www.sublimetext.com/docs/linux_repositories.html
    4. Safe Mode  https://www.sublimetext.com/docs/safe_mode.html
    5. Reverting to a Freshly Installed State  https://www.sublimetext.com/docs/revert.html
    6. Running 3 and 4 Side by Side  https://www.sublimetext.com/docs/side_by_side.html
    7. Accessing Previous Versions  https://www.sublimetext.com/docs/previous_versions.html
    8. Ligatures  https://www.sublimetext.com/docs/ligatures.html

4. - Package Development
    1. Color Schemes  https://www.sublimetext.com/docs/color_schemes.html
    2. Themes  https://www.sublimetext.com/docs/themes.html
    3. Menus  https://www.sublimetext.com/docs/menus.html
    4. API Environments  https://www.sublimetext.com/docs/api_environments.html
    5. API Reference  https://www.sublimetext.com/docs/api_reference.html
    6. Syntax Definitions  https://www.sublimetext.com/docs/syntax.html
    7. Scope Naming  https://www.sublimetext.com/docs/scope_naming.html
    8. minihtml Reference  https://www.sublimetext.com/docs/minihtml.html
    9. Plugin Porting Guide  https://www.sublimetext.com/docs/porting_guide.html


# 1. 📜 Usage
## 01. 🖐 Tab Multi-Select
https://www.sublimetext.com/docs/tab_multi-select.html

## 02. 🖐 Git Integration
https://www.sublimetext.com/docs/git_integration.html

## 03. 🖐 Incremental Diff
https://www.sublimetext.com/docs/incremental_diff.html

## 04. 🖐 Indexing
https://www.sublimetext.com/docs/indexing.html

## 05. 🖐 Command Line Interface
https://www.sublimetext.com/docs/command_line.html

## 06. 🖐 Column Selection
https://www.sublimetext.com/docs/column_selection.html

## 07. 🖐 Multiple Selection with the Keyboard
https://www.sublimetext.com/docs/multiple_selection_with_the_keyboard.html

## 08. 🖐 Completions
https://www.sublimetext.com/docs/completions.html

## 09. 🖐 Distraction Free Mode
https://www.sublimetext.com/docs/distraction_free.html

## 10. 🖐 Vintage Mode
https://www.sublimetext.com/docs/vintage.html

## 11. 🖐 Projects
https://www.sublimetext.com/docs/projects.html


# 2. 📜 Customization
## 1. 🖐 Settings
https://www.sublimetext.com/docs/settings.html

## 2. 🖐 Key Bindings
https://www.sublimetext.com/docs/key_bindings.html

## 3. 🖐 Font Settings
https://www.sublimetext.com/docs/font.html

## 4. 🖐 Indentation Settings
https://www.sublimetext.com/docs/indentation.html

## 5. 🖐 Spell Checking
https://www.sublimetext.com/docs/spell_checking.html

## 6. 🖐 Build Systems
https://www.sublimetext.com/docs/build_systems.html

## 7. 🖐 Packages
https://www.sublimetext.com/docs/packages.html
Packages are a collection of resource files used by Sublime Text: plugins, syntax highlighting definitions, menus, snippets and more. Sublime Text ships with several packages, and more user created ones are available.

Packages are stored in .sublime-package files, which are zip files with a different extension. Packages may also be stored unzipped within a directory, or a mix of the two: any loose files in the package directory will override files stored in the .sublime-package file.

1. Locations
2. Special Packages
3. Creating a New Package
4. Overriding Files From a Zipped Package

### 🍀 Locations🔗
Zipped packages may be stored in:

    <executable_path>/Packages/

    <data_path>/Installed Packages/

Loose packages may be stored in:

    <data_path>/Packages/

For example, the package Python is stored in `<executable_path>/Packages/Python.sublime-package`, and any files in the `<data_path>/Packages/Python/` directory will override those stored in the .sublime-package file.

In general, `<executable_path>/Packages/` is for packages that ship with Sublime Text, and `<data_path>/Installed Packages/` is for packages installed by the user.

### 🍀 Special Packages🔗
There are two special packages: Default and User. Default is always ordered first, and User is always ordered last. Package ordering comes into effect when merging files between packages, for example Main.sublime-menu. Any package may contain a file called Main.sublime-menu, however this won’t override the main menu, instead the files will be merged according to the order of the packages.

Packages other than Default and User are ordered alphabetically.

### 🍀 Creating a New Package🔗
To create a new package, simply create a new directory under `<data_path>/Installed Packages/`. You can access this directory from the Preferences ▶ Browse Packages menu.

### 🍀 Overriding Files From a Zipped Package🔗
To override a file in an existing package, just create a file with the same name under the Packages/`<Package Name>/` directory.

For example to override the file `function.sublime-snippet` in the Python.sublime-package package that ships with Sublime Text, create a directory called Python under the `<data_path>/Packages/` directory, and place your `function.sublime-snippet` file there.


## 8. 🖐 Selectors
https://www.sublimetext.com/docs/selectors.html

## 9. 🖐 File Patterns
https://www.sublimetext.com/docs/file_patterns.html


# 3. 📜 Miscellaneous
## 1. 🖐 GPU Rendering
https://www.sublimetext.com/docs/gpu_rendering.html

## 2. 🖐 Operating System Compatibility
https://www.sublimetext.com/docs/os_compatibility.html

## 3. 🖐 Linux Package Manager Repositories
https://www.sublimetext.com/docs/linux_repositories.html

## 4. 🖐 Safe Mode
https://www.sublimetext.com/docs/safe_mode.html

## 5. 🖐 Reverting to a Freshly Installed State
https://www.sublimetext.com/docs/revert.html

## 6. 🖐 Running 3 and 4 Side by Side
https://www.sublimetext.com/docs/side_by_side.html

Sublime Text 4 will use the same data directory as Sublime Text 3, so it will pickup exactly where you left off in version 3. You can configure this, however. Sublime Text 4 chooses what data directory to use by:

1. If the ST4 data directory exists, use that
2. Otherwise, if the ST3 data directory exists, use that
3. Finally, if neither exist, create the ST4 data directory

To keep ST4 and ST3 using different data directories, you’ll need to manually create the ST4 one. The exact path for this directory depends on your operating system:

    Windows: %APPDATA%\Sublime Text
    Mac:    ~/Library/Application Support/Sublime Text
    Linux:  ~/.config/sublime-text

For reference, the ST3 data directory is in the same location, but has a 3 on the end.

Mac🔗

On Mac, the `~/Library` directory is hidden by default. To navigate there, select the Go ▶ Go to Folder menu item in Finder, and type in `~/Library`.


## 7. 🖐 Accessing Previous Versions
https://www.sublimetext.com/docs/previous_versions.html

Sublime Text 4 has been released, and we’re very excited to share the major improvements with our community.

It may be the case though that you wish to continue using previous versions, and that’s completely fine! You’ve got permanent access to all Sublime Text versions released before the date of your license expiry.

### 🍀 How to access previous versions🔗

Download and install a previous version

1. Sublime Text 4 https://www.sublimetext.com/download
2. Sublime Text 3 https://www.sublimetext.com/3
3. Sublime Text 2 https://www.sublimetext.com/2
4. Sublime Text 1 https://www.sublimetext.com/1

(Optional): disable update checks by navigating to Preferences ▶ Settings and adding "update_check": false.

### 🍀 Downloading specific versions🔗
If you need to download a specific build of Sublime Text you can try looking up the links using this tool. Note that not all versions are available and some links may lead nowhere.

01. macOS  https://download.sublimetext.com/sublime_text_build_4000_mac.zip
02. Windows 32bit installer  https://download.sublimetext.com/sublime_text_build_4000_x32_setup.exe
03. Windows 32bit portable zip  https://download.sublimetext.com/sublime_text_build_4000_x32.zip
04. Windows 64bit installer  https://download.sublimetext.com/sublime_text_build_4000_x64_setup.exe
05. Windows 64bit portable zip  https://download.sublimetext.com/sublime_text_build_4000_x64.zip
06. Linux 64bit deb package  https://download.sublimetext.com/sublime-text_build-4000_amd64.deb
07. Linux 64bit rpm package  https://download.sublimetext.com/sublime-text-4000-1.x86_64.rpm
08. Linux 64bit pkg package  https://download.sublimetext.com/sublime-text-4000-1-x86_64.pkg.tar.xz
09. Linux 64bit tar archive  https://download.sublimetext.com/sublime_text_build_4000_x64.tar.xz
10. Linux arm64 deb package  https://download.sublimetext.com/sublime-text_build-4000_arm64.deb
11. Linux arm64 pkg package  https://download.sublimetext.com/sublime-text-4000-1-aarch64.pkg.tar.xz
12. Linux arm64 tar archive  https://download.sublimetext.com/sublime_text_build_4000_arm64.tar.xz

JavaScript Generate

```js
var BASE_URL = 'https://download.sublimetext.com'
var LINK_LIST_ELEMENT = document.getElementById("link-list");
var VERSION_INPUT_ELEMENT = document.getElementById("version-input");

var LINK_TEMPLATES = [
    ['macOS', [
        [3000, '/Sublime Text Build VERSION.dmg'],
        [4000, '/sublime_text_build_VERSION_mac.zip'],
    ]],
    ['Windows 32bit installer', [
        [3000, '/Sublime Text Build VERSION Setup.exe'],
        [4000, '/sublime_text_build_VERSION_x32_setup.exe']
    ]],
    ['Windows 32bit portable zip', [
        [3000, '/Sublime Text Build VERSION.zip'],
        [4000, '/sublime_text_build_VERSION_x32.zip'],
    ]],
    ['Windows 64bit installer', [
        [3000, '/Sublime Text Build VERSION x64 Setup.exe'],
        [4000, '/sublime_text_build_VERSION_x64_setup.exe'],
    ]],
    ['Windows 64bit portable zip', [
        [3000, '/Sublime Text Build VERSION x64.zip'],
        [4000, '/sublime_text_build_VERSION_x64.zip'],
    ]],
    ['Linux 64bit deb package', [
        [3000, '/sublime-text_build-VERSION_amd64.deb'],
        [4000, '/sublime-text_build-VERSION_amd64.deb'],
    ]],
    ['Linux 64bit rpm package', [
        [3000, '/sublime-text-VERSION-1.x86_64.rpm'],
        [4000, '/sublime-text-VERSION-1.x86_64.rpm'],
    ]],
    ['Linux 64bit pkg package', [
        [3000, '/sublime-text-VERSION-1-x86_64.pkg.tar.xz'],
        [4000, '/sublime-text-VERSION-1-x86_64.pkg.tar.xz'],
    ]],
    ['Linux 32bit tar archive', [
        [3000, '/sublime_text_3_build_VERSION_x32.tar.bz2'],
        [4000, null],
    ]],
    ['Linux 64bit tar archive', [
        [3000, '/sublime_text_3_build_VERSION_x64.tar.bz2'],
        [4000, '/sublime_text_build_VERSION_x64.tar.xz'],
    ]],
    ['Linux arm64 deb package', [
        [4000, '/sublime-text_build-VERSION_arm64.deb'],
    ]],
    ['Linux arm64 pkg package', [
        [4000, '/sublime-text-VERSION-1-aarch64.pkg.tar.xz'],
    ]],
    ['Linux arm64 tar archive', [
        [4000, '/sublime_text_build_VERSION_arm64.tar.xz'],
    ]],
];

function generate_links() {
    var version = VERSION_INPUT_ELEMENT.valueAsNumber;

    var urls = [];
    for (var i = 0; i < LINK_TEMPLATES.length; i++) {
        var url = null;
        for (var j = 0; j < LINK_TEMPLATES[i][1].length; ++j) {
            if (LINK_TEMPLATES[i][1][j][0] > version) break;

            url = LINK_TEMPLATES[i][1][j][1];
        }

        if (url !== null) {
            urls.push([LINK_TEMPLATES[i][0], BASE_URL + url.replace('VERSION', version)]);
        }
    }

    if (urls.length > 0)
    {
        LINK_LIST_ELEMENT.textContent = '';
        for (var i = 0; i < urls.length; ++i) {
            var li = document.createElement('li');
            var link = document.createElement('a');
            link.href = urls[i][1];
            link.textContent = urls[i][0];
            li.appendChild(link);
            LINK_LIST_ELEMENT.appendChild(li);
        }
    }
    else
    {
        LINK_LIST_ELEMENT.textContent = 'Invalid build number';
    }
}

(function() {
    var build = VERSION_INPUT_ELEMENT.value;

    var params = new URLSearchParams(window.location.search);
    var param_build = params.get('build');
    if (param_build)
        build = param_build;

    if (build) {
        VERSION_INPUT_ELEMENT.value = build;
        generate_links();
    }
})();
```

### 🍀 Support🔗
If anything doesn’t work as expected, don’t hesitate to reach out on the forum and we’ll do our best to get things working smoothly again for you. Thank you for being part of the Sublime Text family, and we hope you continue to enjoy using Sublime Text!


## 8. 🖐 Ligatures
https://www.sublimetext.com/docs/ligatures.html


# 4. 📜 Package Development
## 1. 🖐 Color Schemes
https://www.sublimetext.com/docs/color_schemes.html

## 2. 🖐 Themes
https://www.sublimetext.com/docs/themes.html


The look of the Sublime Text interface is controlled by themes. The term *theme*
refers strictly to the look of the UI – buttons, select lists, the sidebar,
tabs and so forth. The highlighting of source code, markup and prose is
controlled by a color scheme.

The theme engine for Sublime Text is based on raster graphics. PNGs are used to
prevent texture degradation and provide full alpha control. Each element in the
UI can have up to four layers of textures or fills applied, with properties to
control opacity and padding. The properties set on each element can be
conditionally changed based on user interaction and settings.

Sublime Text themes are implemented via the `.sublime-theme` format. It is
a JSON format that specifies rules for matching elements and modifying their
appearance.

01. Format
02. Terminology
03. General Information
04. Inheritance
05. Variables
06. Colors
07. Font Sizes
08. Attributes
09. Settings
10. Properties
11. Elements
12. Deprecated
13. Obsolete
14. Customization

### 🐣2.01 Format🔗

A .sublime-theme file contains a single JSON document. The document
should be (build-3179) an object containing a key “rules” with the value of (build-3179)
an array of rules. (build-3179) An optional key “variables” with an object
containing variable/value pairs may be added. (build-3179)

*The following is an example of a .sublime-theme file, showing the
format. A complete theme will have many more rules to cover all elements used in
the UI.*

```sh
 [
    // Set up the textures for a button
    {
        "class": "button_control",
        "layer0.tint": "#000",
        "layer0.opacity": 1.0,
        "layer1.texture": "Theme - Example/textures/button_background.png",
        "layer1.inner_margin": 4,
        "layer1.opacity": 1.0,
        "layer2.texture": "Theme - Example/textures/button_highlight.png",
        "layer2.inner_margin": 4,
        "layer2.opacity": 0.0,
        "content_margin": [4, 8, 4, 8]
    },
    // Show the highlight texture when the button is hovered
    {
        "class": "button_control",
        "attributes": ["hover"],
        "layer2.opacity": 1.0
    },
    // Basic text label style
    {
        "class": "label_control",
        "fg": [240, 240, 240],
        "font.bold": true
    },
    // Brighten labels contained in a button on hover
    {
        "class": "label_control",
        "parents": [{"class": "button_control", "attributes": ["hover"]}],
        "fg": [255, 255, 255]
    }
]
```

### 🐣2.02 Terminology🔗

The primary contents of a theme is an array of *rules*. Each *rule* object
contains a `"class"` key used to match to an element. In addition to the
`"class"`, matching can be further restricted by specifying `"attributes"`,
`"settings"`, `"parents"` and `"platforms"` keys. *Properties* affect the
look or behavior of the element.

                                                                (build-3179)
*Variables* allow reusing values throughout different *rules*. Variables may 
contain any type of syntax, but may only be referenced by top-level keys in a *rule*.

                                                                (build-3179)
Most elements have a single class name, although a few have more than one to
allow for both generic, and specific styling. For example, the
`popup_control` class can be used to set styles for the auto complete and
HTML popups, however `popup_control auto_complete_popup` may be used to
target just the auto complete popup. Multiple `"class"` values are separated
by a space. When a rule specified multiple class names, all must be present on
the element for the rule to be applied.

`"attributes"` are set by Sublime Text, and indicate the state of user
interaction, or other information about the nature of an element. The value is
an array of strings. Examples include `"hover"`, `"pressed"`
and `"dirty"`.

`"settings"` uses values from .sublime-settings files to filter rules.
This allowing theme authors to give users the ability to tweak a theme. Themes
may define their own settings, but there are a handful of “default” settings
that should be supported if possible. See Settings for more details.

The value for the `"settings"` key may be one of:

1. array of strings

    Each string is the name of boolean settings. To check for a `false`
    value, prefix the setting name with a `!`.

    Example: `["bold_folder_labels", "!always_show_minimap_viewport"]`.

1. object

    Each key is the name of a setting. A value may be a boolean, string, or array
    of strings. If an array of strings is used, the setting will be matched if
    any of the strings in the array matches the user’s value. When comparing to a
    string, the user’s setting will be coerced to an empty string when not set.

    Example: `{"bold_folder_labels": true, "file_tab_style": "rounded"}`.

The `"parents"` key is an array of objects specifying the `"class"` and
`"attributes"` that must be matched in a parent element. Note that the
parents must be ordered from furthest to closest parent.

The `"platforms"` key is an array of strings specifying the what operating
systems to apply the rule to. Valid options
include `"osx"`, `"windows"` and `"linux"`.

*Properties* refer to all other keys in the JSON objects. Some properties are
available on all elements, while others are specific to an individual element.

### 🐣2.03 General Information🔗

The follow sections discuss information about images and how to specify styles.

#### ✋ Specificity🔗

Unlike CSS, a Sublime Text theme does not do specificity matching when applying
rules to elements. All rules are tested, in order, against each element.
Subsequent rules that match will override properties from previous rules.

#### ✋ Texture Images🔗

All textures in a theme are specified using PNG images. Each texture should be
saved at “normal” DPI, where each pixel in the file will be mapped to one
device pixel. All file paths in the theme definition should reference the
normal DPI version.

A second version of each texture should also be included at double the DPI, with
`@2x` added to the filename right before the extension. Sublime Text will
automatically use the `@2x` version when being displayed on a high-DPI
screen. It is also possible to specify `@3x` variants of textures for
screens running at 300% scale or higher 3167.

*SVG images are not currently supported.*

#### ✋ Dimensions🔗

Integer units in a theme referring to dimensions are always specified in
device-independent pixels (DIP). Sublime Text automatically handles scaling UI
elements based on the screen density.

#### ✋ Padding &amp; Margins🔗

Padding and margin may be specified in one of three ways:

1. A single integer value – the same value is applied to the left, top, right and bottom
2. An array of two integers – the first value is applied to the left and right, while the second value is applied to the top and bottom
3. An array of four integers – the values are applied, in order, to the left, top, right and bottom

                                                                (build-3179)
### 🐣2.04 Inheritance🔗

A theme may extend another theme, appending rules and overriding variables. To
extend a theme, add a top-level key `"extends"` to the JSON object, with a
string value of the base theme.

```sh
 {
    "extends": "Default.sublime-theme",
    "rules":
    [
        {
            "class": "label_control",
            "parents": [{"class": "button_control", "attributes": ["hover"]}],
            "fg": "red"
        }
    ]
}
```

The resulting list of rules will start with the base theme rules followed by the
extending theme rules. Any variables from the extending theme will override
variables with the same name in the base theme. Variable overrides will affect
rules both in the base theme and the extending theme.

                                                                (build-3179)
### 🐣2.05 Variables🔗

Reusable variables may be defined by a JSON object under the top-level key
`"variables"`. Variable names are strings, however the value may be a string,
number, boolean, array or object. Using a variable requires specifying a string
in the format `var(example_variable_name)`.

```sh
 {
    "variables":
    {
        "light_gray": "rgb(240, 240, 240)"
    },
    "rules":
    [
        {
            "class": "label_control",
            "fg": "var(light_gray)"
        }
    ]
}
```

Variables may be used as the value for any properties, but
the variable must be the entire value, it may not be embedded within another
variable. The only exception to this rule is that variables may be used as the
base color for the CSS `color()` mod function.

                                                                (build-3179)
### 🐣2.06 Colors🔗

Colors may be specified by CSS or legacy color syntax:

                                                                (build-3179)
#### ✋ CSS Color Syntax🔗

Since Sublime Text build 3177, colors in themes may now be specified using CSS
syntax, as supported by minihtml Reference. This includes support for hex, `rgb()`,
`hsl()`, variables and the color mod function. Additionally, all
Predefined Variables that are derived from the color
scheme are available for use.

*The color white, as hex*

```sh
 #fff
```

*The color white, using `rgb()` functional notation*

```sh
 rgb(255, 255, 255)
```

*50% opacity white, using `hsl()` functional notation*

```sh
 hsla(0, 100%, 100%, 0.5)
```

*The closest color to red, as defined in the color scheme*

```sh
 var(--redish)
```

*50% opacity of the closest color to red, as defined in the color scheme*

```sh
 color(var(--redish) a(0.5)
```

                                                                (build-3179)
#### ✋ Legacy Color Syntax🔗

Prior to supporting CSS syntax for colors, themes were only able to specify
colors using the following formats, which are now deprecated.

#### RGB🔗
Colors in the RGB color space are specified via an array of 3 or 4 numbers, with
the first three being integers ranging from `0` to `255`
representing the components red, green and blue. The optional fourth number is
a float ranging from `0.0` to `1.0` that controls the opacity of
the color.

*The color white, with full opacity*

```sh
 [255, 255, 255]
```

*The color blue, with 50% opacity*

```sh
 [0, 0, 255, 0.5]
```

#### HSL🔗
Colors may also be specified using the HSL color space by creating an array of 4
elements, with the first being the string `"hsl"`. The second element is
an integer from `0` to `360` specifying the hue. The third is an
integer from `0` to `100` specifying the saturation, and the fourth
is an integer from `0` to `100` specifying the lightness.

*A dark magenta, with full opacity*

```sh
 ["hsl", 325, 100, 30]
```

A float from `0.0` to `1.0` may be added as a fifth element to
control the opacity.

*A bright teal, with 50% opacity*

```sh
 ["hsl", 180, 100, 75, 0.5]
```

#### Derived Colors🔗
It is also possible to derive colors from the current global color scheme.
Colors in this format are specified using arrays with specific formats. In all
cases, the first element is the base color, which may
be `"foreground"`, `"background"` or `"accent"`.

#### Change Opacity of Base Color🔗
To change the opacity of a base color, specify an array of 2 elements, the first
being the base color name and the second being a float from `0.0`
to `1.0`. The opacity will be set to the float value.

*The color scheme foreground, at 90% opacity*

```sh
 ["foreground", 0.9]
```

#### De-saturate Base Color🔗
To de-saturate a base color, specify an array with 3 elements. The first is the
name of the base color, the second is the string `"grayscale"`, and the
third is an integer from `0` to `100` which specifies what
percentage of the saturation (in HSL color space) of the existing color should
be retained. A value of `100` means no change, whereas a value
of `0` would cause the color to be completely de-saturated.

*The color scheme foreground, with the saturation adjusted to 1/4 of the
original value.*

```sh
 ["foreground", "grayscale", 25]
```

#### Tint Base Color🔗
5 and 6-element derived colors allow blending a color into the base color. A
5-element colors uses an RGBA color, whereas a 6-element uses an HSLA. In both
cases, the last element, which normally represents the opacity, controls how
much of the secondary color is blended into the base.

*The color scheme background, lightened with white*

```sh
 ["background", 255, 255, 255, 0.1]
```

*The color scheme accent, tinted with dark red*

```sh
 ["accent", "hsl", 0, 100, 30, 0.2]
```

Colors derived from the color scheme will always be based on the global color
scheme, and will not reflect view-specific color schemes. Certain view-specific
controls in the UI have tinting properties that allow using the view-specific
color scheme colors.

### 🐣2.07 Font Sizes🔗

Font sizes may be specified in the formats:

#### ✋ Numeric🔗

An integer or float to specify the size of the font in pixels.

*Examples: `12`, `13.5`.*

                                                                (build-4050)
#### ✋ CSS Format🔗

A string of a `px` or `rem` CSS font size.

*Examples: `12px`, `1.<span class="err">`2rem`*

*The `rem` size is based on the global setting `font_size` for most
elements. Elements that use a different root font size will specify in the
description.*

                                                                (build-4050)
### 🐣2.08 Attributes🔗

Attributes are specified as an array of strings. Each string is an attribute
name. To check for the absence of an attribute, prepend a `!` to the name.

The following attributes are common to all elements:

`hover` - Set whenever the user’s mouse is hovered over an element.


#### ✋ Luminosity🔗

Although not available on all elements, many have attributes set based on the
approximate luminosity of the current color scheme. Most elements have the
attributes set based on the global color scheme. Tabs and the tab background,
however, have the attributes based on the color scheme specific to the selected
view.

The attributes are assigned based on the `V` value of the background color,
when represented as <a class="reference external" href="https://en.wikipedia.org/wiki/HSL_and_HSV"> HSV colors.

1. `file_light` - `V` from `0.60`-`1.00`
2. `file_medium` - `V` from `0.30`-`0.59`
3. `file_medium_dark` - `V` from `0.10`-`0.29`
4. `file_dark` - `V` from `0.00`-`0.09`

### 🐣2.09 Settings🔗

Certain Sublime Text settings are design to influence the UI. Themes should
respect these settings and change elements based on them.

1. "overlay_scroll_bars" - Permalink to this definition🔗 This should affect the style of the scroll bars – generally they should be
semi-transparent and the `overlay` property of the
`scroll_area_control` should be set to `true`.

2. "always_show_minimap_viewport" - Permalink to this definition🔗 If the current viewport area should be highlighted on the minimap even when
the user is not hovering over the minimap.

3. "bold_folder_labels" - Permalink to this definition🔗 If folder names in the side bar should have the `font.bold` property set to `true`.

4. "mouse_wheel_switches_tabs" - Permalink to this definition🔗 This is used to control mouse wheel behavior of tabs on Linux. It should be
combined with checking for `!enable_tab_scrolling` to change the
`mouse_wheel_switch` property of the `tabset_control`
to `false`.

5. "highlight_modified_tabs" - Permalink to this definition🔗 If the tabs of modified files should be highlighted. This setting should be
checked in addition to the `dirty` attribute.

6. "show_tab_close_buttons" - Permalink to this definition🔗 If tabs should have close buttons. (build-4095)

7.0 "inactive_sheet_dimming"Permalink to this definition🔗 (build-4095) If sheets other than the one with the attribute `highlighted` should be
visually de-emphasized using `background_modifier`.


### 🐣2.10 Properties🔗

The `"rules"` key of a .sublime-theme file is a JSON array of of
objects describing how UI elements should be styled. Every element in the UI
supports the following keys:

`layer0.*`
  The bottom-most texture layer for the element.

`layer1.*`
  The second texture layer for the element.

`layer2.*`
  The third texture layer for the element.

`layer3.*`
  The fourth texture layer for the element.

`hit_test_level`
 A float value setting the required opacity of a pixel for a click to be
considering a “hit”.

#### ✋ Layer Properties🔗

Every element in the UI supports up to four texture layers for displaying fill
colors and raster graphics. Each layer has dotted sub-keys in the format
`layer#.sub-key`. Valid sub-keys include:

`layer#.opacity`
 A float value from `0.0` to `1.0` that controls the master
opacity of the layer.

Example: `0.9`

`layer#.tint`
  A color value of a fill color to apply to the layer.

Example: `[255, 0, 0, 127]`

`layer#.texture`
 A string of the file path to a PNG image, relative to the Packages/
folder.

Example: `"Theme - Default/arrow_right.png"`

`layer#.inner_margin`
 Texture images are stretched to fit the element by slicing into a grid of 9
using four lines. See padding &amp; margins for valid formats with which to
specify the margin used to make the slices.

Example: `[5, 2, 5, 2]`

`layer#.draw_center`
 A boolean that controls if the center rectangle of the 9-grid created via
`layer#.inner_margin` should be drawn. This is an optimization that
allows skipping an unused section of texture.

Example: `false`

`layer#.repeat`
 A boolean that controls if the texture should be repeated instead of
stretched.

Example: `false`

#### Value Animation🔗
Properties specified by floats may be animated over time. Instead of providing a
single numeric value, the animation is specified with an object including
details of the animation. *Value animation is primarily useful for changing
opacity over time.* The object keys are:

`target`
 A float value from `0.0` to `1.0` that controls the destination
value.

Example: `1.0`

`speed`
 A float value of `1.0` or greater that controls the relative length of
time the animation takes.

Example: `1.5`

`interpolation`
 An optional string that allow specifying the use of *smoothstep* function
instead of the default *linear* function.

Default: `"linear"`

Example: `"smoothstep"`

#### Texture Animation🔗
The `layer#.texture` sub-key may be an object to specify an animation based on
two or more PNG images. The object keys are:

`keyframes`
 An array of strings of the paths to PNG images, in order

Example: `["Theme - Default/spinner.png", "Theme - Default/spinner1.png"]`

`loop`
 An optional boolean that controls if the animation should repeat

Default: `false`

Example: `true`

`frame_time`
 An optional float specifying how long each frame should be
displayed. `1.0` represents 1 second.

Default: `0.0333` (30 fps)

Example: `0.0166` (60 fps)

#### ✋ Texture Tinting Properties🔗

Certain elements have an available tint value set by the background of current
color scheme. The tint can be modified and applied to a `layer#.texture`
image.

`tint_index`
 Controls which layer the tint is applied to. Must be an integer
from `0` to `3`.

`tint_modifier`
 An array of four integers in the range `0` to `255`. The first
three are blended into the RGB values from the tint color with the fourth
value specifying how much of these RGB modifier values to apply.

#### ✋ Font Properties🔗

Certain textual elements allow setting the following font properties:

`font.face`
 The name of the font face.

`font.size`
  The font size.

`font.bold`
 A boolean, if the font should be bold.

`font.italic`
 A boolean, if the font should be italic.

`color`
  A color value to use for the text - the `fg` property is an
alias for this for backwards compatibility.

`shadow_color`
  A color value to use for the text shadow.

`shadow_offset`
 A 2-element array containing the X and Y offsets of the shadow

                                                                (build-4073)
`opacity`
 A float from `0.0` to `1.0` that is multiplied against the
opacity of the `color` and `shadow_color` properties.


#### ✋ Filter Label Properties🔗

Labels used in the quick panel have color control based on selection and
matching:

`fg`
  A color value for unselected, unmatched text.

`match_fg`
  A color value for unselected, matched text.

`bg`
  A color value for the background of an unselected row.

`selected_fg`
  A color value for selected, unmatched text.

`selected_match_fg`
  A color value for selected, matched text.

`bg`
  A color value for the background of a selected row.

`font.face`
 The name of the font face.

`font.size`
  The font size.

#### ✋ Data Table Properties🔗

Row-based tables of data provide the following properties:

`dark_content`
 If the background is dark – used to set the `dark` attribute for
scrollbars.

`row_padding`
  Padding added to each row, in one of the formats described in Padding &amp;
Margins</a>.

#### ✋ Styled Label Properties🔗

Certain labels allow for additional control over their appearance. They support
the properties:

`border_color`
  A color value for the border of the label.

`background_color`
  A color value for the background of the label.

### 🐣2.11 Elements🔗

The following is an exhaustive list of the elements that comprise the Sublime
Text UI, along with supported attributes and properties:

01. Windows
02. Side Bar
03. Tabs
04. Quick Panel
05. Views
06. Auto Complete
07. Panels
08. Status Bar
09. Dialogs
10. Scroll Bars
11. Inputs
12. Buttons
13. Labels
14. Tool Tips

#### ✋ Windows🔗

0. `title_bar` Attributes: Luminosity

    Properties:
    `fg`
      A color value to use for the window title text – * Mac 10.10
    or newer only*.

    `bg`
      A color value to use for the title bar background – * Mac
    10.10 or newer only*.
                                                                (build-4050)
    `style`

    The OS style to use for the title
    bar - `"system"`, `"dark"` *(Mac/Linux only)*
    or `"light"` *(Mac only)*.

    Default: `"system"`


0. `window`
     This element can not be styled directly, however it can be used in a
    `"parents"` key. The luminosity attributes are set based on the global
    color scheme.
     Attributes: Luminosity

    `edit_window`
     This element contains the main editor window, and is intended for use in a
    `"parents"` key.

0. `switch_project_window`
    This element contains the Switch Project window, and is intended for use in
    a `"parents"` key.

#### ✋ Side Bar🔗

0. `sidebar_container`
     The primary sidebar container that handles scrolling.

    Properties: 
    `content_margin`
      The margin around the `sidebar_tree`.

0. `sidebar_tree`
     A tree control containing multiple `tree_row`s.

    Properties: 
    `indent`
     An integer amount to indent each level of the tree structure.

    `indent_offset`
     An additional indent applied to every row, for the sake of positioning
    `disclosure_button_control` and `close_button`.

    `indent_top_level`
     A boolean if top-level rows in the tree should be indented.

    `spacer_rows`
     A boolean controlling if a blank row should be added between the *Open
    Files* and *Folders* sections of the sidebar, when both are visible..

0. `tree_row`
     A row may contain a header, open file, folder or file.
     Attributes: `selectable`
     When a row is selectable.

    `selected`
     When an selectable row is selected.

    `expandable`
     When a row is expandable.

    `expanded`
     When an expandable row is expanded.

0. `sidebar_heading`
     One of the “Open Files”, “Group #” or “Folders” headings in the sidebar.

    Properties: font properties

                                                                (build-3179)
    `case`
                                                                (build-3179)
     The case modification to use for the heading - `"upper"`,
    `"lower"` or `"title"`.

    Default: `"upper"`

                                                                (build-3181)
0. `file_system_entry``

     The container holding information about a file or folder in the sidebar.
    Contains different controls based on which section of the sidebar it is
    within.

    Within the *Open Files* section, this control will contain a
    `sidebar_label` with the file name, plus possibly a `vcs_status_badge`.

    Within the *Folders* section, this control will contain a folder or file
    icon (either `icon_folder`, `icon_folder_loading`, `icon_folder_dup`
    or `icon_file_type`), a `sidebar_label` with the file or folder name,
    plus possibly a `vcs_status_badge`.
     Attributes: `ignored`
     **Files:** when a file is ignored.

    **Folders:** when the entire folder is ignored.


    `untracked`
     **Files:** when a file is new or not recognized.

    **Folders:** when a folder contains one or more untracked files.

    `modified`
     **Files:** when a file has been changed on disk.

    **Folders:** when a folder contains one or more modified files.

    `missing`
     **Folders:** when one or more of a folder‘s files is no longer on disk.

    `added`
     **Files:** when a new file has been newly added to the index.

    **Folders:** when a folder contains one or more added files.

    `staged`
     **Files:** when a modified file has been added to the index.

    **Folders:** when a folder contains one or more staged files.

    `deleted`
     **Folders:** when one or more of a folder‘s files has been added to the
    index for removal.

    `unmerged`
     **Files:** when a file is in a conflict state and needs to be resolved.

    **Folders:** when a folder contains one or more unmerged files.

    Properties:
    `content_margin`
      The margin around the contained controls.

    `spacing`
     An integer number of pixels between each contained control.


0. `sidebar_label`
    Names of open files, folder names and filenames.

    Properties: font properties

0. `close_button`
     A button to the left of each file in the *Open Files* section.

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

0. `disclosure_button_control`
     An expand/collapse icon present in all `tree_row`s that can be expanded

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

0. `icon_folder`
     Used for a folder once the contents have been fully enumerated.

    Properties: 
    `content_margin`
      For icons, the margin specifies the dimensions.

0. `icon_folder_loading`
     Used for a folder while the contents are being enumerated

    Properties: 
    `content_margin`
      For icons, the margin specifies the dimensions.

0. `icon_folder_dup`
     Used for a folder that has been scanned previously in the sidebar. *This is
    necessary to prevent a possibly infinite list of files due to recursive
    symlinks.*

    Properties: 
    `content_margin`
      For icons, the margin specifies the dimensions.

0. `icon_file_type`
     The icon for a file. The `layer0.texture` should not be set since it is
    determined dynamically based on the `icon` setting provided
    by .tmPreferences files.

    Properties: 
    `content_margin`
      For icons, the margin specifies the dimensions.

                                                                (build-3181)
0. `vcs_status_badge`

     An icon contained within `file_system_entry` that is used to display the
    status of a file or folder with regards to a Git repository it is contained
    in. This icon will only be shown if the setting `show_git_status`
    is `true`, the file is contained within a Git repository, and the
    file has some sort of special state within the repository. *A file that is
    not shown via `git status` and is not ignored via a .gitignore
    rule will have no icon.*
     Attributes: `ignored`
     **Files:** when a file is ignored.

    **Folders:** when the entire folder is ignored.

    `untracked`
     **Files:** when a file is new or not recognized.

    **Folders:** when a folder contains one or more untracked files.

    `modified`
     **Files:** when a file has been changed on disk.

    **Folders:** when a folder contains one or more modified files.

    `missing`
     **Folders:** when one or more of a folder‘s files is no longer on disk.

    `added`
     **Files:** when a new file has been newly added to the index.

    **Folders:** when a folder contains one or more added files.

    `staged`
     **Files:** when a modified file has been added to the index.

    **Folders:** when a folder contains one or more staged files.

    `deleted`
     **Folders:** when one or more of a folder‘s files has been added to the
    index for removal.

    `unmerged`
     **Files:** when a file is in a conflict state and needs to be resolved.

    **Folders:** when a folder contains one or more unmerged files.

    Properties:
    `content_margin`
      For icons, the margin specifies the dimensions.


#### ✋ Tabs🔗

0. `tabset_control`
    Attributes: Luminosity

    Properties:
    texture tinting properties

    `content_margin`
      The margin around the `tab_control`s.

    `tab_overlap`
     How many DIPs the tabs should overlap.

    `tab_width`
     Default tab width when space is available.

    `tab_min_width`
     The minimum tab width before tab scrolling occurs.

    `tab_height`
     The height of the tabs in DIPs.

    `mouse_wheel_switch`
     If the mouse wheel should switch tabs – this should only be set to
    `true` if the setting `enable_tab_scrolling` is `false`.

0. `tab_control`
    Attributes: Luminosity

    `dirty`
     When the associated view has unsaved changed.

    `selected`
     When the associated view is the active view in its group.

    `transient`
     When the associate view is a preview and not fully opened.

                                                                    (build-4050)
    `highlighted`

     When the tab is for the sheet with input focus.


                                                                    (build-4095)
    `left`
    (build-4095)
     When the tab is the left-most tab in the tabset.


                                                                    (build-4095)
    `right`
    (build-4095)
     When the tab is the right-most tab in the tabset.


                                                                    (build-4095)
    `multiple`
    (build-4095)
     When the tab is part of a sheet multi-selection.


                                                                    (build-4095)
    `left_of_selected`
    (build-4095)
     When the tab is to the left of a selected tab.


                                                                    (build-4095)
    `left_of_hover`
    (build-4095)
     When the tab is to the left of a hovered tab.


                                                                    (build-4095)
    `right_of_selected`
    (build-4095)
     When the tab is to the right of a selected tab.


                                                                    (build-4095)
    `right_of_hover`
    (build-4095)
     When the tab is to the right of a hovered tab.


                                                                    (build-4095)
    `left_overhang`
    (build-4095)
     When the tab is overhanging to the left of its sheet, which can occur
    during sheet multi-selection.


                                                                    (build-4095)
    `right_overhang`
    (build-4095)
     When the tab is overhanging to the right of its sheet, which can occur
    during sheet multi-selection.


    Properties:
    texture tinting properties

    `content_margin`
      The margin around the `tab_label`.

    `max_margin_trim`
     How much of the left and right `content_margin` may be removed when
    tab space is extremely limited.

    `accent_tint_index`
     Controls which layer the accent tint is applied to. Must be an integer
    from `0` to `3`. The accent color is specified by the color
    scheme.

    `accent_tint_modifier`
     An array of four integers in the range `0` to `255`. The
    first three are blended into the RGB values from the accent tint color
    with the fourth value specifying how much of these RGB modifier values
    to apply.


0. `tab_label`

    Properties:
    font properties

     Attributes: `transient`
     When the associate view is a preview and not fully opened

0. `tab_close_button`

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

    `accent_tint_index`
     Controls which layer the accent tint is applied to. Must be an integer
    from `0` to `3`. The accent color is specified by the color
    scheme.

    `accent_tint_modifier`
     An array of four integers in the range `0` to `255`. The
    first three are blended into the RGB values from the accent tint color
    with the fourth value specifying how much of these RGB modifier values
    to apply.

0. `scroll_tabs_left_button`

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

0. `scroll_tabs_right_button`

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

0. `show_tabs_dropdown_button`

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

                                                                (build-4095)
0. `tab_connector`

    Properties:
    texture tinting properties

    Attributes:
    `left_overhang`
     When the tab is overhanging to the left of its sheet, which can occur
    during sheet multi-selection.

    `right_overhang`
     When the tab is overhanging to the right of its sheet, which can occur
    during sheet multi-selection.


#### ✋ Quick Panel🔗

The quick panel is used for the various Goto functionality, the command palette
and is available for use by plugins.

0. `overlay_control`
    The container for the quick panel, including the input and data table.
    Specializations:
                                                                (build-4050)
    To allow for targeting the `overlay_control` when the quick panel
    is being used for specific functionality, the following multi-class
    selectors are available:


    `overlay_control goto_file`
     The Goto File quick panel.

    `overlay_control goto_symbol`
     The Goto Symbol quick panel.

    `overlay_control goto_symbol_in_project`
     The Goto Symbol in Project quick panel.

    `overlay_control goto_line`
     The Goto Line quick panel.

    `overlay_control goto_word`
     The Goto Anything quick panel, filtering by word.

    `overlay_control command_palette`
     The Command Palette.


    Properties:
    `content_margin`
      The margin around the `quick_panel`.

0. `quick_panel`
    The data table displayed below the input. Normally the height is dynamic so
    the layers will not be visible, however the Switch Project window will use
    layers for the blank space below the filtered options.

    Properties:
    data table properties

0. `mini_quick_panel_row`
    A non-file row in `quick_panel`. Contains one `quick_panel_label` for
    each line of text in the row.

    Attributes: `selected`
    When the row is selected.

0. `quick_panel_row`
    A Goto Anything file row in `quick_panel`. Also used in the Switch Project window.

    Contains `quick_panel_label` with the filename, and
    `quick_panel_path_label` for the file path.

     Attributes: `selected`
     When the row is selected.

                                                                (build-4050)
0. `quick_panel_entry`

    A spacing-only container to control the spacing between
    `quick_panel_label` and `quick_panel_path_label` controls when a row
    has one or more detail lines.

    Properties: 
    `spacing`
     An integer number of pixels between each line of text,


                                                                (build-4050)
0. `kind_container`

    A container shown to the left of the symbols in the Goto Symbol and Goto
    Symbol in Project quick panels. It contains the `kind_label` and is used
    to indicate the kind of the symbol.

    *This element is also used in `auto_complete` to show the kind of the item
    being inserted. A `"parents"` key should be used to distinguish the two
    uses.*

    The element `kind_container` is always paired with a second class name
    indicating the general category the kind belongs to. The categories for
    usage in the quick panel are as follows:
     Specializations: 
     `kind_container kind_ambiguous`
     When the kind of the item is unknown *– no color*.

    `kind_container kind_keyword`
     When the item is a keyword *– typically pink*.

    `kind_container kind_type`
     When the item is a data type, class, struct, interface, enum, trait,
    etc *– typically purple*.

    `kind_container kind_function`
     When the item is a function, method, constructor or subroutine *–
    typically red*.

    `kind_container kind_namespace`
     When the item is a namespace or module *– typically blue*.

    `kind_container kind_navigation`
     When the item is a definition, label or section *– typically yellow*.

    `kind_container kind_markup`
     When the item is a markup component, including HTML tags and CSS
    selectors *– typically orange*.

    `kind_container kind_variable`
     When the item is a variable, member, attribute, constant or parameter *–
    typically cyan*.

    `kind_container kind_snippet`
     When the item is a snippet *– typically green*.

    `kind_container kind_color_redish`
     When the plugin author wants to display red.

    `kind_container kind_color_orangish`
     When the plugin author wants to display orange.

    `kind_container kind_color_yellowish`
     When the plugin author wants to display yellow.

    `kind_container kind_color_greenish`
     When the plugin author wants to display green.

    `kind_container kind_color_cyanish`
     When the plugin author wants to display cyan.

    `kind_container kind_color_bluish`
     When the plugin author wants to display blue.

    `kind_container kind_color_purplish`
     When the plugin author wants to display purple.

    `kind_container kind_color_pinkish`
     When the plugin author wants to display pink.

    `kind_container kind_color_dark`
     When the plugin author wants to display a dark background.

    `kind_container kind_color_light`
     When the plugin author wants to display a light background.

    Properties:
    `content_margin`
      A margin that is added around the `kind_label`.


                                                                (build-4050)
0. `kind_label`

    A label showing a single unicode character, contained within the
    `kind_container`.

    *This element is also used in `auto_complete` to show the kind of the item
    being inserted. A `"parents"` key should be used to distinguish the two
    uses.*

    Properties: font properties


                                                                (build-4050)
0. `symbol_container`

    A container around the `quick_panel_label` when showing the Goto Symbol or
    Goto Symbol in Project symbol lists.

    Properties: 
    `content_margin`
      A margin that is added around the
    `quick_panel_label`.


0. `quick_panel_label`
    Filenames in `quick_panel_row` and all text in `mini_quick_panel_row`.

    Properties:
    filter label properties

0. `quick_panel_path_label`
    File paths in `quick_panel_row`.

    Properties:
    filter label properties

                                                                (build-4073)
0. `quick_panel_label key_binding`
    Key bindings show to the right-hand side of `quick_panel_row`.

    Properties:
    filter label properties


                                                                (build-4073)
0. `quick_panel_label hint`
    Annotations show to the right-hand side of `quick_panel_row`.

    Properties:
    filter label properties


                                                                (build-4083)
0. `quick_panel_detail_label`

    Detail rows in `quick_panel_row`.

    Properties: 
    `color`
      A color value to use for the text.

    `link_color`
      A color value to use for links.

    `monospace_color`
      A color value to use for monospace text.

    `monospace_background_color`
      A color value to use for the background of monospace text.


#### ✋ Sheets🔗

                                                                (build-4095)
0. `sheet_contents`

     A sheet can have text, image or HTML contents
     Attributes: Luminosity

                                                                (build-4095)
    `highlighted`
    (build-4095)
     When the sheet has input focus.

    Properties:
    `background_modifier`
     A string with a space-separated list of adjusters that are supported by
    the color() mod function. Used for implementing
    inactive sheet dimming.


#### ✋ Views🔗

0. `text_area_control`
    This element can not be styled directly since that is controlled by the
    color scheme, however it can be used in a `"parents"` key.
    Attributes: Luminosity

0. `grid_layout_control`
    The borders displayed between views when multiple groups are visible.

    Properties: 
    `border_color`
      A color value to use for the border.

    `border_size`
     An integer of the border size in DIPs.

0. `minimap_control`
    Control over the display of the viewport projection on the minimap.

    Properties: 
    `viewport_color`
      A color value to fill the viewport projection with.

0. `viewport_opacity`
    A float from `0.0` to `1.0` specifying the opacity of the
    viewport projection.

    `fold_button_control`
    Code folding buttons in the gutter.
    Attributes: `expanded`
    When a section of code is unfolded.

    Properties:
    `content_margin`
      For buttons, the margin specifies the dimensions.

                                                                (build-4075)
0. `popup_shadow`

    A wrapper around popup windows that allows controlling the shadow.


    `popup_control html_popup`
    The primary container for the HTML popups used by *Show Definitions* and
    third-party packages. The tint of the scroll bar will be set to the
    background color of the HTML document.

                                                                (build-4050)
0. `popup_control annotation_popup`

    The primary container for the annotations added to the right-hand side of
    the editor pane by build systems and third-party packages.


                                                                (build-4050)
0. `annotation_close_button`

    The close button shown at the left edge of `annotation_popup`.

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.


#### ✋ Auto Complete🔗

0. `popup_control auto_complete_popup`
     The primary container for the auto complete popup.

0. `auto_complete`
     The data table for completion data. The tint is set based on the background
    color of the color scheme applied to the view the popup is displayed in.

    Properties:
    data table properties

    texture tinting properties

0. `table_row`
     A row in `auto_complete`.
     Attributes: `selected`
     When the user has highlighted a completion.

                                                                (build-4050)
0. `kind_container`

     A container shown to the left of an auto complete item, which contains the
    `kind_label` and is used to indicate the kind of the item.

    *This element is also used in the `quick_panel` for Goto Symbol and Goto
    Symbol in Project. A `"parents"` key should be used to distinguish the two
    uses.*

    The element `kind_container` is always paired with a second class name
    indicating the general category the kind belongs to. The categories for
    usage in the auto complete window are as follows:
    
    Specializations: 
    `kind_container kind_ambiguous`
     When the kind of the item is unknown *– no color*.

    `kind_container kind_keyword`
     When the item is a keyword *– typically pink*.

    `kind_container kind_type`
     When the item is a data type, class, struct, interface, enum, trait,
    etc *– typically purple*.

    `kind_container kind_function`
     When the item is a function, method, constructor or subroutine *–
    typically red*.

    `kind_container kind_namespace`
     When the item is a namespace or module *– typically blue*.

    `kind_container kind_navigation`
     When the item is a definition, label or section *– typically yellow*.

    `kind_container kind_markup`
     When the item is a markup component, including HTML tags and CSS
    selectors *– typically orange*.

    `kind_container kind_variable`
     When the item is a variable, member, attribute, constant or parameter *–
    typically cyan*.

    `kind_container kind_snippet`
     When the item is a snippet *– typically green*.

    Properties:
    `content_margin`
      A margin that is added around the `kind_label`.


                                                                (build-4050)
0. `kind_label`

     A label showing a single unicode character, contained within the
    `kind_container`.

    *This element is also used in the `quick_panel` for Goto Symbol and Goto
    Symbol in Project. A `parents` key should be used to distinguish the two
    uses.*

    Properties: font properties

    *The `rem` root font size is based on the font size of the editor control
    the auto complete window is being shown for.*


                                                                (build-4050)
0. `trigger_container`

     A container around the `auto_complete_label`.

    Properties: 
    `content_margin`
      A margin that is added around the
    `auto_complete_label`.


0. `auto_complete_label`
    Text in a `table_row`.

    Properties:
    filter label properties

    `fg_blend`
     A boolean controlling if the `fg`, `match_fg`, `selected_fg`, and
    `selected_match_fg` values should be blended onto the foreground
    color from the color scheme of the current view.

                                                                (build-4073)
0. `auto_complete_label auto_complete_hint`
     The “annotation” hint displayed at the right-hand-side of a `table_row`.

    Properties: font properties

    *The `rem` root font size is based on the font size of the editor
    control the auto complete window is being shown for.*



    `fg_blend`
     A boolean controlling if the `color` value should be blended onto the
    foreground color from the color scheme of the current view.


                                                                (build-4050)
0. `auto_complete_detail_pane`

     A detail pane displayed below the list of auto complete items, containing
    the `auto_complete_info` spacer, with `auto_complete_kind_name_label`
    and `auto_complete_details` inside.

    Properties: 
    `content_margin`
      A margin that is added around the child controls.


                                                                (build-4050)
0. `auto_complete_info`

     Provides spacing between `auto_complete_kind_name_label` and
    `auto_complete_details`.

    Properties: 
    `spacing`
     An integer number of pixels between each contained control.


                                                                (build-4050)
0. `auto_complete_kind_name_label`

     A label used to display the name of the auto complete kind.

    Properties: font properties

    *The `rem` root font size is based on the font size of the editor
    control the auto complete window is being shown for.*

    styled label properties


                                                                (build-4050)
0. `auto_complete_details`

     A single-line HTML control used to display the details of the auto complete
    item.

    Properties: 
    `font.face`
     The name of the font face.

    `font.size`
      The font size - * the `rem` root font size is based on
    the font size of the editor control the auto complete window is being
    shown for*.

    `color`
      A color value to use for the text.

    `link_color`
      A color value to use for links.

    `monospace_color`
      A color value to use for monospace text.

    `monospace_background_color`
      A color value to use for the background of monospace text.


#### ✋ Panels🔗

0. `panel_control find_panel`
     The container for the Find and Incremental Find panels.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control replace_panel`
     The container for the Replace panel.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control find_in_files_panel`
     The container for the Find in Files panel.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control input_panel`
     The container for the input panel, which is available via the API and used
    for things like file renaming.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control console_panel`
     The container for the Console.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control output_panel`
     The container for the output panel, which is available via the API and used
    for build results.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_control switch_project_panel`
     The container for the input in the Switch Project window.

    Properties: 
    `content_margin`
      The margin around the panel contents.

0. `panel_grid_control`
     The layout grid used to position inputs on the various panels.

    Properties: 
    `inside_spacing`
     An integer padding to place between each cell of the grid.

    `outside_vspacing`
     An integer padding to place above and below the grid.

    `outside_hspacing`
     An integer padding to place to the left and right of the grid.

    `panel_close_button`
     The button to close the open panel

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

#### ✋ Status Bar🔗

0. `status_bar`

    Attributes: `panel_visible`
     When a panel is displayed above the status bar

    Properties:
    `content_margin`
    The margin around the `sidebar_button_control`,
    `status_container` and `status_buttons`s.

                                                                (build-4050)
0. `panel_button_control`

     The panel switcher button on the left side of the status bar.

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.


                                                                (build-4050)
0. `sidebar_button_control`

     The sidebar/panel switcher button on the left side of the status bar.

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.


0. `status_container`
     The area that contains the current status message.

    Properties: 
    `content_margin`
      The margin around the status message.

0. `status_button`
     The status buttons that display, and allow changing, the indentation,
    syntax, encoding and line endings.

    Properties: 
    `content_margin`
      For buttons, the margin specifies the dimensions.

    `min_size`
     An array of two integers specifying the minimum width and height of a
    button, in DIPs.

                                                                (build-3181)
0. `vcs_status`

     The container holding the `vcs_branch_icon`, `label_control` with the
    current branch name, and `vcs_changes_annotation` control.

    Properties: 
    `content_margin`
      The margin around the contained controls.

    `spacing`
     An integer number of pixels between each contained control.


                                                                (build-3181)
0. `vcs_branch_icon`

     An icon shown to the left of the current branch name.

    Properties: 
    `content_margin`
      For icons, the margin specifies the dimensions.


                                                                (build-3181)
0. `vcs_changes_annotation`

     Displays the number of files that have been added, modified or deleted.

    Properties: font properties

    styled label properties




#### ✋ Dialogs🔗

0. `dialog`
    The Indexer Status and Update windows both use this class for the window
    background.

0. `progress_bar_control`
    The progress bar container. The progress bar is displayed in the Update
    window used for updates on Mac and Windows.

0. `progress_gauge_control`
    The bar representing the progress completed so far.

    Properties: 
    `content_margin`
      The margin specifies the height of the bar.

#### ✋ Scroll Bars🔗

0. `scroll_area_control`
    The scroll area contains the element being scrolled, along with the bar,
    track and puck.
     Attributes:
                                                                (build-3186)
    `scrollable`
     When the control can be scrolled vertically.

                                                                (build-3186)
    `hscrollable`
     When the control can be scrolled horizontally.

    Properties:
    `content_margin`
    A margin that is added around the content being
    scrolled.

    `overlay`
    Sets the scroll bars to be rendered on top of the content.

    `left_shadow`
    A color value to use when drawing a shadow to indicate the
    area can be scrolled to the left.

    `left_shadow_size`
    An integer of the width of the shadow to draw when the area can be
    scrolled to the left.

    `top_shadow`
    A color value to use when drawing a shadow to indicate the
    area can be scrolled to the top.

    `top_shadow_size`
    An integer of the height of the shadow to draw when the area can be
    scrolled to the top.

    `right_shadow`
    A color value to use when drawing a shadow to indicate the
    area can be scrolled to the right.

    `right_shadow_size`
    An integer of the width of the shadow to draw when the area can be
    scrolled to the right.

    `bottom_shadow`
    A color value to use when drawing a shadow to indicate the
    area can be scrolled to the bottom.

    `bottom_shadow_size`
    An integer of the height of the shadow to draw when the area can be
    scrolled to the bottom.

0. `scroll_bar_control`
    The scroll bar contains the scroll track. The tint is set based on the
    background color of the element being scrolled.
    Attributes: `dark`
    When the scroll area content is dark, necessitating a light scroll bar.

    `horizontal`
    When the scroll bar should be horizontal instead of vertical.

    Properties:
    texture tinting properties

    `content_margin`
    A margin that is added around the scroll track.

0. `scroll_track_control`
    The track that the puck runs along. The tint is set based on the background
    color of the element being scrolled.
    Attributes: `dark`
    When the scroll area content is dark, necessitating a light scroll bar.

    `horizontal`
    When the scroll bar should be horizontal instead of vertical.

    Properties:
    texture tinting properties

0. `scroll_corner_control`
    The dead space in the bottom right of a `scroll_area_control` when both
    the vertical and horizontal scroll bars are being shown.
    Attributes: `dark`
    When the scroll area content is dark, necessitating a light scroll bar.

    Properties:
    texture tinting properties

0. `puck_control`
    The scroll puck, or handle. The tint is set based on the background color of
    the element being scrolled.
    Attributes: `dark`
    When the scroll area content is dark, necessitating a light scroll bar.

    `horizontal`
    When the scroll bar should be horizontal instead of vertical.

    Properties:
    texture tinting properties

#### ✋ Inputs🔗

0. `text_line_control`
    The text input used by the Quick Panel, Find, Replace, Find in Files and
    Input panels.

    Properties: 
    `content_margin`
    The margin around the text.

    `color_scheme_tint`
    A color value to use to tint the background of the color scheme.

    `color_scheme_tint_2`
    A color value to use to add a secondary tint to the
    background of the color scheme.

0. `dropdown_button_control`
    The button to close the open panel.

    Properties: 
    `content_margin`
    For buttons, the margin specifies the dimensions.

#### ✋ Buttons🔗

0. `button_control`
    Text buttons.
    Attributes: `pressed`
    Set when a button is pressed down.

    Properties:
    `min_size`
    An array of two integers specifying the minimum width and height of a
    button, in DIPs.

0. `icon_button_group`
    A grid controlling the spacing of related icon buttons.

    Properties: no layer support

    `spacing`
    An integer number of pixels between each button in the group.

    Small icon-based buttons in the Find, Find in Files, and Replace panels

    Attributes: `selected`
    When an icon button is toggled on.

    `left`
    When the button is the left-most button in a group.

    `right`
    When the button is the right-most button in a group.

0. `icon_regex`
    The button to enable regex mode in the Find, Find in Files and Replace
    panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_case`
    The button to enable case-sensitive mode in the Find, Find in Files and
    Replace panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_whole_word`
    The button to enable whole-word mode in the Find, Find in Files and Replace
    panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_wrap`
    The button to enable search wrapping when using the Find and Replace
    panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_in_selection`
    The button to only search in the selection when using the Find and Replace
    panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_highlight`
    The button to enable highlighting all matches in the Find and Replace
    panels.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_preserve_case`
    The button to enable preserve-case mode when using the Replace panel.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_context`
    The button to show context around matches when using the Find in Files
    panel.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

0. `icon_use_buffer`
    The button to display results in a buffer, instead of an output panel, when
    using the Find in Files panel.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.

                                                                (build-4073)
0. `icon_use_gitignore`
    The button to toggle using .gitignore to filter files in the Find in
    Files panel.

    Properties: 
    `content_margin`
    For icons, the margin specifies the dimensions.


#### ✋ Labels🔗

0. `label_control`
    Labels are shown in the Find, Replace, Find in File and Input panels.
    Additionally, labels are used in the Update window, on textual buttons and
    for the text in the `status_container`.

    *Targeting specific labels can be accomplished by using the `"parents"`
    key.*

    Properties: font properties

0. `title_label_control`
    The title label is used in the About window.

    Properties: font properties

#### ✋ Tool Tips🔗

0. `tool_tip_control`
    Tool tips shown when hovering over tabs and buttons.

    Properties: 
    `content_margin`
    The margin around the tool tip text.

0. `tool_tip_label_control`
    Text shown in a tool tip

    Properties: font properties

### 🐣2.12 Deprecated🔗

#### ✋ Color Values🔗

Before build 3127, the only way to specify opacity in colors was by using a
4-element array containing all integers from `0` to `255`. The
fourth element controlled the opacity, such that `0` was fully
transparent and `255` was fully opaque. The preferred format is now to
use a float from `0.0` to `1.0`.

### 🐣2.13 Obsolete🔗

As the UI of Sublime Text has adapted over time, certain elements and properties
are no longer applicable or supported.

#### ✋ Elements🔗

                                                                (build-4050)
The `panel_button_control` element was removed from the status bar and
replaced by `sidebar_button_control`.


The `sheet_container_control` element is never visible to users in recent
versions of Sublime Text.

An element named `icon_reverse` used to exist in the find panel to control if
searching would move forward or backwards in the view. This is now controlled
by the *Find* and *Find Prev* buttons.

The element named `quick_panel_score_label` is no longer present in the Goto
Anything quick panel.

#### ✋ Properties🔗

The `blur` property used to be supported to blur the pixel data behind an
element, however it is not currently supported for implementation reasons.

### 🐣2.14 Customization🔗

Users can customize a theme by creating a file with new rules that will be
appended to the original theme definition.

To create a user-specific customization of a theme, create a new file with the
same filename as the theme, but save it in the Packages/User/
directory.

For example, to customize the Default theme, create a file
named Packages/User/Default.sublime-theme. Adding the following rules
to that file will increase the size of the text in the sidebar.

```json
[
    {
        "class": "sidebar_heading",
        "font.size": 15,
    },
    {
        "class": "sidebar_label",
        "font.size": 14
    }
]
```

## 3. 🖐 Menus
https://www.sublimetext.com/docs/menus.html

## 4. 🖐 API Environments
https://www.sublimetext.com/docs/api_environments.html



Plugins in Sublime Text are Python files located in the root of a package. The following document describes the Python environment the plugins are run in.

1. Overview
2. Python Version
3. Selecting the Python Version   4050
4. Modules
5. Pre-Installed Packages  4050

### 🍀 Overview 🔗

Sublime Text runs plugins in a separate process from the main editor UI. This
process runs an executable named `plugin_host`.

Running plugins in a separate process ensures the entire editor will not crash
due to a poorly written plugin. If a plugin does cause the `plugin_host`
to crash, a user may still save their work before re-starting Sublime Text.

All plugins are run in a single `plugin_host` process, and share a single
Python environment. Each plugin is loaded as a sub-module of a module named
after the package. For example, a plugin in the
file `MyPackage/my_plugin.py` will be loaded as the Python module
`MyPackage.my_plugin`.

The `plugin_host` process contains an embedded version of the Python
programming language, and exposes an API to plugins.
The `plugin_host` executable always uses its own embedded version of
Python, even if the end-user has Python installed on their machine.

### 🍀 Python Version 🔗

By default all plugins are run using Python 3.3.6, except inside the
`User` package which always uses the latest python. Sublime Text‘s build
of Python 3.3.6 includes a handful of patches backported from Python 3.4 to fix
issues with unicode paths and crashes with the `ctypes` module on 64bit
versions of Windows.

Starting in build 4050, plugins may also be run using Python 3.8. Python 3.8
features many improvements to the language, better performance and
continued support and bug fixes from the Python Software Foundtion.
4050

### 🍀 Selecting the Python Version 🔗

To provide for backward compatibility, Sublime Text 4050 will continue to run
all plugins using Python 3.3.

Any package that wishes to use Python 3.8 must create a file
named `.python-version` in the root of the packages. This file should
contain either the text `3.3` or `3.8` to select the version of Python to
use. If a file named `.python-version` is not present, or it contains
any value other than `3.8`, then Python 3.3 will be used.

All plugins in a package will use the same version of Python. Any package with
a `.python-version` file containing `3.8` loaded in older builds of
Sublime Text will try to run the plugins using Python 3.3.   4050

### 🍀 Modules 🔗

The Python environment within `plugin_host` contains all of the modules in
https://docs.python.org/3.3/library/ The Python Standard Library, except for:

    audioop
    crypt (Not on Linux)
    curses
    cProfile (Not on Linux)     4050
    fpectl                 4050   3.3
    readline
    lzma                   4050   3.3
    msilib
    nis
    ossaudiodev
    resource              4050   3.3
    spwd
    syslog
    test
    tkinter
    turtle
    wave

### 🍀 Pre-Installed Packages 🔗

The following the packages are pre-installed in both the Python 3.3 and 3.8 environments:

https://pypi.org/project/certifi/ 
certifi: A collection of SSL root certs for use with urllib      4050


## 5. 🖐 API Reference
https://www.sublimetext.com/docs/api_reference.html

## 6. 🖐 Syntax Definitions
https://www.sublimetext.com/docs/syntax.html

Sublime Text can use both .sublime-syntax and .tmLanguage files for syntax highlighting. This document describes .sublime-syntax files.

1. Overview
2. Header
3. Contexts 
3.1. Meta Patterns
3.2. Match Patterns
3.3. Include Patterns
3.4. Prototype Context
4. Including Other Files
5. Variables
6. Inheritance   4075
7. Selected Examples
8. Testing
9. Compatibility   4075

### 🍀 Overview🔗
Sublime Syntax files are YAML files with a small header, followed by a list of contexts. Each context has a list of patterns that describe how to highlight text in that context, and how to change the current text. http://yaml.org/

Here’s a small example of a syntax file designed to highlight C.

```yaml
%YAML 1.2
---
name: C
file_extensions: [c, h]
scope: source.c

contexts:
  main:
    - match: \b(if|else|for|while)\b
      scope: keyword.control.c
```

At its core, a syntax definition assigns scopes (e.g., `keyword.control.c`) to areas of the text. These scopes are used by color schemes to highlight the text.

This syntax file contains one context, `main`, that matches the words `[if, else, for, while]`, and assigns them the scope `keyword.control.c`. The context name `main` special: every syntax must define a main context, as it will be used at the start of the file.

The `match` key is a regex, supporting features from the Oniguruma regex engine. In the above example, `\b` is used to ensure only word boundaries are matched, to ensure that words such as elsewhere are not considered keywords.
https://raw.githubusercontent.com/kkos/oniguruma/v6.9.1/doc/RE

Note that due to the YAML syntax, tab characters are not allowed within `.sublime-syntax` files.

### 🍀 Header🔗
The allowed keys in the header area are:

name
    This defines the name shown for the syntax in the menu. It’s optional, and will be derived from the file name if not used.

file_extensions
    A list of strings, defining file extensions this syntax should be used for. Extensions listed here will be shown in file dialog dropdowns on some operating systems.

    If a file does not have a basename, e.g. .gitignore, the entirety of the filename including the leading . should be specified.

hidden_file_extensions   4075
    A list of strings, also defining file extensions this syntax should be used for. These extensions are not listed in file dialogs.

first_line_match
    When a file is opened without a recognized extension, the first line of the file contents will be tested against this regex, to see if the syntax should be applied.

scope
    The default scope assigned to all text in the file

version   4075
    An integer, either 1 or 2, that controls backwards compatibility. New syntaxes should target 2, as it fixes some inconsistencies in how scopes are applied.

extends   4075
    A string of a base syntax this syntax should inherit from. The base syntax must be specified using its package path, e.g. Packages/JavaScript/JavaScript.sublime-syntax. See Inheritance for an overview of syntax inheritance.

hidden
    Hidden syntax definitions won’t be shown in the menu, but can still be assigned by plugins, or included by other syntax definitions.

### 🍀 Contexts🔗
For most languages, you’ll need more than one context. For example, in C, we don’t want a for word in the middle of a string to be highlighted as a keyword. Here’s an example of how to handle this:

```yaml
%YAML 1.2
---
name: C
file_extensions: [c, h]
scope: source.c

contexts:
  main:
    - match: \b(if|else|for|while)\b
      scope: keyword.control.c
    - match: '"'
      push: string

  string:
    - meta_scope: string.quoted.double.c
    - match: \\.
      scope: constant.character.escape.c
    - match: '"'
      pop: true
```

A second pattern has been added to the main context that matches a double quote character (note that `'"'` is used for this, as a standalone quote would be a YAML syntax error), and pushes a new context, `string`, onto the context stack. This means the rest of the file will be processing using the `string` context, and not the main context, until the `string` context is popped off the stack.

The `string` context introduces a new key: meta_scope. This will assign the `string.quoted.double.c `scope to all text while the `string` context is on the stack.

While editing in Sublime Text, you can check what scopes have been applied to the text under the caret by pressing Ctrl+Shift+P (Mac) or Ctrl+Alt+Shift+P (Windows/Linux).

The `string` context has two patterns: the first matches a backslash character followed by any other, and the second matches a quote character. Note that the last pattern specifies an action when an unescaped quote is encountered, the `string` context will be popped off the context stack, returning to assigning scopes using the main context.

When a context has multiple patterns, the leftmost one will be found. When multiple patterns match at the same position, the first defined pattern will be selected.

### 🍀 META PATTERNS🔗

meta_scope
    This assigns the given scope to all text within this context, including the patterns that push the context onto the stack and pop it off.

meta_content_scope
    As above, but does not apply to the text that triggers the context (e.g., in the above string example, the content scope would not get applied to the quote characters).

meta_include_prototype
    Used to stop the current context from automatically including the `prototype` context.

clear_scopes
    This setting allows removing scope names from the current stack. It can be an integer, or the value `true` to remove all scope names. It is applied before `meta_scope` and `meta_content_scope`. This is typically only used when one syntax is embedding another.

meta_prepend   4075
    A boolean, controlling context name conflict resolution during inheritance. If this is specified, the rules in this context will be inserted before any existing rules from a context with the same name in an ancestor syntax definition.

meta_append   4075
    A boolean, controlling context name conflict resolution during inheritance. If this is specified, the rules in this context will be inserted after to any existing rules from a context with the same name in an ancestor syntax definition.

Meta patterns must be listed first in the context, before any match or include patterns.

### 🍀 MATCH PATTERNS🔗
A match pattern can include the following keys:

match
    The regex used to match against the text. YAML allows many strings to be written without quotes, which can help make the regex clearer, but it’s important to understand when you need to quote the regex. If your regex includes the characters #, :, -, {, [ or > then you likely need to quote it. Regexes are only ever run against a single line of text at a time.

scope
    The scope assigned to the matched text.

captures
    A mapping of numbers to scope, assigning scopes to captured portions of the match regex. See below for an example.

push
    The contexts to push onto the stack. This may be either a single context name, a list of context names, or an inline, anonymous context.

pop
    Pops contexts off the stack. The value `true` will pop a single context.

    An integer greater than zero will pop the corresponding number of contexts. 4050

    The pop key can be combined with `push`, `set`, `embed` and `branch`. When combined, the specified number of contexts will be popped off of the stack before the other action is performed. For `push`, `embed` and `branch` actions, the pop treats the match as if it were a lookahead, which means the match will not receive the `meta_scope` of the contexts that are popped.  4075

set
    Accepts the same arguments as push, but will first pop this context off, and then push the given context(s) onto the stack.

    Any match will receive the meta_scope of the context being popped and the context being pushed.

embed   3153
    Accepts the name of a single context to push into. While similar to `push`, it pops out of any number of nested contexts as soon as the `escape` pattern is found. This makes it an ideal tool for embedding one syntax within another.

    escape
        This key is required if `embed` is used, and is a regex used to exit from the embedded context. Any backreferences in this pattern will refer to capture groups in the match regex.

    embed_scope
        A scope assigned to all text matched after the `match` and before the `escape`. Similar in concept to `meta_content_scope`.

    escape_captures
        A mapping of capture groups to scope names, for the `escape` pattern. Use capture group 0 to apply a scope to the entire escape match.

branch  4050
    Accepts the names of two or more contexts, which are attempted in order. If a `fail` action is encountered, the highlighting of the file will be restarted at the character where the `branch` occurred, and the next context will be attempted.

    branch_point
        This is the unique identifier for the `branch` and is specified when a match uses the `fail` action.

    The `branch` action allows for handling syntax constructs that are ambiguous, and also allows handling constructs that span multiple lines.

    For ideal performance, the contexts should be listed in the order of how likely they are to be accepted. Note: because highlighting with branches requires reprocessing an entire branch upon each change to the document, the highlighting engine will not rewind more than 128 lines when a fail occurs.

fail  4050
    Accepts the name of a branch_point to rewind to and retry the next context of. If a fail action specifies a branch_point that was never pushed on the stack, or has already been popped off of the stack, it will have no effect.

    The following keys control behavior that is exclusive, and only one can be specified per match pattern:

push
pop  <4075
set
embed  3153
branch  4050
fail   4050


### 🍀 MATCH EXAMPLES🔗
A basic match assigning a single scope to the entire match:

```yaml
- match: \w+
  scope: variable.parameter.c++
```

Assigning different scopes to the regex capture groups:

```yaml
- match: ^\\s*(#)\\s*\\b(include)\\b
  captures:
    1: meta.preprocessor.c++
    2: keyword.control.include.c++
```

Pushing into another context named function-parameters:

```yaml
- match: \b\w+(?=\()
  scope: entity.name.function.c++
  push: function-parameters
```

Popping out of a context:

```yaml
    - match: \)

  scope: punctuation.section.parens.end.c++
  pop: true
```

Popping out of the current context and pushing into another:

```yaml
- match: \}
  scope: punctuation.section.block.end.c++
  set: file-global
```

Embedding another syntax  3153

```yaml
- match: (```)(js|javascript)
  captures:
    1: punctuation.section.code.begin.markdown
    2: constant.other.markdown
  embed: scope:source.js
  embed_scope: meta.embedded.js.markdown
  escape: ^```
  escape_captures:
    0: punctuation.section.code.end.markdown
```

Using branch to attempt one highlighting, with the ability to fallback to another:  4050

```yaml
expression:
  - match: (?=\()
    branch_point: open_parens
    branch:
      - paren_group
      - arrow_function

paren_group:
  - match: \(
    scope: punctuation.section.parens.begin.js
    push:
      - include: expressions
      - match: \)
        scope: punctuation.section.parens.begin.js
        set:
          - match: =>
            fail: open_parens
          - match: (?=\S)
            pop: 2

arrow_function:
  - match: \(
    scope: punctuation.section.parens.begin.js
    push:
      - match: \w+
        scope: variable.parameter.js
      - match: ','
        scope: punctuation.separator.comma.js
      - match: \)
        scope: punctuation.section.parens.begin.js
        set:
          - match: =>
            scope: storage.type.function.arrow.js
            push: arrow_function_body
```

Using pop with another action:  4075

```yaml
paragraph:
  - match: '(```)(py|python)'
    captures:
      1: punctuation.definition.code.begin.md
      2: constant.other.language-name.md
    pop: 1
    embed: scope:source.python
    embed_scope: source.python.embedded
    escape: ^```
    escape_captures:
      0: punctuation.definition.code.end.md
```

### 🍀 INCLUDE PATTERNS🔗
Frequently it’s convenient to include the contents of one context within another. For example, you may define several different contexts for parsing the C language, and almost all of them can include comments. Rather than copying the relevant match patterns into each of these contexts, you can include them:

```yaml
expr:
  - include: comments
  - match: \b[0-9]+\b
    scope: constant.numeric.c
  ...
```

Here, all the match patterns and include patterns defined in the comments context will be pulled in. They’ll be inserted at the position of the include pattern, so you can still control the pattern order. Any meta patterns defined in the comments context will be ignored.

### 🍀 INCLUDING AN EXTERNAL PROTOTYPE🔗
When including a context from another syntax, it may be desirable to also include any applicable prototype from that syntax. By default, an include pattern does not include such a prototype. If the key/value pair `apply_prototype: true` is added to the include pattern, the context does not specify `meta_include_prototype: false` and the other syntax has a `prototype` context, then those patterns will also be included.

```yaml
tags:
  - include: scope:source.html.basic
    apply_prototype: true
```

### 🍀 PROTOTYPE CONTEXT🔗
With elements such as comments, it’s so common to include them that it’s simpler to make them included automatically in every context, and just list the exceptions instead. You can do this by creating a context named prototype, it will be included automatically at the top of every other context, unless the context contains the meta_include_prototype key. For example:

```yaml
prototype:
  - include: comments

string:
  - meta_include_prototype: false
  ...
```

In C, a /* inside a string does not start a comment, so the string context indicates that the prototype should not be included.

### 🍀 Including Other Files🔗
Sublime Syntax files support the notion of one syntax definition including another. For example, HTML can contain embedded JavaScript. Here’s an example of a basic syntax definition for HTML that does so:

```yaml
scope: text.html

contexts:
  main:
    - match: <script>
      push: Packages/JavaScript/JavaScript.sublime-syntax
      with_prototype:
        - match: (?=</script>)
          pop: true
    - match: "<"
      scope: punctuation.definition.tag.begin
    - match: ">"
      scope: punctuation.definition.tag.end
```

Note the first rule above. It indicates that when we encounter a `<script>` tag, the main context within `JavaScript.sublime-syntax` should be pushed onto the context stack. It also defines another key, `with_prototype`. This contains a list of patterns that will be inserted into every context defined within `JavaScript.sublime-syntax`. Note that `with_prototype` is conceptually similar to the prototype context, however it will be always be inserted into every referenced context irrespective of their `meta_include_prototype` key.

In this case, the pattern that’s inserted will pop off the current context while the next text is a `</script>` tag. Note that it doesn’t actually match the `</script>` tag, it’s just using a lookahead assertion, which plays two key roles here: It both allows the HTML rules to match against the end tag, highlighting it as-per normal, and it will ensure that all the JavaScript contexts will get popped off. The context stack may be in the middle of a JavaScript string, for example, but when the `</script>` is encountered, both the JavaScript string and main contexts will get popped off.

Note that while Sublime Text supports both .`sublime-syntax` and `.tmLanguage` files, it’s not possible to include a .tmLanguage file within a `.sublime-syntax` one.

Another common scenario is a templating language including HTML. Here’s an example of that, this time with a subset of Jinja:

```yaml
scope: text.jinja
contexts:
  main:
    - match: ""
      push: "Packages/HTML/HTML.sublime-syntax"
      with_prototype:
        - match: "{{"
          push: expr

  expr:
    - match: "}}"
      pop: true
    - match: \b(if|else)\b
      scope: keyword.control
```

This is quite different from the HTML-embedding-JavaScript example, because templating languages tend to operate from the inside out: by default, it needs to act as HTML, only escaping to the underlying templating language on certain expressions.

In the example above, we can see it operates in HTML mode by default: the main context includes a single pattern that always matches, consuming no text, just including the HTML syntax.

Where the HTML syntax is included, the Jinja syntax directives `{ { ... }}` are included via the `with_prototype` key, and thus get injected into every context in the HTML syntax (and JavaScript, by transitivity).

### 🍀 Variables🔗
It’s not uncommon for several regexes to have parts in common. To avoid repetitious typing, you can use variables:

```yaml
variables:
  ident: '[A-Za-z_][A-Za-z_0-9]*'
contexts:
  main:
    - match: '\b{{ident}}\b'
      scope: keyword.control
```

Variables must be defined at the top level of the `.sublime-syntax` file, and are referenced within regexes via `{{varname}}`. Variables may themselves include other variables. Note that any text that doesn’t match `{{[A-Za-z0-9_]+}}` won’t be considered as a variable, so regexes can still include literal `{{` characters, for example.

### 🍀 Inheritance🔗
In situations where a syntax is a slight variant of another, with some additions or changes, inheritance is a useful tool.

When inheriting a syntax, the key extends is used with a value containing the packages path to the parent syntax. The packages path will start with Packages/ and will contain the package name and syntax filename. For example:

```yaml
%YAML 1.2
---
name: C++
file_extensions: [cc, cpp]
scope: source.c++
extends: Packages/C++/C.sublime-syntax
```

A syntax using inheritance will inherit the variables and contexts values from its parent syntax. All other top-level keys, such as file_extensions and scope will not be inherited.

### 🍀 VARIABLE INHERITANCE🔗
When extending a syntax, the variables key is merged with the parent syntax. Variables with the same name will override previous values.

Variable substitution is performed after all variable values have been realized. Thus, an extending syntax may change a variable from a parent syntax, and all usage of the variable in the parent contexts will use the overridden value.

### 🍀 CONTEXT INHERITANCE🔗
The contexts in an extending syntax will be a combination of the contexts from the parent syntax, and all those defined under the contexts key.

Contexts with the same name will override contexts from the parent syntax. To change the behavior when a context name is duplicated, two options are available. These meta key must be specified in the extending syntax:

- meta_prepend: true — all of the patterns in the extending syntax will be inserted before those in the parent syntax.

- meta_append: true — all of the patterns in the extending syntax will be inserted after those in the parent syntax.

### 🍀 MULTIPLE INHERITANCE🔗
When a syntax is derived from a combination of two other syntaxes, multiple inheritance may be used. This allows the key extends to be a list of packages paths to two or more parent syntaxes. The parent syntaxes will be processed in order, from top to bottom, and must be derived from the same base.

Two examples of multiple inheritance in the default syntaxes are:

Objective-C++: extends C++ and Objective-C, both which extend C
TSX: extends JSX and TypeScript, both which extend JavaScript   4086


### 🍀 LIMITATIONS🔗
A syntax may extend a syntax that itself extends another syntax. There are no enforced limits on extending, other than that all syntaxes must share the same version.  4075


### 🍀 Selected Examples🔗
### 🍀 BRACKET BALANCING🔗
This example highlights closing brackets without a corresponding open bracket:

```yaml
name: C
scope: source.c

contexts:
  main:
    - match: \(
      push: brackets
    - match: \)
      scope: invalid.illegal.stray-bracket-end

  brackets:
    - match: \)
      pop: true
    - include: main
```

### 🍀 SEQUENTIAL CONTEXTS🔗
This example will highlight a C style for statement containing too many semicolons:

```yaml
for_stmt:
  - match: \(
    set: for_stmt_expr1
for_stmt_expr1:
  - match: ";"
    set: for_stmt_expr2
  - match: \)
    pop: true
  - include: expr
for_stmt_expr2:
  - match: ";"
    set: for_stmt_expr3
  - match: \)
    pop: true
  - include: expr
for_stmt_expr3:
  - match: \)
    pop: true
  - match: ";"
    scope: invalid.illegal.stray-semi-colon
  - include: expr
```
  
### 🍀 ADVANCED STACK USAGE🔗
In C, symbols are often defined with the typedef keyword. So that Goto Definition can pick these up, the symbols should have the entity.name.type scope attached to them.

Doing this can be a little tricky, as while typedefs are sometimes simple, they can get quite complex:

typedef int coordinate_t;

typedef struct
{
    int x;
    int y;
} point_t;
To recognize these, after matching the typedef keyword, two contexts will be pushed onto the stack: the first will recognize a typename, and then pop off, while the second will recognize the introduced name for the type:

main:
  - match: \btypedef\b
    scope: keyword.control.c
    set: [typedef_after_typename, typename]

typename:
  - match: \bstruct\b
    set:
      - match: "{"
        set:
          - match: "}"
            pop: true
  - match: \b[A-Za-z_][A-Za-z_0-9]*\b
    pop: true

typedef_after_typename:
  - match: \b[A-Za-z_][A-Za-z_0-9]*\b
    scope: entity.name.type
    pop: true
In the above example, typename is a reusable context, that will read in a typename and pop itself off the stack when it’s done. It can be used in any context where a type needs to be consumed, such as within a typedef, or as a function argument.

The main context uses a match pattern that pushes two contexts on the stack, with the rightmost context in the list becoming the topmost context on the stack. Once the typename context has popped itself off, the typedef_after_typename context will be at the top of the stack.

Also note above the use of anonymous contexts for brevity within the typename context.

### 🍀 PHP HEREDOCS🔗
This example shows how to match against Heredocs in PHP. The match pattern in the main context captures the heredoc identifier, and the corresponding pop pattern in the heredoc context refers to this captured text with the \1 symbol:

name: PHP
scope: source.php

contexts:
  main:
    - match: <<<([A-Za-z][A-Za-z0-9_]*)
      push: heredoc

  heredoc:
    - meta_scope: string.unquoted.heredoc
    - match: ^\1;
        pop: true
### 🍀 Testing🔗
When building a syntax definition, rather than manually checking scopes with the show_scope_name command, you can define a syntax test file that will do the checking for you:

// SYNTAX TEST "Packages/C/C.sublime-syntax"
#pragma once
// <- source.c meta.preprocessor.c++
 // <- keyword.control.import

// foo
// ^ source.c comment.line
// <- punctuation.definition.comment

/* foo */
// ^ source.c comment.block
// <- punctuation.definition.comment.begin
//     ^ punctuation.definition.comment.end

#include "stdio.h"
// <- meta.preprocessor.include.c++
//       ^ meta string punctuation.definition.string.begin
//               ^ meta string punctuation.definition.string.end
int square(int x)
// <- storage.type
//  ^ meta.function entity.name.function
//         ^ storage.type
{
    return x * x;
//  ^^^^^^ keyword.control
}

"Hello, World! // not a comment";
// ^ string.quoted.double
//                  ^ string.quoted.double - comment
To make one, follow these rules

Ensure the file name starts with syntax_test_.

Ensure the file is saved somewhere within the Packages directory: next to the corresponding .sublime-syntax file is a good choice.

Ensure the first line of the file starts with: <comment_token> SYNTAX TEST "<syntax_file>". Note that the syntax file can either be a .sublime-syntax or .tmLanguage file.

Once the above conditions are met, running the build command with a syntax test or syntax definition file selected will run all the Syntax Tests, and show the results in an output panel. Next Result (F4) can be used to navigate to the first failing test.

Each test in the syntax test file must first start the comment token (established on the first line, it doesn’t actually have to be a comment according to the syntax), and then either a ^ or <- token.

The two types of tests are:

Caret: ^ this will test the following selector against the scope on the most recent non-test line. It will test it at the same column the ^ is in. Consecutive ^s will test each column against the selector.

Arrow: <- this will test the following selector against the scope on the most recent non-test line. It will test it at the same column as the comment character is in.

### 🍀 Compatibility🔗
When the syntax highlighting engine of Sublime Text requires changes that will break existing syntaxes, these modifications or bug fixes are gated behind the version key.

Currently there exist two versions: 1 and 2. The absence of the version key indicates version 1.

The following is a list of bugs and behavior preserved in version 1 that have been fixed or changed in version 2. This list is primarily useful when understanding what to look for when updating the version of syntax.

#### 🐣 embed_scope Stacks with scope of Other Syntax

Description:

When embedding a the main context from another syntax, the embed_scope will be combined with the scope of the other syntax. In version 2 syntaxes, the scope of the other syntax will only be included if embed_scope is not specified.

Syntax 1:

```sh
scope: source.lang
contexts:
  paragraph:
    - match: \(
      scope: punctuation.section.group.begin
      embed: scope:source.other
      embed_scope: source.other.embedded
      escape: \)
      escape_captures:
        0: punctuation.section.group.end
```

Syntax 2:

```sh
scope: source.other
contexts:
  main:
    - match: '[a-zA-Z0-9_]+'
      scope: identifier
```

Text:

    'abc'

Result:

The text abc will get the scope source.other.embedded source.other identifier in version 1 syntaxes. In version 2 syntaxes, it will get source.other.embedded identifier.

#### 🐣 Match Pattern with set and meta_content_scope

Description:

When performing a set action on a match, the matched text will get the meta_content_scope of the context being popped, even though pop actions don’t, and a set is the equivalent of a pop then push.

Syntax:

scope: source.lang
contexts:
  function:
    - meta_content_scope: meta.function
    - match: '[a-zA-Z0-9_]+'
      scope: variable.function
    - match: \(
      scope: punctuation.section.group.begin
      set: function-params

  function-params:
    - meta_scope: meta.function.params
    - match: \)
      scope: punctuation.section.group.end
      pop: true
Text:

    abc()

Result:

The text ( should get the scope meta.function.params punctuation.section.group.begin. Instead it gets the incorrect scope meta.function meta.function.params punctuation.section.group.begin.

#### 🐣 Match Pattern with set and Target with clear_scopes

Description:

If a set action has a target with a clear_scopes value, scopes will not be cleared properly.

Syntax:

scope: source.lang
contexts:
  main:
    - match: \bdef\b
      scope: keyword
      push:
        - function
        - function-name

  function:
    - meta_scope: meta.function

  function-name:
    - match: '[a-zA-Z0-9_]+'
      scope: variable.function
    - match: \(
      scope: punctuation.section.group.begin
      set: function-params

  function-params:
    - meta_scope: meta.function.params
    - clear_scopes: 1
    - match: \)
      scope: punctuation.section.group.end
      pop: 2
Text:

    def abc()

Result:

The text ( should get the scope meta.function.params punctuation.section.group.begin. Instead it gets the incorrect scope meta.function meta.function.params punctuation.section.group.begin.

#### 🐣 Embed Escape Match and Meta Scopes

Description:

The text matched by the escape pattern of an embed action will not get the meta_scope or meta_content_scope of the context that contains it.

Syntax:

scope: source.lang
contexts:
  context1:
    - meta_scope: meta.group
    - meta_content_scope: meta.content
    - match: \'
      scope: punctuation.begin
      embed: embed
      escape: \'
      escape_captures:
        0: punctuation.end

  embed:
    - match: '[a-z]+'
      scope: word
Text:

    'abc'

Result:

The second ' should get the scope meta.group meta.content punctuation.end. Instead it gets the incorrect scope punctuation.end.

#### 🐣 Multiple Target Push Actions with clear_scopes

Description

If multiple contexts are pushed at once, and more than one context specifies clear_scopes with a value greater than 1, the resulting scopes are incorrect.

Syntax:

scope: source.lang
contexts:
  main:
    - meta_content_scope: meta.main
    - match: '[a-zA-Z0-9]+\b'
      scope: identifier
      push:
        - context2
        - context3

  context2:
    - meta_scope: meta.ctx2
    - clear_scopes: 1

  context3:
    - meta_scope: meta.ctx3
    - clear_scopes: 1
    - match: \n
      pop: true
Text:

    abc 1

Result:

The clear_scopes values of all target contexts are added up and applied before applying the meta_scope and meta_content_scope of any targets. Thus, the text abc will be scoped meta.ctx2 meta.ctx3 identifier, instead of the correct scope of source.lang meta.ctx3 identifier.

#### 🐣 Regex Capture Group Order

Description:

If an lower-numbered capture group matches text that occurs after text matched by a higher-numbered capture group, the lower-numbered capture group will not have its capture scope applied.

Syntax:

```yaml
scope: source.lang
contexts:
  main:
    - match: '(?:(x)|(y))+'
      captures:
        1: identifier.x
        2: identifier.y
```

Text:

    yx

Result

The text y is matched by capture group 2, and the text x is matched by capture group 1. x will not get scoped indentifier.x since it occurs after the match from capture group 2.

## 7. 🖐 Scope Naming
https://www.sublimetext.com/docs/scope_naming.html

## 8. 🖐 minihtml Reference
https://www.sublimetext.com/docs/minihtml.html

## 9. 🖐 Plugin Porting Guide
https://www.sublimetext.com/docs/porting_guide.html



Sublime Text 3 contains some important differences from Sublime Text 2 when it
comes to plugins, and most plugins will require at least a small amount porting
to work. The changes are:

1. Python 3.3
2. Out of Process Plugins
3. Asynchronous Events
4. Restricted begin_edit() and end_edit()
5. Zipped Packages
6. Importing Modules
7. Restricted API Usage at Startup

### 🍀 Python 3.3 🔗
Sublime Text 3 uses Python 3.3, while Sublime Text 2 used Python 2.6.
Furthermore, on Mac, the system build of Python is no longer used, instead
Sublime Text is bundled with its own version. Windows and Linux are also
bundled with their own version, as they were previously.

### 🍀 Out of Process Plugins 🔗
Plugins are now run in a separate process, `plugin_host`. From a plugin
authors perspective, there should be no observable difference, except that a
crash in the plugin host will no longer bring down the main application.

### 🍀 Asynchronous Events 🔗
In Sublime Text 2, only the `set_timeout()` method was thread-safe. In Sublime
Text 3, every API method is thread-safe. Furthermore, there are now
asynchronous event handlers, to make writing non-blocking code easier:


```py
    on_modified_async()
    on_selection_modified_async()
    on_pre_save_async()
    on_post_save_async()
    on_activated_async()
    on_deactivated_async()
    on_new_async()
    on_load_async()
    on_clone_async()
    set_timeout_async()
```
When writing threaded code, keep in mind that the buffer will be changing
underneath you as your function runs.

### 🍀 Restricted `begin_ 🔗edit()` and `end_edit()`
`begin_end()` and `end_edit()` are no longer directly accessible, except in
some special circumstances. The only way to get a valid instance of an
`sublime.Edit` object is to place your code in a `sublime_plugin.TextCommand`
subclass. In general, most code can be refactored by placing the code between
`begin_edit()` and `end_edit()` in a `sublime_plugin.TextCommand`, and then
running the command via `run_command()`.

This approach removes the issue of dangling `sublime.Edit` objects, and ensures
the repeat command and macros work as they should.

### 🍀 Zipped Packages 🔗
Packages in Sublime Text 3 are able to be run from .sublime-package
(i.e., renamed .zip files) files directly, in contrast to Sublime Text
2, which unzipped them prior to running.

While in most changes this should lead to no differences, it is important to
keep this in mind if you are accessing files in your package.

### 🍀 Importing Modules 🔗
Importing other plugins is simpler and more robust in Sublime Text 3, and can be
done with a regular import statement, e.g., `import Default.comment` will
import Packages/Default/Comment.py.

### 🍀 Restricted API Usage at Startup 🔗
Due to the `plugin_host` loading asynchronously, it is not possible to use the
API at import time. This means that all top-level statements in your module
must not call any functions from the `sublime` module. During startup, the API
is in a dormant state, and will silently ignore any requests made.
