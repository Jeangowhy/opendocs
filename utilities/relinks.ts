#!/usr/bin/env -S deno run --allow-read
import fs from "node:fs"

const infile = Deno.args[0]

if (fs.existsSync(infile) && Deno.statSync(infile).isFile) {
    const text = Deno.readTextFileSync(infile);
    procesLinks(text.split("\n"))
} else {
    while (true)
    {
        const buf = new Uint8Array(4)
        console.log("Pipe not supported yet.")
        const num = Deno.stdin.readSync(buf)
        console.log("read: ", {num, buf})
        if (num == null) {
            console.log("Bye!")
            break
        }
    }
}

function procesLinks (links: string[]) {
    let tick = 0
    let id = 0
    const permuted = []
    for (const it of links) {
        if (links.indexOf(it) >= tick){
            id ++
            permuted.push("[LK" + (id + "]: ").padStart(8, "0") + it)
        }
        tick ++
        console.log("LK" + ( "" + id).padStart(5, "0"))
    }
    console.log(permuted.join("\n"))
}
