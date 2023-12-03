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

    type InterfaceMethodDef, type InterfacePropertyDef,
    type InterfaceCallSignatureDef, type InterfaceIndexSignatureDef,
    
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
${parse_JsDoc(node.name, node.jsDoc)}
`
}


function parse_DocNodeInterface(mod:string, node:DocNodeInterface) {
    const itf = node.interfaceDef
    const exts = []
    for (const it of itf.extends)
        exts.push (parse_TsTypeDef(it))
    const ext = exts.length? " extends " + exts.join(",") : ""
    let rst = `
${doc_title(`/. 🚀 :interface: ${node.name}`)}

    interface ${node.name}${ext}

${parse_JsDoc(node.name, node.jsDoc)}
${parse_typeParams(mod, node.name, itf.typeParams)}
${parse_callSignatures(mod, node.name, itf.callSignatures)}
${parse_indexSignatures(mod, node.name, itf.indexSignatures)}
${parse_properties(mod, node.name, itf.properties)}
${parse_methods(mod, node.name, itf.methods)}
`
    return rst
}

function parse_typeParams(mod:string, ifc:string, signs:TsTypeParamDef[]) {
    if (signs.length==0) return ""
    return `
Type Params

    ${parse_TsTypeParamDef(signs)}
`
}

function parse_methods(mod:string, ifc:string, methods:InterfaceMethodDef[]) {
    if (methods.length==0) return ""
    let rst = `
Methods
`
    for (const it of methods)
        rst += `
*   \`${it.name}(${parse_typeParams(mod, ifc, it.typeParams)}) : ${parse_TsTypeDef(it.returnType)}\`
${parse_JsDoc(ifc, it.jsDoc).replaceAll(/^|\n/g, "\n    ")}
`
    return rst
}


function parse_callSignatures(mod:string, ifc:string, signs: InterfaceCallSignatureDef[]) {
    if (signs.length==0) return ""
    let rst = `
Call Signatures
`
    for (const it of signs) 
        rst += `
    (${parse_ParamDef(it.params)}) : ${parse_TsTypeDef(it.tsType)}
`
    return rst
}


function parse_indexSignatures(mod:string, ifc:string, signs: InterfaceIndexSignatureDef[]) {
    if (signs.length==0) return ""
    let rst = `
Index Signatures
`
    for (const it of signs) {
        const rw = it.readonly? "readonly ":""
        rst += `
    [${rw}${parse_ParamDef(it.params)}] : ${parse_TsTypeDef(it.tsType)}
`
    }
    return rst
}


function parse_properties(mod:string, ifc:string, props: InterfacePropertyDef[]) {
    if (props.length == 0)
        return ""
    let rst = `
Properties
`
    for (const it of props){
        const rw = it.readonly ? "readonly ":""
        let doc = parse_JsDoc(ifc, it.jsDoc)
        if (doc != "") doc = "\n" + doc.replaceAll(/^|\n/g, "\n    ")
        rst += `
*   ${rw}${it.name} : ${parse_TsTypeDef(it.tsType)}${doc}`
    }
return rst
}

function parse_DocNodeClass(mod:string, node: DocNodeClass) {
    const cls = node.name
    const cdf = node.classDef
    const abs = cdf.isAbstract
    const exts = parse_extends (cls, cdf.extends)
    const imps = parse_implements (cls, cdf.implements)
    const params = parse_TsTypeParamDef (cdf.typeParams)
    const stack = []
    for (const it of cdf.superTypeParams)
        stack.push(parse_TsTypeDef(it))
    const sparams = stack.length? `<${stack.join(', ')}>`:''
    let rst = `
${doc_title(`/. 🚀 :class: ${mod}:${cls} ${cdf.isAbstract? '🟡':'🟢'}`)}

\`\`\`ts
${abs? 'abstract ':''}class ${cls}${params}${exts}${imps}${sparams} { ... }
\`\`\`

${parse_JsDoc(cls, node.jsDoc)}
`
    if (cdf.decorators && cdf.decorators.length)
        rst += `TODO: ClassDef + decorators: ${JSON.stringify(cdf.decorators)}\n`
    if (cdf.indexSignatures && cdf.indexSignatures.length)
        rst += `TODO: ClassDef + indexSignatures: ${JSON.stringify(cdf.indexSignatures)}\n`

    return rst + parse_ClassDef(mod, cls, cdf)
}


function parse_classProperties(cls:string, props: ClassPropertyDef[]) {
    let rst = ""
    for (const it of props) {
        const rw = it.readonly? "readonly ":""
        let doc = parse_JsDoc(cls, it.jsDoc)
        if (doc) doc = "\n" + doc.replaceAll(/^|\n/g, "\n    ")
        rst += `
*   ${rw}${it.name}: ${parse_TsTypeDef(it.tsType)}${doc}`
    }
    return rst
}


function parse_extends(cls:string, ext:string|undefined) {
    return ext? " extends "+ext:""
}


function parse_implements(cls:string, node:TsTypeDef[]) {
    const rst = []
    for (const it of node) {
        rst.push(parse_TsTypeDef(it))
    }
    if (rst.length==0)
        return ""
    return " implements " + rst.join(', ')
}


function parse_DocNodeVariable(mod:string, node: DocNodeVariable) {
    const vd = node.variableDef
    let va = `${vd.kind} ${node.name}`
    if (vd.tsType && vd.tsType.kind=="literal")
        va += ` = ${parse_TsTypeDef(vd.tsType).replaceAll(/\r\n/g, '\\r\\n').replaceAll(/\n/g, '\\n')}`
    else if (vd.tsType && vd.tsType.kind=='typeRef')
        va += ` : ${parse_TsTypeDef(vd.tsType)}`
    else if (vd.tsType)
        va += ` = ${parse_TsTypeDef(vd.tsType)}`
    return doc_title(`/. 🚀 :${node.kind}: ${node.name}`) + `
    ${va}

${parse_JsDoc(node.name, node.jsDoc)}
`
}


function parse_DocNodeEnum(mod:string, node: DocNodeEnum) {
    let rst = ''
    for (const it of node.enumDef.members)
        rst += `*   ${it.name}: ${parse_TsTypeDef(it.init)}\n`
    return doc_title(`/. 🚀 :enum: ${node.name}`) + `
${parse_JsDoc(node.name, node.jsDoc)}

${rst}`
}

function parse_DocNodeTypeAlias(mod:string, node: DocNodeTypeAlias) {
    return doc_title(`/. 🚀 :alias: ${node.name}`) + `
    type ${node.name} = ${parse_TsTypeDef(node.typeAliasDef.tsType)}

${parse_JsDoc(node.name, node.jsDoc)}
`
}


function parse_DocNodeNamespace(mod:string, node: DocNodeNamespace) {
    return `
${doc_title('/. 🚀 :ns: ' + node.name)}
${parse_JsDoc(node.name, node.jsDoc)}
${parse_nodes(node.name, node.namespaceDef.elements)}
`
}


function parse_DocNodeImport(mod:string, node: DocNodeImport) {
    return `
    import { ${node.importDef.imported ?? node.name} } from "${node.importDef.src}"

${parse_JsDoc(node.name, node.jsDoc)}`
}


function parse_ClassDef(mod:string, cls:string, node:ClassDef) {
    let rst = ""
    const props = parse_classProperties (cls, node.properties)

    if (node.constructors.length) {
        rst = `
${doc_title(`/. 🚀 ${cls} constructors`, '=')}
`
        for (const it of node.constructors){
            rst += parse_ClassConstructorDef(mod, cls, it)
        }
    }
    rst += props

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
    const proto = parse_FunctionDef(mod, node.name, node.functionDef)

    let rst = `
${doc_title(`/. 🚀 :fun: ${mod}:${node.name} 🟩`)}

\`\`\`ts
function ${proto}
\`\`\`

${parse_JsDoc(node.name, node.jsDoc)}
`
    return rst
}


function parse_TsTypeDef(it?:TsTypeDef):string {
    if (it == null) return ""
    switch (it.kind) {
    case 'keyword':         return parse_TsTypeKeywordDef(it);
    case 'literal':         return parse_TsTypeDefLiteral(it);
    case 'typeRef':         return parse_TsTypeRefDef(it.typeRef);
    case 'union':           return parse_TsTypeUnionDef(it);
    case 'intersection':    return parse_TsTypeIntersectionDef(it);
    case 'array':           return parse_TsTypeArrayDef(it);
    case 'tuple':           return parse_TsTypeTupleDef(it);
    case 'typeOperator':    return parse_TsTypeTypeOperatorDef(it);
    case 'parenthesized':   return parse_TsTypeParenthesizedDef(it);
    case 'rest':            return parse_TsTypeRestDef(it);
    case 'optional':        return parse_TsTypeOptionalDef(it);
    case 'typeQuery':       return parse_TsTypeQueryDef(it);
    case 'this':            return parse_TsTypeThisDef(it);
    case 'fnOrConstructor': return parse_TsTypeFnOrConstructorDef(it);
    case 'conditional':     return parse_TsTypeConditionalDef(it);
    case 'importType':      return parse_TsTypeImportTypeDef(it);
    case 'infer':           return parse_TsTypeInferDef(it);
    case 'indexedAccess':   return parse_TsTypeIndexedAccessDef(it);
    case 'mapped':          return parse_TsTypeMappedDef(it);
    case 'typeLiteral':     return parse_TsTypeTypeLiteralDef(it);
    case 'typePredicate':   return parse_TsTypeTypePredicateDef(it);
    default:                return ` TODO： TsTypeRef + ${JSON.stringify(it)}`;
    }
}


function parse_TsTypeKeywordDef(node:TsTypeKeywordDef) {
    return `${node.repr}`
}


function parse_TsTypeDefLiteral(node:TsTypeDefLiteral) {
    switch(node.literal.kind) {
    case "string": return `"${node.repr}"`
    default: return node.repr
    }
}


function parse_TsTypeRefDef(node: TsTypeRefDef): string {
    const rst = []

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


function parse_TsTypeTypeLiteralDef(node:TsTypeTypeLiteralDef) {
    let rst = ''
    if (node.typeLiteral.methods.length) {
        const stack = []
        for (const it of node.typeLiteral.methods) {
            const args = parse_ParamDef(it.params)
            const ret = parse_TsTypeDef(it.returnType)
            const paras = parse_TsTypeParamDef(it.typeParams)
            stack.push(`${it.name}(${args})${paras}: ${ret}`)
        }
        rst += ": { " + stack.join("; ") + " }; "
    }
    if (node.typeLiteral.properties.length) {
        const stack = []
        for (const it of node.typeLiteral.properties){
            const rw = it.readonly? "readonly ":""
            const opt = it.optional? "?":""
            const params = parse_ParamDef(it.params)
            const typeParams = parse_TsTypeParamDef(it.typeParams)
            let ret = parse_TsTypeDef(it.tsType)
            if (ret) ret = ": "+ret
            stack.push (`${rw}${it.name}${params}${typeParams}${opt}${ret}`)
        }
        rst += "{ " + stack.join("; ") + " }"
    }
    if (node.typeLiteral.callSignatures.length) {
        rst += JSON.stringify({callSignatures:node.typeLiteral.callSignatures})
    }
    if (node.typeLiteral.indexSignatures.length) {
        const stack = []
        for (const it of node.typeLiteral.indexSignatures){
            const rw = it.readonly? "readonly ":""
            stack.push(`[${rw}${parse_ParamDef(it.params)}]: ${parse_TsTypeDef(it.tsType)}`)
        }

        rst += `{ ${stack.join("; ")} }`
    }
    return rst
}


function parse_TsTypeIntersectionDef(node:TsTypeIntersectionDef) {
    const stack = []
    for (const it of node.intersection)
        stack.push(parse_TsTypeDef(it))
    return stack.join(" & ")
}


function parse_TsTypeArrayDef(node:TsTypeArrayDef) {
    return `${node.array.repr}[]`
}


function parse_TsTypeTupleDef(node:TsTypeTupleDef) {
    const stack = []
    for (const it of node.tuple)
        stack.push(parse_TsTypeDef(it))
    return `[${stack.join(", ")}]`
}


function parse_TsTypeTypeOperatorDef(node:TsTypeTypeOperatorDef) {
    return `${node.typeOperator.operator} ${parse_TsTypeDef(node.typeOperator.tsType)}`
    // `TODO:TsTypeTypeOperatorDef:${JSON.stringify(node)} `
}


function parse_TsTypeParenthesizedDef(node:TsTypeParenthesizedDef) {
    return `(${parse_TsTypeDef(node.parenthesized)})`
}


function parse_TsTypeRestDef(node:TsTypeRestDef) {
    return `...${parse_TsTypeDef(node.rest)} `
}


function parse_TsTypeOptionalDef(node:TsTypeOptionalDef) {
    return `TODO:TsTypeOptionalDef:${JSON.stringify(node)} `
}


function parse_TsTypeQueryDef(node:TsTypeQueryDef) {
    return `${node.repr}`
    // `TODO:TsTypeQueryDef:${JSON.stringify(node)} `
}


function parse_TsTypeThisDef(node:TsTypeThisDef) {
    return `TODO:TsTypeThisDef:${JSON.stringify(node)} `
}


function parse_TsTypeFnOrConstructorDef(node:TsTypeFnOrConstructorDef) {
    const ctor = node.fnOrConstructor
    return `(${parse_ParamDef(ctor.params)}) => ${parse_TsTypeDef(ctor.tsType)}`
}


function parse_TsTypeConditionalDef(node:TsTypeConditionalDef) {
    if (node.conditionalType.checkType) {
        return `()=>${node.conditionalType.checkType.repr}`
    } else if (node.conditionalType.extendsType) {
        return `()=>${node.conditionalType.extendsType.repr}`
    } else if (node.conditionalType.trueType) {
        return `()=>${node.conditionalType.trueType.repr}`
    } else if (node.conditionalType.falseType) {
        return `()=>${node.conditionalType.falseType.repr}`
    }
    return `TODO:TsTypeConditionalDef:${JSON.stringify(node)}`
}


function parse_TsTypeImportTypeDef(node:TsTypeImportTypeDef) {
    return `TODO:TsTypeImportTypeDef:${JSON.stringify(node)} `
}


function parse_TsTypeInferDef(node:TsTypeInferDef) {
    return `TODO:TsTypeInferDef:${JSON.stringify(node)} `
}


function parse_TsTypeIndexedAccessDef(node:TsTypeIndexedAccessDef) {
    const objType = parse_TsTypeDef(node.indexedAccess.objType)
    const indexType = parse_TsTypeDef(node.indexedAccess.indexType)
    return `${objType}[${indexType}]`
}


function parse_TsTypeMappedDef(node:TsTypeMappedDef) {
    const rw = node.mappedType.readonly ? "readonly ":""
    const typeParam = parse_TsTypeParamDef([node.mappedType.typeParam])
    // const nameType = node.mappedType.nameType
    const opt = node.mappedType.optional? "?":""
    const tsType = parse_TsTypeDef(node.mappedType.tsType)
    const name = node.mappedType.typeParam.name
    return `${rw}[${typeParam}]${opt}: ${tsType}`
}


function parse_TsTypeTypePredicateDef(node:TsTypeTypePredicateDef) {
    return `${node.repr}`
}


function parse_ClassConstructorDef(mod:string, cls:string, node: ClassConstructorDef) {
    const args = parse_ParamDef(node.params)
    return `
${doc_title(`/. 🚀 :ctor: ${cls} 🟥`)}

\`\`\`ts
new ${cls}(${args})
\`\`\`

${parse_JsDoc(node.name, node.jsDoc)}
`
}


function parse_JsDoc(cls:string, node?: JsDoc) {
    let rst = `${node?.doc ?? ""}`
    if (rst) rst += '\n'

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
            rst += parse_JsDocTagOnly(cls, it)
            break
        case "category":
        case "deprecated":
        case "example":
            rst += parse_JsDocTagDoc(cls, it)
            break
        case "callback":
        case "template":
            rst += parse_JsDocTagNamed(cls, it)
            break
        case "default":
            rst += parse_JsDocTagValued(cls, it)
            break
        case "enum":
        case "extends":
        case "this":
        case "type":
            rst += parse_JsDocTagTyped(cls, it)
            break
        case "property":
        case "typedef":
            rst += parse_JsDocTagNamedTyped(cls, it)
            break
        case "param":
            rst += parse_JsDocTagParam(cls, it)
            break
        case "return":
            rst += parse_JsDocTagReturn(cls, it)
            break
        case "tags":
            rst += parse_JsDocTagTags(cls, it)
            break
        case "unsupported":
            rst += parse_JsDocTagUnsupported(cls, it)
            break
        default:
            rst += ` TODO: JsDoc + ${it.kind}`
            break
        }
    }
    return rst
}


function parse_JsDocTagOnly(cls:string, node: JsDocTagOnly) {
    if (node.kind == 'module')
        return ''
    return `\n**${node.kind}**`
}


function parse_JsDocTagDoc(cls:string, node: JsDocTagDoc) {
    const doc = node.doc ?? ""
    return `

${node.kind}
${'-'.repeat(node.kind.length)}

${doc}
`
}


function parse_JsDocTagNamed(cls:string, node: JsDocTagNamed) {
    return `TODO:JsDocTagNamed: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagValued(cls:string, node: JsDocTagValued) {
    const doc = node.doc ? ` - ${node.doc}`:""
    return `**${node.kind}**: ${node.value}${doc}\n`
}


function parse_JsDocTagTyped(cls:string, node: JsDocTagTyped) {
    return `TODO:JsDocTagTyped: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagNamedTyped(cls:string, node: JsDocTagNamedTyped) {
    return `TODO:JsDocTagNamedTyped: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagParam(cls:string, node: JsDocTagParam) {
    const doc = node.doc? "\n" + node.doc.replaceAll(/^|\n/g, "\n    "):""
    return `
*   **${node.kind}**: \`${node.name}\` ${doc}
`
}


function parse_JsDocTagReturn(cls:string, node: JsDocTagReturn) {
    return `
*   **${node.kind}**: ${node.doc}`
}


function parse_JsDocTagTags(cls:string, node: JsDocTagTags) {
    return `TODO:JsDocTagTags: ${cls} ${JSON.stringify(node)}\n`
}


function parse_JsDocTagUnsupported(cls:string, node: JsDocTagUnsupported) {
    return `:${node.kind}: ${node.value}`
}


function parse_ClassMethodDef(mod:string, cls:string, node: ClassMethodDef) {
    const fun = parse_FunctionDef(mod, node.name, node.functionDef)
    const sym = {"method":"🟨", "getter": "🟦", "setter": "🟧",}[node.kind]
    return `
${doc_title(`/. 🚀 :${node.kind}: ${cls}.${node.name} ${sym}`)}

\`\`\`ts
function ${node.isStatic?"static ":""}${fun}
\`\`\`

${parse_JsDoc(cls, node.jsDoc)}
`
}


function parse_FunctionDef(mod:string, func:string, node: FunctionDef) {
    const params = parse_ParamDef (node.params);
    let returnType = parse_TsTypeDef (node.returnType);
    if (returnType) returnType = ": " + returnType
    // const hasBody = node.hasBody? "hasBody":"";
    // const isAsync = node.isAsync? "isAsync":"";
    // const isGenerator = node.isGenerator? "isGenerator":"";
    let typeParams = parse_TsTypeParamDef (node.typeParams);
    if (typeParams) typeParams = '<' + typeParams + '>'
    // const decorators = parse_DecoratorDef (node.decorators);
    return `${func}${typeParams.replaceAll(/:/g, "extends")}( ${params} )${returnType}`
}


function parse_TsTypeParamDef(params: TsTypeParamDef[]):string {
    const rst = []
    let ext=""
    for (const it of params) {
        ext = parse_TsTypeDef(it.constraint)
        const dv = it.default?.repr? " = " + it.default.repr : ""
        if (it.constraint?.kind == 'typeOperator')
            rst.push(it.name + (ext? " in "+parse_TsTypeDef(it.constraint) + dv:""))
        else
            rst.push(it.name + (ext? " : "+parse_TsTypeDef(it.constraint) + dv:""))
    }
    if (rst.length==0)
        return ""
    return ext==""? `<${rst.join(', ')}>` : `${rst.join(', ')}`
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
    const arg = parse_ParamDef([node.arg])
    return `...${arg}:${parse_TsTypeDef(node.tsType)}`
}


function parse_nodes(mod:string, nodes: DocNode[]) {
    let rst = ""
    for (const it of nodes) {
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
            rst = parse_DocNodeImport(mod, it) + rst
            break
        default:
            rst += `TODO: ${it.kind} + ${it}\n`
        }
    }
    return rst
}


async function doc_generate(mod:string) {
    // let cmd = new Deno.Command(Deno.execPath(),
    //     {args: ['doc', '--json', '--name='+mod, mod+'/mod.ts']})
    // const {code, stdout, stderr} = await cmd.output()
    // const docs: DocNode[] = JSON.parse(new TextDecoder().decode(stdout))
    const docs = await doc(`https://deno.land/std@0.207.0/${mod}/mod.ts`)
    const sorted = docs.sort( (a, b)=> a.kind > b.kind? 1 : a.kind < b.kind? -1:0 )
    return parse_nodes(mod, sorted)
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

Deno.writeTextFileSync("rat.md", '', {append:false})
for (const it in std_libs) {
    const title = doc_title(`/. 🚀 :lib: ${it} [${std_libs[it]}] https://deno.land/std@0.207.0/${it}`, '=')
    Deno.writeTextFileSync("rat.md", title, {append:true})
    if (["fmt","testing","encoding"].indexOf(it) != -1) {
        continue
    }
    // if (it != 'yaml') continue
    const rst = await doc_generate(it)
    const txt = new TextEncoder().encode(rst)
    Deno.writeFileSync( "rat.md", txt, {append:true})
}

