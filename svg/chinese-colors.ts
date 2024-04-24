#!/usr/bin/env -S deno run -A
console.error("Chinese Traditional Colors")

const table = [
    { "n": "天水碧",  "rgb":"#5aa4ae",  
      "p": "天水碧，染就一江秋色 —— 宋·周密《闻鹊喜·吴山观涛》"},
    { "n": "青冥",  "rgb":"#3271ae",  
      "p": "上有青冥之长天，下有渌水之波澜。 —— 唐·李白《长相思·其一》"},
    { "n": "青雘（huò）",  "rgb":"#007175",  
      "p": "试观烟霞生，如莲敷青雘。 —— 宋·晁说之《和涧上丈人石淙作依元韵》"},
    { "n": "云门",  "rgb":"#a2d2e2", 
      "p": "区区云门色，焉以驻游踪。 —— 明·王世贞《答周比部胤昌见怀》"},
    { "n": "夕岚",  "rgb":"#e3adb9", 
      "p": "夕岚增气色，馀照发光辉。 —— 唐·孟浩然《腊月八日于剡县石城诗礼拜》"},
    { "n": "绛纱",  "rgb":"#b27777", 
      "p": "瑞气氤氲人绛纱，水沉香荐碧流霞。 —— 宋·沈长卿《鹧鸪天》"},
    { "n": "唇脂",  "rgb":"#c25160", 
      "p": "唇脂清浅疑无骨，风味温柔别有胎。 —— 明·陈继儒《樱桃》"},
    { "n": "魏紫",  "rgb":"#903754", 
      "p": "魏紫姚黄欲占春，不教桃杏见清明。 —— 宋·毛滂《浣溪沙·寒食初晴》"},
    { "n": "木槿",  "rgb":"#ba79b1", 
      "p": "漫栽木槿成篱落，已得清阴又得花。 —— 宋·杨万里《田家乐》"},
    { "n": "朱颜酡（tuó）",  "rgb":"#f29a76", 
      "p": "落花纷纷稍觉多，美人欲醉朱颜酡。 —— 唐·李白《前有一樽酒行二首·其一》"},
    { "n": "扶光",  "rgb":"#f0c2a2", 
      "p": "若木朝来结紫霞，扶光夜转成金液。 —— 明·黄佐《松巢为颜录题》"},
    { "n": "苕荣（sháo）",  "rgb":"#ed6d3d", 
      "p": "白露希朝日，苕荣委清秋。 —— 明·何景明《咏怀十首·其九》"},
    { "n": "椒房",  "rgb":"#db9c5e", 
      "p": "桂殿嶔（qīn）岑对玉楼，椒房窈窕连金屋。 —— 唐·骆宾王《帝京篇》"},
    { "n": "鞠（jū）衣",  "rgb":"#d3a237", 
      "p": "坐待泬（xuè）秋色浓，鞠衣仙人来御风。 —— 宋·张嵲（niè）《种植诗》"},
    { "n": "雌黄",  "rgb":"#b4884d", 
      "p": "自点雌黄改自诗，薴（苧）衣不著著蕉衣。 —— 宋·白玉蟾《即事君子堂五首》"},
    { "n": "苍黄",  "rgb":"#b6a014", 
      "p": "土花漠云茫茫，黄河欲尽天苍黄。 —— 唐·李商隐《乐府·杂歌谣辞》"},
    { "n": "桑蕾",  "rgb":"#ead89a", 
      "p": "麦长绿须桑蕾黄，百禽调舌百花香。 —— 宋·释行海《南明道中》"},
    { "n": "秋香",  "rgb":"#bf9c46", 
      "p": "画栏植树悬秋香，三十六宫土花碧。 —— 唐·李贺《金铜仙人辞汉歌》"},
    { "n": "月魄",  "rgb":"#b2b6b6", 
      "p": "月转东墙花影重，花迎月魄若为容。 —— 明·唐寅《花月吟效连珠体·其五》"},
    { "n": "雷雨垂",  "rgb":"#7a7b78", 
      "p": "玄云抱石雷雨垂，苍山夹水龙蛇绕。 —— 明·张羽《钱舜举溪岸图》"},
    { "n": "桃夭",  "rgb":"#f6bec8", 
      "p": "桃之夭夭，灼灼其华。 —— 先秦·佚名《诗经·周南·桃夭》"},
    { "n": "长春",  "rgb":"#dc6b82", 
      "p": "花公莫爱，四时倶好是长春。 —— 宋·王安中《蝶恋花》"},
    { "n": "牙绯",  "rgb":"#c35c5d", 
      "p": "牙绯艾绿拥朋尊，可爱君家好弟昆。 —— 明·王世贞《寿魏鸿胪七帙·其三》"},
    { "n": "官绿",  "rgb":"#2a6e3f", 
      "p": "风来弱柳摇官绿，云破奇峰涌帝青。 —— 宋·陆游《遣兴》"},
    { "n": "漆姑",  "rgb":"#5d8351", 
      "p": "又无仙家漆姑汁，可使浓华不凋落。 —— 明·史鉴《澄上人房紫牡丹开觞予以酒因诗以记》"},
    { "n": "苍葭（jiā）",  "rgb":"#a8bf8f", 
      "p": "上膏著雨苍葭出，山色凝云翠黛颦。 —— 宋·孔平仲《慎思移日至月望交割口占奉呈》"},
    { "n": "翠虬（qiú）",  "rgb":"#446a37", 
      "p": "花面索回银凤舞，苔身宛转翠虬蟠。 —— 宋·陈杰《咏物全文》"},
    { "n": "庭芜绿",  "rgb":"#68945c", 
      "p": "风回小院庭芜绿，柳眼春相续。 —— 唐五代·李煜《虞美人》"},
    { "n": "王刍（chú）",  "rgb":"#a99f70", 
      "p": "荒烟草映王刍绿，落日花开谢豹红。 —— 明·郑真《送春》"},
    { "n": "兰苕（tiáo）",  "rgb":"#a8b78c", 
      "p": "荒泉溲色发兰苕绿，饭熟香起莲瓣红。 —— 清·曹雪芹《红楼梦》"},
    { "n": "碧落",  "rgb":"#aed0ee", 
      "p": "响遏行云横碧落，清和冷月到帘栊。 —— 唐·赵嘏（gǔ）《闻笛》"},
    { "n": "竹月",  "rgb":"#7f9faf", 
      "p": "杉烟竹月无时荒，白蒲青荇春悠扬。 —— 宋·王质《寄题陆务观渔隐》"},
    { "n": "监德",  "rgb":"#6f94cd", 
      "p": "乃知帝监德，岂在险与夷。 —— 明·童轩《感寓·其三十五》"},
    { "n": "群青",  "rgb":"#2e59a7", 
      "p": "如分雁荡群青过，忽挟龙湫万玉来。 —— 明·王世贞《袁黄岩寄雁荡图及新诗见示颇怀壮游之感》"},
    { "n": "太师青",  "rgb":"#547689", 
      "p": "欲问宫中天水碧，都从惟说太师青。 ——清·王士禛《分甘馀话·卷四·宣和旧事》"},
    { "n": "帝释青",  "rgb":"#003460", 
      "p": "帝青天映曲尘波，时有游鱼动绿荷。 —— 清·陆游《采莲三道·其一》"},
    { "n": "青黛",  "rgb":"#45465e", 
      "p": "四时常作青黛色，可怜杜花不相识。 —— 唐·岑参《感遇》"},
    { "n": "螺子黛",  "rgb":"#13393e", 
      "p": "薄醉懒添螺子黛，嫩寒初试杏花衫。 —— 清·沈彩《晚景独坐遣怀》"},
    { "n": "曾青",  "rgb":"#535164", 
      "p": "翠含螺黛山迎户，影覆曾青树隐天。 —— 青·弘历《石槽行宫叠旧韵》"},
    { "n": "瑾瑜",  "rgb":"#1e2732", 
      "p": "白玉凝素液，瑾瑜发砥奇光。 —— 魏晋·陶渊明读《山海经·其四》"},
]

/**
 * TypeScript 支持字面量类型定义，但在定义区间范围的数值类型时，字面量类型显然不是最佳类型。
 * 直接使用 number 又过于宽泛，需要通过 TypeScript 4.1 引入的类型条件递归定义，将类型值
 * 限制在具体的数字范围内。
 * 
 * JavaScript 对象本身基于字典类型，其属性值可以直接通过 key 去取，而数组对象属性的 key
 * 都是数值，另外其 length 属性作为额外用于记录数组长度的属性。所以可以通过 [][number] 
 * 这样的方法来获取数组中每一项，而 []['length'] 则返回当前数组的长度。
 * 
 * 递归实现数值区间类型定义的实现思路就是：如果数组的长度等于传入的数字，则返回 [][number]，
 * 否则从 0 开始（数组的初始值为 0）把每一项加到数组中。Enumerate 泛型参数的形式说明：
 *  
 *   -  R 设置了默认值 = []，所以使用它定义类型时，只需要传入 T 类型参数。
 *   -  R['length'] extends T 类型条件判断只在 R 数组的长度属于 T 类型时返回 R[number]。
 *   -  类型条件不满足时，Enumverate 就递归处理，扩展数组每个属性值，包括 R['length']。
 * 
 * 通过递归，将 0、1、2 ... 等等值添加要类型的字面量列表中，不含给 Enumerate 指定的最大值。
 * 借助 Exclude 排除类型，将不需要的部分数值排除在外就可以实现指定区间的数值类型。
 * 利用 TypeScript 的模板字符串类型，通过字符串的拼接就可以实现小数点的枚举。
 * 
 * TypeScript 4.5 起支持了条件类型的尾递归消除，允许类型条件递归值最大限制达到 1000
 * 在旧版本中由于缺失有效的尾递归消除优化，导致执行 Enumerate<50> 报错，超出 TypeScript
 * 类型实例化的深度限制 (the type instantiation depth limit) 。
 * 具体可以看下这个 Tail recursive evaluation of conditional types #45711 。
 * 
 * TypScript 似乎走了一条弯路，并且不见最终会好，这些类型需求可以提供一个 TypeCheck 机制
 * 给开发者，而不是一定要使用某种特殊功能或者形式来约束。
 * 
 * REF.
 * 
 * -  HEX Validation in TypeScript https://catchts.com/hex-validation
 * -  RangeType https://stackoverflow.com/questions/39494689
 * -  https://www.fullstackbb.com/typescript/type-in-certain-number-range/
 * -  https://github.com/microsoft/TypeScript/pull/45711
 * -  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types
 * -  https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types
 * 
 **/
type Enumerate<T extends number, R extends number[] = []> = 
     R['length'] extends T? R[number] : Enumerate<T, [R['length'], ...R]>

type RGBColor  = Enumerate<255> | 255
type CMYKColor = `0.${Enumerate<999>}` | 0.999 | 1.000 | 0.000

// const r: RGBColor = 255  // OK
// const g: RGBColor = 0    // OK
// const b: RGBColor = -1   // Type '-1' is not assignable to RGBColor
// const x: RGBColor = 256  // Type '256' is not assignable to RGBColor

// const cyan: CMYKColor = 0.0        // OK
// const magenta: CMYKColor = 1.0     // OK
// const yellow: CMYKColor = 1.0000   // OK
// const black: CMYKColor = 1.1       // Type '1.1' is not assignable to CMYKColor
// console.log({cyan, magenta, yellow, black})

type HexColorDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 
           'a' | 'b' | 'c' | 'd' | 'e'| 'f' | 'A' | 'B' | 'C' | 'D' | 'E'| 'F';
type HexColorSemi = `#${HexColorDigit}${HexColorDigit}${HexColorDigit}`
type HexColor =  `#${HexColorSemi}${HexColorSemi}` 
//                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// TypeScript 5.4: Expression produce an union type that is too complex to present

// const hsf: HexColorSemi = '#FFF'  // OK
// const hsz: HexColorSemi = '#000'  // OK
// const hse: HexColorSemi = '#ggg'  // The type '#ggg' is not assignable to HexColorSemi

// const hf: HexColor = 'FFFFFF'
// const he: HexColor = 'FFFFFg' // No type check (any)
// console.log({hse, hf, he})


class ColorBase
{
    /**
     * @param {RGB} RGB color to be convert to CMYK color.
     * @return {CMYK}  the CMYK color module components corresponding RGB.
     **/
    static rgb2cmyk(rgb: RGB) : CMYK
    {
        const r = rgb.red / 255
        const g = rgb.green / 255
        const b = rgb.blue / 255

        const black = 1.0 - Math.max(r, g, b)
        const k = 1 - black

        const cyan = (k - r) / k
        const magenta = (k - g) / k
        const yellow = (k - b) / k

        return new CMYK(cyan, magenta, yellow, black)
    }
}

class RGB extends ColorBase
{
    red: RGBColor
    green: RGBColor
    blue: RGBColor

    constructor();
    constructor(r?: RGBColor, g?: RGBColor, b?: RGBColor)
    {
        super()
        this.red = r? r : 0
        this.green = g? g : 0
        this.blue = b? b : 0
    }

    /**
     * @param {string} RGB color, start with #, such as #eea2a4.
     * @return {RGB}  the RGB color.
     **/
    static fromHex(hex: HexColor)
    {
        const mats = /#(.|..)(.|..)(.|..)$/.exec(hex)
        if (null == mats) return new RGB()
        const r = parseInt(mats[1], 16)
        const g = parseInt(mats[2], 16)
        const b = parseInt(mats[3], 16)
        return new RGB(r, g, b)
    }
}

class CMYK extends ColorBase
{
    cyan: CMYKColor
    magenta: CMYKColor
    yellow: CMYKColor
    black: CMYKColor

    constructor();
    constructor(c?: CMYKColor, m?: CMYKColor, y?: CMYKColor, k?: CMYKColor)
    {
        super()
        this.cyan = c? c : 0
        this.magenta = m? m : 0
        this.yellow = y? y : 0
        this.black = k? k : 0
    }

    static fromRGB(rgb: RGB)
    {
        return ColorBase.rgb2cmyk(rgb)
    }
}


function make_color_table()
{
    const width = 600
    const height= table.length / 2 * 60
    console.log(`<?xml version="1.0" encoding="UTF-8"?>
<svg version="1.2" baseProfile="tiny" 
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    width="${width}" height="${height}">
`)
    for (const color of table) 
    {
        const x = 0
        const y = 0
        const r = 12
        console.log(`
        <circle cx="${x}" cy=  "${y}" r="${r}" fill="${color.rgb}" />
            <text>${color.p}</text>`)
    }
    console.log("</svg>")
}


/*
out=../pictures/chinese-colors.svg; /od/svg/chinese-colors.ts > $out ; inkview $out
*/
if (import.meta.main)
{
    // make_color_table()
    const rgb = RGB.fromHex("#fc8c23")
    const cmyk = CMYK.fromRGB(rgb)
    console.error({rgb, cmyk})
}
/*
  {
    "CMYK": [ 0, 56, 87, 0 ],
    "RGB": [252, 140, 35 ],
    "hex": "#fc8c23",
    "name": "北瓜黄",
  },
*/