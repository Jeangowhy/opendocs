
# 🚩 Algorithms & Data Structures 算法与数据结构
- [双因素认证（2FA）教程 - TOTP](https://ruanyifeng.com/blog/2017/11/2fa-tutorial.html)
- Online Judge 在线判题系统 https://vjudge.net
- https://www.lintcode.com
- http://leetcode.com/
- https://www.codewars.com
- http://open.163.com/newview/movie/courseintro?newurl=/special/opencourse/algorithms.html
- https://www.algoexpert.io/questions
- PAT - Programming Ability Test 计算机程序设计能力考试 https://www.patest.cn/practice
- Algorithm Visualizer https://algorithm-visualizer.org/
- Data Structure Visualizations https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- Data Structure Tutorial https://www.tutorialspoint.com/index.htm
- Top 20 Dynamic Programming Interview Questions https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/
- COS 226: Introduction to Data Structures https://www.cs.princeton.edu/courses/archive/fall18/cos226/syllabus.php
- Robert Sedgewick - Algorithms, 4th Edition, Princeton University https://algs4.cs.princeton.edu/34hash/
- Introduction to Algorithms, 3rd, the MIT Press - 8.4 Bucket sort

网络有大量算法训练平台，如 AlgoExpert 是一个 LeetCode 精选的服务，因为 LeetCode 现在的题目实在是太多了，但解答、提示等内容的质量又参差不齐。AlgoExpert 解决了这些问题：首先，它提供不到 100 道算法题，覆盖不同难度和不同知识点；其次，每道题都有一系列循序渐进的提示，使得你可以从毫无头绪开始一步一步做到最优解；最后，每道题最后都有视频讲解，从最笨的解法开始一步一步讲解如何优化，最后达成最优解。 

Data structures & algorithms 是计算机语言的基石，是软件灵魂的支撑。研究计算机编程本质上就是在弄清楚底层的数据结构与算法，了解信息的数字化与其保存在内存的结构排列，与各种算法和数据结构的性能。

面向对象编程与传统的函数式编程最大差别就是，从数据 --> 函数 --> 结果的这条流程转变为，对象包含函数方法，不同的对象实现不同的功能，对象本身包含数据，也可以处理数据的输入输出。

与函数式编程简洁的表达不同，面向对象编程引入的一套抽象理论和对象封装方法 Abstraction & Encapsulation，会大大增加软件的复杂度。所以无论是 OOP - Object-Oriented Programming 还 FP - Functional Programming 没有绝对的好坏，只有合适的才是最好的。

面向对象的语言设计，基于抽象的数据类型定义 ADT - Abstract Data Type，将最基本的数据类型，始数值、字符串等等重新做了整体组织，抽象成面向对象的编程体系。包括不仅限于 stacks, queues, deques, ordered lists, sorted lists, hash and scatter tables, trees, priority queues, sets, and graphs.

在设计算法时，需要考虑知种因素，如内存需求量、时间效率等复杂度，Time Factor、Space Factor 这两个的指标是最关键，有各种渐进评价方法 Asymptotic Notations，如 Big O, Little o, Theta, Omega, Little w。

根据算法的具体特点差异，可能对不同的数据会有不同的表现，所以 Worst Case、 Average Case、 Best Case 三种情况也是比较重要的评判依据。

渐近分析法大 O 表示法较常见，根据输入的不同，复杂度可以如下表示：

- O(1)      常数复杂度 constant，最好，表示与输入没有关系，算法保持固定的时间或空间效率。
- O(logn)   对数复杂度 logarithmic，相当好。
- O(n)      线性复杂度 linear，和输入成正相关，还不错，输入数据越多需要时间也越多。
- O(nlogn)  线性对数阶 n log n，QuickSort 排序属于这个级别，输入变量引起的复杂度是线性复杂度的倍率增长。
- O(n^2)    平方阶 quadratic，有点问题了。
- O(n^3)    立方阶 cubic，算法特没效率。
- O(2^n)    指数阶 polynomial，幂复杂度，非常复杂，输入数据稍有增加，需要消耗的时间会剧增。  
- O(n!)     阶乘级 exponential，Traveling Salesman Problem 旅行商问题在计算机科学领域是无解的，n 个城市就有 n! 种规划方案。


作为数据结构入门，一般都会从搜索算法、排序算法、递归等基础问题入手，配合相应的数据结构，如数组、链表、Stack、Queue、二叉树，由简单到复杂：

- Searching Techniques
    - Linear Search
    - Binary Search
    - Interpolation Search
    - Hash Table
- Sorting Techniques
    - Comparison Sorting
        - Bubble Sort
        - Selection Sort
        - Insertion Sort
        - Shell Sort
        - Merge Sort
        - Comb Sort
        - Quck Sort
    - Bucket Sort
    - Counting Sort
    - Radix Sort
    - Heap Sort
- Recursion
    - Recursion Basics
    - Tower of Hanoi
    - Fibonacci Series

数据结构和算法是密不可分，前者重于数据的组织，而后者着重于具体问题的方法逻辑实现。根据问题的不同，算法的一般策略有以下这些：

- Greedy Algorithms 贪婪算法
    - Travelling Salesman Problem
    - Prim's Minimal Spanning Tree Algorithm
    - Kruskal's Minimal Spanning Tree Algorithm
    - Dijkstra's Minimal Spanning Tree Algorithm
    - Graph - Map Coloring
    - Graph - Vertex Cover
    - Knapsack Problem
    - Job Scheduling Problem
- Divide and Conquer 分而治之
    - Merge Sort
    - Quick Sort
    - Binary Search
    - Strassen's Matrix Multiplication
    - Closest pair (points)
- Dynamic Programming 动态规划
    - Fibonacci number series
    - Knapsack problem
    - Tower of Hanoi
    - All pair shortest path by Floyd-Warshall
    - Shortest path by Dijkstra
    - Project scheduling

动态规划（Dynamic Programming，DP）是运筹学的一个分支，是求解决策过程最优化的过程。20 世纪 50 年代初，美国数学家贝尔曼（R.Bellman）等人在研究多阶段决策过程的优化问题时，提出了著名的最优化原理，从而创立了动态规划。动态规划的应用极其广泛，包括工程技术、经济、工业生产、军事以及自动化控制等领域，并在背包问题、生产经营问题、资金管理问题、资源分配问题、最短路径问题和复杂系统可靠性问题等中取得了显著的效果。

动态规划和分治法非常类似，但是子问题间的解决方案联系更密切：

- 这个问题应该可以划分成更小的重叠子问题。
- 用较小的子问题的最优解可以得到最优解。
- 动态算法使用记忆，已有的解可以辅助解决未解决的子问题。


# 🚩 Chrome Disk-Cache

Windows 平台下 Chrome Cache 存储位置在

    %localappdata%\Google\Chrome\User Data\Default\Cache

有一个 index 文件，显然它是索引文件。

来推测下 HTTP Cache 应该存点什么东西，response header 和 body 缺一不可。另外每个 response 总会有自己的一些属性需要存着，比如：上次什么时候用了这个 cache 资源，最近这个资源用了几次，request header 如果有 Vary 字段，判断资源是否有效，就要记着 request header 的内容，但不用记原始内容，记个对应的 MD5 值就行，加上程序内部要用到的属性，杂七杂八有一堆，都需要存着，这些叫做 metadata。

所以，HTTP Cache 里每个资源存的东西有三种，response header， body， metadata

返回的 Response 内容，有长有短，且 url 数量众多，如果直接存成一个文件（IE就是这么做的），那结果就是cache目录下文件数量特别多，并且有好多非常非常小的文件。每次读这样的 Cache，显然速度快不了。

所以，改进方案很简单，大文件还是保持原样，小文件合并，合并后的文件就是 data_0 data_1 data_2 data_3 这几个文件。这些文件不光要读，还要写啊，只是简单地把每个 response 的内容拼接起来，那读写效率显然还是不行。因为内容不定长啊，写入之后，再想更新，会影响其它 response 内容在文件里的位置，这不利于建立索引快速找到对应的文件。

所以还得优化，于是产生了 block 这个概念，为什么 block 会有 256byte，1k，4k 这么三种呢？

大概是因为 Windows NTFS 文件系统的 4k 对齐，Windows 系统读文件也是有缓存的，缓存的最小单位是 4k，哪怕只读 1-byte，也会把前后 4k 内容一并读取，这个 IO 操作的开销避不开。

再加上 256-byte，1k，4k 的 4 倍进阶方式，再 4 倍就是 16k 的资源就足够大了，直接存成单独文件。这样的办法巧妙，并且粒度能细到 256-byte，也不至于太浪费硬盘空间，否则 block 最小单位就是 1k 的话，每个几 byte 的资源也会占用 1k 的空间，会导致 cache 目录下文件大小总和迅速膨胀。

Chrome 现在的 HTTP Cache 策略是 2.0 版（代码里 kCurrentVersion 是版本号），这一版已经使用多年没更新，Google 已经在谋划 3.0 版，因为现在这版还存在很多问题，包括：系统崩溃时，可能导致整个 Cache 系统的文件都无效；磁盘利用率不高，相同大小的磁盘空间，可以存更多资源，具体请看原 disk-cache 代码：

- http://dev.chromium.org/developers/design-documents/network-stack/disk-cache
- https://src.chromium.org/viewvc/chrome/trunk/src/net/disk_cache/disk_cache.h


# 🚩 Square Root 平方根算法实现
- https://leetcode.com/problems/sqrtx/
- Fast InvSqrt https://www.packetmania.net/2021/07/23/PGITVW-2-sqrt/

这道题的难度级别是“容易”，但是现实中发现不少求职者都在此栽倒。

知名的高效解法就是牛顿迭代法，是基于数值分析中在实数域上近似求解方程的牛顿-拉弗森方法（Newton-Raphson method）。得到的牛顿迭代式呈平方收敛，每轮迭代之后，精确数位的个数翻倍。令人惊喜的是，数学家证明了牛顿迭代法对求整数平方根一样有效。实现牛顿迭代法求整数平方根时的难点，在于要确保首次估值满足以上的初始条件。

求平方根的解法其实很多，有一种逐个数位的计算方法特别适合于手算（或心算），而且还适用于任意进位制。这种方法包括内在的搜索和测试循环，从高到低逐级判定单个数位。其基本的计算公式是二项平方展开式。应用到二进制数位系统，搜索和测试的过程变得更高效，因为单个比特位都是2的幂，所有乘积都可以用快速比特移位操作实现。James Ulery 写过一篇短文，详细地推演了计算整数平方根的二进制算法。

比求整数平方根更普遍的是求任意实数的平方根。这时输入值可能有小数位，输出值也会是带小数点的实数。准备这样的面试题，需要先复习浮点数的概念和应用。

巴比伦解法是计算浮点数平方根的朴素方法。这是发源于古典世界的、有悠久历史的算法。据信将近四千年前的巴比伦人就知晓了这种求平方根的方法，但是直到公元一世纪才由古希腊数学家希罗给出明确的描述。

巴比伦解法的朴素思想是：如果估计算非负实数 x 的平方根，那么一定是小于 x/a 和 a 二者的均值将更接近，a 为非负实数。因为算术平均数总是大于或等于几何平均值，所以这一算法一定收敛。使用算术平均值近似几何平均值这种想法，和牛顿迭代法有相通之处，巴比伦解法与牛顿迭代法本质上是等同。

提供以下 JavaScript 实现参考，精度可以调整：

```js
function sq(x, precision=0.00000000000001)
{
    var val = x;
    var last = 1;
    var tick = 0;
    while ((val - last) > precision) {
        val = (val + last) / 2;
        last = x / val;
        tick ++;
    }
    console.log("Tick:", tick);
    return val;
}
```

sq(2) = 1.414213562373095
Math.sqrt(2) = 1.4142135623730951

在3D游戏程序开发中，依据计算机图形学的原理，需要使用规一化向量来实现光照和投影效果。由此可能每秒要做上百万次平方根倒数运算，所以找到一种快速平方根倒数的计算方法至关重要。此外，平方根倒数也广泛应用在量化神经网络、深度学习、气象数据处理及基准测试（benchmarking）软件中。

要将一个矢量标准化，就必须计算其欧几里德范数，以求得矢量长度，为此便需对矢量的各分量的平方和求平方根；而当求取到其长度，并以之除该矢量的每个分量后，所得的新矢量就是与原矢量同向的单位矢量。

可见标准化矢量时，对矢量分量计算平方根倒数实为必需，所以，对平方根倒数计算算法的优化对计算正规化矢量也大有裨益。

很明显，直接使用1去除以浮点数平方根函数的输出是低效的。在上个世纪80年代后期，工作于一些3D图形显示软硬件公司的程序员发明了 Fast Inverse Square Root，简称 Fast InvSqrt()。对于同一精度的近似值，此算法比直接使用浮点数除法要快四倍！

下面就是对应于32位单精度浮点数的“平方根倒数速算法”C语言实现：

```C
/* fast inverse square root function for 32-bit IEEE 754
 * standard floating-point numerical value */
float fast_inv_sqrt(float x)
{
    float halfx = 0.5f * x;
    int i = *(int *)&x; /* transfer bits of float to int */
    i = 0x5f375a86 - (i >> 1); /* initial guess with magic */
    x = *(float *)&i; /* bit transfer back to float */ 
    x = x * (1.5f - halfx * x * x); /* Newton step */
    x = x * (1.5f - halfx * x * x); /* Repeat (optional) */
    return x;
}
```

虽然平方根倒数速算法不太可能在面试中被问到，但是理解这个精巧的算法会极大地巩固和加深程序员的知识面。


# 🚩 LinkList
- https://www.geeksforgeeks.org/quicksort-for-linked-list/
- https://www.geeksforgeeks.org/doubly-linked-list
- https://www.geeksforgeeks.org/merge-sort-for-linked-list/
- https://leetcode-cn.com/articles/linked-list-cycle/

数组可能是最简单的抽象类型了，在连续的内存区域开辟一块专用区域就是数组：

```c
int[] a = new int[5];
int[][] x = new int[3][5];
```

然后通过下标访问每个数组元素，通过抽象概念将保存数据的每个内存地址表达为一个元素。可以实现随机访问，想读写哪里就读写哪里。多维数据和一维数组没有本质区别，就是增加一个维度计算的变量，同时二维数组还可以抽象为矩阵 Matrices。

比数组复杂一点的就是链表了：

- 单向链表 Singly-Linked Lists，每个元素连接下一个元素。只需要知道链表的起点，就可以依次访问到尾端元素。
- 双向链表 Doubly-Linked Lists，在单向链表节点的基础上，增加一个指针引用前一个节点。
- 单向循环链表 Circular Linked List: 由各个节点通过 Next 指针链接在一起，形成一个闭环。
- 双向循环链表 Double Circular Linked List: 由各个节点通过 Next 和 Prev 指针链接在一起，形成一个闭环。

每个元素只需要 head prev next data tail 等基本属性，data 存放数据，另外 prev 和 next 两个作为指针引用链表的前后端元素。

链表结构可以克服数组固定大小的缺点，可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。

链表的操作一般有增删，复杂点的有合并两个链表。对于增删，只需要找到合适的节点，将原来的前后指针变更到新节点上，或将节点前后两个节点链接起来实现删除。

反转单链表也算是一种操作，比如给定索引区间，把单链表中这部分元素反转，其他部分不变，也就是剪接两端节点+各节点反向。

有些算法题不可能会要求进行回文串和回文序列相关的问题。

而有序链表的合并则需要更多的操作，假设是升序：

- 比较链表开头的数据大小，找到数值小的链表作为 head，另外一个链表作为 tail；
- 定位 head 中下一个大于于 tail 开头的节点，记录为 gap，并截断与 head 的链接；
- 然后将 tail 拼接到 head 的末端，注意要在上一步完成 gap 节点的截断，否则就形成环链。
- 将 gap 作为 tail，并重复执行前面的步骤。

这个过程就好像编绳子一样，将小的链表摆在前面，在其尾部拼接上次小的另一个链表。

```c
#include <iostream>
using namespace std;

struct listNode {
    int value;
    listNode * next;

    // 链表节点默认构造函数，显式使用 nullptr 初始化空指针
    listNode(): next(nullptr) { }
    listNode(int theValue): value(theValue), next(nullptr) {
        // listNode(); 
    }

    listNode * attachNode(int value) {
        listNode *n = new listNode(value);
        n->next = this;
        return n;
    }
};

int main() {

    listNode * node = new listNode(0);

    node = node->attachNode(1)->attachNode(2)->attachNode(3)->attachNode(4);

    int indexNode = 0;
    while (node != nullptr) {
        cout << "链表节点 " << indexNode << ": " << node->value << " @" << node << endl;
        node = node->next;
        indexNode++;
    }

    return 0;
}
```

实现各种不同的算法或数据结构的基本目标是实现快速查找、快速更新，另外还可能要求有序性。

链表目的是实现有序、方便增删，但不是实现快速插入、查找的数据结构。

以下是 TypeScript 实现的有序链表，实现了增删、合并功能：

```js
function verify(a: number[], len:number){
    if(a.length !== len) {
        return console.log("VERIFY FAILURE IN LENGTH!")
    }
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1] || isNaN(a[i])) {
            // let tag = console.log(a.slice(0, i).join(",").replace(/./g, " "));
            return console.log( "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

class Node {
    prev:null|Node
    next:null|Node
    value:number
    constructor(prev:null|Node, next:null|Node, value:number){
        this.prev = prev;
        this.next = next;
        this.value = value;
    }
}

class OrderList {
    head: Node
    count:number = 0;
    constructor(){
        this.head = new Node(null, null, 0);
    }
    add(value:number){
        let node = this.head;
        let sentinal = false;
        while(node.next){
            node = node.next;
            if(node.value>value){
                sentinal = true;
                break;
            }
        }
        if(sentinal && node.prev){
            let n = new Node(node.prev, node, value);
            node.prev.next = n;
            node.prev = n;
        }else{
            let n = new Node(node, null, value);
            node.next = n;
        }
        this.count ++;
    }
    remove(value:number){
        let node = this.head;
        while(node.next){
            node = node.next;
            if(node.value==value){
                node.prev!.next = node.next;
                if (node.next) node.next.prev = node.prev;
                this.count --;
                return value;
            }
        }
        return false;
    }
    merge(ol:OrderList){
        let head = this.head;
        let temp = this.head.next;
        let gap = null;
        let tail = ol.head.next;
        ol.head.next = null;
        this.head.next = null;
        while (temp!==null && tail!==null) {
            if(tail.value<temp.value){
                head.next = tail;
                tail.prev = head;
                tail = temp;
                gap = tail;
            }else{
                head.next = temp;
                temp.prev = head;
                gap = tail;
            }
            while(head.next && head.value<=gap.value){
                head = head.next;
            }
            if(head.value>gap.value){
                temp = head;
                head = head.prev!;
            }else{
                temp = head.next;
            }
            head.next = null;
        }
        let ep = head;
        while(ep.next) ep = ep.next;
        if(tail){
            ep.next = tail;
            tail.prev = ep;
        } else if (temp) {
            ep.next = temp;
            temp.prev = ep;
        }
        this.count += ol.count;
        ol.count = 0;
        return this;
    }
    join(){
        let node = this.head;
        let m = new Array(this.count);
        let i = 0;
        while(node.next){
            node = node.next;
            m[i++] = node.value;
        }
        return m;
    }
}

let ol = new OrderList();
let ok = new OrderList();
let len = 500;
for(let i in new Array(len).fill(0)){
    ol.add(Math.ceil(Math.random()*len*10));
    ok.add(Math.ceil(Math.random()*len*10));
}
ol.add(19);
console.log("ol.join()", ol.join());
console.log("ok.join()", ok.join());
console.log("ol.remove(19)", ol.remove(19));
console.log("ol.remove(10)", ol.remove(5));
console.log("merge(ol):", ok.merge(ol).constructor.name);
console.log("ol.join()", ol.join(), ol.count);
console.log("ok.join()", ok.join(), ok.count);
verify(ok.join(), ol.count+ok.count);
```

另外一个合并方法的实现：

```js
_gapped(a:Node, b:Node){
    if(a.prev) a.prev.next = null;
    if(b.prev) b.prev.next = null;
    let bs = a, tail = null;
    while(bs && b.value>=bs.value){
        if(bs.next == null){
            tail = bs;
            break;
        }else{
            bs = bs.next;
        }
    }
    if(tail) return tail;
    return bs.prev;
}
_merge(a:null|Node, b:null|Node){
    if(!a){
        return b;
    }
    if(!b){
        return a;
    }
    let gap, head, tail;
    if(a.value > b.value){
        gap = this._gapped(b, a);
        head = b;
        tail = a;
    }else{
        gap = this._gapped(a, b);
        head = a;
        tail = b;
    }
    if(gap && gap.next){
        let m = this._merge(gap.next, tail.next);
        let ep = tail;
        while(ep.next) ep = ep.next;
        ep.next = m;
        if (m) m.prev = ep;
    }
    if(gap){
        tail.prev = gap;
        gap.next = tail;
    }else{
        let ep = tail;
        while(ep.next) ep = ep.next;
        ep.next = tail;
        tail.prev = ep;
    }
    return head;
}
merge_v1(ol:OrderList){
    let m = this._merge(this.head.next, ol.head.next);
    this.count += ol.count;
    ol.count = 0;
    this.head.next = m;
    return this;
}
```

# 🚩 SkipList
- https://github.com/redis/redis/blob/unstable/src/t_zset.c

跳表于 1989 年由美国计算机科学家 William Pugh 发明，他在论文《Skip lists: a probabilistic alternative to balanced trees》中详细介绍了跳表的数据结构和插入删除等操作。这是一种工业常用链式数据结构，并且在面试过程还可能让你手写跳表实现，当然手写 SKipList 是可能的，但红黑树是不可能的。

采用 SkipList 的知名开源软件：

- Redis 的有序集合 zset
- LevelDB、RocksDB、HBase 的 Memtable
- ApacheLucene 的 TermDictionary、Posting List

简单的链表和数组各有优劣，链表可以高效的插入、删除，但查询很慢，每次查询都是 `O(n)` 时间复杂度，而刚好相反，插入删除很慢，但是查询很快。

SkipList 实现有序元素序列快速搜索查找，是个随机化的数据结构，让链表拥有近乎的接近二分查找的效率，插入、删除操作略比链表复杂但效率仍然更高，平均查找和插入时间复杂度都是 `O(logn)`。

跳表在有序链表的基础上增加了多级索引，通过索引来实现快速查找。跳表不仅能提高搜索性能，同时也可以提高插入和删除操作的性能。它在性能上和红黑树，AVL 树不相上下，但是跳表的原理非常简单，实现也比红黑树简单很多。

对于理想的跳表，每向上一层索引节点数量都是下一层的 1/2，那么 n 个节点增加的节点数量 ∑n(n/2) = (1/2+1/4+…+n/2) < n。这是理论理想结构，大概率不存在的，因为链表节点的删除、插入可能会改变整个结构，在插入的时候是否添加上层索引是个概率问题。

以下用一个 [1,9] 的区间数据来解析 SkipList 结构，因为数据量少，只需要 2 级索引即可以实现二分法查找的效率：

    Level 2 -> 🔴1 ------------------------> 🔴5
                |                             |
    Level 1 -> 🔴1 --------> 🔴3 ---------> 🔴5 --------> 🔴7 
                |              |              |              |
               🔴1 -> 🔴2 -> 🔴3 -> 🔴4 -> 🔴5 -> 🔴6 -> 🔴7 -> 🔴8 -> 🔴9

可以看到，SkipList 可以看作多个相互联系的链表，并且节点除了指定下一个元素的指针，还有一个指针指向下一层级对应位置的节点，将链表最开始的节点称为 head。

不局限于使用单向链表，也可以使用双向链表来实现 SkipList，跳表的结构就是二叉树加数组。

在插入新数据后，如何调整索引呢？就需要让新插入的结点随机“晋升”为索引节点，晋升成功的机率是 50%。

假设插入 10 这个数据，并且成功晋升为索引节点，这时就需要在 Level 1 索引中插入新晋升的节点，得到 🔴7 ---> 🔴10，并且向下指向原始链表的节点 🔴10。

上级索引节点仍按机率进行调整，晋级操作也就是链表的节点插入操作，假设随机的结果是晋升失败，那么插入操作就告一段落了。

删除节点，则是相反的操作，定位数据节点，并从链表中删除，相应调整索引节点。



# 🚩 Stack & Queue
- https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm
- https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm

堆栈和队列是两种比较通用的数据结构：

- `Stack` 是先进后出 First-in Last-out 数据结构，通常实现 push 和 pop 方法实现数的添加与取出；
- `Queue` 是先进先出 First-in First-out 数据结构，通常实现 enqueue 和 dequeue 方法来添加与取出数据；

当然，还可以实现一些辅助方法：

- peek() − get the top data element of the stack, without removing it.
- isFull() − check if stack is full.
- isEmpty() − check if stack is empty.

这两个数据结构都可以基于链表来实现，而堆栈这个数据结构还可以基于数组来实现。初始化堆栈时，先分配一个固定长度的数组，在运行的过程中，如果数组填满，再通过合适的策略对数组进行扩容，比如容量加倍的扩容方案。

一个典型的数据插入操作 push 可以按以下步骤进行：

− 检查数组是否还有空间；
− 如果，已经填满，则可以进行扩容再执行后续操作；
− 增加栈顶指针 SP 指向下一个地址；
− 填充数据到数组当前 SP 指向的位置中。

一个典型的数据取出操作 pop 可以按以下步骤进行：

− 检查数组是否还有数据；
− 如果没有，直接返回 false；
− 如果还有数据，减小栈顶指针 SP 指向上一个地址；
− 返回当前 SP 指向的位置的数据。

队列 Queue 很像排除，后来的人站在队伍后面，而前面的人获得优先处理权，处理完一个后，紧接着第二个成为队列的头部，这个过程也很像管道运输的过程。

实现最简单的队列结构：

- 一个 head 字段指定链表当前的头部节点；
- 一个 tail 字段指向链表的结尾节点；
- 一个 enqueue 方法向 tail 拼接一个新的节点；
- 一个 dequeue 方法取出 head 指向的节点，并将 head 指向下一个节点；


# 🚩 Insertion sort
- https://visualgo.net/en/sorting
- https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm

Insertion sort 是和 Bubbble sort 差不多难度的算法，和打扑克牌时对手上的卡片进行排序的过程类似：

- 先以第 1 张作为参考，比较 1、2 张牌，然后将小的放前面，即交换位置。
- 再比较第 2、3 张，将小的交换到前面，如果比前面一张要大就表示已经是从小到大排序好了。
- 重复这个操作直到所有牌都排序完毕。

这样的算法对少量的数据是很有效率的，时间复杂度为 O(n^2)，随着数据数量的增加，时间要求按 2 次方增加，如果能对前面已排序的数据进行二分法查找将大量节省时间，对有序数据进行 Binary search 折半查找，在大量数据处理中效率是明显的，它能将 isort 算法内层的 for 循环，即查找部分的时间复杂度降为 Ο(log n)，而不是 Linear search 的 O(n^2)，对于大量数据的排序，isort 的主要消耗就在内层循环。

```c
int isort(unsigned char a[], int n){
   unsigned char k;
   for (size_t i = 1; i < n; i++)
   {
       k = a[i];
       for (size_t j = i; j > 0; j--)
       {
           if (k < a[j-1]) {
               a[j] = a[j-1];
               a[j-1] = k;
           }
       }
   }
   return n;
}

unsigned char s[0xff] = "You would supposed to type some words:";
printf("%s\n", s);
scanf("%[^\n]", s);
isort(s, strlen(s));
printf("isort:%s", s);
```

scanf 可以用来获取一行内容输入，但是不能处理非 ASCII 字符，如 "French suits of trèfles" 将获取不到后面的 4 个字符。


# 🚩 Selection sort
- https://www.runoob.com/w3cnote/selection-sort.html
- https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm
- https://www.cs.princeton.edu/courses/archive/fall18/cos226/precepts/Week3-Exercises.pdf
- COS 226 Precepts (Fall 2018) https://www.cs.princeton.edu/courses/archive/fall18/cos226/precepts.php

选择和插入排序很像，只是方向反过来操作。

− 将第 1 个数据作为 MIN 参考值。
− 搜索后面比它小的数，如果有更小的，就更新 MIN，直到找到所有数据中最小的数，并将最小的数交换到前面。
− 将 MIN 参考值设置为第 2 个数据，按以上同样操作，直到所有数据排序完成。

```ts
console.log(selectionSort(genArray(20)).join(","));
function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function selectionSort(a: number[]){
    let length = a.length;
    for (var i = 0; i < length; ++i) {
        let k = 0, min = a[i];
        for (var j = i+1; j < length; ++j) {
            if(min>a[j]) {
                k = j;
                min = a[j];
            }
        }
        if(k){
            let t = a[i];
            a[i] = a[k];
            a[k] = t;
        }
    }
    return a;
}
```

在普林斯顿大学 CS 课程 COS 226 有一道练习，给定一个待排序字符串，比较选择排序和插入排序的比较操作次数：

    EXERCISE 1: Analysis of Sorting Algorithms
    Suppose that you have an array of length 2n consisting of n B's followed by n A's. Below is the array
    when n = 8.

    B B B B B B B B A A A A A A A A
    
    (a) How many compares, as a function of n , does it take to sort the array in ascending order using
    Selection Sort ? Use tilde notation.
    
    (b) How many compares, as a function of n , does it take to sort the array in ascending order using
    Insertion Sort ? Use tilde notation.

这样的重复的字符串结构，肯定对选择排序更有利，比较次数只需要 15 次，而插入排序则惨多了，死搬砖。


# 🚩 Counting sort
- https://www.cs.usfca.edu/~galles/visualization/CountingSort.html

计数排序的核心在于将输入的数据值转化为 key 并将相同值出现的次数记录在另外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数，所以，如果数据数值的跨度大将会导致消耗大量的内存。

输入的元素是 n 个 0 到 k 之间的整数时，它的运行时间是 Θ(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。

计数排序不适合按字母顺序排序人名，但是，可以用在基数排序中，来排序数据范围很大的数组。

算法步骤如下：

- 统计数据元素出现的次数，记录到数组 C，数据的值作为数组元素索引。
- 按统计数量，将值按顺序回填到原数组，得到的就是排好序的数据。

以下代码为 TypeScript，使用脚本的好处就是方便，可以直接使用键值对存储数据，如果使用 C 语言需要使用动态内存分配，需要找最大值，或者预设最大值。

```ts
console.log(countingSort(genArray(20)).join(","));
function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function countingSort(a: number[]){
    let c:{[key:number]:number} = {};
    let key = 0;
    for (var i = 0; i < a.length; ++i) {
        key = a[i];
        c[key] = c[key]? c[key] + 1:1;
    }
    key = 0;
    for(var k in c){
        for (var j = 0; j < c[k]; ++j) {
            a[key++] = +k;
        }
    }
    return a;
}
```


# 🚩 Merge sort
- https://visualgo.net/en/sorting
- https://www.geeksforgeeks.org/merge-sort/
- https://www.runoob.com/w3cnote/merge-sort.html

类似 QuickSort，归并排序 Merge Sort 也是采用分治策略算法 Divide and Conquer algorithm，通常递归地将数据分拆为二，直到两元组，再比较大小排序，在递归回溯的过程中又将已经排序好的子集再进行整合排序，归并到更大的子集中，直到所有数据排序完毕。

时间复杂度 Time Complexity：

    T(n) = 2T(n/2) + θ(n)

上述递归方程分析算法采用递推树法或主项定理方法求解，the Recurrence Tree method or the Master method。归并排序的时间复杂度在最差、平均和最佳状态都为稳定的 θ(nLogn)，归并排序总是将数组分为两半，并且需要线性时间来合并两半。

- Auxiliary Space: O(n)
- Algorithmic Paradigm: Divide and Conquer
- Sorting In Place: No in a typical implementation
- Stable: Yes

在《数据结构与算法 JavaScript 描述》作者给出了自下而上的迭代方法，但是对于递归法，作者却认为：

    However, it is not possible to do so in JavaScript, as the recursion goes too deep for the language to handle.

在 JavaScript 中这种方式不太可行，因为这个算法的递归深度对它来讲太深了，脚本堆栈深度不够。

算法步骤：

- 申请和数据同样大小的空间，该空间用来存放合并后的序列；
- 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
- 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
- 重复步骤 3 直到某一指针达到序列尾；
- 将另一序列剩下的所有元素直接复制到合并序列尾。

```js
console.time();
let result = mergeSort(genArray(10000000), 0, 10000000);
verify(result);
console.log(10000000)
console.timeEnd();

function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  return arr;
}

function verify(a: number[]){
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1] || isNaN(a[i])) {
            // let tag = console.log(a.slice(0, i).join(",").replace(/./g, " "));
            return console.log( "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

function mergeSort(a: number[], lo:number, hi:number){
    if(2>=hi-lo){
        let m = new Array(2);
        m[0] = a[0];
        if(1 == hi-lo) return m.slice(0,1);
        if(a[0]<a[1]){
            m[0] = a[0];
            m[1] = a[1];
        }else{
            m[0] = a[1];
            m[1] = a[0];
        }
        return m;
    }
    let lb = Math.ceil(hi/2-lo/2), ld = hi - lo - lb;
    let b = a.slice(lo, lb);
    let d = a.slice(lo+lb, hi);
    b = mergeSort(b, 0, lb);
    d = mergeSort(d, 0, ld);

    let m = new Array(hi - lo);
    let pb = 0, pd = 0;
    while(pb<lb && pd<ld){
        if(b[pb] > d[pd]){
            m[pb+pd] = d[pd++];
        }else{
            m[pb+pd] = b[pb++];
        }
    }
    while (pb<lb){
        m[pb+pd] = b[pb++];
    }
    while (pd<ld){
        m[pb+pd] = d[pd++];
    }
    return m;
}
```


# 🚩 Shell sort
- https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm
- https://www.tutorialspoint.com/Comb-Sort

The C Programming Language 教材为了解析 for 循环，演示了 Shell sort 排序算法：

```c
/* shellsort:  sort v[0]...v[n-1] into increasing order */
void shellsort(int v[], int n)
{
   int gap, i, j, temp;

   for (gap = n/2; gap > 0; gap /= 2)
       for (i = gap; i < n; i++)
           for (j=i-gap; j>=0 && v[j]>v[j+gap]; j-=gap) {
               temp = v[j];
               v[j] = v[j+gap];
               v[j+gap] = temp;
           }
}
```

这是一个三层 for 嵌套的函数结构，外层定义 gap 负责控制两个子集比较的粒度，从 n/2 到 1 的粒度逐次缩小。中间层负责遍历所有数据，而最内层负责比较并更新顺序。

在多个嵌套循环保持循环控制集中的优势明显，Shell sort 这种排序算法的基本思想是 D. L. Shell 设计的，名字念希尔。在比较初期阶段，用粗粒度间距对元素进行粗排，而不是简单的交换相邻的元素。这种粗排往往会很快消除大量的紊乱，使后期的工作更少。随着比较元素之间的间隔逐渐减小为 1，此时排序有效地成为相邻交换方法，所有元素最终都会正确排序。

注意 for 的通用性使外循环与其他循环以相同的形式拟合，即使它不是算术级数，即可以指定 step 值。因为每轮的间隔在递减，但粗排序好的数据在增加，所以也叫递减增量排序，增量意思指数据的有序性在增加。正是这种逐次减半的粒度控制，使用得所有数据都得到正常的排序，而不被遗漏。类似的概念的排序还有 Comb sort，梳排序，同时它结合 Bubble sort 的比较逻辑。

列如，对一个单词的字母进行排序：

    supposed <- gap = 4
    ^   ^
    ouppssed
     ^   ^
    osppsued
      ^   ^
    osepsupd
       ^   ^
    osedsupp <- gap = 2
    ^ ^
    esodsupp
     ^ ^
    edossupp
        ^ ^
    edospusp
         ^ ^
    edosppsu
       ^ ^
    edoppssu <- gap = 1
    ^^
    deoppssu


# 🚩 Quick Sort
- Quick Sort 快速的排序 https://www.bilibili.com/video/BV1Kb411W75N?p=169
- https://leetcode-cn.com/problems/sort-an-array/comments/
- https://algorithm-visualizer.org/divide-and-conquer/quicksort
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort
- https://github.com/raywenderlich/swift-algorithm-club/tree/master/Quicksort
- Merge Sort vs Quick Sort https://www.bilibili.com/video/av925146035/
- Data Structure Visualizations https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- https://algorithm-visualizer.org/brute-force/comb-sort
- https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm

快速排序核心思维是二分法加递归处理，而巧妙之处在于二分策略，即分治法（Divide and conquer）策略，按一个参考值将数据分为大小 2 个子集，然后递归地排序两个子序列。

它使用了 3 个元素，基本排序流程如下： 

- `pivot` 中枢元素，指向一个参考值，将数据分成两个区；
- `low` 左边界，从左向右与 `pivot` 进行比较，将更大的值交换到右区，并进入下一步骤；
- `high` 右边界，从右向左与 `pivot` 进行比较，将更小的值交换到左区，完全分区后，将 `pivot` 放到新的中枢位，进入新一轮递归处理；

就是这三个元素完成了 Quick Sort 的最巧妙的二分策略，在快速分组的同时，又进行了初步的排序。 

快速排序和归并排序两种经典排序算法在算法原理上，可以说都各二叉树有关，快速排序就是对二叉树进行前序遍历 Preorder Traversal，归并排序就是对二叉树的后序遍历 Postorder Traversal。

Time Complexity

| Name             | Best       | Average       | Worst   | Memory    | Stable  |
| ---------------- | :--------: | :-----------: | :-----: | :-------: | :-----: |
| **Quick sort**   | n log(n)   | n log(n)      | n^2     | log(n)    | No      |

而对于渐进有序的数组来说，每次区分其实都是极其不平衡的，普通快排甚至会退化成 O(n^2)，可能需要多路快排。

选择合适的 pivot 值对效率有很大影响，比如 [ 7, 6, 5, 4, 3, 2, 1 ] 选择了 1 作为 pivot 就很没效率。

```js
let result = quickSort(genArray(20), 0, 20-1);
console.log(result.join(","));
verify(result);

function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function verify(a: number[]){
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1]) {
            return console.log(a.slice(0, i).join(",").replace(/./g, " ") + "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

function quickSort(nums: number[], low:number, high: number){
    let s = low, e = high;
    if(low >= high) return nums;
    let p = nums[high];
    while(low<high){
        while(low<high && nums[low]<p) low++;
        nums[high] = nums[low];
        while(low<high && nums[high]>=p) high--;
        nums[low] = nums[high];
    }
    nums[high] = p;

    let tl = nums.slice(0, low+1).join(",").replace(/./g, " ");
    let th = nums.slice(low, high-low).join(",").replace(/./g, " ");
    let tp = " ".repeat(nums.join(",").length-tl.length-th.length+2)+"pivot = "+p;
    console.log(nums.join(","));
    console.log(" ".repeat(tl.length-1)+"^"+" ".repeat(th.length)+"^" + tp);

    quickSort(nums, s, low-1);
    quickSort(nums, low+1, e);
    return nums;
}
```

测试输出：

    115,58,27,32,198,71,120,170,118,57,5,34,15,34,188,103,85,1,13,157
    115,58,27,32,13,71,120,1,118,57,5,34,15,34,85,103,157,188,170,198
                                                        ^^              pivot = 157
    85,58,27,32,13,71,34,1,15,57,5,34,103,118,120,115,157,188,170,198
                                        ^^                              pivot = 103
    5,15,27,32,13,1,34,34,71,57,58,85,103,118,120,115,157,188,170,198
                     ^^                                                 pivot = 34
    1,15,27,32,13,5,34,34,71,57,58,85,103,118,120,115,157,188,170,198
    ^^                                                                  pivot = 1
    1,5,27,32,13,15,34,34,71,57,58,85,103,118,120,115,157,188,170,198
      ^^                                                                pivot = 5
    1,5,13,15,32,27,34,34,71,57,58,85,103,118,120,115,157,188,170,198
            ^^                                                          pivot = 15
    1,5,13,15,27,32,34,34,71,57,58,85,103,118,120,115,157,188,170,198
               ^^                                                       pivot = 27
    1,5,13,15,27,32,34,34,71,57,58,85,103,118,120,115,157,188,170,198
                                    ^^                                  pivot = 85
    1,5,13,15,27,32,34,34,57,58,71,85,103,118,120,115,157,188,170,198
                              ^^                                        pivot = 58
    1,5,13,15,27,32,34,34,57,58,71,85,103,118,120,115,157,188,170,198
                           ^^                                           pivot = 57
    1,5,13,15,27,32,34,34,57,58,71,85,103,115,120,118,157,188,170,198
                                            ^^                          pivot = 115
    1,5,13,15,27,32,34,34,57,58,71,85,103,115,118,120,157,188,170,198
                                                ^^                      pivot = 118
    1,5,13,15,27,32,34,34,57,58,71,85,103,115,118,120,157,188,170,198
                                                                    ^^  pivot = 198
    1,5,13,15,27,32,34,34,57,58,71,85,103,115,118,120,157,170,188,198
                                                            ^^          pivot = 170
    1,5,13,15,27,32,34,34,57,58,71,85,103,115,118,120,157,170,188,198
    VERIFY PASSED!



# 🚩 Heap sort
- https://www.runoob.com/w3cnote/heap-sort.html
- https://www.cs.usfca.edu/~galles/visualization/HeapSort.html
- https://www.tutorialspoint.com/data_structures_algorithms/tree_data_structure.htm
- https://www.tutorialspoint.com/data_structures_algorithms/heap_data_structure.htm

堆排序是利用 `Binary Heap` 二叉堆，也叫 `Heap Tree` 堆积树，这种树状数据结构而设计的一种排序算法，是一种选择排序，它的最坏，最好，平均时间复杂度均为 O(nlogn)，它也是不稳定排序。空间复杂度为 O(1)，因为是 in-place 排序，不需要额外空间，这已经是最优状态。排序算法来说，继续再去从时间和空间上优化这个问题，从理论上来讲没什么太大的意义了。

在计算机科学中，二叉堆是二叉树形状的堆结构，所以称为堆积树，是最常见的实现优先级队列的方法，在很多主流语言的标准算法库中都能看到它们的身影。同时它也是很多算法中需要用到的底层数据结构，能够快速地掌握这些已有的标准库和类，能够很高效地实现诸多算法。

![Binary tree](https://www.tutorialspoint.com/data_structures_algorithms/images/binary_tree.jpg)

学习 Heap sort 之前，需要对二叉树的主要概念有一定理解：

- `Path` − Path refers to the sequence of nodes along the edges of a tree.
- `Root` − The node at the top of the tree is called root. There is only one root per tree and one path from the root node to any node.
- `Parent` − Any node except the root node has one edge upward to a node called parent.
- `Child` − The node below a given node connected by its edge downward is called its child node.
- `Leaf` − The node which does not have any child node is called the leaf node.
- `Subtree` − Subtree represents the descendants of a node.
- `Visiting` − Visiting refers to checking the value of a node when control is on the node.
- `Traversing` − Traversing means passing through nodes in a specific order.
- `Levels` − Level of a node represents the generation of a node.
- `keys` − Key represents a value of a node based on which a search operation is to be carried out for a node.

堆积树是一种完全二叉树，有两种形式，min-heap 小根堆要求节点小于或等于子节点值，max-heap 大根堆要求节点大于或等于子节点值。

          max-heap          min-heap
             9                 3        <-- Level 0
         ┌───┴───┐         ┌───┴───┐     
         8       7         4       5    <-- Level 1
       ┌─┴─┐   ┌─┴─┐     ┌─┴─┐   ┌─┴─┐   
       6   5   4   3     6   7   8   9  <-- Level 2
     ┌─┴─┐             ┌─┴                
     6   5             7                <-- Level 3

所谓完全二叉树，即除最底层 L 的叶节点外，L-2 层以上的所有节点都有 2 个子节点，如果 L-1 层以上所有节点都有 2 个子节点则称为完满二叉树。

完全二叉树是一种效率很高的数据结构，通常采用数组形式存储，可以快速计算出一个节点的父子节点，同时不需要额外存储索引信息。

根据叶节点的分布不同，二叉树可以按以下分类：

- `完美二叉树` Perfect Binary Tree 所有叶节点深度相同，所有非叶节点都有两点子节点。也称为满二叉树，深度为 k(>=-1) 且有 2^(k+1) - 1 个节点。
- `完全二叉树` Complete Binary Tree，除了最底层，所有节点都是完全充满子节点，而叶子节点从左到友依次排列，不需要填满二叉树。
- `完满二叉树` Full Binary Tree/Strictly Binary Tree，除叶节点外，所有节点都有两个子节点。换句话说，只要有子节点，就必有两个子节点。
- `平衡二叉树` Balance Binary Tree 要求左右子树的高度差至多为 1 个节点。
- `自平衡二叉树` Self-Balancing Binary Search Tree 简称 `AVL` 平衡二叉树，名字来源于它的发明作者 G.M. Adelson-Velsky 和 E.M. Landis。

二叉堆的空间复杂度和相关操作的时间复杂度如下表所示：

    | Algorithm | Average  | Worst Case |
    |-----------|----------|------------|
    | Space     | O(n)     | O(n)       |
    | Search    | O(n)     | O(n)       |
    | Insert    | O(1)     | O(log n)   |
    | Delete    | O(log n) | O(log n)   |
    | Peek      | O(1)     | O(1)       |

堆排序基本思想：将序列数据构造成大顶堆，整个序列的最大值就是根节点，将其交换到末尾，作为已排序数据。然后将剩余 n-1 个元素重新构造成一个堆，这样会得到 n 个元素的次大值。重复操作，直到得到一个有序序列。

所以，堆排序的要点在于构造二叉堆，还有摘顶后二叉堆的重建，这个过程称为 `heapify`。事实上，在排序过程中并不需要定义一个 BinaryHeap 对象，在一个堆中，k = 0 即顶级节点，位置 k 的子节点的父元素的位置是 (k+1)/2-1，而它的两个子节点的位置分别是 2k+1 和 2k+2，这样节点就和数组的索引关联起来了。对于一个 N 元素的堆积树，其节点也同样有 N 个，包括叶节点。

假设数据为 8 个元素的数组 [4,2,5,7,1,9,8,0]，升序采用大顶堆，降序采用小顶堆。

首先，将数组的数据按先后顺序填充到二叉堆，从顶层 Level 0 到底层，从左节点到右节点依次填充，并依次给节点编号。

          max-heap     
             4         <-- Level 0
         ┌───┴───┐      
         2       5     <-- Level 1
       ┌─┴─┐   ┌─┴─┐    
       7   1   9   8   <-- Level 2
     ┌─┴               
     0                 <-- Level 3

从最后底层的非叶子结点开始调整，按按照数组的线性结构，最后的 7 号数组元素对应 3 号节点，7 = 2 * 3 + 1，节点对应位置。

从左至右，从下至上进行调整，因为节点值 7 比唯一的子节点值 0 大，所以不用调整，通过 2k+2 超出数组范围可以判断出没有第二个子节点。

接下来，对 3 号节点的父节点调整，依次比较两个子节点并按需要交换位置。即对 1 号节点调整，从子节点也可以反推父节点 3 = ( 2 * x) + 1，就是解个方程式。

这个过程就是一个沉降或抬升的操作，可以定义一个 `heapify` 函数将数据交换到合适位置，当移除根节点时，可以直接将数组最后元素提升为根节点，然后，再通过沉降函数交换到合适的位置上。

堆排序算法可以概括如下几个步骤：

- 使用 `heapify` 函数将数组 H[0……n-1] 转换为一个二叉堆；
- 把堆首（最大值）和堆尾互换；
- 把堆的尺寸缩小 1，即将堆尾的元素排除，并调用 `heapify` 将新的根节点调整到合适位置；
- 重复操作，直到堆的尺寸为 1 即完成排序。

注意，设计 `heapify` 函数时，需要先从节点树最底部抬升或沉降，相当于一个粗排，然后在后续对上层节点进行的 `heapify` 操作中，再细化一次以确保数据满足二叉堆的要求，这个过程相当巧妙。

如果使用 max-heap，那么就从数组的末尾即二叉树最底层节点开始抬升大值数据。如果使用 min-heap，则从底层开始沉降小值数据。

可以参考旧金山大学 University of San Francisco 官方网站，David Galles 助教制作的数据结构与算法动画演示工具。

```js
let result = heapSort(genArray(8));
console.log(result.join(","));
verify(result);

function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function verify(a: number[]){
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1]) {
            return console.log(a.slice(0, i).join(",").replace(/./g, " ") + "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

function heapSort(a: number[]){
    // build an max-heap
    let length = a.length;
    for (var i = length/2; i >= 0; --i) {
        heapfy(a, Math.floor(i), length);
    }
    console.log("HEAPFIED!");
    // sort all nodes
    for(let i=length-1; i>=0; i--){
        swap(a, 0, i);
        heapfy(a, 0, i);
    }
    return a;
}

function heapfy(a:number[], k:number, N:number) {
    while (2*k+1 < N) {
        let g = Math.floor(2*k + 1);
        if (g < N-1 && a[g+1] >= a[g]){
            g ++;
        }
        if (a[k] < a[g]){
            swap(a, k, g);
        }
        k = g;
    }
}

function swap(a:number[], x:number, y:number){
    let tag = a.slice(0, x+1).join(",").replace(/./g, " ")+"^"+
        a.slice(x, y).join(",").replace(/./g, " ")+"^";
    let pad = a.join(",").slice(0, a.join(",").length-tag.length+2).replace(/./g, " ");
    console.log(a.join(","));
    console.log(tag+pad+a[x]+" <==> "+a[y]);
    let t = a[x];
    a[x] = a[y];
    a[y] = t;
}
```

测试输出：

    11,55,59,37,65,3,23,21                     34,9,9,24,80,15,42,25             
         ^        ^         55 <==> 65                  ^           ^ 24 <==> 25 
    11,65,59,37,55,3,23,21                     34,9,9,25,80,15,42,24             
      ^  ^                  11 <==> 65               ^          ^     9 <==> 42  
    65,11,59,37,55,3,23,21                     34,9,42,25,80,15,9,24             
         ^        ^         11 <==> 55             ^       ^          9 <==> 80  
    HEAPFIED!                                  34,80,42,25,9,15,9,24             
    65,55,59,37,11,3,23,21                       ^  ^                 34 <==> 80 
      ^                   ^ 65 <==> 21         HEAPFIED!                         
    21,55,59,37,11,3,23,65                     80,34,42,25,9,15,9,24             
      ^     ^               21 <==> 59           ^                  ^ 80 <==> 24 
    59,55,21,37,11,3,23,65                     24,34,42,25,9,15,9,80             
            ^          ^    21 <==> 23           ^     ^              24 <==> 42 
    59,55,23,37,11,3,21,65                     42,34,24,25,9,15,9,80             
      ^                ^    59 <==> 21           ^                ^   42 <==> 9  
    21,55,23,37,11,3,59,65                     9,34,24,25,9,15,42,80             
      ^  ^                  21 <==> 55          ^ ^                   9 <==> 34  
    55,21,23,37,11,3,59,65                     34,9,24,25,9,15,42,80             
         ^     ^            21 <==> 37             ^    ^             9 <==> 25  
    55,37,23,21,11,3,59,65                     34,25,24,9,9,15,42,80             
      ^              ^      55 <==> 3            ^            ^       34 <==> 15 
    3,37,23,21,11,55,59,65                     15,25,24,9,9,34,42,80             
     ^ ^                    3 <==> 37            ^  ^                 15 <==> 25 
    37,3,23,21,11,55,59,65                     25,15,24,9,9,34,42,80             
        ^    ^              3 <==> 21            ^          ^         25 <==> 9  
    37,21,23,3,11,55,59,65                     9,15,24,9,25,34,42,80             
      ^          ^          37 <==> 11          ^    ^                9 <==> 24  
    11,21,23,3,37,55,59,65                     24,15,9,9,25,34,42,80             
      ^     ^               11 <==> 23           ^       ^            24 <==> 9  
    23,21,11,3,37,55,59,65                     9,15,9,24,25,34,42,80             
      ^        ^            23 <==> 3           ^ ^                   9 <==> 15  
    3,21,11,23,37,55,59,65                     15,9,9,24,25,34,42,80             
     ^ ^                    3 <==> 21            ^    ^               15 <==> 9  
    21,3,11,23,37,55,59,65                     9,9,15,24,25,34,42,80             
      ^    ^                21 <==> 11          ^ ^                   9 <==> 9   
    11,3,21,23,37,55,59,65                     9,9,15,24,25,34,42,80             
      ^  ^                  11 <==> 3           ^^                    9 <==> 9   
    3,11,21,23,37,55,59,65                     9,9,15,24,25,34,42,80             
     ^^                     3 <==> 3           VERIFY PASSED!                    
    3,11,21,23,37,55,59,65                    
    VERIFY PASSED!                            


# 🚩 Bucket sort
- https://www.cs.usfca.edu/~galles/visualization/BucketSort.html
- https://learnersbucket.com/tutorials/algorithms/bucket-sort-algorithm/
- Introduction to Algorithms, 3rd, the MIT Press - 8.4 Bucket sort
- Algorithms, 4th, Princeton University - 3.4 Hash Tables


桶排序是计数排序的升级版，它利用了函数的映射关系，效率关键就在于这个映射函数。桶是一个抽象概念，可以看作是一个数组或链表数据结构，每个桶存储的数据为半开区，half-open interval [a, b)，即不含右边界。

桶排序原理：假设输入数据服从均匀分布，将数据分到有限数量的桶里，可以使用其它排序算法对每个桶的数据再排序。

- 确定桶的数量，并将数据放到对应的空桶中；
- 将每个不为空的桶进行排序；
- 拼接不为空的桶中的数据，得到排序结果；

在额外空间充足的情况下，尽量增大桶的数量，使用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中。桶排序，主要适用于小范围整数数据，且独立均匀分布，可以计算的数据量很大，而且符合线性期望时间。

桶排序利用函数的映射关系，减少了几乎所有的比较工作。实际上，桶排序的 f(k) 值的计算就是分治策略，已经把大量数据分割成了基本有序的数据块(桶)，然后只需要对桶中的少量数据做比较排序即可。

类似概念的排序有鸽巢排序（Pigeonhole sort），也称作基数分类，即基于计数对数据进行分类。是一种时间复杂度为 O(n) 且在不可避免遍历每一个元素并且排序的情况下效率最好的一种排序算法。平均时间复杂度： O(N+n)，最坏空间复杂度：O(N * n)，N 为待排序数组中最大的元素值，n 为关键字个数。

鸽巢排序只有在差值（或者可被映射在差值）很小的范围内的数值排序的情况下实用。当涉及到多个不相等的元素，且将这些元素放在同一个"鸽巢"的时候，算法的效率会有所降低。一般很少使用鸽巢排序，因为它很少可以在灵活性，简便性，尤是速度上超过其他排序算法，事实上，桶排序是鸽巢排序的一种归纳结果，桶排序较鸽巢排序更加的实用。

具体举例来说，现在有一组数据 [7, 36, 65, 56, 33, 60, 110, 42, 42, 94, 59, 22, 83, 84, 63, 77, 67, 101]，怎么对其按从小到大顺序排序呢？

操作步骤说明：

1. 设置桶的数量为 5 个空桶，找到最大值 110，最小值 7，计算每个桶的区间范围 20.8=(110-7+1)/5，这就是映射函数。
2. 遍历原始数据，放到对应的桶中，用链表结构。首先计算数字 7 对应桶索引 0 = floor((7 – 7) / 20.8)，依次类推。
3. 当向同一个桶再次插入数据时，比较大小后插入适当位置，即排序插入保持顺序。
4. 合并非空的桶，按从左到右的顺序合并 0，1，2，3，4 桶， 得到桶排序的结构。

由此可见，对桶中元素的排序对效率影响最大，选择何种比较排序算法对于性能的影响至关重要。

当输入的数据可以均匀的分配到每一个桶中，这种状态就是最有效率的。

当输入的数据较集中地分配到了同一个桶中，这种状态就是最没有效率的。

以下为 TypeScript 实现，查找 Min Max 和合并 Buckets 时偷懒了，直接使用了脚本提供的数组方法，包括 forEach 和 concat，还有 insertBucket 方法中利用了脚本的动态特性，如果使用 C 语言实现就要使用相应的动态内存分配，或者实现链表结构。

这里 insertBucket 使用 BubbleSort，并不能实现数组快速插入，不能真实反映算法效率，换用链表也没有质的区别，因为链表是实现有序、方便增删，但不是实现快速插入的结构。

```js
let result = bucketSort(genArray(20));
console.log(result.join(","));
verify(result);

function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function verify(a: number[]){
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1]) {
            return console.log(a.slice(0, i).join(",").replace(/./g, " ") + "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

function bucketSort(a: number[]){
    let min:number = a[0], max:number = a[0];
    a.forEach((it)=>{
        if (max<it){
            max = it;
        } else if (min>it){
            min = it;
        }
    });

    // fill([]) will cause cross reference
    let buckets:number[][] = new Array(10).fill(0).map( it => []);
    let interval = (max - min + 1)/10;

    for(let i=0; i<a.length; i++){
        let key = Math.floor((a[i]-min)/interval);
        insertBucket(buckets[key], a[i]);
    }
    let bucket:number[] = [];
    buckets.forEach(bk => {
        bucket = bucket.concat(bk);
    });
    return bucket;
}

function insertBucket(a:number[], v:number) {
    let N = a.length, k = 0;
    while (k < N) {
        if( v<a[k] ){
            let t = a[k];
            a[k] = v;
            v = t;
        }
        k ++;
    }
    a.push(v);
}
```

测试输出：

    157,5,60,94,103,26,3,113,82,168,12,171,18,154,191,18,56,32,173,110
    3,5,12,18,18,26,32,56,60,82,94,103,110,113,154,157,168,171,173,191
    VERIFY PASSED!
    179,47,173,108,188,4,120,6,192,133,165,7,92,73,62,82,164,170,151,181
    4,6,7,47,62,73,82,92,108,120,133,151,164,165,170,173,179,181,188,192
    VERIFY PASSED!


# 🚩 Radix sort
- http://notepad.yehyeh.net/Content/Algorithm/Sort/Radix/Radix.php
- https://www.cs.usfca.edu/~galles/visualization/RadixSort.html
- https://www.runoob.com/w3cnote/radix-sort.html
- 【搬运】50多种排序算法的可视化 https://www.bilibili.com/video/BV1bg4y1q7es

基数排序是一种非比较型整数排序算法，其原理是将整数按个位、百位、千位等切割成单独的数字，然后按每位数分别比较。由于整数也可以表达字符串（比如名字或日期）和特定格式的浮点数，所以基数排序也不仅仅用于整数排序。

对比一下基数排序、计数排序、桶排序，这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

- 基数排序：根据键值的每位数字来分配桶；
- 计数排序：每个桶只存储单一键值；
- 桶排序：每个桶存储一定范围的数值；

基数排序方法是很奇妙的排序思维，它基于这样一个事实：

- 0 ~ 9 这几个数是有序的，而且数量固定；
- 一个数值越大，其位数就越多，而数值越小，位数也越少，也可以看作前缀 0；

基数排序是一个多回合制的排序算法，可以看作回合制比赛，并且不用进行比较直接将数字作为数组索引使用：

- 第 1 回合是个位数字在 PK，按数字大小从左到右排序，将对应数据存放在临时数组中，待全部比较完毕，再按从左到右，从大到小的顺序回填。
- 第 2 回合是十位数字在 PK，同样按数字大小从左到右排序，按前面的逻辑同样操作。
- 重复操作，直到所有数不再有更高的位数要处理。

这样经过多回合排序后，那些在第一回合可能由于数字大而排在后面的数，在经过第 2 回合 PK 后就会自动被放到前面，最后将临时数组按顺序回填后得到的就是已排序数据。

所以这个算法首先需要找到最大值，并确定比较回合数，再创建 10 个临时数组用于存放数据。

基数排序算法有两个方向选择：

- LSD(Least Significant Digital) 由右到左，例如，173，按 3, 7, 1 顺序來进行。
- MSD(Most Significant Digital) 由左到右，例如，173，按 1, 7, 3 顺序來进行。

Radix Sort Visualzation 演示中的做法是省内存的做法，这种算法比使用桶排更有效率。它只使用了一个带有 10 个元素的 Counter 数组来保存计数，即当前回合中对应数字出现的次数，然后，再创建和原数据相同大小的 Temp 数组作为临时排序使用。

算法步骤如下：

- 循环处理每个数据，按当前处理的位数设置 Counter 中相应的次数；
- 计算 Counter 数组的一维前缀和，即将前一元素的值累加到后一元素上，处理完成后，Counter 和元素包含的值就是对应 Temp 数组的分隔点，也就是位置编码。
- 然后再循环每个数据，并按当前处理的位置对应找到 Counter 上位置编码，并设置到 Temp 数组上对应的位置。
- 然后，Counter 相应的元素值减 1，表示给下一个数据更新地址。
- 处理完所有数据，然后直接将 Temp 数组复制回原数组，进入下一回合。其实也可以不回填，将 Temp 与原数组互换角色也一样。

这种处理方式的巧妙在于地址编码的处理，这样就只可以实现 O(2N) 的空间复杂度，并且不用经过桶排的消耗，更加高效。

以下为 TypeScript 实现：

```js
let result = radixSort(genArray(20));
console.log(result.join(","));
verify(result);

function genArray(len: number){
  let arr = [], scale = len*10;
  while(len-->0) arr.push(Math.ceil(Math.random()*scale));
  console.log(arr.join(","));
  return arr;
}

function verify(a: number[]){
    for(let i=0; i<a.length; i++){
        if (a[i]>a[i+1]) {
            return console.log(a.slice(0, i).join(",").replace(/./g, " ") + "^ VERIFY FAILURE AT "+i);
        }
    }
    return console.log("VERIFY PASSED!");
}

function radixSort(a: number[]){
    let temp = [];
    let buckets = new Array(10).fill(0);

    let max = a[0];
    for(let i=a.length-1; i>0; i--){
        if(max<a[i]) max = a[i];
    }

    let div = 1;
    let len = a.length;
    while(max/div>=1){
        for(let i=len-1; i>=0; i--){
            let radix = Math.floor((a[i]/div)%10);
            // temp[i] = radix;
            buckets[radix] ++;
        }
        for(let i=1; i<buckets.length; i++){
            buckets[i] += buckets[i-1];
        }
        for(let i=len-1; i>=0; i--){
            let r = Math.floor((a[i]/div)%10);
            let p = --buckets[r];
            temp[p] = a[i];
        }
        console.log(temp.join(","));
        a = temp.slice(0);
        buckets.fill(0);
        div *= 10;
    }
    return temp;
}
```

测试输出：

    71,106,79,161,37,154,95,200,70,121,17,74,154,40,123,108,41,195,151,74
    200,70,40,71,161,121,41,151,123,154,74,154,74,95,195,106,37,17,108,79
    200,106,108,17,121,123,37,40,41,151,154,154,161,70,71,74,74,79,95,195
    17,37,40,41,70,71,74,74,79,95,106,108,121,123,151,154,154,161,195,200
    17,37,40,41,70,71,74,74,79,95,106,108,121,123,151,154,154,161,195,200
    VERIFY PASSED!
    10,173,100,191,168,8,18,190,33,133,53,145,52,72,83,57,184,172,166,82
    10,100,190,191,52,72,172,82,173,33,133,53,83,184,145,166,57,168,8,18
    100,8,10,18,33,133,145,52,53,57,166,168,72,172,173,82,83,184,190,191
    8,10,18,33,52,53,57,72,82,83,100,133,145,166,168,172,173,184,190,191
    8,10,18,33,52,53,57,72,82,83,100,133,145,166,168,172,173,184,190,191
    VERIFY PASSED!

从数据的各个回合的排序，可以很明显看到 0 ~ 9 这十个数字所起的作用在每个回合都不一样。

编写脚本时需要注意，数值是按浮点类型进行的运算，需要使用 Math.floor 或 ceil 等方法截断小数。另外，数组复制使用 slice 避免直接赋值引起交叉引用，还有清空数组元素的数据用 fill 填充方法。

测试了一组随机数据的生成与排序，不输出，主机配置 Surface Book2/i7-8650U 1.90 Ghz/16GB/GTX 1050，BucketSort 估计受 BubbleSort 影响，并不能实现数组快速插入，数据不能真实反映算法效率，换用链表也没有质的区别，因为链表是实现有序、方便增删，但不是实现快速插入的结构。

```js
console.time();
let result = radixSort(genArray(10000000));
verify(result);
console.timeEnd();
```

    | Numbers  | RadixSort | BucketSort | HeapSort | MergeSort |
    |----------|-----------|------------|----------|-----------|
    |   200000 | 136ms     | 2619ms     | 70ms     | 109ms     |
    |  2000000 | 1034ms    | -          | 598ms    | 826ms     |
    |  5000000 | 2001ms    | -          | 1924ms   | 2241ms    |
    | 10000000 | 4237ms    | -          | 4495ms   | 4671ms    |

各种排序算法复杂度：

    | 排序方法 | 时间复杂度（平均）   | 时间复杂度（最坏）   | 时间复杂度（最好） | 空间复杂度 | 稳定性 |
    |----------|--------------------|--------------------|--------------------|------------|--------|
    | 冒泡排序 | O(n2)O(n2)         | O(n2)              | O(n)               | O(1)       | 稳定   |
    | 选择排序 | O(n2)O(n2)         | O(n2)              | O(n2)              | O(1)       | 不稳定 |
    | 插入排序 | O(n2)O(n2)         | O(n2)              | O(n)               | O(1)       | 稳定   |
    | 希尔排序 | O(n1.3)            | O(n2)              | O(n)               | O(1)       | 不稳定 |
    | 快速排序 | O(nlog2n)          | O(n2)              | O(nlog2n)          | O(nlog2n)  | 不稳定 |
    | 归并排序 | O(nlog2n)          | O(nlog2n)          | O(nlog2n)          | O(n)       | 稳定   |
    | 堆排序   | O(nlog2n)          | O(nlog2n)          | O(nlog2n)          | O(1)       | 不稳定 |
    | 基数排序 | O(n∗k)             | O(n∗k)             | O(n∗k)             | O(n+k)     | 稳定   |

1. 传统简单排序确实当数据量很小的时候也表现不错，但当数据量增大，其耗时也增大十分明显； 
2. 冒泡，插入，选择三种排序中，当数据量很大时，选择排序性能会更好； 
3. 堆排，希尔，归并，快排几种排序算法也表现不错，源于其时间复杂度达到了O(nlogn)O(nlogn)； 
4. 随机快速排序性能确实表现十分亮眼，甚至有时比基数排序和桶排序还好，这可能也是快排如此流行的原因； 
5. 线性排序中计数排序表现最好，但他们的限制也比较明显，只能处理范围内的正整数。


# 🚩 Timsort
- https://www.geeksforgeeks.org/timsort/
- https://sikasjc.github.io/2018/07/25/timsort/
- https://www.cnblogs.com/sunshuyi/p/12680918.html
- https://github.com/python/cpython/blob/main/Objects/listobject.c
- https://new.qq.com/omn/20191022/20191022A03W3Z00.html
- https://www.infopulse.com/blog/timsort-sorting-algorithm/

Timsort 是一种混合、稳定高效的排序算法，源自合并排序和插入排序，旨在很好地处理多种真实数据。它由 Tim Peters 于 2002 年在 Python 编程语言中实施使用。

该算法查找已经排序的数据的子序列，并使其更有效地对其余部分进行排序。这是通过将已识别的子序列，称为 run，与现有运行合并直到满足某些条件来完成的。从版本 Python 2.3 开始，Timsort 一直是 Python 的标准排序算法。如今，Timsort 已是是 Python、 Java、 Android 平台 和 GNU Octave 的默认排序算法。

针对现实中需要排序的数据分析看，大多数据通常是有部分已经排好序的数据块，Timsort 就利用了这一特点。这些已排序的元素被称为“natural runs”。算法会遍历要排序的数据，将元素收集到 run 中，同时将这些 run 合并在一起。

所谓 run 就是一个连续上升，包括两个元素相等的情况，或者严格递减的子串。

比如对于序列 [1,3,4,3,2,4,7,8]，其中有三个 run，第一个是 [1,3,4]，第二个是 [3,2]，第三个是 [4,7,8]，这三个 run 都是单调的，在实际程序中对于单调递减的 run 会被反转成递增的序列。


如果数组的元素个数少于 64，Timsort 将执行插入排序。如果列表的元素个数大于 64，Timsort 会先遍历列表，查找严格递增或递减的部分。如果这个部分是递减的，就反转这个部分。

插入排序是一种对小数据集最为有效的排序算法，它在排序较大的数据集时速度很慢，但在排序较小的数据集时速度很快。

在排序时，Timsort 迭代数据元素，将其放到不同的 run 里，同时针对这些 run ，按规则进行合并至只剩一个，则这个仅剩的 run 即为排好序的结果。

换句话说，就是分析待排序数据，根据其本身的特点，将排序好的（不管是顺序还是逆序）子序列的分为一个个 run 分区，当然，这个分区 run 也存在一定的约束，即根据序列会产生一个 minrun，如果原始的 run 小于 minrun 的长度，用插入排序扩充 run，直到达到条件，之后使用归并排序来合并多个 run。

本质上 Timsort 是一个经过大量优化的归并排序，而归并排序已经到达了最坏情况下，比较排序算法时间复杂度的下界，所以在最坏的情况下，Timsort 时间复杂度为 O(n log n)。在最佳情况下，即输入已经排好序，它则以线性时间运行 O(n)，可以看出 Timsort 是目前最好的排序方式。


# 🚩 Bitonic sort
- https://www.geeksforgeeks.org/bitonic-sort/
- https://www.inf.hs-flensburg.de/lang/algorithmen/sortieren/bitonic/bitonicen.htm
- https://www.inf.hs-flensburg.de/lang/algorithmen/sortieren/networks/sortieren.htm

双调排序是数据无关的排序，即比较顺序与数据无关的排序方法，特别适合 GPU、fpga 做并行计算。

首先，双调序列的就是满足以下关系的数：

    x0 <= x1 …..<= xi  and  xi >= xi+1….. >= xn-1 

也就是在中间某个位置往两边单调递减，可以看作由两个单调的子集构成，称这个序列是 Bitonic（双调的）。

另外，大佬们已经证明，如果一个 sort network 可以对任意 0-1 序列进行正确地排序，则可以对普通的序列排序也是正确的。

一个序列里面所有元素的值为 0 或 1，则这个序列是 0-1 序列。

    Basic concepts
    Definition:  A sequence a = a0, ..., an-1  with  ai element {0, 1}, i = 0, ..., n-1 is called 0-1-sequence.

当一个 0-1 序列只包含最多两次 0 和 1 之间的转换时，这个序列是 0-1-Bitonic 序列。

普通的数据可以通分治法，递归地从无序状态转换为双调序列，如果数据长度不是 2 的幂，可以采取特殊值填充，最后再过滤掉。有时候 padding 的空间比较大，如数组长度为 1025 个元素，则需要填充到 2048 个，浪费了大量空间。但是这种方法比较容易转化为针对 GPU 的并行算法，一般来说，并行计算中常使用双调排序来对一些较小的数组进行排序。 如果不考虑 padding，用更复杂的处理方法，参考 4 n!=2^k 的双调排序网络。

得到双调序列后，接下来的过程就是 Bitonic merge，实际上也是 divide and conquer 策略。


# 🚩 Interpolation Search
- https://www.tutorialspoint.com/data_structures_algorithms/interpolation_search_algorithm.htm
- Binary Search Tree, AVL Tree https://visualgo.net/en/bst

在有序数据搜索算法中，Linear search 是直观但也是最没有效率的，它从第一个数据查找一到到数据结束，如果刚好目标是最后一个，那么就是它的最差表现，算法复杂度为 O(n)。

如果在大量数据的查找，使用二分法查找 Binary Search，则可以大大节省时间。

    mid = Lo + (Hi - Lo) / 2

首先，将数据对半分成两部分，目标的值落在哪个范围就找哪个部分的数据，重复进行数据的拆分，直到找到目标，复杂度为 Ο(log n)，表现相当好了。

二分法的搜索过程相当于建立了一个二叉树，所以叫做 BST - Binary Search Tree。

但是对有序数据的利用还不够充分，而插值查找 Interpolation Search 则利用插值算法来分拆数据，使得分拆点更合理。

    mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo])

    where −
       A    = list
       Lo   = Lowest index of the list
       Hi   = Highest index of the list
       A[n] = Value stored at index n in the list

插值算法通过计算差值空间，挑选出更靠近目标值 X 的拆分点，这样也就间接地减少了比较次数。

同样思想衍生出来的还有利用 Fibonacci Series 来定拆分点，裴波那契数列最重要的一个性质是每个数都等于前两个数之和，满足 F(0)=1，F(1)=1, F(n)=F(n-1)+F(n-2) (n>=2，n∈N)，两个相邻项的比值会逐渐逼近 0.618 黄金分割比值，这个神奇的数列在自然界广泛存在。

对于表长较大，而关键字分布又比较均匀的查找表来说，插值查找算法的平均性能比折半查找要好的多。但是，数组中如果分布非常不均匀，那么插值查找未必是很合适的选择。

算法时间复杂度 Ο(log (log n)) 优于二分法搜索 Ο(log n)。

另外，计算分布需要用浮点数，如果数据中有重复值，那么公式将可能出现除 0 异常，正好通过一个小数偏差可以解决类型转换和除 0 问题。

```c
#include <stdio.h>
#include <string.h>

// Interpolation Search
int isearch(char a[], int n, char x){
    int lo = 0, mi, hi = n-1;
    printf("%s\n", a);
    while (lo<hi) {
        mi = lo + (hi-lo)/(a[hi] - a[lo] + .1)*(x - a[lo]);
        printf("%*c%*c%*c<---try to find %c\n", 
            lo+1, '[', mi-lo, '^', hi-mi, ']', x);
        if (a[mi]==x){
            return mi;
        } else if (a[mi]<x) {
            lo = mi + 1;
        } else {
            hi = mi - 1;
        }
    }
    return a[lo] == x? lo : -1;
}

// Insertion sort
int isort(char a[], int n){
    char k;
    for (size_t i = 1; i < n; i++)
    {
        k = a[i];
        for (size_t j = i; j > 0; j--)
        {
            if (k < a[j-1]) {
                a[j] = a[j-1];
                a[j-1] = k;
            }
        }
    }
    return n;
}

int main()
{
    char s[0xff] = "You would supposed to type some words then a character:";
    char key;
    printf("%s\n", s);
    scanf(" %[^\n] %c", s, &key);
    isort(s, strlen(s));
    int k = isearch(s, strlen(s), key);
    printf("%s\n", s);
    printf("%*c[key at %d]", k+1, key, k);
    return 0;
}
```

测试输出：

    You would supposed to type some words then a character:
    a
             :Yaaaccdddeeeeehhlmnooooooppprrrssssttttuuuwwy
    [                                      ^              ]<---try to find a
    [                             ^       ]<---try to find a
    [                      ^     ]<---try to find a
    [                   ^ ]<---try to find a
    [                ^ ]<---try to find a
    [              ^]<---try to find a
    [            ^]<---try to find a
             :Yaaaccdddeeeeehhlmnooooooppprrrssssttttuuuwwy
                 a[key at 13]


# 🚩 Violent Search 暴力搜索算法

暴力搜索算法，Brute Force Searching，是两层简单的循环结构。先从 S 第 1 个字符位置开始逐字与 P 字符比较，发现不匹配时，再从 S 第 2 个字符位置开始逐字比较，依次处理直到整个 S 字符串处理完成，算法复杂度是 O(mn)。

```py
class Violent:

    def search(self, s, p):
        for i in range(0, len(s)-len(p)+1):
            for j in range(0, len(p)):
                if s[i+j] != p[j]:
                    break
                elif j+1 == len(p):
                    print(f"""\
                    Pattern: {p}
                     Search: {s}
                         at: {"^"*len(p):>{i+len(p)}} col:{i}
                    """)
                    return i
        return -1
print(f"__name__: {__name__}")
ismain = __name__ == '__main__'

# if ismain:

v = Violent()
v.search(p="Type",    s="git clone git@github.com:Microsoft/TypeScript-Sublime-Plugin")
v.search(p="Complexy",s="Denial of Service via Algorithmic Complexity Attack")
v.search(p="Hash",    s="New Second-Preimage Attacks on Hash Functions")
v.search(p="4th",     s="Robert Sedgewick - Algorithms, 4th Edition")
v.search(p="Closed",  s="Open Hash Tables (Closed Addressing)")
v.search(p="Open",    s="Closed Hash Tables (Open Addressing)")
v.search(p="using",   s="Closed Hash Tables, using buckets")
v.search(p="3rd",     s="Introduction to Algorithms 3rd Edition")
v.search(p="loog",    s="loon")
v.search(p="loon",    s="loon")
v.search(p="loon",    s="loo")
```

输出测试结果：

    Pattern: Type
     Search: git clone git@github.com:Microsoft/TypeScript-Sublime-Plugin
         at:                                    ^^^^ col:35
    
    Pattern: Hash
     Search: New Second-Preimage Attacks on Hash Functions
         at:                                ^^^^ col:31
    
    Pattern: 4th
     Search: Robert Sedgewick - Algorithms, 4th Edition
         at:                                ^^^ col:31
    
    Pattern: Closed
     Search: Open Hash Tables (Closed Addressing)
         at:                   ^^^^^^ col:18
    
    Pattern: Open
     Search: Closed Hash Tables (Open Addressing)
         at:                     ^^^^ col:20
    
    Pattern: using
     Search: Closed Hash Tables, using buckets
         at:                     ^^^^^ col:20
    
    Pattern: 3rd
     Search: Introduction to Algorithms 3rd Edition
         at:                            ^^^ col:27


# 🚩 KMP Search
- Algorithms 4th - 5.3 Substring Search
- 有限状态机之 KMP 字符匹配算法 https://labuladong.gitee.io/algo/3/27/99/
- KMP - Algorithm Visualizer https://algorithm-visualizer.org/dynamic-programming/knuth-morris-pratts-string-search
- 1143. 最长公共子序列 https://leetcode-cn.com/problems/longest-common-subsequence/
- 14. 最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/
- https://algorithm-visualizer.org/dynamic-programming/z-string-search

KMP 字符串查找算法，用于在一个文本串 S 内查找一个模式串 P 的出现位置，这个算法由 Donald Knuth、James H. Morris、Vaughan Pratt 三人于 1977 年联合发表，故取这 3 人的姓氏命名此算法。

Knuth D.E., Morris J.H., and Pratt V.R., Fast pattern matching in strings, SIAM Journal on Computing, 6(2), 323-350, 1977.


暴力搜索算法中，是两层简单的循环结构。先从 S 第 1 个字符位置开始逐字与 P 字符比较，发现不匹配时，再从 S 第 2 个字符位置开始逐字比较，依次处理直到整个 S 字符串处理完成，算法复杂度是 O(mn)。

如果字符串中重复的字符比较多，或者 P 中有更合适的匹配位置却没有相应处理，该算法就显得很蠢，比如如下数据：

    s = "shellllama" p = "llam"

KMP 算法的不同之处在于，它会花费空间来记录一些信息，这是一处反馈机制，是动态规划算法的特性，在上述情况中就会显得很聪明。

相比暴力的逐字搜索，KMP 算法不用对 S 字符的每一个位置的字符串进行一轮比较，永不回退处理 S 输入字符串。另一个角度来说，KMP 算法回退的是 PMT 查询表的数据。

如果文本串的长度为 n，模式串的长度为 m，那么匹配过程的时间复杂度为 O(n)，整体时间复杂度为 O(m + n)。

而 KMP 算法通过引入一个前缀和后缀的公共字串长度表，也称为部分匹配表 PMT - Partial Match Table，这个表的构建就是 KMP 算法的核心思想：监测到不匹配时，P 提供足够的信息来确定下一次应该从什么位置开始搜索。跳过一些不必要比较的字符串，从而提高了搜索效率，所以把构建出来的这个表称作 next_table 或者 dp_table 都是合适的。

首先了解一些概念：

前缀：以第一个字符开始，但是不包含最后的字符，列如 "abc" 的前缀有 "a" 和 "ab"。
后缀：以最后的字符开始，但是不包含第一个字符，列如 "abc" 的后缀有 "c" 和 "bc"。
最长公共子串：Longest Common Substring 是指两个字符串中最长连续相同的子串长度。 例如 “1AB2345CD” 和 “12345EF” 的最长公共子串为 “2345”，这也是一道算法题目。
子序列：由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。

以 Algorithm Visualizer 演示的数据为例：

    S = "AAAABAABAAAABAAABAAAA";
    P = "AAAABAAA";

    S = "Monkey like banana.";
    P = "anana";

首先，KMP 需要根据 P 生成一个 PMT 数据表，以供匹配失败时确定下一个位置，PMT 生成规则，以前缀公共字串长度为例，PMT 每个值是 P 对应位置的匹配前缀字符数量，前缀长度，所以开始位置总是 0：

    PMT: 0 1 2 3 0 1 2 3      | Group
      P: A A A A B A A A      |   A

    PMT: 0 1 0 0              | Group
      P: l l a m              |   B

    PMT: 0 0 1 2              | Group
      P: n a n a              |   C

以上 A、B、C 三组数据产生的 PMT 如何使用呢？还是拿 P 去匹配 S 字符串，从头开始，以 B 组数据为例：

    S: s h e l l l l a m a
       1 2 3 4 5 6 7 8 9 0

从 S 开头检索，直到位置 4 出现第一个匹配字符，继续位置 5 出现第二个匹配字符。注意，每出现匹配表示 PMT 数据获取的位置状态也在变化。

检索第 6 个字符时，出现不匹配，这时 PMT 的数据就起作用了。如果是 Violent Search 算法，肯定是推倒重来，从 S 的第 2 个字符开始检索。但是 KMP 算法因为提前准备好了 PMT 数据，第一次出现不匹配时，知道可以从 PMT 表查询到前面可以匹配的前缀长度，即上一个位置有一个目标前缀长度为 1 的匹配子串。

从而可以直接修改 PMT 状态，或者叫做回退 PMT 数据指针位置，从而避免了在 S 字符串中进行回退操作。通常，输入数据中 S 会比 P 大得多，这也就是 KMP 的算法优点所在：高频前缀字符串的优化搜索算法。

```py
class KnuthMorrisPratt:

    def gen_next(self, p):

        k = 0 # prefix pointer
        l = 1 # postfix pointer
        _next = [0] * len(p)
        for l in range(l, len(p)):
            while k>0 and p[k] != p[l]:
                k = _next[k-1]
            if p[l] == p[k]: k += 1
            _next[l] = k
        return _next

    def search(self, s, p):
        global ismain

        _next = self.gen_next(p)

        j = 0 # pattern pointer
        i = 0 # string pointer
        for i in range(i, len(s)):
            while j>0 and p[j] != s[i]:
                j = _next[j-1]
            if p[j] == s[i]:
                j += 1
            if j == len(p):
                ismain and print(f"""\
                    PMT: {_next}
                      P: {p}
                      S: {s}
                     at: {"^"*len(p):>{i+1}}|<== end pos: {i}
                    """)
                return i - j + 1
        return -1

ismain = True or __name__ == '__main__'
if ismain:
    v = KnuthMorrisPratt()
    v.search(p="llam",    s="shellllama")
    v.search(p="bib",     s="bilibili")
    v.search(p="bibi",    s="ilibili")
    v.search(p="AAAABAAA",s="AAAABAABAAAABAAABAAAA")
    v.search(p="loog",    s="loon")
    v.search(p="loon",    s="loon")
    v.search(p="loon",    s="loo")
```

# 🚩 Jitter Search

我曾经以不正确的姿势学习研究了 KMP，但是被众说纷纭文章搞头脑迷糊了。看着别人撤了一堆的名词术语，又是动态规划，又是状态图，又是状态转换什么的，别人就是懂得多。感觉真是后悔学了中文，因为每个字我都懂，但就是不清楚别人在说什么😂

我觉得 KMP 搜索算法应该有更好的学习姿势，不需要扯概念扯术语，只需要直觉，Algorithm Visualizer 也许是一个可以在直觉上增加理解的好工具。

代码仓库可以通过以下链接或克隆获取：

    git clone git@github.com:jimboyeah/jitter_search.git
    git clone https://github.com/jimboyeah/jitter_search.git

以上是学习库 Algorithms.md 分类文档中关于字符串搜索算法的部分，因为有离线整理资料的习惯，只会挑选部分公开发布。使用的工具是 Sublime Text + Git，感谢作者的共享软件，真的非常高效。


KMP 主要思想是当出现字符串不匹配时，可以通过 PMT 获释已经匹配的前后缀长度，并利用这些长度信息避免从头再去做匹配，考虑 PMT 查询表的构建，KMP 本质上还是线性搜索算法。

实际上，KMP 算法并不比 C 库函数 strstr() 快多少，因为在缺少重复前缀后缀的情况下，KMP 算法并不占优势。

糟糕的情况是 P 长度 S 相近时，这种算法反而表现更差，花大力气生成的 PMT 数据几乎没什么作用。

考虑到 KMP 算法的不足，这里设计了一种带有二分法思维的搜索算法 Jitter Search：

- 第一步，在 S 串中找出所有 P 第一个字符出现的位置，设为 J 集合；
- 第二步，选择一个整数 jitter，比如 P 串长度的一半；
- 第三步，将 J 集合中所有位置偏移 jitter 处且与 P 串相应位置的值相同的过滤出来；
- 重复，这种操作，直到完整匹配结果。

这种算法的优点是结合了二分法及低频过滤器思维，可以高效处理非频繁重复的字符串搜索。空间上需要占用一个 max(S, p) 的数组空间来存储索引值。

以下为 Python 实现代码，在应用中，可以对首字符高频重复的情况做优化：

```py
##
## jitter search by Jeango
## 2020/3/18 20:42
##
class JitterSearch:

    def search(self, s, p):

        if len(s)<len(p): return [-1]

        j = []
        i = 0 # string pointer
        for i in range(i, len(s)-len(p)+1):
            if p[0] == s[i]:
                j.append(i)

        jt = len(p) - 1
        while jt>0:
            for i in range(0, len(j)):
                if j[i] < 0: continue
                if s[j[i]+jt] != p[jt]:
                    j[i] = -1
            jt -=1

        ret = []
        for i in j:
            if i<0: continue
            ret.append(i)
            ismain and print(f"""\
                  P: {p}
                  S: {s}
                 at: {"^"*len(p):>{i+len(p)}} pos: {ret}
                """)
        if len(ret)==0: ret = [-1]
        return ret
        
ismain = __name__ == '__main__'

if ismain:
    v = JitterSearch()
    v.search(p="llam",    s="shellllama")
    v.search(p="ma",      s="shellllama")
    v.search(p="bib",     s="bilibili")
    v.search(p="ili",     s="bilibili")
    v.search(p="bibi",    s="ilibili")
    v.search(p="AAAABAAA",s="AAAABAABAAAABAAABAAAA")
    v.search(p="AAAA",    s="AAAABAABAAAABAAABAAAA")
    v.search(p="loog",    s="loon")
    v.search(p="loon",    s="loon")
    v.search(p="loon",    s="loo")
```

输出结果：

      P: llam
      S: shellllama
     at:      ^^^^ pos: [5]
    
      P: ma
      S: shellllama
     at:         ^^ pos: [8]
    
      P: ili
      S: bilibili
     at:  ^^^ pos: [1]
    
      P: ili
      S: bilibili
     at:      ^^^ pos: [1, 5]
     ...


# 🚩 Sunday Search
- 28. [Easy] implement strStr() https://leetcode-cn.com/problems/implement-strstr/
- 187. [Medium] Repeated DNA Sequences https://leetcode.com/problems/repeated-dna-sequences/

1977 年，同时期德克萨斯大学 Robert S. Boyer 教授和 J Strother Moore 教授发明了一种新的字符串匹配算法，简称 BM 算法。该算法从模式串的尾部开始匹配，且最坏情况下的时间复杂度为 O(N)。在实践中，比 KMP 从模式串的开头开始匹配的算法效能高，但是这两种算法都需要对 P 进行预处理，算法实现复杂，大大降低的实用性。

A fast string searching algorithm R. Boyer, J. S. Moore Published 1977 Computer Science Commun.

Daniel M. Sunday, A very fast substring search algorithm, Communications of the ACM, v.33 n.8, p.132-142, Aug. 1990

Horspool R.N., 1980, Practical fast searching in strings, Software - Practice & Experience, 10(6):501-506


但 BM 算法也还不是现有字符串查找算法中最快的算法，更快的查找算法是 Sunday 算法，由 Daniel M.Sunday 在 1990 年提出，它的思想跟 BM 算法很相似，只不过 Sunday 算法是从前往后匹配，逻辑如下：

- 从头开始匹配，失败时关注的是 S 文本串中按 P 匹配长度的下一位置的字符，记为 M；
- 如果该字符不在模式串 P 中，这表示 M 位置之前不可能匹配，则下一轮匹配开始位置在偏移 len(P) 距离后；
- 如果该字符出现在模式 P **最右侧位置** Q 中，则将 Q 位置与 M 位置对齐后，再开始新一轮匹配搜索。

从右侧检索 P 中的字符位置这一点很关键，这可以保证对齐 S 序列中的 M 位置时不会错失可能匹配的子串。

例如，以下一组数据：

    S = "aloong"
    P = "loon"

第一轮搜索 l:a 就不匹配，所以直接找到 len(P) 位置的 “n”，确认它在 P 串最右侧的位置，字符索引位置按 0 为起始值：

    S = a l o o n g        >>>   S = a l o o n g
        ^       ^M = 4     >>>         ^     ^M = 4
    P = l o o n            >>>   P =   l o o n 
        ^     ^Q = 3       >>>         ^     ^Q = 3

然后，再按对齐后的序列进入第二轮搜索，如果 M 位置的字符没有出现在 P 序列中，这种情况就是最好处理的，也是最有效率的，直接就只可以跳过一长段不可能匹配的子序列，大大提高的检索效率。同时，与 KMP 等算法相比，还可以不事先建立索引表。

```py
class Sunday:

    def lastOf(self, p, c):
        l = len(p)
        while l>-1:
            l -= 1
            if p[l] == c:
                break
        return l

    def search(self, s, p):

        i = 0 # string pointer
        j = 0 # pattern pointer
        while i < len(s):
            if s[i] != p[j]:
                # print(f"i,j = {i},{j} p:{len(p)} s:{len(s)}")
                if i+j+1 >= len(s): break
                if (n := i+len(p)-j) >= len(s): break
                k = self.lastOf(p, s[n])
                # print(f"k = {k} n = {n} {s[n]}:p{p}")
                if k==-1:
                    i += len(p) - j + 1
                else:
                    i += len(p) - j - k
                j = 0
            elif j+1 == len(p):
                ismain and print(f"""\
                      P: {p}
                      S: {s}
                     at: {"^"*len(p):>{i+1}} end pos: {i}
                    """)
                return i-len(p) + 1
            else:
                i += 1
                j += 1
        ismain and print(f"S: {s} doesn't has P: {p}")
        return -1

ismain = __name__ == '__main__'

if __name__ == '__main__':
    v = Sunday()
    v.search(p="llam",    s="shellllama")
    v.search(p="loon",    s="aloong")
    v.search(p="loog",    s="loon")
    v.search(p="loon",    s="loon")
    v.search(p="loon",    s="loo")
    v.search(p="ma",      s="shellllama")
    v.search(p="bib",     s="bilibili")
    v.search(p="ili",     s="bilibili")
    v.search(p="bibi",    s="ilibili")
    v.search(p="AAAABAAA",s="AAAABAABAAAABAAABAAAA")
    v.search(p="AAAA",    s="AAAABAABAAAABAAABAAAA")
```

输出结果：

      P: llam
      S: shellllama
     at:      ^^^^ end pos: 8

      P: loon
      S: aloong
     at:  ^^^^ end pos: 4

      P: loon
      S: loon
     at: ^^^^ end pos: 3

      P: ma
      S: shellllama
     at:         ^^ end pos: 9

      P: ili
      S: bilibili
     at:  ^^^ end pos: 3

      P: AAAABAAA
      S: AAAABAABAAAABAAABAAAA
     at:         ^^^^^^^^ end pos: 15

      P: AAAA
      S: AAAABAABAAAABAAABAAAA
     at: ^^^^ end pos: 3

Sunday 算法就像在移动一个匹配窗口，连续匹配时窗口就放大，匹配失败就根据 M 指示的字符来调整新窗口位置。实际上是对 BM 算法的优化，并且它更简单易实现。

Sunday 算法可以先对 P 建立查询表，再对 S 进行搜索。那表时的扫描顺序没有限制，为了提高最坏情况下的算法效率，可以对 P 字符按照其出现的概率从小到大的顺序扫描，这样能尽早地确定失配与否。

Horspool 算法的思想有个创新之处就是模式串是从右向左进行比较的，在不匹配情况处理手法和 Sunday 有类似特征。


# 🚩 Tests for String Search

最后，是以上几种字符串搜索算法的测试用例：

```py
from sunday_search import Sunday
from brute_search import Violent
from kmp_search import KnuthMorrisPratt as KMP
from jitter_search import JitterSearch

tests = [
    dict(c=5,  p="llam",    s="shellllama"),
    dict(c=1,  p="loon",    s="aloong"),
    dict(c=-1, p="loog",    s="loon"),
    dict(c=0,  p="loon",    s="loon"),
    dict(c=-1, p="loon",    s="loo"),
    dict(c=8,  p="ma",      s="shellllama"),
    dict(c=-1, p="bib",     s="bilibili"),
    dict(c=1,  p="ili",     s="bilibili"),
    dict(c=-1, p="bibi",    s="ilibili"),
    dict(c=8,  p="AAAABAAA",s="AAAABAABAAAABAAABAAAA"),
    dict(c=0,  p="AAAA",    s="AAAABAABAAAABAAABAAAA"),
    dict(c=35, p="Type",    s="git clone git@github.com:Microsoft/TypeScript-Sublime-Plugin"),
    dict(c=-1, p="Complexy",s="Denial of Service via Algorithmic Complexity Attack"),
    dict(c=31, p="Hash",    s="New Second-Preimage Attacks on Hash Functions"),
    dict(c=31, p="4th",     s="Robert Sedgewick - Algorithms, 4th Edition"),
    dict(c=18, p="Closed",  s="Open Hash Tables (Closed Addressing)"),
    dict(c=20, p="Open",    s="Closed Hash Tables (Open Addressing)"),
    dict(c=20, p="using",   s="Closed Hash Tables, using buckets"),
    dict(c=27, p="3rd",     s="Introduction to Algorithms 3rd Edition"),
    dict(c=5,  p="Fuzz",    s=u"模糊测试（Fuzz Testing）是一种自动化的软件测试技术"),
    dict(c=11, p="？",      s=u"软件测试中如何测试算法？"),
]

def search_assert(s, p, c, d):
    ret = d(s, p)
    if isinstance(ret, list) and len(ret)>0: ret = ret[0]
    if c == ret:
        if c == -1:
            print(f"✅pass: [{ret:>3}] ==> [{p}] is not in [{s}]")
        else:
            print(f"✅pass: [{ret:>3}] ==> [{p}] is in [{s}]")
    else:
        print(f"⛔fail: [{ret:>3}] expect [{c}] ==> [{p}] is in [{s}]")

def test():
    print("Sunday search test:")
    alg = Sunday()
    for case in tests:
        search_assert(**case, d=alg.search)

    print("Violent search test:")
    alg = Violent()
    for case in tests:
        search_assert(**case, d=alg.search)

    print("KMP search test:")
    alg = KMP()
    for case in tests:
        search_assert(**case, d=alg.search)

    print("Jitter search test:")
    alg = JitterSearch()
    for case in tests:
        search_assert(**case, d=alg.search)

if __name__ == '__main__':
    test()
```


# 🚩 Repeated DNA Sequences
- 187. [Medium] Repeated DNA Sequences https://leetcode.com/problems/repeated-dna-sequences/

187. Repeated DNA Sequences
Medium

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.
 

Example 1:

    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:

    Input: s = "AAAAAAAAAAAAA"
    Output: ["AAAAAAAAAA"]
 

Constraints:

    1 <= s.length <= 105
    s[i] is either 'A', 'C', 'G', or 'T'.

    
有人偷懒，借助标准库的哈希映射来计算重复串：

```cpp
class Solution {
public:
    vector<string> findRepeatedDnaSequences(string s) 
    {
        if(s.length()<0)
        {
            return {};
        }
        unordered_map<string,int>mp;
        vector<string>v;
        //counting frequency of each substring
        for(int i=0;i<s.length();i++)
        {
            mp[s.substr(i,10)]++;
        }
        //if frequency of any substring is >1 then store
        for(auto it=mp.begin();it!=mp.end();it++)
        {
            if(it->second>1)
            {
                v.push_back(it->first);
            }
        }
        return v;
    }
};
```

Python 偷懒版本，使用集合计数器，字典对象来处理：

```py
import collections

class Solution:
    def findRepeatedDnaSequences(self, s: str) -> list[str]:
        seen = collections.Counter()
        for idx, char in enumerate(s[:-9]):
            substring = s[idx:idx+10]
            seen[substring]+=1
        return [substring for substring, count in seen.items() if count > 1]

s = Solution()
dna = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
print( s.findRepeatedDnaSequences(dna) )
```


# 🚩 Hash Table
- https://www.cnblogs.com/gaochundong/p/hashtable_and_perfect_hashing.html
- https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm
- Hash Table (Open Addressing & Closed Addressing) https://visualgo.net/en/hashtable
- 哈希洪水攻击（Hash-Flooding Attack）https://www.zhihu.com/question/286529973
- Denial of Service via Algorithmic Complexity Attack https://www.usenix.org/legacy/events/sec03/tech/full_papers/crosby/crosby.pdf
- SHA256算法原理及其实现 https://zhuanlan.zhihu.com/p/94619052
- FIPS 180-2, Secure Hash Standard http://staff.ustc.edu.cn/~whli/cryptography/materials/fips180-2withchangenotice.pdf
- FIPS 180-4, Secure Hash Standard https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf
- New Second-Preimage Attacks on Hash Functions https://hal.archives-ouvertes.fr/hal-01654410/document
- Robert Sedgewick - Algorithms, 4th Edition https://algs4.cs.princeton.edu/34hash/
- Robert Sedgewick - Algorithms, 4th Edition - 3.4 Hash Tables https://algs4.cs.princeton.edu/34hash/
- Open Hash Tables (Closed Addressing) https://www.cs.usfca.edu/~galles/visualization/OpenHash.html
- Closed Hash Tables (Open Addressing) https://www.cs.usfca.edu/~galles/visualization/ClosedHash.html
- Closed Hash Tables, using buckets https://www.cs.usfca.edu/~galles/visualization/ClosedHashBucket.html
- Introduction to Algorithms 3rd Edition - 13 Hash Tables, The MIT Press

Hash Tables 哈希表是基于`哈希函数`实现快速插入与查找的一种数据结构，同时又是一种搜索算法的解决方案，几乎到处都有它的身影，从操作系统底层，到各种语言的标准库的实现。

Hash 一般翻译做散列、杂凑，或音译为哈希，是把任意长度的输入，pre-image，通过散列算法变换成固定长度的输出，该输出就是散列值。这种转换是一种压缩映射，也就是，散列值的空间通常远小于输入的空间，即作用域远大于值域，所以不可能从散列值来确定唯一的输入值。

哈希表的理想的目标是希望不经过任何比较，一次存取便能得到所查的记录，这必须建立存储位置和 key 之间的映射关系，用函数 f(key)=hash 表示，使每个关键字和一个唯一的存储位置相对应，称这个对应关系为 Hash 哈希函数，函数返回的值称为哈希，按这个思想建立的表为哈希表。

因为 key 和数据地址之间有映射关系，所以不管哈希表有多少数据，它的数据插入和搜索几乎可以做到 O(1) 时间复杂度，包括一些删除操作。

基于哈希表的这种能力，又衍生了其它更多的哈希数据结构与应用，如各种语言中的 HashMap、HashSet 等，最简单的就是使用 JavaScript 对象提代的字典对象功能实现：

```js
let dictionary = {}, key = 'k';
for(let i in new Array(10).fill(1)){
    dictionary[key+=i] = 100;
}
console.log(dictionary['k0123456']);
// 100
```

哈希表作为基础的数据结构、快速插入、快速查找等技术的合体，最核心的部分就是哈希函数，名字虽然奇怪，但本质就如其名字提示的那样，是关系映射，key --hash()--> address，通过 key 直接达到数据的。上面的 dictionary 演示，是哈希函数的扩展应用，它的影射关系就是 key-value，还是建立在哈希函数的基础功能之上。

理解核心的部分在于哈希函数这一点，对于理解哈希表、字典对象，或者其它基于哈希函数的数据结构很重要。这样才不会以对 `hash("xyz") = hash("abc")` 这样的等价关系迷惑，只需要定义这样一个哈希函数 `hash(s) = len(s)` 即可，这就是哈希函数的简单理解。也就是说，对于 "xyz" 和 "abc" 这两个字符串，即两个 hash key 它们的哈希值 `hash code` 同样为 3，如果在哈希表中保存数据，则会分配到同一个 Slot 内。哈希表的 Slot 可以理解为数组的一个元素，或者几个元素为一组的存储空间。当两个 key 得到相同的哈希值时，表示哈希冲突，即同一个 Slot 中要保存多个数据，后面再来讨论如何解决哈希冲突问题。 

和一般基于比较的查找算法不同，如线性查找、插值查找，一般的线性表，树中，记录在结构中的相对位置是随机的，即和记录的关键字之间不存在确定的关系，因此，在结构中查找记录时需进行一系列和关键字的比较。这一类查找方法建立在“比较“的基础上，查找的效率依赖于查找过程中所进行的比较次数。

如果哈希表不采用 hash 映射函数，而只是在一个数组中搜索的话，也就是普通的搜索算法，不能在查找速度上有质的提升。可以考虑一下为什么会有这样的差别，数组虽然可以随机读取，但数组下标是随机的，它与元素值没有任何关系，要逐次访问各个元素才清楚元素的内容。而引入 hash 函数映射后，就限定什么样的 key 对应特定的下标位置。这样，键值和 hash 函数，就可以具备相当的先验知识，来选择预先规则指定的下标获取相应的元素。在没有 hash 碰撞的前提下，只需要选择一次，就可以保证该下标指向的元素是我们想要的元素，这绝对是搜索方案的跨越式的进步。

Hash 函数的设计原则：

- 一致性：如果 a==b 则 hash(a)==hash(b)。
- 高效性：计算高效便捷，O(1)，相当直接使用动态数组，在适当的情况下 resize。
- 均匀性：哈希值的分布越均匀越好，这就是对取模法中模为质数的原因。

哈希函数的另一个重要应用就是在安全领域，通过哈希函数，如 sha256，生成那些不方便明文保存的数据，如密码，生成相应的哈希摘要后，并不能逆向计算出密码，但是应用系统可以根据同样的哈希函数去验证密码是不正确。例如，用户登陆的时候，输入密码字符串，如果该密码字符串的 hash 值与系统保存的 hash 值一致，那么就认为用户输入了正确的密码。就算黑客闯入了数据库中的密码记录，也只能看到密码的 hash 值，从而保证密码的隐秘性。

不同的哈希函数具有的安全性也不同，例如目前破解 MD5 哈希函数做得较好的结果是王小云教授，实现了 MD5 哈希碰撞攻击。目前最好的结果是，针对前缀碰撞(chosen-prefix collsion)，离完全实现次原像攻击还有一定距离。

哈希攻击的难度分级：

- 给出 hash(A) 找到 A，即逆向破解；
- 原像攻击(preimage attack)，给定 y=hash(A)，找到 B，使得 hash(B)=y；
- 次原像攻击(second-preimage attack)，给定 A，找到 B，使得 hash(A)=hash(B)；
- 碰撞攻击(collsion attack），找到 A, B，使得 hash(A)=hash(B)；

Hash 表也确实有缺点：

- 基于数组，一旦数组定义分配好内存后，要想再次更改是比较耗时的，通常需要向系统重新申请内存空间。
- 当数据太满时，某些类型的哈希表性能可能会急剧下降，因此需要相当准确控制表的大小，这也可能涉及内存调整。
- 哈希表是无序的，没有方便的方法来进行遍历，如果需要这个功能，不能使用 Hash Table。

如果不需要按顺序访问，并且可以提前预测数据的大小，那么哈希表在速度和方便性方面是无与伦比的。

哈希函数的设计：

- 除法哈希法（The Division Method），可以表示为 hash(key) = key mod m
- 乘法哈希法（The Multiplication Method），可以表示为 hash(key) = floor( m * ( A * key mod 1) )
- 全域哈希法（Universal Hashing），可以表示为 hasha,b(key) = ((a * key + b) mod p) mod m

在向哈希表中插入元素时，如果所有的元素全部被哈希到同一个桶中，此时数据的存储实际上就是一个链表，那么平均的查找时间为 Θ(n) 。而实际上，任何一个特定的哈希函数都有可能出现这种最坏情况，唯一有效的改进方法就是随机地选择哈希函数，使之独立于要存储的元素。这种方法称`作全域哈希`。

全域哈希的基本思想是在执行开始时，从一组哈希函数中，随机地抽取一个作为要使用的哈希函数。就像在快速排序中一样，随机化保证了没有哪一种输入会始终导致最坏情况的发生。同时，随机化也使得即使是对同一个输入，算法在每一次执行时的情况也都不一样。这样就确保了对于任何输入，算法都具有较好的平均运行情况。

`完美哈希`（Perfect Hashing），当关键字的集合是一个不变的静态集合（Static）时，哈希技术可以取得出色的 Worst Case 状态性能。如果某一种哈希技术在进行查找时，其最坏情况的内存访问次数为 O(1) 时，则称其为完美哈希（Perfect Hashing）。

设计完美哈希的基本思想是利用两级的哈希策略，而每一级上都使用全域哈希（Univeral Hashing）。

根据不同需求，哈希表的构造方法有多种策略：

- 直接寻址 Direct-address tables，例如：1 ~ 100 岁的人口数统计数据，以年龄作为 key，哈希函数取关键字自身。
- 数字分析法，例如，一组生日数据，年份重复可能较大，可以取月份和日期作为 key 对应的地址。
- 平方取中法，对 key 进行平方运算，然后取中间几位为哈希地址。
- 折叠法 Folding，有移位叠加和间隔叠加，将 key 分割成相同位数的多部分，最后一部分可以不同，取它们的叠加和作为哈希地址，丢弃进位。
- 取余数法，`H(key)=key MOD p (p<=m)`，数据表长 m，将 key 除以 p 所得余数为哈希地址。
- 随机数法，`H(key)=random(key)`，构造一个随机函数，取关键字的随机函数值为它的哈希地址，常用于关键字长度不等时。

插入新数据时，可能会遇到 Hash Table 中已经占用相同的 key，例如人口统计数据，使用年龄作为 key，相有多个人同龄时就会出现这种情况，称为哈希冲突 Hash Collision。

哈希冲突是导致操作被破坏的一个因素，如果没有冲突发生，则元素被成功插入。如果发生了冲突，则需要判断冲突的原因，因此，哈希冲突提高了操作的代价，哈希函数设计的一个目标就是要尽可能减低冲突的发生。

处理哈希冲突的方式有两种：避免和解决，即冲突避免机制（Collision Avoidance）和冲突解决机制（Collision Resolution）。

避免哈希冲突的一个方法就是选择合适的哈希函数，哈希函数中的冲突发生的几率与数据的分布有关。

实现 Hash Table 就必需要解决地址冲突问题，即为冲突的 key 映射到一个可用的地址上。

哈希冲突的常用解决方案：

- Closed Hashing
    - Open Addressing `Hi=(H(key)+di) MOD m i=1,2,...,k(k<=m-1)`，其中 m 为表长，di 为增量序列
        - Linear Probing 线性探测，di 值可能为 1,2,3,...m-1，称线性探测再散列。
        - Quadratic Probing 平方探测，di 取值可能为 1,-1,2,-2,4,-4,9,-9,16,-16,...k * k,-k * k (k<=m/2)。
        - Random Probing 随机探测，di 取值为伪随机数列。
        - Double Hashing 双重哈希
    - Bucket Hashing/Addressing 哈希桶
    - Rehashing 二度哈希
    - Overflow area 建立一个公共溢出区
- Open Hashing
    - Seperate Chaining 链接技术，通过链表扩展
    - Hash tree 使用哈希树扩展

所谓 Closed Hashing，是因为哈希冲突后，没有在哈希表外开拓空间，而是顺延某个位置来存放，即开放寻址 Open Addressing，还是在一个主表空间。

至于 Open Hashing，则在哈希冲突时，通过主表的 Slot 扩展链表来提供新空间，它是在哈希表之外建立的新空间，所以称为开放哈希。

最简单的一种开放寻址法实现就是线性探测，步骤如下：

- 插入新的元素时，使用哈希函数找到哈希表中的目标位置；
- 检查哈希表中该位置是否已经存在元素。如果该位置内容为空，则插入并返回，否则转向步骤 3。
- 如果该位置为 i，则检查 i+1 是否为空，如果已被占用，则检查 i+2，依此类推，直到找到一个内容为空的位置。
- 如果备用地址全部用完，如果保留有 overflow 溢出区，则可以将新元素存入最后的溢出区。

最后一步，递增的寻址即为线性探测的含义，这种策略需要在设计哈希函数时哈希表的空间需要足够多，这样才会有余的空间解决哈希冲突。

在使用哈希表时，也需要估计好大概容量，因为对哈希表进行扩充是以性能损耗为代价的操作，应该预先估计哈希表中最有可能容纳的元素数量，在初始化哈希表时指定合适的容量，以避免不必要的扩充。

另外，链表扩展也是比较常用的策略，比如 Java 的 HashMap 就是基于链地址法的哈希表结构，此时哈希主表中每个 slot 都对应一个链表，相当于一个 bucket，可以容纳多个数据。

虽然链地址法是一种很好的处理哈希冲突的方法，但是在一些极端情况下链地址法会导致哈希表退化成链表，即失去哈希快速搜索的能力。这种情况也是哈希洪水攻击的原理，哈希退化后，后续的操作会消耗大量的 CPU 时间，大量的操作就可能导致机制失去响应。

哈希洪水攻击（Hash-Flooding Attack）也是一种拒绝服务攻击（Denial of Service），是基于算法复杂度发起的一种攻击，一旦后端接口存在合适的攻击面，攻击者就能轻松让整台服务器陷入瘫痪。

2003年，Scott A. Crosby 和 Dan S. Wallach 两位研究人员发表了一篇论文：Denial of Service via Algorithmic Complexity Attacks。在这篇论文里他们首次提出：既然有些数据结构的最差运行时间这么废物，我们有没有可能通过算法上的漏洞，强行构造出一个最差情况，让服务器把全部的资源都浪费在处理这个最差情况上？答案当然是有的。



# 🚩 Prime Sieve
- 求十亿内所有质数的和，怎么做最快? https://www.zhihu.com/question/29580448
- 算法基础-前缀和 https://zhuanlan.zhihu.com/p/117569086
- https://www.wolframalpha.com/input/?i=prime+below+1billion
- https://leetcode-cn.com/problems/count-primes/solution/ji-yu-ai-shi-shai-de-dong-tai-gui-hua-fa-gf82/
- Summation of primes https://projecteuler.net/problem=10
- 什么是 min_25 筛 https://www.cnblogs.com/crashed/p/12888263.html
- 数学体系概述 https://www.sohu.com/a/332830388_120054637
- Mathematics: A Very Short Introduction https://book4you.org/book/826226/fdbdff
- The Princeton Companion to Mathematics https://book4you.org/book/674867/08c6c1
- The Calculus Lifesaver https://book4you.org/book/680017/92d236
- Thomas' Calculus https://book4you.org/book/3518261/0a6b3d
- 欧拉乘积公式的推导过程 https://blog.csdn.net/pang9998/article/details/96218600

所谓质数 Prime 即指那些只能被 1 和自身整除的且大于 1 的自然数，例如 2、3、5、7、11。很明显，除了 2，或者说，所有大于 5 的质数中，个位数只有 1, 3, 7, 9。而且，质数满足`唯一分解定理` unique decomposition theorem：任一大于 1 的自然数，要么本身是质数，要么可以分解为几个质数之积，且这种分解是唯一的。

    N = p1^a1 * p2^a2 * ··· * pn^an

    4 = 2^2
    6 = 2^1 * 3^1
    8 = 2^3
    16= 2^4

质数这个概念人类已经研究了上千年，但是的具体的起源却不得而知。早在公元前 300 年，欧几里得就在他的著作元素中证明了有无穷多个质数，同时也证明了任何一个整数都能够被某一个质数整除。时至今日，质数在计算机科学这样一个和数学联系紧密的学科中也有这个广泛的应用，比如布隆过滤器、伪随机数、RSA加密算法等等，所以掌握质数的特性以及应用能够帮助我们解决不少实际问题。

质数的分布随着自然数增长而减小：

- 10 以内 40%
- 100 以内 25%
- 1000 以内 16.8%
- 10000 以内 12.29%
- 100000 以内 9.592%
- 1000000 以内 7.8498%
- 10000000 以内 6.64579%
- 100000000 一亿以内 5.761455%
- 1000000000 十亿以内 5.0847534%

虽然，出现频率在下降，但是自然数无限，也就不能厉不确定质数是否数量有限。

欧拉发现的质数分布公式 f(n)=n^2-n+41 所在的线性空间上存在大量质数。


在 400 年前，一个法国教师马林·默舍尼，发现了一种质数，人们把它叫默舍尼质数。用 2^n-1 来寻找质数，将所有符合这个条件的质数叫做默舍尼质数。

但尽管如此好用的模型也有 2 个缺点：

- 如果二的幂次 n 不是质数，这个模式根本无效。如 2^4-1 = 15 = 3x15 就不是质数。
- 即使幂次是质数，公式仍然可能无效，如 2^11-1 = 2047 = 23x89。

以下是两种最基本的线性筛选算法，其一，埃氏筛 the Sieve of Eratosthenes，埃拉托色尼筛。

埃氏筛法过滤自然数中的质数，基本思想是从 2 开始，将每个质数的倍数都标记成合数，以达到筛选质数的目的，时间复杂度 O(nloglogn)。

```js
function LinearSieve(lim:number){
    let can = new Array(lim);
    for (let i = 2; i <= lim; i++){
        can[i] = 1;
    }
    for (let i = 2; i <= lim; i++){
        for (let j = 2*i; j <= lim; j += i){
            delete can[j];
        }
    }
    for (let i=2; i <= lim; i++){
        if (1 == can[i]) can[i] = i;
    }
    return can.filter( it => !!it);
}
```

埃氏筛法的缺陷是会对一个合数多次筛选，例如 30 = 2 * 15 = 3 * 10 = 5 * 6 = 6 * 5 …… 用它的`最小质因子`来筛选即可，这便是欧拉筛法，时间复杂度和空间复杂度均为 O(n)。

欧拉筛法在埃氏筛法的基础上，让每个合数只被它的最小质因子筛选一次，以达到不重复的目的，最小质因子就是最有效的筛选条件。

```js
function LinearSieve(max:number){
    let prime = new Array(max/4+25).fill(0);
    let visit = new Array(max).fill(0);
    for (let i = 2; i <= max; i++) {
        if (!visit[i]) {
            prime[++prime[0]] = i;
        }
        for (let j = 1; j <=prime[0] && i*prime[j] <= max; j++) {
            visit[i * prime[j]] = 1;
            if (i % prime[j] == 0) {
                break;
            }
        }
    }
    prime[0] = 0;
    return prime.filter(it => it>0);
}
```

两数组的作用：

- prime 质数表，首个元素记录现有质数个数；
- visit 非质数标记表，下标与自然数对应，如 visit[2] 对应标记自然数 2 是否为非质数， 0 和 1 不作处理。

注意内部的循环，遍历过程中标记后面那些非质数，即可以整除质数的数，其中的判断条件 `i % prime[j] == 0`，解释为 i 是已遍历质数的倍数时，即 i 为最小质因子就跳过内循环，因为后面还会重复它。

解析代码运行过程：

- 外循环 i = 2，判断未标记为非质数，则增加一个质数 `2`；
    - 内循环，j = 1，prime[j] = 2，标记 visit[2 * 2] 为非质数，并打断内循环，不必内循环到 2，同时质数记录也只有 1 个 prime[0] = 1；
- 外循环 i = 3，判断未标记为非质数，则增加一个质数 `3`；
    - 内循环，j = 1, prime[j] = 2，标记 visit[3 * 2] 为非质数；
    - 内循环，j = 2, prime[j] = 3，标记 visit[3 * 3] 为非质数，并打断内循环，当前质数记录也只有 2 个，prime[0] = 2；
- 外循环 i = 4，判断已经标记为非质数；
    - 内循环，j = 1, prime[j] = 2，标记 visit[4 * 2] 为非质数；
    - 内循环，j = 2, prime[j] = 3，标记 visit[4 * 3] 为非质数，结束内循环，当前质数记录只有 2 个，prime[0] = 2；
- 外循环 i = 5，判断未曾标记为非质数，则增加一个质数 `5`；
    - 内循环，j = 1, prime[j] = 2，标记 visit[5 * 2] 为非质数；
    - 内循环，j = 2, prime[j] = 3，标记 visit[5 * 3] 为非质数；
    - 内循环，j = 3, prime[j] = 5，标记 visit[5 * 5] 为非质数，并打断内循环，当前质数记录只有 3 个，prime[0] = 3；

可以看到，质数 2 筛掉 4，质数 3 筛掉 3 x {2, 3}，合数 4 筛掉 4 x {2, 3}，质数 5 筛掉 5 x {2, 3, 5}，等等，每增加一个质数，被筛选的数据都会往自然数移动一段距离。

记录中的质数总是会在外循环中的 i 重复被处理，如果不在内层打断，那么后面的循环中会做重复的判断，如循环到 i = 8，j = 2，prime[2] = 3，而 visit[8 * 3] 就会和 visit[3 * 8] 重复做标记，如果不打断内循环。

对比一下这两种算法在 Deno 中计算 1 千万以内的质数和，差别是明显，但是更有效率的并不是线性方案：

    3203324994356
    default: 19713ms

    3203324994356
    default: 483ms

质数统计题目是 ACM 数论经典题目，日本有个一个名叫 min_25 的人发明了一种算法，称为 min_25 筛，非常快速。与之配套的还有洲阁筛、杜教筛、莫比乌斯反演等，可以解决各种奇怪的数论函数求合问题。

介绍几个数学概念：

- `积性函数`：Multiplicative Function 对于任意互质的整数 a 和 b 有性质 f(ab)=f(a)f(b) 的数论函数。
- `完全积性函数`：对于任意整数a和b有性质f(ab)=f(a)f(b)的数论函数。
- `数论函数`亦称`算术函数`，一类重要的函数，指定义在正整数集上的实值或复值函数，更一般地，也可把数论函数看做是某一整数集上定义的函数 ，例如 以正整数为 定义域 的函数 ƒ (n)，例如数列 {α n}、 阶乘 n!、幂 nλ 等都是数论函数。
- `欧拉乘积公式` Euler product formula 在研究质数的分布中有着重要应用，数论中是指 `狄利克雷级数` 可表示为一指标为素数的无穷乘积。

一般我们称以下公式为欧拉乘积公式，其中 n 为全体正整数，p 为全体素数，Re(s) > 1：

    ∑n(n^-s) = ∏p((1-p^-s)^-1)

`前缀和` 是一种预处理，用于降低查询/筛选的时间复杂度。 

举个简单的例子：给定一个函数 f(N) = 2N {N=0,1,2...}，也就是一个等差数列。求一个区间内值的和，需要从区间左端点迭代到区间右端点求和，时间复杂度相对较大 O(N)。

这种时候就需要预先求区间的值，也就是求得公式 g(N) = f(N) + f(N-1) ... f(1) = (N+1)N，然后每次查询可直接计算答案，而不是迭代查询，这样时间复杂度就可以降到 O(1)。

以下是根据 Euler Project - 10 Summation of primes 解题者 Lucy_Hedgehog 提供的思路实现质数数量计算的算法，基于动态规划方法，速度很快，空间复杂度 O(sqrt(n))，能轻松计算 10 亿的结果。

思路大概是：当前处理中的自然数 N = 已经记录到的质数 + 合数，算法中过滤了大量不必要处理的情况，大大提高了效率。

原作者的说明，这里的代码将原说明的 S 符号替换成 dp 符号：

> Here is a solution that is more efficient than the sieve of Eratosthenes. It is derived from similar algorithms fro counting primes. The advantage is that there is no need to find all the primes to find theri sum.
> 
> The main idea is as follows: Let S(v,m) be the sum of integers in the range 2..v that remain after sieving whih all primes smaller or eaual than m. That is S(v,m) is the sum of integers up to v that are either prime or the product of primes larger than m.
>
> S(v, p) is equal to S(v, p-1) if p is not prime or v is smaller that p * p. Otherwise (p prime, p * p <= v) S(v, p) can be computed from S(v, p-1) by finding the sum of integers that are removed while sieving with p. An integer is removed in this step if it is the product of p with anther integer that has no divisor smaller that p. This can be expressed as
>
> S(ν,p) = S(ν,p-1) - p(S(ν/p, p-1) - S(p-1, p-1))
>
> Dynamic programming can be used to implement this. It is sufficient to compute S(v,p) fro all positive integers v that are representable as floor(n/k) for some integer k and all p ≤ √ν


```py
def countPrimes(n: int) -> int:
    if n < 2:
        return 0
    r = int(n**0.5)
    V = [n//a for a in range(1, r)] + list(range(n//r, 0, -1))
    dp = {v: v-1 for v in V}
    for p in range(2, r+1):
        for key in V:
            if dp[p] == dp[p-1] or p*p > key:
                break
            dp[key] += -dp[key//p] + dp[p-1]
    return dp[n]
 
if __name__ == '__main__':
    max = 100000000;
    sum = countPrimes(max);
    print("Count of prime below %s: %s" % (max, sum))
```

解析一下 Python 的语法：

- `def countPrimes` 定义一个函数；
- `n**0.5` 表示求 n 的 0.5 次方，即二次方根；
- `range(start, stop[, step])` 函数生成一个区间 `[start, stop)`；
- `[n//a for a in range(1, r)]` 在列表中使用 for-in 循环这种语法叫推导 Comprehension，生成序列 `[n//r, n]`，如果 r 大于 1，否则生成空序列；
- `list(range(n//r, 0, -1))` 生成递减序列 `[n//r, 0)`；
- `{v: v-1 for v in V}` 也是推导式，生成一个字典，使用变量 v 的数值作为 key，v - 1 作为值；
- list + list 将两个列表的元素相连成整体，即求得元素的并集；

注意 // 表示浮点运算并向下取整，floored quotient，可以参考 Python 标准库 Numeric Types — int, float, complex。

整个动态规划算法中，V 和 dp 分别作为筛选序列、质数统计对象，dp 可以看作是已有的解决方案的缓存数据。而 V 序列的生成就筛选掉了一大部分数据，包含两部分，除了递减序列 `[n//r, 0)` 部分。另外一部分序列就是 `[n//r, n)`，并且这部分序列的数量按 `range(1, r)` 区间生成，即包含 `[n, n/2 ... n/r]`。 

分析运行流程：

- 假设传入 n = 2，那么初始 V = [1] 和 dp = {1: 0}，返回 0。
- 假设传入 n = 3，那么初始 V = [2, 1] 和 dp = {2: 1, 1: 0}，返回 1。
- 假设传入 n = 4，那么初始 V = [3, 2, 1] 和 dp = {3: 2, 2: 1, 1: 0}，返回 2。
- 假设传入 n = 5，那么初始 V = [4, 2, 1] 和 dp = {4: 3, 2: 1, 1: 0}，还是返回 2。
- 假设传入 n = 6，那么初始 V = [5, 2, 1] 和 dp = {5: 4, 2: 1, 1: 0}，还是返回 2。
- 假设传入 n = 7，那么初始 V = [6, 3, 2, 1] 和 dp = {6: 5, 3: 2, 2: 1, 1: 0}，还是返回 3。

内循环过滤掉了非质数，看内循环的条件，`range(2, r+1)`，要知道 r 就是要求的最大自然数的二次方根，所以过虑也就只需要在这个数值以内，超过的值就不需要考虑了。

另外，只要 `p*p > key` 即潜在的质数的平方大于当前处理中的 dp 项对应的自然数，或者 dp[p] == dp[p-1] 即前后两个记录相等表示已经处理过，否则不会出现相等的情况，这两种情况都会直接跳过处理。

处理 dp 的这句代码 `dp[key] += -dp[key//p] + dp[p-1]`，在第一轮循环处理时，就是将当前的 dp 记录的数量减半，即减掉了偶数的量。并且，将前面的已解决的质数数量 `dp[p-1]` 相应记录到新的位置上来。



# 🚩 Hash Tree
- 哈希树（HashTree）查找算法 https://zhuanlan.zhihu.com/p/290832847

`哈希树` Hash Tree 是一种在理论上和实际应用中均能有效地处理冲突的方法，一般的哈希算法赶时间复杂度都是 O(1)，而且基本是以空间换时间，这很容易导致对存储空间无限制的需求，而哈希树利用基于质数分辨定理，构建出一个质数的树形结构，使得对空间的需求控制在一定范围内。

质数 Prime 指那些只能被 1 和自身整除的且大于 1 的自然数，例如 2、3、5、7、11。很明显，除了 2，或者说，所有大于 2 的质数中，个位数只有 1, 3, 7, 9。而且，质数满足唯一分解定理：任一大于 1 的自然数，要么本身是质数，要么可以分解为几个质数之积，且这种分解是唯一的。

根据质数唯一分解定理，一个数可以除以一系例质数而得到分解，而且这些质数序列唯一，每个数都不同，例如：

    9  = 3 * 3
    10 = 2 * 5
    20 = 2 * 2 * 5
    30 = 2 * 3 * 5
    77 = 7 * 11 

质数分辨定理简单的说就是 N 个质数的乘积，就是这 N 个积数可以精确分辨的整数数量，这 N 个积数组成的序列具有唯一性，每个数都有唯一的质数分解序列。

例如：2 个连续质数 2，3 可以分辨 2×3 = 6 个整数，包括 1, 2, 3, 4, 5, 6，如下，将这 6 整数对 2，3 分别求余得到唯一的余数序列：

    | Int | 2 | 3 | 余数序列 |
    |-----|---|---|----------|
    |   1 | 1 | 1 | 1，1     |
    |   2 | 0 | 2 | 0，2     |
    |   3 | 1 | 0 | 1，0     |
    |   4 | 0 | 1 | 0，1     |
    |   5 | 1 | 2 | 1，2     |
    |   6 | 0 | 0 | 0，0     |

可见，使用连续质数 2，3，就可以通过余数序列分辨 6 个数，这 6 个数的余数序列不会相同的。

哈希树结构特征如下：

- 哈希树中每层节点都与一个质数关联，以根节点为 L0，关联第一个质数 2，然后 L1 关联第 2 个质数 3，依此类推。
- 子节点的数量与层级对应的质数的分辨数列相同；
- key 对应的节点可以记录该数及其他信息；

例如，以下是 4 层的 Hash Tree，实际使用中，这些节点是运行中按需要动态添加的，所以不会在创建时就占用大量内存：

                   Hash Tree
                       0                      <-- L0 [2 nodes]                 R
              ┌────────┴──────────┐                                     ┌──────┴─────┐
              0                   1           <-- L1 [3 nodes]          R0           R1
         ┌────┼────┐         ┌────┼────┐                            ┌───┼───┐    ┌───┼───┐
         0    1    2         0    1    2      <-- L2 [5 nodes]     R00 R01 R02  R00 R01 R02
     ┌─┬─┼─┬─┐ ┌─┬─┼─┬─┐ ┌─┬─┼─┬─┐ ┌─┬─┼─┬─┐  
     0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4  <-- L3 [7 nodes]

深度为 10 层的哈希树就可以分辨 6464693230 = 2x3x5x7x11x13x17x19x23x29 个整数，超过 Int32 可表示的不到 43 亿范围，而深度为 100 层的哈希树就可以分辨 4.711930e219 个整数。而深度为 H 的树只需要完成 H 次取余运算即可完成分辨，意味着 10 次取余运算，即可分辨到 64 亿个数，而 100 次取余运算相当于 100 个 CPU 指令周期，即可完成分辨 4.711930e219 个数，效率很高，分辨性很强。可以用于 IP 路由等可以用整数作为关键字进行检索的场景。具有结构简单、检索迅速、删除节点结构不变等优点，缺点是不能基于关键字排序。

Hash Tree 优点

- 结构简单，每层节点的子节点为连续的质数，子节点可以随时创建，因此哈希树的结构是动态的，不需要提前分配空间。注意，哈希树是一个单向增加的结构，即哈希树的总节点数增长后，不会随数据量减少而减少，目的是为了避免结构的调整带来的额外消耗。
- 查找迅速，对于 32bit 整数，哈希树层级最多使用 10 层，因此最多只需要十次取余和比较操作，就可以知道这个对象是否存在，这个在算法逻辑上决定了哈希树的优越性。
- 结构不变，哈希树在删除的时候，并不做任何结构调整，极有效率。常规树结构在增删操作后需要进行结构调整，否则可能退化为链表结构，而导致查找效率的降低。但是，红黑树这种树开结构会利用红色标记节点不用进行调整，来提升效率。

Hash Tree 缺点是无序性，不支持排序。如果在此基础上不做任何改进的话并试图通过遍历来实现排序，那么操作效率将远远低于其他类型的数据结构。

可以看到，每个节点拥有的子节点数量与与对应的质数所拥有的余数序列相同。哈希树上由根节点，到任意叶节点的路径选择就是通过一步步模运算得到的余数来决定的。使用时，按先来先占位的原则优先使用前面的节点，如节点已经被占用，则往下一级查找。

例如，先在哈希表中插入 6，注意这里的 6 是 key，可以将其对应的数据存入哈希表中。先在根节点即 `L0` 层中执行 MOD 2，得到 0，并且树中没有任何子节点，所以 `R0` = null，需要创建子节点保存 6。

然后，再插入 4，同样还是在根节点中执行 MOD 2 运算，得到 0，但此时 `R0` 已经被 6 先行占用，所以需要在 `L1` 层执行多一次的模运算，即 4 MOD 3 = 1，于是数字 4 就安家 `R01` 这个节点。

同理，如果再插入 2，先后就会经过 `R0`，再计算 2 MOD 3 = 2，保存到 `R02` 节点中。

查询时也按同样逻辑，比如，查询 3，先计算 3 MOD 2 = 1，对应 `R1` 节点，但它是 null 节点，所以数据并没有在哈希表中保存。如果查询 2，计算 2 MOD 2 = 2，此时查询到 `R0` 节点，但是对比发现已经被 6 占据。所以继续往下层查询，计算 2 MOD 3 = 2，查询 `R2` 节点，比较得到正确结果。

删除时也按同样逻辑，先找到节点，再标记为删除状态。

通过以上的流程解析，可以很清楚，尽管哈希表具有非常高的数值分辨能力，但并没有因为这个能力而占用大量内存，除非是真实使用到了这么多的数据。

哈希树的退化是指：经过哈希树经过反复的数据插入和删除之后，数据记录严重偏向并集中于树结构的某条或某几条分支路径上。这样的分支路径平均查找长度接近预设的最大查找长度。

在实际应用中，所插入的数据记录是不能事先估计的，哈希树只能被动的接受和处理。因此可以在哈希树代码中放入几个统计记录指标，用于衡量哈希树的退化程度。

# 🚩 Trie Tree
- https://visualgo.net/en/suffixtree
- https://www.studytonight.com/advanced-data-structures/trie-data-structure-explained-with-examples

字典树，也按其特性称为前缀树，按其功能称为单词查找树，也可以按多节点分支归类为 N-ary Tree，广泛应用于统计和排序大量的字符串，但不仅限于字符串，常用于搜索引擎系统进行词频统计。

它的优点是最大限度地减少无谓的字符串比较，查询效率比较高。

Trie 应用于自动完成功，用户输入就可以根据频度优先给出输入提示，比如输入 foot 就可以提示 football 而不是 footpath。可以用来 Trie 来保存额外的信息，如词频，在用户搜索时，自动提示 football，因为它出现的可能性更高。

Trie 还可以用于拼写检查，将用户输入的单词，对比字典现有的前缀就可以判断用户输入的是不是正确的单词。

Key Points

- 时间复杂度 O(m * n)，其中 m 为单词量，n 为单词平均长度。
- 节点插入时间复杂度、空间复杂度都为 O(n)，其中 n 为单词长度。
- 前缀或节点搜索时间复杂度 O(n)，其中 n 为单词长度。

字典树核心思想是空间换时间，利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

Trie Tree 特征：

- 除`根节点`不含字符外，所有节点包都只包含一个字符和一个终结标记，如果是终结字符，则标记为`终结节点`。
- 从根节点到任一`终结节点`，路径上经过的字符连接起来，为该节点对应的字符串。
- 每个节点的所有子节点包含的字符都不相同。
- 它的 key 都为字符串，能做到高效查询和插入，时间复杂度为 O(k)，k为字符串长度，缺点是如果大量字符串没有共同前缀时很耗内存。

这种结构决定了字典树比较消耗空间，一个节点只包含一个字符，带一个列表指针。

Tire 树可以归结为商数类哈希函数，采用 26 位计数进制方式（以英文字母为基础）。

关于英文单词的统计情况表明，字母是有不同的使用频度的，最常用的为 E T A O I N S H R D，绝大多数英文单词长度为 8 个字母，最长有 20 个字母。

由数据统计可以分析得出 Tire 树的基本情况：

- 最大查找长度至少要设置至 20。
- 平均最大查找长度应当接近于 8。
- 各个分支路径上的数据记录分布不均匀，某些路径上过多，某些路径上过少。

使用哈希树进行处理更有优势：

- 无需对英文单词的长度做出限制。
- 只是单词较长时，取余运算需要消耗较多 CPU 时间。也可以对英文单词预先使用余数类哈希函数进行处理，将结果数值作为字符串的关键字。这样处理整数要远优于处理长字符串。
- 英文单词数量超过 100 万，常用单词 5 万，哈希树可以轻松实现查找。以本文推荐的除数数列 [公式] 为例，那么最大查找长度预估为3（256×255×253 = 16515840，远大于1000000），其平均查找长度应该不超过3。
- 数据记录都会靠近根节点，各分支路径数据是均衡的。可以优先插入出现频次高的单词，再插入出现频次低的单词，提高查询击中概率，减少平均查找长度。

比如，以单词 ish, inn, cab, app, ap 来建立树状结构，注意，使用 • 表示终结节点标记：

            R
     ┌──────┼─────┐
     a      c     i
     |      |   ┌─┴─┐
     p•     a   n   s
     |      |   |   |
     p•     b•  n•  h•

参考以下代码：

```java
class Trie {
    class TrieNode {
        boolean isEndOfWord;
        TrieNode children[];
        
        public TrieNode(){
            isEndOfWord = false;
            children = new TrieNode[26];
        }
    }
    
    TrieNode root;

    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        
        for (char c : word.toCharArray()) {
            if (node.children[c-'a'] == null) {
                node.children[c-'a'] = new TrieNode();
            }
            node = node.children[c-'a'];
        }
        node.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        return isMatch(word, root, 0, true);
    }

    public boolean startsWith(String prefix) {
        return isMatch(prefix, root, 0, false);
    }
    
    public boolean isMatch( String s, TrieNode node, int index, boolean isFullMatch) {
        if (node == null)
            return false;
        
        if (index == s.length())
            return !isFullMatch || node.isEndOfWord;
        
        return isMatch(s, node.children[s.charAt(index) - 'a'], index + 1, isFullMatch);      
    }    
    
    public static void main(String[] args){
        Trie trie = new Trie();
        trie.insert("cat");
        trie.insert("car");
        trie.insert("dog");
        trie.insert("pick");
        trie.insert("pickle");
        boolean isPresent = trie.search("cat");
        System.out.println(isPresent);
        isPresent = trie.search("picky");
        System.out.println(isPresent);
        isPresent = trie.startsWith("ca");
        System.out.println(isPresent);
        isPresent = trie.startsWith("pen");
        System.out.println(isPresent);
    }
}
```


# 🚩 Binary Tree 二叉树与图论
- 算法导论 Introduction to Algorithms, 3rd Edition - 12 Binary Search Trees
- Data Structures & Algorithms in Java Chapter 8: Binary Trees & Chapter 9: Red-Black Trees
- Balanced Search Trees https://algs4.cs.princeton.edu/33balanced/
- 如何在 15 分钟内学会摩斯密码？Nelson https://www.bilibili.com/video/av628068656/
- Matrix67: The Aha Moments - 什么是P问题、NP问题和NPC问题 http://www.matrix67.com/blog/archives/105
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree
- PAT - Programming Ability Test 计算机程序设计能力考试 https://www.patest.cn/practice
- Data Structure Visualizations https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- B 树自在人心 https://www.bilibili.com/video/BV1Aa4y1j7a4/
- B+Tree 与数据库索引 https://www.bilibili.com/video/BV1hE41147tP

图论 Graph theory 是离散数学的一个分支。

图论起源于一个著名的数学问题，柯尼斯堡（Konigsberg）问题，即七桥问题。这个问题是基于一个现实生活中的事例：当时东普鲁士柯尼斯堡（今日俄罗斯加里宁格勒）市区跨普列戈利亚河两岸，河中心有两个小岛，小岛与河的两岸有七条桥连接。在所有桥都只能走一遍的前提下，如何才能把这个地方所有的桥都走遍？

1738 年，瑞典数学家 Euler 解决了这个问题，他也成为了图论的创始人。欧拉把顶点的度定义为与该顶点相关联的边的条数，并且他证明了存在从任意点出发，经过所有边恰好一次，并最终回到出发顶点的走法的充分必要条件是：每个顶点的度均为偶数。人们称之为欧拉闭迹（Eulerian walk），所以这个问题是无解的，因为有 3 个点的接连是奇数。

1859 年，哈密顿回路被提出，掀起了图论研究的热潮。问题描述在一个有多个城市的地图网络中，寻找一条从给定的起点到给定的终点沿途恰好经过所有其他城市一次的路径。

1969年，阿佩尔(Appel)和哈肯(Haken)借助计算机给出了四色猜想的证明，但这种证明方法不漂亮，如今仍有许多数学家在努力地追求，试图从数学理论上证明。

图论与其他学科，拓扑学、计算机科学等的关系密切。

图论是离散数学中的重要内容，并且它与拓扑学密切相关。 用一笔画解决了柯尼斯堡问题，Euler 在开创了图论的同时，也开创了拓扑学。而 1852 年提出的 四色猜想 ，实际上也是图论与拓扑学的综合。拓扑学(topology)是研究几何图形或空间，在连续改变形状后还能保持不变的一些性质的学科。它只考虑物体间的位置关系而不考虑它们的形状和大小。

拓扑学可以像图论一样简明易懂，但这两者都可以很抽象。

图论也广泛渗透在计算机科学领域中，计算机科学领域有着各种各样的图论算法，如：深度优先遍历，广度优先遍历，拓扑排序，强连通分量，单源最短路，多源最短路，最小生成树，最大流。

戴克斯特拉算法 Dijkstra’s algorithm 是由荷兰计算机科学家艾兹赫尔·戴克斯特拉提出的最短寻路算法，使用了广度优先搜索解决非负权有向图的单源最短路径问题，算法最终得到一个最短路径树。

Graph 是数据结构和算法学中最强大的框架之一，或许不是之一。图几乎可以用来表现所有类型的结构或系统，从交通网络到通信网络，从下棋游戏到最优流程，从任务分配到人际交互网络，图都有广阔的用武之地。

而要进入图论的世界，清晰、准确的基本概念是必须的前提和基础。下面对其最核心和最重要的概念作出说明。关于图论的概念异乎寻常的多，先掌握下面最核心最重要的，足够开展一些工作了，其它的再到实践中不断去理解和熟悉吧。

这里的图并不是指图形图像或地图，通常来说，把图视为一种由顶点组成的抽象网络，网络中的各顶点可以通过边实现彼此的连接，表示两顶点有关联。

注意图定义中的基本结构：

- 顶点 vertex 表示某个事物或对象，称顶点为点、节点、节点、端点等都是可以。叫什么无所谓，理解是什么才是关键。
- 边 edge 顶点之间的线条，表示事物与事物之间的关系。需要注意的是边表示的是顶点之间的逻辑关系，粗细长短都无所谓的。

图的基本性质：

- 有向/无向图（Directed Graph/ Undirected Graph）
- 权重（weight）边的权重或者称为权值、开销、长度等，也是一个非常核心的概念，即每条边都有与之对应的值。
- 路径/最短路径（path/shortest path）
- 环（loop）环路是一个与路径相似的概念，在路径的终点添加一条指向起点的边，就构成一条最简单的环路。
- 连通图/连通分量（connected graph/connected component）即图中任意 2 个顶点之间都存在路径，即为连通图。
- 同构(isomorphism)，就是结构相同，最简单的例子就是五边形和五角星了。

而树状图则是略论中的一个小方向，树状图是图的一种特殊形态，二叉树又是树状态图的特殊形态。

树图是一个有层次的有穷集合，由一个根节点和多个子树构成，以下的树状图是经典的表达，但树图不仅限于这样的表现形式，方块图嵌套也是常用的树图表现方式。

如摩斯码 Morse Binary Tree

                               • ⇦              Morse Binary Tree            ⇨ —     EX.
                                                        │                             SOS  ••• --- •••
                               ┌────────────────────────┴────────────────────────┐    DENO -•• • -•
                             •[E]                                               [T]—  RUST •-• ••- ••• -
                 ┌─────────────┴─────────┐                         ┌─────────────┴─────────┐
               • I                       A                         N                       M —
           ┌─────┴─────┐           ┌─────┴─────┐             ┌─────┴─────┐           ┌─────┴─────┐
         • S           U           R           W             D           K           G           O —
        ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐       ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐
      • H     V     F     _     L     _     P     J       B     X     C     Y     Z     Q     _     _
      ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐   ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐
    • 5   4     3           2       +               1   6   = /                 7           8     9   0

树状图的基于特点：

- 只有一个根节点，即没有父节点的节点只有一个；
- 非根子节点有且只有一个父节点；
- 每个节点有零个或多个子节点；
- 节点数 n >= 0；
- 所有节点都是连通的；
- 任意 2 点之间只有唯一路径； 
- 树是无环的连通图； 
- 森林是无环的非连通图。

树状图同时又是一种特别有用的数据结构，几乎所有软件都有它的影子，比如 HTML 的节点树，面向对象编程中的类型继承关系，数据算法结构中的二叉树，真是“万物皆树”。

因此，它有着一些非常重要的特点和概念：

- `Node` 节点也就是图的顶点。
- `Branch` 树枝就是图的边 edge。
- `Root` 根节点，顶点就是根。可以根据优化需要选择任意一个节点作为根，这也称为旋转操作，主要用于平衡树的结构。
- `Leaf` 叶节点，没有子节点的节点，或者说度数为 0 的节点。
- `Degree` 即节点拥有的子树数量，leaf 即度数为 0 的节点，与 Order 区别。
- `Order` 阶数，即节点拥有的最大子树数量，M 阶就是最多有 M 个子节点。
- `Height` 树高/深度 level/depth/height，即根节点到子节点的最大距离，任意节点到根节点的距离即为节点高度。 
- `Sibling` 兄弟节点。
- `Child`  子节点。
- `Parent` 父节点。
- `Ancestor` 祖先节点，节点往根节点经过的所有父节点都是祖先节点。
- `Descendant` 后代节点，子节点以及到叶节点的所有节点。
- `Forest` 森林，多颗树的集合称为森林，树与树之间互不相交。

树图也应用于压缩和编码领域，例如最基本的压缩编码方法 Huffman Tree，给
定 N 个权值作为 N 个叶子节点，构造一棵二叉树，若 WPL - Weighted Path Length 权重路径长度达到最小，称这样的二叉树为最优二叉树，也称为哈夫曼树，主要用于信息压缩编码。

计算 WPL 只需要将节点的权值与节点所在路径经过节点数相乘，再求和。

1951年，哈夫曼在麻省理工学院（MIT）攻读博士学位，于 1952 年在论文《一种构建极小多余编码的方法》（A Method for the Construction of Minimum-Redundancy Codes）中发表了这个编码方法。

前面的摩斯码二叉树就是一个 Huffman Tree 例子，根据统计的字母频度数据，前十个最常用字母如下：

- E 12.70%
- T 9.06%
- A 8.17%
- O 7.51%
- I 6.97%
- N 6.75%
- S 6.33%
- H 6.09%
- R 5.99%
- D 4.25%

所以 ET 给了最短编码，摩斯码中的 • - 可以用二进制数表示，所以传输一个字母最少可以只用一个 bit。这样对于一篇要压缩的文章而言，占大部分的 ET 字母就可以用最少的编码来表示，实现最大的压缩比。


计算机通常作为搜索工具使用，比如在 1000 万个数中找一个特殊值，如果不使用优化的数据结构，Linear Search 就可能需要搜索所有的数据，才找到最后那个值是目标数据。

为了提高搜索效率，更效的是将数据整理成特殊的结构，类似数据库的索引，比如将这些数据从大到小排好。当要找一个值，先从中间即 500 万的位置，比较看看是大了还是小了。然后根据结果，再从另一半数据的中间位置查找，这就是二分法搜索，二分法查找，折半查找法一堆名字可叫。

二叉搜索树 BST - Binary Search Tree 就是这样的非线性数据结构，每次检索数据时根据关键字的大小选择是往左子树走还是往右子树走，这样每次都少比较了一半的数据，比线性搜索效率高多了。检索的过程是跟着树的路径往下走的，因此树的高度会对效率产生影响，如果树高和原始数据线性结构一致，那就完全没有意义，所以需要对树状态结构进行各种优化。

二叉查找树，也称有序二叉树，或已排序二叉树，无序的树似乎作用不大。因为用于搜索，二叉树又称为 BST - Binary Search Tree 二叉搜索树。查询效率介于 O(log n) ~ O(n) 之间，理想的排序情况下查询效率为 O(log n)。极端情况下 BST 就是一个线性链表结构，此时元素查找的效率相等于链表查询 O(n)。

所以，二叉树的平衡性，和树的高度是其中主要优化考虑的特性，这两个说的是同一回事。树高使用对数计算，最小树高就是平衡的二叉树，有 8 个值的树高就是 log2(8) = 4 层。如果不是平衡树，甚至是线性结构，树高就等于元素的数量。

查找树的特点：

- 左子树上所有节点的值均小于它的根节点的值。
- 右子树上所有节点的值均大于它的根节点的值。
- 任意节点的左、右子树也分别为二叉查找树。
- 没有键值相等的节点（no duplicate nodes）。

两种基本的图形搜索算法：

- BFS - Breadth-first search 宽度优先搜索，首先探索每个节点的相邻节点，然后探索相邻节点的相邻节点。
- DFS - Deep-first search 深度优先搜索，尝试尽可能地深入一条路径，如有可能便访问新的相邻节点。

此外还有以下几种节点遍历方式：

- 先序遍历，从根节点开始，逆时针遍历整棵树，类似 DFS 深度优先遍历；
- 中序遍历，将节点按原有线性顺序遍历，可以理解为二叉树每个节点垂直方向投影下来从左到右的顺序；
- 后序遍历，从左子树开始，从最底层节点由左至右遍历，可以想象为一棵棵摘葡萄，左子树摘完再摘右子树后摘根；
- 层次遍历，从最底层由左至右遍历，无论是左、右子树，只要同高度的一层就一并遍历；

LeetCode 相关的题目：

- [144] Binary Tree Preorder Traversal 前序遍历
- [94] Binary Tree Inorder Traversal 中序遍历
- [145] Binary Tree Postorder Traversal 后序遍历
- [102] Binary Tree Level Order Traversal 层序遍历
- [107] Binary Tree Level Order Traversal II bottom-up 型层序遍历
- [103] Binary Tree Zigzag Level Order Traversal 之字型层序遍历
- [314] Binary Tree Vertical Order Traversal 垂直遍历

例如，以下一棵树的各种遍历结果：

           H      
       ┌───┴───┐     先序遍历： H E I A T N M
       E       T     中序遍历： I E A H N T M
     ┌─┴─┐   ┌─┴─┐   后序遍历： I A E N M T H
     I   A   N   M   层次遍历： A A N M E T H

Why Use Binary Trees?

- Slow Insertion in an Ordered Array.
- Slow Searching in a Linked List.

二叉树满足树状图的基本特点，节点最多只有两个子节点，这正是二叉树的名字来源。二叉树简称 BST，和常见的 B-Tree 是两种不同的结构。

根据叶节点的分布不同，可以按以下分类：

- `完美二叉树` Perfect Binary Tree 所有叶节点深度相同，所有非叶节点都有两点子节点。也称为满二叉树，深度为 k(>=-1) 且有 2^(k+1) - 1 个节点。
- `完全二叉树` Complete Binary Tree，除了最底层，所有节点都是完全充满子节点，而叶子节点从左到友依次排列，不需要填满二叉树。
- `完满二叉树` Full Binary Tree/Strictly Binary Tree，除叶节点外，所有节点都有两个子节点。换句话说，只要有子节点，就必有两个子节点。
- `平衡二叉树` Balance Binary Tree 要求左右子树的高度差至多为 1 个节点。
- `自平衡二叉树` Self-Balancing Binary Search Tree 简称 `AVL` 平衡二叉树，名字来源于它的发明作者 G.M. Adelson-Velsky 和 E.M. Landis。

所谓自平衡，是指需要通过算法实现自平衡特性，不否则它就是能称之为自平衡树，因为它没有满足定义。

和种结构对比：

         Complete Binary Tree    Balance Binary Tree      Perfect Binary Tree     Complete Binary Tree
                 I                       A                         N                       M 
           ┌─────┴─────┐           ┌─────┴─────┐             ┌─────┴─────┐           ┌─────┴─────┐
           S           U           R           W             D           K           G           O
        ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐       ┌──┴──┐     ┌──┴──┐     ┌──┴──┐
        H     V     F           L           P     J       B     X     C     Y     Z     Q

平衡树、非平衡树 Balanced vs Unbalanced 是树的两种常见分类。

非平衡的二叉树可以进行旋转操作，调整为平衡二叉树，即选择其中一个子节点作 root，选择右侧子节点即为 `左旋转` Left Rotation，反之为右旋转。在调整二叉树时，要确认两个东西，一个是旋转方向，一个是旋转轴（节点）。

自平衡二叉树 AVL 定义：它或者是一颗空树，或者严格满足以下性质的二叉排序树：

- 左子树、右子树的深度之差(平衡因子)的绝对值不超过 1；
- 且它的左子树和右子树都是一颗平衡二叉树。

二叉树作为一种经典的树形结构，是一种入级数据结构，而实际应用中，有非常多的各种树形变体，常见的如下：

- `BinaryHeap` 二叉堆，二叉树与堆栈结构的组合，实现 push pop 等操作，同时又具有非线性访问的高效，常见于实现优先级管理。
- `Splay Tree` 伸展树也叫分裂树，是一种二叉排序树，它能在O(log n)内完成插入、查找和删除操作。
- `B-Tree` 就叫 B 树，因为文件数据快速访问需求设计的，与基本的二叉树不同，它是一个 N 阶结构，包含 N 个子节点指针和 N-1 个 Key，2-3-4 Tree 是特殊形式。
- `B+Tree` 是 B-Tree 的一个变种，对于一个 N 阶结构，子树指针和 key 的数量都是 N 个，在 MySQL 等数据库索引中使用非常广泛。
- `B*Tree` 树是 B+Tree 的变体，在 B+Tree 的非根和非叶子节点再增加指向兄弟的指针。
- `RBT` Red-Black Tree 红黑树是另一种平衡优化树，引入节点的颜色属性，具有惰性平衡处理，性能较好，但实现较复杂。
- `N-ary Tree` N 叉树，节点有超过 2 个分支的树型结构。
- `Trie Tree` 字典树/前缀树是 N 叉树的一种特殊形式，也是哈希树的变种，核心是以空间换时间。子节点保存字符，每条路径上的字符拼接起完整的字符串。
- `Radix Tree` 类似字典树，可以将字典树看为一个 26 阶的基数树。
- `Fenwick Tree` 二叉索引树
- `Segment Tree` Interval tree 线段树，元素的值代是一个区间，常用于区间的统计，比如一个区间的最大值，最小值，求和等等。
- `Heap Tree` 堆积树，在堆排序中有应用，是一种完全二叉树，min-heap 小根堆要求节点小于或等于子节点值，max-heap 大根堆要求节点大于或等于子节点值。

Splay Tree 通过不断调整，优化查找效率，第一次查找某个值，时间复杂度可能是 O(n)，但是查找后，它会把这个值通过旋转操作放到树根下，因此，之后的查找就非常快了。由于没有引入额外的标记，因而树结构与标准红黑树没有任何不同，从空间角度来看，它比 Treap、SBT、AVL 要高效得多。因为结构不变，因此只要是通过左旋和右旋进行的操作对 Splay Tree 性质都没有丝毫影响，因而它也提供了 BST 中最丰富的功能，包括快速的拆分和合并，并且实现极为便捷。其时间效率也相当稳定，和 Treap 基本相当，常数较高。伸展树最显著的缺点是它有可能会变成一条链。

堆树也可以叫做二叉堆 binary heap，亦称为优先队列 priority queue，通常是一个可以被看做一棵树的数组对象，如 Rust 的 BinaryHeap 实现。在队列中，调度程序反复提取队列中第一个作业并运行，因而实际情况中某些时间较短的任务将等待很长时间才能结束，或者某些不短小，但具有重要性的作业，同样应当具有优先权，堆即为解决此类问题设计的一种数据结构。

对于 M 阶 B-Tree 主要特点如下：

- 节点最多有 M 个子树；
- 节点最少有 cil(M/2) 个子树，除根节点、叶子节点。
- 节点最多有 M-1 个 Key；
- 所有叶子节点到根节点同高，即树高；
- 节点的 Key 具有区间属性，不存放超过范围的 Key。
- 节点 Key 填满后需要进行分裂，分拆成二个子节点，中间的 key 作为新节点的父节点；

如果用整数来表示 Key 的范围，其值 t 不小于 2，即是树的最小度数。当这个范围是 2 时，这种树就是 B-Tree 最简单的形式，叫做 2-3-4 Tree，节点有 2 Keys 和 3 个子树指针。这种树有完美的平衡性，根节点到任意叶子节点的路径长度相等。实践中，这个 t 值会取更大的值以获得更小的树高度。

2-3-4 Tree 名字来源于三种节点：

- 2-node 有 2 个子节点，1 个 Key；
- 3-node 有 3 个子节点，2 个 Key；
- 4-node 有 4 个子节点，3 个 Key；

B+Tree 主要特点如下：

- 非叶子节点不存储数据，只存储键值；
- 每个非叶子节点有 n 个键值 key 就有 n 个子节点指针 point，这是 B+Tree 与 B-Tree 的一大差异；
- 叶子节点就是键值数据，没有指针，祖先节点所有键值都会出现在叶子节点上，稠密索引可以减少 I/O 操作；
- 叶子节点可以通过双向链表直接问题；

注意差别：

- 对于一个 5 阶 B+Tree，每个节点有 5 个子树指针和 5 个 key。
- 对于一个 5 阶 B-Tree，每个节点有 5 个子树指针和 4 个 key。

B+Tree 与 B-Tree 基本相同，区别是 B-Tree 可以在非叶子节点命中数据，而 B+Tree 只有达到叶子节点才命中数据，其性能也等价于在关键字全集做一次二分查找，但这样查询性能稳定，同时因为全键值索引有效减少 I/O 操作，同时增删节点效率更高，更适合用于文件、数据的索引。因此，B+Tree 广泛用于文件系统及数据库中，如 Oracle，MySQL，SQLServer 等。

B+Tree 还有一个最大的好处，方便扫库，直接将叶子节点扫一遍完成，不需要遍历整棵树。B+Tree 支持方便的 range-query，这是数据库选用 B+Tree 的最主要原因。比如要查 5-10 之间的，B+Tree 一次定位 5，再一次定位 10，然后串起来就行了。

![B+Tree 插入和平衡](https://img-blog.csdnimg.cn/img_convert/e0261cbe25f372771f4d2428655e42f9.gif)

如果前面的摩斯码的树图用 B+Tree 表示，应该类似如下的结构：

                               • ⇦              Morse Binary Tree            ⇨ —     EX.
                                                        │                             SOS  ••• --- •••
                               ┌────────────────────────┴────────────────────────┐    DENO -•• • -•
                             •[E]                                               [T]—  RUST •-• ••- ••• -
                 ┌─────────────┴─────────┐                         ┌─────────────┴─────────┐
               • I                       A                         N                       M —
           ┌─────┴─────┐           ┌─────┴─────┐             ┌─────┴─────┐           ┌─────┴─────┐
         • S           U           R           W             D           K           G           O —
        ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐       ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐
      • H     V     F     _     L     _     P     J       B     X     C     Y     Z     Q     _     _
      ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐   ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐
      5 H 4 S V 3I  F  U    2  EL  R+    A  P  W  J 1   6 B =D/ X  N  C  K  Y   7TZ  G  Q  M8    O9   0

当然这里展示的是 2 阶树，与实际中使用的阶数不同。

在增删节点上的 key，注意是增删 key 而不是节点，一般需要保证最少有 2 个 key。如果数量不足，就可以进行节点合并，如果 key 填满节点，就需要进行节点分裂，对比红黑树则是通过旋转解决平衡问题。

B* Tree 树是 B+Tree 的变体，在 B+Tree 的非根和非叶子节点再增加指向兄弟的指针。B* Tree 定义了非叶子节点 key 个数至少为(2/3)M，即块的最低使用率为 2/3，而不是 B+Tree 的 1/2。

B+Tree 在一个节点填满需要进行分裂：

- 通过分配一个新的节点，并将原节点中 1/2 的数据复制到新节点，最后在父节点中设置新增节点的指针。
- B+Tree 的分裂只影响原节点和父节点，而不会影响兄弟节点。

B* Tree 在一个节点满需要进行分裂：

- 如果它的下一个兄弟节点未满，就将一部分数据移到兄弟节点中。
- 再在原节点插入关键字，最后修改父节点中兄弟节点的关键字（因为兄弟节点的关键字范围改变了）。
- 如果兄弟也满了，则在原节点与兄弟节点之间增加新节点，并各复制 1/3 的数据到新节点，最后在父节点增加新节点的指针。

所以，B* Tree 分配新节点的概率比 B+Tree 要低，空间使用率更高。


# 🚩 Red-Black Tree 红黑树有点懒
- 算法导论 Introduction to Algorithms, 3rd Edition - 13 Red-Black Trees
- Robert Sedgewick - Algorithms, 4th Edition https://algs4.cs.princeton.edu/home/
- Left-Leaning Red-Black Trees - Robert Sedgewick - Princeton University https://www.cs.princeton.edu/~rs/talks/LLRB/RedBlack.pdf
- Red/Black Tree Visualization https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
- Data Structure Visualizations https://www.cs.usfca.edu/~galles/visualization/Algorithms.html
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree
- https://www.geeksforgeeks.org/avl-tree-set-1-insertion/
- https://www.geeksforgeeks.org/avl-tree-set-2-deletion/

红黑树，给人以强烈的第一听觉冲击力，具有很强的视觉效应，好像很高端的感受。事实上的确如此，红黑树是一种高级数据结构，在 C++、Java 等编程语言的标准库里做为 set、map 的底层数据结构实现，以及 Linux 中进程的公平调度、内存管理。在工程上红黑树应用非常广泛，C++ STL 用的都是红黑树，算法导论给出伪代码的也是红黑树。

                                            Red-Black Binary Tree
    ⚪ black                                         ⚪
                                                      │
    🔴 red                   🔴──────────────────────┴────────────────────────⚪
                              E                                                 T
                ⚪───────────┴──────────⚪                       ⚪───────────┴──────────⚪
                 I                       A                        NIL                      NIL
          🔴────┴────🔴          🔴────┴────🔴     
           S           U           R          W      
      ⚪──┴──⚪  ⚪──┴──⚪   ⚪──┴──⚪ ⚪──┴──⚪ 
      NIL    NIL  NIL    NIL   NIL    NIL NIL    NIL 

Java HashMap 的实现就使用了红黑树来解决 Hash 冲突问题，实现高效 key-value 查找。

RB-Tree 红黑树特性：

- 节点只能是 `RED` 或是 `BLACK` 两种状态；
- 根节点总是 `BLACK`；
- 如果节点是 `RED` 节点，其子节点必需是 `BLACK`，反之不管 `BLACK` 节点的子节点状态；
- 叶节点是 `BLACK`，但不存储数据，并且所有数据节点都充满叶节点；
- 任意节点到达叶节点的各条路径经过的 `BLACK` 节点数必需相等，并且最大、最小的 `Black Height` 不超过 2 倍；

叶节点是 nil，即不存储任何东西一般不画出来，其它存有数据的节点称为内节点。红黑树并没有约束 `BLACK` 节点的子节点颜色，只要求 `RED` 节点的子节点为 `BLACK`。红黑树可以没有 `RED` 节点，只需要满足 5 条基本条件就可以。

二叉搜索树在最坏的情况下可能会变成一个链表，而红黑树在每一次插入或删除节点之后都会花 O(log N) 的时间来对树的结构作修改，以保持树的平衡。同时，红黑树又不像 AVL 那样严格平衡，性能更好。

从理论上看，平衡二叉树追求的是绝对平衡！也就是说左子树和右子树差值必须小于等于 1。实用中红黑树只需要保证左右子树中的 BLACK 节点数量一致即可。这只是保证了黑色节点的绝对平衡，红色节点是不考虑的，也就是说左子树和右子树只要满足 2 倍以内的关系就可以了，因而是接近平衡的。

从另一个角度看约束关系，将 `RED` 节点移除，并且将其子节点拼接到其父节点，这样形成的就是一棵完美的 4 阶树，也就是 2-3-4 Tree，所有节点最多有 4 个子节点，并且所有路径等高，树高就是 `Black Heigh`。

Robert Sedgewick 在其《算法》一书就是用 2-3-4 Tree 的视角来改进行现代红黑树算法 LLRB - Left-leaning red-black trees。

因为这个条件线束的存在，红黑树中又具有一个重要的 `Black Height` 属性，它决定的树的稳定状态，只要它出现高度变更，就需要对树作出平衡调整。

具体的含义，就是在插入新节点时，设置为 `RED` 就可以避免进行平衡处理的过程，但是当需要往 `RED` 插入新节点时就必会新增 `BLACK` 这就会出现路径的 `Black Height` 高度增长，需要重新平衡。也就是这个 `RED` 节点的存在，所以红黑树具有一定的惰性，并不需要像 AVL 那样勤快地进行平衡调整。

正是红黑树的 5 条基本性质，使一棵 n 个节点的红黑树始终保持了不超过 2 log(n+1) 的高度，惰性平衡使得红黑树的查找、插入、删除的时间复杂度最坏为 O(log n)，比 AVL 具有更佳的性能。


往树上插入新节点，或删除现有节点都可能会破坏原有平衡，有 LL、RR、LR、RL 四种基本的失衡姿态，相应调整方式可以想象为树图的旋转操作。

假定 T1 T2 T3 为子树，以下示范树图旋转的概念：

         y                                 x
        / \      Right Rotation (T,y)     / \
       x   T3      -------------->       T1  y
      / \          <--------------          / \
     T1  T2      Left Rotation  (T,x)     T2  T3

旋转过程分析，以下按右旋转的过程分析，左旋转的操作类似：

- 首先，对于 y 旋转时会降级，脱离 x 后空出左指针；
- 对于 x 升级为父节点，并以 y 子树作为右子树，所以 x 原来的右子树必需脱离出去否则无法与 y 子树相连；
- 将原 x 右树与 y 空出的左指针相连，完成右旋转；

以下只展示 AVL 树的局部会出现的四种基本的插入失衡状态，未展示删除失衡，并且不是最简化的形式。各个叶节点可以看作是有多层级的子树，对操作无影响。

LL - Left Left 插入或删除方式，对于 LL 插入失衡，进行右旋调整。

    |   Balanced  |               |  Unbalanced   |               |   balanced    |
    |       E     |               |         E     |               |       U       |
    |   ┌───┴───┐ |   LL insert   |     ┌───┴───┐ |    RR Adjust  |   ┌───┴───┐   |
    |   I       A | ------------> |     I       A | ------------> |   S       A   |
    | ┌─┴─┐       |               |   ┌─┴─┐       |               | ┌─┴─┐   ┌─┴─┐ |
    | S   U       |               |   S   U       |               | H   I   E     |
    |             |               | ┌─┴─┐         |               |               |
    |             |               | H             |               |               |

RR - Right Right 插入或删除方式，对于 RR 插入失衡，进行左旋调整。

    |   Balanced  |               |  Unbalanced   |               |   balanced    |
    |     E       |               |     E         |               |       S       |
    | ┌───┴───┐   |   RR insert   | ┌───┴───┐     |   RR Adjust   |   ┌───┴───┐   |
    | I       A   | ------------> | I       A     | ------------> |   E       U   |
    |       ┌─┴─┐ |               |       ┌─┴─┐   |               | ┌─┴─┐   ┌─┴─┐ |
    |       S   U |               |       S   U   |               | I       A   H |
    |             |               |         ┌─┴─┐ |               |               |
    |             |               |             H |               |               |

LR - Left Right 插入或删除方式，对于 LR 插入失衡，进行双旋转调整，先低层左旋调整，转换为 LL 插入失衡问题，再右旋。

    |   Balanced  |               |  Unbalanced   |               |   balanced    |
    |       E     |               |         E     |               |       U       |
    |   ┌───┴───┐ |   LR insert   |     ┌───┴───┐ |   LR Adjust   |   ┌───┴───┐   |
    |   I       A | ------------> |     I       A | ------------> |   I       E   |
    | ┌─┴─┐       |               |   ┌─┴─┐       |               | ┌─┴─┐   ┌─┴─┐ |
    | S   U       |               |   S   U       |               | S   H       A |
    |             |               |     ┌─┴─┐     |               |               |
    |             |               |     H         |               |               |

RL - Right Left 插入或删除方式，对于 RL 插入失衡，进行双旋转调整，先低层右旋调整，转化为 RR 插入失衡问题，再左旋。

    |   Balanced  |               |   Unbalanced  |               |   balanced    |
    |     E       |               |       E       |               |       H       |
    | ┌───┴───┐   |   RL insert   |   ┌───┴───┐   |   RL Adjust   |   ┌───┴───┐   |
    | I       A   | ------------> |   I       A   | ------------> |   E       A   |
    |       ┌─┴─┐ |               |         ┌─┴─┐ |               | ┌─┴─┐   ┌─┴─┐ |
    |       S   U |               |         S   U |               | I       S   U |
    |             |               |       ┌─┴─┐   |               |               |
    |             |               |       H       |               |               |

红黑树的平衡操作都基于四种基本类型，并且结合了节点颜色属性进行处理，所以并不像 AVL 那样需要严格平衡。只需要进行局部调整，满足根节点到所有叶节点的 `Black Height` 相同即可。但也因为加入颜色属性，所以红黑树的平衡调整的实现比常规的二叉树要复杂。

插入新节点时的基本问题就是破坏规则问题，红黑树的末端节点不存在同时连接 `BLACK` 和 `NIL` 的情况，只有连接 `RED` 和 `NIL` 子节点才能满足 `Black Height` 高度统一的要求。

综合各种情况：

- 插入节点的父节点为 `BLACK`，最优插入 `RED` 节点，无平衡动作。
- 插入节点的父节点，则表示要打破 `Black Height`，需要进行变色、或各种旋转处理。

插入一个新节点，默认颜色为红色，以下几种情况需要做翻转：

- Right child red, left child black:rotate left.
- Left child, left-left grandchild red: rotate right.
- Both children red:flip colors.

通过变色可以解决的情况是，叔、父节点匀为 `RED`，祖父为 `BLACK`，通过变色处理即可平衡。

演示，这里不给出 `NIL` 叶节点，通过变色操作避免进行旋转平衡操作，依次逐级变色直到符合规则：

                    ⚪                                         ⚪         
                     E                                          E          
              🔴────┴────🔴                             ⚪────┴────⚪    
               I          A         insert 5              I          A     
          ⚪──┴──⚪  ⚪──┴──⚪    ------->         🔴──┴──⚪  ⚪──┴──⚪
           S      U    R      W                       S      U    R      W 
      🔴──┴──🔴                                 ⚪──┴──⚪                
       H      V                                   H      V                 
                                              🔴──┴                       
                                               5                           

当叔、父节点分别为 `RED`，`BLACK`，就根据插入点位置，LL RR LR RL，用符合的旋转调整操作。

                    ⚪                                         ⚪         
                     E                                          E          
              🔴────┴────🔴                             ⚪────┴────⚪    
               I          A         insert 5              I          A     
          ⚪──┴──⚪  ⚪──┴──⚪    ------->         🔴──┴──⚪  ⚪──┴──⚪
           S      U    R      W                       S      U    R      W 
      🔴──┴──⚪                                 ⚪──┴──⚪                
       H      V                                   H      V                 
                                              🔴──┴                       
                                               5                           

相比较于红黑树的节点插入，删除节点更为复杂，从子节点是否为 null 和红色来讨论。

把要删除的结点在不破坏平衡的前提下先染红，再删除。

子节点至少有一个为 null

当待删除的节点的子节点至少有一个为 null 节点时，删除了该节点后，将其有值的节点取代当前节点即可。



# 🚩 Graph Algorithms 图论与算法
- [图及其衍生算法 Graph algorithms](https://www.cnblogs.com/silence-cho/p/10089065.html)
- [树及其衍生算法 Tree Algorithms](https://www.cnblogs.com/silence-cho/p/10056097.html)
- [从 Graph 到 Graph Convolution：漫谈图神经网络模型](https://www.cnblogs.com/SivilTaram/p/graph_neural_network_1.html)
- [1. A Comprehensive Survey on Graph Neural Networks](https://arxiv.org/abs/1901.00596)
- [2. the Graph Neural Network Model by Franco Scarselli](https://persagen.com/files/misc/scarselli2009graph.pdf)
- [3. Spectral Networks and Locally Connected Networks on Graphs by Joan Bruna](https://arxiv.org/abs/1312.6203)
- [4. Distributed Representations of Words and Phrases and their Compositionality by Tomas Mikolov](http://papers.nips.cc/paper/5021-distributed-representations-of-words-andphrases)
- [5. DeepWalk: Online Learning of Social Representations](https://arxiv.org/abs/1403.6652)
- [6. Translating Embeddings for Modeling Multi-relational Data](https://papers.nips.cc/paper/5071-translating-embeddings-for-modeling-multi-relational-data)
- [7. Deep Learning on Graphs: A Survey](https://arxiv.org/abs/1812.04202)
- [8. 如何理解Graph Convolutional Network（GCN）](https://www.zhihu.com/question/54504471)
- [9. Almeida–Pineda recurrent backpropagation](https://www.wikiwand.com/en/Almeida–Pineda_recurrent_backpropagation)
- [10. Gated graph sequence neural networks](https://arxiv.org/abs/1511.05493)
- [11. Representing Schema Structure with Graph Neural Networks for Text-to-SQL Parsing](https://arxiv.org/abs/1905.06241)
- [12. Spider1.0 Yale Semantic Parsing and Text-to-SQL Challenge](https://yale-lily.github.io/spider)
- [13](https://www.wikiwand.com/en/Laplacian_matrix)
- [14. Graph Neural Networks: A Review of Methods and Applications](https://arxiv.org/pdf/1812.08434)


树是一种特殊的图，相比树，图更能用来表示现实世界中的的实体，如路线图，网络节点图，课程体系图等。一旦能用图来描述实体，能模拟和解决一些非常复杂的任务。

相关概念和词汇如下：

- Vertex 顶点：图的节点
- Edge 边：顶点间的连线，若边具有方向时，组成有向图（directed graph）
- Weight 权重：一个顶点到其他顶点的距离不同，对应边具有的权重也不同
- Path 路径：一个顶点到另一个顶点所经过的所有边的集合
- Cycle 回路：在有向图中，从一个顶点开始，最后又回到起始顶点的路径为一个回路

图可以表示为 G = {V，E}，其中 V 为顶点的集合，E 为边的集合。

例如：
    
     G = {V，E}

     V = {𝜐0, 𝜐1, 𝜐2, 𝜐3, 𝜐4 ...}

     E = {(𝜐0, 𝜐1 1), (𝜐1, 𝜐2, 3), (𝜐3, 𝜐4, 1) ...}

遍历图节点时，有以下两搜索算法：

- 宽度优先搜索 BFS - Breadth First Search：先搜索同级的顶点，再搜索下一级的顶点。
- 深度优先搜索 DFS - Depth First Search：先找下一级的顶点，再找同级的顶点。

可以通过邻接矩阵（adjacency matrix）或领接表（adjacency list）来实现图。

邻接矩阵表示图的结构如下，图中的数字表示两个顶点相连，且边的权重为该值。可以发现邻接矩阵更加适合于边较多的图，不然会造成内存空间的浪费。

|    | 𝜐0 | 𝜐1 | 𝜐2 | 𝜐3 | 𝜐4 |
|----|----|----|----|----|----|
| 𝜐0 |    |  1 |    |    |    |
|----|----|----|----|----|----|
| 𝜐1 |    |    |  3 |    |    |
|----|----|----|----|----|----|
| 𝜐2 |    |    |    |    |    |
|----|----|----|----|----|----|
| 𝜐3 |    |    |    |    |  1 |
|----|----|----|----|----|----|
| 𝜐4 |    |    |    |    |    |


邻接表表示图的结构如下，一个主列表中包含图的所有顶点，每个顶点又各包含列表记录与其相连的边。可以发现邻接表更适合边较少的图。

    Graph: numVertices = 5

    List       Vertexes
    +====+     +==================+
    | 𝜐0 | --> | ID:𝜐0 adj:{v1:1} |
    +====+     +==================+
    +====+     +==================+
    | 𝜐1 | --> | ID:𝜐1 adj:{v2:3} |
    +====+     +==================+
    +====+     +==================+
    | 𝜐2 | --> | ID:𝜐2 adj:{}     |
    +====+     +==================+
    +====+     +==================+
    | 𝜐3 | --> | ID:𝜐3 adj:{v4:1} |
    +====+     +==================+
    +====+     +==================+
    | 𝜐4 | --> | ID:𝜐4 adj:{}     |
    +====+     +==================+



图神经网络(Graph Neural Network)的历史发展分支非常之多，这里摘要作一个简要介绍：

1. 2005 年，提出图神经网络的概念。2009 年 Franco 博士在 the Graph Neural Network Model 论文中定义了图神经网络的理论基础。
2. 最早的 GNN 主要解决的还是如分子结构分类等严格意义上的图论问题。但实际上欧式空间(比如像图像 Image)或者是序列(比如像文本 Text)，许多常见场景也都可以转换成图(Graph)，然后就能使用图神经网络技术来建模。
3. 2013 年，在图信号处理的基础上，Graph Signal Processing，Bruna 在文献 Spectral Networks and Locally Connected Networks on Graphs 中首次提出图上的基于频域 Spectral-domain 和基于空域 Spatial-domain 的卷积神经网络。
4. 其后至今，学界提出了很多基于空域的图卷积方式，也有不少学者试图通过统一的框架将前人的工作统一起来。而基于频域的工作相对较少，只受到部分学者的青睐。
5. 值得一提的是，图神经网络与图表示学习 Represent Learning for Graph 的发展历程也惊人地相似。
6. 2014 年，在 Tomas Mikolov word2vec 的启发下，Perozzi 等人提出了 DeepWalk，开启了深度学习时代图表示学习的大门。就在几乎一样的时间，Bordes 等人提出了大名鼎鼎的 Translating Embeddings，为知识图谱的分布式表示 Represent Learning for Knowledge Graph 奠定了基础。


# 🚩 PAT 1088 三人行
- https://pintia.cn/problem-sets/994805260223102976/problems/1038429286185074688

子曰：“三人行，必有我师焉。择其善者而从之，其不善者而改之。”

本题给定甲、乙、丙三个人的能力值关系为：甲的能力值确定是 2 位正整数；把甲的能力值的 2 个数字调换位置就是乙的能力值；甲乙两人能力差是丙的能力值的 X 倍；乙的能力值是丙的 Y 倍。请你指出谁比你强应“从之”，谁比你弱应“改之”。

输入格式：
输入在一行中给出三个数，依次为：M（你自己的能力值）、X 和 Y。三个数字均为不超过 1000 的正整数。

输出格式：
在一行中首先输出甲的能力值，随后依次输出甲、乙、丙三人与你的关系：如果其比你强，输出 Cong；平等则输出 Ping；比你弱则输出 Gai。其间以 1 个空格分隔，行首尾不得有多余空格。

注意：如果解不唯一，则以甲的最大解为准进行判断；如果解不存在，则输出 No Solution。

    输入样例 1：
    48 3 7
    输出样例 1：
    48 Ping Cong Gai

题目评价，作为一道 Basic Level 的题目，感觉是在玩文字游戏！

逻辑语言：

A B C 三人能力值的关系，输入值 M X Y 最大值不超过 1000 的正整数：

- A 能力是确定的 2 位整数；
- B 能力是 A 能力值两位数字调换后的值，且是 C 能力值的 Y 倍；
- C 能力值是 A B 差值的 X 倍；

数学语言如下，已知 X Y，求 A B C：

    A = ab
    B = ba = Y * C
    | A - B | = X * C


# 🚩 08.12. 八皇后
- https://leetcode-cn.com/problems/eight-queens-lcci/
- https://algorithm-visualizer.org/backtracking/n-queens-problem

设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。

示例:

    输入：4
    输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
    解释: 4 皇后问题存在如下两个不同的解法。
    [[
    " . Q . . ",  // 解法 1
    " . . . Q ",
    " Q . . . ",
    " . . Q . "
    ], [
    " . . Q . ",  // 解法 2
    " Q . . . ",
    " . . . Q ",
    " . Q . . "
    ]]

首先，定性问题是很关键的一步，错误的定性会导致使用错误的解题办法。

N 皇后本质上就是一个枚举问题，和全排列、组合什么的一个道理，枚举问题都可以考虑使用 DFS 来解决。


# 🚩 getTopN

假定输入一个二维数组，元素是降序的数值，实现一个 getTopN() 方法，返回一个数组包含二维数组中最大的 N 个值。

第一个版本，使用现成的 API 快速实现，不过忽略了数据已经降序的条件：

```
function getTopNv1(arrs, n){
  let can = [];
  for(var ix in arrs){
    can = can.concat(arrs[ix]);
  }
  can = can.sort((a, b)=>b-a);
  return can.slice(0, n);
}
```

更好的实现版本是利用数据的降序性质，用递归方法逐一获取：

```
function getTopN(arrs, n, ix = null){
  if(!ix){
    ix = [];
    for(var i in arrs){
      ix[i] = 0;
    }
  }
  let max = arrs[0][ix[0]];
  let mp = 0;
  for(var i in arrs){
    let v = arrs[i][ix[i]];
    if(max<v) mp = i;
    max = max<v? v:max;
  }
  ix[mp]+=1;
  if(n>1) {
    let more = getTopN(arrs, n-1, ix);
    return [max, ...more];
  }
  return [max];
}

let test = [
  [11, 8, 7, 4, 3],
  [10, 8, 6, 4, 3],
  [6, 5, 3],
  [20, 6, 3],
]
let top3 = getTopN(test, 3);
console.log(top3);
```

# 🚩 Tail-Recursive 比 Recursive 更快！
- TCO - Tail call optimization https://exploringjs.com/es6/ch_tail-calls.html

有个比喻可以帮你理解`尾递归` Tail-Recursive 与`递归` Recursive 的区别：

假设玩一个游戏，你需要去收集散落了一路，并通向远方的硬币。

于是你一个一个的捡，一边捡一边往前走，但是你必须往地上撒些纸条做记号，因为不做记号你就忘了回来的路。于是你一路走，一路捡，一路撒纸条。等你捡到最后一个硬币时，你开始沿着记号回来了，一路走，一路捡纸条(保护环境)。等回到出发点时，你把硬币装你包里，把纸条扔进垃圾桶。
这就是非尾递归，纸条就是你的调用栈，是内存记录。

下次再玩这个游戏时，你学聪明了，你直接背着包过去了，一路走，一路捡，一路往包里塞。等到了终点时，最后一个硬币进包了，任务完成了，你不回来了！这就是尾递归，省去了调用栈的消耗。这就是 TCO - Tail call optimization 尾递归优化。

尾递归也是递归，是一种特殊的尾调用，即在尾部直接调用自身的递归函数。尾调用不一定是递归调用，但是尾递归特别有用，也比较容易实现。

尾递归在普通尾调用的基础上，多出了2个特征：

1. 在尾部调用的是函数自身 (Self-called)；
2. 可通过优化，使得计算仅占用常量栈空间 (Stack Space)。

用 n 的阶乘函数来比较两种递归方式：

```c
function fact_(n) {
  if (n <= 1n) {
      return 1n;
  } else {
      return n * fact(n - 1n);
  }
}

function fact(n, v) {
  v =  v || n;
  if (n <= 1n) {
      return v * 1n;
  } else {
      return fact(n - 1n, v * (n - 1n));
  }
}
console.log(fact_(1000n))
console.log(fact(1000n))
```

跟普通递归函数比起来，尾递归函数因为在展开的过程中计算并且缓存了结果，经过编译优化后，不会像普通递归函数那样展开出非常庞大的中间结果。

这个 fact(n - 1, r * n) 返回的时候，同时也是上一层的 fact(n, r) 返回，所以保存栈是没有任何意义的，编译器可以根据这点来实现优化，从这点来看，尾递归优化本身完全等效于一个无栈的循环结构。


# 🚩 Tower of Hanoi 汉诺塔

这是一个源于印度古老传说的益智玩具，大梵天创造世界的时候做了三根金刚石柱子，在一根柱子上从下往上按照大小顺序摞着 64 片黄金圆盘。大梵天命令婆罗门把圆盘从下面开始按大小顺序重新摆放在另一根柱子上，并且规定，在小圆盘上不能放大圆盘，在三根柱子之间一次只能移动一个圆盘。

条件：

（1）每次只能移动一个圆盘
（2）圆盘可以插到 X，Y，Z 中任一柱上
（3）任何时候不能将一个较大的圆盘压在较小的圆盘之上

递归思想解决问题核心在于：递 与 归，在层层递进中将问题分解，回归过程中将分解到终点或临界点的简单问题的解决并且回溯解决上一个问题直到解决最初始的问题。

不要管有几个盘，你关心的始终应该是最底下的那个盘，你要将它移到到目标位置上去，直接移动它。到于这上面的所有盘都看当一个整体，次递归函数去处理。

```c
function hanoi(n, a, b, c) {
  if(n<=1){
    console.log("Move %s -> %s", a, c);
    return ;
  }
  hanoi(n - 1, a, c, b)
  console.log("Move %s -> %s", a, c);
  hanoi(n - 1, b, a, c)
}
hanoi(3, "A", "B", "C");
```

用粗暴的理解就是汉诺塔永远只有三步：

- 把最底下圆盘以上的打包弄走；
- 把最底下圆盘移到目标位上；
- 递归处理下一个；

本质就是从末端倒推，即最终底层盘要往目标位置移动。

# 🚩 1. two-sum EASY
- https://leetcode-cn.com/problems/two-sum/

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：

    输入：nums = [3,2,4], target = 6
    输出：[1,2]

示例 3：

    输入：nums = [3,3], target = 6
    输出：[0,1]

提示：

- 2 <= nums.length <= 10^3
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- 只会存在一个有效答案

可以使用两次循环，遍历整个数组解决：

- 时间复杂度：O(n^2)
- 空间复杂度：O(1)

以下使用 Hash Map 一次循环遍历检查，降低时间复杂度为 O(n)，但提升了空间复杂度 O(n)：

```js
/**
 * JavaScript Solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return [map.get(nums[i]), i];
        }
        map.set(target-nums[i], i);
    }
};
```

# 🚩 2. add-two-numbers NORMAL
- https://leetcode-cn.com/problems/add-two-numbers/

给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


示例 1：

    输入：l1 = [2,4,3], l2 = [5,6,4]
    输出：[7,0,8]
    解释：342 + 465 = 807.

示例 2：

    输入：l1 = [0], l2 = [0]
    输出：[0]

示例 3：

    输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    输出：[8,9,9,9,0,0,0,1]

提示：

- 每个链表中的节点数在范围 [1, 100] 内
- 0 <= Node.val <= 9
- 题目数据保证列表表示的数字不含前导零

解题，将问题抽象，分离各个需求为函数实现，将关注点放在可以直接解决的问题上：

- 问题一，抽象一个 list2number 函数实现链表为可计算的数值；
- 问题二，抽象一个 number2list 函数实现数值到链表的转换；

发现子问题就抽象一个函数解决，先不管细节，将关注点放在能直接解决问题的思考上，完成一个抽象解决方案再去逐步实现细节的实现。

但是这个方法，涉及的转换过程太多，并且处理的数值有长度限制，如 JavaScript 只有 52bit 精度，最大精度表示的最大值为 2^53-1，处理不了超长精度的数值。从这个题目应该要了解到，它倾向于实现一个类似 BigInt 的数据结构，只不过要求实现的是 BigInt 加法器。

JavaScript 实现：

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let vs = [];
  while(l1 || l2){
      let s = (l1? l1.val:0) + (l2? l2.val:0);
      vs.push(s);
      if(l1 !== null) l1 = l1.next;
      if(l2 !== null) l2 = l2.next;
  }
  return makeList(vs);
}

var makeList = function(vs) {
  let v = vs.shift();
  let carry = (v-v%10)/10;
  if(carry){
    if(vs.length === 0) vs[0] = 0;
    vs[0] += carry;
  }
  if(vs.length === 0) return new ListNode(v%10);
  let cn = makeList(vs);
  return new ListNode(v%10, cn);
}
```



# 🚩 13. strStr() EASY
- https://www.lintcode.com/problem/implement-strstr/

For a given source string and a target string, you should output the first index(from 0) of target string in source string.

If target does not exist in source, just return -1.

O(n2) is acceptable. Can you implement an O(n) algorithm? (hint: KMP)

Do I need to implement KMP Algorithm in a real interview?

Not necessary. When you meet this problem in a real interview, the interviewer may just want to test your basic implementation ability. But make sure you confirm with the interviewer first.

```java
public class Solution {
    /**
     * @param source: 
     * @param target: 
     * @return: return the index
     */
    public int strStr(String source, String target) {
        // Write your code here
        for(int ik = 0; ik < source.length()-target.length()+1; ik++){
            int ij = 0;
            for(; ij < target.length(); ij++){
                if(source.charAt(ik+ij) != target.charAt(ij)) break;
            }
            if(ij==target.length()) return ik;
        }
        return -1;
    }
}
```

KMP 算法的核心是存放部分匹配表 Partial Match Table 的数组。

对于字符串 abababca，它的 PMT 如下表所示：

    char  a b a b a b c a
    index 1 2 3 4 5 6 7 8
    value 0 0 1 2 3 4 0 1
    next  - 0 0 1 2 3 4 0

就像例子中所示的，如果待匹配的模式字符串有 8 个字符，那么 PMT 就会有 8 个值。

解释一下字符串的**前缀**和**后缀**：

- 字符串 A 和 B 存在 A=BS，其中 S 是任意的非空字符串，那就称 B 为 A 的前缀。
- 同样可以定义后缀 A=SB，其中 S 是任意的非空字符串，那就称 B 为 A 的后缀。

例如，Harry 的前缀集合是 { H, Ha, Har, Harr}，双例如，Potter 的后缀集合是 { otter, tter, ter, er, r}。

有了这两个概念，就可以知道 PMT 中的值意义是字符串的前缀集合与后缀集合的交集中最长元素的长度。要注意的是，字符串本身并不是自己的后缀。

例如，对于 aba，它的前缀集合为 { a, ab }，后缀集合为 { ba, a }。两个集合的交集为 { a }，那么长度最长的元素就是字符串 a 了，长度为 1，所以对于 aba 而言，它在 PMT 表中对应的值就是 1。再比如，对于字符串 ababa ，它的前缀集合为{ a, ab, aba, abab }，它的后缀集合为 { baba, aba, ba, a }， 两个集合的交集为 { a, aba }，其中最长的元素为 aba，长度为 3。

再来看如何使用这个表来加速字符串的查找，以及这样用的道理是什么。

要在主字符串 `ababababca` 中查找模式字符串 `abababca`，如果在 j 处字符不匹配，那么由于前边所说的模式字符串 PMT 的性质，主字符串中 i 指针之前的 `PMT[j−1]` 指定的位数就一定与模式字符串的第 0 位至第 `PMT[j−1]` 位是相同的。这是因为主字符串在 i 位失配，也就意味着主字符串从 i−j 到 i 这一段是与模式字符串的 0 到 j 这一段是完全相同的。而模式字符串从 0 到 j−1 ，在这个例子中就是 `ababab`，其前缀集合与后缀集合的交集的最长元素为 `abab`， 长度为4。所以就可以断言，主字符串中i指针之前的 4 位一定与模式字符串的第 0 位至第 4 位是相同的，即长度为 4 的后缀与前缀相同。这样一来，我们就可以将这些字符段的比较省略掉。具体的做法是，保持 i 指针不动，然后将 j 指针指向模式字符串的 PMT[j−1] 位即可。

                v(i)              v(i)
    main  ababababca        ababababca
    char  abababca            abababca
                ^(j)              ^(j)

有了上面的思路，我们就可以使用PMT加速字符串的查找了。通常不直接使用 PMT 数组，而是将数组向后偏移一位，新得到的这个数组称为 next 数组。

# 🚩 804. Unique Morse Code Words EASY
- https://leetcode-cn.com/problems/unique-morse-code-words/
- 如何在 15 分钟内学会摩斯密码？Nelson https://www.bilibili.com/video/av628068656/
- https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree

国际摩尔斯密码定义一种标准编码方式，将每个字母对应于一个由一系列点和短线组成的字符串， 比如: "a" 对应 ".-", "b" 对应 "-...", "c" 对应 "-.-.", 等等。

为了方便，所有 26 个英文字母对应摩尔斯密码表如下：

    [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

给定一个单词列表，每个单词可以写成每个字母对应摩尔斯密码的组合。例如，"cab" 可以写成 "-.-..--..."，(即 "-.-." + ".-" + "-..." 字符串的结合)。我们将这样一个连接过程称作单词翻译。

返回我们可以获得所有词不同单词翻译的数量。

例如:

    输入: words = ["gin", "zen", "gig", "msg"]
    输出: 2
    解释: 
    各单词翻译如下:
    "gin" -> "--...-."
    "zen" -> "--...-."
    "gig" -> "--...--."
    "msg" -> "--...--."

共有 2 种不同翻译, "--...-." 和 "--...--.".
 

注意:

- 单词列表words 的长度不会超过 100。
- 每个单词 words[i]的长度范围为 [1, 12]。
- 每个单词 words[i]只包含小写字母。


Morse Binary Tree

                             • ⇦              Morse Binary Tree            ⇨ —     EX.
                                                      │                             SOS  ••• --- •••
                             ┌────────────────────────┴────────────────────────┐    DENO -•• • -•
                           • E                                                 T —  RUST •-• ••- ••• -
               ┌─────────────┴─────────┐                         ┌─────────────┴─────────┐
             • I                       A                         N                       M —
         ┌─────┴─────┐           ┌─────┴─────┐             ┌─────┴─────┐           ┌─────┴─────┐
       • S           U           R           W             D           K           G           O —
      ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐       ┌──┴──┐     ┌──┴──┐     ┌──┴──┐     ┌──┴──┐
    • H     V     F     _     L     _     P     J       B     X     C     Y     Z     Q     _     _
    ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐   ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐ ┌─┴─┐
  • 5   4     3           2       +               1   6   = /                 7           8     9   0

分组助记：

- E.T. ---- 外星人，斯皮尔伯格的影片虚构主角
- IANM ---- I'm no body
- SU RW DK GO ---- Sure Read Write Drink Go
- HVF L PJ BXCY ZQ ---- Have a half Let's PJ Boxing CY Zero
- 53 3 2 + 1 6=/ 7 8 90 ---- 五四运动 030002 

练习：

    SOS  ... --- ...
    work .-- --- .-. -.-
    gook --. --- --- -.-


# 🚩 蓝眼睛驱逐令
- https://blog.csdn.net/midi666/article/details/105230879
- https://www.jianshu.com/p/49b4d6e99d29

有个岛上住着一群人，有一天来了个游客，定了一条奇怪的规矩：所有蓝眼睛的人都必须尽快离开这个岛。每晚 8 点会有一个航班离岛。每个人都看得见别人眼睛的颜色，但不知道自己的（别人也不可以告知）。此外，他们不知道岛上到底有多少人是蓝眼睛的，只知道至少有一个人的眼睛是蓝色的。所有蓝眼睛的人要花几天才能离开这个岛？ 

解答：下面将采用简单构造法。假定这个岛上一共有 n 人，其中 c 人有蓝眼睛。由题目可知，c > 0。 

1） 情况 c = 1：只有一人是蓝眼睛的 

假设岛上所有人都是聪明的，蓝眼睛的人四处观察之后，发现没有人是蓝眼睛的。但他知道至少有一人是蓝眼睛的，于是就能推导出自己一定是蓝眼睛的。因此，他会搭乘当晚的飞机离开。 

2）情况 c = 2：只有两人是蓝眼睛的 

两个蓝眼睛的人看到对方，并不确定c是1还是2，但是由上一种情况，他们知道，如果c = 1，那个蓝眼睛的人第一晚就会离岛。因此，发现另一个蓝眼睛的人仍在岛上，他一定能推断出c = 2，也就意味着他自己也是蓝眼睛的。于是，两个蓝眼睛的人都会在第二晚离岛。 

3）情况 c > 2：一般情况 

逐步提高 c 时，我们可以看出上述逻辑仍旧适用。如果 c = 3，那么，这三个人会立即意识到有 2 到 3 人是蓝眼睛的。如果有两人是蓝眼睛的，那么这两人会在第二晚离岛。因此，如果过了第二晚另外两人还在岛上，每个蓝眼睛的人都能推断出c = 3，因此这三人都有蓝眼睛。他们会在第三晚离岛。 

不论 c 为什么值，都可以套用这个模式。所以，如果有 c 人是蓝眼睛的，则所有蓝眼睛的人要用 c 晚才能离岛，且都在同一晚离开。

