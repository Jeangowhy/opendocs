#!/usr/bin/env -S node

const testELF = {
    title: "Standard English letter frequencies",
    data: {
        E: 12.70,// 1   
        T: 9.10, // 2
        A: 8.20, // 3   
        O: 7.50, // 4
        I: 6.97, // 5   
        N: 6.75, // 6
        S: 6.33, // 7   
        H: 6.09, // 8
        R: 5.99, // 9   
        D: 4.25, // 10
        L: 4.03, // 11  
        C: 2.78, // 12
        U: 2.76, // 13  
        M: 2.41, // 14
        W: 2.36, // 15  
        F: 2.23, // 16
        G: 2.02, // 17  
        Y: 1.97, // 18
        P: 1.93, // 19  
        B: 1.49, // 20
        V: 0.98, // 21  
        K: 0.77, // 22
        J: 0.15, // 23  
        X: 0.15, // 24
        Q: 0.10, // 25  
        Z: 0.07, // 26
    }
}


/**
 * 出现 TypeScript 语言服务不认 JSDoc 类型声明信息：
 * • JSDoc types may be moved to TypeScript types.ts(80004)
 * • Parameter 'x' implicitly has an 'any' type.ts(7006)
 * 
 * JsDoc 文档 https://vscode.dev/github/jsdoc/jsdoc.github.io
 *
 * 需要在 JavaScript 脚本中使用 JSDoc。TypeScript 脚本不支持 JSDoc 标注。并且需要通过 
 * `tsc --init` 命令创建一个 tsconfig.json 文件，并添加以下内容启用 JSDoc 类型标注：
 * ```
 * {
 *   "compilerOptions": {
 *     "allowJs": true,
 *     "checkJs": true
 *   }
 * }
 * ```
 * 使用扩展 Ascii 字符绘制直方图，可以考虑使用 Fira Code 字体避免对齐问题。
 * ```
 * pass:a,q[<style>
 *  code, pre { color: rgba(0, 0, 0, .9);
 *    font-family: monospace,"Droid Sans Mono", "DejaVu Sans Mono";
 *    font-family: "Fira Code", Consolas, "Courier New", 'Iosevka Fixed';
 *    line-height: 1.15;
 *    text-rendering: optimizeSpeed; }
 *    </style>]
 * ```
 */
class Histogram {

    barLength = 12
    withdata  = true

    /**
     * 
     * @param {{[K:string]:number}} data
     * @param {boolean} sorted - default false. TODO
     * @param {"█▇▆▅▄▃▂▁"|"▓▒░"} patterm
     * @param {"TopDown"|"LeftRight"} dir
     */
    constructor( data, sorted = false, patterm ="█▇▆▅▄▃▂▁", dir="TopDown") {
        this.data = data
        this.sorted = sorted
        this.patterm = patterm
        this.direction = dir
    }

    /**
     * @todo * Auto scale bar width to fit with value numbers.
     *       * Sort by value, by series, by none.
     * @returns Ascii Extended bar chart
     */
    buildAsciiExtended() {
        let max = 0
        const keys = Object.keys(this.data)
        for (const element of keys) {
            max = Math.max(max, this.data[element])
        }

        const result = []
        for (const key in this.data) {
            if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                const value = this.data[key];
                let bar = this.makeBar(max, value)
                if (this.direction == "LeftRight") {
                    // DO NOTHING
                }else if (this.direction=="TopDown"){
                    bar = bar.padEnd(this.barLength, " ")
                }
                result.push(bar)
            }
        }
        
        if (this.direction=="TopDown"){
            return (this.withdata? Object.values(this.data).join(" ")+"\n":"")
                   + this.transpose(result).join("\n")+"\n"
                   + keys.join("")
        }
        return result
    }

    /**
     * 
     * @param {string[]} bars 
     */
    transpose(bars) {
        const posed = new Array(this.barLength).fill("")
        for (const bar of bars) {
            for (let index = 0; index < this.barLength; index++) {
                posed[index] += bar[this.barLength - index - 1];
            }
        }
        return posed
    }
    
    /**
     * String padding functions in ES2017 padStart/padEnd
     * 
     * @param {number} scale - max length
     * @param {number} value - current bar length
     * @returns {string} - return bar chart like "▓▒"
     */
    makeBar(scale, value) {
        const bars = Math.floor(value/scale * this.barLength)
        const frac = (value/scale) % 1
        const fraction = Math.ceil(frac * (this.patterm.length-1))
        return "".padEnd(bars, this.patterm[0]) + 
                this.patterm.charAt(this.patterm.length - fraction)
    }
}

const his = new Histogram(testELF.data, true, )
console.log(his.buildAsciiExtended())
