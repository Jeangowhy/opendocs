
# AngularJS 教程
- 菜鸟手册 http://www.runoob.com/angularjs/angularjs-tutorial.html
- 快速搭建开发环境 https://gitbook.cn/gitchat/column/5bebdaf22c33167c317cc285/topic/5d4bbc6c7c00c637972766ce
- https://gitee.com/learn-angular-series/learn-ng-add

AngularJS 诞生于2009年，由 Misko Hevery 等人创建，后为 Google 所收购。是一款优秀的前端框架，已经被用于 Google 的多款产品当中。AngularJS 有着诸多特性，最为核心的是：MVW（Model-View-Whatever）、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。 它通过新的属性和表达式扩展了 HTML。可以构建一个单一页面应用程序（SPAs：Single Page Applications）。 可搭配 Bootstrap 等前端UI框架。

## 一个DEMO

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <script src="https://cdn.staticfile.org/angular.js/1.4.6/angular.min.js"></script>
    </head>
    <body>

    <div ng-app="" ng-init="name='John'">
      <p>名字 : <input type="text" ng-model="name"></p>
      <h1>Hello {{name}}</h1>
      <!-- <span ng-bind="name"></span> -->
    </div>

    </body>
    </html>

AngularJS 指令是以 ng 作为前缀的 HTML 属性。例子中通过 ng-model 绑定输入框的数据，又通过 ng-bind 即 `{{name}}` 输出到页面上。ng-app 这个属性告诉 AngularJS，这是个程序。这会提高网页加载速度，因为 HTML 加载不受制于脚本加载。AngularJS 加载完成会自动执行，建议把脚本放在 body 元素的后面，这样可以避免阻塞页面加载。

    ng-app 指令定义一个 AngularJS 应用程序。
    ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
    ng-bind 指令把应用程序数据绑定到 HTML 视图。
    ng-init 指令初始化 AngularJS 应用程序变量。


在页面的元素节点上添加 ng-app 属性即可以启用 Angular。

如果不在页面上添加 ng-app 属性，可以手动启动：

    angular.element(document).ready(function(){
        angular.bootstrap(document, ["myModule"]);
        // angular.bootstrap(document.documentElement,["myModule"]);
    });

各个 angular.js 版本下载： https://github.com/angular/angular.js/releases


## HTML5扩展属性

HTML5 允许扩展的属性，以 data- 开头，而 AngularJS 属性以 ng- 开头，也兼容了 HTML5 的扩展属性，可以在HTML5环境中使用 data-ng- 开头。

    <div data-ng-app="" data-ng-init="firstName='John'">
        <p>姓名为 <span data-ng-bind="firstName"></span></p>
    </div>

## 表达式 - 对象/字符串/数值

表达式写在双大括号内：{{ expression }}。AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令相似。也很像 JavaScript 表达式：它们可以包含文字、运算符和变量。 与 JavaScript 表达式不同的是，AngularJS 表达式支持过滤器，但不支持条件判断，循环及异常。

<div ng-app="" ng-init="firstName='John'">
    <p>表达式实例 {{ 5 + 5 }} 或 {{ firstName + " " + lastName }}</p>
</div>

<div ng-app="" ng-init="firstName='John';quantity=1;cost=5;person={name:'Lax',age:18}">
    <p>表达式实例 {{ 5 + 5 }} 或 {{ firstName + " " + person.name }}</p>
</div>


## AngularJS 应用 与 控制器

AngularJS 模块（Module） 定义了 AngularJS 应用。控制器（Controller） 用于控制 AngularJS 应用。 ng-app指令指明了应用, ng-controller 指明了控制器。
    
    <div ng-app="myApp" ng-controller="myCtrl">
        名: <input type="text" ng-model="firstName"><br>
        姓: <input type="text" ng-model="lastName"><br>
        <br>
        姓名: {{firstName + " " + lastName}}
    </div>
     
    <script>
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope, $rootScope) {
            $scope.firstName= "John";
            $scope.lastName= "Doe";
            $scope.fullName = function() {
                return $scope.firstName + " " + $scope.lastName;
            }
        });
    </script>

$scope 为当前控制器作用域，当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。 视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。

$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。

在大型的应用程序中，通常是把控制器存储在外部文件中。只需要把控制器代码复制到名为 personController.js 的外部文件中即可

## 样式类 ng-bind 指令

和 img.src 属性一样，class 属性也不能直接使用数据绑定，可以变通使用以下两种方式：

    <div ng-app="">
        <p class="ng-bind: 'a'+1">ng-bind</p>
    </div>

    <div ng-app="" class="ng-scope">
        <p class="ng-bind: 'a'+1 ng-binding">a1</p>
    </div>

<div ng-class="{true:'zhende',false:'jiade'}[className]"></div>
实现很简单，就是当className为真的时候class为zhende，相反则为jiade。

<div ng-class="{'selectClass':select,'choiceClass':choice,'haha':lala}"></div>
当lala为true的时候，class则为haha

## ng-repeat 指令

    <div ng-app="" ng-init="names=['Jani','Hege','Kai']">
      <p>使用 ng-repeat 来循环数组</p>
      <ul>
        <li ng-repeat="x in names">
          {{ x }}
        </li>
      </ul>
    </div>

## ng-model 与状态 ng-show/ng-hide 显示/隐藏指令

ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error):

    <form ng-app="" name="myForm" ng-init="myText = 'test@runoob.com'">
        Email:
        <input type="email" name="myAddress" ng-model="myText" required></p>
        <span ng-show="myForm.myAddress.$error.email">不是一个合法的邮箱地址</span>
        <span ng-show="!myForm.myAddress.$valid">不是一个合法的邮箱地址</span>
        <h1>状态</h1>
        {{myForm.myAddress.$error}} 
        {{myForm.myAddress.$dirty}}
        {{myForm.myAddress.$touched}}
        {{myForm.myAddress.$valid}}
    </form>

对于一个无邮箱地址新状态对应： {"email":true} true true false

ng-model 指令基于它们的状态为 HTML 元素提供了 CSS 类：

    <style>
    input.ng-invalid {
        background-color: red;
    }
    </style>

    <form ng-app="" name="myForm">
        输入你的名字:
        <input name="myName" ng-model="myText" required>
    </form>


## 创建自定义的指令

使用 .directive 函数来添加自定义的指令。 要调用自定义指令，HTML 元素上需要添加自定义指令名。 使用驼峰法来命名一个指令，demoDirective。因为WEB节点只使用小写，在使用它时需要以 - 分割并使用小写字母, demo-directive。

    <body ng-app="myApp">
        <demo-directive></demo-directive>
        <script>
        var app = angular.module("myApp", []);
        app.directive("demoDirective", function() {
            return {
                // 打开注释调用并设置可见
                restrict : "M",
                replace : true,
                template : "<h1>自定义指令!</h1>"
            };
        });
        </script>
    </body>

按定义约束属性restrict的不同设置，调用指令的方法有几种： 

    E 作为元素名使用 <demo-directive></demo-directive> 
    A 作为属性使用   <div demo-directive></div> 
    C 作为类名使用   <div class="demo-directive"></div> 
    M 作为注释使用   <!-- directive: demo-directive --> 

restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。


## 表达式过滤器

AngularJS 过滤器可用于转换数据，有以下几种：

    currency    格式化数字为货币格式。
    filter      从数组项中选择一个子集。
    lowercase   格式化字符串为小写。
    orderBy     根据某个表达式排列数组。
    uppercase   格式化字符串为大写。

表达式中添加过滤器， 过滤器可以通过一个管道字符和一个过滤器添加到表达式中。

    <div ng-app="myApp" ng-controller="personCtrl">
        <p>姓名为 {{ lastName | uppercase }}</p>
    </div>

以下实例自定义一个过滤器 reverse，将字符串反转：

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope) {
        $scope.msg = "demoFilter";
    });
    app.filter('reverse', function() {
        return function(text) {
            return text.split("").reverse().join("");
        }
    });


## 服务

在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用。 AngularJS 内建了30 多个服务。

$location 服务

$location vs window.location，比使用 window.location 对象更好。允许对当前浏览器位置进行读写操作，暴露jquery风格的读写器，可获取到应用生命周期内的每一个阶段，并且和$watch整合，$location.path()返回"/actual/path"。


$http 服务是 AngularJS 应用中最常用的服务。 服务向服务器发送请求，应用响应服务器传送过来的数据。

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
        $http.get("welcome.htm").then(function (response) {
            $scope.myWelcome = response.data;
        });
    });

$timeout 服务对应了 JS window.setTimeout 函数。

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $timeout) {
        $scope.myHeader = "Hello World!";
        $timeout(function () {
            $scope.myHeader = "How are you today?";
        }, 2000);
    });

$interval 服务对应了 JS window.setInterval 函数。

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $interval) {
        $scope.theTime = new Date().toLocaleTimeString();
        $interval(function () {
            $scope.theTime = new Date().toLocaleTimeString();
        }, 1000);
    });

创建自定义服务

    app.service('demoHex', function() {
        this.myFunc = function (x) {
            return x.toString(16);
        }
    });

要使用自定义服务，需要在定义控制器的时候独立添加，设置依赖关系:

    app.controller('myCtrl', function($scope, demoHex) {
        $scope.hex = demoHex.myFunc(255);
    });

过滤器中，使用自定义服务

    app.filter('myFormat',['demoHex', function(demoHex) {
        return function(x) {
            return demoHex.myFunc(x);
        };
    }]);


## 依赖注入

依赖注入（Dependency Injection，简称DI）是一种软件设计模式，在这种模式下，一个或更多的依赖（或服务）被注入（或者通过引用传递）到一个独立的对象（或客户端）中，然后成为了该客户端状态的一部分。

该模式分离了客户端依赖本身行为的创建，这使得程序设计变得松耦合，并遵循了依赖反转和单一职责原则。与服务定位器模式形成直接对比的是，它允许客户端了解客户端如何使用该系统找到依赖

一句话 --- 没事你不要来找我，有事我会去找你。

AngularJS 提供很好的依赖注入机制。以下5个核心组件用来作为依赖注入： value factory service provider constant

Value 是一个简单的 javascript 对象，用于向控制器传递值（配置阶段）：

    // 定义一个模块
    var mainApp = angular.module("mainApp", []);

    // 创建 value 对象 "defaultInput" 并注入到控制器
    mainApp.value("defaultInput", 5);
    mainApp.controller('CalcController', function($scope, CalcService, defaultInput) {
       $scope.number = defaultInput;
       $scope.result = CalcService.square($scope.number);
       $scope.square = function() {
          $scope.result = CalcService.square($scope.number);
       }
    });

    // 创建 factory "MathService" 用于返回乘积 provides a method multiply to return multiplication of two numbers
    mainApp.factory('MathService', function() {
       var factory = {};
       factory.multiply = function(a, b) {
          return a * b
       }
       return factory;
    }); 
    // 在 service 中注入 factory "MathService"
    mainApp.service('CalcService', function(MathService){
       this.square = function(a) {
          return MathService.multiply(a,a);
       }
    });

    // 使用 provider 方式创建 MathService，Provider 中提供了一个 factory 方法 get()，它用于返回 value/service/factory。
    mainApp.config(function($provide) {
       $provide.provider('MathService', function() {
          this.$get = function() {
             var factory = {};  
             factory.multiply = function(a, b) {
                return a * b; 
             }
             return factory;
          };
       });
    });

    // constant(常量)用来在配置阶段传递数值，注意这个常量在配置阶段是不可用的。
    mainApp.constant("configParam", "constant value");


## 路由模块 ngRoute/ngView

通过 AngularJS 可以实现多视图的单页 Web 应用（single page web application，SPA）。
通常我们的 URL 形式为 http://www.xxx.com/page，但在单页 Web 应用中 AngularJS 通过后缀 #!pageHash 实现。

    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>AngularJS 路由</title>
    <script src="https://cdn.bootcss.com/angular.js/1.7.0/angular.min.js"></script>
    <script src="https://cdn.bootcss.com/angular.js/1.7.0/angular-route.min.js"></script>
    </head>
    <body ng-app='routingDemoApp'>
        <h2>AngularJS 路由应用</h2>
        <ul>
            <li><a href="#!/">首页</a></li>
            <li><a href="#!/computers">电脑</a></li>
            <li><a href="#!/printers">打印机</a></li>
            <li><a href="#!/blabla">其他</a></li>
        </ul>
        <div ng-view></div>
        <script>
            angular.module('routingDemoApp',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{template:'这是首页页面'})
                .when('/computers',{template:'这是电脑分类页面'})
                .when('/printers',{template:'这是打印机页面'})
                .otherwise({redirectTo:'/'});
            }]);
        </script>
    </body>
    </html>

1、载入了实现路由的 js 文件：angular-route.js。
2、包含了 ngRoute 模块作为主应用模块的依赖模块。
3、使用 ngView 指令。 该 div 内的 HTML 内容会根据路由的变化而变化。
4、配置 $routeProvider，配置路径使用正则表达式，路由配置对象语法规则如下：

    $routeProvider.when(url, {
        template: string,                       // 在 ng-view 中插入简单的 HTML 内容
        templateUrl: string,                    // 在 ng-view 中插入 HTML 模板文件'views/computers.html'
        controller: string, function 或 array,   // 在当前模板上执行的controller函数，生成新的scope
        controllerAs: string,                   // 为controller指定别名
        redirectTo: string, function,           // 重定向的地址。
        resolve: object<key, function>          // 指定当前controller所依赖的其他模块。
    });


