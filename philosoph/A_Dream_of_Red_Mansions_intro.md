## 故事概要与人物关系
https://tv.cctv.com/2021/12/02/VIDAC0PeeLdQernAJmdOWedV211202.shtml
央视纪录片《曹雪芹与红楼梦》 https://www.bilibili.com/video/BV1t24y1G7ZB
连续剧《红楼梦》 https://www.xuexi.cn/lgpage/detail/index.html?id=16795160068910945293
高清修复《红楼梦》 https://www.bilibili.com/video/BV1k84y1K7Te
紅樓夢 台大公开课 歐麗娟 http://ocw.aca.ntu.edu.tw/ntu-ocw/index.php/ocw/cou/101S120
存世脂评系统《红楼梦》版本简介 http://www.guoxuedashi.net/a/1874pgqt/111954h.html

第一次读《红楼梦》是直接拿起原书从第一页开始的，那是一次失望的体验，根本无法理解小说的好，更别提什么继续阅读的兴致。这大概是很多“槛内人”的境况，应另寻入门方法，比如从历史、经济、社会制度，或者人物关系等等角度入手，管中窥豹，先见其一斑，再寻求全解。当然，我认为读名著的终极正确形态，应该是以二创的方式进行，通过自己的抽象思维将小说文字中构建的情境重现。

    范成大《重九日行营寿藏之地》
    家山随处可行楸，荷锸携壶似醉刘。
    纵有千年铁门限，终须一个土馒头。
    三轮世界犹灰劫，四大形骸强首丘。
    蝼蚁乌鸢何厚薄，临风拊掌菊花秋。

范成大（1126-1193），字至能，号称石湖居士。汉族，平江吴县（今江苏苏州）人。南宋诗人。谥文穆。从江西派入手，后学习中、晚唐诗，继承了白居易、王建、张籍等诗人新乐府的现实主义精神，终于自成一家。风格平易浅显、清新妩媚。诗题材广泛，以反映农村社会生活内容的作品成就最高。

朱嘉雯 文学大观园 《红楼梦》
（前100讲） https://www.bilibili.com/video/av83623871/?p=1
（第101讲---第190讲） https://www.bilibili.com/video/BV1qJ411774Q/
（191讲--250讲） https://www.bilibili.com/video/BV1bJ41177aE/
（251讲--304讲完结） https://www.bilibili.com/video/av83661557/

```js
// var targets = [1, 0];
for( var p of __INITIAL_STATE__.videoData.pages){
    // if ( !(p.page in targets)) continue;
    ((p)=>{
        fetch(`https://www.bilibili.com/video/BV1qJ411774Q?p=${p.page}`).then(res => { 
            return res.text();
        }).then(res => {
            var json = res.split("window.__playinfo__=")[1].split("</script>")[0];
            var playinfo = JSON.parse(json);
            var url = playinfo.data.dash.audio[0].base_url;
    
            console.log(`${p.part} ${url.split('?')[0]}`);
            //window.open(url);
        });
    })(p);
}
// @javascript:open(__playinfo__.data.dash.audio[0].base_url);
// window.open(__playinfo__.data.dash.audio[0].base_url);
// document.querySelector("#biliMainHeader > div > div > ul.left-entry > li:nth-child(1) > a").href=__playinfo__.data.dash.audio[0].base_url
// https://socialsisteryi.github.io/bilibili-API-collect/docs/misc/sign/wbi.html
// https://socialsisteryi.github.io/bilibili-API-collect/docs/video/videostream_url.html
var aid = __INITIAL_STATE__.aid;
var bvid = __INITIAL_STATE__.bvid;
var cid = __INITIAL_STATE__.videoData.pages[5].cid;
var session = "4be163c332b1b3985286fe0e7305bb58";
var w_rid = "8a26c630c278a1e01b2063737f54603f";
var wts = 1689016014;
fetch(`https://api.bilibili.com/x/player/wbi/playurl?avid=${aid}&bvid=${bvid}&cid=${cid}&qn=0&fnver=0&fnval=4048&fourk=1&gaia_source=&session=${session}&w_rid=${w_rid}&wts=${wts}`).then(res => res.text()).then(res=>{
    var json = JSON.parse(res);
    console.log(json);
});

// Bilibili 贴子配图抓取
var out = [
  "cd ..", 
  `$url = "${location.href}"`,
  `$name = "${document.title.split(" - ")[0]}"`,
  "md $name",
  "cd $name",
  // "$list = @'",
  // "'@ -split "`n"",
  // "$list |%{ curl -O $_}",
  ];
document.querySelectorAll("#read-article-holder > figure > img").forEach((img,id) => out.push(`curl -o ${id}.jpg `+img.src.split("@")[0]));
console.log(out.join("\n"));
```

戴敦邦彩绘：
http://data2.xmst.org:8081/pc/bookreader/1445
http://data2.xmst.org:8081/pc/bookreader/1496
http://data2.xmst.org:8081/pc/bookreader/1498

    { id: 1445, page: 45, title: "《长恨歌》（彩绘彩墨连环画）作画：戴敦邦" } ,
    { id: 1496, page: 82, title: "含绣轩-新绘红楼梦（戴敦邦彩绘）后40回" } ,
    { id: 1498, page: 162, title: "含绣轩-新绘红楼梦（戴敦邦绘）前80回" } ,


Powershell 脚本调用 IrfanView 拼接图片：

```sh
    $len = (dir 0*.jpg).Length / 2
    $list = (0..($len-1))
    foreach($it in $list){
        $a = (10001+2*$it).ToString().Substring(1,4) + ".jpg"
        $b = (10002+2*$it).ToString().Substring(1,4) + ".jpg"
        &"c:\Program Files\IrfanView\i_view64.exe" "/panorama=(1,$a,$b) /convert=P$a"
    }
```

厦门市少年儿童图书馆 数字连环画阅览室 查询脚本 (Node)：

```js
    // import https from "node:https"
    let http = require("http");
    let zlib = require("zlib");
    let StringDecoder = require("string_decoder").StringDecoder
    const MAXROUTINE = 30;

    // 厦门市少年儿童图书馆 数字连环画阅览室 在线图书
    // http://data2.xmst.org:8081/pc/Index
    const url = "http://data2.xmst.org:8081/pc/booksinglereader/{id}";
    const img = "http://data2.xmst.org:8081/UploadImg/bookpage/big/467/0001";

    let filters = [
        { id: 0, page: NaN, title: "未将对象引用设置到对象的实例。" },
    ];
    let rqpool = [ ];
    let idpool = [ ];
    filters.forEach( it => filters.push(it.id));
    for (let id = 0; id<32963; id++) {
        if(filters.indexOf(id)>=0) continue;
        idpool.push({id, ttl:0});
    }

    function list(){
        // let it = {};
        // while ((it = idpool.shift())){
        //     http.get(url.replace("{id}", it.id), responsible(it))
        //     .on('error', onerror(it));
        // }
        if (idpool.length && rqpool.length < MAXROUTINE){
            let it = idpool.shift();
            rqpool.push(it);
            http.get(url.replace("{id}", it.id), responsible(it))
            .on('error', onerror(it));
        }
        if (idpool.length > 0 || rqpool.length>0){
            // what is the difference betweent nextTick and setImmediate?
            // https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick#processnexttick-vs-setimmediate
            // nextTick appends and executes task in current callstack and Event Loop.
            // process.nextTick(list); 
            // setImmediate(list); // appends task that calls in next Event Loop
            setTimeout(list, 1000/24); // reduce CPU time.
        }
    }
    list();
    
    function onerror(it) {
        return err => {
            rqpool = rqpool.filter(t => it!=t);
            if (['ECONNREFUSED', 'ECONNRESET', 'ETIMEDOUT'].indexOf(err.code) >=0){
                it.ttl++;
                idpool.push(it);
                // process.nextTick(list);
            }else{
                console.log({id:it.id, err});
            }
        }
    }

    function responsible(it) {
        return res =>{
            let buf = [];
            res.on('data', data => buf.push(data));
            res.on('end', () => {
                rqpool = rqpool.filter(t => it!=t);
                const decoder = new StringDecoder('utf8');
                const txt = decoder.end(Buffer.concat(buf));
                const title = txt.split("<title>")[1].split("</title>")[0];
                const page = parseInt(txt.split('"page_number": ')[1]);
                console.log( {id:it.id, page, title}, ",");
                // if (it.ttl>0) console.log("retry ", it);
                // zlib.gunzip(Buffer.concat(buf), (err, txt) => {});
            });
        }
    }
```

Deno TypeScript 脚本下载、查询目录数据：

```js
/// <reference lib="dom" />
/// <reference lib="deno.unstable" />
const kv = await Deno.openKv();

const MAXROUTINE = 50;
let sentinal_abort = false;
Deno.addSignalListener( "SIGINT", ()=>{
    sentinal_abort = true;
    let len = -1;
    console.log("Wait for queued task finished before exit...");
    const id = setInterval(()=>{
        if (len != rqpool.length){
            len = rqpool.length;
            console.log("\x1b[1A\x1b[Kqueued task: ", len);
        }
        if (rqpool.length<=0) {
            clearInterval(id);
        }
    }, 1000);
})

interface Item {
  id: number;
  page: number;
  title: string;
}
interface ItemEssential {
  id: number;
  ttl: number;
  it: Item | null;
}

console.log("%c厦门市少年儿童图书馆 数字连环画阅览室", "color: red;background-color: blue");
console.log("http://data2.xmst.org:8081/pc/Index");
const URL = "http://data2.xmst.org:8081/pc/booksinglereader/{id}";
const IMG = "http://data2.xmst.org:8081/UploadImg/bookpage/big/{id}/{page}";

const filters:Item[] = [
    { id: 0, page: NaN, title: "未将对象引用设置到对象的实例。" },
    // { id: 6262, page: 33, title: "红楼梦选绘-1王凤姐弄权铁槛寺" },
    // { id: 6263, page: 32, title: "红楼梦选绘-2宝钗扑蝶" },
    // { id: 6264, page: 31, title: "红楼梦选绘-3黛玉葬花" },
    // { id: 6265, page: 36, title: "红楼梦选绘-4袭人受宠" },
    // { id: 6266, page: 39, title: "红楼梦选绘-5鸳鸯抗婚" },
    // { id: 6267, page: 39, title: "红楼梦选绘-6尤三姐殉情" },
    // { id: 6268, page: 32, title: "红楼梦选绘-7晴雯蒙冤" },
    // { id: 6269, page: 51, title: "红楼梦选绘-8宝玉出走" },
    // { id: 18624, page: 39, title: "后红楼梦06" } ,
    // { id: 18625, page: 43, title: "后红楼梦05" } ,
    // { id: 18626, page: 42, title: "后红楼梦04" } ,
    // { id: 18627, page: 43, title: "后红楼梦03" } ,
    // { id: 18628, page: 50, title: "后红楼梦02" } ,
    // { id: 18629, page: 50, title: "后红楼梦01" } ,
    { id: 23352, page: 124, title: "红楼梦-16宝玉出走（上海人民美术出版社81版）" },
    { id: 23353, page: 124, title: "红楼梦-15巧姐避祸（上海人民美术出版社81版）" },
    { id: 23354, page: 180, title: "红楼梦-14查抄贾府（上海人民美术出版社81版）" },
    { id: 23355, page: 172, title: "红楼梦-13黛玉焚稿（上海人民美术出版社81版）" },
    { id: 23356, page: 132, title: "红楼梦-12金桂之死（上海人民美术出版社81版）" },
    { id: 23357, page: 148, title: "红楼梦-11潇湘惊梦（上海人民美术出版社81版）" },
    { id: 23358, page: 196, title: "红楼梦-10抄检大观园（上海人民美术1981版）" },
    { id: 23359, page: 204, title: "红楼梦-9红楼二尤（上海人民美术出版社82版）" },
    { id: 23360, page: 140, title: "红楼梦-8宝玉瞒赃（上海人民美术出版社82版）" },
    { id: 23361, page: 92, title: "红楼梦-7鸳鸯抗婚（上海人民美术出版社82版）" },
    { id: 23362, page: 116, title: "红楼梦-6二进荣国府（上海人民美术出版社81版）" },
    { id: 23363, page: 124, title: "红楼梦-5宝玉受笞（上海人民美术出版社81版）" },
    { id: 23364, page: 196, title: "红楼梦-4黛玉葬花（上海人民美术出版社81版）" },
    { id: 23365, page: 108, title: "红楼梦-3王熙凤弄权（上海人民美术出版社81版）" },
    { id: 23366, page: 116, title: "红楼梦-2宝黛初相会（上海人民美术出版社81版）" },
    { id: 23367, page: 100, title: "红楼梦-1乱判葫芦案（上海人民美术出版社81版）" },
    // { id: 23377, page: 74, title: "红楼梦故事下二册（人民美术出版社85版）" },
    // { id: 23378, page: 73, title: "红楼梦故事下一册（人民美术出版社85版）" },
    // { id: 23379, page: 76, title: "红楼梦故事上二册（人民美术出版社85版）" },
    // { id: 23380, page: 73, title: "红楼梦故事上一册（人民美术出版社85版）" },
    { id: 1445, page: 45, title: "《长恨歌》（彩绘彩墨连环画）作画：戴敦邦" } ,
    { id: 1496, page: 82, title: "含绣轩-新绘红楼梦（戴敦邦彩绘）后40回" } ,
    { id: 1498, page: 162, title: "含绣轩-新绘红楼梦（戴敦邦绘）前80回" } ,
    // { id: 30422, page: 22, title: "彩绘全本-红楼梦-1" },
    // { id: 30423, page: 22, title: "彩绘全本-红楼梦-2" },
    // { id: 30424, page: 22, title: "彩绘全本-红楼梦-3" },
    // { id: 30425, page: 22, title: "彩绘全本-红楼梦-4" },
    // { id: 30426, page: 22, title: "彩绘全本-红楼梦-5" },
    // { id: 30427, page: 22, title: "彩绘全本-红楼梦-6" },
    // { id: 30428, page: 22, title: "彩绘全本-红楼梦-7" },
    // { id: 30429, page: 22, title: "彩绘全本-红楼梦-8" },
    // { id: 30430, page: 22, title: "彩绘全本-红楼梦-9" },
    // { id: 30431, page: 22, title: "彩绘全本-红楼梦-10" },
    // { id: 30432, page: 22, title: "彩绘全本-红楼梦-11" },
    // { id: 30433, page: 16, title: "彩绘全本-红楼梦-12" },
];
let rqpool:ItemEssential[] = [ ];
const idpool:ItemEssential[] = [ ];

for (let id = 0; id<.32963; id++) {
    if (filters.filter( it=>it.id==id).length>0) continue;
    idpool.push({id, ttl:0, it:null});
}

function list(){
    if (sentinal_abort) {
        return;
    }
    if (idpool.length && rqpool.length < MAXROUTINE){
        const it = idpool.shift()!;
        rqpool.push(it);
        fetch(URL.replace("{id}", it.id.toString()))
        // .then(async res=>"<title>mytitle</title>"+await res.text())
        .then(responsible(it)/*,handle_error(it)*/)
        .catch(handle_error(it));
    }
    if (idpool.length > 0 || rqpool.length>0){
        setTimeout(list, 1000/260); // setTimeout to reduce CPU time.
    }
}
list();

function pageToPad(page:number):string {
    return (page+10000).toString().substr(1);
}
function itemToDir(it:Item):string {
    return `${it.id} ${it.title}`
}

for (const it of filters) {
    if (!it.page) continue;
    const dir = itemToDir(it);
    try {
        const stat = Deno.statSync(dir);
        if (!stat.isDirectory) {
            Deno.mkdirSync(dir, {recursive:false, mode:0o666})
        }
    } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
            Deno.mkdirSync(dir, {recursive:false, mode:0o666})
        } else {
            throw err;
        }
    }

    for (let page=1; page<=it.page; page++){
        const {id,title} = it;
        const p = pageToPad(page);
        const file = `${dir}/${p}.jpg`;
        try {
            const stat = Deno.statSync(file)
            if (stat.isFile && stat.size > 50000) {
                console.info(`Skip ${file}`)
                continue;
            }
        } catch (err) {
            if (err instanceof Deno.errors.NotFound) {
                // ...
            } else {
                throw err;
            }
        }
        idpool.push({id, ttl:0, it:{id, page, title}});
    }
}

function get(){
    if (sentinal_abort) {
        return;
    }
    if (idpool.length && rqpool.length < MAXROUTINE){
        const it = idpool.shift()!;
        rqpool.push(it);
        const page = pageToPad(it.it!.page);
        fetch(IMG.replace("{id}", it.id.toString()).replace("{page}", page))
        .then(writable(it))
        .catch(handle_error(it));
    }
    if (idpool.length > 0 || rqpool.length>0){
        setTimeout(get, 1000/260); // setTimeout to reduce CPU time.
    }
}
get();

function handle_error (it: ItemEssential) : (err: TypeError )=>void {
    return (err: TypeError) => {
        if (it.ttl<3){
            it.ttl++;
            idpool.push(it);
        }
        console.error({id: it.id, error: err.name + err.message});
    }
}

function writable (it: ItemEssential) : (arg: Response)=>void {
    return async (res) =>{
        const {ok, status, statusText, url} = res;
        if (!ok) {
            console.error({status, statusText, url});
            return;
        }
        const dir = itemToDir(it.it!);
        const page = pageToPad(it.it!.page);
        const file = await Deno.open(`${dir}/${page}.jpg`, {create:true, write:true});
        console.log( it.it, url )
        await res.body?.pipeTo(file.writable);
        rqpool = rqpool.filter(t=> it!=t)
    }
}

function responsible (it: ItemEssential) : (arg: Response)=>void {
    return async (res) =>{
        // const decoder = new TextDecoder('utf8');
        // const buf = await res.arrayBuffer();
        // console.log(decoder.decode(buf).substring(0,80));
        if (!res.ok) {
            // ['ECONNREFUSED', 'ECONNRESET', 'ETIMEDOUT'].indexOf(err.code)
            if (it.ttl<3 && [500, 404].indexOf(res.status)<0){
                it.ttl++;
                idpool.push(it);
            }else{
                console.log({
                    id: it.id,
                    status: res.status,
                    statusText: res.statusText,
                });
            }
        }

        const txt = await res.text();
        rqpool = rqpool.filter(t => it!=t);
        const title = txt.split("<title>")[1].split("</title>")[0];
        const page = parseInt(txt.split('"page_number": ')[1]);
        console.log( {id:it.id, page, title}, ",");
    }
}
```


《红楼梦》，原名《石头记》，是中国古代章回体长篇小说，中国古典四大名著之首。其通行本共 120 回，一般认为前 80 回是清代作家曹雪芹所著，后40回作者为无名氏，由高鹗，程伟元整理。小说以贾、史、王、薛四大家族的兴衰为背景，以富贵公子贾宝玉为视角，以贾宝玉与林黛玉、薛宝钗的爱情婚姻悲剧为主线，描绘了一些闺阁佳人的人生百态，展现了真正的人性美和悲剧美，是一部从各个角度展现女性美以及中国古代社会百态的史诗性著作。

《红楼梦》前 80 回约 61 万字，总字数 73 万字，由 4,462 个不同单字组合而成。

近代文学家王国维评价：《红楼梦》，哲学的也，宇宙的也，文学的也。此《红楼梦》之所以大背于吾国人之精神，而其价值亦即存乎此。……《红楼梦》一书与一切喜剧相反，彻头彻尾之悲剧也！

《红楼梦》的英文书名：
杨宪益和戴乃迭先生翻译成 A Dream of Red Mansions；
霍克思先生把它翻译成 The Story of the Stone；
王际真先生的早期翻译 Dream of the Red Chamber；

作者曹雪芹（1715年-1763年），名霑，字梦阮，号雪芹，又号芹圃、芹溪。祖籍辽阳。曹寅之孙， [57] 清朝小说家、诗人、画家。

《红楼梦》诞生于18世纪中国封建社会末期，当时清政府实行闭关锁国，举国上下沉醉在康乾盛世、天朝上国的迷梦中。这时期从表面看来，好像太平无事，但骨子里各种社会矛盾正在加剧发展，整个王朝已到了盛极而衰的转折点。成书时间正处于康乾盛世之间的过渡期，在康熙、雍正两朝，曹家祖孙三代四个人总共做了 58 年的江宁织造。曹家极盛时，曾办过四次接驾的阔差。曹雪芹生长在南京，少年时代经历了一段富贵繁华的贵族生活。但后来家渐衰败，雍正六年（1728）因亏空得罪被抄没，曹雪芹一家迁回北京。回京后，他曾在一所皇族学堂“右翼宗学”里当过掌管文墨的杂差，境遇潦倒，生活艰难。晚年移居北京西郊，生活更加穷苦，“满径蓬蒿”，“举家食粥酒常赊”。《红楼梦》一书是曹雪芹破产倾家之后，在贫困之中创作的。创作年代在乾隆初年到乾隆三十年（1736—1765）左右。

《红楼梦》里面所写的贾府是在社会上很有地位的一个贵族。贾府分两支，一个是宁国府，一个是荣国府。宁国府是高于荣国府的，因为最早宁国公和荣国公是同胞兄弟。宁公居长，荣公居次，所以宁国府很重要。

宁国府和贾母平辈的都死了。宁国府辈分最高的是贾敬，因为贾敬当了道士以后就再没有子女了，他只有一个儿子叫贾珍。贾珍也只生了一个儿子叫贾蓉。所以这样一个封建贵族家庭，这么重要的一个府第，等于就形成三代单传了。

荣国府人丁比较旺盛，号称 3、4 百号人，而宁国府人丁比较寥落，小说第二回借古董商冷子兴之口详细地介绍了贾府人物关系。

《红楼梦》故事开始的时候，作者是这样设计的：荣国府还有一位老长辈活着，就是贾母，乃金陵世家史侯的小姐。宁荣二府都叫她老祖宗，辈分最高。

这四家皆连络有亲，一损皆损，一荣皆荣，扶持遮饰，俱有照应。正因如此，才有“护官符”云：

    贾不假，白玉为堂金作马。
    阿房宫，三百里，住不下金陵一个史。
    东海缺少白玉床，龙王来请金陵王。
    丰年好大雪，珍珠如土金如铁。

四大家族人物关系：

    +- 贾演（宁国公）
    |   +- 贾代化
    |       +- 贾敷
    |       +- 贾敬
    |           +- 贾珍（独子），妻尤氏（继室）
    |           |   +- 贾蓉，妻秦可卿
    |           |   +- 贾蔷
    |           +- 贾惜春
    +- 贾源（荣国公）
        +- 贾代善（贾母史太君）
            +- 贾赦，妻邢夫人
            |   +- 贾琏，妻王熙凤
            |   +- 贾琮（庶出） 
            |   +- 贾迎春（庶出）
            +- 贾政，妻王夫人，薛姨妈姐姐（宝钗母亲）、王熙凤父亲的妹妹。
            |   +- 贾珠，英年早逝，妻李纨，生贾兰（独子）。
            |   +- 贾元春，早年入宫充任女史，后进封凤藻宫尚书，加封贤德妃。
            |   +- 贾宝玉
            |   +- 贾探春（庶出），母亲赵姨娘。
            |   +- 贾环（庶出），母亲赵姨娘。
            +- 贾敏，幺女，贾母掌上明珠，嫁林如海，生独女林黛玉。

    + 贾演（宁国公）
    | + 贾代化（长子），妻史氏。
    |   + 贾敷（长子），夭折。
    |   + 贾敬（次子），丫鬟下人：焦大、王兴、潘又安。
    |     + 贾珍（独子），妻尤氏（继室），丫鬟：茄官、银蝶儿、万儿、来升、喜儿、寿儿、栓儿。
    |     |  + 贾蓉，妻秦可卿（与公公有染，爬灰事件），丫鬟：瑞珠、宝珠。
    |     |  + 贾蔷，从小跟贾珍讨生活，与丫鬟龄官相好。
    |     ，别名四姑娘、四丫头、藕榭、藕丫头，丫鬟：入画、彩屏、彩儿。
    + 贾源（荣国公）
    | + 贾代善，妻史太君（贾母），丫鬟：鸳鸯、文官、琥珀、蕊珠、翡翠、玻璃、傻大姐、鹦鹉。
    |   + 贾赦，妻邢夫人，贾府经营者，丫鬟：秋桐、费婆子、王善保家的（陪房）。
    |   | ，丫鬟：平儿、小红、丰儿、彩明、彩哥、来旺妇（陪房）、昭儿、旺儿、
    |   | | |     隆儿、兴儿、庆儿、善姐、王信、林之孝、林之孝家的、赵嬷嬷（贾琏奶母）
    |   | | + 贾巧姐，贾府落败后嫁矛刘姥姥孙子王板儿为妻。
    |   | 。
    |   | ，嫁孙绍祖，丫鬟：司棋、绣橘、莲花儿、柱儿妈（奶母）、柱儿媳妇。
    |   + 贾政，妻王夫人，丫鬟：金钏、玉钏、彩霞、彩云、彩鸾、绣鸾、绣凤、小霞、周瑞家的（陪房）。
    |   | + 贾珠，妻李纨，丫鬟：素云、碧月。
    |   | |  + 贾兰（独子）。
    |   | + 贾元春，早年入宫充任女史，后进封凤藻宫尚书，加封贤德妃，丫鬟：抱琴、青芸、琴韵。
    |   | + 贾宝玉，丫鬟：袭人（蕊珠）、晴雯、麝月、秋纹、碧痕、春燕、四儿、芳官、茜雪、佳蕙、
    |   | |       坠儿、檀云、绮霰、良儿、媚人、墨雨、紫绡、李嬷嬷（奶母）、宋嬷嬷、
    |   | |       茗烟（焙茗）、扫红、锄药、伴鹤、李贵、扫花、引泉、挑云、双瑞、双寿。
    |   | + 贾探春（庶出），丫鬟：侍书、艾官、翠墨、小蝉。
    |   | + 贾环（庶出）。
    |   + 贾敏，幺女，嫁林如海，生林黛玉。
    |     + 林黛玉（独女），丫鬟：雪雁、紫鹃（鹦哥）、春纤、藕官、王妈妈（奶母）。
    + 王父，都太尉统制县伯王公之后，世袭县伯爵位。
    | + 王熙凤父母
    | | + 王仁
    | | + 王熙凤
    | + 王子腾
    | + 王夫人
    | + 薛姨妈（王夫人之妹）
    + 薛家，紫薇舍人薛公之后，为书香继世、豪门富贵之家。
    | + 长房
    | | + 薛蝌，妻邢岫烟，后投奔邢夫人，丫鬟：篆儿。
    | | + 薛宝琴，丫鬟：小螺、豆官（豆童）。
    | + 二房娶薛姨妈为妻，丫鬟：同喜、同贵。
    |   + 薛宝钗，丫鬟：莺儿、文杏、蕊官。后嫁予宝玉为妻。
    |   + 薛蟠，妻夏金桂，丫鬟：宝蟾、小舍儿。妾香菱（甄英莲），丫鬟：臻儿。
    + 史家，保龄侯尚书令史公之后，保龄侯史鼐世袭侯爵，任外省大员，其弟史鼎加封忠靖侯。
      + 史湘云，丫鬟：翠缕（缕儿）、葵官、周奶妈。

贾府旁支：

贾代儒：司贾家私塾。
贾瑞：贾代儒孙子，管理私塾。贪图便宜。死于王熙凤的“相思局”。
贾芹：贾府小和尚道士的总管。
贾芸：贾府姻亲，西廊下五嫂子的儿子，管花草，与小红相好。
贾菌：贾府近派的重孙，与贾兰交好。

香菱（甄英莲）是曹雪芹所著古典小说《红楼梦》中第一个登场的女性人物，金陵十二钗副册之首，原籍姑苏。甄士隐独女，眉心有一点米粒大小的胭脂记。四岁那年元宵看社火花灯时因家奴霍启（“祸起”）看护不当而被拐子拐走。养大后原是卖给金陵公子冯渊（“逢冤”），中途却被薛蟠看上，为此打死冯渊抢走了她，宝钗给她起名叫香菱。起初是薛姨妈丫鬟，后为薛蟠之妾，因薛蟠外出被宝钗带进大观园（香菱学诗）。薛蟠娶亲后因为主母夏金桂所不容，被其唆使薛蟠毒打。后与薛蟠断绝关系随宝钗而去。

https://pic1.zhimg.com/80/v2-c79571779c65eba83cb734c8450c6fb0_1440w.webp


## 清朝人民经济状况

清朝官员收入分为三个部分，分别是：年俸、䘵米、养廉银。

年俸就是官员的工资，发的是银子，䘵米就是发给官员的口粮，发的是粮食，养廉银是清朝一项激励收入，顾名思义就是用高薪水来养活官员，以防止官员贪污，养廉银的收入一般是年俸收入的 10 倍以上，高的可以达到 100 倍。

以清朝一品高官总督为例，大贪官和珅就是一品大员，一年的年俸是 180 两，禄米是 180 斛，养廉银是 16000 两，乾隆五十九和六十年一石稻谷的价格是2.5两白银，清朝的一石是 120 斤，一石等于 2 斛，总督一年的禄米换算成银子折合 225 两，总督一年的总收入折合银子是 180+225+16000=16450 两。

清朝乾隆年间讽刺小说《儒林外史》中有一句话流传很广——“三年清知府，十万雪花银”。据记载，乾隆年间那时候优质大米价格大约是 10文钱/升。1 两银子等于 1000 文铜钱，清朝的 1 升相当于现在的 1.5 斤。现在普通大米 3 元多/斤，每个地区价格不一，有些高价米价格高至 10 元/斤以上，可以得出：

乾隆朝 1 两银子 = 150 斤大米 = 现在 450 元

那么，10 万两银子 = 现在 4500 万元

用大米价格作为购买力指标来折合清朝银两与现在的钱，这并不严谨，只能作为一种具象参考。不过，也难怪人们都挤破脑袋考科举，三年清知府就赚了 4500 万，难怪范进中举后会疯掉！

| 地区 | 总督     | 巡抚  | 布政使 | 按察使 | 学政 | 道员 | 府   | 县   |
| 四川 | 13000    |       | 8000   | 4000   | 3000 | 2000 | 2000 | 1000 |
| 陕西 | 20000    | 12000 | 8000   | 5000   | 2400 | 2000 | 2000 | 600  |
| 甘肃 | 陕甘总督 | 12000 | 7000   | 4000   | 1600 | 3000 | 2000 | 600  |
| 广东 | 15000    | 13000 | 8000   | 6000   | 3000 | 3000 | 1500 | 600  |
| 广西 | 两广总督 | 10000 | 6000   | 4000   | 2000 | 2360 | 1000 | 705  |
| 云南 | 20000    | 10000 | 8000   | 5000   | 4000 | 3500 | 1200 | 700  |
| 贵州 | 云贵总督 | 10000 | 5000   | 3000   | 2700 | 2000 | 800  | 400  |

《清朝文献通考》清朝地方官养廉银参考数据，单位是两。

知府的养廉银，根据地域，一般是1500-3000两。知县的养廉银，一般是600两-2200两。除此之外，还有铸币“火耗”等其他收入。俗话说，“三年清知府，十万雪花银”。清廉的知府，三年都有十万两银子，那贪污的，就更不知道有多少收入了。

《清会典事例》载，京外官各品级官员的俸禄如下：

“正、从一品，俸银一百八十两，米一百八十斛；正、从二品，俸银一百五十五两，米一百五十斛……正从七品，俸银四十五两，米四十五斛；正、从八品，俸银四十两，米四十斛：正九品，俸银三十三两一钱一分四厘，米三十三斛一斗一升四合，从九品，俸银三十一两五钱二分，米三十一斛五斗二升”（清制，京官的正俸由俸银和俸米组成，而地方官的正俸只有俸银，却无俸米）。

| 文官   | 年俸       | 禄米       | 养廉银  |
| 一品   | 180两      | 180斛      | 16000两 |
| 二品   | 155两      | 155斛      | 13000两 |
| 三品   | 130两      | 130斛      | 6000两  |
| 四品   | 105两      | 105斛      | 3700两  |
| 五品   | 80两       | 80斛       | 2400两  |
| 六品   | 60两       | 60斛       | 1250两  |
| 七品   | 45两       | 45斛       | 1200两  |
| 八品   | 40两       | 40斛       |         |
| 九品   | 33两1.14钱 | 33斛1.14斗 |         |
| 未入流 | 31两5钱    | 31斛5斗    |         |

| 武官 | 年俸  | 蔬菜烛炭银 灯红纸张银 | 养廉银（内地）  |
| 一品 | 609两 | 180两 200两           | （提督） 2000两 |
| 二品 | 599两 | 140两 160两           | （总兵） 1500两 |
| 三品 | 243两 | 48两 38两             | （参将） 500两  |
| 四品 | 141两 | 18两 24两             | （都司） 260两  |
| 五品 | 90两  | 12两 12两             | （守备） 200两  |
| 六品 | 49两  |                       | （千总） 120两  |
| 七品 | 36两  |                       | （把总） 90两   |
| 八品 | 40两  |                       |                 |
| 九品 | 33两  |                       |                 |

| 宗亲     | 年俸    | 禄米    |
| 亲王     | 10000两 | 10000斛 |
| 郡王     | 5000两  | 5000斛  |
| 贝勒     | 2500两  | 2500斛  |
| 贝子     | 1300两  | 1300斛  |
| 镇国公   | 700两   | 700斛   |
| 辅国公   | 500两   | 500斛   |
| 镇国将军 | 410两   | 410斛   |
| 辅国将军 | 310两   | 310斛   |
| 奉国将军 | 210两   | 210斛   |
| 奉恩将军 | 110两   | 110斛   |

旧制一市斤等于十六两。秦和西汉时期，一斤相当于258.24克，一两等于16.14克。王莽及东汉、魏晋南北朝，一斤相当于222.73克，一两等于13.92克。隋朝初年，一斤相当于668.19克，一两等于41.76克。隋末一斤相当于222.73克，一两等于13.92克。唐至清代，一斤相当于596.82克，一两等于37.30克。在民国时期，使用的旧制的一斤等于16两，1两=500/16克=31.25克。也就是说民国时期的一两只有31.25克。一万两就是312500克，也就是625斤。

《农民卷》说到当时人民一年的收入在 32 两左右。而一年的支出要 35 两，也就是说始终有有 3 两的缺口。农民面朝黄土的辛苦工作一年，还有负债 3 两才能活下来。

这 3 两银就成为极好用的愚民工具，丰年可多收税，欠年或受灾可以减免或开仓赈灾，还赚一个好名声。

根据曾国藩遗留的记录得知，清朝中期，一位青壮年男子通过出卖苦力，每天大概能赚到30文钱，月薪就是1000文钱左右，相当于一两白银。

有些技术的工人，比如铁匠、木匠，每天的工资能达到100-150文钱左右。这些技术工人不是每天都能找到活干，再加上刮风下雨等恶劣天气因素，清朝的高级技工每月收入大概在2000文钱左右，相当于二两白银。

《聊斋志异》的作者蒲松龄先生，他当私塾老师的时候，一年束脩（工资）只有四两银子。虽然东家包吃包住，但是这点钱根本不够蒲松龄养家糊口。

忙活一年下来，总收入能达到十两白银就已经相当不错了。


## 红楼梦地图印象

原著京都就是长安，王狗儿家住郊外，宁荣二府在京都城中，是朝廷下旨敕造的。贾家在南京，也就是金陵有老宅，鸳鸯的父母在看房子。程甲本贾雨村原话是从他老宅门前经过，说的是金陵的贾府老宅。关于原著所说的长安，应该是北京，不是西安，贾宝玉说林黛玉回家是坐船，那就是顺大运河南下了。江南甄家虽然在京都有宅子，但主要住址是金陵。

公元前333年，楚国在石头城筑金陵邑，金陵之名由此开始。
秦始皇见金陵有王气，令其改为秣陵。
公元229年，东吴大帝孙权在这里定都，名为建康。
其后，东晋，宋齐梁陈接连定都建康，故称为“六朝古都”。
五代十国之杨吴亦定都金陵，后至南唐。
宋灭南唐，令南京为江南东路首府，后亦为留都。
朱元璋攻占南京后，改名应天府。
明朝成立后，将应天定为京师，称“南京”。

《红楼梦》中的故事发生在哪？很简单，“都中”、“京城”、“长安”隐指的都是天子脚下的北京。

第二回 贾夫人仙逝扬州城 冷子兴演说荣国府

雨村道：“去岁我到金陵时，因欲游览六朝遗迹，那日进了石头城，从他宅门前经过：街东是宁国府，街西是荣国府，二宅相连，竟将大半条街占了。大门外虽冷落无人，隔着围墙一望，里面厅殿楼阁，也还都峥嵘轩峻；就是后边一带花园里，树木山石，也都还有葱蔚洇润之气：那里像个衰败之家？”


## 红楼梦主要事件线索

1、黛玉丧母，进京依附外祖母；
2、宝玉母姨及其子薛蟠、女薛宝钗进驻贾府；
3、宝玉在秦可卿卧房午觉，梦游太虚幻境，看了“金陵十二钗图册判词”；
4、王熙凤毒设相思局，致贾瑞命归黄泉；
5、秦可卿病亡，公公哭得如泪人一般；
6、贾元春加封贤德妃，获准省亲，元春题名别院为“大观园”；
7、宝、黛二人于沁芳闸共赏 《会真记》，宝玉以张生、莺莺喻己喻人，黛玉感极生嗔；
8、王夫人怒逐金钏，金钏不堪受辱，投井身亡；
9、宝玉事发，贾政痛笞宝玉；
10、探春发起组织海棠诗社，此时邢岫烟、李纹、薛宝琴等同时入驻贾府，彼等均具诗才，大观园比前更加热闹；
11、刘姥姥携外孙板儿进荣府，深得贾母欢心；
12、紫鹃戏说黛玉将回苏州，宝玉呆症大发；
13、贾琏垂涎尤氏姐妹，偷娶尤二姐；
14、尤二姐为凤姐所害，误服虎狼药，吞金自尽；
15、尤三姐殉情饮剑身亡；
16、贾赦欲讨鸳鸯为妾，鸳鸯哭诉贾母，贾母申斥贾赦夫妇；
17、王夫人、凤姐夜抄大观园，司棋、晴雯被撵；
18、晴雯病亡，宝玉心痛如绞，作《芙蓉女儿诔》以祭；
19、迎春嫁了“中山狼”孙绍祖，受尽凌辱而死；
20、薛蟠吃酒打死酒店当槽被擒拿；
21、夏金桂误饮毒药汤，自取灭亡；
22、元妃薨逝，通灵宝玉丢失，宝玉丧魂失魄；
23、凤姐奇设调包计，黛玉闻知宝玉娶了宝钗，魂归离恨天，宝玉于潇湘馆痛祭黛玉，紫鹃细诉黛玉临终情景；
24、薛宝琴史湘云相继出嫁；
25、锦衣军奉旨查抄贾府；
26、贾母逝世，鸳鸯上吊身亡；
27、凤姐病重，临终托刘姥姥照看巧姐；
28、宝玉魂魄随和尚重游太虚幻境，见到众多已离人世的姐妹；
29、宝玉、贾兰叔侄赴考，出考场，宝玉旋即迷失；
30、贾政途遇宝玉与一僧一道飘然而去，圣上赐宝玉“文妙真人”道号；
31、袭人嫁与蒋玉菡；
32、贾雨村和甄士隐执手叙旧，言荣宁二府，将会兰桂齐芳，家道复初；
33、僧道携宝玉到青埂峰下，仍将玉放在女娲补天之处，各自云游。


## 第 01 回 甄士隐梦幻识通灵 贾雨村风尘怀闺秀

## 第 02 回 贾夫人仙逝扬州城 冷子兴演说荣国府

## 第 03 回 托内兄如海荐西宾 接外孙贾母惜孤女

## 第 04 回 薄命女偏逢薄命郎 葫芦僧判断葫芦案

## 第 05 回 贾宝玉神游太虚境 警幻仙曲演红楼梦

## 第 06 回 贾宝玉初试云雨情 刘老老一进荣国府

## 第 07 回 送宫花贾琏戏熙凤 宴宁府宝玉会秦钟

## 第 08 回 贾宝玉奇缘识金锁 薛宝钗巧合认通灵

## 第 09 回 训劣子李贵承申饬 嗔顽童茗烟闹书房

## 第 10 回 金寡妇贪利权受辱 张太医论病细穷源

## 第 11 回 庆寿辰宁府排家宴 见熙凤贾瑞起淫心

## 第 12 回 王熙凤毒设相思局 贾天祥正照风月鉴

## 第 13 回 秦可卿死封龙禁尉 王熙凤协理宁国府

## 第 14 回 林如海灵返苏州郡 贾宝玉路谒北静王

## 第 15 回 王凤姐弄权铁槛寺 秦鲸卿得趣馒头庵

## 第 16 回 贾元春才选凤藻宫 秦鲸卿夭逝黄泉路

## 第 17 回 大观园试才题对额 荣国府归省庆元宵

## 第 18 回 皇恩重元妃省父母 天伦乐宝玉呈才藻

## 第 19 回 情切切良宵花解语 意绵绵静日玉生香

## 第 20 回 王熙凤正言弹妒意 林黛玉俏语谑娇音

## 第 21 回 贤袭人娇嗔箴宝玉 俏平儿软语救贾琏

## 第 22 回 听曲文宝玉悟禅机 制灯谜贾政悲谶语

## 第 23 回 西厢记妙词通戏语 牡丹亭艳曲警芳心

## 第 24 回 醉金刚轻财尚义侠 痴女儿遗帕惹相思

## 第 25 回 魇魔法叔嫂逢五鬼 通灵玉蒙蔽遇双真

## 第 26 回 蜂腰桥设言传心事 潇湘馆春困发幽情

## 第 27 回 滴翠亭杨妃戏彩蝶 埋香冢飞燕泣残红

## 第 28 回 蒋玉函情赠茜香罗 薛宝钗羞笼红麝串

## 第 29 回 享福人福深还祷福 多情女情重愈斟情

## 第 30 回 宝钗借扇机带双敲 椿龄画蔷痴及局外

## 第 31 回 撕扇子作千金一笑 因麒麟伏白首双星

## 第 32 回 诉肺腑心迷活宝玉 含耻辱情烈死金钏

## 第 33 回 手足眈眈小动唇舌 不肖种种大承笞挞

## 第 34 回 情中情因情感妹妹 错里错以错劝哥哥

## 第 35 回 白玉钏亲尝莲叶羹 黄金莺巧结梅花络

## 第 36 回 绣鸳鸯梦兆绛芸轩 识分定情悟梨香院

## 第 37 回 秋爽斋偶结海棠社 蘅芜院夜拟菊花题

## 第 38 回 林潇湘魁夺菊花诗 薛蘅芜讽和螃蟹咏

## 第 39 回 村老老是信口开河 情哥哥偏寻根究底

## 第 40 回 史太君两宴大观园 金鸳鸯三宣牙牌令

## 第 41 回 贾宝玉品茶栊翠庵 刘老老醉卧怡红院

## 第 42 回 蘅芜君兰言解疑癖 潇湘子雅谑补馀音

## 第 43 回 闲取乐偶攒金庆寿 不了情暂撮土为香

## 第 44 回 变生不测凤姐泼醋 喜出望外平儿理妆

## 第 45 回 金兰契互剖金兰语 风雨夕闷制风雨词

## 第 46 回 尴尬人难免尴尬事 鸳鸯女誓绝鸳鸯偶

## 第 47 回 呆霸王调情遭苦打 冷郎君惧祸走他乡

## 第 48 回 滥情人情误思游艺 慕雅女雅集苦吟诗

## 第 49 回 琉璃世界白雪红梅 脂粉香娃割腥啖膻

## 第 50 回 芦雪庭争联即景诗 暖香坞雅制春灯谜

## 第 51 回 薛小妹新编怀古诗 胡庸医乱用虎狼药

## 第 52 回 俏平儿情掩虾须镯 勇晴雯病补孔雀裘

## 第 53 回 宁国府除夕祭宗祠 荣国府元宵开夜宴

## 第 54 回 史太君破陈腐旧套 王熙凤效戏彩斑衣

## 第 55 回 辱亲女愚妾争闲气 欺幼主刁奴蓄险心

## 第 56 回 敏探春兴利除宿弊 贤宝钗小惠全大体

## 第 57 回 慧紫鹃情辞试莽玉 慈姨妈爱语慰痴颦

## 第 58 回 杏子阴假凤泣虚凰 茜纱窗真情揆痴理

## 第 59 回 柳叶渚边嗔莺叱燕 绛芸轩里召将飞符

## 第 60 回 茉莉粉替去蔷薇硝 玫瑰露引出茯苓霜

## 第 61 回 投鼠忌器宝玉瞒赃 判冤决狱平儿行权

## 第 62 回 憨湘云醉眠芍药裀 呆香菱情解石榴裙

## 第 63 回 寿怡红群芳开夜宴 死金丹独艳理亲丧

## 第 64 回 幽淑女悲题五美吟 浪荡子情遗九龙珮

## 第 65 回 贾二舍偷娶尤二姨 尤三姐思嫁柳二郎

## 第 66 回 情小妹耻情归地府 冷二郎一冷入空门

## 第 67 回 见土仪颦卿思故里 闻秘事凤姐讯家童

## 第 68 回 苦尤娘赚入大观园 酸凤姐大闹宁国府

## 第 69 回 弄小巧用借剑杀人 觉大限吞生金自逝

## 第 70 回 林黛玉重建桃花社 史湘云偶填柳絮词

## 第 71 回 嫌隙人有心生嫌隙 鸳鸯女无意遇鸳鸯

## 第 72 回 王熙凤恃强羞说病 来旺妇倚势霸成亲

## 第 73 回 痴丫头误拾绣春囊 懦小姐不问累金凤

## 第 74 回 惑奸谗抄检大观园 避嫌隙杜绝宁国府

## 第 75 回 开夜宴异兆发悲音 赏中秋新词得佳谶

## 第 76 回 凸碧堂品笛感凄清 凹晶馆联诗悲寂寞

## 第 77 回 俏丫鬟抱屈夭风流 美优伶斩情归水月

## 第 78 回 老学士闲征姽婳词 痴公子杜撰芙蓉诔

## 第 79 回 薛文起悔娶河东吼 贾迎春误嫁中山狼

## 第 80 回 美香菱屈受贪夫棒 王道士胡诌妒妇方

## 第 81 回 占旺相四美钓游鱼 奉严词两番入家塾

## 第 82 回 老学究讲义警顽心 病潇湘痴魂惊恶梦

## 第 83 回 省宫闱贾元妃染恙 闹闺阃薛宝钗吞声

## 第 84 回 试文字宝玉始提亲 探惊风贾环重结怨

## 第 85 回 贾存周报升郎中任 薛文起复惹放流刑

## 第 86 回 受私贿老官翻案牍 寄闲情淑女解琴书

## 第 87 回 感秋声抚琴悲往事 坐禅寂走火入邪魔

## 第 88 回 博庭欢宝玉赞孤儿 正家法贾珍鞭悍仆

## 第 89 回 人亡物在公子填词 蛇影杯弓颦卿绝粒

## 第 90 回 失绵衣贫女耐嗷嘈 送果品小郎惊叵测

## 第 91 回 纵淫心宝蟾工设计 布疑阵宝玉妄谈禅

## 第 92 回 评女传巧姐慕贤良 玩母珠贾政参聚散

## 第 93 回 甄家仆投靠贾家门 水月庵掀翻风月案

## 第 94 回 宴海棠贾母赏花妖 失宝玉通灵知奇祸

## 第 95 回 因讹成实元妃薨逝 以假混真宝玉疯癫

## 第 96 回 瞒消息凤姐设奇谋 泄机关颦儿迷本性

## 第 97 回 林黛玉焚稿断痴情 薛宝钗出闺成大礼

## 第 98 回 苦绛珠魂归离恨天 病神瑛泪洒相思地

## 第 99 回 守官箴恶奴同破例 阅邸报老舅自担惊

## 第 100 回 破好事香菱结深恨 悲远嫁宝玉感离情

## 第 101 回 大观园月夜警幽魂 散花寺神签惊异兆

## 第 102 回 宁国府骨肉病灾祲 大观园符水驱妖孽

## 第 103 回 施毒计金桂自焚身 昧真禅雨村空遇旧

## 第 104 回 醉金刚小鳅生大浪 痴公子馀痛触前情

## 第 105 回 锦衣军查抄宁国府 骢马使弹劾平安州

## 第 106 回 王熙凤致祸抱羞惭 贾太君祷天消祸患

## 第 107 回 散馀资贾母明大义 复世职政老沐天恩

## 第 108 回 强欢笑蘅芜庆生辰 死缠绵潇湘闻鬼哭

## 第 109 回 候芳魂五儿承错爱 还孽债迎女返真元

## 第 110 回 史太君寿终归地府 王凤姐力诎失人心

## 第 111 回 鸳鸯女殉主登太虚 狗彘奴欺天招伙盗

## 第 112 回 活冤孽妙姑遭大劫 死雠仇赵妾赴冥曹

## 第 113 回 忏宿冤凤姐托村妪 释旧憾情婢感痴郎

## 第 114 回 王熙凤历幻返金陵 甄应嘉蒙恩还玉阙

## 第 115 回 惑偏私惜春矢素志 证同类宝玉失相知

## 第 116 回 得通灵幻境悟仙缘 送慈柩故乡全孝道

## 第 117 回 阻超凡佳人双护玉 欣聚党恶子独承家

## 第 118 回 记微嫌舅兄欺弱女 惊谜语妻妾谏痴人

## 第 119 回 中乡魁宝玉却尘缘 沐皇恩贾家延世泽

## 第 120 回 甄士隐详说太虚情 贾雨村归结红楼梦
