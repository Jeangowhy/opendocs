/**
 * Ruby Annotation Extension for Asciidoctor.s
 * 
 * Install::
 * 
 * Just save this script (svg.js) in you vscode project:
 *  .asciidoctor/lib/svg.js
 * 
 * Test::
 * svg:D[nodes='<line stroke=blue x1="0" y1="8" x2="32" y2="8"/>']
 * svg:N[nodes='<svg width="32" height="16"><line stroke=blue x1="0" y1="8" x2="32" y2="8"/></svg>']
 * 
 */
function svg_macro() {
    const self = this
    self.named('svg')
    self.positionalAttributes('nodes')
    self.positionalAttributes('width')
    self.positionalAttributes('height')

    self.process((...args)=>process(self, ...args))
}

function process (self, parent, target="", attr=null) {
    console.log({ln:parent.constructor, target, attr},attr["$positional"])
    let width = +attr.width>0 ? attr.width : 16;
    let height = +attr.height>0 ? attr.height : 16;
    let nodes = unescape_special(attr.nodes || (attr["$positional"] && attr["$positional"][0]))
    let svg;
    if ("D" === target){
        svg = `<svg width="${width}" height="${height}">${nodes}</svg>`
    }else if ("N" === target) {
        svg = nodes
    }
    return self.createInline(parent, 'quoted', svg, { 'type': 'normal' })
}

function unescape_special(txt) {
    return txt
        .replace(/&amp;/g,  "&" )
        .replace(/&lt;/g,   "<" )
        .replace(/&gt;/g,   ">" )
        .replace(/&nbsp;/g, " " )
        .replace(/&#39;/g,  "\'" )
        .replace(/&quot;/g, "\"" )
}

function escape_special(txt) {
    return txt
        .replace(/&/g,  "&amp;")
        .replace(/</g,  "&lt;")
        .replace(/>/g,  "&gt;")
        .replace(/ /g,  "&nbsp;")
        .replace(/\'/g, "&#39;")
        .replace(/\"/g, "&quot;")
}

module.exports.register = function register (registry) {
    if (typeof registry.register === 'function') {
        registry.register(function () {
            this.inlineMacro(svg_macro)
            this.blockMacro(svg_macro)
        })
    } else if (typeof registry.block === 'function') {
        registry.inlineMacro(svg_macro)
        registry.blockMacro(svg_macro)
    }
    return registry
}