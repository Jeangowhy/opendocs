
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
