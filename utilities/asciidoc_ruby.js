#!/usr/bin/env node
// npm i -g asciidoctor
// npm i @asciidoctor/core --save-dev
const asciidoctor = require('@asciidoctor/core')()
const registry = asciidoctor.Extensions.create()
// require('./ruby-inline-macro-processor.js')(registry)

// module.exports = function (registry) {
registry.inlineMacro('ruby', function () {
    var self = this
    self.process(function (parent, target="", attr=null) {
        console.log({ln:parent.constructor, target, attr},attr["$positional"])
        let pos = attr["$positional"] || [""]
        let anno = attr.anno || pos[0]
        anno = anno.replace(/\^(\d)/g, "<sup>$1</sup>")
        var text = `<ruby>${target}<rt>${anno}</rt></ruby>`
        return self.createInline(parent, 'quoted', text, { 'type': 'normal' })
    })
})
// }

let text = `
.测试 JavaScript 实现的 AsciiDoc 宏扩展
****
• ⨉ ruby:wink[]
• ⨉ ruby:grin[blink]
• ⨉ ruby:[tā,铊]
• ⩗ ruby:铊[tā]
• ⩗ ruby:铊[anno=tā]
• ⩗ ruby:𧦠人[ngaak^1 jan^4] = ruby:訹人[seot^1 jan^4]
****
`

const html = asciidoctor.convert(text, { 'to_file': false, 'extension_registry': registry })
// const html = asciidoctor.convertFile('doc.adoc', ...)
console.log(html)