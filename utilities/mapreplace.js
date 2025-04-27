#!/usr/bin/env -S deno run --allow-read
import fs from "node:fs"

/**
 * Usage: 
 * ./mapreplace.js some.file [datamap | stdin]
 * ./mapreplace.js some.file [datamap | stdin] >> output.dat
 *  'C:\opendocs\utilities\mapreplace.js'
 * Keys:
 * • define pattern to match tags out of source.
 * • provie datamap that map tags to destination text.
 * • execute MapReplace's replace method.
 */
class MapReplace {
    /**
     * 
     * @param {string|string[]} datamap - data in line form, line form is `<subject><delimiter><replacement>` 
     * @param {string} delimiter - delimiter for data linie, default is ",`"
     * @param {RegExp|string} pattern - pattern to match subject in source data.
     */
    constructor(datamap, delimiter=", ", pattern=/[-:/<>_\dA-Za-z]+/g) {
        this.delimiter = delimiter
        this.pattern = pattern
        this.datamap = {}
        if (typeof(datamap)=="string") {
            datamap = datamap.split(/[\r\n]+/)
        }
        datamap.forEach(line=>{
            const [key, value] = line.split(this.delimiter)
            if ( typeof(value) == "undefined") {
                return console.warn("malformed data line:", {line,key, value})
            }
            this.datamap[key] = value
        })
    }
    
    /**
     * 
     * @param {string} data - source string.
     */
    replace(data) {
        const matches = data.matchAll(this.pattern)
        const filterout = []
        const tags = []
        let last = 0
        for (const it of matches) {
            const map = Object.hasOwn(this.datamap, it[0])
            tags.push({tag:it[0], pos:it.index})
            if (map) {
                const mapto = this.datamap[it[0]]
                filterout.push(data.slice(last, it.index), mapto)
                last = it.index + it[0].length
            }
        }
        // console.log(JSON.stringify(tags, "  ")
        return filterout.join("") + data.slice(last)
    }
}

const infile = Deno.args[0]
const datamap = Deno.args[1]

if (fs.existsSync(infile) && Deno.statSync(infile).isFile) {
    const text = Deno.readTextFileSync(infile)

    if (fs.existsSync(datamap) && Deno.statSync(datamap).isFile) {
        const map = Deno.readTextFileSync(datamap)
        const mr = new MapReplace(map)
        console.log(mr.replace(text))
    } else {
        const decoder = new TextDecoder("utf-8")
        const can = []
        console.log("Press Ctrl+D/Z to perform map replace!")
        while (true)
        {
            const buf = new Uint8Array(512)
            const num = Deno.stdin.readSync(buf)
            if (num == null) { // Ctrl+D/Z
                break
            }
            const line = decoder.decode(buf.subarray(0, num))
            can.push(line)
        }
        const mr = new MapReplace(can)
        console.log(mr.replace(text))
    }
}


