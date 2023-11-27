#! /usr/bin/env -S deno run --allow-read --allow-write --allow-run
/// <reference types="node" />
/// <reference lib="Deno.stable" />
/// <reference lib="Deno.unstable" />

import * as fs from "https://deno.land/std@0.208.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.208.0/path/mod.ts";
import { doc } from "https://deno.land/x/deno_doc/mod.ts"
import * as denoDoc from "https://deno.land/x/deno_doc@0.73.3/types.d.ts";
import { 
    DocNode, type JsDoc, type NamespaceDef,
    type DocNodeModuleDoc, type DocNodeFunction, type DocNodeVariable, 
    type DocNodeEnum, type DocNodeClass, type DocNodeTypeAlias, 
    type DocNodeNamespace, type DocNodeInterface, type DocNodeImport,

    JsDocTag,
    type JsDocTagOnly, type JsDocTagDoc, type JsDocTagNamed, type JsDocTagValued, 
    type JsDocTagTyped, type JsDocTagNamedTyped, type JsDocTagParam, 
    type JsDocTagReturn, type JsDocTagTags, type JsDocTagUnsupported,

    LiteralDef, 
    type LiteralDefNumber, type LiteralDefBigInt, type LiteralDefString, 
    type LiteralDefTemplate, type LiteralDefBoolean,

    FunctionDef, DecoratorDef, 

    ClassDef,
    type ClassConstructorDef, type ClassPropertyDef, type ClassIndexSignatureDef, 
    type ClassMethodDef, type ClassConstructorParamDef,

    ObjectPatPropDef,
    type ObjectPatPropAssignDef, type ObjectPatPropKeyValueDef, type ObjectPatPropRestDef,

    ParamDef, 
    type ParamArrayDef, type ParamAssignDef, type ParamIdentifierDef, 
    type ParamObjectDef, type ParamRestDef,

    TsTypeDef, type TsTypeRefDef, type TsTypeParamDef,
    type TsTypeKeywordDef, type TsTypeDefLiteral, type TsTypeTypeRefDef, 
    type TsTypeUnionDef, type TsTypeIntersectionDef, type TsTypeArrayDef, 
    type TsTypeTupleDef, type TsTypeTypeOperatorDef, type TsTypeParenthesizedDef, 
    type TsTypeRestDef, type TsTypeOptionalDef, type TsTypeQueryDef, 
    type TsTypeThisDef, type TsTypeFnOrConstructorDef, type TsTypeConditionalDef, 
    type TsTypeImportTypeDef, type TsTypeInferDef, type TsTypeIndexedAccessDef, 
    type TsTypeMappedDef, type TsTypeTypeLiteralDef, type TsTypeTypePredicateDef,
    } from "https://deno.land/x/deno_doc@0.73.3/types.d.ts";


function doc_title(title:string, decorator = '-') {
    let len = title.length
    return `
${'_'.repeat(6)}
${title}
${decorator.repeat(len)}
`
}

function parse_DocNodeModuleDoc(mod:string, node: DocNodeModuleDoc) {
    // ${doc_title(`/. 🚀 :lib: https://deno.land/std@0.207.0/${mod}/mod.ts`)}
    return `
${parse_JsDoc(mod, node.name, node.jsDoc)}
`
}


function parse_DocNodeInterface(mod:string, node:DocNodeInterface) {
    let rst = `
${doc_title(`/. 🚀 :interface: ${node.name}`)}

${parse_JsDoc(mod, node.name, node.jsDoc)}
`
    const itf = node.interfaceDef
    if (itf.extends.length)
        rst += `TODO: InterfaceDef + extends: ${JSON.stringify(itf.extends)}\n`
    if (itf.methods.length)
        rst += `TODO: InterfaceDef + methods: ${JSON.stringify(itf.methods)}\n`
    if (itf.properties.length)
        rst += `TODO: InterfaceDef + properties: ${JSON.stringify(itf.properties)}\n`
    if (itf.callSignatures.length)
        rst += `TODO: InterfaceDef + callSignatures: ${JSON.stringify(itf.callSignatures)}\n`
    if (itf.indexSignatures.length)
        rst += `TODO: InterfaceDef + indexSignatures: ${JSON.stringify(itf.indexSignatures)}\n`
    if (itf.typeParams.length)
        rst += `TODO: InterfaceDef + typeParams: ${JSON.stringify(itf.typeParams)}\n`
    return rst
}


function parse_DocNodeClass(mod:string, node: DocNodeClass) {
    const cls = node.name
    const cdf = node.classDef
    const abs = cdf.isAbstract
    const exts = parse_extends (cls, cdf.extends)
    const imps = parse_implements (cls, cdf.implements)
    let rst = `
${doc_title(`/. 🚀 :class: ${mod}:${cls} ${cdf.isAbstract? '🟡':'🟢'}`)}

\`\`\`ts
${abs? 'abstract ':''}class ${cls}${exts}${imps} { ... }
\`\`\`

${node.jsDoc? parse_JsDoc(mod, cls, node.jsDoc):""}
`
    if (cdf.decorators && cdf.decorators.length)
        rst += `TODO: ClassDef + decorators: ${JSON.stringify(cdf.decorators)}\n`
    if (cdf.properties && cdf.properties.length)
        rst += `TODO: ClassDef + properties: ${JSON.stringify(cdf.properties)}\n`
    if (cdf.indexSignatures && cdf.indexSignatures.length)
        rst += `TODO: ClassDef + indexSignatures: ${JSON.stringify(cdf.indexSignatures)}\n`
    if (cdf.typeParams && cdf.typeParams.length)
        rst += `TODO: ClassDef + typeParams: ${JSON.stringify(cdf.typeParams)}\n`
    if (cdf.superTypeParams && cdf.superTypeParams.length)
        rst += `TODO: ClassDef + superTypeParams: ${JSON.stringify(cdf.superTypeParams)}\n`

    return rst + parse_ClassDef(mod, cls, cdf)
}


function parse_extends(cls:string, ext:string|undefined) {
    return ext? " extends "+ext:""
}


function parse_implements(cls:string, node:TsTypeDef[]) {
    console.log('===', cls, node)
    const rst = []
    for (const it of node) {
        rst.push(parse_TsTypeDef(it))
    }
    if (rst.length==0)
        return ""
    return " implements " + rst.join(', ')
}


function parse_DocNodeVariable(mod, node: DocNodeVariable) {
    return `TODO: DocNodeVariable:${JSON.stringify(node)}\n`
}


function parse_DocNodeEnum(mod, node: DocNodeEnum) {
    return `TODO: DocNodeEnum:${JSON.stringify(node)}\n`
}


function parse_DocNodeTypeAlias(mod, node: DocNodeTypeAlias) {
    return `TODO: DocNodeTypeAlias:${JSON.stringify(node)}\n`
}


function parse_DocNodeNamespace(mod, node: DocNodeNamespace) {
    return `TODO: DocNodeNamespace:${JSON.stringify(node)}\n`
}


function parse_DocNodeImport(mod, node: DocNodeImport) {
    return `TODO: DocNodeImport:${JSON.stringify(node)}\n`
}


function parse_ClassDef(mod:string, cls:string, node:ClassDef) {
    let rst = ""
    if (node.constructors.length) {
        rst = `
${doc_title(`/. 🚀 ${cls} constructors`, '=')}
`
        for (const it of node.constructors){
            rst += parse_ClassConstructorDef(mod, cls, it)
        }
    }

    if (node.methods.length) {
        rst += `
${doc_title(`/. 🚀 ${cls} methods`, '=')}
`
        for (const it of node.methods){
            rst += parse_ClassMethodDef(mod, cls, it)
        }
    }
    return rst
}


function parse_DocNodeFunction(mod:string, node: DocNodeFunction) {
    let doc = node.jsDoc?.doc ?? ""
    const proto = parse_FunctionDef(mod, node.name, node.functionDef)
    let rst = `
${doc_title(`/. 🚀 :fun: ${mod}:${node.name} 🟩`)}

\`\`\`ts
function ${proto}
\`\`\`

${doc}
`
    if (node.jsDoc != null && node.jsDoc.tags != null) 
    for (const it of node.jsDoc.tags) {
        const that = it as JsDocTagNamed
        doc = that.doc ?? ""
        rst += `

${it.kind}
${'-'.repeat(it.kind.length)}

${doc}
`
    }
    return rst
}


function parse_TsTypeDef(it:TsTypeDef):string {
    switch (it.kind) {
    case 'keyword':         return parse_TsTypeKeywordDef(it); break
    case 'literal':         return parse_TsTypeDefLiteral(it); break
    case 'typeRef':         return parse_TsTypeTypeRefDef(it.typeRef); break
    case 'union':           return parse_TsTypeUnionDef(it); break
    case 'intersection':    return parse_TsTypeIntersectionDef(it); break
    case 'array':           return parse_TsTypeArrayDef(it); break
    case 'tuple':           return parse_TsTypeTupleDef(it); break
    case 'typeOperator':    return parse_TsTypeTypeOperatorDef(it); break
    case 'parenthesized':   return parse_TsTypeParenthesizedDef(it); break
    case 'rest':            return parse_TsTypeRestDef(it); break
    case 'optional':        return parse_TsTypeOptionalDef(it); break
    case 'typeQuery':       return parse_TsTypeQueryDef(it); break
    case 'this':            return parse_TsTypeThisDef(it); break
    case 'fnOrConstructor': return parse_TsTypeFnOrConstructorDef(it); break
    case 'conditional':     return parse_TsTypeConditionalDef(it); break
    case 'importType':      return parse_TsTypeImportTypeDef(it); break
    case 'infer':           return parse_TsTypeInferDef(it); break
    case 'indexedAccess':   return parse_TsTypeIndexedAccessDef(it); break
    case 'mapped':          return parse_TsTypeMappedDef(it); break
    case 'typeLiteral':     return parse_TsTypeTypeLiteralDef(it); break
    case 'typePredicate':   return parse_TsTypeTypePredicateDef(it); break
    default:                return ` TODO： TsTypeRef + ${it.kind}`; break
    }
}


function parse_TsTypeKeywordDef(node:TsTypeKeywordDef) {
    return `${node.repr}`
}


function parse_TsTypeDefLiteral(node:TsTypeDefLiteral) {
    return node.repr
}


function parse_TsTypeTypeRefDef(node: TsTypeRefDef): string {
    let rst = []
    if (node.typeParams) {
        for (const it of node.typeParams) {
            rst.push (parse_TsTypeDef(it))
        }
        return `${node.typeName}<${rst.join(", ")}>`
    }
    return node.typeName
}


function parse_TsTypeUnionDef(node:TsTypeUnionDef) {
    const rst = []
    for (const it of node.union) {
        const td = parse_TsTypeDef(it) ?? it.repr
        rst.push(td)
    }
    return ` ${rst.join(" | ")}`
}


function parse_TsTypeIntersectionDef(node:TsTypeIntersectionDef) {
    return `TODO:TsTypeIntersectionDef:${JSON.stringify(node)} `
}


function parse_TsTypeArrayDef(node:TsTypeArrayDef) {
    return `TODO:TsTypeArrayDef:${JSON.stringify(node)} `
}


function parse_TsTypeTupleDef(node:TsTypeTupleDef) {
    return `TODO:TsTypeTupleDef:${JSON.stringify(node)} `
}


function parse_TsTypeTypeOperatorDef(node:TsTypeTypeOperatorDef) {
    return `TODO:TsTypeTypeOperatorDef:${JSON.stringify(node)} `
}


function parse_TsTypeParenthesizedDef(node:TsTypeParenthesizedDef) {
    return `TODO:TsTypeParenthesizedDef:${JSON.stringify(node)} `
}


function parse_TsTypeRestDef(node:TsTypeRestDef) {
    return `TODO:TsTypeRestDef:${JSON.stringify(node)} `
}


function parse_TsTypeOptionalDef(node:TsTypeOptionalDef) {
    return `TODO:TsTypeOptionalDef:${JSON.stringify(node)} `
}


function parse_TsTypeQueryDef(node:TsTypeQueryDef) {
    return `TODO:TsTypeQueryDef:${JSON.stringify(node)} `
}


function parse_TsTypeThisDef(node:TsTypeThisDef) {
    return `TODO:TsTypeThisDef:${JSON.stringify(node)} `
}


function parse_TsTypeFnOrConstructorDef(node:TsTypeFnOrConstructorDef) {
    const ctor = node.fnOrConstructor
    return `(${parse_ParamDef(ctor.params)}) => ${parse_TsTypeDef(ctor.tsType)}`
}


function parse_TsTypeConditionalDef(node:TsTypeConditionalDef) {
    return `TODO:TsTypeConditionalDef:${JSON.stringify(node)} `
}


function parse_TsTypeImportTypeDef(node:TsTypeImportTypeDef) {
    return `TODO:TsTypeImportTypeDef:${JSON.stringify(node)} `
}


function parse_TsTypeInferDef(node:TsTypeInferDef) {
    return `TODO:TsTypeInferDef:${JSON.stringify(node)} `
}


function parse_TsTypeIndexedAccessDef(node:TsTypeIndexedAccessDef) {
    return `TODO:TsTypeIndexedAccessDef:${JSON.stringify(node)} `
}


function parse_TsTypeMappedDef(node:TsTypeMappedDef) {
    return `TODO:TsTypeMappedDef:${JSON.stringify(node)} `
}


function parse_TsTypeTypeLiteralDef(node:TsTypeTypeLiteralDef) {
    return `TODO:TsTypeTypeLiteralDef:${JSON.stringify(node)} `
}


function parse_TsTypeTypePredicateDef(node:TsTypeTypePredicateDef) {
    return `TODO:TsTypeTypePredicateDef:${JSON.stringify(node)} `
}


function parse_ClassConstructorDef(mod:string, cls:string, node: ClassConstructorDef) {
    const args = parse_ParamDef(node.params)
    return `
${doc_title(`/. 🚀 :ctor: ${cls} 🟥`)}

\`\`\`ts
new ${cls}(${args})
\`\`\`

${parse_JsDoc(mod, node.name, node.jsDoc)}
`
}


function parse_JsDoc(mod:string, cls:string, node?: JsDoc) {
    let rst = node?.doc ?? ""

    if (node?.tags)
    for (const it of node.tags) {
        switch (it.kind) {
        case "constructor":
        case "ignore":
        case "module":
        case "public":
        case "private":
        case "protected":
        case "readonly":
            rst += parse_JsDocTagOnly(mod, cls, it)
            break
        case "category":
        case "deprecated":
        case "example":
            rst += parse_JsDocTagDoc(mod, cls, it)
            break
        case "callback":
        case "template":
            rst += parse_JsDocTagNamed(mod, cls, it)
            break
        case "default":
            rst += parse_JsDocTagValued(mod, cls, it)
            break
        case "enum":
        case "extends":
        case "this":
        case "type":
            rst += parse_JsDocTagTyped(mod, cls, it)
            break
        case "property":
        case "typedef":
            rst += parse_JsDocTagNamedTyped(mod, cls, it)
            break
        case "param":
            rst += parse_JsDocTagParam(mod, cls, it)
            break
        case "return":
            rst += parse_JsDocTagReturn(mod, cls, it)
            break
        case "tags":
            rst += parse_JsDocTagTags(mod, cls, it)
            break
        case "unsupported":
            rst += parse_JsDocTagUnsupported(mod, cls, it)
            break
        default:
            // console.log(it)
            rst += ` TODO: JsDoc + ${it.kind}`
            break
        }
    }
    return rst
}


function parse_JsDocTagOnly(mod:string, cls:string, node: JsDocTagOnly) {
    if (node.kind == 'module')
        return ''
    return `\n**${node.kind}**`
}


function parse_JsDocTagDoc(mod:string, cls:string, node: JsDocTagDoc) {
    const doc = node.doc ?? ""
    return `

${node.kind}
${'-'.repeat(node.kind.length)}

${doc}
`
}


function parse_JsDocTagNamed(mod:string, cls:string, node: JsDocTagNamed) {
    return `TODO:JsDocTagNamed: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagValued(mod:string, cls:string, node: JsDocTagValued) {
    return `TODO:JsDocTagValued: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagTyped(mod:string, cls:string, node: JsDocTagTyped) {
    return `TODO:JsDocTagTyped: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagNamedTyped(mod:string, cls:string, node: JsDocTagNamedTyped) {
    return `TODO:JsDocTagNamedTyped: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagParam(mod:string, cls:string, node: JsDocTagParam) {
    return `

*   ${node.kind} \`${node.name}\`
${node.doc ? node.doc.replaceAll(/^|\n/g, "\n    "):""}
`
}


function parse_JsDocTagReturn(mod:string, cls:string, node: JsDocTagReturn) {
    return `TODO:JsDocTagReturn: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagTags(mod:string, cls:string, node: JsDocTagTags) {
    return `TODO:JsDocTagTags: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagUnsupported(mod:string, cls:string, node: JsDocTagUnsupported) {
    return `TODO:JsDocTagUnsupported: ${cls} ${JSON.stringify(node)}\n`
}


function parse_ClassMethodDef(mod:string, cls:string, node: ClassMethodDef) {
    const fun = parse_FunctionDef(mod, node.name, node.functionDef)
    const sym = {"method":"🟨", "getter": "🟦", "setter": "🟧",}[node.kind]
    return `
${doc_title(`/. 🚀 :${node.kind}: ${cls}.${node.name} ${sym}`)}

\`\`\`ts
function ${node.isStatic?"static ":""}${fun}
\`\`\`

${node.jsDoc? parse_JsDoc(mod, cls, node.jsDoc):""}
`
    }


function parse_FunctionDef(mod:string, func:string, node: FunctionDef) {
    let rst = func + parse_TsTypeParamDef(node.typeParams) + `( ${parse_ParamDef(node.params)} )`

    if (node.returnType) {
        // rst += " : " + node.returnType?.repr
        if (node.returnType.kind == "typeRef") {
            const param = parse_TsTypeTypeRefDef(node.returnType.typeRef)
            rst += ":" + (param? param:node.returnType.repr)
        }
    }
    return rst;
}


function parse_TsTypeParamDef(params: TsTypeParamDef[]):string {
    let rst = []
    for (const it of params) {
        rst.push(it.name)
    }
    if (rst.length==0)
        return ""
    return `<${rst.join(', ')}>`
}


function parse_ParamDef(params: ParamDef[]):string {
    const rst = []
    for (const it of params){
        switch (it.kind) {
        case 'array':      rst.push (parse_ParamArrayDef(it)); break;
        case 'assign':     rst.push (parse_ParamAssignDef(it)); break;
        case 'identifier': rst.push (parse_ParamIdentifierDef(it)); break;
        case 'object':     rst.push (parse_ParamObjectDef(it)); break;
        case 'rest':       rst.push (parse_ParamRestDef(it)); break;
        default:           rst.push (` TODO: ParamDef + it.kind`);
        }
    }
    return rst.join(', ')
}


function parse_ParamArrayDef(node: ParamArrayDef) {
    if (node.tsType )
        return `${node.tsType}<TODO:${node.kind}>`
    return `<TODO:${node.kind}>`
}


function parse_ParamAssignDef(node: ParamAssignDef) {
    return parse_ParamDef([node.left])
}


function parse_ParamIdentifierDef(node: ParamIdentifierDef) {
    let rst = node.name + (node.optional? "?":"")
    if (node.tsType) {
        const param = node.tsType.repr
        const ref = parse_TsTypeDef(node.tsType)
        rst += ref != "" ? `:${ref}` : `:${param}`
    }
    return rst
}


function parse_ParamObjectDef(node: ParamObjectDef) {
    if (node.tsType )
        return `object:${node.tsType.repr}`
    return `<TODO:${node.kind}>`
}


function parse_ParamRestDef(node: ParamRestDef) {
    if (node.tsType )
        return `...${node.arg.name}:${parse_TsTypeDef(node.tsType)}`
}


const std_libs /* version 0.207. 0 */ = {
    archive: "Unstable",            json: "Stable",
    assert: "Stable",               jsonc: "Stable",
    async: "Stable",                log: "Unstable",
    bytes: "Stable",                media_types: "Stable",
    collections: "Stable",          msgpack: "Unstable",
    console: "Unstable",            path: "Unstable",
    csv: "Stable",                  permissions: "Deprecated",
    datetime: "Unstable",           regexp: "Unstable",
    dotenv: "Unstable",             semver: "Unstable",
    encoding: "Unstable",           signal: "Deprecated",
    flags: "Unstable",              streams: "Unstable",
    fmt: "Stable",                  testing: "Stable",
    front_matter: "Unstable",       toml: "Stable",
    fs: "Stable",                   ulid: "Unstable",
    html: "Unstable",               url: "Unstable",
    http: "Unstable",               uuid: "Stable",
    io: "Deprecated",               yaml: "Stable",
}

async function list_std_libs(ver:string="0.207.0") {
    const libs = []
    // const url = `https://deno.land/std@${ver}？doc=`
    // const txt = await fetch(url).then(res=>res.text())
    // const matchs = txt.match(/<td>(\w+)<\/td>\n?<td>(Stable|Unstable)<\/td>/m) ?? []
    //     console.log(url,  txt)
    // for (const it of matchs) {
    //     console.log(it)
    //     libs.push(it)
    // }
    for await (const it of fs.expandGlob("./*/")) {
        !it.name.match(/^(\.|_|deno_dc)/) && libs.push(it.name)
    }
    // for await (const it of fs.walk("./", { maxDepth:1, includeFiles:false })) {
    //     if (it.name.match(new RegExp(/^(\.|_|deno_doc)/)))
    //         continue
    //     libs.push(it.name)
    // }
    return libs
}

async function doc_generate(mod:string) {
    // let cmd = new Deno.Command(Deno.execPath(),
    //     {args: ['doc', '--json', '--name='+mod, mod+'/mod.ts']})
    // const {code, stdout, stderr} = await cmd.output()
    // const docs: DocNode[] = JSON.parse(new TextDecoder().decode(stdout))
    const docs = await doc(`https://deno.land/std@0.207.0/${mod}/mod.ts`)
    const sorted = docs.sort( (a, b)=> a.kind > b.kind? 1 : a.kind < b.kind? -1:0 )

    let rst = ""
    for (const it of sorted) {
        switch (it.kind) {
        case 'moduleDoc':
            rst = parse_DocNodeModuleDoc(mod, it) + rst
            break
        case 'function':
            rst += parse_DocNodeFunction(mod, it)
            break
        case 'variable':
            rst += parse_DocNodeVariable(mod, it)
            break
        case 'enum':
            rst += parse_DocNodeEnum(mod, it)
            break
        case 'class':
            rst += parse_DocNodeClass(mod, it)
            break
        case 'typeAlias':
            rst += parse_DocNodeTypeAlias(mod, it)
            break
        case 'namespace':
            rst += parse_DocNodeNamespace(mod, it)
            break
        case 'interface':
            rst += parse_DocNodeInterface(mod, it)
            break
        case 'import':
            rst += parse_DocNodeImport(mod, it)
            break
        default:
            rst += `TODO: ${it.kind} + ${it}\n`
        }
    }
    return rst
}

Deno.writeTextFileSync("rat.md", '', {append:false})
for (const it in std_libs) {
    // const title = doc_title(`/. 🚀 :lib: ${it} [${std_libs[it]}] https://deno.land/std@0.207.0/${it}`, '=')
    // Deno.writeTextFileSync("rat.md", title, {append:true})
    if (["fmt","testing","encoding"].indexOf(it) != -1) {
        continue
    }
    if (it != 'async') continue
    const rst = await doc_generate(it)
    const txt = new TextEncoder().encode(rst)
    Deno.writeFileSync( "rat.md", txt, {append:true})
}

