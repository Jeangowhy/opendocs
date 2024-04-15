#!/usr/bin/env node
/// <reference types="node" />


/*
#!/usr/bin/env -S deno run --allow-read --allow-write

MathJax | Beautiful math in all browsers.
A JavaScript display engine for mathematics that works in all browsers.
No more setup for readers. It just works.

*    https://www.mathjax.org
*    https://github.com/mathjax/mathjax
*    https://github.com/mathjax/MathJax-demos-node
*    https://github.com/mathjax/MathJax-demos-web
*    https://docs.mathjax.org/en/latest/api/index.html

MathJax-node provides API to call MathJax form (AsciiMath MathML TeX) from Node.js.
The API converts individual MathJax into HTML (with CSS), SVG, or MathML.

*    MathJax-node https://github.com/mathjax/MathJax-node
*    Latex/MathML editor https://math-editor.online

Install: 

    npm install mathjax-node

or global install:

    npm install --global mathjax-node
    npm link mathjax-node

or use NODE_PATH environment variable:

    export NODE_PATH=/c/nodejs/node_modules
    node some.js

Node 包解释逻辑如下，参考官方文档 Modules: CommonJS modules 或者 Process 模块文档：

    require(X) from module at path Y
    1. If X is a core module,
       a. return the core module
       b. STOP
    2. If X begins with '/'
       a. set Y to be the file system root
    3. If X begins with './' or '/' or '../'
       a. LOAD_AS_FILE(Y + X)
       b. LOAD_AS_DIRECTORY(Y + X)
       c. THROW "not found"
    4. If X begins with '#'
       a. LOAD_PACKAGE_IMPORTS(X, dirname(Y))
    5. LOAD_PACKAGE_SELF(X, dirname(Y))
    6. LOAD_NODE_MODULES(X, dirname(Y))
    7. THROW "not found"

    LOAD_NODE_MODULES(X, START)
    1. let DIRS = NODE_MODULES_PATHS(START)
    2. for each DIR in DIRS:
       a. LOAD_PACKAGE_EXPORTS(X, DIR)
       b. LOAD_AS_FILE(DIR/X)
       c. LOAD_AS_DIRECTORY(DIR/X)

    NODE_MODULES_PATHS(START)
    1. let PARTS = path split(START)
    2. let I = count of PARTS - 1
    3. let DIRS = []
    4. while I >= 0,
       a. if PARTS[I] = "node_modules" CONTINUE
       b. DIR = path join(PARTS[0 .. I] + "node_modules")
       c. DIRS = DIR + DIRS
       d. let I = I - 1
    5. return DIRS + GLOBAL_FOLDERS

早期引入的 `NODE_PATH` 环境变量，Windows 和 Linux 系统中对应的是冒号和分号分隔的目录列表，
其目的是作为 Node 备用的模块搜索路径，当模块解释程序找不到相应的模块时，就会搜索这里设置的路径。
新版本中仍然支持此变量，但是其作用并不大，并且推荐使用局部 node_modules 目录以提供模块加载效率。
当用户对此变量不知情时，可能导致模块加载错误的版本。

另外，Node.js 还会搜索以下 GLOBAL_FOLDERS 列表：

* 1: `$HOME/.node_modules`
* 2: `$HOME/.node_libraries`
* 3: `$PREFIX/lib/node`

以上 `$HOME` 是用户主目录，Windows 系统中使用 %USERPROFILE% 或者 $env:USERPROFILE。
另一个 `$PREFIX` 变量是 Node.js 配置的 `node_prefix`，可以通过 npm 配置命令查询得到。

$ npm config list
$ npm root -g
c:\nvm\node_modules

为何 Node 模块全局安装不能被导入？
因为模块解析程序 (require) 无法定义到模块，包括 NODE_PATH；

为何 shell 命令中导出的 NODE_PATH 环境变量有效，但是通过 process.env 设置无效？

    process.env['NODE_PATH'] = "c:/nodejs/node_modules"

or

    #!/usr/bin/env -S node -e "process.env.NODE_PATH='/c/nodejs/node_modules'; require(process.argv[1])"

因为环境中导出的 NODE_PATH 环境变量作用于 Node 进程。但是在脚本中设置 process.env，
只对工作线程（Worker threads）有效，工作线程会拷贝父进程的环境变量副本供自己使用，
而模块解释程序在父进程中进行，所以无法使用在工作线程设置的环境变量。

PS: TypeScript LSP 服务只对 JavaScript 脚本文件提供完善的 JSDoc 类型信息服务。
如何扩展名为 ts，那么 JSDoc 提供的函数的参数类型信息将被忽略。

*  https://github.com/jsdoc/jsdoc
*  https://jsdoc.app/

*/

const MJ = require("mathjax-node");

MJ.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
MJ.start();


/**
 * @param {string} ins - AsciiMath/MathML/TeX
 * @return  {"AsciiMath" | "MathML" | "TeX" }
 * 
 * > [!NOTE]
 * > 
 * > TeX and LaTeX input
 * > 
 * > The default math delimiters are ``$$...$$`` and ``\[...\]`` for
 * > displayed mathematics, and ``\(...\)`` for in-line mathematics.  Note
 * > in particular that the ``$...$`` in-line delimiters are **not** used
 * > by default.
 *
 * @See
 * 
 * *    [MathJax Docs](https://github.com/Jeangowhy/opendocs/blob/main/svg/MathJax_docs.rst)
 * 
 **/
function form_test(ins)
{
    const map = {'`': "AsciiMath", '<': "MathML", '$': "TeX", '\\': "inline-TeX"}
    const magic = ins.trim()[0]
    if (map[magic]) {
        return map[magic]
    } else {
        console.error({magic, map, 'info': "Use AsciiMath as default input."})
        return "AsciiMath"
    }
}


/**
 * @param {string} ins - AsciiMath/MathML/TeX
 * @return {string} remove patterm symbol from line head and tail. 
 **/
function magic_trim(ins)
{
    return ins.trim().replace(/\$\$/g, '')
              .replace('\\(', '').replace('\\)', '')
              .replace('\\[', '').replace('\\]', '')
              .replace(/^`/, '').replace(/`$/, '')
}


/**
 * @param {string} ins - AsciiMath/MathML/TeX text
 * @return {string} SVG plain text
 **/
function render_svg(ins)
{
    const form = form_test(ins)
    const input = magic_trim(ins)
    console.error({form, input})
    
    MJ.typeset({
      math: input,
      format: form, // or "inline-TeX", "MathML"
      mml: true,      // or svg:true, or html:true
      svg: true,
    }, function (data) {
      if (data.errors) throw data.errors
      console.log(data.svg)
      // For 'E = mc^2' will data.mml produce:
      /*
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="E = mc^2">
          <mi>E</mi>
          <mo>=</mo>
          <mi>m</mi>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
        </math>
      */
    });
}

/**
 * Module Entry
 * 
 * When a module was execute directly by nodejs, it act as entry module.
 * When a module was execute by other module, it act as a submodule.
 * 
 * > ![NOTE]
 * > 
 * > This API below was deprecated since v14.0.0 :
 * > 
 * >      module.parent
 * >      process.mainModule
 * > 
 * > Use `require.main` instead.
 * > 
 * Use this command to test this module:
 * 
 *     node -e 'console.log(require ("../mathjax.js"))' 
 * 
 * See also:
 * 
 * *    [Modules: CommonJS modules](https://github.com/Jeangowhy/opendocs/blob/main/nodejs_docs_21.md)
 * *    [Modules: CommonJS modules - local file](/nodejs_docs_21.md)
 * *    @see {@linkfile ./nodejs_docs_21.md Modules: CommonJS modules }
 * 
 **/
function main()
{
    const action = process.argv[2]
    const format = process.argv[3]
    if (action == "demo") {
        render_svg(`E = mc^2`)
    } else if (action == "pipe" && format == "svg") {
        /**
         * @param {Buffer} data
         **/
        const myhandler = (data)=>{
            render_svg(data.toString())
        }
        process.stdin.on('data', myhandler)
    } else {
        console.log(`
    Usage: ${process.argv.slice(0, 2).join(" ")} [action] [foramt]

    where the 'action' can be one of :

        demo  - print a test AsciiMath/MathML/TeX formula.
        pipe  - read input from pipe, and transform to specifie output format

    and the 'format' can be one of : 

        svg   - output Sclable Vector Graphics.

    example:

        echo 'sum_(i=1)^n i^3=((n(n+1))/2)^2' | mathjax.js pipe svg > AsciiMath.svg
        echo '\\(ax^2 + bx + c = 0\\)' | /od/mathjax.js pipe svg > MathJax.svg
        echo '\\[x = {-b \\pm \\sqrt{b^2-4ac} \\over {2a}}\\]' | /od/mathjax.js pipe svg
            `)
    }
}


module.exports = { render_svg, magic_trim, form_test}

// Wrong syntax to export:
// exports = { render_svg, magic_trim, form_test} 
// `exports` shortcut：
// module.exports = exports = {...}

if (require.main) main()
