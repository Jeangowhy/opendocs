#!/usr/bin/env node
/// <reference types="node" />

/**
 * JavaScript 没有枚举类型，使用 Symbol 或者 const 模拟 Enum 类型。
 */
const TitleMode = {
  Sharp: Symbol.for("Sharp"),
  Underline: Symbol.for("Underline"),
};

/**
 * TocOrderMaker 计划支持 Markdown 和 reStructuredText 文档的目录自动编号，
 * 暂时支持简易的 Markdown # 符号标记的标题。
 * 
 * @todo 下划线标记的 Markdown 或者 reStructuredText 文档标题。
 */
class TocOrderMaker {
   constructor(start = 1, depth=3, mode = TitleMode.Sharp) {
      console.log(new.target, {mode})
      if (mode == TitleMode.Underline) throw Error("Underline_Not_Supported")
      this.start = start;
      this.depth = depth
   }
   render(data = "") {
      const cache = []
      const lines = data?.split("\n")
      const toc = Array(this.depth).fill(this.start - 1)
      let last = 0
      lines.forEach( (it, id, ik) => {
         if (!it.trim().startsWith('#')) return cache.push(it)

         const parts = it.trim().split(" ")
         const tag = parts[0]
         const title = parts[1]
         const len = tag.length > this.depth? this.depth : tag.length
         if(len > last + 1){
            last ++
         }else if(len < last + 1){
            last = len - 1
            if (last < 0) last = 0
            toc.fill(this.start - 1, last+1)
         }
         toc[last] ++
         cache.push(it.replace(tag, `${tag} ${toc.slice(0, last + 1).join(".")}.`))
      })
      return cache.join("\n")
  }
}

function asserts (test, want, name = "Tname"){
   if (test === want) {
      console.log ({name, testResult: "OK", received: test})
   }else{
      console.log ({name, testResult: "ERROR", want, received: test})
   }
}

/**
 * Data mock
 * Plant text as a Node.js CommonJS module
 */
module.exports.data = `
   # ES6 入门教程
   ### 版权许可
   # [ECMAScript 6 入门]()
   ## 目录
   ## 其他
`;
module.exports.asserts = `
   # 1. ES6 入门教程
   ### 1.1. 版权许可
   # 2. [ECMAScript 6 入门]()
   ## 2.1. 目录
   ## 2.2. 其他
`;


if (require.main){
   
   if (process.argv.indexOf("-test") >= 0){
      asserts(
         new TocOrderMaker(1, 3).render(module.exports.data),
         module.exports.asserts,
         "Simple Test"
      );
   }else if (process.argv[2]){
      const toc = require(process.argv[2]);
      console.log(
         new TocOrderMaker(1).render(toc.data)
      )
   }

}
