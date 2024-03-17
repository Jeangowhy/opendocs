#! /usr/bin/env -S deno run --allow-read --allow-write
/// <reference types="node" />
/// <reference lib="dom" />
/// <reference lib="deno.unstable" />
/// <reference types="npm:@types/node" />

import fs from "node:fs"
import TurndownService from 'npm:turndown'

// import process from "node:process"
// console.log(Deno.args)

const turndownService = new TurndownService()

if (import.meta.main) {
  const file = Deno.args[0]
  if (Deno.args.length > 1 && fs.existsSync(file)) {
    const enc = Deno.args[1] || "utf-8"
    const decoding = new TextDecoder(enc, { ignoreBOM: true })
    const text = decoding.decode(fs.readFileSync(file))
    const markdown = turndownService.turndown(text)
    Deno.stdout.write(new TextEncoder().encode(markdown))
  } else if (Deno.args.length > 1 && !fs.existsSync(file)) {
    console.log("No such file: ", file, { pwd: Deno.cwd() })
  } else {
    // Node: process.stdin.on("data", buf => { process.stdout.write(buf)})
    const enc = Deno.args[0] || "utf-8"
    const decoding = new TextDecoder(enc, { ignoreBOM: true })
    const encoding = new TextEncoder()
    for await (const chunk of Deno.stdin.readable) {
      const text = decoding.decode(chunk)
      Deno.stdout.write(encoding.encode(turndownService.turndown(text)))
    }
  }
}

/**
 * Usage of CLI:
 * 
 * ```sh
 *   # deno run html2md.ts [file] [encoding]
 *   echo "<h1>Title</h1>" | ./html2md utf8
 *   ./html2md some.html gbk
 *   ./html2md some.html > some.md
 * ```
 * Usage as JavaScript/TypeScript Module:
 * 
 * ```ts
 * import html2md from '/opendocs/html2md.ts' 
 * html2md("<h1>HTML Page Title</h1>")
 * 
 * const module = await import('/opendocs/html2md.ts') 
 * module.default("<h1>HTML Page Title</h1>")
 * ```
 */
export default function markdown(html:string) {
  return turndownService.turndown(html)
}


/* Node Version
***************************************************************
#! /usr/bin/env node
/// <reference types="node" />
const fs = require("node:fs")
/// const TurndownService = require('turndown')
const TurndownService = require('C:/kotlin/html2md/node_modules/turndown/lib/turndown.cjs')

var turndownService = new TurndownService()

const file = process.argv[2]
if (process.argv.length > 2 && fs.existsSync(file)) {
  // var markdown = turndownService.turndown('<h1>Hello world!</h1>')
  var enc = process.argv[3] || "utf-8"
  const contents = fs.readFileSync(file).toString( enc )
  var markdown = turndownService.turndown(contents)
  process.stdout.write(markdown)
} else {
  process.stdin.on("data", (it) => {
    // console.log('HTML data:' + it.length + it.toString());
    var enc = process.argv[2] || "utf-8"
    process.stdout.write(turndownService.turndown(it.toString(enc)));
  })
}
*/