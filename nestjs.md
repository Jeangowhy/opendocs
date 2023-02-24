
# 🚩 Nest.js 光速入门
- https://docs.nestjs.com/
- https://www.fastify.io/
- https://github.com/fastify/fastify
- RenderModule 整合 Next.js + Nest.js https://github.com/ananiy/nest-next-module
- RxJS 快速入门 https://www.cnblogs.com/vcluopeng/p/14010904.html
- Nest.js 与微服务 https://docs.nestjs.com/microservices/basics
- Nest.js 示范代码 https://github.com/nestjs/nest/tree/master/sample
- Demo https://github.com/jimboyeah/nest-demo/

真正光速是不可能光速的，但是掌握以下基本概念，还可以极速入门的，两天掌握官方文档中的 Overview 和 Fundamentals 两大核心内容。

- Node.js 编程环境；
- TypeScript 静态类型脚本语言；
- OOP & FP 面向对象编程和函数式编程；
- MVC 编程模式概念，包括基本的路由概念；
- IoC & DI 依赖反转和依赖注入；
- AOP 切面编程模式；

本质上，前端技术并不是发展太快，而是变化太快，你应该仔细口味这句话的含义！应该掌握的是通用编程原理和方法，例如其中编程模式就是成功的典型，应该好好学习的技术。

Nest 是一个渐进的 Node.js 框架，结合 OOP - Object Oriented Programming，FP - Functional Programming，FRP - Functional Reactive Programming 理念，可以在 TypeScript 和 JavaScript (ES6、ES7、ES8) 之上构建高效、可伸缩的企业级服务器端应用程序。

Nestjs 哲学: Nest 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试，可扩展，松散耦合且易于维护的应用程序。

Nestjs 与平台无关，技术上讲，依赖 Node.js 平台，即跨平台。Nest 可以在创建适配器后使用任何 Node HTTP 框架，有两个支持开箱即用的 HTTP 平台：express 和 fastify。 

Nestjs 在设计上的很多灵感来自于 `Angular`，Angular 的很多模式又来自于 Java 中的 `Spring` 框架，依赖注入、面向切面编程等，所以也可以认为： Nest 是 Node.js 版的 Spring 框架。对于熟悉 Java 的开发者，Nest 极易上手，Nest 与 Spring MVC 如出一辙的分层架构和注解标签，以及依赖注入、控制反转、生命周期等实现，也让 Angular 易于开发大型前端的优势也发挥在 Node 服务器端。

Node 有 Express 等框架的，但是没有解决架构问题，因为 Express 是 unopinionated，只是一套基于 middleware 的库，没有规范代码的结构。

而 Angular 是 opinionated，定义了 Template、Component、Filter(Pipe)、Service、Module 这些概念，让代码组织起来更规范。

代码组织规范，就是 Nestjs 文档中说的架构问题。只有代码更规范，开发出的应用才可以易测试、可扩展、松耦合、易维护。

`函数式响应式编程` FRP - Functional Reactive Programming 函数式响应式编程初衷是为了解决 listener、callback 逻辑表达不直观，代码乱成一团麻的问题。对于一个典型的登录界面，要求检验密码一致，函数式响应式做法，input 输入有变化，button 状态就会跟着变。相比较 input 输入变了、再调一遍函数、根据函数输出修改 button 状态，要更自动化。

对比编程范式：

- `命令式编程` Imperative 主要思想是关注计算机执行的步骤，即一步一步告诉计算机先做什么再做什么。
- `声明式编程` Declarative 它的主要思想是告诉计算机应该做什么，但不指定具体要怎么做。经典的 SQL 编程就是例子，以数据结构的形式来表达程序执行的逻辑。


## 👉 Basic Concepts
- https://docs.nestjs.com/
- https://docs.nestjs.com/modules
- https://docs.nestjs.com/first-steps
- https://github.com/nestjs/nest-cli
- https://docs.nestjs.com/cli/overview

安装使用，基于 Node.js 开发环境执行以下命令：

    $ npm i -g @nestjs/cli
    $ nest new project-name
    $ nest g controller cats
    $ npm run start

Nest 依赖了以下两个重要的模块：

- `rxjs` 即响应式编程 Reactive Extension JavaScript，通过将代码功能时序抽象为成一根时间轴，在这根时间轴上进行同步操作，而异步相关的时序处理就交给各种 operator 处理。
- `reflect-metadata` 提供 JavaScript/TypeScript 反射 API，主要用于实现装饰器，元数据编程；


查看 main.ts 代码，默认绑定端口 3000。

    src/
      +-- app.controller.spec.ts 测试用例
      +-- app.controller.ts 控制器
      +-- app.module.ts 根模块
      +-- app.service.ts 服务供应器
      +-- main.ts 主程序入口文件

基本框架组件概念：

- Modules 模块是程序的基本运行单元，由 `NestFactory` 实例化，默认单例，可以在多个模块之间共享，只需设置到模块 exports 数组中数组中并导出;
- Controllers 控制器，负责定义路由规则和 HTTP 响应方法；
- Providers 服务供应器，通过依赖注入提供服务；
- Middleware 中间件是在路由处理程序之前调用的函数，如 `next()` 中间件函数；
- Exception filters 异常过滤器，使用或继承 `HttpException` 类进行异常处理；
- Pipes 处理管道，使用 `@Injectable()` 装饰器修饰并且实现 `PipeTransform` 接口，通常用来处理输入数据转换，为后续步骤进行数据验证。
- Guards 路由守卫，主要确定请求是否应该由路由处理程序处理。
- Interceptors 拦截器，实现 `NestInterceptor`，可以绑定到指定函数，并在函数执行前、后运行拦截器。
- DTO - Data Transfer Object 是需要跨进程或网络边界传输的一组聚合数据的简单容器，例如将客户端传输给服务器的请求数据转换为 DTO 对象。

从基本组件可以看到，面向切面编程 AOP - Aspect Oriented Programming 也贯穿 Nest 应用开发。AOP 主要是针对业务处理过程中的切面进行提取，在某个步骤和阶段进行一些操作，从而达到 DRY - Don't Repeat Yourself 软件开发准则。

在 Nestjs 中，AOP 可以按请求处理顺序排列：

- Middlewares
- Guards
- Interceptors
- Pipes
- Interceptors
- Exception filters

脚手架 Nest.js CLI 默认工程是 standard mode，也可以使用 monorepo mode，即单仓库多项目的管理模式，通过 `nest g app` 命令生成子应用或者 library。

提供各种基本对象类型自动生成功能，后面一个参数指定一个目录：

    $ nest g application app
    $ nest g app app-modules
    $ nest g library lib-modules
    $ nest g controller products
    $ nest g service products
    $ nest g module products
    $ nest g pipe validation pipes
    $ nest g guard auth guards
    $ nest g interceptor logging interceptions

    generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    
    Available schematics:
      ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
      │ name          │ alias       │ description                                  │
      │ ------------- │ ----------- │ -----------                                  │
      │ application   │ application │ Generate a new application workspace         │
      │ class         │ cl          │ Generate a new class                         │
      │ configuration │ config      │ Generate a CLI configuration file            │
      │ controller    │ co          │ Generate a controller declaration            │
      │ decorator     │ d           │ Generate a custom decorator                  │
      │ filter        │ f           │ Generate a filter declaration                │
      │ gateway       │ ga          │ Generate a gateway declaration               │
      │ guard         │ gu          │ Generate a guard declaration                 │
      │ interceptor   │ in          │ Generate an interceptor declaration          │
      │ interface     │ interface   │ Generate an interface                        │
      │ middleware    │ mi          │ Generate a middleware declaration            │
      │ module        │ mo          │ Generate a module declaration                │
      │ pipe          │ pi          │ Generate a pipe declaration                  │
      │ provider      │ pr          │ Generate a provider declaration              │
      │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
      │ service       │ s           │ Generate a service declaration               │
      │ library       │ lib         │ Generate a new library within a monorepo     │
      │ sub-app       │ app         │ Generate a new application within a monorepo │
      │ resource      │ res         │ Generate a new CRUD resource                 │
      └───────────────┴─────────────┴──────────────────────────────────────────────┘

装饰器 Decorator 作为 ES7 的一大特性，在 TypeScript 中可以被自由运用，在 Nest 中更是得到了合理的开发与利用。

装饰器贯穿了整个 Nest 框架：

- `@Module()` 装饰器修饰的类代表一个模块；
- `@Controller()` 装饰器修饰的类代表一个控制器；
- `@Injectable()` 依赖注入装饰器修饰的类代表一个服务供应器，可以通过依赖注入提供服务；
- `@Get()` 修饰一个 HTTP GET 响应方法；
- `@Query()` 属性装饰器；


其它对应 express 对象的装饰器：

|        nest 装饰器       |           express 对象           |
|--------------------------|----------------------------------|
| @Request() @Req()        | req                              |
| @Response() @Res()       | res                              |
| @Next()                  | next                             |
| @Session()               | req.session                      |
| @Param(param?: string)   | req.params / req.params[param]   |
| @Body(param?: string)    | req.body / req.body[param]       |
| @Query(param?: string)   | req.query / req.query[param]     |
| @Headers(param?: string) | req.headers / req.headers[param] |
| @Ip()                    | req.ip                           |
| @HostParam()             | req.hosts                        |


## 👉 Modules 程序模块
- https://docs.nestjs.com/modules
- https://docs.nestjs.com/fundamentals/dynamic-modules

每个 Nest 应用至少需要一个模块，即根模块 root module，是一个使用 `@Module()` 装饰器进行定义的类型，模块使用控制器进行路由定义和实现各个 HTTP 响应方法。

模块提供以下四个注册列表：

- `providers`   依赖注册列表，所有供应器都可以在这里注册，供当前模块执行依赖注入；
- `controllers` 模块使用到的控制器注册列表；
- `imports` 导入其它模块；
- `exports` 导出当前模块供其它模块导入使用；

作为程序的基本运行单元，由 `NestFactory` 实例化程序模块，默认单例 `Singleton`，可以在多个模块之间共享，只需设置到模块 exports 数组中并导出。并且，可以将导入的模块再次导出。

对于那些通用的模块，如助手模块，可以按全局模块处理，使用 `@Global()` 装饰器修饰它然后随处可用，这样就不用到处注册。

使用脚手架可以自动生成程序模块：

    $ nest g module cats

示范代码如下 app.module.ts：

```ts
import { Module, Global } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CreateCatDto, ListAllEntities, UpdateCatDto } from './cats/dto';
import { CatsService } from './cats/cats.service';

@Global()
@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CreateCatDto, UpdateCatDto, ListAllEntities, CatsService],
})
export class AppModule {}
```

然后就是主程入口，实例化程序模块，在 REST 应用中可以传入如 CORS 这样的参数：

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors();
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
```



Nest 有一个动态模块的概念，即可以动态配置 Providers 的模块，简单说就是通过静态类成员 `forRoot()` 同步或异步地返回一个模块对象，比如通过 Promise 方式。通过这个方法实现指定配置选项，即动态配置。

示范 DatabaseModule 动态模块的定义：

```ts
import { Module, DynamicModule } from '@nestjs/common';
import { createDatabaseProviders } from './database.providers';
import { Connection } from './connection.provider';

@Module({
  providers: [Connection],
})
export class DatabaseModule {
  static forRoot(entities = [], options?): DynamicModule {
    const providers = createDatabaseProviders(options, entities);
    return {
      // global: true,
      module: DatabaseModule,
      providers: providers,
      exports: providers,
    };
  }
}
```

如果要在全局中使用动态模块，请将 `global` 配置打开，通常注册为全局并不是什么太好的点子。

使用动态模块，就在导入时执行 `forRoot()` 静态方法： 

```ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [DatabaseModule.forRoot([User])],
  // exports: [DatabaseModule],
})
export class AppModule {}
```

动态模块的一个示范场景就是实现类似插件机制的功能，参考官方文档 FUNDAMENTALS 部分：

```ts
@Module({
  imports: [ConfigModule.register({ folder: './config' })],
  controllers: [AppController],
  providers: [AppService],
})
```



## 👉 Provider & DI 依赖注入
- https://docs.nestjs.com/providers
- https://docs.nestjs.com/fundamentals/custom-providers
- https://docs.nestjs.com/fundamentals/injection-scopes
- https://docs.nestjs.com/fundamentals/circular-dependency
- https://docs.nestjs.com/fundamentals/module-ref

Nest 的设计理念是：万物皆 Provider 服务，如服务类 Service、仓库类 Repository、工厂类 Factory、助手类 Helper 等等。

简单来说，`依赖注入`设计模式 DI - Dependency Injection 旨在提供一个依赖关系的统一管理环境。以前面的控制器为为例，它需要使用 `getHello()` 服务，这就表示控制器对一个 API 的依赖关系。通过 DI 编程模式，在服务类上使用 `@Injectable()` 来表明这是一个可以自动注入的对象，然后在模块中匹配相应的服务供应器的注入。

使用时，只需要在控制器中直接引用，this 指向的是一个 DI 模式的容器实现，它可以处理那些声明为可以被注入的类，并在控制器需要使用时提供服务实例。所以，在控制器中，直接就可以调用其依赖的 AppService 实例对象，而无需关心 DI 系统是如何提供服务的，也就是 DI 编程模式的一大好处，解耦，省心。

通常，实现 DI 容器是通过 IoC - Inversion of Control 控制反转实现的，这是其中一种常见的 DI 容器实现方式。


如果用一段对话来解析什么是依赖注入编程模式，可能会比框架图更容易理解：

- Services：一堆的服务在讨论它们被开始嫌弃太难管理了，但服务多不是错；
- IoC Container：你们都别吵，来我老包这里登记一下，接下来的工作我跟用户对接；
- Customer：听说老包那里什么人才都有，以后不用跟一堆的 Services 扯麻线了，直接跟包工头要人；
- Customer：老包，我想要一个人，会 TypeScript 的就行，有吗？
- IoC Container：是吗，我看看登记本，哦有一个，可是 A 在找一本 Thinking Java (二次依赖)。
- IoC Container：我看看登记表是不是有这本书，诶这里还真有一本。把书交给 A(依赖注入已经发生)，然后送 A 到 Customer 那里。
- Customer：哟，这么快找到人手了啊，好现在就开始做事......


自动处理依赖会有种特殊情况，那就是两个相互依赖的类型，包括间接的循环依赖或自身依赖也算，这叫 Circular dependency，不过可以用依赖转发 Forward Referencing 技术来解决。使用 `ModuleRef` 即 Module Reference 类或 `forwardRef()` 方法，实现间接从容器中获取依赖服务实例。这种从 Spring 框架就流行的方法很巧妙地使用多级缓存解决了循环依赖问题，当然直接在服务类中循环引用这是个死结。通过改造类的结构，使原来的直接依赖，转变成对缓存对象依赖。实例化过程中查询缓存时，如果发现没有相应的依赖对象，就先进行暂存，等到其它可以优先实例化的流程先走一遍，再回过头来解决循环依赖的服务。

```ts
import { Injectable, forwardRef } from '@nestjs/common';

// cats.service.ts

@Injectable()
export class CatsService {
  constructor(
    @Inject(forwardRef(() => CommonService))
    private commonService: CommonService,
  ) {}
}

// common.service.ts

@Injectable()
export class CommonService {
  constructor(
    @Inject(forwardRef(() => CatsService))
    private catsService: CatsService,
  ) {}
}

// common.module.ts
@Module({
  imports: [forwardRef(() => CatsModule)],
})
export class CommonModule {}
```

使用 `ModuleRef` 工具类解决循环引用参考：

```ts
// cats.service.ts
import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core'

@Injectable()
export class CatsService implements OnModuleInit {
  private service: Service;
  constructor(private moduleRef: ModuleRef) {}

  onModuleInit() {
    this.service = this.moduleRef.get(Service);
  }
}
```

### 四种服务依赖定义方式

Nest.js 提供四种服务依赖定义方式：

- `useClass` 服务类；
- `useValue` 数据依赖：
- `useFactory` 动态地创建服务依赖;
- `useExisting` 别名方式；

通过以下命令创建一个 cats.service.ts，包括测试样例文件，保存在 /src/cats 目录下：

    nest g service cats

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  log(){
    console.log("CatsService from nest g service cats")
  }
}
```

并且会自动注册到程序根模块中：

```js
@Module({
  imports: [/*import app modules*/],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
```

通过依赖注入的对象需要在类构造函数中作为注入点，不能通过方法注入。

```ts
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  
  @Post()
  create(@Body() body, catsService: CatsService) {
    console.log('catsService', this.catsService, catsService,  body);
    return 'This action adds a new cat';
  }
}
```

实际上，以上注册表达式是简化的，完整的表达应该如下：

```ts
providers: [
  {
    provide: CatsService,   // Token
    useClass: CatsService,  // Class
  },
];
```

总结一下 DI 服务类的要点：

- 使用 `@Injectable()` 实现服务器；
- 在程序模块的 `providers` 列表添加以注册服务；
- 在需要使用的类中，在构造函数参数列表中声明服务类形的参数，完成依赖注入；

除了 `useClass` 注册服务类，还可以注册非类对象的依赖，使用 `useValue` 定义数据依赖：

```ts
import { CatsService } from './cats.service';

const mockCatsService = {
  /* mock implementation
  ...
  */
};

@Module({
  imports: [CatsModule],
  providers: [
    {
      provide: CatsService,
      useValue: mockCatsService,
    },
  ],
})
export class AppModule {}
```

非类对象依赖 Non-class-based 需要根据 provider tokens 来确定如何注入，比如注册时设置的 Provide Token 为 "CONNECTION"，那么就按如下使用 `@Inject()` 执行依赖注入，需要导出时也同样将 Token 填写在 `exports` 列表中：

```ts
import { Inject } from '@nestjs/common';

@Injectable()
export class CatsRepository {
  constructor(@Inject('CONNECTION') connection: Connection) {}
}
```

此外，还有两个特异功能的服务，`useFactory` 动态地创建服务依赖，和别名 `useExisting`，参考代码：

```ts
@Injectable()
class LoggerService {
  /* implementation details */
}

const loggerAliasProvider = {
  provide: 'AliasedLoggerService',
  useExisting: LoggerService,
};

const connectionFactory = {
  provide: 'CONNECTION',
  useFactory: (optionsProvider: OptionsProvider) => {
    const options = optionsProvider.get();
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider],
};

@Module({
  providers: [connectionFactory, LoggerService, loggerAliasProvider],
})
export class AppModule {}
```

特别地，`useFactory` 动态服务依赖可以结合 async/await 实现异步编程返回 Promise：

```ts
{
  provide: 'ASYNC_CONNECTION',
  useFactory: async () => {
    const connection = await createConnection(options);
    return connection;
  },
}
```

### Injection Scope 注入作用域
- https://docs.nestjs.com/fundamentals/injection-scopes

在 Nest 应用中，几乎所有的东西都是在传入的请求之间共享的，内部有一个数据库连接池，具有全局状态的单例服务容器等等。记住，Node.js 不遵循请求/响应多线程无状态模型，每个请求都由单独的线程处理。因此，对于 Nest 应用程序来说，使用单例实例是完全安全的。

但是，在一些边缘情况，基于请求的生存周期可能是所需的行为，例如 GraphQL 查询接口应用程序中的每个请求缓存、请求跟踪和`多重租赁架构` Multi-Tenancy，注入作用域配置提供了一种获得所需的 Provider 程序生存期行为的机制。

简单说就是通过设置不同的注入作用域，得到不一样的依赖注入效果。

提供以下三种 Provider scope：

- `DEFAULT` 默认的注入作用域，Singleton 单例注入，推荐使用。依赖注入的实例在整个应用程序中共享，和应用程序同生命周期；
- `REQUEST` 每一请求作用域，在每个入站请求实例注入，即每个请求对应的依赖都是新的实例，并在请求处理完成后清理；
- `TRANSIENT` 暂态作用域，依赖实例不会在使用者之间共享，每个使用者将收到一个新的专用实例。

配置示范：

```ts
import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {}
```

或者在程序模块中注册时指定：

```js
{
  provide: 'CACHE_MANAGER',
  useClass: CacheManager,
  scope: Scope.TRANSIENT,
}
```

对于控制器，也类似地在装饰器中指定注入作用域：

```ts
@Controller({
  path: 'cats',
  scope: Scope.REQUEST,
})
export class CatsController {}

```

基于 HTTP 的服务器应用，如使用 `@nestjs/platform-express` 或者 `@nestjs/platform-fastify`，在使用 Scope.REQUEST 时通常会需要访问原始的请求对象，可以按以下方式执行依赖注入 `REQUEST`：


```ts
import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(REQUEST) private request: Request) {}
}
```

而对于 GraphQL 应用，由于底层协议差异，需要为 Microservice 或 GraphQL 应用注入 `CONTEXT` 而不是 `REQUEST`：

```ts
import { Injectable, Scope, Inject } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

@Injectable({ scope: Scope.REQUEST })
export class CatsService {
  constructor(@Inject(CONTEXT) private context) {}
}
```




## 👉 Controllers 控制器
- https://docs.nestjs.com/controllers

控制器常用装饰器：

- `@Controller('cats')` 修饰控制器类，参数 'cats' 表示路由规则中使用 '/cats' 路径；
- `@Controller({ host: 'admin.example.com' })` 给控制器绑定子域名；
- `@Post()` 装饰一个 HTTP POST 请求的响应方法；
- `@Get(':id')` 装饰一个 HTTP GET 请求的响应方法，并定义路径包含 id 参数，配合 `@Param('id')` 绑定路径参数到方法属性；

可以为控制器方法绑定多条路由，以及多个参数定义格式如下：

```js
@Get(['/:id/:name', ':id'])
findOne(@Param('id') id: string, @Param('name') name: string) {
    return `This action returns a #${id} cat ${name}`;
}
```

完整的 HTTP 谓词对应的装饰器有 @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), 还有 @Head() 和 @All()

另外，支持 Promise 异步编程，可以很方便地通过 async/await 实现异步编程。

POST 提交数据可以使用 CURL 来调试：

    curl -d "id=101" localhost:3000/cats

以下装饰器绑定数据到参数上：

- `@Body()` 表示绑定 HTTP POST 请求数据体 Request payloads 到控制器方法参数上；
- `@Param('id')` 表示绑定 URL 中的路径参数到控制器方法的属性上，如 URL '/cats/100' 表示属性将绑定值为 100；
- `@HostParam('account')` 绑定主机参数到方法参数上；
- `@Query('name')` 表示绑定 URL 的 name 请求参数到方法的参数上，如 URL '/cats?name=Jeango' 表示属性绑定值为 "Jeango"；
- `@HttpCode(204)` 绑定 HTTP 状态码；
- `@Header('Cache-Control', 'none')` 绑定 HTTP 响应头；
- `@Redirect('https://nestjs.com', 301)` 绑定 301 永久性转移 Permanently Moved，默认是 302 暂时性转移 Temporarily Moved；

Nest.js 路由支持通正则模式匹配，字符 ?、+、* 以及 () 是正则表达式对应项，星号被用作通配符，将匹配任何字符组合。连字符 (-) 和点 (.) 按字符串路径解析。

如果要使用更底层的 HTTP 请求数据，可以使用 `Response` `Request` 对象：

```ts
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
```


例如，使用属性装饰器，往 app.controller.ts 的 GET 方法中绑定参数：

```ts
// app.controller.ts
import { Query } from '@nestjs/common';

@Get()
getHello(@Query('name') name: string = 'Victor'): string {
    return this.appService.getHello(name);
}


// app.service.ts
@Injectable()
export class AppService {
  getHello(name: string = 'World'): string {
    return `Hello ${name}!`;
  }
}

// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

访问 http://localhost:3000/?name=Jeango 测试查询参数传入。


控制器通过装饰器绑定路由规则，下面是一个 REST API 控制器示例，绑定了前缀相应在 URL 也要使用 cats 路径：

```ts
// cats.controller.ts
import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats/cats.service';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}
  
  @Post()
  create(@Body() body: CreateCatDto) {
    console.log('createCatDto', this.catsService, body);
    return 'This action adds a new cat';
  }

  @Get()
  findAll(@Query() query, list: ListAllEntities) {
    console.log('query', list, query);
    return `This action returns all cats (limit: ${list} items)`;
  }

  @Get(['/:id/:name', ':id'])
  findOne(@Param('id') id: string, @Param('name') name: string) {
    return `This action returns a #${id} cat ${name}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
```

注册到程序模块的 providers 列表中的服务，可以在控制器的构造函数中执行依赖注入，但注意，还不能在方法中注入依赖。

POST 数据测试请使用 CURL：

    curl -d "id=101" localhost:3000/cats



## 👉 Pipe & DTO 使用管道处理数据
- https://github.com/typestack/class-validator
- class-validator 自动验证 https://zhuanlan.zhihu.com/p/87039375
- http://npmjs.com/package/class-transformer
- https://docs.nestjs.com/pipes

这里引入了 DTO - Data Transfer Object 数据传输对象概念，在两端点之间传输数据的软件，往往需要对数据来源进行一次验证处理，而 DTO 设计模式下，可以清晰地表达数据转换到对象后的结构，使用 Pipes 管道配合 class-validator 对参数类型进行判断，在验证失败的时候抛出错误信息。

例如，可以自定义信息，像这样给装饰器设置选项：

    @IsArray({message:'数组 不能为空'})

可选项参考接口 `ValidatorOptions` 定义：

    /**
     * Specifies if validated value is an array and each of its items must be validated.
     */
    each?: boolean;
    /**
     * Error message to be used on validation fail.
     * Message can be either string or a function that returns a string.
     */
    message?: string | ((validationArguments: ValidationArguments) => string);
    /**
     * Validation groups used for this validation.
     */
    groups?: string[];
    /**
     * Indicates if validation must be performed always, no matter of validation groups used.
     */
    always?: boolean;
    context?: any;


注意，类转换器库和类验证器库由同一个作者作，他们一起玩，否则不会执行设定的验证。

    npm i --save class-validator class-transformer

首先，根据需要约定一下 DTO 类的验证条件，使用 **readonly** 声明避免对原始数据的修改：

```ts
import  { IsString, IsInt } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCatDto {

  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
```

当然，Nest 支持使用 Interface 来定义 DTO，不过 Nest 建议使用 Class，比 Interface 方便。原因是作为类型声明的 interface 在编译成后会被删除，同时用不了装饰器，无法在 swagger 显示。


在前面，已经为需要做验证的类类设置好校验属性，接下来就在管道中对数据进行验证操作。

使用 class-transformer 模块，它可以实现 Plain Object 与 Class 实例对象的互相转换，例如将 POST 的 JSON 对象转换为类类实例。经过管道的验证转换后，客户端提交的 JSON Body 数据转换成合格的类实例，然后再通过 `@Body()` 装饰器与控制器的参数 绑定，并将类型定义为转换后的类类，这样就可以很方便地使用 TypeScript 的静态类型功能。

    curl localhost:3000/cats?a=a -d "{""a"":1}" -H "Content-Type: binary/octet-stream"
    curl localhost:3000/cats -d "{""name"":""Jean""}" -H "Content-Type: application/json"
    curl localhost:3001/cats -d "{""name"":""Jean"",""age"":""10""}" -H "Content-Type: application/json"

class-validator 导出的 `validate` 方法返回包含 ValidationError 对象的一个数组，它包含错误提示信息，结构如下：

```js
[
  ValidationError {
    target: CreateCatDto { name: 'Jeango', age: '10' },
    value: '10',
    property: 'age',
    children: [],
    constraints: { isInt: 'age must be an integer number' }
  },
  ValidationError {
    target: CreateCatDto { name: 'Jeango', age: '10' },
    value: undefined,
    property: 'breed',
    children: [],
    constraints: { isString: 'breed must be a string' }
  }
]
```

绑定管道和 Guards 那样，直接用修饰符绑定在 Controller 上，然后将控制器方法的 @Body 装饰的参数类型指定为 DTO 类型即可。

管道类需要实现 PipeTransform interface，有两个典型的用例：

- `transformation`: 数据转换，例如将 string 转换为 integer；
- `validation`: 验证数据输入，通过验证就直接放行，否则抛出异常处理；

在 `@nestjs/common` 导出的内建管道 Built-in pipes：

- `ValidationPipe` 
- `ParseIntPipe` 内置管道数据类型转换 string -> integer;
- `ParseBoolPipe`  内置管道数据类型转换 string -> boolean;
- `ParseArrayPipe` 
- `ParseUUIDPipe` 
- `DefaultValuePipe` 

ValidationPipe 是 Nest.js 自带的三个开箱即用的管道之一，它也是为 class-validator 定制的，其选项接口 `ValidatorOptions` 会在验证时传递给类验证模块。

掌握概念后，用下命令在 pipes 文件夹创建管道程序 validation.pipe.ts：

    $ nest g pipe validation pipes

以下作为一个带验证操作的简单管道功能演示：

```ts
import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("validation.pipe.ts...", value, metadata)
    if(value.name!=="Jeango"){
      throw new BadRequestException(`Validation failed: ${JSON.stringify(value)}`);
    }
    value.id = -1;
    return value;
  }
}
```

定义 Pipes 处理管道，需要使用 `@Injectable()` 装饰器修饰，以自动依赖注入。并且实现 `PipeTransform` 接口，只有一个 `transform()` 方法，通常用来处理输入数据转换，为后续步骤进行数据验证。

转换方法有两个参数 `value` 是当前处理的数据值，而 `metadata` 是其元数据对象，参考以下接口定义：

```ts
export interface ArgumentMetadata {
  readonly type: 'body' | 'query' | 'param' | 'custom';
  readonly metatype?: Type<any>;
  readonly data?: string;
}
```

因此定义管道使用了 `@Injectable()` 装饰器，所以通过 `@UsePipes()` 绑定管道时，就会自动进行依赖注入。

参考以下代码，给控制器方法绑定管道验证，语法和绑定守卫类似：

```js
@UseGuards(AuthGuard('jwt'))
@UsePipes(new ValidationPipe())
@Post('register')
async register(@Body() body: RegisterInfoDTO) {
  returnawaitthis.usersService.register(body);
}
```

官方文档还有给控制器方法绑定管道的示范，使用内置的 `ParseIntPipe` 管道进行字符串转数值：

```js
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}

@Get(':id')
async findOne(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
  id: number,
) {
  return this.catsService.findOne(id);
}
```

对于通用功能，还可以使用全局管道 Global scoped pipes，使用 main.ts 程序对象的 `useGlobalPipes()` 方法绑定：

```ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
```

请注意，任何模块外部注册的全局管道不能注入依赖项，如上面使用 `useGlobalPipes()` 注册的验证管道，因为绑定是在任何模块的上下文之外完成的。

解决方法是直接在模块定义使用以下构造设置全局管道：

```ts
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
```




## 👉 Middleware 中间件
- https://docs.nestjs.com/middleware

中间件 Middleware 之所以称为中间件，是因为它在客户请求和服务器路由处理之间执行，这种在程序运行逻辑中某点执行的编程方式也叫 AOP - Aspect Oriented Programming 切面编程模式。你可以想象 AOP 就是水管上的水阀，当下游爆水管时，只需要拧紧它就可以避免水流浪费还容易做水管维护工作。

中间件就是一个函数，它可以访问 request 和 response 对象，并且，`next()` 是一个内置的中间件，需要在各个中间件中执行，表示将客户请求交给下一个中间件处理。

当然，实现一个中间件可以是一个函数，也可以是实现 `NestMiddleware` 接口的类形，但都需要使用 `@Injectable()` 装饰器。

通常，Nest 中间件就是 express middleware，官方描述中间件的功能如下：

- 执行任何代码；
- 修改 request & response 对象数据；
- 终止客户请求处理和响应；
- 调用 `next()` 中间件，以执行堆栈中的其它中间件；
- 如果当前中间件不终止请求处理，就调用 `next()` 将控制权交给下一个中间件，否则请求会挂起；

```ts
// logger.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
```

和前面解析过的一样，依赖注入可以通过类的构造函数执行。

在 `@Module()` 模块装饰器中没有中间件的位置，使用中间件需要通过模块类的 `configure()` 方法进行设置，因此，包含中间件的模块必须实现 `NestModule` 接口。

示范在 AppModule 模块设置 loggermdware 中间件，注意 `forRoutes()` 方法指定了中间件只对指定的路由生效，而 `exclude()` 表示要排除的路由：

```ts
// app.module.ts

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .apply(cors(), helmet(), logger)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes('cats');
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL });
  }
}
```

同样，可以按异步方式 async/await 实现 `configure()` 方法，MiddlewareConsumer 的 `apply()` 方法可以传入多个中间件。

路由指定也可以使用通配符，对于使用 fastify，因为使用了最新的 `path-to-regexp` 而不再支持星号通配符，应该使用参数，如 `.*` `:splat*`。

函数式中间件定义：

```ts
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
```

注册全局中间件更容易：

```ts
const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
```


## 👉 Guards 守卫
- https://docs.nestjs.com/guards
- https://docs.nestjs.com/security/authentication
- https://docs.nestjs.com/security/authorization
- https://docs.nestjs.com/fundamentals/execution-context
- https://docs.nestjs.com/security/cors
- https://docs.nestjs.com/security/csrf

守卫只有一个职责，就是根据运行时存在的某些条件，如权限、角色、ACL - Access Control List 等条件确定是否应该将请求交给指定的路由处理程序，通常称为身份验证或鉴权 Authentication & Authorization。

在微服务当道的世界，基于 Session 的传统认证所显露的问题越来越突出：

- Session: 认证信息需要在服务端保存，以方便用户下次鉴权，通常保存在内存中，随着认证用户的增多开销会明显增大，当然可以通过 Redis 等进行外部存储。
- 可扩展性不足: 认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上，限制了分布式的应用。
- CSRF 跨站攻击: 基于 Cookie 传递，当它被截获，就很容易受到跨站请求伪造的攻击。


流行的鉴权机制基于 Token，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于 Token 认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。

基本流程：

- 用户请求登录服务器；
- 服务器验证用户信息；
- 服务器通过验证发送给用户一个 Token；
- 客户端存储 Token 并在每次请求时附送上；
- 服务端验证 Token 值，并返回数据；

这个 Token 必须要在每次请求时传递给服务端，它应该保存在请求头里，另外，服务端要支持 CORS 跨来源资源共享策略，一般可以在服务端添加响应头 `Access-Control-Allow-Origin: *`。

JWT - JSON Web Token 一个开放协议标准 RFC 7519，它定义了一种紧凑的、自包含的方式，用于作为 JSON 对象在各方之间安全地传输信息。该信息可以被验证和信任，因为它是数字签名的。

JWT 由三部分组成，用圆点连接：

- Header 头部
- Payload 载荷
- Signature 签名

用Token的好处 - 无状态和可扩展性：Tokens存储在客户端。完全无状态，可扩展。我们的负载均衡器可以将用户传递到任意服务器，因为在任何地方都没有状态或会话信息。 - 安全：Token不是Cookie。（The token, not a cookie.）每次请求的时候Token都会被发送。而且，由于没有Cookie被发送，还有助于防止CSRF攻击。即使在你的实现中将token存储到客户端的Cookie中，这个Cookie也只是一种存储机制，而非身份认证机制。没有基于会话的信息可以操作，因为我们没有会话!

还有一点，token在一段时间以后会过期，这个时候用户需要重新登录。这有助于我们保持安全。还有一个概念叫token撤销，它允许我们根据相同的授权许可使特定的token甚至一组token无效。

与 JWT 一样流行的还有 OAuth 授权框架，即第三方账号授权登录框架，比例某个网站希望用你的 Github 账户完成登录过程，避免了你又要再重新注册的操作。比较 JWT，它作为一种协议，目的是实现前后端分离，实现鉴权的完全无状态化，通行证就是一个可以通过签名算法验证的 Token。


传统 Express 应用程序的授权，以及身份验证，通常需要协作，由中间件来处理。中间件是一个很好的身份验证选择，因为像令牌验证、附加属性到请求对象这样的事情与特定的路由上下文没有很强的联系。

中间件本身不知道调用 `next()` 函数后将执行哪个处理程序，而守卫可以访问 `ExecutionContext` 实例，从而确切地知道接下来要执行什么。它们的设计很像异常过滤器、管道和拦截器，允许您在请求/响应周期的正确点插入处理逻辑，并以声明的方式这样做，这有助于保持代码的 DRY - Don't Repeat Yourself 软件开发准则和声明性。

提示，守卫会在中间件之后、拦截器和管道之前执行。

使用脚手架自动生成：

    $ nest g guard auth guards

实现一个守卫只需要实现 `CanActivate` 接口，当然依赖注入需要使用 `@Injectable()`：

```ts
// auth.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

在其中的 `validateRequest()` 实现认证逻辑，返回 true 表示通过认证，放行请求。`canActivate()` 函数接受一个执行上下文 `ExecutionContext` 参数实例，它继承自 `ArgumentsHost`。在上面的示例中，只是使用在 ArgumentsHost 上定义的助手方法来获取客户请求对象的引用。


鉴权失败时，默认会抛出 `ForbiddenException`，可以自行选择合适的异常，如：

    throw new UnauthorizedException();


绑定守卫和绑定管道类似，使用 `@UseGuards()` 装饰器：

```ts
@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {}
```

可以给控制器、控制器方法、异常过滤器、管道中绑定守卫，指定类或实例都可以，如果绑定多个守卫就使用逗号分隔。

全局绑定守卫如下：

```js
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
```

全局防护在整个应用程序中有效，用于每个控制器和每个路由处理程序。对于依赖项注入，从任何模块外部注册的全局守卫，如上面的示例中使用 `useGlobalGuards()` 不能执行依赖注入，因为这在任何模块的上下文之外完成的。

解决方法如下，直接在程序模块中设置守卫：

```ts
// app.module.ts

import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
```

当使用这种方法执行依赖注入时，请注意，不管在哪个模块中使用这种构造，守卫都是全局的。


根据角色执行的守卫是常用的功能，执行上下文是 Nest 最重要的保护特性，利用 `@SetMetadata()` 能更自动化地为不同角色执行守卫。

例如，CatsController 可以对不同的路由使用不同的权限方案，有些可能只对管理员用户可用，有些则对所有人开放。我们如何以灵活和可重用的方式将角色与路由相匹配？

通过 `@SetMetadata()` 修饰符绑定元数据到路由处理程序，这个元数据可以为守卫程序提供角色数据，智能守卫需要这些数据来做出决策。

示范如何使用 `@SetMetadata()`：

```js
// cats.controller.ts

@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

直接使用 `@SetMetadata()` 装饰器指定角色也许还不够直观，可以自定义一个 `@Roles()` 装饰器，对其进行二次包装：

```ts
// roles.decorator.ts

import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

然后将 `@Roles()` 装饰应用到控制器上：

```ts
// cats.controller.ts

@Post()
@Roles('admin')
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

基于角色的守卫实现如下：

```ts
// roles.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return matchRoles(roles, user.roles);
  }
}
```

通过 `Reflector` 反射模块获取前面绑定的角色 Metadata 数据，然后在 `matchRoles()` 实现鉴权逻辑。



## 👉 Interceptors 拦截器
- https://docs.nestjs.com/interceptors
- Explore all RxJS operators https://reactive.how/rxjs/
- https://rxjs.dev/api/operators/map

和管道、守卫一样，拦截器也需要 `@Injectable()` 装饰器，拦截器需要实现 `NestInterceptor` 接口，它们都是受面向切面编程 AOP 技术的启发延伸出来的概念。

拦截器具有一系列有用的功能：

- 在函数执行之前/之后绑定额外的逻辑；
- 转换函数返回的结果；
- 转换函数抛出的异常；
- 扩展基本函数行为；
- 根据所选条件完全重写函数，例如缓存；

到拦截器这部分，涉及了 RxJS 响应式流编程，可以参考相应的内容。

拦截器实现的 `intercept()` 方法接收 2 个参数，`ExecutionContext` 执行上下文实例，与守卫接收的完全相同的对象，第二个是 `CallHandler`，如果不手动调用其 `handle()` 方法，则主处理程序根本不会进行求值。这是什么意思？基本上，CallHandler 是一个包装执行流的对象，因此推迟了最终的处理程序执行。

这就表明拦截器 `intercept()` 方法可以有效地包装请求/响应流，在执行路由处理程序之前、之后实现自定义逻辑。

但是如何影响之后发生的事情呢？因为 `handle()` 法返回一个 Observable，可以使用强大的 RxJS 操作符来进一步操作响应。使用面向方面的编程术语，路由处理程序的调用，即调用 `handle()` 被称为切入点，表示它是插入额外逻辑的点。

比方说，向 `/cats` 发出 POST 请求，路由指向在 CatsController 的 `create()` 处理函数。如果在此过程中未调用拦截器的 `handle()` 方法，则 `create()` 方法不会被执行。只有 `handle()` 被调用并且已返回值，最终方法才会被触发。为什么？因为 Nest 订阅了返回的流，并使用此流生成的值来为最终用户创建单个响应或多个响应。而且，`handle()` 返回一个 Observable，这意味着 RxJS  为我们提供了一组非常强大的运算符，可以帮助我们进行响应操作。

第一个例子是使用拦截器在函数执行之前或之后添加额外的逻辑，用术语即是切面截取 Aspect interception。当需要记录与应用程序的交互时，它很有用，例如 存储用户调用，异步调度事件或计算时间戳。

可以使用脚手架生成代码文件：

    $ nest g interceptor logging interceptions

以下是一个简单的例子 LoggingInterceptor：

```ts
// logging.interceptor.ts

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}
```

`NestInterceptor<T，R>` 泛型接口中 T 表示已处理的 `Observable<T>` 的类型，提供 response 流，而 R 表示包含在返回的 `Observable<R>` 中的值的返回类型。

拦截器的作用与控制器，提供程序，守卫等一样，可以通过构造函数执行依赖注入。

使用 `@UseInterceptors()` 装饰器绑定拦截器，与守卫一样，拦截器可以是控制器范围内的，也可以是方法范围内的，或者全局范围。绑定时，可以一样可以指定类型，由 Nest 通过依赖注入实例化，或者直接传入实例。

    import { UseInterceptors } from '@nestjs/common';

    @UseInterceptors(LoggingInterceptor)
    @UseInterceptors(new LoggingInterceptor())

    app.useGlobalInterceptors(new LoggingInterceptor());

全局拦截器用于整个应用程序、每个控制器和每个路由处理程序。在依赖注入方面，从任何模块外部注册的全局拦截器，如上面的 `useGlobalInterceptors()`，无法执行依赖注入，因为它们不属于任何模块的上下文。

解决方法和全局守卫做法类似，直接为模块配置一个拦截器：

```ts
// app.module.ts

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class ApplicationModule {}
```

上面解析了 `handle()` 返回一个 RxJS Observable 数据流，包含从路由处理程序返回的值，可以轻松地使用 `map()` 运算符更改数据。

响应映射功能 Response Mapping 不适用于特定于库的响应策略，直接使用 `@Res()` 对象是禁止的。

让我们创建一个 TransformInterceptor, 它将打包响应并将其分配给 data 属性。

```ts
// transform.interceptor.ts

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}
```

切面编程在创建用于整个应用程序的可重用解决方案时具有巨大的潜力，例如，要将每个发生的 null 值转换为空字符串 ''。使用一行代码并将拦截器绑定为全局代码就可以实现这一功能，它会被每个注册的处理程序自动重用。

另一个有趣的用例是利用 RxJS 的 `catchError()` 操作符来覆盖抛出的异常：

```ts
// errors.interceptor.ts

import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err => throwError(new BadGatewayException())),
      );
  }
}
```

对响应流进行覆盖 Stream overriding 可以完全阻止调用处理程序并返回不同的值。

例如，由于性能问题而从缓存中获取数据。缓存拦截器是一个很好的例子，实际应用中，缓存会考虑其它因素，如 TTL - Time To Live，缓存失效 Cache Invalidation，缓存大小等等。这里提供一个简化实现，以演示基本概念和逻辑：

```ts
// cache.interceptor.ts

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class CacheInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const isCached = true;
    if (isCached) {
      return of([]);
    }
    return next.handle();
  }
}
```

这个 `CacheInterceptor` 带有硬编码的 `isCached` 变量和硬编码的响应 `[]`，在这里通过 `of()` 运算符创建并返回了一个新的流，因此路由处理程序根本不会被调用。

当请求调用 `CacheInterceptor` 的端点时，一个硬编码的空数组响应将立即返回。为了创建一个通用解决方案，可以利用 `Reflector` 反射创建自定义修饰符，反射器 Reflector 在守卫章节使用过。

RxJS 提供了数十个操作符号，功能十分强大，具体参考官方文档。



## 👉 Exception Filters 异常过滤
- https://docs.nestjs.com/exception-filters
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

内置的异常层负责处理整个应用程序中的所有抛出的异常，当捕获到未处理的异常时，最终用户将收到友好的响应，每个异常都会默认以 JSON 响应客户。

每个发生的异常都由全局异常过滤器处理, 当这个异常无法被识别时，既不是 `HttpException` 也不是它的子类，那么用户将收到以下 JSON 响应：

    {
        "statusCode": 500,
        "message": "Internal server error"
    }

Nest 在 `@nestjs/common` 包导出了一些内置的 HttpException 子类，典型的 HTTP REST/GraphQL API 应用程序，最佳实践是在发生某些错误情况时发送标准 HTTP 响应对象。

HTTP 状态信息分为 5 类，每类以同一个数值开头：

- Informational responses (100–199)
- Successful responses (200–299)
- Redirects (300–399)
- Client errors (400–499)
- Server errors (500–599)

| Status Code |            Exception             |          Message           |
|-------------|----------------------------------|----------------------------|
|         400 | BadRequestException              | Bad Request                |
|         401 | UnauthorizedException            | Unauthorized               |
|         403 | ForbiddenException               | Forbidden                  |
|         404 | NotFoundException                | Not Found                  |
|         405 | MethodNotAllowedException        | Method Not Allowed         |
|         406 | NotAcceptableException           | Not Acceptable             |
|         408 | RequestTimeoutException          | Request Timeout            |
|         409 | ConflictException                | Conflict                   |
|         410 | GoneException                    | Gone                       |
|         412 | PreconditionFailedException      | Precondition Failed        |
|         413 | PayloadTooLargeException         | Payload Too Large          |
|         415 | UnsupportedMediaTypeException    | Unsupported Media Type     |
|         418 | ImATeapotException               | I'm a Teapot               |
|         421 | MisdirectedException             | Bad Gateway                |
|         422 | UnprocessableEntityException     | Unprocessable Entity       |
|         500 | InternalServerErrorException     | Internal Server Error      |
|         501 | NotImplementedException          | Not Implemented            |
|         502 | BadGatewayException              | Bad Gateway                |
|         503 | ServiceUnavailableException      | Service Unavailable        |
|         504 | GatewayTimeoutException          | Gateway Timeout            |
|         505 | HttpVersionNotSupportedException | HTTP Version Not Supported |

默认情况下，JSON 响应主体包含两个属性：

- `statusCode` 默认为 status 参数中提供的 HTTP 状态代码；
- `message` 基于状态的 HTTP 错误的简短描述；

HttpException 构造函数有两个必要的参数来决定响应主体：

- `response` 参数定义 JSON 响应体，可以是 string 用于覆盖 message，或者一个 object 用于覆盖整个响应主体。
- `status` 参数定义 HTTP 状态代码。

Nest 会执行序列化，将返回对象转换为 JSON 响应返回。第二个参数指定有效的 HTTP 状态代码，最佳实践是使用 `@nestjs/common` 导入的 HttpStatus 枚举。

虽然内置的异常过滤器可以自动处理许多情况，但可以自主控制异常处理层。例如，在异常处理中添加日志记录，或基于某些动态因素使用不同的 JSON 模式。异常过滤器正是为此而设计的，它们允许您控制确切的控制流以及发送回客户端的响应的内容。

以下创建一个异常过滤器，负责捕获 `HttpException` 异常，并为它们实现定制的响应逻辑。为此，我们需要访问底层平台请求和响应对象，这样就可以提取原始 URL 并将其包含在日志信息中。使用 `Response` 对象的 `json()` 方法直接控制发送响应。

```ts
// http-exception.filter.ts

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
```

所有异常过滤器应该实现 `ExceptionFilter<T>` 泛型接口，这要求实现 `catch()` 方法，T 指明异常类型。通过装饰器 `@Catch()` 可以指定一个或多个异常类型，根据需要指定，如果留空就表示捕捉一切异常。

其中参数寄主对象 `ArgumentsHost` 是一个强大的实用程序对象，在执行上下文一章进行解析。在这个代码示例中，它用来获取请求、响应对象的引用，这些对象本应传递给原始请求处理程序。

和拦截器，提供程序，守卫等一样，可以通过构造函数执行依赖注入，或使用装饰器进行注册 `@UseFilters()`。

```ts
@UseFilters(new HttpExceptionFilter())

app.useGlobalFilters(new HttpExceptionFilter());
```

同样，全局的异常过滤器需要按以下结构注册才能执行依赖注入：

```ts
// app.module.ts

import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
```

自定义异常过滤类型参考：

```ts
// all-exceptions.filter.ts

import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}
```


## 👉 Execution Context 执行上下文
- https://docs.nestjs.com/fundamentals/execution-context

Nest 提供了几个实用工具类，以简化应用程序实现跨多个应用程序上下文运行。

例如，基于 Nest HTTP 服务器、microservices 和 WebSockets 的应用程序上下文。这些实用工具类提供有关当前执行上下文的信息，用于构建通用的守卫、过滤器和拦截器，这些保护程序、过滤器和拦截器可跨一组通用的控制器、方法和执行上下文工作。

这里主要解析两个上下文对象，ArgumentsHost 和 ExecutionContext。

`ArgumentsHost` 类提供的方法用于检索传递给处理程序的参数，它只是作为处理程序参数的抽象，它允许切换选择适当的上下文并从中检索参数，如下：

- `switchToHttp()`: HttpArgumentsHost 切换为 HTTP，然后再通过 `getRequest()` `.getResponse()` 等方法获取相应的底层对象；
- `switchToRpc()`: RpcArgumentsHost 切换为 RPC（microservice）
- `switchToWs()`: WsArgumentsHost 切换为 Websocket

框架提供了 ArgumentsHost 的实例，通常作为宿主参数引用，在您可能需要访问它的地方。例如，使用 ArgumentsHostinstance 调用异常筛选器的 `catch()` 方法。

对于 HTTP 服务器应用程序，即使用 `@nestjs/platform` `express` 时，主机对象封装了 express 的 [request，response，next]数组，包含请求对象和响应对象，next 是控制应用程序请求响应周期的函数。

另一方面，对于 GraphQL 应用程序，宿主对象包含 [root，args，context，info] 数组。


构建要在多个应用程序上下文中运行的通用守卫、过滤器和拦截器时，需要一种方法来确定当前正在运行的应用程序的类型，即`当前程序上下文`信息。使用 ArgumentsHost 的 `getType()` 方法执行此操作：

```ts
import { GqlContextType } from @nestjs/graphql;

if (host.getType() === 'http') {
  // do something that is only important in the context of regular HTTP requests (REST)
} else if (host.getType() === 'rpc') {
  // do something that is only important in the context of Microservice requests
} else if (host.getType<GqlContextType>() === 'graphql') {
  // do something that is only important in the context of GraphQL requests
}
```

获取寄主处理程序参数 Host handler arguments 可以通过 `getArgs()` 或 `getArgByIndex()` 方法实现：

```js
const [req, res, next] = host.getArgs();

const request = host.getArgByIndex(0);
const response = host.getArgByIndex(1);
```

或者切换到指定的上下文，再获取相应的底层对象：

```ts
const ctx = host.switchToHttp();
const request = ctx.getRequest<Request>();
const response = ctx.getResponse<Response>();
```

相似地，对于 `WsArgumentsHost` `RpcArgumentsHost` 也有相应的方法获取底层对象：

```ts
export interface WsArgumentsHost {
  getData<T>(): T;
  getClient<T>(): T;
}

export interface RpcArgumentsHost {
  getData<T>(): T;
  getContext<T>(): T;
}
```

第二个上下文对象 `ExecutionContext` 扩展了 `ArgumentsHost`，提供了额外的方法，`getClass<T>()` 获取控制器类型信息，`getHandler()` 获取路由处理函数。和 `ArgumentsHost` 类似，Nest 会在需要的场合中提供 `ExecutionContext` 实例，如守卫的 `canActivate()` 方法中，拦截器的 `intercept()` 方法中。

```ts
export interface ExecutionContext extends ArgumentsHost {
  /**
   * Returns the type of the controller class which the current handler belongs to.
   */
  getClass<T>(): Type<T>;
  /**
   * Returns a reference to the handler (method) that will be invoked next in the
   * request pipeline.
   */
  getHandler(): Function;
}
```

举例来说，对于 HTTP 上下文，入站一个 POST 请求，假定路由到 `CatsController` 控制器的 `create()` 方法，那么：

- 执行上下文的 `getHandler()` 方法返回的就是 `create()` 方法的引用；
- 执行上下文的 `getClass()` 返回的是 `CatsControllertype` 类型，注意不是实例。

```js
const methodKey = ctx.getHandler().name; // "create"
const className = ctx.getClass().name; // "CatsController"
```

前面解析守卫时已经演示了如何利用 `@SetMetadata()` 提供元数据，并且通过反射模块获取它，

```ts
// cats.controller.ts

@Post()
@SetMetadata('roles', ['admin'])
async create(@Body() createCatDto: CreateCatDto) {
  this.catsService.create(createCatDto);
}
```

```ts
// roles.guard.ts

@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}
}
```

然后在守卫方法中，通过 `Reflector` 类读取出元数据：

    const roles = this.reflector.get<string[]>('roles', context.getHandler());




## 👉 Lifecycle Events 生命周期事件
- https://docs.nestjs.com/fundamentals/lifecycle-events
- Process Signal Events https://nodejs.org/api/process.html#process_signal_events

Nest 应用和各应用元素都有生成周期，Nest 提供勾子机制使关键生命周期事件具有可见性，并且能够在事件发生时执行操作，如在模块、可注入或控制器上运行注册代码。

应用执行可以简单分为三个过程：

- initializing 初始化；
- running 运行中；
- terminating 结束退出；

以下生命周期事件：

|        Lifecycle Hook        |                                    触发时机                                   |
|------------------------------|-------------------------------------------------------------------------------|
| onModuleInit()               | 寄主模块依赖解决时执行一次。                                                  |
| onApplicationBootstrap()     | 模块初始化后，在侦听连接前执行一次。                                          |
| onModuleDestroy()*           | 收到结束信号时执行 (e.g., SIGTERM)。                                          |
| beforeApplicationShutdown()* | 在所有模块完成清理后执行，Promises 解决，所有连接都会关闭，app.close() 被调用 |
| onApplicationShutdown()*     | 连接关闭，app.close() 被调用                                                  |

* 加星的事件，如果不是显式调用 app.close() 触发，就需要选择性加入，须与系统信息一起工作，如信号 SIGTERM。

关闭事件勾子消耗系统资源，默认是关闭的，通过 `enableShutdownHooks()` 激活：

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();
```

由于操作系统差异，NestJS 在 Windows 上实现 Shutdown Hook 有些限制。可以期望 `SIGINT` 和 `SIGBREAK` 信号正常工作，有时 `SIGHUP` 也可以。然而，`SIGTERM` 永远不会在 Windows 上工作，因为在任务管理器中终止进程是无条件的，即应用程序无法检测或阻止它。

参考 Node.js 或 libuv 关于 `SIGINT` `SIGBREAK` 等 Windows 信号的处理。


每个勾子都对应一个接口，需要使用时就实现对应的接口，可以选择 async/await 异步方式实现：

```
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  onModuleInit() {
    console.log(`The module has been initialized.`);
  }
  //  onModuleInit(): Promise<void> {
  //    this.fetch();
  // }
}
```




## 👉 Testing 测试
- https://docs.nestjs.com/fundamentals/testing
- https://github.com/visionmedia/superagent

自动化测试是任何重要软件系统中必要环节，通过自动化测试可以在开发过程中实现大幅度的代码测试覆盖，提高软件质量，并为开发人员提供更快的反馈循环。

自动化既提高了单个开发人员的生产力，又确保测试在关键的开发生命周期节点上运行，例如源代码控制签入、特性集成和版本发布。

测试通常跨越多种类型，包括单元测试 Unit Tests、端到端测试 End-to-End Tests、集成测试 Integration Tests 等等。虽然好处是肯定的，但花时间在它们身上可能会很乏味。

Nest Testing 致力于促进开发最佳实践，包括有效的测试，包含如下特性：

- 自动化脚手架为组件生成默认的单元测试，为应用程序提供端到端测试；
- 提供默认的工具，如构建独立模块/应用加载程序的测试运行程序；
- 集成开箱即用的 Jest 和 Supertest，同时保持测试工具的简洁性；
- 测试中保持依赖注入系统有效，实现组件的模拟；

Nest 不强制任何特定的测试工具，可以使用任何您喜欢的测试框架。只需替换所需的元素，如 test runner，仍然可以享受 Nest 现成测试设施。

安装测试模块：

    $ npm i --save-dev @nestjs/testing


### Unit Tests 单元测试

单元测试示范，注意测试脚本带有 `spec` 或者 `test` 后缀：

```js
// cats.controller.spec.ts

import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
```

使用 `@nestjs/testing` 导出的其它测试工具 Testing utilities：

```js
// cats.controller.spec.ts

import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);

      expect(await catsController.findAll()).toBe(result);
    });
  });
});
```

注意 `TestingModule` 继承自 Module Reference，可以解决依赖的循环引用。

另外，`resolve()` 方法在每次执行，返回的都是一个新实例：

    catsService = await moduleRef.resolve(CatsService);


### End-to-End 端到端测试

与关注单个模块和类的单元测试不同，端到端测试涵盖了类和模块在更聚合级别上的交互，即更接近最终用户交互环境下的测试。随着应用程序的增长，手动测试每个 API 端点的端到端行为变得越来越困难。自动化的端到端测试帮助我们确保系统的整体行为是正确的，并且满足项目需求。为了执行 e2e 测试，使用与单元测试中类似的配置。此外，Nest 使用 Supertest 库使得模拟 HTTP 请求变得很容易。

Supertest 这个模块的动机是为测试 HTTP 提供高级抽象，同时仍然允许使用 superagent 提供的低级 API 执行 AJAX 请求。

用大白话说，就是像正常使用软件那样对 API 进行测试：

```js
// cats.e2e-spec.ts

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    return request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect({
        data: catsService.findAll(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
```

如果使用 Fastify 作为 HTTP adapter，需要稍作配置修改：

```js
let app: NestFastifyApplication;

beforeAll(async () => {
  app = moduleRef.createNestApplication<NestFastifyApplication>(
    new FastifyAdapter(),
  );

  await app.init();
  await app.getHttpAdapter().getInstance().ready();
})

it(`/GET cats`, () => {
  return app
    .inject({
      method: 'GET',
      url: '/cats'
    }).then(result => {
      expect(result.statusCode).toEqual(200)
      expect(result.payload).toEqual(/* expectedPayload */)
    });
})
```

两个例子的差别在 `compile()` 和 `createNestApplication()` 方法的使用。用 Supertest 提供的 `request()` 方法来模拟 HTTP 请求。


Overriding globally registered enhancers

如果使用了全局守卫，或管道、拦截器、过滤器，则需要额外的步骤来增强覆盖。

If you have a globally registered guard (or pipe, interceptor, or filter), you need to take a few more steps to override that enhancer. To recap the original registration looks like this:

```js
providers: [
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
],
```

This is registering the guard as a "multi"-provider through the APP_* token. To be able to replace the JwtAuthGuard here, the registration needs to use an existing provider in this slot:


```js
providers: [
  {
    provide: APP_GUARD,
    useExisting: JwtAuthGuard,
  },
  JwtAuthGuard,
],
```

Now the JwtAuthGuard is visible to Nest as a regular provider that can be overridden when creating the TestingModule:

```js
const moduleRef = await Test.createTestingModule({
  imports: [AppModule],
})
  .overrideProvider(JwtAuthGuard)
  .useClass(MockAuthGuard)
  .compile();
```


## 👉 Security 安全性
- https://docs.nestjs.com/security/authentication
- https://docs.nestjs.com/security/authorization

### Encryption & Hashing
- https://nodejs.org/api/crypto.html
- https://www.cnblogs.com/yanzi-meng/p/9640546.html

Nest 自身没有相关的模块，通过使用 Node.js 内建的加密功能模块 crypto module，可以实现对 strings, numbers, buffers, streams 等内容的加密与解密。 

示范 AES - Advanced Encryption System 加密算法 `aes-256-ctr`：

```ts
import { createCipheriv, randomBytes } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const password = 'Password used to generate key';

// The key length is dependent on the algorithm.
// In this case for aes256, it is 32 bytes.
const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
const cipher = createCipheriv('aes-256-ctr', key, iv);

const textToEncrypt = 'Nest';
const encryptedText = Buffer.concat([
  cipher.update(textToEncrypt),
  cipher.final(),
]);
```

然后对 encryptedText 进行解密：

```ts
import { createDecipheriv } from 'crypto';

const decipher = createDecipheriv('aes-256-ctr', key, iv);
const decryptedText = Buffer.concat([
  decipher.update(encryptedText),
  decipher.final(),
]);
```

AES 是一种分组密码 Block Cipher，即将明文消息编码表示后的明文数字序列，划分成长度为 n 的分组，可看成长度为 n 的矢量，每组分别在密钥的控制下变换成等长的输出序列，即密文数字。

AES 有五种工作体制

- ECB - Electronic Codebook Book 电码本模式，将整个明文分成若干段相同的小段，然后对每一小段进行加密。
- CBC - Cipher Block Chaining 密码分组链接模式，先将明文切分成若干小段，然后与初始块或者上一段的密文段进行异或运算后，再进行加密。
- CTR - Counter 计数器模式，有自增的算子，算子加密之后的输出和明文异或的结果得到密文，相当于一次一密。这种加密方式简单快速，安全可靠，可以并行加密。
- CFB - Cipher FeedBack 密码反馈模式，这种算法模式较复杂。
- OFB - Output FeedBack 输出反馈模式，同上。

对于哈希散列数 Hashing 使用 bcrypt 或者 argon2 模块。

    $ npm i bcrypt
    $ npm i -D @types/bcrypt

例如使用 `bcrypt` 生成随机密码的哈希，使用 `genSalt()` 加盐提升安全性，哈希检验使用 `compare()` 函数：

```ts
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;
// const salt = await bcrypt.genSalt();

const password = 'random_password';
const hash = await bcrypt.hash(password, saltOrRounds);

const isMatch = await bcrypt.compare(password, hash);
```


### CSRF Protection 跨站伪造请求攻击
- https://docs.nestjs.com/security/csrf

跨站点请求伪造攻击 Cross-site request forgery 也称为 CSRF 或 XSRF，是通过伪造请求对网站实施的一种恶意攻击，通过在 Web 应用程序信任的用户处伪造未经授权的命令并发往服务器，从而模拟出合法有效的操作达到攻击目的。

也被称为 One Click Attack 或者 Session Riding，也就是人们所知道的钓鱼网站。尽管听起来像跨站脚本攻击 XSS，但它们非常不同，并且攻击方式几乎相左。XSS 利用站点内的信任用户，而 CSRF 则通过伪装来自受信任用户的请求来利用受信任的网站。与 XSS 攻击相比，CSRF 攻击往往不大流行，因此对其进行防范的资源也相当稀少，和难以防范，所以被认为比 XSS 更具危险性。

简单地说，XSS 就是攻击者往页面插入恶意 Script 代码，当用户浏览该页之时，恶意代码会被执行，从而达到攻击目的。

可以这么理解 CSRF 攻击：攻击者盗用了你的身份，伪装成你发送恶意请求。CSRF 能够做的事情包括：以你名义发送邮件，发消息，盗取你的账号，甚至于购买商品，虚拟货币转账等等，造成个人隐私泄露以及威胁财产安全。

典型的 CSRF 发生场景：登录受信任网站 A，并在本地生成 Cookie，在不登出 A 的情况下，访问危险网站 B 就可能被攻击。

例如 GET 类型的 CSRF 攻击：

    <img src="http://wooyun.org/csrf?xx=11" /> 

在访问含有这个 img 的页面后，成功向服务发出了一次 HTTP GET 请求，并且有效的 Cookie 数据也一并发送。所以，如果将该网址替换为存在 GET 型 CSRF 的地址，就能完成攻击了。

再比如 POST 类型的 CSRF 攻击：

```html
<form action="http://wooyun.org/csrf.php" method="POST">
    <input type="text" name="xx" value="11" />
</form>
<script> document.forms[0].submit(); </script> 
```

这种类型的 CSRF 危害没有 GET 型的大，因为需要利用表示提交动动。访问攻击页面后，表单会自动提交，相当于模拟用户完成了一次 POST 操作。

在业界目前防御 CSRF 攻击主要有三种策略：

- HTTP Referer 引用页面字段验证；
- Token 验证，在请求地址中添加验证令牌；
- 自定义 HTTP 头信息，并验证；

通常 Referer 的值是由浏览器提供的，虽然 HTTP 协议上有明确的要求，但是每个浏览器对于 Referer 的具体实现可能有差别，并不能保证浏览器自身没有安全漏洞。使用 Referer 验证的方法，就是把安全性都依赖于第三方（即浏览器）来保障，从理论上来讲，这样并不安全。事实上，对于某些浏览器，比如 IE6 或 FF2，可以通过一些方法可以篡改 Referer 值。

CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 cookie 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。

通常在一个 hidden 表单中设置 Token：

    <input type=”hidden” name=”csrftoken” value=”tokenvalue”/>

但是，在一个网站中，可以接受请求的地方非常多，要对于每一个请求都加上 token 是很麻烦的，并且很容易漏掉。更好的方法是使用统一的 HTTP 请求封装，将 Token 作为一个必需参数默认添加到每个请求中。常规做法就是将 Token 设置到 HTTP 头信息中，服务器收到请求后进行验证。


要减轻这种攻击，可以使用 csurf 包，和 Express 使用：

    $ npm i --save csurf

安装模块后，将 csurf middleware 作为全局中间件使用：

```ts
import * as csurf from 'csurf';
// somewhere in your initialization file
app.use(csurf());
```

使用 Fastify Web 服务按以下操作：

    $ npm i --save fastify-csrf

安装模块后，注册 fastify-csrf 插件：

```ts
import fastifyCsrf from 'fastify-csrf';
// somewhere in your initialization file
app.register(fastifyCsrf);
```

### Rate Limiting 速率限制
- https://docs.nestjs.com/security/rate-limiting

速率限制 Rate limiting 是保护应用程序免受暴力攻击，brute-force attacks，的一种常见技术，许多 Express 模块都提供了这一功能。

一个流行的模拟是 express-rate-limit，安装使用：

    $ npm i --save express-rate-limit

然后，将 `rate-limiter` 注册为全局中间件：

```ts
import * as rateLimit from 'express-rate-limit';
// somewhere in your initialization file
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }),
);
```

如果服务器使用了负载均衡，或反向代理时，load balancer or reverse proxy，可能需要为 Express 配置信任代理的标头，以便最终用户获取正确的 IP。为此，在创建应用程序实例时使用 `NestExpressApplication` 平台接口，然后启用信任代理设置：

```ts
const app = await NestFactory.create<NestExpressApplication>(AppModule);
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);
```



### CORS 跨域资源共享
- https://docs.nestjs.com/security/cors
- https://github.com/expressjs/cors#configuration-options

保护应用程序免受暴力攻击的一种常见技术是速率限制 rate-limit，许多 express 的存在是为了提供速率限制功能。一个流行的是特快专递限额。

在 REST 应用中，主程入口实例化程序模块时，可以传入如 CORS 这样的参数：

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, { cors: true });
  // app.enableCors();
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
```

注意，CorsOptionsDelegate 不能在 apollo-server-fastify 模块中工作。

GraphQL 模块的 CORS 设置方法：

```ts
GraphQLModule.forRoot({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
}),
```



# 🚩 RxJS 光速入门
- Explore all RxJS operators https://reactive.how/rxjs/
- Interactive diagrams of Rx Observables https://rxmarbles.com
- FRP - Functional Reactive Programming https://www.cnblogs.com/apolis/p/11437688.html
- Taming snakes with reactive streams https://blog.thoughtram.io/rxjs/2017/08/24/taming-snakes-with-reactive-streams.html
- Cycle.js 人机交互框架 https://cycle.js.org

RxJS 即响应式编程 Reactive Extension JavaScript，通过将代码功能时序抽象为成一根时间轴，在这根时间轴上进行同步操作，而异步相关的时序处理就交给各种 operator 处理。

从这点看，函数响应式编程这个名字并没有很好概括 RxJS，它是时序相关的数据流，而流上的数据就相当于时序信号 Signal，而各种操作函数就是信息处理函数。

JavaScript 是个多范式语言，它既支持过程式编程，又支持函数式编程，两者分别适用于不同的场合。在同步环境下，两者各有优缺点，甚至有时候过程式会更简明一些。但在异步环境下，典型场景是前后依赖的连续 Ajax 请求，需要一层层地嵌套执行，简直就是 Callback 地狱。由于无法控制执行和完成的顺序，所以就无法使用传统的过程式写法，函数式就会展现出其优势。

2012 年，微软 .NET 开发组的一个团队为了给 LinQ 设计扩展机制而引入了 FRP 概念，却发现 FRP 的价值不止于此。于是一个新的项目出现了，它就是 ReactiveX，异步编程神器。

严格来说 ReactiveX 应该是一组 FRP 库，因为它几乎在每个主流语言下都提供了实现，而且这些实现都是语言原生风格的，不是简单地迁移。如果你在任何语言下用过带有 Rx 前缀的库，那多半儿就是 ReactiveX 的一个实现了，如 RxJava、Rx.NET、RxGroovy、RxSwift 等等。

ReactiveX 本身其实并不难，难的是 FRP 编程范式以及对操作符 operator 的理解。所以，只要学会了 Rx 机制，那么其它语言的库就可以触类旁通了。

为了帮助开发者更容易地理解 ReactiveX 的工作原理，ReactiveX 开发组还设计了一种很形象的交互图 Marble Diagram 宝石图：

    Execution of input Observable from let to right
    ------(4)-------(6)---------(a)-------(8)-----|-->

    ================= multiply by 10 =================

    ------(4)-------(6)------------------------------>

箭头线表示表示按时序产生的数据序列，称为数据流 Stream，上方是输入流，下方是输出流。输入流可能有多个，但是输出流只会有一个，不过，流中的每个数据项也可以是别的流。

数据序列上的每个圆圈住的是一个个数据项，其位置出现的先后顺序具有时序性，如进行 merge 操作时，会按时序顺序拼合数据。但是一般不会表示精确的时间比例，比如在一毫秒内接连出现的两个数据之间仍然会有较大的距离。只有少数涉及到时间的操作，宝石图才会表现出精确的时间比例。

线条右侧通常会有一条竖线表示这个流正常终止，或者一个叉号表示这个流抛出错误导致异常中止。还有一种流，既没有竖线也没有叉号，这种叫做无尽流，比如一个由所有自然数组成的流就不会主动终止。但是要注意，无尽流仍然是可以处理的，因为需要多少项是由消费者决定的。你可以把这个智能传送带理解为由下一个工序，依次处理。

中间的大框表示一个操作 operator 即一个函数，这里的操作就是乘 10，并将结果存放于输出流中。

看懂了宝石图，就能很形象的理解各种操作符了。

RxJS 就是 ReactiveX 在 JavaScript 语言上的实现。由于 JavaScript 本身的缺陷，RxJS 不得不采用了很多怪异的写法，它对于 Java / C# 等背景的程序员来说可能会显得比较怪异。

## 👉 Basic Concepts

RxJS 的主要概念：

- `Observable` 可观察对象: 一个未来可调用的值或事件的集合。
- `Observer` 观察者: 一个回调函数的集合，用它监听由 Observable 提供的值。
- `Subscription` 订阅: 表示 Observable 的执行，主要用于取消 Observable 的执行。
- `Operators` 操作符: 采用函数式编程风格的纯函数 Pure Function，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
- `Subject` 主体: 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
- `Schedulers` 调度器: 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。

RxJS 中含有 Observables 与 Observer 两个基本概念，`可观察对象`基于观察者模式和迭代器模式，以函数式编程思维来实现。Observables 作为被观察者，是一个值或事件的流集合，是多个值的惰性推送集合。而 Observer 则作为观察者，根据 Observables 进行处理。

操作分为两类，首先，数据来源于 Creation operator  操作符，相当于启动生产线，并提供原料，本质上就是个产生数据的函数。然后，是管道操作符 Pipeable operator 需要从流水线拿原料，就会调用 Creator 数据来源函数。RxJS 提供了很多预定义的数据来源，当然可以自己实现这个数据源，但通常是不用的。

```js
// Creation operator 
import { of, fromEvent, merge } from 'rxjs';

// Pipeable operator 
import { map, filter, scan } from 'rxjs/operators';
```

先上手几个常用的数据生成函数，生成器都用于产生 Observable 对象：

- `of()` 用于创建简单的 Observable，只发出给定的参数，在发送完这些参数后发出完成通知。
- `from()` 从一个数组、类数组对象、promise、迭代器对象或者 Observable 对象创建一个 Observable。
- `fromEvent()` 将事件对象 event 转换成 Observable。
- `range()` 在指定起始值返回指定区间数量数值。
- `interval()` 基于给定时间间隔发出数字序列，无限自增的序列整数，可以指定时间间隔。
- `timer()` 创建一个带有初始延时功能的 Observable 对象，经过指定延时之后才开始发送数据，数值按固定周期自增。

来看看官方示范，使用 map 将事件对象中的坐标作为待观察的数据对象：

```js
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(map(ev => ev.clientX));
positions.subscribe(x => console.log(x));
```

在 Taming snakes with reactive streams 一文中，演示了如何以响应式流编程实现贪吃蛇游戏，也使用了 map 来影射键盘按键与运动方向预设数据。

```ts
export interface Point2D {
  x: number;
  y: number;
}

export interface Directions {
  [key: number]: Point2D;
}

export const DIRECTIONS: Directions = {
  37: { x: -1, y: 0 }, // Left Arrow
  39: { x: 1, y: 0 },  // Right Arrow
  38: { x: 0, y: -1 }, // Up Arrow
  40: { x: 0, y: 1 }   // Down Arrow
};

export function nextDirection(previous, next) {
  let isOpposite = (previous: Point2D, next: Point2D) => {
    return next.x === previous.x * -1 || next.y === previous.y * -1;
  };

  if (isOpposite(previous, next)) {
    return previous;
  }

  return next;
}

let keydown$ = Observable.fromEvent(document, 'keydown');

let direction$ = keydown$
  .map((event: KeyboardEvent) => DIRECTIONS[event.keyCode])
  .filter(direction => !!direction)
  .scan(nextDirection)
  .startWith(INITIAL_DIRECTION)
  .distinctUntilChanged();
```


## 👉 Observer & Observable 对象

从代码上看，`Observer` 对象就是一系列函数，供 `Observable` 对象调用以传递数据，只需要调用 `subscribe()` 方法进行注册：

```ts
const observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

observable.subscribe(observer);
```

当调用 Observable 的 subscribe 方法时，会返回一个订阅 `Subscription` 类型引用，它实际上是一个订阅凭证。把它保存下来，等恰当的时机调用它的 unsubscribe 方法就可以取消订阅了。订阅也叫做 `Disposable`，这是旧式称谓。

解除对回调函数的引用有两种时机，一种是数据流完成 complete 时自动解除，包括正常结束和异常结束，另一种是数据观察者主动取消。所有的有限流都是会自动完成的，只有无尽流才需要特别处理，也就是订阅方要主动取消订阅。

订阅 `Observable` 也可以传入一个回调函数作为 `next()` 方法使用：

    observable.subscribe(x => console.log('Observer got a next value: ' + x));

`Observables` 是 lazy Push 数据集，使用两套数据收发机制 Pull versus Push：

            SINGLE      MULTIPLE
    Pull    Function    Iterator
    Push    Promise     Observable

            PRODUCER    CONSUMER
    Pull    Passive: produces data when requested.  Active: decides when data is requested.
    Push    Active: produces data at its own pace.  Passive: reacts to received data.

在 Pull 方式下，数据生产是被动的，即执行订阅方法时生产数据，而数据消费是主动的。

在 Push 方式下，数据生产是主动的，主动向观察者推送数据，而数据消费是被动的。

每个 JavaScript 函数都是 Pull 方式，由调用者从函数返回值拉取数据 Pulling Data。ES2015 引入生成器函数和迭代器 generator & iterators，也是是 Pull 的方式，通过 `iterator.next()` 拉取数据。

典型的 Promises 方案就是 Push 方式，一个 Promise 会在完成数据生成后通过已经注册好的回调函数传递数据给观察者。

RxJS 引入 Observables 对象，作为一套新的 Push 实现，它生产多个数据，并推送给数据的观察者。

对比各种方式，可以发现 RxJS 的可观察数据对象是最灵活的实现：

- `Function` 延时计算同步返回单一值；
- `generator` 延时计算同步返回零值到可能的无限迭代值；
- `Promise` 最终可能返回，也可能没有返回值。
- `Observable` 延时计算，并且可以实现同步或异步返回零值到可能的无限值；


创建 `Observable` 对象，它执行的就是逻辑就是使用 `Observer` 提供的一套函数来传递数据：

```ts
import { Observable } from 'rxjs';
 
const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});
 
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
```

以上示范代码输出内容如下：

    just before subscribe
    got value 1
    got value 2
    got value 3
    just after subscribe
    got value 4
    done


有一类特殊类型的 Observable，`Subject` 它允许将值多播给多个观察者，而普通的 Observables 是单播的，每个已订阅的 Observable 只向唯一的观察者提供数据。Subject 还像是 EventEmitters，维护着多个监听器的注册表。

```js
import { from, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators';
 
const source = from([1, 2, 3]);
const subject = new Subject();
const multicasted = source.pipe(multicast(subject));
 
// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
// source.subscribe(subject);
```

还有一些特殊类型的 Subject：

- `BehaviorSubject` 有当前值概念，即保存发送给消费者的最新值。并且当有新的观察者订阅时，会立即从它那接收到当前值。
- `ReplaySubject` 回放数据给新的订阅者，除了缓冲数量，你还可以指定记录 window time 毫秒之前的值。
- `AsyncSubject` 执行 `complete()` 完成时才会将最后一个值发送给观察者。




## 👉 Operators 各种操作符
- https://rxjs.dev/guide/operators

所有操作符都是 Pipeable 函数，管道操作符本质上是一个纯函数，它以一个 Observable 作为输入并生成另一个 Observable 作为输出。订阅了输出的 Observable 也就将订阅了输入的 Observable。 

操作分为两类，首先，数据来源于 Creation operator  数据生成操作符，相当于启动生产线，并提供原料，本质上就是个产生数据的函数。然后，是管道操作符 Pipeable operator 需要从流水线拿原料，就会调用 Creator 数据来源函数。

RxJS 提供了很多预定义的数据来源，当然可以自己实现这个数据源，但通常是不用的。

操作符号分类参考：

    |     生成操作      |  联合生成操作  |   转换操作    |         过滤操作        |
    |------------------|---------------|--------------|-------------------------|
    | ajax             | combineLatest | buffer       | audit                   |
    | bindCallback     | concat        | bufferCount  | auditTime               |
    | bindNodeCallback | forkJoin      | bufferTime   | debounce                |
    | defer            | merge         | bufferToggle | debounceTime            |
    | empty            | partition     | bufferWhen   | distinct                |
    | from             | race          | concatMap    | distinctKey             |
    | fromEvent        | zip           | concatMapTo  | distinctUntilChanged    |
    | fromEventPattern |               | exhaust      | distinctUntilKeyChanged |
    | generate         |               | exhaustMap   | elementAt               |
    | interval         |               | expand       | filter                  |
    | of               |               | groupBy      | first                   |
    | range            |               | map          | ignoreElements          |
    | throwError       |               | mapTo        | last                    |
    | timer            |               | mergeMap     | sample                  |
    | iif              |               | mergeMapTo   | sampleTime              |
    |                  |               | mergeScan    | single                  |
    |                  |               | pairwise     | skip                    |
    |                  |               | partition    | skipLast                |
    |                  |               | pluck        | skipUntil               |
    |                  |               | scan         | skipWhile               |
    |                  |               | switchMap    | take                    |
    |                  |               | switchMapTo  | takeLast                |
    |                  |               | window       | takeUntil               |
    |                  |               | windowCount  | takeWhile               |
    |                  |               | windowTime   | throttle                |
    |                  |               | windowToggle | throttleTime            |
    |                  |               | windowWhen   |                         |

    | 数学与聚合  | 条件与布尔操作  |    联合操作     |     多播操作     |  错误处理   |    其它工具   |
    |------------|----------------|----------------|-----------------|------------|---------------|
    | count      | defaultIfEmpty | combineAll     | multicast       | catchError | tap           |
    | max        | every          | concatAll      | publish         | retry      | delay         |
    | min        | find           | exhaust        | publishBehavior | retryWhen  | delayWhen     |
    | reduce     | findIndex      | mergeAll       | publishLast     |            | dematerialize |
    | isEmpty    | startWith      | publishReplay  | share           |            | materialize   |
    |            |                | withLatestFrom |                 |            | observeOn     |
    |            |                |                |                 |            | subscribeOn   |
    |            |                |                |                 |            | timeInterval  |
    |            |                |                |                 |            | timestamp     |
    |            |                |                |                 |            | timeout       |
    |            |                |                |                 |            | timeoutWith   |
    |            |                |                |                 |            | toArray       |
    |            |                |                |                 |            |               |


## 👉 Scheduler 调度器
- https://rxjs.dev/guide/scheduler

调度器控制着何时启动 Subscription 以及何时发送通知。

它由三部分组成：

- 一种数据结构，根据优先级或其他标准来存储任务，并对任务进行排序。
- 一个执行上下文，它表示在何时何地执行任务，比如立即或回调函数。
- 一个虚拟的时钟，通过调度器的 now() 提供了时间的概念，在具体调度器上安排的任务将严格遵循该时钟所表示的时间。

调度器可以让你规定 Observable 在什么样的执行上下文中发送通知给它的观察者。

异步调度器是 RxJS 内置调度器中的一个，可以通过使用 Scheduler 对象的静态属性创建并返回其中的每种类型的调度器。

- `null`    不传递任何调度器的话，会以同步递归的方式发送通知，用于定时操作或尾递归操作。
- `queueScheduler`  当前事件帧中的队列调度(蹦床调度器)，用于迭代操作。
- `asapScheduler`   微任务的队列调度，它使用可用的最快速的传输机制，比如 Node.js 的 process.nextTick() 或 Web Worker 的 MessageChannel 或 setTimeout 或其他，用于异步转换。
- `asyncScheduler`  使用 setInterval 的调度，用于基于时间的操作符。
- `animationFrameScheduler` 计划将在下一次浏览器内容重新绘制之前发生的任务，可用于创建流畅的浏览器动画。

所有处理并发的 Observable 操作符都有可选的调度器，没有显式指定调度器类型的情况下，RxJS 使用最小并发原则，选择一个默认的调度器。这就是说最少并发的调度器需要安全的选择操作符，例如，返回一个有限和少量的 Observable 的操作符，RxJS 不使用调度器，例如 null 或 undefined。

`observeOn()` 创建使用指定调度器的 Observable 对象，它使每个 onNext 调用在指定的 Scheduler 中运行。

`subscribeOn()` 强制在特定的 Scheduler 上运行订阅和取消订阅，而不是通知。例如，在浏览器中运行并在订阅调用中执行重要工作时，却不希望用它来阻止 UI 线程，subscribeOn 非常有用。


以下示范同步地生成简单的 1, 2, 3 数据，并使用 `observeOn` 操作指定异步调度器来分发这此值：

```ts
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
 
const observable = new Observable((proxyObserver) => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(
  observeOn(asyncScheduler)
);
 
cosnt finalObserver = {
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
     console.log('done');
  }
};
 
console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');
```

输出内容：

    just before subscribe
    just after subscribe
    got value 1
    got value 2
    got value 3
    done

View on Stackblitz https://stackblitz.com/edit/typescript-jexdny



# 🚩 Prisma 棱镜数据层
- Quickstart (5 min) https://www.prisma.io/docs/getting-started/quickstart-typescript
- https://docs.nestjs.com/recipes/sql-typeorm
- https://docs.nestjs.com/recipes/prisma
- Prisma CLI https://www.prisma.io/docs/concepts/components/prisma-cli
- Prisma schema https://www.prisma.io/docs/concepts/components/prisma-schema
- Prisma Client https://www.prisma.io/docs/concepts/components/prisma-client
- ORM for TypeScript and JavaScript https://github.com/typeorm/typeorm
- Next-generation ORM for Node.js & TypeScript https://github.com/prisma/prisma
- Next-generation ORM for Node.js & TypeScript https://www.prisma.io/
- https://scotch.io/tutorials/get-started-w-prisma-for-super-simple-graphql

数据库工具如 ORM 和 SQL Builder 需要面对一个基本的问题：SQL 语法控制能力和生产力的平衡。这也是现存于 Node.js 和 TypeScript 生态环境中的数据库工具的主要问题。

Web 应用的开发过程中，需要花费大量时间与关系型数据库打交道，你可能需要花费数小时来调试 SQL 查询语句或者复杂的 ORM 对象模型。

自己手写 SQL 使用数据库驱动 API 当然可以完全控制数据库操作，但是，生产力极低，而且会遇到很多细碎的事情，如手动处理链接、操作模板。而使用 ORM 工具，面临的问题就是通过一层封装，SQL 控制力被削弱，需要根据 ORM 规范构造 SQL。

使用 SQL Builder 可以实现 SQL 语言的强力控制，但生产力一般，如 knex.js 这种工具为构建 SQL 语句提供了封装层次较高的 API。但最大的问题在于这种工具需要开发者从 SQL 的角度来对待数据，数据往往是关系型的对象，这就会导致了数据在认知层面与实际层面的差异，开发者不得不经常切换思维模型才能写好 SQL 语句。

另外一个问题是，如果开发者对 SQL 的掌握如果不够好，经常会搬起石头砸自己的脚。

使用 ORM 工具，如 TypeORM，TypeGoose 则可以完全将二维的关系型数据转换为对象模型，可以高效率的进行开发，但是对 SQL 语言的控制力大大消弱。

使用 ORM 表面上可以通过点符合来访问另一个实体，但是私底下却会构造 SQL JOIN 语句，这些 JOIN 是有性能陷阱的，很可能把你的应用拖得很慢，比如著名的 n+1 问题。

总之，ORM的优点是抽象出关系模型并仅根据对象来操作数据。但是问题在于，关系型数据表并不能轻松地映射到对象，这会带来很多复杂性，从而引发陷阱。

Prisma 自称为下一代 ORM，主要目标就是让开发者在处理数据库是更具生产力，为了达到这个目的，Prisma 做出了以下努力：

- 用对象来思考，而不是在大脑中映射关系型数据库
- 查询不是类，以避免复杂的数据模型，提供一套简洁的 API，使你更加方便地操作数据库和理解查询语句。
- 单一真理来源，数据库和数据模型来自同一个地方
- 健康的约束，用来防止常见的陷阱和反模式
- 使做正确的事情变得容易（“成功之道”）
- 查询结果类型安全，返回的数据是 plain old JavaScript objects。
- 少用模板，这样开发者可以关注于业务
- 编辑器自动补全

包含三个主要模块，安装 Prisma CLI 后获取：

- `Prisma Client`: 自动为 Node.js & TypeScript 生成 Query Builder，向数据执行查询；
- `Prisma Migrate`: 声明式数据模型与迁移系统；
- `Prisma Studio`: 数据编辑 GUI 界面工具，非开源软件；

Prisma Client 可以为基于 Node.js or TypeScript 的后端应用提供数据层服务，包括 serverless 或 microservices。例如 REST API，GraphQL API 或 gRPC API 等等需要数据层的应用。

首先，需要安装 Prisma 以及客户模块：

    $ npm install prisma -g
    $ npm install @prisma/client

    $ npx prisma studio -g

注意，这个客户模块调用的是 prisma generate 命令生成的，该命令读取 schema.prisma 数据模型文件并生成客户模块代码。

- 生成的客户模块代码位于 `node_modules/.prisma/client` 目录；
- 类型声明展出文件 `node_modules/@prisma/client/index.d.ts`；

更改数据模型后，需要手动重新生成 Prisma Client，以确保客户模块代码得到更新：

    $ prisma generate

Prisma 只需维护一份 `schema.prisma` 数据模型文件，每次执行迁移指令就会完成数据库的结构更新，并且生成一组 migration 文件，包括本次的变更后的数据库版本，及变更之处。

在数据模型文件中配置以下三部分内容：

- Data source 数据库连接；
- Generator 生成器用来自动生成 Prisma Client；
- Data model 数据模型定义应用中数据模型；

以下是数据模型文件参考：

```js
// Data source
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Generator
generator client {
  provider = "prisma-client-js"
}

// Data model
model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User?   @relation(fields:  [authorId], references: [id])
  authorId  Int?
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}
```

Prisma CLI 会按以下配置查找数据模型文件：

- 执行 introspect, generate, migrate 等命令时，通过 --schema 参数指定的位置；

        prisma generate --schema=./alternative/schema.prisma 

- 在工程配置文件 package.json 指定的位置：

        "prisma": {
            "schema": "db/schema.prisma"
        }

- 默认位置：

        ./prisma/schema.prisma
        ./schema.prisma

Prisma 是将数据库转换为GraphQL API的数据层。 我们可以将其视为一种ORM，但它比传统的ORM强大得多。 使用Prisma，我们可以获得一个服务器（Prisma服务器）作为数据库的代理，并在服务器上运行高性能查询引擎，该引擎为我们生成实际的数据库查询。 除这些以外，我们还获得了一个客户端（Prisma客户端），可用于与服务器交互。 Prisma还向我们的数据库添加了实时事件系统，因此我们可以实时订阅数据库事件。


使用 Prisma 创建新数据库基本步骤：

- 创建一个新的 Prisma 服务；
- 设置 Prisma 并与数据库连接；
- 定义数据模型；
- 部署 Prisma API；
- 生成 Prisma client；
- 创建 GraphQL 服务器以使用 Prisma client 向数据库执行查询；

在现有数据库中使用 Prisma 的基本步骤：

- 创建一个 Prisma 服务；
- 使用 Prisma Docker 映像设置 Prisma 与现有数据库连接；
- 为数据库架构生成对应数据模型；
- 部署 Prisma API；
- 生成 Prisma client；
- 创建 GraphQL 服务器以使用 Prisma client 向数据库挪查询；


使用 Prisma Client 执行数据查询，根据不同的代码运行环境，选择模块相应的导入方式：

```js
// ESM
import { PrismaClient } from '@prisma/client'

// Node.js CommonJS
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// run inside `async` function
const newUser = await prisma.user.create({
  data: {
    name: 'Alice',
    email: 'alice@prisma.io',
  },
})
const users = await prisma.user.findMany()
```
