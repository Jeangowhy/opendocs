

# ⚑ GraphQL API 查询语言
- GraphQL 核心概念 https://www.howtographql.com/basics/2-core-concepts/
- GraphQL Tutorial https://www.apollographql.com/docs/tutorial/introduction
- GraphQL Config https://graphql-config.com/introduction
- GraphQL Code Generator https://graphql-code-generator.com/docs/getting-started/index
- Apollo Server https://www.apollographql.com/docs/apollo-server/
- Apollo Client https://www.apollographql.com/docs/react/get-started/
- How Apollo Server processes GraphQL operations https://www.apollographql.com/docs/apollo-server/data/resolvers
- Apollo Server API https://www.apollographql.com/docs/apollo-server/api/apollo-server/
- GraphQL Server Playground https://github.com/graphql/graphql-playground/releases/tag/v1.8.10
- Graphql Schema Language Cheat Sheet https://github.com/sogko/graphql-schema-language-cheat-sheet
- A reference implementation of GraphQL for JavaScript https://github.com/graphql/graphql-js
- Github GraphQL API Explorer https://docs.github.com/en/graphql/overview/explorer
- GraphQL IDE Monorepo https://github.com/graphql/graphiql
- GraphiQL Live Demo https://graphql.org/swapi-graphql
- GraphQL 技术规范文档 https://github.com/graphql/graphql-spec/releases
- Microsoft's Language Server Protocol https://github.com/Microsoft/language-server-protocol

## 👉 GraphQL 基本概念

Facebook 的移动应用从 2012 年就开始使用 GraphQL，规范于 2015 年开源，现已经运行在多种环境下，并被各种体量的团队所使用。GraphQL SDL - Schema Definition Language 是 API 查询语言，是一个标准，被称为是一个革命性的 API 工具，可以实现比 RESTful API 更强大的数据查询 API。

与传统的 SQL - Structured Query Language 结构化查询语言直接操作数据不同，GraphQL 即图表化查询语言基于 API 查询，不与特定数据库绑定，在 API 结构设计上具有一定的抽象可视化，通过强类型数据模型系统 Schema 描述客户端与服务端的数据结构，以 API 实现查询，实现类似 RESTful API，但又比它更具优势，如果说 RESTful API 是冷兵器，那么 GraphQL 就是火药。

REST - Representational State Transfer 是表现层状态转化，将表现层的功能通过 HTTP 的动作 GET/POST/PUT/DELETE 等等的 API 接口实现，一个功能对应一个 API 地址，返回一套结构一致的数据：

- /api/v1/users/100
- /api/v2/users/200

而 GraphQL 以图表化的数据类型模型重新组织 API，只需要一个 API 地址，根据 SDL 查询语言即可以获取到任何想到的数据，并且以想要的方式组织。从这一点来年，REST 和 GraphQL 的最大差异是的思维模式，一个映射思维，一个是组合思维。

官方的实现是基于 JavaScript 的，随着 GraphQL 的快速发展，目前已经在主流语言中都有相应的实现。

Apollo Client 是一个强大的 JavaScript GraphQL 客户端，用于 React，React Native，Angular2 或者是原生 JavaScript 工作环境。对不同的前端开发环境有相应的集成包，而 React Apollo 就是 Apollo Client 在 React 环境下的集成包。

入门 Apollo Client 最简单的方法是使用 Apollo Boost，它给客户端配置推荐的设置，创建 App 内容包括缓存、本地状态管理以及错误处理。

首先安装以下的软件包：

    npm install apollo-boost react-apollo graphql-tag graphql --save

- apollo-boost 包含了搭建 Apollo 客户端需要的所有东西。
- react-apollo 集成 React 视图层
- graphql-tag 解析 GraphQL 查询必要依赖
- graphql 用于解析 GraphQL 查询

客户端可以使用 create-react-app 来创建并接入 Apollo Client。


GraphQL 可以用三个步骤来描述：

- 用 GraphQL Schema 描述你的数据类型和结构，客户端发出的查询为 Query Schema。
- 用 GraphQL Schema 查询所要的数据，在服务器端定义相应的顶层 Query 类型作为查询入口。
- 得到可预测的，和 Query Schema 一致的结果。

GraphQL Schema 可以理解为用 SDL 语言定义的一个类型集合，上面这一整个流程下来，GraphQL 会依对 Schema 依次进行：

- 对客户查询验证 `Validation`，对 Query 语句进行基本的语法解释，
- 执行客户查询 `Execution`，生成 AST 抽象语法权，根据具体情况执行查询动作。
- 填充响应数据 `Response`，按客户查询数据格式响应。

GraphQL 既是一种用于 API 的查询语言也是一个满足你数据查询的工具，对 API 中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

GraphQL Playground 是一款专门为 GraphQL 设计的免费开源的 IDE，可以加载包含 .graphqlconfig 文件的本地存储库，也可以及连接到远程端点，提供轻松编辑代码的功能与直观的界面，比如本地已经部署好了 apollo-server-micro，打开地址即可以检测到接口的存在，输入查询时就会有相应的提示：

    http://localhost:3000/api/graphql

官方代码仓库还有一款用 React 实现的 GraphiQL IDE，可用于 CodeMirror 或者 Monaco 等在线代码编辑器中，其中 GraphQL Language Service 模块部分实现了微软的 LSP - Language Server Protocol 协议。通过与 LSP 协议服务器交换编辑器的状态信息，服务可以根据编辑的内容返回语法警告等信息，与具体语言无关，能提高编辑器开发体验。


GraphQL 作为用于 API 的查询语言，是一个使用基于类型系统来执行查询的服务端运行时，类型系统由你的数据定义。GraphQL 并没有和任何特定数据库或者存储引擎绑定，而是依靠你现有的代码和数据支撑。

一个 GraphQL 服务是通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数。

按官方站点的例子，假定一个 GraphQL 服务告诉我们当前登录用户是 me，这个用户的类型定义可能像这样：

```gql
type Query {
  me: User
}

type User {
  id: ID
  name: String
}
```

上面定义了 Query 根级别查询，一并的应该还有每个字段类型上的解析函数：

```gql
function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```

GraphQL 服务运行起来后随时接收 GraphQL 客户端查询，并开始验证和执行。接收到的查询要先进行检查，确保它只引用了已定义的类型和字段，然后运行指定的解析函数来生成结果。

例如这个查询：

```gql
{
  me {
    name
  }
}
```

就会产生只包含用户名称的 JSON 结果：

```gql
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```

以上的简单示例可以解析 GraphQL 的基本特性：

- **强类型** GraphQL与 C 和 Java 等静态类型语言相似，服务端能用 SDL 定义响应什么形状和性质的数据，而 RESTful 是弱类型的，缺少机器可读的元数据；
- **分工** GraphQL 让服务端定义好支持哪些 Queries，把对数据的 Query 需求下放到客户端管理，分工明确的同时保持对 API 的聚焦；
- **分层** Query Schema 本身是定义一组分层的字段，查询就像返回的数据一样，是描述数据和需求的自然方式；
- **可预测性** Query Schema 只返回客户端要求的内容，没有任何冗余不浪费流量，而且它只有一个接口地址，由此衍生了兼容特性；
- **兼容性** 需求变动带来的新增字段不影响老客户端，服务端再也不需要版本号了，极大简化了兼容问题；传统的 App 升级会伴随 API 升级，这意味着有大量 API 服务端地址维护。而在 Fackbook 通过 GraphQL API 曾支持了横跨 3 年的移动端。
- **自检性** GraphQL 能在执行 Query 之前，即在开发时提供描述性错误消息。在给定查询的情况下，工具可以确保其句法是正确有效的，这使得构建高质量的客户端变得更加容易；
- **Doc & Mock** GraphQL 的文档永远和代码同步，开发无需维护散落多处的文档，调用者也无需担心过期问题，而且基于类型系统的强力支撑和 graphql-tools，mocking 会变得无比容易。

数据和实体背后的本质也是关系图，服务端用对象和关系的形式处理，只不过在数据库用扁平的表格存储它们，还可以通过 GraphQL 把到对外暴露的 API 也建模成一张数据关系图。

GraphQL 沉淀出来的数据模型 Schema 也可以作为一种给你的团队，后端前端客户端甚至产品及第三方沟通的共同语言，让大家对这些业务领域的规则形成共同的理解，最终达成共识。

## 👉 GraphQL 查询与类型系统

GraphQL 的类型系统可以大概分三类：

- 基本类型 `List` `Scalar` `Object` `Interface` `Union` `Enum` `Input Object`
- 其中 Scalar 标量类型包括包含 `Int` `String` `Boolean` `Float` `ID`，ID 会串行化为字符串。
- 内置类型，如用于自省的内部类型 `__Schema` `__Type` `__TypeKind` `__Field` `__InputValue` `__EnumValue` `__Directive` `__DirectiveLocation`

通常 GraphQL Schema 编写类型的集合时，有三个特殊的顶级类型 `Root Type`，它们是客户端请求的入口点，对应的是三种基本操作：

```gql
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

除了从服务器 `Query` 查询信息外，大多数应用程序还需要某种方法来更改当前存储在后端的数据。在 GraphQL 中，这些变化是通过 `Mutation` 来实现的，可以对现有数进行更新、删除，或创建新数据。应用程序的另一个重要要求是与服务器建立实时连接，以便立即了解重要事件。对于这个用例，GraphQL 提供了 `Subscription` 订阅的概念。

当客户机订阅事件时，它将启动并保持与服务器的稳定连接。每当该特定事件实际发生时，服务器就会将相应的数据推送到客户机。与遵循典型的 request-response-cycle 的查询和突变不同，订阅表示发送到客户端的数据流，语法上与 Query 或 Mutation 无异。

假如，客户端的查询请求如下：

```gql
{
  allUsers {
    name
  }
}
```

那么相应的 Query 入口点就应该定义 `allUsers` 这个 API 的根字段：

```gql
type Query {
  allUsers: [User!]!
}
```

在 GraphQL 基本功能中，还有一种称为自省 Introspection 的能力。

最基础的两个自省类型是 `__Schema` 和 `__Type`，对于两个查询方法 `__type` 和 `__schema`：

    __schema: __Schema!
    __type(name: String!): __Type

例如使用 `__type` 方法获取类型自省信息，它可以用来查询现有 Schema 数据模型中定义的类型信息，而 `__schema` 则可以获取当前类型系统完整的类型定义信息。

特殊情况下，可能不知道 GraphQL 服务会返回什么类型的数据，需要在客户端进行处理，GraphQL 允许使用 `__typename` 查询具体的类型名称，这是一种元数据字段 meta field，可以在任何需要当前位置的对象类型信息时使用：

```gql
{
  search(text: "an") {
    __typename
    ... on Human {
      name
    }
    ... on Droid {
      name
    }
    ... on Starship {
      name
    }
  }
}
```

比如以下通过自省来查询 User 类型有什么字段：

```gql
{
  __type(name: "User") {
    __typename
    name
    fields {
      name
      type {
        name
      }
    }
  }
}
```

示范使用 `__schema` 获取顶层的 Query 查询类型中定义的字段信息：

```gql
{
  __schema {
    queryType {
      fields {
        name type {
          kind ofType {
            kind name
          }
        }
      }
    }
  }
}
```

在 GraphQL 内部，introspectionTypes 导出了用两个下划线开头的内省系统类型：

- `__Schema` 代码整个数据模型。
- `__Type` 是内省系统的核心类型，代表系统中的标量，接口，对象类型，联合，枚举等各种基础类型信息的类型，就是提供类型信息。
- `__TypeKind` 枚举类型，指示 GraphQL 基础类型，`SCALAR` `OBJECT` `INTERFACE` `UNION` `ENUM` `INPUT_OBJECT` `LIST` `NON_NULL`。
- `__Field` 类型表示对象或接口类型中的每个字段。
- `__InputValue` 类型表示字段和指令参数以及输入对象的字段 `inputFields`。
- `__EnumValue` 返回枚举值。
- `__Directive` 类型表示服务器支持的指令。
- `__DirectiveLocation` 枚举类型，指示放置指令的位置。

参考文档给出的各自省类型的定义，可以看到 `__Type` `__Field` 两种类型的差别，字段定义“本身”就是一种类型，这个本身指的是字段的字符串表达的这部分，即字段名称。同时，字段所关联的值也有自己的类型，`__Field` 与 `_Type` 不同，类型可以有引用类型 `ofType` 和类型枚举 `kind`。而字段可以是一个方法，所有它有 `args` 这个属性，但没有 `kind` 这个类型枚举属性，因为字段本身就是字符串：

```gql
type __Schema {
  description: String
  types: [__Type!]!
  queryType: __Type!
  mutationType: __Type
  subscriptionType: __Type
  directives: [__Directive!]!
}

type __Type {
  kind: __TypeKind!
  name: String
  description: String

  # should be non-null for OBJECT and INTERFACE only, must be null for the others
  fields(includeDeprecated: Boolean = false): [__Field!]

  # should be non-null for OBJECT and INTERFACE only, must be null for the others
  interfaces: [__Type!]

  # should be non-null for INTERFACE and UNION only, always null for the others
  possibleTypes: [__Type!]

  # should be non-null for ENUM only, must be null for the others
  enumValues(includeDeprecated: Boolean = false): [__EnumValue!]

  # should be non-null for INPUT_OBJECT only, must be null for the others
  inputFields: [__InputValue!]

  # should be non-null for NON_NULL and LIST only, must be null for the others
  ofType: __Type
}

type __Field {
  name: String!
  description: String
  args: [__InputValue!]!
  type: __Type!
  isDeprecated: Boolean!
  deprecationReason: String
}

type __InputValue {
  name: String!
  description: String
  type: __Type!
  defaultValue: String
}

type __EnumValue {
  name: String!
  description: String
  isDeprecated: Boolean!
  deprecationReason: String
}

enum __TypeKind {
  SCALAR
  OBJECT
  INTERFACE
  UNION
  ENUM
  INPUT_OBJECT
  LIST
  NON_NULL
}

type __Directive {
  name: String!
  description: String
  locations: [__DirectiveLocation!]!
  args: [__InputValue!]!
  isRepeatable: Boolean!
}

enum __DirectiveLocation {
  QUERY
  MUTATION
  SUBSCRIPTION
  FIELD
  FRAGMENT_DEFINITION
  FRAGMENT_SPREAD
  INLINE_FRAGMENT
  VARIABLE_DEFINITION
  SCHEMA
  SCALAR
  OBJECT
  FIELD_DEFINITION
  ARGUMENT_DEFINITION
  INTERFACE
  UNION
  ENUM
  ENUM_VALUE
  INPUT_OBJECT
  INPUT_FIELD_DEFINITION
}
```

作为数据模型的概括类型，`__Schema` 的属性中包含所有属性信息：

- `description` 说明文字，字符串类型。
- `types` 当前服务中定义的类型列表。
- `queryType` 顶级 Query 查询操作对象。
- `mutationType` 包含顶级 Mutation 数据操作对象，如果当前服务器支持有定义的话。
- `subscriptionType` 包含顶级 Subscription 订阅操作对象，如果当前服务器支持有定义的话。
- `directives` 当前服务器支持的指令列表。

例如，以下利用 `__Schema` 简单地获取数据模型中的所有类型基本信息：
```ts
{
  __schema {
    types {
      name
      description
      kind
    }
  }
}
```

以下获取更完整的类型信息，包括查询、可变、订阅三种顶层类型 `queryType` `mutationType` `subscriptionType`，注意只在其中获取了类型名称和字段名称。另外定义了 `TypeRef` `InputValue` 两种片段类型方便辅助使用，分别用来嵌套地获取字段的引用类型信息，和查询 API 的传入参数类型信息，使用时前缀的 `...` 省略操作符号表示任意个字段片段 `Fragment`。整个数据模型 Schema 的类型信息，包括名称、描述、字段、输入字段等信息都在 `types` 属性中返回，其中开头的文字除了 query 表示要进行查询动作，另外的 IntrospectionQuery 只是作为提示性名字使用的。它们都非必须的，通常使用中都省略：

```ts
query IntrospectionQuery {
  __schema {
    queryType { name fields { name } }
    mutationType { name fields { name } }
    subscriptionType { name fields { name } }
    types {
      ...FullType
    }
    directives {
      name
      description
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  description
  fields(includeDeprecated: true) {
    name
    description
    args { ...InputValue  }
    type { ...TypeRef  }
    isDeprecated
    deprecationReason
  }
  inputFields { ...InputValue  }
  interfaces { ...TypeRef  }
  enumValues(includeDeprecated: true) {
    name
    description
    isDeprecated
    deprecationReason
  }
  possibleTypes { ...TypeRef  }
}

fragment InputValue on __InputValue {
  name
  description
  type {
    ...TypeRef
  }
  defaultValue
}

fragment TypeRef on __Type {
  kind name ofType {
    kind name ofType {
      kind name ofType {
        kind name ofType {
          kind name 
        }
      }
    }
  }
}
```

在生产模式下，Apollo 服务器禁止进行 Introspection 信息输出，可以在实例化时显式启用自省功能：

```ts
const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: {
        endpoint: "/alpha/graphql",
    },
  });
```


## 👉 Query Operation 数据查询

仅仅是遍历对象及其字段，GraphQL 就已经是一个非常有用的数据查询语言了，当你加入给字段传递参数的能力时，事情会变得更加有趣。

假设客户端的查询如下传递了查询参数，注意 `queryName` 作为 Operation name 是可选的，也可以指定一个容易识别的名称：

    query queryName {  user(id: "abc") {    id    name  }}

那么就要求服务端定义了相应的查询 API，这样就可以接收到客户传递的参数：

    type Query {  user(id: ID!): User}

来看完整的包含 Query、Mutation、Subscription 的脚本：

```gql
type Query {
  allUsers(last: Int): [User!]!
}

type Mutation {
  createUser(name: String!, age: Int!): User!
}

type Subscription {
  newUser: User!
}

type User {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: User!
}
```

有了完整的类型定义，还需要处理数据解析器，当 GraphQL 服务器接收到客户端的查询请求，通过验证执行时，就需要为查询动作填充期望的数据，这一过程交给 Resolvers 函数来处理。

前面解析了 Query 定义了顶级字段，那么每个顶级字段对应了一个 Resolver 解析函数，这里假定 users 保存了所有用户信息：

```gql
const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return users.find(user => user.id === args.id);
    }
  }
}
```

每个解析函数接收了四个参数：

- **parent** 此参数指当前解析字段的上层字段，对于顶级字段为空值。字段解析是嵌套进行的，即字段指定的类型所定义的字段是可以包含其它类型的，并且任意深度进行链式解析 Resolver Chain。

- **args** 此参数对象包含从 GraphQL 客户端传来的查询参数，比如查询 `query{ user(id: "4") }` 就会给 `user()` 解析函数传入 `{ "id": "4" }`。

- **context** 所有解析函数共享的上下文对象，可以用来传递状态信息，不限于认证信息、数据库实例加载等等，参考官方文档 FETCHING DATA - Resolvers。

- **info** GraphQLResolveInfo 类型对象，包含有关操作执行状态的信息，包括字段名、从根字段到当前字段的路径等。

```ts
import { GraphQLResolveInfo } from 'graphql'
export interface GraphQLResolveInfo {
  readonly fieldName: string;
  readonly fieldNodes: ReadonlyArray<FieldNode>;
  readonly returnType: GraphQLOutputType;
  readonly parentType: GraphQLObjectType;
  readonly path: Path;
  readonly schema: GraphQLSchema;
  readonly fragments: { [key: string]: FragmentDefinitionNode };
  readonly rootValue: any;
  readonly operation: OperationDefinitionNode;
  readonly variableValues: { [variableName: string]: any };
}
```

示范如何在 ApolloServer 构造函数中设置 Context 初始值：

```ts
// Constructor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (req) => ({
    authScope: getScope(req.headers.authorization)
  })
}));

// Example resolver
(parent, args, context, info) => {
  if(context.authScope !== ADMIN) throw new AuthenticationError('not admin');
  // Proceed
}
```


## 👉 Mutations 更新与输入数据
- https://graphql.org/graphql-js/mutations-and-input-types/

Mutation 和 Query 一样是 Top-Level 类型定义，只是 Query 读取数据，而 Mutation 写数据。

假设，有一个消息处理程序，要进行读写操作，那么就需要 Query 和 Mutation 同时定义。

GraphQL Schema 应该类似如下：

```gql
type Mutation {
  setMessage(message: String): String
}
 
type Query {
  getMessage: String
}
```

将数据库的 `create` `update` 等操作和 Mutation 方法绑定起来是很方便于处理数据的，比如 `setMessage` 方法，同时它也返回数据。mutations 和 queries 方法都可以定义在 root resolvers 并在需要时执行：

```gql
var fakeDatabase = {};
var root = {
  setMessage: ({message}) => {
    fakeDatabase.message = message;
    return message;
  },
  getMessage: () => {
    return fakeDatabase.message;
  }
};
```

更新或删除数据时，Mutation 方法通常会需要相关的参数，比如这里的消息应该有 ID 和消息内容，通过特定 ID 可以更新或删除指定的内容。

这时就需要用 GraphQL 中的输入类型 Input Object，以下示范实现 Mutation 操作。

先为 Schema 定义一个 MessageInput 为消息输入类型，和 Mutation 的各个方法，然后再为 Mutation 实现 Resolvers 方法：

```gql
input MessageInput {
  content: String
  author: String
}
 
type Message {
  id: ID!
  content: String
  author: String
}
 
type Query {
  getMessage(id: ID!): Message
}
 
type Mutation {
  createMessage(input: MessageInput): Message
  updateMessage(id: ID!, input: MessageInput): Message
}
```

需要注意的是，Input types 对象只能有标量类型的字段，不能有对象类型的字段，因为涉及到数据写入逻辑的简化，只能使用基础的标量类型，如列表、Int、Stirng 等。

客户端要调用 Mutation 时，需要在查询中以 mutation 开头，并将参数输入，注意 Mutation 也可以反回查询期待的数据：

```gql
mutation {
  createMessage(input: {
    author: "andy",
    content: "hope is a good thing",
  }) {
    id
  }
}
```

更新消息的查询：

```gql
mutation {
  removeUser(id:"4", input:{
    author: "Wendy",
    content: "an new day",
  }){
    id
  }
}
```

## 👉 Directive resolvers 指令解析
- https://www.graphql-tools.com/docs/directive-resolvers

指令 Directive 就是用来执行特定逻辑功能的，指令通过 `@` 符号跟在字段名后使用。

GraphQL 一般内置了几个基本逻辑指令：

- `@include`  当条件成立时，查询此字段；
- `@skip` 当条件成立时，不查询此字段；

```gql
query {
    search {
        actors @include(if: $queryActor) {
            name
        }
    },
    commentList {
        comments @skip(if: $noComments) {
            from
        }
    }
}
```

过时指令 `@deprecated` 产生警告信息，当使用了标记为过时的字段时，如以下的 ExampleType.oldField 就会触发信息；

```graphql
directive @deprecated(
  reason: String = "No longer supported"
) on FIELD_DEFINITION | ENUM_VALUE
```

```graphql example
type ExampleType {
  newField: String
  oldField: String @deprecated(reason: "Use `newField`.")
}
```

指令使用是有位置约束的，什么样的指令能在什么位置出现有语法规则，总的来说通过两类位置枚举值标记，定义时使用关键字 on 来指定位置：

```gql
ExecutableDirectiveLocation : one of
  `QUERY`
  `MUTATION`
  `SUBSCRIPTION`
  `FIELD`
  `FRAGMENT_DEFINITION`
  `FRAGMENT_SPREAD`
  `INLINE_FRAGMENT`
  `VARIABLE_DEFINITION`

TypeSystemDirectiveLocation : one of
  `SCHEMA`
  `SCALAR`
  `OBJECT`
  `FIELD_DEFINITION`
  `ARGUMENT_DEFINITION`
  `INTERFACE`
  `UNION`
  `ENUM`
  `ENUM_VALUE`
  `INPUT_OBJECT`
  `INPUT_FIELD_DEFINITION`
```


可以实现自己的指令，参考 graphql-tools 给的示范，`@upper` 指令实现查询字段的大写转换：

```ts
import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  directive @upper on FIELD_DEFINITION

  type Query {
    hello: String @upper
  }
`;

// Implement resolvers for out custom Directive
const directiveResolvers = {
  upper(
    next,
    src,
    args,
    context,
  ) {
    return next().then((str) => {
      if (typeof(str) === 'string') {
        return str.toUpperCase();
      }
      return str;
    });
  },
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return 'Hello world!';
    },
  },
};

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
});

const query = `
query UPPER_HELLO {
  hello
}
`;

graphql(schema, query).then((result) => console.log('Got result', result));
```

示例中，为 Query 查询的 `hello` 字段指定了 `@upper` 指令，指令解析方法会接收到 4 个参数，其中 `next()` 总是返回一个 Promise，resolved 就返回原始数据，rejected 就返回错误。

Multi-Directives 多指令并用示范，执行顺序 LTR - Left-2-Right：

```gql
// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from '@graphql-tools/schema';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  directive @upper on FIELD_DEFINITION
  directive @concat(value: String!) on FIELD_DEFINITION

  type Query {
    foo: String @concat(value: "@gmail.com") @upper
  }
`;

// Customs directives, check https://github.com/ardatan/graphql-tools/pull/518
// for more examples
const directiveResolvers = {
  upper(
    next,
    src,
    args,
    context,
  ) {
    return next().then((str) => {
      if (typeof(str) === 'string') {
        return str.toUpperCase();
      }
      return str;
    });
  },
  concat(
    next,
    src,
    args,
    context,
  ) {
    return next().then((str) => {
      if (typeof(str) !== 'undefined') {
        return `${str}${args.value}`;
      }
      return str;
    });
  },
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    foo: (root, args, context) => {
      return 'foo';
    },
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers,
});
```


## 👉 Fragments & Variables 字段片段与变量
- https://graphql.org/learn/queries/#fragments
- https://graphql.org/learn/queries/#using-variables-inside-fragments
- https://graphql.org/learn/queries/#meta-fields

片断 Fragments 就 SDL 语言的一种代码组织形式，前面解析 `__Schema` 获取数据模型信息时已经用到，如果用函数式编程的概念去理解，片段十分像一个函数，定义它然后在需要的地方使用它。

所以 GraphQL 片段也就是可重用代码单元，通过使用片段构造 Fields 字段集，然后将它们包含在需要的查询中，这样可以大大简化需要重复使用的某些字段的代码。

下面示范如何使用片段解决不必要的重复代码：

```gql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

如果查询中返回字段是 `interface` `union` 等类型，可以使用内联片段 inline fragments 获取需要关注的类型。

以下示范如何根据 `$ep` 变量参数的来获取特定的小说人物类型，根据 `$ep` 传入的角色不同，可以得到 Droid 类型或 Human 类型：

```gql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
    ... on Human {
      height
    }
  }
}
```

变量的使用，可以将 Query Scheme 中的数据分离出来，就像 SQL 语句中也使用了变量的语法结构。

官方文档示范了如何在客户端使用变量进行查询，注意在 Query 中使用的 `$input` 变量名加美元符号前缀定义，然后在执行时再将具体值补充到 `variables`：

```js
var author = 'andy';
var content = 'hope is a good thing';
var query = `mutation CreateMessage($input: MessageInput) {
  createMessage(input: $input) {
    id
  }
}`;
 
fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        author,
        content,
      }
    }
  })
})
  .then(r => r.json())
  .then(data => console.log('data returned:', data));
```

在片段中也一样可以使用变量，以下示范来自官方文档：

```gql
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}

fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```

## 👉 Aliases 别名查询

最后，解析一下别名 Alias，因为官方文档说得不是特别清晰，它需要你有一对 sharp eye。

其实定义 Query 查询对象时，字段需要什么数据是可以确定的。但是，当客户端使用这些数据时，不希望用 Query 定义的字段名称，而是希望用另一个名称，那么，就可以给 Query 的字段起别名，同时可以使用指定的参数，如果需要。

还是以官方的代码为示范，假设定义了以下顶层查询对象，注意顶层字段只有 `me`：

```ts
type Query {
  me: User
}
 
type User {
  id: ID
  name: String
}
```

而客户端，希望通过查询得到的数据不使用 `me` 而是使用 `you` 这个字段名，那么就指定这个别名来查询：

```gql
{ 
    you: me { name }
}
```

如果，`me` 是一个可以传参数的查询方法，那么就可以像官方文档展示的那样去使用别名语法，empireHero 和 jediHero 就是 hero 字段的两个别名：

```gql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```



## 👉 GraphQL GraphQLSchema 对象
- https://www.apollographql.com/docs/graphql-tools/generate-schema.html
- https://www.graphql-tools.com/docs/generate-schema/#example

GraphQL 编程中离不开基本的 `GraphQLSchema` 对象，它代表的就是 GraphQL SDL 语言中的 Schema 数的类型模型。

Apollo 提供的 graphql-tools 模块封装了一个 `makeExecutableSchema()` 方法，可以简化支持开发 GraphQL 服务器的特定工作流程。其中 GraphQL Schema 数据类型模型设计是首要的，它充当前端和后端之间的契约。这个模块不一定适合所有人，但它可以是一个很好的方法，让一个服务器启动并运行一个非常明确的关注点分离。这些关注点与 Facebook 关于使用 GraphQL 的最佳方式的方向一致。

直接实例化 `GraphQLSchema` 执行更灵活的操作：

```js
const { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      hello: {
        type: GraphQLString,
        resolve: () => 'Hello world!'
      }
    })
  })
});
graphql(schema, '{ hello }').then((response) => {
  console.log(response);
});
```

在实际项目中使用 apollo-server-micro 和直接使用 GraphQL 模块有些差别。

- Apollo 微服务器的 `gql` 方法得到的是 graphql `DocumentNode` 对象，这是 GraphQL SDL 语言语法树节点 `ASTNode` 的一种类型；
- GraphQL 的 `buildSchema()` 方法构造得到 graphql `GraphQLSchema` 对象；

示范使用 apollo-server-micro：

```ts
import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql(`
  type Query {
    count: Int
    sayHello(msg:String, time:Int): String
  }
`)

const resolvers = {
  Query: {
    count(parent:any, args:any, context:any, info: GraphQLResolveInfo) {
      return count++
    },
    sayHello(parent:any, args:any, context:any, info: GraphQLResolveInfo) {
      return args.msg ?? 'Hello World!';
    },
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: '/api/graphql' })
```

示范结合 express 使用 GraphQL：

```ts
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
 
var schema = buildSchema(`
  type Query {
    ip: String
  }
`);
 
const loggingMiddleware = (req, res, next) => {
  console.log('ip:', req.ip);
  next();
}
 
var root = {
  ip: function (args, request) {
    return request.ip;
  }
};
 
var app = express();
app.use(loggingMiddleware);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
```

两种方法的原型参考：

```ts
// This currently provides the ability to have syntax highlighting as well as
// consistency between client and server gql tags
import { DocumentNode } from 'graphql';
import gqlTag from 'graphql-tag';
export const gql: (
  template: TemplateStringsArray | string,
  ...substitutions: any[]
) => DocumentNode = gqlTag;
```

```ts
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
export function buildSchema(
  source: string | Source,
  options?: BuildSchemaOptions & ParseOptions,
): GraphQLSchema;

```

从方法原型可以推测 `ApolloServer` 会通过 gql 得到的 `DocumentNode` 后，会再执行其 graphql-tools 模块导出的 `makeExecutableSchema()` 方法：

```ts
export declare function makeExecutableSchema<TContext = any>({ 
    typeDefs, resolvers, 
    connectors, logger,
    allowUndefinedInResolve, resolverValidationOptions, 
    directiveResolvers, schemaDirectives, 
    parseOptions, inheritResolversFromInterfaces 
    }: IExecutableSchemaDefinition<TContext>): GraphQLSchema;
```

对比一下官方 graphql-js 模块提供的 `buildSchema()` 和来自 Appolo 提供的 `makeExecutableSchema()`，它们做了一些稍微不同的事情。

- `buildSchema()` 从 Schema 脚本中构建数据类型模型对象，它只需要一个 GraphQL 类型定义集合作为参数，是纯类型定义部分。
- `makeExecutableSchema()` 将 Schema 类型模型，和对应的解析器组合在一起以生成可执行的 Schema 模型，作为 graphql-tools 软件包的一部分，可以在编写解析器时更轻松地使用模式语言。


`ApolloServer` 扩展自 apollo-server-core 模块的 `ApolloServerBase`，并在内部的构造器中调用 `initSchema()` 再执行 `makeExecutableSchema()`。

```ts
constructedSchema = graphql_tools_1.makeExecutableSchema({
    typeDefs: augmentedTypeDefs,
    schemaDirectives,
    resolvers,
    parseOptions,
});
```


## 👉 GraphQL Cheat Sheet

GraphQL 使用中的基本类型和语法要素表，感谢前人整理，我抄一遍：

```js
| GraphQL Schema Language Cheat Sheet            |                                                |                                             |
|                                                |                                                |                                             |
| # define Entity interface                      | ======== Schema ============================== | ======== Input Arguments ================== |
| interface Entity {                             | schema             GraphQL schema deffinaition | type Query {                                |
|     id: ID!                                    | query               A readonly fetch operation |   users(limit: Int): [User]                 |
|     name: string                               | mutation   A write followedd by fetch opertion | }                                           |
| }                                              | subscriptiom     A subscription operation(exp) |                                             |
|                                                |                                                | type Query {                                |
| # Define custom URL scalar                     | ======== Type Definitions ==================== |   users(limt: Int = 10): [User]             |
| scalar URL                                     | []              List               GraphQLList | }                                           |
|                                                | !           Non-null            GraphQLNonNull |                                             |
| # User type implements Entity interface        | scalar        Scalar         GraphQLScalarType | type Query {                                |
| type User implements Entity {                  | type          Object         GraphQLObjectType |   user(limit: Int, sort: String): [User]    |
|     id: ID!                                    | interface  Interface      GraphQLInterfaceType | }                                           |
|     name: String                               | union          Union          GraphQLUnionType |                                             |
|     age: Int                                   | enum            Enum           GraphQLEnumType | type Query {                                |
|     balance: Float                             | input   Input Object    GraphQLInputObjectType |   users(limit: Int = 10,                    |
|     is_active: Boolean                         |                                                |          sort: String): [User]              |
|     friends: [User]!                           |                                                | }                                           |
|     homepage: URL                              | ======== Type Modifiers ====================== |                                             |
| }                                              |  String                        Nullable String | type Query {                                |
|                                                |  String!                       Non-null String |   users(limit: Int,                         |
| # root Query type                              | [String]              List of nullable Strings |          sort: String = "asc"): [User]      |
| type Query {                                   | [String]!     Non-null list of nullable String | }                                           |
|     me: User                                   | [String!]!    Non-null list of non-null String |                                             |
|     friends(limit: Int = 10): [User]!          |                                                | type Query {                                |
| }                                              | ======== Input Types ========================= |   users(limit: Int = 10,                    |
|                                                | input ListUsersInput {                         |          sort: String = "asc"): [User]      |
| #custom complex input type                     |   limit: Int                                   | }                                           |
| input ListUsersInput {                         |   since_id: ID                                 |                                             |
|     limit: Int                                 | }                                              | ======== Interface ======================== |
|     since_id: ID                               |                                                | interface Foo {                             |
| }                                              | type Mutation {                                |   is_foo: Boolean                           |
|                                                |   users(params: ListUsersInput): [User]!       | }                                           |
| # root mutation type                           | }                                              |                                             |
| type Mutation {                                |                                                | interface Bar {                             |
|     users(params: ListUsersInput): [User]!     | ======== Custom Scalars ====================== |   is_bar: Boolean                           |
| }                                              | scalar URL                                     | }                                           |
|                                                | type User {                                    |                                             |
| # GraphQL root schema type                     |   name: String                                 | interface Goo implements Foo {              |
| schema {                                       |   homepage: URL                                |   is_foo: Boolean                           |
|     query: Query                               | }                                              |   is_goo: Boolean                           |
|     mutation: Mutation                         |                                                | }                                           |
|     subscription: ...                          | ======== Union Types ========================= |                                             |
| }                                              | type Foo {                                     | interface Boo implements Foo, Bar {         |
|                                                |   name: String                                 |   is_foo: Boolean                           |
| ======== Enums ================================| }                                              |   is_bar: Boolean                           |
| enum STATE {                                   |                                                |   is_boo: Boolean                           |
|   NOT_FOND                                     | type Bar {                                     | }                                           |
|   ACTIVE                                       |   is_bar: String                               |                                             |
|   INACTIVE                                     | }                                              | ======== Built-in Scalar Types ============ |
|   SUSPENDED                                    |                                                | Int                           Basic Integer |
| }                                              | union SingleUnion = Foo                        | Float                        Basic Floating |
|                                                | union MultipleUnion = Foo | Bar                | String                         Basic String |
| type Root {                                    | type Root {                                    | Boolean                       Basic Boolean |
|   stateForUser(userID: ID!): STATE!            |   single: SingleUnion                          | ID                     Serialized as String |
|   users(state: STATE, limit: Int = 10): [User] |   multiple: MultipleUnion                      |                                             |
| }                                              | }                                              |                                             |
```

此表基本涉及比较完整的 Schema 类型语法要素：

- Schema 类型
    - 类型系统 - Type System
    - 类型语言 - Type Language
    - 对象类型和字段 - Object Types and Fields
    - 参数 - Arguments
    - 查询和变更类型 - The Query and Mutation Types
        - 字段 - Fields
        - 参数 - Arguments
        - 别名 - Aliases
        - 片段 - Fragments
        - 操作名称 - Operation Name
        - 变量 - Variables
        - 指令 - Directives
        - 变更 - Mutations
        - 内联片段 - Inline Fragments
    - 标量类型 - Scalar Types
    - 枚举类型 - Enumeration Types
    - 列表和非空 - Lists and Non-Null
    - 接口 - Interfaces
    - 联合类型 - Union Types
    - 输入类型 - Input Types


## 👉 SQLite ORM 实现
- https://github.com/realm/realm-js
- https://docs.mongodb.com/realm/sdk/
- https://docs.mongodb.com/realm/graphql/
- https://www.sqlite.org/index.html
- https://github.com/mapbox/node-sqlite3
- Proxy 对象代理参考文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
- Reflect 文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
- Node 版本管理 https://github.com/nvm-sh/nvm/blob/master/README.md
- https://github.com/typeorm/typeorm

在项目开发中，关系型数据库的应用层根据不同的规模需要可以划分成几个级别：

- 数据库原始 API 获取数据；
- 简单的 API 封装；
- 对象关系映射 ORM - Object Relation Mapping 框架；
- 数据集群化，分布式负载均衡系统；

可以参考 Realm 的实现，这个数据接口框架基于 C++ 编写，直接运行在你的移动设备硬件上，运行速度很快，目前已经有多种语言的实现版本，Swift, Objective-C, Java, Kotlin, C#, JavaScript。此存储库包含的 Java 版本的开源代码，目前在 Android 上运行。

Realm 的特点：

- 移动优先：Realm 是第一个直接在手机、平板电脑和可穿戴设备内部运行的数据库。
- 简单：数据直接作为对象公开，并且可以通过代码查询，从而消除了对 ORM 性能和维护问题的需求。
- 现代：Realm 支持简单的线程安全，关系和加密[relationships & encryption]。
- 快速：Realm 在常见操作上比原始 SQLite 更快，同时保持极其丰富的功能集。

这里基于 SQlite 和 TypeScript 实现一个 ORM，实际上，TS 作为 JavaScript 的超集，除了提供复杂的类型外，同时也大大加强了动态脚本编程的能力。这其中就有 Decorators 装饰器和 Metadata 元编程这种能力。

通过 metaclass 实现 Class-DataRow 之间的映射，是一个典型的 ORM 功能。目的就是把关系数据库的一行映射为一个对象，也就是一个类对应一个表，这样写代码更简单，不用直接操作 SQL 语句。

要编写一个 ORM 框架，所有的类都只能动态定义，因为只有使用者才能对数据表的结构下定义，即必须由使用者定义 ORM 的模型类。而 ORM 框架只负责将模型类的数据构造成相应的 SQL 以更新到数据库中。一般情况下，ORM 会定义基础模型类 Model，它提供基础的 CURD (save/select/add/delete) 功能以完成相应的数据库操作。

通常，需要对数据模型对象 Model 进行操作，模型的方法实现数据的对接，假设将要实现的 ORM 需要提供以下功能：

    let m = new Model(...fields)
    m.FieldValue = "exquisite"
    m.save()
    m.delete()
    m.offset = {start:0, size:10}
    m.orderBy = ORDER.ASC
    m.groupBy = "Field"
    m.execSQL("sql...")
    let f = m.find({id: 1})

设计上，需要一个基础的数据模型对象，并且要方便用户对其进行扩展，因为个对象不能与特定数据绑定。另外可能需要一个数据库管理对象，作为连接等信息，的管理者，模型对象通过它与具体数据交互。

在开始前，需要了解一组 API 和实现向应式数据绑定的原理，利用 ECMAScript 5.1 规范中定义的 `Object.defineProperty()` 属性定义接口，这个方法用来定义对象属性描述符。对象属性描述符有**数据描述符**和**存取描述符**。数据描述符是一个具有值的属性，可以配置读写性 `writable`。存取描述符是由 Getter、Setter 函数描述的属性，即对属性读写时的关联函数。

描述符必须是这两种形式之一，不能同时是两者，简单地说就是 `get`、`set` 和 `value`、`writable`不能同时定义。这个属性定义接口在 Internet Explorer 9 中才被支持，IE8 虽然实现这个接口但只能在 DOM 对象上使用，这就是 Vue 不支持旧版 IE8 的原因。

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

最新的 API 是代理 Proxy 它会将操作转发到目标对象，所有的捕捉器是可选的，如果没有定义某个捕捉器，那么就会保留源对象的默认行为。

可用的捕捉器还有 `get()` 属性读取操作的捕捉器，`set()` 属性设置操作的捕捉器等等。

```ts
var target = {};
var handler = {
  get: function (target, property, receiver) {
    return `Hello, ${property}!`;
  }
};

var p = new Proxy(target, handler);
p.world === 'Hello, world!';
```

另外一个知识点是使用 Reflect.metadata API：

有三个设计时元数据主键 Metadata Design Keys 可以获取相应的类型信息：

- `Type metadata` 设计时类型信息使用主键 "design:type"
- `Parameter type metadata` 设计时参数列表信息使用主键 "design:paramtypes"
- `Return type metadata` 设计时返回值类型使用主键 "design:returntype"

只要 reflect-metadata 库被引入了，设计阶段添加的类型信息可以在运行时使用。

```ts
import 'reflect-metadata'

// metadata save to CLASS
@Reflect.metadata('name', "[It's A]") 
class A {
  // metadata save to PROTOTYPE
  @Reflect.metadata('name', "[It's hello]") 
  hello() {}
}

const objs = [A, new A, A.prototype]
objs.map(obj => console.log(
    Reflect.getMetadata('name', obj), 
    Reflect.getOwnMetadata('name', obj),
    Reflect.getMetadata('name', obj, 'hello'),
    Reflect.getOwnMetadata('name', obj ,'hello')
    ))
```

以上例子的输出：

    [It's A] [It's A] undefined undefined
    undefined undefined [It's hello] undefined
    undefined undefined [It's hello] [It's hello]

- 首先，无论是 `getMetadata()` `getOwnMetadata()`，读取类对象的元数据只有在 obj 是类对象 A 时才能读取到。
- 其次，读取原型上的元数据，两者都可以。
- 最后，读取类实例上的元数据，`Own` 方法不执行原型链回溯查找，所以从 A 类实例读取原形链上的元数据，只有使用 `getMetadata()` 才能成功获取。



为了使用 TypeScript 的元编程，需要在 tsconfog.json 配置 `experimentalDecorators` 为激活状态，或者使用命令行监测文件动态编译：

    tsc --target ES5 --experimentalDecorators -w $file

如果无效，就可能需要使用 Babel 转译了：

    npm install babel-preset-react-app @babel/core @babel/plugin-proposal-decorators

或者会收到以下错误提示：

    error TS1240: Unable to resolve signature of property decorator when called as an expression.

    Syntax error: Support for the experimental syntax 'decorators-legacy' isn't currently enabled

导致 TS1240 的问题可能是因为使用了错误的装饰器签名，如将方法装饰器用途属性装饰器。双或者 return 写成单独一行，而后装饰器函数当成一个整体，导致自动给返回语句插入了行尾的分号。

安装转译模块后再配置 package.json：

```json
"babel": {
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ],
  "presets": [
    "react-app"
  ]
},
```



## 👉 Loading .graphql Files
- Loading .graphql Files https://create-react-app.dev/docs/loading-graphql-files

除了使用 gql 字符串模板定义类型库，还可以使用文件导入：

```ts
import { gql } from 'graphql.macro';
 
const query = gql`
  query User {
    user(id: 5) {
      lastName
      ...UserEntry1
    }
  }
`;
```

先安装模块：

    npm install --save graphql graphql.macro

    yarn add graphql graphql.macro

然后使用 loader 加载 `.gql` `.graphql` 文件：

```js
import { loader } from 'graphql.macro';

const query = loader('./foo.graphql');
```

设定 `foo.graphql` 文件定义内容如下：

```gql
query {
  hello {
    world
  }
}
```

以上例子会转换为：

```gql
const query = {
  'kind': 'Document',
  'definitions': [{
    ...
  }],
  'loc': {
    ...
    'source': {
      'body': '\\\\n  query {\\\\n    hello {\\\\n      world\\\\n    }\\\\n  }\\\\n',
      'name': 'GraphQL request',
      ...
    }
  }
};
```

