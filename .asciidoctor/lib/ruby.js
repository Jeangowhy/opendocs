/**
 * Ruby Annotation Extension for Asciidoctor.js
 * 
 * Install::
 * 
 * Just save this script (ruby.js) in you vscode project:
 *  .asciidoctor/lib/ruby.js
 * 
 * Setting AsciiDoctor.js to enabled "Extensions: Register Workspace Extensions"
 * 
 * [Optional] Then open an asciidoc document, and set to Trusted Mode
 * >AsciiDoc: Manage Asciidoctor.js Extensions Trust 
 * 
 * Test::
 * 
 *  oo:テスト[/test/]
 *  oo:テスト[rt=/test/]
 */
function ruby_annotation_macro_oo() {
    const self = this
    self.named('oo')
    self.positionalAttributes('rt')

    self.process((...args)=>process(self, ...args))
}

function ruby_annotation_macro() {
    const self = this
    self.named('ruby')
    self.positionalAttributes('rt')

    self.process((...args)=>process(self, ...args))
}

function process (self, parent, target="", attr=null) {
    // console.log({ln:parent.constructor, target, attr},attr["$positional"])
    let pos = attr["$positional"] || [""]
    let anno = attr.rt || pos[0]
    anno = anno.replace(/\^(\d)/g, "<sup>$1</sup>")
    var text = `<ruby>${target}<rt>${anno}</rt></ruby>`
    return self.createInline(parent, 'quoted', text, { 'type': 'normal' })
}

module.exports.register = function register (registry) {
    if (typeof registry.register === 'function') {
        registry.register(function () {
            this.inlineMacro(ruby_annotation_macro)
            this.inlineMacro(ruby_annotation_macro_oo)
        })
    } else if (typeof registry.block === 'function') {
        registry.inlineMacro(ruby_annotation_macro)
        registry.inlineMacro(ruby_annotation_macro_oo)
    }
    return registry
}
console.log("==> .asciidoc/ruby.js load.")