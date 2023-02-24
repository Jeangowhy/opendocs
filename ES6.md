
# 🚩 JavaScript 解送命题基础
- Dr. Axel Rauschmayer Home Page http://dr-axel.de/
- Exploring JS: JavaScript books for programmers 0 Dr. Axel Rauschmayer https://exploringjs.com
- 33 Concepts Every JavaScript Developer Should Know https://github.com/leonardomso/33-js-concepts
- Exploring ES6 by Dr. Axel Rauschmayer https://exploringjs.com/es6.html
- Eloquent JavaScript 3rd edition (2018) https://eloquentjavascript.net
- https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/

JavaScript 通常被认为是最容易掌握的语言，也是最难掌握的语言，我完全赞同，因为 JavaScript 是一种非常古老且非常灵活的语言，它充满了神秘的语法和过时的功能。

而雇主方却很喜欢用这些古怪的特点的考察你，所以即使用已经使用 JavaScript 多年，这些古怪的特性是必需要认真对待的，不然都不好意思讲“精通”。想要精通 JavaScript 必需对这些古怪特性了然于胸，另一个方式是以编译器的层次去理解这门脚本语言的特性。

另外，网络有大批优秀的开源的教材文档，其中就有人称"德国阮一峰"的 Dr. Axel Rauschmayer 就共享了 Speaking JavaScript (ES1–ES5) 一书，质量相当不错。最近又出了新书“烦躁的 JavaScript 开发者教程”，JavaScript for impatient programmers。Dr. Axel 通过他的博客不断地发表优秀的内容，这些内容不仅呈现在 FluentConf 还为 Babel 和 ES 提供指导思想。


## ⚡ Operators 奇技淫巧
- ES2021: Logical assignment operators https://2ality.com/2020/06/logical-assignment-operators.html
- Ecma International, Technical Committee 39 - ECMAScript https://github.com/tc39/proposal-logical-assignment
- Looping over Arrays: for vs. for-in vs. .forEach() vs. for-of https://2ality.com/2021/01/looping-over-arrays.html
- Optional Chaining https://exploringjs.com/impatient-js/ch_single-objects.html#optional-chaining
- New JavaScript features  https://exploringjs.com/impatient-js/ch_new-javascript-features.html
- Destructuring https://exploringjs.com/impatient-js/ch_destructuring.html

这里主要了解一些新式的运算符，或功能特殊的运算符。

例如以下三个短路运算符：

	| Operator |             Equivalent to             |
	|----------|---------------------------------------|
	|  a || b  | a ? a : b                             |
	|  a && b  | !a ? a : b                            |
	|  a ?? b  | a !== undefined && a !== null ? a : b |

逻辑赋值运算符提案：

	| Assignment operator | Equivalent to | Only assigns if a is |
	|---------------------|---------------|----------------------|
	| a ||= b             | a || (a = b)  | Falsy                |
	| a &&= b             | a && (a = b)  | Truthy               |
	| a ??= b             | a ?? (a = b)  | Nullish              |

空值赋值运算符 ?? 赋值前判断左值是否为空值才进行赋值：

	let title;
	title ??= '(Untitled)';

下划线 _ 作为数值的分组操作符号 [ES2021]：


	const inhabitantsOfLondon = 1_335_000;
	const distanceEarthSunInKm = 149_600_000;

TypeScript 早已经实现的可选链式访问，在 ES2020 规范中才有： 

	obj?.prop     // optional static property access
	obj?.[«expr»] // optional dynamic property access
	func?.(«arg0», «arg1») // optional function or method call

对象扩展操作符号 Spreading into object literals (...) [ES2018]：

	const obj = {foo: 1, bar: 2};
	{...obj, baz: 3} // { foo: 1, bar: 2, baz: 3 }

解构操作和 Mixin 模式的实现契合，Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。

ECMAScript 2016 引入指数运算符号，比如计算 2 的 8 次方： 

	2**8

和对象扩展操作一样，`解构操作`又是一个极好的语法糖，试试没有解析操作的时候，只能按以下方式来获取对象的元素：

	const arr = ['a', 'b', 'c'];
	const x = arr[0]; // extract
	const y = arr[1]; // extract

引入解构操作，只需要一个模板 Destructuring Pattern 就可以将需要的值解析出来：

	const arr = ['a', 'b', 'c'];
	const [x, y] = arr; // (A)
	assert.equal(x, 'a');
	assert.equal(y, 'b');

在对象上操作也一样：

	const jane = {
	  first: 'Jane',
	  last: 'Doe',
	};

	// Extracting: multiple properties (NEW!)
	const {first: f2, last: l2} = jane; // (A)
	assert.equal(f2, 'Jane');
	assert.equal(l2, 'Doe');

结合剩余操作符 Rest properties 引用其它属性或 Rest elements 引用数组的其它元素，又或者使用别名：

	const obj = { a: 1, b: 2, c: 3 };
	const { a: propValue, ...remaining } = obj; // (A)

	assert.equal(propValue, 1);
	assert.deepEqual(remaining, {b:2, c:3});

注意，花括号语法上容易产生歧义 Syntactic Ambiguity，因为它会被解析器当作一个语句块看待，解决办法是加圆括号：

	let prop;
	eval("({prop} = { prop: 'hello' });")
	// eval("{prop} = { prop: 'hello' };") Unexpected token '='


关于流程控制部分，变动不大，除了 ES2015 和 ES2018 新增的两个 for 循环：

- 23.1 Controlling loops: `break` and `continue`
- 23.2 Conditions of control flow statements
- 23.3 `if` statements [ES1]
- 23.4 `switch` statements [ES3]
- 23.5 `while` loops [ES1]
- 23.6 `do-while` loops [ES3]
- 23.7 `for` loops [ES1]
- 23.8 `for-of` loops [ES6]
- 23.9 `for-await-of` loops [ES2018]
- 23.10 `for-in` loops (avoid) [ES1]
- 23.11 Recomendations for looping
	- 异步枚举使用 ES2018+ for-await-of。
	- 同步枚举使用 ES6+ for-of。
	- 在 ES5+ 中可以使用 Array.forEach()。
	- 在 ES5 之前就只能使用 for 循环。
	- 不要使用 ES1 的 for-in 来枚举数组。


使用 for-in 枚举数组有副作用，它枚举的是可索引的属性：

	const arr = ['a', 'b', 'c'];
	arr.propKey = 'property value';

	for (const key in arr) {
	  console.log(key);
	}

	// Output:
	// '0'
	// '1'
	// '2'
	// 'propKey'


## ⚡ Data Type 基本数据类型
- 一张图彻底搞懂 JavaScript 的 == 运算 https://zhuanlan.zhihu.com/p/21650547
- Javascript 中 == 和 === 区别是什么？ https://www.zhihu.com/question/31442029
- Annotated ECMAScript 5.1 http://es5.github.io/#x11.9.3
- undefined vs. null revisited https://2ality.com/2021/01/undefined-null-revisited.html
- JavaScript for impatient programmers (ES2021 edition) - 12 Values https://exploringjs.com/impatient-js/ch_values.html
- Typed Array API https://exploringjs.com/impatient-js/ch_typed-arrays.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
- ECMAScript® 2021 Language Specification https://tc39.es/ecma262/#sec-ecmascript-language-types
- The Number Type https://tc39.es/ecma262/#sec-ecmascript-language-types-number-type

虽然 JavaScript 基本数据类型分为两类，但是，它们却是最多古怪的，这里就挑最核心的来讲：

- 原始值类型 Primitives，包含 5-7 种简单类型。
	- `undefined` 未初始化或未声明的变量，特殊的非值类型，non-values；
	- `null` 空引用对象，特殊的非值类型，non-values；
	- `boolean` 布尔值类型，只有两种值 `false` `true`；
	- `number` 数值类型，包括 NaN 非数值 Not a Number，还有无限值 Infinity；
	- `string` 字符串类型，如 "123"；
	- `symbol` 符号类型，[ES2015] 新增类型；
	- `bigint` 大整数类型，[ES2020] 规范引入，表达超过 53 bits 的带符号整数，如 -123n；
- 对象类型 objects，包含 7 种基础复杂对象类型。
	- Object 基础对象类型，为后面的子类类提供基本的隐式转型方法 `toString()` `valueOf()`；
	- Function 函数对象；
	- Array 数组对象；
	- Map 影射对象；
	- Set 集合对象；
	- Date 日期时间对象；
	- RegExp 正则表达式对象；

最新的 ECMAScript 标准定义了 8 种数据类型:

任何 constructed 对象实例的特殊非数据结构类型都用作数据结构：new Object，new Array，new Map，new Set，new WeakMap，new WeakSet，new Date，和几乎所有通过 new keyword 创建的东西。

此外，根据不同的运行环境又会引入一些复杂的对象，比 HTML5 浏览器会引入更底层的二进制数据结构 Typed Array API，包括 ArrayBuffer 以及 DataView 对象，但要和 JavaScript 本身提供的基础类型区别开来，不应混为一谈。

最新的 ECMAScript 2021 语言规范中定义的类型为 8 种：Undefined, Null, Boolean, String, Symbol, Number, BigInt, Object。


学习基础数据类型，还涉及两个操作符：

- `typeof` 类型获取操作符号。
- `instanceof` 实例判断操作符号。

使用 typeof 运算符检查 7 种原始类型和对象类型：

```js
Boolean		typeof instance === "boolean"
Number		typeof instance === "number"
String		typeof instance === "string"
BigInt		typeof instance === "bigint"
Symbol		typeof instance === "symbol"
undefined	typeof instance === "undefined"
null			typeof instance === "object"
Object		typeof instance === "object"
```

使用 `typeof` 操作符用于检测给定变量的数据类型，可能返回下列某个字符串：

	| typeof vars |        返回值         |
	|-------------|-----------------------|
	| "undefined" | 表示变量未定义。        |
	| "boolean"   | 表示变量是布尔值。      |
	| "string"    | 表示变量是字符。        |
	| "number"    | 表示变量是数值。        |
	| "object"    | 表示变量是对象或 null。 |
	| "function"  | 表示变量是函数。        |

首先是很有意思的两个非值类型 non-values，`undefined` vs `null`。

`undefined` 类型对应字符串值 "undefined"，对未初始化和未声明的变量执行 `typeof` 操作符都会返回这个值，因此 `typeof` 操作符不能确定这个变量是未初始化还是未声明。也说明了显式的初始化变量依然是明智的选择，但不应该初始化为 `undefined`。

`null` 类型对应字符值 "null"，表示一个空指针对象。因此类型检测时 `typeof null` 返回 "object"。所以，在定义对象变量时最好初始化为 `null` 而非其他值，这样就可以通过检查得知相应的变量是一个对象的引用。

无论在什么情况下都没有必要把一个变量的值初始化为 `undefined`，但对于意在保存对象的变量则应明确的初始化为 `null` 值。这样做不仅体现 `null` 作为空对象指针的惯例，而且也有助于进一步区分 `null` 和 `undefined`。

这两个非值类型，non-values，已经是被当作一个错误的存在，即使是 JavaScript 的创始人 Brendan Eich。

作为设计者，Brendan Eich 一点也不喜欢自己的这个参考 Java 原型的作品，评价 JavaScript 是 C 语言和 Self 语言一夜情的产物。如十八世纪英国文学家约翰逊博士所说，它的优秀之 处并非原创，它的原创之处并不优秀。The part that is good is not original, and the part that is original is not good.

而这两个值中一直没有从实现中删除，是因为 JavaScript 的一个核心原则是永远不要破坏向后兼容性。这一原则有许多好处，它最大的缺点是设计错误无法消除。

历史原因，JavaScript 参考 Java 原型，这使得保存对象的变量初始化为 `null`，但和 Java 不同的是变量是可变类型，即可以保存原始类型又可以保存对象。它需要一个初始值来指示既非对象又非原始类型的初始状态，这个被选中的初始值就是 `undefined`。

另外，在 JSON 数据格式中，不支持 `undefined` 只支持 `null`。

除了以上两种非值类型，其它原始类型都有对应的装箱函数，所谓装箱就是一种类型转换成对象类型的操作，也就是显式类型转换。同时它们也是构造器，可以执行 `new` 实例化：

- `Object()` 数值装箱函数，如 `Object()` 得到数值类型对象 {}，而 `Object("16")` 得到 String "16"；
- `Number()` 数值装箱函数，如 `Number("16")` 得到 Number 16；
- `String()` 字符串装箱函数，如 `String("16")` 得到 String "16"；
- `Boolean()` 布尔值装箱函数，如 `Boolean("16")` 得到 Boolean true；

对比装箱与实例化的差别：

```js
typeof "ABC" // 'string'
typeof String("A") // "string"
typeof new String("A") // "object
```

这里，有必要辨析一下 `object` 和 `Object` 表示类型的不同点，前者指定的是囊括所有对象的类型，后者是指所有 Class 对象及子类的类型。简单地说，它们都表示类型，但是 `object` 概括的范围更广，而 `Object` 是具体的类型实现，是所有类型的顶级类型。

以下就是数据类型中一个怪异的示例，计算下面表达式的值：

	[''] == false
	[''] == 0

首先，两个操作数分别是对象类型、布尔类型，将布尔类型转为数字类型，false 转为数字的结果是 0，所以以上两式是等价的。然后，数组类型会依次进行 `valueOf()` `toString()` 转换，变成空字符串，并且继续向数值转换变成 0，结果为 true。类似的表达还包括 `[undefined]` `[null]` 等等。

字符串类型 *String* 和正则表达式 *RegExp* 是非常重要且便利的工具，在 JavaScript 得到了很好的支持，这里不细说这两部分内容，但掌握它们确实可以大大提高日常工作效率。

使用 `Object()` 装箱时的转换规则如下，更多的的转换规则可以参考《烦躁的 JavaScript 开发者教程》：

	|     x     |                  Object(x)                   |
	|-----------|----------------------------------------------|
	| undefined | {}                                           |
	| null      | {}                                           |
	| bigint    | An instance of BigInt (new throws TypeError) |
	| boolean   | new Boolean(x)                               |
	| number    | new Number(x)                                |
	| string    | new String(x)                                |
	| symbol    | An instance of Symbol (new throws TypeError) |
	| object    | x                                            |

另外，在描述类型时，通常使用全小写表示原始值类型，首字大写表示对象类型。如 `number` 表示原始数值类型，而 `Number` 表示装箱后的数值类型。 

布尔值类型只有两种取值，true 和 false，主要关心的是各数据类型的转换关系，使用 Boolean() 函数或逻辑运算返回 Boolean 值，对应转换规则如下：

	|    type   |        true        |   false   |
	|-----------|--------------------|-----------|
	| Boolean   | true               | false     |
	| String    | 非空字符串          | ""        |
	| Number    | 非零数值，Infinity  | 0、NAN     |
	| Object    | 任何对象            | null      |
	| Undefined | ---                | undedined |

进行逻辑运算时，尽量使用绝对比较运算符，即要避免进行隐式类型转换，如 `5 === '5'` 为 false，因为这是两种不同的数据类型，建立强类型概念可以避免 JavaScript 过度活跃而带来负面作用。


## ⚡ Number 万物皆数
- IEEE 754 Calculator http://weitz.de/ieee/
- The IEEE 754 Format http://mathcenter.oxford.emory.edu/site/cs170/ieee754/
- 该死的IEEE-754浮点数 https://segmentfault.com/a/1190000009084877
- IEEE 754 浮点数标准详解 http://c.biancheng.net/view/314.html
- JavaScript’s two zeros https://2ality.com/2012/03/signedzero.html
- Numerical Computation Guide https://docs.oracle.com/cd/E19957-01/806-3568/ncgTOC.html
- CIS-77 Introduction to Computer Systems - Bits, Numbers Representation http://www.c-jump.com/CIS77/CPU/Numbers/index.html

数值部分其实涉及的内容很多，其实数值是一个复杂度不比其它任何复杂对象简单的数据类型，因为计算机表达的所有数据都是基于数值系统。

虽然原始值类型和对应的对象类型表示的同样的值，但是它们在结构上有些差别，比如不能真的通过原始的数值类型调用数值对象的各种方法，如 `1.toFixed(2)` 是错误的，但是经过装箱后就可以，`(1).toFixed(2)`，这里使用了简化的装箱表达式，省略了类型，因为解析器可以感知到这是一个数值类型装箱。

到此，注意了，下面又要开始装逼了，上面提到装箱的过程除了加括号，还有更奇葩的方式，加点加空格都会让解析器产生装箱行为，显然浮点数更靠近对象：

	(7).toString()
	7.0.toString()
	7..toString()
	7 .toString()  // space before dot

虽然`原始值类型`经过装箱变成对象，但在函数调用过程中，作为参数传递时，它们还是`按值传递`的，即函数内部接收到的是一个拷贝。

以下代码可以证明，原始值类型装箱后还是按值传递的：

	let modi = (i) => i+="!";
	let v = String("a");
	modi(v)
	console.log(v); // "a"

如果使用自动类型转换，那么记住`万物皆数`原则。毕达哥拉斯学派认为数是一种可以被感知的客观存在，就如同颜色一样，还认为数即万物，万物皆数，事物的性质是由某种数量关系决定的，万物按照一定的数量比例而构成和谐的秩序。

时间拉回到古代，五个手指、五个苹果之间是没有联系的！人们抽象出了数字 5，才将二者的关系等同起来，这是想象力的胜利。

特别要注意的是，`对象类型`与原始类型的比较，会先将对象进行 `ToPrimitive` 的转换，参考 ECMA 脚本规范。比如在 == 比较运算过程中，所有类型的值都有一种向数字类型转化的趋势。

除了参考脚本规范文档，以下的位操也能说明 JavaScript 有倾向于数的情怀，需要了解的是计算机中数值 0 按位取反就是 -1 的补码形式：

	~~null;      // 0
	~~undefined; // 0
	~~Infinity;  // 0
	~~NaN;       // 0
	~~{};        // 0
	~~[];        // 0
	~~(1/0);     // 0
	~~false;     // 0
	~~true;      // 1
	~~0;         // 0
	~~1.9;       // 1
	~~-1.9;      // -1

还可以使用其它符号来告诉解析器做类型转换：

	+'1'  // 1
	+'-1' // -1
	+'0x1'// 1
	+[]   // 0
	+{}   // NaN 这个转换失败是因为它会转换成 "{}"

接下来又是另外一组怪异的示例：

	![]			false
	[]==[]		false
	[]==![]		true
	[]==true	false

	[0]==false 	// true Number compare
	![0]==false // true Boolean compare
	![1]==false // true Boolean compare
	[1,2,3]>[1,2,2,2] // true String compare

这里的比较中，前 2 行不涉及类型转换，所以是对象地址的比较，结果为 false。

而第 3 行复杂点：

- 因为 ! 运算优先，实际右则是布尔值，而 [] 转换布尔值是 true，右侧值为 false；
- 初步结果是数组与布尔值的比较，这是对象类型与原始类型的比较，所以数组 [] 转换为原始数值，即 0；
- 结果是 0 == false 成立。

第 4 个比较更怪异：

- 如按 [] 作布尔值 true 处理，应该是成立的，结果表明它们不是 boolean 比较；
- 对于两种不同类型的比较，倾向于向数值化转换，所以 Number([].toString()) 为 0，而 Number(true) 为 1；


然后，不排除使用令人眼花的运算符号来出题，需要做的就是统计其负号，因为负负为正：

	console.log(1 + - + - + - + 1);
	console.log(1 + - + + + - + 1);

但是，以下这种表达就曾让我百思求不得解，其实你也应该懂得 RegExp：

	console.log(1 + / + + + / + 1); // string "1/ + + + /1"

类似的还以下这样的表达：

	var obj = //; //您认为这行代码有问题吗？

通常 // 解译为注解而非正则。

前面已经介绍了对象类型都包含继承自基础对象的 `valueOf()` `toString()` 方法，它们就是执行隐式类型转换的方法。

对象进行隐匿类型转换的执行步骤如下，注意调用顺序体现的万物皆数的原则：

- 调用 `valueOf()`，返回值若不是原始类型，执行下一步；
- 调用 `toString()`，返回值若不是原始类型，执行下一步；
- 抛出错误：TypeError: Cannot convert object to primitive value(…)

以下代码用 `[] + 1` 来证明这个过程：

```js
var obj = [];
obj.__proto__ = {
  valueOf: function(){ 
    console.log("valueOf")
	// Ok: not a primitive value and next to call toString
	// return {}
	// Don't seek death!
    // return this.valueOf()
    return [0];
  }, 
  toString: function(){ 
    console.log("toString")
	// Error: Cannot convert object to primitive value
	// return {}
    return "0"
  }
}
console.log(obj + 1)
```

这两个方法在字面含义上，valueOf 期望的是返回数值，toString 期望返回字符串，但实际上可以返回任意的原始类型。

在数值类型中，NaN 是非常有特点的一个特殊值，Not a Number 表示非数字的值：

- NaN 本身属于数值类型，`typeof NaN` 为 "number"；
- NaN 与任何值都不相等，包括 NaN，即 `NaN === NaN` 为 false；
- NaN 与任何值运算都是 NaN，即 `NaN + 1` 为 NaN；
- Infinity 无限值和数值运算还是无限值，如 `Infinity + 1`，`1/0` 数值除以 0 是无限值；

可以使用全局函数判断字符串是否为数值或 NaN，如 `isNaN("1a")` 为 true，还有 `parseInt()` `parseFloat()` 等函数对字符串中进行数值解析。

使用 `isFinite()` 函数判断有限数值，如果是 NaN 或者 Infinity 返回 false，否则返回 true。

	var result = Number.MAX_VALUE+0.1;
	alert(isFinite(result));  // false
	Number.NEGATIVE_INFINITY; //-infinity
	Number.POSITIVE_INFINITY; // infinity

数值字面表达有十六进制、十进制、八进制、二进制，科学计数：

	var num1 =  10; 
	var num2 =  2.5;
	var num3 = -0.2; 
	var num4 =  0b10;
	var num5 =  0o70;
	var num6 =  0x10;
	var num7 =  1e3;

	Decimal: 123n
	Hexadecimal: 0xFFn
	Binary: 0b1101n
	Octal: 0o777n

计算机中负值存储有三种方式，含有符号位和数值位两部分，符号位置 1 表示负数：

- 原码 按二进制原样计算数值，比如对于 8bit 的负数 0b10000001 表示 -1；
- 反码 one's complement integers 原码按位取反，即 0b11111110 表示 -1；
- 补码 two's complement integers 原码按位取反加 1，即 0b11111111 表示 -1；

通常，负数采用补码形式，因为它很便利硬件加法器的工作，符号位也可以直接参与加法器的运算，可以试试：

	-1 + (-1)          -2 + (-2)          1 + (-2)           2 + (-2)
	0b11111111         0b11111110         0b00000001         0b00000010
	0b11111111 +       0b11111110 +       0b11111110 +       0b11111110 +
	----------------   ----------------   ----------------   ----------------
	0b11111110 = -2    0b11111100 = -4    0b11111111 = -1    0b00000000 = +0

运算时还是当作原码一样，该进位的进位，结果通过反向操作，减 1 取反很容易获得原码对应的值。直观地讲，一个正数的二进制表达，它的值是通过 1 的数量和位置计算的，补码则是通过 0 的数量和位置计算的。保持这种直观的看法，可以避免进行补码到原码的转换，直接就可以根据 0 值的位置和数量来计算。

就像有 1 或 2 有正负对应的两个值，JavaScript 中的 0 也有对应的 +0 和 -0，虽然，通常它们都直接显示为 0。

	1/-0 < 0 === true
	Math.round(-0.1) === -0

注意，按位运算符和移位运算符在 32 位整数上运行，所以，除去符号位后，最大安全整数为 2^31-1 或 2147483647。并且 JavaScript 中的数值都是带符号的，无法通过类似以下的方法来查看负数的二进制 bits 数据：

	(-1).toString(2)

确认位运算只工作在 32bit 整数上很容易，以下二进制值是 2^32-1，它是一个 32bit 可表示的最大值，位运算两次求反后会就将其当成了 -1。

	~~(0b11111111111111111111111111111111)

以下二进制值是 2^32，如果位操作可以对超过 32bit 整数进行处理，那么两次求反结果应该不变，但是结果变为 0，因为高位的 1 被忽略了：

	~~(0b100000000000000000000000000000000)

从这里可以了解到负数的补码表达：

	~(0b00000000000000000000000000000000) ==> -1
	~(0b00000000000000000000000000000001) ==> -2
	~(0b00000000000000000000000000000010) ==> -3
	~(0b00000000000000000000000000000011) ==> -4


数值运算中，对于小数需要特别注意，由于小数在计算机中是一个近似值的表达，运算会有误差。

最经典的是比较大小，以下代码中 0.1+0.2 会得到一个比 0.3 大一点的数，所以小数比较大小通常以一个 Number.EPSILON 误差值来比较：

	0.1 + 0.2 === 0.30000000000000004
	0.1 + 0.7 === 0.7999999999999999

	0.1 + 0.2 - 0.3 < 5e-16

为何 JavaScript 对 0.1 这样的值处理得十分准确呢？其实，浮点是永远不可能完全准确的，因为计算机使用的逻辑电路永远只有 0 和 1 两种状态，浮点数是基于这两种状态的模拟数值表达。

要了解浮点数的处理，就要知道世界通用的浮点规范 IEEE 754，它的内容包含：

- 定义了两种浮点格式 32bit single & 64bit double，对应 24 bits 和 53 bits 精度，规格表达使得存储时可以省略 1 bit。
- 定义两类扩展浮点格式，single extended & double extended，只规定最小精度和大小，例如 doubble extended 至少 64 bits 有效精度，并且总占用至少 79 bits。
- 对各种浮点运算有精度要求，加、减、乘、除、平方根、余数、浮点格式的整数舍入、不同浮点格式之间的转换、浮点与整数格式之间的转换、比较。余数和比较运算必须精确，其他每个操作都必须向其目的地传递准确的结果，除非没有这样的结果或结果不符合目的地的格式。
- 基本浮点格式中十进制字符串和二进制浮点数之间转换的精度、单调性和同一性要求。对于位于指定范围内的操作数，如果可能，这些转换必须产生精确的结果，或者根据指定舍入模式的规则对这些精确结果进行最小程度的修改。对于不在指定范围内的操作数，这些转换必须产生与精确结果相差不超过指定公差的结果，该公差取决于舍入模式。
- 定义了 5 种异常状态 invalid operation, division by zero, overflow, underflow, inexact。
- 定义了 4 种取舍方法：
	- 向最接近的可表示值靠近，当有两个最接近的可表示值时，首选“偶数”值；
	- 向 0 值取舍 chop；
	- toward negative infinity (down); 
	- toward positive infinity (up);  

JavaScript 数值类型采用 IEEE-754 双精度浮点格式，以 64bit 存储，可以说 JavaScript 没有整形只有浮点数值：

- sign bit(符号) 1bit 用来表示正负号
- exponent(指数) 11bit 用来表示次方数
- mantissa(尾数) 52bit 用来表示精确度

其中尾数，也就是有效域部分只有 52bit 精度，最大精度下表示的最大值为正负 2^53-1，注意浮点数省略小数点前的整数 1。超长精度的值要么舍入要么舍弃，总之是精度损失，所以，尾数部分决定了这个数的精度。在一个 64bit 数据中，如果按 16 进制显示，符号和指数部分占了 3 位，尾数 13 位。

而对于二进制的科学计数法，有效域 1.x 的规格化形式表示，在存储时就省略小数点前的值，真正保存在尾数部分就是小数点后的部分。

无论如何，在有限空间保存数值都会有两个问题：

- MAX_VALUE 最大值限制，即可表达的范围 Range。
- Significand Precision 有效精度限制。

并且它们也存在一个平衡，精度扩大就要减小最大值范围，要扩大最大值范围就要损失精度。

如果一个数太大或太小，那么会出现什么情况呢？在规格化表达的形式中，就必然需要通过指数来去表达这个值的大小。一旦数值等于或超过 2^1024 就得到 `Infinity`，这就是最大值限制。数的表达除了规格化的 1.f 形式，还可以使用非规格化形式 0.f 表示有效值部分。

说明一下，指数部分有 11bit 表示，但是它正负值共用。可以选择的表示方式之一是在指数域部分也设置一个符号位，而 IEEE754 采取的是第二种方式，设置一个偏移，使指数部分永远表现为一个非负数，然后减去某个偏移值才是真实的指数，这样做的好处是可以表现一些极端值。对于 64bit 的浮点数设置的指数偏移值是 1023，因为指数域表现为一个非负数，最大值 2^11-1=2047。经过偏移处理后，实际的指数表示范围 -1023 <= E <= 1024，这两端的两个极端值结合不同的尾数部分代表了不同的含义。

尽管可以表达的最大值远大于 53bit 可以表示的值，但处理不了超长精度的值，在失去精度的前提下意义不大，所以注意 MAX_VALUE 它是一个近似值。

对于 MAX_VALUE 使的是`规格化形式` 1.f 表示，2^1024-1，注意 JavaScript `Infinity` 就是表示 2^1024 及以上的值，`Infinity` - 1 还是 `Infinity`。如果用二进制数表示，算上其中省略位，就是一个 53 个 1 跟着 971 个 0，一共 1024 bit。而对于 MIN_VALUE 则其对应的值为 2^-1074，使用的是`非规格化形式` 0.f 表示，指数计算为 (1023 + 52 - 1)，减 1 是因为最小位取值为 1 占用。

	Number.MAX_VALUE = 1.7976931348623157e+308
	Number.MAX_VALUE.toString(2).length = 1024
	Number.MIN_VALUE = 5e-324
	Number.MIN_VALUE.toString(2).length = 1076

接下来探讨一下精度损失的问题，精度损失出现在以下两个场景：

- 第一处可能损失精度的地方是进制转换；
- 第二处可能损失精度的地方是取舍，当数值超过精度范围时出现；

对于一个小数，如何使用只有 0 和 1 两种状态的逻辑电路来表达呢？显式是不能直接表示浮点数值的，需要基于二进制`抽象`出一种浮点数值表达方式。但是基本原理还是基于指数计算，例如在 52bit 空间中假定一个小数点位置，目前来看就将小数点设置在最左边。

那么这 52bit 中：

- 第一个 bit 表示的值是 2^-1 即十进制的 0.5；
- 第二个 bit 表示的值是 2^-2 即十进制的 1/4，也就是 0.25；
- 第二个 bit 表示的值是 2^-3 即十进制的 1/8，也就是 0.125；

可以通过以下 JavaScript 代码去验证：

	for(let i=0; i<20; i++){
	    console.log("%s: %s = 2^-%s ==> %s", i, 2**-i, i, (2**-i).toString(2))
	}

输出：

	 0: 1 = 2^-0 ==> 1
	 1: 0.5 = 2^-1 ==> 0.1
	 2: 0.25 = 2^-2 ==> 0.01
	 3: 0.125 = 2^-3 ==> 0.001
	 4: 0.0625 = 2^-4 ==> 0.0001
	 5: 0.03125 = 2^-5 ==> 0.00001
	 6: 0.015625 = 2^-6 ==> 0.000001
	 7: 0.0078125 = 2^-7 ==> 0.0000001
	 8: 0.00390625 = 2^-8 ==> 0.00000001
	 9: 0.001953125 = 2^-9 ==> 0.000000001
	10: 0.0009765625 = 2^-10 ==> 0.0000000001
	11: 0.00048828125 = 2^-11 ==> 0.00000000001
	12: 0.000244140625 = 2^-12 ==> 0.000000000001
	13: 0.0001220703125 = 2^-13 ==> 0.0000000000001
	14: 0.00006103515625 = 2^-14 ==> 0.00000000000001
	15: 0.000030517578125 = 2^-15 ==> 0.000000000000001
	16: 0.0000152587890625 = 2^-16 ==> 0.0000000000000001
	17: 0.00000762939453125 = 2^-17 ==> 0.00000000000000001
	18: 0.000003814697265625 = 2^-18 ==> 0.000000000000000001
	19: 0.0000019073486328125 = 2^-19 ==> 0.0000000000000000001

所以，回到前面，为何 JavaScript 能准确处理 0.1 这个值的问题，它也是一个近似值，可以由前面的 4 + 5 + 8 + 9 等等相加而成，这就是进制转换出现的精度损失：

	(0.1).toString(2) "0.0001100110011001100110011001100110011001100110011001101"

同样，是大有效精度值 Number.MAX_SAFE_INTEGER 也是用浮点数表示的一个值，虽然它是整数，指示了最大精度值 9007199254740991，长度是 16 个十进制数，大于 9 千万亿。

	Number.MAX_SAFE_INTEGER = Math.pow(2, 53)-1
	Number.MIN_SAFE_INTEGER =  9007199254740991
	Number.MIN_SAFE_INTEGER = -9007199254740991

通过 9007199254740992 === 9007199254740992 + 1 的结果为 true 可以证明这是最大安全精度整数，但精度处理确实是一个问题。

如果我们继续积累，会怎样？

	"11111111111111111111111111111111111111111111111111111"  (2**53-1).toString(2) ✔
	"100000000000000000000000000000000000000000000000000000" (2**53+0).toString(2) ✔
	"100000000000000000000000000000000000000000000000000000" (2**53+1).toString(2)

	"100000000000000000000000000000000000000000000000000010" (2**53+2).toString(2) ✔
	"100000000000000000000000000000000000000000000000000100" (2**53+3).toString(2)
	"100000000000000000000000000000000000000000000000000100" (2**53+4).toString(2) ✔
	"100000000000000000000000000000000000000000000000000100" (2**53+5).toString(2)

	"100000000000000000000000000000000000000000000000000110" (2**53+6).toString(2) ✔
	"100000000000000000000000000000000000000000000000001000" (2**53+7).toString(2)
	"100000000000000000000000000000000000000000000000001000" (2**53+8).toString(2) ✔
	"100000000000000000000000000000000000000000000000001000" (2**53+9).toString(2)

可以发现并没有出现期待的结果，只有偶数是可正确表示，这就是由于取舍导致的精度损失的表现，虽然还可以表示更大的值，但是精度已经开始损失了。

解释这个精度损失现象，还是需要了解双精度 64bit 二进制格式工作原理。当 52bit 都是置 1 的状态下就是最大精度值 2^53-1，再往上增加数值，就会超过 52bit 的容量范围，对其进行标准化表达。如果，增加的值是包含个位的 1，那么相加后整体的长度就是 53bit，要将这个长度的值放到 52bit 空间中，那必然要舍去个位的 1，这就是 underflow `下溢`。如果刚好相加的值不含个位的 1，正好这 53bit 中，最小位是 0，舍去后并没有影响到正确的值，这就是为何上面的数值中偶数是可以正确表达的。

另外，注意 `2**53` 加 3、4、5 的值都相同，还有 7、8、9 和 11、12、13 也一样。这里涉及了 IEEE-754 浮点数据的取舍，默认向最接近的可表示值靠近，当有两个最接近的可表示值时，首选“偶数”值，所以，尽管加 5、9、13 在有效精度的最小位上置 1，但是因为取舍向偶靠近而舍去。

注意，`toString(2)` 将数值格式化为二进制表达，后面会补全 0 的个数，输出结果和指数的阶数是一致的，但是这多出来的对应阶数的 0 值其实是从精度上讲是无效的。

计算导致精度损失的现象是常见的，因为最大精度相当于 16 位十进制数，当表示的十进制数值精度要示超过 16 位数，就必然损失精度，如下两行都成立：

	Math.pow(10, 10) + Math.pow(10, -7) === Math.pow(10, 10)
	0.1 === 0.100000000000000009 // 16 zeros

所以，浮点数据的比较，根本上就是近似值的比较，这一点要牢记。



## ⚡ Symbols 符号类型
- JavaScript for impatient programmers (ES2021 edition) - 22 Symbols https://exploringjs.com/impatient-js/ch_symbols.html
- Exploring ES6 - 7. Symbols https://exploringjs.com/es6/ch_symbols.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator

符号 `symbol` 是一种新的基本原始值类型，一些编程语言中它也被称为原子(atoms)类型，可以生成唯一的符号，也可以用来定义迭代器，还可以用来定义正则相关的方法。

它是原始值类型，不能直接实例化，需要通过调用 Symbol 函数产生新的值，它不是任何类型的实例！这个方法接收一个可选的名字参数，返回的 symbol 是唯一的。

>	var key = Symbol("key");
>	var key2 = Symbol("key");
>	key == key2  // false
>	key instanceof Symbol  // false

因为 JavaScript 系统中，Function 即是对象，所以 Symbol 作为一个函数对象，它本身是一个函数也是一个对象，也具有各种方法，这听起来相当混论。

总结 `symbol` 类型要点：

- `symbol` 值不能与其他类型的值进行运算，会产生异常。
- `symbol` 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。
- `symbol` 作为对象属性不会被 for in/of 迭代，但是作为属性值可以迭代，而它们都不会被 JSON.stringify() 或 Object.keys() 获取。
- Object.getOwnPropertyNames() 不会返回 Symbol 属性，但是你能使用 Object.getOwnPropertySymbols() 得到它们。
- `Symbol(any)` 函数每次都会返回一个新的 Symbol 实例，它全局唯一即与其它 Symbol 进行比较时绝对不相等，就像 GUID。
- `Symbol.for(key)` 查询 key 对应的符号，不存在再创建一个 symbol 并放入内部注册表中。
- `Symbol.keyFor(symbol)` 方法查询一个符号对应的 key。
- `Symbol.iterator` 可以为每一个对象定义默认的迭代器，该迭代器可以被 for...of 枚举。
- `Symbol.asyncIterator` 符号指定了一个对象的默认异步迭代器，异步迭代器可用 for await...of 循环。

JavaScript 中大多数的数值都支持隐式转换为字符串，但 `symbol` 不会转换，需要主动调用 toString 方法进行转换，或者获取 description 属性，这个属性本身仅用于调试目的。因为符号是原始值而不是对象实例，所以不能设置属性，除了内置的 description。

结合生成器示范定义迭代器：

	var myIterable = {}
	myIterable[Symbol.iterator] = function* () {
	    yield 1;
	    yield 2;
	    yield 3;
	};
	[...myIterable] // [1, 2, 3]

使用示范：

	const symbol1 = Symbol();
	const symbol2 = Symbol(42);
	const symbol3 = Symbol('foo');
	const symbol4 = Symbol.for(52)

	console.log('expected output: "symbol"     -> ', typeof symbol1);
	console.log('expected output: false        -> ', symbol2 === 42);
	console.log('expected output: false        -> ', symbol2 === Symbol.for(42));
	console.log('expected output: Symbol(42)   -> ', Symbol.for(42));
	console.log('expected output: "Symbol(foo)"-> ', symbol3.toString());
	console.log('expected output: false        -> ', Symbol('foo') === Symbol('foo'));
	console.log('expected output: undefined    -> ', Symbol.keyFor(symbol2))
	console.log('expected output: 52           -> ', Symbol.keyFor(symbol4))

	var obj = {};

	obj[Symbol("a")] = "a";
	obj[Symbol.for("b")] = "b";
	obj["c"] = "c";
	obj.d = "d";

	for (var i in obj) {
	   console.log(i); // logs "c" and "d"
	}

	JSON.stringify({[Symbol("foo")]: "foo"});
	// '{}'

属性符号参考：

- `Symbol.asyncIterator` 符号指定了一个对象的默认异步迭代器，异步迭代器可用 for await...of 循环。
- `Symbol.prototype.description` 只读属性，它会返回 Symbol 对象的可选描述的字符串。
- `Symbol.hasInstance` 用于判断某对象是否为某构造器的实例，可以用它自定义 instanceof 操作符在某个类上的行为。
- `Symbol.isConcatSpreadable` 用于配置某对象作为 `Array.prototype.concat()` 方法的参数时是否展开其数组元素。
- `Symbol.iterator` 可以为每一个对象定义默认的迭代器，该迭代器可以被 for...of 枚举。
- `Symbol.match` 指定匹配的是正则表达式或者字符串。或标记一个在调用 `String.prototype.match()` 方法时调用的方法，用于比较字符串。
- `Symbol.matchAll` 返回一个迭代器，该迭代器根据字符串生成正则表达式的匹配项。或标记函数可以被 `String.prototype.matchAll()` 方法调用。
- `Symbol.replace` 标记一个在调用 `String.prototype.replace()` 方法时调用的方法，用于替换字符串的子串。
- `Symbol.search` 标记一个在调用 `String.prototype.search()` 方法时调用的方法，用于在字符串中定位子串。
- `Symbol.species` 是个函数值属性，其被构造函数用以创建派生对象。species geter 允许子类覆盖对象的默认构造函数。
- `Symbol.split` 标记一个在调用 `String.prototype.split()` 方法时调用的方法，用于分割字符串。
- `Symbol.toPrimitive` 标记一个用于隐式类型转换的方法，当对象需要转换为原始值类型时执行，参数为目标类型提示(hint)。
- `Symbol.toStringTag` 标记一个在调用 `Object.prototype.toString()` 方法时使用的字符串，用于创建对象描述。
- `Symbol.unscopables` 标记一个定义了一些不可被 with 语句引用的对象属性名称的对象集合。

一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有，以下内置类型拥有默认的 @@iterator 方法：

		Array.prototype[@@iterator]()
		TypedArray.prototype[@@iterator]()
		String.prototype[@@iterator]()
		Map.prototype[@@iterator]()
		Set.prototype[@@iterator]()

示范使用 `Symbol.isConcatSpreadable` 来配置一个数组以避免被展开：

	const alpha = ['a', 'b', 'c'];
	const numeric = [1, 2, 3];
	let alphaNumeric = alpha.concat(numeric);

	console.log(alphaNumeric);
	// expected output: Array ["a", "b", "c", 1, 2, 3]

	numeric[Symbol.isConcatSpreadable] = false;
	alphaNumeric = alpha.concat(numeric);

	console.log(alphaNumeric);
	// expected output: Array ["a", "b", "c", Array [1, 2, 3]]

在 ES6 之前，无法使用开发者自定义的对象来替代正则表达式进行字符串匹配，而在 ES6 可以使用 Symbol 提供的各个属性来标记特定的方法，将语言内建的 RegExp 对象的原生特性完全暴露出来。

以下示范演示一个 /^.{5}$/ 等价的正则对象：

	let len5 = {
	    [Symbol.match]:function(value){
	        return value.length ===5 ? [ value ] : null ;
	    },
	    [Symbol.replace]:function(value, replacement){
	        return value.length ===5 ? replacement : value ;
	    },
	    [Symbol.search]:function(value){
	        return value.length ===5 ? 0 : -1 ;
	    },
	    [Symbol.split]:function(value){
	        return value.length ===5 ? [ ,  ] : [ value ] ;
	    },  
	};

	let message1 = 'Hello!';
	let message2 = 'Hello';

	console.log( message1.match(len5) ); // null
	console.log( message2.match(len5) ); // ["Hello"]

	console.log( message1.replace(len5,'HELLO') ); // Hello!
	console.log( message2.replace(len5,'HELLO') ); // HELLO

	console.log( message1.search(len5) ); // -1
	console.log( message2.search(len5) ); // 0

	console.log( message1.split(len5) ); // ["Hello!"]
	console.log( message2.split(len5) ); // [ <1 empty item> ]




## ⚡ Function 函数与方法
- https://exploringjs.com/impatient-js/ch_callables.html#kinds-of-functions

这里将 Function 作为函数的功能单独解析，因为 JavaScript 的函数概念相当混沌，有很长一段时间，我无法清晰的理解 function 和 object 之间的暧昧关系，就像这样：

	Function instanceof Object // 返回 true
	Object instanceof Function // 依然返回 true

JavaScript 使用 `function` 来定义一个函数，但是它又内置了 `Fucntion` 类型对象，如果不能很好地将对向对象编程和函数式编程区别开来，将会带来极大的困扰。

显然，这门语言创建者不应该使用这样的混沌的概念来为难它的使用者，所以为了简化函数与类的关系，先将函数功能独立解析。

JavaScript 函数按用途及结构可以分为两类：

- 一般函数用途：
	- Real function
	- Method
	- Constructor function
- 特殊函数：
	- An arrow function can only be a real function.
	- A method can only be a method.
	- A class can only be a constructor function.

特殊函数在 ECMAScript 6 规范引入。

一般函数定义示范，普通式、匿名式、变量引用式：

	function ordinary1(a, b, c) {
	  // ···
	}

	const anonFuncExpr = function (a, b, c) {
	  // ···
	};
	
	const namedFuncExpr = function myName(a, b, c) {
	  // `myName` is only accessible in here
	};


函数的基本结构：

	function add(x, y) {
	  return x + y;
	}

- `add` 是声明的函数名，可以通过 add.name 获取，只读；
- `add(x, y)` 是声明的函数头；
- `x` 和 `y` 是参数 parameters，参数个数可以通过 add.length 获取；
- `{ ... }` 花括号内部分为函数体；
- `return` 语句是函数的返回值；


以下定义一个普通 `add()` 函数，并演示三种不同用途：

	function add(x, y) {
	  return x + y;
	}

	// Real function: invoked via a function call.
	assert.equal(add(2, 1), 3);

	// Method: stored in a property, invoked via a method call.
	const obj = { addAsMethod: add };
	assert.equal(obj.addAsMethod(2, 4), 6); // (A)

	// Constructor function: invoked via new.
	const inst = new add();
	assert.equal(inst instanceof add, true);

使用箭头函数 arrow function：

	const arrow = () => {
	  return 123;
	};

	// The purpose of an arrow function is to be a real function:
	assert.equal(arrow(), 123);


使用 `class` 定义构造函数：

	class MyClass {
	  // constructor(){
	  //   console.log("inst")
	  // }
	}
	const inst = new MyClass();

注意，作为函数类型的用途解析，这里的构造函数指 `MyClass()`，而实现上 `constructor()` 才是真正的构造函数

各种函数调用方式与 `this` 指针关系： 

	|                   |    Function call     |  Method call   | Constructor call |
	|-------------------|----------------------|----------------|------------------|
	| Ordinary function | (this === undefined) | ✔             | ✔              |
	| Arrow function    | ✔                   | (lexical this) | ✘               |
	| Method            | (this === undefined) | ✔             | ✘               |
	| Class             | ✘                    | ✘              | ✔              |

箭头函数最大的功能就是简化匿名函数的定义，并且匿名函数可使用的 `this` 指针是定义匿名函数时可访问的 `this`，也就是上表中的 lexical this。

普通函数调用 Function Call 中不具有 `this` 指针，在严格模式下禁止 `this` 指向全局对象。普通模式中，对于浏览器运行环境则指向 window 对象；


匿名函数的更多简化写法：

	const f = function (x, y, z) { return 123 };
	const f = (x, y, z) => { return 123 };
	const f = (x, y, z) => 123;
	const id = x => x;
	[1,2,3].map(x => x+1)

注意，花括号表示一个函数体，定义箭头函数时可能少写返回语句：

	const func1 = () => ({a: 1});
	assert.deepEqual(func1(), { a: 1 });

	const func2 = () => {a: 1};
	assert.deepEqual(func2(), undefined);

函数作为一种 JavaScript 对象，它也有自己的方法，主要是以下三个：

- .call() 调用一个函数，并绑定一个对象或值到 `this` 指针，及参数列表；
- .apply() 调用一个函数，并绑定一个对象或值到 `this` 指针，及数组形式的参数列表；
- .bind() 为函数绑定一个对象或值到 `this` 指针，及参数绑定；

语法参考：

	someFunc.call(thisValue, arg1, arg2, arg3);
	someFunc.apply(thisValue, [arg1, arg2, arg3]);

关于 `bind()` 方法，可以看作以下的实现：

	function bind(func, thisValue, ...boundArgs) {
	  return (...args) =>
	    func.call(thisValue, ...boundArgs, ...args);
	}

示范：

	function func(x, y) {
	  return [this, x, y];
	}

	func.call('hello', 'a', 'b');
	func.apply('hello', ['a', 'b']);
	const boundFunc = func.bind(undefined, 8);


## ⚡ Prototype Chain 面向对象编程
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- Speaking JavaScript - 17. Objects and Inheritance http://speakingjs.com/es5/ch17.html
- JavaScript Object Layout http://www.mollypages.org/tutorials/js.mp
- Deep JavaScript - 10 Protecting objects from being changed https://exploringjs.com/deep-js/ch_protecting-objects.html

在复杂的对象数据类型中，又以 `Function` 类型为特殊，关键字 `function` 可以定义一个函数，同时它又定义了一个对象，像类一样的对象。

这一切很容易产生歧义，也让这门语言的使用者困惑。

因为 JavaScript 的函数概念相当混沌，有很长一段时间，我无法清晰的理解 function 和 object 之间的暧昧关系，就像这样：

	Function instanceof Object // 返回 true
	Object instanceof Function // 依然返回 true

这二者绝对是 JavaScript 中最混乱的关系：

	Object === Object.prototype.constructor
	Function === Function.prototype.constructor

	Object.constructor === Function
	Function.constructor === Function
	otherFunction.constructor === Function

	Object.prototype === Function.prototype.__proto__

Function 是最顶层的构造器，Object 是最顶层的对象，Function 继承自 Object，但又构造构造 Object。先有的 Object 原型对象，后造出 Function 的原型对象，然后 Function 又是 Object 和 Function 的构造器，真的是鸡与蛋的关系。

作为顶层构造器，Function 可以直接用来定义函数，就像使用 `function` 关键字一样：

	// let fun = function(){ this.name='ABC'}
	let fun = new Function("this.name='ABC'");
	
	let f = new fun();
	console.log(f.name);

总结两点：

- Function 是除了原型对象外所有类型的构造器，也是其本身及其原型对象的构造器，同时也是 Object 的构造器。
- 原型对象的构造器就是使用 `function` 关键字定义的函数对象，所以，很明显 `function` 是用来定义原型对象构造器的。


前面已经解析过 function 单纯作为函数意义的使用，在这里来学习 function 作为面向对象编程的使用。

那么先从以下两点开始：

- `Function` 内置的函数类型，可以使用 `new` 进行实例化；
- `function` 关键字定义一个函数对象，这个对象和内容的 `Function` 对象类型没有本质区别，同样可以使用 `new` 进行实例化；

还好，ES2015 新规范治好了这个旧版本的混沌 Bug，可以直接使用 `class` 关键字来定义一个类型了。

灵活地将 JavaScript 的 `function` 当作函数同时又当作类型看待，这是学好这门脚本语言的一个要点。具体是作 function 函数使用还是作为 Class 类型使用，取决于使用它的方式。直接加圆括号调用，那就是一个函数，而结合 `new` 使用就是一个类型。

而根据 function 定义的对象使用方式差异，`typeof` 操作符号会返回不同的值：

- 如果将 function 对象当函数使用，`typeof` 返回 "function" 字符串。
- 如果将 function 对象当类型使用，即使用 `new` 进行实例化，`typeof` 返回 "object" 字符串。

JavaScrript 是基于原型扩展的脚本语言，function 定义的类型对象通过原型链进行扩展。

定义一个函数，就同时定义了它的原型对象 `prototype`：

- 使用函数对象定义类型，通过原型对象 `prototype` 定义类型成员，其中的 `constructor` 成员就指向函数对象。
- 通过 new 关键字产生的类型实例包含 `__proto__` 成员，指向 `prototype` 原型对象。
- 应该将原型对象 `prototype` 当作内部类型的实例看待，因为它也有 `__proto__` 成员指定父级原型对象。
- 通过追溯整条原型链，可以获得所有类型继承信息。

与继承相关的一个操作符号 `instanceof` 可以判断一个对象是否是一个类型的实例，它是通过原型链进行检测的，比如 `{} instanceof Object` 为 true。此操作符右侧是一个类型对象，不可以是原始类或才实例，如 `[] instanceof []`。

另外注意，为了遵循 ECMAScript 标准，有些教材或资料使用 `someObject.[[Prototype]]` 这样的符号表示指向 someObject 的原型。从 ECMAScript 6 开始，`[[Prototype]]` 可以通过 Object.getPrototypeOf() 和 Object.setPrototypeOf() 访问器来获取实例的原型对象。这个等同于 JavaScript 的非标准但许多浏览器实现的属性 `__proto__`，这个由 Firefox 最先开创使用的属性成为今天的事实标准，所有浏览器都跟着实现它。

	function f() {}
	// f is instance of Function
	f.prototype !== Object.getPrototypeOf(f);
	f.__proto__ === Object.getPrototypeOf(f);
	f.prototype.__proto__ === Object.prototype

但它不应该与构造函数 func 的 prototype 属性相混淆。被构造函数创建的实例对象的 `[[Prototype]]` 指向 func 的 prototype 属性。Object.prototype 属性表示 Object 的原型对象。

任意定义一个类型：

	function doSomething(){}
	doSomething.prototype.foo = "bar";
	console.log( doSomething.prototype );

它类似以下结构：

	{
	    constructor: ƒ doSomething(),
	    __proto__: {
	        constructor: ƒ Object(),
	        hasOwnProperty: ƒ hasOwnProperty(),
	        isPrototypeOf: ƒ isPrototypeOf(),
	        propertyIsEnumerable: ƒ propertyIsEnumerable(),
	        toLocaleString: ƒ toLocaleString(),
	        toString: ƒ toString(),
	        valueOf: ƒ valueOf()
	    }
	}

掌握以上基础是使用 JavaScript 进行面向对象编程的前提。

以下是一个 OOP 示范，它也可以当作一个考题：

	function Person(name){
	  this.name = name;
	}
	Person.getName = ()=>`${this.name}`;
	Person.prototype.getName = function(){
	  return `${this.name}`; 
	}
	let person = new Person("Jeango");

	console.log("constructor === Person?", Person.prototype.constructor === Person) // true
	console.log("__proto__ === prototype?", person.__proto__ === Person.prototype) // true
	console.log("__proto__ === prototype?", person.__proto__.__proto__ === Object.prototype) // true
	console.log("Person & person:", typeof(Person), typeof(person)) // function & object

	console.log("Person.getName()", Person.getName())	// undefined not empty string
	console.log("person.getName()", person.getName())

其中，`Person.getName()` 这里直接对 Function 对象进行扩展，相应于类型的静态成员，所以在这个方法里是不能通过 `this` 指针引用到数据成员的。注意，返回值为 undefined 而不是空字符串。

而通过原型扩展的 `Person.prototype.getName()` 则不同，它是为实例提供的一个方法，可以通过 `this` 指针引入类型成员。

另外注意一点，这里使用了箭头函数，`()=>{}`，这里 ES2015 新规范的语法，它方便了定义函数，但同时它使用得函数的 `this` 指针变为箭头函数所在作用域中 this 引用的对象。

对于非严格模式，浏览器环境下，示范代码中的箭头函数内，`this` 引用的就 window 对象，而在严格模式下引用的是空对象。这就说，如果原型链上的 `getName()` 方法也使用箭头函数的方式定义时，也照样不能获取到类型的成员信息。

当然，除了原型链的扩展方式，新规范有许多方法，直接扩展实例对象也可以：

	var proto = {
	    describe: function () {
	        return 'name: '+this.name;
	    }
	};
	var obj = {
	    [[Prototype]]: proto,
	    name: 'obj'
	};

	var PersonProto = {
	    describe: function () {
	        return 'Person named '+this.name;
	    }
	};
	var jane = Object.create(PersonProto, {
	    name: { value: 'Jane', writable: true }
	});

	var obj = {};
	Object.defineProperty(obj, 'canBeDeleted', {
	    value: 123,
	    configurable: true
	});
	Object.defineProperty(obj, 'cannotBeDeleted', {
	    value: 456,
	    configurable: false
	});

JavaScript 有三种方式来避免对象被修改：

- `Object.preventExtensions(obj)` 阻止扩展，禁止添加新成员，但可以删除和修改成员；
- `Object.seal(obj)` 密封，不可扩展，也不可修改成员；
- `Object.freeze(obj)` 冰冻，所有成员都不可以修改，只读。


## ⚡ 变量声明、初始化与覆盖现象

以下示范考查了作用域的概念，和变量声明与初始化：

	var status="outer";
	function showStatus(){
	  var outerStatus = status; // 您认为这个 status 是什么？
	  var status="inner";
	  var innerStatus=status;
	  console.log('outerStatus: '+outerStatus);
	  console.log('innerStatus: '+innerStatus);
	}
	showStatus();

首先，作用域的存在使用内部同名变量覆盖了全局的变量。其次，`变量声明可以在任意位置，但其初始值不能被初始化前面的代码获取`。

所以，函数内容的 `outerStatus` 并不能获取到 "inner" 值，而是 `undefined`。

以下代码演示了变量、函数的覆盖现象：

	console.log(a); // 您认为这里的 a 是什么呢?
	var a = "a";
	function a(){}  // 试试去去掉这句，再对比。
	console.log(a);

	//Run it and you can see, a is a function at first.
	//So we are informed with that a function initilize vary begin over variable.
	//And the the variable initialize, and then asignment complete.

在同一个作用域，`函数先于变量初始化`，而不管其代码的先后顺序。这就会导致，同名变量会覆盖掉同名函数。

以下演示了没有初始的的情况：

	function foo(a) {
	  var a;
	  return a;
	}
	[foo('hello')] // ["hello"]

当然，现实中并不会这样去使用这种糟糕的代码，严格模式它们是不被许可的，并且函数要在顶级代码块定义。

作为演示，它的目的是让你知道函数是优先于变量进行初始化的，而变量要在执行到初始化代码时才进行。


类似的示范代码还有以下这个，同样结果是 `undedined`：

	(function outer(){
	  var context = "outer";
	  (function inner(){
	    var context = context; // 您认为右值 context 会是什么呢？undedined 或 "outer"?
	    console.log(context);
	  })();
	})();

与同名覆盖相关的还有参数同名的情形：

	function over(n){
	  console.log(n); // 如果按前面的认识，这里的 n 是 9 吗？
	  // the actual is that n is a parameter and has initialized before the one follow.
	  // so what you access about is parameter 9 passing inside of function named over.
	  var n = 99
	}
	over(9)

关于同名覆盖的规则前面已经基本解析完，下面一例结合语法问题进行解析。

以下示例，是关于语句缺少分号导致的问题，因为后续行中是一个圆括号开始的，解析器进行词法分析时，优先看作是函数调用。

即，将前面的 1 当作了函数，这就会出现缺少对象或函数未定义错误。然后，`outer()` 函数又紧跟了一对圆括号，表示连续的函数调用。

	var my = 1
	(function outer(){
	  var context = "outer";
	  (function inner(){
	    var context = context;
	    alert(context);
	  })();
	})();

以下这个例子也是不太妥当的示范：

	function test(){
	  console.log(state); // 您认为 state 是什么呢？
	}
	function state(){
	  state = "is ok";
	  test();
	}
	state();


## ⚡ Scope & Context 作用域与上下文
- ECMA-262-5 in detail. Chapter 3.2. Lexical environments http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-2-lexical-environments-ecmascript-implementation
- ECMAScript 2015 Spec - 8 Executable Code and Execution Contexts https://262.ecma-international.org/6.0/ECMA-262.pdf
- ECMAScript 2021 Spec - 9 Executable Code and Execution Contexts https://tc39.es/ecma262/#sec-executable-code-and-execution-contexts
- Speaking JavaScript - 16. Variables: Scopes, Environments, and Closures http://speakingjs.com/es5/ch16.html#iife_prefix
- JavaScript. The Core http://dmitrysoshnikov.com/ecmascript/javascript-the-core/
- Deep JavaScript - 5 A detailed look at global variables https://exploringjs.com/deep-js/ch_global-scope.html

作用域 lexical scope 是指当前代码可以访问到的变量组织方式，根据代码所在的位置，当前作用域有以下几种：

- Global Scope 全局可访问的作用域；
- Function Scope 函数体内；
- Block Scope 如 if 语句或 for 循环体内；

JavaScript 从定义到执行，解析引擎在实现层做了很多初始化工作，因此学习引擎工作机制可以更深入地理解作用域概念。

我们需要引入几个相关的概念：执行环境栈、全局对象、执行环境、变量对象、活动对象、作用域和作用域链等，这些概念正是 JavaScript 引擎工作的核心组件。

引擎在进入一段可执行的代码时，需要完成以下三个初始化工作：

- 首先，创建 Global Object 对象，全局访问且唯一一份，在整个脚本生命周期有效。

- AO：Activive Object，即函数的活动对象。
- VO：Variable Object，即变量对象。

AO 可以理解为 VO 的一个实例，即 VO 是一个构造函数，VO(Context) === AO，所以 VO 提供的是一个函数中所有变量数据的模板。它们的作用是帮助引擎在引用变量的时候能够顺利找到变量，并且它们之间的联系可以实现作用域链。

在执行函数的时候，会经历执行上下文的创建和代码的执行。先进行上下文的创建，创建 VO、通过`[Scope]`属性指向外层的 VO 来引用外层的 AO 对象，那么这样就形成了作用域链。

在创建 VO 对象的时候，会先把所有变量的声明放到一个对象属性上，但是的变量的属性为空，所以这就是变量的提升。简单来说，VO 就是存储变量的对象，然后本代码或子代码在执行的时候能够知道变量的值。

对于同一个函数分多次执行，那么里面的变量、形参和定义的函数肯定是不同的函数，所以每次执行都会产生一个 AO 对象。

VO 是不能访问的，除了全局上下文的 VO 可以间接访问，但是可以访问 AO 的成员(属性)，AO 通过函数的 arguments 属性初始化，包括 callee、length、arg 属性。


而新规范 ES5 中使用 Lexical Environment 来管理静态作用域，而不再是 ES3 中的 AO/VO。

词法环境就是描述环境的对象，主要包含两个部分:

- Environment Record 记录相应环境中的形参，函数声明，变量声明等，对应`声明环境记录`和`对象环境记录`两种；
- Ref of Outer Environment 对外部父级环境的引用，形成的关系链就是作用域链；

全局代码执行前，先初始化全局环境。函数代码执行前，先初始化函数环境。这就是前面的示例提到的，函数的初始化在变量之前执行。

用以下简短代码示范：

	var x = 10;
	 
	function foo() {
	  var y = 20;
	}

相应的词法环境如下：

	// environment of the global context
	 
	globalEnvironment = {
	 
	  environmentRecord: {
	 
	    // built-ins:
	    Object: function,
	    Array: function,
	    // etc ...
	 
	    // our bindings:
	    x: 10
	 
	  },
	 
	  outer: null // no parent environment
	 
	};
	 
	// environment of the "foo" function
	 
	fooEnvironment = {
	  environmentRecord: {
	    y: 20
	  },
	  outer: globalEnvironment
	};

除了环境记录外，还有执行上下文，简单地说，它主要涉及 `this` 指针的绑定，以及变量的设置：

	ExecutionContextES5 = {
	  ThisBinding: <this value>,
	  VariableEnvironment: { ... },
	  LexicalEnvironment: { ... },
	}

以下示范演示了构造函数中，`this` 指针的状态：

	var ma = new function a (){
	  'use strict';
	  var context = this;
	  (function i(){
	    console.log(this == context, this, context); // true or false?
	  })();
	};

要点如下：

- 在构造过程中，实例没有完成构造，但作用域链已经准备好；
- 在构造器内部定义的匿名`立即调用函数`和构造器是两个语法环境，即它们是作用域链上两个不同的作用域，内层作用域可以访问外层的 context；
- 并且作为一个普通函数它不具有 `this` 指针，在严格模式下禁止 `this` 指向全局对象。普通模式中，对于浏览器运行环境则指向 window 对象；


## ⚡ Closure 闭包

闭包是指`词法闭包` Lexical Closure 的简称，是引用了`自由变量`的函数。

所谓自由变量，是指定变量在作用域链中找不到引用，而这个被引用的自由变量将和这个闭包函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。

分析以下代码片断，首先，JS 运行于单线程环境，其次 setTimeout 是异步非阻塞运行的，以下代码就会先运行完两个 for 循环，最后才运行 setTimeout 指定的回调函数：

	for(var i in [0,1,2]){
	  setTimeout(()=>console.log(i), 100);
	}
	for(var i in [0,1,2]){
	  setTimeout(()=>console.log(i), 100);
	}

结果输出 6 个 2。

这里面主要还是要考查闭包特性的应用，因为这里没有使用闭包，而 for 循环结束后，i 的值就是 2，所以控制台输出的值就是这个 2。

如果用闭包进行组织，就可以将 for 循环的变量值保存到闭包内：

	function closureWrap(i){
	  return ()=>console.log(i)
	}
	for(var i in [0,1,2]){
	  setTimeout(closureWrap(i), 100);
	}
	for(var i in [0,1,2]){
	  setTimeout(closureWrap(i), 100);
	}

以上代码可以检验到，尽管 setTimeout 是异步回调执行的任务，但是也是有有序的，依先后顺序执行。

注意，上面代码中，闭包函数是指 `return` 返回的那个匿名函数，而不是外部包装函数。 

以下演示 setTimeout 回调与 `this` 指针关系：

	(function A(){
	  var name = "jimbo";
	  (function ai(){
	    "use strict";
	    console.log(name, this);  // 是不是总是能读到 name 呢？OK, NOPROBLEM
	    setTimeout(ai,1000);
	  })();
	})();

按规范定义，普通函数调用中是不绑定 `this` 指针的，但是以上代码在


## ⚡ use strict 使用严格模式
- Strict Mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
- Speaking JavaScript - 7. JavaScript’s Syntax http://speakingjs.com/es5/ch07.html#strict_mode
- ECMA-262-5 in detail. Chapter 2. Strict Mode. http://dmitrysoshnikov.com/ecmascript/es5-chapter-2-strict-mode/

严格模式是 ES5 新规范引用的一个概念，用于约束旧式 JavaScript 的诸多不合理的现象。

有时您会看到默认的非严格模式，称为“sloppy mode”。

设立严格模式的目的，主要有以下几个：

- 消除 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 JavaScript 做好铺垫。

使用示例，在第一行代码或者函数的第一行写上 "use strict" 表示使用严格模式：

	function test() {
		"use strict";
		i = "strict mode: i is not defined";
	}

	a = "sloopy mode: ok";
	console.log(a);
	test();

ES2015 即 ES6 的模块自动采用严格模式，不管你有没有在模块头部加上 `"use strict";`。

将来 JavaScript 版本会引入块级作用域，为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。

也就是说，在严格模式下，不允许在非函数的代码块内声明函数。

	"use strict";
	if (true) {
		function f() { }  // 语法错误
	}

	for (var i = 0; i < 5; i++) {
		function f2() { } // 语法错误
	}

转换到严格模式下，旧式的不合理现象将作用错误异常处理，因此需要遵守以下规则：

- 变量必须声明后再使用，不允许旧式隐式声明全局变量的做法；
- 不能对只读属性赋值，如不能对 `undefined` `NaN` `Infinity` 等等赋值；
- 不能删除变量 `delete vars`，只能删除可删除属性 `delete global[prop]`；
- 函数的参数不能有同名属性；
- 不能使用前缀 0 表示八进制数，但可以使用 0o 前缀，如 `let octal = 0o10`；
- 禁止给原始类型 Primitive 设置属性；

另外严格模式简化了变量的使用：

- 不能使用 `with` 语句；
- `eval` 不会在它的外层作用域引入新变量；
- `eval` 和 `arguments` 不能改写；
- `arguments` 不会自动反映函数参数的变化，在旧式代码中，函数第一参数等价 arguments[0] 修改任何一个都会反映到另一个值；
- 不能使用 `arguments.callee()`，无法在匿名函数内部调用自身；
- 不能使用 `arguments.caller()`，无法在函数内部遍历调用栈；

安全性方面：

- 禁止 `this` 指向全局对象，对于浏览器运行环境禁止指向 window 对象；
- 不强制函数 `this` 指针绑定一个对象，可以不指定，则函数 `this` 指针是 undefined；
- 不能使用 fn.caller 和 fn.arguments 获取函数调用的堆栈；

其中，尤其需要注意 `this` 的限制。ES6 模块之中，顶层的 `this` 为 `undefined`，不应该在顶层代码使用 `this`。

以下代码测试不同模式下，函数 `this` 的绑定要求：

	'use strict';
	function fun() { return this; }
	console.assert(fun() === undefined);
	console.assert(fun.call(2) === 2);
	console.assert(fun.apply(null) === null);
	console.assert(fun.call(undefined) === undefined);
	console.assert(fun.bind(true)() === true);

另外，为了将来要实现的一些功能，严格模式定义了以下保留字：

1. implements
2. interface
3. let
4. package
5. private
6. protected
7. public
8. static
9. yield


## ⚡ void 操作符
- http://speakingjs.com/es5/ch09.html#void_operator
- https://zh.wikipedia.org/wiki/Immediately-invoked_function_expression
- Speaking JavaScript - 16. Variables: Scopes, Environments, and Closures http://speakingjs.com/es5/ch16.html#iife_prefix

Void 操作符最早引入是为了在链接元素中忽略脚本返回值：

	<a href="javascript: void(0);">Click for Nothing</a>

非严格模式下，`undefined` 是可以重写的，严格模式则不能重写。为了防止 undefined 被重写而出现判断不准确的情况，可以用 `void 0` 作为 undefined 的等价用法。

注： ES5 之后的标准中，规定了全局变量下的 undefined 值为只读，不可改写的，但是局部变量中依然可以对之进行改写。

	void 0 		// undefined
	void (0) 	// undefined

	void 4+7  	// NaN, same as (void 4)+7
	void (4+7) 	// undefined

	var x;
	x = 3 		// 3
	void (x = 5) // undefined, and x is 5

	void 'abc'              // returns undefined
	void {}                 // returns undefined
	void (1 === 1)          // returns undefined
	void (1 !== 1)          // returns undefined
	void anyfunction()      // returns undefined

如果要实现一个 void 函数，它看起来如下：

	function myVoid(expr) {
	    return undefined;
	}

为什么要创建一个特殊的 `void` 关键字而不是直接返回 undefined？

有趣的是事实，在 ES5 之前，可以在大多数浏览器中重写 `undefined` 分配新值，这是因为规范还不完善。因此，在那些日子里，使用 void 定义 `undefined` 是一种正确的方法，它总是返回原本的 `undefined`。

另外一作用是前缀在 IIFE 立即执行函数，丢弃其返回值。

IIFE 这种模式中，立即调用函数表达式是一个在定义时就会立即执行的 JavaScript 函数。

	void function () { // open IIFE
	    // inside IIFE
	}(); // close IIFE

这是一个被称为自执行匿名函数的设计模式，主要包含两部分：

- 一个拥有独立的词法作用域的匿名函数，它不仅避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域。
- 第二部分再一次使用 () 创建了一个函数执行表达式，JavaScript 引擎到此将直接执行函数。

有了 ES6 标准可以不使用 IIFE 了，你可以使用 let 和 const 声明块级作用域的变量和常量。它还引入了独立块，可以将变量和常量隔离到外部无法使用的自身块中。

另外，构造函数括号也是是可选的，前提是不需要将任何参数传递给构造函数。

	let d = new Date;

事实上，这些额外的括号仅仅是为了告诉 JavaScript 解析器，即将到来的代码是一个函数表达式，而不是一个函数。可以想象，知道了这一点，有很多方法可以跳过这些额外的括号，如前面的 IIFE 表达式。

如果不使用 void，或者任何一元运算符 (void, +, !, -, etc.)，或者关心 IIFE 返回的结果，那么需要用一个括号包裹起来：

	(function() {
		console.log('shorthand')
	})()


## ⚡ 运算符优先级
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

运算符优先级是个记忆力游戏，通常没有什么优先级是一个括号解决不了的，如果一个不行那就两个。

很恶心的是用人单位从来不用括号，所以你要花点时间。

下面的表将所有运算符按照优先级的不同从高（20）到低（1）排列，以及符号的关联性。

- 21 
	- 圆括号(无相关性)	`( … )`
- 20 
	- 成员访问	从左到右	`… . …`
	- 需计算的索引成员访问	从左到右	`… [ … ]`
	- new (无相关性)	`new … ( … )`
	- 函数调用	从左到右	`… ( … )`
	- 可选链（Optional chaining）	从左到右	`?.`
- 19 
	- new (无参数列表)	从右到左	`new …`
- 18
	- 后置递增(运算符在后)	`… ++`
	- 后置递减(运算符在后)	`… --`
- 17
	- 逻辑非	从右到左	`! …`
	- 按位非	`~ …`
	- 一元加法	`+ …`
	- 一元减法	`- …`
	- 前置递增	`++ …`
	- 前置递减	`-- …`
	- typeof	`typeof …`
	- void	`void …`
	- delete	`delete …`
	- await	`await …`
- 16
	- 幂	从右到左	`… ** …`
- 15
	- 乘法	从左到右	`… * …`
	- 除法	从左到右	`… / …`
	- 取模	从左到右	`… % …`
- 14
	- 加法	从左到右	`… + …`
	- 减法	从左到右	`… - …`
- 13
	- 按位左移	从左到右	`… << …`
	- 按位右移	从左到右	`… >> …`
	- 无符号右移	从左到右	`… >>> …`
- 12
	- 小于	从左到右	`… < …`
	- 小于等于	从左到右	`… <= …`
	- 大于	从左到右	`… > …`
	- 大于等于	从左到右	`… >= …`
	- in	从左到右	`… in …`
	- instanceof	从左到右	`… instanceof …`
- 11
	- 等号	从左到右	`… == …`
	- 非等号	从左到右	`… != …`
	- 全等号	从左到右	`… === …`
	- 非全等号	从左到右	`… !== …`
- 10 按位与	从左到右	`… & …`
- 9	按位异或	从左到右	`… ^ …`
- 8	按位或	从左到右	`… | …`
- 7	逻辑与	从左到右	`… && …`
- 6	逻辑或	从左到右	`… || …`
- 5	空值合并	从左到右	`… ?? …`
- 4	条件运算符	从右到左	`… ? … : …`
- 3	赋值	从右到左	
	- `… = …`
	- `… += …`
	- `… -= …`
	- `… **= …`
	- `… *= …`
	- `… /= …`
	- `… %= …`
	- `… <<= …`
	- `… >>= …`
	- `… >>>= …`
	- `… &= …`
	- `… ^= …`
	- `… |= …`
	- `… &&= …`
	- `… ||= …`
	- `… ??= …`
- 2	yield	从右到左	`yield …`	`yield* …`
- 1	展开运算符(无相关性)	`... …`
- 0	逗号	从左到右	`… , …`

Right shift (>>) 和 Unsigned right shift (>>>) 着异在于符号位的处理，无符号移位将最高当作值来移位处理，而不是保留当作符号使用。


# 🚩 JavaScript 送命题


## ⚡ static method 静态成员

解题：打印结果是什么？

	function Person(name){
	  this.name = name;
	}
	Person.getName = ()=>`${this.name}`;
	let person = new Person("Jeango");
	console.log("getName()", Person.getName())
	// undefined not empty string

JS 的类对象基于原型扩展 prototype，以下代码直接在类对象 Person 扩展 getName 方法，这相应于一个 static 方法，因此不能通过 this 引用实例的数据成员。

静态数据成员也同样方式实现。

注意，this.name 得到的是 undefined 而非空字符串。


## ⚡ map 方法
- https://stackoverflow.com/questions/11340673/why-does-parseint1-0-19-return-18

解题：

	["1", "2", "3"].map(parseInt)

答案：[1, NaN, NaN]
解析：parseInt(val, radix)
     map(element, index, array)
     parseInt('1', 0);  // 0 代表 10 进制
     parseInt('2', 1);  // 没有 1 进制，不合法
     parseInt('3', 2);  // 2 进制根本不会有 3
巩固：["1", "1", "11","5"].map(parseInt) //[1, NaN, 3, NaN]
      parseInt('13',2)    // 1    2 进制能识别 1
      parseInt('18str')   // 18   10 进制能识别到 9
      parseInt(1/0, 19)   // 18   19 进制能识别到 i，而 1/0 == Infinity 首字可以被识别

## ⚡ null 关键字

解题：

	[typeof null, null instanceof Object]

答案：["object", false]
解析：null 代表空对象指针，所以 typeof 判断成一个对象。可以说 JS 设计上的一个 BUG。
     instanceof 实际上判断的是对象上构造函数，null 是空当然不可能有构造函数
巩固：null == undefined // true
     null === undefined //flase

## ⚡ filter 方法

解题：这段代码的执行结果？

	var ary = [0,1,2];
	ary[10] = 10;
	ary.filter(function(x) { return x === undefined;}); 

答案：[]
解析：filter(cb(item, index, arr):bool) 会跳过那些空值元素，注意空元素如 [,,,] 不等于未初始化，回调返回 false 表示过滤。
巩固：
      var ary = [0,1,2,undefined,undefined,undefined,null];
      ary.filter(function(x) { return x === undefined;});
      // [undefined, undefined, undefined] 

## ⚡ map 方法

解题：这段代码的执行结果？

	var ary = Array(3);
	ary[0]=2
	ary.map(function(elem) { return '1'; });

答案：["1", empty × 2]
解析：map 会跳过空值，注意空值不等同 undefined。
	[undefined].map(function(elem) { return '1'; }); ==> ["1"]

## ⚡ reduce 方法


解题：

	[3,2,1].reduce(Math.pow)

答案：9
解析：Math.pow (x , y)  x 的 y 次幂的值
     reduce(reducer(total, current, index, arr), initValue?)
     序号 index 以 1 开始计数，如果一个函数不传初始值 initValue，数组第一个组默认为初始值。
         [3,2,1].reduce(Math.pow)
         Math.pow(3,2) // 9
         Math.pow(9,1) // 9
巩固：[].reduce(Math.pow)       // 空数组会报 TypeError
     [1].reduce(Math.pow)      // 只有一个值不会执行回调函数，直接返回 1
     [].reduce(Math.pow, 1)    // 只有初始值就不会执行回调函数，直接返回 1
     [2].reduce(Math.pow,3)    // 传入初始值，执行回调函数，返回 9

## ⚡ replace 方法

解题：

	"1 2 3".replace(/\d/g, parseInt)

答案："1 NaN 3"
解析：replace() 设置的回调函数有四个参数:
	1、匹配项。
	2、与模式中的子表达式，即圆括号内匹配的字符串，如果有子表达式匹配的项，否则，此参数跳过，后面参数补上。
	3、出现的位置。
	4、stringObject 本身。

	parseInt('1', 0)
	parseInt('2', 2)  //2进制中不可能有2
	parseInt('3', 4)

巩固：

    "And the %1".replace(/%([1-8])/g,function(match,a , b ,d){
      console.log(match +"  "+ a + " "+ b +" "+d )
    });
    //%1  1 8 And the %1 

## ⚡ min max 方法

解题：这段代码的执行结果？

	var min = Math.min(), max = Math.max()
	min < max

答案：false
解析：Math.min 不传参数返回 Infinity, Math.max 不传参数返回 -Infinity，Infinity 应该大于 -Infinity，所以是 false
巩固：Number.MAX_VALUE  > Number.MIN_VALUE  //true

## ⚡ Date constructor

解题：这段代码的执行结果？

	var a = new Date("2014-03-19"),
	b = new Date(2014, 03, 19);
	[a.getDay() === b.getDay(), a.getMonth() === b.getMonth()]

答案：[false, false]
解析：两种构造器解释参数有差别，b 中的月份参数要按照索引来，03 表示四月。
      getDay() 是获取星期几，不同，周日为 0。
      getDate() 获取日期，相同。
      getMonth() 是获取月份，不同。
巩固： [a.getDate() === b.getDate()] // true

## ⚡ RegExp lastIndex

解题：这段代码的执行结果？

	function capture(re, str) {
	  var match = re.exec(str);
	  return match && match[1];
	}
	var grexp  = /value=(\d+)/ig,
	    lrexp = /value=(\w+)/i,
	    a1 = capture(grexp,  "value=1"),
	    a2 = capture(lrexp, "value=1"),
	    a3 = capture(grexp,  "value=2"),
	    a4 = capture(lrexp,  "value=2");
	[a1 === a2, a3 === a4]

答案：[true, false]
解析：正则使用 /g 有一个属性叫 lastIndex，每次匹配成功会记录当前位置，否则将重置为 0。
	所以第一轮执行 grexp 匹配后会得到一个 lastIndex 位置，下次再匹配时，从这个位置开始。

另外，String.match() 方法可以自动将传入字符串转换为正则，通过 new RegExp(str) 转化。

	"/123".match(".123");

## ⚡ 三元运算优先级 

解题：这段代码的执行结果？

	var val = 'smtg';
	console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');

答案：Something
解析：字符串连接比三元运算有更高的优先级 
     所以原题等价于 'Value is true' ? 'Somthing' : 'Nonthing' 
     而不是 'Value   is' + (true ? 'Something' : 'Nonthing')
巩固：
    1 || fn() && fn()   // 1  
    1 || 1 ? 2 : 3 ;    // 2  

## ⚡ Floating Point

解题：判断条件

	0.3-0.2===0.2-0.1

解析：IEEE 754 标准中的浮点数并不能精确地表达小数。

根据小数表达的原理，它正精确率出现类似正太分布，从 0.1 到 0.5 的这些差值出现的次数会增加。

	0.1 - 0.0 = 0.1
	0.2 - 0.1 = 0.1

	0.2 - 0.0 = 0.2
	0.4 - 0.2 = 0.2
	0.5 - 0.3 = 0.2

	0.3 - 0.0 = 0.3
	0.5 - 0.2 = 0.3
	0.6 - 0.3 = 0.3

	0.4 - 0.0 = 0.4
	0.5 - 0.1 = 0.4
	0.8 - 0.4 = 0.4
	0.9 - 0.5 = 0.4
	1.0 - 0.6 = 0.4
	1.3 - 0.9 = 0.4

## ⚡ switch 判断

解题：这段代码的执行结果？

	function showCase(value) {
	    switch(value) {
	    case 'A':
	        console.log('Case A');
	        break;
	    case 'B':
	        console.log('Case B');
	        break;
	    case undefined:
	        console.log('undefined');
	        break;
	    default:
	        console.log('Do not know!');
	    }
	}
	showCase(new String('A'));

答案：Do not know!
解析：switch 判断全等 ===
巩固：var a =  new String('A') ;
      a.__proto__
     // String.prototype 实例的原型指向构造函数的原型对象

	typeof String("A") // "string"
	typeof new String("A") // "object"

## ⚡ [0] 数组比较与隐式转型

解题：这段代码的执行结果？

	var a = [0];
	if ([0]) {
	  console.log(a == true);
	} else {
	  console.log("wut");
	}

答案：false
解析：if 条件判断的是 boolean 值，会对 [0] 转型，结果是 true
      因为数值化比较的倾向，会转换为数字进行比较，先 a.toString() 转化成'0'，再 Number('0') 转化成数值 0
      console.log(a == true);
      Number(true) => 1


接下来又是另外一组怪异的示例：

	![]			false
	[]==[]		false
	[]==![]		true
	[]==true	false

	[0]==false 	// true Number compare
	![0]==false // true Boolean compare
	![1]==false // true Boolean compare
	true // true String compare

这里的比较中，前 2 行不涉及类型转换，所以是对象地址的比较，结果为 false。

而第 3 行复杂点：

- 因为 ! 运算优先，实际右则是布尔值，而 [] 转换布尔值是 true，右侧值为 false；
- 初步结果是数组与布尔值的比较，这是对象类型与原始类型的比较，所以数组 [] 转换为原始数值，即 0；
- 结果是 0 == false 成立。

第 4 个比较更怪异：

- 如按 [] 作布尔值 true 处理，应该是成立的，结果表明它们不是 boolean 比较；
- 对于两种不同类型的比较，倾向于向数值化转换，所以 Number([].toString()) 为 0，而 Number(true) 为 1；

## ⚡ {} + 1

解题：这段代码的执行结果？

	{} + 1

答案：1
解析：花括号是多功能的，在不同的场合中起不同的作用，如 a = {} 表示一个 JSON 对象，而题目中表示的是代码块。
	所以，相当 + 为正号，前面是独立的代码块。
巩固：
	[] + 1 等效 0 + 1，一切皆数！
    [] + [] 等效字符串相加，因为是两个对象相加，没有定义 + 操作符，调用 toString 转换为字符。


## ⚡ +- 符号

解题：这段代码的执行结果？

	'5' + 3
	'5' - 3

答案：53  2
解析：加号有拼接功能，减号就是逻辑运算，如果 + 在字符串前面就可能作为强制数值转换。
巩固：typeof (+"1")   // "number" 对非数值+—常被用来做类型转换相当于Number()

然后，不排除使用令人眼花的运算符号来出题，需要做的就是统计其负号，因为负负为正：

	console.log(1 + - + - + - + 1); // 0
	console.log(1 + - + + + - + 1); // 2

但是，以下这种表达就曾让我百思求不得解，其实你也应该懂得 RegExp：

	console.log(1 + / + + + / + 1); // string "1/ + + + /1"

类似的还以下这样的表达：

	var obj = //; //您认为这行代码有问题吗？

通常 // 解译为注解而非正则。


## ⚡ strict arguments

解题：这段代码的执行结果？

	function sidEffecting(ary) {
	  ary[0] = ary[2];
	}
	function bar(a,b,c) {
	  c = 10
	  sidEffecting(arguments);
	  return a + b + c;
	}
	bar(1,1,1) 

答案：21, 
解析：arguments 会和函数参数绑定，这就是为何新规范中引入严格模式来解决这些不规范的行为。
巩固：es6 给定初始值则无法修改，因为 es6 编译后用了严格模式

      function sidEffecting(ary) {
        ary[0] = ary[2];
      }
      function bar(a=1,b,c) {
        c = 10
        sidEffecting(arguments);
        return a + b + c;
    }
       bar(1,1,1)
       //12

这里总结一下：严格模式和非严格模式
（1）严格模式 arguments 对象是传入函数内实参列表的静态副本；非严格模式下，指向同一个值的引用。
（2）严格模式变量必须先声明，才能使用。
（3）严格模式中允许不绑定 this 为对象，call apply 可以传入 null undefined 而不被转换为 window。

## ⚡ strict this

解题： 这段代码的执行结果？

	var x = [].reverse;
	x();

答案：error
解析：在非严格模式下，对未绑定 this 的函数会默认指向 window。
      x = [].reverse  是把 reverse 函数赋给 x。
      执行 [1,2,3].reverse() 时，this 指向 [1,2,3]。
      严格模式下 reverse 没有绑定 this，应该是 undefined，所以会报类型转换错误。

## ⚡ strict global

解题：这段代码的执行结果？

	(function(){
	  var x = y = 1;
	})();
	console.log(y);
	console.log(x);

答案：1, error
解析：y 被赋值成全局变量，等价于
     y = 1 ;
     var x = y;

这也是需要引入严格模式的一个原因，避免随意引入全局变量。



## ⚡ 超出精度

解题： 这段代码的执行结果？

	var a = 111111111111111110000,
	b = 1111;
	a + b;

答案：111111111111111110000
解析：在 JavaScript 中 number 类型是 64bit 浮点存储。包含：1bit 符号位、11bit 指数位、52bit 实数位。2^53 次方最大值是大约 16 个十进制数。其值为：9007199254740992（0x20000000000000）。超过这个值的话，运算的结果就会不对。以上初始值为 21 个十进制数值，处理时会截断后面的四个数。

## ⚡ Prototype 原型对象

解题：这段代码的执行结果？

	function f() {}
	var a = f.prototype, b = Object.getPrototypeOf(f);
	a === b

答案：false
解析：定义一个函数同时也定义了相应的原型对象 prototype，其实例的 `__proto__` 属性引用了这个原型对象。
	a 是构造函数 f 的原型 ： {constructor: ƒ}
	b 是 Function 实例的原型 Function.prototype，引用的原型是内部的原型对象： ƒ () { [native code] }

## ⚡ function name

解题：这段代码的执行结果？

	function foo() { }
	var oldName = foo.name;
	foo.name = "bar";
	[oldName, foo.name]

答案：["foo", "foo"]
解析：函数的名字不可变。

## ⚡ function length

解题：这段代码的执行结果？

	var a = Function.length,
	b = new Function().length
	a === b

答案：false
解析：首先 `new` 运算优先级和`.`一样所以从左向右执行。 所以 new Function() 的函数参数长度为 0




# 🚩 JavaScript 重要的对象


## ⚡ Math Number Object 

一些新的 API

	Number.EPSILON
	Number.isInteger(Infinity) // false
	Number.isNaN("NaN") // false
	Number.isFinite(1) // true

	Math.acosh(3) // 1.762747174039086
	Math.hypot(3, 4) // 5
	Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

	"abcde".includes("cd") // true
	"abc".repeat(3) // "abcabcabc"

	Object.assign(Point, { origin: new Point(0,0) })

## ⚡ Array APIs
- https://exploringjs.com/impatient-js/ch_arrays.html

Array 静态方法，from map 将映射转为数组：

```js
Array.from({length:2}).map((_,i)=>({start:i+1}));
Array.from({length:2}).map(function(_,i){return {start:i+1}});
Array.from(document.querySelectorAll('*')) // Returns a real Array

Array.of(1, 2, 3) // Similar to new Array(...), but without special one-arg behavior
```

常用方法

```js
// file(value, index);
[0, 0, 0].fill(7, 1) // [0, 7,7]
[1, 2, 3].find(x => x == 3) // 3
[1, 2, 3].findIndex(x => x == 2) // 1

["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"
```

使用排序方法，默认是字符串的排序：

	[1, 3, 2, 12].sort(); // [1, 12, 2, 3]
	["bisque", "pink", "azure"].sort(); // [ 'azure', 'bisque', 'pink' ]

需要定义数值排序，ASC 或 DESC：

	[1, 3, 2, 12].sort( (a, b) => a-b); // [ 1, 2, 3, 12 ]
	[1, 3, 2, 12].sort( (a, b) => -(a-b)); // [ 12, 3, 2, 1 ]

使用 `reduce(reducer(total, current, index, arr), initValue?)` 函数对数组各元素进行处理，注意序号 index 以 1 开始计数：

	[1,2,3,5].reverse().reduce((t, c, i)=>t+c*10**i)

拷贝并覆盖 `copyWithin(overwrite, start, end)`：

	[1, 2, 3, 4, 5].copyWithin(3, 0) // [1, 2, 3, 1, 2]

数组切片方法 `slice(start, end)` vs `splice()`：

- `slice(start, end)` 从数组或字符串提取片断，长度 length = end - start，起点为 0，不修改原有数据。
- `splice(index, howmany, item1,...itemX)` 该方法向数组中添加或者删除元素，返回被删除的项目，该方法会改变原数组。

	- index 参数：必须，整数，规定添加或者删除的位置，使用负数，从数组尾部规定位置。
	- howmany 参数：必须，要删除的数量，如果为 0，则不删除项目。
	- tem1, ...itemX 参数：可选，向数组添加的新项目。

示例：

	a = "ABCDE";
	a.slice(1,2); // "B"
	// a = "ABCDE"

	a = [1,2,3,4];
	a.slice(1,2); // [2]

	a = [1,2,3,4];
	a.splice(1, 2, "A") // (2)[2, 3]
	// a = (3)[1, "A", 4]


## ⚡ Array & Range

```js
	let range = (len:number, start = -1) => {
	  return [...Array(len)].map((i, j)=> start +j+1);
	}

	let one2ten = range(10, 1);
	
	// [0, 1, 2, 3 ... 9]
	Array(10).fill(0).map((i,j,k) => k[j] = j);
```


## ⚡ Typed Array 类型化数组
- Typed Array API https://exploringjs.com/impatient-js/ch_typed-arrays.html
- Arrays https://exploringjs.com/impatient-js/ch_arrays.html
- ArrayBuffer https://es6.ruanyifeng.com/#docs/arraybuffer
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects#indexed_collections
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

根据不同的运行环境，会向 JavaScript 引入一些复杂的对象，HTML5 浏览器会引入更底层的二进制数据 Typed Array API，包括 ArrayBuffer 以及 DataView 对象，但要和 JavaScript 本身提供的类型区别开来，不应混为一谈。

ArrayBuffer 对象、TypedArray 视图和 DataView 视图是 JavaScript 操作二进制数据的一个接口。ES6 规范将它们纳入，并且增加了新的方法。它们都是以数组的语法处理二进制数据，所以统称为二进制数组。

这个接口的原始设计目的，与 WebGL 项目有关，为了满足 JavaScript 与显卡之间大量的、实时的数据交换，它们之间的数据通信必须是二进制的，而不能是传统的文本格式。文本格式传递一个 32 位整数，两端的 JavaScript 脚本与显卡都要进行格式转化，将非常耗时。

使用二进制数组可以像 C 语言那样，直接操作字节，将 4 个字节的 32 位整数，以二进制形式原封不动地送入显卡，脚本的性能就会大幅提升。直接操作内存，大大增强了 JavaScript 处理二进制数据的能力，使得开发者有可能通过 JavaScript 与操作系统的原生接口进行二进制通信。

二进制数组由三类对象组成：

- `ArrayBuffer` 二进制数组：代表内存之中的一段二进制数据，可以通过视图对象进行操作。
- `TypedArray` 类型数组视图：共包括 11 种类型的视图，比如 Uint8Array, Int16Array, Float32Array 等等。
- `DataView` 数据对象视图：可以自定义复合格式的视图，比如第一个字节是 Uint8、第二、三个字节是 Int16、第四个字节开始是 Float32 等等，此外还可以自定义字节序。

简单说，ArrayBuffer 对象代表原始的二进制数据，可以使用 TypedArray 视图用来读写简单类型的二进制数据，也可以使用 DataView 视图用来读写复杂类型的二进制数据。

ArrayBuffer 对象作为内存区域，可以存放多种类型的数据。同一段内存，不同数据有不同的解读方式，这个方式即称为 View。有 TypedArray 和 DataView 两种视图。

ArrayBuffer 实例的属性：

- byteLength 返回所分配的内存区域的字节长度。
- slice() 将内存区域的一部分切片拷贝生成一个新的 ArrayBuffer 对象。
- ArrayBuffer.isView() 判断参数是否为 TypedArray 实例或 DataView 实例。

TypedArray 的子类型包括 10 种类型的视图如下：

	|  Element  |    Typed Array    | Bytes |       Description       |        |
	|-----------|-------------------|-------|-------------------------|--------|
	| Int8      | Int8Array         |     1 | 8-bit signed integer    | ES6    |
	| Uint8     | Uint8Array        |     1 | 8-bit unsigned integer  | ES6    |
	| Uint8C    | Uint8ClampedArray |     1 | 8-bit unsigned integer  | ES6    |
	| Int16     | Int16Array        |     2 | 16-bit signed integer   | ES6    |
	| Uint16    | Uint16Array       |     2 | 16-bit unsigned integer | ES6    |
	| Int32     | Int32Array        |     4 | 32-bit signed integer   | ES6    |
	| Uint32    | Uint32Array       |     4 | 32-bit unsigned integer | ES6    |
	| Float32   | Float32Array      |     4 | 32-bit floating point   | ES6    |
	| Float64   | Float64Array      |     8 | 64-bit floating point   | ES6    |
	| BigInt64  | BigInt64Array     |     8 | 64-bit signed integer   | ES2020 |
	| BigUint64 | BigUint64Array    |     8 | 64-bit unsigned integer | ES2020 |

其中，Uint8C 元素类型是特殊的，DataView 不支持它，它的存在只是为了启用 Uint8ClampedArray。这个类型化数组由 canvas 元素使用来代替 CanvasPixelArray，否则应该避免使用。`Uint8C` 和 `Uint8` 之间的唯一区别是如何处理溢出和下溢，`Uint8C` 会将负数归入 0，大于 255 的数归入 255，即钳位 Clamped。

各种 Typed Array 类型，非常像普通数组，API 也完全适用。构造函数有多种重载，可以从其它类型化数组复制，也可以重新创建，最多有三个可选参数，(buffer, byteOffset=0, length?)，以 Init8Array 为例：

	new Int8Array(); // new in ES2017
	new Int8Array(length);
	new Int8Array(typedArray);
	new Int8Array(object);
	new Int8Array(buffer [, byteOffset [, length]]);

DataView API 与 TypedArray 类型：

	|   TypedArray   |              DataView get             |                 DataView set                 |
	|----------------|---------------------------------------|----------------------------------------------|
	| BigInt64Array  | getBigInt64(offset [, littleEndian])  | setBigInt64(offset, value [, littleEndian])  |
	| BigUint64Array | getBigUint64(offset [, littleEndian]) | setBigUint64(offset, value [, littleEndian]) |
	| Float32Array   | getFloat32(offset [, littleEndian])   | setFloat32(offset, value [, littleEndian])   |
	| Float64Array   | getFloat64(offset [, littleEndian])   | setFloat64(offset, value [, littleEndian])   |
	| Int16Array     | getInt16(offset [, littleEndian])     | setInt16(offset, value [, littleEndian])     |
	| Int32Array     | getInt32(offset [, littleEndian])     | setInt32(offset, value [, littleEndian])     |
	| Int8Array      | getInt8(offset )                      | setInt8(offset, value )                      |
	| Uint16Array    | getUint16(offset [, littleEndian])    | setUint16(offset, value [, littleEndian])    |
	| Uint32Array    | getUint32(offset [, littleEndian])    | setUint32(offset, value [, littleEndian])    |
	| Uint8Array     | getUint8(offset)                      | setUint8(offset, value)                      |

DataView 实例有以下属性：

- `buffer`：返回对应的 ArrayBuffer 对象
- `byteLength`：返回占据的内存字节长度
- `byteOffset`：返回当前视图从对应的 ArrayBuffer 对象的哪个字节开始

TypedArray 实例的属性：

- buffer 只读属性，返回整段内存区域对应的 ArrayBuffer 对象。
- byteLength 只读属性，返回 TypedArray 数组占据的内存长度，单位为字节。
- byteOffset 只读属性，返回 TypedArray 数组从底层 ArrayBuffer 对象的哪个字节开始。
- length 属性表示 TypedArray 数组含有多少个成员，注意将和 byteLength 属性区分。


TypedArray 数组的溢出处理规则，简单来说，就是抛弃溢出的位，一个简单转换规则，可以这样表示：

- 溢出（overflow）：当输入值大于当前数据类型的最大值，结果等于当前数据类型的最小值加上余值，再减去 1。
- 下溢（underflow）：当输入值小于当前数据类型的最小值，结果等于当前数据类型的最大值减去余值的绝对值，再加上 1。

注意，这些方法默认使用的是小端序，对于一个 16 bits 整数占据 2 个字节，保存时数据分成 2 份，先存大值那个字节和先在小值字节需要约定，读取时要保持一致才能正确还原出原来的值。对于 x86 体系的计算机，都采用小端字节序（little endian），看起来数值每个字节是倒乱的：

- MSB - Most Significant Bit 最高有效位字节排在后面的内存地址；
- LSB - Least Significant Bit 最低有效位则保存在前面的内存地址。

ArrayBuffer 是一个构造函数，可以分配一段可以存放数据的连续内存区域。

	const buf = new ArrayBuffer(32);

	const dataView = new DataView(buf);
	dataView.getUint8(0) // 0

	const x1 = new Int32Array(buf);
	const x2 = new Uint8Array(buf);

	x1[0] = 0x12345678;
	// x2[0] = 0x78; // MSB
	// x2[3] = 0x12; // LSB

上面代码生成了一段 32 字节的内存区域，每个字节的值默认都是 0。

为了读写这段内容，需要为它指定视图。DataView 视图的创建，需要提供 ArrayBuffer 对象实例作为参数。

建立 DataView 视图可以按各种格式对二进制数据进行读写，对每种类型的数据都有 get 和 set 方法。例子使用的是 Uint8 格式读取，从偏移为 0 的位置，即从头读取 8 bits 二进制数据，结果是 0，因为原始内存的 ArrayBuffer 对象，默认所有位都是 0。

例子中使用了 Int32Array Uint8Array 两种 TypedArray 视图对二进制数据进行读写，这种同时使用不同类型进行读写的方式称为`复合视图`。DataView 视图与之区别是，它基于二进制数组构造实例，提供一组读写 API，对应不同的数据类型。


很多浏览器操作的 API 都用到二进制数组操作：

- Canvas
- Fetch API
- File API
- WebSockets
- XMLHttpRequest

普通数组的操作方法和属性，对 TypedArray 数组完全适用：

- TypedArray.prototype.copyWithin(target, start[, end = this.length])
- TypedArray.prototype.entries()
- TypedArray.prototype.every(callbackfn, thisArg?)
- TypedArray.prototype.fill(value, start=0, end=this.length)
- TypedArray.prototype.filter(callbackfn, thisArg?)
- TypedArray.prototype.find(predicate, thisArg?)
- TypedArray.prototype.findIndex(predicate, thisArg?)
- TypedArray.prototype.forEach(callbackfn, thisArg?)
- TypedArray.prototype.indexOf(searchElement, fromIndex=0)
- TypedArray.prototype.join(separator)
- TypedArray.prototype.keys()
- TypedArray.prototype.lastIndexOf(searchElement, fromIndex?)
- TypedArray.prototype.map(callbackfn, thisArg?)
- TypedArray.prototype.reduce(callbackfn, initialValue?)
- TypedArray.prototype.reduceRight(callbackfn, initialValue?)
- TypedArray.prototype.reverse()
- TypedArray.prototype.slice(start=0, end=this.length)
- TypedArray.prototype.some(callbackfn, thisArg?)
- TypedArray.prototype.sort(comparefn)
- TypedArray.prototype.toLocaleString(reserved1?, reserved2?)
- TypedArray.prototype.toString()
- TypedArray.prototype.values()
- TypedArray.prototype.set(array, offset) 复制数组。
- TypedArray.prototype.subarray(begin, end) 再建立一个新的视图。
- TypedArray.of(arrayLike) 静态方法，将参数转为一个 TypedArray 实例。
- TypedArray.from(arrayLike) 静态方法，根据数组复制一个 TypedArray 实例。

类型化数组转普通数组：

	const normalArray = [...typedArray];
	const normalArray = typedArray.slice();
	const normalArray = Array.from(typedArray);
	const normalArray = Array.prototype.slice.call(typedArray);

注意，TypedArray 数组没有 `concat()` 方法，可以用下面这个函数模拟。

	function concatenate(resultConstructor, ...arrays) {
	  let totalLength = 0;
	  for (let arr of arrays) {
	    totalLength += arr.length;
	  }
	  let result = new resultConstructor(totalLength);
	  let offset = 0;
	  for (let arr of arrays) {
	    result.set(arr, offset);
	    offset += arr.length;
	  }
	  return result;
	}

	concatenate(Uint8Array, Uint8Array.of(1, 2), Uint8Array.of(3, 4))
	// Uint8Array [1, 2, 3, 4]

ArrayBuffer 和字符串的相互转换可以使用 TextEncoder 和 TextDecoder，参考以下 TypeScript 代码：

	/**
	 * Convert ArrayBuffer/TypedArray to String via TextDecoder
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder
	 */
	function ab2str(
	  input: ArrayBuffer | Uint8Array | Int8Array | Uint16Array | Int16Array | Uint32Array | Int32Array,
	  outputEncoding: string = 'utf8',
	): string {
	  const decoder = new TextDecoder(outputEncoding)
	  return decoder.decode(input)
	}

	/**
	 * Convert String to ArrayBuffer via TextEncoder
	 *
	 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder
	 */
	function str2ab(input: string): ArrayBuffer {
	  const view = str2Uint8Array(input)
	  return view.buffer
	}

	/** Convert String to Uint8Array */
	function str2Uint8Array(input: string): Uint8Array {
	  const encoder = new TextEncoder()
	  const view = encoder.encode(input)
	  return view
	}


## ⚡ SharedArrayBuffer & Worker
- https://developer.mozilla.org/zh-CN/docs/Web/API/Blob
- https://developer.mozilla.org/zh-CN/docs/Web/API/Worker
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
- https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel
- https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage
- https://www.ibm.com/developerworks/cn/web/1112_sunch_webworker/
- https://dev.opera.com/articles/web-workers-rise-up/
- https://html.spec.whatwg.org/multipage/workers.html
- Web Workers https://www.w3.org/TR/workers/
- Detecting HTML5 Features http://diveintohtml5.info/detect.html
- The Basics of Web Workers https://www.html5rocks.com/en/tutorials/workers/basics/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics
- JavaScript 中的 Event Loop - Jake Archibald https://www.bilibili.com/video/BV1E441197g5
- JavaScript 运行机制详解：再谈Event Loop http://www.ruanyifeng.com/blog/2014/10/event-loop.html


在 HTML5 中提出了工作线程（Web Worker）的概念，并且规范出 Web Worker 的三大主要特征：能够长时间运行（响应），理想的启动性能以及理想的内存消耗。

所有主流浏览器均支持 Worker，除了 Internet Explorer 这个破烂旧。

Web Worker 允许开发人员编写能够长时间运行而不被用户所中断的后台程序，去执行事务或者逻辑，并同时保证页面对用户的及时响应。

Worker 接口是 Web Workers API，并不是 ECMAScript 规范的一部分，指的是一种可由脚本创建的后台任务，任务执行中可以向其创建者收发信息。要创建一个 Worker ，只须调用 Worker(URL) 构造函数，函数参数 `URL` 为指定的脚本。

JavaScript 是单线程的，Web worker 引入了多线程：主线程用来与用户互动，Worker 线程用来承担计算任务。每个线程的数据都是隔离的，通过 postMessage() 通信。

主要的对象如下，有两种 Worker 对象，它们都基于 MessageChannel 通信：

- Dedicated Worker 专用线程，实现在后台使用 MessagePort 对象进行通常的功能。
- SharedWorker 共享线程可以同时有多个页面的线程链接，避免线程的重复创建和销毁过程，降低了系统性能的消耗。
- Channel Messaging API 提供 `MessageChannel` 对象接口用来创建一个新的消息通道，通信双方通过 port1 port2 进行消息传递。

根据共享线程构造器 `SharedWorker(scriptURL, name)`，除了可以指定脚本 URL 还可以指定一个显式名称定义。它允许同域中的多个应用程序使用同一个共享线程提供公共服务，从而不需要所有的应用程序都去与这个提供公共服务的 URL 保持联系。

创建 Worker 运行的代码会在另一个全局作用域 `DedicatedWorkerGlobalScope` 或者 `SharedWorkerGlobalScope ` 中运行。

对于类库和脚本的访问和引入，规范中规定可以使用 WorkerGlobalScope 对象的 importScripts(urls) 方法来引入网络中的脚本资源。

发送消息与接收消息通信 API 基本使用：

	// 从端口接收数据 , 包括文本数据以及结构化数据
	1. worker.port.onmessage = function (event) { ... }; 

	// postMessage(mesage, transferList)
	worker.port.postMessage('put your message here … '); 
	worker.port.postMessage({ username: 'usertext', live_city: ['SZ', 'HY', 'HN']});

其中 postMessage() 可以接收两个参数：

- `message` 消息内容，可以是任意基础数据类型，如字符串，或对象；
- `transferList` 可传输对象列表，实现 Transferable 接口的对象包括 ArrayBuffer、MessagePort、 ImageBitmap;

Channel Messaging API 提供 `MessageChannel` 对象接口用来创建一个新的消息通道，它提供两个 `MessagePort`，port1 和 port2，两个端口实现双工传输。

这里要明白 Transferable 接口的具体含义，在不同可执行上下文之间传递，即意味一旦对象被传输到另一个上下文，就表示在当前的上下文中失去了所有权，也不可再访问，因此也就不可以再进行二次传输。

可以直接消息通道进行消息传递，在消息的接收方，可以在 onmessage 事件中的 event.ports 属性查看到 transferList 对应的消息通道。

	var channels = new MessageChannel();
	channels.port1.onmessage = ev => console.log("1", ev.data);
	channels.port2.onmessage = ev => console.log("2", ev.data);
	channels.port1.postMessage("Hi!")
	channels.port2.postMessage("Hi there!")

也可以用它来实现与 iframe 进行通信，。

	var {port1, port2} = new MessageChannel();
	var iframe1 = document.getElementById('iframe1');
	iframe1.contentWindow.postMessage('main','*',[port1]);
	var iframe2 = document.getElementById('iframe2');
	iframe2.contentWindow.postMessage('main','*',[port2]);

    window.addEventListener('message',function(event){
        console.log(event);
        let port = event.ports[0];
        port.onmessage = function(e){
        	console.log('收到' + e.origin + '消息: ' + e.data);
        }
        port.postMessage('from iframe1');
	}, false);

MessageChannel 会对数据执行深拷贝，一般深拷贝用 JSON.parse(JSON.stringify(object)) 就可以解决了，但这种方法的局限性：

- 会忽略 undefined；
- 不能序列化函数；
- 不能解决循环引用的对象；

MessageChannel 虽然不能解决函数序列化，但它可以解决循环引用对象的序列化：

	let obj = {
	  a: 1,
	  c: { },
	  u: undefined,
	  // f: function(){}
	}
	obj.c.c = obj.c

	function deepCopy(obj) {
	  return new Promise((resolve) => {
	    const {port1, port2} = new MessageChannel();
	    port2.onmessage = ev => resolve(ev.data);
	    port1.postMessage(obj);
	  });
	}

	deepCopy(obj).then((copy) => {
	    let copyObj = copy;
	    console.log(copyObj == obj, copyObj, obj)
	});
	// console.log(JSON.stringify(obj))

在 Node.js 环境下的工作线程 Work Threads，MessageChannel 虽然与浏览器的实现方式不同，但是基本模型一致。

在使用通信 API 时，可以直接调用 Worker 的 `postMessage()` 和 `onmessage` 事件，而对于 SharedWorker，则是通过 `port` 属性中的 `MessagePort` 对象调用通信 API。

	worker.port.onmessage = function(e){
	    ...
	}
	worker.port.postMessage("message");

	worker.terminate();

创建 Worker，需要提供一个脚本文件的 URL 地址或从 Blob 数据构造一个 URL，如下：

	var worker = new SharedWorker("sharedworker.js");
	var worker = new SharedWorker('sharedworker.js', ’ mysharedworker ’ );

如果使用 Blob 则可以将从指定数据作为脚本进行加载，以下示范如何从 script 元素中加载一个 SharedWorker：

	<script id="sharedworker" type="text/worker">
	var viewers = {};
	var index = 0;
	onconnect = function(e) {
	  var port = e.ports[0];
	  var name = "worker-"+(++index);
	  viewers[name] = {port, name, channels}
	  Broadcast("Welcome " + name);
	  port.onmessage = function (ev) {
	    console.log("A", ev.data)
	    if(ev.data.startsWith("Broadcast:")){
	        Broadcast(ev.data)
	    }else{
	        port.postMessage({msg:"A", data: ev.data});
	    }
	  };
	}
	function Broadcast(msg){
	  for (var id in viewers){
	    let er = viewers[id];
	    er.port.postMessage({msg, JSON.stringify(er)});
	  }
	}
	</script>

	<script id="worker" type="text/worker">
	  let transport;
	  let id = 0;
	  onmessage = function (ev) {
	    console.log("Received:", ev.data)
	    let msg = {name:"Worker", id: id++, data: ev.data}
	    postMessage(msg);
	    if(ev.ports.length>0){
	      transport = ev.ports[0]
	      transport.onmessage = ev => console.log("Transferable: ", ev.data);
	    }
	    transport && transport.postMessage({ ...msg, type:'Transferable List'});
	  };
	</script>

	<script>
	  let scripts = document.querySelectorAll("script[type=\"text\/worker\"]");
	  let workers = Array.prototype.map.call(scripts, function (s) { return s.textContent; });
	  var blob = new Blob([workers[0]], {type: "text/javascript"});
	  // let worker = new SharedWorker(window.URL.createObjectURL(blob), "test");
	  let worker = new SharedWorker("worker.js", "test");
	  worker.port.onmessage = (ev) => console.log("MSG:", ev.data, ev.ports);
	  worker.port.addEventListener('message', (ev) => console.log(ev.data, ev.ports), false);
	  worker.port.postMessage("Hi!");
	  worker.port.postMessage({msg: "Hi!"});
	  worker.port.start();

	  var channels = new MessageChannel();
	  var blob = new Blob([workers[1]], {type: "text/javascript"});
	  let worker1 = new Worker(window.URL.createObjectURL(blob));
	  let worker2 = new Worker(window.URL.createObjectURL(blob));
	  worker1.onmessage = ev => console.log("Worker1:", ev.data, ev.ports);
	  worker2.onmessage = ev => console.log("Worker2:", ev.data, ev.ports);
	  worker1.postMessage("Azure", [channels.port1])
	  worker2.postMessage("Bisque", [channels.port2])
	</script>


前面展示了 Worker 和 SharedWorker 代码的工作方式差别，专用线程中，Worker 所在运行环境是 `DedicatedWorkerGlobalScope`，直接使用消息 API。而 SharedWorker 则需要通过联接方法 `connect()` 将消息 API 与指定端口关联。

另外，如果需要实现 SharedWorker 与各个 Viewer 通信，Worker 脚本就必需以独立脚本文件方式加载。

线程之间的数据交换可以是各种格式，不仅仅是字符串，也可以是二进制数据。这种交换采用的是复制机制，即一个进程将需要分享的数据复制一份，通过 postMessage 方法交给另一个进程。如果数据量比较大，这种通信的效率显然比较低。很容易想到，这时可以留出一块内存区域，由主线程与 Worker 线程共享，两方都可以读写，那么就会大大提高效率，协作起来也会比较简单（不像 postMessage 那么麻烦）。

通过 postMessage(data: any) 通信传递的数据，经过 MessageChannel 时会进行深度复制，再传给另一方，对于大量的数据可能会产生性能问题。

ES2017 引入 SharedArrayBuffer，允许 Worker 线程与主线程共享同一块内存。SharedArrayBuffer 的 API 与 ArrayBuffer 一模一样，唯一的区别是后者无法共享数据。

	const sharedBuffer = new SharedArrayBuffer(1024);
	w.postMessage(sharedBuffer);
	const sharedArray = new Int32Array(sharedBuffer);

上面代码中，postMessage 方法的参数是 SharedArrayBuffer 对象。

Worker 线程从事件的 data 属性上面取到数据。

	onmessage = function (ev) {
	  const sharedBuffer = ev.data;
	  const sharedArray = new Int32Array(sharedBuffer);
	  // ...
	};

共享内存也可以在 Worker 线程创建，发给主线程。

SharedArrayBuffer 与 ArrayBuffer 一样，本身是无法读写的，必须在上面建立视图，然后通过视图读写。


接口对象参考：

	[Constructor(DOMString scriptURL, optional DOMString name)] 
	interface SharedWorker : AbstractWorker { 
		readonly attribute MessagePort port; 
	};

	[Supplemental, NoInterfaceObject] 
	interface AbstractWorker { 
		attribute Function onerror; 
	 
	}; 
	AbstractWorker implements EventTarget;

	[Constructor(in DOMString scriptURL)] 
	interface Worker : AbstractWorker { 
		void terminate(); 
		void postMessage(in any message, in optional MessagePortArray ports); 
		attribute Function onmessage; 
	};


	[Exposed=Worker] interface WorkerGlobalScope : EventTarget {
	  readonly attribute WorkerGlobalScope self;
	  readonly attribute WorkerLocation location;

	  void close();
	  attribute OnErrorEventHandler onerror;
	  attribute EventHandler onlanguagechange;
	  attribute EventHandler onoffline;
	  attribute EventHandler ononline;

	  // also has additional members in a partial interface
	};

	[Exposed=Worker]
	partial interface WorkerGlobalScope { // not obsolete
	  void importScripts(DOMString... urls);
	  readonly attribute WorkerNavigator navigator;
	};
	WorkerGlobalScope implements WindowTimers;
	WorkerGlobalScope implements WindowBase64;
	WorkerGlobalScope implements WorkerUtils; 
	WorkerGlobalScope implements EventTarget;

	[Global=(Worker,DedicatedWorker),Exposed=DedicatedWorker]
	/*sealed*/ interface DedicatedWorkerGlobalScope : WorkerGlobalScope {
	  void postMessage(any message, optional sequence<Transferable> transfer);
	  attribute EventHandler onmessage;
	};

	[Global=(Worker,SharedWorker),Exposed=SharedWorker]
	/*sealed*/ interface SharedWorkerGlobalScope : WorkerGlobalScope {
	  readonly attribute DOMString name;
	  readonly attribute ApplicationCache applicationCache;
	  attribute EventHandler onconnect;
	};

实现 sleep 功能可以通过 setTimeout() requestAnimationFrame() 或者使用 queueMicrotask() Promise 微任务方式实现，也可以通过循环空转来解决。本质上执行的线程并没有真正的 sleep，事件循环以及 v8 仍在运行，而空转的实现则无疑实在浪费 CPU 性能，有点类似自旋锁，不符合大多数场景。

在 ECMA-262 出现之后开始有了转机，它引入 Atomics 对象，提供 wait() 让脚本引擎陷入等待队列并进入真正的 sleep，直到 notify() 或者超时，该规范特性在 Node 8.10.0+ 实现。而在浏览器上支持度不是很高，主要是 Chrome Edge Firefox。



## ⚡ Map WeakMap
- https://exploringjs.com/impatient-js/ch_maps.html
- https://exploringjs.com/impatient-js/ch_weakmaps.html

JavaScript 对象本身就是键值对数据结构，但是 Map 对象提供更为完全的功能，可以使用任何值作为 key，而且 API 丰富。

既然，任何值都可当 key 使用，那么什么 key 是相同的呢？直观上，NaN 包括和它运算后的 NaN 是应当作相同的 key 来看待，尽管 NaN 绝不等于自己：

> map.set(NaN+1, 123);
> map.set(NaN, 123);

与 Map 对象非常相似，WeakMap 差异是：

- key 只能是对象，并且不可以被遍历，不可以清除，也不具有 size 属性。它是黑匣子，只有同时拥有 WeakMap 和 key 引用才能访问其值。
- key 是对象的弱引用，当对象被回收后，会自动移除对应的键值对。

示范：

	const wm = new WeakMap();
	{
	  const obj = {};
	  wm.set(obj, 'attachedValue'); // (A)
	}
	// (B)

由于 key 引用在代码块中定义，当代码块退出，引用就无处引用，也就访问不了 WeakMap 中的值。

正是因为 WeakMap 对 key 对象的弱引用，使用得它可以用在以下场景：

- 用来缓存计算结果，提升程序效率；
- 用来保存私有数据；


Map API

- `size` 返回映射元素个数。
- `clear()` 清空映射容器。
- `delete(key)` 删除 key 的关联值。
- `forEach()` 
- `get(key)` 获取 key 对应的值。
- `has()` 判断是否存在实体。
- `keys()` 返回所有键的迭代器。
- `values()` 返回所有值的迭代器。
- `entries()` 返回所有实体的迭代器。
- `set(key, value)` 设置一个实体。

WeakMap API 

- `new WeakMap<K, V>(entries?: Iterable<[K, V]>)` [ES6]
- `delete(key: K)` : boolean [ES6]
- `get(key: K)` : V [ES6]
- `has(key: K)` : boolean [ES6]
- `set(key: K, value: V)` : this [ES6]


示范：

	// Maps
	var m = new Map();
	m.set("hello", 42);
	m.set("key", 34);
	m.get("key") == 34;

	//WeakMap
	var wm = new WeakMap();
	wm.set("key", { extra: 42 });
	wm.size === undefined

	const map = new Map()
	  .set(false, 'no')
	  .set(true, 'yes')
	;

	for (const entry of map.entries()) {
	  console.log(entry);
	}
	// Output:
	// [false, 'no']
	// [true, 'yes']

转换为对象：

	const map = new Map([
	  ['a', 1],
	  ['b', 2],
	]);
	const obj = Object.fromEntries(map);
	assert.deepEqual(
	  obj, {a: 1, b: 2});

可以在数组上使用 `map()` `filter()` 等方法，但是在 Map 对象上没有这样的办法：

	let tasks = [{n:"ABC", v:100}, {n:"XY", v:200}]
	let ret = tasks.map((it,joke,kiss)=>{
	    return `${joke}#${it.n}`
	})
	console.log(`origin`, tasks) // origin [ { n: 'ABC', v: 100 }, { n: 'XY', v: 200 } ]
	console.log(`return`, ret)   // return [ '0#ABC', '1#XY' ]


## ⚡ Set WeakSet
- https://exploringjs.com/impatient-js/ch_sets.html
- https://exploringjs.com/impatient-js/ch_weaksets.html

集合对象 Set 是 ES6 中新增的数据结构，与数组不同的是其成员无重复且无序。

在 ES6 之前，JavaScript 没有集合的数据结构，使用了两种低效解决方法：

- 对象的键被用作一组字符串。
- 数组被用作任意值的集合，缺点是成员资格检查的速度较慢。

而 ES6 引入数据集，它可以包含任意值并快速执行成员身份检查。

WeakSet 和 WeakMap 在内存管理上面表现很相似，因为 key 是弱引用，不会阻止内存回收动作。都是黑盒，必需拥有 WeakSet 实例和值才能从 WeakSet 获取值，所有它的主要目的不是为了再次获取值，而是判断有没有记录目标值。同样不支持 iteration, looping, clearing。


利用 Set 对象过滤重复数据，Set 中的元素只会出现一次，即元素是唯一的。

因为 Set 中的值总是唯一的，所以需要判断两个值是否相等。在 ECMAScript 规范的早期版本中，不是基于 === 操作符使用的算法。具体来说，对于 Set s，+0 和 -0 是不同的值，虽然它们严格相等。然而，在 ECMAScript 2015 规范中这点已被更改，1/-0 与 1/0 不相等。

另外，NaN 和 undefined 都可以被存储在 Set 中， 所有 NaN 被视为相同的值，尽管 NaN !== NaN。

>	let s = "follow";
>	let a = [...s];
>	var set = new Set(a);
>	console.log(Array.from(set).join(""));

更多示范：

	const set = new Set(['red', 'green', 'blue']);
	const set = new Set().add('red').add('green').add('blue');

	// Sets
	var s = new Set();
	s.add("hello").add("goodbye").add("hello");
	s.size === 2;
	s.has("hello") === true;

	// Weak Sets
	var ws = new WeakSet();
	ws.add({ data: 42 });// Because the added object has no other references, it will not be held in the set

并集、交集、差集运算示范：

	// Union (a ∪ b)
	const a = new Set([1,2,3]);
	const b = new Set([4,3,2]);
	// Use spreading to concatenate two iterables
	const union = new Set([...a, ...b]);
	assert.deepEqual([...union], [1, 2, 3, 4]);
	
	// Intersection (a ∩ b) 
	const a = new Set([1,2,3]);
	const b = new Set([4,3,2]);
	const intersection = new Set(
	  [...a].filter(x => b.has(x)));
	assert.deepEqual([...intersection], [2, 3]);

	// Difference (a \ b) 
	const a = new Set([1,2,3]);
	const b = new Set([4,3,2]);
	const difference = new Set(
	  [...a].filter(x => !b.has(x)));
	assert.deepEqual([...difference], [1]);

	// Mapping over Sets 
	const set = new Set([1, 2, 3]);
	const mappedSet = new Set([...set].map(x => x * 2));
	assert.deepEqual([...mappedSet], [2, 4, 6]);
	
	// Filtering Sets 
	const set = new Set([1, 2, 3, 4, 5]);
	const filteredSet = new Set([...set].filter(x => (x % 2) === 0));
	assert.deepEqual([...filteredSet], [2, 4]);


Set API

- `size` 返回集合的元素个数，类似数组的长度 length。
- `add(value)` 向集合中添加一个元素 value，已经存在的元素则忽略。
- `delete(value)` 从集合中删除元素 value。
- `has(value)` 判断 value 是否在集合中。
- `clear()` 清空集合。
- `keys()` 返回集合中所有键的迭代器。
- `values()` 返回集合中所有值得迭代器。
- `entries()` 返回一个包含 Set 对象中所有元素得键值对迭代器。
- `forEach(callbackFn, thisArg)` 枚举集合成员，可以为回调绑定 `this` 指针为 thisArg。

WeakSet API 

- new WeakSet<T>(values?: Iterable<T>) [ES6]
- `add(value: T)`: this [ES6]
- `delete(value: T)`: boolean [ES6]
- `has(value: T)`: boolean [ES6]


## ⚡ Class 类对象
- https://exploringjs.com/es6/ch_classes.html

JavaScript 发展到 ES6 终于有了 Class 关键字，类型定义不同需要和 function 糅杂在一起了。

新式类型定义本质上是语法糖。即对原有语言的功能并没有影响，依然使用原型继承实现扩展，但是更方便程序员使用。

提供以下关键字及功能：

- extends 继承其它类；
- static 定义静态成员或方法；
- constructor() 构造函数；
- super() 调用父类构造函数；
- Computed method names 可计算方法名，方法名称使用方括号，是私有方法实现方式，可结合 Symbol 实现； 

目前，有一个私有属性的提案，给成员名前缀 # 号表示为 class 私有属性。如果使用 TypeScript 则可以提前使用完整的基于 OOP 的编程体验。

类型定义示范：

	class Point {
	    constructor(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	    toString() {
	        return `(${this.x}, ${this.y})`;
	    }
	}

	class ColorPoint extends Point {
	    constructor(x, y, color) {
	        super(x, y);
	        this.color = color;
	    }
	    toString() {
	        return super.toString() + ' in ' + this.color;
	    }
	}

使用类型依然和传统的 function 类型一样，并且使用 typeof 可以获取到一个类型定义依然是 "function"：

	> const cp = new ColorPoint(25, 8, 'green');

	> cp.toString();
	'(25, 8) in green'

	> cp instanceof ColorPoint
	true
	> cp instanceof Point
	true

	> typeof ColorPoint
	'function'

ECMAScript 6 有些特殊方法都使用了结合 Symbol 的 Computed method names，比如使用可枚举的 Symbol.iterator 作为方法名，这意味此类可以使用 for-of 进行枚举：

	class IterableArguments {
	    constructor(...args) {
	        this.args = args;
	    }
	    * [Symbol.iterator]() {
	        for (const arg of this.args) {
	            yield arg;
	        }
	    }
	}

	for (const x of new IterableArguments('hello', 'world')) {
	    console.log(x);
	}

	// Output:
	// hello
	// world

ES6 引入了 `new.target` 属性，该属性一般用在构造函数之中。通过 new 命令或 Reflect.construct() 执行构造函数，则 target 包含类对象。如果直接调用而不是执行实例化，则 new.target 返回 undefined，因此这个属性可以用来确定构造函数是怎么调用的。

	function Person(name) {
	  if (new.target === Person) {
	    this.name = name;
	  } else {
	    throw new Error('必须使用 new 命令生成实例');
	  }
	}

	var person = new Person('张三'); // 正确
	var notAPerson = Person.call(person, '张三');  // 报错

更多示范：

	class Artist {
		bar = Symbol('hello');
		this.baz = 'world';
		static staticMember = 'abc';

		_secret = "***";
		get secret() {
			return this._secret;
		}

		set secret(value) {
			this._secret = value;
		}

		constructor(name) {
		    super(name);
	        this.name = name;
	    }

		// 公有方法
		foo(baz) {
			this[bar](baz);
		}

		// 私有方法 Symbol 实现
		[bar](baz) {
			return this[snaf] = baz;
		}
	    static perform() {
	        return "demo static... ";
	    }
	    // static perform = () => { // worang way ...
	}
	Artist.staticMember = 100;

	class Singer extends Artist {

	    constructor(name, song) {
	        super.constructor(name);
	        this.song = song;
	    }

	    perform() {
	        return super.perform() + "[" + this.song + "]";
	    }
	}

	let james = new Singer("Etta James", "At last");
	james instanceof Artist; // true
	james instanceof Singer; // true

	james.perform(); // "Etta James performs [At last]"


## ⚡ Modules 模块化
- https://exploringjs.com/impatient-js/ch_modules.html
- https://exploringjs.com/es6/ch_modules.html#sec_overview-modules

模块化作为第一生产力的代码组织方式，是一个事实。

在标准化之前，ES5 脚本通过以下方式来模拟模块：

	<script src="other-module1.js"></script>
	<script src="other-module2.js"></script>
	<script src="my-module.js"></script>

在其中 my-module.js 模块中模拟导入、导出模块：

	var myModule = (function () { // Open IIFE
	  // Imports (via global variables)
	  var importedFunc1 = otherModule1.importedFunc1;
	  var importedFunc2 = otherModule2.importedFunc2;

	  // Body
	  function internalFunc() {
	    // ···
	  }
	  function exportedFunc() {
	    importedFunc1();
	    importedFunc2();
	    internalFunc();
	  }

	  // Exports (assigned to global variable `myModule`)
	  return {
	    exportedFunc: exportedFunc,
	  };
	})(); // Close IIFE


ES6 的内置模块功能 ESM 借鉴了 CommonJS 和 AMD 模块规范各自的优点：

(1).具有 CommonJS 的精简语法、唯一导出出口(single exports)和循环依赖(cyclic dependencies)的特点。
(2).类似 AMD，支持异步加载和可配置的模块加载。

	// lib/math.js
	export function sum(x, y) {
	  return x + y;
	}
	export var pi = 3.141593;

	// app.js
	import * as math from "lib/math";
	alert("2π = " + math.sum(math.pi, math.pi));

	// otherApp.js
	import {sum, pi} from "lib/math";
	alert("2π = " + sum(pi, pi));

Module Loaders:

	// Dynamic loading – ‘System’ is default loader
	System.import('lib/math').then(function(m) {
	  alert("2π = " + m.sum(m.pi, m.pi));
	});

	// Directly manipulate module cache
	System.get('jquery');
	System.set('jquery', Module({$: $})); // WARNING: not yet finalized

每一个 ES6 模块都是一个包含 JS 代码的文件，模块本质上就是一段脚本，而不是用 module 关键字定义一个模块，默认情况下模块都是在严格模式下运行。模块功能主要由两个命令构成：export 和 import。export 导出定义对外接口；import 导入其他模块提供的功能，同时创造命名空间（namespace），防止函数名冲突。

27.1.1 Exporting 

	// Named exports
	export function f() {}
	export const one = 1;
	export {foo, b as bar};

	// Default exports
	export default function f() {} // declaration with optional name
	// Replacement for `const` (there must be exactly one value)
	export default 123;

	// Re-exporting from another module
	export {foo, b as bar} from './some-module.mjs';
	export * from './some-module.mjs';
	export * as ns from './some-module.mjs'; // ES2020

27.1.2 Importing 

	// Named imports
	import {foo, bar as b} from './some-module.mjs';
	// Namespace import
	import * as someModule from './some-module.mjs';
	// Default import
	import someModule from './some-module.mjs';

	// Combinations:
	import someModule, * as someModule from './some-module.mjs';
	import someModule, {foo, bar as b} from './some-module.mjs';

	// Empty import (for modules with side effects)
	import './some-module.mjs';

无对象导入，如果模块包含一些逻辑要执行，且不会导出任何对象，此类对象也可以被导入到另一模块中。

	import './module';  

导入默认对象，采用Default导出方式导出对象，该对象在import声明中将直接被分配给某个引用。

	import d from './exportDefault';  

批量导入

	import {firstName, lastName, year, multiply} from './export';

重命名导入

	import { lastName as surname } from './export';

导入所有对象

	import * as o from './export';

import命令导入的对象可能是一个变量，也可能是一个函数，或者一个类，要视具体情况而定。import与require的差异较大，好不要混用。

示例：

	// model expoted.js
	export default async function ajax(api, params) {
		let method = params.method || 'POST';
		delete params.method;
		return axios({
			 url: api,
			 method: method,
			 data: params,
		});
	}

	// model main.js
	improt async from "exported.js";
	async("test.php", {id:"test"}).then((res)=>console.log(res));


## ⚡ Proxies 响应式基本原理
- Proxy 对象代理参考文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- Reflect 文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
- Metaprogramming with proxies https://exploringjs.com/es6/ch_proxies.html

响应式 Responsible 是非常流行的编程模式，在最新的 Vue 框架响应式实现中，使用了 Proxy 对象。 

ES6 引入的代理（Proxy）实现了对象的 API Intercepting 劫持监听，通过代理设置监听处理函数，可以实现响应式的编程。

例如，以下代码监听了 target 对象上的属性获取操作，只要获取它的属性就会执行 handler.get() 方法：

```js
var target = {};
var handler = {
  get: function (receiver, name) {
    return `Hello, ${name}!`;
  }
};
var p = new Proxy(target, handler);
p.world === 'Hello, world!';
```

实现双向数据绑定的原理至少有两种方式，利用 ECMAScript 5.1 规范中定义的 `Object.defineProperty()` 属性定义接口，这个方法用来定义对象属性描述符。对象属性描述符有**数据描述符**和**存取描述符**。数据描述符是一个具有值的属性，可以配置读写性 `writable`。存取描述符是由 Getter、Setter 函数描述的属性，即对属性读写时的关联函数。

描述符必须是这两种形式之一，不能同时是两者，简单地说就是 `get`、`set` 和 `value`、`writable`不能同时定义。这个属性定义接口在 Internet Explorer 9 中才被支持，IE8 虽然实现这个接口但只能在 DOM 对象上使用，这就是 Vue 不支持旧版 IE8 的原因。

当属性设置为 `writable` 为 false 时，该属性处于只读状态，对属性赋值时不会发生错误也不会改变原值。`enumerable` 定义了对象的属性是否可以在 for-in 循环和 Object.keys() 中被枚举，默认为 false。使用 `oo.anotherProperty=123` 这样直接赋值的方式创建对象的属性，则这个属性是可以被枚举的，`enumerable` 为 true。`configurable` 特性表示对象的属性是否可以被重新配置，以及除 `value` 和 `writable` 特性外的其他特性是否可以被修改，也就是说，当属性定义为不可配置时，对 `enumerable` 或 Getter、Setter 方法重新定义时会抛出异常。

```js
var oo = { _value:1 };
Object.defineProperty(oo,'value', {
	// value:9,
	// writable: false,
	enumerable: true,
	configurable: true,
	get: function(){
		console.log("get value...", this._value);
		return this._value;
	},
	set: function(value){
		this._value = value;
		console.log(`set value... ${this._value}`);
	}
});

var i = oo.value;
oo.value += 1;
```

Vue 框架实现数据绑定的做法是通过 `Object.defineProperty()` 劫持数据，再通过 Publish–Subscribe Pattern 发布-订阅开发模式来管理数据变化，发布-订阅模式中 Vue 充当了发布者 ，Watcher、Computed 设置的方法则是订阅者，同时又是，Vue 劫持数据监听到数据变更时对订阅者发起调用通知数据更新。监听到 data 的数据有变化时，Vue 还会判断数据是否是原有数据对象的引用，如果不是则进入视图更新流程，用新数据渲染，这就是 Vue MVVM 原理。这个过程中 Vue 还使用了 观察者模式 Observer Pattern，和发布-订阅模式一样，都用来降低耦合度。发布订阅模式里，发布者和订阅者，不是松耦合，而是完全解耦的。相对 Watcher 来说，Vue 对计算属性 Computed 处理显得更像观察模式，即观察者通过观察计算属性中被依赖的数据来进行响应。而发布订阅模式里，除了发布者和订阅者两个角色，还有经常被忽略的经纪人 Broker，只是这个角色在代码实现上不太明显有独立模块实现。

在新版本的 Vue 3 使用代理 Proxy 监听对象的操作，替代掉原来的 `Object.defineProperty()` 劫持数据方式。总结起来，Vue 3 更小巧，更快速；支持摇树优化；支持 Fragments 和跨组件渲染；支持自定义渲染器。新的代码库在设计之初就考虑到了对摇树优化 Tree-Shaking 的支持。摇树优化，是一种在打包时去除没用到的代码的优化手段，dead code elimination，就像将树上的坏果摇掉一样，谷歌有一篇相关教程 Reduce JavaScript Payloads with Tree Shaking。

```ts
var target = {};
var handler = {
  set: function(target, prop, value) {
  	console.log({target, prop, value});
  	target[prop] = value;
  },
  get: function (target, property, receiver) {
    return `Hello, ${property}!`;
  }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
p.world = 'Hello, world!';
```

代理 Proxy 会将操作转发到目标对象，所有的捕捉器是可选的，如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

	var p = new Proxy(target, {
	  apply: function(target, thisArg, argumentsList) {
	  }
	});

可用的捕捉器列表：

- `getPrototypeOf(target)` Object.getPrototypeOf 方法的捕捉器。
- `setPrototypeOf(target, prototype)` Object.setPrototypeOf 方法的捕捉器。
- `isExtensible(target)` Object.isExtensible 方法的捕捉器。
- `preventExtensions(target)` Object.preventExtensions 方法的捕捉器。
- `getOwnPropertyDescriptor(target, prop)` Object.getOwnPropertyDescriptor 方法的捕捉器。
- `defineProperty(target, prop, descriptor)` Object.defineProperty 方法的捕捉器。
- `has(target, prop)` in 操作符的捕捉器。
- `get(target, prop, receiver)` 属性读取操作的捕捉器。
- `set(target, prop, value)` 属性设置操作的捕捉器。
- `deleteProperty(target, prop)` delete 操作符的捕捉器。
- `ownKeys(target)` Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器。
- `apply(target, thisArg, argumentsList)` 函数调用操作的捕捉器。
- `construct(target, argumentsList, newTarget)` new 操作符的捕捉器。

对比可以发现 Proxy 的功能更强大，特点如下：

- Proxy 作为新标准将受到浏览器厂商重点持续的性能优化；
- Proxy 能观察的类型比 defineProperty 更丰富；
- Proxy 不兼容 ie，也没有 polyfill，defineProperty 能支持到 ie9；
- Object.defineProperty 是劫持对象的属性，新增元素需要再次 defineProperty，而 Proxy 劫持的是整个对象，不需要做特殊处理；
- 使用 defineProperty 时，修改原来的 obj 对象就可以触发拦截，而使用 Proxy，就必须修改代理对象，即 Proxy 包装后的实例；

但是无法监视地址栏 Hash 的变动：

```js
setInterval( (()=>{
    var last = location.hash;
    return ()=>{
        if(location.hash !== last){
            last = location.hash;
            location.reload();
            console.log("hash changed, reload...");
        }
    };
})(), 300);
```


## ⚡ Reflect 反射
- https://es6.ruanyifeng.com/#docs/reflect

ES6 引入的 Reflect 对象一共有 13 个静态方法，它给 JavaScript 带来了强大的元编程功能。

相关的模块 reflect-metadata 用来支持实验性的 Metadata API。这个库还不是 ECMAScript 标准的一部分，是 Polyfill for Metadata Reflection API。 然而，当装饰器被 ECMAScript 官方标准采纳后，这些扩展也将被推荐给 ECMAScript 以采纳。

你可以通过 npm 安装这个库：

	npm i reflect-metadata --save

Reflect 对象的方法与 Proxy 对象的方法一一对应，只要是 Proxy 对象的方法，就能在 Reflect 对象上找到对应的方法。这就让 Proxy 对象可以方便地调用对应的 Reflect 方法，完成默认行为，作为修改行为的基础。也就是说，不管 Proxy 怎么修改默认行为，你总可以在 Reflect 上获取默认行为。

反射 API 的引入可以让 Object 操作都变成函数行为，某些比如 name in obj 和 delete obj[name]，可以采用 Reflect.has(obj, name)和 Reflect.deleteProperty(obj, name) 函数实现。

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

Reflect.get 查找并返回对象的 name 属性，如果没有该属性，则返回 undefined。如果 name 指定的属性是 getter，则为 this 绑定 receiver。

	var myObject = {
	  foo: 1,
	  bar: 2,
	  get baz() {
	    return this.foo + this.bar;
	  },
	};

	var myReceiverObject = {
	  foo: 4,
	  bar: 4,
	};

	Reflect.get(myObject, 'baz', myReceiverObject) // 8

Reflect.set 方法设置对象的 name 属性值，如果 name 指定的属性设置了 setter，则为 this 绑定 receiver。

	var myObject = {
	  foo: 4,
	  set bar(value) {
	    return this.foo = value;
	  },
	};

	var myReceiverObject = {
	  foo: 0,
	};

	Reflect.set(myObject, 'bar', 1, myReceiverObject);
	myObject.foo // 4
	myReceiverObject.foo // 1

Reflect.has 方法对应旧式的 prop in obj 里面的 in 运算符。

	var myObject = {
	  foo: 1,
	};

	Reflect.has(myObject, 'foo') // true

Reflect.deleteProperty 方法等同于 delete 用于删除对象的属性。

	const myObj = { foo: 'bar' };

	Reflect.deleteProperty(myObj, 'foo');

如果删除成功，或者被删除的属性不存在，返回 true；删除失败，被删除的属性依然存在，返回 false。

Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

	class Greeting{
	  constructor(name) {
	    console.log('new target', new.target===Greeting, new.target)
	    this.name = name;
	  }
	}
	const instance = Reflect.construct(Greeting, ['张三']);

Reflect.getPrototypeOf 方法用于读取对象的 `__proto__` 属性，和 Object.getPrototypeOf(obj) 差别在于后者将参数转换为对象如果不是对象，而 Reflect.getPrototypeOf 会报错如果传入的不是对象。

	Reflect.getPrototypeOf({}) === Object.prototype

Reflect.setPrototypeOf 方法为目标对象设置一个原型 prototype，对应 Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。已经封闭、冰冻的对象，无法修改原型属性，并且传入对象不可以是 undefined 或 null。

	Reflect.setPrototypeOf(Object.freeze({}), null) // false
	Reflect.setPrototypeOf({}, {say: console.log})


Reflect.apply 方法等同于 Function.prototype.apply.call(func, thisArg, args)，用于绑定 this 对象再执行指定定函数。

一般来说，如果要绑定一个函数的 this对象，可以这样写 fn.apply(obj, args)，但是如果函数定义了自己的 apply 方法，就只能写成 Function.prototype.apply.call(fn, obj, args)，采用 Reflect 对象可以简化这种操作。

	const ages = [11, 33, 12, 54, 18, 96];

	// 旧写法
	const youngest = Math.min.apply(Math, ages);
	const oldest = Math.max.apply(Math, ages);
	const type = Object.prototype.toString.call(youngest);

	// 新写法
	const youngest = Reflect.apply(Math.min, Math, ages);
	const oldest = Reflect.apply(Math.max, Math, ages);
	const type = Reflect.apply(Object.prototype.toString, youngest, []);

Reflect.defineProperty 方法是 Object.defineProperty 的替代，用来为对象定义属性。

	function MyDate() {	}

	Reflect.defineProperty(MyDate, 'now', {
	  value: () => Date.now()
	});

Reflect.getOwnPropertyDescriptor 是 Object.getOwnPropertyDescriptor 的替代，用于得到指定属性的描述对象。

	var myObject = {};
	Object.defineProperty(myObject, 'hidden', {
	  value: true,
	  enumerable: false,
	});

	var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
	// {value: true, writable: false, enumerable: false, configurable: false}

Reflect.isExtensible 方法对应 Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。

	Object.isExtensible({}) // true
	Reflect.isExtensible({}) // true

	Object.isExtensible(1) // false
	Reflect.isExtensible(1) // TypeError: Reflect.isExtensible called on non-object

Reflect.preventExtensions 对应 Object.preventExtensions 方法，用于将对象转变为不可扩展状态。它返回一个布尔值，表示是否操作成功。

如果参数不是对象，Object.preventExtensions 在 ES5 环境报错，在 ES6 环境返回传入的参数，而 Reflect.preventExtensions 会报错。


	// ES6 返回输入值 1，而 ES5 报错
	Object.preventExtensions(1)

	// TypeError: Reflect.preventExtensions called on non-object
	Reflect.preventExtensions(1)

Reflect.ownKeys 方法用于返回对象的所有属性，基本等同于 Object.getOwnPropertyNames 与 Object.getOwnPropertySymbols 之和。

	var myObject = {
	  foo: 1,
	  bar: 2,
	  [Symbol.for('baz')]: 3,
	  [Symbol.for('bing')]: 4,
	};

	console.log(Object.getOwnPropertyNames(myObject))
	// ['foo', 'bar']

	console.log(Object.getOwnPropertySymbols(myObject))
	// [Symbol(baz), Symbol(bing)]

	console.log(Reflect.ownKeys(myObject))
	// ['foo', 'bar', Symbol(baz), Symbol(bing)]



## ⚡ Iterators 迭代器
- https://es6.ruanyifeng.com/#docs/iterator
- https://es6.ruanyifeng.com/#docs/async-iterator
- https://exploringjs.com/es6/ch_iteration.html
- https://exploringjs.com/impatient-js/ch_sync-iteration.html
- https://exploringjs.com/impatient-js/ch_async-iteration.html

迭代器接口只有一个 `next()` 方法，调用它会返回：

(1). 返回迭代对象的一个元素：{ done: false, value: yourvalue }
(2). 如果已到迭代对象的末端：{ done: true,  value: undefined }

除了数组，还有多个实现了迭代接口的类型，它们是：

- Arrays 数组对象；
- Strings 字符串对象；
- Maps 映射对象；
- Sets 集合对象；
- (Browsers: DOM data structures)

通过 TypeScript 的类型声明可以很好的地说明迭代器，可迭代对象返回多个可以枚举的值，而迭代器提供 `next()` 方法实现迭代数据的访问：

	interface Iterable<T> {
	  [Symbol.iterator]() : Iterator<T>;
	}

	interface Iterator<T> {
	  next() : IteratorResult<T>;
	}

	interface IteratorResult<T> {
	  value: T;
	  done: boolean;
	}

数组对象本身就已经实现了迭代接口的类型，当然可以通过以下方式来直接使用迭代器：

	let a = [1, 2, 3, 4, 5];
	for (var r = a[Symbol.iterator](), v = r.next(); !v.done; v = r.next() ){
		console.log(v);
	}
	// {value: 1, done: false}
	// {value: 2, done: false}
	// {value: 3, done: false}
	// {value: 4, done: false}
	// {value: 5, done: false}

使用 for-of 循环枚举可迭代对象：

	for (var n of ['a','b','c']) {
	  console.log(n);
	  console.log(next());
	}
	// a、b、c

传统 for-in 循环：

	for (var index in myArray) { // 千万别这样做
	  console.log(myArray[index]);
	}

这绝对是一个糟糕的选择，为什么呢？

在这段代码中，赋给 index 的值不是实际的数字，而是字符串 “0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。

作用于数组的 for-in 循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性 myArray.name，循环将额外执行一次，遍历到名为 “name” 的索引，就连数组原型链上的属性都能被访问到。

最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。简而言之，for-in 是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。

以下通过包装迭代器来实现免打断的枚举，注意包装类转发了所以方法调用，除了 `return()` 方法：

	class PreventReturn {
	    constructor(iterator) {
	        this.iterator = iterator;
	    }
	    /** Must also be iterable, so that for-of works */
	    [Symbol.iterator]() {
	        return this;
	    }
	    next() {
	        return this.iterator.next();
	    }
	    return(value = undefined) {
	        return { done: false, value };
	    }
	    // Not relevant for iterators: `throw()`
	}

所有枚举数据来自 `elements()` 生成器，通过以下代码可以测试如何实现了免打断的枚举：

	function* elements() {
	    yield 'a';
	    yield 'b';
	    yield 'c';
	}
	function twoLoops(iterator) {
	    for (const x of iterator) {
	        console.log(x);
	        break; // abrupt exit
	    }
	    for (const x of iterator) {
	        console.log(x);
	    }
	}
	twoLoops(elements());
	// Output:
	// a

	twoLoops(new PreventReturn(elements()));
	// Output:
	// a
	// b
	// c


Iterator 协议要求 `next()` 方法只能包含同步操作，返回对象是同步执行的。如果要实现异步枚举，目前的解决方法是，将异步操作包装成 Thunk 函数或者 Promise 对象，即 `next()` 方法返回对象的 value 属性是一个 Thunk 函数或者 Promise 对象。

ES2018 引入了异步迭代器 Async Iterator，使用 Symbol.asyncIterator 定义，配套的还引入了 for await...of 循环，用于遍历异步的 AsyncIterator 接口。

	interface AsyncIterator {
	    next(value) : Promise<IteratorResult>;
	    [optional] throw(value) : Promise<IteratorResult>;
	    [optional] return(value) : Promise<IteratorResult>;
	}

异步遍历器的最大的语法特点，就是调用 `next()` 方法返回的是一个 Promise 对象，因此，可以把它放在 await 命令后面。

以下演示一个异步迭代器的使用方法：

	let fetch = require("node-fetch");

	const asyncIterable = (items) => {
	  let url = "https://api.github.com/users/github";
	  return {
	    [Symbol.asyncIterator]: () => {
	      return {
	        next: () => fetch(url).then(res=>res.json()).then(json => ({
	          done: items.length === 0,
	          value: json[items.shift()]
	        }))
	      }
	    }
	  };
	}

	async function f() {
	  for await (const x of asyncIterable(['name', 'location', 'bio'])) {
	    console.log(x);
	  }
	}
	f();


## ⚡ Promises 异步编程
- Exploring Promises by implementing them https://exploringjs.com/deep-js/ch_implementing-promises.html
- JavaScript for impatient programmers - 40 Promises 异步编程 https://exploringjs.com/impatient-js/ch_promises.html

Promises 是处理异步操作的对象，使用了 Promise 对象之后可以用一种链式调用的方式来组织代码，而不是传统的直接使用回调函数，让代码更加直观。

Axel Rauschmayer 在 Exploring JS 一书中通过实现 ToyPromise 来解析什么是 Promise。

先来看看 Promise 对象的基本使用：

- 首先，实例化 Promise 对象；
- 每个实例都可以链式操作 `then()` `catch()` 等方法；
- 构造函数接收一个回调以响应 `resoleve()` `reject()` 两个动作，告知执行状态是完成还失败，对应 fulfilled 和 rejected 两种状态；

需要耗时的操作就可以使用 Promise 进行异步编程，操作结果正确返回就执行 `resolve(data)` 否则 `reject(err)`。

尽管 Promise 方便了异步代码的组织，但它根本上还是基于回调函数实现的。可以将 `Promise()` 构造器或 `then()` `catch()` 等链式方法看作是回调函数注册方法。所以实现 Promise 不难，而最新的规范引用了 `async` 和 `await` 两个关键字，以最简化的方式来实现异步编程，而不是使用回调函数

注意，Promise 内部的异常不会被外部捕捉到，需要通过 `catch()` 进行捕捉。

>	var promise = new Promise((resolve, reject) => {
>		setTimeout(resolve, 100, 'foo');
>		// or reject("now");
>	});
>
>	promise.then((res)=>{ 
>		console.log("then", res); 
>	}).catch((res)=>{
>		console.log("catch", res); 
>	});
>	// expected output: [object Promise]
>	// "then" "foo"

例如，以下代码用 Promise 来模拟 AJAX 请求：

>	function fakeAjax(url) {
>	  return new Promise(function (resolve, reject) {
>	    // setTimeouts are for effect, typically we would handle XHR
>	    if (!url) {
>	      return setTimeout(reject, 1000);
>	    }
>	    return setTimeout(resolve, 1000);
>	  });
>	}
>
>	// no url, promise rejected
>	fakeAjax().then(function () {
>	  console.log('success');
>	},function () {
>	  console.log('fail');
>	});

如果 Promise 对象状态变为 `resolved`，则会调用 `then()` 方法指定的回调函数；如果异步操作抛出错误，状态就会变为 `rejected`，就会调用 `catch()` 方法指定的回调函数，处理这个错误。

另外，`then()` 方法指定的回调函数运行中抛出错误，也会被 `catch()` 方法捕获。

以下例子演示 `catch()` 如何起作用，`resolve()` 和 `reject()` 都有 50% 机会触发，但最终都会触发 `catch()`。或是 `reject()` 触发，或是在 `then()` 中抛出的异常触发：

>	const tp = new Promise(function(resolve, reject) {
>	    let a = Math.random()*10
>	    if (a > 5) {
>	        resolve('[success state]')
>	    } else {
>	        reject('[reject state]')
>	    }
>	})
>
>	tp.then(res => {
>	    throw new Error(`trigger then error ${res}`)
>	}).catch(err => {
>	    console.log(`catch ${err}`)
>	})
>	// expected output:
>	// catch Error: trigger then error [success state]
>	// catch [reject state]


除了前面这样处理一个异步任务，还可以将多个异步进行组合，参考 API：

- 原始函数 `Promise.resolve()` 创建一个已解决的任务, `Promise.reject()` 
- 以下组合函数输入一系列的 Promises，然后输出一个 Promise：
	- Promise.all() 表示所有输入任务解决后才执行输出的 `Promise.then()`；
	- Promise.race() 表示竞争，哪个任务先完成就先由它执行输出的 `Promise.then()`；
	- Promise.any() 表示任意一个输入任务解决后就可以执行输出的 `Promise.then()`，兼容性不及其它方法；
	- Promise.allSettled() 表示等待所有任务完成，不管成功或失败，然后才执行输出的 `Promise.then()`；

示范代码：

	const promises = [
	  Promise.reject('result a'),
	  Promise.resolve('result b'),
	  Promise.resolve('result c'),
	];
	Promise.allSettled(promises)
	  .then((arr) => console.log( arr ))
	  .catch((err) => console.log( err, 'ERROR' ));

输出：

	[
	  { status: 'rejected', reason: 'result a' },
	  { status: 'fulfilled', value: 'result b' },
	  { status: 'fulfilled', value: 'result c' }
	]


示例代理 axios 执行 AJAX 请求：

	function ajaxAgent(action, params) {
	  params = params || {};
	  let method = window.DEMO? 'GET':(params.method||'POST');
	  return new Promise((resolve, reject)=>{
	    let pp = axios({
	      url: remapApiUrl(action),
	      method: method,
	      data: params,
	    });
	    pp.then( (res)=>{
	      if( res.data.msg == "Login required!"){
	        console.log("ajax resolve", res.data.msg);
	        location = "#/user/login"
	      }
	      resolve(res);
	    }, (res)=>{
	      console.log("ajaxAgent reject", res);
	      reject(res);
	    }).catch((res)=>{
	      console.log("ajaxAgent catch", res);
	      reject(res);
	    })
	  });
	}
	export const ajax = ajaxAgent ;


## ⚡ Generators 生成器
- https://tc39.es/ecma262/#sec-generator-objects
- https://exploringjs.com/impatient-js/ch_sync-generators.html
- [ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/generator)
- Exploring ES6 22. Generators https://exploringjs.com/es6/ch_generators.html

同步生成器 Synchronous generators 是 ES2015 引入的新式函数，是一种异步编程解决方案。

可以理解 Generator 函数为一个状态机，封装了多个内部状态。

形式上，Generator 函数和普通函数的差别在于两个特征：

- 一是使用星号，`function * name()`，对于匿名函数则在括号前使用星号 `function * (){ }`，但是不支持箭头函数；
- 二是函数体内部使用 `yield` 表达式，定义不同的内部状态，yield 意思是产出一个状态值。

执行 Generator 函数会返回一个迭代器对象，通过迭代器的 `next()` 方法可以依次遍历 Generator 函数内部的每一个状态。


先来看看生成器的几种基本用法，除了基本的函数式用法，还可以作为成员方法使用：

	function* genFunc1() { /*···*/ }

	const genFunc2 = function* () { /*···*/ };

	// Generator method definition in an object literal
	const obj = {
	  * generatorMethod() { /* ··· */ }
	};

	// Generator method definition in a class definition
	class MyClass {
	  * generatorMethod() { /* ··· */ }
	}

生成器的核心在于 yield 关键字提供的惰性求值特性，Lazy Evaluation，只有调用 `next()` 方法才会返回 yield 表达式的值，并且每次调用只执行一条 yield 表达式。所以，可以将 yield 看作是一种可以暂停执行的函数。

因此，生成器函数返回的对象是一个迭代器，`next()` 方法的运行逻辑如下：

- 对当前 `yield` 表达式求值并返回，暂停执行后面的操作。允许 yield 表达式没有返回值。
- 下一次调用 `next()` 方法时，继续执行下一个 `yield` 表达式。
- 如此运行到函数结束，并返回 `return` 语句后面的表达式的值，如果没有返回语句，则返回对象的值为 undefined，但状态 done 始终为 true。

Generator 函数可以不用 yield 表达式，这时就相当只有一条隐式的 yield，函数也变成了一个暂缓执行函数。

到此，可以理解生成器相比 Promise，将回调函数隐藏得更彻底了，几乎看不到有回调的迹象，但是从迭代器的 `next()` 调用其实还是可以推测到它的底层还是基于回调的实现。

示范：

	function* Generator() {
	  yield 'hello';
	  yield 'world';
	}

	var g = Generator();
	console.log(g.next())
	console.log(g.next())
	console.log(g.next())

输出，迭代器完成后依然可以继续执行 `next()` 但是返回值是完成状态，`{ value: undefined, done: true }`：

	{ value: 'hello', done: false }
	{ value: 'world', done: false }
	{ value: undefined, done: true }

注意，使用 for-of 枚举迭代器，并不会包含 `return` 返回的值，因为它表示一个迭代过程的结束：

	for (let x of Generator()) {
	  console.log(x);
	}


关于 yield 还有几点说明：

- yield 表达式本身没有返回值，或者说总是返回 undefined，但是通过 `next()` 方法可以传入一个参数作为 yield 表达式的返回值。
- yield 可以调用其它生成器函数，`yield * anotherGenerator()`，这一条 yield 可以对应执行多次 `next()`，如果被调用的生成器有多个状态值。

示范使用返回值：

	function* Generator() {
	  let ret = yield 'hello';
	  console.log("return", ret);
	  ret = yield 'world';
	  console.log("return", ret);
	  return "Hi"
	}

	var g = Generator();
	console.log(g.next("1st"))
	console.log(g.next("2nd"))

输出，可以注意到执行 yield 后会立即暂停生成器后续的代码，并且下一次 `next()` 传入的参数作为前一个 yield 的返回值：

	{ value: 'hello', done: false }
	return 2nd
	{ value: 'world', done: false }


Generator 函数返回的遍历器对象有以下两个方法：

- `throw()` 方法，可以用来抛出错误，它个异常可以在 Generator 函数体内捕获。
- `return()` 方法，可以返回给定的值，并且终结遍历 Generator 函数，相当于直接执行生成器函数的 `return` 语句返回。

示范：

	var g = function* () {
	  try {
	    yield;
	  } catch (e) {
	    console.log('内部捕获', e);
	  }
	};

	var i = g();
	i.next();

	try {
	  i.throw('a');
	  i.throw('b');
	} catch (e) {
	  console.log('外部捕获', e);
	}

输出如下：

	内部捕获 a
	外部捕获 b

注意，如果没有执行 `next()`，这时因为生成器还没有开始执行，并没有进行内部的 try-catch 语句块，因此内部不会执行异常捕捉。

在第一个错误被 Generator 函数体内的 try-catch 语句块捕获处理后，其代码运行已经超出 try-catch 语句块，所以在第二次抛出错误时，内部就不再可以捕捉到这个错误了，而是被函数体外的 catch 语句捕获。

一旦 Generator 执行过程中抛出错误，且没有被内部捕获，JavaScript 引擎认为这个 Generator 已经运行结束。再执行后续的 `next()` 方法，将返回一个 `{ value: undefined, done: true }` 对象。

将 `next()`、`throw()`、`return()` 三个方法放在一起比较，它们根本上是在做同一件事，就是让 Generator 函数恢复执行，并且切换到不同的语句替换原有顺序的 yield 表达式。或者从更底层来看，它们都是在执行回调任务。

从 OOP 层面上来看，Generator 函数总是返回一个遍历器实例，ES6 规定这个遍历器是 Generator 函数的实例，因此也继承了 Generator.prototype 对象上的方法。但是不能将 `new` 与生成器一起使用，因为生成器函数并不是构造函数，它由解析器负责实例化。

另外，生成器函数的构造器也与一般函数不同，通过 constructor.name 可以获得 "GeneratorFunction"，而不是一般函数的 "Function" 构造器。

当然，生成器可以作为类型的成员方法使用，也可以作为 Singleton 对象的方法，生成器函数的 `this` 指针会相应地绑定到实例：

	class G {
	  title = "Color:";
	  * gen(){
	    yield this.title + "Bisque";
	    yield this.title + "Azure";
	    yield this.title + "Blue Violet";
	  }
	}
	let g = new G;
	let it = g.gen();
	console.log(it.next());

前面讲了这么多，但还没解析生成器如何作为异步编程解决方案的用法。

Generator 函数的暂停执行的特性，意味着可以把异步操作的等待写在 `yield` 表达式里面，等异步任务主动调用 `next()` 方法时再往后执行。

这就是相当生成器已经具备回调函数功能，而不用开发者去管理烦杂的回调函数，而更多的异步操作可以添加到后续的 yield 表达式中。所以，利用 Generator 函数的一个重要实际意义就是用来替代传统的回调函数结构来处理异步编程。

	function loadUIDataAsynchronously() {
	  let now = Date.now();
	  while(Date.now()-now<5000){
	    // do something that waste time
	  }
	  return "done";
	}

	function* loadUI() {
	  console.log("showFleshScreen()");
	  yield loadUIDataAsynchronously();
	  console.log("hideFleshScreen()");
	}
	var loader = loadUI();

	console.log("loading...");
	loader.next()
	console.log("unload....");
	loader.next()

无论如何，Generator 提供的是一种新式的异步编程方法，它对基于传统回调函数或 Promise 方式的异步编程都有改进，但相比 async/await 关键字的实现方式，显得不十分便利。


## ⚡ Generator 函数执行器
- https://github.com/ruanyf/articles/blob/master/2015/2015-05-12-es6-asynchronous-programming.md
- https://tw93.github.io/2016-09-20/generators-and-channels-in-javascript.html
- https://github.com/tj/co
- https://github.com/tj/node-thunkify
- https://www.npmjs.com/package/js-csp
- ES6 generators in depth https://2ality.com/2015/03/es6-generators.html

先总结性地概括一下与生成器相关的异步编程：

- Generator 函数提供了一种函数写法，像同步编程一样，但是执行起来却很麻烦。
- Thunk 函数提供了一种思路，可以提供一种更便利的函数执行器，以实现 Generator 函数自动执行。
- Co 函数库就是将 Thunk 函数自动执行器和 Promise 对象自动执行器的封装，进一步简化了 Generator 函数的执行。
- Async 函数就是 Generator 函数的语法糖，在 async 函数体内用 await 替代 yield，将 Generator 函数和自动执行器包装在一个函数里。

这部分内容需要使用 Node.js 的各个模块进行编程，可以预先安装它们：

	npm install node-fetch thunkify co
	# or
	yarn add node-fetch thunkify co

先来看一段生成器实现的 fetch 请求的执行流程：

	var fetch = require('node-fetch');

	function* gen(){
	  var url = 'https://api.github.com/users/github';
	  var result = yield fetch(url);
	  console.log("fetch", result.bio);
	}

	let g = gen();
	g.next().value.then(res => {
	  return res.json();
	}).then(json =>{
	  g.next(json);
	});

先执行生成器，再处理生成器 yield 返回的 Promise then 逻辑，并在数据返回后执行生成器的下一个状态，这个过程相当曲折。

Thunk 函数早在上个世纪 60 年代就诞生了。当时编程语言刚刚起步，计算机学家还在研究编译器怎么写比较好。

一个争论的焦点是求值策略，即函数的参数到底应该何时求值，是调用前求值，还是调用后在函数内部求值：

- 传值调用（call by value），即在进入函数体之前求值再将这个值传入函数，C 语言就采用这种策略。
- 传名调用（call by name），即直接将参数中的表达式传入函数体，只在用到它的时候求值，Hskell 语言采用这种策略。

两种方式各有利弊，传值调用比较简单，而传名调用，即只在执行时求值，节省资源。

编译器使用传名调用，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体，这个临时函数就叫做 Thunk 函数。

	function f(m){
	  return m * 2;
	}

	f(x + 5);

	// ===

	var thunk = function () {
	  return x + 5;
	};

	function f(thunk){
	  return thunk() * 2;
	}

上面代码中，函数 f 的参数 x + 5 被一个函数替换了。凡是用到原参数的地方，对 Thunk 函数求值即可。

这就是 Thunk 函数的定义，它是传名调用的一种实现策略，用来替换某个表达式。

JavaScript 语言使用传值调用，所以它的 Thunk 函数用来将多参数函数换成单参数的版本，且只接受回调函数作为参数。

任何函数，只要参数有回调函数，就能写成 Thunk 函数的形式。

	// 多参数版本
	fs.readFile(fileName, callback);

	// Thunk 单参数版本
	Thunk(fileName)(callback);

	var Thunk = function (fileName){
	  return function (callback){
	    return fs.readFile(fileName, callback); 
	  };
	};

生产环境下，建议使用 Thunkify 模块提供的转换器。

	$ npm install thunkify

使用示范：

	var thunkify = require('thunkify');
	var fs = require('fs');

	var read = thunkify(fs.readFile);
	read('package.json', "utf-8")(function(err, str){
	  // ...
	});

参考 `thunkify()` 函数的实现：

	/**
	 * Wrap a regular callback `fn` as a thunk.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */

	function thunkify(fn){
	  assert('function' == typeof fn, 'function required');

	  return function(){
	    var args = new Array(arguments.length);
	    var ctx = this;

	    for(var i = 0; i < args.length; ++i) {
	      args[i] = arguments[i];
	    }

	    return function(done){
	      var called;

	      args.push(function(){
	        if (called) return;
	        called = true;
	        done.apply(null, arguments);
	      });

	      try {
	        fn.apply(ctx, args);
	      } catch (err) {
	        done(err);
	      }
	    }
	  }
	};

其中检查机制通过变量 called 确保传入 `thunkify()` 的回调函数只运行一次，这样的设计与下文的 Generator 函数相关。

前面解析了这么多关于 Thunk 函数的内容，但是真正和主题相关的是用这样一种函数封装思想，实现函数执行器，用来执行 Generator 函数的自动流程管理。

因为 yield 命令用于将程序的执行权移出 Generator 函数，而 `next()` 方法则是将执行权再交还给 Generator 函数。只要实现一个 Thunk 函数来管理它们，就可以实现 Generator 的执行管理。

下面，将按以上思路为执行 fetch 操作的生成器实现一个执行器 `run()`，然后将生成器函数传入就可以实现自动执行：

	var fetch = require('node-fetch');
	var thunkify = require('thunkify');

	var fetchThunk = thunkify((url, callback)=>{
	  fetch(url).then(res => res.json()).then(callback);
	});

	function* gen(){
	  var url = 'https://api.github.com/users/github';
	  var result = yield fetchThunk(url);
	  console.log("fetch", result.bio);
	}

	function run(gen) {
	  var g = gen();

	  void function doit(data) {
	    var result = g.next(data);
	    if (result.done) return;
	    result.value(doit);
	  }();
	}

	run(gen);

以上代码逻辑有点复杂，自动执行器内部的 `doit()` 函数就是 Thunk 的回调函数，它负责执行生成器的 `next()` 方法。注意，yield 语句返回的是 thunkify 封装的函数，所以需要通过 `result.value(doit)` 来传入回调函数，并执行被封装的 `fetch()` 函数。并且 `next()` 函数会在 `fetch()` 得到响应后被再次执行，`then(callback)`，直到生成器执行完毕。

有了这个执行器，执行 Generator 函数方便多了，不管有多少个异步操作，直接传入 run 函数即可。只需在每一个异步操作，返回 Thunk 函数，即通过 yield 返回 Thunk 函数。

Thunk 函数是 Generator 函数自动执行的一种方案，只要能提供这种机制就可以实现自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。

接下来解析一下 co 函数库，它是著名程序员 TJ Holowaychuk 于 2013 年 6 月发布的 Generator 函数的执行器。

前面的例子就可以改成以下的方式实现：

	var fetch = require('node-fetch');
	var co = require('co');

	function* gen(){
	  var url = 'https://api.github.com/users/github';
	  var result = yield fetch(url);
	  result.json().then(json => console.log("fetch", json.bio));

	  url = "http://127.0.0.1:8080/tsconfig.json"
	  result = yield fetch(url);
	  result.json().then(json => console.log("fetch", json));
	}

	co(gen);

co 函数返回一个 Promise 对象，因此可以用 then 方法添加回调函数。

	co(gen).then(function (){
	  console.log('Generator 函数执行完成');
	})

使用 co 的前提条件是，Generator 函数的 yield 命令后面，只能是 Thunk 函数或 Promise 对象，还有 generator, array, object 都支持。

另外 co 也支持并发的异步操作，即允许某些操作同时进行，等到它们全部完成才进行下一步：

	co(function* () {
	  var res = yield [
	    Promise.resolve(1),
	    Promise.resolve(2)
	  ];
	  var res = yield {
	    1: Promise.resolve(1),
	    2: Promise.resolve(2),
	  };
	  console.log(res); 
	}).catch(onerror);


以上解析了这么一堆内容，其实最新的 ES6 已经将这一切简化为 async/await 两个关键字。


再深入一层，生成器可以实现 CSP 编程模式，Golang 就是使用这种来实现协程的。

在声明和包的设计方面，Go 语言受到 Pascal、Modula 和 Oberon 系语言的影响；在并发原理的设计上，Go 语言从同样受到 Tony Hoare 的通信序列进程 CSP - Communicating Squential Processes 理论影响的 Limbo 和 Newsqueak 的实践中借鉴了一些经验，并使用了和 Erlang 类似的机制。

Go 语言实现了通信顺序进程模型来作为 `goroutine` 间的推荐通信方式。在 CSP 模型中，一个并发系统由若干并行运行的顺序进程组成，每个进程不能对其他进程的变量赋值，进程之间只能通过一对通信原语实现协作。Go 语言用 `channel` 这个概念来轻巧地实现了 CSP 模型。`channel` 的使用方式比较接近 Unix 系统中的管道 pipe 概念，可以方便地进行跨 `goroutine` 的通信。

在 CSP 模型中，Channel 是比较重要的对象，它并不关注发送消息的实体，而只关心与发送消息时实体使用那个通道，通信的双方使用 Channel 实现消息传递。

CSP 编程模式和 Akka/Erlang 的 Actor 模型很相似。Actor 模型是 1973 年提出的一个分布式并发编程模式，在 Erlang 语言中得到广泛支持和应用。

在 Actor 模型中，主角是 Actor，类似工作线程 Worker，但是 Actor 彼此之间直接发送消息，不需要经过什么中介，消息异步发送和处理的。

Actor 模型描述了一组为了避免并发编程的常见问题的公理：

- Actor 的状态是本地的，外部无法访问。
- Actor 只通过消息传递进行通信。
- Actor 可以响应消息，推出新 Actor，改变其内部状态，或将消息发送到一个或多个其他参与者。
- Actor 可能会堵塞自己，但不应该堵塞它运行的线程。

Actor 之间直接通讯，而 CSP 是通过 Channel 通讯，在耦合度后者更加松耦合。

在 JavaScript 也可以实现类似的编程体验，js-csp 模块提供了这样的功能，它提供了两个抽象：

- Processes 进程通过 `go()` 管理生成器函数来实现多任务协调。
- Channels 进程通信队列，通过 `chan()` 函数创建。

简单解析一下 API 的功能：

- `let ch = csp.chan(1);` 创建 Channel；
- `yield csp.put(ch, 42);` 往 Channel 放数据，即通信开始；
- `yield csp.take(ch);` 取出数据 42；
- `csp.go(generator);` 执行协程，即生成器函数；
- `ch.close();` 关闭 Channel；
- `yield csp.take(ch);` 获取数据，返回 csp.CLOSED 通道关闭状态；

参考示范：

```js
const csp = require('js-csp');

function* player(name, table) {
  while (true) {
    let ball = yield csp.take(table);
 
    if (ball === csp.CLOSED) {
      console.log(name + ": table's gone");
      return;
    }
 
    ball.hits += 1;
    console.log(`${name} ${ball.hits}`);
 
    yield csp.timeout(100);
    yield csp.put(table, ball);
  }
}

csp.go(function* () {
  const table = csp.chan();
 
  csp.go(player, ["💚", table]);
  csp.go(player, ["🧡", table]);
 
  yield csp.put(table, {hits: 0});
  yield csp.timeout(1000);
 
  table.close();
});
```

随着硬件技术发展，摩尔定律在 CPU 制造上已然失效，芯片已经在原子级别上遇到不可突破的瓶颈。

大于在 2003 年左右，计算机的核心特性经历了一个重要的变化，处理器的速度达到了一个顶点。接下来，时钟速度是呈线性增长的，而不会像以前那样以指数级的速度增长，并且 CPU 的核心线程数在增长，就像一个人不长高，但可以长胖。

而多线程编程也随之变得越来越有意义，这也就是学习这些高并发编程模型的实际意义。


## ⚡ async/await 彻底的异步编程
- [async 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/async.html)
- ECMAScript 6 入门 https://es6.ruanyifeng.com/#docs/async
- JavaScript for impatient programmers (ES2021 edition) 41 Async functions https://exploringjs.com/impatient-js/ch_async-functions.html
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction#Browser_compatibility

前面解析了 Promise 的实现是基于回调函数，而最新的规范引用了 `async` 和 `await` 两个关键字，以最简化的方式来实现异步编程，而不是使用回调函数。

目前为止 async/await 关键字除了 IE 之外，常用浏览器和 Node (v7.6+) 都已经支持该特性。

理解 Promise 是使用 async/await 的基础，所以你一定要先了解 Promise 怎么利用回调来处理异步编程。虽然 Promise 是帮助解决回调地狱的一个好东西，能够让异步流程变得更清晰，但它仍然没有脱离回调函数的使用。

而引入 async/await 关键字就是从根本上解决回调函数式的异步编程，使用它们就完全不用管回调层面的东西，让开发者以更简洁的方式进行异步编程，更能集中精力处理程序功能，而不是实现逻辑。

一句话，async 函数就是 Generator 函数的语法糖。async 返回一个 Promise 对象，await 可以用于等待一个 async 函数的返回值，这个表达式的计算结果是 Promise 对象或者其它值，没有特殊限定，但是关键字 await 只能用在 async 函数内部。

async 会将其后的函数，函数表达式或 Lambda 的返回值封装成一个 Promise 对象，而 await 会等待这个 Promise 完成，并返回 resolve 的结果。

	async function testAsync() {
	  // await is only valid in async function
	  await console.log( ["hello await"] );   // step 1 async wait return: Promise { <pending> }
	  console.log(["testAsync"]);             // step 4
	  return ["hello async"];                 // step 5
	}

	const a = testAsync();                    // step 0
	console.log(['return',a]);                // step 2
	console.log(["final"]);                   // step 3

这里需要注意，尽管 testAsync 的最后行是返回语句，但它并没有起效，它只返回了 await 这行产生的一个 Promise 对象!然后就回到主程序继续运行了，函数体内部那些需要"耗时"的操作会在 Promise 机制下后续运行完成。

处理由多个 Promise then 的时候，async/await 能极大简化代码。Promise 通过 then 链来解决多层回调的问题，async/await 用来进一步优化代码结构。

await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。

	function takeTime(n) {
	  return new Promise((resolve,reject) => {
	      setTimeout(() => resolve(n), n);
	  });
	}

	function step1(n) {
	  console.log(`step1: with ${n}`);
	  return takeTime(n);
	}

	function step2(n) {
	  console.log(`step2: with ${n}`);
	  return takeTime(n);
	}

	async function test() {
	  console.time("Total test time");
	  var delay = 400;
	  delay = await step1(delay);
	  delay += await step2(delay);
	  console.log(`result is ${delay}`);
	  console.timeEnd("Total test time");
	}
	test().catch(err => console.log("Error: ", err.message));
	console.log("END");

	// step1: with 400
	// END
	// step2: with 400
	// result is 800
	// Total test time: 817.785ms

引入异步函数关键字带来的改进体现在以下三点：

- 内置执行器。 async 函数的执行，与普通函数一模一样，只要一行。
- 更好的语义。 async 函数和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。
- 更广适用性。 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值，不仅限于数值、字符串和布尔值，但这时等同于同步操作。

如果 await 后面的异步操作出错，那么等同于 async 函数返回的 Promise 对象被 reject，可以使用 `catch()` 链式表达式进行处理。

同样，并发的异步任务可以使用数组或对象对象组合，由同一条 await 执行。


# 🚩 ECMAScript 2021 规范
- ECMAScript® 2015 Language Specification https://262.ecma-international.org/6.0/
- ECMAScript® 2021 Language Specification https://tc39.es/ecma262/

ECMAScript 是 ECMA International 颁布的一部语言标准，按项目编号又称为 ECMA-262，由 TC39（Technical Committee 39）技术委员会编写。

ECMA International 则是一个制定信息和通讯技术方面的国际标准的组织，前身是欧洲计算机制造商协会(European Computer Manufacturers Association)，随着计算机的国际化，机构名称改为其英文单词首字母缩写。

如果想要新增或是改写规范，一般要经历 5 个阶段，如 TC39 Process 中所示：

- Strawperson
- Proposal
- Draft
- Candidate
- Finished

经历过这 5 个阶段，进入 Finished 状态的修改才会被列入正式版的规范。



## ⚡ 6 ECMAScript Data Types and Values
- https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values

最新的 ECMAScript 2021 语言规范中定义的类型为 8 种：Undefined, Null, Boolean, String, Symbol, Number, BigInt, Object。

以上 8 种是 Language Type 语言类型，即是指编写脚本中使用的类型。而在规范文档中用来描述语言结构语义和语言数据类型的是对应 meta-values 的规范类型，Specification Types，包括以下几种抽象类型：

- List 表示求值表达式的参数列表，如函数调用、实例化中的参数列表，例如 `« 1, 2 »`；
- Record 描述本规范算法中的数据聚合，字段值可以是与记录类型关联的名称表示的抽象值。字段名总是用双括号括起来，例如 `{ [[Value]]: 42 }`。
- Set 解释内存模型中使用的无序元素的集合，可以相互进行并集、交集或减集。
- Relation 关系类型用于解释集合上的约束，其值来自值域 Value Domain 的有序值对的集合。
- Reference Record 用于解析 delete, typeof 或赋值等等行为。
- Completion Record 用于解析值和控制流在运行时的传播，例如执行非本地控制传输的语句 break、continue、return、throw 的行为。
- Property Descriptor 描述对象属性的操纵与具体化。
- Environment Record 描述嵌入函数或代码块中的名字解析。
- Abstract Closure 抽象闭包规范类型用于引用带值集合的算法步骤。
- Data Block 描述字节大小数值的独立且可变的序列，数据块值是用固定数量的字节创建的，每个字节的初始值为 0。

规范类型值是为规范定制使用的，不一定对应于 ECMAScript 实现中的任何特定实体。规范类型值可用于描述 ECMAScript 表达式求值的中间结果，但此类值不能存储为对象的属性或 ECMAScript 语言变量的值。


6.2.2 The Set and Relation Specification Types

对于 a 的关系类型 R，以及其值域 a 和 b 两个值，`a R b` 是简化形式，表示有序的 `(a, b)` 是 R 的成员。当一个 Relation 是满足某条件的最小关系，它就是满足这些关系的最小关系。

For a Relation R and two values a and b in the value domain of R, a R b is shorthand for saying the ordered pair (a, b) is a member of R. A Relation is least with respect to some conditions when it is the smallest Relation that satisfies those conditions.

A `strict partial order` is a Relation value R that satisfies the following.

For all a, b, and c in R's domain:

- It is not the case that a R a, and
- If a R b and b R c, then a R c.

NOTE 1
The two properties above are called irreflexivity and transitivity, respectively.

A `strict total order` is a Relation value R that satisfies the following.

For all a, b, and c in R's domain:

- a is identical to b or a R b or b R a, and
- It is not the case that a R a, and
- If a R b and b R c, then a R c.

NOTE 2
The three properties above are called totality, irreflexivity, and transitivity, respectively.


6.2.3 The Completion Record Specification Type

The Completion type is a Record used to explain the runtime propagation of values and control flow such as the behaviour of statements (break, continue, return and throw) that perform nonlocal transfers of control.

Values of the Completion type are Record values whose fields are defined by Table 9. Such values are referred to as Completion Records.

Table 9: Completion Record Fields

	| Field Name |                 Value                  |                     Meaning                      |
	|------------|----------------------------------------|--------------------------------------------------|
	| [[Type]]   | normal, break, continue, return, throw | The type of completion that occurred.            |
	| [[Value]]  | any ECMAScript language value or empty | The value that was produced.                     |
	| [[Target]] | any ECMAScript string or empty         | The target label for directed control transfers. |

The term `abrupt completion` refers to any completion with a `[[Type]]` value other than `normal`.

`ReturnIfAbrupt(argument)` 含义：

	if(argument is a Abrupt Completion) return argument;
	if(argument is a Completion Record) let argument be argument.[[value]].


## ⚡ 7.1 Type Conversion

7.1.1 ToPrimitive( input [ , preferredType ] )

ToPrimitive 发生在隐式类型转换过程中，将一个输入转换为原始值类型。

	1. Assert: input is an ECMAScript language value.
	2. If Type(input) is Object, then
		a. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
		b. If exoticToPrim is not undefined, then
			i. If preferredType is not present, let hint be "default".
			ii. Else if preferredType is string, let hint be "string".
			iii. Else,
				1. Assert: preferredType is number.
				2. Let hint be "number".
			iv. Let result be ? Call(exoticToPrim, input, « hint »).
			v. If Type(result) is not Object, return result.
			vi. Throw a TypeError exception.
		c. If preferredType is not present, let preferredType be number.
		d. Return ? OrdinaryToPrimitive(input, preferredType).
	3. Return input.

7.1.1.1 OrdinaryToPrimitive ( O, hint )

	1. Assert: Type(O) is Object.
	2. Assert: hint is either string or number.
	3. If hint is string, then
	a. Let methodNames be « "toString", "valueOf" ».
	4. Else,
		a. Let methodNames be « "valueOf", "toString" ».
	5. For each element name of methodNames, do
		a. Let method be ? Get(O, name).
		b. If IsCallable(method) is true, then
			i. Let result be ? Call(method, O).
			ii. If Type(result) is not Object, return result.
	6. Throw a TypeError exception.


## ⚡ 7.2 Testing and Comparison Operations
- ECMAScript® 2015 Language Specification https://262.ecma-international.org/6.0/#sec-samevaluezero
- https://tc39.es/ecma262/#sec-abstract-operations

比较运算是复杂的，在 ECMAScript 内部的逻辑实现中，有几个值得研究的比较方法。

7.2.9 SameValue(x, y)

- ReturnIfAbrupt(x).
- ReturnIfAbrupt(y).
- If Type(x) is different from Type(y), return false.
- If Type(x) is Undefined, return true.
- If Type(x) is Null, return true.
- If Type(x) is Number, then
	- If x is NaN and y is NaN, return true.
	- If x is +0 and y is −0, return false.
	- If x is −0 and y is +0, return false.
	- If x is the same Number value as y, return true.
	- Return false.
- If Type(x) is String, then
	- If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices) return true; otherwise, return false.
- If Type(x) is Boolean, then
	- If x and y are both true or both false, return true; otherwise, return false.
- If Type(x) is Symbol, then
	- If x and y are both the same Symbol value, return true; otherwise, return false.
- Return true if x and y are the same Object value. Otherwise, return false.

NOTE This algorithm differs from the Strict Equality Comparison Algorithm (7.2.13) in its treatment of signed zeroes and NaNs.

7.2.10 SameValueZero(x, y)

- ReturnIfAbrupt(x).
- ReturnIfAbrupt(y).
- If Type(x) is different from Type(y), return false.
- If Type(x) is Undefined, return true.
- If Type(x) is Null, return true.
- If Type(x) is Number, then
	- If x is NaN and y is NaN, return true.
	- If x is +0 and y is −0, return true.
	- If x is −0 and y is +0, return true.
	- If x is the same Number value as y, return true.
	- Return false.
- If Type(x) is String, then
	- If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices) return true; otherwise, return false.
- If Type(x) is Boolean, then
	- If x and y are both true or both false, return true; otherwise, return false.
- If Type(x) is Symbol, then
	- If x and y are both the same Symbol value, return true; otherwise, return false.
- Return true if x and y are the same Object value. Otherwise, return false.

NOTE SameValueZero differs from SameValue only in its treatment of +0 and −0.

7.2.11 Abstract Relational Comparison
The comparison x < y, where x and y are values, produces true, false, or undefined (which indicates that at least one operand is NaN). 

- ReturnIfAbrupt(x).
- ReturnIfAbrupt(y).
- If the LeftFirst flag is true, then
	- Let px be ToPrimitive(x, hint Number).
	- ReturnIfAbrupt(px).
	- Let py be ToPrimitive(y, hint Number).
	- ReturnIfAbrupt(py).
- Else the order of evaluation needs to be reversed to preserve left to right evaluation
	- Let py be ToPrimitive(y, hint Number).
	- ReturnIfAbrupt(py).
	- Let px be ToPrimitive(x, hint Number).
	- ReturnIfAbrupt(px).
- If both px and py are Strings, then
	- If py is a prefix of px, return false. (A String value p is a prefix of String value q if q can be the result of concatenating p and some other String r. Note that any String is a prefix of itself, because r may be the empty String.)
	- If px is a prefix of py, return true.
	- Let k be the smallest nonnegative integer such that the code unit at index k within px is different from the code unit at index k within py. (There must be such a k, for neither String is a prefix of the other.)
	- Let m be the integer that is the code unit value at index k within px.
	- Let n be the integer that is the code unit value at index k within py.
	- If m < n, return true. Otherwise, return false.
- Else,
	- Let nx be ToNumber(px). Because px and py are primitive values evaluation order is not important.
	- ReturnIfAbrupt(nx).
	- Let ny be ToNumber(py).
	- ReturnIfAbrupt(ny).
	- If nx is NaN, return undefined.
	- If ny is NaN, return undefined.
	- If nx and ny are the same Number value, return false.
	- If nx is +0 and ny is −0, return false.
	- If nx is −0 and ny is +0, return false.
	- If nx is +∞, return false.
	- If ny is +∞, return true.
	- If ny is −∞, return false.
	- If nx is −∞, return true.
	- If the mathematical value of nx is less than the mathematical value of ny —note that these mathematical values are both finite and not both zero—return true. Otherwise, return false.

NOTE 1 Step 5 differs from step 11 in the algorithm for the addition operator + (12.7.3) in using “and” instead of “or”.

NOTE 2 The comparison of Strings uses a simple lexicographic ordering on sequences of code unit values. There is no attempt to use the more complex, semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. Therefore String values that are canonically equal according to the Unicode standard could test as unequal. In effect this algorithm assumes that both Strings are already in normalized form. Also, note that for strings containing supplementary characters, lexicographic ordering on sequences of UTF-16 code unit values differs from that on sequences of code point values.

7.2.12 Abstract Equality Comparison
The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

- ReturnIfAbrupt(x).
- ReturnIfAbrupt(y).
- If Type(x) is the same as Type(y), then
	- Return the result of performing Strict Equality Comparison x === y.
- If x is null and y is undefined, return true.
- If x is undefined and y is null, return true.
- If Type(x) is Number and Type(y) is String, 
	-return the result of the comparison x == ToNumber(y).
- If Type(x) is String and Type(y) is Number, 
	-return the result of the comparison ToNumber(x) == y.
- If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
- If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
- If Type(x) is either String, Number, or Symbol and Type(y) is Object, then
	- return the result of the comparison x == ToPrimitive(y).
- If Type(x) is Object and Type(y) is either String, Number, or Symbol, then
	- return the result of the comparison ToPrimitive(x) == y.
- Return false.

7.2.13 Strict Equality Comparison
The comparison x === y, where x and y are values, produces true or false. Such a comparison is performed as follows:

- If Type(x) is different from Type(y), return false.
- If Type(x) is Undefined, return true.
- If Type(x) is Null, return true.
- If Type(x) is Number, then
	- If x is NaN, return false.
	- If y is NaN, return false.
	- If x is the same Number value as y, return true.
	- If x is +0 and y is −0, return true.
	- If x is −0 and y is +0, return true.
	- Return false.
- If Type(x) is String, then
	- If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true.
	- Else, return false.
- If Type(x) is Boolean, then
	- If x and y are both true or both false, return true.
	- Else, return false.
- If x and y are the same Symbol value, return true.
- If x and y are the same Object value, return true.
- Return false.

NOTEThis algorithm differs from the SameValue Algorithm (7.2.9) in its treatment of signed zeroes and NaNs.


# 🚩 ES6 JavaScript 差异
[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

ECMAScript 2009 是一个传统的 JavaScript 版本，即 ES5，是浏览器原生支持最广泛的版本，但它的发展跟不上需求。

ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。

因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指下一代 JavaScript 语言。

	ECMAScript第六个版本，在保证向下兼容的前提下，提供大量新特性

	1、块级作用域 关键字let，常量const 
	2、对象字面量的属性赋值简写 
	3、赋值解构 
	4、函数参数-默认值、参数打包、数组展开（Default、Rest、Spread） 
	5、箭头函数 Arrow functions 简化了代码形式，默认return表达式结果，自动绑定语义this，即定义函数时的this。
	6、字符串模板Template strings 
	7、Iterators（迭代器）+for..of 迭代器的next方法，调用会返回：
	（1）返回迭代对象的一个元素：{done:false, value:elem} 
	（2）如果已经达到迭代对象的末端：{done:true, value:retVal} 
	（2）对象扩展运算符(...rest)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
		let bar = { a: 1, b: 2 };
		let baz = { ...bar }; // { a: 1, b: 2 }
	8、生成器（Generators） 
	9、Class，有constructor、extends、super 
	10、Modules 
	（1）具有CommonJS的精简语法、唯一导出出口（single exports）和循环依赖（cyclic dependencies）的特点 
	（2）类似AMD，支持异步加载和可配置的模块加载 
	11、四种集合类型，Map+Set+WeakMap+WeakSet 
	12、一些新的API Math+Number+String+Array+Object APIs
	13、Proxies 使用代理（Proxy）监听对象的操作，包括get、set、has、deleteProperty、apply、construct、getOwnPropertyDescriptor、defineProperty、getPrototypeOf、setPrototypeOf、enumerate、ownKeys、preventExtensions、isExtensible。
	14、Symbols 一种基本类型，通过调用symbol函数产生，接收一个可选的名字参数，该函数返回的symbol是唯一的。
	15、Promises 是处理异步操作的对象，使用了Promise对象之后可以用一种链式调用的方式来组织代码，让代码更直观
	

## ⚡ 引入块级作用域 
	
let 块级赋值解决了之前for循环定义的变量造成全局污染的问题，而且不必再使用闭包来保存必要的变量，因为各个代码块的变量相互独立，不会造成全局变量的污染。

	//es5：
	for(var i=0;i<5;i++){ }
	console.log(i); //5

	//es6:
	for(let i=0;i<5;i++){ }
	console.log(i); //i is not defined(…)

	使用const声明的变量与let声明的变量类似，也只能在块级作用域中有用，不同的是const声明的变量是只读的，也就是声明过后就不能被修改了。
	const PI = 3.1415;
	PI = 3; // Assignment to constant variable.

## ⚡ 对象字面量的属性赋值简写 property value shorthand

	var obj = {
		__proto__: theProtoObj,			// __proto__
	    handler,						// Shorthand for ‘handler: handler’
	    toString() {					// Method definitions
	    	return super.toString();	// Super calls
	    },
	    [ 'prop_' + (() => 42)() ]: 42	// Computed (dynamic) property names
	};

## ⚡ 结构赋值

	let singer = { first: "Bob", middle:"L", last: "Dylan" };
	
	// 别名赋值，相当于 f = "Bob", l = "Dylan"
	let { first: f, last: l, middle } = singer; 

	// 数组赋值
	let [all, year, month, day] =  /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec("2015-10-25");
	let [x, y] = [1, 2, 3]; // x = 1, y = 2

不能确定对象是否有属性集定义，可以使用快捷赋值一个空对象 {} 避免控指针问题：

	let { first } = singer.empty || {};

在参数中使用：

	function hi({first}){
	    console.log(`hello ${first}`);
	};
	hi(singer)


## ⚡ 函数参数 - 默认值、参数打包、 数组展开（Default 、Rest 、Spread）

	//Default
	function findArtist(name='lu', age='26') {
	    ...
	}

	//Rest
	function f(x, ...y) {
	  // y is an Array
	  return x * y.length;
	}
	f(3, "hello", true) == 6

	//Spread
	function f(x, y, z) {
	  return x + y + z;
	}
	// Pass each elem of array as argument
	f(...[1,2,3]) == 6

	(function(){
		console.log(arguments);
	})(...[1,2,3])


## ⚡ 箭头函数 Arrow functions

	(args) => { your_codes; return; }
	   arg => { your_codes; return; }
	   arg => returvalue; // auto return
	
	(1).　简化了代码形式，默认return表达式结果。
	(2).　匿名函数体作用域就是定义代码所在的作用域，所在匿名函数内直接this。 箭头函数体内的this指向的是定义时所在的对象，而不是执行时所在的对象，这是语法糖，ES6会自行添加这样的作用域引用，而不必写额外的类似这样的定义

	var _this2 = this;

	箭头函数绑定this的指向，很大程度解决了过去this动态指向的困扰，可以大大减少显示绑定this对象的写法(call,apply,bind)。

	//es5
	var inc = function(x){ return x+1; }
	function add(x,y){ return x+y };

	//es6
	var inc = x=>x+1;
	var add = (x,y)=>x+y;

	['a','b','c'].map(x=>x);//["a", "b", "c"]

	var fun2=(...args)=>{
	    for(let arg of args){
	        console.log(arg)
	    }
	};
	fun2(1,2,3);


## ⚡ 字符串模板 Template strings

	var name = "Bob", time = "today";
	`Hello ${name}, how are you ${time}?`
	// return "Hello Bob, how are you today?"



# 🚩 split 字符分隔的几种方法

>	let s = "0123456789";
>	console.log( s.split(/\d/) );
>	console.log( s.split("") );
>	console.log( s.split(/(?=\d)/) );
>	console.log( String.prototype.split.call(s,"") );

# 🚩 回调与异常传递


>	A = {method:(cb)=>{ 
>	    try{
>	      cb("this is A"); 
>	    }catch(e){
>	      console.log("catch error in A", e, this);
>	      throw e;
>	    }
>	  }
>	}
>
>	B = {method:(res)=>{
>	    console.log("this is B", res, this);
>	  	throw new Error("try cause error in B");
>	  }
>	}
>	try{
>		A.method(B.method);
>	}catch(e){
>	  console.log("catch error", e);
>	}
>
>	//> "this is B" "this is A" [object Window]
>	//> "catch error in A" Error: try cause error in B [object Window]
>	//> "catch error" Error: try cause error in B


# 🚩 RegExp zero width
- https://segmentfault.com/q/1010000010302799

数字千分位表达？这种替换就是使用正则的捕获与非捕获的 zero with 特性，?! 和 ?=, ?<! 和 ?<=。

正则表达式的前行断言 lookahead 和后行断言 lookbehind 一共有 4 种形式：

	(?=pattern)  零宽正向前行断言 zero-width positive lookahead assertion
	(?!pattern)  零宽负向前行断言 zero-width negative lookahead assertion
	(?<=pattern) 零宽正向后行断言 zero-width positive lookbehind assertion
	(?<!pattern) 零宽负向后行断言 zero-width negative lookbehind assertion

这里面的 pattern 是一个正则表达式，涉及三个基本概念：

`零宽` zero with 表示这此匹配模式都不消耗字符串，也就是说，符合零宽部分的匹配规则的内容不会出现在 $1 $2 ... 等等反向引用变量中，并且还可以继续被其它匹配模式使用。

`负向`和`正向` negative & positive 这里的“向”不是指方向，而是取向。区别就在于该位置之后的字符能否匹配括号中的表达式，禁止匹配称之为负，允许匹配称之为正。

`后行`和`前行` lookbehind & lookahead 的区别就在于，满足自身匹配规则后，该 zero width 位置的左侧、右侧的字符序列能否匹配。

整个零宽匹配规则始终代表字符串中的一个位置，或是匹配的 positive，或是禁匹配的 negative，但是不获取匹配的内容，也不消耗字串，其中的圆括号不是匹配分组，不会获取内容供 $1 $2 ... 等反向引用变量使用。

通常正则表达式引擎在匹配字符串和表达式时，是从前向后逐个扫描字符串中的字符，并判断是否与表达式符合。当在表达式中遇到`后行断言`，正则表达式引擎需要往字符串前端检测已扫描过的字符，相对于扫描方向是向后的。

如同 ^ 代表开头，$ 代表结尾，\b 代表单词边界一样，前行断言和后行断言也有类似的作用，它们只匹配某些位置，在匹配过程中，不占用字符，所以被称为零宽。所谓位置，是指字符串中(每行)第一个字符的左边、最后一个字符的右边以及相邻字符的中间（假设文字方向是头左尾右）。

使用以下“示范字符串”来演示四种 zero width 匹配规则的使用：

	regex represents regular expression 

⛏	(?=pattern) 

要想匹配示范字符串 regular 中的 re，但不能匹配 expression 中的 re，可以用 `re(?=gular)`。该表达式限定了 re 右边的位置，这个位置之后是 gular，但并不消耗 gular 这些字符，替换时反向引用 $0 包含 re，而其它如 $1 $2 ... 等等不包含分组匹配内容，尽管 zero with 使用了圆括号，这也就是零宽 zero width 的含义。

将表达式改为 `re(?=gular).` ，将会匹配 reg，元字符 `.` 匹配了g，括号这一砣匹配了 e 和 g 之间的位置。

⛏	(?!pattern)

要想匹配示范字符串中除 regex 和 regular 之外的 re，可以用 re(?!g) ，该表达式限定了 re 右边的位置，这个位置后面不能是字符 g。


⛏	(?<=pattern) 

示范字符串有 4 个单词，要想匹配单词内部的 re，但不匹配单词开头的 re，可以用 (?<=\w)re ，单词内部的 re，在 re 前面应该是一个文字字符。

正向后行与正向前行的表现不同在于，前者要满足自身的 pattern 规则匹配同时，其右侧的字符序列也同时匹配。而后者则是满足自身 pattern 规则匹配同时，左侧的字符序列也要匹配，这样整个 zero width 匹配正则才成立。所以，使用 (?=\w)re 这种不正确的形式做匹配，会匹配到单词开头 re 字符，因为 lookahead 规则只要求其左侧字序匹配，而不像 lookbehind 要求其右侧字串匹配。

如果用 RA 表示前行断言 lookahead，用 RB 表示后行断言 lookbehind，用 pattern 表示其它字符模式序列，用竖线表示判断点，那么它们的使用习惯如下：

	     RA | pattern
	pattern | RB


⛏	(?<!pattern) 

要想匹配示范字符串中单词开头的 re，可以用 (?<!\w)re 。单词开头的re，在本例中，也就是指不在单词内部的re，即re前面不是单词字符。当然也可以用 \bre 来匹配。


看一个千分位标记实列， 使用了 ?= 和 ?!

	"1234567890".replace(/\B(?=(\d{3})+(?!\d))/g, ",")

	num.toString().replace(/(\d)(?=(?:\d{3})+$)/g,'$1,')

	var m = "abcabc".match(/(?:a)(b)(c)/)
	//结果 m = ["abc", "b", "c"] ?: 是不捕获，匹配结果中没有 a
	// m[0] 是/(?:a)(b)(c)/匹配到的整个字符串，这里包括了a
	// m[1] 是捕获组1，即(b)匹配的子字符串substring or sub sequence
	// m[2] 是捕获组2，即(c)匹配到的

	var m = "abcabc".match(/(a)(b)(c)/)
	//结果 ["abc", "a", "b", "c"]

java正则与字符串定长拆分 正向分组 逆向分组

	String.join("|","abcdefghijklm".split("(?=(.{3})+(?!.))"));
	String.join("|","abcdefghijklm".split("(?<=\\G.{4})(?!$)"));


# 🚩 SameSite Cookie
- http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html

Chrome 51 开始，浏览器的 Cookie 新增加了一个 SameSite 属性，用来防止 CSRF 攻击和用户追踪。

Cookie 的 SameSite 属性用来限制第三方 Cookie，从而减少安全风险。

Strict 这个规则过于严格，可能造成非常不好的用户体验。比如，当前网页有一个 GitHub 链接，用户点击跳转就不会带有 GitHub 的 Cookie，跳转过去总是未登陆状态。

它可以设置三个值。

- Strict
- Lax
- None

SameSite="Lax" 和 SameSite="Strict" 有什么区别？

	Set-Cookie: promo_shown=1; SameSite=Lax
	Set-Cookie: promo_shown=1; SameSite=Strict

Lax 允许在某些跨站点请求中发送 cookie，而 Strict 从不允许在其中发送 cookie。

可以跨站点发送 Lax cookie 的情况必须满足以下两个条件：

- 请求必须是顶级导航。您可以认为这等同于网址栏中显示的网址发生更改，例如用户单击链接进入另一个站点。
- 请求方法必须安全（例如 GET 或 HEAD，但不包括 POST）。

例如：

假设用户在 a.com 单击链接进入 b.com。这是一个跨站点的请求，这是顶级导航，是 GET 请求，因此 Lax cookie 被发送到 b.com。但是，严格的 cookie 不会发送，因为它毕竟是跨站点请求。

用户位于 a.com 存在一个 iframe 加载了 b .com。这是跨网站的请求，但不是顶级导航。用户仍在 a.com 上，即，在加载 iframe 时，网址栏不会更改。因此，Lax 和 Strict cookie 都不会发送到 b.com。

用户位于 a.com 上，该站点将表单过帐到 b.com。这是跨站点请求，但是方法 POST 不安全。它不符合 Lax Cookie 跨站点访问的条件，因此 Lax 和 Strict Cookie 均不会发送到 b.com
